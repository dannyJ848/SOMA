/**
 * Surgery Content Type Definitions
 *
 * Extended types for surgical content with additional fields specific
 * to surgical procedures, recovery, and patient preparation.
 */

import { EducationalContent, LevelContent } from '../types';

/**
 * Surgery types/categories
 */
export type SurgeryCategory =
  | 'preparation'
  | 'anesthesia'
  | 'procedures'
  | 'post-operative'
  | 'complications'
  | 'wound-care'
  | 'equipment'
  | 'decision-making';

/**
 * Surgery urgency levels
 */
export type SurgeryUrgency = 'elective' | 'urgent' | 'emergent';

/**
 * Surgery invasiveness
 */
export type SurgeryInvasiveness = 'open' | 'minimally-invasive' | 'robotic' | 'endoscopic' | 'percutaneous';

/**
 * Anesthesia type
 */
export type AnesthesiaType = 'general' | 'regional' | 'local' | 'sedation' | 'combined';

/**
 * Recovery phase
 */
export type RecoveryPhase = 'immediate' | 'early' | 'intermediate' | 'late' | 'full';

/**
 * Pre-operative checklist item
 */
export interface PreOperativeItem {
  item: string;
  description: string;
  timing: string;
  mandatory: boolean;
  exceptions?: string[];
}

/**
 * Surgical risk factor
 */
export interface SurgicalRiskFactor {
  factor: string;
  description: string;
  impact: 'low' | 'moderate' | 'high';
  mitigation?: string;
}

/**
 * Post-operative instruction
 */
export interface PostOperativeInstruction {
  category: 'activity' | 'diet' | 'medication' | 'wound-care' | 'follow-up' | 'warning-signs';
  instruction: string;
  duration?: string;
  rationale: string;
}

/**
 * Complication with risk level
 */
export interface SurgicalComplication {
  name: string;
  description: string;
  incidence: string;
  timing: string;
  warningSigns: string[];
  management: string;
  prevention?: string;
}

/**
 * Wound healing stage
 */
export interface WoundHealingStage {
  name: string;
  duration: string;
  processes: string[];
  cellsInvolved: string[];
  clinicalFeatures: string[];
  nursingCare: string[];
}

/**
 * Suture type information
 */
export interface SutureType {
  name: string;
  material: 'absorbable' | 'non-absorbable';
  composition: string;
  absorption?: string;
  commonUses: string[];
  advantages: string[];
  disadvantages: string[];
}

/**
 * Surgical drain type
 */
export interface DrainType {
  name: string;
  mechanism: 'passive' | 'active';
  description: string;
  indications: string[];
  care: string[];
  removalCriteria: string[];
}

/**
 * Surgery content extension
 */
export interface SurgeryContent extends EducationalContent {
  surgeryCategory: SurgeryCategory;
  relatedProcedures?: string[];
  patientHandouts?: {
    title: string;
    audience: 'patient' | 'caregiver' | 'both';
    filename?: string;
  }[];
}

/**
 * Procedure-specific content
 */
export interface ProcedureContent extends SurgeryContent {
  procedureName: string;
  alternateNames?: string[];
  urgency: SurgeryUrgency[];
  invasiveness: SurgeryInvasiveness;
  anesthesiaOptions: AnesthesiaType[];
  averageDuration: string;
  hospitalStay: string;
  recoveryTime: string;
  preOperativePrep: PreOperativeItem[];
  riskFactors: SurgicalRiskFactor[];
  potentialComplications: SurgicalComplication[];
  postOperativeInstructions: PostOperativeInstruction[];
}

/**
 * Consent discussion points
 */
export interface InformedConsentItem {
  topic: string;
  patientExplanation: string;
  keyPoints: string[];
  questionsToExpect: string[];
}

/**
 * Surgery decision matrix
 */
export interface SurgeryDecisionCriteria {
  condition: string;
  surgeryIndications: string[];
  conservativeIndications: string[];
  urgentSurgeryTriggers: string[];
  contraindications: string[];
  sharedDecisionFactors: string[];
}
