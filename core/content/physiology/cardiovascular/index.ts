// Type exports
export * from './types';

// Content module exports
export { cardiacCycle } from './cardiac-cycle';
export { cardiacElectrophysiology } from './cardiac-electrophysiology';
export { hemodynamics } from './hemodynamics';
export { clinicalHypertension, clinicalHeartFailure } from './clinical-correlations';

// Re-export default objects from each module for convenience
export { default as cardiacCycleDefault } from './cardiac-cycle';
export { default as cardiacElectrophysiologyDefault } from './cardiac-electrophysiology';
export { default as hemodynamicsDefault } from './hemodynamics';

// Aggregate export of all cardiovascular content modules
export const cardiovascularContent = {
  cardiacCycle: () => import('./cardiac-cycle').then(m => m.cardiacCycle),
  cardiacElectrophysiology: () => import('./cardiac-electrophysiology').then(m => m.cardiacElectrophysiology),
  hemodynamics: () => import('./hemodynamics').then(m => m.hemodynamics),
  clinicalHypertension: () => import('./clinical-correlations').then(m => m.clinicalHypertension),
  clinicalHeartFailure: () => import('./clinical-correlations').then(m => m.clinicalHeartFailure),
};

// Content module IDs for reference
export const CARDIOVASCULAR_CONTENT_IDS = {
  CARDIAC_CYCLE: 'physiology-cardiac-cycle',
  CARDIAC_ELECTROPHYSIOLOGY: 'physiology-cardiac-electrophysiology',
  HEMODYNAMICS: 'physiology-hemodynamics',
  CLINICAL_HYPERTENSION: 'clinical-correlation-cardiovascular-hypertension',
  CLINICAL_HEART_FAILURE: 'clinical-correlation-cardiovascular-heart-failure',
} as const;
