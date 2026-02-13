/**
 * Respiratory System Type Definitions
 *
 * Comprehensive types for respiratory anatomy, ventilation mechanics,
 * and gas exchange at 5 complexity levels.
 */

/**
 * Respiratory tract division
 */
export type RespiratoryDivision = 'upper' | 'lower' | 'conducting' | 'respiratory';

/**
 * Respiratory region
 */
export type RespiratoryRegion =
  | 'nasal-cavity'
  | 'pharynx'
  | 'larynx'
  | 'trachea'
  | 'bronchi'
  | 'bronchioles'
  | 'alveoli'
  | 'lungs'
  | 'pleura'
  | 'respiratory-muscles';

/**
 * Lung lobe
 */
export type LungLobe =
  | 'right-upper'
  | 'right-middle'
  | 'right-lower'
  | 'left-upper'
  | 'left-lower'
  | 'lingula';

/**
 * Bronchopulmonary segment (19 total)
 */
export type BronchopulmonarySegment = string;

/**
 * Respiratory structure
 */
export interface RespiratoryStructure {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  meshId?: string;

  // Classification
  division: RespiratoryDivision;
  region: RespiratoryRegion;
  paired: boolean;
  side?: 'left' | 'right' | 'midline';

  // Anatomy
  location: string;
  function: string;
  epitheliumType?: string;
  cartilagePresent?: boolean;

  // Educational content
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];

  // Relations
  bloodSupply?: string[];
  innervation?: string[];
  lymphDrainage?: string[];

  // Clinical
  pathologies?: RespiratoryPathology[];
  relevantTests?: string[];

  // Cross-references
  relatedStructures?: string[];
}

/**
 * Respiratory pathology
 */
export interface RespiratoryPathology {
  name: string;
  description: string;
  symptoms?: string[];
  causes?: string[];
  relevantImaging?: string[];
  relevantLabs?: string[];
}

/**
 * Lung structure with lobes and segments
 */
export interface Lung {
  id: string;
  name: string;
  side: 'left' | 'right';
  fmaId: string;
  lobes: LungLobe[];
  segments: string[];
  fissures: string[];
  hilum: string;
  bronchialTree: string;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  bloodSupply: {
    pulmonary: string;
    bronchial: string;
  };
  lymphDrainage: string[];
  pathologies: RespiratoryPathology[];
}

/**
 * Respiratory muscle
 */
export interface RespiratoryMuscle {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  function: 'inspiration' | 'expiration' | 'accessory-inspiration' | 'accessory-expiration';
  origin: string;
  insertion: string;
  innervation: string;
  action: string;
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
 * Ventilation parameter
 */
export interface VentilationParameter {
  name: string;
  abbreviation: string;
  normalValue: string;
  unit: string;
  description: string;
  clinicalSignificance: string;
}

/**
 * Gas exchange concept
 */
export interface GasExchangeConcept {
  id: string;
  name: string;
  description: string;
  formula?: string;
  normalValues?: string;
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
  totalStructures: number;
  upperTract: number;
  lowerTract: number;
  respiratoryMuscles: number;
}
