/**
 * Musculoskeletal Conditions Index
 *
 * Comprehensive educational content for bone, joint, and muscle disorders
 */

export { osteoarthritis } from './osteoarthritis';
export { rheumatoidArthritis } from './rheumatoid-arthritis';
export { osteoporosis } from './osteoporosis';
export { fibromyalgia } from './fibromyalgia';

// Musculoskeletal Conditions Database (30-entry structured reference)
export {
  MUSCULOSKELETAL_CONDITIONS,
  searchMusculoskeletalConditions,
  filterByMSKCategory,
  getMusculoskeletalCondition,
  getAvailableMSKCategories,
  getMSKCategoryCounts,
} from './musculoskeletal-conditions-database';
export type { MSKCategory, MusculoskeletalEntry } from './musculoskeletal-conditions-database';

import { osteoarthritis } from './osteoarthritis';
import { rheumatoidArthritis } from './rheumatoid-arthritis';
import { osteoporosis } from './osteoporosis';
import { fibromyalgia } from './fibromyalgia';

export const musculoskeletalConditions = [
  osteoarthritis,
  rheumatoidArthritis,
  osteoporosis,
  fibromyalgia,
];

export default musculoskeletalConditions;
