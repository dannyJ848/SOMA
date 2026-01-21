/**
 * Endocrine System Type Definitions
 *
 * Comprehensive types for endocrine glands, hormones,
 * feedback mechanisms, and endocrine pathologies.
 */

/**
 * Endocrine gland type
 */
export type EndocrineGlandType =
  | 'pituitary'
  | 'hypothalamic'
  | 'thyroid'
  | 'parathyroid'
  | 'adrenal'
  | 'pancreatic-islet'
  | 'gonadal'
  | 'pineal'
  | 'thymus';

/**
 * Hormone chemical class
 */
export type HormoneClass =
  | 'peptide'
  | 'steroid'
  | 'amine'
  | 'eicosanoid'
  | 'glycoprotein';

/**
 * Hormone receptor location
 */
export type ReceptorLocation = 'cell-surface' | 'cytoplasmic' | 'nuclear';

/**
 * Feedback type
 */
export type FeedbackType = 'negative' | 'positive';

/**
 * Endocrine gland
 */
export interface EndocrineGland {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  meshId?: string;
  type: EndocrineGlandType;
  location: string;
  dimensions?: string;
  weight?: string;
  embryology?: string;
  histology?: string;
  hormones: HormoneRef[];
  bloodSupply?: string[];
  venousDrainage?: string[];
  innervation?: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  pathologies?: EndocrinePathology[];
  relevantLabs?: string[];
  relevantImaging?: string[];
  relatedStructures?: string[];
}

/**
 * Reference to a hormone (for gland associations)
 */
export interface HormoneRef {
  hormoneId: string;
  name: string;
  cellType?: string;
}

/**
 * Hormone
 */
export interface Hormone {
  id: string;
  name: string;
  abbreviation?: string;
  chemicalClass: HormoneClass;
  sourceGland: string;
  sourceCell?: string;
  targetTissues: string[];
  receptorType: ReceptorLocation;
  receptorName?: string;
  function: string;
  actions: string[];
  regulation: HormoneRegulation;
  halfLife?: string;
  normalRange?: string;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  excessSyndrome?: string;
  deficiencySyndrome?: string;
  clinicalNote?: string;
}

/**
 * Hormone regulation
 */
export interface HormoneRegulation {
  stimulatedBy: string[];
  inhibitedBy: string[];
  feedbackType?: FeedbackType;
  feedbackTarget?: string;
  hypothalamicFactor?: string;
  tropicHormone?: string;
}

/**
 * Endocrine axis
 */
export interface EndocrineAxis {
  id: string;
  name: string;
  components: AxisComponent[];
  feedbackLoops: FeedbackLoop[];
  function: string;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  pathologies?: EndocrinePathology[];
}

/**
 * Axis component
 */
export interface AxisComponent {
  level: 'hypothalamus' | 'pituitary' | 'target-gland' | 'target-tissue';
  structure: string;
  hormone?: string;
  action: string;
}

/**
 * Feedback loop
 */
export interface FeedbackLoop {
  type: FeedbackType;
  signal: string;
  target: string;
  effect: string;
}

/**
 * Endocrine pathology
 */
export interface EndocrinePathology {
  name: string;
  description: string;
  type: 'hyper' | 'hypo' | 'tumor' | 'autoimmune' | 'other';
  symptoms?: string[];
  causes?: string[];
  labFindings?: string[];
  relevantImaging?: string[];
  treatment?: string[];
}

/**
 * Endocrine statistics
 */
export interface EndocrineStatistics {
  totalGlands: number;
  totalHormones: number;
  majorAxes: number;
}
