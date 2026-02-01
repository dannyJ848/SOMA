/**
 * Vital Education Component
 *
 * Educational content about vital signs pulled from the core content
 * databases, with complexity-appropriate explanations driven by the
 * user's selected complexity level.
 */

import { useState, useMemo, useCallback } from 'react';
import type { VitalType } from '../../core/vitals/types.js';
import { getVitalDisplayName, getVitalColor } from '../../core/vitals/index.js';
import { heartRate, bloodPressure, respiratoryRate } from '../../core/content/vitals/index.js';
import type { EducationalContent, LevelContent, ComplexityLevel } from '../../core/content/types.js';
import { COMPLEXITY_LEVEL_NAMES } from '../../core/content/types.js';
import {
  HEART_RATE_RANGES,
  HRV_RMSSD_RANGES,
  BLOOD_PRESSURE_SYSTOLIC_RANGES,
  BLOOD_PRESSURE_DIASTOLIC_RANGES,
  OXYGEN_SATURATION_RANGES,
  RESPIRATORY_RATE_RANGES,
  SLEEP_DURATION_RANGES,
  DEEP_SLEEP_RANGES,
  REM_SLEEP_RANGES,
  RECOVERY_SCORE_RANGES,
  type ReferenceRange,
} from '../../core/vitals/reference-ranges.js';
import { useComplexity } from '../contexts/ComplexityContext.js';

// ============================================
// Types
// ============================================

interface VitalEducationProps {
  selectedVital: VitalType | null;
  onSelectVital: (vital: VitalType | null) => void;
}

/**
 * Mapping from VitalType to its content database entry (if available)
 * and its reference ranges for displaying real medical data.
 */
interface VitalContentMapping {
  type: VitalType;
  name: string;
  icon: string;
  content: EducationalContent | null;
  referenceRanges: { label: string; range: ReferenceRange }[];
}

// ============================================
// Content Database Mappings
// ============================================

const VITAL_CONTENT_MAP: VitalContentMapping[] = [
  {
    type: 'heart-rate',
    name: 'Heart Rate',
    icon: '❤️',
    content: heartRate,
    referenceRanges: [
      { label: 'Resting Heart Rate', range: HEART_RATE_RANGES },
    ],
  },
  {
    type: 'hrv',
    name: 'Heart Rate Variability',
    icon: '📈',
    content: heartRate, // HRV is covered within the heart rate content database
    referenceRanges: [
      { label: 'HRV (RMSSD)', range: HRV_RMSSD_RANGES },
    ],
  },
  {
    type: 'blood-pressure',
    name: 'Blood Pressure',
    icon: '🩺',
    content: bloodPressure,
    referenceRanges: [
      { label: 'Systolic', range: BLOOD_PRESSURE_SYSTOLIC_RANGES },
      { label: 'Diastolic', range: BLOOD_PRESSURE_DIASTOLIC_RANGES },
    ],
  },
  {
    type: 'oxygen-saturation',
    name: 'Blood Oxygen',
    icon: '🫁',
    content: null, // No dedicated content DB entry yet
    referenceRanges: [
      { label: 'SpO2', range: OXYGEN_SATURATION_RANGES },
    ],
  },
  {
    type: 'respiratory-rate',
    name: 'Respiratory Rate',
    icon: '🌬️',
    content: respiratoryRate,
    referenceRanges: [
      { label: 'Respiratory Rate', range: RESPIRATORY_RATE_RANGES },
    ],
  },
  {
    type: 'sleep',
    name: 'Sleep',
    icon: '😴',
    content: null, // No dedicated content DB entry yet
    referenceRanges: [
      { label: 'Duration', range: SLEEP_DURATION_RANGES },
      { label: 'Deep Sleep', range: DEEP_SLEEP_RANGES },
      { label: 'REM Sleep', range: REM_SLEEP_RANGES },
    ],
  },
  {
    type: 'recovery',
    name: 'Recovery',
    icon: '🔋',
    content: null, // No dedicated content DB entry yet
    referenceRanges: [
      { label: 'Recovery Score', range: RECOVERY_SCORE_RANGES },
    ],
  },
];

// ============================================
// Helpers
// ============================================

/**
 * Format a ReferenceRange into human-readable range strings
 * for display in the education panel.
 */
function formatReferenceRanges(
  ranges: { label: string; range: ReferenceRange }[]
): { label: string; range: string; note?: string }[] {
  const result: { label: string; range: string; note?: string }[] = [];

  for (const { label, range } of ranges) {
    const unit = range.unit;

    if (range.optimal) {
      result.push({
        label: `${label} - Optimal`,
        range: `${range.optimal.min}-${range.optimal.max} ${unit}`,
      });
    }
    if (range.normal) {
      result.push({
        label: `${label} - Normal`,
        range: `${range.normal.min}-${range.normal.max} ${unit}`,
      });
    }
    if (range.elevated) {
      result.push({
        label: `${label} - Elevated`,
        range: `${range.elevated.min}-${range.elevated.max} ${unit}`,
      });
    }
    if (range.critical) {
      const parts: string[] = [];
      if (range.critical.low !== undefined) parts.push(`<${range.critical.low}`);
      if (range.critical.high !== undefined) parts.push(`>${range.critical.high}`);
      if (parts.length > 0) {
        result.push({
          label: `${label} - Critical`,
          range: `${parts.join(' or ')} ${unit}`,
          note: 'Seek medical attention',
        });
      }
    }
    if (range.source && result.length > 0) {
      result[result.length - 1] = {
        ...result[result.length - 1],
        note: result[result.length - 1]?.note
          ? `${result[result.length - 1].note} (${range.source})`
          : `Source: ${range.source}`,
      };
    }
  }

  return result;
}

/**
 * Extract key terms from a LevelContent as displayable strings.
 */
function getKeyTermsDisplay(levelContent: LevelContent): string[] {
  return levelContent.keyTerms.map(
    (t) => `${t.term}${t.pronunciation ? ` (${t.pronunciation})` : ''}: ${t.definition}`
  );
}

// ============================================
// Component
// ============================================

export function VitalEducation({
  selectedVital,
  onSelectVital,
}: VitalEducationProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>('ranges');
  const { level: complexityLevel } = useComplexity();

  // Clamp complexity level to valid range
  const safeLevel: ComplexityLevel = (
    [1, 2, 3, 4, 5].includes(complexityLevel) ? complexityLevel : 2
  ) as ComplexityLevel;

  // Get selected vital content mapping
  const selectedMapping = useMemo(() => {
    if (!selectedVital) return null;
    return VITAL_CONTENT_MAP.find((v) => v.type === selectedVital) || null;
  }, [selectedVital]);

  // Get complexity-appropriate content from the real content database
  const levelContent = useMemo((): LevelContent | null => {
    if (!selectedMapping?.content) return null;
    return selectedMapping.content.levels[safeLevel] || null;
  }, [selectedMapping, safeLevel]);

  // Build reference range display from real medical data
  const referenceRangeDisplay = useMemo(() => {
    if (!selectedMapping) return [];
    return formatReferenceRanges(selectedMapping.referenceRanges);
  }, [selectedMapping]);

  // Toggle section
  const toggleSection = useCallback((section: string) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  }, []);

  return (
    <div className="vital-education">
      {/* Vital Selector */}
      <div className="vital-selector">
        <h2>Learn About Your Vitals</h2>
        <p>Select a vital sign to learn more about it</p>
        <div className="vital-pills">
          {VITAL_CONTENT_MAP.map((vital) => (
            <button
              key={vital.type}
              className={`vital-pill ${selectedVital === vital.type ? 'active' : ''}`}
              onClick={() => onSelectVital(vital.type)}
              style={{
                '--vital-color': getVitalColor(vital.type),
              } as React.CSSProperties}
            >
              <span className="pill-icon">{vital.icon}</span>
              <span className="pill-label">{vital.name}</span>
            </button>
          ))}
        </div>

        {/* Complexity level indicator */}
        <div className="complexity-indicator">
          <span className="complexity-label">
            Detail level: {COMPLEXITY_LEVEL_NAMES[safeLevel]}
          </span>
        </div>
      </div>

      {/* Selected Vital Content */}
      {selectedMapping ? (
        <div className="vital-content">
          <div className="content-header">
            <span className="header-icon">{selectedMapping.icon}</span>
            <div className="header-text">
              <h3>{selectedMapping.name}</h3>
              {/* Use real content database summary when available, fall back to display name */}
              <p>
                {levelContent
                  ? levelContent.summary
                  : `Educational information about ${selectedMapping.name.toLowerCase()}.`}
              </p>
            </div>
          </div>

          {/* Medical Reference Ranges (from core/vitals/reference-ranges.ts) */}
          <div className="content-section">
            <button
              className={`section-header ${expandedSection === 'ranges' ? 'expanded' : ''}`}
              onClick={() => toggleSection('ranges')}
            >
              <span className="section-title">📊 Medical Reference Ranges</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {expandedSection === 'ranges' && (
              <div className="section-content">
                <div className="ranges-grid">
                  {referenceRangeDisplay.map((range, index) => (
                    <div key={index} className="range-item">
                      <span className="range-label">{range.label}</span>
                      <span className="range-value">{range.range}</span>
                      {range.note && <span className="range-note">{range.note}</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Detailed Explanation (from content database, complexity-adjusted) */}
          {levelContent && (
            <div className="content-section">
              <button
                className={`section-header ${expandedSection === 'explanation' ? 'expanded' : ''}`}
                onClick={() => toggleSection('explanation')}
              >
                <span className="section-title">📖 Detailed Explanation</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {expandedSection === 'explanation' && (
                <div className="section-content explanation-content">
                  {/* Render markdown-style explanation as paragraphs */}
                  {levelContent.explanation.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="explanation-paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Key Terms (from content database) */}
          {levelContent && levelContent.keyTerms.length > 0 && (
            <div className="content-section">
              <button
                className={`section-header ${expandedSection === 'terms' ? 'expanded' : ''}`}
                onClick={() => toggleSection('terms')}
              >
                <span className="section-title">📝 Key Terms</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {expandedSection === 'terms' && (
                <div className="section-content">
                  <ul className="terms-list">
                    {getKeyTermsDisplay(levelContent).map((term, index) => (
                      <li key={index}>{term}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Analogies (levels 1-2 from content database) */}
          {levelContent?.analogies && levelContent.analogies.length > 0 && (
            <div className="content-section">
              <button
                className={`section-header ${expandedSection === 'analogies' ? 'expanded' : ''}`}
                onClick={() => toggleSection('analogies')}
              >
                <span className="section-title">💡 Helpful Analogies</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {expandedSection === 'analogies' && (
                <div className="section-content">
                  <ul className="factor-list">
                    {levelContent.analogies.map((analogy, index) => (
                      <li key={index}>{analogy}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Real-World Examples (from content database) */}
          {levelContent?.examples && levelContent.examples.length > 0 && (
            <div className="content-section">
              <button
                className={`section-header ${expandedSection === 'examples' ? 'expanded' : ''}`}
                onClick={() => toggleSection('examples')}
              >
                <span className="section-title">🔬 Real-World Examples</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {expandedSection === 'examples' && (
                <div className="section-content">
                  <ul className="factor-list">
                    {levelContent.examples.map((example, index) => (
                      <li key={index}>{example}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Clinical Notes (levels 3-5 from content database) */}
          {levelContent?.clinicalNotes && (
            <div className="content-section">
              <button
                className={`section-header ${expandedSection === 'clinical' ? 'expanded' : ''}`}
                onClick={() => toggleSection('clinical')}
              >
                <span className="section-title">🏥 Clinical Notes</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {expandedSection === 'clinical' && (
                <div className="section-content">
                  <div className="clinical-notes">
                    {levelContent.clinicalNotes.split('\n').map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Citations (from content database) */}
          {selectedMapping.content?.citations && selectedMapping.content.citations.length > 0 && (
            <div className="content-section">
              <button
                className={`section-header ${expandedSection === 'citations' ? 'expanded' : ''}`}
                onClick={() => toggleSection('citations')}
              >
                <span className="section-title">📚 Sources & Citations</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {expandedSection === 'citations' && (
                <div className="section-content">
                  <ul className="citations-list">
                    {selectedMapping.content.citations.map((citation) => (
                      <li key={citation.id}>
                        <strong>{citation.title}</strong>
                        {citation.authors && ` - ${citation.authors.join(', ')}`}
                        {citation.source && ` (${citation.source})`}
                        {citation.url && (
                          <a
                            href={citation.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="citation-link"
                          >
                            {' '}
                            View Source
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="no-selection">
          <div className="empty-state">
            <span className="empty-icon">📖</span>
            <h3>Select a Vital Sign</h3>
            <p>
              Choose a vital sign above to learn about normal ranges, what affects
              it, and tips for improving your health.
            </p>
          </div>
        </div>
      )}

      {/* General Health Notice */}
      <div className="health-notice">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <p>
          The information provided here is for educational purposes only and should
          not replace professional medical advice. Consult your healthcare provider
          for personalized guidance.
        </p>
      </div>
    </div>
  );
}

export default VitalEducation;
