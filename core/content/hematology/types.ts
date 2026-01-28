/**
 * Hematology Content Types
 *
 * Types for hematology educational content including anemias,
 * bleeding disorders, blood cancers, and transfusion medicine.
 */

/**
 * A term definition at a specific complexity level
 */
export interface TermDefinition {
  term: string;
  definition: string;
  pronunciation?: string;
  etymology?: string;
  relatedTerms?: string[];
}

/**
 * Content at a specific complexity level
 */
export interface LevelContent {
  level: 1 | 2 | 3 | 4 | 5;
  summary: string;
  explanation: string;
  keyTerms: TermDefinition[];
  analogies?: string[];
  examples?: string[];
  clinicalNotes?: string;
  patientCounselingPoints?: string[];
}

/**
 * Media asset reference
 */
export interface MediaAsset {
  id: string;
  type: 'image' | 'diagram' | 'video' | 'animation' | '3d-model' | 'histology';
  filename: string;
  title: string;
  description?: string;
  width?: number;
  height?: number;
  duration?: number;
  thumbnailFilename?: string;
}

/**
 * Type for content items
 */
export type ContentType = 'structure' | 'system' | 'pathway' | 'process' | 'condition' | 'concept' | 'topic' | 'procedure';

/**
 * Tags for categorization and filtering
 */
export interface ContentTags {
  systems?: string[];
  structures?: string[];
  topics?: string[];
  keywords?: string[];
  clinicalRelevance?: 'low' | 'medium' | 'high' | 'critical';
}

/**
 * Complete educational content item with all 5 levels
 */
export interface EducationalContent {
  id: string;
  type: ContentType;
  name: string;
  alternateNames?: string[];
  fmaId?: string;
  hpoId?: string;

  // Multi-level content (must have all 5 levels)
  levels: {
    1: LevelContent;
    2: LevelContent;
    3: LevelContent;
    4: LevelContent;
    5: LevelContent;
  };

  // Shared resources
  media: MediaAsset[];
  citations: string[];
  crossReferences: string[];
  tags: ContentTags;

  // Metadata
  createdAt: string;
  updatedAt: string;
  version: number;
  status: 'draft' | 'review' | 'published';
  contributors?: string[];
}
