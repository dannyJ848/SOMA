/**
 * Patient Scenarios Module
 *
 * Scenario-based patient education covering common situations
 * encountered by patients and caregivers at all life stages.
 *
 * This module bridges the gap between symptoms and action by providing:
 * - Triage guidance (home vs urgent care vs ER)
 * - Age-appropriate care instructions
 * - Red flag recognition
 * - Provider navigation
 *
 * Philosophy:
 * - Parents shouldn't have to guess when to worry
 * - Clear guidance reduces unnecessary ER visits AND missed emergencies
 * - Every caregiver can learn to recognize warning signs
 * - Knowledge empowers confident, appropriate care decisions
 */

// Type exports
export type {
  // Core types
  LifeStage,
  CareLevel,
  ProviderType,
  ScenarioCategory,
  SpecialPopulation,

  // Scenario structure
  PatientScenario,
  ScenarioVariation,
  AssessmentQuestion,
  AssessmentAnswer,

  // Triage system
  TriageDecision,
  TriageCriteria,
  RedFlag,
  WhenToSeekCare,

  // Home care
  HomeCareGuidance,
  HomeCareStep,
  OTCMedicationGuidance,
  AgeDosing,
  ComfortMeasure,
  MonitoringItem,
  TimelineExpectation,

  // Care expectations
  CareExpectation,
  TestExpectation,
  TreatmentExpectation,
  PossibleOutcome,

  // Provider guidance
  ProviderGuidance,
  ScenarioMisconception,
  SpecialPopulationConsideration,

  // Newborn specific
  NewbornScenario,
  DayOfLifeGuidance,
  NewbornFeedingGuidance,
  FeedingProblem,
  NormalNewbornVariation,
  JaundiceGuidance,

  // Developmental
  DevelopmentalScenario,
  DevelopmentalDomain,
  DevelopmentalMilestone,
  DevelopmentalWarningSign,
  DevelopmentalActivity,
  SpecialPopulationDevelopment,

  // Quick reference
  ConditionQuickCard,

  // Symptom checker
  SymptomCheckerFlow,
  SymptomQuestion,
  SymptomPathway,
  SymptomConclusion,
} from './types.js';

// Scenario database exports
export {
  NEWBORN_SCENARIOS,
  getNewbornScenario,
  getAllNewbornScenarios,
} from './newborn-scenarios.js';

export {
  PEDIATRIC_SCENARIOS,
  getPediatricScenario,
  getAllPediatricScenarios,
} from './pediatric-scenarios.js';

export {
  COMMON_ILLNESS_SCENARIOS,
  getIllnessScenario,
  searchIllnessScenarios,
} from './common-illness-scenarios.js';

export {
  CONDITION_QUICK_CARDS,
  getQuickCard,
  searchQuickCards,
} from './condition-quick-cards.js';

export {
  TRIAGE_FLOWS,
  getTriageFlow,
  evaluateTriage,
} from './triage-system.js';
