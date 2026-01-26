/**
 * General Survey Module Index
 *
 * Exports all general survey/appearance content for the physical examination module.
 */

export { mentalStatus } from './mental-status';
export { generalAppearance } from './general-appearance';

// Re-export as named collection
import { mentalStatus } from './mental-status';
import { generalAppearance } from './general-appearance';

export const generalSurveyContent = {
  mentalStatus,
  generalAppearance,
};

export default generalSurveyContent;
