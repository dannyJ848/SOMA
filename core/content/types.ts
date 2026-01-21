/**
 * Multi-Level Educational Content Data Model
 *
 * Supports 5 complexity tiers for all educational content:
 * - Level 1: 8th Grade (simple analogies, everyday language)
 * - Level 2: High School (basic medical terminology)
 * - Level 3: College (full terminology, mechanisms)
 * - Level 4: Graduate (detailed pathophysiology)
 * - Level 5: MD/Professional (clinical correlations, current research)
 */

export type ComplexityLevel = 1 | 2 | 3 | 4 | 5;

export const COMPLEXITY_LEVEL_NAMES: Record<ComplexityLevel, string> = {
  1: '8th Grade',
  2: 'High School',
  3: 'College',
  4: 'Graduate',
  5: 'MD/Professional',
};

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
  level: ComplexityLevel;
  summary: string;           // 1-2 sentence overview
  explanation: string;       // Detailed explanation (markdown supported)
  keyTerms: TermDefinition[];
  analogies?: string[];      // Level-appropriate analogies
  examples?: string[];       // Real-world examples
  clinicalNotes?: string;    // Clinical relevance (primarily levels 4-5)
}

/**
 * Citation/source reference
 */
export interface Citation {
  id: string;
  type: 'textbook' | 'article' | 'website' | 'video' | 'image';
  title: string;
  authors?: string[];
  source: string;            // e.g., "OpenStax Anatomy & Physiology 2e"
  chapter?: string;
  section?: string;
  page?: string;
  url?: string;
  accessedDate?: string;
  license?: string;          // e.g., "CC BY 4.0"
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
  duration?: number;         // For video/animation (seconds)
  thumbnailFilename?: string;
  citation?: Citation;
}

/**
 * Cross-reference to related content
 */
export interface CrossReference {
  targetId: string;          // ID of the related content
  targetType: 'structure' | 'system' | 'pathway' | 'condition' | 'topic';
  relationship: 'parent' | 'child' | 'sibling' | 'related' | 'see-also';
  label?: string;            // Display text for the link
}

/**
 * Tags for categorization and filtering
 */
export interface ContentTags {
  systems?: string[];        // e.g., ['cardiovascular', 'respiratory']
  structures?: string[];     // FMA IDs or names
  topics?: string[];         // e.g., ['anatomy', 'physiology', 'pathology']
  keywords?: string[];       // Free-form keywords
  clinicalRelevance?: 'low' | 'medium' | 'high' | 'critical';
  examRelevance?: {          // For medical student study mode
    usmle?: boolean;
    nbme?: boolean;
    shelf?: string[];        // e.g., ['surgery', 'medicine']
  };
}

/**
 * Complete educational content item with all 5 levels
 */
export interface EducationalContent {
  id: string;                // Unique identifier
  type: 'structure' | 'system' | 'pathway' | 'process' | 'condition' | 'concept';
  name: string;              // Primary name
  alternateNames?: string[]; // Synonyms, abbreviations
  fmaId?: string;            // Foundational Model of Anatomy ID
  hpoId?: string;            // Human Phenotype Ontology ID (for conditions/symptoms)

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
  citations: Citation[];
  crossReferences: CrossReference[];
  tags: ContentTags;

  // Metadata
  createdAt: string;
  updatedAt: string;
  version: number;
  status: 'draft' | 'review' | 'published';
  contributors?: string[];
}

/**
 * Partial content for AI-generated or incomplete items
 */
export interface PartialEducationalContent {
  id: string;
  type: EducationalContent['type'];
  name: string;
  alternateNames?: string[];
  fmaId?: string;
  hpoId?: string;

  // May not have all levels
  levels: Partial<Record<ComplexityLevel, LevelContent>>;

  media?: MediaAsset[];
  citations?: Citation[];
  crossReferences?: CrossReference[];
  tags?: ContentTags;

  createdAt: string;
  updatedAt: string;
  version: number;
  status: 'draft' | 'review' | 'published';
  missingLevels?: ComplexityLevel[];  // Track which levels need content
}

/**
 * Content generation request for AI
 */
export interface ContentGenerationRequest {
  targetId: string;
  name: string;
  type: EducationalContent['type'];
  targetLevel: ComplexityLevel;
  existingLevels?: Partial<Record<ComplexityLevel, LevelContent>>;
  context?: {
    system?: string;
    parentStructure?: string;
    relatedStructures?: string[];
  };
  sourceHint?: string;       // Hint about source material to reference
}

/**
 * Validation result for content completeness
 */
export interface ContentValidation {
  isComplete: boolean;
  missingLevels: ComplexityLevel[];
  issues: {
    level?: ComplexityLevel;
    field: string;
    message: string;
    severity: 'error' | 'warning';
  }[];
}

/**
 * Content search query
 */
export interface ContentSearchQuery {
  text?: string;
  type?: EducationalContent['type'] | EducationalContent['type'][];
  systems?: string[];
  structures?: string[];
  tags?: string[];
  level?: ComplexityLevel;   // Filter to content with this level
  status?: EducationalContent['status'];
  limit?: number;
  offset?: number;
}

/**
 * Content search result
 */
export interface ContentSearchResult {
  content: EducationalContent | PartialEducationalContent;
  score: number;             // Relevance score
  matchedFields: string[];   // Which fields matched
  snippet?: string;          // Text snippet with match
}
