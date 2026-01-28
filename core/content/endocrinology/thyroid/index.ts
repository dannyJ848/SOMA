/**
 * Thyroid Disorders Content Index
 */

export { thyroidNodules } from './thyroid-nodules.js';
export { thyroidCancer } from './thyroid-cancer.js';
export { thyroiditis } from './thyroiditis.js';

export const THYROID_CONTENT = {
  id: 'endocrinology-thyroid',
  name: 'Thyroid Disorders',
  description: 'Educational content covering thyroid nodules, thyroid cancer, and thyroiditis.',
  topics: [
    'thyroid-nodules',
    'thyroid-cancer',
    'thyroiditis',
  ],
};
