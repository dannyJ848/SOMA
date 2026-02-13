/**
 * Get Physiology Content for Region
 *
 * Query physiology content from core/content/ and core/physiology/
 * that relates to a specific anatomical region.
 */

import { PhysiologyContent, AnatomicalRegion, BodySystemId, RegionalContentOptions } from './types';
import { ComplexityLevel } from '../../content/types';
import { getRegion, findRegionsByKeywords } from './getAnatomyForRegion';

// ============================================
// Physiology Content Sources
// ============================================

/**
 * Maps body systems to physiology content paths
 */
const PHYSIOLOGY_PATHS: Record<BodySystemId, string[]> = {
  cardiovascular: [
    'core/content/physiology/cardiovascular',
    'core/physiology/cardiac-cycle',
    'core/content/cardiology/physiology',
  ],
  respiratory: [
    'core/content/physiology/respiratory',
    'core/physiology/gas-exchange',
    'core/content/pulmonology/physiology',
  ],
  digestive: [
    'core/content/physiology/digestive',
    'core/physiology/metabolism',
    'core/content/gastroenterology/physiology',
  ],
  nervous: [
    'core/content/physiology/nervous',
    'core/physiology/neural-signaling',
    'core/content/neurology/physiology',
  ],
  musculoskeletal: [
    'core/content/physiology/musculoskeletal',
    'core/physiology/muscle-contraction',
  ],
  endocrine: [
    'core/content/physiology/endocrine',
    'core/physiology/hormone-signaling',
    'core/physiology/pathways',
  ],
  integumentary: [
    'core/content/physiology/integumentary',
  ],
  lymphatic: [
    'core/content/physiology/lymphatic',
    'core/content/immune/physiology',
  ],
  urinary: [
    'core/content/physiology/renal',
    'core/physiology/electrolytes',
    'core/content/renal/physiology',
  ],
  reproductive: [
    'core/content/physiology/reproductive',
    'core/content/reproductive/physiology',
  ],
  immune: [
    'core/content/physiology/immune',
    'core/content/immune/physiology',
  ],
};

// ============================================
// Region-Physiology Mappings
// ============================================

/**
 * Maps regions to their key physiological processes
 */
const REGION_PHYSIOLOGY_MAP: Record<string, {
  processes: string[];
  pathways: string[];
  mechanisms: string[];
}> = {
  heart: {
    processes: ['Cardiac cycle', 'Electrical conduction', 'Coronary circulation'],
    pathways: ['Excitation-contraction coupling', 'Frank-Starling mechanism', 'Autonomic regulation'],
    mechanisms: ['Calcium-induced calcium release', 'Action potential generation', 'Contractility regulation'],
  },
  lungs: {
    processes: ['Ventilation', 'Gas exchange', 'Respiratory mechanics'],
    pathways: ['Oxygen-hemoglobin dissociation', 'CO2 transport', 'Ventilation-perfusion matching'],
    mechanisms: ['Alveolar gas exchange', 'Surfactant function', 'Respiratory control'],
  },
  brain: {
    processes: ['Neural signaling', 'Synaptic transmission', 'Cerebral blood flow'],
    pathways: ['Neurotransmitter pathways', 'Sensory processing', 'Motor control'],
    mechanisms: ['Action potential propagation', 'Synaptic plasticity', 'Blood-brain barrier function'],
  },
  kidneys: {
    processes: ['Glomerular filtration', 'Tubular reabsorption', 'Urine concentration'],
    pathways: ['RAAS', 'ADH regulation', 'Acid-base balance'],
    mechanisms: ['Countercurrent multiplication', 'Sodium-potassium exchange', 'Bicarbonate handling'],
  },
  liver: {
    processes: ['Metabolism', 'Detoxification', 'Bile production'],
    pathways: ['Gluconeogenesis', 'Lipid metabolism', 'Drug metabolism'],
    mechanisms: ['Cytochrome P450', 'Conjugation reactions', 'First-pass metabolism'],
  },
  pancreas: {
    processes: ['Insulin secretion', 'Glucagon release', 'Digestive enzyme production'],
    pathways: ['Glucose homeostasis', 'Incretin effect', 'Exocrine secretion'],
    mechanisms: ['Beta cell glucose sensing', 'Enzyme activation', 'Hormonal feedback'],
  },
  stomach: {
    processes: ['Acid secretion', 'Protein digestion', 'Gastric motility'],
    pathways: ['Parietal cell activation', 'Pepsin activation', 'Gastric emptying'],
    mechanisms: ['H+/K+ ATPase pump', 'Mucus barrier', 'Intrinsic factor production'],
  },
  intestine: {
    processes: ['Nutrient absorption', 'Water balance', 'Peristalsis'],
    pathways: ['Carbohydrate absorption', 'Fat absorption', 'Enterohepatic circulation'],
    mechanisms: ['Brush border enzymes', 'Active transport', 'Villus function'],
  },
};

// ============================================
// Helper Functions
// ============================================

/**
 * Get physiology descriptions for complexity level
 */
function getPhysiologyDescription(
  processName: string,
  type: 'process' | 'pathway' | 'mechanism',
  level: ComplexityLevel,
  regionName: string
): string {
  const descriptions: Record<ComplexityLevel, (name: string, region: string) => string> = {
    1: (name, region) => `${name} is an important process that helps the ${region} work properly.`,
    2: (name, region) => `${name} is a physiological process in the ${region} that maintains normal function.`,
    3: (name, region) => `${name} is a key physiological ${type} in the ${region} involving coordinated cellular activities.`,
    4: (name, region) => `${name} represents a complex physiological ${type} in the ${region} with multiple regulatory components and feedback mechanisms.`,
    5: (name, region) => `${name} is a clinically significant physiological ${type} in the ${region} with measurable parameters and therapeutic targets.`,
  };

  return descriptions[level](processName, regionName);
}

/**
 * Get clinical notes for higher complexity levels
 */
function getClinicalNotes(
  processName: string,
  level: ComplexityLevel
): string | undefined {
  if (level < 4) return undefined;

  const clinicalNotes: Record<string, string> = {
    'Cardiac cycle': 'Assessed via ECG, echocardiography, and hemodynamic monitoring. Key parameters: EF, CO, SV.',
    'Electrical conduction': 'Evaluated with 12-lead ECG. Abnormalities include arrhythmias, blocks, and pre-excitation.',
    'Gas exchange': 'Monitored via ABG, pulse oximetry. V/Q mismatch indicates shunt or dead space.',
    'Ventilation': 'Measured by spirometry. Parameters include FEV1, FVC, and DLCO.',
    'Glomerular filtration': 'Assessed by GFR estimation (CKD-EPI, MDRD). Creatinine clearance as surrogate.',
    'Insulin secretion': 'Evaluated via C-peptide, glucose tolerance testing. Dysfunction leads to diabetes.',
    'Neural signaling': 'Assessed clinically via neurological exam. EEG for cortical activity.',
  };

  return clinicalNotes[processName];
}

// ============================================
// Main Query Function
// ============================================

/**
 * Get physiology content for a specific region
 *
 * @param regionId - The ID of the anatomical region
 * @param options - Query options
 * @returns Array of physiology content items
 */
export async function getPhysiologyForRegion(
  regionId: string,
  options: RegionalContentOptions = {}
): Promise<PhysiologyContent[]> {
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
    return getPhysiologyForRegion(matchingRegions[0].id, options);
  }

  const results: PhysiologyContent[] = [];

  // Get region-specific physiology
  const regionPhysiology = REGION_PHYSIOLOGY_MAP[regionId] || {
    processes: [`${region.name} function`],
    pathways: [`${region.name} regulation`],
    mechanisms: [`${region.name} homeostasis`],
  };

  // Add processes
  for (const process of regionPhysiology.processes) {
    const content: PhysiologyContent = {
      id: `physiology-${regionId}-${process.replace(/\s+/g, '-').toLowerCase()}`,
      name: process,
      type: 'process',
      summary: getPhysiologyDescription(process, 'process', complexityLevel, region.name),
      content: getPhysiologyDescription(process, 'process', complexityLevel, region.name),
      systems: [region.system, ...(region.relatedSystems || [])],
      keyPoints: [
        `Occurs in the ${region.name}`,
        `Part of ${region.system} system function`,
        `Essential for normal physiological function`,
      ],
      clinicalNotes: getClinicalNotes(process, complexityLevel),
      relatedPathways: regionPhysiology.pathways.slice(0, 2),
      sourceId: `${regionId}-${process}`,
      sourcePath: PHYSIOLOGY_PATHS[region.system]?.[0] || `core/content/physiology/${region.system}`,
      complexityLevel,
    };

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (
        !content.name.toLowerCase().includes(query) &&
        !content.content.toLowerCase().includes(query)
      ) {
        continue;
      }
    }

    results.push(content);
  }

  // Add pathways
  for (const pathway of regionPhysiology.pathways) {
    const content: PhysiologyContent = {
      id: `physiology-${regionId}-${pathway.replace(/\s+/g, '-').toLowerCase()}`,
      name: pathway,
      type: 'pathway',
      summary: getPhysiologyDescription(pathway, 'pathway', complexityLevel, region.name),
      content: getPhysiologyDescription(pathway, 'pathway', complexityLevel, region.name),
      systems: [region.system, ...(region.relatedSystems || [])],
      keyPoints: [
        `Regulatory pathway in the ${region.name}`,
        `Involves multiple signaling steps`,
        `Subject to feedback regulation`,
      ],
      clinicalNotes: getClinicalNotes(pathway, complexityLevel),
      relatedPathways: regionPhysiology.pathways.filter((p) => p !== pathway).slice(0, 2),
      sourceId: `${regionId}-${pathway}`,
      sourcePath: 'core/physiology/pathways',
      complexityLevel,
    };

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (
        !content.name.toLowerCase().includes(query) &&
        !content.content.toLowerCase().includes(query)
      ) {
        continue;
      }
    }

    results.push(content);
  }

  // Add mechanisms
  for (const mechanism of regionPhysiology.mechanisms) {
    const content: PhysiologyContent = {
      id: `physiology-${regionId}-${mechanism.replace(/\s+/g, '-').toLowerCase()}`,
      name: mechanism,
      type: 'mechanism',
      summary: getPhysiologyDescription(mechanism, 'mechanism', complexityLevel, region.name),
      content: getPhysiologyDescription(mechanism, 'mechanism', complexityLevel, region.name),
      systems: [region.system],
      keyPoints: [
        `Cellular/molecular mechanism in the ${region.name}`,
        `Fundamental to tissue function`,
        `May be therapeutic target`,
      ],
      clinicalNotes: getClinicalNotes(mechanism, complexityLevel),
      relatedPathways: regionPhysiology.pathways.slice(0, 2),
      sourceId: `${regionId}-${mechanism}`,
      sourcePath: `core/content/physiology/${region.system}`,
      complexityLevel,
    };

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (
        !content.name.toLowerCase().includes(query) &&
        !content.content.toLowerCase().includes(query)
      ) {
        continue;
      }
    }

    results.push(content);
  }

  return results.slice(0, maxItemsPerType);
}

/**
 * Get physiology content by body system
 */
export async function getPhysiologyBySystem(
  system: BodySystemId,
  options: RegionalContentOptions = {}
): Promise<PhysiologyContent[]> {
  const { maxItemsPerType = 20 } = options;
  const results: PhysiologyContent[] = [];

  // Get all regions for this system and aggregate physiology
  const systemProcesses = new Set<string>();

  for (const [regionId, physiology] of Object.entries(REGION_PHYSIOLOGY_MAP)) {
    const region = getRegion(regionId);
    if (region?.system === system) {
      physiology.processes.forEach((p) => systemProcesses.add(p));
      physiology.pathways.forEach((p) => systemProcesses.add(p));
    }
  }

  // Convert to content items
  const processArray = Array.from(systemProcesses);
  for (const process of processArray) {
    const content: PhysiologyContent = {
      id: `physiology-${system}-${process.replace(/\s+/g, '-').toLowerCase()}`,
      name: process,
      type: 'process',
      summary: `${process} is a key physiological process in the ${system} system.`,
      content: `${process} represents fundamental physiology of the ${system} system.`,
      systems: [system],
      keyPoints: [`Part of ${system} system physiology`],
      relatedPathways: [],
      sourceId: `${system}-${process}`,
      sourcePath: PHYSIOLOGY_PATHS[system]?.[0] || `core/content/physiology/${system}`,
      complexityLevel: options.complexityLevel || 3,
    };

    results.push(content);
    if (results.length >= maxItemsPerType) break;
  }

  return results;
}

/**
 * Search physiology content
 */
export async function searchPhysiologyContent(
  query: string,
  options: RegionalContentOptions = {}
): Promise<PhysiologyContent[]> {
  const results: PhysiologyContent[] = [];
  const lowerQuery = query.toLowerCase();

  for (const [regionId, physiology] of Object.entries(REGION_PHYSIOLOGY_MAP)) {
    const allTerms = [
      ...physiology.processes,
      ...physiology.pathways,
      ...physiology.mechanisms,
    ];

    if (allTerms.some((t) => t.toLowerCase().includes(lowerQuery))) {
      const regionContent = await getPhysiologyForRegion(regionId, {
        ...options,
        searchQuery: query,
      });
      results.push(...regionContent);
    }
  }

  return results.slice(0, options.maxItemsPerType || 20);
}
