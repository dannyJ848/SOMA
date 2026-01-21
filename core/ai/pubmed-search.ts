/**
 * PubMed Live Search Service
 *
 * Provides real-time PubMed searches to augment RAG responses with
 * the latest biomedical literature.
 */

// NCBI E-utilities base URL
const EUTILS_BASE = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils';

// API key is optional but increases rate limits
const API_KEY = process.env.NCBI_API_KEY || '';

export interface PubMedArticle {
  pmid: string;
  title: string;
  authors: string[];
  journal: string;
  pubDate: string;
  abstract: string;
  doi?: string;
  url: string;
}

export interface PubMedSearchResult {
  query: string;
  totalResults: number;
  articles: PubMedArticle[];
  searchTimeMs: number;
}

/**
 * Build E-utilities URL with optional API key
 */
function buildEutilsUrl(endpoint: string, params: Record<string, string>): string {
  const url = new URL(`${EUTILS_BASE}/${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });
  if (API_KEY) {
    url.searchParams.append('api_key', API_KEY);
  }
  return url.toString();
}

/**
 * Search PubMed for articles matching a query
 */
export async function searchPubMed(
  query: string,
  options: {
    maxResults?: number;
    dateFrom?: string; // YYYY/MM/DD format
    dateTo?: string;
  } = {}
): Promise<PubMedSearchResult> {
  const startTime = Date.now();
  const maxResults = options.maxResults || 5;

  try {
    // Step 1: Search for PMIDs
    const searchParams: Record<string, string> = {
      db: 'pubmed',
      term: query,
      retmax: String(maxResults),
      retmode: 'json',
      sort: 'relevance',
    };

    if (options.dateFrom) {
      searchParams.mindate = options.dateFrom;
      searchParams.datetype = 'pdat';
    }
    if (options.dateTo) {
      searchParams.maxdate = options.dateTo;
    }

    const searchUrl = buildEutilsUrl('esearch.fcgi', searchParams);
    const searchResponse = await fetch(searchUrl);

    if (!searchResponse.ok) {
      throw new Error(`PubMed search failed: HTTP ${searchResponse.status}`);
    }

    const searchData = await searchResponse.json();
    const pmids: string[] = searchData.esearchresult?.idlist || [];
    const totalResults = parseInt(searchData.esearchresult?.count || '0', 10);

    if (pmids.length === 0) {
      return {
        query,
        totalResults: 0,
        articles: [],
        searchTimeMs: Date.now() - startTime,
      };
    }

    // Step 2: Fetch article details
    const articles = await fetchArticleDetails(pmids);

    return {
      query,
      totalResults,
      articles,
      searchTimeMs: Date.now() - startTime,
    };
  } catch (error) {
    console.error('PubMed search error:', error);
    return {
      query,
      totalResults: 0,
      articles: [],
      searchTimeMs: Date.now() - startTime,
    };
  }
}

/**
 * Fetch detailed article information for a list of PMIDs
 */
export async function fetchArticleDetails(pmids: string[]): Promise<PubMedArticle[]> {
  if (pmids.length === 0) return [];

  try {
    const fetchUrl = buildEutilsUrl('efetch.fcgi', {
      db: 'pubmed',
      id: pmids.join(','),
      rettype: 'abstract',
      retmode: 'xml',
    });

    const response = await fetch(fetchUrl);
    if (!response.ok) {
      throw new Error(`PubMed fetch failed: HTTP ${response.status}`);
    }

    const xmlText = await response.text();
    return parseArticlesXml(xmlText);
  } catch (error) {
    console.error('Failed to fetch article details:', error);
    return [];
  }
}

/**
 * Parse PubMed XML response into article objects
 */
function parseArticlesXml(xml: string): PubMedArticle[] {
  const articles: PubMedArticle[] = [];

  // Simple XML parsing without external dependencies
  const articleMatches = xml.match(/<PubmedArticle>[\s\S]*?<\/PubmedArticle>/g) || [];

  for (const articleXml of articleMatches) {
    try {
      const pmid = extractXmlValue(articleXml, 'PMID') || '';
      const title = extractXmlValue(articleXml, 'ArticleTitle') || 'Untitled';
      const abstract = extractXmlValue(articleXml, 'AbstractText') || '';
      const journal = extractXmlValue(articleXml, 'Title') || extractXmlValue(articleXml, 'ISOAbbreviation') || '';

      // Extract authors
      const authorMatches = articleXml.match(/<Author[\s\S]*?<\/Author>/g) || [];
      const authors = authorMatches.map(authorXml => {
        const lastName = extractXmlValue(authorXml, 'LastName') || '';
        const initials = extractXmlValue(authorXml, 'Initials') || '';
        return `${lastName} ${initials}`.trim();
      }).filter(Boolean).slice(0, 3); // Limit to first 3 authors

      // Extract publication date
      const year = extractXmlValue(articleXml, 'Year') || '';
      const month = extractXmlValue(articleXml, 'Month') || '';
      const pubDate = month ? `${year} ${month}` : year;

      // Extract DOI
      const doiMatch = articleXml.match(/<ArticleId IdType="doi">(.*?)<\/ArticleId>/);
      const doi = doiMatch ? doiMatch[1] : undefined;

      articles.push({
        pmid,
        title: cleanXmlText(title),
        authors,
        journal: cleanXmlText(journal),
        pubDate,
        abstract: cleanXmlText(abstract),
        doi,
        url: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`,
      });
    } catch (error) {
      console.warn('Failed to parse article:', error);
    }
  }

  return articles;
}

/**
 * Extract value from XML tag
 */
function extractXmlValue(xml: string, tag: string): string | null {
  const regex = new RegExp(`<${tag}[^>]*>(.*?)<\/${tag}>`, 's');
  const match = xml.match(regex);
  return match ? match[1] : null;
}

/**
 * Clean XML text by removing nested tags and entities
 */
function cleanXmlText(text: string): string {
  return text
    .replace(/<[^>]+>/g, '') // Remove nested tags
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Format PubMed results as context for AI
 */
export function formatPubMedContext(result: PubMedSearchResult): string {
  if (result.articles.length === 0) {
    return '';
  }

  const sections: string[] = [];

  for (let i = 0; i < result.articles.length; i++) {
    const article = result.articles[i];
    const citationNum = i + 1;

    let section = `[PubMed-${citationNum}] ${article.title}`;
    section += `\nAuthors: ${article.authors.join(', ')}${article.authors.length > 3 ? ' et al.' : ''}`;
    section += `\nJournal: ${article.journal} (${article.pubDate})`;
    section += `\nPMID: ${article.pmid}`;

    if (article.abstract) {
      // Truncate abstract if too long
      const abstractText = article.abstract.length > 500
        ? article.abstract.substring(0, 500) + '...'
        : article.abstract;
      section += `\nAbstract: ${abstractText}`;
    }

    sections.push(section);
  }

  return sections.join('\n\n---\n\n');
}

/**
 * Format PubMed citations for the response
 */
export function formatPubMedCitations(result: PubMedSearchResult): Array<{
  index: number;
  source: string;
  section?: string;
  url: string;
}> {
  return result.articles.map((article, i) => ({
    index: i + 100, // Start at 100 to differentiate from RAG citations
    source: 'PubMed',
    section: `${article.title} - ${article.journal} (${article.pubDate})`,
    url: article.url,
  }));
}

/**
 * Search for articles related to a health topic
 */
export async function searchHealthTopic(
  topic: string,
  options: {
    includeReviews?: boolean;
    recentOnly?: boolean;
    maxResults?: number;
  } = {}
): Promise<PubMedSearchResult> {
  let query = topic;

  // Add filters for better results
  if (options.includeReviews) {
    query += ' AND (review[pt] OR systematic review[pt])';
  }

  // Focus on recent literature
  const dateOptions: { dateFrom?: string } = {};
  if (options.recentOnly) {
    const fiveYearsAgo = new Date();
    fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);
    dateOptions.dateFrom = `${fiveYearsAgo.getFullYear()}/01/01`;
  }

  return searchPubMed(query, {
    maxResults: options.maxResults || 3,
    ...dateOptions,
  });
}
