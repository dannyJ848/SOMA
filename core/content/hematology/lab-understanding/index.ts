/**
 * Lab Understanding Module Index
 *
 * Educational content covering:
 * - CBC Interpretation
 * - Coagulation Tests (PT, PTT, INR)
 * - Coagulation Studies
 * - Blood Smear Analysis
 * - Peripheral Smear
 */

// Core lab content
export { cbcInterpretation } from './cbc-interpretation';
export { coagulationTests } from './coagulation-tests';
export { coagulationStudies } from './coagulation-studies';
export { bloodSmear } from './blood-smear';
export { peripheralSmear } from './peripheral-smear';

// All lab understanding content
export const labUnderstandingContent = {
  category: 'lab-understanding',
  topics: [
    'cbc-interpretation',
    'coagulation-tests',
    'coagulation-studies',
    'blood-smear',
    'peripheral-smear',
  ],
};

export default labUnderstandingContent;
