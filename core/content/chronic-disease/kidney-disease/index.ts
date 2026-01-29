/**
 * Kidney Disease Educational Content Module
 * 
 * Comprehensive educational content for chronic kidney disease management including:
 * - CKD staging and eGFR interpretation
 * - Renal diet and nutrition
 * - Fluid management
 * - Medication adjustments
 * - Dialysis preparation and options
 */

// CKD Stages and eGFR interpretation
export { CKD_STAGES } from './ckd-stages.js';

// Renal diet and nutrition management
export { RENAL_DIET } from './renal-diet.js';

// Fluid restriction and monitoring
export { FLUID_MANAGEMENT } from './fluid-management.js';

// Drug dosing and medication safety
export { MEDICATION_ADJUSTMENTS } from './medication-adjustments.js';

// Dialysis options and vascular access
export { DIALYSIS_PREPARATION } from './dialysis-preparation.js';

// Export all content as array for bulk operations
import { CKD_STAGES } from './ckd-stages.js';
import { RENAL_DIET } from './renal-diet.js';
import { FLUID_MANAGEMENT } from './fluid-management.js';
import { MEDICATION_ADJUSTMENTS } from './medication-adjustments.js';
import { DIALYSIS_PREPARATION } from './dialysis-preparation.js';

export const KIDNEY_DISEASE_CONTENT = [
  CKD_STAGES,
  RENAL_DIET,
  FLUID_MANAGEMENT,
  MEDICATION_ADJUSTMENTS,
  DIALYSIS_PREPARATION,
] as const;

// Content metadata for module registry
export const KIDNEY_DISEASE_MODULE = {
  id: 'kidney-disease',
  name: 'Kidney Disease',
  description: 'Educational content for chronic kidney disease management and care',
  contentIds: [
    'chronic-kidney-ckd-stages',
    'chronic-kidney-renal-diet',
    'chronic-kidney-fluid-management',
    'chronic-kidney-medication-adjustments',
    'chronic-kidney-dialysis-preparation',
  ],
  systems: ['renal'],
  topics: ['chronic-disease', 'ckd', 'dialysis', 'transplant'],
} as const;
