/**
 * Fuzzy Match - Implements fuzzy string matching for typo tolerance
 * Uses a combination of Levenshtein distance and substring matching
 */

export interface FuzzyMatchResult {
  isMatch: boolean;
  score: number;
  matches: Array<{ start: number; end: number }>;
  distance?: number;
}

export interface FuzzyMatchOptions {
  threshold?: number;
  caseSensitive?: boolean;
  maxDistance?: number;
  allowTranspositions?: boolean;
  ignoreWhitespace?: boolean;
}

const DEFAULT_OPTIONS: FuzzyMatchOptions = {
  threshold: 0.4,
  caseSensitive: false,
  maxDistance: 3,
  allowTranspositions: true,
  ignoreWhitespace: true,
};

/**
 * Main fuzzy match function
 */
export function fuzzyMatch(
  pattern: string,
  text: string,
  options: FuzzyMatchOptions = {}
): FuzzyMatchResult {
  const opts = { ...DEFAULT_OPTIONS, ...options };

  // Normalize inputs
  let normalizedPattern = opts.caseSensitive ? pattern : pattern.toLowerCase();
  let normalizedText = opts.caseSensitive ? text : text.toLowerCase();

  if (opts.ignoreWhitespace) {
    normalizedPattern = normalizedPattern.replace(/\s+/g, ' ').trim();
    normalizedText = normalizedText.replace(/\s+/g, ' ').trim();
  }

  // Empty pattern matches everything
  if (normalizedPattern.length === 0) {
    return { isMatch: true, score: 1, matches: [] };
  }

  // Check for exact match
  if (normalizedText === normalizedPattern) {
    return {
      isMatch: true,
      score: 1,
      matches: [{ start: 0, end: text.length }],
      distance: 0,
    };
  }

  // Check for substring match
  const substringMatch = findSubstringMatch(normalizedPattern, normalizedText);
  if (substringMatch.isMatch && substringMatch.score >= opts.threshold!) {
    return substringMatch;
  }

  // Check for fuzzy match using multiple algorithms
  const sequenceMatch = fuzzySequenceMatch(normalizedPattern, normalizedText);
  const distanceMatch = levenshteinMatch(
    normalizedPattern,
    normalizedText,
    opts.maxDistance!
  );

  // Choose best result
  const bestMatch = sequenceMatch.score >= distanceMatch.score
    ? sequenceMatch
    : distanceMatch;

  if (bestMatch.score >= opts.threshold!) {
    return bestMatch;
  }

  // Check word-level matching
  const wordMatch = wordBoundaryMatch(normalizedPattern, normalizedText);
  if (wordMatch.score >= opts.threshold!) {
    return wordMatch;
  }

  return { isMatch: false, score: 0, matches: [] };
}

/**
 * Find substring matches
 */
function findSubstringMatch(pattern: string, text: string): FuzzyMatchResult {
  const index = text.indexOf(pattern);

  if (index !== -1) {
    // Calculate score based on position and coverage
    const positionBonus = index === 0 ? 0.1 : 0;
    const coverageRatio = pattern.length / text.length;
    const score = Math.min(0.9 + positionBonus, 0.7 + coverageRatio * 0.3);

    return {
      isMatch: true,
      score,
      matches: [{ start: index, end: index + pattern.length }],
      distance: 0,
    };
  }

  return { isMatch: false, score: 0, matches: [] };
}

/**
 * Fuzzy sequence matching - matches characters in order but not necessarily contiguous
 */
function fuzzySequenceMatch(pattern: string, text: string): FuzzyMatchResult {
  const matches: Array<{ start: number; end: number }> = [];
  let patternIdx = 0;
  let textIdx = 0;
  let consecutiveMatches = 0;
  let totalConsecutive = 0;
  let currentMatchStart = -1;

  while (patternIdx < pattern.length && textIdx < text.length) {
    if (pattern[patternIdx] === text[textIdx]) {
      if (currentMatchStart === -1) {
        currentMatchStart = textIdx;
      }
      consecutiveMatches++;
      patternIdx++;
      textIdx++;
    } else {
      if (currentMatchStart !== -1) {
        matches.push({ start: currentMatchStart, end: textIdx });
        totalConsecutive += consecutiveMatches;
        consecutiveMatches = 0;
        currentMatchStart = -1;
      }
      textIdx++;
    }
  }

  // Handle last match
  if (currentMatchStart !== -1) {
    matches.push({ start: currentMatchStart, end: textIdx });
    totalConsecutive += consecutiveMatches;
  }

  // All pattern characters matched
  if (patternIdx === pattern.length) {
    // Score based on:
    // 1. How much of the pattern matched
    // 2. How consecutive the matches were
    // 3. Position of first match
    const matchRatio = pattern.length / text.length;
    const consecutiveBonus = totalConsecutive / pattern.length;
    const positionBonus = matches.length > 0 && matches[0].start === 0 ? 0.1 : 0;

    const score = Math.min(
      0.95,
      0.5 + matchRatio * 0.2 + consecutiveBonus * 0.2 + positionBonus
    );

    return { isMatch: true, score, matches };
  }

  return { isMatch: false, score: 0, matches: [] };
}

/**
 * Levenshtein distance based matching
 */
function levenshteinMatch(
  pattern: string,
  text: string,
  maxDistance: number
): FuzzyMatchResult {
  // For very different length strings, skip
  if (Math.abs(pattern.length - text.length) > maxDistance) {
    return { isMatch: false, score: 0, matches: [] };
  }

  const distance = levenshteinDistance(pattern, text);

  if (distance <= maxDistance) {
    // Score inversely proportional to distance
    const maxLen = Math.max(pattern.length, text.length);
    const score = 1 - distance / maxLen;

    // Find approximate match positions
    const matches = findApproximateMatches(pattern, text);

    return { isMatch: true, score, matches, distance };
  }

  return { isMatch: false, score: 0, matches: [], distance };
}

/**
 * Calculate Levenshtein distance
 */
export function levenshteinDistance(str1: string, str2: string): number {
  const m = str1.length;
  const n = str2.length;

  // Create distance matrix
  const dp: number[][] = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  // Initialize first row and column
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  // Fill the matrix
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j],     // deletion
          dp[i][j - 1],     // insertion
          dp[i - 1][j - 1]  // substitution
        );
      }
    }
  }

  return dp[m][n];
}

/**
 * Word boundary matching - matches whole words
 */
function wordBoundaryMatch(pattern: string, text: string): FuzzyMatchResult {
  const patternWords = pattern.split(/\s+/);
  const textWords = text.split(/\s+/);
  const matches: Array<{ start: number; end: number }> = [];
  let matchedWords = 0;

  let currentPos = 0;
  for (const textWord of textWords) {
    for (const patternWord of patternWords) {
      if (textWord.includes(patternWord) ||
          levenshteinDistance(patternWord, textWord) <= 1) {
        const wordStart = text.indexOf(textWord, currentPos);
        if (wordStart !== -1) {
          matches.push({
            start: wordStart,
            end: wordStart + textWord.length,
          });
          matchedWords++;
        }
        break;
      }
    }
    currentPos = text.indexOf(textWord, currentPos) + textWord.length;
  }

  if (matchedWords > 0) {
    const score = (matchedWords / patternWords.length) * 0.8;
    return { isMatch: true, score, matches };
  }

  return { isMatch: false, score: 0, matches: [] };
}

/**
 * Find approximate match positions using sliding window
 */
function findApproximateMatches(
  pattern: string,
  text: string
): Array<{ start: number; end: number }> {
  const windowSize = pattern.length;
  let bestStart = 0;
  let bestScore = 0;

  for (let i = 0; i <= text.length - windowSize; i++) {
    const window = text.slice(i, i + windowSize);
    const score = 1 - levenshteinDistance(pattern, window) / windowSize;

    if (score > bestScore) {
      bestScore = score;
      bestStart = i;
    }
  }

  if (bestScore > 0.5) {
    return [{ start: bestStart, end: bestStart + windowSize }];
  }

  return [];
}

/**
 * Highlight matches in text
 */
export function highlightMatches(
  text: string,
  matches: Array<{ start: number; end: number }>,
  highlightFn: (text: string) => string = (t) => `<mark>${t}</mark>`
): string {
  if (matches.length === 0) return text;

  // Sort matches by start position
  const sortedMatches = [...matches].sort((a, b) => a.start - b.start);

  // Merge overlapping matches
  const mergedMatches = mergeOverlappingMatches(sortedMatches);

  // Build highlighted string
  let result = '';
  let lastEnd = 0;

  for (const match of mergedMatches) {
    // Add text before match
    result += text.slice(lastEnd, match.start);
    // Add highlighted match
    result += highlightFn(text.slice(match.start, match.end));
    lastEnd = match.end;
  }

  // Add remaining text
  result += text.slice(lastEnd);

  return result;
}

/**
 * Merge overlapping match ranges
 */
function mergeOverlappingMatches(
  matches: Array<{ start: number; end: number }>
): Array<{ start: number; end: number }> {
  if (matches.length <= 1) return matches;

  const merged: Array<{ start: number; end: number }> = [matches[0]];

  for (let i = 1; i < matches.length; i++) {
    const current = matches[i];
    const last = merged[merged.length - 1];

    if (current.start <= last.end) {
      // Merge overlapping ranges
      last.end = Math.max(last.end, current.end);
    } else {
      merged.push(current);
    }
  }

  return merged;
}

/**
 * Calculate similarity score between two strings
 */
export function similarityScore(str1: string, str2: string): number {
  if (str1 === str2) return 1;
  if (str1.length === 0 || str2.length === 0) return 0;

  const distance = levenshteinDistance(str1.toLowerCase(), str2.toLowerCase());
  const maxLen = Math.max(str1.length, str2.length);

  return 1 - distance / maxLen;
}

/**
 * Check if pattern matches with typo tolerance
 */
export function matchesWithTypos(
  pattern: string,
  text: string,
  maxTypos = 2
): boolean {
  const result = fuzzyMatch(pattern, text, { maxDistance: maxTypos });
  return result.isMatch;
}

export default fuzzyMatch;
