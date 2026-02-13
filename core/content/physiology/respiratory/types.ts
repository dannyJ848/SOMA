/**
 * Respiratory Physiology Type Definitions
 *
 * Types for ventilation mechanics, gas exchange, oxygen transport,
 * respiratory control, pulmonary function testing, and acid-base balance.
 */

/**
 * Lung volume type
 */
export type LungVolumeType =
  | 'tidal-volume'
  | 'inspiratory-reserve-volume'
  | 'expiratory-reserve-volume'
  | 'residual-volume'
  | 'inspiratory-capacity'
  | 'functional-residual-capacity'
  | 'vital-capacity'
  | 'total-lung-capacity';

/**
 * Respiratory muscle type
 */
export type RespiratoryMuscleType =
  | 'diaphragm'
  | 'external-intercostals'
  | 'internal-intercostals'
  | 'sternocleidomastoid'
  | 'scalenes'
  | 'abdominal-muscles'
  | 'pectoralis-minor';

/**
 * Chemoreceptor type
 */
export type ChemoreceptorType =
  | 'central-chemoreceptor'
  | 'carotid-body'
  | 'aortic-body';

/**
 * Acid-base disorder type
 */
export type RespiratoryAcidBaseDisorderType =
  | 'respiratory-acidosis'
  | 'respiratory-alkalosis'
  | 'metabolic-acidosis'
  | 'metabolic-alkalosis'
  | 'mixed-disorder';

/**
 * Pulmonary pattern type
 */
export type PulmonaryPatternType =
  | 'obstructive'
  | 'restrictive'
  | 'mixed'
  | 'normal';

/**
 * Ventilation-perfusion state
 */
export type VQStateType =
  | 'normal'
  | 'dead-space'
  | 'shunt'
  | 'silent-unit';

/**
 * Lung volume definition with multi-level explanations
 */
export interface LungVolume {
  id: string;
  name: string;
  type: LungVolumeType;
  abbreviation: string;
  normalValue: string;
  unit: string;
  measurementMethod: 'spirometry' | 'plethysmography' | 'dilution';
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
 * Respiratory muscle anatomy and function
 */
export interface RespiratoryMuscle {
  id: string;
  name: string;
  type: RespiratoryMuscleType;
  role: 'inspiration' | 'expiration' | 'accessory-inspiration' | 'accessory-expiration';
  innervation: string;
  action: string;
  activePhase: 'quiet-breathing' | 'forced-breathing' | 'both';
  clinicalRelevance: string;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Compliance concept
 */
export interface ComplianceConcept {
  id: string;
  name: string;
  definition: string;
  formula: string;
  normalValue: string;
  unit: string;
  determinants: string[];
  clinicalImplications: {
    increased: string[];
    decreased: string[];
  };
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Gas exchange concept
 */
export interface GasExchangeConcept {
  id: string;
  name: string;
  location: string;
  mechanism: string;
  drivingForce: string;
  barriers: string[];
  diffusionCapacity: {
    oxygen: string;
    carbonDioxide: string;
  };
  limitingFactors: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * V/Q matching concept
 */
export interface VQMatchingConcept {
  id: string;
  name: string;
  ratio: string;
  description: string;
  hypoxicResponse: string;
  clinicalExamples: string[];
  compensatoryMechanisms: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Oxygen-hemoglobin dissociation curve point
 */
export interface OxygenHemoglobinPoint {
  pO2: number;
  saturation: number;
  description: string;
}

/**
 * Curve shift factor
 */
export interface CurveShiftFactor {
  factor: string;
  direction: 'left' | 'right';
  mechanism: string;
  clinicalImplication: string;
}

/**
 * Oxygen transport concept
 */
export interface OxygenTransportConcept {
  id: string;
  name: string;
  normalP50: string;
  curveShape: string;
  physiologicalBasis: string;
  shiftFactors: CurveShiftFactor[];
  keyPoints: OxygenHemoglobinPoint[];
  clinicalApplications: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Carbon dioxide transport form
 */
export interface CO2TransportForm {
  form: string;
  percentage: string;
  location: string;
  mechanism: string;
}

/**
 * Carbon dioxide transport concept
 */
export interface CO2TransportConcept {
  id: string;
  name: string;
  transportForms: CO2TransportForm[];
  bicarbonateBuffer: {
    equation: string;
    enzyme: string;
    location: string;
  };
  bohrEffect: {
    description: string;
    mechanism: string;
    significance: string;
  };
  haldaneEffect: {
    description: string;
    mechanism: string;
    significance: string;
  };
  chlorideShift: {
    description: string;
    purpose: string;
  };
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Chemoreceptor definition
 */
export interface Chemoreceptor {
  id: string;
  name: string;
  type: ChemoreceptorType;
  location: string;
  primaryStimulus: string;
  secondaryStimuli: string[];
  afferentNerve: string;
  responseCharacteristics: string;
  clinicalRelevance: string;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Respiratory control center
 */
export interface RespiratoryControlCenter {
  id: string;
  name: string;
  location: string;
  function: string;
  inputs: string[];
  outputs: string[];
  disorderWhenDamaged: string;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * PFT parameter
 */
export interface PFTParameter {
  name: string;
  abbreviation: string;
  normalValue: string;
  interpretation: {
    low: string;
    high: string;
  };
  clinicalUse: string;
}

/**
 * PFT pattern
 */
export interface PFTPattern {
  id: string;
  name: string;
  type: PulmonaryPatternType;
  fev1: 'decreased' | 'normal' | 'decreased-proportionally';
  fvc: 'normal' | 'decreased';
  fev1FvcRatio: 'decreased' | 'normal' | 'increased';
  tlc: 'normal-increased' | 'decreased';
  examples: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * ABG interpretation
 */
export interface ABGInterpretation {
  id: string;
  name: string;
  type: RespiratoryAcidBaseDisorderType;
  pH: 'low' | 'high' | 'normal';
  pCO2: 'low' | 'high' | 'normal';
  HCO3: 'low' | 'high' | 'normal';
  compensationExpected: string;
  acuteChronic: 'acute' | 'chronic' | 'both';
  causes: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Respiratory compensation formula
 */
export interface CompensationFormula {
  disorder: string;
  expectedChange: string;
  formula: string;
  timeframe: string;
}

/**
 * Pulmonary abnormality
 */
export interface PulmonaryAbnormality {
  id: string;
  name: string;
  category: 'obstructive' | 'restrictive' | 'vascular' | 'neuromuscular';
  pathophysiology: string;
  pftFindings: {
    fev1: string;
    fvc: string;
    ratio: string;
    dlco: string;
  };
  abgFindings: {
    pO2: string;
    pCO2: string;
    aAGradient: string;
  };
  clinicalFeatures: string[];
  examples: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Respiratory statistics
 */
export interface RespiratoryStatistics {
  respiratoryRate: {
    adult: string;
    child: string;
    infant: string;
  };
  tidalVolume: string;
  minuteVentilation: string;
  alveolarVentilation: string;
  deadSpace: string;
  oxygenConsumption: string;
  co2Production: string;
  respiratoryQuotient: string;
}
