/**
 * Gastrointestinal Conditions Index
 *
 * Comprehensive educational content for digestive system disorders
 */

export { gerd } from './gerd';
export { ibs } from './ibs';
export { ibd } from './ibd';
export { celiac } from './celiac';

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
