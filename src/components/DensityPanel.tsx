import React, { useState } from 'react';
import {
  DENSITY_LEGEND,
  getDensityInfo,
  useTissueComposition,
  analyzeDensityForPathology,
  type VisualizationMode,
} from '../hooks/useDensity.js';

interface DensityPanelProps {
  regionId: string;
  onModeChange?: (mode: VisualizationMode) => void;
  currentMode?: VisualizationMode;
}

export function DensityPanel({ 
  regionId, 
  onModeChange, 
  currentMode = 'standard' 
}: DensityPanelProps) {
  const [showComposition, setShowComposition] = useState(true);
  const [showLegend, setShowLegend] = useState(false);
  
  const densityInfo = getDensityInfo(regionId);
  const { composition, primaryTissue } = useTissueComposition(regionId);
  const pathology = analyzeDensityForPathology(regionId);

  if (!densityInfo) {
    return (
      <div className="density-panel empty">
        <p>No density data available for this region.</p>
      </div>
    );
  }

  const modes: { value: VisualizationMode; label: string; icon: string; desc: string }[] = [
    { value: 'standard', label: 'Standard', icon: '🎨', desc: 'Normal anatomy colors' },
    { value: 'xray', label: 'X-Ray', icon: '💀', desc: 'Radiographic density view' },
    { value: 'density', label: 'Density', icon: '📊', desc: 'Tissue density map' },
    { value: 'cross-section', label: 'Cross-Section', icon: '✂️', desc: 'Cut view with interior' },
  ];

  return (
    <div className="density-panel">
      <div className="density-panel-header">
        <h4>🩻 Tissue Density Analysis</h4>
        <div className="density-mode-selector">
          {modes.map((mode) => (
            <button
              key={mode.value}
              className={`density-mode-btn ${currentMode === mode.value ? 'active' : ''}`}
              onClick={() => onModeChange?.(mode.value)}
              title={mode.desc}
            >
              <span className="mode-icon">{mode.icon}</span>
              <span className="mode-label">{mode.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="density-stats">
        <div className="density-stat primary">
          <span className="stat-label">Average Density</span>
          <span className="stat-value">{densityInfo.averageDensity} HU</span>
          <span className="stat-badge" data-type={densityInfo.radiodensity}>
            {densityInfo.radiodensity}
          </span>
        </div>
        
        <div className="density-stat">
          <span className="stat-label">Primary Tissue</span>
          <span className="stat-value">{densityInfo.primaryTissue}</span>
          <span className="stat-sub">{densityInfo.primaryTissueDensity} HU</span>
        </div>
        
        <div className="density-stat">
          <span className="stat-label">X-Ray Opacity</span>
          <div className="opacity-bar">
            <div 
              className="opacity-fill" 
              style={{ width: `${densityInfo.xrayOpacity * 100}%` }}
            />
            <span className="opacity-value">{Math.round(densityInfo.xrayOpacity * 100)}%</span>
          </div>
        </div>
      </div>

      {pathology.notes.length > 0 && (
        <div className="density-pathology-alerts">
          <h5>⚠️ Clinical Notes</h5>
          {pathology.notes.map((note, idx) => (
            <div key={idx} className="pathology-note">
              {note}
            </div>
          ))}
        </div>
      )}

      <div className="density-clinical-note">
        <strong>💡 Clinical Context:</strong>
        <p>{densityInfo.clinicalNote}</p>
      </div>

      <div className="density-section">
        <button 
          className="section-toggle"
          onClick={() => setShowComposition(!showComposition)}
        >
          <span>{showComposition ? '▼' : '▶'}</span>
          <strong>Tissue Composition</strong>
          <span className="tissue-count">{composition.length} tissues</span>
        </button>
        
        {showComposition && (
          <div className="tissue-composition">
            {composition.map((item, idx) => (
              <div key={idx} className="tissue-item">
                <div 
                  className="tissue-color" 
                  style={{ backgroundColor: item.color }}
                />
                <div className="tissue-info">
                  <span className="tissue-name">{item.tissueDetails?.name || item.tissue}</span>
                  <div className="tissue-bar-container">
                    <div 
                      className="tissue-bar" 
                      style={{ 
                        width: `${item.percentage}%`,
                        backgroundColor: item.color 
                      }}
                    />
                    <span className="tissue-percent">{item.percentage}%</span>
                  </div>
                </div>
                <span className="tissue-density">{item.tissueDetails?.hounsfieldUnits || 0} HU</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="density-section">
        <button 
          className="section-toggle"
          onClick={() => setShowLegend(!showLegend)}
        >
          <span>{showLegend ? '▼' : '▶'}</span>
          <strong>Density Scale Reference</strong>
        </button>
        
        {showLegend && (
          <div className="density-legend">
            {DENSITY_LEGEND.map((item, idx) => (
              <div key={idx} className="legend-item">
                <div 
                  className="legend-color" 
                  style={{ backgroundColor: item.color }}
                />
                <div className="legend-info">
                  <span className="legend-label">{item.label}</span>
                  <span className="legend-range">{item.range}</span>
                  <span className="legend-desc">{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Compact version for region info panel
export function CompactDensityInfo({ regionId }: { regionId: string }) {
  const densityInfo = getDensityInfo(regionId);
  
  if (!densityInfo) return null;

  return (
    <div className="compact-density">
      <div className="compact-stat">
        <span className="label">Density:</span>
        <span className="value">{densityInfo.averageDensity} HU</span>
        <span 
          className="badge"
          data-type={densityInfo.radiodensity}
        >
          {densityInfo.radiodensity}
        </span>
      </div>
      
      <div className="compact-stat">
        <span className="label">Primary:</span>
        <span className="value">{densityInfo.primaryTissue}</span>
      </div>
    </div>
  );
}

export default DensityPanel;
