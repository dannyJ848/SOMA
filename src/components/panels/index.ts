/**
 * Panels Module
 *
 * Central export point for all region exploration panels.
 * These panels work with the RegionExplorer component for
 * comprehensive anatomical education and exploration.
 */

// Main integration component
export { RegionExplorer, useRegionExplorer } from '../RegionExplorer';
export type {
  RegionExplorerProps,
  PanelType,
  ComplexityLevel as RegionComplexityLevel,
  SelectedRegion,
  LayerVisibility,
  UserHealthData,
} from '../RegionExplorer';

// Layers Panel
export { LayersPanel } from './LayersPanel';
export type { LayersPanelProps } from './LayersPanel';

// Physiology Panel
export { PhysiologyPanel } from './PhysiologyPanel';
export type { PhysiologyPanelProps, ComplexityLevel as PhysiologyComplexityLevel } from './PhysiologyPanel';

// Physiology Content Hook
export { usePhysiologyContent } from '../../hooks/usePhysiologyContent';
export type {
  PhysiologyContentData,
  UsePhysiologyContentReturn,
  KeyTerm,
  FunctionInfo as PhysiologyFunctionInfo,
  MechanismInfo,
  ParameterInfo as PhysiologyParameterInfo,
  RelatedSystem,
  MediaItem,
  Citation,
} from '../../hooks/usePhysiologyContent';

// Histology Panel
export { HistologyPanel } from './HistologyPanel';
export type { HistologyPanelProps } from './HistologyPanel';

// Histology Content Hook
export { useHistologyContent } from '../../hooks/useHistologyContent';
export type {
  HistologyContent as HistologyPanelContent,
  TissueType,
  CellType,
  KeyStructure,
  StainingMethod,
  ClinicalCorrelation,
  MagnificationLevel,
  UseHistologyContentResult,
} from '../../hooks/useHistologyContent';

// Pathology Panel
export { PathologyPanel } from './PathologyPanel';
export type { PathologyPanelProps, ComplexityLevel as PathologyComplexityLevel, ConditionFilter } from './PathologyPanel';

// Pathology Content Hook
export { usePathologyContent } from './usePathologyContent';
export type {
  PathologyCondition,
  ConditionCategory,
  ConditionContent,
  RelatedCondition,
  Severity as ConditionSeverityLevel,
  Prevalence,
  UsePathologyContentResult,
} from './usePathologyContent';

// User Conditions Panel
export { YourConditionsPanel } from './YourConditionsPanel';
export type {
  YourConditionsPanelProps,
  UserCondition,
  ConditionStatus,
  ConditionSeverity,
  LinkedTreatment,
  RegionAffectedInfo,
} from './YourConditionsPanel';

// Re-export education panels for direct usage
export {
  HistologyPanel as EducationHistologyPanel,
  PathologyPanel as EducationPathologyPanel,
  PhysiologyPanel as EducationPhysiologyPanel,
  UnifiedEducationPanel,
  getRegionContent,
  getRegionsBySystem,
  getModelsForRegion,
  searchRegions,
  getAllRegionIds,
  REGION_CONTENT_MAP,
} from '../../education';

export type {
  RegionContent,
  HistologyContent,
  PathologyContent,
  PhysiologyContent,
  ModelReference,
  TissueTypeInfo,
  ConditionInfo,
  FunctionInfo,
  ProcessInfo,
  HomeostasisInfo,
  ParameterInfo,
} from '../../education/regionContentMapping';

// Smart Panel Manager
export {
  SmartPanelManager,
  PanelManagerProvider,
  usePanelManager,
  usePanel,
  useDock,
  useMinimizedPanels,
  useBottomSheet,
  DockContainer,
  FloatingPanel,
  MinimizedPanelBar,
  MobileBottomSheet,
  STORAGE_KEY as PANEL_STORAGE_KEY,
  MOBILE_BREAKPOINT as PANEL_MOBILE_BREAKPOINT,
  TRANSITION_DURATION as PANEL_TRANSITION_DURATION,
  DEFAULT_Z_INDEX as PANEL_DEFAULT_Z_INDEX,
} from './SmartPanelManager';
export type {
  DockPosition,
  PanelConfig,
  PanelState,
  PanelSize,
  PanelPosition,
  PanelContentProps,
} from './SmartPanelManager';
