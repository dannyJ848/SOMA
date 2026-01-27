/**
 * Metabolic/Endocrine Conditions Index
 *
 * Comprehensive educational content for hormone and metabolism disorders
 */

export { type2Diabetes } from './type2-diabetes';
export { metabolicSyndrome } from './metabolic-syndrome';
export { obesity } from './obesity';
export { hypothyroidism } from './hypothyroidism';
export { hyperthyroidism } from './hyperthyroidism';
export { thyroidNodules } from './thyroid-nodules';
export { adrenalInsufficiency } from './adrenal-insufficiency';
export { pheochromocytoma } from './pheochromocytoma';

import { type2Diabetes } from './type2-diabetes';
import { metabolicSyndrome } from './metabolic-syndrome';
import { obesity } from './obesity';
import { hypothyroidism } from './hypothyroidism';
import { hyperthyroidism } from './hyperthyroidism';
import { thyroidNodules } from './thyroid-nodules';
import { adrenalInsufficiency } from './adrenal-insufficiency';
import { pheochromocytoma } from './pheochromocytoma';

export const metabolicConditions = [
  type2Diabetes,
  metabolicSyndrome,
  obesity,
  hypothyroidism,
  hyperthyroidism,
  thyroidNodules,
  adrenalInsufficiency,
  pheochromocytoma,
];

export default metabolicConditions;
