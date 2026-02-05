import { useState, useEffect, useCallback, useMemo } from 'react';
import { invoke } from './tauri-invoke';
import { LayerPanel, useLayerState } from './LayerPanel';
import { SelectionManager } from './SelectionManager';
import { StructureInfoPanel } from './StructureInfoPanel';
import { AnatomyChatPanel } from './AnatomyChatPanel';
import { type DashboardData } from './App';
import { ComplexityLevel } from './ComplexityLevel';
import { ContentViewer } from './ContentViewer';

// Lazy load the actual 3D viewer to prevent blocking
import { AnatomyViewer } from './AnatomyViewer';

interface AnatomyLaunchpadProps {
  onBack: () => void;
  dashboardData: DashboardData | null;
}

type ViewMode = 'explore' | 'learn' | 'clinical';
type PanelView = 'overview' | 'conditions' | 'labs' | 'education' | 'chat';

interface BodyRegion {
  id: string;
  name: string;
  systems: string[];
  commonConditions: string[];
  relevantLabs: string[];
  relatedModules: string[];
  description: string;
}

interface QuickStat {
  label: string;
  value: string | number;
  trend?: 'up' | 'down' | 'stable';
  status?: 'normal' | 'warning' | 'critical';
}

const BODY_REGIONS: BodyRegion[] = [
  {
    id: 'head',
    name: 'Head & Brain',
    systems: ['Nervous', 'Sensory', 'Integumentary'],
    commonConditions: ['Migraine', 'Tension headache', 'Sinusitis', 'Vertigo'],
    relevantLabs: ['CBC', 'Inflammatory markers', 'Hormone panel'],
    relatedModules: ['neurology-headache-comprehensive'],
    description: 'Central nervous system control center and sensory processing',
  },
  {
    id: 'chest',
    name: 'Chest & Thorax',
    systems: ['Cardiovascular', 'Respiratory', 'Skeletal'],
    commonConditions: ['Hypertension', 'Asthma', 'GERD', 'Angina'],
    relevantLabs: ['Lipid panel', 'BNP', 'Troponin', 'CBC'],
    relatedModules: ['cardiology-hypertension-comprehensive', 'gastro-gerd-comprehensive'],
    description: 'Heart, lungs, and major blood vessels',
  },
  {
    id: 'abdomen',
    name: 'Abdomen',
    systems: ['Digestive', 'Urinary', 'Endocrine', 'Reproductive'],
    commonConditions: ['GERD', 'IBS', 'Diabetes', 'Kidney disease'],
    relevantLabs: ['Comprehensive Metabolic Panel', 'HbA1c', 'Lipid panel', 'CBC'],
    relatedModules: ['diabetes-type-2-comprehensive', 'gastro-gerd-comprehensive', 'lab-cbc-interpretation'],
    description: 'Digestive organs, kidneys, and endocrine glands',
  },
  {
    id: 'leftArm',
    name: 'Left Arm',
    systems: ['Muscular', 'Skeletal', 'Cardiovascular', 'Nervous'],
    commonConditions: ['Carpal tunnel', 'Tendonitis', 'Lymphedema'],
    relevantLabs: ['Nerve conduction studies', 'Inflammatory markers'],
    relatedModules: [],
    description: 'Upper extremity with cardiac referral patterns',
  },
  {
    id: 'rightArm',
    name: 'Right Arm',
    systems: ['Muscular', 'Skeletal', 'Cardiovascular', 'Nervous'],
    commonConditions: ['Carpal tunnel', 'Tendonitis', 'Peripheral neuropathy'],
    relevantLabs: ['Nerve conduction studies', 'Glucose'],
    relatedModules: [],
    description: 'Upper extremity motor and sensory function',
  },
  {
    id: 'leftLeg',
    name: 'Left Leg',
    systems: ['Muscular', 'Skeletal', 'Cardiovascular', 'Lymphatic'],
    commonConditions: ['DVT', 'Varicose veins', 'Peripheral artery disease'],
    relevantLabs: ['D-dimer', 'Lipid panel'],
    relatedModules: [],
    description: 'Lower extremity circulation and mobility',
  },
  {
    id: 'rightLeg',
    name: 'Right Leg',
    systems: ['Muscular', 'Skeletal', 'Cardiovascular', 'Lymphatic'],
    commonConditions: ['DVT', 'Varicose veins', 'Peripheral artery disease'],
    relevantLabs: ['D-dimer', 'Lipid panel'],
    relatedModules: [],
    description: 'Lower extremity circulation and mobility',
  },
];

// Get user's labs filtered by relevance
function getRelevantUserLabs(dashboardData: DashboardData | null, region: BodyRegion): QuickStat[] {
  if (!dashboardData?.recentLabs) return [];
  
  const stats: QuickStat[] = [];
  
  // Map common lab patterns to regions
  const labMap: Record<string, string[]> = {
    'chest': ['Cholesterol', 'LDL', 'HDL', 'Triglycerides', 'BNP', 'Troponin'],
    'abdomen': ['Glucose', 'Hemoglobin A1C', 'Creatinine', 'BUN', 'ALT', 'AST'],
    'head': ['CBC', 'CRP', 'ESR'],
  };
  
  const relevantTests = labMap[region.id] || [];
  
  dashboardData.recentLabs.forEach(lab => {
    if (relevantTests.some(test => lab.testName.toLowerCase().includes(test.toLowerCase()))) {
      stats.push({
        label: lab.testName,
        value: typeof lab.value === 'number' ? lab.value.toFixed(1) : lab.value,
        trend: lab.trend || 'stable',
        status: lab.status === 'critical' ? 'critical' : lab.status === 'abnormal' ? 'warning' : 'normal',
      });
    }
  });
  
  return stats.slice(0, 4);
}

// Get user's conditions for region
function getRegionConditions(dashboardData: DashboardData | null, region: BodyRegion): string[] {
  if (!dashboardData?.activeConditions) return [];
  
  const conditionMap: Record<string, string[]> = {
    'head': ['migraine', 'headache', 'vertigo', 'sinus'],
    'chest': ['hypertension', 'heart', 'asthma', 'gerd', 'reflux'],
    'abdomen': ['diabetes', 'gerd', 'reflux', 'kidney', 'liver', 'ibs'],
    'leftArm': ['carpal', 'neuropathy'],
    'rightArm': ['carpal', 'neuropathy'],
    'leftLeg': ['dvt', 'pad', 'varicose'],
    'rightLeg': ['dvt', 'pad', 'varicose'],
  };
  
  const keywords = conditionMap[region.id] || [];
  
  return dashboardData.activeConditions
    .filter(c => keywords.some(k => c.name.toLowerCase().includes(k)))
    .map(c => c.name)
    .slice(0, 3);
}

export function AnatomyLaunchpad({ onBack, dashboardData }: AnatomyLaunchpadProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('explore');
  const [selectedRegion, setSelectedRegion] = useState<BodyRegion | null>(null);
  const [activePanel, setActivePanel] = useState<PanelView>('overview');
  const [complexityLevel, setComplexityLevel] = useState(3);
  const [showChat, setShowChat] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Layer state for 3D model
  const layerState = useLayerState();

  // Get user-specific data for selected region
  const regionStats = useMemo(() => {
    if (!selectedRegion) return { labs: [], conditions: [] };
    return {
      labs: getRelevantUserLabs(dashboardData, selectedRegion),
      conditions: getRegionConditions(dashboardData, selectedRegion),
    };
  }, [selectedRegion, dashboardData]);

  // Handle region selection from 3D model
  const handleRegionSelect = useCallback((regionId: string) => {
    const region = BODY_REGIONS.find(r => r.id === regionId);
    if (region) {
      setSelectedRegion(region);
      setActivePanel('overview');
    }
  }, []);

  // Educational modules for selected region
  const relatedModules = useMemo(() => {
    if (!selectedRegion) return [];
    // This would connect to the actual education registry
    return selectedRegion.relatedModules.map(id => ({
      id,
      title: id.includes('headache') ? 'Understanding Headaches' :
             id.includes('hypertension') ? 'Understanding Hypertension' :
             id.includes('diabetes') ? 'Understanding Type 2 Diabetes' :
             id.includes('gerd') ? 'Understanding GERD' :
             id.includes('cbc') ? 'Understanding CBC Labs' : 'Medical Module',
      type: id.includes('lab') ? 'Lab Interpretation' : 'Clinical Module',
    }));
  }, [selectedRegion]);

  return (
    <div className="anatomy-launchpad">
      {/* Header */}
      <header className="launchpad-header">
        <button className="back-button" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>
        
        <div className="header-title">
          <h1>3D Anatomy Explorer</h1>
          <p className="subtitle">Select a body region to explore</p>
        </div>

        {/* View Mode Toggle */}
        <div className="view-mode-toggle">
          <button 
            className={viewMode === 'explore' ? 'active' : ''}
            onClick={() => setViewMode('explore')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v12M6 12h12"/>
            </svg>
            Explore
          </button>
          <button 
            className={viewMode === 'learn' ? 'active' : ''}
            onClick={() => setViewMode('learn')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253"/>
            </svg>
            Learn
          </button>
          <button 
            className={viewMode === 'clinical' ? 'active' : ''}
            onClick={() => setViewMode('clinical')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            Clinical
          </button>
        </div>

        {/* Complexity Selector (Learn/Clinical modes) */}
        {(viewMode === 'learn' || viewMode === 'clinical') && (
          <ComplexityLevel 
            level={complexityLevel} 
            onChange={setComplexityLevel}
            compact
          />
        )}
      </header>

      {/* Main Content Area */}
      <div className="launchpad-content">
        {/* Left Panel - Info & Navigation */}
        <aside className={`info-panel ${selectedRegion ? 'expanded' : 'collapsed'}`}>
          {selectedRegion ? (
            <>
              {/* Region Header */}
              <div className="region-header">
                <h2>{selectedRegion.name}</h2>
                <p className="region-description">{selectedRegion.description}</p>
                
                {/* Body Systems Tags */}
                <div className="systems-tags">
                  {selectedRegion.systems.map(system => (
                    <span key={system} className="system-tag">{system}</span>
                  ))}
                </div>
              </div>

              {/* Panel Navigation */}
              <nav className="panel-nav">
                <button 
                  className={activePanel === 'overview' ? 'active' : ''}
                  onClick={() => setActivePanel('overview')}
                >
                  Overview
                </button>
                <button 
                  className={activePanel === 'conditions' ? 'active' : ''}
                  onClick={() => setActivePanel('conditions')}
                >
                  Conditions
                </button>
                <button 
                  className={activePanel === 'labs' ? 'active' : ''}
                  onClick={() => setActivePanel('labs')}
                >
                  Labs
                </button>
                <button 
                  className={activePanel === 'education' ? 'active' : ''}
                  onClick={() => setActivePanel('education')}
                >
                  Learn
                </button>
                <button 
                  className={activePanel === 'chat' ? 'active' : ''}
                  onClick={() => setActivePanel('chat')}
                >
                  Ask AI
                </button>
              </nav>

              {/* Panel Content */}
              <div className="panel-content">
                {activePanel === 'overview' && (
                  <div className="overview-panel">
                    {/* User's Related Conditions */}
                    {regionStats.conditions.length > 0 && (
                      <div className="stat-section">
                        <h3>Your Conditions</h3>
                        <ul className="condition-list">
                          {regionStats.conditions.map((condition, i) => (
                            <li key={i} className="condition-item">
                              <span className="condition-dot" />
                              {condition}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Recent Labs */}
                    {regionStats.labs.length > 0 && (
                      <div className="stat-section">
                        <h3>Recent Lab Values</h3>
                        <div className="lab-grid">
                          {regionStats.labs.map((lab, i) => (
                            <div key={i} className={`lab-stat ${lab.status}`}>
                              <span className="lab-label">{lab.label}</span>
                              <span className="lab-value">{lab.value}</span>
                              {lab.trend && (
                                <span className={`trend ${lab.trend}`}>
                                  {lab.trend === 'up' ? '↑' : lab.trend === 'down' ? '↓' : '→'}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Common Conditions */}
                    <div className="stat-section">
                      <h3>Common Conditions</h3>
                      <ul className="condition-list common">
                        {selectedRegion.commonConditions.map((condition, i) => (
                          <li key={i} className="condition-item">
                            {condition}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quick Actions */}
                    <div className="quick-actions">
                      <button className="action-button primary" onClick={() => setActivePanel('education')}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253"/>
                        </svg>
                        Learn About This Region
                      </button>
                      <button className="action-button" onClick={() => setShowChat(true)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                        Ask AI About Symptoms
                      </button>
                    </div>
                  </div>
                )}

                {activePanel === 'conditions' && (
                  <div className="conditions-panel">
                    <h3>Conditions Affecting {selectedRegion.name}</h3>
                    <div className="condition-cards">
                      {selectedRegion.commonConditions.map((condition, i) => (
                        <div key={i} className="condition-card">
                          <h4>{condition}</h4>
                          <button className="learn-more">Learn more →</button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activePanel === 'labs' && (
                  <div className="labs-panel">
                    <h3>Relevant Lab Tests</h3>
                    <ul className="lab-list">
                      {selectedRegion.relevantLabs.map((lab, i) => (
                        <li key={i} className="lab-item">
                          <span className="lab-icon">🔬</span>
                          {lab}
                        </li>
                      ))}
                    </ul>
                    {regionStats.labs.length > 0 && (
                      <div className="your-labs">
                        <h4>Your Recent Results</h4>
                        {regionStats.labs.map((lab, i) => (
                          <div key={i} className={`lab-result ${lab.status}`}>
                            <span>{lab.label}</span>
                            <span className="value">{lab.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {activePanel === 'education' && (
                  <div className="education-panel">
                    <h3>Learning Modules</h3>
                    {relatedModules.length > 0 ? (
                      <div className="module-list">
                        {relatedModules.map(module => (
                          <div key={module.id} className="module-card">
                            <span className="module-type">{module.type}</span>
                            <h4>{module.title}</h4>
                            <button className="start-learning">Start Learning →</button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="no-modules">No specific modules for this region yet.</p>
                    )}
                  </div>
                )}

                {activePanel === 'chat' && (
                  <div className="chat-panel">
                    <AnatomyChatPanel 
                      selectedRegion={selectedRegion.name}
                      dashboardData={dashboardData}
                      complexityLevel={complexityLevel}
                    />
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="no-selection">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v12M8 10c0-2 1.8-4 4-4s4 2 4 4"/>
                <circle cx="12" cy="16" r="2"/>
              </svg>
              <p>Click on a body region to explore</p>
            </div>
          )}
        </aside>

        {/* Center - 3D Viewer */}
        <main className="viewer-container">
          <AnatomyViewer 
            onRegionSelect={handleRegionSelect}
            selectedRegionId={selectedRegion?.id || null}
            layerState={layerState}
            viewMode={viewMode}
          />
          
          {/* Layer Controls */}
          <div className="layer-controls">
            <LayerPanel state={layerState} />
          </div>

          {/* Quick Help */}
          {!selectedRegion && (
            <div className="quick-help">
              <p>💡 <strong>Tip:</strong> Click on any body part to see detailed information, related conditions, and educational content.</p>
            </div>
          )}
        </main>

        {/* Right Panel - Context & Details (Clinical Mode) */}
        {viewMode === 'clinical' && selectedRegion && (
          <aside className="clinical-panel">
            <h3>Clinical Context</h3>
            
            {/* Differential Diagnosis */}
            <div className="clinical-section">
              <h4>Consider These</h4>
              <ul className="differential-list">
                {selectedRegion.commonConditions.map((condition, i) => (
                  <li key={i}>
                    <span className="ddx-number">{i + 1}</span>
                    {condition}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Questions */}
            <div className="clinical-section">
              <h4>Key Questions</h4>
              <ul className="question-list">
                <li>When did symptoms start?</li>
                <li>What makes it better/worse?</li>
                <li>Any associated symptoms?</li>
                <li>Relevant medical history?</li>
              </ul>
            </div>

            {/* Red Flags */}
            <div className="clinical-section red-flags">
              <h4>🚩 Red Flags</h4>
              <ul>
                <li>Sudden severe pain</li>
                <li>Systemic symptoms (fever, weight loss)</li>
                <li>Neurological changes</li>
                <li>Chest pain with exertion</li>
              </ul>
            </div>
          </aside>
        )}
      </div>

      {/* Floating Chat Button */}
      {!showChat && selectedRegion && (
        <button className="floating-chat-btn" onClick={() => setShowChat(true)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          Ask about {selectedRegion.name}
        </button>
      )}

      {/* Chat Modal */}
      {showChat && (
        <div className="chat-modal">
          <div className="chat-modal-header">
            <h3>Ask about {selectedRegion?.name}</h3>
            <button className="close-btn" onClick={() => setShowChat(false)}>×</button>
          </div>
          <AnatomyChatPanel 
            selectedRegion={selectedRegion?.name}
            dashboardData={dashboardData}
            complexityLevel={complexityLevel}
          />
        </div>
      )}
    </div>
  );
}
