/**
 * React Hook for Brain Content RAG
 * 
 * Provides easy access to brain educational content from components.
 */

import { useState, useEffect, useCallback } from 'react';
import {
  initializeBrainContentIndex,
  searchBrainContent,
  getBrainContentByStructure,
  getBrainContentByCategory,
  brainContentToDocument,
  BrainContentLookup,
  getBrainContentStats,
} from '../brainContentRAG';
import type { EducationalContent } from '../../core/content/types';
import type { ContentDocument } from '../ContentViewer';

export function useBrainContentRAG() {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({ totalContent: 0, byCategory: {} });

  // Initialize on mount
  useEffect(() => {
    const init = async () => {
      await initializeBrainContentIndex();
      setStats(getBrainContentStats());
      setIsLoading(false);
    };
    init();
  }, []);

  /**
   * Search for brain content
   */
  const search = useCallback((query: string): EducationalContent[] => {
    return searchBrainContent(query);
  }, []);

  /**
   * Get content by structure name
   */
  const getByStructure = useCallback((structureName: string): EducationalContent | null => {
    return getBrainContentByStructure(structureName);
  }, []);

  /**
   * Get content by category
   */
  const getByCategory = useCallback((category: string): EducationalContent[] => {
    return getBrainContentByCategory(category);
  }, []);

  /**
   * Get content document for display
   */
  const getDocument = useCallback((content: EducationalContent, level: 1 | 2 | 3 | 4 | 5 = 3): ContentDocument => {
    return brainContentToDocument(content, level);
  }, []);

  /**
   * Quick lookup for menu items
   */
  const lookup = useCallback((type: keyof typeof BrainContentLookup): ContentDocument | null => {
    const content = BrainContentLookup[type]();
    if (!content) return null;
    return brainContentToDocument(content);
  }, []);

  return {
    isLoading,
    stats,
    search,
    getByStructure,
    getByCategory,
    getDocument,
    lookup,
  };
}
