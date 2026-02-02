/**
 * Interprofessional Educational Content
 *
 * Comprehensive content covering interprofessional practice in healthcare:
 * - Communication Teams: Effective communication strategies and tools
 * - Roles & Responsibilities: Understanding healthcare professional roles
 * - Team-Based Care: Collaborative practice and patient-centered care
 */

// Communication Teams module exports
export {
  sbarCommunication,
  huddlesDebriefs,
  conflictResolution,
  sbarCommunicationDefault,
  huddlesDebriefsDefault,
  conflictResolutionDefault,
} from './communication-teams';

// Additional communication team content
export { handoffs } from './communication-teams/handoffs';
export { teamMeetings } from './communication-teams/team-meetings';
export { HANDOFF_COMMUNICATION } from './communication-teams/handoff-communication';
export { INTERPROFESSIONAL_COMMUNICATION } from './communication-teams/interprofessional-communication';

// Roles & Responsibilities module exports
export { physicianRole } from './roles-responsibilities/physician-role';
export { nursingRole } from './roles-responsibilities/nursing-role';
export { alliedHealthRoles } from './roles-responsibilities/allied-health-roles';
export { HEALTHCARE_ROLES } from './roles-responsibilities/healthcare-roles';
export { SCOPE_OF_PRACTICE } from './roles-responsibilities/scope-of-practice';
export { professionalBoundaries } from './roles-responsibilities/professional-boundaries';

// Team-Based Care module exports
export { careCoordination } from './team-based-care/care-coordination';
export { collaborativePractice } from './team-based-care/collaborative-practice';
export { patientCenteredCare } from './team-based-care/patient-centered-care';
export { TEAM_BASED_CARE_OVERVIEW } from './team-based-care/team-based-care-overview';
export { patientCenteredTeams } from './team-based-care/patient-centered-teams';
export { transitionsOfCare } from './team-based-care/transitions-of-care';

// Content categories
export const INTERPROFESSIONAL_CATEGORIES = [
  'communication',
  'team-dynamics',
  'roles-responsibilities',
  'collaborative-practice',
  'patient-centered-care',
  'quality-improvement',
] as const;

export type InterprofessionalCategory = typeof INTERPROFESSIONAL_CATEGORIES[number];

// Clinical relevance mapping
export const INTERPROFESSIONAL_CLINICAL_PRIORITIES = {
  'communication': 'high',
  'team-dynamics': 'high',
  'roles-responsibilities': 'high',
  'collaborative-practice': 'high',
  'patient-centered-care': 'high',
  'quality-improvement': 'medium',
} as const;
