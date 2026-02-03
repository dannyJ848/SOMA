/**
 * Enhanced Camera Controls
 *
 * Provides advanced camera controls for anatomy exploration including:
 * - Smooth animated transitions between views
 * - Focus on specific structures
 * - Preset anatomical views
 * - Zoom-to-fit functionality
 * - Touch gesture support
 */

import { useRef, useEffect, useCallback } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export interface ViewPreset {
  name: string;
  position: [number, number, number];
  target: [number, number, number];
  description?: string;
}

export const ANATOMICAL_VIEW_PRESETS: Record<string, ViewPreset> = {
  // Standard anatomical views
  anterior: {
    name: "Anterior (Front)",
    position: [0, 0.5, 4],
    target: [0, 0.2, 0],
    description: "Front view of the body",
  },
  posterior: {
    name: "Posterior (Back)",
    position: [0, 0.5, -4],
    target: [0, 0.2, 0],
    description: "Back view of the body",
  },
  leftLateral: {
    name: "Left Lateral",
    position: [-4, 0.5, 0],
    target: [0, 0.2, 0],
    description: "Left side view",
  },
  rightLateral: {
    name: "Right Lateral",
    position: [4, 0.5, 0],
    target: [0, 0.2, 0],
    description: "Right side view",
  },
  superior: {
    name: "Superior (Top)",
    position: [0, 5, 0.01],
    target: [0, 0.2, 0],
    description: "Top-down view",
  },
  inferior: {
    name: "Inferior (Bottom)",
    position: [0, -3, 0.01],
    target: [0, 0.2, 0],
    description: "Bottom-up view",
  },
  
  // Regional focus views
  headFocus: {
    name: "Head Focus",
    position: [0, 1.5, 2],
    target: [0, 1.3, 0],
    description: "Close-up of head region",
  },
  thoraxFocus: {
    name: "Thorax Focus",
    position: [0, 0.6, 2.5],
    target: [0, 0.5, 0],
    description: "Close-up of chest region",
  },
  abdomenFocus: {
    name: "Abdomen Focus",
    position: [0, 0, 2.5],
    target: [0, 0, 0],
    description: "Close-up of abdominal region",
  },
  pelvisFocus: {
    name: "Pelvis Focus",
    position: [0, -0.5, 2.5],
    target: [0, -0.4, 0],
    description: "Close-up of pelvic region",
  },
  
  // System-specific views
  cardiovascularView: {
    name: "Cardiovascular",
    position: [1.5, 0.6, 2.5],
    target: [-0.1, 0.5, 0],
    description: "Focus on heart and major vessels",
  },
  respiratoryView: {
    name: "Respiratory",
    position: [0, 0.7, 2.5],
    target: [0, 0.5, 0],
    description: "Focus on lungs and airways",
  },
  digestiveView: {
    name: "Digestive",
    position: [1.5, 0, 2.5],
    target: [0, 0, 0],
    description: "Focus on digestive organs",
  },
  nervousView: {
    name: "Nervous",
    position: [0, 2, 3],
    target: [0, 1.3, 0],
    description: "Focus on brain and spinal cord",
  },
  
  // Surgical/clinical views
  surgicalAnterior: {
    name: "Surgical Anterior",
    position: [0, 0.3, 2.5],
    target: [0, 0.2, 0],
    description: "Surgical front view with lighting",
  },
  surgicalLateral: {
    name: "Surgical Lateral",
    position: [2.5, 0.3, 0],
    target: [0, 0.2, 0],
    description: "Surgical side view",
  },
};

export type AnimationMode = "smooth" | "bounce" | "elastic" | "linear";

interface CameraControlsProps {
  controlsRef?: React.RefObject<any>;
  preset?: keyof typeof ANATOMICAL_VIEW_PRESETS;
  onTransitionComplete?: () => void;
  animationMode?: AnimationMode;
  animationDuration?: number;
}

/**
 * Enhanced camera controller with smooth transitions
 */
export function EnhancedCameraControls({
  controlsRef,
  preset,
  onTransitionComplete,
  animationMode = "smooth",
  animationDuration = 800,
}: CameraControlsProps) {
  const { camera } = useThree();
  const animationRef = useRef<{
    startTime: number;
    startPos: THREE.Vector3;
    endPos: THREE.Vector3;
    startTarget: THREE.Vector3;
    endTarget: THREE.Vector3;
    duration: number;
  } | null>(null);

  // Animate to a preset view
  const animateToPreset = useCallback((
    presetKey: keyof typeof ANATOMICAL_VIEW_PRESETS,
    duration = animationDuration
  ) => {
    const view = ANATOMICAL_VIEW_PRESETS[presetKey];
    if (!view) return;

    const controls = controlsRef?.current;
    if (!controls) return;

    const startPos = camera.position.clone();
    const endPos = new THREE.Vector3(...view.position);
    const startTarget = controls.target.clone();
    const endTarget = new THREE.Vector3(...view.target);

    animationRef.current = {
      startTime: performance.now(),
      startPos,
      endPos,
      startTarget,
      endTarget,
      duration,
    };
  }, [camera, controlsRef, animationDuration]);

  // Focus on a specific structure
  const focusOnStructure = useCallback((
    position: [number, number, number],
    distance = 2,
    duration = animationDuration
  ) => {
    const controls = controlsRef?.current;
    if (!controls) return;

    const targetPos = new THREE.Vector3(...position);
    const currentPos = camera.position.clone();
    
    // Calculate new camera position looking at the target
    const direction = currentPos.clone().sub(controls.target).normalize();
    const newPos = targetPos.clone().add(direction.multiplyScalar(distance));

    animationRef.current = {
      startTime: performance.now(),
      startPos: currentPos,
      endPos: newPos,
      startTarget: controls.target.clone(),
      endTarget: targetPos,
      duration,
    };
  }, [camera, controlsRef, animationDuration]);

  // Zoom to fit a bounding box
  const zoomToFit = useCallback((
    boundingBox: THREE.Box3,
    padding = 1.2,
    duration = animationDuration
  ) => {
    const controls = controlsRef?.current;
    if (!controls) return;

    const center = new THREE.Vector3();
    boundingBox.getCenter(center);
    
    const size = new THREE.Vector3();
    boundingBox.getSize(size);
    
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = (camera as THREE.PerspectiveCamera).fov || 45;
    const distance = (maxDim * padding) / (2 * Math.tan((fov * Math.PI) / 180 / 2));

    const direction = camera.position.clone().sub(controls.target).normalize();
    const newPos = center.clone().add(direction.multiplyScalar(distance));

    animationRef.current = {
      startTime: performance.now(),
      startPos: camera.position.clone(),
      endPos: newPos,
      startTarget: controls.target.clone(),
      endTarget: center,
      duration,
    };
  }, [camera, controlsRef, animationDuration]);

  // Easing functions
  const easeSmooth = (t: number): number => {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  };

  const easeBounce = (t: number): number => {
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
  };

  const easeElastic = (t: number): number => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * c4);
  };

  const easeLinear = (t: number): number => t;

  // Get easing function based on mode
  const getEasing = useCallback((t: number): number => {
    switch (animationMode) {
      case "bounce": return easeBounce(t);
      case "elastic": return easeElastic(t);
      case "linear": return easeLinear(t);
      default: return easeSmooth(t);
    }
  }, [animationMode]);

  // Animation frame loop
  useFrame(() => {
    if (!animationRef.current) return;

    const elapsed = performance.now() - animationRef.current.startTime;
    const progress = Math.min(elapsed / animationRef.current.duration, 1);
    const eased = getEasing(progress);

    camera.position.lerpVectors(
      animationRef.current.startPos,
      animationRef.current.endPos,
      eased
    );

    if (controlsRef?.current) {
      controlsRef.current.target.lerpVectors(
        animationRef.current.startTarget,
        animationRef.current.endTarget,
        eased
      );
      controlsRef.current.update();
    }

    if (progress >= 1) {
      animationRef.current = null;
      onTransitionComplete?.();
    }
  });

  // Animate to preset if provided
  useEffect(() => {
    if (preset) {
      animateToPreset(preset);
    }
  }, [preset, animateToPreset]);

  return null;
}

/**
 * Hook for camera control
 */
export function useCameraControls() {
  const { camera } = useThree();

  const resetCamera = useCallback(() => {
    camera.position.set(0, 0.5, 4);
    camera.lookAt(0, 0.2, 0);
  }, [camera]);

  const setView = useCallback((
    position: [number, number, number],
    target: [number, number, number]
  ) => {
    camera.position.set(...position);
    camera.lookAt(...target);
  }, [camera]);

  const zoomIn = useCallback((amount = 0.5) => {
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    camera.position.add(direction.multiplyScalar(amount));
  }, [camera]);

  const zoomOut = useCallback((amount = 0.5) => {
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    camera.position.sub(direction.multiplyScalar(amount));
  }, [camera]);

  const pan = useCallback((x: number, y: number) => {
    const right = new THREE.Vector3();
    const up = new THREE.Vector3();
    camera.matrix.extractBasis(right, up, new THREE.Vector3());
    camera.position.add(right.multiplyScalar(x));
    camera.position.add(up.multiplyScalar(y));
  }, [camera]);

  return {
    resetCamera,
    setView,
    zoomIn,
    zoomOut,
    pan,
  };
}

export default EnhancedCameraControls;
