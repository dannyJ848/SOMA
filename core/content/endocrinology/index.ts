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
export { ADRENAL_CONTENT } from './adrenal/index.js';
export { cushingSyndrome } from './adrenal/cushing-syndrome.js';
export { addisonDisease } from './adrenal/addison-disease.js';
export { pheochromocytoma } from './adrenal/pheochromocytoma.js';

// Bone and calcium metabolism
export { BONE_CALCIUM_CONTENT } from './bone-calcium/index.js';
export { osteoporosis } from './bone-calcium/osteoporosis.js';
export { hyperparathyroidism } from './bone-calcium/hyperparathyroidism.js';
export { vitaminDDisorders } from './bone-calcium/vitamin-d-disorders.js';

// Metabolic disorders
export { METABOLIC_CONTENT } from './metabolic/index.js';
export { metabolicSyndrome } from './metabolic/metabolic-syndrome.js';
export { obesityEndocrine } from './metabolic/obesity-endocrine.js';

// Pituitary disorders
export { PITUITARY_CONTENT } from './pituitary/index.js';
export { pituitaryAdenomas } from './pituitary/pituitary-adenomas.js';
export { hypopituitarism } from './pituitary/hypopituitarism.js';
export { diabetesInsipidus } from './pituitary/diabetes-insipidus.js';

// Reproductive hormones
export { REPRODUCTIVE_HORMONES_CONTENT } from './reproductive-hormones/index.js';
export { pcos } from './reproductive-hormones/pcos.js';
export { hirsutism } from './reproductive-hormones/hirsutism.js';
export { infertilityEndocrine } from './reproductive-hormones/infertility-endocrine.js';

// Thyroid disorders
export { THYROID_CONTENT } from './thyroid/index.js';
export { thyroidNodules } from './thyroid/thyroid-nodules.js';
export { thyroidCancer } from './thyroid/thyroid-cancer.js';
export { thyroiditis } from './thyroid/thyroiditis.js';

// General endocrine topics
export { ENDOCRINE_GENERAL_CONTENT } from './endocrine/index.js';
export { hormoneTesting } from './endocrine/clinical/hormone-testing.js';
export { endocrineEmergencies } from './endocrine/clinical/endocrine-emergencies.js';
export { thyroidHistology } from './endocrine/histology/thyroid-histology.js';
export { adrenalHistology } from './endocrine/histology/adrenal-histology.js';
export { autoimmuneEndocrine } from './endocrine/pathology/autoimmune-endocrine.js';
export { endocrineNeoplasia } from './endocrine/pathology/endocrine-neoplasia.js';

// Module metadata
export const ENDOCRINOLOGY_MODULE = {
  id: 'endocrinology',
  name: 'Endocrine System',
  description: 'Comprehensive educational content for endocrine disorders covering adrenal, thyroid, pituitary, reproductive hormones, bone/calcium metabolism, and metabolic disorders.',
  version: '1.0.0',
  categories: [
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
  totalContentItems: 20,
};
