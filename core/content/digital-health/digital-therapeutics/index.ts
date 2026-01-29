/**
 * Digital Therapeutics Educational Content
 *
 * Comprehensive content covering digital therapeutics (DTx):
 * - DTx Overview: Definitions, regulations, and clinical applications
 * - Mental Health Apps: Digital interventions for psychological conditions
 * - Prescription Apps: FDA-cleared prescription digital therapeutics
 * - Digital Biomarkers: Measurement and validation of digital biomarkers
 * - Clinical Validation: Evidence requirements for DTx
 * - Chronic Disease Management: Apps for chronic condition management
 * - Prescription Digital Therapeutics: Detailed coverage of PDTs
 */

import { EducationalContent } from '../../types';

// Export all content modules
export { dtxOverview } from './dtx-overview';
export { MENTAL_HEALTH_APPS } from './mental-health-apps';
export { prescriptionApps } from './prescription-apps';
export { digitalBiomarkers } from './digital-biomarkers';
export { clinicalValidation } from './clinical-validation';

export const DTX_CONTENT_CATEGORIES = [
  'dtx-overview',
  'mental-health',
  'prescription-dtx',
  'chronic-disease',
  'behavioral-health',
  'sleep-disorders',
  'substance-use',
  'clinical-validation',
  'digital-biomarkers',
] as const;

export type DTxContentCategory = typeof DTX_CONTENT_CATEGORIES[number];

// Clinical relevance mapping
export const DTX_CLINICAL_PRIORITIES = {
  'dtx-overview': 'high',
  'mental-health': 'high',
  'prescription-dtx': 'high',
  'chronic-disease': 'high',
  'behavioral-health': 'high',
  'sleep-disorders': 'high',
  'substance-use': 'high',
  'clinical-validation': 'medium',
  'digital-biomarkers': 'medium',
} as const;

// Content registry for programmatic access
export const DTX_CONTENT_REGISTRY = {
  'dtx-overview': ['regulations', 'evidence-requirements', 'reimbursement'],
  'mental-health': ['anxiety', 'depression', 'insomnia', 'ptsd'],
  'prescription-dtx': ['fda-cleared', 'prescription-process', 'clinical-use'],
  'chronic-disease': ['diabetes', 'cardiovascular', 'respiratory'],
  'behavioral-health': ['smoking-cessation', 'weight-management', 'adherence'],
  'sleep-disorders': ['insomnia', 'cbt-i', 'sleep-hygiene'],
  'substance-use': ['opioid-use', 'alcohol-use', 'harm-reduction'],
  'clinical-validation': ['rcts', 'endpoints', 'regulatory-pathways'],
  'digital-biomarkers': ['measurement', 'validation', 'clinical-utility'],
} as const;

// All content exports
import dtxOverviewContent from './dtx-overview';
import { MENTAL_HEALTH_APPS } from './mental-health-apps';

export const dtxContentModules = {
  dtxOverview: dtxOverviewContent,
  mentalHealthApps: MENTAL_HEALTH_APPS,
};

// Default export for convenience
export default dtxContentModules;
