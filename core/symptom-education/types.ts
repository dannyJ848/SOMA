/**
 * Symptom Education Types
 *
 * Deep educational content for understanding symptoms at
 * attending physician level - what they mean, why they happen,
 * and how to think about them.
 */

// ============================================
// Classification
// ============================================

export type SymptomCategory =
  | 'pain'
  | 'sensory'
  | 'motor'
  | 'autonomic'
  | 'constitutional'
  | 'respiratory'
  | 'cardiac'
  | 'gastrointestinal'
  | 'neurological'
  | 'psychiatric'
  | 'musculoskeletal'
  | 'dermatological'
  | 'urological'
  | 'gynecological';

export type SymptomMechanismType =
  | 'nociceptive'
  | 'neuropathic'
  | 'inflammatory'
  | 'ischemic'
  | 'mechanical'
  | 'chemical'
  | 'referred'
  | 'central'
  | 'autonomic'
  | 'psychological';

// ============================================
// Core Symptom Education
// ============================================

/**
 * Comprehensive educational content about a symptom
 */
export interface SymptomEducation {
  id: string;
  name: string;
  aliases: string[];
  category: SymptomCategory;

  /** Plain language: What does this symptom feel like? */
  whatItFeelsLike: string;

  /** Why does this symptom happen? (physiology) */
  whyItHappens: WhySymptomHappens;

  /** The neural pathways involved */
  neuralPathways?: NeuralPathwayEducation;

  /** Anatomical structures that can cause this */
  anatomicalSources: AnatomySourceEducation[];

  /** Characteristics that help identify the cause */
  diagnosticCharacteristics: DiagnosticCharacteristic[];

  /** Red flags - when to worry */
  redFlagEducation: RedFlagEducation[];

  /** Common causes with educational context */
  commonCauses: CauseEducation[];

  /** Less common but important causes */
  seriousCauses: CauseEducation[];

  /** How doctors think about this symptom */
  clinicalReasoning: ClinicalReasoningEducation;

  /** What to expect during evaluation */
  evaluationEducation: EvaluationEducation;

  /** Self-care and when it's appropriate */
  selfCareEducation: SelfCareEducation;

  /** Patient questions to ask their doctor */
  questionsForDoctor: string[];

  /** Clinical pearls for deeper understanding */
  clinicalPearls: string[];
}

// ============================================
// Mechanism Education
// ============================================

export interface WhySymptomHappens {
  /** Simple explanation */
  simpleExplanation: string;

  /** Detailed pathophysiology */
  detailedMechanism: string;

  /** Types of mechanisms involved */
  mechanismTypes: MechanismEducation[];

  /** How the body detects and transmits this sensation */
  sensoryPathway: string;

  /** Why location/character matters */
  localizationExplanation: string;
}

export interface MechanismEducation {
  type: SymptomMechanismType;
  name: string;
  explanation: string;
  examples: string[];
  characteristics: string[];
}

// ============================================
// Neural Pathway Education
// ============================================

export interface NeuralPathwayEducation {
  /** What receptors detect this */
  receptors: ReceptorEducation[];

  /** The pathway to the brain */
  pathwayDescription: string;

  /** Where it's processed */
  processingCenters: string[];

  /** Why this matters clinically */
  clinicalRelevance: string;

  /** Referred pain explanation */
  referredPainExplanation?: string;
}

export interface ReceptorEducation {
  name: string;
  type: string;
  whatItDetects: string;
  location: string;
  clinicalRelevance: string;
}

// ============================================
// Anatomical Source Education
// ============================================

export interface AnatomySourceEducation {
  structure: string;
  structureId: string;
  system: string;

  /** How this structure causes this symptom */
  mechanism: string;

  /** Typical characteristics when from this source */
  typicalPresentation: string[];

  /** What makes it better or worse */
  modifyingFactors: {
    aggravating: string[];
    relieving: string[];
  };

  /** Associated symptoms */
  associatedSymptoms: string[];

  /** How common is this source */
  frequency: 'common' | 'less-common' | 'rare';

  /** Educational context */
  educationalNotes: string;
}

// ============================================
// Diagnostic Characteristics
// ============================================

export interface DiagnosticCharacteristic {
  characteristic: string;
  category: 'quality' | 'location' | 'timing' | 'severity' | 'associated' | 'modifying';

  /** What this characteristic tells us */
  diagnosticValue: string;

  /** Examples of how it helps differentiate */
  differentiatingExamples: {
    finding: string;
    suggestsSource: string;
    explanation: string;
  }[];
}

// ============================================
// Red Flag Education
// ============================================

export interface RedFlagEducation {
  flag: string;

  /** Why this is concerning */
  whyConcerning: string;

  /** What it might indicate */
  possibleIndications: string[];

  /** What action to take */
  recommendedAction: string;

  /** Urgency level */
  urgency: 'emergent' | 'urgent' | 'prompt';

  /** Questions the doctor might ask about this */
  expectedQuestions: string[];

  /** Educational context */
  educationalContext: string;
}

// ============================================
// Cause Education
// ============================================

export interface CauseEducation {
  cause: string;
  conditionId?: string;

  /** Plain language description */
  description: string;

  /** How it causes the symptom */
  mechanism: string;

  /** Typical presentation */
  typicalPresentation: {
    onset: string;
    character: string;
    location: string;
    duration: string;
    associatedSymptoms: string[];
  };

  /** Who gets this */
  riskFactors: string[];

  /** How it's diagnosed */
  howDiagnosed: string;

  /** How it's treated (educational) */
  treatmentOverview: string;

  /** Prognosis */
  prognosis: string;
}

// ============================================
// Clinical Reasoning Education
// ============================================

export interface ClinicalReasoningEducation {
  /** How doctors approach this symptom */
  approachOverview: string;

  /** Key questions in the history */
  keyHistoryQuestions: HistoryQuestion[];

  /** What the physical exam looks for */
  physicalExamFocus: ExamFocus[];

  /** How causes are differentiated */
  differentiationApproach: string;

  /** Common diagnostic pathways */
  diagnosticPathways: DiagnosticPathway[];
}

export interface HistoryQuestion {
  question: string;
  whyAsked: string;
  whatItReveals: {
    answer: string;
    suggests: string;
  }[];
}

export interface ExamFocus {
  examination: string;
  whatLookingFor: string;
  findings: {
    finding: string;
    interpretation: string;
  }[];
}

export interface DiagnosticPathway {
  scenario: string;
  initialWorkup: string[];
  decisionPoints: {
    ifFinding: string;
    thenConsider: string;
    nextStep: string;
  }[];
}

// ============================================
// Evaluation Education
// ============================================

export interface EvaluationEducation {
  /** What to expect at the visit */
  whatToExpect: string;

  /** Common tests that might be ordered */
  commonTests: TestEducation[];

  /** When imaging might be needed */
  whenImagingNeeded: string;

  /** When specialist referral might happen */
  whenSpecialistReferral: string;

  /** How to prepare for the visit */
  howToPrepare: string[];
}

export interface TestEducation {
  testName: string;
  whatItChecks: string;
  whyOrdered: string;
  whatToExpect: string;
}

// ============================================
// Self-Care Education
// ============================================

export interface SelfCareEducation {
  /** When self-care is appropriate */
  whenAppropriate: string;

  /** Evidence-based self-care measures */
  selfCareMeasures: SelfCareMeasure[];

  /** When to seek care despite trying self-care */
  whenToSeekCare: string[];

  /** Common misconceptions */
  commonMisconceptions: {
    myth: string;
    truth: string;
  }[];
}

export interface SelfCareMeasure {
  measure: string;
  howItHelps: string;
  howToDo: string;
  cautions: string[];
  evidenceLevel: 'strong' | 'moderate' | 'limited' | 'traditional';
}

// ============================================
// Learning Modules
// ============================================

export interface SymptomLearningModule {
  id: string;
  title: string;
  objectives: string[];
  symptoms: string[];
  keyConcepts: SymptomConcept[];
  clinicalScenarios: ClinicalScenario[];
  reviewQuestions: ReviewQuestion[];
}

export interface SymptomConcept {
  concept: string;
  explanation: string;
  clinicalApplication: string;
  commonMistakes: string[];
}

export interface ClinicalScenario {
  presentation: string;
  patientDescription: string;
  keyFindings: string[];
  reasoningProcess: string;
  likelyDiagnosis: string;
  teachingPoints: string[];
}

export interface ReviewQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  relatedConcept: string;
}
