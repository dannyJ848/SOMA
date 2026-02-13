/**
 * Physical Examination Education Types
 *
 * Comprehensive types for learning how physicians perform
 * physical examinations - the art and science of extracting
 * diagnostic information from patient encounters.
 */

// ============================================
// Examination System Types
// ============================================

export type ExamSystemId =
  | 'general'
  | 'heent'
  | 'neck'
  | 'cardiovascular'
  | 'respiratory'
  | 'abdominal'
  | 'musculoskeletal'
  | 'neurological'
  | 'skin'
  | 'psychiatric';

export type ExamTechnique = 'inspection' | 'palpation' | 'percussion' | 'auscultation' | 'special-test';

// ============================================
// Physical Exam Education
// ============================================

/**
 * Complete education about examining a body system
 */
export interface SystemExamEducation {
  id: ExamSystemId;
  name: string;
  fullName: string;

  /** Overview of what this exam assesses */
  overview: string;

  /** Why this exam is important */
  clinicalImportance: string;

  /** Equipment needed */
  equipmentNeeded: ExamEquipment[];

  /** Patient positioning requirements */
  patientPositioning: PositioningGuideline[];

  /** Systematic approach to this exam */
  approach: ExamApproach;

  /** Individual examination components */
  components: ExamComponent[];

  /** Special tests for this system */
  specialTests: SpecialTest[];

  /** Integration with other systems */
  relatedSystems: SystemRelationship[];

  /** Common patterns of findings */
  findingPatterns: FindingPattern[];

  /** Red flags requiring immediate action */
  redFlags: ExamRedFlag[];

  /** Common mistakes to avoid */
  commonMistakes: ExamMistake[];

  /** Clinical pearls for this exam */
  clinicalPearls: string[];
}

// ============================================
// Equipment and Setup
// ============================================

export interface ExamEquipment {
  name: string;
  purpose: string;
  howToUse: string;
  alternatives?: string;
  tips: string[];
}

export interface PositioningGuideline {
  position: string;
  whenUsed: string;
  howToAchieve: string;
  alternatives: string[];
  considerations: string;
}

// ============================================
// Examination Approach
// ============================================

export interface ExamApproach {
  /** Recommended order of examination */
  sequence: ExamSequenceStep[];

  /** How to adapt for different situations */
  adaptations: ExamAdaptation[];

  /** Time considerations */
  typicalDuration: string;

  /** Documentation tips */
  documentationTemplate: string;
}

export interface ExamSequenceStep {
  order: number;
  action: string;
  rationale: string;
  whatToObserve: string[];
  transitionTip?: string;
}

export interface ExamAdaptation {
  scenario: string;
  modification: string;
  rationale: string;
}

// ============================================
// Examination Components
// ============================================

export interface ExamComponent {
  id: string;
  name: string;
  technique: ExamTechnique;

  /** How to perform this component */
  howToPerform: ExamProcedure;

  /** What normal looks/feels/sounds like */
  normalFinding: NormalFinding;

  /** Abnormal findings and their significance */
  abnormalFindings: AbnormalFinding[];

  /** What this component assesses */
  whatItAssesses: string;

  /** Anatomical basis */
  anatomy: string;

  /** Pathophysiology of abnormalities */
  pathophysiology: string;

  /** Clinical significance */
  clinicalSignificance: string;

  /** Sensitivity/specificity if known */
  diagnosticAccuracy?: DiagnosticAccuracy;

  /** Common pitfalls */
  pitfalls: string[];

  /** Tips for improvement */
  practiceTips: string[];
}

export interface ExamProcedure {
  steps: ProcedureStep[];
  landmarks: AnatomicalLandmark[];
  patientInstructions: string;
  examinerPosition: string;
  commonErrors: string[];
}

export interface ProcedureStep {
  order: number;
  action: string;
  detail: string;
  tip?: string;
}

export interface AnatomicalLandmark {
  name: string;
  howToFind: string;
  significance: string;
}

// ============================================
// Findings
// ============================================

export interface NormalFinding {
  description: string;
  variations: string[];
  ageConsiderations: string;
  documentationExample: string;
}

export interface AbnormalFinding {
  name: string;
  description: string;
  appearance: string;
  mechanism: string;
  associatedConditions: string[];
  severity: 'mild' | 'moderate' | 'severe' | 'critical';
  urgency: 'routine' | 'soon' | 'urgent' | 'emergent';
  nextSteps: string[];
  differentialDiagnosis: string[];
  additionalTestsNeeded: string[];
  documentationExample: string;
}

export interface DiagnosticAccuracy {
  sensitivity: string;
  specificity: string;
  positiveLR?: string;
  negativeLR?: string;
  notes: string;
}

// ============================================
// Special Tests
// ============================================

export interface SpecialTest {
  id: string;
  name: string;
  alternateNames: string[];
  system: ExamSystemId;

  /** What condition(s) this test evaluates */
  purpose: string;

  /** When to perform this test */
  indications: string[];

  /** When NOT to perform */
  contraindications: string[];

  /** Step-by-step instructions */
  procedure: SpecialTestProcedure;

  /** What constitutes positive/negative */
  interpretation: TestInterpretation;

  /** Diagnostic accuracy */
  accuracy: DiagnosticAccuracy;

  /** Clinical utility */
  clinicalUtility: string;

  /** Common errors */
  commonErrors: string[];

  /** Evidence and history */
  evidence: string;
}

export interface SpecialTestProcedure {
  patientPosition: string;
  examinerPosition: string;
  steps: ProcedureStep[];
  patientInstructions: string;
  duration: string;
}

export interface TestInterpretation {
  positiveResult: string;
  negativeResult: string;
  falsePositives: string[];
  falseNegatives: string[];
  clinicalContext: string;
}

// ============================================
// Pattern Recognition
// ============================================

export interface FindingPattern {
  name: string;
  description: string;
  findings: PatternFinding[];
  suggestsDiagnosis: string[];
  mechanism: string;
  clinicalScenario: string;
  keyLearningPoint: string;
}

export interface PatternFinding {
  component: string;
  finding: string;
  significance: string;
}

// ============================================
// Red Flags
// ============================================

export interface ExamRedFlag {
  finding: string;
  concernFor: string;
  mechanism: string;
  immediateActions: string[];
  neverMiss: boolean;
}

// ============================================
// Common Mistakes
// ============================================

export interface ExamMistake {
  mistake: string;
  consequence: string;
  howToAvoid: string;
  correctTechnique: string;
}

// ============================================
// System Relationships
// ============================================

export interface SystemRelationship {
  relatedSystem: ExamSystemId;
  relationship: string;
  whenToExamineTogether: string;
  clinicalExample: string;
}

// ============================================
// Documentation
// ============================================

export interface ExamDocumentation {
  system: ExamSystemId;
  normalTemplate: string;
  abnormalTemplates: AbnormalDocTemplate[];
  abbreviations: Abbreviation[];
  tips: string[];
}

export interface AbnormalDocTemplate {
  finding: string;
  template: string;
  requiredElements: string[];
}

export interface Abbreviation {
  abbreviation: string;
  meaning: string;
  context: string;
}

// ============================================
// Learning and Practice
// ============================================

export interface ExamPracticeCase {
  id: string;
  scenario: string;
  expectedFindings: ExpectedFinding[];
  diagnosis: string;
  teachingPoints: string[];
}

export interface ExpectedFinding {
  component: string;
  finding: string;
  significance: string;
  ifMissed: string;
}

export interface ExamSkillAssessment {
  skill: string;
  criteria: AssessmentCriterion[];
  commonDeficiencies: string[];
  remediationTips: string[];
}

export interface AssessmentCriterion {
  criterion: string;
  weight: number;
  howToAssess: string;
}
