/**
 * Endocrine System Educational Content
 *
 * Comprehensive content covering:
 * - Anatomy: All major endocrine glands and tissues
 * - Physiology: Hormone mechanisms and regulatory axes
 * - Histology: Microscopic structure of endocrine tissues
 * - Pathology: Endocrine disorders and diseases
 * - Clinical: Diagnostic testing and examination
 */

// Content categories
export const ENDOCRINE_CATEGORIES = [
  'anatomy',
  'physiology',
  'histology',
  'pathology',
  'clinical',
] as const;

export type EndocrineCategory = (typeof ENDOCRINE_CATEGORIES)[number];

// Endocrine System Database
export {
  // Types
  type EndocrineDbCategory,
  type EndocrineSubcategory,
  type ComplexityLevels,
  type EndocrineEntry,
  // Data
  ENDOCRINE_ENTRIES,
  // Lookup functions
  getEndocrineEntry,
  searchEndocrineEntries,
  getEndocrineByCategory,
  getEndocrineBySubcategory,
  getEndocrineCount,
  getEndocrineAtLevel,
  getAllEndocrineIds,
} from './endocrine-database';
