/**
 * Pediatric Conditions - Index
 *
 * Exports all pediatric condition educational content.
 */

export { kawasaki } from './kawasaki';
export { rheumaticFever } from './rheumatic-fever';
export { henochSchonlein } from './henoch-schonlein';
export { intussusception } from './intussusception';
export { appendicitis } from './appendicitis';
export { bronchiolitis } from './bronchiolitis';
export { croup } from './croup';
export { febrileSeizures } from './febrile-seizures';

// Pediatric Conditions Database
export {
  PEDIATRIC_CONDITIONS,
  getPediatricCondition,
  searchPediatricConditions,
  getPediatricByAgeGroup,
  getPediatricByCategory,
  getPediatricConditionCount,
} from './pediatric-conditions-database';
export type { PediatricConditionEntry } from './pediatric-conditions-database';
