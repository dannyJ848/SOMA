/**
 * Medical Terminology Content Module
 *
 * Comprehensive medical terminology educational content with multi-level
 * complexity for learners from 8th grade through medical professionals.
 *
 * Content organized by category:
 * - Root Words (prefixes, suffixes, combining forms)
 * - Anatomical Terminology (directional terms, body planes, regions)
 * - Organ System Terms (system-specific vocabulary)
 * - Procedure Terminology (surgical and diagnostic procedures)
 * - Lab Test Terminology (laboratory vocabulary)
 * - Drug Terminology (pharmacological naming conventions)
 * - Symptom Terminology (signs and symptoms vocabulary)
 * - Diagnosis Terminology (disease classification terms)
 * - Pronunciation Guides (phonetic rules and guidance)
 * - Common Abbreviations (medical abbreviations and acronyms)
 */

// Types
export * from './types';

// Root words - prefixes, suffixes, combining forms
export * from './root-words';
export { rootWordsModule, prefixes, suffixes, combiningForms } from './root-words';

// Anatomical terminology - directional terms, body planes, regions
export * from './anatomical-terminology';
export { anatomicalTerminologyModule } from './anatomical-terminology';

// Organ system terms - vocabulary by body system
export * from './organ-system-terms';
export { organSystemTermsModule } from './organ-system-terms';

// Procedure terminology - surgical and diagnostic procedures
export * from './procedure-terminology';
export { procedureTerminologyModule } from './procedure-terminology';

// Lab test terminology - laboratory vocabulary
export * from './lab-test-terminology';
export { labTestTerminologyModule } from './lab-test-terminology';

// Drug terminology - pharmacological naming
export * from './drug-terminology';
export { drugTerminologyModule } from './drug-terminology';

// Symptom terminology - signs and symptoms
export * from './symptom-terminology';
export { symptomTerminologyModule } from './symptom-terminology';

// Diagnosis terminology - disease classification
export * from './diagnosis-terminology';
export { diagnosisTerminologyModule } from './diagnosis-terminology';

// Pronunciation guides - phonetic rules
export * from './pronunciation-guides';
export { pronunciationGuidesModule } from './pronunciation-guides';

// Common abbreviations - medical abbreviations
export * from './common-abbreviations';
export { commonAbbreviationsModule } from './common-abbreviations';

// Word building - medical word construction fundamentals
export * from './word-building';
export { wordBuildingModule } from './word-building';

// Medical terminology database - unified searchable database
export {
  MEDICAL_TERMINOLOGY_ENTRIES,
  searchMedicalTerms,
  filterByCategory,
  getTermById,
  getAllCategories,
  getTermCount,
} from './medical-terminology-database';
export type {
  TermCategory as DatabaseTermCategory,
  MedicalTermEntry,
} from './medical-terminology-database';

// All terminology content summary
export const medicalTerminologyContent = {
  category: 'medical-terminology',
  modules: [
    'root-words',
    'anatomical-terminology',
    'organ-system-terms',
    'procedure-terminology',
    'lab-test-terminology',
    'drug-terminology',
    'symptom-terminology',
    'diagnosis-terminology',
    'pronunciation-guides',
    'common-abbreviations',
    'word-building',
  ],
};
