/**
 * Export & Portability Module
 * 
 * Data export and portability features for Biological Self.
 * Enables patients to export their complete health data in multiple formats
 * with optional encryption for secure backups.
 * 
 * @module core/export
 */

// Import types for local use
import type {
  ExportFormat,
  ExportDataCategory,
  ExportOptions,
  ExportResult,
} from './types';

// Re-export Types
export type {
  ExportFormat,
  ExportDataCategory,
  ExportOptions,
  ExportProgress,
  ExportProgressCallback,
  ExportResult,
  ExportSummary,
  ExportStage,
  DateRangeFilter,
  PatientProfile,
  LabResult,
  Medication,
  Condition,
  Procedure,
  Allergy,
  Immunization,
  VitalSigns,
  ImagingStudy,
  ClinicalNote,
  CompleteHealthRecord,
  PDFReportOptions,
  PDFSection,
  PDFChartData,
  EncryptionOptions,
  EncryptedExport,
  ImportOptions,
  ImportProgress,
  ImportResult,
  CSVExportConfig,
  FHIRResourceType,
  FHIRBundle,
  FHIRBundleEntry,
} from './types';

// Export Engine
export {
  exportHealthData,
  createPartialExport,
  ExportError,
  type DataFetcher,
} from './exporter';

// PDF Generator
export {
  generatePDFReport,
  TEMPLATES,
} from './pdf-generator';

// Encryption
export {
  encryptData,
  decryptData,
  createEncryptedBackup,
  restoreFromBackup,
  verifyBackupPassword,
  checkPasswordStrength,
  generateSecurePassword,
  ExportEncryptionError,
  DEFAULT_ITERATIONS,
  VERSION as ENCRYPTION_VERSION,
  type PasswordStrength,
} from './encryption';

// ============================================================================
// Constants
// ============================================================================

/** Available export formats */
export const EXPORT_FORMATS: ExportFormat[] = ['json', 'pdf', 'csv', 'fhir'];

/** Available data categories for export */
export const EXPORT_CATEGORIES: ExportDataCategory[] = [
  'all',
  'profile',
  'labs',
  'medications',
  'conditions',
  'procedures',
  'timeline',
  'imaging',
  'vitals',
  'allergies',
  'immunizations',
  'appointments',
  'notes',
];

/** PDF template options */
export const PDF_TEMPLATES = [
  { id: 'full', nameEs: 'Completo', nameEn: 'Full' },
  { id: 'summary', nameEs: 'Resumen', nameEn: 'Summary' },
  { id: 'provider', nameEs: 'Para Proveedor', nameEn: 'For Provider' },
  { id: 'emergency', nameEs: 'Tarjeta de Emergencia', nameEn: 'Emergency Card' },
] as const;

/** FHIR bundle types */
export const FHIR_BUNDLE_TYPES = [
  { id: 'collection', nameEs: 'Colección', nameEn: 'Collection' },
  { id: 'document', nameEs: 'Documento', nameEn: 'Document' },
  { id: 'transaction', nameEs: 'Transacción', nameEn: 'Transaction' },
] as const;

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get export format display name
 */
export function getExportFormatName(format: ExportFormat, language: 'es' | 'en' = 'es'): string {
  const names: Record<ExportFormat, { es: string; en: string }> = {
    json: { es: 'JSON (Datos Completos)', en: 'JSON (Complete Data)' },
    pdf: { es: 'PDF (Reporte Profesional)', en: 'PDF (Professional Report)' },
    csv: { es: 'CSV (Excel)', en: 'CSV (Excel)' },
    fhir: { es: 'FHIR R4 (Interoperabilidad)', en: 'FHIR R4 (Interoperability)' },
  };
  return names[format][language];
}

/**
 * Get category display name
 */
export function getCategoryName(category: ExportDataCategory, language: 'es' | 'en' = 'es'): string {
  const names: Record<ExportDataCategory, { es: string; en: string }> = {
    all: { es: 'Todos los Datos', en: 'All Data' },
    profile: { es: 'Perfil Personal', en: 'Personal Profile' },
    labs: { es: 'Laboratorios', en: 'Laboratory Results' },
    medications: { es: 'Medicamentos', en: 'Medications' },
    conditions: { es: 'Condiciones Médicas', en: 'Medical Conditions' },
    procedures: { es: 'Procedimientos', en: 'Procedures' },
    timeline: { es: 'Línea de Tiempo', en: 'Timeline' },
    imaging: { es: 'Imágenes Médicas', en: 'Medical Imaging' },
    vitals: { es: 'Signos Vitales', en: 'Vital Signs' },
    allergies: { es: 'Alergias', en: 'Allergies' },
    immunizations: { es: 'Vacunas', en: 'Immunizations' },
    appointments: { es: 'Citas', en: 'Appointments' },
    notes: { es: 'Notas Clínicas', en: 'Clinical Notes' },
  };
  return names[category][language];
}

/**
 * Get MIME type for export format
 */
export function getMimeTypeForFormat(format: ExportFormat): string {
  const mimeTypes: Record<ExportFormat, string> = {
    json: 'application/json',
    pdf: 'text/html',
    csv: 'text/csv',
    fhir: 'application/fhir+json',
  };
  return mimeTypes[format];
}

/**
 * Get file extension for export format
 */
export function getFileExtension(format: ExportFormat): string {
  const extensions: Record<ExportFormat, string> = {
    json: 'json',
    pdf: 'html',
    csv: 'csv',
    fhir: 'json',
  };
  return extensions[format];
}

/**
 * Validate export options
 */
export function validateExportOptions(options: ExportOptions): string[] {
  const errors: string[] = [];
  
  if (!options.format) {
    errors.push('El formato de exportación es requerido');
  }
  
  if (!options.categories || options.categories.length === 0) {
    errors.push('Debe seleccionar al menos una categoría');
  }
  
  if (options.dateRange) {
    if (options.dateRange.startDate > options.dateRange.endDate) {
      errors.push('La fecha de inicio debe ser anterior a la fecha final');
    }
  }
  
  if (options.encrypt && !options.password) {
    errors.push('Se requiere contraseña para encriptar el archivo');
  }
  
  if (options.password && options.password.length < 8) {
    errors.push('La contraseña debe tener al menos 8 caracteres');
  }
  
  return errors;
}

/**
 * Estimate export size
 */
export function estimateExportSize(
  categoryCount: number,
  recordCount: number,
  format: ExportFormat
): string {
  // Rough estimates based on average record sizes
  const bytesPerRecord: Record<ExportFormat, number> = {
    json: 500,
    pdf: 2000,
    csv: 300,
    fhir: 800,
  };
  
  const estimatedBytes = recordCount * bytesPerRecord[format];
  
  if (estimatedBytes < 1024) {
    return `${estimatedBytes} B`;
  } else if (estimatedBytes < 1024 * 1024) {
    return `${(estimatedBytes / 1024).toFixed(1)} KB`;
  } else {
    return `${(estimatedBytes / (1024 * 1024)).toFixed(1)} MB`;
  }
}

/**
 * Create default export options
 */
export function createDefaultExportOptions(): ExportOptions {
  return {
    format: 'json',
    categories: ['all'],
    language: 'es',
    pdfTemplate: 'full',
    includeCharts: true,
    fhirBundleType: 'collection',
    encrypt: false,
  };
}

/**
 * Sanitize filename for safe file system usage
 */
export function sanitizeFilename(filename: string): string {
  return filename
    .replace(/[^a-zA-Z0-9.-]/g, '_')
    .replace(/_{2,}/g, '_')
    .substring(0, 100);
}

/**
 * Download export result to device
 */
export function downloadExport(result: ExportResult): void {
  const blob = new Blob([result.content], { type: result.mimeType });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = result.filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
}

/**
 * Share export using Web Share API if available
 */
export async function shareExport(result: ExportResult): Promise<boolean> {
  if (!navigator.share) {
    return false;
  }
  
  try {
    const blob = new Blob([result.content], { type: result.mimeType });
    const file = new File([blob], result.filename, { type: result.mimeType });
    
    await navigator.share({
      files: [file],
      title: 'Health Data Export',
      text: 'Exported from Biological Self',
    });
    
    return true;
  } catch {
    return false;
  }
}

// ============================================================================
// Import/Restore Helpers
// ============================================================================

/**
 * Detect export format from content
 */
export function detectExportFormat(content: string): ExportFormat | null {
  try {
    const parsed = JSON.parse(content);
    
    // Check for FHIR Bundle
    if (parsed.resourceType === 'Bundle' && parsed.entry) {
      return 'fhir';
    }
    
    // Check for encrypted export
    if (parsed.encrypted && parsed.ciphertext) {
      return 'json';
    }
    
    // Check for our export format
    if (parsed.exportMetadata && parsed.labs !== undefined) {
      return 'json';
    }
    
    return 'json';
  } catch {
    // Check for CSV
    if (content.includes(',') && content.split('\n')[0]?.includes(',')) {
      return 'csv';
    }
    
    // Check for HTML/PDF
    if (content.includes('<!DOCTYPE html>') || content.includes('<html>')) {
      return 'pdf';
    }
    
    return null;
  }
}

/**
 * Check if file is an encrypted backup
 */
export function isEncryptedBackup(content: string): boolean {
  try {
    const parsed = JSON.parse(content);
    return parsed.encrypted === true && !!parsed.ciphertext;
  } catch {
    return false;
  }
}
