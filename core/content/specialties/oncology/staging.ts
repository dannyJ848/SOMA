/**
 * Cancer Staging Educational Content
 *
 * Comprehensive coverage of TNM staging system including:
 * - Staging principles and rationale
 * - T, N, M classifications
 * - Stage groupings
 * - Clinical vs pathological staging
 */

import { EducationalContent } from '../../types';

export const tnmStagingContent: EducationalContent = {
  id: 'oncology-tnm-staging',
  type: 'concept',
  name: 'TNM Cancer Staging System',
  alternateNames: ['Cancer staging', 'AJCC staging', 'Tumor staging'],

  levels: {
    1: {
      level: 1,
      summary: 'Cancer staging is a way to describe how big a cancer is and whether it has spread.',
      explanation: `When doctors find cancer, they need to figure out how much cancer there is and where it is. This is called staging. Think of it like describing how far a fire has spread in a building.

**Why Staging Matters:**
- Helps doctors plan the best treatment
- Gives you an idea of what to expect
- Helps compare results between patients
- Allows doctors to speak a common language about cancer

**The Basic Stages:**
- **Stage 0**: Very early cancer that hasn't spread at all (sometimes called "in situ")
- **Stage I**: Small cancer in one place
- **Stage II**: Larger cancer but still in one area
- **Stage III**: Cancer has spread to nearby areas
- **Stage IV**: Cancer has spread to distant parts of the body

**The TNM System:**
Doctors use three letters to describe cancer:
- **T** = Tumor: How big is the main cancer?
- **N** = Nodes: Has it spread to nearby lymph nodes?
- **M** = Metastasis: Has it spread to distant organs?`,
      keyTerms: [
        { term: 'stage', definition: 'A description of how much cancer is in the body' },
        { term: 'tumor', definition: 'The main mass of cancer cells' },
        { term: 'lymph nodes', definition: 'Small bean-shaped organs that filter body fluid and can be a place cancer spreads to first' },
        { term: 'metastasis', definition: 'Cancer that has spread from where it started to a distant part of the body' },
      ],
      analogies: [
        'Staging cancer is like measuring how far a fire has spread - is it just in one room, the whole floor, or the entire building?',
        'The TNM system is like GPS coordinates for cancer - T tells you the size, N tells you about local spread, M tells you about distant spread.',
      ],
      examples: [
        'A Stage I breast cancer might be a small lump found early on a mammogram.',
        'A Stage IV lung cancer means cancer started in the lungs but has spread to other organs like the bones or brain.',
      ],
    },
    2: {
      level: 2,
      summary: 'The TNM system classifies cancers based on tumor size (T), lymph node involvement (N), and distant metastasis (M), which are combined into an overall stage.',
      explanation: `Cancer staging provides a standardized way to describe the extent of disease, guiding treatment decisions and estimating prognosis.

**The TNM System Components:**

*T - Primary Tumor:*
- TX: Primary tumor cannot be assessed
- T0: No evidence of primary tumor
- Tis: Carcinoma in situ (pre-invasive)
- T1-T4: Increasing size and/or extent of primary tumor

*N - Regional Lymph Nodes:*
- NX: Regional lymph nodes cannot be assessed
- N0: No regional lymph node metastasis
- N1-N3: Increasing involvement of regional lymph nodes

*M - Distant Metastasis:*
- M0: No distant metastasis
- M1: Distant metastasis present

**Stage Groupings:**
TNM classifications are combined into overall stages:
- **Stage 0**: Tis, N0, M0 (carcinoma in situ)
- **Stage I**: Small tumor, no node involvement, no metastasis
- **Stage II**: Larger tumor or limited node involvement
- **Stage III**: Large tumor or significant node involvement
- **Stage IV**: Any T, any N, M1 (distant metastasis present)

**Clinical vs Pathological Staging:**
- Clinical (cTNM): Based on exam, imaging, and biopsies before treatment
- Pathological (pTNM): Based on surgical findings and microscopic examination
- Pathological staging is generally more accurate

**Why Staging Matters Clinically:**
- Stage I-II: Often curable with surgery alone or with adjuvant therapy
- Stage III: May need multimodality treatment (surgery + chemo + radiation)
- Stage IV: Usually systemic therapy; cure less common but possible in some cancers`,
      keyTerms: [
        { term: 'TNM', definition: 'The staging system based on Tumor size, Lymph Node involvement, and Metastasis' },
        { term: 'carcinoma in situ', definition: 'Very early cancer that has not grown past its original layer of tissue' },
        { term: 'clinical stage', definition: 'Stage determined before surgery using imaging and biopsies' },
        { term: 'pathological stage', definition: 'Stage determined after surgery by examining the tumor under a microscope' },
        { term: 'adjuvant therapy', definition: 'Treatment given after surgery to reduce the chance of cancer returning' },
      ],
      analogies: [
        'Clinical staging is like estimating how deep a pothole is before filling it, while pathological staging is actually measuring it.',
        'TNM staging is like a zip code system for cancer - it tells you exactly where the cancer is located in the body.',
      ],
    },
    3: {
      level: 3,
      summary: 'The AJCC/UICC TNM system provides standardized cancer staging with anatomic and prognostic factors guiding treatment selection and outcomes prediction.',
      explanation: `**TNM Classification Details:**

*T Category - Primary Tumor:*
Definitions vary by cancer site but generally reflect:
- Tumor size (measured dimension)
- Depth of invasion (for epithelial tumors)
- Extension into adjacent structures

Example (Breast Cancer):
- T1: Tumor ≤20mm
- T2: Tumor >20mm but ≤50mm
- T3: Tumor >50mm
- T4: Direct extension to chest wall or skin

*N Category - Regional Lymph Nodes:*
- Varies by anatomic site
- Considers number of positive nodes
- Location of involved nodes
- Size of metastatic deposits

Example (Colorectal Cancer):
- N1: 1-3 regional lymph nodes involved
- N1a: 1 node, N1b: 2-3 nodes
- N2: 4 or more regional lymph nodes involved
- N2a: 4-6 nodes, N2b: 7+ nodes

*M Category:*
- M0: No distant metastasis
- M1: Distant metastasis present
- M1a, M1b, M1c: Site-specific subcategories

**Stage Grouping Principles:**
- Similar prognosis grouped together
- Based on survival data analysis
- Updated periodically with new evidence

**Staging Modifiers:**
- y: After neoadjuvant therapy (ypTNM)
- r: Recurrent tumor
- a: Autopsy classification
- c: Clinical classification
- p: Pathological classification

**Pathological Staging Elements:**
- Margin status (R0, R1, R2)
- Lymphovascular invasion (LVI)
- Perineural invasion (PNI)
- Grade (differentiation)
- Resection completeness

**Special Considerations:**
- Sentinel lymph node biopsy: pN0(sn) if negative
- Isolated tumor cells: pN0(i+) - do not upstage
- Micrometastases: Deposits 0.2-2mm
- Macrometastases: Deposits >2mm`,
      keyTerms: [
        { term: 'AJCC', definition: 'American Joint Committee on Cancer; maintains the TNM staging system' },
        { term: 'sentinel lymph node', definition: 'First lymph node(s) to which cancer cells drain from primary tumor' },
        { term: 'neoadjuvant therapy', definition: 'Treatment given before surgery to shrink the tumor' },
        { term: 'margin status', definition: 'Whether cancer cells are present at the edge of surgically removed tissue (R0=negative, R1=microscopic positive, R2=gross residual)' },
        { term: 'micrometastasis', definition: 'Small cluster of cancer cells (0.2-2mm) in lymph node' },
      ],
      clinicalNotes: 'Always use current AJCC edition (8th edition as of 2018). Site-specific staging manuals provide detailed criteria. Multidisciplinary tumor board discussion recommended for complex staging scenarios.',
    },
    4: {
      level: 4,
      summary: 'Contemporary staging integrates anatomic extent with biologic markers, molecular features, and prognostic tools to provide more precise risk stratification.',
      explanation: `**AJCC 8th Edition Updates:**

*Prognostic Stage Groups:*
- Beyond anatomic TNM
- Incorporates biomarkers
- Example: Breast cancer now uses:
  - ER, PR, HER2 status
  - Grade
  - Oncotype DX recurrence score (when available)

**Site-Specific Staging Examples:**

*Lung Cancer (NSCLC):*
- T1: ≤3cm (a: ≤1cm, b: >1-2cm, c: >2-3cm)
- T2: >3-5cm, involves main bronchus, visceral pleura, atelectasis
- T3: >5-7cm, chest wall, pericardium, phrenic nerve, separate nodule same lobe
- T4: >7cm, mediastinal invasion, separate nodule different ipsilateral lobe
- N1: Ipsilateral peribronchial/hilar nodes
- N2: Ipsilateral mediastinal/subcarinal nodes
- N3: Contralateral mediastinal, scalene, supraclavicular nodes
- M1a: Contralateral lung, pleural/pericardial nodules, malignant effusion
- M1b: Single extrathoracic metastasis
- M1c: Multiple extrathoracic metastases

*Colorectal Cancer:*
- T1: Submucosa invasion
- T2: Muscularis propria invasion
- T3: Through muscularis propria into subserosa/non-peritonealized pericolic tissue
- T4a: Penetrates visceral peritoneum
- T4b: Invades adjacent organs/structures
- Tumor deposits: Discrete foci in pericolorectal tissue, counted as N1c if N0

**Staging Procedures:**

*Imaging:*
- CT chest/abdomen/pelvis: Standard for most solid tumors
- PET-CT: Staging, treatment response, restaging
- MRI: Brain metastases, liver lesions, pelvic tumors
- Bone scan: Prostate, breast bone metastases

*Pathological Assessment:*
- Core biopsy: Diagnosis, biomarkers
- Surgical specimen: Definitive staging
- Minimum lymph node harvest (e.g., 12 for colorectal)
- Synoptic reporting (CAP protocols)

**Prognostic Tools Beyond TNM:**
- Nomograms (MSKCC, PREDICT)
- Gene expression profiles (Oncotype, MammaPrint)
- Circulating tumor markers
- Liquid biopsy applications`,
      keyTerms: [
        { term: 'prognostic stage', definition: 'AJCC 8th edition staging incorporating biomarkers beyond anatomic extent' },
        { term: 'tumor deposits', definition: 'Discrete tumor nodules in pericolorectal fat without lymph node tissue' },
        { term: 'synoptic reporting', definition: 'Standardized checklist format for pathology reports' },
        { term: 'nomogram', definition: 'Statistical prediction tool combining multiple variables to estimate outcome' },
      ],
      clinicalNotes: 'PET-CT may upstage 10-20% of patients by identifying occult metastases. Brain MRI standard for NSCLC, melanoma at diagnosis. Consider bone scan for breast cancer with bone symptoms or elevated alkaline phosphatase.',
    },
    5: {
      level: 5,
      summary: 'Staging continues to evolve with integration of genomic data, liquid biopsy findings, and imaging advances, enabling more personalized treatment approaches.',
      explanation: `**Evolving Concepts in Staging:**

*Molecular Staging:*
- cfDNA-based staging (emerging)
- ctDNA for MRD detection
- Minimal residual disease (MRD) status
- Example: ctDNA clearance post-surgery predicts outcome

*Response Assessment:*
- RECIST 1.1: Standard for solid tumors
- iRECIST: Modified for immunotherapy (pseudoprogression)
- Pathological complete response (pCR) as surrogate endpoint
- mpMRI for rectal cancer (mrTRG - tumor regression grade)

**Site-Specific Advances:**

*Breast Cancer:*
- Anatomic stage vs prognostic stage (latter preferred)
- Residual Cancer Burden (RCB) after neoadjuvant
- Ki-67 changes (for response assessment)
- Node positivity after neoadjuvant may not equal N+ pre-treatment prognosis

*Lung Cancer:*
- Staging implications for targeted therapy eligibility
- Oligometastatic disease: M1b now recognized as distinct
- IASLC proposals for 9th edition: Further T refinement

*Colorectal Cancer:*
- Sidedness impacts prognosis and treatment
- MSI-H/dMMR status affects staging implications
- Complete mesocolic excision (CME) quality metrics
- Watch-and-wait for complete clinical response in rectal cancer

**Staging Challenges:**

*Oligometastatic Disease:*
- Definition varies: Generally 1-5 metastases
- Potentially curable with aggressive local therapy
- De novo vs induced oligometastatic
- Prognostic factors: DFI, number, location

*Post-Treatment Staging:*
- yp staging after neoadjuvant
- Interpretation of complete response
- Pathological complete response (ypT0N0) prognostic significance

**Future Directions:**

*Liquid Biopsy Integration:*
- ctDNA-informed staging
- MRD-guided adjuvant therapy
- Serial monitoring for early recurrence detection

*Imaging Advances:*
- AI-assisted staging
- Radiomics/radiogenomics
- Whole-body MRI
- Ultra-sensitive PET tracers

*Molecular Classification:*
- Moving toward molecular subtypes
- Example: Breast cancer intrinsic subtypes
- Tumor-agnostic staging considerations

**Practical Staging Pearls:**

*Documentation:*
- Always document clinical AND pathological stage
- Note staging system version used
- Include all required elements
- Update stage after restaging

*Multidisciplinary Care:*
- Present all new diagnoses at tumor board
- Review staging accuracy
- Discuss treatment implications
- Consider clinical trial eligibility`,
      keyTerms: [
        { term: 'RECIST', definition: 'Response Evaluation Criteria in Solid Tumors; standardized imaging response assessment' },
        { term: 'iRECIST', definition: 'Modified RECIST for immunotherapy accounting for pseudoprogression' },
        { term: 'pathological complete response', definition: 'No residual invasive cancer in breast or lymph nodes after neoadjuvant therapy (ypT0/Tis ypN0)' },
        { term: 'RCB', definition: 'Residual Cancer Burden; quantitative assessment of residual disease after neoadjuvant therapy' },
        { term: 'oligometastatic', definition: 'Limited metastatic disease state potentially amenable to ablative local therapy' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Know AJCC 8th edition key changes
- Understand clinical vs pathological staging
- Recognize staging modifiers (yp, c, p)
- Prognostic stage group concept in breast cancer
- Minimum lymph node requirements by cancer type

**Clinical Practice:**
- Document staging at diagnosis and restaging points
- Use current staging manuals
- MDT review for complex staging
- Consider trial eligibility based on stage`,
    },
  },

  media: [
    {
      id: 'tnm-overview',
      type: 'diagram',
      filename: 'tnm-staging-overview.svg',
      title: 'TNM Staging System Overview',
      description: 'Visual representation of T, N, M categories and stage groupings',
    },
  ],
  citations: [
    {
      id: 'ajcc-8th',
      type: 'textbook',
      title: 'AJCC Cancer Staging Manual, 8th Edition',
      authors: ['Amin MB', 'Edge SB', 'Greene FL'],
      source: 'American Joint Committee on Cancer',
    },
    {
      id: 'uicc-8th',
      type: 'textbook',
      title: 'TNM Classification of Malignant Tumours, 8th Edition',
      source: 'Union for International Cancer Control',
    },
  ],
  crossReferences: [
    { targetId: 'oncology-breast-cancer', targetType: 'condition', relationship: 'related', label: 'Breast Cancer' },
    { targetId: 'oncology-lung-cancer', targetType: 'condition', relationship: 'related', label: 'Lung Cancer' },
    { targetId: 'oncology-colorectal-cancer', targetType: 'condition', relationship: 'related', label: 'Colorectal Cancer' },
  ],
  tags: {
    systems: ['oncology'],
    topics: ['staging', 'prognosis', 'treatment-planning'],
    keywords: ['TNM', 'AJCC', 'stage', 'prognosis', 'cancer staging'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
