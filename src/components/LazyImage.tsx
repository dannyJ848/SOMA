/**
 * Lazy Image Component
 *
 * Optimized image loading with:
 * - Intersection Observer for lazy loading
 * - Progressive loading with blur-up effect
 * - Automatic fallback handling
 * - Preloading support
 */

import { useState, useRef, useEffect, memo, useCallback } from 'react';

// ============================================
// Types
// ============================================

export interface LazyImageProps {
  /** Image source URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Optional low-quality placeholder image (for blur-up effect) */
  placeholder?: string;
  /** Optional width */
  width?: number | string;
  /** Optional height */
  height?: number | string;
  /** Optional className */
  className?: string;
  /** Object fit style */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  /** Callback when image loads */
  onLoad?: () => void;
  /** Callback when image fails to load */
  onError?: (error: Error) => void;
  /** Whether to preload immediately (skip lazy loading) */
  preload?: boolean;
  /** Root margin for intersection observer */
  rootMargin?: string;
  /** Aspect ratio (width / height) for placeholder sizing */
  aspectRatio?: number;
}

// ============================================
// Image Loading State
// ============================================

type LoadingState = 'idle' | 'loading' | 'loaded' | 'error';

// ============================================
// LazyImage Component
// ============================================

function LazyImageInner({
  src,
  alt,
  placeholder,
  width,
  height,
  className = '',
  objectFit = 'cover',
  onLoad,
  onError,
  preload = false,
  rootMargin = '100px',
  aspectRatio,
}: LazyImageProps) {
  const [state, setState] = useState<LoadingState>(preload ? 'loading' : 'idle');
  const [isInView, setIsInView] = useState(preload);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Handle intersection observer
  useEffect(() => {
    if (preload || isInView) return;

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0,
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [preload, isInView, rootMargin]);

  // Start loading when in view
  useEffect(() => {
    if (!isInView || state !== 'idle') return;

    setState('loading');
  }, [isInView, state]);

  // Handle image load
  const handleLoad = useCallback(() => {
    setState('loaded');
    onLoad?.();
  }, [onLoad]);

  // Handle image error
  const handleError = useCallback(() => {
    setState('error');
    onError?.(new Error(`Failed to load image: ${src}`));
  }, [src, onError]);

  // Calculate container style
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: width ?? '100%',
    height: height ?? (aspectRatio ? 'auto' : '100%'),
    overflow: 'hidden',
  };

  if (aspectRatio && !height) {
    containerStyle.paddingBottom = `${(1 / aspectRatio) * 100}%`;
  }

  // Image style
  const imageStyle: React.CSSProperties = {
    position: aspectRatio ? 'absolute' : 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit,
    opacity: state === 'loaded' ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  // Placeholder style
  const placeholderStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit,
    opacity: state === 'loaded' ? 0 : 1,
    transition: 'opacity 0.3s ease-in-out',
    filter: 'blur(10px)',
    transform: 'scale(1.1)', // Hide blur edges
  };

  return (
    <div
      ref={containerRef}
      className={`lazy-image ${className} lazy-image--${state}`}
      style={containerStyle}
    >
      {/* Placeholder (low-quality or solid color) */}
      {placeholder ? (
        <img
          src={placeholder}
          alt=""
          aria-hidden="true"
          style={placeholderStyle}
        />
      ) : (
        <div
          className="lazy-image__placeholder"
          style={{
            ...placeholderStyle,
            background: 'linear-gradient(135deg, #2a2a3a 0%, #1a1a2e 100%)',
            filter: 'none',
          }}
        />
      )}

      {/* Loading spinner */}
      {state === 'loading' && (
        <div className="lazy-image__spinner">
          <svg viewBox="0 0 24 24" className="spinner-icon">
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="31.4 31.4"
            />
          </svg>
        </div>
      )}

      {/* Error state */}
      {state === 'error' && (
        <div className="lazy-image__error">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          <span>Failed to load</span>
        </div>
      )}

      {/* Main image */}
      {isInView && state !== 'error' && (
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          style={imageStyle}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
}

// Memoize the component
export const LazyImage = memo(LazyImageInner);

// ============================================
// Image Preloader Utility
// ============================================

const preloadedImages = new Set<string>();
const preloadingImages = new Map<string, Promise<void>>();

/**
 * Preload an image into browser cache
 */
export function preloadImage(src: string): Promise<void> {
  if (preloadedImages.has(src)) {
    return Promise.resolve();
  }

  if (preloadingImages.has(src)) {
    return preloadingImages.get(src)!;
  }

  const promise = new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      preloadedImages.add(src);
      preloadingImages.delete(src);
      resolve();
    };
    img.onerror = () => {
      preloadingImages.delete(src);
      reject(new Error(`Failed to preload: ${src}`));
    };
    img.src = src;
  });

  preloadingImages.set(src, promise);
  return promise;
}

/**
 * Preload multiple images
 */
export function preloadImages(srcs: string[]): Promise<void[]> {
  return Promise.all(srcs.map(preloadImage));
}

/**
 * Check if an image is preloaded
 */
export function isImagePreloaded(src: string): boolean {
  return preloadedImages.has(src);
}

// ============================================
// Image Gallery with Preloading
// ============================================

export interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    placeholder?: string;
  }>;
  columns?: number;
  gap?: number;
  imageHeight?: number;
  onImageClick?: (index: number) => void;
  className?: string;
}

/**
 * Optimized image gallery with lazy loading and preloading
 */
export function ImageGallery({
  images,
  columns = 3,
  gap = 8,
  imageHeight = 200,
  onImageClick,
  className = '',
}: ImageGalleryProps) {
  // Preload next few images when hovering over gallery
  const handleMouseEnter = useCallback(() => {
    // Preload first 6 images
    const toPreload = images.slice(0, 6).map(img => img.src);
    preloadImages(toPreload).catch(() => {});
  }, [images]);

  return (
    <div
      className={`image-gallery ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
      }}
      onMouseEnter={handleMouseEnter}
    >
      {images.map((image, index) => (
        <div
          key={image.src}
          className="image-gallery__item"
          onClick={() => onImageClick?.(index)}
          style={{ cursor: onImageClick ? 'pointer' : 'default' }}
        >
          <LazyImage
            src={image.src}
            alt={image.alt}
            placeholder={image.placeholder}
            height={imageHeight}
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
}

// ============================================
// CSS Styles
// ============================================

export const lazyImageStyles = `
.lazy-image {
  background-color: #1a1a2e;
}

.lazy-image__spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.5);
}

.lazy-image__spinner .spinner-icon {
  width: 32px;
  height: 32px;
  animation: lazy-image-spin 1s linear infinite;
}

@keyframes lazy-image-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.lazy-image__error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
}

.lazy-image__error svg {
  width: 24px;
  height: 24px;
}

.image-gallery__item {
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.image-gallery__item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
`;

export default LazyImage;
