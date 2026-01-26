/**
 * Metabolic/Endocrine Conditions Index
 *
 * Comprehensive educational content for hormone and metabolism disorders
 */

export { type2Diabetes } from './type2-diabetes';
export { hypothyroidism } from './hypothyroidism';
export { obesity } from './obesity';

import { type2Diabetes } from './type2-diabetes';
import { hypothyroidism } from './hypothyroidism';
import { obesity } from './obesity';

export const metabolicConditions = [
  type2Diabetes,
  hypothyroidism,
  obesity,
];

export default metabolicConditions;
