/**
 * Theme System
 * 
 * Dark/Light mode toggle with system preference detection.
 */

import { useState, useEffect, useCallback } from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeColors {
  background: string;
  surface: string;
  primary: string;
  secondary: string;
  text: string;
  textMuted: string;
  border: string;
  accent: string;
}

const THEMES: Record<Exclude<Theme, 'system'>, ThemeColors> = {
  dark: {
    background: '#0a0a14',
    surface: '#1e1e2e',
    primary: '#4a90e2',
    secondary: '#63b3ed',
    text: '#ffffff',
    textMuted: '#888888',
    border: 'rgba(255, 255, 255, 0.1)',
    accent: '#ff6b6b',
  },
  light: {
    background: '#f5f5f5',
    surface: '#ffffff',
    primary: '#2563eb',
    secondary: '#3b82f6',
    text: '#1a1a1a',
    textMuted: '#666666',
    border: 'rgba(0, 0, 0, 0.1)',
    accent: '#dc2626',
  },
};

const STORAGE_KEY = 'biological-self-theme';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load theme preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && (stored === 'dark' || stored === 'light' || stored === 'system')) {
        setThemeState(stored);
      }
    } catch (e) {
      console.error('Failed to load theme:', e);
    }
    setIsLoaded(true);
  }, []);

  // Resolve system preference
  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');

      const handler = (e: MediaQueryListEvent) => {
        setResolvedTheme(e.matches ? 'dark' : 'light');
      };

      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    } else {
      setResolvedTheme(theme);
    }
  }, [theme]);

  // Apply theme to document
  useEffect(() => {
    if (isLoaded) {
      document.documentElement.setAttribute('data-theme', resolvedTheme);
      document.body.style.backgroundColor = THEMES[resolvedTheme].background;
      document.body.style.color = THEMES[resolvedTheme].text;
    }
  }, [resolvedTheme, isLoaded]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch (e) {
      console.error('Failed to save theme:', e);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }, [theme]);

  return {
    theme,
    resolvedTheme,
    colors: THEMES[resolvedTheme],
    setTheme,
    toggleTheme,
    isLoaded,
  };
}

export default useTheme;
