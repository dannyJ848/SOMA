/**
 * Anatomy Launchpad - Main Application Interface
 * 
 * The 3D anatomy model is the central hub. Everything flows from here.
 * This is the primary interface that users interact with.
 * 
 * Architecture:
 * 1. 3D Anatomy Model (center stage)
 * 2. Contextual Region Menu (appears on selection)
 * 3. Layer Controls (adaptive visualization)
 * 4. Timeline Slider (longitudinal health view)
 * 5. Content Panel (educational/clinical information)
 */

import React, { useState, useEffect, useCallback } from 'react';
import { useAdaptiveAnatomy } from './adaptiveAnatomy';
import { getRegionMenu, ANATOMICAL_REGIONS, type AnatomicalRegion, type RegionMenuItem } from './anatomicalRegionMenu';
import { useUniversalContentRAG } from './hooks/useUniversalContentRAG';
import { resolveMenuItemContent } from './regionMenuContentResolver';
import { ContentViewer } from './ContentViewer';
import type { ContentDocument } from './ContentViewer';

// Props
interface AnatomyLaunchpadProps {
  onContentRequest: (content: ContentDocument) => void;
  onAnatomyViewRequest: (regionId: string, layer: string) => void;
  onAIRequest: (context: string) => void;
}

// Region menu component
const RegionContextMenu: React.FC<{
  region: AnatomicalRegion;
  menuItems: RegionMenuItem[];
  position: { x: number; y: number };
  onItemClick: (item: RegionMenuItem) => void;
  onClose: () => void;
}> = ({ region, menuItems, position, onItemClick, onClose }) => {
  return (
    <div
      className="region-context-menu"
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        background: 'rgba(30, 30, 46, 0.95)',
        borderRadius: '12px',
        padding: '16px',
        minWidth: '280px',
        maxWidth: '320px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
      }}
    >
      {/* Header */}
      <div style={{ 
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)', 
        paddingBottom: '12px',
        marginBottom: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.5rem' }}>
            {region.system === 'cardiovascular' ? '🫀' :
             region.system === 'respiratory' ? '🫁' :
             region.system === 'nervous' ? '🧠' :
             region.system === 'digestive' ? '🍽️' :
             region.system === 'urinary' ? '🚽' :
             region.system === 'reproductive' ? '⚤' :
             region.system === 'musculoskeletal' ? '🦴' :
             region.system === 'endocrine' ? '⚕️' :
             region.system === 'immune' ? '🛡️' : '🏥'}
          </span>
          <div>
            <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#fff' }}>
              {region.name}
            </div>
            {region.latinName && (
              <div style={{ fontSize: '0.75rem', color: '#888', fontStyle: 'italic' }}>
                {region.latinName}
              </div>
            )}
          </div>
        </div>
        <div style={{ 
          fontSize: '0.7rem', 
          color: '#666', 
          marginTop: '4px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          {region.system} System
        </div>
      </div>

      {/* Menu Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemClick(item)}
            disabled={item.disabled}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 12px',
              background: 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: item.disabled ? 'not-allowed' : 'pointer',
              opacity: item.disabled ? 0.5 : 1,
              textAlign: 'left',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
            
            <div style={{ flex: 1 }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                justifyContent: 'space-between'
              }}>
                <span style={{ 
                  fontSize: '0.9rem', 
                  color: '#fff',
                  fontWeight: 500 
                }}>
                  {item.label}
                </span>
                
                {item.badge && (
                  <span style={{
                    fontSize: '0.65rem',
                    padding: '2px 6px',
                    borderRadius: '10px',
                    background: item.badge.type === 'critical' ? '#f44336' :
                               item.badge.type === 'warning' ? '#ff9800' : '#2196f3',
                    color: '#fff',
                    minWidth: '18px',
                    textAlign: 'center',
                  }}>
                    {item.badge.count}
                  </span>
                )}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '2px' }}>
                {item.description}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          marginTop: '12px',
          padding: '8px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: 'none',
          borderRadius: '6px',
          color: '#888',
          fontSize: '0.8rem',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        Close
      </button>
    </div>
  );
};

// Layer control panel
const LayerControlPanel: React.FC<{
  layers: Array<{ id: string; name: string; visible: boolean; opacity: number }>;
  onToggle: (id: string) => void;
  onOpacityChange: (id: string, opacity: number) => void;
}> = ({ layers, onToggle, onOpacityChange }) => {
  return (
    <div
      style={{
        position: 'absolute',
        right: '20px',
        top: '100px',
        background: 'rgba(30, 30, 46, 0.9)',
        borderRadius: '12px',
        padding: '16px',
        width: '220px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <h3 style={{ 
        margin: '0 0 12px 0', 
        fontSize: '0.9rem', 
        color: '#fff',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        paddingBottom: '8px'
      }}>
        Visualization Layers
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {layers.map(layer => (
          <div key={layer.id}>
            <label style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              cursor: 'pointer'
            }}>
              <input
                type="checkbox"
                checked={layer.visible}
                onChange={() => onToggle(layer.id)}
              />
              <span style={{ 
                fontSize: '0.85rem', 
                color: layer.visible ? '#fff' : '#666',
                flex: 1
              }}>
                {layer.name}
              </span>
            </label>
            
            {layer.visible && (
              <input
                type="range"
                min="0"
                max="100"
                value={layer.opacity * 100}
                onChange={(e) => onOpacityChange(layer.id, parseInt(e.target.value) / 100)}
                style={{
                  width: '100%',
                  marginTop: '4px',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Timeline slider for longitudinal view
const TimelineSlider: React.FC<{
  currentDate: Date | null;
  onDateChange: (date: Date | null) => void;
  healthEvents: Array<{ date: Date; label: string }>;
}> = ({ currentDate, onDateChange, healthEvents }) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(30, 30, 46, 0.9)',
        borderRadius: '12px',
        padding: '16px 24px',
        width: '600px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px'
      }}>
        <span style={{ fontSize: '0.8rem', color: '#fff' }}>
          {currentDate ? currentDate.toLocaleDateString() : 'Current View'}
        </span>
        <button
          onClick={() => onDateChange(null)}
          style={{
            fontSize: '0.75rem',
            padding: '4px 8px',
            background: currentDate ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '4px',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Reset to Current
        </button>
      </div>
      
      <input
        type="range"
        style={{ width: '100%' }}
        // Timeline implementation would go here
      />
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        marginTop: '8px',
        fontSize: '0.7rem',
        color: '#666'
      }}>
        <span>Past</span>
        <span>Present</span>
      </div>
    </div>
  );
};

// Main Anatomy Launchpad Component
export const AnatomyLaunchpad: React.FC<AnatomyLaunchpadProps> = ({
  onContentRequest,
  onAnatomyViewRequest,
  onAIRequest,
}) => {
  const {
    state,
    selectRegion,
    hoverRegion,
    toggleLayer,
    setLayerOpacity,
    setTimePoint,
    getRegionContext,
  } = useAdaptiveAnatomy();

  const {
    isLoading: contentLoading,
    getDocumentByStructure,
  } = useUniversalContentRAG();

  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number } | null>(null);
  const [regionContext, setRegionContext] = useState<ReturnType<typeof getRegionContext>>(null);
  const [selectedContent, setSelectedContent] = useState<ContentDocument | null>(null);

  // Handle region selection
  const handleRegionClick = useCallback((regionId: string, event: React.MouseEvent) => {
    selectRegion(regionId);
    
    const context = getRegionContext(regionId);
    setRegionContext(context);
    
    // Position menu near click
    setMenuPosition({
      x: Math.min(event.clientX + 20, window.innerWidth - 340),
      y: Math.min(event.clientY, window.innerHeight - 400),
    });
  }, [selectRegion, getRegionContext]);

  // Handle menu item click - WIRED TO CONTENT RESOLVER
  const handleMenuItemClick = useCallback(async (item: RegionMenuItem) => {
    if (!state.selectedRegion) return;

    console.log(`[AnatomyLaunchpad] Menu item clicked: ${item.id} - ${item.label}`);

    // Use the content resolver for all content items
    const content = await resolveMenuItemContent(
      item.id,
      item.label,
      item.description,
      item.contentType
    );

    if (content) {
      // We have content - display it
      setSelectedContent(content);
      setMenuPosition(null);
      selectRegion(null);
      return;
    }

    // Fallback for special action items
    switch (item.id) {
      case 'view-anatomy':
      case 'view-histology':
      case 'view-pathology':
      case 'view-physiology':
        onAnatomyViewRequest(state.selectedRegion, item.id.replace('view-', ''));
        break;
      
      case 'ask-ai':
        onAIRequest(`Tell me about ${regionContext?.region.name}`);
        break;
      
      default:
        // Show placeholder for items without content
        setSelectedContent({
          id: item.id,
          title: item.label,
          source: 'Medical Encyclopedia',
          content: `# ${item.label}\n\n${item.description}\n\n*Detailed content coming soon...*`,
        });
        break;
    }

    // Close menu
    setMenuPosition(null);
    selectRegion(null);
  }, [state.selectedRegion, regionContext, onAnatomyViewRequest, onAIRequest, selectRegion]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setMenuPosition(null);
      selectRegion(null);
    };

    if (menuPosition) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [menuPosition, selectRegion]);

  return (
    <div 
      className="anatomy-launchpad"
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: '#0a0a14',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: '20px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)',
        zIndex: 100,
      }}>
        <h1 style={{ 
          margin: 0, 
          color: '#fff', 
          fontSize: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <span>🫀</span>
          Biological Self
          <span style={{ 
            fontSize: '0.6em', 
            background: '#ff6b6b', 
            color: 'white', 
            padding: '4px 8px', 
            borderRadius: '4px'
          }}>
            KIMI BUILD
          </span>
        </h1>
        <p style={{ margin: '4px 0 0 0', color: '#888', fontSize: '0.9rem' }}>
          Select a body region to explore your health
        </p>
      </div>

      {/* 3D Anatomy Viewer Placeholder */}
      <div 
        className="anatomy-viewer-container"
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{
          textAlign: 'center',
          color: '#666',
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🧍</div>
          <p>3D Anatomy Model Integration Point</p>
          <p style={{ fontSize: '0.85rem' }}>Click on body regions to access medical information</p>
          
          <div style={{ 
            marginTop: '30px',
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {/* Quick region buttons for testing */}
            {['heart', 'lungs', 'brain', 'liver', 'kidneys'].map(regionId => {
              const region = ANATOMICAL_REGIONS.find(r => r.id === regionId);
              if (!region) return null;
              
              const visualState = state.visualStates[regionId];
              
              return (
                <button
                  key={regionId}
                  onClick={(e) => handleRegionClick(regionId, e as any)}
                  style={{
                    padding: '12px 20px',
                    background: visualState?.affected 
                      ? 'rgba(244, 67, 54, 0.2)' 
                      : 'rgba(255, 255, 255, 0.05)',
                    border: `2px solid ${visualState?.affected ? '#f44336' : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: '8px',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                  }}
                >
                  {region.system === 'cardiovascular' ? '🫀' :
                   region.system === 'respiratory' ? '🫁' :
                   region.system === 'nervous' ? '🧠' :
                   region.system === 'digestive' ? '🍽️' :
                   region.system === 'urinary' ? '🚽' : '🏥'} {region.name}
                  {visualState?.affected && (
                    <span style={{ 
                      marginLeft: '8px',
                      fontSize: '0.7rem',
                      padding: '2px 6px',
                      background: '#f44336',
                      borderRadius: '10px'
                    }}
                    >
                      {visualState.severity}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Layer Controls */}
      <LayerControlPanel
        layers={state.activeLayers.map(l => ({
          id: l.id,
          name: l.name,
          visible: l.visible,
          opacity: l.opacity,
        }))}
        onToggle={toggleLayer}
        onOpacityChange={setLayerOpacity}
      />

      {/* Timeline */}
      <TimelineSlider
        currentDate={state.timePoint}
        onDateChange={setTimePoint}
        healthEvents={[]}
      />

      {/* Region Context Menu */}
      {menuPosition && regionContext && (
        <RegionContextMenu
          region={regionContext.region}
          menuItems={getRegionMenu(regionContext.region, regionContext.patientData)}
          position={menuPosition}
          onItemClick={handleMenuItemClick}
          onClose={() => {
            setMenuPosition(null);
            selectRegion(null);
          }}
        />
      )}

      {/* Legend */}
      <div style={{
        position: 'absolute',
        left: '20px',
        bottom: '100px',
        background: 'rgba(30, 30, 46, 0.9)',
        borderRadius: '8px',
        padding: '12px',
        fontSize: '0.75rem',
        color: '#888',
      }}>
        <div style={{ marginBottom: '8px', fontWeight: 'bold', color: '#fff' }}>
          Legend
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <span style={{ width: '12px', height: '12px', background: '#4caf50', borderRadius: '2px' }}></span>
          <span>Normal</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <span style={{ width: '12px', height: '12px', background: '#ffeb3b', borderRadius: '2px' }}></span>
          <span>Mild</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <span style={{ width: '12px', height: '12px', background: '#ff9800', borderRadius: '2px' }}></span>
          <span>Moderate</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <span style={{ width: '12px', height: '12px', background: '#f44336', borderRadius: '2px' }}></span>
          <span>Severe</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '12px', height: '12px', background: '#2196f3', borderRadius: '2px' }}></span>
          <span>Procedure</span>
        </div>
      </div>

      {/* Content Viewer Overlay */}
      {selectedContent && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          zIndex: 1000,
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
    </div>
  );
};

export default AnatomyLaunchpad;
