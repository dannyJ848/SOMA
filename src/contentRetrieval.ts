/**
 * Content Retrieval Utilities
 * 
 * Helper functions for retrieving educational content and converting it
 * to display formats. Follows the SOMA Button-to-Content Integration Protocol.
 * 
 * This module provides the "wiring" between UI buttons and the educational
 * content stored in the core/content/ directory.
 */

import { searchContent, getContentForLevel } from '../core/content/store';
import type { 
  EducationalContent, 
  PartialEducationalContent, 
  ComplexityLevel,
  LevelContent 
} from '../core/content/types';
import type { ContentDocument } from './ContentViewer';

// In-memory content cache
let contentCache: (EducationalContent | PartialEducationalContent)[] | null = null;
let contentCachePromise: Promise<(EducationalContent | PartialEducationalContent)[]> | null = null;

/**
 * Dynamically load all educational content from the content directory
 * This is done lazily to avoid loading all content at startup
 */
async function loadAllContent(): Promise<(EducationalContent | PartialEducationalContent)[]> {
  if (contentCache) return contentCache;
  if (contentCachePromise) return contentCachePromise;

  contentCachePromise = (async () => {
    const allContent: (EducationalContent | PartialEducationalContent)[] = [];

    // Load content from various modules
    // Note: In production, this would be replaced with a proper content index
    try {
      // Load cardiology content
      const cardioModule = await import('../core/content/cardiology/index');
      if (cardioModule.cardiologyContent && Array.isArray(cardioModule.cardiologyContent)) {
        allContent.push(...cardioModule.cardiologyContent);
      }
    } catch (e) {
      console.log('[Content Retrieval] Cardiology content not available');
    }

    try {
      // Load respiratory content
      const respModule = await import('../core/content/respiratory/index');
      if (respModule.respiratoryContent && Array.isArray(respModule.respiratoryContent)) {
        allContent.push(...respModule.respiratoryContent);
      }
    } catch (e) {
      console.log('[Content Retrieval] Respiratory content not available');
    }

    try {
      // Load anatomy content
      const anatomyModule = await import('../core/content/anatomy/index');
      if (anatomyModule.allAnatomyContent && Array.isArray(anatomyModule.allAnatomyContent)) {
        allContent.push(...anatomyModule.allAnatomyContent);
      }
    } catch (e) {
      console.log('[Content Retrieval] Anatomy content not available');
    }

    try {
      // Load digestive content
      const digestiveModule = await import('../core/content/digestive/index');
      if (digestiveModule.digestiveContent && Array.isArray(digestiveModule.digestiveContent)) {
        allContent.push(...digestiveModule.digestiveContent);
      }
    } catch (e) {
      console.log('[Content Retrieval] Digestive content not available');
    }

    try {
      // Load musculoskeletal content
      const musculoskeletalModule = await import('../core/content/musculoskeletal/index');
      if (musculoskeletalModule.musculoskeletalContent && Array.isArray(musculoskeletalModule.musculoskeletalContent)) {
        allContent.push(...musculoskeletalModule.musculoskeletalContent);
      }
    } catch (e) {
      console.log('[Content Retrieval] Musculoskeletal content not available');
    }

    contentCache = allContent;
    return allContent;
  })();

  return contentCachePromise;
}

/**
 * Clear the content cache (useful for testing or after content updates)
 */
export function clearContentCache(): void {
  contentCache = null;
  contentCachePromise = null;
}

/**
 * Retrieve content by name and convert to ContentDocument
 * @param name - Content name to search for
 * @param options - Search options (type, level, fallback)
 * @returns ContentDocument or null if not found
 * @example
 * const doc = await retrieveContentDocument('Heart', { type: 'structure', level: 3 });
 */
export async function retrieveContentDocument(
  name: string,
  options: {
    type?: EducationalContent['type'] | EducationalContent['type'][];
    level?: ComplexityLevel;
    fallback?: boolean;
  } = {}
): Promise<ContentDocument | null> {
  const { type, level = 3, fallback = true } = options;

  console.log(`[Content Retrieval] Searching for: ${name}`);

  const allContent = await loadAllContent();

  const results = searchContent(allContent, {
    text: name,
    type,
    status: 'published',
    limit: 1,
  });

  console.log(`[Content Retrieval] Found ${results.length} results for: ${name}`);

  if (results.length === 0) return null;

  const content = results[0].content;
  const levelContent = getContentForLevel(content, level, fallback);

  if (!levelContent) return null;

  return educationalContentToDocument(content, levelContent);
}

/**
 * Retrieve content by FMA structure ID
 * @param fmaId - FMA ID (e.g., 'FMA:7088')
 * @param level - Complexity level (1-5)
 * @returns ContentDocument or null
 */
export async function retrieveContentByStructure(
  fmaId: string,
  level: ComplexityLevel = 3
): Promise<ContentDocument | null> {
  console.log(`[Content Retrieval] Searching by FMA ID: ${fmaId}`);

  const allContent = await loadAllContent();

  const results = searchContent(allContent, {
    text: fmaId,
    level,
    status: 'published',
    limit: 1,
  });

  if (results.length === 0) return null;

  const content = results[0].content;
  const levelContent = getContentForLevel(content, level, true);

  if (!levelContent) return null;

  return educationalContentToDocument(content, levelContent);
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
  console.log(`[Content Retrieval] Searching for condition: ${conditionName}`);
  return retrieveContentDocument(conditionName, {
    type: 'condition',
    level,
    fallback: true,
  });
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
  console.log(`[Content Retrieval] Searching for lab test: ${labTestName}`);

  const allContent = await loadAllContent();

  const results = searchContent(allContent, {
    text: labTestName,
    type: 'concept',
    status: 'published',
    limit: 1,
  });

  if (results.length === 0) return null;

  const content = results[0].content;
  
  // Check if it has lab-test tag
  const hasLabTag = content.tags?.keywords?.includes('lab-test');
  
  if (!hasLabTag) {
    // Try to find content that mentions this lab test
    const labResults = searchContent(allContent, {
      text: labTestName,
      tags: ['lab-test'],
      status: 'published',
      limit: 1,
    });
    
    if (labResults.length > 0) {
      const labContent = labResults[0].content;
      const levelContent = getContentForLevel(labContent, level, true);
      if (levelContent) {
        return educationalContentToDocument(labContent, levelContent);
      }
    }
  }

  const levelContent = getContentForLevel(content, level, true);
  if (!levelContent) return null;

  return educationalContentToDocument(content, levelContent);
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
  console.log(`[Content Retrieval] Searching for medication: ${medicationName}`);

  const allContent = await loadAllContent();

  // First try exact match on medication name
  const results = searchContent(allContent, {
    text: medicationName,
    type: 'concept',
    status: 'published',
    limit: 1,
  });

  if (results.length > 0) {
    const content = results[0].content;
    const levelContent = getContentForLevel(content, level, true);
    if (levelContent) {
      return educationalContentToDocument(content, levelContent);
    }
  }

  // Try searching with medication tag
  const medResults = searchContent(allContent, {
    text: medicationName,
    tags: ['medication', 'pharmacology'],
    status: 'published',
    limit: 1,
  });

  if (medResults.length > 0) {
    const content = medResults[0].content;
    const levelContent = getContentForLevel(content, level, true);
    if (levelContent) {
      return educationalContentToDocument(content, levelContent);
    }
  }

  return null;
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
  console.log(`[Content Retrieval] Searching for pathology: ${structureName}`);

  const allContent = await loadAllContent();

  // Search for pathology-related content
  const results = searchContent(allContent, {
    text: `${structureName} pathology`,
    type: ['condition', 'concept'],
    tags: ['pathology'],
    status: 'published',
    limit: 1,
  });

  if (results.length === 0) {
    // Try broader search
    const broadResults = searchContent(allContent, {
      text: structureName,
      type: 'condition',
      status: 'published',
      limit: 1,
    });
    
    if (broadResults.length === 0) return null;
    
    const content = broadResults[0].content;
    const levelContent = getContentForLevel(content, level, true);
    if (!levelContent) return null;
    
    return educationalContentToDocument(content, levelContent);
  }

  const content = results[0].content;
  const levelContent = getContentForLevel(content, level, true);

  if (!levelContent) return null;

  return educationalContentToDocument(content, levelContent);
}

/**
 * Convert EducationalContent to ContentDocument format
 */
function educationalContentToDocument(
  content: EducationalContent | PartialEducationalContent,
  levelContent: LevelContent
): ContentDocument {
  return {
    id: content.id,
    title: content.name,
    source: content.citations?.[0]?.source || 'Medical Encyclopedia',
    content: formatLevelContent(levelContent),
    url: content.citations?.[0]?.url,
    license: content.citations?.[0]?.license,
  };
}

/**
 * Format LevelContent as markdown string
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
  const searchTerm = VITAL_SEARCH_TERMS[vitalType];
  
  if (!searchTerm) {
    console.warn(`[Content Retrieval] Unknown vital type: ${vitalType}`);
    return null;
  }

  console.log(`[Content Retrieval] Searching for vital: ${vitalType}`);

  const allContent = await loadAllContent();

  const results = searchContent(allContent, {
    text: searchTerm,
    type: ['concept', 'process'],
    status: 'published',
    limit: 1,
  });

  console.log(`[Content Retrieval] Found ${results.length} results for ${vitalType}`);

  if (results.length === 0) return null;

  const content = results[0].content;
  const levelContent = getContentForLevel(content, level, true);

  if (!levelContent) return null;

  return educationalContentToDocument(content, levelContent);
}
