/**
 * React Hook for Universal Content RAG
 * 
 * Provides access to ALL body system educational content.
 */

import { useState, useEffect, useCallback } from 'react';
import {
  initializeUniversalContentIndex,
  searchUniversalContent,
  getContentByStructure,
  getContentBySystem,
  getContentByCategory,
  contentToDocument,
  getUniversalContentStats,
} from '../universalContentRAG';
import type { EducationalContent } from '../../core/content/types';
import type { ContentDocument } from '../ContentViewer';

export function useUniversalContentRAG() {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    totalContent: 0,
    bySystem: {},
    byCategory: {},
  });

  // Initialize on mount
  useEffect(() => {
    const init = async () => {
      await initializeUniversalContentIndex();
      setStats(getUniversalContentStats());
      setIsLoading(false);
    };
    init();
  }, []);

  /**
   * Search all content
   */
  const search = useCallback((query: string): EducationalContent[] => {
    return searchUniversalContent(query);
  }, []);

  /**
   * Get content by structure name
   */
  const getByStructure = useCallback((structureName: string): EducationalContent | null => {
    return getContentByStructure(structureName);
  }, []);

  /**
   * Get content by body system
   */
  const getBySystem = useCallback((system: string): EducationalContent[] => {
    return getContentBySystem(system);
  }, []);

  /**
   * Get content by category
   */
  const getByCategory = useCallback((category: string): EducationalContent[] => {
    return getContentByCategory(category);
  }, []);

  /**
   * Get content document for display
   */
  const getDocument = useCallback((content: EducationalContent, level: 1 | 2 | 3 | 4 | 5 = 3): ContentDocument => {
    return contentToDocument(content, level);
  }, []);

  /**
   * Quick content retrieval by structure name
   */
  const getDocumentByStructure = useCallback((structureName: string, level: 1 | 2 | 3 | 4 | 5 = 3): ContentDocument | null => {
    const content = getContentByStructure(structureName);
    if (!content) return null;
    return contentToDocument(content, level);
  }, []);

  return {
    isLoading,
    stats,
    search,
    getByStructure,
    getBySystem,
    getByCategory,
    getDocument,
    getDocumentByStructure,
  };
}
