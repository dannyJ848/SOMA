/**
 * Hyperosmolar Hyperglycemic State (HHS)
 */

import { EducationalContent } from '../../../types';

export const HYPEROSMOLAR_STATE: EducationalContent = {
  id: 'endocrine-hhs',
  type: 'condition',
  name: 'Hyperosmolar Hyperglycemic State',
  alternateNames: ['HHS', 'HONK', 'Hyperosmolar nonketotic state', 'Hyperosmolar coma'],

  levels: {
    1: { level: 1, summary: 'HHS is a severe diabetes emergency with extremely high blood sugar and dehydration, usually in older adults with type 2 diabetes.', explanation: 'Blood sugar can rise above 600 mg/dL. The severe dehydration can cause confusion, drowsiness, or even coma.', keyTerms: [{ term: 'dehydration', definition: 'Losing too much body water' }, { term: 'blood sugar', definition: 'Amount of glucose in the blood' }] },
    2: { level: 2, summary: 'HHS is defined by glucose >600 mg/dL, osmolality >320 mOsm/kg, and minimal ketosis. It has higher mortality than DKA and requires aggressive fluid resuscitation.', explanation: 'Enough insulin remains to prevent ketosis but not hyperglycemia. Precipitants include infection, MI, and poor access to fluids.', keyTerms: [{ term: 'osmolality', definition: 'Measure of blood concentration; very high in HHS' }, { term: 'mental status changes', definition: 'Confusion or decreased consciousness from severe hyperosmolarity' }] },
    3: { level: 3, summary: 'HHS treatment prioritizes fluid resuscitation (5-10 L deficit typical). Insulin rate is lower than DKA. Gradual glucose reduction prevents cerebral edema.', explanation: 'Initial fluid: 1-1.5L NS first hour. Switch to 0.45% NS when corrected Na normalizes. Avoid rapid osmolality correction.', keyTerms: [{ term: 'corrected sodium', definition: 'Adjusted sodium accounting for hyperglycemia' }, { term: 'effective osmolality', definition: '2×Na + glucose/18; measure of tonicity' }] },
    4: { level: 4, summary: 'Advanced HHS management addresses mixed DKA-HHS states, thromboprophylaxis given high clot risk, and underlying precipitant identification.', explanation: 'HHS has 5-20% mortality, often from underlying illness. Thromboembolism prophylaxis is standard. Na may rise as glucose falls.', keyTerms: [{ term: 'mixed DKA-HHS', definition: 'Overlapping features of both conditions; treat as DKA with aggressive fluids' }, { term: 'thromboprophylaxis', definition: 'Blood clot prevention measures' }] },
    5: { level: 5, summary: 'Contemporary HHS research explores optimal fluid regimens, prediction of neurological complications, and prevention through early intervention.', explanation: 'Some advocate for balanced crystalloids. Transition planning is crucial to prevent recurrence.', keyTerms: [{ term: 'balanced crystalloid', definition: 'IV fluid more similar to plasma composition than normal saline' }], clinicalNotes: 'HHS mortality exceeds DKA; vigilance for underlying illness is essential.' },
  },

  media: [],
  citations: [{ id: 'kitabchi-hhs-2009', type: 'article', title: 'Hyperglycemic Crises Guidelines', authors: ['Kitabchi AE'], source: 'Diabetes Care 2009', license: 'Copyrighted' }],
  crossReferences: [{ targetId: 'endocrine-diabetes-type2', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' }, { targetId: 'endocrine-dka', targetType: 'condition', relationship: 'related', label: 'DKA' }],
  tags: { systems: ['endocrine'], topics: ['diabetes', 'emergency'], keywords: ['HHS', 'hyperosmolar', 'hyperglycemia', 'dehydration'] },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
