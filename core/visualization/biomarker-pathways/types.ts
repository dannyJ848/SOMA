/**
 * Biomarker Pathway Visualization Types
 *
 * Types for connecting lab results to metabolic pathways
 * and anatomical highlighting.
 */

/**
 * Metabolic pathway category
 */
export type MetabolicPathwayCategory =
  | 'amino-acid'
  | 'carbohydrate'
  | 'lipid'
  | 'nucleotide'
  | 'heme'
  | 'vitamin'
  | 'hormone'
  | 'coagulation'
  | 'electrolyte';

/**
 * Enzyme location
 */
export type EnzymeLocation =
  | 'cytoplasm'
  | 'mitochondria'
  | 'endoplasmic-reticulum'
  | 'peroxisome'
  | 'nucleus'
  | 'plasma-membrane'
  | 'extracellular';

/**
 * Pathway state
 */
export type PathwayState = 'normal' | 'increased' | 'decreased' | 'blocked';

/**
 * Treatment mechanism
 */
export type TreatmentMechanism =
  | 'enzyme-inhibitor'
  | 'enzyme-inducer'
  | 'receptor-agonist'
  | 'receptor-antagonist'
  | 'substrate-supplement'
  | 'product-replacement'
  | 'transporter-inhibitor';

/**
 * Pathway enzyme step
 */
export interface PathwayEnzymeStep {
  stepNumber: number;
  enzyme: string;
  ecNumber?: string;
  gene?: string;
  substrate: string;
  product: string;
  cofactors?: string[];
  location: EnzymeLocation;
  organLocation: string;
  regulation?: string[];
  clinicalNote?: string;
}

/**
 * Abnormal pathway state
 */
export interface AbnormalPathwayState {
  state: PathwayState;
  cause: string;
  affectedSteps: number[];
  labChanges: {
    labId: string;
    direction: 'increased' | 'decreased';
    explanation: string;
  }[];
  clinicalConsequences: string[];
  conditions: string[];
}

/**
 * Treatment target
 */
export interface TreatmentTarget {
  targetStep: number;
  drug: string;
  mechanism: TreatmentMechanism;
  target: string;
  effect: string;
  labEffect: {
    labId: string;
    change: string;
  }[];
  sideEffects?: string[];
}

/**
 * 3D model highlight instruction
 */
export interface ModelHighlight {
  organId: string;
  organName: string;
  highlightColor: string;
  intensity: number;
  label: string;
  stepReferences: number[];
}

/**
 * Biomarker-linked pathway
 */
export interface BiomarkerPathway {
  id: string;
  name: string;
  category: MetabolicPathwayCategory;
  description: string;
  linkedLabs: string[];
  steps: PathwayEnzymeStep[];
  normalState: {
    description: string;
    labRanges: string;
  };
  abnormalStates: AbnormalPathwayState[];
  treatmentTargets: TreatmentTarget[];
  modelHighlights: ModelHighlight[];
  relatedPathways: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
}

/**
 * Lab-to-pathway link
 */
export interface LabPathwayLink {
  labId: string;
  labName: string;
  pathways: {
    pathwayId: string;
    pathwayName: string;
    relevance: string;
    affectedSteps: number[];
  }[];
}

/**
 * Biomarker visualization statistics
 */
export interface BiomarkerVisualizationStatistics {
  totalPathways: number;
  totalLabLinks: number;
  totalTreatmentTargets: number;
}
