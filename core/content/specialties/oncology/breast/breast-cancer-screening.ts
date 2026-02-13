/** Breast Cancer Screening — EducationalContent */
import { oncEdu } from '../helpers';

export const breastCancerScreening = oncEdu({
  id: 'onc-breast-screening', name: 'Breast Cancer Screening', nameEs: 'Deteccion de cancer de mama',
  altNames: ['Mammography screening', 'Breast cancer early detection'], type: 'topic',
  l1: 'Breast cancer screening means getting regular tests to find cancer early, before you feel anything. Mammograms are special X-rays of the breast. Women aged 40-74 should talk to their doctor about when to start.',
  l2: 'Screening mammography is the standard tool for early breast cancer detection. Guidelines recommend screening every 1-2 years starting at age 40-50 depending on the organization. Women with BRCA mutations or strong family history may need MRI screening starting at age 25-30.',
  l3: 'Mammographic screening detects microcalcifications and soft-tissue densities; sensitivity ~85% but lower in dense breasts. Digital breast tomosynthesis (3D mammography) improves cancer detection by 20-40% and reduces callbacks. BI-RADS classification (0-6) standardizes reporting. Supplemental MRI recommended for lifetime risk >=20%.',
  l4: 'Evidence from RCTs (HIP, Swedish Two-County, CNBSS) shows 20-30% breast cancer mortality reduction with mammographic screening. Overdiagnosis estimated at 10-20%, primarily DCIS. Dense breast legislation has expanded supplemental screening. Contrast-enhanced mammography and abbreviated MRI protocols are emerging alternatives for high-risk populations.',
  l5: 'USPSTF (2024) recommends biennial screening 40-74; ACS recommends annual 45-54 then biennial; ACR recommends annual from 40. Risk-based screening models (Tyrer-Cuzick, BRCAPRO) guide supplemental imaging. AI-assisted mammography interpretation shows promise in prospective trials (MASAI, ScreenTrustCAD) with comparable sensitivity and reduced radiologist workload. Liquid biopsy (cfDNA methylation) under investigation for multi-cancer early detection.',
  tags: { systems: ['reproductive'], topics: ['screening', 'prevention', 'radiology'], keywords: ['mammogram', 'BI-RADS', 'BRCA', 'dense breasts', 'tomosynthesis'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] } },
  crossRefs: [
    { targetId: 'onc-breast-staging', targetType: 'topic', relationship: 'sibling', label: 'Breast Cancer Staging' },
    { targetId: 'onc-breast-treatment', targetType: 'topic', relationship: 'sibling', label: 'Breast Cancer Treatment' },
  ],
});
