/**
 * ProcedureBrowser Component
 *
 * Displays all 127 medical procedures from the procedure database in a
 * searchable, categorized list. Procedures are grouped by the first specialty
 * listed (approximating body-system grouping). Clicking a procedure opens a
 * detail panel showing the full description, patient explanation, complexity,
 * anesthesia types, settings, and specialties.
 *
 * Adapts displayed content based on the global ComplexityContext level.
 */

import { useState, useMemo, useCallback, useEffect } from 'react';
import { useComplexity, COMPLEXITY_LABELS, type ComplexityLevel } from '../contexts/ComplexityContext';
import { useContentService } from '../services/ContentService';
import type {
  MedicalProcedureEntry,
  ProcedureCategory,
} from '../../core/content/procedures/procedure-database';
import './ProcedureBrowser.css';

// ============================================
// Types
// ============================================

interface ProcedureBrowserProps {
  onBack: () => void;
}

// ============================================
// Category & specialty display config
// ============================================

const CATEGORY_CONFIG: Record<ProcedureCategory, { label: string; color: string }> = {
  diagnostic:  { label: 'Diagnostic',  color: '#3b82f6' },
  therapeutic: { label: 'Therapeutic', color: '#22c55e' },
  surgical:    { label: 'Surgical',    color: '#ef4444' },
  screening:   { label: 'Screening',   color: '#a78bfa' },
  preventive:  { label: 'Preventive',  color: '#eab308' },
};

const CATEGORY_ORDER: ProcedureCategory[] = [
  'diagnostic',
  'screening',
  'therapeutic',
  'surgical',
  'preventive',
];

/** Human-readable specialty labels */
function formatSpecialtyLabel(id: string): string {
  return id
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/** Human-readable complexity label */
function complexityLabel(c: string): string {
  const map: Record<string, string> = {
    minimal: 'Minimal',
    low: 'Low',
    moderate: 'Moderate',
    high: 'High',
    'very-high': 'Very High',
  };
  return map[c] ?? c;
}

/** Human-readable setting label */
function formatSetting(s: string): string {
  return s
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// ============================================
// Sub-components
// ============================================

function ComplexityBadge({ complexity }: { complexity: string }) {
  return (
    <span className={`pb-badge pb-badge-complexity pb-complexity-${complexity}`}>
      {complexityLabel(complexity)}
    </span>
  );
}

function CategoryBadge({ category }: { category: ProcedureCategory }) {
  const cfg = CATEGORY_CONFIG[category];
  return (
    <span
      className="pb-badge pb-badge-category"
      style={{ background: `${cfg.color}22`, color: cfg.color }}
    >
      {cfg.label}
    </span>
  );
}

// ============================================
// Detail Panel
// ============================================

interface DetailPanelProps {
  procedure: MedicalProcedureEntry;
  complexityLevel: ComplexityLevel;
  onClose: () => void;
}

function DetailPanel({ procedure, complexityLevel, onClose }: DetailPanelProps) {
  // Stop body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="pb-detail-overlay" onClick={onClose}>
      <div className="pb-detail-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="pb-detail-header">
          <div className="pb-detail-title">
            <h2>{procedure.name}</h2>
            <span className="pb-card-name-es">{procedure.spanishName}</span>
          </div>
          <button className="pb-detail-close" onClick={onClose} aria-label="Close detail panel">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="pb-detail-body">
          {/* Level indicator */}
          <div className="pb-level-indicator">
            <span className="pb-level-dot" />
            Viewing at {COMPLEXITY_LABELS[complexityLevel]} level
          </div>

          {/* Badges row */}
          <div className="pb-detail-section">
            <div className="pb-detail-tags">
              <CategoryBadge category={procedure.category} />
              <ComplexityBadge complexity={procedure.complexity} />
            </div>
          </div>

          {/* Description -- always shown */}
          <div className="pb-detail-section">
            <h3>Description</h3>
            <p>{procedure.description}</p>
          </div>

          {/* Patient-friendly explanation -- shown at levels 1-3 */}
          {complexityLevel <= 3 && (
            <div className="pb-detail-section">
              <h3>Patient Explanation</h3>
              <p>{procedure.patientExplanation}</p>
            </div>
          )}

          {/* What to expect -- all levels */}
          <div className="pb-detail-section">
            <h3>What to Expect</h3>
            <p>{procedure.whatToExpect}</p>
          </div>

          {/* Clinical metadata -- levels 3+ */}
          {complexityLevel >= 3 && (
            <div className="pb-detail-section">
              <h3>Clinical Details</h3>
              <div className="pb-detail-meta-grid">
                <div className="pb-meta-item">
                  <span className="pb-meta-label">Complexity</span>
                  <span className="pb-meta-value">{complexityLabel(procedure.complexity)}</span>
                </div>
                <div className="pb-meta-item">
                  <span className="pb-meta-label">Anesthesia</span>
                  <span className="pb-meta-value">
                    {procedure.anesthesia.map(formatSetting).join(', ')}
                  </span>
                </div>
                <div className="pb-meta-item">
                  <span className="pb-meta-label">Setting</span>
                  <span className="pb-meta-value">
                    {procedure.setting.map(formatSetting).join(', ')}
                  </span>
                </div>
                <div className="pb-meta-item">
                  <span className="pb-meta-label">Category</span>
                  <span className="pb-meta-value">{CATEGORY_CONFIG[procedure.category].label}</span>
                </div>
              </div>
            </div>
          )}

          {/* Specialties */}
          <div className="pb-detail-section">
            <h3>Specialties</h3>
            <div className="pb-detail-tags">
              {procedure.specialties.map((sp) => (
                <span key={sp} className="pb-detail-tag">{formatSpecialtyLabel(sp)}</span>
              ))}
            </div>
          </div>

          {/* Body regions */}
          <div className="pb-detail-section">
            <h3>Body Regions</h3>
            <div className="pb-detail-tags">
              {procedure.bodyRegions.map((r) => (
                <span key={r} className="pb-detail-tag">{formatSpecialtyLabel(r)}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Main Component
// ============================================

export function ProcedureBrowser({ onBack }: ProcedureBrowserProps) {
  const { level: complexityLevel } = useComplexity();
  const contentService = useContentService();

  const [procedures, setProcedures] = useState<MedicalProcedureEntry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ProcedureCategory | null>(null);
  const [selectedProcedure, setSelectedProcedure] = useState<MedicalProcedureEntry | null>(null);

  // Load procedures once
  useEffect(() => {
    let cancelled = false;
    contentService.getAllProcedures().then((procs) => {
      if (!cancelled) setProcedures(procs);
    });
    return () => { cancelled = true; };
  }, [contentService]);

  // Filter procedures by search query and category
  const filtered = useMemo(() => {
    let result = procedures;

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.spanishName.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.patientExplanation.toLowerCase().includes(q) ||
          p.specialties.some((s) => s.toLowerCase().includes(q)) ||
          p.bodyRegions.some((r) => r.toLowerCase().includes(q)),
      );
    }

    return result;
  }, [procedures, searchQuery, activeCategory]);

  // Group by category
  const grouped = useMemo(() => {
    const map = new Map<ProcedureCategory, MedicalProcedureEntry[]>();
    for (const cat of CATEGORY_ORDER) {
      map.set(cat, []);
    }
    for (const p of filtered) {
      const list = map.get(p.category);
      if (list) list.push(p);
    }
    // Remove empty groups
    for (const [key, val] of map) {
      if (val.length === 0) map.delete(key);
    }
    return map;
  }, [filtered]);

  const handleSelect = useCallback((proc: MedicalProcedureEntry) => {
    setSelectedProcedure(proc);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedProcedure(null);
  }, []);

  // Keyboard: Escape closes detail
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProcedure) {
        e.preventDefault();
        setSelectedProcedure(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedProcedure]);

  return (
    <div className="procedure-browser">
      {/* Header */}
      <div className="pb-header">
        <button className="back-button" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h1>Procedures</h1>
        <span className="pb-count">
          {filtered.length} of {procedures.length}
        </span>
      </div>

      {/* Search + category filters */}
      <div className="pb-controls">
        <div className="pb-search-row">
          <svg className="pb-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            className="pb-search-input"
            type="text"
            placeholder="Search procedures, specialties, body regions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="pb-filter-row">
          {CATEGORY_ORDER.map((cat) => {
            const cfg = CATEGORY_CONFIG[cat];
            return (
              <button
                key={cat}
                className={`pb-filter-chip ${activeCategory === cat ? 'active' : ''}`}
                style={
                  activeCategory === cat
                    ? { background: `${cfg.color}33`, borderColor: `${cfg.color}88`, color: cfg.color }
                    : undefined
                }
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              >
                {cfg.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Procedure list */}
      <div className="pb-content">
        {filtered.length === 0 ? (
          <div className="pb-empty">
            <svg className="pb-empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <p>No procedures match your search.</p>
          </div>
        ) : (
          Array.from(grouped.entries()).map(([category, procs]) => {
            const cfg = CATEGORY_CONFIG[category];
            return (
              <div key={category} className="pb-group">
                <div className="pb-group-header">
                  <span className="pb-group-dot" style={{ backgroundColor: cfg.color }} />
                  <span className="pb-group-label">{cfg.label}</span>
                  <span className="pb-group-count">{procs.length}</span>
                </div>
                {procs.map((proc) => (
                  <div
                    key={proc.procedureId}
                    className="pb-card"
                    onClick={() => handleSelect(proc)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSelect(proc);
                      }
                    }}
                  >
                    <div className="pb-card-top">
                      <div className="pb-card-names">
                        <span className="pb-card-name">{proc.name}</span>
                        <span className="pb-card-name-es">{proc.spanishName}</span>
                      </div>
                      <div className="pb-card-badges">
                        <ComplexityBadge complexity={proc.complexity} />
                      </div>
                    </div>
                    {/* Brief description -- trimmed at level 1-2, full at 3+ */}
                    <span className="pb-card-desc">
                      {complexityLevel <= 2
                        ? proc.patientExplanation
                        : proc.description}
                    </span>
                  </div>
                ))}
              </div>
            );
          })
        )}
      </div>

      {/* Detail modal */}
      {selectedProcedure && (
        <DetailPanel
          procedure={selectedProcedure}
          complexityLevel={complexityLevel}
          onClose={handleClose}
        />
      )}
    </div>
  );
}

export default ProcedureBrowser;
