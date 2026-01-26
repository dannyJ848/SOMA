/**
 * Musculoskeletal Conditions Index
 *
 * Comprehensive educational content for bone, joint, and muscle disorders
 */

export { osteoarthritis } from './osteoarthritis';
export { rheumatoidArthritis } from './rheumatoid-arthritis';

import { osteoarthritis } from './osteoarthritis';
import { rheumatoidArthritis } from './rheumatoid-arthritis';

export const musculoskeletalConditions = [
  osteoarthritis,
  rheumatoidArthritis,
];

export default musculoskeletalConditions;
