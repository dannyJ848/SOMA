/**
 * Dermatology Conditions Index
 *
 * Comprehensive educational content for skin conditions
 */

export { acne } from './acne';
export { eczema } from './eczema';
export { psoriasis } from './psoriasis';

import { acne } from './acne';
import { eczema } from './eczema';
import { psoriasis } from './psoriasis';

export const dermatologyConditions = [
  acne,
  eczema,
  psoriasis,
];

export default dermatologyConditions;
