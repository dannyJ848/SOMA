/**
 * Complexity Settings Component
 *
 * Content complexity level and medical terminology preferences.
 */

import { useSettings } from './useSettings';
import type { ComplexityLevel } from './types';

// ============================================
// Complexity Level Descriptions
// ============================================

const complexityLevels: Array<{
  level: ComplexityLevel;
  title: string;
  description: string;
  example: string;
}> = [
  {
    level: 'patient',
    title: 'Patient',
    description: 'Simple, everyday language. Avoids medical jargon.',
    example: 'Your heart is beating faster than normal.',
  },
  {
    level: 'informed',
    title: 'Informed',
    description: 'Clear explanations with some medical terms defined.',
    example: 'You have tachycardia (rapid heart rate), above 100 bpm at rest.',
  },
  {
    level: 'student',
    title: 'Student',
    description: 'Medical terminology with context. Good for learning.',
    example: 'Sinus tachycardia with HR >100 bpm, likely compensatory response.',
  },
  {
    level: 'professional',
    title: 'Professional',
    description: 'Full medical terminology. For healthcare professionals.',
    example: 'Sinus tachycardia, HR 112 bpm, likely secondary to hypovolemia.',
  },
];

// ============================================
// Main Component
// ============================================

export function ComplexitySettings() {
  const { settings, updateComplexity } = useSettings();
  const complexity = settings.complexity;

  const handleLevelChange = (level: ComplexityLevel) => {
    updateComplexity({ defaultLevel: level });
  };

  return (
    <div className="complexity-settings settings-content">
      {/* Complexity Level */}
      <section className="settings-section">
        <h3 className="settings-section-title">Content Complexity</h3>
        <p className="settings-section-description">
          Choose how detailed and technical you want explanations to be
        </p>

        <div className="complexity-levels">
          {complexityLevels.map(({ level, title, description, example }) => (
            <button
              key={level}
              className={`complexity-level ${complexity.defaultLevel === level ? 'active' : ''}`}
              onClick={() => handleLevelChange(level)}
            >
              <div className="complexity-header">
                <span className="complexity-title">{title}</span>
                {complexity.defaultLevel === level && (
                  <svg className="complexity-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </div>
              <p className="complexity-description">{description}</p>
              <div className="complexity-example">
                <span className="example-label">Example:</span>
                <span className="example-text">{example}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Terminology Options */}
      <section className="settings-section">
        <h3 className="settings-section-title">Terminology Options</h3>
        <div className="settings-toggles">
          <label className="settings-toggle">
            <div className="settings-toggle-info">
              <span className="settings-toggle-label">Show Medical Terms</span>
              <span className="settings-toggle-description">
                Include proper medical terminology alongside explanations
              </span>
            </div>
            <input
              type="checkbox"
              checked={complexity.showMedicalTerms}
              onChange={() => updateComplexity({ showMedicalTerms: !complexity.showMedicalTerms })}
            />
            <span className="settings-toggle-switch" />
          </label>

          <label className="settings-toggle">
            <div className="settings-toggle-info">
              <span className="settings-toggle-label">Show Abbreviations</span>
              <span className="settings-toggle-description">
                Use standard medical abbreviations (e.g., BP, HR, BMI)
              </span>
            </div>
            <input
              type="checkbox"
              checked={complexity.showAbbreviations}
              onChange={() => updateComplexity({ showAbbreviations: !complexity.showAbbreviations })}
            />
            <span className="settings-toggle-switch" />
          </label>

          <label className="settings-toggle">
            <div className="settings-toggle-info">
              <span className="settings-toggle-label">Include References</span>
              <span className="settings-toggle-description">
                Show links to medical sources and research
              </span>
            </div>
            <input
              type="checkbox"
              checked={complexity.includeReferences}
              onChange={() => updateComplexity({ includeReferences: !complexity.includeReferences })}
            />
            <span className="settings-toggle-switch" />
          </label>
        </div>
      </section>

      {/* Explanation Depth */}
      <section className="settings-section">
        <h3 className="settings-section-title">Explanation Depth</h3>
        <p className="settings-section-description">
          How much detail to include in explanations
        </p>
        <div className="settings-option-grid depth-options">
          <button
            className={`option-button ${complexity.explanationDepth === 'brief' ? 'active' : ''}`}
            onClick={() => updateComplexity({ explanationDepth: 'brief' })}
          >
            <span className="option-label">Brief</span>
            <span className="option-description">
              Key points only. Quick and to the point.
            </span>
          </button>
          <button
            className={`option-button ${complexity.explanationDepth === 'standard' ? 'active' : ''}`}
            onClick={() => updateComplexity({ explanationDepth: 'standard' })}
          >
            <span className="option-label">Standard</span>
            <span className="option-description">
              Balanced explanations with context.
            </span>
          </button>
          <button
            className={`option-button ${complexity.explanationDepth === 'detailed' ? 'active' : ''}`}
            onClick={() => updateComplexity({ explanationDepth: 'detailed' })}
          >
            <span className="option-label">Detailed</span>
            <span className="option-description">
              Comprehensive coverage of all aspects.
            </span>
          </button>
        </div>
      </section>

      {/* Preview */}
      <section className="settings-section">
        <h3 className="settings-section-title">Preview</h3>
        <div className="complexity-preview">
          <p className="preview-label">With your current settings, content will appear like this:</p>
          <div className="preview-content">
            {complexity.defaultLevel === 'patient' && (
              <p>
                Your blood pressure is a bit high. This means your heart is working harder than
                usual to pump blood. Try to relax, reduce salt, and talk to your doctor if it
                stays high.
              </p>
            )}
            {complexity.defaultLevel === 'informed' && (
              <p>
                Your blood pressure reading of 145/92 mmHg indicates stage 1 hypertension
                {complexity.showAbbreviations ? ' (HTN)' : ''}.
                {complexity.showMedicalTerms && ' This is systemic arterial hypertension.'}
                {' '}Lifestyle modifications and possibly medication may be recommended.
              </p>
            )}
            {complexity.defaultLevel === 'student' && (
              <p>
                Blood pressure 145/92 mmHg
                {complexity.showAbbreviations ? ' (BP elevated)' : ''}, consistent with
                stage 1 hypertension per JNC 8 guidelines.
                {complexity.showMedicalTerms && ' Essential hypertension suspected.'}
                {' '}Consider DASH diet, Na+ restriction, and cardiology referral.
                {complexity.includeReferences && ' [Ref: JNC 8, JACC 2014]'}
              </p>
            )}
            {complexity.defaultLevel === 'professional' && (
              <p>
                BP 145/92 mmHg
                {complexity.showAbbreviations ? ', HR 78 bpm, RR 16/min' : ''}.
                Stage 1 HTN per ACC/AHA 2017. Recommend TLC x 3mo, consider initiation of
                antihypertensive therapy (thiazide-type diuretic or CCB per guidelines).
                {complexity.includeReferences && ' [Whelton et al., Hypertension 2018]'}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ComplexitySettings;
