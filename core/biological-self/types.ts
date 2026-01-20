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

  // Genomics (optional)
  pharmacogenomics?: PharmacogenomicProfile;
  geneticMarkers?: GeneticMarker[];

  // Lifestyle
  lifestyle: LifestyleFactors;

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
  source?: string;  // e.g., "23andMe", "clinical lab"
  testDate?: Date;

  genes: GeneVariant[];
}

export interface GeneVariant {
  gene: string;  // e.g., "CYP2D6", "CYP2C19"
  variant?: string;
  phenotype?: string;  // e.g., "rapid metabolizer", "poor metabolizer"
  implications?: string[];  // Drug implications
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
