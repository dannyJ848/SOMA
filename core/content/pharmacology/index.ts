/**
 * Pharmacology Content Module
 *
 * Re-exports all pharmacology content including drug classes database
 * and associated utility functions.
 */

export {
  DRUG_CLASSES,
  getDrugClass,
  searchDrugClasses,
  getDrugClassesByCategory,
  getDrugClassCount,
} from './drug-classes';

export type { DrugClassEntry } from './drug-classes';
