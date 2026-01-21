/**
 * Skeletal System Type Definitions
 *
 * Comprehensive types for bones, joints, landmarks, and educational content
 * at 5 complexity levels.
 */

/**
 * Bone classification types
 */
export type BoneType = 'long' | 'short' | 'flat' | 'irregular' | 'sesamoid';

/**
 * Skeletal division
 */
export type SkeletalDivision = 'axial' | 'appendicular';

/**
 * Body region for bone location
 */
export type SkeletalRegion =
  | 'skull-cranial'
  | 'skull-facial'
  | 'vertebral-cervical'
  | 'vertebral-thoracic'
  | 'vertebral-lumbar'
  | 'vertebral-sacral'
  | 'thoracic-cage'
  | 'pectoral-girdle'
  | 'upper-limb-arm'
  | 'upper-limb-forearm'
  | 'upper-limb-hand'
  | 'pelvic-girdle'
  | 'lower-limb-thigh'
  | 'lower-limb-leg'
  | 'lower-limb-foot';

/**
 * Joint classification
 */
export type JointType =
  | 'fibrous-suture'
  | 'fibrous-syndesmosis'
  | 'fibrous-gomphosis'
  | 'cartilaginous-synchondrosis'
  | 'cartilaginous-symphysis'
  | 'synovial-plane'
  | 'synovial-hinge'
  | 'synovial-pivot'
  | 'synovial-condyloid'
  | 'synovial-saddle'
  | 'synovial-ball-socket';

/**
 * Joint movement types
 */
export type JointMovement =
  | 'flexion'
  | 'extension'
  | 'abduction'
  | 'adduction'
  | 'rotation-internal'
  | 'rotation-external'
  | 'circumduction'
  | 'pronation'
  | 'supination'
  | 'dorsiflexion'
  | 'plantarflexion'
  | 'inversion'
  | 'eversion'
  | 'protraction'
  | 'retraction'
  | 'elevation'
  | 'depression'
  | 'lateral-flexion';

/**
 * Bony landmark/feature
 */
export interface BonyLandmark {
  name: string;
  type: 'process' | 'fossa' | 'foramen' | 'canal' | 'tubercle' | 'tuberosity' | 'spine' | 'crest' | 'line' | 'condyle' | 'epicondyle' | 'facet' | 'groove' | 'notch' | 'head' | 'neck' | 'trochanter' | 'malleolus' | 'other';
  description: string;
  clinicalSignificance?: string;
}

/**
 * Muscle attachment point
 */
export interface MuscleAttachment {
  muscleName: string;
  muscleId?: string;  // FMA ID
  attachmentType: 'origin' | 'insertion';
  landmark?: string;  // Specific landmark on bone
  description: string;
}

/**
 * Blood supply to bone
 */
export interface BoneBloodSupply {
  arteryName: string;
  arteryId?: string;  // FMA ID
  supplyType: 'nutrient' | 'periosteal' | 'metaphyseal' | 'epiphyseal' | 'other';
  description?: string;
}

/**
 * Innervation of bone/periosteum
 */
export interface BoneInnervation {
  nerveName: string;
  nerveId?: string;  // FMA ID
  description?: string;
}

/**
 * Joint information
 */
export interface Joint {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  type: JointType;
  bones: string[];  // IDs of bones forming the joint
  movements: JointMovement[];
  ligaments?: string[];
  description: string;
  clinicalNotes?: string;
}

/**
 * Common fracture pattern
 */
export interface FractureType {
  name: string;
  description: string;
  mechanism: string;  // How it typically occurs
  population?: string;  // Who is most affected
  complications?: string[];
  treatment?: string;
}

/**
 * Common pathology affecting the bone
 */
export interface BonePathology {
  name: string;
  description: string;
  etiology?: string;
  symptoms?: string[];
  relevantLabs?: string[];
  relevantImaging?: string[];
}

/**
 * Imaging example for educational purposes
 */
export interface ImagingExample {
  id: string;
  modality: 'x-ray' | 'ct' | 'mri' | 'bone-scan';
  view?: string;
  description: string;
  findings?: string[];
  imagePath?: string;
}

/**
 * Multi-level educational content for a bone
 */
export interface BoneContent {
  level1: string;  // 8th grade
  level2: string;  // High school
  level3: string;  // College
  level4: string;  // Graduate
  level5: string;  // MD level
}

/**
 * Complete bone definition
 */
export interface Bone {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;
  meshId?: string;  // ID in 3D model

  // Classification
  type: BoneType;
  division: SkeletalDivision;
  region: SkeletalRegion;
  paired: boolean;  // Is there a left and right?
  side?: 'left' | 'right' | 'midline';

  // Location description
  location: string;

  // Educational content
  explanations: BoneContent;
  keyFacts: string[];

  // Anatomical details
  landmarks: BonyLandmark[];
  muscleAttachments: MuscleAttachment[];
  bloodSupply: BoneBloodSupply[];
  innervation: BoneInnervation[];

  // Joints
  jointIds: string[];  // References to joints this bone participates in

  // Development
  ossificationCenters?: number;
  ossificationAge?: string;  // When ossification begins/completes

  // Clinical
  fractures: FractureType[];
  pathologies: BonePathology[];
  imagingExamples?: ImagingExample[];
  relevantLabs?: string[];

  // Cross-references
  relatedBones?: string[];  // IDs of anatomically related bones
  histologyId?: string;  // Link to histology images
}

/**
 * Summary info for bone lists
 */
export interface BoneSummary {
  id: string;
  name: string;
  region: SkeletalRegion;
  type: BoneType;
  division: SkeletalDivision;
}

/**
 * Skeletal region metadata
 */
export interface SkeletalRegionInfo {
  id: SkeletalRegion;
  name: string;
  description: string;
  boneCount: number;
  division: SkeletalDivision;
}

/**
 * Bone count by category
 */
export interface BoneStatistics {
  total: number;
  byDivision: Record<SkeletalDivision, number>;
  byRegion: Record<SkeletalRegion, number>;
  byType: Record<BoneType, number>;
}
