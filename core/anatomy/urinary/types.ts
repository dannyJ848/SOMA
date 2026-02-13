/**
 * Urinary System Type Definitions
 *
 * Comprehensive types for kidneys, urinary tract,
 * nephron anatomy, and renal physiology.
 */

/**
 * Urinary system component
 */
export type UrinaryComponent = 'kidney' | 'ureter' | 'bladder' | 'urethra';

/**
 * Kidney region
 */
export type KidneyRegion = 'cortex' | 'medulla' | 'pelvis' | 'hilum';

/**
 * Nephron type
 */
export type NephronType = 'cortical' | 'juxtamedullary';

/**
 * Nephron segment
 */
export type NephronSegment =
  | 'glomerulus'
  | 'proximal-tubule'
  | 'descending-loop'
  | 'ascending-loop'
  | 'distal-tubule'
  | 'collecting-duct';

/**
 * Urinary structure
 */
export interface UrinaryStructure {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  meshId?: string;
  component: UrinaryComponent;
  location: string;
  dimensions?: string;
  function: string;
  histology?: string;
  bloodSupply?: string[];
  venousDrainage?: string[];
  innervation?: {
    sympathetic?: string;
    parasympathetic?: string;
    sensory?: string;
  };
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  pathologies?: UrinaryPathology[];
  relevantLabs?: string[];
  relevantImaging?: string[];
  relatedStructures?: string[];
}

/**
 * Nephron segment detail
 */
export interface NephronSegmentDetail {
  id: string;
  name: string;
  segment: NephronSegment;
  location: string;
  function: string;
  epitheliumType: string;
  permeability: {
    water: 'high' | 'variable' | 'low' | 'impermeable';
    sodium: 'high' | 'variable' | 'low';
    urea: 'high' | 'variable' | 'low';
  };
  transporters: Transporter[];
  hormoneResponsive?: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  clinicalNote?: string;
}

/**
 * Renal transporter
 */
export interface Transporter {
  name: string;
  gene?: string;
  location: 'apical' | 'basolateral';
  mechanism: 'active' | 'passive' | 'secondary-active' | 'channel';
  substrates: string[];
  energySource?: string;
  regulation?: string;
  clinicalNote?: string;
}

/**
 * Renal hormone/factor
 */
export interface RenalFactor {
  id: string;
  name: string;
  source: string;
  stimulus: string[];
  actions: string[];
  target: string;
  effect: string;
  clinicalNote?: string;
}

/**
 * Urinary pathology
 */
export interface UrinaryPathology {
  name: string;
  description: string;
  symptoms?: string[];
  causes?: string[];
  labFindings?: string[];
  relevantImaging?: string[];
  treatment?: string[];
}

/**
 * Glomerular filtration concept
 */
export interface GFRConcept {
  name: string;
  normalValue: string;
  determinants: string[];
  calculation?: string;
  clinicalNote?: string;
}

/**
 * Urinary system statistics
 */
export interface UrinaryStatistics {
  totalStructures: number;
  nephronCount: string;
  dailyFilteredVolume: string;
  dailyUrineOutput: string;
}
