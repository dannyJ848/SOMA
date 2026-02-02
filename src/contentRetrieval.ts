/**
 * Content Retrieval Utilities
 *
 * Helper functions for retrieving educational content and converting it
 * to display formats. Follows the SOMA Button-to-Content Integration Protocol.
 *
 * This module provides the "wiring" between UI buttons and the educational
 * content stored in the core/medical-simulation/encyclopedia/ directory.
 */

import {
  getEntry,
  getAllEntries,
  searchEntries,
  getEntriesByType,
  getEntriesForAnatomyStructure,
  mapComplexityLevel,
} from '../core/medical-simulation/encyclopedia/store';
import { seedEncyclopedia } from '../core/medical-simulation/encyclopedia/seed';
import type {
  EncyclopediaEntry,
  EncyclopediaSearchResult,
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

// Complexity level type
export type ComplexityLevel = 1 | 2 | 3 | 4 | 5;

/**
 * Convert encyclopedia entry to ContentDocument format
 */
function encyclopediaEntryToDocument(
  entry: EncyclopediaEntry,
  level: ComplexityLevel = 3
): ContentDocument {
  const complexityKey = mapComplexityLevel(level);

  // Build content markdown
  let content = '';

  // Add overview at requested complexity level
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

  // Add related entries if available
  if (entry.relatedEntries && entry.relatedEntries.length > 0) {
    content += `## Related Topics\n`;
    for (const related of entry.relatedEntries.slice(0, 5)) {
      content += `- **${related.name}**: ${related.description || ''}\n`;
    }
    content += `\n`;
  }

  // Add anatomy links if available
  if (entry.anatomyLinks && entry.anatomyLinks.length > 0) {
    content += `## Anatomy Links\n`;
    for (const link of entry.anatomyLinks.slice(0, 5)) {
      content += `- **${link.structureName}**: ${link.relevance || ''}\n`;
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
    license: primaryRef?.type === 'open-source' ? 'Open Access' : undefined,
  };
}

/**
 * Retrieve content by name and convert to ContentDocument
 * @param name - Content name to search for
 * @param options - Search options (type, level, fallback)
 * @returns ContentDocument or null if not found
 * @example
 * const doc = await retrieveContentDocument('Heart', { type: 'anatomy', level: 3 });
 */
export async function retrieveContentDocument(
  name: string,
  options: {
    type?: 'anatomy' | 'condition' | 'physiology' | 'histology' | 'concept' | 'process';
    level?: ComplexityLevel;
    fallback?: boolean;
  } = {}
): Promise<ContentDocument | null> {
  ensureSeeded();

  const { type, level = 3, fallback = true } = options;

  console.log(`[Content Retrieval] Searching for: ${name}`);

  // Search encyclopedia entries
  const searchResults = searchEntries(name, {
    entryType: type,
    limit: 5,
  });

  console.log(`[Content Retrieval] Found ${searchResults.length} results for: ${name}`);

  if (searchResults.length === 0) {
    // Try fallback search with broader terms
    if (fallback) {
      const fallbackResults = searchEntries(name.split(' ')[0], { limit: 3 });
      if (fallbackResults.length > 0) {
        console.log(`[Content Retrieval] Using fallback match: ${fallbackResults[0].name}`);
        return encyclopediaEntryToDocument(getEntry(fallbackResults[0].entryId)!, level);
      }
    }
    return null;
  }

  // Get the best match
  const bestMatch = searchResults[0];
  const entry = getEntry(bestMatch.entryId);

  if (!entry) return null;

  return encyclopediaEntryToDocument(entry, level);
}

/**
 * Retrieve content by structure/region ID
 * @param structureId - Structure ID (e.g., 'head', 'chest', 'heart')
 * @param level - Complexity level (1-5)
 * @returns ContentDocument or null
 */
export async function retrieveContentByStructure(
  structureId: string,
  level: ComplexityLevel = 3
): Promise<ContentDocument | null> {
  ensureSeeded();

  console.log(`[Content Retrieval] Searching by structure ID: ${structureId}`);

  // Try to find region entry directly
  const regionEntryId = `region-${structureId.toLowerCase()}`;
  let entry = getEntry(regionEntryId);

  if (entry) {
    return encyclopediaEntryToDocument(entry, level);
  }

  // Search for entries related to this structure
  const entries = getEntriesForAnatomyStructure(structureId.toLowerCase());
  if (entries.length > 0) {
    return encyclopediaEntryToDocument(entries[0], level);
  }

  // Fallback: search by name
  const searchResults = searchEntries(structureId, { limit: 3 });
  if (searchResults.length > 0) {
    entry = getEntry(searchResults[0].entryId);
    if (entry) {
      return encyclopediaEntryToDocument(entry, level);
    }
  }

  return null;
}

/**
 * Search for conditions and return the first match
 * @param conditionName - Name of the condition
 * @param level - Complexity level
 * @returns ContentDocument or null
 */
export async function searchConditions(
  conditionName: string,
  level: ComplexityLevel = 3
): Promise<ContentDocument | null> {
  ensureSeeded();

  console.log(`[Content Retrieval] Searching for condition: ${conditionName}`);

  // Search for condition entries
  const searchResults = searchEntries(conditionName, {
    entryType: 'condition',
    limit: 5,
  });

  if (searchResults.length === 0) {
    // Try broader search
    const broadResults = searchEntries(conditionName, { limit: 3 });
    if (broadResults.length === 0) return null;

    const entry = getEntry(broadResults[0].entryId);
    if (!entry) return null;

    return encyclopediaEntryToDocument(entry, level);
  }

  const entry = getEntry(searchResults[0].entryId);
  if (!entry) return null;

  return encyclopediaEntryToDocument(entry, level);
}

/**
 * Search for histology content
 * @param tissueName - Name of the tissue
 * @param level - Complexity level
 * @returns ContentDocument or null
 */
export async function searchHistology(
  tissueName: string,
  level: ComplexityLevel = 3
): Promise<ContentDocument | null> {
  ensureSeeded();

  console.log(`[Content Retrieval] Searching for histology: ${tissueName}`);

  // Try tissue entry directly
  const tissueId = `tissue-${tissueName.toLowerCase().replace(/\s+/g, '-')}`;
  let entry = getEntry(tissueId);

  if (entry) {
    return encyclopediaEntryToDocument(entry, level);
  }

  // Search for anatomy entries with histology content
  const searchResults = searchEntries(tissueName, {
    entryType: 'anatomy',
    limit: 5,
  });

  // Look for entries with histology in content sections
  for (const result of searchResults) {
    entry = getEntry(result.entryId);
    if (entry?.content?.some(c => c.title.toLowerCase().includes('histology'))) {
      return encyclopediaEntryToDocument(entry, level);
    }
  }

  // Return first anatomy match if no specific histology found
  if (searchResults.length > 0) {
    entry = getEntry(searchResults[0].entryId);
    if (entry) {
      return encyclopediaEntryToDocument(entry, level);
    }
  }

  return null;
}

/**
 * Search for lab tests and return the first match
 * @param labTestName - Name of the lab test
 * @param level - Complexity level
 * @returns ContentDocument or null
 */
export async function searchLabTests(
  labTestName: string,
  level: ComplexityLevel = 3
): Promise<ContentDocument | null> {
  ensureSeeded();

  console.log(`[Content Retrieval] Searching for lab test: ${labTestName}`);

  // Search encyclopedia for lab-related content
  const searchResults = searchEntries(labTestName, { limit: 5 });

  if (searchResults.length === 0) return null;

  const entry = getEntry(searchResults[0].entryId);
  if (!entry) return null;

  return encyclopediaEntryToDocument(entry, level);
}

/**
 * Search for medications/pharmacology content
 * @param medicationName - Name of the medication
 * @param level - Complexity level
 * @returns ContentDocument or null
 */
export async function searchMedications(
  medicationName: string,
  level: ComplexityLevel = 3
): Promise<ContentDocument | null> {
  ensureSeeded();

  console.log(`[Content Retrieval] Searching for medication: ${medicationName}`);

  // Search encyclopedia for medication-related content
  const searchResults = searchEntries(medicationName, { limit: 5 });

  if (searchResults.length === 0) return null;

  const entry = getEntry(searchResults[0].entryId);
  if (!entry) return null;

  return encyclopediaEntryToDocument(entry, level);
}

/**
 * Search for pathology content related to a structure
 * @param structureName - Name of the anatomical structure
 * @param level - Complexity level
 * @returns ContentDocument or null
 */
export async function searchPathology(
  structureName: string,
  level: ComplexityLevel = 3
): Promise<ContentDocument | null> {
  ensureSeeded();

  console.log(`[Content Retrieval] Searching for pathology: ${structureName}`);

  // First try condition entries
  const conditionResults = searchEntries(structureName, {
    entryType: 'condition',
    limit: 5,
  });

  if (conditionResults.length > 0) {
    const entry = getEntry(conditionResults[0].entryId);
    if (entry) {
      return encyclopediaEntryToDocument(entry, level);
    }
  }

  // Try region entries and look for pathology section
  const regionResults = searchEntries(structureName, {
    entryType: 'anatomy',
    limit: 5,
  });

  for (const result of regionResults) {
    const entry = getEntry(result.entryId);
    if (entry?.content?.some(c => c.title.toLowerCase().includes('pathology'))) {
      return encyclopediaEntryToDocument(entry, level);
    }
  }

  // Fallback to any match
  if (regionResults.length > 0) {
    const entry = getEntry(regionResults[0].entryId);
    if (entry) {
      return encyclopediaEntryToDocument(entry, level);
    }
  }

  return null;
}

/**
 * Search for physiology content
 * @param processName - Name of the physiological process
 * @param level - Complexity level
 * @returns ContentDocument or null
 */
export async function searchPhysiology(
  processName: string,
  level: ComplexityLevel = 3
): Promise<ContentDocument | null> {
  ensureSeeded();

  console.log(`[Content Retrieval] Searching for physiology: ${processName}`);

  // Try process entries directly
  const processId = `process-${processName.toLowerCase().replace(/\s+/g, '-')}`;
  let entry = getEntry(processId);

  if (entry) {
    return encyclopediaEntryToDocument(entry, level);
  }

  // Search for physiology entries
  const searchResults = searchEntries(processName, {
    entryType: 'physiology',
    limit: 5,
  });

  if (searchResults.length > 0) {
    entry = getEntry(searchResults[0].entryId);
    if (entry) {
      return encyclopediaEntryToDocument(entry, level);
    }
  }

  // Try region entries and look for physiology section
  const regionResults = searchEntries(processName, {
    entryType: 'anatomy',
    limit: 5,
  });

  for (const result of regionResults) {
    entry = getEntry(result.entryId);
    if (entry?.content?.some(c => c.title.toLowerCase().includes('physiology'))) {
      return encyclopediaEntryToDocument(entry, level);
    }
  }

  return null;
}

/**
 * Map vital sign types to search terms
 */
const VITAL_SEARCH_TERMS: Record<string, string> = {
  'heart-rate': 'resting heart rate cardiovascular',
  'hrv': 'heart rate variability HRV autonomic',
  'recovery': 'recovery score HRV recovery',
  'sleep': 'sleep physiology circadian',
  'steps': 'physical activity walking health',
};

/**
 * Retrieve content for a vital sign type
 * @param vitalType - Type of vital sign
 * @param level - Complexity level
 * @returns ContentDocument or null
 */
export async function retrieveVitalContent(
  vitalType: 'heart-rate' | 'hrv' | 'recovery' | 'sleep' | 'steps',
  level: ComplexityLevel = 3
): Promise<ContentDocument | null> {
  ensureSeeded();

  const searchTerm = VITAL_SEARCH_TERMS[vitalType];

  if (!searchTerm) {
    console.warn(`[Content Retrieval] Unknown vital type: ${vitalType}`);
    return null;
  }

  console.log(`[Content Retrieval] Searching for vital: ${vitalType}`);

  const searchResults = searchEntries(searchTerm, { limit: 5 });

  console.log(`[Content Retrieval] Found ${searchResults.length} results for ${vitalType}`);

  if (searchResults.length === 0) return null;

  const entry = getEntry(searchResults[0].entryId);
  if (!entry) return null;

  return encyclopediaEntryToDocument(entry, level);
}

/**
 * Get all available content entries (for indexing/debugging)
 */
export function getAllContentEntries(): EncyclopediaEntry[] {
  ensureSeeded();
  return getAllEntries();
}

/**
 * Search encyclopedia and return raw results
 * @param query - Search query
 * @param limit - Maximum results
 * @returns Array of search results
 */
export function searchEncyclopedia(
  query: string,
  limit: number = 10
): EncyclopediaSearchResult[] {
  ensureSeeded();
  return searchEntries(query, { limit });
}

/**
 * Clear any cached data (useful for testing)
 */
export function clearContentCache(): void {
  seeded = false;
}
