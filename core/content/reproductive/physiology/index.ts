/**
 * Reproductive System Physiology Content
 *
 * Exports all physiology content modules for the reproductive system
 * including menstrual cycle, spermatogenesis, reproductive hormones,
 * fertility, and pregnancy physiology.
 */

// Physiology content imports
import { menstrualCycleContent } from './menstrual-cycle';
import { spermatogenesis } from './spermatogenesis';
import { reproductiveHormonesContent } from './reproductive-hormones';
import { fertilityContent } from './fertility';
import { pregnancyPhysiology } from './pregnancy-physiology';

// Named exports
export { menstrualCycleContent } from './menstrual-cycle';
export { spermatogenesis } from './spermatogenesis';
export { reproductiveHormonesContent } from './reproductive-hormones';
export { fertilityContent } from './fertility';
export { pregnancyPhysiology } from './pregnancy-physiology';

// Default export object with all physiology content
export default {
  menstrualCycle: menstrualCycleContent,
  spermatogenesis,
  reproductiveHormones: reproductiveHormonesContent,
  fertility: fertilityContent,
  pregnancyPhysiology,
};
