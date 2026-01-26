/**
 * Breast Cancer - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const breastCancer: EducationalContent = {
  id: 'condition-breast-cancer',
  type: 'condition',
  name: 'Breast Cancer',
  alternateNames: ['Breast Carcinoma', 'Mammary Cancer'],
  hpoId: 'HP:0003002',

  levels: {
    1: {
      level: 1,
      summary: 'Breast cancer is when cells in the breast grow out of control. It is the most common cancer in women but can be treated successfully if found early.',
      explanation: `Breast cancer starts when cells in the breast begin to grow abnormally. Finding it early greatly improves chances of successful treatment.

**Warning signs:**
- Lump in breast or armpit
- Change in breast size or shape
- Skin changes (dimpling, puckering)
- Nipple discharge or inversion
- Breast pain

**Screening:**
- Mammogram: X-ray of breast, recommended starting age 40-50
- Self-awareness of changes

**Treatment depends on type and stage:**
- Surgery (lumpectomy or mastectomy)
- Radiation
- Chemotherapy
- Hormone therapy
- Targeted therapy`,
      keyTerms: [
        { term: 'mammogram', definition: 'X-ray of the breast used to screen for cancer' },
        { term: 'mastectomy', definition: 'Surgery to remove the entire breast' },
        { term: 'lumpectomy', definition: 'Surgery to remove only the cancer and surrounding tissue' },
      ],
      analogies: ['Cancer cells are like weeds that grow out of control and can spread to other parts of the garden.'],
      examples: ['A 55-year-old woman finds a painless lump during self-exam and gets a mammogram that shows breast cancer.'],
    },
    2: {
      level: 2,
      summary: 'Breast cancer is classified by receptor status (ER, PR, HER2), histology, and stage, with treatment tailored to molecular subtype including surgery, radiation, chemotherapy, endocrine therapy, and targeted agents.',
      explanation: `## Classification

**Molecular Subtypes:**
| Subtype | ER/PR | HER2 | Prognosis |
|---------|-------|------|-----------|
| Luminal A | + | - | Best |
| Luminal B | + | +/- | Intermediate |
| HER2+ | - | + | Variable (improved with HER2 therapy) |
| Triple Negative | - | - | Worst |

**Staging:** TNM (Tumor size, Nodes, Metastases)

## Treatment

**Local:**
- Surgery: Lumpectomy + radiation OR mastectomy
- Sentinel lymph node biopsy

**Systemic:**
- Endocrine therapy (ER+): Tamoxifen, aromatase inhibitors
- HER2-targeted: Trastuzumab
- Chemotherapy: Based on stage and subtype
- CDK4/6 inhibitors (metastatic ER+)

## Screening
- Mammography every 1-2 years starting age 40-50
- MRI for high-risk patients (BRCA carriers)`,
      keyTerms: [
        { term: 'ER/PR', definition: 'Estrogen and progesterone receptors; hormone receptor status' },
        { term: 'HER2', definition: 'Human epidermal growth factor receptor 2; oncogene amplification' },
        { term: 'triple negative', definition: 'Breast cancer lacking ER, PR, and HER2; limited targeted therapy options' },
      ],
    },
    3: {
      level: 3,
      summary: 'Breast cancer molecular profiling guides adjuvant therapy decisions, with genomic assays stratifying recurrence risk and informing chemotherapy benefit, alongside neoadjuvant approaches to assess treatment response.',
      explanation: `## Molecular Profiling
**Genomic Assays:**
- Oncotype DX (21-gene): Predicts chemotherapy benefit in ER+, node-negative
- MammaPrint (70-gene): Risk stratification
- PAM50/Prosigna: Intrinsic subtype classification

## Neoadjuvant Therapy
- Chemotherapy before surgery
- Allows breast conservation
- Pathologic complete response (pCR) predicts outcome
- HER2+ and TNBC most likely to achieve pCR

## Adjuvant Endocrine Therapy
**Premenopausal:**
- Tamoxifen x 5-10 years
- +/- Ovarian suppression (if high risk)
- +/- Aromatase inhibitor after suppression

**Postmenopausal:**
- Aromatase inhibitors (anastrozole, letrozole)
- Extended therapy beyond 5 years for high risk

## Targeted Therapies
- CDK4/6 inhibitors (palbociclib, ribociclib): ER+ metastatic
- HER2 agents (trastuzumab, pertuzumab, T-DM1, T-DXd)
- PARP inhibitors (olaparib): BRCA-mutated`,
      keyTerms: [
        { term: 'Oncotype DX', definition: 'Genomic assay predicting recurrence risk and chemotherapy benefit' },
        { term: 'pCR', definition: 'Pathologic complete response; no residual invasive cancer after neoadjuvant therapy' },
        { term: 'CDK4/6 inhibitor', definition: 'Targeted therapy blocking cell cycle progression in ER+ breast cancer' },
      ],
      clinicalNotes: 'Oncotype DX intermediate scores (16-25) in TAILORx trial showed no chemotherapy benefit for most patients. pCR after neoadjuvant therapy is prognostic, especially in TNBC and HER2+.',
    },
    4: {
      level: 4,
      summary: 'Advanced breast cancer management integrates precision medicine with biomarker-directed therapy, antibody-drug conjugates, emerging immunotherapy, and management of treatment resistance.',
      explanation: `## Precision Oncology
**Biomarker Testing:**
- ESR1 mutations (acquired endocrine resistance)
- PIK3CA mutations (alpelisib eligibility)
- BRCA1/2 (PARP inhibitor eligibility)
- HER2-low (T-DXd eligibility)

## Antibody-Drug Conjugates
- T-DM1 (ado-trastuzumab emtansine): HER2+
- T-DXd (trastuzumab deruxtecan): HER2+, HER2-low
- Sacituzumab govitecan: TNBC

## Immunotherapy
- Pembrolizumab + chemo: TNBC with PD-L1 positivity
- Less effective in ER+ (immunologically "cold")

## Endocrine Resistance
**Mechanisms:**
- ESR1 mutations
- PIK3CA/AKT pathway activation
- Cell cycle dysregulation

**Treatments:**
- Fulvestrant (ER degrader)
- Elacestrant (oral SERD)
- PI3K/AKT inhibitors`,
      keyTerms: [
        { term: 'ESR1 mutation', definition: 'Estrogen receptor gene mutation causing endocrine resistance' },
        { term: 'HER2-low', definition: 'Low HER2 expression (IHC 1+ or 2+/ISH-) eligible for T-DXd' },
        { term: 'ADC', definition: 'Antibody-drug conjugate; targeted chemotherapy delivery' },
      ],
      clinicalNotes: 'HER2-low is a new actionable subgroup—test for it in metastatic disease. T-DXd has remarkable efficacy but watch for interstitial lung disease.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge breast cancer research encompasses ctDNA monitoring, novel ADCs, bispecific antibodies, vaccine approaches, and understanding mechanisms of metastasis and dormancy.',
      explanation: `## Circulating Tumor DNA (ctDNA)
- Minimal residual disease detection
- Treatment response monitoring
- Early detection of resistance mutations

## Novel Therapeutics
**Next-Generation ADCs:**
- New targets and payloads
- Optimized therapeutic windows

**Bispecific Antibodies:**
- T-cell engagers
- Dual receptor targeting

**Cancer Vaccines:**
- Personalized neoantigen vaccines
- HER2-directed vaccines

## Metastasis Biology
- Dormancy and late recurrence in ER+ disease
- Bone marrow microenvironment
- Mechanisms of organotropism

## Prevention
- Risk-reducing surgery (BRCA carriers)
- Chemoprevention (tamoxifen, raloxifene)
- Lifestyle factors (obesity, alcohol)`,
      keyTerms: [
        { term: 'ctDNA', definition: 'Circulating tumor DNA; blood-based cancer biomarker' },
        { term: 'dormancy', definition: 'State of quiescent cancer cells that can reactivate years later' },
        { term: 'neoantigen vaccine', definition: 'Personalized vaccine targeting tumor-specific mutations' },
      ],
      clinicalNotes: 'ctDNA after curative therapy may predict relapse before clinical recurrence. ER+ breast cancer can recur decades later—reflects dormancy biology.',
    },
  },

  media: [],
  citations: [{ id: 'nccn-breast-2024', type: 'website', title: 'NCCN Guidelines for Breast Cancer', source: 'National Comprehensive Cancer Network' }],
  crossReferences: [{ targetId: 'condition-ovarian-cancer', targetType: 'condition', relationship: 'related', label: 'Ovarian Cancer' }],
  tags: { systems: ['reproductive'], topics: ['oncology'], keywords: ['breast cancer', 'HER2', 'mammogram', 'chemotherapy', 'mastectomy'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default breastCancer;
