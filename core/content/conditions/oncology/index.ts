/**
 * Oncology Conditions Index
 *
 * Comprehensive educational content for cancer and malignant diseases
 */

export { breastCancer } from './breast-cancer';
export { lungCancer } from './lung-cancer-oncology';
export { colorectalCancer } from './colorectal-cancer';
export { prostateCancer } from './prostate-cancer';
export { melanoma } from './melanoma';
export { lymphoma } from './lymphoma';
export { leukemia } from './leukemia';
export { pancreaticCancer } from './pancreatic-cancer';

import { breastCancer } from './breast-cancer';
import { lungCancer } from './lung-cancer-oncology';
import { colorectalCancer } from './colorectal-cancer';
import { prostateCancer } from './prostate-cancer';
import { melanoma } from './melanoma';
import { lymphoma } from './lymphoma';
import { leukemia } from './leukemia';
import { pancreaticCancer } from './pancreatic-cancer';

export const oncologyConditions = [
  breastCancer,
  lungCancer,
  colorectalCancer,
  prostateCancer,
  melanoma,
  lymphoma,
  leukemia,
  pancreaticCancer,
];

export default oncologyConditions;
