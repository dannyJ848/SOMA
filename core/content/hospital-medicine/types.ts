/**
 * Hospital Medicine Content Types
 *
 * Extended types for hospital medicine content including
 * admission processes, team roles, procedures, and safety protocols.
 */

import { EducationalContent, LevelContent } from '../types';

/**
 * Hospital care phase
 */
export type HospitalPhase = 'pre-admission' | 'admission' | 'inpatient' | 'discharge' | 'post-discharge';

/**
 * Risk level for hospital procedures/situations
 */
export type RiskLevel = 'low' | 'moderate' | 'high' | 'critical';

/**
 * Team member role category
 */
export type TeamRoleCategory =
  | 'physician'
  | 'nursing'
  | 'pharmacy'
  | 'therapy'
  | 'social-services'
  | 'ancillary'
  | 'administration';

/**
 * Hospital team member information
 */
export interface TeamMemberRole {
  title: string;
  category: TeamRoleCategory;
  abbreviation?: string;
  description: string;
  responsibilities: string[];
  patientInteraction: string;
  whenToContact: string[];
  levelOfTraining: string;
}

/**
 * Hospital procedure information
 */
export interface HospitalProcedure {
  name: string;
  alternateNames?: string[];
  purpose: string;
  indication: string[];
  contraindications: string[];
  risks: {
    risk: string;
    frequency: 'common' | 'uncommon' | 'rare';
    severity: RiskLevel;
  }[];
  preparation: string[];
  procedure: string[];
  aftercare: string[];
  duration?: string;
  anesthesia?: 'none' | 'local' | 'sedation' | 'general';
  consent: boolean;
}

/**
 * Safety protocol information
 */
export interface SafetyProtocol {
  name: string;
  purpose: string;
  targetCondition: string;
  riskFactors: string[];
  preventionMeasures: string[];
  patientRole: string[];
  staffRole: string[];
  monitoringFrequency?: string;
  warningSignsToReport: string[];
}

/**
 * Medication reconciliation item
 */
export interface MedicationReconciliationItem {
  category: string;
  questions: string[];
  importance: string;
  commonIssues: string[];
}

/**
 * Discharge planning element
 */
export interface DischargePlanningElement {
  element: string;
  description: string;
  responsibleParty: string;
  patientChecklist: string[];
  redFlags: string[];
}

/**
 * Hospital admission step
 */
export interface AdmissionStep {
  step: number;
  name: string;
  description: string;
  whatToExpect: string;
  patientTips: string[];
  documentsNeeded?: string[];
  duration?: string;
}

/**
 * IV access type information
 */
export interface IVAccessType {
  name: string;
  abbreviation: string;
  description: string;
  indications: string[];
  location: string[];
  duration: string;
  insertedBy: string;
  riskLevel: RiskLevel;
  complications: string[];
  care: string[];
}

/**
 * Hospital-acquired infection type
 */
export interface HospitalInfectionType {
  name: string;
  abbreviation?: string;
  organism?: string[];
  riskFactors: string[];
  prevention: string[];
  symptoms: string[];
  patientActions: string[];
}

/**
 * Fall risk factor
 */
export interface FallRiskFactor {
  factor: string;
  category: 'intrinsic' | 'extrinsic' | 'situational';
  modifiable: boolean;
  interventions: string[];
}

/**
 * DVT prophylaxis method
 */
export interface DVTProphylaxisMethod {
  method: string;
  type: 'mechanical' | 'pharmacological' | 'ambulation';
  description: string;
  contraindications: string[];
  patientInstructions: string[];
}

/**
 * Patient safety domain
 */
export interface PatientSafetyDomain {
  domain: string;
  description: string;
  patientRights: string[];
  speakUpActions: string[];
  redFlags: string[];
}

/**
 * Extended hospital content with additional metadata
 */
export interface HospitalMedicineContent extends EducationalContent {
  hospitalPhase?: HospitalPhase[];
  patientActionable: boolean; // Whether patient can take direct action
  caregiverRelevant: boolean; // Relevant for family/caregivers
  commonQuestions?: {
    question: string;
    answer: string;
  }[];
}

/**
 * Hospital medicine module categories
 */
export const HOSPITAL_MEDICINE_CATEGORIES = [
  'admission-process',
  'care-team',
  'procedures',
  'iv-therapy',
  'infection-prevention',
  'discharge-planning',
  'medication-safety',
  'fall-prevention',
  'dvt-prevention',
  'patient-safety',
] as const;

export type HospitalMedicineCategory = (typeof HOSPITAL_MEDICINE_CATEGORIES)[number];
