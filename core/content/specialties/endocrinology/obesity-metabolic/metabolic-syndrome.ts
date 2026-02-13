/**
 * Metabolic Syndrome
 */

import { EducationalContent } from '../../../types';

export const METABOLIC_SYNDROME: EducationalContent = {
  id: 'endocrine-metabolic-syndrome',
  type: 'condition',
  name: 'Metabolic Syndrome',
  alternateNames: ['Syndrome X', 'Insulin resistance syndrome', 'Dysmetabolic syndrome'],

  levels: {
    1: { level: 1, summary: 'Metabolic syndrome is a group of conditions that together increase your risk for heart disease, stroke, and diabetes.', explanation: 'Having metabolic syndrome means you have several risk factors at once: belly fat, high blood pressure, high blood sugar, and abnormal cholesterol.', keyTerms: [{ term: 'risk factor', definition: 'Something that increases your chance of getting a disease' }] },
    2: { level: 2, summary: 'Metabolic syndrome is diagnosed when 3 of 5 criteria are present: central obesity, elevated triglycerides, low HDL, hypertension, and elevated fasting glucose.', explanation: 'Insulin resistance is central to the pathophysiology. Lifestyle modification is the cornerstone of treatment.', keyTerms: [{ term: 'insulin resistance', definition: 'Reduced cellular response to insulin, requiring higher insulin levels' }, { term: 'central obesity', definition: 'Excess abdominal fat; waist circumference is the clinical measure' }] },
    3: { level: 3, summary: 'Metabolic syndrome management targets each component with lifestyle changes first, then medications. The primary goal is cardiovascular risk reduction.', explanation: 'Weight loss of 5-10% significantly improves all metabolic parameters. Pharmacotherapy addresses individual components.', keyTerms: [{ term: 'ATP III criteria', definition: 'NCEP guidelines defining metabolic syndrome by 3 of 5 criteria' }, { term: 'ASCVD risk', definition: 'Atherosclerotic cardiovascular disease risk; elevated in metabolic syndrome' }] },
    4: { level: 4, summary: 'Advanced metabolic syndrome management integrates aggressive risk factor modification, emerging biomarkers, and consideration of pharmacological interventions for insulin resistance.', explanation: 'GLP-1 agonists address multiple components simultaneously. SGLT2 inhibitors provide cardiorenal benefits.', keyTerms: [{ term: 'SGLT2 inhibitor', definition: 'Medication class providing glucose, weight, and cardiovascular benefits' }, { term: 'NAFLD', definition: 'Non-alcoholic fatty liver disease; strongly associated with metabolic syndrome' }] },
    5: { level: 5, summary: 'Contemporary understanding views metabolic syndrome as a cluster of interrelated conditions driven by adipose tissue dysfunction and inflammation.', explanation: 'Controversy exists about metabolic syndrome as a distinct entity vs. collection of risk factors. Personalized approaches may improve outcomes.', keyTerms: [{ term: 'adipokine', definition: 'Hormone produced by fat tissue affecting metabolism and inflammation' }], clinicalNotes: 'Whether metabolic syndrome confers risk beyond its components remains debated.' },
  },

  media: [],
  citations: [{ id: 'alberti-metsyn-2009', type: 'article', title: 'Metabolic Syndrome Criteria', authors: ['Alberti KG'], source: 'Circulation 2009', license: 'Copyrighted' }],
  crossReferences: [{ targetId: 'endocrine-obesity', targetType: 'condition', relationship: 'related', label: 'Obesity' }, { targetId: 'endocrine-diabetes-type2', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' }],
  tags: { systems: ['endocrine', 'cardiovascular'], topics: ['metabolism', 'cardiovascular risk'], keywords: ['metabolic syndrome', 'insulin resistance', 'cardiovascular risk'] },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
