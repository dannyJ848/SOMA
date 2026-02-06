/**
 * ExportView.tsx
 * 
 * Main export configuration component.
 * Spanish-first UI for selecting export format, categories, and options.
 */

import React, { useState, useCallback, useMemo } from 'react';
import type {
  ExportOptions,
  ExportFormat,
  ExportDataCategory,
  ExportResult,
  DataFetcher,
  PasswordStrength,
} from '../../core/export';
import {
  exportHealthData,
  getExportFormatName,
  getCategoryName,
  validateExportOptions,
  checkPasswordStrength,
  generateSecurePassword,
  EXPORT_FORMATS,
  EXPORT_CATEGORIES,
  PDF_TEMPLATES,
  FHIR_BUNDLE_TYPES,
  downloadExport,
} from '../../core/export';

/**
 * Props for ExportView
 */
interface ExportViewProps {
  /** Data fetcher for collecting health data */
  dataFetcher: DataFetcher;
  /** Called when export completes */
  onExportComplete?: (result: ExportResult) => void;
  /** Called when export fails */
  onExportError?: (error: Error) => void;
  /** Initial options */
  initialOptions?: Partial<ExportOptions>;
  /** Language preference */
  language?: 'es' | 'en';
  /** Patient name for PDF header */
  patientName?: string;
}

/**
 * Export Configuration View
 */
export const ExportView: React.FC<ExportViewProps> = ({
  dataFetcher,
  onExportComplete,
  onExportError,
  initialOptions,
  language = 'es',
  patientName,
}) => {
  const isSpanish = language === 'es';
  
  // ============================================================================
  // State
  // ============================================================================
  
  const [format, setFormat] = useState<ExportFormat>(initialOptions?.format || 'json');
  const [categories, setCategories] = useState<ExportDataCategory[]>(
    initialOptions?.categories || ['all']
  );
  const [dateRangeEnabled, setDateRangeEnabled] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [encryptEnabled, setEncryptEnabled] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [pdfTemplate, setPdfTemplate] = useState(initialOptions?.pdfTemplate || 'full');
  const [includeCharts, setIncludeCharts] = useState(initialOptions?.includeCharts ?? true);
  const [fhirBundleType, setFhirBundleType] = useState(
    initialOptions?.fhirBundleType || 'collection'
  );
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState({
    stage: '',
    percent: 0,
    message: '',
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState('');
  
  // ============================================================================
  // Computed
  // ============================================================================
  
  const passwordStrength = useMemo(() => {
    return password ? checkPasswordStrength(password) : null;
  }, [password]);
  
  const passwordsMatch = useMemo(() => {
    return !encryptEnabled || !password || password === confirmPassword;
  }, [encryptEnabled, password, confirmPassword]);
  
  const canExport = useMemo(() => {
    if (isExporting) return false;
    if (categories.length === 0) return false;
    if (encryptEnabled && !password) return false;
    if (encryptEnabled && password !== confirmPassword) return false;
    return true;
  }, [isExporting, categories, encryptEnabled, password, confirmPassword]);
  
  // ============================================================================
  // Handlers
  // ============================================================================
  
  const handleCategoryToggle = useCallback((category: ExportDataCategory) => {
    setCategories(prev => {
      if (category === 'all') {
        return ['all'];
      }
      
      const newCategories = prev.filter(c => c !== 'all');
      
      if (prev.includes(category)) {
        const filtered = newCategories.filter(c => c !== category);
        return filtered.length === 0 ? ['all'] : filtered;
      } else {
        return [...newCategories, category];
      }
    });
  }, []);
  
  const handleSelectAllCategories = useCallback(() => {
    setCategories(['all']);
  }, []);
  
  const handleGeneratePassword = useCallback(() => {
    const newPassword = generateSecurePassword(16);
    setPassword(newPassword);
    setConfirmPassword(newPassword);
    setShowPassword(true);
  }, []);
  
  const handleExport = useCallback(async () => {
    setErrors([]);
    setSuccessMessage('');
    
    const options: ExportOptions = {
      format,
      categories,
      language,
      patientName,
      pdfTemplate: pdfTemplate as ExportOptions['pdfTemplate'],
      includeCharts,
      fhirBundleType: fhirBundleType as ExportOptions['fhirBundleType'],
      encrypt: encryptEnabled,
      password: encryptEnabled ? password : undefined,
      dateRange: dateRangeEnabled && startDate && endDate
        ? { startDate: new Date(startDate), endDate: new Date(endDate) }
        : undefined,
    };
    
    const validationErrors = validateExportOptions(options);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsExporting(true);
    
    try {
      const result = await exportHealthData(
        options,
        dataFetcher,
        (p) => {
          setProgress({
            stage: p.stage,
            percent: p.percent,
            message: isSpanish ? p.messageEs : p.messageEn,
          });
        }
      );
      
      if (result.success) {
        downloadExport(result);
        setSuccessMessage(
          isSpanish
            ? `¡Exportación exitosa! Archivo descargado: ${result.filename}`
            : `Export successful! File downloaded: ${result.filename}`
        );
        onExportComplete?.(result);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      setErrors([err.message]);
      onExportError?.(err);
    } finally {
      setIsExporting(false);
      setProgress({ stage: '', percent: 0, message: '' });
    }
  }, [
    format,
    categories,
    language,
    patientName,
    pdfTemplate,
    includeCharts,
    fhirBundleType,
    encryptEnabled,
    password,
    dateRangeEnabled,
    startDate,
    endDate,
    dataFetcher,
    isSpanish,
    onExportComplete,
    onExportError,
  ]);
  
  // ============================================================================
  // Render Helpers
  // ============================================================================
  
  const t = {
    title: isSpanish ? 'Exportar Datos de Salud' : 'Export Health Data',
    subtitle: isSpanish
      ? 'Descargue sus datos en el formato que prefiera'
      : 'Download your data in your preferred format',
    formatLabel: isSpanish ? 'Formato de Exportación' : 'Export Format',
    categoriesLabel: isSpanish ? 'Categorías a Exportar' : 'Categories to Export',
    selectAll: isSpanish ? 'Seleccionar Todo' : 'Select All',
    dateRangeLabel: isSpanish ? 'Rango de Fechas' : 'Date Range',
    dateRangeDesc: isSpanish
      ? 'Exportar solo datos dentro de un período específico'
      : 'Export only data within a specific period',
    fromDate: isSpanish ? 'Desde' : 'From',
    toDate: isSpanish ? 'Hasta' : 'To',
    encryptionLabel: isSpanish ? 'Encriptación' : 'Encryption',
    encryptionDesc: isSpanish
      ? 'Proteja su archivo con contraseña (AES-256)'
      : 'Protect your file with a password (AES-256)',
    passwordLabel: isSpanish ? 'Contraseña' : 'Password',
    confirmPasswordLabel: isSpanish ? 'Confirmar Contraseña' : 'Confirm Password',
    generatePassword: isSpanish ? 'Generar' : 'Generate',
    passwordStrength: isSpanish ? 'Seguridad:' : 'Strength:',
    passwordsMismatch: isSpanish ? 'Las contraseñas no coinciden' : 'Passwords do not match',
    pdfOptionsLabel: isSpanish ? 'Opciones de PDF' : 'PDF Options',
    templateLabel: isSpanish ? 'Plantilla' : 'Template',
    includeCharts: isSpanish ? 'Incluir gráficas' : 'Include charts',
    fhirOptionsLabel: isSpanish ? 'Opciones FHIR' : 'FHIR Options',
    bundleTypeLabel: isSpanish ? 'Tipo de Bundle' : 'Bundle Type',
    exportButton: isSpanish ? 'Exportar Datos' : 'Export Data',
    exportingButton: isSpanish ? 'Exportando...' : 'Exporting...',
    cancelButton: isSpanish ? 'Cancelar' : 'Cancel',
    securityNote: isSpanish
      ? '🔒 Toda la información se procesa localmente en su dispositivo. Sus datos nunca salen de su control.'
      : '🔒 All information is processed locally on your device. Your data never leaves your control.',
    tips: {
      title: isSpanish ? '💡 Consejos' : '💡 Tips',
      json: isSpanish
        ? 'JSON: Formato completo para respaldos o transferir a otra aplicación'
        : 'JSON: Complete format for backups or transferring to another app',
      pdf: isSpanish
        ? 'PDF: Ideal para compartir con médicos o imprimir'
        : 'PDF: Ideal for sharing with doctors or printing',
      csv: isSpanish
        ? 'CSV: Para analizar en Excel o Google Sheets'
        : 'CSV: For analysis in Excel or Google Sheets',
      fhir: isSpanish
        ? 'FHIR: Estándar médico para interoperabilidad con hospitales'
        : 'FHIR: Medical standard for hospital interoperability',
    },
  };
  
  // ============================================================================
  // Render
  // ============================================================================
  
  return (
    <div className="export-view">
      <div className="export-header">
        <h2>{t.title}</h2>
        <p className="subtitle">{t.subtitle}</p>
      </div>
      
      {errors.length > 0 && (
        <div className="alert alert-error">
          {errors.map((error, i) => (
            <div key={i}>{error}</div>
          ))}
        </div>
      )}
      
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      
      <div className="export-section">
        <label className="section-label">{t.formatLabel}</label>
        <div className="format-grid">
          {EXPORT_FORMATS.map((f) => (
            <button
              key={f}
              type="button"
              className={`format-option ${format === f ? 'selected' : ''}`}
              onClick={() => setFormat(f)}
            >
              <span className="format-icon">{getFormatIcon(f)}</span>
              <span className="format-name">{getExportFormatName(f, language)}</span>
            </button>
          ))}
        </div>
        
        <div className="format-tip">{t.tips[format]}</div>
      </div>
      
      <div className="export-section">
        <div className="section-header">
          <label className="section-label">{t.categoriesLabel}</label>
          <button
            type="button"
            className="text-button"
            onClick={handleSelectAllCategories}
          >
            {t.selectAll}
          </button>
        </div>
        
        <div className="categories-grid">
          {EXPORT_CATEGORIES.map((category) => (
            <label
              key={category}
              className={`category-checkbox ${
                categories.includes(category) ? 'selected' : ''
              }`}
            >
              <input
                type="checkbox"
                checked={categories.includes(category)}
                onChange={() => handleCategoryToggle(category)}
              />
              <span>{getCategoryName(category, language)}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="export-section">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={dateRangeEnabled}
            onChange={(e) => setDateRangeEnabled(e.target.checked)}
          />
          <span className="toggle-text">{t.dateRangeLabel}</span>
          <span className="toggle-desc">{t.dateRangeDesc}</span>
        </label>
        
        {dateRangeEnabled && (
          <div className="date-range-inputs">
            <div className="date-field">
              <label>{t.fromDate}</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="date-field">
              <label>{t.toDate}</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
      
      {format === 'pdf' && (
        <div className="export-section">
          <label className="section-label">{t.pdfOptionsLabel}</label>
          
          <div className="option-row">
            <label>{t.templateLabel}</label>
            <select
              value={pdfTemplate}
              onChange={(e) => setPdfTemplate(e.target.value)}
            >
              {PDF_TEMPLATES.map((templ) => (
                <option key={templ.id} value={templ.id}>
                  {isSpanish ? templ.nameEs : templ.nameEn}
                </option>
              ))}
            </select>
          </div>
          
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={includeCharts}
              onChange={(e) => setIncludeCharts(e.target.checked)}
            />
            {t.includeCharts}
          </label>
        </div>
      )}
      
      {format === 'fhir' && (
        <div className="export-section">
          <label className="section-label">{t.fhirOptionsLabel}</label>
          
          <div className="option-row">
            <label>{t.bundleTypeLabel}</label>
            <select
              value={fhirBundleType}
              onChange={(e) => setFhirBundleType(e.target.value)}
            >
              {FHIR_BUNDLE_TYPES.map((bt) => (
                <option key={bt.id} value={bt.id}>
                  {isSpanish ? bt.nameEs : bt.nameEn}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      
      <div className="export-section">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={encryptEnabled}
            onChange={(e) => setEncryptEnabled(e.target.checked)}
          />
          <span className="toggle-text">{t.encryptionLabel}</span>
          <span className="toggle-desc">{t.encryptionDesc}</span>
        </label>
        
        {encryptEnabled && (
          <div className="encryption-panel">
            <div className="password-field">
              <label>{t.passwordLabel}</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={isSpanish ? 'Mínimo 8 caracteres' : 'Minimum 8 characters'}
                />
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
                
                <button
                  type="button"
                  className="text-button small"
                  onClick={handleGeneratePassword}
                >
                  {t.generatePassword}
                </button>
              </div>
              
              {passwordStrength && (
                <div className={`password-strength strength-${passwordStrength.score}`}>
                  {t.passwordStrength} {isSpanish ? passwordStrength.labelEs : passwordStrength.label}
                </div>
              )}
            </div>
            
            <div className="password-field">
              <label>{t.confirmPasswordLabel}</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              
              {!passwordsMatch && (
                <div className="password-error">{t.passwordsMismatch}</div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {isExporting ? (
        <ExportProgress 
          stage={progress.stage}
          percent={progress.percent}
          message={progress.message}
        />
      ) : (
        <div className="export-actions">
          <button
            type="button"
            className="btn btn-primary btn-large"
            onClick={handleExport}
            disabled={!canExport}
          >
            {t.exportButton}
          </button>
        </div>
      )}
      
      <div className="security-notice">
        <span className="security-icon">🔒</span>
        <p>{t.securityNote}</p>
      </div>
      
      <style>{`
        .export-view {
          max-width: 800px;
          margin: 0 auto;
          padding: 24px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .export-header {
          margin-bottom: 32px;
        }
        
        .export-header h2 {
          margin: 0 0 8px 0;
          color: #1a365d;
          font-size: 28px;
        }
        
        .subtitle {
          margin: 0;
          color: #718096;
          font-size: 16px;
        }
        
        .alert {
          padding: 16px;
          border-radius: 8px;
          margin-bottom: 24px;
        }
        
        .alert-error {
          background: #fed7d7;
          color: #c53030;
          border: 1px solid #fc8181;
        }
        
        .alert-success {
          background: #c6f6d5;
          color: #276749;
          border: 1px solid #9ae6b4;
        }
        
        .export-section {
          background: #f7fafc;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 24px;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        
        .section-label {
          display: block;
          font-weight: 600;
          font-size: 16px;
          color: #2d3748;
          margin-bottom: 16px;
        }
        
        .format-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
        }
        
        .format-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 20px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .format-option:hover {
          border-color: #3182ce;
        }
        
        .format-option.selected {
          border-color: #3182ce;
          background: #ebf8ff;
        }
        
        .format-icon {
          font-size: 32px;
        }
        
        .format-name {
          font-size: 14px;
          font-weight: 500;
          color: #2d3748;
          text-align: center;
        }
        
        .format-tip {
          margin-top: 16px;
          padding: 12px;
          background: #ebf8ff;
          border-radius: 8px;
          font-size: 14px;
          color: #2b6cb0;
        }
        
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }
        
        .category-checkbox {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: white;
          border-radius: 8px;
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .category-checkbox:hover {
          border-color: #cbd5e0;
        }
        
        .category-checkbox.selected {
          border-color: #3182ce;
          background: #ebf8ff;
        }
        
        .category-checkbox input {
          width: 20px;
          height: 20px;
          accent-color: #3182ce;
        }
        
        .toggle-label {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          cursor: pointer;
        }
        
        .toggle-label input {
          width: 48px;
          height: 24px;
          accent-color: #3182ce;
        }
        
        .toggle-text {
          font-weight: 600;
          color: #2d3748;
          display: block;
        }
        
        .toggle-desc {
          font-size: 14px;
          color: #718096;
          display: block;
          margin-top: 4px;
        }
        
        .date-range-inputs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 16px;
        }
        
        .date-field label {
          display: block;
          font-size: 14px;
          color: #4a5568;
          margin-bottom: 4px;
        }
        
        .date-field input {
          width: 100%;
          padding: 10px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 16px;
        }
        
        .option-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        
        .option-row label {
          font-weight: 500;
          color: #4a5568;
          min-width: 100px;
        }
        
        .option-row select {
          flex: 1;
          padding: 10px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 16px;
          background: white;
        }
        
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }
        
        .checkbox-label input {
          width: 20px;
          height: 20px;
          accent-color: #3182ce;
        }
        
        .encryption-panel {
          margin-top: 16px;
          padding: 20px;
          background: white;
          border-radius: 8px;
        }
        
        .password-field {
          margin-bottom: 16px;
        }
        
        .password-field label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: #4a5568;
          margin-bottom: 8px;
        }
        
        .password-input-wrapper {
          display: flex;
          gap: 8px;
        }
        
        .password-input-wrapper input {
          flex: 1;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 16px;
        }
        
        .password-strength {
          margin-top: 8px;
          font-size: 14px;
        }
        
        .password-strength.strength-0 { color: #e53e3e; }
        .password-strength.strength-1 { color: #dd6b20; }
        .password-strength.strength-2 { color: #d69e2e; }
        .password-strength.strength-3 { color: #38a169; }
        .password-strength.strength-4 { color: #276749; }
        
        .password-error {
          margin-top: 8px;
          font-size: 14px;
          color: #e53e3e;
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
        
        .btn-primary:hover:not(:disabled) {
          background: #2b6cb0;
        }
        
        .btn-primary:disabled {
          background: #cbd5e0;
          cursor: not-allowed;
        }
        
        .btn-large {
          padding: 16px 32px;
          font-size: 18px;
          width: 100%;
        }
        
        .text-button {
          background: none;
          border: none;
          color: #3182ce;
          font-size: 14px;
          cursor: pointer;
          padding: 4px 8px;
        }
        
        .text-button:hover {
          text-decoration: underline;
        }
        
        .text-button.small {
          font-size: 12px;
        }
        
        .icon-button {
          background: #edf2f7;
          border: none;
          border-radius: 6px;
          padding: 8px 12px;
          cursor: pointer;
          font-size: 18px;
        }
        
        .export-actions {
          margin-top: 32px;
        }
        
        .security-notice {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 32px;
          padding: 20px;
          background: #f0fff4;
          border: 1px solid #9ae6b4;
          border-radius: 12px;
        }
        
        .security-icon {
          font-size: 32px;
        }
        
        .security-notice p {
          margin: 0;
          color: #276749;
          font-size: 14px;
          line-height: 1.5;
        }
      `}></style>
    </div>
  );
};

/**
 * Get icon for export format
 */
function getFormatIcon(format: ExportFormat): string {
  const icons: Record<ExportFormat, string> = {
    json: '📋',
    pdf: '📄',
    csv: '📊',
    fhir: '🏥',
  };
  return icons[format];
}

/**
 * Export Progress Component (inline)
 */
const ExportProgress: React.FC<{
  stage: string;
  percent: number;
  message: string;
}> = ({ stage, percent, message }) => {
  return (
    <div className="export-progress">
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="progress-info">
        <span className="progress-stage">{stage}</span>
        <span className="progress-percent">{percent}%</span>
      </div>
      <p className="progress-message">{message}</p>
      
      <style>{`
        .export-progress {
          padding: 24px;
          background: #f7fafc;
          border-radius: 12px;
          margin-top: 32px;
        }
        
        .progress-bar-container {
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #3182ce, #63b3ed);
          transition: width 0.3s ease;
        }
        
        .progress-info {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
        }
        
        .progress-stage {
          font-size: 14px;
          font-weight: 500;
          color: #4a5568;
          text-transform: uppercase;
        }
        
        .progress-percent {
          font-size: 14px;
          font-weight: 600;
          color: #3182ce;
        }
        
        .progress-message {
          margin: 8px 0 0 0;
          font-size: 16px;
          color: #2d3748;
        }
      `}></style>
    </div>
  );
};

export default ExportView;
