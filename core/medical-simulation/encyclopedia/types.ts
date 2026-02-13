/**
 * Medical Encyclopedia Data Model
 *
 * Comprehensive types for cross-referenced medical encyclopedia entries
 * with multi-level content, anatomy links, and semantic search support.
 */

// ============================================
// Entry Types
// ============================================

/**
 * Types of encyclopedia entries
 */
export type EntryType =
  | 'condition'
  | 'symptom'
  | 'medication'
  | 'anatomy'
  | 'procedure'
  | 'physiology'
  | 'lab-test'
  | 'imaging'
  | 'terminology';

/**
 * Medical specialty/category for filtering
 */
export type MedicalCategory =
  | 'general'
  | 'cardiovascular'
  | 'respiratory'
  | 'gastrointestinal'
  | 'neurologic'
  | 'musculoskeletal'
  | 'endocrine'
  | 'renal'
  | 'hematologic'
  | 'immunologic'
  | 'infectious'
  | 'dermatologic'
  | 'psychiatric'
  | 'oncologic'
  | 'pediatric'
  | 'obstetric'
  | 'emergency'
  | 'surgical';

// ============================================
// Multi-Level Content
// ============================================

/**
 * Multi-level educational content structure
 * Three tiers: patient-friendly, intermediate, professional
 */
export interface MultiLevelContent {
  /**
   * Patient-friendly explanation
   * - Simple language, no medical jargon
   * - Focus on practical understanding
   * - Suitable for general public
   */
  patient: string;

  /**
   * Intermediate explanation
   * - Some medical terminology with explanations
   * - Suitable for nursing students, allied health
   * - More detail than patient level
   */
  intermediate: string;

  /**
   * Professional explanation
   * - Full medical terminology
   * - Pathophysiology details
   * - Suitable for medical students and physicians
   */
  professional: string;
}

/**
 * Detailed content section for entries
 */
export interface ContentSection {
  /** Section title */
  title: string;

  /** Section content at multiple levels */
  content: MultiLevelContent;

  /** Optional subsections */
  subsections?: ContentSection[];

  /** Related images/diagrams (URLs or asset IDs) */
  images?: ContentImage[];
}

/**
 * Image/diagram reference
 */
export interface ContentImage {
  /** Image identifier */
  imageId: string;

  /** Image URL or asset path */
  url: string;

  /** Alt text */
  alt: string;

  /** Caption */
  caption?: string;

  /** Credit/source */
  credit?: string;
}

/**
 * Encyclopedia image types
 */
export type EncyclopediaImageType =
  | 'anatomical'
  | 'imaging'
  | 'histology'
  | 'pathology'
  | 'clinical'
  | 'cross-section'
  | 'diagram'
  | 'chart';

/**
 * Encyclopedia image reference
 * Links to images from the image-manifest.ts
 */
export interface EncyclopediaImage {
  /** Image identifier (matches image-manifest.ts) */
  imageId: string;

  /** Type of image */
  type: EncyclopediaImageType;

  /** Display title */
  title: string;

  /** Path to image file */
  path: string;

  /** Alt text for accessibility */
  altText: string;

  /** Optional caption */
  caption?: string;

  /** Attribution information */
  attribution: {
    source: string;
    author?: string;
    license: string;
    url?: string;
  };

  /** Display order priority (lower = first) */
  displayOrder?: number;

  /** Whether this is a featured/main image */
  isFeatured?: boolean;
}

// ============================================
// Anatomy Links
// ============================================

/**
 * Link to 3D anatomy viewer
 */
export interface AnatomyLink {
  /** Structure identifier for 3D navigation */
  structureId: string;

  /** Display name for the structure */
  structureName: string;

  /** Text to display as link */
  linkText: string;

  /** Recommended view preset */
  viewPreset?: 'anterior' | 'posterior' | 'lateral-left' | 'lateral-right' | 'superior' | 'inferior';

  /** Layers to enable */
  enableLayers?: string[];

  /** Highlight color */
  highlightColor?: string;

  /** Description of relevance */
  relevance?: string;
}

// ============================================
// Related Entries
// ============================================

/**
 * Relationship type between entries
 */
export type RelationshipType =
  | 'related-to'
  | 'causes'
  | 'caused-by'
  | 'symptom-of'
  | 'has-symptom'
  | 'treated-by'
  | 'treats'
  | 'diagnosed-by'
  | 'diagnoses'
  | 'part-of'
  | 'contains'
  | 'similar-to'
  | 'contraindicated-with'
  | 'see-also';

/**
 * Related entry reference
 */
export interface RelatedEntry {
  /** Entry ID of the related entry */
  entryId: string;

  /** Entry type */
  entryType: EntryType;

  /** Display name */
  name: string;

  /** Spanish display name */
  nameEs?: string;

  /** Relationship type */
  relationship: RelationshipType;

  /** Description of the relationship */
  description?: string;

  /** Relevance score (0-100) for sorting */
  relevanceScore?: number;
}

// ============================================
// References & Citations
// ============================================

/**
 * Reference/citation types
 */
export type ReferenceType =
  | 'journal-article'
  | 'textbook'
  | 'guideline'
  | 'website'
  | 'review'
  | 'meta-analysis'
  | 'case-report';

/**
 * Reference/citation
 */
export interface Reference {
  /** Reference identifier */
  referenceId: string;

  /** Reference type */
  type: ReferenceType;

  /** Title of the reference */
  title: string;

  /** Authors (formatted string or array) */
  authors?: string;

  /** Journal/source name */
  source?: string;

  /** Publication year */
  year?: number;

  /** Volume/issue */
  volume?: string;

  /** Pages */
  pages?: string;

  /** DOI */
  doi?: string;

  /** PubMed ID */
  pmid?: string;

  /** URL */
  url?: string;

  /** Access date for websites */
  accessDate?: string;

  /** Formatted citation string */
  citation: string;
}

// ============================================
// Search Metadata
// ============================================

/**
 * Metadata for semantic search indexing
 */
export interface SearchMetadata {
  /** Primary keywords (high weight) */
  primaryKeywords: string[];

  /** Secondary keywords (medium weight) */
  secondaryKeywords?: string[];

  /** Synonyms and alternative names */
  synonyms?: string[];

  /** Medical abbreviations */
  abbreviations?: string[];

  /** ICD-10 codes if applicable */
  icdCodes?: string[];

  /** MeSH terms for medical subject headings */
  meshTerms?: string[];

  /** Semantic tags for categorization */
  tags: string[];

  /** Search boost factor (default 1.0) */
  searchBoost?: number;
}

// ============================================
// Main Encyclopedia Entry
// ============================================

/**
 * Complete encyclopedia entry
 */
export interface EncyclopediaEntry {
  /** Unique entry identifier */
  entryId: string;

  /** Entry type (condition, symptom, etc.) */
  entryType: EntryType;

  /** Primary name/title */
  name: string;

  /** Spanish name/title */
  nameEs?: string;

  /** Alternative names/aliases */
  aliases?: string[];

  /** Medical category */
  category: MedicalCategory;

  /** Subcategory if applicable */
  subcategory?: string;

  /** Brief summary (patient level) */
  summary: string;

  /** Main content sections */
  content: ContentSection[];

  /** Multi-level overview */
  overview: MultiLevelContent;

  /** Related encyclopedia entries */
  relatedEntries: RelatedEntry[];

  /** Links to 3D anatomy structures */
  anatomyLinks: AnatomyLink[];

  /** Associated images/diagrams */
  images?: EncyclopediaImage[];

  /** References and citations */
  references: Reference[];

  /** Search metadata */
  searchMetadata: SearchMetadata;

  /** Last updated date */
  lastUpdated?: string;

  /** Version number */
  version?: string;

  /** Author/contributor */
  author?: string;

  /** Review status */
  reviewStatus?: 'draft' | 'reviewed' | 'approved';

  /** Clinical importance level */
  clinicalImportance?: 'essential' | 'important' | 'supplementary';
}

// ============================================
// Summary Types for Lists
// ============================================

/**
 * Entry summary for list display
 */
export interface EncyclopediaEntrySummary {
  entryId: string;
  entryType: EntryType;
  name: string;
  nameEs?: string;
  category: MedicalCategory;
  summary: string;
  relatedCount: number;
  anatomyLinksCount: number;
}

/**
 * Search result
 */
export interface EncyclopediaSearchResult {
  entryId: string;
  entryType: EntryType;
  name: string;
  nameEs?: string;
  category: MedicalCategory;
  summary: string;
  matchType: 'exact' | 'synonym' | 'keyword' | 'content' | 'partial';
  relevanceScore: number;
  highlightedSnippet?: string;
}

// ============================================
// Entry Type Specific Extensions
// ============================================

/**
 * Condition-specific entry extensions
 */
export interface ConditionEntryExtension {
  /** ICD-10 code */
  icdCode?: string;

  /** Prevalence */
  prevalence?: string;

  /** Risk factors */
  riskFactors?: string[];

  /** Diagnostic criteria summary */
  diagnosticCriteria?: string;

  /** Link to full condition simulation */
  conditionSimulationId?: string;
}

/**
 * Medication-specific entry extensions
 */
export interface MedicationEntryExtension {
  /** Generic name */
  genericName: string;

  /** Brand names */
  brandNames?: string[];

  /** Drug class */
  drugClass: string;

  /** Common dosages */
  commonDosages?: string[];

  /** Link to full medication physiology */
  medicationPhysiologyId?: string;
}

/**
 * Anatomy-specific entry extensions
 */
export interface AnatomyEntryExtension {
  /** Latin name */
  latinName?: string;

  /** Body system */
  system: string;

  /** Location description */
  location: string;

  /** Primary function */
  primaryFunction: string;

  /** 3D structure ID */
  structureId: string;
}

/**
 * Procedure-specific entry extensions
 */
export interface ProcedureEntryExtension {
  /** CPT code */
  cptCode?: string;

  /** Procedure type */
  procedureType: 'diagnostic' | 'therapeutic' | 'surgical' | 'monitoring';

  /** Typical duration */
  duration?: string;

  /** Recovery time */
  recoveryTime?: string;

  /** Common indications */
  indications?: string[];
}

/**
 * Lab test-specific entry extensions
 */
export interface LabTestEntryExtension {
  /** Normal range */
  normalRange?: string;

  /** Units */
  units?: string;

  /** Specimen type */
  specimenType?: string;

  /** What it measures */
  measures: string;

  /** Common conditions that affect it */
  affectedByConditions?: string[];
}

// ============================================
// Extended Entry Types
// ============================================

/**
 * Full condition entry
 */
export interface ConditionEncyclopediaEntry extends EncyclopediaEntry {
  entryType: 'condition';
  conditionExtension: ConditionEntryExtension;
}

/**
 * Full medication entry
 */
export interface MedicationEncyclopediaEntry extends EncyclopediaEntry {
  entryType: 'medication';
  medicationExtension: MedicationEntryExtension;
}

/**
 * Full anatomy entry
 */
export interface AnatomyEncyclopediaEntry extends EncyclopediaEntry {
  entryType: 'anatomy';
  anatomyExtension: AnatomyEntryExtension;
}

/**
 * Full procedure entry
 */
export interface ProcedureEncyclopediaEntry extends EncyclopediaEntry {
  entryType: 'procedure';
  procedureExtension: ProcedureEntryExtension;
}

/**
 * Full lab test entry
 */
export interface LabTestEncyclopediaEntry extends EncyclopediaEntry {
  entryType: 'lab-test';
  labTestExtension: LabTestEntryExtension;
}

// ============================================
// Index Types for Navigation
// ============================================

/**
 * Category index
 */
export interface CategoryIndex {
  category: MedicalCategory;
  entryCount: number;
  subcategories: {
    name: string;
    entryCount: number;
  }[];
}

/**
 * Alphabetical index
 */
export interface AlphabeticalIndex {
  letter: string;
  entries: {
    entryId: string;
    name: string;
    entryType: EntryType;
  }[];
}

/**
 * Type-based index
 */
export interface TypeIndex {
  entryType: EntryType;
  entryCount: number;
  categories: {
    category: MedicalCategory;
    entryCount: number;
  }[];
}
