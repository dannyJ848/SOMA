/**
 * Visible Human Project Cross-Sections Type Definitions
 *
 * Types for integrating VHP cryosection imagery with 3D model
 * correlation, supporting axial, sagittal, and coronal planes.
 */

import type { LearningBodySystem } from '../learning-progress/types';

/**
 * Anatomical plane orientation
 */
export type AnatomicalPlane = 'axial' | 'sagittal' | 'coronal';

/**
 * Dataset subject (male or female)
 */
export type VHPSubject = 'male' | 'female';

/**
 * Image resolution tier
 */
export type ImageResolution = 'thumbnail' | 'preview' | 'standard' | 'high' | 'full';

/**
 * Visible Human Project dataset metadata
 */
export interface VHPDataset {
  datasetId: string;
  subject: VHPSubject;
  plane: AnatomicalPlane;
  totalSlices: number;
  sliceThickness: number;
  pixelSpacing: [number, number];
  imageWidth: number;
  imageHeight: number;
  bodyRegionStart: string;
  bodyRegionEnd: string;
  fileFormat: string;
  totalSizeBytes: number;
  license: string;
  source: string;
}

/**
 * Individual cross-section slice
 */
export interface VHPSlice {
  sliceId: string;
  datasetId: string;
  subject: VHPSubject;
  plane: AnatomicalPlane;
  sliceNumber: number;
  positionMm: number;
  anatomicalLevel: string;
  imageUrls: SliceImageUrls;
  structures: SliceStructure[];
  landmarks: SliceLandmark[];
  notes?: string;
}

/**
 * Image URLs for different resolutions
 */
export interface SliceImageUrls {
  thumbnail: string;
  preview: string;
  standard: string;
  high?: string;
  full?: string;
}

/**
 * Structure visible in a slice
 */
export interface SliceStructure {
  structureId: string;
  structureName: string;
  system: LearningBodySystem;
  boundingBox: BoundingBox2D;
  centerPoint: Point2D;
  visibility: 'full' | 'partial' | 'edge';
  labelPosition: Point2D;
}

/**
 * 2D bounding box
 */
export interface BoundingBox2D {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * 2D point
 */
export interface Point2D {
  x: number;
  y: number;
}

/**
 * Anatomical landmark in a slice
 */
export interface SliceLandmark {
  landmarkId: string;
  name: string;
  position: Point2D;
  description: string;
  clinicalRelevance?: string;
}

/**
 * Clipping plane for 3D model correlation
 */
export interface ClippingPlane {
  plane: AnatomicalPlane;
  positionMm: number;
  normalVector: [number, number, number];
  enabled: boolean;
}

/**
 * Slice viewer state
 */
export interface SliceViewerState {
  currentDatasetId: string;
  currentSubject: VHPSubject;
  currentPlane: AnatomicalPlane;
  currentSliceNumber: number;
  resolution: ImageResolution;
  showLabels: boolean;
  showLandmarks: boolean;
  highlightedStructures: string[];
  zoomLevel: number;
  panOffset: Point2D;
  brightness: number;
  contrast: number;
}

/**
 * 3D model correlation state
 */
export interface ModelCorrelationState {
  syncEnabled: boolean;
  clippingPlane: ClippingPlane;
  highlightCorrespondingStructure: boolean;
  showSlicePlaneIn3D: boolean;
  sliceOpacity: number;
}

/**
 * Structure label overlay
 */
export interface StructureLabelOverlay {
  structureId: string;
  structureName: string;
  position: Point2D;
  anchorPoint: Point2D;
  isVisible: boolean;
  color: string;
  fontSize: number;
}

/**
 * Slice navigation
 */
export interface SliceNavigation {
  canGoNext: boolean;
  canGoPrevious: boolean;
  firstSlice: number;
  lastSlice: number;
  sliceStep: number;
}

/**
 * Visible Human state
 */
export interface VisibleHumanState {
  datasets: Map<string, VHPDataset>;
  slices: Map<string, VHPSlice>;
  viewerState: SliceViewerState;
  correlationState: ModelCorrelationState;
  loadedResolutions: Map<string, ImageResolution>;
  isLoading: boolean;
  error: string | null;
  isLoaded: boolean;
}
