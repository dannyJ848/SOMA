/**
 * Accessibility Settings Component
 *
 * Panel for managing accessibility options including
 * font size, contrast, and screen reader support.
 */

import { useCallback } from 'react';
import { useSettings } from './useSettings';
import type { AccessibilitySettings as AccessibilitySettingsType } from './types';

// ============================================
// Main Component
// ============================================

export function AccessibilitySettings() {
  const { settings, updateAccessibility } = useSettings();
  const accessibility = settings.accessibility;

  // Handle toggle changes
  const handleToggle = useCallback(
    (key: keyof AccessibilitySettingsType) => {
      const currentValue = accessibility[key];
      if (typeof currentValue === 'boolean') {
        updateAccessibility({ [key]: !currentValue });
      }
    },
    [accessibility, updateAccessibility]
  );

  // Handle speech rate change
  const handleSpeechRateChange = useCallback(
    (value: number) => {
      updateAccessibility({ speechRate: value });
    },
    [updateAccessibility]
  );

  // Reset to defaults
  const resetToDefaults = useCallback(() => {
    updateAccessibility({
      screenReaderOptimized: false,
      keyboardNavigation: true,
      focusIndicators: true,
      textToSpeech: false,
      speechRate: 1.0,
      autoReadContent: false,
      highContrast: false,
      largeClickTargets: false,
      reduceAnimations: false,
    });
  }, [updateAccessibility]);

  return (
    <div className="accessibility-settings settings-content">
      {/* Vision Section */}
      <section className="settings-section">
        <h3 className="settings-section-title">Vision</h3>
        <p className="settings-section-description">
          Adjust visual elements for better visibility
        </p>

        <div className="settings-toggles">
          <label className="settings-toggle">
            <div className="settings-toggle-info">
              <span className="settings-toggle-label">High Contrast Mode</span>
              <span className="settings-toggle-description">
                Increase contrast between elements for better visibility
              </span>
            </div>
            <input
              type="checkbox"
              checked={accessibility.highContrast}
              onChange={() => handleToggle('highContrast')}
            />
            <span className="settings-toggle-switch" />
          </label>

          <label className="settings-toggle">
            <div className="settings-toggle-info">
              <span className="settings-toggle-label">Large Click Targets</span>
              <span className="settings-toggle-description">
                Make buttons and interactive elements larger
              </span>
            </div>
            <input
              type="checkbox"
              checked={accessibility.largeClickTargets}
              onChange={() => handleToggle('largeClickTargets')}
            />
            <span className="settings-toggle-switch" />
          </label>

          <label className="settings-toggle">
            <div className="settings-toggle-info">
              <span className="settings-toggle-label">Reduce Animations</span>
              <span className="settings-toggle-description">
                Minimize motion and transitions throughout the app
              </span>
            </div>
            <input
              type="checkbox"
              checked={accessibility.reduceAnimations}
              onChange={() => handleToggle('reduceAnimations')}
            />
            <span className="settings-toggle-switch" />
          </label>
        </div>
      </section>

      {/* Screen Reader Section */}
      <section className="settings-section">
        <h3 className="settings-section-title">Screen Reader</h3>
        <p className="settings-section-description">
          Optimize the app for screen reader usage
        </p>

        <div className="settings-toggles">
          <label className="settings-toggle">
            <div className="settings-toggle-info">
              <span className="settings-toggle-label">Screen Reader Optimized</span>
              <span className="settings-toggle-description">
                Enhance compatibility with VoiceOver and other screen readers
              </span>
            </div>
            <input
              type="checkbox"
              checked={accessibility.screenReaderOptimized}
              onChange={() => handleToggle('screenReaderOptimized')}
            />
            <span className="settings-toggle-switch" />
          </label>

          <label className="settings-toggle">
            <div className="settings-toggle-info">
              <span className="settings-toggle-label">Focus Indicators</span>
              <span className="settings-toggle-description">
                Show clear visual focus when navigating with keyboard
              </span>
            </div>
            <input
              type="checkbox"
              checked={accessibility.focusIndicators}
              onChange={() => handleToggle('focusIndicators')}
            />
            <span className="settings-toggle-switch" />
          </label>
        </div>
      </section>

      {/* Keyboard Navigation Section */}
      <section className="settings-section">
        <h3 className="settings-section-title">Keyboard Navigation</h3>
        <p className="settings-section-description">
          Navigate the app using only your keyboard
        </p>

        <div className="settings-toggles">
          <label className="settings-toggle">
            <div className="settings-toggle-info">
              <span className="settings-toggle-label">Enable Keyboard Navigation</span>
              <span className="settings-toggle-description">
                Navigate all features using Tab, Arrow keys, and Enter
              </span>
            </div>
            <input
              type="checkbox"
              checked={accessibility.keyboardNavigation}
              onChange={() => handleToggle('keyboardNavigation')}
            />
            <span className="settings-toggle-switch" />
          </label>
        </div>

        <div className="keyboard-shortcuts-info">
          <h4>Keyboard Shortcuts</h4>
          <div className="shortcuts-grid">
            <div className="shortcut">
              <kbd>Tab</kbd>
              <span>Navigate to next element</span>
            </div>
            <div className="shortcut">
              <kbd>Shift</kbd> + <kbd>Tab</kbd>
              <span>Navigate to previous element</span>
            </div>
            <div className="shortcut">
              <kbd>Enter</kbd> / <kbd>Space</kbd>
              <span>Activate button or link</span>
            </div>
            <div className="shortcut">
              <kbd>Esc</kbd>
              <span>Close dialog or menu</span>
            </div>
            <div className="shortcut">
              <kbd>Cmd</kbd> + <kbd>K</kbd>
              <span>Open search</span>
            </div>
            <div className="shortcut">
              <kbd>Arrow Keys</kbd>
              <span>Navigate within menus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Text-to-Speech Section */}
      <section className="settings-section">
        <h3 className="settings-section-title">Text-to-Speech</h3>
        <p className="settings-section-description">
          Have content read aloud to you
        </p>

        <div className="settings-toggles">
          <label className="settings-toggle">
            <div className="settings-toggle-info">
              <span className="settings-toggle-label">Enable Text-to-Speech</span>
              <span className="settings-toggle-description">
                Read content aloud using the system voice
              </span>
            </div>
            <input
              type="checkbox"
              checked={accessibility.textToSpeech}
              onChange={() => handleToggle('textToSpeech')}
            />
            <span className="settings-toggle-switch" />
          </label>

          {accessibility.textToSpeech && (
            <>
              <label className="settings-toggle">
                <div className="settings-toggle-info">
                  <span className="settings-toggle-label">Auto-read Content</span>
                  <span className="settings-toggle-description">
                    Automatically read new content when it appears
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={accessibility.autoReadContent}
                  onChange={() => handleToggle('autoReadContent')}
                />
                <span className="settings-toggle-switch" />
              </label>

              <div className="settings-control speech-rate-control">
                <div className="settings-control-header">
                  <label className="settings-control-label">Speech Rate</label>
                  <span className="settings-control-value">
                    {accessibility.speechRate.toFixed(1)}x
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="2.0"
                  step="0.1"
                  value={accessibility.speechRate}
                  onChange={(e) => handleSpeechRateChange(parseFloat(e.target.value))}
                  className="settings-slider"
                />
                <div className="slider-labels">
                  <span>Slower</span>
                  <span>Normal</span>
                  <span>Faster</span>
                </div>
              </div>

              <button
                className="test-speech-btn"
                onClick={() => {
                  if ('speechSynthesis' in window) {
                    const utterance = new SpeechSynthesisUtterance(
                      'This is a test of the text-to-speech feature.'
                    );
                    utterance.rate = accessibility.speechRate;
                    window.speechSynthesis.speak(utterance);
                  }
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
                </svg>
                Test Voice
              </button>
            </>
          )}
        </div>
      </section>

      {/* Reset Section */}
      <section className="settings-section">
        <button className="reset-btn" onClick={resetToDefaults}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          Reset to Defaults
        </button>
      </section>

      {/* Accessibility Statement */}
      <section className="settings-section">
        <div className="accessibility-statement">
          <h4>Our Commitment to Accessibility</h4>
          <p>
            We are committed to ensuring that our health education platform is
            accessible to everyone, including people with disabilities. If you
            encounter any accessibility issues or have suggestions for improvement,
            please contact us.
          </p>
          <a href="#accessibility-feedback" className="feedback-link">
            Send Accessibility Feedback
          </a>
        </div>
      </section>
    </div>
  );
}

export default AccessibilitySettings;
