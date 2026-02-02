/**
 * Histology Tab
 *
 * Displays tissue images with a microscopy viewer interface.
 * Supports multiple magnifications, stains, and detailed annotations.
 * Now includes 5-level complexity support for progressive disclosure.
 */

import { useState, useCallback } from 'react';
import type { HistologyImage, Magnification, StainType } from '../../../core/histology/types';
import {
  useComplexityLevel,
  ComplexitySelector,
  ComplexityContent,
  type ComplexityLevel,
  COMPLEXITY_LEVELS,
} from '../../ComplexityLevel';

// Tissue type info for display
interface TissueTypeInfo {
  name: string;
  category: 'epithelial' | 'connective' | 'muscle' | 'nervous';
  description: string;
  location: string;
  function: string;
  // Optional fields for higher complexity levels
  detailedDescription?: string;
  clinicalCorrelation?: string;
  researchContext?: string;
}

// Standalone interface to avoid type inference issues with extended interfaces
interface HistologyTabImages {
  tissueTypes: TissueTypeInfo[];
  keyFeatures: string[];
  stains: Array<{ name: string; purpose: string; appearance: string; mechanism?: string; clinicalUse?: string }>;
  cellTypes: string[];
  microscopicStructures: Array<{ name: string; description: string; clinicalRelevance?: string }>;
  images: HistologyImage[];
}

interface HistologyTabProps {
  images: HistologyTabImages;
  regionName: string;
}

interface ImageCardProps {
  image: HistologyImage;
  isSelected: boolean;
  onSelect: (image: HistologyImage) => void;
  complexityLevel: ComplexityLevel;
}

function ImageCard({ image, isSelected, onSelect, complexityLevel }: ImageCardProps) {
  const categoryColors: Record<string, string> = {
    epithelial: '#3b82f6',
    connective: '#22c55e',
    muscle: '#ef4444',
    nervous: '#a855f7',
    vascular: '#ec4899',
    lymphoid: '#06b6d4',
    bone: '#eab308',
    cartilage: '#84cc16',
  };

  // Show stain badge only at level 2+
  const showStainBadge = complexityLevel >= 2;

  return (
    <div
      className={`image-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(image)}
    >
      <div className="image-preview">
        <div
          className="preview-placeholder"
          style={{
            background: `linear-gradient(135deg, ${categoryColors[image.tissueCategory] || '#666'}22, ${categoryColors[image.tissueCategory] || '#666'}44)`,
          }}
        >
          <span className="preview-icon">&#128300;</span>
        </div>
        <div className="image-badges">
          <span className="magnification-badge">{image.magnification}</span>
          {showStainBadge && <span className="stain-badge">{image.stain}</span>}
        </div>
      </div>
      <div className="image-info">
        <h4 className="image-title">{image.title}</h4>
        <span
          className="category-badge"
          style={{ backgroundColor: categoryColors[image.tissueCategory] }}
        >
          {image.tissueCategory}
        </span>
      </div>
    </div>
  );
}

interface MicroscopyViewerProps {
  image: HistologyImage;
  onClose: () => void;
  complexityLevel: ComplexityLevel;
}

function MicroscopyViewer({ image, onClose, complexityLevel }: MicroscopyViewerProps) {
  const [zoom, setZoom] = useState(1);
  // Annotations are shown by default only at level 3+
  const [showAnnotations, setShowAnnotations] = useState(complexityLevel >= 3);
  const [showInfo, setShowInfo] = useState(true);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 10));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setZoom(1);

  const getMagnificationValue = (mag: Magnification): number => {
    switch (mag) {
      case '4x': return 4;
      case '10x': return 10;
      case '20x': return 20;
      case '40x': return 40;
      case '100x': return 100;
      case 'EM': return 1000;
      default: return 1;
    }
  };

  const currentMagnification = getMagnificationValue(image.magnification) * zoom;

  // Filter annotations based on complexity level
  const getVisibleAnnotations = () => {
    if (!showAnnotations || complexityLevel < 3) return [];
    // Show all annotations at level 3+
    return image.annotations.points;
  };

  // Get description based on complexity level
  const getDescription = () => {
    if (complexityLevel <= 1) {
      // Level 1: Simple, one-sentence description
      const firstSentence = image.description.split('.')[0];
      return firstSentence + '.';
    }
    if (complexityLevel === 2) {
      // Level 2: Two sentences max
      const sentences = image.description.split('.');
      return sentences.slice(0, 2).join('.') + (sentences.length > 1 ? '.' : '');
    }
    // Level 3+: Full description
    return image.description;
  };

  // Get key features based on complexity level
  const getKeyFeatures = () => {
    if (complexityLevel <= 1) {
      // Level 1: Only first 2 features
      return image.keyFeatures.slice(0, 2);
    }
    if (complexityLevel === 2) {
      // Level 2: First 3 features
      return image.keyFeatures.slice(0, 3);
    }
    // Level 3+: All features
    return image.keyFeatures;
  };

  const visibleAnnotations = getVisibleAnnotations();

  return (
    <div className="microscopy-viewer">
      <header className="viewer-header">
        <button className="back-btn" onClick={onClose}>
          <span>&#8592;</span> Back to Gallery
        </button>
        <h3>{image.title}</h3>
        <div className="viewer-controls">
          <span className="mag-display">{currentMagnification.toFixed(0)}x</span>
          {/* Only show Labels toggle at level 3+ */}
          {complexityLevel >= 3 && (
            <button
              className={showAnnotations ? 'active' : ''}
              onClick={() => setShowAnnotations(!showAnnotations)}
            >
              Labels
            </button>
          )}
          <button
            className={showInfo ? 'active' : ''}
            onClick={() => setShowInfo(!showInfo)}
          >
            Info
          </button>
        </div>
      </header>

      <div className="viewer-content">
        <div className="image-viewport">
          <div
            className="image-container"
            style={{ transform: `scale(${zoom})` }}
          >
            <div
              className="image-placeholder"
              style={{
                width: image.width || 800,
                height: image.height || 600,
                background: `linear-gradient(135deg, #f5e6e8 25%, #e8d4e8 50%, #f5e6e8 75%)`,
              }}
            >
              <div className="placeholder-text">
                <span className="placeholder-icon">&#128300;</span>
                <span>{image.title}</span>
                {complexityLevel >= 2 && <span className="file-name">{image.filename}</span>}
              </div>
            </div>

            {/* Annotations - only visible at level 3+ */}
            {visibleAnnotations.map((point, index) => (
              <div
                key={`point-${index}`}
                className="annotation-point"
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
              >
                <div className="annotation-marker" />
                <div className="annotation-label">{point.label}</div>
              </div>
            ))}
          </div>

          <div className="zoom-controls">
            <button onClick={handleZoomIn}>+</button>
            <button onClick={handleResetZoom}>Reset</button>
            <button onClick={handleZoomOut}>-</button>
          </div>
        </div>

        {showInfo && (
          <aside className="info-panel">
            <section className="info-section">
              <h4>Image Details</h4>
              <dl>
                <dt>Tissue Type</dt>
                <dd>{image.tissueCategory}</dd>
                <dt>Organ/Source</dt>
                <dd>{image.organSource}</dd>
                {/* Stain info shown at level 2+ */}
                {complexityLevel >= 2 && (
                  <>
                    <dt>Stain</dt>
                    <dd>{image.stain}</dd>
                  </>
                )}
                <dt>Magnification</dt>
                <dd>{image.magnification}</dd>
              </dl>
            </section>

            <section className="info-section">
              <h4>Description</h4>
              <p>{getDescription()}</p>
            </section>

            {getKeyFeatures().length > 0 && (
              <section className="info-section">
                <h4>Key Features</h4>
                <ul>
                  {getKeyFeatures().map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Clinical Relevance - only at level 4+ */}
            {complexityLevel >= 4 && image.clinicalRelevance && (
              <section className="info-section clinical">
                <h4>Clinical Relevance</h4>
                <p>{image.clinicalRelevance}</p>
              </section>
            )}

            {/* Source info - at level 3+ */}
            {complexityLevel >= 3 && (
              <section className="info-section source">
                <h4>Source</h4>
                <p>{image.source}</p>
                <p className="license">License: {image.license}</p>
              </section>
            )}
          </aside>
        )}
      </div>
    </div>
  );
}

interface TissueInfoCardProps {
  tissue: TissueTypeInfo;
  complexityLevel: ComplexityLevel;
}

function TissueInfoCard({ tissue, complexityLevel }: TissueInfoCardProps) {
  const categoryColors: Record<string, string> = {
    epithelial: '#3b82f6',
    connective: '#22c55e',
    muscle: '#ef4444',
    nervous: '#a855f7',
  };

  // Get description based on complexity level
  const getDescription = () => {
    if (complexityLevel <= 1) {
      // Level 1: Simple, one-sentence description
      const firstSentence = tissue.description.split('.')[0];
      return firstSentence + '.';
    }
    if (complexityLevel === 2) {
      // Level 2: Basic description
      return tissue.description;
    }
    // Level 3+: Full description, potentially with detailed info
    return tissue.detailedDescription || tissue.description;
  };

  return (
    <div className="tissue-info-card">
      <div className="tissue-header">
        <span
          className="tissue-category"
          style={{ backgroundColor: categoryColors[tissue.category] }}
        >
          {tissue.category}
        </span>
        <h4 className="tissue-name">{tissue.name}</h4>
      </div>
      <p className="tissue-description">{getDescription()}</p>

      {/* Location shown at level 2+ */}
      {complexityLevel >= 2 && (
        <div className="tissue-details">
          <div className="detail-row">
            <span className="detail-label">Location:</span>
            <span className="detail-value">{tissue.location}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Function:</span>
            <span className="detail-value">{tissue.function}</span>
          </div>
        </div>
      )}

      {/* Clinical correlation at level 4+ */}
      {complexityLevel >= 4 && tissue.clinicalCorrelation && (
        <div className="tissue-clinical">
          <span className="clinical-label">Clinical:</span>
          <span className="clinical-value">{tissue.clinicalCorrelation}</span>
        </div>
      )}

      {/* Research context at level 5 */}
      {complexityLevel >= 5 && tissue.researchContext && (
        <div className="tissue-research">
          <span className="research-label">Research:</span>
          <span className="research-value">{tissue.researchContext}</span>
        </div>
      )}
    </div>
  );
}

interface StainCardProps {
  stain: { name: string; purpose: string; appearance: string; mechanism?: string; clinicalUse?: string };
  complexityLevel: ComplexityLevel;
}

function StainCard({ stain, complexityLevel }: StainCardProps) {
  return (
    <div className="stain-card">
      <h4>{stain.name}</h4>
      <div className="stain-details">
        <div className="detail-row">
          <span className="detail-label">Purpose:</span>
          <span className="detail-value">{stain.purpose}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Appearance:</span>
          <span className="detail-value">{stain.appearance}</span>
        </div>
        {/* Mechanism shown at level 4+ */}
        {complexityLevel >= 4 && stain.mechanism && (
          <div className="detail-row">
            <span className="detail-label">Mechanism:</span>
            <span className="detail-value">{stain.mechanism}</span>
          </div>
        )}
        {/* Clinical use shown at level 5 */}
        {complexityLevel >= 5 && stain.clinicalUse && (
          <div className="detail-row">
            <span className="detail-label">Clinical Use:</span>
            <span className="detail-value">{stain.clinicalUse}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function HistologyTab({ images, regionName }: HistologyTabProps) {
  // Use the global complexity context
  const { level: complexityLevel, setLevel, levelDef } = useComplexityLevel();

  const [selectedImage, setSelectedImage] = useState<HistologyImage | null>(null);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [filterStain, setFilterStain] = useState<StainType | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>('tissues');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleImageSelect = useCallback((image: HistologyImage) => {
    setSelectedImage(image);
  }, []);

  const handleCloseViewer = useCallback(() => {
    setSelectedImage(null);
  }, []);

  // Filter images - explicit type to work around TypeScript inference
  const allImages: HistologyImage[] = images.images ?? [];

  // Filter images based on complexity level (if images have complexityLevel property)
  const filteredImages: HistologyImage[] = allImages.filter((img: HistologyImage): boolean => {
    // Filter by complexity level if the image has that property
    const imageComplexity = (img as HistologyImage & { complexityLevel?: number }).complexityLevel;
    if (imageComplexity !== undefined && imageComplexity > complexityLevel) {
      return false;
    }
    if (filterCategory && img.tissueCategory !== filterCategory) return false;
    if (filterStain && img.stain !== filterStain) return false;
    return true;
  });

  // Get unique categories and stains for filters
  const categories = [...new Set(allImages.map(img => img.tissueCategory))];
  const stains = [...new Set(allImages.map(img => img.stain))];

  const isEmpty =
    images.tissueTypes.length === 0 &&
    allImages.length === 0;

  if (isEmpty) {
    return (
      <div className="histology-tab empty">
        <div className="empty-state">
          <span className="empty-icon">&#128300;</span>
          <h3>No Histology Data</h3>
          <p>Histological information for {regionName} is not yet available.</p>
        </div>
      </div>
    );
  }

  // Show microscopy viewer if image is selected
  if (selectedImage) {
    return (
      <MicroscopyViewer
        image={selectedImage}
        onClose={handleCloseViewer}
        complexityLevel={complexityLevel}
      />
    );
  }

  return (
    <div className="histology-tab">
      <div className="tab-header">
        <div className="tab-intro">
          <h3>Histology</h3>
          <p>Microscopic anatomy of {regionName}</p>
        </div>
        <ComplexitySelector compact showDescription={false} />
      </div>

      <div className="histology-content">
        {/* Tissue Types Section */}
        {images.tissueTypes.length > 0 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'tissues' ? 'expanded' : ''}`}
              onClick={() => toggleSection('tissues')}
            >
              <span className="section-icon">&#129531;</span>
              <span className="section-title">Tissue Types</span>
              <span className="section-count">{images.tissueTypes.length}</span>
              <span className="expand-icon">{expandedSection === 'tissues' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'tissues' && (
              <div className="section-content">
                <div className="tissue-grid">
                  {images.tissueTypes.map((tissue, index) => (
                    <TissueInfoCard
                      key={index}
                      tissue={tissue}
                      complexityLevel={complexityLevel}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Cell Types Section - shown at level 2+ */}
        {images.cellTypes.length > 0 && complexityLevel >= 2 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'cells' ? 'expanded' : ''}`}
              onClick={() => toggleSection('cells')}
            >
              <span className="section-icon">&#129440;</span>
              <span className="section-title">Cell Types</span>
              <span className="section-count">{images.cellTypes.length}</span>
              <span className="expand-icon">{expandedSection === 'cells' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'cells' && (
              <div className="section-content">
                <div className="cell-chips">
                  {images.cellTypes.map((cell, index) => (
                    <span key={index} className="cell-chip">{cell}</span>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Key Features Section */}
        {images.keyFeatures.length > 0 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'features' ? 'expanded' : ''}`}
              onClick={() => toggleSection('features')}
            >
              <span className="section-icon">&#10024;</span>
              <span className="section-title">Key Features</span>
              <span className="section-count">
                {complexityLevel <= 1
                  ? Math.min(images.keyFeatures.length, 3)
                  : images.keyFeatures.length}
              </span>
              <span className="expand-icon">{expandedSection === 'features' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'features' && (
              <div className="section-content">
                <ul className="feature-list">
                  {/* Show limited features at lower complexity levels */}
                  {(complexityLevel <= 1
                    ? images.keyFeatures.slice(0, 3)
                    : complexityLevel === 2
                      ? images.keyFeatures.slice(0, 5)
                      : images.keyFeatures
                  ).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Image Gallery Section */}
        {images.images.length > 0 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'gallery' ? 'expanded' : ''}`}
              onClick={() => toggleSection('gallery')}
            >
              <span className="section-icon">&#128247;</span>
              <span className="section-title">Image Gallery</span>
              <span className="section-count">{filteredImages.length}</span>
              <span className="expand-icon">{expandedSection === 'gallery' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'gallery' && (
              <div className="section-content">
                {/* Filters - shown at level 2+ */}
                {complexityLevel >= 2 && (
                  <div className="gallery-filters">
                    <div className="filter-group">
                      <label>Tissue Type:</label>
                      <select
                        value={filterCategory || ''}
                        onChange={(e) => setFilterCategory(e.target.value || null)}
                      >
                        <option value="">All Types</option>
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    {/* Stain filter shown at level 3+ */}
                    {complexityLevel >= 3 && (
                      <div className="filter-group">
                        <label>Stain:</label>
                        <select
                          value={filterStain || ''}
                          onChange={(e) => setFilterStain((e.target.value || null) as StainType | null)}
                        >
                          <option value="">All Stains</option>
                          {stains.map(stain => (
                            <option key={stain} value={stain}>{stain}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                )}

                <div className="image-gallery">
                  {filteredImages.map((typedImage: HistologyImage, idx: number) => (
                    <ImageCard
                      key={typedImage.id || idx}
                      image={typedImage}
                      isSelected={Boolean(selectedImage && (selectedImage as HistologyImage).id === typedImage.id)}
                      onSelect={handleImageSelect}
                      complexityLevel={complexityLevel}
                    />
                  ))}
                </div>
                {filteredImages.length === 0 && (
                  <div className="no-results">
                    No images match the selected filters.
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* Stains Section - shown at level 2+ with varying detail */}
        {images.stains.length > 0 && complexityLevel >= 2 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'stains' ? 'expanded' : ''}`}
              onClick={() => toggleSection('stains')}
            >
              <span className="section-icon">&#127912;</span>
              <span className="section-title">Histological Stains</span>
              <span className="section-count">{images.stains.length}</span>
              <span className="expand-icon">{expandedSection === 'stains' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'stains' && (
              <div className="section-content">
                <div className="stains-grid">
                  {images.stains.map((stain, index) => (
                    <StainCard
                      key={index}
                      stain={stain}
                      complexityLevel={complexityLevel}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Microscopic Structures Section - shown at level 3+ */}
        {images.microscopicStructures && images.microscopicStructures.length > 0 && complexityLevel >= 3 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'structures' ? 'expanded' : ''}`}
              onClick={() => toggleSection('structures')}
            >
              <span className="section-icon">&#128269;</span>
              <span className="section-title">Microscopic Structures</span>
              <span className="section-count">{images.microscopicStructures.length}</span>
              <span className="expand-icon">{expandedSection === 'structures' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'structures' && (
              <div className="section-content">
                <div className="structures-grid">
                  {images.microscopicStructures.map((structure, index) => (
                    <div key={index} className="structure-card">
                      <h4>{structure.name}</h4>
                      <p>{structure.description}</p>
                      {/* Clinical relevance at level 4+ */}
                      {complexityLevel >= 4 && structure.clinicalRelevance && (
                        <div className="structure-clinical">
                          <span className="clinical-label">Clinical:</span>
                          <span className="clinical-value">{structure.clinicalRelevance}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </div>

      <style>{`
        .histology-tab {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .histology-tab.empty {
          align-items: center;
          justify-content: center;
          min-height: 300px;
        }

        .empty-state {
          text-align: center;
          padding: 32px;
          color: var(--text-tertiary, #666);
        }

        .empty-icon {
          font-size: 48px;
          display: block;
          margin-bottom: 16px;
        }

        .empty-state h3 {
          margin: 0 0 8px 0;
          color: var(--text-secondary, #888);
        }

        .empty-state p {
          margin: 0;
        }

        .tab-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-color, #333);
        }

        .tab-intro {
          flex: 1;
        }

        .tab-intro h3 {
          margin: 0 0 4px 0;
          font-size: 18px;
          color: var(--text-primary, #fff);
        }

        .tab-intro p {
          margin: 0;
          color: var(--text-secondary, #888);
          font-size: 14px;
        }

        .histology-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .content-section {
          background: var(--background-secondary, #1a1a1a);
          border-radius: 12px;
          overflow: hidden;
        }

        .section-header {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: transparent;
          border: none;
          color: var(--text-primary, #fff);
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .section-header:hover {
          background: var(--background-tertiary, #2a2a2a);
        }

        .section-header.expanded {
          border-bottom: 1px solid var(--border-color, #333);
        }

        .section-icon {
          font-size: 18px;
        }

        .section-title {
          flex: 1;
          text-align: left;
          font-size: 15px;
          font-weight: 500;
        }

        .section-count {
          background: var(--background-tertiary, #2a2a2a);
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 12px;
          color: var(--text-secondary, #888);
        }

        .expand-icon {
          font-size: 18px;
          color: var(--text-tertiary, #666);
        }

        .section-content {
          padding: 16px;
        }

        /* Tissue Grid */
        .tissue-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 12px;
        }

        .tissue-info-card {
          padding: 16px;
          background: var(--background-tertiary, #2a2a2a);
          border-radius: 8px;
        }

        .tissue-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .tissue-category {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 500;
          color: white;
          text-transform: capitalize;
        }

        .tissue-name {
          margin: 0;
          font-size: 15px;
          font-weight: 500;
          color: var(--text-primary, #fff);
        }

        .tissue-description {
          margin: 0 0 12px 0;
          font-size: 13px;
          color: var(--text-secondary, #888);
          line-height: 1.5;
        }

        .tissue-details {
          padding-top: 12px;
          border-top: 1px solid var(--border-color, #333);
        }

        .tissue-clinical,
        .tissue-research {
          margin-top: 12px;
          padding: 10px;
          border-radius: 6px;
          font-size: 12px;
        }

        .tissue-clinical {
          background: rgba(255, 193, 7, 0.1);
          border: 1px solid rgba(255, 193, 7, 0.3);
        }

        .tissue-research {
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
        }

        .clinical-label,
        .research-label {
          font-weight: 600;
          margin-right: 8px;
        }

        .clinical-label {
          color: #ffc107;
        }

        .research-label {
          color: #8b5cf6;
        }

        .clinical-value,
        .research-value {
          color: var(--text-secondary, #888);
        }

        .detail-row {
          display: flex;
          gap: 8px;
          font-size: 12px;
          margin-bottom: 4px;
        }

        .detail-row:last-child {
          margin-bottom: 0;
        }

        .detail-label {
          color: var(--text-tertiary, #666);
          min-width: 60px;
        }

        .detail-value {
          color: var(--text-secondary, #888);
        }

        /* Cell Chips */
        .cell-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .cell-chip {
          padding: 6px 12px;
          background: var(--background-tertiary, #2a2a2a);
          border: 1px solid var(--border-color, #333);
          border-radius: 16px;
          font-size: 13px;
          color: var(--text-secondary, #888);
        }

        /* Feature List */
        .feature-list {
          margin: 0;
          padding: 0 0 0 20px;
          color: var(--text-secondary, #888);
        }

        .feature-list li {
          margin-bottom: 8px;
          font-size: 14px;
          line-height: 1.5;
        }

        /* Gallery */
        .gallery-filters {
          display: flex;
          gap: 16px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .filter-group label {
          font-size: 13px;
          color: var(--text-secondary, #888);
        }

        .filter-group select {
          padding: 6px 10px;
          background: var(--background-tertiary, #2a2a2a);
          border: 1px solid var(--border-color, #333);
          border-radius: 6px;
          color: var(--text-primary, #fff);
          font-size: 13px;
        }

        .image-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 12px;
        }

        .image-card {
          background: var(--background-tertiary, #2a2a2a);
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.2s;
          border: 2px solid transparent;
        }

        .image-card:hover {
          border-color: var(--accent-primary, #4a9eff);
        }

        .image-card.selected {
          border-color: var(--accent-primary, #4a9eff);
        }

        .image-preview {
          position: relative;
          aspect-ratio: 4/3;
        }

        .preview-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .preview-icon {
          font-size: 32px;
          opacity: 0.5;
        }

        .image-badges {
          position: absolute;
          bottom: 8px;
          left: 8px;
          right: 8px;
          display: flex;
          gap: 4px;
        }

        .magnification-badge,
        .stain-badge {
          padding: 2px 6px;
          background: rgba(0, 0, 0, 0.7);
          border-radius: 4px;
          font-size: 10px;
          color: white;
        }

        .image-info {
          padding: 10px;
        }

        .image-title {
          margin: 0 0 6px 0;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-primary, #fff);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .category-badge {
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 500;
          color: white;
          text-transform: capitalize;
        }

        .no-results {
          text-align: center;
          padding: 24px;
          color: var(--text-tertiary, #666);
        }

        /* Stains Grid */
        .stains-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 12px;
        }

        .stain-card {
          padding: 14px;
          background: var(--background-tertiary, #2a2a2a);
          border-radius: 8px;
        }

        .stain-card h4 {
          margin: 0 0 10px 0;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary, #fff);
        }

        .stain-details {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        /* Structures Grid */
        .structures-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 12px;
        }

        .structure-card {
          padding: 14px;
          background: var(--background-tertiary, #2a2a2a);
          border-radius: 8px;
        }

        .structure-card h4 {
          margin: 0 0 8px 0;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary, #fff);
        }

        .structure-card p {
          margin: 0;
          font-size: 13px;
          color: var(--text-secondary, #888);
          line-height: 1.5;
        }

        .structure-clinical {
          margin-top: 10px;
          padding: 8px;
          background: rgba(255, 193, 7, 0.1);
          border: 1px solid rgba(255, 193, 7, 0.3);
          border-radius: 4px;
          font-size: 12px;
        }

        /* Microscopy Viewer */
        .microscopy-viewer {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--background-primary, #0a0a0a);
        }

        .viewer-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 16px;
          background: var(--background-secondary, #1a1a1a);
          border-bottom: 1px solid var(--border-color, #333);
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: var(--button-background, #2a2a2a);
          border: none;
          border-radius: 6px;
          color: var(--text-primary, #fff);
          cursor: pointer;
          font-size: 13px;
        }

        .viewer-header h3 {
          margin: 0;
          flex: 1;
          font-size: 16px;
          font-weight: 500;
        }

        .viewer-controls {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .mag-display {
          padding: 4px 8px;
          background: var(--background-tertiary, #2a2a2a);
          border-radius: 4px;
          font-family: monospace;
          font-size: 12px;
        }

        .viewer-controls button {
          padding: 6px 12px;
          background: var(--button-background, #2a2a2a);
          border: none;
          border-radius: 4px;
          color: var(--text-secondary, #888);
          cursor: pointer;
          font-size: 12px;
        }

        .viewer-controls button.active {
          background: var(--accent-primary, #4a9eff);
          color: white;
        }

        .viewer-content {
          flex: 1;
          display: flex;
          overflow: hidden;
        }

        .image-viewport {
          flex: 1;
          position: relative;
          overflow: hidden;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-container {
          position: relative;
          transition: transform 0.1s;
        }

        .image-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px dashed #444;
        }

        .placeholder-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: #666;
          text-align: center;
        }

        .placeholder-icon {
          font-size: 48px;
        }

        .file-name {
          font-size: 12px;
          color: #555;
        }

        .annotation-point {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 5;
        }

        .annotation-marker {
          width: 12px;
          height: 12px;
          background: #ff6b6b;
          border: 2px solid #fff;
          border-radius: 50%;
          cursor: pointer;
        }

        .annotation-label {
          position: absolute;
          left: 50%;
          top: 100%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: #fff;
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 11px;
          white-space: nowrap;
          margin-top: 4px;
        }

        .zoom-controls {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          background: rgba(0, 0, 0, 0.7);
          padding: 8px;
          border-radius: 8px;
        }

        .zoom-controls button {
          width: 36px;
          height: 36px;
          background: #333;
          border: none;
          color: #fff;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }

        .info-panel {
          width: 280px;
          background: var(--background-secondary, #1a1a1a);
          border-left: 1px solid var(--border-color, #333);
          overflow-y: auto;
          padding: 16px;
        }

        .info-section {
          margin-bottom: 20px;
        }

        .info-section h4 {
          margin: 0 0 8px 0;
          font-size: 12px;
          color: var(--text-tertiary, #666);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-section p {
          margin: 0;
          font-size: 13px;
          color: var(--text-secondary, #888);
          line-height: 1.5;
        }

        .info-section dl {
          margin: 0;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 4px 12px;
        }

        .info-section dt {
          font-size: 12px;
          color: var(--text-tertiary, #666);
        }

        .info-section dd {
          margin: 0;
          font-size: 13px;
          color: var(--text-secondary, #888);
        }

        .info-section ul {
          margin: 0;
          padding: 0 0 0 16px;
        }

        .info-section li {
          font-size: 13px;
          color: var(--text-secondary, #888);
          margin-bottom: 4px;
        }

        .info-section.clinical {
          background: rgba(255, 193, 7, 0.1);
          padding: 12px;
          border-radius: 8px;
          border: 1px solid rgba(255, 193, 7, 0.3);
        }

        .info-section.clinical h4 {
          color: #ffc107;
        }

        .license {
          margin-top: 8px !important;
          font-size: 11px !important;
          color: var(--text-tertiary, #555) !important;
        }

        /* ComplexitySelector compact styles */
        .complexity-selector-compact {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--background-secondary, #1a1a1a);
          padding: 8px 12px;
          border-radius: 8px;
        }

        .complexity-label {
          font-size: 12px;
          color: var(--text-tertiary, #666);
        }

        .complexity-buttons {
          display: flex;
          gap: 4px;
        }

        .complexity-btn {
          width: 32px;
          height: 28px;
          border: 1px solid var(--border-color, #333);
          border-radius: 4px;
          background: var(--background-tertiary, #2a2a2a);
          color: var(--text-secondary, #888);
          cursor: pointer;
          font-size: 11px;
          font-weight: 600;
          transition: all 0.2s;
        }

        .complexity-btn:hover {
          border-color: var(--level-color, var(--accent-primary, #4a9eff));
        }

        .complexity-btn.active {
          background: var(--level-color, var(--accent-primary, #4a9eff));
          border-color: var(--level-color, var(--accent-primary, #4a9eff));
          color: white;
        }

        @media (max-width: 768px) {
          .tab-header {
            flex-direction: column;
          }

          .tissue-grid,
          .stains-grid,
          .structures-grid {
            grid-template-columns: 1fr;
          }

          .image-gallery {
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          }

          .info-panel {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default HistologyTab;
