/**
 * Regional Encyclopedia Types
 *
 * Core types for the anatomical region system that organizes body regions
 * in a hierarchical structure with links to structures, content, and 3D meshes.
 *
 * Integrates with FMA ontology for standardized anatomical terminology.
 */

/**
 * Camera position for 3D view
 */
export interface CameraPosition {
  position: { x: number; y: number; z: number };
  target: { x: number; y: number; z: number };
  zoom: number;
}

/**
 * Reference to an anatomical structure within a region
 */
export interface StructureRef {
  id: string;           // Internal structure ID
  name: string;         // Display name
  fmaId?: string;       // FMA ontology ID (e.g., "FMA:7088")
  laterality?: 'left' | 'right' | 'bilateral' | 'midline';
}

/**
 * Reference to educational/medical content
 */
export interface ContentRef {
  id: string;           // Content ID
  title: string;        // Display title
  path: string;         // Path to content resource
  type?: 'article' | 'video' | 'interactive' | 'quiz' | 'case-study';
}

/**
 * Reference to histology content for a region
 */
export interface HistologyRef {
  id: string;           // Histology image/set ID
  title: string;        // Display title
  tissueType: string;   // Tissue category
  magnification?: string;
  stain?: string;
}

/**
 * Physical examination content reference
 */
export interface PhysicalExamRef extends ContentRef {
  examType: 'inspection' | 'palpation' | 'percussion' | 'auscultation' | 'special-test';
  findings?: string[];  // Normal and abnormal findings
}

/**
 * Surface anatomy landmark
 */
export interface SurfaceLandmark {
  id: string;
  name: string;
  description: string;
  position?: { x: number; y: number; z: number };
  clinicalSignificance?: string;
}

/**
 * Dermatome information for a region
 */
export interface DermatomeInfo {
  levels: string[];     // e.g., ['C5', 'C6', 'C7']
  description: string;
  clinicalNotes?: string;
}

/**
 * Myotome information for a region
 */
export interface MyotomeInfo {
  levels: string[];     // e.g., ['L4', 'L5', 'S1']
  movements: string[];  // Associated movements
  clinicalNotes?: string;
}

/**
 * Blood supply information
 */
export interface BloodSupplyInfo {
  arteries: StructureRef[];
  veins: StructureRef[];
  lymphatics?: StructureRef[];
  clinicalNotes?: string;
}

/**
 * Innervation information
 */
export interface InnervationInfo {
  sensory: StructureRef[];
  motor: StructureRef[];
  autonomic?: StructureRef[];
  clinicalNotes?: string;
}

/**
 * Anatomical structures within a region organized by type
 */
export interface RegionStructures {
  bones: StructureRef[];
  muscles: StructureRef[];
  vessels: StructureRef[];
  nerves: StructureRef[];
  organs: StructureRef[];
  joints?: StructureRef[];
  ligaments?: StructureRef[];
  tendons?: StructureRef[];
  fascia?: StructureRef[];
  lymphNodes?: StructureRef[];
}

/**
 * Educational content organized by topic
 */
export interface RegionContent {
  anatomy: ContentRef[];
  physiology: ContentRef[];
  pathology: ContentRef[];
  histology: HistologyRef[];
  physicalExam: ContentRef[];
  embryology?: ContentRef[];
  radiology?: ContentRef[];
  surgery?: ContentRef[];
}

/**
 * Clinical information for a region
 */
export interface RegionClinicalInfo {
  commonConditions: string[];
  emergencyConditions?: string[];
  procedures?: string[];
  differentialDiagnosis?: string[];
}

/**
 * Core anatomical region definition
 */
export interface AnatomicalRegion {
  // Identification
  id: string;                      // Hierarchical ID: 'body.upper-limb.forearm.right'
  name: string;                    // Display name: 'Right Forearm'
  latinName?: string;              // Latin anatomical name
  alternativeNames?: string[];     // Synonyms/alternative names

  // FMA ontology integration
  fmaIds: string[];               // FMA ontology IDs for this region

  // Hierarchy
  parentRegion: string | null;    // Parent region ID or null for root
  childRegions: string[];         // Child region IDs
  level: number;                  // Hierarchy depth (0 = root)

  // Laterality
  laterality?: 'left' | 'right' | 'bilateral' | 'midline';
  contralateralRegion?: string;   // ID of opposite side region

  // Structures in this region
  structures: RegionStructures;

  // Educational content
  content: RegionContent;

  // 3D visualization
  meshIds: string[];              // 3D model mesh IDs for this region
  defaultCamera: CameraPosition;  // Default camera view
  boundingBox?: {
    min: { x: number; y: number; z: number };
    max: { x: number; y: number; z: number };
  };

  // Surface anatomy
  surfaceLandmarks?: SurfaceLandmark[];
  dermatomes?: DermatomeInfo;
  myotomes?: MyotomeInfo;

  // Vascular and neural supply
  bloodSupply?: BloodSupplyInfo;
  innervation?: InnervationInfo;

  // Clinical relevance
  clinical?: RegionClinicalInfo;

  // Metadata
  description?: string;
  tags?: string[];
  lastUpdated?: string;
}

/**
 * Simplified region summary for listings
 */
export interface RegionSummary {
  id: string;
  name: string;
  parentRegion: string | null;
  childCount: number;
  structureCount: number;
  hasContent: boolean;
  level: number;
  laterality?: 'left' | 'right' | 'bilateral' | 'midline';
}

/**
 * Region search options
 */
export interface RegionSearchOptions {
  query?: string;
  parentId?: string;
  level?: number;
  laterality?: 'left' | 'right' | 'bilateral' | 'midline';
  hasStructureType?: keyof RegionStructures;
  hasFmaId?: boolean;
  limit?: number;
}

/**
 * Region path in hierarchy
 */
export interface RegionPath {
  regions: RegionSummary[];
  depth: number;
}

/**
 * Region tree node for hierarchy visualization
 */
export interface RegionTreeNode {
  region: RegionSummary;
  children: RegionTreeNode[];
  expanded?: boolean;
}

/**
 * Body side enumeration
 */
export type BodySide = 'left' | 'right';

/**
 * Major body divisions
 */
export type BodyDivision =
  | 'head'
  | 'neck'
  | 'thorax'
  | 'abdomen'
  | 'pelvis'
  | 'back'
  | 'upper-limb'
  | 'lower-limb';

/**
 * Upper limb segments
 */
export type UpperLimbSegment =
  | 'shoulder'
  | 'arm'
  | 'elbow'
  | 'forearm'
  | 'wrist'
  | 'hand';

/**
 * Lower limb segments
 */
export type LowerLimbSegment =
  | 'hip'
  | 'thigh'
  | 'knee'
  | 'leg'
  | 'ankle'
  | 'foot';

/**
 * Head subdivisions
 */
export type HeadSubdivision =
  | 'cranium'
  | 'face'
  | 'orbit'
  | 'nasal'
  | 'oral'
  | 'ear';

/**
 * Torso subdivisions
 */
export type TorsoSubdivision =
  | 'thoracic-wall'
  | 'thoracic-cavity'
  | 'abdominal-wall'
  | 'abdominal-cavity'
  | 'pelvic-wall'
  | 'pelvic-cavity'
  | 'perineum';
