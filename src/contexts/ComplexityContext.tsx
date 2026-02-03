/**
 * Complexity Context
 *
 * Provides app-wide access to the user's preferred complexity level.
 * Level 1 = 8th Grade (Foundation)
 * Level 2 = High School (Intermediate)
 * Level 3 = College (Advanced)
 * Level 4 = Graduate (Comprehensive)
 * Level 5 = MD/Professional (Clinical)
 */

import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';

export type ComplexityLevel = 1 | 2 | 3 | 4 | 5;

export const COMPLEXITY_LABELS: Record<ComplexityLevel, string> = {
  1: 'Foundation',
  2: 'Intermediate',
  3: 'Advanced',
  4: 'Comprehensive',
  5: 'Clinical'
};

export const COMPLEXITY_DESCRIPTIONS: Record<ComplexityLevel, string> = {
  1: '8th Grade - Simple explanations with everyday language',
  2: 'High School - Basic medical terminology introduced',
  3: 'College - Full terminology with detailed explanations',
  4: 'Graduate - In-depth mechanisms and research context',
  5: 'MD/Professional - Clinical correlations and advanced concepts'
};

interface ComplexityContextValue {
  level: ComplexityLevel;
  setLevel: (level: ComplexityLevel) => void;
  label: string;
  description: string;
  // Per-section overrides (optional)
  sectionLevels: Record<string, ComplexityLevel>;
  setSectionLevel: (section: string, level: ComplexityLevel) => void;
  getSectionLevel: (section: string) => ComplexityLevel;
  clearSectionLevel: (section: string) => void;
}

const ComplexityContext = createContext<ComplexityContextValue | null>(null);

export function ComplexityProvider({ children, defaultLevel = 3 }: { children: ReactNode; defaultLevel?: ComplexityLevel }) {
  const [level, setLevelState] = useState<ComplexityLevel>(defaultLevel);
  const [sectionLevels, setSectionLevels] = useState<Record<string, ComplexityLevel>>({});

  const setLevel = useCallback((newLevel: ComplexityLevel) => {
    setLevelState(newLevel);
    // Persist to localStorage
    localStorage.setItem('complexity-level', String(newLevel));
  }, []);

  const setSectionLevel = useCallback((section: string, sectionLevel: ComplexityLevel) => {
    setSectionLevels(prev => ({ ...prev, [section]: sectionLevel }));
  }, []);

  const getSectionLevel = useCallback((section: string): ComplexityLevel => {
    return sectionLevels[section] ?? level;
  }, [sectionLevels, level]);

  const clearSectionLevel = useCallback((section: string) => {
    setSectionLevels(prev => {
      const next = { ...prev };
      delete next[section];
      return next;
    });
  }, []);

  const contextValue = useMemo<ComplexityContextValue>(() => ({
    level,
    setLevel,
    label: COMPLEXITY_LABELS[level],
    description: COMPLEXITY_DESCRIPTIONS[level],
    sectionLevels,
    setSectionLevel,
    getSectionLevel,
    clearSectionLevel,
  }), [level, sectionLevels, setLevel, setSectionLevel, getSectionLevel, clearSectionLevel]);

  return (
    <ComplexityContext.Provider value={contextValue}>
      {children}
    </ComplexityContext.Provider>
  );
}

export function useComplexity() {
  const context = useContext(ComplexityContext);
  if (!context) {
    throw new Error('useComplexity must be used within a ComplexityProvider');
  }
  return context;
}

// Hook for getting complexity for a specific section
export function useSectionComplexity(section: string) {
  const { getSectionLevel, setSectionLevel, clearSectionLevel, level: globalLevel } = useComplexity();

  return {
    level: getSectionLevel(section),
    setLevel: (newLevel: ComplexityLevel) => setSectionLevel(section, newLevel),
    clearOverride: () => clearSectionLevel(section),
    isOverridden: getSectionLevel(section) !== globalLevel,
    globalLevel,
  };
}

export default ComplexityContext;
