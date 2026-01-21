/**
 * Reproductive System Type Definitions
 *
 * Comprehensive types for male and female reproductive systems,
 * gametogenesis, menstrual cycle, and pregnancy.
 */

/**
 * Reproductive system sex
 */
export type BiologicalSex = 'male' | 'female';

/**
 * Male reproductive structure type
 */
export type MaleStructureType =
  | 'gonad'
  | 'duct'
  | 'accessory-gland'
  | 'external-genitalia'
  | 'support';

/**
 * Female reproductive structure type
 */
export type FemaleStructureType =
  | 'gonad'
  | 'duct'
  | 'uterus'
  | 'external-genitalia'
  | 'support';

/**
 * Male reproductive structure
 */
export interface MaleReproductiveStructure {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  type: MaleStructureType;
  location: string;
  function: string;
  dimensions?: string;
  histology?: string;
  bloodSupply?: string[];
  venousDrainage?: string[];
  innervation?: {
    sympathetic?: string;
    parasympathetic?: string;
    somatic?: string;
  };
  secretions?: {
    name: string;
    function: string;
    composition?: string[];
  }[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  pathologies?: ReproductivePathology[];
  relevantLabs?: string[];
  relevantImaging?: string[];
  relatedStructures?: string[];
}

/**
 * Female reproductive structure
 */
export interface FemaleReproductiveStructure {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  type: FemaleStructureType;
  location: string;
  function: string;
  dimensions?: string;
  histology?: string;
  bloodSupply?: string[];
  venousDrainage?: string[];
  innervation?: {
    sympathetic?: string;
    parasympathetic?: string;
    somatic?: string;
  };
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  pathologies?: ReproductivePathology[];
  relevantLabs?: string[];
  relevantImaging?: string[];
  relatedStructures?: string[];
}

/**
 * Reproductive pathology
 */
export interface ReproductivePathology {
  name: string;
  description: string;
  symptoms?: string[];
  causes?: string[];
  labFindings?: string[];
  relevantImaging?: string[];
}

/**
 * Gametogenesis stage
 */
export interface GametogenesisStage {
  stage: string;
  cellType: string;
  ploidy: string;
  location: string;
  description: string;
  duration?: string;
}

/**
 * Menstrual cycle phase
 */
export interface MenstrualCyclePhase {
  name: string;
  duration: string;
  dayRange: string;
  ovarian: string;
  uterine: string;
  hormones: {
    name: string;
    level: 'low' | 'rising' | 'high' | 'falling' | 'peak';
    source: string;
  }[];
  events: string[];
}

/**
 * Reproductive hormone
 */
export interface ReproductiveHormone {
  id: string;
  name: string;
  abbreviation?: string;
  source: string;
  targetTissues: string[];
  functions: string[];
  regulation: {
    stimulatedBy: string[];
    inhibitedBy: string[];
  };
  normalRangeMale?: string;
  normalRangeFemale?: string;
  clinicalNote?: string;
}

/**
 * Pregnancy milestone
 */
export interface PregnancyMilestone {
  week: number;
  trimester: 1 | 2 | 3;
  fetalDevelopment: string[];
  maternalChanges: string[];
  keyEvents: string[];
}

/**
 * Reproductive statistics
 */
export interface ReproductiveStatistics {
  maleStructures: number;
  femaleStructures: number;
  hormones: number;
  menstrualCycleLength: string;
  gestationLength: string;
}
