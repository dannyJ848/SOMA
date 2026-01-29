import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { VoiceProvider } from './contexts/VoiceContext';
import { AccessibilityProvider } from './accessibility/AccessibilityProvider';
import { I18nProvider } from './i18n/I18nContext';
import { ContentProvider } from './services/ContentService';
import { DebugPanel, setupGlobalErrorHandlers, addDebugLog, checkWebGLSupport } from './components/DebugPanel';
import './styles.css';
import './accessibility/accessibility.css';
import './i18n/i18n.css';

// Initialize global error handlers early
setupGlobalErrorHandlers();

// Import any early errors captured before React loaded
declare global {
  interface Window {
    __earlyErrors?: Array<{
      timestamp: string;
      type: string;
      message: string;
      source?: string;
      stack?: string | null;
    }>;
    __webglSupport?: {
      version: number;
      supported: boolean;
      renderer?: string;
      vendor?: string;
      maxTextureSize?: number;
      error?: string;
    };
  }
}

// Process early-captured errors
if (window.__earlyErrors && window.__earlyErrors.length > 0) {
  window.__earlyErrors.forEach(entry => {
    addDebugLog({
      type: 'error',
      message: `[Early] ${entry.message}`,
      source: entry.source,
      stack: entry.stack || undefined,
      details: { capturedBeforeReact: true },
    });
  });
  // Clear after processing
  window.__earlyErrors = [];
}

// Log WebGL support info from early detection
if (window.__webglSupport) {
  addDebugLog({
    type: 'webgl',
    message: `WebGL ${window.__webglSupport.supported ? 'v' + window.__webglSupport.version : 'not'} supported`,
    details: window.__webglSupport,
  });
}

// Log React initialization
addDebugLog({
  type: 'info',
  message: 'React application initializing',
  details: {
    reactVersion: React.version,
    webglSupport: checkWebGLSupport(),
  },
});

// Detect keyboard navigation for focus styling
function KeyboardNavigationDetector() {
  useEffect(() => {
    let isKeyboardNav = false;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        isKeyboardNav = true;
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      if (isKeyboardNav) {
        isKeyboardNav = false;
        document.body.classList.remove('keyboard-navigation');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return null;
}

// Determine if debug panel should be shown (always on for now to debug iOS issues)
const showDebugPanel = true; // Set to false in production

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nProvider>
      <AccessibilityProvider>
        <VoiceProvider>
          <ContentProvider>
            <KeyboardNavigationDetector />
            <App />
            {/* Debug Panel for iOS error visibility */}
            {showDebugPanel && (
              <DebugPanel
                defaultOpen={false}
                position="bottom-right"
                maxHeight={250}
              />
            )}
          </ContentProvider>
        </VoiceProvider>
      </AccessibilityProvider>
    </I18nProvider>
  </React.StrictMode>
);
