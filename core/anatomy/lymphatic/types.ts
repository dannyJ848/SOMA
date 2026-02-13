/**
 * Lymphatic & Immune System Type Definitions
 *
 * Comprehensive types for lymphatic organs, vessels,
 * immune cells, and immune responses.
 */

/**
 * Lymphatic organ type
 */
export type LymphaticOrganType = 'primary' | 'secondary';

/**
 * Immune cell type
 */
export type ImmuneCellType =
  | 'lymphocyte'
  | 'myeloid'
  | 'innate-lymphoid'
  | 'antigen-presenting';

/**
 * Immunity type
 */
export type ImmunityType = 'innate' | 'adaptive';

/**
 * Lymphatic structure
 */
export interface LymphaticStructure {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  organType: LymphaticOrganType;
  location: string;
  function: string;
  dimensions?: string;
  histology?: string;
  cellPopulations?: string[];
  bloodSupply?: string[];
  drainage?: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  pathologies?: LymphaticPathology[];
  relevantLabs?: string[];
  relevantImaging?: string[];
  relatedStructures?: string[];
}

/**
 * Lymph node region
 */
export interface LymphNodeRegion {
  id: string;
  name: string;
  location: string;
  drainsFrom: string[];
  drainsTo: string;
  clinicalSignificance: string;
  palpable: boolean;
}

/**
 * Immune cell
 */
export interface ImmuneCell {
  id: string;
  name: string;
  alternateNames?: string[];
  type: ImmuneCellType;
  origin: string;
  maturationSite: string;
  lifespan: string;
  surfaceMarkers: string[];
  functions: string[];
  cytokinesProduced?: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  pathologies?: LymphaticPathology[];
}

/**
 * Cytokine
 */
export interface Cytokine {
  id: string;
  name: string;
  abbreviation?: string;
  source: string[];
  targets: string[];
  functions: string[];
  clinicalNote?: string;
}

/**
 * Immunoglobulin class
 */
export interface ImmunoglobulinClass {
  name: string;
  abbreviation: string;
  structure: string;
  location: string;
  functions: string[];
  percentageOfTotal: string;
  halfLife: string;
  clinicalNote?: string;
}

/**
 * Lymphatic pathology
 */
export interface LymphaticPathology {
  name: string;
  description: string;
  symptoms?: string[];
  causes?: string[];
  labFindings?: string[];
  relevantImaging?: string[];
}

/**
 * Immune response phase
 */
export interface ImmuneResponsePhase {
  phase: string;
  timeframe: string;
  description: string;
  keyEvents: string[];
  cells: string[];
}

/**
 * Lymphatic statistics
 */
export interface LymphaticStatistics {
  totalStructures: number;
  lymphNodes: string;
  immuneCellTypes: number;
  dailyLymphProduction: string;
}
