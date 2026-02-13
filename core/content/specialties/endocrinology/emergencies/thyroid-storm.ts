/**
 * Thyroid Storm
 */

import { EducationalContent } from '../../../types';

export const THYROID_STORM: EducationalContent = {
  id: 'endocrine-thyroid-storm',
  type: 'condition',
  name: 'Thyroid Storm',
  alternateNames: ['Thyrotoxic crisis', 'Thyroid crisis'],

  levels: {
    1: { level: 1, summary: 'Thyroid storm is a rare but life-threatening emergency when thyroid hormone levels become dangerously high, causing fever, fast heart rate, and confusion.', explanation: 'It usually happens in people with untreated or uncontrolled hyperthyroidism triggered by stress like infection or surgery.', keyTerms: [{ term: 'hyperthyroidism', definition: 'Overactive thyroid making too much hormone' }, { term: 'thyroid storm', definition: 'Severe, life-threatening form of hyperthyroidism' }] },
    2: { level: 2, summary: 'Thyroid storm is a clinical diagnosis based on Burch-Wartofsky score. Features include fever >104°F, tachycardia >140, altered mental status, and GI/hepatic dysfunction.', explanation: 'Treatment includes thionamides (block synthesis), iodine (block release), beta-blockers, and glucocorticoids. ICU care is essential.', keyTerms: [{ term: 'Burch-Wartofsky score', definition: 'Scoring system for diagnosing thyroid storm severity' }, { term: 'thionamide', definition: 'Antithyroid drugs (PTU, methimazole) that block hormone synthesis' }] },
    3: { level: 3, summary: 'Thyroid storm treatment follows specific sequence: PTU first (also blocks T4→T3), iodine 1 hour later, propranolol, hydrocortisone, cooling, and supportive care.', explanation: 'PTU before iodine prevents using iodine for hormone synthesis. Mortality is 10-30% even with treatment.', keyTerms: [{ term: 'iodine', definition: 'Blocks thyroid hormone release; given after thionamides' }, { term: 'Lugol solution', definition: 'Iodine-containing solution used in thyroid storm' }] },
    4: { level: 4, summary: 'Advanced thyroid storm management includes plasmapheresis for refractory cases, emergency thyroidectomy, and recognition of triggers requiring concurrent treatment.', explanation: 'Cholestyramine can help remove circulating hormone. Digoxin requires higher doses due to increased clearance.', keyTerms: [{ term: 'plasmapheresis', definition: 'Procedure removing circulating thyroid hormone from blood' }, { term: 'apathetic thyrotoxicosis', definition: 'Elderly presentation with lethargy rather than hyperactivity' }] },
    5: { level: 5, summary: 'Contemporary thyroid storm care emphasizes early recognition, standardized protocols, and addressing high mortality through ICU collaboration.', explanation: 'Modern scoring systems help identify cases early. Prevention through adequate hyperthyroidism treatment is key.', keyTerms: [{ term: 'Japan Thyroid Association criteria', definition: 'Alternative diagnostic criteria for thyroid storm' }], clinicalNotes: 'Thyroid storm is clinical; do not wait for labs to initiate treatment if clinically suspected.' },
  },

  media: [],
  citations: [{ id: 'burch-storm-1993', type: 'article', title: 'Thyroid Storm Scoring', authors: ['Burch HB', 'Wartofsky L'], source: 'Endocrinol Metab Clin 1993', license: 'Copyrighted' }],
  crossReferences: [{ targetId: 'endocrine-hyperthyroidism', targetType: 'condition', relationship: 'related', label: 'Hyperthyroidism' }],
  tags: { systems: ['endocrine'], topics: ['thyroid', 'emergency'], keywords: ['thyroid storm', 'thyrotoxicosis', 'hyperthyroidism crisis'] },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
