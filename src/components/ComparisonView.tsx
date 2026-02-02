/**
 * Comparison View Component
 *
 * Allows side-by-side comparison of anatomical structures,
 * conditions, medications, or lab results.
 */

import React, { useState, useCallback } from 'react';

// ============================================
// Types
// ============================================

export type ComparisonItemType = 'anatomy' | 'condition' | 'medication' | 'lab' | 'symptom';

export interface ComparisonItem {
  id: string;
  type: ComparisonItemType;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  properties: Record<string, string | number | boolean | string[]>;
  tags?: string[];
  color?: string;
}

export interface ComparisonViewProps {
  items: ComparisonItem[];
  onClose: () => void;
  onAddItem: () => void;
  onRemoveItem: (id: string) => void;
  onItemClick?: (item: ComparisonItem) => void;
  maxItems?: number;
  title?: string;
}

// ============================================
// Helper Functions
// ============================================

function getPropertyKeys(items: ComparisonItem[]): string[] {
  const allKeys = new Set<string>();
  items.forEach(item => {
    Object.keys(item.properties).forEach(key => allKeys.add(key));
  });
  return Array.from(allKeys);
}

function formatPropertyValue(value: string | number | boolean | string[]): string {
  if (Array.isArray(value)) {
    return value.join(', ');
  }
  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }
  return String(value);
}

function getTypeIcon(type: ComparisonItemType): string {
  const icons: Record<ComparisonItemType, string> = {
    anatomy: '🫀',
    condition: '🏥',
    medication: '💊',
    lab: '🧪',
    symptom: '📝',
  };
  return icons[type];
}

function getTypeLabel(type: ComparisonItemType): string {
  const labels: Record<ComparisonItemType, string> = {
    anatomy: 'Anatomy',
    condition: 'Condition',
    medication: 'Medication',
    lab: 'Lab Result',
    symptom: 'Symptom',
  };
  return labels[type];
}

// ============================================
// Component
// ============================================

export const ComparisonView: React.FC<ComparisonViewProps> = ({
  items,
  onClose,
  onAddItem,
  onRemoveItem,
  onItemClick,
  maxItems = 4,
  title = 'Compare',
}) => {
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [highlightDifferences, setHighlightDifferences] = useState(true);

  const propertyKeys = getPropertyKeys(items);

  const handlePropertyClick = useCallback((key: string) => {
    setSelectedProperty(prev => prev === key ? null : key);
  }, []);

  const areValuesEqual = useCallback((key: string): boolean => {
    if (items.length < 2) return true;
    const firstValue = JSON.stringify(items[0].properties[key]);
    return items.every(item => JSON.stringify(item.properties[key]) === firstValue);
  }, [items]);

  return (
    <div className="comparison-view-overlay" onClick={onClose}>
      <div className="comparison-view" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="comparison-header">
          <div className="comparison-title-section">
            <h2>{title}</h2>
            <span className="comparison-count">
              {items.length} of {maxItems} items
            </span>
          </div>
          
          <div className="comparison-controls">
            <label className="highlight-toggle">
              <input
                type="checkbox"
                checked={highlightDifferences}
                onChange={(e) => setHighlightDifferences(e.target.checked)}
              />
              <span>Highlight differences</span>
            </label>
            
            {items.length < maxItems && (
              <button className="add-item-button" onClick={onAddItem}>
                <span>+</span> Add Item
              </button>
            )}
            
            <button className="close-button" onClick={onClose} aria-label="Close">
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="comparison-content">
          {items.length === 0 ? (
            <div className="comparison-empty">
              <div className="empty-icon">🔍</div>
              <h3>No items to compare</h3>
              <p>Add items to start comparing</p>
              <button className="add-item-button large" onClick={onAddItem}>
                Add First Item
              </button>
            </div>
          ) : (
            <div className="comparison-grid" style={{ '--item-count': items.length } as React.CSSProperties}>
              {/* Property Labels Column */}
              <div className="property-labels">
                <div className="property-label-header">Properties</div>
                {propertyKeys.map(key => (
                  <div
                    key={key}
                    className={`property-label ${selectedProperty === key ? 'selected' : ''}`}
                    onClick={() => handlePropertyClick(key)}
                  >
                    {key}
                  </div>
                ))}
              </div>

              {/* Item Columns */}
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="comparison-item-column"
                  style={{ '--column-index': index } as React.CSSProperties}
                >
                  {/* Item Header */}
                  <div
                    className="item-header"
                    style={{ borderColor: item.color }}
                    onClick={() => onItemClick?.(item)}
                  >
                    <div className="item-type-icon">{getTypeIcon(item.type)}</div>
                    <div className="item-info">
                      <div className="item-title">{item.title}</div>
                      {item.subtitle && (
                        <div className="item-subtitle">{item.subtitle}</div>
                      )}
                      <div className="item-type">{getTypeLabel(item.type)}</div>
                    </div>
                    <button
                      className="remove-item-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveItem(item.id);
                      }}
                      aria-label={`Remove ${item.title}`}
                    >
                      ×
                    </button>
                  </div>

                  {/* Item Image */}
                  {item.imageUrl && (
                    <div className="item-image-container">
                      <img src={item.imageUrl} alt={item.title} className="item-image" />
                    </div>
                  )}

                  {/* Item Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="item-tags">
                      {item.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="item-tag">{tag}</span>
                      ))}
                    </div>
                  )}

                  {/* Properties */}
                  <div className="item-properties">
                    {propertyKeys.map(key => {
                      const value = item.properties[key];
                      const isEqual = areValuesEqual(key);
                      const shouldHighlight = highlightDifferences && !isEqual && items.length > 1;

                      return (
                        <div
                          key={key}
                          className={`property-value ${shouldHighlight ? 'highlighted' : ''} ${selectedProperty === key ? 'selected' : ''}`}
                          onClick={() => handlePropertyClick(key)}
                        >
                          {value !== undefined ? (
                            formatPropertyValue(value)
                          ) : (
                            <span className="no-value">—</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="comparison-footer">
          <div className="comparison-legend">
            <div className="legend-item">
              <span className="legend-dot different"></span>
              <span>Different values</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot same"></span>
              <span>Same values</span>
            </div>
          </div>
          
          <div className="comparison-actions">
            <button className="clear-all-button" onClick={() => items.forEach(item => onRemoveItem(item.id))}>
              Clear All
            </button>
          </div>
        </div>

        <style>{`
          .comparison-view-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 20px;
            animation: fadeIn 0.2s ease;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .comparison-view {
            background: var(--bg-card, #1a1a1a);
            border: 1px solid var(--border, #2a2a2a);
            border-radius: 16px;
            width: 100%;
            max-width: 1200px;
            max-height: 90vh;
            display: flex;
            flex-direction: column;
            animation: slideUp 0.3s ease;
            overflow: hidden;
          }

          @keyframes slideUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .comparison-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 24px;
            border-bottom: 1px solid var(--border, #2a2a2a);
            gap: 16px;
          }

          .comparison-title-section {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .comparison-title-section h2 {
            font-size: 20px;
            font-weight: 600;
            color: var(--text-primary, #ffffff);
            margin: 0;
          }

          .comparison-count {
            font-size: 13px;
            color: var(--text-secondary, #888888);
            background: var(--bg-secondary, #141414);
            padding: 4px 10px;
            border-radius: 12px;
          }

          .comparison-controls {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .highlight-toggle {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            color: var(--text-secondary, #888888);
            cursor: pointer;
          }

          .highlight-toggle input {
            accent-color: var(--accent, #3b82f6);
          }

          .add-item-button {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 8px 16px;
            background: var(--accent, #3b82f6);
            border: none;
            border-radius: 8px;
            color: white;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
          }

          .add-item-button:hover {
            background: #2563eb;
          }

          .add-item-button.large {
            padding: 12px 24px;
            font-size: 14px;
          }

          .close-button {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            border: none;
            border-radius: 8px;
            color: var(--text-secondary, #888888);
            font-size: 24px;
            cursor: pointer;
            transition: all 0.2s;
          }

          .close-button:hover {
            background: var(--bg-secondary, #141414);
            color: var(--text-primary, #ffffff);
          }

          .comparison-content {
            flex: 1;
            overflow: auto;
            padding: 24px;
          }

          .comparison-empty {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 60px 20px;
            text-align: center;
          }

          .empty-icon {
            font-size: 48px;
            margin-bottom: 16px;
          }

          .comparison-empty h3 {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-primary, #ffffff);
            margin: 0 0 8px 0;
          }

          .comparison-empty p {
            font-size: 14px;
            color: var(--text-secondary, #888888);
            margin: 0 0 24px 0;
          }

          .comparison-grid {
            display: grid;
            grid-template-columns: 180px repeat(var(--item-count, 1), minmax(250px, 1fr));
            gap: 16px;
            min-width: min-content;
          }

          .property-labels {
            position: sticky;
            left: 0;
            background: var(--bg-card, #1a1a1a);
            z-index: 10;
          }

          .property-label-header {
            font-size: 12px;
            font-weight: 600;
            color: var(--text-secondary, #888888);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 16px;
            border-bottom: 1px solid var(--border, #2a2a2a);
            margin-bottom: 8px;
          }

          .property-label {
            padding: 12px 16px;
            font-size: 13px;
            color: var(--text-secondary, #888888);
            border-bottom: 1px solid var(--border, #2a2a2a);
            cursor: pointer;
            transition: all 0.2s;
          }

          .property-label:hover {
            background: var(--bg-secondary, #141414);
            color: var(--text-primary, #ffffff);
          }

          .property-label.selected {
            background: rgba(59, 130, 246, 0.1);
            color: var(--accent, #3b82f6);
            font-weight: 500;
          }

          .comparison-item-column {
            display: flex;
            flex-direction: column;
            min-width: 250px;
          }

          .item-header {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 16px;
            background: var(--bg-secondary, #141414);
            border-left: 3px solid var(--accent, #3b82f6);
            border-radius: 8px;
            margin-bottom: 8px;
            cursor: pointer;
            transition: all 0.2s;
            position: relative;
          }

          .item-header:hover {
            background: var(--bg-hover, #252525);
          }

          .item-type-icon {
            font-size: 24px;
            flex-shrink: 0;
          }

          .item-info {
            flex: 1;
            min-width: 0;
          }

          .item-title {
            font-size: 15px;
            font-weight: 600;
            color: var(--text-primary, #ffffff);
            margin-bottom: 2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .item-subtitle {
            font-size: 12px;
            color: var(--text-secondary, #888888);
            margin-bottom: 4px;
          }

          .item-type {
            font-size: 11px;
            color: var(--text-muted, #666666);
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .remove-item-button {
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            border: none;
            border-radius: 4px;
            color: var(--text-secondary, #888888);
            font-size: 18px;
            cursor: pointer;
            transition: all 0.2s;
            flex-shrink: 0;
          }

          .remove-item-button:hover {
            background: rgba(239, 68, 68, 0.1);
            color: #ef4444;
          }

          .item-image-container {
            margin-bottom: 8px;
            border-radius: 8px;
            overflow: hidden;
            background: var(--bg-secondary, #141414);
          }

          .item-image {
            width: 100%;
            height: 150px;
            object-fit: cover;
          }

          .item-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
            margin-bottom: 8px;
          }

          .item-tag {
            font-size: 10px;
            color: var(--text-secondary, #888888);
            background: var(--bg-secondary, #141414);
            padding: 2px 8px;
            border-radius: 4px;
          }

          .item-properties {
            display: flex;
            flex-direction: column;
          }

          .property-value {
            padding: 12px 16px;
            font-size: 13px;
            color: var(--text-primary, #ffffff);
            border-bottom: 1px solid var(--border, #2a2a2a);
            min-height: 44px;
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: all 0.2s;
          }

          .property-value:hover {
            background: var(--bg-secondary, #141414);
          }

          .property-value.highlighted {
            background: rgba(255, 193, 7, 0.1);
            border-left: 3px solid #ffc107;
          }

          .property-value.selected {
            background: rgba(59, 130, 246, 0.1);
            border-left: 3px solid var(--accent, #3b82f6);
          }

          .no-value {
            color: var(--text-muted, #666666);
          }

          .comparison-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 24px;
            border-top: 1px solid var(--border, #2a2a2a);
            gap: 16px;
          }

          .comparison-legend {
            display: flex;
            gap: 16px;
          }

          .legend-item {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            color: var(--text-secondary, #888888);
          }

          .legend-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
          }

          .legend-dot.different {
            background: #ffc107;
          }

          .legend-dot.same {
            background: var(--border, #2a2a2a);
          }

          .clear-all-button {
            padding: 8px 16px;
            background: transparent;
            border: 1px solid var(--border, #2a2a2a);
            border-radius: 8px;
            color: var(--text-secondary, #888888);
            font-size: 13px;
            cursor: pointer;
            transition: all 0.2s;
          }

          .clear-all-button:hover {
            border-color: #ef4444;
            color: #ef4444;
          }

          /* Responsive */
          @media (max-width: 768px) {
            .comparison-view {
              max-height: 100vh;
              border-radius: 0;
            }

            .comparison-header {
              flex-direction: column;
              align-items: flex-start;
              gap: 12px;
            }

            .comparison-controls {
              width: 100%;
              justify-content: space-between;
            }

            .comparison-grid {
              grid-template-columns: 120px repeat(var(--item-count, 1), minmax(200px, 1fr));
              gap: 8px;
            }

            .property-label {
              padding: 10px 12px;
              font-size: 11px;
            }

            .property-value {
              padding: 10px 12px;
              font-size: 12px;
            }

            .comparison-footer {
              flex-direction: column;
              gap: 12px;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ComparisonView;
