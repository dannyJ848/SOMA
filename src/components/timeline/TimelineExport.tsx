/**
 * TimelineExport Component
 * 
 * Export panel for generating PDF summaries and data exports
 * for healthcare providers and appointments.
 */

import React, { useState } from 'react';
import type { TimelineEvent, TimelineInsight, TimelineExportOptions } from '../../../core/timeline';
import { exportTimeline } from '../../../core/timeline';

// ============================================================================
// Types
// ============================================================================

interface TimelineExportProps {
  events: TimelineEvent[];
  insights: TimelineInsight[];
  onClose?: () => void;
}

// ============================================================================
// Component
// ============================================================================

export const TimelineExport: React.FC<TimelineExportProps> = ({
  events,
  insights,
  onClose,
}) => {
  const [format, setFormat] = useState<TimelineExportOptions['format']>('pdf');
  const [template, setTemplate] = useState<TimelineExportOptions['template']>('full');
  const [includeInsights, setIncludeInsights] = useState(true);
  const [includeVisualizations, setIncludeVisualizations] = useState(true);
  const [dateRangeType, setDateRangeType] = useState<'all' | '1year' | '6months' | '3months' | 'custom'>('all');
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    
    try {
      // Calculate date range
      let dateRange: { start: Date; end: Date } | undefined;
      
      switch (dateRangeType) {
        case '1year':
          dateRange = {
            start: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
            end: new Date(),
          };
          break;
        case '6months':
          dateRange = {
            start: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000),
            end: new Date(),
          };
          break;
        case '3months':
          dateRange = {
            start: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
            end: new Date(),
          };
          break;
        case 'custom':
          if (customStartDate && customEndDate) {
            dateRange = {
              start: new Date(customStartDate),
              end: new Date(customEndDate),
            };
          }
          break;
        default:
          dateRange = undefined;
      }

      const options: TimelineExportOptions = {
        format,
        template,
        includeInsights,
        includeVisualizations,
        dateRange,
      };

      // Small delay to show loading state
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      exportTimeline(events, insights, options);
      
      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 3000);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const formatFileSize = () => {
    const baseSize = events.length * 0.5; // Rough estimate
    const insightSize = includeInsights ? insights.length * 0.3 : 0;
    const totalSize = baseSize + insightSize;
    
    if (totalSize < 1024) return `${Math.round(totalSize)} KB`;
    return `${(totalSize / 1024).toFixed(1)} MB`;
  };

  const getExportDescription = () => {
    switch (format) {
      case 'pdf':
        return 'Generate a formatted PDF document suitable for printing or sharing with healthcare providers.';
      case 'json':
        return 'Export raw timeline data in JSON format for backup or import into other applications.';
      case 'csv':
        return 'Export events as a CSV spreadsheet for analysis in Excel or other tools.';
      default:
        return '';
    }
  };

  const getTemplateDescription = () => {
    switch (template) {
      case 'full':
        return 'Complete timeline with all events and details.';
      case 'summary':
        return 'Condensed overview with key highlights and statistics.';
      case 'provider':
        return 'Clinically-focused format optimized for healthcare providers.';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📤</span>
          <div>
            <h3 className="font-semibold text-gray-900">Export Timeline</h3>
            <p className="text-sm text-gray-500">{events.length} events to export</p>
          </div>
        </div>
        
        {onClose && (
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            ✕
          </button>
        )}
      </div>

      {exportSuccess ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">✅</div>
          <h4 className="text-lg font-semibold text-green-700 mb-2">Export Complete!</h4>
          <p className="text-gray-600">Your file has been downloaded.</p>
          <button
            onClick={() => setExportSuccess(false)}
            className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
          >
            Export another
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Format Selection */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-3 block">Export Format</label>
            <div className="grid grid-cols-3 gap-3">
              {(['pdf', 'json', 'csv'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFormat(f)}
                  className={`
                    p-3 rounded-lg border-2 text-left transition-all
                    ${format === f
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                    }
                  `}
                >
                  <div className="font-semibold uppercase">{f}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {f === 'pdf' && '📄 Document'}
                    {f === 'json' && '📋 Data'}
                    {f === 'csv' && '📊 Spreadsheet'}
                  </div>
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-2">{getExportDescription()}</p>
          </div>

          {/* PDF Template Selection (only for PDF) */}
          {format === 'pdf' && (
            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">Document Template</label>
              <div className="space-y-2">
                {(['full', 'summary', 'provider'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTemplate(t)}
                    className={`
                      w-full p-3 rounded-lg border-2 text-left transition-all
                      ${template === t
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold capitalize">{t} Report</span>
                      {template === t && <span>✓</span>}
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">{getTemplateDescription()}</p>
            </div>
          )}

          {/* Date Range */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-3 block">Date Range</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: 'all', label: 'All Time' },
                { value: '1year', label: 'Last Year' },
                { value: '6months', label: 'Last 6 Months' },
                { value: '3months', label: 'Last 3 Months' },
                { value: 'custom', label: 'Custom Range' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setDateRangeType(option.value as typeof dateRangeType)}
                  className={`
                    px-3 py-2 rounded-lg border-2 text-sm transition-all
                    ${dateRangeType === option.value
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                    }
                  `}
                >
                  {option.label}
                </button>
              ))}
            </div>
            
            {dateRangeType === 'custom' && (
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Start Date</label>
                  <input
                    type="date"
                    value={customStartDate}
                    onChange={(e) => setCustomStartDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">End Date</label>
                  <input
                    type="date"
                    value={customEndDate}
                    onChange={(e) => setCustomEndDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Options */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-3 block">Options</label>
            
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={includeInsights}
                  onChange={(e) => setIncludeInsights(e.target.checked)}
                  className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <div>
                  <div className="font-medium">Include Insights</div>
                  <div className="text-sm text-gray-500">Add AI-generated insights and patterns</div>
                </div>
              </label>
              
              {format === 'pdf' && (
                <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="checkbox"
                    checked={includeVisualizations}
                    onChange={(e) => setIncludeVisualizations(e.target.checked)}
                    className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <div>
                    <div className="font-medium">Include Visualizations</div>
                    <div className="text-sm text-gray-500">Add charts and timeline graphics</div>
                  </div>
                </label>
              )}
            </div>
          </div>

          {/* Estimated Size */}
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Estimated file size:</span>
              <span className="font-medium">{formatFileSize()}</span>
            </div>
          </div>

          {/* Export Button */}
          <button
            onClick={handleExport}
            disabled={isExporting || (dateRangeType === 'custom' && (!customStartDate || !customEndDate))}
            className={`
              w-full py-3 rounded-lg font-semibold text-white transition-all
              ${isExporting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
              }
            `}
          >
            {isExporting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⏳</span>
                Generating {format.toUpperCase()}...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                📥 Download {format.toUpperCase()}
              </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default TimelineExport;
