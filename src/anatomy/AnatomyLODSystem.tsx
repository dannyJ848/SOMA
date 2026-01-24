/**
 * Anatomy Level of Detail (LOD) System
 *
 * Manages zoom-based detail levels for the anatomy viewer.
 * Different anatomical structures appear at different zoom levels,
 * similar to how Google Maps shows different details at different scales.
 */

import { useRef, useState } from 'react';
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
 * LOD state returned by the hook
 */
export interface LODState {
  detailLevel: DetailLevel;
  cameraDistance: number;
  transitionProgress: number; // 0-1 progress through current level
  isTransitioning: boolean;
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
 * Get transition progress within current detail level (0-1)
 */
export function getTransitionProgress(distance: number, level: DetailLevel): number {
  const { min, max } = DETAIL_LEVEL_THRESHOLDS[level];
  if (max === Infinity) return Math.min(1, (distance - min) / 4); // Normalize for body level
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
  const levelOrder: DetailLevel[] = ['body', 'region', 'organ', 'tissue', 'cellular'];
  const currentIndex = levelOrder.indexOf(currentLevel);
  const minIndex = levelOrder.indexOf(visibility.minDetailLevel);
  const maxIndex = visibility.maxDetailLevel ? levelOrder.indexOf(visibility.maxDetailLevel) : levelOrder.length - 1;

  // Outside visibility range
  if (currentIndex < minIndex || currentIndex > maxIndex) {
    return 0;
  }

  // At edge of visibility - fade in/out
  const levelThreshold = DETAIL_LEVEL_THRESHOLDS[currentLevel];
  const fadeRange = 0.5; // Distance over which to fade

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

// ============================================
// LOD Hook
// ============================================

/**
 * Hook to track LOD state based on camera distance
 * Throttled to prevent excessive re-renders during zoom
 */
export function useLOD(targetPoint: THREE.Vector3 = new THREE.Vector3(0, 0.5, 0)): LODState {
  const { camera } = useThree();
  const [lodState, setLodState] = useState<LODState>({
    detailLevel: 'body',
    cameraDistance: 4,
    transitionProgress: 0,
    isTransitioning: false,
  });
  const prevLevelRef = useRef<DetailLevel>('body');
  const lastUpdateRef = useRef<number>(0);
  const lastDistanceRef = useRef<number>(4);

  useFrame(() => {
    const now = performance.now();
    // Throttle updates to max 10 per second (every 100ms)
    if (now - lastUpdateRef.current < 100) return;

    const distance = camera.position.distanceTo(targetPoint);

    // Only update if distance changed significantly (> 0.1 units)
    const distanceChanged = Math.abs(distance - lastDistanceRef.current) > 0.1;
    const newLevel = getDetailLevelFromDistance(distance);
    const levelChanged = newLevel !== lodState.detailLevel;

    if (!distanceChanged && !levelChanged) return;

    lastUpdateRef.current = now;
    lastDistanceRef.current = distance;

    const progress = getTransitionProgress(distance, newLevel);
    const isTransitioning = prevLevelRef.current !== newLevel;

    setLodState({
      detailLevel: newLevel,
      cameraDistance: distance,
      transitionProgress: progress,
      isTransitioning,
    });
    prevLevelRef.current = newLevel;
  });

  return lodState;
}

// ============================================
// LOD Manager Component
// ============================================

interface LODManagerProps {
  children: (lodState: LODState) => React.ReactNode;
  targetPoint?: THREE.Vector3;
}

/**
 * Component that provides LOD state to children
 */
export function LODManager({ children, targetPoint }: LODManagerProps) {
  const lodState = useLOD(targetPoint);
  return <>{children(lodState)}</>;
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
    body: '🧍',
    region: '🫁',
    organ: '❤️',
    tissue: '🔬',
    cellular: '🧬',
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
      <span className="zoom-hint">
        {lodState.detailLevel === 'body' ? 'Zoom in for detail' :
         lodState.detailLevel === 'cellular' ? 'Zoom out for context' :
         'Scroll to zoom'}
      </span>
    </div>
  );
}

export default LODManager;
