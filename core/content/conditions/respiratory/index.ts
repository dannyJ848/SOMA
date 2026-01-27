/**
 * Respiratory Conditions Index
 *
 * Comprehensive educational content for lung and airway diseases
 */

export { asthma } from './asthma';
export { copd } from './copd';
export { pneumonia } from './pneumonia';
export { bronchitis } from './bronchitis';
export { pulmonaryFibrosis } from './pulmonary-fibrosis';
export { sleepApnea } from './sleep-apnea';
export { lungCancer } from './lung-cancer';

import { asthma } from './asthma';
import { copd } from './copd';
import { pneumonia } from './pneumonia';
import { bronchitis } from './bronchitis';
import { pulmonaryFibrosis } from './pulmonary-fibrosis';
import { sleepApnea } from './sleep-apnea';
import { lungCancer } from './lung-cancer';

export const respiratoryConditions = [
  asthma,
  copd,
  pneumonia,
  bronchitis,
  pulmonaryFibrosis,
  sleepApnea,
  lungCancer,
];

export default respiratoryConditions;
