import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { VoiceProvider } from './contexts/VoiceContext';
import { AccessibilityProvider } from './accessibility/AccessibilityProvider';
import { I18nProvider } from './i18n/I18nContext';
import './styles.css';
import './accessibility/accessibility.css';
import './i18n/i18n.css';

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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nProvider>
      <AccessibilityProvider>
        <VoiceProvider>
          <KeyboardNavigationDetector />
          <App />
        </VoiceProvider>
      </AccessibilityProvider>
    </I18nProvider>
  </React.StrictMode>
);
