/**
 * Lab-to-Anatomy Exploration Type Definitions
 *
 * Types for one-click lab result exploration, connecting user lab data
 * to anatomical structures, pathways, and educational content.
 */

/**
 * Exploration context for a lab result
 */
export interface LabExplorationContext {
  labId: string;
  labName: string;
  loincCode?: string;
  category: LabCategory;
  primaryOrgans: OrganHighlight[];
  relatedPathways: PathwayLink[];
  physiologyExplanation: PhysiologyExplanation;
  relatedStructures: RelatedStructure[];
  relatedLabs: RelatedLab[];
  clinicalContext: ClinicalContext;
  viewSettings: ViewSettings;
}

/**
 * Lab category
 */
export type LabCategory =
  | 'hematology'
  | 'chemistry'
  | 'liver'
  | 'kidney'
  | 'lipid'
  | 'thyroid'
  | 'cardiac'
  | 'coagulation'
  | 'electrolyte'
  | 'glucose'
  | 'inflammatory'
  | 'tumor-marker';

/**
 * Organ highlight for 3D view
 */
export interface OrganHighlight {
  organId: string;
  organName: string;
  system: string;
  highlightColor: string;
  role: string;
  isPrimary: boolean;
}

/**
 * Link to a metabolic/physiological pathway
 */
export interface PathwayLink {
  pathwayId: string;
  pathwayName: string;
  relevance: string;
  stepHighlights?: number[];
}

/**
 * Physiology explanation at multiple levels
 */
export interface PhysiologyExplanation {
  whatItMeasures: string;
  howItWorks: string;
  whyItMatters: string;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Related anatomical structure
 */
export interface RelatedStructure {
  structureId: string;
  structureName: string;
  system: string;
  relationship: string;
  explorePrompt: string;
}

/**
 * Related lab test
 */
export interface RelatedLab {
  labId: string;
  labName: string;
  relationship: string;
  clinicalReason: string;
}

/**
 * Clinical context for interpretation
 */
export interface ClinicalContext {
  normalRange: string;
  unit: string;
  criticalLow?: string;
  criticalHigh?: string;
  commonCauses: {
    low: string[];
    high: string[];
  };
  urgentActions?: {
    low?: string;
    high?: string;
  };
  disclaimer: string;
}

/**
 * 3D view settings for exploration
 */
export interface ViewSettings {
  cameraPosition: CameraPreset;
  visibleLayers: string[];
  opacity: LayerOpacity;
  focusStructure?: string;
}

/**
 * Camera preset
 */
export type CameraPreset =
  | 'anterior'
  | 'posterior'
  | 'left-lateral'
  | 'right-lateral'
  | 'superior'
  | 'inferior'
  | 'abdominal'
  | 'thoracic'
  | 'head-neck'
  | 'custom';

/**
 * Layer opacity settings
 */
export interface LayerOpacity {
  skin: number;
  muscle: number;
  skeleton: number;
  organs: number;
  vessels: number;
  nerves: number;
}

/**
 * User's lab result with exploration context
 */
export interface LabResultWithExploration {
  resultId: string;
  labId: string;
  value: number;
  unit: string;
  date: string;
  interpretation: 'low' | 'normal' | 'high' | 'critical-low' | 'critical-high';
  explorationContext: LabExplorationContext;
}

/**
 * Exploration session state
 */
export interface ExplorationSession {
  currentLab: string;
  viewedStructures: string[];
  viewedPathways: string[];
  complexityLevel: 1 | 2 | 3 | 4 | 5;
  notes: ExplorationNote[];
  startTime: string;
}

/**
 * Exploration note
 */
export interface ExplorationNote {
  timestamp: string;
  structureId?: string;
  labId?: string;
  note: string;
}

/**
 * Explore button action
 */
export interface ExploreAction {
  type: 'lab-explore';
  labId: string;
  resultValue?: number;
  interpretation?: string;
}
