/**
 * PDF Generator
 *
 * Generates professional PDF reports for health data using HTML/CSS
 * templates and browser print functionality.
 */

import type {
  ExportResult,
  HealthSummaryReport,
  SymptomHistoryReport,
  MedicationReport,
  LabTrendsReport,
  ConditionSummaryReport,
  DoctorVisitReport,
  ExportableMedication,
  ExportableLabResult,
  ExportableCondition,
  ExportableSymptom,
} from './types';
import { formatDate, formatDateTime, triggerDownload } from './exportUtils';

// ============================================
// PDF Generation via HTML
// ============================================

export interface PDFGeneratorOptions {
  title: string;
  orientation?: 'portrait' | 'landscape';
  showBranding?: boolean;
  includeTimestamp?: boolean;
}

/**
 * Generate PDF by creating a printable HTML document and triggering browser print
 */
export function generatePDFFromHTML(
  htmlContent: string,
  options: PDFGeneratorOptions
): ExportResult {
  try {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      return {
        success: false,
        format: 'pdf',
        error: 'Failed to open print window. Please allow popups.',
        timestamp: new Date().toISOString(),
      };
    }

    const fullHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${options.title}</title>
  <style>
    ${getPrintStyles(options)}
  </style>
</head>
<body>
  ${htmlContent}
  ${options.includeTimestamp ? `<div class="timestamp">Generated: ${formatDateTime(new Date().toISOString())}</div>` : ''}
</body>
</html>
    `;

    printWindow.document.write(fullHTML);
    printWindow.document.close();

    // Trigger print after content loads
    printWindow.onload = () => {
      printWindow.focus();
      printWindow.print();
    };

    return {
      success: true,
      format: 'pdf',
      filename: `${options.title.replace(/\s+/g, '-').toLowerCase()}.pdf`,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      format: 'pdf',
      error: error instanceof Error ? error.message : 'Failed to generate PDF',
      timestamp: new Date().toISOString(),
    };
  }
}

// ============================================
// Print Styles
// ============================================

function getPrintStyles(options: PDFGeneratorOptions): string {
  return `
    @page {
      size: ${options.orientation === 'landscape' ? 'landscape' : 'portrait'};
      margin: 0.75in;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      font-size: 11pt;
      line-height: 1.5;
      color: #1a1a1a;
      background: white;
    }

    /* Header Styles */
    .report-header {
      border-bottom: 2px solid #3b82f6;
      padding-bottom: 16px;
      margin-bottom: 24px;
    }

    .report-title {
      font-size: 24pt;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 4px;
    }

    .report-subtitle {
      font-size: 12pt;
      color: #6b7280;
    }

    .branding {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }

    .logo {
      font-size: 14pt;
      font-weight: 600;
      color: #3b82f6;
    }

    .report-date {
      font-size: 10pt;
      color: #6b7280;
    }

    /* Section Styles */
    .section {
      margin-bottom: 24px;
      page-break-inside: avoid;
    }

    .section-title {
      font-size: 14pt;
      font-weight: 600;
      color: #1a1a1a;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 8px;
      margin-bottom: 12px;
    }

    .section-subtitle {
      font-size: 11pt;
      font-weight: 500;
      color: #374151;
      margin-bottom: 8px;
    }

    /* Table Styles */
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 16px;
      font-size: 10pt;
    }

    th {
      background: #f3f4f6;
      font-weight: 600;
      text-align: left;
      padding: 8px 12px;
      border: 1px solid #e5e7eb;
    }

    td {
      padding: 8px 12px;
      border: 1px solid #e5e7eb;
      vertical-align: top;
    }

    tr:nth-child(even) {
      background: #f9fafb;
    }

    /* Status Badges */
    .badge {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 9pt;
      font-weight: 500;
    }

    .badge-active { background: #fef3c7; color: #92400e; }
    .badge-managed { background: #d1fae5; color: #065f46; }
    .badge-resolved { background: #e5e7eb; color: #374151; }
    .badge-normal { background: #d1fae5; color: #065f46; }
    .badge-high { background: #fee2e2; color: #991b1b; }
    .badge-low { background: #dbeafe; color: #1e40af; }
    .badge-critical { background: #fecaca; color: #7f1d1d; }

    /* Card Grid */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    .card {
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 12px;
      background: #fafafa;
    }

    .card-title {
      font-weight: 600;
      margin-bottom: 4px;
    }

    .card-value {
      font-size: 18pt;
      font-weight: 700;
      color: #3b82f6;
    }

    .card-label {
      font-size: 9pt;
      color: #6b7280;
    }

    /* Vitals Grid */
    .vitals-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-bottom: 16px;
    }

    .vital-item {
      text-align: center;
      padding: 12px;
      background: #f9fafb;
      border-radius: 8px;
    }

    .vital-value {
      font-size: 20pt;
      font-weight: 700;
      color: #1a1a1a;
    }

    .vital-unit {
      font-size: 10pt;
      color: #6b7280;
    }

    .vital-label {
      font-size: 9pt;
      color: #6b7280;
      margin-top: 4px;
    }

    /* List Styles */
    .item-list {
      list-style: none;
    }

    .item-list li {
      padding: 8px 0;
      border-bottom: 1px solid #f3f4f6;
    }

    .item-list li:last-child {
      border-bottom: none;
    }

    .item-primary {
      font-weight: 500;
    }

    .item-secondary {
      font-size: 10pt;
      color: #6b7280;
    }

    /* Trend Indicators */
    .trend-up { color: #ef4444; }
    .trend-down { color: #22c55e; }
    .trend-stable { color: #6b7280; }

    /* Notes */
    .notes-box {
      background: #fffbeb;
      border: 1px solid #fcd34d;
      border-radius: 8px;
      padding: 12px;
      margin-top: 16px;
    }

    .notes-title {
      font-weight: 600;
      color: #92400e;
      margin-bottom: 8px;
    }

    /* Warning Box */
    .warning-box {
      background: #fef2f2;
      border: 1px solid #fca5a5;
      border-radius: 8px;
      padding: 12px;
      margin-bottom: 16px;
    }

    .warning-title {
      font-weight: 600;
      color: #991b1b;
      margin-bottom: 4px;
    }

    /* Footer */
    .report-footer {
      margin-top: 32px;
      padding-top: 16px;
      border-top: 1px solid #e5e7eb;
      font-size: 9pt;
      color: #6b7280;
    }

    .disclaimer {
      font-style: italic;
      margin-top: 8px;
    }

    .timestamp {
      text-align: right;
      font-size: 9pt;
      color: #9ca3af;
      margin-top: 24px;
    }

    /* Page Breaks */
    .page-break {
      page-break-before: always;
    }

    .no-break {
      page-break-inside: avoid;
    }

    /* Print-specific */
    @media print {
      body {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    }
  `;
}

// ============================================
// Health Summary Report PDF
// ============================================

export function generateHealthSummaryPDF(report: HealthSummaryReport): ExportResult {
  const html = `
    <div class="report-header">
      <div class="branding">
        <span class="logo">Biological Self</span>
        <span class="report-date">${formatDate(report.generatedAt, 'long')}</span>
      </div>
      <h1 class="report-title">Health Summary Report</h1>
      <p class="report-subtitle">Comprehensive overview of your health status</p>
    </div>

    ${report.patientInfo ? `
    <div class="section no-break">
      <h2 class="section-title">Patient Information</h2>
      <div class="card-grid">
        ${report.patientInfo.name ? `<div><strong>Name:</strong> ${report.patientInfo.name}</div>` : ''}
        ${report.patientInfo.dateOfBirth ? `<div><strong>Date of Birth:</strong> ${formatDate(report.patientInfo.dateOfBirth)}</div>` : ''}
        ${report.patientInfo.age ? `<div><strong>Age:</strong> ${report.patientInfo.age} years</div>` : ''}
        ${report.patientInfo.sex ? `<div><strong>Sex:</strong> ${report.patientInfo.sex}</div>` : ''}
        ${report.patientInfo.bloodType ? `<div><strong>Blood Type:</strong> ${report.patientInfo.bloodType}</div>` : ''}
      </div>
    </div>
    ` : ''}

    <div class="section">
      <h2 class="section-title">Current Vitals</h2>
      <div class="vitals-grid">
        ${report.vitals.restingHeartRate ? `
        <div class="vital-item">
          <div class="vital-value">${Math.round(report.vitals.restingHeartRate)}</div>
          <div class="vital-unit">bpm</div>
          <div class="vital-label">Resting HR</div>
        </div>
        ` : ''}
        ${report.vitals.hrv ? `
        <div class="vital-item">
          <div class="vital-value">${Math.round(report.vitals.hrv)}</div>
          <div class="vital-unit">ms</div>
          <div class="vital-label">HRV</div>
        </div>
        ` : ''}
        ${report.vitals.bloodPressure ? `
        <div class="vital-item">
          <div class="vital-value">${report.vitals.bloodPressure.systolic}/${report.vitals.bloodPressure.diastolic}</div>
          <div class="vital-unit">mmHg</div>
          <div class="vital-label">Blood Pressure</div>
        </div>
        ` : ''}
        ${report.vitals.sleepHours ? `
        <div class="vital-item">
          <div class="vital-value">${report.vitals.sleepHours}</div>
          <div class="vital-unit">hrs</div>
          <div class="vital-label">Sleep</div>
        </div>
        ` : ''}
        ${report.vitals.recoveryScore ? `
        <div class="vital-item">
          <div class="vital-value">${Math.round(report.vitals.recoveryScore)}</div>
          <div class="vital-unit">%</div>
          <div class="vital-label">Recovery</div>
        </div>
        ` : ''}
        ${report.vitals.steps ? `
        <div class="vital-item">
          <div class="vital-value">${report.vitals.steps.toLocaleString()}</div>
          <div class="vital-unit">steps</div>
          <div class="vital-label">Today</div>
        </div>
        ` : ''}
      </div>
    </div>

    ${report.conditions.length > 0 ? `
    <div class="section">
      <h2 class="section-title">Active Conditions (${report.conditions.length})</h2>
      <table>
        <thead>
          <tr>
            <th>Condition</th>
            <th>Status</th>
            <th>Severity</th>
            <th>Diagnosed</th>
          </tr>
        </thead>
        <tbody>
          ${report.conditions.map(c => `
          <tr>
            <td class="item-primary">${c.name}</td>
            <td><span class="badge badge-${c.status}">${c.status}</span></td>
            <td>${c.severity || '-'}</td>
            <td>${c.diagnosedDate ? formatDate(c.diagnosedDate) : '-'}</td>
          </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    ` : ''}

    ${report.medications.length > 0 ? `
    <div class="section">
      <h2 class="section-title">Current Medications (${report.medications.length})</h2>
      <table>
        <thead>
          <tr>
            <th>Medication</th>
            <th>Dosage</th>
            <th>Frequency</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          ${report.medications.map(m => `
          <tr>
            <td class="item-primary">${m.name}${m.genericName ? `<br><span class="item-secondary">(${m.genericName})</span>` : ''}</td>
            <td>${m.dosage || '-'}</td>
            <td>${m.frequency || '-'}</td>
            <td>${m.prescribedFor || '-'}</td>
          </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    ` : ''}

    ${report.recentLabs.length > 0 ? `
    <div class="section page-break">
      <h2 class="section-title">Recent Lab Results</h2>
      <table>
        <thead>
          <tr>
            <th>Test</th>
            <th>Value</th>
            <th>Reference</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          ${report.recentLabs.map(l => `
          <tr>
            <td class="item-primary">${l.testName}</td>
            <td>${l.value}${l.unit ? ` ${l.unit}` : ''}</td>
            <td>${l.referenceRange ? `${l.referenceRange.low}-${l.referenceRange.high}` : '-'}</td>
            <td>${l.status ? `<span class="badge badge-${l.status}">${l.status}</span>` : '-'}</td>
            <td>${formatDate(l.collectedAt)}</td>
          </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    ` : ''}

    ${report.allergies && report.allergies.length > 0 ? `
    <div class="section no-break">
      <h2 class="section-title">Allergies</h2>
      <div class="warning-box">
        <div class="warning-title">Known Allergies</div>
        <ul>
          ${report.allergies.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>
    </div>
    ` : ''}

    <div class="report-footer">
      <p><strong>Biological Self</strong> - Personal Health Record</p>
      <p class="disclaimer">This report is for informational purposes only and does not constitute medical advice.
      Please consult with your healthcare provider for medical decisions.</p>
    </div>
  `;

  return generatePDFFromHTML(html, {
    title: 'Health Summary Report',
    showBranding: true,
    includeTimestamp: true,
  });
}

// ============================================
// Medication Report PDF
// ============================================

export function generateMedicationReportPDF(report: MedicationReport): ExportResult {
  const html = `
    <div class="report-header">
      <div class="branding">
        <span class="logo">Biological Self</span>
        <span class="report-date">${formatDate(report.generatedAt, 'long')}</span>
      </div>
      <h1 class="report-title">Medication Report</h1>
      <p class="report-subtitle">Complete list of current and past medications</p>
    </div>

    ${report.activeMedications.length > 0 ? `
    <div class="section">
      <h2 class="section-title">Current Medications (${report.activeMedications.length})</h2>
      <table>
        <thead>
          <tr>
            <th>Medication</th>
            <th>Dosage</th>
            <th>Frequency</th>
            <th>Started</th>
            <th>Prescribed For</th>
            <th>Prescriber</th>
          </tr>
        </thead>
        <tbody>
          ${report.activeMedications.map(m => `
          <tr>
            <td>
              <span class="item-primary">${m.name}</span>
              ${m.genericName ? `<br><span class="item-secondary">(${m.genericName})</span>` : ''}
            </td>
            <td>${m.dosage || '-'}</td>
            <td>${m.frequency || '-'}</td>
            <td>${m.startDate ? formatDate(m.startDate) : '-'}</td>
            <td>${m.prescribedFor || '-'}</td>
            <td>${m.prescriber || '-'}</td>
          </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    ` : '<div class="section"><p>No current medications.</p></div>'}

    ${report.interactions && report.interactions.length > 0 ? `
    <div class="section no-break">
      <h2 class="section-title">Drug Interactions</h2>
      <div class="warning-box">
        <div class="warning-title">Potential Interactions Found</div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Medications</th>
            <th>Severity</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          ${report.interactions.map(i => `
          <tr>
            <td><strong>${i.medication1}</strong> + <strong>${i.medication2}</strong></td>
            <td><span class="badge badge-${i.severity === 'major' || i.severity === 'contraindicated' ? 'critical' : i.severity === 'moderate' ? 'high' : 'normal'}">${i.severity}</span></td>
            <td>${i.description}</td>
          </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    ` : ''}

    ${report.pastMedications.length > 0 ? `
    <div class="section page-break">
      <h2 class="section-title">Past Medications (${report.pastMedications.length})</h2>
      <table>
        <thead>
          <tr>
            <th>Medication</th>
            <th>Dosage</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          ${report.pastMedications.map(m => `
          <tr>
            <td>${m.name}</td>
            <td>${m.dosage || '-'}</td>
            <td>${m.startDate ? formatDate(m.startDate) : '-'}</td>
            <td>${m.endDate ? formatDate(m.endDate) : '-'}</td>
            <td>${m.prescribedFor || '-'}</td>
          </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    ` : ''}

    ${report.adherenceNotes ? `
    <div class="section no-break">
      <div class="notes-box">
        <div class="notes-title">Adherence Notes</div>
        <p>${report.adherenceNotes}</p>
      </div>
    </div>
    ` : ''}

    <div class="report-footer">
      <p><strong>Biological Self</strong> - Personal Health Record</p>
      <p class="disclaimer">Always consult your healthcare provider before making changes to your medications.</p>
    </div>
  `;

  return generatePDFFromHTML(html, {
    title: 'Medication Report',
    showBranding: true,
    includeTimestamp: true,
  });
}

// ============================================
// Lab Trends Report PDF
// ============================================

export function generateLabTrendsPDF(report: LabTrendsReport): ExportResult {
  const html = `
    <div class="report-header">
      <div class="branding">
        <span class="logo">Biological Self</span>
        <span class="report-date">${formatDate(report.generatedAt, 'long')}</span>
      </div>
      <h1 class="report-title">Lab Results & Trends</h1>
      <p class="report-subtitle">
        ${formatDate(report.dateRange.start)} - ${formatDate(report.dateRange.end)}
      </p>
    </div>

    ${report.abnormalResults.length > 0 ? `
    <div class="section no-break">
      <h2 class="section-title">Abnormal Results</h2>
      <div class="warning-box">
        <div class="warning-title">${report.abnormalResults.length} abnormal result(s) found</div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Test</th>
            <th>Value</th>
            <th>Reference</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          ${report.abnormalResults.map(l => `
          <tr>
            <td class="item-primary">${l.testName}</td>
            <td><strong>${l.value}${l.unit ? ` ${l.unit}` : ''}</strong></td>
            <td>${l.referenceRange ? `${l.referenceRange.low}-${l.referenceRange.high}` : '-'}</td>
            <td><span class="badge badge-${l.status}">${l.status}</span></td>
            <td>${formatDate(l.collectedAt)}</td>
          </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    ` : ''}

    ${report.trends.length > 0 ? `
    <div class="section">
      <h2 class="section-title">Lab Value Trends</h2>
      <table>
        <thead>
          <tr>
            <th>Test</th>
            <th>Current Value</th>
            <th>Previous Value</th>
            <th>Change</th>
            <th>Trend</th>
          </tr>
        </thead>
        <tbody>
          ${report.trends.map(t => `
          <tr>
            <td class="item-primary">${t.testName}</td>
            <td><strong>${t.currentValue}</strong></td>
            <td>${t.previousValue || '-'}</td>
            <td>${t.percentChange !== undefined ? `${t.percentChange > 0 ? '+' : ''}${t.percentChange}%` : '-'}</td>
            <td>
              <span class="trend-${t.trend === 'improving' ? 'down' : t.trend === 'worsening' ? 'up' : 'stable'}">
                ${t.trend === 'improving' ? 'Improving' : t.trend === 'worsening' ? 'Worsening' : 'Stable'}
              </span>
            </td>
          </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    ` : ''}

    <div class="section page-break">
      <h2 class="section-title">Complete Lab Results</h2>
      <table>
        <thead>
          <tr>
            <th>Test</th>
            <th>Value</th>
            <th>Unit</th>
            <th>Reference</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          ${report.labResults.map(l => `
          <tr>
            <td>${l.testName}</td>
            <td>${l.value}</td>
            <td>${l.unit || '-'}</td>
            <td>${l.referenceRange ? `${l.referenceRange.low}-${l.referenceRange.high}` : '-'}</td>
            <td>${l.status ? `<span class="badge badge-${l.status}">${l.status}</span>` : '-'}</td>
            <td>${formatDate(l.collectedAt)}</td>
          </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="report-footer">
      <p><strong>Biological Self</strong> - Personal Health Record</p>
      <p class="disclaimer">Lab results should be interpreted by a healthcare professional in the context of your overall health.</p>
    </div>
  `;

  return generatePDFFromHTML(html, {
    title: 'Lab Trends Report',
    showBranding: true,
    includeTimestamp: true,
  });
}

// ============================================
// Doctor Visit Report PDF
// ============================================

export function generateDoctorVisitPDF(report: DoctorVisitReport): ExportResult {
  const html = `
    <div class="report-header">
      <div class="branding">
        <span class="logo">Biological Self</span>
        <span class="report-date">${formatDate(report.generatedAt, 'long')}</span>
      </div>
      <h1 class="report-title">Doctor Visit Summary</h1>
      ${report.visitPurpose ? `<p class="report-subtitle">Visit Purpose: ${report.visitPurpose}</p>` : ''}
    </div>

    ${report.currentConcerns.length > 0 ? `
    <div class="section no-break">
      <h2 class="section-title">Current Concerns</h2>
      <ul class="item-list">
        ${report.currentConcerns.map(c => `<li>${c}</li>`).join('')}
      </ul>
    </div>
    ` : ''}

    ${report.currentSymptoms.length > 0 ? `
    <div class="section">
      <h2 class="section-title">Current Symptoms</h2>
      <table>
        <thead>
          <tr>
            <th>Symptom</th>
            <th>Severity (1-10)</th>
            <th>Location</th>
            <th>Since</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          ${report.currentSymptoms.map(s => `
          <tr>
            <td class="item-primary">${s.description}</td>
            <td><strong>${s.severity}</strong>/10</td>
            <td>${s.location || '-'}</td>
            <td>${formatDate(s.onsetDate)}</td>
            <td>${s.duration || '-'}</td>
          </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    ` : ''}

    <div class="section">
      <h2 class="section-title">Current Vitals</h2>
      <div class="vitals-grid">
        ${report.vitals.restingHeartRate ? `
        <div class="vital-item">
          <div class="vital-value">${Math.round(report.vitals.restingHeartRate)}</div>
          <div class="vital-unit">bpm</div>
          <div class="vital-label">Resting HR</div>
        </div>
        ` : ''}
        ${report.vitals.bloodPressure ? `
        <div class="vital-item">
          <div class="vital-value">${report.vitals.bloodPressure.systolic}/${report.vitals.bloodPressure.diastolic}</div>
          <div class="vital-unit">mmHg</div>
          <div class="vital-label">Blood Pressure</div>
        </div>
        ` : ''}
        ${report.vitals.temperature ? `
        <div class="vital-item">
          <div class="vital-value">${report.vitals.temperature}</div>
          <div class="vital-unit">F</div>
          <div class="vital-label">Temperature</div>
        </div>
        ` : ''}
        ${report.vitals.weight ? `
        <div class="vital-item">
          <div class="vital-value">${report.vitals.weight}</div>
          <div class="vital-unit">lbs</div>
          <div class="vital-label">Weight</div>
        </div>
        ` : ''}
        ${report.vitals.oxygenSaturation ? `
        <div class="vital-item">
          <div class="vital-value">${report.vitals.oxygenSaturation}</div>
          <div class="vital-unit">%</div>
          <div class="vital-label">O2 Sat</div>
        </div>
        ` : ''}
      </div>
    </div>

    ${report.medicationList.length > 0 ? `
    <div class="section">
      <h2 class="section-title">Current Medications (${report.medicationList.length})</h2>
      <table>
        <thead>
          <tr>
            <th>Medication</th>
            <th>Dosage</th>
            <th>Frequency</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          ${report.medicationList.map(m => `
          <tr>
            <td class="item-primary">${m.name}</td>
            <td>${m.dosage || '-'}</td>
            <td>${m.frequency || '-'}</td>
            <td>${m.prescribedFor || '-'}</td>
          </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    ` : ''}

    ${report.recentLabResults.length > 0 ? `
    <div class="section page-break">
      <h2 class="section-title">Recent Lab Results</h2>
      <table>
        <thead>
          <tr>
            <th>Test</th>
            <th>Value</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          ${report.recentLabResults.map(l => `
          <tr>
            <td>${l.testName}</td>
            <td>${l.value}${l.unit ? ` ${l.unit}` : ''}</td>
            <td>${l.status ? `<span class="badge badge-${l.status}">${l.status}</span>` : '-'}</td>
            <td>${formatDate(l.collectedAt)}</td>
          </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    ` : ''}

    ${report.questionsForDoctor.length > 0 ? `
    <div class="section no-break">
      <h2 class="section-title">Questions for Doctor</h2>
      <ol>
        ${report.questionsForDoctor.map(q => `<li style="margin-bottom: 8px;">${q}</li>`).join('')}
      </ol>
    </div>
    ` : ''}

    ${report.notes ? `
    <div class="section no-break">
      <div class="notes-box">
        <div class="notes-title">Additional Notes</div>
        <p>${report.notes}</p>
      </div>
    </div>
    ` : ''}

    <div class="report-footer">
      <p><strong>Biological Self</strong> - Personal Health Record</p>
      <p class="disclaimer">This summary is intended to facilitate communication with your healthcare provider.</p>
    </div>
  `;

  return generatePDFFromHTML(html, {
    title: 'Doctor Visit Summary',
    showBranding: true,
    includeTimestamp: true,
  });
}

// ============================================
// Encyclopedia Entry PDF
// ============================================

export interface EncyclopediaEntryPDFData {
  name: string;
  entryType: string;
  category: string;
  overview: string;
  sections: Array<{
    title: string;
    content: string;
  }>;
  relatedEntries?: string[];
  references?: Array<{
    citation: string;
    url?: string;
  }>;
}

export function generateEncyclopediaEntryPDF(entry: EncyclopediaEntryPDFData): ExportResult {
  const html = `
    <div class="report-header">
      <div class="branding">
        <span class="logo">Biological Self Encyclopedia</span>
        <span class="report-date">${formatDate(new Date().toISOString(), 'long')}</span>
      </div>
      <h1 class="report-title">${entry.name}</h1>
      <p class="report-subtitle">${entry.entryType} - ${entry.category}</p>
    </div>

    <div class="section">
      <h2 class="section-title">Overview</h2>
      ${entry.overview.split('\n').map(p => p.trim() ? `<p style="margin-bottom: 8px;">${p}</p>` : '').join('')}
    </div>

    ${entry.sections.map(section => `
    <div class="section">
      <h2 class="section-title">${section.title}</h2>
      ${section.content.split('\n').map(p => p.trim() ? `<p style="margin-bottom: 8px;">${p}</p>` : '').join('')}
    </div>
    `).join('')}

    ${entry.relatedEntries && entry.relatedEntries.length > 0 ? `
    <div class="section no-break">
      <h2 class="section-title">Related Topics</h2>
      <ul class="item-list">
        ${entry.relatedEntries.map(e => `<li>${e}</li>`).join('')}
      </ul>
    </div>
    ` : ''}

    ${entry.references && entry.references.length > 0 ? `
    <div class="section no-break">
      <h2 class="section-title">References</h2>
      <ol style="font-size: 10pt;">
        ${entry.references.map(r => `
        <li style="margin-bottom: 4px;">
          ${r.citation}
          ${r.url ? `<br><a href="${r.url}" style="color: #3b82f6;">${r.url}</a>` : ''}
        </li>
        `).join('')}
      </ol>
    </div>
    ` : ''}

    <div class="report-footer">
      <p><strong>Biological Self Encyclopedia</strong></p>
      <p class="disclaimer">This content is for educational purposes only and does not constitute medical advice.</p>
    </div>
  `;

  return generatePDFFromHTML(html, {
    title: entry.name,
    showBranding: true,
    includeTimestamp: true,
  });
}
