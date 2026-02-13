/**
 * Endocrine System - Anatomy Content Index
 *
 * Comprehensive anatomical content covering all major endocrine glands and tissues.
 */

// Hypothalamic-Pituitary Unit
export { HYPOTHALAMUS_ANATOMY } from './hypothalamus';
export { PITUITARY_ANTERIOR_ANATOMY } from './pituitary-anterior';
export { PITUITARY_POSTERIOR_ANATOMY } from './pituitary-posterior';

// Thyroid and Parathyroid
export { THYROID_GLAND_ANATOMY } from './thyroid-gland';
export { PARATHYROID_GLANDS_ANATOMY } from './parathyroid-glands';

// Adrenal Glands
export { ADRENAL_CORTEX_ANATOMY } from './adrenal-cortex';
export { ADRENAL_MEDULLA_ANATOMY } from './adrenal-medulla';

// Pancreatic Endocrine
export { PANCREATIC_ISLETS_ANATOMY } from './pancreatic-islets';

// Pineal Gland
export { PINEAL_GLAND_ANATOMY } from './pineal-gland';

// Reproductive Endocrine
export { GONADS_ENDOCRINE_ANATOMY } from './gonads-endocrine';

// Diffuse Endocrine System
export { OTHER_ENDOCRINE_TISSUES_ANATOMY } from './other-endocrine-tissues';

// Aggregate all anatomy content
export const ENDOCRINE_ANATOMY_CONTENT = {
  hypothalamus: 'HYPOTHALAMUS_ANATOMY',
  pituitaryAnterior: 'PITUITARY_ANTERIOR_ANATOMY',
  pituitaryPosterior: 'PITUITARY_POSTERIOR_ANATOMY',
  thyroidGland: 'THYROID_GLAND_ANATOMY',
  parathyroidGlands: 'PARATHYROID_GLANDS_ANATOMY',
  adrenalCortex: 'ADRENAL_CORTEX_ANATOMY',
  adrenalMedulla: 'ADRENAL_MEDULLA_ANATOMY',
  pancreaticIslets: 'PANCREATIC_ISLETS_ANATOMY',
  pinealGland: 'PINEAL_GLAND_ANATOMY',
  gonads: 'GONADS_ENDOCRINE_ANATOMY',
  otherTissues: 'OTHER_ENDOCRINE_TISSUES_ANATOMY',
} as const;
