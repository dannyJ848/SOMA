/**
 * Pituitary Disorders Content Index
 */

export { pituitaryAdenomas } from './pituitary-adenomas';
export { hypopituitarism } from './hypopituitarism';
export { diabetesInsipidus } from './diabetes-insipidus';
export { acromegaly } from './acromegaly';
export { prolactinoma } from './prolactinoma';

export const PITUITARY_CONTENT = {
  id: 'endocrinology-pituitary',
  name: 'Pituitary Disorders',
  description: 'Educational content covering pituitary adenomas, acromegaly, prolactinoma, hypopituitarism, and diabetes insipidus.',
  topics: [
    'pituitary-adenomas',
    'acromegaly',
    'prolactinoma',
    'hypopituitarism',
    'diabetes-insipidus',
  ],
};
