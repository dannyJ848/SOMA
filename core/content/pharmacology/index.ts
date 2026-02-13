/**
 * Pharmacology Content Module | Modulo de Contenido de Farmacologia
 *
 * Re-exports all pharmacology content including drug classes database,
 * pharmacokinetics database, educational content modules, and associated
 * utility functions. Spanish-first with English translations.
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

export {
  MECHANISMS_EXPLAINED,
  getMechanismExplained,
  searchMechanisms,
  getAllMechanisms,
  getMechanismCount,
} from './mechanisms-explained';

export type { MechanismExplained } from './mechanisms-explained';

// ─── Educational Content Modules (Spanish-first with English translations) ───

// Antibioticos | Antibiotics
export { antibioticosAntibiotics } from './antibioticos-antibiotics';

// Analgesicos | Analgesics
export { analgesicosAnalgesics } from './analgesicos-analgesics';

// Antihipertensivos | Antihypertensives
export { antihipertensivosAntihypertensives } from './antihipertensivos-antihypertensives';

// Anticoagulantes | Anticoagulants
export { anticoagulantesAnticoagulants } from './anticoagulantes-anticoagulants';

// Psicofarmacologia | Psychopharmacology
export { psicofarmacologiaPsychopharmacology } from './psicofarmacologia-psychopharmacology';

// ─── Drug Basics — Pharmacokinetics & Pharmacodynamics educational content ───
export {
  admeOverview,
  bioavailability,
  halfLife,
  steadyState,
  firstPassMetabolism,
  volumeOfDistribution,
  clearance,
  doseResponse,
  therapeuticIndex,
  agonistsAntagonists,
  potencyVsEfficacy,
} from './drug-basics';
