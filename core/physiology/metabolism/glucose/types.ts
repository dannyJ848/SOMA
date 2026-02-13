/**
 * Glucose Metabolism Type Definitions
 *
 * Types for glucose absorption, insulin signaling,
 * metabolic pathways, and diabetes pathophysiology.
 */

/**
 * GLUT transporter type
 */
export type GLUTType =
  | 'GLUT1'
  | 'GLUT2'
  | 'GLUT3'
  | 'GLUT4'
  | 'GLUT5'
  | 'SGLT1'
  | 'SGLT2';

/**
 * Metabolic pathway type
 */
export type GlucosePathwayType =
  | 'glycolysis'
  | 'gluconeogenesis'
  | 'glycogenesis'
  | 'glycogenolysis'
  | 'pentose-phosphate'
  | 'tca-cycle';

/**
 * Diabetes type
 */
export type DiabetesType = 'type1' | 'type2' | 'gestational' | 'mody' | 'secondary';

/**
 * Diabetic complication category
 */
export type ComplicationCategory = 'microvascular' | 'macrovascular' | 'metabolic';

/**
 * Glucose absorption step
 */
export interface GlucoseAbsorptionStep {
  stepNumber: number;
  name: string;
  location: string;
  description: string;
  transporters: string[];
  mechanism: string;
  clinicalNote?: string;
}

/**
 * GLUT transporter
 */
export interface GLUTTransporter {
  id: string;
  name: GLUTType;
  gene: string;
  km: string;
  tissues: string[];
  regulation: string;
  function: string;
  insulinDependent: boolean;
  clinicalNote?: string;
}

/**
 * Insulin secretion step
 */
export interface InsulinSecretionStep {
  stepNumber: number;
  name: string;
  location: string;
  description: string;
  molecules: string[];
  mechanism: string;
}

/**
 * Insulin signaling step
 */
export interface InsulinSignalingStep {
  stepNumber: number;
  name: string;
  molecules: string[];
  description: string;
  effect: string;
  defectConsequence?: string;
}

/**
 * Metabolic pathway
 */
export interface MetabolicPathway {
  id: string;
  name: string;
  type: GlucosePathwayType;
  location: string;
  netReaction: string;
  keyEnzymes: PathwayEnzyme[];
  regulatorySteps: string[];
  energyYield?: string;
  feedingState: 'fed' | 'fasted' | 'both';
  primaryTissues: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Pathway enzyme
 */
export interface PathwayEnzyme {
  name: string;
  ecNumber?: string;
  reaction: string;
  regulation: string[];
  isRateLimiting: boolean;
  clinicalNote?: string;
}

/**
 * Diabetes pathophysiology
 */
export interface DiabetesPathophysiology {
  type: DiabetesType;
  name: string;
  prevalence: string;
  pathogenesis: string[];
  geneticFactors: string[];
  environmentalFactors: string[];
  metabolicDefects: string[];
  clinicalFeatures: string[];
  diagnosticCriteria: string[];
  complications: string[];
  treatments: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Diabetic complication
 */
export interface DiabeticComplication {
  id: string;
  name: string;
  category: ComplicationCategory;
  pathogenesis: string[];
  affectedOrgans: string[];
  clinicalFeatures: string[];
  screening: string[];
  prevention: string[];
  treatment: string[];
}

/**
 * Anti-diabetic drug
 */
export interface AntiDiabeticDrug {
  drug: string;
  drugClass: string;
  mechanism: string;
  target: string;
  effect: string;
  hba1cReduction: string;
  sideEffects: string[];
  contraindications?: string[];
  cvBenefit?: string;
}

/**
 * Lab-glucose correlation
 */
export interface LabGlucoseCorrelation {
  labId: string;
  labName: string;
  interpretation: string;
  diagnosticCriteria: string[];
  targetValues: string;
}

/**
 * Glucose metabolism statistics
 */
export interface GlucoseMetabolismStatistics {
  dailyGlucoseProduction: string;
  brainGlucoseUsage: string;
  liverGlycogenCapacity: string;
  muscleGlycogenCapacity: string;
  insulinHalfLife: string;
}
