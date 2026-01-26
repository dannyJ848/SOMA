/**
 * Print Manager
 *
 * Handles print preview and print functionality with optimized layouts.
 */

import type { PrintOptions, PrintResult } from './types';
import { formatDate, formatDateTime } from './exportUtils';

// ============================================
// Print Preview Window Manager
// ============================================

interface PrintPreviewConfig {
  title: string;
  content: string;
  header?: string;
  footer?: string;
  orientation?: 'portrait' | 'landscape';
}

export class PrintManager {
  private printWindow: Window | null = null;

  /**
   * Opens a print preview window with the provided content
   */
  openPrintPreview(config: PrintPreviewConfig): PrintResult {
    try {
      this.printWindow = window.open('', '_blank', 'width=800,height=600');

      if (!this.printWindow) {
        return {
          success: false,
          printed: false,
          error: 'Failed to open print window. Please allow popups.',
        };
      }

      const html = this.buildPrintDocument(config);
      this.printWindow.document.write(html);
      this.printWindow.document.close();

      return {
        success: true,
        printed: false, // Not printed yet, just preview
      };
    } catch (error) {
      return {
        success: false,
        printed: false,
        error: error instanceof Error ? error.message : 'Failed to open print preview',
      };
    }
  }

  /**
   * Directly triggers print for the current page or specific content
   */
  print(config: PrintPreviewConfig): PrintResult {
    try {
      const result = this.openPrintPreview(config);
      if (!result.success || !this.printWindow) {
        return result;
      }

      // Wait for content to load then trigger print
      this.printWindow.onload = () => {
        if (this.printWindow) {
          this.printWindow.focus();
          this.printWindow.print();
        }
      };

      return {
        success: true,
        printed: true,
      };
    } catch (error) {
      return {
        success: false,
        printed: false,
        error: error instanceof Error ? error.message : 'Failed to print',
      };
    }
  }

  /**
   * Builds the complete HTML document for printing
   */
  private buildPrintDocument(config: PrintPreviewConfig): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${config.title}</title>
  <style>
    ${this.getPrintStyles(config.orientation)}
  </style>
</head>
<body>
  <div class="print-container">
    ${config.header ? `<header class="print-header">${config.header}</header>` : ''}
    <main class="print-content">
      ${config.content}
    </main>
    ${config.footer ? `<footer class="print-footer">${config.footer}</footer>` : ''}
  </div>
  <div class="print-actions no-print">
    <button onclick="window.print()">Print</button>
    <button onclick="window.close()">Close</button>
  </div>
</body>
</html>
    `;
  }

  /**
   * Gets the print-optimized CSS styles
   */
  private getPrintStyles(orientation: 'portrait' | 'landscape' = 'portrait'): string {
    return `
      @page {
        size: ${orientation};
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
        padding: 20px;
      }

      .print-container {
        max-width: 800px;
        margin: 0 auto;
      }

      /* Header */
      .print-header {
        border-bottom: 2px solid #3b82f6;
        padding-bottom: 16px;
        margin-bottom: 24px;
      }

      .print-header h1 {
        font-size: 24pt;
        font-weight: 700;
        color: #1a1a1a;
      }

      .print-header .subtitle {
        font-size: 12pt;
        color: #6b7280;
      }

      /* Content */
      .print-content {
        min-height: 70vh;
      }

      .print-content h2 {
        font-size: 14pt;
        font-weight: 600;
        color: #1a1a1a;
        border-bottom: 1px solid #e5e7eb;
        padding-bottom: 8px;
        margin: 24px 0 12px;
      }

      .print-content h2:first-child {
        margin-top: 0;
      }

      .print-content h3 {
        font-size: 12pt;
        font-weight: 600;
        color: #374151;
        margin: 16px 0 8px;
      }

      .print-content p {
        margin-bottom: 8px;
      }

      .print-content ul, .print-content ol {
        margin-left: 20px;
        margin-bottom: 12px;
      }

      .print-content li {
        margin-bottom: 4px;
      }

      /* Tables */
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 16px 0;
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

      /* Footer */
      .print-footer {
        margin-top: 32px;
        padding-top: 16px;
        border-top: 1px solid #e5e7eb;
        font-size: 9pt;
        color: #6b7280;
      }

      /* Badges */
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

      /* Cards */
      .card-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        margin: 16px 0;
      }

      .card {
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 12px;
        background: #fafafa;
      }

      /* Vitals */
      .vitals-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
        margin: 16px 0;
      }

      .vital-item {
        text-align: center;
        padding: 12px;
        background: #f9fafb;
        border-radius: 8px;
        border: 1px solid #e5e7eb;
      }

      .vital-value {
        font-size: 18pt;
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

      /* Page breaks */
      .page-break {
        page-break-before: always;
      }

      .no-break {
        page-break-inside: avoid;
      }

      /* Warning boxes */
      .warning-box {
        background: #fef2f2;
        border: 1px solid #fca5a5;
        border-radius: 8px;
        padding: 12px;
        margin: 16px 0;
      }

      .info-box {
        background: #eff6ff;
        border: 1px solid #93c5fd;
        border-radius: 8px;
        padding: 12px;
        margin: 16px 0;
      }

      /* Print actions (hidden when printing) */
      .print-actions {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        gap: 8px;
        padding: 12px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .print-actions button {
        padding: 8px 16px;
        border: none;
        border-radius: 6px;
        font-size: 14px;
        cursor: pointer;
        transition: background 0.2s;
      }

      .print-actions button:first-child {
        background: #3b82f6;
        color: white;
      }

      .print-actions button:first-child:hover {
        background: #2563eb;
      }

      .print-actions button:last-child {
        background: #e5e7eb;
        color: #374151;
      }

      .print-actions button:last-child:hover {
        background: #d1d5db;
      }

      /* Print-specific */
      @media print {
        body {
          padding: 0;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .no-print {
          display: none !important;
        }

        .print-container {
          max-width: none;
        }
      }
    `;
  }

  /**
   * Close the print preview window
   */
  closePrintPreview(): void {
    if (this.printWindow && !this.printWindow.closed) {
      this.printWindow.close();
    }
    this.printWindow = null;
  }
}

// ============================================
// Singleton instance
// ============================================

export const printManager = new PrintManager();

// ============================================
// Print Helper Functions
// ============================================

/**
 * Print current page content
 */
export function printCurrentPage(): PrintResult {
  try {
    window.print();
    return {
      success: true,
      printed: true,
    };
  } catch (error) {
    return {
      success: false,
      printed: false,
      error: error instanceof Error ? error.message : 'Failed to print',
    };
  }
}

/**
 * Print specific element by ID
 */
export function printElement(elementId: string, title: string): PrintResult {
  const element = document.getElementById(elementId);
  if (!element) {
    return {
      success: false,
      printed: false,
      error: `Element with ID '${elementId}' not found`,
    };
  }

  return printManager.print({
    title,
    content: element.innerHTML,
    header: `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h1>${title}</h1>
        <span style="color: #6b7280; font-size: 10pt;">${formatDate(new Date().toISOString(), 'long')}</span>
      </div>
    `,
    footer: `
      <p><strong>Biological Self</strong> - Personal Health Record</p>
      <p style="font-style: italic; font-size: 9pt;">Generated ${formatDateTime(new Date().toISOString())}</p>
    `,
  });
}

/**
 * Build standard print header
 */
export function buildPrintHeader(title: string, subtitle?: string): string {
  return `
    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
      <div>
        <h1 style="font-size: 24pt; font-weight: 700; margin-bottom: 4px;">${title}</h1>
        ${subtitle ? `<p style="color: #6b7280; font-size: 12pt;">${subtitle}</p>` : ''}
      </div>
      <div style="text-align: right;">
        <div style="font-weight: 600; color: #3b82f6;">Biological Self</div>
        <div style="color: #6b7280; font-size: 10pt;">${formatDate(new Date().toISOString(), 'long')}</div>
      </div>
    </div>
  `;
}

/**
 * Build standard print footer
 */
export function buildPrintFooter(disclaimer?: string): string {
  return `
    <p><strong>Biological Self</strong> - Personal Health Record</p>
    ${disclaimer ? `<p style="font-style: italic; margin-top: 8px;">${disclaimer}</p>` : ''}
    <p style="color: #9ca3af; font-size: 8pt; margin-top: 8px;">Generated ${formatDateTime(new Date().toISOString())}</p>
  `;
}

// ============================================
// Print Stylesheet Injection
// ============================================

/**
 * Inject print styles into the current document
 */
export function injectPrintStyles(): void {
  const styleId = 'biological-self-print-styles';

  // Remove existing styles if any
  const existing = document.getElementById(styleId);
  if (existing) {
    existing.remove();
  }

  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = `
    @media print {
      /* Hide navigation and non-essential elements */
      .mobile-bottom-nav,
      .app-header,
      .back-btn,
      .back-button,
      .header-actions,
      .no-print {
        display: none !important;
      }

      /* Reset body for printing */
      body {
        background: white !important;
        color: black !important;
        font-size: 11pt !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }

      /* Container adjustments */
      .container {
        max-width: none !important;
        padding: 0 !important;
        margin: 0 !important;
      }

      /* Card styling for print */
      .card,
      .dashboard-section,
      .entry-preview-card,
      .search-result-card {
        box-shadow: none !important;
        border: 1px solid #e5e7eb !important;
        page-break-inside: avoid;
      }

      /* Page breaks */
      .page-break-before {
        page-break-before: always;
      }

      .page-break-after {
        page-break-after: always;
      }

      .no-page-break {
        page-break-inside: avoid;
      }

      /* Links */
      a {
        color: #1a1a1a !important;
        text-decoration: none !important;
      }

      a[href]:after {
        content: none !important;
      }
    }
  `;

  document.head.appendChild(style);
}

// Initialize print styles on module load
if (typeof window !== 'undefined') {
  injectPrintStyles();
}
