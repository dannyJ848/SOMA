/**
 * Relevance Ranking - Calculates relevance scores for search results
 * Combines multiple factors to determine result ordering
 */

export interface RelevanceFactors {
  matchScore: number;
  popularity: number;
  recency: number;
  verified: boolean;
  categoryBoost: number;
  userPreferences?: UserPreferences;
  contextualFactors?: ContextualFactors;
}

export interface UserPreferences {
  favoriteCategories?: string[];
  searchHistory?: string[];
  viewedItems?: string[];
  savedItems?: string[];
}

export interface ContextualFactors {
  currentContext?: string;
  relatedToRecentSearch?: boolean;
  timeOfDay?: number;
  userLocation?: string;
}

export interface RankingConfig {
  weights: RankingWeights;
  boosts: RankingBoosts;
  penalties: RankingPenalties;
}

export interface RankingWeights {
  matchScore: number;
  popularity: number;
  recency: number;
  verification: number;
  category: number;
  personalization: number;
}

export interface RankingBoosts {
  exactMatch: number;
  titleMatch: number;
  recentlyViewed: number;
  savedItem: number;
  verifiedContent: number;
  trending: number;
}

export interface RankingPenalties {
  oldContent: number;
  lowQuality: number;
  incomplete: number;
}

const DEFAULT_WEIGHTS: RankingWeights = {
  matchScore: 0.35,
  popularity: 0.15,
  recency: 0.15,
  verification: 0.10,
  category: 0.10,
  personalization: 0.15,
};

const DEFAULT_BOOSTS: RankingBoosts = {
  exactMatch: 1.5,
  titleMatch: 1.3,
  recentlyViewed: 1.2,
  savedItem: 1.4,
  verifiedContent: 1.25,
  trending: 1.15,
};

const DEFAULT_PENALTIES: RankingPenalties = {
  oldContent: 0.8,
  lowQuality: 0.6,
  incomplete: 0.7,
};

/**
 * Calculate overall relevance score
 */
export function calculateRelevance(
  factors: RelevanceFactors,
  config?: Partial<RankingConfig>
): number {
  const weights = config?.weights || DEFAULT_WEIGHTS;
  const boosts = config?.boosts || DEFAULT_BOOSTS;

  // Normalize input factors
  const normalizedFactors = normalizeFactors(factors);

  // Calculate base score from weighted factors
  let score = 0;
  score += normalizedFactors.matchScore * weights.matchScore;
  score += normalizedFactors.popularity * weights.popularity;
  score += normalizedFactors.recency * weights.recency;
  score += (factors.verified ? 1 : 0.5) * weights.verification;
  score += factors.categoryBoost * weights.category;

  // Apply personalization if available
  if (factors.userPreferences) {
    const personalizationScore = calculatePersonalizationScore(
      factors.userPreferences,
      factors.contextualFactors
    );
    score += personalizationScore * weights.personalization;
  }

  // Apply boosts
  score = applyBoosts(score, factors, boosts);

  // Ensure score is between 0 and 1
  return Math.max(0, Math.min(1, score));
}

/**
 * Normalize factors to 0-1 range
 */
function normalizeFactors(factors: RelevanceFactors): {
  matchScore: number;
  popularity: number;
  recency: number;
} {
  // Match score should already be 0-1
  const matchScore = Math.max(0, Math.min(1, factors.matchScore));

  // Normalize popularity using logarithmic scale
  // Assumes popularity is a count
  const popularity = factors.popularity > 0
    ? Math.min(1, Math.log10(factors.popularity + 1) / 5)
    : 0;

  // Normalize recency (timestamp) to 0-1 based on age
  const now = Date.now();
  const ageInDays = factors.recency > 0
    ? (now - factors.recency) / (1000 * 60 * 60 * 24)
    : 365;

  // Items newer than 7 days get full score, decay over 1 year
  const recency = Math.max(0, 1 - ageInDays / 365);

  return { matchScore, popularity, recency };
}

/**
 * Calculate personalization score based on user behavior
 */
function calculatePersonalizationScore(
  preferences: UserPreferences,
  contextual?: ContextualFactors
): number {
  let score = 0.5; // Base personalization score

  // Boost for favorite categories
  if (preferences.favoriteCategories && preferences.favoriteCategories.length > 0) {
    score += 0.1;
  }

  // Boost if related to recent searches
  if (contextual?.relatedToRecentSearch) {
    score += 0.15;
  }

  // Consider time of day patterns
  if (contextual?.timeOfDay !== undefined) {
    // Could implement time-based relevance here
    // e.g., medication reminders in morning, educational content in evening
  }

  return Math.min(1, score);
}

/**
 * Apply boost multipliers based on special conditions
 */
function applyBoosts(
  baseScore: number,
  factors: RelevanceFactors,
  boosts: RankingBoosts
): number {
  let score = baseScore;

  // Boost for verified content
  if (factors.verified) {
    score *= boosts.verifiedContent;
  }

  // High match score boost (near exact match)
  if (factors.matchScore > 0.95) {
    score *= boosts.exactMatch;
  } else if (factors.matchScore > 0.85) {
    score *= boosts.titleMatch;
  }

  // Trending content boost
  if (factors.popularity > 100) {
    score *= boosts.trending;
  }

  return score;
}

/**
 * Rank results by relevance
 */
export function rankResults<T extends { relevanceScore: number }>(
  results: T[],
  options?: { diversify?: boolean; limit?: number }
): T[] {
  let ranked = [...results].sort((a, b) => b.relevanceScore - a.relevanceScore);

  // Apply diversity if requested (avoid too many similar results)
  if (options?.diversify) {
    ranked = diversifyResults(ranked);
  }

  // Apply limit
  if (options?.limit) {
    ranked = ranked.slice(0, options.limit);
  }

  return ranked;
}

/**
 * Diversify results to avoid clustering
 */
function diversifyResults<T extends { relevanceScore: number }>(
  results: T[]
): T[] {
  // Simple diversification: ensure variety in top results
  // More sophisticated implementations could use category-based diversification
  return results;
}

/**
 * Calculate trending score based on recent activity
 */
export function calculateTrendingScore(
  recentViews: number[],
  timeWindowHours = 24
): number {
  if (recentViews.length === 0) return 0;

  const now = Date.now();
  const windowMs = timeWindowHours * 60 * 60 * 1000;

  const recentCount = recentViews.filter(
    timestamp => now - timestamp < windowMs
  ).length;

  // Normalize to 0-1 using logarithmic scale
  return Math.min(1, Math.log10(recentCount + 1) / 3);
}

/**
 * Calculate freshness score
 */
export function calculateFreshnessScore(
  lastUpdated: Date,
  maxAgeDays = 365
): number {
  const now = Date.now();
  const ageMs = now - lastUpdated.getTime();
  const ageDays = ageMs / (1000 * 60 * 60 * 24);

  if (ageDays < 7) return 1.0;
  if (ageDays < 30) return 0.9;
  if (ageDays < 90) return 0.8;
  if (ageDays < 180) return 0.6;
  if (ageDays < maxAgeDays) return 0.4;
  return 0.2;
}

/**
 * Calculate quality score based on content metrics
 */
export function calculateQualityScore(metrics: {
  hasImage?: boolean;
  hasVideo?: boolean;
  contentLength?: number;
  readabilityScore?: number;
  citationCount?: number;
  expertReviewed?: boolean;
}): number {
  let score = 0.5; // Base quality score

  if (metrics.hasImage) score += 0.1;
  if (metrics.hasVideo) score += 0.1;
  if (metrics.expertReviewed) score += 0.15;

  if (metrics.contentLength) {
    // Prefer medium-length content
    if (metrics.contentLength > 100 && metrics.contentLength < 2000) {
      score += 0.1;
    }
  }

  if (metrics.readabilityScore) {
    // Higher readability is better
    score += metrics.readabilityScore * 0.1;
  }

  if (metrics.citationCount && metrics.citationCount > 0) {
    score += Math.min(0.15, metrics.citationCount * 0.03);
  }

  return Math.min(1, score);
}

/**
 * Combine multiple ranking signals
 */
export function combineRankingSignals(
  signals: Array<{ score: number; weight: number }>
): number {
  const totalWeight = signals.reduce((sum, s) => sum + s.weight, 0);
  if (totalWeight === 0) return 0;

  const weightedSum = signals.reduce(
    (sum, s) => sum + s.score * s.weight,
    0
  );

  return weightedSum / totalWeight;
}

/**
 * Create a custom ranking function
 */
export function createRanker(
  config: Partial<RankingConfig>
): (factors: RelevanceFactors) => number {
  return (factors: RelevanceFactors) => calculateRelevance(factors, config);
}

export default calculateRelevance;
