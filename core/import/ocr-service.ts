/**
 * OCR Service for PDF Medical Record Import
 * 
 * Uses Tesseract.js for OCR on scanned/image-based PDFs
 * Renders PDF pages to images using pdfjs-dist for processing
 */

import { createWorker, type Worker, type ImageLike } from 'tesseract.js';
import * as pdfjs from 'pdfjs-dist';
import type { PDFPageProxy } from 'pdfjs-dist';

// PDF.js worker is configured by the consuming application
// The worker source should be set in the main app entry point

/**
 * Configure PDF.js worker
 * Call this once in your application entry point
 * 
 * Example for Vite/Webpack:
 *   configurePDFWorker(new URL('pdfjs-dist/build/pdf.worker.mjs', import.meta.url).toString());
 * 
 * Example for CDN:
 *   configurePDFWorker('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.x.x/pdf.worker.mjs');
 */
export function configurePDFWorker(workerSrc: string): void {
  pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
}

export interface OCROptions {
  /** Language code for OCR (default: 'eng') */
  language?: string;
  /** Progress callback for UI updates */
  onProgress?: (page: number, total: number, status: string) => void;
  /** Quality of image rendering (1-3, higher = better but slower) */
  renderQuality?: number;
  /** Maximum pages to process (for large files) */
  maxPages?: number;
  /** OCR confidence threshold (0-100) */
  confidenceThreshold?: number;
}

export interface OCRResult {
  /** Combined text from all pages */
  text: string;
  /** Per-page results with metadata */
  pages: OCRPageResult[];
  /** Total number of pages processed */
  totalPages: number;
  /** Average confidence score (0-100) */
  averageConfidence: number;
  /** Whether any page required OCR (vs had extractable text) */
  usedOCR: boolean;
  /** Errors encountered during processing */
  errors: string[];
  /** Processing time in milliseconds */
  processingTimeMs: number;
}

export interface OCRPageResult {
  pageNumber: number;
  text: string;
  confidence: number;
  hasTextContent: boolean;
  processingTimeMs: number;
}

/**
 * Service for extracting text from PDFs using OCR when needed
 */
export class OCRService {
  private worker: Worker | null = null;
  private language: string;
  private isInitialized = false;

  constructor(language: string = 'eng') {
    this.language = language;
  }

  /**
   * Initialize the Tesseract worker
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      this.worker = await createWorker(this.language);
      this.isInitialized = true;
    } catch (error) {
      throw new Error(`Failed to initialize OCR worker: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Terminate the Tesseract worker to free resources
   */
  async terminate(): Promise<void> {
    if (this.worker) {
      await this.worker.terminate();
      this.worker = null;
      this.isInitialized = false;
    }
  }

  /**
   * Extract text from a PDF, using OCR only when necessary
   * First attempts text extraction, falls back to OCR for image-based pages
   */
  async extractFromPDF(
    pdfBuffer: ArrayBuffer,
    options: OCROptions = {}
  ): Promise<OCRResult> {
    const startTime = performance.now();
    const {
      onProgress,
      renderQuality = 2,
      maxPages = 100,
      confidenceThreshold = 60,
    } = options;

    const errors: string[] = [];
    const pages: OCRPageResult[] = [];
    let usedOCR = false;

    try {
      // Load PDF document
      const pdfDocument = await pdfjs.getDocument({ data: pdfBuffer }).promise;
      const totalPages = Math.min(pdfDocument.numPages, maxPages);

      onProgress?.(0, totalPages, 'Loading PDF...');

      // Process each page
      for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        const pageStartTime = performance.now();
        
        try {
          onProgress?.(pageNum - 1, totalPages, `Processing page ${pageNum}...`);

          const page = await pdfDocument.getPage(pageNum);
          
          // First try to get text content directly
          const textContent = await page.getTextContent();
          const hasTextContent = textContent.items.length > 0 && 
            textContent.items.some((item: any) => item.str?.trim().length > 0);

          let pageText = '';
          let confidence = 100;

          if (hasTextContent) {
            // Page has extractable text - use it directly
            pageText = textContent.items
              .map((item: any) => item.str)
              .join(' ');
            confidence = 100; // Native text extraction is considered 100% accurate
          } else {
            // Page appears to be image-based, use OCR
            if (!this.isInitialized) {
              await this.initialize();
            }
            
            usedOCR = true;
            onProgress?.(pageNum - 1, totalPages, `Running OCR on page ${pageNum}...`);

            const imageData = await this.renderPageToImage(page, renderQuality);
            const ocrResult = await this.recognizeImage(imageData);
            
            pageText = ocrResult.text;
            confidence = ocrResult.confidence;

            if (confidence < confidenceThreshold) {
              errors.push(`Low OCR confidence on page ${pageNum}: ${confidence.toFixed(1)}%`);
            }
          }

          pages.push({
            pageNumber: pageNum,
            text: pageText,
            confidence,
            hasTextContent,
            processingTimeMs: performance.now() - pageStartTime,
          });

          page.cleanup();
        } catch (pageError) {
          errors.push(`Failed to process page ${pageNum}: ${pageError instanceof Error ? pageError.message : 'Unknown error'}`);
          pages.push({
            pageNumber: pageNum,
            text: '',
            confidence: 0,
            hasTextContent: false,
            processingTimeMs: performance.now() - pageStartTime,
          });
        }
      }

      // Calculate average confidence
      const averageConfidence = pages.length > 0
        ? pages.reduce((sum, p) => sum + p.confidence, 0) / pages.length
        : 0;

      // Combine all page texts
      const combinedText = pages
        .map(p => `--- Page ${p.pageNumber} ---\n${p.text}`)
        .join('\n\n');

      return {
        text: combinedText,
        pages,
        totalPages,
        averageConfidence,
        usedOCR,
        errors,
        processingTimeMs: performance.now() - startTime,
      };

    } catch (error) {
      throw new Error(`PDF extraction failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Extract text from an image file directly
   */
  async extractFromImage(imageData: ImageData | Blob | string): Promise<OCRResult> {
    const startTime = performance.now();

    if (!this.isInitialized) {
      await this.initialize();
    }

    const result = await this.recognizeImage(imageData);

    return {
      text: result.text,
      pages: [{
        pageNumber: 1,
        text: result.text,
        confidence: result.confidence,
        hasTextContent: false,
        processingTimeMs: performance.now() - startTime,
      }],
      totalPages: 1,
      averageConfidence: result.confidence,
      usedOCR: true,
      errors: result.confidence < 60 ? [`Low OCR confidence: ${result.confidence.toFixed(1)}%`] : [],
      processingTimeMs: performance.now() - startTime,
    };
  }

  /**
   * Render a PDF page to an image for OCR processing
   */
  private async renderPageToImage(
    page: PDFPageProxy,
    quality: number = 2
  ): Promise<ImageData> {
    const scale = quality * 2; // Higher scale = better OCR accuracy
    const viewport = page.getViewport({ scale });

    // Create canvas
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { willReadFrequently: true });
    
    if (!context) {
      throw new Error('Failed to create canvas context');
    }

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    // Render PDF page to canvas
    await page.render({
      canvasContext: context,
      viewport: viewport,
      canvas: canvas as unknown as HTMLCanvasElement,
    }).promise;

    // Get image data for OCR
    return context.getImageData(0, 0, canvas.width, canvas.height);
  }

  /**
   * Run OCR on an image
   */
  private async recognizeImage(
    imageData: ImageData | Blob | string
  ): Promise<{ text: string; confidence: number }> {
    if (!this.worker) {
      throw new Error('OCR worker not initialized');
    }

    // Convert ImageData to canvas for Tesseract compatibility
    let input: ImageLike;
    if (imageData instanceof ImageData) {
      const canvas = document.createElement('canvas');
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Failed to create canvas context');
      ctx.putImageData(imageData, 0, 0);
      input = canvas;
    } else {
      input = imageData as ImageLike;
    }

    const result = await this.worker.recognize(input);
    
    return {
      text: result.data.text,
      confidence: result.data.confidence,
    };
  }

  /**
   * Check if a PDF needs OCR (is image-based)
   * Returns true if the PDF has no extractable text
   */
  async needsOCR(pdfBuffer: ArrayBuffer, samplePages: number = 3): Promise<boolean> {
    try {
      const pdfDocument = await pdfjs.getDocument({ data: pdfBuffer }).promise;
      const pagesToCheck = Math.min(samplePages, pdfDocument.numPages);

      for (let pageNum = 1; pageNum <= pagesToCheck; pageNum++) {
        const page = await pdfDocument.getPage(pageNum);
        const textContent = await page.getTextContent();
        
        const hasText = textContent.items.some((item: any) => 
          item.str?.trim().length > 10 // Require at least some substantial text
        );

        page.cleanup();

        if (hasText) {
          return false; // Found text, doesn't need OCR
        }
      }

      return true; // No text found in sampled pages
    } catch (error) {
      // If we can't parse the PDF, assume it needs OCR
      return true;
    }
  }
}

// Singleton instance for reuse
let ocrServiceInstance: OCRService | null = null;

/**
 * Get or create the shared OCR service instance
 */
export function getOCRService(language: string = 'eng'): OCRService {
  if (!ocrServiceInstance) {
    ocrServiceInstance = new OCRService(language);
  }
  return ocrServiceInstance;
}

/**
 * Reset the shared OCR service (useful for testing or language changes)
 */
export function resetOCRService(): void {
  if (ocrServiceInstance) {
    ocrServiceInstance.terminate();
    ocrServiceInstance = null;
  }
}

/**
 * Convenience function for one-off OCR extraction
 */
export async function extractTextFromPDF(
  pdfBuffer: ArrayBuffer,
  options?: OCROptions
): Promise<OCRResult> {
  const service = new OCRService(options?.language);
  try {
    const result = await service.extractFromPDF(pdfBuffer, options);
    await service.terminate();
    return result;
  } catch (error) {
    await service.terminate();
    throw error;
  }
}

/**
 * Convenience function for image OCR
 */
export async function extractTextFromImage(
  imageData: ImageData | Blob | string,
  language: string = 'eng'
): Promise<OCRResult> {
  const service = new OCRService(language);
  try {
    const result = await service.extractFromImage(imageData);
    await service.terminate();
    return result;
  } catch (error) {
    await service.terminate();
    throw error;
  }
}
