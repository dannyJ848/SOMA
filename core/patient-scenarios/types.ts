/**
 * Patient Scenarios Type System
 *
 * This module defines the architecture for scenario-based patient education,
 * covering common situations patients and caregivers face. It stratifies
 * knowledge across:
 *
 * - Home management (self-care appropriate)
 * - Urgent care (needs attention but not emergency)
 * - Emergency room (immediate attention required)
 *
 * It also categorizes by life stage and special populations:
 * - Newborn care (0-28 days)
 * - Infant care (1-12 months)
 * - Toddler care (1-3 years)
 * - Child care (4-12 years)
 * - Adolescent care (13-17 years)
 * - Adult care (18-64 years)
 * - Geriatric care (65+ years)
 * - Special populations (Down syndrome, autism, chronic conditions)
 */

import type { MultiLevelExplanation, UrgencyLevel } from '../patient-education/types.js';

// =============================================================================
// CORE SCENARIO TYPES
// =============================================================================

/**
 * Life stage for appropriate care guidance
 */
export type LifeStage =
  | 'newborn'      // 0-28 days
  | 'infant'       // 1-12 months
  | 'toddler'      // 1-3 years
  | 'child'        // 4-12 years
  | 'adolescent'   // 13-17 years
  | 'adult'        // 18-64 years
  | 'geriatric';   // 65+ years

/**
 * Care level recommendation
 */
export type CareLevel =
  | 'home-self-care'       // Manage at home with guidance
  | 'home-monitor'         // Watch at home, may escalate
  | 'telehealth'           // Virtual visit appropriate
  | 'primary-care'         // Schedule with PCP
  | 'urgent-care'          // Same-day visit needed
  | 'emergency-room'       // Go to ER now
  | 'call-911';            // Life-threatening emergency

/**
 * Provider type for referral guidance
 */
export type ProviderType =
  // Primary Care
  | 'family-medicine'
  | 'internal-medicine'
  | 'pediatrics'
  | 'obgyn'
  | 'geriatrics'
  // Secondary Care (Specialists)
  | 'cardiology'
  | 'pulmonology'
  | 'gastroenterology'
  | 'neurology'
  | 'nephrology'
  | 'endocrinology'
  | 'rheumatology'
  | 'dermatology'
  | 'orthopedics'
  | 'urology'
  | 'ophthalmology'
  | 'otolaryngology'
  | 'psychiatry'
  | 'allergy-immunology'
  | 'infectious-disease'
  | 'hematology'
  | 'oncology'
  // Tertiary/Subspecialty Care
  | 'pediatric-cardiology'
  | 'pediatric-neurology'
  | 'pediatric-endocrinology'
  | 'pediatric-gastroenterology'
  | 'pediatric-pulmonology'
  | 'pediatric-nephrology'
  | 'pediatric-hematology-oncology'
  | 'pediatric-surgery'
  | 'neonatology'
  | 'maternal-fetal-medicine'
  | 'reproductive-endocrinology'
  | 'interventional-cardiology'
  | 'electrophysiology'
  | 'neuro-oncology'
  | 'movement-disorders'
  | 'epileptology'
  | 'hepatology'
  | 'advanced-heart-failure'
  | 'pulmonary-critical-care';

/**
 * Scenario category for organization
 */
export type ScenarioCategory =
  | 'newborn-care'
  | 'infant-illness'
  | 'childhood-illness'
  | 'developmental-concerns'
  | 'behavioral-concerns'
  | 'injury-trauma'
  | 'respiratory'
  | 'gastrointestinal'
  | 'skin-rash'
  | 'fever'
  | 'pain'
  | 'chronic-disease-management'
  | 'medication-concerns'
  | 'mental-health'
  | 'pregnancy-postpartum'
  | 'geriatric-concerns'
  | 'special-needs';

// =============================================================================
// PATIENT SCENARIO STRUCTURE
// =============================================================================

/**
 * Complete patient scenario with multi-level guidance
 */
export interface PatientScenario {
  id: string;
  title: string;
  category: ScenarioCategory;
  applicableLifeStages: LifeStage[];
  keywords: string[];

  /** The situation described from patient/caregiver perspective */
  situationDescription: MultiLevelExplanation;

  /** Common variations of this scenario */
  variations: ScenarioVariation[];

  /** Questions to assess severity */
  assessmentQuestions: AssessmentQuestion[];

  /** Triage decision tree based on assessment */
  triageDecisionTree: TriageDecision[];

  /** Home care instructions if appropriate */
  homeCareGuidance?: HomeCareGuidance;

  /** When to seek care */
  whenToSeekCare: WhenToSeekCare;

  /** Red flags that require immediate attention */
  redFlags: RedFlag[];

  /** What to expect at different care levels */
  whatToExpectAtCare: CareExpectation[];

  /** Relevant providers for this scenario */
  relevantProviders: ProviderGuidance[];

  /** Related conditions to be aware of */
  relatedConditions: string[];

  /** Common misconceptions about this scenario */
  commonMisconceptions: ScenarioMisconception[];

  /** Special considerations for specific populations */
  specialPopulationConsiderations?: SpecialPopulationConsideration[];
}

/**
 * Variation of a scenario with different characteristics
 */
export interface ScenarioVariation {
  id: string;
  description: string;
  differentiatingFactors: string[];
  likelyCareLevel: CareLevel;
  additionalConsiderations: string[];
}

/**
 * Question to help assess scenario severity
 */
export interface AssessmentQuestion {
  question: string;
  whyAsking: string;
  answerOptions: AssessmentAnswer[];
  applicableAges?: LifeStage[];
}

/**
 * Possible answer to assessment question with implications
 */
export interface AssessmentAnswer {
  answer: string;
  implication: string;
  urgencyModifier: 'increases' | 'decreases' | 'neutral';
  nextQuestion?: string;  // ID of follow-up question if any
}

// =============================================================================
// TRIAGE DECISION SYSTEM
// =============================================================================

/**
 * Triage decision node in decision tree
 */
export interface TriageDecision {
  id: string;
  condition: string;  // Description of when this applies
  criteria: TriageCriteria[];
  recommendedCareLevel: CareLevel;
  urgency: UrgencyLevel;
  reasoning: string;
  timeframe: string;  // e.g., "within 2 hours", "within 24 hours"
  actions: string[];  // What to do immediately
}

/**
 * Criteria for triage decision
 */
export interface TriageCriteria {
  criterion: string;
  present: boolean;
  weight: 'critical' | 'major' | 'minor';
}

/**
 * Red flag requiring immediate attention
 */
export interface RedFlag {
  sign: string;
  whyDangerous: string;
  requiredAction: CareLevel;
  timeframe: string;
  whatHappensIfIgnored: string;
  applicableAges?: LifeStage[];
}

/**
 * Guidance on when to seek different levels of care
 */
export interface WhenToSeekCare {
  homeManagement: {
    appropriateWhen: string[];
    notAppropriateWhen: string[];
    maxDuration: string;
  };
  telehealth: {
    appropriateWhen: string[];
    advantagesOverInPerson: string[];
  };
  primaryCare: {
    appropriateWhen: string[];
    howToSchedule: string;
    whatToBring: string[];
  };
  urgentCare: {
    appropriateWhen: string[];
    vsEmergencyRoom: string;
    typicalWaitTime: string;
  };
  emergencyRoom: {
    appropriateWhen: string[];
    whatToExpect: string;
    howToPrepare: string[];
  };
  call911: {
    appropriateWhen: string[];
    whatToTellDispatcher: string[];
    whileWaiting: string[];
  };
}

// =============================================================================
// HOME CARE GUIDANCE
// =============================================================================

/**
 * Comprehensive home care guidance
 */
export interface HomeCareGuidance {
  overview: string;
  stepByStepCare: HomeCareStep[];
  medicationsToConsider: OTCMedicationGuidance[];
  comfortMeasures: ComfortMeasure[];
  whatToMonitor: MonitoringItem[];
  expectedTimeline: TimelineExpectation[];
  signsOfImprovement: string[];
  signsOfWorsening: string[];
  whenToReassess: string;
  commonMistakes: string[];
}

/**
 * Step-by-step home care instruction
 */
export interface HomeCareStep {
  step: number;
  instruction: string;
  rationale: string;
  tips: string[];
  warnings?: string[];
  applicableAges?: LifeStage[];
}

/**
 * Over-the-counter medication guidance
 */
export interface OTCMedicationGuidance {
  medication: string;
  purpose: string;
  dosing: AgeDosing[];
  warnings: string[];
  whenNotToUse: string[];
  interactions: string[];
}

/**
 * Age-specific dosing information
 */
export interface AgeDosing {
  ageRange: string;
  dose: string;
  frequency: string;
  maxDaily: string;
  specialInstructions?: string;
}

/**
 * Non-medication comfort measures
 */
export interface ComfortMeasure {
  measure: string;
  howToApply: string;
  expectedBenefit: string;
  cautions?: string[];
  applicableAges?: LifeStage[];
}

/**
 * What to monitor at home
 */
export interface MonitoringItem {
  whatToMonitor: string;
  howToMonitor: string;
  normalRange?: string;
  concerningValues: string;
  frequency: string;
}

/**
 * Expected timeline for recovery
 */
export interface TimelineExpectation {
  timeframe: string;
  expectedStatus: string;
  normalVariation: string;
  redFlagsAtThisStage: string[];
}

// =============================================================================
// CARE EXPECTATIONS
// =============================================================================

/**
 * What to expect at different care levels
 */
export interface CareExpectation {
  careLevel: CareLevel;
  whatWillHappen: string[];
  testsYouMightGet: TestExpectation[];
  treatmentsYouMightReceive: TreatmentExpectation[];
  questionsTheyWillAsk: string[];
  whatToBring: string[];
  estimatedDuration: string;
  possibleOutcomes: PossibleOutcome[];
  questionsToAsk: string[];
}

/**
 * Test that might be ordered
 */
export interface TestExpectation {
  test: string;
  purpose: string;
  whatItInvolves: string;
  resultsTimeframe: string;
}

/**
 * Treatment that might be given
 */
export interface TreatmentExpectation {
  treatment: string;
  purpose: string;
  whatToExpect: string;
  possibleSideEffects: string[];
}

/**
 * Possible outcomes of care visit
 */
export interface PossibleOutcome {
  outcome: string;
  likelihood: 'common' | 'possible' | 'rare';
  nextSteps: string[];
}

// =============================================================================
// PROVIDER GUIDANCE
// =============================================================================

/**
 * Guidance on relevant providers
 */
export interface ProviderGuidance {
  providerType: ProviderType;
  whenToSee: string;
  whatTheyDo: string;
  howToGetReferral: string;
  questionsToAsk: string[];
  redFlagsForThisSpecialty: string[];
}

/**
 * Misconception about a scenario
 */
export interface ScenarioMisconception {
  misconception: string;
  truth: string;
  whyItMatters: string;
  source?: string;
}

// =============================================================================
// SPECIAL POPULATIONS
// =============================================================================

/**
 * Considerations for special populations
 */
export interface SpecialPopulationConsideration {
  population: SpecialPopulation;
  modifiedGuidance: string;
  additionalRedFlags: string[];
  specialResources: string[];
  relevantSpecialists: ProviderType[];
}

/**
 * Special population types
 */
export type SpecialPopulation =
  | 'down-syndrome'
  | 'autism-spectrum'
  | 'cerebral-palsy'
  | 'intellectual-disability'
  | 'premature-birth'
  | 'congenital-heart-disease'
  | 'immunocompromised'
  | 'diabetes'
  | 'asthma'
  | 'epilepsy'
  | 'sickle-cell'
  | 'cystic-fibrosis'
  | 'pregnancy'
  | 'postpartum'
  | 'elderly-frail'
  | 'dementia'
  | 'multiple-chronic-conditions';

// =============================================================================
// NEWBORN-SPECIFIC TYPES
// =============================================================================

/**
 * Newborn care scenario (first 28 days of life)
 */
export interface NewbornScenario extends PatientScenario {
  category: 'newborn-care';
  applicableLifeStages: ['newborn'];

  /** Day of life considerations */
  dayOfLifeConsiderations: DayOfLifeGuidance[];

  /** Feeding-specific guidance */
  feedingGuidance?: NewbornFeedingGuidance;

  /** Normal newborn variations that concern parents */
  normalVariations?: NormalNewbornVariation[];

  /** Jaundice-specific guidance if applicable */
  jaundiceGuidance?: JaundiceGuidance;
}

/**
 * Guidance that changes by day of life
 */
export interface DayOfLifeGuidance {
  dayRange: string;  // e.g., "1-3", "4-7", "8-14"
  normalExpectations: string[];
  commonConcerns: string[];
  feedingExpectations: string;
  outputExpectations: string;  // wet/dirty diapers
  weightExpectations: string;
  sleepExpectations: string;
  redFlagsForThisAge: string[];
}

/**
 * Newborn feeding guidance
 */
export interface NewbornFeedingGuidance {
  breastfeeding: {
    normalPattern: string;
    signsOfGoodFeeding: string[];
    commonProblems: FeedingProblem[];
    whenToGetHelp: string[];
    resources: string[];
  };
  formulaFeeding: {
    normalPattern: string;
    preparationSafety: string[];
    signsOfGoodFeeding: string[];
    commonProblems: FeedingProblem[];
    whenToGetHelp: string[];
  };
  combinedFeeding: {
    howToBalance: string;
    considerations: string[];
  };
}

/**
 * Common feeding problem
 */
export interface FeedingProblem {
  problem: string;
  possibleCauses: string[];
  homeRemedies: string[];
  whenToSeekHelp: string;
}

/**
 * Normal newborn variation that concerns parents
 */
export interface NormalNewbornVariation {
  observation: string;
  whyItHappens: string;
  isNormal: string;
  whenToWorry: string;
  usualDuration: string;
}

/**
 * Jaundice-specific guidance
 */
export interface JaundiceGuidance {
  whatIsIt: MultiLevelExplanation;
  riskFactors: string[];
  howToAssess: string;
  normalVsWorrying: {
    normal: string[];
    worrying: string[];
  };
  treatmentOptions: {
    treatment: string;
    whenUsed: string;
    whatToExpect: string;
  }[];
  monitoring: string;
}

// =============================================================================
// DEVELOPMENTAL MILESTONE TYPES
// =============================================================================

/**
 * Developmental milestone scenario
 */
export interface DevelopmentalScenario {
  id: string;
  title: string;
  ageRange: string;
  domain: DevelopmentalDomain;

  /** Expected milestones for this age */
  expectedMilestones: DevelopmentalMilestone[];

  /** Warning signs of delay */
  warningSignsOfDelay: DevelopmentalWarningSign[];

  /** What parents can do to support development */
  supportActivities: DevelopmentalActivity[];

  /** When to bring up concerns with provider */
  whenToDiscussWithProvider: string[];

  /** Screening tools used */
  screeningTools: string[];

  /** Special considerations for specific populations */
  specialPopulationConsiderations: SpecialPopulationDevelopment[];
}

/**
 * Developmental domain
 */
export type DevelopmentalDomain =
  | 'gross-motor'
  | 'fine-motor'
  | 'speech-language'
  | 'cognitive'
  | 'social-emotional'
  | 'adaptive';

/**
 * Individual developmental milestone
 */
export interface DevelopmentalMilestone {
  milestone: string;
  typicalAge: string;
  rangeOfNormal: string;
  howToAssess: string;
  examples: string[];
  prerequisiteSkills: string[];
}

/**
 * Warning sign of developmental delay
 */
export interface DevelopmentalWarningSign {
  sign: string;
  concernedDomain: DevelopmentalDomain;
  byAge: string;
  whyWorrying: string;
  nextSteps: string[];
  specialistReferral: ProviderType[];
}

/**
 * Activity to support development
 */
export interface DevelopmentalActivity {
  activity: string;
  targetDomain: DevelopmentalDomain;
  howToDo: string;
  materials: string[];
  adaptations?: string[];  // For special needs
}

/**
 * Special population developmental considerations
 */
export interface SpecialPopulationDevelopment {
  population: SpecialPopulation;
  modifiedExpectations: string;
  additionalMilestones?: DevelopmentalMilestone[];
  specialResources: string[];
  relevantSpecialists: ProviderType[];
}

// =============================================================================
// COMMON CONDITIONS QUICK REFERENCE
// =============================================================================

/**
 * Quick reference card for common condition
 */
export interface ConditionQuickCard {
  id: string;
  conditionName: string;
  aliases: string[];
  oneLiner: string;
  applicableAges: LifeStage[];
  category: ScenarioCategory;

  /** Quick recognition */
  keySymptoms: string[];
  typicalAppearance: string;

  /** Rapid assessment */
  urgencyIndicators: {
    homeOkay: string[];
    needsEvaluation: string[];
    emergent: string[];
  };

  /** Quick home care summary */
  quickHomeCare: string[];

  /** When to worry - easy to remember list */
  whenToWorry: string[];

  /** Common parent questions */
  faqAnswers: { question: string; answer: string }[];

  /** Contagiousness if applicable */
  contagiousness?: {
    isContagious: boolean;
    howSpread: string;
    whenContagious: string;
    isolation: string;
    returnToSchool: string;
  };

  /** Link to full scenario */
  fullScenarioId?: string;

  /** Link to full condition education */
  conditionEducationId?: string;
}

// =============================================================================
// SYMPTOM CHECKER TYPES
// =============================================================================

/**
 * Symptom checker flow
 */
export interface SymptomCheckerFlow {
  id: string;
  primarySymptom: string;
  applicableAges: LifeStage[];

  /** Initial questions to narrow down */
  initialQuestions: SymptomQuestion[];

  /** Branching paths based on answers */
  pathways: SymptomPathway[];

  /** Possible conclusions */
  possibleConclusions: SymptomConclusion[];
}

/**
 * Question in symptom checker
 */
export interface SymptomQuestion {
  id: string;
  question: string;
  questionType: 'yes-no' | 'multiple-choice' | 'scale' | 'duration' | 'description';
  options?: string[];
  scaleRange?: { min: number; max: number; labels: { value: number; label: string }[] };
  whyAsking: string;
}

/**
 * Pathway in symptom checker
 */
export interface SymptomPathway {
  pathwayId: string;
  triggerConditions: { questionId: string; answer: string }[];
  nextQuestions: string[];  // Question IDs
  possibleConclusionIds: string[];
}

/**
 * Conclusion of symptom checker
 */
export interface SymptomConclusion {
  id: string;
  likelyConditions: { conditionId: string; confidence: 'high' | 'moderate' | 'possible' }[];
  recommendedCareLevel: CareLevel;
  urgency: UrgencyLevel;
  reasoning: string;
  disclaimer: string;
  nextSteps: string[];
  relatedScenarioId?: string;
}
