/**
 * Endocrine Clinical Content Index
 */

export { hormoneTesting } from './hormone-testing';
export { endocrineEmergencies } from './endocrine-emergencies';

export const ENDOCRINE_CLINICAL_CONTENT = {
  id: 'endocrine-clinical',
  name: 'Clinical Endocrinology',
  description: 'Educational content covering hormone testing and endocrine emergencies.',
  topics: [
    'hormone-testing',
    'endocrine-emergencies',
  ],
};
