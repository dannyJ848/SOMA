/**
 * Smart Medical Search Service
 *
 * Unified AI-powered medical search that uses the local LLM (via Ollama) to
 * understand natural language queries and return ranked results from all content
 * databases: symptoms, conditions, educational content, and more.
 *
 * Operates entirely on-device -- no network calls except to the local Ollama
 * instance.  Falls back gracefully to keyword-only search when the LLM is
 * unavailable.
 *
 * Usage:
 *   const results = await smartSearch('chest pain when exercising');
 *   const quick   = quickSearch('headache', 10);
 *   const related = getRelatedContent('stable-angina', 'condition');
 */

import { isOllamaAvailable, chatJSON, type ChatMessage } from './ollama';

// ---------------------------------------------------------------------------
// Lazy imports — avoid circular dependency issues by importing at call-time
// ---------------------------------------------------------------------------

type SymptomEntryLazy = import('../content/symptoms/symptom-database').SymptomEntry;
type CVConditionEntryLazy = import('../content/conditions/cardiovascular/cv-conditions-database').CVConditionEntry;
type EducationalContentLazy = import('../content/types').EducationalContent;

// ============================================================================
// Types
// ============================================================================

export type SearchResultType =
  | 'symptom'
  | 'condition'
  | 'medication'
  | 'anatomy'
  | 'procedure'
  | 'content'
  | 'lab-test';

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  titleEs: string;
  description: string;
  score: number;           // 0-1 relevance
  matchReason: string;     // Why this was matched
  bodySystems?: string[];
  category?: string;
  source: string;          // Database source identifier
}

export interface SmartSearchResult {
  query: string;
  interpretation: string;     // AI's interpretation of the query
  suggestedQueries: string[]; // Related searches
  results: SearchResult[];
  totalResults: number;
  processingTimeMs: number;
  aiEnhanced: boolean;
}

export interface SearchFilters {
  types?: SearchResultType[];
  bodySystems?: string[];
  language?: 'en' | 'es';
  maxResults?: number;
}

// Internal type for the LLM's structured interpretation of a query
interface QueryInterpretation {
  intent: string;
  entities: { text: string; type: string }[];
  expandedTerms: string[];
  suggestedSearches: string[];
}

// ============================================================================
// Corpus — pre-built once, then reused
// ============================================================================

interface CorpusEntry {
  id: string;
  type: SearchResultType;
  title: string;
  titleEs: string;
  description: string;
  bodySystems: string[];
  category: string;
  source: string;
  // Pre-computed lowercased searchable text blobs for fast matching
  searchTextEn: string;
  searchTextEs: string;
}

let corpus: CorpusEntry[] | null = null;

// ============================================================================
// Text Utilities  (inlined to avoid depending on the dictation-matcher which
// may not exist yet at the time this file is consumed)
// ============================================================================

/**
 * Normalise a string for comparison: lowercase, collapse whitespace,
 * strip diacritics and common punctuation.
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip combining diacritical marks
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Character bigram similarity (Dice coefficient).
 * Returns 0-1 where 1 is identical.
 */
function bigramSimilarity(a: string, b: string): number {
  const na = normalizeText(a);
  const nb = normalizeText(b);
  if (na === nb) return 1;
  if (na.length < 2 || nb.length < 2) return 0;

  const bigramsA = new Set<string>();
  for (let i = 0; i < na.length - 1; i++) {
    bigramsA.add(na.slice(i, i + 2));
  }

  const bigramsB = new Set<string>();
  for (let i = 0; i < nb.length - 1; i++) {
    bigramsB.add(nb.slice(i, i + 2));
  }

  let intersection = 0;
  for (const bg of bigramsA) {
    if (bigramsB.has(bg)) intersection++;
  }

  return (2 * intersection) / (bigramsA.size + bigramsB.size);
}

/**
 * Check whether any token in `query` is a substring of `text` (or vice-versa
 * for short tokens).  Returns a 0-1 score.
 */
function substringScore(query: string, text: string): number {
  const nq = normalizeText(query);
  const nt = normalizeText(text);

  if (nt.includes(nq)) return 1;
  if (nq.includes(nt)) return 0.8;

  const tokens = nq.split(' ').filter(t => t.length >= 3);
  if (tokens.length === 0) return 0;

  let matched = 0;
  for (const token of tokens) {
    if (nt.includes(token)) matched++;
  }
  return matched / tokens.length;
}

/**
 * Combined relevance score for a query against a corpus entry.
 * Weighs substring matching higher than bigram similarity.
 */
function relevanceScore(
  query: string,
  entry: CorpusEntry,
  language: 'en' | 'es' | 'both' = 'both',
): { score: number; reason: string } {
  const searchFields =
    language === 'es'
      ? [entry.searchTextEs]
      : language === 'en'
        ? [entry.searchTextEn]
        : [entry.searchTextEn, entry.searchTextEs];

  let bestScore = 0;
  let bestField = '';

  for (const fieldText of searchFields) {
    // Exact substring match in title is the strongest signal
    const titleText = language === 'es' ? entry.titleEs : entry.title;
    const titleSubScore = substringScore(query, titleText);
    if (titleSubScore > bestScore) {
      bestScore = titleSubScore;
      bestField = 'title';
    }

    // Substring match in full searchable text
    const subScore = substringScore(query, fieldText) * 0.85;
    if (subScore > bestScore) {
      bestScore = subScore;
      bestField = 'description';
    }

    // Bigram similarity against title
    const bigramTitle = bigramSimilarity(query, titleText) * 0.75;
    if (bigramTitle > bestScore) {
      bestScore = bigramTitle;
      bestField = 'title (fuzzy)';
    }

    // Bigram similarity against full text (lower weight)
    const bigramFull = bigramSimilarity(query, fieldText) * 0.5;
    if (bigramFull > bestScore) {
      bestScore = bigramFull;
      bestField = 'description (fuzzy)';
    }
  }

  const reason =
    bestScore >= 0.8
      ? `Strong match in ${bestField}`
      : bestScore >= 0.5
        ? `Partial match in ${bestField}`
        : bestScore >= 0.3
          ? `Weak match in ${bestField}`
          : `Low relevance match in ${bestField}`;

  return { score: Math.min(bestScore, 1), reason };
}

// ============================================================================
// Corpus Builder
// ============================================================================

/**
 * Pre-build the searchable corpus from all available databases.
 * Called lazily on the first search; can also be called explicitly.
 */
export function buildSearchCorpus(): void {
  const entries: CorpusEntry[] = [];

  // --- Symptoms -----------------------------------------------------------
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { SYMPTOM_DATABASE } = require('../content/symptoms/symptom-database') as {
      SYMPTOM_DATABASE: SymptomEntryLazy[];
    };

    for (const symptom of SYMPTOM_DATABASE) {
      const searchEn = [
        symptom.name,
        symptom.description,
        ...symptom.bodyRegions,
        ...symptom.bodySystems,
        ...symptom.possibleCauses.map(c => c.conditionName),
        ...symptom.associatedSymptoms,
      ].join(' ');

      const searchEs = [
        symptom.spanishName,
        symptom.spanishDescription,
      ].join(' ');

      entries.push({
        id: symptom.symptomId,
        type: 'symptom',
        title: symptom.name,
        titleEs: symptom.spanishName,
        description: symptom.description,
        bodySystems: symptom.bodySystems,
        category: symptom.bodyRegions[0] ?? 'general',
        source: 'symptom-database',
        searchTextEn: normalizeText(searchEn),
        searchTextEs: normalizeText(searchEs),
      });
    }
  } catch {
    // Symptom database may not be available — skip
    console.debug('[SmartSearch] Symptom database not available, skipping.');
  }

  // --- CV Conditions (comprehensive 40+ entry reference) ------------------
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { CV_CONDITIONS } = require(
      '../content/conditions/cardiovascular/cv-conditions-database'
    ) as { CV_CONDITIONS: Record<string, CVConditionEntryLazy> };

    for (const condition of Object.values(CV_CONDITIONS)) {
      const searchEn = [
        condition.name,
        condition.description,
        condition.category,
        condition.pathophysiology,
        condition.treatment,
        condition.lifestyle,
        ...condition.symptoms,
        ...condition.riskFactors,
        ...condition.diagnostics,
        ...condition.emergencySigns,
        condition.patientExplanation,
      ].join(' ');

      const searchEs = [condition.nameEs].join(' ');

      entries.push({
        id: condition.id,
        type: 'condition',
        title: condition.name,
        titleEs: condition.nameEs,
        description: condition.description,
        bodySystems: ['cardiovascular'],
        category: condition.category,
        source: 'cv-conditions-database',
        searchTextEn: normalizeText(searchEn),
        searchTextEs: normalizeText(searchEs),
      });
    }
  } catch {
    console.debug('[SmartSearch] CV conditions database not available, skipping.');
  }

  // --- Educational Content (individual condition files via the index) ------
  try {
    // The conditions index re-exports individual EducationalContent objects
    // We import dynamically so we do not create a hard dependency.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const cardiovascularModule = require(
      '../content/conditions/cardiovascular'
    ) as { cardiovascularConditions?: EducationalContentLazy[] };

    if (Array.isArray(cardiovascularModule.cardiovascularConditions)) {
      for (const item of cardiovascularModule.cardiovascularConditions) {
        // Avoid duplicates with CV_CONDITIONS entries
        if (entries.some(e => e.id === item.id)) continue;

        const level1 = item.levels[1];
        const searchEn = [
          item.name,
          ...(item.alternateNames ?? []),
          level1?.summary ?? '',
          level1?.explanation ?? '',
          ...(item.tags?.systems ?? []),
          ...(item.tags?.keywords ?? []),
        ].join(' ');

        const searchEs = item.nameEs ? item.nameEs : '';

        entries.push({
          id: item.id,
          type: 'condition',
          title: item.name,
          titleEs: item.nameEs ?? '',
          description: level1?.summary ?? '',
          bodySystems: item.tags?.systems ?? [],
          category: item.type,
          source: 'educational-content',
          searchTextEn: normalizeText(searchEn),
          searchTextEs: normalizeText(searchEs),
        });
      }
    }
  } catch {
    console.debug('[SmartSearch] Educational content not available, skipping.');
  }

  corpus = entries;
  console.log(`[SmartSearch] Corpus built with ${entries.length} entries.`);
}

/**
 * Ensure the corpus is available (lazy init).
 */
function ensureCorpus(): CorpusEntry[] {
  if (!corpus) {
    buildSearchCorpus();
  }
  return corpus!;
}

// ============================================================================
// LLM Query Interpretation
// ============================================================================

const QUERY_INTERPRETATION_PROMPT = `You are a medical search assistant. Given a user's search query, interpret what medical concepts they are searching for.

Respond ONLY with valid JSON in this exact format (no markdown, no explanation):
{
  "intent": "<brief description of what the user wants to find>",
  "entities": [{"text": "<medical term>", "type": "<symptom|condition|anatomy|medication|procedure|lab-test>"}],
  "expandedTerms": ["<synonym or related medical term>", ...],
  "suggestedSearches": ["<related search query>", ...]
}

Rules:
- Extract all medical entities from the query
- Expand abbreviations (e.g. "MI" -> "myocardial infarction")
- Include both common and clinical names in expandedTerms
- Suggest 2-4 related searches the user might find helpful
- If the query is in Spanish, include English equivalents in expandedTerms and vice-versa`;

/**
 * Use the local LLM to interpret a search query.
 * Returns null if the LLM is unavailable or returns invalid output.
 */
async function interpretQuery(query: string): Promise<QueryInterpretation | null> {
  try {
    const available = await isOllamaAvailable();
    if (!available) return null;

    const messages: ChatMessage[] = [
      { role: 'system', content: QUERY_INTERPRETATION_PROMPT },
      { role: 'user', content: query },
    ];

    const result = await chatJSON<QueryInterpretation>({
      messages,
      options: {
        temperature: 0.1,
        num_predict: 512,
      },
    });

    // Validate essential fields
    if (
      !result ||
      typeof result.intent !== 'string' ||
      !Array.isArray(result.expandedTerms)
    ) {
      console.warn('[SmartSearch] LLM returned invalid interpretation structure.');
      return null;
    }

    // Normalise: ensure arrays exist
    return {
      intent: result.intent,
      entities: Array.isArray(result.entities) ? result.entities : [],
      expandedTerms: result.expandedTerms,
      suggestedSearches: Array.isArray(result.suggestedSearches)
        ? result.suggestedSearches
        : [],
    };
  } catch (err) {
    console.warn(
      '[SmartSearch] LLM query interpretation failed:',
      err instanceof Error ? err.message : err,
    );
    return null;
  }
}

// ============================================================================
// Core Search Functions
// ============================================================================

/**
 * Main entry point — AI-enhanced medical search.
 *
 * 1. If the LLM is available, sends the query to the local model asking it to
 *    identify medical concepts, extract key terms, and suggest related searches.
 * 2. Performs fuzzy matching against all content databases using both the
 *    original query and LLM-expanded terms.
 * 3. Falls back to keyword-only search if the LLM is unavailable.
 * 4. Deduplicates and ranks results by relevance score.
 */
export async function smartSearch(
  query: string,
  filters?: SearchFilters,
): Promise<SmartSearchResult> {
  const startTime = Date.now();
  const entries = ensureCorpus();
  const maxResults = filters?.maxResults ?? 20;
  const language = filters?.language ?? 'es';

  // --- Step 1: LLM interpretation (async, may return null) ----------------
  const interpretation = await interpretQuery(query);
  const aiEnhanced = interpretation !== null;

  // Build the full set of search terms: original query + LLM expanded terms
  const searchTerms: string[] = [query];
  if (interpretation) {
    searchTerms.push(...interpretation.expandedTerms);
    for (const entity of interpretation.entities) {
      searchTerms.push(entity.text);
    }
  }

  // --- Step 2: Score every corpus entry ------------------------------------
  const scored: { entry: CorpusEntry; score: number; reason: string }[] = [];

  for (const entry of entries) {
    // Apply type filter
    if (filters?.types && filters.types.length > 0) {
      if (!filters.types.includes(entry.type)) continue;
    }

    // Apply body system filter
    if (filters?.bodySystems && filters.bodySystems.length > 0) {
      const entrySystemsLower = entry.bodySystems.map(s => s.toLowerCase());
      const filterSystemsLower = filters.bodySystems.map(s => s.toLowerCase());
      const hasOverlap = filterSystemsLower.some(fs =>
        entrySystemsLower.some(es => es.includes(fs) || fs.includes(es)),
      );
      if (!hasOverlap) continue;
    }

    // Score against all search terms, keep the best
    let bestScore = 0;
    let bestReason = '';

    for (const term of searchTerms) {
      const langForSearch =
        language === 'es' ? 'es' : language === 'en' ? 'both' : 'both';
      const { score, reason } = relevanceScore(term, entry, langForSearch);
      if (score > bestScore) {
        bestScore = score;
        bestReason = reason;
      }
    }

    // Boost score slightly if the entry's body system matches an LLM entity
    if (interpretation) {
      for (const entity of interpretation.entities) {
        const entityNorm = normalizeText(entity.text);
        for (const sys of entry.bodySystems) {
          if (normalizeText(sys).includes(entityNorm) || entityNorm.includes(normalizeText(sys))) {
            bestScore = Math.min(bestScore * 1.15, 1);
            break;
          }
        }
      }
    }

    if (bestScore > 0.15) {
      scored.push({ entry, score: bestScore, reason: bestReason });
    }
  }

  // --- Step 3: Sort, deduplicate, and limit --------------------------------
  scored.sort((a, b) => b.score - a.score);

  // Deduplicate by id (keep highest score)
  const seenIds = new Set<string>();
  const deduped: typeof scored = [];
  for (const item of scored) {
    if (!seenIds.has(item.entry.id)) {
      seenIds.add(item.entry.id);
      deduped.push(item);
    }
  }

  const totalResults = deduped.length;
  const limited = deduped.slice(0, maxResults);

  // --- Step 4: Map to SearchResult -----------------------------------------
  const results: SearchResult[] = limited.map(({ entry, score, reason }) => ({
    id: entry.id,
    type: entry.type,
    title: entry.title,
    titleEs: entry.titleEs,
    description: entry.description,
    score: Math.round(score * 1000) / 1000, // 3 decimal places
    matchReason: reason,
    bodySystems: entry.bodySystems.length > 0 ? entry.bodySystems : undefined,
    category: entry.category || undefined,
    source: entry.source,
  }));

  return {
    query,
    interpretation: interpretation?.intent ?? 'Keyword search (LLM unavailable)',
    suggestedQueries: interpretation?.suggestedSearches ?? [],
    results,
    totalResults,
    processingTimeMs: Date.now() - startTime,
    aiEnhanced,
  };
}

/**
 * Fast synchronous search -- no LLM, pure string matching.
 *
 * Designed for autocomplete / typeahead scenarios where latency matters.
 * Searches both English and Spanish terms.
 */
export function quickSearch(
  query: string,
  maxResults: number = 10,
): SearchResult[] {
  if (!query || query.trim().length === 0) return [];

  const entries = ensureCorpus();
  const scored: { entry: CorpusEntry; score: number; reason: string }[] = [];

  for (const entry of entries) {
    const { score, reason } = relevanceScore(query, entry, 'both');
    if (score > 0.2) {
      scored.push({ entry, score, reason });
    }
  }

  scored.sort((a, b) => b.score - a.score);

  // Deduplicate by id
  const seenIds = new Set<string>();
  const results: SearchResult[] = [];
  for (const { entry, score, reason } of scored) {
    if (seenIds.has(entry.id)) continue;
    seenIds.add(entry.id);

    results.push({
      id: entry.id,
      type: entry.type,
      title: entry.title,
      titleEs: entry.titleEs,
      description: entry.description,
      score: Math.round(score * 1000) / 1000,
      matchReason: reason,
      bodySystems: entry.bodySystems.length > 0 ? entry.bodySystems : undefined,
      category: entry.category || undefined,
      source: entry.source,
    });

    if (results.length >= maxResults) break;
  }

  return results;
}

/**
 * Get all content for a given body system.
 *
 * @param system - Body system name (e.g. "cardiovascular", "neurological")
 * @returns All matching corpus entries sorted by type then title.
 */
export function searchByBodySystem(system: string): SearchResult[] {
  const entries = ensureCorpus();
  const systemNorm = normalizeText(system);

  const matches: SearchResult[] = [];

  for (const entry of entries) {
    const systemMatch = entry.bodySystems.some(s =>
      normalizeText(s).includes(systemNorm) || systemNorm.includes(normalizeText(s)),
    );

    if (!systemMatch) continue;

    matches.push({
      id: entry.id,
      type: entry.type,
      title: entry.title,
      titleEs: entry.titleEs,
      description: entry.description,
      score: 1, // All are direct matches
      matchReason: `Body system: ${system}`,
      bodySystems: entry.bodySystems.length > 0 ? entry.bodySystems : undefined,
      category: entry.category || undefined,
      source: entry.source,
    });
  }

  // Sort by type (symptoms first, then conditions, then others), then alphabetically
  const typeOrder: Record<SearchResultType, number> = {
    symptom: 0,
    condition: 1,
    anatomy: 2,
    medication: 3,
    procedure: 4,
    'lab-test': 5,
    content: 6,
  };

  matches.sort((a, b) => {
    const typeCompare = (typeOrder[a.type] ?? 99) - (typeOrder[b.type] ?? 99);
    if (typeCompare !== 0) return typeCompare;
    return a.title.localeCompare(b.title);
  });

  return matches;
}

/**
 * Given a content item, find related items.
 *
 * Relatedness is determined by co-occurrence of body systems, similar titles,
 * shared categories, and (for symptoms) cross-referenced conditions.
 *
 * @param id   - The id of the content item to find relatives for.
 * @param type - The SearchResultType of the item.
 * @returns Related items sorted by relevance, excluding the source item.
 */
export function getRelatedContent(
  id: string,
  type: SearchResultType,
): SearchResult[] {
  const entries = ensureCorpus();

  // Find the source entry
  const sourceEntry = entries.find(e => e.id === id && e.type === type);
  if (!sourceEntry) {
    // If we cannot find the exact match, try by id alone
    const fallback = entries.find(e => e.id === id);
    if (!fallback) return [];
    return getRelatedForEntry(fallback, entries);
  }

  return getRelatedForEntry(sourceEntry, entries);
}

/**
 * Internal: compute related entries for a given corpus entry.
 */
function getRelatedForEntry(
  source: CorpusEntry,
  entries: CorpusEntry[],
): SearchResult[] {
  const scored: { entry: CorpusEntry; score: number; reason: string }[] = [];

  const sourceSystems = new Set(source.bodySystems.map(s => normalizeText(s)));

  for (const entry of entries) {
    // Skip self
    if (entry.id === source.id && entry.type === source.type) continue;

    let score = 0;
    let reason = '';

    // Body system overlap
    const entrySystems = entry.bodySystems.map(s => normalizeText(s));
    let systemOverlap = 0;
    for (const sys of entrySystems) {
      if (sourceSystems.has(sys)) systemOverlap++;
    }
    if (systemOverlap > 0 && sourceSystems.size > 0) {
      const overlapRatio = systemOverlap / Math.max(sourceSystems.size, entrySystems.length);
      score += overlapRatio * 0.5;
      reason = `Shared body system${systemOverlap > 1 ? 's' : ''}`;
    }

    // Same category
    if (source.category && entry.category && source.category === entry.category) {
      score += 0.25;
      reason = reason ? `${reason}; same category` : 'Same category';
    }

    // Title similarity
    const titleSim = bigramSimilarity(source.title, entry.title);
    if (titleSim > 0.3) {
      score += titleSim * 0.25;
      reason = reason ? `${reason}; similar name` : 'Similar name';
    }

    // Cross-reference: if the source searchText mentions the entry's title
    if (source.searchTextEn.includes(normalizeText(entry.title))) {
      score += 0.3;
      reason = reason ? `${reason}; referenced in description` : 'Referenced in description';
    }

    if (score > 0.15) {
      scored.push({ entry, score: Math.min(score, 1), reason });
    }
  }

  scored.sort((a, b) => b.score - a.score);

  // Take top 15 related items
  return scored.slice(0, 15).map(({ entry, score, reason }) => ({
    id: entry.id,
    type: entry.type,
    title: entry.title,
    titleEs: entry.titleEs,
    description: entry.description,
    score: Math.round(score * 1000) / 1000,
    matchReason: reason,
    bodySystems: entry.bodySystems.length > 0 ? entry.bodySystems : undefined,
    category: entry.category || undefined,
    source: entry.source,
  }));
}

// ============================================================================
// Corpus Management Utilities
// ============================================================================

/**
 * Force-rebuild the search corpus.  Useful after database updates.
 */
export function rebuildCorpus(): void {
  corpus = null;
  buildSearchCorpus();
}

/**
 * Get the current corpus size (number of searchable entries).
 */
export function getCorpusSize(): number {
  return ensureCorpus().length;
}

/**
 * Get a summary of corpus contents by type.
 */
export function getCorpusSummary(): Record<SearchResultType, number> {
  const entries = ensureCorpus();
  const summary: Record<string, number> = {};
  for (const entry of entries) {
    summary[entry.type] = (summary[entry.type] ?? 0) + 1;
  }
  return summary as Record<SearchResultType, number>;
}
