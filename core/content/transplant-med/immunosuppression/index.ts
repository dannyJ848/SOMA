/**
 * Immunosuppression Content Module
 *
 * Educational content covering immunosuppressive medications used in organ transplantation,
 * including mechanisms, monitoring, side effects, and clinical applications.
 */

// Individual content exports
export { calcineurinInhibitors } from './calcineurin-inhibitors.js';
export { antiproliferativeAgents } from './antiproliferative-agents.js';
export { antimetabolites } from './antimetabolites.js';
export { corticosteroidsTransplant } from './corticosteroids-transplant.js';

// Import for aggregate export
import { calcineurinInhibitors } from './calcineurin-inhibitors.js';
import { antiproliferativeAgents } from './antiproliferative-agents.js';
import { antimetabolites } from './antimetabolites.js';
import { corticosteroidsTransplant } from './corticosteroids-transplant.js';

/**
 * All immunosuppression content items
 */
export const IMMUNOSUPPRESSION_CONTENT = [
  calcineurinInhibitors,
  antiproliferativeAgents,
  antimetabolites,
  corticosteroidsTransplant,
];

/**
 * Content IDs for reference
 */
export const IMMUNOSUPPRESSION_CONTENT_IDS = [
  'transplant-calcineurin-inhibitors',
  'transplant-antiproliferative-agents',
  'topic-antimetabolites',
  'transplant-corticosteroids',
] as const;

/**
 * Content categories within immunosuppression
 */
export const IMMUNOSUPPRESSION_CATEGORIES = [
  'calcineurin-inhibitors',
  'antiproliferative-agents',
  'antimetabolites',
  'corticosteroids',
  'drug-monitoring',
  'drug-interactions',
  'side-effects',
] as const;
