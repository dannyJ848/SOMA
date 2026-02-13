/**
 * Physiology Types
 *
 * Comprehensive types for deep physiological education.
 * Attending physician-level understanding of body systems.
 */

// ============================================
// Body System Types
// ============================================

export type BodySystemId =
  | 'cardiovascular'
  | 'respiratory'
  | 'nervous'
  | 'endocrine'
  | 'digestive'
  | 'urinary'
  | 'musculoskeletal'
  | 'immune'
  | 'integumentary'
  | 'reproductive'
  | 'lymphatic'
  | 'hematologic';

/**
 * Complete body system with educational content
 */
export interface BodySystem {
  id: BodySystemId;
  name: string;
  overview: string;

  /** Primary functions */
  functions: SystemFunction[];

  /** Major organs and structures */
  organs: SystemOrgan[];

  /** Key physiological processes */
  processes: PhysiologicalProcess[];

  /** Homeostatic mechanisms */
  homeostasis: HomeostasisMechanism[];

  /** Connections to other systems */
  systemInteractions: SystemInteraction[];

  /** Clinical correlations - what happens when things go wrong */
  clinicalCorrelations: ClinicalCorrelation[];

  /** Key metrics and normal values */
  normalParameters: NormalParameter[];

  /** Common conditions affecting this system */
  commonConditions: string[];

  /** Educational animations/visualizations available */
  visualizations: VisualizationReference[];
}

/**
 * Function of a body system
 */
export interface SystemFunction {
  name: string;
  description: string;
  importance: 'vital' | 'essential' | 'supportive';
  mechanismSummary: string;
}

/**
 * Organ within a system
 */
export interface SystemOrgan {
  name: string;
  description: string;
  functions: string[];
  location: string;
  bloodSupply?: string;
  innervation?: string;
  microanatomy?: MicroanatomyDetail[];
  clinicalNotes?: string;
}

/**
 * Microanatomy details
 */
export interface MicroanatomyDetail {
  structure: string;
  function: string;
  cellTypes?: string[];
}

// ============================================
// Physiological Process Types
// ============================================

/**
 * A physiological process (like action potential, gas exchange, etc.)
 */
export interface PhysiologicalProcess {
  id: string;
  name: string;
  system: BodySystemId;
  category: ProcessCategory;

  /** Plain language explanation */
  overview: string;

  /** Step-by-step mechanism */
  steps: ProcessStep[];

  /** Key molecules/ions involved */
  keyMolecules: Molecule[];

  /** Regulatory mechanisms */
  regulation: RegulationMechanism[];

  /** What happens when this goes wrong */
  dysfunction: DysfunctionScenario[];

  /** Clinical applications */
  clinicalRelevance: string[];

  /** Related processes */
  relatedProcesses: string[];

  /** Difficulty level for learning */
  complexity: 'basic' | 'intermediate' | 'advanced';
}

export type ProcessCategory =
  | 'transport'
  | 'signaling'
  | 'metabolism'
  | 'synthesis'
  | 'excretion'
  | 'protection'
  | 'regulation'
  | 'reproduction';

export interface ProcessStep {
  order: number;
  name: string;
  description: string;
  duration?: string;
  location?: string;
  triggers?: string[];
  results?: string[];
  moleculesInvolved?: string[];
}

export interface Molecule {
  name: string;
  type: 'ion' | 'protein' | 'hormone' | 'enzyme' | 'lipid' | 'carbohydrate' | 'nucleotide' | 'neurotransmitter' | 'receptor' | 'other';
  role: string;
  normalRange?: string;
  clinicalSignificance?: string;
}

// ============================================
// Homeostasis Types
// ============================================

/**
 * Homeostatic mechanism (feedback loop)
 */
export interface HomeostasisMechanism {
  id: string;
  name: string;
  type: 'negative-feedback' | 'positive-feedback' | 'feedforward';

  /** What is being regulated */
  regulatedVariable: string;
  normalRange: string;
  unit: string;

  /** Sensor that detects changes */
  sensor: FeedbackComponent;

  /** Control center that processes information */
  controlCenter: FeedbackComponent;

  /** Effector that creates response */
  effector: FeedbackComponent;

  /** What happens in response to increase */
  responseToIncrease: string;

  /** What happens in response to decrease */
  responseToDecrease: string;

  /** Clinical examples of when this fails */
  dysfunctionExamples: string[];

  /** Medications that affect this loop */
  pharmacologicalModifiers?: string[];
}

export interface FeedbackComponent {
  name: string;
  location: string;
  mechanism: string;
}

// ============================================
// System Interaction Types
// ============================================

/**
 * How body systems interact with each other
 */
export interface SystemInteraction {
  targetSystem: BodySystemId;
  interactionType: 'supports' | 'regulates' | 'depends-on' | 'modifies' | 'modulates';
  description: string;
  mechanisms: string[];
  clinicalImplications: string;
}

// ============================================
// Clinical Correlation Types
// ============================================

/**
 * When physiology goes wrong - the clinical picture
 */
export interface ClinicalCorrelation {
  name: string;
  normalPhysiology: string;
  pathophysiology: string;
  symptoms: string[];
  signs: string[];
  conditions: string[];
  diagnosticTests: string[];
  treatmentPrinciples: string[];
}

/**
 * What happens when a process doesn't work
 */
export interface DysfunctionScenario {
  name: string;
  mechanism: string;
  consequences: string[];
  clinicalPresentation: string;
  associatedConditions: string[];
}

// ============================================
// Regulation Types
// ============================================

export interface RegulationMechanism {
  name: string;
  type: 'neural' | 'hormonal' | 'paracrine' | 'autocrine' | 'intrinsic' | 'reflex' | 'local' | 'chemical' | 'structural' | 'cellular';
  description: string;
  mediators: string[];
  effect: 'stimulates' | 'inhibits' | 'modulates';
  clinicalApplications?: string[];
}

// ============================================
// Parameters and Metrics
// ============================================

export interface NormalParameter {
  name: string;
  normalRange: string;
  unit: string;
  significance: string;
  highImplications: string;
  lowImplications: string;
  factorsAffecting: string[];
}

// ============================================
// Visualization References
// ============================================

export interface VisualizationReference {
  id: string;
  type: 'animation' | 'diagram' | 'flowchart' | '3d-model' | 'video';
  name: string;
  description: string;
  conceptsCovered: string[];
}

// ============================================
// Learning Path Types
// ============================================

export interface PhysiologyLearningPath {
  id: string;
  name: string;
  description: string;
  targetLevel: 'beginner' | 'intermediate' | 'advanced' | 'clinical';
  systems: BodySystemId[];
  modules: LearningModule[];
  estimatedHours: number;
  prerequisites?: string[];
}

export interface LearningModule {
  id: string;
  name: string;
  objectives: string[];
  concepts: string[];
  processes: string[];
  assessmentQuestions?: AssessmentQuestion[];
}

export interface AssessmentQuestion {
  question: string;
  type: 'multiple-choice' | 'true-false' | 'explanation';
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  concept: string;
}

// ============================================
// Deep Dive Types (for attending-level detail)
// ============================================

export interface CellularMechanism {
  id: string;
  name: string;
  cellType: string;
  organelle?: string;
  description: string;
  molecularDetails: MolecularDetail[];
  energyRequirement?: string;
  regulation: RegulationMechanism[];
  clinicalRelevance: string[];
}

export interface MolecularDetail {
  molecule: string;
  structure?: string;
  function: string;
  interactions: string[];
  disorders: string[];
}

export interface SignalingPathway {
  id: string;
  name: string;
  type: 'receptor-mediated' | 'intracellular' | 'paracrine' | 'endocrine';
  ligand: string;
  receptor: ReceptorInfo;
  secondMessengers: string[];
  cascadeSteps: SignalingStep[];
  cellularEffects: string[];
  physiologicalOutcomes: string[];
  pharmacologicalTargets: DrugTarget[];
}

export interface ReceptorInfo {
  name: string;
  type: 'gpcr' | 'ion-channel' | 'tyrosine-kinase' | 'nuclear' | 'other';
  location: 'membrane' | 'cytoplasm' | 'nucleus';
  endogenousLigands: string[];
}

export interface SignalingStep {
  order: number;
  component: string;
  action: string;
  result: string;
}

export interface DrugTarget {
  drugClass: string;
  mechanism: string;
  clinicalUse: string;
  examples: string[];
}
