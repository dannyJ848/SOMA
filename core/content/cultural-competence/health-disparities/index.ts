import { disparitiesOverviewContent } from './disparities-overview';
import { socialDeterminantsContent } from './social-determinants';
import { healthEquityContent } from './health-equity';

export { disparitiesOverviewContent, socialDeterminantsContent, healthEquityContent };

// Note: These modules have custom structure, not EducationalContent
export const healthDisparitiesModules = [
  disparitiesOverviewContent as any,
  socialDeterminantsContent as any,
  healthEquityContent as any,
];
