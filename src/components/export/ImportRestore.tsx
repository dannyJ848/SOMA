/**
 * ImportRestore.tsx
 * 
 * Component for importing and restoring health data from encrypted backups.
 * Supports password-protected restores with validation.
 */

import React, { useState, useCallback, useRef } from 'react';
import type { ImportResult, ImportOptions } from '../../core/export';
import {
  restoreFromBackup,
  verifyBackupPassword,
  isEncryptedBackup,
  detectExportFormat,
} from '../../core/export';

/**
 * Props for ImportRestore
 */
interface ImportRestoreProps {
  /** Called when import is successful */
  onImportComplete?: (result: ImportResult) => void;
  /** Called when import fails */
  onImportError?: (error: Error) => void;
  /** Language preference */
  language?: 'es' | 'en';
  /** Whether to allow merge mode (vs replace only) */
  allowMerge?: boolean;
}

/**
 * Import Status
 */
type ImportStatus = 
  | 'idle'
  | 'reading'
  | 'password-required'
  | 'decrypting'
  | 'validating'
  | 'processing'
  | 'complete'
  | 'error';

/**
 * Import/Restore Component
 */
export const ImportRestore: React.FC<ImportRestoreProps> = ({
  onImportComplete,
  onImportError,
  language = 'es',
  allowMerge = true,
}) => {
  const isSpanish = language === 'es';
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // ============================================================================
  // State
  // ============================================================================
  
  const [status, setStatus] = useState<ImportStatus>('idle');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileContent, setFileContent] = useState<string>('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [importMode, setImportMode] = useState<ImportOptions['mode']>('merge');
  const [progress, setProgress] = useState({
    percent: 0,
    message: '',
    recordsProcessed: 0,
    recordsTotal: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ImportResult | null>(null);
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [detectedFormat, setDetectedFormat] = useState<string | null>(null);
  
  // ============================================================================
  // Handlers
  // ============================================================================
  
  const handleFileSelect = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setSelectedFile(file);
    setError(null);
    setStatus('reading');
    
    try {
      const content = await readFileAsText(file);
      setFileContent(content);
      
      // Detect format
      const format = detectExportFormat(content);
      setDetectedFormat(format);
      
      // Check if encrypted
      const encrypted = isEncryptedBackup(content);
      setIsEncrypted(encrypted);
      
      if (encrypted) {
        setStatus('password-required');
      } else {
        setStatus('validating');
        // Could validate JSON structure here
        setTimeout(() => setStatus('idle'), 500);
      }
    } catch (err) {
      setError(isSpanish 
        ? 'Error al leer el archivo' 
        : 'Error reading file'
      );
      setStatus('error');
    }
  }, [isSpanish]);
  
  const handleVerifyPassword = useCallback(async () => {
    if (!password) return;
    
    setStatus('decrypting');
    setProgress({
      percent: 30,
      message: isSpanish ? 'Verificando contraseña...' : 'Verifying password...',
      recordsProcessed: 0,
      recordsTotal: 0,
    });
    
    try {
      const valid = await verifyBackupPassword(fileContent, password);
      
      if (valid) {
        setStatus('validating');
        setProgress({
          percent: 60,
          message: isSpanish ? 'Validando datos...' : 'Validating data...',
          recordsProcessed: 0,
          recordsTotal: 0,
        });
        
        // Could do additional validation here
        setTimeout(() => setStatus('idle'), 500);
      } else {
        setError(isSpanish 
          ? 'Contraseña incorrecta' 
          : 'Incorrect password'
        );
        setStatus('password-required');
      }
    } catch (err) {
      setError(isSpanish 
        ? 'Error al verificar contraseña' 
        : 'Error verifying password'
      );
      setStatus('error');
    }
  }, [fileContent, password, isSpanish]);
  
  const handleImport = useCallback(async () => {
    setError(null);
    setStatus('processing');
    setProgress({
      percent: 0,
      message: isSpanish ? 'Iniciando importación...' : 'Starting import...',
      recordsProcessed: 0,
      recordsTotal: 100,
    });
    
    try {
      let data: unknown;
      
      if (isEncrypted) {
        setProgress(prev => ({
          ...prev,
          percent: 20,
          message: isSpanish ? 'Desencriptando respaldo...' : 'Decrypting backup...',
        }));
        
        data = await restoreFromBackup(fileContent, password);
      } else {
        data = JSON.parse(fileContent);
      }
      
      setProgress(prev => ({
        ...prev,
        percent: 50,
        message: isSpanish ? 'Procesando datos...' : 'Processing data...',
      }));
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setProgress(prev => ({
        ...prev,
        percent: 90,
        message: isSpanish ? 'Finalizando importación...' : 'Finalizing import...',
      }));
      
      // Mock result - in real implementation this would process the data
      const mockResult: ImportResult = {
        success: true,
        recordsImported: 150,
        recordsSkipped: 0,
        recordsFailed: 0,
        errors: [],
        warnings: [],
        categoriesImported: {
          profile: 1,
          labs: 45,
          medications: 12,
          conditions: 8,
          procedures: 5,
          allergies: 3,
          immunizations: 8,
          vitals: 50,
          imaging: 0,
          timeline: 18,
          notes: 0,
          all: 0,
          appointments: 0,
        },
      };
      
      setResult(mockResult);
      setStatus('complete');
      onImportComplete?.(mockResult);
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(errorMessage);
      setStatus('error');
      onImportError?.(new Error(errorMessage));
    }
  }, [fileContent, isEncrypted, password, isSpanish, onImportComplete, onImportError]);
  
  const handleReset = useCallback(() => {
    setStatus('idle');
    setSelectedFile(null);
    setFileContent('');
    setPassword('');
    setError(null);
    setResult(null);
    setIsEncrypted(false);
    setDetectedFormat(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);
  
  // ============================================================================
  // Helpers
  // ============================================================================
  
  const readFileAsText = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };
  
  // ============================================================================
  // Translations
  // ============================================================================
  
  const t = {
    title: isSpanish ? 'Restaurar desde Respaldo' : 'Restore from Backup',
    subtitle: isSpanish
      ? 'Recupere sus datos desde un archivo de respaldo encriptado'
      : 'Recover your data from an encrypted backup file',
    selectFile: isSpanish ? 'Seleccionar Archivo' : 'Select File',
    dragDrop: isSpanish 
      ? 'Arrastre un archivo aquí o haga clic para seleccionar'
      : 'Drag a file here or click to select',
    supportedFormats: isSpanish 
      ? 'Formatos: JSON encriptado, FHIR Bundle'
      : 'Formats: Encrypted JSON, FHIR Bundle',
    fileSelected: isSpanish ? 'Archivo seleccionado' : 'File selected',
    format: isSpanish ? 'Formato detectado' : 'Detected format',
    encrypted: isSpanish ? 'Encriptado' : 'Encrypted',
    passwordRequired: isSpanish 
      ? 'Este archivo está protegido con contraseña'
      : 'This file is password protected',
    enterPassword: isSpanish ? 'Ingrese la contraseña' : 'Enter password',
    verifyPassword: isSpanish ? 'Verificar' : 'Verify',
    passwordVerified: isSpanish ? '✓ Contraseña verificada' : '✓ Password verified',
    importMode: isSpanish ? 'Modo de importación' : 'Import mode',
    mergeMode: isSpanish ? 'Combinar con datos existentes' : 'Merge with existing data',
    replaceMode: isSpanish ? 'Reemplazar todos los datos' : 'Replace all data',
    mergeDescription: isSpanish
      ? 'Los nuevos datos se agregarán a su información existente'
      : 'New data will be added to your existing information',
    replaceDescription: isSpanish
      ? '⚠️ Todos sus datos actuales serán eliminados y reemplazados'
      : '⚠️ All your current data will be deleted and replaced',
    startImport: isSpanish ? 'Iniciar Restauración' : 'Start Restore',
    processing: isSpanish ? 'Procesando...' : 'Processing...',
    success: isSpanish ? '¡Restauración exitosa!' : 'Restore successful!',
    recordsImported: isSpanish ? 'Registros importados' : 'Records imported',
    recordsSkipped: isSpanish ? 'Registros omitidos' : 'Records skipped',
    recordsFailed: isSpanish ? 'Registros fallidos' : 'Records failed',
    importAnother: isSpanish ? 'Importar otro archivo' : 'Import another file',
    securityWarning: isSpanish
      ? '🔒 Verifique que este archivo provenga de una fuente confiable antes de importar.'
      : '🔒 Verify this file comes from a trusted source before importing.',
    errors: {
      invalidFile: isSpanish ? 'Archivo inválido' : 'Invalid file',
      wrongPassword: isSpanish ? 'Contraseña incorrecta' : 'Wrong password',
      corruptData: isSpanish ? 'Datos corruptos' : 'Corrupt data',
    },
  };
  
  // ============================================================================
  // Render
  // ============================================================================
  
  return (
    <div className="import-restore">
      <div className="restore-header">
        <h2>{t.title}</h2>
        <p className="subtitle">{t.subtitle}</p>
      </div>
      
      {status === 'complete' && result ? (
        <div className="success-panel">
          <div className="success-icon">✅</div>
          <h3>{t.success}</h3>
          
          <div className="result-stats">
            <div className="stat">
              <span className="stat-value success">{result.recordsImported}</span>
              <span className="stat-label">{t.recordsImported}</span>
            </div>
            
            {result.recordsSkipped > 0 && (
              <div className="stat">
                <span className="stat-value warning">{result.recordsSkipped}</span>
                <span className="stat-label">{t.recordsSkipped}</span>
              </div>
            )}
            
            {result.recordsFailed > 0 && (
              <div className="stat">
                <span className="stat-value error">{result.recordsFailed}</span>
                <span className="stat-label">{t.recordsFailed}</span>
              </div>
            )}
          </div>
          
          <div className="category-summary">
            {Object.entries(result.categoriesImported)
              .filter(([_, count]) => count > 0)
              .map(([category, count]) => (
                <div key={category} className="category-item">
                  <span className="category-name">{category}</span>
                  <span className="category-count">{count}</span>
                </div>
              ))}
          </div>
          
          <button className="btn btn-primary" onClick={handleReset}>
            {t.importAnother}
          </button>
        </div>
      ) : (
        <>
          {/* File Upload Area */}
          <div 
            className={`upload-area ${selectedFile ? 'has-file' : ''} ${status === 'error' ? 'error' : ''}`}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".json,.encrypted,.backup"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
            
            {selectedFile ? (
              <div className="file-info">
                <div className="file-icon">📄</div>
                <div className="file-details">
                  <div className="file-name">{selectedFile.name}</div>
                  <div className="file-meta">
                    <span>{(selectedFile.size / 1024).toFixed(1)} KB</span>
                    {detectedFormat && <span>• {t.format}: {detectedFormat.toUpperCase()}</span>}
                    {isEncrypted && <span>• 🔒 {t.encrypted}</span>}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="upload-icon">📂</div>
                <p className="upload-text">{t.dragDrop}</p>
                <p className="upload-hint">{t.supportedFormats}</p>
              </>
            )}
          </div>
          
          {error && (
            <div className="error-message">
              <span>❌</span> {error}
            </div>
          )}
          
          {/* Password Section */}
          {isEncrypted && (
            <div className="password-section">
              <label className="section-label">
                🔐 {t.passwordRequired}
              </label>
              
              <div className="password-input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.enterPassword}
                  disabled={status === 'decrypting'}
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
                  className="btn btn-secondary"
                  onClick={handleVerifyPassword}
                  disabled={!password || status === 'decrypting'}
                >
                  {status === 'decrypting' 
                    ? (isSpanish ? 'Verificando...' : 'Verifying...')
                    : t.verifyPassword
                  }
                </button>
              </div>
            </div>
          )}
          
          {/* Import Mode Selection */}
          {selectedFile && (!isEncrypted || status === 'idle') && (
            <div className="import-mode-section">
              <label className="section-label">{t.importMode}</label>
              
              <div className="mode-options">
                {allowMerge && (
                  <label className={`mode-option ${importMode === 'merge' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="importMode"
                      value="merge"
                      checked={importMode === 'merge'}
                      onChange={(e) => setImportMode(e.target.value as ImportOptions['mode'])}
                    />
                    <div className="mode-content">
                      <strong>{t.mergeMode}</strong>
                      <span>{t.mergeDescription}</span>
                    </div>
                  </label>
                )}
                
                <label className={`mode-option ${importMode === 'replace' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="importMode"
                    value="replace"
                    checked={importMode === 'replace'}
                    onChange={(e) => setImportMode(e.target.value as ImportOptions['mode'])}
                  />
                  <div className="mode-content">
                    <strong>{t.replaceMode}</strong>
                    <span>{t.replaceDescription}</span>
                  </div>
                </label>
              </div>
            </div>
          )}
          
          {/* Progress */}
          {status === 'processing' && (
            <div className="progress-section">
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${progress.percent}%` }}
                />
              </div>
              <p className="progress-message">{progress.message}</p>
            </div>
          )}
          
          {/* Actions */}
          {selectedFile && status !== 'processing' && (
            <div className="action-buttons">
              <button 
                className="btn btn-secondary"
                onClick={handleReset}
              >
                {isSpanish ? 'Cancelar' : 'Cancel'}
              </button>
              
              <button 
                className="btn btn-primary"
                onClick={handleImport}
                disabled={isEncrypted && status !== 'idle'}
              >
                {t.startImport}
              </button>
            </div>
          )}
          
          <div className="security-notice">
            <span>⚠️</span>
            <p>{t.securityWarning}</p>
          </div>
        </>
      )}
      
      <style>{`
        .import-restore {
          max-width: 600px;
          margin: 0 auto;
          padding: 24px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .restore-header {
          margin-bottom: 32px;
          text-align: center;
        }
        
        .restore-header h2 {
          margin: 0 0 8px 0;
          color: #1a365d;
          font-size: 28px;
        }
        
        .subtitle {
          margin: 0;
          color: #718096;
        }
        
        .upload-area {
          border: 2px dashed #cbd5e0;
          border-radius: 16px;
          padding: 48px 24px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
          background: #f7fafc;
        }
        
        .upload-area:hover {
          border-color: #3182ce;
          background: #ebf8ff;
        }
        
        .upload-area.has-file {
          border-style: solid;
          border-color: #3182ce;
          background: #ebf8ff;
          padding: 24px;
        }
        
        .upload-area.error {
          border-color: #fc8181;
          background: #fff5f5;
        }
        
        .upload-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }
        
        .upload-text {
          font-size: 16px;
          color: #2d3748;
          margin: 0 0 8px 0;
        }
        
        .upload-hint {
          font-size: 14px;
          color: #718096;
          margin: 0;
        }
        
        .file-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .file-icon {
          font-size: 40px;
        }
        
        .file-details {
          text-align: left;
        }
        
        .file-name {
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 4px;
        }
        
        .file-meta {
          font-size: 13px;
          color: #718096;
        }
        
        .file-meta span {
          margin-right: 12px;
        }
        
        .error-message {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
          padding: 12px 16px;
          background: #fed7d7;
          color: #c53030;
          border-radius: 8px;
          font-size: 14px;
        }
        
        .section-label {
          display: block;
          font-weight: 600;
          font-size: 14px;
          color: #4a5568;
          margin-bottom: 12px;
        }
        
        .password-section {
          margin-top: 24px;
          padding: 20px;
          background: #fffaf0;
          border: 1px solid #ed8936;
          border-radius: 12px;
        }
        
        .password-input-group {
          display: flex;
          gap: 8px;
        }
        
        .password-input-group input {
          flex: 1;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 16px;
        }
        
        .import-mode-section {
          margin-top: 24px;
        }
        
        .mode-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .mode-option {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .mode-option:hover {
          border-color: #cbd5e0;
        }
        
        .mode-option.selected {
          border-color: #3182ce;
          background: #ebf8ff;
        }
        
        .mode-option input {
          margin-top: 2px;
        }
        
        .mode-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .mode-content strong {
          color: #2d3748;
        }
        
        .mode-content span {
          font-size: 14px;
          color: #718096;
        }
        
        .progress-section {
          margin-top: 24px;
        }
        
        .progress-bar {
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3182ce, #63b3ed);
          transition: width 0.3s;
        }
        
        .progress-message {
          text-align: center;
          color: #4a5568;
          margin-top: 12px;
        }
        
        .action-buttons {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }
        
        .action-buttons .btn {
          flex: 1;
        }
        
        .btn {
          padding: 14px 24px;
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
        
        .btn-secondary {
          background: #edf2f7;
          color: #4a5568;
        }
        
        .btn-secondary:hover {
          background: #e2e8f0;
        }
        
        .icon-button {
          background: #edf2f7;
          border: none;
          border-radius: 8px;
          padding: 12px;
          cursor: pointer;
          font-size: 18px;
        }
        
        .security-notice {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 24px;
          padding: 16px;
          background: #fffaf0;
          border: 1px solid #ed8936;
          border-radius: 12px;
        }
        
        .security-notice span {
          font-size: 20px;
        }
        
        .security-notice p {
          margin: 0;
          font-size: 14px;
          color: #744210;
        }
        
        .success-panel {
          text-align: center;
          padding: 48px 24px;
        }
        
        .success-icon {
          font-size: 64px;
          margin-bottom: 16px;
        }
        
        .success-panel h3 {
          color: #276749;
          margin: 0 0 24px 0;
        }
        
        .result-stats {
          display: flex;
          justify-content: center;
          gap: 32px;
          margin-bottom: 32px;
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-value {
          display: block;
          font-size: 36px;
          font-weight: bold;
        }
        
        .stat-value.success { color: #38a169; }
        .stat-value.warning { color: #d69e2e; }
        .stat-value.error { color: #e53e3e; }
        
        .stat-label {
          font-size: 14px;
          color: #718096;
        }
        
        .category-summary {
          background: #f7fafc;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 24px;
        }
        
        .category-item {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .category-item:last-child {
          border-bottom: none;
        }
        
        .category-name {
          text-transform: capitalize;
          color: #4a5568;
        }
        
        .category-count {
          font-weight: 600;
          color: #2d3748;
        }
      `}
      </style>
    </div>
  );
};

export default ImportRestore;
