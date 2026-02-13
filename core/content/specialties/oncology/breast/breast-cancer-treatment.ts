/** Breast Cancer Treatment — EducationalContent */
import { oncEdu } from '../helpers';

export const breastCancerTreatment = oncEdu({
  id: 'onc-breast-treatment', name: 'Breast Cancer Treatment', nameEs: 'Tratamiento del cancer de mama',
  altNames: ['Breast cancer therapy', 'Breast cancer management'],
  l1: 'Breast cancer is treated with a combination of surgery, medicines, and sometimes radiation. The type of treatment depends on the kind of cancer and how far it has spread. Many women are cured, especially when cancer is found early.',
  l2: 'Treatment is tailored to receptor status (ER, PR, HER2). Surgery options include lumpectomy (breast-conserving) plus radiation or mastectomy. Chemotherapy may be given before (neoadjuvant) or after (adjuvant) surgery. Hormone-positive cancers receive endocrine therapy (tamoxifen or aromatase inhibitors) for 5-10 years. HER2-positive cancers receive targeted therapy (trastuzumab).',
  l3: 'ER+/HER2-: endocrine therapy (tamoxifen premenopausal, aromatase inhibitor postmenopausal) + CDK4/6 inhibitor (ribociclib, palbociclib, abemaciclib) in metastatic setting. HER2+: trastuzumab + pertuzumab + taxane; T-DM1 or T-DXd for residual disease post-neoadjuvant. TNBC: dose-dense AC-T +/- carboplatin; pembrolizumab added if PD-L1 CPS >=10 (KEYNOTE-355). Radiation: whole breast, partial breast (APBI), or post-mastectomy based on tumor and nodal factors.',
  l4: 'monarchE established adjuvant abemaciclib for high-risk HR+/HER2- (>=4 nodes or 1-3 nodes with high grade/Ki-67). NATALEE showed benefit of adjuvant ribociclib in broader stage II-III population. T-DXd (DESTINY-Breast03) replaced T-DM1 as second-line HER2+ standard. Olaparib (OlympiA) for adjuvant BRCA-mutated HER2-negative disease. CREATE-X (capecitabine) and KATHERINE (T-DM1) for non-pCR after neoadjuvant therapy demonstrate escalation strategies.',
  l5: 'ADC revolution: T-DXd active in HER2-low (DESTINY-Breast04) and HER2-ultralow; sacituzumab govitecan for pretreated TNBC (ASCENT) and HR+ (TROPiCS-02). ctDNA-guided de-escalation trials (ZEST, DARE) aim to personalize adjuvant duration. Neoadjuvant immunotherapy combinations (KEYNOTE-522: pembro + chemo) yield 64% pCR in TNBC with EFS benefit. ESR1 mutation monitoring guides endocrine therapy switching (elacestrant for ESR1-mutant, EMERALD). Tumor-agnostic biomarkers (MSI-H, NTRK, TMB-H) expand treatment options.',
  tags: { systems: ['reproductive'], topics: ['therapeutics', 'surgery', 'pharmacology'], keywords: ['endocrine therapy', 'HER2', 'trastuzumab', 'CDK4/6 inhibitor', 'immunotherapy', 'T-DXd', 'TNBC'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] } },
  crossRefs: [
    { targetId: 'onc-breast-screening', targetType: 'topic', relationship: 'sibling', label: 'Breast Cancer Screening' },
    { targetId: 'onc-breast-staging', targetType: 'topic', relationship: 'sibling', label: 'Breast Cancer Staging' },
    { targetId: 'onc-chemotherapy-principles', targetType: 'topic', relationship: 'related', label: 'Chemotherapy Principles' },
    { targetId: 'onc-immunotherapy', targetType: 'topic', relationship: 'related', label: 'Immunotherapy' },
  ],
});
