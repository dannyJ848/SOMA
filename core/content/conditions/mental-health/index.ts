/**
 * Mental Health Conditions Index
 *
 * Comprehensive educational content for psychiatric disorders
 */

export { adhd } from './adhd';
export { anxiety } from './anxiety';
export { bipolarDisorder } from './bipolar';
export { eatingDisorders } from './eating-disorders';
export { majorDepression } from './major-depression';
export { ocd } from './ocd';
export { ptsd } from './ptsd';
export { schizophrenia } from './schizophrenia';

// Mental Health Conditions Database
export {
  MENTAL_HEALTH_CONDITIONS,
  searchMentalHealthConditions,
  filterByCategory,
  getMentalHealthCondition,
  getMentalHealthCategoryStats,
  getAllMentalHealthConditionIds,
} from './mental-health-conditions-database';
export type { MentalHealthCategory, MentalHealthEntry } from './mental-health-conditions-database';

import { adhd } from './adhd';
import { anxiety } from './anxiety';
import { bipolarDisorder } from './bipolar';
import { eatingDisorders } from './eating-disorders';
import { majorDepression } from './major-depression';
import { ocd } from './ocd';
import { ptsd } from './ptsd';
import { schizophrenia } from './schizophrenia';

export const mentalHealthConditions = [
  adhd,
  anxiety,
  bipolarDisorder,
  eatingDisorders,
  majorDepression,
  ocd,
  ptsd,
  schizophrenia,
];

export default mentalHealthConditions;
