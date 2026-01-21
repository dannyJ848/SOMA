/**
 * Electrolyte and Fluid Balance Type Definitions
 *
 * Types for nephron electrolyte handling, hormonal regulation,
 * acid-base balance, and clinical correlations.
 */

/**
 * Electrolyte type
 */
export type ElectrolyteType =
  | 'sodium'
  | 'potassium'
  | 'calcium'
  | 'magnesium'
  | 'chloride'
  | 'bicarbonate'
  | 'phosphate';

/**
 * Nephron segment type
 */
export type NephronSegmentType =
  | 'glomerulus'
  | 'proximal-convoluted-tubule'
  | 'proximal-straight-tubule'
  | 'thin-descending-limb'
  | 'thin-ascending-limb'
  | 'thick-ascending-limb'
  | 'distal-convoluted-tubule'
  | 'connecting-tubule'
  | 'cortical-collecting-duct'
  | 'medullary-collecting-duct';

/**
 * Hormone type for fluid/electrolyte regulation
 */
export type FluidHormoneType =
  | 'aldosterone'
  | 'ADH'
  | 'ANP'
  | 'BNP'
  | 'PTH'
  | 'calcitonin'
  | 'vitamin-D'
  | 'angiotensin-II';

/**
 * Acid-base disorder type
 */
export type AcidBaseDisorderType =
  | 'metabolic-acidosis'
  | 'metabolic-alkalosis'
  | 'respiratory-acidosis'
  | 'respiratory-alkalosis'
  | 'mixed';

/**
 * Compensation type
 */
export type CompensationType = 'respiratory' | 'renal' | 'buffer';

/**
 * Nephron segment electrolyte handling
 */
export interface NephronSegment {
  id: string;
  name: string;
  type: NephronSegmentType;
  location: string;
  permeability: {
    water: 'high' | 'low' | 'variable' | 'impermeable';
    sodium: 'high' | 'moderate' | 'low';
    urea: 'high' | 'moderate' | 'low' | 'impermeable';
  };
  transporters: SegmentTransporter[];
  reabsorption: ElectrolyteHandling[];
  secretion: ElectrolyteHandling[];
  regulation: string[];
  osmolarity: string;
  clinicalNote?: string;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Segment transporter
 */
export interface SegmentTransporter {
  name: string;
  type: 'channel' | 'pump' | 'cotransporter' | 'exchanger' | 'aquaporin';
  membrane: 'apical' | 'basolateral' | 'both';
  ions: string[];
  direction: 'reabsorption' | 'secretion' | 'bidirectional';
  energetics: 'active' | 'passive' | 'secondary-active';
  regulation?: string[];
  drugTarget?: string;
}

/**
 * Electrolyte handling at a segment
 */
export interface ElectrolyteHandling {
  electrolyte: ElectrolyteType;
  percentage: string;
  mechanism: string;
  regulation: string[];
}

/**
 * Hormone mechanism for fluid/electrolyte regulation
 */
export interface FluidHormone {
  id: string;
  name: string;
  type: FluidHormoneType;
  source: string;
  stimulus: string[];
  inhibitors: string[];
  targetOrgan: string[];
  targetCells: string[];
  receptorType: string;
  mechanism: string[];
  effects: HormoneEffect[];
  feedback: string[];
  halfLife: string;
  clinicalUse?: string;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Hormone effect
 */
export interface HormoneEffect {
  target: string;
  action: string;
  netEffect: string;
}

/**
 * Aldosterone mechanism step
 */
export interface AldosteroneMechanismStep {
  stepNumber: number;
  name: string;
  location: string;
  description: string;
  molecules: string[];
  effect: string;
}

/**
 * ADH mechanism step
 */
export interface ADHMechanismStep {
  stepNumber: number;
  name: string;
  location: string;
  description: string;
  molecules: string[];
  effect: string;
}

/**
 * Calcium regulation axis
 */
export interface CalciumRegulationAxis {
  id: string;
  name: string;
  organs: string[];
  hormones: string[];
  steps: CalciumAxisStep[];
  feedbackLoops: string[];
  disorderExamples: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Calcium axis step
 */
export interface CalciumAxisStep {
  stepNumber: number;
  trigger: string;
  response: string;
  effector: string;
  outcome: string;
}

/**
 * Acid-base concept
 */
export interface AcidBaseConcept {
  id: string;
  name: string;
  normalValues: {
    pH: string;
    pCO2: string;
    HCO3: string;
    baseExcess: string;
  };
  bufferSystems: BufferSystem[];
  regulatoryOrgans: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Buffer system
 */
export interface BufferSystem {
  name: string;
  components: string[];
  location: string;
  capacity: string;
  speed: string;
  equation?: string;
}

/**
 * Acid-base disorder
 */
export interface AcidBaseDisorder {
  id: string;
  name: string;
  type: AcidBaseDisorderType;
  labFindings: {
    pH: 'low' | 'high' | 'normal';
    pCO2: 'low' | 'high' | 'normal';
    HCO3: 'low' | 'high' | 'normal';
  };
  causes: string[];
  pathophysiology: string;
  compensation: CompensationResponse;
  clinicalFeatures: string[];
  treatment: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Compensation response
 */
export interface CompensationResponse {
  type: CompensationType;
  mechanism: string;
  expectedResponse: string;
  timeframe: string;
}

/**
 * Clinical electrolyte disorder
 */
export interface ElectrolyteDisorder {
  id: string;
  name: string;
  electrolyte: ElectrolyteType;
  direction: 'hypo' | 'hyper';
  definition: string;
  causes: DisorderCause[];
  pathophysiology: string;
  clinicalFeatures: ClinicalFeature[];
  ecgFindings?: string[];
  diagnosis: string[];
  treatment: TreatmentApproach[];
  complications: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Disorder cause
 */
export interface DisorderCause {
  category: string;
  examples: string[];
}

/**
 * Clinical feature
 */
export interface ClinicalFeature {
  system: string;
  symptoms: string[];
  severity: 'mild' | 'moderate' | 'severe' | 'varies';
}

/**
 * Treatment approach
 */
export interface TreatmentApproach {
  indication: string;
  intervention: string;
  monitoring: string[];
  cautions: string[];
}

/**
 * Lab-electrolyte correlation
 */
export interface LabElectrolyteCorrelation {
  labId: string;
  labName: string;
  normalRange: string;
  unit: string;
  interpretation: {
    low: string;
    high: string;
  };
  relatedLabs: string[];
  urgentValues: {
    criticalLow: string;
    criticalHigh: string;
  };
}

/**
 * Fluid compartment
 */
export interface FluidCompartment {
  id: string;
  name: string;
  volumePercent: string;
  volumeAbsolute: string;
  mainCation: string;
  mainAnion: string;
  osmolarity: string;
  barriers: string[];
  movementFactors: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Electrolyte physiology statistics
 */
export interface ElectrolyteStatistics {
  totalBodyWater: string;
  dailySodiumIntake: string;
  dailyPotassiumIntake: string;
  dailyCalciumIntake: string;
  glomerularFiltrationRate: string;
  sodiumFiltered: string;
  sodiumExcreted: string;
}
