/**
 * Lab Results Interpreter - Type Definitions
 *
 * Comprehensive types for lab test interpretation including:
 * - Reference ranges by age, sex, and lab
 * - Multi-level explanations
 * - Pattern recognition
 * - Clinical interpretations
 */

// ============================================
// Basic Types
// ============================================

export type Sex = 'male' | 'female' | 'other';

export type AgeGroup =
  | 'neonate' // 0-28 days
  | 'infant' // 1-12 months
  | 'toddler' // 1-3 years
  | 'child' // 4-12 years
  | 'adolescent' // 13-17 years
  | 'adult' // 18-64 years
  | 'elderly'; // 65+ years

export type LabCategory =
  | 'cbc'
  | 'cmp'
  | 'lipid'
  | 'thyroid'
  | 'cardiac'
  | 'diabetes'
  | 'iron'
  | 'inflammatory'
  | 'urinalysis'
  | 'coagulation'
  | 'liver'
  | 'lft'
  | 'renal'
  | 'electrolytes'
  | 'hormones'
  | 'endocrine'
  | 'vitamins'
  | 'nutritional'
  | 'autoimmune'
  | 'infectious'
  | 'tumor-markers'
  | 'blood-gas'
  | 'specialty';

export type SpecimenType =
  | 'serum'
  | 'plasma'
  | 'whole-blood'
  | 'urine'
  | 'csf'
  | 'arterial-blood'
  | 'capillary-blood'
  | 'random-urine'
  | '24h-urine';

export type ResultStatus =
  | 'normal'
  | 'low'
  | 'high'
  | 'critical-low'
  | 'critical-high'
  | 'borderline-low'
  | 'borderline-high';

export type Urgency = 'routine' | 'soon' | 'urgent' | 'emergent';

export type TrendDirection = 'improving' | 'stable' | 'worsening' | 'fluctuating' | 'insufficient-data';

// ============================================
// Reference Ranges
// ============================================

export interface ReferenceRangeCondition {
  sex?: Sex;
  ageMin?: number;
  ageMax?: number;
  ageUnit?: 'days' | 'months' | 'years';
  pregnancy?: boolean;
  fasting?: boolean;
  trimester?: 1 | 2 | 3;
  menstrualPhase?: 'follicular' | 'ovulatory' | 'luteal' | 'menstrual';
  timeOfDay?: 'morning' | 'afternoon' | 'evening';
  special?: string;
}

export interface ReferenceRange {
  condition: ReferenceRangeCondition;
  low: number;
  high: number;
  unit: string;
  optimalLow?: number;
  optimalHigh?: number;
  criticalLow?: number;
  criticalHigh?: number;
  notes?: string;
  source?: string;
}

export interface LabReferenceRanges {
  testId: string;
  ranges: ReferenceRange[];
  defaultUnit: string;
  unitConversions?: { [fromUnit: string]: { factor: number; toUnit: string } };
}

// ============================================
// Lab Test Definition
// ============================================

export interface LabTestExplanation {
  /** Simple, 1-sentence explanation for anyone */
  simple: string;
  /** 2-3 sentence basic explanation */
  basic: string;
  /** Detailed explanation with physiology */
  detailed: string;
  /** Medical student level */
  medical: string;
  /** Physician/specialist level */
  expert: string;
}

export interface LabTestCause {
  cause: string;
  mechanism: string;
  frequency: 'common' | 'uncommon' | 'rare';
  severity: 'mild' | 'moderate' | 'severe' | 'variable';
  associatedFindings?: string[];
  clinicalContext?: string;
  conditionId?: string;
}

export interface LabTestInterpretation {
  generalMeaning: string;
  pathophysiology: string;
  commonCauses: LabTestCause[];
  uncommonCauses: LabTestCause[];
  severityLevels: SeverityLevel[];
  worryingFeatures: string[];
  reassuringFeatures?: string[];
  lifestyleFactors?: string[];
  medicationEffects?: MedicationEffect[];
  followUpTests: string[];
  questionsForDoctor: string[];
}

export interface SeverityLevel {
  level: 'borderline' | 'mild' | 'moderate' | 'severe' | 'critical';
  rangeDescription: string;
  clinicalSignificance: string;
  typicalCauses: string[];
  urgency: Urgency;
  action?: string;
}

export interface MedicationEffect {
  medication: string;
  medicationClass?: string;
  effect: 'increase' | 'decrease' | 'variable';
  mechanism?: string;
  clinicalRelevance: string;
}

export interface RelatedTest {
  testId: string;
  testName: string;
  relationship: 'confirms' | 'explains' | 'monitors' | 'complements' | 'contrasts' | 'calculates';
  whenToOrder: string;
  interpretationContext?: string;
}

export interface LabConditionLink {
  conditionId: string;
  conditionName: string;
  direction: 'elevated' | 'decreased' | 'variable';
  pattern?: string;
  sensitivity?: 'high' | 'moderate' | 'low';
  specificity?: 'high' | 'moderate' | 'low';
  notes?: string;
}

export interface AnatomyLink {
  organId: string;
  organName: string;
  relationship: 'produced-by' | 'cleared-by' | 'affected-by' | 'marker-for';
  description?: string;
}

export interface TemporalPattern {
  scenario: string;
  pattern: string;
  timeframe: string;
  clinicalUse: string;
}

export interface InterferingFactor {
  factor: string;
  effect: 'falsely-elevated' | 'falsely-decreased' | 'variable';
  mechanism: string;
  clinicalRelevance: string;
  mitigation?: string;
}

export interface CriticalValue {
  direction: 'high' | 'low';
  threshold: number;
  unit: string;
  immediateRisk: string;
  requiredAction: string;
  timeframe: string;
}

export interface LabTest {
  id: string;
  name: string;
  abbreviations: string[];
  loincCode?: string;
  category: LabCategory;
  specimen: SpecimenType;

  /** What this test measures */
  whatItMeasures: string;

  /** Multi-level explanations */
  explanations: LabTestExplanation;

  /** Reference ranges */
  referenceRanges: ReferenceRange[];

  /** Interpretation for high values */
  highInterpretation: LabTestInterpretation;

  /** Interpretation for low values */
  lowInterpretation: LabTestInterpretation;

  /** Critical values */
  criticalValues?: CriticalValue[];

  /** Related tests */
  relatedTests: RelatedTest[];

  /** Associated conditions */
  associatedConditions: LabConditionLink[];

  /** Links to anatomy */
  anatomyLinks: AnatomyLink[];

  /** Factors that can interfere with results */
  interferingFactors: InterferingFactor[];

  /** How values change over time in different scenarios */
  temporalPatterns?: TemporalPattern[];

  /** Clinical pearls for interpretation */
  clinicalPearls: string[];

  /** Questions patients commonly have */
  patientQuestions: string[];

  /** Key facts about this test */
  keyFacts: string[];
}

// ============================================
// Lab Panels
// ============================================

export interface LabPanel {
  id: string;
  name: string;
  abbreviation?: string;
  category: LabCategory;
  description: string;
  includedTests: string[];
  purpose: string;
  commonIndications: string[];
  overallInterpretation: string;
  limitations: string[];
  whenToExpand: string[];
}

// ============================================
// Pattern Recognition
// ============================================

export interface PatternFinding {
  testId: string;
  testName: string;
  direction: 'elevated' | 'decreased' | 'normal' | 'any';
  qualifier?: 'markedly' | 'mildly' | 'moderately';
  required: boolean;
}

export interface LabPattern {
  id: string;
  name: string;
  description: string;
  category: string;
  findings: PatternFinding[];
  suggestiveOf: string[];
  excludes?: string[];
  differentialDiagnosis: string[];
  nextSteps: string[];
  urgency: Urgency;
  educationalExplanation: string;
  clinicalPearl?: string;
}

// ============================================
// User Lab Result
// ============================================

export interface LabResultInput {
  testId: string;
  value: number;
  unit: string;
  collectedAt: string;
  fasting?: boolean;
  notes?: string;
}

export interface InterpretedLabResult {
  input: LabResultInput;
  test: LabTest;
  status: ResultStatus;
  percentDeviation?: number;
  referenceRange: ReferenceRange;
  interpretation: string;
  possibleCauses: LabTestCause[];
  severity: SeverityLevel | null;
  urgency: Urgency;
  suggestedFollowUp: string[];
  questionsForDoctor: string[];
  lifestyleFactors: string[];
  disclaimer: string;
}

export interface LabTrendPoint {
  date: string;
  value: number;
  unit: string;
  status: ResultStatus;
  context?: string;
}

export interface LabTrend {
  testId: string;
  testName: string;
  points: LabTrendPoint[];
  direction: TrendDirection;
  interpretation: string;
  significance: string;
  recommendations: string[];
}

export interface PanelAnalysisResult {
  panelId: string;
  panelName: string;
  results: InterpretedLabResult[];
  overallAssessment: string;
  detectedPatterns: DetectedPattern[];
  organSystemImplications: OrganImplication[];
  integratedInterpretation: string;
  priorityFollowUp: string[];
  questionsForDoctor: string[];
}

export interface DetectedPattern {
  pattern: LabPattern;
  confidence: 'high' | 'moderate' | 'possible';
  matchedFindings: string[];
  missingFindings?: string[];
  educationalExplanation: string;
  clinicalCorrelation: string;
}

export interface OrganImplication {
  organ: string;
  organId?: string;
  status: 'normal' | 'possibly-affected' | 'likely-affected' | 'significantly-affected';
  relevantTests: string[];
  interpretation: string;
  anatomyLink?: string;
}

// ============================================
// User Demographics for Interpretation
// ============================================

export interface UserDemographics {
  age: number;
  ageUnit: 'years' | 'months' | 'days';
  sex: Sex;
  pregnant?: boolean;
  trimester?: 1 | 2 | 3;
  medications?: string[];
  conditions?: string[];
}

// ============================================
// Simplified Lab Test for Store (internal use)
// ============================================

/**
 * Simplified lab test type used in the internal store.
 * This is separate from the full LabTest type to allow for
 * a more compact data representation.
 */
export interface StoreLabTest {
  id: string;
  name: string;
  abbreviation?: string;
  loincCode?: string;
  category: LabCategory;
  specimen: SpecimenType;
  description: string;
  primaryOrgans: string[];
  affectedSystems: BodySystem[];
  relatedPathways: string[];
  referenceRange: StoreReferenceRange;
  clinicalInterpretations: StoreClinicalInterpretation[];
  explanations: StoreLeveledExplanations;
  keyFacts: string[];
  relatedTests: string[];
}

export interface StoreReferenceRange {
  adult: {
    general?: { low: number; high: number; unit: string };
    male?: { low: number; high: number; unit: string };
    female?: { low: number; high: number; unit: string };
  };
  criticalLow?: number;
  criticalHigh?: number;
  notes?: string;
}

export interface StoreClinicalInterpretation {
  direction: 'high' | 'low';
  conditions: string[];
  additionalTests?: string[];
  urgency?: string;
}

export interface StoreLeveledExplanations {
  level1: string;
  level2: string;
  level3: string;
  level4: string;
  level5: string;
}

/**
 * Simplified lab panel type for the store.
 */
export interface StoreLabPanel {
  id: string;
  name: string;
  abbreviation?: string;
  description: string;
  tests: string[];
  commonIndications: string[];
  primaryOrgans: string[];
  affectedSystems: BodySystem[];
}

// ============================================
// Body Systems and Organ Mappings
// ============================================

export type BodySystem =
  | 'cardiovascular'
  | 'respiratory'
  | 'hematologic'
  | 'hepatic'
  | 'renal'
  | 'endocrine'
  | 'neurological'
  | 'musculoskeletal'
  | 'immune'
  | 'gastrointestinal';

export interface OrganLabMapping {
  organId: string;
  organName: string;
  primaryLabs: string[];
  secondaryLabs: string[];
  functionTests: string[];
}

// ============================================
// Lab Statistics
// ============================================

export interface LabStatistics {
  totalTests: number;
  totalPanels: number;
  totalPatterns?: number;
  categoryCounts: Record<LabCategory, number>;
  lastUpdated?: string;
}
