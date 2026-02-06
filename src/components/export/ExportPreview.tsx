/**
 * ExportPreview.tsx
 * 
 * Preview component showing what will be exported before download.
 * Allows users to review and customize their export.
 */

import React, { useState, useMemo } from 'react';
import type { 
  CompleteHealthRecord, 
  ExportFormat, 
  ExportDataCategory,
  ExportOptions,
} from '../../core/export';
import { getCategoryName, estimateExportSize } from '../../core/export';

/**
 * Props for ExportPreview
 */
interface ExportPreviewProps {
  /** Health data to preview */
  data: CompleteHealthRecord;
  /** Selected export format */
  format: ExportFormat;
  /** Selected categories */
  categories: ExportDataCategory[];
  /** Export options */
  options: ExportOptions;
  /** Language preference */
  language?: 'es' | 'en';
  /** Called when user confirms */
  onConfirm: () => void;
  /** Called when user goes back */
  onBack: () => void;
  /** Called when categories change */
  onCategoriesChange?: (categories: ExportDataCategory[]) => void;
}

/**
 * Export Preview Component
 */
export const ExportPreview: React.FC<ExportPreviewProps> = ({
  data,
  format,
  categories,
  options,
  language = 'es',
  onConfirm,
  onBack,
  onCategoriesChange,
}) => {
  const isSpanish = language === 'es';
  const [activeTab, setActiveTab] = useState<ExportDataCategory>('profile');
  const [showSample, setShowSample] = useState(true);
  
  // Calculate statistics
  const stats = useMemo(() => {
    return {
      profile: data.profile ? 1 : 0,
      labs: data.labs.length,
      medications: data.medications.length,
      conditions: data.conditions.length,
      procedures: data.procedures.length,
      allergies: data.allergies.length,
      immunizations: data.immunizations.length,
      vitals: data.vitals.length,
      imaging: data.imaging.length,
      timeline: data.timeline.length,
      notes: data.notes.length,
      appointments: 0,
      all: 0,
    };
  }, [data]);
  
  const totalRecords = useMemo(() => {
    return Object.values(stats).reduce((a, b) => a + b, 0);
  }, [stats]);
  
  const estimatedSize = useMemo(() => {
    return estimateExportSize(categories.length, totalRecords, format);
  }, [categories, totalRecords, format]);
  
  const t = {
    title: isSpanish ? 'Vista Previa de Exportación' : 'Export Preview',
    subtitle: isSpanish
      ? 'Revise lo que se incluirá en su exportación'
      : 'Review what will be included in your export',
    summary: isSpanish ? 'Resumen' : 'Summary',
    format: isSpanish ? 'Formato' : 'Format',
    categories: isSpanish ? 'Categorías' : 'Categories',
    records: isSpanish ? 'Registros' : 'Records',
    estimatedSize: isSpanish ? 'Tamaño Estimado' : 'Estimated Size',
    dateRange: isSpanish ? 'Rango de Fechas' : 'Date Range',
    encryption: isSpanish ? 'Encriptación' : 'Encryption',
    enabled: isSpanish ? 'Activada' : 'Enabled',
    disabled: isSpanish ? 'Desactivada' : 'Disabled',
    back: isSpanish ? 'Atrás' : 'Back',
    confirm: isSpanish ? 'Confirmar y Descargar' : 'Confirm & Download',
    allDates: isSpanish ? 'Todas las fechas' : 'All dates',
    tabs: {
      profile: isSpanish ? 'Perfil' : 'Profile',
      labs: isSpanish ? 'Laboratorios' : 'Labs',
      medications: isSpanish ? 'Medicamentos' : 'Medications',
      conditions: isSpanish ? 'Condiciones' : 'Conditions',
      allergies: isSpanish ? 'Alergias' : 'Allergies',
      timeline: isSpanish ? 'Línea de Tiempo' : 'Timeline',
    },
    noData: isSpanish ? 'No hay datos en esta categoría' : 'No data in this category',
    showing: isSpanish ? 'Mostrando muestra de' : 'Showing sample of',
    of: isSpanish ? 'de' : 'of',
  };
  
  // Get sample data for active tab
  const getSampleData = () => {
    switch (activeTab) {
      case 'profile':
        return data.profile ? [data.profile] : [];
      case 'labs':
        return data.labs.slice(0, 5);
      case 'medications':
        return data.medications.slice(0, 5);
      case 'conditions':
        return data.conditions.slice(0, 5);
      case 'allergies':
        return data.allergies.slice(0, 5);
      case 'timeline':
        return data.timeline.slice(0, 5);
      default:
        return [];
    }
  };
  
  const sampleData = getSampleData();
  const totalInCategory = stats[activeTab] || 0;
  
  // Format sample data for display
  const formatSampleItem = (item: unknown): string => {
    return JSON.stringify(item, null, 2);
  };
  
  return (
    <div className="export-preview">
      <div className="preview-header">
        <h2>{t.title}</h2>
        <p className="subtitle">{t.subtitle}</p>
      </div>
      
      <div className="preview-content">
        {/* Summary Panel */}
        <div className="summary-panel">
          <div className="summary-section">
            <h3>{t.summary}</h3>
            
            <div className="summary-grid">
              <div className="summary-item">
                <span className="summary-label">{t.format}</span>
                <span className="summary-value">{format.toUpperCase()}</span>
              </div>
              
              <div className="summary-item">
                <span className="summary-label">{t.categories}</span>
                <span className="summary-value">{categories.length}</span>
              </div>
              
              <div className="summary-item">
                <span className="summary-label">{t.records}</span>
                <span className="summary-value">{totalRecords.toLocaleString()}</span>
              </div>
              
              <div className="summary-item">
                <span className="summary-label">{t.estimatedSize}</span>
                <span className="summary-value">{estimatedSize}</span>
              </div>
            </div>
          </div>
          
          <div className="summary-section">
            <h3>{isSpanish ? 'Opciones' : 'Options'}</h3>
            
            <div className="options-list">
              <div className="option-item">
                <span>{t.dateRange}</span>
                <span className="option-value">
                  {options.dateRange
                    ? `${new Date(options.dateRange.startDate).toLocaleDateString()} - ${new Date(options.dateRange.endDate).toLocaleDateString()}`
                    : t.allDates}
                </span>
              </div>
              
              <div className="option-item">
                <span>{t.encryption}</span>
                <span className={`option-value ${options.encrypt ? 'enabled' : ''}`}>
                  {options.encrypt ? `✓ ${t.enabled}` : t.disabled}
                </span>
              </div>
            </div>
          </div>
          
          <div className="summary-section">
            <h3>{isSpanish ? 'Categorías Seleccionadas' : 'Selected Categories'}</h3>
            
            <div className="selected-categories">
              {categories.map((cat) => (
                <span key={cat} className="category-tag">
                  {getCategoryName(cat, language)}
                  <span className="category-count">({stats[cat] || 0})</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Preview Panel */}
        <div className="preview-panel">
          <div className="preview-tabs">
            {(['profile', 'labs', 'medications', 'conditions', 'allergies'] as const).map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {t.tabs[tab]}
                <span className="tab-count">{stats[tab]}</span>
              </button>
            ))}
          </div>
          
          <div className="preview-data">
            {sampleData.length > 0 ? (
              <>
                <div className="preview-toolbar">
                  <label className="toggle-sample">
                    <input
                      type="checkbox"
                      checked={showSample}
                      onChange={(e) => setShowSample(e.target.checked)}
                    />
                    {isSpanish ? 'Mostrar datos de ejemplo' : 'Show sample data'}
                  </label>
                  
                  <span className="sample-info">
                    {t.showing} {sampleData.length} {t.of} {totalInCategory}
                  </span>
                </div>
                
                {showSample && (
                  <div className="sample-content">
                    {sampleData.map((item, index) => (
                      <div key={index} className="sample-item">
                        <pre>{formatSampleItem(item)}</pre>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="no-data">
                <span className="no-data-icon">📭</span>
                <p>{t.noData}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="preview-actions">
        <button className="btn btn-secondary" onClick={onBack}>
          {t.back}
        </button>
        <button className="btn btn-primary" onClick={onConfirm}>
          {t.confirm}
        </button>
      </div>
      
      <style>{`
        .export-preview {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .preview-header {
          margin-bottom: 32px;
        }
        
        .preview-header h2 {
          margin: 0 0 8px 0;
          color: #1a365d;
          font-size: 28px;
        }
        
        .subtitle {
          margin: 0;
          color: #718096;
        }
        
        .preview-content {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 24px;
        }
        
        @media (max-width: 900px) {
          .preview-content {
            grid-template-columns: 1fr;
          }
        }
        
        .summary-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .summary-section {
          background: #f7fafc;
          border-radius: 12px;
          padding: 20px;
        }
        
        .summary-section h3 {
          margin: 0 0 16px 0;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #718096;
        }
        
        .summary-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        
        .summary-item {
          display: flex;
          flex-direction: column;
        }
        
        .summary-label {
          font-size: 12px;
          color: #718096;
        }
        
        .summary-value {
          font-size: 18px;
          font-weight: 600;
          color: #2d3748;
        }
        
        .options-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .option-item {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
        }
        
        .option-value {
          color: #718096;
        }
        
        .option-value.enabled {
          color: #38a169;
          font-weight: 500;
        }
        
        .selected-categories {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .category-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          background: #ebf8ff;
          color: #2b6cb0;
          border-radius: 20px;
          font-size: 13px;
        }
        
        .category-count {
          opacity: 0.7;
        }
        
        .preview-panel {
          background: #f7fafc;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .preview-tabs {
          display: flex;
          gap: 4px;
          padding: 12px;
          background: #edf2f7;
          overflow-x: auto;
        }
        
        .tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border: none;
          background: transparent;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          color: #4a5568;
          white-space: nowrap;
        }
        
        .tab:hover {
          background: white;
        }
        
        .tab.active {
          background: white;
          color: #3182ce;
          font-weight: 500;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .tab-count {
          padding: 2px 6px;
          background: #e2e8f0;
          border-radius: 10px;
          font-size: 11px;
        }
        
        .tab.active .tab-count {
          background: #ebf8ff;
        }
        
        .preview-data {
          padding: 20px;
        }
        
        .preview-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .toggle-sample {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          cursor: pointer;
        }
        
        .sample-info {
          font-size: 13px;
          color: #718096;
        }
        
        .sample-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-height: 500px;
          overflow-y: auto;
        }
        
        .sample-item {
          background: white;
          border-radius: 8px;
          padding: 16px;
        }
        
        .sample-item pre {
          margin: 0;
          font-size: 12px;
          overflow-x: auto;
          white-space: pre-wrap;
          word-break: break-word;
        }
        
        .no-data {
          text-align: center;
          padding: 60px 20px;
        }
        
        .no-data-icon {
          font-size: 48px;
          display: block;
          margin-bottom: 16px;
        }
        
        .no-data p {
          color: #718096;
          margin: 0;
        }
        
        .preview-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid #e2e8f0;
        }
        
        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-primary {
          background: #3182ce;
          color: white;
        }
        
        .btn-primary:hover {
          background: #2b6cb0;
        }
        
        .btn-secondary {
          background: #edf2f7;
          color: #4a5568;
        }
        
        .btn-secondary:hover {
          background: #e2e8f0;
        }
      `}></style>
    </div>
  );
};

export default ExportPreview;
