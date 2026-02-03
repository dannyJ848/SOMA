/**
 * Clinical Reasoning Types
 *
 * Comprehensive data structures for clinical reasoning, differential diagnosis,
 * and decision support. Models physician-level medical understanding.
 */

// ============================================
// Symptom Types
// ============================================

/**
 * Temporal characteristics of symptom onset
 */
export type SymptomOnset =
  | 'sudden'        // Seconds to minutes
  | 'acute'         // Hours to days
  | 'subacute'      // Days to weeks
  | 'gradual'       // Weeks to months
  | 'chronic';      // Months to years

/**
 * Duration categories
 */
export type SymptomDuration =
  | 'momentary'     // Seconds
  | 'brief'         // Minutes
  | 'hours'         // Hours
  | 'days'          // Days
  | 'weeks'         // Weeks
  | 'persistent';   // Ongoing

/**
 * Severity scale
 */
export type SeverityLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * Symptom quality/character descriptors by category
 */
export interface SymptomQualities {
  pain?: PainQuality[];
  sensation?: SensationQuality[];
  discharge?: DischargeQuality[];
  motor?: MotorQuality[];
  cognitive?: CognitiveQuality[];
}

export type PainQuality =
  | 'sharp'
  | 'dull'
  | 'burning'
  | 'aching'
  | 'throbbing'
  | 'stabbing'
  | 'cramping'
  | 'pressure'
  | 'squeezing'
  | 'tearing'
  | 'shooting'
  | 'radiating'
  | 'crushing';

export type SensationQuality =
  | 'numbness'
  | 'tingling'
  | 'pins-and-needles'
  | 'burning'
  | 'coldness'
  | 'heaviness'
  | 'weakness'
  | 'itching';

export type DischargeQuality =
  | 'clear'
  | 'yellow'
  | 'green'
  | 'bloody'
  | 'purulent'
  | 'mucoid'
  | 'watery'
  | 'thick';

export type MotorQuality =
  | 'weakness'
  | 'paralysis'
  | 'tremor'
  | 'spasm'
  | 'rigidity'
  | 'ataxia'
  | 'fasciculation';

export type CognitiveQuality =
  | 'confusion'
  | 'memory-loss'
  | 'difficulty-concentrating'
  | 'word-finding-difficulty'
  | 'disorientation'
  | 'altered-consciousness';

/**
 * Pattern of symptom occurrence
 */
export type SymptomPattern =
  | 'constant'
  | 'intermittent'
  | 'waxing-waning'
  | 'episodic'
  | 'progressive'
  | 'positional'
  | 'activity-related'
  | 'time-of-day';

/**
 * Factors that modify symptom
 */
export interface SymptomModifiers {
  aggravatingFactors: string[];
  relievingFactors: string[];
  associatedSymptoms: string[];
  temporalPattern?: SymptomPattern;
  positionEffect?: 'better-lying' | 'better-sitting' | 'better-standing' | 'no-effect';
  activityEffect?: 'better-rest' | 'better-activity' | 'no-effect';
  foodEffect?: 'better-eating' | 'worse-eating' | 'no-effect';
}

/**
 * Anatomical location specification
 */
export interface AnatomicalLocation {
  bodyRegion: BodyRegion;
  side?: 'left' | 'right' | 'bilateral' | 'midline';
  specific?: string;
  radiation?: AnatomicalLocation[];
}

export type BodyRegion =
  | 'head'
  | 'face'
  | 'neck'
  | 'chest'
  | 'abdomen'
  | 'back'
  | 'pelvis'
  | 'upper-extremity'
  | 'lower-extremity'
  | 'skin'
  | 'generalized';

/**
 * Complete symptom representation
 */
export interface Symptom {
  id: string;
  name: string;
  description: string;
  category: SymptomCategory;
  location?: AnatomicalLocation;
  onset?: SymptomOnset;
  duration?: SymptomDuration;
  severity?: SeverityLevel;
  qualities?: SymptomQualities;
  modifiers?: SymptomModifiers;
  timestamp?: string;
}

export type SymptomCategory =
  | 'pain'
  | 'neurological'
  | 'respiratory'
  | 'cardiovascular'
  | 'gastrointestinal'
  | 'musculoskeletal'
  | 'dermatological'
  | 'urological'
  | 'gynecological'
  | 'psychiatric'
  | 'constitutional'
  | 'ent'
  | 'ophthalmological';

/**
 * Symptom input from user (simplified for collection)
 */
export interface SymptomInput {
  name: string;
  severity?: SeverityLevel;
  onset?: SymptomOnset;
  duration?: SymptomDuration;
  location?: Partial<AnatomicalLocation>;
  qualities?: Partial<SymptomQualities>;
  notes?: string;
}

// ============================================
// Condition/Diagnosis Types
// ============================================

/**
 * Medical condition/diagnosis
 */
export interface Condition {
  id: string;
  name: string;
  icdCode?: string;
  snomedCode?: string;
  category: ConditionCategory;
  description: string;

  // Epidemiology
  prevalence: PrevalenceLevel;
  incidence?: string;
  demographics: DemographicFactors;

  // Clinical features
  typicalPresentation: string;
  keySymptoms: KeySymptom[];
  diagnosticCriteria?: DiagnosticCriteria;

  // Urgency and red flags
  urgencyLevel: UrgencyLevel;
  redFlags: RedFlag[];

  // Related information
  differentialDiagnoses: string[];
  complications: string[];
  associatedConditions: string[];

  // For education
  pathophysiology?: string;
  etiology?: string[];
  riskFactors: RiskFactor[];
}

export type ConditionCategory =
  | 'infectious'
  | 'neoplastic'
  | 'autoimmune'
  | 'degenerative'
  | 'metabolic'
  | 'endocrine'
  | 'cardiovascular'
  | 'respiratory'
  | 'gastrointestinal'
  | 'neurological'
  | 'psychiatric'
  | 'musculoskeletal'
  | 'dermatological'
  | 'hematological'
  | 'renal'
  | 'genetic'
  | 'traumatic'
  | 'iatrogenic';

export type PrevalenceLevel =
  | 'very-common'    // >10%
  | 'common'         // 1-10%
  | 'uncommon'       // 0.1-1%
  | 'rare'           // 0.01-0.1%
  | 'very-rare';     // <0.01%

export type UrgencyLevel =
  | 'emergency'      // Life-threatening, immediate action
  | 'urgent'         // Needs attention within hours
  | 'semi-urgent'    // Needs attention within days
  | 'routine'        // Can wait for scheduled appointment
  | 'elective';      // Non-urgent, optional

/**
 * Key symptom for a condition with likelihood information
 */
export interface KeySymptom {
  symptomName: string;
  frequency: SymptomFrequency;
  sensitivity?: number;    // 0-1, probability of symptom given condition
  specificity?: number;    // 0-1, probability of no symptom given no condition
  likelihoodRatioPositive?: number;
  likelihoodRatioNegative?: number;
  notes?: string;
}

export type SymptomFrequency =
  | 'pathognomonic'  // Virtually always present, highly specific
  | 'very-common'    // >90%
  | 'common'         // 50-90%
  | 'frequent'       // 25-50%
  | 'occasional'     // 10-25%
  | 'rare';          // <10%

/**
 * Formal diagnostic criteria
 */
export interface DiagnosticCriteria {
  name: string;
  source: string;
  year?: number;
  majorCriteria?: string[];
  minorCriteria?: string[];
  requiredMajor?: number;
  requiredMinor?: number;
  requiredTests?: string[];
  exclusionCriteria?: string[];
}

// ============================================
// Red Flag Types
// ============================================

/**
 * Red flag - warning sign requiring immediate attention
 */
export interface RedFlag {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  concernedConditions: string[];
  urgency: UrgencyLevel;
  action: string;
  timeframe: string;
  rationale: string;
}

/**
 * Red flag pattern for detection
 */
export interface RedFlagPattern {
  id: string;
  name: string;
  category: RedFlagCategory;
  triggerSymptoms: SymptomTrigger[];
  combinationLogic: 'any' | 'all' | 'threshold';
  threshold?: number;
  demographicModifiers?: DemographicModifier[];
  urgency: UrgencyLevel;
  emergencyConditions: string[];
  guidance: RedFlagGuidance;
}

export type RedFlagCategory =
  | 'cardiovascular-emergency'
  | 'neurological-emergency'
  | 'respiratory-emergency'
  | 'sepsis'
  | 'hemorrhage'
  | 'anaphylaxis'
  | 'metabolic-emergency'
  | 'psychiatric-emergency'
  | 'trauma'
  | 'obstetric-emergency';

export interface SymptomTrigger {
  symptomName: string;
  required: boolean;
  characteristics?: Partial<Symptom>;
}

export interface DemographicModifier {
  factor: 'age' | 'sex' | 'pregnancy' | 'comorbidity';
  condition: string;
  multiplier: number;
}

export interface RedFlagGuidance {
  immediateAction: string;
  seekCare: string;
  doNotDo: string[];
  whyUrgent: string;
}

// ============================================
// Demographic & Risk Types
// ============================================

/**
 * Demographic factors affecting disease probability
 */
export interface DemographicFactors {
  typicalAgeRange?: [number, number];
  peakAge?: number;
  sexPredilection?: 'male' | 'female' | 'equal';
  sexRatio?: number;
  ethnicityFactors?: EthnicityFactor[];
  geographicFactors?: string[];
}

export interface EthnicityFactor {
  ethnicity: string;
  relativeRisk: number;
  notes?: string;
}

/**
 * Risk factor for a condition
 */
export interface RiskFactor {
  name: string;
  category: RiskFactorCategory;
  relativeRisk?: number;
  absoluteRiskIncrease?: number;
  modifiable: boolean;
  notes?: string;
}

export type RiskFactorCategory =
  | 'genetic'
  | 'lifestyle'
  | 'environmental'
  | 'medical-history'
  | 'medication'
  | 'occupational'
  | 'demographic';

/**
 * Patient demographic profile for risk calculation
 */
export interface PatientDemographics {
  age?: number;
  sex?: 'male' | 'female';
  ethnicity?: string;
  weight?: number;
  height?: number;
  bmi?: number;
  smokingStatus?: 'never' | 'former' | 'current';
  alcoholUse?: 'none' | 'light' | 'moderate' | 'heavy';
  exerciseLevel?: 'sedentary' | 'light' | 'moderate' | 'active';
  pregnant?: boolean;
  existingConditions?: string[];
  currentMedications?: string[];
  familyHistory?: FamilyHistoryItem[];
}

export interface FamilyHistoryItem {
  condition: string;
  relation: 'parent' | 'sibling' | 'grandparent' | 'aunt-uncle' | 'cousin';
  ageAtOnset?: number;
}

// ============================================
// Differential Diagnosis Types
// ============================================

/**
 * A possible diagnosis with probability
 */
export interface DifferentialDiagnosis {
  conditionId: string;
  conditionName: string;
  probability: number;         // 0-1
  confidence: ConfidenceLevel;
  matchingSymptoms: string[];
  missingKeySymptoms: string[];
  supportingFactors: string[];
  againstFactors: string[];
  urgency: UrgencyLevel;
  nextSteps: string[];
}

export type ConfidenceLevel =
  | 'high'       // Strong evidence
  | 'moderate'   // Good evidence
  | 'low'        // Limited evidence
  | 'uncertain'; // Need more information

/**
 * Complete differential diagnosis result
 */
export interface DifferentialDiagnosisResult {
  id: string;
  timestamp: string;
  inputSymptoms: SymptomInput[];
  patientDemographics?: PatientDemographics;

  // Results
  differentials: DifferentialDiagnosis[];
  mostLikely: DifferentialDiagnosis;
  mustNotMiss: DifferentialDiagnosis[];  // Dangerous possibilities

  // Red flags detected
  redFlagsDetected: RedFlagPattern[];
  overallUrgency: UrgencyLevel;

  // Reasoning
  reasoningChain: ReasoningStep[];
  questionsToAsk: ClarifyingQuestion[];
  recommendedTests: string[];

  // Meta
  modelUsed: string;
  processingTimeMs: number;
}

/**
 * Step in clinical reasoning
 */
export interface ReasoningStep {
  step: number;
  type: 'observation' | 'hypothesis' | 'evidence' | 'conclusion' | 'recommendation';
  content: string;
  supporting?: string[];
  confidence?: ConfidenceLevel;
}

/**
 * Question to clarify diagnosis
 */
export interface ClarifyingQuestion {
  question: string;
  purpose: string;
  relatedConditions: string[];
  priority: 'high' | 'medium' | 'low';
  expectedAnswerType: 'yes-no' | 'scale' | 'multiple-choice' | 'free-text';
  options?: string[];
}

// ============================================
// Symptom-Condition Mapping
// ============================================

/**
 * Mapping between symptom and condition with probabilities
 */
export interface SymptomConditionMapping {
  symptomId: string;
  symptomName: string;
  conditionId: string;
  conditionName: string;

  // Probabilities
  priorProbability: number;        // P(condition) - base rate
  sensitivity: number;              // P(symptom | condition)
  specificity: number;              // P(no symptom | no condition)
  positiveLikelihoodRatio: number; // sensitivity / (1 - specificity)
  negativeLikelihoodRatio: number; // (1 - sensitivity) / specificity

  // Modifiers based on symptom characteristics
  characteristicModifiers?: CharacteristicModifier[];
}

export interface CharacteristicModifier {
  characteristic: string;
  value: string;
  likelihoodMultiplier: number;
}

// ============================================
// Clinical Decision Tree Types
// ============================================

/**
 * Node in a clinical decision tree
 */
export interface DecisionTreeNode {
  id: string;
  type: 'question' | 'branch' | 'diagnosis' | 'action' | 'test';
  content: string;
  explanation?: string;

  // For questions
  question?: string;
  answerOptions?: DecisionTreeAnswer[];

  // For diagnoses
  diagnosisId?: string;
  confidence?: ConfidenceLevel;

  // For actions/tests
  actionType?: 'order-test' | 'refer' | 'treat' | 'monitor' | 'educate';
  actionDetails?: string;

  // Navigation
  children?: DecisionTreeNode[];
  parentId?: string;
}

export interface DecisionTreeAnswer {
  label: string;
  value: string;
  leadsTo: string;  // Node ID
  explanation?: string;
}

/**
 * Complete decision tree for a diagnostic pathway
 */
export interface ClinicalDecisionTree {
  id: string;
  name: string;
  description: string;
  category: string;
  targetConditions: string[];
  source?: string;
  evidenceLevel?: string;

  rootNode: DecisionTreeNode;
  nodes: Map<string, DecisionTreeNode>;

  // Metadata
  lastUpdated: string;
  version: string;
}

// ============================================
// Review of Systems Types
// ============================================

/**
 * Review of Systems structure
 */
export interface ReviewOfSystems {
  constitutional: ConstitutionalROS;
  heent: HEENTROS;
  cardiovascular: CardiovascularROS;
  respiratory: RespiratoryROS;
  gastrointestinal: GastrointestinalROS;
  genitourinary: GenitourinaryROS;
  musculoskeletal: MusculoskeletalROS;
  neurological: NeurologicalROS;
  psychiatric: PsychiatricROS;
  skin: SkinROS;
  hematologic: HematologicROS;
  endocrine: EndocrineROS;
}

export interface ConstitutionalROS {
  fever?: boolean;
  chills?: boolean;
  nightSweats?: boolean;
  weightLoss?: boolean;
  weightGain?: boolean;
  fatigue?: boolean;
  malaise?: boolean;
}

export interface HEENTROS {
  headache?: boolean;
  visionChanges?: boolean;
  hearingChanges?: boolean;
  earPain?: boolean;
  nasalCongestion?: boolean;
  soreThroat?: boolean;
  neckStiffness?: boolean;
  neckMass?: boolean;
}

export interface CardiovascularROS {
  chestPain?: boolean;
  palpitations?: boolean;
  dyspneaOnExertion?: boolean;
  orthopnea?: boolean;
  pnd?: boolean;
  edema?: boolean;
  syncope?: boolean;
  claudication?: boolean;
}

export interface RespiratoryROS {
  cough?: boolean;
  sputumProduction?: boolean;
  hemoptysis?: boolean;
  dyspnea?: boolean;
  wheezing?: boolean;
  pleuriticPain?: boolean;
}

export interface GastrointestinalROS {
  nausea?: boolean;
  vomiting?: boolean;
  diarrhea?: boolean;
  constipation?: boolean;
  abdominalPain?: boolean;
  bloodInStool?: boolean;
  melena?: boolean;
  dysphagia?: boolean;
  heartburn?: boolean;
  jaundice?: boolean;
}

export interface GenitourinaryROS {
  dysuria?: boolean;
  frequency?: boolean;
  urgency?: boolean;
  hematuria?: boolean;
  incontinence?: boolean;
  flankPain?: boolean;
  discharge?: boolean;
}

export interface MusculoskeletalROS {
  jointPain?: boolean;
  jointSwelling?: boolean;
  muscleWeakness?: boolean;
  musclePain?: boolean;
  backPain?: boolean;
  stiffness?: boolean;
}

export interface NeurologicalROS {
  headaches?: boolean;
  dizziness?: boolean;
  vertigo?: boolean;
  seizures?: boolean;
  tremor?: boolean;
  numbness?: boolean;
  tingling?: boolean;
  weakness?: boolean;
  gaitDisturbance?: boolean;
  memoryProblems?: boolean;
}

export interface PsychiatricROS {
  depression?: boolean;
  anxiety?: boolean;
  sleepDisturbance?: boolean;
  suicidalIdeation?: boolean;
  hallucinations?: boolean;
  moodSwings?: boolean;
}

export interface SkinROS {
  rash?: boolean;
  itching?: boolean;
  lesions?: boolean;
  colorChanges?: boolean;
  hairLoss?: boolean;
  nailChanges?: boolean;
}

export interface HematologicROS {
  easyBruising?: boolean;
  prolongedBleeding?: boolean;
  lymphadenopathy?: boolean;
}

export interface EndocrineROS {
  heatIntolerance?: boolean;
  coldIntolerance?: boolean;
  polyuria?: boolean;
  polydipsia?: boolean;
  polyphagia?: boolean;
}

