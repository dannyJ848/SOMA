/**
 * Musculoskeletal Conditions Index
 *
 * Comprehensive educational content for bone, joint, and muscle disorders
 */

export { osteoarthritis } from './osteoarthritis';
export { rheumatoidArthritis } from './rheumatoid-arthritis';
export { osteoporosis } from './osteoporosis';
export { fibromyalgia } from './fibromyalgia';

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
