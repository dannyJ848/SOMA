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
import type { BiologicalSelf } from './types';

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
} from '../components/panels/SmartPanelManager';
import { LayerController } from './LayerController';

interface AnatomyMainScreenProps {
  patientData?: BiologicalSelf;
  onRegionSelect?: (regionId: string, regionName: string) => void;
  onNavigateToDetail?: (regionId: string) => void;
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

interface HealthOverlayProps {
  patientData: BiologicalSelf;
}

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

function HealthOverlay({ patientData }: HealthOverlayProps) {
  // Create visual indicators for health conditions in 3D space
  // This component renders inside the Canvas

  const conditionMarkers = useMemo(() => {
    if (!patientData.conditions || patientData.conditions.length === 0) return [];

    return patientData.conditions
      .filter(c => c.status === 'active')
      .map(condition => ({
        id: condition.id,
        regions: [...condition.affectedRegions, ...condition.affectedOrgans],
        severity: condition.severity,
        color: condition.severity === 'severe'
          ? '#ff4444'
          : condition.severity === 'moderate'
            ? '#ffaa00'
            : '#44aa44',
      }));
  }, [patientData.conditions]);

  const symptomMarkers = useMemo(() => {
    if (!patientData.symptoms || patientData.symptoms.length === 0) return [];

    return patientData.symptoms
      .filter(s => s.severity > 3)
      .map(symptom => ({
        id: symptom.id,
        location: symptom.location,
        intensity: symptom.severity / 10,
      }));
  }, [patientData.symptoms]);

  // Render health indicator spheres at affected regions
  return (
    <group name="health-overlay">
      {conditionMarkers.map(marker => (
        <mesh
          key={marker.id}
          position={getRegionPosition(marker.regions[0])}
          scale={[0.05, 0.05, 0.05]}
        >
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial
            color={marker.color}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}

      {symptomMarkers.map(marker => (
        <mesh
          key={marker.id}
          position={getRegionPosition(marker.location)}
          scale={[0.03 * marker.intensity, 0.03 * marker.intensity, 0.03 * marker.intensity]}
        >
          <sphereGeometry args={[1, 6, 6]} />
          <meshBasicMaterial
            color="#ff6600"
            transparent
            opacity={0.4 + marker.intensity * 0.4}
          />
        </mesh>
      ))}
    </group>
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

export function AnatomyMainScreen({
  patientData,
  onRegionSelect,
  onNavigateToDetail,
}: AnatomyMainScreenProps) {
  // State
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedRegionName, setSelectedRegionName] = useState<string>('');
  const [activeLayers, setActiveLayers] = useState<string[]>(['integumentary', 'muscular', 'skeletal']);
  const [showHealthOverlay, setShowHealthOverlay] = useState(true);

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
  }, [onRegionSelect]);

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

  const handleRadialMenuSelect = useCallback((action: RadialMenuAction) => {
    if (!contextMenuRegion) return;

    switch (action) {
      case 'view-details':
        onNavigateToDetail?.(contextMenuRegion.id);
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
        // Show all layers
        setActiveLayers(ANATOMICAL_LAYERS.map(l => l.id));
        break;
      case 'ask-ai':
        console.log('Ask AI about', contextMenuRegion.name);
        break;
      case 'add-favorite':
        console.log('Add to favorites:', contextMenuRegion.id);
        break;
      case 'share':
        console.log('Share:', contextMenuRegion.id);
        break;
    }
    setRadialMenuOpen(false);
  }, [contextMenuRegion, onNavigateToDetail]);

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
              minHeight: '300px', // CRITICAL: iOS needs explicit min-height
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
              {/* Lighting */}
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={0.8} />
              <directionalLight position={[-5, 5, -5]} intensity={0.3} />

              {/* 3D Body Model */}
              <PersonalizedBodyModel
                bodyProportions={bodyProportions}
                activeLayers={activeLayers}
                onRegionSelect={handleRegionSelect}
                selectedRegion={selectedRegion}
              />

              {/* Health Overlay */}
              {showHealthOverlay && patientData && (
                <HealthOverlay patientData={patientData} />
              )}

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
          Smart Layer Controller Panel - dockable, collapsible, draggable
          Integrates with SmartPanelManager for glass morphism styling
          and seamless 3D experience integration
        */}
        <LayerController
          activeLayers={activeLayers}
          onLayersChange={setActiveLayers}
          defaultDockPosition="right"
          defaultOpen={true}
          panelId="layer-controller"
        />

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

        {/* Regional context menu - shows when region selected (legacy, can be removed or kept as additional info panel) */}
        {selectedRegion && (
          <RegionalContextMenu
            regionId={selectedRegion}
            patientData={patientData}
            onClose={handleCloseContextMenu}
            onViewDetails={handleViewDetails}
            onViewSymptoms={() => console.log('View symptoms for', selectedRegion)}
            onViewMedications={() => console.log('View medications for', selectedRegion)}
            onAskAI={() => console.log('Ask AI about', selectedRegionName)}
          />
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
