/**
 * Caregiver Support Educational Content Module
 *
 * Comprehensive content to support family caregivers with practical guidance,
 * emotional validation, and essential skills for caring for loved ones.
 * This module addresses the unique challenges caregivers face while
 * emphasizing the importance of self-care and available resources.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical advice. Caregiving decisions should be made in
 * consultation with healthcare providers.
 *
 * Topics covered:
 * - Caregiver Basics: Roles, boundaries, and self-care foundations
 * - Caregiver Self-Care: Preventing burnout and maintaining health
 * - Patient Communication: Effective communication with patients
 * - Safety Considerations: Home safety, fall prevention, medications
 * - Emotional Support: Managing emotional challenges
 * - Resources & Support: Community resources, financial assistance, respite care
 * - Caregiving Transitions: Managing changes in care needs
 * - Advanced Caregiving: Complex medical tasks at home
 * - Practical Skills: Mobility, medications, wound care, nutrition, safety
 * - Condition-Specific Care: Dementia, cancer, heart failure, stroke, elderly
 * - Communication: Healthcare teams, family meetings, difficult conversations
 * - Legal/Financial: Power of attorney, healthcare proxy, FMLA, planning
 */

// Overview Modules
export { caregiverBasics } from './caregiver-basics';
export { caregiverSelfCare } from './caregiver-self-care';
export { patientCommunication } from './patient-communication';
export { safetyConsiderations } from './safety-considerations';
export { emotionalSupport } from './emotional-support';
export { resourcesSupport } from './resources-support';
export { caregivingTransitions } from './caregiving-transitions';
export { advancedCaregiving } from './advanced-caregiving';

// Caregiver Basics
export { becomingACaregiver } from './caregiver-basics/becoming-a-caregiver';
export { caregiverRoles } from './caregiver-basics/caregiver-roles';
export { settingBoundaries } from './caregiver-basics/setting-boundaries';
export { selfCareImportance } from './caregiver-basics/self-care-importance';

// Practical Skills
export { helpingWithMobility } from './practical-skills/helping-with-mobility';
export { medicationManagement } from './practical-skills/medication-management';
export { woundCareBasics } from './practical-skills/wound-care-basics';
export { nutritionSupport } from './practical-skills/nutrition-support';
export { personalCareAssistance } from './practical-skills/personal-care-assistance';
export { safetyAtHome } from './practical-skills/safety-at-home';

// Condition-Specific Care
export { caringForDementiaPatients } from './condition-specific/caring-for-dementia-patients';
export { caringForCancerPatients } from './condition-specific/caring-for-cancer-patients';
export { caringForHeartFailurePatients } from './condition-specific/caring-for-heart-failure-patients';
export { caringForStrokeSurvivors } from './condition-specific/caring-for-stroke-survivors';
export { caringForElderlyParents } from './condition-specific/caring-for-elderly-parents';

// Communication
export { talkingToHealthcareTeam } from './communication/talking-to-healthcare-team';
export { familyMeetings } from './communication/family-meetings';
export { difficultConversations } from './communication/difficult-conversations';
export { whenPatientCantCommunicate } from './communication/when-patient-cant-communicate';

// Resources
export { respiteCare } from './resources/respite-care';
export { homeHealthServices } from './resources/home-health-services';
export { adultDayPrograms } from './resources/adult-day-programs';
export { supportGroups } from './resources/support-groups';
export { financialAssistance } from './resources/financial-assistance';

// Self-Care
export { preventingBurnout } from './self-care/preventing-burnout';
export { managingStress } from './self-care/managing-stress';
export { askingForHelp } from './self-care/asking-for-help';
export { maintainingRelationships } from './self-care/maintaining-relationships';
export { griefAndAnticipatoryGrief } from './self-care/grief-and-anticipatory-grief';

// Legal/Financial
export { powerOfAttorney } from './legal-financial/power-of-attorney';
export { healthcareProxy } from './legal-financial/healthcare-proxy';
export { fmlaBasics } from './legal-financial/fmla-basics';
export { longTermCarePlanning } from './legal-financial/long-term-care-planning';

// Re-export types
export type {
  EducationalContent,
  LevelContent,
  ComplexityLevel,
} from '../types';

// Content categories
export const CAREGIVER_SUPPORT_CATEGORIES = [
  'caregiver-basics',
  'caregiver-self-care',
  'patient-communication',
  'safety-considerations',
  'emotional-support',
  'resources-support',
  'caregiving-transitions',
  'advanced-caregiving',
  'practical-skills',
  'condition-specific',
  'communication',
  'self-care',
  'legal-financial',
] as const;

export type CaregiverSupportCategory = (typeof CAREGIVER_SUPPORT_CATEGORIES)[number];
