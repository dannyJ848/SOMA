/**
 * Anatomical Region Menu System
 * 
 * The core navigation paradigm: User selects a body region on the 3D model,
 * and a contextual menu appears with region-specific medical information.
 * 
 * This is the PRIMARY interface - everything flows from anatomical selection.
 */

import React, { useState, useEffect, useCallback } from 'react';
import type { EducationalContent } from '../core/content/types';
import type { ContentDocument } from './ContentViewer';

// Anatomical region definition
export interface AnatomicalRegion {
  id: string;
  name: string;
  latinName?: string;
  system: 'cardiovascular' | 'respiratory' | 'digestive' | 'nervous' | 'musculoskeletal' | 'urinary' | 'reproductive' | 'endocrine' | 'immune' | 'integumentary';
  subRegions?: string[];
  fmaId?: string; // Foundational Model of Anatomy ID
  surfaceLandmarks?: string[];
  clinicalSignificance: 'critical' | 'high' | 'moderate' | 'low';
}

// Menu action types
export type MenuAction = 
  | 'view-anatomy'
  | 'view-histology' 
  | 'view-pathology'
  | 'view-physiology'
  | 'clinical-exam'
  | 'procedures'
  | 'conditions'
  | 'medications'
  | 'labs'
  | 'imaging'
  | 'ask-ai';

// Menu item definition
export interface RegionMenuItem {
  id: MenuAction;
  label: string;
  icon: string;
  description: string;
  shortcut?: string;
  badge?: {
    count: number;
    type: 'info' | 'warning' | 'critical';
  };
  disabled?: boolean;
  requiresAuth?: boolean;
}

// Patient data for this region
export interface RegionPatientData {
  conditions: Array<{
    name: string;
    status: 'active' | 'resolved' | 'chronic' | 'managed';
    severity: 'mild' | 'moderate' | 'severe';
    diagnosedDate: Date;
  }>;
  symptoms: Array<{
    description: string;
    severity: number; // 1-10
    onset: Date;
    pattern: 'constant' | 'intermittent' | 'worsening' | 'improving';
  }>;
  medications: Array<{
    name: string;
    dose: string;
    indication: string;
  }>;
  labResults: Array<{
    test: string;
    value: string;
    status: 'normal' | 'abnormal' | 'critical';
  }>;
  imaging: Array<{
    type: string;
    date: Date;
    findings: string;
  }>;
  procedures: Array<{
    name: string;
    date: Date;
    outcome: string;
  }>;
}

// Complete region context
export interface RegionContext {
  region: AnatomicalRegion;
  patientData?: RegionPatientData;
  availableContent: {
    anatomy: boolean;
    histology: boolean;
    pathology: boolean;
    physiology: boolean;
    clinical: boolean;
  };
}

// Region menu configuration
const REGION_MENU_CONFIG: Record<string, Partial<Record<MenuAction, RegionMenuItem>>> = {
  // Cardiovascular system
  cardiovascular: {
    'view-anatomy': {
      id: 'view-anatomy',
      label: 'Anatomy',
      icon: '🫀',
      description: 'Structural anatomy and relationships',
    },
    'view-histology': {
      id: 'view-histology',
      label: 'Histology',
      icon: '🔬',
      description: 'Microscopic tissue structure',
    },
    'view-pathology': {
      id: 'view-pathology',
      label: 'Pathology',
      icon: '🦠',
      description: 'Disease processes and conditions',
    },
    'view-physiology': {
      id: 'view-physiology',
      label: 'Physiology',
      icon: '⚡',
      description: 'Functional mechanisms',
    },
    'clinical-exam': {
      id: 'clinical-exam',
      label: 'Physical Exam',
      icon: '👨‍⚕️',
      description: 'Examination techniques and findings',
    },
    'conditions': {
      id: 'conditions',
      label: 'Conditions',
      icon: '🏥',
      description: 'Patient conditions affecting this region',
    },
    'medications': {
      id: 'medications',
      label: 'Medications',
      icon: '💊',
      description: 'Drugs affecting this system',
    },
    'labs': {
      id: 'labs',
      label: 'Lab Tests',
      icon: '🧪',
      description: 'Relevant laboratory values',
    },
    'imaging': {
      id: 'imaging',
      label: 'Imaging',
      icon: '📷',
      description: 'Radiology and diagnostic imaging',
    },
    'ask-ai': {
      id: 'ask-ai',
      label: 'Ask AI',
      icon: '🤖',
      description: 'Get AI-powered insights',
    },
  },
  // Respiratory system
  respiratory: {
    'view-anatomy': {
      id: 'view-anatomy',
      label: 'Anatomy',
      icon: '🫁',
      description: 'Structural anatomy and relationships',
    },
    'view-histology': {
      id: 'view-histology',
      label: 'Histology',
      icon: '🔬',
      description: 'Microscopic tissue structure',
    },
    'view-pathology': {
      id: 'view-pathology',
      label: 'Pathology',
      icon: '🦠',
      description: 'Disease processes and conditions',
    },
    'view-physiology': {
      id: 'view-physiology',
      label: 'Physiology',
      icon: '💨',
      description: 'Ventilation and gas exchange',
    },
    'clinical-exam': {
      id: 'clinical-exam',
      label: 'Physical Exam',
      icon: '👨‍⚕️',
      description: 'Auscultation and percussion',
    },
    'conditions': {
      id: 'conditions',
      label: 'Conditions',
      icon: '🏥',
      description: 'Patient conditions affecting this region',
    },
    'medications': {
      id: 'medications',
      label: 'Medications',
      icon: '💊',
      description: 'Respiratory medications',
    },
    'labs': {
      id: 'labs',
      label: 'Lab Tests',
      icon: '🧪',
      description: 'ABG, pulmonary function tests',
    },
    'imaging': {
      id: 'imaging',
      label: 'Imaging',
      icon: '📷',
      description: 'Chest X-ray, CT, MRI',
    },
    'ask-ai': {
      id: 'ask-ai',
      label: 'Ask AI',
      icon: '🤖',
      description: 'Get AI-powered insights',
    },
  },
  // Default configuration for other systems
  default: {
    'view-anatomy': {
      id: 'view-anatomy',
      label: 'Anatomy',
      icon: '🦴',
      description: 'Structural anatomy',
    },
    'view-histology': {
      id: 'view-histology',
      label: 'Histology',
      icon: '🔬',
      description: 'Microscopic structure',
    },
    'view-pathology': {
      id: 'view-pathology',
      label: 'Pathology',
      icon: '🦠',
      description: 'Disease processes',
    },
    'view-physiology': {
      id: 'view-physiology',
      label: 'Physiology',
      icon: '⚡',
      description: 'Functional mechanisms',
    },
    'clinical-exam': {
      id: 'clinical-exam',
      label: 'Physical Exam',
      icon: '👨‍⚕️',
      description: 'Examination techniques',
    },
    'conditions': {
      id: 'conditions',
      label: 'Conditions',
      icon: '🏥',
      description: 'Patient conditions',
    },
    'medications': {
      id: 'medications',
      label: 'Medications',
      icon: '💊',
      description: 'Relevant medications',
    },
    'labs': {
      id: 'labs',
      label: 'Lab Tests',
      icon: '🧪',
      description: 'Laboratory values',
    },
    'imaging': {
      id: 'imaging',
      label: 'Imaging',
      icon: '📷',
      description: 'Diagnostic imaging',
    },
    'ask-ai': {
      id: 'ask-ai',
      label: 'Ask AI',
      icon: '🤖',
      description: 'AI-powered insights',
    },
  },
};

// Major anatomical regions
export const ANATOMICAL_REGIONS: AnatomicalRegion[] = [
  // Head and Neck
  { id: 'brain', name: 'Brain', latinName: 'Cerebrum', system: 'nervous', clinicalSignificance: 'critical', fmaId: 'FMA:50801' },
  { id: 'cerebellum', name: 'Cerebellum', system: 'nervous', clinicalSignificance: 'high', fmaId: 'FMA:67944' },
  { id: 'brainstem', name: 'Brainstem', latinName: 'Truncus encephali', system: 'nervous', clinicalSignificance: 'critical', fmaId: 'FMA:50803' },
  { id: 'skull', name: 'Skull', latinName: 'Cranium', system: 'musculoskeletal', clinicalSignificance: 'high', fmaId: 'FMA:52734' },
  { id: 'face', name: 'Face', latinName: 'Facies', system: 'integumentary', clinicalSignificance: 'moderate', fmaId: 'FMA:24728' },
  { id: 'neck', name: 'Neck', latinName: 'Collum', system: 'musculoskeletal', clinicalSignificance: 'high', fmaId: 'FMA:7154' },
  { id: 'thyroid', name: 'Thyroid Gland', latinName: 'Glandula thyroidea', system: 'endocrine', clinicalSignificance: 'high', fmaId: 'FMA:9603' },
  
  // Thorax
  { id: 'heart', name: 'Heart', latinName: 'Cor', system: 'cardiovascular', clinicalSignificance: 'critical', fmaId: 'FMA:7088' },
  { id: 'lungs', name: 'Lungs', latinName: 'Pulmones', system: 'respiratory', clinicalSignificance: 'critical', fmaId: 'FMA:68877' },
  { id: 'trachea', name: 'Trachea', system: 'respiratory', clinicalSignificance: 'critical', fmaId: 'FMA:7394' },
  { id: 'esophagus', name: 'Esophagus', system: 'digestive', clinicalSignificance: 'high', fmaId: 'FMA:7131' },
  { id: 'thoracic-spine', name: 'Thoracic Spine', latinName: 'Columna thoracica', system: 'musculoskeletal', clinicalSignificance: 'high', fmaId: 'FMA:9140' },
  { id: 'ribs', name: 'Ribs', latinName: 'Costae', system: 'musculoskeletal', clinicalSignificance: 'moderate', fmaId: 'FMA:7574' },
  { id: 'sternum', name: 'Sternum', system: 'musculoskeletal', clinicalSignificance: 'moderate', fmaId: 'FMA:7485' },
  { id: 'mediastinum', name: 'Mediastinum', system: 'cardiovascular', clinicalSignificance: 'critical', fmaId: 'FMA:9826' },
  { id: 'thymus', name: 'Thymus', system: 'immune', clinicalSignificance: 'moderate', fmaId: 'FMA:9609' },
  
  // Abdomen
  { id: 'liver', name: 'Liver', latinName: 'Jecur', system: 'digestive', clinicalSignificance: 'critical', fmaId: 'FMA:7197' },
  { id: 'stomach', name: 'Stomach', latinName: 'Ventriculus', system: 'digestive', clinicalSignificance: 'high', fmaId: 'FMA:7148' },
  { id: 'small-intestine', name: 'Small Intestine', latinName: 'Intestinum tenue', system: 'digestive', clinicalSignificance: 'high', fmaId: 'FMA:7200' },
  { id: 'large-intestine', name: 'Large Intestine', latinName: 'Intestinum crassum', system: 'digestive', clinicalSignificance: 'high', fmaId: 'FMA:7201' },
  { id: 'pancreas', name: 'Pancreas', system: 'digestive', clinicalSignificance: 'critical', fmaId: 'FMA:7198' },
  { id: 'gallbladder', name: 'Gallbladder', latinName: 'Vesica biliaris', system: 'digestive', clinicalSignificance: 'moderate', fmaId: 'FMA:7203' },
  { id: 'kidneys', name: 'Kidneys', latinName: 'Renes', system: 'urinary', clinicalSignificance: 'critical', fmaId: 'FMA:7205' },
  { id: 'spleen', name: 'Spleen', latinName: 'Splen', system: 'immune', clinicalSignificance: 'high', fmaId: 'FMA:7204' },
  { id: 'adrenal-glands', name: 'Adrenal Glands', latinName: 'Glandulae suprarenales', system: 'endocrine', clinicalSignificance: 'high', fmaId: 'FMA:9604' },
  { id: 'abdominal-aorta', name: 'Abdominal Aorta', system: 'cardiovascular', clinicalSignificance: 'critical', fmaId: 'FMA:3789' },
  { id: 'lumbar-spine', name: 'Lumbar Spine', latinName: 'Columna lumbalis', system: 'musculoskeletal', clinicalSignificance: 'high', fmaId: 'FMA:9921' },
  
  // Pelvis
  { id: 'bladder', name: 'Urinary Bladder', latinName: 'Vesica urinaria', system: 'urinary', clinicalSignificance: 'high', fmaId: 'FMA:15900' },
  { id: 'uterus', name: 'Uterus', system: 'reproductive', clinicalSignificance: 'high', fmaId: 'FMA:17558' },
  { id: 'ovaries', name: 'Ovaries', latinName: 'Ovaria', system: 'reproductive', clinicalSignificance: 'high', fmaId: 'FMA:17559' },
  { id: 'prostate', name: 'Prostate', latinName: 'Prostata', system: 'reproductive', clinicalSignificance: 'high', fmaId: 'FMA:9600' },
  { id: 'testes', name: 'Testes', latinName: 'Testiculi', system: 'reproductive', clinicalSignificance: 'high', fmaId: 'FMA:9610' },
  { id: 'rectum', name: 'Rectum', system: 'digestive', clinicalSignificance: 'high', fmaId: 'FMA:14544' },
  { id: 'sacrum', name: 'Sacrum', system: 'musculoskeletal', clinicalSignificance: 'moderate', fmaId: 'FMA:16203' },
  
  // Upper Limbs
  { id: 'shoulder', name: 'Shoulder', latinName: 'Articulatio humeri', system: 'musculoskeletal', clinicalSignificance: 'moderate', fmaId: 'FMA:35190' },
  { id: 'upper-arm', name: 'Upper Arm', latinName: 'Brachium', system: 'musculoskeletal', clinicalSignificance: 'low', fmaId: 'FMA:24896' },
  { id: 'elbow', name: 'Elbow', latinName: 'Articulatio cubiti', system: 'musculoskeletal', clinicalSignificance: 'moderate', fmaId: 'FMA:35191' },
  { id: 'forearm', name: 'Forearm', latinName: 'Antebrachium', system: 'musculoskeletal', clinicalSignificance: 'low', fmaId: 'FMA:24897' },
  { id: 'wrist', name: 'Wrist', latinName: 'Carpus', system: 'musculoskeletal', clinicalSignificance: 'moderate', fmaId: 'FMA:35192' },
  { id: 'hand', name: 'Hand', latinName: 'Manus', system: 'musculoskeletal', clinicalSignificance: 'high', fmaId: 'FMA:9712' },
  
  // Lower Limbs
  { id: 'hip', name: 'Hip', latinName: 'Articulatio coxae', system: 'musculoskeletal', clinicalSignificance: 'high', fmaId: 'FMA:35193' },
  { id: 'thigh', name: 'Thigh', latinName: 'Femur', system: 'musculoskeletal', clinicalSignificance: 'low', fmaId: 'FMA:24947' },
  { id: 'knee', name: 'Knee', latinName: 'Articulatio genus', system: 'musculoskeletal', clinicalSignificance: 'high', fmaId: 'FMA:35194' },
  { id: 'lower-leg', name: 'Lower Leg', latinName: 'Crus', system: 'musculoskeletal', clinicalSignificance: 'low', fmaId: 'FMA:24948' },
  { id: 'ankle', name: 'Ankle', latinName: 'Articulatio talocruralis', system: 'musculoskeletal', clinicalSignificance: 'moderate', fmaId: 'FMA:35195' },
  { id: 'foot', name: 'Foot', latinName: 'Pes', system: 'musculoskeletal', clinicalSignificance: 'moderate', fmaId: 'FMA:9714' },
];

// Get menu for a region
export function getRegionMenu(region: AnatomicalRegion, patientData?: RegionPatientData): RegionMenuItem[] {
  const config = REGION_MENU_CONFIG[region.system] || REGION_MENU_CONFIG.default;
  const menu: RegionMenuItem[] = [];
  
  // Always show educational content options
  if (config['view-anatomy']) menu.push(config['view-anatomy']);
  if (config['view-histology']) menu.push(config['view-histology']);
  if (config['view-pathology']) menu.push(config['view-pathology']);
  if (config['view-physiology']) menu.push(config['view-physiology']);
  
  // Add clinical exam
  if (config['clinical-exam']) menu.push(config['clinical-exam']);
  
  // Add patient-specific items with badges if data exists
  if (patientData && patientData.conditions && patientData.conditions.length > 0) {
    menu.push({
      ...config['conditions']!,
      badge: {
        count: patientData.conditions.length,
        type: patientData.conditions.some(c => c.severity === 'severe') ? 'critical' : 'info',
      },
    });
  }
  
  if (patientData && patientData.medications && patientData.medications.length > 0) {
    menu.push({
      ...config['medications']!,
      badge: {
        count: patientData.medications.length,
        type: 'info',
      },
    });
  }
  
  if (patientData && patientData.labResults && patientData.labResults.length > 0) {
    const abnormalLabs = patientData.labResults.filter(l => l.status !== 'normal').length;
    menu.push({
      ...config['labs']!,
      badge: {
        count: patientData.labResults.length,
        type: abnormalLabs > 0 ? 'warning' : 'info',
      },
    });
  }
  
  if (patientData && patientData.imaging && patientData.imaging.length > 0) {
    menu.push({
      ...config['imaging']!,
      badge: {
        count: patientData.imaging.length,
        type: 'info',
      },
    });
  }
  
  // Always show AI assistant
  if (config['ask-ai']) menu.push(config['ask-ai']);
  
  return menu;
}

// Find region by ID
export function findRegionById(id: string): AnatomicalRegion | undefined {
  return ANATOMICAL_REGIONS.find(r => r.id === id);
}

// Find regions by system
export function findRegionsBySystem(system: AnatomicalRegion['system']): AnatomicalRegion[] {
  return ANATOMICAL_REGIONS.filter(r => r.system === system);
}

// Search regions by name
export function searchRegions(query: string): AnatomicalRegion[] {
  const q = query.toLowerCase();
  return ANATOMICAL_REGIONS.filter(r => 
    r.name.toLowerCase().includes(q) ||
    r.latinName?.toLowerCase().includes(q) ||
    r.id.toLowerCase().includes(q)
  );
}

// Get related regions (same system)
export function getRelatedRegions(regionId: string): AnatomicalRegion[] {
  const region = findRegionById(regionId);
  if (!region) return [];
  
  return ANATOMICAL_REGIONS.filter(r => 
    r.system === region.system && r.id !== regionId
  );
}

// Export for use in components
// Types already exported as interfaces above
