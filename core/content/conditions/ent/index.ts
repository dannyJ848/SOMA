/**
 * ENT Conditions Index
 *
 * Comprehensive educational content for ear, nose, and throat conditions
 */

export { otitisMedia } from './otitis-media';
export { sinusitis } from './sinusitis';
export { pharyngitis } from './pharyngitis';
export { tonsillitis } from './tonsillitis';
export { allergicRhinitis } from './allergic-rhinitis';
export { epistaxis } from './epistaxis';
export { vertigo } from './vertigo';
export { hoarseness } from './hoarseness';

// ENT Conditions Database (30+ conditions)
export {
  ENT_CONDITION_ENTRIES,
  type ENTConditionEntry,
  type ENTConditionCategory,
  getENTConditionById,
  getENTByCategory,
  getENTConditionCount,
  getAllENTConditionIds,
  searchENTConditions,
  getENTCategories,
} from './ent-conditions-database';

import { otitisMedia } from './otitis-media';
import { sinusitis } from './sinusitis';
import { pharyngitis } from './pharyngitis';
import { tonsillitis } from './tonsillitis';
import { allergicRhinitis } from './allergic-rhinitis';
import { epistaxis } from './epistaxis';
import { vertigo } from './vertigo';
import { hoarseness } from './hoarseness';

export const entConditions = [
  otitisMedia,
  sinusitis,
  pharyngitis,
  tonsillitis,
  allergicRhinitis,
  epistaxis,
  vertigo,
  hoarseness,
];

export default entConditions;
