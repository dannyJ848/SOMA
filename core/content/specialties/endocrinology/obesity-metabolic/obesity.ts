/**
 * Obesity
 */

import { EducationalContent } from '../../../types';

export const OBESITY: EducationalContent = {
  id: 'endocrine-obesity',
  type: 'condition',
  name: 'Obesity',
  alternateNames: ['Adiposity', 'Overweight'],

  levels: {
    1: { level: 1, summary: 'Obesity is having too much body fat, which increases the risk of health problems like diabetes, heart disease, and joint pain.', explanation: 'Obesity happens when you take in more calories than your body uses over time. It is measured by BMI.', keyTerms: [{ term: 'BMI', definition: 'Body Mass Index; a measure of body fat based on height and weight' }] },
    2: { level: 2, summary: 'Obesity is defined as BMI ≥30 kg/m². It is associated with type 2 diabetes, cardiovascular disease, sleep apnea, and certain cancers. Treatment includes lifestyle modification, medications, and bariatric surgery.', explanation: 'Obesity involves complex interactions between genetics, environment, and behavior. Central adiposity is particularly harmful.', keyTerms: [{ term: 'waist circumference', definition: 'Measure of abdominal obesity; >40" men, >35" women increases risk' }, { term: 'comorbidity', definition: 'Additional medical conditions occurring with obesity' }] },
    3: { level: 3, summary: 'Obesity management follows a tiered approach: lifestyle intervention for all, pharmacotherapy for BMI ≥30 (or ≥27 with comorbidities), and surgery for BMI ≥40 (or ≥35 with comorbidities).', explanation: 'FDA-approved medications include semaglutide, tirzepatide, phentermine-topiramate, and others. Each has distinct mechanisms and efficacy.', keyTerms: [{ term: 'GLP-1 agonist', definition: 'Medication class causing weight loss through appetite reduction and metabolic effects' }, { term: 'bariatric surgery', definition: 'Surgical weight loss procedures including gastric bypass and sleeve gastrectomy' }] },
    4: { level: 4, summary: 'Advanced obesity care integrates pharmacological combinations, metabolic surgery selection, and management of weight regain. Nutritional deficiencies and psychological factors require attention.', explanation: 'Dual agonists (GIP/GLP-1) show superior weight loss. Post-bariatric care includes lifelong supplementation and monitoring.', keyTerms: [{ term: 'tirzepatide', definition: 'Dual GIP/GLP-1 agonist with highest weight loss efficacy' }, { term: 'Roux-en-Y', definition: 'Type of gastric bypass surgery rerouting small intestine' }] },
    5: { level: 5, summary: 'Contemporary obesity medicine recognizes obesity as a chronic disease requiring long-term treatment. Emerging therapies target multiple hormonal pathways for enhanced efficacy.', explanation: 'Triple agonists and other novel agents are in development. Precision approaches may match patients to optimal interventions.', keyTerms: [{ term: 'adiposopathy', definition: 'Sick fat disease; dysfunctional adipose tissue causing metabolic complications' }], clinicalNotes: 'Weight regain after medication discontinuation supports the chronic disease model of obesity.' },
  },

  media: [],
  citations: [{ id: 'garvey-obesity-2016', type: 'article', title: 'AACE Obesity Guidelines', authors: ['Garvey WT'], source: 'Endocr Pract 2016', license: 'Copyrighted' }],
  crossReferences: [{ targetId: 'endocrine-metabolic-syndrome', targetType: 'condition', relationship: 'related', label: 'Metabolic Syndrome' }],
  tags: { systems: ['endocrine', 'cardiovascular'], topics: ['obesity', 'metabolism'], keywords: ['obesity', 'BMI', 'weight loss', 'bariatric surgery'] },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
