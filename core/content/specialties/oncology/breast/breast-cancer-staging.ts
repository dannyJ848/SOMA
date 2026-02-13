/** Breast Cancer Staging — EducationalContent */
import { oncEdu } from '../helpers';

export const breastCancerStaging = oncEdu({
  id: 'onc-breast-staging', name: 'Breast Cancer Staging', nameEs: 'Estadificacion del cancer de mama',
  altNames: ['TNM breast staging', 'Breast cancer prognostic staging'],
  l1: 'Staging tells doctors how big the cancer is and whether it has spread. Stages go from 0 (very early, only in the milk ducts) to IV (spread to other parts of the body). Lower stages generally mean better chances of being cured.',
  l2: 'Breast cancer staging uses the TNM system: T (tumor size 1-4), N (lymph node involvement 0-3), M (distant metastasis 0-1). Stage 0 is DCIS (ductal carcinoma in situ). Stages I-III are localized or regional. Stage IV means cancer has spread to bones, liver, lungs, or brain.',
  l3: 'AJCC 8th edition introduced prognostic staging incorporating tumor grade, ER/PR status, HER2 status, and genomic assays (Oncotype DX Recurrence Score). Anatomic staging alone may overestimate or underestimate prognosis. Sentinel lymph node biopsy determines nodal status with lower morbidity than axillary dissection. Imaging workup: mammography, ultrasound, MRI for local; CT/bone scan/PET for distant staging in stage III+.',
  l4: 'Prognostic stage can reclassify tumors significantly: a T2N1 ER+ grade 1 tumor may be downstaged from anatomic IIIA to prognostic IB. Oncotype DX RS <26 (TAILORx) or MammaPrint low-risk (MINDACT) identifies node-negative ER+ patients who can safely omit chemotherapy. RxPONDER showed benefit of chemo for RS >25 in N1 premenopausal women. Ki-67 and tumor-infiltrating lymphocytes add prognostic value especially in triple-negative disease.',
  l5: 'Circulating tumor DNA (ctDNA) is emerging as a molecular staging and MRD detection tool; SPARTAN and c-TRAK TN trials show ctDNA-guided adjuvant escalation improves iDFS. HER2-low (IHC 1+ or 2+/ISH-) is now a targetable subgroup (DESTINY-Breast04, trastuzumab deruxtecan). Liquid biopsy-based staging may eventually supplement imaging for early recurrence detection and treatment response monitoring.',
  tags: { systems: ['reproductive'], topics: ['pathology', 'staging', 'diagnostics'], keywords: ['TNM', 'AJCC', 'Oncotype DX', 'sentinel node', 'prognostic staging', 'DCIS'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] } },
  crossRefs: [
    { targetId: 'onc-breast-screening', targetType: 'topic', relationship: 'sibling', label: 'Breast Cancer Screening' },
    { targetId: 'onc-breast-treatment', targetType: 'topic', relationship: 'sibling', label: 'Breast Cancer Treatment' },
  ],
});
