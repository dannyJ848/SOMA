/**
 * Search System Types
 *
 * Core type definitions for the comprehensive search functionality
 * including indexing, querying, and result presentation.
 */

// ============================================
// Content Categories
// ============================================

/**
 * Searchable content categories
 */
export type SearchCategory =
  | 'all'
  | 'anatomy'
  | 'conditions'
  | 'medications'
  | 'symptoms'
  | 'procedures'
  | 'lab-tests'
  | 'physiology'
  | 'encyclopedia';

/**
 * Content source types
 */
export type ContentSource =
  | 'encyclopedia'
  | 'anatomy-structures'
  | 'user-data'
  | 'medical-simulation'
  | 'rag-knowledge-base';

// ============================================
// Search Index Types
// ============================================

/**
 * Indexed document for search
 */
export interface SearchDocument {
  /** Unique document identifier */
  id: string;

  /** Document type/category */
  category: SearchCategory;

  /** Content source */
  source: ContentSource;

  /** Primary title/name */
  title: string;

  /** Alternative names/aliases */
  aliases?: string[];

  /** Brief description/summary */
  description: string;

  /** Full searchable content */
  content: string;

  /** Primary keywords (high weight) */
  keywords: string[];

  /** Synonyms and related terms */
  synonyms?: string[];

  /** Medical abbreviations */
  abbreviations?: string[];

  /** ICD/CPT codes if applicable */
  medicalCodes?: string[];

  /** Anatomical system if applicable */
  anatomicalSystem?: string;

  /** Body region if applicable */
  bodyRegion?: string;

  /** Link to navigate to */
  navigationPath?: string;

  /** Structure ID for anatomy */
  structureId?: string;

  /** Entry ID for encyclopedia */
  entryId?: string;

  /** Boost factor for ranking */
  boost?: number;

  /** Last updated timestamp */
  lastUpdated?: number;
}

/**
 * Tokenized search term
 */
export interface SearchToken {
  /** Original term */
  original: string;

  /** Normalized/lowercased term */
  normalized: string;

  /** Stemmed term */
  stemmed?: string;

  /** Is this a stop word? */
  isStopWord?: boolean;

  /** Position in query */
  position: number;
}

/**
 * Inverted index entry
 */
export interface IndexEntry {
  /** Document ID */
  docId: string;

  /** Term frequency in document */
  tf: number;

  /** Field where term was found */
  field: 'title' | 'description' | 'content' | 'keywords' | 'synonyms' | 'aliases';

  /** Positions of term in document */
  positions: number[];
}

// ============================================
// Search Query Types
// ============================================

/**
 * Search query options
 */
export interface SearchQuery {
  /** Search query text */
  query: string;

  /** Filter by categories */
  categories?: SearchCategory[];

  /** Filter by sources */
  sources?: ContentSource[];

  /** Filter by anatomical system */
  anatomicalSystem?: string;

  /** Filter by body region */
  bodyRegion?: string;

  /** Enable fuzzy matching */
  fuzzy?: boolean;

  /** Fuzzy match threshold (0-1) */
  fuzzyThreshold?: number;

  /** Maximum results to return */
  limit?: number;

  /** Results offset for pagination */
  offset?: number;

  /** Minimum relevance score (0-100) */
  minScore?: number;

  /** Include spelling suggestions */
  includeSuggestions?: boolean;
}

/**
 * Parsed search query with extracted entities
 */
export interface ParsedQuery {
  /** Original query */
  original: string;

  /** Cleaned/normalized query */
  normalized: string;

  /** Extracted tokens */
  tokens: SearchToken[];

  /** Detected intent */
  intent?: 'lookup' | 'explore' | 'compare' | 'question';

  /** Extracted entities */
  entities?: {
    type: 'anatomy' | 'condition' | 'medication' | 'symptom';
    value: string;
    confidence: number;
  }[];

  /** Detected negations */
  negations?: string[];

  /** Detected modifiers */
  modifiers?: string[];
}

// ============================================
// Search Result Types
// ============================================

/**
 * Individual search result
 */
export interface SearchResult {
  /** Document ID */
  id: string;

  /** Content category */
  category: SearchCategory;

  /** Content source */
  source: ContentSource;

  /** Result title */
  title: string;

  /** Result description */
  description: string;

  /** Relevance score (0-100) */
  score: number;

  /** Match type */
  matchType: 'exact' | 'fuzzy' | 'synonym' | 'keyword' | 'content' | 'partial';

  /** Highlighted snippet */
  snippet?: string;

  /** Matched terms */
  matchedTerms?: string[];

  /** Navigation path */
  navigationPath?: string;

  /** Structure ID for anatomy */
  structureId?: string;

  /** Entry ID for encyclopedia */
  entryId?: string;

  /** Icon/emoji for display */
  icon?: string;

  /** Accent color for category */
  color?: string;
}

/**
 * Search results container
 */
export interface SearchResults {
  /** Search query that produced these results */
  query: string;

  /** Result items */
  results: SearchResult[];

  /** Total number of matches */
  totalMatches: number;

  /** Time taken in milliseconds */
  searchTimeMs: number;

  /** Spelling suggestions */
  suggestions?: SpellingSuggestion[];

  /** "Did you mean?" alternatives */
  didYouMean?: string[];

  /** Result counts by category */
  categoryBreakdown?: Record<SearchCategory, number>;

  /** Related searches */
  relatedSearches?: string[];
}

// ============================================
// Spelling & Suggestions Types
// ============================================

/**
 * Spelling suggestion
 */
export interface SpellingSuggestion {
  /** Original misspelled term */
  original: string;

  /** Suggested correction */
  suggestion: string;

  /** Confidence score (0-1) */
  confidence: number;

  /** Edit distance */
  editDistance: number;
}

/**
 * Search suggestion for autocomplete
 */
export interface SearchSuggestion {
  /** Suggestion text */
  text: string;

  /** Suggestion type */
  type: 'recent' | 'popular' | 'completion' | 'related';

  /** Category if applicable */
  category?: SearchCategory;

  /** Icon for display */
  icon?: string;

  /** Match score */
  score?: number;
}

// ============================================
// Medical Terminology Types
// ============================================

/**
 * Medical term mapping
 */
export interface MedicalTermMapping {
  /** Primary term */
  term: string;

  /** Synonyms */
  synonyms: string[];

  /** Abbreviations */
  abbreviations: string[];

  /** Related terms */
  relatedTerms: string[];

  /** Lay terms (patient-friendly) */
  layTerms: string[];

  /** Category */
  category: SearchCategory;
}

/**
 * Abbreviation expansion
 */
export interface AbbreviationExpansion {
  /** Abbreviation */
  abbr: string;

  /** Full form */
  expansion: string;

  /** Context (medical specialty) */
  context?: string;

  /** Common alternatives */
  alternatives?: string[];
}

// ============================================
// Search History Types
// ============================================

/**
 * Recent search entry
 */
export interface RecentSearch {
  /** Search query */
  query: string;

  /** Timestamp */
  timestamp: number;

  /** Number of results */
  resultCount: number;

  /** Category filter if used */
  category?: SearchCategory;
}

// ============================================
// Search Events
// ============================================

/**
 * Search event for analytics
 */
export interface SearchEvent {
  /** Event type */
  type: 'search' | 'result-click' | 'suggestion-click' | 'filter-change';

  /** Search query */
  query?: string;

  /** Result ID if clicked */
  resultId?: string;

  /** Result position if clicked */
  position?: number;

  /** Timestamp */
  timestamp: number;

  /** Additional metadata */
  metadata?: Record<string, unknown>;
}

// ============================================
// Search Configuration
// ============================================

/**
 * Search engine configuration
 */
export interface SearchConfig {
  /** Enable fuzzy matching by default */
  fuzzyEnabled: boolean;

  /** Default fuzzy threshold */
  fuzzyThreshold: number;

  /** Default result limit */
  defaultLimit: number;

  /** Maximum result limit */
  maxLimit: number;

  /** Minimum query length */
  minQueryLength: number;

  /** Debounce delay for search input (ms) */
  debounceDelay: number;

  /** Enable search history */
  historyEnabled: boolean;

  /** Maximum history items */
  maxHistoryItems: number;

  /** Enable suggestions */
  suggestionsEnabled: boolean;

  /** Maximum suggestions */
  maxSuggestions: number;

  /** Field weights for scoring */
  fieldWeights: {
    title: number;
    keywords: number;
    synonyms: number;
    aliases: number;
    description: number;
    content: number;
  };
}

/**
 * Default search configuration
 */
export const DEFAULT_SEARCH_CONFIG: SearchConfig = {
  fuzzyEnabled: true,
  fuzzyThreshold: 0.7,
  defaultLimit: 20,
  maxLimit: 100,
  minQueryLength: 2,
  debounceDelay: 150,
  historyEnabled: true,
  maxHistoryItems: 20,
  suggestionsEnabled: true,
  maxSuggestions: 8,
  fieldWeights: {
    title: 10,
    keywords: 8,
    synonyms: 7,
    aliases: 6,
    description: 4,
    content: 1,
  },
};
