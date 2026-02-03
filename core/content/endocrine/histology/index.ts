/**
 * Endocrine System - Histology Content Index
 *
 * Comprehensive histological content covering microscopic anatomy
 * of endocrine glands and tissues.
 */

// General Endocrine Histology
export { ENDOCRINE_HISTOLOGY } from './endocrine-histology';

// Thyroid Histology
export { THYROID_HISTOLOGY } from './thyroid-histology';

// Pancreatic Islet Histology
export { PANCREATIC_ISLETS_HISTOLOGY } from './pancreatic-islets';

// Aggregate all histology content
export const ENDOCRINE_HISTOLOGY_CONTENT = {
  endocrineHistology: 'ENDOCRINE_HISTOLOGY',
  thyroidHistology: 'THYROID_HISTOLOGY',
  pancreaticIsletsHistology: 'PANCREATIC_ISLETS_HISTOLOGY',
} as const;
