/**
 * Screening & Prevention Content Module
 *
 * Educational content covering cancer screening and metabolic screening
 * guidelines, methods, and recommendations across 5 complexity levels.
 */

export { cancerScreening } from './cancer-screening';
export { metabolicScreening } from './metabolic-screening';

export const SCREENING_CATEGORIES = [
  'cancer',
  'metabolic',
] as const;

export type ScreeningCategory = (typeof SCREENING_CATEGORIES)[number];
