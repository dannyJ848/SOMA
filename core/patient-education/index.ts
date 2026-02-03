/**
 * Patient Education Module
 *
 * The bridge between medical knowledge and patient understanding.
 *
 * This module provides comprehensive, multi-level education that empowers
 * patients to truly understand their conditions, medications, and care -
 * the depth of understanding that every patient deserves but few receive.
 *
 * Philosophy:
 * - Patients deserve to understand WHY, not just WHAT
 * - Knowledge reduces fear and improves outcomes
 * - True understanding enables self-advocacy
 * - Every patient can understand medicine at their chosen depth
 */

// Type exports
export type {
  // Core educational framework
  MultiLevelExplanation,
  UrgencyLevel,
  EvidenceSource,

  // Condition education
  ConditionEducation,
  CauseExplanation,
  RiskFactorExplanation,
  AffectedBodyArea,
  SymptomMechanismExplanation,
  DailyImpact,
  PrognosisExplanation,
  TimelineExpectation,
  TreatmentGoal,
  TreatmentApproach,
  DailyManagementItem,
  LifestyleChange,
  WarningSign,
  SeekHelpGuideline,
  DoctorQuestion,
  AnatomyEducationLink,

  // Medication education
  MedicationEducation,
  SideEffectEducation,
  SideEffectManagement,
  MedicationInteractionEducation,
  FoodInteractionEducation,
  InteractionEducation,
  LabMonitoringEducation,

  // Test education
  TestEducation,
  WhyOrderedExplanation,
  TestPreparation,
  NormalRangeEducation,
  ResultInterpretation,
  MisconceptionClarification,

  // Treatment rationale
  TreatmentRationaleEducation,
  TreatmentComponent,
  EvidenceExplanation,
  AlternativeConsideration,
  PatientResponsibility,
  SelfMonitoringTask,

  // Action plans
  SelfManagementActionPlan,
  ActionPlanTask,
  MedicationScheduleItem,
  SymptomTrackingItem,
  TrafficLightZone,
  EmergencyContact,
  DietGuidance,
  FoodGuidance,
  ExerciseGuidance,
  SleepGuidance,
  StressGuidance,

  // Health literacy tools
  MedicalTermEducation,
  RedFlagEducation,
  EmergencySign,
  UrgentSign,
  CanWaitSign,

  // Patient empowerment
  QuestionGenerator,
  GeneratedQuestion,
  ConditionalQuestion,
  PatientAdvocacyEducation,
  PatientRight,
  AdvocacyStrategy,
  CommunicationTip,
} from './types.js';

// Condition education exports
export {
  CONDITION_EDUCATION,
  getConditionEducation,
  getAllConditionEducation,
  searchConditionEducation,
} from './condition-education-database.js';

// Medication education exports
export {
  MEDICATION_EDUCATION,
  getMedicationEducation,
  getAllMedicationEducation,
  searchMedicationEducation,
} from './medication-education-database.js';

// Test education exports
export {
  TEST_EDUCATION,
  getTestEducation,
  getAllTestEducation,
  searchTestEducation,
} from './test-education-database.js';
