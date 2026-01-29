/**
 * Complexity Selector Component
 *
 * A slider/button group for selecting complexity level.
 * Can be used globally or per-section.
 */

import { memo } from 'react';
import { ComplexityLevel, COMPLEXITY_LABELS, COMPLEXITY_DESCRIPTIONS } from '../contexts/ComplexityContext';

interface ComplexitySelectorProps {
  level: ComplexityLevel;
  onChange: (level: ComplexityLevel) => void;
  showDescriptions?: boolean;
  compact?: boolean;
  className?: string;
}

export const ComplexitySelector = memo(function ComplexitySelector({
  level,
  onChange,
  showDescriptions = false,
  compact = false,
  className = '',
}: ComplexitySelectorProps) {
  const levels: ComplexityLevel[] = [1, 2, 3, 4, 5];

  if (compact) {
    return (
      <div className={`complexity-selector compact ${className}`}>
        <label className="complexity-label">Level:</label>
        <select
          value={level}
          onChange={(e) => onChange(Number(e.target.value) as ComplexityLevel)}
          className="complexity-select"
        >
          {levels.map(l => (
            <option key={l} value={l}>{COMPLEXITY_LABELS[l]}</option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className={`complexity-selector ${className}`}>
      <div className="complexity-header">
        <span className="complexity-title">Complexity Level</span>
        {showDescriptions && (
          <span className="complexity-current">{COMPLEXITY_DESCRIPTIONS[level]}</span>
        )}
      </div>
      <div className="complexity-buttons">
        {levels.map(l => (
          <button
            key={l}
            className={`complexity-btn ${level === l ? 'active' : ''}`}
            onClick={() => onChange(l)}
            title={COMPLEXITY_DESCRIPTIONS[l]}
          >
            <span className="level-number">{l}</span>
            <span className="level-label">{COMPLEXITY_LABELS[l]}</span>
          </button>
        ))}
      </div>
      <style>{`
        .complexity-selector {
          padding: 12px;
          background: var(--background-secondary, #1a1a1a);
          border-radius: 8px;
          margin-bottom: 16px;
        }

        .complexity-selector.compact {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: transparent;
          margin-bottom: 0;
        }

        .complexity-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .complexity-title {
          font-weight: 600;
          font-size: 14px;
          color: var(--text-primary, #fff);
        }

        .complexity-current {
          font-size: 12px;
          color: var(--text-secondary, #888);
        }

        .complexity-buttons {
          display: flex;
          gap: 4px;
        }

        .complexity-btn {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px 4px;
          background: var(--button-background, #2a2a2a);
          border: 2px solid transparent;
          border-radius: 6px;
          color: var(--text-secondary, #888);
          cursor: pointer;
          transition: all 0.2s;
        }

        .complexity-btn:hover {
          background: var(--button-hover, #3a3a3a);
          color: var(--text-primary, #fff);
        }

        .complexity-btn.active {
          background: var(--accent-primary, #4a9eff);
          border-color: var(--accent-primary, #4a9eff);
          color: white;
        }

        .level-number {
          font-size: 16px;
          font-weight: 700;
        }

        .level-label {
          font-size: 10px;
          margin-top: 2px;
        }

        .complexity-label {
          font-size: 13px;
          color: var(--text-secondary, #888);
        }

        .complexity-select {
          padding: 4px 8px;
          background: var(--button-background, #2a2a2a);
          border: 1px solid var(--border-color, #333);
          border-radius: 4px;
          color: var(--text-primary, #fff);
          font-size: 13px;
        }

        @media (max-width: 480px) {
          .complexity-btn {
            padding: 6px 2px;
          }
          .level-label {
            display: none;
          }
        }
      `}</style>
    </div>
  );
});

export default ComplexitySelector;
