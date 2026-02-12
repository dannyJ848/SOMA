/**
 * Diagnostic Intelligence Module
 *
 * Lab interpretation, diagnostic algorithms, and test recommendations
 * for Phase 7: Diagnostic Intelligence System
 */

// Re-export lab interpretation from existing module
export {
  analyzeLabResults,
  analyzeFullPanel,
  getLabStatistics,
  searchLabs,
  interpretLabResult,
  interpretMultipleResults,
  analyzeLabTrend,
  detectPatterns,
  analyzePanel,
  REFERENCE_RANGES,
  getApplicableReferenceRange,
  LAB_TESTS,
  LAB_PANELS,
  getLabTest,
  getLabTestByName,
  getLabPanel,
  searchLabTests,
  type LabResultInput,
  type InterpretedLabResult,
  type DetectedPattern,
  type PanelAnalysisResult,
  type UserDemographics,
} from '../labs';

// Re-export diagnostic algorithms from clinical reasoning
export {
  CHEST_PAIN_ALGORITHM,
  DYSPNEA_ALGORITHM,
  ABDOMINAL_PAIN_ALGORITHM,
  HEADACHE_ALGORITHM,
  SYNCOPE_ALGORITHM,
  FEVER_ALGORITHM,
  DIAGNOSTIC_ALGORITHM_PRESENTATIONS,
} from '../content/clinical-reasoning/diagnostic-algorithms';

// Test recommendations
export {
  generateTestRecommendations,
  getTestById,
  getTestsByCategory,
  getAllTests,
  DIAGNOSTIC_TESTS,
  type DiagnosticTest,
  type TestCategory,
  type TestRecommendation,
  type TestRecommendationResult,
} from './test-recommendations';
