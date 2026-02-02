/**
 * Universal Content RAG Integration
 *
 * Expands brain RAG to ALL body systems using the encyclopedia store.
 * This module provides a unified interface for retrieving educational
 * content across all anatomical regions and medical categories.
 */

import {
  getEntry,
  getAllEntries,
  searchEntries,
  getEntriesByType,
  getEntriesByCategory,
} from '../core/medical-simulation/encyclopedia/store';
import { seedEncyclopedia } from '../core/medical-simulation/encyclopedia/seed';
import type {
  EncyclopediaEntry,
  EncyclopediaSearchResult,
  EntryType,
  MedicalCategory,
} from '../core/medical-simulation/encyclopedia/types';
import type { ContentDocument } from './ContentViewer';

// Ensure encyclopedia is seeded
let seeded = false;
function ensureSeeded() {
  if (!seeded) {
    seedEncyclopedia();
    seeded = true;
  }
}

// Content index for all body systems
interface UniversalContentIndex {
  byId: Map<string, EncyclopediaEntry>;
  byStructure: Map<string, EncyclopediaEntry[]>;
  byCategory: Map<MedicalCategory, EncyclopediaEntry[]>;
  byType: Map<EntryType, EncyclopediaEntry[]>;
}

// Singleton index
let universalIndex: UniversalContentIndex | null = null;
let universalIndexPromise: Promise<UniversalContentIndex> | null = null;

/**
 * Initialize the universal content index from the encyclopedia store
 */
export async function initializeUniversalContentIndex(): Promise<UniversalContentIndex> {
  if (universalIndex) return universalIndex;
  if (universalIndexPromise) return universalIndexPromise;

  universalIndexPromise = (async () => {
    console.log('[Universal RAG] Initializing content index from encyclopedia...');
    ensureSeeded();

    const index: UniversalContentIndex = {
      byId: new Map(),
      byStructure: new Map(),
      byCategory: new Map(),
      byType: new Map(),
    };

    // Get all entries from encyclopedia
    const allEntries = getAllEntries();
    console.log(`[Universal RAG] Indexing ${allEntries.length} encyclopedia entries...`);

    for (const entry of allEntries) {
      // Index by ID
      index.byId.set(entry.entryId, entry);

      // Index by type
      if (!index.byType.has(entry.entryType)) {
        index.byType.set(entry.entryType, []);
      }
      index.byType.get(entry.entryType)!.push(entry);

      // Index by category
      if (!index.byCategory.has(entry.category)) {
        index.byCategory.set(entry.category, []);
      }
      index.byCategory.get(entry.category)!.push(entry);

      // Index by structure name
      const structureName = entry.name.toLowerCase().replace(/\s+/g, '-');
      if (!index.byStructure.has(structureName)) {
        index.byStructure.set(structureName, []);
      }
      index.byStructure.get(structureName)!.push(entry);

      // Index by aliases
      entry.aliases?.forEach(alias => {
        const aliasKey = alias.toLowerCase().replace(/\s+/g, '-');
        if (!index.byStructure.has(aliasKey)) {
          index.byStructure.set(aliasKey, []);
        }
        index.byStructure.get(aliasKey)!.push(entry);
      });

      // Index by keywords
      entry.searchMetadata.primaryKeywords.forEach(keyword => {
        const keywordKey = keyword.toLowerCase().replace(/\s+/g, '-');
        if (!index.byStructure.has(keywordKey)) {
          index.byStructure.set(keywordKey, []);
        }
        index.byStructure.get(keywordKey)!.push(entry);
      });

      entry.searchMetadata.secondaryKeywords?.forEach(keyword => {
        const keywordKey = keyword.toLowerCase().replace(/\s+/g, '-');
        if (!index.byStructure.has(keywordKey)) {
          index.byStructure.set(keywordKey, []);
        }
        index.byStructure.get(keywordKey)!.push(entry);
      });
    }

    console.log(`[Universal RAG] Indexing complete:`);
    console.log(`  - Total entries: ${index.byId.size}`);
    console.log(`  - By type: ${Array.from(index.byType.entries()).map(([t, arr]) => `${t}: ${arr.length}`).join(', ')}`);
    console.log(`  - By category: ${Array.from(index.byCategory.entries()).map(([c, arr]) => `${c}: ${arr.length}`).join(', ')}`);

    universalIndex = index;
    return index;
  })();

  return universalIndexPromise;
}

/**
 * Convert encyclopedia entry to ContentDocument format
 */
function encyclopediaEntryToDocument(
  entry: EncyclopediaEntry,
  level: 1 | 2 | 3 | 4 | 5 = 3
): ContentDocument {
  // Map level to complexity key
  const complexityKey = level <= 2 ? 'patient' : level === 3 ? 'intermediate' : 'professional';

  // Build content markdown
  let content = '';

  // Add overview
  if (entry.overview[complexityKey]) {
    content += `## Overview\n${entry.overview[complexityKey]}\n\n`;
  }

  // Add content sections
  if (entry.content && entry.content.length > 0) {
    for (const section of entry.content) {
      const sectionContent = section.content[complexityKey];
      if (sectionContent) {
        content += `## ${section.title}\n${sectionContent}\n\n`;
      }
    }
  }

  // Add related entries
  if (entry.relatedEntries && entry.relatedEntries.length > 0) {
    content += `## Related Topics\n`;
    for (const related of entry.relatedEntries.slice(0, 5)) {
      content += `- **${related.name}**: ${related.description || ''}\n`;
    }
    content += `\n`;
  }

  // Build source from references
  const primaryRef = entry.references?.[0];
  const source = primaryRef
    ? `${primaryRef.authors || primaryRef.source} (${primaryRef.year})`
    : 'SOMA Medical Encyclopedia';

  return {
    id: entry.entryId,
    title: entry.name,
    source,
    content: content.trim() || entry.summary,
    url: primaryRef?.url,
    license: undefined,
  };
}

/**
 * Search all content by query
 */
export async function searchUniversalContent(query: string): Promise<ContentDocument[]> {
  ensureSeeded();
  const index = await initializeUniversalContentIndex();

  const searchResults = searchEntries(query, { limit: 20 });
  const documents: ContentDocument[] = [];

  for (const result of searchResults) {
    const entry = index.byId.get(result.entryId);
    if (entry) {
      documents.push(encyclopediaEntryToDocument(entry));
    }
  }

  return documents;
}

/**
 * Get content by structure name
 */
export async function getContentByStructure(structureName: string): Promise<ContentDocument | null> {
  ensureSeeded();
  const index = await initializeUniversalContentIndex();

  const key = structureName.toLowerCase().replace(/\s+/g, '-');
  const results = index.byStructure.get(key);

  if (results && results.length > 0) {
    return encyclopediaEntryToDocument(results[0]);
  }

  // Try searching
  const searchResults = searchEntries(structureName, { limit: 3 });
  if (searchResults.length > 0) {
    const entry = index.byId.get(searchResults[0].entryId);
    if (entry) {
      return encyclopediaEntryToDocument(entry);
    }
  }

  return null;
}

/**
 * Get content by body system (category)
 */
export async function getContentBySystem(system: MedicalCategory): Promise<ContentDocument[]> {
  ensureSeeded();
  const index = await initializeUniversalContentIndex();

  const entries = index.byCategory.get(system) || [];
  return entries.map(entry => encyclopediaEntryToDocument(entry));
}

/**
 * Get content by entry type
 */
export async function getContentByType(type: EntryType): Promise<ContentDocument[]> {
  ensureSeeded();
  const index = await initializeUniversalContentIndex();

  const entries = index.byType.get(type) || [];
  return entries.map(entry => encyclopediaEntryToDocument(entry));
}

/**
 * Get content by ID
 */
export async function getContentById(id: string): Promise<ContentDocument | null> {
  ensureSeeded();
  const index = await initializeUniversalContentIndex();

  const entry = index.byId.get(id);
  if (entry) {
    return encyclopediaEntryToDocument(entry);
  }

  return null;
}

/**
 * Get universal content statistics
 */
export async function getUniversalContentStats(): Promise<{
  totalContent: number;
  bySystem: Record<string, number>;
  byType: Record<string, number>;
}> {
  ensureSeeded();
  const index = await initializeUniversalContentIndex();

  const bySystem: Record<string, number> = {};
  for (const [category, entries] of index.byCategory.entries()) {
    bySystem[category] = entries.length;
  }

  const byType: Record<string, number> = {};
  for (const [type, entries] of index.byType.entries()) {
    byType[type] = entries.length;
  }

  return {
    totalContent: index.byId.size,
    bySystem,
    byType,
  };
}

/**
 * Clear the index
 */
export function clearUniversalContentIndex(): void {
  universalIndex = null;
  universalIndexPromise = null;
  seeded = false;
}

// Export types
export type { UniversalContentIndex };
export type { EncyclopediaEntry as EducationalContent } from '../core/medical-simulation/encyclopedia/types';
