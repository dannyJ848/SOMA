/**
 * Infectious Disease Conditions Index
 *
 * Comprehensive educational content for infectious diseases
 */

export { cellulitis } from './cellulitis';
export { covid19 } from './covid-19';
export { hepatitisB } from './hepatitis-b';
export { hepatitisC } from './hepatitis-c';
export { hiv } from './hiv';
export { influenza } from './influenza';
export { meningitis } from './meningitis';
export { osteomyelitis } from './osteomyelitis';
export { sepsis } from './sepsis';
export { uti } from './uti';

// Infectious Conditions Database (structured database with search & filter utilities)
export {
  INFECTIOUS_CONDITIONS,
  searchInfectiousConditions,
  getInfectiousConditionsByCategory,
  getInfectiousConditionById,
  getInfectiousConditionCategoryCounts,
} from './infectious-conditions-database';
export type {
  InfectiousCondCategory,
  InfectiousConditionEntry,
} from './infectious-conditions-database';

import { cellulitis } from './cellulitis';
import { covid19 } from './covid-19';
import { hepatitisB } from './hepatitis-b';
import { hepatitisC } from './hepatitis-c';
import { hiv } from './hiv';
import { influenza } from './influenza';
import { meningitis } from './meningitis';
import { osteomyelitis } from './osteomyelitis';
import { sepsis } from './sepsis';
import { uti } from './uti';

export const infectiousConditions = [
  cellulitis,
  covid19,
  hepatitisB,
  hepatitisC,
  hiv,
  influenza,
  meningitis,
  osteomyelitis,
  sepsis,
  uti,
];

export default infectiousConditions;
