/**
 * Search Index
 *
 * In-memory inverted index for fast full-text search with support for
 * keywords, synonyms, abbreviations, and medical terminology mapping.
 */

import type {
  SearchDocument,
  IndexEntry,
  SearchCategory,
  ContentSource,
  SearchToken,
} from './types';
import {
  expandAbbreviation,
  getSynonyms,
  isStopWord,
  STOP_WORDS,
} from './medicalTerminology';
import { ALL_STRUCTURES } from '../anatomy/AnatomyStructures';
import type { AnatomicalSystem } from '../anatomy/AnatomyStructures';

// ============================================
// Index Storage
// ============================================

/**
 * Document storage
 */
const documentStore: Map<string, SearchDocument> = new Map();

/**
 * Inverted index: term -> list of (docId, tf, field, positions)
 */
const invertedIndex: Map<string, IndexEntry[]> = new Map();

/**
 * Category index for filtering
 */
const categoryIndex: Map<SearchCategory, Set<string>> = new Map();

/**
 * Source index for filtering
 */
const sourceIndex: Map<ContentSource, Set<string>> = new Map();

/**
 * Anatomical system index
 */
const systemIndex: Map<string, Set<string>> = new Map();

/**
 * Document frequency for IDF calculation
 */
const documentFrequency: Map<string, number> = new Map();

/**
 * Total document count
 */
let totalDocuments = 0;

// ============================================
// Tokenization
// ============================================

/**
 * Normalize a term for indexing
 */
function normalizeTerm(term: string): string {
  return term
    .toLowerCase()
    .replace(/[^a-z0-9\-]/g, '')
    .trim();
}

/**
 * Simple stemming for common medical suffixes
 */
function stemTerm(term: string): string {
  // Remove common suffixes
  const suffixes = [
    'tion', 'sion', 'ness', 'ment', 'ity', 'ous', 'ive', 'ful',
    'less', 'ing', 'ed', 'er', 'est', 'ly', 'al', 'ic', 'ical',
  ];

  for (const suffix of suffixes) {
    if (term.length > suffix.length + 3 && term.endsWith(suffix)) {
      return term.slice(0, -suffix.length);
    }
  }

  return term;
}

/**
 * Tokenize text into search tokens
 */
export function tokenize(text: string): SearchToken[] {
  const tokens: SearchToken[] = [];
  const words = text.split(/[\s,;.!?()[\]{}<>\/\\|@#$%^&*+=~`'"]+/);

  let position = 0;
  for (const word of words) {
    if (!word) continue;

    const normalized = normalizeTerm(word);
    if (!normalized) continue;

    const isStop = isStopWord(normalized);
    const stemmed = stemTerm(normalized);

    tokens.push({
      original: word,
      normalized,
      stemmed: stemmed !== normalized ? stemmed : undefined,
      isStopWord: isStop,
      position,
    });

    position++;
  }

  return tokens;
}

// ============================================
// Index Operations
// ============================================

/**
 * Add a document to the index
 */
export function indexDocument(doc: SearchDocument): void {
  // Store document
  documentStore.set(doc.id, doc);
  totalDocuments++;

  // Update category index
  if (!categoryIndex.has(doc.category)) {
    categoryIndex.set(doc.category, new Set());
  }
  categoryIndex.get(doc.category)!.add(doc.id);

  // Update source index
  if (!sourceIndex.has(doc.source)) {
    sourceIndex.set(doc.source, new Set());
  }
  sourceIndex.get(doc.source)!.add(doc.id);

  // Update system index
  if (doc.anatomicalSystem) {
    if (!systemIndex.has(doc.anatomicalSystem)) {
      systemIndex.set(doc.anatomicalSystem, new Set());
    }
    systemIndex.get(doc.anatomicalSystem)!.add(doc.id);
  }

  // Index each field
  const fieldsToIndex: Array<{ field: 'title' | 'description' | 'content' | 'keywords' | 'synonyms' | 'aliases'; text: string }> = [
    { field: 'title', text: doc.title },
    { field: 'description', text: doc.description },
    { field: 'content', text: doc.content },
    { field: 'keywords', text: doc.keywords.join(' ') },
    { field: 'synonyms', text: (doc.synonyms || []).join(' ') },
    { field: 'aliases', text: (doc.aliases || []).join(' ') },
  ];

  const termsSeen = new Set<string>();

  for (const { field, text } of fieldsToIndex) {
    const tokens = tokenize(text);
    const termCounts: Map<string, { count: number; positions: number[] }> = new Map();

    for (const token of tokens) {
      if (token.isStopWord) continue;

      const term = token.normalized;
      if (!termCounts.has(term)) {
        termCounts.set(term, { count: 0, positions: [] });
      }
      termCounts.get(term)!.count++;
      termCounts.get(term)!.positions.push(token.position);

      // Also index stemmed version
      if (token.stemmed && token.stemmed !== term) {
        if (!termCounts.has(token.stemmed)) {
          termCounts.set(token.stemmed, { count: 0, positions: [] });
        }
        termCounts.get(token.stemmed)!.count++;
        termCounts.get(token.stemmed)!.positions.push(token.position);
      }
    }

    // Add to inverted index
    for (const [term, { count, positions }] of termCounts) {
      if (!invertedIndex.has(term)) {
        invertedIndex.set(term, []);
      }

      invertedIndex.get(term)!.push({
        docId: doc.id,
        tf: count,
        field,
        positions,
      });

      // Track document frequency (only count term once per document)
      if (!termsSeen.has(term)) {
        termsSeen.add(term);
        documentFrequency.set(term, (documentFrequency.get(term) || 0) + 1);
      }
    }
  }

  // Index abbreviations
  if (doc.abbreviations) {
    for (const abbr of doc.abbreviations) {
      const normalized = normalizeTerm(abbr);
      if (!invertedIndex.has(normalized)) {
        invertedIndex.set(normalized, []);
      }
      invertedIndex.get(normalized)!.push({
        docId: doc.id,
        tf: 5, // High weight for abbreviations
        field: 'keywords',
        positions: [],
      });
    }
  }

  // Index medical codes
  if (doc.medicalCodes) {
    for (const code of doc.medicalCodes) {
      const normalized = normalizeTerm(code);
      if (!invertedIndex.has(normalized)) {
        invertedIndex.set(normalized, []);
      }
      invertedIndex.get(normalized)!.push({
        docId: doc.id,
        tf: 5, // High weight for codes
        field: 'keywords',
        positions: [],
      });
    }
  }
}

/**
 * Index multiple documents
 */
export function indexDocuments(docs: SearchDocument[]): void {
  for (const doc of docs) {
    indexDocument(doc);
  }
}

/**
 * Get a document by ID
 */
export function getDocument(id: string): SearchDocument | undefined {
  return documentStore.get(id);
}

/**
 * Get all documents
 */
export function getAllDocuments(): SearchDocument[] {
  return Array.from(documentStore.values());
}

/**
 * Get documents by category
 */
export function getDocumentsByCategory(category: SearchCategory): SearchDocument[] {
  const docIds = categoryIndex.get(category);
  if (!docIds) return [];
  return Array.from(docIds)
    .map((id) => documentStore.get(id)!)
    .filter(Boolean);
}

/**
 * Clear the entire index
 */
export function clearIndex(): void {
  documentStore.clear();
  invertedIndex.clear();
  categoryIndex.clear();
  sourceIndex.clear();
  systemIndex.clear();
  documentFrequency.clear();
  totalDocuments = 0;
}

// ============================================
// Search Functions
// ============================================

/**
 * Calculate TF-IDF score
 */
function calculateTfIdf(tf: number, docId: string, term: string): number {
  const df = documentFrequency.get(term) || 1;
  const idf = Math.log((totalDocuments + 1) / (df + 1)) + 1;
  return tf * idf;
}

/**
 * Get posting list for a term
 */
export function getPostings(term: string): IndexEntry[] {
  return invertedIndex.get(normalizeTerm(term)) || [];
}

/**
 * Get expanded terms including synonyms and abbreviation expansions
 */
export function expandQuery(term: string): string[] {
  const expanded: Set<string> = new Set();
  const normalized = normalizeTerm(term);

  // Add original term
  expanded.add(normalized);

  // Add stemmed version
  const stemmed = stemTerm(normalized);
  if (stemmed !== normalized) {
    expanded.add(stemmed);
  }

  // Add abbreviation expansions
  const abbrExpansions = expandAbbreviation(term);
  for (const exp of abbrExpansions) {
    const tokens = tokenize(exp);
    for (const token of tokens) {
      if (!token.isStopWord) {
        expanded.add(token.normalized);
      }
    }
  }

  // Add synonyms
  const synonyms = getSynonyms(term);
  for (const syn of synonyms) {
    const tokens = tokenize(syn);
    for (const token of tokens) {
      if (!token.isStopWord) {
        expanded.add(token.normalized);
      }
    }
  }

  return Array.from(expanded);
}

/**
 * Get index statistics
 */
export function getIndexStats(): {
  totalDocuments: number;
  totalTerms: number;
  categoryCounts: Record<SearchCategory, number>;
  sourceCounts: Record<ContentSource, number>;
} {
  const categoryCounts: Partial<Record<SearchCategory, number>> = {};
  for (const [cat, docs] of categoryIndex) {
    categoryCounts[cat] = docs.size;
  }

  const sourceCounts: Partial<Record<ContentSource, number>> = {};
  for (const [src, docs] of sourceIndex) {
    sourceCounts[src] = docs.size;
  }

  return {
    totalDocuments,
    totalTerms: invertedIndex.size,
    categoryCounts: categoryCounts as Record<SearchCategory, number>,
    sourceCounts: sourceCounts as Record<ContentSource, number>,
  };
}

// ============================================
// Index Initialization
// ============================================

/**
 * Map anatomical system to search category
 */
function mapSystemToCategory(_system: AnatomicalSystem): SearchCategory {
  return 'anatomy';
}

/**
 * Get icon for category
 */
function getCategoryIcon(category: SearchCategory): string {
  const icons: Record<SearchCategory, string> = {
    all: '🔍',
    anatomy: '🫀',
    conditions: '🏥',
    medications: '💊',
    symptoms: '🩺',
    procedures: '🔬',
    'lab-tests': '🧪',
    physiology: '⚙️',
    encyclopedia: '📚',
  };
  return icons[category] || '📄';
}

/**
 * Get color for category
 */
function getCategoryColor(category: SearchCategory): string {
  const colors: Record<SearchCategory, string> = {
    all: '#6b7280',
    anatomy: '#3b82f6',
    conditions: '#ef4444',
    medications: '#8b5cf6',
    symptoms: '#f97316',
    procedures: '#06b6d4',
    'lab-tests': '#eab308',
    physiology: '#22c55e',
    encyclopedia: '#6366f1',
  };
  return colors[category] || '#6b7280';
}

/**
 * Initialize the search index with anatomy structures
 */
export function initializeAnatomyIndex(): void {
  for (const structure of ALL_STRUCTURES) {
    const doc: SearchDocument = {
      id: `anatomy-${structure.id}`,
      category: 'anatomy',
      source: 'anatomy-structures',
      title: structure.name,
      aliases: structure.latinName ? [structure.latinName] : undefined,
      description: structure.description || `${structure.name} - part of the ${structure.system} system`,
      content: [
        structure.name,
        structure.latinName || '',
        structure.description || '',
        structure.system,
      ].join(' '),
      keywords: [
        structure.name.toLowerCase(),
        structure.system,
      ],
      synonyms: structure.latinName ? [structure.latinName] : undefined,
      anatomicalSystem: structure.system,
      structureId: structure.id,
      navigationPath: `/anatomy?structure=${structure.id}`,
      boost: structure.visibility.minDetailLevel === 'body' ? 1.2 : 1.0,
    };

    indexDocument(doc);
  }
}

/**
 * Initialize index with encyclopedia entries
 */
export function initializeEncyclopediaIndex(entries: Array<{
  entryId: string;
  entryType: string;
  name: string;
  category: string;
  summary: string;
  aliases?: string[];
  searchMetadata?: {
    primaryKeywords?: string[];
    secondaryKeywords?: string[];
    synonyms?: string[];
    abbreviations?: string[];
  };
}>): void {
  for (const entry of entries) {
    const searchCategory = mapEntryTypeToCategory(entry.entryType);

    const doc: SearchDocument = {
      id: `encyclopedia-${entry.entryId}`,
      category: searchCategory,
      source: 'encyclopedia',
      title: entry.name,
      aliases: entry.aliases,
      description: entry.summary,
      content: entry.summary,
      keywords: [
        entry.name.toLowerCase(),
        ...(entry.searchMetadata?.primaryKeywords || []),
        ...(entry.searchMetadata?.secondaryKeywords || []),
      ],
      synonyms: entry.searchMetadata?.synonyms,
      abbreviations: entry.searchMetadata?.abbreviations,
      entryId: entry.entryId,
      navigationPath: `/encyclopedia/${entry.entryId}`,
      boost: 1.0,
    };

    // Add category icon and color
    (doc as SearchDocument & { icon?: string; color?: string }).icon = getCategoryIcon(searchCategory);
    (doc as SearchDocument & { icon?: string; color?: string }).color = getCategoryColor(searchCategory);

    indexDocument(doc);
  }
}

/**
 * Map entry type to search category
 */
function mapEntryTypeToCategory(entryType: string): SearchCategory {
  const mapping: Record<string, SearchCategory> = {
    condition: 'conditions',
    symptom: 'symptoms',
    medication: 'medications',
    anatomy: 'anatomy',
    procedure: 'procedures',
    physiology: 'physiology',
    'lab-test': 'lab-tests',
    imaging: 'procedures',
    terminology: 'encyclopedia',
  };
  return mapping[entryType] || 'encyclopedia';
}

// Export category utilities
export { getCategoryIcon, getCategoryColor };
