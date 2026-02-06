/**
 * FHIRProviderList.tsx
 * 
 * Component to display and select available FHIR/EHR providers.
 * Spanish-first UI with support for major providers.
 */

import React, { useState, useMemo } from 'react';
import type { FHIRProvider } from '../../core/import/fhir/types';
import { FHIR_PROVIDERS_INFO, getAvailablePatientProviders } from '../../core/import/fhir';

/**
 * Props for FHIRProviderList
 */
interface FHIRProviderListProps {
  /** Called when a provider is selected */
  onSelect: (provider: FHIRProvider) => void;
  /** Currently selected provider */
  selectedProvider?: FHIRProvider;
  /** Language preference */
  language?: 'es' | 'en';
  /** Filter to show only specific providers */
  filterProviders?: FHIRProvider[];
  /** Custom className */
  className?: string;
  /** Show search filter */
  showSearch?: boolean;
  /** Show provider descriptions */
  showDescriptions?: boolean;
  /** Grid or list layout */
  layout?: 'grid' | 'list';
  /** Maximum number of providers to show (undefined = all) */
  maxProviders?: number;
}

/**
 * FHIR Provider List Component
 */
export const FHIRProviderList: React.FC<FHIRProviderListProps> = ({
  onSelect,
  selectedProvider,
  language = 'es',
  filterProviders,
  className = '',
  showSearch = true,
  showDescriptions = true,
  layout = 'grid',
  maxProviders,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedProvider, setExpandedProvider] = useState<string | null>(null);

  // Get available providers
  const providers = useMemo(() => {
    let available = getAvailablePatientProviders();

    // Apply filter if specified
    if (filterProviders) {
      available = available.filter((p) => filterProviders.includes(p.id));
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      available = available.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.nameEs.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.descriptionEn.toLowerCase().includes(query)
      );
    }

    // Apply limit
    if (maxProviders) {
      available = available.slice(0, maxProviders);
    }

    return available;
  }, [filterProviders, searchQuery, maxProviders]);

  // Group providers by category
  const groupedProviders = useMemo(() => {
    const groups: Record<string, typeof providers> = {
      'major-ehr': [],
      'government': [],
      'other': [],
    };

    for (const provider of providers) {
      if (['epic', 'cerner'].includes(provider.id)) {
        groups['major-ehr'].push(provider);
      } else if (['va-health', 'medicare-blue-button'].includes(provider.id)) {
        groups['government'].push(provider);
      } else {
        groups['other'].push(provider);
      }
    }

    return groups;
  }, [providers]);

  /**
   * Handle provider selection
   */
  const handleSelect = (providerId: FHIRProvider) => {
    onSelect(providerId);
  };

  /**
   * Handle provider info toggle
   */
  const handleToggleInfo = (e: React.MouseEvent, providerId: string) => {
    e.stopPropagation();
    setExpandedProvider(expandedProvider === providerId ? null : providerId);
  };

  /**
   * Get provider category label
   */
  const getCategoryLabel = (category: string): string => {
    const labels: Record<string, { es: string; en: string }> = {
      'major-ehr': { es: 'Sistemas Principales', en: 'Major Systems' },
      'government': { es: 'Gobierno', en: 'Government' },
      'other': { es: 'Otros Proveedores', en: 'Other Providers' },
    };
    return labels[category]?.[language] || category;
  };

  /**
   * Render provider card
   */
  const renderProviderCard = (provider: typeof providers[0]) => {
    const isSelected = selectedProvider === provider.id;
    const isExpanded = expandedProvider === provider.id;

    return (
      <div
        key={provider.id}
        className={`fhir-provider-list__item ${
          isSelected ? 'fhir-provider-list__item--selected' : ''
        } ${isExpanded ? 'fhir-provider-list__item--expanded' : ''}`}
        onClick={() => handleSelect(provider.id)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleSelect(provider.id);
          }
        }}
        aria-pressed={isSelected}
      >
        <div className="fhir-provider-list__item-content">
          <div className="fhir-provider-list__logo-container">
            {provider.logo ? (
              <img
                src={provider.logo}
                alt={language === 'es' ? provider.nameEs : provider.name}
                className="fhir-provider-list__logo"
                onError={(e) => {
                  // Fallback to placeholder on error
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            ) : (
              <div className="fhir-provider-list__logo-placeholder">
                {getProviderInitials(language === 'es' ? provider.nameEs : provider.name)}
              </div>
            )}
          </div>

          <div className="fhir-provider-list__info">
            <h3 className="fhir-provider-list__name">
              {language === 'es' ? provider.nameEs : provider.name}
            </h3>
            
            {showDescriptions && (
              <p className="fhir-provider-list__description">
                {language === 'es' ? provider.description : provider.descriptionEn}
              </p>
            )}

            {isExpanded && (
              <div className="fhir-provider-list__details">
                <p className="fhir-provider-list__detail-text">
                  {language === 'es'
                    ? `Este proveedor utiliza el estándar FHIR R4 para compartir registros de salud de forma segura.`
                    : `This provider uses the FHIR R4 standard to securely share health records.`}
                </p>
                <div className="fhir-provider-list__security-badge">
                  <span>🔒</span>
                  <span>
                    {language === 'es' ? 'Conexión Segura' : 'Secure Connection'}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="fhir-provider-list__actions">
            <button
              className="fhir-provider-list__info-btn"
              onClick={(e) => handleToggleInfo(e, provider.id)}
              aria-label={
                language === 'es'
                  ? isExpanded
                    ? 'Mostrar menos'
                    : 'Más información'
                  : isExpanded
                  ? 'Show less'
                  : 'More information'
              }
            >
              {isExpanded ? '−' : 'i'}
            </button>

            {isSelected && (
              <div className="fhir-provider-list__checkmark">
                ✓
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  /**
   * Get provider initials for placeholder
   */
  const getProviderInitials = (name: string): string => {
    return name
      .split(' ')
      .map((w) => w[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  /**
   * Render empty state
   */
  const renderEmptyState = () => (
    <div className="fhir-provider-list__empty">
      <div className="fhir-provider-list__empty-icon">🔍</div>
      <p>
        {language === 'es'
          ? 'No se encontraron proveedores que coincidan con tu búsqueda.'
          : 'No providers found matching your search.'}
      </p>
      <button
        className="fhir-provider-list__clear-btn"
        onClick={() => setSearchQuery('')}
      >
        {language === 'es' ? 'Limpiar búsqueda' : 'Clear search'}
      </button>
    </div>
  );

  return (
    <div className={`fhir-provider-list fhir-provider-list--${layout} ${className}`}>
      {showSearch && (
        <div className="fhir-provider-list__search">
          <input
            type="text"
            className="fhir-provider-list__search-input"
            placeholder={
              language === 'es'
                ? 'Buscar proveedor de salud...'
                : 'Search health provider...'
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label={
              language === 'es'
                ? 'Buscar proveedor de salud'
                : 'Search health provider'
            }
          />
          {searchQuery && (
            <button
              className="fhir-provider-list__search-clear"
              onClick={() => setSearchQuery('')}
              aria-label={language === 'es' ? 'Limpiar' : 'Clear'}
            >
              ×
            </button>
          )}
        </div>
      )}

      <div className="fhir-provider-list__content">
        {providers.length === 0 ? (
          renderEmptyState()
        ) : layout === 'grid' ? (
          Object.entries(groupedProviders).map(
            ([category, categoryProviders]) =>
              categoryProviders.length > 0 && (
                <div key={category} className="fhir-provider-list__group">
                  <h4 className="fhir-provider-list__group-title">
                    {getCategoryLabel(category)}
                  </h4>
                  <div className="fhir-provider-list__grid">
                    {categoryProviders.map(renderProviderCard)}
                  </div>
                </div>
              )
          )
        ) : (
          <div className="fhir-provider-list__list">
            {providers.map(renderProviderCard)}
          </div>
        )}
      </div>

      <div className="fhir-provider-list__footer">
        <p className="fhir-provider-list__help-text">
          {language === 'es'
            ? '¿No ves tu proveedor? Pregunta si ofrecen acceso a pacientes mediante FHIR.'
            : "Don't see your provider? Ask if they offer patient access via FHIR."}
        </p>
      </div>
    </div>
  );
};

/**
 * Compact provider selector dropdown
 */
interface FHIRProviderSelectProps {
  value?: FHIRProvider;
  onChange: (provider: FHIRProvider | undefined) => void;
  language?: 'es' | 'en';
  className?: string;
  disabled?: boolean;
}

export const FHIRProviderSelect: React.FC<FHIRProviderSelectProps> = ({
  value,
  onChange,
  language = 'es',
  className = '',
  disabled = false,
}) => {
  const providers = getAvailablePatientProviders();

  return (
    <select
      className={`fhir-provider-select ${className}`}
      value={value || ''}
      onChange={(e) => onChange(e.target.value as FHIRProvider || undefined)}
      disabled={disabled}
    >
      <option value="">
        {language === 'es' ? 'Seleccionar proveedor...' : 'Select provider...'}
      </option>
      {providers.map((provider) => (
        <option key={provider.id} value={provider.id}>
          {language === 'es' ? provider.nameEs : provider.name}
        </option>
      ))}
    </select>
  );
};

export default FHIRProviderList;
