/**
 * Endocrine Histology Content Index
 */

export { thyroidHistology } from './thyroid-histology.js';
export { adrenalHistology } from './adrenal-histology.js';

export const ENDOCRINE_HISTOLOGY_CONTENT = {
  id: 'endocrine-histology',
  name: 'Endocrine Histology',
  description: 'Educational content covering thyroid and adrenal histology.',
  topics: [
    'thyroid-histology',
    'adrenal-histology',
  ],
};
