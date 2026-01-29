/**
 * Performance Module
 *
 * Exports all performance monitoring and adaptive quality components.
 */

// Core performance monitoring
export {
  PerformanceMonitor,
  performanceMonitor,
  getDeviceInfo,
  runGPUBenchmark,
  clearBenchmarkCache,
  TARGET_FPS,
  DROP_THRESHOLD_FPS,
  RECOVERY_THRESHOLD_FPS,
  JANK_THRESHOLD_MS,
  SPIKE_THRESHOLD_MS,
  QUALITY_PRESETS,
  QUALITY_DEGRADATION_STEPS,
  type FrameMetrics,
  type GPUMetrics,
  type PerformanceSnapshot,
  type QualitySettings,
  type QualityPreset,
  type QualityLevel,
  type BenchmarkResult,
  type DeviceInfo,
} from './PerformanceMonitor';

// Adaptive quality system
export {
  AdaptiveQualityProvider,
  useAdaptiveQuality,
  usePerformanceMetrics,
  useAdaptiveSettings,
  QualityApplicator,
  PerformanceOverlay,
  QualityControls,
  QUALITY_LEVEL_SETTINGS,
  type AdaptiveQualityState,
  type AdaptiveQualityContextValue,
  type QualityAdjustment,
} from './AdaptiveQualitySystem';

// Default export
export { default } from './AdaptiveQualitySystem';
