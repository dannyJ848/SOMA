/**
 * Integumentary System Type Definitions
 *
 * Comprehensive types for skin layers, appendages,
 * wound healing, and dermatological conditions.
 */

/**
 * Skin layer type
 */
export type SkinLayerType = 'epidermis' | 'dermis' | 'hypodermis';

/**
 * Epidermis sublayer
 */
export type EpidermisLayer =
  | 'stratum-corneum'
  | 'stratum-lucidum'
  | 'stratum-granulosum'
  | 'stratum-spinosum'
  | 'stratum-basale';

/**
 * Skin appendage type
 */
export type SkinAppendageType =
  | 'hair-follicle'
  | 'sweat-gland'
  | 'sebaceous-gland'
  | 'nail';

/**
 * Sweat gland type
 */
export type SweatGlandType = 'eccrine' | 'apocrine';

/**
 * Wound healing phase
 */
export type WoundHealingPhase =
  | 'hemostasis'
  | 'inflammation'
  | 'proliferation'
  | 'remodeling';

/**
 * Skin lesion morphology
 */
export type LesionMorphology =
  | 'macule'
  | 'papule'
  | 'plaque'
  | 'nodule'
  | 'vesicle'
  | 'bulla'
  | 'pustule'
  | 'wheal'
  | 'patch'
  | 'tumor';

/**
 * Skin layer structure
 */
export interface SkinLayer {
  id: string;
  name: string;
  latinName?: string;
  type: SkinLayerType;
  thickness: string;
  composition: string[];
  functions: string[];
  cellTypes: string[];
  bloodSupply?: string;
  innervation?: string;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  pathologies?: IntegumentaryPathology[];
}

/**
 * Epidermis sublayer detail
 */
export interface EpidermisSubLayer {
  id: string;
  name: string;
  latinName: string;
  layer: EpidermisLayer;
  depth: string;
  cellTypes: string[];
  characteristics: string[];
  functions: string[];
  clinicalNote?: string;
}

/**
 * Dermis structure
 */
export interface DermisStructure {
  id: string;
  name: string;
  location: string;
  composition: string[];
  functions: string[];
  clinicalNote?: string;
}

/**
 * Hair follicle structure
 */
export interface HairFollicle {
  id: string;
  name: string;
  latinName?: string;
  location: string;
  components: string[];
  cellTypes: string[];
  growthCycle: HairGrowthPhase[];
  associatedStructures: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  pathologies?: IntegumentaryPathology[];
}

/**
 * Hair growth phase
 */
export interface HairGrowthPhase {
  phase: string;
  duration: string;
  description: string;
  characteristics: string[];
}

/**
 * Sweat gland structure
 */
export interface SweatGland {
  id: string;
  name: string;
  type: SweatGlandType;
  location: string[];
  secretionType: string;
  ductOpening: string;
  innervation: string;
  functions: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  pathologies?: IntegumentaryPathology[];
}

/**
 * Sebaceous gland structure
 */
export interface SebaceousGland {
  id: string;
  name: string;
  latinName?: string;
  location: string[];
  secretionType: string;
  associatedWith: string;
  functions: string[];
  regulation: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  pathologies?: IntegumentaryPathology[];
}

/**
 * Nail structure
 */
export interface NailStructure {
  id: string;
  name: string;
  latinName?: string;
  components: NailComponent[];
  growthRate: string;
  composition: string[];
  bloodSupply: string;
  functions: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  pathologies?: IntegumentaryPathology[];
}

/**
 * Nail component
 */
export interface NailComponent {
  name: string;
  latinName?: string;
  description: string;
  clinicalNote?: string;
}

/**
 * Wound healing phase detail
 */
export interface WoundHealingPhaseDetail {
  phase: WoundHealingPhase;
  timeframe: string;
  description: string;
  keyEvents: string[];
  cells: string[];
  mediators: string[];
  clinicalNote?: string;
}

/**
 * Skin lesion type
 */
export interface SkinLesionType {
  id: string;
  name: string;
  morphology: LesionMorphology;
  size: string;
  description: string;
  examples: string[];
  clinicalNote?: string;
}

/**
 * Integumentary pathology
 */
export interface IntegumentaryPathology {
  name: string;
  description: string;
  symptoms?: string[];
  causes?: string[];
  appearance?: string;
  relevantLabs?: string[];
}

/**
 * Skin receptor
 */
export interface SkinReceptor {
  id: string;
  name: string;
  location: string;
  sensation: string;
  adaptation: string;
  characteristics: string[];
}

/**
 * Integumentary statistics
 */
export interface IntegumentaryStatistics {
  totalSkinArea: string;
  skinWeight: string;
  epidermisThickness: string;
  dermisThickness: string;
  hairFollicles: string;
  sweatGlands: string;
  sebaceousGlands: string;
  skinRenewalTime: string;
}
