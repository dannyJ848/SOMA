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
 *
 * Data-driven mode (DataDrivenSymptomIndicators):
 * - Fetches real symptoms from the 155-symptom database via ContentService
 * - Maps body region IDs to symptom-database BodyRegion values
 * - On indicator click, loads full SymptomInfo (causes, red flags, etc.)
 */

import React, { useRef, useMemo, memo, useState, useCallback } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

import {
  type SymptomIndicatorsProps,
  type RegionSymptom,
  type PatientSymptom,
  SEVERITY_COLORS,
} from './types';
import { getRegionCenter, getSeverityLevel } from './utils';
import {
  useRegionSymptoms,
  useSymptomDetail,
  type SymptomDetailState,
} from '../hooks/useRegionSymptoms';
import type { SymptomInfo } from '../services/ContentService';

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
  /** Callback when the indicator is clicked (receives symptom ID) */
  onSymptomClick?: (symptomId: string) => void;
}

const SymptomIndicator = memo(function SymptomIndicator({
  regionId,
  symptom,
  showLabel,
  index,
  onSymptomClick,
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
        onClick={(e) => {
          e.stopPropagation();
          onSymptomClick?.(symptom.symptom.id);
        }}
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
  onSymptomClick?: (symptomId: string) => void;
}

const SymptomCluster = memo(function SymptomCluster({
  regionId,
  symptoms,
  showLabels,
  onSymptomClick,
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
          onSymptomClick={onSymptomClick}
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
  onSymptomClick,
}: SymptomIndicatorsProps & { onSymptomClick?: (symptomId: string) => void }) {
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
          onSymptomClick={onSymptomClick}
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

// ============================================
// Symptom Detail Panel (HTML overlay)
// ============================================

interface SymptomDetailPanelProps {
  detail: SymptomDetailState;
  onClose: () => void;
}

/**
 * Renders a floating HTML panel showing full symptom details when a
 * symptom indicator is clicked. Displays data from the 155-symptom
 * database including possible causes, red flags, home management,
 * and when-to-see-doctor guidance.
 */
const SymptomDetailPanel = memo(function SymptomDetailPanel({
  detail,
  onClose,
}: SymptomDetailPanelProps) {
  if (!detail.selectedSymptomId) return null;

  const info = detail.info;

  return (
    <div
      className="symptom-detail-panel"
      style={{
        position: 'absolute',
        top: '50%',
        right: '16px',
        transform: 'translateY(-50%)',
        width: '340px',
        maxHeight: '70vh',
        overflowY: 'auto',
        background: 'rgba(20, 20, 30, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '20px',
        color: '#e0e0e0',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        zIndex: 200,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '18px', color: '#fff' }}>
            {detail.isLoading ? 'Loading...' : info?.entry.name ?? 'Unknown Symptom'}
          </h3>
          {info?.entry.spanishName && (
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#888', fontStyle: 'italic' }}>
              {info.entry.spanishName}
            </p>
          )}
        </div>
        <button
          onClick={onClose}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            borderRadius: '8px',
            color: '#aaa',
            cursor: 'pointer',
            padding: '6px 10px',
            fontSize: '16px',
            lineHeight: 1,
          }}
        >
          ✕
        </button>
      </div>

      {detail.isLoading && (
        <div style={{ padding: '20px 0', textAlign: 'center', color: '#888' }}>
          Loading symptom details...
        </div>
      )}

      {detail.error && (
        <div style={{ padding: '12px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', color: '#f87171', fontSize: '13px' }}>
          {detail.error}
        </div>
      )}

      {info && (
        <>
          {/* Description */}
          <p style={{ fontSize: '14px', lineHeight: 1.5, margin: '0 0 16px', color: '#ccc' }}>
            {info.entry.description}
          </p>

          {/* Body Regions */}
          <div style={{ marginBottom: '14px' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888', marginBottom: '6px' }}>
              Body Regions
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {info.entry.bodyRegions.map((r) => (
                <span
                  key={r}
                  style={{
                    padding: '3px 8px',
                    background: 'rgba(59, 130, 246, 0.15)',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: '#93c5fd',
                  }}
                >
                  {r}
                </span>
              ))}
            </div>
          </div>

          {/* Possible Causes */}
          {info.entry.possibleCauses.length > 0 && (
            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888', marginBottom: '6px' }}>
                Possible Causes
              </div>
              {info.entry.possibleCauses.slice(0, 6).map((cause) => (
                <div
                  key={cause.conditionId}
                  style={{
                    padding: '6px 10px',
                    marginBottom: '4px',
                    background: cause.likelihood === 'do-not-miss'
                      ? 'rgba(239, 68, 68, 0.1)'
                      : 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '6px',
                    borderLeft: `3px solid ${
                      cause.likelihood === 'do-not-miss'
                        ? '#ef4444'
                        : cause.likelihood === 'common'
                          ? '#22c55e'
                          : cause.likelihood === 'less-common'
                            ? '#f59e0b'
                            : '#a78bfa'
                    }`,
                    fontSize: '13px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>{cause.conditionName}</span>
                  <span style={{
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    color: cause.likelihood === 'do-not-miss' ? '#f87171' : '#888',
                    fontWeight: cause.likelihood === 'do-not-miss' ? 600 : 400,
                  }}>
                    {cause.likelihood}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Do Not Miss (prominent warning) */}
          {info.doNotMiss.length > 0 && (
            <div style={{
              padding: '10px 12px',
              marginBottom: '14px',
              background: 'rgba(239, 68, 68, 0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(239, 68, 68, 0.3)',
            }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#f87171', marginBottom: '6px' }}>
                Do Not Miss
              </div>
              {info.doNotMiss.map((d) => (
                <div key={d.conditionId} style={{ fontSize: '13px', color: '#fca5a5', marginBottom: '2px' }}>
                  {d.conditionName}
                </div>
              ))}
            </div>
          )}

          {/* Red Flags */}
          {info.entry.redFlags.length > 0 && (
            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888', marginBottom: '6px' }}>
                Red Flags
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: '#fca5a5' }}>
                {info.entry.redFlags.map((flag, i) => (
                  <li key={i} style={{ marginBottom: '3px' }}>{flag}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Home Management */}
          {info.entry.homeManagement.length > 0 && (
            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888', marginBottom: '6px' }}>
                Home Management
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: '#bbb' }}>
                {info.entry.homeManagement.map((tip, i) => (
                  <li key={i} style={{ marginBottom: '3px' }}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {/* When to See Doctor */}
          {info.entry.whenToSeeDoctor && (
            <div style={{
              padding: '10px 12px',
              marginBottom: '14px',
              background: 'rgba(251, 191, 36, 0.08)',
              borderRadius: '8px',
              border: '1px solid rgba(251, 191, 36, 0.2)',
            }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#fbbf24', marginBottom: '4px' }}>
                When to See a Doctor
              </div>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#ddd' }}>
                {info.entry.whenToSeeDoctor}
              </p>
            </div>
          )}

          {/* Glossary entry */}
          {info.glossaryEntry && (
            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888', marginBottom: '6px' }}>
                Plain Language
              </div>
              <p style={{ margin: 0, fontSize: '13px', color: '#bbb', lineHeight: 1.5 }}>
                {info.glossaryEntry.plainEN}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
});

// ============================================
// Data-Driven Symptom Indicators
// ============================================

/**
 * Props for DataDrivenSymptomIndicators
 */
export interface DataDrivenSymptomIndicatorsProps {
  /** Selected body region from the 3D model (e.g. "chest", "head") */
  regionId: string | null;
  /** Whether indicators are visible */
  visible?: boolean;
  /** Whether to always show labels */
  showLabels?: boolean;
  /** Max symptoms to display per region (default 8) */
  maxSymptoms?: number;
}

/**
 * Data-driven wrapper around SymptomIndicators.
 *
 * This component:
 * 1. Takes a regionId from the 3D body model
 * 2. Fetches real symptoms from the 155-symptom database via ContentService
 * 3. Maps them to RegionSymptom[] format for the SymptomIndicators component
 * 4. On click, loads full SymptomInfo (causes, red flags, explanations)
 * 5. Renders the SymptomDetailPanel with the enriched data
 *
 * Usage inside a Three.js Canvas + ContentProvider:
 * ```tsx
 * <DataDrivenSymptomIndicators regionId={selectedRegion} visible={true} />
 * ```
 *
 * Note: The SymptomDetailPanel is rendered as an HTML overlay (not inside
 * the Canvas). If this component is rendered inside <Canvas>, the detail
 * panel uses @react-three/drei's <Html> for correct positioning. For the
 * sibling overlay approach, use the exported hooks directly.
 */
export const DataDrivenSymptomIndicators = memo(function DataDrivenSymptomIndicators({
  regionId,
  visible = true,
  showLabels = false,
  maxSymptoms = 8,
}: DataDrivenSymptomIndicatorsProps) {
  const { symptomsByRegion, isLoading, count } = useRegionSymptoms(regionId, maxSymptoms);
  const { state: detailState, selectSymptom, clearSelection } = useSymptomDetail();

  const handleSymptomClick = useCallback(
    (symptomId: string) => {
      selectSymptom(symptomId);
    },
    [selectSymptom],
  );

  if (!visible || !regionId) return null;

  return (
    <>
      {/* 3D indicators on the body model */}
      <SymptomIndicators
        symptoms={symptomsByRegion}
        visible={visible && !isLoading}
        showLabels={showLabels}
        onSymptomClick={handleSymptomClick}
      />

      {/* Loading state indicator */}
      {isLoading && regionId && (
        <Html center distanceFactor={10} style={{ pointerEvents: 'none' }}>
          <div style={{
            background: 'rgba(0, 0, 0, 0.7)',
            color: '#fff',
            padding: '8px 14px',
            borderRadius: '8px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
          }}>
            Loading symptoms...
          </div>
        </Html>
      )}

      {/* Symptom count badge */}
      {!isLoading && count > 0 && (
        <Html
          center
          distanceFactor={8}
          style={{ pointerEvents: 'none' }}
        >
          <div style={{
            background: 'rgba(59, 130, 246, 0.85)',
            color: '#fff',
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '11px',
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}>
            {count} symptom{count !== 1 ? 's' : ''} in database
          </div>
        </Html>
      )}

      {/* Symptom detail panel (HTML overlay within the 3D scene) */}
      {detailState.selectedSymptomId && (
        <Html
          fullscreen
          style={{ pointerEvents: 'none' }}
        >
          <div style={{ pointerEvents: 'auto' }}>
            <SymptomDetailPanel
              detail={detailState}
              onClose={clearSelection}
            />
          </div>
        </Html>
      )}
    </>
  );
});

export default SymptomIndicators;
