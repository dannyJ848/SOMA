/**
 * Respiratory Conditions Index
 *
 * Comprehensive educational content for lung and airway diseases
 */

export { asthma } from './asthma';
export { copd } from './copd';
export { pneumonia } from './pneumonia';
export { pulmonaryFibrosis } from './pulmonary-fibrosis';

import { asthma } from './asthma';
import { copd } from './copd';
import { pneumonia } from './pneumonia';
import { pulmonaryFibrosis } from './pulmonary-fibrosis';

export const respiratoryConditions = [
  asthma,
  copd,
  pneumonia,
  pulmonaryFibrosis,
];

export default respiratoryConditions;
