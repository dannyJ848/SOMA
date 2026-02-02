/**
 * Brain Region Integration - Complete Test Implementation
 * 
 * Wires up the brain region selection to content retrieval and display.
 * This is the full flow: 3D Model → Menu → Content Retrieval → Display
 */

import React, { useState, useCallback } from 'react';
import { useBrainContentRAG } from './hooks/useBrainContentRAG';
import { ContentViewer } from './ContentViewer';
import { ComprehensiveMenuItem, generateRegionMenu } from './comprehensiveRegionMenu';
import { ANATOMICAL_REGIONS } from './anatomicalRegionMenu';
import type { ContentDocument } from './ContentViewer';

// Brain region test component
export const BrainRegionTest: React.FC = () => {
  const { isLoading, stats, getByStructure, getDocument, lookup } = useBrainContentRAG();
  const [selectedContent, setSelectedContent] = useState<ContentDocument | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Get brain region
  const brainRegion = ANATOMICAL_REGIONS.find(r => r.id === 'brain');
  const menu = brainRegion ? generateRegionMenu(brainRegion) : null;

  // Handle menu item click
  const handleMenuClick = useCallback((item: ComprehensiveMenuItem) => {
    console.log(`[Brain Test] Clicked: ${item.id} - ${item.label}`);

    let content = null;

    // Map menu items to content lookups
    switch (item.id) {
      // Anatomy
      case 'cerebrum':
        content = lookup('cerebralCortex');
        break;
      case 'cerebellum':
        content = getByStructure('cerebellum');
        if (content) {
          setSelectedContent(getDocument(content));
          return;
        }
        break;
      case 'brainstem':
        content = lookup('brainstem');
        break;
      case 'thalamus':
        content = lookup('thalamus');
        break;
      case 'hypothalamus':
        content = lookup('hypothalamus');
        break;
      case 'basal-ganglia':
        content = lookup('basalGanglia');
        break;

      // Histology
      case 'neurons':
        content = lookup('neurons');
        break;
      case 'neuroglia':
        content = lookup('neuroglia');
        break;
      case 'synapses':
        content = lookup('synapses');
        break;

      // Physiology
      case 'neurotransmitters':
        content = lookup('neurotransmitters');
        break;
      case 'action-potentials':
        content = lookup('actionPotentials');
        break;
      case 'synaptic-transmission':
        content = lookup('synapticTransmission');
        break;
      case 'neuroplasticity':
        content = lookup('neuroplasticity');
        break;

      // Pathology
      case 'stroke':
        content = lookup('stroke');
        break;
      case 'brain-tumors':
        content = lookup('brainTumors');
        break;
      case 'neurodegeneration':
        content = lookup('neurodegeneration');
        break;
      case 'demyelinating-diseases':
        content = lookup('demyelinating');
        break;

      // Clinical
      case 'neuro-exam':
        content = lookup('neuroExam');
        break;
      case 'eeg':
        content = lookup('eeg');
        break;
      case 'lumbar-puncture':
        content = lookup('lumbarPuncture');
        break;
      case 'stroke-assessment':
        content = lookup('strokeAssessment');
        break;
      case 'headache-evaluation':
        content = lookup('headacheEvaluation');
        break;

      default:
        console.log(`[Brain Test] No content mapping for: ${item.id}`);
        // Try to find by structure name
        const structureName = item.id.replace(/-/g, ' ');
        const foundContent = getByStructure(structureName);
        if (foundContent) {
          setSelectedContent(getDocument(foundContent));
          return;
        }
        break;
    }

    if (content) {
      setSelectedContent(content);
    } else {
      console.warn(`[Brain Test] Content not found for: ${item.id}`);
      // Show a placeholder
      setSelectedContent({
        id: item.id,
        title: item.label,
        source: 'Medical Encyclopedia',
        content: `# ${item.label}\n\n${item.description}\n\n*Content coming soon...*`,
      });
    }
  }, [getByStructure, getDocument, lookup]);

  if (isLoading) {
    return (
      <div style={{ padding: '20px', color: '#fff' }}>
        <h2>Loading Brain Content...</h2>
        <p>Indexing educational materials...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', background: '#0a0a14', minHeight: '100vh', color: '#fff' }}>
      <h1>🧠 Brain Region Integration Test</h1>
      
      {/* Stats */}
      <div style={{ 
        background: '#1e1e2e', 
        padding: '15px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h3>Content Index Statistics</h3>
        <p>Total Brain Content: {stats.totalContent}</p>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '10px' }}>
          {Object.entries(stats.byCategory as Record<string, number>).map(([category, count]) => (
            <span key={category} style={{ 
              background: 'rgba(255,255,255,0.1)', 
              padding: '5px 10px', 
              borderRadius: '4px',
              fontSize: '0.9rem'
            }}>
              {category}: {count}
            </span>
          ))}
        </div>
      </div>

      {/* Brain Selection */}
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            background: '#4a90e2',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          {menuOpen ? '🔼 Hide Brain Menu' : '🧠 Select Brain Region'}
        </button>
      </div>

      {/* Menu */}
      {menuOpen && menu && (
        <div style={{
          background: '#1e1e2e',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px',
        }}>
          <h2>{menu.region.name} - Comprehensive Menu</h2>
          
          {Object.entries(menu.categories).map(([category, items]) => (
            items.length > 0 && (
              <div key={category} style={{ marginBottom: '20px' }}>
                <h3 style={{ 
                  textTransform: 'uppercase', 
                  color: '#888',
                  borderBottom: '1px solid #333',
                  paddingBottom: '5px',
                  marginBottom: '10px'
                }}>
                  {category}
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {items.map((item) => (
                    <div key={item.id}>
                      <button
                        onClick={() => handleMenuClick(item)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '12px',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '6px',
                          color: '#fff',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                        }}
                      >
                        <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 'bold' }}>{item.label}</div>
                          <div style={{ fontSize: '0.85rem', color: '#888' }}>
                            {item.description}
                          </div>
                        </div>
                        {item.badge && (
                          <span style={{
                            background: item.badge.type === 'critical' ? '#f44336' : 
                                       item.badge.type === 'warning' ? '#ff9800' : '#2196f3',
                            color: '#fff',
                            padding: '2px 8px',
                            borderRadius: '10px',
                            fontSize: '0.75rem',
                          }}>
                            {item.badge.count} {item.badge.label}
                          </span>
                        )}
                      </button>
                      
                      {/* Children */}
                      {item.children && (
                        <div style={{ marginLeft: '30px', marginTop: '5px' }}>
                          {item.children.map((child) => (
                            <button
                              key={child.id}
                              onClick={() => handleMenuClick(child)}
                              style={{
                                width: '100%',
                                textAlign: 'left',
                                padding: '8px 12px',
                                background: 'transparent',
                                border: 'none',
                                color: '#aaa',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                              }}
                            >
                              {child.icon} {child.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      )}

      {/* Content Viewer */}
      {selectedContent && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          zIndex: 1000,
        }}>
          <div style={{
            width: '100%',
            maxWidth: '800px',
            maxHeight: '90vh',
            background: '#1e1e2e',
            borderRadius: '8px',
            overflow: 'hidden',
          }}>
            <ContentViewer
              contentDoc={selectedContent}
              onClose={() => setSelectedContent(null)}
            />
          </div>
        </div>
      )}

      {/* Instructions */}
      <div style={{
        background: 'rgba(74, 144, 226, 0.1)',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid rgba(74, 144, 226, 0.3)',
      }}>
        <h3>🧪 Test Instructions</h3>
        <ol style={{ lineHeight: '1.8' }}>
          <li>Click "Select Brain Region" to open the comprehensive menu</li>
          <li>Choose any category (Anatomy, Histology, Pathology, etc.)</li>
          <li>Click on a specific topic (e.g., "Cerebral Cortex", "Neurons", "Stroke")</li>
          <li>The content will load and display in the ContentViewer overlay</li>
          <li>Close the viewer to return to the menu</li>
        </ol>
        <p style={{ marginTop: '10px', color: '#888' }}>
          <strong>Note:</strong> This tests the complete flow from menu selection through RAG content retrieval to display.
        </p>
      </div>
    </div>
  );
};

export default BrainRegionTest;
