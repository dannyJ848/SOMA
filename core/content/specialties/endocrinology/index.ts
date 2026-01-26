/**
 * Endocrinology Specialty Content
 *
 * Comprehensive physician-level educational content covering all major
 * endocrine disorders, organized for multi-level patient education.
 *
 * Content areas:
 * - Diabetes Mellitus (Type 1, Type 2, Gestational)
 * - Thyroid Disorders (Hypo/Hyperthyroidism, Nodules, Cancer)
 * - Adrenal Disorders (Addison's, Cushing's, Pheochromocytoma)
 * - Pituitary Disorders (Adenomas, Hypopituitarism)
 * - Calcium Disorders and Bone Metabolism
 * - Polycystic Ovary Syndrome (PCOS)
 * - Obesity and Metabolic Syndrome
 * - Hormone Replacement Therapy
 * - Endocrine Emergencies (DKA, Thyroid Storm, Adrenal Crisis)
 * - Insulin and Diabetes Medications
 */

// Diabetes Content
export * from './diabetes/type-1-diabetes';
export * from './diabetes/type-2-diabetes';
export * from './diabetes/gestational-diabetes';
export * from './diabetes/diabetes-complications';

// Thyroid Content
export * from './thyroid/hypothyroidism';
export * from './thyroid/hyperthyroidism';
export * from './thyroid/thyroid-nodules';
export * from './thyroid/thyroid-cancer';

// Adrenal Content
export * from './adrenal/addisons-disease';
export * from './adrenal/cushings-syndrome';
export * from './adrenal/pheochromocytoma';
export * from './adrenal/adrenal-incidentaloma';

// Pituitary Content
export * from './pituitary/pituitary-adenomas';
export * from './pituitary/hypopituitarism';
export * from './pituitary/acromegaly';
export * from './pituitary/prolactinoma';

// Calcium and Bone Content
export * from './calcium-bone/hyperparathyroidism';
export * from './calcium-bone/hypoparathyroidism';
export * from './calcium-bone/osteoporosis';
export * from './calcium-bone/vitamin-d-disorders';

// PCOS Content
export * from './pcos/pcos-overview';
export * from './pcos/pcos-management';

// Obesity and Metabolic Syndrome
export * from './obesity-metabolic/obesity';
export * from './obesity-metabolic/metabolic-syndrome';

// Hormone Replacement Therapy
export * from './hormone-replacement/menopause-hrt';
export * from './hormone-replacement/testosterone-replacement';
export * from './hormone-replacement/thyroid-replacement';

// Endocrine Emergencies
export * from './emergencies/diabetic-ketoacidosis';
export * from './emergencies/hyperosmolar-state';
export * from './emergencies/thyroid-storm';
export * from './emergencies/myxedema-coma';
export * from './emergencies/adrenal-crisis';
export * from './emergencies/hypoglycemia';

// Diabetes Medications
export * from './medications/insulin-types';
export * from './medications/oral-diabetes-medications';
export * from './medications/injectable-non-insulin';

// Content registry
export const ENDOCRINOLOGY_CONTENT_CATEGORIES = [
  'diabetes',
  'thyroid',
  'adrenal',
  'pituitary',
  'calcium-bone',
  'pcos',
  'obesity-metabolic',
  'hormone-replacement',
  'emergencies',
  'medications',
] as const;

export type EndocrinologyCategory = (typeof ENDOCRINOLOGY_CONTENT_CATEGORIES)[number];
