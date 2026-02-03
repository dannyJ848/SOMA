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
  getContentByType,
  getUniversalContentStats,
} from '../universalContentRAG';
import type { ContentDocument } from '../ContentViewer';

export function useUniversalContentRAG() {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    totalContent: 0,
    bySystem: {} as Record<string, number>,
    byType: {} as Record<string, number>,
  });

  // Initialize on mount
  useEffect(() => {
    const init = async () => {
      await initializeUniversalContentIndex();
      const statsData = await getUniversalContentStats();
      setStats({
        totalContent: statsData.totalContent,
        bySystem: statsData.bySystem,
        byType: statsData.byType,
      });
      setIsLoading(false);
    };
    init();
  }, []);

  /**
   * Search all content
   */
  const search = useCallback(async (query: string): Promise<ContentDocument[]> => {
    return searchUniversalContent(query);
  }, []);

  /**
   * Get content by structure name
   */
  const getByStructure = useCallback(async (structureName: string): Promise<ContentDocument | null> => {
    return getContentByStructure(structureName);
  }, []);

  /**
   * Get content by body system
   */
  const getBySystem = useCallback(async (system: string): Promise<ContentDocument[]> => {
    return getContentBySystem(system as any);
  }, []);

  /**
   * Get content by type
   */
  const getByType = useCallback(async (type: string): Promise<ContentDocument[]> => {
    return getContentByType(type as any);
  }, []);

  /**
   * Quick content retrieval by structure name
   */
  const getDocumentByStructure = useCallback(async (structureName: string): Promise<ContentDocument | null> => {
    return getContentByStructure(structureName);
  }, []);

  return {
    isLoading,
    stats,
    search,
    getByStructure,
    getBySystem,
    getByType,
    getDocumentByStructure,
  };
}
