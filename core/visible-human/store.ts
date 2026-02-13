/**
 * Visible Human Project Cross-Sections Store
 *
 * In-memory data store for VHP cryosection imagery,
 * slice navigation, and 3D model correlation.
 */

import type {
  AnatomicalPlane,
  VHPSubject,
  VHPDataset,
  VHPSlice,
  SliceViewerState,
  ModelCorrelationState,
  SliceNavigation,
  VisibleHumanState,
} from './types';

/**
 * VHP dataset metadata
 * Note: Actual image files would be downloaded separately (~15GB)
 */
export const vhpDatasets: VHPDataset[] = [
  {
    datasetId: 'vhp-male-axial',
    subject: 'male',
    plane: 'axial',
    totalSlices: 1871,
    sliceThickness: 1.0,
    pixelSpacing: [0.33, 0.33],
    imageWidth: 2048,
    imageHeight: 1216,
    bodyRegionStart: 'Vertex of skull',
    bodyRegionEnd: 'Soles of feet',
    fileFormat: 'png',
    totalSizeBytes: 5_000_000_000,
    license: 'Public Domain (NLM/NIH)',
    source: 'https://www.nlm.nih.gov/research/visible/visible_human.html',
  },
  {
    datasetId: 'vhp-male-sagittal',
    subject: 'male',
    plane: 'sagittal',
    totalSlices: 592,
    sliceThickness: 1.0,
    pixelSpacing: [1.0, 1.0],
    imageWidth: 1871,
    imageHeight: 1216,
    bodyRegionStart: 'Right side',
    bodyRegionEnd: 'Left side',
    fileFormat: 'png',
    totalSizeBytes: 2_000_000_000,
    license: 'Public Domain (NLM/NIH)',
    source: 'https://www.nlm.nih.gov/research/visible/visible_human.html',
  },
  {
    datasetId: 'vhp-male-coronal',
    subject: 'male',
    plane: 'coronal',
    totalSlices: 372,
    sliceThickness: 1.0,
    pixelSpacing: [1.0, 1.0],
    imageWidth: 1871,
    imageHeight: 592,
    bodyRegionStart: 'Anterior surface',
    bodyRegionEnd: 'Posterior surface',
    fileFormat: 'png',
    totalSizeBytes: 1_500_000_000,
    license: 'Public Domain (NLM/NIH)',
    source: 'https://www.nlm.nih.gov/research/visible/visible_human.html',
  },
  {
    datasetId: 'vhp-female-axial',
    subject: 'female',
    plane: 'axial',
    totalSlices: 5189,
    sliceThickness: 0.33,
    pixelSpacing: [0.33, 0.33],
    imageWidth: 2048,
    imageHeight: 1216,
    bodyRegionStart: 'Vertex of skull',
    bodyRegionEnd: 'Soles of feet',
    fileFormat: 'png',
    totalSizeBytes: 8_000_000_000,
    license: 'Public Domain (NLM/NIH)',
    source: 'https://www.nlm.nih.gov/research/visible/visible_human.html',
  },
  {
    datasetId: 'vhp-female-sagittal',
    subject: 'female',
    plane: 'sagittal',
    totalSlices: 592,
    sliceThickness: 1.0,
    pixelSpacing: [0.33, 1.0],
    imageWidth: 5189,
    imageHeight: 1216,
    bodyRegionStart: 'Right side',
    bodyRegionEnd: 'Left side',
    fileFormat: 'png',
    totalSizeBytes: 3_000_000_000,
    license: 'Public Domain (NLM/NIH)',
    source: 'https://www.nlm.nih.gov/research/visible/visible_human.html',
  },
  {
    datasetId: 'vhp-female-coronal',
    subject: 'female',
    plane: 'coronal',
    totalSlices: 372,
    sliceThickness: 1.0,
    pixelSpacing: [0.33, 1.0],
    imageWidth: 5189,
    imageHeight: 592,
    bodyRegionStart: 'Anterior surface',
    bodyRegionEnd: 'Posterior surface',
    fileFormat: 'png',
    totalSizeBytes: 2_500_000_000,
    license: 'Public Domain (NLM/NIH)',
    source: 'https://www.nlm.nih.gov/research/visible/visible_human.html',
  },
];

/**
 * Sample slices with anatomical annotations
 */
export const sampleSlices: VHPSlice[] = [
  {
    sliceId: 'slice-male-axial-100',
    datasetId: 'vhp-male-axial',
    subject: 'male',
    plane: 'axial',
    sliceNumber: 100,
    positionMm: 100,
    anatomicalLevel: 'Superior orbital margin',
    imageUrls: {
      thumbnail: '/assets/vhp/male/axial/thumb/slice_100.jpg',
      preview: '/assets/vhp/male/axial/preview/slice_100.jpg',
      standard: '/assets/vhp/male/axial/standard/slice_100.png',
      high: '/assets/vhp/male/axial/high/slice_100.png',
    },
    structures: [
      {
        structureId: 'frontal-lobe',
        structureName: 'Frontal Lobe',
        system: 'nervous',
        boundingBox: { x: 400, y: 200, width: 300, height: 250 },
        centerPoint: { x: 550, y: 325 },
        visibility: 'full',
        labelPosition: { x: 600, y: 200 },
      },
      {
        structureId: 'frontal-sinus',
        structureName: 'Frontal Sinus',
        system: 'respiratory',
        boundingBox: { x: 480, y: 100, width: 100, height: 80 },
        centerPoint: { x: 530, y: 140 },
        visibility: 'full',
        labelPosition: { x: 590, y: 100 },
      },
      {
        structureId: 'superior-rectus',
        structureName: 'Superior Rectus Muscle',
        system: 'musculoskeletal',
        boundingBox: { x: 450, y: 350, width: 60, height: 40 },
        centerPoint: { x: 480, y: 370 },
        visibility: 'full',
        labelPosition: { x: 380, y: 360 },
      },
    ],
    landmarks: [
      {
        landmarkId: 'lm-001',
        name: 'Superior Sagittal Sinus',
        position: { x: 512, y: 50 },
        description: 'Venous sinus in superior falx cerebri',
        clinicalRelevance: 'Thrombosis can cause increased ICP',
      },
    ],
  },
  {
    sliceId: 'slice-male-axial-500',
    datasetId: 'vhp-male-axial',
    subject: 'male',
    plane: 'axial',
    sliceNumber: 500,
    positionMm: 500,
    anatomicalLevel: 'C5-C6 vertebral level',
    imageUrls: {
      thumbnail: '/assets/vhp/male/axial/thumb/slice_500.jpg',
      preview: '/assets/vhp/male/axial/preview/slice_500.jpg',
      standard: '/assets/vhp/male/axial/standard/slice_500.png',
    },
    structures: [
      {
        structureId: 'cervical-spinal-cord',
        structureName: 'Cervical Spinal Cord',
        system: 'nervous',
        boundingBox: { x: 500, y: 400, width: 40, height: 40 },
        centerPoint: { x: 520, y: 420 },
        visibility: 'full',
        labelPosition: { x: 560, y: 400 },
      },
      {
        structureId: 'carotid-artery',
        structureName: 'Common Carotid Artery',
        system: 'cardiovascular',
        boundingBox: { x: 380, y: 300, width: 25, height: 25 },
        centerPoint: { x: 392, y: 312 },
        visibility: 'full',
        labelPosition: { x: 300, y: 300 },
      },
      {
        structureId: 'thyroid-gland',
        structureName: 'Thyroid Gland',
        system: 'endocrine',
        boundingBox: { x: 420, y: 250, width: 180, height: 80 },
        centerPoint: { x: 510, y: 290 },
        visibility: 'full',
        labelPosition: { x: 620, y: 260 },
      },
    ],
    landmarks: [
      {
        landmarkId: 'lm-002',
        name: 'Vertebral Body C5',
        position: { x: 512, y: 450 },
        description: 'Fifth cervical vertebra body',
        clinicalRelevance: 'Common site of cervical disc herniation',
      },
    ],
  },
  {
    sliceId: 'slice-male-axial-900',
    datasetId: 'vhp-male-axial',
    subject: 'male',
    plane: 'axial',
    sliceNumber: 900,
    positionMm: 900,
    anatomicalLevel: 'T4-T5 vertebral level - Heart',
    imageUrls: {
      thumbnail: '/assets/vhp/male/axial/thumb/slice_900.jpg',
      preview: '/assets/vhp/male/axial/preview/slice_900.jpg',
      standard: '/assets/vhp/male/axial/standard/slice_900.png',
    },
    structures: [
      {
        structureId: 'heart',
        structureName: 'Heart',
        system: 'cardiovascular',
        boundingBox: { x: 350, y: 200, width: 300, height: 280 },
        centerPoint: { x: 500, y: 340 },
        visibility: 'full',
        labelPosition: { x: 670, y: 300 },
      },
      {
        structureId: 'left-ventricle',
        structureName: 'Left Ventricle',
        system: 'cardiovascular',
        boundingBox: { x: 450, y: 280, width: 120, height: 150 },
        centerPoint: { x: 510, y: 355 },
        visibility: 'full',
        labelPosition: { x: 580, y: 350 },
      },
      {
        structureId: 'right-ventricle',
        structureName: 'Right Ventricle',
        system: 'cardiovascular',
        boundingBox: { x: 350, y: 280, width: 90, height: 120 },
        centerPoint: { x: 395, y: 340 },
        visibility: 'full',
        labelPosition: { x: 260, y: 320 },
      },
      {
        structureId: 'descending-aorta',
        structureName: 'Descending Aorta',
        system: 'cardiovascular',
        boundingBox: { x: 520, y: 420, width: 35, height: 35 },
        centerPoint: { x: 537, y: 437 },
        visibility: 'full',
        labelPosition: { x: 570, y: 450 },
      },
      {
        structureId: 'lungs',
        structureName: 'Lungs',
        system: 'respiratory',
        boundingBox: { x: 200, y: 150, width: 600, height: 400 },
        centerPoint: { x: 500, y: 350 },
        visibility: 'partial',
        labelPosition: { x: 750, y: 200 },
      },
    ],
    landmarks: [
      {
        landmarkId: 'lm-003',
        name: 'Sternal Angle',
        position: { x: 512, y: 120 },
        description: 'Junction of manubrium and body of sternum',
        clinicalRelevance: 'Level of T4-T5, tracheal bifurcation, aortic arch',
      },
    ],
  },
  {
    sliceId: 'slice-male-sagittal-300',
    datasetId: 'vhp-male-sagittal',
    subject: 'male',
    plane: 'sagittal',
    sliceNumber: 300,
    positionMm: 0,
    anatomicalLevel: 'Midsagittal plane',
    imageUrls: {
      thumbnail: '/assets/vhp/male/sagittal/thumb/slice_300.jpg',
      preview: '/assets/vhp/male/sagittal/preview/slice_300.jpg',
      standard: '/assets/vhp/male/sagittal/standard/slice_300.png',
    },
    structures: [
      {
        structureId: 'brain',
        structureName: 'Brain',
        system: 'nervous',
        boundingBox: { x: 150, y: 50, width: 200, height: 180 },
        centerPoint: { x: 250, y: 140 },
        visibility: 'full',
        labelPosition: { x: 360, y: 100 },
      },
      {
        structureId: 'corpus-callosum',
        structureName: 'Corpus Callosum',
        system: 'nervous',
        boundingBox: { x: 180, y: 120, width: 140, height: 30 },
        centerPoint: { x: 250, y: 135 },
        visibility: 'full',
        labelPosition: { x: 330, y: 130 },
      },
      {
        structureId: 'vertebral-column',
        structureName: 'Vertebral Column',
        system: 'musculoskeletal',
        boundingBox: { x: 250, y: 200, width: 80, height: 600 },
        centerPoint: { x: 290, y: 500 },
        visibility: 'full',
        labelPosition: { x: 340, y: 400 },
      },
      {
        structureId: 'heart-sagittal',
        structureName: 'Heart',
        system: 'cardiovascular',
        boundingBox: { x: 180, y: 350, width: 100, height: 120 },
        centerPoint: { x: 230, y: 410 },
        visibility: 'partial',
        labelPosition: { x: 100, y: 380 },
      },
    ],
    landmarks: [
      {
        landmarkId: 'lm-004',
        name: 'Foramen Magnum',
        position: { x: 270, y: 230 },
        description: 'Large opening in occipital bone',
        clinicalRelevance: 'Passage of brainstem to spinal cord',
      },
    ],
  },
];

/**
 * Default viewer state
 */
export const defaultViewerState: SliceViewerState = {
  currentDatasetId: 'vhp-male-axial',
  currentSubject: 'male',
  currentPlane: 'axial',
  currentSliceNumber: 500,
  resolution: 'standard',
  showLabels: true,
  showLandmarks: true,
  highlightedStructures: [],
  zoomLevel: 1.0,
  panOffset: { x: 0, y: 0 },
  brightness: 1.0,
  contrast: 1.0,
};

/**
 * Default correlation state
 */
export const defaultCorrelationState: ModelCorrelationState = {
  syncEnabled: true,
  clippingPlane: {
    plane: 'axial',
    positionMm: 500,
    normalVector: [0, 0, 1],
    enabled: true,
  },
  highlightCorrespondingStructure: true,
  showSlicePlaneIn3D: true,
  sliceOpacity: 0.7,
};

/**
 * Get initial Visible Human state
 */
export function getInitialVisibleHumanState(): VisibleHumanState {
  const datasets = new Map<string, VHPDataset>();
  vhpDatasets.forEach((d) => datasets.set(d.datasetId, d));

  const slices = new Map<string, VHPSlice>();
  sampleSlices.forEach((s) => slices.set(s.sliceId, s));

  return {
    datasets,
    slices,
    viewerState: { ...defaultViewerState },
    correlationState: { ...defaultCorrelationState },
    loadedResolutions: new Map(),
    isLoading: false,
    error: null,
    isLoaded: true,
  };
}

/**
 * Get dataset by subject and plane
 */
export function getDataset(
  datasets: Map<string, VHPDataset>,
  subject: VHPSubject,
  plane: AnatomicalPlane
): VHPDataset | undefined {
  return Array.from(datasets.values()).find(
    (d) => d.subject === subject && d.plane === plane
  );
}

/**
 * Get slices for a dataset
 */
export function getSlicesForDataset(
  slices: Map<string, VHPSlice>,
  datasetId: string
): VHPSlice[] {
  return Array.from(slices.values())
    .filter((s) => s.datasetId === datasetId)
    .sort((a, b) => a.sliceNumber - b.sliceNumber);
}

/**
 * Get slice by number
 */
export function getSliceByNumber(
  slices: Map<string, VHPSlice>,
  datasetId: string,
  sliceNumber: number
): VHPSlice | undefined {
  return Array.from(slices.values()).find(
    (s) => s.datasetId === datasetId && s.sliceNumber === sliceNumber
  );
}

/**
 * Get slice navigation info
 */
export function getSliceNavigation(
  dataset: VHPDataset,
  currentSlice: number
): SliceNavigation {
  return {
    canGoNext: currentSlice < dataset.totalSlices,
    canGoPrevious: currentSlice > 1,
    firstSlice: 1,
    lastSlice: dataset.totalSlices,
    sliceStep: 1,
  };
}

/**
 * Navigate to next slice
 */
export function goToNextSlice(
  viewerState: SliceViewerState,
  dataset: VHPDataset
): SliceViewerState {
  if (viewerState.currentSliceNumber < dataset.totalSlices) {
    return {
      ...viewerState,
      currentSliceNumber: viewerState.currentSliceNumber + 1,
    };
  }
  return viewerState;
}

/**
 * Navigate to previous slice
 */
export function goToPreviousSlice(viewerState: SliceViewerState): SliceViewerState {
  if (viewerState.currentSliceNumber > 1) {
    return {
      ...viewerState,
      currentSliceNumber: viewerState.currentSliceNumber - 1,
    };
  }
  return viewerState;
}

/**
 * Jump to specific slice
 */
export function goToSlice(
  viewerState: SliceViewerState,
  sliceNumber: number,
  dataset: VHPDataset
): SliceViewerState {
  const clampedSlice = Math.max(1, Math.min(sliceNumber, dataset.totalSlices));
  return {
    ...viewerState,
    currentSliceNumber: clampedSlice,
  };
}

/**
 * Switch subject (male/female)
 */
export function switchSubject(
  viewerState: SliceViewerState,
  subject: VHPSubject
): SliceViewerState {
  return {
    ...viewerState,
    currentSubject: subject,
    currentDatasetId: `vhp-${subject}-${viewerState.currentPlane}`,
    currentSliceNumber: 1,
  };
}

/**
 * Switch plane (axial/sagittal/coronal)
 */
export function switchPlane(
  viewerState: SliceViewerState,
  plane: AnatomicalPlane
): SliceViewerState {
  return {
    ...viewerState,
    currentPlane: plane,
    currentDatasetId: `vhp-${viewerState.currentSubject}-${plane}`,
    currentSliceNumber: 1,
  };
}

/**
 * Update clipping plane from slice position
 */
export function updateClippingPlane(
  correlationState: ModelCorrelationState,
  slice: VHPSlice
): ModelCorrelationState {
  const normalVectors: Record<AnatomicalPlane, [number, number, number]> = {
    axial: [0, 0, 1],
    sagittal: [1, 0, 0],
    coronal: [0, 1, 0],
  };

  return {
    ...correlationState,
    clippingPlane: {
      plane: slice.plane,
      positionMm: slice.positionMm,
      normalVector: normalVectors[slice.plane],
      enabled: correlationState.clippingPlane.enabled,
    },
  };
}

/**
 * Toggle label visibility
 */
export function toggleLabels(viewerState: SliceViewerState): SliceViewerState {
  return {
    ...viewerState,
    showLabels: !viewerState.showLabels,
  };
}

/**
 * Toggle landmark visibility
 */
export function toggleLandmarks(viewerState: SliceViewerState): SliceViewerState {
  return {
    ...viewerState,
    showLandmarks: !viewerState.showLandmarks,
  };
}

/**
 * Set zoom level
 */
export function setZoom(
  viewerState: SliceViewerState,
  zoomLevel: number
): SliceViewerState {
  return {
    ...viewerState,
    zoomLevel: Math.max(0.5, Math.min(4.0, zoomLevel)),
  };
}

/**
 * Set brightness/contrast
 */
export function setImageAdjustments(
  viewerState: SliceViewerState,
  brightness: number,
  contrast: number
): SliceViewerState {
  return {
    ...viewerState,
    brightness: Math.max(0.5, Math.min(2.0, brightness)),
    contrast: Math.max(0.5, Math.min(2.0, contrast)),
  };
}

/**
 * Highlight structure
 */
export function highlightStructure(
  viewerState: SliceViewerState,
  structureId: string
): SliceViewerState {
  if (viewerState.highlightedStructures.includes(structureId)) {
    return viewerState;
  }
  return {
    ...viewerState,
    highlightedStructures: [...viewerState.highlightedStructures, structureId],
  };
}

/**
 * Clear highlighted structures
 */
export function clearHighlights(viewerState: SliceViewerState): SliceViewerState {
  return {
    ...viewerState,
    highlightedStructures: [],
  };
}

/**
 * Get structures at point (for click detection)
 */
export function getStructuresAtPoint(
  slice: VHPSlice,
  point: { x: number; y: number }
): string[] {
  return slice.structures
    .filter((s) => {
      const { x, y, width, height } = s.boundingBox;
      return (
        point.x >= x &&
        point.x <= x + width &&
        point.y >= y &&
        point.y <= y + height
      );
    })
    .map((s) => s.structureId);
}
