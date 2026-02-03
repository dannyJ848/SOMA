/**
 * OB-GYN Content Module
 *
 * Comprehensive educational content covering obstetrics, gynecology,
 * maternal-fetal medicine, and reproductive endocrinology.
 */

// Obstetrics
export { prenatalCare } from './obstetrics/prenatal-care';
export { laborManagement } from './obstetrics/labor-management';

// Gynecology
export { endometriosis } from './gynecology/endometriosis';
export { pcos } from './gynecology/pcos';

// Maternal-Fetal Medicine
export { preeclampsia } from './maternal-fetal/preeclampsia';
export { gestationalDiabetes } from './maternal-fetal/gestational-diabetes';

// Reproductive Endocrinology
export { fertility } from './reproductive/fertility';
export { contraception } from './reproductive/contraception';

// Content metadata for discovery
export const obGynContent = {
  id: 'ob-gyn',
  name: 'Obstetrics & Gynecology',
  description:
    'Comprehensive OB-GYN education covering prenatal care, labor management, ' +
    'gynecologic conditions, maternal-fetal medicine, fertility, and contraception.',
  topics: [
    // Obstetrics
    { id: 'obgyn-prenatal-care', name: 'Prenatal Care', category: 'obstetrics' },
    { id: 'obgyn-labor-management', name: 'Labor and Delivery Management', category: 'obstetrics' },
    // Gynecology
    { id: 'obgyn-endometriosis', name: 'Endometriosis', category: 'gynecology' },
    { id: 'obgyn-pcos', name: 'Polycystic Ovary Syndrome', category: 'gynecology' },
    // Maternal-Fetal Medicine
    { id: 'obgyn-preeclampsia', name: 'Preeclampsia', category: 'maternal-fetal' },
    { id: 'obgyn-gestational-diabetes', name: 'Gestational Diabetes Mellitus', category: 'maternal-fetal' },
    // Reproductive Endocrinology
    { id: 'obgyn-fertility', name: 'Fertility and Infertility', category: 'reproductive' },
    { id: 'obgyn-contraception', name: 'Contraception', category: 'reproductive' },
  ],
  categories: [
    { id: 'obstetrics', name: 'Obstetrics', description: 'Prenatal care, labor management, and delivery' },
    { id: 'gynecology', name: 'Gynecology', description: 'Gynecologic conditions including endometriosis and PCOS' },
    { id: 'maternal-fetal', name: 'Maternal-Fetal Medicine', description: 'High-risk pregnancy conditions including preeclampsia and gestational diabetes' },
    { id: 'reproductive', name: 'Reproductive Endocrinology', description: 'Fertility, infertility, and contraception' },
  ],
  levels: ['beginner', 'intermediate', 'advanced', 'expert', 'master'],
  createdAt: '2025-06-01',
  updatedAt: '2025-06-01',
  version: '1.0.0',
};

// Type exports for TypeScript
export type { EducationalContent } from '../types';
