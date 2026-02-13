/**
 * Oral Diabetes Medications
 */

import { EducationalContent } from '../../../types';

export const ORAL_DIABETES_MEDICATIONS: EducationalContent = {
  id: 'endocrine-oral-diabetes-meds',
  type: 'topic',
  name: 'Oral Diabetes Medications',
  alternateNames: ['Oral antidiabetic drugs', 'Oral hypoglycemic agents'],

  levels: {
    1: { level: 1, summary: 'There are several types of pills to treat type 2 diabetes, each working differently to lower blood sugar.', explanation: 'Metformin is usually the first choice. Other pills work by increasing insulin, helping the body use insulin better, or removing sugar through urine.', keyTerms: [{ term: 'metformin', definition: 'Most common diabetes pill; helps the body use insulin better' }, { term: 'blood sugar', definition: 'The amount of glucose in your blood' }] },
    2: { level: 2, summary: 'Oral diabetes agents include metformin (first-line), sulfonylureas, DPP-4 inhibitors, SGLT2 inhibitors, and thiazolidinediones, each with distinct mechanisms.', explanation: 'SGLT2 inhibitors and GLP-1 agonists have proven cardiovascular and renal benefits beyond glucose lowering.', keyTerms: [{ term: 'SGLT2 inhibitor', definition: 'Medication causing glucose excretion in urine; provides heart and kidney protection' }, { term: 'sulfonylurea', definition: 'Medication stimulating insulin release from pancreas' }] },
    3: { level: 3, summary: 'Diabetes medication selection considers HbA1c target, comorbidities (ASCVD, HF, CKD), hypoglycemia risk, weight effects, and cost.', explanation: 'ADA/EASD guidelines prioritize SGLT2 inhibitors or GLP-1 agonists in patients with cardiovascular or renal disease.', keyTerms: [{ term: 'DPP-4 inhibitor', definition: 'Medication enhancing incretin hormones; weight-neutral, low hypoglycemia risk' }, { term: 'thiazolidinedione', definition: 'Insulin sensitizer; pioglitazone reduces CV events but causes fluid retention' }] },
    4: { level: 4, summary: 'Advanced diabetes pharmacotherapy addresses combination therapy, medication titration protocols, and management of side effects.', explanation: 'Fixed-dose combinations improve adherence. Metformin GI effects may be mitigated by extended-release or dose titration.', keyTerms: [{ term: 'fixed-dose combination', definition: 'Two medications in one pill to reduce pill burden' }, { term: 'lactic acidosis', definition: 'Rare but serious metformin complication; avoid in severe renal/hepatic disease' }] },
    5: { level: 5, summary: 'Contemporary diabetes pharmacology emphasizes cardiorenal protection, individualized therapy, and emerging oral agents targeting multiple pathways.', explanation: 'Oral GLP-1 agonists (semaglutide) expand options. Triple agonists and novel mechanisms are in development.', keyTerms: [{ term: 'oral semaglutide', definition: 'First oral GLP-1 agonist; requires specific administration timing' }], clinicalNotes: 'The paradigm has shifted from glucose-centric to cardio-renal-metabolic protection.' },
  },

  media: [],
  citations: [{ id: 'ada-easd-2022', type: 'article', title: 'ADA/EASD Consensus Report', authors: ['Davies MJ'], source: 'Diabetes Care 2022', license: 'Copyrighted' }],
  crossReferences: [{ targetId: 'endocrine-diabetes-type2', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' }],
  tags: { systems: ['endocrine'], topics: ['diabetes', 'pharmacology'], keywords: ['metformin', 'SGLT2 inhibitor', 'sulfonylurea', 'DPP-4 inhibitor'] },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
