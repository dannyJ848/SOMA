/**
 * Body-Centric Home
 *
 * The main view of the app where the 3D body model is the central hub.
 * Users select body regions to access contextual health information.
 */

import React, { useState, useCallback, useRef, Suspense, lazy, useMemo, useEffect } from 'react';
import { RadialContextMenu, type ContextMenuAction } from './ui/RadialContextMenu';
import { HealthStatusOverlay } from './ui/HealthStatusOverlay';
import { useUserDemographics, DEFAULT_DEMOGRAPHICS } from './hooks/useUserDemographics';
import { getRegionMapping, type RegionMapping } from './utils/regionToSystemMapper';
import { calculateBodyProportions } from './utils/bodyProportionCalculator';
import {
  IOS3DDebugOverlay,
  markComponentMounted,
  addDebugLogEntry,
  updateCanvasStatus,
  updateModelStatus,
} from './components/iOS3DDebugOverlay';
import { ModelLoadingScreen } from './components/ModelLoadingScreen';

// Extended DashboardData type for body-centric home
// This combines the base type with additional fields from the app
interface DashboardData {
  activeConditions: Array<{ id?: string; name: string; status: string }>;
  currentMedications: Array<{ id?: string; name: string; dosage?: string; frequency?: string; indication?: string }>;
  recentSymptoms: Array<{ id?: string; description: string; severity: number; location?: string; onsetDate?: string }>;
  recentLabs: Array<{ testName: string; value: number | string; unit?: string; status?: string }>;
  vitalsSummary?: {
    heartRate?: number;
    restingHeartRate?: number;
    hrv?: number;
    sleepHours?: number;
    recoveryScore?: number;
    steps?: number;
  };
}

// Lazy load heavy components with debug logging
const AnatomyViewer = lazy(() => {
  addDebugLogEntry('info', 'Starting lazy load of AnatomyViewer...');
  return import('./AnatomyViewer').then(m => {
    addDebugLogEntry('success', 'AnatomyViewer module loaded successfully');
    return { default: m.AnatomyViewer };
  }).catch(err => {
    addDebugLogEntry('error', `Failed to load AnatomyViewer: ${err.message || err}`);
    throw err;
  });
});
const SimplifiedAnatomyViewer = lazy(() => {
  addDebugLogEntry('info', 'Starting lazy load of SimplifiedAnatomyViewer...');
  return import('./SimplifiedAnatomyViewer').then(m => {
    addDebugLogEntry('success', 'SimplifiedAnatomyViewer module loaded successfully');
    return { default: m.SimplifiedAnatomyViewer };
  }).catch(err => {
    addDebugLogEntry('error', `Failed to load SimplifiedAnatomyViewer: ${err.message || err}`);
    throw err;
  });
});
const AnatomyChatPanel = lazy(() => import('./AnatomyChatPanel').then(m => ({ default: m.AnatomyChatPanel })));

// ============================================
// AnatomyViewer Error Boundary
// If the full AnatomyViewer throws at any point (import, render, etc.),
// this catches the error, logs it visibly, and triggers fallback to
// SimplifiedAnatomyViewer so the user always sees something.
// ============================================

interface AnatomyViewerErrorBoundaryProps {
  children: React.ReactNode;
  onFallbackToSimplified: () => void;
}

interface AnatomyViewerErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class AnatomyViewerErrorBoundary extends React.Component<
  AnatomyViewerErrorBoundaryProps,
  AnatomyViewerErrorBoundaryState
> {
  constructor(props: AnatomyViewerErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const msg = `AnatomyViewer crashed: ${error.message}`;
    console.error('[BodyCentricHome]', msg, error, errorInfo);
    addDebugLogEntry('error', msg);
    addDebugLogEntry('error', `Component stack: ${errorInfo.componentStack?.slice(0, 200) || 'N/A'}`);
    // Trigger parent to switch to simplified viewer
    this.props.onFallbackToSimplified();
  }

  override render() {
    if (this.state.hasError) {
      // Return null - the parent will show SimplifiedAnatomyViewer
      return null;
    }
    return this.props.children;
  }
}

// ============================================
// Types
// ============================================

type ActivePanel =
  | 'none'
  | 'medications'
  | 'symptoms'
  | 'encyclopedia'
  | 'chat'
  | 'layers'
  | 'histology'
  | 'pathology'
  | 'physiology';

// View type matching App.tsx
type View = 'dashboard' | 'timeline' | 'body' | 'chat' | 'anatomy' | 'symptom-explorer' | 'medication-explorer' | 'condition-simulator' | 'encyclopedia' | 'encyclopedia-entry' | 'body-centric' | 'settings';

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

interface BodyCentricHomeProps {
  dashboardData: DashboardData | null;
  isLoading: boolean;
  onNavigate: (view: View) => void;
  /** Called when "Ask AI" is triggered from a body region's radial menu, with region context string */
  onAskAI?: (regionContext: string, anatomyChatContext?: AnatomyChatContext) => void;
}

interface RegionSelectionState {
  regionId: string | null;
  regionName: string;
  screenPosition: { x: number; y: number };
  regionMapping: RegionMapping | null;
}

// ============================================
// Component
// ============================================

export function BodyCentricHome({
  dashboardData,
  isLoading,
  onNavigate,
  onAskAI,
}: BodyCentricHomeProps) {
  // Get demographics for body model customization
  const { demographics } = useUserDemographics();

  // Calculate body proportions from demographics (memoized)
  const bodyProportions = useMemo(() => {
    const demoData = demographics || DEFAULT_DEMOGRAPHICS;
    return calculateBodyProportions(demoData);
  }, [demographics]);

  // Selection state
  const [selection, setSelection] = useState<RegionSelectionState>({
    regionId: null,
    regionName: '',
    screenPosition: { x: 0, y: 0 },
    regionMapping: null,
  });

  // Menu and panel state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<ActivePanel>('none');

  // Health overlay hidden by default to maximize 3D model visibility
  const [showHealthOverlay, setShowHealthOverlay] = useState(false);

  // Detect iOS device (used for logging only, no longer forces simplified viewer)
  const isIOSDevice = typeof window !== 'undefined' &&
    (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
     window.location.origin.startsWith('tauri://') ||
     window.location.hostname === 'tauri.localhost');

  // Always start with the full AnatomyViewer (WebGL confirmed working on iOS)
  // User can toggle to simplified mode via the status indicator if needed
  const [useSimplifiedViewer, setUseSimplifiedViewer] = useState(false);

  // Refs
  const anatomyViewerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track component mount/unmount for debug overlay
  useEffect(() => {
    markComponentMounted('bodyCentricHome', true);
    addDebugLogEntry('info', `BodyCentricHome mounted (iOS: ${isIOSDevice}, simplified: ${useSimplifiedViewer})`);

    return () => {
      markComponentMounted('bodyCentricHome', false);
    };
  }, []);

  // Log viewer mode changes
  useEffect(() => {
    addDebugLogEntry('info', `Viewer mode: ${useSimplifiedViewer ? 'SIMPLIFIED' : 'FULL'}`);
  }, [useSimplifiedViewer]);

  // Handle radial menu action selection
  const handleMenuSelect = useCallback((action: ContextMenuAction) => {
    setIsMenuOpen(false);

    switch (action) {
      case 'medications':
        setActivePanel('medications');
        break;
      case 'symptoms':
        setActivePanel('symptoms');
        break;
      case 'encyclopedia':
        setActivePanel('encyclopedia');
        break;
      case 'chat':
        if (onAskAI && selection.regionId) {
          const regionName = selection.regionName || selection.regionId;
          const mapping = selection.regionMapping;

          // Build structured context from RegionMapping when available
          const structuredContext: AnatomyChatContext = {
            regionId: selection.regionId,
            regionName,
            bodySystems: mapping?.bodySystems ?? [],
            anatomyStructures: [
              ...(mapping?.organs ?? []),
              ...(mapping?.structures ?? []),
            ],
            symptoms: mapping?.commonSymptoms ?? [],
            conditions: [
              ...(mapping?.commonConditions ?? []),
              // Also include patient's active conditions that mention this region
              ...(dashboardData?.activeConditions
                ?.filter(c => c.name.toLowerCase().includes(selection.regionId!.toLowerCase()))
                .map(c => c.name) ?? []),
            ],
            specialties: mapping?.encyclopediaCategories ?? [],
            complexityLevel: 3,
            initialQuestion: `Tell me about the ${regionName}. What is its structure, function, and clinical significance?`,
          };

          onAskAI(
            `I selected the ${regionName} region. Tell me about conditions, anatomy, or physiology of this area.`,
            structuredContext,
          );
        } else {
          setActivePanel('chat');
        }
        break;
      case 'layers':
        setActivePanel('layers');
        // Also notify the anatomy viewer to open layer panel
        if (anatomyViewerRef.current?.enableLayers) {
          anatomyViewerRef.current.enableLayers(['all']);
        }
        break;
      case 'histology':
        setActivePanel('histology');
        break;
      case 'pathology':
        setActivePanel('pathology');
        break;
      case 'physiology':
        setActivePanel('physiology');
        break;
    }
  }, []);

  // Close menu
  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Handle 3D model structure selection - shows radial menu
  const handleStructureSelect = useCallback((
    structureId: string,
    structureName: string,
    screenPosition: { x: number; y: number }
  ) => {
    // Get region mapping for the selected structure
    const regionMapping = getRegionMapping(structureId) || null;

    // Update selection state
    setSelection({
      regionId: structureId,
      regionName: structureName,
      screenPosition,
      regionMapping,
    });

    // Open the radial menu at the click position
    setIsMenuOpen(true);
    setActivePanel('none'); // Close any open panel
  }, []);

  // Handle structure deselection
  const handleStructureDeselect = useCallback(() => {
    setIsMenuOpen(false);
    setActivePanel('none');
    setSelection({
      regionId: null,
      regionName: '',
      screenPosition: { x: 0, y: 0 },
      regionMapping: null,
    });
  }, []);

  // Close active panel
  const handlePanelClose = useCallback(() => {
    setActivePanel('none');
    setSelection(prev => ({ ...prev, regionId: null, regionName: '', regionMapping: null }));
  }, []);

  return (
    <div ref={containerRef} className="body-centric-home">
      {/* Minimal viewer status indicator with toggle - small, bottom-right, unobtrusive */}
      <button
        onClick={() => setUseSimplifiedViewer(!useSimplifiedViewer)}
        title={useSimplifiedViewer ? 'Switch to Full 3D Viewer' : 'Switch to Simplified Viewer'}
        style={{
          position: 'fixed',
          bottom: '56px',
          right: '12px',
          zIndex: 100,
          padding: '4px 8px',
          background: 'rgba(0, 0, 0, 0.35)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          backdropFilter: 'blur(4px)',
          color: 'rgba(255, 255, 255, 0.5)',
          fontSize: '9px',
          fontWeight: 500,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <span style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: useSimplifiedViewer ? '#f59e0b' : '#22c55e',
        }} />
        {useSimplifiedViewer ? 'Simple' : '3D'}
      </button>

      {/* Health overlay toggle button - top-right, small */}
      <button
        onClick={() => setShowHealthOverlay(!showHealthOverlay)}
        title={showHealthOverlay ? 'Hide health status' : 'Show health status'}
        style={{
          position: 'fixed',
          top: '12px',
          right: '12px',
          zIndex: 100,
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          background: showHealthOverlay ? 'rgba(34, 197, 94, 0.3)' : 'rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(6px)',
          color: showHealthOverlay ? 'rgba(134, 239, 172, 0.9)' : 'rgba(255, 255, 255, 0.6)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>

      {/* 3D Body Viewer - Takes full viewport */}
      <div className="body-viewer-container">
        <Suspense fallback={<BodyViewerLoading />}>
          {useSimplifiedViewer ? (
            <SimplifiedAnatomyViewer
              onBack={() => onNavigate('dashboard')}
              onStructureSelect={handleStructureSelect}
            />
          ) : (
            <AnatomyViewerErrorBoundary
              onFallbackToSimplified={() => {
                addDebugLogEntry('error', 'AnatomyViewer error boundary triggered - switching to SimplifiedAnatomyViewer');
                setUseSimplifiedViewer(true);
              }}
            >
              <AnatomyViewer
                ref={anatomyViewerRef}
                onBack={() => onNavigate('dashboard')}
                dashboardData={dashboardData}
                onStructureSelect={handleStructureSelect}
                onStructureDeselect={handleStructureDeselect}
                bodyProportions={bodyProportions}
              />
            </AnatomyViewerErrorBoundary>
          )}
        </Suspense>
      </div>

      {/* Health Status Overlay - Top of screen, hidden by default */}
      {showHealthOverlay && (
        <HealthStatusOverlay
          dashboardData={dashboardData}
          isLoading={isLoading}
          onVitalsClick={() => onNavigate('timeline')}
          onAlertsClick={() => onNavigate('dashboard')}
        />
      )}

      {/* Radial Context Menu - Appears on region selection */}
      <RadialContextMenu
        isOpen={isMenuOpen}
        regionId={selection.regionId}
        position={selection.screenPosition}
        onSelect={handleMenuSelect}
        onClose={handleMenuClose}
      />

      {/* Context Panels - Slide in from bottom/side */}
      {activePanel !== 'none' && selection.regionId && (
        <ContextPanel
          type={activePanel}
          regionId={selection.regionId}
          regionName={selection.regionName}
          regionMapping={selection.regionMapping}
          dashboardData={dashboardData}
          onClose={handlePanelClose}
          onNavigate={onNavigate}
        />
      )}

      {/* Quick Action Buttons - visible when no region is selected */}
      {!isMenuOpen && !selection.regionId && activePanel === 'none' && (
        <div className="body-centric-quick-actions" style={{
          position: 'fixed',
          bottom: '72px',
          left: '0',
          right: '0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 60,
          pointerEvents: 'none',
        }}>
          {/* Action button row */}
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '0 16px',
            pointerEvents: 'auto',
          }}>
            <button
              onClick={() => onNavigate('anatomy')}
              className="body-centric-action-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                background: 'rgba(59, 130, 246, 0.25)',
                border: '1px solid rgba(59, 130, 246, 0.35)',
                borderRadius: '20px',
                backdropFilter: 'blur(8px)',
                color: 'rgba(147, 197, 253, 0.95)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              aria-label="Explore Anatomy"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                <path d="M12 6v12M8 10c0-2 1.8-4 4-4s4 2 4 4"/>
                <circle cx="12" cy="16" r="2"/>
              </svg>
              Explore Anatomy
            </button>

            <button
              onClick={() => onNavigate('encyclopedia')}
              className="body-centric-action-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                background: 'rgba(168, 85, 247, 0.25)',
                border: '1px solid rgba(168, 85, 247, 0.35)',
                borderRadius: '20px',
                backdropFilter: 'blur(8px)',
                color: 'rgba(216, 180, 254, 0.95)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              aria-label="Encyclopedia"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              Encyclopedia
            </button>

            <button
              onClick={() => onNavigate('chat')}
              className="body-centric-action-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                background: 'rgba(34, 197, 94, 0.25)',
                border: '1px solid rgba(34, 197, 94, 0.35)',
                borderRadius: '20px',
                backdropFilter: 'blur(8px)',
                color: 'rgba(134, 239, 172, 0.95)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              aria-label="Ask AI"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Ask AI
            </button>
          </div>

          {/* Second row */}
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '0 16px',
            pointerEvents: 'auto',
          }}>
            <button
              onClick={() => onNavigate('symptom-explorer')}
              className="body-centric-action-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                background: 'rgba(249, 115, 22, 0.25)',
                border: '1px solid rgba(249, 115, 22, 0.35)',
                borderRadius: '20px',
                backdropFilter: 'blur(8px)',
                color: 'rgba(253, 186, 116, 0.95)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              aria-label="Symptoms"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
              Symptoms
            </button>

            <button
              onClick={() => onNavigate('medication-explorer')}
              className="body-centric-action-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                background: 'rgba(14, 165, 233, 0.25)',
                border: '1px solid rgba(14, 165, 233, 0.35)',
                borderRadius: '20px',
                backdropFilter: 'blur(8px)',
                color: 'rgba(125, 211, 252, 0.95)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              aria-label="Medications"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.5 20.5L3.5 13.5C2.5 12.5 2.5 10.5 3.5 9.5L9.5 3.5C10.5 2.5 12.5 2.5 13.5 3.5L20.5 10.5C21.5 11.5 21.5 13.5 20.5 14.5L14.5 20.5C13.5 21.5 11.5 21.5 10.5 20.5Z"/>
                <line x1="8.5" y1="8.5" x2="15.5" y2="15.5"/>
              </svg>
              Medications
            </button>

            <button
              onClick={() => onNavigate('dashboard')}
              className="body-centric-action-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                background: 'rgba(236, 72, 153, 0.25)',
                border: '1px solid rgba(236, 72, 153, 0.35)',
                borderRadius: '20px',
                backdropFilter: 'blur(8px)',
                color: 'rgba(249, 168, 212, 0.95)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              aria-label="My Health"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              My Health
            </button>
          </div>

          {/* Hint text */}
          <div style={{
            padding: '4px 14px',
            color: 'rgba(255, 255, 255, 0.35)',
            fontSize: '11px',
            pointerEvents: 'none',
          }}>
            <span>or tap any body region to explore</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// Context Panel Component
// ============================================

interface ContextPanelProps {
  type: ActivePanel;
  regionId: string;
  regionName: string;
  regionMapping: RegionMapping | null;
  dashboardData: DashboardData | null;
  onClose: () => void;
  onNavigate: (view: View) => void;
}

function ContextPanel({
  type,
  regionId,
  regionName,
  regionMapping,
  dashboardData,
  onClose,
  onNavigate,
}: ContextPanelProps) {
  const renderContent = () => {
    switch (type) {
      case 'medications':
        return (
          <RegionMedicationsContent
            regionId={regionId}
            regionName={regionName}
            regionMapping={regionMapping}
            dashboardData={dashboardData}
            onViewAll={() => onNavigate('medication-explorer')}
          />
        );

      case 'symptoms':
        return (
          <RegionSymptomsContent
            regionId={regionId}
            regionName={regionName}
            regionMapping={regionMapping}
            dashboardData={dashboardData}
            onAddSymptom={() => onNavigate('body')}
            onViewHistory={() => onNavigate('timeline')}
          />
        );

      case 'encyclopedia':
        return (
          <RegionEncyclopediaContent
            regionId={regionId}
            regionName={regionName}
            regionMapping={regionMapping}
            onViewEntry={() => onNavigate('encyclopedia')}
          />
        );

      case 'chat':
        return (
          <Suspense fallback={<PanelLoading />}>
            <AnatomyChatPanel
              structureId={regionId}
              structureName={regionName}
              dashboardData={dashboardData}
              onClose={onClose}
            />
          </Suspense>
        );

      case 'layers':
        return (
          <RegionLayersContent
            regionId={regionId}
            regionName={regionName}
            regionMapping={regionMapping}
          />
        );

      case 'histology':
        return (
          <RegionHistologyContent
            regionId={regionId}
            regionName={regionName}
            regionMapping={regionMapping}
          />
        );

      case 'pathology':
        return (
          <RegionPathologyContent
            regionId={regionId}
            regionName={regionName}
            regionMapping={regionMapping}
          />
        );

      case 'physiology':
        return (
          <RegionPhysiologyContent
            regionId={regionId}
            regionName={regionName}
            regionMapping={regionMapping}
          />
        );

      default:
        return null;
    }
  };

  const getPanelTitle = () => {
    const titles: Record<ActivePanel, string> = {
      none: '',
      medications: 'Medications',
      symptoms: 'Symptoms',
      encyclopedia: 'Encyclopedia',
      chat: 'Ask AI',
      layers: 'Anatomical Layers',
      histology: 'Histology',
      pathology: 'Pathology',
      physiology: 'Physiology',
    };
    return titles[type];
  };

  return (
    <div className={`context-panel context-panel-${type}`}>
      <div className="context-panel-header">
        <div className="context-panel-title">
          <span className="panel-region">{regionName}</span>
          <span className="panel-type">{getPanelTitle()}</span>
        </div>
        <button
          className="context-panel-close"
          onClick={onClose}
          aria-label="Close panel"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6L18 18" />
          </svg>
        </button>
      </div>
      <div className="context-panel-content">
        {renderContent()}
      </div>
    </div>
  );
}

// ============================================
// Panel Content Components
// ============================================

interface RegionContentProps {
  regionId: string;
  regionName: string;
  regionMapping: RegionMapping | null;
}

function RegionMedicationsContent({
  regionId: _regionId,
  regionName,
  regionMapping,
  dashboardData,
  onViewAll,
}: RegionContentProps & { dashboardData: DashboardData | null; onViewAll: () => void }) {
  const medications = dashboardData?.currentMedications ?? [];
  const targets = regionMapping?.medicationTargets ?? [];

  // Filter medications that affect this region
  const relevantMeds = medications.filter(med =>
    targets.some(target =>
      med.name.toLowerCase().includes(target) ||
      (med.indication && med.indication.toLowerCase().includes(target))
    )
  );

  return (
    <div className="region-medications-content">
      {relevantMeds.length > 0 ? (
        <>
          <p className="content-intro">
            You are taking {relevantMeds.length} medication{relevantMeds.length > 1 ? 's' : ''} that affect{relevantMeds.length === 1 ? 's' : ''} the {regionName.toLowerCase()}.
          </p>
          <div className="medications-list">
            {relevantMeds.map((med, idx) => (
              <div key={med.id ?? `med-${idx}`} className="medication-card">
                <div className="med-name">{med.name}</div>
                <div className="med-dose">{med.dosage}</div>
                {med.indication && (
                  <div className="med-indication">For: {med.indication}</div>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="content-empty">
          <p>No medications currently affecting the {regionName.toLowerCase()}.</p>
          {targets.length > 0 && (
            <p className="content-hint">
              Common medication targets for this region include: {targets.slice(0, 3).join(', ')}.
            </p>
          )}
        </div>
      )}

      <button className="content-action" onClick={onViewAll}>
        View All Medications
      </button>
    </div>
  );
}

function RegionSymptomsContent({
  regionId,
  regionName,
  regionMapping,
  dashboardData,
  onAddSymptom,
  onViewHistory,
}: RegionContentProps & {
  dashboardData: DashboardData | null;
  onAddSymptom: () => void;
  onViewHistory: () => void;
}) {
  const symptoms = dashboardData?.recentSymptoms ?? [];
  const commonSymptoms = regionMapping?.commonSymptoms ?? [];

  // Filter symptoms for this region
  const regionSymptoms = symptoms.filter(s =>
    s.location?.toLowerCase().includes(regionId.toLowerCase()) ||
    commonSymptoms.some(cs => s.description.toLowerCase().includes(cs.replace('-', ' ')))
  );

  return (
    <div className="region-symptoms-content">
      {regionSymptoms.length > 0 ? (
        <>
          <p className="content-intro">
            Recent symptoms in the {regionName.toLowerCase()} region:
          </p>
          <div className="symptoms-list">
            {regionSymptoms.map((symptom, idx) => (
              <div key={symptom.id ?? `symptom-${idx}`} className="symptom-card">
                <div className="symptom-desc">{symptom.description}</div>
                <div className="symptom-meta">
                  <span className={`severity severity-${Math.ceil(symptom.severity / 3)}`}>
                    Severity: {symptom.severity}/10
                  </span>
                  <span className="symptom-date">{symptom.onsetDate}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="content-empty">
          <p>No recent symptoms logged for the {regionName.toLowerCase()}.</p>
        </div>
      )}

      {commonSymptoms.length > 0 && (
        <div className="common-symptoms">
          <span className="subsection-title">Common symptoms in this region:</span>
          <div className="symptom-tags">
            {commonSymptoms.slice(0, 5).map(symptom => (
              <span key={symptom} className="symptom-tag">
                {symptom.replace(/-/g, ' ')}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="content-actions">
        <button className="content-action primary" onClick={onAddSymptom}>
          Log New Symptom
        </button>
        <button className="content-action secondary" onClick={onViewHistory}>
          View History
        </button>
      </div>
    </div>
  );
}

function RegionEncyclopediaContent({
  regionId: _regionId,
  regionName,
  regionMapping,
  onViewEntry,
}: RegionContentProps & { onViewEntry: (entryId: string) => void }) {
  const categories = regionMapping?.encyclopediaCategories ?? [];
  const conditions = regionMapping?.commonConditions ?? [];
  const organs = regionMapping?.organs ?? [];

  return (
    <div className="region-encyclopedia-content">
      <p className="content-intro">
        Learn about the {regionName.toLowerCase()} and related health topics.
      </p>

      {organs.length > 0 && (
        <div className="encyclopedia-section">
          <span className="subsection-title">Organs & Structures</span>
          <div className="entry-list">
            {organs.slice(0, 5).map(organ => (
              <button
                key={organ}
                className="entry-button"
                onClick={() => onViewEntry(organ.toLowerCase().replace(/ /g, '-'))}
              >
                {organ}
              </button>
            ))}
          </div>
        </div>
      )}

      {conditions.length > 0 && (
        <div className="encyclopedia-section">
          <span className="subsection-title">Common Conditions</span>
          <div className="entry-list">
            {conditions.slice(0, 5).map(condition => (
              <button
                key={condition}
                className="entry-button"
                onClick={() => onViewEntry(condition.toLowerCase().replace(/ /g, '-'))}
              >
                {condition}
              </button>
            ))}
          </div>
        </div>
      )}

      {categories.length > 0 && (
        <div className="encyclopedia-section">
          <span className="subsection-title">Related Specialties</span>
          <div className="category-tags">
            {categories.map(category => (
              <span key={category} className="category-tag">
                {category}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function RegionLayersContent({ regionId: _regionId, regionName, regionMapping }: RegionContentProps) {
  const layers = regionMapping?.layers ?? [];

  return (
    <div className="region-layers-content">
      <p className="content-intro">
        Explore the anatomical layers of the {regionName.toLowerCase()}.
      </p>

      <div className="layers-list">
        {layers.map((layer, index) => (
          <div key={layer.id} className="layer-card">
            <div className="layer-depth">
              <span className="depth-indicator" style={{ '--depth': index } as React.CSSProperties} />
              <span className="depth-label">Depth {layer.depth}</span>
            </div>
            <div className="layer-info">
              <span className="layer-name">{layer.name}</span>
              <span className="layer-desc">{layer.description}</span>
              {layer.structures.length > 0 && (
                <div className="layer-structures">
                  {layer.structures.slice(0, 3).map(s => (
                    <span key={s} className="structure-tag">{s}</span>
                  ))}
                  {layer.structures.length > 3 && (
                    <span className="structures-more">+{layer.structures.length - 3}</span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RegionHistologyContent({ regionId: _regionId, regionName, regionMapping }: RegionContentProps) {
  const histologyTypes = regionMapping?.histologyTypes ?? [];

  return (
    <div className="region-histology-content">
      <p className="content-intro">
        View microscopic tissue detail for the {regionName.toLowerCase()}.
      </p>

      {histologyTypes.length > 0 ? (
        <div className="histology-list">
          {histologyTypes.map(type => (
            <button key={type} className="histology-card">
              <div className="histology-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21L16.65 16.65" />
                  <circle cx="11" cy="11" r="3" />
                </svg>
              </div>
              <span className="histology-name">{type.replace(/-/g, ' ')}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="content-empty">
          <p>Histology data not yet available for this region.</p>
        </div>
      )}
    </div>
  );
}

function RegionPathologyContent({ regionId: _regionId, regionName, regionMapping }: RegionContentProps) {
  const conditions = regionMapping?.commonConditions ?? [];
  const pathologyTopics = regionMapping?.pathologyTopics ?? [];

  return (
    <div className="region-pathology-content">
      <p className="content-intro">
        Understand disease mechanisms affecting the {regionName.toLowerCase()}.
      </p>

      {pathologyTopics.length > 0 && (
        <div className="pathology-section">
          <span className="subsection-title">Pathology Topics</span>
          <div className="topic-list">
            {pathologyTopics.map(topic => (
              <button key={topic} className="topic-card">
                <span className="topic-name">{topic.replace(/-/g, ' ')}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {conditions.length > 0 && (
        <div className="pathology-section">
          <span className="subsection-title">Common Conditions</span>
          <div className="condition-list">
            {conditions.slice(0, 5).map(condition => (
              <div key={condition} className="condition-card">
                <span className="condition-name">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function RegionPhysiologyContent({ regionId: _regionId, regionName, regionMapping }: RegionContentProps) {
  const physiologyTopics = regionMapping?.physiologyTopics ?? [];
  const bodySystems = regionMapping?.bodySystems ?? [];

  return (
    <div className="region-physiology-content">
      <p className="content-intro">
        Learn how the {regionName.toLowerCase()} functions in your body.
      </p>

      {physiologyTopics.length > 0 && (
        <div className="physiology-section">
          <span className="subsection-title">Physiological Processes</span>
          <div className="topic-list">
            {physiologyTopics.map(topic => (
              <button key={topic} className="topic-card">
                <span className="topic-name">{topic.replace(/-/g, ' ')}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {bodySystems.length > 0 && (
        <div className="physiology-section">
          <span className="subsection-title">Body Systems</span>
          <div className="system-tags">
            {bodySystems.map(system => (
              <span key={system} className="system-tag">{system}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// Loading States
// ============================================

function BodyViewerLoading() {
  // Log when this component renders - helps trace Suspense behavior
  console.log('[BodyCentricHome] BodyViewerLoading fallback is rendering');
  addDebugLogEntry('info', 'Suspense fallback: BodyViewerLoading is rendering');

  return <ModelLoadingScreen />;
}

function PanelLoading() {
  return (
    <div className="panel-loading">
      <div className="loading-spinner" />
    </div>
  );
}

// ============================================
// Exports
// ============================================

export default BodyCentricHome;
