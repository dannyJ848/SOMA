/**
 * AdaptiveContent Component
 *
 * Renders educational content that dynamically adjusts when the user changes
 * their complexity level. Reads the current level from ComplexityContext
 * (or accepts an explicit override) and displays the matching LevelContent
 * from an EducationalContent object.
 *
 * Features:
 * - Animated transitions between levels (CSS fade + slide)
 * - Visual level indicator badge (icon + label)
 * - Inline level switcher buttons
 * - Renders: summary, explanation (markdown), keyTerms, clinicalNotes
 * - Supports both full EducationalContent and PartialEducationalContent
 */

import { memo, useRef, useState, useEffect, useCallback } from 'react';
import {
  ComplexityLevel,
  COMPLEXITY_LABELS,
  useComplexity,
  useSectionComplexity,
} from '../contexts/ComplexityContext';
import { EXPLANATION_LEVELS, ExplanationLevelNumber } from '../../core/education/explanation-levels';
import type {
  EducationalContent,
  PartialEducationalContent,
  LevelContent,
  TermDefinition,
} from '../../core/content/types';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface AdaptiveContentProps {
  /** The educational content object containing all 5 levels. */
  content: EducationalContent | PartialEducationalContent;
  /**
   * Optional section ID. When provided, the component uses a per-section
   * complexity override (via useSectionComplexity) instead of the global level.
   */
  sectionId?: string;
  /** If true, show the inline level-switcher buttons. Defaults to true. */
  showLevelSwitcher?: boolean;
  /** If true, render clinical notes when available. Defaults to true. */
  showClinicalNotes?: boolean;
  /** If true, render patient counseling points when available. Defaults to true. */
  showCounselingPoints?: boolean;
  /** If true, show analogies when available. Defaults to false. */
  showAnalogies?: boolean;
  /** Additional CSS class. */
  className?: string;
}

/** Icons per level (mirrors ComplexitySelector) */
const LEVEL_ICONS: Record<ComplexityLevel, string> = {
  1: '\u{1F9D2}',
  2: '\u{1F9D1}',
  3: '\u{1FA7A}',
  4: '\u{1F393}',
  5: '\u{1F9D1}\u200D\u2695\uFE0F',
};

const LEVEL_AUDIENCE: Record<ComplexityLevel, string> = {
  1: 'Child',
  2: 'Patient',
  3: 'Nursing',
  4: 'Med Student',
  5: 'Physician',
};

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function TermChip({ term }: { term: TermDefinition }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <span
      className={`ac-term ${expanded ? 'ac-term--expanded' : ''}`}
      onClick={() => setExpanded(!expanded)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setExpanded(!expanded);
        }
      }}
    >
      <strong className="ac-term-name">{term.term}</strong>
      {term.pronunciation && (
        <span className="ac-term-pronunciation"> ({term.pronunciation})</span>
      )}
      {expanded && (
        <span className="ac-term-definition"> &mdash; {term.definition}</span>
      )}
    </span>
  );
}

/** Inline level switcher (small pill buttons) */
function InlineLevelSwitcher({
  activeLevel,
  onChangeLevel,
  availableLevels,
}: {
  activeLevel: ComplexityLevel;
  onChangeLevel: (level: ComplexityLevel) => void;
  availableLevels: ComplexityLevel[];
}) {
  return (
    <div className="ac-switcher" role="radiogroup" aria-label="Switch complexity level">
      {availableLevels.map((l) => (
        <button
          key={l}
          role="radio"
          aria-checked={activeLevel === l}
          className={`ac-switcher-btn ${activeLevel === l ? 'ac-switcher-btn--active' : ''}`}
          onClick={() => onChangeLevel(l)}
          title={`${LEVEL_AUDIENCE[l]} - ${COMPLEXITY_LABELS[l]}`}
        >
          <span className="ac-switcher-icon" aria-hidden="true">
            {LEVEL_ICONS[l]}
          </span>
          <span className="ac-switcher-label">{LEVEL_AUDIENCE[l]}</span>
        </button>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export const AdaptiveContent = memo(function AdaptiveContent({
  content,
  sectionId,
  showLevelSwitcher = true,
  showClinicalNotes = true,
  showCounselingPoints = true,
  showAnalogies = false,
  className = '',
}: AdaptiveContentProps) {
  const globalCtx = useComplexity();
  const sectionCtx = sectionId ? useSectionComplexity(sectionId) : null;

  const currentLevel: ComplexityLevel = sectionCtx
    ? sectionCtx.level
    : globalCtx.level;

  const setCurrentLevel = sectionCtx
    ? sectionCtx.setLevel
    : globalCtx.setLevel;

  // Determine which levels actually have content
  const availableLevels = ([1, 2, 3, 4, 5] as ComplexityLevel[]).filter(
    (l) => content.levels[l] != null,
  );

  // Get the best available level content (fallback to nearest if current is missing)
  const levelContent = resolveLevelContent(content, currentLevel);

  // --- Transition animation state ---
  const [animState, setAnimState] = useState<'idle' | 'exiting' | 'entering'>('idle');
  const [displayedLevel, setDisplayedLevel] = useState(currentLevel);
  const [displayedContent, setDisplayedContent] = useState(levelContent);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLevelChange = useCallback(
    (newLevel: ComplexityLevel) => {
      if (newLevel === displayedLevel) return;

      // Start exit animation
      setAnimState('exiting');

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        // Swap content while hidden
        setCurrentLevel(newLevel);
        setDisplayedLevel(newLevel);
        setDisplayedContent(resolveLevelContent(content, newLevel));
        setAnimState('entering');

        timeoutRef.current = setTimeout(() => {
          setAnimState('idle');
        }, 300);
      }, 200);
    },
    [content, displayedLevel, setCurrentLevel],
  );

  // Sync when external context changes (e.g. global level changed elsewhere)
  useEffect(() => {
    if (currentLevel !== displayedLevel) {
      handleLevelChange(currentLevel);
    }
    // We only want to react to external context changes
     
  }, [currentLevel]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!displayedContent) {
    return (
      <div className={`ac-root ac-empty ${className}`}>
        <p className="ac-empty-msg">No content available for level {currentLevel}.</p>
        <style>{STYLES}</style>
      </div>
    );
  }

  const levelMeta = EXPLANATION_LEVELS[displayedLevel as ExplanationLevelNumber];

  // Animation class
  const animClass =
    animState === 'exiting'
      ? 'ac-anim--exit'
      : animState === 'entering'
        ? 'ac-anim--enter'
        : '';

  return (
    <div className={`ac-root ${className}`}>
      {/* Level indicator badge */}
      <div className="ac-badge" aria-live="polite">
        <span className="ac-badge-icon" aria-hidden="true">
          {LEVEL_ICONS[displayedLevel]}
        </span>
        <span className="ac-badge-text">
          {LEVEL_AUDIENCE[displayedLevel]} &middot; {COMPLEXITY_LABELS[displayedLevel]}
        </span>
        {levelMeta && (
          <span className="ac-badge-audience">{levelMeta.audience}</span>
        )}
      </div>

      {/* Inline level switcher */}
      {showLevelSwitcher && availableLevels.length > 1 && (
        <InlineLevelSwitcher
          activeLevel={displayedLevel}
          onChangeLevel={handleLevelChange}
          availableLevels={availableLevels}
        />
      )}

      {/* Animated content region */}
      <div className={`ac-body ${animClass}`} aria-live="polite">
        {/* Summary */}
        <div className="ac-summary">{displayedContent.summary}</div>

        {/* Explanation */}
        <div className="ac-explanation">{displayedContent.explanation}</div>

        {/* Key Terms */}
        {displayedContent.keyTerms && displayedContent.keyTerms.length > 0 && (
          <div className="ac-terms">
            <h4 className="ac-section-title">Key Terms</h4>
            <div className="ac-terms-list">
              {displayedContent.keyTerms.map((t, i) => (
                <TermChip key={`${t.term}-${i}`} term={t} />
              ))}
            </div>
          </div>
        )}

        {/* Analogies */}
        {showAnalogies &&
          displayedContent.analogies &&
          displayedContent.analogies.length > 0 && (
            <div className="ac-analogies">
              <h4 className="ac-section-title">Analogies</h4>
              <ul className="ac-analogies-list">
                {displayedContent.analogies.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          )}

        {/* Clinical Notes (primarily levels 4-5) */}
        {showClinicalNotes && displayedContent.clinicalNotes && (
          <div className="ac-clinical">
            <h4 className="ac-section-title">Clinical Notes</h4>
            <div className="ac-clinical-text">{displayedContent.clinicalNotes}</div>
          </div>
        )}

        {/* Patient Counseling Points (primarily levels 1-2) */}
        {showCounselingPoints &&
          displayedContent.patientCounselingPoints &&
          displayedContent.patientCounselingPoints.length > 0 && (
            <div className="ac-counseling">
              <h4 className="ac-section-title">Patient Counseling</h4>
              <ul className="ac-counseling-list">
                {displayedContent.patientCounselingPoints.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          )}
      </div>

      <style>{STYLES}</style>
    </div>
  );
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Returns the LevelContent for the requested level, or falls back to the
 * nearest available level (prefers lower, then higher).
 */
function resolveLevelContent(
  content: EducationalContent | PartialEducationalContent,
  targetLevel: ComplexityLevel,
): LevelContent | null {
  const levels = content.levels as Partial<Record<ComplexityLevel, LevelContent>>;

  if (levels[targetLevel]) return levels[targetLevel]!;

  // Fallback: search nearest lower, then higher
  for (let delta = 1; delta <= 4; delta++) {
    const lower = (targetLevel - delta) as ComplexityLevel;
    const higher = (targetLevel + delta) as ComplexityLevel;
    if (lower >= 1 && levels[lower]) return levels[lower]!;
    if (higher <= 5 && levels[higher]) return levels[higher]!;
  }

  return null;
}

// ---------------------------------------------------------------------------
// Scoped CSS
// ---------------------------------------------------------------------------
const STYLES = `
  .ac-root {
    font-family: inherit;
    color: var(--text-primary, #fff);
  }

  .ac-empty {
    padding: 24px;
    text-align: center;
  }
  .ac-empty-msg {
    color: var(--text-secondary, #888);
    font-size: 14px;
  }

  /* --- Badge --- */
  .ac-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: var(--background-secondary, #1a1a1a);
    border-radius: 8px;
    margin-bottom: 12px;
  }
  .ac-badge-icon {
    font-size: 22px;
    line-height: 1;
  }
  .ac-badge-text {
    font-weight: 600;
    font-size: 14px;
  }
  .ac-badge-audience {
    margin-left: auto;
    font-size: 12px;
    color: var(--text-secondary, #888);
  }

  /* --- Inline switcher --- */
  .ac-switcher {
    display: flex;
    gap: 4px;
    margin-bottom: 16px;
  }
  .ac-switcher-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 6px 8px;
    background: var(--button-background, #2a2a2a);
    border: 2px solid transparent;
    border-radius: 20px;
    color: var(--text-secondary, #888);
    cursor: pointer;
    font-size: 12px;
    transition: all 0.2s ease;
  }
  .ac-switcher-btn:hover {
    background: var(--button-hover, #3a3a3a);
    color: var(--text-primary, #fff);
  }
  .ac-switcher-btn--active {
    background: var(--accent-primary, #4a9eff);
    border-color: var(--accent-primary, #4a9eff);
    color: #fff;
  }
  .ac-switcher-btn--active:hover {
    background: var(--accent-primary, #4a9eff);
    color: #fff;
  }
  .ac-switcher-icon {
    font-size: 16px;
    line-height: 1;
  }

  /* --- Animation --- */
  .ac-body {
    transition: opacity 0.2s ease, transform 0.2s ease;
    opacity: 1;
    transform: translateY(0);
  }
  .ac-anim--exit {
    opacity: 0;
    transform: translateY(-8px);
  }
  .ac-anim--enter {
    animation: ac-slide-in 0.3s ease forwards;
  }
  @keyframes ac-slide-in {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* --- Content sections --- */
  .ac-summary {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 16px;
    padding: 12px 16px;
    background: var(--background-secondary, #1a1a1a);
    border-left: 3px solid var(--accent-primary, #4a9eff);
    border-radius: 0 6px 6px 0;
  }

  .ac-explanation {
    font-size: 14px;
    line-height: 1.7;
    margin-bottom: 16px;
    white-space: pre-wrap;
  }

  .ac-section-title {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-secondary, #888);
    margin: 0 0 8px 0;
  }

  /* --- Terms --- */
  .ac-terms {
    margin-bottom: 16px;
  }
  .ac-terms-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .ac-term {
    display: inline-flex;
    align-items: baseline;
    gap: 4px;
    padding: 4px 10px;
    background: var(--button-background, #2a2a2a);
    border: 1px solid var(--border-color, #333);
    border-radius: 16px;
    font-size: 13px;
    cursor: pointer;
    transition: background 0.15s ease;
    max-width: 100%;
  }
  .ac-term:hover {
    background: var(--button-hover, #3a3a3a);
  }
  .ac-term--expanded {
    background: var(--button-hover, #3a3a3a);
  }
  .ac-term-name {
    color: var(--accent-primary, #4a9eff);
  }
  .ac-term-pronunciation {
    font-size: 11px;
    color: var(--text-secondary, #888);
    font-style: italic;
  }
  .ac-term-definition {
    color: var(--text-primary, #fff);
    font-size: 12px;
  }

  /* --- Analogies --- */
  .ac-analogies {
    margin-bottom: 16px;
  }
  .ac-analogies-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .ac-analogies-list li {
    padding: 6px 0 6px 16px;
    position: relative;
    font-size: 13px;
    line-height: 1.5;
  }
  .ac-analogies-list li::before {
    content: '\\1F4A1';
    position: absolute;
    left: 0;
    top: 6px;
    font-size: 12px;
  }

  /* --- Clinical notes --- */
  .ac-clinical {
    margin-bottom: 16px;
    padding: 12px 16px;
    background: rgba(255, 180, 50, 0.08);
    border: 1px solid rgba(255, 180, 50, 0.2);
    border-radius: 8px;
  }
  .ac-clinical .ac-section-title {
    color: #ffb432;
  }
  .ac-clinical-text {
    font-size: 13px;
    line-height: 1.6;
    white-space: pre-wrap;
  }

  /* --- Counseling points --- */
  .ac-counseling {
    margin-bottom: 16px;
    padding: 12px 16px;
    background: rgba(80, 200, 120, 0.08);
    border: 1px solid rgba(80, 200, 120, 0.2);
    border-radius: 8px;
  }
  .ac-counseling .ac-section-title {
    color: #50c878;
  }
  .ac-counseling-list {
    list-style: disc;
    padding-left: 20px;
    margin: 0;
  }
  .ac-counseling-list li {
    font-size: 13px;
    line-height: 1.5;
    margin-bottom: 4px;
  }

  @media (max-width: 480px) {
    .ac-switcher-label {
      display: none;
    }
    .ac-badge-audience {
      display: none;
    }
  }
`;

export default AdaptiveContent;
