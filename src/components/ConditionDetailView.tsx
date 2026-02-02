/**
 * ConditionDetailView Component
 *
 * Displays full educational content for a selected condition at the
 * user's current complexity level. Renders name, summary, explanation,
 * key terms, clinical notes, patient counseling points, cross-references,
 * media references, and citations. Includes an embedded complexity
 * level switcher.
 */

import { memo, useMemo, useCallback } from 'react';
import { useComplexity, COMPLEXITY_LABELS, COMPLEXITY_DESCRIPTIONS } from '../contexts/ComplexityContext.js';
import { useI18n } from '../i18n/useI18n.js';
import type { ComplexityLevel } from '../contexts/ComplexityContext.js';
import type {
  EducationalContent,
  LevelContent,
  TermDefinition,
  CrossReference,
  MediaAsset,
  Citation,
} from '../../core/content/types.js';

// ============================================
// Props
// ============================================

export interface ConditionDetailViewProps {
  /** The educational content object to display */
  content: EducationalContent;
  /** Optional callback when a cross-reference link is clicked */
  onCrossReferenceClick?: (ref: CrossReference) => void;
  /** Optional callback when a media asset is clicked */
  onMediaClick?: (asset: MediaAsset) => void;
  /** Optional additional CSS class name */
  className?: string;
}

// ============================================
// Sub-components
// ============================================

/** Inline complexity level switcher (1-5 buttons) */
const LevelSwitcher = memo(function LevelSwitcher({
  level,
  onChange,
}: {
  level: ComplexityLevel;
  onChange: (level: ComplexityLevel) => void;
}) {
  const levels: ComplexityLevel[] = [1, 2, 3, 4, 5];

  return (
    <div className="cdv-level-switcher">
      <span className="cdv-level-switcher-label">Complexity</span>
      <div className="cdv-level-buttons">
        {levels.map((l) => (
          <button
            key={l}
            className={`cdv-level-btn ${level === l ? 'active' : ''}`}
            onClick={() => onChange(l)}
            title={COMPLEXITY_DESCRIPTIONS[l]}
            aria-label={`Level ${l}: ${COMPLEXITY_LABELS[l]}`}
            aria-pressed={level === l}
          >
            <span className="cdv-level-btn-number">{l}</span>
            <span className="cdv-level-btn-label">{COMPLEXITY_LABELS[l]}</span>
          </button>
        ))}
      </div>
      <span className="cdv-level-description">{COMPLEXITY_DESCRIPTIONS[level]}</span>
    </div>
  );
});

/** Renders a single key term with definition */
const KeyTermCard = memo(function KeyTermCard({ term }: { term: TermDefinition }) {
  return (
    <div className="cdv-term-card">
      <div className="cdv-term-header">
        <span className="cdv-term-name">{term.term}</span>
        {term.pronunciation && (
          <span className="cdv-term-pronunciation">[{term.pronunciation}]</span>
        )}
      </div>
      <p className="cdv-term-definition">{term.definition}</p>
      {term.etymology && (
        <p className="cdv-term-etymology">
          <span className="cdv-label">Etymology:</span> {term.etymology}
        </p>
      )}
      {term.relatedTerms && term.relatedTerms.length > 0 && (
        <div className="cdv-term-related">
          <span className="cdv-label">Related:</span>{' '}
          {term.relatedTerms.join(', ')}
        </div>
      )}
    </div>
  );
});

/** Renders a citation entry */
const CitationEntry = memo(function CitationEntry({ citation, index }: { citation: Citation; index: number }) {
  return (
    <li className="cdv-citation-item">
      <span className="cdv-citation-index">[{index + 1}]</span>
      <div className="cdv-citation-content">
        <span className="cdv-citation-title">{citation.title}</span>
        {citation.authors && citation.authors.length > 0 && (
          <span className="cdv-citation-authors">{citation.authors.join(', ')}</span>
        )}
        <span className="cdv-citation-source">
          {citation.source}
          {citation.chapter && `, Ch. ${citation.chapter}`}
          {citation.section && `, Sec. ${citation.section}`}
          {citation.page && `, p. ${citation.page}`}
        </span>
        {citation.url && (
          <a
            href={citation.url}
            className="cdv-citation-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source
          </a>
        )}
        {citation.license && (
          <span className="cdv-citation-license">{citation.license}</span>
        )}
      </div>
    </li>
  );
});

/** Renders a media asset card */
const MediaCard = memo(function MediaCard({
  asset,
  onClick,
}: {
  asset: MediaAsset;
  onClick?: (asset: MediaAsset) => void;
}) {
  const typeLabels: Record<MediaAsset['type'], string> = {
    image: 'Image',
    diagram: 'Diagram',
    video: 'Video',
    animation: 'Animation',
    '3d-model': '3D Model',
    histology: 'Histology',
  };

  return (
    <button
      className="cdv-media-card"
      onClick={() => onClick?.(asset)}
      type="button"
    >
      <div className="cdv-media-type-badge">{typeLabels[asset.type]}</div>
      <div className="cdv-media-info">
        <span className="cdv-media-title">{asset.title}</span>
        {asset.description && (
          <span className="cdv-media-description">{asset.description}</span>
        )}
        {asset.duration != null && (
          <span className="cdv-media-duration">
            {Math.floor(asset.duration / 60)}:{String(asset.duration % 60).padStart(2, '0')}
          </span>
        )}
      </div>
    </button>
  );
});

/** Renders a cross-reference link */
const CrossReferenceLink = memo(function CrossReferenceLink({
  crossRef,
  onClick,
}: {
  crossRef: CrossReference;
  onClick?: (ref: CrossReference) => void;
}) {
  const relationshipLabels: Record<CrossReference['relationship'], string> = {
    parent: 'Parent',
    child: 'Sub-topic',
    sibling: 'Related',
    related: 'Related',
    'see-also': 'See Also',
  };

  return (
    <button
      className="cdv-crossref-link"
      onClick={() => onClick?.(crossRef)}
      type="button"
    >
      <span className="cdv-crossref-badge">{relationshipLabels[crossRef.relationship]}</span>
      <span className="cdv-crossref-label">{crossRef.label || crossRef.targetId}</span>
      <svg
        className="cdv-crossref-arrow"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  );
});

// ============================================
// Main Component
// ============================================

export const ConditionDetailView = memo(function ConditionDetailView({
  content,
  onCrossReferenceClick,
  onMediaClick,
  className = '',
}: ConditionDetailViewProps) {
  const { level, setLevel } = useComplexity();
  const { language } = useI18n();

  const isSpanish = language === 'es';

  // Get the content for the current complexity level
  const levelContent: LevelContent = useMemo(() => {
    return content.levels[level];
  }, [content.levels, level]);

  // Determine display name
  const displayName = isSpanish && content.nameEs ? content.nameEs : content.name;

  // Show clinical notes at level 3+
  const showClinicalNotes = level >= 3 && !!levelContent.clinicalNotes;

  // Show patient counseling points at level 1-2
  const showCounselingPoints =
    level <= 2 &&
    !!levelContent.patientCounselingPoints &&
    levelContent.patientCounselingPoints.length > 0;

  const handleLevelChange = useCallback(
    (newLevel: ComplexityLevel) => {
      setLevel(newLevel);
    },
    [setLevel]
  );

  return (
    <div className={`cdv-container ${className}`}>
      {/* Header */}
      <header className="cdv-header">
        <h1 className="cdv-title">{displayName}</h1>
        {content.alternateNames && content.alternateNames.length > 0 && (
          <p className="cdv-alternate-names">
            Also known as: {content.alternateNames.join(', ')}
          </p>
        )}
        {content.tags.clinicalRelevance && (
          <span className={`cdv-relevance-badge cdv-relevance-${content.tags.clinicalRelevance}`}>
            {content.tags.clinicalRelevance} clinical relevance
          </span>
        )}
      </header>

      {/* Complexity Level Switcher */}
      <LevelSwitcher level={level} onChange={handleLevelChange} />

      {/* Summary */}
      <section className="cdv-section">
        <h2 className="cdv-section-title">Summary</h2>
        <p className="cdv-summary">{levelContent.summary}</p>
      </section>

      {/* Full Explanation */}
      <section className="cdv-section">
        <h2 className="cdv-section-title">Explanation</h2>
        <div className="cdv-explanation">{levelContent.explanation}</div>
      </section>

      {/* Analogies (if available) */}
      {levelContent.analogies && levelContent.analogies.length > 0 && (
        <section className="cdv-section">
          <h2 className="cdv-section-title">Analogies</h2>
          <ul className="cdv-analogies-list">
            {levelContent.analogies.map((analogy, i) => (
              <li key={i} className="cdv-analogy-item">{analogy}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Examples (if available) */}
      {levelContent.examples && levelContent.examples.length > 0 && (
        <section className="cdv-section">
          <h2 className="cdv-section-title">Examples</h2>
          <ul className="cdv-examples-list">
            {levelContent.examples.map((example, i) => (
              <li key={i} className="cdv-example-item">{example}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Key Terms */}
      {levelContent.keyTerms.length > 0 && (
        <section className="cdv-section">
          <h2 className="cdv-section-title">Key Terms</h2>
          <div className="cdv-terms-grid">
            {levelContent.keyTerms.map((term, i) => (
              <KeyTermCard key={i} term={term} />
            ))}
          </div>
        </section>
      )}

      {/* Clinical Notes (level 3+) */}
      {showClinicalNotes && (
        <section className="cdv-section cdv-clinical-section">
          <h2 className="cdv-section-title">Clinical Notes</h2>
          <div className="cdv-clinical-notes">{levelContent.clinicalNotes}</div>
        </section>
      )}

      {/* Patient Counseling Points (level 1-2) */}
      {showCounselingPoints && (
        <section className="cdv-section cdv-counseling-section">
          <h2 className="cdv-section-title">Patient Counseling Points</h2>
          <ul className="cdv-counseling-list">
            {levelContent.patientCounselingPoints!.map((point, i) => (
              <li key={i} className="cdv-counseling-item">{point}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Cross References */}
      {content.crossReferences.length > 0 && (
        <section className="cdv-section">
          <h2 className="cdv-section-title">Related Topics</h2>
          <div className="cdv-crossref-list">
            {content.crossReferences.map((ref, i) => (
              <CrossReferenceLink
                key={i}
                crossRef={ref}
                onClick={onCrossReferenceClick}
              />
            ))}
          </div>
        </section>
      )}

      {/* Media References */}
      {content.media.length > 0 && (
        <section className="cdv-section">
          <h2 className="cdv-section-title">Media</h2>
          <div className="cdv-media-grid">
            {content.media.map((asset) => (
              <MediaCard key={asset.id} asset={asset} onClick={onMediaClick} />
            ))}
          </div>
        </section>
      )}

      {/* Citations */}
      {content.citations.length > 0 && (
        <section className="cdv-section">
          <h2 className="cdv-section-title">Citations</h2>
          <ol className="cdv-citations-list">
            {content.citations.map((citation, i) => (
              <CitationEntry key={citation.id} citation={citation} index={i} />
            ))}
          </ol>
        </section>
      )}

      {/* Metadata Footer */}
      <footer className="cdv-footer">
        {content.tags.systems && content.tags.systems.length > 0 && (
          <div className="cdv-tags">
            {content.tags.systems.map((sys) => (
              <span key={sys} className="cdv-tag">{sys}</span>
            ))}
          </div>
        )}
        <span className="cdv-meta">
          v{content.version} &middot; Updated {content.updatedAt}
        </span>
      </footer>

      {/* Styles */}
      <style>{`
        .cdv-container {
          padding: 24px;
          background: var(--background-primary, #1a1a2e);
          color: var(--text-primary, #e0e0e0);
          font-family: inherit;
          overflow-y: auto;
          max-height: 100%;
        }

        /* Header */
        .cdv-header {
          margin-bottom: 20px;
        }

        .cdv-title {
          font-size: 28px;
          font-weight: 700;
          color: var(--text-primary, #fff);
          margin: 0 0 8px 0;
          line-height: 1.2;
        }

        .cdv-alternate-names {
          font-size: 13px;
          color: var(--text-secondary, #888);
          margin: 0 0 8px 0;
          font-style: italic;
        }

        .cdv-relevance-badge {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .cdv-relevance-low {
          background: rgba(34, 197, 94, 0.15);
          color: #22c55e;
        }

        .cdv-relevance-medium {
          background: rgba(234, 179, 8, 0.15);
          color: #eab308;
        }

        .cdv-relevance-high {
          background: rgba(249, 115, 22, 0.15);
          color: #f97316;
        }

        .cdv-relevance-critical {
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
        }

        /* Level Switcher */
        .cdv-level-switcher {
          padding: 16px;
          background: var(--background-secondary, #252536);
          border-radius: 10px;
          margin-bottom: 24px;
        }

        .cdv-level-switcher-label {
          display: block;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-secondary, #888);
          margin-bottom: 10px;
        }

        .cdv-level-buttons {
          display: flex;
          gap: 6px;
          margin-bottom: 10px;
        }

        .cdv-level-btn {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px 4px;
          background: var(--button-background, #2a2a3e);
          border: 2px solid transparent;
          border-radius: 8px;
          color: var(--text-secondary, #888);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cdv-level-btn:hover {
          background: var(--button-hover, #3a3a50);
          color: var(--text-primary, #fff);
        }

        .cdv-level-btn.active {
          background: linear-gradient(135deg, #4a9eff 0%, #7c3aed 100%);
          border-color: transparent;
          color: #fff;
        }

        .cdv-level-btn-number {
          font-size: 16px;
          font-weight: 700;
          line-height: 1;
        }

        .cdv-level-btn-label {
          font-size: 9px;
          margin-top: 3px;
          white-space: nowrap;
        }

        .cdv-level-description {
          display: block;
          font-size: 12px;
          color: var(--text-secondary, #999);
        }

        /* Sections */
        .cdv-section {
          margin-bottom: 24px;
        }

        .cdv-section-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary, #fff);
          margin: 0 0 12px 0;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cdv-summary {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-primary, #d0d0d0);
          margin: 0;
          padding: 14px 16px;
          background: rgba(74, 158, 255, 0.06);
          border-left: 3px solid var(--accent-primary, #4a9eff);
          border-radius: 0 8px 8px 0;
        }

        .cdv-explanation {
          font-size: 14px;
          line-height: 1.7;
          color: var(--text-primary, #ccc);
          white-space: pre-wrap;
        }

        /* Analogies & Examples */
        .cdv-analogies-list,
        .cdv-examples-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cdv-analogy-item,
        .cdv-example-item {
          padding: 12px 16px;
          background: rgba(139, 92, 246, 0.08);
          border-radius: 8px;
          font-size: 14px;
          line-height: 1.5;
          color: var(--text-primary, #ccc);
          border-left: 3px solid #8b5cf6;
        }

        .cdv-example-item {
          background: rgba(34, 197, 94, 0.08);
          border-left-color: #22c55e;
        }

        /* Key Terms */
        .cdv-terms-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .cdv-term-card {
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
        }

        .cdv-term-header {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 6px;
        }

        .cdv-term-name {
          font-size: 15px;
          font-weight: 600;
          color: var(--accent-primary, #4a9eff);
        }

        .cdv-term-pronunciation {
          font-size: 12px;
          color: var(--text-secondary, #888);
          font-style: italic;
        }

        .cdv-term-definition {
          font-size: 14px;
          line-height: 1.5;
          color: var(--text-primary, #ccc);
          margin: 0;
        }

        .cdv-term-etymology,
        .cdv-term-related {
          font-size: 12px;
          color: var(--text-secondary, #999);
          margin: 6px 0 0 0;
        }

        .cdv-label {
          font-weight: 600;
          color: var(--text-secondary, #aaa);
        }

        /* Clinical Notes */
        .cdv-clinical-section {
          background: rgba(249, 115, 22, 0.06);
          border: 1px solid rgba(249, 115, 22, 0.2);
          border-radius: 10px;
          padding: 16px;
        }

        .cdv-clinical-section .cdv-section-title {
          color: #f97316;
          border-bottom-color: rgba(249, 115, 22, 0.2);
        }

        .cdv-clinical-notes {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-primary, #ccc);
          white-space: pre-wrap;
        }

        /* Patient Counseling */
        .cdv-counseling-section {
          background: rgba(34, 197, 94, 0.06);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 10px;
          padding: 16px;
        }

        .cdv-counseling-section .cdv-section-title {
          color: #22c55e;
          border-bottom-color: rgba(34, 197, 94, 0.2);
        }

        .cdv-counseling-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cdv-counseling-item {
          padding: 10px 14px;
          background: rgba(34, 197, 94, 0.08);
          border-radius: 6px;
          font-size: 14px;
          line-height: 1.5;
          color: var(--text-primary, #ccc);
        }

        .cdv-counseling-item::before {
          content: "\\2713  ";
          color: #22c55e;
          font-weight: 700;
        }

        /* Cross References */
        .cdv-crossref-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cdv-crossref-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: var(--text-primary, #ccc);
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          width: 100%;
        }

        .cdv-crossref-link:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--accent-primary, #4a9eff);
          transform: translateX(4px);
        }

        .cdv-crossref-badge {
          padding: 2px 8px;
          background: rgba(74, 158, 255, 0.15);
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          color: var(--accent-primary, #4a9eff);
          text-transform: uppercase;
          white-space: nowrap;
        }

        .cdv-crossref-label {
          flex: 1;
        }

        .cdv-crossref-arrow {
          color: var(--text-secondary, #666);
          flex-shrink: 0;
        }

        /* Media */
        .cdv-media-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 12px;
        }

        .cdv-media-card {
          display: flex;
          flex-direction: column;
          padding: 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          color: inherit;
        }

        .cdv-media-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--accent-primary, #4a9eff);
        }

        .cdv-media-type-badge {
          display: inline-block;
          padding: 2px 8px;
          background: rgba(139, 92, 246, 0.15);
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
          color: #a78bfa;
          text-transform: uppercase;
          margin-bottom: 8px;
          align-self: flex-start;
        }

        .cdv-media-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .cdv-media-title {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-primary, #fff);
        }

        .cdv-media-description {
          font-size: 12px;
          color: var(--text-secondary, #888);
          line-height: 1.4;
        }

        .cdv-media-duration {
          font-size: 11px;
          color: var(--text-secondary, #999);
        }

        /* Citations */
        .cdv-citations-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .cdv-citation-item {
          display: flex;
          gap: 10px;
          padding: 12px 14px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 6px;
        }

        .cdv-citation-index {
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-primary, #4a9eff);
          flex-shrink: 0;
          min-width: 28px;
        }

        .cdv-citation-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .cdv-citation-title {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-primary, #ccc);
        }

        .cdv-citation-authors {
          font-size: 12px;
          color: var(--text-secondary, #999);
        }

        .cdv-citation-source {
          font-size: 12px;
          color: var(--text-secondary, #888);
          font-style: italic;
        }

        .cdv-citation-link {
          font-size: 12px;
          color: var(--accent-primary, #4a9eff);
          text-decoration: none;
        }

        .cdv-citation-link:hover {
          text-decoration: underline;
        }

        .cdv-citation-license {
          font-size: 11px;
          color: var(--text-secondary, #777);
        }

        /* Footer */
        .cdv-footer {
          margin-top: 32px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .cdv-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .cdv-tag {
          padding: 3px 10px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          font-size: 11px;
          color: var(--text-secondary, #999);
          text-transform: capitalize;
        }

        .cdv-meta {
          font-size: 11px;
          color: var(--text-secondary, #666);
        }

        /* Mobile */
        @media (max-width: 768px) {
          .cdv-container {
            padding: 16px;
          }

          .cdv-title {
            font-size: 22px;
          }

          .cdv-level-btn-label {
            display: none;
          }

          .cdv-media-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
});

export default ConditionDetailView;
