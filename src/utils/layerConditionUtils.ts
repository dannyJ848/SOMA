/**
 * Layer-Condition Utilities
 *
 * Functions for filtering and grouping medical conditions by anatomical layer.
 */

import type { PatientCondition, PatientSymptom, PatientMedication, LabResult } from '../AnatomyMainScreen/types';

export type AnatomicalLayer = 'skin' | 'muscle' | 'bone' | 'vessels' | 'nerves' | 'organs' | 'connective';

export const LAYER_INFO: Record<AnatomicalLayer, {
  name: string;
  description: string;
  color: string;
  icon: string;
  relatedSystems: string[];
}> = {
  skin: {
    name: 'Skin',
    description: 'Integumentary system - skin, hair, nails',
    color: '#FFB07C',
    icon: '🧴',
    relatedSystems: ['integumentary', 'immune']
  },
  muscle: {
    name: 'Muscle',
    description: 'Muscular system - skeletal, smooth, cardiac muscle',
    color: '#E74C3C',
    icon: '💪',
    relatedSystems: ['muscular', 'cardiovascular']
  },
  bone: {
    name: 'Bone',
    description: 'Skeletal system - bones, cartilage, joints',
    color: '#ECF0F1',
    icon: '🦴',
    relatedSystems: ['skeletal', 'musculoskeletal']
  },
  vessels: {
    name: 'Vessels',
    description: 'Cardiovascular and lymphatic vessels',
    color: '#3498DB',
    icon: '🩸',
    relatedSystems: ['cardiovascular', 'lymphatic']
  },
  nerves: {
    name: 'Nerves',
    description: 'Nervous system - brain, spinal cord, peripheral nerves',
    color: '#F1C40F',
    icon: '⚡',
    relatedSystems: ['nervous', 'central nervous', 'peripheral nervous']
  },
  organs: {
    name: 'Organs',
    description: 'Internal organs - heart, lungs, liver, kidneys, etc.',
    color: '#9B59B6',
    icon: '🫀',
    relatedSystems: ['digestive', 'respiratory', 'urinary', 'endocrine', 'reproductive']
  },
  connective: {
    name: 'Connective',
    description: 'Connective tissue - tendons, ligaments, fascia',
    color: '#1ABC9C',
    icon: '🔗',
    relatedSystems: ['musculoskeletal', 'integumentary']
  }
};

// Mapping of condition keywords to layers
const CONDITION_LAYER_KEYWORDS: Record<AnatomicalLayer, string[]> = {
  skin: ['dermat', 'skin', 'rash', 'eczema', 'psoriasis', 'melanoma', 'acne', 'wound', 'burn', 'ulcer', 'cellulitis'],
  muscle: ['myopathy', 'muscle', 'myositis', 'dystrophy', 'rhabdo', 'strain', 'tear', 'cramp', 'spasm', 'fibromyalgia'],
  bone: ['fracture', 'bone', 'osteo', 'arthritis', 'joint', 'vertebr', 'spinal', 'scoliosis', 'disc'],
  vessels: ['vascular', 'artery', 'vein', 'aneurysm', 'thrombosis', 'embolism', 'atherosclerosis', 'varicose', 'hemorrhage'],
  nerves: ['neuro', 'nerve', 'neuropathy', 'palsy', 'parkinson', 'alzheimer', 'seizure', 'epilepsy', 'migraine', 'sclerosis'],
  organs: ['hepat', 'liver', 'kidney', 'renal', 'cardiac', 'heart', 'lung', 'pulmonary', 'pancrea', 'gastric', 'intestin', 'colon'],
  connective: ['tendon', 'ligament', 'fascia', 'bursitis', 'tendinitis', 'sprain', 'lupus', 'scleroderma']
};

/**
 * Determine which layers a condition affects based on its name and properties
 */
export function getConditionLayers(condition: PatientCondition): AnatomicalLayer[] {
  const layers: AnatomicalLayer[] = [];
  const conditionText = `${condition.name} ${condition.affectedRegions?.join(' ') || ''} ${condition.affectedOrgans?.join(' ') || ''}`.toLowerCase();

  for (const [layer, keywords] of Object.entries(CONDITION_LAYER_KEYWORDS)) {
    if (keywords.some(keyword => conditionText.includes(keyword))) {
      layers.push(layer as AnatomicalLayer);
    }
  }

  // Default to organs if no specific layer matched
  if (layers.length === 0) {
    layers.push('organs');
  }

  return layers;
}

/**
 * Filter conditions by layer
 */
export function filterConditionsByLayer(
  conditions: PatientCondition[],
  layer: AnatomicalLayer | null
): PatientCondition[] {
  if (!layer) return conditions;
  return conditions.filter(c => getConditionLayers(c).includes(layer));
}

/**
 * Group conditions by layer
 */
export function groupConditionsByLayer(
  conditions: PatientCondition[]
): Record<AnatomicalLayer, PatientCondition[]> {
  const groups: Record<AnatomicalLayer, PatientCondition[]> = {
    skin: [],
    muscle: [],
    bone: [],
    vessels: [],
    nerves: [],
    organs: [],
    connective: []
  };

  for (const condition of conditions) {
    const layers = getConditionLayers(condition);
    for (const layer of layers) {
      groups[layer].push(condition);
    }
  }

  return groups;
}

/**
 * Get condition count per layer
 */
export function getLayerConditionCounts(
  conditions: PatientCondition[]
): Record<AnatomicalLayer, number> {
  const groups = groupConditionsByLayer(conditions);
  return {
    skin: groups.skin.length,
    muscle: groups.muscle.length,
    bone: groups.bone.length,
    vessels: groups.vessels.length,
    nerves: groups.nerves.length,
    organs: groups.organs.length,
    connective: groups.connective.length
  };
}

/**
 * Filter symptoms by layer (based on location)
 */
export function filterSymptomsByLayer(
  symptoms: PatientSymptom[],
  layer: AnatomicalLayer | null
): PatientSymptom[] {
  if (!layer) return symptoms;

  const layerKeywords = CONDITION_LAYER_KEYWORDS[layer];
  return symptoms.filter(s => {
    const locationText = s.location?.toLowerCase() || '';
    return layerKeywords.some(keyword => locationText.includes(keyword));
  });
}

/**
 * Filter medications by target layer
 */
export function filterMedicationsByLayer(
  medications: PatientMedication[],
  layer: AnatomicalLayer | null
): PatientMedication[] {
  if (!layer) return medications;

  const layerInfo = LAYER_INFO[layer];
  return medications.filter(m => {
    const targets = [...(m.targetOrgans || []), ...(m.targetSystems || [])].map(t => t.toLowerCase());
    return layerInfo.relatedSystems.some(system =>
      targets.some(target => target.includes(system))
    );
  });
}

/**
 * Filter labs by related layer
 */
export function filterLabsByLayer(
  labs: LabResult[],
  layer: AnatomicalLayer | null
): LabResult[] {
  if (!layer) return labs;

  const layerKeywords = CONDITION_LAYER_KEYWORDS[layer];
  return labs.filter(l => {
    const relatedText = `${l.testName} ${l.relatedOrgan || ''}`.toLowerCase();
    return layerKeywords.some(keyword => relatedText.includes(keyword));
  });
}

export default {
  LAYER_INFO,
  getConditionLayers,
  filterConditionsByLayer,
  groupConditionsByLayer,
  getLayerConditionCounts,
  filterSymptomsByLayer,
  filterMedicationsByLayer,
  filterLabsByLayer
};
