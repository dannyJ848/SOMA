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
] as const;
