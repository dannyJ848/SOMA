/**
 * Testosterone Replacement Therapy
 */

import { EducationalContent } from '../../../types';

export const TESTOSTERONE_REPLACEMENT: EducationalContent = {
  id: 'endocrine-testosterone-replacement',
  type: 'topic',
  name: 'Testosterone Replacement Therapy',
  alternateNames: ['TRT', 'Androgen replacement', 'Male hypogonadism treatment'],

  levels: {
    1: { level: 1, summary: 'Testosterone replacement therapy is used when a man has low testosterone levels causing symptoms like fatigue, low sex drive, and loss of muscle.', explanation: 'Testosterone is the main male hormone. When levels are too low, replacement can help restore energy, mood, and sexual function.', keyTerms: [{ term: 'testosterone', definition: 'The main male sex hormone; controls muscle, bone, and sex drive' }, { term: 'hypogonadism', definition: 'Medical term for low testosterone levels' }] },
    2: { level: 2, summary: 'Male hypogonadism requires both low testosterone (<300 ng/dL) and symptoms for diagnosis. Treatment options include gels, injections, and pellets.', explanation: 'Distinguish primary (testicular) from secondary (pituitary) hypogonadism. LH/FSH helps differentiate.', keyTerms: [{ term: 'primary hypogonadism', definition: 'Low testosterone due to testicular failure; high LH/FSH' }, { term: 'secondary hypogonadism', definition: 'Low testosterone due to pituitary/hypothalamic problem; low/normal LH/FSH' }] },
    3: { level: 3, summary: 'Testosterone therapy requires confirmation of deficiency on two morning samples. Contraindications include prostate/breast cancer, severe sleep apnea, and desire for fertility.', explanation: 'Monitor hematocrit (risk of polycythemia), PSA, and symptoms. Transdermal and injectable forms have different pharmacokinetics.', keyTerms: [{ term: 'polycythemia', definition: 'Elevated red blood cells; complication of testosterone therapy' }, { term: 'hematocrit', definition: 'Percentage of blood volume occupied by red blood cells' }] },
    4: { level: 4, summary: 'Advanced TRT management addresses fertility preservation with hCG/clomiphene, cardiovascular safety considerations, and long-acting formulations.', explanation: 'TRAVERSE trial provided CV safety data for TRT in hypogonadal men with CV risk factors. hCG maintains fertility during treatment.', keyTerms: [{ term: 'clomiphene', definition: 'SERM that stimulates endogenous testosterone production' }, { term: 'testosterone undecanoate', definition: 'Long-acting injectable testosterone given every 10 weeks' }] },
    5: { level: 5, summary: 'Contemporary TRT practice integrates cardiovascular safety data, fertility considerations, and individualized treatment selection.', explanation: 'Debate continues about treatment of age-related decline vs. true hypogonadism. Benefit-risk assessment is ongoing.', keyTerms: [{ term: 'late-onset hypogonadism', definition: 'Age-related testosterone decline; treatment remains controversial' }], clinicalNotes: 'Always investigate cause of hypogonadism before initiating replacement.' },
  },

  media: [],
  citations: [{ id: 'bhasin-trt-2018', type: 'article', title: 'Testosterone Therapy Guidelines', authors: ['Bhasin S'], source: 'J Clin Endocrinol Metab 2018', license: 'Copyrighted' }],
  crossReferences: [{ targetId: 'endocrine-hypopituitarism', targetType: 'condition', relationship: 'related', label: 'Hypopituitarism' }],
  tags: { systems: ['endocrine', 'reproductive'], topics: ['testosterone', 'hypogonadism'], keywords: ['testosterone', 'TRT', 'hypogonadism', 'male hormone'] },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
