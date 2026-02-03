/**
 * Search Engine
 *
 * Main search engine class providing full-text search with fuzzy matching,
 * relevance scoring, category filtering, and natural language query support.
 */

import type {
  SearchQuery,
  SearchResults,
  SearchResult,
  SearchDocument,
  ParsedQuery,
  SpellingSuggestion,
  SearchSuggestion,
  SearchCategory,
  RecentSearch,
  SearchConfig,
} from './types';
import { DEFAULT_SEARCH_CONFIG } from './types';
import {
  tokenize,
  getPostings,
  expandQuery,
  getDocument,
  getAllDocuments,
  getIndexStats,
  getCategoryIcon,
  getCategoryColor,
} from './SearchIndex';
import {
  expandAbbreviation,
  getSynonyms,
  getRelatedTerms,
  categorizeTerms,
} from './medicalTerminology';

// ============================================
// Search Engine Class
// ============================================

export class SearchEngine {
  private config: SearchConfig;
  private recentSearches: RecentSearch[] = [];
  private popularSearches: Map<string, number> = new Map();

  constructor(config: Partial<SearchConfig> = {}) {
    this.config = { ...DEFAULT_SEARCH_CONFIG, ...config };
    this.loadSearchHistory();
  }

  // ============================================
  // Main Search Method
  // ============================================

  /**
   * Perform a search with the given query and options
   */
  search(queryOrOptions: string | SearchQuery): SearchResults {
    const startTime = performance.now();

    // Normalize input
    const options: SearchQuery = typeof queryOrOptions === 'string'
      ? { query: queryOrOptions }
      : queryOrOptions;

    const {
      query,
      categories,
      sources,
      anatomicalSystem,
      fuzzy = this.config.fuzzyEnabled,
      fuzzyThreshold = this.config.fuzzyThreshold,
      limit = this.config.defaultLimit,
      offset = 0,
      minScore = 0,
      includeSuggestions = true,
    } = options;

    // Handle empty or short queries
    if (!query || query.trim().length < this.config.minQueryLength) {
      return {
        query,
        results: [],
        totalMatches: 0,
        searchTimeMs: performance.now() - startTime,
        suggestions: [],
        didYouMean: [],
        categoryBreakdown: {} as Record<SearchCategory, number>,
        relatedSearches: [],
      };
    }

    // Parse the query
    const parsedQuery = this.parseQuery(query);

    // Get matching documents
    const matches = this.findMatches(parsedQuery, {
      categories,
      sources,
      anatomicalSystem,
      fuzzy,
      fuzzyThreshold,
    });

    // Score and rank results
    const scoredResults = this.scoreResults(matches, parsedQuery);

    // Filter by minimum score
    const filteredResults = scoredResults.filter((r) => r.score >= minScore);

    // Calculate category breakdown
    const categoryBreakdown = this.calculateCategoryBreakdown(filteredResults);

    // Get suggestions if requested
    let suggestions: SpellingSuggestion[] = [];
    let didYouMean: string[] = [];
    let relatedSearches: string[] = [];

    if (includeSuggestions && filteredResults.length < 5) {
      suggestions = this.getSpellingSuggestions(parsedQuery);
      didYouMean = this.getDidYouMeanSuggestions(parsedQuery);
    }

    relatedSearches = this.getRelatedSearches(parsedQuery);

    // Apply pagination
    const paginatedResults = filteredResults.slice(offset, offset + limit);

    // Save to history
    if (query.trim().length >= 3) {
      this.addToHistory(query, filteredResults.length);
      this.incrementPopularity(query);
    }

    return {
      query,
      results: paginatedResults,
      totalMatches: filteredResults.length,
      searchTimeMs: performance.now() - startTime,
      suggestions,
      didYouMean,
      categoryBreakdown,
      relatedSearches,
    };
  }

  // ============================================
  // Query Parsing
  // ============================================

  /**
   * Parse a search query into tokens and detect intent
   */
  parseQuery(query: string): ParsedQuery {
    const normalized = query.toLowerCase().trim();
    const tokens = tokenize(query);

    // Detect intent
    let intent: ParsedQuery['intent'] = 'lookup';
    const questionWords = ['what', 'why', 'how', 'when', 'where', 'which', 'who'];
    const compareWords = ['vs', 'versus', 'compare', 'difference', 'between'];
    const exploreWords = ['about', 'tell', 'explain', 'describe', 'learn'];

    if (tokens.some((t) => questionWords.includes(t.normalized))) {
      intent = 'question';
    } else if (tokens.some((t) => compareWords.includes(t.normalized))) {
      intent = 'compare';
    } else if (tokens.some((t) => exploreWords.includes(t.normalized))) {
      intent = 'explore';
    }

    // Detect negations
    const negations: string[] = [];
    const negationWords = ['not', 'no', 'without', 'except', 'exclude'];
    for (let i = 0; i < tokens.length; i++) {
      if (negationWords.includes(tokens[i].normalized) && i + 1 < tokens.length) {
        negations.push(tokens[i + 1].normalized);
      }
    }

    // Detect entities
    const entities: ParsedQuery['entities'] = [];
    for (const token of tokens) {
      if (token.isStopWord) continue;

      const category = categorizeTerms(token.original);
      if (category) {
        entities.push({
          type: category === 'anatomy' ? 'anatomy' :
                category === 'conditions' ? 'condition' :
                category === 'medications' ? 'medication' :
                category === 'symptoms' ? 'symptom' : 'condition',
          value: token.original,
          confidence: 0.8,
        });
      }
    }

    return {
      original: query,
      normalized,
      tokens,
      intent,
      entities,
      negations,
      modifiers: [],
    };
  }

  // ============================================
  // Match Finding
  // ============================================

  /**
   * Find documents matching the query
   */
  private findMatches(
    parsedQuery: ParsedQuery,
    options: {
      categories?: SearchCategory[];
      sources?: string[];
      anatomicalSystem?: string;
      fuzzy?: boolean;
      fuzzyThreshold?: number;
    }
  ): Map<string, { doc: SearchDocument; matchedTerms: string[]; matchType: SearchResult['matchType'] }> {
    const matches = new Map<string, { doc: SearchDocument; matchedTerms: string[]; matchType: SearchResult['matchType'] }>();

    // Get all non-stop-word tokens
    const searchTerms = parsedQuery.tokens
      .filter((t) => !t.isStopWord)
      .map((t) => t.normalized);

    if (searchTerms.length === 0) return matches;

    // For each term, get matching documents
    for (const term of searchTerms) {
      // Get exact matches
      const exactPostings = getPostings(term);
      for (const posting of exactPostings) {
        const doc = getDocument(posting.docId);
        if (!doc) continue;

        // Apply filters
        if (options.categories && !options.categories.includes(doc.category)) continue;
        if (options.anatomicalSystem && doc.anatomicalSystem !== options.anatomicalSystem) continue;

        if (!matches.has(doc.id)) {
          matches.set(doc.id, { doc, matchedTerms: [], matchType: 'exact' });
        }
        matches.get(doc.id)!.matchedTerms.push(term);
      }

      // Get expanded matches (synonyms, abbreviations)
      const expandedTerms = expandQuery(term);
      for (const expanded of expandedTerms) {
        if (expanded === term) continue;

        const expandedPostings = getPostings(expanded);
        for (const posting of expandedPostings) {
          const doc = getDocument(posting.docId);
          if (!doc) continue;

          if (options.categories && !options.categories.includes(doc.category)) continue;
          if (options.anatomicalSystem && doc.anatomicalSystem !== options.anatomicalSystem) continue;

          if (!matches.has(doc.id)) {
            matches.set(doc.id, { doc, matchedTerms: [], matchType: 'synonym' });
          }
          const match = matches.get(doc.id)!;
          match.matchedTerms.push(expanded);
          if (match.matchType === 'exact') {
            match.matchType = 'synonym';
          }
        }
      }

      // Fuzzy matching
      if (options.fuzzy && term.length >= 4) {
        const fuzzyMatches = this.findFuzzyMatches(term, options.fuzzyThreshold || 0.7);
        for (const { docId, matchedTerm } of fuzzyMatches) {
          const doc = getDocument(docId);
          if (!doc) continue;

          if (options.categories && !options.categories.includes(doc.category)) continue;
          if (options.anatomicalSystem && doc.anatomicalSystem !== options.anatomicalSystem) continue;

          if (!matches.has(doc.id)) {
            matches.set(doc.id, { doc, matchedTerms: [], matchType: 'fuzzy' });
          }
          const match = matches.get(doc.id)!;
          match.matchedTerms.push(matchedTerm);
          if (match.matchType === 'exact') {
            match.matchType = 'fuzzy';
          }
        }
      }
    }

    // Also search in full query for phrase matching
    const fullQuery = parsedQuery.normalized;
    for (const doc of getAllDocuments()) {
      if (matches.has(doc.id)) continue;

      // Check if title contains the query
      if (doc.title.toLowerCase().includes(fullQuery)) {
        if (!options.categories || options.categories.includes(doc.category)) {
          matches.set(doc.id, { doc, matchedTerms: [fullQuery], matchType: 'partial' });
        }
      }
    }

    return matches;
  }

  /**
   * Find fuzzy matches for a term using Levenshtein distance
   */
  private findFuzzyMatches(
    term: string,
    threshold: number
  ): Array<{ docId: string; matchedTerm: string }> {
    const results: Array<{ docId: string; matchedTerm: string }> = [];

    // Get all indexed terms
    const stats = getIndexStats();
    if (stats.totalTerms > 10000) {
      // Skip fuzzy matching for very large indexes (performance)
      return results;
    }

    // Search through all documents for fuzzy matches
    for (const doc of getAllDocuments()) {
      const titleLower = doc.title.toLowerCase();
      const similarity = this.calculateSimilarity(term, titleLower);

      if (similarity >= threshold) {
        results.push({ docId: doc.id, matchedTerm: doc.title });
      }

      // Check keywords
      for (const keyword of doc.keywords) {
        const keywordSimilarity = this.calculateSimilarity(term, keyword.toLowerCase());
        if (keywordSimilarity >= threshold) {
          results.push({ docId: doc.id, matchedTerm: keyword });
        }
      }
    }

    return results;
  }

  /**
   * Calculate similarity between two strings (Dice coefficient)
   */
  private calculateSimilarity(s1: string, s2: string): number {
    if (s1 === s2) return 1;
    if (s1.length < 2 || s2.length < 2) return 0;

    const bigrams1 = new Set<string>();
    for (let i = 0; i < s1.length - 1; i++) {
      bigrams1.add(s1.substring(i, i + 2));
    }

    const bigrams2 = new Set<string>();
    for (let i = 0; i < s2.length - 1; i++) {
      bigrams2.add(s2.substring(i, i + 2));
    }

    let intersection = 0;
    for (const bigram of bigrams1) {
      if (bigrams2.has(bigram)) {
        intersection++;
      }
    }

    return (2.0 * intersection) / (bigrams1.size + bigrams2.size);
  }

  /**
   * Calculate Levenshtein edit distance
   */
  private levenshteinDistance(s1: string, s2: string): number {
    const m = s1.length;
    const n = s2.length;

    if (m === 0) return n;
    if (n === 0) return m;

    const d: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(
          d[i - 1][j] + 1,
          d[i][j - 1] + 1,
          d[i - 1][j - 1] + cost
        );
      }
    }

    return d[m][n];
  }

  // ============================================
  // Scoring & Ranking
  // ============================================

  /**
   * Score and rank search results
   */
  private scoreResults(
    matches: Map<string, { doc: SearchDocument; matchedTerms: string[]; matchType: SearchResult['matchType'] }>,
    parsedQuery: ParsedQuery
  ): SearchResult[] {
    const results: SearchResult[] = [];
    const queryTerms = parsedQuery.tokens.filter((t) => !t.isStopWord).map((t) => t.normalized);

    for (const [_id, { doc, matchedTerms, matchType }] of matches) {
      // Base score from match type
      let score = 0;
      switch (matchType) {
        case 'exact':
          score = 100;
          break;
        case 'synonym':
          score = 80;
          break;
        case 'keyword':
          score = 60;
          break;
        case 'fuzzy':
          score = 50;
          break;
        case 'partial':
          score = 40;
          break;
        case 'content':
          score = 30;
          break;
      }

      // Boost for title match
      const titleLower = doc.title.toLowerCase();
      if (titleLower === parsedQuery.normalized) {
        score += 50; // Exact title match
      } else if (titleLower.includes(parsedQuery.normalized)) {
        score += 30; // Title contains query
      } else if (titleLower.startsWith(parsedQuery.normalized.split(' ')[0])) {
        score += 20; // Title starts with first query word
      }

      // Boost for keyword matches
      const keywordMatches = matchedTerms.filter((t) =>
        doc.keywords.some((k) => k.toLowerCase() === t)
      ).length;
      score += keywordMatches * 10;

      // Boost for matched term count
      score += Math.min(matchedTerms.length * 5, 25);

      // Apply document boost
      if (doc.boost) {
        score *= doc.boost;
      }

      // Normalize score to 0-100
      score = Math.min(Math.round(score), 100);

      // Generate snippet
      const snippet = this.generateSnippet(doc, queryTerms);

      results.push({
        id: doc.id,
        category: doc.category,
        source: doc.source,
        title: doc.title,
        description: doc.description,
        score,
        matchType,
        snippet,
        matchedTerms: [...new Set(matchedTerms)],
        navigationPath: doc.navigationPath,
        structureId: doc.structureId,
        entryId: doc.entryId,
        icon: getCategoryIcon(doc.category),
        color: getCategoryColor(doc.category),
      });
    }

    // Sort by score descending
    results.sort((a, b) => b.score - a.score);

    return results;
  }

  /**
   * Generate a highlighted snippet from document content
   */
  private generateSnippet(doc: SearchDocument, queryTerms: string[]): string {
    const content = doc.description || doc.content;
    const lowerContent = content.toLowerCase();

    // Find the best matching position
    let bestPosition = -1;
    let bestMatchCount = 0;

    for (const term of queryTerms) {
      const pos = lowerContent.indexOf(term);
      if (pos !== -1) {
        // Count matches around this position
        let matchCount = 1;
        for (const otherTerm of queryTerms) {
          if (otherTerm !== term) {
            const nearbyPos = lowerContent.indexOf(otherTerm, Math.max(0, pos - 100));
            if (nearbyPos !== -1 && nearbyPos < pos + 100) {
              matchCount++;
            }
          }
        }

        if (matchCount > bestMatchCount) {
          bestMatchCount = matchCount;
          bestPosition = pos;
        }
      }
    }

    if (bestPosition === -1) {
      // No match found, return truncated content
      return content.length > 150 ? content.slice(0, 150) + '...' : content;
    }

    // Extract snippet around match
    const start = Math.max(0, bestPosition - 50);
    const end = Math.min(content.length, bestPosition + 150);
    let snippet = content.slice(start, end);

    if (start > 0) snippet = '...' + snippet;
    if (end < content.length) snippet = snippet + '...';

    return snippet;
  }

  // ============================================
  // Suggestions
  // ============================================

  /**
   * Get spelling suggestions for misspelled terms
   */
  private getSpellingSuggestions(parsedQuery: ParsedQuery): SpellingSuggestion[] {
    const suggestions: SpellingSuggestion[] = [];

    for (const token of parsedQuery.tokens) {
      if (token.isStopWord || token.normalized.length < 3) continue;

      // Check if token has matches
      const postings = getPostings(token.normalized);
      if (postings.length > 0) continue;

      // Find similar terms
      for (const doc of getAllDocuments()) {
        const docTerms = [doc.title, ...doc.keywords, ...(doc.synonyms || [])];

        for (const term of docTerms) {
          const distance = this.levenshteinDistance(token.normalized, term.toLowerCase());
          if (distance > 0 && distance <= 2) {
            const confidence = 1 - (distance / Math.max(token.normalized.length, term.length));
            suggestions.push({
              original: token.original,
              suggestion: term,
              confidence,
              editDistance: distance,
            });
          }
        }
      }
    }

    // Deduplicate and sort by confidence
    const seen = new Set<string>();
    return suggestions
      .filter((s) => {
        const key = `${s.original}:${s.suggestion}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .sort((a, b) => b.confidence - a.confidence)
      .slice(0, 3);
  }

  /**
   * Get "did you mean" suggestions
   */
  private getDidYouMeanSuggestions(parsedQuery: ParsedQuery): string[] {
    const suggestions: string[] = [];

    // Get abbreviation expansions
    for (const token of parsedQuery.tokens) {
      const expansions = expandAbbreviation(token.original);
      suggestions.push(...expansions);
    }

    // Get related medical terms
    for (const token of parsedQuery.tokens) {
      const related = getRelatedTerms(token.original);
      suggestions.push(...related.slice(0, 3));
    }

    return [...new Set(suggestions)].slice(0, 5);
  }

  /**
   * Get related searches based on query
   */
  private getRelatedSearches(parsedQuery: ParsedQuery): string[] {
    const related: string[] = [];

    // Get synonyms and related terms
    for (const token of parsedQuery.tokens) {
      if (token.isStopWord) continue;

      const synonyms = getSynonyms(token.original);
      related.push(...synonyms.slice(0, 2));

      const relatedTerms = getRelatedTerms(token.original);
      related.push(...relatedTerms.slice(0, 2));
    }

    return [...new Set(related)].slice(0, 5);
  }

  /**
   * Get autocomplete suggestions
   */
  getSuggestions(prefix: string): SearchSuggestion[] {
    const suggestions: SearchSuggestion[] = [];
    const lowerPrefix = prefix.toLowerCase();

    if (prefix.length < 2) return suggestions;

    // Add recent searches matching prefix
    for (const recent of this.recentSearches) {
      if (recent.query.toLowerCase().startsWith(lowerPrefix)) {
        suggestions.push({
          text: recent.query,
          type: 'recent',
          icon: '🕐',
          score: 100,
        });
      }
    }

    // Add popular searches matching prefix
    for (const [query, count] of this.popularSearches) {
      if (query.toLowerCase().startsWith(lowerPrefix)) {
        suggestions.push({
          text: query,
          type: 'popular',
          icon: '🔥',
          score: Math.min(count * 10, 90),
        });
      }
    }

    // Add completion suggestions from index
    for (const doc of getAllDocuments()) {
      if (doc.title.toLowerCase().startsWith(lowerPrefix)) {
        suggestions.push({
          text: doc.title,
          type: 'completion',
          category: doc.category,
          icon: getCategoryIcon(doc.category),
          score: 70,
        });
      }
    }

    // Sort by score and deduplicate
    const seen = new Set<string>();
    return suggestions
      .filter((s) => {
        const key = s.text.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .sort((a, b) => (b.score || 0) - (a.score || 0))
      .slice(0, this.config.maxSuggestions);
  }

  // ============================================
  // Category Breakdown
  // ============================================

  /**
   * Calculate category breakdown for results
   */
  private calculateCategoryBreakdown(results: SearchResult[]): Record<SearchCategory, number> {
    const breakdown: Partial<Record<SearchCategory, number>> = {};

    for (const result of results) {
      breakdown[result.category] = (breakdown[result.category] || 0) + 1;
    }

    return breakdown as Record<SearchCategory, number>;
  }

  // ============================================
  // Search History
  // ============================================

  /**
   * Add a search to history
   */
  private addToHistory(query: string, resultCount: number): void {
    if (!this.config.historyEnabled) return;

    // Remove duplicate
    this.recentSearches = this.recentSearches.filter(
      (s) => s.query.toLowerCase() !== query.toLowerCase()
    );

    // Add to front
    this.recentSearches.unshift({
      query,
      timestamp: Date.now(),
      resultCount,
    });

    // Trim to max
    if (this.recentSearches.length > this.config.maxHistoryItems) {
      this.recentSearches = this.recentSearches.slice(0, this.config.maxHistoryItems);
    }

    // Persist
    this.saveSearchHistory();
  }

  /**
   * Increment search popularity
   */
  private incrementPopularity(query: string): void {
    const normalized = query.toLowerCase().trim();
    this.popularSearches.set(normalized, (this.popularSearches.get(normalized) || 0) + 1);
  }

  /**
   * Get recent searches
   */
  getRecentSearches(): RecentSearch[] {
    return [...this.recentSearches];
  }

  /**
   * Clear search history
   */
  clearHistory(): void {
    this.recentSearches = [];
    this.saveSearchHistory();
  }

  /**
   * Load search history from localStorage
   */
  private loadSearchHistory(): void {
    try {
      const saved = localStorage.getItem('search-history');
      if (saved) {
        this.recentSearches = JSON.parse(saved);
      }
    } catch {
      this.recentSearches = [];
    }
  }

  /**
   * Save search history to localStorage
   */
  private saveSearchHistory(): void {
    try {
      localStorage.setItem('search-history', JSON.stringify(this.recentSearches));
    } catch {
      // Ignore storage errors
    }
  }
}

// ============================================
// Singleton Instance
// ============================================

let searchEngineInstance: SearchEngine | null = null;

/**
 * Get the search engine singleton instance
 */
export function getSearchEngine(): SearchEngine {
  if (!searchEngineInstance) {
    searchEngineInstance = new SearchEngine();
  }
  return searchEngineInstance;
}

/**
 * Reset the search engine (for testing)
 */
export function resetSearchEngine(): void {
  searchEngineInstance = null;
}

export default SearchEngine;
