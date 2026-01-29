/**
 * Symptom Indicators Component
 *
 * Renders small floating indicators showing symptom locations on the 3D model.
 * Indicator size and color reflect symptom severity.
 *
 * Visualization:
 * - Small spheres or icons at symptom locations
 * - Size scales with severity (larger = more severe)
 * - Color intensity increases with severity
 * - Optional labels showing symptom description
 */

import React, { useRef, useMemo, memo, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

import {
  type SymptomIndicatorsProps,
  type RegionSymptom,
  SEVERITY_COLORS,
} from './types';
import { getRegionCenter, getSeverityLevel } from './utils';

// ============================================
// Constants
// ============================================

const BASE_INDICATOR_SIZE = 0.015;
const MAX_INDICATOR_SIZE = 0.04;
const FLOAT_AMPLITUDE = 0.005;
const FLOAT_SPEED = 2;

// Indicator colors by severity level (1-10 mapped to 3 levels)
const INDICATOR_COLORS = {
  low: '#FFD93D',     // Yellow (1-3)
  medium: '#FF9F43',  // Orange (4-6)
  high: '#FF6B6B',    // Red (7-10)
};

// ============================================
// Single Symptom Indicator Component
// ============================================

interface SymptomIndicatorProps {
  regionId: string;
  symptom: RegionSymptom;
  showLabel: boolean;
  index: number;
}

const SymptomIndicator = memo(function SymptomIndicator({
  regionId,
  symptom,
  showLabel,
  index,
}: SymptomIndicatorProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate indicator properties from symptom
  const indicatorProps = useMemo(() => {
    const severity = symptom.symptom.severity;
    const severityLevel = getSeverityLevel(severity);
    const color = INDICATOR_COLORS[severityLevel];

    // Size scales with severity
    const sizeScale = severity / 10;
    const size = BASE_INDICATOR_SIZE + (MAX_INDICATOR_SIZE - BASE_INDICATOR_SIZE) * sizeScale;

    // Get base position from symptom or region center
    let basePosition = symptom.position
      ? new THREE.Vector3(symptom.position.x, symptom.position.y, symptom.position.z)
      : null;

    if (!basePosition) {
      const center = getRegionCenter(regionId);
      if (center) {
        basePosition = new THREE.Vector3(center.x, center.y, center.z);
      } else {
        basePosition = new THREE.Vector3(0, 0, 0);
      }
    }

    // Offset multiple indicators to avoid overlap
    const offsetAngle = (index * Math.PI * 2) / 5;  // Spread in circle
    const offsetRadius = 0.03 * index;
    basePosition.x += Math.cos(offsetAngle) * offsetRadius;
    basePosition.z += Math.sin(offsetAngle) * offsetRadius;
    basePosition.y += 0.02;  // Float slightly above surface

    return {
      color: new THREE.Color(color),
      size,
      position: basePosition,
      glowIntensity: 0.3 + (severity / 10) * 0.7,
    };
  }, [symptom, regionId, index]);

  // Create material with glow effect
  const material = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: indicatorProps.color,
      emissive: indicatorProps.color,
      emissiveIntensity: indicatorProps.glowIntensity,
      transparent: true,
      opacity: 0.9,
    });
  }, [indicatorProps]);

  // Animation: floating and pulsing
  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      const floatOffset = Math.sin(state.clock.elapsedTime * FLOAT_SPEED + index) * FLOAT_AMPLITUDE;
      meshRef.current.position.y = indicatorProps.position.y + floatOffset;

      // Pulse scale on hover
      if (isHovered) {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.1;
        meshRef.current.scale.setScalar(pulse);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group>
      {/* Main indicator sphere */}
      <mesh
        ref={meshRef}
        position={[indicatorProps.position.x, indicatorProps.position.y, indicatorProps.position.z]}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <sphereGeometry args={[indicatorProps.size, 16, 16]} />
        <primitive object={material} attach="material" />
      </mesh>

      {/* Glow ring effect */}
      <mesh
        position={[indicatorProps.position.x, indicatorProps.position.y, indicatorProps.position.z]}
      >
        <ringGeometry args={[indicatorProps.size * 1.2, indicatorProps.size * 1.5, 32]} />
        <meshBasicMaterial
          color={indicatorProps.color}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Label (HTML overlay) */}
      {(showLabel || isHovered) && (
        <Html
          position={[
            indicatorProps.position.x,
            indicatorProps.position.y + indicatorProps.size + 0.02,
            indicatorProps.position.z,
          ]}
          center
          distanceFactor={10}
          style={{ pointerEvents: 'none' }}
        >
          <div className="symptom-indicator-label">
            <span className="symptom-label-text">
              {symptom.symptom.description}
            </span>
            <span className="symptom-label-severity">
              {symptom.symptom.severity}/10
            </span>
          </div>
        </Html>
      )}
    </group>
  );
});

// ============================================
// Symptom Cluster Component
// ============================================

interface SymptomClusterProps {
  regionId: string;
  symptoms: RegionSymptom[];
  showLabels: boolean;
}

const SymptomCluster = memo(function SymptomCluster({
  regionId,
  symptoms,
  showLabels,
}: SymptomClusterProps) {
  // Sort symptoms by severity (most severe first)
  const sortedSymptoms = useMemo(() => {
    return [...symptoms].sort((a, b) => b.symptom.severity - a.symptom.severity);
  }, [symptoms]);

  return (
    <group name={`symptom-cluster-${regionId}`}>
      {sortedSymptoms.map((symptom, index) => (
        <SymptomIndicator
          key={symptom.symptom.id}
          regionId={regionId}
          symptom={symptom}
          showLabel={showLabels}
          index={index}
        />
      ))}

      {/* Cluster count badge if multiple symptoms */}
      {symptoms.length > 1 && (
        <ClusterBadge
          regionId={regionId}
          count={symptoms.length}
          maxSeverity={sortedSymptoms[0].symptom.severity}
        />
      )}
    </group>
  );
});

// ============================================
// Cluster Badge Component
// ============================================

interface ClusterBadgeProps {
  regionId: string;
  count: number;
  maxSeverity: number;
}

const ClusterBadge = memo(function ClusterBadge({
  regionId,
  count,
  maxSeverity,
}: ClusterBadgeProps) {
  const center = getRegionCenter(regionId);
  if (!center) return null;

  const severityLevel = getSeverityLevel(maxSeverity);
  const color = INDICATOR_COLORS[severityLevel];

  return (
    <Html
      position={[center.x + 0.05, center.y + 0.05, center.z]}
      center
      distanceFactor={8}
      style={{ pointerEvents: 'none' }}
    >
      <div
        className="symptom-cluster-badge"
        style={{ backgroundColor: color }}
      >
        {count}
      </div>
    </Html>
  );
});

// ============================================
// Main Symptom Indicators Component
// ============================================

export const SymptomIndicators = memo(function SymptomIndicators({
  symptoms,
  visible = true,
  showLabels = false,
}: SymptomIndicatorsProps) {
  if (!visible || symptoms.size === 0) {
    return null;
  }

  // Convert Map to array for rendering
  const regionEntries = Array.from(symptoms.entries());

  return (
    <group name="symptom-indicators">
      {regionEntries.map(([regionId, regionSymptoms]) => (
        <SymptomCluster
          key={regionId}
          regionId={regionId}
          symptoms={regionSymptoms}
          showLabels={showLabels}
        />
      ))}
    </group>
  );
});

// ============================================
// Utility: Create standalone indicator
// ============================================

/**
 * Create a standalone symptom indicator at a specific position
 */
export function createSymptomIndicator(
  position: THREE.Vector3,
  severity: number,
  description?: string
): THREE.Group {
  const group = new THREE.Group();
  const severityLevel = getSeverityLevel(severity);
  const color = new THREE.Color(INDICATOR_COLORS[severityLevel]);

  // Size based on severity
  const size = BASE_INDICATOR_SIZE + (MAX_INDICATOR_SIZE - BASE_INDICATOR_SIZE) * (severity / 10);

  // Main sphere
  const sphereGeometry = new THREE.SphereGeometry(size, 16, 16);
  const sphereMaterial = new THREE.MeshStandardMaterial({
    color,
    emissive: color,
    emissiveIntensity: 0.5,
    transparent: true,
    opacity: 0.9,
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.copy(position);
  group.add(sphere);

  // Glow ring
  const ringGeometry = new THREE.RingGeometry(size * 1.2, size * 1.5, 32);
  const ringMaterial = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.3,
    side: THREE.DoubleSide,
  });
  const ring = new THREE.Mesh(ringGeometry, ringMaterial);
  ring.position.copy(position);
  ring.lookAt(position.clone().add(new THREE.Vector3(0, 1, 0)));
  group.add(ring);

  group.name = `symptom-indicator-${description || 'unnamed'}`;
  group.userData = { severity, description };

  return group;
}

export default SymptomIndicators;
