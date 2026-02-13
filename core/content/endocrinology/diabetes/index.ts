/**
 * Diabetes Content Index
 *
 * Educational content covering Type 1, Type 2, and DKA management.
 */

export { TYPE_1_DIABETES_PATIENT_ED } from './type-1-diabetes';
export { TYPE_2_DIABETES_PATIENT_ED } from './type-2-diabetes';
export { dkaManagement } from './dka-management';

export const DIABETES_CONTENT = {
  id: 'endocrinology-diabetes',
  name: 'Diabetes Mellitus',
  description: 'Educational content covering Type 1 diabetes, Type 2 diabetes, and diabetic ketoacidosis management.',
  topics: [
    'type-1-diabetes',
    'type-2-diabetes',
    'dka-management',
  ],
};
