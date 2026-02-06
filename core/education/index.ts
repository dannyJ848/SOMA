/**
 * Education Module Index
 * 
 * Exports all educational types and registers all modules.
 */

// Types
export * from './types.js';

// Registry
export * from './registry.js';

// Module registration will happen here
import { registerModule } from './registry.js';

// Import and register all modules
export async function initializeEducationModules(): Promise<void> {
  // Specialty modules - Endocrinology
  const { type2DiabetesModule } = await import('./modules/endocrinology/type2-diabetes.js');
  registerModule(type2DiabetesModule);
  
  // Specialty modules - Cardiology
  const { hypertensionModule } = await import('./modules/cardiology/hypertension.js');
  registerModule(hypertensionModule);
  
  // Specialty modules - Neurology
  const { headacheModule } = await import('./modules/neurology/headache.js');
  registerModule(headacheModule);
  
  // Specialty modules - Gastroenterology
  const { gerdModule } = await import('./modules/gastroenterology/gerd.js');
  registerModule(gerdModule);
  
  const { ibsModule } = await import('./modules/gastroenterology/gastro-ibs-comprehensive.js');
  registerModule(ibsModule);
  
  // Lab interpretation modules
  const { cbcModule } = await import('./modules/labs/cbc.js');
  registerModule(cbcModule);
  
  const { lipidsModule } = await import('./modules/labs/lipids.js');
  registerModule(lipidsModule);
  
  const { thyroidModule } = await import('./modules/labs/thyroid.js');
  registerModule(thyroidModule);
  
  const { labThyroidInterpretationModule } = await import('./modules/lab-thyroid-interpretation.js');
  registerModule(labThyroidInterpretationModule);
  
  console.log('[Education] Modules initialized');
}

// Re-export modules for direct access
export { type2DiabetesModule } from './modules/endocrinology/type2-diabetes.js';
export { hypertensionModule } from './modules/cardiology/hypertension.js';
export { cbcModule } from './modules/labs/cbc.js';
export { lipidsModule } from './modules/labs/lipids.js';
export { thyroidModule } from './modules/labs/thyroid.js';
export { labThyroidInterpretationModule } from './modules/lab-thyroid-interpretation.js';
export { headacheModule } from './modules/neurology/headache.js';
export { gerdModule } from './modules/gastroenterology/gerd.js';
export { ibsModule } from './modules/gastroenterology/gastro-ibs-comprehensive.js';
