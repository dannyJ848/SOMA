/**
 * Export Dialog Component
 *
 * Modal dialog for configuring and initiating exports with format selection,
 * content selection, date range filters, and privacy options.
 */

import { useState, useCallback, useMemo, type FormEvent } from 'react';
import type { ExportFormat } from './types';
import type { ExportContentType, PrivacyOptions } from './ExportProvider';

// ============================================
// Types
// ============================================

export interface ExportDialogProps {
  /** Whether the dialog is open */
  isOpen: boolean;
  /** Callback to close the dialog */
  onClose: () => void;
  /** Callback when export is initiated */
  onExport: (config: ExportConfig) => Promise<void>;
  /** Available content types for export */
  availableContent?: ExportContentType[];
  /** Pre-selected content types */
  preselectedContent?: ExportContentType[];
  /** Whether to show privacy options */
  showPrivacyOptions?: boolean;
  /** Whether to show date range filter */
  showDateRange?: boolean;
  /** Title for the dialog */
  title?: string;
  /** Available export formats */
  availableFormats?: ExportFormat[];
  /** Whether an export is in progress */
  isExporting?: boolean;
}

export interface ExportConfig {
  format: ExportFormat;
  contentTypes: ExportContentType[];
  dateRange: { start: string; end: string } | null;
  privacyOptions: PrivacyOptions;
  forDoctorVisit: boolean;
}

// ============================================
// Content Type Labels
// ============================================

const CONTENT_TYPE_LABELS: Record<ExportContentType, { label: string; icon: string; description: string }> = {
  'health-summary': {
    label: 'Health Summary',
    icon: '📋',
    description: 'Overview of conditions, medications, and vitals',
  },
  'medication-list': {
    label: 'Medication List',
    icon: '💊',
    description: 'Current and past medications with details',
  },
  'lab-results': {
    label: 'Lab Results',
    icon: '🧪',
    description: 'Laboratory test results and trends',
  },
  'symptom-log': {
    label: 'Symptom Log',
    icon: '📝',
    description: 'Recorded symptoms with severity and notes',
  },
  'appointment-history': {
    label: 'Appointment History',
    icon: '📅',
    description: 'Past and upcoming appointments',
  },
  'anatomy-diagram': {
    label: 'Anatomy Diagrams',
    icon: '🫀',
    description: 'Saved anatomy visualizations',
  },
  'quiz-results': {
    label: 'Quiz Results',
    icon: '✅',
    description: 'Educational quiz scores and progress',
  },
  'educational-content': {
    label: 'Educational Content',
    icon: '📚',
    description: 'Saved educational articles and resources',
  },
  'doctor-visit': {
    label: 'Doctor Visit Prep',
    icon: '🏥',
    description: 'Formatted summary for healthcare visits',
  },
};

// ============================================
// Format Options
// ============================================

const FORMAT_OPTIONS: { format: ExportFormat; label: string; icon: string; description: string }[] = [
  { format: 'pdf', label: 'PDF', icon: '📄', description: 'Best for printing and sharing' },
  { format: 'json', label: 'JSON', icon: '{ }', description: 'Machine-readable data format' },
  { format: 'csv', label: 'CSV', icon: '📊', description: 'Spreadsheet-compatible format' },
  { format: 'html', label: 'Markdown', icon: '📝', description: 'Text-based documentation' },
];

// ============================================
// Component
// ============================================

export function ExportDialog({
  isOpen,
  onClose,
  onExport,
  availableContent = Object.keys(CONTENT_TYPE_LABELS) as ExportContentType[],
  preselectedContent = [],
  showPrivacyOptions = true,
  showDateRange = true,
  title = 'Export Data',
  availableFormats = ['pdf', 'json', 'csv'],
  isExporting = false,
}: ExportDialogProps) {
  // State
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>('pdf');
  const [selectedContent, setSelectedContent] = useState<Set<ExportContentType>>(
    new Set(preselectedContent)
  );
  const [dateRange, setDateRange] = useState<{ start: string; end: string } | null>(null);
  const [useDateRange, setUseDateRange] = useState(false);
  const [privacyOptions, setPrivacyOptions] = useState<PrivacyOptions>({
    redactPersonalInfo: false,
    redactSensitiveInfo: false,
    includeDates: true,
    includeProviderNames: true,
    customRedactions: [],
  });
  const [forDoctorVisit, setForDoctorVisit] = useState(false);

  // Filtered format options based on available formats
  const formatOptions = useMemo(() =>
    FORMAT_OPTIONS.filter(f => availableFormats.includes(f.format)),
    [availableFormats]
  );

  // Handle content type toggle
  const toggleContent = useCallback((contentType: ExportContentType) => {
    setSelectedContent(prev => {
      const next = new Set(prev);
      if (next.has(contentType)) {
        next.delete(contentType);
      } else {
        next.add(contentType);
      }
      return next;
    });
  }, []);

  // Select all content
  const selectAllContent = useCallback(() => {
    setSelectedContent(new Set(availableContent));
  }, [availableContent]);

  // Clear all content
  const clearAllContent = useCallback(() => {
    setSelectedContent(new Set());
  }, []);

  // Handle form submission
  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();

    const config: ExportConfig = {
      format: selectedFormat,
      contentTypes: Array.from(selectedContent),
      dateRange: useDateRange ? dateRange : null,
      privacyOptions,
      forDoctorVisit,
    };

    await onExport(config);
  }, [selectedFormat, selectedContent, useDateRange, dateRange, privacyOptions, forDoctorVisit, onExport]);

  // Early return if not open
  if (!isOpen) return null;

  return (
    <div className="export-dialog-overlay" onClick={onClose}>
      <div className="export-dialog" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="export-dialog-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="export-dialog-content">
            {/* Format Selection */}
            <section className="export-section">
              <h3>Export Format</h3>
              <div className="format-grid">
                {formatOptions.map(({ format, label, icon, description }) => (
                  <button
                    key={format}
                    type="button"
                    className={`format-option ${selectedFormat === format ? 'selected' : ''}`}
                    onClick={() => setSelectedFormat(format)}
                  >
                    <span className="format-icon">{icon}</span>
                    <span className="format-label">{label}</span>
                    <span className="format-description">{description}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Content Selection */}
            <section className="export-section">
              <div className="section-header">
                <h3>Content to Export</h3>
                <div className="section-actions">
                  <button type="button" className="link-button" onClick={selectAllContent}>
                    Select All
                  </button>
                  <button type="button" className="link-button" onClick={clearAllContent}>
                    Clear
                  </button>
                </div>
              </div>
              <div className="content-grid">
                {availableContent.map(contentType => {
                  const info = CONTENT_TYPE_LABELS[contentType];
                  return (
                    <label key={contentType} className="content-option">
                      <input
                        type="checkbox"
                        checked={selectedContent.has(contentType)}
                        onChange={() => toggleContent(contentType)}
                      />
                      <span className="content-icon">{info.icon}</span>
                      <div className="content-info">
                        <span className="content-label">{info.label}</span>
                        <span className="content-description">{info.description}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </section>

            {/* Date Range Filter */}
            {showDateRange && (
              <section className="export-section">
                <h3>Date Range</h3>
                <label className="checkbox-option">
                  <input
                    type="checkbox"
                    checked={useDateRange}
                    onChange={(e) => setUseDateRange(e.target.checked)}
                  />
                  <span>Filter by date range</span>
                </label>
                {useDateRange && (
                  <div className="date-range-inputs">
                    <div className="date-input">
                      <label htmlFor="date-start">From</label>
                      <input
                        id="date-start"
                        type="date"
                        value={dateRange?.start || ''}
                        onChange={(e) => setDateRange(prev => ({
                          start: e.target.value,
                          end: prev?.end || '',
                        }))}
                      />
                    </div>
                    <div className="date-input">
                      <label htmlFor="date-end">To</label>
                      <input
                        id="date-end"
                        type="date"
                        value={dateRange?.end || ''}
                        onChange={(e) => setDateRange(prev => ({
                          start: prev?.start || '',
                          end: e.target.value,
                        }))}
                      />
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Privacy Options */}
            {showPrivacyOptions && (
              <section className="export-section">
                <h3>Privacy Options</h3>
                <div className="privacy-options">
                  <label className="checkbox-option">
                    <input
                      type="checkbox"
                      checked={privacyOptions.redactPersonalInfo}
                      onChange={(e) => setPrivacyOptions(prev => ({
                        ...prev,
                        redactPersonalInfo: e.target.checked,
                      }))}
                    />
                    <div>
                      <span>Redact personal information</span>
                      <span className="option-hint">Name, date of birth, contact info</span>
                    </div>
                  </label>
                  <label className="checkbox-option">
                    <input
                      type="checkbox"
                      checked={privacyOptions.redactSensitiveInfo}
                      onChange={(e) => setPrivacyOptions(prev => ({
                        ...prev,
                        redactSensitiveInfo: e.target.checked,
                      }))}
                    />
                    <div>
                      <span>Redact sensitive medical info</span>
                      <span className="option-hint">Mental health, substance use, etc.</span>
                    </div>
                  </label>
                  <label className="checkbox-option">
                    <input
                      type="checkbox"
                      checked={privacyOptions.includeDates}
                      onChange={(e) => setPrivacyOptions(prev => ({
                        ...prev,
                        includeDates: e.target.checked,
                      }))}
                    />
                    <span>Include dates in export</span>
                  </label>
                  <label className="checkbox-option">
                    <input
                      type="checkbox"
                      checked={privacyOptions.includeProviderNames}
                      onChange={(e) => setPrivacyOptions(prev => ({
                        ...prev,
                        includeProviderNames: e.target.checked,
                      }))}
                    />
                    <span>Include provider names</span>
                  </label>
                </div>
              </section>
            )}

            {/* Doctor Visit Option */}
            <section className="export-section">
              <label className="checkbox-option highlight">
                <input
                  type="checkbox"
                  checked={forDoctorVisit}
                  onChange={(e) => setForDoctorVisit(e.target.checked)}
                />
                <div>
                  <span>Format for doctor visit</span>
                  <span className="option-hint">Optimized layout for sharing with healthcare providers</span>
                </div>
              </label>
            </section>
          </div>

          {/* Footer */}
          <div className="export-dialog-footer">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className="export-submit-button"
              disabled={isExporting || selectedContent.size === 0}
            >
              {isExporting ? (
                <>
                  <span className="spinner">⏳</span>
                  Exporting...
                </>
              ) : (
                <>
                  Export as {selectedFormat.toUpperCase()}
                </>
              )}
            </button>
          </div>
        </form>

        <style>{`
          .export-dialog-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 16px;
            animation: fadeIn 0.2s ease;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .export-dialog {
            background: var(--bg-card, #1a1a1a);
            border: 1px solid var(--border, #2a2a2a);
            border-radius: 16px;
            width: 100%;
            max-width: 600px;
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

          .export-dialog-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 24px;
            border-bottom: 1px solid var(--border, #2a2a2a);
          }

          .export-dialog-header h2 {
            font-size: 20px;
            font-weight: 600;
            color: var(--text-primary, #ffffff);
            margin: 0;
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

          .export-dialog-content {
            flex: 1;
            overflow-y: auto;
            padding: 24px;
          }

          .export-section {
            margin-bottom: 24px;
          }

          .export-section:last-child {
            margin-bottom: 0;
          }

          .export-section h3 {
            font-size: 14px;
            font-weight: 600;
            color: var(--text-primary, #ffffff);
            margin: 0 0 12px 0;
          }

          .section-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
          }

          .section-header h3 {
            margin: 0;
          }

          .section-actions {
            display: flex;
            gap: 12px;
          }

          .link-button {
            background: none;
            border: none;
            color: var(--accent, #3b82f6);
            font-size: 12px;
            cursor: pointer;
            padding: 0;
          }

          .link-button:hover {
            text-decoration: underline;
          }

          /* Format Grid */
          .format-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
            gap: 12px;
          }

          .format-option {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 16px 12px;
            background: var(--bg-secondary, #141414);
            border: 2px solid var(--border, #2a2a2a);
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.2s;
            text-align: center;
          }

          .format-option:hover {
            border-color: var(--accent, #3b82f6);
          }

          .format-option.selected {
            border-color: var(--accent, #3b82f6);
            background: rgba(59, 130, 246, 0.1);
          }

          .format-icon {
            font-size: 24px;
            margin-bottom: 8px;
          }

          .format-label {
            font-size: 14px;
            font-weight: 600;
            color: var(--text-primary, #ffffff);
          }

          .format-description {
            font-size: 10px;
            color: var(--text-secondary, #888888);
            margin-top: 4px;
          }

          /* Content Grid */
          .content-grid {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .content-option {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 12px;
            background: var(--bg-secondary, #141414);
            border: 1px solid var(--border, #2a2a2a);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
          }

          .content-option:hover {
            border-color: var(--accent, #3b82f6);
          }

          .content-option input[type="checkbox"] {
            width: 18px;
            height: 18px;
            margin-top: 2px;
            accent-color: var(--accent, #3b82f6);
          }

          .content-icon {
            font-size: 20px;
          }

          .content-info {
            display: flex;
            flex-direction: column;
          }

          .content-label {
            font-size: 14px;
            font-weight: 500;
            color: var(--text-primary, #ffffff);
          }

          .content-description {
            font-size: 11px;
            color: var(--text-secondary, #888888);
            margin-top: 2px;
          }

          /* Date Range */
          .date-range-inputs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-top: 12px;
          }

          .date-input {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .date-input label {
            font-size: 12px;
            color: var(--text-secondary, #888888);
          }

          .date-input input {
            padding: 10px 12px;
            background: var(--bg-secondary, #141414);
            border: 1px solid var(--border, #2a2a2a);
            border-radius: 8px;
            color: var(--text-primary, #ffffff);
            font-size: 14px;
          }

          .date-input input:focus {
            outline: none;
            border-color: var(--accent, #3b82f6);
          }

          /* Checkbox Options */
          .checkbox-option {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 10px 0;
            cursor: pointer;
          }

          .checkbox-option input[type="checkbox"] {
            width: 18px;
            height: 18px;
            accent-color: var(--accent, #3b82f6);
          }

          .checkbox-option > span {
            font-size: 14px;
            color: var(--text-primary, #ffffff);
          }

          .checkbox-option > div {
            display: flex;
            flex-direction: column;
          }

          .checkbox-option > div > span:first-child {
            font-size: 14px;
            color: var(--text-primary, #ffffff);
          }

          .option-hint {
            font-size: 11px;
            color: var(--text-secondary, #888888);
            margin-top: 2px;
          }

          .checkbox-option.highlight {
            background: rgba(59, 130, 246, 0.1);
            border: 1px solid rgba(59, 130, 246, 0.3);
            border-radius: 8px;
            padding: 12px;
            margin-top: 8px;
          }

          /* Privacy Options */
          .privacy-options {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          /* Footer */
          .export-dialog-footer {
            display: flex;
            justify-content: flex-end;
            gap: 12px;
            padding: 16px 24px;
            border-top: 1px solid var(--border, #2a2a2a);
          }

          .cancel-button {
            padding: 10px 20px;
            background: var(--bg-secondary, #141414);
            border: 1px solid var(--border, #2a2a2a);
            border-radius: 8px;
            color: var(--text-primary, #ffffff);
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
          }

          .cancel-button:hover {
            background: var(--bg-card, #1a1a1a);
          }

          .export-submit-button {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 24px;
            background: var(--accent, #3b82f6);
            border: none;
            border-radius: 8px;
            color: white;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
          }

          .export-submit-button:hover:not(:disabled) {
            background: #2563eb;
          }

          .export-submit-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .spinner {
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          /* Responsive */
          @media (max-width: 600px) {
            .export-dialog {
              max-height: 100vh;
              border-radius: 0;
            }

            .format-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .date-range-inputs {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default ExportDialog;
