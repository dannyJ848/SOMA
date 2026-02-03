/**
 * Insulin Types
 */

import { EducationalContent } from '../../../types';

export const INSULIN_TYPES: EducationalContent = {
  id: 'endocrine-insulin-types',
  type: 'topic',
  name: 'Insulin Types and Formulations',
  alternateNames: ['Insulin preparations', 'Insulin pharmacology'],

  levels: {
    1: { level: 1, summary: 'There are different types of insulin that work at different speeds - some act quickly for meals and some work slowly to provide background coverage.', explanation: 'Fast-acting insulin is taken before meals. Long-acting insulin works all day and night to keep blood sugar stable.', keyTerms: [{ term: 'rapid-acting insulin', definition: 'Insulin that works quickly for meals; taken right before eating' }, { term: 'long-acting insulin', definition: 'Insulin that works slowly over a full day' }] },
    2: { level: 2, summary: 'Insulins are classified by onset, peak, and duration: rapid-acting (lispro, aspart, glulisine), short-acting (regular), intermediate (NPH), and long-acting (glargine, detemir, degludec).', explanation: 'Basal-bolus regimens combine long-acting (basal) with rapid-acting (bolus). Premixed insulins combine both in one injection.', keyTerms: [{ term: 'basal-bolus', definition: 'Insulin regimen using long-acting plus mealtime rapid-acting insulin' }, { term: 'analog insulin', definition: 'Genetically modified insulin with improved pharmacokinetics' }] },
    3: { level: 3, summary: 'Insulin pharmacokinetics guide selection: ultra-rapid onset in 5-15 min (faster aspart, lispro-aabc), basal analogs with flat profiles minimize hypoglycemia.', explanation: 'Concentrated insulins (U-200, U-300, U-500) allow smaller injection volumes. Biosimilar insulins offer cost alternatives.', keyTerms: [{ term: 'U-100', definition: '100 units/mL; standard insulin concentration' }, { term: 'biosimilar', definition: 'Follow-on biological product similar to reference insulin' }] },
    4: { level: 4, summary: 'Advanced insulin therapy includes pump-compatible insulins, inhaled insulin, and understanding of immunogenicity and antibody formation.', explanation: 'Only rapid-acting analogs are used in pumps. Inhaled insulin (Afrezza) provides ultra-rapid kinetics for meals.', keyTerms: [{ term: 'inhaled insulin', definition: 'Afrezza; ultra-rapid human insulin powder for inhalation' }, { term: 'insulin antibodies', definition: 'Immune response to insulin; may affect action and cause reactions' }] },
    5: { level: 5, summary: 'Contemporary insulin development includes weekly basal insulins, smart insulins responsive to glucose, and oral insulin formulations.', explanation: 'Once-weekly basal insulins (icodec) may improve adherence. Glucose-responsive insulins remain investigational.', keyTerms: [{ term: 'icodec', definition: 'Once-weekly basal insulin analog in development/approval' }], clinicalNotes: 'Insulin therapy must be individualized; no one regimen fits all patients.' },
  },

  media: [],
  citations: [{ id: 'ada-insulin-2023', type: 'article', title: 'Standards of Care - Pharmacologic Approaches', authors: ['ADA'], source: 'Diabetes Care 2023', license: 'Copyrighted' }],
  crossReferences: [{ targetId: 'endocrine-diabetes-type1', targetType: 'condition', relationship: 'related', label: 'Type 1 Diabetes' }, { targetId: 'endocrine-diabetes-type2', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' }],
  tags: { systems: ['endocrine'], topics: ['diabetes', 'pharmacology'], keywords: ['insulin', 'basal', 'bolus', 'rapid-acting', 'long-acting'] },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
