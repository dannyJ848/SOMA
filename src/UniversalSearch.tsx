/**
 * Universal Search Component
 * 
 * Search across all body systems, content, and regions.
 */

import React, { useState, useCallback, useEffect } from 'react';
import { useUniversalContentRAG } from './hooks/useUniversalContentRAG';
import { ContentViewer } from './ContentViewer';
import type { ContentDocument } from './ContentViewer';

interface UniversalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UniversalSearch: React.FC<UniversalSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedContent, setSelectedContent] = useState<ContentDocument | null>(null);
  const { search, isLoading } = useUniversalContentRAG();

  const handleSearch = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const results = await search(query);
    if (results.length > 0) {
      setSelectedContent(results[0]);
    }
  }, [query, search]);

  const handleTermClick = useCallback(async (term: string) => {
    setQuery(term);
    const results = await search(term);
    if (results.length > 0) {
      setSelectedContent(results[0]);
    }
  }, [search]);

  if (!isOpen) return null;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '40px 20px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h2 style={{ color: '#fff', margin: 0 }}>🔍 Universal Search</h2>
            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search anatomy, conditions, treatments..."
              style={{
                width: '100%',
                padding: '15px 20px',
                fontSize: '1.1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: '#fff',
                outline: 'none',
              }}
              autoFocus
            />
            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                marginTop: '10px',
                padding: '12px',
                background: isLoading ? '#666' : '#4a90e2',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
              }}
            >
              {isLoading ? 'Loading...' : 'Search'}
            </button>
          </form>

          <div style={{ marginTop: '20px', color: '#888', fontSize: '0.9rem' }}>
            <p>Try searching for:</p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['heart', 'brain', 'lungs', 'liver', 'stroke', 'diabetes'].map(term => (
                <button
                  key={term}
                  onClick={() => handleTermClick(term)}
                  style={{
                    padding: '5px 10px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                  }}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedContent && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          zIndex: 1001,
        }}>
          <div style={{
            width: '100%',
            maxWidth: '900px',
            maxHeight: '90vh',
            background: '#1e1e2e',
            borderRadius: '12px',
            overflow: 'hidden',
          }}>
            <ContentViewer
              contentDoc={selectedContent}
              onClose={() => setSelectedContent(null)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default UniversalSearch;
