/**
 * Education View Component
 * 
 * Browse and access educational modules.
 */

import React, { useState, useEffect } from 'react';
import { ModuleViewer } from './ModuleViewer.js';
import type { EducationalModule, MedicalSpecialty } from '../core/education/types.js';

// Import modules directly (in production, these would come from backend)
import { type2DiabetesModule } from '../core/education/modules/endocrinology/type2-diabetes.js';
import { hypertensionModule } from '../core/education/modules/cardiology/hypertension.js';
import { cbcModule } from '../core/education/modules/labs/cbc.js';

const SPECIALTY_NAMES: Record<MedicalSpecialty, string> = {
  cardiology: 'Cardiology',
  endocrinology: 'Endocrinology',
  gastroenterology: 'Gastroenterology',
  neurology: 'Neurology',
  rheumatology: 'Rheumatology',
  pulmonology: 'Pulmonology',
  nephrology: 'Nephrology',
  hematology: 'Hematology',
  'infectious-disease': 'Infectious Disease',
  oncology: 'Oncology',
  psychiatry: 'Psychiatry',
  dermatology: 'Dermatology',
  ophthalmology: 'Ophthalmology',
  ent: 'ENT',
  orthopedics: 'Orthopedics',
  obgyn: 'OB/GYN',
  urology: 'Urology',
  'allergy-immunology': 'Allergy & Immunology',
  'sports-medicine': 'Sports Medicine',
  'physical-medicine': 'Physical Medicine',
  'emergency-medicine': 'Emergency Medicine',
  'critical-care': 'Critical Care',
  anesthesiology: 'Anesthesiology',
  pathology: 'Pathology',
  radiology: 'Radiology',
  'general-practice': 'General Practice',
};

const MODULE_TYPE_NAMES: Record<string, string> = {
  foundation: 'Foundations',
  'clinical-application': 'Clinical Applications',
  specialty: 'Medical Specialties',
  subspecialty: 'Subspecialties',
  concept: 'Key Concepts',
  procedure: 'Procedures',
  medication: 'Medications',
  lifestyle: 'Lifestyle',
};

interface EducationViewProps {
  onBack?: () => void;
  userData?: unknown;
}

export const EducationView: React.FC<EducationViewProps> = ({
  onBack,
  userData,
}) => {
  const [selectedModule, setSelectedModule] = useState<EducationalModule | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<MedicalSpecialty | 'all'>('all');
  const [selectedType, setSelectedType] = useState<string | 'all'>('all');

  // For now, use hardcoded modules. In production, fetch from registry
  const allModules: EducationalModule[] = [
    type2DiabetesModule,
    hypertensionModule,
    cbcModule,
  ];

  const filteredModules = allModules.filter((module) => {
    const matchesSearch = 
      module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSpecialty = 
      selectedSpecialty === 'all' || module.specialty === selectedSpecialty;
    
    const matchesType = 
      selectedType === 'all' || module.type === selectedType;

    return matchesSearch && matchesSpecialty && matchesType;
  });

  const specialties = Array.from(new Set(allModules.map((m) => m.specialty).filter(Boolean)));
  const types = Array.from(new Set(allModules.map((m) => m.type)));

  if (selectedModule) {
    return (
      <ModuleViewer
        module={selectedModule}
        onBack={() => setSelectedModule(null)}
        userData={userData}
      />
    );
  }

  return (
    <div className="education-view">
      <header className="education-header">
        {onBack && (
          <button className="back-btn" onClick={onBack}>
            ← Back to Dashboard
          </button>
        )}
        <div className="education-title">
          <h1>📚 Medical Education Library</h1>
          <p>Learn what specialists learn, explained at your level</p>
        </div>
      </header>

      <div className="education-filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-dropdowns">
          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value as MedicalSpecialty | 'all')}
          >
            <option value="all">All Specialties</option>
            {specialties.map((s) => (
              <option key={s} value={s}>{SPECIALTY_NAMES[s as MedicalSpecialty]}</option>
            ))}
          </select>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">All Types</option>
            {types.map((t) => (
              <option key={t} value={t}>{MODULE_TYPE_NAMES[t] || t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="modules-grid">
        {filteredModules.map((module) => (
          <div
            key={module.id}
            className="module-card"
            onClick={() => setSelectedModule(module)}
          >
            <div className="module-card-header">
              <span className="module-type-badge">
                {MODULE_TYPE_NAMES[module.type] || module.type}
              </span>
              {module.specialty && (
                <span className="module-specialty-badge">
                  {SPECIALTY_NAMES[module.specialty]}
                </span>
              )}
            </div>
            
            <h3>{module.title}</h3>
            <p className="module-description">{module.description}</p>
            
            <div className="module-meta">
              <span>⏱️ {module.estimatedTime[3]}</span>
              <span>📝 {module.quiz?.questions.length || 0} quiz questions</span>
            </div>
            
            <div className="module-objectives-preview">
              <strong>You'll learn:</strong>
              <ul>
                {module.learningObjectives.slice(0, 3).map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
                {module.learningObjectives.length > 3 && (
                  <li>...and {module.learningObjectives.length - 3} more</li>
                )}
              </ul>
            </div>
            
            <button className="start-learning-btn">
              Start Learning →
            </button>
          </div>
        ))}
      </div>

      {filteredModules.length === 0 && (
        <div className="no-results">
          <p>No modules match your search.</p>
          <button onClick={() => {
            setSearchQuery('');
            setSelectedSpecialty('all');
            setSelectedType('all');
          }}>
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default EducationView;
