/**
 * Timeline Export Module
 * 
 * Export timeline data in various formats:
 * - PDF: For sharing with healthcare providers
 * - JSON: For data portability
 * - CSV: For spreadsheet analysis
 */

import type { TimelineEvent, EventCategory, HealthSummary, TimelineExportOptions } from './events';
import type { TimelineInsight } from './insights';
import { calculateStatistics } from './timeline-engine';

// ============================================================================
// Export Functions
// ============================================================================

/**
 * Export timeline to JSON format
 */
export function exportToJSON(
  events: TimelineEvent[],
  insights: TimelineInsight[] = [],
  options: TimelineExportOptions = { format: 'json' }
): string {
  const filteredEvents = options.dateRange
    ? events.filter(e => e.date >= options.dateRange!.start && e.date <= options.dateRange!.end)
    : events;
  
  const filteredInsights = options.dateRange
    ? insights.filter(i => i.dateRange.start >= options.dateRange!.start && i.dateRange.end <= options.dateRange!.end)
    : insights;
  
  const exportData = {
    exportDate: new Date().toISOString(),
    exportOptions: options,
    summary: generateHealthSummary(filteredEvents, filteredInsights),
    events: filteredEvents,
    insights: options.includeInsights !== false ? filteredInsights : undefined,
  };
  
  return JSON.stringify(exportData, null, 2);
}

/**
 * Export timeline to CSV format
 */
export function exportToCSV(
  events: TimelineEvent[],
  options: TimelineExportOptions = { format: 'csv' }
): string {
  const filteredEvents = options.dateRange
    ? events.filter(e => e.date >= options.dateRange!.start && e.date <= options.dateRange!.end)
    : events;
  
  const headers = [
    'Date',
    'EndDate',
    'Category',
    'Type',
    'Title',
    'Description',
    'Severity',
    'Status',
    'Tags',
    'Source',
    'Notes',
  ];
  
  const rows = filteredEvents.map(event => [
    formatDateForCSV(event.date),
    event.endDate ? formatDateForCSV(event.endDate) : '',
    event.category,
    event.type,
    escapeCSV(event.title),
    escapeCSV(event.description),
    event.severity,
    event.status,
    event.tags.join(';'),
    event.source,
    escapeCSV(event.notes || ''),
  ]);
  
  return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
}

/**
 * Generate a PDF-ready HTML document for timeline export
 */
export function generatePDFHTML(
  events: TimelineEvent[],
  insights: TimelineInsight[] = [],
  options: TimelineExportOptions = { format: 'pdf', template: 'full' }
): string {
  const filteredEvents = options.dateRange
    ? events.filter(e => e.date >= options.dateRange!.start && e.date <= options.dateRange!.end)
    : events;
  
  const summary = generateHealthSummary(filteredEvents, insights);
  
  const template = options.template || 'full';
  
  switch (template) {
    case 'summary':
      return generateSummaryTemplate(summary, insights);
    case 'provider':
      return generateProviderTemplate(filteredEvents, summary, insights);
    case 'full':
    default:
      return generateFullTemplate(filteredEvents, summary, insights);
  }
}

// ============================================================================
// HTML Templates
// ============================================================================

function generateFullTemplate(
  events: TimelineEvent[],
  summary: HealthSummary,
  insights: TimelineInsight[]
): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Health Timeline Summary</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    h1 { color: #1a365d; border-bottom: 2px solid #3182ce; padding-bottom: 10px; }
    h2 { color: #2c5282; margin-top: 30px; }
    h3 { color: #4a5568; }
    .summary-box {
      background: #ebf8ff;
      border-left: 4px solid #3182ce;
      padding: 15px 20px;
      margin: 20px 0;
      border-radius: 4px;
    }
    .event {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 15px;
      margin: 10px 0;
      background: white;
    }
    .event-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    .event-date {
      color: #718096;
      font-size: 14px;
    }
    .event-category {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
    }
    .category-medical { background: #fed7d7; color: #c53030; }
    .category-lifestyle { background: #c6f6d5; color: #276749; }
    .category-life-event { background: #feebc8; color: #c05621; }
    .category-milestone { background: #e9d8fd; color: #6b46c1; }
    .severity-critical { border-left: 4px solid #e53e3e; }
    .severity-high { border-left: 4px solid #ed8936; }
    .severity-moderate { border-left: 4px solid #ecc94b; }
    .severity-low { border-left: 4px solid #48bb78; }
    .severity-info { border-left: 4px solid #a0aec0; }
    .insight {
      background: #f0fff4;
      border: 1px solid #9ae6b4;
      border-radius: 6px;
      padding: 12px;
      margin: 10px 0;
    }
    .insight-title {
      font-weight: 600;
      color: #276749;
      margin-bottom: 5px;
    }
    .confidence-high { color: #c53030; }
    .confidence-medium { color: #d69e2e; }
    .confidence-low { color: #718096; }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
      font-size: 12px;
      color: #718096;
      text-align: center;
    }
    .tag {
      display: inline-block;
      background: #edf2f7;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 11px;
      margin-right: 5px;
      color: #4a5568;
    }
    .section {
      margin: 30px 0;
    }
  </style>
</head>
<body>
  <h1>🩺 Health Timeline Summary</h1>
  
  <div class="summary-box">
    <h3>Overview</h3>
    <p><strong>Period:</strong> ${formatDateRange(summary.dateRange)}</p>
    <p><strong>Total Events:</strong> ${summary.totalEvents}</p>
    <p><strong>Categories:</strong> Medical (${summary.eventsByCategory.medical}), 
      Lifestyle (${summary.eventsByCategory.lifestyle}), 
      Life Events (${summary.eventsByCategory['life-event']}), 
      Milestones (${summary.eventsByCategory.milestone})</p>
  </div>

  ${summary.activeConditions.length > 0 ? `
  <div class="section">
    <h2>Active Conditions</h2>
    <ul>
      ${summary.activeConditions.map(c => `<li>${c}</li>`).join('')}
    </ul>
  </div>
  ` : ''}

  ${summary.currentMedications.length > 0 ? `
  <div class="section">
    <h2>Current Medications</h2>
    <ul>
      ${summary.currentMedications.map(m => `<li>${m}</li>`).join('')}
    </ul>
  </div>
  ` : ''}

  ${insights.length > 0 ? `
  <div class="section">
    <h2>Key Insights</h2>
    ${insights.filter(i => i.confidence !== 'low').slice(0, 10).map(insight => `
      <div class="insight">
        <div class="insight-title">
          <span class="confidence-${insight.confidence}">[${insight.confidence.toUpperCase()}]</span>
          ${insight.title}
        </div>
        <p>${insight.description}</p>
        ${insight.recommendation ? `<p><em>💡 ${insight.recommendation}</em></p>` : ''}
      </div>
    `).join('')}
  </div>
  ` : ''}

  <div class="section">
    <h2>Timeline Events</h2>
    ${events.slice(0, 50).map(event => `
      <div class="event severity-${event.severity}">
        <div class="event-header">
          <span class="event-category category-${event.category}">${event.category}</span>
          <span class="event-date">${formatDateForDisplay(event.date)}</span>
        </div>
        <h3>${event.title}</h3>
        <p>${event.description}</p>
        <p>
          ${event.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </p>
        ${event.notes ? `<p><em>Notes: ${event.notes}</em></p>` : ''}
      </div>
    `).join('')}
    ${events.length > 50 ? `<p><em>... and ${events.length - 50} more events</em></p>` : ''}
  </div>

  <div class="footer">
    <p>Generated on ${new Date().toLocaleDateString()} by Biological Self</p>
    <p>This summary is for informational purposes only and does not constitute medical advice.</p>
  </div>
</body>
</html>`;
}

function generateSummaryTemplate(
  summary: HealthSummary,
  insights: TimelineInsight[]
): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Health Summary</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    h1 { color: #1a365d; }
    .card {
      background: #f7fafc;
      border-radius: 8px;
      padding: 20px;
      margin: 15px 0;
    }
    .stat {
      display: inline-block;
      margin: 10px 20px 10px 0;
    }
    .stat-value {
      font-size: 32px;
      font-weight: bold;
      color: #3182ce;
    }
    .stat-label {
      font-size: 14px;
      color: #718096;
    }
    ul { padding-left: 20px; }
    li { margin: 8px 0; }
    .footer {
      margin-top: 40px;
      font-size: 12px;
      color: #718096;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Health Summary</h1>
  <p>Period: ${formatDateRange(summary.dateRange)}</p>
  
  <div class="card">
    <div class="stat">
      <div class="stat-value">${summary.totalEvents}</div>
      <div class="stat-label">Total Events</div>
    </div>
    <div class="stat">
      <div class="stat-value">${summary.eventsByCategory.medical}</div>
      <div class="stat-label">Medical</div>
    </div>
    <div class="stat">
      <div class="stat-value">${summary.eventsByCategory.lifestyle}</div>
      <div class="stat-label">Lifestyle</div>
    </div>
  </div>

  ${summary.activeConditions.length > 0 ? `
  <div class="card">
    <h3>Active Conditions</h3>
    <ul>
      ${summary.activeConditions.map(c => `<li>${c}</li>`).join('')}
    </ul>
  </div>
  ` : ''}

  ${summary.currentMedications.length > 0 ? `
  <div class="card">
    <h3>Current Medications</h3>
    <ul>
      ${summary.currentMedications.map(m => `<li>${m}</li>`).join('')}
    </ul>
  </div>
  ` : ''}

  ${insights.length > 0 ? `
  <div class="card">
    <h3>Key Insights</h3>
    <ul>
      ${insights.filter(i => i.confidence === 'high').slice(0, 5).map(i => 
        `<li><strong>${i.title}:</strong> ${i.description}</li>`
      ).join('')}
    </ul>
  </div>
  ` : ''}

  <div class="footer">
    Generated on ${new Date().toLocaleDateString()} by Biological Self
  </div>
</body>
</html>`;
}

function generateProviderTemplate(
  events: TimelineEvent[],
  summary: HealthSummary,
  insights: TimelineInsight[]
): string {
  const medicalEvents = events.filter(e => e.category === 'medical');
  
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Health Summary for Healthcare Provider</title>
  <style>
    body {
      font-family: Georgia, 'Times New Roman', serif;
      line-height: 1.6;
      color: #000;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px;
    }
    h1 { 
      color: #000; 
      border-bottom: 2px solid #000; 
      padding-bottom: 10px;
      font-size: 24px;
    }
    h2 { 
      color: #333; 
      margin-top: 30px;
      font-size: 18px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    th, td {
      text-align: left;
      padding: 8px 12px;
      border-bottom: 1px solid #ddd;
    }
    th {
      background: #f5f5f5;
      font-weight: bold;
    }
    .critical { color: #c53030; font-weight: bold; }
    .high { color: #dd6b20; }
    .disclaimer {
      margin-top: 40px;
      padding: 15px;
      background: #fffaf0;
      border: 1px solid #ed8936;
      font-size: 13px;
    }
  </style>
</head>
<body>
  <h1>Health Summary for Healthcare Provider</h1>
  
  <p><strong>Date Range:</strong> ${formatDateRange(summary.dateRange)}</p>
  <p><strong>Generated:</strong> ${new Date().toLocaleDateString()}</p>
  
  <h2>Current Conditions</h2>
  ${summary.activeConditions.length > 0 ? `
  <ul>
    ${summary.activeConditions.map(c => `<li>${c}</li>`).join('')}
  </ul>
  ` : '<p>None documented</p>'}
  
  <h2>Current Medications</h2>
  ${summary.currentMedications.length > 0 ? `
  <ul>
    ${summary.currentMedications.map(m => `<li>${m}</li>`).join('')}
  </ul>
  ` : '<p>None documented</p>'}
  
  <h2>Recent Lab Trends</h2>
  ${summary.recentLabTrends.length > 0 ? `
  <table>
    <tr>
      <th>Test</th>
      <th>Last Value</th>
      <th>Trend</th>
    </tr>
    ${summary.recentLabTrends.map(lab => `
      <tr>
        <td>${lab.testName}</td>
        <td>${lab.lastValue} ${lab.unit}</td>
        <td class="${lab.trend === 'worsening' ? 'high' : ''}">${lab.trend}</td>
      </tr>
    `).join('')}
  </table>
  ` : '<p>No recent lab data</p>'}
  
  <h2>Significant Medical Events</h2>
  <table>
    <tr>
      <th>Date</th>
      <th>Type</th>
      <th>Description</th>
      <th>Severity</th>
    </tr>
    ${medicalEvents
      .filter(e => e.severity === 'critical' || e.severity === 'high')
      .slice(0, 20)
      .map(event => `
      <tr>
        <td>${formatDateForDisplay(event.date)}</td>
        <td>${event.type}</td>
        <td>${event.title}</td>
        <td class="${event.severity}">${event.severity}</td>
      </tr>
    `).join('')}
  </table>
  
  <h2>Notable Patterns</h2>
  ${insights.filter(i => i.confidence !== 'low').slice(0, 5).map(insight => `
    <p><strong>${insight.title}</strong> (${insight.confidence} confidence)<br>
    ${insight.description}</p>
  `).join('') || '<p>No significant patterns identified</p>'}
  
  <div class="disclaimer">
    <strong>Important:</strong> This summary was generated from patient-recorded data and is provided 
    for informational purposes only. Please verify all information with the patient and refer to 
    official medical records for clinical decision-making.
  </div>
</body>
</html>`;
}

// ============================================================================
// Helper Functions
// ============================================================================

function generateHealthSummary(
  events: TimelineEvent[],
  insights: TimelineInsight[]
): HealthSummary {
  const stats = calculateStatistics(events);
  
  // Get active conditions
  const activeConditions = events
    .filter(e => e.type === 'diagnosis' && (e.status === 'active' || e.status === 'ongoing'))
    .map(e => e.title)
    .filter((v, i, a) => a.indexOf(v) === i);
  
  // Get current medications
  const currentMedications = events
    .filter(e => e.type === 'medication-start' && e.status === 'active')
    .map(e => e.title.replace('Started: ', ''))
    .filter((v, i, a) => a.indexOf(v) === i);
  
  // Get recent lab trends
  const labEvents = events
    .filter(e => e.type === 'lab-result')
    .slice(0, 10);
  
  const recentLabTrends = labEvents.map(e => {
    const trend = (e.data as { trend?: string }).trend;
    const mappedTrend = trend === 'decreasing' ? 'improving' as const : 
                        trend === 'increasing' ? 'worsening' as const : 'stable' as const;
    return {
      testName: (e.data as { testName: string }).testName,
      trend: mappedTrend,
      lastValue: (e.data as { value: number }).value,
      unit: (e.data as { unit: string }).unit,
    };
  });
  
  // Get key insights
  const keyInsights = insights
    .filter(i => i.confidence === 'high')
    .slice(0, 5)
    .map(i => i.title);
  
  return {
    generatedAt: new Date(),
    dateRange: stats.dateRange,
    totalEvents: stats.totalEvents,
    eventsByCategory: stats.eventsByCategory,
    activeConditions,
    currentMedications,
    recentLabTrends,
    keyInsights,
  };
}

function formatDateRange(range: { start: Date; end: Date }): string {
  return `${range.start.toLocaleDateString()} - ${range.end.toLocaleDateString()}`;
}

function formatDateForDisplay(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function formatDateForCSV(date: Date): string {
  return date.toISOString().split('T')[0];
}

function escapeCSV(value: string): string {
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

// ============================================================================
// Export Trigger
// ============================================================================

/**
 * Trigger a file download with the given content
 */
export function downloadFile(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export timeline with options and trigger download
 */
export function exportTimeline(
  events: TimelineEvent[],
  insights: TimelineInsight[] = [],
  options: TimelineExportOptions = { format: 'pdf' }
): void {
  const timestamp = new Date().toISOString().split('T')[0];
  
  switch (options.format) {
    case 'json':
      const jsonContent = exportToJSON(events, insights, options);
      downloadFile(jsonContent, `health-timeline-${timestamp}.json`, 'application/json');
      break;
    
    case 'csv':
      const csvContent = exportToCSV(events, options);
      downloadFile(csvContent, `health-timeline-${timestamp}.csv`, 'text/csv');
      break;
    
    case 'pdf':
      const htmlContent = generatePDFHTML(events, insights, options);
      downloadFile(htmlContent, `health-timeline-${timestamp}.html`, 'text/html');
      break;
  }
}
