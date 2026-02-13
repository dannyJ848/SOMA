/**
 * Vitamin D Disorders
 */

import { EducationalContent } from '../../../types';

export const VITAMIN_D_DISORDERS: EducationalContent = {
  id: 'endocrine-vitamin-d-disorders',
  type: 'condition',
  name: 'Vitamin D Disorders',
  alternateNames: ['Vitamin D deficiency', 'Hypovitaminosis D', 'Vitamin D toxicity'],

  levels: {
    1: { level: 1, summary: 'Vitamin D helps your body absorb calcium for strong bones. Low vitamin D can cause weak bones and muscle pain.', explanation: 'We get vitamin D from sunlight, food, and supplements. Without enough vitamin D, bones become soft and weak.', keyTerms: [{ term: 'vitamin D', definition: 'A vitamin that helps the body use calcium for strong bones' }] },
    2: { level: 2, summary: 'Vitamin D deficiency (25-OH D <20 ng/mL) causes secondary hyperparathyroidism and osteomalacia. Treatment involves supplementation with D2 or D3.', explanation: 'Vitamin D is converted to active form (calcitriol) in the kidneys. Deficiency leads to low calcium absorption and compensatory PTH elevation.', keyTerms: [{ term: '25-hydroxyvitamin D', definition: 'Main circulating form of vitamin D; used to assess status' }, { term: 'osteomalacia', definition: 'Softening of bones due to vitamin D deficiency in adults' }] },
    3: { level: 3, summary: 'Vitamin D metabolism involves skin synthesis, hepatic 25-hydroxylation, and renal 1α-hydroxylation. Deficiency is treated with ergocalciferol or cholecalciferol.', explanation: 'Target 25-OH D levels vary by guidelines (20-50 ng/mL). High-dose regimens achieve repletion faster.', keyTerms: [{ term: 'ergocalciferol', definition: 'Vitamin D2; plant-derived' }, { term: 'cholecalciferol', definition: 'Vitamin D3; animal-derived, may be more potent' }] },
    4: { level: 4, summary: 'Advanced vitamin D management addresses malabsorption, renal disease, and genetic disorders of vitamin D metabolism.', explanation: 'CKD requires active vitamin D (calcitriol or analogs). Genetic causes include 1α-hydroxylase deficiency and VDR mutations.', keyTerms: [{ term: 'calcitriol', definition: '1,25-dihydroxyvitamin D; active form produced by kidneys' }, { term: 'VDDR', definition: 'Vitamin D-dependent rickets; genetic disorders of vitamin D pathway' }] },
    5: { level: 5, summary: 'Contemporary vitamin D research addresses optimal targets, non-skeletal effects, and precision supplementation strategies.', explanation: 'Extra-skeletal vitamin D effects remain debated. Large RCTs have not confirmed cardiovascular or cancer benefits.', keyTerms: [{ term: 'VDR', definition: 'Vitamin D receptor; nuclear receptor mediating vitamin D effects' }], clinicalNotes: 'Optimal vitamin D level remains debated; most guidelines recommend 20-50 ng/mL.' },
  },

  media: [],
  citations: [{ id: 'holick-vitd-2011', type: 'article', title: 'Vitamin D Guidelines', authors: ['Holick MF'], source: 'J Clin Endocrinol Metab 2011', license: 'Copyrighted' }],
  crossReferences: [{ targetId: 'endocrine-osteoporosis', targetType: 'condition', relationship: 'related', label: 'Osteoporosis' }],
  tags: { systems: ['endocrine', 'musculoskeletal'], topics: ['bone', 'calcium', 'vitamin D'], keywords: ['vitamin D', 'deficiency', 'supplementation'] },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
