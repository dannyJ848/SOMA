/**
 * Layer Filter Bar
 *
 * A horizontal bar of layer filter buttons for filtering content
 * by anatomical layer.
 */

import { memo } from 'react';

export type AnatomicalLayer = 'skin' | 'muscle' | 'bone' | 'vessels' | 'nerves' | 'organs' | 'connective';

interface LayerInfo {
  id: AnatomicalLayer;
  name: string;
  color: string;
  icon: string;
}

const LAYERS: LayerInfo[] = [
  { id: 'skin', name: 'Skin', color: '#FFB07C', icon: '🧴' },
  { id: 'muscle', name: 'Muscle', color: '#E74C3C', icon: '💪' },
  { id: 'bone', name: 'Bone', color: '#ECF0F1', icon: '🦴' },
  { id: 'vessels', name: 'Vessels', color: '#3498DB', icon: '🩸' },
  { id: 'nerves', name: 'Nerves', color: '#F1C40F', icon: '⚡' },
  { id: 'organs', name: 'Organs', color: '#9B59B6', icon: '🫀' },
  { id: 'connective', name: 'Connective', color: '#1ABC9C', icon: '🔗' },
];

interface LayerFilterBarProps {
  selectedLayer: AnatomicalLayer | null;
  onLayerChange: (layer: AnatomicalLayer | null) => void;
  counts?: Record<AnatomicalLayer, number>;
  showCounts?: boolean;
  compact?: boolean;
  className?: string;
}

export const LayerFilterBar = memo(function LayerFilterBar({
  selectedLayer,
  onLayerChange,
  counts,
  showCounts = false,
  compact = false,
  className = '',
}: LayerFilterBarProps) {
  return (
    <div className={`layer-filter-bar ${compact ? 'compact' : ''} ${className}`}>
      <button
        className={`layer-filter-btn all ${selectedLayer === null ? 'active' : ''}`}
        onClick={() => onLayerChange(null)}
      >
        <span className="layer-icon">📋</span>
        <span className="layer-name">All</span>
        {showCounts && counts && (
          <span className="layer-count">
            {Object.values(counts).reduce((a, b) => a + b, 0)}
          </span>
        )}
      </button>

      {LAYERS.map(layer => (
        <button
          key={layer.id}
          className={`layer-filter-btn ${selectedLayer === layer.id ? 'active' : ''}`}
          onClick={() => onLayerChange(layer.id)}
          style={{
            '--layer-color': layer.color,
          } as React.CSSProperties}
        >
          <span className="layer-icon">{layer.icon}</span>
          <span className="layer-name">{layer.name}</span>
          {showCounts && counts && (
            <span className="layer-count">{counts[layer.id] || 0}</span>
          )}
        </button>
      ))}

      <style>{`
        .layer-filter-bar {
          display: flex;
          gap: 6px;
          padding: 12px;
          background: var(--background-secondary, #1a1a1a);
          border-radius: 8px;
          overflow-x: auto;
          margin-bottom: 16px;
        }

        .layer-filter-bar.compact {
          padding: 8px;
          gap: 4px;
        }

        .layer-filter-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: var(--button-background, #2a2a2a);
          border: 2px solid transparent;
          border-radius: 20px;
          color: var(--text-secondary, #888);
          cursor: pointer;
          font-size: 13px;
          white-space: nowrap;
          transition: all 0.2s;
        }

        .layer-filter-bar.compact .layer-filter-btn {
          padding: 6px 10px;
          font-size: 12px;
        }

        .layer-filter-btn:hover {
          background: var(--button-hover, #3a3a3a);
          color: var(--text-primary, #fff);
          border-color: var(--layer-color, #555);
        }

        .layer-filter-btn.active {
          background: var(--layer-color, #4a9eff);
          border-color: var(--layer-color, #4a9eff);
          color: white;
        }

        .layer-filter-btn.all.active {
          background: var(--accent-primary, #4a9eff);
          border-color: var(--accent-primary, #4a9eff);
        }

        .layer-icon {
          font-size: 14px;
        }

        .layer-name {
          font-weight: 500;
        }

        .layer-count {
          min-width: 18px;
          height: 18px;
          padding: 0 5px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 9px;
          font-size: 11px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .layer-filter-btn.active .layer-count {
          background: rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 600px) {
          .layer-filter-btn .layer-name {
            display: none;
          }

          .layer-filter-btn {
            padding: 8px;
          }
        }
      `}</style>
    </div>
  );
});

export default LayerFilterBar;
