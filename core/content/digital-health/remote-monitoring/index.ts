/**
 * Remote Patient Monitoring Educational Content
 *
 * Comprehensive content covering remote patient monitoring (RPM):
 * - RPM Basics: Fundamentals of remote monitoring programs
 * - Vital Signs Monitoring: Home monitoring of vital parameters
 * - Remote Patient Monitoring: Comprehensive RPM overview
 * - RPM Devices: Device types and technologies
 * - Chronic Care Remote: Remote monitoring for chronic conditions
 * - Home Monitoring: Home-based health surveillance
 * - Telehealth Technologies: Integration with telehealth
 */

import { EducationalContent } from '../../types';

// Export all content modules
export { rpmBasics } from './rpm-basics';
export { vitalSignsMonitoring } from './vital-signs-monitoring';
export { REMOTE_PATIENT_MONITORING } from './remote-patient-monitoring';
export { rpmDevices } from './rpm-devices';
export { chronicCareRemote } from './chronic-care-remote';
export { homeMonitoring } from './home-monitoring';

export const RPM_CONTENT_CATEGORIES = [
  'rpm-basics',
  'vital-signs',
  'rpm-overview',
  'devices',
  'chronic-care',
  'home-monitoring',
  'telehealth',
] as const;

export type RPMContentCategory = typeof RPM_CONTENT_CATEGORIES[number];

// Clinical relevance mapping
export const RPM_CLINICAL_PRIORITIES = {
  'rpm-basics': 'high',
  'vital-signs': 'critical',
  'rpm-overview': 'high',
  'devices': 'high',
  'chronic-care': 'high',
  'home-monitoring': 'high',
  'telehealth': 'high',
} as const;

// Content registry for programmatic access
export const RPM_CONTENT_REGISTRY = {
  'rpm-basics': ['setup', 'protocols', 'workflow'],
  'vital-signs': ['blood-pressure', 'heart-rate', 'oxygen-saturation', 'temperature'],
  'rpm-overview': ['program-design', 'implementation', 'outcomes'],
  'devices': ['bp-monitors', 'pulse-oximeters', 'scales', 'glucose-monitors'],
  'chronic-care': ['heart-failure', 'hypertension', 'copd', 'diabetes'],
  'home-monitoring': ['patient-engagement', 'data-collection', 'alerts'],
  'telehealth': ['video-visits', 'asynchronous', 'integration'],
} as const;

// All content exports
import rpmBasicsContent from './rpm-basics';
import vitalSignsMonitoringContent from './vital-signs-monitoring';
import { REMOTE_PATIENT_MONITORING } from './remote-patient-monitoring';

export const rpmContentModules = {
  rpmBasics: rpmBasicsContent,
  vitalSignsMonitoring: vitalSignsMonitoringContent,
  remotePatientMonitoring: REMOTE_PATIENT_MONITORING,
};

// Default export for convenience
export default rpmContentModules;
