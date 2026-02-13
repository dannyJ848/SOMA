/**
 * Healthcare Navigation Content Module
 *
 * Comprehensive educational content empowering patients to navigate the
 * healthcare system effectively, including understanding providers,
 * insurance, hospital care, emergencies, and self-advocacy.
 *
 * Categories:
 * - basics: Understanding the healthcare system structure
 * - finding-providers: Choosing and evaluating healthcare providers
 * - insurance-basics: Coverage, networks, and costs
 * - appointments: Scheduling and preparing for visits
 * - medical-records: Accessing and understanding health information
 * - second-opinions: When and how to seek additional medical opinions
 * - hospital-navigation: Inpatient care and hospital systems
 * - emergency-vs-urgent: Choosing appropriate care settings
 * - advocacy: Self-advocacy skills and patient rights
 */

export { healthcareBasicsContent } from './basics';
export { findingProvidersContent } from './finding-providers';
export { insuranceBasicsContent } from './insurance-basics';
export { appointmentsContent } from './appointments';
export { medicalRecordsContent } from './medical-records';
export { secondOpinionsContent } from './second-opinions';
export { hospitalNavigationContent } from './hospital-navigation';
export { emergencyVsUrgentContent } from './emergency-vs-urgent';
export { advocacyContent } from './advocacy';
export { freeLowCostClinicsContent } from './free-low-cost-clinics';
export { communityHealthCentersContent } from './community-health-centers';
export { prescriptionAssistanceContent } from './prescription-assistance';
export { languageServicesContent } from './language-services';
export { preparingForVisitsContent } from './preparing-for-visits';
export { understandingMedicalBillsContent } from './understanding-medical-bills';
export { financialAssistanceContent } from './financial-assistance';
export { medicaidChipGuideContent } from './medicaid-chip-guide';
export { marketplaceInsuranceContent } from './marketplace-insurance';
export { patientRightsSimpleContent } from './patient-rights-simple';

// Content categories
export const HEALTHCARE_NAVIGATION_CATEGORIES = [
  'basics',
  'finding-providers',
  'insurance-basics',
  'appointments',
  'medical-records',
  'second-opinions',
  'hospital-navigation',
  'emergency-vs-urgent',
  'advocacy',
  'free-low-cost-clinics',
  'community-health-centers',
  'prescription-assistance',
  'language-services',
  'preparing-for-visits',
  'understanding-medical-bills',
  'financial-assistance',
  'medicaid-chip-guide',
  'marketplace-insurance',
  'patient-rights-simple',
] as const;

export type HealthcareNavigationCategory = (typeof HEALTHCARE_NAVIGATION_CATEGORIES)[number];

// All healthcare navigation content for easy access
export const ALL_HEALTHCARE_NAVIGATION_CONTENT = [
  'healthcare-basics',
  'finding-providers',
  'insurance-basics',
  'appointments',
  'medical-records',
  'second-opinions',
  'hospital-navigation',
  'emergency-vs-urgent',
  'advocacy',
  'free-low-cost-clinics',
  'community-health-centers',
  'prescription-assistance',
  'language-services',
  'preparing-for-visits',
  'understanding-medical-bills',
  'financial-assistance',
  'medicaid-chip-guide',
  'marketplace-insurance',
  'patient-rights-simple',
] as const;
