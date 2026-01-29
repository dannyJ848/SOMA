/**
 * Anatomy Action Executor
 *
 * Execute navigation actions on the 3D anatomy model based on voice/AI commands.
 * Bridges command parsing with actual 3D model manipulation.
 *
 * @module AnatomyActionExecutor
 */

import * as THREE from 'three';
import { useState, useCallback, useRef, useMemo } from 'react';
import { ALL_STRUCTURES, type AnatomicalStructure } from './AnatomyStructures.js';
import { ANATOMICAL_VIEW_PRESETS } from './EnhancedCameraControls.js';

// ============================================================================
// Types
// ============================================================================

/**
 * Types of anatomy navigation actions
 */
export type AnatomyActionType =
  | 'navigate'
  | 'zoom'
  | 'rotate'
  | 'highlight'
  | 'fade'
  | 'layer'
  | 'compare'
  | 'reset'
  | 'focus';

/**
 * Anatomy layer options
 */
export type AnatomyLayer =
  | 'skin'
  | 'muscle'
  | 'bone'
  | 'vessels'
  | 'nerves'
  | 'organs'
  | 'connective'
  | 'integumentary'
  | 'skeletal'
  | 'muscular'
  | 'cardiovascular'
  | 'respiratory'
  | 'digestive'
  | 'nervous'
  | 'urinary'
  | 'endocrine'
  | 'lymphatic'
  | 'reproductive';

/**
 * Animation easing options
 */
export type AnimationEasing = 'smooth' | 'bounce' | 'elastic' | 'linear';

/**
 * Comparison layout options
 */
export type ComparisonLayout = 'side-by-side' | 'overlay';

/**
 * Anatomy action definition
 */
export interface AnatomyAction {
  /** Action type to execute */
  type: AnatomyActionType;
  /** Target region or structure ID */
  target?: string;
  /** Layer to display */
  layer?: AnatomyLayer;
  /** Additional action options */
  options?: {
    /** Animation duration in milliseconds */
    duration?: number;
    /** Animation easing function */
    easing?: AnimationEasing;
    /** Whether to focus camera on target */
    focusCamera?: boolean;
    /** Highlight color (hex string) */
    highlightColor?: string;
    /** Opacity level for fade actions (0-1) */
    fadeOpacity?: number;
    /** Comparison layout when comparing regions */
    layout?: ComparisonLayout;
    /** Zoom amount for zoom actions */
    zoomAmount?: number;
    /** Rotation axis for rotate actions */
    axis?: 'x' | 'y' | 'z';
    /** Rotation angle in degrees */
    angle?: number;
    /** Pan direction */
    direction?: 'up' | 'down' | 'left' | 'right';
    /** Pan distance */
    distance?: number;
  };
}

/**
 * Result of a navigation action
 */
export interface NavigationResult {
  /** Whether the action succeeded */
  success: boolean;
  /** The action that was executed */
  action: AnatomyAction;
  /** Previous view state before action (for undo) */
  previousState?: AnatomyViewState;
  /** Error if action failed */
  error?: Error;
}

/**
 * Complete anatomy view state
 */
export interface AnatomyViewState {
  /** Currently targeted region ID */
  targetRegion: string | null;
  /** Currently active layer */
  currentLayer: string | null;
  /** Camera position in 3D space */
  cameraPosition: THREE.Vector3;
  /** Camera look-at target */
  cameraTarget: THREE.Vector3;
  /** List of highlighted region IDs */
  highlightedRegions: string[];
  /** List of faded region IDs */
  fadedRegions: string[];
  /** Opacity values per region ID */
  opacity: Record<string, number>;
  /** Camera zoom level */
  zoomLevel: number;
  /** Camera rotation (Euler angles) */
  cameraRotation: THREE.Euler;
}

/**
 * Parsed region ID information
 */
export interface ParsedRegionId {
  /** Anatomical system */
  system: string;
  /** Region name */
  region: string;
  /** Side (left/right) if applicable */
  side: 'left' | 'right' | null;
}

/**
 * Region database entry
 */
export interface RegionDatabaseEntry {
  /** Display name */
  name: string;
  /** FMA (Foundational Model of Anatomy) ID if available */
  fmaId?: string;
  /** Anatomical system */
  system: string;
  /** Default position in 3D space */
  defaultPosition: THREE.Vector3;
  /** Visible layers for this region */
  layers: string[];
  /** Related region IDs */
  relatedRegions: string[];
  /** Bounding box size estimate */
  boundsSize?: THREE.Vector3;
}

// ============================================================================
// Region Database
// ============================================================================

/**
 * Region database with positions and metadata
 */
export const REGION_DATABASE: Record<string, RegionDatabaseEntry> = {
  // Body regions
  head: {
    name: 'Head',
    fmaId: 'FMA:7154',
    system: 'skeletal',
    defaultPosition: new THREE.Vector3(0, 1.35, 0),
    layers: ['skin', 'bone', 'nerves', 'organs'],
    relatedRegions: ['brain', 'skull', 'leftEye', 'rightEye', 'neck'],
    boundsSize: new THREE.Vector3(0.5, 0.6, 0.5),
  },
  neck: {
    name: 'Neck',
    fmaId: 'FMA:7155',
    system: 'muscular',
    defaultPosition: new THREE.Vector3(0, 1.0, 0),
    layers: ['skin', 'muscle', 'bone', 'vessels', 'nerves'],
    relatedRegions: ['head', 'chest', 'thyroidGland', 'trachea'],
    boundsSize: new THREE.Vector3(0.24, 0.4, 0.24),
  },
  chest: {
    name: 'Chest',
    fmaId: 'FMA:7480',
    system: 'respiratory',
    defaultPosition: new THREE.Vector3(0, 0.55, 0),
    layers: ['skin', 'muscle', 'bone', 'organs', 'vessels'],
    relatedRegions: ['heart', 'leftLung', 'rightLung', 'ribcage', 'abdomen'],
    boundsSize: new THREE.Vector3(0.6, 0.8, 0.4),
  },
  abdomen: {
    name: 'Abdomen',
    fmaId: 'FMA:9577',
    system: 'digestive',
    defaultPosition: new THREE.Vector3(0, -0.1, 0),
    layers: ['skin', 'muscle', 'organs', 'vessels'],
    relatedRegions: ['liver', 'stomach', 'smallIntestine', 'largeIntestine', 'kidneys', 'pelvis'],
    boundsSize: new THREE.Vector3(0.56, 0.8, 0.4),
  },
  pelvis: {
    name: 'Pelvis',
    fmaId: 'FMA:7164',
    system: 'skeletal',
    defaultPosition: new THREE.Vector3(0, -0.45, 0),
    layers: ['bone', 'organs', 'vessels'],
    relatedRegions: ['abdomen', 'leftLeg', 'rightLeg', 'bladder'],
    boundsSize: new THREE.Vector3(0.5, 0.4, 0.4),
  },

  // Arms
  leftArm: {
    name: 'Left Arm',
    fmaId: 'FMA:24878',
    system: 'muscular',
    defaultPosition: new THREE.Vector3(-0.5, 0.4, 0),
    layers: ['skin', 'muscle', 'bone', 'vessels', 'nerves'],
    relatedRegions: ['chest', 'leftHand'],
    boundsSize: new THREE.Vector3(0.16, 0.8, 0.16),
  },
  rightArm: {
    name: 'Right Arm',
    fmaId: 'FMA:24879',
    system: 'muscular',
    defaultPosition: new THREE.Vector3(0.5, 0.4, 0),
    layers: ['skin', 'muscle', 'bone', 'vessels', 'nerves'],
    relatedRegions: ['chest', 'rightHand'],
    boundsSize: new THREE.Vector3(0.16, 0.8, 0.16),
  },

  // Legs
  leftLeg: {
    name: 'Left Leg',
    fmaId: 'FMA:24966',
    system: 'muscular',
    defaultPosition: new THREE.Vector3(-0.18, -0.85, 0),
    layers: ['skin', 'muscle', 'bone', 'vessels', 'nerves'],
    relatedRegions: ['pelvis', 'leftFoot'],
    boundsSize: new THREE.Vector3(0.2, 1.0, 0.2),
  },
  rightLeg: {
    name: 'Right Leg',
    fmaId: 'FMA:24967',
    system: 'muscular',
    defaultPosition: new THREE.Vector3(0.18, -0.85, 0),
    layers: ['skin', 'muscle', 'bone', 'vessels', 'nerves'],
    relatedRegions: ['pelvis', 'rightFoot'],
    boundsSize: new THREE.Vector3(0.2, 1.0, 0.2),
  },

  // Organs
  brain: {
    name: 'Brain',
    fmaId: 'FMA:50801',
    system: 'nervous',
    defaultPosition: new THREE.Vector3(0, 1.4, 0),
    layers: ['organs', 'nerves'],
    relatedRegions: ['head', 'skull', 'spinalCord'],
    boundsSize: new THREE.Vector3(0.36, 0.32, 0.36),
  },
  skull: {
    name: 'Skull',
    fmaId: 'FMA:52748',
    system: 'skeletal',
    defaultPosition: new THREE.Vector3(0, 1.35, 0),
    layers: ['bone'],
    relatedRegions: ['head', 'brain'],
    boundsSize: new THREE.Vector3(0.46, 0.46, 0.46),
  },
  heart: {
    name: 'Heart',
    fmaId: 'FMA:7088',
    system: 'cardiovascular',
    defaultPosition: new THREE.Vector3(-0.05, 0.55, 0.1),
    layers: ['organs', 'vessels'],
    relatedRegions: ['chest', 'aorta', 'leftLung', 'rightLung'],
    boundsSize: new THREE.Vector3(0.16, 0.2, 0.14),
  },
  leftLung: {
    name: 'Left Lung',
    fmaId: 'FMA:7309',
    system: 'respiratory',
    defaultPosition: new THREE.Vector3(-0.15, 0.55, 0),
    layers: ['organs'],
    relatedRegions: ['chest', 'heart', 'rightLung', 'trachea'],
    boundsSize: new THREE.Vector3(0.16, 0.4, 0.24),
  },
  rightLung: {
    name: 'Right Lung',
    fmaId: 'FMA:7310',
    system: 'respiratory',
    defaultPosition: new THREE.Vector3(0.15, 0.55, 0),
    layers: ['organs'],
    relatedRegions: ['chest', 'heart', 'leftLung', 'trachea'],
    boundsSize: new THREE.Vector3(0.18, 0.44, 0.24),
  },
  liver: {
    name: 'Liver',
    fmaId: 'FMA:7197',
    system: 'digestive',
    defaultPosition: new THREE.Vector3(0.1, 0.15, 0.05),
    layers: ['organs'],
    relatedRegions: ['abdomen', 'stomach', 'gallbladder'],
    boundsSize: new THREE.Vector3(0.3, 0.18, 0.2),
  },
  stomach: {
    name: 'Stomach',
    fmaId: 'FMA:7148',
    system: 'digestive',
    defaultPosition: new THREE.Vector3(-0.08, 0.1, 0.08),
    layers: ['organs'],
    relatedRegions: ['abdomen', 'liver', 'esophagus', 'smallIntestine'],
    boundsSize: new THREE.Vector3(0.24, 0.16, 0.12),
  },
  leftKidney: {
    name: 'Left Kidney',
    fmaId: 'FMA:7205',
    system: 'urinary',
    defaultPosition: new THREE.Vector3(-0.15, 0, -0.05),
    layers: ['organs'],
    relatedRegions: ['abdomen', 'rightKidney', 'leftUreter'],
    boundsSize: new THREE.Vector3(0.08, 0.16, 0.08),
  },
  rightKidney: {
    name: 'Right Kidney',
    fmaId: 'FMA:7206',
    system: 'urinary',
    defaultPosition: new THREE.Vector3(0.15, -0.02, -0.05),
    layers: ['organs'],
    relatedRegions: ['abdomen', 'leftKidney', 'rightUreter'],
    boundsSize: new THREE.Vector3(0.08, 0.16, 0.08),
  },
  bladder: {
    name: 'Urinary Bladder',
    fmaId: 'FMA:15900',
    system: 'urinary',
    defaultPosition: new THREE.Vector3(0, -0.35, 0.08),
    layers: ['organs'],
    relatedRegions: ['pelvis', 'leftUreter', 'rightUreter'],
    boundsSize: new THREE.Vector3(0.12, 0.1, 0.1),
  },
  spinalCord: {
    name: 'Spinal Cord',
    fmaId: 'FMA:7647',
    system: 'nervous',
    defaultPosition: new THREE.Vector3(0, 0.3, -0.08),
    layers: ['nerves'],
    relatedRegions: ['brain', 'spine', 'neck'],
    boundsSize: new THREE.Vector3(0.03, 1.2, 0.03),
  },
  spine: {
    name: 'Vertebral Column',
    fmaId: 'FMA:71127',
    system: 'skeletal',
    defaultPosition: new THREE.Vector3(0, 0.3, -0.1),
    layers: ['bone'],
    relatedRegions: ['neck', 'chest', 'abdomen', 'pelvis'],
    boundsSize: new THREE.Vector3(0.08, 1.4, 0.08),
  },
  trachea: {
    name: 'Trachea',
    fmaId: 'FMA:7394',
    system: 'respiratory',
    defaultPosition: new THREE.Vector3(0, 0.85, 0.05),
    layers: ['organs'],
    relatedRegions: ['neck', 'chest', 'leftBronchus', 'rightBronchus'],
    boundsSize: new THREE.Vector3(0.05, 0.3, 0.05),
  },
  aorta: {
    name: 'Aorta',
    fmaId: 'FMA:7084',
    system: 'cardiovascular',
    defaultPosition: new THREE.Vector3(0, 0.7, 0.02),
    layers: ['vessels'],
    relatedRegions: ['heart', 'chest', 'abdomen'],
    boundsSize: new THREE.Vector3(0.05, 0.35, 0.05),
  },
  thyroidGland: {
    name: 'Thyroid Gland',
    fmaId: 'FMA:9603',
    system: 'endocrine',
    defaultPosition: new THREE.Vector3(0, 0.95, 0.08),
    layers: ['organs'],
    relatedRegions: ['neck', 'trachea'],
    boundsSize: new THREE.Vector3(0.08, 0.03, 0.04),
  },
  pituitaryGland: {
    name: 'Pituitary Gland',
    fmaId: 'FMA:13889',
    system: 'endocrine',
    defaultPosition: new THREE.Vector3(0, 1.32, 0.05),
    layers: ['organs'],
    relatedRegions: ['brain', 'head'],
    boundsSize: new THREE.Vector3(0.03, 0.03, 0.03),
  },
  leftEye: {
    name: 'Left Eye',
    fmaId: 'FMA:54448',
    system: 'nervous',
    defaultPosition: new THREE.Vector3(-0.08, 1.38, 0.18),
    layers: ['organs'],
    relatedRegions: ['head', 'brain'],
    boundsSize: new THREE.Vector3(0.06, 0.06, 0.04),
  },
  rightEye: {
    name: 'Right Eye',
    fmaId: 'FMA:54449',
    system: 'nervous',
    defaultPosition: new THREE.Vector3(0.08, 1.38, 0.18),
    layers: ['organs'],
    relatedRegions: ['head', 'brain'],
    boundsSize: new THREE.Vector3(0.06, 0.06, 0.04),
  },
  ribcage: {
    name: 'Rib Cage',
    fmaId: 'FMA:7574',
    system: 'skeletal',
    defaultPosition: new THREE.Vector3(0, 0.55, 0),
    layers: ['bone'],
    relatedRegions: ['chest', 'heart', 'leftLung', 'rightLung'],
    boundsSize: new THREE.Vector3(0.56, 0.9, 0.5),
  },
  smallIntestine: {
    name: 'Small Intestine',
    fmaId: 'FMA:7200',
    system: 'digestive',
    defaultPosition: new THREE.Vector3(0, -0.15, 0.05),
    layers: ['organs'],
    relatedRegions: ['abdomen', 'stomach', 'largeIntestine'],
    boundsSize: new THREE.Vector3(0.3, 0.3, 0.3),
  },
  largeIntestine: {
    name: 'Large Intestine',
    fmaId: 'FMA:7201',
    system: 'digestive',
    defaultPosition: new THREE.Vector3(0, -0.1, 0),
    layers: ['organs'],
    relatedRegions: ['abdomen', 'smallIntestine'],
    boundsSize: new THREE.Vector3(0.4, 0.36, 0.36),
  },
  gallbladder: {
    name: 'Gallbladder',
    fmaId: 'FMA:7202',
    system: 'digestive',
    defaultPosition: new THREE.Vector3(0.12, 0.1, 0.12),
    layers: ['organs'],
    relatedRegions: ['liver', 'abdomen'],
    boundsSize: new THREE.Vector3(0.05, 0.06, 0.03),
  },
  pancreas: {
    name: 'Pancreas',
    fmaId: 'FMA:7198',
    system: 'endocrine',
    defaultPosition: new THREE.Vector3(0, 0.05, 0.02),
    layers: ['organs'],
    relatedRegions: ['abdomen', 'stomach'],
    boundsSize: new THREE.Vector3(0.2, 0.04, 0.08),
  },
  spleen: {
    name: 'Spleen',
    fmaId: 'FMA:7196',
    system: 'lymphatic',
    defaultPosition: new THREE.Vector3(-0.18, 0.12, -0.02),
    layers: ['organs'],
    relatedRegions: ['abdomen', 'leftKidney'],
    boundsSize: new THREE.Vector3(0.08, 0.1, 0.05),
  },
  cerebellum: {
    name: 'Cerebellum',
    fmaId: 'FMA:67944',
    system: 'nervous',
    defaultPosition: new THREE.Vector3(0, 1.28, -0.1),
    layers: ['organs'],
    relatedRegions: ['brain', 'head'],
    boundsSize: new THREE.Vector3(0.16, 0.12, 0.16),
  },
  brainstem: {
    name: 'Brainstem',
    fmaId: 'FMA:79876',
    system: 'nervous',
    defaultPosition: new THREE.Vector3(0, 1.22, 0),
    layers: ['organs'],
    relatedRegions: ['brain', 'spinalCord'],
    boundsSize: new THREE.Vector3(0.06, 0.12, 0.06),
  },
  diaphragm: {
    name: 'Diaphragm',
    fmaId: 'FMA:13295',
    system: 'respiratory',
    defaultPosition: new THREE.Vector3(0, 0.25, 0),
    layers: ['muscle'],
    relatedRegions: ['chest', 'abdomen'],
    boundsSize: new THREE.Vector3(0.44, 0.06, 0.44),
  },
  esophagus: {
    name: 'Esophagus',
    fmaId: 'FMA:7131',
    system: 'digestive',
    defaultPosition: new THREE.Vector3(0, 0.5, -0.02),
    layers: ['organs'],
    relatedRegions: ['neck', 'chest', 'stomach'],
    boundsSize: new THREE.Vector3(0.03, 0.5, 0.03),
  },
};

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Get region position in 3D space
 * @param regionId - Region or structure ID
 * @returns Position vector or null if not found
 */
export function getRegionPosition(regionId: string): THREE.Vector3 | null {
  const entry = REGION_DATABASE[regionId];
  if (entry) {
    return entry.defaultPosition.clone();
  }

  // Try to find in structures
  const structure = ALL_STRUCTURES.find(s => s.id === regionId);
  if (structure) {
    return new THREE.Vector3(...structure.position);
  }

  return null;
}

/**
 * Get region bounding box
 * @param regionId - Region or structure ID
 * @returns Bounding box or null if not found
 */
export function getRegionBounds(regionId: string): THREE.Box3 | null {
  const entry = REGION_DATABASE[regionId];
  if (!entry) return null;

  const size = entry.boundsSize || new THREE.Vector3(0.2, 0.2, 0.2);
  const min = entry.defaultPosition.clone().sub(size.clone().multiplyScalar(0.5));
  const max = entry.defaultPosition.clone().add(size.clone().multiplyScalar(0.5));

  return new THREE.Box3(min, max);
}

/**
 * Calculate optimal camera position for viewing a region
 * @param targetPosition - Target position to view
 * @param bounds - Bounding box of the target
 * @param offset - Distance offset multiplier (default: 2.5)
 * @returns Camera position and target
 */
export function calculateCameraPosition(
  targetPosition: THREE.Vector3,
  bounds: THREE.Box3,
  offset = 2.5
): { position: THREE.Vector3; target: THREE.Vector3 } {
  const size = new THREE.Vector3();
  bounds.getSize(size);
  const maxDim = Math.max(size.x, size.y, size.z);

  // Calculate optimal viewing distance based on object size
  const distance = Math.max(maxDim * offset, 1.0);

  // Default to viewing from front-right-top angle
  const position = new THREE.Vector3(
    targetPosition.x + distance * 0.7,
    targetPosition.y + distance * 0.3,
    targetPosition.z + distance * 0.7
  );

  return { position, target: targetPosition.clone() };
}

/**
 * Parse region ID to structure info
 * @param regionId - Region ID to parse
 * @returns Parsed region information
 */
export function parseRegionId(regionId: string): ParsedRegionId {
  const entry = REGION_DATABASE[regionId];

  // Check for side indicators
  let side: 'left' | 'right' | null = null;
  if (regionId.toLowerCase().startsWith('left')) {
    side = 'left';
  } else if (regionId.toLowerCase().startsWith('right')) {
    side = 'right';
  }

  return {
    system: entry?.system || 'unknown',
    region: entry?.name || regionId,
    side,
  };
}

/**
 * Easing functions for animations
 */
function easeSmooth(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function easeBounce(t: number): number {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (t < 1 / d1) {
    return n1 * t * t;
  } else if (t < 2 / d1) {
    return n1 * (t -= 1.5 / d1) * t + 0.75;
  } else if (t < 2.5 / d1) {
    return n1 * (t -= 2.25 / d1) * t + 0.9375;
  } else {
    return n1 * (t -= 2.625 / d1) * t + 0.984375;
  }
}

function easeElastic(t: number): number {
  const c4 = (2 * Math.PI) / 3;
  return t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * c4);
}

function easeLinear(t: number): number {
  return t;
}

/**
 * Get easing function by name
 */
function getEasingFunction(easing: AnimationEasing): (t: number) => number {
  switch (easing) {
    case 'bounce': return easeBounce;
    case 'elastic': return easeElastic;
    case 'linear': return easeLinear;
    default: return easeSmooth;
  }
}

// ============================================================================
// Action Executor Class
// ============================================================================

/**
 * Executor for anatomy navigation actions
 */
export class AnatomyActionExecutor {
  private scene: THREE.Scene | null = null;
  private camera: THREE.Camera | null = null;
  private controls: any | null = null;
  private state: AnatomyViewState;
  private stateHistory: AnatomyViewState[] = [];
  private maxHistory: number;
  private defaultDuration: number;
  private isExecuting = false;
  private animationCallbacks: Set<(state: AnatomyViewState) => void> = new Set();

  /**
   * Create a new action executor
   * @param options - Configuration options
   */
  constructor(options?: {
    maxHistory?: number;
    defaultDuration?: number;
  }) {
    this.maxHistory = options?.maxHistory ?? 20;
    this.defaultDuration = options?.defaultDuration ?? 800;

    // Initialize default state
    this.state = {
      targetRegion: null,
      currentLayer: null,
      cameraPosition: new THREE.Vector3(0, 0.5, 4),
      cameraTarget: new THREE.Vector3(0, 0.2, 0),
      highlightedRegions: [],
      fadedRegions: [],
      opacity: {},
      zoomLevel: 1,
      cameraRotation: new THREE.Euler(0, 0, 0),
    };

    this.saveState();
  }

  /**
   * Initialize with 3D scene references
   * @param scene - Three.js scene
   * @param camera - Three.js camera
   * @param controls - OrbitControls instance
   */
  initialize(scene: THREE.Scene, camera: THREE.Camera, controls: any): void {
    this.scene = scene;
    this.camera = camera;
    this.controls = controls;

    // Sync initial state with camera
    if (camera) {
      this.state.cameraPosition = camera.position.clone();
    }
    if (controls) {
      this.state.cameraTarget = controls.target.clone();
    }

    this.notifyStateChange();
  }

  /**
   * Check if scene is initialized
   */
  private isInitialized(): boolean {
    return this.scene !== null && this.camera !== null;
  }

  /**
   * Subscribe to state changes
   * @param callback - Function to call on state change
   * @returns Unsubscribe function
   */
  subscribe(callback: (state: AnatomyViewState) => void): () => void {
    this.animationCallbacks.add(callback);
    return () => this.animationCallbacks.delete(callback);
  }

  /**
   * Notify all subscribers of state change
   */
  private notifyStateChange(): void {
    this.animationCallbacks.forEach(cb => cb(this.state));
  }

  /**
   * Execute a single action
   * @param action - Action to execute
   * @returns Result of the action
   */
  async execute(action: AnatomyAction): Promise<NavigationResult> {
    if (this.isExecuting) {
      return {
        success: false,
        action,
        error: new Error('Another action is already executing'),
      };
    }

    this.isExecuting = true;
    const previousState = this.cloneState();

    try {
      let result: NavigationResult;

      switch (action.type) {
        case 'navigate':
          result = await this.handleNavigate(action);
          break;
        case 'zoom':
          result = await this.handleZoom(action);
          break;
        case 'rotate':
          result = await this.handleRotate(action);
          break;
        case 'highlight':
          result = await this.handleHighlight(action);
          break;
        case 'fade':
          result = await this.handleFade(action);
          break;
        case 'layer':
          result = await this.handleLayer(action);
          break;
        case 'compare':
          result = await this.handleCompare(action);
          break;
        case 'reset':
          result = await this.handleReset(action);
          break;
        case 'focus':
          result = await this.handleFocus(action);
          break;
        default:
          result = {
            success: false,
            action,
            previousState,
            error: new Error(`Unknown action type: ${(action as any).type}`),
          };
      }

      if (result.success) {
        this.saveState();
      }

      return result;
    } catch (error) {
      return {
        success: false,
        action,
        previousState,
        error: error instanceof Error ? error : new Error(String(error)),
      };
    } finally {
      this.isExecuting = false;
    }
  }

  /**
   * Handle navigate action
   */
  private async handleNavigate(action: AnatomyAction): Promise<NavigationResult> {
    const target = action.target;
    if (!target) {
      return {
        success: false,
        action,
        error: new Error('Navigate action requires a target'),
      };
    }

    const options = action.options || {};
    const duration = options.duration ?? this.defaultDuration;
    const focusCamera = options.focusCamera ?? true;

    const position = getRegionPosition(target);
    if (!position) {
      return {
        success: false,
        action,
        error: new Error(`Unknown region: ${target}`),
      };
    }

    if (focusCamera) {
      await this.navigateToRegion(target, { focusCamera: true, duration });
    }

    this.state.targetRegion = target;
    this.notifyStateChange();

    return { success: true, action, previousState: this.cloneState() };
  }

  /**
   * Handle zoom action
   */
  private async handleZoom(action: AnatomyAction): Promise<NavigationResult> {
    const options = action.options || {};
    const target = action.target;
    const amount = options.zoomAmount ?? 0.5;

    if (target) {
      return this.zoomToFit(target);
    } else if (amount > 0) {
      return this.zoomIn(undefined, amount);
    } else {
      return this.zoomOut(-amount);
    }
  }

  /**
   * Handle rotate action
   */
  private async handleRotate(action: AnatomyAction): Promise<NavigationResult> {
    const options = action.options || {};
    const axis = options.axis || 'y';
    const angle = options.angle || 45;

    return this.rotateCamera(axis, angle);
  }

  /**
   * Handle highlight action
   */
  private async handleHighlight(action: AnatomyAction): Promise<NavigationResult> {
    const target = action.target;
    if (!target) {
      return {
        success: false,
        action,
        error: new Error('Highlight action requires a target'),
      };
    }

    const options = action.options || {};
    const color = options.highlightColor;
    const duration = options.duration ?? this.defaultDuration;

    return this.highlightRegion(target, { color, duration });
  }

  /**
   * Handle fade action
   */
  private async handleFade(action: AnatomyAction): Promise<NavigationResult> {
    const target = action.target;
    const options = action.options || {};
    const opacity = options.fadeOpacity ?? 0.3;

    if (target) {
      return this.fadeRegion(target, opacity);
    } else {
      // Fade all except highlighted
      const regionsToFade = ALL_STRUCTURES
        .filter(s => !this.state.highlightedRegions.includes(s.id))
        .map(s => s.id);

      for (const regionId of regionsToFade) {
        await this.fadeRegion(regionId, opacity);
      }

      return { success: true, action, previousState: this.cloneState() };
    }
  }

  /**
   * Handle layer action
   */
  private async handleLayer(action: AnatomyAction): Promise<NavigationResult> {
    const layer = action.layer ?? null;
    const options = action.options || {};
    const duration = options.duration ?? this.defaultDuration;

    return this.setLayer(layer, { duration });
  }

  /**
   * Handle compare action
   */
  private async handleCompare(action: AnatomyAction): Promise<NavigationResult> {
    const options = action.options || {};
    const layout = options.layout || 'side-by-side';

    // Collect regions from target and related
    const primaryRegion = action.target;
    if (!primaryRegion) {
      return {
        success: false,
        action,
        error: new Error('Compare action requires a primary target'),
      };
    }

    const entry = REGION_DATABASE[primaryRegion];
    const regionIds = [primaryRegion, ...(entry?.relatedRegions || [])].slice(0, 4);

    return this.compareRegions(regionIds, { layout });
  }

  /**
   * Handle reset action
   */
  private async handleReset(action: AnatomyAction): Promise<NavigationResult> {
    const options = action.options || {};
    const duration = options.duration ?? this.defaultDuration;

    return this.resetView({ duration });
  }

  /**
   * Handle focus action
   */
  private async handleFocus(action: AnatomyAction): Promise<NavigationResult> {
    const target = action.target;
    if (!target) {
      return {
        success: false,
        action,
        error: new Error('Focus action requires a target'),
      };
    }

    const options = action.options || {};
    const duration = options.duration ?? this.defaultDuration;

    // Clear highlights and fade others
    this.state.highlightedRegions = [target];
    this.state.fadedRegions = ALL_STRUCTURES
      .filter(s => s.id !== target)
      .map(s => s.id);

    // Apply fade
    for (const regionId of this.state.fadedRegions) {
      this.state.opacity[regionId] = 0.2;
    }
    this.state.opacity[target] = 1.0;

    // Navigate to region
    await this.navigateToRegion(target, { focusCamera: true, duration });

    this.notifyStateChange();

    return { success: true, action, previousState: this.cloneState() };
  }

  /**
   * Navigate to a region
   * @param regionId - Region ID to navigate to
   * @param options - Navigation options
   * @returns Navigation result
   */
  async navigateToRegion(
    regionId: string,
    options?: { focusCamera?: boolean; duration?: number }
  ): Promise<NavigationResult> {
    const action: AnatomyAction = {
      type: 'navigate',
      target: regionId,
      options,
    };

    if (!this.isInitialized()) {
      return {
        success: false,
        action,
        error: new Error('Executor not initialized with scene'),
      };
    }

    const position = getRegionPosition(regionId);
    if (!position) {
      return {
        success: false,
        action,
        error: new Error(`Unknown region: ${regionId}`),
      };
    }

    const bounds = getRegionBounds(regionId);
    const { position: camPos, target } = calculateCameraPosition(
      position,
      bounds || new THREE.Box3(
        position.clone().sub(new THREE.Vector3(0.1, 0.1, 0.1)),
        position.clone().add(new THREE.Vector3(0.1, 0.1, 0.1))
      ),
      2.5
    );

    const duration = options?.duration ?? this.defaultDuration;
    const focusCamera = options?.focusCamera ?? true;

    if (focusCamera) {
      await this.animateCamera(camPos, target, duration);
    }

    this.state.targetRegion = regionId;
    this.notifyStateChange();

    return { success: true, action, previousState: this.cloneState() };
  }

  /**
   * Change visibility layer
   * @param layer - Layer to activate (null to clear)
   * @param options - Layer options
   * @returns Navigation result
   */
  async setLayer(layer: AnatomyLayer | null, options?: { duration?: number }): Promise<NavigationResult> {
    const action: AnatomyAction = {
      type: 'layer',
      layer: layer || undefined,
      options,
    };

    const previousState = this.cloneState();
    this.state.currentLayer = layer;

    // Update opacity for all structures based on layer
    ALL_STRUCTURES.forEach(structure => {
      const systemMatch = layer && structure.system === layer;
      const layerMatch = layer && this.matchesLayer(structure, layer);
      const visible = !layer || systemMatch || layerMatch;

      const targetOpacity = visible ? 1.0 : 0.1;
      const duration = options?.duration ?? this.defaultDuration;

      this.animateOpacity(structure.id, targetOpacity, duration);
    });

    this.notifyStateChange();

    return { success: true, action, previousState };
  }

  /**
   * Check if structure matches layer type
   */
  private matchesLayer(structure: AnatomicalStructure, layer: string): boolean {
    const layerMap: Record<string, string[]> = {
      skin: ['integumentary'],
      muscle: ['muscular'],
      bone: ['skeletal'],
      vessels: ['cardiovascular'],
      nerves: ['nervous'],
      organs: ['respiratory', 'digestive', 'urinary', 'endocrine', 'lymphatic', 'reproductive'],
    };

    const systems = layerMap[layer] || [layer];
    return systems.includes(structure.system);
  }

  /**
   * Highlight a region
   * @param regionId - Region to highlight
   * @param options - Highlight options
   * @returns Navigation result
   */
  async highlightRegion(
    regionId: string,
    options?: { color?: string; duration?: number }
  ): Promise<NavigationResult> {
    const action: AnatomyAction = {
      type: 'highlight',
      target: regionId,
      options,
    };

    if (!this.isInitialized()) {
      return {
        success: false,
        action,
        error: new Error('Executor not initialized with scene'),
      };
    }

    if (!this.state.highlightedRegions.includes(regionId)) {
      this.state.highlightedRegions.push(regionId);
    }

    // Find and highlight the mesh
    const mesh = this.findMesh(regionId);
    if (mesh) {
      const material = (mesh as THREE.Mesh).material as THREE.MeshStandardMaterial;
      if (material) {
        const originalEmissive = material.emissive.clone();
        const highlightColor = new THREE.Color(options?.color || '#ffff00');

        // Animate emissive color
        const duration = options?.duration ?? this.defaultDuration;
        const startTime = performance.now();

        await new Promise<void>(resolve => {
          const animate = () => {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            material.emissive.lerp(
              highlightColor,
              easeSmooth(progress)
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              resolve();
            }
          };
          animate();
        });
      }
    }

    this.notifyStateChange();

    return { success: true, action, previousState: this.cloneState() };
  }

  /**
   * Fade a region
   * @param regionId - Region to fade
   * @param opacity - Target opacity (0-1)
   * @returns Navigation result
   */
  async fadeRegion(regionId: string, opacity = 0.3): Promise<NavigationResult> {
    const action: AnatomyAction = {
      type: 'fade',
      target: regionId,
      options: { fadeOpacity: opacity },
    };

    if (!this.isInitialized()) {
      return {
        success: false,
        action,
        error: new Error('Executor not initialized with scene'),
      };
    }

    if (!this.state.fadedRegions.includes(regionId)) {
      this.state.fadedRegions.push(regionId);
    }

    await this.animateOpacity(regionId, opacity, this.defaultDuration);

    this.notifyStateChange();

    return { success: true, action, previousState: this.cloneState() };
  }

  /**
   * Unfade a region
   * @param regionId - Region to unfade
   * @returns Navigation result
   */
  async unfadeRegion(regionId: string): Promise<NavigationResult> {
    const action: AnatomyAction = {
      type: 'fade',
      target: regionId,
      options: { fadeOpacity: 1.0 },
    };

    this.state.fadedRegions = this.state.fadedRegions.filter(id => id !== regionId);
    delete this.state.opacity[regionId];

    await this.animateOpacity(regionId, 1.0, this.defaultDuration);

    this.notifyStateChange();

    return { success: true, action, previousState: this.cloneState() };
  }

  /**
   * Unfade all regions
   * @returns Navigation result
   */
  async unfadeAll(): Promise<NavigationResult> {
    const action: AnatomyAction = { type: 'fade' };

    const previousState = this.cloneState();

    for (const regionId of [...this.state.fadedRegions]) {
      await this.animateOpacity(regionId, 1.0, this.defaultDuration / 2);
    }

    this.state.fadedRegions = [];
    this.state.opacity = {};

    this.notifyStateChange();

    return { success: true, action, previousState };
  }

  /**
   * Compare multiple regions
   * @param regionIds - Regions to compare
   * @param options - Comparison options
   * @returns Navigation result
   */
  async compareRegions(
    regionIds: string[],
    options?: { layout?: ComparisonLayout }
  ): Promise<NavigationResult> {
    const action: AnatomyAction = {
      type: 'compare',
      options: { layout: options?.layout },
    };

    if (!this.isInitialized()) {
      return {
        success: false,
        action,
        error: new Error('Executor not initialized with scene'),
      };
    }

    const previousState = this.cloneState();

    // Highlight comparison regions
    this.state.highlightedRegions = regionIds;

    // Fade all other regions
    const allIds = ALL_STRUCTURES.map(s => s.id);
    this.state.fadedRegions = allIds.filter(id => !regionIds.includes(id));

    // Apply visual changes
    for (const regionId of regionIds) {
      await this.animateOpacity(regionId, 1.0, this.defaultDuration / 2);
    }

    for (const regionId of this.state.fadedRegions) {
      await this.animateOpacity(regionId, 0.2, this.defaultDuration / 2);
    }

    // Position camera to view all highlighted regions
    if (regionIds.length > 0) {
      const positions = regionIds
        .map(id => getRegionPosition(id))
        .filter((p): p is THREE.Vector3 => p !== null);

      if (positions.length > 0) {
        const center = new THREE.Vector3();
        positions.forEach(p => center.add(p));
        center.divideScalar(positions.length);

        // Calculate bounds
        const bounds = new THREE.Box3();
        positions.forEach(p => bounds.expandByPoint(p));

        const { position: camPos, target } = calculateCameraPosition(center, bounds, 3.5);
        await this.animateCamera(camPos, target, this.defaultDuration);
      }
    }

    this.notifyStateChange();

    return { success: true, action, previousState };
  }

  /**
   * Reset view to default
   * @param options - Reset options
   * @returns Navigation result
   */
  async resetView(options?: { duration?: number }): Promise<NavigationResult> {
    const action: AnatomyAction = {
      type: 'reset',
      options,
    };

    if (!this.isInitialized()) {
      return {
        success: false,
        action,
        error: new Error('Executor not initialized with scene'),
      };
    }

    const previousState = this.cloneState();
    const duration = options?.duration ?? this.defaultDuration;

    // Reset state
    this.state.targetRegion = null;
    this.state.currentLayer = null;
    this.state.highlightedRegions = [];
    this.state.fadedRegions = [];
    this.state.opacity = {};

    // Reset camera to default position
    const defaultPos = new THREE.Vector3(0, 0.5, 4);
    const defaultTarget = new THREE.Vector3(0, 0.2, 0);

    await this.animateCamera(defaultPos, defaultTarget, duration);

    // Reset all opacities
    for (const structure of ALL_STRUCTURES) {
      await this.animateOpacity(structure.id, 1.0, duration / 2);
    }

    this.notifyStateChange();

    return { success: true, action, previousState };
  }

  /**
   * Zoom in
   * @param target - Optional target to zoom to
   * @param amount - Zoom amount
   * @returns Navigation result
   */
  async zoomIn(target?: string, amount = 0.5): Promise<NavigationResult> {
    const action: AnatomyAction = {
      type: 'zoom',
      target,
      options: { zoomAmount: amount },
    };

    if (!this.isInitialized()) {
      return {
        success: false,
        action,
        error: new Error('Executor not initialized with scene'),
      };
    }

    if (target) {
      return this.zoomToFit(target);
    }

    const previousState = this.cloneState();
    const direction = new THREE.Vector3();
    this.camera!.getWorldDirection(direction);

    const targetPos = this.camera!.position.clone().add(direction.multiplyScalar(amount));

    await this.animateCamera(targetPos, this.state.cameraTarget, this.defaultDuration / 2);

    this.state.zoomLevel *= 1 + amount;
    this.notifyStateChange();

    return { success: true, action, previousState };
  }

  /**
   * Zoom out
   * @param amount - Zoom amount
   * @returns Navigation result
   */
  async zoomOut(amount = 0.5): Promise<NavigationResult> {
    const action: AnatomyAction = {
      type: 'zoom',
      options: { zoomAmount: -amount },
    };

    if (!this.isInitialized()) {
      return {
        success: false,
        action,
        error: new Error('Executor not initialized with scene'),
      };
    }

    const previousState = this.cloneState();
    const direction = new THREE.Vector3();
    this.camera!.getWorldDirection(direction);

    const targetPos = this.camera!.position.clone().sub(direction.multiplyScalar(amount));

    await this.animateCamera(targetPos, this.state.cameraTarget, this.defaultDuration / 2);

    this.state.zoomLevel /= 1 + amount;
    this.notifyStateChange();

    return { success: true, action, previousState };
  }

  /**
   * Zoom to fit a target
   * @param target - Target region to fit
   * @returns Navigation result
   */
  async zoomToFit(target: string): Promise<NavigationResult> {
    const action: AnatomyAction = {
      type: 'zoom',
      target,
    };

    if (!this.isInitialized()) {
      return {
        success: false,
        action,
        error: new Error('Executor not initialized with scene'),
      };
    }

    const position = getRegionPosition(target);
    if (!position) {
      return {
        success: false,
        action,
        error: new Error(`Unknown region: ${target}`),
      };
    }

    const bounds = getRegionBounds(target);
    if (!bounds) {
      return {
        success: false,
        action,
        error: new Error(`Cannot get bounds for: ${target}`),
      };
    }

    const previousState = this.cloneState();
    const { position: camPos, target: lookAt } = calculateCameraPosition(position, bounds, 2.0);

    await this.animateCamera(camPos, lookAt, this.defaultDuration);

    this.notifyStateChange();

    return { success: true, action, previousState };
  }

  /**
   * Rotate camera
   * @param axis - Rotation axis
   * @param angle - Rotation angle in degrees
   * @returns Navigation result
   */
  async rotateCamera(axis: 'x' | 'y' | 'z', angle: number): Promise<NavigationResult> {
    const action: AnatomyAction = {
      type: 'rotate',
      options: { axis, angle },
    };

    if (!this.isInitialized()) {
      return {
        success: false,
        action,
        error: new Error('Executor not initialized with scene'),
      };
    }

    const previousState = this.cloneState();
    const radians = THREE.MathUtils.degToRad(angle);

    // Calculate rotation around target
    const offset = this.camera!.position.clone().sub(this.state.cameraTarget);
    const rotation = new THREE.Euler(
      axis === 'x' ? radians : 0,
      axis === 'y' ? radians : 0,
      axis === 'z' ? radians : 0
    );

    offset.applyEuler(rotation);
    const newPos = this.state.cameraTarget.clone().add(offset);

    await this.animateCamera(newPos, this.state.cameraTarget, this.defaultDuration);

    this.state.cameraRotation.copy(rotation);
    this.notifyStateChange();

    return { success: true, action, previousState };
  }

  /**
   * Pan camera
   * @param direction - Pan direction
   * @param distance - Pan distance
   * @returns Navigation result
   */
  async panCamera(
    direction: 'up' | 'down' | 'left' | 'right',
    distance = 0.5
  ): Promise<NavigationResult> {
    const action: AnatomyAction = {
      type: 'navigate',
      options: { direction, distance },
    };

    if (!this.isInitialized()) {
      return {
        success: false,
        action,
        error: new Error('Executor not initialized with scene'),
      };
    }

    const previousState = this.cloneState();

    const right = new THREE.Vector3();
    const up = new THREE.Vector3();
    this.camera!.matrix.extractBasis(right, up, new THREE.Vector3());

    const delta = new THREE.Vector3();
    switch (direction) {
      case 'up':
        delta.copy(up).multiplyScalar(distance);
        break;
      case 'down':
        delta.copy(up).multiplyScalar(-distance);
        break;
      case 'left':
        delta.copy(right).multiplyScalar(-distance);
        break;
      case 'right':
        delta.copy(right).multiplyScalar(distance);
        break;
    }

    const newPos = this.camera!.position.clone().add(delta);
    const newTarget = this.state.cameraTarget.clone().add(delta);

    await this.animateCamera(newPos, newTarget, this.defaultDuration / 2);

    this.notifyStateChange();

    return { success: true, action, previousState };
  }

  /**
   * Get current state
   * @returns Current view state
   */
  getState(): AnatomyViewState {
    return this.cloneState();
  }

  /**
   * Save current state to history
   */
  saveState(): void {
    this.stateHistory.push(this.cloneState());
    if (this.stateHistory.length > this.maxHistory) {
      this.stateHistory.shift();
    }
  }

  /**
   * Restore a specific state
   * @param state - State to restore (undefined for last saved)
   * @returns Navigation result
   */
  async restoreState(state?: AnatomyViewState): Promise<NavigationResult> {
    const action: AnatomyAction = { type: 'reset' };

    const targetState = state || this.stateHistory[this.stateHistory.length - 1];
    if (!targetState) {
      return {
        success: false,
        action,
        error: new Error('No state to restore'),
      };
    }

    const previousState = this.cloneState();

    this.state = this.cloneState(targetState);

    if (this.isInitialized()) {
      await this.animateCamera(
        targetState.cameraPosition,
        targetState.cameraTarget,
        this.defaultDuration
      );
    }

    this.notifyStateChange();

    return { success: true, action, previousState };
  }

  /**
   * Undo last action
   * @returns Navigation result
   */
  async undo(): Promise<NavigationResult> {
    const action: AnatomyAction = { type: 'reset' };

    if (this.stateHistory.length < 2) {
      return {
        success: false,
        action,
        error: new Error('Nothing to undo'),
      };
    }

    // Remove current state
    this.stateHistory.pop();
    // Get previous state
    const previousState = this.stateHistory[this.stateHistory.length - 1];

    return this.restoreState(previousState);
  }

  /**
   * Check if undo is available
   * @returns True if can undo
   */
  canUndo(): boolean {
    return this.stateHistory.length > 1;
  }

  /**
   * Execute a sequence of actions
   * @param actions - Actions to execute
   * @returns Array of results
   */
  async executeSequence(actions: AnatomyAction[]): Promise<NavigationResult[]> {
    const results: NavigationResult[] = [];

    for (const action of actions) {
      const result = await this.execute(action);
      results.push(result);

      if (!result.success) {
        break;
      }
    }

    return results;
  }

  /**
   * Clone the current state
   * @param source - Source state to clone (defaults to current state)
   * @returns Cloned state
   */
  private cloneState(source?: AnatomyViewState): AnatomyViewState {
    const s = source || this.state;
    return {
      targetRegion: s.targetRegion,
      currentLayer: s.currentLayer,
      cameraPosition: s.cameraPosition.clone(),
      cameraTarget: s.cameraTarget.clone(),
      highlightedRegions: [...s.highlightedRegions],
      fadedRegions: [...s.fadedRegions],
      opacity: { ...s.opacity },
      zoomLevel: s.zoomLevel,
      cameraRotation: s.cameraRotation.clone(),
    };
  }

  /**
   * Find mesh by region ID
   * @param regionId - Region ID to find
   * @returns Mesh object or null
   */
  private findMesh(regionId: string): THREE.Object3D | null {
    if (!this.scene) return null;

    let found: THREE.Object3D | null = null;
    this.scene.traverse(child => {
      if (child.name === regionId || child.userData.id === regionId) {
        found = child;
      }
    });

    return found;
  }

  /**
   * Animate camera to new position
   * @param targetPos - Target camera position
   * @param targetLookAt - Target look-at point
   * @param duration - Animation duration
   */
  private async animateCamera(
    targetPos: THREE.Vector3,
    targetLookAt: THREE.Vector3,
    duration: number
  ): Promise<void> {
    if (!this.camera || !this.controls) return;

    const startPos = this.camera.position.clone();
    const startTarget = this.controls.target.clone();
    const startTime = performance.now();
    const easing = easeSmooth;

    return new Promise(resolve => {
      const animate = () => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easing(progress);

        this.camera!.position.lerpVectors(startPos, targetPos, eased);
        this.controls!.target.lerpVectors(startTarget, targetLookAt, eased);
        this.controls!.update();

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          this.state.cameraPosition.copy(targetPos);
          this.state.cameraTarget.copy(targetLookAt);
          resolve();
        }
      };
      animate();
    });
  }

  /**
   * Animate opacity change
   * @param regionId - Region to animate
   * @param targetOpacity - Target opacity
   * @param duration - Animation duration
   */
  private async animateOpacity(
    regionId: string,
    targetOpacity: number,
    duration: number
  ): Promise<void> {
    const mesh = this.findMesh(regionId);
    if (!mesh) return;

    const material = (mesh as THREE.Mesh).material as THREE.MeshStandardMaterial;
    if (!material) return;

    const startOpacity = material.opacity;
    const startTime = performance.now();

    return new Promise(resolve => {
      const animate = () => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        material.opacity = startOpacity + (targetOpacity - startOpacity) * easeSmooth(progress);
        material.transparent = material.opacity < 1;
        material.needsUpdate = true;

        this.state.opacity[regionId] = material.opacity;

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };
      animate();
    });
  }
}

// ============================================================================
// React Hook
// ============================================================================

/**
 * Hook for using anatomy action executor in React components
 * @returns Executor state and actions
 */
export function useAnatomyActionExecutor(): {
  executor: AnatomyActionExecutor | null;
  initialize: (scene: THREE.Scene, camera: THREE.Camera, controls: any) => void;
  execute: (action: AnatomyAction) => Promise<NavigationResult>;
  navigateTo: (regionId: string) => Promise<void>;
  setLayer: (layer: AnatomyLayer | null) => Promise<void>;
  highlight: (regionId: string) => Promise<void>;
  reset: () => Promise<void>;
  undo: () => Promise<void>;
  canUndo: boolean;
  isExecuting: boolean;
  error: Error | null;
  state: AnatomyViewState | null;
} {
  const executorRef = useRef<AnatomyActionExecutor | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [canUndo, setCanUndo] = useState(false);
  const [state, setState] = useState<AnatomyViewState | null>(null);

  // Create executor once
  if (!executorRef.current) {
    executorRef.current = new AnatomyActionExecutor();
    executorRef.current.subscribe(newState => {
      setState(newState);
      setCanUndo(executorRef.current?.canUndo() ?? false);
    });
  }

  /**
   * Initialize with scene references
   */
  const initialize = useCallback((scene: THREE.Scene, camera: THREE.Camera, controls: any) => {
    executorRef.current?.initialize(scene, camera, controls);
    setState(executorRef.current?.getState() || null);
    setCanUndo(executorRef.current?.canUndo() ?? false);
  }, []);

  /**
   * Execute an action
   */
  const execute = useCallback(async (action: AnatomyAction): Promise<NavigationResult> => {
    setIsExecuting(true);
    setError(null);

    try {
      const result = await executorRef.current!.execute(action);
      if (result.error) {
        setError(result.error);
      }
      setCanUndo(executorRef.current?.canUndo() ?? false);
      return result;
    } catch (err) {
      const e = err instanceof Error ? err : new Error(String(err));
      setError(e);
      return {
        success: false,
        action,
        error: e,
      };
    } finally {
      setIsExecuting(false);
    }
  }, []);

  /**
   * Navigate to a region
   */
  const navigateTo = useCallback(async (regionId: string): Promise<void> => {
    setIsExecuting(true);
    setError(null);

    try {
      const result = await executorRef.current!.navigateToRegion(regionId, { focusCamera: true });
      if (result.error) {
        setError(result.error);
      }
      setCanUndo(executorRef.current?.canUndo() ?? false);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsExecuting(false);
    }
  }, []);

  /**
   * Set active layer
   */
  const setLayer = useCallback(async (layer: AnatomyLayer | null): Promise<void> => {
    setIsExecuting(true);
    setError(null);

    try {
      const result = await executorRef.current!.setLayer(layer);
      if (result.error) {
        setError(result.error);
      }
      setCanUndo(executorRef.current?.canUndo() ?? false);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsExecuting(false);
    }
  }, []);

  /**
   * Highlight a region
   */
  const highlight = useCallback(async (regionId: string): Promise<void> => {
    setIsExecuting(true);
    setError(null);

    try {
      const result = await executorRef.current!.highlightRegion(regionId);
      if (result.error) {
        setError(result.error);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsExecuting(false);
    }
  }, []);

  /**
   * Reset view
   */
  const reset = useCallback(async (): Promise<void> => {
    setIsExecuting(true);
    setError(null);

    try {
      const result = await executorRef.current!.resetView();
      if (result.error) {
        setError(result.error);
      }
      setCanUndo(executorRef.current?.canUndo() ?? false);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsExecuting(false);
    }
  }, []);

  /**
   * Undo last action
   */
  const undo = useCallback(async (): Promise<void> => {
    setIsExecuting(true);
    setError(null);

    try {
      const result = await executorRef.current!.undo();
      if (result.error) {
        setError(result.error);
      }
      setCanUndo(executorRef.current?.canUndo() ?? false);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsExecuting(false);
    }
  }, []);

  return useMemo(
    () => ({
      executor: executorRef.current,
      initialize,
      execute,
      navigateTo,
      setLayer,
      highlight,
      reset,
      undo,
      canUndo,
      isExecuting,
      error,
      state,
    }),
    [initialize, execute, navigateTo, setLayer, highlight, reset, undo, canUndo, isExecuting, error, state]
  );
}

// ============================================================================
// Default Export
// ============================================================================

export default AnatomyActionExecutor;
