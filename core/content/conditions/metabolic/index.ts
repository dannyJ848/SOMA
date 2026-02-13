/**
 * Metabolic Conditions Index
 *
 * Comprehensive educational content for metabolic and endocrine disorders
 */

export { diabetes } from './diabetes';
export { metabolicSyndrome } from './metabolic-syndrome';
export { thyroidDisorders } from './thyroid-disorders';
export { adrenalDisorders } from './adrenal-disorders';

// Metabolic conditions database
export {
  METABOLIC_CONDITIONS,
  getMetabolicConditionById,
  searchMetabolicConditions,
} from './metabolic-conditions-database';
export type { MetabolicCategory, MetabolicConditionEntry } from './metabolic-conditions-database';

import { diabetes } from './diabetes';
import { metabolicSyndrome } from './metabolic-syndrome';
import { thyroidDisorders } from './thyroid-disorders';
import { adrenalDisorders } from './adrenal-disorders';

export const metabolicConditions = [
  diabetes,
  metabolicSyndrome,
  thyroidDisorders,
  adrenalDisorders,
];

export default metabolicConditions;
