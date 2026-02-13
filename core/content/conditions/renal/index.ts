/**
 * Renal Conditions Index
 *
 * Comprehensive educational content for kidney disorders
 */

export { acidBaseDisorders } from './acid-base-disorders';
export { aki } from './aki';
export { chronicKidneyDisease } from './chronic-kidney-disease';
export { ckd } from './ckd';
export { electrolyteDisorders } from './electrolyte-disorders';
export { glomerulonephritis } from './glomerulonephritis';
export { kidneyStones } from './kidney-stones';
export { nephriticSyndrome } from './nephritic-syndrome';
export { nephroticSyndrome } from './nephrotic-syndrome';
export { polycysticKidneyDisease } from './polycystic-kidney';

// Renal Conditions Database
export {
  RENAL_CONDITIONS,
  getRenalConditionById,
  searchRenalConditions,
  getRenalByCategory,
  getAllRenalConditionIds,
} from './renal-conditions-database';
export type { RenalConditionEntry, RenalCategory } from './renal-conditions-database';

import { acidBaseDisorders } from './acid-base-disorders';
import { aki } from './aki';
import { chronicKidneyDisease } from './chronic-kidney-disease';
import { ckd } from './ckd';
import { electrolyteDisorders } from './electrolyte-disorders';
import { glomerulonephritis } from './glomerulonephritis';
import { kidneyStones } from './kidney-stones';
import { nephriticSyndrome } from './nephritic-syndrome';
import { nephroticSyndrome } from './nephrotic-syndrome';
import { polycysticKidneyDisease } from './polycystic-kidney';

export const renalConditions = [
  acidBaseDisorders,
  aki,
  chronicKidneyDisease,
  ckd,
  electrolyteDisorders,
  glomerulonephritis,
  kidneyStones,
  nephriticSyndrome,
  nephroticSyndrome,
  polycysticKidneyDisease,
];

export default renalConditions;
