/**
 * EnhancedAnatomicalLighting - iOS-Safe Lighting System for Anatomy Viewer
 *
 * Provides two lighting modes:
 * 1. **Simple mode** (default on iOS): Uses only ambient + 2-3 directional lights.
 *    No shadow maps, no spotlights, no environment maps. Guaranteed to work on all
 *    iOS devices including older iPhones and iPad minis.
 *
 * 2. **Enhanced mode** (desktop / high-end devices): Uses the full AnatomyLighting
 *    system with shadows, SSAO, environment mapping, and focus spotlights.
 *
 * The simple mode follows the same proven pattern used in SimplifiedAnatomyViewer,
 * which has been validated on iOS Safari/WebKit.
 *
 * CLINICAL DEFAULT: The "clinical" preset provides bright, even lighting that is
 * optimal for viewing anatomical structures with good depth perception.
 */

import { memo, useMemo } from 'react';
import * as THREE from 'three';
import {
  AnatomyLighting,
  LIGHTING_PRESETS,
  type LightingPreset,
} from '../lighting';

// ============================================
// iOS / Device Detection
// ============================================

function isIOSDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function isLowPowerDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (!isMobile) return false;
  // Older iOS devices or low-memory Android
  const isOlderIOS = /iPhone\s*(6|7|8|X|SE)/i.test(navigator.userAgent);
  const lowMemory =
    (navigator as { deviceMemory?: number }).deviceMemory !== undefined &&
    (navigator as { deviceMemory?: number }).deviceMemory! < 4;
  return isOlderIOS || lowMemory;
}

// ============================================
// Simple Lighting Presets (iOS-safe, no shadows)
// ============================================

/**
 * Simple lighting configurations that use only ambient + directional lights.
 * These are guaranteed to work on iOS WebKit without any shader compilation
 * issues, shadow map allocation, or environment map loading.
 *
 * Intensity values are calibrated for meshStandardMaterial with roughness ~0.7.
 */
export const SIMPLE_LIGHTING_PRESETS = {
  clinical: {
    name: 'Clinical',
    description: 'Bright, even lighting for anatomical clarity',
    ambient: { intensity: 0.6, color: '#ffffff' },
    keyLight: { position: [5, 5, 5] as [number, number, number], intensity: 0.8, color: '#ffffff' },
    fillLight: { position: [-3, 3, -3] as [number, number, number], intensity: 0.4, color: '#f0f0ff' },
    rimLight: { position: [0, 3, -5] as [number, number, number], intensity: 0.3, color: '#ffe0d0' },
  },
  studio: {
    name: 'Studio',
    description: 'Dramatic lighting with stronger contrast',
    ambient: { intensity: 0.35, color: '#e8e8f0' },
    keyLight: { position: [4, 6, 3] as [number, number, number], intensity: 1.0, color: '#fff5e6' },
    fillLight: { position: [-4, 4, 4] as [number, number, number], intensity: 0.3, color: '#c0d0ff' },
    rimLight: { position: [0, 2, -4] as [number, number, number], intensity: 0.5, color: '#ffddcc' },
  },
  ambient: {
    name: 'Ambient',
    description: 'Soft, diffused lighting with minimal shadows',
    ambient: { intensity: 0.8, color: '#f0f0f8' },
    keyLight: { position: [3, 10, 3] as [number, number, number], intensity: 0.5, color: '#ffffff' },
    fillLight: { position: [-3, 6, 6] as [number, number, number], intensity: 0.35, color: '#f0f0ff' },
    rimLight: { position: [0, 3, -5] as [number, number, number], intensity: 0.15, color: '#ffe8e0' },
  },
  surgical: {
    name: 'Surgical',
    description: 'Focused overhead lighting',
    ambient: { intensity: 0.3, color: '#e0e0f0' },
    keyLight: { position: [0, 8, 2] as [number, number, number], intensity: 1.2, color: '#ffffff' },
    fillLight: { position: [-2, 4, 4] as [number, number, number], intensity: 0.35, color: '#e0e8ff' },
    rimLight: { position: [1, 2, -4] as [number, number, number], intensity: 0.4, color: '#ffd0d0' },
  },
} as const;

export type SimpleLightingPreset = keyof typeof SIMPLE_LIGHTING_PRESETS;

// ============================================
// Simple iOS-Safe Lighting Component
// ============================================

interface SimpleAnatomicalLightingProps {
  /** Lighting preset name */
  preset?: SimpleLightingPreset;
  /** Global intensity multiplier (0-2) */
  intensity?: number;
}

/**
 * SimpleAnatomicalLighting - Guaranteed iOS-compatible lighting.
 *
 * Uses only:
 * - 1 ambientLight
 * - 2-3 directionalLights (no castShadow)
 *
 * No shadow maps, no spotlights, no environment maps, no post-processing.
 * This is the pattern proven to work in SimplifiedAnatomyViewer on iOS Safari.
 */
export const SimpleAnatomicalLighting = memo(function SimpleAnatomicalLighting({
  preset = 'clinical',
  intensity = 1.0,
}: SimpleAnatomicalLightingProps) {
  const config = SIMPLE_LIGHTING_PRESETS[preset];

  return (
    <>
      {/* Ambient light for base visibility - ensures no part of the model is fully black */}
      <ambientLight
        intensity={config.ambient.intensity * intensity}
        color={config.ambient.color}
      />

      {/* Key light - main directional light, NO castShadow for iOS safety */}
      <directionalLight
        position={config.keyLight.position}
        intensity={config.keyLight.intensity * intensity}
        color={config.keyLight.color}
      />

      {/* Fill light - softer light from opposite side to reduce harsh shadows */}
      <directionalLight
        position={config.fillLight.position}
        intensity={config.fillLight.intensity * intensity}
        color={config.fillLight.color}
      />

      {/* Rim/back light - provides edge definition and depth perception */}
      <directionalLight
        position={config.rimLight.position}
        intensity={config.rimLight.intensity * intensity}
        color={config.rimLight.color}
      />
    </>
  );
});

// ============================================
// Enhanced Anatomical Lighting (Adaptive)
// ============================================

interface EnhancedAnatomicalLightingProps {
  /** Lighting preset */
  preset?: LightingPreset;
  /** Global intensity multiplier (0-2) */
  intensity?: number;
  /** Enable shadow maps (ignored on iOS - always false) */
  shadowsEnabled?: boolean;
  /** Enable SSAO (ignored on iOS - always false) */
  ssaoEnabled?: boolean;
  /** Enable environment reflections (ignored on iOS - always false) */
  environmentEnabled?: boolean;
  /** Spotlight follows selected structure (ignored on iOS - always false) */
  spotlightFollowsFocus?: boolean;
  /** Focus point for spotlight */
  focusPoint?: THREE.Vector3;
  /** Force simple lighting mode regardless of device */
  forceSimpleMode?: boolean;
}

/**
 * EnhancedAnatomicalLighting - Adaptive lighting that automatically picks
 * the right approach for the current device.
 *
 * On iOS: Uses SimpleAnatomicalLighting (ambient + directional only).
 * On desktop: Uses the full AnatomyLighting system with all effects.
 *
 * The `forceSimpleMode` prop can override device detection to always use
 * the simple path (useful for memory reduction mode or debugging).
 */
export const EnhancedAnatomicalLighting = memo(function EnhancedAnatomicalLighting({
  preset = 'clinical',
  intensity = 1.0,
  shadowsEnabled = true,
  ssaoEnabled = true,
  environmentEnabled = true,
  spotlightFollowsFocus = true,
  focusPoint = new THREE.Vector3(0, 0.5, 0),
  forceSimpleMode = false,
}: EnhancedAnatomicalLightingProps) {
  const useSimple = useMemo(() => {
    if (forceSimpleMode) return true;
    return isIOSDevice() || isLowPowerDevice();
  }, [forceSimpleMode]);

  // On iOS / low-power: use the simple, proven lighting path
  if (useSimple) {
    // Map the LightingPreset to a SimpleLightingPreset (they share the same names)
    const simplePreset: SimpleLightingPreset =
      preset in SIMPLE_LIGHTING_PRESETS
        ? (preset as SimpleLightingPreset)
        : 'clinical';

    return (
      <SimpleAnatomicalLighting
        preset={simplePreset}
        intensity={intensity}
      />
    );
  }

  // On desktop / high-end: use the full lighting system
  // Still disable shadows on mobile even if not iOS
  const isMobile = typeof navigator !== 'undefined' &&
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <AnatomyLighting
      preset={preset}
      intensity={intensity}
      shadowsEnabled={isMobile ? false : shadowsEnabled}
      ssaoEnabled={isMobile ? false : ssaoEnabled}
      environmentEnabled={environmentEnabled}
      spotlightFollowsFocus={spotlightFollowsFocus}
      focusPoint={focusPoint}
    />
  );
});

export default EnhancedAnatomicalLighting;
