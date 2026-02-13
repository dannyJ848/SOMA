/**
 * Community Health Workers / Promotores de Salud Content Module
 *
 * Training and educational content for community health workers
 * (promotores de salud), including health education techniques,
 * screening, referral, cultural mediation, and self-care.
 */

export { chwRoleOverviewContent } from './chw-role-overview';
export { homeHealthAssessmentContent } from './home-health-assessment';
export { communityHealthEducationContent } from './community-health-education';
export { healthScreeningReferralContent } from './health-screening-referral';
export { culturalMediationHealthcareContent } from './cultural-mediation-healthcare';
export { motivationalInterviewingBasicsContent } from './motivational-interviewing-basics';
export { chronicDiseaseManagementCommunityContent } from './chronic-disease-management-community';
export { healthFairPlanningContent } from './health-fair-planning';
export { connectingResourcesContent } from './connecting-resources';
export { dataCollectionBasicsContent } from './data-collection-basics';
export { selfCareForChwContent } from './self-care-for-chw';

export const COMMUNITY_HEALTH_WORKERS_CATEGORIES = [
  'chw-role-overview',
  'home-health-assessment',
  'community-health-education',
  'health-screening-referral',
  'cultural-mediation-healthcare',
  'motivational-interviewing-basics',
  'chronic-disease-management-community',
  'health-fair-planning',
  'connecting-resources',
  'data-collection-basics',
  'self-care-for-chw',
] as const;

export type CommunityHealthWorkersCategory = (typeof COMMUNITY_HEALTH_WORKERS_CATEGORIES)[number];
