/**
 * Lighting Module
 *
 * Enhanced cinematic lighting system for the 3D anatomy viewer.
 * Provides professional-grade lighting with shadows, environment mapping,
 * and mobile-optimized performance.
 */

export {
  // Main lighting component
  AnatomyLighting,

  // Provider and context
  LightingProvider,
  useLighting,

  // Controls component
  LightingControls,

  // Presets and configuration
  LIGHTING_PRESETS,
  DEFAULT_LIGHTING_CONFIG,

  // CSS styles export
  LIGHTING_CONTROLS_STYLES,

  // Types
  type LightingPreset,
  type LightingConfig,
  type LightingState,
  type LightingPresetConfig,
} from './AnatomyLighting';
