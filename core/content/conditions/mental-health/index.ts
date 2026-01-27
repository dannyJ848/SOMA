/**
 * Mental Health Conditions Index
 *
 * Comprehensive educational content for psychiatric and psychological conditions
 */

export { majorDepression as depression } from './major-depression';
export { anxiety } from './anxiety';
export { bipolarDisorder as bipolar } from './bipolar';
export { schizophrenia } from './schizophrenia';
export { ptsd } from './ptsd';
export { ocd } from './ocd';
export { adhd } from './adhd';
export { eatingDisorders as eatingDisorders } from './eating-disorders';

import { majorDepression } from './major-depression';
import { anxiety } from './anxiety';
import { bipolarDisorder } from './bipolar';
import { schizophrenia } from './schizophrenia';
import { ptsd } from './ptsd';
import { ocd } from './ocd';
import { adhd } from './adhd';
import { eatingDisorders } from './eating-disorders';

export const mentalHealthConditions = [
  majorDepression,
  anxiety,
  bipolarDisorder,
  schizophrenia,
  ptsd,
  ocd,
  adhd,
  eatingDisorders,
];

export default mentalHealthConditions;
