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
  getDermConditionById,
  searchDermConditions,
  getDermConditionsByCategory,
  getAllDermConditionIds,
} from './derm-conditions-database';

export type { DermConditionEntry, DermCategory } from './derm-conditions-database';

import { acne } from './acne';
import { eczema } from './eczema';
import { psoriasis } from './psoriasis';

export const dermatologyConditions = [
  acne,
  eczema,
  psoriasis,
];

export default dermatologyConditions;
