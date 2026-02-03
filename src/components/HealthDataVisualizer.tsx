/**
 * Health Data Visualizer Component
 *
 * Overlays patient health data on the 3D anatomy view using @react-three/drei's Html component.
 * Displays lab values on relevant organs, medication target indicators, and vital signs.
 *
 * Features:
 * - Lab value indicators on organs (kidney, liver, heart, pancreas, thyroid, bone)
 * - Visual encoding: green (normal), yellow (borderline), red (out of range), animated glow for critical
 * - Medication target indicators color-coded by medication class
 * - Vital signs overlay near relevant organs
 */

import React, { useRef, useMemo, memo, useState, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

import './HealthDataVisualizer.css';

// ============================================
// Types
// ============================================

export interface LabValue {
  id: string;
  name: string;
  shortName: string;
  value: number;
  unit: string;
  referenceRange: {
    low: number;
    high: number;
    criticalLow?: number;
    criticalHigh?: number;
  };
  collectedDate?: string;
}

export interface Medication {
  id: string;
  name: string;
  genericName?: string;
  drugClass: string;
  targetOrgans: string[];
  purpose?: string;
  dosage?: string;
}

export interface VitalSign {
  type: 'heartRate' | 'bloodPressure' | 'oxygenSaturation' | 'temperature' | 'respiratoryRate';
  value: number | { systolic: number; diastolic: number };
  unit: string;
  timestamp?: string;
}

export interface HealthData {
  // Lab values organized by organ
  kidneyLabs?: LabValue[];
  liverLabs?: LabValue[];
  heartLabs?: LabValue[];
  pancreasLabs?: LabValue[];
  thyroidLabs?: LabValue[];
  boneLabs?: LabValue[];

  // Medications
  medications?: Medication[];

  // Vital signs
  vitals?: VitalSign[];
}

export interface HealthDataVisualizerProps {
  healthData: HealthData;
  visible?: boolean;
  showLabValues?: boolean;
  showMedications?: boolean;
  showVitals?: boolean;
  onLabClick?: (lab: LabValue, organId: string) => void;
  onMedicationClick?: (medication: Medication) => void;
  onVitalClick?: (vital: VitalSign) => void;
}

// ============================================
// Constants
// ============================================

const ORGAN_POSITIONS: Record<string, THREE.Vector3Like> = {
  // Kidney positions (slightly offset left/right)
  'left-kidney': { x: 0.06, y: 0.28, z: 0.02 },
  'right-kidney': { x: -0.06, y: 0.28, z: 0.02 },
  kidney: { x: 0, y: 0.28, z: 0.02 },

  // Liver (right side)
  liver: { x: -0.05, y: 0.35, z: 0.06 },

  // Heart (center-left)
  heart: { x: 0.02, y: 0.55, z: 0.1 },

  // Pancreas (below stomach)
  pancreas: { x: 0.02, y: 0.3, z: 0.05 },

  // Thyroid (neck)
  thyroid: { x: 0, y: 0.68, z: 0.06 },

  // Bone/Skeletal (use spine area)
  bone: { x: 0, y: 0.4, z: -0.04 },

  // Lungs
  'left-lung': { x: 0.08, y: 0.55, z: 0.04 },
  'right-lung': { x: -0.08, y: 0.55, z: 0.04 },
  lungs: { x: 0, y: 0.55, z: 0.04 },

  // Major vessels (for blood pressure)
  'major-vessels': { x: 0.06, y: 0.5, z: 0.08 },
};

const STATUS_COLORS = {
  normal: '#22c55e',
  borderline: '#eab308',
  high: '#ef4444',
  low: '#f97316',
  critical: '#dc2626',
} as const;

const MEDICATION_CLASS_COLORS: Record<string, string> = {
  'ace-inhibitor': '#3b82f6',
  'arb': '#3b82f6',
  'beta-blocker': '#8b5cf6',
  'calcium-channel-blocker': '#ec4899',
  statin: '#f59e0b',
  anticoagulant: '#ef4444',
  antiplatelet: '#ef4444',
  diuretic: '#06b6d4',
  antidiabetic: '#22c55e',
  'thyroid-hormone': '#a855f7',
  bisphosphonate: '#78716c',
  antidepressant: '#6366f1',
  analgesic: '#f97316',
  antibiotic: '#10b981',
  default: '#6b7280',
};

const FLOAT_SPEED = 1.5;
const FLOAT_AMPLITUDE = 0.003;

// ============================================
// Utility Functions
// ============================================

function getLabStatus(
  value: number,
  referenceRange: LabValue['referenceRange']
): 'normal' | 'borderline' | 'high' | 'low' | 'critical' {
  const { low, high, criticalLow, criticalHigh } = referenceRange;

  // Check critical ranges first
  if (criticalHigh !== undefined && value >= criticalHigh) return 'critical';
  if (criticalLow !== undefined && value <= criticalLow) return 'critical';

  // Normal range
  if (value >= low && value <= high) return 'normal';

  // Borderline (within 10% of limits)
  const borderlineMargin = (high - low) * 0.1;
  if (value > high && value <= high + borderlineMargin) return 'borderline';
  if (value < low && value >= low - borderlineMargin) return 'borderline';

  // Out of range
  if (value > high) return 'high';
  if (value < low) return 'low';

  return 'normal';
}

function getStatusColor(status: ReturnType<typeof getLabStatus>): string {
  return STATUS_COLORS[status];
}

function getMedicationClassColor(drugClass: string): string {
  const normalizedClass = drugClass.toLowerCase().replace(/\s+/g, '-');
  return MEDICATION_CLASS_COLORS[normalizedClass] || MEDICATION_CLASS_COLORS.default;
}

function formatVitalValue(vital: VitalSign): string {
  if (vital.type === 'bloodPressure') {
    const bp = vital.value as { systolic: number; diastolic: number };
    return `${bp.systolic}/${bp.diastolic}`;
  }
  return String(vital.value);
}

function getVitalStatus(vital: VitalSign): 'normal' | 'borderline' | 'high' | 'low' | 'critical' {
  switch (vital.type) {
    case 'heartRate': {
      const hr = vital.value as number;
      if (hr < 40 || hr > 150) return 'critical';
      if (hr < 50 || hr > 100) return 'borderline';
      return 'normal';
    }
    case 'bloodPressure': {
      const bp = vital.value as { systolic: number; diastolic: number };
      if (bp.systolic >= 180 || bp.diastolic >= 120) return 'critical';
      if (bp.systolic >= 140 || bp.diastolic >= 90) return 'high';
      if (bp.systolic < 90 || bp.diastolic < 60) return 'low';
      if (bp.systolic >= 130 || bp.diastolic >= 85) return 'borderline';
      return 'normal';
    }
    case 'oxygenSaturation': {
      const spo2 = vital.value as number;
      if (spo2 < 90) return 'critical';
      if (spo2 < 95) return 'borderline';
      return 'normal';
    }
    case 'temperature': {
      const temp = vital.value as number;
      if (temp < 35 || temp > 40) return 'critical';
      if (temp < 36 || temp > 38) return 'borderline';
      return 'normal';
    }
    case 'respiratoryRate': {
      const rr = vital.value as number;
      if (rr < 8 || rr > 30) return 'critical';
      if (rr < 12 || rr > 20) return 'borderline';
      return 'normal';
    }
    default:
      return 'normal';
  }
}

// ============================================
// Lab Value Badge Component
// ============================================

interface LabValueBadgeProps {
  lab: LabValue;
  organId: string;
  index: number;
  onClick?: (lab: LabValue, organId: string) => void;
}

const LabValueBadge = memo(function LabValueBadge({
  lab,
  organId,
  index,
  onClick,
}: LabValueBadgeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [isHovered, setIsHovered] = useState(false);

  const status = useMemo(() => getLabStatus(lab.value, lab.referenceRange), [lab]);
  const color = useMemo(() => getStatusColor(status), [status]);
  const isCritical = status === 'critical';

  const position = useMemo(() => {
    const basePos = ORGAN_POSITIONS[organId] || { x: 0, y: 0.3, z: 0 };
    // Offset badges in a circular pattern around the organ
    const angle = (index * Math.PI) / 3 + Math.PI / 6;
    const radius = 0.035;
    return new THREE.Vector3(
      basePos.x + Math.cos(angle) * radius,
      basePos.y + 0.02 + index * 0.012,
      basePos.z + Math.sin(angle) * radius * 0.5
    );
  }, [organId, index]);

  // Animation
  useFrame((state) => {
    if (groupRef.current) {
      // Floating animation
      const floatOffset = Math.sin(state.clock.elapsedTime * FLOAT_SPEED + index * 0.5) * FLOAT_AMPLITUDE;
      groupRef.current.position.y = position.y + floatOffset;

      // Critical pulse animation
      if (isCritical) {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.15;
        groupRef.current.scale.setScalar(pulse);
      } else if (isHovered) {
        const hoverPulse = 1 + Math.sin(state.clock.elapsedTime * 5) * 0.1;
        groupRef.current.scale.setScalar(hoverPulse);
      } else {
        groupRef.current.scale.setScalar(1);
      }
    }
  });

  const handleClick = useCallback(() => {
    onClick?.(lab, organId);
  }, [onClick, lab, organId]);

  return (
    <group
      ref={groupRef}
      position={[position.x, position.y, position.z]}
    >
      <Html
        center
        distanceFactor={8}
        style={{ pointerEvents: 'auto' }}
        onClick={handleClick}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <div
          className={`health-data-badge lab-badge status-${status} ${isCritical ? 'critical-glow' : ''}`}
          style={{ '--badge-color': color } as React.CSSProperties}
        >
          <span className="badge-label">{lab.shortName}</span>
          <span className="badge-value">{lab.value}</span>
          <span className="badge-unit">{lab.unit}</span>
        </div>

        {/* Detailed tooltip on hover */}
        {isHovered && (
          <div className="badge-tooltip">
            <div className="tooltip-header">{lab.name}</div>
            <div className="tooltip-value">
              <span className={`status-indicator status-${status}`} />
              {lab.value} {lab.unit}
            </div>
            <div className="tooltip-range">
              Ref: {lab.referenceRange.low} - {lab.referenceRange.high} {lab.unit}
            </div>
            {lab.collectedDate && (
              <div className="tooltip-date">{lab.collectedDate}</div>
            )}
          </div>
        )}
      </Html>

      {/* Critical glow ring (3D effect) */}
      {isCritical && (
        <mesh>
          <ringGeometry args={[0.015, 0.025, 32]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.4}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </group>
  );
});

// ============================================
// Organ Labs Cluster Component
// ============================================

interface OrganLabsClusterProps {
  organId: string;
  labs: LabValue[];
  onLabClick?: (lab: LabValue, organId: string) => void;
}

const OrganLabsCluster = memo(function OrganLabsCluster({
  organId,
  labs,
  onLabClick,
}: OrganLabsClusterProps) {
  // Sort labs by status severity (critical first)
  const sortedLabs = useMemo(() => {
    const statusOrder = { critical: 0, high: 1, low: 2, borderline: 3, normal: 4 };
    return [...labs].sort((a, b) => {
      const statusA = getLabStatus(a.value, a.referenceRange);
      const statusB = getLabStatus(b.value, b.referenceRange);
      return statusOrder[statusA] - statusOrder[statusB];
    });
  }, [labs]);

  if (sortedLabs.length === 0) return null;

  return (
    <group name={`lab-cluster-${organId}`}>
      {sortedLabs.map((lab, index) => (
        <LabValueBadge
          key={lab.id}
          lab={lab}
          organId={organId}
          index={index}
          onClick={onLabClick}
        />
      ))}
    </group>
  );
});

// ============================================
// Medication Target Indicator Component
// ============================================

interface MedicationTargetIndicatorProps {
  medication: Medication;
  organId: string;
  index: number;
  totalMeds: number;
  onClick?: (medication: Medication) => void;
}

const MedicationTargetIndicator = memo(function MedicationTargetIndicator({
  medication,
  organId,
  index,
  totalMeds,
  onClick,
}: MedicationTargetIndicatorProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [isHovered, setIsHovered] = useState(false);

  const color = useMemo(
    () => getMedicationClassColor(medication.drugClass),
    [medication.drugClass]
  );

  const position = useMemo(() => {
    const basePos = ORGAN_POSITIONS[organId] || { x: 0, y: 0.3, z: 0 };
    // Position medications in an arc below the organ
    const angle = Math.PI + (index - (totalMeds - 1) / 2) * (Math.PI / 8);
    const radius = 0.045;
    return new THREE.Vector3(
      basePos.x + Math.cos(angle) * radius,
      basePos.y - 0.03,
      basePos.z + Math.sin(angle) * radius * 0.3 + 0.02
    );
  }, [organId, index, totalMeds]);

  // Animation
  useFrame((state) => {
    if (groupRef.current && isHovered) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.1;
      groupRef.current.scale.setScalar(pulse);
    } else if (groupRef.current) {
      groupRef.current.scale.setScalar(1);
    }
  });

  const handleClick = useCallback(() => {
    onClick?.(medication);
  }, [onClick, medication]);

  return (
    <group
      ref={groupRef}
      position={[position.x, position.y, position.z]}
    >
      {/* Medication pill icon (3D) */}
      <mesh>
        <capsuleGeometry args={[0.006, 0.012, 8, 8]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isHovered ? 0.6 : 0.3}
        />
      </mesh>

      <Html
        center
        distanceFactor={10}
        style={{ pointerEvents: 'auto' }}
        onClick={handleClick}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <div
          className={`health-data-badge medication-badge ${isHovered ? 'hovered' : ''}`}
          style={{ '--badge-color': color } as React.CSSProperties}
        >
          <span className="med-icon" style={{ backgroundColor: color }} />
          <span className="med-initial">{medication.name.charAt(0)}</span>
        </div>

        {/* Medication tooltip */}
        {isHovered && (
          <div className="badge-tooltip medication-tooltip">
            <div className="tooltip-header">{medication.name}</div>
            {medication.genericName && (
              <div className="tooltip-generic">({medication.genericName})</div>
            )}
            <div className="tooltip-class" style={{ color }}>
              {medication.drugClass}
            </div>
            {medication.purpose && (
              <div className="tooltip-purpose">{medication.purpose}</div>
            )}
            {medication.dosage && (
              <div className="tooltip-dosage">{medication.dosage}</div>
            )}
          </div>
        )}
      </Html>
    </group>
  );
});

// ============================================
// Organ Medication Targets Component
// ============================================

interface OrganMedicationTargetsProps {
  organId: string;
  medications: Medication[];
  onClick?: (medication: Medication) => void;
}

const OrganMedicationTargets = memo(function OrganMedicationTargets({
  organId,
  medications,
  onClick,
}: OrganMedicationTargetsProps) {
  if (medications.length === 0) return null;

  return (
    <group name={`medication-targets-${organId}`}>
      {medications.map((med, index) => (
        <MedicationTargetIndicator
          key={med.id}
          medication={med}
          organId={organId}
          index={index}
          totalMeds={medications.length}
          onClick={onClick}
        />
      ))}
    </group>
  );
});

// ============================================
// Vital Sign Indicator Component
// ============================================

interface VitalSignIndicatorProps {
  vital: VitalSign;
  onClick?: (vital: VitalSign) => void;
}

const VitalSignIndicator = memo(function VitalSignIndicator({
  vital,
  onClick,
}: VitalSignIndicatorProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [isHovered, setIsHovered] = useState(false);

  const status = useMemo(() => getVitalStatus(vital), [vital]);
  const color = useMemo(() => getStatusColor(status), [status]);
  const isCritical = status === 'critical';

  // Position based on vital type
  const position = useMemo(() => {
    switch (vital.type) {
      case 'heartRate':
        return new THREE.Vector3(0.06, 0.58, 0.12);
      case 'bloodPressure':
        return new THREE.Vector3(0.1, 0.52, 0.1);
      case 'oxygenSaturation':
        return new THREE.Vector3(-0.06, 0.58, 0.08);
      case 'temperature':
        return new THREE.Vector3(0, 0.9, 0.05);
      case 'respiratoryRate':
        return new THREE.Vector3(0, 0.52, 0.08);
      default:
        return new THREE.Vector3(0, 0.5, 0.1);
    }
  }, [vital.type]);

  const icon = useMemo(() => {
    switch (vital.type) {
      case 'heartRate':
        return { symbol: '&#9829;', label: 'HR' };
      case 'bloodPressure':
        return { symbol: '&#8651;', label: 'BP' };
      case 'oxygenSaturation':
        return { symbol: 'O2', label: 'SpO2' };
      case 'temperature':
        return { symbol: '&#127777;', label: 'Temp' };
      case 'respiratoryRate':
        return { symbol: '&#127788;', label: 'RR' };
      default:
        return { symbol: '?', label: '' };
    }
  }, [vital.type]);

  // Animation
  useFrame((state) => {
    if (groupRef.current) {
      // Heart rate specific animation
      if (vital.type === 'heartRate' && !isCritical) {
        const heartbeat = Math.sin(state.clock.elapsedTime * (vital.value as number / 60) * Math.PI * 2);
        const scale = 1 + heartbeat * 0.08;
        groupRef.current.scale.setScalar(scale);
      } else if (isCritical) {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 5) * 0.15;
        groupRef.current.scale.setScalar(pulse);
      } else if (isHovered) {
        const hoverPulse = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.08;
        groupRef.current.scale.setScalar(hoverPulse);
      } else {
        groupRef.current.scale.setScalar(1);
      }
    }
  });

  const handleClick = useCallback(() => {
    onClick?.(vital);
  }, [onClick, vital]);

  return (
    <group
      ref={groupRef}
      position={[position.x, position.y, position.z]}
    >
      <Html
        center
        distanceFactor={8}
        style={{ pointerEvents: 'auto' }}
        onClick={handleClick}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <div
          className={`health-data-badge vital-badge status-${status} ${isCritical ? 'critical-glow' : ''}`}
          style={{ '--badge-color': color } as React.CSSProperties}
        >
          <span className="vital-icon" dangerouslySetInnerHTML={{ __html: icon.symbol }} />
          <span className="vital-value">{formatVitalValue(vital)}</span>
          <span className="vital-unit">{vital.unit}</span>
        </div>

        {/* Vital tooltip */}
        {isHovered && (
          <div className="badge-tooltip vital-tooltip">
            <div className="tooltip-header">{icon.label}</div>
            <div className="tooltip-value">
              <span className={`status-indicator status-${status}`} />
              {formatVitalValue(vital)} {vital.unit}
            </div>
            <div className={`tooltip-status status-${status}`}>
              {status === 'normal' && 'Within normal range'}
              {status === 'borderline' && 'Borderline - monitor'}
              {status === 'high' && 'Above normal range'}
              {status === 'low' && 'Below normal range'}
              {status === 'critical' && 'Critical - immediate attention'}
            </div>
            {vital.timestamp && (
              <div className="tooltip-date">{vital.timestamp}</div>
            )}
          </div>
        )}
      </Html>

      {/* Critical glow effect */}
      {isCritical && (
        <mesh>
          <ringGeometry args={[0.018, 0.028, 32]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </group>
  );
});

// ============================================
// Vitals Overlay Component
// ============================================

interface VitalsOverlayProps {
  vitals: VitalSign[];
  onClick?: (vital: VitalSign) => void;
}

const VitalsOverlay = memo(function VitalsOverlay({
  vitals,
  onClick,
}: VitalsOverlayProps) {
  if (vitals.length === 0) return null;

  return (
    <group name="vitals-overlay">
      {vitals.map((vital) => (
        <VitalSignIndicator
          key={vital.type}
          vital={vital}
          onClick={onClick}
        />
      ))}
    </group>
  );
});

// ============================================
// Main Health Data Visualizer Component
// ============================================

export const HealthDataVisualizer = memo(function HealthDataVisualizer({
  healthData,
  visible = true,
  showLabValues = true,
  showMedications = true,
  showVitals = true,
  onLabClick,
  onMedicationClick,
  onVitalClick,
}: HealthDataVisualizerProps) {
  // Organize medications by target organ
  const medicationsByOrgan = useMemo(() => {
    const map = new Map<string, Medication[]>();
    if (!healthData.medications) return map;

    healthData.medications.forEach((med) => {
      med.targetOrgans.forEach((organId) => {
        const existing = map.get(organId) || [];
        existing.push(med);
        map.set(organId, existing);
      });
    });

    return map;
  }, [healthData.medications]);

  if (!visible) return null;

  return (
    <group name="health-data-visualizer">
      {/* Lab Value Badges */}
      {showLabValues && (
        <group name="lab-values">
          {/* Kidney Labs */}
          {healthData.kidneyLabs && healthData.kidneyLabs.length > 0 && (
            <OrganLabsCluster
              organId="kidney"
              labs={healthData.kidneyLabs}
              onLabClick={onLabClick}
            />
          )}

          {/* Liver Labs */}
          {healthData.liverLabs && healthData.liverLabs.length > 0 && (
            <OrganLabsCluster
              organId="liver"
              labs={healthData.liverLabs}
              onLabClick={onLabClick}
            />
          )}

          {/* Heart Labs */}
          {healthData.heartLabs && healthData.heartLabs.length > 0 && (
            <OrganLabsCluster
              organId="heart"
              labs={healthData.heartLabs}
              onLabClick={onLabClick}
            />
          )}

          {/* Pancreas Labs */}
          {healthData.pancreasLabs && healthData.pancreasLabs.length > 0 && (
            <OrganLabsCluster
              organId="pancreas"
              labs={healthData.pancreasLabs}
              onLabClick={onLabClick}
            />
          )}

          {/* Thyroid Labs */}
          {healthData.thyroidLabs && healthData.thyroidLabs.length > 0 && (
            <OrganLabsCluster
              organId="thyroid"
              labs={healthData.thyroidLabs}
              onLabClick={onLabClick}
            />
          )}

          {/* Bone Labs */}
          {healthData.boneLabs && healthData.boneLabs.length > 0 && (
            <OrganLabsCluster
              organId="bone"
              labs={healthData.boneLabs}
              onLabClick={onLabClick}
            />
          )}
        </group>
      )}

      {/* Medication Targets */}
      {showMedications && medicationsByOrgan.size > 0 && (
        <group name="medication-targets">
          {Array.from(medicationsByOrgan.entries()).map(([organId, meds]) => (
            <OrganMedicationTargets
              key={organId}
              organId={organId}
              medications={meds}
              onClick={onMedicationClick}
            />
          ))}
        </group>
      )}

      {/* Vital Signs Overlay */}
      {showVitals && healthData.vitals && healthData.vitals.length > 0 && (
        <VitalsOverlay
          vitals={healthData.vitals}
          onClick={onVitalClick}
        />
      )}
    </group>
  );
});

// ============================================
// Exports
// ============================================

export default HealthDataVisualizer;
