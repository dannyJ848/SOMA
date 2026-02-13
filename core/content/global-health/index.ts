/**
 * Global Health Educational Content
 *
 * Comprehensive content helping patients understand global health context:
 * - Major global health challenges and priorities
 * - Infectious diseases worldwide (TB, malaria, HIV)
 * - Neglected tropical diseases
 * - Vaccine-preventable diseases
 * - Maternal and child health globally
 * - Non-communicable disease epidemic
 * - Health disparities and inequities
 * - Social determinants of health
 * - Travel health considerations
 * - Global health organizations (WHO, CDC)
 *
 * All content available at 5 complexity levels for patient education.
 */

// Major Global Health Challenges
export { GLOBAL_HEALTH_CHALLENGES } from './global-health-challenges';

// Infectious Diseases Worldwide
export { TUBERCULOSIS_GLOBAL } from './infectious-diseases/tuberculosis-global';
export { MALARIA_GLOBAL } from './infectious-diseases/malaria-global';
export { HIV_AIDS_GLOBAL } from './infectious-diseases/hiv-aids-global';
export { EMERGING_INFECTIOUS_DISEASES } from './infectious-diseases/emerging-infectious-diseases';

// Neglected Tropical Diseases
export { NTD_OVERVIEW } from './neglected-tropical-diseases/ntd-overview';
export { PARASITIC_NTDS } from './neglected-tropical-diseases/parasitic-ntds';
export { VECTOR_BORNE_NTDS } from './neglected-tropical-diseases/vector-borne-ntds';

// Vaccine-Preventable Diseases
export { VACCINE_PREVENTABLE_OVERVIEW } from './vaccine-preventable/vaccine-preventable-overview';
export { CHILDHOOD_IMMUNIZATION_GLOBAL } from './vaccine-preventable/childhood-immunization-global';
export { VACCINE_EQUITY } from './vaccine-preventable/vaccine-equity';

// Maternal and Child Health
export { MATERNAL_HEALTH_GLOBAL } from './maternal-child-health/maternal-health-global';
export { CHILD_HEALTH_GLOBAL } from './maternal-child-health/child-health-global';
export { NUTRITION_GLOBAL } from './maternal-child-health/nutrition-global';

// Non-Communicable Diseases
export { NCD_EPIDEMIC } from './noncommunicable-diseases/ncd-epidemic';
export { CARDIOVASCULAR_DISEASE_GLOBAL } from './noncommunicable-diseases/cardiovascular-disease-global';
export { DIABETES_GLOBAL } from './noncommunicable-diseases/diabetes-global';
export { CANCER_GLOBAL } from './noncommunicable-diseases/cancer-global';
export { MENTAL_HEALTH_GLOBAL } from './noncommunicable-diseases/mental-health-global';

// Health Disparities
export { HEALTH_DISPARITIES_OVERVIEW } from './health-disparities/health-disparities-overview';
export { GEOGRAPHIC_DISPARITIES } from './health-disparities/geographic-disparities';
export { ECONOMIC_DISPARITIES } from './health-disparities/economic-disparities';

// Social Determinants of Health
export { SDOH_OVERVIEW } from './social-determinants/sdoh-overview';
export { POVERTY_AND_HEALTH } from './social-determinants/poverty-and-health';
export { EDUCATION_AND_HEALTH } from './social-determinants/education-and-health';
export { ENVIRONMENT_AND_HEALTH } from './social-determinants/environment-and-health';

// Travel Health
export { TRAVEL_HEALTH_OVERVIEW } from './travel-health/travel-health-overview';
export { TRAVEL_VACCINATIONS_GUIDE } from './travel-health/travel-vaccinations-guide';
export { TRAVEL_RISKS_BY_REGION } from './travel-health/travel-risks-by-region';
export { RETURNING_TRAVELER } from './travel-health/returning-traveler';

// Global Health Organizations
export { WHO_OVERVIEW } from './organizations/who-overview';
export { CDC_GLOBAL_HEALTH } from './organizations/cdc-global-health';
export { GLOBAL_HEALTH_PARTNERSHIPS } from './organizations/global-health-partnerships';

// Content categories
export const GLOBAL_HEALTH_CATEGORIES = [
  'challenges',
  'infectious-diseases',
  'neglected-tropical-diseases',
  'vaccine-preventable',
  'maternal-child-health',
  'noncommunicable-diseases',
  'health-disparities',
  'social-determinants',
  'travel-health',
  'organizations',
] as const;

export type GlobalHealthCategory = (typeof GLOBAL_HEALTH_CATEGORIES)[number];

// All Global Health content for easy access
export const ALL_GLOBAL_HEALTH_CONTENT = [
  'global-health-challenges',
  'tuberculosis-global',
  'malaria-global',
  'hiv-aids-global',
  'emerging-infectious-diseases',
  'ntd-overview',
  'parasitic-ntds',
  'vector-borne-ntds',
  'vaccine-preventable-overview',
  'childhood-immunization-global',
  'vaccine-equity',
  'maternal-health-global',
  'child-health-global',
  'nutrition-global',
  'ncd-epidemic',
  'cardiovascular-disease-global',
  'diabetes-global',
  'cancer-global',
  'mental-health-global',
  'health-disparities-overview',
  'geographic-disparities',
  'economic-disparities',
  'sdoh-overview',
  'poverty-and-health',
  'education-and-health',
  'environment-and-health',
  'travel-health-overview',
  'travel-vaccinations-guide',
  'travel-risks-by-region',
  'returning-traveler',
  'who-overview',
  'cdc-global-health',
  'global-health-partnerships',
] as const;
