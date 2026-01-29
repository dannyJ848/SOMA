/**
 * Lab Badges Component
 *
 * Renders small badges on organs with abnormal lab results.
 * Shows directional arrows (up/down) for high/low values.
 *
 * Visualization:
 * - Small floating badges near affected organs
 * - Up arrow for high values, down arrow for low values
 * - Color indicates urgency level
 * - Displays lab value on hover
 */

import React, { useRef, useMemo, memo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

import {
  type LabBadgesProps,
  type OrganLab,
  LAB_STATUS_COLORS,
} from './types';
import { getRegionCenter, getOrganCenter } from './utils';

// ============================================
// Constants
// ============================================

const BADGE_SIZE = 0.012;
const BADGE_OFFSET = 0.04;  // Offset from organ center
const FLOAT_SPEED = 1.5;
const FLOAT_AMPLITUDE = 0.003;

// Arrow shapes for directional indication
const ARROW_UP_POINTS = [
  new THREE.Vector2(0, 0.5),
  new THREE.Vector2(-0.3, 0),
  new THREE.Vector2(-0.1, 0),
  new THREE.Vector2(-0.1, -0.5),
  new THREE.Vector2(0.1, -0.5),
  new THREE.Vector2(0.1, 0),
  new THREE.Vector2(0.3, 0),
];

const ARROW_DOWN_POINTS = ARROW_UP_POINTS.map(
  p => new THREE.Vector2(p.x, -p.y)
);

// ============================================
// Single Lab Badge Component
// ============================================

interface LabBadgeProps {
  organId: string;
  lab: OrganLab;
  index: number;
}

const LabBadge = memo(function LabBadge({
  organId,
  lab,
  index,
}: LabBadgeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate badge properties
  const badgeProps = useMemo(() => {
    const color = LAB_STATUS_COLORS[lab.lab.status];
    const isAbnormal = lab.direction !== 'normal';
    const isCritical = lab.lab.status.includes('critical');

    // Get position from organ center
    let basePosition = getOrganCenter(organId);
    if (!basePosition) {
      basePosition = getRegionCenter(organId);
    }
    if (!basePosition) {
      basePosition = { x: 0, y: 0, z: 0 };
    }

    // Offset badges to avoid overlap
    const offsetAngle = (index * Math.PI) / 4;
    const position = new THREE.Vector3(
      basePosition.x + Math.cos(offsetAngle) * BADGE_OFFSET,
      basePosition.y + 0.02 + index * 0.015,
      basePosition.z + Math.sin(offsetAngle) * BADGE_OFFSET
    );

    return {
      color: new THREE.Color(color),
      position,
      isAbnormal,
      isCritical,
      direction: lab.direction,
      size: isCritical ? BADGE_SIZE * 1.3 : BADGE_SIZE,
    };
  }, [lab, organId, index]);

  // Animation
  useFrame((state) => {
    if (groupRef.current) {
      // Floating animation
      const floatOffset = Math.sin(state.clock.elapsedTime * FLOAT_SPEED + index) * FLOAT_AMPLITUDE;
      groupRef.current.position.y = badgeProps.position.y + floatOffset;

      // Rotation for critical values
      if (badgeProps.isCritical) {
        groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.1;
      }

      // Scale pulse on hover
      if (isHovered) {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 5) * 0.15;
        groupRef.current.scale.setScalar(pulse);
      } else {
        groupRef.current.scale.setScalar(1);
      }
    }
  });

  // Create arrow geometry based on direction
  const arrowGeometry = useMemo(() => {
    if (lab.direction === 'normal') {
      // Circle for normal values
      return new THREE.CircleGeometry(badgeProps.size, 16);
    }

    const points = lab.direction === 'up' ? ARROW_UP_POINTS : ARROW_DOWN_POINTS;
    const shape = new THREE.Shape(points.map(p => new THREE.Vector2(p.x * badgeProps.size * 2, p.y * badgeProps.size * 2)));
    return new THREE.ShapeGeometry(shape);
  }, [lab.direction, badgeProps.size]);

  return (
    <group
      ref={groupRef}
      position={[badgeProps.position.x, badgeProps.position.y, badgeProps.position.z]}
    >
      {/* Background circle */}
      <mesh
        position={[0, 0, -0.001]}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <circleGeometry args={[badgeProps.size * 1.5, 16]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Arrow or circle indicator */}
      <mesh>
        <primitive object={arrowGeometry} attach="geometry" />
        <meshBasicMaterial
          color={badgeProps.color}
          transparent
          opacity={1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Glow ring for critical values */}
      {badgeProps.isCritical && (
        <mesh>
          <ringGeometry args={[badgeProps.size * 1.6, badgeProps.size * 2, 32]} />
          <meshBasicMaterial
            color={badgeProps.color}
            transparent
            opacity={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {/* Detail popup on hover */}
      {isHovered && (
        <Html
          position={[0, badgeProps.size * 2 + 0.01, 0]}
          center
          distanceFactor={8}
          style={{ pointerEvents: 'none' }}
        >
          <div className="lab-badge-popup">
            <div className="lab-badge-name">{lab.lab.testName}</div>
            <div className="lab-badge-value">
              <span className={`lab-status lab-status-${lab.lab.status}`}>
                {lab.direction === 'up' && '↑'}
                {lab.direction === 'down' && '↓'}
                {lab.lab.value} {lab.lab.unit}
              </span>
            </div>
            <div className="lab-badge-range">
              Ref: {lab.lab.referenceRange.low} - {lab.lab.referenceRange.high} {lab.lab.unit}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
});

// ============================================
// Organ Labs Cluster Component
// ============================================

interface OrganLabsClusterProps {
  organId: string;
  labs: OrganLab[];
  showOnlyAbnormal: boolean;
}

const OrganLabsCluster = memo(function OrganLabsCluster({
  organId,
  labs,
  showOnlyAbnormal,
}: OrganLabsClusterProps) {
  // Filter and sort labs
  const displayLabs = useMemo(() => {
    let filtered = labs;

    if (showOnlyAbnormal) {
      filtered = labs.filter(l => l.direction !== 'normal');
    }

    // Sort by urgency (critical first) then by direction
    return filtered.sort((a, b) => {
      const urgencyOrder = { urgent: 3, attention: 2, routine: 1 };
      return urgencyOrder[b.urgency] - urgencyOrder[a.urgency];
    });
  }, [labs, showOnlyAbnormal]);

  if (displayLabs.length === 0) return null;

  return (
    <group name={`lab-badges-${organId}`}>
      {displayLabs.map((lab, index) => (
        <LabBadge
          key={lab.lab.id}
          organId={organId}
          lab={lab}
          index={index}
        />
      ))}

      {/* Summary badge if multiple labs */}
      {displayLabs.length > 2 && (
        <LabSummaryBadge
          organId={organId}
          labs={displayLabs}
        />
      )}
    </group>
  );
});

// ============================================
// Lab Summary Badge Component
// ============================================

interface LabSummaryBadgeProps {
  organId: string;
  labs: OrganLab[];
}

const LabSummaryBadge = memo(function LabSummaryBadge({
  organId,
  labs,
}: LabSummaryBadgeProps) {
  const center = getOrganCenter(organId) || getRegionCenter(organId);
  if (!center) return null;

  // Count abnormal labs
  const abnormalCount = labs.filter(l => l.direction !== 'normal').length;
  const criticalCount = labs.filter(l => l.lab.status.includes('critical')).length;

  // Determine badge color
  let color: string = LAB_STATUS_COLORS.normal;
  if (criticalCount > 0) {
    color = LAB_STATUS_COLORS['critical-high'];
  } else if (abnormalCount > 0) {
    color = LAB_STATUS_COLORS.high;
  }

  return (
    <Html
      position={[center.x - 0.05, center.y + 0.06, center.z]}
      center
      distanceFactor={8}
      style={{ pointerEvents: 'none' }}
    >
      <div
        className="lab-summary-badge"
        style={{ backgroundColor: color }}
      >
        <span className="lab-summary-count">{labs.length}</span>
        <span className="lab-summary-label">labs</span>
      </div>
    </Html>
  );
});

// ============================================
// Main Lab Badges Component
// ============================================

export const LabBadges = memo(function LabBadges({
  labs,
  visible = true,
  showOnlyAbnormal = true,
}: LabBadgesProps) {
  if (!visible || labs.size === 0) {
    return null;
  }

  // Convert Map to array for rendering
  const organEntries = Array.from(labs.entries());

  return (
    <group name="lab-badges">
      {organEntries.map(([organId, organLabs]) => (
        <OrganLabsCluster
          key={organId}
          organId={organId}
          labs={organLabs}
          showOnlyAbnormal={showOnlyAbnormal}
        />
      ))}
    </group>
  );
});

// ============================================
// Utility: Get lab status icon
// ============================================

export function getLabStatusIcon(status: OrganLab['lab']['status']): string {
  switch (status) {
    case 'high':
    case 'critical-high':
      return '↑';
    case 'low':
    case 'critical-low':
      return '↓';
    default:
      return '•';
  }
}

/**
 * Create a standalone lab badge mesh
 */
export function createLabBadge(
  position: THREE.Vector3,
  direction: 'up' | 'down' | 'normal',
  status: OrganLab['lab']['status']
): THREE.Group {
  const group = new THREE.Group();
  const color = new THREE.Color(LAB_STATUS_COLORS[status]);
  const size = status.includes('critical') ? BADGE_SIZE * 1.3 : BADGE_SIZE;

  // Background
  const bgGeometry = new THREE.CircleGeometry(size * 1.5, 16);
  const bgMaterial = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.9 });
  const bg = new THREE.Mesh(bgGeometry, bgMaterial);
  bg.position.z = -0.001;
  group.add(bg);

  // Indicator
  let indicatorGeometry: THREE.BufferGeometry;
  if (direction === 'normal') {
    indicatorGeometry = new THREE.CircleGeometry(size, 16);
  } else {
    const points = direction === 'up' ? ARROW_UP_POINTS : ARROW_DOWN_POINTS;
    const shape = new THREE.Shape(points.map(p => new THREE.Vector2(p.x * size * 2, p.y * size * 2)));
    indicatorGeometry = new THREE.ShapeGeometry(shape);
  }
  const indicatorMaterial = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
  const indicator = new THREE.Mesh(indicatorGeometry, indicatorMaterial);
  group.add(indicator);

  group.position.copy(position);
  group.name = `lab-badge-${direction}`;
  group.userData = { direction, status };

  return group;
}

export default LabBadges;
