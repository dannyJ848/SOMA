/**
 * Differential Diagnosis Explorer Type Definitions
 *
 * Types for exploring differential diagnoses based on symptoms,
 * with anatomical visualization and clinical guidance.
 */

/**
 * Diagnosis category
 */
export type DiagnosisCategory =
  | 'cardiovascular'
  | 'respiratory'
  | 'gastrointestinal'
  | 'neurologic'
  | 'musculoskeletal'
  | 'infectious'
  | 'endocrine'
  | 'hematologic'
  | 'renal'
  | 'rheumatologic'
  | 'psychiatric'
  | 'dermatologic';

/**
 * Urgency level for seeking care
 */
export type CareUrgency =
  | 'emergency'
  | 'urgent'
  | 'soon'
  | 'routine'
  | 'self-care';

/**
 * Likelihood ranking
 */
export type LikelihoodRank = 'most-likely' | 'likely' | 'less-likely' | 'rare-but-serious';

/**
 * Differential diagnosis entry
 */
export interface DifferentialDiagnosis {
  diagnosisId: string;
  name: string;
  icdCode?: string;
  category: DiagnosisCategory;
  likelihood: LikelihoodRank;
  prevalence: string;
  pathophysiology: PathophysiologyDescription;
  affectedAnatomy: AffectedAnatomy[];
  clinicalFeatures: ClinicalFeatureSet;
  redFlags: AlarmSymptom[];
  diagnosticWorkup: DiagnosticWorkup;
  treatmentOverview: string;
  whenToSeekCare: CareGuidance;
  prognosis: string;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Pathophysiology description
 */
export interface PathophysiologyDescription {
  mechanism: string;
  progression: string[];
  riskFactors: string[];
  protectiveFactors?: string[];
}

/**
 * Affected anatomy for 3D highlighting
 */
export interface AffectedAnatomy {
  structureId: string;
  structureName: string;
  system: string;
  involvementType: 'primary' | 'secondary' | 'complication';
  highlightColor: string;
  pathologicChange: string;
}

/**
 * Clinical feature set
 */
export interface ClinicalFeatureSet {
  typicalPresentation: string;
  symptoms: SymptomFeature[];
  signs: PhysicalSign[];
  labFindings?: LabFinding[];
  imagingFindings?: ImagingFinding[];
}

/**
 * Symptom feature
 */
export interface SymptomFeature {
  symptom: string;
  frequency: 'always' | 'common' | 'sometimes' | 'rare';
  characteristicQuality?: string;
}

/**
 * Physical examination sign
 */
export interface PhysicalSign {
  sign: string;
  description: string;
  sensitivity?: string;
  specificity?: string;
}

/**
 * Lab finding
 */
export interface LabFinding {
  test: string;
  expectedResult: string;
  diagnosticValue: string;
}

/**
 * Imaging finding
 */
export interface ImagingFinding {
  modality: string;
  finding: string;
  sensitivity?: string;
}

/**
 * Alarm symptom / red flag
 */
export interface AlarmSymptom {
  symptom: string;
  concern: string;
  action: string;
  timeframe: string;
}

/**
 * Diagnostic workup
 */
export interface DiagnosticWorkup {
  firstLine: string[];
  secondLine?: string[];
  goldStandard?: string;
  differentiatingTests?: DifferentiatingTest[];
}

/**
 * Test that differentiates between diagnoses
 */
export interface DifferentiatingTest {
  test: string;
  positiveIn: string[];
  negativeIn: string[];
}

/**
 * Care guidance
 */
export interface CareGuidance {
  urgency: CareUrgency;
  setting: string;
  reasoning: string;
  immediateActions?: string[];
}

/**
 * Symptom-based differential list
 */
export interface SymptomDifferentialList {
  symptomId: string;
  symptomName: string;
  differentials: DifferentialEntry[];
  disclaimer: string;
}

/**
 * Differential entry in a list
 */
export interface DifferentialEntry {
  diagnosisId: string;
  rank: number;
  likelihood: LikelihoodRank;
  keyDistinguishingFeatures: string[];
  mustNotMiss: boolean;
}

/**
 * Differential explorer result
 */
export interface DifferentialExplorerResult {
  symptom: string;
  differentialList: DifferentialEntry[];
  selectedDiagnosis?: DifferentialDiagnosis;
  anatomyHighlights: AffectedAnatomy[];
  redFlagsPresent: AlarmSymptom[];
  recommendedAction: CareGuidance;
}

/**
 * User symptom input for differential generation
 */
export interface UserSymptomInput {
  primarySymptom: string;
  duration?: string;
  severity?: number;
  associatedSymptoms?: string[];
  aggravatingFactors?: string[];
  relievingFactors?: string[];
  medicalHistory?: string[];
  age?: number;
  sex?: 'male' | 'female';
}
