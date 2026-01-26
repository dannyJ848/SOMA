/**
 * Injectable Non-Insulin Diabetes Medications
 */

import { EducationalContent } from '../../../types';

export const INJECTABLE_NON_INSULIN: EducationalContent = {
  id: 'endocrine-injectable-non-insulin',
  type: 'topic',
  name: 'Injectable Non-Insulin Diabetes Medications',
  alternateNames: ['GLP-1 agonists', 'Incretin-based injectables', 'GIP/GLP-1 agonists'],

  levels: {
    1: { level: 1, summary: 'GLP-1 medications are injections that help control blood sugar and also help with weight loss, without being insulin.', explanation: 'These medications work like natural hormones in your body to lower blood sugar and reduce appetite.', keyTerms: [{ term: 'GLP-1', definition: 'A natural hormone that lowers blood sugar and reduces appetite' }, { term: 'injection', definition: 'Medicine given with a needle under the skin' }] },
    2: { level: 2, summary: 'GLP-1 receptor agonists (semaglutide, liraglutide, dulaglutide) enhance glucose-dependent insulin secretion, suppress glucagon, slow gastric emptying, and reduce appetite.', explanation: 'Weekly formulations improve adherence. Major benefits include weight loss and cardiovascular risk reduction.', keyTerms: [{ term: 'semaglutide', definition: 'GLP-1 agonist available weekly (Ozempic) or for weight loss (Wegovy)' }, { term: 'incretin', definition: 'Gut hormones that enhance insulin response to meals' }] },
    3: { level: 3, summary: 'GLP-1 agonists are preferred in T2DM with ASCVD or high CV risk. Side effects include GI symptoms (nausea, vomiting). Contraindicated in personal/family history of medullary thyroid cancer.', explanation: 'Tirzepatide (dual GIP/GLP-1 agonist) shows superior glucose and weight efficacy. Start low, titrate slowly to minimize GI effects.', keyTerms: [{ term: 'tirzepatide', definition: 'Dual GIP/GLP-1 agonist with highest weight loss and glucose efficacy' }, { term: 'medullary thyroid cancer', definition: 'Rare thyroid cancer; GLP-1 agonists contraindicated if history present' }] },
    4: { level: 4, summary: 'Advanced incretin therapy addresses combination with insulin, managing GI side effects, and emerging indications beyond diabetes (obesity, NASH, heart failure).', explanation: 'Fixed-ratio combinations of basal insulin + GLP-1 simplify regimens. GI side effects often resolve with continued use.', keyTerms: [{ term: 'fixed-ratio combination', definition: 'Basal insulin + GLP-1 agonist in single injection (e.g., iDegLira, iGlarLixi)' }, { term: 'NASH', definition: 'Non-alcoholic steatohepatitis; GLP-1 agonists may provide benefit' }] },
    5: { level: 5, summary: 'Contemporary incretin therapeutics expand with triple agonists (GIP/GLP-1/glucagon), oral formulations, and broadening cardiometabolic indications.', explanation: 'Retatrutide (triple agonist) shows unprecedented weight loss. GLP-1 agonists are transforming obesity medicine.', keyTerms: [{ term: 'retatrutide', definition: 'Triple agonist (GIP/GLP-1/glucagon) in development with ~25% weight loss' }], clinicalNotes: 'GLP-1 agonists have become cornerstone therapy for T2DM and obesity.' },
  },

  media: [],
  citations: [{ id: 'nauck-glp1-2021', type: 'article', title: 'GLP-1 Receptor Agonists Review', authors: ['Nauck MA', 'Meier JJ'], source: 'Lancet 2021', license: 'Copyrighted' }],
  crossReferences: [{ targetId: 'endocrine-diabetes-type2', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' }, { targetId: 'endocrine-obesity', targetType: 'condition', relationship: 'related', label: 'Obesity' }],
  tags: { systems: ['endocrine'], topics: ['diabetes', 'pharmacology', 'obesity'], keywords: ['GLP-1 agonist', 'semaglutide', 'tirzepatide', 'incretin'] },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
