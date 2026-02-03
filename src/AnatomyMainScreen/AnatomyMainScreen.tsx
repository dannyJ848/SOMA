/**
 * Anatomy Main Screen
 *
 * THE main app screen that displays a 3D anatomical model as the central
 * interface. Users can interact with body regions, toggle anatomical layers,
 * and view health overlays based on patient data.
 */

import React, { useState, useCallback, useRef, Suspense, useMemo, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

// iOS-specific imports for error handling and debugging
import { ThreeJSErrorBoundary } from '../errors/ErrorBoundary';
import { addDebugLog, logWebGLContext, checkWebGLSupport } from '../components/DebugPanel';
import { PersonalizedBodyModel } from './PersonalizedBodyModel';
import { useUserDemographics, DEFAULT_DEMOGRAPHICS } from '../hooks/useUserDemographics';
import { calculateBodyProportions, type BodyProportions } from '../utils/bodyProportionCalculator';
import { ANATOMICAL_LAYERS, type LayerDefinition } from '../LayerPanel';
import type { BiologicalSelf, AnatomyPatientBridge, PatientCondition } from './types';
import {
  ControlledHealthOverlay,
  useHealthOverlayControls,
  HealthOverlayPanel,
} from './HealthOverlay';
import { createBridge } from './utils';

// Content loading
import {
  useContentService,
  type AnatomyRegion as ContentAnatomyRegion,
  type AnatomySystem,
  type BodySystemFocus,
  type SymptomEntry,
  type MedicalSpecialty,
  type UnifiedSearchResult,
} from '../services/ContentService';

// Data-driven symptom indicators backed by the 155-symptom database
import { DataDrivenSymptomIndicators } from './SymptomIndicators';

// New navigation components
import {
  EnhancedCameraControls,
  type EnhancedCameraControlsRef,
} from '../components/3d/EnhancedCameraControls';
import {
  RadialContextMenu,
  FloatingToolbar,
  SpatialBreadcrumbs,
  useLongPress,
  type RadialMenuAction,
  type ToolbarItem,
  type BreadcrumbItem,
} from '../components/navigation';

// SmartPanelManager integration for dockable, collapsible panels
import {
  PanelManagerProvider,
  SmartPanelManager,
  usePanelManager,
  type PanelConfig,
  type PanelContentProps,
} from '../components/panels/SmartPanelManager';
import { LayerController } from './LayerController';

// Content panels for radial menu actions
import { PathologyPanel } from '../components/panels/PathologyPanel';
import { usePathologyContent } from '../components/panels/usePathologyContent';
import { PhysiologyPanel } from '../components/panels/PhysiologyPanel';
import { HistologyPanel } from '../components/panels/HistologyPanel';
import { getRegionDisplayName } from '../utils/regionToSystemMapper';

/** Structured anatomy context for the AI chat (mirrors ai/types.ts AnatomyChatContext) */
interface AnatomyChatContext {
  regionId: string;
  regionName: string;
  bodySystems: string[];
  anatomyStructures: string[];
  symptoms: string[];
  conditions: string[];
  specialties: string[];
  complexityLevel: 1 | 2 | 3 | 4 | 5;
  initialQuestion?: string;
}

interface AnatomyMainScreenProps {
  patientData?: BiologicalSelf;
  onRegionSelect?: (regionId: string, regionName: string) => void;
  onNavigateToDetail?: (regionId: string) => void;
  /** Navigate to AI chat view with region context (structured context included when available) */
  onNavigateToChat?: (regionId: string, regionName: string, chatContext?: AnatomyChatContext) => void;
  /** Called when patient data is mutated (e.g. user marks a condition as theirs) */
  onPatientDataChange?: (updatedData: BiologicalSelf) => void;
}

interface RegionContextMenuProps {
  regionId: string;
  patientData?: BiologicalSelf;
  onClose: () => void;
  onViewDetails?: () => void;
  onViewSymptoms?: () => void;
  onViewMedications?: () => void;
  onAskAI?: () => void;
}

// ============================================
// Region-to-System Mapping
// ============================================

/**
 * Maps UI region IDs (from the 3D body model) to the body system identifiers
 * that ContentService understands. Some regions map to multiple systems.
 *
 * AnatomySystem values: 'nervous' | 'cardiovascular' | 'respiratory' | 'digestive'
 *   | 'urinary' | 'reproductive' | 'musculoskeletal' | 'endocrine' | 'integumentary'
 *   | 'lymphatic' | 'sensory'
 *
 * BodySystemFocus values: 'cardiovascular' | 'respiratory' | 'gastrointestinal'
 *   | 'neurological' | 'musculoskeletal' | 'endocrine' | 'renal' | 'reproductive'
 *   | 'hematologic' | 'immune' | 'integumentary' | 'hepatic' | 'lymphatic'
 *   | 'psychiatric' | 'sensory' | 'multi-system'
 */
const REGION_TO_SYSTEMS: Record<string, { anatomy: AnatomySystem[]; specialty: BodySystemFocus[] }> = {
  head:     { anatomy: ['nervous', 'sensory'],                  specialty: ['neurological', 'sensory'] },
  neck:     { anatomy: ['nervous', 'endocrine', 'lymphatic'],   specialty: ['neurological', 'endocrine', 'lymphatic'] },
  chest:    { anatomy: ['cardiovascular', 'respiratory'],       specialty: ['cardiovascular', 'respiratory'] },
  heart:    { anatomy: ['cardiovascular'],                      specialty: ['cardiovascular'] },
  abdomen:  { anatomy: ['digestive', 'urinary'],                specialty: ['gastrointestinal', 'renal'] },
  stomach:  { anatomy: ['digestive'],                           specialty: ['gastrointestinal'] },
  liver:    { anatomy: ['digestive'],                           specialty: ['hepatic', 'gastrointestinal'] },
  leftArm:  { anatomy: ['musculoskeletal'],                     specialty: ['musculoskeletal'] },
  rightArm: { anatomy: ['musculoskeletal'],                     specialty: ['musculoskeletal'] },
  leftLeg:  { anatomy: ['musculoskeletal'],                     specialty: ['musculoskeletal'] },
  rightLeg: { anatomy: ['musculoskeletal'],                     specialty: ['musculoskeletal'] },
};

/** Fallback when a region has no explicit mapping */
const DEFAULT_REGION_SYSTEMS: { anatomy: AnatomySystem[]; specialty: BodySystemFocus[] } = {
  anatomy: ['musculoskeletal'],
  specialty: ['multi-system'],
};

// ============================================
// Region Content Types
// ============================================

/** Content loaded from ContentService for a selected body region */
export interface RegionContent {
  /** The region ID this content was loaded for */
  regionId: string;
  /** Anatomy structures relevant to this region */
  anatomyRegions: ContentAnatomyRegion[];
  /** Symptoms associated with this region's body systems */
  symptoms: SymptomEntry[];
  /** Medical specialties relevant to this region */
  specialties: MedicalSpecialty[];
  /** Cross-content search results for the region name */
  relatedContent: UnifiedSearchResult[];
  /** Whether the content is currently being loaded */
  isLoading: boolean;
  /** Error message if content loading failed */
  error: string | null;
}

const EMPTY_REGION_CONTENT: RegionContent = {
  regionId: '',
  anatomyRegions: [],
  symptoms: [],
  specialties: [],
  relatedContent: [],
  isLoading: false,
  error: null,
};

// ============================================
// Regional Context Menu Component
// ============================================

function RegionalContextMenu({
  regionId,
  patientData,
  onClose,
  onViewDetails,
  onViewSymptoms,
  onViewMedications,
  onAskAI,
}: RegionContextMenuProps) {
  // Get region-specific data
  const regionConditions = patientData?.conditions?.filter(c =>
    c.affectedRegions.includes(regionId) || c.affectedOrgans.includes(regionId)
  ) || [];

  const regionSymptoms = patientData?.symptoms?.filter(s =>
    s.location.toLowerCase().includes(regionId.toLowerCase())
  ) || [];

  const regionMedications = patientData?.medications?.filter(m =>
    m.targetOrgans.includes(regionId) || m.targetSystems.includes(regionId)
  ) || [];

  const hasHealthData = regionConditions.length > 0 ||
                        regionSymptoms.length > 0 ||
                        regionMedications.length > 0;

  return (
    <div className="regional-context-menu">
      <div className="context-menu-header">
        <h4>{formatRegionName(regionId)}</h4>
        <button className="context-menu-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6L18 18" />
          </svg>
        </button>
      </div>

      <div className="context-menu-content">
        {/* Health status summary */}
        {hasHealthData && (
          <div className="context-health-summary">
            {regionConditions.length > 0 && (
              <div className="health-badge condition">
                {regionConditions.length} condition{regionConditions.length > 1 ? 's' : ''}
              </div>
            )}
            {regionSymptoms.length > 0 && (
              <div className="health-badge symptom">
                {regionSymptoms.length} symptom{regionSymptoms.length > 1 ? 's' : ''}
              </div>
            )}
            {regionMedications.length > 0 && (
              <div className="health-badge medication">
                {regionMedications.length} medication{regionMedications.length > 1 ? 's' : ''}
              </div>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="context-menu-actions">
          <button className="context-action-btn primary" onClick={onViewDetails}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4M12 8h.01"/>
            </svg>
            <span>View Details</span>
          </button>

          <button className="context-action-btn" onClick={onViewSymptoms}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            <span>Symptoms</span>
          </button>

          <button className="context-action-btn" onClick={onViewMedications}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
            <span>Medications</span>
          </button>

          <button className="context-action-btn ai" onClick={onAskAI}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            <span>Ask AI</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Health Overlay Component (3D)
// ============================================

/**
 * HealthOverlay that uses the anatomy-patient bridge to map patient
 * conditions, symptoms, lab results, and medications to 3D body regions.
 *
 * Accepts external controls via `useHealthOverlayControls` hook so the
 * UI panel outside the Canvas can toggle individual layers and animations.
 */
interface WiredHealthOverlayProps {
  patientData: BiologicalSelf;
  controls: ReturnType<typeof useHealthOverlayControls>;
  onRegionHover?: (regionId: string | null) => void;
  onRegionClick?: (regionId: string) => void;
}

function HealthOverlay({
  patientData,
  controls,
  onRegionHover,
  onRegionClick,
}: WiredHealthOverlayProps) {
  // Build the anatomy-patient bridge from live patient data.
  // The bridge maps conditions/symptoms/labs/medications to anatomical
  // region IDs, producing Maps consumed by the sub-components.
  const bridge: AnatomyPatientBridge = useMemo(() => {
    return createBridge(patientData);
  }, [patientData]);

  // Delegate rendering to the ControlledHealthOverlay which renders
  // ConditionHighlights, SymptomIndicators, LabBadges, and
  // MedicationTargets using the bridge Maps.
  return (
    <ControlledHealthOverlay
      patientData={patientData}
      anatomyBridge={bridge}
      onRegionHover={onRegionHover}
      onRegionClick={onRegionClick}
      controls={controls}
    />
  );
}

// ============================================
// Helper Functions
// ============================================

/**
 * Format region ID to display name
 */
function formatRegionName(regionId: string): string {
  return regionId
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .replace(/-/g, ' ')
    .trim();
}

/**
 * Get 3D position for a region (simplified mapping)
 */
function getRegionPosition(regionId: string): [number, number, number] {
  const regionPositions: Record<string, [number, number, number]> = {
    head: [0, 1.4, 0],
    neck: [0, 1.1, 0],
    chest: [0, 0.6, 0],
    heart: [-0.1, 0.5, 0.05],
    abdomen: [0, 0, 0],
    stomach: [0, 0.1, 0],
    liver: [0.15, 0.15, 0],
    leftArm: [-0.5, 0.4, 0],
    rightArm: [0.5, 0.4, 0],
    leftLeg: [-0.2, -0.8, 0],
    rightLeg: [0.2, -0.8, 0],
  };

  return regionPositions[regionId] || [0, 0, 0];
}

// ============================================
// Loading Component
// ============================================

function CanvasLoading() {
  return (
    <div className="anatomy-canvas-loading">
      <div className="loading-spinner" />
      <span>Loading 3D model...</span>
    </div>
  );
}

// ============================================
// Main Component
// ============================================

// ============================================
// Anatomical Hierarchy Data
// ============================================

const ANATOMICAL_HIERARCHY: Record<string, BreadcrumbItem[]> = {
  body: [],
  head: [
    { id: 'head', label: 'Head', latinName: 'Caput', systemColor: '#64B5F6' },
  ],
  neck: [
    { id: 'neck', label: 'Neck', latinName: 'Collum', systemColor: '#64B5F6' },
  ],
  chest: [
    { id: 'chest', label: 'Chest', latinName: 'Thorax', systemColor: '#E57373' },
  ],
  heart: [
    { id: 'chest', label: 'Chest', latinName: 'Thorax', systemColor: '#E57373' },
    { id: 'heart', label: 'Heart', latinName: 'Cor', systemColor: '#E57373' },
  ],
  abdomen: [
    { id: 'abdomen', label: 'Abdomen', latinName: 'Abdomen', systemColor: '#81C784' },
  ],
  stomach: [
    { id: 'abdomen', label: 'Abdomen', latinName: 'Abdomen', systemColor: '#81C784' },
    { id: 'stomach', label: 'Stomach', latinName: 'Gaster', systemColor: '#81C784' },
  ],
  liver: [
    { id: 'abdomen', label: 'Abdomen', latinName: 'Abdomen', systemColor: '#81C784' },
    { id: 'liver', label: 'Liver', latinName: 'Hepar', systemColor: '#81C784' },
  ],
  leftArm: [
    { id: 'leftArm', label: 'Left Arm', latinName: 'Brachium Sinistrum', systemColor: '#FFB74D' },
  ],
  rightArm: [
    { id: 'rightArm', label: 'Right Arm', latinName: 'Brachium Dextrum', systemColor: '#FFB74D' },
  ],
  leftLeg: [
    { id: 'leftLeg', label: 'Left Leg', latinName: 'Crus Sinistrum', systemColor: '#BA68C8' },
  ],
  rightLeg: [
    { id: 'rightLeg', label: 'Right Leg', latinName: 'Crus Dextrum', systemColor: '#BA68C8' },
  ],
};

// ============================================
// Toolbar Items Configuration
// ============================================

function createToolbarItems(
  activeLayers: string[],
  showHealthOverlay: boolean,
  currentView: string | null
): ToolbarItem[] {
  return [
    // View section
    {
      id: 'view-front',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="4" />
          <path d="M12 12v8M8 20h8" />
        </svg>
      ),
      label: 'Front View',
      tooltip: 'Switch to front view',
      section: 'views',
      active: currentView === 'front',
    },
    {
      id: 'view-back',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="4" />
          <path d="M12 12v8M8 20h8" />
          <line x1="8" y1="8" x2="16" y2="8" strokeDasharray="2 2" />
        </svg>
      ),
      label: 'Back View',
      tooltip: 'Switch to back view',
      section: 'views',
      active: currentView === 'back',
    },
    {
      id: 'view-left',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 4l-7 8 7 8" />
        </svg>
      ),
      label: 'Left View',
      tooltip: 'Switch to left view',
      section: 'views',
      active: currentView === 'left',
    },
    {
      id: 'view-right',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 4l7 8-7 8" />
        </svg>
      ),
      label: 'Right View',
      tooltip: 'Switch to right view',
      section: 'views',
      active: currentView === 'right',
    },
    // Layers section
    {
      id: 'layer-skin',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
      ),
      label: 'Skin',
      tooltip: 'Toggle skin layer',
      section: 'layers',
      active: activeLayers.includes('integumentary'),
    },
    {
      id: 'layer-muscle',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 4c0 0 4 2 6 2s6-2 6-2v4c0 0-4 2-6 2s-6-2-6-2V4z" />
          <path d="M6 12c0 0 4 2 6 2s6-2 6-2v4c0 0-4 2-6 2s-6-2-6-2v-4z" />
        </svg>
      ),
      label: 'Muscles',
      tooltip: 'Toggle muscle layer',
      section: 'layers',
      active: activeLayers.includes('muscular'),
    },
    {
      id: 'layer-skeleton',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="6" r="3" />
          <path d="M12 9v6M9 21l3-6 3 6M9 15h6" />
        </svg>
      ),
      label: 'Skeleton',
      tooltip: 'Toggle skeletal layer',
      section: 'layers',
      active: activeLayers.includes('skeletal'),
    },
    {
      id: 'layer-organs',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
      label: 'Organs',
      tooltip: 'Toggle organs layer',
      section: 'layers',
      active: activeLayers.includes('organs'),
    },
    // Tools section
    {
      id: 'toggle-health',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      label: 'Health Data',
      tooltip: showHealthOverlay ? 'Hide health overlay' : 'Show health overlay',
      section: 'tools',
      active: showHealthOverlay,
    },
    {
      id: 'reset-view',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
        </svg>
      ),
      label: 'Reset View',
      tooltip: 'Reset camera to default position',
      section: 'tools',
    },
  ];
}

const TOOLBAR_SECTIONS = [
  { id: 'views', label: 'Views' },
  { id: 'layers', label: 'Layers' },
  { id: 'tools', label: 'Tools' },
];

// ============================================
// Panel IDs for SmartPanelManager
// ============================================

const PANEL_IDS = {
  DETAIL: 'region-detail-panel',
  PATHOLOGY: 'region-pathology-panel',
  PHYSIOLOGY: 'region-physiology-panel',
  HISTOLOGY: 'region-histology-panel',
} as const;

// ============================================
// Shared region context for panel content
// ============================================

/**
 * Module-level variable to share selected region data with panel wrapper
 * components. This avoids prop-drilling through the SmartPanelManager
 * component registry which only accepts PanelContentProps.
 */
let _sharedRegionContext: {
  regionId: string;
  regionName: string;
  patientData?: BiologicalSelf;
  regionContent?: RegionContent;
  onAskAI?: (question: string) => void;
  onNavigateToRegion?: (regionId: string) => void;
  onPatientDataChange?: (updatedData: BiologicalSelf) => void;
} | null = null;

// ============================================
// Panel Content Wrappers
// ============================================

/**
 * Detail panel content showing anatomy overview + conditions summary
 * for the selected region. Rendered by SmartPanelManager.
 */
function RegionDetailPanelContent({ onClose }: PanelContentProps) {
  const ctx = _sharedRegionContext;
  if (!ctx) {
    return <div style={{ padding: 20, color: '#888' }}>No region selected.</div>;
  }

  const rc = ctx.regionContent;

  const regionConditions = ctx.patientData?.conditions?.filter(c =>
    c.affectedRegions?.some(r => r.toLowerCase().includes(ctx.regionId.toLowerCase())) ||
    c.affectedOrgans?.some(r => r.toLowerCase().includes(ctx.regionId.toLowerCase()))
  ) || [];

  const regionSymptoms = ctx.patientData?.symptoms?.filter(s =>
    s.location?.toLowerCase().includes(ctx.regionId.toLowerCase())
  ) || [];

  const regionMedications = ctx.patientData?.medications?.filter(m =>
    m.targetOrgans?.some(r => r.toLowerCase().includes(ctx.regionId.toLowerCase())) ||
    m.targetSystems?.some(r => r.toLowerCase().includes(ctx.regionId.toLowerCase()))
  ) || [];

  const sectionHeader = (title: string, color: string, count?: number) => (
    <h4 style={{ margin: '0 0 8px', fontSize: 14, color }}>
      {title}{count !== undefined ? ` (${count})` : ''}
    </h4>
  );

  const card = (bg: string, borderColor: string | null, children: React.ReactNode, key?: string) => (
    <div key={key} style={{
      padding: '8px 12px',
      marginBottom: 6,
      background: bg,
      borderRadius: 6,
      fontSize: 13,
      ...(borderColor ? { borderLeft: `3px solid ${borderColor}` } : {}),
    }}>
      {children}
    </div>
  );

  return (
    <div style={{ padding: 20, color: '#e0e0e0', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', overflowY: 'auto', maxHeight: '100%' }}>
      <h3 style={{ margin: '0 0 4px', color: '#fff' }}>{ctx.regionName}</h3>
      <p style={{ margin: '0 0 16px', fontSize: 13, color: '#888' }}>Region Details</p>

      {/* --- ContentService: Anatomy Structures --- */}
      {rc && rc.anatomyRegions.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          {sectionHeader('Anatomy', '#818cf8')}
          {rc.anatomyRegions.slice(0, 8).map(a => (
            card('rgba(129,140,248,0.08)', null, (
              <>
                <div style={{ fontWeight: 500, fontSize: 14 }}>{a.name}</div>
                {a.system && <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{a.system}</div>}
              </>
            ), a.id)
          ))}
        </div>
      )}

      {/* --- ContentService: Common Symptoms --- */}
      {rc && rc.symptoms.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          {sectionHeader('Common Symptoms', '#a78bfa', rc.symptoms.length)}
          {rc.symptoms.slice(0, 6).map(s => (
            card('rgba(167,139,250,0.08)', null, (
              <>
                <div style={{ fontWeight: 500, fontSize: 13 }}>{s.name}</div>
                {s.description && <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{s.description}</div>}
              </>
            ), s.symptomId)
          ))}
        </div>
      )}

      {/* --- ContentService: Medical Specialties --- */}
      {rc && rc.specialties.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          {sectionHeader('Specialties', '#60a5fa', rc.specialties.length)}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {rc.specialties.map(sp => (
              <span key={sp.specialtyId} style={{
                padding: '4px 10px',
                background: 'rgba(96,165,250,0.12)',
                borderRadius: 12,
                fontSize: 12,
                color: '#93c5fd',
              }}>
                {sp.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* --- Patient Data: Conditions --- */}
      {regionConditions.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          {sectionHeader('Your Conditions', '#ef4444', regionConditions.length)}
          {regionConditions.map(c => (
            card('rgba(239,68,68,0.08)',
              c.severity === 'severe' ? '#ef4444' : c.severity === 'moderate' ? '#f59e0b' : '#22c55e',
              <>
                <div style={{ fontWeight: 500, fontSize: 14 }}>{c.name}</div>
                <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>
                  {c.status} &middot; {c.severity}
                </div>
              </>, c.id)
          ))}
        </div>
      )}

      {/* --- Patient Data: Symptoms --- */}
      {regionSymptoms.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          {sectionHeader('Your Symptoms', '#f59e0b', regionSymptoms.length)}
          {regionSymptoms.map(s => (
            card('rgba(245,158,11,0.08)', null, (
              <>{s.description} &middot; severity {s.severity}/10</>
            ), s.id)
          ))}
        </div>
      )}

      {/* --- Patient Data: Medications --- */}
      {regionMedications.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          {sectionHeader('Your Medications', '#3b82f6', regionMedications.length)}
          {regionMedications.map(m => (
            card('rgba(59,130,246,0.08)', null, (
              <>{m.name} &middot; {m.dosage}</>
            ), m.id)
          ))}
        </div>
      )}

      {/* --- ContentService: Related Content --- */}
      {rc && rc.relatedContent.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          {sectionHeader('Related Topics', '#34d399', rc.relatedContent.length)}
          {rc.relatedContent.slice(0, 5).map((r, i) => (
            card('rgba(52,211,153,0.08)', null, (
              <>
                <div style={{ fontWeight: 500, fontSize: 13 }}>{r.name}</div>
                <div style={{ fontSize: 11, color: '#888', marginTop: 2 }}>{r.type}</div>
              </>
            ), `related-${i}`)
          ))}
        </div>
      )}

      {/* --- Loading state --- */}
      {rc?.isLoading && (
        <p style={{ color: '#888', fontSize: 13 }}>Loading content...</p>
      )}

      {/* --- Empty state --- */}
      {(!rc || (!rc.isLoading && rc.anatomyRegions.length === 0 && rc.symptoms.length === 0)) &&
       regionConditions.length === 0 && regionSymptoms.length === 0 && regionMedications.length === 0 && (
        <p style={{ color: '#666', fontSize: 14 }}>
          No health data found for this region. Explore the encyclopedia panels for educational content.
        </p>
      )}
    </div>
  );
}

/**
 * Pathology panel wrapper that reads shared region context.
 */
function PathologyPanelContent({ onClose }: PanelContentProps) {
  const ctx = _sharedRegionContext;
  const [complexityLevel, setComplexityLevel] = useState<1 | 2 | 3 | 4 | 5>(3);

  // Fetch pathology conditions so we can look up full condition data when marking as "my condition"
  const { conditions: pathologyConditions } = usePathologyContent(
    ctx?.regionId ?? '',
    complexityLevel,
  );

  const handleMarkAsMyCondition = useCallback((conditionId: string) => {
    if (!ctx?.patientData) return;

    // Prevent duplicates: skip if the condition is already in the patient's list
    if (ctx.patientData.conditions.some(c => c.id === conditionId)) return;

    // Look up the full condition from the pathology content database
    const pathCondition = pathologyConditions?.find(c => c.id === conditionId);

    // Build a PatientCondition from the pathology content data
    const newCondition: PatientCondition = {
      id: conditionId,
      name: pathCondition?.name ?? conditionId,
      status: 'active',
      severity: (pathCondition?.severity === 'critical' ? 'severe' : pathCondition?.severity) as PatientCondition['severity'] ?? 'moderate',
      affectedRegions: pathCondition?.affectedRegions ?? (ctx.regionId ? [ctx.regionId] : []),
      affectedOrgans: [],
      icdCode: pathCondition?.icdCodes?.[0],
    };

    // Create an updated copy of patient data with the new condition appended
    const updatedPatientData: BiologicalSelf = {
      ...ctx.patientData,
      conditions: [...ctx.patientData.conditions, newCondition],
    };

    // Notify the parent so it can persist the change and trigger a re-render
    if (ctx.onPatientDataChange) {
      ctx.onPatientDataChange(updatedPatientData);
    }
  }, [ctx, pathologyConditions]);

  if (!ctx) {
    return <div style={{ padding: 20, color: '#888' }}>No region selected.</div>;
  }

  const userConditionIds = ctx.patientData?.conditions?.map(c => c.id) || [];

  return (
    <PathologyPanel
      regionId={ctx.regionId}
      regionName={ctx.regionName}
      complexityLevel={complexityLevel}
      userConditions={userConditionIds}
      onComplexityChange={(level) => setComplexityLevel(level as 1 | 2 | 3 | 4 | 5)}
      onConditionSelect={(conditionId) => {
        if (ctx.onAskAI) {
          ctx.onAskAI(`Tell me about the condition "${conditionId}" affecting the ${ctx.regionName}. What are its causes, symptoms, diagnosis, and treatment options?`);
        }
      }}
      onMarkAsMyCondition={handleMarkAsMyCondition}
      onAskAI={(question) => ctx.onAskAI ? ctx.onAskAI(question) : console.log('[PathologyPanel] Ask AI:', question)}
      onClose={onClose}
    />
  );
}

/**
 * Physiology panel wrapper that reads shared region context.
 */
function PhysiologyPanelContent({ onClose }: PanelContentProps) {
  const ctx = _sharedRegionContext;
  const [complexityLevel, setComplexityLevel] = useState<1 | 2 | 3 | 4 | 5>(3);

  if (!ctx) {
    return <div style={{ padding: 20, color: '#888' }}>No region selected.</div>;
  }

  return (
    <PhysiologyPanel
      regionId={ctx.regionId}
      regionName={ctx.regionName}
      complexityLevel={complexityLevel}
      onComplexityChange={(level) => setComplexityLevel(level as 1 | 2 | 3 | 4 | 5)}
      onAskAI={(question) => ctx.onAskAI ? ctx.onAskAI(question) : console.log('[PhysiologyPanel] Ask AI:', question)}
      onNavigateToRegion={(regionId) => ctx.onNavigateToRegion ? ctx.onNavigateToRegion(regionId) : console.log('[PhysiologyPanel] Navigate to region:', regionId)}
      onClose={onClose}
    />
  );
}

/**
 * Histology panel wrapper that reads shared region context.
 */
function HistologyPanelContent({ onClose }: PanelContentProps) {
  const ctx = _sharedRegionContext;
  const [complexityLevel, setComplexityLevel] = useState<1 | 2 | 3 | 4 | 5>(3);

  if (!ctx) {
    return <div style={{ padding: 20, color: '#888' }}>No region selected.</div>;
  }

  return (
    <HistologyPanel
      regionId={ctx.regionId}
      regionName={ctx.regionName}
      complexityLevel={complexityLevel}
      onComplexityChange={(level) => setComplexityLevel(level as 1 | 2 | 3 | 4 | 5)}
      onAskAI={(question) => ctx.onAskAI ? ctx.onAskAI(question) : console.log('[HistologyPanel] Ask AI:', question)}
      onClose={onClose}
    />
  );
}

// ============================================
// Panel Configurations
// ============================================

const DETAIL_PANEL_CONFIG: PanelConfig = {
  id: PANEL_IDS.DETAIL,
  title: 'Region Details',
  component: RegionDetailPanelContent,
  defaultPosition: 'left',
  minSize: { width: 300, height: 300 },
  defaultSize: { width: 360, height: 500 },
  resizable: true,
  priority: 20,
};

const PATHOLOGY_PANEL_CONFIG: PanelConfig = {
  id: PANEL_IDS.PATHOLOGY,
  title: 'Pathology',
  component: PathologyPanelContent,
  defaultPosition: 'left',
  minSize: { width: 320, height: 400 },
  defaultSize: { width: 380, height: 600 },
  resizable: true,
  priority: 15,
};

const PHYSIOLOGY_PANEL_CONFIG: PanelConfig = {
  id: PANEL_IDS.PHYSIOLOGY,
  title: 'Physiology',
  component: PhysiologyPanelContent,
  defaultPosition: 'left',
  minSize: { width: 320, height: 400 },
  defaultSize: { width: 380, height: 600 },
  resizable: true,
  priority: 15,
};

const HISTOLOGY_PANEL_CONFIG: PanelConfig = {
  id: PANEL_IDS.HISTOLOGY,
  title: 'Histology',
  component: HistologyPanelContent,
  defaultPosition: 'right',
  minSize: { width: 360, height: 400 },
  defaultSize: { width: 400, height: 600 },
  resizable: true,
  priority: 15,
};

// ============================================
// Panel Registration Hook
// ============================================

/**
 * Registers the content panels with SmartPanelManager.
 * Must be used inside PanelManagerProvider.
 */
function useRegisterContentPanels() {
  const panelManager = usePanelManager();

  useEffect(() => {
    panelManager.registerPanel(DETAIL_PANEL_CONFIG);
    panelManager.registerPanel(PATHOLOGY_PANEL_CONFIG);
    panelManager.registerPanel(PHYSIOLOGY_PANEL_CONFIG);
    panelManager.registerPanel(HISTOLOGY_PANEL_CONFIG);

    return () => {
      panelManager.unregisterPanel(PANEL_IDS.DETAIL);
      panelManager.unregisterPanel(PANEL_IDS.PATHOLOGY);
      panelManager.unregisterPanel(PANEL_IDS.PHYSIOLOGY);
      panelManager.unregisterPanel(PANEL_IDS.HISTOLOGY);
    };
  }, [panelManager]);

  return panelManager;
}

/**
 * Inner component that registers content panels with SmartPanelManager
 * and keeps the shared region context in sync.
 */
function ContentPanelRegistrar({
  contextMenuRegion,
  selectedRegion,
  selectedRegionName,
  patientData,
  regionContent,
  onAskAI,
  onNavigateToRegion,
  onPatientDataChange,
  panelActionsRef,
}: {
  contextMenuRegion: { id: string; name: string } | null;
  selectedRegion: string | null;
  selectedRegionName: string;
  patientData?: BiologicalSelf;
  regionContent?: RegionContent;
  onAskAI?: (question: string) => void;
  onNavigateToRegion?: (regionId: string) => void;
  onPatientDataChange?: (updatedData: BiologicalSelf) => void;
  panelActionsRef: React.MutableRefObject<{
    openPanel: (id: string) => void;
    closePanel: (id: string) => void;
  } | null>;
}) {
  const panelManager = useRegisterContentPanels();

  // Expose panel manager actions to the parent via ref
  useEffect(() => {
    panelActionsRef.current = {
      openPanel: panelManager.openPanel,
      closePanel: panelManager.closePanel,
    };
    return () => {
      panelActionsRef.current = null;
    };
  }, [panelManager, panelActionsRef]);

  // Keep shared context in sync so panel wrapper components can read it.
  // Prefer contextMenuRegion when available, fall back to selectedRegion.
  useEffect(() => {
    if (contextMenuRegion) {
      _sharedRegionContext = {
        regionId: contextMenuRegion.id,
        regionName: contextMenuRegion.name,
        patientData,
        regionContent,
        onAskAI,
        onNavigateToRegion,
        onPatientDataChange,
      };
    } else if (selectedRegion) {
      _sharedRegionContext = {
        regionId: selectedRegion,
        regionName: selectedRegionName,
        patientData,
        regionContent,
        onAskAI,
        onNavigateToRegion,
        onPatientDataChange,
      };
    }
  }, [contextMenuRegion, selectedRegion, selectedRegionName, patientData, regionContent, onAskAI, onNavigateToRegion, onPatientDataChange]);

  return null;
}

// ============================================
// Category Panel Buttons
// ============================================

/**
 * Displays Pathology / Physiology / Histology category buttons when a region
 * is selected. Clicking a button opens the corresponding panel via
 * SmartPanelManager (panels dock to the right and slide in; on mobile they
 * become bottom sheets).
 *
 * Must be rendered inside PanelManagerProvider.
 */
function CategoryPanelButtons() {
  const { openPanel, closePanel, getPanelState } = usePanelManager();

  const handleTogglePanel = useCallback((panelId: string) => {
    const state = getPanelState(panelId);
    if (state?.isOpen) {
      closePanel(panelId);
    } else {
      openPanel(panelId);
    }
  }, [openPanel, closePanel, getPanelState]);

  const pathologyOpen = getPanelState(PANEL_IDS.PATHOLOGY)?.isOpen ?? false;
  const physiologyOpen = getPanelState(PANEL_IDS.PHYSIOLOGY)?.isOpen ?? false;
  const histologyOpen = getPanelState(PANEL_IDS.HISTOLOGY)?.isOpen ?? false;

  const btnBase: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    padding: '10px 14px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: 500,
    transition: 'all 0.2s ease',
  };

  return (
    <div
      className="category-panel-buttons"
      style={{
        display: 'flex',
        gap: '8px',
        padding: '12px 16px',
        background: 'rgba(26, 26, 26, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <button
        onClick={() => handleTogglePanel(PANEL_IDS.PATHOLOGY)}
        style={{
          ...btnBase,
          background: pathologyOpen ? 'rgba(239,68,68,0.2)' : 'rgba(255,255,255,0.05)',
          border: pathologyOpen ? '1px solid rgba(239,68,68,0.4)' : '1px solid rgba(255,255,255,0.1)',
          color: pathologyOpen ? '#f87171' : '#ccc',
        }}
        aria-pressed={pathologyOpen}
        title="View pathology panel"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 2L1 21h22L12 2zm0 3.5L19.5 19h-15L12 5.5zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/>
        </svg>
        Pathology
      </button>

      <button
        onClick={() => handleTogglePanel(PANEL_IDS.PHYSIOLOGY)}
        style={{
          ...btnBase,
          background: physiologyOpen ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.05)',
          border: physiologyOpen ? '1px solid rgba(59,130,246,0.4)' : '1px solid rgba(255,255,255,0.1)',
          color: physiologyOpen ? '#60a5fa' : '#ccc',
        }}
        aria-pressed={physiologyOpen}
        title="View physiology panel"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
        Physiology
      </button>

      <button
        onClick={() => handleTogglePanel(PANEL_IDS.HISTOLOGY)}
        style={{
          ...btnBase,
          background: histologyOpen ? 'rgba(168,85,247,0.2)' : 'rgba(255,255,255,0.05)',
          border: histologyOpen ? '1px solid rgba(168,85,247,0.4)' : '1px solid rgba(255,255,255,0.1)',
          color: histologyOpen ? '#c084fc' : '#ccc',
        }}
        aria-pressed={histologyOpen}
        title="View histology panel"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="5" r="2"/>
          <path d="M12 7v3M9 10h6M12 10v8"/>
          <ellipse cx="12" cy="18" rx="4" ry="2"/>
        </svg>
        Histology
      </button>
    </div>
  );
}

export function AnatomyMainScreen({
  patientData,
  onRegionSelect,
  onNavigateToDetail,
  onNavigateToChat,
  onPatientDataChange,
}: AnatomyMainScreenProps) {
  // Content service for loading region-specific content
  const contentService = useContentService();

  // State
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedRegionName, setSelectedRegionName] = useState<string>('');
  const [activeLayers, setActiveLayers] = useState<string[]>(['integumentary', 'muscular', 'skeletal']);
  const [showHealthOverlay, setShowHealthOverlay] = useState(true);
  const healthOverlayControls = useHealthOverlayControls();
  const [regionContent, setRegionContent] = useState<RegionContent>(EMPTY_REGION_CONTENT);

  // Compute summary stats for the HealthOverlayPanel UI
  const healthOverlayStats = useMemo(() => {
    if (!patientData) return undefined;
    return {
      conditionCount: patientData.conditions?.length ?? 0,
      activeConditions: patientData.conditions?.filter(
        c => c.status === 'active' || c.status === 'chronic'
      ).length ?? 0,
      symptomCount: patientData.symptoms?.length ?? 0,
      severeSymptoms: patientData.symptoms?.filter(s => s.severity >= 7).length ?? 0,
      abnormalLabs: patientData.labResults?.filter(l => l.status !== 'normal').length ?? 0,
      criticalLabs: patientData.labResults?.filter(
        l => l.status?.includes('critical')
      ).length ?? 0,
      medicationCount: patientData.medications?.length ?? 0,
    };
  }, [patientData]);

  // iOS WebGL context loss recovery state
  const [isContextLost, setIsContextLost] = useState(false);
  const [contextLossMessage, setContextLossMessage] = useState<string | null>(null);
  const contextLossTimestamps = useRef<number[]>([]);
  const [memoryReductionActive, setMemoryReductionActive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Detect iOS device for conservative WebGL settings
  const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  // Log component mount for iOS debugging
  useEffect(() => {
    addDebugLog({
      type: 'info',
      message: 'AnatomyMainScreen component mounted',
      details: {
        isIOS,
        webglSupport: checkWebGLSupport(),
        devicePixelRatio: window.devicePixelRatio,
        viewportSize: { width: window.innerWidth, height: window.innerHeight },
      },
    });

    return () => {
      addDebugLog({
        type: 'info',
        message: 'AnatomyMainScreen component unmounting',
      });
    };
  }, [isIOS]);

  // New navigation state
  const [radialMenuOpen, setRadialMenuOpen] = useState(false);
  const [radialMenuPosition, setRadialMenuPosition] = useState({ x: 0, y: 0 });
  const [contextMenuRegion, setContextMenuRegion] = useState<{ id: string; name: string } | null>(null);
  const [currentCameraPreset, setCurrentCameraPreset] = useState<string | null>('front');
  const [anatomicalPath, setAnatomicalPath] = useState<BreadcrumbItem[]>([]);

  // Refs
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const cameraControlsRef = useRef<EnhancedCameraControlsRef>(null);

  // Get user demographics for body model customization
  const { demographics } = useUserDemographics();

  // Calculate body proportions from user demographics
  const bodyProportions: BodyProportions = useMemo(() => {
    const demoData = demographics || DEFAULT_DEMOGRAPHICS;
    return calculateBodyProportions(demoData);
  }, [demographics]);

  // Memoized toolbar items
  const toolbarItems = useMemo(
    () => createToolbarItems(activeLayers, showHealthOverlay, currentCameraPreset),
    [activeLayers, showHealthOverlay, currentCameraPreset]
  );

  // Handlers
  const handleRegionSelect = useCallback((regionId: string, regionName: string) => {
    setSelectedRegion(regionId);
    setSelectedRegionName(regionName);
    onRegionSelect?.(regionId, regionName);

    // Update anatomical path for breadcrumbs
    const hierarchy = ANATOMICAL_HIERARCHY[regionId] || [];
    setAnatomicalPath(hierarchy);

    // Focus camera on the selected region
    if (cameraControlsRef.current) {
      const position = getRegionPosition(regionId);
      cameraControlsRef.current.focusOnPoint(
        new THREE.Vector3(...position),
        2,
        true
      );
    }

    // ------------------------------------------------------------------
    // Load content from ContentService for the selected region
    // ------------------------------------------------------------------
    setRegionContent({
      ...EMPTY_REGION_CONTENT,
      regionId,
      isLoading: true,
    });

    const systemMapping = REGION_TO_SYSTEMS[regionId] ?? DEFAULT_REGION_SYSTEMS;

    // Fire all content lookups in parallel
    const anatomyPromises = systemMapping.anatomy.map((sys) =>
      contentService.getAnatomyBySystem(sys),
    );
    const symptomPromises = systemMapping.anatomy.map((sys) =>
      contentService.getSymptomsBySystem(sys),
    );
    const specialtyPromises = systemMapping.specialty.map((sys) =>
      contentService.getSpecialtiesForBodySystem(sys),
    );
    const searchPromise = contentService.searchAll(regionName, { limit: 10 });

    Promise.all([
      Promise.all(anatomyPromises),
      Promise.all(symptomPromises),
      Promise.all(specialtyPromises),
      searchPromise,
    ])
      .then(([anatomyArrays, symptomArrays, specialtyArrays, searchResults]) => {
        // Flatten and deduplicate by id/name
        const seenAnatomy = new Set<string>();
        const dedupedAnatomy: ContentAnatomyRegion[] = [];
        for (const arr of anatomyArrays) {
          for (const r of arr) {
            if (!seenAnatomy.has(r.id)) {
              seenAnatomy.add(r.id);
              dedupedAnatomy.push(r);
            }
          }
        }

        const seenSymptom = new Set<string>();
        const dedupedSymptoms: SymptomEntry[] = [];
        for (const arr of symptomArrays) {
          for (const s of arr) {
            const key = s.name;
            if (!seenSymptom.has(key)) {
              seenSymptom.add(key);
              dedupedSymptoms.push(s);
            }
          }
        }

        const seenSpecialty = new Set<string>();
        const dedupedSpecialties: MedicalSpecialty[] = [];
        for (const arr of specialtyArrays) {
          for (const sp of arr) {
            const key = sp.name;
            if (!seenSpecialty.has(key)) {
              seenSpecialty.add(key);
              dedupedSpecialties.push(sp);
            }
          }
        }

        setRegionContent({
          regionId,
          anatomyRegions: dedupedAnatomy,
          symptoms: dedupedSymptoms,
          specialties: dedupedSpecialties,
          relatedContent: searchResults,
          isLoading: false,
          error: null,
        });
      })
      .catch((err) => {
        console.error('[AnatomyMainScreen] Failed to load region content:', err);
        setRegionContent({
          ...EMPTY_REGION_CONTENT,
          regionId,
          isLoading: false,
          error: err instanceof Error ? err.message : 'Failed to load content',
        });
      });
  }, [onRegionSelect, contentService]);

  const handleCloseContextMenu = useCallback(() => {
    setSelectedRegion(null);
    setSelectedRegionName('');
  }, []);

  const handleViewDetails = useCallback(() => {
    if (selectedRegion) {
      onNavigateToDetail?.(selectedRegion);
    }
  }, [selectedRegion, onNavigateToDetail]);

  const handleToggleHealthOverlay = useCallback(() => {
    setShowHealthOverlay(prev => !prev);
  }, []);

  // Radial context menu handlers
  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (selectedRegion) {
      setRadialMenuPosition({ x: e.clientX, y: e.clientY });
      setContextMenuRegion({ id: selectedRegion, name: selectedRegionName });
      setRadialMenuOpen(true);
    }
  }, [selectedRegion, selectedRegionName]);

  // Ref to hold panel manager open/close actions.
  // Populated by ContentPanelRegistrar which is rendered inside PanelManagerProvider.
  const panelActionsRef = useRef<{
    openPanel: (id: string) => void;
    closePanel: (id: string) => void;
  } | null>(null);

  /**
   * Build a structured AnatomyChatContext from the current region selection,
   * loaded ContentService data, and the REGION_TO_SYSTEMS mapping.
   */
  const buildChatContext = useCallback((rId: string, rName: string): AnatomyChatContext => {
    const systemMapping = REGION_TO_SYSTEMS[rId] ?? DEFAULT_REGION_SYSTEMS;

    // Pull data from the regionContent state (populated by ContentService)
    const content = regionContent.regionId === rId ? regionContent : EMPTY_REGION_CONTENT;

    // Anatomy structure names
    const anatomyStructures = content.anatomyRegions.map(a => a.name ?? a.id);

    // Symptom names
    const symptoms = content.symptoms.map(s => s.name);

    // Condition names from patient data that match this region
    const patientConditions = patientData?.conditions
      ?.filter(c =>
        c.affectedRegions?.some(r => r.toLowerCase().includes(rId.toLowerCase())) ||
        c.affectedOrgans?.some(r => r.toLowerCase().includes(rId.toLowerCase()))
      )
      .map(c => c.name) ?? [];

    // Specialty names
    const specialties = content.specialties.map(s => s.name);

    return {
      regionId: rId,
      regionName: rName,
      bodySystems: [...systemMapping.anatomy, ...systemMapping.specialty.filter(s => !systemMapping.anatomy.includes(s as any))],
      anatomyStructures,
      symptoms,
      conditions: patientConditions,
      specialties,
      complexityLevel: 3,
      initialQuestion: `Tell me about the ${rName}. What is its structure, function, and clinical significance?`,
    };
  }, [regionContent, patientData]);

  /**
   * Handler for "Ask AI" buttons inside panel wrappers.
   * Navigates to the AI chat view with the current region context and the user's question.
   */
  const handlePanelAskAI = useCallback((question: string) => {
    if (!onNavigateToChat) return;
    const rId = _sharedRegionContext?.regionId ?? selectedRegion ?? '';
    const rName = _sharedRegionContext?.regionName ?? selectedRegionName ?? '';
    if (!rId) return;
    const chatCtx = buildChatContext(rId, rName);
    chatCtx.initialQuestion = question;
    onNavigateToChat(rId, rName, chatCtx);
  }, [onNavigateToChat, buildChatContext, selectedRegion, selectedRegionName]);

  /**
   * Handler for "navigate to region" actions from panel wrappers (e.g. PhysiologyPanel).
   * Moves the 3D camera to focus on the target region and updates the selected region state.
   */
  const handleNavigateToRegion = useCallback((regionId: string) => {
    const regionName = getRegionDisplayName(regionId) || formatRegionName(regionId);

    // Update selected region state
    setSelectedRegion(regionId);
    setSelectedRegionName(regionName);

    // Update anatomical breadcrumbs
    const hierarchy = ANATOMICAL_HIERARCHY[regionId] || [];
    setAnatomicalPath(hierarchy);

    // Move camera to the target region
    if (cameraControlsRef.current) {
      const position = getRegionPosition(regionId);
      cameraControlsRef.current.focusOnPoint(
        new THREE.Vector3(...position),
        2,
        true
      );
    }
  }, []);

  const handleRadialMenuSelect = useCallback((action: RadialMenuAction) => {
    if (!contextMenuRegion) return;

    // Update shared region context so panel wrappers display the correct region data
    _sharedRegionContext = {
      regionId: contextMenuRegion.id,
      regionName: contextMenuRegion.name,
      patientData,
      regionContent,
      onAskAI: handlePanelAskAI,
      onNavigateToRegion: handleNavigateToRegion,
      onPatientDataChange,
    };

    switch (action) {
      case 'view-details':
        // Open the region detail panel via SmartPanelManager
        panelActionsRef.current?.openPanel(PANEL_IDS.DETAIL);
        break;
      case 'isolate-region':
        // Isolate to just the selected region layers
        setActiveLayers(['organs']);
        if (cameraControlsRef.current) {
          const position = getRegionPosition(contextMenuRegion.id);
          cameraControlsRef.current.focusOnPoint(
            new THREE.Vector3(...position),
            1.5,
            true
          );
        }
        break;
      case 'xray-view':
        // Toggle to x-ray style view (skeletal only)
        setActiveLayers(['skeletal']);
        break;
      case 'show-layers':
        // Toggle layer visibility: if all visible, reset to defaults; otherwise show all
        setActiveLayers(prev => {
          const allLayerIds = ANATOMICAL_LAYERS.map(l => l.id);
          const allShowing = allLayerIds.every(id => prev.includes(id));
          return allShowing ? ['integumentary', 'muscular', 'skeletal'] : allLayerIds;
        });
        break;
      case 'ask-ai':
        // Navigate to AI chat with the selected region as context
        if (onNavigateToChat) {
          const chatCtx = buildChatContext(contextMenuRegion.id, contextMenuRegion.name);
          onNavigateToChat(contextMenuRegion.id, contextMenuRegion.name, chatCtx);
        } else {
          // Fallback: open the detail panel when no chat handler is provided
          panelActionsRef.current?.openPanel(PANEL_IDS.DETAIL);
        }
        break;
      case 'add-favorite':
        // Open pathology panel (repurposed as "My Health" when patient data exists)
        panelActionsRef.current?.openPanel(PANEL_IDS.PATHOLOGY);
        break;
      case 'share':
        console.log('[AnatomyMainScreen] Share:', contextMenuRegion.id);
        break;
    }
    setRadialMenuOpen(false);
  }, [contextMenuRegion, patientData, onNavigateToChat, buildChatContext, handleNavigateToRegion, onPatientDataChange]);

  const handleRadialMenuClose = useCallback(() => {
    setRadialMenuOpen(false);
    setContextMenuRegion(null);
  }, []);

  // Long press handler for touch devices
  const longPressHandlers = useLongPress({
    delay: 500,
    onLongPress: (e) => {
      if (selectedRegion) {
        const clientX = 'touches' in e ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = 'touches' in e ? (e as React.TouchEvent).touches[0].clientY : (e as React.MouseEvent).clientY;
        setRadialMenuPosition({ x: clientX, y: clientY });
        setContextMenuRegion({ id: selectedRegion, name: selectedRegionName });
        setRadialMenuOpen(true);
      }
    },
  });

  // Toolbar action handler
  const handleToolbarAction = useCallback((actionId: string) => {
    switch (actionId) {
      // View presets
      case 'view-front':
        cameraControlsRef.current?.setViewPreset('front', true);
        setCurrentCameraPreset('front');
        break;
      case 'view-back':
        cameraControlsRef.current?.setViewPreset('back', true);
        setCurrentCameraPreset('back');
        break;
      case 'view-left':
        cameraControlsRef.current?.setViewPreset('left', true);
        setCurrentCameraPreset('left');
        break;
      case 'view-right':
        cameraControlsRef.current?.setViewPreset('right', true);
        setCurrentCameraPreset('right');
        break;
      // Layer toggles
      case 'layer-skin':
        setActiveLayers(prev =>
          prev.includes('integumentary')
            ? prev.filter(l => l !== 'integumentary')
            : [...prev, 'integumentary']
        );
        break;
      case 'layer-muscle':
        setActiveLayers(prev =>
          prev.includes('muscular')
            ? prev.filter(l => l !== 'muscular')
            : [...prev, 'muscular']
        );
        break;
      case 'layer-skeleton':
        setActiveLayers(prev =>
          prev.includes('skeletal')
            ? prev.filter(l => l !== 'skeletal')
            : [...prev, 'skeletal']
        );
        break;
      case 'layer-organs':
        setActiveLayers(prev =>
          prev.includes('organs')
            ? prev.filter(l => l !== 'organs')
            : [...prev, 'organs']
        );
        break;
      // Tools
      case 'toggle-health':
        setShowHealthOverlay(prev => !prev);
        break;
      case 'reset-view':
        cameraControlsRef.current?.reset(true);
        setCurrentCameraPreset('front');
        setAnatomicalPath([]);
        setSelectedRegion(null);
        setSelectedRegionName('');
        break;
    }
  }, []);

  // Breadcrumb navigation handler
  const handleBreadcrumbNavigate = useCallback((level: number) => {
    if (level === 0) {
      // Navigate to body root
      setAnatomicalPath([]);
      setSelectedRegion(null);
      setSelectedRegionName('');
      cameraControlsRef.current?.reset(true);
    } else if (anatomicalPath[level - 1]) {
      // Navigate to specific level
      const targetItem = anatomicalPath[level - 1];
      setAnatomicalPath(anatomicalPath.slice(0, level));
      setSelectedRegion(targetItem.id);
      setSelectedRegionName(targetItem.label);

      // Focus camera on the target region
      const position = getRegionPosition(targetItem.id);
      cameraControlsRef.current?.focusOnPoint(
        new THREE.Vector3(...position),
        2.5,
        true
      );
    }
  }, [anatomicalPath]);

  // Camera change handler
  const handleCameraChange = useCallback(() => {
    // Could track camera state changes here if needed
  }, []);

  const handlePresetChange = useCallback((presetName: string) => {
    setCurrentCameraPreset(presetName);
  }, []);

  return (
    <PanelManagerProvider storageKey="anatomy-main-screen-panels">
      {/* Register content panels and sync region context with SmartPanelManager */}
      <ContentPanelRegistrar
        contextMenuRegion={contextMenuRegion}
        selectedRegion={selectedRegion}
        selectedRegionName={selectedRegionName}
        patientData={patientData}
        regionContent={regionContent}
        onAskAI={handlePanelAskAI}
        onNavigateToRegion={handleNavigateToRegion}
        onPatientDataChange={onPatientDataChange}
        panelActionsRef={panelActionsRef}
      />

      <div className="anatomy-main-screen">

        {/* Spatial Breadcrumbs - shows anatomical hierarchy */}
        <SpatialBreadcrumbs
          path={anatomicalPath}
          onNavigate={handleBreadcrumbNavigate}
          position="top-left"
          showPreviews={true}
          glassEffect={true}
          homeLabel="Body"
        />

        {/* 3D Canvas - takes up most of the screen */}
        <div
          ref={canvasContainerRef}
          className="anatomy-canvas-container"
          onContextMenu={handleContextMenu}
          {...longPressHandlers}
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            minHeight: '300px',
            overflow: 'hidden',
          }}
        >

          {/* ThreeJS Error Boundary - catches WebGL and rendering errors */}
          <ThreeJSErrorBoundary
            onError={(error) => {
              addDebugLog({
                type: 'error',
                message: `ThreeJS Error in AnatomyMainScreen: ${error.message}`,
                details: {
                  code: error.code,
                  severity: error.severity,
                },
                stack: error.stack,
              });
            }}
            onFallback2D={() => {
              addDebugLog({
                type: 'info',
                message: 'AnatomyMainScreen falling back to 2D view',
              });
            }}
          >
          {/* Canvas Loading Fallback with explicit min-height for iOS */}
          <Suspense fallback={
            <div className="anatomy-canvas-loading" style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#0a0a0f',
              color: 'white',
              minHeight: '300px',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div className="loading-spinner" style={{
                  width: 40,
                  height: 40,
                  border: '3px solid rgba(255,255,255,0.1)',
                  borderTopColor: '#3b82f6',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  margin: '0 auto 16px',
                }} />
                <span>Loading 3D model...</span>
              </div>
            </div>
          }>
            <Canvas
              camera={{ position: [0, 0.5, 4], fov: 50 }}
              gl={{
                // iOS-safe WebGL settings (matching SimplifiedAnatomyViewer pattern)
                antialias: false,
                alpha: true,
                powerPreference: 'default',
                preserveDrawingBuffer: false,
                failIfMajorPerformanceCaveat: false,
              }}
              dpr={Math.min(window.devicePixelRatio, 2)}
              frameloop={isContextLost ? 'never' : 'always'}
              style={{
                width: '100%',
                height: '100%',
                touchAction: 'none',
                display: 'block',
                position: 'absolute',
                inset: 0,
              }}
              onCreated={(state) => {
                console.log('[AnatomyMainScreen] Canvas created successfully');

                // Capture canvas reference for context loss event handling
                canvasRef.current = state.gl.domElement;

                // Log WebGL context creation for iOS debugging
                const contextInfo = {
                  size: state.size,
                  dpr: state.gl.getPixelRatio(),
                  webglVersion: state.gl.capabilities.isWebGL2 ? 'WebGL2' : 'WebGL1',
                  maxTextures: state.gl.capabilities.maxTextures,
                  precision: state.gl.capabilities.precision,
                };
                logWebGLContext('created', {
                  ...contextInfo,
                  isIOS,
                  devicePixelRatio: window.devicePixelRatio,
                  webglSupport: checkWebGLSupport(),
                });

                // Setup WebGL context loss/restore event listeners
                const canvas = state.gl.domElement;
                canvas.addEventListener('webglcontextlost', (event) => {
                  event.preventDefault();
                  console.error('[AnatomyMainScreen] WebGL context lost!');
                  setIsContextLost(true);
                  setContextLossMessage('3D rendering paused due to memory pressure. Attempting to restore...');
                  logWebGLContext('lost', { preventDefaultCalled: true });

                  // Track context loss frequency
                  const now = Date.now();
                  contextLossTimestamps.current.push(now);
                  contextLossTimestamps.current = contextLossTimestamps.current.filter(
                    ts => now - ts < 5 * 60 * 1000 // 5 minute window
                  );

                  // If frequent context losses, activate memory reduction mode
                  if (contextLossTimestamps.current.length >= 3) {
                    setMemoryReductionActive(true);
                    setContextLossMessage(
                      '3D rendering paused due to repeated memory pressure. ' +
                      'Quality has been reduced to improve stability.'
                    );
                  }
                });

                canvas.addEventListener('webglcontextrestored', () => {
                  console.log('[AnatomyMainScreen] WebGL context restored');
                  setIsContextLost(false);
                  setContextLossMessage('3D rendering restored successfully.');
                  logWebGLContext('restored', {});
                  setTimeout(() => setContextLossMessage(null), 3000);
                });

                // CRITICAL for iOS: Force an initial render
                try {
                  state.gl.render(state.scene, state.camera);
                  addDebugLog({
                    type: 'info',
                    message: 'AnatomyMainScreen initial render completed',
                    details: { sceneChildren: state.scene.children.length },
                  });
                } catch (renderError) {
                  console.error('[AnatomyMainScreen] Initial render failed:', renderError);
                  logWebGLContext('error', {
                    phase: 'initial-render',
                    error: renderError instanceof Error ? renderError.message : String(renderError),
                  });
                }
              }}
            >
              {/* Background color - dark blue-gray for professional look */}
              <color attach="background" args={['#1a1a2e']} />

              {/* 3D Body Model - wired to display patient-specific data */}
              <PersonalizedBodyModel
                bodyProportions={bodyProportions}
                activeLayers={activeLayers}
                onRegionSelect={handleRegionSelect}
                selectedRegion={selectedRegion}
                patientData={patientData}
                showHealthOverlay={showHealthOverlay}
                animationsEnabled={healthOverlayControls.animationsEnabled}
                medicationHighlightMode="hover"
              />

              {/* Health Overlay - bridge-based visualization of patient data
                  rendered as a sibling so its shader-based highlights layer on
                  top of the body model meshes with correct depth ordering */}
              {showHealthOverlay && patientData && (
                <HealthOverlay
                  patientData={patientData}
                  controls={healthOverlayControls}
                />
              )}

              {/* Data-driven symptom indicators — fetches real symptoms from the
                  155-symptom database for the selected body region. Clicking an
                  indicator loads full SymptomInfo (possible causes, red flags,
                  home management, when-to-see-doctor guidance). */}
              <DataDrivenSymptomIndicators
                regionId={selectedRegion}
                visible={showHealthOverlay}
                showLabels={false}
                maxSymptoms={8}
              />

              {/* Enhanced Camera Controls - replaces OrbitControls */}
              <EnhancedCameraControls
                ref={cameraControlsRef}
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                minDistance={1.5}
                maxDistance={10}
                maxPolarAngle={Math.PI}
                enableMomentum={true}
                enableSmoothZoom={true}
                enableDoubleClickFocus={true}
                focusAnimationDuration={800}
                focusEasing="cinematic"
                enableTouchGestures={true}
                onCameraChange={handleCameraChange}
                onPresetChange={handlePresetChange}
                initialPosition={[0, 0.5, 4]}
                initialTarget={[0, 0.2, 0]}
              />
            </Canvas>
          </Suspense>
          </ThreeJSErrorBoundary>

          {/* WebGL Context Loss Message Overlay */}
          {contextLossMessage && (
            <div
              className="webgl-context-message"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '20px 32px',
                background: isContextLost ? 'rgba(239, 68, 68, 0.95)' : 'rgba(34, 197, 94, 0.95)',
                borderRadius: '12px',
                color: 'white',
                textAlign: 'center',
                zIndex: 100,
                maxWidth: '80%',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div style={{ marginBottom: '8px' }}>
                {isContextLost ? (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ margin: '0 auto', display: 'block' }}>
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                ) : (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ margin: '0 auto', display: 'block' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                )}
              </div>
              <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>
                {isContextLost ? 'WebGL Context Lost' : 'Restored'}
              </div>
              <div style={{ fontSize: '14px', opacity: 0.9 }}>
                {contextLossMessage}
              </div>
              {isContextLost && (
                <div style={{ marginTop: '12px', fontSize: '12px', opacity: 0.8 }}>
                  {memoryReductionActive
                    ? 'Memory-intensive features have been disabled.'
                    : 'The 3D viewer will automatically restore when memory is available.'}
                </div>
              )}
            </div>
          )}

          {/* Memory Reduction Mode Indicator */}
          {memoryReductionActive && !isContextLost && !contextLossMessage && (
            <div
              className="memory-reduction-indicator"
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                padding: '6px 12px',
                background: 'rgba(251, 191, 36, 0.9)',
                borderRadius: '6px',
                color: '#1a1a1a',
                fontSize: '12px',
                fontWeight: 500,
                zIndex: 50,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              Low Memory Mode
            </div>
          )}

          {/* Health overlay toggle - now positioned to not conflict with toolbar */}
          <button
            className={`health-overlay-toggle ${showHealthOverlay ? 'active' : ''}`}
            onClick={handleToggleHealthOverlay}
            title={showHealthOverlay ? 'Hide health overlay' : 'Show health overlay'}
            style={{ bottom: '80px' }} // Adjusted to make room for toolbar
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </button>

          {/* Health Overlay Panel - granular controls for overlay layers */}
          {showHealthOverlay && patientData && (
            <div
              className="health-overlay-panel-container"
              style={{
                position: 'absolute',
                bottom: '120px',
                left: '16px',
                zIndex: 50,
                maxWidth: '260px',
                background: 'rgba(26, 26, 26, 0.85)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#e0e0e0',
                fontSize: '13px',
              }}
            >
              <HealthOverlayPanel
                controls={healthOverlayControls}
                stats={healthOverlayStats}
              />
            </div>
          )}
        </div>

        {/* Floating Toolbar - anatomy-specific tools */}
        <FloatingToolbar
          position="right"
          autoHide={false}
          items={toolbarItems}
          sections={TOOLBAR_SECTIONS}
          onItemClick={handleToolbarAction}
          draggable={true}
          showLabels={false}
        />

        {/*
          Smart Layer Controller Panel - TEMPORARILY DISABLED FOR DEBUGGING
        */}
        {/* <LayerController
          activeLayers={activeLayers.map(l => {
            const reverseMapping: Record<string, string> = {
              integumentary: 'skin',
              muscular: 'muscle',
              skeletal: 'bone',
              cardiovascular: 'vessels',
              nervous: 'nerves',
            };
            return reverseMapping[l] || l;
          })}
          onLayersChange={(layers) => {
            const layerMapping: Record<string, string> = {
              skin: 'integumentary',
              muscle: 'muscular',
              bone: 'skeletal',
              vessels: 'cardiovascular',
              nerves: 'nervous',
            };
            const mappedLayers = layers.map(l => layerMapping[l] || l);
            setActiveLayers(mappedLayers);
          }}
          defaultDockPosition="right"
          defaultOpen={true}
          panelId="layer-controller"
        /> */}

        {/* SmartPanelManager renders all registered panels with glass morphism */}
        <SmartPanelManager className="anatomy-panel-manager" />

        {/* Radial Context Menu - appears on right-click/long-press */}
        <RadialContextMenu
          isOpen={radialMenuOpen}
          position={radialMenuPosition}
          regionId={contextMenuRegion?.id}
          regionName={contextMenuRegion?.name}
          onSelect={handleRadialMenuSelect}
          onClose={handleRadialMenuClose}
          radius={110}
        />

        {/* Regional context menu - shows when region selected */}
        {selectedRegion && (
          <>
            <RegionalContextMenu
              regionId={selectedRegion}
              patientData={patientData}
              onClose={handleCloseContextMenu}
              onViewDetails={handleViewDetails}
              onViewSymptoms={() => {
                // Update shared context so the detail panel shows the correct region
                _sharedRegionContext = {
                  regionId: selectedRegion,
                  regionName: selectedRegionName,
                  patientData,
                  regionContent,
                  onAskAI: handlePanelAskAI,
                  onNavigateToRegion: handleNavigateToRegion,
                  onPatientDataChange,
                };
                // Open the detail panel which displays symptoms from ContentService + patient data
                panelActionsRef.current?.openPanel(PANEL_IDS.DETAIL);
                // If AI chat is available, navigate with a symptoms-focused question
                if (onNavigateToChat) {
                  const chatCtx = buildChatContext(selectedRegion, selectedRegionName);
                  chatCtx.initialQuestion = `What are the common symptoms affecting the ${selectedRegionName}?`;
                  onNavigateToChat(selectedRegion, selectedRegionName, chatCtx);
                }
              }}
              onViewMedications={() => {
                // Update shared context so the detail panel shows the correct region
                _sharedRegionContext = {
                  regionId: selectedRegion,
                  regionName: selectedRegionName,
                  patientData,
                  regionContent,
                  onAskAI: handlePanelAskAI,
                  onNavigateToRegion: handleNavigateToRegion,
                  onPatientDataChange,
                };
                // Open the detail panel which displays medications from patient data
                panelActionsRef.current?.openPanel(PANEL_IDS.DETAIL);
                // If AI chat is available, navigate with a medications-focused question
                if (onNavigateToChat) {
                  const chatCtx = buildChatContext(selectedRegion, selectedRegionName);
                  chatCtx.initialQuestion = `What medications are commonly used for conditions affecting the ${selectedRegionName}?`;
                  onNavigateToChat(selectedRegion, selectedRegionName, chatCtx);
                }
              }}
              onAskAI={() => {
                if (onNavigateToChat && selectedRegion) {
                  const chatCtx = buildChatContext(selectedRegion, selectedRegionName);
                  onNavigateToChat(selectedRegion, selectedRegionName, chatCtx);
                }
              }}
            />
            {/* Category buttons: open Pathology / Physiology / Histology panels */}
            <div
              className="category-panel-buttons-container"
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 90,
                maxWidth: '340px',
                width: '90%',
              }}
            >
              <CategoryPanelButtons />
            </div>
          </>
        )}

        {/* Help hint when nothing selected */}
        {!selectedRegion && (
          <div className="anatomy-help-hint">
            <span>Tap any body region to explore. Right-click or long-press for more options.</span>
          </div>
        )}
      </div>
    </PanelManagerProvider>
  );
}

export default AnatomyMainScreen;
