/**
 * Gastrointestinal Conditions Index
 *
 * Comprehensive educational content for digestive system disorders
 */

export { gerd } from './gerd';
export { ibs } from './ibs';
export { ibd } from './ibd';
export { celiac } from './celiac';
export { celiacDisease } from './celiac-disease';
export { diverticulitis } from './diverticulitis';
export { pancreatitis } from './pancreatitis';
export { cirrhosis } from './cirrhosis';
export { viralHepatitis } from './hepatitis';

export {
  GI_CONDITIONS,
  GI_CATEGORY_LABELS,
  getGIConditionsByCategory,
  searchGIConditions,
} from './gi-conditions-database';
export type { GIConditionEntry } from './gi-conditions-database';

import { gerd } from './gerd';
import { ibs } from './ibs';
import { ibd } from './ibd';
import { celiac } from './celiac';

export const gastrointestinalConditions = [
  gerd,
  ibs,
  ibd,
  celiac,
];

export default gastrointestinalConditions;
