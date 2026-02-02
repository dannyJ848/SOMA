/**
 * Health Overlay Utilities
 *
 * Utility functions for the Health Overlay visualization system.
 * Includes helpers for mesh lookup, bridge creation, and coordinate mapping.
 *
 * Enhanced to use the condition-anatomy-map for automatically resolving
 * anatomical regions from patient conditions (by name, ICD code, or search).
 */

import * as THREE from 'three';

import {
  type BiologicalSelf,
  type PatientCondition,
  type AnatomyPatientBridge,
  type RegionCondition,
  type RegionSymptom,
  type OrganLab,
  type MedicationTarget,
  type HighlightOptions,
  SEVERITY_COLORS,
  LAB_STATUS_COLORS,
  MEDICATION_EFFECT_COLORS,
  DEFAULT_HIGHLIGHT_OPTIONS,
} from './types';

import {
  CONDITION_ANATOMY_MAP,
  getConditionById,
  getConditionByIcdCode,
  searchConditions,
  type ConditionAnatomyMapping,
} from '../../core/anatomy-patient-bridge/condition-anatomy-map';

import { buildLabOrganMap } from './useLabOrganBridge';

import {
  MEDICATION_TARGET_MAP,
  getMedicationMapping,
  type MedicationTargetMapping,
} from '../../core/anatomy-patient-bridge/medication-target-map';

// ============================================
// Region/Organ Center Positions
// ============================================

/**
 * Approximate center positions for body regions
 * Used when mesh lookup fails
 */
const REGION_CENTERS: Record<string, THREE.Vector3Like> = {
  head: { x: 0, y: 0.85, z: 0 },
  neck: { x: 0, y: 0.7, z: 0 },
  chest: { x: 0, y: 0.5, z: 0.05 },
  abdomen: { x: 0, y: 0.25, z: 0.03 },
  leftArm: { x: 0.25, y: 0.45, z: 0 },
  rightArm: { x: -0.25, y: 0.45, z: 0 },
  leftLeg: { x: 0.1, y: -0.2, z: 0 },
  rightLeg: { x: -0.1, y: -0.2, z: 0 },
};

/**
 * Approximate center positions for major organs
 */
const ORGAN_CENTERS: Record<string, THREE.Vector3Like> = {
  // Head
  brain: { x: 0, y: 0.88, z: -0.02 },
  eyes: { x: 0, y: 0.85, z: 0.08 },

  // Chest
  heart: { x: 0.02, y: 0.55, z: 0.08 },
  'left-lung': { x: 0.08, y: 0.55, z: 0.02 },
  'right-lung': { x: -0.08, y: 0.55, z: 0.02 },

  // Abdomen
  liver: { x: -0.06, y: 0.35, z: 0.05 },
  stomach: { x: 0.04, y: 0.35, z: 0.06 },
  spleen: { x: 0.1, y: 0.32, z: 0.02 },
  pancreas: { x: 0.02, y: 0.3, z: 0.03 },
  kidneys: { x: 0, y: 0.28, z: -0.04 },
  'left-kidney': { x: 0.06, y: 0.28, z: -0.04 },
  'right-kidney': { x: -0.06, y: 0.28, z: -0.04 },
  'small-intestine': { x: 0, y: 0.2, z: 0.04 },
  'large-intestine': { x: 0, y: 0.15, z: 0.03 },
  prostate: { x: 0, y: 0.05, z: 0.03 },

  // Neck
  thyroid: { x: 0, y: 0.68, z: 0.05 },

  // Skeletal (used by bone-marrow-related labs like CBC)
  'bone-marrow': { x: 0, y: 0.1, z: -0.03 },
  bones: { x: 0, y: 0.1, z: -0.02 },

  // Pelvis
  pelvis: { x: 0, y: 0.05, z: 0.02 },
};

// ============================================
// Mesh Lookup Functions
// ============================================

/**
 * Find a mesh in the 3D scene by region ID
 * Searches by name, userData.regionId, and userData.structureId
 */
export function getRegionMesh(
  regionId: string,
  scene?: THREE.Scene | THREE.Object3D
): THREE.Mesh | null {
  if (!scene) return null;

  let foundMesh: THREE.Mesh | null = null;

  scene.traverse((object) => {
    if (foundMesh) return;

    if (object instanceof THREE.Mesh) {
      // Check various naming conventions
      if (
        object.name === regionId ||
        object.name.toLowerCase() === regionId.toLowerCase() ||
        object.userData?.regionId === regionId ||
        object.userData?.structureId === regionId ||
        object.name.includes(regionId)
      ) {
        foundMesh = object;
      }
    }
  });

  return foundMesh;
}

/**
 * Get the center position for a body region
 * First tries mesh lookup, then falls back to predefined positions
 */
export function getRegionCenter(
  regionId: string,
  scene?: THREE.Scene | THREE.Object3D
): THREE.Vector3Like | null {
  // Try to find mesh first
  const mesh = scene ? getRegionMesh(regionId, scene) : null;
  if (mesh) {
    const box = new THREE.Box3().setFromObject(mesh);
    const center = new THREE.Vector3();
    box.getCenter(center);
    return center;
  }

  // Fall back to predefined positions
  const normalizedId = regionId.toLowerCase().replace(/[_\s]/g, '-');
  return REGION_CENTERS[normalizedId] || REGION_CENTERS[regionId] || null;
}

/**
 * Get the center position for an organ
 */
export function getOrganCenter(
  organId: string,
  scene?: THREE.Scene | THREE.Object3D
): THREE.Vector3Like | null {
  // Try mesh lookup first
  const mesh = scene ? getRegionMesh(organId, scene) : null;
  if (mesh) {
    const box = new THREE.Box3().setFromObject(mesh);
    const center = new THREE.Vector3();
    box.getCenter(center);
    return center;
  }

  // Fall back to predefined positions
  const normalizedId = organId.toLowerCase().replace(/[_\s]/g, '-');
  return ORGAN_CENTERS[normalizedId] || ORGAN_CENTERS[organId] || null;
}

// ============================================
// Condition-Anatomy Map Resolution
// ============================================

/**
 * Resolve a patient condition to its anatomical regions using the
 * condition-anatomy-map database. Tries multiple lookup strategies:
 *   1. Exact match by normalized condition name (kebab-case ID)
 *   2. ICD-10 code lookup
 *   3. Fuzzy search by condition name
 *
 * Returns the ConditionAnatomyMapping if found, or undefined.
 */
export function resolveConditionAnatomyMapping(
  condition: PatientCondition
): ConditionAnatomyMapping | undefined {
  // Strategy 1: Normalize name to kebab-case ID and do exact lookup
  const normalizedId = condition.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const exactMatch = getConditionById(normalizedId);
  if (exactMatch) return exactMatch;

  // Strategy 2: Try ICD code lookup
  if (condition.icdCode) {
    const icdMatch = getConditionByIcdCode(condition.icdCode);
    if (icdMatch) return icdMatch;
  }

  // Strategy 3: Fuzzy search by condition name
  const searchResults = searchConditions(condition.name);
  if (searchResults.length > 0) {
    return searchResults[0];
  }

  return undefined;
}

/**
 * Get the highlight color for a condition, using the condition-anatomy-map's
 * visualization hint if available, falling back to severity-based colors.
 */
export function getConditionHighlightColor(
  condition: PatientCondition,
  anatomyMapping?: ConditionAnatomyMapping
): string {
  // Use the anatomy map's suggested color if available
  if (anatomyMapping?.visualizationHint?.color) {
    return anatomyMapping.visualizationHint.color;
  }

  // Fall back to severity-based color
  return SEVERITY_COLORS[condition.severity];
}

/**
 * Get the highlight intensity for a condition, using the condition-anatomy-map's
 * visualization hint if available, falling back to severity-based intensity.
 */
export function getConditionHighlightIntensity(
  condition: PatientCondition,
  anatomyMapping?: ConditionAnatomyMapping
): number {
  // Use the anatomy map's suggested intensity if available
  if (anatomyMapping?.visualizationHint?.intensity) {
    switch (anatomyMapping.visualizationHint.intensity) {
      case 'low': return 0.3;
      case 'medium': return 0.6;
      case 'high': return 1.0;
    }
  }

  // Fall back to severity-based intensity
  return getSeverityIntensity(condition.severity);
}

// ============================================
// Bridge Creation Functions
// ============================================

/**
 * Create an AnatomyPatientBridge from patient data.
 * Maps medical data to anatomical visualization regions.
 *
 * Enhanced: When a condition has empty affectedRegions/affectedOrgans,
 * the bridge now consults the condition-anatomy-map database to
 * automatically resolve the affected anatomical regions from the
 * condition's name or ICD code.
 */
export function createBridge(patientData: BiologicalSelf): AnatomyPatientBridge {
  const conditionsByRegion = new Map<string, RegionCondition[]>();
  const symptomsByRegion = new Map<string, RegionSymptom[]>();
  const labsByOrgan = new Map<string, OrganLab[]>();
  const medicationTargets = new Map<string, MedicationTarget[]>();

  // Map conditions to regions
  patientData.conditions.forEach((condition) => {
    // Try to resolve from the condition-anatomy-map for richer data
    const anatomyMapping = resolveConditionAnatomyMapping(condition);

    const highlightIntensity = getConditionHighlightIntensity(condition, anatomyMapping);
    const color = getConditionHighlightColor(condition, anatomyMapping);

    // Determine the regions to highlight.
    // Priority:
    //   1. Explicitly set affectedRegions/affectedOrgans on the condition
    //   2. Regions from the condition-anatomy-map (primary + secondary)
    const hasExplicitRegions =
      (condition.affectedRegions && condition.affectedRegions.length > 0) ||
      (condition.affectedOrgans && condition.affectedOrgans.length > 0);

    if (hasExplicitRegions) {
      // Use explicit regions (original behavior)
      condition.affectedRegions.forEach((regionId, index) => {
        const regionConditions = conditionsByRegion.get(regionId) || [];
        regionConditions.push({
          condition,
          highlightIntensity,
          color,
          isPrimary: index === 0,
        });
        conditionsByRegion.set(regionId, regionConditions);
      });

      condition.affectedOrgans.forEach((organId, index) => {
        const organConditions = conditionsByRegion.get(organId) || [];
        organConditions.push({
          condition,
          highlightIntensity,
          color,
          isPrimary: index === 0,
        });
        conditionsByRegion.set(organId, organConditions);
      });
    } else if (anatomyMapping) {
      // Auto-resolve from condition-anatomy-map
      // Add primary regions with full intensity
      anatomyMapping.primaryRegions.forEach((regionId, index) => {
        const regionConditions = conditionsByRegion.get(regionId) || [];
        regionConditions.push({
          condition,
          highlightIntensity,
          color,
          isPrimary: index === 0,
        });
        conditionsByRegion.set(regionId, regionConditions);
      });

      // Add secondary regions with reduced intensity
      if (anatomyMapping.secondaryRegions) {
        anatomyMapping.secondaryRegions.forEach((regionId) => {
          const regionConditions = conditionsByRegion.get(regionId) || [];
          regionConditions.push({
            condition,
            highlightIntensity: highlightIntensity * 0.5, // Dimmer for secondary
            color,
            isPrimary: false,
          });
          conditionsByRegion.set(regionId, regionConditions);
        });
      }
    }
  });

  // Map symptoms to regions
  patientData.symptoms.forEach((symptom) => {
    const regionId = symptom.location;
    const regionSymptoms = symptomsByRegion.get(regionId) || [];

    regionSymptoms.push({
      symptom,
      indicatorSize: 0.01 + (symptom.severity / 10) * 0.02,
      indicatorColor: getSeverityColor(symptom.severity),
    });

    symptomsByRegion.set(regionId, regionSymptoms);
  });

  // Map lab results to organs using the lab-organ-map database.
  // This automatically resolves organ mapping from lab test names/LOINC codes,
  // applies real medical reference ranges, and enriches with clinical interpretations.
  // Falls back to lab.relatedOrgan for unmapped tests.
  const enrichedLabMap = buildLabOrganMap(patientData.labResults, {
    abnormalOnly: false,
  });
  for (const [organKey, enrichedLabs] of enrichedLabMap) {
    const existing = labsByOrgan.get(organKey) || [];
    for (const enrichedLab of enrichedLabs) {
      existing.push({
        lab: enrichedLab.lab,
        direction: enrichedLab.direction,
        urgency: enrichedLab.urgency,
      });
    }
    labsByOrgan.set(organKey, existing);
  }

  // Map medications to target organs using the medication-target-map
  // for real pharmacology-backed organ targeting
  patientData.medications.forEach((medication) => {
    // Normalize the medication ID/name for lookup
    const normalizedId = medication.id
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    const normalizedName = medication.name
      .toLowerCase()
      .replace(/\s+\d+\s*mg.*$/i, '')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

    // Try to find the real target mapping
    const targetMapping =
      getMedicationMapping(medication.id) ??
      getMedicationMapping(normalizedId) ??
      getMedicationMapping(normalizedName) ??
      Object.values(MEDICATION_TARGET_MAP).find(
        (m) => m.medicationName.toLowerCase() === medication.name.toLowerCase()
      );

    if (targetMapping) {
      // Use real pharmacology data for organ targeting
      // Primary targets are therapeutic
      for (const target of targetMapping.primaryTargets) {
        const organMeds = medicationTargets.get(target.organ) || [];
        organMeds.push({
          medication,
          effectType: 'therapeutic',
          isPrimaryTarget: true,
        });
        medicationTargets.set(target.organ, organMeds);
      }

      // Secondary targets: classify as protective or side-effect
      if (targetMapping.secondaryTargets) {
        for (const target of targetMapping.secondaryTargets) {
          const effectText = target.effect.toLowerCase();
          let effectType: MedicationTarget['effectType'] = 'therapeutic';

          if (
            effectText.includes('protect') ||
            effectText.includes('reduces remodeling') ||
            effectText.includes('nephroprotect') ||
            (effectText.includes('cardiovascular') && effectText.includes('benefit'))
          ) {
            effectType = 'protective';
          } else if (
            effectText.includes('may cause') ||
            effectText.includes('risk of') ||
            effectText.includes('may affect') ||
            effectText.includes('toxicity') ||
            effectText.includes('sensitivity') ||
            effectText.includes('damage') ||
            effectText.includes('disrupt') ||
            effectText.includes('prolong')
          ) {
            effectType = 'side-effect';
          }

          const organMeds = medicationTargets.get(target.organ) || [];
          organMeds.push({
            medication,
            effectType,
            isPrimaryTarget: false,
          });
          medicationTargets.set(target.organ, organMeds);
        }
      }
    } else {
      // Fallback: use the targetOrgans from PatientMedication (original behavior)
      medication.targetOrgans.forEach((organId, index) => {
        const organMeds = medicationTargets.get(organId) || [];
        organMeds.push({
          medication,
          effectType: 'therapeutic',
          isPrimaryTarget: index === 0,
        });
        medicationTargets.set(organId, organMeds);
      });
    }
  });

  return {
    conditionsByRegion,
    symptomsByRegion,
    labsByOrgan,
    medicationTargets,
  };
}

/**
 * Create a condition-only bridge map from core BiologicalSelf conditions.
 *
 * This is a convenience function for components that only need
 * the conditionsByRegion map (like ConditionHighlights). It accepts
 * conditions that may not have affectedRegions/affectedOrgans set,
 * and resolves regions automatically from the condition-anatomy-map.
 *
 * @param conditions - Array of patient conditions (from core or UI types)
 * @returns Map of regionId -> RegionCondition[] ready for ConditionHighlights
 */
export function buildConditionRegionMap(
  conditions: Array<{
    id: string;
    name: string;
    status: string;
    severity?: 'mild' | 'moderate' | 'severe';
    icdCode?: string;
    affectedRegions?: string[];
    affectedOrgans?: string[];
  }>
): Map<string, RegionCondition[]> {
  const conditionsByRegion = new Map<string, RegionCondition[]>();

  for (const condition of conditions) {
    // Skip resolved conditions
    if (condition.status === 'resolved') continue;

    // Normalize to PatientCondition shape for resolution
    const patientCondition: PatientCondition = {
      id: condition.id,
      name: condition.name,
      status: (condition.status as PatientCondition['status']) || 'active',
      severity: condition.severity || 'moderate',
      affectedRegions: condition.affectedRegions || [],
      affectedOrgans: condition.affectedOrgans || [],
      icdCode: condition.icdCode,
    };

    const anatomyMapping = resolveConditionAnatomyMapping(patientCondition);
    const highlightIntensity = getConditionHighlightIntensity(patientCondition, anatomyMapping);
    const color = getConditionHighlightColor(patientCondition, anatomyMapping);

    const hasExplicitRegions =
      patientCondition.affectedRegions.length > 0 ||
      patientCondition.affectedOrgans.length > 0;

    const addToRegion = (regionId: string, isPrimary: boolean, intensity: number) => {
      const existing = conditionsByRegion.get(regionId) || [];
      existing.push({
        condition: patientCondition,
        highlightIntensity: intensity,
        color,
        isPrimary,
      });
      conditionsByRegion.set(regionId, existing);
    };

    if (hasExplicitRegions) {
      patientCondition.affectedRegions.forEach((r, i) => addToRegion(r, i === 0, highlightIntensity));
      patientCondition.affectedOrgans.forEach((o, i) => addToRegion(o, i === 0, highlightIntensity));
    } else if (anatomyMapping) {
      anatomyMapping.primaryRegions.forEach((r, i) => addToRegion(r, i === 0, highlightIntensity));
      anatomyMapping.secondaryRegions?.forEach((r) => addToRegion(r, false, highlightIntensity * 0.5));
    }
  }

  return conditionsByRegion;
}

// ============================================
// Severity/Status Helper Functions
// ============================================

/**
 * Get severity level (low/medium/high) from numeric severity (1-10)
 */
export function getSeverityLevel(severity: number): 'low' | 'medium' | 'high' {
  if (severity <= 3) return 'low';
  if (severity <= 6) return 'medium';
  return 'high';
}

/**
 * Get severity intensity (0-1) from severity level
 */
export function getSeverityIntensity(severity: 'mild' | 'moderate' | 'severe'): number {
  switch (severity) {
    case 'mild':
      return 0.3;
    case 'moderate':
      return 0.6;
    case 'severe':
      return 1.0;
    default:
      return 0.5;
  }
}

/**
 * Get color for numeric severity (1-10)
 */
export function getSeverityColor(severity: number): string {
  const level = getSeverityLevel(severity);
  switch (level) {
    case 'low':
      return SEVERITY_COLORS.mild;
    case 'medium':
      return SEVERITY_COLORS.moderate;
    case 'high':
      return SEVERITY_COLORS.severe;
    default:
      return SEVERITY_COLORS.mild;
  }
}

/**
 * Get lab result direction
 */
export function getLabDirection(lab: { status: string }): 'up' | 'down' | 'normal' {
  if (lab.status === 'high' || lab.status === 'critical-high') return 'up';
  if (lab.status === 'low' || lab.status === 'critical-low') return 'down';
  return 'normal';
}

/**
 * Get lab result urgency
 */
export function getLabUrgency(lab: { status: string }): 'routine' | 'attention' | 'urgent' {
  if (lab.status.includes('critical')) return 'urgent';
  if (lab.status === 'high' || lab.status === 'low') return 'attention';
  return 'routine';
}

// ============================================
// Highlight Effect Functions
// ============================================

/**
 * Apply a highlight effect to a mesh
 * Returns a new mesh with highlight material
 */
export function highlightMesh(
  mesh: THREE.Mesh,
  options: Partial<HighlightOptions> = {}
): THREE.Mesh {
  const opts = { ...DEFAULT_HIGHLIGHT_OPTIONS, ...options };

  const material = new THREE.MeshStandardMaterial({
    color: opts.color,
    emissive: opts.emissive ? opts.color : undefined,
    emissiveIntensity: opts.intensity,
    transparent: true,
    opacity: opts.opacity,
    side: THREE.FrontSide,
  });

  const highlightMesh = new THREE.Mesh(mesh.geometry.clone(), material);
  highlightMesh.position.copy(mesh.position);
  highlightMesh.rotation.copy(mesh.rotation);
  highlightMesh.scale.copy(mesh.scale).multiplyScalar(1.02);
  highlightMesh.renderOrder = mesh.renderOrder + 1;
  highlightMesh.name = `${mesh.name}-highlight`;

  return highlightMesh;
}

/**
 * Remove highlight from a mesh
 */
export function removeHighlight(
  parent: THREE.Object3D,
  meshName: string
): void {
  const highlightName = `${meshName}-highlight`;
  const highlight = parent.getObjectByName(highlightName);
  if (highlight) {
    parent.remove(highlight);
    if (highlight instanceof THREE.Mesh) {
      highlight.geometry?.dispose();
      if (highlight.material instanceof THREE.Material) {
        highlight.material.dispose();
      }
    }
  }
}

// ============================================
// Animation Utilities
// ============================================

/**
 * Easing function for smooth pulse animation
 */
export function easeInOutSine(t: number): number {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

/**
 * Create a pulse animation value
 */
export function getPulseValue(
  time: number,
  speed: number = 1,
  min: number = 0.5,
  max: number = 1
): number {
  const normalized = (Math.sin(time * speed * Math.PI * 2) + 1) / 2;
  return min + (max - min) * normalized;
}

// ============================================
// Coordinate Utilities
// ============================================

/**
 * Convert world position to screen position
 */
export function worldToScreen(
  position: THREE.Vector3,
  camera: THREE.Camera,
  renderer: THREE.WebGLRenderer
): { x: number; y: number } {
  const vector = position.clone().project(camera);
  const width = renderer.domElement.clientWidth;
  const height = renderer.domElement.clientHeight;

  return {
    x: (vector.x + 1) / 2 * width,
    y: -(vector.y - 1) / 2 * height,
  };
}

/**
 * Check if a position is within camera frustum (visible)
 */
export function isInView(
  position: THREE.Vector3,
  camera: THREE.Camera
): boolean {
  const frustum = new THREE.Frustum();
  const matrix = new THREE.Matrix4().multiplyMatrices(
    camera.projectionMatrix,
    camera.matrixWorldInverse
  );
  frustum.setFromProjectionMatrix(matrix);
  return frustum.containsPoint(position);
}
