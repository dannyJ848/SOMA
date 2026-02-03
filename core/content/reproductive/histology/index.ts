/**
 * Reproductive System Histology Content
 *
 * Exports all histology content modules for the reproductive system
 * including ovarian, testicular, and uterine tissue histology.
 */

// Histology content imports
import { ovaryHistology } from './ovary-histology';
import { testisHistology } from './testis-histology';
import { uterusHistology } from './uterus-histology';
import { ovarianTissue } from './ovarian-tissue';
import { testicularTissue } from './testicular-tissue';

// Named exports
export { ovaryHistology } from './ovary-histology';
export { testisHistology } from './testis-histology';
export { uterusHistology } from './uterus-histology';
export { ovarianTissue } from './ovarian-tissue';
export { testicularTissue } from './testicular-tissue';

// Default export object with all histology content
export default {
  ovaryHistology,
  testisHistology,
  uterusHistology,
  ovarianTissue,
  testicularTissue,
};
