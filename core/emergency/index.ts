/**
 * Emergency Response System - Biological Self
 *
 * LIFE-SAVING FIRST AID AND EMERGENCY PROTOCOLS
 *
 * DISCLAIMER: This is educational content only. In any emergency,
 * CALL 911 (or local emergency number) FIRST. This guide supplements
 * but does not replace professional medical training.
 */

// Core exports
export * from './types';

// NOTE: The following modules are planned for future implementation:
// - emergency-database
// - red-flags
// - protocols
// - anatomy-overlays
// - life-threatening
// - trauma
// - medical-emergencies
// - situational
// - emergency-checklist
// - supply-lists
// - emergency-contacts

/**
 * Emergency Response Priority Levels
 */
export enum EmergencyPriority {
  IMMEDIATE = 'IMMEDIATE',      // Life-threatening, call 911 NOW
  URGENT = 'URGENT',            // Serious, needs rapid attention
  PROMPT = 'PROMPT',            // Important, needs timely care
  NON_URGENT = 'NON_URGENT'     // Can wait for regular care
}

/**
 * Quick Action Interface
 */
export interface QuickAction {
  step: number;
  action: string;
  duration?: string;
  warning?: string;
  technique?: string;
}

/**
 * Emergency Protocol Interface
 */
export interface EmergencyProtocol {
  id: string;
  name: string;
  category: string;
  priority: EmergencyPriority;
  callEmergencyServices: boolean;
  recognitionSigns: string[];
  immediateActions: QuickAction[];
  doNot: string[];
  whenToCall911: string[];
  suppliesNeeded: string[];
  recoveryPosition?: string;
  anatomyOverlay?: AnatomyOverlay;
  videoConceptUrl?: string;
  additionalNotes?: string[];
}

/**
 * Anatomy Overlay for 3D visualization
 */
export interface AnatomyOverlay {
  affectedAreas: string[];
  highlightColor: string;
  annotations: AnatomyAnnotation[];
  viewAngles: string[];
}

export interface AnatomyAnnotation {
  structure: string;
  label: string;
  description: string;
  position: { x: number; y: number; z: number };
}

/**
 * Red Flag Symptom
 */
export interface RedFlag {
  symptom: string;
  possibleConditions: string[];
  urgency: EmergencyPriority;
  action: string;
  timeFrame: string;
}

/**
 * Main Emergency Response System Class
 */
export class EmergencyResponseSystem {
  private protocols: Map<string, EmergencyProtocol> = new Map();
  private redFlags: RedFlag[] = [];

  constructor() {
    this.initializeProtocols();
    this.initializeRedFlags();
  }

  private initializeProtocols(): void {
    // Protocols are loaded from individual modules
  }

  private initializeRedFlags(): void {
    // Red flags are loaded from red-flags module
  }

  /**
   * Get protocol by ID
   */
  getProtocol(id: string): EmergencyProtocol | undefined {
    return this.protocols.get(id);
  }

  /**
   * Search protocols by symptom or keyword
   */
  searchProtocols(query: string): EmergencyProtocol[] {
    const results: EmergencyProtocol[] = [];
    const lowerQuery = query.toLowerCase();

    this.protocols.forEach((protocol) => {
      const matchesName = protocol.name.toLowerCase().includes(lowerQuery);
      const matchesSigns = protocol.recognitionSigns.some(
        sign => sign.toLowerCase().includes(lowerQuery)
      );

      if (matchesName || matchesSigns) {
        results.push(protocol);
      }
    });

    return results.sort((a, b) => {
      const priorityOrder = {
        [EmergencyPriority.IMMEDIATE]: 0,
        [EmergencyPriority.URGENT]: 1,
        [EmergencyPriority.PROMPT]: 2,
        [EmergencyPriority.NON_URGENT]: 3
      };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  }

  /**
   * Check symptoms against red flags
   */
  checkRedFlags(symptoms: string[]): RedFlag[] {
    const matches: RedFlag[] = [];

    symptoms.forEach(symptom => {
      const lowerSymptom = symptom.toLowerCase();
      this.redFlags.forEach(flag => {
        if (flag.symptom.toLowerCase().includes(lowerSymptom) ||
            lowerSymptom.includes(flag.symptom.toLowerCase())) {
          matches.push(flag);
        }
      });
    });

    return matches.sort((a, b) => {
      const priorityOrder = {
        [EmergencyPriority.IMMEDIATE]: 0,
        [EmergencyPriority.URGENT]: 1,
        [EmergencyPriority.PROMPT]: 2,
        [EmergencyPriority.NON_URGENT]: 3
      };
      return priorityOrder[a.urgency] - priorityOrder[b.urgency];
    });
  }

  /**
   * Get all protocols by category
   */
  getByCategory(category: string): EmergencyProtocol[] {
    const results: EmergencyProtocol[] = [];
    this.protocols.forEach((protocol) => {
      if (protocol.category === category) {
        results.push(protocol);
      }
    });
    return results;
  }

  /**
   * Get emergency contacts template
   */
  getEmergencyContactsTemplate(): EmergencyContacts {
    return {
      emergency: '911',
      poisonControl: '1-800-222-1222',
      localHospital: '',
      primaryDoctor: '',
      localUrgentCare: '',
      pharmacist: '',
      familyContact1: '',
      familyContact2: ''
    };
  }
}

export interface EmergencyContacts {
  emergency: string;
  poisonControl: string;
  localHospital: string;
  primaryDoctor: string;
  localUrgentCare: string;
  pharmacist: string;
  familyContact1: string;
  familyContact2: string;
}

// Default export
export default EmergencyResponseSystem;
