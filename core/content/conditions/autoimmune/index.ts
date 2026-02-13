/**
 * Autoimmune Conditions Content Index
 * Exports all autoimmune condition educational content
 */

export { sleContent } from './sle';
export { sjogrensContent } from './sjogrens';
export { sclerodermaContent } from './scleroderma';
export { myositisContent } from './myositis';
export { vasculitisContent } from './vasculitis';
export { gravesDiseaseContent } from './graves-disease';
export { hashimotoContent } from './hashimoto';
export { celiacAutoimmuneContent } from './celiac-autoimmune';

// Autoimmune Conditions Database
export {
  AUTOIMMUNE_CONDITIONS,
  getAutoimmuneConditionById,
  searchAutoimmuneConditions,
  getAutoimmuneByCategory,
  getAutoimmuneConditionCount,
} from './autoimmune-conditions-database';
export type {
  AutoimmuneCategory,
  AutoimmuneConditionEntry,
} from './autoimmune-conditions-database';
