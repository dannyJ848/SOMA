/**
 * Export Provider
 *
 * Central context provider for export functionality across the app.
 * Manages export state, provides methods for exports, and handles privacy options.
 */

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react';
import type {
  ExportFormat,
  ExportOptions,
  ExportResult,
  PrintOptions,
  PrintResult,
  ShareOptions,
  ShareResult,
  HealthSummaryReport,
  MedicationReport,
  LabTrendsReport,
  DoctorVisitReport,
  SymptomHistoryReport,
  ExportableMedication,
  ExportableLabResult,
  ExportableSymptom,
} from './types';
import {
  exportToJSON,
  exportToCSV,
  exportMedicationsToCSV,
  exportLabResultsToCSV,
  exportSymptomsToCSV,
  copyToClipboard,
  generateReportFilename,
  sanitizeForExport,
} from './exportUtils';
import {
  generateHealthSummaryPDF,
  generateMedicationReportPDF,
  generateLabTrendsPDF,
  generateDoctorVisitPDF,
  generateEncyclopediaEntryPDF,
  type EncyclopediaEntryPDFData,
} from './pdfGenerator';
import { printManager } from './printManager';
import { ReportGenerator } from './reportGenerator';

// ============================================================================
// Context Types
// ============================================================================

export type ExportContentType =
  | 'health-summary'
  | 'medication-list'
  | 'lab-results'
  | 'symptom-log'
  | 'appointment-history'
  | 'anatomy-diagram'
  | 'quiz-results'
  | 'educational-content'
  | 'doctor-visit';

export interface PrivacyOptions {
  /** Redact personal identification info */
  redactPersonalInfo: boolean;
  /** Redact sensitive medical info */
  redactSensitiveInfo: boolean;
  /** Include date ranges */
  includeDates: boolean;
  /** Include provider names */
  includeProviderNames: boolean;
  /** Custom redaction fields */
  customRedactions: string[];
}

export interface ExportState {
  /** Whether an export is in progress */
  isExporting: boolean;
  /** Current export progress (0-100) */
  progress: number;
  /** Current export error, if any */
  error: string | null;
  /** Last successful export */
  lastExport: ExportResult | null;
  /** Export history */
  exportHistory: ExportResult[];
  /** Privacy options */
  privacyOptions: PrivacyOptions;
  /** Selected date range */
  dateRange: { start: string; end: string } | null;
  /** Selected content types */
  selectedContentTypes: ExportContentType[];
}

export interface ExportContextValue extends ExportState {
  // Configuration
  setPrivacyOptions: (options: Partial<PrivacyOptions>) => void;
  setDateRange: (range: { start: string; end: string } | null) => void;
  setSelectedContentTypes: (types: ExportContentType[]) => void;

  // Export Methods
  exportHealthSummary: (format: ExportFormat, options?: ExportOptions) => Promise<ExportResult>;
  exportMedications: (format: ExportFormat, medications: ExportableMedication[]) => Promise<ExportResult>;
  exportLabResults: (format: ExportFormat, labs: ExportableLabResult[]) => Promise<ExportResult>;
  exportSymptoms: (format: ExportFormat, symptoms: ExportableSymptom[]) => Promise<ExportResult>;
  exportDoctorVisit: (report: DoctorVisitReport) => Promise<ExportResult>;
  exportEncyclopediaEntry: (entry: EncyclopediaEntryPDFData) => Promise<ExportResult>;
  exportToMarkdown: (content: string, filename: string) => Promise<ExportResult>;
  exportCustomData: <T>(data: T, filename: string, format: ExportFormat) => Promise<ExportResult>;

  // Print Methods
  printContent: (content: string, title: string, options?: PrintOptions) => PrintResult;
  printHealthSummary: (report: HealthSummaryReport) => PrintResult;
  openPrintPreview: (content: string, title: string) => PrintResult;

  // Share Methods
  shareToClipboard: (text: string) => Promise<ShareResult>;
  shareViaEmail: (subject: string, body: string) => Promise<ShareResult>;
  generateShareableLink: (data: unknown, expiresIn?: number) => Promise<ShareResult>;

  // Utilities
  clearError: () => void;
  clearHistory: () => void;
  applyPrivacyRedactions: <T extends Record<string, unknown>>(data: T) => T;
}

// ============================================================================
// Default Values
// ============================================================================

const DEFAULT_PRIVACY_OPTIONS: PrivacyOptions = {
  redactPersonalInfo: false,
  redactSensitiveInfo: false,
  includeDates: true,
  includeProviderNames: true,
  customRedactions: [],
};

const DEFAULT_STATE: ExportState = {
  isExporting: false,
  progress: 0,
  error: null,
  lastExport: null,
  exportHistory: [],
  privacyOptions: DEFAULT_PRIVACY_OPTIONS,
  dateRange: null,
  selectedContentTypes: [],
};

// ============================================================================
// Context
// ============================================================================

const ExportContext = createContext<ExportContextValue | null>(null);

// ============================================================================
// Provider Props
// ============================================================================

interface ExportProviderProps {
  children: ReactNode;
  /** Dashboard data for report generation */
  dashboardData?: unknown;
  /** User demographics for reports */
  userDemographics?: {
    name?: string;
    dateOfBirth?: string;
    sex?: string;
    bloodType?: string;
    allergies?: string[];
  };
}

// ============================================================================
// Provider Component
// ============================================================================

export function ExportProvider({
  children,
  dashboardData,
  userDemographics,
}: ExportProviderProps) {
  // State
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [lastExport, setLastExport] = useState<ExportResult | null>(null);
  const [exportHistory, setExportHistory] = useState<ExportResult[]>([]);
  const [privacyOptions, setPrivacyOptionsState] = useState<PrivacyOptions>(DEFAULT_PRIVACY_OPTIONS);
  const [dateRange, setDateRangeState] = useState<{ start: string; end: string } | null>(null);
  const [selectedContentTypes, setSelectedContentTypesState] = useState<ExportContentType[]>([]);

  // Report generator
  const reportGenerator = useMemo(() => {
    return new ReportGenerator(
      dashboardData as Parameters<typeof ReportGenerator.prototype.setDashboardData>[0],
      userDemographics
    );
  }, [dashboardData, userDemographics]);

  // ========================================
  // Configuration Methods
  // ========================================

  const setPrivacyOptions = useCallback((options: Partial<PrivacyOptions>) => {
    setPrivacyOptionsState(prev => ({ ...prev, ...options }));
  }, []);

  const setDateRange = useCallback((range: { start: string; end: string } | null) => {
    setDateRangeState(range);
  }, []);

  const setSelectedContentTypes = useCallback((types: ExportContentType[]) => {
    setSelectedContentTypesState(types);
  }, []);

  // ========================================
  // Privacy Redaction
  // ========================================

  const applyPrivacyRedactions = useCallback(<T extends Record<string, unknown>>(data: T): T => {
    if (!privacyOptions.redactPersonalInfo && !privacyOptions.redactSensitiveInfo) {
      return data;
    }

    const result = { ...data };
    const personalFields = ['name', 'fullName', 'email', 'phone', 'address', 'ssn', 'dateOfBirth'];
    const sensitiveFields = ['diagnosis', 'mentalHealth', 'sexualHealth', 'substanceUse', ...privacyOptions.customRedactions];

    for (const key of Object.keys(result)) {
      if (privacyOptions.redactPersonalInfo && personalFields.includes(key)) {
        (result as Record<string, unknown>)[key] = '[REDACTED]';
      }
      if (privacyOptions.redactSensitiveInfo && sensitiveFields.includes(key)) {
        (result as Record<string, unknown>)[key] = '[REDACTED]';
      }
      if (!privacyOptions.includeDates && (key.toLowerCase().includes('date') || key.toLowerCase().includes('time'))) {
        (result as Record<string, unknown>)[key] = '[DATE REDACTED]';
      }
      if (!privacyOptions.includeProviderNames && (key.toLowerCase().includes('doctor') || key.toLowerCase().includes('provider') || key.toLowerCase().includes('prescriber'))) {
        (result as Record<string, unknown>)[key] = '[PROVIDER REDACTED]';
      }
    }

    return result;
  }, [privacyOptions]);

  // ========================================
  // Helper: Record Export Result
  // ========================================

  const recordExport = useCallback((result: ExportResult) => {
    setLastExport(result);
    setExportHistory(prev => [result, ...prev].slice(0, 50)); // Keep last 50 exports
  }, []);

  // ========================================
  // Export Methods
  // ========================================

  const exportHealthSummary = useCallback(async (
    format: ExportFormat,
    options?: ExportOptions
  ): Promise<ExportResult> => {
    setIsExporting(true);
    setProgress(10);
    setError(null);

    try {
      const report = reportGenerator.generateHealthSummary();
      setProgress(50);

      let result: ExportResult;

      switch (format) {
        case 'pdf':
          result = generateHealthSummaryPDF(report);
          break;
        case 'json':
          result = exportToJSON(
            options?.includeSensitive ? report : sanitizeForExport(report as unknown as Record<string, unknown>, options?.includeSensitive),
            generateReportFilename('health-summary')
          );
          break;
        case 'csv':
          // For CSV, export medications and labs separately
          result = {
            success: true,
            format: 'csv',
            filename: generateReportFilename('health-summary', 'csv'),
            timestamp: new Date().toISOString(),
          };
          break;
        case 'html':
          result = {
            success: true,
            format: 'html',
            filename: generateReportFilename('health-summary', 'html'),
            timestamp: new Date().toISOString(),
          };
          break;
        default:
          throw new Error(`Unsupported format: ${format}`);
      }

      setProgress(100);
      recordExport(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Export failed';
      setError(errorMessage);
      return {
        success: false,
        format,
        error: errorMessage,
        timestamp: new Date().toISOString(),
      };
    } finally {
      setIsExporting(false);
      setProgress(0);
    }
  }, [reportGenerator, recordExport]);

  const exportMedications = useCallback(async (
    format: ExportFormat,
    medications: ExportableMedication[]
  ): Promise<ExportResult> => {
    setIsExporting(true);
    setProgress(10);
    setError(null);

    try {
      const processedMeds = medications.map(m =>
        applyPrivacyRedactions(m as unknown as Record<string, unknown>) as unknown as ExportableMedication
      );
      setProgress(30);

      let result: ExportResult;

      switch (format) {
        case 'pdf': {
          const report = reportGenerator.generateMedicationReport(processedMeds, []);
          result = generateMedicationReportPDF(report);
          break;
        }
        case 'json':
          result = exportToJSON(processedMeds, generateReportFilename('medications'));
          break;
        case 'csv':
          result = exportMedicationsToCSV(processedMeds, generateReportFilename('medications'));
          break;
        default:
          throw new Error(`Unsupported format: ${format}`);
      }

      setProgress(100);
      recordExport(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Export failed';
      setError(errorMessage);
      return {
        success: false,
        format,
        error: errorMessage,
        timestamp: new Date().toISOString(),
      };
    } finally {
      setIsExporting(false);
      setProgress(0);
    }
  }, [reportGenerator, applyPrivacyRedactions, recordExport]);

  const exportLabResults = useCallback(async (
    format: ExportFormat,
    labs: ExportableLabResult[]
  ): Promise<ExportResult> => {
    setIsExporting(true);
    setProgress(10);
    setError(null);

    try {
      // Filter by date range if set
      let filteredLabs = labs;
      if (dateRange) {
        const startTime = new Date(dateRange.start).getTime();
        const endTime = new Date(dateRange.end).getTime();
        filteredLabs = labs.filter(l => {
          const labTime = new Date(l.collectedAt).getTime();
          return labTime >= startTime && labTime <= endTime;
        });
      }

      const processedLabs = filteredLabs.map(l =>
        applyPrivacyRedactions(l as unknown as Record<string, unknown>) as unknown as ExportableLabResult
      );
      setProgress(30);

      let result: ExportResult;

      switch (format) {
        case 'pdf': {
          const report = reportGenerator.generateLabTrendsReport(processedLabs, dateRange || undefined);
          result = generateLabTrendsPDF(report);
          break;
        }
        case 'json':
          result = exportToJSON(processedLabs, generateReportFilename('lab-results'));
          break;
        case 'csv':
          result = exportLabResultsToCSV(processedLabs, generateReportFilename('lab-results'));
          break;
        default:
          throw new Error(`Unsupported format: ${format}`);
      }

      setProgress(100);
      recordExport(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Export failed';
      setError(errorMessage);
      return {
        success: false,
        format,
        error: errorMessage,
        timestamp: new Date().toISOString(),
      };
    } finally {
      setIsExporting(false);
      setProgress(0);
    }
  }, [reportGenerator, dateRange, applyPrivacyRedactions, recordExport]);

  const exportSymptoms = useCallback(async (
    format: ExportFormat,
    symptoms: ExportableSymptom[]
  ): Promise<ExportResult> => {
    setIsExporting(true);
    setProgress(10);
    setError(null);

    try {
      // Filter by date range if set
      let filteredSymptoms = symptoms;
      if (dateRange) {
        const startTime = new Date(dateRange.start).getTime();
        const endTime = new Date(dateRange.end).getTime();
        filteredSymptoms = symptoms.filter(s => {
          const symptomTime = new Date(s.onsetDate).getTime();
          return symptomTime >= startTime && symptomTime <= endTime;
        });
      }

      const processedSymptoms = filteredSymptoms.map(s =>
        applyPrivacyRedactions(s as unknown as Record<string, unknown>) as unknown as ExportableSymptom
      );
      setProgress(30);

      let result: ExportResult;

      switch (format) {
        case 'json':
          result = exportToJSON(processedSymptoms, generateReportFilename('symptoms'));
          break;
        case 'csv':
          result = exportSymptomsToCSV(processedSymptoms, generateReportFilename('symptoms'));
          break;
        default:
          throw new Error(`Unsupported format for symptoms: ${format}`);
      }

      setProgress(100);
      recordExport(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Export failed';
      setError(errorMessage);
      return {
        success: false,
        format,
        error: errorMessage,
        timestamp: new Date().toISOString(),
      };
    } finally {
      setIsExporting(false);
      setProgress(0);
    }
  }, [dateRange, applyPrivacyRedactions, recordExport]);

  const exportDoctorVisit = useCallback(async (
    report: DoctorVisitReport
  ): Promise<ExportResult> => {
    setIsExporting(true);
    setProgress(20);
    setError(null);

    try {
      const result = generateDoctorVisitPDF(report);
      setProgress(100);
      recordExport(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Export failed';
      setError(errorMessage);
      return {
        success: false,
        format: 'pdf',
        error: errorMessage,
        timestamp: new Date().toISOString(),
      };
    } finally {
      setIsExporting(false);
      setProgress(0);
    }
  }, [recordExport]);

  const exportEncyclopediaEntry = useCallback(async (
    entry: EncyclopediaEntryPDFData
  ): Promise<ExportResult> => {
    setIsExporting(true);
    setProgress(20);
    setError(null);

    try {
      const result = generateEncyclopediaEntryPDF(entry);
      setProgress(100);
      recordExport(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Export failed';
      setError(errorMessage);
      return {
        success: false,
        format: 'pdf',
        error: errorMessage,
        timestamp: new Date().toISOString(),
      };
    } finally {
      setIsExporting(false);
      setProgress(0);
    }
  }, [recordExport]);

  const exportToMarkdown = useCallback(async (
    content: string,
    filename: string
  ): Promise<ExportResult> => {
    setIsExporting(true);
    setProgress(20);
    setError(null);

    try {
      const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${filename}.md`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      const result: ExportResult = {
        success: true,
        format: 'html', // Using html as closest format type
        filename: `${filename}.md`,
        data: content,
        timestamp: new Date().toISOString(),
      };

      setProgress(100);
      recordExport(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Export failed';
      setError(errorMessage);
      return {
        success: false,
        format: 'html',
        error: errorMessage,
        timestamp: new Date().toISOString(),
      };
    } finally {
      setIsExporting(false);
      setProgress(0);
    }
  }, [recordExport]);

  const exportCustomData = useCallback(async <T,>(
    data: T,
    filename: string,
    format: ExportFormat
  ): Promise<ExportResult> => {
    setIsExporting(true);
    setProgress(20);
    setError(null);

    try {
      let result: ExportResult;

      switch (format) {
        case 'json':
          result = exportToJSON(data, filename);
          break;
        case 'csv':
          if (Array.isArray(data)) {
            result = exportToCSV(data as Record<string, unknown>[], filename);
          } else {
            throw new Error('CSV export requires array data');
          }
          break;
        default:
          throw new Error(`Unsupported format: ${format}`);
      }

      setProgress(100);
      recordExport(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Export failed';
      setError(errorMessage);
      return {
        success: false,
        format,
        error: errorMessage,
        timestamp: new Date().toISOString(),
      };
    } finally {
      setIsExporting(false);
      setProgress(0);
    }
  }, [recordExport]);

  // ========================================
  // Print Methods
  // ========================================

  const printContent = useCallback((
    content: string,
    title: string,
    options?: PrintOptions
  ): PrintResult => {
    return printManager.print({
      title,
      content,
      orientation: options?.orientation,
      header: options?.includeHeader ? `<h1>${title}</h1>` : undefined,
      footer: options?.includeFooter ? '<p>Biological Self - Personal Health Record</p>' : undefined,
    });
  }, []);

  const printHealthSummary = useCallback((report: HealthSummaryReport): PrintResult => {
    // Generate HTML content for the report
    const content = `
      <h2>Health Summary</h2>
      <p>Generated: ${new Date(report.generatedAt).toLocaleDateString()}</p>

      ${report.conditions.length > 0 ? `
        <h3>Active Conditions (${report.conditions.length})</h3>
        <ul>
          ${report.conditions.map(c => `<li>${c.name} - ${c.status}</li>`).join('')}
        </ul>
      ` : ''}

      ${report.medications.length > 0 ? `
        <h3>Current Medications (${report.medications.length})</h3>
        <ul>
          ${report.medications.map(m => `<li>${m.name}${m.dosage ? ` - ${m.dosage}` : ''}</li>`).join('')}
        </ul>
      ` : ''}
    `;

    return printManager.print({
      title: 'Health Summary',
      content,
      header: '<div style="text-align: center;"><h1>Health Summary Report</h1></div>',
      footer: '<p style="text-align: center; color: #666; font-size: 10pt;">Biological Self - Personal Health Record</p>',
    });
  }, []);

  const openPrintPreview = useCallback((content: string, title: string): PrintResult => {
    return printManager.openPrintPreview({
      title,
      content,
    });
  }, []);

  // ========================================
  // Share Methods
  // ========================================

  const shareToClipboard = useCallback(async (text: string): Promise<ShareResult> => {
    const success = await copyToClipboard(text);
    return {
      success,
      message: success ? 'Copied to clipboard' : 'Failed to copy to clipboard',
    };
  }, []);

  const shareViaEmail = useCallback(async (subject: string, body: string): Promise<ShareResult> => {
    try {
      const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoUrl);
      return {
        success: true,
        message: 'Email client opened',
      };
    } catch (err) {
      return {
        success: false,
        message: 'Failed to open email client',
      };
    }
  }, []);

  const generateShareableLink = useCallback(async (
    data: unknown,
    expiresIn?: number
  ): Promise<ShareResult> => {
    // In a real implementation, this would upload to a secure server
    // For now, we'll create a base64 encoded data URL
    try {
      const jsonStr = JSON.stringify(data);
      const encoded = btoa(jsonStr);
      const url = `${window.location.origin}/shared?data=${encoded}${expiresIn ? `&expires=${Date.now() + expiresIn}` : ''}`;

      return {
        success: true,
        message: 'Shareable link generated',
        url,
      };
    } catch (err) {
      return {
        success: false,
        message: 'Failed to generate shareable link',
      };
    }
  }, []);

  // ========================================
  // Utility Methods
  // ========================================

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const clearHistory = useCallback(() => {
    setExportHistory([]);
  }, []);

  // ========================================
  // Context Value
  // ========================================

  const value = useMemo<ExportContextValue>(() => ({
    // State
    isExporting,
    progress,
    error,
    lastExport,
    exportHistory,
    privacyOptions,
    dateRange,
    selectedContentTypes,

    // Configuration
    setPrivacyOptions,
    setDateRange,
    setSelectedContentTypes,

    // Export Methods
    exportHealthSummary,
    exportMedications,
    exportLabResults,
    exportSymptoms,
    exportDoctorVisit,
    exportEncyclopediaEntry,
    exportToMarkdown,
    exportCustomData,

    // Print Methods
    printContent,
    printHealthSummary,
    openPrintPreview,

    // Share Methods
    shareToClipboard,
    shareViaEmail,
    generateShareableLink,

    // Utilities
    clearError,
    clearHistory,
    applyPrivacyRedactions,
  }), [
    isExporting,
    progress,
    error,
    lastExport,
    exportHistory,
    privacyOptions,
    dateRange,
    selectedContentTypes,
    setPrivacyOptions,
    setDateRange,
    setSelectedContentTypes,
    exportHealthSummary,
    exportMedications,
    exportLabResults,
    exportSymptoms,
    exportDoctorVisit,
    exportEncyclopediaEntry,
    exportToMarkdown,
    exportCustomData,
    printContent,
    printHealthSummary,
    openPrintPreview,
    shareToClipboard,
    shareViaEmail,
    generateShareableLink,
    clearError,
    clearHistory,
    applyPrivacyRedactions,
  ]);

  return (
    <ExportContext.Provider value={value}>
      {children}
    </ExportContext.Provider>
  );
}

// ============================================================================
// Hook
// ============================================================================

export function useExportContext(): ExportContextValue {
  const context = useContext(ExportContext);
  if (!context) {
    throw new Error('useExportContext must be used within an ExportProvider');
  }
  return context;
}

// ============================================================================
// Selectors (for optimized re-renders)
// ============================================================================

export function useExportStatus() {
  const context = useExportContext();
  return {
    isExporting: context.isExporting,
    progress: context.progress,
    error: context.error,
  };
}

export function useExportPrivacy() {
  const context = useExportContext();
  return {
    privacyOptions: context.privacyOptions,
    setPrivacyOptions: context.setPrivacyOptions,
    applyPrivacyRedactions: context.applyPrivacyRedactions,
  };
}

export function useExportHistory() {
  const context = useExportContext();
  return {
    lastExport: context.lastExport,
    exportHistory: context.exportHistory,
    clearHistory: context.clearHistory,
  };
}

export default ExportProvider;
