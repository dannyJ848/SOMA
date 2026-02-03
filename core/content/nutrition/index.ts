/**
 * Nutrition Science Content Module
 *
 * Comprehensive nutrition database covering macronutrients, micronutrients,
 * minerals, dietary patterns, disease-specific nutrition, and supplements.
 */

export type { NutritionEntry, NutritionCategory } from './nutrition-database';
export { NUTRITION_ENTRIES } from './nutrition-database';

// Educational content modules
export { macronutrientsOverview } from './macronutrients';
export { micronutrientsOverview } from './micronutrients';

import { NUTRITION_ENTRIES, type NutritionEntry, type NutritionCategory } from './nutrition-database';

/** Retrieve a single nutrition entry by ID, or undefined if not found. */
export function getNutritionEntry(id: string): NutritionEntry | undefined {
  return NUTRITION_ENTRIES[id];
}

/** Search nutrition entries by keyword across name, nameEs, summary, and patientTip fields. */
export function searchNutrition(query: string): NutritionEntry[] {
  const q = query.toLowerCase();
  return Object.values(NUTRITION_ENTRIES).filter((entry) => {
    return (
      entry.name.toLowerCase().includes(q) ||
      entry.nameEs.toLowerCase().includes(q) ||
      entry.summary.toLowerCase().includes(q) ||
      entry.patientTip.toLowerCase().includes(q) ||
      entry.sources.some((s) => s.toLowerCase().includes(q)) ||
      entry.functions.some((f) => f.toLowerCase().includes(q))
    );
  });
}

/** Get all nutrition entries for a given category. */
export function getNutritionByCategory(category: NutritionCategory): NutritionEntry[] {
  return Object.values(NUTRITION_ENTRIES).filter((entry) => entry.category === category);
}

/** Return the total number of nutrition entries in the database. */
export function getNutritionCount(): number {
  return Object.keys(NUTRITION_ENTRIES).length;
}
