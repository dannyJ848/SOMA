import { useState, useCallback, createContext, useContext, useEffect, ReactNode } from 'react';

// 5-tier complexity levels
export type ComplexityLevel = 1 | 2 | 3 | 4 | 5;

// Level definitions with descriptions
export interface LevelDefinition {
  level: ComplexityLevel;
  name: string;
  shortName: string;
  description: string;
  audience: string;
  characteristics: string[];
  color: string;
}

export const COMPLEXITY_LEVELS: Record<ComplexityLevel, LevelDefinition> = {
  1: {
    level: 1,
    name: '8th Grade',
    shortName: '8th',
    description: 'Simple analogies and everyday language',
    audience: 'General public, young students',
    characteristics: [
      'Simple analogies (e.g., "heart is like a pump")',
      'No medical terminology',
      'Focus on basic concepts',
      'Visual-first explanations',
    ],
    color: '#4ade80', // green
  },
  2: {
    level: 2,
    name: 'High School',
    shortName: 'HS',
    description: 'Basic anatomy/physiology terminology',
    audience: 'High school students, health-curious adults',
    characteristics: [
      'Basic anatomical terms',
      'Simple cause-and-effect',
      'Labeled diagrams',
      'Introduction to body systems',
    ],
    color: '#60a5fa', // blue
  },
  3: {
    level: 3,
    name: 'College',
    shortName: 'UG',
    description: 'Full anatomical terminology and mechanisms',
    audience: 'College students, allied health professionals',
    characteristics: [
      'Full anatomical terminology',
      'Mechanism descriptions',
      'Physiological pathways',
      'Clinical relevance introduced',
    ],
    color: '#a78bfa', // purple
  },
  4: {
    level: 4,
    name: 'Graduate',
    shortName: 'Grad',
    description: 'Detailed molecular mechanisms and research',
    audience: 'Graduate students, researchers',
    characteristics: [
      'Molecular mechanisms',
      'Research-level detail',
      'Pathway interactions',
      'Current literature references',
    ],
    color: '#f97316', // orange
  },
  5: {
    level: 5,
    name: 'Medical Professional',
    shortName: 'MD',
    description: 'Clinical correlations and diagnostic reasoning',
    audience: 'Medical students, physicians, specialists',
    characteristics: [
      'Clinical correlations',
      'Differential diagnosis',
      'Treatment mechanisms',
      'Board-relevant content',
    ],
    color: '#ef4444', // red
  },
};

// Get level by number
export function getLevel(level: ComplexityLevel): LevelDefinition {
  return COMPLEXITY_LEVELS[level];
}

// Get all levels as array
export function getAllLevels(): LevelDefinition[] {
  return Object.values(COMPLEXITY_LEVELS);
}

// Context for complexity level state
interface ComplexityContextType {
  level: ComplexityLevel;
  setLevel: (level: ComplexityLevel) => void;
  levelDef: LevelDefinition;
}

const ComplexityContext = createContext<ComplexityContextType | null>(null);

// Local storage key
const COMPLEXITY_STORAGE_KEY = 'biological-self-complexity-level';

// Provider component
interface ComplexityProviderProps {
  children: ReactNode;
  defaultLevel?: ComplexityLevel;
}

export function ComplexityProvider({ children, defaultLevel = 3 }: ComplexityProviderProps) {
  const [level, setLevelState] = useState<ComplexityLevel>(() => {
    // Try to load from localStorage
    try {
      const stored = localStorage.getItem(COMPLEXITY_STORAGE_KEY);
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (parsed >= 1 && parsed <= 5) {
          return parsed as ComplexityLevel;
        }
      }
    } catch (e) {
      console.warn('Failed to load complexity level:', e);
    }
    return defaultLevel;
  });

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(COMPLEXITY_STORAGE_KEY, level.toString());
    } catch (e) {
      console.warn('Failed to save complexity level:', e);
    }
  }, [level]);

  const setLevel = useCallback((newLevel: ComplexityLevel) => {
    if (newLevel >= 1 && newLevel <= 5) {
      setLevelState(newLevel);
    }
  }, []);

  const value: ComplexityContextType = {
    level,
    setLevel,
    levelDef: COMPLEXITY_LEVELS[level],
  };

  return (
    <ComplexityContext.Provider value={value}>
      {children}
    </ComplexityContext.Provider>
  );
}

// Hook to use complexity context
export function useComplexityLevel(): ComplexityContextType {
  const context = useContext(ComplexityContext);
  if (!context) {
    throw new Error('useComplexityLevel must be used within a ComplexityProvider');
  }
  return context;
}

// Complexity selector component
interface ComplexitySelectorProps {
  compact?: boolean;
  showDescription?: boolean;
  className?: string;
}

export function ComplexitySelector({
  compact = false,
  showDescription = true,
  className = '',
}: ComplexitySelectorProps) {
  const { level, setLevel, levelDef } = useComplexityLevel();

  if (compact) {
    return (
      <div className={`complexity-selector-compact ${className}`}>
        <span className="complexity-label">Level:</span>
        <div className="complexity-buttons">
          {([1, 2, 3, 4, 5] as ComplexityLevel[]).map(l => {
            const def = COMPLEXITY_LEVELS[l];
            return (
              <button
                key={l}
                className={`complexity-btn ${level === l ? 'active' : ''}`}
                onClick={() => setLevel(l)}
                title={`${def.name}: ${def.description}`}
                style={{ '--level-color': def.color } as React.CSSProperties}
              >
                {def.shortName}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={`complexity-selector ${className}`}>
      <div className="complexity-header">
        <h4>Content Complexity</h4>
        <span
          className="current-level-badge"
          style={{ backgroundColor: levelDef.color }}
        >
          {levelDef.name}
        </span>
      </div>

      <div className="complexity-slider-container">
        <input
          type="range"
          className="complexity-slider"
          min="1"
          max="5"
          step="1"
          value={level}
          onChange={(e) => setLevel(parseInt(e.target.value, 10) as ComplexityLevel)}
        />
        <div className="complexity-marks">
          {([1, 2, 3, 4, 5] as ComplexityLevel[]).map(l => (
            <button
              key={l}
              className={`complexity-mark ${level === l ? 'active' : ''}`}
              onClick={() => setLevel(l)}
              style={{ '--level-color': COMPLEXITY_LEVELS[l].color } as React.CSSProperties}
            >
              <span className="mark-dot" />
              <span className="mark-label">{COMPLEXITY_LEVELS[l].shortName}</span>
            </button>
          ))}
        </div>
      </div>

      {showDescription && (
        <div className="complexity-description">
          <p className="complexity-desc-text">{levelDef.description}</p>
          <div className="complexity-audience">
            <span className="audience-label">For:</span>
            <span className="audience-text">{levelDef.audience}</span>
          </div>
          <ul className="complexity-characteristics">
            {levelDef.characteristics.map((char, i) => (
              <li key={i}>{char}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Content wrapper that shows/hides based on complexity level
interface ComplexityContentProps {
  minLevel?: ComplexityLevel;
  maxLevel?: ComplexityLevel;
  exactLevel?: ComplexityLevel;
  children: ReactNode;
  fallback?: ReactNode;
}

export function ComplexityContent({
  minLevel,
  maxLevel,
  exactLevel,
  children,
  fallback = null,
}: ComplexityContentProps) {
  const { level } = useComplexityLevel();

  // Check if content should be shown
  const shouldShow = (() => {
    if (exactLevel !== undefined) {
      return level === exactLevel;
    }

    if (minLevel !== undefined && level < minLevel) {
      return false;
    }

    if (maxLevel !== undefined && level > maxLevel) {
      return false;
    }

    return true;
  })();

  if (!shouldShow) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

// Multi-level content component
interface MultiLevelContentProps {
  content: Partial<Record<ComplexityLevel, ReactNode>>;
  className?: string;
}

export function MultiLevelContent({ content, className = '' }: MultiLevelContentProps) {
  const { level } = useComplexityLevel();

  // Find the best matching content (exact level or closest lower level)
  let displayContent: ReactNode = null;
  let checkLevel = level;

  while (checkLevel >= 1 && !displayContent) {
    displayContent = content[checkLevel as ComplexityLevel];
    checkLevel--;
  }

  // If no lower level content, try higher levels
  if (!displayContent) {
    checkLevel = level + 1;
    while (checkLevel <= 5 && !displayContent) {
      displayContent = content[checkLevel as ComplexityLevel];
      checkLevel++;
    }
  }

  if (!displayContent) {
    return null;
  }

  return <div className={`multi-level-content level-${level} ${className}`}>{displayContent}</div>;
}

// Hook for getting content at current complexity level
export function useMultiLevelContent<T>(content: Partial<Record<ComplexityLevel, T>>): T | undefined {
  const { level } = useComplexityLevel();

  // Find the best matching content
  let result: T | undefined = undefined;
  let checkLevel = level;

  while (checkLevel >= 1 && result === undefined) {
    result = content[checkLevel as ComplexityLevel];
    checkLevel--;
  }

  if (result === undefined) {
    checkLevel = level + 1;
    while (checkLevel <= 5 && result === undefined) {
      result = content[checkLevel as ComplexityLevel];
      checkLevel++;
    }
  }

  return result;
}
