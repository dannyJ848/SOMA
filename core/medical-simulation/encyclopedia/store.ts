/**
 * Encyclopedia Store
 *
 * Provides vector-based storage and retrieval for encyclopedia entries
 * with semantic search, complexity filtering, and cross-reference indexing.
 */

import type {
  EncyclopediaEntry,
  EncyclopediaEntrySummary,
  EncyclopediaSearchResult,
  EntryType,
  MedicalCategory,
} from './types';

// ============================================
// In-Memory Encyclopedia Store
// ============================================

/**
 * Encyclopedia entry database
 * In a production system, this would be stored in LanceDB/vector store
 */
const encyclopediaDatabase: Map<string, EncyclopediaEntry> = new Map();

/**
 * Index maps for quick lookups
 */
const typeIndex: Map<EntryType, Set<string>> = new Map();
const categoryIndex: Map<MedicalCategory, Set<string>> = new Map();
const keywordIndex: Map<string, Set<string>> = new Map();

// ============================================
// RAG Metadata for Vector Store
// ============================================

/**
 * Metadata stored alongside vector embeddings
 */
export interface EncyclopediaVectorMetadata {
  entryId: string;
  entryType: EntryType;
  category: MedicalCategory;
  complexityLevel: 'patient' | 'intermediate' | 'professional';
  section?: string;
  relatedEntryIds?: string[];
  anatomyLinkIds?: string[];
  keywords: string[];
}

/**
 * Content prepared for embedding
 */
export interface EncyclopediaEmbeddingContent {
  text: string;
  metadata: EncyclopediaVectorMetadata;
}

// ============================================
// Store Operations
// ============================================

/**
 * Add an encyclopedia entry to the store
 */
export function addEntry(entry: EncyclopediaEntry): void {
  encyclopediaDatabase.set(entry.entryId, entry);

  // Update type index
  if (!typeIndex.has(entry.entryType)) {
    typeIndex.set(entry.entryType, new Set());
  }
  typeIndex.get(entry.entryType)!.add(entry.entryId);

  // Update category index
  if (!categoryIndex.has(entry.category)) {
    categoryIndex.set(entry.category, new Set());
  }
  categoryIndex.get(entry.category)!.add(entry.entryId);

  // Update keyword index
  for (const keyword of entry.searchMetadata.primaryKeywords) {
    const normalizedKeyword = keyword.toLowerCase();
    if (!keywordIndex.has(normalizedKeyword)) {
      keywordIndex.set(normalizedKeyword, new Set());
    }
    keywordIndex.get(normalizedKeyword)!.add(entry.entryId);
  }

  // Index synonyms
  for (const synonym of entry.searchMetadata.synonyms || []) {
    const normalizedSynonym = synonym.toLowerCase();
    if (!keywordIndex.has(normalizedSynonym)) {
      keywordIndex.set(normalizedSynonym, new Set());
    }
    keywordIndex.get(normalizedSynonym)!.add(entry.entryId);
  }
}

/**
 * Add multiple entries in batch
 */
export function addEntries(entries: EncyclopediaEntry[]): void {
  for (const entry of entries) {
    addEntry(entry);
  }
}

/**
 * Get an entry by ID
 */
export function getEntry(entryId: string): EncyclopediaEntry | undefined {
  return encyclopediaDatabase.get(entryId);
}

/**
 * Get all entries
 */
export function getAllEntries(): EncyclopediaEntry[] {
  return Array.from(encyclopediaDatabase.values());
}

/**
 * Get entries by type
 */
export function getEntriesByType(entryType: EntryType): EncyclopediaEntry[] {
  const entryIds = typeIndex.get(entryType);
  if (!entryIds) return [];
  return Array.from(entryIds)
    .map((id) => encyclopediaDatabase.get(id)!)
    .filter(Boolean);
}

/**
 * Get entries by category
 */
export function getEntriesByCategory(category: MedicalCategory): EncyclopediaEntry[] {
  const entryIds = categoryIndex.get(category);
  if (!entryIds) return [];
  return Array.from(entryIds)
    .map((id) => encyclopediaDatabase.get(id)!)
    .filter(Boolean);
}

/**
 * Get entry summaries for list display
 */
export function getEntrySummaries(): EncyclopediaEntrySummary[] {
  return Array.from(encyclopediaDatabase.values()).map((entry) => ({
    entryId: entry.entryId,
    entryType: entry.entryType,
    name: entry.name,
    category: entry.category,
    summary: entry.summary,
    relatedCount: entry.relatedEntries.length,
    anatomyLinksCount: entry.anatomyLinks.length,
  }));
}

/**
 * Get the total count of entries in the encyclopedia
 */
export function getEntryCount(): number {
  return encyclopediaDatabase.size;
}

/**
 * Check if the encyclopedia has been populated with entries
 */
export function isEncyclopediaPopulated(): boolean {
  return encyclopediaDatabase.size > 0;
}

// ============================================
// Search Operations
// ============================================

/**
 * Search options
 */
export interface EncyclopediaSearchOptions {
  /** Filter by entry type */
  entryType?: EntryType;
  /** Filter by category */
  category?: MedicalCategory;
  /** Max results */
  limit?: number;
  /** Include only entries with anatomy links */
  hasAnatomyLinks?: boolean;
}

/**
 * Search encyclopedia entries by query
 * This is a simple keyword-based search; in production, use vector similarity
 */
export function searchEntries(
  query: string,
  options: EncyclopediaSearchOptions = {}
): EncyclopediaSearchResult[] {
  const normalizedQuery = query.toLowerCase().trim();
  const results: EncyclopediaSearchResult[] = [];

  for (const entry of encyclopediaDatabase.values()) {
    // Apply filters
    if (options.entryType && entry.entryType !== options.entryType) continue;
    if (options.category && entry.category !== options.category) continue;
    if (options.hasAnatomyLinks && entry.anatomyLinks.length === 0) continue;

    let matchType: EncyclopediaSearchResult['matchType'] | null = null;
    let relevanceScore = 0;
    let highlightedSnippet: string | undefined;

    // Check exact name match
    if (entry.name.toLowerCase() === normalizedQuery) {
      matchType = 'exact';
      relevanceScore = 100;
    }
    // Check synonym match
    else if (
      entry.searchMetadata.synonyms?.some(
        (s) => s.toLowerCase() === normalizedQuery
      )
    ) {
      matchType = 'synonym';
      relevanceScore = 90;
    }
    // Check alias match
    else if (
      entry.aliases?.some((a) => a.toLowerCase() === normalizedQuery)
    ) {
      matchType = 'synonym';
      relevanceScore = 85;
    }
    // Check keyword match
    else if (
      entry.searchMetadata.primaryKeywords.some((k) =>
        k.toLowerCase().includes(normalizedQuery)
      )
    ) {
      matchType = 'keyword';
      relevanceScore = 70;
    }
    // Check secondary keyword match
    else if (
      entry.searchMetadata.secondaryKeywords?.some((k) =>
        k.toLowerCase().includes(normalizedQuery)
      )
    ) {
      matchType = 'keyword';
      relevanceScore = 60;
    }
    // Check name contains
    else if (entry.name.toLowerCase().includes(normalizedQuery)) {
      matchType = 'partial';
      relevanceScore = 50;
    }
    // Check content contains
    else if (
      entry.summary.toLowerCase().includes(normalizedQuery) ||
      entry.overview.patient.toLowerCase().includes(normalizedQuery)
    ) {
      matchType = 'content';
      relevanceScore = 40;
      // Generate highlighted snippet
      const lowerSummary = entry.summary.toLowerCase();
      const index = lowerSummary.indexOf(normalizedQuery);
      if (index !== -1) {
        const start = Math.max(0, index - 50);
        const end = Math.min(entry.summary.length, index + normalizedQuery.length + 50);
        highlightedSnippet = '...' + entry.summary.slice(start, end) + '...';
      }
    }

    if (matchType) {
      // Apply search boost
      relevanceScore *= entry.searchMetadata.searchBoost || 1.0;

      results.push({
        entryId: entry.entryId,
        entryType: entry.entryType,
        name: entry.name,
        category: entry.category,
        summary: entry.summary,
        matchType,
        relevanceScore,
        highlightedSnippet,
      });
    }
  }

  // Sort by relevance
  results.sort((a, b) => b.relevanceScore - a.relevanceScore);

  // Apply limit
  const limit = options.limit || 20;
  return results.slice(0, limit);
}

// ============================================
// Cross-Reference Operations
// ============================================

/**
 * Get related entries for an entry
 */
export function getRelatedEntries(entryId: string): EncyclopediaEntry[] {
  const entry = encyclopediaDatabase.get(entryId);
  if (!entry) return [];

  return entry.relatedEntries
    .map((rel) => encyclopediaDatabase.get(rel.entryId))
    .filter((e): e is EncyclopediaEntry => e !== undefined);
}

/**
 * Get entries that link to a specific anatomy structure
 */
export function getEntriesForAnatomyStructure(
  structureId: string
): EncyclopediaEntry[] {
  return Array.from(encyclopediaDatabase.values()).filter((entry) =>
    entry.anatomyLinks.some((link) => link.structureId === structureId)
  );
}

/**
 * Build cross-reference index
 * Returns a map of entryId -> list of entries that reference it
 */
export function buildCrossReferenceIndex(): Map<string, string[]> {
  const crossRefIndex = new Map<string, string[]>();

  for (const entry of encyclopediaDatabase.values()) {
    for (const related of entry.relatedEntries) {
      if (!crossRefIndex.has(related.entryId)) {
        crossRefIndex.set(related.entryId, []);
      }
      crossRefIndex.get(related.entryId)!.push(entry.entryId);
    }
  }

  return crossRefIndex;
}

// ============================================
// RAG Preparation Functions
// ============================================

/**
 * Prepare an entry for vector embedding
 * Creates multiple chunks at different complexity levels
 */
export function prepareEntryForEmbedding(
  entry: EncyclopediaEntry
): EncyclopediaEmbeddingContent[] {
  const contents: EncyclopediaEmbeddingContent[] = [];

  const baseMetadata = {
    entryId: entry.entryId,
    entryType: entry.entryType,
    category: entry.category,
    relatedEntryIds: entry.relatedEntries.map((r) => r.entryId),
    anatomyLinkIds: entry.anatomyLinks.map((l) => l.structureId),
    keywords: [
      ...entry.searchMetadata.primaryKeywords,
      ...(entry.searchMetadata.secondaryKeywords || []),
    ],
  };

  // Patient-level content
  contents.push({
    text: `${entry.name}\n\n${entry.overview.patient}\n\n${entry.summary}`,
    metadata: {
      ...baseMetadata,
      complexityLevel: 'patient',
    },
  });

  // Intermediate-level content
  contents.push({
    text: `${entry.name}\n\n${entry.overview.intermediate}`,
    metadata: {
      ...baseMetadata,
      complexityLevel: 'intermediate',
    },
  });

  // Professional-level content
  contents.push({
    text: `${entry.name}\n\n${entry.overview.professional}`,
    metadata: {
      ...baseMetadata,
      complexityLevel: 'professional',
    },
  });

  // Add content sections
  for (const section of entry.content) {
    // Patient-level section
    contents.push({
      text: `${entry.name} - ${section.title}\n\n${section.content.patient}`,
      metadata: {
        ...baseMetadata,
        complexityLevel: 'patient',
        section: section.title,
      },
    });

    // Professional-level section
    contents.push({
      text: `${entry.name} - ${section.title}\n\n${section.content.professional}`,
      metadata: {
        ...baseMetadata,
        complexityLevel: 'professional',
        section: section.title,
      },
    });
  }

  return contents;
}

/**
 * Prepare all entries for batch embedding
 */
export function prepareAllEntriesForEmbedding(): EncyclopediaEmbeddingContent[] {
  const allContents: EncyclopediaEmbeddingContent[] = [];

  for (const entry of encyclopediaDatabase.values()) {
    allContents.push(...prepareEntryForEmbedding(entry));
  }

  return allContents;
}

// ============================================
// Complexity Level Mapping
// ============================================

/**
 * Map numeric complexity level to string
 */
export function mapComplexityLevel(
  level: 1 | 2 | 3 | 4 | 5
): 'patient' | 'intermediate' | 'professional' {
  if (level <= 2) return 'patient';
  if (level === 3) return 'intermediate';
  return 'professional';
}

/**
 * Get content at specified complexity level
 */
export function getContentAtComplexity(
  entry: EncyclopediaEntry,
  level: 1 | 2 | 3 | 4 | 5
): string {
  const complexityLevel = mapComplexityLevel(level);
  return entry.overview[complexityLevel];
}

// ============================================
// Additional Helper Functions
// ============================================

/**
 * Get an entry by name (case-insensitive)
 */
export function getEntryByName(name: string): EncyclopediaEntry | undefined {
  const normalizedName = name.toLowerCase().trim();
  for (const entry of encyclopediaDatabase.values()) {
    if (entry.name.toLowerCase() === normalizedName) {
      return entry;
    }
    // Check aliases
    if (entry.aliases?.some(alias => alias.toLowerCase() === normalizedName)) {
      return entry;
    }
    // Check synonyms
    if (entry.searchMetadata.synonyms?.some(syn => syn.toLowerCase() === normalizedName)) {
      return entry;
    }
  }
  return undefined;
}

/**
 * Get entries by keyword/tag
 */
export function getEntriesByKeyword(keyword: string): EncyclopediaEntry[] {
  const normalizedKeyword = keyword.toLowerCase().trim();
  const entryIds = keywordIndex.get(normalizedKeyword);
  if (!entryIds) return [];
  return Array.from(entryIds)
    .map((id) => encyclopediaDatabase.get(id)!)
    .filter(Boolean);
}

/**
 * Check if store has been seeded
 */
export function isStoreSeeded(): boolean {
  return encyclopediaDatabase.size > 0;
}

/**
 * Clear all entries from the store
 */
export function clearStore(): void {
  encyclopediaDatabase.clear();
  typeIndex.clear();
  categoryIndex.clear();
  keywordIndex.clear();
}

// ============================================
// Statistics
// ============================================

/**
 * Get store statistics
 */
export function getStoreStats(): {
  totalEntries: number;
  byType: Record<EntryType, number>;
  byCategory: Record<MedicalCategory, number>;
  totalAnatomyLinks: number;
  totalRelatedLinks: number;
} {
  const byType: Partial<Record<EntryType, number>> = {};
  const byCategory: Partial<Record<MedicalCategory, number>> = {};
  let totalAnatomyLinks = 0;
  let totalRelatedLinks = 0;

  for (const entry of encyclopediaDatabase.values()) {
    byType[entry.entryType] = (byType[entry.entryType] || 0) + 1;
    byCategory[entry.category] = (byCategory[entry.category] || 0) + 1;
    totalAnatomyLinks += entry.anatomyLinks.length;
    totalRelatedLinks += entry.relatedEntries.length;
  }

  return {
    totalEntries: encyclopediaDatabase.size,
    byType: byType as Record<EntryType, number>,
    byCategory: byCategory as Record<MedicalCategory, number>,
    totalAnatomyLinks,
    totalRelatedLinks,
  };
}
