/**
 * Health Risk Calculators Module
 *
 * Evidence-based calculators for understanding health risks.
 * These are the same tools physicians use, with educational
 * explanations to help users understand their results.
 */

export type {
  CalculatorCategory,
  EvidenceLevel,
  RiskCalculator,
  EvidenceBase,
  CalculatorInput,
  SelectOption,
  OutputRange,
  CalculatorResult,
  ContributingFactor,
  RiskReductionOption,
  InterpretationGuide,
  RiskCategory,
  ScoreRecommendation,
  CalculatorEducation,
  CalculatorSession,
  RiskTracking,
  RiskHistoryEntry,
} from './types.js';

export {
  RISK_CALCULATORS,
  getRiskCalculator,
  getAllRiskCalculators,
  getCalculatorsByCategory,
  calculateASCVD,
  calculateCHA2DS2VASc,
  calculateHASBLED,
  calculateWellsDVT,
  calculatePERC,
  calculateWellsPE,
  calculateCURB65,
} from './calculator-database.js';
