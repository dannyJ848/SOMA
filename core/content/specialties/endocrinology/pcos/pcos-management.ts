/**
 * PCOS Management
 */

import { EducationalContent } from '../../../types';

export const PCOS_MANAGEMENT: EducationalContent = {
  id: 'endocrine-pcos-management',
  type: 'topic',
  name: 'PCOS Management',
  alternateNames: ['PCOS treatment', 'Polycystic ovary syndrome therapy'],

  levels: {
    1: { level: 1, summary: 'PCOS treatment depends on your symptoms and goals. Options include lifestyle changes, birth control pills, and fertility treatments.', explanation: 'Losing weight, eating healthy, and exercising can help improve PCOS symptoms significantly.', keyTerms: [{ term: 'lifestyle changes', definition: 'Diet and exercise modifications to improve health' }] },
    2: { level: 2, summary: 'PCOS management is symptom-directed: oral contraceptives for menstrual regulation and hyperandrogenism, metformin for metabolic features, and ovulation induction for fertility.', explanation: 'Combined oral contraceptives suppress ovarian androgen production and regulate cycles. Metformin improves insulin sensitivity.', keyTerms: [{ term: 'combined oral contraceptive', definition: 'Birth control pills containing estrogen and progestin' }, { term: 'metformin', definition: 'Insulin sensitizer that helps with glucose metabolism' }] },
    3: { level: 3, summary: 'Evidence-based PCOS treatment follows phenotype-based approach. Letrozole is first-line for ovulation induction; lifestyle modification is foundational.', explanation: 'Treatment algorithms stratify by reproductive goals, BMI, and predominant features. Anti-androgens require reliable contraception.', keyTerms: [{ term: 'phenotype', definition: 'Clinical presentation pattern of PCOS' }, { term: 'gonadotropins', definition: 'Injectable hormones for ovulation induction when letrozole fails' }] },
    4: { level: 4, summary: 'Advanced PCOS management includes IVF with OHSS prevention strategies, bariatric surgery for severe obesity, and cardiometabolic risk reduction.', explanation: 'GnRH antagonist protocols with agonist trigger reduce OHSS in PCOS. Screening for diabetes and sleep apnea is indicated.', keyTerms: [{ term: 'GnRH antagonist', definition: 'Protocol used in IVF to prevent premature ovulation and reduce OHSS risk' }, { term: 'bariatric surgery', definition: 'Weight loss surgery; may improve fertility and metabolic parameters in severe obesity' }] },
    5: { level: 5, summary: 'Emerging PCOS therapeutics include GLP-1 receptor agonists for weight and metabolic benefits, and novel anti-androgens with improved safety profiles.', explanation: 'Precision medicine approaches aim to tailor treatment to genetic and metabolic profiles. New guidelines emphasize holistic care.', keyTerms: [{ term: 'GLP-1 agonist', definition: 'Medication for diabetes/obesity showing benefits in PCOS' }], clinicalNotes: 'Multidisciplinary care optimizes outcomes across reproductive, metabolic, and psychological domains.' },
  },

  media: [],
  citations: [{ id: 'teede-pcos-2023', type: 'article', title: 'PCOS Management Guidelines', authors: ['Teede HJ'], source: 'J Clin Endocrinol Metab 2023', license: 'Copyrighted' }],
  crossReferences: [{ targetId: 'endocrine-pcos-overview', targetType: 'condition', relationship: 'see-also', label: 'PCOS Overview' }],
  tags: { systems: ['endocrine', 'reproductive'], topics: ['PCOS', 'treatment'], keywords: ['PCOS treatment', 'ovulation induction', 'metformin'] },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
