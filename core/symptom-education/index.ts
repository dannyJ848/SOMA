/**
 * Symptom Education Module
 *
 * Deep educational content for understanding symptoms - what they mean,
 * why they happen, and how to think about them. Designed to help patients
 * understand their symptoms at attending physician depth.
 */

export type {
  SymptomCategory,
  SymptomMechanismType,
  SymptomEducation,
  WhySymptomHappens,
  MechanismEducation,
  NeuralPathwayEducation,
  ReceptorEducation,
  AnatomySourceEducation,
  DiagnosticCharacteristic,
  RedFlagEducation,
  CauseEducation,
  ClinicalReasoningEducation,
  HistoryQuestion,
  ExamFocus,
  DiagnosticPathway,
  EvaluationEducation,
  TestEducation,
  SelfCareEducation,
  SelfCareMeasure,
  SymptomLearningModule,
  SymptomConcept,
  ClinicalScenario,
  ReviewQuestion,
} from './types.js';

export {
  SYMPTOM_EDUCATION,
  getSymptomEducation,
  getSymptomEducationByName,
  getAllSymptomEducation,
  getSymptomsByCategory,
} from './symptom-database.js';
