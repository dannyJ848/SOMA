/**
 * Oncology Conditions Index
 *
 * Comprehensive educational content for cancer types
 */

export { breastCancer } from './breast-cancer';
export { colorectalCancer } from './colorectal-cancer';
export { leukemia } from './leukemia';
export { lungCancer } from './lung-cancer-oncology';
export { lymphoma } from './lymphoma';
export { melanoma } from './melanoma';
export { pancreaticCancer } from './pancreatic-cancer';
export { prostateCancer } from './prostate-cancer';

import { breastCancer } from './breast-cancer';
import { colorectalCancer } from './colorectal-cancer';
import { leukemia } from './leukemia';
import { lungCancer } from './lung-cancer-oncology';
import { lymphoma } from './lymphoma';
import { melanoma } from './melanoma';
import { pancreaticCancer } from './pancreatic-cancer';
import { prostateCancer } from './prostate-cancer';

export const oncologyConditions = [
  breastCancer,
  colorectalCancer,
  leukemia,
  lungCancer,
  lymphoma,
  melanoma,
  pancreaticCancer,
  prostateCancer,
];

export default oncologyConditions;
