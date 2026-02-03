/**
 * Virtual List Component
 *
 * Efficiently renders large lists by only mounting visible items.
 * Essential for smooth scrolling with hundreds or thousands of items.
 */

import { useState, useRef, useEffect, useMemo, useCallback, memo } from 'react';

// ============================================
// Types
// ============================================

export interface VirtualListProps<T> {
  /** Array of items to render */
  items: T[];
  /** Height of each item in pixels (or function for variable heights) */
  itemHeight: number | ((item: T, index: number) => number);
  /** Height of the list container */
  containerHeight: number;
  /** Number of items to render above/below visible area */
  overscan?: number;
  /** Render function for each item */
  renderItem: (item: T, index: number, style: React.CSSProperties) => React.ReactNode;
  /** Optional className for the container */
  className?: string;
  /** Optional callback when scroll position changes */
  onScroll?: (scrollTop: number) => void;
  /** Unique key extractor for items */
  getKey?: (item: T, index: number) => string | number;
}

// ============================================
// Virtual List Component
// ============================================

function VirtualListInner<T>({
  items,
  itemHeight,
  containerHeight,
  overscan = 3,
  renderItem,
  className = '',
  onScroll,
  getKey,
}: VirtualListProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  // Calculate item heights (support variable heights)
  const itemHeights = useMemo(() => {
    if (typeof itemHeight === 'number') {
      return items.map(() => itemHeight);
    }
    return items.map((item, index) => itemHeight(item, index));
  }, [items, itemHeight]);

  // Calculate cumulative offsets for each item
  const itemOffsets = useMemo(() => {
    const offsets: number[] = [];
    let offset = 0;
    for (const height of itemHeights) {
      offsets.push(offset);
      offset += height;
    }
    return offsets;
  }, [itemHeights]);

  // Total height of all items
  const totalHeight = useMemo(() => {
    return itemOffsets.length > 0
      ? itemOffsets[itemOffsets.length - 1] + itemHeights[itemHeights.length - 1]
      : 0;
  }, [itemOffsets, itemHeights]);

  // Calculate visible range
  const { startIndex, endIndex } = useMemo(() => {
    if (items.length === 0) {
      return { startIndex: 0, endIndex: 0 };
    }

    // Binary search for start index
    let start = 0;
    let end = items.length - 1;

    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (itemOffsets[mid] + itemHeights[mid] < scrollTop) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }

    const startIdx = Math.max(0, start - overscan);

    // Find end index
    const visibleEnd = scrollTop + containerHeight;
    let endIdx = startIdx;
    while (endIdx < items.length && itemOffsets[endIdx] < visibleEnd) {
      endIdx++;
    }
    endIdx = Math.min(items.length - 1, endIdx + overscan);

    return { startIndex: startIdx, endIndex: endIdx };
  }, [items.length, itemOffsets, itemHeights, scrollTop, containerHeight, overscan]);

  // Handle scroll events (throttled)
  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      const newScrollTop = e.currentTarget.scrollTop;
      setScrollTop(newScrollTop);
      onScroll?.(newScrollTop);
    },
    [onScroll]
  );

  // Render only visible items
  const visibleItems = useMemo(() => {
    const rendered: React.ReactNode[] = [];

    for (let i = startIndex; i <= endIndex; i++) {
      const item = items[i];
      const style: React.CSSProperties = {
        position: 'absolute',
        top: itemOffsets[i],
        left: 0,
        right: 0,
        height: itemHeights[i],
      };

      const key = getKey ? getKey(item, i) : i;
      rendered.push(
        <div key={key} style={style}>
          {renderItem(item, i, style)}
        </div>
      );
    }

    return rendered;
  }, [items, startIndex, endIndex, itemOffsets, itemHeights, renderItem, getKey]);

  return (
    <div
      ref={containerRef}
      className={`virtual-list ${className}`}
      style={{
        height: containerHeight,
        overflow: 'auto',
        position: 'relative',
      }}
      onScroll={handleScroll}
    >
      <div
        style={{
          height: totalHeight,
          position: 'relative',
        }}
      >
        {visibleItems}
      </div>
    </div>
  );
}

// Memoize the component
export const VirtualList = memo(VirtualListInner) as typeof VirtualListInner;

// ============================================
// Simple Virtual List (Fixed Height)
// ============================================

export interface SimpleVirtualListProps<T> {
  items: T[];
  itemHeight: number;
  containerHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  getKey?: (item: T, index: number) => string | number;
}

/**
 * Simplified virtual list for fixed-height items
 * More performant than the full VirtualList for simple use cases
 */
export function SimpleVirtualList<T>({
  items,
  itemHeight,
  containerHeight,
  renderItem,
  className = '',
  getKey,
}: SimpleVirtualListProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);

  const totalHeight = items.length * itemHeight;
  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - 2);
  const endIndex = Math.min(items.length - 1, startIndex + visibleCount + 4);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  const visibleItems = useMemo(() => {
    const rendered: React.ReactNode[] = [];
    for (let i = startIndex; i <= endIndex; i++) {
      const key = getKey ? getKey(items[i], i) : i;
      rendered.push(
        <div
          key={key}
          style={{
            position: 'absolute',
            top: i * itemHeight,
            left: 0,
            right: 0,
            height: itemHeight,
          }}
        >
          {renderItem(items[i], i)}
        </div>
      );
    }
    return rendered;
  }, [items, startIndex, endIndex, itemHeight, renderItem, getKey]);

  return (
    <div
      className={`simple-virtual-list ${className}`}
      style={{
        height: containerHeight,
        overflow: 'auto',
        position: 'relative',
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems}
      </div>
    </div>
  );
}

// ============================================
// Windowed Grid (for 2D virtualization)
// ============================================

export interface WindowedGridProps<T> {
  items: T[];
  columns: number;
  itemWidth: number;
  itemHeight: number;
  containerWidth: number;
  containerHeight: number;
  gap?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  getKey?: (item: T, index: number) => string | number;
}

/**
 * Virtual grid for efficiently rendering 2D layouts
 */
export function WindowedGrid<T>({
  items,
  columns,
  itemWidth,
  itemHeight,
  containerWidth,
  containerHeight,
  gap = 0,
  renderItem,
  className = '',
  getKey,
}: WindowedGridProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);

  const rows = Math.ceil(items.length / columns);
  const rowHeight = itemHeight + gap;
  const totalHeight = rows * rowHeight - gap;

  const visibleRows = Math.ceil(containerHeight / rowHeight);
  const startRow = Math.max(0, Math.floor(scrollTop / rowHeight) - 1);
  const endRow = Math.min(rows - 1, startRow + visibleRows + 2);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  const visibleItems = useMemo(() => {
    const rendered: React.ReactNode[] = [];

    for (let row = startRow; row <= endRow; row++) {
      for (let col = 0; col < columns; col++) {
        const index = row * columns + col;
        if (index >= items.length) break;

        const key = getKey ? getKey(items[index], index) : index;
        rendered.push(
          <div
            key={key}
            style={{
              position: 'absolute',
              top: row * rowHeight,
              left: col * (itemWidth + gap),
              width: itemWidth,
              height: itemHeight,
            }}
          >
            {renderItem(items[index], index)}
          </div>
        );
      }
    }

    return rendered;
  }, [items, startRow, endRow, columns, itemWidth, itemHeight, rowHeight, gap, renderItem, getKey]);

  return (
    <div
      className={`windowed-grid ${className}`}
      style={{
        width: containerWidth,
        height: containerHeight,
        overflow: 'auto',
        position: 'relative',
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems}
      </div>
    </div>
  );
}

// ============================================
// CSS for Virtual Lists
// ============================================

export const virtualListStyles = `
.virtual-list,
.simple-virtual-list,
.windowed-grid {
  /* Smooth scrolling on iOS */
  -webkit-overflow-scrolling: touch;

  /* Hide scrollbar but keep functionality */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.virtual-list::-webkit-scrollbar,
.simple-virtual-list::-webkit-scrollbar,
.windowed-grid::-webkit-scrollbar {
  width: 8px;
}

.virtual-list::-webkit-scrollbar-track,
.simple-virtual-list::-webkit-scrollbar-track,
.windowed-grid::-webkit-scrollbar-track {
  background: transparent;
}

.virtual-list::-webkit-scrollbar-thumb,
.simple-virtual-list::-webkit-scrollbar-thumb,
.windowed-grid::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}
`;

export default VirtualList;
