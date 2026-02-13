import { EducationalContent } from '../../../types';

export const breastCancerContent: EducationalContent = {
  id: 'reproductive-breast-cancer',
  type: 'condition',
  name: 'Breast Cancer',
  alternateNames: ['Breast carcinoma', 'Mammary carcinoma', 'Breast malignancy'],
  levels: {
    1: {
      level: 1,
      summary: 'Breast cancer is when cells in the breast grow out of control and form a tumor. It is one of the most common cancers but can often be treated successfully when found early.',
      explanation: `Breast cancer happens when cells in the breast start growing in a way they shouldn't. These abnormal cells can form a lump called a tumor.

**Understanding Breast Cancer:**

**What Happens:**
- Normal breast cells grow, divide, and die in an orderly way
- Cancer cells keep growing and dividing when they shouldn't
- These cells can form a lump (tumor) in the breast
- Sometimes cancer cells can spread to other parts of the body

**Warning Signs to Watch For:**
- A new lump in the breast or armpit
- Changes in breast size or shape
- Dimpling or puckering of the skin
- Nipple changes (turning inward, discharge, or skin changes)
- Breast pain that doesn't go away

**Who Can Get It:**
- Mostly affects women, but men can get it too (rare)
- More common as people get older
- Some people have higher risk due to family history

**The Good News:**
- When found early, breast cancer is very treatable
- Screening (mammograms) can find cancer before symptoms appear
- Many people with breast cancer go on to live long, healthy lives
- There are many treatment options available

**What You Can Do:**
- Know how your breasts normally look and feel
- Report any changes to a doctor
- Get recommended screening mammograms
- Maintain a healthy lifestyle`,
      keyTerms: [
        { term: 'Tumor', definition: 'An abnormal growth of tissue; can be cancerous (malignant) or non-cancerous (benign)' },
        { term: 'Mammogram', definition: 'An X-ray picture of the breast used to check for cancer' },
        { term: 'Lump', definition: 'A bump or mass in the breast that feels different from surrounding tissue' },
        { term: 'Benign', definition: 'Not cancer; a growth that won\'t spread to other parts of the body' },
      ],
      analogies: [
        'Think of cancer cells like weeds in a garden - they grow out of control and can spread if not removed',
        'Early detection is like finding a small weed before it takes over the whole garden',
      ],
      patientCounselingPoints: [
        'Finding a lump doesn\'t always mean cancer - many breast lumps are not cancerous',
        'Talk to your doctor about when to start mammogram screening',
        'Early detection greatly improves outcomes',
      ],
    },
    2: {
      level: 2,
      summary: 'Breast cancer develops when breast cells acquire mutations that allow uncontrolled growth. The main types include ductal and lobular carcinoma, classified by where they start and whether they have spread.',
      explanation: `Breast cancer is a malignant tumor that develops from breast tissue, most commonly from the milk ducts or lobules.

**Breast Anatomy Review:**
- **Ducts**: Tubes that carry milk to the nipple
- **Lobules**: Glands that produce milk
- **Stroma**: Fatty and connective tissue surrounding ducts and lobules

**Types of Breast Cancer:**

**By Location:**
- **Ductal carcinoma**: Starts in milk ducts (most common - about 80%)
- **Lobular carcinoma**: Starts in milk-producing lobules (about 10-15%)

**By Spread:**
- **In situ** (non-invasive): Cancer cells stay in their original location
  - DCIS (Ductal Carcinoma In Situ)
  - LCIS (Lobular Carcinoma In Situ)
- **Invasive**: Cancer has grown beyond the ducts/lobules into surrounding tissue
  - Can spread to lymph nodes and other organs

**Risk Factors:**
- Age (risk increases with age)
- Family history (especially BRCA1/BRCA2 gene mutations)
- Personal history of breast cancer or certain benign conditions
- Early menstruation or late menopause
- Dense breast tissue
- Hormone replacement therapy
- Obesity and alcohol use
- Previous chest radiation

**Staging (How Far It Has Spread):**
- Stage 0: Non-invasive (in situ)
- Stage I: Small tumor, no lymph node involvement
- Stage II: Larger tumor or spread to nearby lymph nodes
- Stage III: Extensive lymph node involvement
- Stage IV: Spread to distant organs (metastatic)

**Treatment Approaches:**
- Surgery (lumpectomy or mastectomy)
- Radiation therapy
- Chemotherapy
- Hormone therapy (for hormone-positive cancers)
- Targeted therapy
- Immunotherapy (for some types)`,
      keyTerms: [
        { term: 'Ductal carcinoma', definition: 'Cancer that begins in the milk ducts of the breast' },
        { term: 'Lobular carcinoma', definition: 'Cancer that begins in the milk-producing lobules' },
        { term: 'In situ', definition: 'Cancer cells that have not spread beyond where they started; "in place"' },
        { term: 'Invasive', definition: 'Cancer that has spread beyond its original location into surrounding tissue' },
        { term: 'Metastatic', definition: 'Cancer that has spread to distant parts of the body' },
        { term: 'BRCA genes', definition: 'Genes that normally help repair DNA; mutations increase breast and ovarian cancer risk' },
      ],
      examples: [
        'A woman with a BRCA1 mutation has up to a 70% lifetime risk of developing breast cancer compared to about 12% in the general population',
        'DCIS found on mammogram represents cancer that hasn\'t spread and has excellent prognosis with treatment',
      ],
    },
    3: {
      level: 3,
      summary: 'Breast cancer is classified by histology, grade, stage, and molecular subtypes (Luminal A/B, HER2-enriched, Triple-negative), which guide prognosis and treatment selection.',
      explanation: `Breast cancer classification integrates histopathology, molecular profiling, and staging to guide clinical management.

**Histological Classification:**

**Ductal Carcinomas**
- **DCIS**: Malignant cells confined to ducts; precursor to invasive disease
- **Invasive ductal carcinoma (IDC)**: Most common (70-80% of cases)
  - Also called "no special type" (NST)

**Lobular Carcinomas**
- **LCIS**: Risk marker rather than precursor; bilateral risk
- **Invasive lobular carcinoma (ILC)**: 10-15% of cases
  - Loss of E-cadherin expression (CDH1 mutation)
  - Single-file infiltration pattern

**Special Histologic Types**
- Tubular, mucinous, medullary: Generally better prognosis
- Inflammatory breast cancer: Aggressive, presents with skin changes
- Paget disease: Involves nipple epidermis

**Molecular Subtypes:**

| Subtype | ER | PR | HER2 | Ki-67 | Prognosis | Treatment |
|---------|----|----|------|-------|-----------|-----------|
| Luminal A | + | + | - | Low | Best | Endocrine |
| Luminal B | + | +/- | +/- | High | Intermediate | Endocrine ± chemo |
| HER2-enriched | - | - | + | High | Poor→improved with targeted Rx | Anti-HER2 + chemo |
| Triple-negative (Basal-like) | - | - | - | High | Poorest | Chemotherapy |

**Receptor Biology:**
- **ER/PR (Estrogen/Progesterone receptors)**: Predict response to endocrine therapy
- **HER2 (Human Epidermal Growth Factor Receptor 2)**: Oncogene amplification; targeted by trastuzumab
- **Ki-67**: Proliferation marker; helps distinguish Luminal A vs B

**Tumor Grading (Nottingham/Bloom-Richardson):**
- Based on: Tubule formation, nuclear pleomorphism, mitotic count
- Grade 1: Well-differentiated (best prognosis)
- Grade 2: Moderately differentiated
- Grade 3: Poorly differentiated (worst prognosis)

**TNM Staging:**
- **T**: Tumor size (T1: ≤2cm, T2: 2-5cm, T3: >5cm, T4: chest wall/skin)
- **N**: Nodal involvement (N0-N3 based on number and location)
- **M**: Distant metastasis (M0 or M1)
- Common metastatic sites: Bone, lung, liver, brain

**Prognostic Gene Expression Assays:**
- Oncotype DX: 21-gene recurrence score; guides chemotherapy decisions in ER+ early-stage
- MammaPrint: 70-gene signature
- PAM50/Prosigna: Intrinsic subtype classification`,
      keyTerms: [
        { term: 'Luminal A', definition: 'ER+/PR+/HER2-/low Ki-67 subtype with best prognosis; responsive to endocrine therapy' },
        { term: 'Triple-negative', definition: 'ER-/PR-/HER2- breast cancer; limited targeted therapy options, requires chemotherapy' },
        { term: 'HER2-positive', definition: 'Breast cancer with HER2 gene amplification; treated with anti-HER2 targeted agents' },
        { term: 'Oncotype DX', definition: 'Genomic test providing recurrence score to guide chemotherapy decisions in early ER+ breast cancer' },
        { term: 'E-cadherin', definition: 'Cell adhesion protein; loss characterizes lobular carcinomas' },
        { term: 'Ki-67', definition: 'Nuclear protein marker of cell proliferation; higher levels indicate more aggressive tumors' },
      ],
      examples: [
        'A postmenopausal woman with a 1.5 cm ER+/PR+/HER2-, grade 1 tumor with low Oncotype DX score (≤25) may benefit from endocrine therapy alone without chemotherapy',
        'Inflammatory breast cancer (T4d) presents with peau d\'orange skin changes due to dermal lymphatic invasion; requires neoadjuvant chemotherapy',
      ],
    },
    4: {
      level: 4,
      summary: 'Breast cancer pathogenesis involves sequential genetic alterations in oncogenes and tumor suppressors, with molecular pathways including PI3K/AKT, RAS/MAPK, and cell cycle dysregulation determining tumor behavior and therapeutic vulnerabilities.',
      explanation: `**Molecular Pathogenesis:**

**Carcinogenesis Models**
- Linear progression model: Normal → hyperplasia → ADH → DCIS → invasive carcinoma
- Molecular evidence suggests parallel evolution of some subtypes
- Different molecular subtypes may represent distinct diseases

**Key Genetic Alterations:**

**Oncogenes**
- **HER2/ERBB2**: Amplified in 15-20%; receptor tyrosine kinase
- **PIK3CA**: Mutated in ~40% of ER+ tumors; activates PI3K/AKT pathway
- **CCND1**: Cyclin D1 amplification; drives cell cycle progression
- **MYC**: Amplified in aggressive subtypes

**Tumor Suppressors**
- **TP53**: Mutated in 30% overall, ~80% in TNBC
- **RB1**: Retinoblastoma gene; cell cycle checkpoint
- **PTEN**: PI3K pathway negative regulator
- **CDH1**: E-cadherin; mutated/silenced in ILC

**Hereditary Breast Cancer:**
- **BRCA1** (17q21): DNA repair (HR pathway); associated with TNBC
- **BRCA2** (13q12): DNA repair; associated with ER+ cancers
- **PALB2**: BRCA2 partner; moderate-high penetrance
- **CHEK2, ATM**: Moderate penetrance genes
- **TP53** (Li-Fraumeni): Very high penetrance

**Signaling Pathways:**

**ER Signaling**
- Estrogen binds ER → dimerization → DNA binding at EREs
- Coactivators recruited → gene transcription
- Genomic and non-genomic (membrane) signaling
- Crosstalk with growth factor pathways

**PI3K/AKT/mTOR Pathway**
- Activated in majority of breast cancers
- PIK3CA mutations, PTEN loss
- mTOR drives protein synthesis and growth
- Target for everolimus, alpelisib

**HER2 Signaling**
- No known ligand; activated by dimerization
- HER2/HER3 heterodimer most potent
- Activates RAS/MAPK and PI3K/AKT
- Target for trastuzumab, pertuzumab, TDM-1, TDXd

**Cell Cycle Regulation**
- Cyclin D-CDK4/6 phosphorylates Rb → E2F release → S phase
- CDK4/6 inhibitors (palbociclib, ribociclib, abemaciclib)
- Effective in ER+ disease

**Tumor Microenvironment:**
- Cancer-associated fibroblasts: Promote invasion and metastasis
- Tumor-infiltrating lymphocytes (TILs): Prognostic in TNBC and HER2+
- Tumor-associated macrophages: Often immunosuppressive (M2)
- Angiogenesis via VEGF signaling

**Mechanisms of Resistance:**
- ESR1 mutations: ER mutations causing ligand-independent activation; emerge on AI therapy
- HER2 resistance: Truncated p95HER2, downstream mutations
- Endocrine therapy: Activation of alternative growth factor signaling
- CDK4/6 inhibitor: RB1 loss, cyclin E amplification`,
      keyTerms: [
        { term: 'PIK3CA', definition: 'Gene encoding PI3K catalytic subunit; frequently mutated in ER+ breast cancer, target of alpelisib' },
        { term: 'ESR1 mutation', definition: 'Acquired mutation in estrogen receptor gene causing constitutive activation; mechanism of endocrine resistance' },
        { term: 'Homologous recombination deficiency', definition: 'DNA repair defect (e.g., BRCA mutation) creating sensitivity to PARP inhibitors and platinum chemotherapy' },
        { term: 'CDK4/6 inhibitors', definition: 'Drugs blocking cyclin D-CDK4/6 complex; standard of care in ER+/HER2- metastatic breast cancer' },
        { term: 'Tumor-infiltrating lymphocytes', definition: 'Immune cells within tumor; high TILs associated with better outcomes in TNBC and HER2+ disease' },
      ],
      clinicalNotes: 'The TAILORx trial demonstrated that women with ER+/HER2- node-negative breast cancer and Oncotype DX recurrence score 11-25 derive minimal benefit from chemotherapy added to endocrine therapy. RxPONDER showed similar results for patients with 1-3 positive nodes and RS ≤25, particularly in postmenopausal women.',
    },
    5: {
      level: 5,
      summary: 'Contemporary breast cancer management requires multidisciplinary care integrating risk stratification, molecular diagnostics, precision therapeutics targeting specific alterations, and increasingly personalized approaches including ctDNA monitoring and novel antibody-drug conjugates.',
      explanation: `**Diagnostic Workup:**

**Imaging**
- Diagnostic mammography and ultrasound
- MRI: High-risk screening, extent of disease, occult primary
- Staging: CT chest/abdomen/pelvis, bone scan (or PET-CT) for ≥Stage IIB

**Pathology**
- Core needle biopsy preferred over FNA
- ER, PR (Allred score or % positive), HER2 (IHC and/or FISH)
- Ki-67 for Luminal subtyping
- Grade (Nottingham)
- Additional markers: PD-L1 (CPS for TNBC), gBRCA if eligible

**Germline Testing Indications**
- Age ≤50 at diagnosis
- Triple-negative breast cancer
- Bilateral or male breast cancer
- Family history meeting criteria
- Ashkenazi Jewish ancestry
- All metastatic breast cancer (therapeutic implications)

**Surgical Management:**

**Breast Conservation**
- Lumpectomy + radiation equivalent to mastectomy for early-stage
- Contraindications: Multicentric disease, prior radiation, large tumor:breast ratio
- Oncoplastic techniques expand eligibility

**Mastectomy**
- Total (simple) vs. skin-sparing vs. nipple-sparing
- Reconstruction: Implant-based or autologous (DIEP, TRAM)
- Contralateral prophylactic: Consider for BRCA carriers, not routine

**Axillary Management**
- Sentinel lymph node biopsy (SLNB) standard for cN0
- ACOSOG Z0011: SLNB alone if ≤2 positive SLN with BCT planned
- Axillary dissection for ≥3 positive nodes, cN+ disease

**Systemic Therapy:**

**Neoadjuvant Setting**
- HER2+: Anti-HER2 therapy + chemotherapy; pCR predicts outcome
- TNBC: Pembrolizumab + chemotherapy (KEYNOTE-522)
- ER+: Consider for downstaging; chemotherapy or endocrine

**Adjuvant Endocrine Therapy (ER+)**
- Premenopausal: Tamoxifen × 5-10 years; consider OFS + AI if high-risk
- Postmenopausal: AI (anastrozole, letrozole, exemestane) × 5-10 years
- Extended therapy: Based on recurrence risk

**Adjuvant Chemotherapy**
- Anthracycline ± taxane regimens (AC-T, TC)
- Oncotype DX/MammaPrint guide decisions in ER+/HER2- early-stage
- Dose-dense regimens for high-risk

**Adjuvant Targeted Therapy**
- HER2+: Trastuzumab × 1 year; pertuzumab if node-positive
- High-risk HER2+ after neoadjuvant: T-DM1 if residual disease (KATHERINE)
- TNBC: Pembrolizumab if used neoadjuvantly; capecitabine if residual disease

**Metastatic Disease:**

**ER+/HER2-**
- First-line: CDK4/6 inhibitor + AI (or fulvestrant if prior AI)
- PIK3CA mutated: Alpelisib + fulvestrant
- ESR1 mutated: Elacestrant (oral SERD)
- BRCA mutation: PARP inhibitor (olaparib, talazoparib)
- Late-line: Chemotherapy, sacituzumab govitecan (Trop-2 ADC)

**HER2+**
- First-line: Taxane + trastuzumab + pertuzumab
- Second-line: T-DXd (trastuzumab deruxtecan)
- Third-line: Tucatinib + trastuzumab + capecitabine
- Brain metastases: Tucatinib regimen, T-DXd

**TNBC**
- First-line: Pembrolizumab + chemotherapy if PD-L1 CPS ≥10
- gBRCA mutated: PARP inhibitor
- Sacituzumab govitecan: Second-line and beyond

**Emerging Approaches:**
- ctDNA monitoring for MRD and early relapse detection
- Antibody-drug conjugates: T-DXd, SG, datopotamab deruxtecan
- HER2-low targeting: T-DXd effective in HER2-low (IHC 1+ or 2+/FISH-)
- Novel endocrine agents: Oral SERDs, novel SERMs
- Immunotherapy combinations in TNBC and beyond
- ADC combinations and sequencing strategies`,
      keyTerms: [
        { term: 'T-DXd', definition: 'Trastuzumab deruxtecan; HER2-targeted antibody-drug conjugate with topoisomerase I payload; active in HER2+ and HER2-low disease' },
        { term: 'Sacituzumab govitecan', definition: 'Trop-2-directed ADC with SN-38 payload; approved for metastatic TNBC and HR+/HER2- breast cancer' },
        { term: 'HER2-low', definition: 'IHC 1+ or IHC 2+/FISH-negative; new treatment category for T-DXd eligibility' },
        { term: 'pCR', definition: 'Pathologic complete response; absence of invasive cancer in breast and nodes after neoadjuvant therapy; prognostic marker' },
        { term: 'PARP inhibitors', definition: 'Drugs exploiting synthetic lethality in BRCA-mutated tumors; olaparib, talazoparib approved' },
        { term: 'ctDNA', definition: 'Circulating tumor DNA; blood-based biomarker for MRD detection and monitoring' },
      ],
      clinicalNotes: 'The DESTINY-Breast04 trial established T-DXd as effective in HER2-low metastatic breast cancer, expanding treatment options for approximately 50% of patients previously considered HER2-negative. CPS scoring for PD-L1 (Combined Positive Score including tumor cells and immune cells) is now standard for TNBC pembrolizumab eligibility. Olaparib (OlympiA) showed improved iDFS in adjuvant setting for high-risk gBRCA-mutated early breast cancer.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'article',
      title: 'NCCN Clinical Practice Guidelines in Oncology: Breast Cancer',
      source: 'National Comprehensive Cancer Network',
      url: 'https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1419',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'Breast Cancer: Lancet Seminar',
      source: 'The Lancet',
      authors: ['Harbeck, N.', 'Gnant, M.'],
      url: 'https://doi.org/10.1016/S0140-6736(16)31891-8',
    },
  ],
  crossReferences: [
    { targetId: 'reproductive-breast-screening', targetType: 'topic', relationship: 'related', label: 'Breast Screening' },
    { targetId: 'reproductive-benign-breast', targetType: 'condition', relationship: 'related', label: 'Benign Breast Conditions' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['oncology', 'pathology', 'breast'],
    keywords: ['breast cancer', 'carcinoma', 'mammogram', 'mastectomy', 'HER2', 'ER positive', 'triple negative', 'BRCA'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'obstetrics-gynecology', 'medicine'],
    },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
