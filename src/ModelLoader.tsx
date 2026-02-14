import { useState, useEffect, useCallback, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import * as THREE from 'three';

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

    // Use CDN for Draco decoder (can be changed to local path)
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    dracoLoader.setDecoderConfig({ type: 'js' });

    loader.setDRACOLoader(dracoLoader);
    loaderRef.current = loader;

    return () => {
      dracoLoader.dispose();
    };
  }, []);

  // Load a model
  const loadModel = useCallback(async (url: string): Promise<THREE.Group | null> => {
    // Check cache first
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

    return new Promise((resolve, reject) => {
      if (!loaderRef.current) {
        reject(new Error('Loader not initialized'));
        return;
      }

      loaderRef.current.load(
        url,
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

          setLoadStates(prev => {
            const newMap = new Map(prev);
            newMap.set(url, {
              url,
              progress: 0,
              loaded: false,
              error: errorMessage,
              cancelled: false,
            });
            return newMap;
          });

          reject(new Error(errorMessage));
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

// Model paths by system - using only available models
export const SYSTEM_MODELS: Record<AnatomicalSystem, string[]> = {
  skeletal: [
    '/assets/models/skeletal/1_Skeletal_system.glb',
    '/assets/models/skeletal/Axial_skeleton.glb',
    '/assets/models/skeletal/Appendicular_skeleton.glb',
    '/assets/models/skeletal/Bones_of_vertebral_column.glb',
    '/assets/models/skeletal/Cervical_vertebrae.glb',
    '/assets/models/skeletal/Thoracic_vertebrae.glb',
    '/assets/models/skeletal/Bones_of_thorax.glb',
    '/assets/models/skeletal/Bony_pelvis.glb',
    '/assets/models/skeletal/Bones_of_cranium.glb',
    '/assets/models/skeletal/Bones_of_upper_limb.glb',
    '/assets/models/skeletal/Bones_of_lower_limb.glb',
    // Use organs for additional skeletal models
    '/assets/models/organs/Cranium.glb',
    '/assets/models/organs/Head.glb',
    '/assets/models/organs/Thorax.glb',
    '/assets/models/organs/Sternum.glb',
    '/assets/models/organs/Trunk.glb',
    '/assets/models/organs/Neck.glb',
    '/assets/models/organs/Right_upper_limb.glb',
    '/assets/models/organs/Right_lower_limb.glb',
    '/assets/models/organs/Left_upper_limb.glb',
    '/assets/models/organs/Left_lower_limb.glb',
  ],
  muscular: [
    // No muscular models available - will use primitives
  ],
  cardiovascular: [
    // No cardiovascular models available - will use primitives
  ],
  nervous: [
    // No nervous models available - will use primitives
  ],
  respiratory: [
    // No respiratory models available - will use primitives
  ],
  digestive: [
    '/assets/models/digestive/Digestive_system.glb',
    '/assets/models/organs/Abdomen.glb',
    '/assets/models/organs/Back.glb',
  ],
  urinary: [
    // No urinary models available - will use primitives
  ],
  reproductive: [
    // No reproductive models available - will use primitives
  ],
  endocrine: [
    // No endocrine models available - will use primitives
  ],
  lymphatic: [
    // No lymphatic models available - will use primitives
  ],
  integumentary: [
    // No integumentary models available - will use primitives
  ],
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
