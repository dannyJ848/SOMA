/**
 * Neurological Conditions Index
 *
 * Comprehensive educational content for nervous system disorders
 */

export { stroke } from './stroke';
export { epilepsy } from './epilepsy';
export { migraine } from './migraine';
export { parkinsons } from './parkinsons';

import { stroke } from './stroke';
import { epilepsy } from './epilepsy';
import { migraine } from './migraine';
import { parkinsons } from './parkinsons';

export const neurologicalConditions = [
  stroke,
  epilepsy,
  migraine,
  parkinsons,
];

export default neurologicalConditions;

export {
  NEURO_CONDITIONS,
  NEURO_CATEGORY_LABELS,
  getNeuroByCategory,
  searchNeuroConditions,
  getNeuroConditionCount,
} from './neuro-conditions-database';
export type { NeuroConditionEntry, NeuroCategory } from './neuro-conditions-database';
