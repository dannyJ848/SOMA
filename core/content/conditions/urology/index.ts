/**
 * Urology Conditions - Content Exports
 */

import { kidneyStones } from './kidney-stones';
import { bph } from './bph';
import { prostatitis } from './prostatitis';
import { uti } from './uti';
import { urinaryIncontinence } from './urinary-incontinence';
import { erectileDysfunction } from './erectile-dysfunction';
import { hematuria } from './hematuria';
import { interstitialCystitis } from './interstitial-cystitis';

export { kidneyStones } from './kidney-stones';
export { bph } from './bph';
export { prostatitis } from './prostatitis';
export { uti } from './uti';
export { urinaryIncontinence } from './urinary-incontinence';
export { erectileDysfunction } from './erectile-dysfunction';
export { hematuria } from './hematuria';
export { interstitialCystitis } from './interstitial-cystitis';

// Comprehensive urology conditions database
export {
  UROLOGIC_CONDITIONS,
  getUrologicConditionById,
  searchUrologicConditions,
  getUrologicConditionsByCategory,
  getUrologicConditionCount,
  getAllUrologicConditions,
} from './urology-conditions-database';
export type { UrologicConditionEntry, UrologicCategory } from './urology-conditions-database';

export default {
  kidneyStones,
  bph,
  prostatitis,
  uti,
  urinaryIncontinence,
  erectileDysfunction,
  hematuria,
  interstitialCystitis,
};
