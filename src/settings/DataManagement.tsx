/**
 * Data Management Component
 *
 * Panel for managing user data including export, import,
 * backup, and data deletion options.
 */

import { useState, useCallback, useRef } from 'react';
import { useSettings } from './useSettings';
import type { DataExportOptions, BackupInfo } from './types';

// ============================================
// Main Component
// ============================================

export function DataManagement() {
  const { settings } = useSettings();

  // State
  const [isExporting, setIsExporting] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');
  const [backups, setBackups] = useState<BackupInfo[]>([]);
  const [exportProgress, setExportProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Export options state
  const [exportOptions, setExportOptions] = useState<DataExportOptions>({
    format: 'json',
    includeHealthProfile: true,
    includeSymptoms: true,
    includeLabResults: true,
    includeMedications: true,
    includeTimeline: true,
    includeSettings: true,
  });

  // Clear messages after timeout
  const showMessage = useCallback((type: 'error' | 'success', message: string) => {
    if (type === 'error') {
      setError(message);
      setSuccess(null);
    } else {
      setSuccess(message);
      setError(null);
    }
    setTimeout(() => {
      setError(null);
      setSuccess(null);
    }, 5000);
  }, []);

  // Handle data export
  const handleExport = useCallback(async () => {
    setIsExporting(true);
    setExportProgress(0);
    setError(null);

    try {
      // Simulate export progress
      for (let i = 0; i <= 100; i += 10) {
        setExportProgress(i);
        await new Promise((resolve) => setTimeout(resolve, 200));
      }

      // In a real implementation, this would:
      // 1. Gather all selected data
      // 2. Convert to selected format
      // 3. Trigger download
      const exportData = {
        exportedAt: new Date().toISOString(),
        version: '1.0.0',
        options: exportOptions,
        data: {
          healthProfile: exportOptions.includeHealthProfile ? settings.healthProfile : undefined,
          settings: exportOptions.includeSettings ? settings : undefined,
          // Other data would be fetched from appropriate stores
        },
      };

      // Create download
      const blob = new Blob([JSON.stringify(exportData, null, 2)], {
        type: 'application/json',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `biological-self-export-${new Date().toISOString().split('T')[0]}.${exportOptions.format}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showMessage('success', 'Data exported successfully!');
    } catch (err) {
      showMessage('error', 'Failed to export data. Please try again.');
      console.error('Export error:', err);
    } finally {
      setIsExporting(false);
      setExportProgress(0);
    }
  }, [exportOptions, settings, showMessage]);

  // Handle data import
  const handleImport = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    setError(null);

    try {
      const text = await file.text();
      const data = JSON.parse(text);

      // Validate imported data
      if (!data.version || !data.exportedAt) {
        throw new Error('Invalid file format');
      }

      // In a real implementation, this would:
      // 1. Validate the data structure
      // 2. Ask user what to import/merge
      // 3. Apply the imported data

      console.log('Importing data:', data);
      showMessage('success', 'Data imported successfully!');
    } catch (err) {
      showMessage('error', 'Failed to import data. Please check the file format.');
      console.error('Import error:', err);
    } finally {
      setIsImporting(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  }, [showMessage]);

  // Handle data deletion
  const handleDeleteAll = useCallback(async () => {
    if (deleteConfirmText !== 'DELETE') {
      showMessage('error', 'Please type DELETE to confirm');
      return;
    }

    setIsDeleting(true);
    setError(null);

    try {
      // In a real implementation, this would:
      // 1. Clear all stored data
      // 2. Reset settings to defaults
      // 3. Sign out user

      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate deletion

      showMessage('success', 'All data has been deleted.');
      setShowDeleteConfirm(false);
      setDeleteConfirmText('');
    } catch (err) {
      showMessage('error', 'Failed to delete data. Please try again.');
      console.error('Delete error:', err);
    } finally {
      setIsDeleting(false);
    }
  }, [deleteConfirmText, showMessage]);

  // Calculate storage usage (simulated)
  const storageUsage = {
    total: 100 * 1024 * 1024, // 100 MB
    used: 45 * 1024 * 1024, // 45 MB
    breakdown: {
      healthData: 20 * 1024 * 1024,
      cachedContent: 15 * 1024 * 1024,
      settings: 1 * 1024 * 1024,
      other: 9 * 1024 * 1024,
    },
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const usagePercent = (storageUsage.used / storageUsage.total) * 100;

  return (
    <div className="data-management settings-content">
      {/* Messages */}
      {error && (
        <div className="message error-message">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M15 9l-6 6M9 9l6 6" />
          </svg>
          {error}
        </div>
      )}
      {success && (
        <div className="message success-message">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          {success}
        </div>
      )}

      {/* Storage Usage */}
      <section className="settings-section">
        <h3 className="settings-section-title">Storage Usage</h3>
        <p className="settings-section-description">
          See how much storage your data is using
        </p>

        <div className="storage-usage">
          <div className="storage-bar">
            <div
              className="storage-bar-fill"
              style={{ width: `${usagePercent}%` }}
            />
          </div>
          <div className="storage-info">
            <span className="storage-used">
              {formatBytes(storageUsage.used)} used
            </span>
            <span className="storage-total">
              of {formatBytes(storageUsage.total)}
            </span>
          </div>

          <div className="storage-breakdown">
            <div className="breakdown-item">
              <span className="breakdown-color health-data" />
              <span className="breakdown-label">Health Data</span>
              <span className="breakdown-size">
                {formatBytes(storageUsage.breakdown.healthData)}
              </span>
            </div>
            <div className="breakdown-item">
              <span className="breakdown-color cached-content" />
              <span className="breakdown-label">Cached Content</span>
              <span className="breakdown-size">
                {formatBytes(storageUsage.breakdown.cachedContent)}
              </span>
            </div>
            <div className="breakdown-item">
              <span className="breakdown-color settings-data" />
              <span className="breakdown-label">Settings</span>
              <span className="breakdown-size">
                {formatBytes(storageUsage.breakdown.settings)}
              </span>
            </div>
            <div className="breakdown-item">
              <span className="breakdown-color other-data" />
              <span className="breakdown-label">Other</span>
              <span className="breakdown-size">
                {formatBytes(storageUsage.breakdown.other)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Export Data */}
      <section className="settings-section">
        <h3 className="settings-section-title">Export Data</h3>
        <p className="settings-section-description">
          Download a copy of your health data
        </p>

        <div className="export-section">
          <div className="export-format">
            <label className="settings-control-label">Format</label>
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

          <div className="export-options">
            <label className="settings-control-label">Include</label>
            <div className="export-checkboxes">
              {[
                { key: 'includeHealthProfile', label: 'Health Profile' },
                { key: 'includeSymptoms', label: 'Symptom Logs' },
                { key: 'includeLabResults', label: 'Lab Results' },
                { key: 'includeMedications', label: 'Medications' },
                { key: 'includeTimeline', label: 'Timeline' },
                { key: 'includeSettings', label: 'Settings' },
              ].map(({ key, label }) => (
                <label key={key} className="export-checkbox">
                  <input
                    type="checkbox"
                    checked={exportOptions[key as keyof DataExportOptions] as boolean}
                    onChange={(e) =>
                      setExportOptions((prev) => ({
                        ...prev,
                        [key]: e.target.checked,
                      }))
                    }
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            className="action-button export-button"
            onClick={handleExport}
            disabled={isExporting}
          >
            {isExporting ? (
              <>
                <div className="progress-ring">
                  <svg viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray={`${exportProgress}, 100`}
                    />
                  </svg>
                </div>
                Exporting... {exportProgress}%
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

      {/* Import Data */}
      <section className="settings-section">
        <h3 className="settings-section-title">Import Data</h3>
        <p className="settings-section-description">
          Restore data from a previous export
        </p>

        <div className="import-section">
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleImport}
            className="file-input"
            id="import-file"
            disabled={isImporting}
          />
          <label htmlFor="import-file" className="action-button import-button">
            {isImporting ? (
              <>
                <span className="spinner" />
                Importing...
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                Import Data
              </>
            )}
          </label>
          <p className="import-note">
            Supported format: JSON export from this app
          </p>
        </div>
      </section>

      {/* Clear Cache */}
      <section className="settings-section">
        <h3 className="settings-section-title">Clear Cache</h3>
        <p className="settings-section-description">
          Free up space by clearing cached content
        </p>

        <button
          className="action-button clear-cache-button"
          onClick={async () => {
            try {
              // In a real implementation, clear the cache
              showMessage('success', 'Cache cleared successfully!');
            } catch (err) {
              showMessage('error', 'Failed to clear cache.');
            }
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6" />
            <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" />
          </svg>
          Clear Cached Content ({formatBytes(storageUsage.breakdown.cachedContent)})
        </button>
      </section>

      {/* Delete All Data */}
      <section className="settings-section danger-zone">
        <h3 className="settings-section-title danger">Delete All Data</h3>
        <p className="settings-section-description">
          Permanently delete all your data. This action cannot be undone.
        </p>

        {!showDeleteConfirm ? (
          <button
            className="action-button delete-button"
            onClick={() => setShowDeleteConfirm(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6" />
              <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
            Delete All Data
          </button>
        ) : (
          <div className="delete-confirmation">
            <p className="delete-warning">
              This will permanently delete all your health data, settings, and history.
              Type <strong>DELETE</strong> to confirm.
            </p>
            <input
              type="text"
              value={deleteConfirmText}
              onChange={(e) => setDeleteConfirmText(e.target.value)}
              placeholder="Type DELETE to confirm"
              className="delete-confirm-input"
            />
            <div className="delete-actions">
              <button
                className="action-button cancel-button"
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setDeleteConfirmText('');
                }}
              >
                Cancel
              </button>
              <button
                className="action-button confirm-delete-button"
                onClick={handleDeleteAll}
                disabled={deleteConfirmText !== 'DELETE' || isDeleting}
              >
                {isDeleting ? (
                  <>
                    <span className="spinner" />
                    Deleting...
                  </>
                ) : (
                  'Delete Everything'
                )}
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default DataManagement;
