/** Lung Cancer Staging & Treatment — EducationalContent */
import { oncEdu } from '../helpers';

export const lungCancerStagingTreatment = oncEdu({
  id: 'onc-lung-staging', name: 'Lung Cancer Staging & Treatment', nameEs: 'Estadificacion y tratamiento del cancer de pulmon',
  altNames: ['Lung cancer management', 'NSCLC/SCLC treatment'],
  l1: 'Doctors use staging to figure out how far lung cancer has spread. Early-stage cancer can often be removed with surgery. More advanced cancer may need chemotherapy, radiation, or newer targeted medicines. Treatment plans depend on the type and stage of cancer.',
  l2: 'NSCLC staging uses the TNM system (I-IV). Stage I-II: surgery (lobectomy preferred) with possible adjuvant chemotherapy. Stage III: concurrent chemoradiation followed by immunotherapy (durvalumab). Stage IV: systemic therapy based on molecular targets or immunotherapy. SCLC uses limited vs extensive staging. Limited stage: chemoradiation; extensive: chemotherapy plus immunotherapy.',
  l3: 'NSCLC stage I: lobectomy + mediastinal lymph node sampling; sublobar resection (segmentectomy) non-inferior for <=2cm peripheral tumors (JCOG0802, CALGB 140503). Adjuvant osimertinib for resected EGFR+ stage IB-IIIA (ADAURA: 83% DFS at 24 months). Stage III unresectable: cisplatin-based chemoRT then durvalumab x12 months (PACIFIC: 47.5% 5-yr OS). Stage IV EGFR+: osimertinib first-line (FLAURA: 38.6 months OS). SCLC extensive: carboplatin/etoposide + atezolizumab (IMpower133) or durvalumab (CASPIAN).',
  l4: 'First-line stage IV NSCLC without drivers: pembrolizumab monotherapy if PD-L1 TPS >=50% (KEYNOTE-024); pembrolizumab + pemetrexed/platinum if nonsquamous (KEYNOTE-189); pembrolizumab + carboplatin/paclitaxel if squamous (KEYNOTE-407). ALK+: alectinib (ALEX) or lorlatinib (CROWN) first-line. KRAS G12C: sotorasib (CodeBreaK 200) or adagrasib second-line. Perioperative: neoadjuvant nivolumab + chemo (CheckMate 816: 24% pCR) followed by adjuvant nivolumab (CheckMate 77T). SBRT for medically inoperable stage I achieves 90%+ local control.',
  l5: 'Amivantamab + lazertinib for EGFR+ NSCLC (MARIPOSA) challenges osimertinib monotherapy with improved PFS. Tarlatamab (DLL3-targeting BiTE) in relapsed SCLC (DeLLphi-301: 40% ORR). Datopotamab deruxtecan (Dato-DXd) in pretreated nonsquamous NSCLC (TROPION-Lung01). Neoadjuvant-adjuvant strategies dominating resectable space: AEGEAN (durvalumab), KEYNOTE-671 (pembrolizumab), NEOTORCH (toripalimab) all show OS benefits. ctDNA MRD negativity post-surgery predicts excellent prognosis; trials exploring ctDNA-guided adjuvant de-escalation. Radioligand therapy and bispecific antibodies represent next frontiers.',
  tags: { systems: ['respiratory'], topics: ['staging', 'therapeutics', 'surgery'], keywords: ['TNM staging', 'lobectomy', 'immunotherapy', 'osimertinib', 'chemoradiation', 'durvalumab', 'SBRT'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] } },
  crossRefs: [
    { targetId: 'onc-lung-types', targetType: 'topic', relationship: 'sibling', label: 'Lung Cancer Types' },
    { targetId: 'onc-immunotherapy', targetType: 'topic', relationship: 'related', label: 'Immunotherapy' },
    { targetId: 'onc-radiation-therapy', targetType: 'topic', relationship: 'related', label: 'Radiation Therapy' },
  ],
});
