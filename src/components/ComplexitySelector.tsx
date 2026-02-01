/**
 * Complexity Selector Component
 *
 * A standalone level picker that can work in two modes:
 * 1. Controlled: pass `level` and `onChange` props directly
 * 2. Context-driven: omit those props and it reads/writes from ComplexityContext
 *
 * Also supports per-section overrides via the `sectionId` prop.
 */

import { memo } from 'react';
import {
  ComplexityLevel,
  COMPLEXITY_LABELS,
  COMPLEXITY_DESCRIPTIONS,
  useComplexity,
  useSectionComplexity,
} from '../contexts/ComplexityContext';
import { EXPLANATION_LEVELS } from '../../core/education/explanation-levels';

/** Audience icons for the five tiers */
const LEVEL_ICONS: Record<ComplexityLevel, string> = {
  1: '\u{1F9D2}', // child
  2: '\u{1F9D1}', // patient (adult)
  3: '\u{1FA7A}', // nursing (stethoscope)
  4: '\u{1F393}', // med-student (graduation cap)
  5: '\u{1F9D1}\u200D\u2695\uFE0F', // physician
};

interface ComplexitySelectorProps {
  /** Explicit level (controlled mode). When omitted, reads from context. */
  level?: ComplexityLevel;
  /** Explicit change handler (controlled mode). When omitted, writes to context. */
  onChange?: (level: ComplexityLevel) => void;
  /** If provided, the selector controls the section-level override instead of the global level. */
  sectionId?: string;
  showDescriptions?: boolean;
  showIcons?: boolean;
  compact?: boolean;
  className?: string;
}

export const ComplexitySelector = memo(function ComplexitySelector({
  level: controlledLevel,
  onChange: controlledOnChange,
  sectionId,
  showDescriptions = false,
  showIcons = true,
  compact = false,
  className = '',
}: ComplexitySelectorProps) {
  // Resolve level + handler from context when not explicitly controlled
  const globalCtx = useComplexity();
  const sectionCtx = sectionId ? useSectionComplexity(sectionId) : null;

  const resolvedLevel: ComplexityLevel =
    controlledLevel ?? (sectionCtx ? sectionCtx.level : globalCtx.level);

  const resolvedOnChange =
    controlledOnChange ??
    (sectionCtx ? sectionCtx.setLevel : globalCtx.setLevel);

  const levels: ComplexityLevel[] = [1, 2, 3, 4, 5];

  const audienceLabel = EXPLANATION_LEVELS[resolvedLevel]?.audience ?? '';

  // ----- Compact mode (dropdown) -----
  if (compact) {
    return (
      <div className={`cs-root cs-compact ${className}`}>
        {showIcons && (
          <span className="cs-icon" aria-hidden="true">
            {LEVEL_ICONS[resolvedLevel]}
          </span>
        )}
        <select
          value={resolvedLevel}
          onChange={(e) => resolvedOnChange(Number(e.target.value) as ComplexityLevel)}
          className="cs-select"
          aria-label="Select complexity level"
        >
          {levels.map((l) => (
            <option key={l} value={l}>
              {COMPLEXITY_LABELS[l]}
            </option>
          ))}
        </select>
        {sectionCtx?.isOverridden && (
          <button
            className="cs-reset-btn"
            onClick={() => sectionCtx.clearOverride()}
            title="Reset to global level"
            aria-label="Reset to global level"
          >
            Reset
          </button>
        )}
        <style>{STYLES}</style>
      </div>
    );
  }

  // ----- Full mode (button group) -----
  return (
    <div className={`cs-root ${className}`} role="radiogroup" aria-label="Complexity level">
      <div className="cs-header">
        <span className="cs-title">Complexity Level</span>
        {showDescriptions && (
          <span className="cs-description">{COMPLEXITY_DESCRIPTIONS[resolvedLevel]}</span>
        )}
      </div>

      <div className="cs-buttons">
        {levels.map((l) => {
          const isActive = resolvedLevel === l;
          return (
            <button
              key={l}
              role="radio"
              aria-checked={isActive}
              className={`cs-btn ${isActive ? 'cs-btn--active' : ''}`}
              onClick={() => resolvedOnChange(l)}
              title={COMPLEXITY_DESCRIPTIONS[l]}
            >
              {showIcons && (
                <span className="cs-btn-icon" aria-hidden="true">
                  {LEVEL_ICONS[l]}
                </span>
              )}
              <span className="cs-btn-number">{l}</span>
              <span className="cs-btn-label">{COMPLEXITY_LABELS[l]}</span>
            </button>
          );
        })}
      </div>

      {/* Audience indicator */}
      <div className="cs-audience" aria-live="polite">
        {audienceLabel}
      </div>

      {sectionCtx?.isOverridden && (
        <button
          className="cs-reset-link"
          onClick={() => sectionCtx.clearOverride()}
        >
          Reset to global level ({COMPLEXITY_LABELS[globalCtx.level]})
        </button>
      )}

      <style>{STYLES}</style>
    </div>
  );
});

// ---------------------------------------------------------------------------
// Scoped CSS (injected via <style> tag)
// ---------------------------------------------------------------------------
const STYLES = `
  .cs-root {
    padding: 12px;
    background: var(--background-secondary, #1a1a1a);
    border-radius: 8px;
    margin-bottom: 16px;
    font-family: inherit;
  }

  .cs-root.cs-compact {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: transparent;
    margin-bottom: 0;
  }

  .cs-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .cs-title {
    font-weight: 600;
    font-size: 14px;
    color: var(--text-primary, #fff);
  }

  .cs-description {
    font-size: 12px;
    color: var(--text-secondary, #888);
  }

  .cs-buttons {
    display: flex;
    gap: 4px;
  }

  .cs-btn {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 8px 4px;
    background: var(--button-background, #2a2a2a);
    border: 2px solid transparent;
    border-radius: 6px;
    color: var(--text-secondary, #888);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .cs-btn:hover {
    background: var(--button-hover, #3a3a3a);
    color: var(--text-primary, #fff);
    transform: translateY(-1px);
  }

  .cs-btn--active {
    background: var(--accent-primary, #4a9eff);
    border-color: var(--accent-primary, #4a9eff);
    color: white;
  }

  .cs-btn--active:hover {
    background: var(--accent-primary, #4a9eff);
    color: white;
  }

  .cs-btn-icon {
    font-size: 18px;
    line-height: 1;
  }

  .cs-btn-number {
    font-size: 16px;
    font-weight: 700;
  }

  .cs-btn-label {
    font-size: 10px;
    margin-top: 1px;
  }

  .cs-audience {
    margin-top: 8px;
    font-size: 12px;
    color: var(--text-secondary, #888);
    text-align: center;
    min-height: 18px;
    transition: opacity 0.2s ease;
  }

  .cs-icon {
    font-size: 20px;
    line-height: 1;
  }

  .cs-select {
    padding: 4px 8px;
    background: var(--button-background, #2a2a2a);
    border: 1px solid var(--border-color, #333);
    border-radius: 4px;
    color: var(--text-primary, #fff);
    font-size: 13px;
  }

  .cs-reset-btn {
    padding: 2px 8px;
    font-size: 11px;
    background: transparent;
    border: 1px solid var(--border-color, #444);
    border-radius: 4px;
    color: var(--text-secondary, #888);
    cursor: pointer;
  }

  .cs-reset-btn:hover {
    color: var(--text-primary, #fff);
    border-color: var(--text-secondary, #888);
  }

  .cs-reset-link {
    display: block;
    margin-top: 8px;
    background: none;
    border: none;
    color: var(--accent-primary, #4a9eff);
    font-size: 12px;
    cursor: pointer;
    text-align: center;
    text-decoration: underline;
    padding: 0;
  }

  .cs-reset-link:hover {
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    .cs-btn {
      padding: 6px 2px;
    }
    .cs-btn-label {
      display: none;
    }
    .cs-btn-icon {
      font-size: 16px;
    }
  }
`;

export default ComplexitySelector;
