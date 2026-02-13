/**
 * Fluid and Electrolyte Balance Types
 * 
 * Comprehensive types for body fluid compartments, electrolyte physiology,
 * acid-base balance, and clinical disorders.
 */

/**
 * Body fluid compartment
 */
export type FluidCompartment = 'intracellular' | 'extracellular' | 'interstitial' | 'intravascular';

/**
 * Major electrolyte
 */
export type MajorElectrolyte = 'sodium' | 'potassium' | 'chloride' | 'bicarbonate' | 'calcium' | 'magnesium' | 'phosphate';

/**
 * Body fluid compartments
 */
export interface BodyFluidCompartment {
  id: string;
  name: string;
  percentageTBW: number;
  volumeIn70kgAdult: string;
  composition: {
    cations: { ion: string; concentration: string }[];
    anions: { ion: string; concentration: string }[];
  };
  barriers: string[];
  regulation: string[];
  clinicalSignificance: string[];
}

/**
 * Electrolyte physiology
 */
export interface ElectrolytePhysiology {
  ion: MajorElectrolyte;
  symbol: string;
  atomicNumber: number;
  normalRange: {
    serum: string;
    intracellular?: string;
    urine?: string;
  };
  dailyIntake: string;
  dailyExcretion: string;
  
  // Physiological roles
  functions: {
    cellular: string[];
    organSystem: { system: string; role: string }[];
  };
  
  // Homeostasis mechanisms
  homeostasis: {
    intake: string[];
    distribution: string[];
    excretion: string[];
    hormonalRegulation: string[];
  };
  
  // Balance regulation
  regulation: {
    sensors: string[];
    effectors: string[];
    hormones: string[];
  };
  
  // Clinical considerations
  abnormalities: {
    hyper: ElectrolyteAbnormality;
    hypo: ElectrolyteAbnormality;
  };
  
  // Explanations at different levels
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
  };
}

/**
 * Electrolyte abnormality
 */
export interface ElectrolyteAbnormality {
  condition: string;
  prefix: string;
  definition: string;
  causes: string[];
  symptoms: string[];
  signs: string[];
  ecgChanges?: string[];
  treatment: string[];
  urgency: 'emergency' | 'urgent' | 'routine';
}

/**
 * Fluid balance mechanism
 */
export interface FluidBalanceMechanism {
  id: string;
  name: string;
  description: string;
  sensors: string[];
  hormones: string[];
  effectorOrgans: string[];
  response: string;
  clinicalRelevance: string[];
}

/**
 * Renal handling of electrolytes
 */
export interface RenalElectrolyteHandling {
  electrolyte: string;
  filteredLoad: string;
  reabsorption: {
    percentage: string;
    sites: { segment: string; percentage: string; mechanism: string }[];
  };
  secretion: {
    sites: string[];
    regulation: string[];
  };
  factorsAffecting: string[];
  diureticEffects: { diuretic: string; site: string; effect: string }[];
}

/**
 * Acid-base balance
 */
export interface AcidBaseBalance {
  id: string;
  name: string;
  normalPH: string;
  normalRange: string;
  bufferSystems: BufferSystem[];
  respiratoryCompensation: {
    mechanism: string;
    timeframe: string;
    effectiveness: string;
  };
  renalCompensation: {
    mechanism: string;
    timeframe: string;
    effectiveness: string;
  };
  disturbances: AcidBaseDisturbance[];
}

/**
 * Buffer system
 */
export interface BufferSystem {
  name: string;
  components: string[];
  pKa: string;
  capacity: string;
  mechanism: string;
  clinicalSignificance: string[];
}

/**
 * Acid-base disturbance
 */
export interface AcidBaseDisturbance {
  name: string;
  type: 'metabolic-acidosis' | 'metabolic-alkalosis' | 'respiratory-acidosis' | 'respiratory-alkalosis';
  primaryChange: string;
  compensation: {
    expected: string;
    mechanism: string;
  };
  causes: string[];
  clinicalFeatures: string[];
  treatment: string[];
}

/**
 * Osmolarity and tonicity
 */
export interface OsmolarityConcept {
  id: string;
  name: string;
  definition: string;
  normalRange: string;
  calculation: string;
  clinicalSignificance: string[];
  disorders: {
    hyperosmolar: { causes: string[]; symptoms: string[]; treatment: string[] };
    hypoosmolar: { causes: string[]; symptoms: string[]; treatment: string[] };
  };
}

/**
 * Dehydration types
 */
export interface DehydrationType {
  type: 'isotonic' | 'hypertonic' | 'hypotonic';
  description: string;
  sodiumLevel: string;
  waterLoss: string;
  soluteLoss: string;
  causes: string[];
  clinicalFeatures: string[];
  treatment: string;
}

/**
 * Volume status assessment
 */
export interface VolumeStatusAssessment {
  id: string;
  name: string;
  physicalSigns: { sign: string; sensitivity: string; specificity: string }[];
  laboratoryFindings: { finding: string; interpretation: string }[];
  imagingFindings?: { finding: string; interpretation: string }[];
  invasiveMeasurements?: { measurement: string; normal: string; low: string; high: string }[];
}

/**
 * Fluid therapy principles
 */
export interface FluidTherapy {
  id: string;
  fluidType: string;
  composition: { [key: string]: string };
  osmolarity: string;
  distribution: FluidCompartment[];
  indications: string[];
  contraindications: string[];
  cautions: string[];
  rateCalculation: string;
  monitoring: string[];
}
