/**
 * Progressive Model Loading Hooks
 *
 * React hooks for progressive model loading with:
 * - Automatic placeholder to high-quality transitions
 * - Memory-aware loading
 * - Region-based preloading
 * - Loading progress tracking
 */

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import * as THREE from 'three';
import {
  ModelLoadingManager,
  type ModelQuality,
  type ModelRegion,
  type ModelSystem,
  type MemoryStats,
  type LoadingProgress,
  PRIORITY_WEIGHTS,
  MODEL_MANIFEST,
} from './ModelLoadingManager';

// ============================================
// Types
// ============================================

export interface UseProgressiveModelOptions {
  /** Initial quality level to load */
  initialQuality?: ModelQuality;
  /** Target quality to transition to */
  targetQuality?: ModelQuality;
  /** Auto-upgrade to higher quality when available */
  autoUpgrade?: boolean;
  /** Priority for loading */
  priority?: number;
  /** Callback when model is ready */
  onReady?: (model: THREE.Group, quality: ModelQuality) => void;
  /** Callback for quality transitions */
  onQualityChange?: (from: ModelQuality, to: ModelQuality) => void;
}

export interface UseProgressiveModelResult {
  /** Current model (null if not loaded) */
  model: THREE.Group | null;
  /** Current quality level */
  quality: ModelQuality;
  /** Loading state */
  isLoading: boolean;
  /** Loading progress (0-100) */
  progress: number;
  /** Error message if loading failed */
  error: string | null;
  /** Is transitioning between qualities */
  isTransitioning: boolean;
  /** Manually upgrade quality */
  upgradeQuality: (quality: ModelQuality) => Promise<void>;
  /** Retry failed load */
  retry: () => Promise<void>;
}

export interface UseRegionLoaderOptions {
  /** Preload adjacent regions */
  preloadAdjacent?: boolean;
  /** Auto-unload distant regions */
  autoUnload?: boolean;
  /** Quality level */
  quality?: ModelQuality;
}

export interface UseRegionLoaderResult {
  /** Current region model */
  model: THREE.Group | null;
  /** Loading state */
  isLoading: boolean;
  /** Error message */
  error: string | null;
  /** Load a specific region */
  loadRegion: (region: ModelRegion) => Promise<void>;
  /** Current region */
  currentRegion: ModelRegion | null;
  /** Loaded regions */
  loadedRegions: ModelRegion[];
  /** Memory stats */
  memoryStats: MemoryStats;
}

export interface UseSystemLoaderResult {
  /** Loaded models by system */
  models: Map<ModelSystem, THREE.Group>;
  /** Loading states by system */
  loadingStates: Map<ModelSystem, boolean>;
  /** Load a system */
  loadSystem: (system: ModelSystem) => Promise<void>;
  /** Unload a system */
  unloadSystem: (system: ModelSystem) => void;
  /** Check if system is loaded */
  isSystemLoaded: (system: ModelSystem) => boolean;
}

// ============================================
// Hook: useProgressiveModel
// ============================================

/**
 * Hook for progressive model loading with quality transitions
 */
export function useProgressiveModel(
  modelId: string,
  options: UseProgressiveModelOptions = {}
): UseProgressiveModelResult {
  const {
    initialQuality = 'preview',
    targetQuality = 'standard',
    autoUpgrade = true,
    priority = PRIORITY_WEIGHTS.LOW,
    onReady,
    onQualityChange,
  } = options;

  const [model, setModel] = useState<THREE.Group | null>(null);
  const [quality, setQuality] = useState<ModelQuality>(initialQuality);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const mountedRef = useRef(true);
  const loadingRef = useRef(false);

  // Subscribe to loading progress
  useEffect(() => {
    const unsubscribe = ModelLoadingManager.onProgress((progressList) => {
      const modelProgress = progressList.find(p => p.modelId === modelId);
      if (modelProgress && mountedRef.current) {
        setProgress(modelProgress.progress);
      }
    });

    return () => {
      unsubscribe();
      mountedRef.current = false;
    };
  }, [modelId]);

  // Initial load
  useEffect(() => {
    if (loadingRef.current) return;

    const loadModel = async () => {
      loadingRef.current = true;
      setIsLoading(true);
      setError(null);

      try {
        // First, check if already loaded
        const cached = ModelLoadingManager.getLoadedModel(modelId);
        if (cached && mountedRef.current) {
          setModel(cached);
          setQuality('standard');
          setIsLoading(false);
          onReady?.(cached, 'standard');
          loadingRef.current = false;
          return;
        }

        // Load with target quality
        const loadedModel = await ModelLoadingManager.loadModel(modelId, {
          quality: targetQuality,
          priority,
        });

        if (loadedModel && mountedRef.current) {
          setModel(loadedModel);
          setQuality(targetQuality);
          onReady?.(loadedModel, targetQuality);
        }
      } catch (err) {
        if (mountedRef.current) {
          setError(err instanceof Error ? err.message : 'Failed to load model');
        }
      } finally {
        if (mountedRef.current) {
          setIsLoading(false);
        }
        loadingRef.current = false;
      }
    };

    loadModel();
  }, [modelId, targetQuality, priority, onReady]);

  // Auto-upgrade quality
  useEffect(() => {
    if (!autoUpgrade || !model || quality === 'high' || isLoading) return;

    const upgradeTimer = setTimeout(async () => {
      if (quality === 'standard' && targetQuality === 'high') {
        await upgradeQuality('high');
      }
    }, 2000); // Wait 2 seconds before upgrading

    return () => clearTimeout(upgradeTimer);
  }, [autoUpgrade, model, quality, targetQuality, isLoading]);

  const upgradeQuality = useCallback(async (newQuality: ModelQuality) => {
    if (quality === newQuality || isLoading) return;

    setIsTransitioning(true);
    const oldQuality = quality;

    try {
      const upgradedModel = await ModelLoadingManager.loadModel(modelId, {
        quality: newQuality,
        priority: PRIORITY_WEIGHTS.FOCUSED_REGION,
      });

      if (upgradedModel && mountedRef.current) {
        setModel(upgradedModel);
        setQuality(newQuality);
        onQualityChange?.(oldQuality, newQuality);
      }
    } catch (err) {
      // Keep current quality on failure
      console.warn(`Failed to upgrade quality: ${err}`);
    } finally {
      if (mountedRef.current) {
        setIsTransitioning(false);
      }
    }
  }, [modelId, quality, isLoading, onQualityChange]);

  const retry = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    loadingRef.current = false;

    try {
      const loadedModel = await ModelLoadingManager.loadModel(modelId, {
        quality: targetQuality,
        priority,
      });

      if (loadedModel && mountedRef.current) {
        setModel(loadedModel);
        setQuality(targetQuality);
        onReady?.(loadedModel, targetQuality);
      }
    } catch (err) {
      if (mountedRef.current) {
        setError(err instanceof Error ? err.message : 'Failed to load model');
      }
    } finally {
      if (mountedRef.current) {
        setIsLoading(false);
      }
    }
  }, [modelId, targetQuality, priority, onReady]);

  return {
    model,
    quality,
    isLoading,
    progress,
    error,
    isTransitioning,
    upgradeQuality,
    retry,
  };
}

// ============================================
// Hook: useRegionLoader
// ============================================

/**
 * Hook for region-based model loading with smart preloading
 */
export function useRegionLoader(
  options: UseRegionLoaderOptions = {}
): UseRegionLoaderResult {
  const {
    preloadAdjacent = true,
    autoUnload = true,
    quality = 'standard',
  } = options;

  const [model, setModel] = useState<THREE.Group | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentRegion, setCurrentRegion] = useState<ModelRegion | null>(null);
  const [loadedRegions, setLoadedRegions] = useState<ModelRegion[]>([]);
  const [memoryStats, setMemoryStats] = useState<MemoryStats>(
    ModelLoadingManager.getMemoryStats()
  );

  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Update memory stats periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (mountedRef.current) {
        setMemoryStats(ModelLoadingManager.getMemoryStats());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const loadRegion = useCallback(async (region: ModelRegion) => {
    if (region === currentRegion) return;

    setIsLoading(true);
    setError(null);

    try {
      // Unload distant regions if enabled
      if (autoUnload && currentRegion) {
        ModelLoadingManager.unloadDistantRegions(region);
      }

      // Load new region
      const regionModel = await ModelLoadingManager.loadRegion(region, {
        preloadAdjacent,
      });

      if (regionModel && mountedRef.current) {
        setModel(regionModel);
        setCurrentRegion(region);
        setLoadedRegions(prev => {
          if (!prev.includes(region)) {
            return [...prev, region];
          }
          return prev;
        });
      }
    } catch (err) {
      if (mountedRef.current) {
        setError(err instanceof Error ? err.message : 'Failed to load region');
      }
    } finally {
      if (mountedRef.current) {
        setIsLoading(false);
        setMemoryStats(ModelLoadingManager.getMemoryStats());
      }
    }
  }, [currentRegion, preloadAdjacent, autoUnload]);

  return {
    model,
    isLoading,
    error,
    loadRegion,
    currentRegion,
    loadedRegions,
    memoryStats,
  };
}

// ============================================
// Hook: useSystemLoader
// ============================================

/**
 * Hook for loading anatomical systems
 */
export function useSystemLoader(): UseSystemLoaderResult {
  const [models, setModels] = useState<Map<ModelSystem, THREE.Group>>(new Map());
  const [loadingStates, setLoadingStates] = useState<Map<ModelSystem, boolean>>(new Map());

  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const loadSystem = useCallback(async (system: ModelSystem) => {
    if (models.has(system)) return;

    setLoadingStates(prev => new Map(prev).set(system, true));

    try {
      const systemModel = await ModelLoadingManager.loadSystem(system);

      if (systemModel && mountedRef.current) {
        setModels(prev => new Map(prev).set(system, systemModel));
      }
    } catch (err) {
      console.error(`Failed to load system ${system}:`, err);
    } finally {
      if (mountedRef.current) {
        setLoadingStates(prev => new Map(prev).set(system, false));
      }
    }
  }, [models]);

  const unloadSystem = useCallback((system: ModelSystem) => {
    const systemModels = MODEL_MANIFEST.filter(m => m.system === system);
    systemModels.forEach(m => ModelLoadingManager.unloadModel(m.id));

    setModels(prev => {
      const next = new Map(prev);
      next.delete(system);
      return next;
    });
  }, []);

  const isSystemLoaded = useCallback((system: ModelSystem) => {
    return models.has(system);
  }, [models]);

  return {
    models,
    loadingStates,
    loadSystem,
    unloadSystem,
    isSystemLoaded,
  };
}

// ============================================
// Hook: useLoadingProgress
// ============================================

/**
 * Hook for tracking overall loading progress
 */
export function useLoadingProgress(): {
  progress: LoadingProgress[];
  isLoading: boolean;
  totalProgress: number;
} {
  const [progress, setProgress] = useState<LoadingProgress[]>([]);

  useEffect(() => {
    const unsubscribe = ModelLoadingManager.onProgress(setProgress);
    return () => unsubscribe();
  }, []);

  const isLoading = progress.length > 0;

  const totalProgress = useMemo(() => {
    if (progress.length === 0) return 100;
    const sum = progress.reduce((acc, p) => acc + p.progress, 0);
    return sum / progress.length;
  }, [progress]);

  return {
    progress,
    isLoading,
    totalProgress,
  };
}

// ============================================
// Hook: useMemoryBudget
// ============================================

/**
 * Hook for monitoring and managing memory budget
 */
export function useMemoryBudget(): {
  stats: MemoryStats;
  setbudget: (mb: number) => void;
  forceCleanup: () => void;
} {
  const [stats, setStats] = useState<MemoryStats>(ModelLoadingManager.getMemoryStats());

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(ModelLoadingManager.getMemoryStats());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const setbudget = useCallback((mb: number) => {
    ModelLoadingManager.setMemoryBudget(mb);
    setStats(ModelLoadingManager.getMemoryStats());
  }, []);

  const forceCleanup = useCallback(() => {
    // Force cleanup by temporarily setting a very low budget
    const currentBudget = stats.budgetMB;
    ModelLoadingManager.setMemoryBudget(0);
    ModelLoadingManager.setMemoryBudget(currentBudget);
    setStats(ModelLoadingManager.getMemoryStats());
  }, [stats.budgetMB]);

  return {
    stats,
    setbudget,
    forceCleanup,
  };
}

export default useProgressiveModel;
