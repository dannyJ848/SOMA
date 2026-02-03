/**
 * Respiratory Pathology Index
 *
 * Pathological features of respiratory diseases including pneumonia,
 * COPD, pulmonary fibrosis, and lung cancer.
 */

export { pneumoniaPathologyContent as pneumoniaPathology } from './pneumonia-pathology';
export { copdPathologyContent as copdPathology } from './copd-pathology';
export { pulmonaryFibrosisPathologyContent as pulmonaryFibrosisPathology } from './pulmonary-fibrosis';
export { lungCancerPathologyContent as lungCancerPathology } from './lung-cancer-pathology';

import { pneumoniaPathologyContent } from './pneumonia-pathology';
import { copdPathologyContent } from './copd-pathology';
import { pulmonaryFibrosisPathologyContent } from './pulmonary-fibrosis';
import { lungCancerPathologyContent } from './lung-cancer-pathology';

export const respiratoryPathology = [
  pneumoniaPathologyContent,
  copdPathologyContent,
  pulmonaryFibrosisPathologyContent,
  lungCancerPathologyContent,
];

export default respiratoryPathology;
