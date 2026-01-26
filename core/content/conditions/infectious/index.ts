/**
 * Infectious Disease Conditions Index
 *
 * Comprehensive educational content for bacterial, viral, and other infections
 */

export { uti } from './uti';
export { sepsis } from './sepsis';

import { uti } from './uti';
import { sepsis } from './sepsis';

export const infectiousConditions = [
  uti,
  sepsis,
];

export default infectiousConditions;
