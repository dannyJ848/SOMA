/**
 * Patient Education Module - Type Definitions
 *
 * This module represents the bridge between medical knowledge and patient understanding.
 * The goal is to give patients the same depth of understanding that an attending physician
 * has, translated into language they can internalize and act upon.
 *
 * Key Philosophy:
 * - Patients deserve to understand WHY, not just WHAT
 * - Knowledge reduces fear and increases adherence
 * - True understanding enables self-advocacy
 * - Every medication, test, and treatment has a reason - patients should know it
 */

// =============================================================================
// CORE EDUCATIONAL FRAMEWORK
// =============================================================================

/**
 * Multi-level explanation system - the same concept explained at different depths
 * This allows patients to start simple and go deeper as they're ready
 */
export interface MultiLevelExplanation {
  /** Simple, everyday language. No medical terms. Like explaining to a smart 12-year-old. */
  simple: string;
  /** Introduces key medical terms with definitions. Builds understanding of terminology. */
  detailed: string;
  /** Full medical explanation. For patients who want physician-level understanding. */
  comprehensive: string;
  /** Optional analogy to help the concept click */
  analogy?: string;
  /** Visual metaphor description (for UI to potentially illustrate) */
  visualMetaphor?: string;
}

/**
 * Urgency level for patient action
 */
export type UrgencyLevel = 'emergency-911' | 'go-to-er-now' | 'call-doctor-today' | 'schedule-soon' | 'mention-at-next-visit' | 'informational';

/**
 * Source credibility for patient trust
 */
export interface EvidenceSource {
  type: 'guideline' | 'major-study' | 'consensus' | 'expert-opinion' | 'established-practice';
  name: string;
  year?: number;
  url?: string;
}

// =============================================================================
// CONDITION DEEP DIVE - Understanding Your Diagnosis
// =============================================================================

/**
 * Complete education about a medical condition from the patient's perspective
 */
export interface ConditionEducation {
  id: string;
  conditionName: string;
  medicalName: string;
  icdCode?: string;

  // The "Why Me?" section - what patients actually want to know first
  whyMeSection: {
    /** What this condition actually is, in plain terms */
    whatItIs: MultiLevelExplanation;
    /** How common is this? Am I alone? */
    howCommon: {
      prevalence: string;
      affectedPopulations: string;
      patientReassurance: string;
    };
    /** What caused this to happen? Why me? */
    whyItHappened: {
      knownCauses: CauseExplanation[];
      riskFactorsThatApply: RiskFactorExplanation[];
      notYourFault: string; // Important: reduce patient self-blame
    };
  };

  // Understanding what's happening in your body
  bodyMechanism: {
    /** What's actually going wrong, step by step */
    whatGoesWrong: MultiLevelExplanation;
    /** Which body parts/systems are affected */
    affectedAreas: AffectedBodyArea[];
    /** Why you feel the symptoms you feel */
    symptomExplanations: SymptomMechanismExplanation[];
    /** Interactive: how this affects YOUR daily life */
    dailyLifeImpact: DailyImpact[];
  };

  // The journey ahead
  diseaseJourney: {
    /** What's the typical course? */
    naturalHistory: MultiLevelExplanation;
    /** Is this curable, manageable, or progressive? */
    prognosis: PrognosisExplanation;
    /** What to expect in different timeframes */
    timeline: TimelineExpectation[];
    /** Success stories / realistic hope */
    hopeAndReality: string;
  };

  // Treatment understanding
  treatmentRationale: {
    /** Why treatment is important (or why watchful waiting) */
    whyTreat: MultiLevelExplanation;
    /** Treatment goals - what we're trying to achieve */
    goals: TreatmentGoal[];
    /** Available treatment approaches */
    approaches: TreatmentApproach[];
    /** What if we don't treat? */
    untreatedOutcome: string;
  };

  // Living with this condition
  livingWith: {
    /** Day-to-day management */
    dailyManagement: DailyManagementItem[];
    /** Diet and lifestyle modifications with WHY */
    lifestyleChanges: LifestyleChange[];
    /** Warning signs that need attention */
    warningSignsToWatch: WarningSign[];
    /** When to seek help */
    whenToGetHelp: SeekHelpGuideline[];
    /** Mental/emotional aspects */
    emotionalSupport: {
      commonFeelings: string[];
      copingStrategies: string[];
      supportResources: string[];
    };
  };

  // Questions for your healthcare team
  doctorQuestions: {
    atDiagnosis: DoctorQuestion[];
    aboutTreatment: DoctorQuestion[];
    ongoingCare: DoctorQuestion[];
    prognosis: DoctorQuestion[];
  };

  // Related anatomy for 3D visualization
  anatomyLinks: AnatomyEducationLink[];

  // Related content
  relatedMedications: string[];
  relatedTests: string[];
  relatedConditions: string[];
}

export interface CauseExplanation {
  cause: string;
  explanation: MultiLevelExplanation;
  isModifiable: boolean;
  whatYouCanDo?: string;
}

export interface RiskFactorExplanation {
  factor: string;
  howItContributes: string;
  isModifiable: boolean;
  reductionStrategy?: string;
  strengthOfRisk: 'major' | 'moderate' | 'minor';
}

export interface AffectedBodyArea {
  areaName: string;
  structureId?: string; // For 3D anatomy linking
  howAffected: MultiLevelExplanation;
  relatedSymptoms: string[];
}

export interface SymptomMechanismExplanation {
  symptom: string;
  whyYouFeelThis: MultiLevelExplanation;
  whatMakesItBetterWorse: {
    better: string[];
    worse: string[];
  };
  whenToWorry: string;
}

export interface DailyImpact {
  activity: string;
  howAffected: string;
  adaptations: string[];
}

export interface PrognosisExplanation {
  category: 'curable' | 'manageable-stable' | 'manageable-variable' | 'manageable-progressive' | 'progressive' | 'self-limiting';
  explanation: MultiLevelExplanation;
  factorsAffectingOutcome: string[];
  whatYouCanControl: string[];
}

export interface TimelineExpectation {
  timeframe: string;
  whatToExpect: string;
  milestones?: string[];
}

export interface TreatmentGoal {
  goal: string;
  whyImportant: string;
  howMeasured: string;
  realisticTimeframe: string;
}

export interface TreatmentApproach {
  name: string;
  type: 'medication' | 'lifestyle' | 'procedure' | 'therapy' | 'monitoring' | 'combination';
  whatItDoes: MultiLevelExplanation;
  whyRecommended: string;
  alternatives?: string[];
  prosAndCons: {
    benefits: string[];
    drawbacks: string[];
  };
}

export interface DailyManagementItem {
  task: string;
  frequency: string;
  whyImportant: string;
  howToDo: string;
  tips: string[];
}

export interface LifestyleChange {
  change: string;
  category: 'diet' | 'exercise' | 'sleep' | 'stress' | 'habits' | 'social' | 'work';
  whyItHelps: MultiLevelExplanation;
  howToImplement: string[];
  evidenceStrength: 'strong' | 'moderate' | 'emerging';
  expectedBenefit: string;
}

export interface WarningSign {
  sign: string;
  whatItMightMean: string;
  urgency: UrgencyLevel;
  actionToTake: string;
}

export interface SeekHelpGuideline {
  situation: string;
  urgency: UrgencyLevel;
  whereTogo: 'emergency-room' | 'urgent-care' | 'call-doctor' | 'telehealth' | 'nurse-line';
  whatToSay: string;
}

export interface DoctorQuestion {
  question: string;
  whyAsk: string;
  whatAnswerMeans: string;
  followUpQuestions?: string[];
}

export interface AnatomyEducationLink {
  structureId: string;
  structureName: string;
  relevance: string;
  viewPreset?: string;
}

// =============================================================================
// MEDICATION MASTERY - Understanding Your Medications
// =============================================================================

/**
 * Complete medication education from patient perspective
 */
export interface MedicationEducation {
  id: string;
  genericName: string;
  brandNames: string[];
  drugClass: string;

  // The WHY section - most important for adherence
  whyTakingThis: {
    /** What this medication is for */
    purpose: MultiLevelExplanation;
    /** Why YOUR doctor chose this medication */
    whyThisOne: string;
    /** What would happen if you don't take it */
    consequenceOfNotTaking: MultiLevelExplanation;
    /** What happens if you miss doses */
    missedDoseConsequence: string;
  };

  // How it works in YOUR body
  howItWorks: {
    /** Mechanism in simple terms */
    mechanism: MultiLevelExplanation;
    /** Where in your body it acts */
    whereItActs: AffectedBodyArea[];
    /** How long until you notice effects */
    timeToEffect: {
      whenYouMightFeel: string;
      whenFullEffect: string;
      bePatient: string;
    };
    /** What you should notice when it's working */
    signsItsWorking: string[];
  };

  // How to take it correctly
  howToTake: {
    /** Typical dosing */
    dosing: string;
    /** Timing and frequency */
    timing: {
      whenToTake: string;
      whyThisTiming: string;
      withOrWithoutFood: string;
      foodReason: string;
    };
    /** What to do if you miss a dose */
    missedDose: string;
    /** Storage requirements */
    storage: string;
    /** Special instructions */
    specialInstructions: string[];
  };

  // What to watch for
  sideEffects: {
    /** Common, usually not serious */
    common: SideEffectEducation[];
    /** Less common but important */
    lessCommon: SideEffectEducation[];
    /** Rare but serious - when to call doctor */
    serious: SideEffectEducation[];
    /** How to manage common side effects */
    managementTips: SideEffectManagement[];
    /** When side effects typically improve */
    whenTheyImprove: string;
  };

  // Interactions
  interactions: {
    /** With other medications */
    drugInteractions: MedicationInteractionEducation[];
    /** With foods */
    foodInteractions: FoodInteractionEducation[];
    /** With supplements/herbs */
    supplementInteractions: InteractionEducation[];
    /** With alcohol */
    alcoholInteraction: string;
    /** Activities to be careful with */
    activityPrecautions: string[];
  };

  // Monitoring
  monitoring: {
    /** What tests you need and why */
    labTests: LabMonitoringEducation[];
    /** Symptoms to track */
    symptomsToTrack: string[];
    /** When to follow up */
    followUpSchedule: string;
  };

  // Questions for your pharmacist/doctor
  questionsToAsk: DoctorQuestion[];

  // Stopping the medication
  stoppingMedication: {
    /** Can you stop suddenly? */
    canStopSuddenly: boolean;
    /** Why you shouldn't stop suddenly (if applicable) */
    whyNotStopSuddenly?: string;
    /** How to stop safely */
    howToStop: string;
    /** What to discuss with doctor before stopping */
    discussWithDoctor: string[];
  };

  // Cost and access
  practicalInfo: {
    /** Generic availability */
    genericAvailable: boolean;
    /** Typical cost range */
    costRange?: string;
    /** Patient assistance programs */
    assistancePrograms?: string[];
    /** Tips for saving money */
    costSavingTips: string[];
  };

  // Related anatomy for visualization
  anatomyLinks: AnatomyEducationLink[];
}

export interface SideEffectEducation {
  effect: string;
  frequency: 'very-common' | 'common' | 'uncommon' | 'rare' | 'very-rare';
  whatItFeelsLike: string;
  whyItHappens: string;
  whenToWorry: string;
  urgency: UrgencyLevel;
}

export interface SideEffectManagement {
  effect: string;
  howToManage: string[];
  whenToCallDoctor: string;
}

export interface MedicationInteractionEducation {
  otherMedication: string;
  whatHappens: string;
  severity: 'minor' | 'moderate' | 'major' | 'contraindicated';
  whatToDo: string;
}

export interface FoodInteractionEducation {
  food: string;
  whatHappens: string;
  recommendation: string;
}

export interface InteractionEducation {
  substance: string;
  whatHappens: string;
  recommendation: string;
}

export interface LabMonitoringEducation {
  testName: string;
  whyNeeded: string;
  howOften: string;
  whatResultsMean: string;
}

// =============================================================================
// TEST/LAB DECODER - Understanding Your Test Results
// =============================================================================

/**
 * Comprehensive test education for patients
 * Helps patients understand WHY a test is ordered, WHAT it measures,
 * and WHAT their results mean
 */
export interface TestEducation {
  id: string;
  testName: string;
  alternativeNames: string[];
  category: 'blood' | 'urine' | 'imaging' | 'procedure' | 'genetic' | 'cardiac' | 'pulmonary' | 'other';

  // What does this test measure?
  whatItMeasures: MultiLevelExplanation & {
    visualMetaphor?: string;
  };

  // Why was this test ordered?
  whyOrdered: WhyOrderedExplanation[];

  // How to prepare for the test
  preparation: TestPreparation;

  // What happens during the test
  whatHappensDuring: {
    duration: string;
    whatToExpect: string;
    painLevel: 'none' | 'minimal' | 'mild' | 'moderate' | 'significant';
    aftercare: string;
  };

  // Understanding normal ranges
  normalRanges: NormalRangeEducation;

  // Interpreting results across different ranges
  resultInterpretation: ResultInterpretation[];

  // Common myths and facts
  commonMisconceptions: MisconceptionClarification[];

  // Related tests and conditions
  relatedTests: string[];
  relatedConditions: string[];

  // Anatomy visualization links
  anatomyLinks?: AnatomyEducationLink[];
}

export interface WhyOrderedExplanation {
  reason: string;
  explanation: MultiLevelExplanation;
  conditionsRelatedTo: string[];
}

export interface TestPreparation {
  fasting: 'yes' | 'no' | 'sometimes';
  fastingDetails?: string;
  medicationChanges: string;
  otherInstructions: string[];
  whatToTellDoctor: string[];
  reasonsForRestrictions: string;
}

export interface NormalRangeEducation {
  standardRange: {
    value: string;
    interpretation: MultiLevelExplanation;
  };
  ageVariations?: {
    ageGroup: string;
    range: string;
    explanation: string;
  }[];
  criticalValues?: {
    low: {
      value: string;
      whatItMeans: string;
      urgency: UrgencyLevel;
    };
    high: {
      value: string;
      whatItMeans: string;
      urgency: UrgencyLevel;
    };
  };
}

export interface ResultInterpretation {
  range: string;
  meaning: MultiLevelExplanation;
  implications: string[];
  nextSteps: string[];
}

export interface MisconceptionClarification {
  misconception: string;
  reality: string;
}

// =============================================================================
// TREATMENT RATIONALE - Understanding Your Treatment Plan
// =============================================================================

/**
 * Explains why a particular treatment plan was chosen
 */
export interface TreatmentRationaleEducation {
  id: string;
  conditionTreated: string;

  // The overall plan
  treatmentPlan: {
    /** Plain language summary */
    overview: MultiLevelExplanation;
    /** Goals we're trying to achieve */
    goals: TreatmentGoal[];
    /** How we'll know it's working */
    measuresOfSuccess: string[];
    /** Expected timeline */
    expectedTimeline: string;
  };

  // Each component explained
  components: TreatmentComponent[];

  // Why this approach
  whyThisApproach: {
    /** Evidence supporting this approach */
    evidence: EvidenceExplanation[];
    /** Alternatives that were considered */
    alternativesConsidered: AlternativeConsideration[];
    /** Why alternatives weren't chosen */
    whyNotAlternatives: string;
    /** What makes this right for YOU */
    personalizedReasoning: string[];
  };

  // Your role
  yourRole: {
    /** What you need to do */
    responsibilities: PatientResponsibility[];
    /** How to track progress */
    selfMonitoring: SelfMonitoringTask[];
    /** When to report back */
    reportingGuidelines: string[];
  };

  // If it doesn't work
  ifNotWorking: {
    /** Signs treatment isn't working */
    signsOfFailure: string[];
    /** How long to try before changing */
    timeToReassess: string;
    /** What changes might be made */
    possibleAdjustments: string[];
    /** This is normal and expected */
    reassurance: string;
  };
}

export interface TreatmentComponent {
  name: string;
  type: 'medication' | 'procedure' | 'therapy' | 'lifestyle' | 'monitoring' | 'other';
  whatItIs: MultiLevelExplanation;
  whyIncluded: string;
  howItFitsIn: string;
  yourPartInThis: string;
}

export interface EvidenceExplanation {
  finding: string;
  source: EvidenceSource;
  whatItMeansForYou: string;
}

export interface AlternativeConsideration {
  alternative: string;
  whyConsidered: string;
  whyNotChosen: string;
}

export interface PatientResponsibility {
  task: string;
  whyImportant: string;
  howToDoIt: string;
  frequency: string;
}

export interface SelfMonitoringTask {
  whatToTrack: string;
  howToTrack: string;
  whatToLookFor: string;
  whenToReport: string;
}

// =============================================================================
// ACTION PLANS - Self-Management Guides
// =============================================================================

/**
 * Personalized action plan for self-management
 */
export interface SelfManagementActionPlan {
  id: string;
  conditionId: string;
  conditionName: string;

  // Daily routine
  dailyRoutine: {
    morning: ActionPlanTask[];
    afternoon: ActionPlanTask[];
    evening: ActionPlanTask[];
    asNeeded: ActionPlanTask[];
  };

  // Medication schedule explained
  medicationSchedule: MedicationScheduleItem[];

  // Symptom tracking
  symptomTracking: {
    whatToTrack: SymptomTrackingItem[];
    howToTrack: string;
    whenToReport: string;
  };

  // Traffic light system for symptoms
  trafficLightSystem: {
    green: TrafficLightZone;
    yellow: TrafficLightZone;
    red: TrafficLightZone;
  };

  // Emergency plan
  emergencyPlan: {
    whenToCall911: string[];
    whenToGoToER: string[];
    whatToTellThem: string[];
    emergencyContacts: EmergencyContact[];
  };

  // Lifestyle guidance
  lifestyleGuidance: {
    diet: DietGuidance;
    exercise: ExerciseGuidance;
    sleep: SleepGuidance;
    stress: StressGuidance;
  };

  // Appointments and follow-up
  appointmentGuidance: {
    regularCheckups: string;
    whatToBring: string[];
    questionsToAsk: string[];
  };
}

export interface ActionPlanTask {
  task: string;
  time?: string;
  whyImportant: string;
  howToDo: string;
  checklistItem: boolean;
}

export interface MedicationScheduleItem {
  medicationName: string;
  time: string;
  dose: string;
  withFood: boolean;
  specialInstructions?: string;
  reminderTip: string;
}

export interface SymptomTrackingItem {
  symptom: string;
  howToMeasure: string;
  normalRange: string;
  concerningLevel: string;
}

export interface TrafficLightZone {
  name: string;
  description: string;
  symptoms: string[];
  actions: string[];
  reassurance?: string;
}

export interface EmergencyContact {
  role: string;
  number: string;
  whenToCall: string;
}

export interface DietGuidance {
  generalPrinciples: string[];
  foodsToEmphasize: FoodGuidance[];
  foodsToLimit: FoodGuidance[];
  mealPlanningTips: string[];
  hydration: string;
}

export interface FoodGuidance {
  food: string;
  reason: string;
  practicalTip: string;
}

export interface ExerciseGuidance {
  generalRecommendation: string;
  safeActivities: string[];
  activitiesToAvoid: string[];
  warningSignsDuringExercise: string[];
  startingOut: string;
}

export interface SleepGuidance {
  importance: string;
  recommendations: string[];
  sleepHygieneTips: string[];
  whenToSeekHelp: string;
}

export interface StressGuidance {
  whyItMatters: string;
  managementTechniques: string[];
  warningSignsOfBurnout: string[];
  resources: string[];
}

// =============================================================================
// HEALTH LITERACY TOOLS
// =============================================================================

/**
 * Medical terminology decoder for patients
 */
export interface MedicalTermEducation {
  term: string;
  pronunciation?: string;
  simpleDefinition: string;
  detailedDefinition: string;
  etymology?: string;
  usedIn: string[];
  relatedTerms: string[];
  commonMisunderstandings: string[];
}

/**
 * "Red flag" education - teaching patients what's truly urgent
 */
export interface RedFlagEducation {
  id: string;
  context: string; // e.g., "When you have chest pain"

  emergencySigns: EmergencySign[];
  urgentSigns: UrgentSign[];
  canWaitSigns: CanWaitSign[];

  reassurance: string;
  whenInDoubt: string;
}

export interface EmergencySign {
  sign: string;
  whyEmergency: string;
  actionToTake: 'call-911' | 'go-to-er-immediately';
  doNotWait: string;
}

export interface UrgentSign {
  sign: string;
  whyUrgent: string;
  timeframe: string;
  whereToGo: string;
}

export interface CanWaitSign {
  sign: string;
  whyOkToWait: string;
  whatToDo: string;
  whenToReconsider: string;
}

// =============================================================================
// PATIENT EMPOWERMENT TOOLS
// =============================================================================

/**
 * Generates relevant questions for patients to ask their healthcare providers
 */
export interface QuestionGenerator {
  context: 'new-diagnosis' | 'new-medication' | 'test-results' | 'treatment-plan' | 'follow-up' | 'second-opinion';
  baseQuestions: GeneratedQuestion[];
  conditionalQuestions: ConditionalQuestion[];
}

export interface GeneratedQuestion {
  question: string;
  whyAsk: string;
  expectedAnswerType: string;
  followUpIfUnclear: string;
  redFlagAnswer?: string;
}

export interface ConditionalQuestion {
  condition: string;
  questions: GeneratedQuestion[];
}

/**
 * Patient rights and self-advocacy education
 */
export interface PatientAdvocacyEducation {
  id: string;
  topic: string;

  yourRights: PatientRight[];
  howToAdvocate: AdvocacyStrategy[];
  communicationTips: CommunicationTip[];
  ifYouDisagree: string[];
  gettingSecondOpinion: string[];
  accessingRecords: string;
}

export interface PatientRight {
  right: string;
  explanation: string;
  howToExercise: string;
}

export interface AdvocacyStrategy {
  strategy: string;
  whenToUse: string;
  howToDoIt: string[];
}

export interface CommunicationTip {
  situation: string;
  tip: string;
  examplePhrase: string;
}
