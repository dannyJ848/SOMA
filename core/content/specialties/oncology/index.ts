/**
 * Oncology Specialty Educational Content
 *
 * Comprehensive coverage of cancer medicine including:
 * - Cancer Biology: Cell cycle, mutations, carcinogenesis, metastasis
 * - Common Cancers: Breast, lung, prostate, colorectal, melanoma
 * - Staging Systems: TNM classification
 * - Treatment Modalities: Chemotherapy, targeted therapy, immunotherapy, radiation
 * - Screening Guidelines: Evidence-based cancer screening
 * - Oncologic Emergencies: Critical presentations
 * - Palliative Care: Symptom management and end-of-life care
 * - Survivorship: Long-term care of cancer survivors
 *
 * Content is physician-level for patient education with multi-level complexity.
 */

// Oncology Database (44 structured entries)
export {
  ONCOLOGY_ENTRIES,
  getOncologyEntry,
  searchOncology,
  getOncologyByCategory,
  getOncologyCount,
} from './oncology-database';
export type { OncologyEntry, OncologyCategory as OncologyDatabaseCategory } from './oncology-database';

// Cancer Biology
export { cancerBiologyContent } from './cancer-biology';
export { cellCycleContent, mutationsContent, metastasisContent } from './cancer-biology';

// Common Cancers
export { breastCancerContent } from './cancers/breast-cancer';
export { lungCancerContent } from './cancers/lung-cancer';
export { prostateCancerContent } from './cancers/prostate-cancer';
export { colorectalCancerContent } from './cancers/colorectal-cancer';
export { melanomaContent } from './cancers/melanoma';

// Staging
export { tnmStagingContent } from './staging';

// Treatment
export { chemotherapyContent } from './treatment/chemotherapy';
export { targetedTherapyContent } from './treatment/targeted-therapy';
export { immunotherapyContent } from './treatment/immunotherapy';
export { radiationTherapyContent } from './treatment/radiation-therapy';

// Clinical Topics
export { screeningGuidelinesContent } from './screening-guidelines';
export { oncologicEmergenciesContent } from './oncologic-emergencies';
export { palliativeCareContent } from './palliative-care';
export { cancerSurvivorshipContent } from './survivorship';

// In-depth specialty content (EducationalContent format)
export { breastCancerScreening, breastCancerStaging, breastCancerTreatment } from './breast';
export { lungCancerTypes, lungCancerStagingTreatment } from './lung';
export { leukemia, lymphoma } from './hematologic';
export { chemotherapyPrinciples, immunotherapy, radiationTherapy } from './treatment-modalities';

// Content categories
export const ONCOLOGY_CATEGORIES = [
  'cancer-biology',
  'common-cancers',
  'staging',
  'chemotherapy',
  'targeted-therapy',
  'immunotherapy',
  'radiation-therapy',
  'screening',
  'emergencies',
  'palliative-care',
  'survivorship',
  'breast-screening',
  'breast-staging',
  'breast-treatment',
  'lung-types',
  'lung-staging-treatment',
  'hematologic-leukemia',
  'hematologic-lymphoma',
  'chemotherapy-principles',
  'immunotherapy-principles',
  'radiation-therapy-principles',
] as const;

export type OncologyCategory = (typeof ONCOLOGY_CATEGORIES)[number];
