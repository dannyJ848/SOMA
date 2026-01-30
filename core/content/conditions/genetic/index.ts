/**
 * Genetic Conditions - Educational Content Index
 */

export { cysticFibrosis } from './cystic-fibrosis';
export { sickleCell } from './sickle-cell';
export { huntington } from './huntington';
export { downSyndrome } from './down-syndrome';
export { turnerSyndrome } from './turner-syndrome';
export { klinefelter } from './klinefelter';
export { marfan } from './marfan';
export { neurofibromatosis } from './neurofibromatosis';

// Genetic Conditions Database
export {
  GENETIC_CONDITION_ENTRIES,
  getGeneticCondition,
  searchGeneticConditions,
  getGeneticByCategory,
  getGeneticByInheritance,
  getGeneticConditionCount,
  getGeneticByGene,
} from './genetic-conditions-database';
export type { GeneticConditionEntry, GeneticConditionCategory } from './genetic-conditions-database';
