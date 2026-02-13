/**
 * Medical Dictation Matcher
 *
 * Takes transcribed text from voice STT and matches it against the app's
 * medical content databases (symptoms, conditions, medications). Uses fast
 * regex/keyword extraction first, then optionally enhances with on-device
 * LLM (via Ollama) for higher-quality entity extraction.
 *
 * All processing is on-device. No data leaves the user's machine.
 */

import type { SymptomEntry } from '../content/symptoms/symptom-database.js';
import type { CVConditionEntry } from '../content/conditions/cardiovascular/cv-conditions-database.js';

// =============================================================================
// Types
// =============================================================================

export type MedicalEntityType =
  | 'symptom'
  | 'condition'
  | 'medication'
  | 'diagnosis'
  | 'procedure'
  | 'anatomy';

export interface MedicalEntity {
  /** The entity classification */
  type: MedicalEntityType;
  /** Original text span from dictation */
  text: string;
  /** Cleaned/normalized version of the text */
  normalizedText: string;
  /** Match confidence from 0 (none) to 1 (certain) */
  confidence: number;
  /** Detected language of the entity */
  language: 'en' | 'es';
}

export interface DictationMatch {
  /** The extracted entity that was matched */
  entity: MedicalEntity;
  /** ID from the content database */
  matchedId: string;
  /** English name from the content database */
  matchedName: string;
  /** Spanish name from the content database */
  matchedNameEs: string;
  /** Match score from 0 (no match) to 1 (exact match) */
  score: number;
  /** Which database the match came from */
  source: string;
  /** Additional metadata from the matched entry */
  metadata?: Record<string, unknown>;
}

export interface DictationResult {
  /** The original transcribed text */
  originalText: string;
  /** Detected or specified language */
  language: 'en' | 'es';
  /** All medical entities extracted from the text */
  entities: MedicalEntity[];
  /** Content database matches for the extracted entities */
  matches: DictationMatch[];
  /** Total processing time in milliseconds */
  processingTimeMs: number;
  /** Whether the LLM was used for entity extraction */
  aiEnhanced: boolean;
}

// =============================================================================
// Search Index Types
// =============================================================================

interface SearchIndexEntry {
  id: string;
  nameEn: string;
  nameEs: string;
  normalizedEn: string;
  normalizedEs: string;
  /** Bigrams for fast fuzzy matching */
  bigramsEn: Set<string>;
  bigramsEs: Set<string>;
  source: string;
  type: MedicalEntityType;
  metadata?: Record<string, unknown>;
}

// =============================================================================
// Constants — Medical Abbreviations
// =============================================================================

/**
 * Common medical abbreviations mapped to their expanded forms.
 * Used during keyword extraction to catch shorthand in dictation.
 */
const MEDICAL_ABBREVIATIONS: Record<string, { expansion: string; type: MedicalEntityType }> = {
  // Conditions
  'htn': { expansion: 'hypertension', type: 'condition' },
  'dm': { expansion: 'diabetes mellitus', type: 'condition' },
  'dm2': { expansion: 'diabetes mellitus type 2', type: 'condition' },
  'dm1': { expansion: 'diabetes mellitus type 1', type: 'condition' },
  't2dm': { expansion: 'type 2 diabetes mellitus', type: 'condition' },
  't1dm': { expansion: 'type 1 diabetes mellitus', type: 'condition' },
  'cad': { expansion: 'coronary artery disease', type: 'condition' },
  'chf': { expansion: 'congestive heart failure', type: 'condition' },
  'hf': { expansion: 'heart failure', type: 'condition' },
  'copd': { expansion: 'chronic obstructive pulmonary disease', type: 'condition' },
  'ckd': { expansion: 'chronic kidney disease', type: 'condition' },
  'aki': { expansion: 'acute kidney injury', type: 'condition' },
  'uti': { expansion: 'urinary tract infection', type: 'condition' },
  'uri': { expansion: 'upper respiratory infection', type: 'condition' },
  'mi': { expansion: 'myocardial infarction', type: 'condition' },
  'stemi': { expansion: 'st elevation myocardial infarction', type: 'condition' },
  'nstemi': { expansion: 'non st elevation myocardial infarction', type: 'condition' },
  'acs': { expansion: 'acute coronary syndrome', type: 'condition' },
  'dvt': { expansion: 'deep vein thrombosis', type: 'condition' },
  'pe': { expansion: 'pulmonary embolism', type: 'condition' },
  'afib': { expansion: 'atrial fibrillation', type: 'condition' },
  'a-fib': { expansion: 'atrial fibrillation', type: 'condition' },
  'gerd': { expansion: 'gastroesophageal reflux disease', type: 'condition' },
  'ibs': { expansion: 'irritable bowel syndrome', type: 'condition' },
  'ibd': { expansion: 'inflammatory bowel disease', type: 'condition' },
  'ms': { expansion: 'multiple sclerosis', type: 'condition' },
  'ra': { expansion: 'rheumatoid arthritis', type: 'condition' },
  'sle': { expansion: 'systemic lupus erythematosus', type: 'condition' },
  'osa': { expansion: 'obstructive sleep apnea', type: 'condition' },
  'tia': { expansion: 'transient ischemic attack', type: 'condition' },
  'cva': { expansion: 'cerebrovascular accident', type: 'condition' },
  'bph': { expansion: 'benign prostatic hyperplasia', type: 'condition' },
  'gbs': { expansion: 'guillain barre syndrome', type: 'condition' },
  'pna': { expansion: 'pneumonia', type: 'condition' },

  // Symptoms
  'sob': { expansion: 'shortness of breath', type: 'symptom' },
  'doe': { expansion: 'dyspnea on exertion', type: 'symptom' },
  'cp': { expansion: 'chest pain', type: 'symptom' },
  'ha': { expansion: 'headache', type: 'symptom' },
  'n/v': { expansion: 'nausea and vomiting', type: 'symptom' },
  'nv': { expansion: 'nausea and vomiting', type: 'symptom' },
  'loc': { expansion: 'loss of consciousness', type: 'symptom' },
  'abd': { expansion: 'abdominal pain', type: 'symptom' },

  // Procedures
  'cabg': { expansion: 'coronary artery bypass graft', type: 'procedure' },
  'pci': { expansion: 'percutaneous coronary intervention', type: 'procedure' },
  'ekg': { expansion: 'electrocardiogram', type: 'procedure' },
  'ecg': { expansion: 'electrocardiogram', type: 'procedure' },
  'echo': { expansion: 'echocardiogram', type: 'procedure' },
  'ct': { expansion: 'computed tomography', type: 'procedure' },
  'mri': { expansion: 'magnetic resonance imaging', type: 'procedure' },
  'cbc': { expansion: 'complete blood count', type: 'procedure' },
  'bmp': { expansion: 'basic metabolic panel', type: 'procedure' },
  'cmp': { expansion: 'comprehensive metabolic panel', type: 'procedure' },
  'lp': { expansion: 'lumbar puncture', type: 'procedure' },
  'eeg': { expansion: 'electroencephalogram', type: 'procedure' },

  // Medications (common shorthand)
  'asa': { expansion: 'aspirin', type: 'medication' },
  'nsaid': { expansion: 'nonsteroidal anti-inflammatory drug', type: 'medication' },
  'nsaids': { expansion: 'nonsteroidal anti-inflammatory drugs', type: 'medication' },
  'ace-i': { expansion: 'ace inhibitor', type: 'medication' },
  'arb': { expansion: 'angiotensin receptor blocker', type: 'medication' },
  'bb': { expansion: 'beta blocker', type: 'medication' },
  'ccb': { expansion: 'calcium channel blocker', type: 'medication' },
  'ppi': { expansion: 'proton pump inhibitor', type: 'medication' },
  'ssri': { expansion: 'selective serotonin reuptake inhibitor', type: 'medication' },
  'snri': { expansion: 'serotonin norepinephrine reuptake inhibitor', type: 'medication' },
  'tca': { expansion: 'tricyclic antidepressant', type: 'medication' },
  'abx': { expansion: 'antibiotics', type: 'medication' },

  // Anatomy abbreviations
  'lv': { expansion: 'left ventricle', type: 'anatomy' },
  'rv': { expansion: 'right ventricle', type: 'anatomy' },
  'la': { expansion: 'left atrium', type: 'anatomy' },
  'cns': { expansion: 'central nervous system', type: 'anatomy' },
  'pns': { expansion: 'peripheral nervous system', type: 'anatomy' },
  'gi': { expansion: 'gastrointestinal', type: 'anatomy' },
  'gu': { expansion: 'genitourinary', type: 'anatomy' },
};

/**
 * Common medical keyword patterns for fast regex extraction.
 * Each pattern maps to an entity type.
 */
const KEYWORD_PATTERNS: Array<{ pattern: RegExp; type: MedicalEntityType }> = [
  // Symptoms — English
  { pattern: /\b(headache|migraine|cephalgia)\b/gi, type: 'symptom' },
  { pattern: /\b(chest pain|angina|chest tightness|chest pressure)\b/gi, type: 'symptom' },
  { pattern: /\b(shortness of breath|dyspnea|breathlessness|difficulty breathing)\b/gi, type: 'symptom' },
  { pattern: /\b(nausea|vomiting|emesis)\b/gi, type: 'symptom' },
  { pattern: /\b(fever|pyrexia|febrile)\b/gi, type: 'symptom' },
  { pattern: /\b(fatigue|tiredness|malaise|lethargy)\b/gi, type: 'symptom' },
  { pattern: /\b(dizziness|vertigo|lightheadedness|syncope)\b/gi, type: 'symptom' },
  { pattern: /\b(cough|coughing)\b/gi, type: 'symptom' },
  { pattern: /\b(pain|ache|soreness|tenderness|discomfort)\b/gi, type: 'symptom' },
  { pattern: /\b(swelling|edema|oedema|inflammation)\b/gi, type: 'symptom' },
  { pattern: /\b(numbness|tingling|paresthesia|pins and needles)\b/gi, type: 'symptom' },
  { pattern: /\b(weakness|paralysis|paresis)\b/gi, type: 'symptom' },
  { pattern: /\b(palpitations|tachycardia|bradycardia|arrhythmia)\b/gi, type: 'symptom' },
  { pattern: /\b(diarrhea|diarrhoea|constipation)\b/gi, type: 'symptom' },
  { pattern: /\b(rash|hives|urticaria|pruritus|itching)\b/gi, type: 'symptom' },
  { pattern: /\b(blurred vision|vision loss|diplopia|double vision)\b/gi, type: 'symptom' },
  { pattern: /\b(insomnia|sleep disturbance|somnolence)\b/gi, type: 'symptom' },
  { pattern: /\b(tremor|trembling|shaking)\b/gi, type: 'symptom' },
  { pattern: /\b(seizure|convulsion)\b/gi, type: 'symptom' },
  { pattern: /\b(bleeding|hemorrhage|haemorrhage)\b/gi, type: 'symptom' },
  { pattern: /\b(wheezing|stridor)\b/gi, type: 'symptom' },
  { pattern: /\b(diaphoresis|sweating|night sweats)\b/gi, type: 'symptom' },
  { pattern: /\b(dysphagia|difficulty swallowing)\b/gi, type: 'symptom' },
  { pattern: /\b(jaundice|icterus)\b/gi, type: 'symptom' },
  { pattern: /\b(hematuria|blood in urine)\b/gi, type: 'symptom' },
  { pattern: /\b(weight loss|weight gain|anorexia)\b/gi, type: 'symptom' },
  { pattern: /\b(anxiety|depression|mood changes)\b/gi, type: 'symptom' },

  // Symptoms — Spanish
  { pattern: /\b(dolor de cabeza|cefalea|jaqueca)\b/gi, type: 'symptom' },
  { pattern: /\b(dolor de pecho|dolor toracico|dolor en el pecho)\b/gi, type: 'symptom' },
  { pattern: /\b(falta de aire|disnea|dificultad para respirar)\b/gi, type: 'symptom' },
  { pattern: /\b(nausea|vomito|vomitos)\b/gi, type: 'symptom' },
  { pattern: /\b(fiebre|calentura)\b/gi, type: 'symptom' },
  { pattern: /\b(fatiga|cansancio|agotamiento)\b/gi, type: 'symptom' },
  { pattern: /\b(mareo|vertigo|desmayo)\b/gi, type: 'symptom' },
  { pattern: /\b(tos|tosiendo)\b/gi, type: 'symptom' },
  { pattern: /\b(dolor|molestia)\b/gi, type: 'symptom' },
  { pattern: /\b(hinchazon|edema|inflamacion)\b/gi, type: 'symptom' },
  { pattern: /\b(entumecimiento|hormigueo)\b/gi, type: 'symptom' },
  { pattern: /\b(debilidad|paralisis)\b/gi, type: 'symptom' },
  { pattern: /\b(palpitaciones|taquicardia)\b/gi, type: 'symptom' },
  { pattern: /\b(diarrea|estrenimiento)\b/gi, type: 'symptom' },
  { pattern: /\b(erupcion|urticaria|picazon|comezon)\b/gi, type: 'symptom' },
  { pattern: /\b(convulsion|convulsiones)\b/gi, type: 'symptom' },
  { pattern: /\b(sangrado|hemorragia)\b/gi, type: 'symptom' },

  // Conditions — English
  { pattern: /\b(hypertension|high blood pressure)\b/gi, type: 'condition' },
  { pattern: /\b(diabetes|diabetic)\b/gi, type: 'condition' },
  { pattern: /\b(asthma|asthmatic)\b/gi, type: 'condition' },
  { pattern: /\b(pneumonia)\b/gi, type: 'condition' },
  { pattern: /\b(heart failure|cardiac failure)\b/gi, type: 'condition' },
  { pattern: /\b(atrial fibrillation)\b/gi, type: 'condition' },
  { pattern: /\b(stroke|cerebrovascular)\b/gi, type: 'condition' },
  { pattern: /\b(myocardial infarction|heart attack)\b/gi, type: 'condition' },
  { pattern: /\b(angina)\b/gi, type: 'condition' },
  { pattern: /\b(epilepsy|seizure disorder)\b/gi, type: 'condition' },
  { pattern: /\b(multiple sclerosis)\b/gi, type: 'condition' },
  { pattern: /\b(parkinson|parkinsons|parkinson's)\b/gi, type: 'condition' },
  { pattern: /\b(alzheimer|alzheimers|alzheimer's)\b/gi, type: 'condition' },
  { pattern: /\b(arthritis|osteoarthritis|rheumatoid)\b/gi, type: 'condition' },
  { pattern: /\b(anemia|anaemia)\b/gi, type: 'condition' },
  { pattern: /\b(pulmonary embolism)\b/gi, type: 'condition' },
  { pattern: /\b(deep vein thrombosis)\b/gi, type: 'condition' },

  // Conditions — Spanish
  { pattern: /\b(hipertension|presion alta|presion arterial alta)\b/gi, type: 'condition' },
  { pattern: /\b(diabetes|diabetico|diabetica)\b/gi, type: 'condition' },
  { pattern: /\b(asma)\b/gi, type: 'condition' },
  { pattern: /\b(neumonia|pulmonia)\b/gi, type: 'condition' },
  { pattern: /\b(insuficiencia cardiaca)\b/gi, type: 'condition' },
  { pattern: /\b(infarto|ataque al corazon|ataque cardiaco)\b/gi, type: 'condition' },
  { pattern: /\b(epilepsia)\b/gi, type: 'condition' },
  { pattern: /\b(esclerosis multiple)\b/gi, type: 'condition' },

  // Medications — common names
  { pattern: /\b(aspirin|ibuprofen|acetaminophen|tylenol|advil|motrin)\b/gi, type: 'medication' },
  { pattern: /\b(metformin|insulin|glipizide|glyburide)\b/gi, type: 'medication' },
  { pattern: /\b(lisinopril|enalapril|ramipril|captopril)\b/gi, type: 'medication' },
  { pattern: /\b(losartan|valsartan|olmesartan|irbesartan)\b/gi, type: 'medication' },
  { pattern: /\b(metoprolol|atenolol|propranolol|carvedilol|bisoprolol)\b/gi, type: 'medication' },
  { pattern: /\b(amlodipine|nifedipine|diltiazem|verapamil)\b/gi, type: 'medication' },
  { pattern: /\b(atorvastatin|rosuvastatin|simvastatin|pravastatin|lovastatin)\b/gi, type: 'medication' },
  { pattern: /\b(warfarin|heparin|enoxaparin|rivaroxaban|apixaban|dabigatran|eliquis|xarelto)\b/gi, type: 'medication' },
  { pattern: /\b(omeprazole|pantoprazole|esomeprazole|lansoprazole)\b/gi, type: 'medication' },
  { pattern: /\b(amoxicillin|azithromycin|ciprofloxacin|doxycycline|cephalexin|levofloxacin)\b/gi, type: 'medication' },
  { pattern: /\b(fluoxetine|sertraline|escitalopram|citalopram|paroxetine)\b/gi, type: 'medication' },
  { pattern: /\b(prednisone|prednisolone|dexamethasone|methylprednisolone|hydrocortisone)\b/gi, type: 'medication' },
  { pattern: /\b(albuterol|salbutamol|budesonide|fluticasone|montelukast)\b/gi, type: 'medication' },
  { pattern: /\b(gabapentin|pregabalin|levetiracetam|carbamazepine|valproate|lamotrigine|phenytoin)\b/gi, type: 'medication' },
  { pattern: /\b(levothyroxine|synthroid)\b/gi, type: 'medication' },
  { pattern: /\b(hydrochlorothiazide|furosemide|spironolactone|chlorthalidone)\b/gi, type: 'medication' },
  { pattern: /\b(morphine|oxycodone|hydrocodone|fentanyl|tramadol|codeine)\b/gi, type: 'medication' },
  { pattern: /\b(nitroglycerin|nitroglycerine)\b/gi, type: 'medication' },
  { pattern: /\b(clopidogrel|ticagrelor|prasugrel)\b/gi, type: 'medication' },
  { pattern: /\b(levodopa|carbidopa|sinemet|pramipexole|ropinirole)\b/gi, type: 'medication' },
  { pattern: /\b(donepezil|memantine|rivastigmine|galantamine)\b/gi, type: 'medication' },

  // Anatomy — English
  { pattern: /\b(heart|cardiac|myocardium|pericardium|endocardium)\b/gi, type: 'anatomy' },
  { pattern: /\b(lung|lungs|pulmonary|bronchial|alveolar)\b/gi, type: 'anatomy' },
  { pattern: /\b(brain|cerebral|cerebellum|brainstem|cortex)\b/gi, type: 'anatomy' },
  { pattern: /\b(liver|hepatic)\b/gi, type: 'anatomy' },
  { pattern: /\b(kidney|kidneys|renal)\b/gi, type: 'anatomy' },
  { pattern: /\b(stomach|gastric|intestine|intestinal|colon|bowel)\b/gi, type: 'anatomy' },
  { pattern: /\b(spine|spinal|vertebral|lumbar|cervical|thoracic)\b/gi, type: 'anatomy' },
  { pattern: /\b(aorta|aortic|coronary artery|carotid|femoral artery)\b/gi, type: 'anatomy' },
  { pattern: /\b(pancreas|pancreatic)\b/gi, type: 'anatomy' },
  { pattern: /\b(thyroid)\b/gi, type: 'anatomy' },

  // Anatomy — Spanish
  { pattern: /\b(corazon|cardiaco|miocardio)\b/gi, type: 'anatomy' },
  { pattern: /\b(pulmon|pulmones|pulmonar)\b/gi, type: 'anatomy' },
  { pattern: /\b(cerebro|cerebral|cerebelo)\b/gi, type: 'anatomy' },
  { pattern: /\b(higado|hepatico)\b/gi, type: 'anatomy' },
  { pattern: /\b(rinon|rinones|renal)\b/gi, type: 'anatomy' },
  { pattern: /\b(estomago|gastrico|intestino|colon)\b/gi, type: 'anatomy' },
  { pattern: /\b(columna|espinal|vertebral|lumbar|cervical)\b/gi, type: 'anatomy' },
  { pattern: /\b(pancreas|pancreatico)\b/gi, type: 'anatomy' },
  { pattern: /\b(tiroides)\b/gi, type: 'anatomy' },

  // Procedures — English
  { pattern: /\b(surgery|surgical|operation)\b/gi, type: 'procedure' },
  { pattern: /\b(biopsy)\b/gi, type: 'procedure' },
  { pattern: /\b(endoscopy|colonoscopy|bronchoscopy)\b/gi, type: 'procedure' },
  { pattern: /\b(catheterization|angioplasty|stent)\b/gi, type: 'procedure' },
  { pattern: /\b(transplant|transplantation)\b/gi, type: 'procedure' },
  { pattern: /\b(dialysis|hemodialysis|peritoneal dialysis)\b/gi, type: 'procedure' },
  { pattern: /\b(x-ray|x ray|radiograph|ultrasound|sonogram)\b/gi, type: 'procedure' },
  { pattern: /\b(blood test|lab work|laboratory)\b/gi, type: 'procedure' },

  // Procedures — Spanish
  { pattern: /\b(cirugia|quirurgico|operacion)\b/gi, type: 'procedure' },
  { pattern: /\b(biopsia)\b/gi, type: 'procedure' },
  { pattern: /\b(endoscopia|colonoscopia)\b/gi, type: 'procedure' },
  { pattern: /\b(cateterismo|angioplastia)\b/gi, type: 'procedure' },
  { pattern: /\b(trasplante)\b/gi, type: 'procedure' },
  { pattern: /\b(dialisis|hemodialisis)\b/gi, type: 'procedure' },
  { pattern: /\b(radiografia|ultrasonido|ecografia)\b/gi, type: 'procedure' },
];

// =============================================================================
// String Similarity Utilities
// =============================================================================

/**
 * Normalize text for comparison: lowercase, strip accents, remove punctuation.
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Strip combining diacritical marks
    .replace(/['']/g, '')            // Strip smart quotes / apostrophes
    .replace(/[^\w\s-]/g, '')        // Strip remaining punctuation (keep hyphens)
    .replace(/\s+/g, ' ')           // Collapse whitespace
    .trim();
}

/**
 * Extract character bigrams from a string.
 */
function getBigrams(text: string): Set<string> {
  const bigrams = new Set<string>();
  const normalized = normalizeText(text);
  for (let i = 0; i < normalized.length - 1; i++) {
    bigrams.add(normalized.slice(i, i + 2));
  }
  return bigrams;
}

/**
 * Compute bigram (Dice coefficient) similarity between two strings.
 * Returns a score from 0 (no overlap) to 1 (identical bigram sets).
 *
 * This is faster than Levenshtein for fuzzy matching and works well for
 * medical term comparison where word order may vary.
 */
export function bigramSimilarity(a: string, b: string): number {
  const normA = normalizeText(a);
  const normB = normalizeText(b);

  // Exact match short-circuit
  if (normA === normB) return 1.0;

  // If either string is very short, fall back to substring check
  if (normA.length <= 2 || normB.length <= 2) {
    return normA.includes(normB) || normB.includes(normA) ? 0.8 : 0.0;
  }

  const bigramsA = getBigrams(a);
  const bigramsB = getBigrams(b);

  if (bigramsA.size === 0 || bigramsB.size === 0) return 0.0;

  let intersectionCount = 0;
  for (const bigram of bigramsA) {
    if (bigramsB.has(bigram)) {
      intersectionCount++;
    }
  }

  // Dice coefficient: 2 * |intersection| / (|A| + |B|)
  return (2 * intersectionCount) / (bigramsA.size + bigramsB.size);
}

/**
 * Compute a composite match score that combines bigram similarity with
 * substring containment bonuses. Designed for matching dictation fragments
 * against known medical terms.
 */
function compositeMatchScore(query: string, target: string): number {
  const normQuery = normalizeText(query);
  const normTarget = normalizeText(target);

  // Exact match
  if (normQuery === normTarget) return 1.0;

  // Start with bigram similarity
  let score = bigramSimilarity(query, target);

  // Bonus: query is fully contained in target or vice versa
  if (normTarget.includes(normQuery)) {
    const containmentRatio = normQuery.length / normTarget.length;
    score = Math.max(score, 0.7 + 0.3 * containmentRatio);
  } else if (normQuery.includes(normTarget)) {
    const containmentRatio = normTarget.length / normQuery.length;
    score = Math.max(score, 0.6 + 0.3 * containmentRatio);
  }

  // Bonus: starts with query
  if (normTarget.startsWith(normQuery) || normQuery.startsWith(normTarget)) {
    score = Math.max(score, 0.75);
  }

  return Math.min(score, 1.0);
}

// =============================================================================
// Search Index — In-Memory
// =============================================================================

let searchIndex: SearchIndexEntry[] | null = null;
let indexBuildPromise: Promise<void> | null = null;

/**
 * Dynamically import the symptom database.
 */
async function loadSymptomDatabase(): Promise<SymptomEntry[]> {
  try {
    const mod = await import('../content/symptoms/symptom-database.js');
    return mod.SYMPTOM_DATABASE ?? [];
  } catch (err) {
    console.warn('[DictationMatcher] Failed to load symptom database:', err);
    return [];
  }
}

/**
 * Dynamically import the CV conditions database.
 */
async function loadCVConditions(): Promise<CVConditionEntry[]> {
  try {
    const mod = await import('../content/conditions/cardiovascular/cv-conditions-database.js');
    const record: Record<string, CVConditionEntry> = mod.CV_CONDITIONS ?? {};
    return Object.values(record);
  } catch (err) {
    console.warn('[DictationMatcher] Failed to load CV conditions database:', err);
    return [];
  }
}

/**
 * Generic condition loader for databases that export a Record<string, T>.
 * T must have at least { id, name, nameEs }.
 */
async function loadConditionRecord<T extends { id: string; name: string; nameEs: string }>(
  importPath: string,
  exportName: string,
  source: string,
): Promise<Array<{ id: string; name: string; nameEs: string; source: string }>> {
  try {
    // Dynamic imports must use string literals in some bundlers, but
    // we rely on being in a Node/Tauri environment where dynamic paths work.
    const mod = await import(importPath);
    const record: Record<string, T> | undefined = mod[exportName];
    if (!record) return [];
    return Object.values(record).map(entry => ({
      id: entry.id,
      name: entry.name,
      nameEs: entry.nameEs,
      source,
    }));
  } catch {
    // Silently skip databases that fail to load — they may not be bundled
    return [];
  }
}

/**
 * Pre-build an in-memory search index from all content databases for fast matching.
 * Called once at startup (or lazily on first use). Subsequent calls are no-ops.
 */
export function buildSearchIndex(): void {
  // If already built or building, skip
  if (searchIndex !== null || indexBuildPromise !== null) return;

  indexBuildPromise = buildSearchIndexAsync().then(() => {
    indexBuildPromise = null;
  }).catch(err => {
    console.error('[DictationMatcher] Error building search index:', err);
    indexBuildPromise = null;
  });
}

/**
 * Ensure the search index is ready. Awaits the build if it is in progress.
 */
async function ensureSearchIndex(): Promise<SearchIndexEntry[]> {
  if (searchIndex !== null) return searchIndex;

  if (indexBuildPromise === null) {
    buildSearchIndex();
  }

  await indexBuildPromise;

  // If still null after await, build synchronously with empty data
  if (searchIndex === null) {
    searchIndex = [];
  }

  return searchIndex;
}

/**
 * Internal async builder for the search index.
 */
async function buildSearchIndexAsync(): Promise<void> {
  const entries: SearchIndexEntry[] = [];

  // --- Symptoms ---
  const symptoms = await loadSymptomDatabase();
  for (const symptom of symptoms) {
    entries.push({
      id: symptom.symptomId,
      nameEn: symptom.name,
      nameEs: symptom.spanishName,
      normalizedEn: normalizeText(symptom.name),
      normalizedEs: normalizeText(symptom.spanishName),
      bigramsEn: getBigrams(symptom.name),
      bigramsEs: getBigrams(symptom.spanishName),
      source: 'symptom-database',
      type: 'symptom',
      metadata: {
        bodyRegions: symptom.bodyRegions,
        bodySystems: symptom.bodySystems,
      },
    });
  }

  // --- Cardiovascular Conditions ---
  const cvConditions = await loadCVConditions();
  for (const condition of cvConditions) {
    entries.push({
      id: condition.id,
      nameEn: condition.name,
      nameEs: condition.nameEs,
      normalizedEn: normalizeText(condition.name),
      normalizedEs: normalizeText(condition.nameEs),
      bigramsEn: getBigrams(condition.name),
      bigramsEs: getBigrams(condition.nameEs),
      source: 'cv-conditions-database',
      type: 'condition',
      metadata: {
        category: condition.category,
        icd11: condition.icd11,
      },
    });
  }

  // --- Other Condition Databases ---
  // Load additional databases dynamically. Each follows the same pattern:
  // Record<string, { id, name, nameEs, ... }> exported as a named constant.
  const conditionSources: Array<{ path: string; exportName: string; source: string }> = [
    {
      path: '../content/conditions/neurological/neuro-conditions-database.js',
      exportName: 'NEURO_CONDITIONS',
      source: 'neuro-conditions-database',
    },
    {
      path: '../content/conditions/respiratory/resp-conditions-database.js',
      exportName: 'RESP_CONDITIONS',
      source: 'resp-conditions-database',
    },
    {
      path: '../content/conditions/gastrointestinal/gi-conditions-database.js',
      exportName: 'GI_CONDITIONS',
      source: 'gi-conditions-database',
    },
    {
      path: '../content/conditions/dermatology/derm-conditions-database.js',
      exportName: 'DERM_CONDITIONS',
      source: 'derm-conditions-database',
    },
    {
      path: '../content/conditions/musculoskeletal/musculoskeletal-conditions-database.js',
      exportName: 'MSK_CONDITIONS',
      source: 'musculoskeletal-conditions-database',
    },
    {
      path: '../content/conditions/mental-health/mental-health-conditions-database.js',
      exportName: 'MENTAL_HEALTH_CONDITIONS',
      source: 'mental-health-conditions-database',
    },
    {
      path: '../content/conditions/infectious/infectious-conditions-database.js',
      exportName: 'INFECTIOUS_CONDITIONS',
      source: 'infectious-conditions-database',
    },
    {
      path: '../content/conditions/autoimmune/autoimmune-conditions-database.js',
      exportName: 'AUTOIMMUNE_CONDITIONS',
      source: 'autoimmune-conditions-database',
    },
    {
      path: '../content/conditions/renal/renal-conditions-database.js',
      exportName: 'RENAL_CONDITIONS',
      source: 'renal-conditions-database',
    },
    {
      path: '../content/conditions/hematologic/hematologic-conditions-database.js',
      exportName: 'HEMATOLOGIC_CONDITIONS',
      source: 'hematologic-conditions-database',
    },
    {
      path: '../content/conditions/metabolic/metabolic-conditions-database.js',
      exportName: 'METABOLIC_CONDITIONS',
      source: 'metabolic-conditions-database',
    },
    {
      path: '../content/conditions/oncology/oncology-conditions-database.js',
      exportName: 'ONCOLOGY_CONDITIONS',
      source: 'oncology-conditions-database',
    },
    {
      path: '../content/conditions/ent/ent-conditions-database.js',
      exportName: 'ENT_CONDITIONS',
      source: 'ent-conditions-database',
    },
    {
      path: '../content/conditions/urology/urology-conditions-database.js',
      exportName: 'UROLOGY_CONDITIONS',
      source: 'urology-conditions-database',
    },
    {
      path: '../content/conditions/ophthalmic/ophthalmic-conditions-database.js',
      exportName: 'OPHTHALMIC_CONDITIONS',
      source: 'ophthalmic-conditions-database',
    },
    {
      path: '../content/conditions/ophthalmology/ophthalmology-conditions-database.js',
      exportName: 'OPHTHALMOLOGY_CONDITIONS',
      source: 'ophthalmology-conditions-database',
    },
    {
      path: '../content/conditions/pediatric/pediatric-conditions-database.js',
      exportName: 'PEDIATRIC_CONDITIONS',
      source: 'pediatric-conditions-database',
    },
    {
      path: '../content/conditions/geriatric/geriatric-conditions-database.js',
      exportName: 'GERIATRIC_CONDITIONS',
      source: 'geriatric-conditions-database',
    },
    {
      path: '../content/conditions/genetic/genetic-conditions-database.js',
      exportName: 'GENETIC_CONDITIONS',
      source: 'genetic-conditions-database',
    },
    {
      path: '../content/conditions/pregnancy-obstetric/pregnancy-conditions-database.js',
      exportName: 'PREGNANCY_CONDITIONS',
      source: 'pregnancy-conditions-database',
    },
  ];

  // Load all condition databases in parallel
  const conditionResults = await Promise.allSettled(
    conditionSources.map(src =>
      loadConditionRecord(src.path, src.exportName, src.source),
    ),
  );

  for (const result of conditionResults) {
    if (result.status === 'fulfilled') {
      for (const entry of result.value) {
        entries.push({
          id: entry.id,
          nameEn: entry.name,
          nameEs: entry.nameEs,
          normalizedEn: normalizeText(entry.name),
          normalizedEs: normalizeText(entry.nameEs),
          bigramsEn: getBigrams(entry.name),
          bigramsEs: getBigrams(entry.nameEs),
          source: entry.source,
          type: 'condition',
        });
      }
    }
  }

  // --- Common Medications (static list for index matching) ---
  const commonMedications: Array<{ name: string; nameEs: string }> = [
    { name: 'Aspirin', nameEs: 'Aspirina' },
    { name: 'Ibuprofen', nameEs: 'Ibuprofeno' },
    { name: 'Acetaminophen', nameEs: 'Acetaminofen' },
    { name: 'Metformin', nameEs: 'Metformina' },
    { name: 'Lisinopril', nameEs: 'Lisinopril' },
    { name: 'Losartan', nameEs: 'Losartan' },
    { name: 'Amlodipine', nameEs: 'Amlodipino' },
    { name: 'Metoprolol', nameEs: 'Metoprolol' },
    { name: 'Atorvastatin', nameEs: 'Atorvastatina' },
    { name: 'Omeprazole', nameEs: 'Omeprazol' },
    { name: 'Amoxicillin', nameEs: 'Amoxicilina' },
    { name: 'Azithromycin', nameEs: 'Azitromicina' },
    { name: 'Prednisone', nameEs: 'Prednisona' },
    { name: 'Albuterol', nameEs: 'Salbutamol' },
    { name: 'Fluoxetine', nameEs: 'Fluoxetina' },
    { name: 'Sertraline', nameEs: 'Sertralina' },
    { name: 'Gabapentin', nameEs: 'Gabapentina' },
    { name: 'Levothyroxine', nameEs: 'Levotiroxina' },
    { name: 'Warfarin', nameEs: 'Warfarina' },
    { name: 'Clopidogrel', nameEs: 'Clopidogrel' },
    { name: 'Insulin', nameEs: 'Insulina' },
    { name: 'Furosemide', nameEs: 'Furosemida' },
    { name: 'Hydrochlorothiazide', nameEs: 'Hidroclorotiazida' },
    { name: 'Nitroglycerin', nameEs: 'Nitroglicerina' },
    { name: 'Morphine', nameEs: 'Morfina' },
    { name: 'Heparin', nameEs: 'Heparina' },
    { name: 'Levodopa', nameEs: 'Levodopa' },
    { name: 'Donepezil', nameEs: 'Donepezilo' },
    { name: 'Carbamazepine', nameEs: 'Carbamazepina' },
    { name: 'Valproate', nameEs: 'Valproato' },
    { name: 'Diazepam', nameEs: 'Diazepam' },
    { name: 'Lorazepam', nameEs: 'Lorazepam' },
    { name: 'Ciprofloxacin', nameEs: 'Ciprofloxacino' },
    { name: 'Doxycycline', nameEs: 'Doxiciclina' },
    { name: 'Pantoprazole', nameEs: 'Pantoprazol' },
    { name: 'Rosuvastatin', nameEs: 'Rosuvastatina' },
    { name: 'Rivaroxaban', nameEs: 'Rivaroxaban' },
    { name: 'Apixaban', nameEs: 'Apixaban' },
    { name: 'Diltiazem', nameEs: 'Diltiazem' },
    { name: 'Verapamil', nameEs: 'Verapamilo' },
    { name: 'Spironolactone', nameEs: 'Espironolactona' },
    { name: 'Digoxin', nameEs: 'Digoxina' },
    { name: 'Amiodarone', nameEs: 'Amiodarona' },
    { name: 'Epinephrine', nameEs: 'Epinefrina' },
    { name: 'Norepinephrine', nameEs: 'Norepinefrina' },
    { name: 'Dopamine', nameEs: 'Dopamina' },
    { name: 'Atropine', nameEs: 'Atropina' },
  ];

  for (const med of commonMedications) {
    entries.push({
      id: `med-${normalizeText(med.name).replace(/\s+/g, '-')}`,
      nameEn: med.name,
      nameEs: med.nameEs,
      normalizedEn: normalizeText(med.name),
      normalizedEs: normalizeText(med.nameEs),
      bigramsEn: getBigrams(med.name),
      bigramsEs: getBigrams(med.nameEs),
      source: 'medication-index',
      type: 'medication',
    });
  }

  // --- Common Anatomical Terms ---
  const anatomyTerms: Array<{ name: string; nameEs: string }> = [
    { name: 'Heart', nameEs: 'Corazon' },
    { name: 'Left ventricle', nameEs: 'Ventriculo izquierdo' },
    { name: 'Right ventricle', nameEs: 'Ventriculo derecho' },
    { name: 'Left atrium', nameEs: 'Auricula izquierda' },
    { name: 'Right atrium', nameEs: 'Auricula derecha' },
    { name: 'Aorta', nameEs: 'Aorta' },
    { name: 'Coronary artery', nameEs: 'Arteria coronaria' },
    { name: 'Carotid artery', nameEs: 'Arteria carotida' },
    { name: 'Lungs', nameEs: 'Pulmones' },
    { name: 'Brain', nameEs: 'Cerebro' },
    { name: 'Spinal cord', nameEs: 'Medula espinal' },
    { name: 'Liver', nameEs: 'Higado' },
    { name: 'Kidneys', nameEs: 'Rinones' },
    { name: 'Pancreas', nameEs: 'Pancreas' },
    { name: 'Stomach', nameEs: 'Estomago' },
    { name: 'Small intestine', nameEs: 'Intestino delgado' },
    { name: 'Large intestine', nameEs: 'Intestino grueso' },
    { name: 'Colon', nameEs: 'Colon' },
    { name: 'Thyroid', nameEs: 'Tiroides' },
    { name: 'Adrenal gland', nameEs: 'Glandula suprarrenal' },
    { name: 'Femoral artery', nameEs: 'Arteria femoral' },
    { name: 'Cerebellum', nameEs: 'Cerebelo' },
    { name: 'Hippocampus', nameEs: 'Hipocampo' },
    { name: 'Thalamus', nameEs: 'Talamo' },
    { name: 'Substantia nigra', nameEs: 'Sustancia negra' },
    { name: 'Bone marrow', nameEs: 'Medula osea' },
    { name: 'Lymph node', nameEs: 'Ganglio linfatico' },
    { name: 'Esophagus', nameEs: 'Esofago' },
    { name: 'Trachea', nameEs: 'Traquea' },
    { name: 'Diaphragm', nameEs: 'Diafragma' },
    { name: 'Pleura', nameEs: 'Pleura' },
    { name: 'Pericardium', nameEs: 'Pericardio' },
    { name: 'Myocardium', nameEs: 'Miocardio' },
    { name: 'Retina', nameEs: 'Retina' },
    { name: 'Optic nerve', nameEs: 'Nervio optico' },
  ];

  for (const term of anatomyTerms) {
    entries.push({
      id: `anat-${normalizeText(term.name).replace(/\s+/g, '-')}`,
      nameEn: term.name,
      nameEs: term.nameEs,
      normalizedEn: normalizeText(term.name),
      normalizedEs: normalizeText(term.nameEs),
      bigramsEn: getBigrams(term.name),
      bigramsEs: getBigrams(term.nameEs),
      source: 'anatomy-index',
      type: 'anatomy',
    });
  }

  searchIndex = entries;
  console.log(`[DictationMatcher] Search index built: ${entries.length} entries`);
}

/**
 * Reset the search index. Useful for testing or when databases are updated.
 */
export function resetSearchIndex(): void {
  searchIndex = null;
  indexBuildPromise = null;
}

// =============================================================================
// Language Detection
// =============================================================================

/**
 * Simple heuristic to detect whether text is likely Spanish or English.
 * Checks for common Spanish words, accent patterns, and character frequencies.
 */
export function detectLanguage(text: string): 'en' | 'es' {
  const lower = text.toLowerCase();

  // Common Spanish words and patterns
  const spanishIndicators = [
    /\b(el|la|los|las|un|una|unos|unas)\b/g,
    /\b(de|del|en|con|por|para|que|como|pero|sino|esta|esto)\b/g,
    /\b(dolor|fiebre|tos|mareo|sangre|cabeza|pecho|estomago)\b/g,
    /\b(tiene|tengo|siente|presenta|dice|refiere)\b/g,
    /[áéíóúñ¿¡]/g,
  ];

  // Common English words
  const englishIndicators = [
    /\b(the|a|an|is|are|was|were|has|have|had)\b/g,
    /\b(patient|reports|complains|presents|denies|states)\b/g,
    /\b(pain|fever|cough|dizzy|nausea|vomiting)\b/g,
    /\b(with|from|this|that|which|what|when|where)\b/g,
  ];

  let spanishScore = 0;
  let englishScore = 0;

  for (const pattern of spanishIndicators) {
    const matches = lower.match(pattern);
    spanishScore += matches ? matches.length : 0;
  }

  for (const pattern of englishIndicators) {
    const matches = lower.match(pattern);
    englishScore += matches ? matches.length : 0;
  }

  return spanishScore > englishScore ? 'es' : 'en';
}

// =============================================================================
// Entity Extraction — Keyword/Regex (Fast Path)
// =============================================================================

/**
 * Extract medical entities from text using fast regex and keyword matching.
 * This is the primary extraction method and always runs.
 */
function extractEntitiesKeyword(text: string, language: 'en' | 'es'): MedicalEntity[] {
  const entities: MedicalEntity[] = [];
  const seen = new Set<string>(); // Deduplicate by normalized text

  // 1. Check for medical abbreviations
  const words = text.split(/\s+/);
  for (const word of words) {
    const cleanWord = word.toLowerCase().replace(/[.,;:!?()]/g, '');
    const abbr = MEDICAL_ABBREVIATIONS[cleanWord];
    if (abbr) {
      const normalized = normalizeText(abbr.expansion);
      if (!seen.has(normalized)) {
        seen.add(normalized);
        entities.push({
          type: abbr.type,
          text: word,
          normalizedText: normalized,
          confidence: 0.85, // Abbreviations are high-confidence matches
          language,
        });
      }
    }
  }

  // 2. Run keyword pattern matching
  for (const { pattern, type } of KEYWORD_PATTERNS) {
    // Reset regex lastIndex since they are reused
    pattern.lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = pattern.exec(text)) !== null) {
      const matchedText = match[0];
      const normalized = normalizeText(matchedText);

      if (!seen.has(normalized)) {
        seen.add(normalized);
        entities.push({
          type,
          text: matchedText,
          normalizedText: normalized,
          confidence: 0.75,
          language,
        });
      }
    }
  }

  return entities;
}

// =============================================================================
// Entity Extraction — LLM-Enhanced (AI Path)
// =============================================================================

/**
 * The system prompt used for LLM-based medical entity extraction.
 * Designed to be bilingual-aware and produce structured JSON output.
 */
const ENTITY_EXTRACTION_SYSTEM_PROMPT = `You are a medical NLP system that extracts medical entities from clinical dictation text. You handle both English and Spanish text.

For the given text, identify ALL medical entities and classify each as one of:
- symptom: Any sign, symptom, or complaint (e.g., "chest pain", "dolor de cabeza", "dyspnea")
- condition: Any disease, disorder, or diagnosis (e.g., "hypertension", "diabetes", "epilepsia")
- medication: Any drug, medication, or therapeutic agent (e.g., "metoprolol", "aspirina", "insulin")
- procedure: Any test, procedure, or intervention (e.g., "ECG", "colonoscopy", "biopsia")
- anatomy: Any body part, organ, or anatomical structure (e.g., "left ventricle", "cerebro", "liver")
- diagnosis: Any specific diagnostic conclusion (e.g., "STEMI", "appendicitis")

Rules:
1. Extract the exact text span from the input.
2. Assign a confidence from 0.0 to 1.0 based on certainty.
3. Detect whether each entity is in English ("en") or Spanish ("es").
4. Expand common abbreviations (HTN, DM, SOB, etc.) in the normalized form.
5. Return ONLY valid JSON — no markdown, no explanation.

Respond with a JSON array:
[{"type":"symptom","text":"chest pain","normalizedText":"chest pain","confidence":0.95,"language":"en"}, ...]`;

/**
 * Use the on-device LLM (via Ollama) to extract medical entities from text.
 * Falls back gracefully if Ollama is not available.
 */
async function extractEntitiesLLM(
  text: string,
  language: 'en' | 'es',
): Promise<MedicalEntity[] | null> {
  try {
    // Dynamic import to avoid hard dependency on Ollama
    const { isOllamaAvailable, chatJSON, selectOptimalModel } = await import('./ollama.js');

    const available = await isOllamaAvailable();
    if (!available) return null;

    // Ensure we have a model
    const model = await selectOptimalModel();
    if (!model) return null;

    const userPrompt = language === 'es'
      ? `Extraer todas las entidades medicas del siguiente texto de dictado clinico (en espanol). Responde SOLO con JSON.\n\nTexto: "${text}"`
      : `Extract all medical entities from the following clinical dictation text. Respond ONLY with JSON.\n\nText: "${text}"`;

    const result = await chatJSON<MedicalEntity[]>({
      model,
      messages: [
        { role: 'system', content: ENTITY_EXTRACTION_SYSTEM_PROMPT },
        { role: 'user', content: userPrompt },
      ],
      options: {
        temperature: 0.1, // Low temperature for factual extraction
        num_predict: 2048,
      },
    });

    // Validate the response structure
    if (!Array.isArray(result)) return null;

    const validTypes = new Set<string>([
      'symptom', 'condition', 'medication', 'diagnosis', 'procedure', 'anatomy',
    ]);

    return result
      .filter(
        (e): e is MedicalEntity =>
          typeof e === 'object' &&
          e !== null &&
          typeof e.type === 'string' &&
          validTypes.has(e.type) &&
          typeof e.text === 'string' &&
          e.text.length > 0,
      )
      .map(e => ({
        type: e.type as MedicalEntityType,
        text: e.text,
        normalizedText: normalizeText(e.normalizedText ?? e.text),
        confidence: typeof e.confidence === 'number'
          ? Math.max(0, Math.min(1, e.confidence))
          : 0.7,
        language: e.language === 'es' ? 'es' : 'en',
      }));
  } catch (err) {
    console.warn('[DictationMatcher] LLM entity extraction failed:', err);
    return null;
  }
}

// =============================================================================
// Core Functions
// =============================================================================

/**
 * Extract medical entities from transcribed dictation text.
 *
 * First runs fast regex/keyword extraction. If the on-device LLM (Ollama)
 * is available, also runs AI-enhanced extraction and merges the results
 * for higher recall and accuracy.
 *
 * @param text - Transcribed text from voice STT
 * @param language - Language hint; auto-detected if not provided
 * @returns Array of extracted medical entities with confidence scores
 */
export async function extractMedicalEntities(
  text: string,
  language?: 'en' | 'es',
): Promise<MedicalEntity[]> {
  if (!text || text.trim().length === 0) return [];

  const detectedLang = language ?? detectLanguage(text);

  // Fast path: keyword extraction (always runs)
  const keywordEntities = extractEntitiesKeyword(text, detectedLang);

  // AI path: LLM extraction (runs if available)
  const llmEntities = await extractEntitiesLLM(text, detectedLang);

  if (!llmEntities || llmEntities.length === 0) {
    return keywordEntities;
  }

  // Merge: deduplicate by normalized text, preferring LLM entities (higher quality)
  const merged = new Map<string, MedicalEntity>();

  // Add keyword entities first
  for (const entity of keywordEntities) {
    merged.set(entity.normalizedText, entity);
  }

  // Override/add LLM entities (they generally have better type classification)
  for (const entity of llmEntities) {
    const existing = merged.get(entity.normalizedText);
    if (existing) {
      // Keep the higher confidence one, but boost confidence since both methods agree
      merged.set(entity.normalizedText, {
        ...entity,
        confidence: Math.min(1.0, Math.max(existing.confidence, entity.confidence) + 0.1),
      });
    } else {
      merged.set(entity.normalizedText, entity);
    }
  }

  return Array.from(merged.values());
}

/**
 * Match a single extracted entity against all content databases.
 *
 * Uses fuzzy string matching (bigram similarity + containment scoring)
 * to find the best matches in both English and Spanish names.
 *
 * @param entity - A medical entity extracted from dictation
 * @returns Top matches sorted by score (highest first), capped at 5 results
 */
export async function matchEntityToContent(entity: MedicalEntity): Promise<DictationMatch[]> {
  const index = await ensureSearchIndex();
  if (index.length === 0) return [];

  const matches: DictationMatch[] = [];
  const queryNormalized = entity.normalizedText;

  // Score against every index entry
  for (const entry of index) {
    const scoreEn = compositeMatchScore(queryNormalized, entry.normalizedEn);
    const scoreEs = compositeMatchScore(queryNormalized, entry.normalizedEs);
    const bestScore = Math.max(scoreEn, scoreEs);

    // Type affinity bonus: boost score when entity type matches index type
    const typeBonus = entity.type === entry.type ? 0.05 : 0;
    const finalScore = Math.min(1.0, bestScore + typeBonus);

    // Minimum threshold to avoid noise
    if (finalScore >= 0.4) {
      matches.push({
        entity,
        matchedId: entry.id,
        matchedName: entry.nameEn,
        matchedNameEs: entry.nameEs,
        score: finalScore,
        source: entry.source,
        metadata: entry.metadata,
      });
    }
  }

  // Sort by score descending, return top 5
  matches.sort((a, b) => b.score - a.score);
  return matches.slice(0, 5);
}

/**
 * Main entry point: process transcribed dictation text.
 *
 * Extracts medical entities from the text, matches them against all content
 * databases, and returns a comprehensive result with timing information.
 *
 * Falls back to keyword-only matching if the LLM is unavailable.
 *
 * @param text - Transcribed text from voice STT
 * @param language - Language hint; auto-detected if not provided
 * @returns Complete dictation processing result
 */
export async function processDictation(
  text: string,
  language?: 'en' | 'es',
): Promise<DictationResult> {
  const startTime = performance.now();

  if (!text || text.trim().length === 0) {
    return {
      originalText: text ?? '',
      language: language ?? 'es',
      entities: [],
      matches: [],
      processingTimeMs: performance.now() - startTime,
      aiEnhanced: false,
    };
  }

  const detectedLang = language ?? detectLanguage(text);

  // Extract entities (keyword + optional LLM)
  const entities = await extractMedicalEntities(text, detectedLang);

  // Determine if LLM was used by checking if any entity has confidence > 0.85
  // that wasn't from abbreviation matching (which also gives 0.85)
  let aiEnhanced = false;
  try {
    const { isOllamaAvailable } = await import('./ollama.js');
    aiEnhanced = await isOllamaAvailable();
  } catch {
    aiEnhanced = false;
  }

  // Match all entities against content databases in parallel
  const matchPromises = entities.map(entity => matchEntityToContent(entity));
  const matchResults = await Promise.all(matchPromises);

  // Flatten and deduplicate matches by matchedId
  const seenMatchIds = new Set<string>();
  const allMatches: DictationMatch[] = [];

  for (const entityMatches of matchResults) {
    for (const match of entityMatches) {
      // Create a composite key to avoid duplicate entries for the same
      // entity-to-database pair
      const key = `${match.entity.normalizedText}:${match.matchedId}`;
      if (!seenMatchIds.has(key)) {
        seenMatchIds.add(key);
        allMatches.push(match);
      }
    }
  }

  // Sort all matches by score
  allMatches.sort((a, b) => b.score - a.score);

  const processingTimeMs = performance.now() - startTime;

  return {
    originalText: text,
    language: detectedLang,
    entities,
    matches: allMatches,
    processingTimeMs,
    aiEnhanced,
  };
}
