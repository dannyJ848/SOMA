/**
 * Get Pathology Content for Region
 *
 * Query pathology content from core/pathology/ and core/content/
 * that relates to a specific anatomical region.
 * Uses condition-anatomy-map.ts to find condition matches.
 */

import { PathologyContent, PathologyCategory, AnatomicalRegion, BodySystemId, RegionalContentOptions } from './types';
import { ComplexityLevel } from '../../content/types';
import { getRegion, findRegionsByKeywords } from './getAnatomyForRegion';
import { getConditionsByRegion, CONDITION_ANATOMY_MAP } from './condition-anatomy-map';

// ============================================
// Pathology Content Sources
// ============================================

/**
 * Maps body systems to pathology content paths
 */
const PATHOLOGY_PATHS: Record<BodySystemId, string[]> = {
  cardiovascular: [
    'core/pathology',
    'core/content/cardiology/pathology',
    'core/content/cardiovascular/conditions',
  ],
  respiratory: [
    'core/pathology',
    'core/content/pulmonology/pathology',
    'core/content/respiratory/conditions',
  ],
  digestive: [
    'core/pathology',
    'core/content/gastroenterology/conditions',
    'core/content/digestive/conditions',
  ],
  nervous: [
    'core/pathology',
    'core/content/neurology/conditions',
    'core/content/nervous/conditions',
  ],
  musculoskeletal: [
    'core/pathology',
    'core/content/orthopedics/conditions',
    'core/content/musculoskeletal/conditions',
  ],
  endocrine: [
    'core/pathology',
    'core/content/endocrinology/conditions',
    'core/content/endocrine/conditions',
  ],
  integumentary: [
    'core/pathology',
    'core/content/dermatology/conditions',
  ],
  lymphatic: [
    'core/pathology',
    'core/content/immune/conditions',
  ],
  urinary: [
    'core/pathology',
    'core/content/urology/conditions',
    'core/content/renal/conditions',
  ],
  reproductive: [
    'core/pathology',
    'core/content/reproductive/conditions',
    'core/content/womens-health/conditions',
  ],
  immune: [
    'core/pathology',
    'core/content/immune/conditions',
    'core/content/allergy-immunology',
  ],
};

// ============================================
// Region-Pathology Mappings
// ============================================

/**
 * Common pathological processes by region
 */
const REGION_PATHOLOGY_MAP: Record<string, {
  processes: { name: string; category: PathologyCategory; description: string }[];
}> = {
  heart: {
    processes: [
      {
        name: 'Myocardial ischemia',
        category: 'hemodynamic',
        description: 'Reduced blood flow to heart muscle causing oxygen deprivation',
      },
      {
        name: 'Cardiac hypertrophy',
        category: 'hemodynamic',
        description: 'Pathological thickening of heart muscle in response to increased workload',
      },
      {
        name: 'Valvular degeneration',
        category: 'degenerative',
        description: 'Progressive deterioration of heart valve structure and function',
      },
      {
        name: 'Myocarditis',
        category: 'inflammation',
        description: 'Inflammatory process affecting the myocardium',
      },
      {
        name: 'Fibrosis',
        category: 'degenerative',
        description: 'Replacement of functional myocardium with scar tissue',
      },
    ],
  },
  lungs: {
    processes: [
      {
        name: 'Airway inflammation',
        category: 'inflammation',
        description: 'Inflammatory response in bronchial airways causing narrowing',
      },
      {
        name: 'Alveolar damage',
        category: 'cell-injury',
        description: 'Injury to alveolar epithelium impairing gas exchange',
      },
      {
        name: 'Pulmonary fibrosis',
        category: 'degenerative',
        description: 'Progressive scarring of lung parenchyma',
      },
      {
        name: 'Consolidation',
        category: 'infectious',
        description: 'Alveolar spaces filled with inflammatory exudate',
      },
      {
        name: 'Emphysematous change',
        category: 'degenerative',
        description: 'Destruction of alveolar walls with air space enlargement',
      },
    ],
  },
  brain: {
    processes: [
      {
        name: 'Neuronal injury',
        category: 'cell-injury',
        description: 'Damage to neurons from ischemia, toxins, or trauma',
      },
      {
        name: 'Neuroinflammation',
        category: 'inflammation',
        description: 'Inflammatory response in neural tissue involving glial cells',
      },
      {
        name: 'Neurodegeneration',
        category: 'degenerative',
        description: 'Progressive loss of neuronal structure and function',
      },
      {
        name: 'Cerebral edema',
        category: 'hemodynamic',
        description: 'Accumulation of fluid in brain tissue',
      },
      {
        name: 'Demyelination',
        category: 'immunologic',
        description: 'Loss of myelin sheath surrounding nerve fibers',
      },
    ],
  },
  kidneys: {
    processes: [
      {
        name: 'Glomerular injury',
        category: 'immunologic',
        description: 'Damage to glomerular filtration barrier',
      },
      {
        name: 'Tubular necrosis',
        category: 'cell-injury',
        description: 'Death of tubular epithelial cells from ischemia or toxins',
      },
      {
        name: 'Interstitial nephritis',
        category: 'inflammation',
        description: 'Inflammatory infiltration of renal interstitium',
      },
      {
        name: 'Nephrosclerosis',
        category: 'hemodynamic',
        description: 'Vascular and glomerular sclerosis from hypertension',
      },
      {
        name: 'Tubulointerstitial fibrosis',
        category: 'degenerative',
        description: 'Scarring of kidney tubules and interstitium',
      },
    ],
  },
  liver: {
    processes: [
      {
        name: 'Hepatocellular injury',
        category: 'cell-injury',
        description: 'Damage to hepatocytes from toxins, viruses, or ischemia',
      },
      {
        name: 'Steatosis',
        category: 'nutritional',
        description: 'Abnormal accumulation of lipids in hepatocytes',
      },
      {
        name: 'Hepatic fibrosis',
        category: 'degenerative',
        description: 'Progressive scarring and architectural distortion',
      },
      {
        name: 'Cholestasis',
        category: 'hemodynamic',
        description: 'Impaired bile flow causing accumulation',
      },
      {
        name: 'Portal hypertension',
        category: 'hemodynamic',
        description: 'Increased pressure in portal venous system',
      },
    ],
  },
  joints: {
    processes: [
      {
        name: 'Synovitis',
        category: 'inflammation',
        description: 'Inflammation of synovial membrane',
      },
      {
        name: 'Cartilage degeneration',
        category: 'degenerative',
        description: 'Progressive loss of articular cartilage',
      },
      {
        name: 'Pannus formation',
        category: 'immunologic',
        description: 'Proliferative synovial tissue invasion',
      },
      {
        name: 'Crystal deposition',
        category: 'nutritional',
        description: 'Accumulation of urate or calcium crystals',
      },
      {
        name: 'Bone erosion',
        category: 'inflammation',
        description: 'Inflammatory destruction of periarticular bone',
      },
    ],
  },
  arteries: {
    processes: [
      {
        name: 'Atherosclerosis',
        category: 'degenerative',
        description: 'Lipid-laden plaque formation in arterial wall',
      },
      {
        name: 'Arterial inflammation',
        category: 'inflammation',
        description: 'Inflammatory vasculitis affecting arterial wall',
      },
      {
        name: 'Thrombosis',
        category: 'hemodynamic',
        description: 'Formation of blood clot within vessel lumen',
      },
      {
        name: 'Aneurysm formation',
        category: 'degenerative',
        description: 'Focal dilation from wall weakening',
      },
      {
        name: 'Intimal hyperplasia',
        category: 'cell-injury',
        description: 'Abnormal proliferation of intimal cells',
      },
    ],
  },
};

// ============================================
// Helper Functions
// ============================================

/**
 * Get pathology description for complexity level
 */
function getPathologyDescription(
  process: { name: string; category: PathologyCategory; description: string },
  level: ComplexityLevel,
  regionName: string
): string {
  const descriptions: Record<ComplexityLevel, string> = {
    1: `${process.name} is a problem that can happen in the ${regionName} when it gets damaged or sick.`,
    2: `${process.name} is a pathological process affecting the ${regionName}: ${process.description}.`,
    3: `${process.name} represents a ${process.category} pathological process in the ${regionName}. ${process.description}. This leads to structural and functional changes.`,
    4: `${process.name} is a ${process.category} pathological process affecting the ${regionName}. ${process.description}. Understanding the molecular and cellular mechanisms is essential for targeted therapy.`,
    5: `${process.name} is a clinically significant ${process.category} pathological process in the ${regionName}. ${process.description}. Key diagnostic markers and therapeutic targets are identified through understanding of pathophysiology.`,
  };

  return descriptions[level];
}

/**
 * Get diagnostic features for higher complexity levels
 */
function getDiagnosticFeatures(
  processName: string,
  category: PathologyCategory,
  level: ComplexityLevel
): string[] | undefined {
  if (level < 4) return undefined;

  const features: Record<PathologyCategory, string[]> = {
    'cell-injury': ['Elevated cell death markers', 'Morphological changes on histology', 'Functional impairment'],
    'inflammation': ['Elevated inflammatory markers (CRP, ESR)', 'Imaging findings', 'Clinical signs'],
    'hemodynamic': ['Altered hemodynamic parameters', 'Imaging abnormalities', 'End-organ effects'],
    'genetic': ['Genetic testing', 'Family history', 'Phenotypic features'],
    'neoplastic': ['Imaging findings', 'Tissue biopsy', 'Tumor markers'],
    'infectious': ['Cultures', 'Serologies', 'PCR testing'],
    'immunologic': ['Autoantibodies', 'Complement levels', 'Inflammatory markers'],
    'nutritional': ['Serum levels', 'Clinical manifestations', 'Dietary history'],
    'environmental': ['Exposure history', 'Toxicology screen', 'Occupational assessment'],
    'degenerative': ['Imaging changes', 'Functional decline', 'Histological features'],
  };

  return features[category];
}

// ============================================
// Main Query Function
// ============================================

/**
 * Get pathology content for a specific region
 *
 * Uses condition-anatomy-map.ts to find conditions affecting this region
 * and returns pathological processes relevant to the region.
 *
 * @param regionId - The ID of the anatomical region
 * @param options - Query options
 * @returns Array of pathology content items
 */
export async function getPathologyForRegion(
  regionId: string,
  options: RegionalContentOptions = {}
): Promise<PathologyContent[]> {
  const {
    complexityLevel = 3,
    maxItemsPerType = 15,
    searchQuery,
  } = options;

  const region = getRegion(regionId);
  if (!region) {
    // Try keyword matching
    const matchingRegions = findRegionsByKeywords([regionId]);
    if (matchingRegions.length === 0) {
      return [];
    }
    return getPathologyForRegion(matchingRegions[0].id, options);
  }

  const results: PathologyContent[] = [];

  // Get region-specific pathological processes
  const regionPathology = REGION_PATHOLOGY_MAP[regionId] || { processes: [] };

  // Add pathological processes
  for (const process of regionPathology.processes) {
    const content: PathologyContent = {
      id: `pathology-${regionId}-${process.name.replace(/\s+/g, '-').toLowerCase()}`,
      name: process.name,
      type: 'process',
      summary: getPathologyDescription(process, Math.min(complexityLevel, 2) as ComplexityLevel, region.name),
      content: getPathologyDescription(process, complexityLevel, region.name),
      category: process.category,
      regionalEffects: `Affects ${region.name} structure and function`,
      associatedConditions: getConditionsByRegion(regionId)
        .filter((c) => c.anatomicalEffects.toLowerCase().includes(process.name.toLowerCase().split(' ')[0]))
        .map((c) => c.conditionName)
        .slice(0, 3),
      diagnosticFeatures: getDiagnosticFeatures(process.name, process.category, complexityLevel),
      sourceId: `${regionId}-${process.name}`,
      sourcePath: PATHOLOGY_PATHS[region.system]?.[0] || 'core/pathology',
      complexityLevel,
    };

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (
        !content.name.toLowerCase().includes(query) &&
        !content.content.toLowerCase().includes(query) &&
        !content.category.toLowerCase().includes(query)
      ) {
        continue;
      }
    }

    results.push(content);
  }

  // Add condition-derived pathology
  const regionConditions = getConditionsByRegion(regionId);
  for (const condition of regionConditions.slice(0, 5)) {
    // Determine category from condition systems
    let category: PathologyCategory = 'degenerative';
    if (condition.anatomicalEffects.toLowerCase().includes('inflam')) {
      category = 'inflammation';
    } else if (condition.anatomicalEffects.toLowerCase().includes('ischemia') ||
               condition.anatomicalEffects.toLowerCase().includes('thrombo')) {
      category = 'hemodynamic';
    } else if (condition.anatomicalEffects.toLowerCase().includes('infect')) {
      category = 'infectious';
    }

    const content: PathologyContent = {
      id: `pathology-${regionId}-${condition.conditionId}`,
      name: `${condition.conditionName} pathology`,
      type: 'mechanism',
      summary: condition.anatomicalEffects,
      content: `${condition.conditionName} affects the ${region.name} through: ${condition.anatomicalEffects}`,
      category,
      regionalEffects: condition.anatomicalEffects,
      associatedConditions: [condition.conditionName],
      diagnosticFeatures: getDiagnosticFeatures(condition.conditionName, category, complexityLevel),
      sourceId: condition.conditionId,
      sourcePath: `core/content/conditions/${condition.conditionId}`,
      complexityLevel,
    };

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (
        !content.name.toLowerCase().includes(query) &&
        !content.content.toLowerCase().includes(query) &&
        !condition.conditionName.toLowerCase().includes(query)
      ) {
        continue;
      }
    }

    // Avoid duplicates
    if (!results.some((r) => r.id === content.id)) {
      results.push(content);
    }
  }

  return results.slice(0, maxItemsPerType);
}

/**
 * Get pathology by category
 */
export async function getPathologyByCategory(
  category: PathologyCategory,
  options: RegionalContentOptions = {}
): Promise<PathologyContent[]> {
  const results: PathologyContent[] = [];

  for (const [regionId, pathology] of Object.entries(REGION_PATHOLOGY_MAP)) {
    const matchingProcesses = pathology.processes.filter((p) => p.category === category);

    for (const process of matchingProcesses) {
      const region = getRegion(regionId);
      if (!region) continue;

      const content: PathologyContent = {
        id: `pathology-${regionId}-${process.name.replace(/\s+/g, '-').toLowerCase()}`,
        name: process.name,
        type: 'process',
        summary: process.description,
        content: `${process.name} in the ${region.name}: ${process.description}`,
        category: process.category,
        regionalEffects: `Affects ${region.name}`,
        associatedConditions: [],
        sourceId: `${regionId}-${process.name}`,
        sourcePath: 'core/pathology',
        complexityLevel: options.complexityLevel || 3,
      };

      results.push(content);
    }
  }

  return results.slice(0, options.maxItemsPerType || 20);
}

/**
 * Search pathology content
 */
export async function searchPathologyContent(
  query: string,
  options: RegionalContentOptions = {}
): Promise<PathologyContent[]> {
  const results: PathologyContent[] = [];
  const lowerQuery = query.toLowerCase();

  for (const regionId of Object.keys(REGION_PATHOLOGY_MAP)) {
    const regionContent = await getPathologyForRegion(regionId, {
      ...options,
      searchQuery: query,
    });
    results.push(...regionContent);
  }

  // Also search conditions
  for (const condition of CONDITION_ANATOMY_MAP) {
    if (
      condition.conditionName.toLowerCase().includes(lowerQuery) ||
      condition.anatomicalEffects.toLowerCase().includes(lowerQuery)
    ) {
      for (const regionId of condition.primaryRegions) {
        const regionContent = await getPathologyForRegion(regionId, {
          ...options,
          maxItemsPerType: 3,
        });
        results.push(...regionContent);
      }
    }
  }

  // Remove duplicates
  const unique = results.filter(
    (item, index, self) => self.findIndex((t) => t.id === item.id) === index
  );

  return unique.slice(0, options.maxItemsPerType || 20);
}
