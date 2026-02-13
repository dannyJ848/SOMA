/**
 * Environmental Health Content Module
 *
 * Educational content on environmental hazards affecting health,
 * including lead poisoning, pesticide exposure, water safety,
 * air quality, mold, and creating safe home environments.
 */

export { leadPoisoningPreventionContent } from './lead-poisoning-prevention';
export { pesticideExposureCommunitiesContent } from './pesticide-exposure-communities';
export { waterSafetyTestingContent } from './water-safety-testing';
export { airQualityRespiratoryContent } from './air-quality-respiratory';
export { moldInHousingContent } from './mold-in-housing';
export { carbonMonoxideSafetyContent } from './carbon-monoxide-safety';
export { leadInTraditionalRemediesContent } from './lead-in-traditional-remedies';
export { safeHomeEnvironmentContent } from './safe-home-environment';
export { environmentalHealthChildrenContent } from './environmental-health-children';

export const ENVIRONMENTAL_HEALTH_CATEGORIES = [
  'lead-poisoning-prevention',
  'pesticide-exposure-communities',
  'water-safety-testing',
  'air-quality-respiratory',
  'mold-in-housing',
  'carbon-monoxide-safety',
  'lead-in-traditional-remedies',
  'safe-home-environment',
  'environmental-health-children',
] as const;

export type EnvironmentalHealthCategory = (typeof ENVIRONMENTAL_HEALTH_CATEGORIES)[number];
