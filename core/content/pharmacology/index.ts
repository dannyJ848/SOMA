/**
 * Pharmacology Content Module
 *
 * Re-exports all pharmacology content including drug classes database,
 * pharmacokinetics database, and associated utility functions.
 */

export {
  DRUG_CLASSES,
  getDrugClass,
  searchDrugClasses,
  getDrugClassesByCategory,
  getDrugClassCount,
} from './drug-classes';

export type { DrugClassEntry } from './drug-classes';

export {
  PHARMACOKINETIC_ENTRIES,
  getPKEntry,
  searchPKEntries,
  getPKEntriesByCategory,
  getNarrowTherapeuticIndexDrugs,
  getRenalAdjustedDrugs,
  getHepaticAdjustedDrugs,
  getDrugsWithActiveMetabolites,
  getProdrugs,
  getPKEntryCount,
} from './pharmacokinetics-database';

export type { PharmacokineticEntry, PKCategory } from './pharmacokinetics-database';

export {
  DRUG_INTERACTION_ENTRIES,
  getDrugInteraction,
  searchDrugInteractions,
  getInteractionsForDrug,
  getInteractionsByCategory,
  getInteractionsBySeverity,
  getDrugInteractionCount,
  checkInteraction,
} from './drug-interactions-database';

export type { DrugInteractionEntry, InteractionCategory } from './drug-interactions-database';
