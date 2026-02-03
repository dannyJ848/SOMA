/** Lung Cancer Types — EducationalContent */
import { oncEdu } from '../helpers';

export const lungCancerTypes = oncEdu({
  id: 'onc-lung-types', name: 'Lung Cancer Types', nameEs: 'Tipos de cancer de pulmon',
  altNames: ['Lung cancer classification', 'NSCLC vs SCLC'], type: 'topic',
  l1: 'There are two main types of lung cancer. Non-small cell lung cancer (NSCLC) is the most common (about 85%) and grows more slowly. Small cell lung cancer (SCLC) is less common but grows and spreads faster. Smoking is the biggest risk factor for both types.',
  l2: 'NSCLC includes three subtypes: adenocarcinoma (most common, often peripheral, can occur in non-smokers), squamous cell carcinoma (central, strongly linked to smoking), and large cell carcinoma (poorly differentiated). SCLC is a neuroendocrine tumor, almost always in smokers, usually presents as a central hilar mass with early metastases. Carcinoid tumors are rare, slow-growing neuroendocrine tumors.',
  l3: 'Adenocarcinoma arises from type II pneumocytes and mucinous glands; spectrum includes adenocarcinoma in situ (AIS), minimally invasive, and invasive patterns (lepidic, acinar, papillary, micropapillary, solid). Squamous cell carcinoma shows keratinization and intercellular bridges; often cavitates. SCLC has high mitotic rate, neuroendocrine markers (synaptophysin, chromogranin, CD56), frequent p53/RB1 loss. Molecular profiling essential: EGFR, ALK, ROS1, BRAF, KRAS G12C, MET, RET, NTRK, HER2 in NSCLC.',
  l4: 'Adenocarcinoma molecular landscape: KRAS G12C (~13%), EGFR (~15% in Western, ~50% Asian), ALK rearrangements (~5%), ROS1 (~2%), BRAF V600E (~2%), MET exon 14 skip (~3%), RET fusions (~2%), HER2 mutations (~2%). PD-L1 TPS guides first-line immunotherapy eligibility. Squamous cell: limited actionable drivers; FGFR1 amplification in trials. SCLC genomics: nearly universal TP53/RB1 loss; DLL3 expression targetable (tarlatamab, DeLLphi-301). SCLC subtypes by transcription factor: ASCL1, NEUROD1, POU2F3, YAP1.',
  l5: 'IASLC 2021 classification updates emphasize comprehensive molecular testing via NGS panels. Liquid biopsy (cfDNA) enables non-invasive genotyping when tissue insufficient. NSCLC-NOS reclassified using IHC (TTF-1, p40). Large cell neuroendocrine carcinoma (LCNEC) treated per SCLC or NSCLC protocols depending on molecular profile. Sarcomatoid and adenosquamous histologies carry worse prognosis. SCLC inflamed subtype may predict immunotherapy benefit. MRD detection via ctDNA (MERMAID-1, MERMAID-2) investigated for adjuvant and surveillance strategies.',
  tags: { systems: ['respiratory'], topics: ['pathology', 'classification', 'molecular biology'], keywords: ['NSCLC', 'SCLC', 'adenocarcinoma', 'squamous cell', 'EGFR', 'ALK', 'molecular testing'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] } },
  crossRefs: [
    { targetId: 'onc-lung-staging', targetType: 'topic', relationship: 'sibling', label: 'Lung Cancer Staging' },
    { targetId: 'onc-chemotherapy-principles', targetType: 'topic', relationship: 'related', label: 'Chemotherapy Principles' },
  ],
});
