/**
 * Comparison State Hook
 *
 * Manages the state for comparing items side-by-side.
 */

import { useState, useCallback } from 'react';
import type { ComparisonItem, ComparisonItemType } from '../components/ComparisonView';

export interface UseComparisonOptions {
  maxItems?: number;
  persistKey?: string;
}

export function useComparison(options: UseComparisonOptions = {}) {
  const { maxItems = 4, persistKey } = options;
  
  const [items, setItems] = useState<ComparisonItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((item: ComparisonItem) => {
    setItems((prev) => {
      // Check if already exists
      if (prev.some((i) => i.id === item.id)) {
        return prev;
      }
      
      // Check max items
      if (prev.length >= maxItems) {
        console.warn(`Cannot add more than ${maxItems} items to comparison`);
        return prev;
      }
      
      return [...prev, item];
    });
  }, [maxItems]);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearItems = useCallback(() => {
    setItems([]);
  }, []);

  const openComparison = useCallback(() => {
    if (items.length > 0) {
      setIsOpen(true);
    }
  }, [items.length]);

  const closeComparison = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleComparison = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const canAddMore = items.length < maxItems;
  const hasItems = items.length > 0;

  return {
    items,
    isOpen,
    canAddMore,
    hasItems,
    itemCount: items.length,
    addItem,
    removeItem,
    clearItems,
    openComparison,
    closeComparison,
    toggleComparison,
  };
}

export default useComparison;
