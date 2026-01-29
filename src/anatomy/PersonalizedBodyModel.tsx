/**
 * PersonalizedBodyModel Component
 *
 * Main integration component that displays the user's "virtual patient body"
 * with their conditions, symptoms, medications, and labs visualized on the 3D model.
 *
 * Features:
 * - Full patient health data visualization
 * - Toggle individual conditions on/off
 * - Severity adjustment per condition
 * - "My Body" vs "Healthy Reference" comparison view
 * - Time-based disease progression visualization (educational)
 * - Region highlighting based on patient's conditions
 * - Priority indicators for areas needing attention
 * - Integration with RegionExplorer for detailed views
 */

import React, { useState, useCallback, useMemo, useRef, memo, useEffect, type ReactNode } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

import type {
  BiologicalSelf,
  PatientCondition,
  PatientSymptom,
  LabResult,
  PatientMedication,
  VitalSigns,
  AnatomyPatientBridge,
  RegionCondition,
  RegionSymptom,
  OrganLab,
  MedicationTarget,
} from '../AnatomyMainScreen/types';

import { createBridge, getRegionCenter, getOrganCenter } from '../AnatomyMainScreen/utils';
import { SEVERITY_COLORS, LAB_STATUS_COLORS } from '../AnatomyMainScreen/types';

// ============================================
// Types
// ============================================

/**
 * View mode for the body model
 */
export type BodyViewMode = 'my-body' | 'healthy-reference' | 'comparison';

/**
 * Animation playback state for disease progression
 */
export type ProgressionPlaybackState = 'stopped' | 'playing' | 'paused';

/**
 * Condition visibility state with individual toggles and severity overrides
 */
export interface ConditionVisibility {
  conditionId: string;
  visible: boolean;
  severityOverride?: 'mild' | 'moderate' | 'severe';
  highlighted?: boolean;
}

/**
 * Priority indicator for areas needing attention
 */
export interface PriorityArea {
  regionId: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  reasons: string[];
  relatedConditions: string[];
  relatedLabs: string[];
}

/**
 * Disease progression stage for educational visualization
 */
export interface ProgressionStage {
  id: string;
  name: string;
  description: string;
  timeLabel: string;
  severity: 'mild' | 'moderate' | 'severe';
  affectedRegions: string[];
  visualChanges: {
    regionId: string;
    colorIntensity: number;
    pulseSpeed: number;
    opacity: number;
  }[];
}

/**
 * Props for the PersonalizedBodyModel component
 */
export interface PersonalizedBodyModelProps {
  // Patient data
  patientData: BiologicalSelf;

  // Optional pre-computed bridge
  anatomyBridge?: AnatomyPatientBridge;

  // View mode
  viewMode?: BodyViewMode;

  // Condition visibility controls
  conditionVisibility?: Map<string, ConditionVisibility>;
  onConditionVisibilityChange?: (visibility: Map<string, ConditionVisibility>) => void;

  // Region selection
  selectedRegion?: string | null;
  onRegionSelect?: (regionId: string | null, conditions: PatientCondition[]) => void;
  onRegionHover?: (regionId: string | null) => void;

  // Disease progression (educational)
  progressionStages?: ProgressionStage[];
  currentProgressionStage?: number;
  progressionPlayback?: ProgressionPlaybackState;
  onProgressionStageChange?: (stage: number) => void;

  // Feature toggles
  showConditions?: boolean;
  showSymptoms?: boolean;
  showLabs?: boolean;
  showMedications?: boolean;
  showPriorityIndicators?: boolean;
  showAnnotations?: boolean;
  animationsEnabled?: boolean;

  // Integration callbacks
  onOpenEncyclopedia?: (regionId: string, patientContext: PatientCondition[]) => void;
  onAskAI?: (regionId: string, question: string) => void;
}

/**
 * Controls for the PersonalizedBodyModel
 */
export interface PersonalizedBodyModelControls {
  // View mode
  viewMode: BodyViewMode;
  setViewMode: (mode: BodyViewMode) => void;

  // Visibility toggles
  showConditions: boolean;
  showSymptoms: boolean;
  showLabs: boolean;
  showMedications: boolean;
  showPriorityIndicators: boolean;
  showAnnotations: boolean;
  animationsEnabled: boolean;
  setShowConditions: (show: boolean) => void;
  setShowSymptoms: (show: boolean) => void;
  setShowLabs: (show: boolean) => void;
  setShowMedications: (show: boolean) => void;
  setShowPriorityIndicators: (show: boolean) => void;
  setShowAnnotations: (show: boolean) => void;
  setAnimationsEnabled: (enabled: boolean) => void;

  // Condition management
  conditionVisibility: Map<string, ConditionVisibility>;
  toggleCondition: (conditionId: string) => void;
  toggleAllConditions: (visible: boolean) => void;
  setConditionSeverity: (conditionId: string, severity: 'mild' | 'moderate' | 'severe') => void;
  highlightCondition: (conditionId: string, highlighted: boolean) => void;

  // Disease progression
  progressionPlayback: ProgressionPlaybackState;
  currentProgressionStage: number;
  playProgression: () => void;
  pauseProgression: () => void;
  stopProgression: () => void;
  setProgressionStage: (stage: number) => void;

  // Selection
  selectedRegion: string | null;
  selectRegion: (regionId: string | null) => void;
  clearSelection: () => void;
}

// ============================================
// Hook: usePersonalizedBodyModelControls
// ============================================

export function usePersonalizedBodyModelControls(
  patientData: BiologicalSelf
): PersonalizedBodyModelControls {
  // View mode
  const [viewMode, setViewMode] = useState<BodyViewMode>('my-body');

  // Visibility toggles
  const [showConditions, setShowConditions] = useState(true);
  const [showSymptoms, setShowSymptoms] = useState(true);
  const [showLabs, setShowLabs] = useState(true);
  const [showMedications, setShowMedications] = useState(true);
  const [showPriorityIndicators, setShowPriorityIndicators] = useState(true);
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  // Condition visibility - initialize from patient data
  const [conditionVisibility, setConditionVisibility] = useState<Map<string, ConditionVisibility>>(() => {
    const map = new Map<string, ConditionVisibility>();
    patientData.conditions.forEach(condition => {
      map.set(condition.id, {
        conditionId: condition.id,
        visible: true,
        highlighted: false,
      });
    });
    return map;
  });

  // Disease progression
  const [progressionPlayback, setProgressionPlayback] = useState<ProgressionPlaybackState>('stopped');
  const [currentProgressionStage, setCurrentProgressionStage] = useState(0);

  // Selection
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // Condition management functions
  const toggleCondition = useCallback((conditionId: string) => {
    setConditionVisibility(prev => {
      const next = new Map(prev);
      const current = next.get(conditionId);
      if (current) {
        next.set(conditionId, { ...current, visible: !current.visible });
      }
      return next;
    });
  }, []);

  const toggleAllConditions = useCallback((visible: boolean) => {
    setConditionVisibility(prev => {
      const next = new Map(prev);
      next.forEach((value, key) => {
        next.set(key, { ...value, visible });
      });
      return next;
    });
  }, []);

  const setConditionSeverity = useCallback((
    conditionId: string,
    severity: 'mild' | 'moderate' | 'severe'
  ) => {
    setConditionVisibility(prev => {
      const next = new Map(prev);
      const current = next.get(conditionId);
      if (current) {
        next.set(conditionId, { ...current, severityOverride: severity });
      }
      return next;
    });
  }, []);

  const highlightCondition = useCallback((conditionId: string, highlighted: boolean) => {
    setConditionVisibility(prev => {
      const next = new Map(prev);
      const current = next.get(conditionId);
      if (current) {
        next.set(conditionId, { ...current, highlighted });
      }
      return next;
    });
  }, []);

  // Progression controls
  const playProgression = useCallback(() => setProgressionPlayback('playing'), []);
  const pauseProgression = useCallback(() => setProgressionPlayback('paused'), []);
  const stopProgression = useCallback(() => {
    setProgressionPlayback('stopped');
    setCurrentProgressionStage(0);
  }, []);

  // Selection controls
  const selectRegion = useCallback((regionId: string | null) => {
    setSelectedRegion(regionId);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedRegion(null);
  }, []);

  return {
    viewMode,
    setViewMode,
    showConditions,
    showSymptoms,
    showLabs,
    showMedications,
    showPriorityIndicators,
    showAnnotations,
    animationsEnabled,
    setShowConditions,
    setShowSymptoms,
    setShowLabs,
    setShowMedications,
    setShowPriorityIndicators,
    setShowAnnotations,
    setAnimationsEnabled,
    conditionVisibility,
    toggleCondition,
    toggleAllConditions,
    setConditionSeverity,
    highlightCondition,
    progressionPlayback,
    currentProgressionStage,
    playProgression,
    pauseProgression,
    stopProgression,
    setProgressionStage: setCurrentProgressionStage,
    selectedRegion,
    selectRegion,
    clearSelection,
  };
}

// ============================================
// Priority Area Calculator
// ============================================

function calculatePriorityAreas(
  patientData: BiologicalSelf,
  bridge: AnatomyPatientBridge
): PriorityArea[] {
  const priorityMap = new Map<string, PriorityArea>();

  // Add conditions - severe conditions = high priority
  bridge.conditionsByRegion.forEach((conditions, regionId) => {
    const priority = priorityMap.get(regionId) || {
      regionId,
      priority: 'low' as const,
      reasons: [],
      relatedConditions: [],
      relatedLabs: [],
    };

    conditions.forEach(regionCondition => {
      const condition = regionCondition.condition;
      priority.relatedConditions.push(condition.id);

      if (condition.severity === 'severe') {
        priority.priority = 'critical';
        priority.reasons.push(`Severe condition: ${condition.name}`);
      } else if (condition.severity === 'moderate' && priority.priority !== 'critical') {
        priority.priority = 'high';
        priority.reasons.push(`Moderate condition: ${condition.name}`);
      } else if (priority.priority === 'low') {
        priority.priority = 'medium';
        priority.reasons.push(`Active condition: ${condition.name}`);
      }
    });

    priorityMap.set(regionId, priority);
  });

  // Add labs - critical labs elevate priority
  bridge.labsByOrgan.forEach((labs, organId) => {
    const priority = priorityMap.get(organId) || {
      regionId: organId,
      priority: 'low' as const,
      reasons: [],
      relatedConditions: [],
      relatedLabs: [],
    };

    labs.forEach(organLab => {
      priority.relatedLabs.push(organLab.lab.id);

      if (organLab.lab.status.includes('critical')) {
        priority.priority = 'critical';
        priority.reasons.push(`Critical lab: ${organLab.lab.testName}`);
      } else if (organLab.lab.status !== 'normal' && priority.priority !== 'critical') {
        if (priority.priority === 'low') {
          priority.priority = 'medium';
        }
        priority.reasons.push(`Abnormal lab: ${organLab.lab.testName}`);
      }
    });

    priorityMap.set(organId, priority);
  });

  // Add severe symptoms
  bridge.symptomsByRegion.forEach((symptoms, regionId) => {
    const priority = priorityMap.get(regionId) || {
      regionId,
      priority: 'low' as const,
      reasons: [],
      relatedConditions: [],
      relatedLabs: [],
    };

    symptoms.forEach(regionSymptom => {
      if (regionSymptom.symptom.severity >= 7) {
        if (priority.priority !== 'critical') {
          priority.priority = 'high';
        }
        priority.reasons.push(`Severe symptom: ${regionSymptom.symptom.description}`);
      }
    });

    priorityMap.set(regionId, priority);
  });

  return Array.from(priorityMap.values())
    .filter(p => p.priority !== 'low')
    .sort((a, b) => {
      const order = { critical: 4, high: 3, medium: 2, low: 1 };
      return order[b.priority] - order[a.priority];
    });
}

// ============================================
// Shaders for condition visualization
// ============================================

const conditionVertexShader = `
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const conditionFragmentShader = `
  uniform vec3 conditionColor;
  uniform float intensity;
  uniform float pulsePhase;
  uniform float opacity;
  uniform bool isHighlighted;
  uniform bool isSelected;

  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec2 vUv;

  void main() {
    // Fresnel edge effect
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 2.0);

    // Pulse animation
    float pulse = 0.7 + 0.3 * sin(pulsePhase);

    // Highlight boost
    float highlightBoost = isHighlighted ? 1.5 : 1.0;
    float selectedBoost = isSelected ? 2.0 : 1.0;

    // Combine effects
    float finalIntensity = intensity * pulse * highlightBoost * selectedBoost;
    float finalOpacity = opacity * (0.3 + fresnel * 0.7) * pulse;

    // Add selection ring effect
    if (isSelected) {
      float ring = smoothstep(0.45, 0.5, abs(fract(vUv.x * 5.0 + pulsePhase * 0.5) - 0.5));
      finalIntensity += ring * 0.5;
    }

    vec3 color = conditionColor * finalIntensity;

    gl_FragColor = vec4(color, finalOpacity);
  }
`;

// ============================================
// Sub-components
// ============================================

interface ConditionRegionHighlightProps {
  regionId: string;
  conditions: RegionCondition[];
  conditionVisibility: Map<string, ConditionVisibility>;
  isSelected: boolean;
  animationsEnabled: boolean;
}

const ConditionRegionHighlight = memo(function ConditionRegionHighlight({
  regionId,
  conditions,
  conditionVisibility,
  isSelected,
  animationsEnabled,
}: ConditionRegionHighlightProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Filter to visible conditions only
  const visibleConditions = useMemo(() => {
    return conditions.filter(rc => {
      const vis = conditionVisibility.get(rc.condition.id);
      return vis?.visible !== false;
    });
  }, [conditions, conditionVisibility]);

  // Calculate highlight properties
  const highlightProps = useMemo(() => {
    if (visibleConditions.length === 0) {
      return null;
    }

    // Get most severe visible condition
    const severityOrder = { severe: 3, moderate: 2, mild: 1 };
    const sortedConditions = [...visibleConditions].sort((a, b) => {
      const visA = conditionVisibility.get(a.condition.id);
      const visB = conditionVisibility.get(b.condition.id);
      const sevA = visA?.severityOverride || a.condition.severity;
      const sevB = visB?.severityOverride || b.condition.severity;
      return severityOrder[sevB] - severityOrder[sevA];
    });

    const primary = sortedConditions[0];
    const vis = conditionVisibility.get(primary.condition.id);
    const severity = vis?.severityOverride || primary.condition.severity;
    const color = SEVERITY_COLORS[severity];
    const isHighlighted = visibleConditions.some(rc =>
      conditionVisibility.get(rc.condition.id)?.highlighted
    );

    // Intensity based on severity and count
    const baseIntensity = severity === 'severe' ? 1.0 : severity === 'moderate' ? 0.7 : 0.4;
    const countBonus = Math.min(visibleConditions.length * 0.1, 0.3);

    // Pulse speed varies with severity
    const pulseSpeed = severity === 'severe' ? 3 : severity === 'moderate' ? 2 : 1;

    return {
      color: new THREE.Color(color),
      intensity: baseIntensity + countBonus,
      pulseSpeed,
      isHighlighted,
      opacity: 0.4 + baseIntensity * 0.4,
    };
  }, [visibleConditions, conditionVisibility]);

  // Get position
  const position = useMemo(() => {
    const center = getOrganCenter(regionId) || getRegionCenter(regionId);
    return center ? new THREE.Vector3(center.x, center.y, center.z) : new THREE.Vector3();
  }, [regionId]);

  // Create shader material
  const shaderMaterial = useMemo(() => {
    if (!highlightProps) return null;

    return new THREE.ShaderMaterial({
      vertexShader: conditionVertexShader,
      fragmentShader: conditionFragmentShader,
      uniforms: {
        conditionColor: { value: highlightProps.color },
        intensity: { value: highlightProps.intensity },
        pulsePhase: { value: 0 },
        opacity: { value: highlightProps.opacity },
        isHighlighted: { value: highlightProps.isHighlighted },
        isSelected: { value: isSelected },
      },
      transparent: true,
      depthWrite: false,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
    });
  }, [highlightProps, isSelected]);

  // Animation
  useFrame((_, delta) => {
    if (materialRef.current && highlightProps && animationsEnabled) {
      materialRef.current.uniforms.pulsePhase.value += delta * highlightProps.pulseSpeed * Math.PI * 2;
      materialRef.current.uniforms.isSelected.value = isSelected;
    }
  });

  if (!highlightProps || !shaderMaterial) return null;

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={[0.08, 0.08, 0.08]}
    >
      <sphereGeometry args={[1, 16, 16]} />
      <primitive object={shaderMaterial} ref={materialRef} attach="material" />
    </mesh>
  );
});

interface PriorityIndicatorProps {
  priorityArea: PriorityArea;
  onClick?: () => void;
}

const PriorityIndicator = memo(function PriorityIndicator({
  priorityArea,
  onClick,
}: PriorityIndicatorProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);

  const position = useMemo(() => {
    const center = getOrganCenter(priorityArea.regionId) || getRegionCenter(priorityArea.regionId);
    if (!center) return new THREE.Vector3();
    // Offset slightly above the region
    return new THREE.Vector3(center.x + 0.05, center.y + 0.05, center.z + 0.02);
  }, [priorityArea.regionId]);

  const color = useMemo(() => {
    switch (priorityArea.priority) {
      case 'critical': return '#ff4444';
      case 'high': return '#ff9f43';
      case 'medium': return '#ffd93d';
      default: return '#4caf50';
    }
  }, [priorityArea.priority]);

  const size = useMemo(() => {
    switch (priorityArea.priority) {
      case 'critical': return 0.015;
      case 'high': return 0.012;
      case 'medium': return 0.01;
      default: return 0.008;
    }
  }, [priorityArea.priority]);

  // Pulsing animation for critical items
  useFrame((state) => {
    if (meshRef.current && priorityArea.priority === 'critical') {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.2;
      meshRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group position={position}>
      {/* Priority indicator sphere */}
      <mesh
        ref={meshRef}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <sphereGeometry args={[size, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.9} />
      </mesh>

      {/* Outer glow ring */}
      <mesh>
        <ringGeometry args={[size * 1.3, size * 1.8, 24]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>

      {/* Tooltip on hover */}
      {isHovered && (
        <Html
          position={[0, size + 0.02, 0]}
          center
          distanceFactor={8}
          style={{ pointerEvents: 'none' }}
        >
          <div className="priority-indicator-tooltip">
            <div className="priority-header" style={{ backgroundColor: color }}>
              {priorityArea.priority.toUpperCase()} PRIORITY
            </div>
            <div className="priority-reasons">
              {priorityArea.reasons.slice(0, 3).map((reason, i) => (
                <div key={i} className="priority-reason">{reason}</div>
              ))}
              {priorityArea.reasons.length > 3 && (
                <div className="priority-more">+{priorityArea.reasons.length - 3} more</div>
              )}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
});

interface ComparisonViewProps {
  mode: 'healthy' | 'patient';
  children?: React.ReactNode;
  offset: number;
}

const ComparisonView = memo(function ComparisonView({
  mode,
  children,
  offset,
}: ComparisonViewProps) {
  return (
    <group position={[offset, 0, 0]}>
      {/* Label */}
      <Html position={[0, 1.5, 0]} center distanceFactor={10}>
        <div className="comparison-label">
          {mode === 'healthy' ? 'Healthy Reference' : 'Your Body'}
        </div>
      </Html>
      {children}
    </group>
  );
});

interface ProgressionOverlayProps {
  stages: ProgressionStage[];
  currentStage: number;
  playbackState: ProgressionPlaybackState;
}

const ProgressionOverlay = memo(function ProgressionOverlay({
  stages,
  currentStage,
  playbackState,
}: ProgressionOverlayProps) {
  const stage = stages[currentStage];
  if (!stage) return null;

  return (
    <group>
      {stage.visualChanges.map((change, index) => {
        const position = getOrganCenter(change.regionId) || getRegionCenter(change.regionId);
        if (!position) return null;

        return (
          <mesh
            key={`${stage.id}-${change.regionId}-${index}`}
            position={[position.x, position.y, position.z]}
            scale={[0.06 * change.colorIntensity, 0.06 * change.colorIntensity, 0.06 * change.colorIntensity]}
          >
            <sphereGeometry args={[1, 12, 12]} />
            <meshBasicMaterial
              color={SEVERITY_COLORS[stage.severity]}
              transparent
              opacity={change.opacity}
            />
          </mesh>
        );
      })}

      {/* Stage info tooltip */}
      <Html position={[0, -1.4, 0]} center distanceFactor={10}>
        <div className="progression-stage-info">
          <div className="progression-time">{stage.timeLabel}</div>
          <div className="progression-name">{stage.name}</div>
          <div className="progression-description">{stage.description}</div>
          {playbackState === 'playing' && (
            <div className="progression-playing">Playing...</div>
          )}
        </div>
      </Html>
    </group>
  );
});

// ============================================
// Main Component
// ============================================

export const PersonalizedBodyModel = memo(function PersonalizedBodyModel({
  patientData,
  anatomyBridge,
  viewMode = 'my-body',
  conditionVisibility = new Map(),
  onConditionVisibilityChange,
  selectedRegion = null,
  onRegionSelect,
  onRegionHover,
  progressionStages = [],
  currentProgressionStage = 0,
  progressionPlayback = 'stopped',
  onProgressionStageChange,
  showConditions = true,
  showSymptoms = true,
  showLabs = true,
  showMedications = true,
  showPriorityIndicators = true,
  showAnnotations = true,
  animationsEnabled = true,
  onOpenEncyclopedia,
  onAskAI,
}: PersonalizedBodyModelProps) {
  const { scene } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  // Build bridge from patient data
  const bridge = useMemo(() => {
    if (anatomyBridge) return anatomyBridge;
    return createBridge(patientData);
  }, [patientData, anatomyBridge]);

  // Calculate priority areas
  const priorityAreas = useMemo(() => {
    if (!showPriorityIndicators) return [];
    return calculatePriorityAreas(patientData, bridge);
  }, [patientData, bridge, showPriorityIndicators]);

  // Handle region click
  const handleRegionClick = useCallback((regionId: string) => {
    const conditions = bridge.conditionsByRegion.get(regionId)?.map(rc => rc.condition) || [];
    onRegionSelect?.(regionId, conditions);
  }, [bridge, onRegionSelect]);

  // Handle priority indicator click
  const handlePriorityClick = useCallback((priorityArea: PriorityArea) => {
    const conditions = priorityArea.relatedConditions
      .map(id => patientData.conditions.find(c => c.id === id))
      .filter((c): c is PatientCondition => c !== undefined);
    onRegionSelect?.(priorityArea.regionId, conditions);
  }, [patientData.conditions, onRegionSelect]);

  // Render conditions
  const conditionHighlights = useMemo(() => {
    if (!showConditions || viewMode === 'healthy-reference') return null;

    const highlights: React.ReactElement[] = [];
    bridge.conditionsByRegion.forEach((conditions, regionId) => {
      highlights.push(
        <ConditionRegionHighlight
          key={`condition-${regionId}`}
          regionId={regionId}
          conditions={conditions}
          conditionVisibility={conditionVisibility}
          isSelected={selectedRegion === regionId}
          animationsEnabled={animationsEnabled}
        />
      );
    });

    return <group name="condition-highlights">{highlights}</group>;
  }, [bridge, showConditions, viewMode, conditionVisibility, selectedRegion, animationsEnabled]);

  // Render symptom indicators
  const symptomIndicators = useMemo(() => {
    if (!showSymptoms || viewMode === 'healthy-reference') return null;

    const indicators: React.ReactElement[] = [];
    bridge.symptomsByRegion.forEach((symptoms, regionId) => {
      symptoms.forEach((symptom, index) => {
        const position = getOrganCenter(regionId) || getRegionCenter(regionId);
        if (!position) return;

        const size = 0.01 + (symptom.symptom.severity / 10) * 0.02;
        const color = symptom.indicatorColor;

        indicators.push(
          <mesh
            key={`symptom-${regionId}-${symptom.symptom.id}`}
            position={[
              position.x + Math.cos(index * Math.PI / 3) * 0.03,
              position.y + 0.02,
              position.z + Math.sin(index * Math.PI / 3) * 0.03,
            ]}
          >
            <sphereGeometry args={[size, 12, 12]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.5}
              transparent
              opacity={0.8}
            />
          </mesh>
        );
      });
    });

    return <group name="symptom-indicators">{indicators}</group>;
  }, [bridge, showSymptoms, viewMode]);

  // Render lab badges
  const labBadges = useMemo(() => {
    if (!showLabs || viewMode === 'healthy-reference') return null;

    const badges: React.ReactElement[] = [];
    bridge.labsByOrgan.forEach((labs, organId) => {
      const abnormalLabs = labs.filter(l => l.direction !== 'normal');
      if (abnormalLabs.length === 0) return;

      const position = getOrganCenter(organId) || getRegionCenter(organId);
      if (!position) return;

      const color = abnormalLabs.some(l => l.lab.status.includes('critical'))
        ? LAB_STATUS_COLORS['critical-high']
        : LAB_STATUS_COLORS.high;

      badges.push(
        <group key={`lab-${organId}`} position={[position.x + 0.04, position.y + 0.04, position.z]}>
          <mesh>
            <circleGeometry args={[0.012, 16]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          <mesh position={[0, 0, 0.001]}>
            <circleGeometry args={[0.01, 16]} />
            <meshBasicMaterial color={color} />
          </mesh>
        </group>
      );
    });

    return <group name="lab-badges">{badges}</group>;
  }, [bridge, showLabs, viewMode]);

  // Render medication targets
  const medicationTargets = useMemo(() => {
    if (!showMedications || viewMode === 'healthy-reference') return null;

    const targets: React.ReactElement[] = [];
    bridge.medicationTargets.forEach((meds, organId) => {
      const position = getOrganCenter(organId) || getRegionCenter(organId);
      if (!position) return;

      const hasTherapeutic = meds.some(m => m.effectType === 'therapeutic');
      const color = hasTherapeutic ? '#4CAF50' : '#FF9F43';

      targets.push(
        <mesh
          key={`med-${organId}`}
          position={[position.x - 0.04, position.y + 0.04, position.z]}
        >
          <ringGeometry args={[0.008, 0.012, 24]} />
          <meshBasicMaterial color={color} transparent opacity={0.6} side={THREE.DoubleSide} />
        </mesh>
      );
    });

    return <group name="medication-targets">{targets}</group>;
  }, [bridge, showMedications, viewMode]);

  // Priority indicators
  const priorityIndicatorsGroup = useMemo(() => {
    if (!showPriorityIndicators || viewMode === 'healthy-reference' || priorityAreas.length === 0) {
      return null;
    }

    return (
      <group name="priority-indicators">
        {priorityAreas.map(area => (
          <PriorityIndicator
            key={`priority-${area.regionId}`}
            priorityArea={area}
            onClick={() => handlePriorityClick(area)}
          />
        ))}
      </group>
    );
  }, [priorityAreas, showPriorityIndicators, viewMode, handlePriorityClick]);

  // Disease progression overlay
  const progressionOverlay = useMemo(() => {
    if (progressionStages.length === 0 || progressionPlayback === 'stopped') {
      return null;
    }

    return (
      <ProgressionOverlay
        stages={progressionStages}
        currentStage={currentProgressionStage}
        playbackState={progressionPlayback}
      />
    );
  }, [progressionStages, currentProgressionStage, progressionPlayback]);

  // Comparison view rendering
  if (viewMode === 'comparison') {
    return (
      <group ref={groupRef} name="personalized-body-model-comparison">
        {/* Healthy reference on the left */}
        <ComparisonView mode="healthy" offset={-0.6}>
          {/* Just the base model, no overlays */}
        </ComparisonView>

        {/* Patient body on the right */}
        <ComparisonView mode="patient" offset={0.6}>
          {conditionHighlights}
          {symptomIndicators}
          {labBadges}
          {medicationTargets}
          {priorityIndicatorsGroup}
        </ComparisonView>

        {progressionOverlay}
      </group>
    );
  }

  // Standard single-view rendering
  return (
    <group ref={groupRef} name="personalized-body-model">
      {viewMode === 'my-body' && (
        <>
          {conditionHighlights}
          {symptomIndicators}
          {labBadges}
          {medicationTargets}
          {priorityIndicatorsGroup}
        </>
      )}

      {progressionOverlay}

      {/* Region annotation (if selected) */}
      {showAnnotations && selectedRegion && (
        <Html
          position={[0, -1.3, 0]}
          center
          distanceFactor={10}
        >
          <div className="region-annotation">
            <div className="annotation-header">
              Selected: {selectedRegion}
            </div>
            <div className="annotation-actions">
              <button onClick={() => onOpenEncyclopedia?.(selectedRegion, [])}>
                Learn More
              </button>
              <button onClick={() => onAskAI?.(selectedRegion, `Tell me about ${selectedRegion}`)}>
                Ask AI
              </button>
            </div>
          </div>
        </Html>
      )}
    </group>
  );
});

// ============================================
// UI Control Panel Component
// ============================================

export interface PersonalizedBodyModelPanelProps {
  controls: PersonalizedBodyModelControls;
  patientData: BiologicalSelf;
  progressionStages?: ProgressionStage[];
  className?: string;
}

export function PersonalizedBodyModelPanel({
  controls,
  patientData,
  progressionStages = [],
  className = '',
}: PersonalizedBodyModelPanelProps) {
  return (
    <div className={`personalized-body-panel ${className}`}>
      {/* View Mode Selector */}
      <div className="panel-section">
        <h4>View Mode</h4>
        <div className="view-mode-buttons">
          <button
            className={controls.viewMode === 'my-body' ? 'active' : ''}
            onClick={() => controls.setViewMode('my-body')}
          >
            My Body
          </button>
          <button
            className={controls.viewMode === 'healthy-reference' ? 'active' : ''}
            onClick={() => controls.setViewMode('healthy-reference')}
          >
            Healthy
          </button>
          <button
            className={controls.viewMode === 'comparison' ? 'active' : ''}
            onClick={() => controls.setViewMode('comparison')}
          >
            Compare
          </button>
        </div>
      </div>

      {/* Visibility Toggles */}
      <div className="panel-section">
        <h4>Show/Hide</h4>
        <label className="toggle-option">
          <input
            type="checkbox"
            checked={controls.showConditions}
            onChange={e => controls.setShowConditions(e.target.checked)}
          />
          <span>Conditions ({patientData.conditions.filter(c => c.status === 'active').length} active)</span>
        </label>
        <label className="toggle-option">
          <input
            type="checkbox"
            checked={controls.showSymptoms}
            onChange={e => controls.setShowSymptoms(e.target.checked)}
          />
          <span>Symptoms ({patientData.symptoms.length})</span>
        </label>
        <label className="toggle-option">
          <input
            type="checkbox"
            checked={controls.showLabs}
            onChange={e => controls.setShowLabs(e.target.checked)}
          />
          <span>Lab Results ({patientData.labResults.filter(l => l.status !== 'normal').length} abnormal)</span>
        </label>
        <label className="toggle-option">
          <input
            type="checkbox"
            checked={controls.showMedications}
            onChange={e => controls.setShowMedications(e.target.checked)}
          />
          <span>Medications ({patientData.medications.length})</span>
        </label>
        <label className="toggle-option">
          <input
            type="checkbox"
            checked={controls.showPriorityIndicators}
            onChange={e => controls.setShowPriorityIndicators(e.target.checked)}
          />
          <span>Priority Areas</span>
        </label>
        <label className="toggle-option">
          <input
            type="checkbox"
            checked={controls.animationsEnabled}
            onChange={e => controls.setAnimationsEnabled(e.target.checked)}
          />
          <span>Animations</span>
        </label>
      </div>

      {/* Condition Filter */}
      <div className="panel-section">
        <h4>Conditions</h4>
        <div className="condition-actions">
          <button onClick={() => controls.toggleAllConditions(true)}>Show All</button>
          <button onClick={() => controls.toggleAllConditions(false)}>Hide All</button>
        </div>
        <div className="condition-list">
          {patientData.conditions.map(condition => {
            const vis = controls.conditionVisibility.get(condition.id);
            return (
              <div key={condition.id} className="condition-item">
                <label className="condition-toggle">
                  <input
                    type="checkbox"
                    checked={vis?.visible !== false}
                    onChange={() => controls.toggleCondition(condition.id)}
                  />
                  <span
                    className="condition-name"
                    style={{ color: SEVERITY_COLORS[condition.severity] }}
                  >
                    {condition.name}
                  </span>
                </label>
                <select
                  value={vis?.severityOverride || condition.severity}
                  onChange={e => controls.setConditionSeverity(
                    condition.id,
                    e.target.value as 'mild' | 'moderate' | 'severe'
                  )}
                  className="severity-select"
                >
                  <option value="mild">Mild</option>
                  <option value="moderate">Moderate</option>
                  <option value="severe">Severe</option>
                </select>
              </div>
            );
          })}
        </div>
      </div>

      {/* Disease Progression (Educational) */}
      {progressionStages.length > 0 && (
        <div className="panel-section">
          <h4>Disease Progression</h4>
          <div className="progression-controls">
            {controls.progressionPlayback === 'playing' ? (
              <button onClick={controls.pauseProgression}>Pause</button>
            ) : (
              <button onClick={controls.playProgression}>Play</button>
            )}
            <button onClick={controls.stopProgression}>Stop</button>
          </div>
          <div className="progression-timeline">
            {progressionStages.map((stage, index) => (
              <button
                key={stage.id}
                className={`stage-button ${index === controls.currentProgressionStage ? 'active' : ''}`}
                onClick={() => controls.setProgressionStage(index)}
              >
                {stage.timeLabel}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Selected Region Info */}
      {controls.selectedRegion && (
        <div className="panel-section selected-region">
          <h4>Selected: {controls.selectedRegion}</h4>
          <button onClick={controls.clearSelection}>Clear Selection</button>
        </div>
      )}
    </div>
  );
}

// ============================================
// Exports
// ============================================

export default PersonalizedBodyModel;
