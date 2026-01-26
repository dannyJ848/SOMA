/**
 * Osteoporosis
 */

import { EducationalContent } from '../../../types';

export const OSTEOPOROSIS: EducationalContent = {
  id: 'endocrine-osteoporosis',
  type: 'condition',
  name: 'Osteoporosis',
  alternateNames: ['Bone loss', 'Low bone density'],

  levels: {
    1: { level: 1, summary: 'Osteoporosis is a condition where bones become weak and brittle, making them more likely to break.', explanation: 'Bones naturally lose density as we age. In osteoporosis, this loss is excessive, making fractures more likely from minor falls or even everyday activities.', keyTerms: [{ term: 'bone density', definition: 'How solid and strong your bones are' }] },
    2: { level: 2, summary: 'Osteoporosis is diagnosed by DXA scan showing T-score ≤-2.5. Risk factors include age, menopause, glucocorticoids, and low body weight.', explanation: 'Bone remodeling involves continuous breakdown (osteoclasts) and building (osteoblasts). In osteoporosis, resorption exceeds formation.', keyTerms: [{ term: 'DXA scan', definition: 'Dual-energy X-ray absorptiometry; gold standard for bone density measurement' }, { term: 'T-score', definition: 'Bone density compared to young adult reference; ≤-2.5 defines osteoporosis' }] },
    3: { level: 3, summary: 'Osteoporosis management includes bisphosphonates, denosumab, and anabolic agents. FRAX calculator guides treatment decisions.', explanation: 'Treatment selection considers fracture risk, contraindications, and patient factors. Bisphosphonates are first-line for most.', keyTerms: [{ term: 'bisphosphonate', definition: 'Antiresorptive medication that reduces bone breakdown' }, { term: 'FRAX', definition: 'Fracture Risk Assessment Tool for 10-year fracture probability' }] },
    4: { level: 4, summary: 'Advanced osteoporosis care addresses treatment sequencing, drug holidays, and management of rare complications like ONJ and atypical fractures.', explanation: 'Sequential therapy with anabolics followed by antiresorptives may optimize outcomes. Treatment duration and monitoring are individualized.', keyTerms: [{ term: 'romosozumab', definition: 'Sclerostin inhibitor; anabolic agent for high-risk osteoporosis' }, { term: 'atypical femur fracture', definition: 'Rare complication of prolonged bisphosphonate use' }] },
    5: { level: 5, summary: 'Contemporary osteoporosis research explores novel targets, personalized treatment algorithms, and addressing the care gap in high-risk populations.', explanation: 'Emerging therapies target Wnt pathway and other bone biology pathways. Treat-to-target approaches are being studied.', keyTerms: [{ term: 'sclerostin', definition: 'Protein that inhibits bone formation; target of romosozumab' }], clinicalNotes: 'The osteoporosis treatment gap remains significant, with many high-risk patients not receiving therapy.' },
  },

  media: [],
  citations: [{ id: 'aace-osteo-2020', type: 'article', title: 'AACE Osteoporosis Guidelines', authors: ['Camacho PM'], source: 'Endocr Pract 2020', license: 'Copyrighted' }],
  crossReferences: [{ targetId: 'endocrine-vitamin-d-disorders', targetType: 'condition', relationship: 'related', label: 'Vitamin D Disorders' }],
  tags: { systems: ['endocrine', 'musculoskeletal'], topics: ['bone', 'calcium'], keywords: ['osteoporosis', 'fracture', 'bisphosphonate'] },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
