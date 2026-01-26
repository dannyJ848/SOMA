/**
 * Medical Terminology Mapping
 *
 * Comprehensive medical terminology database with synonyms, abbreviations,
 * lay terms, and mappings between medical and patient-friendly language.
 */

import type {
  MedicalTermMapping,
  AbbreviationExpansion,
  SearchCategory,
} from './types';

// ============================================
// Medical Abbreviations
// ============================================

/**
 * Common medical abbreviations and their expansions
 */
export const MEDICAL_ABBREVIATIONS: AbbreviationExpansion[] = [
  // Cardiovascular
  { abbr: 'MI', expansion: 'Myocardial Infarction', context: 'cardiology', alternatives: ['heart attack'] },
  { abbr: 'CHF', expansion: 'Congestive Heart Failure', context: 'cardiology' },
  { abbr: 'CAD', expansion: 'Coronary Artery Disease', context: 'cardiology' },
  { abbr: 'HTN', expansion: 'Hypertension', context: 'cardiology', alternatives: ['high blood pressure'] },
  { abbr: 'BP', expansion: 'Blood Pressure', context: 'cardiology' },
  { abbr: 'HR', expansion: 'Heart Rate', context: 'cardiology' },
  { abbr: 'EKG', expansion: 'Electrocardiogram', context: 'cardiology', alternatives: ['ECG'] },
  { abbr: 'ECG', expansion: 'Electrocardiogram', context: 'cardiology', alternatives: ['EKG'] },
  { abbr: 'AFib', expansion: 'Atrial Fibrillation', context: 'cardiology', alternatives: ['AF'] },
  { abbr: 'DVT', expansion: 'Deep Vein Thrombosis', context: 'cardiology' },
  { abbr: 'PE', expansion: 'Pulmonary Embolism', context: 'cardiology' },

  // Respiratory
  { abbr: 'COPD', expansion: 'Chronic Obstructive Pulmonary Disease', context: 'pulmonology' },
  { abbr: 'SOB', expansion: 'Shortness of Breath', context: 'pulmonology', alternatives: ['dyspnea'] },
  { abbr: 'O2', expansion: 'Oxygen', context: 'pulmonology' },
  { abbr: 'SpO2', expansion: 'Oxygen Saturation', context: 'pulmonology' },
  { abbr: 'PFT', expansion: 'Pulmonary Function Test', context: 'pulmonology' },
  { abbr: 'ABG', expansion: 'Arterial Blood Gas', context: 'pulmonology' },

  // Gastrointestinal
  { abbr: 'GI', expansion: 'Gastrointestinal', context: 'gastroenterology' },
  { abbr: 'GERD', expansion: 'Gastroesophageal Reflux Disease', context: 'gastroenterology', alternatives: ['acid reflux'] },
  { abbr: 'IBD', expansion: 'Inflammatory Bowel Disease', context: 'gastroenterology' },
  { abbr: 'IBS', expansion: 'Irritable Bowel Syndrome', context: 'gastroenterology' },
  { abbr: 'N/V', expansion: 'Nausea and Vomiting', context: 'gastroenterology' },
  { abbr: 'BM', expansion: 'Bowel Movement', context: 'gastroenterology' },

  // Neurologic
  { abbr: 'CVA', expansion: 'Cerebrovascular Accident', context: 'neurology', alternatives: ['stroke'] },
  { abbr: 'TIA', expansion: 'Transient Ischemic Attack', context: 'neurology', alternatives: ['mini-stroke'] },
  { abbr: 'MS', expansion: 'Multiple Sclerosis', context: 'neurology' },
  { abbr: 'ALS', expansion: 'Amyotrophic Lateral Sclerosis', context: 'neurology', alternatives: ['Lou Gehrig\'s disease'] },
  { abbr: 'LOC', expansion: 'Loss of Consciousness', context: 'neurology' },
  { abbr: 'HA', expansion: 'Headache', context: 'neurology' },

  // Endocrine
  { abbr: 'DM', expansion: 'Diabetes Mellitus', context: 'endocrinology', alternatives: ['diabetes'] },
  { abbr: 'T1DM', expansion: 'Type 1 Diabetes Mellitus', context: 'endocrinology' },
  { abbr: 'T2DM', expansion: 'Type 2 Diabetes Mellitus', context: 'endocrinology' },
  { abbr: 'HbA1c', expansion: 'Hemoglobin A1c', context: 'endocrinology', alternatives: ['A1c', 'glycated hemoglobin'] },
  { abbr: 'TSH', expansion: 'Thyroid Stimulating Hormone', context: 'endocrinology' },

  // Renal
  { abbr: 'CKD', expansion: 'Chronic Kidney Disease', context: 'nephrology' },
  { abbr: 'AKI', expansion: 'Acute Kidney Injury', context: 'nephrology' },
  { abbr: 'ESRD', expansion: 'End Stage Renal Disease', context: 'nephrology' },
  { abbr: 'UTI', expansion: 'Urinary Tract Infection', context: 'nephrology' },
  { abbr: 'BUN', expansion: 'Blood Urea Nitrogen', context: 'nephrology' },
  { abbr: 'GFR', expansion: 'Glomerular Filtration Rate', context: 'nephrology' },

  // Musculoskeletal
  { abbr: 'OA', expansion: 'Osteoarthritis', context: 'orthopedics' },
  { abbr: 'RA', expansion: 'Rheumatoid Arthritis', context: 'rheumatology' },
  { abbr: 'ROM', expansion: 'Range of Motion', context: 'orthopedics' },
  { abbr: 'LBP', expansion: 'Low Back Pain', context: 'orthopedics' },

  // Labs
  { abbr: 'CBC', expansion: 'Complete Blood Count', context: 'laboratory' },
  { abbr: 'BMP', expansion: 'Basic Metabolic Panel', context: 'laboratory' },
  { abbr: 'CMP', expansion: 'Comprehensive Metabolic Panel', context: 'laboratory' },
  { abbr: 'LFT', expansion: 'Liver Function Test', context: 'laboratory' },
  { abbr: 'PT', expansion: 'Prothrombin Time', context: 'laboratory' },
  { abbr: 'INR', expansion: 'International Normalized Ratio', context: 'laboratory' },
  { abbr: 'WBC', expansion: 'White Blood Cell', context: 'laboratory' },
  { abbr: 'RBC', expansion: 'Red Blood Cell', context: 'laboratory' },
  { abbr: 'Hgb', expansion: 'Hemoglobin', context: 'laboratory' },
  { abbr: 'Hct', expansion: 'Hematocrit', context: 'laboratory' },
  { abbr: 'Plt', expansion: 'Platelets', context: 'laboratory' },

  // Imaging
  { abbr: 'CT', expansion: 'Computed Tomography', context: 'radiology', alternatives: ['CAT scan'] },
  { abbr: 'MRI', expansion: 'Magnetic Resonance Imaging', context: 'radiology' },
  { abbr: 'US', expansion: 'Ultrasound', context: 'radiology' },
  { abbr: 'XR', expansion: 'X-Ray', context: 'radiology' },
  { abbr: 'CXR', expansion: 'Chest X-Ray', context: 'radiology' },

  // Medications
  { abbr: 'PO', expansion: 'Per Os (By Mouth)', context: 'pharmacy' },
  { abbr: 'IV', expansion: 'Intravenous', context: 'pharmacy' },
  { abbr: 'IM', expansion: 'Intramuscular', context: 'pharmacy' },
  { abbr: 'SC', expansion: 'Subcutaneous', context: 'pharmacy', alternatives: ['SQ', 'SubQ'] },
  { abbr: 'PRN', expansion: 'Pro Re Nata (As Needed)', context: 'pharmacy' },
  { abbr: 'BID', expansion: 'Twice Daily', context: 'pharmacy' },
  { abbr: 'TID', expansion: 'Three Times Daily', context: 'pharmacy' },
  { abbr: 'QID', expansion: 'Four Times Daily', context: 'pharmacy' },
  { abbr: 'QD', expansion: 'Once Daily', context: 'pharmacy' },
  { abbr: 'QHS', expansion: 'At Bedtime', context: 'pharmacy' },
  { abbr: 'AC', expansion: 'Before Meals', context: 'pharmacy' },
  { abbr: 'PC', expansion: 'After Meals', context: 'pharmacy' },
  { abbr: 'NSAID', expansion: 'Non-Steroidal Anti-Inflammatory Drug', context: 'pharmacy' },
  { abbr: 'ACE', expansion: 'Angiotensin Converting Enzyme', context: 'pharmacy' },
  { abbr: 'ARB', expansion: 'Angiotensin Receptor Blocker', context: 'pharmacy' },
  { abbr: 'PPI', expansion: 'Proton Pump Inhibitor', context: 'pharmacy' },
  { abbr: 'SSRI', expansion: 'Selective Serotonin Reuptake Inhibitor', context: 'pharmacy' },

  // General
  { abbr: 'Dx', expansion: 'Diagnosis', context: 'general' },
  { abbr: 'Tx', expansion: 'Treatment', context: 'general' },
  { abbr: 'Rx', expansion: 'Prescription', context: 'general' },
  { abbr: 'Hx', expansion: 'History', context: 'general' },
  { abbr: 'Sx', expansion: 'Symptoms', context: 'general' },
  { abbr: 'Fx', expansion: 'Fracture', context: 'general' },
  { abbr: 'Px', expansion: 'Prognosis', context: 'general' },
  { abbr: 'PMH', expansion: 'Past Medical History', context: 'general' },
  { abbr: 'FH', expansion: 'Family History', context: 'general' },
  { abbr: 'SH', expansion: 'Social History', context: 'general' },
  { abbr: 'ROS', expansion: 'Review of Systems', context: 'general' },
  { abbr: 'VS', expansion: 'Vital Signs', context: 'general' },
  { abbr: 'WNL', expansion: 'Within Normal Limits', context: 'general' },
  { abbr: 'NAD', expansion: 'No Acute Distress', context: 'general' },
  { abbr: 'ED', expansion: 'Emergency Department', context: 'general' },
  { abbr: 'ICU', expansion: 'Intensive Care Unit', context: 'general' },
  { abbr: 'OR', expansion: 'Operating Room', context: 'general' },
];

// ============================================
// Medical Term Mappings
// ============================================

/**
 * Comprehensive medical term mappings with synonyms and lay terms
 */
export const MEDICAL_TERM_MAPPINGS: MedicalTermMapping[] = [
  // Anatomy
  {
    term: 'heart',
    synonyms: ['cardiac muscle', 'myocardium', 'cor'],
    abbreviations: [],
    relatedTerms: ['cardiovascular', 'cardiac', 'coronary', 'atrium', 'ventricle'],
    layTerms: ['heart', 'ticker'],
    category: 'anatomy',
  },
  {
    term: 'brain',
    synonyms: ['cerebrum', 'encephalon', 'cerebral'],
    abbreviations: ['CNS'],
    relatedTerms: ['neurologic', 'cerebral', 'cortex', 'neuron'],
    layTerms: ['brain'],
    category: 'anatomy',
  },
  {
    term: 'lung',
    synonyms: ['pulmonary', 'pulmo'],
    abbreviations: [],
    relatedTerms: ['respiratory', 'bronchi', 'alveoli', 'breathing'],
    layTerms: ['lung', 'lungs'],
    category: 'anatomy',
  },
  {
    term: 'liver',
    synonyms: ['hepatic', 'hepar'],
    abbreviations: [],
    relatedTerms: ['hepatology', 'bile', 'hepatocyte', 'cirrhosis'],
    layTerms: ['liver'],
    category: 'anatomy',
  },
  {
    term: 'kidney',
    synonyms: ['renal', 'nephric', 'ren'],
    abbreviations: [],
    relatedTerms: ['nephrology', 'urine', 'nephron', 'glomerular'],
    layTerms: ['kidney', 'kidneys'],
    category: 'anatomy',
  },
  {
    term: 'stomach',
    synonyms: ['gastric', 'ventriculus'],
    abbreviations: ['GI'],
    relatedTerms: ['digestive', 'gastroenterology', 'pyloric', 'fundus'],
    layTerms: ['stomach', 'tummy', 'belly'],
    category: 'anatomy',
  },
  {
    term: 'intestine',
    synonyms: ['bowel', 'gut', 'intestinum'],
    abbreviations: ['GI'],
    relatedTerms: ['digestive', 'colon', 'duodenum', 'jejunum', 'ileum'],
    layTerms: ['intestine', 'gut', 'bowels'],
    category: 'anatomy',
  },

  // Conditions
  {
    term: 'myocardial infarction',
    synonyms: ['heart attack', 'coronary thrombosis', 'coronary occlusion'],
    abbreviations: ['MI', 'STEMI', 'NSTEMI'],
    relatedTerms: ['chest pain', 'cardiac arrest', 'angina', 'troponin'],
    layTerms: ['heart attack'],
    category: 'conditions',
  },
  {
    term: 'hypertension',
    synonyms: ['high blood pressure', 'elevated blood pressure', 'arterial hypertension'],
    abbreviations: ['HTN', 'BP'],
    relatedTerms: ['systolic', 'diastolic', 'antihypertensive', 'blood pressure'],
    layTerms: ['high blood pressure'],
    category: 'conditions',
  },
  {
    term: 'diabetes mellitus',
    synonyms: ['diabetes', 'sugar diabetes'],
    abbreviations: ['DM', 'T1DM', 'T2DM'],
    relatedTerms: ['blood sugar', 'glucose', 'insulin', 'hyperglycemia', 'A1c'],
    layTerms: ['diabetes', 'sugar disease'],
    category: 'conditions',
  },
  {
    term: 'cerebrovascular accident',
    synonyms: ['stroke', 'brain attack', 'apoplexy'],
    abbreviations: ['CVA'],
    relatedTerms: ['paralysis', 'hemiplegia', 'aphasia', 'thrombolysis'],
    layTerms: ['stroke', 'brain attack'],
    category: 'conditions',
  },
  {
    term: 'pneumonia',
    synonyms: ['lung infection', 'pulmonary infection', 'chest infection'],
    abbreviations: ['PNA', 'CAP', 'HAP'],
    relatedTerms: ['cough', 'fever', 'consolidation', 'infiltrate'],
    layTerms: ['pneumonia', 'lung infection'],
    category: 'conditions',
  },
  {
    term: 'fracture',
    synonyms: ['broken bone', 'bone fracture'],
    abbreviations: ['Fx'],
    relatedTerms: ['orthopedic', 'cast', 'reduction', 'healing'],
    layTerms: ['broken bone', 'fracture'],
    category: 'conditions',
  },
  {
    term: 'inflammation',
    synonyms: ['swelling', 'inflammatory response'],
    abbreviations: [],
    relatedTerms: ['redness', 'pain', 'heat', 'edema', 'cytokines'],
    layTerms: ['inflammation', 'swelling'],
    category: 'conditions',
  },

  // Symptoms
  {
    term: 'dyspnea',
    synonyms: ['breathlessness', 'respiratory distress', 'air hunger'],
    abbreviations: ['SOB'],
    relatedTerms: ['breathing', 'respiratory', 'oxygen', 'wheeze'],
    layTerms: ['shortness of breath', 'difficulty breathing', 'out of breath'],
    category: 'symptoms',
  },
  {
    term: 'cephalgia',
    synonyms: ['headache', 'head pain'],
    abbreviations: ['HA'],
    relatedTerms: ['migraine', 'tension', 'throbbing', 'neurologic'],
    layTerms: ['headache', 'head pain'],
    category: 'symptoms',
  },
  {
    term: 'nausea',
    synonyms: ['queasiness', 'feeling sick'],
    abbreviations: ['N/V'],
    relatedTerms: ['vomiting', 'emesis', 'antiemetic', 'gastric'],
    layTerms: ['nausea', 'feeling sick', 'queasy'],
    category: 'symptoms',
  },
  {
    term: 'edema',
    synonyms: ['swelling', 'fluid retention', 'oedema'],
    abbreviations: [],
    relatedTerms: ['pitting', 'peripheral', 'pulmonary', 'diuretic'],
    layTerms: ['swelling', 'puffiness', 'fluid retention'],
    category: 'symptoms',
  },
  {
    term: 'pyrexia',
    synonyms: ['fever', 'febrile', 'elevated temperature'],
    abbreviations: [],
    relatedTerms: ['temperature', 'chills', 'infection', 'antipyretic'],
    layTerms: ['fever', 'high temperature'],
    category: 'symptoms',
  },
  {
    term: 'fatigue',
    synonyms: ['tiredness', 'exhaustion', 'lethargy', 'asthenia'],
    abbreviations: [],
    relatedTerms: ['weakness', 'malaise', 'energy', 'sleep'],
    layTerms: ['tiredness', 'fatigue', 'exhaustion', 'worn out'],
    category: 'symptoms',
  },

  // Medications
  {
    term: 'acetaminophen',
    synonyms: ['paracetamol', 'APAP'],
    abbreviations: ['APAP'],
    relatedTerms: ['analgesic', 'antipyretic', 'pain reliever', 'fever reducer'],
    layTerms: ['Tylenol', 'paracetamol'],
    category: 'medications',
  },
  {
    term: 'ibuprofen',
    synonyms: ['Advil', 'Motrin'],
    abbreviations: ['NSAID'],
    relatedTerms: ['anti-inflammatory', 'analgesic', 'antipyretic', 'pain relief'],
    layTerms: ['Advil', 'Motrin', 'ibuprofen'],
    category: 'medications',
  },
  {
    term: 'metformin',
    synonyms: ['Glucophage', 'biguanide'],
    abbreviations: [],
    relatedTerms: ['diabetes', 'blood sugar', 'glucose', 'insulin sensitizer'],
    layTerms: ['metformin', 'Glucophage'],
    category: 'medications',
  },
  {
    term: 'lisinopril',
    synonyms: ['Prinivil', 'Zestril'],
    abbreviations: ['ACE', 'ACEI'],
    relatedTerms: ['blood pressure', 'hypertension', 'ACE inhibitor', 'heart'],
    layTerms: ['lisinopril', 'blood pressure medication'],
    category: 'medications',
  },
  {
    term: 'atorvastatin',
    synonyms: ['Lipitor', 'statin'],
    abbreviations: [],
    relatedTerms: ['cholesterol', 'lipid', 'cardiovascular', 'LDL'],
    layTerms: ['Lipitor', 'cholesterol medication'],
    category: 'medications',
  },

  // Lab Tests
  {
    term: 'complete blood count',
    synonyms: ['blood count', 'full blood count'],
    abbreviations: ['CBC', 'FBC'],
    relatedTerms: ['hemoglobin', 'hematocrit', 'WBC', 'platelets', 'anemia'],
    layTerms: ['blood count', 'blood test'],
    category: 'lab-tests',
  },
  {
    term: 'basic metabolic panel',
    synonyms: ['metabolic panel', 'chem 7'],
    abbreviations: ['BMP', 'Chem7'],
    relatedTerms: ['electrolytes', 'kidney function', 'glucose', 'sodium', 'potassium'],
    layTerms: ['blood chemistry', 'metabolic panel'],
    category: 'lab-tests',
  },
  {
    term: 'hemoglobin A1c',
    synonyms: ['glycated hemoglobin', 'glycosylated hemoglobin'],
    abbreviations: ['HbA1c', 'A1c'],
    relatedTerms: ['diabetes', 'blood sugar', 'glucose control', 'average glucose'],
    layTerms: ['A1c test', 'diabetes test'],
    category: 'lab-tests',
  },
];

// ============================================
// Stop Words
// ============================================

/**
 * Common stop words to filter from search queries
 */
export const STOP_WORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
  'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been',
  'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
  'should', 'may', 'might', 'must', 'shall', 'can', 'need', 'it', 'its',
  'this', 'that', 'these', 'those', 'what', 'which', 'who', 'whom', 'whose',
  'where', 'when', 'why', 'how', 'all', 'each', 'every', 'both', 'few',
  'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only',
  'own', 'same', 'so', 'than', 'too', 'very', 'just', 'also', 'about',
  'into', 'through', 'during', 'before', 'after', 'above', 'below',
  'between', 'under', 'again', 'further', 'then', 'once', 'here', 'there',
  'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you',
  'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself',
  'she', 'her', 'hers', 'herself', 'they', 'them', 'their', 'theirs',
  'themselves', 'am', 'being',
]);

// ============================================
// Lookup Functions
// ============================================

/**
 * Expand an abbreviation to its full form
 */
export function expandAbbreviation(abbr: string): string[] {
  const upperAbbr = abbr.toUpperCase();
  const matches = MEDICAL_ABBREVIATIONS.filter(
    (a) => a.abbr.toUpperCase() === upperAbbr
  );

  if (matches.length === 0) return [];

  const expansions: string[] = [];
  for (const match of matches) {
    expansions.push(match.expansion);
    if (match.alternatives) {
      expansions.push(...match.alternatives);
    }
  }

  return [...new Set(expansions)];
}

/**
 * Get all related terms for a medical term
 */
export function getRelatedTerms(term: string): string[] {
  const lowerTerm = term.toLowerCase();
  const related: Set<string> = new Set();

  for (const mapping of MEDICAL_TERM_MAPPINGS) {
    // Check if term matches any form
    const allForms = [
      mapping.term.toLowerCase(),
      ...mapping.synonyms.map((s) => s.toLowerCase()),
      ...mapping.abbreviations.map((a) => a.toLowerCase()),
      ...mapping.layTerms.map((l) => l.toLowerCase()),
    ];

    if (allForms.some((f) => f.includes(lowerTerm) || lowerTerm.includes(f))) {
      // Add all related forms
      related.add(mapping.term);
      mapping.synonyms.forEach((s) => related.add(s));
      mapping.relatedTerms.forEach((r) => related.add(r));
      mapping.layTerms.forEach((l) => related.add(l));
    }
  }

  return Array.from(related);
}

/**
 * Get synonyms for a term
 */
export function getSynonyms(term: string): string[] {
  const lowerTerm = term.toLowerCase();
  const synonyms: Set<string> = new Set();

  for (const mapping of MEDICAL_TERM_MAPPINGS) {
    const allForms = [
      mapping.term.toLowerCase(),
      ...mapping.synonyms.map((s) => s.toLowerCase()),
      ...mapping.layTerms.map((l) => l.toLowerCase()),
    ];

    if (allForms.includes(lowerTerm)) {
      synonyms.add(mapping.term);
      mapping.synonyms.forEach((s) => synonyms.add(s));
      mapping.layTerms.forEach((l) => synonyms.add(l));
    }
  }

  // Remove the original term
  synonyms.delete(term);
  return Array.from(synonyms);
}

/**
 * Convert medical term to patient-friendly language
 */
export function toLayTerms(term: string): string[] {
  const lowerTerm = term.toLowerCase();

  for (const mapping of MEDICAL_TERM_MAPPINGS) {
    if (
      mapping.term.toLowerCase() === lowerTerm ||
      mapping.synonyms.some((s) => s.toLowerCase() === lowerTerm) ||
      mapping.abbreviations.some((a) => a.toLowerCase() === lowerTerm)
    ) {
      return mapping.layTerms;
    }
  }

  return [];
}

/**
 * Categorize a term based on medical terminology database
 */
export function categorizeTerms(term: string): SearchCategory | null {
  const lowerTerm = term.toLowerCase();

  for (const mapping of MEDICAL_TERM_MAPPINGS) {
    const allForms = [
      mapping.term.toLowerCase(),
      ...mapping.synonyms.map((s) => s.toLowerCase()),
      ...mapping.abbreviations.map((a) => a.toLowerCase()),
      ...mapping.layTerms.map((l) => l.toLowerCase()),
    ];

    if (allForms.some((f) => f.includes(lowerTerm) || lowerTerm.includes(f))) {
      return mapping.category;
    }
  }

  return null;
}

/**
 * Check if a word is a stop word
 */
export function isStopWord(word: string): boolean {
  return STOP_WORDS.has(word.toLowerCase());
}

/**
 * Build abbreviation lookup map for fast access
 */
const abbreviationMap = new Map<string, AbbreviationExpansion[]>();
for (const abbr of MEDICAL_ABBREVIATIONS) {
  const key = abbr.abbr.toLowerCase();
  if (!abbreviationMap.has(key)) {
    abbreviationMap.set(key, []);
  }
  abbreviationMap.get(key)!.push(abbr);
}

/**
 * Fast abbreviation lookup
 */
export function lookupAbbreviation(abbr: string): AbbreviationExpansion[] {
  return abbreviationMap.get(abbr.toLowerCase()) || [];
}
