/**
 * Body-Centric Home
 *
 * The main view of the app where the 3D body model is the central hub.
 * Users select body regions to access contextual health information.
 */

import { useState, useCallback, useRef, Suspense, lazy, useMemo } from 'react';
import { RadialContextMenu, type ContextMenuAction } from './ui/RadialContextMenu';
import { HealthStatusOverlay } from './ui/HealthStatusOverlay';
import { useUserDemographics, DEFAULT_DEMOGRAPHICS } from './hooks/useUserDemographics';
import { getRegionMapping, type RegionMapping } from './utils/regionToSystemMapper';
import { calculateBodyProportions } from './utils/bodyProportionCalculator';

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
const AnatomyChatPanel = lazy(() => import('./AnatomyChatPanel').then(m => ({ default: m.AnatomyChatPanel })));

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
type View = 'dashboard' | 'timeline' | 'body' | 'chat' | 'anatomy' | 'symptom-explorer' | 'medication-explorer' | 'condition-simulator' | 'encyclopedia' | 'encyclopedia-entry' | 'body-centric';

interface BodyCentricHomeProps {
  dashboardData: DashboardData | null;
  isLoading: boolean;
  onNavigate: (view: View) => void;
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

  // Refs
  const anatomyViewerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
        setActivePanel('chat');
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
      {/* 3D Body Viewer - Takes full viewport */}
      <div className="body-viewer-container">
        <Suspense fallback={<BodyViewerLoading />}>
          <AnatomyViewer
            ref={anatomyViewerRef}
            onBack={() => onNavigate('dashboard')}
            dashboardData={dashboardData}
            onStructureSelect={handleStructureSelect}
            onStructureDeselect={handleStructureDeselect}
            bodyProportions={bodyProportions}
          />
        </Suspense>
      </div>

      {/* Health Status Overlay - Top of screen */}
      <HealthStatusOverlay
        dashboardData={dashboardData}
        isLoading={isLoading}
        onVitalsClick={() => onNavigate('timeline')}
        onAlertsClick={() => onNavigate('dashboard')}
      />

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

      {/* Quick navigation hint */}
      {!isMenuOpen && !selection.regionId && (
        <div className="body-centric-hint">
          <span>Tap any body region to explore</span>
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
            {relevantMeds.map(med => (
              <div key={med.id} className="medication-card">
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
            {regionSymptoms.map(symptom => (
              <div key={symptom.id} className="symptom-card">
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
  return (
    <div className="body-viewer-loading">
      <div className="loading-spinner" />
      <span>Loading body model...</span>
    </div>
  );
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
