/**
 * Disease Database Index - Comprehensive Educational Content
 *
 * Organizes 100+ common medical conditions across major categories:
 * - Cardiovascular
 * - Respiratory
 * - Metabolic/Endocrine
 * - Gastrointestinal
 * - Neurological
 * - Mental Health
 * - Musculoskeletal
 * - Oncology
 * - Infectious Disease
 * - Renal
 * - Dermatologic
 * - Hematologic
 *
 * Each condition includes 5 complexity levels (8th grade through MD level)
 * with pathophysiology, risk factors, symptoms, diagnosis, treatment, and prognosis.
 */

// Cardiovascular Conditions
export * from './cardiovascular';

// Respiratory Conditions
export * from './respiratory';

// Metabolic/Endocrine Conditions
export * from './metabolic';

// Gastrointestinal Conditions
export * from './gastrointestinal';

// Neurological Conditions
export * from './neurological';

// Mental Health Conditions
export * from './mental-health';

// Musculoskeletal Conditions
export * from './musculoskeletal';

// Oncology Conditions
export * from './oncology';

// Infectious Disease Conditions
export * from './infectious';

// Renal Conditions
export * from './renal';

// Dermatologic Conditions
export * from './dermatology';

// Hematologic Conditions
export * from './hematologic';

// Genetic Conditions
export * from './genetic';

// Autoimmune Conditions
export * from './autoimmune';

// ENT Conditions
export * from './ent';

// Ophthalmology Conditions
export * from './ophthalmology';

// Pediatric Conditions
export * from './pediatric';

// Urology Conditions (selective exports to avoid name conflicts with infectious/renal)
export {
  bph,
  prostatitis,
  urinaryIncontinence,
  erectileDysfunction,
  hematuria,
  interstitialCystitis,
  UROLOGY_CONDITION_ENTRIES,
  getUrologyCondition,
  searchUrologyConditions,
  getUrologyByCategory,
  getUrologyConditionCount,
  getAllUrologyConditionIds,
  getUrologyByPresentation,
} from './urology';
export type { UrologyConditionEntry, UrologyConditionCategory } from './urology';

// Ophthalmic Conditions (database)
export * from './ophthalmic';

// Geriatric Conditions
export * from './geriatric';

// Pregnancy & Obstetric Conditions
export * from './pregnancy-obstetric';

/**
 * Condition Categories for Navigation
 */
export const conditionCategories = {
  cardiovascular: {
    name: 'Cardiovascular',
    description: 'Heart and blood vessel diseases',
    icon: 'heart',
    conditions: [
      'hypertension',
      'heart-failure',
      'coronary-artery-disease',
      'atrial-fibrillation',
      'deep-vein-thrombosis',
      'pulmonary-embolism',
      'peripheral-artery-disease',
      'aortic-aneurysm',
      'valvular-heart-disease',
      'cardiomyopathy',
    ],
  },
  respiratory: {
    name: 'Respiratory',
    description: 'Lung and airway diseases',
    icon: 'lungs',
    conditions: [
      'asthma',
      'copd',
      'pneumonia',
      'covid-19',
      'pulmonary-fibrosis',
      'lung-cancer',
      'tuberculosis',
      'sleep-apnea',
      'bronchitis',
      'pleural-effusion',
    ],
  },
  metabolic: {
    name: 'Metabolic & Endocrine',
    description: 'Hormone and metabolism disorders',
    icon: 'metabolism',
    conditions: [
      'type-2-diabetes',
      'type-1-diabetes',
      'hyperlipidemia',
      'obesity',
      'hypothyroidism',
      'hyperthyroidism',
      'metabolic-syndrome',
      'pcos',
      'adrenal-insufficiency',
      'cushings-syndrome',
    ],
  },
  gastrointestinal: {
    name: 'Gastrointestinal',
    description: 'Digestive system diseases',
    icon: 'stomach',
    conditions: [
      'gerd',
      'irritable-bowel-syndrome',
      'inflammatory-bowel-disease',
      'hepatitis',
      'cirrhosis',
      'peptic-ulcer-disease',
      'gallstones',
      'pancreatitis',
      'celiac-disease',
      'diverticulitis',
    ],
  },
  neurological: {
    name: 'Neurological',
    description: 'Brain and nervous system disorders',
    icon: 'brain',
    conditions: [
      'stroke',
      'migraine',
      'epilepsy',
      'parkinsons-disease',
      'alzheimers-disease',
      'multiple-sclerosis',
      'peripheral-neuropathy',
      'bells-palsy',
      'essential-tremor',
      'meningitis',
      'tension-headache',
    ],
  },
  mentalHealth: {
    name: 'Mental Health',
    description: 'Psychiatric and psychological conditions',
    icon: 'mental-health',
    conditions: [
      'major-depressive-disorder',
      'generalized-anxiety-disorder',
      'bipolar-disorder',
      'schizophrenia',
      'ptsd',
      'ocd',
      'panic-disorder',
      'adhd',
      'eating-disorders',
      'substance-use-disorders',
    ],
  },
  musculoskeletal: {
    name: 'Musculoskeletal',
    description: 'Bone, joint, and muscle disorders',
    icon: 'bone',
    conditions: [
      'osteoarthritis',
      'rheumatoid-arthritis',
      'osteoporosis',
      'low-back-pain',
      'gout',
      'fibromyalgia',
      'lupus',
      'ankylosing-spondylitis',
      'carpal-tunnel-syndrome',
      'rotator-cuff-injury',
      'plantar-fasciitis',
    ],
  },
  oncology: {
    name: 'Oncology',
    description: 'Cancer and malignant diseases',
    icon: 'cancer',
    conditions: [
      'breast-cancer',
      'lung-cancer',
      'colorectal-cancer',
      'prostate-cancer',
      'skin-cancer',
      'pancreatic-cancer',
      'leukemia',
      'lymphoma',
      'ovarian-cancer',
      'bladder-cancer',
    ],
  },
  infectious: {
    name: 'Infectious Disease',
    description: 'Bacterial, viral, and other infections',
    icon: 'virus',
    conditions: [
      'urinary-tract-infection',
      'cellulitis',
      'influenza',
      'hiv-aids',
      'hepatitis-b',
      'hepatitis-c',
      'lyme-disease',
      'sepsis',
      'endocarditis',
      'osteomyelitis',
    ],
  },
  renal: {
    name: 'Renal',
    description: 'Kidney diseases',
    icon: 'kidney',
    conditions: [
      'chronic-kidney-disease',
      'acute-kidney-injury',
      'nephrotic-syndrome',
      'kidney-stones',
      'polycystic-kidney-disease',
      'glomerulonephritis',
    ],
  },
  dermatology: {
    name: 'Dermatology',
    description: 'Skin conditions',
    icon: 'skin',
    conditions: [
      'psoriasis',
      'eczema',
      'acne',
      'rosacea',
      'shingles',
      'fungal-infections',
    ],
  },
  hematologic: {
    name: 'Hematologic',
    description: 'Blood disorders',
    icon: 'blood',
    conditions: [
      'iron-deficiency-anemia',
      'vitamin-b12-deficiency',
      'sickle-cell-disease',
      'thrombocytopenia',
      'hemophilia',
      'dvt-pe',
    ],
  },
  immunologic: {
    name: 'Immunologic',
    description: 'Immune system and allergic disorders',
    icon: 'shield',
    conditions: [
      'seasonal-allergies',
    ],
  },
};

/**
 * Get all conditions as a flat array
 */
export function getAllConditions(): string[] {
  return Object.values(conditionCategories).flatMap(cat => cat.conditions);
}

/**
 * Get condition category
 */
export function getConditionCategory(conditionId: string): string | undefined {
  for (const [categoryId, category] of Object.entries(conditionCategories)) {
    if (category.conditions.includes(conditionId)) {
      return categoryId;
    }
  }
  return undefined;
}
