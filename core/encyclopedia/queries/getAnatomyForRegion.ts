/**
 * Get Anatomy Content for Region
 *
 * Query anatomy content from core/content/ that relates to a specific
 * anatomical region. Uses FMA IDs, structure names, and keywords to find matches.
 */

import { AnatomyContent, AnatomicalRegion, BodySystemId, RegionalContentOptions } from './types';
import { ComplexityLevel } from '../../content/types';

// ============================================
// Content Path Mappings
// ============================================

/**
 * Maps body systems to content directory paths
 */
const SYSTEM_CONTENT_PATHS: Record<BodySystemId, string[]> = {
  cardiovascular: [
    'core/content/cardiovascular',
    'core/content/cardiology',
    'core/anatomy/cardiovascular',
  ],
  respiratory: [
    'core/content/respiratory',
    'core/content/pulmonology',
    'core/anatomy/respiratory',
  ],
  digestive: [
    'core/content/digestive',
    'core/content/gastroenterology',
    'core/anatomy/digestive',
  ],
  nervous: [
    'core/content/nervous',
    'core/content/neurology',
    'core/anatomy/nervous',
  ],
  musculoskeletal: [
    'core/content/musculoskeletal',
    'core/content/orthopedics',
    'core/anatomy/muscular',
    'core/anatomy/skeletal',
  ],
  endocrine: [
    'core/content/endocrine',
    'core/content/endocrinology',
    'core/anatomy/endocrine',
  ],
  integumentary: [
    'core/content/integumentary',
    'core/content/dermatology',
    'core/anatomy/integumentary',
  ],
  lymphatic: [
    'core/content/immune',
    'core/content/immunology',
    'core/anatomy/lymphatic',
  ],
  urinary: [
    'core/content/renal',
    'core/content/urology',
    'core/anatomy/urinary',
  ],
  reproductive: [
    'core/content/reproductive',
    'core/content/womens-health',
    'core/anatomy/reproductive',
  ],
  immune: [
    'core/content/immune',
    'core/content/immunology',
    'core/content/allergy-immunology',
  ],
};

// ============================================
// Region Store (In-Memory for now)
// ============================================

/**
 * In-memory region store
 * In production, this would load from core/encyclopedia/regions/
 */
const REGION_STORE: Map<string, AnatomicalRegion> = new Map();

/**
 * Initialize the region store with sample data
 * This would be loaded from files in production
 */
function initializeRegionStore(): void {
  if (REGION_STORE.size > 0) return;

  // Sample regions - these would be loaded from core/encyclopedia/regions/
  const sampleRegions: AnatomicalRegion[] = [
    {
      id: 'heart',
      name: 'Heart',
      latinName: 'Cor',
      fmaId: 'FMA:7088',
      system: 'cardiovascular',
      childRegionIds: ['left-ventricle', 'right-ventricle', 'left-atrium', 'right-atrium', 'coronary-arteries'],
      descriptions: {
        level1: 'The heart is a muscle that pumps blood through your body.',
        level2: 'The heart is a four-chambered muscular organ that pumps blood throughout the body.',
        level3: 'The heart is a hollow muscular organ with four chambers that generates the pressure gradient for circulation.',
        level4: 'The heart is a biomechanical pump with intrinsic automaticity and calcium-mediated excitation-contraction coupling.',
        level5: 'The heart integrates molecular, cellular, and organ-level physiology with clinical assessment parameters.',
      },
      keyStructures: ['myocardium', 'endocardium', 'pericardium', 'cardiac valves', 'conduction system'],
      relatedFmaIds: ['FMA:7088', 'FMA:7101', 'FMA:7111'],
      keywords: ['cardiac', 'heart', 'myocardium', 'cardiovascular', 'pump'],
    },
    {
      id: 'lungs',
      name: 'Lungs',
      latinName: 'Pulmones',
      fmaId: 'FMA:68877',
      system: 'respiratory',
      childRegionIds: ['right-lung', 'left-lung', 'bronchi', 'alveoli'],
      descriptions: {
        level1: 'The lungs are organs that help you breathe by taking in oxygen and releasing carbon dioxide.',
        level2: 'The lungs are paired respiratory organs where gas exchange between air and blood occurs.',
        level3: 'The lungs are paired organs composed of bronchi, bronchioles, and alveoli that facilitate pulmonary gas exchange.',
        level4: 'The lungs contain a complex branching airway system and extensive capillary network for efficient O2/CO2 exchange.',
        level5: 'The lungs integrate ventilation mechanics, perfusion, and diffusion for gas exchange with clinical assessment parameters.',
      },
      keyStructures: ['bronchi', 'bronchioles', 'alveoli', 'pulmonary vessels', 'pleura'],
      relatedFmaIds: ['FMA:68877', 'FMA:7195', 'FMA:7309'],
      keywords: ['pulmonary', 'lung', 'respiratory', 'breathing', 'alveoli'],
    },
    {
      id: 'brain',
      name: 'Brain',
      latinName: 'Encephalon',
      fmaId: 'FMA:50801',
      system: 'nervous',
      childRegionIds: ['cerebrum', 'cerebellum', 'brainstem', 'limbic-system'],
      descriptions: {
        level1: 'The brain is the control center of your body, responsible for thoughts, feelings, and movement.',
        level2: 'The brain is the central organ of the nervous system that controls body functions and enables consciousness.',
        level3: 'The brain is a complex organ composed of neurons and glial cells organized into functional regions.',
        level4: 'The brain integrates sensory input, motor output, and higher cognitive functions through neural networks.',
        level5: 'The brain demonstrates neuroplasticity and complex connectivity patterns relevant to neurological assessment.',
      },
      keyStructures: ['cerebral cortex', 'white matter', 'basal ganglia', 'thalamus', 'hypothalamus'],
      relatedFmaIds: ['FMA:50801', 'FMA:61817', 'FMA:62000'],
      keywords: ['cerebral', 'brain', 'neural', 'nervous', 'cognitive'],
    },
  ];

  sampleRegions.forEach((region) => REGION_STORE.set(region.id, region));
}

// ============================================
// Helper Functions
// ============================================

/**
 * Get region by ID
 */
export function getRegion(regionId: string): AnatomicalRegion | null {
  initializeRegionStore();
  return REGION_STORE.get(regionId) || null;
}

/**
 * Get all regions for a system
 */
export function getRegionsBySystem(system: BodySystemId): AnatomicalRegion[] {
  initializeRegionStore();
  return Array.from(REGION_STORE.values()).filter((r) => r.system === system);
}

/**
 * Find regions matching keywords
 */
export function findRegionsByKeywords(keywords: string[]): AnatomicalRegion[] {
  initializeRegionStore();
  const lowerKeywords = keywords.map((k) => k.toLowerCase());

  return Array.from(REGION_STORE.values()).filter((region) =>
    region.keywords.some((rk) =>
      lowerKeywords.some((k) => rk.toLowerCase().includes(k) || k.includes(rk.toLowerCase()))
    )
  );
}

/**
 * Get description for a complexity level
 */
function getDescriptionForLevel(
  descriptions: AnatomicalRegion['descriptions'],
  level: ComplexityLevel
): string {
  return descriptions[`level${level}` as keyof typeof descriptions] || descriptions.level3;
}

// ============================================
// Main Query Function
// ============================================

/**
 * Get anatomy content for a specific region
 *
 * Searches core/content/ for anatomy-related content matching the region.
 * Uses FMA IDs, structure names, and keywords to find matches.
 *
 * @param regionId - The ID of the anatomical region
 * @param options - Query options
 * @returns Array of anatomy content items
 */
export async function getAnatomyForRegion(
  regionId: string,
  options: RegionalContentOptions = {}
): Promise<AnatomyContent[]> {
  const {
    complexityLevel = 3,
    maxItemsPerType = 20,
    searchQuery,
  } = options;

  const region = getRegion(regionId);
  if (!region) {
    // Try to find by keyword matching
    const matchingRegions = findRegionsByKeywords([regionId]);
    if (matchingRegions.length === 0) {
      return [];
    }
    // Use the first matching region
    return getAnatomyForRegion(matchingRegions[0].id, options);
  }

  const results: AnatomyContent[] = [];

  // Get content paths for this region's system
  const contentPaths = SYSTEM_CONTENT_PATHS[region.system] || [];
  const allPaths = [...contentPaths];

  // Add paths for related systems
  if (region.relatedSystems) {
    region.relatedSystems.forEach((system) => {
      const paths = SYSTEM_CONTENT_PATHS[system];
      if (paths) allPaths.push(...paths);
    });
  }

  // Create anatomy content for the region itself
  const regionContent: AnatomyContent = {
    id: `anatomy-${region.id}`,
    name: region.name,
    type: 'organ',
    fmaId: region.fmaId,
    summary: getDescriptionForLevel(region.descriptions, complexityLevel),
    content: getDescriptionForLevel(region.descriptions, complexityLevel),
    location: `Part of the ${region.system} system`,
    function: region.keyStructures.length > 0
      ? `Contains key structures: ${region.keyStructures.join(', ')}`
      : 'Anatomical region',
    clinicalNotes: complexityLevel >= 4
      ? `Clinical examination focuses on assessment of ${region.keyStructures.slice(0, 3).join(', ')}`
      : undefined,
    relatedStructures: region.keyStructures,
    sourceId: region.id,
    sourcePath: `core/encyclopedia/regions/${region.id}`,
    complexityLevel,
  };

  results.push(regionContent);

  // Add content for key structures
  for (const structure of region.keyStructures.slice(0, maxItemsPerType - 1)) {
    const structureContent: AnatomyContent = {
      id: `anatomy-${region.id}-${structure.replace(/\s+/g, '-').toLowerCase()}`,
      name: structure,
      type: 'structure',
      summary: `${structure} is a component of the ${region.name}`,
      content: `${structure} is an important anatomical structure within the ${region.name}, part of the ${region.system} system.`,
      location: `Located within the ${region.name}`,
      function: `Contributes to the function of the ${region.name}`,
      relatedStructures: [region.name, ...region.keyStructures.filter((s) => s !== structure)],
      sourceId: `${region.id}-${structure}`,
      sourcePath: `core/content/${region.system}/anatomy`,
      complexityLevel,
    };

    // Apply search filter if provided
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (
        !structureContent.name.toLowerCase().includes(query) &&
        !structureContent.content.toLowerCase().includes(query)
      ) {
        continue;
      }
    }

    results.push(structureContent);
  }

  // Add child region anatomy
  for (const childId of region.childRegionIds.slice(0, 5)) {
    const childRegion = getRegion(childId);
    if (childRegion) {
      const childContent: AnatomyContent = {
        id: `anatomy-${childId}`,
        name: childRegion.name,
        type: 'structure',
        fmaId: childRegion.fmaId,
        summary: getDescriptionForLevel(childRegion.descriptions, complexityLevel),
        content: getDescriptionForLevel(childRegion.descriptions, complexityLevel),
        location: `Part of the ${region.name}`,
        function: childRegion.keyStructures.length > 0
          ? `Contains: ${childRegion.keyStructures.slice(0, 3).join(', ')}`
          : 'Anatomical subregion',
        relatedStructures: [region.name, ...childRegion.keyStructures.slice(0, 3)],
        sourceId: childId,
        sourcePath: `core/encyclopedia/regions/${childId}`,
        complexityLevel,
      };

      // Apply search filter if provided
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (
          !childContent.name.toLowerCase().includes(query) &&
          !childContent.content.toLowerCase().includes(query)
        ) {
          continue;
        }
      }

      results.push(childContent);
    }
  }

  return results.slice(0, maxItemsPerType);
}

/**
 * Get anatomy content by FMA ID
 */
export async function getAnatomyByFmaId(
  fmaId: string,
  options: RegionalContentOptions = {}
): Promise<AnatomyContent[]> {
  initializeRegionStore();

  // Find region with matching FMA ID
  const regions = Array.from(REGION_STORE.values());
  for (const region of regions) {
    if (region.fmaId === fmaId || region.relatedFmaIds?.includes(fmaId)) {
      return getAnatomyForRegion(region.id, options);
    }
  }

  return [];
}

/**
 * Search anatomy content across all regions
 */
export async function searchAnatomyContent(
  query: string,
  options: RegionalContentOptions = {}
): Promise<AnatomyContent[]> {
  initializeRegionStore();
  const results: AnatomyContent[] = [];
  const lowerQuery = query.toLowerCase();
  const regions = Array.from(REGION_STORE.values());

  for (const region of regions) {
    // Check if query matches region
    if (
      region.name.toLowerCase().includes(lowerQuery) ||
      region.keywords.some((k) => k.toLowerCase().includes(lowerQuery)) ||
      region.keyStructures.some((s) => s.toLowerCase().includes(lowerQuery))
    ) {
      const regionContent = await getAnatomyForRegion(region.id, {
        ...options,
        searchQuery: query,
      });
      results.push(...regionContent);
    }
  }

  return results.slice(0, options.maxItemsPerType || 20);
}
