/**
 * Lab Interpretation Types
 *
 * Comprehensive types for understanding laboratory tests:
 * what they measure, what abnormalities mean, and how to interpret panels.
 */

// ============================================
// Lab Test Classification
// ============================================

export type LabCategory =
  | 'hematology'
  | 'chemistry'
  | 'liver'
  | 'renal'
  | 'cardiac'
  | 'endocrine'
  | 'lipid'
  | 'coagulation'
  | 'urinalysis'
  | 'inflammatory'
  | 'infectious'
  | 'tumor-markers'
  | 'vitamins-minerals'
  | 'blood-gas'
  | 'autoimmune';

export type SpecimenType =
  | 'serum'
  | 'plasma'
  | 'whole-blood'
  | 'urine'
  | 'csf'
  | 'synovial-fluid'
  | 'arterial-blood'
  | 'venous-blood';

export type ResultType =
  | 'numeric'
  | 'qualitative'
  | 'semi-quantitative'
  | 'ratio'
  | 'calculated';

// ============================================
// Core Lab Test Education
// ============================================

/**
 * Educational content for a single lab test
 */
export interface LabTestEducation {
  id: string;
  name: string;
  abbreviations: string[];
  category: LabCategory;
  specimen: SpecimenType;
  resultType: ResultType;

  /** Plain language: what does this test measure? */
  whatItMeasures: string;

  /** The physiology behind this marker */
  physiologicalBasis: PhysiologicalBasis;

  /** Reference ranges with demographics */
  referenceRanges: ReferenceRange[];

  /** What high values mean */
  elevatedInterpretation: InterpretationEducation;

  /** What low values mean */
  decreasedInterpretation: InterpretationEducation;

  /** Critical values requiring immediate attention */
  criticalValues?: CriticalValue[];

  /** Related tests to consider */
  relatedTests: RelatedTest[];

  /** Conditions commonly associated */
  associatedConditions: LabConditionAssociation[];

  /** Factors affecting results */
  interferingFactors: InterferingFactor[];

  /** How results change over time in disease */
  temporalPatterns: TemporalPattern[];

  /** Clinical pearls for interpretation */
  clinicalPearls: string[];

  /** Questions to help understand the result */
  patientQuestions: string[];
}

/**
 * The biology behind what a test measures
 */
export interface PhysiologicalBasis {
  /** What substance/cell/marker is being measured */
  analyte: string;

  /** Where it comes from */
  source: string;

  /** Its normal function */
  normalFunction: string;

  /** How it's regulated */
  regulation: string;

  /** How body clears/processes it */
  clearance: string;

  /** Organs involved in production/clearance */
  involvedOrgans: string[];

  /** Connection to metabolic pathways */
  metabolicPathways: string[];
}

/**
 * Reference ranges with demographic specificity
 */
export interface ReferenceRange {
  population: PopulationGroup;
  lowValue: number;
  highValue: number;
  unit: string;
  notes?: string;
}

export interface PopulationGroup {
  sex?: 'male' | 'female' | 'all';
  ageMin?: number;
  ageMax?: number;
  ageUnit?: 'years' | 'months' | 'days';
  pregnancy?: boolean;
  fasting?: boolean;
  special?: string;
}

/**
 * Educational content for abnormal results
 */
export interface InterpretationEducation {
  /** What this generally indicates */
  generalMeaning: string;

  /** Detailed pathophysiological explanation */
  pathophysiology: string;

  /** Categories of causes */
  causeCategories: CauseCategory[];

  /** Most common causes in clinical practice */
  commonCauses: LabCause[];

  /** Less common but important causes */
  lessCauses: LabCause[];

  /** Severity assessment guidance */
  severityGuidance: SeverityGuidance[];

  /** When to be concerned */
  worryingFeatures: string[];

  /** Follow-up tests to consider */
  followUpTests: string[];

  /** What questions to ask provider */
  questionsForDoctor: string[];
}

export interface CauseCategory {
  category: string;
  description: string;
  examples: string[];
}

export interface LabCause {
  cause: string;
  mechanism: string;
  typicalLevel: 'mild' | 'moderate' | 'severe' | 'variable';
  associatedFindings: string[];
  clinicalContext: string;
}

export interface SeverityGuidance {
  level: 'mild' | 'moderate' | 'severe' | 'critical';
  range: string;
  clinicalSignificance: string;
  typicalCauses: string[];
  urgency: 'routine' | 'soon' | 'urgent' | 'emergent';
}

/**
 * Critical values that need immediate attention
 */
export interface CriticalValue {
  direction: 'high' | 'low';
  threshold: number;
  unit: string;
  immediateRisk: string;
  requiredAction: string;
  timeframe: string;
}

/**
 * Related tests for comprehensive evaluation
 */
export interface RelatedTest {
  testId: string;
  testName: string;
  relationship: 'confirms' | 'explains' | 'monitors' | 'complements' | 'contrasts';
  whenToOrder: string;
  interpretationContext: string;
}

/**
 * Conditions associated with abnormal values
 */
export interface LabConditionAssociation {
  condition: string;
  conditionId?: string;
  direction: 'elevated' | 'decreased' | 'variable';
  typicalPattern: string;
  sensitivity: 'high' | 'moderate' | 'low';
  specificity: 'high' | 'moderate' | 'low';
  notes: string;
}

/**
 * Factors that can affect test results
 */
export interface InterferingFactor {
  factor: string;
  effect: 'falsely-elevated' | 'falsely-decreased' | 'variable';
  mechanism: string;
  clinicalRelevance: string;
  mitigation: string;
}

/**
 * How results change over time
 */
export interface TemporalPattern {
  scenario: string;
  pattern: string;
  timeframe: string;
  clinicalUse: string;
}

// ============================================
// Lab Panels (Groups of Tests)
// ============================================

/**
 * Educational content for a lab panel
 */
export interface LabPanelEducation {
  id: string;
  name: string;
  abbreviation: string;
  category: LabCategory;

  /** Why this panel is ordered */
  purpose: string;

  /** Tests included */
  includedTests: string[];

  /** What the panel tells you overall */
  overallInterpretation: string;

  /** Pattern recognition within panel */
  patterns: PanelPattern[];

  /** Common clinical scenarios */
  clinicalScenarios: PanelScenario[];

  /** Limitations of this panel */
  limitations: string[];

  /** When to order additional tests */
  whenToExpand: string[];
}

/**
 * Recognizable patterns within a lab panel
 */
export interface PanelPattern {
  name: string;
  description: string;
  findings: PatternFinding[];
  suggestiveOf: string[];
  nextSteps: string[];
  educationalContext: string;
}

export interface PatternFinding {
  test: string;
  direction: 'elevated' | 'decreased' | 'normal';
  qualifier?: string;
}

/**
 * Clinical scenarios with expected panel results
 */
export interface PanelScenario {
  scenario: string;
  clinicalContext: string;
  expectedResults: ExpectedResult[];
  interpretation: string;
  teaching: string;
}

export interface ExpectedResult {
  test: string;
  expected: 'elevated' | 'decreased' | 'normal' | 'variable';
  rationale: string;
}

// ============================================
// Lab Result Analysis
// ============================================

/**
 * Analysis of a user's lab result
 */
export interface LabResultAnalysis {
  testId: string;
  testName: string;
  value: number;
  unit: string;
  referenceRange: ReferenceRange;

  /** Is it normal, elevated, or decreased? */
  status: 'normal' | 'elevated' | 'decreased' | 'critical-high' | 'critical-low';

  /** How abnormal is it? */
  severity: 'normal' | 'borderline' | 'mild' | 'moderate' | 'severe' | 'critical';

  /** Percent deviation from normal */
  deviationPercent?: number;

  /** Educational interpretation */
  interpretation: string;

  /** Possible explanations */
  possibleCauses: string[];

  /** Context-specific considerations */
  considerations: string[];

  /** Suggested follow-up */
  suggestedFollowUp: string[];

  /** Red flags to discuss with doctor */
  redFlags: string[];

  /** Disclaimer */
  disclaimer: string;
}

/**
 * Multi-test pattern analysis
 */
export interface PanelAnalysis {
  panelId: string;
  panelName: string;
  results: LabResultAnalysis[];

  /** Overall assessment */
  overallAssessment: string;

  /** Detected patterns */
  detectedPatterns: DetectedPattern[];

  /** Organ system implications */
  organSystemImplications: OrganSystemImplication[];

  /** Integrated interpretation */
  integratedInterpretation: string;

  /** Priority follow-up */
  priorityFollowUp: string[];

  /** Questions for your doctor */
  questionsForDoctor: string[];
}

export interface DetectedPattern {
  pattern: string;
  confidence: 'high' | 'moderate' | 'possible';
  findings: string[];
  educationalExplanation: string;
  clinicalCorrelation: string;
}

export interface OrganSystemImplication {
  system: string;
  status: 'normal' | 'possibly-affected' | 'likely-affected';
  relevantTests: string[];
  interpretation: string;
}

// ============================================
// Trending and Monitoring
// ============================================

/**
 * Tracking lab values over time
 */
export interface LabTrend {
  testId: string;
  testName: string;
  values: TrendPoint[];
  trend: 'improving' | 'stable' | 'worsening' | 'fluctuating' | 'insufficient-data';
  interpretation: string;
  significance: string;
  recommendations: string[];
}

export interface TrendPoint {
  date: string;
  value: number;
  unit: string;
  status: 'normal' | 'elevated' | 'decreased';
  context?: string;
}

// ============================================
// Lab Learning
// ============================================

/**
 * Learning module for lab interpretation
 */
export interface LabLearningModule {
  id: string;
  title: string;
  category: LabCategory;
  objectives: string[];

  /** Core concepts to understand */
  concepts: LabConcept[];

  /** Tests covered */
  testsIncluded: string[];

  /** Case-based learning */
  cases: LabCase[];

  /** Review questions */
  reviewQuestions: LabReviewQuestion[];
}

export interface LabConcept {
  concept: string;
  explanation: string;
  clinicalRelevance: string;
  commonMisconceptions: string[];
}

export interface LabCase {
  scenario: string;
  patientContext: string;
  labResults: CaseLabResult[];
  question: string;
  teachingPoints: string[];
  interpretation: string;
}

export interface CaseLabResult {
  test: string;
  value: string;
  unit: string;
  referenceRange: string;
  flag: 'normal' | 'high' | 'low' | 'critical';
}

export interface LabReviewQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  conceptTested: string;
}
