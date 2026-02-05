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
  
  // Lab interpretation modules
  const { cbcModule } = await import('./modules/labs/cbc.js');
  registerModule(cbcModule);
  
  console.log('[Education] Modules initialized');
}

// Re-export modules for direct access
export { type2DiabetesModule } from './modules/endocrinology/type2-diabetes.js';
export { hypertensionModule } from './modules/cardiology/hypertension.js';
export { cbcModule } from './modules/labs/cbc.js';
