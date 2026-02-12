/**
 * EncyclopediaEntry Component
 *
 * Detailed view for a single encyclopedia entry with complexity toggle,
 * related entries sidebar, and 3D anatomy navigation.
 */

import { useState, useCallback, useMemo, useEffect } from 'react';
import { useAnatomy3DNavigation } from './hooks/useAnatomy3DNavigation';
import { useActionTracker } from './hooks/useActionTracker';
import { useFavorites } from './hooks/useFavorites';
import { RelatedContent } from './components/RelatedContent';
import type { EncyclopediaEntryAction } from '../core/intent-prediction/types';
import type { ViewPreset } from './utils/anatomy3DEventBus';
import { getEntry } from '../core/medical-simulation/encyclopedia/store';
import { getEntryImages } from '../core/medical-simulation/encyclopedia/image-resolver';
import type {
  AnatomyLink,
  RelatedEntry,
  Reference,
  ContentSection,
  EntryType,
  RelationshipType,
  EncyclopediaImage,
} from '../core/medical-simulation/encyclopedia/types';
import './EncyclopediaEntry.css';

// ============================================
// Props
// ============================================

interface EncyclopediaEntryProps {
  entryId: string;
  onBack: () => void;
  onNavigateToEntry: (entryId: string) => void;
  onNavigateToAnatomy?: () => void;
  onAskAI?: (topicContext: string) => void;
}

// ============================================
// Complexity Level Configuration
// ============================================

type ComplexityLevel = 1 | 2 | 3 | 4 | 5;

const COMPLEXITY_CONFIG: Record<ComplexityLevel, { label: string; description: string }> = {
  1: { label: 'Patient', description: 'Simple language, no jargon' },
  2: { label: 'Beginner', description: 'Basic medical terms explained' },
  3: { label: 'Intermediate', description: 'Some medical terminology' },
  4: { label: 'Advanced', description: 'Full medical terminology' },
  5: { label: 'Expert', description: 'Professional level detail' },
};

function mapComplexityToContent(level: ComplexityLevel): 'patient' | 'intermediate' | 'professional' {
  if (level <= 2) return 'patient';
  if (level === 3) return 'intermediate';
  return 'professional';
}

// ============================================
// Entry Type Configuration
// ============================================

const ENTRY_TYPE_CONFIG: Record<EntryType, { label: string; icon: string; color: string }> = {
  condition: { label: 'Condition', icon: '🏥', color: '#ef4444' },
  symptom: { label: 'Symptom', icon: '🩺', color: '#f97316' },
  medication: { label: 'Medication', icon: '💊', color: '#8b5cf6' },
  anatomy: { label: 'Anatomy', icon: '🫀', color: '#3b82f6' },
  procedure: { label: 'Procedure', icon: '🔬', color: '#06b6d4' },
  physiology: { label: 'Physiology', icon: '⚙️', color: '#22c55e' },
  'lab-test': { label: 'Lab Test', icon: '🧪', color: '#eab308' },
  imaging: { label: 'Imaging', icon: '📷', color: '#a855f7' },
  terminology: { label: 'Terminology', icon: '📖', color: '#6b7280' },
};

// ============================================
// Relationship Type Labels
// ============================================

const RELATIONSHIP_LABELS: Record<RelationshipType, string> = {
  'related-to': 'Related to',
  'causes': 'Causes',
  'caused-by': 'Caused by',
  'symptom-of': 'Symptom of',
  'has-symptom': 'Has symptom',
  'treated-by': 'Treated by',
  'treats': 'Treats',
  'diagnosed-by': 'Diagnosed by',
  'diagnoses': 'Diagnoses',
  'part-of': 'Part of',
  'contains': 'Contains',
  'similar-to': 'Similar to',
  'contraindicated-with': 'Contraindicated with',
  'see-also': 'See also',
};

// ============================================
// Complexity Toggle Component
// ============================================

interface ComplexityToggleProps {
  level: ComplexityLevel;
  onChange: (level: ComplexityLevel) => void;
}

function ComplexityToggle({ level, onChange }: ComplexityToggleProps) {
  return (
    <div className="complexity-toggle">
      <div className="complexity-label">
        <span className="label-text">Complexity Level</span>
        <span className="level-description">{COMPLEXITY_CONFIG[level].description}</span>
      </div>
      <div className="complexity-slider">
        {([1, 2, 3, 4, 5] as ComplexityLevel[]).map((l) => (
          <button
            key={l}
            className={`level-btn ${level === l ? 'active' : ''}`}
            onClick={() => onChange(l)}
            title={COMPLEXITY_CONFIG[l].description}
          >
            {COMPLEXITY_CONFIG[l].label}
          </button>
        ))}
      </div>
      <div className="complexity-track">
        <div
          className="complexity-fill"
          style={{ width: `${((level - 1) / 4) * 100}%` }}
        />
      </div>
    </div>
  );
}

// ============================================
// Anatomy Link Card Component
// ============================================

interface AnatomyLinkCardProps {
  link: AnatomyLink;
  onNavigate: () => void;
}

function AnatomyLinkCard({ link, onNavigate }: AnatomyLinkCardProps) {
  return (
    <div className="anatomy-link-card">
      <div className="link-header">
        <span className="link-icon">🫀</span>
        <span className="structure-name">{link.structureName}</span>
      </div>
      <p className="link-text">{link.linkText}</p>
      {link.relevance && (
        <p className="link-relevance">{link.relevance}</p>
      )}
      <button className="view-3d-btn" onClick={onNavigate}>
        <span>View in 3D</span>
        <span className="btn-icon">→</span>
      </button>
    </div>
  );
}

// ============================================
// Related Entry Card Component
// ============================================

interface RelatedEntryCardProps {
  entry: RelatedEntry;
  onClick: () => void;
}

function RelatedEntryCard({ entry, onClick }: RelatedEntryCardProps) {
  const typeConfig = ENTRY_TYPE_CONFIG[entry.entryType];

  return (
    <div className="related-entry-card" onClick={onClick}>
      <div className="entry-header">
        <span
          className="entry-type-icon"
          style={{ backgroundColor: `${typeConfig.color}22`, color: typeConfig.color }}
        >
          {typeConfig.icon}
        </span>
        <span className="entry-name">{entry.name}</span>
      </div>
      <div className="relationship-badge">
        {RELATIONSHIP_LABELS[entry.relationship]}
      </div>
      {entry.description && (
        <p className="entry-description">{entry.description}</p>
      )}
    </div>
  );
}

// ============================================
// Reference Item Component
// ============================================

interface ReferenceItemProps {
  reference: Reference;
  index: number;
}

function ReferenceItem({ reference, index }: ReferenceItemProps) {
  return (
    <li className="reference-item">
      <span className="ref-number">[{index + 1}]</span>
      <span className="ref-citation">{reference.citation}</span>
      {reference.doi && (
        <a
          className="ref-link"
          href={`https://doi.org/${reference.doi}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          DOI
        </a>
      )}
      {reference.pmid && (
        <a
          className="ref-link"
          href={`https://pubmed.ncbi.nlm.nih.gov/${reference.pmid}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          PubMed
        </a>
      )}
      {reference.url && !reference.doi && (
        <a
          className="ref-link"
          href={reference.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      )}
    </li>
  );
}

// ============================================
// Content Section Component
// ============================================

interface ContentSectionViewProps {
  section: ContentSection;
  complexityLevel: 'patient' | 'intermediate' | 'professional';
  depth?: number;
}

function ContentSectionView({ section, complexityLevel, depth = 0 }: ContentSectionViewProps) {
  const content = section.content[complexityLevel];
  const HeadingTag = depth === 0 ? 'h3' : depth === 1 ? 'h4' : 'h5';

  return (
    <div className={`content-section depth-${depth}`}>
      <HeadingTag className="section-title">{section.title}</HeadingTag>
      <div className="section-content">
        {content.split('\n').map((paragraph, idx) => (
          paragraph.trim() ? <p key={idx}>{paragraph}</p> : null
        ))}
      </div>
      {section.images && section.images.length > 0 && (
        <div className="section-images">
          {section.images.map(img => (
            <figure key={img.imageId} className="content-image">
              <img src={img.url} alt={img.alt} />
              {img.caption && <figcaption>{img.caption}</figcaption>}
              {img.credit && <span className="image-credit">{img.credit}</span>}
            </figure>
          ))}
        </div>
      )}
      {section.subsections && section.subsections.length > 0 && (
        <div className="subsections">
          {section.subsections.map((sub, idx) => (
            <ContentSectionView
              key={idx}
              section={sub}
              complexityLevel={complexityLevel}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================
// Image Gallery Component
// ============================================

interface ImageGalleryProps {
  images: EncyclopediaImage[];
}

function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<EncyclopediaImage | null>(null);
  
  if (images.length === 0) {
    return (
      <div className="no-images">
        <p>No images available for this entry.</p>
      </div>
    );
  }

  const featuredImage = images.find(img => img.isFeatured) || images[0];
  const otherImages = images.filter(img => img.imageId !== featuredImage.imageId);

  return (
    <div className="image-gallery">
      {/* Featured Image */}
      <div className="featured-image-container">
        <h3>Featured Image</h3>
        <figure 
          className="featured-image"
          onClick={() => setSelectedImage(featuredImage)}
        >
          <img src={featuredImage.path} alt={featuredImage.altText} />
          <figcaption>
            <span className="image-title">{featuredImage.title}</span>
            {featuredImage.caption && (
              <span className="image-caption">{featuredImage.caption}</span>
            )}
          </figcaption>
          <div className="image-meta">
            <span className={`image-type-badge ${featuredImage.type}`}>
              {featuredImage.type}
            </span>
            <span className="attribution">
              © {featuredImage.attribution.source}
            </span>
          </div>
        </figure>
      </div>

      {/* Image Grid */}
      {otherImages.length > 0 && (
        <div className="image-grid-section">
          <h3>Additional Images ({otherImages.length})</h3>
          <div className="image-grid">
            {otherImages.map(img => (
              <figure 
                key={img.imageId}
                className="gallery-image"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img.path} alt={img.altText} loading="lazy" />
                <figcaption>{img.title}</figcaption>
                <span className={`image-type-badge small ${img.type}`}>
                  {img.type}
                </span>
              </figure>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="image-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button className="lightbox-close">×</button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.path} alt={selectedImage.altText} />
            <div className="lightbox-info">
              <h4>{selectedImage.title}</h4>
              <p>{selectedImage.altText}</p>
              <div className="lightbox-meta">
                <span className={`image-type-badge ${selectedImage.type}`}>
                  {selectedImage.type}
                </span>
                <span className="attribution">
                  Source: {selectedImage.attribution.source} | 
                  License: {selectedImage.attribution.license}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// Main Component
// ============================================

export function EncyclopediaEntry({
  entryId,
  onBack,
  onNavigateToEntry,
  onNavigateToAnatomy,
  onAskAI,
}: EncyclopediaEntryProps) {
  // Initialize 3D navigation
  const { navigateToStructure, highlightStructures, setViewPreset, enableLayers } =
    useAnatomy3DNavigation({ componentId: 'encyclopedia-entry' });

  // Action tracking for intent prediction
  const { track } = useActionTracker<EncyclopediaEntryAction>('encyclopedia-entry', 'EncyclopediaEntry');

  // Favorites hook
  const { isFavorite, toggleFavorite } = useFavorites();

  // State
  const [complexityLevel, setComplexityLevel] = useState<ComplexityLevel>(2);
  const [activeTab, setActiveTab] = useState<'content' | 'images' | 'anatomy' | 'related' | 'references'>('content');

  // Get entry data
  const entry = useMemo(() => getEntry(entryId), [entryId]);

  // Get images for this entry
  const entryImages = useMemo(() => {
    if (!entry) return [];
    // First check if entry has embedded images
    if (entry.images && entry.images.length > 0) return entry.images;
    // Otherwise use image resolver
    return getEntryImages(entry.entryId);
  }, [entry]);

  // Get related entries with full data
  const relatedEntriesData = useMemo(() => {
    if (!entry) return [];
    return entry.relatedEntries;
  }, [entry]);

  // Mapped complexity level for content
  const contentLevel = mapComplexityToContent(complexityLevel);

  // Track initial view and entry
  useEffect(() => {
    if (entry) {
      track('view-content', {
        entityId: entry.entryId,
        entityName: entry.name,
      });
    }
   
  }, [entryId]); // Track when entry changes

  // Track complexity level changes
  useEffect(() => {
    if (entry) {
      track('change-complexity', {
        complexityLevel,
        entityId: entry.entryId,
        entityName: entry.name,
      });
    }
   
  }, [complexityLevel]); // Only track when complexity changes

  // Track tab changes
  useEffect(() => {
    if (entry && activeTab !== 'content') {
      track('change-tab', {
        tabName: activeTab,
        entityId: entry.entryId,
        entityName: entry.name,
      });
    }
   
  }, [activeTab]); // Only track when tab changes

  // Map AnatomyLink viewPreset to EventBus ViewPreset
  const mapViewPreset = (preset?: string): ViewPreset => {
    const mapping: Record<string, ViewPreset> = {
      anterior: 'anterior',
      posterior: 'posterior',
      'lateral-left': 'left',
      'lateral-right': 'right',
      superior: 'superior',
      inferior: 'inferior',
    };
    return mapping[preset || 'anterior'] || 'anterior';
  };

  // Handle anatomy navigation
  const handleAnatomyNavigate = useCallback((link: AnatomyLink) => {
    // Track view-anatomy-link action
    track('view-anatomy-link', {
      structureId: link.structureId,
      structureName: link.structureName,
    });

    // Navigate to structure
    navigateToStructure(link.structureId);

    // Set view preset if specified
    if (link.viewPreset) {
      setViewPreset(mapViewPreset(link.viewPreset));
    }

    // Enable layers if specified
    if (link.enableLayers) {
      enableLayers(link.enableLayers);
    }

    // Highlight the structure
    highlightStructures([{
      structureId: link.structureId,
      color: link.highlightColor || '#3b82f6',
      pulseAnimation: true,
    }]);

    // Navigate to anatomy view if callback provided
    if (onNavigateToAnatomy) {
      onNavigateToAnatomy();
    }
  }, [navigateToStructure, setViewPreset, enableLayers, highlightStructures, onNavigateToAnatomy, track]);

  // Handle related entry click with tracking
  const handleRelatedEntryClick = useCallback((relatedEntry: RelatedEntry) => {
    // Track view-related-entry action
    track('view-related-entry', {
      entityId: relatedEntry.entryId,
      entityName: relatedEntry.name,
    });

    onNavigateToEntry(relatedEntry.entryId);
  }, [onNavigateToEntry, track]);

  // Handle "Ask AI" about this entry
  const handleAskAI = useCallback(() => {
    if (!entry || !onAskAI) return;
    track('view-content', {
      entityId: entry.entryId,
      entityName: entry.name,
    });
    const topicContext = `Tell me about ${entry.name} (${ENTRY_TYPE_CONFIG[entry.entryType].label}). ${entry.overview.patient}`;
    onAskAI(topicContext);
  }, [entry, onAskAI, track]);

  // If entry not found
  if (!entry) {
    return (
      <div className="encyclopedia-entry not-found">
        <div className="not-found-content">
          <div className="not-found-icon">📚</div>
          <h2>Entry Not Found</h2>
          <p>The encyclopedia entry you're looking for doesn't exist.</p>
          <button className="back-btn" onClick={onBack}>
            ← Back to Encyclopedia
          </button>
        </div>
      </div>
    );
  }

  const typeConfig = ENTRY_TYPE_CONFIG[entry.entryType];
  const entryIsFavorite = isFavorite(entry.entryId);

  // Handle toggle favorite
  const handleToggleFavorite = useCallback(() => {
    toggleFavorite({
      id: entry.entryId,
      title: entry.name,
      type: entry.entryType === 'lab-test' ? 'lab' : entry.entryType === 'anatomy' ? 'anatomy' : entry.entryType === 'condition' ? 'condition' : entry.entryType === 'medication' ? 'medication' : 'article',
      path: `/encyclopedia/${entry.entryId}`,
    });
  }, [entry, toggleFavorite]);

  return (
    <div className="encyclopedia-entry">
      {/* Header */}
      <div className="entry-header">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        <div className="header-content">
          <div className="entry-meta">
            <span
              className="entry-type-badge"
              style={{ backgroundColor: `${typeConfig.color}22`, color: typeConfig.color }}
            >
              {typeConfig.icon} {typeConfig.label}
            </span>
            {entry.clinicalImportance && (
              <span className={`importance-badge ${entry.clinicalImportance}`}>
                {entry.clinicalImportance}
              </span>
            )}
            {entry.reviewStatus && (
              <span className={`review-badge ${entry.reviewStatus}`}>
                {entry.reviewStatus}
              </span>
            )}
          </div>
          <h1 className="entry-title">{entry.name}</h1>
          {entry.aliases && entry.aliases.length > 0 && (
            <div className="entry-aliases">
              Also known as: {entry.aliases.join(', ')}
            </div>
          )}
          <div className="entry-actions">
            <button
              className={`favorite-btn-large ${entryIsFavorite ? 'active' : ''}`}
              onClick={handleToggleFavorite}
              title={entryIsFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <span className="favorite-icon">{entryIsFavorite ? '★' : '☆'}</span>
              <span className="favorite-label">{entryIsFavorite ? 'Favorited' : 'Add to Favorites'}</span>
            </button>
            {onAskAI && (
              <button className="ask-ai-btn" onClick={handleAskAI}>
                <span className="btn-icon">💬</span>
                <span>Ask AI about {entry.name}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Complexity Toggle */}
      <div className="complexity-section">
        <ComplexityToggle
          level={complexityLevel}
          onChange={setComplexityLevel}
        />
      </div>

      {/* Tab Navigation */}
      <div className="tab-nav">
        <button
          className={`tab-btn ${activeTab === 'content' ? 'active' : ''}`}
          onClick={() => setActiveTab('content')}
        >
          📄 Content
        </button>
        {entryImages.length > 0 && (
          <button
            className={`tab-btn ${activeTab === 'images' ? 'active' : ''}`}
            onClick={() => setActiveTab('images')}
          >
            🖼️ Images ({entryImages.length})
          </button>
        )}
        {entry.anatomyLinks.length > 0 && (
          <button
            className={`tab-btn ${activeTab === 'anatomy' ? 'active' : ''}`}
            onClick={() => setActiveTab('anatomy')}
          >
            🫀 Anatomy ({entry.anatomyLinks.length})
          </button>
        )}
        {entry.relatedEntries.length > 0 && (
          <button
            className={`tab-btn ${activeTab === 'related' ? 'active' : ''}`}
            onClick={() => setActiveTab('related')}
          >
            🔗 Related ({entry.relatedEntries.length})
          </button>
        )}
        {entry.references.length > 0 && (
          <button
            className={`tab-btn ${activeTab === 'references' ? 'active' : ''}`}
            onClick={() => setActiveTab('references')}
          >
            📚 References ({entry.references.length})
          </button>
        )}
      </div>

      {/* Main Content */}
      <div className="entry-content">
        {activeTab === 'content' && (
          <div className="content-tab">
            {/* Summary */}
            <div className="summary-section">
              <h2>Overview</h2>
              <div className="overview-content">
                {entry.overview[contentLevel].split('\n').map((paragraph, idx) => (
                  paragraph.trim() ? <p key={idx}>{paragraph}</p> : null
                ))}
              </div>
            </div>

            {/* Content Sections */}
            {entry.content.map((section, idx) => (
              <ContentSectionView
                key={idx}
                section={section}
                complexityLevel={contentLevel}
              />
            ))}

            {/* Quick Anatomy Links (inline) */}
            {entry.anatomyLinks.length > 0 && (
              <div className="quick-anatomy-section">
                <h3>🫀 Related Anatomy</h3>
                <div className="quick-anatomy-links">
                  {entry.anatomyLinks.slice(0, 3).map(link => (
                    <button
                      key={link.structureId}
                      className="quick-anatomy-btn"
                      onClick={() => handleAnatomyNavigate(link)}
                    >
                      {link.structureName}
                      <span className="btn-arrow">→</span>
                    </button>
                  ))}
                  {entry.anatomyLinks.length > 3 && (
                    <button
                      className="quick-anatomy-btn more"
                      onClick={() => setActiveTab('anatomy')}
                    >
                      +{entry.anatomyLinks.length - 3} more
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'images' && (
          <div className="images-tab">
            <h2>🖼️ Visual Content</h2>
            <p className="tab-description">
              Medical diagrams, histology, imaging, and clinical photos related to {entry.name}.
            </p>
            <ImageGallery images={entryImages} />
          </div>
        )}

        {activeTab === 'anatomy' && (
          <div className="anatomy-tab">
            <h2>🫀 Anatomy Links</h2>
            <p className="tab-description">
              Click any structure to view it in the 3D anatomy viewer.
            </p>
            <div className="anatomy-links-grid">
              {entry.anatomyLinks.map(link => (
                <AnatomyLinkCard
                  key={link.structureId}
                  link={link}
                  onNavigate={() => handleAnatomyNavigate(link)}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'related' && (
          <div className="related-tab">
            <h2>🔗 Related Entries</h2>
            <p className="tab-description">
              Explore related topics in the encyclopedia.
            </p>
            <div className="related-entries-grid">
              {relatedEntriesData.map(related => (
                <RelatedEntryCard
                  key={related.entryId}
                  entry={related}
                  onClick={() => handleRelatedEntryClick(related)}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'references' && (
          <div className="references-tab">
            <h2>📚 References & Citations</h2>
            <p className="tab-description">
              Evidence and sources for this entry.
            </p>
            <ol className="references-list">
              {entry.references.map((ref, idx) => (
                <ReferenceItem key={ref.referenceId} reference={ref} index={idx} />
              ))}
            </ol>
          </div>
        )}
      </div>

      {/* Knowledge Graph Related Content */}
      <RelatedContent
        nodeId={`${entry.entryType}:${entry.entryId}`}
        onItemPress={(node) => {
          // Strip the type prefix to get the entry ID for navigation
          const targetEntryId = node.id.includes(':') ? node.id.split(':').slice(1).join(':') : node.id;
          onNavigateToEntry(targetEntryId);
        }}
      />

      {/* Footer */}
      <div className="entry-footer">
        {entry.lastUpdated && (
          <span className="last-updated">
            Last updated: {new Date(entry.lastUpdated).toLocaleDateString()}
          </span>
        )}
        {entry.version && (
          <span className="version">Version {entry.version}</span>
        )}
        {entry.author && (
          <span className="author">By {entry.author}</span>
        )}
      </div>

      {/* Disclaimer */}
      <div className="entry-disclaimer">
        ℹ️ This content is for educational purposes only and does not constitute medical advice.
      </div>
    </div>
  );
}
