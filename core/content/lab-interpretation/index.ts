/**
 * Lab Interpretation Content Module
 *
 * Comprehensive educational content for laboratory value interpretation
 * including reference ranges, critical values, and clinical significance.
 *
 * Content organized by lab panel:
 * - Complete Blood Count (CBC)
 * - Basic Metabolic Panel (BMP)
 * - Comprehensive Metabolic Panel (CMP)
 * - Lipid Panel
 * - Thyroid Function Tests
 * - Cardiac Markers
 * - Urinalysis
 * - Coagulation Studies
 * - Inflammatory Markers
 * - Arterial Blood Gas (ABG)
 */

// Types
export * from './types';

// Individual lab panels
export * from './cbc';
export * from './bmp';
export * from './cmp';
export * from './lipid-panel';
export * from './thyroid-function';
export * from './cardiac-markers';
export * from './urinalysis';
export * from './coagulation';
export * from './inflammatory-markers';
export * from './abg';

// Panel collections
export { CBC_PANEL } from './cbc';
export { BMP_PANEL } from './bmp';
export { CMP_PANEL } from './cmp';
export { LIPID_PANEL } from './lipid-panel';
export { THYROID_PANEL } from './thyroid-function';
export { CARDIAC_MARKER_PANEL } from './cardiac-markers';
export { URINALYSIS_PANEL } from './urinalysis';
export { COAGULATION_PANEL } from './coagulation';
export { INFLAMMATORY_MARKER_PANEL } from './inflammatory-markers';
export { ABG_PANEL } from './abg';
