/**
 * General Endocrine Content Index
 */

export { ENDOCRINE_HISTOLOGY_CONTENT } from './histology/index';
export { ENDOCRINE_CLINICAL_CONTENT } from './clinical/index';
export { ENDOCRINE_PATHOLOGY_CONTENT } from './pathology/index';

export const ENDOCRINE_GENERAL_CONTENT = {
  id: 'endocrine-general',
  name: 'General Endocrine Topics',
  description: 'Educational content covering clinical, histology, and pathology aspects of endocrinology.',
  categories: [
    'clinical',
    'histology',
    'pathology',
  ],
};
