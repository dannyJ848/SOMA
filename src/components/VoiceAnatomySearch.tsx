import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';

// ============================================================================
// Types
// ============================================================================

export type SearchResultType = 
  | 'anatomy'
  | 'condition'
  | 'medication'
  | 'symptom'
  | 'procedure'
  | 'lab'
  | 'system';

export interface VoiceSearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  subtitle?: string;
  description?: string;
  icon?: string;
  
  // Navigation
  regionId?: string; // For anatomy results
  layer?: string;
  
  // Relevance
  relevanceScore: number;
  matchedTerms: string[];
  
  // Action
  action: 'navigate' | 'view' | 'search';
  actionTarget: string;
}

export interface VoiceAnatomySearchProps {
  // Callbacks
  onResultSelect: (result: VoiceSearchResult) => void;
  onSearchStart?: () => void;
  onSearchEnd?: (results: VoiceSearchResult[]) => void;
  onNavigateToRegion?: (regionId: string, layer?: string) => void;
  
  // Configuration
  searchTypes?: SearchResultType[]; // What to search
  maxResults?: number;
  minQueryLength?: number;
  
  // Voice settings
  voiceLanguage?: string;
  voiceContinuous?: boolean;
  
  // Display
  placeholder?: string;
  size?: 'compact' | 'normal' | 'large';
  showRecentSearches?: boolean;
  showTrending?: boolean;
  
  // Style
  className?: string;
}

// ============================================================================
// Main Component
// ============================================================================

export function VoiceAnatomySearch({
  onResultSelect,
  onSearchStart,
  onSearchEnd,
  onNavigateToRegion,
  searchTypes = ['anatomy', 'condition', 'medication'],
  maxResults = 10,
  minQueryLength = 2,
  voiceLanguage = 'en-US',
  voiceContinuous = false,
  placeholder = "Search anatomy or say 'show me the heart'...",
  size = 'normal',
  showRecentSearches = true,
  showTrending = true,
  className = '',
}: VoiceAnatomySearchProps): React.ReactElement {
  const {
    query,
    setQuery,
    results,
    isSearching,
    recentSearches,
    trendingSearches,
    clearRecent,
  } = useVoiceSearch({ minQueryLength, maxResults });

  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    isSupported: isVoiceSupported,
    error: voiceError,
  } = useVoiceSearchInput({
    language: voiceLanguage,
    continuous: voiceContinuous,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle voice transcript
  useEffect(() => {
    if (transcript) {
      setQuery(transcript);
      setIsOpen(true);
    }
  }, [transcript, setQuery]);

  // Notify search end
  useEffect(() => {
    if (!isSearching && results.length > 0) {
      onSearchEnd?.(results);
    }
  }, [isSearching, results, onSearchEnd]);

  // Handle outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && results[highlightedIndex]) {
          handleResultSelect(results[highlightedIndex]);
        } else if (query) {
          handleSearch();
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  }, [highlightedIndex, results, query]);

  const handleToggleListening = useCallback(() => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
      onSearchStart?.();
    }
  }, [isListening, startListening, stopListening, onSearchStart]);

  const handleSearch = useCallback(() => {
    if (query.length >= minQueryLength) {
      onSearchStart?.();
      setIsOpen(true);
      setHighlightedIndex(-1);
    }
  }, [query, minQueryLength, onSearchStart]);

  const handleResultSelect = useCallback((result: VoiceSearchResult) => {
    onResultSelect(result);
    VoiceSearchEngine.addRecentSearch(query);
    
    if (result.regionId && onNavigateToRegion) {
      onNavigateToRegion(result.regionId, result.layer);
    }
    
    setIsOpen(false);
    setQuery('');
  }, [onResultSelect, onNavigateToRegion, query, setQuery]);

  const handleRecentClick = useCallback((recent: string) => {
    setQuery(recent);
    setIsOpen(true);
  }, [setQuery]);

  const handleTrendingClick = useCallback((trending: string) => {
    setQuery(trending);
    setIsOpen(true);
  }, [setQuery]);

  // Filter results by search types
  const filteredResults = useMemo(() => {
    return results.filter(r => searchTypes.includes(r.type));
  }, [results, searchTypes]);

  // Get recent/trending based on query state
  const showSuggestions = !query && isOpen;

  return (
    <div 
      ref={containerRef}
      className={`voice-search ${size} ${className}`}
      onKeyDown={handleKeyDown}
      style={styles.container}
    >
      <VoiceSearchInput
        value={query}
        onChange={(value) => {
          setQuery(value);
          setIsOpen(true);
          setHighlightedIndex(-1);
        }}
        onSubmit={handleSearch}
        isListening={isListening}
        onToggleListening={handleToggleListening}
        placeholder={placeholder}
        size={size}
        isVoiceSupported={isVoiceSupported}
        voiceError={voiceError}
      />

      {isOpen && (
        <div style={styles.dropdown}>
          {isSearching ? (
            <div style={styles.loading}>
              <div style={styles.spinner} />
              <span>Searching...</span>
            </div>
          ) : showSuggestions ? (
            <div style={styles.suggestions}>
              {showRecentSearches && recentSearches.length > 0 && (
                <div style={styles.section}>
                  <div style={styles.sectionHeader}>
                    <span>Recent Searches</span>
                    <button onClick={clearRecent} style={styles.clearBtn}>
                      Clear
                    </button>
                  </div>
                  {recentSearches.map((recent, idx) => (
                    <div
                      key={idx}
                      style={styles.suggestionItem}
                      onClick={() => handleRecentClick(recent)}
                      onMouseEnter={() => setHighlightedIndex(idx)}
                    >
                      <ClockIcon />
                      <span>{recent}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {showTrending && trendingSearches.length > 0 && (
                <div style={styles.section}>
                  <div style={styles.sectionHeader}>
                    <TrendingIcon />
                    <span>Trending</span>
                  </div>
                  {trendingSearches.slice(0, 5).map((item, idx) => (
                    <div
                      key={idx}
                      style={styles.suggestionItem}
                      onClick={() => handleTrendingClick(item.query)}
                      onMouseEnter={() => setHighlightedIndex(idx)}
                    >
                      <span style={styles.trendingRank}>{idx + 1}</span>
                      <span>{item.query}</span>
                      <span style={styles.trendingCount}>{item.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : filteredResults.length > 0 ? (
            <SearchResults
              results={filteredResults}
              query={query}
              onResultClick={handleResultSelect}
              highlightedIndex={highlightedIndex}
            />
          ) : query.length >= minQueryLength ? (
            <div style={styles.empty}>
              <SearchIcon />
              <p>No results found for "{query}"</p>
              <span>Try different keywords or check your spelling</span>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// Search Input Component
// ============================================================================

interface VoiceSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isListening: boolean;
  onToggleListening: () => void;
  placeholder?: string;
  size?: 'compact' | 'normal' | 'large';
  isVoiceSupported?: boolean;
  voiceError?: Error | null;
}

function VoiceSearchInput({
  value,
  onChange,
  onSubmit,
  isListening,
  onToggleListening,
  placeholder,
  size = 'normal',
  isVoiceSupported = true,
  voiceError,
}: VoiceSearchInputProps): React.ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const sizeStyles = {
    compact: { padding: '8px 12px', fontSize: '14px' },
    normal: { padding: '12px 16px', fontSize: '16px' },
    large: { padding: '16px 20px', fontSize: '18px' },
  };

  return (
    <div style={{ ...styles.inputContainer, ...sizeStyles[size] }}>
      <SearchIcon style={styles.searchIcon} />
      
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        style={{
          ...styles.input,
          ...sizeStyles[size],
        }}
        aria-label="Search anatomy"
      />
      
      {value && (
        <button
          onClick={() => onChange('')}
          style={styles.clearButton}
          aria-label="Clear search"
        >
          <CloseIcon />
        </button>
      )}
      
      {isVoiceSupported && (
        <button
          onClick={onToggleListening}
          style={{
            ...styles.micButton,
            ...(isListening ? styles.micButtonActive : {}),
            ...(voiceError ? styles.micButtonError : {}),
          }}
          aria-label={isListening ? 'Stop listening' : 'Start voice search'}
          title={voiceError ? voiceError.message : undefined}
        >
          {isListening ? <ListeningIndicator /> : <MicrophoneIcon />}
        </button>
      )}
    </div>
  );
}

function ListeningIndicator(): React.ReactElement {
  return (
    <div style={styles.listeningIndicator}>
      <span style={{ ...styles.listeningDot, animationDelay: '0ms' }} />
      <span style={{ ...styles.listeningDot, animationDelay: '150ms' }} />
      <span style={{ ...styles.listeningDot, animationDelay: '300ms' }} />
    </div>
  );
}

// ============================================================================
// Search Results Component
// ============================================================================

interface SearchResultsProps {
  results: VoiceSearchResult[];
  query: string;
  onResultClick: (result: VoiceSearchResult) => void;
  onViewAll?: (type: SearchResultType) => void;
  highlightedIndex?: number;
}

function SearchResults({
  results,
  query,
  onResultClick,
  onViewAll,
  highlightedIndex = -1,
}: SearchResultsProps): React.ReactElement {
  // Group results by type
  const grouped = useMemo(() => {
    const groups: Record<SearchResultType, VoiceSearchResult[]> = {
      anatomy: [],
      condition: [],
      medication: [],
      symptom: [],
      procedure: [],
      lab: [],
      system: [],
    };
    
    results.forEach(result => {
      if (groups[result.type]) {
        groups[result.type].push(result);
      }
    });
    
    return groups;
  }, [results]);

  const typeLabels: Record<SearchResultType, string> = {
    anatomy: 'Anatomy',
    condition: 'Conditions',
    medication: 'Medications',
    symptom: 'Symptoms',
    procedure: 'Procedures',
    lab: 'Lab Tests',
    system: 'Body Systems',
  };

  let globalIndex = 0;

  return (
    <div style={styles.resultsContainer}>
      {(Object.keys(grouped) as SearchResultType[]).map(type => {
        const groupResults = grouped[type];
        if (groupResults.length === 0) return null;

        return (
          <div key={type} style={styles.resultGroup}>
            <div style={styles.resultGroupHeader}>
              <TypeIcon type={type} />
              <span>{typeLabels[type]}</span>
              <span style={styles.resultCount}>({groupResults.length})</span>
            </div>
            
            {groupResults.map((result, idx) => {
              const isHighlighted = globalIndex === highlightedIndex;
              globalIndex++;
              
              return (
                <div
                  key={result.id}
                  style={{
                    ...styles.resultItem,
                    ...(isHighlighted ? styles.resultItemHighlighted : {}),
                  }}
                  onClick={() => onResultClick(result)}
                >
                  <div style={styles.resultContent}>
                    <div style={styles.resultTitle}>
                      <HighlightText text={result.title} query={query} />
                    </div>
                    {result.subtitle && (
                      <div style={styles.resultSubtitle}>{result.subtitle}</div>
                    )}
                    {result.description && (
                      <div style={styles.resultDescription}>
                        {result.description}
                      </div>
                    )}
                  </div>
                  
                  {result.regionId && (
                    <span style={styles.resultAction}>Navigate</span>
                  )}
                </div>
              );
            })}
            
            {groupResults.length > 3 && (
              <button
                style={styles.viewAllButton}
                onClick={() => onViewAll?.(type)}
              >
                View all {typeLabels[type].toLowerCase()}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

function HighlightText({ text, query }: { text: string; query: string }): React.ReactElement {
  if (!query) return <>{text}</>;
  
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  
  return (
    <>
      {parts.map((part, i) => 
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} style={styles.highlight}>{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function TypeIcon({ type }: { type: SearchResultType }): React.ReactElement {
  const iconStyle = { width: 16, height: 16, marginRight: 8 };
  
  switch (type) {
    case 'anatomy':
      return <span style={iconStyle}>🫀</span>;
    case 'condition':
      return <span style={iconStyle}>⚕️</span>;
    case 'medication':
      return <span style={iconStyle}>💊</span>;
    case 'symptom':
      return <span style={iconStyle}>🌡️</span>;
    case 'procedure':
      return <span style={iconStyle}>🔬</span>;
    case 'lab':
      return <span style={iconStyle}>🧪</span>;
    case 'system':
      return <span style={iconStyle}>🔄</span>;
    default:
      return <span style={iconStyle}>📋</span>;
  }
}

// ============================================================================
// Search Engine
// ============================================================================

const RECENT_SEARCHES_KEY = 'voiceSearch_recentSearches';
const MAX_RECENT_SEARCHES = 10;

export class VoiceSearchEngine {
  // Search anatomy structures
  static searchAnatomy(query: string, options?: {
    maxResults?: number;
    includeSynonyms?: boolean;
    filterBySystem?: string[];
  }): VoiceSearchResult[] {
    const { maxResults = 10, includeSynonyms = true, filterBySystem } = options || {};
    const normalizedQuery = query.toLowerCase().trim();
    
    let results: VoiceSearchResult[] = [];
    
    for (const item of ANATOMY_SEARCH_INDEX) {
      // Filter by system if specified
      if (filterBySystem && !filterBySystem.includes(item.system)) {
        continue;
      }
      
      // Check name match
      const nameMatch = item.name.toLowerCase().includes(normalizedQuery);
      
      // Check synonym matches
      const synonymMatch = includeSynonyms && item.synonyms.some(
        s => s.toLowerCase().includes(normalizedQuery)
      );
      
      // Check tags match
      const tagMatch = item.tags.some(
        t => t.toLowerCase().includes(normalizedQuery)
      );
      
      if (nameMatch || synonymMatch || tagMatch) {
        const relevanceScore = this.calculateRelevance(item, normalizedQuery, {
          nameMatch,
          synonymMatch,
          tagMatch,
        });
        
        const matchedTerms = [];
        if (nameMatch) matchedTerms.push(item.name);
        if (synonymMatch) {
          matchedTerms.push(...item.synonyms.filter(s => 
            s.toLowerCase().includes(normalizedQuery)
          ));
        }
        
        results.push({
          id: item.id,
          type: 'anatomy',
          title: item.name,
          description: item.description,
          regionId: item.regionId,
          layer: item.layer,
          relevanceScore,
          matchedTerms,
          action: 'navigate',
          actionTarget: item.regionId,
        });
      }
    }
    
    return results
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, maxResults);
  }

  // Search conditions
  static searchConditions(query: string, options?: {
    maxResults?: number;
    filterByRegion?: string[];
  }): VoiceSearchResult[] {
    const { maxResults = 10 } = options || {};
    const normalizedQuery = query.toLowerCase().trim();
    
    // Sample conditions - in real app, this would come from a database
    const conditions = [
      { id: 'hypertension', name: 'Hypertension', synonyms: ['high blood pressure', 'htn'], description: 'High blood pressure condition', system: 'cardiovascular' },
      { id: 'diabetes-type2', name: 'Type 2 Diabetes', synonyms: ['t2d', 'diabetes mellitus'], description: 'Metabolic disorder affecting blood sugar', system: 'endocrine' },
      { id: 'asthma', name: 'Asthma', synonyms: ['reactive airway'], description: 'Chronic inflammatory disease of the airways', system: 'respiratory' },
      { id: 'arrhythmia', name: 'Cardiac Arrhythmia', synonyms: ['irregular heartbeat'], description: 'Irregular heart rhythm', system: 'cardiovascular' },
      { id: 'copd', name: 'COPD', synonyms: ['chronic obstructive pulmonary disease', 'emphysema'], description: 'Chronic lung disease', system: 'respiratory' },
      { id: 'anemia', name: 'Anemia', synonyms: ['low hemoglobin', 'iron deficiency'], description: 'Low red blood cell count', system: 'hematologic' },
    ];
    
    return conditions
      .filter(c => 
        c.name.toLowerCase().includes(normalizedQuery) ||
        c.synonyms.some(s => s.toLowerCase().includes(normalizedQuery))
      )
      .map(c => ({
        id: c.id,
        type: 'condition' as SearchResultType,
        title: c.name,
        description: c.description,
        relevanceScore: c.name.toLowerCase().startsWith(normalizedQuery) ? 1.0 : 0.7,
        matchedTerms: [c.name],
        action: 'view' as const,
        actionTarget: `/conditions/${c.id}`,
      }))
      .slice(0, maxResults);
  }

  // Search medications
  static searchMedications(query: string, options?: {
    maxResults?: number;
  }): VoiceSearchResult[] {
    const { maxResults = 10 } = options || {};
    const normalizedQuery = query.toLowerCase().trim();
    
    // Sample medications
    const medications = [
      { id: 'metformin', name: 'Metformin', category: 'Antidiabetic', description: 'First-line medication for type 2 diabetes' },
      { id: 'lisinopril', name: 'Lisinopril', category: 'ACE Inhibitor', description: 'Used to treat high blood pressure and heart failure' },
      { id: 'atorvastatin', name: 'Atorvastatin', category: 'Statin', description: 'Cholesterol-lowering medication' },
      { id: 'levothyroxine', name: 'Levothyroxine', category: 'Thyroid Hormone', description: 'Thyroid hormone replacement' },
      { id: 'amlodipine', name: 'Amlodipine', category: 'Calcium Channel Blocker', description: 'Used to treat high blood pressure' },
    ];
    
    return medications
      .filter(m => 
        m.name.toLowerCase().includes(normalizedQuery) ||
        m.category.toLowerCase().includes(normalizedQuery)
      )
      .map(m => ({
        id: m.id,
        type: 'medication' as SearchResultType,
        title: m.name,
        subtitle: m.category,
        description: m.description,
        relevanceScore: m.name.toLowerCase().startsWith(normalizedQuery) ? 1.0 : 0.7,
        matchedTerms: [m.name],
        action: 'view' as const,
        actionTarget: `/medications/${m.id}`,
      }))
      .slice(0, maxResults);
  }

  // Fuzzy search for voice input
  static fuzzySearch(query: string, threshold: number = 0.6): VoiceSearchResult[] {
    const normalizedQuery = query.toLowerCase().trim();
    const results: VoiceSearchResult[] = [];
    
    // Combine all search types
    const anatomyResults = this.searchAnatomy(normalizedQuery);
    const conditionResults = this.searchConditions(normalizedQuery);
    const medicationResults = this.searchMedications(normalizedQuery);
    
    results.push(...anatomyResults, ...conditionResults, ...medicationResults);
    
    // Filter by relevance threshold
    return results.filter(r => r.relevanceScore >= threshold);
  }

  // Parse voice query for intent
  static parseVoiceQuery(query: string): {
    intent: 'navigate' | 'search' | 'compare' | 'explain';
    target?: string;
    modifiers: string[];
  } {
    const normalized = query.toLowerCase().trim();
    
    // Navigation intent
    const navigatePatterns = [
      /(?:show|take|go to|navigate to|open)\s+(?:me\s+)?(?:the\s+)?(.+)/i,
      /(?:where is|find)\s+(?:the\s+)?(.+)/i,
    ];
    
    for (const pattern of navigatePatterns) {
      const match = normalized.match(pattern);
      if (match) {
        return {
          intent: 'navigate',
          target: match[1].trim(),
          modifiers: [],
        };
      }
    }
    
    // Compare intent
    const comparePattern = /compare\s+(.+)\s+(?:and|with|to)\s+(.+)/i;
    const compareMatch = normalized.match(comparePattern);
    if (compareMatch) {
      return {
        intent: 'compare',
        target: `${compareMatch[1].trim()} vs ${compareMatch[2].trim()}`,
        modifiers: ['comparison'],
      };
    }
    
    // Explain intent
    const explainPatterns = [
      /(?:what is|explain|tell me about|describe)\s+(?:the\s+)?(.+)/i,
      /how (?:does|do)\s+(.+)\s+work/i,
    ];
    
    for (const pattern of explainPatterns) {
      const match = normalized.match(pattern);
      if (match) {
        return {
          intent: 'explain',
          target: match[1].trim(),
          modifiers: ['educational'],
        };
      }
    }
    
    // Default to search
    return {
      intent: 'search',
      target: normalized,
      modifiers: [],
    };
  }

  // Get recent searches
  static getRecentSearches(): string[] {
    try {
      const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  // Add recent search
  static addRecentSearch(query: string): void {
    if (!query.trim()) return;
    
    try {
      const recent = this.getRecentSearches();
      const updated = [query, ...recent.filter(q => q !== query)].slice(0, MAX_RECENT_SEARCHES);
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    } catch {
      // Ignore storage errors
    }
  }

  // Clear recent searches
  static clearRecentSearches(): void {
    try {
      localStorage.removeItem(RECENT_SEARCHES_KEY);
    } catch {
      // Ignore storage errors
    }
  }

  // Get trending searches (simulated)
  static getTrendingSearches(): Array<{ query: string; count: number }> {
    return [
      { query: 'heart', count: 1245 },
      { query: 'blood pressure', count: 892 },
      { query: 'brain', count: 756 },
      { query: 'lungs', count: 643 },
      { query: 'diabetes', count: 521 },
      { query: 'liver', count: 489 },
      { query: 'kidneys', count: 432 },
      { query: 'cholesterol', count: 398 },
    ];
  }

  // Calculate relevance score
  private static calculateRelevance(
    item: typeof ANATOMY_SEARCH_INDEX[0],
    query: string,
    matches: { nameMatch: boolean; synonymMatch: boolean; tagMatch: boolean }
  ): number {
    let score = 0;
    
    // Exact name match gets highest score
    if (matches.nameMatch) {
      if (item.name.toLowerCase() === query) {
        score = 1.0;
      } else if (item.name.toLowerCase().startsWith(query)) {
        score = 0.9;
      } else {
        score = 0.8;
      }
    }
    // Synonym match
    else if (matches.synonymMatch) {
      score = 0.7;
    }
    // Tag match
    else if (matches.tagMatch) {
      score = 0.5;
    }
    
    return score;
  }
}

// ============================================================================
// Hooks
// ============================================================================

// Main search hook
export function useVoiceSearch(options?: {
  minQueryLength?: number;
  debounceMs?: number;
  maxResults?: number;
}): {
  query: string;
  setQuery: (query: string) => void;
  results: VoiceSearchResult[];
  isSearching: boolean;
  recentSearches: string[];
  trendingSearches: Array<{ query: string; count: number }>;
  clearRecent: () => void;
  search: (query: string) => void;
} {
  const { minQueryLength = 2, debounceMs = 200, maxResults = 10 } = options || {};
  
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<VoiceSearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [trendingSearches, setTrendingSearches] = useState<Array<{ query: string; count: number }>>([]);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  
  // Load recent and trending on mount
  useEffect(() => {
    setRecentSearches(VoiceSearchEngine.getRecentSearches());
    setTrendingSearches(VoiceSearchEngine.getTrendingSearches());
  }, []);
  
  // Perform search
  const performSearch = useCallback((searchQuery: string) => {
    if (searchQuery.length < minQueryLength) {
      setResults([]);
      return;
    }
    
    setIsSearching(true);
    
    // Search all types and combine
    const anatomyResults = VoiceSearchEngine.searchAnatomy(searchQuery, { maxResults });
    const conditionResults = VoiceSearchEngine.searchConditions(searchQuery, { maxResults });
    const medicationResults = VoiceSearchEngine.searchMedications(searchQuery, { maxResults });
    
    const combined = [...anatomyResults, ...conditionResults, ...medicationResults]
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, maxResults);
    
    setResults(combined);
    setIsSearching(false);
  }, [minQueryLength, maxResults]);
  
  // Debounced search
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    
    debounceRef.current = setTimeout(() => {
      performSearch(query);
    }, debounceMs);
    
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query, performSearch, debounceMs]);
  
  const clearRecent = useCallback(() => {
    VoiceSearchEngine.clearRecentSearches();
    setRecentSearches([]);
  }, []);
  
  const search = useCallback((searchQuery: string) => {
    setQuery(searchQuery);
    performSearch(searchQuery);
  }, [performSearch]);
  
  return {
    query,
    setQuery,
    results,
    isSearching,
    recentSearches,
    trendingSearches,
    clearRecent,
    search,
  };
}

// Voice input hook
export function useVoiceSearchInput(options?: {
  language?: string;
  continuous?: boolean;
  onResult?: (text: string) => void;
}): {
  isListening: boolean;
  transcript: string;
  startListening: () => void;
  stopListening: () => void;
  isSupported: boolean;
  error: Error | null;
} {
  const { language = 'en-US', continuous = false, onResult } = options || {};
  
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  
  // Check browser support
  const isSupported = useMemo(() => {
    return typeof window !== 'undefined' && 
           ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);
  }, []);
  
  // Initialize recognition
  useEffect(() => {
    if (!isSupported) return;
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    
    recognitionRef.current = new SpeechRecognition();
    
    const recognition = recognitionRef.current;
    recognition.continuous = continuous;
    recognition.interimResults = true;
    recognition.lang = language;
    
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let finalTranscript = '';
      let interimTranscript = '';
      
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalTranscript += result[0].transcript;
        } else {
          interimTranscript += result[0].transcript;
        }
      }
      
      const currentTranscript = finalTranscript || interimTranscript;
      setTranscript(currentTranscript);
      
      if (finalTranscript && onResult) {
        onResult(finalTranscript);
      }
    };
    
    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setError(new Error(event.error));
      setIsListening(false);
    };
    
    recognition.onend = () => {
      setIsListening(false);
    };
    
    return () => {
      recognition.stop();
    };
  }, [isSupported, language, continuous, onResult]);
  
  const startListening = useCallback(() => {
    if (!recognitionRef.current) return;
    
    try {
      setError(null);
      setTranscript('');
      recognitionRef.current.start();
      setIsListening(true);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to start listening'));
    }
  }, []);
  
  const stopListening = useCallback(() => {
    if (!recognitionRef.current) return;
    
    try {
      recognitionRef.current.stop();
      setIsListening(false);
    } catch (err) {
      // Ignore stop errors
    }
  }, []);
  
  return {
    isListening,
    transcript,
    startListening,
    stopListening,
    isSupported,
    error,
  };
}

// ============================================================================
// Anatomy Search Index
// ============================================================================

export const ANATOMY_SEARCH_INDEX: Array<{
  id: string;
  name: string;
  synonyms: string[];
  system: string;
  regionId: string;
  layer?: string;
  description: string;
  tags: string[];
}> = [
  // Cardiovascular System
  { 
    id: 'heart', 
    name: 'Heart', 
    synonyms: ['cardiac', 'myocardium', 'cor', 'cardiac muscle'], 
    system: 'cardiovascular', 
    regionId: 'heart', 
    description: 'Muscular organ that pumps blood through the circulatory system', 
    tags: ['organ', 'circulation', 'blood', 'cardiac cycle'] 
  },
  { 
    id: 'left-ventricle', 
    name: 'Left Ventricle', 
    synonyms: ['lv'], 
    system: 'cardiovascular', 
    regionId: 'heart', 
    layer: 'internal',
    description: 'Thickest chamber of the heart that pumps oxygenated blood to the body', 
    tags: ['chamber', 'pumping', 'systemic circulation'] 
  },
  { 
    id: 'right-ventricle', 
    name: 'Right Ventricle', 
    synonyms: ['rv'], 
    system: 'cardiovascular', 
    regionId: 'heart', 
    layer: 'internal',
    description: 'Heart chamber that pumps deoxygenated blood to the lungs', 
    tags: ['chamber', 'pumping', 'pulmonary circulation'] 
  },
  { 
    id: 'left-atrium', 
    name: 'Left Atrium', 
    synonyms: ['la'], 
    system: 'cardiovascular', 
    regionId: 'heart', 
    layer: 'internal',
    description: 'Upper heart chamber receiving oxygenated blood from lungs', 
    tags: ['chamber', 'receiving', 'pulmonary veins'] 
  },
  { 
    id: 'right-atrium', 
    name: 'Right Atrium', 
    synonyms: ['ra'], 
    system: 'cardiovascular', 
    regionId: 'heart', 
    layer: 'internal',
    description: 'Upper heart chamber receiving deoxygenated blood from body', 
    tags: ['chamber', 'receiving', 'vena cava'] 
  },
  { 
    id: 'aorta', 
    name: 'Aorta', 
    synonyms: ['aortic arch', 'ascending aorta', 'descending aorta'], 
    system: 'cardiovascular', 
    regionId: 'aorta', 
    description: 'Largest artery carrying blood from heart to body', 
    tags: ['artery', 'major vessel', 'systemic'] 
  },
  { 
    id: 'coronary-arteries', 
    name: 'Coronary Arteries', 
    synonyms: ['coronary', 'cardiac arteries'], 
    system: 'cardiovascular', 
    regionId: 'heart', 
    description: 'Arteries supplying blood to heart muscle itself', 
    tags: ['artery', 'heart supply', 'circulation'] 
  },
  
  // Respiratory System
  { 
    id: 'lungs', 
    name: 'Lungs', 
    synonyms: ['pulmonary', 'pulmonary organs'], 
    system: 'respiratory', 
    regionId: 'lungs', 
    description: 'Pair of organs for gas exchange', 
    tags: ['organ', 'breathing', 'oxygen', 'gas exchange'] 
  },
  { 
    id: 'left-lung', 
    name: 'Left Lung', 
    synonyms: [], 
    system: 'respiratory', 
    regionId: 'lungs', 
    layer: 'left',
    description: 'Left pulmonary organ with two lobes', 
    tags: ['organ', 'lobes', 'respiration'] 
  },
  { 
    id: 'right-lung', 
    name: 'Right Lung', 
    synonyms: [], 
    system: 'respiratory', 
    regionId: 'lungs', 
    layer: 'right',
    description: 'Right pulmonary organ with three lobes', 
    tags: ['organ', 'lobes', 'respiration'] 
  },
  { 
    id: 'trachea', 
    name: 'Trachea', 
    synonyms: ['windpipe'], 
    system: 'respiratory', 
    regionId: 'airway', 
    description: 'Tube connecting larynx to bronchi of the lungs', 
    tags: ['airway', 'passage', 'breathing tube'] 
  },
  { 
    id: 'bronchi', 
    name: 'Bronchi', 
    synonyms: ['bronchial tubes'], 
    system: 'respiratory', 
    regionId: 'lungs', 
    layer: 'internal',
    description: 'Main passageways into the lungs', 
    tags: ['airway', 'passage', 'branching'] 
  },
  { 
    id: 'diaphragm', 
    name: 'Diaphragm', 
    synonyms: ['thoracic diaphragm'], 
    system: 'respiratory', 
    regionId: 'diaphragm', 
    description: 'Primary muscle of respiration', 
    tags: ['muscle', 'breathing', 'contraction'] 
  },
  
  // Nervous System
  { 
    id: 'brain', 
    name: 'Brain', 
    synonyms: ['cerebrum', 'encephalon'], 
    system: 'nervous', 
    regionId: 'brain', 
    description: 'Central organ of the nervous system', 
    tags: ['organ', 'cognition', 'control center'] 
  },
  { 
    id: 'cerebrum', 
    name: 'Cerebrum', 
    synonyms: ['cerebral cortex', 'forebrain'], 
    system: 'nervous', 
    regionId: 'brain', 
    layer: 'cortex',
    description: 'Largest part of the brain, responsible for higher brain function', 
    tags: ['brain region', 'cognition', 'thinking'] 
  },
  { 
    id: 'cerebellum', 
    name: 'Cerebellum', 
    synonyms: ['little brain'], 
    system: 'nervous', 
    regionId: 'brain', 
    description: 'Region of the brain that coordinates movement and balance', 
    tags: ['brain region', 'coordination', 'balance'] 
  },
  { 
    id: 'brainstem', 
    name: 'Brainstem', 
    synonyms: ['brain stem'], 
    system: 'nervous', 
    regionId: 'brain', 
    layer: 'deep',
    description: 'Connection between brain and spinal cord, controls vital functions', 
    tags: ['brain region', 'vital functions', 'autonomic'] 
  },
  { 
    id: 'spinal-cord', 
    name: 'Spinal Cord', 
    synonyms: ['spine', 'vertebral column'], 
    system: 'nervous', 
    regionId: 'spine', 
    description: 'Long, thin tubular structure of nervous tissue', 
    tags: ['nervous tissue', 'reflexes', 'signal transmission'] 
  },
  
  // Digestive System
  { 
    id: 'stomach', 
    name: 'Stomach', 
    synonyms: ['gastric'], 
    system: 'digestive', 
    regionId: 'abdomen', 
    description: 'Muscular organ where food is mixed with gastric juices', 
    tags: ['organ', 'digestion', 'gastric'] 
  },
  { 
    id: 'liver', 
    name: 'Liver', 
    synonyms: ['hepatic'], 
    system: 'digestive', 
    regionId: 'abdomen', 
    layer: 'upper',
    description: 'Largest internal organ, produces bile and processes nutrients', 
    tags: ['organ', 'metabolism', 'detoxification'] 
  },
  { 
    id: 'small-intestine', 
    name: 'Small Intestine', 
    synonyms: ['bowel', 'gut'], 
    system: 'digestive', 
    regionId: 'abdomen', 
    layer: 'lower',
    description: 'Organ where most digestion and nutrient absorption occurs', 
    tags: ['organ', 'digestion', 'absorption'] 
  },
  { 
    id: 'large-intestine', 
    name: 'Large Intestine', 
    synonyms: ['colon', 'bowel'], 
    system: 'digestive', 
    regionId: 'abdomen', 
    layer: 'lower',
    description: 'Final section of the digestive tract absorbing water', 
    tags: ['organ', 'digestion', 'water absorption'] 
  },
  
  // Urinary System
  { 
    id: 'kidneys', 
    name: 'Kidneys', 
    synonyms: ['renal'], 
    system: 'urinary', 
    regionId: 'retroperitoneal', 
    description: 'Pair of organs filtering blood and producing urine', 
    tags: ['organ', 'filtration', 'urine production'] 
  },
  { 
    id: 'left-kidney', 
    name: 'Left Kidney', 
    synonyms: [], 
    system: 'urinary', 
    regionId: 'retroperitoneal', 
    layer: 'left',
    description: 'Left organ filtering blood', 
    tags: ['organ', 'filtration'] 
  },
  { 
    id: 'right-kidney', 
    name: 'Right Kidney', 
    synonyms: [], 
    system: 'urinary', 
    regionId: 'retroperitoneal', 
    layer: 'right',
    description: 'Right organ filtering blood', 
    tags: ['organ', 'filtration'] 
  },
  { 
    id: 'bladder', 
    name: 'Urinary Bladder', 
    synonyms: ['bladder'], 
    system: 'urinary', 
    regionId: 'pelvis', 
    description: 'Hollow organ storing urine', 
    tags: ['organ', 'storage', 'urination'] 
  },
  
  // Endocrine System
  { 
    id: 'thyroid', 
    name: 'Thyroid Gland', 
    synonyms: ['thyroid'], 
    system: 'endocrine', 
    regionId: 'neck', 
    description: 'Gland producing hormones regulating metabolism', 
    tags: ['gland', 'hormones', 'metabolism'] 
  },
  { 
    id: 'pancreas', 
    name: 'Pancreas', 
    synonyms: [], 
    system: 'endocrine', 
    regionId: 'abdomen', 
    description: 'Gland producing insulin and digestive enzymes', 
    tags: ['gland', 'insulin', 'digestion'] 
  },
  { 
    id: 'adrenals', 
    name: 'Adrenal Glands', 
    synonyms: ['adrenals', 'suprarenal'], 
    system: 'endocrine', 
    regionId: 'retroperitoneal', 
    description: 'Glands producing stress hormones and regulating metabolism', 
    tags: ['gland', 'hormones', 'stress'] 
  },
  
  // Reproductive System
  { 
    id: 'testes', 
    name: 'Testes', 
    synonyms: ['testicles', 'gonads'], 
    system: 'reproductive', 
    regionId: 'pelvis', 
    layer: 'male',
    description: 'Male reproductive organs producing sperm and testosterone', 
    tags: ['organ', 'reproduction', 'hormones'] 
  },
  { 
    id: 'ovaries', 
    name: 'Ovaries', 
    synonyms: ['gonads'], 
    system: 'reproductive', 
    regionId: 'pelvis', 
    layer: 'female',
    description: 'Female reproductive organs producing eggs and hormones', 
    tags: ['organ', 'reproduction', 'hormones'] 
  },
  { 
    id: 'uterus', 
    name: 'Uterus', 
    synonyms: ['womb'], 
    system: 'reproductive', 
    regionId: 'pelvis', 
    layer: 'female',
    description: 'Hollow organ where fetal development occurs', 
    tags: ['organ', 'reproduction', 'pregnancy'] 
  },
  
  // Skeletal System
  { 
    id: 'skull', 
    name: 'Skull', 
    synonyms: ['cranium'], 
    system: 'skeletal', 
    regionId: 'head', 
    description: 'Bony structure protecting the brain', 
    tags: ['bone', 'protection', 'cranium'] 
  },
  { 
    id: 'ribcage', 
    name: 'Ribcage', 
    synonyms: ['thoracic cage', 'rib cage'], 
    system: 'skeletal', 
    regionId: 'thorax', 
    description: 'Bony structure protecting heart and lungs', 
    tags: ['bone', 'protection', 'thoracic'] 
  },
  { 
    id: 'spine-skeletal', 
    name: 'Spinal Column', 
    synonyms: ['vertebrae', 'backbone', 'spine'], 
    system: 'skeletal', 
    regionId: 'spine', 
    description: 'Series of vertebrae extending from skull to pelvis', 
    tags: ['bone', 'support', 'vertebrae'] 
  },
  { 
    id: 'pelvis', 
    name: 'Pelvis', 
    synonyms: ['pelvic girdle'], 
    system: 'skeletal', 
    regionId: 'pelvis', 
    description: 'Bony structure connecting spine to lower limbs', 
    tags: ['bone', 'support', 'girdle'] 
  },
];

// ============================================================================
// Styles
// ============================================================================

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: 'relative',
    width: '100%',
    maxWidth: '600px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '12px 16px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'all 0.2s ease',
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    backgroundColor: 'transparent',
    color: '#1f2937',
  },
  searchIcon: {
    width: 20,
    height: 20,
    color: '#6b7280',
    flexShrink: 0,
  },
  clearButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    borderRadius: '4px',
    color: '#6b7280',
  },
  micButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    border: 'none',
    backgroundColor: '#f3f4f6',
    cursor: 'pointer',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    color: '#6b7280',
  },
  micButtonActive: {
    backgroundColor: '#ef4444',
    color: '#ffffff',
  },
  micButtonError: {
    backgroundColor: '#fef2f2',
    color: '#dc2626',
  },
  listeningIndicator: {
    display: 'flex',
    gap: '3px',
    alignItems: 'center',
  },
  listeningDot: {
    width: '4px',
    height: '4px',
    backgroundColor: 'currentColor',
    borderRadius: '50%',
    animation: 'pulse 1s ease-in-out infinite',
  },
  dropdown: {
    position: 'absolute',
    top: 'calc(100% + 8px)',
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
    maxHeight: '500px',
    overflowY: 'auto',
    zIndex: 1000,
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    padding: '24px',
    color: '#6b7280',
  },
  spinner: {
    width: '20px',
    height: '20px',
    border: '2px solid #e5e7eb',
    borderTopColor: '#3b82f6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  suggestions: {
    padding: '8px 0',
  },
  section: {
    padding: '8px 0',
    borderBottom: '1px solid #f3f4f6',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 16px',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    color: '#6b7280',
    letterSpacing: '0.5px',
  },
  clearBtn: {
    fontSize: '11px',
    color: '#3b82f6',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '2px 6px',
    borderRadius: '4px',
  },
  suggestionItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 16px',
    cursor: 'pointer',
    transition: 'background-color 0.15s ease',
    color: '#374151',
  },
  trendingRank: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    backgroundColor: '#f3f4f6',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 600,
    color: '#6b7280',
  },
  trendingCount: {
    marginLeft: 'auto',
    fontSize: '12px',
    color: '#9ca3af',
  },
  empty: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '32px',
    textAlign: 'center',
    color: '#6b7280',
  },
  resultsContainer: {
    padding: '8px 0',
  },
  resultGroup: {
    borderBottom: '1px solid #f3f4f6',
    padding: '8px 0',
  },
  resultGroupHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    color: '#6b7280',
    letterSpacing: '0.5px',
  },
  resultCount: {
    marginLeft: '6px',
    color: '#9ca3af',
    fontWeight: 400,
  },
  resultItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    padding: '12px 16px',
    cursor: 'pointer',
    transition: 'background-color 0.15s ease',
    borderLeft: '3px solid transparent',
  },
  resultItemHighlighted: {
    backgroundColor: '#eff6ff',
    borderLeftColor: '#3b82f6',
  },
  resultContent: {
    flex: 1,
    minWidth: 0,
  },
  resultTitle: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#1f2937',
    marginBottom: '2px',
  },
  resultSubtitle: {
    fontSize: '12px',
    color: '#6b7280',
    marginBottom: '2px',
  },
  resultDescription: {
    fontSize: '12px',
    color: '#9ca3af',
    lineHeight: 1.4,
  },
  resultAction: {
    fontSize: '11px',
    color: '#3b82f6',
    fontWeight: 500,
    whiteSpace: 'nowrap',
  },
  viewAllButton: {
    display: 'block',
    width: '100%',
    padding: '10px 16px',
    textAlign: 'left',
    fontSize: '13px',
    color: '#3b82f6',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    marginTop: '4px',
  },
  highlight: {
    backgroundColor: '#fef3c7',
    color: '#92400e',
    fontWeight: 500,
    borderRadius: '2px',
    padding: '0 2px',
  },
};

// ============================================================================
// Icon Components
// ============================================================================

function SearchIcon(props: { style?: React.CSSProperties }): React.ReactElement {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={props.style}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function CloseIcon(): React.ReactElement {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function MicrophoneIcon(): React.ReactElement {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 19v3" />
      <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    </svg>
  );
}

function ClockIcon(): React.ReactElement {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ opacity: 0.6 }}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function TrendingIcon(): React.ReactElement {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginRight: 6 }}
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

// ============================================================================
// Type Definitions for Speech Recognition

