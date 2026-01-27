/**
 * Infectious Disease Conditions Index
 *
 * Comprehensive educational content for bacterial, viral, and other infections
 */

export { uti } from './uti';
export { sepsis } from './sepsis';
export { hiv } from './hiv';
export { hepatitisB } from './hepatitis-b';
export { hepatitisC } from './hepatitis-c';
export { influenza } from './influenza';
export { covid19 } from './covid-19';
export { cellulitis } from './cellulitis';
export { osteomyelitis } from './osteomyelitis';

import { uti } from './uti';
import { sepsis } from './sepsis';
import { hiv } from './hiv';
import { hepatitisB } from './hepatitis-b';
import { hepatitisC } from './hepatitis-c';
import { influenza } from './influenza';
import { covid19 } from './covid-19';
import { cellulitis } from './cellulitis';
import { osteomyelitis } from './osteomyelitis';

export const infectiousConditions = [
  uti,
  sepsis,
  hiv,
  hepatitisB,
  hepatitisC,
  influenza,
  covid19,
  cellulitis,
  osteomyelitis,
];

export default infectiousConditions;
