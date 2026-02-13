/**
 * Clinical Reasoning Module
 *
 * Educational tools for understanding clinical thinking, symptoms,
 * conditions, and when to seek care. NOT for diagnosis.
 *
 * This module empowers users with physician-level KNOWLEDGE while
 * respecting that diagnosis belongs with healthcare professionals.
 */

// Type exports
export type {
  // Symptom types
  SymptomOnset,
  SymptomDuration,
  SeverityLevel,
  SymptomQualities,
  PainQuality,
  SensationQuality,
  SymptomPattern,
  SymptomModifiers,
  AnatomicalLocation,
  BodyRegion,
  Symptom,
  SymptomCategory,
  SymptomInput,

  // Condition types
  Condition,
  ConditionCategory,
  PrevalenceLevel,
  UrgencyLevel,
  KeySymptom,
  SymptomFrequency,
  DiagnosticCriteria,

  // Red flag types
  RedFlag,
  RedFlagPattern,
  RedFlagCategory,
  RedFlagGuidance,

  // Demographics & risk
  DemographicFactors,
  RiskFactor,
  RiskFactorCategory,
  PatientDemographics,
  FamilyHistoryItem,

  // Differential types
  DifferentialDiagnosis,
  ConfidenceLevel,
  DifferentialDiagnosisResult,
  ReasoningStep,
  ClarifyingQuestion,

  // Mapping types
  SymptomConditionMapping,

  // Decision tree types
  DecisionTreeNode,
  ClinicalDecisionTree,

  // Review of systems
  ReviewOfSystems,
} from './types.js';

// Condition database exports
export {
  CONDITIONS,
  RED_FLAG_PATTERNS,
  SYMPTOM_CONDITION_MAPPINGS,
  getConditionById,
  getConditionsByCategory,
  getMatchingRedFlags,
  getMappingsForSymptom,
  getAllSymptoms,
} from './condition-database.js';

// Differential diagnosis exports (educational)
export {
  generateDifferentialDiagnosis,
  calculateBayesianDifferentials,
  determineOverallUrgency,
  generateRecommendedTests,
} from './differential-diagnosis.js';

// Red flag education exports
export {
  analyzeForRedFlags,
  IMPORTANT_REMINDER,
  MEDICAL_DISCLAIMER,
  type RedFlagAlert,
  type RedFlagEducation,
  type RedFlagEducationResult,
} from './red-flag-education.js';
