/**
 * Endocrine Histology Content Index
 */

export { thyroidHistology } from './thyroid-histology';
export { adrenalHistology } from './adrenal-histology';

export const ENDOCRINE_HISTOLOGY_CONTENT = {
  id: 'endocrine-histology',
  name: 'Endocrine Histology',
  description: 'Educational content covering thyroid and adrenal histology.',
  topics: [
    'thyroid-histology',
    'adrenal-histology',
  ],
};
