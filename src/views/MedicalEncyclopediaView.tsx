/**
 * MedicalEncyclopediaView
 *
 * Enhanced Medical Encyclopedia search page that uses the new content databases:
 *   - Knowledge Graph search engine for ranked cross-type search
 *   - Specialty, symptom, procedure, and anatomy databases for category browsing
 *   - Explanation levels for complexity-adjusted descriptions
 *   - Medical glossary for plain-language / bilingual support
 *
 * Features:
 *   1. Bilingual search bar (EN/ES)
 *   2. Category filter chips
 *   3. Search result cards with type badges, Spanish names, related item counts
 *   4. Browse-by-category section when no query is active
 *   5. Complexity level selector (1-5)
 */

import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import {
  searchKnowledge,
  type SearchResult,
  type SearchOptions,
} from '../../core/knowledge-graph/search-engine';
import type { NodeType } from '../../core/knowledge-graph/knowledge-index';
import { searchSpecialties } from '../../core/content/specialties/specialty-map';
import { searchSymptomsByName } from '../../core/content/symptoms/symptom-database';
import { searchProcedures } from '../../core/content/procedures/procedure-database';
import { searchAnatomyRegions } from '../../core/content/anatomy/anatomy-encyclopedia';
import {
  EXPLANATION_LEVELS,
  type ExplanationLevelNumber,
} from '../../core/education/explanation-levels';
import { getPlainLanguage } from '../../core/i18n/medical-glossary';

// ============================================
// Types
// ============================================

export interface MedicalEncyclopediaViewProps {
  onBack: () => void;
  onOpenEntry?: (entryId: string, entryType: string) => void;
}

type CategoryFilter =
  | 'all'
  | 'condition'
  | 'symptom'
  | 'procedure'
  | 'anatomy'
  | 'specialty'
  | 'medication';

interface CategoryConfig {
  key: CategoryFilter;
  label: string;
  labelEs: string;
  icon: string;
  color: string;
  nodeType?: NodeType;
}

// ============================================
// Constants
// ============================================

const CATEGORY_CONFIGS: CategoryConfig[] = [
  { key: 'all', label: 'All', labelEs: 'Todos', icon: '', color: '#6b7280' },
  { key: 'condition', label: 'Conditions', labelEs: 'Condiciones', icon: '', color: '#ef4444', nodeType: 'condition' },
  { key: 'symptom', label: 'Symptoms', labelEs: 'Sintomas', icon: '', color: '#f97316', nodeType: 'symptom' },
  { key: 'procedure', label: 'Procedures', labelEs: 'Procedimientos', icon: '', color: '#06b6d4', nodeType: 'procedure' },
  { key: 'anatomy', label: 'Anatomy', labelEs: 'Anatomia', icon: '', color: '#3b82f6', nodeType: 'anatomy' },
  { key: 'specialty', label: 'Specialties', labelEs: 'Especialidades', icon: '', color: '#8b5cf6', nodeType: 'specialty' },
  { key: 'medication', label: 'Medications', labelEs: 'Medicamentos', icon: '', color: '#22c55e', nodeType: 'medication' },
];

const NODE_TYPE_COLORS: Record<string, string> = {
  condition: '#ef4444',
  symptom: '#f97316',
  procedure: '#06b6d4',
  anatomy: '#3b82f6',
  specialty: '#8b5cf6',
  medication: '#22c55e',
};

const NODE_TYPE_LABELS: Record<string, string> = {
  condition: 'Condition',
  symptom: 'Symptom',
  procedure: 'Procedure',
  anatomy: 'Anatomy',
  specialty: 'Specialty',
  medication: 'Medication',
};

interface BrowseCategoryItem {
  id: string;
  name: string;
  spanishName: string;
  type: string;
  description: string;
  relatedCount: number;
}

// ============================================
// Helpers
// ============================================

function getBrowseItemsForCategory(category: CategoryFilter): BrowseCategoryItem[] {
  const items: BrowseCategoryItem[] = [];

  if (category === 'all' || category === 'specialty') {
    const specialties = searchSpecialties('');
    for (const s of specialties.slice(0, category === 'all' ? 6 : 30)) {
      items.push({
        id: s.specialtyId,
        name: s.name,
        spanishName: s.spanishName,
        type: 'specialty',
        description: s.description.en,
        relatedCount: s.commonConditions.length + s.commonProcedures.length,
      });
    }
  }

  if (category === 'all' || category === 'symptom') {
    const symptoms = searchSymptomsByName('');
    for (const s of symptoms.slice(0, category === 'all' ? 6 : 30)) {
      items.push({
        id: s.symptomId,
        name: s.name,
        spanishName: s.spanishName,
        type: 'symptom',
        description: s.description,
        relatedCount: s.possibleCauses.length + s.associatedSymptoms.length,
      });
    }
  }

  if (category === 'all' || category === 'procedure') {
    const procedures = searchProcedures('');
    for (const p of procedures.slice(0, category === 'all' ? 6 : 30)) {
      items.push({
        id: p.procedureId,
        name: p.name,
        spanishName: p.spanishName,
        type: 'procedure',
        description: p.description,
        relatedCount: p.specialties.length + p.bodyRegions.length,
      });
    }
  }

  if (category === 'all' || category === 'anatomy') {
    const regions = searchAnatomyRegions('');
    for (const r of regions.slice(0, category === 'all' ? 6 : 30)) {
      items.push({
        id: r.id,
        name: r.name,
        spanishName: r.spanish,
        type: 'anatomy',
        description: r.function,
        relatedCount: r.conditions.length + r.symptoms.length + r.procedures.length,
      });
    }
  }

  return items;
}

function getDescriptionForLevel(
  description: string,
  _level: ExplanationLevelNumber,
): string {
  // For levels 1-2, try to get plain-language version from glossary
  // The description itself is the baseline; in a full implementation
  // this would call an AI or template engine for the target level.
  // Here we provide a simplified truncation/adaptation approach.
  if (!description) return '';

  const glossaryEntry = getPlainLanguage(description.split(' ').slice(0, 3).join(' '));
  if (glossaryEntry) {
    return glossaryEntry.plainEN;
  }

  return description;
}

// ============================================
// Sub-Components
// ============================================

function TypeBadge({ type }: { type: string }) {
  const color = NODE_TYPE_COLORS[type] || '#6b7280';
  const label = NODE_TYPE_LABELS[type] || type;

  return (
    <span
      className="mev-type-badge"
      style={{
        backgroundColor: `${color}20`,
        color: color,
        border: `1px solid ${color}40`,
      }}
    >
      {label}
    </span>
  );
}

function ComplexitySelector({
  level,
  onChange,
}: {
  level: ExplanationLevelNumber;
  onChange: (level: ExplanationLevelNumber) => void;
}) {
  return (
    <div className="mev-complexity-selector">
      <span className="mev-complexity-label">Detail level:</span>
      <div className="mev-complexity-buttons">
        {([1, 2, 3, 4, 5] as ExplanationLevelNumber[]).map((n) => {
          const info = EXPLANATION_LEVELS[n];
          return (
            <button
              key={n}
              className={`mev-complexity-btn ${level === n ? 'active' : ''}`}
              onClick={() => onChange(n)}
              title={`${info.name} - ${info.audience}`}
            >
              {n}
              <span className="mev-complexity-btn-label">{info.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SearchResultCard({
  result,
  complexityLevel,
  onClick,
}: {
  result: SearchResult;
  complexityLevel: ExplanationLevelNumber;
  onClick: () => void;
}) {
  const { node, score, matchType } = result;
  const description = getDescriptionForLevel(
    node.description || '',
    complexityLevel,
  );

  // Count related items from edge data if available
  const relatedCount = node.metadata?.relatedCount as number | undefined;

  return (
    <div className="mev-result-card" onClick={onClick} role="button" tabIndex={0}>
      <div className="mev-result-header">
        <div className="mev-result-titles">
          <h4 className="mev-result-name">{node.name}</h4>
          {node.spanishName && node.spanishName !== node.name && (
            <span className="mev-result-spanish">{node.spanishName}</span>
          )}
        </div>
        <TypeBadge type={node.type} />
      </div>

      {description && (
        <p className="mev-result-description">{description}</p>
      )}

      <div className="mev-result-footer">
        <span className="mev-match-info">
          {Math.round(score * 100)}% match
          {matchType !== 'exact' && (
            <span className="mev-match-type"> ({matchType})</span>
          )}
        </span>
        {typeof relatedCount === 'number' && relatedCount > 0 && (
          <span className="mev-related-count">
            {relatedCount} related
          </span>
        )}
        {node.bodySystem && (
          <span className="mev-body-system">{node.bodySystem}</span>
        )}
      </div>
    </div>
  );
}

function BrowseCard({
  item,
  onClick,
}: {
  item: BrowseCategoryItem;
  onClick: () => void;
}) {
  return (
    <div className="mev-browse-card" onClick={onClick} role="button" tabIndex={0}>
      <div className="mev-browse-header">
        <h4 className="mev-browse-name">{item.name}</h4>
        <TypeBadge type={item.type} />
      </div>
      {item.spanishName && item.spanishName !== item.name && (
        <span className="mev-browse-spanish">{item.spanishName}</span>
      )}
      <p className="mev-browse-description">{item.description}</p>
      <div className="mev-browse-footer">
        {item.relatedCount > 0 && (
          <span className="mev-related-count">
            {item.relatedCount} related items
          </span>
        )}
      </div>
    </div>
  );
}

function CategoryChips({
  active,
  onSelect,
}: {
  active: CategoryFilter;
  onSelect: (cat: CategoryFilter) => void;
}) {
  return (
    <div className="mev-category-chips">
      {CATEGORY_CONFIGS.map((cat) => {
        const isActive = active === cat.key;
        return (
          <button
            key={cat.key}
            className={`mev-chip ${isActive ? 'active' : ''}`}
            style={
              isActive
                ? {
                    backgroundColor: `${cat.color}25`,
                    borderColor: cat.color,
                    color: cat.color,
                  }
                : undefined
            }
            onClick={() => onSelect(cat.key)}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}

// ============================================
// Main Component
// ============================================

export function MedicalEncyclopediaView({
  onBack,
  onOpenEntry,
}: MedicalEncyclopediaViewProps) {
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [complexityLevel, setComplexityLevel] = useState<ExplanationLevelNumber>(2);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Perform search when query or category changes
  useEffect(() => {
    if (debouncedQuery.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    const options: SearchOptions = {
      limit: 30,
      language: 'en',
    };

    // Map category filter to node types
    if (activeCategory !== 'all') {
      const config = CATEGORY_CONFIGS.find((c) => c.key === activeCategory);
      if (config?.nodeType) {
        options.types = [config.nodeType];
      }
    }

    try {
      const results = searchKnowledge(debouncedQuery, options);
      setSearchResults(results);
    } catch (err) {
      console.error('Search failed:', err);
      setSearchResults([]);
    }

    setIsSearching(false);
  }, [debouncedQuery, activeCategory]);

  // Browse items for when no search is active
  const browseItems = useMemo(() => {
    if (debouncedQuery.trim().length >= 2) return [];
    return getBrowseItemsForCategory(activeCategory);
  }, [activeCategory, debouncedQuery]);

  // Handlers
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    [],
  );

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
    setDebouncedQuery('');
    searchInputRef.current?.focus();
  }, []);

  const handleResultClick = useCallback(
    (result: SearchResult) => {
      if (onOpenEntry) {
        onOpenEntry(result.node.id, result.node.type);
      }
    },
    [onOpenEntry],
  );

  const handleBrowseClick = useCallback(
    (item: BrowseCategoryItem) => {
      if (onOpenEntry) {
        onOpenEntry(item.id, item.type);
      }
    },
    [onOpenEntry],
  );

  const hasSearchQuery = debouncedQuery.trim().length >= 2;

  return (
    <div className="mev-container">
      {/* Header */}
      <div className="mev-header">
        <button className="mev-back-btn" onClick={onBack} aria-label="Go back">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h1 className="mev-title">Medical Encyclopedia</h1>
      </div>

      {/* Search Bar */}
      <div className="mev-search-section">
        <div className="mev-search-bar">
          <svg
            className="mev-search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            ref={searchInputRef}
            type="text"
            className="mev-search-input"
            placeholder="Search conditions, symptoms, anatomy... / Buscar condiciones, sintomas, anatomia..."
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search medical encyclopedia"
          />
          {searchQuery && (
            <button
              className="mev-clear-btn"
              onClick={handleClearSearch}
              aria-label="Clear search"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        {isSearching && (
          <div className="mev-searching">Searching...</div>
        )}
      </div>

      {/* Category Filter Chips */}
      <CategoryChips active={activeCategory} onSelect={setActiveCategory} />

      {/* Complexity Level Selector */}
      <ComplexitySelector level={complexityLevel} onChange={setComplexityLevel} />

      {/* Main Content */}
      <div className="mev-content">
        {hasSearchQuery ? (
          /* Search Results */
          searchResults.length > 0 ? (
            <div className="mev-results">
              <div className="mev-results-header">
                <span className="mev-results-count">
                  {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                </span>
              </div>
              <div className="mev-results-grid">
                {searchResults.map((result) => (
                  <SearchResultCard
                    key={result.node.id}
                    result={result}
                    complexityLevel={complexityLevel}
                    onClick={() => handleResultClick(result)}
                  />
                ))}
              </div>
            </div>
          ) : !isSearching ? (
            <div className="mev-empty">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <h3>No results found</h3>
              <p>
                Try different keywords or switch the category filter. / Pruebe
                con otras palabras o cambie el filtro de categoria.
              </p>
            </div>
          ) : null
        ) : (
          /* Browse by Category */
          <div className="mev-browse">
            <h2 className="mev-browse-title">
              Browse{' '}
              {activeCategory === 'all'
                ? 'All Categories'
                : CATEGORY_CONFIGS.find((c) => c.key === activeCategory)?.label || ''}
            </h2>
            {browseItems.length > 0 ? (
              <div className="mev-browse-grid">
                {browseItems.map((item) => (
                  <BrowseCard
                    key={`${item.type}-${item.id}`}
                    item={item}
                    onClick={() => handleBrowseClick(item)}
                  />
                ))}
              </div>
            ) : (
              <div className="mev-empty">
                <p>No items available for this category yet.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer Disclaimer */}
      <div className="mev-footer">
        <p className="mev-disclaimer">
          This encyclopedia is for educational purposes only and does not
          constitute medical advice. / Esta enciclopedia es solo para fines
          educativos y no constituye consejo medico.
        </p>
      </div>

      <style>{STYLES}</style>
    </div>
  );
}

// ============================================
// Styles (inline to avoid external CSS dependency)
// ============================================

const STYLES = `
.mev-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-primary, #0a0a0f);
  color: var(--text-primary, #e2e2e8);
  font-family: inherit;
}

/* Header */
.mev-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: var(--bg-secondary, #12121a);
  border-bottom: 1px solid var(--border-color, rgba(255,255,255,0.08));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.mev-back-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--bg-tertiary, rgba(255,255,255,0.06));
  border: 1px solid var(--border-color, rgba(255,255,255,0.08));
  border-radius: 8px;
  color: var(--text-primary, #e2e2e8);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mev-back-btn:hover {
  background: var(--bg-hover, rgba(255,255,255,0.1));
}

.mev-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Search Section */
.mev-search-section {
  padding: 1rem 1.5rem 0.5rem;
}

.mev-search-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--bg-tertiary, rgba(255,255,255,0.06));
  border: 1px solid var(--border-color, rgba(255,255,255,0.08));
  border-radius: 12px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.mev-search-bar:focus-within {
  border-color: var(--accent-color, #60a5fa);
  box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.15);
}

.mev-search-icon {
  flex-shrink: 0;
  opacity: 0.5;
}

.mev-search-input {
  flex: 1;
  border: none;
  background: transparent;
  color: var(--text-primary, #e2e2e8);
  font-size: 1rem;
  outline: none;
  min-width: 0;
}

.mev-search-input::placeholder {
  color: var(--text-secondary, #8888a0);
  opacity: 0.7;
}

.mev-clear-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  background: var(--bg-secondary, #12121a);
  border: none;
  border-radius: 6px;
  color: var(--text-secondary, #8888a0);
  cursor: pointer;
  transition: color 0.2s;
}

.mev-clear-btn:hover {
  color: var(--text-primary, #e2e2e8);
}

.mev-searching {
  padding: 0.5rem 0;
  font-size: 0.85rem;
  color: var(--text-secondary, #8888a0);
  text-align: center;
}

/* Category Chips */
.mev-category-chips {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.mev-category-chips::-webkit-scrollbar {
  display: none;
}

.mev-chip {
  flex-shrink: 0;
  padding: 0.5rem 0.875rem;
  background: var(--bg-tertiary, rgba(255,255,255,0.06));
  border: 1px solid var(--border-color, rgba(255,255,255,0.08));
  border-radius: 20px;
  color: var(--text-secondary, #8888a0);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.mev-chip:hover {
  background: var(--bg-hover, rgba(255,255,255,0.1));
  color: var(--text-primary, #e2e2e8);
}

.mev-chip.active {
  font-weight: 600;
}

/* Complexity Selector */
.mev-complexity-selector {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1.5rem 0.75rem;
}

.mev-complexity-label {
  font-size: 0.8rem;
  color: var(--text-secondary, #8888a0);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.mev-complexity-buttons {
  display: flex;
  gap: 0.25rem;
}

.mev-complexity-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  padding: 0.35rem 0.6rem;
  background: var(--bg-tertiary, rgba(255,255,255,0.06));
  border: 1px solid var(--border-color, rgba(255,255,255,0.08));
  border-radius: 8px;
  color: var(--text-secondary, #8888a0);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mev-complexity-btn:hover {
  background: var(--bg-hover, rgba(255,255,255,0.1));
  color: var(--text-primary, #e2e2e8);
}

.mev-complexity-btn.active {
  background: rgba(96, 165, 250, 0.2);
  border-color: #60a5fa;
  color: #60a5fa;
}

.mev-complexity-btn-label {
  font-size: 0.6rem;
  font-weight: 400;
  opacity: 0.8;
}

/* Content Area */
.mev-content {
  flex: 1;
  overflow-y: auto;
  padding: 0 1.5rem 1.5rem;
}

/* Results */
.mev-results-header {
  margin-bottom: 1rem;
}

.mev-results-count {
  font-size: 0.9rem;
  color: var(--text-secondary, #8888a0);
}

.mev-results-grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}

/* Result Card */
.mev-result-card {
  background: var(--bg-secondary, #12121a);
  border: 1px solid var(--border-color, rgba(255,255,255,0.08));
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mev-result-card:hover {
  border-color: var(--accent-color, #60a5fa);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.mev-result-card:focus-visible {
  outline: 2px solid var(--accent-color, #60a5fa);
  outline-offset: 2px;
}

.mev-result-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.mev-result-titles {
  flex: 1;
  min-width: 0;
}

.mev-result-name {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
  color: var(--text-primary, #e2e2e8);
}

.mev-result-spanish {
  display: block;
  font-size: 0.8rem;
  color: var(--text-secondary, #8888a0);
  font-style: italic;
  margin-top: 2px;
}

.mev-result-description {
  font-size: 0.875rem;
  color: var(--text-secondary, #8888a0);
  line-height: 1.5;
  margin: 0 0 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.mev-result-footer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.mev-match-info {
  font-size: 0.75rem;
  color: var(--text-secondary, #8888a0);
  opacity: 0.8;
}

.mev-match-type {
  opacity: 0.6;
}

.mev-related-count {
  font-size: 0.75rem;
  color: #60a5fa;
  padding: 0.15rem 0.5rem;
  background: rgba(96, 165, 250, 0.1);
  border-radius: 10px;
}

.mev-body-system {
  font-size: 0.7rem;
  color: var(--text-secondary, #8888a0);
  padding: 0.15rem 0.5rem;
  background: var(--bg-tertiary, rgba(255,255,255,0.06));
  border-radius: 10px;
  text-transform: capitalize;
}

/* Type Badge */
.mev-type-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 600;
  white-space: nowrap;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

/* Browse Section */
.mev-browse-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.5rem 0 1rem;
  color: var(--text-primary, #e2e2e8);
}

.mev-browse-grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

/* Browse Card */
.mev-browse-card {
  background: var(--bg-secondary, #12121a);
  border: 1px solid var(--border-color, rgba(255,255,255,0.08));
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mev-browse-card:hover {
  border-color: var(--accent-color, #60a5fa);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.mev-browse-card:focus-visible {
  outline: 2px solid var(--accent-color, #60a5fa);
  outline-offset: 2px;
}

.mev-browse-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.25rem;
}

.mev-browse-name {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: var(--text-primary, #e2e2e8);
}

.mev-browse-spanish {
  display: block;
  font-size: 0.8rem;
  color: var(--text-secondary, #8888a0);
  font-style: italic;
  margin-bottom: 0.5rem;
}

.mev-browse-description {
  font-size: 0.85rem;
  color: var(--text-secondary, #8888a0);
  line-height: 1.5;
  margin: 0.5rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.mev-browse-footer {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

/* Empty State */
.mev-empty {
  text-align: center;
  padding: 3rem 2rem;
  color: var(--text-secondary, #8888a0);
}

.mev-empty svg {
  margin-bottom: 1rem;
  opacity: 0.4;
}

.mev-empty h3 {
  font-size: 1.15rem;
  color: var(--text-primary, #e2e2e8);
  margin: 0 0 0.5rem;
}

.mev-empty p {
  margin: 0;
  font-size: 0.9rem;
}

/* Footer */
.mev-footer {
  padding: 0.75rem 1.5rem;
  border-top: 1px solid var(--border-color, rgba(255,255,255,0.08));
  background: var(--bg-secondary, #12121a);
}

.mev-disclaimer {
  margin: 0;
  font-size: 0.75rem;
  color: var(--text-secondary, #8888a0);
  text-align: center;
  opacity: 0.7;
}

/* Animations */
@keyframes mevFadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.mev-results,
.mev-browse {
  animation: mevFadeIn 0.2s ease-out;
}

/* Mobile / Responsive */
@media (max-width: 768px) {
  .mev-container {
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }

  .mev-header {
    padding: 1rem;
    padding-top: calc(1rem + env(safe-area-inset-top, 0px));
  }

  .mev-title {
    font-size: 1.25rem;
  }

  .mev-back-btn {
    min-height: 44px;
    min-width: 44px;
  }

  .mev-search-section,
  .mev-content {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .mev-category-chips {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .mev-complexity-selector {
    padding-left: 1rem;
    padding-right: 1rem;
    flex-wrap: wrap;
  }

  .mev-search-input {
    font-size: 16px; /* Prevents iOS zoom */
  }

  .mev-search-bar {
    min-height: 48px;
  }

  .mev-results-grid,
  .mev-browse-grid {
    grid-template-columns: 1fr;
  }

  .mev-result-card,
  .mev-browse-card {
    min-height: 44px;
  }

  .mev-footer {
    padding-bottom: calc(0.75rem + env(safe-area-inset-bottom, 0px));
  }
}

/* Touch device optimizations */
@media (pointer: coarse) {
  .mev-result-card:active,
  .mev-browse-card:active {
    transform: scale(0.98);
    opacity: 0.95;
  }

  .mev-chip:active,
  .mev-complexity-btn:active {
    transform: scale(0.97);
  }

  .mev-chip {
    min-height: 44px;
    display: flex;
    align-items: center;
  }
}
`;

export default MedicalEncyclopediaView;
