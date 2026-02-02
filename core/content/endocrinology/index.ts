/**
 * Endocrinology Content Module Index
 * 
 * Comprehensive educational content covering endocrine disorders including:
 * - Adrenal disorders (Cushing, Addison, pheochromocytoma)
 * - Bone and calcium metabolism (osteoporosis, hyperparathyroidism, vitamin D)
 * - Metabolic disorders (metabolic syndrome, obesity)
 * - Pituitary disorders (adenomas, hypopituitarism, diabetes insipidus)
 * - Reproductive hormones (PCOS, hirsutism, infertility)
 * - Thyroid disorders (nodules, cancer, thyroiditis)
 * - Clinical endocrinology (hormone testing, emergencies)
 * - Histology (thyroid, adrenal)
 * - Pathology (autoimmune, neoplasia)
 */

// Adrenal disorders
export { ADRENAL_CONTENT } from './adrenal/index';
export { cushingSyndrome } from './adrenal/cushing-syndrome';
export { addisonDisease } from './adrenal/addison-disease';
export { pheochromocytoma } from './adrenal/pheochromocytoma';

// Bone and calcium metabolism
export { BONE_CALCIUM_CONTENT } from './bone-calcium/index';
export { osteoporosis } from './bone-calcium/osteoporosis';
export { hyperparathyroidism } from './bone-calcium/hyperparathyroidism';
export { vitaminDDisorders } from './bone-calcium/vitamin-d-disorders';

// Metabolic disorders
export { METABOLIC_CONTENT } from './metabolic/index';
export { metabolicSyndrome } from './metabolic/metabolic-syndrome';
export { obesityEndocrine } from './metabolic/obesity-endocrine';

// Diabetes
export { DIABETES_CONTENT } from './diabetes/index';
export { TYPE_1_DIABETES_PATIENT_ED } from './diabetes/type-1-diabetes';
export { TYPE_2_DIABETES_PATIENT_ED } from './diabetes/type-2-diabetes';
export { dkaManagement } from './diabetes/dka-management';

// Pituitary disorders
export { PITUITARY_CONTENT } from './pituitary/index';
export { pituitaryAdenomas } from './pituitary/pituitary-adenomas';
export { acromegaly } from './pituitary/acromegaly';
export { prolactinoma } from './pituitary/prolactinoma';
export { hypopituitarism } from './pituitary/hypopituitarism';
export { diabetesInsipidus } from './pituitary/diabetes-insipidus';

// Reproductive hormones
export { REPRODUCTIVE_HORMONES_CONTENT } from './reproductive-hormones/index';
export { pcos } from './reproductive-hormones/pcos';
export { hirsutism } from './reproductive-hormones/hirsutism';
export { infertilityEndocrine } from './reproductive-hormones/infertility-endocrine';

// Thyroid disorders
export { THYROID_CONTENT } from './thyroid/index';
export { HYPOTHYROIDISM } from './thyroid/hypothyroidism';
export { HYPERTHYROIDISM } from './thyroid/hyperthyroidism';
export { thyroidNodules } from './thyroid/thyroid-nodules';
export { thyroidCancer } from './thyroid/thyroid-cancer';
export { thyroiditis } from './thyroid/thyroiditis';

// General endocrine topics
export { ENDOCRINE_GENERAL_CONTENT } from './endocrine/index';
export { hormoneTesting } from './endocrine/clinical/hormone-testing';
export { endocrineEmergencies } from './endocrine/clinical/endocrine-emergencies';
export { thyroidHistology } from './endocrine/histology/thyroid-histology';
export { adrenalHistology } from './endocrine/histology/adrenal-histology';
export { autoimmuneEndocrine } from './endocrine/pathology/autoimmune-endocrine';
export { endocrineNeoplasia } from './endocrine/pathology/endocrine-neoplasia';

// Module metadata
export const ENDOCRINOLOGY_MODULE = {
  id: 'endocrinology',
  name: 'Endocrine System',
  description: 'Comprehensive educational content for endocrine disorders covering diabetes, adrenal, thyroid, pituitary, reproductive hormones, bone/calcium metabolism, and metabolic disorders.',
  version: '2.0.0',
  categories: [
    'diabetes',
    'adrenal',
    'bone-calcium',
    'metabolic',
    'pituitary',
    'reproductive-hormones',
    'thyroid',
    'clinical',
    'histology',
    'pathology',
  ],
  totalContentItems: 25,
};
