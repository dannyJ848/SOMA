/**
 * Emergency Response Type Definitions
 * Biological Self - First Aid System
 */

/**
 * Emergency Priority Levels
 */
export enum EmergencyPriority {
  IMMEDIATE = 'IMMEDIATE',      // Life-threatening - CALL 911 NOW
  URGENT = 'URGENT',            // Serious - needs rapid medical attention
  PROMPT = 'PROMPT',            // Important - needs timely care
  NON_URGENT = 'NON_URGENT'     // Can wait for regular care
}

/**
 * Emergency Categories
 */
export enum EmergencyCategory {
  LIFE_THREATENING = 'life-threatening',
  TRAUMA = 'trauma',
  MEDICAL = 'medical',
  SITUATIONAL = 'situational',
  ENVIRONMENTAL = 'environmental'
}

/**
 * Age Groups for protocols
 */
export enum AgeGroup {
  INFANT = 'infant',        // 0-12 months
  CHILD = 'child',          // 1-8 years
  ADULT = 'adult',          // 8+ years
  ELDERLY = 'elderly',      // 65+ years
  ALL = 'all'
}

/**
 * Step in emergency protocol
 */
export interface EmergencyStep {
  step: number;
  action: string;
  duration?: string;
  repetitions?: number | string;
  warning?: string;
  technique?: string;
  visualCue?: string;
  audioInstructions?: string;
}

/**
 * 3D Anatomy overlay configuration
 */
export interface AnatomyOverlay {
  affectedAreas: string[];
  highlightColor: string;
  annotations: AnatomyAnnotation[];
  viewAngles: ViewAngle[];
  animationSequence?: AnimationStep[];
}

export interface AnatomyAnnotation {
  structure: string;
  label: string;
  description: string;
  position: Position3D;
  markerType?: 'point' | 'area' | 'line';
}

export interface Position3D {
  x: number;
  y: number;
  z: number;
}

export interface ViewAngle {
  name: string;
  rotation: Position3D;
  zoom: number;
  description: string;
}

export interface AnimationStep {
  frame: number;
  description: string;
  highlightedStructures: string[];
  cameraPosition?: Position3D;
}

/**
 * Video/Animation concept for learning
 */
export interface VideoAnimationConcept {
  title: string;
  duration: string;
  keyFrames: KeyFrame[];
  narration: string[];
  interactiveElements?: InteractiveElement[];
}

export interface KeyFrame {
  timestamp: string;
  description: string;
  visualElements: string[];
  audioNarration: string;
}

export interface InteractiveElement {
  type: 'quiz' | 'practice' | 'demo';
  timestamp: string;
  content: string;
  correctResponse?: string;
}

/**
 * First Aid Supply
 */
export interface FirstAidSupply {
  name: string;
  quantity: number;
  usage: string;
  alternatives?: string[];
  criticalFor?: string[];
}

/**
 * Complete Emergency Protocol
 */
export interface EmergencyProtocol {
  // Identity
  id: string;
  name: string;
  alternateNames?: string[];
  category: EmergencyCategory;
  priority: EmergencyPriority;
  ageGroup: AgeGroup;

  // When to act
  callEmergencyServices: boolean;
  emergencyNumber: string;

  // Recognition
  recognitionSigns: RecognitionSign[];
  differentialDiagnosis?: string[];

  // Actions
  immediateActions: EmergencyStep[];
  doNot: DoNotItem[];
  whenToCall911: string[];

  // Resources
  suppliesNeeded: FirstAidSupply[];
  improvizedSupplies?: string[];

  // Recovery
  recoveryPosition?: RecoveryPosition;
  aftercare?: string[];
  followUp?: string[];

  // Visualization
  anatomyOverlay?: AnatomyOverlay;
  videoAnimationConcept?: VideoAnimationConcept;
  diagrams?: Diagram[];

  // Additional info
  statistics?: string[];
  preventionTips?: string[];
  additionalNotes?: string[];
  references?: string[];
}

export interface RecognitionSign {
  sign: string;
  description: string;
  severity: 'mild' | 'moderate' | 'severe' | 'critical';
  visualCue?: string;
}

export interface DoNotItem {
  action: string;
  reason: string;
  consequence?: string;
}

export interface RecoveryPosition {
  name: string;
  description: string;
  steps: string[];
  contraindications?: string[];
  diagram?: string;
}

export interface Diagram {
  title: string;
  description: string;
  svgPath?: string;
  imageUrl?: string;
}

/**
 * Red Flag Symptom Definition
 */
export interface RedFlag {
  id: string;
  symptom: string;
  description: string;
  possibleConditions: string[];
  urgency: EmergencyPriority;
  action: string;
  timeFrame: string;
  relatedProtocols: string[];
  ageSpecific?: AgeSpecificRedFlag[];
}

export interface AgeSpecificRedFlag {
  ageGroup: AgeGroup;
  modification: string;
  urgency?: EmergencyPriority;
}

/**
 * Emergency Checklist
 */
export interface EmergencyChecklist {
  title: string;
  category: EmergencyCategory;
  items: ChecklistItem[];
  printable: boolean;
}

export interface ChecklistItem {
  item: string;
  checked: boolean;
  notes?: string;
  critical?: boolean;
}

/**
 * Emergency Contact Entry
 */
export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
  alternatePhone?: string;
  address?: string;
  notes?: string;
}

/**
 * Personal Emergency Profile
 */
export interface EmergencyProfile {
  personalInfo: {
    name: string;
    dateOfBirth: string;
    bloodType?: string;
    allergies: string[];
    medications: string[];
    medicalConditions: string[];
    emergencyContacts: EmergencyContact[];
  };
  medicalId?: {
    number: string;
    provider: string;
  };
  advanceDirectives?: {
    dnar?: boolean;
    healthcareProxy?: string;
    livingWill?: boolean;
  };
  physicalLocation?: {
    address: string;
    nearestHospital: string;
    nearestTraumaCenter?: string;
  };
}

/**
 * Scene Assessment
 */
export interface SceneAssessment {
  isSafe: boolean;
  hazards: string[];
  numberOfVictims: number;
  resourcesNeeded: string[];
  accessRoutes: string[];
  additionalHelp: string[];
}

/**
 * Patient Assessment (Primary Survey)
 */
export interface PrimarySurvey {
  timestamp: Date;
  airway: {
    status: 'clear' | 'partial' | 'obstructed';
    intervention?: string;
  };
  breathing: {
    present: boolean;
    rate?: number;
    quality?: 'normal' | 'labored' | 'shallow' | 'absent';
    intervention?: string;
  };
  circulation: {
    pulse: boolean;
    rate?: number;
    quality?: 'strong' | 'weak' | 'thready' | 'absent';
    bleeding?: 'none' | 'controlled' | 'uncontrolled';
    intervention?: string;
  };
  disability: {
    conscious: boolean;
    responseLevel?: 'alert' | 'verbal' | 'pain' | 'unresponsive';
    pupils?: 'equal' | 'unequal' | 'dilated' | 'constricted';
  };
  exposure: {
    injuries: string[];
    temperature?: 'normal' | 'hot' | 'cold';
    environmentalFactors?: string[];
  };
}

/**
 * Triage Category (Mass Casualty)
 */
export enum TriageCategory {
  IMMEDIATE = 'RED',      // Life-threatening, immediate treatment
  DELAYED = 'YELLOW',     // Serious but can wait
  MINOR = 'GREEN',        // Walking wounded
  EXPECTANT = 'BLACK'     // Unlikely to survive
}

export interface TriageAssessment {
  category: TriageCategory;
  canWalk: boolean;
  breathing: boolean;
  respiratoryRate?: number;
  perfusion: boolean;
  mentalStatus: boolean;
  notes: string;
}
