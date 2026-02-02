/**
 * Digestive System Anatomy Educational Content
 *
 * Comprehensive JSON content covering:
 * - Oral Cavity and Pharynx
 * - Esophagus
 * - Stomach
 * - Small Intestine
 * - Large Intestine
 * - Liver
 * - Gallbladder and Biliary System
 * - Pancreas
 * - Peritoneum and Mesentery
 */

import { EducationalContent } from '../../types';

// JSON content imports
import oralCavityData from './oral-cavity.json';
import esophagusData from './esophagus.json';
import stomachData from './stomach.json';
import smallIntestineData from './small-intestine.json';
import largeIntestineData from './large-intestine.json';
import liverData from './liver.json';
import gallbladderBiliaryData from './gallbladder-biliary.json';
import pancreasData from './pancreas.json';
import peritoneumMesenteryData from './peritoneum-mesentery.json';

// Type-safe content exports
export const oralCavity = oralCavityData as EducationalContent;
export const esophagus = esophagusData as EducationalContent;
export const stomach = stomachData as EducationalContent;
export const smallIntestine = smallIntestineData as EducationalContent;
export const largeIntestine = largeIntestineData as EducationalContent;
export const liver = liverData as EducationalContent;
export const gallbladderBiliary = gallbladderBiliaryData as EducationalContent;
export const pancreas = pancreasData as EducationalContent;
export const peritoneumMesentery = peritoneumMesenteryData as EducationalContent;

// Content metadata for discovery
export const digestiveAnatomyContent = {
  id: 'digestive-anatomy',
  name: 'Digestive System Anatomy',
  description: 'Comprehensive educational content covering all major structures of the digestive system from oral cavity to rectum.',
  topics: [
    { id: 'oral-cavity', name: 'Oral Cavity', format: 'json' },
    { id: 'esophagus', name: 'Esophagus', format: 'json' },
    { id: 'stomach', name: 'Stomach', format: 'json' },
    { id: 'small-intestine', name: 'Small Intestine', format: 'json' },
    { id: 'large-intestine', name: 'Large Intestine', format: 'json' },
    { id: 'liver', name: 'Liver', format: 'json' },
    { id: 'gallbladder-biliary', name: 'Gallbladder and Biliary System', format: 'json' },
    { id: 'pancreas', name: 'Pancreas', format: 'json' },
    { id: 'peritoneum-mesentery', name: 'Peritoneum and Mesentery', format: 'json' },
  ],
};

// Default export object
export default {
  oralCavity,
  esophagus,
  stomach,
  smallIntestine,
  largeIntestine,
  liver,
  gallbladderBiliary,
  pancreas,
  peritoneumMesentery,
  metadata: digestiveAnatomyContent,
};
