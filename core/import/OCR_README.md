# OCR Service for PDF Medical Record Import

This module provides OCR (Optical Character Recognition) capabilities for the Biological Self PDF Medical Record Import feature using Tesseract.js.

## Features

- **Smart Text Detection**: First attempts native PDF text extraction, falls back to OCR only when needed
- **Multi-page PDF Support**: Processes large documents with progress tracking
- **OCR Confidence Reporting**: Tracks and reports confidence scores per page
- **Image-based PDF Support**: Renders PDF pages to canvas for OCR processing
- **Progressive Processing**: Handles large files with configurable page limits
- **Error Recovery**: Continues processing even if individual pages fail

## Installation

Dependencies are already included in package.json:

```bash
npm install tesseract.js pdfjs-dist
```

## Configuration

### PDF.js Worker Setup

The consuming application must configure the PDF.js worker in the main entry point:

```typescript
// App.tsx or main.tsx
import { configurePDFWorker } from './core/import/pdf';

// For Vite/Webpack:
configurePDFWorker(new URL('pdfjs-dist/build/pdf.worker.mjs', import.meta.url).toString());

// For CDN:
configurePDFWorker('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/5.4.624/pdf.worker.mjs');
```

### OCR Language

Default language is English ('eng'). To use other languages:

```typescript
// Create a new OCR service with specific language
const ocrService = new OCRService('spa'); // Spanish
await ocrService.initialize();

// Or update the store config
pdfImportStore.updateConfig({ ocrLanguage: 'spa' });
```

## Usage

### Basic Usage (via Store)

```typescript
import { pdfImportStore } from './core/import/pdf';

// Check if PDF needs OCR
const needsOCR = await pdfImportStore.detectNeedsOCR(pdfBuffer);

// Perform OCR with automatic text extraction
const text = await pdfImportStore.performOCR(jobId, pdfBuffer);

// Or get full metadata
const result = await pdfImportStore.performOCRWithMetadata(jobId, pdfBuffer);
console.log(result.averageConfidence); // 85.5
console.log(result.usedOCR); // true if OCR was used
```

### Advanced Usage (OCR Service Directly)

```typescript
import { OCRService, extractTextFromPDF } from './core/import/pdf';

// One-off extraction
const result = await extractTextFromPDF(pdfBuffer, {
  language: 'eng',
  onProgress: (page, total, status) => {
    console.log(`Page ${page}/${total}: ${status}`);
  },
  renderQuality: 2, // 1-3, higher = better OCR but slower
  maxPages: 50,
  confidenceThreshold: 60,
});

// Reusable service instance
const ocrService = new OCRService('eng');
await ocrService.initialize();

const result = await ocrService.extractFromPDF(pdfBuffer, {
  onProgress: (page, total, status) => {
    console.log(`Processing page ${page} of ${total}`);
  },
});

console.log(`Text: ${result.text}`);
console.log(`Confidence: ${result.averageConfidence}%`);
console.log(`OCR used: ${result.usedOCR}`);

await ocrService.terminate();
```

## OCR Result Structure

```typescript
interface OCRResult {
  text: string;              // Combined text from all pages
  pages: OCRPageResult[];    // Per-page results
  totalPages: number;
  averageConfidence: number; // 0-100
  usedOCR: boolean;          // True if OCR was needed
  errors: string[];          // Warning messages
  processingTimeMs: number;
}

interface OCRPageResult {
  pageNumber: number;
  text: string;
  confidence: number;
  hasTextContent: boolean;   // True if native text was available
  processingTimeMs: number;
}
```

## Performance Considerations

- **Text-based PDFs**: Process instantly (native extraction)
- **Image-based PDFs**: ~1-3 seconds per page depending on quality
- **Render Quality**: 
  - 1 = Fast (lower accuracy)
  - 2 = Balanced (default)
  - 3 = High accuracy (slower)
- **Page Limits**: Default max 100 pages to prevent browser freezing

## Error Handling

The OCR service handles common error cases:

- **PDF parsing errors**: Returns empty result with error message
- **OCR failures on single pages**: Continues with other pages
- **Low confidence**: Reports warnings but doesn't fail
- **Browser incompatibility**: Graceful fallback

## Medical Terminology

Tesseract.js is configured with the English language pack which includes medical terminology. For specialized medical OCR:

1. Consider training a custom Tesseract model with medical vocabulary
2. Post-process OCR results with medical spell-checking
3. Use the LLM extraction phase to correct common OCR errors

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (WebGL canvas required)
- Mobile: Supported but slower processing

## Privacy Notes

- All OCR processing happens **locally in the browser**
- No PDF data is sent to external services
- Tesseract.js language models are downloaded once and cached
- Worker threads are terminated after processing to free memory
