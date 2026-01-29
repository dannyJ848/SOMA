import { useState, useEffect, useCallback, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import * as THREE from 'three';
import { resolveAssetPath, getDracoDecoderPath, getPlatformInfo } from './utils/assetPathResolver';

/**
 * 3D ANATOMICAL MODEL SOURCES
 * ===========================
 * See /docs/3D_MODEL_SOURCES.md for complete documentation
 *
 * PRIMARY SOURCES (Recommended):
 *
 * 1. Z-Anatomy (CC BY-SA 4.0) - CURRENTLY INTEGRATED
 *    - Website: https://www.z-anatomy.com/
 *    - GitHub: https://github.com/Z-Anatomy/Models-of-human-anatomy
 *    - Sketchfab: https://sketchfab.com/Z-Anatomy
 *    - Format: GLB (web-ready), Blender, FBX
 *    - Coverage: 1500+ anatomical structures
 *
 * 2. BodyParts3D (CC BY 4.0)
 *    - Archive: https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html
 *    - Format: OBJ (requires conversion to GLB)
 *    - Coverage: 1,523 anatomical parts
 *    - Note: Z-Anatomy is based on improved BodyParts3D models
 *
 * 3. NIH 3D Print Exchange (Public Domain / CC)
 *    - Website: https://3d.nih.gov/
 *    - Format: STL, OBJ, GLB (exportable from viewer)
 *    - Coverage: Heart collection, brain, various organs
 *    - Note: Many models from patient MRI data
 *
 * SUPPLEMENTARY SOURCES (CC-Licensed Individual Organs):
 *
 * 4. Sketchfab (Various CC licenses)
 *    - Anatomy: https://sketchfab.com/tags/anatomy
 *    - Format: GLB, FBX, OBJ (all downloadable)
 *    - Recommended models (CC BY):
 *      - Human Heart (Freddan755): sketchfab.com/3d-models/human-heart-3342c8c438904ee2b3b6b68fedf30531
 *      - Brain with Labels (AbdulMuhaymin): sketchfab.com/3d-models/brain-with-labeled-parts-28c8971e11334e8b97a2a0d6235992e8
 *      - Human Organs (mkhasant): sketchfab.com/3d-models/human-organs-035316622877438cb62de673b8f19217
 *      - Realistic Lungs (neshallads): sketchfab.com/3d-models/realistic-human-lungs-ce09f4099a68467880f46e61eb9a3531
 *
 * 5. TurboSquid (Royalty-Free)
 *    - Free organs: https://www.turbosquid.com/Search/3D-Models/free/organ
 *    - Format: FBX, OBJ, Blender
 *    - Note: Requires conversion; check individual licenses
 *
 * 6. CGTrader (Royalty-Free)
 *    - Free anatomy: https://www.cgtrader.com/free-3d-models/anatomy
 *    - Format: MAX, OBJ, FBX, some GLB
 *    - Note: 1,100+ free models available
 *
 * OPTIMIZATION NOTES:
 * - Target file size: < 5MB per organ for web performance
 * - Use Draco compression: gltf-pipeline -i model.glb -o compressed.glb -d
 * - Polygon reduction in Blender if needed (Decimate modifier)
 * - This loader already includes DRACOLoader support
 *
 * ATTRIBUTION (when using CC models):
 * - Z-Anatomy: "3D models from Z-Anatomy (z-anatomy.com), CC BY-SA 4.0"
 * - BodyParts3D: "BodyParts3D, (C) DBCLS, CC BY 4.0"
 * - NIH 3D: "From NIH 3D (3d.nih.gov), Public Domain"
 */

// Model cache to avoid reloading
const modelCache = new Map<string, THREE.Group>();

// Loading state for a single model
interface ModelLoadState {
  url: string;
  progress: number;
  loaded: boolean;
  error: string | null;
  cancelled: boolean;
}

// Model loader hook
export function useModelLoader() {
  const [loadStates, setLoadStates] = useState<Map<string, ModelLoadState>>(new Map());
  const abortControllers = useRef<Map<string, AbortController>>(new Map());
  const loaderRef = useRef<GLTFLoader | null>(null);

  // Initialize loader with DRACO support
  useEffect(() => {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();

    // Use platform-appropriate Draco decoder path
    const dracoPath = getDracoDecoderPath();

    // Log platform info for debugging (always log on mobile)
    const platformInfo = getPlatformInfo();
    console.log('[ModelLoader] Initializing GLTF loader:', {
      platform: platformInfo.platform,
      isIOS: platformInfo.isIOS,
      isTauri: platformInfo.isTauri,
      baseUrl: platformInfo.baseUrl,
      dracoPath,
      locationOrigin: typeof window !== 'undefined' ? window.location.origin : 'N/A',
    });

    dracoLoader.setDecoderPath(dracoPath);
    // Use JS decoder for maximum compatibility on iOS
    // WASM decoder can have issues with some WebKit versions
    dracoLoader.setDecoderConfig({ type: 'js' });

    loader.setDRACOLoader(dracoLoader);
    loaderRef.current = loader;

    return () => {
      dracoLoader.dispose();
    };
  }, []);

  // Load a model
  const loadModel = useCallback(async (url: string): Promise<THREE.Group | null> => {
    // Resolve the asset path for the current platform
    const resolvedUrl = resolveAssetPath(url);

    // Check cache first (use original URL as key for consistency)
    if (modelCache.has(url)) {
      return modelCache.get(url)!.clone();
    }

    // Check if already loading
    if (loadStates.get(url)?.loaded === false && !loadStates.get(url)?.error) {
      // Wait for existing load
      return new Promise((resolve) => {
        const checkLoaded = setInterval(() => {
          if (modelCache.has(url)) {
            clearInterval(checkLoaded);
            resolve(modelCache.get(url)!.clone());
          }
        }, 100);
      });
    }

    // Create abort controller for this load
    const abortController = new AbortController();
    abortControllers.current.set(url, abortController);

    // Initialize load state
    setLoadStates(prev => {
      const newMap = new Map(prev);
      newMap.set(url, {
        url,
        progress: 0,
        loaded: false,
        error: null,
        cancelled: false,
      });
      return newMap;
    });

    // Log the resolved URL for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log(`[ModelLoader] Loading model: ${url} -> ${resolvedUrl}`);
    }

    return new Promise((resolve, reject) => {
      if (!loaderRef.current) {
        reject(new Error('Loader not initialized'));
        return;
      }

      loaderRef.current.load(
        resolvedUrl,
        // Success callback
        (gltf) => {
          if (abortController.signal.aborted) {
            resolve(null);
            return;
          }

          const model = gltf.scene;
          modelCache.set(url, model);

          setLoadStates(prev => {
            const newMap = new Map(prev);
            newMap.set(url, {
              url,
              progress: 100,
              loaded: true,
              error: null,
              cancelled: false,
            });
            return newMap;
          });

          resolve(model.clone());
        },
        // Progress callback
        (progress) => {
          if (abortController.signal.aborted) return;

          const percent = progress.total > 0
            ? Math.round((progress.loaded / progress.total) * 100)
            : 0;

          setLoadStates(prev => {
            const newMap = new Map(prev);
            const current = newMap.get(url);
            if (current) {
              newMap.set(url, { ...current, progress: percent });
            }
            return newMap;
          });
        },
        // Error callback
        (error) => {
          if (abortController.signal.aborted) {
            resolve(null);
            return;
          }

          const errorMessage = error instanceof Error ? error.message : 'Failed to load model';
          const platformInfo = getPlatformInfo();

          // Detailed error logging for iOS debugging
          console.error('[ModelLoader] Model load error:', {
            url,
            resolvedUrl,
            errorMessage,
            errorType: error?.constructor?.name,
            platform: platformInfo.platform,
            isIOS: platformInfo.isIOS,
            isTauri: platformInfo.isTauri,
            baseUrl: platformInfo.baseUrl,
            // Check if it's a network error
            isNetworkError: errorMessage.includes('Failed to fetch') ||
                           errorMessage.includes('NetworkError') ||
                           errorMessage.includes('404'),
          });

          setLoadStates(prev => {
            const newMap = new Map(prev);
            newMap.set(url, {
              url,
              progress: 0,
              loaded: false,
              error: `${errorMessage} (URL: ${resolvedUrl})`,
              cancelled: false,
            });
            return newMap;
          });

          reject(new Error(`${errorMessage} (URL: ${resolvedUrl})`));
        }
      );
    });
  }, [loadStates]);

  // Cancel loading a model
  const cancelLoad = useCallback((url: string) => {
    const controller = abortControllers.current.get(url);
    if (controller) {
      controller.abort();
      abortControllers.current.delete(url);
    }

    setLoadStates(prev => {
      const newMap = new Map(prev);
      const current = newMap.get(url);
      if (current) {
        newMap.set(url, { ...current, cancelled: true, error: 'Cancelled' });
      }
      return newMap;
    });
  }, []);

  // Retry loading a model
  const retryLoad = useCallback((url: string) => {
    setLoadStates(prev => {
      const newMap = new Map(prev);
      newMap.delete(url);
      return newMap;
    });
    return loadModel(url);
  }, [loadModel]);

  // Clear cache for a specific model or all models
  const clearCache = useCallback((url?: string) => {
    if (url) {
      modelCache.delete(url);
    } else {
      modelCache.clear();
    }
  }, []);

  // Get load state for a specific model
  const getLoadState = useCallback((url: string): ModelLoadState | undefined => {
    return loadStates.get(url);
  }, [loadStates]);

  // Check if a model is cached
  const isCached = useCallback((url: string): boolean => {
    return modelCache.has(url);
  }, []);

  return {
    loadModel,
    cancelLoad,
    retryLoad,
    clearCache,
    getLoadState,
    isCached,
    loadStates: Array.from(loadStates.values()),
  };
}

// Loading progress bar component
interface LoadingProgressProps {
  states: ModelLoadState[];
  onCancel?: (url: string) => void;
  onRetry?: (url: string) => void;
}

export function LoadingProgress({ states, onCancel, onRetry }: LoadingProgressProps) {
  const activeLoads = states.filter(s => !s.loaded && !s.error && !s.cancelled);
  const errors = states.filter(s => s.error && !s.cancelled);

  if (activeLoads.length === 0 && errors.length === 0) {
    return null;
  }

  return (
    <div className="model-loading-overlay">
      <div className="model-loading-panel">
        <h3>Loading Models</h3>

        {activeLoads.map(state => (
          <div key={state.url} className="loading-item">
            <div className="loading-info">
              <span className="loading-name">{getModelName(state.url)}</span>
              <span className="loading-percent">{state.progress}%</span>
            </div>
            <div className="loading-bar">
              <div
                className="loading-bar-fill"
                style={{ width: `${state.progress}%` }}
              />
            </div>
            {onCancel && (
              <button
                className="loading-cancel"
                onClick={() => onCancel(state.url)}
              >
                Cancel
              </button>
            )}
          </div>
        ))}

        {errors.map(state => (
          <div key={state.url} className="loading-item loading-error">
            <div className="loading-info">
              <span className="loading-name">{getModelName(state.url)}</span>
              <span className="error-message">{state.error}</span>
            </div>
            {onRetry && (
              <button
                className="loading-retry"
                onClick={() => onRetry(state.url)}
              >
                Retry
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper to extract model name from URL
function getModelName(url: string): string {
  const parts = url.split('/');
  const filename = parts[parts.length - 1];
  return filename.replace(/\.(gltf|glb)$/i, '');
}

// Model component that handles loading and displaying a GLTF model
interface ModelProps {
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
  visible?: boolean;
  onLoad?: (model: THREE.Group) => void;
  onError?: (error: Error) => void;
}

export function Model({
  url,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  visible = true,
  onLoad,
  onError,
}: ModelProps) {
  const [model, setModel] = useState<THREE.Group | null>(null);
  const { loadModel } = useModelLoader();

  useEffect(() => {
    if (!visible) return;

    loadModel(url)
      .then(loadedModel => {
        if (loadedModel) {
          setModel(loadedModel);
          onLoad?.(loadedModel);
        }
      })
      .catch(error => {
        onError?.(error);
      });
  }, [url, visible, loadModel, onLoad, onError]);

  if (!model || !visible) return null;

  const scaleArray = typeof scale === 'number' ? [scale, scale, scale] : scale;

  return (
    <primitive
      object={model}
      position={position}
      rotation={rotation}
      scale={scaleArray as [number, number, number]}
    />
  );
}

// Anatomical system definitions
export type AnatomicalSystem =
  | 'skeletal'
  | 'muscular'
  | 'cardiovascular'
  | 'nervous'
  | 'respiratory'
  | 'digestive'
  | 'urinary'
  | 'reproductive'
  | 'endocrine'
  | 'lymphatic'
  | 'integumentary';

// Model paths by system
// PERFORMANCE: Only load ONE main model per system to avoid loading 80+ MB of data
// The full system models contain all components, so we don't need the sub-parts
//
// Available model files (from Z-Anatomy):
//   - assets/models/skeletal/  -> Skeletal system + sub-parts (bones, vertebrae, ribs, etc.)
//   - assets/models/digestive/ -> Digestive_system.glb
//   - assets/models/organs/    -> Regional body parts (Head, Thorax, Abdomen, Trunk, limbs, etc.)
//
// Since Z-Anatomy organizes most organs regionally rather than by physiological system,
// we map regional models to the most relevant body system. Visceral_systems.glb contains
// internal organs spanning multiple systems and is used as the primary model for several.
export const SYSTEM_MODELS: Record<AnatomicalSystem, string[]> = {
  skeletal: [
    // Main skeletal system model (1.6MB, 1244 meshes) - compact full skeleton
    'assets/models/skeletal/1_Skeletal_system.glb',
  ],
  muscular: [
    // Trunk contains major muscle groups of the torso (710 meshes)
    'assets/models/organs/Trunk.glb',
  ],
  cardiovascular: [
    // Thorax contains the heart, great vessels, and chest cavity structures (135 meshes)
    'assets/models/organs/Thorax.glb',
  ],
  nervous: [
    // Head contains the brain and cranial nerves (877 meshes)
    'assets/models/organs/Head.glb',
  ],
  respiratory: [
    // Visceral systems includes lungs and airways (177 meshes)
    'assets/models/organs/Visceral_systems.glb',
  ],
  digestive: [
    // Dedicated digestive system model (78 meshes)
    'assets/models/digestive/Digestive_system.glb',
  ],
  urinary: [
    // Abdomen contains kidneys, bladder, and urinary tract structures (81 meshes)
    'assets/models/organs/Abdomen.glb',
  ],
  reproductive: [
    // Abdomen also contains reproductive organs - shares model with urinary
    'assets/models/organs/Abdomen.glb',
  ],
  endocrine: [
    // Neck contains thyroid and parathyroid glands (189 meshes)
    'assets/models/organs/Neck.glb',
  ],
  lymphatic: [
    // Neck region has prominent lymph node chains (189 meshes)
    'assets/models/organs/Neck.glb',
  ],
  integumentary: [
    // Regions of human body shows body surface and skin regions (2726 meshes)
    'assets/models/organs/Regions_of_human_body.glb',
  ],
};

// Quality tiers for progressive loading
export type ModelQualityTier = 'preview' | 'standard' | 'high';

// Model quality tier configuration
export interface ModelQualityConfig {
  tier: ModelQualityTier;
  description: string;
  maxPolygons: number;
  textureSize: number;
  compressionLevel: 'none' | 'low' | 'high';
}

export const QUALITY_TIERS: Record<ModelQualityTier, ModelQualityConfig> = {
  preview: {
    tier: 'preview',
    description: 'Procedural geometry placeholder',
    maxPolygons: 500,
    textureSize: 0,
    compressionLevel: 'none',
  },
  standard: {
    tier: 'standard',
    description: 'Draco-compressed GLB',
    maxPolygons: 50000,
    textureSize: 512,
    compressionLevel: 'high',
  },
  high: {
    tier: 'high',
    description: 'Full-quality GLB',
    maxPolygons: 200000,
    textureSize: 2048,
    compressionLevel: 'low',
  },
};

// Memory budget for different devices (in MB)
export const MEMORY_BUDGETS = {
  low: 75,       // Older devices
  medium: 150,   // iPhone 14 / mid-range Android
  high: 300,     // iPad Pro / high-end devices
};

// Detect device memory tier
export function detectMemoryTier(): keyof typeof MEMORY_BUDGETS {
  if (typeof navigator === 'undefined') return 'medium';

  // Check deviceMemory API (Chrome)
  const deviceMemory = (navigator as any).deviceMemory;
  if (deviceMemory) {
    if (deviceMemory < 2) return 'low';
    if (deviceMemory < 4) return 'medium';
    return 'high';
  }

  // Fallback: check hardwareConcurrency
  const cores = navigator.hardwareConcurrency || 4;
  if (cores <= 2) return 'low';
  if (cores <= 4) return 'medium';
  return 'high';
}

// Regional model paths for body parts
export const REGIONAL_MODELS: Record<string, string> = {
  head: 'assets/models/organs/Head.glb',
  neck: 'assets/models/organs/Neck.glb',
  thorax: 'assets/models/organs/Thorax.glb',
  abdomen: 'assets/models/organs/Abdomen.glb',
  trunk: 'assets/models/organs/Trunk.glb',
  back: 'assets/models/organs/Back.glb',
  leftUpperLimb: 'assets/models/organs/Left_upper_limb.glb',
  rightUpperLimb: 'assets/models/organs/Right_upper_limb.glb',
  leftLowerLimb: 'assets/models/organs/Left_lower_limb.glb',
  rightLowerLimb: 'assets/models/organs/Right_lower_limb.glb',
  rightHand: 'assets/models/organs/Right_hand.glb',
  rightFoot: 'assets/models/organs/Right_foot.glb',
  cranium: 'assets/models/organs/Cranium.glb',
  visceralSystems: 'assets/models/organs/Visceral_systems.glb',
};

// Lazy loading manager for anatomical systems
export function useSystemLoader() {
  const [loadedSystems, setLoadedSystems] = useState<Set<AnatomicalSystem>>(new Set());
  const [loadingSystem, setLoadingSystem] = useState<AnatomicalSystem | null>(null);
  const { loadModel, loadStates } = useModelLoader();

  const loadSystem = useCallback(async (system: AnatomicalSystem) => {
    if (loadedSystems.has(system)) return;

    setLoadingSystem(system);
    const models = SYSTEM_MODELS[system];

    try {
      await Promise.all(models.map(url => loadModel(url)));
      setLoadedSystems(prev => new Set([...prev, system]));
    } finally {
      setLoadingSystem(null);
    }
  }, [loadedSystems, loadModel]);

  const unloadSystem = useCallback((system: AnatomicalSystem) => {
    // Mark system as unloaded (models remain in cache but can be garbage collected)
    setLoadedSystems(prev => {
      const newSet = new Set(prev);
      newSet.delete(system);
      return newSet;
    });
  }, []);

  const isSystemLoaded = useCallback((system: AnatomicalSystem) => {
    return loadedSystems.has(system);
  }, [loadedSystems]);

  return {
    loadSystem,
    unloadSystem,
    isSystemLoaded,
    loadingSystem,
    loadedSystems: Array.from(loadedSystems),
    loadStates,
  };
}
