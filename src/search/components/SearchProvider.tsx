/**
 * SearchProvider - Search context and state management
 * Provides search functionality throughout the application
 */

import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useEffect,
  useMemo,
  ReactNode,
} from 'react';
import {
  SearchEngine,
  SearchQuery,
  SearchResult,
  SearchResponse,
  SearchCategory,
  SearchFilters,
} from '../core/searchEngine';
import { SearchIndex, createSearchIndex } from '../core/searchIndex';

// Types
export interface SearchState {
  query: string;
  results: SearchResult[];
  totalCount: number;
  categories: Array<{ category: SearchCategory; count: number }>;
  suggestions: string[];
  isLoading: boolean;
  error: string | null;
  filters: SearchFilters;
  selectedCategories: SearchCategory[];
  recentSearches: string[];
  popularSearches: string[];
  searchTime: number;
  hasMore: boolean;
  currentPage: number;
  isVoiceSearchActive: boolean;
  isSearchOpen: boolean;
}

type SearchAction =
  | { type: 'SET_QUERY'; payload: string }
  | { type: 'SET_RESULTS'; payload: SearchResponse }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_FILTERS'; payload: SearchFilters }
  | { type: 'SET_CATEGORIES'; payload: SearchCategory[] }
  | { type: 'ADD_TO_HISTORY'; payload: string }
  | { type: 'CLEAR_HISTORY' }
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'CLEAR_RESULTS' }
  | { type: 'SET_VOICE_SEARCH'; payload: boolean }
  | { type: 'TOGGLE_SEARCH_OPEN'; payload?: boolean }
  | { type: 'SET_POPULAR_SEARCHES'; payload: string[] };

interface SearchContextValue {
  state: SearchState;
  search: (query: string) => Promise<void>;
  searchWithFilters: (query: SearchQuery) => Promise<void>;
  instantSearch: (query: string) => SearchResult[];
  getSuggestions: (partial: string) => string[];
  setFilters: (filters: SearchFilters) => void;
  setCategories: (categories: SearchCategory[]) => void;
  clearResults: () => void;
  clearHistory: () => void;
  loadMore: () => Promise<void>;
  startVoiceSearch: () => void;
  stopVoiceSearch: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
}

// Initial state
const initialState: SearchState = {
  query: '',
  results: [],
  totalCount: 0,
  categories: [],
  suggestions: [],
  isLoading: false,
  error: null,
  filters: {},
  selectedCategories: [],
  recentSearches: [],
  popularSearches: [],
  searchTime: 0,
  hasMore: false,
  currentPage: 0,
  isVoiceSearchActive: false,
  isSearchOpen: false,
};

// Reducer
function searchReducer(state: SearchState, action: SearchAction): SearchState {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, query: action.payload };

    case 'SET_RESULTS':
      return {
        ...state,
        results: state.currentPage === 0
          ? action.payload.results
          : [...state.results, ...action.payload.results],
        totalCount: action.payload.totalCount,
        categories: action.payload.categories,
        suggestions: action.payload.suggestions,
        searchTime: action.payload.searchTime,
        hasMore: action.payload.hasMore,
        isLoading: false,
        error: null,
      };

    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };

    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };

    case 'SET_FILTERS':
      return { ...state, filters: action.payload, currentPage: 0 };

    case 'SET_CATEGORIES':
      return { ...state, selectedCategories: action.payload, currentPage: 0 };

    case 'ADD_TO_HISTORY':
      const newHistory = [
        action.payload,
        ...state.recentSearches.filter(s => s !== action.payload),
      ].slice(0, 20);
      return { ...state, recentSearches: newHistory };

    case 'CLEAR_HISTORY':
      return { ...state, recentSearches: [] };

    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };

    case 'CLEAR_RESULTS':
      return {
        ...state,
        query: '',
        results: [],
        totalCount: 0,
        categories: [],
        suggestions: [],
        currentPage: 0,
        hasMore: false,
      };

    case 'SET_VOICE_SEARCH':
      return { ...state, isVoiceSearchActive: action.payload };

    case 'TOGGLE_SEARCH_OPEN':
      return {
        ...state,
        isSearchOpen: action.payload !== undefined ? action.payload : !state.isSearchOpen,
      };

    case 'SET_POPULAR_SEARCHES':
      return { ...state, popularSearches: action.payload };

    default:
      return state;
  }
}

// Context
const SearchContext = createContext<SearchContextValue | null>(null);

// Provider props
interface SearchProviderProps {
  children: ReactNode;
  initialData?: {
    anatomy?: unknown[];
    conditions?: unknown[];
    medications?: unknown[];
    symptoms?: unknown[];
    labTests?: unknown[];
    procedures?: unknown[];
    encyclopedia?: unknown[];
    educational?: unknown[];
  };
}

// Storage key for persistence
const STORAGE_KEY = 'biological-self-search-history';

/**
 * SearchProvider component
 */
export function SearchProvider({ children, initialData }: SearchProviderProps) {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  // Initialize search engine and index
  const { searchEngine, searchIndex } = useMemo(() => {
    const index = createSearchIndex();
    const engine = new SearchEngine(index);
    return { searchEngine: engine, searchIndex: index };
  }, []);

  // Load initial data into index
  useEffect(() => {
    if (initialData) {
      // Transform and add data to index
      // This would be customized based on your data structure
    }
  }, [initialData, searchIndex]);

  // Load search history from storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const history = JSON.parse(stored);
        history.forEach((term: string) => {
          dispatch({ type: 'ADD_TO_HISTORY', payload: term });
        });
      }
    } catch (error) {
      console.error('Failed to load search history:', error);
    }
  }, []);

  // Save search history to storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.recentSearches));
    } catch (error) {
      console.error('Failed to save search history:', error);
    }
  }, [state.recentSearches]);

  // Load popular searches
  useEffect(() => {
    const popular = searchEngine.getPopularSearches(10);
    dispatch({ type: 'SET_POPULAR_SEARCHES', payload: popular });
  }, [searchEngine]);

  // Main search function
  const search = useCallback(
    async (query: string) => {
      if (!query.trim()) {
        dispatch({ type: 'CLEAR_RESULTS' });
        return;
      }

      dispatch({ type: 'SET_QUERY', payload: query });
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_PAGE', payload: 0 });

      try {
        const response = await searchEngine.search({
          term: query,
          categories: state.selectedCategories.length > 0
            ? state.selectedCategories
            : undefined,
          filters: state.filters,
          limit: 20,
          offset: 0,
        });

        dispatch({ type: 'SET_RESULTS', payload: response });
        dispatch({ type: 'ADD_TO_HISTORY', payload: query });
      } catch (error) {
        dispatch({
          type: 'SET_ERROR',
          payload: error instanceof Error ? error.message : 'Search failed',
        });
      }
    },
    [searchEngine, state.selectedCategories, state.filters]
  );

  // Search with custom query
  const searchWithFilters = useCallback(
    async (query: SearchQuery) => {
      dispatch({ type: 'SET_QUERY', payload: query.term });
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_PAGE', payload: 0 });

      try {
        const response = await searchEngine.search(query);
        dispatch({ type: 'SET_RESULTS', payload: response });
        dispatch({ type: 'ADD_TO_HISTORY', payload: query.term });
      } catch (error) {
        dispatch({
          type: 'SET_ERROR',
          payload: error instanceof Error ? error.message : 'Search failed',
        });
      }
    },
    [searchEngine]
  );

  // Instant search for autocomplete
  const instantSearch = useCallback(
    (query: string): SearchResult[] => {
      return searchEngine.instantSearch(query, 5);
    },
    [searchEngine]
  );

  // Get suggestions
  const getSuggestions = useCallback(
    (partial: string): string[] => {
      return searchEngine.getSuggestions(partial, 10);
    },
    [searchEngine]
  );

  // Set filters
  const setFilters = useCallback((filters: SearchFilters) => {
    dispatch({ type: 'SET_FILTERS', payload: filters });
  }, []);

  // Set categories
  const setCategories = useCallback((categories: SearchCategory[]) => {
    dispatch({ type: 'SET_CATEGORIES', payload: categories });
  }, []);

  // Clear results
  const clearResults = useCallback(() => {
    dispatch({ type: 'CLEAR_RESULTS' });
  }, []);

  // Clear history
  const clearHistory = useCallback(() => {
    dispatch({ type: 'CLEAR_HISTORY' });
    searchEngine.clearHistory();
  }, [searchEngine]);

  // Load more results
  const loadMore = useCallback(async () => {
    if (!state.hasMore || state.isLoading) return;

    const nextPage = state.currentPage + 1;
    dispatch({ type: 'SET_PAGE', payload: nextPage });
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      const response = await searchEngine.search({
        term: state.query,
        categories: state.selectedCategories.length > 0
          ? state.selectedCategories
          : undefined,
        filters: state.filters,
        limit: 20,
        offset: nextPage * 20,
      });

      dispatch({ type: 'SET_RESULTS', payload: response });
    } catch (error) {
      dispatch({
        type: 'SET_ERROR',
        payload: error instanceof Error ? error.message : 'Failed to load more',
      });
    }
  }, [searchEngine, state]);

  // Voice search
  const startVoiceSearch = useCallback(() => {
    dispatch({ type: 'SET_VOICE_SEARCH', payload: true });
  }, []);

  const stopVoiceSearch = useCallback(() => {
    dispatch({ type: 'SET_VOICE_SEARCH', payload: false });
  }, []);

  // Search modal controls
  const openSearch = useCallback(() => {
    dispatch({ type: 'TOGGLE_SEARCH_OPEN', payload: true });
  }, []);

  const closeSearch = useCallback(() => {
    dispatch({ type: 'TOGGLE_SEARCH_OPEN', payload: false });
  }, []);

  const toggleSearch = useCallback(() => {
    dispatch({ type: 'TOGGLE_SEARCH_OPEN' });
  }, []);

  // Keyboard shortcut (Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleSearch();
      }
      if (e.key === 'Escape' && state.isSearchOpen) {
        closeSearch();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.isSearchOpen, toggleSearch, closeSearch]);

  const value: SearchContextValue = {
    state,
    search,
    searchWithFilters,
    instantSearch,
    getSuggestions,
    setFilters,
    setCategories,
    clearResults,
    clearHistory,
    loadMore,
    startVoiceSearch,
    stopVoiceSearch,
    openSearch,
    closeSearch,
    toggleSearch,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

/**
 * Hook to access search context
 */
export function useSearchContext(): SearchContextValue {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
}

export default SearchProvider;
