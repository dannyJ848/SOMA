/**
 * Region to System Mapper
 *
 * Maps body regions to their associated organ systems, structures,
 * common conditions, medications, symptoms, and content.
 * Used by all context panels to filter and display region-specific information.
 */

// ============================================
// Types
// ============================================

export interface RegionMapping {
  id: string;
  name: string;
  latinName: string;

  // Anatomical systems present in this region
  bodySystems: string[];

  // Organs and structures
  organs: string[];
  structures: string[];

  // Layers available for exploration
  layers: LayerInfo[];

  // Medical context
  commonConditions: string[];
  medicationTargets: string[];
  commonSymptoms: string[];

  // Encyclopedia categories relevant to this region
  encyclopediaCategories: string[];

  // Histology available
  histologyTypes: string[];

  // Physiology topics
  physiologyTopics: string[];

  // Pathology topics
  pathologyTopics: string[];
}

export interface LayerInfo {
  id: string;
  name: string;
  depth: number;        // 0 = superficial, higher = deeper
  description: string;
  structures: string[]; // Specific structures in this layer
}

// ============================================
// Region Mappings Database
// ============================================

export const BODY_REGION_MAPPINGS: Record<string, RegionMapping> = {
  head: {
    id: 'head',
    name: 'Head',
    latinName: 'Caput',
    bodySystems: ['nervous', 'integumentary', 'skeletal', 'muscular', 'sensory'],
    organs: ['brain', 'eyes', 'ears', 'nose', 'sinuses', 'pituitary gland'],
    structures: ['skull', 'cranial nerves', 'meninges', 'cerebral cortex', 'cerebellum', 'brainstem'],
    layers: [
      { id: 'skin', name: 'Skin', depth: 0, description: 'Scalp and facial skin', structures: ['epidermis', 'dermis', 'hair follicles'] },
      { id: 'muscle', name: 'Muscle', depth: 1, description: 'Facial and mastication muscles', structures: ['frontalis', 'orbicularis oculi', 'masseter', 'temporalis'] },
      { id: 'bone', name: 'Bone', depth: 2, description: 'Cranial bones', structures: ['frontal bone', 'parietal bone', 'temporal bone', 'occipital bone'] },
      { id: 'meninges', name: 'Meninges', depth: 3, description: 'Protective brain membranes', structures: ['dura mater', 'arachnoid mater', 'pia mater'] },
      { id: 'brain', name: 'Brain', depth: 4, description: 'Central nervous system', structures: ['cerebral cortex', 'white matter', 'basal ganglia', 'ventricles'] },
    ],
    commonConditions: ['Headache', 'Migraine', 'Concussion', 'Stroke', 'Meningitis', 'Brain tumor', 'Sinusitis'],
    medicationTargets: ['cns', 'migraine', 'seizure', 'antipsychotic', 'antidepressant', 'anxiolytic'],
    commonSymptoms: ['headache', 'dizziness', 'vision-changes', 'confusion', 'facial-pain', 'tinnitus'],
    encyclopediaCategories: ['neurologic', 'psychiatric', 'ophthalmologic', 'otologic'],
    histologyTypes: ['cerebral-cortex', 'meninges', 'scalp-skin', 'cranial-bone'],
    physiologyTopics: ['neural-signaling', 'blood-brain-barrier', 'cerebrospinal-fluid', 'visual-processing', 'auditory-processing'],
    pathologyTopics: ['neurodegeneration', 'demyelination', 'cerebral-infarction', 'intracranial-hemorrhage'],
  },

  neck: {
    id: 'neck',
    name: 'Neck',
    latinName: 'Collum',
    bodySystems: ['respiratory', 'digestive', 'endocrine', 'vascular', 'nervous', 'muscular'],
    organs: ['thyroid', 'parathyroid', 'larynx', 'pharynx', 'esophagus (cervical)', 'trachea (cervical)'],
    structures: ['cervical vertebrae', 'carotid arteries', 'jugular veins', 'vagus nerve', 'brachial plexus'],
    layers: [
      { id: 'skin', name: 'Skin', depth: 0, description: 'Neck skin', structures: ['epidermis', 'dermis', 'platysma'] },
      { id: 'muscle', name: 'Muscle', depth: 1, description: 'Neck muscles', structures: ['sternocleidomastoid', 'trapezius', 'scalenes', 'longus colli'] },
      { id: 'vessels', name: 'Vessels', depth: 2, description: 'Major blood vessels', structures: ['carotid artery', 'jugular vein', 'vertebral artery'] },
      { id: 'glands', name: 'Glands', depth: 3, description: 'Endocrine glands', structures: ['thyroid', 'parathyroid', 'lymph nodes'] },
      { id: 'spine', name: 'Spine', depth: 4, description: 'Cervical spine', structures: ['cervical vertebrae', 'intervertebral discs', 'spinal cord'] },
    ],
    commonConditions: ['Thyroid disorders', 'Neck strain', 'Cervical radiculopathy', 'Torticollis', 'Lymphadenopathy'],
    medicationTargets: ['thyroid', 'muscle-relaxant', 'anti-inflammatory'],
    commonSymptoms: ['neck-pain', 'stiffness', 'swallowing-difficulty', 'hoarseness', 'neck-mass'],
    encyclopediaCategories: ['endocrine', 'respiratory', 'musculoskeletal'],
    histologyTypes: ['thyroid-follicles', 'laryngeal-epithelium', 'cervical-muscle'],
    physiologyTopics: ['thyroid-hormone-regulation', 'swallowing-mechanism', 'voice-production'],
    pathologyTopics: ['goiter', 'thyroiditis', 'cervical-disc-disease'],
  },

  chest: {
    id: 'chest',
    name: 'Chest',
    latinName: 'Thorax',
    bodySystems: ['cardiovascular', 'respiratory', 'skeletal', 'muscular'],
    organs: ['heart', 'lungs', 'esophagus (thoracic)', 'trachea', 'bronchi', 'thymus'],
    structures: ['ribs', 'sternum', 'thoracic vertebrae', 'diaphragm', 'pleura', 'pericardium', 'aorta'],
    layers: [
      { id: 'skin', name: 'Skin', depth: 0, description: 'Chest wall skin', structures: ['epidermis', 'dermis', 'breast tissue'] },
      { id: 'muscle', name: 'Muscle', depth: 1, description: 'Chest muscles', structures: ['pectoralis major', 'pectoralis minor', 'intercostals', 'serratus anterior'] },
      { id: 'ribs', name: 'Ribs', depth: 2, description: 'Rib cage', structures: ['ribs', 'sternum', 'costal cartilage'] },
      { id: 'pleura', name: 'Pleura', depth: 3, description: 'Lung membranes', structures: ['parietal pleura', 'visceral pleura', 'pleural space'] },
      { id: 'lungs', name: 'Lungs', depth: 4, description: 'Respiratory organs', structures: ['bronchi', 'bronchioles', 'alveoli', 'pulmonary vessels'] },
      { id: 'heart', name: 'Heart', depth: 5, description: 'Cardiac structures', structures: ['atria', 'ventricles', 'valves', 'coronary arteries', 'pericardium'] },
    ],
    commonConditions: ['Coronary artery disease', 'Heart failure', 'Pneumonia', 'Asthma', 'COPD', 'Pulmonary embolism', 'Arrhythmia'],
    medicationTargets: ['cardiac', 'respiratory', 'antihypertensive', 'anticoagulant', 'bronchodilator', 'statin'],
    commonSymptoms: ['chest-pain', 'shortness-of-breath', 'palpitations', 'cough', 'wheezing'],
    encyclopediaCategories: ['cardiovascular', 'respiratory', 'pulmonary'],
    histologyTypes: ['cardiac-muscle', 'lung-alveoli', 'bronchial-epithelium', 'pleura'],
    physiologyTopics: ['cardiac-cycle', 'gas-exchange', 'respiratory-mechanics', 'blood-pressure-regulation'],
    pathologyTopics: ['myocardial-infarction', 'pneumonia', 'pulmonary-fibrosis', 'cardiomyopathy'],
  },

  abdomen: {
    id: 'abdomen',
    name: 'Abdomen',
    latinName: 'Abdomen',
    bodySystems: ['digestive', 'urinary', 'vascular', 'muscular'],
    organs: ['stomach', 'liver', 'gallbladder', 'pancreas', 'spleen', 'small intestine', 'large intestine', 'kidneys', 'adrenal glands'],
    structures: ['abdominal aorta', 'inferior vena cava', 'peritoneum', 'mesentery', 'omentum'],
    layers: [
      { id: 'skin', name: 'Skin', depth: 0, description: 'Abdominal wall skin', structures: ['epidermis', 'dermis', 'subcutaneous fat'] },
      { id: 'muscle', name: 'Muscle', depth: 1, description: 'Abdominal muscles', structures: ['rectus abdominis', 'external oblique', 'internal oblique', 'transversus abdominis'] },
      { id: 'peritoneum', name: 'Peritoneum', depth: 2, description: 'Abdominal lining', structures: ['parietal peritoneum', 'visceral peritoneum', 'peritoneal cavity'] },
      { id: 'gi-tract', name: 'GI Tract', depth: 3, description: 'Digestive organs', structures: ['stomach', 'small intestine', 'large intestine'] },
      { id: 'solid-organs', name: 'Solid Organs', depth: 4, description: 'Solid abdominal organs', structures: ['liver', 'spleen', 'pancreas', 'kidneys'] },
      { id: 'vessels', name: 'Vessels', depth: 5, description: 'Major vessels', structures: ['abdominal aorta', 'inferior vena cava', 'portal vein'] },
    ],
    commonConditions: ['GERD', 'Peptic ulcer', 'Gallstones', 'Hepatitis', 'Pancreatitis', 'Appendicitis', 'Kidney stones', 'IBS', 'IBD'],
    medicationTargets: ['gi', 'hepatic', 'pancreatic', 'renal', 'antacid', 'antiemetic', 'laxative'],
    commonSymptoms: ['abdominal-pain', 'nausea', 'vomiting', 'diarrhea', 'constipation', 'bloating', 'jaundice'],
    encyclopediaCategories: ['gastroenterology', 'hepatology', 'nephrology', 'endocrine'],
    histologyTypes: ['gastric-mucosa', 'intestinal-villi', 'hepatocytes', 'renal-tubules', 'pancreatic-islets'],
    physiologyTopics: ['digestion', 'absorption', 'liver-metabolism', 'renal-filtration', 'glucose-regulation'],
    pathologyTopics: ['cirrhosis', 'inflammatory-bowel-disease', 'acute-pancreatitis', 'renal-failure'],
  },

  leftArm: {
    id: 'leftArm',
    name: 'Left Arm',
    latinName: 'Brachium Sinistrum',
    bodySystems: ['musculoskeletal', 'vascular', 'nervous', 'integumentary'],
    organs: [],
    structures: ['humerus', 'radius', 'ulna', 'biceps', 'triceps', 'brachial artery', 'median nerve', 'ulnar nerve', 'radial nerve'],
    layers: [
      { id: 'skin', name: 'Skin', depth: 0, description: 'Arm skin', structures: ['epidermis', 'dermis', 'subcutaneous tissue'] },
      { id: 'muscle', name: 'Muscle', depth: 1, description: 'Arm muscles', structures: ['biceps brachii', 'triceps brachii', 'brachialis', 'forearm muscles'] },
      { id: 'vessels', name: 'Vessels', depth: 2, description: 'Blood vessels', structures: ['brachial artery', 'cephalic vein', 'basilic vein'] },
      { id: 'nerves', name: 'Nerves', depth: 3, description: 'Peripheral nerves', structures: ['median nerve', 'ulnar nerve', 'radial nerve', 'musculocutaneous nerve'] },
      { id: 'bone', name: 'Bone', depth: 4, description: 'Arm bones', structures: ['humerus', 'radius', 'ulna', 'carpal bones'] },
    ],
    commonConditions: ['Fracture', 'Tennis elbow', 'Carpal tunnel', 'Tendinitis', 'Bursitis'],
    medicationTargets: ['anti-inflammatory', 'muscle-relaxant', 'pain'],
    commonSymptoms: ['arm-pain', 'weakness', 'numbness', 'tingling', 'swelling'],
    encyclopediaCategories: ['musculoskeletal', 'orthopedic', 'neurologic'],
    histologyTypes: ['skeletal-muscle', 'peripheral-nerve', 'cortical-bone', 'articular-cartilage'],
    physiologyTopics: ['muscle-contraction', 'nerve-conduction', 'bone-remodeling'],
    pathologyTopics: ['fracture-healing', 'tendinopathy', 'nerve-compression'],
  },

  rightArm: {
    id: 'rightArm',
    name: 'Right Arm',
    latinName: 'Brachium Dextrum',
    bodySystems: ['musculoskeletal', 'vascular', 'nervous', 'integumentary'],
    organs: [],
    structures: ['humerus', 'radius', 'ulna', 'biceps', 'triceps', 'brachial artery', 'median nerve', 'ulnar nerve', 'radial nerve'],
    layers: [
      { id: 'skin', name: 'Skin', depth: 0, description: 'Arm skin', structures: ['epidermis', 'dermis', 'subcutaneous tissue'] },
      { id: 'muscle', name: 'Muscle', depth: 1, description: 'Arm muscles', structures: ['biceps brachii', 'triceps brachii', 'brachialis', 'forearm muscles'] },
      { id: 'vessels', name: 'Vessels', depth: 2, description: 'Blood vessels', structures: ['brachial artery', 'cephalic vein', 'basilic vein'] },
      { id: 'nerves', name: 'Nerves', depth: 3, description: 'Peripheral nerves', structures: ['median nerve', 'ulnar nerve', 'radial nerve', 'musculocutaneous nerve'] },
      { id: 'bone', name: 'Bone', depth: 4, description: 'Arm bones', structures: ['humerus', 'radius', 'ulna', 'carpal bones'] },
    ],
    commonConditions: ['Fracture', 'Tennis elbow', 'Carpal tunnel', 'Tendinitis', 'Bursitis'],
    medicationTargets: ['anti-inflammatory', 'muscle-relaxant', 'pain'],
    commonSymptoms: ['arm-pain', 'weakness', 'numbness', 'tingling', 'swelling'],
    encyclopediaCategories: ['musculoskeletal', 'orthopedic', 'neurologic'],
    histologyTypes: ['skeletal-muscle', 'peripheral-nerve', 'cortical-bone', 'articular-cartilage'],
    physiologyTopics: ['muscle-contraction', 'nerve-conduction', 'bone-remodeling'],
    pathologyTopics: ['fracture-healing', 'tendinopathy', 'nerve-compression'],
  },

  leftLeg: {
    id: 'leftLeg',
    name: 'Left Leg',
    latinName: 'Crus Sinistrum',
    bodySystems: ['musculoskeletal', 'vascular', 'nervous', 'integumentary'],
    organs: [],
    structures: ['femur', 'tibia', 'fibula', 'patella', 'quadriceps', 'hamstrings', 'femoral artery', 'sciatic nerve'],
    layers: [
      { id: 'skin', name: 'Skin', depth: 0, description: 'Leg skin', structures: ['epidermis', 'dermis', 'subcutaneous tissue'] },
      { id: 'muscle', name: 'Muscle', depth: 1, description: 'Leg muscles', structures: ['quadriceps', 'hamstrings', 'gastrocnemius', 'tibialis anterior'] },
      { id: 'vessels', name: 'Vessels', depth: 2, description: 'Blood vessels', structures: ['femoral artery', 'femoral vein', 'great saphenous vein'] },
      { id: 'nerves', name: 'Nerves', depth: 3, description: 'Peripheral nerves', structures: ['sciatic nerve', 'femoral nerve', 'tibial nerve', 'peroneal nerve'] },
      { id: 'bone', name: 'Bone', depth: 4, description: 'Leg bones', structures: ['femur', 'tibia', 'fibula', 'patella', 'tarsal bones'] },
    ],
    commonConditions: ['Fracture', 'ACL tear', 'DVT', 'Peripheral neuropathy', 'Varicose veins', 'Sciatica'],
    medicationTargets: ['anticoagulant', 'anti-inflammatory', 'muscle-relaxant', 'pain'],
    commonSymptoms: ['leg-pain', 'swelling', 'weakness', 'numbness', 'cramping', 'claudication'],
    encyclopediaCategories: ['musculoskeletal', 'orthopedic', 'vascular', 'neurologic'],
    histologyTypes: ['skeletal-muscle', 'peripheral-nerve', 'cortical-bone', 'articular-cartilage', 'venous-wall'],
    physiologyTopics: ['gait-mechanics', 'venous-return', 'muscle-contraction', 'proprioception'],
    pathologyTopics: ['venous-thrombosis', 'peripheral-artery-disease', 'osteoarthritis'],
  },

  rightLeg: {
    id: 'rightLeg',
    name: 'Right Leg',
    latinName: 'Crus Dextrum',
    bodySystems: ['musculoskeletal', 'vascular', 'nervous', 'integumentary'],
    organs: [],
    structures: ['femur', 'tibia', 'fibula', 'patella', 'quadriceps', 'hamstrings', 'femoral artery', 'sciatic nerve'],
    layers: [
      { id: 'skin', name: 'Skin', depth: 0, description: 'Leg skin', structures: ['epidermis', 'dermis', 'subcutaneous tissue'] },
      { id: 'muscle', name: 'Muscle', depth: 1, description: 'Leg muscles', structures: ['quadriceps', 'hamstrings', 'gastrocnemius', 'tibialis anterior'] },
      { id: 'vessels', name: 'Vessels', depth: 2, description: 'Blood vessels', structures: ['femoral artery', 'femoral vein', 'great saphenous vein'] },
      { id: 'nerves', name: 'Nerves', depth: 3, description: 'Peripheral nerves', structures: ['sciatic nerve', 'femoral nerve', 'tibial nerve', 'peroneal nerve'] },
      { id: 'bone', name: 'Bone', depth: 4, description: 'Leg bones', structures: ['femur', 'tibia', 'fibula', 'patella', 'tarsal bones'] },
    ],
    commonConditions: ['Fracture', 'ACL tear', 'DVT', 'Peripheral neuropathy', 'Varicose veins', 'Sciatica'],
    medicationTargets: ['anticoagulant', 'anti-inflammatory', 'muscle-relaxant', 'pain'],
    commonSymptoms: ['leg-pain', 'swelling', 'weakness', 'numbness', 'cramping', 'claudication'],
    encyclopediaCategories: ['musculoskeletal', 'orthopedic', 'vascular', 'neurologic'],
    histologyTypes: ['skeletal-muscle', 'peripheral-nerve', 'cortical-bone', 'articular-cartilage', 'venous-wall'],
    physiologyTopics: ['gait-mechanics', 'venous-return', 'muscle-contraction', 'proprioception'],
    pathologyTopics: ['venous-thrombosis', 'peripheral-artery-disease', 'osteoarthritis'],
  },
};

// ============================================
// Helper Functions
// ============================================

/**
 * Get region mapping by ID
 */
export function getRegionMapping(regionId: string): RegionMapping | undefined {
  return BODY_REGION_MAPPINGS[regionId];
}

/**
 * Get all regions that include a specific body system
 */
export function getRegionsBySystem(system: string): RegionMapping[] {
  return Object.values(BODY_REGION_MAPPINGS).filter(
    region => region.bodySystems.includes(system)
  );
}

/**
 * Get all regions relevant to a medication target
 */
export function getRegionsByMedicationTarget(target: string): RegionMapping[] {
  return Object.values(BODY_REGION_MAPPINGS).filter(
    region => region.medicationTargets.includes(target)
  );
}

/**
 * Get all regions that commonly experience a symptom
 */
export function getRegionsBySymptom(symptom: string): RegionMapping[] {
  return Object.values(BODY_REGION_MAPPINGS).filter(
    region => region.commonSymptoms.includes(symptom)
  );
}

/**
 * Get encyclopedia categories relevant to a region
 */
export function getEncyclopediaCategoriesForRegion(regionId: string): string[] {
  const region = BODY_REGION_MAPPINGS[regionId];
  return region?.encyclopediaCategories ?? [];
}

/**
 * Get layers for a region sorted by depth
 */
export function getLayersForRegion(regionId: string): LayerInfo[] {
  const region = BODY_REGION_MAPPINGS[regionId];
  if (!region) return [];
  return [...region.layers].sort((a, b) => a.depth - b.depth);
}

/**
 * Get all unique body systems across all regions
 */
export function getAllBodySystems(): string[] {
  const systems = new Set<string>();
  Object.values(BODY_REGION_MAPPINGS).forEach(region => {
    region.bodySystems.forEach(system => systems.add(system));
  });
  return Array.from(systems).sort();
}

/**
 * Get all unique medication targets
 */
export function getAllMedicationTargets(): string[] {
  const targets = new Set<string>();
  Object.values(BODY_REGION_MAPPINGS).forEach(region => {
    region.medicationTargets.forEach(target => targets.add(target));
  });
  return Array.from(targets).sort();
}

// ============================================
// Region Display Helpers
// ============================================

/**
 * Get a friendly display name for a region
 */
export function getRegionDisplayName(regionId: string): string {
  const region = BODY_REGION_MAPPINGS[regionId];
  return region?.name ?? regionId;
}

/**
 * Get the Latin name for a region
 */
export function getRegionLatinName(regionId: string): string {
  const region = BODY_REGION_MAPPINGS[regionId];
  return region?.latinName ?? '';
}
