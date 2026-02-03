/**
 * Breast Cancer Educational Content
 *
 * Comprehensive coverage of breast cancer including:
 * - Risk factors and genetics (BRCA1/2)
 * - Screening and diagnosis
 * - Molecular subtypes and treatment approaches
 * - Surgical and systemic therapy options
 */

import { EducationalContent } from '../../../types';

export const breastCancerContent: EducationalContent = {
  id: 'oncology-breast-cancer',
  type: 'condition',
  name: 'Breast Cancer',
  alternateNames: ['Mammary carcinoma', 'Breast carcinoma', 'Breast malignancy'],

  levels: {
    1: {
      level: 1,
      summary: 'Breast cancer is when cells in the breast grow out of control and form a tumor that can spread to other parts of the body.',
      explanation: `Breast cancer is one of the most common cancers. It happens when cells in the breast start growing too fast and don't stop when they should.

**Who Can Get Breast Cancer:**
- Mostly women, but men can get it too (rare)
- More common after age 50
- Family history can increase risk

**Warning Signs:**
- A new lump in the breast or armpit
- Change in size or shape of the breast
- Skin changes (dimpling, redness)
- Nipple discharge or changes
- Breast pain (less common)

**Finding Breast Cancer Early:**
- **Mammogram**: X-ray of the breast (recommended screening)
- **Self-exams**: Know how your breasts normally look and feel
- **Doctor exams**: Regular check-ups

**Treatment Options:**
- **Surgery**: Remove the cancer
- **Radiation**: High-energy rays to kill remaining cancer cells
- **Chemotherapy**: Medicines that kill cancer cells
- **Hormone therapy**: For cancers that grow with hormones
- **Targeted therapy**: Medicines that attack specific cancer features

**The Good News:**
- When found early, breast cancer is very treatable
- Many people survive and live long, healthy lives
- Treatment options keep getting better`,
      keyTerms: [
        { term: 'mammogram', definition: 'An X-ray picture of the breast used to find cancer early' },
        { term: 'lump', definition: 'A mass or growth in the breast that may or may not be cancer' },
        { term: 'biopsy', definition: 'Taking a small piece of tissue to check if it is cancer' },
        { term: 'mastectomy', definition: 'Surgery to remove the whole breast' },
      ],
      analogies: [
        'A mammogram is like a metal detector scanning for hidden objects - it finds problems you cannot see or feel.',
        'Finding cancer early is like catching a small fire before it spreads - much easier to put out.',
      ],
      examples: [
        'A 55-year-old woman finds a painless lump during her monthly self-exam and sees her doctor right away.',
        'A routine mammogram finds a tiny cancer that cannot be felt, allowing treatment before it spreads.',
      ],
    },
    2: {
      level: 2,
      summary: 'Breast cancer develops from breast tissue, with different types based on where it starts and whether it has spread, guiding treatment decisions.',
      explanation: `**Types of Breast Cancer:**

*By Location:*
- **Ductal carcinoma**: Starts in milk ducts (most common, ~80%)
- **Lobular carcinoma**: Starts in milk-producing glands (~10-15%)
- **Inflammatory breast cancer**: Rare, aggressive type

*By Spread:*
- **In situ (DCIS/LCIS)**: Cancer cells stay in place, have not invaded
- **Invasive**: Cancer has spread into surrounding breast tissue
- **Metastatic**: Cancer has spread to distant organs

**Risk Factors:**
- Age (risk increases with age)
- Family history (especially BRCA mutations)
- Early menstruation or late menopause
- Never having children or late first pregnancy
- Hormone replacement therapy
- Obesity and alcohol use

**Diagnosis:**
1. Imaging: Mammogram, ultrasound, MRI
2. Biopsy: Core needle biopsy to confirm cancer
3. Pathology: Determine type and receptor status

**Receptor Status (very important):**
- **ER/PR positive**: Cancer grows with estrogen/progesterone
- **HER2 positive**: Cancer has extra HER2 protein
- **Triple negative**: No ER, PR, or HER2 (harder to treat)

**Treatment Based on Type:**
- ER/PR positive: Hormone therapy (tamoxifen, aromatase inhibitors)
- HER2 positive: Targeted therapy (trastuzumab/Herceptin)
- Triple negative: Chemotherapy, immunotherapy

**Staging:**
- Stage 0: DCIS (non-invasive)
- Stage I-II: Early stage, cancer in breast +/- nearby lymph nodes
- Stage III: Locally advanced
- Stage IV: Metastatic (spread to distant organs)`,
      keyTerms: [
        { term: 'ductal carcinoma', definition: 'Breast cancer that starts in the milk ducts', pronunciation: 'DUK-tal kar-sin-OH-ma' },
        { term: 'estrogen receptor (ER)', definition: 'Protein on cells that binds estrogen; ER-positive cancers grow with estrogen' },
        { term: 'HER2', definition: 'Growth factor receptor; HER2-positive cancers have too much of this protein' },
        { term: 'triple negative', definition: 'Breast cancer lacking ER, PR, and HER2 receptors' },
        { term: 'sentinel node', definition: 'First lymph node where cancer would spread; tested during surgery' },
      ],
      analogies: [
        'Receptor status is like knowing what fuel a car uses - you need the right treatment for the right type.',
        'Sentinel node biopsy is like checking the first stop on a highway to see if traffic (cancer) has passed through.',
      ],
    },
    3: {
      level: 3,
      summary: 'Breast cancer molecular subtypes guide prognosis and therapy selection, with treatment integrating surgery, radiation, systemic therapy, and targeted agents.',
      explanation: `**Molecular Subtypes:**

*Luminal A:*
- ER+/PR+, HER2-, low Ki-67 (<14%)
- Best prognosis
- Often hormone therapy alone sufficient

*Luminal B:*
- ER+/PR+/-, HER2+/-, high Ki-67
- Higher recurrence risk
- Often needs chemotherapy plus endocrine therapy

*HER2-enriched:*
- ER-/PR-, HER2+
- Aggressive but highly treatable with anti-HER2 therapy
- Trastuzumab, pertuzumab, T-DM1, T-DXd

*Basal-like (Triple Negative):*
- ER-/PR-, HER2-
- Higher grade, younger patients
- Chemotherapy primary treatment
- PARP inhibitors if BRCA mutated
- Immunotherapy (pembrolizumab) with chemo

**Genetic Risk:**
- BRCA1/2 mutations: 50-85% lifetime risk
- Other genes: PALB2, CHEK2, ATM, TP53
- Genetic counseling and testing important

**Surgical Options:**
- Breast-conserving surgery (lumpectomy) + radiation
- Mastectomy (simple, modified radical, skin-sparing)
- Oncoplastic techniques
- Reconstruction options (immediate vs delayed)

**Axillary Management:**
- Sentinel lymph node biopsy (SLNB) for clinically node-negative
- Axillary lymph node dissection if positive nodes
- ACOSOG Z0011: Can omit ALND for 1-2 positive SLN with planned whole breast radiation

**Systemic Therapy:**

*Neoadjuvant (before surgery):*
- Preferred for large tumors or inflammatory breast cancer
- Allows response assessment (pathologic complete response = better prognosis)
- May allow less extensive surgery

*Adjuvant (after surgery):*
- Based on stage, subtype, genomic testing
- Oncotype DX: 21-gene recurrence score for ER+/HER2-
- MammaPrint: 70-gene signature

**Endocrine Therapy:**
- Premenopausal: Tamoxifen +/- ovarian suppression
- Postmenopausal: Aromatase inhibitors (anastrozole, letrozole, exemestane)
- Duration: 5-10 years depending on risk

**Radiation Therapy:**
- After lumpectomy: Whole breast +/- boost
- Post-mastectomy: If positive margins, large tumor, or node-positive
- Hypofractionation increasingly used`,
      keyTerms: [
        { term: 'Ki-67', definition: 'Proliferation marker; percentage of actively dividing cells' },
        { term: 'Oncotype DX', definition: '21-gene assay predicting recurrence risk and chemotherapy benefit in ER+ breast cancer' },
        { term: 'pathologic complete response', definition: 'No residual invasive cancer in breast or nodes after neoadjuvant therapy' },
        { term: 'aromatase inhibitor', definition: 'Drug blocking estrogen production in postmenopausal women' },
        { term: 'T-DM1', definition: 'Trastuzumab-emtansine; antibody-drug conjugate for HER2+ breast cancer' },
      ],
      clinicalNotes: 'TAILORx trial showed low Oncotype scores (0-25) can safely avoid chemotherapy. HER2-low is a new category allowing trastuzumab-deruxtecan treatment.',
    },
    4: {
      level: 4,
      summary: 'Advanced breast cancer management requires integration of molecular profiling, targeted therapies, CDK4/6 inhibitors, and emerging agents based on evolving trial data.',
      explanation: `**Precision Medicine Approach:**

*Genomic Profiling:*
- Next-generation sequencing for targetable mutations
- ESR1 mutations: Resistance to aromatase inhibitors (consider fulvestrant)
- PIK3CA mutations: Alpelisib indicated
- AKT pathway alterations: Capivasertib
- BRCA1/2 mutations: PARP inhibitors (olaparib, talazoparib)

*Circulating Tumor DNA (ctDNA):*
- Monitoring treatment response
- Early detection of resistance
- ESR1 mutation detection

**Metastatic Breast Cancer:**

*ER+/HER2- Metastatic:*
- First-line: CDK4/6 inhibitor + aromatase inhibitor
  - Palbociclib, ribociclib, abemaciclib
  - Significant PFS improvement
- Second-line options: Fulvestrant, everolimus, other targeted agents
- Late lines: Chemotherapy (capecitabine, eribulin)

*HER2+ Metastatic:*
- First-line: Taxane + trastuzumab + pertuzumab
- Second-line: T-DM1 (ado-trastuzumab emtansine)
- Subsequent: T-DXd, tucatinib combinations, neratinib, lapatinib
- CNS metastases: Tucatinib + trastuzumab + capecitabine

*Triple Negative Metastatic:*
- PD-L1 positive: Pembrolizumab + chemotherapy
- BRCA mutated: PARP inhibitors
- Sacituzumab govitecan (Trop-2 antibody-drug conjugate)
- Chemotherapy backbone

**HER2-Low Category:**
- IHC 1+ or IHC 2+/ISH negative
- Previously considered HER2-negative
- DESTINY-Breast04: T-DXd effective in HER2-low
- Expanding treatment options for previously limited population

**Treatment Considerations:**

*Quality of Life:*
- Balancing efficacy with toxicity
- Patient preferences paramount
- Palliative care integration

*Bone Metastases:*
- Bisphosphonates (zoledronic acid) or denosumab
- Radiation for pain control
- Surgical stabilization if needed

*CNS Metastases:*
- Increasing incidence with improved systemic control
- Stereotactic radiosurgery, whole brain radiation
- Systemic agents with CNS penetration

**Emerging Areas:**
- Antibody-drug conjugates (ADCs)
- Bispecific antibodies
- Immunotherapy combinations
- CDK2 inhibitors
- Novel endocrine approaches`,
      keyTerms: [
        { term: 'CDK4/6 inhibitor', definition: 'Targeted therapy blocking cyclin-dependent kinases 4 and 6, preventing cell cycle progression' },
        { term: 'ESR1 mutation', definition: 'Estrogen receptor gene mutation causing resistance to aromatase inhibitors' },
        { term: 'ctDNA', definition: 'Circulating tumor DNA; cell-free DNA shed by tumors into blood' },
        { term: 'T-DXd', definition: 'Trastuzumab deruxtecan; HER2-targeted antibody-drug conjugate' },
        { term: 'HER2-low', definition: 'Low HER2 expression (IHC 1+ or 2+/ISH-); newly targetable category' },
      ],
      clinicalNotes: 'DESTINY-Breast04 established T-DXd for HER2-low, expanding targeted therapy to previously chemotherapy-only patients. Monitor for interstitial lung disease with T-DXd.',
    },
    5: {
      level: 5,
      summary: 'Breast cancer represents a heterogeneous disease requiring multimodal, biomarker-driven therapy with ongoing evolution in ADC development, immunotherapy integration, and resistance management.',
      explanation: `**Current Research Frontiers:**

*Antibody-Drug Conjugates (ADCs):*
- T-DXd: Deruxtecan payload, high drug-to-antibody ratio, bystander effect
  - DESTINY-Breast trials reshaping treatment paradigm
  - ILD risk: 10-15%, monitor closely
- Sacituzumab govitecan: TROP2-directed, SN-38 payload
  - ASCENT trial: TNBC after prior therapies
  - TROPHY-U-01: HR+/HER2- breast cancer
- Datopotamab deruxtecan (Dato-DXd): TROP2-directed, under investigation

*Immunotherapy Integration:*
- KEYNOTE-522: Pembrolizumab + chemo neoadjuvant/adjuvant in TNBC
  - pCR and EFS benefit
  - Continued adjuvant pembrolizumab
- CheckMate trials: Nivolumab investigations
- Biomarkers beyond PD-L1: TILs, TMB, immune gene signatures

*Endocrine Resistance Mechanisms:*
- ESR1 mutations: Y537S, D538G most common
- Loss of ER expression
- Upregulation of alternative growth pathways
- Elacestrant: Oral SERD active in ESR1-mutant tumors

*CDK4/6 Inhibitor Resistance:*
- RB1 loss
- CDK6 amplification
- Cell cycle pathway alterations
- Combination strategies to overcome

**Surgical Innovations:**

*De-escalation Trials:*
- ACOSOG Z0011: Omitting ALND
- AMAROS: Axillary RT vs ALND
- SOUND: Omitting SLNB in low-risk patients
- NeoST: Sentinel node after neoadjuvant

*Response-Guided Surgery:*
- Vacuum-assisted biopsy after neoadjuvant
- Targeted axillary dissection
- Breast conservation after neoadjuvant

**Radiation Advances:**

*Hypofractionation:*
- FAST, FAST-Forward trials
- 26 Gy in 5 fractions emerging
- Comparable outcomes, patient convenience

*Partial Breast Irradiation:*
- APBI for low-risk tumors
- IORT (intraoperative radiation therapy)

*Omission Trials:*
- PRIME II: Omit RT in elderly low-risk
- LUMINA: Active trial

**Liquid Biopsy Applications:**

*ctDNA for MRD Detection:*
- Post-surgery molecular residual disease
- Predicting recurrence before clinical detection
- Guiding adjuvant therapy decisions

*Treatment Monitoring:*
- Early response assessment
- Resistance mutation detection
- Clonal evolution tracking

**Ongoing Clinical Trials:**

*Key Areas:*
- Novel ADCs and payloads
- Bispecific antibodies (HER2 x CD3)
- CDK2 inhibitors post-CDK4/6 inhibitor
- Novel combinations in TNBC
- Vaccine approaches
- CAR-T cell therapy

*Predictive Biomarker Development:*
- Beyond Oncotype DX and MammaPrint
- Multi-omic profiling
- AI-driven treatment selection

**Survivorship and Long-term Management:**

*Late Effects:*
- Cardiotoxicity monitoring (anthracyclines, trastuzumab)
- Bone health (AI-induced osteoporosis)
- Cognitive effects
- Lymphedema management
- Fertility considerations

*Surveillance:*
- Annual mammography
- Clinical exam
- Symptom monitoring (not routine imaging for metastases)`,
      keyTerms: [
        { term: 'bystander effect', definition: 'ADC payload killing neighboring cells without target antigen' },
        { term: 'MRD', definition: 'Minimal/molecular residual disease; detectable cancer after curative treatment' },
        { term: 'TILs', definition: 'Tumor-infiltrating lymphocytes; immune cells in tumor predicting immunotherapy response' },
        { term: 'SERD', definition: 'Selective estrogen receptor degrader; degrades ER rather than blocking it' },
        { term: 'pCR', definition: 'Pathologic complete response; no invasive cancer in surgical specimen after neoadjuvant therapy' },
      ],
      clinicalNotes: 'Current practice emphasizes biomarker-driven therapy selection. HER2-low and emerging molecular markers are expanding targeted therapy options. ADC toxicity profiles require vigilant monitoring. Multidisciplinary tumor boards essential for complex cases.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['breast', 'endocrine'],
    topics: ['oncology', 'breast cancer', 'targeted therapy'],
    keywords: ['BRCA', 'HER2', 'triple negative', 'hormone receptor', 'CDK4/6'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
