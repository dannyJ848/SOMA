/**
 * Enhanced Anatomy Level of Detail (LOD) System
 *
 * Advanced LOD management for the anatomy viewer with:
 * - Geometry LOD (different mesh complexity per distance)
 * - Smooth geometry morphing between LOD levels
 * - Frustum culling (don't render off-screen structures)
 * - Occlusion culling (don't render hidden structures)
 * - Dynamic LOD budgeting (500K triangle budget for mobile)
 * - LOD preloading (anticipate zoom direction)
 * - Debug visualization mode
 */

import { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ============================================
// Types
// ============================================

/**
 * Detail levels from most zoomed out to most zoomed in
 */
export type DetailLevel = 'body' | 'region' | 'organ' | 'tissue' | 'cellular';

/**
 * Geometry LOD levels for mesh complexity
 */
export type GeometryLODLevel = 0 | 1 | 2 | 3;

/**
 * Camera distance thresholds for each detail level
 */
export const DETAIL_LEVEL_THRESHOLDS: Record<DetailLevel, { min: number; max: number }> = {
  body: { min: 6, max: Infinity },      // Full body overview
  region: { min: 3.5, max: 6 },         // Body regions visible
  organ: { min: 2, max: 3.5 },          // Individual organs visible
  tissue: { min: 1, max: 2 },           // Tissue layers visible
  cellular: { min: 0, max: 1 },         // Microscopic/cellular level
};

/**
 * Geometry LOD configuration
 */
export interface GeometryLODConfig {
  /** LOD0: Full detail - close-up view */
  lod0: {
    maxDistance: number;
    targetTriangles: number;
    segments: number;
  };
  /** LOD1: Medium detail - organ view */
  lod1: {
    maxDistance: number;
    targetTriangles: number;
    segments: number;
  };
  /** LOD2: Low detail - region view */
  lod2: {
    maxDistance: number;
    targetTriangles: number;
    segments: number;
  };
  /** LOD3: Billboard/impostor - full body view */
  lod3: {
    maxDistance: number;
    targetTriangles: number;
    useBillboard: boolean;
  };
}

export const DEFAULT_GEOMETRY_LOD_CONFIG: GeometryLODConfig = {
  lod0: { maxDistance: 2, targetTriangles: 5000, segments: 32 },
  lod1: { maxDistance: 4, targetTriangles: 2000, segments: 16 },
  lod2: { maxDistance: 6, targetTriangles: 500, segments: 8 },
  lod3: { maxDistance: Infinity, targetTriangles: 50, useBillboard: true },
};

/**
 * LOD state returned by the hook
 */
export interface LODState {
  detailLevel: DetailLevel;
  geometryLOD: GeometryLODLevel;
  cameraDistance: number;
  transitionProgress: number;
  isTransitioning: boolean;
  morphWeight: number; // 0-1 for smooth transitions between LOD levels
  zoomDirection: 'in' | 'out' | 'stable';
  zoomVelocity: number;
}

/**
 * Structure visibility based on detail level
 */
export interface StructureVisibility {
  structureId: string;
  minDetailLevel: DetailLevel;
  maxDetailLevel?: DetailLevel;
  fadeInDistance?: number;
  fadeOutDistance?: number;
}

/**
 * LOD budget configuration
 */
export interface LODBudgetConfig {
  /** Total triangle budget (default 500K for iPhone 14) */
  totalTriangleBudget: number;
  /** Priority multiplier for focused/selected structures */
  focusPriorityMultiplier: number;
  /** Minimum triangles per visible structure */
  minTrianglesPerStructure: number;
  /** Maximum triangles per structure (cap) */
  maxTrianglesPerStructure: number;
}

export const DEFAULT_LOD_BUDGET_CONFIG: LODBudgetConfig = {
  totalTriangleBudget: 500000, // 500K triangles for iPhone 14
  focusPriorityMultiplier: 3,
  minTrianglesPerStructure: 50,
  maxTrianglesPerStructure: 10000,
};

/**
 * Structure LOD state
 */
export interface StructureLODState {
  structureId: string;
  lodLevel: GeometryLODLevel;
  triangleBudget: number;
  screenCoverage: number;
  isFocused: boolean;
  isVisible: boolean;
  isCulled: boolean;
  cullReason?: 'frustum' | 'occlusion' | 'budget';
  morphWeight: number;
}

/**
 * Culling state
 */
export interface CullingState {
  frustumCulled: Set<string>;
  occlusionCulled: Set<string>;
  budgetCulled: Set<string>;
  totalTriangles: number;
  visibleStructures: number;
  culledStructures: number;
}

/**
 * LOD debug info
 */
export interface LODDebugInfo {
  fps: number;
  totalTriangles: number;
  budgetUsage: number;
  visibleStructures: number;
  frustumCulled: number;
  occlusionCulled: number;
  budgetCulled: number;
  lodDistribution: Record<GeometryLODLevel, number>;
  preloadingActive: boolean;
  preloadDirection: 'in' | 'out' | null;
}

// ============================================
// Utility Functions
// ============================================

/**
 * Get detail level from camera distance
 */
export function getDetailLevelFromDistance(distance: number): DetailLevel {
  if (distance >= DETAIL_LEVEL_THRESHOLDS.body.min) return 'body';
  if (distance >= DETAIL_LEVEL_THRESHOLDS.region.min) return 'region';
  if (distance >= DETAIL_LEVEL_THRESHOLDS.organ.min) return 'organ';
  if (distance >= DETAIL_LEVEL_THRESHOLDS.tissue.min) return 'tissue';
  return 'cellular';
}

/**
 * Get geometry LOD level from distance
 */
export function getGeometryLODFromDistance(
  distance: number,
  config: GeometryLODConfig = DEFAULT_GEOMETRY_LOD_CONFIG
): GeometryLODLevel {
  if (distance <= config.lod0.maxDistance) return 0;
  if (distance <= config.lod1.maxDistance) return 1;
  if (distance <= config.lod2.maxDistance) return 2;
  return 3;
}

/**
 * Get morph weight for smooth LOD transitions
 */
export function getLODMorphWeight(
  distance: number,
  currentLOD: GeometryLODLevel,
  config: GeometryLODConfig = DEFAULT_GEOMETRY_LOD_CONFIG
): number {
  const lodThresholds = [
    config.lod0.maxDistance,
    config.lod1.maxDistance,
    config.lod2.maxDistance,
    Infinity,
  ];

  const currentThreshold = lodThresholds[currentLOD];
  const prevThreshold = currentLOD > 0 ? lodThresholds[currentLOD - 1] : 0;

  // Calculate transition zone (20% of the distance range)
  const range = currentThreshold - prevThreshold;
  const transitionZone = range * 0.2;
  const transitionStart = currentThreshold - transitionZone;

  if (distance >= transitionStart && distance < currentThreshold) {
    return (distance - transitionStart) / transitionZone;
  }

  return 0;
}

/**
 * Get transition progress within current detail level (0-1)
 */
export function getTransitionProgress(distance: number, level: DetailLevel): number {
  const { min, max } = DETAIL_LEVEL_THRESHOLDS[level];
  if (max === Infinity) return Math.min(1, (distance - min) / 4);
  return 1 - (distance - min) / (max - min);
}

/**
 * Calculate opacity for structure based on distance and visibility settings
 */
export function calculateStructureOpacity(
  distance: number,
  currentLevel: DetailLevel,
  visibility: StructureVisibility
): number {
  // For structures with minDetailLevel: 'body', always return full opacity
  if (visibility.minDetailLevel === 'body') {
    return 1;
  }

  const levelOrder: DetailLevel[] = ['body', 'region', 'organ', 'tissue', 'cellular'];
  const currentIndex = levelOrder.indexOf(currentLevel);
  const minIndex = levelOrder.indexOf(visibility.minDetailLevel);
  const maxIndex = visibility.maxDetailLevel
    ? levelOrder.indexOf(visibility.maxDetailLevel)
    : levelOrder.length - 1;

  // Outside visibility range
  if (currentIndex < minIndex || currentIndex > maxIndex) {
    return 0;
  }

  // At edge of visibility - fade in/out
  const levelThreshold = DETAIL_LEVEL_THRESHOLDS[currentLevel];
  const fadeRange = 0.5;

  // Fade in when entering visibility range
  if (currentIndex === minIndex) {
    const fadeInStart = levelThreshold.max;
    const fadeInEnd = Math.max(levelThreshold.min, levelThreshold.max - fadeRange);
    if (distance > fadeInEnd) {
      return Math.max(0, 1 - (distance - fadeInEnd) / (fadeInStart - fadeInEnd));
    }
  }

  // Fade out when leaving visibility range
  if (currentIndex === maxIndex && visibility.maxDetailLevel) {
    const fadeOutStart = levelThreshold.min + fadeRange;
    const fadeOutEnd = levelThreshold.min;
    if (distance < fadeOutStart) {
      return Math.max(0, (distance - fadeOutEnd) / (fadeOutStart - fadeOutEnd));
    }
  }

  return 1;
}

/**
 * Calculate segment count for a geometry LOD level
 */
export function getSegmentsForLOD(
  lodLevel: GeometryLODLevel,
  config: GeometryLODConfig = DEFAULT_GEOMETRY_LOD_CONFIG
): number {
  switch (lodLevel) {
    case 0: return config.lod0.segments;
    case 1: return config.lod1.segments;
    case 2: return config.lod2.segments;
    case 3: return 4; // Minimal for billboards
  }
}

/**
 * Smooth step function for transitions
 */
function smoothStep(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

// ============================================
// Frustum Culling
// ============================================

/**
 * Check if a bounding sphere is in the camera frustum
 */
export function isInFrustum(
  boundingSphere: THREE.Sphere,
  frustum: THREE.Frustum
): boolean {
  return frustum.intersectsSphere(boundingSphere);
}

/**
 * Create a frustum from a camera
 */
export function createFrustumFromCamera(camera: THREE.Camera): THREE.Frustum {
  const frustum = new THREE.Frustum();
  const projScreenMatrix = new THREE.Matrix4();
  projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
  frustum.setFromProjectionMatrix(projScreenMatrix);
  return frustum;
}

// ============================================
// Occlusion Culling (simplified depth-based)
// ============================================

interface OcclusionCandidate {
  structureId: string;
  position: THREE.Vector3;
  radius: number;
  distance: number;
}

/**
 * Simple occlusion culling based on depth sorting and overlap
 * This is a simplified version - full occlusion culling would use GPU queries
 */
export function performOcclusionCulling(
  candidates: OcclusionCandidate[],
  cameraPosition: THREE.Vector3,
  screenThreshold: number = 0.05
): Set<string> {
  const occluded = new Set<string>();

  // Sort by distance from camera (front to back)
  const sorted = [...candidates].sort((a, b) => a.distance - b.distance);

  // Simple occlusion: if a structure is significantly behind another
  // and fully contained within its screen projection, mark as occluded
  for (let i = 0; i < sorted.length; i++) {
    const frontStructure = sorted[i];

    for (let j = i + 1; j < sorted.length; j++) {
      const backStructure = sorted[j];

      // Check if back structure is significantly behind front
      const distanceDiff = backStructure.distance - frontStructure.distance;
      if (distanceDiff < frontStructure.radius) continue;

      // Check if structures are roughly aligned (simplified)
      const toFront = frontStructure.position.clone().sub(cameraPosition).normalize();
      const toBack = backStructure.position.clone().sub(cameraPosition).normalize();
      const alignment = toFront.dot(toBack);

      // If highly aligned and front is larger, back may be occluded
      if (alignment > 0.95) {
        const frontScreenSize = frontStructure.radius / frontStructure.distance;
        const backScreenSize = backStructure.radius / backStructure.distance;

        if (frontScreenSize > backScreenSize * 1.5 && frontScreenSize > screenThreshold) {
          occluded.add(backStructure.structureId);
        }
      }
    }
  }

  return occluded;
}

// ============================================
// LOD Budget Manager
// ============================================

interface BudgetAllocation {
  structureId: string;
  triangles: number;
  lodLevel: GeometryLODLevel;
  priority: number;
}

/**
 * Allocate triangle budget across visible structures
 */
export function allocateLODBudget(
  structures: Array<{
    structureId: string;
    screenCoverage: number;
    isFocused: boolean;
    distance: number;
  }>,
  config: LODBudgetConfig = DEFAULT_LOD_BUDGET_CONFIG,
  lodConfig: GeometryLODConfig = DEFAULT_GEOMETRY_LOD_CONFIG
): BudgetAllocation[] {
  if (structures.length === 0) return [];

  // Calculate priority for each structure
  const withPriority = structures.map(s => ({
    ...s,
    priority: s.screenCoverage * (s.isFocused ? config.focusPriorityMultiplier : 1),
  }));

  // Sort by priority (highest first)
  withPriority.sort((a, b) => b.priority - a.priority);

  // Calculate total priority
  const totalPriority = withPriority.reduce((sum, s) => sum + s.priority, 0);

  // Allocate budget proportionally
  const allocations: BudgetAllocation[] = [];
  let remainingBudget = config.totalTriangleBudget;

  for (const structure of withPriority) {
    // Calculate proportional allocation
    let allocation = (structure.priority / totalPriority) * config.totalTriangleBudget;

    // Clamp to min/max
    allocation = Math.max(config.minTrianglesPerStructure, allocation);
    allocation = Math.min(config.maxTrianglesPerStructure, allocation);
    allocation = Math.min(remainingBudget, allocation);

    // Determine LOD level based on allocation
    let lodLevel: GeometryLODLevel;
    if (allocation >= lodConfig.lod0.targetTriangles * 0.8) {
      lodLevel = 0;
    } else if (allocation >= lodConfig.lod1.targetTriangles * 0.8) {
      lodLevel = 1;
    } else if (allocation >= lodConfig.lod2.targetTriangles * 0.8) {
      lodLevel = 2;
    } else {
      lodLevel = 3;
    }

    // Also consider distance
    const distanceLOD = getGeometryLODFromDistance(structure.distance, lodConfig);
    lodLevel = Math.max(lodLevel, distanceLOD) as GeometryLODLevel;

    allocations.push({
      structureId: structure.structureId,
      triangles: Math.floor(allocation),
      lodLevel,
      priority: structure.priority,
    });

    remainingBudget -= allocation;
  }

  return allocations;
}

// ============================================
// LOD Preloading
// ============================================

/**
 * Predict which LOD levels to preload based on zoom direction
 */
export function predictPreloadLODs(
  currentLOD: GeometryLODLevel,
  zoomDirection: 'in' | 'out' | 'stable',
  zoomVelocity: number
): GeometryLODLevel[] {
  const toPreload: GeometryLODLevel[] = [];

  // Only preload if zooming fast enough
  if (Math.abs(zoomVelocity) < 0.1) return toPreload;

  if (zoomDirection === 'in' && currentLOD > 0) {
    // Preload higher detail level
    toPreload.push((currentLOD - 1) as GeometryLODLevel);
  } else if (zoomDirection === 'out' && currentLOD < 3) {
    // Preload lower detail level
    toPreload.push((currentLOD + 1) as GeometryLODLevel);
  }

  return toPreload;
}

// ============================================
// Enhanced LOD Hook
// ============================================

interface UseLODOptions {
  targetPoint?: THREE.Vector3;
  budgetConfig?: LODBudgetConfig;
  lodConfig?: GeometryLODConfig;
  enableFrustumCulling?: boolean;
  enableOcclusionCulling?: boolean;
  enablePreloading?: boolean;
}

/**
 * Enhanced hook to track LOD state with all advanced features
 */
export function useLOD(options: UseLODOptions = {}): LODState {
  const {
    targetPoint = new THREE.Vector3(0, 0.5, 0),
    lodConfig = DEFAULT_GEOMETRY_LOD_CONFIG,
  } = options;

  const { camera } = useThree();
  const [lodState, setLodState] = useState<LODState>({
    detailLevel: 'body',
    geometryLOD: 3,
    cameraDistance: 4,
    transitionProgress: 0,
    isTransitioning: false,
    morphWeight: 0,
    zoomDirection: 'stable',
    zoomVelocity: 0,
  });

  const prevLevelRef = useRef<DetailLevel>('body');
  const prevLODRef = useRef<GeometryLODLevel>(3);
  const lastUpdateRef = useRef<number>(0);
  const lastDistanceRef = useRef<number>(4);
  const distanceHistoryRef = useRef<number[]>([4, 4, 4]);

  useFrame(() => {
    const now = performance.now();
    // Throttle updates to max 10 per second (every 100ms)
    if (now - lastUpdateRef.current < 100) return;

    const distance = camera.position.distanceTo(targetPoint);

    // Only update if distance changed significantly
    const distanceChanged = Math.abs(distance - lastDistanceRef.current) > 0.05;
    const newLevel = getDetailLevelFromDistance(distance);
    const newGeometryLOD = getGeometryLODFromDistance(distance, lodConfig);
    const levelChanged = newLevel !== lodState.detailLevel;
    const lodChanged = newGeometryLOD !== lodState.geometryLOD;

    if (!distanceChanged && !levelChanged && !lodChanged) return;

    lastUpdateRef.current = now;

    // Update distance history for zoom velocity calculation
    distanceHistoryRef.current.push(distance);
    if (distanceHistoryRef.current.length > 5) {
      distanceHistoryRef.current.shift();
    }

    // Calculate zoom velocity and direction
    const history = distanceHistoryRef.current;
    const avgChange = history.length > 1
      ? (history[history.length - 1] - history[0]) / (history.length - 1)
      : 0;

    let zoomDirection: 'in' | 'out' | 'stable';
    if (avgChange < -0.05) zoomDirection = 'in';
    else if (avgChange > 0.05) zoomDirection = 'out';
    else zoomDirection = 'stable';

    lastDistanceRef.current = distance;

    const progress = getTransitionProgress(distance, newLevel);
    const morphWeight = getLODMorphWeight(distance, newGeometryLOD, lodConfig);
    const isTransitioning = prevLevelRef.current !== newLevel || prevLODRef.current !== newGeometryLOD;

    setLodState({
      detailLevel: newLevel,
      geometryLOD: newGeometryLOD,
      cameraDistance: distance,
      transitionProgress: progress,
      isTransitioning,
      morphWeight,
      zoomDirection,
      zoomVelocity: avgChange,
    });

    prevLevelRef.current = newLevel;
    prevLODRef.current = newGeometryLOD;
  });

  return lodState;
}

// ============================================
// LOD Manager Hook (Full Featured)
// ============================================

interface UseLODManagerOptions extends UseLODOptions {
  structures: Array<{
    structureId: string;
    position: THREE.Vector3;
    radius: number;
    isFocused: boolean;
  }>;
  onPreloadRequested?: (lodLevels: GeometryLODLevel[], structureIds: string[]) => void;
}

export interface LODManagerState {
  lodState: LODState;
  cullingState: CullingState;
  structureLODs: Map<string, StructureLODState>;
  debugInfo: LODDebugInfo;
}

/**
 * Full-featured LOD manager hook with culling and budgeting
 */
export function useLODManager(options: UseLODManagerOptions): LODManagerState {
  const {
    structures,
    budgetConfig = DEFAULT_LOD_BUDGET_CONFIG,
    lodConfig = DEFAULT_GEOMETRY_LOD_CONFIG,
    enableFrustumCulling = true,
    enableOcclusionCulling = true,
    enablePreloading = true,
    onPreloadRequested,
    ...lodOptions
  } = options;

  const { camera } = useThree();
  const lodState = useLOD({ ...lodOptions, lodConfig, budgetConfig });

  const [cullingState, setCullingState] = useState<CullingState>({
    frustumCulled: new Set(),
    occlusionCulled: new Set(),
    budgetCulled: new Set(),
    totalTriangles: 0,
    visibleStructures: 0,
    culledStructures: 0,
  });

  const [structureLODs, setStructureLODs] = useState<Map<string, StructureLODState>>(new Map());
  const [debugInfo, setDebugInfo] = useState<LODDebugInfo>({
    fps: 60,
    totalTriangles: 0,
    budgetUsage: 0,
    visibleStructures: 0,
    frustumCulled: 0,
    occlusionCulled: 0,
    budgetCulled: 0,
    lodDistribution: { 0: 0, 1: 0, 2: 0, 3: 0 },
    preloadingActive: false,
    preloadDirection: null,
  });

  const fpsRef = useRef<number[]>([60]);
  const lastPreloadRef = useRef<number>(0);

  useFrame((_, delta) => {
    // Update FPS
    const fps = 1 / Math.max(delta, 0.001);
    fpsRef.current.push(fps);
    if (fpsRef.current.length > 30) fpsRef.current.shift();
    const avgFps = fpsRef.current.reduce((a, b) => a + b, 0) / fpsRef.current.length;

    // Perform culling
    const frustum = createFrustumFromCamera(camera);
    const frustumCulled = new Set<string>();
    const occlusionCulled = new Set<string>();

    // Frustum culling
    if (enableFrustumCulling) {
      for (const structure of structures) {
        const sphere = new THREE.Sphere(structure.position, structure.radius);
        if (!isInFrustum(sphere, frustum)) {
          frustumCulled.add(structure.structureId);
        }
      }
    }

    // Occlusion culling (on visible structures only)
    if (enableOcclusionCulling) {
      const candidates: OcclusionCandidate[] = structures
        .filter(s => !frustumCulled.has(s.structureId))
        .map(s => ({
          structureId: s.structureId,
          position: s.position,
          radius: s.radius,
          distance: camera.position.distanceTo(s.position),
        }));

      const occluded = performOcclusionCulling(candidates, camera.position);
      occluded.forEach(id => occlusionCulled.add(id));
    }

    // Calculate screen coverage for visible structures
    const visibleStructures = structures
      .filter(s => !frustumCulled.has(s.structureId) && !occlusionCulled.has(s.structureId))
      .map(s => {
        const distance = camera.position.distanceTo(s.position);
        const screenCoverage = (s.radius / distance) * 100; // Rough screen percentage
        return {
          structureId: s.structureId,
          screenCoverage,
          isFocused: s.isFocused,
          distance,
        };
      });

    // Allocate budget
    const allocations = allocateLODBudget(visibleStructures, budgetConfig, lodConfig);
    const allocationMap = new Map(allocations.map(a => [a.structureId, a]));

    // Determine budget-culled structures
    const budgetCulled = new Set<string>();
    let totalTriangles = 0;
    const newStructureLODs = new Map<string, StructureLODState>();
    const lodDistribution: Record<GeometryLODLevel, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };

    for (const structure of structures) {
      const isFrustumCulled = frustumCulled.has(structure.structureId);
      const isOcclusionCulled = occlusionCulled.has(structure.structureId);
      const allocation = allocationMap.get(structure.structureId);

      if (!allocation && !isFrustumCulled && !isOcclusionCulled) {
        budgetCulled.add(structure.structureId);
      }

      const lodLevel = allocation?.lodLevel ?? 3;
      const triangleBudget = allocation?.triangles ?? 0;

      if (!isFrustumCulled && !isOcclusionCulled && allocation) {
        totalTriangles += triangleBudget;
        lodDistribution[lodLevel]++;
      }

      const vs = visibleStructures.find(v => v.structureId === structure.structureId);

      newStructureLODs.set(structure.structureId, {
        structureId: structure.structureId,
        lodLevel,
        triangleBudget,
        screenCoverage: vs?.screenCoverage ?? 0,
        isFocused: structure.isFocused,
        isVisible: !isFrustumCulled && !isOcclusionCulled && !budgetCulled.has(structure.structureId),
        isCulled: isFrustumCulled || isOcclusionCulled || budgetCulled.has(structure.structureId),
        cullReason: isFrustumCulled ? 'frustum' : isOcclusionCulled ? 'occlusion' : budgetCulled.has(structure.structureId) ? 'budget' : undefined,
        morphWeight: lodState.morphWeight,
      });
    }

    setStructureLODs(newStructureLODs);

    setCullingState({
      frustumCulled,
      occlusionCulled,
      budgetCulled,
      totalTriangles,
      visibleStructures: visibleStructures.length - budgetCulled.size,
      culledStructures: frustumCulled.size + occlusionCulled.size + budgetCulled.size,
    });

    // Handle preloading
    const now = performance.now();
    if (enablePreloading && now - lastPreloadRef.current > 1000) {
      const preloadLODs = predictPreloadLODs(
        lodState.geometryLOD,
        lodState.zoomDirection,
        lodState.zoomVelocity
      );

      if (preloadLODs.length > 0 && onPreloadRequested) {
        const visibleIds = [...newStructureLODs.entries()]
          .filter(([_, state]) => state.isVisible)
          .map(([id]) => id);

        onPreloadRequested(preloadLODs, visibleIds);
        lastPreloadRef.current = now;
      }
    }

    setDebugInfo({
      fps: Math.round(avgFps),
      totalTriangles,
      budgetUsage: (totalTriangles / budgetConfig.totalTriangleBudget) * 100,
      visibleStructures: visibleStructures.length - budgetCulled.size,
      frustumCulled: frustumCulled.size,
      occlusionCulled: occlusionCulled.size,
      budgetCulled: budgetCulled.size,
      lodDistribution,
      preloadingActive: lodState.zoomDirection !== 'stable',
      preloadDirection: lodState.zoomDirection !== 'stable' ? lodState.zoomDirection : null,
    });
  });

  return {
    lodState,
    cullingState,
    structureLODs,
    debugInfo,
  };
}

// ============================================
// LOD Manager Component
// ============================================

interface LODManagerProps {
  children: (state: LODState) => React.ReactNode;
  targetPoint?: THREE.Vector3;
}

/**
 * Component that provides LOD state to children
 */
export function LODManager({ children, targetPoint }: LODManagerProps) {
  const lodState = useLOD({ targetPoint });
  return <>{children(lodState)}</>;
}

// ============================================
// LOD Debug Overlay Component
// ============================================

interface LODDebugOverlayProps {
  debugInfo: LODDebugInfo;
  lodState: LODState;
  visible: boolean;
}

export function LODDebugOverlay({ debugInfo, lodState, visible }: LODDebugOverlayProps) {
  if (!visible) return null;

  const budgetColor = debugInfo.budgetUsage > 90 ? '#ff4444'
    : debugInfo.budgetUsage > 70 ? '#ffaa44'
    : '#44ff44';

  return (
    <div className="lod-debug-overlay">
      <div className="lod-debug-section">
        <h4>Performance</h4>
        <div className="lod-debug-row">
          <span>FPS:</span>
          <span style={{ color: debugInfo.fps < 30 ? '#ff4444' : '#44ff44' }}>
            {debugInfo.fps}
          </span>
        </div>
        <div className="lod-debug-row">
          <span>Triangles:</span>
          <span>{(debugInfo.totalTriangles / 1000).toFixed(1)}K</span>
        </div>
        <div className="lod-debug-row">
          <span>Budget:</span>
          <span style={{ color: budgetColor }}>
            {debugInfo.budgetUsage.toFixed(1)}%
          </span>
        </div>
      </div>

      <div className="lod-debug-section">
        <h4>LOD State</h4>
        <div className="lod-debug-row">
          <span>Detail Level:</span>
          <span>{lodState.detailLevel}</span>
        </div>
        <div className="lod-debug-row">
          <span>Geometry LOD:</span>
          <span>LOD{lodState.geometryLOD}</span>
        </div>
        <div className="lod-debug-row">
          <span>Distance:</span>
          <span>{lodState.cameraDistance.toFixed(2)}</span>
        </div>
        <div className="lod-debug-row">
          <span>Morph:</span>
          <span>{(lodState.morphWeight * 100).toFixed(0)}%</span>
        </div>
        <div className="lod-debug-row">
          <span>Zoom:</span>
          <span>{lodState.zoomDirection} ({lodState.zoomVelocity.toFixed(2)})</span>
        </div>
      </div>

      <div className="lod-debug-section">
        <h4>Culling</h4>
        <div className="lod-debug-row">
          <span>Visible:</span>
          <span>{debugInfo.visibleStructures}</span>
        </div>
        <div className="lod-debug-row">
          <span>Frustum:</span>
          <span>{debugInfo.frustumCulled}</span>
        </div>
        <div className="lod-debug-row">
          <span>Occlusion:</span>
          <span>{debugInfo.occlusionCulled}</span>
        </div>
        <div className="lod-debug-row">
          <span>Budget:</span>
          <span>{debugInfo.budgetCulled}</span>
        </div>
      </div>

      <div className="lod-debug-section">
        <h4>LOD Distribution</h4>
        <div className="lod-distribution-bar">
          {[0, 1, 2, 3].map(level => {
            const count = debugInfo.lodDistribution[level as GeometryLODLevel];
            const total = Object.values(debugInfo.lodDistribution).reduce((a, b) => a + b, 0);
            const pct = total > 0 ? (count / total) * 100 : 0;
            const colors = ['#22ff44', '#88ff44', '#ffaa44', '#ff4444'];
            return (
              <div
                key={level}
                className="lod-distribution-segment"
                style={{ width: `${pct}%`, backgroundColor: colors[level] }}
                title={`LOD${level}: ${count}`}
              />
            );
          })}
        </div>
        <div className="lod-distribution-legend">
          <span className="lod-legend-item" style={{ color: '#22ff44' }}>L0: {debugInfo.lodDistribution[0]}</span>
          <span className="lod-legend-item" style={{ color: '#88ff44' }}>L1: {debugInfo.lodDistribution[1]}</span>
          <span className="lod-legend-item" style={{ color: '#ffaa44' }}>L2: {debugInfo.lodDistribution[2]}</span>
          <span className="lod-legend-item" style={{ color: '#ff4444' }}>L3: {debugInfo.lodDistribution[3]}</span>
        </div>
      </div>

      {debugInfo.preloadingActive && (
        <div className="lod-debug-section">
          <h4>Preloading</h4>
          <div className="lod-debug-row">
            <span>Direction:</span>
            <span>{debugInfo.preloadDirection}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// Detail Level Indicator (UI Component)
// ============================================

interface DetailLevelIndicatorProps {
  lodState: LODState;
}

export function DetailLevelIndicator({ lodState }: DetailLevelIndicatorProps) {
  const levelLabels: Record<DetailLevel, string> = {
    body: 'Body Overview',
    region: 'Body Regions',
    organ: 'Organ Detail',
    tissue: 'Tissue Layers',
    cellular: 'Cellular Level',
  };

  const levelIcons: Record<DetailLevel, string> = {
    body: '\uD83E\uDDCD', // Person standing
    region: '\uD83E\uDEC1', // Lungs
    organ: '\u2764\uFE0F', // Heart
    tissue: '\uD83D\uDD2C', // Microscope
    cellular: '\uD83E\uDDEC', // DNA
  };

  return (
    <div className="detail-level-indicator">
      <span className="detail-icon">{levelIcons[lodState.detailLevel]}</span>
      <span className="detail-label">{levelLabels[lodState.detailLevel]}</span>
      <div className="detail-progress">
        <div
          className="detail-progress-bar"
          style={{ width: `${lodState.transitionProgress * 100}%` }}
        />
      </div>
      <span className="detail-lod-badge">LOD{lodState.geometryLOD}</span>
      <span className="zoom-hint">
        {lodState.detailLevel === 'body' ? 'Zoom in for detail' :
         lodState.detailLevel === 'cellular' ? 'Zoom out for context' :
         'Scroll to zoom'}
      </span>
    </div>
  );
}

// ============================================
// LOD Mesh Component
// ============================================

interface LODMeshProps {
  structureId: string;
  lodState: StructureLODState | undefined;
  globalLODState: LODState;
  geometry: THREE.BufferGeometry;
  material: THREE.Material;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  lodGeometries?: {
    lod0?: THREE.BufferGeometry;
    lod1?: THREE.BufferGeometry;
    lod2?: THREE.BufferGeometry;
    lod3?: THREE.BufferGeometry;
  };
  enableMorphing?: boolean;
}

/**
 * A mesh component that handles LOD switching with optional morphing
 */
export function LODMesh({
  structureId,
  lodState,
  globalLODState,
  geometry,
  material,
  position,
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  lodGeometries,
  enableMorphing = true,
}: LODMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Get the appropriate geometry for the current LOD level
  const currentGeometry = useMemo(() => {
    if (!lodGeometries) return geometry;

    const lodLevel = lodState?.lodLevel ?? globalLODState.geometryLOD;
    switch (lodLevel) {
      case 0: return lodGeometries.lod0 ?? geometry;
      case 1: return lodGeometries.lod1 ?? lodGeometries.lod0 ?? geometry;
      case 2: return lodGeometries.lod2 ?? lodGeometries.lod1 ?? geometry;
      case 3: return lodGeometries.lod3 ?? lodGeometries.lod2 ?? geometry;
      default: return geometry;
    }
  }, [geometry, lodGeometries, lodState?.lodLevel, globalLODState.geometryLOD]);

  // Apply morphing if enabled and transitioning
  useFrame(() => {
    if (!meshRef.current || !enableMorphing) return;

    const morphWeight = lodState?.morphWeight ?? globalLODState.morphWeight;

    // If the mesh has morph targets, update them
    if (meshRef.current.morphTargetInfluences && meshRef.current.morphTargetInfluences.length > 0) {
      // Assuming morph target 0 is the transition target
      meshRef.current.morphTargetInfluences[0] = morphWeight;
    }
  });

  // Don't render if culled
  if (lodState?.isCulled) {
    return null;
  }

  return (
    <mesh
      ref={meshRef}
      geometry={currentGeometry}
      material={material}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
}

// ============================================
// Geometry LOD Generator Utilities
// ============================================

/**
 * Generate LOD geometries for common primitive types
 */
export function generateSphereLODs(
  radius: number,
  config: GeometryLODConfig = DEFAULT_GEOMETRY_LOD_CONFIG
): Record<GeometryLODLevel, THREE.SphereGeometry> {
  return {
    0: new THREE.SphereGeometry(radius, config.lod0.segments, config.lod0.segments),
    1: new THREE.SphereGeometry(radius, config.lod1.segments, config.lod1.segments),
    2: new THREE.SphereGeometry(radius, config.lod2.segments, config.lod2.segments),
    3: new THREE.SphereGeometry(radius, 4, 4),
  };
}

export function generateCapsuleLODs(
  radius: number,
  length: number,
  config: GeometryLODConfig = DEFAULT_GEOMETRY_LOD_CONFIG
): Record<GeometryLODLevel, THREE.CapsuleGeometry> {
  return {
    0: new THREE.CapsuleGeometry(radius, length, config.lod0.segments / 2, config.lod0.segments),
    1: new THREE.CapsuleGeometry(radius, length, config.lod1.segments / 2, config.lod1.segments),
    2: new THREE.CapsuleGeometry(radius, length, config.lod2.segments / 2, config.lod2.segments),
    3: new THREE.CapsuleGeometry(radius, length, 2, 4),
  };
}

export function generateCylinderLODs(
  radiusTop: number,
  radiusBottom: number,
  height: number,
  config: GeometryLODConfig = DEFAULT_GEOMETRY_LOD_CONFIG
): Record<GeometryLODLevel, THREE.CylinderGeometry> {
  return {
    0: new THREE.CylinderGeometry(radiusTop, radiusBottom, height, config.lod0.segments),
    1: new THREE.CylinderGeometry(radiusTop, radiusBottom, height, config.lod1.segments),
    2: new THREE.CylinderGeometry(radiusTop, radiusBottom, height, config.lod2.segments),
    3: new THREE.CylinderGeometry(radiusTop, radiusBottom, height, 4),
  };
}

export function generateTorusLODs(
  radius: number,
  tube: number,
  config: GeometryLODConfig = DEFAULT_GEOMETRY_LOD_CONFIG
): Record<GeometryLODLevel, THREE.TorusGeometry> {
  return {
    0: new THREE.TorusGeometry(radius, tube, config.lod0.segments, config.lod0.segments),
    1: new THREE.TorusGeometry(radius, tube, config.lod1.segments, config.lod1.segments),
    2: new THREE.TorusGeometry(radius, tube, config.lod2.segments, config.lod2.segments),
    3: new THREE.TorusGeometry(radius, tube, 4, 8),
  };
}

export function generateBoxLODs(
  width: number,
  height: number,
  depth: number
): Record<GeometryLODLevel, THREE.BoxGeometry> {
  // Boxes don't need LOD reduction as they're already minimal
  const geo = new THREE.BoxGeometry(width, height, depth);
  return { 0: geo, 1: geo, 2: geo, 3: geo };
}

// ============================================
// Exports
// ============================================

export default LODManager;
