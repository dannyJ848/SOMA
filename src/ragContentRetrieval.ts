/**
 * RAG-Ready Content Retrieval System
 * 
 * Optimized for massive content uploads and fast retrieval.
 * Replaces the complex content loading with a streamlined approach.
 */

import type { 
  EducationalContent, 
  PartialEducationalContent, 
  ComplexityLevel,
  LevelContent 
} from '../core/content/types';
import type { ContentDocument } from './ContentViewer';

// Content index for fast lookups - will be populated from RAG
interface ContentIndex {
  byId: Map<string, EducationalContent>;
  byName: Map<string, EducationalContent[]>;
  byTag: Map<string, EducationalContent[]>;
  byType: Map<string, EducationalContent[]>;
}

// Singleton content index
let contentIndex: ContentIndex | null = null;
let contentIndexPromise: Promise<ContentIndex> | null = null;

/**
 * Initialize the content index from RAG or local storage
 * This is called once on app startup
 */
export async function initializeContentIndex(): Promise<ContentIndex> {
  if (contentIndex) return contentIndex;
  if (contentIndexPromise) return contentIndexPromise;

  contentIndexPromise = (async () => {
    console.log('[RAG Content] Initializing content index...');
    
    const index: ContentIndex = {
      byId: new Map(),
      byName: new Map(),
      byTag: new Map(),
      byType: new Map(),
    };

    // TODO: Load from RAG vector store or local cache
    // For now, we'll populate dynamically as content is accessed
    
    contentIndex = index;
    console.log('[RAG Content] Content index initialized');
    return index;
  })();

  return contentIndexPromise;
}

/**
 * Register content in the index
 * Called when new content is uploaded via RAG
 */
export function registerContent(content: EducationalContent): void {
  if (!contentIndex) {
    console.warn('[RAG Content] Index not initialized, content not registered');
    return;
  }

  // Index by ID
  contentIndex.byId.set(content.id, content);

  // Index by name (lowercase for case-insensitive search)
  const nameKey = content.name.toLowerCase();
  const existingByName = contentIndex.byName.get(nameKey) || [];
  existingByName.push(content);
  contentIndex.byName.set(nameKey, existingByName);

  // Index by type
  const typeKey = content.type;
  const existingByType = contentIndex.byType.get(typeKey) || [];
  existingByType.push(content);
  contentIndex.byType.set(typeKey, existingByType);

  // Index by tags
  content.tags?.keywords?.forEach(tag => {
    const tagKey = tag.toLowerCase();
    const existingByTag = contentIndex!.byTag.get(tagKey) || [];
    existingByTag.push(content);
    contentIndex!.byTag.set(tagKey, existingByTag);
  });

  console.log(`[RAG Content] Registered: ${content.name} (${content.id})`);
}

/**
 * Batch register multiple content items
 * Optimized for RAG bulk uploads
 */
export function registerContentBatch(contents: EducationalContent[]): void {
  console.log(`[RAG Content] Batch registering ${contents.length} items...`);
  contents.forEach(content => registerContent(content));
  console.log(`[RAG Content] Batch registration complete`);
}

/**
 * Fast content lookup by exact name match
 * O(1) complexity with index
 */
export function findContentByName(name: string): EducationalContent | null {
  if (!contentIndex) {
    console.warn('[RAG Content] Index not initialized');
    return null;
  }

  const results = contentIndex.byName.get(name.toLowerCase());
  return results?.[0] || null;
}

/**
 * Search content by partial name match
 * Uses simple substring matching (can be enhanced with fuzzy search)
 */
export function searchContentByName(query: string): EducationalContent[] {
  if (!contentIndex) {
    console.warn('[RAG Content] Index not initialized');
    return [];
  }

  const results: EducationalContent[] = [];
  const queryLower = query.toLowerCase();

  for (const [name, contents] of contentIndex.byName.entries()) {
    if (name.includes(queryLower)) {
      results.push(...contents);
    }
  }

  // Remove duplicates
  return Array.from(new Map(results.map(c => [c.id, c])).values());
}

/**
 * Find content by tags
 * Great for category-based discovery
 */
export function findContentByTag(tag: string): EducationalContent[] {
  if (!contentIndex) {
    console.warn('[RAG Content] Index not initialized');
    return [];
  }

  return contentIndex.byTag.get(tag.toLowerCase()) || [];
}

/**
 * Find content by type
 * e.g., 'condition', 'medication', 'lab-test'
 */
export function findContentByType(type: string): EducationalContent[] {
  if (!contentIndex) {
    console.warn('[RAG Content] Index not initialized');
    return [];
  }

  return contentIndex.byType.get(type) || [];
}

/**
 * Get content by ID
 * Fast O(1) lookup
 */
export function getContentById(id: string): EducationalContent | null {
  if (!contentIndex) {
    console.warn('[RAG Content] Index not initialized');
    return null;
  }

  return contentIndex.byId.get(id) || null;
}

/**
 * Convert EducationalContent to ContentDocument for display
 */
function educationalContentToDocument(
  content: EducationalContent,
  level: ComplexityLevel = 3
): ContentDocument {
  const levelContent = content.levels[level];
  
  if (!levelContent) {
    // Fallback to available level
    const availableLevels = Object.keys(content.levels).map(Number) as ComplexityLevel[];
    const fallbackLevel = availableLevels.find(l => l <= level) || availableLevels[0];
    if (!fallbackLevel) {
      throw new Error(`No content levels available for ${content.name}`);
    }
  }

  const lc = levelContent || content.levels[3] || content.levels[2] || content.levels[1];

  return {
    id: content.id,
    title: content.name,
    source: content.citations?.[0]?.source || 'Medical Encyclopedia',
    content: formatLevelContent(lc),
    url: content.citations?.[0]?.url,
    license: content.citations?.[0]?.license,
  };
}

/**
 * Format LevelContent as markdown
 */
function formatLevelContent(levelContent: LevelContent): string {
  let formatted = '';

  if (levelContent.summary) {
    formatted += `## Summary\n${levelContent.summary}\n\n`;
  }

  if (levelContent.explanation) {
    formatted += `## Explanation\n${levelContent.explanation}\n\n`;
  }

  if (levelContent.keyTerms?.length) {
    formatted += `## Key Terms\n`;
    levelContent.keyTerms.forEach(term => {
      formatted += `- **${term.term}**`;
      if (term.pronunciation) {
        formatted += ` (${term.pronunciation})`;
      }
      formatted += `: ${term.definition}\n`;
    });
    formatted += `\n`;
  }

  if (levelContent.analogies?.length) {
    formatted += `## Analogies\n`;
    levelContent.analogies.forEach(analogy => {
      formatted += `- ${analogy}\n`;
    });
    formatted += `\n`;
  }

  if (levelContent.examples?.length) {
    formatted += `## Examples\n`;
    levelContent.examples.forEach(example => {
      formatted += `- ${example}\n`;
    });
    formatted += `\n`;
  }

  if (levelContent.clinicalNotes) {
    formatted += `## Clinical Notes\n${levelContent.clinicalNotes}\n`;
  }

  return formatted.trim();
}

/**
 * Retrieve content document for display
 * Primary function for button-to-content wiring
 */
export function retrieveContentDocument(
  contentId: string,
  level: ComplexityLevel = 3
): ContentDocument | null {
  const content = getContentById(contentId);
  if (!content) return null;
  
  try {
    return educationalContentToDocument(content, level);
  } catch (e) {
    console.error(`[RAG Content] Error converting content: ${contentId}`, e);
    return null;
  }
}

/**
 * Quick content lookup for dashboard buttons
 * Optimized for common use cases
 */
export const QuickContentLookup = {
  vital: (vitalType: string) => {
    const map: Record<string, string> = {
      'heart-rate': 'cardiovascular-heart-rate',
      'hrv': 'cardiovascular-hrv',
      'recovery': 'cardiovascular-recovery',
      'sleep': 'physiology-sleep',
      'steps': 'physical-activity-steps',
    };
    return retrieveContentDocument(map[vitalType] || vitalType);
  },

  condition: (conditionName: string) => {
    // Search by name and return first match
    const results = searchContentByName(conditionName);
    const condition = results.find(c => c.type === 'condition');
    return condition ? retrieveContentDocument(condition.id) : null;
  },

  medication: (medicationName: string) => {
    const results = searchContentByName(medicationName);
    const medication = results.find(c => 
      c.tags?.keywords?.includes('medication') || 
      c.tags?.keywords?.includes('pharmacology')
    );
    return medication ? retrieveContentDocument(medication.id) : null;
  },

  lab: (labTestName: string) => {
    const results = searchContentByName(labTestName);
    const lab = results.find(c => 
      c.tags?.keywords?.includes('lab-test') ||
      c.tags?.keywords?.includes('laboratory')
    );
    return lab ? retrieveContentDocument(lab.id) : null;
  },

  pathology: (structureName: string) => {
    const results = searchContentByName(structureName);
    const pathology = results.find(c => 
      c.tags?.keywords?.includes('pathology') ||
      c.type === 'condition'
    );
    return pathology ? retrieveContentDocument(pathology.id) : null;
  },
};

/**
 * Get content statistics
 * Useful for monitoring RAG uploads
 */
export function getContentStats(): {
  totalContent: number;
  byType: Record<string, number>;
  byTag: Record<string, number>;
} {
  if (!contentIndex) {
    return { totalContent: 0, byType: {}, byTag: {} };
  }

  const byType: Record<string, number> = {};
  for (const [type, contents] of contentIndex.byType.entries()) {
    byType[type] = contents.length;
  }

  const byTag: Record<string, number> = {};
  for (const [tag, contents] of contentIndex.byTag.entries()) {
    byTag[tag] = contents.length;
  }

  return {
    totalContent: contentIndex.byId.size,
    byType,
    byTag,
  };
}

/**
 * Export content index for backup or sharing
 */
export function exportContentIndex(): EducationalContent[] {
  if (!contentIndex) return [];
  return Array.from(contentIndex.byId.values());
}

/**
 * Import content index from backup
 */
export function importContentIndex(contents: EducationalContent[]): void {
  console.log(`[RAG Content] Importing ${contents.length} content items...`);
  registerContentBatch(contents);
  console.log('[RAG Content] Import complete');
}

/**
 * Clear the content index
 * Useful for testing or full re-indexing
 */
export function clearContentIndex(): void {
  contentIndex = null;
  contentIndexPromise = null;
  console.log('[RAG Content] Index cleared');
}
