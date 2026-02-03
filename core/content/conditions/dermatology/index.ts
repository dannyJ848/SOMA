/**
 * Dermatology Conditions Index
 *
 * Comprehensive educational content for skin conditions
 */

export { acne } from './acne';
export { eczema } from './eczema';
export { psoriasis } from './psoriasis';

// Derm conditions database
export {
  DERM_CONDITIONS,
  getDermCondition,
  searchDermConditions,
  getDermByCategory,
  getDermConditionCount,
} from './derm-conditions-database';

export type { DermConditionEntry } from './derm-conditions-database';

import { acne } from './acne';
import { eczema } from './eczema';
import { psoriasis } from './psoriasis';

export const dermatologyConditions = [
  acne,
  eczema,
  psoriasis,
];

export default dermatologyConditions;
