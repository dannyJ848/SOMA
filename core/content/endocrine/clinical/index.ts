/**
 * Endocrine System - Clinical Content Index
 *
 * Comprehensive clinical content covering diagnostic testing, assessment,
 * and laboratory evaluation of endocrine disorders.
 */

// Clinical Assessment
export { ENDOCRINE_CLINICAL_ASSESSMENT } from './endocrine-clinical-assessment';

// Hormone Testing
export { HORMONE_TESTING } from './hormone-testing';

// Thyroid Function Tests
export { THYROID_FUNCTION_TESTS } from './thyroid-function-tests';

// Adrenal Function Tests
export { ADRENAL_FUNCTION_TESTS } from './adrenal-function-tests';

// Aggregate all clinical content
export const ENDOCRINE_CLINICAL_CONTENT = {
  clinicalAssessment: 'ENDOCRINE_CLINICAL_ASSESSMENT',
  hormoneTesting: 'HORMONE_TESTING',
  thyroidFunctionTests: 'THYROID_FUNCTION_TESTS',
  adrenalFunctionTests: 'ADRENAL_FUNCTION_TESTS',
} as const;
