/**
 * Histology Viewer Component
 *
 * Interactive viewer for histology images with zoom, pan, and annotation display.
 * Supports multiple magnifications and side-by-side comparison.
 */

import { useState, useRef, useCallback } from 'react';
import type {
  HistologyImage,
  AnnotationPoint,
  AnnotationRegion,
  Magnification,
} from '../core/histology/types';

interface HistologyViewerProps {
  image: HistologyImage;
  relatedImages?: HistologyImage[];
  onStructureClick?: (structureId: string) => void;
  onBack?: () => void;
  complexityLevel?: 1 | 2 | 3 | 4 | 5;
}

interface ViewState {
  scale: number;
  offsetX: number;
  offsetY: number;
}

const MIN_SCALE = 0.5;
const MAX_SCALE = 10;
const ZOOM_STEP = 0.25;

export function HistologyViewer({
  image,
  relatedImages = [],
  onStructureClick,
  onBack,
  complexityLevel = 3,
}: HistologyViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewState, setViewState] = useState<ViewState>({
    scale: 1,
    offsetX: 0,
    offsetY: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [selectedAnnotation, setSelectedAnnotation] = useState<AnnotationPoint | AnnotationRegion | null>(null);
  const [compareImage, setCompareImage] = useState<HistologyImage | null>(null);
  const [showInfo, setShowInfo] = useState(true);

  // Handle mouse wheel zoom
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
    setViewState(prev => ({
      ...prev,
      scale: Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev.scale + delta)),
    }));
  }, []);

  // Handle mouse down for pan
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button === 0) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - viewState.offsetX, y: e.clientY - viewState.offsetY });
    }
  }, [viewState.offsetX, viewState.offsetY]);

  // Handle mouse move for pan
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      setViewState(prev => ({
        ...prev,
        offsetX: e.clientX - dragStart.x,
        offsetY: e.clientY - dragStart.y,
      }));
    }
  }, [isDragging, dragStart]);

  // Handle mouse up
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Handle touch for mobile
  const [lastTouchDistance, setLastTouchDistance] = useState<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setLastTouchDistance(distance);
    } else if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - viewState.offsetX,
        y: e.touches[0].clientY - viewState.offsetY,
      });
    }
  }, [viewState.offsetX, viewState.offsetY]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2 && lastTouchDistance !== null) {
      // Pinch zoom
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const delta = (distance - lastTouchDistance) * 0.01;
      setViewState(prev => ({
        ...prev,
        scale: Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev.scale + delta)),
      }));
      setLastTouchDistance(distance);
    } else if (e.touches.length === 1 && isDragging) {
      // Pan
      setViewState(prev => ({
        ...prev,
        offsetX: e.touches[0].clientX - dragStart.x,
        offsetY: e.touches[0].clientY - dragStart.y,
      }));
    }
  }, [isDragging, dragStart, lastTouchDistance]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setLastTouchDistance(null);
  }, []);

  // Zoom controls
  const zoomIn = () => {
    setViewState(prev => ({
      ...prev,
      scale: Math.min(MAX_SCALE, prev.scale + ZOOM_STEP * 2),
    }));
  };

  const zoomOut = () => {
    setViewState(prev => ({
      ...prev,
      scale: Math.max(MIN_SCALE, prev.scale - ZOOM_STEP * 2),
    }));
  };

  const resetView = () => {
    setViewState({ scale: 1, offsetX: 0, offsetY: 0 });
  };

  // Handle annotation click
  const handleAnnotationClick = (annotation: AnnotationPoint | AnnotationRegion) => {
    setSelectedAnnotation(annotation);
    if ('structureId' in annotation && annotation.structureId && onStructureClick) {
      onStructureClick(annotation.structureId);
    }
  };

  // Magnification display
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

  const currentMagnification = getMagnificationValue(image.magnification) * viewState.scale;

  // Get complexity-appropriate description
  const getDescription = () => {
    // In a full implementation, this would pull from tissueType.characteristics
    return image.description;
  };

  return (
    <div className="histology-viewer">
      {/* Header */}
      <div className="histology-header">
        <div className="header-left">
          {onBack && (
            <button onClick={onBack} className="back-button">
              Back
            </button>
          )}
          <h2>{image.title}</h2>
        </div>
        <div className="header-controls">
          <span className="magnification-display">
            {currentMagnification.toFixed(0)}x
          </span>
          <button
            onClick={() => setShowAnnotations(!showAnnotations)}
            className={showAnnotations ? 'active' : ''}
          >
            {showAnnotations ? 'Hide' : 'Show'} Labels
          </button>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className={showInfo ? 'active' : ''}
          >
            {showInfo ? 'Hide' : 'Show'} Info
          </button>
        </div>
      </div>

      <div className="histology-content">
        {/* Main viewer */}
        <div
          className={`image-viewer ${compareImage ? 'split' : ''}`}
          ref={containerRef}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {/* Primary image */}
          <div className="image-container primary">
            <div
              className="image-transform"
              style={{
                transform: `translate(${viewState.offsetX}px, ${viewState.offsetY}px) scale(${viewState.scale})`,
                transformOrigin: 'center center',
              }}
            >
              {/* Image placeholder - actual image would be loaded */}
              <div
                className="image-placeholder"
                style={{
                  width: image.width || 800,
                  height: image.height || 600,
                  background: `linear-gradient(135deg, #f5e6e8 25%, #e8d4e8 50%, #f5e6e8 75%)`,
                }}
              >
                <div className="placeholder-text">
                  <span>{image.title}</span>
                  <span className="placeholder-note">
                    Image: {image.filename}
                  </span>
                </div>
              </div>

              {/* Annotation points */}
              {showAnnotations && image.annotations.points.map((point, index) => (
                <div
                  key={`point-${index}`}
                  className={`annotation-point ${selectedAnnotation === point ? 'selected' : ''}`}
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAnnotationClick(point);
                  }}
                >
                  <div className="annotation-marker" />
                  <div className="annotation-label">{point.label}</div>
                </div>
              ))}

              {/* Annotation regions */}
              {showAnnotations && image.annotations.regions.map((region, index) => (
                <div
                  key={`region-${index}`}
                  className={`annotation-region ${region.type} ${selectedAnnotation === region ? 'selected' : ''}`}
                  style={
                    region.type === 'rect' ? {
                      left: `${region.x}%`,
                      top: `${region.y}%`,
                      width: `${region.width}%`,
                      height: `${region.height}%`,
                    } : region.type === 'circle' ? {
                      left: `${(region.x || 0) - (region.radius || 0)}%`,
                      top: `${(region.y || 0) - (region.radius || 0)}%`,
                      width: `${(region.radius || 0) * 2}%`,
                      height: `${(region.radius || 0) * 2}%`,
                      borderRadius: '50%',
                    } : {}
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAnnotationClick(region);
                  }}
                >
                  <div className="region-label">{region.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison image */}
          {compareImage && (
            <div className="image-container compare">
              <div className="compare-header">
                <span>{compareImage.title}</span>
                <button onClick={() => setCompareImage(null)}>Close</button>
              </div>
              <div
                className="image-transform"
                style={{
                  transform: `translate(${viewState.offsetX}px, ${viewState.offsetY}px) scale(${viewState.scale})`,
                  transformOrigin: 'center center',
                }}
              >
                <div
                  className="image-placeholder"
                  style={{
                    width: compareImage.width || 800,
                    height: compareImage.height || 600,
                    background: `linear-gradient(135deg, #e6e8f5 25%, #d4d8e8 50%, #e6e8f5 75%)`,
                  }}
                >
                  <div className="placeholder-text">
                    <span>{compareImage.title}</span>
                    <span className="placeholder-note">
                      {compareImage.magnification}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Zoom controls */}
        <div className="zoom-controls">
          <button onClick={zoomIn} title="Zoom In">+</button>
          <button onClick={resetView} title="Reset View">Reset</button>
          <button onClick={zoomOut} title="Zoom Out">-</button>
        </div>

        {/* Info panel */}
        {showInfo && (
          <div className="info-panel">
            <div className="info-section">
              <h3>Image Details</h3>
              <dl>
                <dt>Tissue Type</dt>
                <dd>{image.tissueCategory} {image.tissueSubtype ? `- ${image.tissueSubtype.replace(/_/g, ' ')}` : ''}</dd>
                <dt>Organ/Source</dt>
                <dd>{image.organSource}</dd>
                <dt>Stain</dt>
                <dd>{image.stain}</dd>
                <dt>Magnification</dt>
                <dd>{image.magnification}</dd>
              </dl>
            </div>

            <div className="info-section">
              <h3>Description</h3>
              <p>{getDescription()}</p>
            </div>

            {image.keyFeatures.length > 0 && (
              <div className="info-section">
                <h3>Key Features</h3>
                <ul>
                  {image.keyFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {image.clinicalRelevance && complexityLevel >= 4 && (
              <div className="info-section clinical">
                <h3>Clinical Relevance</h3>
                <p>{image.clinicalRelevance}</p>
              </div>
            )}

            {/* Selected annotation details */}
            {selectedAnnotation && (
              <div className="info-section annotation-details">
                <h3>Selected: {selectedAnnotation.label}</h3>
                {selectedAnnotation.description && (
                  <p>{selectedAnnotation.description}</p>
                )}
                {'structureId' in selectedAnnotation && selectedAnnotation.structureId && (
                  <button
                    onClick={() => onStructureClick?.(selectedAnnotation.structureId!)}
                    className="view-in-3d"
                  >
                    View in 3D Anatomy
                  </button>
                )}
              </div>
            )}

            {/* Related images */}
            {relatedImages.length > 0 && (
              <div className="info-section related-images">
                <h3>Related Views</h3>
                <div className="related-list">
                  {relatedImages.map(related => (
                    <button
                      key={related.id}
                      onClick={() => setCompareImage(related)}
                      className={compareImage?.id === related.id ? 'active' : ''}
                    >
                      {related.magnification} - {related.stain}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Source attribution */}
            <div className="info-section source">
              <h3>Source</h3>
              <p>
                {image.source === 'blue_histology' && 'Blue Histology (UWA)'}
                {image.source === 'histology_guide' && 'Histology Guide'}
                {image.source === 'custom' && 'Custom'}
                {image.source === 'other' && 'Other'}
              </p>
              {image.sourceUrl && (
                <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer">
                  View Original
                </a>
              )}
              <p className="license">License: {image.license}</p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .histology-viewer {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #1a1a1a;
          color: #fff;
        }

        .histology-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: #2a2a2a;
          border-bottom: 1px solid #333;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .header-left h2 {
          margin: 0;
          font-size: 16px;
          font-weight: 500;
        }

        .back-button {
          background: #333;
          border: none;
          color: #fff;
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
        }

        .header-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .magnification-display {
          font-family: monospace;
          background: #333;
          padding: 4px 8px;
          border-radius: 4px;
        }

        .header-controls button {
          background: #333;
          border: none;
          color: #fff;
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
        }

        .header-controls button.active {
          background: #4a9eff;
        }

        .histology-content {
          flex: 1;
          display: flex;
          position: relative;
          overflow: hidden;
        }

        .image-viewer {
          flex: 1;
          position: relative;
          overflow: hidden;
          background: #111;
        }

        .image-viewer.split {
          display: flex;
        }

        .image-container {
          flex: 1;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-container.compare {
          border-left: 2px solid #333;
        }

        .compare-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.7);
          z-index: 10;
        }

        .image-transform {
          position: relative;
          transition: transform 0.05s ease-out;
        }

        .image-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px dashed #555;
        }

        .placeholder-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: #666;
          text-align: center;
          padding: 20px;
        }

        .placeholder-note {
          font-size: 12px;
          color: #555;
        }

        .annotation-point {
          position: absolute;
          transform: translate(-50%, -50%);
          cursor: pointer;
          z-index: 5;
        }

        .annotation-marker {
          width: 12px;
          height: 12px;
          background: #ff6b6b;
          border: 2px solid #fff;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .annotation-point:hover .annotation-marker,
        .annotation-point.selected .annotation-marker {
          background: #4a9eff;
          transform: scale(1.2);
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
          opacity: 0;
          transition: opacity 0.2s;
        }

        .annotation-point:hover .annotation-label,
        .annotation-point.selected .annotation-label {
          opacity: 1;
        }

        .annotation-region {
          position: absolute;
          border: 2px solid rgba(74, 158, 255, 0.5);
          background: rgba(74, 158, 255, 0.1);
          cursor: pointer;
        }

        .annotation-region:hover,
        .annotation-region.selected {
          border-color: #4a9eff;
          background: rgba(74, 158, 255, 0.2);
        }

        .region-label {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: #fff;
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 11px;
          white-space: nowrap;
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
          font-size: 18px;
        }

        .zoom-controls button:hover {
          background: #444;
        }

        .info-panel {
          width: 300px;
          background: #222;
          border-left: 1px solid #333;
          overflow-y: auto;
          padding: 16px;
        }

        .info-section {
          margin-bottom: 20px;
        }

        .info-section h3 {
          margin: 0 0 8px 0;
          font-size: 13px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-section p {
          margin: 0;
          font-size: 14px;
          line-height: 1.5;
          color: #ccc;
        }

        .info-section dl {
          margin: 0;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 4px 12px;
        }

        .info-section dt {
          color: #888;
          font-size: 12px;
        }

        .info-section dd {
          margin: 0;
          font-size: 14px;
        }

        .info-section ul {
          margin: 0;
          padding-left: 20px;
        }

        .info-section li {
          margin-bottom: 4px;
          font-size: 14px;
          color: #ccc;
        }

        .info-section.clinical {
          background: rgba(255, 193, 7, 0.1);
          padding: 12px;
          border-radius: 8px;
          border: 1px solid rgba(255, 193, 7, 0.3);
        }

        .info-section.clinical h3 {
          color: #ffc107;
        }

        .annotation-details {
          background: rgba(74, 158, 255, 0.1);
          padding: 12px;
          border-radius: 8px;
          border: 1px solid rgba(74, 158, 255, 0.3);
        }

        .view-in-3d {
          margin-top: 8px;
          width: 100%;
          padding: 8px;
          background: #4a9eff;
          border: none;
          color: #fff;
          border-radius: 4px;
          cursor: pointer;
        }

        .related-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .related-list button {
          padding: 6px 10px;
          background: #333;
          border: none;
          color: #fff;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
        }

        .related-list button:hover,
        .related-list button.active {
          background: #4a9eff;
        }

        .info-section.source a {
          color: #4a9eff;
          text-decoration: none;
        }

        .info-section.source .license {
          margin-top: 8px;
          font-size: 12px;
          color: #666;
        }
      `}</style>
    </div>
  );
}

export default HistologyViewer;
