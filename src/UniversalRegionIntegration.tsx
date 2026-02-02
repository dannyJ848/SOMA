/**
 * Universal Region Integration
 * 
 * Wires up ALL body regions to content retrieval.
 * Complete integration for the 3D anatomy launchpad.
 */

import React, { useState, useCallback } from 'react';
import { useUniversalContentRAG } from './hooks/useUniversalContentRAG';
import { ContentViewer } from './ContentViewer';
import { ComprehensiveMenuItem, generateRegionMenu } from './comprehensiveRegionMenu';
import { ANATOMICAL_REGIONS } from './anatomicalRegionMenu';
import type { ContentDocument } from './ContentViewer';

interface UniversalRegionIntegrationProps {
  selectedRegionId: string | null;
  onRegionSelect: (regionId: string) => void;
}

export const UniversalRegionIntegration: React.FC<UniversalRegionIntegrationProps> = ({
  selectedRegionId,
  onRegionSelect,
}) => {
  const { isLoading, stats, getByStructure, getDocument, getDocumentByStructure } = useUniversalContentRAG();
  const [selectedContent, setSelectedContent] = useState<ContentDocument | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Get selected region
  const selectedRegion = selectedRegionId 
    ? ANATOMICAL_REGIONS.find(r => r.id === selectedRegionId) 
    : null;
  
  const menu = selectedRegion ? generateRegionMenu(selectedRegion) : null;

  // Handle menu item click
  const handleMenuClick = useCallback((item: ComprehensiveMenuItem) => {
    console.log(`[Universal RAG] Clicked: ${item.id} - ${item.label}`);

    // Try to get content by structure name
    let content = getDocumentByStructure(item.id);

    // If not found, try variations
    if (!content) {
      // Try with hyphens replaced by spaces
      const variations = [
        item.id,
        item.id.replace(/-/g, ' '),
        item.label.toLowerCase().replace(/\s+/g, '-'),
        item.label.toLowerCase(),
      ];

      for (const variant of variations) {
        content = getDocumentByStructure(variant);
        if (content) break;
      }
    }

    if (content) {
      setSelectedContent(content);
    } else {
      console.warn(`[Universal RAG] Content not found for: ${item.id}`);
      // Show placeholder
      setSelectedContent({
        id: item.id,
        title: item.label,
        source: 'Medical Encyclopedia',
        content: `# ${item.label}\n\n${item.description}\n\n*Content coming soon...*\n\nTry searching for related terms or check back later.`,
      });
    }
  }, [getByStructure, getDocument, getDocumentByStructure]);

  if (isLoading) {
    return (
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        background: 'rgba(0,0,0,0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        zIndex: 1000,
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🧬</div>
          <h2>Loading Medical Knowledge Base...</h2>
          <p>Indexing {stats.totalContent} content items</p>
          <div style={{ marginTop: '20px', fontSize: '0.9rem', color: '#888' }}>
            {Object.entries(stats.bySystem as Record<string, number>).map(([system, count]) => (
              <div key={system}>{system}: {count} items</div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Region Selection Overlay */}
      {selectedRegion && menu && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            right: '20px',
            width: '350px',
            maxHeight: 'calc(100vh - 100px)',
            background: 'rgba(30, 30, 46, 0.95)',
            borderRadius: '12px',
            padding: '20px',
            overflowY: 'auto',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            zIndex: 100,
          }}
        >
          {/* Header */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '15px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            paddingBottom: '10px'
          }}>
            <div>
              <h3 style={{ margin: 0, color: '#fff' }}>{menu.region.name}</h3>
              <div style={{ fontSize: '0.75rem', color: '#888' }}>
                {menu.region.system} System
              </div>
            </div>
            <button
              onClick={() => onRegionSelect('')}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#888',
                cursor: 'pointer',
                fontSize: '1.5rem',
              }}
            >
              ×
            </button>
          </div>

          {/* Menu Categories */}
          {Object.entries(menu.categories).map(([category, items]) => (
            items.length > 0 && (
              <div key={category} style={{ marginBottom: '15px' }}>
                <div style={{ 
                  fontSize: '0.7rem', 
                  textTransform: 'uppercase',
                  color: '#666',
                  marginBottom: '8px',
                  letterSpacing: '1px'
                }}>
                  {category}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {items.slice(0, 5).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleMenuClick(item)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 10px',
                        background: 'rgba(255,255,255,0.05)',
                        border: 'none',
                        borderRadius: '6px',
                        color: '#fff',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        textAlign: 'left',
                      }}
                    >
                      <span>{item.icon}</span>
                      <span style={{ flex: 1 }}>{item.label}</span>
                      {item.badge && (
                        <span style={{
                          fontSize: '0.65rem',
                          padding: '2px 6px',
                          borderRadius: '10px',
                          background: item.badge.type === 'critical' ? '#f44336' : '#2196f3',
                        }}>
                          {item.badge.count}
                        </span>
                      )}
                    </button>
                  ))}
                  {items.length > 5 && (
                    <div style={{ fontSize: '0.75rem', color: '#666', padding: '5px' }}>
                      +{items.length - 5} more items...
                    </div>
                  )}
                </div>
              </div>
            )
          ))}

          {/* Stats */}
          <div style={{ 
            marginTop: '15px', 
            paddingTop: '15px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            fontSize: '0.75rem',
            color: '#666'
          }}>
            <div>Total Content: {stats.totalContent} items</div>
            <div style={{ marginTop: '5px' }}>
              {Object.entries(stats.bySystem as Record<string, number>).slice(0, 3).map(([system, count]) => (
                <div key={system}>{system}: {count}</div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Content Viewer */}
      {selectedContent && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            zIndex: 1000,
          }}
        >
          <div style={{
            width: '100%',
            maxWidth: '900px',
            maxHeight: '90vh',
            background: '#1e1e2e',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
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

export default UniversalRegionIntegration;
