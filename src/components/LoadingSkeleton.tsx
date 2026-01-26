/**
 * Loading Skeleton Components
 *
 * Optimized skeleton loading states that provide visual feedback
 * while content is loading, improving perceived performance.
 */

import { memo, useMemo } from 'react';

// ============================================
// Types
// ============================================

export interface SkeletonProps {
  /** Width (CSS value or number for pixels) */
  width?: string | number;
  /** Height (CSS value or number for pixels) */
  height?: string | number;
  /** Border radius */
  borderRadius?: string | number;
  /** Optional className */
  className?: string;
  /** Animation style */
  animation?: 'pulse' | 'wave' | 'none';
  /** Delay before showing (helps prevent flash for fast loads) */
  delay?: number;
}

// ============================================
// Base Skeleton Component
// ============================================

function SkeletonBase({
  width = '100%',
  height = 20,
  borderRadius = 4,
  className = '',
  animation = 'pulse',
}: SkeletonProps) {
  const style: React.CSSProperties = useMemo(
    () => ({
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
      borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
    }),
    [width, height, borderRadius]
  );

  return (
    <div
      className={`skeleton skeleton--${animation} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

export const Skeleton = memo(SkeletonBase);

// ============================================
// Text Skeleton
// ============================================

interface TextSkeletonProps {
  /** Number of lines */
  lines?: number;
  /** Width of last line (CSS value or percentage) */
  lastLineWidth?: string;
  /** Line height */
  lineHeight?: number;
  /** Gap between lines */
  gap?: number;
  /** Optional className */
  className?: string;
}

function TextSkeletonBase({
  lines = 3,
  lastLineWidth = '60%',
  lineHeight = 16,
  gap = 8,
  className = '',
}: TextSkeletonProps) {
  const lineElements = useMemo(() => {
    return Array.from({ length: lines }, (_, i) => (
      <Skeleton
        key={i}
        width={i === lines - 1 ? lastLineWidth : '100%'}
        height={lineHeight}
      />
    ));
  }, [lines, lastLineWidth, lineHeight]);

  return (
    <div
      className={`text-skeleton ${className}`}
      style={{ display: 'flex', flexDirection: 'column', gap }}
    >
      {lineElements}
    </div>
  );
}

export const TextSkeleton = memo(TextSkeletonBase);

// ============================================
// Card Skeleton
// ============================================

interface CardSkeletonProps {
  /** Include image placeholder */
  hasImage?: boolean;
  /** Image height */
  imageHeight?: number;
  /** Number of text lines */
  textLines?: number;
  /** Optional className */
  className?: string;
}

function CardSkeletonBase({
  hasImage = true,
  imageHeight = 120,
  textLines = 2,
  className = '',
}: CardSkeletonProps) {
  return (
    <div className={`card-skeleton ${className}`}>
      {hasImage && (
        <Skeleton
          width="100%"
          height={imageHeight}
          borderRadius="8px 8px 0 0"
        />
      )}
      <div className="card-skeleton__content" style={{ padding: 16 }}>
        <Skeleton width="70%" height={20} />
        <div style={{ height: 12 }} />
        <TextSkeleton lines={textLines} />
      </div>
    </div>
  );
}

export const CardSkeleton = memo(CardSkeletonBase);

// ============================================
// List Item Skeleton
// ============================================

interface ListItemSkeletonProps {
  /** Include avatar/icon placeholder */
  hasAvatar?: boolean;
  /** Avatar size */
  avatarSize?: number;
  /** Include trailing element */
  hasTrailing?: boolean;
  /** Optional className */
  className?: string;
}

function ListItemSkeletonBase({
  hasAvatar = true,
  avatarSize = 40,
  hasTrailing = false,
  className = '',
}: ListItemSkeletonProps) {
  return (
    <div
      className={`list-item-skeleton ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 0',
      }}
    >
      {hasAvatar && (
        <Skeleton
          width={avatarSize}
          height={avatarSize}
          borderRadius="50%"
        />
      )}
      <div style={{ flex: 1 }}>
        <Skeleton width="60%" height={16} />
        <div style={{ height: 6 }} />
        <Skeleton width="40%" height={14} />
      </div>
      {hasTrailing && (
        <Skeleton width={60} height={24} borderRadius={4} />
      )}
    </div>
  );
}

export const ListItemSkeleton = memo(ListItemSkeletonBase);

// ============================================
// Grid Skeleton
// ============================================

interface GridSkeletonProps {
  /** Number of items */
  count?: number;
  /** Number of columns */
  columns?: number;
  /** Gap between items */
  gap?: number;
  /** Item height */
  itemHeight?: number;
  /** Optional className */
  className?: string;
}

function GridSkeletonBase({
  count = 6,
  columns = 3,
  gap = 16,
  itemHeight = 150,
  className = '',
}: GridSkeletonProps) {
  const items = useMemo(() => {
    return Array.from({ length: count }, (_, i) => (
      <Skeleton key={i} height={itemHeight} borderRadius={8} />
    ));
  }, [count, itemHeight]);

  return (
    <div
      className={`grid-skeleton ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
      }}
    >
      {items}
    </div>
  );
}

export const GridSkeleton = memo(GridSkeletonBase);

// ============================================
// Dashboard Skeleton
// ============================================

interface DashboardSkeletonProps {
  className?: string;
}

export function DashboardSkeleton({ className = '' }: DashboardSkeletonProps) {
  return (
    <div className={`dashboard-skeleton ${className}`}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <Skeleton width={200} height={32} />
        <div style={{ height: 8 }} />
        <Skeleton width={300} height={20} />
      </div>

      {/* Stats Row */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        <Skeleton width="25%" height={100} borderRadius={12} />
        <Skeleton width="25%" height={100} borderRadius={12} />
        <Skeleton width="25%" height={100} borderRadius={12} />
        <Skeleton width="25%" height={100} borderRadius={12} />
      </div>

      {/* Content Sections */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
          <div style={{ marginBottom: 16 }}>
            <Skeleton width={150} height={24} />
          </div>
          <ListItemSkeleton />
          <ListItemSkeleton />
          <ListItemSkeleton />
        </div>
        <div>
          <div style={{ marginBottom: 16 }}>
            <Skeleton width={150} height={24} />
          </div>
          <ListItemSkeleton />
          <ListItemSkeleton />
          <ListItemSkeleton />
        </div>
      </div>
    </div>
  );
}

// ============================================
// Anatomy Viewer Skeleton
// ============================================

export function AnatomyViewerSkeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={`anatomy-viewer-skeleton ${className}`}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: '#1a1a2e',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: 16,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Skeleton width={100} height={32} borderRadius={8} />
        <Skeleton width={200} height={28} />
        <div style={{ width: 100 }} />
      </div>

      {/* Controls */}
      <div style={{ padding: '8px 16px', display: 'flex', gap: 8 }}>
        {Array.from({ length: 6 }, (_, i) => (
          <Skeleton key={i} width={80} height={32} borderRadius={6} />
        ))}
      </div>

      {/* 3D Viewport placeholder */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 16,
        }}
      >
        <div
          className="viewer-loading-placeholder"
          style={{
            width: '80%',
            maxWidth: 400,
            aspectRatio: '1',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #2a2a3a 0%, #1a1a2e 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="loading-spinner" style={{ width: 48, height: 48 }}>
            <svg viewBox="0 0 24 24" className="spin">
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="2"
                strokeDasharray="31.4"
                strokeDashoffset="23.6"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: 16,
          display: 'flex',
          justifyContent: 'center',
          gap: 24,
        }}
      >
        <Skeleton width={120} height={16} />
        <Skeleton width={80} height={16} />
        <Skeleton width={100} height={16} />
      </div>
    </div>
  );
}

// ============================================
// Chat Skeleton
// ============================================

export function ChatSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`chat-skeleton ${className}`}>
      {/* Message bubbles */}
      {Array.from({ length: 3 }, (_, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
            marginBottom: 16,
          }}
        >
          <Skeleton
            width={i % 2 === 0 ? '70%' : '50%'}
            height={60 + Math.random() * 40}
            borderRadius={16}
          />
        </div>
      ))}
    </div>
  );
}

// ============================================
// Skeleton CSS Styles
// ============================================

export const skeletonStyles = `
.skeleton {
  background: linear-gradient(90deg, #2a2a3a 0%, #3a3a4a 50%, #2a2a3a 100%);
  background-size: 200% 100%;
}

.skeleton--pulse {
  animation: skeleton-pulse 1.5s ease-in-out infinite;
}

.skeleton--wave {
  animation: skeleton-wave 1.5s linear infinite;
}

.skeleton--none {
  animation: none;
}

@keyframes skeleton-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes skeleton-wave {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.card-skeleton {
  background: #2a2a3a;
  border-radius: 12px;
  overflow: hidden;
}

.loading-spinner svg {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Accessibility: Reduce motion */
@media (prefers-reduced-motion: reduce) {
  .skeleton--pulse,
  .skeleton--wave {
    animation: none;
  }

  .loading-spinner svg {
    animation: none;
  }
}
`;

export default Skeleton;
