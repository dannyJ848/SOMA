/**
 * useAnatomyContent Hook
 *
 * Fetches and manages anatomical content for a given region and complexity level.
 * Provides structures, layers, related systems, and clinical relevance
 * at the appropriate complexity level.
 *
 * Uses real content from:
 *   - ANATOMY_REGIONS (core/content/anatomy/anatomy-encyclopedia.ts)
 *   - REGION_CONTENT_MAP (src/education/regionContentMapping.ts)
 * With fallback generation for unknown regions.
 */

import { useState, useEffect, useMemo, useCallback } from 'react';
import type { ComplexityLevel } from '../../core/content/types';
import {
  ANATOMY_REGIONS,
  getAnatomyRegion,
  type AnatomyRegion,
  type AnatomySystem,
} from '../../core/content/anatomy/anatomy-encyclopedia';
import {
  getRegionContent,
  type RegionContent,
} from '../education/regionContentMapping';

// ============================================
// Types
// ============================================

export interface AnatomyStructure {
  id: string;
  name: string;
  spanish?: string;
  type: 'organ' | 'bone' | 'muscle' | 'vessel' | 'nerve' | 'gland' | 'tissue' | 'cavity';
  system: AnatomySystem;
  location: string;
  function: string;
  relatedStructures?: string[];
  bloodSupply?: string;
  innervation?: string;
  clinicalNotes?: string;
}

export interface AnatomyLayer {
  id: string;
  name: string;
  depth: 'superficial' | 'intermediate' | 'deep';
  structures: string[];
  description: string;
}

export interface RelatedSystem {
  id: string;
  name: string;
  relationship: string;
  sharedStructures?: string[];
}

export interface ClinicalRelevance {
  id: string;
  condition: string;
  significance: string;
  clinicalPearl?: string;
  icdCodes?: string[];
}

export interface BloodSupply {
  arterial: string[];
  venous: string[];
  portal?: string;
}

export interface InnervationInfo {
  somatic?: string[];
  autonomic?: string[];
  sensation?: string;
}

export interface AnatomyContentData {
  regionId: string;
  regionName: string;
  complexityLevel: ComplexityLevel;

  // Overview
  overview: string;
  explanation?: string;

  // Core anatomy
  structures: AnatomyStructure[];
  layers: AnatomyLayer[];

  // Relationships
  relatedSystems: RelatedSystem[];

  // Clinical
  clinicalRelevance: ClinicalRelevance[];
  conditions: string[];
  symptoms: string[];
  procedures: string[];

  // Detailed anatomy (for higher complexity)
  bloodSupply?: BloodSupply;
  innervation?: InnervationInfo;

  // Key terms for learning
  keyTerms: Array<{ term: string; definition: string }>;
}

export interface UseAnatomyContentReturn {
  content: AnatomyContentData | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

// ============================================
// Constants
// ============================================

const SYSTEM_DISPLAY_NAMES: Record<AnatomySystem, string> = {
  nervous: 'Nervous System',
  cardiovascular: 'Cardiovascular System',
  respiratory: 'Respiratory System',
  digestive: 'Digestive System',
  urinary: 'Urinary System',
  reproductive: 'Reproductive System',
  musculoskeletal: 'Musculoskeletal System',
  endocrine: 'Endocrine System',
  integumentary: 'Integumentary System',
  lymphatic: 'Lymphatic System',
  sensory: 'Sensory System',
};

// ============================================
// Helpers
// ============================================

function toId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Infer structure type from name/keywords
 */
function inferStructureType(name: string): AnatomyStructure['type'] {
  const lower = name.toLowerCase();
  if (/artery|vein|vessel|aorta|vena|cava/.test(lower)) return 'vessel';
  if (/nerve|plexus|cord/.test(lower)) return 'nerve';
  if (/muscle|muscular/.test(lower)) return 'muscle';
  if (/bone|femur|tibia|humerus|clavicle|spine|vertebr|sacrum|coccyx/.test(lower)) return 'bone';
  if (/gland|thyroid|adrenal|pituitary|pancreas/.test(lower)) return 'gland';
  if (/cavity|space|sinus|cavity/.test(lower)) return 'cavity';
  if (/brain|heart|liver|kidney|lung|stomach|intestine|bladder|uterus|ovary/.test(lower)) return 'organ';
  return 'tissue';
}

/**
 * Infer layer depth from structure position keywords
 */
function inferLayerDepth(name: string): AnatomyLayer['depth'] {
  const lower = name.toLowerCase();
  if (/superficial|external|outer|cutaneous|skin|dermis/.test(lower)) return 'superficial';
  if (/deep|internal|inner|visceral/.test(lower)) return 'deep';
  return 'intermediate';
}

// ============================================
// Transform ANATOMY_REGIONS to hook types
// ============================================

/**
 * Transform an AnatomyRegion from the encyclopedia to AnatomyStructure
 */
function anatomyRegionToStructure(region: AnatomyRegion): AnatomyStructure {
  return {
    id: region.id,
    name: region.name,
    spanish: region.spanish,
    type: inferStructureType(region.name),
    system: region.system,
    location: region.location,
    function: region.function,
  };
}

/**
 * Build anatomy layers from region content
 */
function buildLayers(regionId: string, regionName: string): AnatomyLayer[] {
  // Default layers based on anatomical position
  return [
    {
      id: `${regionId}-superficial`,
      name: `Superficial ${regionName}`,
      depth: 'superficial',
      structures: [],
      description: `Outermost structures of the ${regionName.toLowerCase()}`,
    },
    {
      id: `${regionId}-intermediate`,
      name: `Intermediate ${regionName}`,
      depth: 'intermediate',
      structures: [],
      description: `Middle layer structures of the ${regionName.toLowerCase()}`,
    },
    {
      id: `${regionId}-deep`,
      name: `Deep ${regionName}`,
      depth: 'deep',
      structures: [],
      description: `Deep structures of the ${regionName.toLowerCase()}`,
    },
  ];
}

/**
 * Build related systems from anatomy region data
 */
function buildRelatedSystems(region: AnatomyRegion): RelatedSystem[] {
  const relatedSystems: RelatedSystem[] = [];

  // Add the primary system
  relatedSystems.push({
    id: region.system,
    name: SYSTEM_DISPLAY_NAMES[region.system] || region.system,
    relationship: 'Primary system',
  });

  // Infer related systems from conditions
  const systemKeywords: Record<AnatomySystem, string[]> = {
    cardiovascular: ['heart', 'artery', 'vein', 'blood', 'vascular', 'aorta'],
    respiratory: ['lung', 'breath', 'airway', 'trachea', 'bronch'],
    digestive: ['stomach', 'intestine', 'liver', 'colon', 'bowel'],
    nervous: ['brain', 'nerve', 'spinal', 'neuro'],
    musculoskeletal: ['bone', 'muscle', 'joint', 'skeletal'],
    endocrine: ['hormone', 'gland', 'thyroid', 'adrenal'],
    urinary: ['kidney', 'bladder', 'urine', 'renal'],
    reproductive: ['uterus', 'ovary', 'testis', 'prostate'],
    integumentary: ['skin', 'dermis', 'epidermis'],
    lymphatic: ['lymph', 'spleen', 'node', 'thymus'],
    sensory: ['eye', 'ear', 'vision', 'hearing'],
  };

  for (const condition of region.conditions) {
    for (const [system, keywords] of Object.entries(systemKeywords)) {
      if (keywords.some(k => condition.includes(k)) && system !== region.system) {
        if (!relatedSystems.find(rs => rs.id === system)) {
          relatedSystems.push({
            id: system as AnatomySystem,
            name: SYSTEM_DISPLAY_NAMES[system as AnatomySystem] || system,
            relationship: 'Related through clinical conditions',
          });
        }
      }
    }
  }

  return relatedSystems;
}

/**
 * Build clinical relevance from conditions
 */
function buildClinicalRelevance(region: AnatomyRegion): ClinicalRelevance[] {
  return region.conditions.slice(0, 5).map((condition, idx) => ({
    id: `${region.id}-condition-${idx}`,
    condition: condition.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    significance: `A condition affecting the ${region.name.toLowerCase()}`,
    icdCodes: region.conditions.length > idx ? undefined : undefined,
  }));
}

/**
 * Build key terms from anatomy region
 */
function buildKeyTerms(region: AnatomyRegion): Array<{ term: string; definition: string }> {
  const terms: Array<{ term: string; definition: string }> = [];

  terms.push({
    term: region.name,
    definition: region.function,
  });

  if (region.spanish) {
    terms.push({
      term: region.spanish,
      definition: `Spanish term for ${region.name}`,
    });
  }

  terms.push({
    term: 'Location',
    definition: region.location,
  });

  // Add symptoms as key terms
  for (const symptom of region.symptoms.slice(0, 3)) {
    terms.push({
      term: symptom.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      definition: `A symptom associated with ${region.name.toLowerCase()} pathology`,
    });
  }

  return terms;
}

/**
 * Build overview from anatomy region
 */
function buildOverview(region: AnatomyRegion, level: ComplexityLevel): string {
  switch (level) {
    case 1:
      return `The ${region.name} is located ${region.location.toLowerCase()}. ${region.function}.`;
    case 2:
      return `The ${region.name} (${region.spanish}) is an important structure located ${region.location.toLowerCase()}. Its main function is ${region.function.toLowerCase()}.`;
    case 3:
      return `The ${region.name} is a key anatomical structure within the ${region.system} system, situated ${region.location.toLowerCase()}. It ${region.function.toLowerCase()}. Common conditions include ${region.conditions.slice(0, 2).join(' and ')}.`;
    case 4:
    case 5:
      return `The ${region.name} (${region.spanish}) is a clinically significant structure of the ${region.system} system. Anatomically positioned ${region.location.toLowerCase()}, it ${region.function.toLowerCase()}. This region has important clinical associations with ${region.conditions.slice(0, 3).join(', ')}, and is evaluated using procedures such as ${region.procedures.slice(0, 2).join(' and ')}.`;
    default:
      return region.function;
  }
}

/**
 * Build explanation from anatomy region
 */
function buildExplanation(region: AnatomyRegion, level: ComplexityLevel): string | undefined {
  if (level < 2) return undefined;

  const sections: string[] = [];

  sections.push(`**Location and Position**`);
  sections.push(region.location);
  sections.push('');

  sections.push(`**Primary Function**`);
  sections.push(region.function);
  sections.push('');

  if (level >= 3) {
    sections.push(`**Body System**`);
    sections.push(`The ${region.name} belongs to the ${SYSTEM_DISPLAY_NAMES[region.system] || region.system}.`);
    sections.push('');

    sections.push(`**Associated Conditions**`);
    for (const condition of region.conditions.slice(0, 4)) {
      sections.push(`- ${condition.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}`);
    }
    sections.push('');
  }

  if (level >= 4) {
    sections.push(`**Common Symptoms**`);
    for (const symptom of region.symptoms.slice(0, 4)) {
      sections.push(`- ${symptom.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}`);
    }
    sections.push('');

    sections.push(`**Diagnostic/Therapeutic Procedures**`);
    for (const procedure of region.procedures.slice(0, 4)) {
      sections.push(`- ${procedure.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}`);
    }
  }

  return sections.join('\n');
}

/**
 * Transform AnatomyRegion to full AnatomyContentData
 */
function transformAnatomyRegion(
  region: AnatomyRegion,
  regionContent: RegionContent | null,
  level: ComplexityLevel
): AnatomyContentData {
  const structure = anatomyRegionToStructure(region);

  return {
    regionId: region.id,
    regionName: region.name,
    complexityLevel: level,
    overview: buildOverview(region, level),
    explanation: buildExplanation(region, level),
    structures: [structure],
    layers: buildLayers(region.id, region.name),
    relatedSystems: buildRelatedSystems(region),
    clinicalRelevance: buildClinicalRelevance(region),
    conditions: region.conditions,
    symptoms: region.symptoms,
    procedures: region.procedures,
    bloodSupply: level >= 4 && regionContent ? {
      arterial: [],
      venous: [],
    } : undefined,
    innervation: level >= 4 && regionContent ? {
      somatic: [],
      autonomic: [],
    } : undefined,
    keyTerms: buildKeyTerms(region),
  };
}

// ============================================
// Fallback content generation
// ============================================

/**
 * Generate fallback content for regions not in the encyclopedia
 */
function generateFallbackContent(
  regionId: string,
  regionName: string,
  level: ComplexityLevel
): AnatomyContentData {
  return {
    regionId,
    regionName,
    complexityLevel: level,
    overview: `The ${regionName} is an anatomical region of the human body.`,
    explanation: level >= 2
      ? `The ${regionName} is an important anatomical structure. Detailed content for this region is being developed.`
      : undefined,
    structures: [
      {
        id: regionId,
        name: regionName,
        type: 'tissue',
        system: 'musculoskeletal',
        location: 'Human body',
        function: `The ${regionName} serves important anatomical functions.`,
      },
    ],
    layers: buildLayers(regionId, regionName),
    relatedSystems: [],
    clinicalRelevance: [],
    conditions: [],
    symptoms: [],
    procedures: [],
    keyTerms: [
      { term: regionName, definition: `An anatomical region of the body` },
    ],
  };
}

// ============================================
// Hook Implementation
// ============================================

/**
 * Hook to fetch and manage anatomy content for a region
 *
 * @param regionId - The unique identifier of the anatomical region
 * @param complexityLevel - The complexity level for content (1-5)
 * @returns Object containing anatomy content, loading state, error, and refetch function
 */
export function useAnatomyContent(
  regionId: string,
  complexityLevel: ComplexityLevel
): UseAnatomyContentReturn {
  const [content, setContent] = useState<AnatomyContentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Derive region name from ID (used as fallback)
  const regionName = useMemo(() => {
    return regionId
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, [regionId]);

  const loadContent = useCallback(() => {
    setIsLoading(true);
    setError(null);

    try {
      // Try to find the region in ANATOMY_REGIONS
      const anatomyRegion = getAnatomyRegion(regionId);

      // Also check REGION_CONTENT_MAP for additional data
      const regionContent = getRegionContent(regionId);

      if (anatomyRegion) {
        // Use real content from the anatomy encyclopedia
        const anatomyContent = transformAnatomyRegion(
          anatomyRegion,
          regionContent,
          complexityLevel
        );
        setContent(anatomyContent);
      } else {
        // Try to find by partial match (e.g., "heart" matches "heart")
        const partialMatch = ANATOMY_REGIONS.find(
          r => r.id.includes(regionId) || regionId.includes(r.id)
        );

        if (partialMatch) {
          const anatomyContent = transformAnatomyRegion(
            partialMatch,
            regionContent,
            complexityLevel
          );
          setContent(anatomyContent);
        } else {
          // Fallback for unknown regions
          const fallbackContent = generateFallbackContent(regionId, regionName, complexityLevel);
          setContent(fallbackContent);
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load anatomy content'));
      setContent(null);
    } finally {
      setIsLoading(false);
    }
  }, [regionId, regionName, complexityLevel]);

  // Load on mount and when dependencies change
  useEffect(() => {
    loadContent();
  }, [loadContent]);

  return {
    content,
    isLoading,
    error,
    refetch: loadContent,
  };
}

export default useAnatomyContent;
