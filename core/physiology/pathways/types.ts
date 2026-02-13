/**
 * Physiological Pathways Type Definitions
 *
 * Types for cross-system pathways, regulatory axes,
 * and system interconnections.
 */

/**
 * Pathway category
 */
export type PathwayCategory =
  | 'endocrine-axis'
  | 'metabolic'
  | 'regulatory'
  | 'circulatory'
  | 'signaling';

/**
 * Organ system involved in pathway
 */
export type InvolvedSystem =
  | 'cardiovascular'
  | 'renal'
  | 'endocrine'
  | 'nervous'
  | 'digestive'
  | 'hepatic'
  | 'respiratory'
  | 'muscular'
  | 'immune';

/**
 * Feedback loop type
 */
export type FeedbackType = 'negative' | 'positive';

/**
 * Pathway step
 */
export interface PathwayStep {
  stepNumber: number;
  name: string;
  description: string;
  location: string;
  organ: string;
  system: InvolvedSystem;
  trigger?: string;
  output?: string;
  mediators?: string[];
  receptors?: string[];
  duration?: string;
}

/**
 * Feedback loop
 */
export interface FeedbackLoop {
  type: FeedbackType;
  sensor: string;
  signal: string;
  target: string;
  effect: string;
  clinicalNote?: string;
}

/**
 * Pathway disruption/pathophysiology
 */
export interface PathwayDisruption {
  name: string;
  description: string;
  disruptedStep: number | string;
  mechanism: string;
  consequences: string[];
  clinicalPresentation: string[];
  relevantLabs?: string[];
  treatments?: string[];
}

/**
 * Cross-system connection
 */
export interface CrossSystemConnection {
  fromSystem: InvolvedSystem;
  toSystem: InvolvedSystem;
  mediator: string;
  mechanism: string;
  effect: string;
}

/**
 * Physiological pathway
 */
export interface PhysiologicalPathway {
  id: string;
  name: string;
  abbreviation?: string;
  category: PathwayCategory;
  description: string;
  primaryFunction: string;
  involvedSystems: InvolvedSystem[];
  steps: PathwayStep[];
  feedbackLoops: FeedbackLoop[];
  keyMediators: string[];
  crossSystemConnections: CrossSystemConnection[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  keyFacts: string[];
  disruptions: PathwayDisruption[];
  relevantLabs: string[];
  relatedPathways?: string[];
}

/**
 * Pathway statistics
 */
export interface PathwayStatistics {
  totalPathways: number;
  endocrineAxes: number;
  metabolicPathways: number;
  regulatoryPathways: number;
}
