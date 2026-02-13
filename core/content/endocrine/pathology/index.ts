/**
 * Endocrine System - Pathology Content Index
 *
 * Comprehensive pathological content covering disorders and diseases
 * of endocrine glands including etiology, pathophysiology, and clinical correlates.
 */

// Thyroid Pathology
export { THYROID_PATHOLOGY } from './thyroid-pathology';

// Adrenal Pathology
export { ADRENAL_PATHOLOGY } from './adrenal-pathology';

// Diabetes Pathology
export { DIABETES_PATHOLOGY } from './diabetes-pathology';

// Aggregate all pathology content
export const ENDOCRINE_PATHOLOGY_CONTENT = {
  thyroidPathology: 'THYROID_PATHOLOGY',
  adrenalPathology: 'ADRENAL_PATHOLOGY',
  diabetesPathology: 'DIABETES_PATHOLOGY',
} as const;
