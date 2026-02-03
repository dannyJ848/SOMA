/**
 * PCOS Overview
 */

import { EducationalContent } from '../../../types';

export const PCOS_OVERVIEW: EducationalContent = {
  id: 'endocrine-pcos-overview',
  type: 'condition',
  name: 'Polycystic Ovary Syndrome',
  alternateNames: ['PCOS', 'Polycystic ovarian syndrome', 'Stein-Leventhal syndrome'],

  levels: {
    1: { level: 1, summary: 'PCOS is a common hormonal condition in women that can cause irregular periods, acne, excess hair growth, and difficulty getting pregnant.', explanation: 'PCOS affects how the ovaries work. It involves hormonal imbalance and can lead to small cysts on the ovaries.', keyTerms: [{ term: 'ovaries', definition: 'Organs that produce eggs and hormones in women' }, { term: 'hormones', definition: 'Chemical messengers that control body functions' }] },
    2: { level: 2, summary: 'PCOS is diagnosed using Rotterdam criteria: 2 of 3 features (oligo/anovulation, hyperandrogenism, polycystic ovaries). It is associated with insulin resistance and metabolic syndrome.', explanation: 'PCOS is the most common cause of anovulatory infertility. Hyperandrogenism causes hirsutism and acne.', keyTerms: [{ term: 'Rotterdam criteria', definition: 'Diagnostic criteria for PCOS requiring 2 of 3 features' }, { term: 'hyperandrogenism', definition: 'Excess male hormones causing acne and hair growth' }] },
    3: { level: 3, summary: 'PCOS management targets specific symptoms: OCPs for hyperandrogenism, metformin for metabolic features, letrozole for ovulation induction.', explanation: 'Treatment is individualized based on phenotype and reproductive goals. Weight loss improves all features of PCOS.', keyTerms: [{ term: 'letrozole', definition: 'Aromatase inhibitor; first-line for ovulation induction in PCOS' }, { term: 'spironolactone', definition: 'Anti-androgen used for hirsutism in PCOS' }] },
    4: { level: 4, summary: 'Advanced PCOS care addresses cardiometabolic risk, screening for complications, and fertility treatment optimization including IVF considerations.', explanation: 'Long-term risks include type 2 diabetes, cardiovascular disease, and endometrial cancer from chronic anovulation.', keyTerms: [{ term: 'anti-Müllerian hormone', definition: 'AMH; elevated in PCOS, reflects antral follicle count' }, { term: 'OHSS', definition: 'Ovarian hyperstimulation syndrome; risk in PCOS during fertility treatment' }] },
    5: { level: 5, summary: 'Contemporary PCOS research explores genetic and epigenetic factors, precision phenotyping, and novel therapeutics targeting underlying pathophysiology.', explanation: 'Emerging treatments include inositols and GLP-1 agonists. New diagnostic criteria incorporating AMH are being studied.', keyTerms: [{ term: 'inositol', definition: 'Insulin sensitizer used in PCOS; may improve ovulation' }], clinicalNotes: 'PCOS is a lifelong condition requiring longitudinal care for metabolic and reproductive health.' },
  },

  media: [],
  citations: [{ id: 'teede-pcos-2018', type: 'article', title: 'PCOS Guidelines', authors: ['Teede HJ'], source: 'Hum Reprod 2018', license: 'Copyrighted' }],
  crossReferences: [{ targetId: 'endocrine-pcos-management', targetType: 'topic', relationship: 'see-also', label: 'PCOS Management' }],
  tags: { systems: ['endocrine', 'reproductive'], topics: ['PCOS', 'infertility', 'androgens'], keywords: ['PCOS', 'polycystic ovary', 'hirsutism', 'anovulation'] },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
