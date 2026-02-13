/**
 * Hypoglycemia
 */

import { EducationalContent } from '../../../types';

export const HYPOGLYCEMIA: EducationalContent = {
  id: 'endocrine-hypoglycemia',
  type: 'condition',
  name: 'Hypoglycemia',
  alternateNames: ['Low blood sugar', 'Insulin reaction'],

  levels: {
    1: { level: 1, summary: 'Hypoglycemia is when blood sugar drops too low, causing shaking, sweating, confusion, and if severe, loss of consciousness.', explanation: 'It commonly happens in people with diabetes who take insulin or certain pills. Eating or drinking sugar usually fixes it quickly.', keyTerms: [{ term: 'blood sugar', definition: 'Amount of glucose in your blood; your body uses it for energy' }, { term: 'glucose', definition: 'A type of sugar that is your body\'s main source of energy' }] },
    2: { level: 2, summary: 'Hypoglycemia is defined as glucose <70 mg/dL with symptoms. Whipple\'s triad (symptoms + low glucose + resolution with treatment) confirms diagnosis. Causes differ in diabetic vs non-diabetic patients.', explanation: 'In diabetes, causes include excess insulin, missed meals, and exercise. In non-diabetics, investigate for insulinoma, adrenal insufficiency, or medication effects.', keyTerms: [{ term: 'Whipple\'s triad', definition: 'Low glucose + symptoms + resolution with glucose = hypoglycemia' }, { term: 'glucagon', definition: 'Hormone that raises blood sugar; available as emergency injection' }] },
    3: { level: 3, summary: 'Hypoglycemia classification: Level 1 (<70 mg/dL), Level 2 (<54 mg/dL), Level 3 (severe, requiring assistance). Treatment: 15g fast carbs, recheck in 15 min (rule of 15).', explanation: 'Severe hypoglycemia requires glucagon or IV dextrose. Hypoglycemia unawareness increases severe event risk.', keyTerms: [{ term: 'hypoglycemia unawareness', definition: 'Loss of warning symptoms of low blood sugar due to recurrent episodes' }, { term: 'rule of 15', definition: 'Treat with 15g glucose, wait 15 minutes, recheck' }] },
    4: { level: 4, summary: 'Advanced hypoglycemia management addresses CGM for detection, structured education for awareness reversal, and evaluation of non-diabetic hypoglycemia with 72-hour fast.', explanation: 'Insulinoma diagnosis: Low glucose with inappropriately high insulin, C-peptide, proinsulin. Factitious hypoglycemia requires sulfonylurea screen.', keyTerms: [{ term: 'insulinoma', definition: 'Rare insulin-secreting tumor causing fasting hypoglycemia' }, { term: '72-hour fast', definition: 'Diagnostic test for insulinoma; monitors for hypoglycemia during supervised fasting' }] },
    5: { level: 5, summary: 'Contemporary hypoglycemia research explores automated insulin delivery to prevent lows, novel glucagon formulations, and understanding the cardiovascular impact of severe events.', explanation: 'Ready-to-use glucagon (nasal, auto-injector) improves emergency response. Closed-loop systems dramatically reduce hypoglycemia.', keyTerms: [{ term: 'nasal glucagon', definition: 'Glucagon administered as nasal spray; no reconstitution needed' }], clinicalNotes: 'Severe hypoglycemia is associated with increased mortality risk and cognitive decline.' },
  },

  media: [],
  citations: [{ id: 'ada-hypoglycemia-2022', type: 'article', title: 'Hypoglycemia Standards', authors: ['ADA'], source: 'Diabetes Care 2022', license: 'Copyrighted' }],
  crossReferences: [{ targetId: 'endocrine-diabetes-type1', targetType: 'condition', relationship: 'related', label: 'Type 1 Diabetes' }, { targetId: 'endocrine-insulinoma', targetType: 'condition', relationship: 'see-also', label: 'Insulinoma' }],
  tags: { systems: ['endocrine'], topics: ['diabetes', 'emergency'], keywords: ['hypoglycemia', 'low blood sugar', 'glucagon', 'insulin'] },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
