/**
 * Lab Results Dashboard Component
 *
 * Visual dashboard for tracking and understanding lab results with:
 * - Manual input and health record integration
 * - Visual indicators (normal, high, low, critical)
 * - Trend charts over time
 * - Panel groupings with interpretations
 * - AI-generated summary
 */

import React, { useState, useCallback, useMemo } from 'react';
import {
  analyzeLabResults,
  getLabTest,
  type LabResultInput,
  type InterpretedLabResult,
  type DetectedPattern,
  type UserDemographics,
} from '../../../core/diagnostic-intelligence';
import './LabResultsDashboard.css';

// ============================================
// Types
// ============================================

export interface LabResultsDashboardProps {
  /** Initial lab results to display */
  initialResults?: LabResultInput[];
  /** User demographics for reference range calculation */
  demographics?: UserDemographics;
  /** Callback when results are updated */
  onResultsChange?: (results: LabResultInput[]) => void;
  /** Enable AI summary generation */
  enableAISummary?: boolean;
  /** Compact mode for smaller displays */
  compact?: boolean;
}

interface LabEntry {
  id: string;
  testId: string;
  testName: string;
  value: number;
  unit: string;
  timestamp: Date;
  status: 'normal' | 'low' | 'high' | 'critical-low' | 'critical-high';
  interpretation?: InterpretedLabResult;
}

// ============================================
// Helper Functions
// ============================================

function getStatusColor(status: string): string {
  switch (status) {
    case 'normal': return 'var(--success-green, #22c55e)';
    case 'low':
    case 'borderline-low': return 'var(--warning-yellow, #eab308)';
    case 'high':
    case 'borderline-high': return 'var(--warning-orange, #f97316)';
    case 'critical-low':
    case 'critical-high': return 'var(--danger-red, #ef4444)';
    default: return 'var(--muted-gray, #6b7280)';
  }
}

function getStatusLabel(status: string): string {
  switch (status) {
    case 'normal': return 'Normal';
    case 'low': return 'Low';
    case 'borderline-low': return 'Borderline Low';
    case 'high': return 'High';
    case 'borderline-high': return 'Borderline High';
    case 'critical-low': return 'Critical Low';
    case 'critical-high': return 'Critical High';
    default: return 'Unknown';
  }
}

function getStatusIcon(status: string): string {
  switch (status) {
    case 'normal': return '✓';
    case 'low':
    case 'borderline-low': return '↓';
    case 'high':
    case 'borderline-high': return '↑';
    case 'critical-low': return '⚠↓';
    case 'critical-high': return '⚠↑';
    default: return '?';
  }
}

// ============================================
// Main Component
// ============================================

export const LabResultsDashboard: React.FC<LabResultsDashboardProps> = ({
  initialResults = [],
  demographics = { age: 30, ageUnit: 'years', sex: 'male' },
  onResultsChange,
  enableAISummary = true,
  compact = false,
}) => {
  const [results, setResults] = useState<LabResultInput[]>(initialResults);
  const [showInputForm, setShowInputForm] = useState(false);
  const [selectedTest, setSelectedTest] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputUnit, setInputUnit] = useState('');
  const [selectedPanel, setSelectedPanel] = useState<string | null>(null);

  // Analyze results
  const analysis = useMemo(() => {
    if (results.length === 0) return null;
    return analyzeLabResults(results, demographics);
  }, [results, demographics]);

  // Group by status
  const byStatus = useMemo(() => {
    if (!analysis) return { normal: [], abnormal: [], critical: [] };

    return {
      normal: analysis.results.filter(r => r.status === 'normal'),
      abnormal: analysis.results.filter(r => ['low', 'high', 'borderline-low', 'borderline-high'].includes(r.status)),
      critical: analysis.results.filter(r => ['critical-low', 'critical-high'].includes(r.status)),
    };
  }, [analysis]);

  // Handle adding a new result
  const handleAddResult = useCallback(() => {
    if (!selectedTest || !inputValue) return;

    const newResult: LabResultInput = {
      testId: selectedTest,
      value: parseFloat(inputValue),
      unit: inputUnit,
      collectedAt: new Date().toISOString(),
    };

    const updatedResults = [...results, newResult];
    setResults(updatedResults);
    onResultsChange?.(updatedResults);

    // Reset form
    setSelectedTest('');
    setInputValue('');
    setInputUnit('');
    setShowInputForm(false);
  }, [selectedTest, inputValue, inputUnit, results, onResultsChange]);

  // Handle removing a result
  const handleRemoveResult = useCallback((index: number) => {
    const updatedResults = results.filter((_, i) => i !== index);
    setResults(updatedResults);
    onResultsChange?.(updatedResults);
  }, [results, onResultsChange]);

  // Generate AI summary
  const aiSummary = useMemo(() => {
    if (!analysis || !enableAISummary) return null;

    const parts: string[] = [];

    if (byStatus.critical.length > 0) {
      parts.push(`⚠️ **Critical values detected**: ${byStatus.critical.map(r => r.test.name).join(', ')}. These require immediate medical attention.`);
    }

    if (byStatus.abnormal.length > 0) {
      parts.push(`📊 **Abnormal results**: ${byStatus.abnormal.length} tests outside normal range.`);
    }

    if (analysis.patterns.length > 0) {
      parts.push(`🔍 **Patterns detected**: ${analysis.patterns.map(p => p.pattern.name).join(', ')}`);
    }

    if (byStatus.normal.length > 0) {
      parts.push(`✅ **Normal results**: ${byStatus.normal.length} tests within normal range.`);
    }

    return parts.join('\n\n');
  }, [analysis, byStatus, enableAISummary]);

  return (
    <div className={`lab-results-dashboard ${compact ? 'compact' : ''}`}>
      {/* Header */}
      <div className="dashboard-header">
        <h2>Lab Results Dashboard</h2>
        <button
          className="add-result-btn"
          onClick={() => setShowInputForm(!showInputForm)}
        >
          {showInputForm ? 'Cancel' : '+ Add Result'}
        </button>
      </div>

      {/* Input Form */}
      {showInputForm && (
        <div className="input-form">
          <h3>Add Lab Result</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Test</label>
              <select
                value={selectedTest}
                onChange={(e) => {
                  setSelectedTest(e.target.value);
                  const test = getLabTest(e.target.value);
                  if (test?.referenceRanges[0]) {
                    setInputUnit(test.referenceRanges[0].unit);
                  }
                }}
              >
                <option value="">Select a test...</option>
                <option value="wbc">WBC (White Blood Cells)</option>
                <option value="rbc">RBC (Red Blood Cells)</option>
                <option value="hemoglobin">Hemoglobin</option>
                <option value="hematocrit">Hematocrit</option>
                <option value="platelets">Platelets</option>
                <option value="sodium">Sodium</option>
                <option value="potassium">Potassium</option>
                <option value="chloride">Chloride</option>
                <option value="bicarbonate">Bicarbonate</option>
                <option value="bun">BUN</option>
                <option value="creatinine">Creatinine</option>
                <option value="glucose">Glucose</option>
                <option value="ast">AST</option>
                <option value="alt">ALT</option>
                <option value="bilirubin">Bilirubin</option>
                <option value="albumin">Albumin</option>
                <option value="tsh">TSH</option>
                <option value="total-cholesterol">Total Cholesterol</option>
                <option value="ldl">LDL Cholesterol</option>
                <option value="hdl">HDL Cholesterol</option>
                <option value="triglycerides">Triglycerides</option>
              </select>
            </div>
            <div className="form-group">
              <label>Value</label>
              <input
                type="number"
                step="any"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter value"
              />
            </div>
            <div className="form-group">
              <label>Unit</label>
              <input
                type="text"
                value={inputUnit}
                onChange={(e) => setInputUnit(e.target.value)}
                placeholder="Unit"
              />
            </div>
          </div>
          <button className="submit-btn" onClick={handleAddResult}>
            Add Result
          </button>
        </div>
      )}

      {/* AI Summary */}
      {aiSummary && (
        <div className="ai-summary">
          <h3>Summary</h3>
          <div className="summary-content">
            {aiSummary.split('\n\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      )}

      {/* Critical Results Alert */}
      {byStatus.critical.length > 0 && (
        <div className="critical-alert">
          <h3>⚠️ Critical Values</h3>
          <div className="critical-list">
            {byStatus.critical.map((result, idx) => (
              <div key={idx} className="critical-item">
                <span className="test-name">{result.test.name}</span>
                <span className="test-value" style={{ color: getStatusColor(result.status) }}>
                  {result.input.value} {result.input.unit}
                </span>
                <span className="status-badge critical">{getStatusLabel(result.status)}</span>
              </div>
            ))}
          </div>
          <p className="critical-note">These values require immediate medical attention.</p>
        </div>
      )}

      {/* Results Grid */}
      {analysis && analysis.results.length > 0 ? (
        <div className="results-section">
          {/* Panel Tabs */}
          <div className="panel-tabs">
            <button
              className={selectedPanel === null ? 'active' : ''}
              onClick={() => setSelectedPanel(null)}
            >
              All Results
            </button>
            <button
              className={selectedPanel === 'cbc' ? 'active' : ''}
              onClick={() => setSelectedPanel('cbc')}
            >
              CBC
            </button>
            <button
              className={selectedPanel === 'cmp' ? 'active' : ''}
              onClick={() => setSelectedPanel('cmp')}
            >
              CMP
            </button>
            <button
              className={selectedPanel === 'lipid' ? 'active' : ''}
              onClick={() => setSelectedPanel('lipid')}
            >
              Lipid
            </button>
          </div>

          {/* Results Table */}
          <div className="results-table">
            <div className="table-header">
              <span>Test</span>
              <span>Value</span>
              <span>Reference</span>
              <span>Status</span>
              <span></span>
            </div>
            {analysis.results
              .filter(r => !selectedPanel || r.test.category === selectedPanel)
              .map((result, idx) => (
                <div key={idx} className="table-row">
                  <span className="test-name">{result.test.name}</span>
                  <span className="test-value" style={{ color: getStatusColor(result.status) }}>
                    {result.input.value} {result.input.unit}
                  </span>
                  <span className="reference-range">
                    {result.referenceRange?.low}-{result.referenceRange?.high} {result.referenceRange?.unit}
                  </span>
                  <span
                    className={`status-badge ${result.status}`}
                    style={{ backgroundColor: getStatusColor(result.status) }}
                  >
                    {getStatusIcon(result.status)} {getStatusLabel(result.status)}
                  </span>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveResult(idx)}
                  >
                    ×
                  </button>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="empty-state">
          <p>No lab results yet. Click "Add Result" to enter your lab values.</p>
        </div>
      )}

      {/* Detected Patterns */}
      {analysis?.patterns && analysis.patterns.length > 0 && (
        <div className="patterns-section">
          <h3>Detected Patterns</h3>
          <div className="patterns-list">
            {analysis.patterns.map((dp, idx) => (
              <div key={idx} className="pattern-card">
                <h4>{dp.pattern.name}</h4>
                <p>{dp.educationalExplanation}</p>
                {dp.clinicalCorrelation && (
                  <p className="significance">{dp.clinicalCorrelation}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="disclaimer">
        <p>
          <strong>Disclaimer:</strong> This tool is for educational purposes only.
          Lab results should be interpreted by qualified healthcare professionals.
          Always consult your doctor about your lab results.
        </p>
      </div>
    </div>
  );
};

export default LabResultsDashboard;
