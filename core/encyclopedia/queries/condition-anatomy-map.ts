/**
 * Condition-Anatomy Mapping
 *
 * Maps conditions to anatomical regions they affect.
 * Used by getConditionsAffectingRegion and getPathologyForRegion queries.
 */

import { ConditionAnatomyMapping, BodySystemId } from './types';

/**
 * Mapping of conditions to anatomical regions
 *
 * This map is used to find which conditions affect specific anatomical regions.
 * Regions use standardized IDs that correspond to AnatomicalRegion.id values.
 */
export const CONDITION_ANATOMY_MAP: ConditionAnatomyMapping[] = [
  // Cardiovascular Conditions
  {
    conditionId: 'coronary-artery-disease',
    conditionName: 'Coronary Artery Disease',
    primaryRegions: ['heart', 'coronary-arteries'],
    secondaryRegions: ['chest', 'thorax'],
    anatomicalEffects: 'Atherosclerotic plaque buildup in coronary arteries causing reduced blood flow to myocardium',
    systems: ['cardiovascular'],
  },
  {
    conditionId: 'heart-failure',
    conditionName: 'Heart Failure',
    primaryRegions: ['heart', 'left-ventricle', 'right-ventricle'],
    secondaryRegions: ['lungs', 'liver', 'lower-extremities'],
    anatomicalEffects: 'Ventricular dilation, wall thickening, valve regurgitation, pulmonary/systemic congestion',
    systems: ['cardiovascular', 'respiratory'],
  },
  {
    conditionId: 'atrial-fibrillation',
    conditionName: 'Atrial Fibrillation',
    primaryRegions: ['heart', 'atria', 'left-atrium'],
    secondaryRegions: ['pulmonary-veins'],
    anatomicalEffects: 'Atrial dilation, fibrotic changes in atrial wall, pulmonary vein remodeling',
    systems: ['cardiovascular'],
  },
  {
    conditionId: 'hypertension',
    conditionName: 'Hypertension',
    primaryRegions: ['arteries', 'heart', 'left-ventricle'],
    secondaryRegions: ['kidneys', 'brain', 'eyes', 'aorta'],
    anatomicalEffects: 'Left ventricular hypertrophy, arterial wall thickening, target organ damage',
    systems: ['cardiovascular', 'urinary', 'nervous'],
  },
  {
    conditionId: 'aortic-aneurysm',
    conditionName: 'Aortic Aneurysm',
    primaryRegions: ['aorta', 'abdominal-aorta', 'thoracic-aorta'],
    secondaryRegions: ['thorax', 'abdomen'],
    anatomicalEffects: 'Focal dilation of aortic wall, weakening of vessel wall layers',
    systems: ['cardiovascular'],
  },
  {
    conditionId: 'deep-vein-thrombosis',
    conditionName: 'Deep Vein Thrombosis',
    primaryRegions: ['deep-veins', 'lower-extremity-veins', 'femoral-vein', 'popliteal-vein'],
    secondaryRegions: ['lower-leg', 'thigh', 'pelvis'],
    anatomicalEffects: 'Venous thrombus formation, vessel wall inflammation, valve damage',
    systems: ['cardiovascular'],
  },
  {
    conditionId: 'peripheral-artery-disease',
    conditionName: 'Peripheral Artery Disease',
    primaryRegions: ['peripheral-arteries', 'femoral-artery', 'popliteal-artery', 'tibial-arteries'],
    secondaryRegions: ['lower-extremities', 'feet'],
    anatomicalEffects: 'Atherosclerotic narrowing of peripheral arteries, reduced distal perfusion',
    systems: ['cardiovascular'],
  },

  // Respiratory Conditions
  {
    conditionId: 'copd',
    conditionName: 'Chronic Obstructive Pulmonary Disease',
    primaryRegions: ['lungs', 'bronchi', 'bronchioles', 'alveoli'],
    secondaryRegions: ['diaphragm', 'chest-wall', 'thorax'],
    anatomicalEffects: 'Airway inflammation, mucus hypersecretion, alveolar destruction, hyperinflation',
    systems: ['respiratory'],
  },
  {
    conditionId: 'asthma',
    conditionName: 'Asthma',
    primaryRegions: ['bronchi', 'bronchioles', 'airways'],
    secondaryRegions: ['lungs', 'chest'],
    anatomicalEffects: 'Bronchial smooth muscle hypertrophy, airway wall thickening, mucus plugging',
    systems: ['respiratory', 'immune'],
  },
  {
    conditionId: 'pneumonia',
    conditionName: 'Pneumonia',
    primaryRegions: ['lungs', 'alveoli', 'lung-lobes'],
    secondaryRegions: ['bronchi', 'pleura', 'chest'],
    anatomicalEffects: 'Alveolar consolidation, inflammatory exudate, pleural effusion',
    systems: ['respiratory', 'immune'],
  },

  // Gastrointestinal Conditions
  {
    conditionId: 'gerd',
    conditionName: 'Gastroesophageal Reflux Disease',
    primaryRegions: ['esophagus', 'lower-esophageal-sphincter', 'gastroesophageal-junction'],
    secondaryRegions: ['stomach', 'chest'],
    anatomicalEffects: 'Esophageal mucosal erosion, lower esophageal sphincter dysfunction',
    systems: ['digestive'],
  },
  {
    conditionId: 'ibs',
    conditionName: 'Irritable Bowel Syndrome',
    primaryRegions: ['colon', 'large-intestine', 'small-intestine'],
    secondaryRegions: ['abdomen', 'rectum'],
    anatomicalEffects: 'Altered gut motility, visceral hypersensitivity, no structural changes',
    systems: ['digestive', 'nervous'],
  },
  {
    conditionId: 'inflammatory-bowel-disease',
    conditionName: 'Inflammatory Bowel Disease',
    primaryRegions: ['colon', 'small-intestine', 'ileum', 'rectum'],
    secondaryRegions: ['abdomen', 'perianal-region'],
    anatomicalEffects: 'Mucosal inflammation, ulceration, strictures, fistulae',
    systems: ['digestive', 'immune'],
  },

  // Neurological Conditions
  {
    conditionId: 'stroke',
    conditionName: 'Stroke',
    primaryRegions: ['brain', 'cerebral-arteries', 'cerebrum'],
    secondaryRegions: ['brainstem', 'cerebellum', 'carotid-arteries'],
    anatomicalEffects: 'Focal brain tissue infarction or hemorrhage, neuronal death',
    systems: ['nervous', 'cardiovascular'],
  },
  {
    conditionId: 'migraine',
    conditionName: 'Migraine',
    primaryRegions: ['brain', 'head', 'trigeminal-nerve'],
    secondaryRegions: ['neck', 'eyes'],
    anatomicalEffects: 'Trigeminovascular activation, cortical spreading depression',
    systems: ['nervous'],
  },
  {
    conditionId: 'tension-headache',
    conditionName: 'Tension Headache',
    primaryRegions: ['head', 'scalp-muscles', 'neck-muscles'],
    secondaryRegions: ['neck', 'shoulders'],
    anatomicalEffects: 'Pericranial muscle tension, sensitized pain pathways',
    systems: ['nervous', 'musculoskeletal'],
  },

  // Musculoskeletal Conditions
  {
    conditionId: 'osteoarthritis',
    conditionName: 'Osteoarthritis',
    primaryRegions: ['joints', 'knee', 'hip', 'hands', 'spine'],
    secondaryRegions: ['articular-cartilage', 'synovium', 'subchondral-bone'],
    anatomicalEffects: 'Cartilage degradation, osteophyte formation, joint space narrowing',
    systems: ['musculoskeletal'],
  },
  {
    conditionId: 'rheumatoid-arthritis',
    conditionName: 'Rheumatoid Arthritis',
    primaryRegions: ['joints', 'hands', 'wrists', 'feet', 'knees'],
    secondaryRegions: ['synovium', 'tendons', 'lungs'],
    anatomicalEffects: 'Synovial inflammation, pannus formation, bone erosion, joint deformity',
    systems: ['musculoskeletal', 'immune'],
  },
  {
    conditionId: 'osteoporosis',
    conditionName: 'Osteoporosis',
    primaryRegions: ['bones', 'spine', 'hip', 'wrist'],
    secondaryRegions: ['vertebrae', 'femur', 'radius'],
    anatomicalEffects: 'Reduced bone mineral density, trabecular thinning, cortical porosity',
    systems: ['musculoskeletal', 'endocrine'],
  },

  // Endocrine Conditions
  {
    conditionId: 'type2-diabetes',
    conditionName: 'Type 2 Diabetes Mellitus',
    primaryRegions: ['pancreas', 'islets-of-langerhans'],
    secondaryRegions: ['kidneys', 'eyes', 'peripheral-nerves', 'blood-vessels'],
    anatomicalEffects: 'Beta cell dysfunction, target organ microvascular disease',
    systems: ['endocrine', 'cardiovascular', 'nervous'],
  },
  {
    conditionId: 'hypothyroidism',
    conditionName: 'Hypothyroidism',
    primaryRegions: ['thyroid', 'thyroid-gland'],
    secondaryRegions: ['skin', 'heart', 'brain'],
    anatomicalEffects: 'Thyroid gland atrophy or enlargement, systemic metabolic effects',
    systems: ['endocrine'],
  },

  // Renal Conditions
  {
    conditionId: 'chronic-kidney-disease',
    conditionName: 'Chronic Kidney Disease',
    primaryRegions: ['kidneys', 'nephrons', 'glomeruli'],
    secondaryRegions: ['ureters', 'bladder'],
    anatomicalEffects: 'Nephron loss, glomerulosclerosis, tubulointerstitial fibrosis, renal atrophy',
    systems: ['urinary'],
  },
  {
    conditionId: 'kidney-stones',
    conditionName: 'Nephrolithiasis',
    primaryRegions: ['kidneys', 'ureters', 'renal-pelvis'],
    secondaryRegions: ['bladder', 'flank'],
    anatomicalEffects: 'Crystal deposition, ureteral obstruction, hydronephrosis',
    systems: ['urinary'],
  },
  {
    conditionId: 'uti',
    conditionName: 'Urinary Tract Infection',
    primaryRegions: ['bladder', 'urethra', 'ureters'],
    secondaryRegions: ['kidneys', 'pelvis'],
    anatomicalEffects: 'Mucosal inflammation, cystitis, possible pyelonephritis',
    systems: ['urinary', 'immune'],
  },

  // Skin Conditions
  {
    conditionId: 'psoriasis',
    conditionName: 'Psoriasis',
    primaryRegions: ['skin', 'epidermis'],
    secondaryRegions: ['scalp', 'elbows', 'knees', 'nails', 'joints'],
    anatomicalEffects: 'Epidermal hyperproliferation, parakeratosis, dermal inflammation',
    systems: ['integumentary', 'immune'],
  },

  // Mental Health (with neurological correlates)
  {
    conditionId: 'major-depression',
    conditionName: 'Major Depressive Disorder',
    primaryRegions: ['brain', 'prefrontal-cortex', 'limbic-system', 'hippocampus'],
    secondaryRegions: ['amygdala', 'hypothalamus'],
    anatomicalEffects: 'Reduced hippocampal volume, altered prefrontal-limbic connectivity',
    systems: ['nervous'],
  },
  {
    conditionId: 'anxiety',
    conditionName: 'Anxiety Disorders',
    primaryRegions: ['brain', 'amygdala', 'prefrontal-cortex'],
    secondaryRegions: ['hippocampus', 'hypothalamus', 'autonomic-pathways'],
    anatomicalEffects: 'Amygdala hyperactivity, altered prefrontal regulation',
    systems: ['nervous'],
  },
];

/**
 * Get conditions affecting a specific region
 */
export function getConditionsByRegion(regionId: string): ConditionAnatomyMapping[] {
  return CONDITION_ANATOMY_MAP.filter(
    (mapping) =>
      mapping.primaryRegions.includes(regionId) ||
      mapping.secondaryRegions.includes(regionId)
  );
}

/**
 * Get conditions by body system
 */
export function getConditionsBySystem(system: BodySystemId): ConditionAnatomyMapping[] {
  return CONDITION_ANATOMY_MAP.filter((mapping) => mapping.systems.includes(system));
}

/**
 * Get all regions affected by a condition
 */
export function getRegionsByCondition(conditionId: string): string[] {
  const mapping = CONDITION_ANATOMY_MAP.find((m) => m.conditionId === conditionId);
  if (!mapping) return [];
  return [...mapping.primaryRegions, ...mapping.secondaryRegions];
}

/**
 * Check if a condition affects a region
 */
export function conditionAffectsRegion(conditionId: string, regionId: string): boolean {
  const mapping = CONDITION_ANATOMY_MAP.find((m) => m.conditionId === conditionId);
  if (!mapping) return false;
  return (
    mapping.primaryRegions.includes(regionId) ||
    mapping.secondaryRegions.includes(regionId)
  );
}

/**
 * Get condition anatomical effects for a region
 */
export function getConditionEffectsInRegion(
  conditionId: string,
  regionId: string
): string | null {
  const mapping = CONDITION_ANATOMY_MAP.find((m) => m.conditionId === conditionId);
  if (!mapping) return null;
  if (
    !mapping.primaryRegions.includes(regionId) &&
    !mapping.secondaryRegions.includes(regionId)
  ) {
    return null;
  }
  return mapping.anatomicalEffects;
}
