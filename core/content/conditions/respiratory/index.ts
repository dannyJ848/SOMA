/**
 * Respiratory Conditions Index
 *
 * Comprehensive educational content for lung and airway diseases
 */

export { asthma } from './asthma';
export { copd } from './copd';
export { pneumonia } from './pneumonia';

import { asthma } from './asthma';
import { copd } from './copd';
import { pneumonia } from './pneumonia';

export const respiratoryConditions = [
  asthma,
  copd,
  pneumonia,
];

export default respiratoryConditions;
