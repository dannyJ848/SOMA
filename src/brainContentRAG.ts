/**
 * Brain Content RAG Integration
 * 
 * Connects the existing nervous system content files to the RAG retrieval system.
 * This indexes all brain-related educational content for fast retrieval.
 */

import type { EducationalContent } from '../core/content/types';
import type { ContentDocument } from './ContentViewer';

// Content index for brain/nervous system
interface BrainContentIndex {
  byId: Map<string, EducationalContent>;
  byStructure: Map<string, EducationalContent[]>; // e.g., 'cerebral-cortex' -> content
  byCategory: Map<string, EducationalContent[]>; // e.g., 'anatomy', 'physiology'
  bySystem: Map<string, EducationalContent[]>; // e.g., 'nervous', 'cardiovascular'
}

// Singleton index
let brainIndex: BrainContentIndex | null = null;
let indexPromise: Promise<BrainContentIndex> | null = null;

/**
 * Load and index all brain/nervous system content
 */
export async function initializeBrainContentIndex(): Promise<BrainContentIndex> {
  if (brainIndex) return brainIndex;
  if (indexPromise) return indexPromise;

  indexPromise = (async () => {
    console.log('[Brain RAG] Initializing content index...');
    
    const index: BrainContentIndex = {
      byId: new Map(),
      byStructure: new Map(),
      byCategory: new Map(),
      bySystem: new Map(),
    };

    // Load content from nervous system modules
    try {
      const anatomyModule = await import('../core/content/nervous/anatomy/index');
      const histologyModule = await import('../core/content/nervous/histology/index');
      const pathologyModule = await import('../core/content/nervous/pathology/index');
      const physiologyModule = await import('../core/content/nervous/physiology/index');
      const clinicalModule = await import('../core/content/nervous/clinical/index');

      // Index anatomy content
      Object.values(anatomyModule).forEach((content: any) => {
        if (content && typeof content === 'object' && 'id' in content) {
          registerBrainContent(content as EducationalContent, 'anatomy', index);
        }
      });

      // Index histology content
      Object.values(histologyModule).forEach((content: any) => {
        if (content && typeof content === 'object' && 'id' in content) {
          registerBrainContent(content as EducationalContent, 'histology', index);
        }
      });

      // Index pathology content
      Object.values(pathologyModule).forEach((content: any) => {
        if (content && typeof content === 'object' && 'id' in content) {
          registerBrainContent(content as EducationalContent, 'pathology', index);
        }
      });

      // Index physiology content
      Object.values(physiologyModule).forEach((content: any) => {
        if (content && typeof content === 'object' && 'id' in content) {
          registerBrainContent(content as EducationalContent, 'physiology', index);
        }
      });

      // Index clinical content
      Object.values(clinicalModule).forEach((content: any) => {
        if (content && typeof content === 'object' && 'id' in content) {
          registerBrainContent(content as EducationalContent, 'clinical', index);
        }
      });

      console.log(`[Brain RAG] Indexed ${index.byId.size} content items`);
    } catch (e) {
      console.error('[Brain RAG] Error loading content:', e);
    }

    brainIndex = index;
    return index;
  })();

  return indexPromise;
}

/**
 * Register a content item in the index
 */
function registerBrainContent(
  content: EducationalContent, 
  category: string,
  index: BrainContentIndex
): void {
  // Index by ID
  index.byId.set(content.id, content);

  // Index by category
  if (!index.byCategory.has(category)) {
    index.byCategory.set(category, []);
  }
  index.byCategory.get(category)!.push(content);

  // Index by system (nervous)
  if (!index.bySystem.has('nervous')) {
    index.bySystem.set('nervous', []);
  }
  index.bySystem.get('nervous')!.push(content);

  // Index by structure (extract from name and tags)
  const structureName = content.name.toLowerCase().replace(/\s+/g, '-');
  if (!index.byStructure.has(structureName)) {
    index.byStructure.set(structureName, []);
  }
  index.byStructure.get(structureName)!.push(content);

  // Also index by tags
  content.tags?.keywords?.forEach(tag => {
    const tagKey = tag.toLowerCase().replace(/\s+/g, '-');
    if (!index.byStructure.has(tagKey)) {
      index.byStructure.set(tagKey, []);
    }
    index.byStructure.get(tagKey)!.push(content);
  });
}

/**
 * Search brain content by query
 */
export function searchBrainContent(query: string): EducationalContent[] {
  if (!brainIndex) {
    console.warn('[Brain RAG] Index not initialized');
    return [];
  }

  const q = query.toLowerCase();
  const results: EducationalContent[] = [];
  const seen = new Set<string>();

  // Search by ID
  for (const [id, content] of brainIndex.byId) {
    if (id.includes(q) && !seen.has(id)) {
      results.push(content);
      seen.add(id);
    }
  }

  // Search by name
  for (const [name, contents] of brainIndex.byStructure) {
    if (name.includes(q)) {
      contents.forEach(content => {
        if (!seen.has(content.id)) {
          results.push(content);
          seen.add(content.id);
        }
      });
    }
  }

  return results;
}

/**
 * Get content by structure name
 */
export function getBrainContentByStructure(structureName: string): EducationalContent | null {
  if (!brainIndex) {
    console.warn('[Brain RAG] Index not initialized');
    return null;
  }

  const key = structureName.toLowerCase().replace(/\s+/g, '-');
  const results = brainIndex.byStructure.get(key);
  return results?.[0] || null;
}

/**
 * Get content by category
 */
export function getBrainContentByCategory(category: string): EducationalContent[] {
  if (!brainIndex) {
    console.warn('[Brain RAG] Index not initialized');
    return [];
  }

  return brainIndex.byCategory.get(category) || [];
}

/**
 * Get content by ID
 */
export function getBrainContentById(id: string): EducationalContent | null {
  if (!brainIndex) {
    console.warn('[Brain RAG] Index not initialized');
    return null;
  }

  return brainIndex.byId.get(id) || null;
}

/**
 * Convert EducationalContent to ContentDocument for display
 */
export function brainContentToDocument(
  content: EducationalContent,
  level: 1 | 2 | 3 | 4 | 5 = 3
): ContentDocument {
  const levelContent = content.levels[level];
  
  if (!levelContent) {
    // Fallback to available level
    const availableLevels = Object.keys(content.levels).map(Number) as (1 | 2 | 3 | 4 | 5)[];
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
    content: formatBrainContent(lc),
    url: content.citations?.[0]?.url,
    license: content.citations?.[0]?.license,
  };
}

/**
 * Format level content as markdown
 */
function formatBrainContent(levelContent: any): string {
  let formatted = '';

  if (levelContent.summary) {
    formatted += `## Overview\n${levelContent.summary}\n\n`;
  }

  if (levelContent.explanation) {
    formatted += `## Detailed Information\n${levelContent.explanation}\n\n`;
  }

  if (levelContent.keyTerms?.length) {
    formatted += `## Key Terms\n`;
    levelContent.keyTerms.forEach((term: any) => {
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
    levelContent.analogies.forEach((analogy: string) => {
      formatted += `- ${analogy}\n`;
    });
    formatted += `\n`;
  }

  if (levelContent.examples?.length) {
    formatted += `## Examples\n`;
    levelContent.examples.forEach((example: string) => {
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
 * Quick lookup for brain menu items
 */
export const BrainContentLookup = {
  // Anatomy
  cerebralCortex: () => getBrainContentByStructure('cerebral-cortex'),
  basalGanglia: () => getBrainContentByStructure('basal-ganglia'),
  brainstem: () => getBrainContentByStructure('brainstem'),
  thalamus: () => getBrainContentByStructure('thalamus'),
  hypothalamus: () => getBrainContentByStructure('hypothalamus'),
  
  // Histology
  neurons: () => getBrainContentByStructure('neuron'),
  neuroglia: () => getBrainContentByStructure('neuroglia'),
  synapses: () => getBrainContentByStructure('synapse'),
  
  // Physiology
  neurotransmitters: () => getBrainContentByStructure('neurotransmitter'),
  actionPotentials: () => getBrainContentByStructure('action-potential'),
  synapticTransmission: () => getBrainContentByStructure('synaptic-transmission'),
  neuroplasticity: () => getBrainContentByStructure('neuroplasticity'),
  
  // Pathology
  stroke: () => getBrainContentByStructure('stroke'),
  brainTumors: () => getBrainContentByStructure('brain-tumor'),
  neurodegeneration: () => getBrainContentByStructure('neurodegeneration'),
  demyelinating: () => getBrainContentByStructure('demyelinating'),
  
  // Clinical
  neuroExam: () => getBrainContentByStructure('neurological-exam'),
  eeg: () => getBrainContentByStructure('eeg'),
  lumbarPuncture: () => getBrainContentByStructure('lumbar-puncture'),
  strokeAssessment: () => getBrainContentByStructure('stroke-assessment'),
  headacheEvaluation: () => getBrainContentByStructure('headache'),
};

/**
 * Get all brain content statistics
 */
export function getBrainContentStats(): {
  totalContent: number;
  byCategory: Record<string, number>;
} {
  if (!brainIndex) {
    return { totalContent: 0, byCategory: {} };
  }

  const byCategory: Record<string, number> = {};
  for (const [category, contents] of brainIndex.byCategory.entries()) {
    byCategory[category] = contents.length;
  }

  return {
    totalContent: brainIndex.byId.size,
    byCategory,
  };
}

/**
 * Clear the index (useful for testing)
 */
export function clearBrainContentIndex(): void {
  brainIndex = null;
  indexPromise = null;
}
