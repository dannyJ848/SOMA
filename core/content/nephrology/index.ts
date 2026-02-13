/**
 * Nephrology Content Module
 *
 * Comprehensive educational content covering all aspects of kidney disease,
 * renal function, and nephrology medicine.
 */

// Kidney Function
export { howKidneysWork } from './kidney-function/how-kidneys-work';
export { measuringKidneyFunction } from './kidney-function/measuring-kidney-function';
export { kidneyDiseaseStages } from './kidney-function/kidney-disease-stages';

// Nephrology Conditions (Spanish-First Bilingual)
export { enfermedadRenalCronicaCkd } from './enfermedad-renal-cronica-ckd';
export { dialisisDialysis } from './dialisis-dialysis';
export { lesionRenalAgudaAki } from './lesion-renal-aguda-aki';
export { glomerulonefritisGlomerulonephritis } from './glomerulonefritis-glomerulonephritis';

// Content metadata for discovery
export const nephrologyContent = {
  id: 'nephrology',
  name: 'Nephrology',
  description: 'Comprehensive nephrology education covering kidney function, kidney disease staging, renal physiology, and nephrology conditions in Spanish-first bilingual format.',
  topics: [
    { id: 'how-kidneys-work', name: 'How Kidneys Work', category: 'kidney-function' },
    { id: 'measuring-kidney-function', name: 'Measuring Kidney Function', category: 'kidney-function' },
    { id: 'kidney-disease-stages', name: 'Kidney Disease Stages', category: 'kidney-function' },
    { id: 'enfermedad-renal-cronica-ckd', name: 'Enfermedad Renal Crónica / Chronic Kidney Disease', category: 'conditions' },
    { id: 'dialisis-dialysis', name: 'Diálisis / Dialysis', category: 'conditions' },
    { id: 'lesion-renal-aguda-aki', name: 'Lesión Renal Aguda / Acute Kidney Injury', category: 'conditions' },
    { id: 'glomerulonefritis-glomerulonephritis', name: 'Glomerulonefritis / Glomerulonephritis', category: 'conditions' },
  ],
  categories: [
    { id: 'kidney-function', name: 'Kidney Function', description: 'Understanding how kidneys work, how to measure function, and disease progression' },
    { id: 'conditions', name: 'Nephrology Conditions', description: 'Spanish-first bilingual content covering major nephrology conditions across 5 complexity levels' },
  ],
  levels: ['beginner', 'intermediate', 'advanced', 'expert', 'master'],
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: '1.0.0',
};

// Type exports for TypeScript
export type { EducationalContent } from '../types';
