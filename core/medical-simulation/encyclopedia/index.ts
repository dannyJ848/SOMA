/**
 * Medical Encyclopedia Module
 * 
 * Comprehensive offline medical encyclopedia with:
 * - 246 encyclopedia entries across 11 body systems + pathology
 * - Multi-level content (patient, intermediate, professional)
 * - Cross-referenced anatomy links
 * - Medical image integration (diagrams, histology, imaging, pathology)
 * - Full-text search with semantic metadata
 * 
 * All content sourced from OpenStax (CC BY 4.0) for offline use
 * Images sourced from CC BY and Public Domain collections
 */

// ============================================
// Types
// ============================================
export type {
  // Core types
  EncyclopediaEntry,
  EncyclopediaEntrySummary,
  EncyclopediaSearchResult,
  EntryType,
  MedicalCategory,
  
  // Content types
  MultiLevelContent,
  ContentSection,
  ContentImage,
  EncyclopediaImage,
  EncyclopediaImageType,
  
  // Relationship types
  RelatedEntry,
  RelationshipType,
  AnatomyLink,
  
  // Reference types
  Reference,
  ReferenceType,
  
  // Search types
  SearchMetadata,
  CategoryIndex,
  AlphabeticalIndex,
  TypeIndex,
  
  // Extension types
  ConditionEntryExtension,
  ConditionEncyclopediaEntry,
  MedicationEntryExtension,
  MedicationEncyclopediaEntry,
  AnatomyEntryExtension,
  AnatomyEncyclopediaEntry,
  ProcedureEntryExtension,
  ProcedureEncyclopediaEntry,
  LabTestEntryExtension,
  LabTestEncyclopediaEntry,
} from './types';

// ============================================
// Store
// ============================================
export {
  addEntry,
  addEntries,
  getEntry,
  getAllEntries,
  getEntriesByType,
  getEntriesByCategory,
  getEntrySummaries,
  searchEntries,
  getRelatedEntries,
  getEntriesForAnatomyStructure,
  getEntryByName,
  getEntriesByKeyword,
  mapComplexityLevel,
  getContentAtComplexity,
  buildCrossReferenceIndex,
  prepareEntryForEmbedding,
  prepareAllEntriesForEmbedding,
  type EncyclopediaSearchOptions,
  type EncyclopediaVectorMetadata,
  type EncyclopediaEmbeddingContent,
} from './store';

// ============================================
// Image System
// ============================================
export type { MedicalImage } from './image-manifest';
export {
  // Manifest
  allMedicalImages,
  anatomicalDiagrams,
  histologyImages,
  medicalImaging,
  pathologyImages,
  clinicalImages,
  getImagesForEntry,
  getImagesByCategory,
  getImagesBySystem,
} from './image-manifest';

export {
  // Resolver utilities
  toEncyclopediaImage,
  getEntryImages,
  attachImagesToEntry,
  getImageById,
  getFeaturedImages,
  searchImages,
  getImagesByLevel,
  getImageStatistics,
  entryHasImages,
  getEntriesWithImages,
} from './image-resolver';

// ============================================
// Seeding
// ============================================
export { seedEncyclopedia } from './seed';

// ============================================
// Entry Count
// ============================================
export const ENCYCLOPEDIA_STATS = {
  totalEntries: 246,
  totalImages: 40, // Planned in manifest
  categories: 18,
  bodySystems: 11,
  complexityLevels: 3,
} as const;
