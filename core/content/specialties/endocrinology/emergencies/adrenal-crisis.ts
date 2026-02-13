/**
 * Adrenal Crisis
 */

import { EducationalContent } from '../../../types';

export const ADRENAL_CRISIS: EducationalContent = {
  id: 'endocrine-adrenal-crisis',
  type: 'condition',
  name: 'Adrenal Crisis',
  alternateNames: ['Acute adrenal insufficiency', 'Addisonian crisis'],

  levels: {
    1: { level: 1, summary: 'Adrenal crisis is a life-threatening emergency when the body suddenly does not have enough cortisol, causing severe weakness, low blood pressure, and shock.', explanation: 'It happens in people with adrenal insufficiency who face stress like illness without increasing their medication.', keyTerms: [{ term: 'cortisol', definition: 'Stress hormone made by adrenal glands' }, { term: 'adrenal insufficiency', definition: 'Condition where adrenal glands do not make enough hormones' }] },
    2: { level: 2, summary: 'Adrenal crisis presents with hypotension refractory to fluids, nausea/vomiting, altered consciousness, and electrolyte abnormalities (hyponatremia, hyperkalemia).', explanation: 'Precipitants include infection, surgery, trauma, or stopping steroids. Treatment is immediate IV hydrocortisone and fluids.', keyTerms: [{ term: 'hydrocortisone', definition: 'Glucocorticoid given IV in adrenal crisis; provides cortisol replacement' }, { term: 'stress dosing', definition: 'Increasing glucocorticoid dose during physiological stress' }] },
    3: { level: 3, summary: 'Adrenal crisis treatment: hydrocortisone 100mg IV bolus, then 50-100mg q6-8h (or continuous infusion), NS resuscitation, dextrose if hypoglycemic, identify precipitant.', explanation: 'Do not wait for confirmatory labs if clinically suspected. High-dose hydrocortisone provides mineralocorticoid activity.', keyTerms: [{ term: 'refractory hypotension', definition: 'Low blood pressure not responding to IV fluids' }, { term: 'precipitating factor', definition: 'Trigger causing the crisis; often infection' }] },
    4: { level: 4, summary: 'Advanced adrenal crisis management addresses prevention through patient education, emergency protocols, and recognition in undiagnosed patients presenting with shock.', explanation: 'Emergency injection kits (hydrocortisone IM/SC) for home use. Medical alert identification is essential.', keyTerms: [{ term: 'emergency injection', definition: 'Hydrocortisone for self/family administration during emergencies' }, { term: 'sick day rules', definition: 'Instructions for increasing steroids during illness' }] },
    5: { level: 5, summary: 'Contemporary adrenal crisis prevention focuses on education, emergency preparedness, and healthcare provider awareness to reduce the 5-10% mortality.', explanation: 'Many crises are preventable with proper patient education and timely stress dosing.', keyTerms: [{ term: 'steroid card', definition: 'Card indicating patient is on steroids and may need emergency treatment' }], clinicalNotes: 'Adrenal crisis mortality is preventable; education and emergency preparedness are key.' },
  },

  media: [],
  citations: [{ id: 'puar-adrenal-2016', type: 'article', title: 'Adrenal Crisis Guidelines', authors: ['Puar TH'], source: 'Lancet Diabetes Endocrinol 2016', license: 'Copyrighted' }],
  crossReferences: [{ targetId: 'endocrine-addisons-disease', targetType: 'condition', relationship: 'related', label: "Addison's Disease" }],
  tags: { systems: ['endocrine'], topics: ['adrenal', 'emergency'], keywords: ['adrenal crisis', 'cortisol', 'hypotension', 'hydrocortisone'] },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
