/**
 * ExportButton Component
 *
 * Reusable button component for triggering exports with dropdown menu.
 */

import { useState, useRef, useEffect, useCallback } from 'react';
import type { ExportFormat, ExportResult } from './types';

// ============================================
// Props
// ============================================

export interface ExportOption {
  id: string;
  label: string;
  icon: string;
  format: ExportFormat;
  description?: string;
  disabled?: boolean;
}

interface ExportButtonProps {
  /** Export options to show in dropdown */
  options: ExportOption[];
  /** Callback when an export option is selected */
  onExport: (option: ExportOption) => Promise<ExportResult> | ExportResult;
  /** Button label */
  label?: string;
  /** Button icon */
  icon?: string;
  /** Additional CSS class */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Compact mode (icon only) */
  compact?: boolean;
  /** Show success/error toast */
  showToast?: boolean;
}

// ============================================
// Component
// ============================================

export function ExportButton({
  options,
  onExport,
  label = 'Export',
  icon = '↓',
  className = '',
  disabled = false,
  compact = false,
  showToast = true,
}: ExportButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Auto-hide toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleExport = useCallback(async (option: ExportOption) => {
    if (option.disabled) return;

    setIsExporting(true);
    setIsOpen(false);

    try {
      const result = await onExport(option);

      if (showToast) {
        if (result.success) {
          setToast({
            message: `Successfully exported as ${option.format.toUpperCase()}`,
            type: 'success',
          });
        } else {
          setToast({
            message: result.error || 'Export failed',
            type: 'error',
          });
        }
      }
    } catch (error) {
      if (showToast) {
        setToast({
          message: error instanceof Error ? error.message : 'Export failed',
          type: 'error',
        });
      }
    } finally {
      setIsExporting(false);
    }
  }, [onExport, showToast]);

  const formatIcon = (format: ExportFormat): string => {
    switch (format) {
      case 'pdf': return '📄';
      case 'json': return '{ }';
      case 'csv': return '📊';
      case 'html': return '🌐';
      default: return '📁';
    }
  };

  return (
    <div className={`export-button-container ${className}`} ref={dropdownRef}>
      <button
        className={`export-button ${compact ? 'compact' : ''} ${isExporting ? 'exporting' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled || isExporting}
        title={label}
      >
        {isExporting ? (
          <span className="export-spinner">⏳</span>
        ) : (
          <>
            <span className="export-icon">{icon}</span>
            {!compact && <span className="export-label">{label}</span>}
            <span className="export-chevron">{isOpen ? '▲' : '▼'}</span>
          </>
        )}
      </button>

      {isOpen && (
        <div className="export-dropdown">
          {options.map((option) => (
            <button
              key={option.id}
              className={`export-option ${option.disabled ? 'disabled' : ''}`}
              onClick={() => handleExport(option)}
              disabled={option.disabled}
            >
              <span className="option-icon">{option.icon || formatIcon(option.format)}</span>
              <div className="option-content">
                <span className="option-label">{option.label}</span>
                {option.description && (
                  <span className="option-description">{option.description}</span>
                )}
              </div>
              <span className="option-format">{option.format.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}

      {toast && (
        <div className={`export-toast ${toast.type}`}>
          <span className="toast-icon">{toast.type === 'success' ? '✓' : '✕'}</span>
          <span className="toast-message">{toast.message}</span>
        </div>
      )}

      <style>{`
        .export-button-container {
          position: relative;
          display: inline-block;
        }

        .export-button {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: var(--bg-card, #1a1a1a);
          border: 1px solid var(--border, #2a2a2a);
          border-radius: 8px;
          color: var(--text-primary, #ffffff);
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .export-button:hover:not(:disabled) {
          border-color: var(--accent, #3b82f6);
          background: var(--bg-secondary, #141414);
        }

        .export-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .export-button.compact {
          padding: 8px;
        }

        .export-button.compact .export-label {
          display: none;
        }

        .export-button.exporting {
          pointer-events: none;
        }

        .export-icon {
          font-size: 16px;
        }

        .export-chevron {
          font-size: 10px;
          color: var(--text-secondary, #888888);
        }

        .export-spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .export-dropdown {
          position: absolute;
          top: calc(100% + 4px);
          right: 0;
          min-width: 240px;
          background: var(--bg-card, #1a1a1a);
          border: 1px solid var(--border, #2a2a2a);
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          z-index: 100;
          overflow: hidden;
        }

        .export-option {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 12px 16px;
          background: transparent;
          border: none;
          color: var(--text-primary, #ffffff);
          font-size: 14px;
          text-align: left;
          cursor: pointer;
          transition: background 0.2s;
        }

        .export-option:hover:not(:disabled) {
          background: var(--bg-secondary, #141414);
        }

        .export-option:not(:last-child) {
          border-bottom: 1px solid var(--border, #2a2a2a);
        }

        .export-option.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .option-icon {
          font-size: 18px;
          width: 24px;
          text-align: center;
        }

        .option-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .option-label {
          font-weight: 500;
        }

        .option-description {
          font-size: 11px;
          color: var(--text-secondary, #888888);
        }

        .option-format {
          font-size: 10px;
          font-weight: 600;
          padding: 2px 6px;
          background: var(--bg-secondary, #141414);
          border-radius: 4px;
          color: var(--text-secondary, #888888);
        }

        .export-toast {
          position: fixed;
          bottom: 24px;
          right: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
          z-index: 1000;
          animation: slideIn 0.3s ease;
        }

        .export-toast.success {
          background: #065f46;
          color: #d1fae5;
        }

        .export-toast.error {
          background: #991b1b;
          color: #fee2e2;
        }

        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .export-dropdown {
            left: 0;
            right: auto;
          }
        }
      `}</style>
    </div>
  );
}

// ============================================
// Preset Export Options
// ============================================

export const HEALTH_EXPORT_OPTIONS: ExportOption[] = [
  {
    id: 'pdf-summary',
    label: 'Health Summary (PDF)',
    icon: '📄',
    format: 'pdf',
    description: 'Complete health overview',
  },
  {
    id: 'pdf-doctor',
    label: 'Doctor Visit Report (PDF)',
    icon: '🏥',
    format: 'pdf',
    description: 'Prepared for your appointment',
  },
  {
    id: 'json-full',
    label: 'Full Health Data (JSON)',
    icon: '{ }',
    format: 'json',
    description: 'Machine-readable format',
  },
  {
    id: 'csv-meds',
    label: 'Medication List (CSV)',
    icon: '💊',
    format: 'csv',
    description: 'Spreadsheet format',
  },
  {
    id: 'csv-labs',
    label: 'Lab Results (CSV)',
    icon: '🧪',
    format: 'csv',
    description: 'Spreadsheet format',
  },
];

export const MEDICATION_EXPORT_OPTIONS: ExportOption[] = [
  {
    id: 'pdf-meds',
    label: 'Medication Report (PDF)',
    icon: '📄',
    format: 'pdf',
    description: 'Full medication details',
  },
  {
    id: 'csv-meds',
    label: 'Medication List (CSV)',
    icon: '📊',
    format: 'csv',
    description: 'Spreadsheet format',
  },
  {
    id: 'json-meds',
    label: 'Medication Data (JSON)',
    icon: '{ }',
    format: 'json',
    description: 'Machine-readable format',
  },
];

export const LAB_EXPORT_OPTIONS: ExportOption[] = [
  {
    id: 'pdf-labs',
    label: 'Lab Trends Report (PDF)',
    icon: '📄',
    format: 'pdf',
    description: 'With trend analysis',
  },
  {
    id: 'csv-labs',
    label: 'Lab Results (CSV)',
    icon: '📊',
    format: 'csv',
    description: 'Spreadsheet format',
  },
  {
    id: 'json-labs',
    label: 'Lab Data (JSON)',
    icon: '{ }',
    format: 'json',
    description: 'Machine-readable format',
  },
];

export const ENCYCLOPEDIA_EXPORT_OPTIONS: ExportOption[] = [
  {
    id: 'pdf-entry',
    label: 'Save as PDF',
    icon: '📄',
    format: 'pdf',
    description: 'Print-ready format',
  },
  {
    id: 'html-entry',
    label: 'Save as HTML',
    icon: '🌐',
    format: 'html',
    description: 'Web page format',
  },
];
