/**
 * SearchBar - Main search input component
 * Features autocomplete, voice search, and keyboard shortcuts
 */

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  KeyboardEvent,
  ChangeEvent,
  FormEvent,
} from 'react';
import { useSearchContext } from './SearchProvider';
import SearchSuggestions from './SearchSuggestions';

export interface SearchBarProps {
  placeholder?: string;
  autoFocus?: boolean;
  showVoiceSearch?: boolean;
  showShortcut?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'minimal' | 'outlined';
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
}

export function SearchBar({
  placeholder = 'Search anatomy, conditions, medications...',
  autoFocus = false,
  showVoiceSearch = true,
  showShortcut = true,
  size = 'medium',
  variant = 'default',
  onFocus,
  onBlur,
  className = '',
}: SearchBarProps) {
  const {
    state,
    search,
    getSuggestions,
    instantSearch,
    clearResults,
    startVoiceSearch,
    stopVoiceSearch,
  } = useSearchContext();

  const [inputValue, setInputValue] = useState(state.query);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [instantResults, setInstantResults] = useState<typeof state.results>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Sync input with state query
  useEffect(() => {
    setInputValue(state.query);
  }, [state.query]);

  // Handle input change with debounce
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value);
      setSelectedIndex(-1);

      // Clear previous debounce
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      if (!value.trim()) {
        setSuggestions([]);
        setInstantResults([]);
        setShowSuggestions(false);
        return;
      }

      // Debounce suggestions
      debounceRef.current = setTimeout(() => {
        const newSuggestions = getSuggestions(value);
        setSuggestions(newSuggestions);

        const results = instantSearch(value);
        setInstantResults(results);

        setShowSuggestions(true);
      }, 150);
    },
    [getSuggestions, instantSearch]
  );

  // Handle form submission
  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (inputValue.trim()) {
        search(inputValue.trim());
        setShowSuggestions(false);
      }
    },
    [inputValue, search]
  );

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const totalItems = suggestions.length + instantResults.length;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev =>
            prev < totalItems - 1 ? prev + 1 : 0
          );
          break;

        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev =>
            prev > 0 ? prev - 1 : totalItems - 1
          );
          break;

        case 'Enter':
          if (selectedIndex >= 0) {
            e.preventDefault();
            if (selectedIndex < suggestions.length) {
              const selected = suggestions[selectedIndex];
              setInputValue(selected);
              search(selected);
            } else {
              const resultIndex = selectedIndex - suggestions.length;
              const selected = instantResults[resultIndex];
              if (selected) {
                // Navigate to result or select it
                setInputValue(selected.title);
                search(selected.title);
              }
            }
            setShowSuggestions(false);
          }
          break;

        case 'Escape':
          setShowSuggestions(false);
          setSelectedIndex(-1);
          break;

        case 'Tab':
          if (showSuggestions && suggestions.length > 0) {
            e.preventDefault();
            const firstSuggestion = suggestions[0];
            setInputValue(firstSuggestion);
          }
          break;

        default:
          break;
      }
    },
    [suggestions, instantResults, selectedIndex, search]
  );

  // Handle suggestion selection
  const handleSuggestionSelect = useCallback(
    (suggestion: string) => {
      setInputValue(suggestion);
      search(suggestion);
      setShowSuggestions(false);
      inputRef.current?.focus();
    },
    [search]
  );

  // Handle result selection
  const handleResultSelect = useCallback(
    (result: typeof state.results[0]) => {
      setInputValue(result.title);
      search(result.title);
      setShowSuggestions(false);
    },
    [search]
  );

  // Handle clear
  const handleClear = useCallback(() => {
    setInputValue('');
    setSuggestions([]);
    setInstantResults([]);
    clearResults();
    inputRef.current?.focus();
  }, [clearResults]);

  // Handle voice search
  const handleVoiceSearch = useCallback(() => {
    if (state.isVoiceSearchActive) {
      stopVoiceSearch();
    } else {
      startVoiceSearch();

      // Check for Web Speech API support
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition =
          (window as any).SpeechRecognition ||
          (window as any).webkitSpeechRecognition;

        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInputValue(transcript);
          search(transcript);
          stopVoiceSearch();
        };

        recognition.onerror = () => {
          stopVoiceSearch();
        };

        recognition.onend = () => {
          stopVoiceSearch();
        };

        recognition.start();
      } else {
        alert('Voice search is not supported in this browser.');
        stopVoiceSearch();
      }
    }
  }, [state.isVoiceSearchActive, startVoiceSearch, stopVoiceSearch, search]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input on mount if autoFocus
  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  // Size classes
  const sizeClasses = {
    small: 'h-8 text-sm px-3',
    medium: 'h-10 text-base px-4',
    large: 'h-12 text-lg px-5',
  };

  // Variant classes
  const variantClasses = {
    default: 'bg-white border border-gray-300 shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200',
    minimal: 'bg-gray-100 border-none focus-within:bg-gray-200',
    outlined: 'bg-transparent border-2 border-gray-400 focus-within:border-blue-600',
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div
          className={`
            flex items-center rounded-lg transition-all duration-200
            ${sizeClasses[size]}
            ${variantClasses[variant]}
          `}
        >
          {/* Search Icon */}
          <svg
            className="w-5 h-5 text-gray-400 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          {/* Input */}
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              setShowSuggestions(inputValue.length > 0);
              onFocus?.();
            }}
            onBlur={onBlur}
            placeholder={placeholder}
            className="flex-1 ml-2 bg-transparent border-none outline-none text-gray-900 placeholder-gray-400"
            aria-label="Search"
            aria-autocomplete="list"
            aria-controls="search-suggestions"
            aria-expanded={showSuggestions}
          />

          {/* Loading indicator */}
          {state.isLoading && (
            <svg
              className="w-5 h-5 text-gray-400 animate-spin mr-2"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          )}

          {/* Clear button */}
          {inputValue && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}

          {/* Voice search button */}
          {showVoiceSearch && (
            <button
              type="button"
              onClick={handleVoiceSearch}
              className={`
                p-1 ml-1 transition-colors
                ${state.isVoiceSearchActive
                  ? 'text-red-500 animate-pulse'
                  : 'text-gray-400 hover:text-gray-600'
                }
              `}
              aria-label={state.isVoiceSearchActive ? 'Stop voice search' : 'Start voice search'}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </button>
          )}

          {/* Keyboard shortcut hint */}
          {showShortcut && !inputValue && (
            <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 ml-2 text-xs font-medium text-gray-400 bg-gray-100 rounded">
              <span className="mr-1">&#8984;</span>K
            </kbd>
          )}
        </div>
      </form>

      {/* Suggestions dropdown */}
      {showSuggestions && (suggestions.length > 0 || instantResults.length > 0) && (
        <SearchSuggestions
          suggestions={suggestions}
          instantResults={instantResults}
          selectedIndex={selectedIndex}
          onSelectSuggestion={handleSuggestionSelect}
          onSelectResult={handleResultSelect}
          searchTerm={inputValue}
        />
      )}
    </div>
  );
}

export default SearchBar;
