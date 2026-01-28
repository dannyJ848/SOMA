/**
 * Pituitary Disorders Content Index
 */

export { pituitaryAdenomas } from './pituitary-adenomas.js';
export { hypopituitarism } from './hypopituitarism.js';
export { diabetesInsipidus } from './diabetes-insipidus.js';

export const PITUITARY_CONTENT = {
  id: 'endocrinology-pituitary',
  name: 'Pituitary Disorders',
  description: 'Educational content covering pituitary adenomas, hypopituitarism, and diabetes insipidus.',
  topics: [
    'pituitary-adenomas',
    'hypopituitarism',
    'diabetes-insipidus',
  ],
};
