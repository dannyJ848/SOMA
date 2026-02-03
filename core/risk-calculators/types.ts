/**
 * Health Risk Calculator Types
 *
 * Evidence-based calculators that help users understand their health risks.
 * These are the same tools physicians use, with educational explanations.
 */

// ============================================
// Calculator Classification
// ============================================

export type CalculatorCategory =
  | 'cardiovascular'
  | 'stroke'
  | 'bleeding'
  | 'kidney'
  | 'liver'
  | 'pulmonary'
  | 'oncology'
  | 'surgical'
  | 'mortality'
  | 'general';

export type EvidenceLevel = 'high' | 'moderate' | 'limited';

// ============================================
// Calculator Definition
// ============================================

/**
 * Definition of a health risk calculator
 */
export interface RiskCalculator {
  id: string;
  name: string;
  fullName: string;
  category: CalculatorCategory;

  /** What this calculator predicts */
  purpose: string;

  /** Who should use this calculator */
  targetPopulation: string;

  /** When to use */
  clinicalUse: string;

  /** When NOT to use */
  limitations: string[];

  /** The evidence behind it */
  evidenceBase: EvidenceBase;

  /** Input variables */
  inputs: CalculatorInput[];

  /** How the calculation works */
  calculationMethod: string;

  /** Possible output ranges */
  outputRange: OutputRange;

  /** Interpretation guidelines */
  interpretation: InterpretationGuide;

  /** Clinical recommendations based on score */
  recommendations: ScoreRecommendation[];

  /** Educational context */
  education: CalculatorEducation;
}

// ============================================
// Evidence Base
// ============================================

export interface EvidenceBase {
  originalStudy: string;
  validationStudies: string[];
  guidelineReferences: string[];
  evidenceLevel: EvidenceLevel;
  lastUpdated: string;
  notes: string;
}

// ============================================
// Calculator Inputs
// ============================================

export interface CalculatorInput {
  id: string;
  name: string;
  type: 'number' | 'boolean' | 'select' | 'range';

  /** Plain language description */
  description: string;

  /** Unit if applicable */
  unit?: string;

  /** For number inputs */
  range?: { min: number; max: number };

  /** For select inputs */
  options?: SelectOption[];

  /** Is this required? */
  required: boolean;

  /** What this variable contributes to risk */
  riskContribution: string;

  /** Help text */
  helpText?: string;
}

export interface SelectOption {
  value: string | number;
  label: string;
  description?: string;
}

// ============================================
// Calculator Output
// ============================================

export interface OutputRange {
  type: 'percentage' | 'score' | 'category' | 'years';
  min: number;
  max: number;
  unit: string;
  description: string;
}

export interface CalculatorResult {
  calculatorId: string;
  timestamp: string;
  inputs: Record<string, unknown>;

  /** Primary result */
  score: number;
  scoreUnit: string;

  /** Risk category */
  riskCategory: string;

  /** Interpretation */
  interpretation: string;

  /** What this means for the user */
  patientExplanation: string;

  /** Recommendations */
  recommendations: string[];

  /** Factors that increased risk */
  contributingFactors: ContributingFactor[];

  /** Ways to reduce risk */
  riskReduction: RiskReductionOption[];

  /** Comparison to population */
  populationComparison?: string;

  /** Disclaimer */
  disclaimer: string;
}

export interface ContributingFactor {
  factor: string;
  impact: 'major' | 'moderate' | 'minor';
  modifiable: boolean;
  explanation: string;
}

export interface RiskReductionOption {
  intervention: string;
  expectedReduction: string;
  evidence: string;
  practical: string;
}

// ============================================
// Interpretation
// ============================================

export interface InterpretationGuide {
  categories: RiskCategory[];
  contextualFactors: string[];
  importantCaveats: string[];
}

export interface RiskCategory {
  name: string;
  range: { min: number; max: number };
  interpretation: string;
  color?: string;
}

export interface ScoreRecommendation {
  scoreRange: { min: number; max: number };
  category: string;
  recommendations: string[];
  discussWithDoctor: string[];
}

// ============================================
// Education
// ============================================

export interface CalculatorEducation {
  /** Plain language explanation of what this measures */
  whatItMeasures: string;

  /** How it was developed */
  howDeveloped: string;

  /** Why these variables matter */
  whyTheseFactors: string;

  /** How to interpret results */
  interpretationGuide: string;

  /** What to discuss with doctor */
  questionsForDoctor: string[];

  /** Common misconceptions */
  commonMisconceptions: {
    misconception: string;
    reality: string;
  }[];

  /** Related calculators */
  relatedCalculators: string[];
}

// ============================================
// Calculator Session
// ============================================

export interface CalculatorSession {
  sessionId: string;
  calculatorId: string;
  startTime: string;
  endTime?: string;

  /** Inputs provided */
  inputs: Record<string, unknown>;

  /** Result */
  result?: CalculatorResult;

  /** User notes */
  notes?: string;

  /** Saved for tracking */
  saved: boolean;
}

// ============================================
// Risk Tracking
// ============================================

export interface RiskTracking {
  userId: string;
  calculatorId: string;
  history: RiskHistoryEntry[];
  trend: 'improving' | 'stable' | 'worsening' | 'insufficient-data';
  trendExplanation: string;
}

export interface RiskHistoryEntry {
  date: string;
  score: number;
  riskCategory: string;
  notes?: string;
}
