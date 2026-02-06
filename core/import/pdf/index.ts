export * from './types';
export { pdfImportStore } from './store';
export { 
  OCRService, 
  getOCRService, 
  extractTextFromPDF, 
  extractTextFromImage, 
  configurePDFWorker,
  type OCRResult, 
  type OCROptions 
} from '../ocr-service';
