/**
 * Thyroid Hormone Replacement
 */

import { EducationalContent } from '../../../types';

export const THYROID_REPLACEMENT: EducationalContent = {
  id: 'endocrine-thyroid-replacement',
  type: 'topic',
  name: 'Thyroid Hormone Replacement',
  alternateNames: ['Levothyroxine therapy', 'Thyroid hormone therapy', 'T4 replacement'],

  levels: {
    1: { level: 1, summary: 'When the thyroid gland does not make enough hormone, a daily pill called levothyroxine replaces it to keep your body running normally.', explanation: 'Levothyroxine is identical to the hormone your thyroid normally makes. Taking it every day prevents symptoms of low thyroid.', keyTerms: [{ term: 'levothyroxine', definition: 'A medicine that replaces thyroid hormone' }, { term: 'thyroid hormone', definition: 'Hormone that controls metabolism and energy' }] },
    2: { level: 2, summary: 'Levothyroxine is the standard treatment for hypothyroidism. Dose is adjusted based on TSH levels. Consistent timing and avoiding interactions optimize absorption.', explanation: 'T4 is converted to active T3 in tissues. Most patients do well on T4 monotherapy. TSH targets vary by age and condition.', keyTerms: [{ term: 'TSH', definition: 'Thyroid stimulating hormone; used to monitor replacement therapy' }, { term: 'absorption', definition: 'How well the medication gets into your bloodstream' }] },
    3: { level: 3, summary: 'Levothyroxine pharmacokinetics involve slow absorption and long half-life allowing once-daily dosing. Drug interactions and formulation switches require attention.', explanation: 'Absorption is affected by calcium, iron, PPIs, and food. Generic and brand products may not be perfectly interchangeable.', keyTerms: [{ term: 'bioequivalence', definition: 'How similarly different formulations are absorbed and act' }, { term: 'half-life', definition: 'Time for drug level to decrease by half; ~7 days for T4' }] },
    4: { level: 4, summary: 'Advanced thyroid replacement addresses T4/T3 combination therapy, special populations (pregnancy, elderly, cardiac disease), and residual symptoms despite optimal TSH.', explanation: 'T3 addition remains controversial; most guidelines do not routinely recommend it. Genetic variants may affect conversion.', keyTerms: [{ term: 'liothyronine', definition: 'Synthetic T3 hormone; sometimes used in combination with T4' }, { term: 'DIO2', definition: 'Deiodinase enzyme converting T4 to T3; genetic variants may affect response' }] },
    5: { level: 5, summary: 'Contemporary thyroid replacement therapy addresses the subset of patients with persistent symptoms, precision dosing strategies, and quality of life optimization.', explanation: 'Research explores sustained-release T3, personalized targets, and understanding of residual symptom burden.', keyTerms: [{ term: 'euthyroid', definition: 'Normal thyroid function; goal of replacement therapy' }], clinicalNotes: 'A minority of treated hypothyroid patients report persistent symptoms despite optimal TSH; cause is unclear.' },
  },

  media: [],
  citations: [{ id: 'jonklaas-hypo-2014', type: 'article', title: 'Hypothyroidism Treatment Guidelines', authors: ['Jonklaas J'], source: 'Thyroid 2014', license: 'Copyrighted' }],
  crossReferences: [{ targetId: 'endocrine-hypothyroidism', targetType: 'condition', relationship: 'see-also', label: 'Hypothyroidism' }],
  tags: { systems: ['endocrine'], topics: ['thyroid', 'hormone replacement'], keywords: ['levothyroxine', 'thyroid replacement', 'hypothyroidism treatment'] },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
