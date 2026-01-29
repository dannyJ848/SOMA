/**
 * Post-Transplant Care Content Module
 *
 * Educational content covering post-transplant patient care including
 * rejection surveillance, infection prophylaxis, and long-term management.
 */

// Individual content exports
export { rejectionSurveillance } from './rejection-surveillance.js';
export { rejectionMonitoring } from './rejection-monitoring.js';
export { infectionProphylaxis } from './infection-prophylaxis.js';
export { infectionPrevention } from './infection-prevention.js';
export { longTermManagement } from './long-term-management.js';

// Import for aggregate export
import { rejectionSurveillance } from './rejection-surveillance.js';
import { rejectionMonitoring } from './rejection-monitoring.js';
import { infectionProphylaxis } from './infection-prophylaxis.js';
import { infectionPrevention } from './infection-prevention.js';
import { longTermManagement } from './long-term-management.js';

/**
 * All post-transplant care content items
 */
export const POST_TRANSPLANT_CARE_CONTENT = [
  rejectionSurveillance,
  rejectionMonitoring,
  infectionProphylaxis,
  infectionPrevention,
  longTermManagement,
];

/**
 * Content IDs for reference
 */
export const POST_TRANSPLANT_CARE_CONTENT_IDS = [
  'transplant-rejection-surveillance',
  'topic-rejection-monitoring',
  'transplant-infection-prophylaxis',
  'topic-infection-prevention',
  'transplant-long-term-management',
] as const;

/**
 * Content categories within post-transplant care
 */
export const POST_TRANSPLANT_CARE_CATEGORIES = [
  'rejection-surveillance',
  'rejection-monitoring',
  'infection-prophylaxis',
  'infection-prevention',
  'long-term-management',
  'complications',
  'quality-of-life',
  'survivorship',
] as const;
