/**
 * Clinical Case Simulator Types
 *
 * Types for interactive clinical case-based learning that teaches
 * users how physicians think through medical problems.
 */

// ============================================
// Case Structure
// ============================================

export type CaseComplexity = 'beginner' | 'introductory' | 'intermediate' | 'advanced' | 'expert';
export type CaseCategory =
  | 'emergency'
  | 'internal-medicine'
  | 'cardiology'
  | 'pulmonology'
  | 'gastroenterology'
  | 'neurology'
  | 'infectious-disease'
  | 'endocrinology'
  | 'hematology'
  | 'rheumatology'
  | 'primary-care'
  | 'surgery'
  | 'nephrology'
  | 'oncology'
  | 'pediatrics'
  | 'obstetrics-gynecology'
  | 'psychiatry';

/**
 * A complete clinical case for learning
 */
export interface ClinicalCase {
  id: string;
  title: string;
  category: CaseCategory;
  complexity: CaseComplexity;

  /** Learning objectives for this case */
  learningObjectives: string[];

  /** The patient presentation */
  presentation: PatientPresentation;

  /** Available information to gather */
  availableData: AvailableData;

  /** The clinical journey through this case */
  caseFlow: CaseFlow;

  /** The diagnosis and explanation */
  resolution: CaseResolution;

  /** Key teaching points */
  teachingPoints: TeachingPoint[];

  /** Common mistakes learners make */
  commonPitfalls: string[];

  /** Related cases to explore */
  relatedCases: string[];
}

// ============================================
// Patient Presentation
// ============================================

export interface PatientPresentation {
  /** Opening scenario */
  chiefComplaint: string;

  /** Demographic info revealed at start */
  demographics: {
    age: number;
    sex: 'male' | 'female';
    occupation?: string;
    context?: string; // e.g., "presents to ED", "in clinic"
  };

  /** Initial narrative */
  openingParagraph: string;

  /** What the patient looks like at first glance */
  generalAppearance: string;

  /** Initial vital signs */
  vitalSigns: VitalSigns;
}

export interface VitalSigns {
  temperature?: string;
  heartRate?: string;
  bloodPressure?: string;
  respiratoryRate?: string;
  oxygenSaturation?: string;
  interpretation?: string;
}

// ============================================
// Available Data
// ============================================

export interface AvailableData {
  /** History questions that can be asked */
  historyQuestions: HistoryItem[];

  /** Physical exam findings that can be elicited */
  physicalExam: ExamSection[];

  /** Labs that can be ordered (legacy format) */
  availableLabs?: LabOrderOption[];

  /** Labs that can be ordered (new format) */
  labOrders?: LabOrder[];

  /** Imaging that can be ordered (legacy format) */
  availableImaging?: ImagingOrderOption[];

  /** Imaging that can be ordered (new format) */
  imagingOrders?: ImagingOrder[];

  /** Other tests available */
  otherTests?: TestOrderOption[];
}

export interface HistoryItem {
  id: string;
  question: string;
  category: 'hpi' | 'pmh' | 'medications' | 'allergies' | 'social' | 'family' | 'ros';
  response: string;
  /** What this piece of history teaches or reveals */
  educationalNote: string;
  /** Is this a key piece of information? */
  isKeyFinding: boolean;
}

export interface ExamSection {
  system: string;
  findings: ExamFinding[];
}

export interface ExamFinding {
  id: string;
  exam: string;
  finding: string;
  isNormal: boolean;
  isKeyFinding: boolean;
  educationalNote: string;
}

export interface LabOrderOption {
  id: string;
  name: string;
  turnaroundTime: string;
  cost: 'low' | 'medium' | 'high';
  result: LabResult;
  isAppropriate: boolean;
  educationalNote: string;
}

export interface LabResult {
  values: { name: string; value: string; unit: string; isAbnormal: boolean; flag?: 'high' | 'low' | 'critical' }[];
  interpretation: string;
}

export interface ImagingOrderOption {
  id: string;
  name: string;
  turnaroundTime: string;
  cost: 'low' | 'medium' | 'high';
  result: ImagingResult;
  isAppropriate: boolean;
  educationalNote: string;
}

export interface ImagingResult {
  findings: string;
  impression: string;
  imageDescription?: string;
}

export interface TestOrderOption {
  id: string;
  name: string;
  turnaroundTime: string;
  result: string;
  isAppropriate: boolean;
  educationalNote: string;
}

// ============================================
// New Format Lab/Imaging Types
// ============================================

/**
 * Lab order in simplified format (new cases)
 */
export interface LabOrder {
  id: string;
  name: string;
  category?: 'basic' | 'specialty' | 'advanced';
  turnaroundTime: string;
  result: SimplifiedLabResult;
}

export interface SimplifiedLabResult {
  value: string;
  interpretation: string;
  isAbnormal: boolean;
  educationalNote: string;
}

/**
 * Imaging order in simplified format (new cases)
 */
export interface ImagingOrder {
  id: string;
  name: string;
  modality: 'CT' | 'Ultrasound' | 'X-ray' | 'MRI' | 'Nuclear' | 'Fluoroscopy';
  turnaroundTime: string;
  result: SimplifiedImagingResult;
}

export interface SimplifiedImagingResult {
  finding: string;
  interpretation: string;
  isAbnormal: boolean;
  educationalNote: string;
}

// ============================================
// Case Flow
// ============================================

export interface CaseFlow {
  /** Stages the case progresses through */
  stages: CaseStage[];

  /** Decision points where learner makes choices */
  decisionPoints: DecisionPoint[];

  /** Potential paths through the case */
  paths: CasePath[];
}

export interface CaseStage {
  id: string;
  name: string;
  description: string;
  /** Data available at this stage */
  availableDataIds?: string[];
  /** Next decision point */
  nextDecisionPointId?: string;
}

export interface DecisionPoint {
  id: string;
  stageId: string;
  question: string;
  context: string;
  options: DecisionOption[];
  correctOptionId: string;
  educationalExplanation: string;
}

export interface DecisionOption {
  id: string;
  text: string;
  consequence: string;
  isCorrect: boolean;
  feedback: string;
  nextStageId?: string;
}

export interface CasePath {
  id: string;
  name: string;
  description: string;
  stageSequence: string[];
  outcome: 'optimal' | 'acceptable' | 'suboptimal' | 'harmful';
}

// ============================================
// Case Resolution
// ============================================

export interface CaseResolution {
  /** The final diagnosis */
  diagnosis: DiagnosisExplanation;

  /** How the diagnosis was reached */
  diagnosticReasoning: string;

  /** Key findings that led to diagnosis */
  keyFindings: string[];

  /** Treatment approach */
  treatment: TreatmentExplanation;

  /** Patient outcome in this case */
  outcome: string;

  /** Follow-up and monitoring */
  followUp: string;
}

export interface DiagnosisExplanation {
  name: string;
  icdCode?: string;
  explanation: string;
  pathophysiology: string;
  epidemiology: string;
  prognosis: string;
}

export interface TreatmentExplanation {
  immediate: string;
  medications: MedicationPrescription[];
  procedures?: string;
  monitoring: string;
  patientEducation: string[];
}

export interface MedicationPrescription {
  name: string;
  dose: string;
  route: string;
  frequency: string;
  rationale: string;
}

// ============================================
// Teaching Points
// ============================================

export interface TeachingPoint {
  topic: string;
  content: string;
  category: 'clinical-pearl' | 'pathophysiology' | 'diagnostic-approach' | 'treatment' | 'pitfall';
  importance: 'critical' | 'important' | 'helpful';
}

// ============================================
// Simulator Session
// ============================================

export interface CaseSimulatorSession {
  caseId: string;
  startTime: string;
  currentStageId: string;

  /** Data the learner has gathered */
  gatheredHistory: string[];
  performedExams: string[];
  orderedLabs: string[];
  orderedImaging: string[];
  orderedTests: string[];

  /** Decisions made */
  decisions: SessionDecision[];

  /** Performance tracking */
  performance: PerformanceMetrics;

  /** Session status */
  status: 'in-progress' | 'completed' | 'abandoned';
  endTime?: string;
}

export interface SessionDecision {
  decisionPointId: string;
  selectedOptionId: string;
  wasCorrect: boolean;
  timestamp: string;
}

export interface PerformanceMetrics {
  /** Did learner identify key findings? */
  keyFindingsIdentified: number;
  totalKeyFindings: number;

  /** Decision accuracy */
  correctDecisions: number;
  totalDecisions: number;

  /** Efficiency (did they order unnecessary tests?) */
  unnecessaryTestsOrdered: number;

  /** Did they miss any critical steps? */
  missedCriticalSteps: string[];

  /** Final diagnosis correct? */
  diagnosisCorrect: boolean;

  /** Overall assessment */
  overallScore: number;
  grade: 'excellent' | 'good' | 'passing' | 'needs-improvement';
}

// ============================================
// Case Generation (AI-assisted)
// ============================================

export interface CaseGenerationRequest {
  /** What diagnosis to center the case on */
  targetDiagnosis: string;

  /** Complexity level */
  complexity: CaseComplexity;

  /** Any specific teaching points to include */
  teachingFocus?: string[];

  /** Patient demographics preferences */
  demographics?: {
    ageRange?: [number, number];
    sex?: 'male' | 'female' | 'either';
  };

  /** Include distractors/red herrings */
  includeDistractors: boolean;

  /** Generate variants of classic presentation */
  atypicalPresentation: boolean;
}

export interface GeneratedCase {
  case: ClinicalCase;
  generationMetadata: {
    model: string;
    timestamp: string;
    seed?: string;
  };
  validationStatus: 'pending' | 'validated' | 'needs-review';
}

// ============================================
// Progress Tracking
// ============================================

export interface LearnerProgress {
viscerallearnerId: string;
  completedCases: CompletedCase[];
  topicMastery: TopicMastery[];
  overallStats: OverallStats;
}

export interface CompletedCase {
  caseId: string;
  completedAt: string;
  performance: PerformanceMetrics;
  timeSpent: number;
  revisited: number;
}

export interface TopicMastery {
  topic: string;
  category: CaseCategory;
  casesCompleted: number;
  averageScore: number;
  lastPracticed: string;
  masteryLevel: 'novice' | 'developing' | 'proficient' | 'expert';
}

export interface OverallStats {
  totalCasesCompleted: number;
  averageScore: number;
  totalTimeSpent: number;
  strongAreas: string[];
  areasForImprovement: string[];
  recommendedNextCases: string[];
}
