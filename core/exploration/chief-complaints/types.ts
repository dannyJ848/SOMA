/**
 * Region-Based Chief Complaints Type Definitions
 *
 * Types for mapping body regions to common symptoms
 * with anatomical basis and educational content.
 */

/**
 * Body region identifier for 3D model selection
 */
export type BodyRegion =
  | 'head'
  | 'face'
  | 'neck'
  | 'chest'
  | 'abdomen-upper'
  | 'abdomen-lower'
  | 'back-upper'
  | 'back-lower'
  | 'shoulder-left'
  | 'shoulder-right'
  | 'arm-left'
  | 'arm-right'
  | 'hand-left'
  | 'hand-right'
  | 'hip-left'
  | 'hip-right'
  | 'thigh-left'
  | 'thigh-right'
  | 'knee-left'
  | 'knee-right'
  | 'leg-left'
  | 'leg-right'
  | 'ankle-left'
  | 'ankle-right'
  | 'foot-left'
  | 'foot-right';

/**
 * Body system
 */
export type BodySystem =
  | 'musculoskeletal'
  | 'nervous'
  | 'cardiovascular'
  | 'respiratory'
  | 'digestive'
  | 'urinary'
  | 'reproductive'
  | 'integumentary'
  | 'endocrine';

/**
 * Complaint frequency in the population
 */
export type ComplaintFrequency = 'very-common' | 'common' | 'less-common' | 'uncommon';

/**
 * Region chief complaints definition
 */
export interface RegionChiefComplaints {
  regionId: BodyRegion;
  regionName: string;
  regionDescription: string;
  boundingBox: {
    min: { x: number; y: number; z: number };
    max: { x: number; y: number; z: number };
  };
  chiefComplaints: ChiefComplaint[];
  regionalAnatomy: RegionalAnatomy;
  differentialAnatomy: DifferentialAnatomy[];
  redFlags: RegionRedFlag[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Chief complaint for a region
 */
export interface ChiefComplaint {
  complaintId: string;
  symptom: string;
  aliases: string[];
  frequency: ComplaintFrequency;
  description: string;
  anatomicalBasis: AnatomicalSource[];
  characteristicFeatures: string[];
  commonCauses: string[];
  differentialDiagnoses: string[];
  relatedComplaints: string[];
  educationalContentId?: string;
}

/**
 * Anatomical source of a complaint
 */
export interface AnatomicalSource {
  structureId: string;
  structureName: string;
  system: BodySystem;
  mechanism: string;
  highlightColor: string;
}

/**
 * Regional anatomy overview
 */
export interface RegionalAnatomy {
  systems: RegionalSystem[];
  keyStructures: KeyStructure[];
  neuralInnervation: NeuralInnervation;
  vascularSupply: VascularSupply;
}

/**
 * System present in a region
 */
export interface RegionalSystem {
  system: BodySystem;
  structures: string[];
  structureIds: string[];
  primaryFunctions: string[];
}

/**
 * Key anatomical structure in region
 */
export interface KeyStructure {
  structureId: string;
  structureName: string;
  system: BodySystem;
  clinicalRelevance: string;
  commonPathologies: string[];
}

/**
 * Neural innervation of region
 */
export interface NeuralInnervation {
  sensoryNerves: string[];
  motorNerves: string[];
  dermatomalLevels: string[];
  autonomicSupply?: string;
}

/**
 * Vascular supply to region
 */
export interface VascularSupply {
  arterialSupply: string[];
  venousDrainage: string[];
  lymphaticDrainage?: string[];
}

/**
 * Differential anatomy for a region
 */
export interface DifferentialAnatomy {
  symptom: string;
  possibleSources: AnatomicalDifferential[];
  distinguishingFeatures: string;
}

/**
 * Anatomical differential
 */
export interface AnatomicalDifferential {
  structureName: string;
  structureId: string;
  likelihood: 'common' | 'less-common' | 'rare';
  characteristicFeatures: string[];
  testToDistinguish?: string;
}

/**
 * Red flag for a region
 */
export interface RegionRedFlag {
  symptom: string;
  concern: string;
  associatedFindings: string[];
  action: string;
  urgency: 'emergency' | 'urgent' | 'soon';
}

/**
 * User's symptom history in a region
 */
export interface UserRegionHistory {
  regionId: BodyRegion;
  symptoms: UserRegionSymptom[];
  lastUpdated: Date;
}

/**
 * User symptom in region
 */
export interface UserRegionSymptom {
  symptom: string;
  loggedAt: Date;
  severity?: number;
  notes?: string;
  matchedComplaint?: string;
}

/**
 * Region exploration state
 */
export interface RegionExplorationState {
  selectedRegion: BodyRegion | null;
  regionData: RegionChiefComplaints | null;
  userHistory: UserRegionHistory | null;
  expandedComplaint: string | null;
  showingAnatomy: boolean;
  highlightedStructures: string[];
}

/**
 * Region selection event
 */
export interface RegionSelectionEvent {
  regionId: BodyRegion;
  clickPosition: { x: number; y: number; z: number };
  timestamp: Date;
}

/**
 * Region exploration result
 */
export interface RegionExplorationResult {
  region: RegionChiefComplaints;
  userHistory: UserRegionHistory | null;
  topComplaints: ChiefComplaint[];
  anatomyHighlights: AnatomicalSource[];
  educationalContent: {
    overview: string;
    anatomy: string;
    commonIssues: string;
  };
  viewSettings: {
    cameraPosition: { x: number; y: number; z: number };
    highlightedIds: string[];
    isolateRegion: boolean;
  };
}
