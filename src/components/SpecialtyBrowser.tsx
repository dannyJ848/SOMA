/**
 * SpecialtyBrowser Component
 *
 * Lets users browse medical content organized by specialty.
 * Lists all 42+ medical specialties from the specialty-map, grouped by category.
 * Each specialty expands to show subcategories (body systems, common conditions).
 * Clicking a condition navigates to the ConditionSimulator (ConditionDetailView).
 */

import { useState, useMemo, useCallback } from 'react';
import {
  MEDICAL_SPECIALTIES,
  getSpecialtiesByCategory,
  searchSpecialties,
  type MedicalSpecialty,
} from '../../core/content/specialties/specialty-map';
import './SpecialtyBrowser.css';

// ============================================
// Types
// ============================================

type SpecialtyCategory = MedicalSpecialty['category'];

interface SpecialtyBrowserProps {
  onBack: () => void;
  onNavigateToCondition?: (conditionId: string) => void;
}

// ============================================
// Category configuration
// ============================================

const CATEGORY_CONFIG: Record<SpecialtyCategory, { label: string; color: string; icon: string }> = {
  'primary-care': { label: 'Primary Care', color: '#22c55e', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' },
  surgical: { label: 'Surgical', color: '#ef4444', icon: 'M20.71 7.04a1 1 0 00-1.42 0L12 14.34 4.71 7.05a1 1 0 00-1.42 1.41L12 17.17l8.71-8.71a1 1 0 000-1.42z' },
  medical: { label: 'Medical Specialties', color: '#3b82f6', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
  'womens-reproductive': { label: "Women's & Reproductive", color: '#ec4899', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
  'mental-health': { label: 'Mental Health', color: '#a78bfa', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
  diagnostic: { label: 'Diagnostic', color: '#eab308', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
  other: { label: 'Other Specialties', color: '#6b7280', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
};

const CATEGORY_ORDER: SpecialtyCategory[] = [
  'primary-care',
  'medical',
  'surgical',
  'womens-reproductive',
  'mental-health',
  'diagnostic',
  'other',
];

// ============================================
// Utility: format condition ID to display name
// ============================================

function formatConditionName(conditionId: string): string {
  return conditionId
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// ============================================
// Sub-components
// ============================================

interface ConditionChipProps {
  conditionId: string;
  onNavigate?: (conditionId: string) => void;
}

function ConditionChip({ conditionId, onNavigate }: ConditionChipProps) {
  return (
    <button
      className="sb-condition-chip"
      onClick={(e) => {
        e.stopPropagation();
        onNavigate?.(conditionId);
      }}
      title={`View details for ${formatConditionName(conditionId)}`}
    >
      {formatConditionName(conditionId)}
      <svg className="sb-chip-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  );
}

interface SpecialtyCardProps {
  specialty: MedicalSpecialty;
  isExpanded: boolean;
  onToggle: () => void;
  onNavigateToCondition?: (conditionId: string) => void;
}

function SpecialtyCard({ specialty, isExpanded, onToggle, onNavigateToCondition }: SpecialtyCardProps) {
  const categoryConfig = CATEGORY_CONFIG[specialty.category];

  return (
    <div className={`sb-specialty-card ${isExpanded ? 'sb-expanded' : ''}`}>
      <button
        className="sb-card-header"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={`specialty-content-${specialty.specialtyId}`}
      >
        <div className="sb-card-title-row">
          <span className="sb-category-dot" style={{ backgroundColor: categoryConfig.color }} />
          <div className="sb-card-names">
            <span className="sb-card-name">{specialty.name}</span>
            <span className="sb-card-name-es">{specialty.spanishName}</span>
          </div>
        </div>
        <div className="sb-card-meta">
          <span className="sb-condition-count">{specialty.commonConditions.length} conditions</span>
          <svg
            className={`sb-chevron ${isExpanded ? 'sb-chevron-open' : ''}`}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>

      {isExpanded && (
        <div
          className="sb-card-content"
          id={`specialty-content-${specialty.specialtyId}`}
          role="region"
          aria-label={`${specialty.name} details`}
        >
          <p className="sb-description">{specialty.description.en}</p>

          {/* Body Systems Focus */}
          <div className="sb-subsection">
            <h4 className="sb-subsection-title">Body Systems</h4>
            <div className="sb-tag-list">
              {specialty.bodySystemsFocus.map((system) => (
                <span key={system} className="sb-system-tag">
                  {system.replace('-', ' ')}
                </span>
              ))}
            </div>
          </div>

          {/* Anatomy Regions */}
          <div className="sb-subsection">
            <h4 className="sb-subsection-title">Anatomy Regions</h4>
            <div className="sb-tag-list">
              {specialty.anatomyRegions.map((region) => (
                <span key={region} className="sb-region-tag">
                  {region.replace('-', ' ')}
                </span>
              ))}
            </div>
          </div>

          {/* Common Conditions */}
          <div className="sb-subsection">
            <h4 className="sb-subsection-title">Common Conditions</h4>
            <div className="sb-conditions-grid">
              {specialty.commonConditions.map((conditionId) => (
                <ConditionChip
                  key={conditionId}
                  conditionId={conditionId}
                  onNavigate={onNavigateToCondition}
                />
              ))}
            </div>
          </div>

          {/* Common Procedures */}
          <div className="sb-subsection">
            <h4 className="sb-subsection-title">Common Procedures</h4>
            <ul className="sb-procedure-list">
              {specialty.commonProcedures.map((proc, i) => (
                <li key={i} className="sb-procedure-item">{proc}</li>
              ))}
            </ul>
          </div>

          {/* Common Medications */}
          <div className="sb-subsection">
            <h4 className="sb-subsection-title">Common Medications</h4>
            <div className="sb-tag-list">
              {specialty.commonMedications.map((med, i) => (
                <span key={i} className="sb-med-tag">{med}</span>
              ))}
            </div>
          </div>

          {/* Related Specialties */}
          {specialty.relatedSpecialties.length > 0 && (
            <div className="sb-subsection">
              <h4 className="sb-subsection-title">Related Specialties</h4>
              <div className="sb-tag-list">
                {specialty.relatedSpecialties.map((relId) => (
                  <span key={relId} className="sb-related-tag">
                    {formatConditionName(relId)}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ============================================
// Main Component
// ============================================

export function SpecialtyBrowser({ onBack, onNavigateToCondition }: SpecialtyBrowserProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSpecialties, setExpandedSpecialties] = useState<Set<string>>(new Set());
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<SpecialtyCategory | 'all'>('all');

  // Filter specialties by search query and category
  const filteredSpecialties = useMemo(() => {
    let results: MedicalSpecialty[];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      // Search across specialty name, Spanish name, conditions, procedures, medications
      results = MEDICAL_SPECIALTIES.filter((s) => {
        if (s.name.toLowerCase().includes(q)) return true;
        if (s.spanishName.toLowerCase().includes(q)) return true;
        if (s.specialtyId.toLowerCase().includes(q)) return true;
        if (s.description.en.toLowerCase().includes(q)) return true;
        if (s.commonConditions.some((c) => c.toLowerCase().includes(q))) return true;
        if (s.commonProcedures.some((p) => p.toLowerCase().includes(q))) return true;
        if (s.commonMedications.some((m) => m.toLowerCase().includes(q))) return true;
        if (s.bodySystemsFocus.some((sys) => sys.toLowerCase().includes(q))) return true;
        return false;
      });
    } else {
      results = [...MEDICAL_SPECIALTIES];
    }

    if (activeCategoryFilter !== 'all') {
      results = results.filter((s) => s.category === activeCategoryFilter);
    }

    return results;
  }, [searchQuery, activeCategoryFilter]);

  // Group filtered specialties by category
  const groupedSpecialties = useMemo(() => {
    const groups = new Map<SpecialtyCategory, MedicalSpecialty[]>();
    for (const spec of filteredSpecialties) {
      const list = groups.get(spec.category) ?? [];
      list.push(spec);
      groups.set(spec.category, list);
    }
    return groups;
  }, [filteredSpecialties]);

  const toggleSpecialty = useCallback((specialtyId: string) => {
    setExpandedSpecialties((prev) => {
      const next = new Set(prev);
      if (next.has(specialtyId)) {
        next.delete(specialtyId);
      } else {
        next.add(specialtyId);
      }
      return next;
    });
  }, []);

  const totalCount = MEDICAL_SPECIALTIES.length;
  const filteredCount = filteredSpecialties.length;

  return (
    <div className="specialty-browser">
      {/* Header */}
      <header className="sb-header">
        <button className="sb-back-btn" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h1 className="sb-title">Medical Specialties</h1>
        <span className="sb-count">
          {filteredCount === totalCount
            ? `${totalCount} specialties`
            : `${filteredCount} of ${totalCount}`}
        </span>
      </header>

      {/* Search Bar */}
      <div className="sb-search-section">
        <div className="sb-search-bar">
          <svg className="sb-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            className="sb-search-input"
            placeholder="Search specialties, conditions, procedures..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="sb-search-clear" onClick={() => setSearchQuery('')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="sb-category-filters">
        <button
          className={`sb-category-tab ${activeCategoryFilter === 'all' ? 'sb-tab-active' : ''}`}
          onClick={() => setActiveCategoryFilter('all')}
        >
          All
        </button>
        {CATEGORY_ORDER.map((cat) => {
          const config = CATEGORY_CONFIG[cat];
          const count = getSpecialtiesByCategory(cat).length;
          return (
            <button
              key={cat}
              className={`sb-category-tab ${activeCategoryFilter === cat ? 'sb-tab-active' : ''}`}
              onClick={() => setActiveCategoryFilter(cat)}
              style={
                activeCategoryFilter === cat
                  ? { backgroundColor: config.color, borderColor: config.color }
                  : {}
              }
            >
              {config.label}
              <span className="sb-tab-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Specialty List */}
      <div className="sb-content">
        {filteredSpecialties.length === 0 ? (
          <div className="sb-empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <p>No specialties match your search.</p>
            <button className="sb-clear-btn" onClick={() => { setSearchQuery(''); setActiveCategoryFilter('all'); }}>
              Clear filters
            </button>
          </div>
        ) : (
          CATEGORY_ORDER.map((cat) => {
            const specs = groupedSpecialties.get(cat);
            if (!specs || specs.length === 0) return null;
            const config = CATEGORY_CONFIG[cat];

            return (
              <section key={cat} className="sb-category-section">
                <h2 className="sb-category-heading">
                  <span className="sb-category-heading-dot" style={{ backgroundColor: config.color }} />
                  {config.label}
                  <span className="sb-category-heading-count">{specs.length}</span>
                </h2>
                <div className="sb-specialty-list">
                  {specs.map((spec) => (
                    <SpecialtyCard
                      key={spec.specialtyId}
                      specialty={spec}
                      isExpanded={expandedSpecialties.has(spec.specialtyId)}
                      onToggle={() => toggleSpecialty(spec.specialtyId)}
                      onNavigateToCondition={onNavigateToCondition}
                    />
                  ))}
                </div>
              </section>
            );
          })
        )}
      </div>
    </div>
  );
}

export default SpecialtyBrowser;
