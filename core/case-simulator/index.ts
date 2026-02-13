/**
 * Clinical Case Simulator Module
 *
 * Interactive case-based learning that teaches clinical reasoning
 * through realistic scenarios. Users work through cases step by step,
 * making decisions and learning how physicians think.
 */

export type {
  CaseComplexity,
  CaseCategory,
  ClinicalCase,
  PatientPresentation,
  VitalSigns,
  AvailableData,
  HistoryItem,
  ExamSection,
  ExamFinding,
  LabOrderOption,
  LabResult,
  LabOrder,
  SimplifiedLabResult,
  ImagingOrderOption,
  ImagingResult,
  ImagingOrder,
  SimplifiedImagingResult,
  TestOrderOption,
  CaseFlow,
  CaseStage,
  DecisionPoint,
  DecisionOption,
  CasePath,
  CaseResolution,
  DiagnosisExplanation,
  TreatmentExplanation,
  MedicationPrescription,
  TeachingPoint,
  CaseSimulatorSession,
  SessionDecision,
  PerformanceMetrics,
  CaseGenerationRequest,
  GeneratedCase,
  LearnerProgress,
  CompletedCase,
  TopicMastery,
  OverallStats,
} from './types.js';

export {
  CLINICAL_CASES,
  getClinicalCase,
  getCasesByCategory,
  getCasesByComplexity,
  getAllClinicalCases,
  searchCases,
} from './case-database.js';
