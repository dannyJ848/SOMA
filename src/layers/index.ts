/**
 * Layer System Module
 *
 * Enhanced anatomical layer management with:
 * - Medically accurate sublayer hierarchies
 * - Body region filtering
 * - Clinical relevance categorization
 * - Complexity levels
 * - Clinical scenario presets
 */

export {
  // Types
  type EnhancedLayerDefinition,
  type ClinicalPreset,
  type BodyRegion,
  type ClinicalRelevance,
  type ComplexityLevel,
  type LayerFilterOptions,

  // Data
  ENHANCED_ANATOMICAL_LAYERS,
  CLINICAL_PRESETS,

  // Functions
  flattenLayers,
  getAllLayerIds,
  filterLayersByRegion,
  filterLayersByRelevance,
  filterLayersByComplexity,
  searchLayers,
  filterLayers,
  getPresetLayers,
  getPresetOpacity,
} from './EnhancedLayerConfig';
