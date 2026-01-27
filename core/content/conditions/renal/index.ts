/**
 * Renal Conditions Index
 *
 * Comprehensive educational content for kidney diseases and electrolyte disorders
 */

export { ckd } from './ckd';
export { kidneyStones } from './kidney-stones';
export { aki } from './aki';
export { nephroticSyndrome } from './nephrotic-syndrome';
export { nephriticSyndrome } from './nephritic-syndrome';
export { polycysticKidneyDisease } from './polycystic-kidney';
export { glomerulonephritis } from './glomerulonephritis';
export { electrolyteDisorders } from './electrolyte-disorders';
export { acidBaseDisorders } from './acid-base-disorders';

import { ckd } from './ckd';
import { kidneyStones } from './kidney-stones';
import { aki } from './aki';
import { nephroticSyndrome } from './nephrotic-syndrome';
import { nephriticSyndrome } from './nephritic-syndrome';
import { polycysticKidneyDisease } from './polycystic-kidney';
import { glomerulonephritis } from './glomerulonephritis';
import { electrolyteDisorders } from './electrolyte-disorders';
import { acidBaseDisorders } from './acid-base-disorders';

export const renalConditions = [
  ckd,
  kidneyStones,
  aki,
  nephroticSyndrome,
  nephriticSyndrome,
  polycysticKidneyDisease,
  glomerulonephritis,
  electrolyteDisorders,
  acidBaseDisorders,
];

export default renalConditions;
