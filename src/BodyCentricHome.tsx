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
  retrieveContentByStructure,
  searchHistology,
  searchPathology,
  searchPhysiology,
  retrieveContentDocument,
  type ComplexityLevel,
} from './contentRetrieval';
import { ContentViewer, type ContentDocument } from './ContentViewer';
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

// Lazy load heavy components
const AnatomyViewer = lazy(() => import('./AnatomyViewer').then(m => ({ default: m.AnatomyViewer })));
const SimplifiedAnatomyViewer = lazy(() => import('./SimplifiedAnatomyViewer').then(m => ({ default: m.SimplifiedAnatomyViewer })));
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
type View = 'dashboard' | 'timeline' | 'body' | 'chat' | 'symptom-explorer' | 'medication-explorer' | 'condition-simulator' | 'encyclopedia' | 'encyclopedia-entry' | 'body-centric' | 'settings';

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
  /** Called when content is selected to be displayed in the ContentViewer */
  onContentSelect?: (content: ContentDocument) => void;
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
  onContentSelect: externalContentSelect,
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

  // Content display state
  const [selectedContent, setSelectedContent] = useState<ContentDocument | null>(null);
  const [contentLoading, setContentLoading] = useState(false);
  const [complexityLevel, setComplexityLevel] = useState<ComplexityLevel>(3);

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
    setSelectedContent(null);
  }, []);

  // Load content for a region
  const loadRegionContent = useCallback(async (regionId: string, regionName: string) => {
    setContentLoading(true);
    try {
      const content = await retrieveContentByStructure(regionId, complexityLevel);
      if (content) {
        setSelectedContent(content);
      }
    } catch (error) {
      console.error('[BodyCentricHome] Error loading content:', error);
    } finally {
      setContentLoading(false);
    }
  }, [complexityLevel]);

  // Handle content selection from panels
  const handleContentSelect = useCallback((content: ContentDocument) => {
    if (externalContentSelect) {
      externalContentSelect(content);
    } else {
      setSelectedContent(content);
    }
  }, [externalContentSelect]);

  // Handle complexity level change
  const handleComplexityChange = useCallback((level: ComplexityLevel) => {
    setComplexityLevel(level);
    // Reload content if currently displayed
    if (selectedContent && selection.regionId) {
      loadRegionContent(selection.regionId, selection.regionName);
    }
  }, [selectedContent, selection.regionId, selection.regionName, loadRegionContent]);

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
          onContentSelect={handleContentSelect}
          complexityLevel={complexityLevel}
        />
      )}

      {/* Content Viewer - Displays selected encyclopedia content */}
      {selectedContent && (
        <div className="content-viewer-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 200,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
        }}>
          <div style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 201,
            display: 'flex',
            gap: '8px',
          }}>
            {/* Complexity Level Selector */}
            <select
              value={complexityLevel}
              onChange={(e) => handleComplexityChange(Number(e.target.value) as ComplexityLevel)}
              style={{
                padding: '8px 12px',
                background: 'rgba(30, 30, 30, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              <option value={1}>8th Grade</option>
              <option value={2}>High School</option>
              <option value={3}>College</option>
              <option value={4}>Graduate</option>
              <option value={5}>MD Level</option>
            </select>
            <button
              onClick={() => setSelectedContent(null)}
              style={{
                padding: '8px 16px',
                background: 'rgba(30, 30, 30, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
          <div style={{
            position: 'absolute',
            top: '72px',
            left: '16px',
            right: '16px',
            bottom: '16px',
            overflow: 'auto',
          }}>
            <ContentViewer
              document={selectedContent}
              onClose={() => setSelectedContent(null)}
            />
          </div>
        </div>
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
  onContentSelect: (content: ContentDocument) => void;
  complexityLevel: ComplexityLevel;
}

function ContextPanel({
  type,
  regionId,
  regionName,
  regionMapping,
  dashboardData,
  onClose,
  onNavigate,
  onContentSelect,
  complexityLevel,
}: ContextPanelProps) {
  const handleViewEncyclopediaEntry = (entryId: string) => {
    sessionStorage.setItem('soma_encyclopedia_entry_id', entryId);
    onNavigate('encyclopedia-entry');
  };

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
            onViewEntry={handleViewEncyclopediaEntry}
            onContentSelect={onContentSelect}
            complexityLevel={complexityLevel}
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
            onNavigate={onNavigate}
            onContentSelect={onContentSelect}
            complexityLevel={complexityLevel}
          />
        );

      case 'pathology':
        return (
          <RegionPathologyContent
            regionId={regionId}
            regionName={regionName}
            regionMapping={regionMapping}
            onViewEncyclopediaEntry={handleViewEncyclopediaEntry}
            onContentSelect={onContentSelect}
            complexityLevel={complexityLevel}
          />
        );

      case 'physiology':
        return (
          <RegionPhysiologyContent
            regionId={regionId}
            regionName={regionName}
            regionMapping={regionMapping}
            onContentSelect={onContentSelect}
            complexityLevel={complexityLevel}
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
  onNavigate?: (view: View) => void;
  onViewEncyclopediaEntry?: (entryId: string) => void;
  onContentSelect?: (content: ContentDocument) => void;
  complexityLevel?: ComplexityLevel;
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
  regionId,
  regionName,
  regionMapping,
  onViewEntry,
  onContentSelect,
  complexityLevel = 3,
}: RegionContentProps & { onViewEntry: (entryId: string) => void }) {
  const [loading, setLoading] = useState(false);
  const categories = regionMapping?.encyclopediaCategories ?? [];
  const conditions = regionMapping?.commonConditions ?? [];
  const organs = regionMapping?.organs ?? [];

  const handleRegionOverviewClick = async () => {
    if (!onContentSelect) return;
    setLoading(true);
    try {
      const content = await retrieveContentByStructure(regionId, complexityLevel);
      if (content) {
        onContentSelect(content);
      }
    } catch (error) {
      console.error('[RegionEncyclopediaContent] Error loading content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOrganClick = async (organ: string) => {
    if (!onContentSelect) return;
    setLoading(true);
    try {
      const content = await retrieveContentDocument(organ, { level: complexityLevel });
      if (content) {
        onContentSelect(content);
      } else {
        // Fallback to entry ID navigation
        onViewEntry(organ.toLowerCase().replace(/ /g, '-'));
      }
    } catch (error) {
      console.error('[RegionEncyclopediaContent] Error loading organ content:', error);
      onViewEntry(organ.toLowerCase().replace(/ /g, '-'));
    } finally {
      setLoading(false);
    }
  };

  const handleConditionClick = async (condition: string) => {
    if (!onContentSelect) return;
    setLoading(true);
    try {
      const content = await retrieveContentDocument(condition, {
        type: 'condition',
        level: complexityLevel,
      });
      if (content) {
        onContentSelect(content);
      } else {
        onViewEntry(condition.toLowerCase().replace(/ /g, '-'));
      }
    } catch (error) {
      console.error('[RegionEncyclopediaContent] Error loading condition content:', error);
      onViewEntry(condition.toLowerCase().replace(/ /g, '-'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="region-encyclopedia-content">
      <p className="content-intro">
        Learn about the {regionName.toLowerCase()} and related health topics.
      </p>

      {/* Region Overview Button */}
      <div className="encyclopedia-section">
        <button
          className="entry-button primary"
          onClick={handleRegionOverviewClick}
          disabled={loading}
          style={{
            width: '100%',
            padding: '12px 16px',
            background: 'linear-gradient(135deg, #4a9eff 0%, #7c3aed 100%)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontSize: '14px',
            fontWeight: 600,
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
            marginBottom: '16px',
          }}
        >
          {loading ? 'Loading...' : `View ${regionName} Overview`}
        </button>
      </div>

      {organs.length > 0 && (
        <div className="encyclopedia-section">
          <span className="subsection-title">Organs & Structures</span>
          <div className="entry-list">
            {organs.slice(0, 5).map(organ => (
              <button
                key={organ}
                className="entry-button"
                onClick={() => handleOrganClick(organ)}
                disabled={loading}
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
                onClick={() => handleConditionClick(condition)}
                disabled={loading}
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

function RegionHistologyContent({
  regionId: _regionId,
  regionName,
  regionMapping,
  onNavigate,
  onContentSelect,
  complexityLevel = 3,
}: RegionContentProps) {
  const [loading, setLoading] = useState<string | null>(null);
  const histologyTypes = regionMapping?.histologyTypes ?? [];

  const handleHistologyClick = async (type: string) => {
    if (onContentSelect) {
      setLoading(type);
      try {
        const content = await searchHistology(type, complexityLevel);
        if (content) {
          onContentSelect(content);
        } else {
          // Fallback to session storage and navigation
          sessionStorage.setItem('soma_histology_type', type);
          sessionStorage.setItem('soma_histology_region', regionName);
          onNavigate?.('body-centric');
        }
      } catch (error) {
        console.error('[RegionHistologyContent] Error loading histology:', error);
        sessionStorage.setItem('soma_histology_type', type);
        sessionStorage.setItem('soma_histology_region', regionName);
        onNavigate?.('body-centric');
      } finally {
        setLoading(null);
      }
    } else {
      // Fallback behavior
      sessionStorage.setItem('soma_histology_type', type);
      sessionStorage.setItem('soma_histology_region', regionName);
      onNavigate?.('body-centric');
    }
  };

  return (
    <div className="region-histology-content">
      <p className="content-intro">
        View microscopic tissue detail for the {regionName.toLowerCase()}.
      </p>

      {histologyTypes.length > 0 ? (
        <div className="histology-list">
          {histologyTypes.map(type => (
            <button
              key={type}
              className="histology-card"
              onClick={() => handleHistologyClick(type)}
              disabled={loading === type}
            >
              <div className="histology-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21L16.65 16.65" />
                  <circle cx="11" cy="11" r="3" />
                </svg>
              </div>
              <span className="histology-name">
                {loading === type ? 'Loading...' : type.replace(/-/g, ' ')}
              </span>
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

function RegionPathologyContent({
  regionId: _regionId,
  regionName,
  regionMapping,
  onViewEncyclopediaEntry,
  onContentSelect,
  complexityLevel = 3,
}: RegionContentProps) {
  const [loading, setLoading] = useState<string | null>(null);
  const conditions = regionMapping?.commonConditions ?? [];
  const pathologyTopics = regionMapping?.pathologyTopics ?? [];

  const handleConditionClick = async (condition: string) => {
    if (onContentSelect) {
      setLoading(condition);
      try {
        const content = await searchPathology(condition, complexityLevel);
        if (content) {
          onContentSelect(content);
        } else {
          // Fallback to entry ID navigation
          const entryId = condition.toLowerCase().replace(/\s+/g, '-');
          onViewEncyclopediaEntry?.(entryId);
        }
      } catch (error) {
        console.error('[RegionPathologyContent] Error loading pathology:', error);
        const entryId = condition.toLowerCase().replace(/\s+/g, '-');
        onViewEncyclopediaEntry?.(entryId);
      } finally {
        setLoading(null);
      }
    } else {
      const entryId = condition.toLowerCase().replace(/\s+/g, '-');
      onViewEncyclopediaEntry?.(entryId);
    }
  };

  const handleTopicClick = async (topic: string) => {
    if (onContentSelect) {
      setLoading(topic);
      try {
        const content = await searchPathology(topic, complexityLevel);
        if (content) {
          onContentSelect(content);
        } else {
          const entryId = topic.toLowerCase().replace(/\s+/g, '-');
          onViewEncyclopediaEntry?.(entryId);
        }
      } catch (error) {
        console.error('[RegionPathologyContent] Error loading topic:', error);
        const entryId = topic.toLowerCase().replace(/\s+/g, '-');
        onViewEncyclopediaEntry?.(entryId);
      } finally {
        setLoading(null);
      }
    } else {
      const entryId = topic.toLowerCase().replace(/\s+/g, '-');
      onViewEncyclopediaEntry?.(entryId);
    }
  };

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
              <button
                key={topic}
                className="topic-card"
                onClick={() => handleTopicClick(topic)}
                disabled={loading === topic}
              >
                <span className="topic-name">
                  {loading === topic ? 'Loading...' : topic.replace(/-/g, ' ')}
                </span>
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
              <button
                key={condition}
                className="condition-card"
                onClick={() => handleConditionClick(condition)}
                disabled={loading === condition}
              >
                <span className="condition-name">
                  {loading === condition ? 'Loading...' : condition}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function RegionPhysiologyContent({
  regionId: _regionId,
  regionName,
  regionMapping,
  onContentSelect,
  complexityLevel = 3,
}: RegionContentProps) {
  const [loading, setLoading] = useState<string | null>(null);
  const physiologyTopics = regionMapping?.physiologyTopics ?? [];
  const bodySystems = regionMapping?.bodySystems ?? [];

  const handleTopicClick = async (topic: string) => {
    if (!onContentSelect) return;

    setLoading(topic);
    try {
      const content = await searchPhysiology(topic, complexityLevel);
      if (content) {
        onContentSelect(content);
      }
    } catch (error) {
      console.error('[RegionPhysiologyContent] Error loading physiology:', error);
    } finally {
      setLoading(null);
    }
  };

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
              <button
                key={topic}
                className="topic-card"
                onClick={() => handleTopicClick(topic)}
                disabled={loading === topic}
              >
                <span className="topic-name">
                  {loading === topic ? 'Loading...' : topic.replace(/-/g, ' ')}
                </span>
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
  // Log only once on mount to avoid infinite loop
  useEffect(() => {
    console.log('[BodyCentricHome] BodyViewerLoading fallback is rendering');
    addDebugLogEntry('info', 'Suspense fallback: BodyViewerLoading is rendering');
  }, []);

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
