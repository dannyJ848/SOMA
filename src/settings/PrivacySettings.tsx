/**
 * Privacy Settings Component
 *
 * Panel for managing privacy preferences including data sharing,
 * analytics, and data export options.
 */

import { useState, useCallback } from 'react';
import { useSettings } from './useSettings';
import type { PrivacySettings as PrivacySettingsType, DataExportOptions } from './types';

// ============================================
// Main Component
// ============================================

export function PrivacySettings() {
  const { settings, updatePrivacy } = useSettings();
  const privacy = settings.privacy;

  const [isExporting, setIsExporting] = useState(false);
  const [exportOptions, setExportOptions] = useState<DataExportOptions>({
    format: 'json',
    includeHealthProfile: true,
    includeSymptoms: true,
    includeLabResults: true,
    includeMedications: true,
    includeTimeline: true,
    includeSettings: false,
  });

  // Handle toggle changes
  const handleToggle = useCallback(
    (key: keyof PrivacySettingsType) => {
      updatePrivacy({ [key]: !privacy[key] });
    },
    [privacy, updatePrivacy]
  );

  // Handle auto-lock timeout change
  const handleAutoLockChange = useCallback(
    (value: number) => {
      updatePrivacy({ autoLockTimeout: value });
    },
    [updatePrivacy]
  );

  // Handle data export
  const handleExport = useCallback(async () => {
    setIsExporting(true);
    try {
      // In a real implementation, this would call an export function
      console.log('Exporting data with options:', exportOptions);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate export
      // Download would be triggered here
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  }, [exportOptions]);

  return (
    <div className="privacy-settings settings-content">
      {/* Data Sharing Section */}
      <section className="settings-section">
        <h3 className="settings-section-title">Data Sharing</h3>
        <p className="settings-section-description">
          Control what data is shared and how it is used
        </p>

        <div className="settings-toggles">
          <label className="settings-toggle">
            <div className="settings-toggle-info">
              <span className="settings-toggle-label">Allow Analytics</span>
              <span className="settings-toggle-description">
                Help improve the app by sharing anonymous usage data
              </span>
            </div>
            <input
              type="checkbox"
              checked={privacy.allowAnalytics}
              onChange={() => handleToggle('allowAnalytics')}
            />
            <span className="settings-toggle-switch" />
          </label>

          <label className="settings-toggle">
            <div className="settings-toggle-info">
              <span className="settings-toggle-label">Allow Crash Reports</span>
              <span className="settings-toggle-description">
                Send anonymous crash reports to help fix bugs
              </span>
            </div>
            <input
              type="checkbox"
              checked={privacy.allowCrashReports}
              onChange={() => handleToggle('allowCrashReports')}
            />
            <span className="settings-toggle-switch" />
          </label>

          <label className="settings-toggle">
            <div className="settings-toggle-info">
              <span className="settings-toggle-label">Share Anonymized Data</span>
              <span className="settings-toggle-description">
                Contribute to medical research with anonymized data
              </span>
            </div>
            <input
              type="checkbox"
              checked={privacy.shareAnonymizedData}
              onChange={() => handleToggle('shareAnonymizedData')}
            />
            <span className="settings-toggle-switch" />
          </label>
        </div>
      </section>

      {/* Security Section */}
      <section className="settings-section">
        <h3 className="settings-section-title">Security</h3>
        <p className="settings-section-description">
          Protect your health information
        </p>

        <div className="settings-controls">
          <div className="settings-control">
            <label className="settings-control-label">Auto-lock Timeout</label>
            <select
              value={privacy.autoLockTimeout}
              onChange={(e) => handleAutoLockChange(Number(e.target.value))}
              className="settings-select"
            >
              <option value={0}>Never</option>
              <option value={1}>1 minute</option>
              <option value={5}>5 minutes</option>
              <option value={15}>15 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>1 hour</option>
            </select>
          </div>

          <label className="settings-toggle">
            <div className="settings-toggle-info">
              <span className="settings-toggle-label">Require Password on Launch</span>
              <span className="settings-toggle-description">
                Ask for authentication when opening the app
              </span>
            </div>
            <input
              type="checkbox"
              checked={privacy.requirePasswordOnLaunch}
              onChange={() => handleToggle('requirePasswordOnLaunch')}
            />
            <span className="settings-toggle-switch" />
          </label>

          <label className="settings-toggle">
            <div className="settings-toggle-info">
              <span className="settings-toggle-label">Clear Data on Uninstall</span>
              <span className="settings-toggle-description">
                Automatically delete all data if app is removed
              </span>
            </div>
            <input
              type="checkbox"
              checked={privacy.clearDataOnUninstall}
              onChange={() => handleToggle('clearDataOnUninstall')}
            />
            <span className="settings-toggle-switch" />
          </label>
        </div>
      </section>

      {/* Data Export Section */}
      <section className="settings-section">
        <h3 className="settings-section-title">Export Your Data</h3>
        <p className="settings-section-description">
          Download a copy of your health data
        </p>

        <div className="export-options">
          <div className="export-format">
            <label className="settings-control-label">Export Format</label>
            <div className="format-buttons">
              {(['json', 'csv', 'pdf'] as const).map((format) => (
                <button
                  key={format}
                  className={`format-button ${exportOptions.format === format ? 'active' : ''}`}
                  onClick={() => setExportOptions((prev) => ({ ...prev, format }))}
                >
                  {format.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="export-checkboxes">
            <label className="export-checkbox">
              <input
                type="checkbox"
                checked={exportOptions.includeHealthProfile}
                onChange={(e) =>
                  setExportOptions((prev) => ({
                    ...prev,
                    includeHealthProfile: e.target.checked,
                  }))
                }
              />
              <span>Health Profile</span>
            </label>

            <label className="export-checkbox">
              <input
                type="checkbox"
                checked={exportOptions.includeSymptoms}
                onChange={(e) =>
                  setExportOptions((prev) => ({
                    ...prev,
                    includeSymptoms: e.target.checked,
                  }))
                }
              />
              <span>Symptom Logs</span>
            </label>

            <label className="export-checkbox">
              <input
                type="checkbox"
                checked={exportOptions.includeLabResults}
                onChange={(e) =>
                  setExportOptions((prev) => ({
                    ...prev,
                    includeLabResults: e.target.checked,
                  }))
                }
              />
              <span>Lab Results</span>
            </label>

            <label className="export-checkbox">
              <input
                type="checkbox"
                checked={exportOptions.includeMedications}
                onChange={(e) =>
                  setExportOptions((prev) => ({
                    ...prev,
                    includeMedications: e.target.checked,
                  }))
                }
              />
              <span>Medications</span>
            </label>

            <label className="export-checkbox">
              <input
                type="checkbox"
                checked={exportOptions.includeTimeline}
                onChange={(e) =>
                  setExportOptions((prev) => ({
                    ...prev,
                    includeTimeline: e.target.checked,
                  }))
                }
              />
              <span>Timeline Events</span>
            </label>

            <label className="export-checkbox">
              <input
                type="checkbox"
                checked={exportOptions.includeSettings}
                onChange={(e) =>
                  setExportOptions((prev) => ({
                    ...prev,
                    includeSettings: e.target.checked,
                  }))
                }
              />
              <span>App Settings</span>
            </label>
          </div>

          <button
            className="export-button"
            onClick={handleExport}
            disabled={isExporting}
          >
            {isExporting ? (
              <>
                <span className="spinner" />
                Exporting...
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Export Data
              </>
            )}
          </button>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="settings-section">
        <div className="privacy-links">
          <a href="#privacy-policy" className="privacy-link">
            Read Privacy Policy
          </a>
          <a href="#terms" className="privacy-link">
            Terms of Service
          </a>
          <a href="#data-practices" className="privacy-link">
            Data Practices
          </a>
        </div>
      </section>
    </div>
  );
}

export default PrivacySettings;
