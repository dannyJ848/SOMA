/**
 * Diabetic Ketoacidosis (DKA)
 */

import { EducationalContent } from '../../../types';

export const DIABETIC_KETOACIDOSIS: EducationalContent = {
  id: 'endocrine-dka',
  type: 'condition',
  name: 'Diabetic Ketoacidosis',
  alternateNames: ['DKA', 'Diabetic acidosis'],

  levels: {
    1: { level: 1, summary: 'DKA is a serious diabetes emergency where blood sugar is very high and the body makes toxic acids called ketones, requiring hospital treatment.', explanation: 'Without enough insulin, the body cannot use sugar for energy and starts breaking down fat, producing ketones that make the blood acidic.', keyTerms: [{ term: 'ketones', definition: 'Acids made when the body burns fat for energy instead of sugar' }, { term: 'insulin', definition: 'Hormone that helps sugar enter cells for energy' }] },
    2: { level: 2, summary: 'DKA is characterized by hyperglycemia (>250 mg/dL), ketosis, and metabolic acidosis (pH <7.3, bicarbonate <18). Treatment involves IV fluids, insulin, and electrolyte replacement.', explanation: 'DKA occurs in type 1 diabetes (absolute insulin deficiency) or type 2 with severe stress. Common precipitants include infection and missed insulin.', keyTerms: [{ term: 'anion gap', definition: 'Calculated difference in electrolytes; elevated in DKA due to ketoacids' }, { term: 'metabolic acidosis', definition: 'Low blood pH due to acid accumulation' }] },
    3: { level: 3, summary: 'DKA management follows protocols: NS resuscitation, regular insulin infusion at 0.1 U/kg/hr, potassium replacement when K<5.2, and transition to SQ insulin when gap closes.', explanation: 'Cerebral edema risk exists in children. Resolution criteria include pH>7.3, bicarbonate>18, anion gap<12.', keyTerms: [{ term: 'insulin infusion', definition: 'Continuous IV insulin delivery to correct DKA' }, { term: 'resolution criteria', definition: 'Markers indicating DKA has resolved and transition is safe' }] },
    4: { level: 4, summary: 'Advanced DKA management addresses euglycemic DKA (SGLT2 inhibitor-associated), recurrent DKA, and prevention strategies. Transition protocols minimize recurrence.', explanation: 'Euglycemic DKA presents with near-normal glucose but significant ketoacidosis. Social factors often underlie recurrent DKA.', keyTerms: [{ term: 'euglycemic DKA', definition: 'DKA with near-normal blood glucose; associated with SGLT2 inhibitors' }, { term: 'overlap method', definition: 'Giving subcutaneous basal insulin 2-4 hours before stopping IV insulin' }] },
    5: { level: 5, summary: 'Contemporary DKA care integrates point-of-care ketone monitoring, closed-loop insulin management research, and focus on reducing recurrent DKA through psychosocial interventions.', explanation: 'Beta-hydroxybutyrate monitoring guides treatment better than urine ketones. Racial disparities in DKA outcomes persist.', keyTerms: [{ term: 'beta-hydroxybutyrate', definition: 'Primary ketone body; best marker for monitoring DKA resolution' }], clinicalNotes: 'Recurrent DKA often indicates insulin omission; address underlying psychosocial barriers.' },
  },

  media: [],
  citations: [{ id: 'ada-dka-2009', type: 'article', title: 'DKA Consensus Statement', authors: ['Kitabchi AE'], source: 'Diabetes Care 2009', license: 'Copyrighted' }],
  crossReferences: [{ targetId: 'endocrine-diabetes-type1', targetType: 'condition', relationship: 'related', label: 'Type 1 Diabetes' }],
  tags: { systems: ['endocrine'], topics: ['diabetes', 'emergency'], keywords: ['DKA', 'ketoacidosis', 'hyperglycemia', 'insulin'] },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
