/**
 * Lipid Metabolism Type Definitions
 *
 * Types for lipid absorption, lipoprotein metabolism,
 * cholesterol transport, and atherosclerosis.
 */

/**
 * Lipoprotein class
 */
export type LipoproteinClass =
  | 'chylomicron'
  | 'vldl'
  | 'idl'
  | 'ldl'
  | 'hdl'
  | 'lipoprotein-a';

/**
 * Lipid absorption step
 */
export interface LipidAbsorptionStep {
  stepNumber: number;
  name: string;
  location: string;
  description: string;
  molecules: string[];
  enzymes?: string[];
  transporters?: string[];
  clinicalNote?: string;
}

/**
 * Lipoprotein particle
 */
export interface LipoproteinParticle {
  id: string;
  name: string;
  class: LipoproteinClass;
  density: string;
  size: string;
  composition: {
    triglycerides: string;
    cholesterol: string;
    phospholipids: string;
    protein: string;
  };
  apolipoproteins: string[];
  source: string;
  function: string;
  metabolism: string;
  clinicalSignificance: string;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Lipoprotein lifecycle stage
 */
export interface LipoproteinLifecycleStage {
  stageName: string;
  lipoprotein: LipoproteinClass;
  location: string;
  description: string;
  keyEvents: string[];
  enzymes?: string[];
  receptors?: string[];
  products?: string[];
}

/**
 * HDL reverse transport step
 */
export interface ReverseTransportStep {
  stepNumber: number;
  name: string;
  location: string;
  description: string;
  molecules: string[];
  enzymes?: string[];
  transporters?: string[];
  clinicalNote?: string;
}

/**
 * Atherosclerosis stage
 */
export interface AtherosclerosisStage {
  stageName: string;
  timeframe: string;
  description: string;
  keyEvents: string[];
  cells: string[];
  lesionType: string;
  reversible: boolean;
  clinicalConsequence?: string;
}

/**
 * Drug mechanism in lipid metabolism
 */
export interface LipidDrugMechanism {
  drug: string;
  drugClass: string;
  target: string;
  mechanism: string;
  effect: string;
  ldlReduction: string;
  sideEffects: string[];
  contraindications?: string[];
}

/**
 * Lab-lipid correlation
 */
export interface LabLipidCorrelation {
  labId: string;
  labName: string;
  lipoproteins: string[];
  interpretation: string;
  targetValues: string;
}

/**
 * Lipid metabolism statistics
 */
export interface LipidMetabolismStatistics {
  dailyCholesterolSynthesis: string;
  dailyCholesterolAbsorption: string;
  dailyBileAcidSynthesis: string;
  ldlHalfLife: string;
  hdlHalfLife: string;
}
