/**
 * CommunityResourcesMap Component
 * 
 * Interactive map and list view for community resources including
 * free clinics, food banks, mental health services, and immigration-safe
 * healthcare options. Supports Spanish/English bilingual display.
 */

import React, { useState, useMemo } from 'react';
import {
  CommunityResource,
  ResourceType,
  ResourceFilter,
  RESOURCE_CATEGORY_LABELS,
  RESOURCE_CATEGORIES,
  getLocalizedText,
  formatCostInfo,
  Language,
} from '../../../core/promotora';

interface CommunityResourcesMapProps {
  resources: CommunityResource[];
  userLocation?: { lat: number; lng: number };
  onResourceClick?: (resource: CommunityResource) => void;
  onGetDirections?: (resource: CommunityResource) => void;
  onCallResource?: (phone: string) => void;
  language?: Language;
}

export const CommunityResourcesMap: React.FC<CommunityResourcesMapProps> = ({
  resources,
  userLocation,
  onResourceClick,
  onGetDirections,
  onCallResource,
  language = 'es',
}) => {
  const [selectedTypes, setSelectedTypes] = useState<ResourceType[]>([]);
  const [showOnlyFree, setShowOnlyFree] = useState(false);
  const [showOnlyImmigrationSafe, setShowOnlyImmigrationSafe] = useState(true);
  const [showOnlyOpenNow, setShowOnlyOpenNow] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResource, setSelectedResource] = useState<CommunityResource | null>(null);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('list');

  const t = (es: string, en: string) => (language === 'es' ? es : en);

  // Filter resources
  const filteredResources = useMemo(() => {
    let result = [...resources];

    // Type filter
    if (selectedTypes.length > 0) {
      result = result.filter((r) => selectedTypes.includes(r.type));
    }

    // Free filter
    if (showOnlyFree) {
      result = result.filter((r) => r.cost.free || r.cost.slidingScale);
    }

    // Immigration safe filter
    if (showOnlyImmigrationSafe) {
      result = result.filter((r) => r.immigrationSafe);
    }

    // Open now filter
    if (showOnlyOpenNow) {
      const now = new Date();
      const currentDay = now.getDay();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTime = currentHour * 60 + currentMinute;

      result = result.filter((r) => {
        const todaysHours = r.hours.filter((h) => h.dayOfWeek === currentDay);
        return todaysHours.some((h) => {
          const [openHour, openMin] = h.open.split(':').map(Number);
          const [closeHour, closeMin] = h.close.split(':').map(Number);
          const openTime = openHour * 60 + openMin;
          const closeTime = closeHour * 60 + closeMin;
          return currentTime >= openTime && currentTime <= closeTime;
        });
      });
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (r) =>
          getLocalizedText(r.name, language).toLowerCase().includes(query) ||
          r.address.city.toLowerCase().includes(query) ||
          r.address.neighborhood?.toLowerCase().includes(query)
      );
    }

    // Sort by distance if user location available
    if (userLocation) {
      result.sort((a, b) => {
        const distA = calculateDistance(userLocation, a.coordinates);
        const distB = calculateDistance(userLocation, b.coordinates);
        return distA - distB;
      });
    }

    return result;
  }, [resources, selectedTypes, showOnlyFree, showOnlyImmigrationSafe, showOnlyOpenNow, searchQuery, userLocation, language]);

  const toggleResourceType = (type: ResourceType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const calculateDistance = (
    point1?: { lat: number; lng: number },
    point2?: { lat: number; lng: number }
  ): number => {
    if (!point1 || !point2) return Infinity;

    const R = 3959; // Earth's radius in miles
    const dLat = toRadians(point2.lat - point1.lat);
    const dLon = toRadians(point2.lng - point1.lng);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(point1.lat)) *
        Math.cos(toRadians(point2.lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const toRadians = (degrees: number): number => degrees * (Math.PI / 180);

  const formatDistance = (miles: number): string => {
    if (miles === Infinity) return '';
    if (miles < 0.1) return t('< 0.1 mi', '< 0.1 mi');
    return `${miles.toFixed(1)} ${t('mi', 'mi')}`;
  };

  const isCurrentlyOpen = (resource: CommunityResource): boolean => {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute;

    const todaysHours = resource.hours.filter((h) => h.dayOfWeek === currentDay);
    return todaysHours.some((h) => {
      const [openHour, openMin] = h.open.split(':').map(Number);
      const [closeHour, closeMin] = h.close.split(':').map(Number);
      const openTime = openHour * 60 + openMin;
      const closeTime = closeHour * 60 + closeMin;
      return currentTime >= openTime && currentTime <= closeTime;
    });
  };

  const getTodaysHours = (resource: CommunityResource): string => {
    const now = new Date();
    const currentDay = now.getDay();
    const todaysHours = resource.hours.filter((h) => h.dayOfWeek === currentDay);
    
    if (todaysHours.length === 0) return t('Cerrado hoy', 'Closed today');
    
    const hours = todaysHours[0];
    return `${hours.open} - ${hours.close}`;
  };

  return (
    <div className="community-resources-map">
      {/* Header */}
      <div className="resources-header">
        <h2>
          🏘️ {t('Recursos Comunitarios', 'Community Resources')}
        </h2>
        <p className="subtitle">
          {t(
            'Encuentre servicios de salud, alimentos, vivienda y más',
            'Find health services, food, housing, and more'
          )}
        </p>
      </div>

      {/* View Toggle */}
      <div className="view-toggle">
        <button
          className={viewMode === 'list' ? 'active' : ''}
          onClick={() => setViewMode('list')}
        >
          📋 {t('Lista', 'List')}
        </button>
        <button
          className={viewMode === 'map' ? 'active' : ''}
          onClick={() => setViewMode('map')}
        >
          🗺️ {t('Mapa', 'Map')}
        </button>
      </div>

      {/* Search */}
      <div className="search-section">
        <div className="search-box">
          <input
            type="text"
            placeholder={t('Buscar recursos...', 'Search resources...')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      {/* Category Filters */}
      <div className="category-filters">
        <p className="filter-label">{t('Filtrar por categoría:', 'Filter by category:')}</p>
        <div className="category-chips">
          {RESOURCE_CATEGORIES.slice(0, 8).map((cat) => (
            <button
              key={cat.type}
              className={`category-chip ${selectedTypes.includes(cat.type) ? 'active' : ''}`}
              onClick={() => toggleResourceType(cat.type)}
              style={{
                '--category-color': cat.color,
              } as React.CSSProperties}
            >
              <span className="chip-icon">{cat.icon}</span>
              <span className="chip-label">{getLocalizedText(RESOURCE_CATEGORY_LABELS[cat.type], language)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Additional Filters */}
      <div className="additional-filters">
        <label className="filter-toggle">
          <input
            type="checkbox"
            checked={showOnlyFree}
            onChange={(e) => setShowOnlyFree(e.target.checked)}
          />
          <span className="toggle-icon">💰</span>
          {t('Gratuito / Escala móvil', 'Free / Sliding scale')}
        </label>

        <label className="filter-toggle">
          <input
            type="checkbox"
            checked={showOnlyImmigrationSafe}
            onChange={(e) => setShowOnlyImmigrationSafe(e.target.checked)}
          />
          <span className="toggle-icon">🛡️</span>
          {t('Seguro para inmigrantes', 'Immigration safe')}
        </label>

        <label className="filter-toggle">
          <input
            type="checkbox"
            checked={showOnlyOpenNow}
            onChange={(e) => setShowOnlyOpenNow(e.target.checked)}
          />
          <span className="toggle-icon">🟢</span>
          {t('Abierto ahora', 'Open now')}
        </label>
      </div>

      {/* Results Count */}
      <div className="results-count">
        {filteredResources.length} {t('recursos encontrados', 'resources found')}
        {userLocation && ` • ${t('Ordenados por distancia', 'Sorted by distance')}`}
      </div>

      {/* Resource List */}
      {viewMode === 'list' && (
        <div className="resources-list">
          {filteredResources.map((resource) => {
            const distance = userLocation
              ? calculateDistance(userLocation, resource.coordinates)
              : Infinity;
            const open = isCurrentlyOpen(resource);

            return (
              <div
                key={resource.id}
                className={`resource-card ${selectedResource?.id === resource.id ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedResource(resource);
                  onResourceClick?.(resource);
                }}
              >
                <div className="resource-header">
                  <div className="resource-type-badge">
                    {RESOURCE_CATEGORIES.find((c) => c.type === resource.type)?.icon}
                  </div>
                  <div className="resource-title">
                    <h3>{getLocalizedText(resource.name, language)}</h3>
                    <div className="resource-meta">
                      <span className={`open-badge ${open ? 'open' : 'closed'}`}>
                        {open ? '🟢 ' + t('Abierto', 'Open') : '🔴 ' + t('Cerrado', 'Closed')}
                      </span>
                      <span className="hours">{getTodaysHours(resource)}</span>
                      {distance !== Infinity && (
                        <span className="distance">📍 {formatDistance(distance)}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="resource-body">
                  <p className="resource-description">
                    {getLocalizedText(resource.description, language)}
                  </p>

                  <div className="resource-address">
                    📍 {resource.address.street}, {resource.address.city}, {resource.address.state} {resource.address.zipCode}
                  </div>

                  <div className="resource-services">
                    {resource.services.slice(0, 3).map((service, idx) => (
                      <span key={idx} className="service-tag">
                        {getLocalizedText(service, language)}
                      </span>
                    ))}
                    {resource.services.length > 3 && (
                      <span className="service-tag more">+{resource.services.length - 3}</span>
                    )}
                  </div>

                  <div className="resource-badges">
                    {resource.cost.free && (
                      <span className="badge free">🆓 {t('Gratis', 'Free')}</span>
                    )}
                    {resource.cost.slidingScale && (
                      <span className="badge sliding">📊 {t('Escala móvil', 'Sliding scale')}</span>
                    )}
                    {resource.immigrationSafe && (
                      <span className="badge safe">🛡️ {t('Seguro', 'Safe')}</span>
                    )}
                    {resource.accessibility.spanishSpeakingStaff && (
                      <span className="badge spanish">🇲🇽 Español</span>
                    )}
                  </div>
                </div>

                <div className="resource-actions">
                  {resource.phone && (
                    <button
                      className="action-btn call"
                      onClick={(e) => {
                        e.stopPropagation();
                        onCallResource?.(resource.phone!);
                      }}
                    >
                      📞 {t('Llamar', 'Call')}
                    </button>
                  )}
                  <button
                    className="action-btn directions"
                    onClick={(e) => {
                      e.stopPropagation();
                      onGetDirections?.(resource);
                    }}
                  >
                    🧭 {t('Direcciones', 'Directions')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Map View Placeholder */}
      {viewMode === 'map' && (
        <div className="map-view">
          <div className="map-placeholder">
            🗺️
            <p>{t('Vista de mapa próximamente', 'Map view coming soon')}</p>
            <p className="sub">
              {t(
                `Mostrando ${filteredResources.length} recursos`,
                `Showing ${filteredResources.length} resources`
              )}
            </p>
          </div>
        </div>
      )}

      <style>{`
        .community-resources-map {
          padding: 1.5rem;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .resources-header {
          margin-bottom: 1.5rem;
        }

        .resources-header h2 {
          margin: 0 0 0.5rem;
          color: #333;
        }

        .subtitle {
          color: #666;
          margin: 0;
        }

        .view-toggle {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .view-toggle button {
          flex: 1;
          padding: 0.625rem;
          border: 1px solid #ddd;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .view-toggle button.active {
          background: #4CAF50;
          color: white;
          border-color: #4CAF50;
        }

        .search-section {
          margin-bottom: 1rem;
        }

        .search-box {
          position: relative;
        }

        .search-box input {
          width: 100%;
          padding: 0.75rem 2.5rem 0.75rem 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
        }

        .search-icon {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
        }

        .category-filters {
          margin-bottom: 1rem;
        }

        .filter-label {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 0.5rem;
        }

        .category-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .category-chip {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.5rem 0.75rem;
          border: 1px solid #e0e0e0;
          background: white;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 0.85rem;
        }

        .category-chip:hover {
          border-color: var(--category-color);
        }

        .category-chip.active {
          background: var(--category-color);
          color: white;
          border-color: var(--category-color);
        }

        .chip-icon {
          font-size: 1rem;
        }

        .additional-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
          padding: 0.75rem;
          background: #f5f5f5;
          border-radius: 8px;
        }

        .filter-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .toggle-icon {
          font-size: 1rem;
        }

        .results-count {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #eee;
        }

        .resources-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .resource-card {
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 1rem;
          cursor: pointer;
          transition: box-shadow 0.2s;
        }

        .resource-card:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .resource-card.selected {
          border-color: #4CAF50;
          box-shadow: 0 0 0 2px #4CAF5020;
        }

        .resource-header {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .resource-type-badge {
          width: 40px;
          height: 40px;
          background: #f5f5f5;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }

        .resource-title {
          flex: 1;
        }

        .resource-title h3 {
          margin: 0;
          font-size: 1rem;
          color: #333;
        }

        .resource-meta {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.25rem;
          font-size: 0.8rem;
        }

        .open-badge {
          font-weight: 500;
        }

        .open-badge.open {
          color: #4CAF50;
        }

        .open-badge.closed {
          color: #F44336;
        }

        .hours, .distance {
          color: #666;
        }

        .resource-body {
          margin-bottom: 0.75rem;
        }

        .resource-description {
          margin: 0 0 0.5rem;
          font-size: 0.9rem;
          color: #555;
        }

        .resource-address {
          font-size: 0.85rem;
          color: #666;
          margin-bottom: 0.5rem;
        }

        .resource-services {
          display: flex;
          flex-wrap: wrap;
          gap: 0.375rem;
          margin-bottom: 0.5rem;
        }

        .service-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          background: #e3f2fd;
          color: #1565c0;
          border-radius: 4px;
        }

        .service-tag.more {
          background: #f5f5f5;
          color: #666;
        }

        .resource-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.375rem;
        }

        .badge {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
        }

        .badge.free {
          background: #e8f5e9;
          color: #2e7d32;
        }

        .badge.sliding {
          background: #fff3e0;
          color: #e65100;
        }

        .badge.safe {
          background: #fce4ec;
          color: #c2185b;
        }

        .badge.spanish {
          background: #e8eaf6;
          color: #3f51b5;
        }

        .resource-actions {
          display: flex;
          gap: 0.5rem;
        }

        .action-btn {
          flex: 1;
          padding: 0.5rem;
          border: none;
          border-radius: 6px;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .action-btn.call {
          background: #e8f5e9;
          color: #2e7d32;
        }

        .action-btn.call:hover {
          background: #c8e6c9;
        }

        .action-btn.directions {
          background: #e3f2fd;
          color: #1565c0;
        }

        .action-btn.directions:hover {
          background: #bbdefb;
        }

        .map-view {
          min-height: 400px;
        }

        .map-placeholder {
          height: 400px;
          background: #f5f5f5;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #666;
          font-size: 3rem;
        }

        .map-placeholder p {
          font-size: 1rem;
          margin: 0.5rem 0 0;
        }

        .map-placeholder .sub {
          font-size: 0.85rem;
          color: #999;
        }
      `}</style>
    </div>
  );
};

export default CommunityResourcesMap;
