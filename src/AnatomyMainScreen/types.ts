/**
 * Health Overlay Types
 *
 * Type definitions for the Health Overlay visualization system
 * that displays patient data on the 3D anatomy model.
 */

import type * as THREE from 'three';

// ============================================
// Patient Data Types
// ============================================

/**
 * Core patient health data structure
 * Contains all medical information needed for visualization
 */
export interface BiologicalSelf {
  patientId: string;

  // Active medical conditions
  conditions: PatientCondition[];

  // Current symptoms being experienced
  symptoms: PatientSymptom[];

  // Lab results and test values
  labResults: LabResult[];

  // Current medications
  medications: PatientMedication[];

  // Vital signs
  vitals?: VitalSigns;
}

export interface PatientCondition {
  id: string;
  name: string;
  status: 'active' | 'managed' | 'resolved' | 'chronic';
  severity: 'mild' | 'moderate' | 'severe';
  onsetDate?: string;
  affectedRegions: string[];  // Body region IDs
  affectedOrgans: string[];   // Organ IDs
  icdCode?: string;
}

export interface PatientSymptom {
  id: string;
  description: string;
  severity: number;  // 1-10 scale
  location: string;  // Body region or organ ID
  onsetDate?: string;
  frequency?: 'constant' | 'intermittent' | 'episodic';
  character?: string;  // Description of symptom quality
}

export interface LabResult {
  id: string;
  testName: string;
  value: number | string;
  unit: string;
  referenceRange: {
    low: number;
    high: number;
  };
  status: 'normal' | 'high' | 'low' | 'critical-high' | 'critical-low';
  collectedDate: string;
  relatedOrgan?: string;  // Organ this lab relates to
  loincCode?: string;      // LOINC code for standardized lab identification
}

export interface PatientMedication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  indication?: string;
  targetOrgans: string[];    // Organs this medication affects
  targetSystems: string[];   // Body systems this medication affects
  startDate?: string;
}

export interface VitalSigns {
  heartRate?: number;
  bloodPressure?: {
    systolic: number;
    diastolic: number;
  };
  respiratoryRate?: number;
  temperature?: number;
  oxygenSaturation?: number;
}

// ============================================
// Bridge Types - Mapping Patient Data to Anatomy
// ============================================

/**
 * Bridge between patient data and 3D anatomy regions
 * Maps medical data to anatomical visualization regions
 */
export interface AnatomyPatientBridge {
  // Conditions grouped by affected anatomical region
  conditionsByRegion: Map<string, RegionCondition[]>;

  // Symptoms grouped by their location
  symptomsByRegion: Map<string, RegionSymptom[]>;

  // Lab results grouped by related organ
  labsByOrgan: Map<string, OrganLab[]>;

  // Medication effects grouped by target organ
  medicationTargets: Map<string, MedicationTarget[]>;
}

export interface RegionCondition {
  condition: PatientCondition;
  highlightIntensity: number;  // 0-1 based on severity
  color: string;
  isPrimary: boolean;  // Primary affected region vs secondary
}

export interface RegionSymptom {
  symptom: PatientSymptom;
  indicatorSize: number;   // Size based on severity
  indicatorColor: string;
  position?: THREE.Vector3Like;  // Optional 3D position offset
}

export interface OrganLab {
  lab: LabResult;
  direction: 'up' | 'down' | 'normal';
  urgency: 'routine' | 'attention' | 'urgent';
}

export interface MedicationTarget {
  medication: PatientMedication;
  effectType: 'therapeutic' | 'side-effect' | 'protective';
  isPrimaryTarget: boolean;
}

// ============================================
// Visualization Options Types
// ============================================

export interface HighlightOptions {
  color: THREE.ColorRepresentation;
  intensity: number;      // 0-1
  pulseSpeed: number;     // Pulse frequency
  pulseEnabled: boolean;
  opacity: number;
  emissive?: boolean;
}

export interface IndicatorOptions {
  size: number;
  color: THREE.ColorRepresentation;
  position: THREE.Vector3Like;
  type: 'sphere' | 'icon' | 'badge';
  label?: string;
  pulseEnabled?: boolean;
}

export interface BadgeOptions {
  position: THREE.Vector3Like;
  direction: 'up' | 'down';
  value: string;
  color: THREE.ColorRepresentation;
  size: number;
}

// ============================================
// Component Props Types
// ============================================

export interface HealthOverlayProps {
  patientData: BiologicalSelf;
  anatomyBridge?: AnatomyPatientBridge;
  visible?: boolean;
  onRegionHover?: (regionId: string | null) => void;
  onRegionClick?: (regionId: string) => void;
}

export interface ConditionHighlightsProps {
  conditions: Map<string, RegionCondition[]>;
  visible?: boolean;
  animationEnabled?: boolean;
}

export interface SymptomIndicatorsProps {
  symptoms: Map<string, RegionSymptom[]>;
  visible?: boolean;
  showLabels?: boolean;
}

export interface LabBadgesProps {
  labs: Map<string, OrganLab[]>;
  visible?: boolean;
  showOnlyAbnormal?: boolean;
}

export interface MedicationTargetsProps {
  medications: Map<string, MedicationTarget[]>;
  visible?: boolean;
  highlightMode: 'always' | 'hover' | 'toggle';
}

// ============================================
// Severity/Status Color Mappings
// ============================================

export const SEVERITY_COLORS = {
  mild: '#FFD93D',      // Yellow
  moderate: '#FF9F43',  // Orange
  severe: '#FF6B6B',    // Red
} as const;

export const LAB_STATUS_COLORS = {
  normal: '#4CAF50',        // Green
  high: '#FF9F43',          // Orange
  low: '#2196F3',           // Blue
  'critical-high': '#FF6B6B', // Red
  'critical-low': '#9C27B0',  // Purple
} as const;

export const MEDICATION_EFFECT_COLORS = {
  therapeutic: '#4CAF50',   // Green
  'side-effect': '#FF9F43', // Orange
  protective: '#2196F3',    // Blue
} as const;

// ============================================
// Default Configuration
// ============================================

export const DEFAULT_HIGHLIGHT_OPTIONS: HighlightOptions = {
  color: '#FFD93D',
  intensity: 0.5,
  pulseSpeed: 1,
  pulseEnabled: true,
  opacity: 0.6,
  emissive: true,
};

export const DEFAULT_INDICATOR_OPTIONS: Omit<IndicatorOptions, 'position'> = {
  size: 0.02,
  color: '#FF6B6B',
  type: 'sphere',
  pulseEnabled: true,
};

export const DEFAULT_BADGE_OPTIONS: Omit<BadgeOptions, 'position' | 'direction' | 'value'> = {
  color: '#FF9F43',
  size: 0.015,
};
