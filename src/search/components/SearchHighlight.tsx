/**
 * SearchHighlight - Highlight matching text in search results
 * Highlights search terms within text content
 */

import React, { useMemo, type ElementType, type ReactNode } from 'react';
import { fuzzyMatch } from '../core/fuzzyMatch';

export interface SearchHighlightProps {
  text: string;
  searchTerm: string;
  highlightClassName?: string;
  caseSensitive?: boolean;
  fuzzy?: boolean;
  maxLength?: number;
  as?: ElementType<{ className?: string; children?: ReactNode }>;
  className?: string;
}

export function SearchHighlight({
  text,
  searchTerm,
  highlightClassName = 'bg-yellow-200 text-yellow-900 rounded px-0.5',
  caseSensitive = false,
  fuzzy = true,
  maxLength,
  as: Component = 'span',
  className = '',
}: SearchHighlightProps) {
  // Memoize the highlighted parts
  const parts = useMemo(() => {
    if (!searchTerm || searchTerm.trim().length === 0) {
      return [{ text, isMatch: false }];
    }

    // Truncate text if maxLength is specified
    let displayText = text;
    if (maxLength && text.length > maxLength) {
      displayText = text.slice(0, maxLength) + '...';
    }

    // Find matches
    if (fuzzy) {
      return highlightFuzzyMatches(displayText, searchTerm, caseSensitive);
    }

    return highlightExactMatches(displayText, searchTerm, caseSensitive);
  }, [text, searchTerm, caseSensitive, fuzzy, maxLength]);

  return (
    <Component className={className}>
      {parts.map((part, index) =>
        part.isMatch ? (
          <mark key={index} className={highlightClassName}>
            {part.text}
          </mark>
        ) : (
          <React.Fragment key={index}>{part.text}</React.Fragment>
        )
      )}
    </Component>
  );
}

// Highlight exact matches
function highlightExactMatches(
  text: string,
  searchTerm: string,
  caseSensitive: boolean
): Array<{ text: string; isMatch: boolean }> {
  const searchNormalized = caseSensitive ? searchTerm : searchTerm.toLowerCase();
  const textNormalized = caseSensitive ? text : text.toLowerCase();

  const parts: Array<{ text: string; isMatch: boolean }> = [];
  let lastIndex = 0;

  let index = textNormalized.indexOf(searchNormalized);
  while (index !== -1) {
    // Add text before match
    if (index > lastIndex) {
      parts.push({
        text: text.slice(lastIndex, index),
        isMatch: false,
      });
    }

    // Add matched text (use original case)
    parts.push({
      text: text.slice(index, index + searchTerm.length),
      isMatch: true,
    });

    lastIndex = index + searchTerm.length;
    index = textNormalized.indexOf(searchNormalized, lastIndex);
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({
      text: text.slice(lastIndex),
      isMatch: false,
    });
  }

  return parts.length > 0 ? parts : [{ text, isMatch: false }];
}

// Highlight fuzzy matches
function highlightFuzzyMatches(
  text: string,
  searchTerm: string,
  caseSensitive: boolean
): Array<{ text: string; isMatch: boolean }> {
  const normalizedSearch = caseSensitive ? searchTerm : searchTerm.toLowerCase();
  const normalizedText = caseSensitive ? text : text.toLowerCase();

  // Get fuzzy match result
  const result = fuzzyMatch(normalizedSearch, normalizedText);

  if (!result.isMatch || result.matches.length === 0) {
    // No match found, try exact match as fallback
    return highlightExactMatches(text, searchTerm, caseSensitive);
  }

  // Sort matches by start position
  const sortedMatches = [...result.matches].sort((a, b) => a.start - b.start);

  // Merge overlapping matches
  const mergedMatches = mergeMatches(sortedMatches);

  // Build parts array
  const parts: Array<{ text: string; isMatch: boolean }> = [];
  let lastIndex = 0;

  for (const match of mergedMatches) {
    // Add text before match
    if (match.start > lastIndex) {
      parts.push({
        text: text.slice(lastIndex, match.start),
        isMatch: false,
      });
    }

    // Add matched text
    parts.push({
      text: text.slice(match.start, match.end),
      isMatch: true,
    });

    lastIndex = match.end;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({
      text: text.slice(lastIndex),
      isMatch: false,
    });
  }

  return parts.length > 0 ? parts : [{ text, isMatch: false }];
}

// Merge overlapping match ranges
function mergeMatches(
  matches: Array<{ start: number; end: number }>
): Array<{ start: number; end: number }> {
  if (matches.length <= 1) return matches;

  const merged: Array<{ start: number; end: number }> = [matches[0]];

  for (let i = 1; i < matches.length; i++) {
    const current = matches[i];
    const last = merged[merged.length - 1];

    if (current.start <= last.end + 1) {
      // Merge overlapping or adjacent ranges
      last.end = Math.max(last.end, current.end);
    } else {
      merged.push(current);
    }
  }

  return merged;
}

// Highlight with context (shows text around the match)
export interface SearchHighlightWithContextProps extends SearchHighlightProps {
  contextLength?: number;
  ellipsis?: string;
}

export function SearchHighlightWithContext({
  text,
  searchTerm,
  contextLength = 50,
  ellipsis = '...',
  ...props
}: SearchHighlightWithContextProps) {
  // Find the best match position
  const matchResult = useMemo(() => {
    if (!searchTerm) return null;

    const normalizedSearch = searchTerm.toLowerCase();
    const normalizedText = text.toLowerCase();

    const result = fuzzyMatch(normalizedSearch, normalizedText);
    if (!result.isMatch || result.matches.length === 0) return null;

    return result.matches[0];
  }, [text, searchTerm]);

  // Extract context around match
  const contextText = useMemo(() => {
    if (!matchResult) return text;

    const start = Math.max(0, matchResult.start - contextLength);
    const end = Math.min(text.length, matchResult.end + contextLength);

    let result = '';

    if (start > 0) {
      result += ellipsis;
    }

    result += text.slice(start, end);

    if (end < text.length) {
      result += ellipsis;
    }

    return result;
  }, [text, matchResult, contextLength, ellipsis]);

  return (
    <SearchHighlight
      {...props}
      text={contextText}
      searchTerm={searchTerm}
    />
  );
}

// Multiple term highlighting
export interface MultiSearchHighlightProps {
  text: string;
  searchTerms: string[];
  highlightClassNames?: string[];
  defaultHighlightClassName?: string;
  caseSensitive?: boolean;
  className?: string;
}

export function MultiSearchHighlight({
  text,
  searchTerms,
  highlightClassNames = [],
  defaultHighlightClassName = 'bg-yellow-200 text-yellow-900 rounded px-0.5',
  caseSensitive = false,
  className = '',
}: MultiSearchHighlightProps) {
  const parts = useMemo(() => {
    if (searchTerms.length === 0) {
      return [{ text, isMatch: false, termIndex: -1 }];
    }

    // Find all matches for all terms
    type Match = { start: number; end: number; termIndex: number };
    const allMatches: Match[] = [];

    searchTerms.forEach((term, termIndex) => {
      if (!term) return;

      const normalizedTerm = caseSensitive ? term : term.toLowerCase();
      const normalizedText = caseSensitive ? text : text.toLowerCase();

      let index = normalizedText.indexOf(normalizedTerm);
      while (index !== -1) {
        allMatches.push({
          start: index,
          end: index + term.length,
          termIndex,
        });
        index = normalizedText.indexOf(normalizedTerm, index + 1);
      }
    });

    // Sort by start position
    allMatches.sort((a, b) => a.start - b.start);

    // Build parts (handling overlaps by prioritizing earlier terms)
    const result: Array<{ text: string; isMatch: boolean; termIndex: number }> = [];
    let lastIndex = 0;

    for (const match of allMatches) {
      if (match.start < lastIndex) continue; // Skip overlapping matches

      // Add text before match
      if (match.start > lastIndex) {
        result.push({
          text: text.slice(lastIndex, match.start),
          isMatch: false,
          termIndex: -1,
        });
      }

      // Add matched text
      result.push({
        text: text.slice(match.start, match.end),
        isMatch: true,
        termIndex: match.termIndex,
      });

      lastIndex = match.end;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      result.push({
        text: text.slice(lastIndex),
        isMatch: false,
        termIndex: -1,
      });
    }

    return result.length > 0
      ? result
      : [{ text, isMatch: false, termIndex: -1 }];
  }, [text, searchTerms, caseSensitive]);

  return (
    <span className={className}>
      {parts.map((part, index) =>
        part.isMatch ? (
          <mark
            key={index}
            className={
              highlightClassNames[part.termIndex] || defaultHighlightClassName
            }
          >
            {part.text}
          </mark>
        ) : (
          <React.Fragment key={index}>{part.text}</React.Fragment>
        )
      )}
    </span>
  );
}

export default SearchHighlight;
