/**
 * HealthcareNavigator Component
 * 
 * Guides users through the US healthcare system with bilingual content.
 * Covers insurance, appointments, patient rights, and more.
 */

import React, { useState } from 'react';
import {
  HealthcareNavigationGuide,
  NavigationCategory,
  CATEGORY_LABELS,
  LocalizedStep,
  FAQItem,
  getAllGuides,
  getGuidesByCategory,
  getGuideById,
  searchGuides,
  getLocalizedText,
  Language,
} from '../../../core/promotora';

interface HealthcareNavigatorProps {
  initialCategory?: NavigationCategory;
  onGuideSelect?: (guide: HealthcareNavigationGuide) => void;
  language?: Language;
}

export const HealthcareNavigator: React.FC<HealthcareNavigatorProps> = ({
  initialCategory,
  onGuideSelect,
  language = 'es',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<NavigationCategory | 'all'>(
    initialCategory || 'all'
  );
  const [selectedGuide, setSelectedGuide] = useState<HealthcareNavigationGuide | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const t = (es: string, en: string) => (language === 'es' ? es : en);

  const allGuides = getAllGuides(language);

  const displayedGuides = selectedGuide
    ? [selectedGuide]
    : searchQuery
    ? searchGuides(searchQuery, language)
    : selectedCategory === 'all'
    ? allGuides
    : getGuidesByCategory(selectedCategory, language);

  const handleGuideClick = (guide: HealthcareNavigationGuide) => {
    setSelectedGuide(guide);
    setExpandedStep(null);
    setExpandedFAQ(null);
    onGuideSelect?.(guide);
  };

  const handleBack = () => {
    setSelectedGuide(null);
    setExpandedStep(null);
    setExpandedFAQ(null);
  };

  const categories: { id: NavigationCategory | 'all'; icon: string }[] = [
    { id: 'all', icon: '📚' },
    { id: 'insurance_basics', icon: '🏥' },
    { id: 'medicaid', icon: '🏛️' },
    { id: 'medicare', icon: '👴' },
    { id: 'appointments', icon: '📅' },
    { id: 'emergency_care', icon: '🚑' },
    { id: 'patient_rights', icon: '⚖️' },
    { id: 'prescriptions', icon: '💊' },
  ];

  const renderStep = (step: LocalizedStep, index: number) => {
    const isExpanded = expandedStep === index;

    return (
      <div
        key={index}
        className={`guide-step ${isExpanded ? 'expanded' : ''}`}
        onClick={() => setExpandedStep(isExpanded ? null : index)}
      >
        <div className="step-header">
          <div className="step-number">{step.order}</div>
          <div className="step-title">{getLocalizedText(step.title, language)}</div>
          <div className="step-toggle">{isExpanded ? '▼' : '▶'}</div>
        </div>

        {isExpanded && (
          <div className="step-content">
            <p>{getLocalizedText(step.description, language)}</p>

            {step.actionItems && step.actionItems.length > 0 && (
              <div className="action-items">
                <p className="action-title">{t('Acciones:', 'Actions:')}</p>
                <ul>
                  {step.actionItems.map((item, idx) => (
                    <li key={idx}>{getLocalizedText(item, language)}</li>
                  ))}
                </ul>
              </div>
            )}

            {step.estimatedTime && (
              <div className="estimated-time">
                ⏱️ {t('Tiempo estimado:', 'Estimated time:')} {getLocalizedText(step.estimatedTime, language)}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderFAQ = (faq: FAQItem, index: number) => {
    const isExpanded = expandedFAQ === index;

    return (
      <div
        key={index}
        className={`faq-item ${isExpanded ? 'expanded' : ''}`}
        onClick={() => setExpandedFAQ(isExpanded ? null : index)}
      >
        <div className="faq-question">
          <span className="faq-icon">{isExpanded ? '📖' : '📘'}</span>
          {getLocalizedText(faq.question, language)}
          <span className="faq-toggle">{isExpanded ? '−' : '+'}</span>
        </div>

        {isExpanded && (
          <div className="faq-answer">
            {getLocalizedText(faq.answer, language)}
          </div>
        )}
      </div>
    );
  };

  const renderDocument = (doc, index) => (
    <div key={index} className={`document-item ${doc.required ? 'required' : ''}`}>
      <span className="doc-icon">{doc.required ? '📋' : '📄'}</span>
      <div className="doc-info">
        <div className="doc-name">{getLocalizedText(doc.name, language)}</div>
        {doc.description && (
          <div className="doc-description">{getLocalizedText(doc.description, language)}</div>
        )}
        {doc.alternatives && doc.alternatives.length > 0 && (
          <div className="doc-alternatives">
            {t('Alternativas:', 'Alternatives:')} {doc.alternatives.map(a => getLocalizedText(a, language)).join(', ')}
          </div>
        )}
      </div>
      <span className="doc-badge">
        {doc.required ? t('Requerido', 'Required') : t('Opcional', 'Optional')}
      </span>
    </div>
  );

  return (
    <div className="healthcare-navigator">
      {/* Header */}
      <div className="navigator-header">
        {selectedGuide ? (
          <button className="back-button" onClick={handleBack}>
            ← {t('Volver a guías', 'Back to guides')}
          </button>
        ) : (
          <>
            <h2>🏥 {t('Navegador de Salud', 'Healthcare Navigator')}</h2>
            <p className="subtitle">
              {t(
                'Aprenda cómo funciona el sistema de salud en EE.UU.',
                'Learn how the US healthcare system works'
              )}
            </p>
          </>
        )}
      </div>

      {/* Search */}
      {!selectedGuide && (
        <div className="search-section">
          <div className="search-box">
            <input
              type="text"
              placeholder={t('Buscar tema...', 'Search topic...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>
      )}

      {/* Category Filter */}
      {!selectedGuide && (
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={selectedCategory === cat.id ? 'active' : ''}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span className="tab-icon">{cat.icon}</span>
              <span className="tab-label">
                {cat.id === 'all'
                  ? t('Todas', 'All')
                  : getLocalizedText(CATEGORY_LABELS[cat.id], language)}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="navigator-content">
        {selectedGuide ? (
          /* Detail View */
          <div className="guide-detail">
            <div className="detail-header">
              <h1>{getLocalizedText(selectedGuide.title, language)}</h1>
              <p className="detail-summary">
                {getLocalizedText(selectedGuide.content.summary, language)}
              </p>
            </div>

            {/* Steps */}
            {selectedGuide.content.steps.length > 0 && (
              <div className="detail-section">
                <h3>📝 {t('Pasos a seguir', 'Steps to follow')}</h3>
                <div className="steps-list">
                  {selectedGuide.content.steps.map((step, idx) => renderStep(step, idx))}
                </div>
              </div>
            )}

            {/* Documents */}
            {selectedGuide.content.documents && selectedGuide.content.documents.length > 0 && (
              <div className="detail-section">
                <h3>📋 {t('Documentos necesarios', 'Required documents')}</h3>
                <div className="documents-list">
                  {selectedGuide.content.documents.map((doc, idx) => renderDocument(doc, idx))}
                </div>
              </div>
            )}

            {/* FAQ */}
            {selectedGuide.content.faq.length > 0 && (
              <div className="detail-section">
                <h3>❓ {t('Preguntas frecuentes', 'Frequently asked questions')}</h3>
                <div className="faq-list">
                  {selectedGuide.content.faq.map((faq, idx) => renderFAQ(faq, idx))}
                </div>
              </div>
            )}

            {/* Tips */}
            {selectedGuide.content.tips.length > 0 && (
              <div className="detail-section">
                <h3>💡 {t('Consejos útiles', 'Helpful tips')}</h3>
                <ul className="tips-list">
                  {selectedGuide.content.tips.map((tip, idx) => (
                    <li key={idx}>{getLocalizedText(tip, language)}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          /* List View */
          <div className="guides-grid">
            {displayedGuides.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">🔍</div>
                <p>{t('No se encontraron guías', 'No guides found')}</p>
              </div>
            ) : (
              displayedGuides.map((guide) => (
                <div
                  key={guide.id}
                  className="guide-card"
                  onClick={() => handleGuideClick(guide)}
                >
                  <div className="guide-icon">
                    {categories.find((c) => c.id === guide.category)?.icon || '📚'}
                  </div>
                  <div className="guide-content">
                    <h3>{getLocalizedText(guide.title, language)}</h3>
                    <p>{getLocalizedText(guide.content.summary, language)}</p>
                    <div className="guide-meta">
                      <span className="category-tag">
                        {getLocalizedText(CATEGORY_LABELS[guide.category], language)}
                      </span>
                      <span className="steps-count">
                        {guide.content.steps.length} {t('pasos', 'steps')}
                      </span>
                    </div>
                  </div>
                  <div className="guide-arrow">▶</div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <style>{`
        .healthcare-navigator {
          padding: 1.5rem;
          font-family: system-ui, -apple-system, sans-serif;
          max-width: 800px;
          margin: 0 auto;
        }

        .navigator-header {
          margin-bottom: 1.5rem;
        }

        .navigator-header h2 {
          margin: 0 0 0.5rem;
          color: #333;
        }

        .subtitle {
          color: #666;
          margin: 0;
        }

        .back-button {
          background: none;
          border: none;
          color: #4CAF50;
          font-size: 1rem;
          cursor: pointer;
          padding: 0;
        }

        .back-button:hover {
          text-decoration: underline;
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

        .category-tabs {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          margin-bottom: 1rem;
        }

        .category-tabs button {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.5rem 0.875rem;
          border: 1px solid #e0e0e0;
          background: white;
          border-radius: 20px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
        }

        .category-tabs button.active {
          background: #4CAF50;
          color: white;
          border-color: #4CAF50;
        }

        .tab-icon {
          font-size: 1.1rem;
        }

        .guides-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .guide-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .guide-card:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border-color: #4CAF50;
        }

        .guide-icon {
          font-size: 2rem;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
          border-radius: 12px;
        }

        .guide-content {
          flex: 1;
        }

        .guide-content h3 {
          margin: 0 0 0.25rem;
          font-size: 1rem;
          color: #333;
        }

        .guide-content p {
          margin: 0;
          font-size: 0.9rem;
          color: #666;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .guide-meta {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
          font-size: 0.8rem;
        }

        .category-tag {
          background: #e8f5e9;
          color: #2e7d32;
          padding: 0.125rem 0.5rem;
          border-radius: 4px;
        }

        .steps-count {
          color: #999;
        }

        .guide-arrow {
          color: #ccc;
        }

        .guide-detail {
          animation: fadeIn 0.3s;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .detail-header {
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #eee;
        }

        .detail-header h1 {
          margin: 0 0 0.75rem;
          color: #333;
          font-size: 1.5rem;
        }

        .detail-summary {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.6;
          margin: 0;
        }

        .detail-section {
          margin-bottom: 1.5rem;
        }

        .detail-section h3 {
          color: #333;
          margin-bottom: 0.75rem;
          font-size: 1.1rem;
        }

        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .guide-step {
          background: #f9f9f9;
          border-radius: 8px;
          overflow: hidden;
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          cursor: pointer;
        }

        .step-number {
          width: 28px;
          height: 28px;
          background: #4CAF50;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .step-title {
          flex: 1;
          font-weight: 500;
        }

        .step-toggle {
          color: #999;
        }

        .step-content {
          padding: 0 1rem 1rem 3.25rem;
        }

        .step-content p {
          margin: 0 0 0.75rem;
          color: #555;
          line-height: 1.6;
        }

        .action-items {
          background: white;
          padding: 0.75rem;
          border-radius: 6px;
          margin-top: 0.75rem;
        }

        .action-title {
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .action-items ul {
          margin: 0;
          padding-left: 1.25rem;
        }

        .action-items li {
          margin-bottom: 0.25rem;
          color: #555;
        }

        .estimated-time {
          margin-top: 0.75rem;
          font-size: 0.9rem;
          color: #666;
        }

        .documents-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .document-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: #f9f9f9;
          border-radius: 8px;
        }

        .document-item.required {
          background: #fff3e0;
        }

        .doc-icon {
          font-size: 1.25rem;
        }

        .doc-info {
          flex: 1;
        }

        .doc-name {
          font-weight: 500;
        }

        .doc-description {
          font-size: 0.85rem;
          color: #666;
          margin-top: 0.25rem;
        }

        .doc-alternatives {
          font-size: 0.8rem;
          color: #999;
          margin-top: 0.25rem;
        }

        .doc-badge {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          background: #e0e0e0;
          border-radius: 4px;
        }

        .document-item.required .doc-badge {
          background: #ff9800;
          color: white;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .faq-item {
          background: #f9f9f9;
          border-radius: 8px;
          overflow: hidden;
        }

        .faq-question {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          cursor: pointer;
          font-weight: 500;
        }

        .faq-icon {
          font-size: 1.1rem;
        }

        .faq-toggle {
          margin-left: auto;
          color: #999;
          font-size: 1.25rem;
        }

        .faq-answer {
          padding: 0 1rem 1rem 2.5rem;
          color: #555;
          line-height: 1.6;
        }

        .tips-list {
          margin: 0;
          padding-left: 1.5rem;
        }

        .tips-list li {
          margin-bottom: 0.5rem;
          color: #555;
          line-height: 1.6;
        }

        .empty-state {
          text-align: center;
          padding: 3rem;
          color: #666;
        }

        .empty-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default HealthcareNavigator;
