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

// Content metadata for discovery
export const nephrologyContent = {
  id: 'nephrology',
  name: 'Nephrology',
  description: 'Comprehensive nephrology education covering kidney function, kidney disease staging, and renal physiology.',
  topics: [
    { id: 'how-kidneys-work', name: 'How Kidneys Work', category: 'kidney-function' },
    { id: 'measuring-kidney-function', name: 'Measuring Kidney Function', category: 'kidney-function' },
    { id: 'kidney-disease-stages', name: 'Kidney Disease Stages', category: 'kidney-function' },
  ],
  categories: [
    { id: 'kidney-function', name: 'Kidney Function', description: 'Understanding how kidneys work, how to measure function, and disease progression' },
  ],
  levels: ['beginner', 'intermediate', 'advanced', 'expert', 'master'],
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: '1.0.0',
};

// Type exports for TypeScript
export type { EducationalContent } from '../types';
