/**
 * Oncology Conditions Index
 *
 * Comprehensive educational content for cancer and malignant diseases
 */

export { breastCancer } from './breast-cancer';
export { lungCancer } from './lung-cancer';

import { breastCancer } from './breast-cancer';
import { lungCancer } from './lung-cancer';

export const oncologyConditions = [
  breastCancer,
  lungCancer,
];

export default oncologyConditions;
