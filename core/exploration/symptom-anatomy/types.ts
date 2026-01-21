/**
 * Symptom-to-Anatomy Mapping Type Definitions
 *
 * Types for mapping symptoms to anatomical sources,
 * considering referred pain patterns and clinical likelihood.
 */

/**
 * Symptom category
 */
export type SymptomCategory =
  | 'pain'
  | 'neurologic'
  | 'respiratory'
  | 'cardiovascular'
  | 'gastrointestinal'
  | 'musculoskeletal'
  | 'dermatologic'
  | 'urologic'
  | 'constitutional'
  | 'psychiatric';

/**
 * Body region for symptom localization
 */
export type BodyRegion =
  | 'head'
  | 'face'
  | 'neck'
  | 'chest'
  | 'abdomen'
  | 'back'
  | 'upper-extremity'
  | 'lower-extremity'
  | 'pelvis'
  | 'generalized';

/**
 * Likelihood level for anatomical source
 */
export type LikelihoodLevel = 'common' | 'less-common' | 'rare' | 'do-not-miss';

/**
 * Symptom-to-anatomy mapping
 */
export interface SymptomAnatomyMapping {
  symptomId: string;
  symptomName: string;
  aliases: string[];
  category: SymptomCategory;
  bodyRegion: BodyRegion;
  description: string;
  anatomicalSources: AnatomicalSource[];
  referredPainPatterns: ReferredPainPattern[];
  mechanismOfGeneration: MechanismOfGeneration;
  redFlags: RedFlag[];
  relatedSymptoms: string[];
  differentialConsiderations: string[];
  explanations: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
}

/**
 * Anatomical source of a symptom
 */
export interface AnatomicalSource {
  structureId: string;
  structureName: string;
  system: string;
  likelihood: LikelihoodLevel;
  mechanism: string;
  characteristicFeatures: string[];
  aggravatingFactors?: string[];
  relievingFactors?: string[];
  associatedFindings?: string[];
  highlightColor: string;
}

/**
 * Referred pain pattern
 */
export interface ReferredPainPattern {
  sourceOrgan: string;
  sourceLocation: string;
  referredTo: string[];
  dermatomalLevel?: string;
  mechanism: string;
  clinicalExample: string;
}

/**
 * Mechanism of symptom generation
 */
export interface MechanismOfGeneration {
  pathwayType: 'somatic' | 'visceral' | 'neuropathic' | 'inflammatory' | 'mechanical' | 'mixed';
  afferentPathway: string;
  centralProcessing: string;
  perceptionDescription: string;
}

/**
 * Red flag warning sign
 */
export interface RedFlag {
  finding: string;
  concern: string;
  urgency: 'immediate' | 'urgent' | 'soon';
  actionRequired: string;
}

/**
 * Symptom search result
 */
export interface SymptomSearchResult {
  symptomId: string;
  symptomName: string;
  matchType: 'exact' | 'alias' | 'partial';
  relevanceScore: number;
}

/**
 * Anatomy highlight for 3D view
 */
export interface SymptomAnatomyHighlight {
  structureId: string;
  structureName: string;
  highlightColor: string;
  likelihood: LikelihoodLevel;
  isPrimarySource: boolean;
  isReferredPainSource: boolean;
}

/**
 * Symptom exploration context
 */
export interface SymptomExplorationContext {
  symptom: SymptomAnatomyMapping;
  highlights: SymptomAnatomyHighlight[];
  viewSettings: SymptomViewSettings;
  userSymptomMatch?: UserSymptomMatch;
}

/**
 * 3D view settings for symptom exploration
 */
export interface SymptomViewSettings {
  cameraPosition: string;
  visibleLayers: string[];
  focusRegion: BodyRegion;
  showReferredPainOverlay: boolean;
  showDermatomalMap: boolean;
}

/**
 * Match to user's logged symptom
 */
export interface UserSymptomMatch {
  userSymptomId: string;
  matchedOn: string;
  confidence: number;
  userDescription: string;
  loggedDate: string;
}

/**
 * Symptom quality descriptor
 */
export type SymptomQuality =
  | 'sharp'
  | 'dull'
  | 'aching'
  | 'burning'
  | 'stabbing'
  | 'throbbing'
  | 'cramping'
  | 'pressure'
  | 'tearing'
  | 'colicky';

/**
 * Common symptom with quality associations
 */
export interface SymptomQualityMapping {
  quality: SymptomQuality;
  suggestedSources: string[];
  typicalMechanism: string;
}
