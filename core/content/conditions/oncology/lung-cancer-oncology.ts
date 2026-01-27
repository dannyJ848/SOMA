/**
 * Lung Cancer - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const lungCancer: EducationalContent = {
  id: 'condition-lung-cancer',
  type: 'condition',
  name: 'Lung Cancer',
  alternateNames: ['Lung Carcinoma', 'Bronchogenic Carcinoma'],
  hpoId: 'HP:0030358',

  levels: {
    1: {
      level: 1,
      summary: 'Lung cancer is when abnormal cells grow out of control in the lungs. Smoking is the leading cause, but non-smokers can also develop it.',
      explanation: `Lung cancer is the leading cause of cancer death worldwide. Most cases are caused by smoking, but radon, air pollution, and genetics also play a role.

**Symptoms (often appear late):**
- Persistent cough
- Coughing up blood
- Shortness of breath
- Chest pain
- Weight loss
- Fatigue

**Prevention:**
- Don't smoke (or quit if you do)
- Avoid secondhand smoke
- Test home for radon
- Screening with CT scan for high-risk smokers`,
      keyTerms: [
        { term: 'lung cancer', definition: 'Cancer that starts in the lungs' },
        { term: 'screening', definition: 'Testing healthy people to find disease early' },
      ],
      analogies: ['Cigarette smoke is like pouring irritating chemicals into your lungs year after year until cells start growing abnormally.'],
      examples: ['A 60-year-old smoker with a new cough and weight loss should be evaluated for lung cancer.'],
    },
    2: {
      level: 2,
      summary: 'Lung cancer is divided into non-small cell (NSCLC, 85%) and small cell (SCLC, 15%), with treatment based on stage and molecular profiling for actionable mutations in NSCLC.',
      explanation: `## Types

**Non-Small Cell Lung Cancer (NSCLC) - 85%:**
- Adenocarcinoma (most common)
- Squamous cell carcinoma
- Large cell carcinoma

**Small Cell Lung Cancer (SCLC) - 15%:**
- Highly aggressive
- Often metastatic at diagnosis
- Strong smoking association

## Staging
- Stage I-II: Localized, potentially curable with surgery
- Stage III: Locally advanced
- Stage IV: Metastatic

## Treatment
**Early NSCLC:** Surgery +/- adjuvant therapy
**Locally Advanced:** Chemoradiation +/- immunotherapy
**Metastatic:** Targeted therapy, immunotherapy, chemotherapy
**SCLC:** Chemotherapy + immunotherapy +/- radiation

## Screening
- Annual low-dose CT: Ages 50-80, 20+ pack-year history, current smoker or quit within 15 years`,
      keyTerms: [
        { term: 'NSCLC', definition: 'Non-small cell lung cancer; most common type, includes adenocarcinoma' },
        { term: 'SCLC', definition: 'Small cell lung cancer; aggressive type strongly linked to smoking' },
        { term: 'low-dose CT', definition: 'Screening scan for lung cancer in high-risk individuals' },
      ],
    },
    3: {
      level: 3,
      summary: 'NSCLC molecular profiling identifies driver mutations (EGFR, ALK, ROS1, KRAS) guiding targeted therapy, with PD-L1 expression directing immunotherapy use, while SCLC relies on chemoimmunotherapy.',
      explanation: `## Molecular Testing (NSCLC)
Test all non-squamous NSCLC for:
- EGFR mutations (exon 19 del, L858R)
- ALK rearrangements
- ROS1 rearrangements
- KRAS G12C
- BRAF V600E
- RET, MET, NTRK
- PD-L1 expression

## Targeted Therapy
| Target | Drug Examples |
|--------|---------------|
| EGFR | Osimertinib (preferred first-line) |
| ALK | Alectinib, lorlatinib |
| ROS1 | Crizotinib, entrectinib |
| KRAS G12C | Sotorasib, adagrasib |
| BRAF V600E | Dabrafenib + trametinib |

## Immunotherapy
- Pembrolizumab monotherapy: PD-L1 ≥50%, no driver mutations
- Chemo + pembrolizumab: PD-L1 <50%
- Chemo + nivolumab + ipilimumab

## SCLC
- Limited stage: Concurrent chemoradiation + prophylactic cranial irradiation
- Extensive stage: Carboplatin/etoposide + atezolizumab or durvalumab`,
      keyTerms: [
        { term: 'driver mutation', definition: 'Genetic alteration driving cancer growth; target for therapy' },
        { term: 'osimertinib', definition: 'Third-generation EGFR TKI; first-line for EGFR+ NSCLC' },
        { term: 'PD-L1', definition: 'Programmed death-ligand 1; biomarker for immunotherapy' },
      ],
      clinicalNotes: 'EGFR and ALK tumors respond poorly to immunotherapy monotherapy—always test for drivers before immunotherapy. Osimertinib has CNS activity and is preferred in EGFR-mutant disease.',
    },
    4: {
      level: 4,
      summary: 'Advanced NSCLC management addresses resistance mechanisms, CNS metastases, oligometastatic disease, and emerging perioperative immunotherapy, while SCLC explores novel targets in a historically intractable cancer.',
      explanation: `## Resistance Mechanisms
**EGFR:**
- T790M: Use osimertinib
- C797S, MET amplification: Requires combination or next-line therapy

**ALK:**
- Sequential TKIs (alectinib → lorlatinib)
- Resistance mutations guide selection

## CNS Metastases
- Common in NSCLC (30-50%)
- TKIs with CNS penetration (osimertinib, lorlatinib)
- SRS for limited brain mets
- Immunotherapy can have CNS activity

## Oligometastatic Disease
- 1-3 metastases may benefit from local therapy
- Ablative radiation + systemic therapy
- Improved survival in retrospective studies

## Perioperative Therapy
- Neoadjuvant chemoimmunotherapy (CheckMate 816, KEYNOTE-671)
- Major pathologic response predicts outcome
- Adjuvant osimertinib for EGFR+ (ADAURA)`,
      keyTerms: [
        { term: 'oligometastatic', definition: 'Limited number of metastases potentially amenable to local treatment' },
        { term: 'SRS', definition: 'Stereotactic radiosurgery; focused radiation for brain metastases' },
        { term: 'perioperative therapy', definition: 'Treatment given before and/or after surgery' },
      ],
      clinicalNotes: 'Neoadjuvant chemoimmunotherapy is changing early-stage NSCLC management—consider for resectable tumors. ADAURA showed dramatic DFS benefit for adjuvant osimertinib in EGFR-mutant disease.',
    },
    5: {
      level: 5,
      summary: 'Precision lung cancer care integrates liquid biopsy, ctDNA-guided therapy, novel targets (KRAS, HER2, NRG1), antibody-drug conjugates, and understanding of tumor evolution and heterogeneity.',
      explanation: `## Liquid Biopsy
- Plasma EGFR testing when tissue unavailable
- ctDNA for resistance mutation detection
- Minimal residual disease assessment
- Serial monitoring of tumor evolution

## Emerging Targets
- KRAS G12C: Sotorasib, adagrasib (first KRAS-targeted drugs)
- HER2 mutations: T-DXd
- NRG1 fusions
- MET exon 14 skipping

## Antibody-Drug Conjugates
- Telisotuzumab vedotin (MET)
- Datopotamab deruxtecan (TROP2)
- T-DXd (HER2)

## SCLC Innovation
- DLL3 targeting (tarlatamab BiTE)
- Lurbinectedin for relapsed SCLC
- Biomarker development challenges

## Interception and Prevention
- Lung cancer screening expansion
- Chemoprevention trials
- Smoking cessation integration`,
      keyTerms: [
        { term: 'KRAS G12C', definition: 'Specific KRAS mutation now targetable with novel inhibitors' },
        { term: 'BiTE', definition: 'Bispecific T-cell engager; brings T cells to tumor cells' },
        { term: 'tumor evolution', definition: 'Changes in tumor genetics over time and treatment' },
      ],
      clinicalNotes: 'KRAS G12C inhibitors marked a breakthrough in targeting "undruggable" oncogenes. SCLC remains challenging but DLL3-targeted BiTEs show promise.',
    },
  },

  media: [],
  citations: [{ id: 'nccn-lung-2024', type: 'website', title: 'NCCN Guidelines for Lung Cancer', source: 'National Comprehensive Cancer Network' }],
  crossReferences: [{ targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' }],
  tags: { systems: ['respiratory'], topics: ['oncology', 'pulmonology'], keywords: ['lung cancer', 'NSCLC', 'SCLC', 'EGFR', 'immunotherapy'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default lungCancer;
