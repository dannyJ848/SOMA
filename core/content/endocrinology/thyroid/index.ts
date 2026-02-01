/**
 * Thyroid Disorders Content Index
 */

export { HYPOTHYROIDISM } from './hypothyroidism';
export { HYPERTHYROIDISM } from './hyperthyroidism';
export { thyroidNodules } from './thyroid-nodules';
export { thyroidCancer } from './thyroid-cancer';
export { thyroiditis } from './thyroiditis';

export const THYROID_CONTENT = {
  id: 'endocrinology-thyroid',
  name: 'Thyroid Disorders',
  description: 'Educational content covering hypothyroidism, hyperthyroidism, thyroid nodules, thyroid cancer, and thyroiditis.',
  topics: [
    'hypothyroidism',
    'hyperthyroidism',
    'thyroid-nodules',
    'thyroid-cancer',
    'thyroiditis',
  ],
};
