/**
 * Evidence-Based Medicine Educational Content
 *
 * Comprehensive content empowering patients to become informed healthcare consumers:
 * - Study Designs: Understanding different research methodologies
 * - Risk Interpretation: Absolute vs relative risk, NNT, NNH
 * - Reading Research: How to interpret scientific papers
 * - Statistics: P-values, confidence intervals, clinical significance
 * - Hierarchy of Evidence: Levels of evidence and their weight
 * - Clinical Guidelines: Understanding and interpreting recommendations
 * - Medical Information Sources: UpToDate, PubMed, Cochrane, and beyond
 * - Critical Appraisal: Evaluating study quality and validity
 * - Shared Decision Making: Partnering with healthcare providers
 * - Patient-Centered Outcomes: What matters to patients
 *
 * All content follows the 5-level complexity model for accessibility.
 *
 * NOTE: Content modules are planned for future implementation.
 */

// Content categories
export const EBM_CATEGORIES = [
  'study-design',
  'risk-interpretation',
  'research-literacy',
  'statistics',
  'evidence-hierarchy',
  'guidelines',
  'information-sources',
  'critical-appraisal',
  'shared-decisions',
  'patient-outcomes',
] as const;

export type EBMCategory = (typeof EBM_CATEGORIES)[number];

// All EBM content for easy access
export const ALL_EBM_CONTENT = [
  'study-design-types',
  'understanding-risk',
  'reading-research-papers',
  'understanding-statistics',
  'hierarchy-of-evidence',
  'clinical-guidelines',
  'medical-information-sources',
  'critical-appraisal',
  'shared-decision-making',
  'patient-centered-outcomes',
] as const;

// EBM Database - comprehensive evidence-based medicine reference
export {
  EBM_DATABASE,
  searchEBMEntries,
  filterByCategory,
  getEntryById,
} from './ebm-database';

export type {
  EBMCategory as EBMDatabaseCategory,
  EBMEntry,
} from './ebm-database';
