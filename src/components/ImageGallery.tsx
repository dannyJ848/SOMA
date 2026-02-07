/**
 * ImageGallery Component
 * 
 * A reusable image gallery for browsing pathology, anatomy, and histology images.
 * Supports filtering by category, body region, system, and license.
 * Includes lightbox preview with attribution.
 */

import React, { useState, useMemo, useCallback } from 'react';
import {
  ImageMetadata,
  ImageCategory,
  BodyRegion,
  BodySystem,
  LicenseType,
  filterImages,
  getImageRegistryStats,
  LICENSE_DISPLAY,
  SOURCE_DISPLAY,
} from '../content/imageRegistry.js';

export interface ImageGalleryProps {
  /** Pre-filtered images to display */
  images?: ImageMetadata[];
  /** Initial category filter */
  initialCategory?: ImageCategory;
  /** Initial body region filter */
  initialBodyRegion?: BodyRegion;
  /** Initial body system filter */
  initialBodySystem?: BodySystem;
  /** Search query for filtering */
  searchQuery?: string;
  /** Callback when an image is selected */
  onImageSelect?: (image: ImageMetadata) => void;
  /** Show filters UI */
  showFilters?: boolean;
  /** Grid column count (responsive if not specified) */
  columns?: 2 | 3 | 4 | 5;
  /** Maximum images to display */
  limit?: number;
  /** Custom title */
  title?: string;
  /** Custom empty state message */
  emptyMessage?: string;
  /** Show related images section in lightbox */
  showRelated?: boolean;
  /** Additional class name */
  className?: string;
}

const CATEGORY_LABELS: Record<ImageCategory, string> = {
  pathology: 'Pathology',
  anatomy: 'Anatomy',
  histology: 'Histology',
};

const BODY_REGION_LABELS: Record<BodyRegion, string> = {
  head: 'Head',
  neck: 'Neck',
  chest: 'Chest/Thorax',
  abdomen: 'Abdomen',
  pelvis: 'Pelvis',
  back: 'Back',
  arm: 'Arm',
  forearm: 'Forearm',
  hand: 'Hand',
  shoulder: 'Shoulder',
  elbow: 'Elbow',
  wrist: 'Wrist',
  thigh: 'Thigh',
  leg: 'Lower Leg',
  foot: 'Foot',
  hip: 'Hip',
  knee: 'Knee',
  ankle: 'Ankle',
  general: 'General',
  multiple: 'Multiple Regions',
};

const BODY_SYSTEM_LABELS: Record<BodySystem, string> = {
  cardiovascular: 'Cardiovascular',
  respiratory: 'Respiratory',
  digestive: 'Digestive',
  urinary: 'Urinary',
  nervous: 'Nervous',
  endocrine: 'Endocrine',
  reproductive: 'Reproductive',
  musculoskeletal: 'Musculoskeletal',
  lymphatic: 'Lymphatic',
  integumentary: 'Integumentary (Skin)',
  hematologic: 'Hematologic (Blood)',
  general: 'General',
};

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  initialCategory,
  initialBodyRegion,
  initialBodySystem,
  searchQuery: externalSearchQuery,
  onImageSelect,
  showFilters = true,
  columns = 3,
  limit,
  title = 'Image Gallery',
  emptyMessage = 'No images match your criteria.',
  showRelated = true,
  className = '',
}) => {
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState<ImageCategory | 'all'>(initialCategory || 'all');
  const [selectedRegion, setSelectedRegion] = useState<BodyRegion | 'all'>(initialBodyRegion || 'all');
  const [selectedSystem, setSelectedSystem] = useState<BodySystem | 'all'>(initialBodySystem || 'all');
  const [selectedLicense, setSelectedLicense] = useState<LicenseType | 'all'>('all');
  const [internalSearchQuery, setInternalSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState<ImageMetadata | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Use external or internal search
  const searchQuery = externalSearchQuery ?? internalSearchQuery;

  // Filter images
  const filteredImages = useMemo(() => {
    if (images) {
      // If images are provided, apply local filters only
      return images.filter(img => {
        if (selectedCategory !== 'all' && img.category !== selectedCategory) return false;
        if (selectedRegion !== 'all' && !img.bodyRegions.includes(selectedRegion)) return false;
        if (selectedSystem !== 'all' && !img.bodySystems.includes(selectedSystem)) return false;
        if (selectedLicense !== 'all' && img.license !== selectedLicense) return false;
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          return (
            img.title.toLowerCase().includes(query) ||
            img.description?.toLowerCase().includes(query) ||
            img.conditions?.some(c => c.toLowerCase().includes(query)) ||
            img.tags.some(t => t.toLowerCase().includes(query))
          );
        }
        return true;
      });
    }
    
    // Use registry filter function
    return filterImages({
      category: selectedCategory === 'all' ? undefined : selectedCategory,
      bodyRegion: selectedRegion === 'all' ? undefined : selectedRegion,
      bodySystem: selectedSystem === 'all' ? undefined : selectedSystem,
      license: selectedLicense === 'all' ? undefined : selectedLicense,
      searchQuery: searchQuery || undefined,
    });
  }, [images, selectedCategory, selectedRegion, selectedSystem, selectedLicense, searchQuery]);

  // Apply limit
  const displayImages = limit ? filteredImages.slice(0, limit) : filteredImages;

  // Stats
  const stats = useMemo(() => getImageRegistryStats(), []);

  // Handle image click
  const handleImageClick = useCallback((image: ImageMetadata) => {
    setSelectedImage(image);
    setLightboxOpen(true);
    onImageSelect?.(image);
  }, [onImageSelect]);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  }, []);

  // Navigate images in lightbox
  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIndex = displayImages.findIndex(img => img.id === selectedImage.id);
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + displayImages.length) % displayImages.length
      : (currentIndex + 1) % displayImages.length;
    setSelectedImage(displayImages[newIndex]);
  }, [selectedImage, displayImages]);

  // Grid columns class
  const gridColsClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
  }[columns];

  return (
    <div className={`image-gallery ${className}`}>
      {/* Header */}
      <div className="gallery-header">
        <h2 className="gallery-title">{title}</h2>
        <span className="gallery-count">{filteredImages.length} images</span>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="gallery-filters">
          {/* Search */}
          {!externalSearchQuery && (
            <div className="filter-group search-group">
              <input
                type="text"
                placeholder="Search images..."
                value={internalSearchQuery}
                onChange={(e) => setInternalSearchQuery(e.target.value)}
                className="search-input"
              />
              {internalSearchQuery && (
                <button 
                  className="clear-search" 
                  onClick={() => setInternalSearchQuery('')}
                  title="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          )}

          {/* Category Filter */}
          <div className="filter-group">
            <label>Category</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value as ImageCategory | 'all')}
            >
              <option value="all">All Categories</option>
              {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                <option key={key} value={key}>
                  {label} ({stats.byCategory[key as ImageCategory] || 0})
                </option>
              ))}
            </select>
          </div>

          {/* Body Region Filter */}
          <div className="filter-group">
            <label>Body Region</label>
            <select 
              value={selectedRegion} 
              onChange={(e) => setSelectedRegion(e.target.value as BodyRegion | 'all')}
            >
              <option value="all">All Regions</option>
              {Object.entries(BODY_REGION_LABELS).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>

          {/* Body System Filter */}
          <div className="filter-group">
            <label>Body System</label>
            <select 
              value={selectedSystem} 
              onChange={(e) => setSelectedSystem(e.target.value as BodySystem | 'all')}
            >
              <option value="all">All Systems</option>
              {Object.entries(BODY_SYSTEM_LABELS).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>

          {/* License Filter */}
          <div className="filter-group">
            <label>License</label>
            <select 
              value={selectedLicense} 
              onChange={(e) => setSelectedLicense(e.target.value as LicenseType | 'all')}
            >
              <option value="all">All Licenses</option>
              {Object.entries(LICENSE_DISPLAY).map(([key, { name }]) => (
                <option key={key} value={key}>
                  {name} ({stats.byLicense[key as LicenseType] || 0})
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          {(selectedCategory !== 'all' || selectedRegion !== 'all' || selectedSystem !== 'all' || selectedLicense !== 'all' || internalSearchQuery) && (
            <button 
              className="clear-filters-btn"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedRegion('all');
                setSelectedSystem('all');
                setSelectedLicense('all');
                setInternalSearchQuery('');
              }}
            >
              Clear Filters
            </button>
          )}
        </div>
      )}

      {/* Active Filters Display */}
      {(selectedCategory !== 'all' || selectedRegion !== 'all' || selectedSystem !== 'all' || selectedLicense !== 'all') && (
        <div className="active-filters">
          <span>Active filters:</span>
          {selectedCategory !== 'all' && (
            <span className="filter-tag">
              {CATEGORY_LABELS[selectedCategory]}
              <button onClick={() => setSelectedCategory('all')}>×</button>
            </span>
          )}
          {selectedRegion !== 'all' && (
            <span className="filter-tag">
              {BODY_REGION_LABELS[selectedRegion]}
              <button onClick={() => setSelectedRegion('all')}>×</button>
            </span>
          )}
          {selectedSystem !== 'all' && (
            <span className="filter-tag">
              {BODY_SYSTEM_LABELS[selectedSystem]}
              <button onClick={() => setSelectedSystem('all')}>×</button>
            </span>
          )}
          {selectedLicense !== 'all' && (
            <span className="filter-tag">
              {LICENSE_DISPLAY[selectedLicense].badge}
              <button onClick={() => setSelectedLicense('all')}>×</button>
            </span>
          )}
        </div>
      )}

      {/* Image Grid */}
      {displayImages.length > 0 ? (
        <div className={`image-grid ${gridColsClass}`}>
          {displayImages.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>{emptyMessage}</p>
          <button 
            className="reset-btn"
            onClick={() => {
              setSelectedCategory('all');
              setSelectedRegion('all');
              setSelectedSystem('all');
              setSelectedLicense('all');
              setInternalSearchQuery('');
            }}
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && selectedImage && (
        <ImageLightbox
          image={selectedImage}
          onClose={closeLightbox}
          onNavigate={navigateImage}
          hasMultiple={displayImages.length > 1}
          currentIndex={displayImages.findIndex(img => img.id === selectedImage.id)}
          totalCount={displayImages.length}
          showRelated={showRelated}
          relatedImages={showRelated ? displayImages.filter(img => img.id !== selectedImage.id).slice(0, 4) : []}
          onRelatedClick={handleImageClick}
        />
      )}
    </div>
  );
};

// ============================================================================
// IMAGE CARD COMPONENT
// ============================================================================

interface ImageCardProps {
  image: ImageMetadata;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const licenseInfo = LICENSE_DISPLAY[image.license];
  const categoryColor = {
    pathology: '#c41e3a',
    anatomy: '#4a90d9',
    histology: '#20b2aa',
  }[image.category];

  return (
    <div 
      className="image-card" 
      onClick={onClick}
      style={{ '--category-color': categoryColor } as React.CSSProperties}
    >
      <div className="image-card-thumbnail">
        {!loaded && !error && (
          <div className="image-placeholder">
            <span className="loading-spinner">⟳</span>
          </div>
        )}
        {error ? (
          <div className="image-error">
            <span>⚠️</span>
            <small>Failed to load</small>
          </div>
        ) : (
          <img
            src={image.path}
            alt={image.title}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            style={{ opacity: loaded ? 1 : 0 }}
          />
        )}
        
        {/* Category Badge */}
        <span className="category-badge" style={{ backgroundColor: categoryColor }}>
          {image.category}
        </span>
        
        {/* License Badge */}
        <span className="license-badge" title={licenseInfo.name}>
          {licenseInfo.badge}
        </span>
      </div>

      <div className="image-card-info">
        <h3 className="image-title" title={image.title}>
          {image.title}
        </h3>
        
        <div className="image-meta">
          <span className="meta-source">{image.source}</span>
          {(image.bodySystems?.length > 0 || image.bodyRegions?.length > 0) && (
            <div className="meta-tags">
              {image.bodySystems.slice(0, 2).map(sys => (
                <span key={sys} className="meta-tag system-tag">{sys}</span>
              ))}
              {image.bodyRegions.slice(0, 1).map(reg => (
                <span key={reg} className="meta-tag region-tag">{reg}</span>
              ))}
            </div>
          )}
        </div>

        {image.conditions && image.conditions.length > 0 && (
          <div className="image-conditions">
            {image.conditions.slice(0, 2).map(condition => (
              <span key={condition} className="condition-tag">
                {condition}
              </span>
            ))}
            {image.conditions.length > 2 && (
              <span className="condition-more">+{image.conditions.length - 2}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// IMAGE LIGHTBOX COMPONENT
// ============================================================================

interface ImageLightboxProps {
  image: ImageMetadata;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
  hasMultiple: boolean;
  currentIndex: number;
  totalCount: number;
  showRelated: boolean;
  relatedImages: ImageMetadata[];
  onRelatedClick: (image: ImageMetadata) => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({
  image,
  onClose,
  onNavigate,
  hasMultiple,
  currentIndex,
  totalCount,
  showRelated,
  relatedImages,
  onRelatedClick,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showAttribution, setShowAttribution] = useState(true);

  const licenseInfo = LICENSE_DISPLAY[image.license];
  const sourceInfo = SOURCE_DISPLAY[image.source] || { name: image.source };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasMultiple) onNavigate('prev');
      if (e.key === 'ArrowRight' && hasMultiple) onNavigate('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate, hasMultiple]);

  return (
    <div className="image-lightbox" onClick={onClose}>
      {/* Overlay */}
      <div className="lightbox-overlay" />

      {/* Close Button */}
      <button className="lightbox-close" onClick={onClose} title="Close (Esc)">
        ×
      </button>

      {/* Navigation */}
      {hasMultiple && (
        <>
          <button 
            className="lightbox-nav prev" 
            onClick={(e) => { e.stopPropagation(); onNavigate('prev'); }}
            title="Previous (←)"
          >
            ‹
          </button>
          <button 
            className="lightbox-nav next" 
            onClick={(e) => { e.stopPropagation(); onNavigate('next'); }}
            title="Next (→)"
          >
            ›
          </button>
          <div className="lightbox-counter">
            {currentIndex + 1} / {totalCount}
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Image */}
        <div className="lightbox-image-container">
          {!imageLoaded && (
            <div className="lightbox-loading">
              <span className="loading-spinner">⟳</span>
            </div>
          )}
          <img
            src={image.path}
            alt={image.title}
            onLoad={() => setImageLoaded(true)}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
        </div>

        {/* Info Panel */}
        <div className={`lightbox-info ${showAttribution ? 'visible' : 'collapsed'}`}>
          {/* Toggle Attribution */}
          <button 
            className="attribution-toggle"
            onClick={() => setShowAttribution(!showAttribution)}
          >
            {showAttribution ? '▼ Hide Info' : '▶ Show Info'}
          </button>

          {showAttribution && (
            <>
              <h2>{image.title}</h2>
              
              {image.description && (
                <p className="lightbox-description">{image.description}</p>
              )}

              {/* Attribution Section */}
              <div className="attribution-section">
                <h3>📚 Attribution</h3>
                
                <div className="attribution-item">
                  <span className="attribution-label">Source:</span>
                  {sourceInfo.url ? (
                    <a href={sourceInfo.url} target="_blank" rel="noopener noreferrer">
                      {sourceInfo.name}
                    </a>
                  ) : (
                    <span>{sourceInfo.name}</span>
                  )}
                </div>

                {image.author && (
                  <div className="attribution-item">
                    <span className="attribution-label">Author:</span>
                    <span>{image.author}</span>
                  </div>
                )}

                <div className="attribution-item">
                  <span className="attribution-label">License:</span>
                  <span className={`license-badge-large ${image.license}`}>
                    {licenseInfo.badge}
                  </span>
                  {licenseInfo.url && (
                    <a 
                      href={licenseInfo.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="license-link"
                    >
                      View License
                    </a>
                  )}
                </div>

                {image.sourceUrl && (
                  <div className="attribution-item">
                    <a 
                      href={image.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="source-link"
                    >
                      🔗 View Original Source
                    </a>
                  </div>
                )}
              </div>

              {/* Medical Information */}
              {(image.bodySystems?.length > 0 || image.bodyRegions?.length > 0 || image.conditions?.length > 0) && (
                <div className="medical-info-section">
                  <h3>🏥 Medical Information</h3>
                  
                  {image.bodySystems.length > 0 && (
                    <div className="info-row">
                      <span className="info-label">Body Systems:</span>
                      <div className="info-tags">
                        {image.bodySystems.map(sys => (
                          <span key={sys} className="info-tag system">{sys}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {image.bodyRegions.length > 0 && (
                    <div className="info-row">
                      <span className="info-label">Body Regions:</span>
                      <div className="info-tags">
                        {image.bodyRegions.map(reg => (
                          <span key={reg} className="info-tag region">{reg}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {image.conditions && image.conditions.length > 0 && (
                    <div className="info-row">
                      <span className="info-label">Conditions:</span>
                      <div className="info-tags">
                        {image.conditions.map(condition => (
                          <span key={condition} className="info-tag condition">{condition}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Tags */}
              {image.tags.length > 0 && (
                <div className="tags-section">
                  <h3>🏷️ Tags</h3>
                  <div className="tags-list">
                    {image.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Disclaimer */}
              <div className="medical-disclaimer">
                <strong>⚠️ Educational Use Only</strong>
                <p>
                  This image is provided for educational purposes only. 
                  It is not intended for diagnostic use. Always consult 
                  qualified healthcare professionals for medical advice.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Related Images */}
      {showRelated && relatedImages.length > 0 && (
        <div className="lightbox-related" onClick={(e) => e.stopPropagation()}>
          <h3>Related Images</h3>
          <div className="related-thumbnails">
            {relatedImages.map(related => (
              <div 
                key={related.id} 
                className="related-thumb"
                onClick={() => onRelatedClick(related)}
                title={related.title}
              >
                <img src={related.path} alt={related.title} loading="lazy" />
                <span className="related-title">{related.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// COMPACT GALLERY VARIANTS
// ============================================================================

export interface CompactImageGalleryProps {
  images: ImageMetadata[];
  title?: string;
  onImageClick?: (image: ImageMetadata) => void;
  maxImages?: number;
}

export const CompactImageGallery: React.FC<CompactImageGalleryProps> = ({
  images,
  title,
  onImageClick,
  maxImages = 6,
}) => {
  const displayImages = images.slice(0, maxImages);
  const remaining = images.length - maxImages;

  return (
    <div className="compact-image-gallery">
      {title && <h4 className="compact-title">{title}</h4>}
      <div className="compact-grid">
        {displayImages.map((image) => (
          <div 
            key={image.id} 
            className="compact-thumb"
            onClick={() => onImageClick?.(image)}
          >
            <img src={image.path} alt={image.title} loading="lazy" />
            <span className="compact-thumb-title">{image.title}</span>
          </div>
        ))}
        {remaining > 0 && (
          <div className="compact-more">
            <span>+{remaining}</span>
            <small>more</small>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// IMAGE PREVIEW (Single Image)
// ============================================================================

export interface ImagePreviewProps {
  image: ImageMetadata;
  size?: 'small' | 'medium' | 'large';
  showAttribution?: boolean;
  onClick?: () => void;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  image,
  size = 'medium',
  showAttribution = true,
  onClick,
}) => {
  const licenseInfo = LICENSE_DISPLAY[image.license];

  const sizeClasses = {
    small: 'preview-small',
    medium: 'preview-medium',
    large: 'preview-large',
  }[size];

  return (
    <div className={`image-preview ${sizeClasses}`} onClick={onClick}>
      <div className="preview-image-wrapper">
        <img src={image.path} alt={image.title} />
        <span className="preview-license-badge" title={licenseInfo.name}>
          {licenseInfo.badge}
        </span>
      </div>
      
      {showAttribution && (
        <div className="preview-attribution">
          <strong>{image.title}</strong>
          <span>{image.source}</span>
          {image.author && <small>by {image.author}</small>}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
