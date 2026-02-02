/**
 * Keyboard Shortcuts Hook
 * 
 * Global keyboard shortcuts for power users.
 */

import { useEffect, useCallback } from 'react';

interface ShortcutConfig {
  key: string;
  ctrl?: boolean;
  alt?: boolean;
  shift?: boolean;
  action: () => void;
  description: string;
}

export function useKeyboardShortcuts(shortcuts: ShortcutConfig[]) {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    shortcuts.forEach((shortcut) => {
      const keyMatch = event.key.toLowerCase() === shortcut.key.toLowerCase();
      const ctrlMatch = !!shortcut.ctrl === event.ctrlKey;
      const altMatch = !!shortcut.alt === event.altKey;
      const shiftMatch = !!shortcut.shift === event.shiftKey;

      if (keyMatch && ctrlMatch && altMatch && shiftMatch) {
        event.preventDefault();
        shortcut.action();
      }
    });
  }, [shortcuts]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}

// Predefined shortcuts for the app
export const APP_SHORTCUTS = {
  // Navigation
  GO_HOME: { key: 'h', ctrl: true, description: 'Go to Home' },
  GO_ANATOMY: { key: 'a', ctrl: true, description: 'Go to Anatomy' },
  GO_CHAT: { key: 'c', ctrl: true, description: 'Open Chat' },
  GO_TIMELINE: { key: 't', ctrl: true, description: 'Go to Timeline' },
  
  // Search
  OPEN_SEARCH: { key: 'k', ctrl: true, description: 'Open Search' },
  QUICK_SEARCH: { key: '/', description: 'Quick Search' },
  
  // Actions
  TOGGLE_3D: { key: 'd', ctrl: true, description: 'Toggle 3D Mode' },
  TOGGLE_LAYERS: { key: 'l', ctrl: true, description: 'Toggle Layers' },
  RESET_VIEW: { key: 'r', ctrl: true, description: 'Reset View' },
  
  // Content
  ZOOM_IN: { key: '+', ctrl: true, description: 'Zoom In' },
  ZOOM_OUT: { key: '-', ctrl: true, description: 'Zoom Out' },
  NEXT_LEVEL: { key: 'ArrowUp', description: 'Next Complexity Level' },
  PREV_LEVEL: { key: 'ArrowDown', description: 'Previous Complexity Level' },
  
  // System
  TOGGLE_THEME: { key: 't', ctrl: true, shift: true, description: 'Toggle Theme' },
  OPEN_SETTINGS: { key: ',', ctrl: true, description: 'Open Settings' },
  CLOSE_MODAL: { key: 'Escape', description: 'Close Modal' },
  HELP: { key: '?', description: 'Show Help' },
};

export default useKeyboardShortcuts;
