/**
 * Biological Self - Core Type Definitions
 *
 * These types define the structure of a user's health data model.
 * All data is stored locally and encrypted.
 */

// ============================================================================
// Core Identity
// ============================================================================

export interface BiologicalSelf {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;

  // Demographics & basics
  demographics: Demographics;

  // Medical history
  conditions: Condition[];
  medications: Medication[];
  allergies: Allergy[];
  surgicalHistory: Surgery[];
  familyHistory: FamilyHistoryItem[];

  // Clinical data
  labResults: LabResult[];
  vitalSigns: VitalSign[];
  imaging: ImagingReport[];

  // Neurocognitive testing (longitudinal)
  neuropsychEvaluations: NeuropsychologicalEvaluation[];

  // Genomics (optional)
  pharmacogenomics?: PharmacogenomicProfile;
  geneticMarkers?: GeneticMarker[];

  // Lifestyle
  lifestyle: LifestyleFactors;

  // Wearable data (Whoop, etc.)
  whoopCycles: WhoopCycle[];
  whoopWorkouts: WhoopWorkout[];

  // Apple Health data
  appleHealthDailySummaries: AppleHealthDailySummary[];
  appleHealthWorkouts: AppleHealthWorkout[];

  // User preferences
  settings: UserSettings;
}

// ============================================================================
// Demographics
// ============================================================================

export interface Demographics {
  birthYear?: number;  // Not full DOB for privacy
  biologicalSex?: 'male' | 'female' | 'intersex' | 'unknown';
  height?: Measurement;
  weight?: Measurement;
  bloodType?: string;
  ethnicity?: string[];  // Can affect drug metabolism, disease risk
}

export interface Measurement {
  value: number;
  unit: string;
  recordedAt: Date;
}

// ============================================================================
// Conditions
// ============================================================================

export interface Condition {
  id: string;
  name: string;
  icdCode?: string;  // ICD-10 code if known
  snomedCode?: string;  // SNOMED CT code if known

  status: 'active' | 'resolved' | 'chronic' | 'in-remission';
  severity?: 'mild' | 'moderate' | 'severe';

  diagnosedDate?: Date;
  resolvedDate?: Date;
  diagnosedBy?: string;  // Type of provider, not name

  notes?: string;
  relatedConditions?: string[];  // IDs of related conditions

  createdAt: Date;
  updatedAt: Date;
}

// ============================================================================
// Medications
// ============================================================================

export interface Medication {
  id: string;
  name: string;
  genericName?: string;
  rxNormCode?: string;

  status: 'current' | 'past' | 'as-needed';

  dosage?: Dosage;
  route?: 'oral' | 'topical' | 'injection' | 'inhaled' | 'other';
  frequency?: string;  // e.g., "twice daily", "as needed"

  startDate?: Date;
  endDate?: Date;
  prescribedFor?: string;  // Condition ID or description

  sideEffectsExperienced?: string[];
  effectiveness?: 'very-effective' | 'somewhat-effective' | 'not-effective' | 'unknown';

  notes?: string;

  createdAt: Date;
  updatedAt: Date;
}

export interface Dosage {
  amount: number;
  unit: string;  // mg, ml, etc.
}

// ============================================================================
// Allergies
// ============================================================================

export interface Allergy {
  id: string;
  allergen: string;
  type: 'drug' | 'food' | 'environmental' | 'other';

  severity: 'mild' | 'moderate' | 'severe' | 'life-threatening';
  reactions: string[];  // e.g., ["hives", "anaphylaxis"]

  confirmedBy?: 'self-reported' | 'physician-diagnosed' | 'allergy-test';
  confirmedDate?: Date;

  notes?: string;

  createdAt: Date;
  updatedAt: Date;
}

// ============================================================================
// Surgical History
// ============================================================================

export interface Surgery {
  id: string;
  procedure: string;
  cptCode?: string;

  date?: Date;
  ageAtSurgery?: number;  // Alternative if exact date unknown

  reason?: string;
  outcome?: string;
  complications?: string[];
  hospital?: string;  // General location, not specific for privacy

  notes?: string;

  createdAt: Date;
  updatedAt: Date;
}

// ============================================================================
// Family History
// ============================================================================

export interface FamilyHistoryItem {
  id: string;
  condition: string;

  relationship: 'mother' | 'father' | 'sibling' | 'grandparent' |
                'aunt-uncle' | 'cousin' | 'child' | 'other';
  side?: 'maternal' | 'paternal' | 'both' | 'unknown';

  ageAtOnset?: number;
  ageAtDeath?: number;
  causeOfDeath?: boolean;  // Was this condition the cause of death?

  notes?: string;

  createdAt: Date;
  updatedAt: Date;
}

// ============================================================================
// Lab Results
// ============================================================================

export interface LabResult {
  id: string;
  testName: string;
  loincCode?: string;  // LOINC code for standardization

  value: number | string;
  unit?: string;
  referenceRange?: ReferenceRange;

  status?: 'normal' | 'abnormal-low' | 'abnormal-high' | 'critical';

  collectedAt: Date;
  reportedAt?: Date;

  orderingProvider?: string;  // Type, not name
  lab?: string;  // General, not specific

  notes?: string;

  createdAt: Date;
  updatedAt: Date;
}

export interface ReferenceRange {
  low?: number;
  high?: number;
  text?: string;  // For non-numeric ranges
}

// ============================================================================
// Vital Signs
// ============================================================================

export interface VitalSign {
  id: string;
  type: 'blood-pressure' | 'heart-rate' | 'respiratory-rate' |
        'temperature' | 'oxygen-saturation' | 'weight' | 'glucose' |
        'hrv' | 'other';

  value: number | BloodPressure;
  unit: string;

  recordedAt: Date;
  source?: 'manual' | 'wearable' | 'clinical';
  device?: string;

  notes?: string;

  createdAt: Date;
}

export interface BloodPressure {
  systolic: number;
  diastolic: number;
}

// ============================================================================
// Imaging Reports
// ============================================================================

export interface ImagingReport {
  id: string;
  type: 'x-ray' | 'ct' | 'mri' | 'ultrasound' | 'pet' | 'other';
  bodyPart: string;

  date: Date;
  indication?: string;  // Why was it ordered

  findings?: string;  // Summary of findings
  impression?: string;  // Radiologist conclusion

  notes?: string;

  createdAt: Date;
  updatedAt: Date;
}

// ============================================================================
// Pharmacogenomics
// ============================================================================

export interface PharmacogenomicProfile {
  id: string;
  source: string;  // e.g., "Quest Diagnostics", "23andMe", "Genomind"
  labOrderCode?: string;  // e.g., "94769" for Quest PGx panel
  testDate: Date;
  reportDate?: Date;

  // Specimen info
  specimenType?: string;  // e.g., "Buccal Swab", "Blood"
  specimenId?: string;

  // Gene results
  genes: GeneVariant[];

  // Drug guidance organized by recommendation category
  drugGuidance: DrugGuidance[];

  notes?: string;

  createdAt: Date;
  updatedAt: Date;
}

export interface GeneVariant {
  gene: string;  // e.g., "CYP2D6", "CYP2C19", "VKORC1"
  genotype: string;  // e.g., "*1/*17", "421C>A A/A", "c.665C>T C/T"
  phenotype: string;  // e.g., "Rapid Metabolizer", "Poor Function", "Normal"

  // Clinical significance
  clinicalSignificance?: 'normal' | 'actionable' | 'informative';

  // Alleles tested for this gene
  allelesTested?: string[];  // e.g., ["*1", "*2", "*3", "*4", "*17"] for CYP2C19

  // Gene function category
  functionCategory?: 'normal' | 'increased' | 'decreased' | 'poor' | 'rapid' | 'ultrarapid' | 'intermediate';

  // Associated drug categories
  affectedDrugCategories?: string[];  // e.g., ["SSRIs", "Proton Pump Inhibitors", "Antifungals"]

  // Additional notes from the report
  notes?: string;
}

export interface DrugGuidance {
  drugName: string;
  genericName?: string;
  drugClass: string;  // e.g., "Antidepressants", "Anticoagulants", "Statins"

  // Recommendation category
  recommendation: 'consider-alternatives' | 'proceed-with-caution' | 'use-as-directed';

  // Which genes affect this drug
  affectedByGenes: string[];  // e.g., ["CYP2C19", "CYP2D6"]

  // Specific guidance text
  guidanceText?: string;

  // Risk level
  riskLevel?: 'high' | 'moderate' | 'low' | 'standard';
}

export interface GeneticMarker {
  id: string;
  rsid?: string;  // e.g., "rs1234567"
  gene?: string;
  variant: string;
  significance?: string;

  createdAt: Date;
}

// ============================================================================
// Neurocognitive Testing
// ============================================================================

export interface NeuropsychologicalEvaluation {
  id: string;
  evaluationDate: Date;
  ageAtTesting: string;  // e.g., "27 years, 7 months"

  // Provider info
  provider: string;  // e.g., "Clinical Psychology Services"
  psychologist: string;
  technician?: string;

  // Referral
  referralReason: string;
  referralSource?: string;

  // Medications at time of testing (important for longitudinal comparison)
  medicationsAtTesting: MedicationAtTesting[];

  // Test batteries administered
  testsGiven: string[];

  // Results by battery
  nabResults?: NABResults;
  waisResults?: WAISResults;
  dkefsResults?: DKEFSResults;
  cptResults?: CPTResults;

  // Symptom inventories
  beckDepression?: SymptomInventoryScore;
  beckAnxiety?: SymptomInventoryScore;

  // Validity measures
  tommResults?: TOMMResults;
  paiValidity?: PAIValidity;

  // Diagnoses
  diagnoses: CognitiveDiagnosis[];

  // Clinical conclusions
  conclusions: string;
  recommendations: string[];

  // Overall cognitive level
  overallCognitiveLevel: 'impaired' | 'borderline' | 'low-average' | 'average' |
                         'above-average' | 'high-average' | 'superior' | 'very-superior';

  notes?: string;

  createdAt: Date;
  updatedAt: Date;
}

export interface MedicationAtTesting {
  name: string;
  dosage: string;  // e.g., "80mg"
}

// NAB - Neuropsychological Assessment Battery
export interface NABResults {
  form: string;  // e.g., "Form 1"
  indices: IndexScore[];
  subtests: SubtestScore[];
}

// WAIS-IV - Wechsler Adult Intelligence Scale
export interface WAISResults {
  version: string;  // e.g., "WAIS-IV"
  indices: IndexScore[];
  subtests: SubtestScore[];
}

// D-KEFS - Delis-Kaplan Executive Function System
export interface DKEFSResults {
  colorWordInterference: SubtestScore[];
  towerTest?: SubtestScore;
}

// CPT-3 - Conners Continuous Performance Test
export interface CPTResults {
  version: string;  // e.g., "CPT-3"
  measures: CPTMeasure[];
  atypicalTScoreCount: number;
  adhdLikelihood: 'low' | 'moderate' | 'high';
  indicatedIssues: CPTIndicatedIssue[];
}

export interface CPTMeasure {
  category: 'detectability' | 'errors' | 'reaction-time';
  measureName: string;  // e.g., "d'", "Omissions", "Commissions", "HRT", "HRT SD"
  tScore: number;
}

export interface CPTIndicatedIssue {
  issue: 'inattentiveness' | 'impulsivity' | 'sustained-attention' | 'vigilance';
  indication: 'none' | 'some' | 'strong';
}

// Index/Composite Scores (used by NAB, WAIS-IV, etc.)
export interface IndexScore {
  indexName: string;  // e.g., "Attention Index", "Verbal Comprehension"
  abbreviation?: string;  // e.g., "ATT", "VCI"
  standardScore: number;
  percentileRank: number;
  confidenceInterval?: {
    low: number;
    high: number;
    level: number;  // e.g., 95 for 95% CI
  };
  interpretiveCategory: InterpretiveCategory;
}

export interface SubtestScore {
  subtestName: string;
  category?: string;  // e.g., "Attention", "Language", "Memory"
  scaledScore?: number;
  tScore?: number;
  percentileRank?: number;
  interpretiveCategory: InterpretiveCategory;
}

export type InterpretiveCategory =
  | 'severely-impaired'
  | 'moderately-impaired'
  | 'mildly-impaired'
  | 'borderline'
  | 'below-average'
  | 'low-average'
  | 'average'
  | 'above-average'
  | 'high-average'
  | 'superior'
  | 'very-superior';

// Beck Depression/Anxiety Inventories
export interface SymptomInventoryScore {
  inventoryName: string;  // e.g., "BDI-II", "BAI"
  score: number;
  severity: 'none' | 'minimal' | 'mild' | 'moderate' | 'severe';
  reportedSymptoms?: string[];
}

// TOMM - Test of Memory Malingering
export interface TOMMResults {
  trial1: number;
  trial2: number;
  retentionTrial?: number;
  interpretation: 'valid' | 'invalid' | 'questionable';
}

// PAI - Personality Assessment Inventory
export interface PAIValidity {
  isValid: boolean;
  invalidReason?: string;
  incompleteItems?: number;
  infScale?: number;  // Infrequency scale
}

export interface CognitiveDiagnosis {
  diagnosis: string;
  icdCode?: string;
  dsmCode?: string;
  severity?: 'mild' | 'moderate' | 'severe';
  presentation?: string;  // e.g., "Combined presentation" for ADHD
}

// ============================================================================
// Whoop Wearable Data
// ============================================================================

export interface WhoopCycle {
  id: string;
  cycleStart: Date;
  cycleEnd?: Date;
  timezone: string;

  // Recovery metrics
  recoveryScore?: number;  // 0-100%
  restingHeartRate?: number;  // bpm
  hrv?: number;  // ms (RMSSD)
  skinTemp?: number;  // celsius
  bloodOxygen?: number;  // %

  // Strain metrics
  dayStrain?: number;  // 0-21 scale
  energyBurned?: number;  // calories
  maxHR?: number;  // bpm
  avgHR?: number;  // bpm

  // Sleep metrics (embedded in cycle)
  sleepOnset?: Date;
  wakeOnset?: Date;
  sleepPerformance?: number;  // %
  respiratoryRate?: number;  // rpm
  asleepDuration?: number;  // minutes
  inBedDuration?: number;  // minutes
  lightSleepDuration?: number;  // minutes
  deepSleepDuration?: number;  // minutes (SWS)
  remSleepDuration?: number;  // minutes
  awakeDuration?: number;  // minutes
  sleepNeed?: number;  // minutes
  sleepDebt?: number;  // minutes
  sleepEfficiency?: number;  // %
  sleepConsistency?: number;  // %

  createdAt: Date;
}

export interface WhoopWorkout {
  id: string;
  cycleStart: Date;
  cycleEnd?: Date;
  timezone: string;

  workoutStart: Date;
  workoutEnd: Date;
  duration: number;  // minutes

  activityName: string;
  activityStrain: number;  // 0-21 scale
  energyBurned?: number;  // calories

  maxHR?: number;  // bpm
  avgHR?: number;  // bpm

  // HR zone distribution (%)
  hrZone1?: number;
  hrZone2?: number;
  hrZone3?: number;
  hrZone4?: number;
  hrZone5?: number;

  gpsEnabled: boolean;

  createdAt: Date;
}

// ============================================================================
// Apple Health Data
// ============================================================================

export interface AppleHealthDailySummary {
  id: string;
  date: Date;  // The day this summary represents

  // Activity
  stepCount?: number;
  distanceWalkingRunning?: number;  // meters
  flightsClimbed?: number;
  activeEnergyBurned?: number;  // kcal
  basalEnergyBurned?: number;  // kcal

  // Heart
  restingHeartRate?: number;  // bpm
  heartRateAvg?: number;  // bpm (average of all readings)
  heartRateMin?: number;  // bpm
  heartRateMax?: number;  // bpm
  bloodOxygen?: number;  // % (average if multiple readings)

  // Sleep (from Apple's sleep analysis)
  sleepInBed?: number;  // minutes
  sleepAsleep?: number;  // minutes
  sleepAwake?: number;  // minutes
  sleepCore?: number;  // minutes (light sleep)
  sleepDeep?: number;  // minutes
  sleepREM?: number;  // minutes

  // Body measurements (if recorded that day)
  weight?: number;  // kg
  bodyFatPercentage?: number;

  // Other
  respiratoryRate?: number;  // breaths per minute

  createdAt: Date;
}

export interface AppleHealthWorkout {
  id: string;
  workoutType: string;  // e.g., "Running", "Walking", "Strength Training"
  startDate: Date;
  endDate: Date;
  duration: number;  // minutes

  // Metrics
  totalDistance?: number;  // meters
  totalEnergyBurned?: number;  // kcal
  avgHeartRate?: number;  // bpm
  maxHeartRate?: number;  // bpm

  sourceName: string;  // e.g., "Apple Watch", "Whoop"

  createdAt: Date;
}

// ============================================================================
// Lifestyle Factors
// ============================================================================

export interface LifestyleFactors {
  smoking?: SmokingStatus;
  alcohol?: AlcoholUse;
  exercise?: ExerciseLevel;
  diet?: DietType[];
  sleep?: SleepPattern;
  occupation?: string;
  stressLevel?: 'low' | 'moderate' | 'high' | 'severe';
}

export interface SmokingStatus {
  status: 'never' | 'former' | 'current';
  quitDate?: Date;
  packsPerDay?: number;
  yearsSmoked?: number;
}

export interface AlcoholUse {
  status: 'none' | 'occasional' | 'moderate' | 'heavy';
  drinksPerWeek?: number;
}

export interface ExerciseLevel {
  frequency: 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
  minutesPerWeek?: number;
  types?: string[];
}

export interface SleepPattern {
  averageHours?: number;
  quality?: 'poor' | 'fair' | 'good' | 'excellent';
  disorders?: string[];  // e.g., "sleep apnea", "insomnia"
}

export type DietType = 'omnivore' | 'vegetarian' | 'vegan' | 'pescatarian' |
                       'keto' | 'paleo' | 'mediterranean' | 'gluten-free' |
                       'dairy-free' | 'low-sodium' | 'diabetic' | 'other';

// ============================================================================
// User Settings
// ============================================================================

export interface UserSettings {
  // Explanation preferences
  defaultDepthLevel: DepthLevel;
  preferredLanguage: string;

  // Privacy preferences
  dataRetentionDays?: number;  // Auto-delete old data after N days

  // Display preferences
  dateFormat: 'us' | 'iso' | 'european';
  unitSystem: 'metric' | 'imperial';
}

export type DepthLevel = 1 | 2 | 3 | 4 | 5 | 6;

export const DEPTH_LEVEL_NAMES: Record<DepthLevel, string> = {
  1: 'Foundation (8th grade)',
  2: 'Developing (10th grade)',
  3: 'Standard (12th grade)',
  4: 'Advanced (College)',
  5: 'Expert (Graduate)',
  6: 'Clinical (Physician)',
};

// ============================================================================
// Utility Types
// ============================================================================

export type BiologicalSelfSection =
  | 'demographics'
  | 'conditions'
  | 'medications'
  | 'allergies'
  | 'surgicalHistory'
  | 'familyHistory'
  | 'labResults'
  | 'vitalSigns'
  | 'imaging'
  | 'pharmacogenomics'
  | 'geneticMarkers'
  | 'lifestyle';

export interface SearchableEntity {
  id: string;
  type: BiologicalSelfSection;
  searchText: string;
  data: unknown;
}
