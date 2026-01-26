/**
 * Export Utilities
 *
 * Core utility functions for data transformation, formatting,
 * and export file generation.
 */

import type {
  ExportFormat,
  ExportOptions,
  ExportResult,
  ExportableCondition,
  ExportableMedication,
  ExportableLabResult,
  ExportableSymptom,
  ExportableVitals,
  HealthSummaryReport,
  SymptomHistoryReport,
  MedicationReport,
  LabTrendsReport,
  DoctorVisitReport,
} from './types';

// ============================================
// Date Formatting
// ============================================

export function formatDate(dateStr: string, format: 'short' | 'long' | 'iso' = 'short'): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;

  switch (format) {
    case 'iso':
      return date.toISOString().split('T')[0];
    case 'long':
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    case 'short':
    default:
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
  }
}

export function formatDateTime(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

// ============================================
// JSON Export
// ============================================

export function exportToJSON<T>(data: T, filename: string): ExportResult {
  try {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });

    triggerDownload(blob, `${filename}.json`);

    return {
      success: true,
      format: 'json',
      filename: `${filename}.json`,
      data: jsonString,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      format: 'json',
      error: error instanceof Error ? error.message : 'Failed to export JSON',
      timestamp: new Date().toISOString(),
    };
  }
}

// ============================================
// CSV Export
// ============================================

export function exportToCSV<T extends Record<string, unknown>>(
  data: T[],
  filename: string,
  columns?: { key: keyof T; header: string }[]
): ExportResult {
  try {
    if (data.length === 0) {
      return {
        success: false,
        format: 'csv',
        error: 'No data to export',
        timestamp: new Date().toISOString(),
      };
    }

    const cols = columns || Object.keys(data[0]).map(key => ({
      key: key as keyof T,
      header: formatColumnHeader(key),
    }));

    // Build CSV header
    const headers = cols.map(c => escapeCSV(c.header)).join(',');

    // Build CSV rows
    const rows = data.map(item =>
      cols.map(c => {
        const value = item[c.key];
        return escapeCSV(formatCSVValue(value));
      }).join(',')
    );

    const csvContent = [headers, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    triggerDownload(blob, `${filename}.csv`);

    return {
      success: true,
      format: 'csv',
      filename: `${filename}.csv`,
      data: csvContent,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      format: 'csv',
      error: error instanceof Error ? error.message : 'Failed to export CSV',
      timestamp: new Date().toISOString(),
    };
  }
}

function escapeCSV(value: string): string {
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function formatCSVValue(value: unknown): string {
  if (value === null || value === undefined) return '';
  if (typeof value === 'object') {
    if (Array.isArray(value)) return value.join('; ');
    return JSON.stringify(value);
  }
  return String(value);
}

function formatColumnHeader(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]/g, ' ')
    .replace(/^./, s => s.toUpperCase())
    .trim();
}

// ============================================
// CSV Export for Specific Data Types
// ============================================

export function exportMedicationsToCSV(medications: ExportableMedication[], filename: string): ExportResult {
  return exportToCSV(medications, filename, [
    { key: 'name', header: 'Medication Name' },
    { key: 'genericName', header: 'Generic Name' },
    { key: 'dosage', header: 'Dosage' },
    { key: 'frequency', header: 'Frequency' },
    { key: 'startDate', header: 'Start Date' },
    { key: 'prescribedFor', header: 'Prescribed For' },
    { key: 'prescriber', header: 'Prescriber' },
    { key: 'instructions', header: 'Instructions' },
  ]);
}

export function exportLabResultsToCSV(labs: ExportableLabResult[], filename: string): ExportResult {
  const formattedLabs = labs.map(lab => ({
    ...lab,
    collectedAt: formatDate(lab.collectedAt),
    referenceRange: lab.referenceRange
      ? `${lab.referenceRange.low}-${lab.referenceRange.high}`
      : '',
  }));

  return exportToCSV(formattedLabs as unknown as Record<string, unknown>[], filename, [
    { key: 'testName' as keyof typeof formattedLabs[0], header: 'Test Name' },
    { key: 'value' as keyof typeof formattedLabs[0], header: 'Value' },
    { key: 'unit' as keyof typeof formattedLabs[0], header: 'Unit' },
    { key: 'referenceRange' as keyof typeof formattedLabs[0], header: 'Reference Range' },
    { key: 'status' as keyof typeof formattedLabs[0], header: 'Status' },
    { key: 'collectedAt' as keyof typeof formattedLabs[0], header: 'Date Collected' },
    { key: 'orderedBy' as keyof typeof formattedLabs[0], header: 'Ordered By' },
  ]);
}

export function exportSymptomsToCSV(symptoms: ExportableSymptom[], filename: string): ExportResult {
  const formattedSymptoms = symptoms.map(s => ({
    ...s,
    onsetDate: formatDate(s.onsetDate),
    triggers: s.triggers?.join('; ') || '',
    relievingFactors: s.relievingFactors?.join('; ') || '',
  }));

  return exportToCSV(formattedSymptoms as unknown as Record<string, unknown>[], filename, [
    { key: 'description' as keyof typeof formattedSymptoms[0], header: 'Description' },
    { key: 'severity' as keyof typeof formattedSymptoms[0], header: 'Severity (1-10)' },
    { key: 'location' as keyof typeof formattedSymptoms[0], header: 'Location' },
    { key: 'onsetDate' as keyof typeof formattedSymptoms[0], header: 'Onset Date' },
    { key: 'duration' as keyof typeof formattedSymptoms[0], header: 'Duration' },
    { key: 'triggers' as keyof typeof formattedSymptoms[0], header: 'Triggers' },
    { key: 'relievingFactors' as keyof typeof formattedSymptoms[0], header: 'Relieving Factors' },
  ]);
}

// ============================================
// File Download Trigger
// ============================================

export function triggerDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// ============================================
// Copy to Clipboard
// ============================================

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  }
}

// ============================================
// Text Formatting for Sharing
// ============================================

export function formatMedicationListForSharing(medications: ExportableMedication[]): string {
  const lines = ['CURRENT MEDICATIONS', '='.repeat(40), ''];

  medications.forEach((med, index) => {
    lines.push(`${index + 1}. ${med.name}`);
    if (med.genericName) lines.push(`   Generic: ${med.genericName}`);
    if (med.dosage) lines.push(`   Dosage: ${med.dosage}`);
    if (med.frequency) lines.push(`   Frequency: ${med.frequency}`);
    if (med.prescribedFor) lines.push(`   For: ${med.prescribedFor}`);
    if (med.instructions) lines.push(`   Instructions: ${med.instructions}`);
    lines.push('');
  });

  lines.push(`Generated: ${formatDateTime(new Date().toISOString())}`);
  return lines.join('\n');
}

export function formatConditionListForSharing(conditions: ExportableCondition[]): string {
  const lines = ['HEALTH CONDITIONS', '='.repeat(40), ''];

  conditions.forEach((cond, index) => {
    const statusEmoji = cond.status === 'active' ? '[ACTIVE]' :
                        cond.status === 'managed' ? '[MANAGED]' : '[RESOLVED]';
    lines.push(`${index + 1}. ${cond.name} ${statusEmoji}`);
    if (cond.severity) lines.push(`   Severity: ${cond.severity}`);
    if (cond.diagnosedDate) lines.push(`   Diagnosed: ${formatDate(cond.diagnosedDate)}`);
    if (cond.treatments && cond.treatments.length > 0) {
      lines.push(`   Treatments: ${cond.treatments.join(', ')}`);
    }
    lines.push('');
  });

  lines.push(`Generated: ${formatDateTime(new Date().toISOString())}`);
  return lines.join('\n');
}

export function formatLabResultsForSharing(labs: ExportableLabResult[]): string {
  const lines = ['RECENT LAB RESULTS', '='.repeat(40), ''];

  labs.forEach(lab => {
    const statusIndicator = lab.status === 'normal' ? '' :
                           lab.status === 'high' ? ' [HIGH]' :
                           lab.status === 'low' ? ' [LOW]' :
                           lab.status === 'critical' ? ' [CRITICAL]' : '';

    lines.push(`${lab.testName}${statusIndicator}`);
    lines.push(`  Value: ${lab.value}${lab.unit ? ` ${lab.unit}` : ''}`);
    if (lab.referenceRange) {
      lines.push(`  Reference: ${lab.referenceRange.low}-${lab.referenceRange.high}${lab.unit ? ` ${lab.unit}` : ''}`);
    }
    lines.push(`  Date: ${formatDate(lab.collectedAt)}`);
    lines.push('');
  });

  lines.push(`Generated: ${formatDateTime(new Date().toISOString())}`);
  return lines.join('\n');
}

// ============================================
// Data Validation
// ============================================

export function sanitizeForExport<T extends Record<string, unknown>>(data: T, includeSensitive: boolean = false): T {
  const sensitiveFields = ['ssn', 'socialSecurityNumber', 'password', 'pin', 'creditCard'];

  if (includeSensitive) return data;

  const sanitized = { ...data };
  for (const field of sensitiveFields) {
    if (field in sanitized) {
      delete sanitized[field];
    }
  }
  return sanitized;
}

// ============================================
// Report Filename Generation
// ============================================

export function generateReportFilename(reportType: string, extension: string = ''): string {
  const date = new Date().toISOString().split('T')[0];
  const sanitizedType = reportType.replace(/[^a-zA-Z0-9-]/g, '-');
  const ext = extension ? `.${extension.replace(/^\./, '')}` : '';
  return `biological-self-${sanitizedType}-${date}${ext}`;
}

// ============================================
// Data Aggregation Utilities
// ============================================

export function calculateLabTrends(labs: ExportableLabResult[]): Array<{
  testName: string;
  trend: 'improving' | 'stable' | 'worsening';
  currentValue: number | string;
  previousValue?: number | string;
  percentChange?: number;
}> {
  // Group labs by test name
  const grouped = labs.reduce((acc, lab) => {
    if (!acc[lab.testName]) {
      acc[lab.testName] = [];
    }
    acc[lab.testName].push(lab);
    return acc;
  }, {} as Record<string, ExportableLabResult[]>);

  return Object.entries(grouped).map(([testName, results]) => {
    // Sort by date descending
    const sorted = results.sort((a, b) =>
      new Date(b.collectedAt).getTime() - new Date(a.collectedAt).getTime()
    );

    const current = sorted[0];
    const previous = sorted[1];

    if (!previous || typeof current.value !== 'number' || typeof previous.value !== 'number') {
      return {
        testName,
        trend: 'stable' as const,
        currentValue: current.value,
        previousValue: previous?.value,
      };
    }

    const percentChange = ((current.value - previous.value) / previous.value) * 100;

    // Determine trend based on whether value should be high or low
    // This is simplified - in reality, we'd need to know if high or low is better
    let trend: 'improving' | 'stable' | 'worsening';
    if (Math.abs(percentChange) < 5) {
      trend = 'stable';
    } else if (current.status === 'normal' && previous.status !== 'normal') {
      trend = 'improving';
    } else if (current.status !== 'normal' && previous.status === 'normal') {
      trend = 'worsening';
    } else {
      trend = 'stable';
    }

    return {
      testName,
      trend,
      currentValue: current.value,
      previousValue: previous.value,
      percentChange: Math.round(percentChange * 10) / 10,
    };
  });
}

export function calculateSymptomSummary(symptoms: ExportableSymptom[]): {
  totalSymptoms: number;
  averageSeverity: number;
  mostCommonLocations: string[];
  frequencyTrend: 'increasing' | 'stable' | 'decreasing';
} {
  const totalSymptoms = symptoms.length;

  const averageSeverity = totalSymptoms > 0
    ? symptoms.reduce((sum, s) => sum + s.severity, 0) / totalSymptoms
    : 0;

  // Count locations
  const locationCounts: Record<string, number> = {};
  symptoms.forEach(s => {
    if (s.location) {
      locationCounts[s.location] = (locationCounts[s.location] || 0) + 1;
    }
  });

  const mostCommonLocations = Object.entries(locationCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([loc]) => loc);

  // Calculate frequency trend (compare recent vs older)
  const sorted = [...symptoms].sort((a, b) =>
    new Date(b.onsetDate).getTime() - new Date(a.onsetDate).getTime()
  );

  const midpoint = Math.floor(sorted.length / 2);
  const recentCount = sorted.slice(0, midpoint).length;
  const olderCount = sorted.slice(midpoint).length;

  let frequencyTrend: 'increasing' | 'stable' | 'decreasing';
  if (recentCount > olderCount * 1.2) {
    frequencyTrend = 'increasing';
  } else if (recentCount < olderCount * 0.8) {
    frequencyTrend = 'decreasing';
  } else {
    frequencyTrend = 'stable';
  }

  return {
    totalSymptoms,
    averageSeverity: Math.round(averageSeverity * 10) / 10,
    mostCommonLocations,
    frequencyTrend,
  };
}
