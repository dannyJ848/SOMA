/**
 * Content Types for Biological Self Medical Content Aggregation
 * 
 * Defines core data structures for storing and retrieving medical educational content
 * from open source repositories like OpenStax.
 */

// ============================================================================
// CORE INTERFACES
// ============================================================================

/**
 * Represents a reference to an image with full attribution
 */
export interface ImageRef {
  /** Unique identifier for the image */
  id: string;
  /** Original filename from source */
  originalFilename: string;
  /** Local path relative to images/ directory */
  localPath: string;
  /** Human-readable caption/description */
  caption: string;
  /** Alt text for accessibility */
  altText: string;
  /** Source attribution */
  source: SourceAttribution;
  /** Image metadata */
  metadata: ImageMetadata;
}

/**
 * Metadata for images
 */
export interface ImageMetadata {
  /** Original dimensions */
  width?: number;
  height?: number;
  /** File format */
  format: 'png' | 'jpg' | 'svg' | 'webp' | 'other';
  /** File size in bytes */
  fileSize?: number;
  /** When the image was downloaded */
  downloadedAt: string;
  /** Checksum for integrity verification */
  checksum: string;
}

/**
 * Represents a block of content (paragraph, section, figure reference, etc.)
 */
export interface ContentBlock {
  /** Unique identifier */
  id: string;
  /** Type of content block */
  type: ContentBlockType;
  /** The actual content */
  content: string;
  /** Optional title/heading for this block */
  title?: string;
  /** Child blocks for hierarchical content */
  children?: ContentBlock[];
  /** Associated images */
  images?: ImageRef[];
  /** Learning objectives associated with this block */
  learningObjectives?: string[];
  /** Key terms defined in this block */
  keyTerms?: KeyTerm[];
  /** Source location info */
  sourceLocation?: SourceLocation;
}

/**
 * Types of content blocks
 */
export type ContentBlockType =
  | 'chapter'        // Top-level chapter
  | 'section'        // Section within chapter
  | 'subsection'     // Subsection
  | 'paragraph'      // Standard paragraph
  | 'figure'         // Figure with image
  | 'table'          // Data table
  | 'list'           // Bulleted or numbered list
  | 'callout'        // Important note/callout box
  | 'review'         // Review questions
  | 'summary';       // Chapter summary

/**
 * Key term with definition
 */
export interface KeyTerm {
  /** The term itself */
  term: string;
  /** Definition */
  definition: string;
  /** Optional pronunciation guide */
  pronunciation?: string;
}

/**
 * Source location for tracking content origin
 */
export interface SourceLocation {
  /** Source ID (matches sources.json) */
  sourceId: string;
  /** Chapter number/name */
  chapter?: string;
  /** Section identifier */
  section?: string;
  /** Page number if available */
  page?: number;
  /** URL to original content */
  url?: string;
  /** Last accessed date */
  accessedAt: string;
}

/**
 * Complete medical content document
 */
export interface MedicalContent {
  /** Unique identifier */
  id: string;
  /** Content category */
  category: ContentCategory;
  /** Human-readable title */
  title: string;
  /** Brief description */
  description: string;
  /** Main content blocks */
  content: ContentBlock[];
  /** All images referenced */
  images: ImageRef[];
  /** Learning objectives for entire document */
  learningObjectives: string[];
  /** Key terms glossary */
  keyTerms: KeyTerm[];
  /** Source attribution */
  source: SourceAttribution;
  /** Content metadata */
  metadata: ContentMetadata;
}

/**
 * Content categories
 */
export type ContentCategory =
  | 'anatomy'
  | 'histology'
  | 'pathology'
  | 'physiology'
  | 'embryology'
  | 'neuroscience';

/**
 * Source attribution information
 */
export interface SourceAttribution {
  /** Source ID (matches sources.json) */
  sourceId: string;
  /** Human-readable source name */
  name: string;
  /** Original title */
  originalTitle: string;
  /** Authors/contributors */
  authors?: string[];
  /** Publisher/organization */
  publisher: string;
  /** License type */
  license: LicenseType;
  /** URL to license */
  licenseUrl: string;
  /** URL to source material */
  sourceUrl: string;
  /** Publication year */
  year?: number;
  /** Additional attribution notes */
  notes?: string;
}

/**
 * License types for content
 */
export type LicenseType =
  | 'CC-BY-4.0'      // Creative Commons Attribution 4.0
  | 'CC-BY-SA-4.0'   // CC Attribution-ShareAlike 4.0
  | 'CC-BY-NC-4.0'   // CC Attribution-NonCommercial 4.0
  | 'CC0'            // Public domain dedication
  | 'GPL-3.0'        // GNU GPL v3
  | 'MIT'            // MIT License
  | 'Apache-2.0'     // Apache 2.0
  | 'public-domain'  // Public domain
  | 'custom';        // Custom/other license

/**
 * Content metadata
 */
export interface ContentMetadata {
  /** When content was created in our system */
  createdAt: string;
  /** When content was last updated */
  updatedAt: string;
  /** Version identifier */
  version: string;
  /** Content quality/completeness score (0-1) */
  completeness: number;
  /** Extraction method used */
  extractionMethod: string;
  /** Processing notes */
  notes?: string;
  /** Tags for categorization */
  tags: string[];
}

// ============================================================================
// REGISTRY TYPES
// ============================================================================

/**
 * Registry entry for loaded content
 */
export interface ContentRegistryEntry {
  /** Content ID */
  id: string;
  /** Category */
  category: ContentCategory;
  /** Title */
  title: string;
  /** Path to content JSON file */
  path: string;
  /** Number of content blocks */
  blockCount: number;
  /** Number of images */
  imageCount: number;
  /** Source ID */
  sourceId: string;
  /** Last updated */
  updatedAt: string;
}

/**
 * Content registry - index of all available content
 */
export interface ContentRegistry {
  /** Registry version */
  version: string;
  /** Last updated timestamp */
  updatedAt: string;
  /** All registered content */
  entries: ContentRegistryEntry[];
  /** Stats by category */
  stats: CategoryStats;
}

/**
 * Statistics per category
 */
export interface CategoryStats {
  [category: string]: {
    contentCount: number;
    imageCount: number;
    totalBlocks: number;
  };
}

// ============================================================================
// SOURCE TRACKING TYPES
// ============================================================================

/**
 * Source definition in sources.json
 */
export interface SourceDefinition {
  /** Unique source ID */
  id: string;
  /** Human-readable name */
  name: string;
  /** Full title */
  title: string;
  /** Authors/contributors */
  authors: string[];
  /** Publisher/organization */
  publisher: string;
  /** Publication year */
  year: number;
  /** License information */
  license: {
    type: LicenseType;
    url: string;
    summary: string;
  };
  /** URLs */
  urls: {
    main: string;
    repository?: string;
    license?: string;
  };
  /** Content coverage */
  coverage: {
    categories: ContentCategory[];
    topics: string[];
  };
  /** Attribution requirements */
  attribution: {
    required: boolean;
    text: string;
    format: string;
  };
  /** Last verified date */
  verifiedAt: string;
  /** Compliance status */
  compliance: 'compliant' | 'pending' | 'review-needed';
}

/**
 * Complete sources configuration
 */
export interface SourcesConfig {
  /** Configuration version */
  version: string;
  /** Last updated */
  updatedAt: string;
  /** All sources */
  sources: SourceDefinition[];
  /** License compliance summary */
  compliance: ComplianceSummary;
}

/**
 * License compliance summary
 */
export interface ComplianceSummary {
  /** Total sources */
  totalSources: number;
  /** Compliant sources count */
  compliantCount: number;
  /** Pending review count */
  pendingCount: number;
  /** Needs review count */
  reviewNeededCount: number;
  /** By license type */
  byLicense: { [license: string]: number };
}

// ============================================================================
// LOADER TYPES
// ============================================================================

/**
 * Options for loading content
 */
export interface ContentLoadOptions {
  /** Filter by category */
  category?: ContentCategory;
  /** Filter by source ID */
  sourceId?: string;
  /** Filter by tags */
  tags?: string[];
  /** Include full content or just metadata */
  includeContent?: boolean;
  /** Include images */
  includeImages?: boolean;
}

/**
 * Result of content loading operation
 */
export interface ContentLoadResult {
  /** Loaded content */
  content: MedicalContent[];
  /** Total available (before filters) */
  totalAvailable: number;
  /** Query metadata */
  query: {
    filters: ContentLoadOptions;
    duration: number;
    timestamp: string;
  };
}

/**
 * Content validation result
 */
export interface ValidationResult {
  /** Is content valid */
  valid: boolean;
  /** Content ID */
  contentId: string;
  /** Validation errors */
  errors: ValidationError[];
  /** Validation warnings */
  warnings: ValidationWarning[];
}

/**
 * Validation error
 */
export interface ValidationError {
  /** Error code */
  code: string;
  /** Error message */
  message: string;
  /** Field/path with error */
  path: string;
  /** Suggested fix */
  suggestion?: string;
}

/**
 * Validation warning
 */
export interface ValidationWarning {
  /** Warning code */
  code: string;
  /** Warning message */
  message: string;
  /** Field/path with warning */
  path: string;
}
