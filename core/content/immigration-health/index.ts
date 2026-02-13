/**
 * Immigration & Health Content Module
 *
 * Educational content addressing healthcare access and rights for
 * immigrant communities, including emergency care rights, children's
 * coverage, confidentiality protections, and community resources.
 */

export { healthcareRightsAllContent } from './healthcare-rights-all';
export { accessingCareUndocumentedContent } from './accessing-care-undocumented';
export { emtalaEmergencyRightsContent } from './emtala-emergency-rights';
export { childrensCoverageContent } from './childrens-coverage';
export { immigrationStressHealthContent } from './immigration-stress-health';
export { confidentialityProtectionsContent } from './confidentiality-protections';
export { schoolHealthServicesContent } from './school-health-services';
export { wicProgramGuideContent } from './wic-program-guide';
export { communityResourcesContent } from './community-resources';

export const IMMIGRATION_HEALTH_CATEGORIES = [
  'healthcare-rights-all',
  'accessing-care-undocumented',
  'emtala-emergency-rights',
  'childrens-coverage',
  'immigration-stress-health',
  'confidentiality-protections',
  'school-health-services',
  'wic-program-guide',
  'community-resources',
] as const;

export type ImmigrationHealthCategory = (typeof IMMIGRATION_HEALTH_CATEGORIES)[number];
