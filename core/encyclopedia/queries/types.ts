/**
 * Content Aggregation Query Types
 *
 * Type definitions for querying and aggregating content
 * from multiple sources across the encyclopedia.
 */

import { ComplexityLevel, EducationalContent, PartialEducationalContent } from '../../content/types';

// ============================================
// Anatomical Region Types
// ============================================

/**
 * Anatomical region definition for encyclopedia queries
 */
export interface AnatomicalRegion {
  id: string;
  name: string;
  latinName?: string;
  fmaId?: string;

  /** Parent region in the hierarchy */
  parentRegionId?: string;

  /** Child regions */
  childRegionIds: string[];

  /** Body system this region belongs to */
  system: BodySystemId;

  /** Additional systems this region participates in */
  relatedSystems?: BodySystemId[];

  /** Description at various complexity levels */
  descriptions: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };

  /** Key structures within this region */
  keyStructures: string[];

  /** Related FMA IDs for structure matching */
  relatedFmaIds?: string[];

  /** Keywords for content matching */
  keywords: string[];
}

/**
 * Body system identifiers
 */
export type BodySystemId =
  | 'cardiovascular'
  | 'respiratory'
  | 'digestive'
  | 'nervous'
  | 'musculoskeletal'
  | 'endocrine'
  | 'integumentary'
  | 'lymphatic'
  | 'urinary'
  | 'reproductive'
  | 'immune';

// ============================================
// Content Types for Aggregation
// ============================================

/**
 * Anatomy content for a region
 */
export interface AnatomyContent {
  id: string;
  name: string;
  type: 'structure' | 'organ' | 'tissue' | 'vessel' | 'nerve';
  fmaId?: string;

  /** Brief description */
  summary: string;

  /** Full content at the user's complexity level */
  content: string;

  /** Location description */
  location: string;

  /** Function of this structure */
  function: string;

  /** Clinical relevance */
  clinicalNotes?: string;

  /** Related structures */
  relatedStructures: string[];

  /** Source content reference */
  sourceId: string;
  sourcePath: string;

  /** Complexity level of the content */
  complexityLevel: ComplexityLevel;
}

/**
 * Physiology content for a region
 */
export interface PhysiologyContent {
  id: string;
  name: string;
  type: 'process' | 'pathway' | 'mechanism' | 'regulation';

  /** Brief description */
  summary: string;

  /** Full explanation */
  content: string;

  /** Body systems involved */
  systems: BodySystemId[];

  /** Key steps or components */
  keyPoints: string[];

  /** Clinical implications */
  clinicalNotes?: string;

  /** Related pathways */
  relatedPathways: string[];

  /** Source content reference */
  sourceId: string;
  sourcePath: string;

  /** Complexity level of the content */
  complexityLevel: ComplexityLevel;
}

/**
 * Pathology content for a region
 */
export interface PathologyContent {
  id: string;
  name: string;
  type: 'mechanism' | 'process' | 'change';

  /** Brief description */
  summary: string;

  /** Full explanation */
  content: string;

  /** Category of pathological process */
  category: PathologyCategory;

  /** How this affects the region */
  regionalEffects: string;

  /** Associated conditions */
  associatedConditions: string[];

  /** Diagnostic features */
  diagnosticFeatures?: string[];

  /** Source content reference */
  sourceId: string;
  sourcePath: string;

  /** Complexity level of the content */
  complexityLevel: ComplexityLevel;
}

/**
 * Pathology category types
 */
export type PathologyCategory =
  | 'cell-injury'
  | 'inflammation'
  | 'hemodynamic'
  | 'genetic'
  | 'neoplastic'
  | 'infectious'
  | 'immunologic'
  | 'nutritional'
  | 'environmental'
  | 'degenerative';

/**
 * Histology content for a region
 */
export interface HistologyContent {
  id: string;
  name: string;

  /** Tissue type */
  tissueType: string;

  /** Brief description */
  summary: string;

  /** Full description */
  content: string;

  /** Key identifying features */
  identifyingFeatures: string[];

  /** Staining characteristics */
  stainingNotes?: string;

  /** Associated image IDs */
  imageIds?: string[];

  /** Source content reference */
  sourceId: string;
  sourcePath: string;

  /** Complexity level of the content */
  complexityLevel: ComplexityLevel;
}

/**
 * Physical exam content for a region
 */
export interface PhysicalExamContent {
  id: string;
  name: string;

  /** Exam technique type */
  technique: 'inspection' | 'palpation' | 'percussion' | 'auscultation' | 'special-test';

  /** Brief description */
  summary: string;

  /** How to perform */
  procedure: string;

  /** Normal findings */
  normalFindings: string;

  /** Abnormal findings and their significance */
  abnormalFindings: AbnormalFindingSummary[];

  /** Clinical pearls */
  clinicalPearls?: string[];

  /** Source content reference */
  sourceId: string;
  sourcePath: string;

  /** Complexity level of the content */
  complexityLevel: ComplexityLevel;
}

/**
 * Summary of abnormal finding
 */
export interface AbnormalFindingSummary {
  finding: string;
  significance: string;
  associatedConditions: string[];
}

// ============================================
// Condition and Symptom Types
// ============================================

/**
 * Condition summary for region queries
 */
export interface ConditionSummary {
  id: string;
  name: string;

  /** Brief description */
  summary: string;

  /** How the condition affects this region */
  regionalInvolvement: string;

  /** Key symptoms in this region */
  keySymptoms: string[];

  /** Severity indicator */
  severity: 'mild' | 'moderate' | 'severe' | 'variable';

  /** Prevalence in this region */
  prevalence: 'common' | 'uncommon' | 'rare';

  /** Link to full condition content */
  contentPath: string;

  /** ICD-10 code if available */
  icd10?: string;
}

/**
 * Symptom summary for region queries
 */
export interface SymptomSummary {
  id: string;
  name: string;

  /** Brief description */
  description: string;

  /** Common causes in this region */
  commonCauses: string[];

  /** Red flags to watch for */
  redFlags?: string[];

  /** When to seek care */
  urgencyLevel: 'routine' | 'soon' | 'urgent' | 'emergency';

  /** Link to full symptom content */
  contentPath: string;
}

// ============================================
// Regional Content Aggregation
// ============================================

/**
 * Summary of regional content (for child region lists)
 */
export interface RegionalContentSummary {
  regionId: string;
  regionName: string;

  /** Number of content items by type */
  contentCounts: {
    anatomy: number;
    physiology: number;
    pathology: number;
    histology: number;
    physicalExam: number;
    conditions: number;
    symptoms: number;
  };

  /** Key highlights */
  highlights: string[];
}

/**
 * Complete regional content aggregation
 */
export interface RegionalContent {
  region: AnatomicalRegion;

  /** Aggregated content from all sources */
  anatomy: AnatomyContent[];
  physiology: PhysiologyContent[];
  pathology: PathologyContent[];
  histology: HistologyContent[];
  physicalExam: PhysicalExamContent[];

  /** Related clinical content */
  relatedConditions: ConditionSummary[];
  relatedSymptoms: SymptomSummary[];

  /** Sub-regions with content summaries */
  childRegions: RegionalContentSummary[];

  /** Parent region info if available */
  parentRegion?: RegionalContentSummary;

  /** Cross-references to related regions */
  relatedRegions: RegionalContentSummary[];

  /** Metadata */
  lastUpdated: string;
  totalContentItems: number;
}

// ============================================
// Query Options
// ============================================

/**
 * Options for regional content queries
 */
export interface RegionalContentOptions {
  /** Complexity level for content */
  complexityLevel?: ComplexityLevel;

  /** Include child region content */
  includeChildContent?: boolean;

  /** Content types to include */
  contentTypes?: ('anatomy' | 'physiology' | 'pathology' | 'histology' | 'physicalExam')[];

  /** Maximum items per content type */
  maxItemsPerType?: number;

  /** Include related conditions/symptoms */
  includeClinical?: boolean;

  /** Search within content */
  searchQuery?: string;
}

/**
 * Condition-anatomy mapping entry
 */
export interface ConditionAnatomyMapping {
  conditionId: string;
  conditionName: string;

  /** Primary regions affected */
  primaryRegions: string[];

  /** Secondary/related regions */
  secondaryRegions: string[];

  /** How the condition affects anatomy */
  anatomicalEffects: string;

  /** Body systems involved */
  systems: BodySystemId[];
}

// ============================================
// Content Source Types
// ============================================

/**
 * Content source metadata
 */
export interface ContentSource {
  id: string;
  type: 'anatomy' | 'physiology' | 'pathology' | 'histology' | 'physical-exam' | 'condition' | 'symptom';
  path: string;
  name: string;
  system?: BodySystemId;
  lastModified?: string;
}
