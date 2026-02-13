/**
 * Myxedema Coma
 */

import { EducationalContent } from '../../../types';

export const MYXEDEMA_COMA: EducationalContent = {
  id: 'endocrine-myxedema-coma',
  type: 'condition',
  name: 'Myxedema Coma',
  alternateNames: ['Myxedema crisis', 'Severe hypothyroidism'],

  levels: {
    1: { level: 1, summary: 'Myxedema coma is a rare, life-threatening emergency when severely low thyroid hormone causes low body temperature, confusion, and slowed body functions.', explanation: 'It usually happens in elderly people with untreated hypothyroidism, often triggered by cold weather or infection.', keyTerms: [{ term: 'hypothyroidism', definition: 'Underactive thyroid not making enough hormone' }, { term: 'myxedema', definition: 'Severe form of hypothyroidism with swelling and organ dysfunction' }] },
    2: { level: 2, summary: 'Myxedema coma presents with hypothermia, altered mental status, bradycardia, and hyponatremia. Precipitants include infection, cold exposure, and sedatives.', explanation: 'Despite the name, coma is not always present. Treatment requires IV thyroid hormone and glucocorticoids.', keyTerms: [{ term: 'hypothermia', definition: 'Dangerously low body temperature' }, { term: 'hyponatremia', definition: 'Low sodium in the blood; common in myxedema' }] },
    3: { level: 3, summary: 'Myxedema coma treatment: IV levothyroxine loading (200-500 μg) or T3 (5-20 μg), glucocorticoids (stress dosing), supportive care, and treating precipitant.', explanation: 'Debate exists on T4 vs T3 vs combination. Warm passively; active warming may cause vasodilation and shock.', keyTerms: [{ term: 'loading dose', definition: 'Large initial dose to rapidly achieve therapeutic levels' }, { term: 'passive rewarming', definition: 'Gradual warming with blankets rather than active heating' }] },
    4: { level: 4, summary: 'Advanced myxedema coma management addresses CO2 retention requiring ventilation, cardiovascular collapse, and cortisol replacement to prevent adrenal crisis.', explanation: 'Always give glucocorticoids before or with thyroid hormone to prevent precipitating adrenal crisis.', keyTerms: [{ term: 'respiratory failure', definition: 'Inability to adequately breathe; common in myxedema coma' }, { term: 'pericardial effusion', definition: 'Fluid around heart; can occur in severe hypothyroidism' }] },
    5: { level: 5, summary: 'Contemporary myxedema coma care emphasizes early recognition, ICU management, and high mortality (30-60%) despite treatment.', explanation: 'Optimal thyroid hormone replacement regimen remains debated. Prevention through adequate hypothyroidism treatment is paramount.', keyTerms: [{ term: 'GCS', definition: 'Glasgow Coma Scale; assesses consciousness level' }], clinicalNotes: 'Mortality remains high; early aggressive treatment and ICU care are essential.' },
  },

  media: [],
  citations: [{ id: 'mathew-myxedema-2011', type: 'article', title: 'Myxedema Coma Review', authors: ['Mathew V'], source: 'J Intensive Care Med 2011', license: 'Copyrighted' }],
  crossReferences: [{ targetId: 'endocrine-hypothyroidism', targetType: 'condition', relationship: 'related', label: 'Hypothyroidism' }],
  tags: { systems: ['endocrine'], topics: ['thyroid', 'emergency'], keywords: ['myxedema coma', 'hypothyroidism crisis', 'hypothermia'] },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
