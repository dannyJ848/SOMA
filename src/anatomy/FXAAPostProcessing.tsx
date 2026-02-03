/**
 * FXAA Post-Processing Effect
 *
 * Provides FXAA (Fast Approximate Anti-Aliasing) as a post-processing effect
 * for the 3D anatomy viewer. FXAA is more performant than MSAA and provides
 * good visual quality for anatomical structures.
 *
 * Optimized for iPhone 14+ at 60fps with DPR 1.5-2.0
 */

import { useEffect, useMemo, useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ============================================
// FXAA Shader
// ============================================

// FXAA 3.11 implementation (console quality preset)
// Simplified for mobile performance while maintaining good edge detection
const FXAAShader = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    resolution: { value: new THREE.Vector2(1, 1) },
  },

  vertexShader: /* glsl */ `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragmentShader: /* glsl */ `
    precision mediump float;

    uniform sampler2D tDiffuse;
    uniform vec2 resolution;

    varying vec2 vUv;

    // FXAA quality settings optimized for mobile
    #define FXAA_REDUCE_MIN   (1.0 / 128.0)
    #define FXAA_REDUCE_MUL   (1.0 / 8.0)
    #define FXAA_SPAN_MAX     8.0

    void main() {
      vec2 inverseVP = 1.0 / resolution;

      // Sample the center pixel and its neighbors
      vec3 rgbNW = texture2D(tDiffuse, vUv + vec2(-1.0, -1.0) * inverseVP).xyz;
      vec3 rgbNE = texture2D(tDiffuse, vUv + vec2( 1.0, -1.0) * inverseVP).xyz;
      vec3 rgbSW = texture2D(tDiffuse, vUv + vec2(-1.0,  1.0) * inverseVP).xyz;
      vec3 rgbSE = texture2D(tDiffuse, vUv + vec2( 1.0,  1.0) * inverseVP).xyz;
      vec3 rgbM  = texture2D(tDiffuse, vUv).xyz;

      // Calculate luminance for edge detection
      vec3 luma = vec3(0.299, 0.587, 0.114);
      float lumaNW = dot(rgbNW, luma);
      float lumaNE = dot(rgbNE, luma);
      float lumaSW = dot(rgbSW, luma);
      float lumaSE = dot(rgbSE, luma);
      float lumaM  = dot(rgbM, luma);

      // Find min and max luminance in neighborhood
      float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
      float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

      // Calculate edge direction
      vec2 dir;
      dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
      dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

      // Calculate reduction factor
      float dirReduce = max(
        (lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL),
        FXAA_REDUCE_MIN
      );

      float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
      dir = min(
        vec2(FXAA_SPAN_MAX),
        max(vec2(-FXAA_SPAN_MAX), dir * rcpDirMin)
      ) * inverseVP;

      // Sample along the detected edge
      vec3 rgbA = 0.5 * (
        texture2D(tDiffuse, vUv + dir * (1.0 / 3.0 - 0.5)).xyz +
        texture2D(tDiffuse, vUv + dir * (2.0 / 3.0 - 0.5)).xyz
      );

      vec3 rgbB = rgbA * 0.5 + 0.25 * (
        texture2D(tDiffuse, vUv + dir * -0.5).xyz +
        texture2D(tDiffuse, vUv + dir *  0.5).xyz
      );

      float lumaB = dot(rgbB, luma);

      // Choose final color based on edge contrast
      if ((lumaB < lumaMin) || (lumaB > lumaMax)) {
        gl_FragColor = vec4(rgbA, 1.0);
      } else {
        gl_FragColor = vec4(rgbB, 1.0);
      }
    }
  `,
};

// ============================================
// Effect Composer (Simplified)
// ============================================

interface RenderPass {
  render: (renderer: THREE.WebGLRenderer, writeBuffer: THREE.WebGLRenderTarget | null) => void;
  dispose: () => void;
}

class SimpleEffectComposer {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.Camera;
  private renderTarget1: THREE.WebGLRenderTarget;
  private renderTarget2: THREE.WebGLRenderTarget;
  private passes: RenderPass[] = [];
  private quadScene: THREE.Scene;
  private quadCamera: THREE.OrthographicCamera;
  private quadMesh: THREE.Mesh;
  private fxaaMaterial: THREE.ShaderMaterial;

  constructor(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.Camera,
    width: number,
    height: number
  ) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;

    // Create render targets with same parameters
    const rtParams: THREE.RenderTargetOptions = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
    };

    this.renderTarget1 = new THREE.WebGLRenderTarget(width, height, rtParams);
    this.renderTarget2 = new THREE.WebGLRenderTarget(width, height, rtParams);

    // Create fullscreen quad for post-processing
    this.quadCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.quadScene = new THREE.Scene();

    const quadGeometry = new THREE.PlaneGeometry(2, 2);
    this.fxaaMaterial = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(FXAAShader.uniforms),
      vertexShader: FXAAShader.vertexShader,
      fragmentShader: FXAAShader.fragmentShader,
      depthTest: false,
      depthWrite: false,
    });

    this.quadMesh = new THREE.Mesh(quadGeometry, this.fxaaMaterial);
    this.quadScene.add(this.quadMesh);

    // Set initial resolution
    this.setSize(width, height);
  }

  setSize(width: number, height: number): void {
    this.renderTarget1.setSize(width, height);
    this.renderTarget2.setSize(width, height);
    this.fxaaMaterial.uniforms.resolution.value.set(width, height);
  }

  render(): void {
    // First pass: render scene to render target
    this.renderer.setRenderTarget(this.renderTarget1);
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);

    // Second pass: apply FXAA and render to screen
    this.fxaaMaterial.uniforms.tDiffuse.value = this.renderTarget1.texture;
    this.renderer.setRenderTarget(null);
    this.renderer.clear();
    this.renderer.render(this.quadScene, this.quadCamera);
  }

  dispose(): void {
    this.renderTarget1.dispose();
    this.renderTarget2.dispose();
    this.fxaaMaterial.dispose();
    this.quadMesh.geometry.dispose();
  }
}

// ============================================
// FXAA Effect Component
// ============================================

interface FXAAEffectProps {
  enabled?: boolean;
}

/**
 * FXAA post-processing effect for react-three-fiber
 *
 * Usage:
 * ```tsx
 * <Canvas>
 *   <FXAAEffect enabled={true} />
 *   {// ... your scene content ...}
 * </Canvas>
 * ```
 */
export function FXAAEffect({ enabled = true }: FXAAEffectProps) {
  const { gl, scene, camera, size } = useThree();
  const composerRef = useRef<SimpleEffectComposer | null>(null);

  // Create composer
  useEffect(() => {
    if (!enabled) {
      if (composerRef.current) {
        composerRef.current.dispose();
        composerRef.current = null;
      }
      return;
    }

    // Calculate actual pixel dimensions
    const pixelRatio = gl.getPixelRatio();
    const width = Math.floor(size.width * pixelRatio);
    const height = Math.floor(size.height * pixelRatio);

    composerRef.current = new SimpleEffectComposer(gl, scene, camera, width, height);

    return () => {
      if (composerRef.current) {
        composerRef.current.dispose();
        composerRef.current = null;
      }
    };
  }, [enabled, gl, scene, camera]);

  // Update size when it changes
  useEffect(() => {
    if (!composerRef.current) return;

    const pixelRatio = gl.getPixelRatio();
    const width = Math.floor(size.width * pixelRatio);
    const height = Math.floor(size.height * pixelRatio);

    composerRef.current.setSize(width, height);
  }, [size, gl]);

  // Override the default render loop when FXAA is enabled
  useFrame(() => {
    if (enabled && composerRef.current) {
      composerRef.current.render();
    }
  }, 1); // Priority 1 to run after scene updates

  return null;
}

// ============================================
// Quality-Aware FXAA Component
// ============================================

interface AdaptiveFXAAProps {
  qualityPreset?: 'performance' | 'balanced' | 'quality';
  forceEnabled?: boolean;
}

/**
 * Quality-aware FXAA that automatically enables/disables based on device capability
 *
 * Note: On iOS, FXAA post-processing can interfere with initial WebGL context
 * creation. The effect delays enabling for a few frames to ensure the scene
 * renders first.
 */
export function AdaptiveFXAA({ qualityPreset = 'balanced', forceEnabled }: AdaptiveFXAAProps) {
  const [delayedEnabled, setDelayedEnabled] = useState(false);

  const enabled = useMemo(() => {
    if (forceEnabled !== undefined) return forceEnabled;
    // Enable FXAA for balanced and quality presets
    return qualityPreset !== 'performance';
  }, [qualityPreset, forceEnabled]);

  // Delay enabling FXAA to allow initial scene render (iOS fix)
  useEffect(() => {
    if (!enabled) {
      setDelayedEnabled(false);
      return;
    }

    // Wait for a few frames before enabling post-processing
    // This ensures the base WebGL context renders first
    const timeoutId = setTimeout(() => {
      setDelayedEnabled(true);
    }, 100); // 100ms delay, ~6 frames at 60fps

    return () => clearTimeout(timeoutId);
  }, [enabled]);

  // Don't render anything until ready (iOS needs clean initial render)
  if (!delayedEnabled) return null;

  return <FXAAEffect enabled={true} />;
}

export default FXAAEffect;
