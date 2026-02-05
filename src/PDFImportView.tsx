import { useState, useEffect, useCallback } from 'react';
import { pdfImportStore, type PDFImportJob, type ExtractedMedicalData, type ReviewItem } from '../../../core/import/pdf';

interface PDFImportViewProps {
  onBack: () => void;
  onComplete?: () => void;
}

export function PDFImportView({ onBack, onComplete }: PDFImportViewProps) {
  const [jobs, setJobs] = useState<PDFImportJob[]>([]);
  const [activeJob, setActiveJob] = useState<PDFImportJob | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const unsubscribe = pdfImportStore.subscribe(() => {
      setJobs(pdfImportStore.getAllJobs());
      setActiveJob(pdfImportStore.getActiveJob() || null);
    });
    setJobs(pdfImportStore.getAllJobs());
    return unsubscribe;
  }, []);

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files).filter(f => f.type === 'application/pdf');
    
    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      const job = pdfImportStore.createJob(file.name, file.size, 1);
      
      // Start extraction
      try {
        const text = await pdfImportStore.performOCR(job.id, arrayBuffer);
        const data = await pdfImportStore.extractMedicalData(job.id, text);
        pdfImportStore.updateJobStatus(job.id, 'review', 100, { extractedData: data });
      } catch (err) {
        pdfImportStore.updateJobStatus(job.id, 'error', 0, { 
          errors: [String(err)] 
        });
      }
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const toggleItem = (itemId: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);
  };

  const importSelected = () => {
    // TODO: Import selected items to Biological Self
    onComplete?.();
  };

  return (
    <div className="pdf-import-view">
      <header className="import-header">
        <button className="back-button" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>
        <h1>Import Medical Records</h1>
        <p className="subtitle">Upload PDF files to extract your medical data</p>
      </header>

      {/* Drop Zone */}
      <div
        className={`drop-zone ${isDragging ? 'dragging' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        <p>Drag and drop PDF files here</p>
        <span className="or">or</span>
        <button className="browse-button">Browse Files</button>
        <p className="hint">Supported: PDF medical records, lab reports, discharge summaries</p>
      </div>

      {/* Jobs List */}
      {jobs.length > 0 && (
        <div className="jobs-list">
          <h2>Import History</h2>
          {jobs.map(job => (
            <div key={job.id} className={`job-card ${job.status}`}>
              <div className="job-header">
                <span className="job-name">{job.fileName}</span>
                <span className={`job-status ${job.status}`}>{job.status}</span>
              </div>
              
              {job.status === 'processing' || job.status === 'extracting' ? (
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${job.progress}%` }} />
                </div>
              ) : job.status === 'review' && job.extractedData ? (
                <ExtractedDataReview 
                  data={job.extractedData} 
                  selectedItems={selectedItems}
                  onToggleItem={toggleItem}
                />
              ) : job.status === 'error' ? (
                <div className="error-message">
                  {job.errors?.join(', ')}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      )}

      {/* Import Actions */}
      {selectedItems.size > 0 && (
        <div className="import-actions">
          <span>{selectedItems.size} items selected</span>
          <button className="import-button" onClick={importSelected}>
            Import Selected
          </button>
        </div>
      )}
    </div>
  );
}

interface ExtractedDataReviewProps {
  data: ExtractedMedicalData;
  selectedItems: Set<string>;
  onToggleItem: (id: string) => void;
}

function ExtractedDataReview({ data, selectedItems, onToggleItem }: ExtractedDataReviewProps) {
  return (
    <div className="extracted-data-review">
      {/* Conditions */}
      {data.conditions.length > 0 && (
        <section>
          <h4>Conditions ({data.conditions.length})</h4>
          <div className="items-list">
            {data.conditions.map((condition, i) => (
              <label key={`cond-${i}`} className="review-item">
                <input
                  type="checkbox"
                  checked={selectedItems.has(`cond-${i}`)}
                  onChange={() => onToggleItem(`cond-${i}`)}
                />
                <div className="item-content">
                  <span className="item-name">{condition.name}</span>
                  {condition.icd10Code && <span className="item-code">{condition.icd10Code}</span>}
                  <span className={`confidence ${condition.confidence >= 0.8 ? 'high' : 'medium'}`}>
                    {Math.round(condition.confidence * 100)}%
                  </span>
                </div>
              </label>
            ))}
          </div>
        </section>
      )}

      {/* Medications */}
      {data.medications.length > 0 && (
        <section>
          <h4>Medications ({data.medications.length})</h4>
          <div className="items-list">
            {data.medications.map((med, i) => (
              <label key={`med-${i}`} className="review-item">
                <input
                  type="checkbox"
                  checked={selectedItems.has(`med-${i}`)}
                  onChange={() => onToggleItem(`med-${i}`)}
                />
                <div className="item-content">
                  <span className="item-name">{med.name}</span>
                  {med.dosage && <span className="item-dosage">{med.dosage}</span>}
                  {med.frequency && <span className="item-frequency">{med.frequency}</span>}
                </div>
              </label>
            ))}
          </div>
        </section>
      )}

      {/* Lab Results */}
      {data.labResults.length > 0 && (
        <section>
          <h4>Lab Results ({data.labResults.length})</h4>
          <div className="items-list">
            {data.labResults.map((lab, i) => (
              <label key={`lab-${i}`} className="review-item">
                <input
                  type="checkbox"
                  checked={selectedItems.has(`lab-${i}`)}
                  onChange={() => onToggleItem(`lab-${i}`)}
                />
                <div className="item-content">
                  <span className="item-name">{lab.testName}</span>
                  <span className={`item-value ${lab.status}`}>{lab.value}</span>
                  {lab.unit && <span className="item-unit">{lab.unit}</span>}
                </div>
              </label>
            ))}
          </div>
        </section>
      )}

      {/* Allergies */}
      {data.allergies.length > 0 && (
        <section>
          <h4>Allergies ({data.allergies.length})</h4>
          <div className="items-list">
            {data.allergies.map((allergy, i) => (
              <label key={`allergy-${i}`} className="review-item">
                <input
                  type="checkbox"
                  checked={selectedItems.has(`allergy-${i}`)}
                  onChange={() => onToggleItem(`allergy-${i}`)}
                />
                <div className="item-content">
                  <span className="item-name">{allergy.allergen}</span>
                  {allergy.reaction && <span className="item-reaction">{allergy.reaction}</span>}
                </div>
              </label>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
