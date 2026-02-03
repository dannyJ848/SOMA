/**
 * Anatomy Main Screen Components
 *
 * Regional detail view and related components for exploring
 * anatomical regions with educational content and personal health data.
 */

// Main component
export { RegionalDetailView } from './RegionalDetailView';
export type { RegionalDetailViewProps, DetailViewTab } from './RegionalDetailView';

// Hooks
export { useRegionalEncyclopedia } from './hooks/useRegionalEncyclopedia';
export type {
  AnatomicalStructure,
  AnatomicalLayer,
  HistologyTabContent,
  RegionalEncyclopediaData,
  UseRegionalEncyclopediaResult,
} from './hooks/useRegionalEncyclopedia';

export { usePatientDataForRegion } from './hooks/usePatientDataForRegion';
export type { PatientRegionData } from './hooks/usePatientDataForRegion';

// Tab components
export { AnatomyTab } from './tabs/AnatomyTab';
export { PhysiologyTab } from './tabs/PhysiologyTab';
export { PathologyTab } from './tabs/PathologyTab';
export { HistologyTab } from './tabs/HistologyTab';
export { MyDataTab } from './tabs/MyDataTab';
