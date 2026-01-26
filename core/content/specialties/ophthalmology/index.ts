/**
 * Ophthalmology Specialty Educational Content
 *
 * Comprehensive ophthalmology content covering:
 * - Eye Anatomy and Vision Physiology
 * - Refractive Errors (myopia, hyperopia, astigmatism, presbyopia)
 * - Cataracts (types, risk factors, surgical management)
 * - Glaucoma (open-angle, angle-closure, management)
 * - Macular Degeneration (dry vs wet AMD)
 * - Diabetic Retinopathy (stages, screening, treatment)
 * - Retinal Detachment (emergency recognition and management)
 * - Dry Eye Disease (diagnosis and treatment)
 * - Eye Infections (conjunctivitis types, keratitis)
 * - Eye Examination Components (comprehensive eye exam)
 *
 * Physician-level detail with multi-level complexity (5 tiers)
 */

// Anatomy and Physiology
export { eyeAnatomy } from './eye-anatomy';

// Refractive Errors
export { refractiveErrors } from './refractive-errors';

// Lens Disorders
export { cataracts } from './cataracts';

// Optic Nerve and Pressure
export { glaucoma } from './glaucoma';

// Retinal Conditions
export { macularDegeneration } from './macular-degeneration';
export { diabeticRetinopathy } from './diabetic-retinopathy';
export { retinalDetachment } from './retinal-detachment';

// Ocular Surface
export { dryEyeDisease } from './dry-eye-disease';
export { eyeInfections } from './eye-infections';

// Clinical Skills
export { eyeExamination } from './eye-examination';

// Content categories
export const OPHTHALMOLOGY_CATEGORIES = [
  'anatomy-physiology',
  'refractive-errors',
  'lens-disorders',
  'glaucoma',
  'retinal-diseases',
  'ocular-surface',
  'neuro-ophthalmology',
  'pediatric-ophthalmology',
  'clinical-examination',
  'emergency-conditions',
] as const;

export type OphthalmologyCategory = (typeof OPHTHALMOLOGY_CATEGORIES)[number];

// All ophthalmology content IDs
export const OPHTHALMOLOGY_CONTENT_IDS = [
  'structure-eye-anatomy',
  'condition-refractive-errors',
  'condition-cataracts',
  'condition-glaucoma',
  'condition-macular-degeneration',
  'condition-diabetic-retinopathy',
  'condition-retinal-detachment',
  'condition-dry-eye-disease',
  'condition-eye-infections',
  'process-eye-examination',
] as const;

// Emergency conditions that require immediate referral
export const OPHTHALMOLOGY_EMERGENCIES = [
  'retinal-detachment',
  'acute-angle-closure-glaucoma',
  'central-retinal-artery-occlusion',
  'chemical-eye-injury',
  'open-globe-injury',
  'orbital-cellulitis',
  'endophthalmitis',
  'giant-cell-arteritis-vision-loss',
] as const;

// Specialty overview
export const ophthalmologyContent = {
  specialty: 'ophthalmology',
  description: 'Medical and surgical specialty focusing on eye and visual system disorders',
  topics: OPHTHALMOLOGY_CONTENT_IDS,
  categories: OPHTHALMOLOGY_CATEGORIES,
  emergencies: OPHTHALMOLOGY_EMERGENCIES,
};
