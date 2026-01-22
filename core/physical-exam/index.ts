/**
 * Physical Examination Education Module
 *
 * Comprehensive education about how to perform physical examinations -
 * the art and science of extracting diagnostic information from patient encounters.
 */

export type {
  ExamSystemId,
  ExamTechnique,
  SystemExamEducation,
  ExamEquipment,
  PositioningGuideline,
  ExamApproach,
  ExamSequenceStep,
  ExamAdaptation,
  ExamComponent,
  ExamProcedure,
  ProcedureStep,
  AnatomicalLandmark,
  NormalFinding,
  AbnormalFinding,
  DiagnosticAccuracy,
  SpecialTest,
  SpecialTestProcedure,
  TestInterpretation,
  FindingPattern,
  PatternFinding,
  ExamRedFlag,
  ExamMistake,
  SystemRelationship,
  ExamDocumentation,
  AbnormalDocTemplate,
  Abbreviation,
  ExamPracticeCase,
  ExpectedFinding,
  ExamSkillAssessment,
  AssessmentCriterion,
} from './types.js';

export {
  PHYSICAL_EXAMS,
  CARDIOVASCULAR_EXAM,
  ABDOMINAL_EXAM,
  NEUROLOGICAL_EXAM,
  RESPIRATORY_EXAM,
  HEENT_EXAM,
  MUSCULOSKELETAL_EXAM,
  getPhysicalExam,
  getAllPhysicalExams,
  getAvailableExamSystems,
  searchSpecialTests,
  getRedFlagsBySystem,
  getAllRedFlags,
} from './physical-exam-database.js';
