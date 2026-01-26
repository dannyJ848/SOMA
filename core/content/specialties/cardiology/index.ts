/**
 * Cardiology Specialty Content Index
 *
 * Comprehensive cardiology educational content covering:
 * - Coronary artery disease (CAD)
 * - Heart failure (HFrEF vs HFpEF)
 * - Arrhythmias
 * - Valvular heart disease
 * - Congenital heart disease
 * - Pericardial diseases
 * - Cardiomyopathies
 * - ECG interpretation
 * - Cardiac catheterization and interventions
 * - Cardiac medications
 */

// Core conditions
export { coronaryArteryDisease } from './coronary-artery-disease';
export { heartFailure } from './heart-failure';
export { atrialFibrillation } from './arrhythmias/atrial-fibrillation';
export { ventricularTachycardia } from './arrhythmias/ventricular-tachycardia';
export { heartBlocks } from './arrhythmias/heart-blocks';
export { valvularHeartDisease } from './valvular-heart-disease';
export { congenitalHeartDisease } from './congenital-heart-disease';
export { pericardialDiseases } from './pericardial-diseases';
export { cardiomyopathies } from './cardiomyopathies';

// Diagnostics and procedures
export { ecgInterpretation } from './ecg-interpretation';
export { cardiacCatheterization } from './cardiac-catheterization';

// Therapeutics
export { cardiacMedications } from './cardiac-medications';

// All cardiology content
export const cardiologyContent = {
  specialty: 'cardiology',
  topics: [
    'coronary-artery-disease',
    'heart-failure',
    'arrhythmias',
    'valvular-heart-disease',
    'congenital-heart-disease',
    'pericardial-diseases',
    'cardiomyopathies',
    'ecg-interpretation',
    'cardiac-catheterization',
    'cardiac-medications',
  ],
};
