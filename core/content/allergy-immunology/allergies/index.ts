/**
 * Allergies Subdirectory
 *
 * Educational content specific to allergic conditions and reactions
 */

import { allergicReactionsContent } from './allergic-reactions';

// Export individual modules
export { allergicReactionsContent } from './allergic-reactions';

/**
 * All allergies-specific content modules
 */
export const allergiesModules = [
  allergicReactionsContent,
];

/**
 * Get allergies module by ID
 */
export function getAllergiesModule(id: string) {
  return allergiesModules.find(m => m.id === id);
}

/**
 * Get all allergies module IDs
 */
export function getAllergiesModuleIds(): string[] {
  return allergiesModules.map(m => m.id);
}
