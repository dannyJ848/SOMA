/**
 * Medication Targets Component
 *
 * Renders subtle highlights on organs that are targeted by medications.
 * Shown on hover/toggle to help users understand where their
 * medications are working in the body.
 *
 * Wired to real pharmacology content databases:
 * - medication-target-map: maps medications to anatomical targets
 * - medication-database: drug names, classes, side effects, warnings
 * - pharmacokinetics-database: half-life, metabolism, therapeutic range
 * - drug-interactions-database: drug-drug interactions
 * - side-effects-explained: patient-friendly side effect explanations
 * - mechanisms-explained: patient-friendly mechanism descriptions
 *
 * Visualization:
 * - Subtle glow on medication target organs
 * - Green for therapeutic effects
 * - Orange for side effects
 * - Blue for protective effects
 * - Rich popup shows drug name, class, mechanism, interactions,
 *   side effects, and pharmacokinetics on hover
 */

import React, { useRef, useMemo, memo, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

import {
  type MedicationTargetsProps,
  type MedicationTarget,
  MEDICATION_EFFECT_COLORS,
} from './types';
import { getRegionMesh, getOrganCenter, getRegionCenter } from './utils';
import {
  getMedicationMapping,
  type MedicationTargetMapping,
} from '../../core/anatomy-patient-bridge/medication-target-map';
import {
  getMedication,
} from '../../core/content/medications/medication-database';
import {
  getPKEntry,
} from '../../core/content/pharmacology/pharmacokinetics-database';
import {
  getInteractionsForDrug,
} from '../../core/content/pharmacology/drug-interactions-database';
// Side effects explained is used by the useMedicationPharmacology hook
// for more detailed data; this component uses getMedication's sideEffects array.

// ============================================
// Constants
// ============================================

const HIGHLIGHT_OPACITY = 0.3;
const HOVER_OPACITY = 0.6;
const PULSE_SPEED = 0.5;

// ============================================
// Pharmacology Data Resolution
// ============================================

interface ResolvedPharmacology {
  drugName: string;
  drugClass: string;
  organMechanism: string;
  generalMechanism: string;
  sideEffects: string[];
  interactions: { drug: string; severity: string; effect: string }[];
  halfLife?: string;
  metabolism?: string;
  therapeuticRange?: string;
  clinicalPearl?: string;
  isNarrowTherapeuticIndex: boolean;
  warnings: string[];
  patientTip?: string;
}

/**
 * Resolve full pharmacology data for a medication target.
 * Pulls from medication-target-map, medication-database,
 * pharmacokinetics-database, drug-interactions-database,
 * and side-effects-explained.
 */
function resolvePharmacology(
  target: MedicationTarget,
  organId: string
): ResolvedPharmacology {
  const medId = target.medication.id;
  const medName = target.medication.name;

  // Normalize for lookup
  const normalizedId = medId.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const normalizedName = medName.toLowerCase().replace(/\s+\d+\s*mg.*$/i, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  // Look up target mapping
  const targetMapping =
    getMedicationMapping(medId) ??
    getMedicationMapping(normalizedId) ??
    getMedicationMapping(normalizedName);

  // Look up medication entry
  const medEntry = getMedication(medId) ?? getMedication(normalizedId) ?? getMedication(normalizedName);

  // Look up PK entry
  const pkEntry = getPKEntry(medId) ?? getPKEntry(normalizedId) ?? getPKEntry(normalizedName);

  // Look up interactions
  const drugInteractions = getInteractionsForDrug(medName);
  const interactions = drugInteractions.slice(0, 3).map((di) => ({
    drug: di.drug1.toLowerCase().includes(medName.toLowerCase()) ? di.drug2 : di.drug1,
    severity: di.severity,
    effect: di.clinicalEffect.length > 100 ? di.clinicalEffect.slice(0, 100) + '...' : di.clinicalEffect,
  }));

  // Find organ-specific mechanism from target mapping
  let organMechanism = '';
  if (targetMapping) {
    const primaryHit = targetMapping.primaryTargets.find((t) => t.organ === organId);
    const secondaryHit = targetMapping.secondaryTargets?.find((t) => t.organ === organId);
    organMechanism = primaryHit?.effect ?? secondaryHit?.effect ?? '';
  }

  return {
    drugName: targetMapping?.medicationName ?? medEntry?.name ?? medName,
    drugClass: targetMapping?.drugClass ?? medEntry?.class ?? '',
    organMechanism,
    generalMechanism: medEntry?.mechanism ?? '',
    sideEffects: medEntry?.sideEffects?.slice(0, 4) ?? [],
    interactions,
    halfLife: pkEntry?.elimination.halfLife,
    metabolism: pkEntry?.metabolism.primaryCYP,
    therapeuticRange: pkEntry?.therapeuticRange,
    clinicalPearl: pkEntry?.clinicalPearl,
    isNarrowTherapeuticIndex: pkEntry?.category.includes('narrow-therapeutic-index') ?? false,
    warnings: medEntry?.warnings?.slice(0, 3) ?? [],
    patientTip: medEntry?.patientTip,
  };
}

// ============================================
// Medication Target Highlight Shader
// ============================================

const targetVertexShader = `
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const targetFragmentShader = `
  uniform vec3 targetColor;
  uniform float opacity;
  uniform float pulsePhase;
  uniform bool isHovered;

  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    // Soft edge glow effect
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 1.5);

    // Subtle pulse when not hovered
    float pulse = isHovered ? 1.0 : 0.8 + 0.2 * sin(pulsePhase);

    // Final color and opacity
    float finalOpacity = opacity * fresnel * pulse;

    gl_FragColor = vec4(targetColor, finalOpacity);
  }
`;

// ============================================
// Single Medication Target Component
// ============================================

interface MedicationTargetHighlightProps {
  organId: string;
  targets: MedicationTarget[];
  highlightMode: 'always' | 'hover' | 'toggle';
  isToggled: boolean;
}

const MedicationTargetHighlight = memo(function MedicationTargetHighlight({
  organId,
  targets,
  highlightMode,
  isToggled,
}: MedicationTargetHighlightProps) {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scene } = useThree();

  // Calculate highlight properties
  const highlightProps = useMemo(() => {
    // Determine primary effect type
    const effectCounts = {
      therapeutic: 0,
      'side-effect': 0,
      protective: 0,
    };

    targets.forEach(t => {
      effectCounts[t.effectType]++;
    });

    // Primary effect is the most common one
    let primaryEffect: keyof typeof effectCounts = 'therapeutic';
    let maxCount = 0;
    (Object.entries(effectCounts) as [keyof typeof effectCounts, number][]).forEach(([effect, count]) => {
      if (count > maxCount) {
        maxCount = count;
        primaryEffect = effect;
      }
    });

    const color = MEDICATION_EFFECT_COLORS[primaryEffect];

    // Get position from organ
    let position = getOrganCenter(organId);
    if (!position) {
      position = getRegionCenter(organId);
    }
    if (!position) {
      position = { x: 0, y: 0, z: 0 };
    }

    return {
      color: new THREE.Color(color),
      position: new THREE.Vector3(position.x, position.y, position.z),
      primaryEffect,
      hasPrimaryTarget: targets.some(t => t.isPrimaryTarget),
    };
  }, [targets, organId]);

  // Determine visibility based on mode
  const isVisible = useMemo(() => {
    switch (highlightMode) {
      case 'always':
        return true;
      case 'hover':
        return isHovered;
      case 'toggle':
        return isToggled;
      default:
        return false;
    }
  }, [highlightMode, isHovered, isToggled]);

  // Create shader material
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: targetVertexShader,
      fragmentShader: targetFragmentShader,
      uniforms: {
        targetColor: { value: highlightProps.color },
        opacity: { value: isHovered ? HOVER_OPACITY : HIGHLIGHT_OPACITY },
        pulsePhase: { value: 0 },
        isHovered: { value: isHovered },
      },
      transparent: true,
      depthWrite: false,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
    });
  }, [highlightProps.color, isHovered]);

  // Get geometry from region mesh
  const geometry = useMemo(() => {
    const regionMesh = getRegionMesh(organId, scene);
    if (regionMesh && regionMesh.geometry) {
      return regionMesh.geometry.clone();
    }

    // Fallback sphere
    return new THREE.SphereGeometry(0.03, 16, 16);
  }, [organId, scene]);

  // Animation
  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.pulsePhase.value += delta * PULSE_SPEED * Math.PI * 2;
      materialRef.current.uniforms.opacity.value = isHovered ? HOVER_OPACITY : HIGHLIGHT_OPACITY;
      materialRef.current.uniforms.isHovered.value = isHovered;
    }
  });

  if (!isVisible) return null;

  return (
    <group ref={groupRef}>
      {/* Highlight mesh */}
      <mesh
        geometry={geometry}
        material={shaderMaterial}
        position={highlightProps.position}
        scale={[1.03, 1.03, 1.03]}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <primitive object={shaderMaterial} ref={materialRef} attach="material" />
      </mesh>

      {/* Icon indicator */}
      <mesh
        position={[
          highlightProps.position.x,
          highlightProps.position.y + 0.05,
          highlightProps.position.z,
        ]}
      >
        <circleGeometry args={[0.01, 16]} />
        <meshBasicMaterial
          color={highlightProps.color}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Medication details popup - enriched with real pharmacology data */}
      {isHovered && (
        <Html
          position={[
            highlightProps.position.x,
            highlightProps.position.y + 0.08,
            highlightProps.position.z,
          ]}
          center
          distanceFactor={8}
          style={{ pointerEvents: 'none' }}
        >
          <div className="medication-target-popup" style={{
            background: 'rgba(15, 20, 35, 0.95)',
            borderRadius: '8px',
            padding: '10px 14px',
            minWidth: '280px',
            maxWidth: '360px',
            color: '#e0e0e0',
            fontSize: '11px',
            lineHeight: '1.4',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
          }}>
            <div className="medication-popup-header" style={{
              fontSize: '12px',
              fontWeight: 600,
              color: '#fff',
              marginBottom: '8px',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              paddingBottom: '6px',
            }}>
              Medications affecting: {organId.replace(/-/g, ' ')}
            </div>
            <div className="medication-popup-list">
              {targets.map(target => {
                const pharma = resolvePharmacology(target, organId);
                return (
                  <div
                    key={target.medication.id}
                    className={`medication-popup-item effect-${target.effectType}`}
                    style={{
                      marginBottom: '10px',
                      paddingBottom: '8px',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {/* Drug name and class */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 600, fontSize: '12px', color: '#fff' }}>
                        {pharma.drugName}
                      </span>
                      <span style={{
                        fontSize: '9px',
                        padding: '1px 6px',
                        borderRadius: '3px',
                        background: target.effectType === 'therapeutic' ? 'rgba(76,175,80,0.2)'
                          : target.effectType === 'side-effect' ? 'rgba(255,159,67,0.2)'
                          : 'rgba(33,150,243,0.2)',
                        color: target.effectType === 'therapeutic' ? '#81c784'
                          : target.effectType === 'side-effect' ? '#ffb74d'
                          : '#64b5f6',
                      }}>
                        {target.effectType.replace('-', ' ')}
                        {target.isPrimaryTarget ? ' (primary)' : ''}
                      </span>
                    </div>

                    {/* Drug class */}
                    {pharma.drugClass && (
                      <div style={{ fontSize: '10px', color: '#90a4ae', marginBottom: '3px' }}>
                        Class: {pharma.drugClass.replace(/-/g, ' ')}
                        {pharma.isNarrowTherapeuticIndex && (
                          <span style={{ color: '#ef5350', marginLeft: '6px', fontWeight: 600 }}>
                            [Narrow Therapeutic Index]
                          </span>
                        )}
                      </div>
                    )}

                    {/* Organ-specific mechanism */}
                    {pharma.organMechanism && (
                      <div style={{ fontSize: '10px', color: '#b0bec5', marginBottom: '3px' }}>
                        <span style={{ color: '#78909c' }}>Mechanism: </span>
                        {pharma.organMechanism}
                      </div>
                    )}

                    {/* Pharmacokinetics highlights */}
                    {pharma.halfLife && (
                      <div style={{ fontSize: '10px', color: '#b0bec5', marginBottom: '3px' }}>
                        <span style={{ color: '#78909c' }}>Half-life: </span>{pharma.halfLife}
                        {pharma.metabolism && pharma.metabolism !== 'None' && pharma.metabolism !== 'Not metabolized' && (
                          <span> | <span style={{ color: '#78909c' }}>Metabolism: </span>{pharma.metabolism}</span>
                        )}
                      </div>
                    )}

                    {/* Side effects */}
                    {pharma.sideEffects.length > 0 && (
                      <div style={{ fontSize: '10px', color: '#ffab91', marginBottom: '3px' }}>
                        <span style={{ color: '#78909c' }}>Side effects: </span>
                        {pharma.sideEffects.join(', ')}
                      </div>
                    )}

                    {/* Interactions */}
                    {pharma.interactions.length > 0 && (
                      <div style={{ fontSize: '10px', marginBottom: '3px' }}>
                        <span style={{ color: '#78909c' }}>Interactions: </span>
                        {pharma.interactions.map((inter, idx) => (
                          <span key={idx}>
                            <span style={{
                              color: inter.severity === 'major' ? '#ef5350' : inter.severity === 'moderate' ? '#ffb74d' : '#90a4ae',
                            }}>
                              {inter.drug}
                              {inter.severity === 'major' ? ' (major)' : ''}
                            </span>
                            {idx < pharma.interactions.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Patient tip */}
                    {pharma.patientTip && (
                      <div style={{ fontSize: '10px', color: '#a5d6a7', fontStyle: 'italic', marginTop: '2px' }}>
                        {pharma.patientTip}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
});

// ============================================
// Main Medication Targets Component
// ============================================

export const MedicationTargets = memo(function MedicationTargets({
  medications,
  visible = true,
  highlightMode = 'hover',
}: MedicationTargetsProps) {
  const [toggledOrgans, setToggledOrgans] = useState<Set<string>>(new Set());

  // Toggle handler for 'toggle' mode
  const handleToggle = (organId: string) => {
    setToggledOrgans(prev => {
      const next = new Set(prev);
      if (next.has(organId)) {
        next.delete(organId);
      } else {
        next.add(organId);
      }
      return next;
    });
  };

  if (!visible || medications.size === 0) {
    return null;
  }

  // Convert Map to array for rendering
  const organEntries = Array.from(medications.entries());

  return (
    <group name="medication-targets">
      {organEntries.map(([organId, organTargets]) => (
        <MedicationTargetHighlight
          key={organId}
          organId={organId}
          targets={organTargets}
          highlightMode={highlightMode}
          isToggled={toggledOrgans.has(organId)}
        />
      ))}
    </group>
  );
});

// ============================================
// Utility: Get effect description
// ============================================

export function getMedicationEffectDescription(effectType: MedicationTarget['effectType']): string {
  switch (effectType) {
    case 'therapeutic':
      return 'This medication works directly on this area to treat your condition.';
    case 'side-effect':
      return 'This medication may affect this area as a side effect.';
    case 'protective':
      return 'This medication helps protect this area.';
    default:
      return '';
  }
}

/**
 * Get all organs targeted by a specific medication
 */
export function getMedicationTargetOrgans(
  medicationId: string,
  medicationTargets: Map<string, MedicationTarget[]>
): string[] {
  const targetOrgans: string[] = [];

  medicationTargets.forEach((targets, organId) => {
    if (targets.some(t => t.medication.id === medicationId)) {
      targetOrgans.push(organId);
    }
  });

  return targetOrgans;
}

export default MedicationTargets;
