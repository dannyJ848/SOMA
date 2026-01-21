/**
 * Muscular System Type Definitions
 *
 * Comprehensive types for muscles including origins, insertions, actions,
 * innervation, and educational content at 5 complexity levels.
 */

/**
 * Muscle tissue types
 */
export type MuscleType = 'skeletal' | 'cardiac' | 'smooth';

/**
 * Muscle shape classification
 */
export type MuscleShape =
  | 'fusiform'      // Spindle-shaped (biceps)
  | 'parallel'      // Fibers run parallel (sartorius)
  | 'convergent'    // Fan-shaped (pectoralis)
  | 'pennate'       // Feather-like (rectus femoris)
  | 'bipennate'     // Two-sided feather
  | 'multipennate'  // Multiple feather patterns
  | 'circular'      // Ring-shaped (sphincters)
  | 'triangular'    // Delta-shaped
  | 'quadrilateral' // Four-sided
  | 'strap'         // Long and thin
  | 'spiral';       // Twisted fibers

/**
 * Muscle fiber type composition
 */
export interface FiberComposition {
  typeI: number;   // Slow-twitch (percentage)
  typeIIa: number; // Fast-twitch oxidative (percentage)
  typeIIb: number; // Fast-twitch glycolytic (percentage)
}

/**
 * Body region for muscle location
 */
export type MuscularRegion =
  | 'head-facial'
  | 'head-mastication'
  | 'neck-anterior'
  | 'neck-lateral'
  | 'neck-posterior'
  | 'back-superficial'
  | 'back-deep'
  | 'thorax-anterior'
  | 'thorax-posterior'
  | 'abdomen-anterior'
  | 'abdomen-lateral'
  | 'abdomen-posterior'
  | 'pelvis-floor'
  | 'shoulder-girdle'
  | 'arm-anterior'
  | 'arm-posterior'
  | 'forearm-anterior'
  | 'forearm-posterior'
  | 'hand-thenar'
  | 'hand-hypothenar'
  | 'hand-interossei'
  | 'gluteal'
  | 'thigh-anterior'
  | 'thigh-medial'
  | 'thigh-posterior'
  | 'leg-anterior'
  | 'leg-lateral'
  | 'leg-posterior'
  | 'foot-dorsal'
  | 'foot-plantar';

/**
 * Functional muscle group
 */
export type MuscleGroup =
  | 'flexors'
  | 'extensors'
  | 'abductors'
  | 'adductors'
  | 'rotators-internal'
  | 'rotators-external'
  | 'elevators'
  | 'depressors'
  | 'sphincters'
  | 'dilators'
  | 'respiratory'
  | 'postural';

/**
 * Muscle action type
 */
export type MuscleAction =
  | 'flexion'
  | 'extension'
  | 'abduction'
  | 'adduction'
  | 'internal-rotation'
  | 'external-rotation'
  | 'pronation'
  | 'supination'
  | 'dorsiflexion'
  | 'plantarflexion'
  | 'inversion'
  | 'eversion'
  | 'elevation'
  | 'depression'
  | 'protraction'
  | 'retraction'
  | 'lateral-flexion'
  | 'rotation'
  | 'circumduction'
  | 'opposition'
  | 'reposition'
  | 'inspiration'
  | 'expiration';

/**
 * Origin or insertion attachment point
 */
export interface MuscleAttachment {
  structure: string;      // Bone or other structure
  structureId?: string;   // FMA ID
  landmark?: string;      // Specific feature
  description: string;
}

/**
 * Joint action produced by muscle
 */
export interface JointAction {
  jointName: string;
  jointId?: string;       // FMA ID
  action: MuscleAction;
  isPrimary: boolean;     // Primary vs secondary action
  rangeOfMotion?: string; // e.g., "0-145°"
}

/**
 * Nerve innervation details
 */
export interface MuscleInnervation {
  nerveName: string;
  nerveId?: string;       // FMA ID
  roots: string[];        // Spinal nerve roots (e.g., ["C5", "C6"])
  motorUnit?: string;     // Description of motor unit
}

/**
 * Blood supply to muscle
 */
export interface MuscleBloodSupply {
  arteryName: string;
  arteryId?: string;
  description?: string;
}

/**
 * Muscle relationship (agonist, antagonist, synergist)
 */
export interface MuscleRelationship {
  muscleId: string;
  muscleName: string;
  relationship: 'agonist' | 'antagonist' | 'synergist' | 'stabilizer';
  forAction?: MuscleAction;
}

/**
 * Common muscle injury
 */
export interface MuscleInjury {
  name: string;
  description: string;
  mechanism: string;
  symptoms: string[];
  population?: string;    // Who is most affected
  treatment?: string;
  recoveryTime?: string;
}

/**
 * Common muscle pathology
 */
export interface MusclePathology {
  name: string;
  description: string;
  etiology?: string;
  symptoms?: string[];
  relevantLabs?: string[];
  relevantImaging?: string[];
}

/**
 * Exercise targeting this muscle
 */
export interface MuscleExercise {
  name: string;
  description: string;
  type: 'strength' | 'stretch' | 'rehabilitation';
  targetedAction?: MuscleAction;
}

/**
 * Multi-level educational content for a muscle
 */
export interface MuscleContent {
  level1: string;  // 8th grade
  level2: string;  // High school
  level3: string;  // College
  level4: string;  // Graduate
  level5: string;  // MD level
}

/**
 * Complete muscle definition
 */
export interface Muscle {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  meshId?: string;        // ID in 3D model

  // Classification
  type: MuscleType;
  shape: MuscleShape;
  region: MuscularRegion;
  group: MuscleGroup;
  paired: boolean;        // Is there a left and right?
  side?: 'left' | 'right' | 'midline';

  // Location description
  location: string;

  // Educational content
  explanations: MuscleContent;
  keyFacts: string[];

  // Anatomical details
  origins: MuscleAttachment[];
  insertions: MuscleAttachment[];
  actions: JointAction[];
  innervation: MuscleInnervation[];
  bloodSupply: MuscleBloodSupply[];

  // Fiber characteristics
  fiberDirection?: string;
  fiberComposition?: FiberComposition;

  // Relationships
  relationships: MuscleRelationship[];

  // Clinical
  injuries: MuscleInjury[];
  pathologies: MusclePathology[];
  exercises?: MuscleExercise[];
  relevantLabs?: string[];

  // Cross-references
  relatedMuscles?: string[];  // IDs of anatomically related muscles
  histologyId?: string;       // Link to histology images
  boneAttachments?: string[]; // Bone IDs for origin/insertion
}

/**
 * Summary info for muscle lists
 */
export interface MuscleSummary {
  id: string;
  name: string;
  region: MuscularRegion;
  group: MuscleGroup;
  primaryAction?: MuscleAction;
}

/**
 * Muscle region metadata
 */
export interface MuscularRegionInfo {
  id: MuscularRegion;
  name: string;
  description: string;
  muscleCount: number;
}

/**
 * Muscle count by category
 */
export interface MuscleStatistics {
  total: number;
  byRegion: Record<MuscularRegion, number>;
  byGroup: Record<MuscleGroup, number>;
  byShape: Record<MuscleShape, number>;
}
