/**
 * Pain Referral Pattern Visualization Types
 *
 * Types for visualizing visceral referred pain patterns
 * with dermatomal mapping and animated pain pathways.
 */

/**
 * Dermatomal level (spinal segment)
 */
export type DermatomeLevel =
  | 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6' | 'C7' | 'C8'
  | 'T1' | 'T2' | 'T3' | 'T4' | 'T5' | 'T6' | 'T7' | 'T8' | 'T9' | 'T10' | 'T11' | 'T12'
  | 'L1' | 'L2' | 'L3' | 'L4' | 'L5'
  | 'S1' | 'S2' | 'S3' | 'S4' | 'S5';

/**
 * Organ system for referred pain sources
 */
export type ReferralOrganSystem =
  | 'cardiac'
  | 'pulmonary'
  | 'gastrointestinal'
  | 'hepatobiliary'
  | 'urogenital'
  | 'vascular'
  | 'musculoskeletal';

/**
 * Type of nerve fiber carrying pain
 */
export type PainFiberType = 'C-fiber' | 'A-delta' | 'visceral-afferent';

/**
 * Body region for pain localization
 */
export type BodyRegion =
  | 'jaw'
  | 'neck'
  | 'thoracic-spine'
  | 'lumbar-spine'
  | 'shoulder-left'
  | 'shoulder-right'
  | 'arm-left'
  | 'arm-right'
  | 'elbow-left'
  | 'elbow-right'
  | 'forearm-left'
  | 'forearm-right'
  | 'hand-left'
  | 'hand-right'
  | 'wrist-left'
  | 'wrist-right'
  | 'chest-anterior'
  | 'chest-posterior'
  | 'epigastrium'
  | 'periumbilical'
  | 'right-upper-quadrant'
  | 'left-upper-quadrant'
  | 'right-lower-quadrant'
  | 'left-lower-quadrant'
  | 'flank-left'
  | 'flank-right'
  | 'back-upper'
  | 'back-mid'
  | 'back-lower'
  | 'groin-left'
  | 'groin-right'
  | 'thigh-anterior'
  | 'thigh-posterior'
  | 'knee'
  | 'leg'
  | 'foot';

/**
 * Dermatome map entry for visualization
 */
export interface DermatomeMapEntry {
  level: DermatomeLevel;
  bodyRegions: BodyRegion[];
  surfaceArea: string;
  landmarks: string[];
  highlightColor: string;
  sensoryTestPoint: string;
}

/**
 * Visceral pain source organ
 */
export interface VisceralPainSource {
  organId: string;
  organName: string;
  system: ReferralOrganSystem;
  structureId: string;
  innervation: OrganInnervation;
  commonConditions: string[];
}

/**
 * Organ innervation details
 */
export interface OrganInnervation {
  sympatheticLevels: DermatomeLevel[];
  parasympatheticSource?: string;
  afferentPathway: string;
  centralProcessing: string;
}

/**
 * Referred pain pattern
 */
export interface ReferredPainPattern {
  patternId: string;
  sourceName: string;
  sourceOrgan: VisceralPainSource;
  referralRegions: ReferralRegion[];
  dermatomalBasis: DermatomeLevel[];
  mechanism: ConvergenceProjectionMechanism;
  pathway: PainPathway;
  clinicalCharacteristics: ClinicalPainFeatures;
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Region where pain is referred to
 */
export interface ReferralRegion {
  region: BodyRegion;
  likelihood: 'classic' | 'common' | 'variant';
  description: string;
  highlightColor: string;
}

/**
 * Mechanism of referred pain (convergence-projection theory)
 */
export interface ConvergenceProjectionMechanism {
  theory: string;
  convergencePoint: string;
  somaticDermatomes: DermatomeLevel[];
  visceralDermatomes: DermatomeLevel[];
  centralMisinterpretation: string;
}

/**
 * Pain pathway for animation
 */
export interface PainPathway {
  steps: PathwayStep[];
  totalDuration: number;
  loopable: boolean;
}

/**
 * Single step in pain pathway animation
 */
export interface PathwayStep {
  stepNumber: number;
  structure: string;
  structureId: string;
  action: string;
  highlightColor: string;
  duration: number;
  position?: {
    x: number;
    y: number;
    z: number;
  };
}

/**
 * Clinical characteristics of referred pain
 */
export interface ClinicalPainFeatures {
  quality: string[];
  intensity: string;
  timing: string;
  aggravatingFactors: string[];
  relievingFactors: string[];
  associatedSymptoms: string[];
  typicalPatient: string;
}

/**
 * Dermatomal overlay for 3D visualization
 */
export interface DermatomalOverlay {
  dermatomes: DermatomeMapEntry[];
  displayMode: 'full' | 'relevant-only' | 'single';
  opacity: number;
  selectedLevels: DermatomeLevel[];
}

/**
 * Pain referral visualization state
 */
export interface PainReferralVisualization {
  activePattern: ReferredPainPattern | null;
  dermatomalOverlay: DermatomalOverlay;
  pathwayAnimation: {
    isPlaying: boolean;
    currentStep: number;
    speed: number;
  };
  sourceHighlight: {
    organId: string;
    color: string;
    opacity: number;
  } | null;
  referralHighlights: ReferralRegion[];
}

/**
 * Pain referral education context
 */
export interface PainReferralEducation {
  patternId: string;
  clinicalRelevance: string;
  diagnosticImportance: string;
  classicPresentation: string;
  atypicalPresentations: AtypicalPresentation[];
  differentialConsiderations: string[];
  redFlags: string[];
  relatedPatterns: string[];
}

/**
 * Atypical presentation variant
 */
export interface AtypicalPresentation {
  description: string;
  population: string;
  frequency: string;
  clinicalPearl: string;
}

/**
 * Pain referral explorer result
 */
export interface PainReferralExplorerResult {
  sourceOrgan: string;
  referralPattern: ReferredPainPattern;
  dermatomalMap: DermatomeMapEntry[];
  educationalContent: PainReferralEducation;
  animationPath: PainPathway;
  viewSettings: {
    cameraPosition: { x: number; y: number; z: number };
    showDermatomes: boolean;
    animationSpeed: number;
  };
}
