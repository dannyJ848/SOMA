/**
 * Pathology Types
 *
 * Educational types for understanding disease mechanisms,
 * cellular changes, and how pathology manifests clinically.
 */

// ============================================
// Disease Mechanism Types
// ============================================

export type PathologicalCategory =
  | 'cell-injury'
  | 'inflammation'
  | 'hemodynamic'
  | 'genetic'
  | 'neoplastic'
  | 'infectious'
  | 'immunologic'
  | 'nutritional'
  | 'environmental'
  | 'degenerative';

/**
 * A disease mechanism at the pathological level
 */
export interface DiseaseMechanism {
  id: string;
  name: string;
  category: PathologicalCategory;

  /** Overview for students */
  overview: string;

  /** What causes this to happen */
  etiology: EtiologicalFactor[];

  /** Step by step pathogenesis */
  pathogenesis: PathogenesisStep[];

  /** Cellular and tissue changes */
  morphologicalChanges: MorphologicalChange[];

  /** How this manifests clinically */
  clinicalManifestations: ClinicalManifestation[];

  /** Conditions that feature this mechanism */
  associatedConditions: string[];

  /** Key molecules/mediators involved */
  keyMediators: Mediator[];

  /** What would be seen on labs/imaging */
  diagnosticFeatures: DiagnosticFeature[];

  /** How the body tries to fix it */
  compensatoryMechanisms: string[];

  /** Treatment principles */
  therapeuticTargets: TherapeuticTarget[];

  /** Complexity level */
  complexity: 'basic' | 'intermediate' | 'advanced';
}

// ============================================
// Etiology Types
// ============================================

export interface EtiologicalFactor {
  name: string;
  category: 'genetic' | 'infectious' | 'chemical' | 'physical' | 'nutritional' | 'immunologic' | 'unknown';
  mechanism: string;
  examples: string[];
  preventable: boolean;
}

// ============================================
// Pathogenesis Types
// ============================================

export interface PathogenesisStep {
  order: number;
  name: string;
  description: string;
  cellularLevel: string;
  molecularLevel?: string;
  timeframe?: string;
  reversible: boolean;
}

// ============================================
// Morphological Changes
// ============================================

export interface MorphologicalChange {
  level: 'gross' | 'microscopic' | 'ultrastructural' | 'molecular';
  description: string;
  appearance: string;
  significance: string;
  examples?: string[];
}

// ============================================
// Clinical Manifestation
// ============================================

export interface ClinicalManifestation {
  type: 'symptom' | 'sign' | 'laboratory' | 'imaging';
  name: string;
  mechanism: string;
  timing: 'early' | 'late' | 'constant';
  severity?: 'mild' | 'moderate' | 'severe';
}

// ============================================
// Mediator Types
// ============================================

export interface Mediator {
  name: string;
  type: 'cytokine' | 'enzyme' | 'hormone' | 'receptor' | 'antibody' | 'complement' | 'other';
  role: string;
  source: string;
  effects: string[];
  clinicalRelevance?: string;
}

// ============================================
// Diagnostic Features
// ============================================

export interface DiagnosticFeature {
  name: string;
  type: 'laboratory' | 'imaging' | 'pathology' | 'clinical';
  finding: string;
  significance: string;
  sensitivity?: number;
  specificity?: number;
}

// ============================================
// Therapeutic Target
// ============================================

export interface TherapeuticTarget {
  target: string;
  mechanism: string;
  drugClasses: string[];
  examples: string[];
  effectiveness: string;
}

// ============================================
// Cell Injury Types
// ============================================

export type CellInjuryType =
  | 'hypoxic'
  | 'ischemic'
  | 'toxic'
  | 'infectious'
  | 'immunologic'
  | 'genetic'
  | 'nutritional'
  | 'physical';

export interface CellInjuryMechanism {
  id: string;
  type: CellInjuryType;
  name: string;
  description: string;

  /** Initial cellular response */
  initialResponse: CellularResponse;

  /** Reversible changes */
  reversibleChanges: CellularChange[];

  /** Point of no return */
  irreversibilityThreshold: string;

  /** Irreversible changes leading to death */
  irreversibleChanges: CellularChange[];

  /** Type of cell death */
  deathPathway: 'necrosis' | 'apoptosis' | 'necroptosis' | 'pyroptosis' | 'ferroptosis';

  /** Markers of injury */
  markers: InjuryMarker[];
}

export interface CellularResponse {
  name: string;
  mechanism: string;
  purpose: string;
  duration: string;
}

export interface CellularChange {
  name: string;
  organelle?: string;
  description: string;
  appearance: string;
  mechanism: string;
  consequence: string;
}

export interface InjuryMarker {
  name: string;
  source: string;
  timing: string;
  clinicalUse: string;
  examples: string[];
}

// ============================================
// Inflammation Types
// ============================================

export type InflammationType = 'acute' | 'chronic' | 'granulomatous';

export interface InflammationMechanism {
  id: string;
  type: InflammationType;
  name: string;
  overview: string;

  /** Triggers */
  triggers: string[];

  /** Vascular changes */
  vascularChanges: VascularChange[];

  /** Cellular events */
  cellularEvents: CellularEvent[];

  /** Mediators involved */
  mediators: InflammatoryMediator[];

  /** Outcomes */
  outcomes: InflammationOutcome[];

  /** Systemic effects */
  systemicEffects: SystemicEffect[];
}

export interface VascularChange {
  name: string;
  timing: string;
  mechanism: string;
  effect: string;
}

export interface CellularEvent {
  cell: string;
  action: string;
  timing: string;
  mediators: string[];
  purpose: string;
}

export interface InflammatoryMediator {
  name: string;
  source: string;
  actions: string[];
  clinicalCorrelate?: string;
}

export interface InflammationOutcome {
  name: string;
  likelihood: string;
  conditions: string[];
  description: string;
}

export interface SystemicEffect {
  name: string;
  mechanism: string;
  clinicalFeature: string;
  severity: string;
}

// ============================================
// Neoplasia Types
// ============================================

export interface NeoplasiaEducation {
  id: string;
  name: string;
  overview: string;

  /** Normal vs neoplastic cell behavior */
  cellularBehavior: CellBehaviorComparison;

  /** Hallmarks of cancer */
  hallmarks: CancerHallmark[];

  /** Genetic basis */
  geneticBasis: GeneticAlteration[];

  /** Tumor progression */
  progression: TumorProgressionStage[];

  /** Spread mechanisms */
  metastasisMechanisms: MetastasisStep[];

  /** Clinical effects */
  clinicalEffects: NeoplasiaEffect[];
}

export interface CellBehaviorComparison {
  property: string;
  normalCell: string;
  neoplasticCell: string;
}

export interface CancerHallmark {
  name: string;
  description: string;
  mechanism: string;
  therapeuticTarget?: string;
  examples: string[];
}

export interface GeneticAlteration {
  type: 'oncogene' | 'tumor-suppressor' | 'dna-repair' | 'apoptosis';
  gene: string;
  normalFunction: string;
  alteration: string;
  consequence: string;
  associatedCancers: string[];
}

export interface TumorProgressionStage {
  stage: string;
  characteristics: string[];
  geneticChanges: string[];
  clinicalCorrelate: string;
}

export interface MetastasisStep {
  order: number;
  name: string;
  description: string;
  barriers: string[];
  facilitators: string[];
}

export interface NeoplasiaEffect {
  type: 'local' | 'systemic' | 'paraneoplastic';
  name: string;
  mechanism: string;
  symptoms: string[];
}

// ============================================
// Hemodynamic Disorders
// ============================================

export interface HemodynamicDisorder {
  id: string;
  name: string;
  category: 'edema' | 'hemorrhage' | 'thrombosis' | 'embolism' | 'infarction' | 'shock';
  overview: string;
  pathophysiology: string[];
  causes: string[];
  consequences: string[];
  clinicalFeatures: string[];
  management: string[];
}

// ============================================
// Immunopathology
// ============================================

export interface ImmunopathologyMechanism {
  id: string;
  name: string;
  type: 'hypersensitivity' | 'autoimmune' | 'immunodeficiency' | 'transplant-rejection';
  overview: string;
  mechanism: string[];
  cellsInvolved: string[];
  mediatorsInvolved: string[];
  exampleConditions: string[];
  clinicalFeatures: string[];
  treatment: string[];
}

export type HypersensitivityType = 'type1' | 'type2' | 'type3' | 'type4';

export interface HypersensitivityReaction {
  type: HypersensitivityType;
  name: string;
  mechanism: string;
  timing: string;
  mediators: string[];
  examples: string[];
  treatment: string[];
}
