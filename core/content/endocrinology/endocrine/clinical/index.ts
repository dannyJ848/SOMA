/**
 * Endocrine Clinical Content Index
 */

export { hormoneTesting } from './hormone-testing.js';
export { endocrineEmergencies } from './endocrine-emergencies.js';

export const ENDOCRINE_CLINICAL_CONTENT = {
  id: 'endocrine-clinical',
  name: 'Clinical Endocrinology',
  description: 'Educational content covering hormone testing and endocrine emergencies.',
  topics: [
    'hormone-testing',
    'endocrine-emergencies',
  ],
};
