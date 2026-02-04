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
  // Foundation modules
  // TODO: Import and register foundation modules
  
  // Specialty modules
  const { type2DiabetesModule } = await import('./modules/endocrinology/type2-diabetes.js');
  registerModule(type2DiabetesModule);
  
  console.log('[Education] Modules initialized');
}
