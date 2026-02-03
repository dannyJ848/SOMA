// Epidemiology and Public Health Surveillance
export {
  diseaseSurveillance,
  outbreakResponse,
  publicHealthData
} from './epidemiology-public';

// Health Promotion
export {
  healthPromotionStrategies,
  behaviorChange,
  communityHealth
} from './health-promotion';

// Disease Prevention
export {
  primaryPreventionPH,
  secondaryPreventionPH,
  tertiaryPreventionPH
} from './disease-prevention';

// Global Health Issues
export {
  globalHealthChallenges,
  healthEquityPH,
  oneHealth
} from './global-health-issues';

// Public Health & Epidemiology Database
export type { PublicHealthCategory, PublicHealthEntry } from './public-health-database';
export {
  publicHealthDatabase,
  searchPublicHealthEntries,
  filterByCategory,
  getEntryById
} from './public-health-database';
