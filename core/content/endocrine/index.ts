/**
 * Endocrine System Educational Content
 *
 * Comprehensive content covering:
 * - Anatomy: All major endocrine glands and tissues
 * - Physiology: Hormone mechanisms and regulatory axes
 * - Histology: Microscopic structure of endocrine tissues
 * - Pathology: Endocrine disorders and diseases
 * - Clinical: Diagnostic testing and examination
 *
 * NOTE: Content modules are planned for future implementation.
 * This file exports placeholder types until content is created.
 */

// Placeholder exports - content files to be implemented
export const ENDOCRINE_CONTENT_PLACEHOLDER = 'placeholder';

// Content categories for future implementation
export const ENDOCRINE_CATEGORIES = [
  'anatomy',
  'physiology',
  'histology',
  'pathology',
  'clinical',
] as const;

export type EndocrineCategory = (typeof ENDOCRINE_CATEGORIES)[number];
