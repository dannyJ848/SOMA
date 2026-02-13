/**
 * Get Histology Content for Region
 *
 * Query histology content from core/histology/ and core/content/
 * that relates to a specific anatomical region.
 */

import { HistologyContent, AnatomicalRegion, BodySystemId, RegionalContentOptions } from './types';
import { ComplexityLevel } from '../../content/types';
import { getRegion, findRegionsByKeywords } from './getAnatomyForRegion';

// ============================================
// Histology Content Sources
// ============================================

/**
 * Maps body systems to histology content
 */
const SYSTEM_HISTOLOGY: Record<BodySystemId, string[]> = {
  cardiovascular: [
    'Cardiac muscle',
    'Endocardium',
    'Arterial wall',
    'Venous wall',
    'Capillary endothelium',
  ],
  respiratory: [
    'Respiratory epithelium',
    'Alveolar epithelium',
    'Bronchial mucosa',
    'Pulmonary vessels',
  ],
  digestive: [
    'Gastric mucosa',
    'Intestinal epithelium',
    'Hepatocytes',
    'Pancreatic acini',
    'Esophageal epithelium',
  ],
  nervous: [
    'Neurons',
    'Glial cells',
    'Myelinated nerve fibers',
    'Cerebral cortex',
    'Peripheral nerve',
  ],
  musculoskeletal: [
    'Skeletal muscle',
    'Hyaline cartilage',
    'Compact bone',
    'Synovium',
    'Tendon',
  ],
  endocrine: [
    'Thyroid follicles',
    'Adrenal cortex',
    'Pancreatic islets',
    'Pituitary gland',
  ],
  integumentary: [
    'Epidermis',
    'Dermis',
    'Hair follicle',
    'Sebaceous glands',
    'Sweat glands',
  ],
  lymphatic: [
    'Lymph node',
    'Spleen',
    'Thymus',
    'Lymphoid tissue',
  ],
  urinary: [
    'Glomerulus',
    'Renal tubules',
    'Transitional epithelium',
    'Collecting duct',
  ],
  reproductive: [
    'Testicular tubules',
    'Ovarian follicles',
    'Uterine endometrium',
    'Mammary gland',
  ],
  immune: [
    'Lymphoid tissue',
    'Lymph node',
    'Spleen white pulp',
    'Thymic cortex',
  ],
};

// ============================================
// Region-Specific Histology
// ============================================

/**
 * Histology information by region
 */
const REGION_HISTOLOGY: Record<string, {
  tissues: Array<{
    name: string;
    type: string;
    features: string[];
    staining?: string;
  }>;
}> = {
  heart: {
    tissues: [
      {
        name: 'Cardiac muscle (myocardium)',
        type: 'muscle',
        features: [
          'Striated muscle fibers',
          'Intercalated discs',
          'Central nuclei',
          'Branching fibers',
          'Gap junctions',
        ],
        staining: 'H&E shows eosinophilic cytoplasm, central nuclei, intercalated discs as dark lines',
      },
      {
        name: 'Endocardium',
        type: 'epithelial',
        features: [
          'Simple squamous endothelium',
          'Subendothelial connective tissue',
          'Smooth muscle cells',
        ],
        staining: 'H&E shows thin endothelial layer overlying connective tissue',
      },
      {
        name: 'Epicardium/Pericardium',
        type: 'connective',
        features: [
          'Mesothelial layer',
          'Adipose tissue',
          'Coronary vessels',
        ],
        staining: 'H&E shows mesothelium and underlying adipose/connective tissue',
      },
    ],
  },
  lungs: {
    tissues: [
      {
        name: 'Respiratory epithelium',
        type: 'epithelial',
        features: [
          'Pseudostratified ciliated columnar',
          'Goblet cells',
          'Basal cells',
          'Cilia visible on surface',
        ],
        staining: 'H&E shows tall columnar cells with cilia, goblet cells with clear mucin',
      },
      {
        name: 'Alveolar epithelium',
        type: 'epithelial',
        features: [
          'Type I pneumocytes (gas exchange)',
          'Type II pneumocytes (surfactant)',
          'Thin blood-air barrier',
          'Alveolar macrophages',
        ],
        staining: 'H&E shows thin-walled alveoli with flat type I and cuboidal type II cells',
      },
      {
        name: 'Bronchiolar epithelium',
        type: 'epithelial',
        features: [
          'Simple columnar to cuboidal',
          'Clara cells',
          'No goblet cells',
        ],
        staining: 'H&E shows cuboidal epithelium without goblet cells',
      },
    ],
  },
  brain: {
    tissues: [
      {
        name: 'Cerebral cortex',
        type: 'nervous',
        features: [
          'Pyramidal neurons',
          'Six cortical layers',
          'Neuropil',
          'Glial cells',
        ],
        staining: 'H&E shows neurons with nucleolus, surrounding neuropil. Nissl stain highlights neurons',
      },
      {
        name: 'White matter',
        type: 'nervous',
        features: [
          'Myelinated axons',
          'Oligodendrocytes',
          'Astrocytes',
        ],
        staining: 'H&E appears lighter than gray matter. LFB stains myelin blue',
      },
      {
        name: 'Meninges',
        type: 'connective',
        features: [
          'Dura mater (dense)',
          'Arachnoid (avascular)',
          'Pia mater (vascular)',
        ],
        staining: 'H&E shows distinct layers with varying density of connective tissue',
      },
    ],
  },
  kidneys: {
    tissues: [
      {
        name: 'Glomerulus',
        type: 'vascular',
        features: [
          'Capillary loops',
          'Podocytes',
          'Mesangial cells',
          'Bowman capsule',
        ],
        staining: 'H&E shows tuft of capillaries within Bowman space. PAS highlights basement membrane',
      },
      {
        name: 'Proximal convoluted tubule',
        type: 'epithelial',
        features: [
          'Cuboidal epithelium',
          'Brush border (microvilli)',
          'Acidophilic cytoplasm',
          'Round central nucleus',
        ],
        staining: 'H&E shows tall cells with fuzzy luminal border and eosinophilic cytoplasm',
      },
      {
        name: 'Collecting duct',
        type: 'epithelial',
        features: [
          'Principal cells',
          'Intercalated cells',
          'Clear cell boundaries',
        ],
        staining: 'H&E shows pale cuboidal cells with distinct borders',
      },
    ],
  },
  liver: {
    tissues: [
      {
        name: 'Hepatocytes',
        type: 'epithelial',
        features: [
          'Large polygonal cells',
          'Central round nucleus',
          'Abundant cytoplasm',
          'Arranged in plates',
        ],
        staining: 'H&E shows cords of hepatocytes radiating from central vein. PAS highlights glycogen',
      },
      {
        name: 'Sinusoids',
        type: 'vascular',
        features: [
          'Fenestrated endothelium',
          'Kupffer cells',
          'Space of Disse',
        ],
        staining: 'H&E shows sinusoidal spaces between hepatocyte cords',
      },
      {
        name: 'Portal triad',
        type: 'connective',
        features: [
          'Portal vein branch',
          'Hepatic artery branch',
          'Bile duct',
        ],
        staining: 'H&E shows three structures in connective tissue at lobule periphery',
      },
    ],
  },
};

// ============================================
// Helper Functions
// ============================================

/**
 * Get histology description for complexity level
 */
function getHistologyDescription(
  tissue: { name: string; type: string; features: string[]; staining?: string },
  level: ComplexityLevel,
  regionName: string
): string {
  const descriptions: Record<ComplexityLevel, string> = {
    1: `${tissue.name} is a type of tissue found in the ${regionName}. It has a special structure that helps it do its job.`,
    2: `${tissue.name} is a ${tissue.type} tissue in the ${regionName}. Key features include ${tissue.features.slice(0, 2).join(' and ')}.`,
    3: `${tissue.name} is a ${tissue.type} tissue component of the ${regionName}. Histologically, it shows: ${tissue.features.join(', ')}.`,
    4: `${tissue.name} represents ${tissue.type} tissue in the ${regionName}. Identifying features: ${tissue.features.join(', ')}. ${tissue.staining || ''}`,
    5: `${tissue.name} in the ${regionName} is characterized by: ${tissue.features.join(', ')}. ${tissue.staining || ''} Clinical correlations include tissue-specific pathology and diagnostic implications.`,
  };

  return descriptions[level];
}

// ============================================
// Main Query Function
// ============================================

/**
 * Get histology content for a specific region
 *
 * @param regionId - The ID of the anatomical region
 * @param options - Query options
 * @returns Array of histology content items
 */
export async function getHistologyForRegion(
  regionId: string,
  options: RegionalContentOptions = {}
): Promise<HistologyContent[]> {
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
    return getHistologyForRegion(matchingRegions[0].id, options);
  }

  const results: HistologyContent[] = [];

  // Get region-specific histology
  const regionHistology = REGION_HISTOLOGY[regionId];

  if (regionHistology) {
    for (const tissue of regionHistology.tissues) {
      const content: HistologyContent = {
        id: `histology-${regionId}-${tissue.name.replace(/\s+/g, '-').toLowerCase()}`,
        name: tissue.name,
        tissueType: tissue.type,
        summary: `${tissue.name} is a ${tissue.type} tissue in the ${region.name}`,
        content: getHistologyDescription(tissue, complexityLevel, region.name),
        identifyingFeatures: tissue.features,
        stainingNotes: tissue.staining,
        imageIds: [], // Would be populated from histology image store
        sourceId: `${regionId}-${tissue.name}`,
        sourcePath: 'core/histology',
        complexityLevel,
      };

      // Apply search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (
          !content.name.toLowerCase().includes(query) &&
          !content.content.toLowerCase().includes(query) &&
          !content.tissueType.toLowerCase().includes(query) &&
          !content.identifyingFeatures.some((f) => f.toLowerCase().includes(query))
        ) {
          continue;
        }
      }

      results.push(content);
    }
  }

  // Add system-level histology if region-specific not available
  if (results.length === 0) {
    const systemHistology = SYSTEM_HISTOLOGY[region.system] || [];

    for (const tissueName of systemHistology.slice(0, maxItemsPerType)) {
      const content: HistologyContent = {
        id: `histology-${region.system}-${tissueName.replace(/\s+/g, '-').toLowerCase()}`,
        name: tissueName,
        tissueType: 'tissue',
        summary: `${tissueName} is found in the ${region.system} system`,
        content: `${tissueName} is a tissue type associated with the ${region.system} system and ${region.name}.`,
        identifyingFeatures: [`Part of ${region.system} system`, `Related to ${region.name}`],
        sourceId: `${region.system}-${tissueName}`,
        sourcePath: `core/histology/${region.system}`,
        complexityLevel,
      };

      // Apply search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (
          !content.name.toLowerCase().includes(query) &&
          !content.tissueType.toLowerCase().includes(query)
        ) {
          continue;
        }
      }

      results.push(content);
    }
  }

  return results.slice(0, maxItemsPerType);
}

/**
 * Get histology by tissue type
 */
export async function getHistologyByTissueType(
  tissueType: string,
  options: RegionalContentOptions = {}
): Promise<HistologyContent[]> {
  const results: HistologyContent[] = [];
  const lowerType = tissueType.toLowerCase();

  for (const [regionId, histology] of Object.entries(REGION_HISTOLOGY)) {
    for (const tissue of histology.tissues) {
      if (tissue.type.toLowerCase() === lowerType) {
        const region = getRegion(regionId);
        if (!region) continue;

        const content: HistologyContent = {
          id: `histology-${regionId}-${tissue.name.replace(/\s+/g, '-').toLowerCase()}`,
          name: tissue.name,
          tissueType: tissue.type,
          summary: `${tissue.name} in the ${region.name}`,
          content: getHistologyDescription(tissue, options.complexityLevel || 3, region.name),
          identifyingFeatures: tissue.features,
          stainingNotes: tissue.staining,
          sourceId: `${regionId}-${tissue.name}`,
          sourcePath: 'core/histology',
          complexityLevel: options.complexityLevel || 3,
        };

        results.push(content);
      }
    }
  }

  return results.slice(0, options.maxItemsPerType || 20);
}

/**
 * Search histology content
 */
export async function searchHistologyContent(
  query: string,
  options: RegionalContentOptions = {}
): Promise<HistologyContent[]> {
  const results: HistologyContent[] = [];
  const lowerQuery = query.toLowerCase();

  for (const regionId of Object.keys(REGION_HISTOLOGY)) {
    const regionContent = await getHistologyForRegion(regionId, {
      ...options,
      searchQuery: query,
    });
    results.push(...regionContent);
  }

  return results.slice(0, options.maxItemsPerType || 20);
}
