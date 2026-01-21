/**
 * Histology Image Database Types
 *
 * Data model for storing and organizing histology images with annotations.
 * Supports multiple magnifications, staining types, and anatomical linking.
 */

/**
 * Tissue type categories
 */
export type TissueCategory =
  | 'epithelial'
  | 'connective'
  | 'muscle'
  | 'nervous'
  | 'vascular'
  | 'lymphoid'
  | 'bone'
  | 'cartilage';

/**
 * Epithelial tissue subtypes
 */
export type EpithelialSubtype =
  | 'simple_squamous'
  | 'simple_cuboidal'
  | 'simple_columnar'
  | 'pseudostratified'
  | 'stratified_squamous_keratinized'
  | 'stratified_squamous_nonkeratinized'
  | 'stratified_cuboidal'
  | 'stratified_columnar'
  | 'transitional';

/**
 * Connective tissue subtypes
 */
export type ConnectiveSubtype =
  | 'loose_areolar'
  | 'dense_regular'
  | 'dense_irregular'
  | 'adipose'
  | 'reticular'
  | 'elastic';

/**
 * Muscle tissue subtypes
 */
export type MuscleSubtype =
  | 'skeletal'
  | 'cardiac'
  | 'smooth';

/**
 * Staining types
 */
export type StainType =
  | 'H&E'         // Hematoxylin and Eosin (standard)
  | 'PAS'         // Periodic Acid-Schiff
  | 'Masson'      // Masson's Trichrome
  | 'Silver'      // Silver staining
  | 'Giemsa'      // Giemsa stain
  | 'Oil_Red_O'   // Oil Red O for lipids
  | 'Alcian_Blue' // Alcian Blue for mucins
  | 'IHC'         // Immunohistochemistry
  | 'EM'          // Electron microscopy
  | 'Unstained';

/**
 * Magnification levels
 */
export type Magnification = '4x' | '10x' | '20x' | '40x' | '100x' | 'EM';

/**
 * Image annotation point
 */
export interface AnnotationPoint {
  x: number;  // Percentage (0-100) from left
  y: number;  // Percentage (0-100) from top
  label: string;
  description?: string;
  structureId?: string;  // Link to anatomical structure (FMA ID)
}

/**
 * Image annotation region
 */
export interface AnnotationRegion {
  type: 'rect' | 'circle' | 'polygon';
  points: { x: number; y: number }[];  // For polygon
  x?: number;  // For rect/circle
  y?: number;
  width?: number;  // For rect
  height?: number;
  radius?: number;  // For circle
  label: string;
  description?: string;
  structureId?: string;
}

/**
 * Histology image metadata
 */
export interface HistologyImage {
  id: string;

  // Basic info
  title: string;
  description: string;

  // Classification
  tissueCategory: TissueCategory;
  tissueSubtype?: string;  // EpithelialSubtype | ConnectiveSubtype | MuscleSubtype
  organSource: string;     // e.g., "kidney", "liver", "skin"
  bodySystem: string;      // e.g., "urinary", "digestive", "integumentary"

  // Technical info
  stain: StainType;
  magnification: Magnification;

  // Image file info
  filename: string;
  filePath: string;
  fileSize: number;  // bytes
  width: number;     // pixels
  height: number;    // pixels
  thumbnailPath?: string;

  // Annotations
  annotations: {
    points: AnnotationPoint[];
    regions: AnnotationRegion[];
  };

  // Links
  relatedStructures: string[];  // FMA IDs of related gross anatomy structures
  relatedImages: string[];       // IDs of related histology images (different mags, stains)

  // Source info
  source: 'blue_histology' | 'histology_guide' | 'custom' | 'other';
  sourceUrl?: string;
  license: string;
  credits?: string;

  // Content metadata
  complexityLevel: 1 | 2 | 3 | 4 | 5;
  keyFeatures: string[];  // Distinctive features to identify
  clinicalRelevance?: string;

  // Timestamps
  createdAt: string;
  updatedAt: string;
}

/**
 * Histology image set (same tissue at different magnifications)
 */
export interface HistologyImageSet {
  id: string;
  title: string;
  description: string;
  tissueCategory: TissueCategory;
  organSource: string;

  // Images at different magnifications
  images: {
    '4x'?: string;   // Image ID
    '10x'?: string;
    '20x'?: string;
    '40x'?: string;
    '100x'?: string;
    'EM'?: string;
  };

  // Default/primary image
  primaryImageId: string;
  primaryMagnification: Magnification;
}

/**
 * Tissue type description
 */
export interface TissueTypeInfo {
  category: TissueCategory;
  subtype?: string;
  name: string;
  description: string;

  // Characteristics at each complexity level
  characteristics: {
    level1: string[];  // 8th grade - simple terms
    level2: string[];  // High school - basic terminology
    level3: string[];  // College - full terminology
    level4: string[];  // Graduate - detailed mechanisms
    level5: string[];  // MD - clinical correlations
  };

  // What to look for
  identifyingFeatures: string[];

  // Where found
  locations: string[];

  // Related structures
  relatedStructureIds: string[];

  // Example images
  exampleImageIds: string[];
}

/**
 * Search options for histology images
 */
export interface HistologySearchOptions {
  tissueCategory?: TissueCategory;
  tissueSubtype?: string;
  organSource?: string;
  bodySystem?: string;
  stain?: StainType;
  magnification?: Magnification;
  source?: string;
  limit?: number;
}

/**
 * Histology quiz question
 */
export interface HistologyQuizQuestion {
  id: string;
  imageId: string;
  question: string;
  questionType: 'identification' | 'structure' | 'function' | 'clinical';
  options: string[];
  correctAnswer: number;  // Index of correct option
  explanation: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  relatedTopics: string[];
}
