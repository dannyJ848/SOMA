/**
 * Favorites/Bookmarks System
 * 
 * Allow users to save and quickly access favorite content.
 */

import { useState, useEffect, useCallback } from 'react';

export interface FavoriteItem {
  id: string;
  title: string;
  type: 'anatomy' | 'condition' | 'medication' | 'lab' | 'article';
  path: string;
  timestamp: number;
  notes?: string;
}

const STORAGE_KEY = 'biological-self-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load favorites:', e);
    }
    setIsLoaded(true);
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
      } catch (e) {
        console.error('Failed to save favorites:', e);
      }
    }
  }, [favorites, isLoaded]);

  const addFavorite = useCallback((item: Omit<FavoriteItem, 'timestamp'>) => {
    setFavorites((prev) => {
      // Check if already exists
      if (prev.some((f) => f.id === item.id)) {
        return prev;
      }
      return [
        ...prev,
        {
          ...item,
          timestamp: Date.now(),
        },
      ];
    });
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  }, []);

  const isFavorite = useCallback(
    (id: string) => favorites.some((f) => f.id === id),
    [favorites]
  );

  const toggleFavorite = useCallback(
    (item: Omit<FavoriteItem, 'timestamp'>) => {
      if (isFavorite(item.id)) {
        removeFavorite(item.id);
      } else {
        addFavorite(item);
      }
    },
    [isFavorite, addFavorite, removeFavorite]
  );

  const updateNotes = useCallback((id: string, notes: string) => {
    setFavorites((prev) =>
      prev.map((f) => (f.id === id ? { ...f, notes } : f))
    );
  }, []);

  const clearAll = useCallback(() => {
    setFavorites([]);
  }, []);

  return {
    favorites,
    isLoaded,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    updateNotes,
    clearAll,
  };
}

export default useFavorites;
