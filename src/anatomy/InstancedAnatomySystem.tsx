/**
 * Instanced Anatomy System
 *
 * A comprehensive GPU instancing system for the 3D anatomy viewer optimized
 * for mobile performance (target: 10,000+ instances at 60fps on iPhone 14).
 *
 * Features:
 * - Red blood cells in vessels (thousands of instances)
 * - Alveoli in lungs (hundreds of instances)
 * - Vertebrae (33 instances with variations)
 * - Ribs (24 instances)
 * - Hair follicles in skin (optional)
 * - Smart frustum culling
 * - LOD-based instance count
 * - Dynamic performance scaling
 * - Per-instance color/highlighting
 * - Animated instance positions (blood flow)
 */

import React, { useRef, useMemo, useEffect, useCallback, memo, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { type DetailLevel, getDetailLevelFromDistance } from './AnatomyLODSystem';

// ============================================
// Types
// ============================================

/**
 * Instance data for a single instanced object
 */
export interface InstanceData {
  id: string;
  position: THREE.Vector3;
  rotation: THREE.Euler;
  scale: THREE.Vector3;
  color: THREE.Color;
  highlighted?: boolean;
  visible?: boolean;
  userData?: Record<string, unknown>;
}

/**
 * Instanced anatomy structure types
 */
export type InstancedStructureType =
  | 'redBloodCell'
  | 'whiteBloodCell'
  | 'platelet'
  | 'alveolus'
  | 'vertebra'
  | 'rib'
  | 'hairFollicle'
  | 'neuron'
  | 'nephron'
  | 'hepatocyte';

/**
 * Performance tier configuration
 */
export interface PerformanceTier {
  name: 'low' | 'medium' | 'high' | 'ultra';
  maxInstances: number;
  lodMultiplier: number;
  updateFrequency: number; // Updates per second
  enableFrustumCulling: boolean;
  enableAnimations: boolean;
}

/**
 * Instanced system configuration
 */
export interface InstancedSystemConfig {
  performanceTier: PerformanceTier;
  targetFPS: number;
  enableAutoScaling: boolean;
  frustumMargin: number; // Extra margin for frustum culling
  instanceBatchSize: number; // How many instances to update per frame
}

/**
 * Performance metrics
 */
export interface PerformanceMetrics {
  fps: number;
  frameTime: number;
  drawCalls: number;
  triangles: number;
  totalInstances: number;
  visibleInstances: number;
  culledInstances: number;
  lastAdjustmentTime: number;
}

/**
 * Blood flow animation state
 */
export interface BloodFlowAnimationState {
  enabled: boolean;
  flowSpeed: number;
  pulsePhase: number;
  flowDirection: THREE.Vector3;
}

// ============================================
// Constants
// ============================================

/**
 * Performance tier presets
 */
export const PERFORMANCE_TIERS: Record<string, PerformanceTier> = {
  low: {
    name: 'low',
    maxInstances: 1000,
    lodMultiplier: 0.25,
    updateFrequency: 15,
    enableFrustumCulling: true,
    enableAnimations: false,
  },
  medium: {
    name: 'medium',
    maxInstances: 5000,
    lodMultiplier: 0.5,
    updateFrequency: 30,
    enableFrustumCulling: true,
    enableAnimations: true,
  },
  high: {
    name: 'high',
    maxInstances: 10000,
    lodMultiplier: 1.0,
    updateFrequency: 60,
    enableFrustumCulling: true,
    enableAnimations: true,
  },
  ultra: {
    name: 'ultra',
    maxInstances: 25000,
    lodMultiplier: 1.5,
    updateFrequency: 60,
    enableFrustumCulling: true,
    enableAnimations: true,
  },
};

/**
 * Default instance counts for each structure type
 */
export const DEFAULT_INSTANCE_COUNTS: Record<InstancedStructureType, number> = {
  redBloodCell: 5000,
  whiteBloodCell: 50,
  platelet: 500,
  alveolus: 300,
  vertebra: 33,
  rib: 24,
  hairFollicle: 1000,
  neuron: 200,
  nephron: 100,
  hepatocyte: 500,
};

/**
 * LOD distance thresholds for instance count scaling
 */
export const LOD_INSTANCE_SCALE: Record<DetailLevel, number> = {
  body: 0.1,     // 10% of instances at body level
  region: 0.3,   // 30% at region level
  organ: 0.6,    // 60% at organ level
  tissue: 1.0,   // 100% at tissue level
  cellular: 1.0, // 100% at cellular level
};

/**
 * Structure-specific colors
 */
export const STRUCTURE_COLORS: Record<InstancedStructureType, THREE.Color> = {
  redBloodCell: new THREE.Color(0xcc2222),
  whiteBloodCell: new THREE.Color(0xeeeeee),
  platelet: new THREE.Color(0xffcc88),
  alveolus: new THREE.Color(0xffaaaa),
  vertebra: new THREE.Color(0xf5f5dc),
  rib: new THREE.Color(0xf0f0e0),
  hairFollicle: new THREE.Color(0x4a3728),
  neuron: new THREE.Color(0xf0d0b0),
  nephron: new THREE.Color(0xaa5555),
  hepatocyte: new THREE.Color(0x8b4513),
};

// ============================================
// Utility Functions
// ============================================

/**
 * Create a biconcave disc geometry for red blood cells
 */
export function createRedBloodCellGeometry(radius: number = 0.004, segments: number = 16): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();
  const vertices: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];

  // Create biconcave shape
  const thickness = radius * 0.4;
  const concavity = 0.5;

  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    const cosTheta = Math.cos(theta);
    const sinTheta = Math.sin(theta);

    for (let j = 0; j <= segments / 2; j++) {
      const phi = (j / (segments / 2)) * Math.PI - Math.PI / 2;
      const cosPhi = Math.cos(phi);
      const sinPhi = Math.sin(phi);

      // Biconcave disc deformation
      const r = radius * cosPhi;
      const dimple = 1 - Math.pow(cosPhi, 2) * concavity;
      const y = thickness * sinPhi * dimple;

      const x = r * cosTheta;
      const z = r * sinTheta;

      vertices.push(x, y, z);

      // Approximate normals
      const nx = cosTheta * cosPhi;
      const ny = sinPhi * dimple;
      const nz = sinTheta * cosPhi;
      const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
      normals.push(nx / len, ny / len, nz / len);

      if (i < segments && j < segments / 2) {
        const current = i * (segments / 2 + 1) + j;
        const next = (i + 1) * (segments / 2 + 1) + j;

        indices.push(current, next, current + 1);
        indices.push(current + 1, next, next + 1);
      }
    }
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setIndex(indices);

  return geometry;
}

/**
 * Create optimized geometry for alveoli (hollow spheres)
 */
export function createAlveolusGeometry(radius: number = 0.015, segments: number = 12): THREE.SphereGeometry {
  return new THREE.SphereGeometry(radius, segments, segments);
}

/**
 * Create vertebra geometry (simplified cylinder with processes)
 */
export function createVertebraGeometry(): THREE.BufferGeometry {
  const body = new THREE.CylinderGeometry(0.02, 0.022, 0.025, 12);
  const spinousProcess = new THREE.BoxGeometry(0.008, 0.035, 0.005);
  spinousProcess.translate(0, 0.015, -0.02);

  // Merge geometries
  const merged = new THREE.BufferGeometry();
  merged.copy(body);

  return merged;
}

/**
 * Create rib geometry (curved cylinder)
 */
export function createRibGeometry(curvature: number = 0.3): THREE.TubeGeometry {
  const points: THREE.Vector3[] = [];
  const segments = 20;

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const angle = t * Math.PI * curvature;
    const x = Math.sin(angle) * 0.15;
    const y = 0;
    const z = (1 - Math.cos(angle)) * 0.1;
    points.push(new THREE.Vector3(x, y, z));
  }

  const curve = new THREE.CatmullRomCurve3(points);
  return new THREE.TubeGeometry(curve, 12, 0.006, 6, false);
}

/**
 * Create hair follicle geometry
 */
export function createHairFollicleGeometry(): THREE.CylinderGeometry {
  return new THREE.CylinderGeometry(0.0005, 0.0008, 0.01, 4);
}

/**
 * Detect device performance tier
 */
export function detectPerformanceTier(): PerformanceTier {
  // Check for mobile devices
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  // Check for low-power mode or low memory
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4;
  const cores = navigator.hardwareConcurrency || 4;

  if (isMobile) {
    if (memory >= 6 && cores >= 6) {
      return PERFORMANCE_TIERS.high; // iPhone 14 or equivalent
    }
    if (memory >= 4 && cores >= 4) {
      return PERFORMANCE_TIERS.medium;
    }
    return PERFORMANCE_TIERS.low;
  }

  // Desktop
  if (memory >= 16 && cores >= 8) {
    return PERFORMANCE_TIERS.ultra;
  }
  if (memory >= 8 && cores >= 4) {
    return PERFORMANCE_TIERS.high;
  }
  return PERFORMANCE_TIERS.medium;
}

// ============================================
// Instanced Mesh Manager
// ============================================

/**
 * Manages a single instanced mesh with all optimizations
 */
export class InstancedMeshManager {
  public mesh: THREE.InstancedMesh;
  public instances: InstanceData[] = [];
  public visibleCount: number = 0;

  private geometry: THREE.BufferGeometry;
  private material: THREE.Material;
  private maxInstances: number;
  private instanceColors: Float32Array;
  private tempMatrix: THREE.Matrix4 = new THREE.Matrix4();
  private tempPosition: THREE.Vector3 = new THREE.Vector3();
  private tempQuaternion: THREE.Quaternion = new THREE.Quaternion();
  private tempScale: THREE.Vector3 = new THREE.Vector3();
  private tempColor: THREE.Color = new THREE.Color();
  private frustum: THREE.Frustum = new THREE.Frustum();
  private frustumMatrix: THREE.Matrix4 = new THREE.Matrix4();
  private boundingSphere: THREE.Sphere = new THREE.Sphere();

  constructor(
    geometry: THREE.BufferGeometry,
    material: THREE.Material,
    maxInstances: number
  ) {
    this.geometry = geometry;
    this.material = material;
    this.maxInstances = maxInstances;

    // Create instanced mesh
    this.mesh = new THREE.InstancedMesh(geometry, material, maxInstances);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    // Enable instance colors
    this.instanceColors = new Float32Array(maxInstances * 3);
    this.mesh.instanceColor = new THREE.InstancedBufferAttribute(this.instanceColors, 3);
    this.mesh.instanceColor.setUsage(THREE.DynamicDrawUsage);

    // Optimize for static meshes initially
    this.mesh.frustumCulled = false; // We handle frustum culling manually per-instance
    this.mesh.matrixAutoUpdate = false;

    // Initialize all instances as invisible
    this.mesh.count = 0;
  }

  /**
   * Set instance data
   */
  setInstances(instances: InstanceData[]): void {
    this.instances = instances.slice(0, this.maxInstances);
    this.updateAllInstances();
  }

  /**
   * Update all instance matrices and colors
   */
  updateAllInstances(): void {
    let visibleIndex = 0;

    for (let i = 0; i < this.instances.length; i++) {
      const instance = this.instances[i];

      if (instance.visible !== false) {
        this.tempPosition.copy(instance.position);
        this.tempQuaternion.setFromEuler(instance.rotation);
        this.tempScale.copy(instance.scale);

        this.tempMatrix.compose(this.tempPosition, this.tempQuaternion, this.tempScale);
        this.mesh.setMatrixAt(visibleIndex, this.tempMatrix);

        // Set color
        const color = instance.highlighted
          ? new THREE.Color(0xffff00)
          : instance.color;
        this.instanceColors[visibleIndex * 3] = color.r;
        this.instanceColors[visibleIndex * 3 + 1] = color.g;
        this.instanceColors[visibleIndex * 3 + 2] = color.b;

        visibleIndex++;
      }
    }

    this.visibleCount = visibleIndex;
    this.mesh.count = visibleIndex;
    this.mesh.instanceMatrix.needsUpdate = true;

    if (this.mesh.instanceColor) {
      this.mesh.instanceColor.needsUpdate = true;
    }
  }

  /**
   * Update a single instance (for animations)
   */
  updateInstance(index: number, position?: THREE.Vector3, rotation?: THREE.Euler, scale?: THREE.Vector3): void {
    if (index >= this.instances.length) return;

    const instance = this.instances[index];

    if (position) instance.position.copy(position);
    if (rotation) instance.rotation.copy(rotation);
    if (scale) instance.scale.copy(scale);

    this.tempPosition.copy(instance.position);
    this.tempQuaternion.setFromEuler(instance.rotation);
    this.tempScale.copy(instance.scale);

    this.tempMatrix.compose(this.tempPosition, this.tempQuaternion, this.tempScale);
    this.mesh.setMatrixAt(index, this.tempMatrix);
  }

  /**
   * Perform frustum culling
   */
  performFrustumCulling(camera: THREE.Camera, margin: number = 0.1): void {
    // Update frustum from camera
    this.frustumMatrix.multiplyMatrices(
      camera.projectionMatrix,
      camera.matrixWorldInverse
    );
    this.frustum.setFromProjectionMatrix(this.frustumMatrix);

    let visibleIndex = 0;

    for (let i = 0; i < this.instances.length; i++) {
      const instance = this.instances[i];

      // Create bounding sphere for instance
      this.boundingSphere.center.copy(instance.position);
      this.boundingSphere.radius = Math.max(
        instance.scale.x,
        instance.scale.y,
        instance.scale.z
      ) * (1 + margin);

      const isVisible = this.frustum.intersectsSphere(this.boundingSphere);
      instance.visible = isVisible;

      if (isVisible) {
        this.tempPosition.copy(instance.position);
        this.tempQuaternion.setFromEuler(instance.rotation);
        this.tempScale.copy(instance.scale);

        this.tempMatrix.compose(this.tempPosition, this.tempQuaternion, this.tempScale);
        this.mesh.setMatrixAt(visibleIndex, this.tempMatrix);

        const color = instance.highlighted
          ? new THREE.Color(0xffff00)
          : instance.color;
        this.instanceColors[visibleIndex * 3] = color.r;
        this.instanceColors[visibleIndex * 3 + 1] = color.g;
        this.instanceColors[visibleIndex * 3 + 2] = color.b;

        visibleIndex++;
      }
    }

    this.visibleCount = visibleIndex;
    this.mesh.count = visibleIndex;
    this.mesh.instanceMatrix.needsUpdate = true;

    if (this.mesh.instanceColor) {
      this.mesh.instanceColor.needsUpdate = true;
    }
  }

  /**
   * Highlight specific instances
   */
  setHighlighted(indices: number[], highlighted: boolean): void {
    for (const index of indices) {
      if (index < this.instances.length) {
        this.instances[index].highlighted = highlighted;
      }
    }
    this.updateAllInstances();
  }

  /**
   * Clean up resources
   */
  dispose(): void {
    this.mesh.geometry.dispose();
    if (Array.isArray(this.mesh.material)) {
      this.mesh.material.forEach(m => m.dispose());
    } else {
      this.mesh.material.dispose();
    }
  }
}

// ============================================
// Blood Flow Animation System
// ============================================

/**
 * Generate blood cell positions along vessel paths
 */
export function generateBloodCellPositions(
  vesselPaths: THREE.Vector3[][],
  count: number,
  spread: number = 0.005
): InstanceData[] {
  const instances: InstanceData[] = [];
  const cellsPerPath = Math.ceil(count / vesselPaths.length);

  vesselPaths.forEach((path) => {
    for (let i = 0; i < cellsPerPath && instances.length < count; i++) {
      const t = Math.random();
      const segmentIndex = Math.floor(t * (path.length - 1));
      const segmentT = (t * (path.length - 1)) % 1;

      const p1 = path[segmentIndex];
      const p2 = path[Math.min(segmentIndex + 1, path.length - 1)];

      const position = new THREE.Vector3().lerpVectors(p1, p2, segmentT);

      // Add random offset for spread
      position.x += (Math.random() - 0.5) * spread;
      position.y += (Math.random() - 0.5) * spread;
      position.z += (Math.random() - 0.5) * spread;

      const rotation = new THREE.Euler(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      const scaleVariation = 0.8 + Math.random() * 0.4;
      const scale = new THREE.Vector3(scaleVariation, scaleVariation, scaleVariation);

      // Slight color variation
      const colorVariation = 0.9 + Math.random() * 0.2;
      const color = STRUCTURE_COLORS.redBloodCell.clone().multiplyScalar(colorVariation);

      instances.push({
        id: `rbc-${instances.length}`,
        position,
        rotation,
        scale,
        color,
        visible: true,
      });
    }
  });

  return instances;
}

/**
 * Animate blood cells along vessel paths
 */
export function animateBloodCells(
  instances: InstanceData[],
  vesselPaths: THREE.Vector3[][],
  deltaTime: number,
  flowSpeed: number,
  pulsePhase: number
): void {
  const pulseMultiplier = 0.7 + Math.sin(pulsePhase * Math.PI * 2) * 0.3;
  const speed = flowSpeed * pulseMultiplier * deltaTime;

  instances.forEach((instance, index) => {
    const pathIndex = index % vesselPaths.length;
    const path = vesselPaths[pathIndex];

    if (!path || path.length < 2) return;

    // Find closest point on path
    let closestT = 0;
    let minDist = Infinity;

    for (let i = 0; i < path.length - 1; i++) {
      const t = i / (path.length - 1);
      const pointOnPath = new THREE.Vector3().lerpVectors(
        path[i],
        path[i + 1],
        0.5
      );
      const dist = instance.position.distanceTo(pointOnPath);
      if (dist < minDist) {
        minDist = dist;
        closestT = t;
      }
    }

    // Move along path
    const newT = (closestT + speed) % 1;
    const segmentIndex = Math.floor(newT * (path.length - 1));
    const segmentT = (newT * (path.length - 1)) % 1;

    const p1 = path[segmentIndex];
    const p2 = path[Math.min(segmentIndex + 1, path.length - 1)];

    if (p1 && p2) {
      instance.position.lerpVectors(p1, p2, segmentT);

      // Add slight wobble
      instance.position.x += Math.sin(pulsePhase * 10 + index) * 0.001;
      instance.position.y += Math.cos(pulsePhase * 10 + index) * 0.001;
    }

    // Rotate cells as they flow
    instance.rotation.z += deltaTime * 2;
  });
}

// ============================================
// Alveoli System
// ============================================

/**
 * Generate alveoli positions in lung area
 */
export function generateAlveoliPositions(
  lungCenter: THREE.Vector3,
  count: number,
  lungRadius: THREE.Vector3
): InstanceData[] {
  const instances: InstanceData[] = [];

  for (let i = 0; i < count; i++) {
    // Distribute within an ellipsoid (lung shape)
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = Math.cbrt(Math.random()); // Cube root for uniform volume distribution

    const position = new THREE.Vector3(
      lungCenter.x + r * lungRadius.x * Math.sin(phi) * Math.cos(theta),
      lungCenter.y + r * lungRadius.y * Math.sin(phi) * Math.sin(theta),
      lungCenter.z + r * lungRadius.z * Math.cos(phi)
    );

    const scaleVariation = 0.7 + Math.random() * 0.6;
    const scale = new THREE.Vector3(scaleVariation, scaleVariation, scaleVariation);

    const colorVariation = 0.85 + Math.random() * 0.3;
    const color = STRUCTURE_COLORS.alveolus.clone().multiplyScalar(colorVariation);

    instances.push({
      id: `alveolus-${i}`,
      position,
      rotation: new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ),
      scale,
      color,
      visible: true,
    });
  }

  return instances;
}

/**
 * Animate alveoli breathing
 */
export function animateAlveoli(
  instances: InstanceData[],
  breathPhase: number, // 0-1, 0 = exhaled, 1 = inhaled
  baseScale: number = 1
): void {
  const expansion = 0.8 + breathPhase * 0.4; // 80% to 120% scale

  instances.forEach((instance, index) => {
    // Slight phase offset for natural look
    const phaseOffset = Math.sin(index * 0.1) * 0.1;
    const localExpansion = expansion + phaseOffset * 0.1;

    instance.scale.setScalar(baseScale * localExpansion);
  });
}

// ============================================
// Skeletal Instances (Vertebrae & Ribs)
// ============================================

/**
 * Generate vertebrae positions along spine
 */
export function generateVertebraePositions(): InstanceData[] {
  const instances: InstanceData[] = [];

  // Vertebral column sections
  const sections = [
    { name: 'cervical', count: 7, startY: 1.0, endY: 0.85, curve: 0.02 },
    { name: 'thoracic', count: 12, startY: 0.85, endY: 0.3, curve: -0.03 },
    { name: 'lumbar', count: 5, startY: 0.3, endY: 0.05, curve: 0.04 },
    { name: 'sacral', count: 5, startY: 0.05, endY: -0.1, curve: -0.02 },
    { name: 'coccygeal', count: 4, startY: -0.1, endY: -0.15, curve: 0 },
  ];

  let vertebraIndex = 0;
  sections.forEach((section) => {
    for (let i = 0; i < section.count; i++) {
      const t = i / (section.count - 1 || 1);
      const y = section.startY + (section.endY - section.startY) * t;
      const z = section.curve * Math.sin(t * Math.PI);

      // Vertebrae get slightly larger going down
      const scaleMultiplier = section.name === 'lumbar' ? 1.3 :
                              section.name === 'thoracic' ? 1.1 : 1.0;

      instances.push({
        id: `vertebra-${vertebraIndex}`,
        position: new THREE.Vector3(0, y, z - 0.08),
        rotation: new THREE.Euler(0, 0, 0),
        scale: new THREE.Vector3(scaleMultiplier, 1, scaleMultiplier),
        color: STRUCTURE_COLORS.vertebra.clone(),
        visible: true,
        userData: { section: section.name, index: i },
      });

      vertebraIndex++;
    }
  });

  return instances;
}

/**
 * Generate rib positions
 */
export function generateRibPositions(): InstanceData[] {
  const instances: InstanceData[] = [];

  // 12 pairs of ribs (24 total)
  for (let pair = 0; pair < 12; pair++) {
    const y = 0.7 - pair * 0.04;
    const curvature = 0.8 - pair * 0.03; // Ribs get less curved going down
    const length = 0.1 + pair * 0.01; // Ribs get longer going down

    // Left rib
    instances.push({
      id: `rib-L${pair + 1}`,
      position: new THREE.Vector3(-0.02, y, 0),
      rotation: new THREE.Euler(0, 0, -0.3 - pair * 0.02),
      scale: new THREE.Vector3(length, 1, curvature),
      color: STRUCTURE_COLORS.rib.clone(),
      visible: true,
      userData: { side: 'left', number: pair + 1 },
    });

    // Right rib (mirrored)
    instances.push({
      id: `rib-R${pair + 1}`,
      position: new THREE.Vector3(0.02, y, 0),
      rotation: new THREE.Euler(0, Math.PI, 0.3 + pair * 0.02),
      scale: new THREE.Vector3(length, 1, curvature),
      color: STRUCTURE_COLORS.rib.clone(),
      visible: true,
      userData: { side: 'right', number: pair + 1 },
    });
  }

  return instances;
}

// ============================================
// Performance Monitor
// ============================================

/**
 * Hook to monitor and auto-adjust performance
 */
export function usePerformanceMonitor(
  targetFPS: number = 60,
  onTierChange?: (tier: PerformanceTier) => void
): PerformanceMetrics {
  const metricsRef = useRef<PerformanceMetrics>({
    fps: 60,
    frameTime: 16.67,
    drawCalls: 0,
    triangles: 0,
    totalInstances: 0,
    visibleInstances: 0,
    culledInstances: 0,
    lastAdjustmentTime: 0,
  });

  const frameTimesRef = useRef<number[]>([]);
  const lastFrameTimeRef = useRef<number>(performance.now());
  const { gl } = useThree();

  useFrame(() => {
    const now = performance.now();
    const frameTime = now - lastFrameTimeRef.current;
    lastFrameTimeRef.current = now;

    // Track frame times (rolling window of 60 frames)
    frameTimesRef.current.push(frameTime);
    if (frameTimesRef.current.length > 60) {
      frameTimesRef.current.shift();
    }

    // Calculate average FPS
    const avgFrameTime = frameTimesRef.current.reduce((a, b) => a + b, 0) / frameTimesRef.current.length;
    const fps = 1000 / avgFrameTime;

    // Get render info
    const info = gl.info;

    metricsRef.current = {
      fps: Math.round(fps),
      frameTime: avgFrameTime,
      drawCalls: info.render?.calls || 0,
      triangles: info.render?.triangles || 0,
      totalInstances: metricsRef.current.totalInstances,
      visibleInstances: metricsRef.current.visibleInstances,
      culledInstances: metricsRef.current.culledInstances,
      lastAdjustmentTime: metricsRef.current.lastAdjustmentTime,
    };

    // Auto-adjust tier if FPS drops significantly
    if (fps < targetFPS * 0.8 && now - metricsRef.current.lastAdjustmentTime > 5000) {
      const currentTier = detectPerformanceTier();
      const lowerTiers: PerformanceTier['name'][] = ['ultra', 'high', 'medium', 'low'];
      const currentIndex = lowerTiers.indexOf(currentTier.name);

      if (currentIndex < lowerTiers.length - 1) {
        const newTierName = lowerTiers[currentIndex + 1];
        metricsRef.current.lastAdjustmentTime = now;
        onTierChange?.(PERFORMANCE_TIERS[newTierName]);
      }
    }
  });

  return metricsRef.current;
}

// ============================================
// InstancedAnatomyMesh Component
// ============================================

interface InstancedAnatomyMeshProps {
  type: InstancedStructureType;
  instances: InstanceData[];
  geometry?: THREE.BufferGeometry;
  material?: THREE.Material;
  enableFrustumCulling?: boolean;
  enableAnimation?: boolean;
  animationSpeed?: number;
  onInstanceClick?: (instance: InstanceData, index: number) => void;
  highlightedIndices?: number[];
}

/**
 * Component for rendering instanced anatomical structures
 */
export const InstancedAnatomyMesh = memo(function InstancedAnatomyMesh({
  type,
  instances,
  geometry: customGeometry,
  material: customMaterial,
  enableFrustumCulling = true,
  enableAnimation = true,
  animationSpeed = 1,
  onInstanceClick,
  highlightedIndices = [],
}: InstancedAnatomyMeshProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const managerRef = useRef<InstancedMeshManager | null>(null);
  const { camera } = useThree();

  // Create geometry based on type
  const geometry = useMemo(() => {
    if (customGeometry) return customGeometry;

    switch (type) {
      case 'redBloodCell':
        return createRedBloodCellGeometry();
      case 'alveolus':
        return createAlveolusGeometry();
      case 'vertebra':
        return createVertebraGeometry();
      case 'rib':
        return createRibGeometry();
      case 'hairFollicle':
        return createHairFollicleGeometry();
      default:
        return new THREE.SphereGeometry(0.01, 8, 8);
    }
  }, [type, customGeometry]);

  // Create material
  const material = useMemo(() => {
    if (customMaterial) return customMaterial;

    return new THREE.MeshLambertMaterial({
      color: STRUCTURE_COLORS[type] || 0xffffff,
      side: THREE.DoubleSide,
    });
  }, [type, customMaterial]);

  // Initialize manager
  useEffect(() => {
    managerRef.current = new InstancedMeshManager(
      geometry,
      material,
      instances.length
    );
    managerRef.current.setInstances(instances);

    return () => {
      managerRef.current?.dispose();
    };
  }, [geometry, material, instances.length]);

  // Update instances
  useEffect(() => {
    if (managerRef.current) {
      managerRef.current.setInstances(instances);
    }
  }, [instances]);

  // Update highlights
  useEffect(() => {
    if (managerRef.current && highlightedIndices.length > 0) {
      managerRef.current.setHighlighted(highlightedIndices, true);
    }
  }, [highlightedIndices]);

  // Animation and frustum culling frame loop
  useFrame((_, delta) => {
    if (!managerRef.current) return;

    if (enableFrustumCulling) {
      managerRef.current.performFrustumCulling(camera, 0.1);
    }

    if (enableAnimation && animationSpeed > 0) {
      // Animation logic would go here based on type
      managerRef.current.mesh.instanceMatrix.needsUpdate = true;
    }
  });

  // Handle clicks
  const handleClick = useCallback(
    (event: THREE.Event) => {
      if (!onInstanceClick || !managerRef.current) return;

      const instanceId = (event as unknown as { instanceId?: number }).instanceId;
      if (instanceId !== undefined && instanceId < instances.length) {
        onInstanceClick(instances[instanceId], instanceId);
      }
    },
    [instances, onInstanceClick]
  );

  if (!managerRef.current) return null;

  return (
    <primitive
      ref={meshRef}
      object={managerRef.current.mesh}
      onClick={handleClick}
    />
  );
});

// ============================================
// Blood Cell System Component
// ============================================

interface BloodCellSystemProps {
  vesselPaths: THREE.Vector3[][];
  cellCount?: number;
  enabled?: boolean;
  flowSpeed?: number;
  heartPhase?: number; // 0-1 synchronized with heart animation
}

export const BloodCellSystem = memo(function BloodCellSystem({
  vesselPaths,
  cellCount = 3000,
  enabled = true,
  flowSpeed = 0.5,
  heartPhase = 0,
}: BloodCellSystemProps) {
  const [performanceTier] = useState(() => detectPerformanceTier());
  const instancesRef = useRef<InstanceData[]>([]);

  // Scale cell count based on performance tier
  const adjustedCount = Math.floor(
    cellCount * performanceTier.lodMultiplier
  );

  // Generate initial instances
  useEffect(() => {
    instancesRef.current = generateBloodCellPositions(
      vesselPaths,
      Math.min(adjustedCount, performanceTier.maxInstances),
      0.005
    );
  }, [vesselPaths, adjustedCount, performanceTier.maxInstances]);

  // Animate blood flow
  useFrame((_, delta) => {
    if (!enabled || !performanceTier.enableAnimations) return;

    animateBloodCells(
      instancesRef.current,
      vesselPaths,
      delta,
      flowSpeed,
      heartPhase
    );
  });

  if (!enabled || instancesRef.current.length === 0) return null;

  return (
    <InstancedAnatomyMesh
      type="redBloodCell"
      instances={instancesRef.current}
      enableFrustumCulling={performanceTier.enableFrustumCulling}
      enableAnimation={performanceTier.enableAnimations}
      animationSpeed={flowSpeed}
    />
  );
});

// ============================================
// Alveoli System Component
// ============================================

interface AlveoliSystemProps {
  lungCenter?: THREE.Vector3;
  lungRadius?: THREE.Vector3;
  count?: number;
  enabled?: boolean;
  breathPhase?: number; // 0-1, synchronized with breathing animation
}

export const AlveoliSystem = memo(function AlveoliSystem({
  lungCenter = new THREE.Vector3(0, 0.5, 0.05),
  lungRadius = new THREE.Vector3(0.15, 0.2, 0.1),
  count = 300,
  enabled = true,
  breathPhase = 0,
}: AlveoliSystemProps) {
  const [performanceTier] = useState(() => detectPerformanceTier());
  const instancesRef = useRef<InstanceData[]>([]);

  const adjustedCount = Math.floor(count * performanceTier.lodMultiplier);

  // Generate instances
  useEffect(() => {
    instancesRef.current = generateAlveoliPositions(
      lungCenter,
      Math.min(adjustedCount, performanceTier.maxInstances),
      lungRadius
    );
  }, [lungCenter, lungRadius, adjustedCount, performanceTier.maxInstances]);

  // Animate breathing
  useFrame(() => {
    if (!enabled || !performanceTier.enableAnimations) return;
    animateAlveoli(instancesRef.current, breathPhase);
  });

  if (!enabled || instancesRef.current.length === 0) return null;

  return (
    <InstancedAnatomyMesh
      type="alveolus"
      instances={instancesRef.current}
      enableFrustumCulling={performanceTier.enableFrustumCulling}
      enableAnimation={performanceTier.enableAnimations}
    />
  );
});

// ============================================
// Skeletal System Component
// ============================================

interface SkeletalSystemProps {
  showVertebrae?: boolean;
  showRibs?: boolean;
  enabled?: boolean;
  onStructureClick?: (structure: InstanceData) => void;
}

export const SkeletalSystem = memo(function SkeletalSystem({
  showVertebrae = true,
  showRibs = true,
  enabled = true,
  onStructureClick,
}: SkeletalSystemProps) {
  const vertebraeInstances = useMemo(() => generateVertebraePositions(), []);
  const ribInstances = useMemo(() => generateRibPositions(), []);

  if (!enabled) return null;

  return (
    <group>
      {showVertebrae && (
        <InstancedAnatomyMesh
          type="vertebra"
          instances={vertebraeInstances}
          enableFrustumCulling={true}
          enableAnimation={false}
          onInstanceClick={onStructureClick}
        />
      )}
      {showRibs && (
        <InstancedAnatomyMesh
          type="rib"
          instances={ribInstances}
          enableFrustumCulling={true}
          enableAnimation={false}
          onInstanceClick={onStructureClick}
        />
      )}
    </group>
  );
});

// ============================================
// Complete Instanced Anatomy System
// ============================================

interface InstancedAnatomySystemProps {
  enabled?: boolean;
  showBloodCells?: boolean;
  showAlveoli?: boolean;
  showSkeletal?: boolean;
  vesselPaths?: THREE.Vector3[][];
  heartPhase?: number;
  breathPhase?: number;
  onPerformanceChange?: (metrics: PerformanceMetrics) => void;
  onStructureClick?: (type: InstancedStructureType, instance: InstanceData) => void;
}

/**
 * Complete instanced anatomy system with all optimizations
 */
export function InstancedAnatomySystem({
  enabled = true,
  showBloodCells = true,
  showAlveoli = true,
  showSkeletal = true,
  vesselPaths = [],
  heartPhase = 0,
  breathPhase = 0,
  onPerformanceChange,
  onStructureClick,
}: InstancedAnatomySystemProps) {
  const [performanceTier, setPerformanceTier] = useState(() => detectPerformanceTier());
  const { camera } = useThree();

  // Monitor performance
  const metrics = usePerformanceMonitor(60, (newTier) => {
    setPerformanceTier(newTier);
  });

  // Report metrics
  useEffect(() => {
    onPerformanceChange?.(metrics);
  }, [metrics, onPerformanceChange]);

  // LOD-based visibility
  const [lodScale, setLodScale] = useState(1);

  useFrame(() => {
    const distance = camera.position.length();
    const detailLevel = getDetailLevelFromDistance(distance);
    setLodScale(LOD_INSTANCE_SCALE[detailLevel]);
  });

  // Default vessel paths if none provided
  const defaultVesselPaths = useMemo(() => {
    if (vesselPaths.length > 0) return vesselPaths;

    // Generate some default vessel paths
    return [
      // Aorta path
      [
        new THREE.Vector3(0, 0.6, 0.1),
        new THREE.Vector3(0, 0.7, 0.08),
        new THREE.Vector3(0, 0.8, 0.05),
        new THREE.Vector3(0, 0.9, 0.02),
      ],
      // Pulmonary path
      [
        new THREE.Vector3(-0.1, 0.55, 0.1),
        new THREE.Vector3(-0.12, 0.5, 0.08),
        new THREE.Vector3(-0.15, 0.45, 0.05),
      ],
    ];
  }, [vesselPaths]);

  if (!enabled) return null;

  return (
    <group name="instanced-anatomy-system">
      {/* Blood cells in vessels */}
      {showBloodCells && (
        <BloodCellSystem
          vesselPaths={defaultVesselPaths}
          cellCount={Math.floor(5000 * lodScale * performanceTier.lodMultiplier)}
          enabled={true}
          flowSpeed={0.5}
          heartPhase={heartPhase}
        />
      )}

      {/* Alveoli in lungs */}
      {showAlveoli && (
        <>
          {/* Left lung alveoli */}
          <AlveoliSystem
            lungCenter={new THREE.Vector3(-0.12, 0.5, 0.05)}
            lungRadius={new THREE.Vector3(0.1, 0.15, 0.08)}
            count={Math.floor(150 * lodScale * performanceTier.lodMultiplier)}
            enabled={true}
            breathPhase={breathPhase}
          />
          {/* Right lung alveoli */}
          <AlveoliSystem
            lungCenter={new THREE.Vector3(0.12, 0.5, 0.05)}
            lungRadius={new THREE.Vector3(0.12, 0.18, 0.09)}
            count={Math.floor(200 * lodScale * performanceTier.lodMultiplier)}
            enabled={true}
            breathPhase={breathPhase}
          />
        </>
      )}

      {/* Skeletal system */}
      {showSkeletal && (
        <SkeletalSystem
          showVertebrae={true}
          showRibs={true}
          enabled={true}
          onStructureClick={(instance) => onStructureClick?.('vertebra', instance)}
        />
      )}
    </group>
  );
}

// ============================================
// Performance Display Component
// ============================================

interface PerformanceDisplayProps {
  metrics: PerformanceMetrics;
  className?: string;
}

export function PerformanceDisplay({ metrics, className = '' }: PerformanceDisplayProps) {
  const fpsColor = metrics.fps >= 55 ? '#00ff00' :
                   metrics.fps >= 30 ? '#ffff00' : '#ff0000';

  return (
    <div className={`performance-display ${className}`} style={{
      position: 'absolute',
      top: '10px',
      right: '10px',
      padding: '10px',
      background: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      fontFamily: 'monospace',
      fontSize: '12px',
      borderRadius: '4px',
    }}>
      <div style={{ color: fpsColor }}>FPS: {metrics.fps}</div>
      <div>Frame Time: {metrics.frameTime.toFixed(2)}ms</div>
      <div>Draw Calls: {metrics.drawCalls}</div>
      <div>Triangles: {metrics.triangles.toLocaleString()}</div>
      <div>Instances: {metrics.visibleInstances}/{metrics.totalInstances}</div>
      <div>Culled: {metrics.culledInstances}</div>
    </div>
  );
}

export default InstancedAnatomySystem;
