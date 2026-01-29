/**
 * Model Loading Manager
 *
 * Progressive model loading system with:
 * - Quality tiers: preview (procedural), standard (compressed GLB), high (full GLB)
 * - Memory budget management (150MB for iPhone 14)
 * - Priority-based loading queue
 * - Region-based preloading and unloading
 * - Smooth transitions between quality levels
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

// ============================================
// Types
// ============================================

export type ModelQuality = 'preview' | 'standard' | 'high';

export type ModelRegion =
  | 'head'
  | 'neck'
  | 'thorax'
  | 'abdomen'
  | 'trunk'
  | 'back'
  | 'leftUpperLimb'
  | 'rightUpperLimb'
  | 'leftLowerLimb'
  | 'rightLowerLimb'
  | 'full';

export type ModelSystem =
  | 'skeletal'
  | 'digestive'
  | 'cardiovascular'
  | 'respiratory'
  | 'nervous'
  | 'muscular';

export interface ModelInfo {
  id: string;
  name: string;
  file: string;
  system: ModelSystem | 'organs';
  sizeMB: number;
  meshCount: number;
  region?: ModelRegion;
}

export interface LoadedModel {
  id: string;
  model: THREE.Group;
  quality: ModelQuality;
  sizeMB: number;
  loadedAt: number;
  lastAccessed: number;
  region?: ModelRegion;
  system?: ModelSystem;
}

export interface LoadTask {
  id: string;
  modelId: string;
  url: string;
  priority: number;
  quality: ModelQuality;
  region?: ModelRegion;
  system?: ModelSystem;
  status: 'queued' | 'loading' | 'loaded' | 'failed' | 'cancelled';
  progress: number;
  error?: string;
  abortController?: AbortController;
  resolve?: (model: THREE.Group | null) => void;
  reject?: (error: Error) => void;
}

export interface MemoryStats {
  usedMB: number;
  budgetMB: number;
  loadedModels: number;
  percentUsed: number;
}

export interface LoadingProgress {
  modelId: string;
  modelName: string;
  progress: number;
  status: LoadTask['status'];
  quality: ModelQuality;
}

// ============================================
// Constants
// ============================================

// Memory budget in MB - conservative for iPhone 14
export const MEMORY_BUDGET_MB = 150;

// Priority weights for different scenarios
export const PRIORITY_WEIGHTS = {
  VISIBLE_REGION: 100,      // Currently visible region
  FOCUSED_REGION: 150,      // User clicked/focused on region
  ADJACENT_REGION: 50,      // Adjacent to visible region
  PRELOAD: 25,              // Background preload
  LOW: 10,                  // Low priority background load
};

// Region adjacency map for smart preloading
export const REGION_ADJACENCY: Record<ModelRegion, ModelRegion[]> = {
  head: ['neck'],
  neck: ['head', 'thorax'],
  thorax: ['neck', 'abdomen', 'back'],
  abdomen: ['thorax', 'trunk', 'back'],
  trunk: ['abdomen', 'back'],
  back: ['thorax', 'abdomen', 'trunk'],
  leftUpperLimb: ['thorax'],
  rightUpperLimb: ['thorax'],
  leftLowerLimb: ['trunk', 'abdomen'],
  rightLowerLimb: ['trunk', 'abdomen'],
  full: [],
};

// Model manifest data (from assets/models/manifest.json)
export const MODEL_MANIFEST: ModelInfo[] = [
  // Skeletal system - lightweight main model
  {
    id: 'skeletal-main',
    name: '1: Skeletal system',
    file: 'assets/models/skeletal/1_Skeletal_system.glb',
    system: 'skeletal',
    sizeMB: 1.59,
    meshCount: 1244,
  },
  // Digestive system
  {
    id: 'digestive-main',
    name: 'Digestive system',
    file: 'assets/models/digestive/Digestive_system.glb',
    system: 'digestive',
    sizeMB: 8.59,
    meshCount: 78,
  },
  // Regional models
  {
    id: 'region-head',
    name: 'Head',
    file: 'assets/models/organs/Head.glb',
    system: 'organs',
    sizeMB: 9.02,
    meshCount: 877,
    region: 'head',
  },
  {
    id: 'region-neck',
    name: 'Neck',
    file: 'assets/models/organs/Neck.glb',
    system: 'organs',
    sizeMB: 8.57,
    meshCount: 189,
    region: 'neck',
  },
  {
    id: 'region-thorax',
    name: 'Thorax',
    file: 'assets/models/organs/Thorax.glb',
    system: 'organs',
    sizeMB: 8.81,
    meshCount: 135,
    region: 'thorax',
  },
  {
    id: 'region-abdomen',
    name: 'Abdomen',
    file: 'assets/models/organs/Abdomen.glb',
    system: 'organs',
    sizeMB: 8.56,
    meshCount: 81,
    region: 'abdomen',
  },
  {
    id: 'region-trunk',
    name: 'Trunk',
    file: 'assets/models/organs/Trunk.glb',
    system: 'organs',
    sizeMB: 9.26,
    meshCount: 710,
    region: 'trunk',
  },
  {
    id: 'region-back',
    name: 'Back',
    file: 'assets/models/organs/Back.glb',
    system: 'organs',
    sizeMB: 8.75,
    meshCount: 178,
    region: 'back',
  },
  {
    id: 'region-left-upper-limb',
    name: 'Left upper limb',
    file: 'assets/models/organs/Left_upper_limb.glb',
    system: 'organs',
    sizeMB: 8.65,
    meshCount: 219,
    region: 'leftUpperLimb',
  },
  {
    id: 'region-right-upper-limb',
    name: 'Right upper limb',
    file: 'assets/models/organs/Right_upper_limb.glb',
    system: 'organs',
    sizeMB: 8.66,
    meshCount: 249,
    region: 'rightUpperLimb',
  },
  {
    id: 'region-left-lower-limb',
    name: 'Left lower limb',
    file: 'assets/models/organs/Left_lower_limb.glb',
    system: 'organs',
    sizeMB: 8.62,
    meshCount: 311,
    region: 'leftLowerLimb',
  },
  {
    id: 'region-right-lower-limb',
    name: 'Right lower limb',
    file: 'assets/models/organs/Right_lower_limb.glb',
    system: 'organs',
    sizeMB: 8.63,
    meshCount: 341,
    region: 'rightLowerLimb',
  },
  // Visceral systems - detailed internal organs
  {
    id: 'visceral-systems',
    name: 'Visceral systems',
    file: 'assets/models/organs/Visceral_systems.glb',
    system: 'organs',
    sizeMB: 8.6,
    meshCount: 177,
  },
  // Cranium - detailed skull
  {
    id: 'cranium',
    name: 'Cranium',
    file: 'assets/models/organs/Cranium.glb',
    system: 'organs',
    sizeMB: 8.89,
    meshCount: 158,
    region: 'head',
  },
];

// ============================================
// Model Loading Manager Class
// ============================================

class ModelLoadingManagerClass {
  private static instance: ModelLoadingManagerClass;

  private loader: GLTFLoader;
  private dracoLoader: DRACOLoader;
  private loadedModels: Map<string, LoadedModel> = new Map();
  private loadQueue: LoadTask[] = [];
  private isProcessing = false;
  private maxConcurrentLoads = 2;
  private activeLoads = 0;
  private listeners: Set<(progress: LoadingProgress[]) => void> = new Set();
  private memoryBudget = MEMORY_BUDGET_MB;

  private constructor() {
    this.loader = new GLTFLoader();
    this.dracoLoader = new DRACOLoader();
    this.dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    this.dracoLoader.setDecoderConfig({ type: 'js' });
    this.loader.setDRACOLoader(this.dracoLoader);
  }

  static getInstance(): ModelLoadingManagerClass {
    if (!ModelLoadingManagerClass.instance) {
      ModelLoadingManagerClass.instance = new ModelLoadingManagerClass();
    }
    return ModelLoadingManagerClass.instance;
  }

  // ============================================
  // Memory Management
  // ============================================

  getMemoryStats(): MemoryStats {
    let usedMB = 0;
    this.loadedModels.forEach(model => {
      usedMB += model.sizeMB;
    });

    return {
      usedMB,
      budgetMB: this.memoryBudget,
      loadedModels: this.loadedModels.size,
      percentUsed: (usedMB / this.memoryBudget) * 100,
    };
  }

  setMemoryBudget(budgetMB: number): void {
    this.memoryBudget = budgetMB;
    this.enforceMemoryBudget();
  }

  private enforceMemoryBudget(): void {
    const stats = this.getMemoryStats();
    if (stats.usedMB <= this.memoryBudget) return;

    // Sort models by last accessed time (oldest first)
    const sortedModels = Array.from(this.loadedModels.entries())
      .sort((a, b) => a[1].lastAccessed - b[1].lastAccessed);

    // Unload oldest models until under budget
    for (const [id, model] of sortedModels) {
      if (stats.usedMB <= this.memoryBudget * 0.9) break; // Leave 10% buffer

      this.unloadModel(id);
      stats.usedMB -= model.sizeMB;
    }
  }

  private canFitModel(sizeMB: number): boolean {
    const stats = this.getMemoryStats();
    return stats.usedMB + sizeMB <= this.memoryBudget;
  }

  // ============================================
  // Model Loading
  // ============================================

  /**
   * Load a model with specified quality level
   */
  async loadModel(
    modelId: string,
    options: {
      quality?: ModelQuality;
      priority?: number;
      onProgress?: (progress: number) => void;
    } = {}
  ): Promise<THREE.Group | null> {
    const { quality = 'standard', priority = PRIORITY_WEIGHTS.LOW } = options;

    // Check if already loaded
    const existing = this.loadedModels.get(modelId);
    if (existing) {
      existing.lastAccessed = Date.now();
      return existing.model.clone();
    }

    // Find model info
    const modelInfo = MODEL_MANIFEST.find(m => m.id === modelId);
    if (!modelInfo) {
      console.warn(`[ModelLoadingManager] Model not found: ${modelId}`);
      return null;
    }

    // Check memory budget
    if (!this.canFitModel(modelInfo.sizeMB)) {
      this.enforceMemoryBudget();
      if (!this.canFitModel(modelInfo.sizeMB)) {
        console.warn(`[ModelLoadingManager] Not enough memory for ${modelId} (${modelInfo.sizeMB}MB)`);
        return null;
      }
    }

    // Check if already in queue
    const existingTask = this.loadQueue.find(t => t.modelId === modelId && t.status === 'queued');
    if (existingTask) {
      // Update priority if higher
      if (priority > existingTask.priority) {
        existingTask.priority = priority;
        this.sortQueue();
      }
      return new Promise((resolve, reject) => {
        existingTask.resolve = resolve;
        existingTask.reject = reject;
      });
    }

    // Create load task
    return new Promise((resolve, reject) => {
      const task: LoadTask = {
        id: `${modelId}-${Date.now()}`,
        modelId,
        url: modelInfo.file,
        priority,
        quality,
        region: modelInfo.region,
        system: modelInfo.system as ModelSystem | undefined,
        status: 'queued',
        progress: 0,
        abortController: new AbortController(),
        resolve,
        reject,
      };

      this.loadQueue.push(task);
      this.sortQueue();
      this.processQueue();
    });
  }

  /**
   * Load model by region with smart preloading
   */
  async loadRegion(
    region: ModelRegion,
    options: { preloadAdjacent?: boolean } = {}
  ): Promise<THREE.Group | null> {
    const { preloadAdjacent = true } = options;

    // Find regional model
    const regionModel = MODEL_MANIFEST.find(m => m.region === region);
    if (!regionModel) {
      console.warn(`[ModelLoadingManager] No model for region: ${region}`);
      return null;
    }

    // Load primary region with high priority
    const model = await this.loadModel(regionModel.id, {
      priority: PRIORITY_WEIGHTS.VISIBLE_REGION,
      quality: 'standard',
    });

    // Preload adjacent regions
    if (preloadAdjacent) {
      const adjacentRegions = REGION_ADJACENCY[region] || [];
      adjacentRegions.forEach(adjRegion => {
        const adjModel = MODEL_MANIFEST.find(m => m.region === adjRegion);
        if (adjModel) {
          this.loadModel(adjModel.id, {
            priority: PRIORITY_WEIGHTS.ADJACENT_REGION,
            quality: 'standard',
          }).catch(() => {}); // Silent fail for preloading
        }
      });
    }

    return model;
  }

  /**
   * Load model by system
   */
  async loadSystem(system: ModelSystem): Promise<THREE.Group | null> {
    const systemModel = MODEL_MANIFEST.find(
      m => m.system === system && m.id.includes('main')
    );

    if (!systemModel) {
      console.warn(`[ModelLoadingManager] No model for system: ${system}`);
      return null;
    }

    return this.loadModel(systemModel.id, {
      priority: PRIORITY_WEIGHTS.VISIBLE_REGION,
      quality: 'standard',
    });
  }

  // ============================================
  // Queue Processing
  // ============================================

  private sortQueue(): void {
    this.loadQueue.sort((a, b) => b.priority - a.priority);
  }

  private async processQueue(): Promise<void> {
    if (this.isProcessing) return;
    this.isProcessing = true;

    while (this.loadQueue.some(t => t.status === 'queued') && this.activeLoads < this.maxConcurrentLoads) {
      const task = this.loadQueue.find(t => t.status === 'queued');
      if (!task) break;

      task.status = 'loading';
      this.activeLoads++;
      this.notifyListeners();

      try {
        const model = await this.executeLoad(task);

        // Check if task was cancelled during loading (status can change asynchronously)
        if (model && (task.status as string) !== 'cancelled') {
          const modelInfo = MODEL_MANIFEST.find(m => m.id === task.modelId);

          this.loadedModels.set(task.modelId, {
            id: task.modelId,
            model,
            quality: task.quality,
            sizeMB: modelInfo?.sizeMB || 0,
            loadedAt: Date.now(),
            lastAccessed: Date.now(),
            region: task.region,
            system: task.system,
          });

          task.status = 'loaded';
          task.resolve?.(model.clone());
        }
      } catch (error) {
        task.status = 'failed';
        task.error = error instanceof Error ? error.message : 'Unknown error';
        task.reject?.(error as Error);
      } finally {
        this.activeLoads--;
        this.notifyListeners();
      }
    }

    this.isProcessing = false;

    // Remove completed/failed tasks
    this.loadQueue = this.loadQueue.filter(t =>
      t.status === 'queued' || t.status === 'loading'
    );
  }

  private executeLoad(task: LoadTask): Promise<THREE.Group> {
    return new Promise((resolve, reject) => {
      this.loader.load(
        task.url,
        (gltf) => {
          if (task.abortController?.signal.aborted) {
            reject(new Error('Load cancelled'));
            return;
          }
          resolve(gltf.scene);
        },
        (progress) => {
          if (progress.total > 0) {
            task.progress = (progress.loaded / progress.total) * 100;
            this.notifyListeners();
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  // ============================================
  // Model Management
  // ============================================

  /**
   * Unload a specific model to free memory
   */
  unloadModel(modelId: string): void {
    const model = this.loadedModels.get(modelId);
    if (!model) return;

    // Dispose of THREE.js resources
    model.model.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.geometry?.dispose();
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach(m => m.dispose());
        } else {
          mesh.material?.dispose();
        }
      }
    });

    this.loadedModels.delete(modelId);
  }

  /**
   * Unload models for distant regions
   */
  unloadDistantRegions(currentRegion: ModelRegion): void {
    const adjacentRegions = new Set(REGION_ADJACENCY[currentRegion] || []);
    adjacentRegions.add(currentRegion);

    this.loadedModels.forEach((model, id) => {
      if (model.region && !adjacentRegions.has(model.region)) {
        this.unloadModel(id);
      }
    });
  }

  /**
   * Cancel a pending load
   */
  cancelLoad(modelId: string): void {
    const task = this.loadQueue.find(t => t.modelId === modelId);
    if (task) {
      task.status = 'cancelled';
      task.abortController?.abort();
      task.resolve?.(null);
    }
  }

  /**
   * Check if a model is loaded
   */
  isModelLoaded(modelId: string): boolean {
    return this.loadedModels.has(modelId);
  }

  /**
   * Get a loaded model (returns clone)
   */
  getLoadedModel(modelId: string): THREE.Group | null {
    const model = this.loadedModels.get(modelId);
    if (model) {
      model.lastAccessed = Date.now();
      return model.model.clone();
    }
    return null;
  }

  /**
   * Clear all loaded models and queue
   */
  clearAll(): void {
    // Cancel all pending loads
    this.loadQueue.forEach(task => {
      task.abortController?.abort();
      task.resolve?.(null);
    });
    this.loadQueue = [];

    // Dispose all loaded models
    this.loadedModels.forEach((_, id) => this.unloadModel(id));
    this.loadedModels.clear();
  }

  // ============================================
  // Progress Tracking
  // ============================================

  /**
   * Subscribe to loading progress updates
   */
  onProgress(callback: (progress: LoadingProgress[]) => void): () => void {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  private notifyListeners(): void {
    const progress = this.getLoadingProgress();
    this.listeners.forEach(callback => callback(progress));
  }

  /**
   * Get current loading progress
   */
  getLoadingProgress(): LoadingProgress[] {
    return this.loadQueue
      .filter(t => t.status === 'loading' || t.status === 'queued')
      .map(task => {
        const modelInfo = MODEL_MANIFEST.find(m => m.id === task.modelId);
        return {
          modelId: task.modelId,
          modelName: modelInfo?.name || task.modelId,
          progress: task.progress,
          status: task.status,
          quality: task.quality,
        };
      });
  }

  // ============================================
  // Utility Methods
  // ============================================

  /**
   * Get all available models
   */
  getAvailableModels(): ModelInfo[] {
    return MODEL_MANIFEST;
  }

  /**
   * Get models by system
   */
  getModelsBySystem(system: ModelSystem | 'organs'): ModelInfo[] {
    return MODEL_MANIFEST.filter(m => m.system === system);
  }

  /**
   * Get models by region
   */
  getModelsByRegion(region: ModelRegion): ModelInfo[] {
    return MODEL_MANIFEST.filter(m => m.region === region);
  }

  /**
   * Estimate load time based on file size
   */
  estimateLoadTime(modelId: string): number {
    const model = MODEL_MANIFEST.find(m => m.id === modelId);
    if (!model) return 0;
    // Rough estimate: 1MB = 1 second on average mobile connection
    return model.sizeMB;
  }

  /**
   * Dispose loader resources
   */
  dispose(): void {
    this.clearAll();
    this.dracoLoader.dispose();
  }
}

// Export singleton instance
export const ModelLoadingManager = ModelLoadingManagerClass.getInstance();

export default ModelLoadingManager;
