/**
 * Emergency Warning Signs Type Definitions
 *
 * Extended types for emergency content with additional fields for
 * warning signs, immediate actions, and care-seeking guidance.
 */

import { EducationalContent, LevelContent } from '../types';

/**
 * Severity level for emergency conditions
 */
export type EmergencySeverity = 'life-threatening' | 'urgent' | 'emergent' | 'serious';

/**
 * Care level recommendations
 */
export type CareLevel = 'call-911' | 'emergency-room' | 'urgent-care' | 'primary-care' | 'self-care';

/**
 * Time window for seeking care
 */
export interface TimeWindow {
  description: string;
  maxMinutes?: number;
  maxHours?: number;
  maxDays?: number;
  rationale: string;
}

/**
 * Warning sign with specificity
 */
export interface WarningSigns {
  classic: string[];           // Typical presentations
  atypical: string[];          // Less common but important presentations
  redFlags: string[];          // Indicators of severe/life-threatening situation
  associatedSymptoms: string[];
}

/**
 * Immediate action to take
 */
export interface ImmediateAction {
  step: number;
  action: string;
  rationale: string;
  warnings?: string[];
  doNot?: string[];           // Things to avoid doing
}

/**
 * Risk factor for emergency condition
 */
export interface RiskFactor {
  factor: string;
  explanation: string;
  modifiable: boolean;
}

/**
 * Emergency condition content extension
 */
export interface EmergencyContent extends EducationalContent {
  emergencyType: 'cardiac' | 'respiratory' | 'neurological' | 'abdominal' |
                 'psychiatric' | 'pediatric' | 'obstetric' | 'metabolic' | 'trauma' | 'other';
  severity: EmergencySeverity;
  recommendedCareLevel: CareLevel;
  timeWindow: TimeWindow;
  warningSigns: WarningSigns;
  immediateActions: ImmediateAction[];
  riskFactors: RiskFactor[];
  mnemonics?: {
    name: string;
    meaning: string;
    letters: { letter: string; meaning: string }[];
  }[];
  differentialConsiderations?: string[];
  whenToUpgrade?: string[];   // Signs that situation is worsening
}

/**
 * Level content with emergency-specific additions
 */
export interface EmergencyLevelContent extends LevelContent {
  warningSignsExplanation: string;
  whatToDo: string;
  commonMistakes?: string[];
  reassurance?: string;       // Appropriate reassurance without minimizing
}

/**
 * Care decision guide entry
 */
export interface CareDecisionGuide {
  condition: string;
  symptoms: string[];
  call911If: string[];
  goToERIf: string[];
  urgentCareIf: string[];
  primaryCareIf: string[];
  selfCareIf: string[];
  neverIgnore: string[];
}

/**
 * Population-specific considerations
 */
export interface PopulationConsiderations {
  elderly?: string[];
  pediatric?: string[];
  pregnant?: string[];
  immunocompromised?: string[];
  diabetic?: string[];
  cardiac?: string[];
}

/**
 * First aid procedure
 */
export interface FirstAidProcedure {
  name: string;
  indication: string;
  steps: {
    step: number;
    instruction: string;
    detail?: string;
    image?: string;
  }[];
  warnings: string[];
  whenToStop: string[];
}

/**
 * Emergency contact information template
 */
export interface EmergencyContacts {
  emergency: string;          // 911 in US
  poisonControl: string;      // 1-800-222-1222 in US
  suicidePrevention: string;  // 988 in US
  domesticViolence: string;
  childAbuse: string;
}

/**
 * Default US emergency contacts
 */
export const US_EMERGENCY_CONTACTS: EmergencyContacts = {
  emergency: '911',
  poisonControl: '1-800-222-1222',
  suicidePrevention: '988',
  domesticViolence: '1-800-799-7233',
  childAbuse: '1-800-422-4453',
};
