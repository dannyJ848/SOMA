/**
 * Neurological Conditions Index
 *
 * Comprehensive educational content for brain and nervous system disorders
 */

export { stroke } from './stroke';
export { migraine } from './migraine';
export { tensionHeadache } from './tension-headache';
export { clusterHeadache } from './cluster-headache';
export { neuropathy } from './neuropathy';
export { multipleSclerosis } from './multiple-sclerosis';
export { parkinsons } from './parkinsons';
export { als } from './als';
export { myastheniaGravis } from './myasthenia-gravis';

import { stroke } from './stroke';
import { migraine } from './migraine';
import { tensionHeadache } from './tension-headache';
import { clusterHeadache } from './cluster-headache';
import { neuropathy } from './neuropathy';
import { multipleSclerosis } from './multiple-sclerosis';
import { parkinsons } from './parkinsons';
import { als } from './als';
import { myastheniaGravis } from './myasthenia-gravis';

export const neurologicalConditions = [
  stroke,
  migraine,
  tensionHeadache,
  clusterHeadache,
  neuropathy,
  multipleSclerosis,
  parkinsons,
  als,
  myastheniaGravis,
];

export default neurologicalConditions;
