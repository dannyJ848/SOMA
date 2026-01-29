/**
 * Condition Material Library
 *
 * A comprehensive library of Three.js materials and custom GLSL shaders for
 * visualizing medical conditions on anatomical structures. Each material is
 * designed to accurately represent the visual characteristics of different
 * disease states while supporting:
 *
 * - Severity parameter (0-1) affecting intensity
 * - Animation time uniform for dynamic effects
 * - Blend mode for mixing with healthy tissue
 * - Opacity/fade for transitions
 *
 * Materials included:
 * - InflammationMaterial: Red-orange subsurface scattering, pulsing glow
 * - FibrosisMaterial: Gray-white with rough texture, reduced translucency
 * - TumorMaterial: Irregular surface, vascularization patterns
 * - AtherosclerosisMaterial: Yellow-white plaques with fatty appearance
 * - EdemaMaterial: Bluish tint, increased translucency, soft edges
 * - InfectionMaterial: Mottled texture with spots/clusters
 * - DegenerationMaterial: Faded, worn appearance with cracks
 * - NecrosisMaterial: Dark, dead tissue appearance
 * - HemorrhageMaterial: Blood-red pooling effect
 *
 * Optimized for iPhone 14+ GPU capabilities at 60fps.
 */

import * as THREE from 'three';

// ============================================
// Types & Interfaces
// ============================================

/**
 * Available condition material types
 */
export type ConditionType =
  | 'inflammation'
  | 'fibrosis'
  | 'tumor'
  | 'atherosclerosis'
  | 'edema'
  | 'infection'
  | 'degeneration'
  | 'necrosis'
  | 'hemorrhage';

/**
 * Blend modes for mixing condition materials with healthy tissue
 */
export type ConditionBlendMode =
  | 'replace'    // Completely replaces healthy tissue appearance
  | 'overlay'    // Blends on top of healthy tissue
  | 'multiply'   // Darkening blend
  | 'screen'     // Lightening blend
  | 'additive';  // Adds color/light to healthy tissue

/**
 * Options for creating condition materials
 */
export interface ConditionMaterialOptions {
  /** Severity level from 0 (minimal) to 1 (severe) */
  severity?: number;
  /** Initial animation time */
  animationTime?: number;
  /** Blend mode for mixing with healthy tissue */
  blendMode?: ConditionBlendMode;
  /** Base opacity (0-1) */
  opacity?: number;
  /** Enable transparency for fade effects */
  transparent?: boolean;
  /** Whether material should be double-sided */
  doubleSided?: boolean;
  /** Custom color override */
  colorOverride?: string;
  /** Animation speed multiplier */
  animationSpeed?: number;
}

/**
 * Uniforms available in condition shader materials
 */
export interface ConditionUniforms {
  uTime: THREE.IUniform<number>;
  uSeverity: THREE.IUniform<number>;
  uOpacity: THREE.IUniform<number>;
  uBlendFactor: THREE.IUniform<number>;
  uBaseColor: THREE.IUniform<THREE.Color>;
  uConditionColor: THREE.IUniform<THREE.Color>;
  uSecondaryColor: THREE.IUniform<THREE.Color>;
  uAnimationSpeed: THREE.IUniform<number>;
  // Allow additional uniforms via index signature
  [key: string]: THREE.IUniform<unknown>;
}

/**
 * Extended shader material with condition-specific uniforms
 */
export interface ConditionShaderMaterial extends THREE.ShaderMaterial {
  uniforms: ConditionUniforms & Record<string, THREE.IUniform>;
}

// ============================================
// GLSL Shader Code - Common Utilities
// ============================================

/**
 * Common GLSL utilities shared across all condition shaders
 */
const COMMON_GLSL = `
// Noise functions for procedural effects
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);

  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p, int octaves) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;

  for (int i = 0; i < 6; i++) {
    if (i >= octaves) break;
    value += amplitude * noise(p * frequency);
    frequency *= 2.0;
    amplitude *= 0.5;
  }

  return value;
}

// Smooth pulse function
float pulse(float time, float frequency, float phase) {
  return 0.5 + 0.5 * sin(time * frequency + phase);
}

// Subsurface scattering approximation
vec3 subsurfaceScatter(vec3 lightDir, vec3 viewDir, vec3 normal, vec3 color, float thickness) {
  vec3 scatterDir = normalize(lightDir + normal * 0.5);
  float scatter = pow(clamp(dot(viewDir, -scatterDir), 0.0, 1.0), 2.0) * thickness;
  return color * scatter;
}
`;

// ============================================
// Vertex Shader - Standard
// ============================================

const STANDARD_VERTEX_SHADER = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying vec3 vViewPosition;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vPosition = position;

  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPosition = -mvPosition.xyz;

  gl_Position = projectionMatrix * mvPosition;
}
`;

// ============================================
// Inflammation Material
// Red-orange subsurface scattering with pulsing glow
// ============================================

const INFLAMMATION_FRAGMENT_SHADER = `
${COMMON_GLSL}

uniform float uTime;
uniform float uSeverity;
uniform float uOpacity;
uniform float uBlendFactor;
uniform vec3 uBaseColor;
uniform vec3 uConditionColor;
uniform vec3 uSecondaryColor;
uniform float uAnimationSpeed;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying vec3 vViewPosition;

void main() {
  // Base inflammation color (red-orange)
  vec3 inflammationColor = uConditionColor;

  // Pulsing glow effect based on severity
  float pulseRate = 2.0 + uSeverity * 3.0; // Faster pulse at higher severity
  float glowPulse = pulse(uTime * uAnimationSpeed, pulseRate, 0.0);
  float glowIntensity = 0.3 + uSeverity * 0.5 * glowPulse;

  // Subsurface scattering simulation
  vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
  vec3 viewDir = normalize(vViewPosition);
  float sssThickness = 0.3 + uSeverity * 0.4;
  vec3 sss = subsurfaceScatter(lightDir, viewDir, vNormal, uSecondaryColor, sssThickness);

  // Heat wave distortion effect
  float heatWave = fbm(vUv * 10.0 + uTime * uAnimationSpeed * 0.5, 3);
  float heatIntensity = heatWave * uSeverity * 0.2;

  // Combine effects
  vec3 finalColor = inflammationColor;
  finalColor += sss * uSeverity;
  finalColor += vec3(1.0, 0.5, 0.2) * glowIntensity;
  finalColor += vec3(1.0, 0.3, 0.1) * heatIntensity;

  // Blend with base tissue color
  finalColor = mix(uBaseColor, finalColor, uBlendFactor * uSeverity);

  // Fresnel rim effect for swelling appearance
  float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 3.0);
  finalColor += vec3(1.0, 0.4, 0.2) * fresnel * uSeverity * 0.5;

  gl_FragColor = vec4(finalColor, uOpacity);
}
`;

// ============================================
// Fibrosis Material
// Gray-white with rough texture, reduced translucency
// ============================================

const FIBROSIS_FRAGMENT_SHADER = `
${COMMON_GLSL}

uniform float uTime;
uniform float uSeverity;
uniform float uOpacity;
uniform float uBlendFactor;
uniform vec3 uBaseColor;
uniform vec3 uConditionColor;
uniform vec3 uSecondaryColor;
uniform float uAnimationSpeed;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying vec3 vViewPosition;

void main() {
  // Fibrotic tissue color (gray-white)
  vec3 fibrosisColor = uConditionColor;

  // Rough, fibrous texture
  float fibrousNoise = fbm(vUv * 20.0 + vPosition.xy * 5.0, 4);
  float streaks = abs(sin(vUv.x * 50.0 + fibrousNoise * 10.0)) * 0.3;

  // Scarring pattern
  float scarPattern = fbm(vUv * 15.0, 3);
  scarPattern = smoothstep(0.4, 0.6, scarPattern);

  // Reduced translucency (more opaque with severity)
  float opacity = uOpacity + uSeverity * 0.3;

  // Color variation for collagen deposits
  vec3 collagenColor = mix(fibrosisColor, uSecondaryColor, scarPattern * uSeverity);

  // Add fibrous streaks
  collagenColor += vec3(0.1) * streaks * uSeverity;

  // Surface roughness effect
  float roughness = fibrousNoise * 0.2 * uSeverity;
  collagenColor *= (1.0 - roughness);

  // Blend with healthy tissue
  vec3 finalColor = mix(uBaseColor, collagenColor, uBlendFactor * uSeverity);

  // Subtle animation for progression visualization
  float progression = sin(uTime * uAnimationSpeed * 0.5) * 0.02;
  finalColor += vec3(progression) * uSeverity;

  gl_FragColor = vec4(finalColor, min(opacity, 1.0));
}
`;

// ============================================
// Tumor Material
// Irregular surface with vascularization patterns
// ============================================

const TUMOR_VERTEX_SHADER = `
${COMMON_GLSL}

uniform float uTime;
uniform float uSeverity;
uniform float uAnimationSpeed;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying vec3 vViewPosition;

void main() {
  vUv = uv;
  vPosition = position;

  // Irregular surface displacement for tumor growth
  float displacement = fbm(position.xy * 3.0 + uTime * uAnimationSpeed * 0.1, 4);
  displacement = displacement * uSeverity * 0.15;

  // Add nodular bumps
  float nodules = sin(position.x * 10.0) * sin(position.y * 10.0) * sin(position.z * 10.0);
  displacement += nodules * uSeverity * 0.05;

  vec3 displacedPosition = position + normal * displacement;

  vNormal = normalize(normalMatrix * normal);

  vec4 worldPos = modelMatrix * vec4(displacedPosition, 1.0);
  vWorldPosition = worldPos.xyz;

  vec4 mvPosition = modelViewMatrix * vec4(displacedPosition, 1.0);
  vViewPosition = -mvPosition.xyz;

  gl_Position = projectionMatrix * mvPosition;
}
`;

const TUMOR_FRAGMENT_SHADER = `
${COMMON_GLSL}

uniform float uTime;
uniform float uSeverity;
uniform float uOpacity;
uniform float uBlendFactor;
uniform vec3 uBaseColor;
uniform vec3 uConditionColor;
uniform vec3 uSecondaryColor;
uniform float uAnimationSpeed;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying vec3 vViewPosition;

void main() {
  // Tumor base color
  vec3 tumorColor = uConditionColor;

  // Vascularization pattern (blood vessel network)
  float vascularNoise = fbm(vUv * 30.0 + vPosition.xy * 10.0, 5);
  float vessels = smoothstep(0.45, 0.55, vascularNoise);
  vec3 vesselColor = uSecondaryColor; // Dark red for blood vessels

  // Necrotic center regions (in larger tumors)
  float centerDist = length(vUv - 0.5);
  float necroticRegion = smoothstep(0.1, 0.3, centerDist) * uSeverity;
  necroticRegion = 1.0 - necroticRegion * 0.3;

  // Irregular surface coloration
  float surfaceVariation = fbm(vUv * 15.0, 3);
  vec3 variationColor = mix(tumorColor, tumorColor * 0.7, surfaceVariation);

  // Combine effects
  vec3 finalColor = variationColor;
  finalColor = mix(finalColor, vesselColor, vessels * uSeverity * 0.6);
  finalColor *= necroticRegion;

  // Pulsing growth animation
  float growthPulse = pulse(uTime * uAnimationSpeed, 1.0, 0.0);
  float growthIntensity = 0.05 * growthPulse * uSeverity;
  finalColor += vec3(0.2, 0.05, 0.05) * growthIntensity;

  // Blend with healthy tissue
  finalColor = mix(uBaseColor, finalColor, uBlendFactor * uSeverity);

  // Subsurface scattering for fleshy appearance
  vec3 viewDir = normalize(vViewPosition);
  vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
  vec3 sss = subsurfaceScatter(lightDir, viewDir, vNormal, vec3(0.8, 0.2, 0.2), 0.3 * uSeverity);
  finalColor += sss;

  gl_FragColor = vec4(finalColor, uOpacity);
}
`;

// ============================================
// Atherosclerosis Material
// Yellow-white plaques with fatty appearance
// ============================================

const ATHEROSCLEROSIS_FRAGMENT_SHADER = `
${COMMON_GLSL}

uniform float uTime;
uniform float uSeverity;
uniform float uOpacity;
uniform float uBlendFactor;
uniform vec3 uBaseColor;
uniform vec3 uConditionColor;
uniform vec3 uSecondaryColor;
uniform float uAnimationSpeed;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying vec3 vViewPosition;

void main() {
  // Plaque base color (yellow-white)
  vec3 plaqueColor = uConditionColor;

  // Fatty deposit patterns
  float fattyNoise = fbm(vUv * 12.0 + vPosition.xy * 3.0, 4);
  float fattyDeposits = smoothstep(0.3, 0.7, fattyNoise);

  // Calcification spots (whiter, harder areas)
  float calcNoise = fbm(vUv * 25.0, 3);
  float calcification = smoothstep(0.6, 0.8, calcNoise) * uSeverity;
  vec3 calcColor = vec3(0.95, 0.95, 0.9); // Near white

  // Lipid core (yellow, greasy appearance)
  vec3 lipidColor = uSecondaryColor;
  float lipidCore = smoothstep(0.4, 0.6, fattyNoise) * uSeverity;

  // Waxy, fatty texture
  float waxySheen = pow(max(dot(vNormal, normalize(vViewPosition)), 0.0), 8.0);

  // Combine effects
  vec3 finalColor = plaqueColor;
  finalColor = mix(finalColor, lipidColor, lipidCore * 0.5);
  finalColor = mix(finalColor, calcColor, calcification * 0.4);
  finalColor += vec3(0.3, 0.25, 0.1) * waxySheen * uSeverity * 0.3;

  // Irregular plaque surface
  float surfaceRoughness = fattyNoise * 0.15 * uSeverity;
  finalColor *= (1.0 - surfaceRoughness);

  // Blend with healthy vessel wall
  finalColor = mix(uBaseColor, finalColor, uBlendFactor * uSeverity);

  // Subtle animation for blood flow interaction
  float flowPulse = pulse(uTime * uAnimationSpeed, 1.2, vUv.y * 3.14159);
  finalColor += vec3(0.05, 0.02, 0.0) * flowPulse * uSeverity * 0.3;

  gl_FragColor = vec4(finalColor, uOpacity);
}
`;

// ============================================
// Edema Material
// Bluish tint, increased translucency, soft edges
// ============================================

const EDEMA_FRAGMENT_SHADER = `
${COMMON_GLSL}

uniform float uTime;
uniform float uSeverity;
uniform float uOpacity;
uniform float uBlendFactor;
uniform vec3 uBaseColor;
uniform vec3 uConditionColor;
uniform vec3 uSecondaryColor;
uniform float uAnimationSpeed;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying vec3 vViewPosition;

void main() {
  // Edema color (pale bluish)
  vec3 edemaColor = uConditionColor;

  // Fluid accumulation pattern
  float fluidNoise = fbm(vUv * 8.0 + uTime * uAnimationSpeed * 0.2, 3);
  float fluidAccumulation = smoothstep(0.3, 0.7, fluidNoise);

  // Soft, waterlogged appearance
  float waterlogged = 0.5 + 0.5 * sin(vUv.x * 5.0 + vUv.y * 5.0 + uTime * uAnimationSpeed * 0.5);

  // Increased translucency based on severity
  float translucency = 0.3 + uSeverity * 0.4;

  // Subsurface fluid effect
  vec3 viewDir = normalize(vViewPosition);
  vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
  float sss = pow(max(dot(viewDir, lightDir), 0.0), 4.0) * translucency;
  vec3 fluidScatter = uSecondaryColor * sss;

  // Soft edge fresnel (swelling appearance)
  float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 2.0);
  vec3 swellingEdge = edemaColor * fresnel * uSeverity * 0.5;

  // Combine effects
  vec3 finalColor = edemaColor;
  finalColor = mix(finalColor, uSecondaryColor, fluidAccumulation * uSeverity * 0.4);
  finalColor += fluidScatter * uSeverity;
  finalColor += swellingEdge;

  // Gentle pulsing (tissue distension)
  float distension = pulse(uTime * uAnimationSpeed, 0.5, 0.0);
  finalColor += vec3(0.05, 0.08, 0.1) * distension * uSeverity * 0.3;

  // Blend with healthy tissue
  finalColor = mix(uBaseColor, finalColor, uBlendFactor * uSeverity);

  // Increased opacity for swollen appearance, but still somewhat translucent
  float finalOpacity = uOpacity - uSeverity * 0.1;

  gl_FragColor = vec4(finalColor, max(finalOpacity, 0.3));
}
`;

// ============================================
// Infection Material
// Mottled texture with spots/clusters
// ============================================

const INFECTION_FRAGMENT_SHADER = `
${COMMON_GLSL}

uniform float uTime;
uniform float uSeverity;
uniform float uOpacity;
uniform float uBlendFactor;
uniform vec3 uBaseColor;
uniform vec3 uConditionColor;
uniform vec3 uSecondaryColor;
uniform float uAnimationSpeed;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying vec3 vViewPosition;

void main() {
  // Infected tissue base color
  vec3 infectionColor = uConditionColor;

  // Mottled pattern (bacterial/viral colonies)
  float mottledNoise = fbm(vUv * 25.0 + vPosition.xy * 8.0, 4);
  float mottling = smoothstep(0.35, 0.65, mottledNoise);

  // Infection spots/clusters
  float spotNoise = fbm(vUv * 40.0, 3);
  float spots = smoothstep(0.65, 0.75, spotNoise);
  vec3 spotColor = uSecondaryColor; // Pus/discharge color

  // Spreading pattern animation
  float spreadWave = sin(length(vUv - 0.5) * 20.0 - uTime * uAnimationSpeed * 2.0);
  float spreading = smoothstep(-0.5, 0.5, spreadWave) * uSeverity * 0.2;

  // Inflammation halo around infection sites
  float haloIntensity = spots * (1.0 - smoothstep(0.0, 0.1, abs(spotNoise - 0.7)));
  vec3 inflammationHalo = vec3(1.0, 0.3, 0.2) * haloIntensity * uSeverity;

  // Tissue degradation
  float degradation = mottledNoise * uSeverity * 0.2;

  // Combine effects
  vec3 finalColor = infectionColor;
  finalColor = mix(finalColor, finalColor * 0.7, mottling * uSeverity * 0.5);
  finalColor = mix(finalColor, spotColor, spots * uSeverity * 0.6);
  finalColor += inflammationHalo;
  finalColor += vec3(0.2, 0.1, 0.05) * spreading;
  finalColor *= (1.0 - degradation);

  // Blend with healthy tissue
  finalColor = mix(uBaseColor, finalColor, uBlendFactor * uSeverity);

  // Fever glow effect
  float feverPulse = pulse(uTime * uAnimationSpeed, 3.0, 0.0);
  finalColor += vec3(0.1, 0.02, 0.0) * feverPulse * uSeverity * 0.3;

  gl_FragColor = vec4(finalColor, uOpacity);
}
`;

// ============================================
// Degeneration Material
// Faded, worn appearance with cracks
// ============================================

const DEGENERATION_FRAGMENT_SHADER = `
${COMMON_GLSL}

uniform float uTime;
uniform float uSeverity;
uniform float uOpacity;
uniform float uBlendFactor;
uniform vec3 uBaseColor;
uniform vec3 uConditionColor;
uniform vec3 uSecondaryColor;
uniform float uAnimationSpeed;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying vec3 vViewPosition;

void main() {
  // Degenerated tissue color (faded, washed out)
  vec3 degenerationColor = uConditionColor;

  // Crack pattern
  float crackNoise = fbm(vUv * 30.0 + vPosition.xy * 5.0, 5);
  float cracks = smoothstep(0.48, 0.52, crackNoise);
  cracks = pow(cracks, 0.5); // Sharpen cracks

  // Worn, weathered texture
  float wornNoise = fbm(vUv * 15.0, 4);
  float wornTexture = wornNoise * uSeverity * 0.3;

  // Color fading (loss of tissue vitality)
  float fadeFactor = 0.3 + (1.0 - uSeverity) * 0.7;
  vec3 fadedColor = mix(vec3(0.5), degenerationColor, fadeFactor);

  // Erosion pattern
  float erosion = fbm(vUv * 20.0, 3);
  erosion = smoothstep(0.4, 0.6, erosion) * uSeverity;

  // Combine effects
  vec3 finalColor = fadedColor;
  finalColor *= (1.0 - wornTexture);
  finalColor = mix(finalColor, uSecondaryColor, cracks * uSeverity * 0.7);
  finalColor *= (1.0 - erosion * 0.3);

  // Subtle deterioration animation
  float deterioration = sin(uTime * uAnimationSpeed * 0.2 + vUv.x * 10.0) * 0.02;
  finalColor += vec3(deterioration) * uSeverity;

  // Blend with healthy tissue
  finalColor = mix(uBaseColor, finalColor, uBlendFactor * uSeverity);

  // Dull, lifeless appearance (reduced specular)
  vec3 viewDir = normalize(vViewPosition);
  float dullness = 1.0 - pow(max(dot(vNormal, viewDir), 0.0), 8.0) * (1.0 - uSeverity * 0.5);
  finalColor *= dullness;

  gl_FragColor = vec4(finalColor, uOpacity);
}
`;

// ============================================
// Necrosis Material
// Dark, dead tissue appearance
// ============================================

const NECROSIS_FRAGMENT_SHADER = `
${COMMON_GLSL}

uniform float uTime;
uniform float uSeverity;
uniform float uOpacity;
uniform float uBlendFactor;
uniform vec3 uBaseColor;
uniform vec3 uConditionColor;
uniform vec3 uSecondaryColor;
uniform float uAnimationSpeed;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying vec3 vViewPosition;

void main() {
  // Necrotic tissue color (dark, dead)
  vec3 necrosisColor = uConditionColor;

  // Dead tissue pattern (irregular, mottled darkness)
  float deadNoise = fbm(vUv * 20.0 + vPosition.xy * 8.0, 5);
  float deadPattern = smoothstep(0.3, 0.7, deadNoise);

  // Gangrenous discoloration
  vec3 gangrenousColor = uSecondaryColor;
  float gangrene = smoothstep(0.5, 0.8, deadNoise) * uSeverity;

  // Tissue liquefaction in severe cases
  float liquefaction = fbm(vUv * 35.0, 4);
  liquefaction = smoothstep(0.6, 0.8, liquefaction) * uSeverity * 0.5;

  // Sharp demarcation line (boundary of necrosis)
  float boundary = smoothstep(0.45, 0.55, deadNoise);
  vec3 demarcationColor = vec3(0.3, 0.1, 0.1);

  // Complete loss of normal tissue appearance
  float vitality = 1.0 - uSeverity * 0.8;

  // Combine effects
  vec3 finalColor = necrosisColor;
  finalColor = mix(finalColor, gangrenousColor, gangrene);
  finalColor *= (1.0 - deadPattern * uSeverity * 0.4);
  finalColor = mix(finalColor, demarcationColor, boundary * uSeverity * 0.3);
  finalColor = mix(finalColor, vec3(0.1), liquefaction);

  // Blend with healthy tissue
  finalColor = mix(uBaseColor, finalColor, uBlendFactor * uSeverity);

  // No animation - dead tissue is static
  // But add subtle darkening over time for progression
  float progression = clamp(uTime * uAnimationSpeed * 0.01, 0.0, 0.2);
  finalColor *= (1.0 - progression * uSeverity);

  // Completely matte appearance (no specular)
  finalColor *= vitality + (1.0 - vitality) * 0.3;

  gl_FragColor = vec4(finalColor, uOpacity);
}
`;

// ============================================
// Hemorrhage Material
// Blood-red pooling effect
// ============================================

const HEMORRHAGE_FRAGMENT_SHADER = `
${COMMON_GLSL}

uniform float uTime;
uniform float uSeverity;
uniform float uOpacity;
uniform float uBlendFactor;
uniform vec3 uBaseColor;
uniform vec3 uConditionColor;
uniform vec3 uSecondaryColor;
uniform float uAnimationSpeed;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying vec3 vViewPosition;

void main() {
  // Fresh blood color
  vec3 bloodColor = uConditionColor;

  // Blood pooling pattern
  float poolNoise = fbm(vUv * 10.0 + uTime * uAnimationSpeed * 0.1, 4);
  float pooling = smoothstep(0.3, 0.6, poolNoise);

  // Spreading blood effect
  float spreadDist = length(vUv - 0.5);
  float spreading = 1.0 - smoothstep(0.0, 0.3 + uSeverity * 0.3, spreadDist);
  spreading *= (1.0 + sin(uTime * uAnimationSpeed * 2.0) * 0.1);

  // Coagulation (darker, clotted areas)
  float coagNoise = fbm(vUv * 25.0, 3);
  float coagulation = smoothstep(0.6, 0.8, coagNoise) * uSeverity;
  vec3 clotColor = uSecondaryColor; // Darker, clotted blood

  // Fresh blood sheen (wet appearance)
  vec3 viewDir = normalize(vViewPosition);
  float wetSheen = pow(max(dot(vNormal, viewDir), 0.0), 16.0);
  vec3 sheenColor = vec3(1.0, 0.3, 0.3) * wetSheen * 0.5;

  // Subsurface for blood depth
  vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
  vec3 sss = subsurfaceScatter(lightDir, viewDir, vNormal, vec3(0.8, 0.0, 0.0), 0.4 * uSeverity);

  // Combine effects
  vec3 finalColor = bloodColor;
  finalColor = mix(finalColor, bloodColor * 0.7, pooling * uSeverity * 0.5);
  finalColor = mix(finalColor, clotColor, coagulation * 0.6);
  finalColor *= spreading * uSeverity + (1.0 - uSeverity);
  finalColor += sheenColor * uSeverity;
  finalColor += sss;

  // Blend with healthy tissue
  finalColor = mix(uBaseColor, finalColor, uBlendFactor * uSeverity);

  // Pulsing for active bleeding
  float bleedPulse = pulse(uTime * uAnimationSpeed, 1.5, 0.0);
  finalColor += vec3(0.15, 0.0, 0.0) * bleedPulse * uSeverity * 0.4;

  gl_FragColor = vec4(finalColor, uOpacity);
}
`;

// ============================================
// Condition Color Palettes
// ============================================

interface ConditionColorPalette {
  baseColor: string;
  conditionColor: string;
  secondaryColor: string;
}

const CONDITION_COLORS: Record<ConditionType, ConditionColorPalette> = {
  inflammation: {
    baseColor: '#cc8080',
    conditionColor: '#ff4422',
    secondaryColor: '#ff8844',
  },
  fibrosis: {
    baseColor: '#aa9999',
    conditionColor: '#c8c0b8',
    secondaryColor: '#e8e0d8',
  },
  tumor: {
    baseColor: '#bb6666',
    conditionColor: '#996666',
    secondaryColor: '#661111',
  },
  atherosclerosis: {
    baseColor: '#cc6666',
    conditionColor: '#f5e6b5',
    secondaryColor: '#e8d090',
  },
  edema: {
    baseColor: '#aa8888',
    conditionColor: '#aabbcc',
    secondaryColor: '#88aacc',
  },
  infection: {
    baseColor: '#cc8888',
    conditionColor: '#bb7744',
    secondaryColor: '#ddcc88',
  },
  degeneration: {
    baseColor: '#aa8888',
    conditionColor: '#998877',
    secondaryColor: '#554433',
  },
  necrosis: {
    baseColor: '#887777',
    conditionColor: '#332222',
    secondaryColor: '#1a1a1a',
  },
  hemorrhage: {
    baseColor: '#cc6666',
    conditionColor: '#cc0000',
    secondaryColor: '#660000',
  },
};

// ============================================
// Material Factory Functions
// ============================================

/**
 * Create uniforms for condition shader materials
 */
function createConditionUniforms(
  type: ConditionType,
  options: ConditionMaterialOptions = {}
): ConditionUniforms {
  const colors = CONDITION_COLORS[type];
  const {
    severity = 0.5,
    animationTime = 0,
    opacity = 1.0,
    colorOverride,
    animationSpeed = 1.0,
  } = options;

  // Calculate blend factor based on blend mode
  let blendFactor = 1.0;
  switch (options.blendMode) {
    case 'overlay':
      blendFactor = 0.7;
      break;
    case 'multiply':
      blendFactor = 0.8;
      break;
    case 'screen':
      blendFactor = 0.6;
      break;
    case 'additive':
      blendFactor = 0.5;
      break;
    case 'replace':
    default:
      blendFactor = 1.0;
  }

  return {
    uTime: { value: animationTime },
    uSeverity: { value: severity },
    uOpacity: { value: opacity },
    uBlendFactor: { value: blendFactor },
    uBaseColor: { value: new THREE.Color(colors.baseColor) },
    uConditionColor: { value: new THREE.Color(colorOverride || colors.conditionColor) },
    uSecondaryColor: { value: new THREE.Color(colors.secondaryColor) },
    uAnimationSpeed: { value: animationSpeed },
  };
}

/**
 * Get the appropriate vertex shader for a condition type
 */
function getVertexShader(type: ConditionType): string {
  switch (type) {
    case 'tumor':
      return TUMOR_VERTEX_SHADER;
    default:
      return STANDARD_VERTEX_SHADER;
  }
}

/**
 * Get the appropriate fragment shader for a condition type
 */
function getFragmentShader(type: ConditionType): string {
  switch (type) {
    case 'inflammation':
      return INFLAMMATION_FRAGMENT_SHADER;
    case 'fibrosis':
      return FIBROSIS_FRAGMENT_SHADER;
    case 'tumor':
      return TUMOR_FRAGMENT_SHADER;
    case 'atherosclerosis':
      return ATHEROSCLEROSIS_FRAGMENT_SHADER;
    case 'edema':
      return EDEMA_FRAGMENT_SHADER;
    case 'infection':
      return INFECTION_FRAGMENT_SHADER;
    case 'degeneration':
      return DEGENERATION_FRAGMENT_SHADER;
    case 'necrosis':
      return NECROSIS_FRAGMENT_SHADER;
    case 'hemorrhage':
      return HEMORRHAGE_FRAGMENT_SHADER;
    default:
      return INFLAMMATION_FRAGMENT_SHADER;
  }
}

/**
 * Create a condition shader material
 */
export function createConditionShaderMaterial(
  type: ConditionType,
  options: ConditionMaterialOptions = {}
): ConditionShaderMaterial {
  const {
    transparent = true,
    doubleSided = false,
  } = options;

  const uniforms = createConditionUniforms(type, options);

  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: getVertexShader(type),
    fragmentShader: getFragmentShader(type),
    transparent,
    side: doubleSided ? THREE.DoubleSide : THREE.FrontSide,
    depthWrite: !transparent,
    blending: options.blendMode === 'additive' ? THREE.AdditiveBlending : THREE.NormalBlending,
  }) as ConditionShaderMaterial;

  return material;
}

/**
 * Create a condition material using MeshPhysicalMaterial (simpler, no custom shaders)
 * Good for lower-end devices or when custom shaders are not needed
 */
export function createConditionPhysicalMaterial(
  type: ConditionType,
  options: ConditionMaterialOptions = {}
): THREE.MeshPhysicalMaterial {
  const colors = CONDITION_COLORS[type];
  const {
    severity = 0.5,
    opacity = 1.0,
    transparent = true,
    doubleSided = false,
    colorOverride,
  } = options;

  const conditionColor = new THREE.Color(colorOverride || colors.conditionColor);
  const baseColor = new THREE.Color(colors.baseColor);

  // Blend colors based on severity
  const finalColor = baseColor.clone().lerp(conditionColor, severity);

  // Condition-specific material properties
  const materialProps: THREE.MeshPhysicalMaterialParameters = {
    color: finalColor,
    transparent,
    opacity,
    side: doubleSided ? THREE.DoubleSide : THREE.FrontSide,
  };

  switch (type) {
    case 'inflammation':
      materialProps.roughness = 0.4 - severity * 0.1;
      materialProps.metalness = 0;
      materialProps.emissive = new THREE.Color('#ff2200');
      materialProps.emissiveIntensity = severity * 0.3;
      materialProps.clearcoat = 0.3 * severity;
      materialProps.clearcoatRoughness = 0.2;
      materialProps.transmission = 0.1 * severity;
      materialProps.thickness = 0.5;
      break;

    case 'fibrosis':
      materialProps.roughness = 0.6 + severity * 0.3;
      materialProps.metalness = 0;
      materialProps.transmission = 0;
      materialProps.clearcoat = 0;
      break;

    case 'tumor':
      materialProps.roughness = 0.5;
      materialProps.metalness = 0;
      materialProps.transmission = 0.05 * severity;
      materialProps.thickness = 0.8;
      materialProps.clearcoat = 0.2;
      materialProps.clearcoatRoughness = 0.4;
      break;

    case 'atherosclerosis':
      materialProps.roughness = 0.3;
      materialProps.metalness = 0.05;
      materialProps.sheen = 0.3 * severity;
      materialProps.sheenRoughness = 0.3;
      materialProps.sheenColor = new THREE.Color('#ffee88');
      break;

    case 'edema':
      materialProps.roughness = 0.3;
      materialProps.metalness = 0;
      materialProps.transmission = 0.2 + severity * 0.3;
      materialProps.thickness = 1.0;
      materialProps.ior = 1.33;
      break;

    case 'infection':
      materialProps.roughness = 0.5;
      materialProps.metalness = 0;
      materialProps.emissive = new THREE.Color('#ff4400');
      materialProps.emissiveIntensity = severity * 0.15;
      materialProps.clearcoat = 0.1;
      break;

    case 'degeneration':
      materialProps.roughness = 0.7 + severity * 0.2;
      materialProps.metalness = 0;
      materialProps.clearcoat = 0;
      break;

    case 'necrosis':
      materialProps.roughness = 0.8;
      materialProps.metalness = 0;
      materialProps.emissive = new THREE.Color('#000000');
      materialProps.emissiveIntensity = 0;
      break;

    case 'hemorrhage':
      materialProps.roughness = 0.2;
      materialProps.metalness = 0;
      materialProps.clearcoat = 0.5 * severity;
      materialProps.clearcoatRoughness = 0.1;
      materialProps.transmission = 0.1 * severity;
      materialProps.thickness = 0.3;
      materialProps.attenuationColor = new THREE.Color('#880000');
      materialProps.attenuationDistance = 0.5;
      break;
  }

  return new THREE.MeshPhysicalMaterial(materialProps);
}

/**
 * Main factory function for creating condition materials
 * Automatically chooses between shader and physical material based on options
 */
export function createConditionMaterial(
  type: ConditionType,
  severity: number = 0.5,
  options: Omit<ConditionMaterialOptions, 'severity'> = {}
): THREE.Material {
  const fullOptions: ConditionMaterialOptions = {
    ...options,
    severity,
  };

  // Use shader material by default for full effect
  // Set usePhysicalMaterial in options to use simpler material
  if ((options as Record<string, unknown>).usePhysicalMaterial) {
    return createConditionPhysicalMaterial(type, fullOptions);
  }

  return createConditionShaderMaterial(type, fullOptions);
}

// ============================================
// Individual Material Factory Functions
// ============================================

/**
 * Create an inflammation material with red-orange subsurface scattering and pulsing glow
 */
export function createInflammationMaterial(
  severity: number = 0.5,
  options: Omit<ConditionMaterialOptions, 'severity'> = {}
): THREE.Material {
  return createConditionMaterial('inflammation', severity, options);
}

/**
 * Create a fibrosis material with gray-white rough texture and reduced translucency
 */
export function createFibrosisMaterial(
  severity: number = 0.5,
  options: Omit<ConditionMaterialOptions, 'severity'> = {}
): THREE.Material {
  return createConditionMaterial('fibrosis', severity, options);
}

/**
 * Create a tumor material with irregular surface and vascularization patterns
 */
export function createTumorMaterial(
  severity: number = 0.5,
  options: Omit<ConditionMaterialOptions, 'severity'> = {}
): THREE.Material {
  return createConditionMaterial('tumor', severity, options);
}

/**
 * Create an atherosclerosis material with yellow-white plaques and fatty appearance
 */
export function createAtherosclerosisMaterial(
  severity: number = 0.5,
  options: Omit<ConditionMaterialOptions, 'severity'> = {}
): THREE.Material {
  return createConditionMaterial('atherosclerosis', severity, options);
}

/**
 * Create an edema material with bluish tint, increased translucency, and soft edges
 */
export function createEdemaMaterial(
  severity: number = 0.5,
  options: Omit<ConditionMaterialOptions, 'severity'> = {}
): THREE.Material {
  return createConditionMaterial('edema', severity, options);
}

/**
 * Create an infection material with mottled texture and spots/clusters
 */
export function createInfectionMaterial(
  severity: number = 0.5,
  options: Omit<ConditionMaterialOptions, 'severity'> = {}
): THREE.Material {
  return createConditionMaterial('infection', severity, options);
}

/**
 * Create a degeneration material with faded, worn appearance and cracks
 */
export function createDegenerationMaterial(
  severity: number = 0.5,
  options: Omit<ConditionMaterialOptions, 'severity'> = {}
): THREE.Material {
  return createConditionMaterial('degeneration', severity, options);
}

/**
 * Create a necrosis material with dark, dead tissue appearance
 */
export function createNecrosisMaterial(
  severity: number = 0.5,
  options: Omit<ConditionMaterialOptions, 'severity'> = {}
): THREE.Material {
  return createConditionMaterial('necrosis', severity, options);
}

/**
 * Create a hemorrhage material with blood-red pooling effect
 */
export function createHemorrhageMaterial(
  severity: number = 0.5,
  options: Omit<ConditionMaterialOptions, 'severity'> = {}
): THREE.Material {
  return createConditionMaterial('hemorrhage', severity, options);
}

// ============================================
// Utility Functions
// ============================================

/**
 * Update the animation time uniform for a condition material
 */
export function updateConditionMaterialTime(
  material: THREE.Material,
  time: number
): void {
  if (material instanceof THREE.ShaderMaterial && material.uniforms.uTime) {
    material.uniforms.uTime.value = time;
  }
}

/**
 * Update the severity uniform for a condition material
 */
export function updateConditionMaterialSeverity(
  material: THREE.Material,
  severity: number
): void {
  if (material instanceof THREE.ShaderMaterial && material.uniforms.uSeverity) {
    material.uniforms.uSeverity.value = Math.max(0, Math.min(1, severity));
  } else if (material instanceof THREE.MeshPhysicalMaterial) {
    // For physical materials, adjust emissive intensity based on severity
    material.emissiveIntensity = severity * 0.3;
  }
}

/**
 * Update the opacity uniform for a condition material
 */
export function updateConditionMaterialOpacity(
  material: THREE.Material,
  opacity: number
): void {
  if (material instanceof THREE.ShaderMaterial && material.uniforms.uOpacity) {
    material.uniforms.uOpacity.value = Math.max(0, Math.min(1, opacity));
  } else {
    material.opacity = Math.max(0, Math.min(1, opacity));
  }
}

/**
 * Get all available condition types
 */
export function getConditionTypes(): ConditionType[] {
  return [
    'inflammation',
    'fibrosis',
    'tumor',
    'atherosclerosis',
    'edema',
    'infection',
    'degeneration',
    'necrosis',
    'hemorrhage',
  ];
}

/**
 * Get the color palette for a condition type
 */
export function getConditionColorPalette(type: ConditionType): ConditionColorPalette {
  return CONDITION_COLORS[type];
}

/**
 * Dispose of a condition material and free GPU resources
 */
export function disposeConditionMaterial(material: THREE.Material): void {
  material.dispose();
}

// ============================================
// Material Cache for Performance
// ============================================

const conditionMaterialCache = new Map<string, THREE.Material>();

/**
 * Get a cached condition material or create a new one
 */
export function getCachedConditionMaterial(
  type: ConditionType,
  severity: number,
  options: Omit<ConditionMaterialOptions, 'severity'> = {}
): THREE.Material {
  const cacheKey = `${type}-${severity.toFixed(2)}-${JSON.stringify(options)}`;

  if (conditionMaterialCache.has(cacheKey)) {
    return conditionMaterialCache.get(cacheKey)!;
  }

  const material = createConditionMaterial(type, severity, options);
  conditionMaterialCache.set(cacheKey, material);
  return material;
}

/**
 * Clear the condition material cache
 */
export function clearConditionMaterialCache(): void {
  conditionMaterialCache.forEach((material) => material.dispose());
  conditionMaterialCache.clear();
}

/**
 * Get condition material cache statistics
 */
export function getConditionMaterialCacheStats(): { size: number; keys: string[] } {
  return {
    size: conditionMaterialCache.size,
    keys: Array.from(conditionMaterialCache.keys()),
  };
}

// ============================================
// Exports
// ============================================

export {
  CONDITION_COLORS,
  COMMON_GLSL,
  STANDARD_VERTEX_SHADER,
  INFLAMMATION_FRAGMENT_SHADER,
  FIBROSIS_FRAGMENT_SHADER,
  TUMOR_VERTEX_SHADER,
  TUMOR_FRAGMENT_SHADER,
  ATHEROSCLEROSIS_FRAGMENT_SHADER,
  EDEMA_FRAGMENT_SHADER,
  INFECTION_FRAGMENT_SHADER,
  DEGENERATION_FRAGMENT_SHADER,
  NECROSIS_FRAGMENT_SHADER,
  HEMORRHAGE_FRAGMENT_SHADER,
};

export default createConditionMaterial;
