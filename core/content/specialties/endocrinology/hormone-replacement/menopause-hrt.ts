/**
 * Menopause HRT
 */

import { EducationalContent } from '../../../types';

export const MENOPAUSE_HRT: EducationalContent = {
  id: 'endocrine-menopause-hrt',
  type: 'topic',
  name: 'Menopause and Hormone Replacement Therapy',
  alternateNames: ['HRT', 'Menopausal hormone therapy', 'MHT', 'Estrogen replacement'],

  levels: {
    1: { level: 1, summary: 'Menopause is when periods stop permanently, usually around age 50. Hormone therapy can help relieve symptoms like hot flashes and vaginal dryness.', explanation: 'During menopause, the ovaries stop making estrogen, causing symptoms. Hormone therapy replaces some of this estrogen.', keyTerms: [{ term: 'menopause', definition: 'End of menstrual periods, confirmed after 12 months without a period' }, { term: 'hot flashes', definition: 'Sudden feelings of heat often with sweating; common menopause symptom' }] },
    2: { level: 2, summary: 'Menopause results from declining ovarian estrogen production. Hormone therapy is most effective for vasomotor symptoms and should be individualized based on risk-benefit.', explanation: 'Women with a uterus need progestogen with estrogen to prevent endometrial hyperplasia. Transdermal estrogen may have lower thrombotic risk.', keyTerms: [{ term: 'vasomotor symptoms', definition: 'Hot flashes and night sweats caused by estrogen deficiency' }, { term: 'progestogen', definition: 'Hormone added to protect the uterus from estrogen-only therapy' }] },
    3: { level: 3, summary: 'HRT initiation is best within 10 years of menopause or before age 60. Formulation selection considers thrombotic risk, breast cancer risk, and individual symptom profile.', explanation: 'The timing hypothesis suggests HRT is cardioprotective when started early. Transdermal and micronized progesterone may be safer.', keyTerms: [{ term: 'window of opportunity', definition: 'Period within 10 years of menopause when HRT may be cardioprotective' }, { term: 'bioidentical hormones', definition: 'Hormones molecularly identical to human hormones' }] },
    4: { level: 4, summary: 'Advanced HRT management addresses special populations, duration of therapy, and emerging alternatives like tissue-selective estrogen complexes.', explanation: 'Premature ovarian insufficiency requires HRT until natural menopause age. Non-hormonal alternatives exist for breast cancer survivors.', keyTerms: [{ term: 'TSEC', definition: 'Tissue-selective estrogen complex combining estrogen with SERM' }, { term: 'fezolinetant', definition: 'NK3 receptor antagonist for hot flashes; non-hormonal' }] },
    5: { level: 5, summary: 'Contemporary HRT practice emphasizes individualized care, consideration of genomic factors, and balancing quality of life against long-term risks.', explanation: 'Precision approaches may guide therapy selection. Duration of use is reassessed annually.', keyTerms: [{ term: 'compounded hormones', definition: 'Custom-mixed hormones; lack FDA oversight and standardization' }], clinicalNotes: 'Lowest effective dose for shortest necessary duration remains guiding principle.' },
  },

  media: [],
  citations: [{ id: 'nams-hrt-2022', type: 'article', title: 'NAMS Position Statement on HRT', authors: ['NAMS'], source: 'Menopause 2022', license: 'Copyrighted' }],
  crossReferences: [{ targetId: 'endocrine-osteoporosis', targetType: 'condition', relationship: 'related', label: 'Osteoporosis' }],
  tags: { systems: ['endocrine', 'reproductive'], topics: ['menopause', 'hormone therapy'], keywords: ['HRT', 'menopause', 'estrogen', 'hot flashes'] },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
