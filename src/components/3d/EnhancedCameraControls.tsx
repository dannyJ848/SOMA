/**
 * Enhanced Camera Controls for 3D Anatomy Viewer
 *
 * Advanced camera control system built on top of @react-three/drei's OrbitControls
 * with additional features:
 * - Smooth easing on all movements
 * - Auto-focus on selected anatomy regions
 * - Cinematic camera animations when switching views
 * - Momentum-based rotation (continues briefly after mouse release)
 * - Double-click to focus on region
 * - Scroll zoom with smooth interpolation
 * - Touch gestures: pinch-zoom, two-finger rotate, pan
 * - Preset camera angles (front, back, left, right, top, bottom)
 * - "Fit to view" for selected region
 * - Orbit around selection point
 * - 3D compass widget showing current orientation
 */

import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
  useMemo,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useThree, useFrame, ThreeEvent } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// ============================================================================
// Types & Interfaces
// ============================================================================

export interface CameraPreset {
  name: string;
  label: string;
  position: [number, number, number];
  target: [number, number, number];
  description?: string;
}

export interface FocusTarget {
  position: THREE.Vector3;
  boundingBox?: THREE.Box3;
  distance?: number;
}

export type EasingFunction = 'smooth' | 'bounce' | 'elastic' | 'linear' | 'exponential' | 'cinematic';

export interface AnimationConfig {
  duration: number;
  easing: EasingFunction;
  onComplete?: () => void;
  onUpdate?: (progress: number) => void;
}

export interface MomentumConfig {
  enabled: boolean;
  friction: number;
  minVelocity: number;
}

export interface EnhancedCameraControlsProps {
  // Base OrbitControls props
  enabled?: boolean;
  enablePan?: boolean;
  enableZoom?: boolean;
  enableRotate?: boolean;
  minDistance?: number;
  maxDistance?: number;
  minPolarAngle?: number;
  maxPolarAngle?: number;

  // Enhanced features
  enableMomentum?: boolean;
  momentumFriction?: number;
  enableSmoothZoom?: boolean;
  zoomSmoothness?: number;
  enableDoubleClickFocus?: boolean;
  focusAnimationDuration?: number;
  focusEasing?: EasingFunction;

  // Touch gestures
  enableTouchGestures?: boolean;
  pinchZoomSpeed?: number;
  twoFingerRotateSpeed?: number;

  // Callbacks
  onCameraChange?: (position: THREE.Vector3, target: THREE.Vector3) => void;
  onPresetChange?: (presetName: string) => void;
  onDoubleClick?: (intersections: THREE.Intersection[]) => void;

  // Selection/Focus
  focusTarget?: FocusTarget | null;
  autoFocusOnSelect?: boolean;

  // Initial state
  initialPosition?: [number, number, number];
  initialTarget?: [number, number, number];
}

export interface EnhancedCameraControlsRef {
  // View presets
  setViewPreset: (presetName: string, animated?: boolean) => void;
  getCurrentPreset: () => string | null;

  // Focus operations
  focusOnPoint: (point: THREE.Vector3, distance?: number, animated?: boolean) => void;
  focusOnBoundingBox: (box: THREE.Box3, padding?: number, animated?: boolean) => void;
  fitToView: (object: THREE.Object3D, padding?: number) => void;

  // Camera manipulation
  setPosition: (position: THREE.Vector3, animated?: boolean) => void;
  setTarget: (target: THREE.Vector3, animated?: boolean) => void;
  orbit: (azimuth: number, polar: number, animated?: boolean) => void;
  zoom: (delta: number, animated?: boolean) => void;

  // State
  reset: (animated?: boolean) => void;
  getPosition: () => THREE.Vector3;
  getTarget: () => THREE.Vector3;
  getOrientation: () => { azimuth: number; polar: number; distance: number };

  // Animation
  stopAnimation: () => void;
  isAnimating: () => boolean;
}

// ============================================================================
// Camera Presets
// ============================================================================

export const CAMERA_PRESETS: Record<string, CameraPreset> = {
  front: {
    name: 'front',
    label: 'Front',
    position: [0, 0.5, 4],
    target: [0, 0.2, 0],
    description: 'Anterior view',
  },
  back: {
    name: 'back',
    label: 'Back',
    position: [0, 0.5, -4],
    target: [0, 0.2, 0],
    description: 'Posterior view',
  },
  left: {
    name: 'left',
    label: 'Left',
    position: [-4, 0.5, 0],
    target: [0, 0.2, 0],
    description: 'Left lateral view',
  },
  right: {
    name: 'right',
    label: 'Right',
    position: [4, 0.5, 0],
    target: [0, 0.2, 0],
    description: 'Right lateral view',
  },
  top: {
    name: 'top',
    label: 'Top',
    position: [0, 5, 0.01],
    target: [0, 0.2, 0],
    description: 'Superior view',
  },
  bottom: {
    name: 'bottom',
    label: 'Bottom',
    position: [0, -3, 0.01],
    target: [0, 0.2, 0],
    description: 'Inferior view',
  },
  // Additional anatomical presets
  frontRight: {
    name: 'frontRight',
    label: 'Front Right',
    position: [2.8, 0.5, 2.8],
    target: [0, 0.2, 0],
    description: 'Anterior-right oblique',
  },
  frontLeft: {
    name: 'frontLeft',
    label: 'Front Left',
    position: [-2.8, 0.5, 2.8],
    target: [0, 0.2, 0],
    description: 'Anterior-left oblique',
  },
  backRight: {
    name: 'backRight',
    label: 'Back Right',
    position: [2.8, 0.5, -2.8],
    target: [0, 0.2, 0],
    description: 'Posterior-right oblique',
  },
  backLeft: {
    name: 'backLeft',
    label: 'Back Left',
    position: [-2.8, 0.5, -2.8],
    target: [0, 0.2, 0],
    description: 'Posterior-left oblique',
  },
};

// ============================================================================
// Easing Functions
// ============================================================================

const EASING_FUNCTIONS: Record<EasingFunction, (t: number) => number> = {
  linear: (t) => t,

  smooth: (t) => {
    // Smoothstep (cubic Hermite interpolation)
    return t * t * (3 - 2 * t);
  },

  bounce: (t) => {
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
  },

  elastic: (t) => {
    const c4 = (2 * Math.PI) / 3;
    if (t === 0) return 0;
    if (t === 1) return 1;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  },

  exponential: (t) => {
    // Exponential ease out
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  },

  cinematic: (t) => {
    // Custom cinematic easing - slow start, smooth middle, gentle end
    // Combination of ease-in-out with slight overshoot damping
    if (t < 0.5) {
      return 4 * t * t * t;
    } else {
      const p = -2 * t + 2;
      return 1 - p * p * p / 2;
    }
  },
};

// ============================================================================
// Animation State
// ============================================================================

interface AnimationState {
  active: boolean;
  startTime: number;
  duration: number;
  easing: EasingFunction;
  startPosition: THREE.Vector3;
  endPosition: THREE.Vector3;
  startTarget: THREE.Vector3;
  endTarget: THREE.Vector3;
  onComplete?: () => void;
  onUpdate?: (progress: number) => void;
}

interface MomentumState {
  active: boolean;
  velocity: THREE.Vector2;
  lastPointerPosition: THREE.Vector2;
  lastTime: number;
}

// ============================================================================
// Main Component
// ============================================================================

export const EnhancedCameraControls = forwardRef<
  EnhancedCameraControlsRef,
  EnhancedCameraControlsProps
>(function EnhancedCameraControls(
  {
    enabled = true,
    enablePan = true,
    enableZoom = true,
    enableRotate = true,
    minDistance = 1.5,
    maxDistance = 20,
    minPolarAngle = 0,
    maxPolarAngle = Math.PI,

    enableMomentum = true,
    momentumFriction = 0.95,
    enableSmoothZoom = true,
    zoomSmoothness = 0.1,
    enableDoubleClickFocus = true,
    focusAnimationDuration = 800,
    focusEasing = 'cinematic',

    enableTouchGestures = true,
    pinchZoomSpeed = 1,
    twoFingerRotateSpeed = 1,

    onCameraChange,
    onPresetChange,
    onDoubleClick,

    focusTarget,
    autoFocusOnSelect = true,

    initialPosition = [0, 0.5, 4],
    initialTarget = [0, 0.2, 0],
  },
  ref
) {
  const { camera, gl, scene, raycaster, pointer } = useThree();
  const controlsRef = useRef<any>(null);

  // Animation state
  const animationRef = useRef<AnimationState | null>(null);

  // Momentum state
  const momentumRef = useRef<MomentumState>({
    active: false,
    velocity: new THREE.Vector2(),
    lastPointerPosition: new THREE.Vector2(),
    lastTime: 0,
  });

  // Smooth zoom state
  const zoomRef = useRef({
    target: 1,
    current: 1,
    velocity: 0,
  });

  // Current preset tracking
  const [currentPreset, setCurrentPreset] = useState<string | null>(null);

  // Touch gesture state
  const touchRef = useRef({
    initialDistance: 0,
    initialAngle: 0,
    initialPosition: new THREE.Vector2(),
    lastTouches: [] as Touch[],
  });

  // ========================================================================
  // Utility Functions
  // ========================================================================

  const getEasingValue = useCallback((t: number, easing: EasingFunction): number => {
    return EASING_FUNCTIONS[easing](t);
  }, []);

  const calculateDistance = useCallback((): number => {
    if (!controlsRef.current) return 4;
    return camera.position.distanceTo(controlsRef.current.target);
  }, [camera]);

  const getSphericalCoords = useCallback((): { azimuth: number; polar: number; distance: number } => {
    if (!controlsRef.current) {
      return { azimuth: 0, polar: Math.PI / 2, distance: 4 };
    }

    const offset = camera.position.clone().sub(controlsRef.current.target);
    const distance = offset.length();
    const polar = Math.acos(THREE.MathUtils.clamp(offset.y / distance, -1, 1));
    const azimuth = Math.atan2(offset.x, offset.z);

    return { azimuth, polar, distance };
  }, [camera]);

  // ========================================================================
  // Animation System
  // ========================================================================

  const startAnimation = useCallback((
    endPosition: THREE.Vector3,
    endTarget: THREE.Vector3,
    config: Partial<AnimationConfig> = {}
  ) => {
    const {
      duration = focusAnimationDuration,
      easing = focusEasing,
      onComplete,
      onUpdate,
    } = config;

    const controls = controlsRef.current;
    if (!controls) return;

    animationRef.current = {
      active: true,
      startTime: performance.now(),
      duration,
      easing,
      startPosition: camera.position.clone(),
      endPosition: endPosition.clone(),
      startTarget: controls.target.clone(),
      endTarget: endTarget.clone(),
      onComplete,
      onUpdate,
    };
  }, [camera, focusAnimationDuration, focusEasing]);

  const stopAnimation = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.active = false;
      animationRef.current = null;
    }
  }, []);

  const isAnimating = useCallback((): boolean => {
    return animationRef.current?.active ?? false;
  }, []);

  // ========================================================================
  // Camera Operations
  // ========================================================================

  const setViewPreset = useCallback((presetName: string, animated = true) => {
    const preset = CAMERA_PRESETS[presetName];
    if (!preset) {
      console.warn(`Camera preset "${presetName}" not found`);
      return;
    }

    const endPosition = new THREE.Vector3(...preset.position);
    const endTarget = new THREE.Vector3(...preset.target);

    if (animated) {
      startAnimation(endPosition, endTarget, {
        duration: 1000,
        easing: 'cinematic',
        onComplete: () => {
          setCurrentPreset(presetName);
          onPresetChange?.(presetName);
        },
      });
    } else {
      camera.position.copy(endPosition);
      if (controlsRef.current) {
        controlsRef.current.target.copy(endTarget);
        controlsRef.current.update();
      }
      setCurrentPreset(presetName);
      onPresetChange?.(presetName);
    }
  }, [camera, startAnimation, onPresetChange]);

  const focusOnPoint = useCallback((
    point: THREE.Vector3,
    distance = 2,
    animated = true
  ) => {
    const controls = controlsRef.current;
    if (!controls) return;

    // Calculate new camera position maintaining current viewing angle
    const direction = camera.position.clone().sub(controls.target).normalize();
    const endPosition = point.clone().add(direction.multiplyScalar(distance));
    const endTarget = point.clone();

    if (animated) {
      startAnimation(endPosition, endTarget, {
        duration: focusAnimationDuration,
        easing: focusEasing,
      });
    } else {
      camera.position.copy(endPosition);
      controls.target.copy(endTarget);
      controls.update();
    }

    setCurrentPreset(null);
  }, [camera, startAnimation, focusAnimationDuration, focusEasing]);

  const focusOnBoundingBox = useCallback((
    box: THREE.Box3,
    padding = 1.2,
    animated = true
  ) => {
    const controls = controlsRef.current;
    if (!controls) return;

    const center = new THREE.Vector3();
    box.getCenter(center);

    const size = new THREE.Vector3();
    box.getSize(size);

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = (camera as THREE.PerspectiveCamera).fov || 45;
    const distance = (maxDim * padding) / (2 * Math.tan((fov * Math.PI) / 360));

    const direction = camera.position.clone().sub(controls.target).normalize();
    const endPosition = center.clone().add(direction.multiplyScalar(distance));

    if (animated) {
      startAnimation(endPosition, center, {
        duration: focusAnimationDuration,
        easing: focusEasing,
      });
    } else {
      camera.position.copy(endPosition);
      controls.target.copy(center);
      controls.update();
    }

    setCurrentPreset(null);
  }, [camera, startAnimation, focusAnimationDuration, focusEasing]);

  const fitToView = useCallback((object: THREE.Object3D, padding = 1.2) => {
    const box = new THREE.Box3().setFromObject(object);
    focusOnBoundingBox(box, padding, true);
  }, [focusOnBoundingBox]);

  const setPosition = useCallback((position: THREE.Vector3, animated = true) => {
    if (animated) {
      const controls = controlsRef.current;
      if (controls) {
        startAnimation(position, controls.target.clone());
      }
    } else {
      camera.position.copy(position);
      controlsRef.current?.update();
    }
    setCurrentPreset(null);
  }, [camera, startAnimation]);

  const setTarget = useCallback((target: THREE.Vector3, animated = true) => {
    if (animated) {
      startAnimation(camera.position.clone(), target);
    } else {
      if (controlsRef.current) {
        controlsRef.current.target.copy(target);
        controlsRef.current.update();
      }
    }
    setCurrentPreset(null);
  }, [camera, startAnimation]);

  const orbit = useCallback((azimuth: number, polar: number, animated = true) => {
    const controls = controlsRef.current;
    if (!controls) return;

    const { distance } = getSphericalCoords();

    // Calculate new position from spherical coordinates
    const x = distance * Math.sin(polar) * Math.sin(azimuth);
    const y = distance * Math.cos(polar);
    const z = distance * Math.sin(polar) * Math.cos(azimuth);

    const endPosition = controls.target.clone().add(new THREE.Vector3(x, y, z));

    if (animated) {
      startAnimation(endPosition, controls.target.clone(), {
        duration: 500,
        easing: 'smooth',
      });
    } else {
      camera.position.copy(endPosition);
      controls.update();
    }

    setCurrentPreset(null);
  }, [camera, startAnimation, getSphericalCoords]);

  const zoom = useCallback((delta: number, animated = true) => {
    if (enableSmoothZoom && animated) {
      zoomRef.current.target = THREE.MathUtils.clamp(
        calculateDistance() + delta,
        minDistance,
        maxDistance
      );
    } else {
      const controls = controlsRef.current;
      if (!controls) return;

      const direction = camera.position.clone().sub(controls.target).normalize();
      const newDistance = THREE.MathUtils.clamp(
        calculateDistance() + delta,
        minDistance,
        maxDistance
      );
      camera.position.copy(controls.target.clone().add(direction.multiplyScalar(newDistance)));
      controls.update();
    }
    setCurrentPreset(null);
  }, [camera, calculateDistance, enableSmoothZoom, minDistance, maxDistance]);

  const reset = useCallback((animated = true) => {
    const endPosition = new THREE.Vector3(...initialPosition);
    const endTarget = new THREE.Vector3(...initialTarget);

    if (animated) {
      startAnimation(endPosition, endTarget, {
        duration: 800,
        easing: 'smooth',
        onComplete: () => setCurrentPreset(null),
      });
    } else {
      camera.position.copy(endPosition);
      if (controlsRef.current) {
        controlsRef.current.target.copy(endTarget);
        controlsRef.current.update();
      }
      setCurrentPreset(null);
    }
  }, [camera, startAnimation, initialPosition, initialTarget]);

  // ========================================================================
  // Expose Imperative API
  // ========================================================================

  useImperativeHandle(ref, () => ({
    setViewPreset,
    getCurrentPreset: () => currentPreset,
    focusOnPoint,
    focusOnBoundingBox,
    fitToView,
    setPosition,
    setTarget,
    orbit,
    zoom,
    reset,
    getPosition: () => camera.position.clone(),
    getTarget: () => controlsRef.current?.target.clone() ?? new THREE.Vector3(),
    getOrientation: getSphericalCoords,
    stopAnimation,
    isAnimating,
  }), [
    setViewPreset,
    currentPreset,
    focusOnPoint,
    focusOnBoundingBox,
    fitToView,
    setPosition,
    setTarget,
    orbit,
    zoom,
    reset,
    camera,
    getSphericalCoords,
    stopAnimation,
    isAnimating,
  ]);

  // ========================================================================
  // Animation Frame Loop
  // ========================================================================

  useFrame(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    // Handle camera animation
    if (animationRef.current?.active) {
      const { startTime, duration, easing, startPosition, endPosition, startTarget, endTarget, onComplete, onUpdate } = animationRef.current;

      const elapsed = performance.now() - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const easedProgress = getEasingValue(rawProgress, easing);

      camera.position.lerpVectors(startPosition, endPosition, easedProgress);
      controls.target.lerpVectors(startTarget, endTarget, easedProgress);
      controls.update();

      onUpdate?.(rawProgress);

      if (rawProgress >= 1) {
        animationRef.current.active = false;
        animationRef.current = null;
        onComplete?.();
      }
    }

    // Handle momentum
    if (enableMomentum && momentumRef.current.active) {
      const momentum = momentumRef.current;

      if (momentum.velocity.length() > 0.001) {
        // Apply velocity to camera rotation
        const spherical = new THREE.Spherical();
        spherical.setFromVector3(camera.position.clone().sub(controls.target));

        spherical.theta -= momentum.velocity.x * 0.01;
        spherical.phi += momentum.velocity.y * 0.01;
        spherical.phi = THREE.MathUtils.clamp(spherical.phi, minPolarAngle + 0.001, maxPolarAngle - 0.001);

        const newPosition = new THREE.Vector3().setFromSpherical(spherical).add(controls.target);
        camera.position.copy(newPosition);
        controls.update();

        // Apply friction
        momentum.velocity.multiplyScalar(momentumFriction);
      } else {
        momentum.active = false;
        momentum.velocity.set(0, 0);
      }
    }

    // Handle smooth zoom
    if (enableSmoothZoom) {
      const currentDistance = calculateDistance();
      const targetDistance = zoomRef.current.target || currentDistance;

      if (Math.abs(currentDistance - targetDistance) > 0.01) {
        const newDistance = THREE.MathUtils.lerp(currentDistance, targetDistance, zoomSmoothness);
        const direction = camera.position.clone().sub(controls.target).normalize();
        camera.position.copy(controls.target.clone().add(direction.multiplyScalar(newDistance)));
        controls.update();
      }
    }

    // Report camera changes
    onCameraChange?.(camera.position.clone(), controls.target.clone());
  });

  // ========================================================================
  // Double-click Handler
  // ========================================================================

  useEffect(() => {
    if (!enableDoubleClickFocus) return;

    const canvas = gl.domElement;

    const handleDoubleClick = (event: MouseEvent) => {
      // Update pointer for raycasting
      const rect = canvas.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
      const intersections = raycaster.intersectObjects(scene.children, true);

      if (intersections.length > 0) {
        const intersection = intersections[0];
        focusOnPoint(intersection.point, 2, true);
        onDoubleClick?.(intersections);
      }
    };

    canvas.addEventListener('dblclick', handleDoubleClick);
    return () => canvas.removeEventListener('dblclick', handleDoubleClick);
  }, [gl, camera, scene, raycaster, enableDoubleClickFocus, focusOnPoint, onDoubleClick]);

  // ========================================================================
  // Momentum Tracking
  // ========================================================================

  useEffect(() => {
    if (!enableMomentum) return;

    const canvas = gl.domElement;

    const handlePointerDown = (event: PointerEvent) => {
      momentumRef.current.active = false;
      momentumRef.current.lastPointerPosition.set(event.clientX, event.clientY);
      momentumRef.current.lastTime = performance.now();
      momentumRef.current.velocity.set(0, 0);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.buttons === 0) return;

      const now = performance.now();
      const dt = now - momentumRef.current.lastTime;

      if (dt > 0) {
        const dx = event.clientX - momentumRef.current.lastPointerPosition.x;
        const dy = event.clientY - momentumRef.current.lastPointerPosition.y;

        // Calculate velocity
        momentumRef.current.velocity.set(dx / dt * 16, dy / dt * 16);
        momentumRef.current.lastPointerPosition.set(event.clientX, event.clientY);
        momentumRef.current.lastTime = now;
      }
    };

    const handlePointerUp = () => {
      if (momentumRef.current.velocity.length() > 0.5) {
        momentumRef.current.active = true;
      }
    };

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerup', handlePointerUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerup', handlePointerUp);
    };
  }, [gl, enableMomentum]);

  // ========================================================================
  // Smooth Zoom Scroll Handler
  // ========================================================================

  useEffect(() => {
    if (!enableSmoothZoom) return;

    const canvas = gl.domElement;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      const delta = event.deltaY * 0.01;
      zoomRef.current.target = THREE.MathUtils.clamp(
        (zoomRef.current.target || calculateDistance()) + delta,
        minDistance,
        maxDistance
      );

      setCurrentPreset(null);
    };

    canvas.addEventListener('wheel', handleWheel, { passive: false });
    return () => canvas.removeEventListener('wheel', handleWheel);
  }, [gl, enableSmoothZoom, calculateDistance, minDistance, maxDistance]);

  // ========================================================================
  // Touch Gesture Handlers
  // ========================================================================

  useEffect(() => {
    if (!enableTouchGestures) return;

    const canvas = gl.domElement;

    const getTouchDistance = (touches: Touch[]): number => {
      if (touches.length < 2) return 0;
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const getTouchAngle = (touches: Touch[]): number => {
      if (touches.length < 2) return 0;
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.atan2(dy, dx);
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 2) {
        touchRef.current.initialDistance = getTouchDistance(Array.from(event.touches) as Touch[]);
        touchRef.current.initialAngle = getTouchAngle(Array.from(event.touches) as Touch[]);
        touchRef.current.lastTouches = Array.from(event.touches) as Touch[];
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      const controls = controlsRef.current;
      if (!controls || event.touches.length !== 2) return;

      const touches = Array.from(event.touches) as Touch[];
      const distance = getTouchDistance(touches);
      const angle = getTouchAngle(touches);

      // Pinch zoom
      if (touchRef.current.initialDistance > 0) {
        const zoomDelta = (touchRef.current.initialDistance - distance) * 0.01 * pinchZoomSpeed;
        zoomRef.current.target = THREE.MathUtils.clamp(
          (zoomRef.current.target || calculateDistance()) + zoomDelta,
          minDistance,
          maxDistance
        );
        touchRef.current.initialDistance = distance;
      }

      // Two-finger rotation
      const angleDelta = angle - touchRef.current.initialAngle;
      if (Math.abs(angleDelta) > 0.01) {
        const spherical = new THREE.Spherical();
        spherical.setFromVector3(camera.position.clone().sub(controls.target));
        spherical.theta += angleDelta * twoFingerRotateSpeed;

        const newPosition = new THREE.Vector3().setFromSpherical(spherical).add(controls.target);
        camera.position.copy(newPosition);
        controls.update();

        touchRef.current.initialAngle = angle;
      }

      touchRef.current.lastTouches = touches;
      setCurrentPreset(null);
    };

    const handleTouchEnd = () => {
      touchRef.current.initialDistance = 0;
      touchRef.current.initialAngle = 0;
      touchRef.current.lastTouches = [];
    };

    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [gl, camera, enableTouchGestures, pinchZoomSpeed, twoFingerRotateSpeed, calculateDistance, minDistance, maxDistance]);

  // ========================================================================
  // Auto-focus on Selection
  // ========================================================================

  useEffect(() => {
    if (!autoFocusOnSelect || !focusTarget) return;

    if (focusTarget.boundingBox) {
      focusOnBoundingBox(focusTarget.boundingBox, 1.5, true);
    } else if (focusTarget.position) {
      focusOnPoint(focusTarget.position, focusTarget.distance ?? 2, true);
    }
  }, [focusTarget, autoFocusOnSelect, focusOnPoint, focusOnBoundingBox]);

  // ========================================================================
  // Initialize zoom target
  // ========================================================================

  useEffect(() => {
    zoomRef.current.target = calculateDistance();
  }, [calculateDistance]);

  // ========================================================================
  // Render
  // ========================================================================

  return (
    <OrbitControls
      ref={controlsRef}
      enabled={enabled}
      enablePan={enablePan}
      enableZoom={!enableSmoothZoom && enableZoom}
      enableRotate={enableRotate}
      minDistance={minDistance}
      maxDistance={maxDistance}
      minPolarAngle={minPolarAngle}
      maxPolarAngle={maxPolarAngle}
      dampingFactor={0.1}
      enableDamping={true}
      zoomSpeed={0.5}
      rotateSpeed={0.5}
      panSpeed={0.5}
      target={initialTarget}
    />
  );
});

// ============================================================================
// Camera Orientation Compass Widget
// ============================================================================

export interface CameraOrientationWidgetProps {
  size?: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  showLabels?: boolean;
  onPresetClick?: (presetName: string) => void;
  className?: string;
}

export function CameraOrientationWidget({
  size = 100,
  position = 'bottom-right',
  showLabels = true,
  onPresetClick,
  className = '',
}: CameraOrientationWidgetProps) {
  const { camera } = useThree();
  const widgetRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Track camera orientation
  const [orientation, setOrientation] = useState({ azimuth: 0, polar: Math.PI / 2 });

  // Update orientation on each frame
  useFrame(() => {
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);

    const azimuth = Math.atan2(direction.x, direction.z);
    const polar = Math.acos(THREE.MathUtils.clamp(direction.y, -1, 1));

    setOrientation({ azimuth, polar });
  });

  // Draw the 3D compass
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - 15;

    // Clear canvas
    ctx.clearRect(0, 0, size, size);

    // Draw outer ring
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw inner circle (represents the viewing sphere)
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.7, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(30, 30, 50, 0.8)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Calculate camera direction indicator position
    const { azimuth, polar } = orientation;
    const indicatorX = centerX + Math.sin(azimuth) * Math.sin(polar) * radius * 0.6;
    const indicatorY = centerY - Math.cos(polar) * radius * 0.6;

    // Draw camera direction indicator
    ctx.beginPath();
    ctx.arc(indicatorX, indicatorY, 8, 0, Math.PI * 2);
    ctx.fillStyle = '#4CAF50';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw direction line from center to indicator
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(indicatorX, indicatorY);
    ctx.strokeStyle = 'rgba(76, 175, 80, 0.5)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw cardinal direction markers
    const directions = [
      { label: 'F', angle: 0, color: '#64B5F6' },
      { label: 'R', angle: Math.PI / 2, color: '#FFB74D' },
      { label: 'B', angle: Math.PI, color: '#E57373' },
      { label: 'L', angle: -Math.PI / 2, color: '#81C784' },
    ];

    if (showLabels) {
      ctx.font = 'bold 11px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      directions.forEach(({ label, angle, color }) => {
        const x = centerX + Math.sin(angle) * (radius + 8);
        const y = centerY - Math.cos(angle) * (radius + 8);

        ctx.fillStyle = color;
        ctx.fillText(label, x, y);
      });
    }

    // Draw top/bottom indicators
    if (showLabels) {
      const topOpacity = Math.max(0, Math.cos(polar));
      const bottomOpacity = Math.max(0, -Math.cos(polar));

      if (topOpacity > 0.1) {
        ctx.fillStyle = `rgba(255, 255, 255, ${topOpacity})`;
        ctx.fillText('T', centerX, centerY - 5);
      }

      if (bottomOpacity > 0.1) {
        ctx.fillStyle = `rgba(255, 255, 255, ${bottomOpacity})`;
        ctx.fillText('B', centerX, centerY + 5);
      }
    }
  }, [orientation, size, showLabels]);

  // Position styles
  const positionStyles: React.CSSProperties = {
    position: 'absolute',
    zIndex: 100,
    ...(position === 'top-left' && { top: 10, left: 10 }),
    ...(position === 'top-right' && { top: 10, right: 10 }),
    ...(position === 'bottom-left' && { bottom: 10, left: 10 }),
    ...(position === 'bottom-right' && { bottom: 10, right: 10 }),
  };

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!onPresetClick) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const angle = Math.atan2(x, -y);
    const distance = Math.sqrt(x * x + y * y);
    const radius = size / 2 - 15;

    // Check if click is in the label area
    if (distance > radius * 0.8) {
      // Determine which direction was clicked
      const normalizedAngle = ((angle + Math.PI * 2) % (Math.PI * 2));

      if (normalizedAngle < Math.PI / 4 || normalizedAngle >= Math.PI * 7 / 4) {
        onPresetClick('front');
      } else if (normalizedAngle < Math.PI * 3 / 4) {
        onPresetClick('right');
      } else if (normalizedAngle < Math.PI * 5 / 4) {
        onPresetClick('back');
      } else {
        onPresetClick('left');
      }
    } else if (distance < radius * 0.3) {
      // Center area - could be top/bottom based on current polar angle
      if (orientation.polar < Math.PI / 4) {
        onPresetClick('bottom'); // Looking from top, click to go bottom
      } else if (orientation.polar > Math.PI * 3 / 4) {
        onPresetClick('top'); // Looking from bottom, click to go top
      } else {
        onPresetClick('top'); // Default to top
      }
    }
  };

  return (
    <div
      ref={widgetRef}
      className={`camera-orientation-widget ${className}`}
      style={{
        ...positionStyles,
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)',
        cursor: onPresetClick ? 'pointer' : 'default',
      }}
    >
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        style={{ width: size, height: size }}
        onClick={handleClick}
      />
    </div>
  );
}

// ============================================================================
// Camera Preset Buttons Component
// ============================================================================

export interface CameraPresetButtonsProps {
  controlsRef: React.RefObject<EnhancedCameraControlsRef>;
  currentPreset?: string | null;
  layout?: 'horizontal' | 'vertical' | 'grid';
  showLabels?: boolean;
  className?: string;
}

export function CameraPresetButtons({
  controlsRef,
  currentPreset,
  layout = 'horizontal',
  showLabels = true,
  className = '',
}: CameraPresetButtonsProps) {
  const presets = ['front', 'back', 'left', 'right', 'top', 'bottom'];

  const handlePresetClick = (presetName: string) => {
    controlsRef.current?.setViewPreset(presetName, true);
  };

  const layoutStyles: React.CSSProperties = {
    display: 'flex',
    gap: '4px',
    ...(layout === 'vertical' && { flexDirection: 'column' }),
    ...(layout === 'grid' && { flexWrap: 'wrap', maxWidth: '120px' }),
  };

  return (
    <div className={`camera-preset-buttons ${className}`} style={layoutStyles}>
      {presets.map((preset) => {
        const presetData = CAMERA_PRESETS[preset];
        const isActive = currentPreset === preset;

        return (
          <button
            key={preset}
            onClick={() => handlePresetClick(preset)}
            className={`camera-preset-button ${isActive ? 'active' : ''}`}
            title={presetData?.description}
            style={{
              padding: showLabels ? '6px 12px' : '6px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: isActive ? 'rgba(76, 175, 80, 0.8)' : 'rgba(255, 255, 255, 0.1)',
              color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: isActive ? 'bold' : 'normal',
              transition: 'all 0.2s ease',
              minWidth: layout === 'grid' ? '50px' : 'auto',
            }}
          >
            {showLabels ? presetData?.label || preset : preset[0].toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

// ============================================================================
// Hook for using Enhanced Camera Controls
// ============================================================================

export function useEnhancedCameraControls() {
  const controlsRef = useRef<EnhancedCameraControlsRef>(null);

  const setViewPreset = useCallback((presetName: string, animated = true) => {
    controlsRef.current?.setViewPreset(presetName, animated);
  }, []);

  const focusOnPoint = useCallback((point: THREE.Vector3, distance?: number, animated = true) => {
    controlsRef.current?.focusOnPoint(point, distance, animated);
  }, []);

  const focusOnBoundingBox = useCallback((box: THREE.Box3, padding?: number, animated = true) => {
    controlsRef.current?.focusOnBoundingBox(box, padding, animated);
  }, []);

  const fitToView = useCallback((object: THREE.Object3D, padding?: number) => {
    controlsRef.current?.fitToView(object, padding);
  }, []);

  const reset = useCallback((animated = true) => {
    controlsRef.current?.reset(animated);
  }, []);

  const getOrientation = useCallback(() => {
    return controlsRef.current?.getOrientation() ?? { azimuth: 0, polar: Math.PI / 2, distance: 4 };
  }, []);

  return {
    controlsRef,
    setViewPreset,
    focusOnPoint,
    focusOnBoundingBox,
    fitToView,
    reset,
    getOrientation,
  };
}

export default EnhancedCameraControls;
