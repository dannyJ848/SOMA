/**
 * Cardiovascular System Type Definitions
 *
 * Comprehensive types for heart anatomy, vessels, conduction system,
 * and cardiac physiology at 5 complexity levels.
 */

/**
 * Vessel types
 */
export type VesselType = 'artery' | 'arteriole' | 'capillary' | 'venule' | 'vein' | 'lymphatic';

/**
 * Vessel layer types
 */
export type VesselLayer = 'tunica-intima' | 'tunica-media' | 'tunica-adventitia';

/**
 * Arterial classification
 */
export type ArteryType = 'elastic' | 'muscular' | 'arteriole';

/**
 * Vein classification
 */
export type VeinType = 'large' | 'medium' | 'small' | 'venule' | 'venous-sinus';

/**
 * Cardiovascular region
 */
export type CardiovascularRegion =
  | 'heart-chambers'
  | 'heart-valves'
  | 'heart-conduction'
  | 'coronary'
  | 'great-vessels'
  | 'head-neck-arteries'
  | 'head-neck-veins'
  | 'upper-limb-arteries'
  | 'upper-limb-veins'
  | 'thorax-arteries'
  | 'thorax-veins'
  | 'abdomen-arteries'
  | 'abdomen-veins'
  | 'pelvis-arteries'
  | 'pelvis-veins'
  | 'lower-limb-arteries'
  | 'lower-limb-veins'
  | 'portal-system';

/**
 * Heart wall layer
 */
export type HeartWallLayer = 'endocardium' | 'myocardium' | 'epicardium' | 'pericardium';

/**
 * Cardiac valve type
 */
export type ValveType = 'atrioventricular' | 'semilunar';

/**
 * Heart chamber
 */
export interface HeartChamber {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  location: string;
  function: string;
  receivesFrom: string[];    // Vessels/chambers draining into this chamber
  drainsTo: string[];        // Vessels/chambers this chamber drains to
  wallThickness?: string;    // Approximate wall thickness
  normalPressure?: {
    systolic: number;
    diastolic: number;
    unit: string;
  };
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  clinicalNotes?: string[];
}

/**
 * Cardiac valve
 */
export interface CardiacValve {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  type: ValveType;
  location: string;
  cusps: number;
  cuspNames?: string[];
  function: string;
  auscultationPoint: string;
  normalSounds: string;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  pathologies?: ValvePathology[];
}

/**
 * Valve pathology
 */
export interface ValvePathology {
  name: string;
  description: string;
  murmurCharacteristics?: string;
  etiology?: string[];
  symptoms?: string[];
  relevantTests?: string[];
}

/**
 * Conduction system node
 */
export interface ConductionNode {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  location: string;
  function: string;
  intrinsicRate: string;     // Beats per minute
  cellType: string;
  bloodSupply?: string;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  clinicalNotes?: string[];
}

/**
 * ECG correlation
 */
export interface ECGCorrelation {
  wave: 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'PR-interval' | 'QRS-complex' | 'ST-segment' | 'QT-interval';
  structure: string;
  normalValue?: string;
  abnormalities?: string[];
}

/**
 * Blood vessel
 */
export interface BloodVessel {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  meshId?: string;

  // Classification
  vesselType: VesselType;
  subtype?: ArteryType | VeinType;
  region: CardiovascularRegion;
  paired: boolean;
  side?: 'left' | 'right' | 'midline';

  // Anatomy
  location: string;
  origin: string;           // Where it starts/branches from
  termination: string;      // Where it ends/drains to
  branches?: string[];      // Major branches (for arteries)
  tributaries?: string[];   // Tributaries (for veins)
  territory?: string;       // Supply/drainage territory

  // Educational content
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];

  // Clinical
  palpationPoint?: string;
  clinicalNotes?: string[];
  pathologies?: VesselPathology[];
  relevantLabs?: string[];

  // Cross-references
  relatedVessels?: string[];
  suppliedStructures?: string[];  // Organs/tissues supplied
  drainedStructures?: string[];   // Organs/tissues drained
}

/**
 * Vessel pathology
 */
export interface VesselPathology {
  name: string;
  description: string;
  riskFactors?: string[];
  symptoms?: string[];
  relevantImaging?: string[];
}

/**
 * Cardiac cycle phase
 */
export interface CardiacCyclePhase {
  name: string;
  duration: string;
  valveStates: {
    mitral: 'open' | 'closed';
    tricuspid: 'open' | 'closed';
    aortic: 'open' | 'closed';
    pulmonary: 'open' | 'closed';
  };
  heartSounds?: string[];
  pressureChanges: string;
  description: string;
}

/**
 * Coronary territory
 */
export interface CoronaryTerritory {
  arteryId: string;
  arteryName: string;
  myocardialRegions: string[];
  ecgLeads: string[];
  clinicalSignificance: string;
}

/**
 * Multi-level educational content
 */
export interface CardioContent {
  level1: string;
  level2: string;
  level3: string;
  level4: string;
  level5: string;
}

/**
 * Cardiovascular statistics
 */
export interface CardiovascularStatistics {
  totalVessels: number;
  arteries: number;
  veins: number;
  heartStructures: number;
  conductionNodes: number;
}
