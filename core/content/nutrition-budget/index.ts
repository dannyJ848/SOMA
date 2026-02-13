/**
 * Nutrition on a Budget Content Module
 *
 * Educational content helping families eat healthy on a limited budget,
 * including meal planning, food assistance programs, nutrition labels,
 * and culturally appropriate healthy eating guides.
 */

export { cookingWithWicSnapContent } from './cooking-with-wic-snap';
export { budgetMealPlanningContent } from './budget-meal-planning';
export { foodDesertNavigationContent } from './food-desert-navigation';
export { readingNutritionLabelsContent } from './reading-nutrition-labels';
export { healthyLatinoFoodsContent } from './healthy-latino-foods';
export { portionControlVisualContent } from './portion-control-visual';
export { safeFoodPreparationContent } from './safe-food-preparation';
export { foodStorageSafetyContent } from './food-storage-safety';
export { affordableProteinSourcesContent } from './affordable-protein-sources';
export { healthySnacksChildrenContent } from './healthy-snacks-children';
export { mealPrepBasicsContent } from './meal-prep-basics';

export const NUTRITION_BUDGET_CATEGORIES = [
  'cooking-with-wic-snap',
  'budget-meal-planning',
  'food-desert-navigation',
  'reading-nutrition-labels',
  'healthy-latino-foods',
  'portion-control-visual',
  'safe-food-preparation',
  'food-storage-safety',
  'affordable-protein-sources',
  'healthy-snacks-children',
  'meal-prep-basics',
] as const;

export type NutritionBudgetCategory = (typeof NUTRITION_BUDGET_CATEGORIES)[number];
