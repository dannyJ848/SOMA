/**
 * Adrenal Endocrinology Content Index
 */

export { cushingSyndrome } from './cushing-syndrome.js';
export { addisonDisease } from './addison-disease.js';
export { pheochromocytoma } from './pheochromocytoma.js';

export const ADRENAL_CONTENT = {
  id: 'endocrinology-adrenal',
  name: 'Adrenal Gland Disorders',
  description: 'Educational content covering adrenal cortex and medulla disorders including Cushing syndrome, Addison disease, and pheochromocytoma.',
  topics: [
    'cushing-syndrome',
    'addison-disease', 
    'pheochromocytoma',
  ],
};
