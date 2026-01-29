/**
 * Health Overlay Utilities
 *
 * Utility functions for the Health Overlay visualization system.
 * Includes helpers for mesh lookup, bridge creation, and coordinate mapping.
 */

import * as THREE from 'three';

import {
  type BiologicalSelf,
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
  'left-kidney': { x: 0.06, y: 0.28, z: -0.04 },
  'right-kidney': { x: -0.06, y: 0.28, z: -0.04 },
  'small-intestine': { x: 0, y: 0.2, z: 0.04 },
  'large-intestine': { x: 0, y: 0.15, z: 0.03 },

  // Neck
  thyroid: { x: 0, y: 0.68, z: 0.05 },
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
// Bridge Creation Functions
// ============================================

/**
 * Create an AnatomyPatientBridge from patient data
 * Maps medical data to anatomical visualization regions
 */
export function createBridge(patientData: BiologicalSelf): AnatomyPatientBridge {
  const conditionsByRegion = new Map<string, RegionCondition[]>();
  const symptomsByRegion = new Map<string, RegionSymptom[]>();
  const labsByOrgan = new Map<string, OrganLab[]>();
  const medicationTargets = new Map<string, MedicationTarget[]>();

  // Map conditions to regions
  patientData.conditions.forEach((condition) => {
    const highlightIntensity = getSeverityIntensity(condition.severity);
    const color = SEVERITY_COLORS[condition.severity];

    // Add to each affected region
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

    // Also add to affected organs
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

  // Map lab results to organs
  patientData.labResults.forEach((lab) => {
    if (!lab.relatedOrgan) return;

    const organLabs = labsByOrgan.get(lab.relatedOrgan) || [];

    organLabs.push({
      lab,
      direction: getLabDirection(lab),
      urgency: getLabUrgency(lab),
    });

    labsByOrgan.set(lab.relatedOrgan, organLabs);
  });

  // Map medications to target organs
  patientData.medications.forEach((medication) => {
    // Primary targets (therapeutic)
    medication.targetOrgans.forEach((organId, index) => {
      const organMeds = medicationTargets.get(organId) || [];
      organMeds.push({
        medication,
        effectType: 'therapeutic',
        isPrimaryTarget: index === 0,
      });
      medicationTargets.set(organId, organMeds);
    });
  });

  return {
    conditionsByRegion,
    symptomsByRegion,
    labsByOrgan,
    medicationTargets,
  };
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
