/**
 * FHIRImportReview.tsx
 * 
 * Component to review and preview FHIR data before importing.
 * Allows users to see what data will be imported and selectively include/exclude items.
 * Spanish-first UI.
 */

import React, { useState, useEffect, useCallback } from 'react';
import type {
  FHIRConnection,
  FHIRResourceType,
  BiologicalSelfCondition,
  BiologicalSelfMedication,
  BiologicalSelfLabResult,
  BiologicalSelfAllergy,
  BiologicalSelfVaccination,
} from '../../core/import/fhir/types';
import {
  getResourceTypeLabel,
  FHIRMappers,
} from '../../core/import/fhir';
import { FHIRFetcher, fetchFHIRData } from '../../core/import/fhir/fetcher';
import { FHIRSyncStatus } from './FHIRSyncStatus';

/**
 * Preview data structure
 */
interface PreviewData {
  conditions: BiologicalSelfCondition[];
  medications: BiologicalSelfMedication[];
  labResults: BiologicalSelfLabResult[];
  allergies: BiologicalSelfAllergy[];
  vaccinations: BiologicalSelfVaccination[];
  counts: Record<FHIRResourceType, number>;
}

/**
 * Selection state for items
 */
interface SelectionState {
  conditions: Record<string, boolean>;
  medications: Record<string, boolean>;
  labResults: Record<string, boolean>;
  allergies: Record<string, boolean>;
  vaccinations: Record<string, boolean>;
}

/**
 * Props for FHIRImportReview
 */
interface FHIRImportReviewProps {
  /** FHIR connection */
  connection: FHIRConnection;
  /** Called when user confirms import */
  onConfirm: (selection: SelectionState) => void;
  /** Called when user goes back */
  onBack?: () => void;
  /** Language preference */
  language?: 'es' | 'en';
  /** Show preview before import */
  showPreview?: boolean;
  /** Maximum items to preview per category */
  previewLimit?: number;
  /** Custom className */
  className?: string;
}

/**
 * FHIR Import Review Component
 */
export const FHIRImportReview: React.FC<FHIRImportReviewProps> = ({
  connection,
  onConfirm,
  onBack,
  language = 'es',
  showPreview = true,
  previewLimit = 5,
  className = '',
}) => {
  const [preview, setPreview] = useState<PreviewData | null>(null);
  const [selection, setSelection] = useState<SelectionState>({
    conditions: {},
    medications: {},
    labResults: {},
    allergies: {},
    vaccinations: {},
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<FHIRResourceType>('Condition');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Load preview data
  useEffect(() => {
    if (showPreview) {
      loadPreview();
    } else {
      setLoading(false);
    }
  }, [connection, showPreview]);

  /**
   * Load preview data
   */
  const loadPreview = async () => {
    try {
      setLoading(true);
      setError(null);

      const { FHIRClient } = await import('../../core/import/fhir/fhir-client');
      
      const client = new FHIRClient(
        {
          id: connection.provider,
          name: connection.providerName,
          nameEs: connection.providerName,
          baseUrl: connection.baseUrl,
          authorizeUrl: '',
          tokenUrl: '',
          scopes: connection.scope.split(' '),
          supportedResources: [],
          requiresLaunchContext: false,
          patientFacing: true,
        },
        'client-id',
        ''
      );

      const { data } = await fetchFHIRData(client, {
        pageSize: previewLimit,
        includePatient: false,
        maxResourcesPerType: previewLimit,
      });

      // Map resources
      const mappedConditions = data.conditions
        .slice(0, previewLimit)
        .map((c) => FHIRMappers.condition(c).data);
      
      const mappedMedications = data.medications
        .slice(0, previewLimit)
        .map((m) => FHIRMappers.medicationRequest(m).data);
      
      const mappedLabs = data.observations
        .slice(0, previewLimit)
        .map((o) => FHIRMappers.observation(o).data);
      
      const mappedAllergies = data.allergies
        .slice(0, previewLimit)
        .map((a) => FHIRMappers.allergyIntolerance(a).data);
      
      const mappedVaccines = data.immunizations
        .slice(0, previewLimit)
        .map((i) => FHIRMappers.immunization(i).data);

      const previewData: PreviewData = {
        conditions: mappedConditions,
        medications: mappedMedications,
        labResults: mappedLabs,
        allergies: mappedAllergies,
        vaccinations: mappedVaccines,
        counts: {
          Patient: 1,
          Condition: data.raw['Condition']?.length || 0,
          MedicationRequest: data.raw['MedicationRequest']?.length || 0,
          Observation: data.raw['Observation']?.length || 0,
          AllergyIntolerance: data.raw['AllergyIntolerance']?.length || 0,
          Immunization: data.raw['Immunization']?.length || 0,
          Procedure: 0,
          DiagnosticReport: 0,
          Encounter: 0,
          DocumentReference: 0,
          CarePlan: 0,
          Goal: 0,
          FamilyMemberHistory: 0,
          RelatedPerson: 0,
          Practitioner: 0,
          Organization: 0,
          Location: 0,
        },
      };

      setPreview(previewData);

      // Initialize selection (all selected by default)
      setSelection({
        conditions: Object.fromEntries(
          mappedConditions.map((c) => [c.id, true])
        ),
        medications: Object.fromEntries(
          mappedMedications.map((m) => [m.id, true])
        ),
        labResults: Object.fromEntries(
          mappedLabs.map((l) => [l.id, true])
        ),
        allergies: Object.fromEntries(
          mappedAllergies.map((a) => [a.id, true])
        ),
        vaccinations: Object.fromEntries(
          mappedVaccines.map((v) => [v.id, true])
        ),
      });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Toggle item selection
   */
  const toggleSelection = useCallback(
    (type: keyof SelectionState, id: string) => {
      setSelection((prev) => ({
        ...prev,
        [type]: {
          ...prev[type],
          [id]: !prev[type][id],
        },
      }));
    },
    []
  );

  /**
   * Select/deselect all in category
   */
  const toggleAllInCategory = useCallback(
    (type: keyof SelectionState, selected: boolean) => {
      setSelection((prev) => {
        const items = preview?.[type] || [];
        return {
          ...prev,
          [type]: Object.fromEntries(items.map((item: { id: string }) => [item.id, selected])),
        };
      });
    },
    [preview]
  );

  /**
   * Toggle item expansion
   */
  const toggleExpansion = (id: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  /**
   * Handle confirm
   */
  const handleConfirm = () => {
    onConfirm(selection);
  };

  /**
   * Get selected count for a type
   */
  const getSelectedCount = (type: keyof SelectionState): number => {
    return Object.values(selection[type]).filter(Boolean).length;
  };

  /**
   * Get total count for a type
   */
  const getTotalCount = (type: keyof PreviewData): number => {
    return (preview?.[type] || []).length;
  };

  /**
   * Format date for display
   */
  const formatDate = (date?: Date): string => {
    if (!date) return language === 'es' ? 'Fecha desconocida' : 'Unknown date';
    return new Date(date).toLocaleDateString(
      language === 'es' ? 'es-ES' : 'en-US',
      {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }
    );
  };

  // Tabs configuration
  const tabs: { id: FHIRResourceType; label: string; count: number }[] = [
    {
      id: 'Condition',
      label: language === 'es' ? 'Condiciones' : 'Conditions',
      count: preview?.counts.Condition || 0,
    },
    {
      id: 'MedicationRequest',
      label: language === 'es' ? 'Medicamentos' : 'Medications',
      count: preview?.counts.MedicationRequest || 0,
    },
    {
      id: 'Observation',
      label: language === 'es' ? 'Laboratorio' : 'Lab Results',
      count: preview?.counts.Observation || 0,
    },
    {
      id: 'AllergyIntolerance',
      label: language === 'es' ? 'Alergias' : 'Allergies',
      count: preview?.counts.AllergyIntolerance || 0,
    },
    {
      id: 'Immunization',
      label: language === 'es' ? 'Vacunas' : 'Immunizations',
      count: preview?.counts.Immunization || 0,
    },
  ];

  if (loading) {
    return (
      <div className={`fhir-import-review ${className}`}>
        <div className="fhir-import-review__loading">
          <div className="fhir-import-review__spinner"></div>
          <p>
            {language === 'es'
              ? 'Cargando vista previa...'
              : 'Loading preview...'}
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`fhir-import-review ${className}`}>
        <div className="fhir-import-review__error">
          <span className="fhir-import-review__error-icon">⚠️</span>
          <p>{error}</p>
          <button
            className="fhir-import-review__retry-btn"
            onClick={loadPreview}
          >
            {language === 'es' ? 'Reintentar' : 'Retry'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`fhir-import-review ${className}`}>
      <div className="fhir-import-review__header">
        <h3>
          {language === 'es'
            ? 'Vista Previa de Datos'
            : 'Data Preview'}
        </h3>
        <p className="fhir-import-review__description">
          {language === 'es'
            ? 'Revisa los datos que se importarán. Puedes deseleccionar elementos que no desees importar.'
            : 'Review the data to be imported. You can deselect items you do not wish to import.'}
        </p>
      </div>

      <div className="fhir-import-review__summary">
        <div className="fhir-import-review__summary-grid">
          {tabs.map((tab) => (
            <div key={tab.id} className="fhir-import-review__summary-item">
              <span className="fhir-import-review__summary-count">{tab.count}</span>
              <span className="fhir-import-review__summary-label">{tab.label}</span>
            </div>
          ))}
        </div>
      </div>

      {showPreview && preview && (
        <>
          <div className="fhir-import-review__tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`fhir-import-review__tab ${
                  activeTab === tab.id ? 'fhir-import-review__tab--active' : ''
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                <span className="fhir-import-review__tab-count">{tab.count}</span>
              </button>
            ))}
          </div>

          <div className="fhir-import-review__content">
            {renderTabContent()}
          </div>
        </>
      )}

      <div className="fhir-import-review__actions">
        {onBack && (
          <button
            className="fhir-import-review__button fhir-import-review__button--secondary"
            onClick={onBack}
          >
            {language === 'es' ? 'Atrás' : 'Back'}
          </button>
        )}
        <button
          className="fhir-import-review__button fhir-import-review__button--primary"
          onClick={handleConfirm}
        >
          {language === 'es'
            ? `Importar ${getTotalSelectedCount()} elementos`
            : `Import ${getTotalSelectedCount()} items`}
        </button>
      </div>
    </div>
  );

  /**
   * Render content for active tab
   */
  function renderTabContent() {
    switch (activeTab) {
      case 'Condition':
        return renderConditionsList();
      case 'MedicationRequest':
        return renderMedicationsList();
      case 'Observation':
        return renderLabResultsList();
      case 'AllergyIntolerance':
        return renderAllergiesList();
      case 'Immunization':
        return renderVaccinationsList();
      default:
        return null;
    }
  }

  /**
   * Render conditions list
   */
  function renderConditionsList() {
    const items = preview?.conditions || [];
    const selectedCount = getSelectedCount('conditions');

    return (
      <div className="fhir-import-review__list">
        <div className="fhir-import-review__list-header">
          <label className="fhir-import-review__select-all">
            <input
              type="checkbox"
              checked={selectedCount === items.length && items.length > 0}
              onChange={(e) => toggleAllInCategory('conditions', e.target.checked)}
            />
            {language === 'es'
              ? `Seleccionar todo (${selectedCount}/${items.length})`
              : `Select all (${selectedCount}/${items.length})`}
          </label>
        </div>

        {items.map((item) => (
          <div
            key={item.id}
            className={`fhir-import-review__item ${
              selection.conditions[item.id] ? '' : 'fhir-import-review__item--excluded'
            }`}
          >
            <input
              type="checkbox"
              checked={selection.conditions[item.id] || false}
              onChange={() => toggleSelection('conditions', item.id)}
              className="fhir-import-review__item-checkbox"
            />
            <div className="fhir-import-review__item-content">
              <div className="fhir-import-review__item-header">
                <span className="fhir-import-review__item-name">{item.name}</span>
                <span className={`fhir-import-review__item-status fhir-import-review__item-status--${item.status}`}>
                  {item.status}
                </span>
              </div>
              <div className="fhir-import-review__item-meta">
                {item.icd10Code && (
                  <span className="fhir-import-review__item-code">ICD-10: {item.icd10Code}</span>
                )}
                <span className="fhir-import-review__item-date">
                  {formatDate(item.diagnosedDate)}
                </span>
              </div>
            </div>
          </div>
        ))}

        {(preview?.counts.Condition || 0) > previewLimit && (
          <p className="fhir-import-review__more">
            {language === 'es'
              ? `+${(preview?.counts.Condition || 0) - previewLimit} más...`
              : `+${(preview?.counts.Condition || 0) - previewLimit} more...`}
          </p>
        )}
      </div>
    );
  }

  /**
   * Render medications list
   */
  function renderMedicationsList() {
    const items = preview?.medications || [];
    const selectedCount = getSelectedCount('medications');

    return (
      <div className="fhir-import-review__list">
        <div className="fhir-import-review__list-header">
          <label className="fhir-import-review__select-all">
            <input
              type="checkbox"
              checked={selectedCount === items.length && items.length > 0}
              onChange={(e) => toggleAllInCategory('medications', e.target.checked)}
            />
            {language === 'es'
              ? `Seleccionar todo (${selectedCount}/${items.length})`
              : `Select all (${selectedCount}/${items.length})`}
          </label>
        </div>

        {items.map((item) => (
          <div
            key={item.id}
            className={`fhir-import-review__item ${
              selection.medications[item.id] ? '' : 'fhir-import-review__item--excluded'
            }`}
          >
            <input
              type="checkbox"
              checked={selection.medications[item.id] || false}
              onChange={() => toggleSelection('medications', item.id)}
              className="fhir-import-review__item-checkbox"
            />
            <div className="fhir-import-review__item-content">
              <div className="fhir-import-review__item-header">
                <span className="fhir-import-review__item-name">{item.name}</span>
                <span className={`fhir-import-review__item-status fhir-import-review__item-status--${item.status}`}>
                  {item.status}
                </span>
              </div>
              <div className="fhir-import-review__item-meta">
                {item.dose && (
                  <span className="fhir-import-review__item-dose">{item.dose}</span>
                )}
                {item.frequency && (
                  <span className="fhir-import-review__item-frequency">{item.frequency}</span>
                )}
              </div>
            </div>
          </div>
        ))}

        {(preview?.counts.MedicationRequest || 0) > previewLimit && (
          <p className="fhir-import-review__more">
            {language === 'es'
              ? `+${(preview?.counts.MedicationRequest || 0) - previewLimit} más...`
              : `+${(preview?.counts.MedicationRequest || 0) - previewLimit} more...`}
          </p>
        )}
      </div>
    );
  }

  /**
   * Render lab results list
   */
  function renderLabResultsList() {
    const items = preview?.labResults || [];
    const selectedCount = getSelectedCount('labResults');

    return (
      <div className="fhir-import-review__list">
        <div className="fhir-import-review__list-header">
          <label className="fhir-import-review__select-all">
            <input
              type="checkbox"
              checked={selectedCount === items.length && items.length > 0}
              onChange={(e) => toggleAllInCategory('labResults', e.target.checked)}
            />
            {language === 'es'
              ? `Seleccionar todo (${selectedCount}/${items.length})`
              : `Select all (${selectedCount}/${items.length})`}
          </label>
        </div>

        {items.map((item) => (
          <div
            key={item.id}
            className={`fhir-import-review__item ${
              selection.labResults[item.id] ? '' : 'fhir-import-review__item--excluded'
            }`}
          >
            <input
              type="checkbox"
              checked={selection.labResults[item.id] || false}
              onChange={() => toggleSelection('labResults', item.id)}
              className="fhir-import-review__item-checkbox"
            />
            <div className="fhir-import-review__item-content">
              <div className="fhir-import-review__item-header">
                <span className="fhir-import-review__item-name">{item.testName}</span>
                <span className={`fhir-import-review__item-value fhir-import-review__item-value--${item.interpretation}`}>
                  {item.value} {item.unit}
                </span>
              </div>
              <div className="fhir-import-review__item-meta">
                {item.referenceRangeLow !== undefined && item.referenceRangeHigh !== undefined && (
                  <span className="fhir-import-review__item-range">
                    {language === 'es' ? 'Ref:' : 'Ref:'} {item.referenceRangeLow} - {item.referenceRangeHigh}
                  </span>
                )}
                <span className="fhir-import-review__item-date">
                  {formatDate(item.collectedDate)}
                </span>
              </div>
            </div>
          </div>
        ))}

        {(preview?.counts.Observation || 0) > previewLimit && (
          <p className="fhir-import-review__more">
            {language === 'es'
              ? `+${(preview?.counts.Observation || 0) - previewLimit} más...`
              : `+${(preview?.counts.Observation || 0) - previewLimit} more...`}
          </p>
        )}
      </div>
    );
  }

  /**
   * Render allergies list
   */
  function renderAllergiesList() {
    const items = preview?.allergies || [];
    const selectedCount = getSelectedCount('allergies');

    return (
      <div className="fhir-import-review__list">
        <div className="fhir-import-review__list-header">
          <label className="fhir-import-review__select-all">
            <input
              type="checkbox"
              checked={selectedCount === items.length && items.length > 0}
              onChange={(e) => toggleAllInCategory('allergies', e.target.checked)}
            />
            {language === 'es'
              ? `Seleccionar todo (${selectedCount}/${items.length})`
              : `Select all (${selectedCount}/${items.length})`}
          </label>
        </div>

        {items.map((item) => (
          <div
            key={item.id}
            className={`fhir-import-review__item ${
              selection.allergies[item.id] ? '' : 'fhir-import-review__item--excluded'
            }`}
          >
            <input
              type="checkbox"
              checked={selection.allergies[item.id] || false}
              onChange={() => toggleSelection('allergies', item.id)}
              className="fhir-import-review__item-checkbox"
            />
            <div className="fhir-import-review__item-content">
              <div className="fhir-import-review__item-header">
                <span className="fhir-import-review__item-name">{item.allergen}</span>
                {item.criticality === 'high' && (
                  <span className="fhir-import-review__item-critical">
                    {language === 'es' ? 'CRÍTICA' : 'CRITICAL'}
                  </span>
                )}
              </div>
              <div className="fhir-import-review__item-meta">
                {item.reactions.length > 0 && (
                  <span className="fhir-import-review__item-reactions">
                    {item.reactions.map((r) => r.manifestation).join(', ')}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}

        {(preview?.counts.AllergyIntolerance || 0) > previewLimit && (
          <p className="fhir-import-review__more">
            {language === 'es'
              ? `+${(preview?.counts.AllergyIntolerance || 0) - previewLimit} más...`
              : `+${(preview?.counts.AllergyIntolerance || 0) - previewLimit} more...`}
          </p>
        )}
      </div>
    );
  }

  /**
   * Render vaccinations list
   */
  function renderVaccinationsList() {
    const items = preview?.vaccinations || [];
    const selectedCount = getSelectedCount('vaccinations');

    return (
      <div className="fhir-import-review__list">
        <div className="fhir-import-review__list-header">
          <label className="fhir-import-review__select-all">
            <input
              type="checkbox"
              checked={selectedCount === items.length && items.length > 0}
              onChange={(e) => toggleAllInCategory('vaccinations', e.target.checked)}
            />
            {language === 'es'
              ? `Seleccionar todo (${selectedCount}/${items.length})`
              : `Select all (${selectedCount}/${items.length})`}
          </label>
        </div>

        {items.map((item) => (
          <div
            key={item.id}
            className={`fhir-import-review__item ${
              selection.vaccinations[item.id] ? '' : 'fhir-import-review__item--excluded'
            }`}
          >
            <input
              type="checkbox"
              checked={selection.vaccinations[item.id] || false}
              onChange={() => toggleSelection('vaccinations', item.id)}
              className="fhir-import-review__item-checkbox"
            />
            <div className="fhir-import-review__item-content">
              <div className="fhir-import-review__item-header">
                <span className="fhir-import-review__item-name">{item.vaccineName}</span>
                <span className="fhir-import-review__item-date">
                  {formatDate(item.administeredDate)}
                </span>
              </div>
            </div>
          </div>
        ))}

        {(preview?.counts.Immunization || 0) > previewLimit && (
          <p className="fhir-import-review__more">
            {language === 'es'
              ? `+${(preview?.counts.Immunization || 0) - previewLimit} más...`
              : `+${(preview?.counts.Immunization || 0) - previewLimit} more...`}
          </p>
        )}
      </div>
    );
  }

  /**
   * Get total selected count
   */
  function getTotalSelectedCount(): number {
    return (
      getSelectedCount('conditions') +
      getSelectedCount('medications') +
      getSelectedCount('labResults') +
      getSelectedCount('allergies') +
      getSelectedCount('vaccinations')
    );
  }
};

export default FHIRImportReview;
