/**
 * Medical Record Import View
 *
 * UI for importing medical records from PDF files.
 * Supports drag-and-drop, progress tracking, duplicate review, and import confirmation.
 */

import React, { useState, useCallback, useRef } from 'react';
import type { MedicalRecordExtraction, MedicalDocumentType } from '../core/import/pdf-medical-record';
import type { DuplicateCheckResult } from '../core/import/duplicate-detector';

type ImportStatus = 'idle' | 'parsing' | 'reviewing' | 'checking-duplicates' | 'importing' | 'complete' | 'error';

interface ImportState {
  status: ImportStatus;
  file: File | null;
  extraction: MedicalRecordExtraction | null;
  duplicates: DuplicateCheckResult<unknown> | null;
  error: string | null;
  progress: number;
  imported: {
    labs: number;
    medications: number;
    conditions: number;
    imaging: number;
    skipped: {
      labs: number;
      medications: number;
      conditions: number;
    };
  } | null;
}

const DOCUMENT_TYPE_LABELS: Record<MedicalDocumentType, string> = {
  'lab-report': 'Laboratory Report',
  'discharge-summary': 'Discharge Summary',
  'clinic-note': 'Clinic Note',
  'imaging-report': 'Imaging Report',
  'medication-list': 'Medication List',
  'unknown': 'Unknown Document Type',
};

const DOCUMENT_TYPE_ICONS: Record<MedicalDocumentType, string> = {
  'lab-report': '🧪',
  'discharge-summary': '📋',
  'clinic-note': '📝',
  'imaging-report': '🩻',
  'medication-list': '💊',
  'unknown': '📄',
};

export const ImportView: React.FC = () => {
  const [state, setState] = useState<ImportState>({
    status: 'idle',
    file: null,
    extraction: null,
    duplicates: null,
    error: null,
    progress: 0,
    imported: null,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Handle file drop
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    const pdfFile = files.find(f => f.type === 'application/pdf');

    if (pdfFile) {
      handleFileSelect(pdfFile);
    } else {
      setState(prev => ({
        ...prev,
        status: 'error',
        error: 'Please drop a PDF file.',
      }));
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Handle file selection
  const handleFileSelect = async (file: File) => {
    setState({
      status: 'parsing',
      file,
      extraction: null,
      duplicates: null,
      error: null,
      progress: 10,
      imported: null,
    });

    try {
      // Convert file to array buffer and save temporarily
      const arrayBuffer = await file.arrayBuffer();
      const tempPath = `/tmp/biological-self-import-${Date.now()}.pdf`;
      
      // Write file using Tauri FS API (would need to add this command)
      // For now, we'll use the existing pattern with tauri-bridge

      // Call the parse command
      // This is a placeholder - actual implementation would call the Rust Tauri command
      // that invokes tauri-bridge.ts parse-medical-record-pdf
      
      // Simulate parsing for now
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setState(prev => ({
        ...prev,
        status: 'reviewing',
        progress: 100,
        // Mock extraction for UI development
        extraction: {
          documentType: 'lab-report',
          patientName: 'John Doe',
          dateOfService: '2024-01-15',
          facility: 'General Hospital',
          provider: 'Dr. Smith',
          labs: [
            {
              testName: 'Hemoglobin',
              value: 14.2,
              unit: 'g/dL',
              referenceRange: { low: 12.0, high: 16.0 },
              status: 'normal',
              collectedAt: '2024-01-15',
            },
            {
              testName: 'Glucose',
              value: 95,
              unit: 'mg/dL',
              referenceRange: { low: 70, high: 100 },
              status: 'normal',
              collectedAt: '2024-01-15',
            },
          ],
          medications: [],
          conditions: [],
          imaging: [],
          vitals: [],
          rawText: '',
          confidence: 0.85,
          warnings: [],
        },
      }));
    } catch (err) {
      setState(prev => ({
        ...prev,
        status: 'error',
        error: err instanceof Error ? err.message : 'Failed to parse PDF',
      }));
    }
  };

  // Handle import confirmation
  const handleImport = async (skipDuplicates: boolean = true) => {
    if (!state.extraction) return;

    setState(prev => ({
      ...prev,
      status: 'importing',
      progress: 0,
    }));

    try {
      // Simulate import progress
      for (let i = 0; i <= 100; i += 20) {
        setState(prev => ({ ...prev, progress: i }));
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      setState(prev => ({
        ...prev,
        status: 'complete',
        progress: 100,
        imported: {
          labs: prev.extraction?.labs.length || 0,
          medications: prev.extraction?.medications.length || 0,
          conditions: prev.extraction?.conditions.length || 0,
          imaging: prev.extraction?.imaging.length || 0,
          skipped: { labs: 0, medications: 0, conditions: 0 },
        },
      }));
    } catch (err) {
      setState(prev => ({
        ...prev,
        status: 'error',
        error: err instanceof Error ? err.message : 'Import failed',
      }));
    }
  };

  // Reset to start over
  const handleReset = () => {
    setState({
      status: 'idle',
      file: null,
      extraction: null,
      duplicates: null,
      error: null,
      progress: 0,
      imported: null,
    });
  };

  // Render drop zone
  const renderDropZone = () => (
    <div
      className={`import-drop-zone ${isDragging ? 'dragging' : ''}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={() => fileInputRef.current?.click()}
    >
      <div className="import-drop-icon">📄</div>
      <h3>Drop your medical record PDF here</h3>
      <p>or click to browse</p>
      <p className="import-drop-hint">
        Supports lab reports, discharge summaries, clinic notes, imaging reports
      </p>
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        style={{ display: 'none' }}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFileSelect(file);
        }}
      />
    </div>
  );

  // Render progress
  const renderProgress = () => (
    <div className="import-progress">
      <div className="import-progress-spinner">⏳</div>
      <h3>
        {state.status === 'parsing' && 'Parsing medical record...'}
        {state.status === 'checking-duplicates' && 'Checking for duplicates...'}
        {state.status === 'importing' && 'Importing data...'}
      </h3>
      <div className="import-progress-bar">
        <div
          className="import-progress-fill"
          style={{ width: `${state.progress}%` }}
        />
      </div>
      <p className="import-progress-text">{state.progress}%</p>
    </div>
  );

  // Render extraction review
  const renderReview = () => {
    if (!state.extraction) return null;

    const { extraction } = state;
    const hasData = 
      extraction.labs.length > 0 ||
      extraction.medications.length > 0 ||
      extraction.conditions.length > 0 ||
      extraction.imaging.length > 0;

    return (
      <div className="import-review">
        <div className="import-review-header">
          <div className="import-document-type">
            <span className="import-document-icon">
              {DOCUMENT_TYPE_ICONS[extraction.documentType]}
            </span>
            <div>
              <h3>{DOCUMENT_TYPE_LABELS[extraction.documentType]}</h3>
              {extraction.facility && (
                <p className="import-document-meta">{extraction.facility}</p>
              )}
              {extraction.dateOfService && (
                <p className="import-document-meta">
                  {new Date(extraction.dateOfService).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
          <div className="import-confidence">
            Confidence: {Math.round(extraction.confidence * 100)}%
          </div>
        </div>

        {!hasData ? (
          <div className="import-no-data">
            <p>No structured data could be extracted from this document.</p>
            <p className="import-hint">
              This might be a scanned image PDF without OCR text, or the document format is not recognized.
            </p>
          </div>
        ) : (
          <>
            {/* Labs Section */}
            {extraction.labs.length > 0 && (
              <div className="import-section">
                <h4>🧪 Lab Results ({extraction.labs.length})</h4>
                <div className="import-labs-grid">
                  {extraction.labs.map((lab, i) => (
                    <div key={i} className="import-lab-item">
                      <span className="import-lab-name">{lab.testName}</span>
                      <span className={`import-lab-value import-lab-status-${lab.status}`}>
                        {lab.value} {lab.unit}
                      </span>
                      {lab.referenceRange && (
                        <span className="import-lab-range">
                          ({lab.referenceRange.low}-{lab.referenceRange.high})
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Medications Section */}
            {extraction.medications.length > 0 && (
              <div className="import-section">
                <h4>💊 Medications ({extraction.medications.length})</h4>
                <div className="import-medications-list">
                  {extraction.medications.map((med, i) => (
                    <div key={i} className="import-medication-item">
                      <span className="import-med-name">{med.name}</span>
                      <span className="import-med-details">
                        {med.dosage} {med.frequency}
                      </span>
                      <span className={`import-med-status import-med-status-${med.status}`}>
                        {med.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conditions Section */}
            {extraction.conditions.length > 0 && (
              <div className="import-section">
                <h4>🏥 Conditions ({extraction.conditions.length})</h4>
                <div className="import-conditions-list">
                  {extraction.conditions.map((cond, i) => (
                    <div key={i} className="import-condition-item">
                      <span className="import-cond-name">{cond.name}</span>
                      {cond.icd10 && (
                        <span className="import-cond-code">{cond.icd10}</span>
                      )}
                      <span className={`import-cond-status import-cond-status-${cond.status}`}>
                        {cond.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Imaging Section */}
            {extraction.imaging.length > 0 && (
              <div className="import-section">
                <h4>🩻 Imaging Reports ({extraction.imaging.length})</h4>
                <div className="import-imaging-list">
                  {extraction.imaging.map((img, i) => (
                    <div key={i} className="import-imaging-item">
                      <span className="import-img-type">{img.type}</span>
                      <span className="import-img-part">{img.bodyPart}</span>
                      <p className="import-img-impression">{img.impression}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Warnings */}
        {extraction.warnings.length > 0 && (
          <div className="import-warnings">
            <h4>⚠️ Warnings</h4>
            <ul>
              {extraction.warnings.map((warning, i) => (
                <li key={i}>{warning}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="import-actions">
          <button
            className="import-btn import-btn-secondary"
            onClick={handleReset}
          >
            Cancel
          </button>
          {hasData && (
            <button
              className="import-btn import-btn-primary"
              onClick={() => handleImport(true)}
            >
              Import Data
            </button>
          )}
        </div>
      </div>
    );
  };

  // Render completion
  const renderComplete = () => (
    <div className="import-complete">
      <div className="import-complete-icon">✅</div>
      <h3>Import Complete!</h3>
      {state.imported && (
        <div className="import-summary">
          <div className="import-summary-item">
            <span className="import-summary-count">{state.imported.labs}</span>
            <span className="import-summary-label">Lab Results</span>
          </div>
          <div className="import-summary-item">
            <span className="import-summary-count">{state.imported.medications}</span>
            <span className="import-summary-label">Medications</span>
          </div>
          <div className="import-summary-item">
            <span className="import-summary-count">{state.imported.conditions}</span>
            <span className="import-summary-label">Conditions</span>
          </div>
          <div className="import-summary-item">
            <span className="import-summary-count">{state.imported.imaging}</span>
            <span className="import-summary-label">Imaging Reports</span>
          </div>
        </div>
      )}
      <button className="import-btn import-btn-primary" onClick={handleReset}>
        Import Another Document
      </button>
    </div>
  );

  // Render error
  const renderError = () => (
    <div className="import-error">
      <div className="import-error-icon">❌</div>
      <h3>Import Failed</h3>
      <p>{state.error}</p>
      <button className="import-btn import-btn-primary" onClick={handleReset}>
        Try Again
      </button>
    </div>
  );

  return (
    <div className="import-view">
      <h2>Import Medical Records</h2>
      <p className="import-description">
        Import your medical records from PDF files. Your data stays on your device
        and is processed locally.
      </p>

      {state.status === 'idle' && renderDropZone()}
      {(state.status === 'parsing' || state.status === 'checking-duplicates' || state.status === 'importing') && renderProgress()}
      {state.status === 'reviewing' && renderReview()}
      {state.status === 'complete' && renderComplete()}
      {state.status === 'error' && renderError()}
    </div>
  );
};

export default ImportView;
