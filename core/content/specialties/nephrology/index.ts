/**
 * Nephrology Specialty Educational Content
 *
 * Comprehensive nephrology content covering:
 * - Acute Kidney Injury (prerenal, intrinsic, postrenal)
 * - Chronic Kidney Disease (stages, management)
 * - Glomerulonephritis (types and mechanisms)
 * - Nephrotic vs Nephritic Syndrome
 * - Electrolyte Disorders (sodium, potassium, calcium, phosphorus)
 * - Acid-Base Disorders (metabolic vs respiratory)
 * - Dialysis (hemodialysis vs peritoneal)
 * - Kidney Transplantation
 * - Polycystic Kidney Disease
 * - Nephrotoxic Drugs
 *
 * Physician-level detail with multi-level complexity (5 tiers)
 */

// Nephrology Database (45 structured entries)
export {
  NEPHROLOGY_ENTRIES,
  getNephrologyEntry,
  searchNephrology,
  getNephrologyByCategory,
  getNephrologyCount,
} from './nephrology-database';
export type {
  NephrologyEntry,
  NephrologyCategory as NephrologyDatabaseCategory,
} from './nephrology-database';

// Content exports
export { nephroticNephriticSyndrome } from './nephrotic-nephritic-syndrome';
export { sodiumDisorders } from './sodium-disorders';
export { potassiumDisorders } from './potassium-disorders';
export { calciumPhosphorusDisorders } from './calcium-phosphorus-disorders';
export { dialysis } from './dialysis';
export { kidneyTransplantation } from './kidney-transplantation';
export { nephrotoxicDrugs } from './nephrotoxic-drugs';

// In-depth subdirectory content
export { glomerulonephritis as glomerulonephritisDetailed, nephroticSyndrome } from './glomerular';
export { acuteTubularNecrosis, renalTubularAcidosis } from './tubular';
export { ckdStagingDialysisTransplant, dialysisAndTransplant } from './chronic-kidney-disease/index';
export { hyponatremia, hyperkalemia } from './electrolytes';

// Content categories
export const NEPHROLOGY_CATEGORIES = [
  'acute-conditions',
  'chronic-conditions',
  'glomerular-diseases',
  'electrolyte-disorders',
  'acid-base',
  'renal-replacement-therapy',
  'genetic-conditions',
  'pharmacology',
] as const;

export type NephrologyCategory = (typeof NEPHROLOGY_CATEGORIES)[number];

// All nephrology content items
export const NEPHROLOGY_CONTENT_IDS = [
  'condition-acute-kidney-injury',
  'condition-chronic-kidney-disease',
  'condition-glomerulonephritis',
  'concept-nephrotic-nephritic-syndrome',
  'condition-sodium-disorders',
  'condition-potassium-disorders',
  'condition-calcium-phosphorus-disorders',
  'condition-acid-base-disorders',
  'process-dialysis',
  'process-kidney-transplantation',
  'condition-polycystic-kidney-disease',
  'concept-nephrotoxic-drugs',
  // In-depth content
  'nephro-glomerulonephritis',
  'nephro-nephrotic-syndrome',
  'nephro-acute-tubular-necrosis',
  'nephro-renal-tubular-acidosis',
  'nephro-chronic-kidney-disease',
  'nephro-dialysis-transplant',
  'nephro-hyponatremia',
  'nephro-hyperkalemia',
] as const;
