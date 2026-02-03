/**
 * Unified Education Panel
 *
 * A tabbed interface that combines Histology, Pathology, and Physiology
 * panels for comprehensive anatomical education.
 */

import { useState, useEffect } from 'react';
import { HistologyPanel } from './HistologyPanel';
import { PathologyPanel } from './PathologyPanel';
import { PhysiologyPanel } from './PhysiologyPanel';
import { getRegionContent, type RegionContent } from './regionContentMapping';

type EducationTab = 'histology' | 'pathology' | 'physiology' | 'overview';

interface UnifiedEducationPanelProps {
  regionId: string;
  regionName: string;
  onClose: () => void;
  initialTab?: EducationTab;
}

export function UnifiedEducationPanel({
  regionId,
  regionName,
  onClose,
  initialTab = 'overview',
}: UnifiedEducationPanelProps) {
  const [activeTab, setActiveTab] = useState<EducationTab>(initialTab);
  const [content, setContent] = useState<RegionContent | null>(null);

  useEffect(() => {
    const regionContent = getRegionContent(regionId);
    setContent(regionContent);
  }, [regionId]);

  if (!content) {
    return (
      <div className="unified-education-panel">
        <div className="education-panel-header">
          <div className="header-title">
            <span className="header-icon">📚</span>
            <div>
              <h3>Education</h3>
              <span className="header-subtitle">{regionName}</span>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="education-panel-content">
          <div className="no-content-message">
            <p>Educational content for this region is being developed.</p>
            <p className="hint">Select a major body region for detailed information.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="unified-education-panel">
      {/* Tab Navigation */}
      <div className="education-tabs">
        <button
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <span className="tab-icon">📋</span>
          <span className="tab-label">Overview</span>
        </button>
        <button
          className={`tab-btn ${activeTab === 'histology' ? 'active' : ''}`}
          onClick={() => setActiveTab('histology')}
        >
          <span className="tab-icon">🔬</span>
          <span className="tab-label">Histology</span>
        </button>
        <button
          className={`tab-btn ${activeTab === 'pathology' ? 'active' : ''}`}
          onClick={() => setActiveTab('pathology')}
        >
          <span className="tab-icon">🏥</span>
          <span className="tab-label">Pathology</span>
        </button>
        <button
          className={`tab-btn ${activeTab === 'physiology' ? 'active' : ''}`}
          onClick={() => setActiveTab('physiology')}
        >
          <span className="tab-icon">⚙️</span>
          <span className="tab-label">Physiology</span>
        </button>
        <button className="close-tab-btn" onClick={onClose}>×</button>
      </div>

      {/* Tab Content */}
      <div className="education-tab-content">
        {activeTab === 'overview' && (
          <OverviewPanel content={content} onTabChange={setActiveTab} />
        )}
        {activeTab === 'histology' && (
          <HistologyPanel regionName={content.name} content={content.histology} />
        )}
        {activeTab === 'pathology' && (
          <PathologyPanel regionName={content.name} content={content.pathology} />
        )}
        {activeTab === 'physiology' && (
          <PhysiologyPanel regionName={content.name} content={content.physiology} />
        )}
      </div>
    </div>
  );
}

// Overview Panel showing summary of all content
interface OverviewPanelProps {
  content: RegionContent;
  onTabChange: (tab: EducationTab) => void;
}

function OverviewPanel({ content, onTabChange }: OverviewPanelProps) {
  return (
    <div className="education-panel overview-panel">
      <div className="education-panel-header">
        <div className="header-title">
          <span className="header-icon">📋</span>
          <div>
            <h3>{content.name}</h3>
            <span className="header-subtitle">Overview</span>
          </div>
        </div>
      </div>

      <div className="education-panel-content">
        {/* Description */}
        <div className="overview-description">
          <p>{content.description}</p>
        </div>

        {/* Body Systems */}
        <div className="overview-section">
          <h4>Body Systems</h4>
          <div className="system-chips">
            {content.bodySystems.map((system, index) => (
              <span key={index} className="system-chip">
                {formatSystemName(system)}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="overview-stats">
          <div className="stat-card" onClick={() => onTabChange('histology')}>
            <span className="stat-icon">🔬</span>
            <div className="stat-info">
              <span className="stat-value">{content.histology.tissueTypes.length}</span>
              <span className="stat-label">Tissue Types</span>
            </div>
            <span className="stat-arrow">→</span>
          </div>
          <div className="stat-card" onClick={() => onTabChange('pathology')}>
            <span className="stat-icon">🏥</span>
            <div className="stat-info">
              <span className="stat-value">{content.pathology.commonConditions.length}</span>
              <span className="stat-label">Conditions</span>
            </div>
            <span className="stat-arrow">→</span>
          </div>
          <div className="stat-card" onClick={() => onTabChange('physiology')}>
            <span className="stat-icon">⚙️</span>
            <div className="stat-info">
              <span className="stat-value">{content.physiology.functions.length}</span>
              <span className="stat-label">Functions</span>
            </div>
            <span className="stat-arrow">→</span>
          </div>
        </div>

        {/* Clinical Notes */}
        {content.clinicalNotes.length > 0 && (
          <div className="overview-section clinical-notes">
            <h4>💡 Clinical Pearls</h4>
            <ul className="clinical-notes-list">
              {content.clinicalNotes.map((note, index) => (
                <li key={index} className="clinical-note">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Related Structures */}
        {content.relatedStructures.length > 0 && (
          <div className="overview-section">
            <h4>Related Structures</h4>
            <div className="related-chips">
              {content.relatedStructures.map((structure, index) => (
                <span key={index} className="related-chip">
                  {formatStructureName(structure)}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 3D Models Available */}
        {content.models.length > 0 && (
          <div className="overview-section">
            <h4>🎮 3D Models Available</h4>
            <div className="model-chips">
              {content.models.map((model, index) => (
                <span key={index} className="model-chip">
                  {model.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Helper functions
function formatSystemName(system: string): string {
  const names: Record<string, string> = {
    cardiovascular: 'Cardiovascular',
    respiratory: 'Respiratory',
    nervous: 'Nervous',
    endocrine: 'Endocrine',
    digestive: 'Digestive',
    urinary: 'Urinary',
    musculoskeletal: 'Musculoskeletal',
    immune: 'Immune',
    integumentary: 'Integumentary',
    reproductive: 'Reproductive',
    lymphatic: 'Lymphatic',
    hematologic: 'Hematologic',
  };
  return names[system] || system;
}

function formatStructureName(structure: string): string {
  // Convert camelCase to Title Case with spaces
  return structure
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim();
}

export default UnifiedEducationPanel;
