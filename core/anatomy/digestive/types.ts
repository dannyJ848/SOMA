/**
 * Digestive System Type Definitions
 *
 * Comprehensive types for GI tract and accessory organs,
 * digestion physiology, and absorption.
 */

/**
 * GI tract region
 */
export type GITractRegion =
  | 'oral-cavity'
  | 'pharynx'
  | 'esophagus'
  | 'stomach'
  | 'small-intestine'
  | 'large-intestine'
  | 'rectum-anal'
  | 'accessory-organs';

/**
 * GI wall layer
 */
export type GIWallLayer = 'mucosa' | 'submucosa' | 'muscularis' | 'serosa' | 'adventitia';

/**
 * Small intestine segment
 */
export type SmallIntestineSegment = 'duodenum' | 'jejunum' | 'ileum';

/**
 * Large intestine segment
 */
export type LargeIntestineSegment = 'cecum' | 'ascending-colon' | 'transverse-colon' | 'descending-colon' | 'sigmoid-colon' | 'rectum';

/**
 * Digestive structure
 */
export interface DigestiveStructure {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  meshId?: string;
  region: GITractRegion;
  location: string;
  function: string;
  length?: string;
  epitheliumType?: string;
  wallLayers?: GIWallLayer[];
  sphincters?: string[];
  secretions?: DigestiveSecretion[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  bloodSupply?: string[];
  venousDrainage?: string[];
  innervation?: {
    parasympathetic?: string;
    sympathetic?: string;
    enteric?: string;
  };
  pathologies?: DigestivePathology[];
  relevantLabs?: string[];
  relatedStructures?: string[];
}

/**
 * Digestive secretion
 */
export interface DigestiveSecretion {
  name: string;
  source: string;
  function: string;
  composition?: string[];
  regulation?: string;
}

/**
 * Accessory digestive organ
 */
export interface AccessoryOrgan {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  location: string;
  function: string;
  dimensions?: string;
  secretions?: DigestiveSecretion[];
  ducts?: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  bloodSupply?: string[];
  venousDrainage?: string[];
  innervation?: string[];
  pathologies?: DigestivePathology[];
  relevantLabs?: string[];
}

/**
 * Digestive pathology
 */
export interface DigestivePathology {
  name: string;
  description: string;
  symptoms?: string[];
  causes?: string[];
  relevantImaging?: string[];
  relevantLabs?: string[];
}

/**
 * Digestive enzyme
 */
export interface DigestiveEnzyme {
  name: string;
  source: string;
  substrate: string;
  products: string;
  optimalPH?: string;
  activatedBy?: string;
}

/**
 * Nutrient absorption site
 */
export interface AbsorptionSite {
  nutrient: string;
  location: string;
  mechanism: string;
  transporter?: string;
  clinicalNote?: string;
}

/**
 * Digestive system statistics
 */
export interface DigestiveStatistics {
  totalStructures: number;
  giTractLength: string;
  accessoryOrgans: number;
}
