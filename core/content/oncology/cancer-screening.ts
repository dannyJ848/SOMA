import { EducationalContent } from '../types';

/**
 * Cancer Screening, Staging, and Tumor Markers
 *
 * Comprehensive educational content covering USPSTF screening guidelines,
 * TNM staging, tumor markers, and screening controversies.
 */

export const cancerScreeningGuidelines: EducationalContent = {
  id: 'cancer-screening-guidelines',
  type: 'topic',
  name: 'Cancer Screening Guidelines',
  nameEs: 'Guías de Tamizaje de Cáncer',
  alternateNames: ['Cancer Screening Recommendations', 'USPSTF Cancer Screening'],
  levels: {
    1: {
      level: 1,
      summary: 'Screening tests look for cancer before you feel sick, when it is easiest to treat.',
      explanation:
        'Cancer screening means checking for cancer before you have any symptoms. Finding cancer early — when it is small and has not spread — gives the best chance of successful treatment. ' +
        'Common screening tests include mammograms (breast cancer), colonoscopies (colon cancer), Pap smears (cervical cancer), and low-dose CT scans (lung cancer). ' +
        'Not every type of cancer has a screening test, and screening is recommended based on your age, sex, and risk factors.',
      keyTerms: [
        { term: 'screening', definition: 'Testing for a disease before any symptoms appear' },
        { term: 'mammogram', definition: 'An X-ray of the breast used to look for cancer early' },
        { term: 'colonoscopy', definition: 'A test where a doctor looks inside your colon for polyps or cancer' },
        { term: 'Pap smear', definition: 'A test that checks the cervix for abnormal cells' },
      ],
      analogies: [
        'Screening is like checking your smoke detectors before there is a fire — early detection saves lives.',
      ],
      patientCounselingPoints: [
        'Talk to your doctor about which screenings are right for your age and risk level.',
        'Screening can sometimes find things that turn out not to be cancer (false positives).',
        'Colon cancer screening is recommended starting at age 45 for most people.',
      ],
      clinicalNotes: '',
    },
    2: {
      level: 2,
      summary: 'USPSTF grades screening recommendations (A, B, C, D, I) based on evidence of benefit versus harm for specific cancers.',
      explanation:
        'The United States Preventive Services Task Force (USPSTF) evaluates screening tests and assigns grades:\n' +
        '- **A/B**: Recommended — high/moderate certainty of substantial net benefit.\n' +
        '- **C**: Offer selectively based on individual circumstances.\n' +
        '- **D**: Not recommended — harms outweigh benefits.\n' +
        '- **I**: Insufficient evidence.\n\n' +
        '**Major USPSTF Cancer Screening Recommendations:**\n\n' +
        '**Breast cancer**: Mammography every 2 years, ages 40–74 (Grade B).\n\n' +
        '**Cervical cancer**: Pap smear every 3 years (ages 21–65) or Pap + HPV co-testing every 5 years (ages 30–65), or primary HPV testing every 5 years (ages 25–65) (Grade A).\n\n' +
        '**Colorectal cancer**: Screening ages 45–75 (Grade A), ages 76–85 (Grade C). Options: colonoscopy every 10 years, FIT annually, Cologuard every 1–3 years, flexible sigmoidoscopy every 5 years.\n\n' +
        '**Lung cancer**: Annual low-dose CT (LDCT) for adults ages 50–80 with ≥20 pack-year smoking history who currently smoke or quit within the past 15 years (Grade B).\n\n' +
        '**Prostate cancer**: PSA-based screening for men ages 55–69 — individual decision (Grade C).',
      keyTerms: [
        { term: 'USPSTF', definition: 'United States Preventive Services Task Force — independent panel evaluating screening evidence' },
        { term: 'sensitivity', definition: 'The ability of a test to correctly identify people who have the disease (true positive rate)' },
        { term: 'specificity', definition: 'The ability of a test to correctly identify people who do not have the disease (true negative rate)' },
        { term: 'false positive', definition: 'Test says cancer is present when it is not — causes anxiety and unnecessary follow-up' },
        { term: 'lead-time bias', definition: 'Screening appears to increase survival by detecting cancer earlier, even if outcome is unchanged' },
        { term: 'overdiagnosis', definition: 'Detecting cancers that would never have caused symptoms or death during the person\'s lifetime' },
        { term: 'FIT', definition: 'Fecal immunochemical test — stool-based screening for colorectal cancer' },
        { term: 'PSA', definition: 'Prostate-specific antigen — blood test for prostate cancer screening' },
      ],
      examples: [
        'Mammography reduces breast cancer mortality by approximately 20% in screened populations.',
        'Low-dose CT lung cancer screening reduced mortality by 20% (NLST trial) and 24% (NELSON trial).',
        'HPV vaccination has dramatically reduced cervical cancer incidence in vaccinated populations.',
      ],
      clinicalNotes:
        'The USPSTF lowered the colorectal cancer screening start age from 50 to 45 in 2021 due to rising incidence in younger adults. ' +
        'Breast cancer screening was updated in 2024 to recommend starting at age 40 (previously 50). ' +
        'PSA screening remains controversial due to high false-positive rates and overdiagnosis of indolent disease.',
    },
    3: {
      level: 3,
      summary: 'Cancer screening requires understanding of test characteristics, number needed to screen, and the balance of benefits (mortality reduction) versus harms (overdiagnosis, false positives).',
      explanation:
        '**Screening Test Characteristics**\n' +
        'Positive predictive value (PPV) depends on disease prevalence — even a highly specific test generates many false positives when screening for rare cancers. ' +
        'Number needed to screen (NNS): The number of people who must be screened to prevent one cancer death. Example: NNS for mammography over 10 years in women 50–59 is approximately 1,235.\n\n' +
        '**High-Risk Screening Protocols**\n' +
        '- **BRCA1/2 carriers**: Annual breast MRI + mammography starting at age 25–30. Risk-reducing mastectomy and salpingo-oophorectomy offered.\n' +
        '- **Lynch syndrome**: Colonoscopy every 1–2 years starting at age 20–25 (or 2–5 years before earliest CRC in family).\n' +
        '- **Li-Fraumeni syndrome (TP53 mutations)**: Annual whole-body MRI.\n' +
        '- **Familial adenomatous polyposis (FAP)**: Annual sigmoidoscopy starting at age 10–15.\n\n' +
        '**Screening Modalities in Detail**\n' +
        '- Colonoscopy: Gold standard for CRC screening — allows polyp removal (polypectomy) during the procedure. Sensitivity >95% for cancer.\n' +
        '- Cologuard (mt-sDNA): Multi-target stool DNA test — detects DNA mutations and hemoglobin. Sensitivity 92% for CRC, 42% for advanced adenomas.\n' +
        '- Low-dose CT: Effective for lung cancer but has high false-positive rate (~24% in NLST); most abnormal findings are benign nodules.\n' +
        '- Liquid biopsy (MCED — multi-cancer early detection): Emerging approach; Galleri test detects cfDNA methylation patterns across 50+ cancer types.',
      keyTerms: [
        { term: 'positive predictive value', definition: 'Probability that a positive test result truly indicates disease' },
        { term: 'number needed to screen', definition: 'Number of people who must be screened to prevent one cancer death' },
        { term: 'overdiagnosis', definition: 'Detection of cancers that would not cause harm during the patient\'s lifetime' },
        { term: 'risk-reducing surgery', definition: 'Prophylactic surgery to lower cancer risk in high-risk individuals (e.g., mastectomy in BRCA carriers)' },
        { term: 'Cologuard', definition: 'Multi-target stool DNA test for colorectal cancer screening' },
        { term: 'MCED test', definition: 'Multi-cancer early detection blood test analyzing cfDNA methylation patterns' },
        { term: 'Lynch syndrome', definition: 'Hereditary cancer syndrome caused by MMR gene mutations increasing CRC, endometrial, and other cancer risks' },
      ],
      examples: [
        'BRCA1 carriers have 60–70% lifetime breast cancer risk and 40% ovarian cancer risk; intensive screening and risk-reducing surgery are recommended.',
        'The Galleri MCED test detected cancer signal in 1.4% of asymptomatic adults in the PATHFINDER study; 38% of those were confirmed cancers.',
      ],
      clinicalNotes:
        'Colonoscopy quality metrics: adenoma detection rate (ADR) ≥25% (30% target), cecal intubation rate ≥95%, adequate bowel prep. ' +
        'Low-dose CT findings are managed by Lung-RADS reporting system (categories 1–4). ' +
        'MCED tests are not yet USPSTF-recommended but are being studied in the NHS-Galleri and PATHFINDER-2 trials.',
    },
    4: {
      level: 4,
      summary: 'Screening controversies involve overdiagnosis magnitude, PSA screening debates, risk-stratified approaches, and the emerging role of multi-cancer early detection.',
      explanation:
        '**Overdiagnosis Controversies**\n' +
        'Prostate cancer: Approximately 20–50% of screen-detected prostate cancers are overdiagnosed (would never cause harm). ' +
        'Active surveillance (monitoring low-risk prostate cancer without immediate treatment) reduces overtreatment. ' +
        'Breast cancer: Estimated 11–22% overdiagnosis with mammography screening. DCIS (ductal carcinoma in situ) management is debated — some DCIS may never progress.\n\n' +
        '**PSA Screening Debate**\n' +
        'PLCO trial (US): No mortality benefit of PSA screening — but high contamination (control arm had high screening rates). ' +
        'ERSPC trial (Europe): 20% relative mortality reduction with PSA screening; NNS = 570 over 16 years. ' +
        'USPSTF Grade C (2018): Shared decision-making for men 55–69. ' +
        'Risk calculators (PCPT, ERSPC) improve specificity. PHI (Prostate Health Index) and 4Kscore refine PSA-based screening. ' +
        'MRI-targeted biopsy (PI-RADS) reduces detection of clinically insignificant cancers.\n\n' +
        '**Risk-Stratified Screening**\n' +
        'Moving from age-based to risk-based screening. Breast cancer risk models (Tyrer-Cuzick/IBIS, Gail) stratify women for enhanced screening. ' +
        'Polygenic risk scores (PRS) combining hundreds of common variants may personalize screening intervals. ' +
        'The MyPeBS trial is testing risk-stratified breast cancer screening in Europe.\n\n' +
        '**Multi-Cancer Early Detection (MCED)**\n' +
        'Galleri (GRAIL): Methylation-based cfDNA assay detecting 50+ cancer types with cancer signal origin prediction. ' +
        'Sensitivity varies by stage (17% stage I, 40% stage II, 77% stage III, 90% stage IV in initial data). ' +
        'Cancers with no current screening (pancreatic, ovarian, liver) represent the greatest potential impact. ' +
        'NHS-Galleri trial (140,000 participants) will provide population-level data.',
      keyTerms: [
        { term: 'active surveillance', definition: 'Monitoring low-risk cancer without immediate treatment, reserving therapy for progression' },
        { term: 'DCIS', definition: 'Ductal carcinoma in situ — non-invasive breast cancer that may or may not progress' },
        { term: 'PI-RADS', definition: 'Prostate Imaging Reporting and Data System — standardized MRI scoring for prostate cancer' },
        { term: 'polygenic risk score', definition: 'Combined effect of many common genetic variants predicting disease risk' },
        { term: 'Prostate Health Index', definition: 'Blood test combining total PSA, free PSA, and p2PSA to improve screening specificity' },
        { term: 'risk-stratified screening', definition: 'Tailoring screening frequency and modality based on individual risk level' },
        { term: 'cancer signal origin', definition: 'MCED test prediction of which organ the detected cancer arises from' },
      ],
      clinicalNotes:
        'MRI-targeted prostate biopsy (PI-RADS ≥3) detects 30% more clinically significant cancers and 50% fewer insignificant cancers vs. systematic biopsy (PRECISION trial). ' +
        'Active surveillance criteria (varies by guideline): Gleason 3+3, PSA <10, ≤2 positive cores, ≤50% tumor in any core. ' +
        'MCED tests may create a "screening pipeline" requiring infrastructure for diagnostic workup of positive results.',
    },
    5: {
      level: 5,
      summary: 'Frontier screening research integrates cfDNA fragmentomics, AI-enhanced imaging, population modeling, and the public health economics of MCED implementation.',
      explanation:
        '**Advanced Liquid Biopsy for Early Detection**\n' +
        'Beyond methylation: cfDNA fragmentomics (fragment length, end motifs, nucleosome positioning) provides tissue-of-origin and cancer detection signals. ' +
        'DELFI (DNA evaluation of fragments for early interception) uses genome-wide fragmentation patterns — machine learning classifier detects lung cancer with AUC 0.90. ' +
        'Protein biomarker panels: CancerSEEK (Johns Hopkins) combines ctDNA mutations + protein markers for multi-cancer detection.\n\n' +
        '**AI-Enhanced Screening**\n' +
        'AI mammography: Deep learning matches or exceeds radiologist performance in breast cancer detection. ' +
        'AI can safely triage 50–70% of mammograms as normal, reducing radiologist workload (Lunit, iCAD, Hologic). ' +
        'AI polyp detection (CADe) in colonoscopy increases ADR by 30–50% (GI Genius, EndoScreener). ' +
        'AI-assisted low-dose CT: Sybil model (MIT) predicts lung cancer risk 1–6 years from a single LDCT.\n\n' +
        '**Population Health Economics of MCED**\n' +
        'Cost-effectiveness modeling: MCED tests must demonstrate mortality reduction in RCTs before widespread adoption. ' +
        'Potential concerns: anxiety from false positives, diagnostic odyssey for positive results with unlocalized signal, system burden. ' +
        'Stage shift modeling: If MCED shifts even 10% of cancers from stage IV to stage I–II, the survival and cost implications are enormous. ' +
        'Medicare coverage decisions for MCED are pending RCT results.\n\n' +
        '**Emerging Screening Paradigms**\n' +
        'Blood-based cervical cancer screening (HPV cfDNA). ' +
        'Exhaled breath volatile organic compounds (VOCs) for lung cancer. ' +
        'Urine-based bladder cancer screening (UroSEEK). ' +
        'Integration of genomics, proteomics, metabolomics, and imaging into comprehensive risk assessment platforms.',
      keyTerms: [
        { term: 'cfDNA fragmentomics', definition: 'Analysis of cell-free DNA fragment size and patterns to detect cancer and identify tissue of origin' },
        { term: 'DELFI', definition: 'DNA evaluation of fragments for early interception — fragmentomics-based cancer detection' },
        { term: 'CADe', definition: 'Computer-aided detection — AI system identifying polyps during colonoscopy in real time' },
        { term: 'stage shift', definition: 'MCED-mediated detection of cancers at earlier, more treatable stages' },
        { term: 'diagnostic odyssey', definition: 'Extensive workup triggered by a positive MCED result without clear cancer localization' },
        { term: 'Sybil', definition: 'AI model predicting future lung cancer risk from a single low-dose CT scan' },
      ],
      clinicalNotes:
        'Galleri showed 99.5% specificity (0.5% false-positive rate) — but at population scale, this still generates substantial false positives. ' +
        'AI mammography is FDA-cleared as a concurrent read (second reader) but not yet as an autonomous screening tool. ' +
        'The MCED field requires standardized frameworks for clinical validation, utility, and implementation (Cance et al., Cancer Cell 2023). ' +
        'Health equity must be addressed: screening innovation risks widening disparities if access is not universal.',
    },
  },
  media: [],
  citations: [
    {
      id: 'nlst-2011',
      type: 'article',
      title: 'Reduced Lung-Cancer Mortality with Low-Dose Computed Tomographic Screening',
      authors: ['National Lung Screening Trial Research Team'],
      source: 'New England Journal of Medicine',
      page: '365:395-409',
      url: 'https://doi.org/10.1056/NEJMoa1102873',
    },
    {
      id: 'nelson-2020',
      type: 'article',
      title: 'Reduced Lung-Cancer Mortality with Volume CT Screening in a Randomized Trial',
      authors: ['de Koning HJ', 'et al.'],
      source: 'New England Journal of Medicine',
      page: '382:503-513',
      url: 'https://doi.org/10.1056/NEJMoa1911793',
    },
  ],
  crossReferences: [
    { targetId: 'cancer-staging-systems', targetType: 'topic', relationship: 'sibling', label: 'Cancer Staging' },
    { targetId: 'tumor-markers', targetType: 'topic', relationship: 'sibling', label: 'Tumor Markers' },
    { targetId: 'cell-cycle-and-cancer', targetType: 'concept', relationship: 'related', label: 'Cancer Biology' },
  ],
  tags: {
    systems: ['oncology', 'preventive-medicine', 'public-health'],
    topics: ['cancer-screening', 'USPSTF', 'mammography', 'colonoscopy', 'LDCT', 'MCED'],
    keywords: ['screening', 'USPSTF', 'mammogram', 'colonoscopy', 'PSA', 'Galleri', 'MCED', 'overdiagnosis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};

export const cancerStagingSystems: EducationalContent = {
  id: 'cancer-staging-systems',
  type: 'topic',
  name: 'Cancer Staging Systems',
  nameEs: 'Sistemas de Estadificación del Cáncer',
  alternateNames: ['TNM Staging', 'Cancer Stage Classification'],
  levels: {
    1: {
      level: 1,
      summary: 'Staging tells doctors how big a cancer is and whether it has spread.',
      explanation:
        'When someone is diagnosed with cancer, doctors need to know how far the cancer has grown. This is called staging. ' +
        'Staging looks at three things: the size of the tumor, whether it has reached nearby lymph nodes, and whether it has spread to distant parts of the body. ' +
        'Stages range from I (early, small) to IV (advanced, spread far). Earlier stages usually have better outcomes.',
      keyTerms: [
        { term: 'stage', definition: 'A way to describe how far cancer has grown and spread' },
        { term: 'lymph nodes', definition: 'Small bean-shaped glands that filter body fluids; cancer can spread through them' },
        { term: 'spread (metastasis)', definition: 'When cancer moves to a part of the body far from where it started' },
      ],
      analogies: [
        'Staging is like rating a fire: Stage I is a small fire in one room, Stage IV means it has spread throughout the building.',
      ],
      patientCounselingPoints: [
        'The stage helps determine the best treatment plan.',
        'Earlier stages generally mean more treatment options and better outcomes.',
        'Your oncologist will explain what your specific stage means for your cancer type.',
      ],
      clinicalNotes: '',
    },
    2: {
      level: 2,
      summary: 'The TNM system classifies cancers by Tumor size (T), lymph Node involvement (N), and distant Metastasis (M), determining an overall stage (I–IV).',
      explanation:
        '**TNM Classification (AJCC/UICC)**\n' +
        '- **T (Tumor)**: T0 = no evidence of primary tumor. Tis = carcinoma in situ. T1–T4 = increasing size/extent.\n' +
        '- **N (Nodes)**: N0 = no regional lymph node involvement. N1–N3 = increasing nodal involvement.\n' +
        '- **M (Metastasis)**: M0 = no distant metastasis. M1 = distant metastasis present.\n\n' +
        'TNM combinations map to overall stage groups:\n' +
        '- **Stage I**: Small tumor, no nodes, no metastasis.\n' +
        '- **Stage II**: Larger tumor or minimal nodal involvement.\n' +
        '- **Stage III**: Extensive tumor or significant nodal involvement.\n' +
        '- **Stage IV**: Distant metastasis present.\n\n' +
        'Some cancers use different staging systems:\n' +
        '- **Hematologic malignancies**: Ann Arbor staging (Hodgkin/NHL) — Stages I–IV based on nodal regions, with A (no symptoms) or B (B symptoms: fever, night sweats, weight loss).\n' +
        '- **Gynecologic cancers**: FIGO staging.\n' +
        '- **Brain tumors**: WHO grading (I–IV).',
      keyTerms: [
        { term: 'TNM staging', definition: 'System classifying cancer by Tumor size, Node involvement, and Metastasis' },
        { term: 'AJCC', definition: 'American Joint Committee on Cancer — develops and publishes TNM staging guidelines' },
        { term: 'carcinoma in situ', definition: 'Cancer cells present but have not invaded beyond the original tissue layer (Tis)' },
        { term: 'Ann Arbor staging', definition: 'Staging system for Hodgkin and non-Hodgkin lymphoma based on nodal regions involved' },
        { term: 'B symptoms', definition: 'Fever, night sweats, and >10% weight loss — poor prognostic signs in lymphoma' },
        { term: 'FIGO staging', definition: 'International Federation of Gynecology and Obstetrics staging for gynecologic cancers' },
        { term: 'clinical stage', definition: 'Stage determined by physical exam and imaging before surgery (prefix "c")' },
        { term: 'pathologic stage', definition: 'Stage determined by surgical and pathologic findings (prefix "p")' },
      ],
      clinicalNotes:
        'AJCC staging (currently 8th edition) is cancer-specific — T1 for breast cancer is different from T1 for colon cancer. ' +
        'Pathologic staging (pTNM) is more accurate than clinical staging (cTNM). ' +
        'Stage at diagnosis is the single strongest prognostic factor for most solid tumors.',
    },
    3: {
      level: 3,
      summary: 'Modern staging integrates TNM with biomarkers, genomic features, and prognostic groupings to create nuanced cancer classification systems.',
      explanation:
        '**AJCC 8th Edition Innovations**\n' +
        'The 8th edition (2018) incorporates biomarkers into staging for several cancers:\n' +
        '- **Breast cancer**: ER, PR, HER2 status, and grade (Elston-Ellis) modify anatomic stage → prognostic stage. A T2N1M0 ER+/HER2- grade 1 cancer may be downstaged.\n' +
        '- **Esophageal cancer**: Histologic type (squamous vs. adenocarcinoma), grade, and location affect stage.\n' +
        '- **Prostate cancer**: PSA level, Gleason Grade Group (1–5) modify stage.\n\n' +
        '**Key Cancer-Specific Staging Details**\n' +
        '- **Colon cancer**: T staging based on depth of invasion (mucosa → submucosa → muscularis propria → serosa → adjacent organs). N1 = 1–3 nodes; N2 = 4+ nodes. Minimum 12 nodes for adequate staging.\n' +
        '- **Lung cancer**: T staging incorporates size (T1a ≤1 cm up to T4 >7 cm) and invasion (pleura, chest wall, mediastinum). N staging: N1 (ipsilateral hilar), N2 (ipsilateral mediastinal), N3 (contralateral).\n' +
        '- **Melanoma**: Breslow depth and ulceration determine T stage. Sentinel node status is key prognostic factor.\n\n' +
        '**Staging Workup**\n' +
        'CT chest/abdomen/pelvis for most solid tumors. PET-CT for lymphoma, lung, esophageal, head/neck. Brain MRI for lung cancer, melanoma. Bone scan for prostate, breast.',
      keyTerms: [
        { term: 'prognostic stage group', definition: 'AJCC stage incorporating biomarkers and grade in addition to anatomic TNM' },
        { term: 'Gleason Grade Group', definition: 'Prostate cancer grading system (1–5) replacing traditional Gleason score' },
        { term: 'Breslow depth', definition: 'Measurement of melanoma thickness in millimeters — key prognostic factor' },
        { term: 'PET-CT', definition: 'Positron emission tomography-CT combining metabolic and anatomic imaging for staging' },
        { term: 'sentinel lymph node', definition: 'First lymph node in the drainage pathway; if negative, further nodes are unlikely involved' },
        { term: 'Elston-Ellis grading', definition: 'Nottingham grading system for breast cancer based on tubule formation, nuclear grade, and mitotic rate' },
      ],
      examples: [
        'A breast cancer that is anatomic stage IIA (T2N0M0) may be prognostic stage IA if ER+/PR+/HER2-/grade 1.',
        'NSCLC staging: T2aN1M0 = stage IIB; 5-year survival approximately 53%.',
      ],
      clinicalNotes:
        'AJCC 8th edition prognostic staging for breast cancer is the most significant change — it can upstage or downstage by 1–2 levels compared to anatomic staging. ' +
        'PET-CT has largely replaced conventional staging for lymphoma (Lugano classification replaced Ann Arbor with PET-based response criteria). ' +
        'Liquid biopsy (ctDNA) is being investigated as an adjunct to conventional staging for MRD assessment.',
    },
    4: {
      level: 4,
      summary: 'Advanced staging concepts include molecular staging, response assessment criteria, and stage migration (Will Rogers phenomenon).',
      explanation:
        '**Molecular Staging**\n' +
        'Gene expression profiles provide prognostic information beyond TNM:\n' +
        '- Oncotype DX (breast): Low recurrence score (RS <26) identifies patients who can omit chemotherapy.\n' +
        '- MammaPrint 70-gene signature: Ultralow risk patients may omit endocrine therapy (MINDACT PRIME).\n' +
        '- Decipher (prostate): Genomic classifier predicting metastasis after prostatectomy.\n' +
        '- Immunoscore (CRC): CD3+/CD8+ T cell quantification may be added to TNM.\n\n' +
        '**Response Assessment Criteria**\n' +
        '- **RECIST 1.1**: Standard for solid tumors. CR = disappearance of all target lesions. PR = ≥30% decrease in sum of diameters. PD = ≥20% increase + ≥5 mm absolute increase. SD = neither PR nor PD.\n' +
        '- **iRECIST**: Modified criteria for immunotherapy allowing for confirmation of progression (accounting for pseudoprogression).\n' +
        '- **Lugano/Deauville criteria**: PET-based response for lymphoma (Deauville 1–5 scale based on FDG uptake vs. liver).\n' +
        '- **pathologic complete response (pCR)**: No residual invasive cancer in breast/axilla after neoadjuvant therapy (ypT0/is ypN0). pCR correlates with long-term survival in TNBC and HER2+ breast cancer.\n\n' +
        '**Stage Migration (Will Rogers Phenomenon)**\n' +
        'Improved imaging detection of occult metastases moves patients from lower to higher stages, artificially improving survival statistics for both groups without any real treatment benefit.',
      keyTerms: [
        { term: 'RECIST 1.1', definition: 'Response Evaluation Criteria in Solid Tumors — standardized framework for measuring treatment response' },
        { term: 'iRECIST', definition: 'Immune-modified RECIST allowing confirmation of progression to account for pseudoprogression' },
        { term: 'Deauville criteria', definition: 'PET-based 5-point scale for assessing treatment response in lymphoma' },
        { term: 'pathologic complete response', definition: 'No residual invasive cancer found in surgical specimen after neoadjuvant therapy' },
        { term: 'Will Rogers phenomenon', definition: 'Stage migration — improved diagnostics shift patients between stages, artificially improving stage-specific survival' },
        { term: 'pseudoprogression', definition: 'Apparent tumor growth on imaging due to immune cell infiltration, followed by subsequent response' },
      ],
      clinicalNotes:
        'RECIST 1.1 is required for all oncology clinical trial response assessment. ' +
        'pCR rates after neoadjuvant therapy: ~60% in HER2+ breast cancer, ~50% in TNBC, ~10–15% in HR+ breast cancer. ' +
        'pCR serves as a surrogate endpoint for accelerated FDA approval (e.g., pertuzumab in breast cancer). ' +
        'PET interim response (Deauville ≤3) after 2 cycles of ABVD guides treatment de-escalation in Hodgkin lymphoma (RATHL trial).',
    },
    5: {
      level: 5,
      summary: 'Frontier staging integrates ctDNA-based molecular residual disease, AI imaging biomarkers, and dynamic staging paradigms that evolve with treatment response.',
      explanation:
        '**ctDNA as Molecular Staging**\n' +
        'Postoperative ctDNA status is emerging as the most powerful prognostic biomarker:\n' +
        '- ctDNA-positive after surgery: 10–15× higher recurrence risk across solid tumors.\n' +
        '- Landmark ctDNA timepoints (4 weeks, 12 weeks post-surgery) stratify prognosis more precisely than pathologic staging.\n' +
        '- ctDNA molecular response (clearance during treatment) predicts outcomes in metastatic settings.\n' +
        '- Future staging systems may incorporate ctDNA status as a TNM modifier (e.g., pT2N0M0-ctDNA+ vs. ctDNA-).\n\n' +
        '**AI Imaging Biomarkers**\n' +
        'Radiomics + deep learning extract prognostic features from standard staging CT/PET:\n' +
        '- Tumor heterogeneity on CT predicts treatment resistance.\n' +
        '- PET radiomics predicts immunotherapy response better than PD-L1 IHC.\n' +
        '- AI-derived total metabolic tumor volume (TMTV) on PET improves prognostic stratification in lymphoma.\n\n' +
        '**Dynamic Staging**\n' +
        'Traditional staging is a single timepoint assessment. Dynamic staging reassesses throughout treatment:\n' +
        '- Neoadjuvant response (pCR, RCB score) refines prognosis after initial staging.\n' +
        '- ctDNA kinetics during treatment (molecular response) provide real-time staging updates.\n' +
        '- Adaptive clinical trials use dynamic staging to modify treatment intensity.\n\n' +
        '**Staging System Evolution**\n' +
        'AJCC 9th edition (in development) will likely incorporate molecular biomarkers, ctDNA, and imaging AI features more broadly. ' +
        'The Immunoscore is proposed as an addition to TNM for CRC (TNM-Immune). ' +
        'Machine learning prognostic models integrating clinical, pathologic, genomic, and imaging features outperform TNM stage alone.',
      keyTerms: [
        { term: 'molecular residual disease', definition: 'Cancer cells remaining after treatment, detected by ctDNA or other molecular assays' },
        { term: 'landmark ctDNA analysis', definition: 'ctDNA measurement at defined timepoints (e.g., 4 weeks post-surgery) for prognostic stratification' },
        { term: 'total metabolic tumor volume', definition: 'PET-derived measurement of total FDG-avid tumor volume — strong prognostic biomarker in lymphoma' },
        { term: 'residual cancer burden (RCB)', definition: 'Quantitative pathologic score (0–III) measuring residual disease after neoadjuvant breast cancer therapy' },
        { term: 'dynamic staging', definition: 'Continuous reassessment of cancer status throughout treatment using molecular and imaging biomarkers' },
        { term: 'TNM-Immune', definition: 'Proposed staging system integrating Immunoscore with traditional TNM for colorectal cancer' },
      ],
      clinicalNotes:
        'CIRCULATE-Japan demonstrated that ctDNA-guided adjuvant therapy in CRC improves disease-free survival. ' +
        'RCB scoring after neoadjuvant breast cancer therapy (RCB-0 through RCB-III) provides a continuous prognostic scale superior to binary pCR assessment. ' +
        'The ASCO-CAP ctDNA working group is developing standardized ctDNA reporting for molecular staging. ' +
        'Integration of multi-modal data (genomic, proteomic, imaging, ctDNA) into unified staging will require AI-driven platforms.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ajcc-8th-2017',
      type: 'textbook',
      title: 'AJCC Cancer Staging Manual, 8th Edition',
      authors: ['Amin MB', 'et al.'],
      source: 'Springer',
      page: '2017',
    },
  ],
  crossReferences: [
    { targetId: 'cancer-screening-guidelines', targetType: 'topic', relationship: 'sibling', label: 'Cancer Screening' },
    { targetId: 'tumor-markers', targetType: 'topic', relationship: 'sibling', label: 'Tumor Markers' },
    { targetId: 'surgical-oncology', targetType: 'topic', relationship: 'related', label: 'Surgical Oncology' },
  ],
  tags: {
    systems: ['oncology', 'pathology'],
    topics: ['staging', 'TNM', 'AJCC', 'RECIST', 'prognostic-staging'],
    keywords: ['TNM', 'AJCC', 'RECIST', 'pCR', 'Deauville', 'ctDNA', 'molecular-staging'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};

export const tumorMarkers: EducationalContent = {
  id: 'tumor-markers',
  type: 'topic',
  name: 'Tumor Markers',
  nameEs: 'Marcadores Tumorales',
  alternateNames: ['Cancer Biomarkers', 'Serum Tumor Markers'],
  levels: {
    1: {
      level: 1,
      summary: 'Tumor markers are substances in the blood that can be higher when cancer is present.',
      explanation:
        'Some cancers release special chemicals into the blood. Doctors can measure these chemicals with a blood test. ' +
        'If the level is higher than normal, it may be a clue that cancer is present, growing, or coming back after treatment. ' +
        'However, tumor markers are not perfect — they can be elevated for other reasons too.',
      keyTerms: [
        { term: 'tumor marker', definition: 'A substance in the blood that may be elevated when cancer is present' },
        { term: 'blood test', definition: 'A sample of blood checked in a laboratory' },
        { term: 'monitoring', definition: 'Tracking marker levels over time to see if cancer is responding to treatment' },
      ],
      patientCounselingPoints: [
        'A high tumor marker does not always mean cancer is present.',
        'Tumor markers are most useful for tracking how well treatment is working.',
        'Your doctor will use tumor markers along with scans and other tests.',
      ],
      clinicalNotes: '',
    },
    2: {
      level: 2,
      summary: 'Common tumor markers include PSA, CA-125, AFP, CEA, CA 19-9, and beta-hCG, each associated with specific cancer types.',
      explanation:
        '**Common Tumor Markers:**\n\n' +
        '| Marker | Associated Cancer | Notes |\n' +
        '|--------|------------------|-------|\n' +
        '| PSA | Prostate cancer | Also elevated in BPH, prostatitis |\n' +
        '| CA-125 | Ovarian cancer | Also elevated in endometriosis, pregnancy, peritoneal inflammation |\n' +
        '| AFP (alpha-fetoprotein) | Liver cancer, germ cell tumors | Also elevated in pregnancy, hepatitis |\n' +
        '| CEA (carcinoembryonic antigen) | Colorectal cancer | Also elevated in smokers, inflammatory bowel disease |\n' +
        '| CA 19-9 | Pancreatic cancer, cholangiocarcinoma | Elevated in obstructive jaundice (even without cancer) |\n' +
        '| Beta-hCG | Gestational trophoblastic disease, germ cell tumors | Elevated in pregnancy |\n' +
        '| LDH | Lymphoma, melanoma, germ cell tumors | Nonspecific; elevated in many conditions |\n' +
        '| CA 15-3 / CA 27-29 | Breast cancer | Primarily for monitoring metastatic disease |\n\n' +
        'Tumor markers are most useful for:\n' +
        '1. Monitoring treatment response (serial measurements).\n' +
        '2. Detecting recurrence after treatment.\n' +
        '3. Prognosis at diagnosis (e.g., AFP/hCG in germ cell tumors).',
      keyTerms: [
        { term: 'PSA', definition: 'Prostate-specific antigen — elevated in prostate cancer, BPH, and prostatitis' },
        { term: 'CA-125', definition: 'Cancer antigen 125 — associated with ovarian cancer' },
        { term: 'AFP', definition: 'Alpha-fetoprotein — marker for liver cancer and germ cell tumors' },
        { term: 'CEA', definition: 'Carcinoembryonic antigen — associated with colorectal and other adenocarcinomas' },
        { term: 'CA 19-9', definition: 'Cancer antigen 19-9 — associated with pancreatic cancer' },
        { term: 'beta-hCG', definition: 'Beta human chorionic gonadotropin — marker for trophoblastic and germ cell tumors' },
        { term: 'LDH', definition: 'Lactate dehydrogenase — nonspecific marker elevated in lymphoma, melanoma, and many other conditions' },
      ],
      clinicalNotes:
        'No tumor marker is recommended as a standalone screening test. ' +
        'CEA is the standard marker for monitoring metastatic colorectal cancer treatment response and surveillance. ' +
        'AFP, hCG, and LDH together classify testicular germ cell tumors into good, intermediate, and poor risk groups (IGCCCG).',
    },
    3: {
      level: 3,
      summary: 'Tumor markers function as diagnostic adjuncts, prognostic biomarkers, and treatment response monitors; their clinical utility varies by cancer type and context.',
      explanation:
        '**Diagnostic vs. Prognostic vs. Predictive Biomarkers**\n' +
        '- Diagnostic: Helps establish diagnosis (e.g., AFP >400 + characteristic imaging = HCC diagnosis without biopsy).\n' +
        '- Prognostic: Predicts outcome regardless of treatment (e.g., elevated LDH in melanoma = worse prognosis).\n' +
        '- Predictive: Predicts response to specific therapy (e.g., HER2 amplification predicts trastuzumab response).\n\n' +
        '**Marker-Specific Clinical Details**\n\n' +
        '**PSA**: Normal <4 ng/mL (age-adjusted cutoffs exist). PSA velocity (rate of rise) and PSA density (PSA/prostate volume) improve specificity. ' +
        'Free-to-total PSA ratio <10% suggests cancer. PSA doubling time <3 months after treatment suggests aggressive recurrence.\n\n' +
        '**CA-125**: Normal <35 U/mL. Used for monitoring ovarian cancer treatment. Risk of Malignancy Index (RMI) combines CA-125 + ultrasound + menopausal status. ' +
        'Not recommended for general screening (poor PPV due to many benign causes of elevation).\n\n' +
        '**AFP**: Normal <10 ng/mL. >400 ng/mL with liver mass = HCC diagnosis (no biopsy needed per AASLD). ' +
        'AFP-L3 (lens culinaris–reactive AFP fraction) and DCP (des-gamma-carboxyprothrombin) improve HCC detection.\n\n' +
        '**Germ Cell Tumor Markers**: AFP (yolk sac tumor), hCG (choriocarcinoma), both elevated in mixed GCTs. ' +
        'Marker decline follows expected half-lives (AFP: 5–7 days; hCG: 24–36 hours). Failure to normalize predicts residual disease.',
      keyTerms: [
        { term: 'diagnostic biomarker', definition: 'Marker that aids in confirming a cancer diagnosis' },
        { term: 'prognostic biomarker', definition: 'Marker predicting disease outcome independent of treatment' },
        { term: 'predictive biomarker', definition: 'Marker predicting response or resistance to a specific therapy' },
        { term: 'PSA velocity', definition: 'Rate of PSA increase over time — rapid rise suggests cancer' },
        { term: 'PSA density', definition: 'PSA level divided by prostate volume — adjusts for BPH-related elevation' },
        { term: 'Risk of Malignancy Index', definition: 'Scoring system combining CA-125, ultrasound, and menopausal status for ovarian masses' },
        { term: 'AFP-L3', definition: 'Lens culinaris–reactive AFP fraction — more specific for hepatocellular carcinoma than total AFP' },
        { term: 'marker half-life', definition: 'Time for tumor marker to decrease by 50%; used to assess treatment adequacy in germ cell tumors' },
      ],
      clinicalNotes:
        'NCCN guidelines recommend CEA surveillance every 3–6 months for 5 years after curative CRC resection. ' +
        'CA-125 normalization after neoadjuvant chemotherapy in ovarian cancer is associated with better surgical outcomes. ' +
        'IGCCCG risk classification for metastatic nonseminoma requires AFP, hCG, and LDH at diagnosis: Good risk (AFP <1,000, hCG <5,000, LDH <1.5× ULN); Poor risk (AFP >10,000 or hCG >50,000 or LDH >10× ULN).',
    },
    4: {
      level: 4,
      summary: 'Advanced tumor marker applications include circulating tumor cells, exosomes, and tissue-based companion diagnostics guiding precision therapy.',
      explanation:
        '**Circulating Tumor Cells (CTCs)**\n' +
        'CellSearch is the only FDA-cleared CTC assay. ≥5 CTCs per 7.5 mL blood in metastatic breast cancer predicts worse OS. ' +
        'CTC enumeration is prognostic but has limited clinical adoption due to insufficient predictive utility over standard markers.\n\n' +
        '**Exosomes and Extracellular Vesicles**\n' +
        'Tumor-derived exosomes contain proteins, RNA, and DNA. ExoDx Prostate (IntelliScore) combines exosomal RNA biomarkers (PCA3, ERG) with standard PSA to reduce unnecessary biopsies.\n\n' +
        '**Tissue-Based Companion Diagnostics**\n' +
        '- PD-L1 IHC: Multiple assays (22C3 for pembrolizumab, 28-8 for nivolumab, SP142 for atezolizumab, SP263 for durvalumab). Scored as TPS (tumor proportion score) or CPS (combined positive score).\n' +
        '- HER2: IHC (0, 1+, 2+, 3+) with FISH confirmation for 2+. HER2-low (IHC 1+ or 2+/FISH-) is now a clinically relevant category for T-DXd.\n' +
        '- MMR/MSI: IHC for MLH1, MSH2, MSH6, PMS2 or PCR-based MSI testing. Concordance >95%.\n' +
        '- TMB: Assessed by NGS panel. Cutoff ≥10 mut/Mb for tissue-agnostic pembrolizumab. F1CDx is the FDA-approved companion diagnostic.\n\n' +
        '**Novel Protein Biomarkers**\n' +
        'HE4 (human epididymis protein 4): Combined with CA-125 in ROMA score for ovarian cancer. ' +
        'ProGRP (pro-gastrin releasing peptide): SCLC marker. ' +
        'Chromogranin A and synaptophysin: Neuroendocrine tumor markers.',
      keyTerms: [
        { term: 'circulating tumor cells', definition: 'Intact cancer cells found in the bloodstream, enumerated for prognosis' },
        { term: 'exosomes', definition: 'Tiny vesicles released by cells containing proteins and nucleic acids; tumor exosomes carry cancer biomarkers' },
        { term: 'companion diagnostic', definition: 'FDA-approved test linked to a specific therapeutic drug, required for treatment selection' },
        { term: 'PD-L1 TPS', definition: 'Tumor proportion score — percentage of tumor cells expressing PD-L1' },
        { term: 'PD-L1 CPS', definition: 'Combined positive score — PD-L1 positive cells (tumor + immune) divided by total tumor cells × 100' },
        { term: 'HER2-low', definition: 'IHC 1+ or IHC 2+/FISH-negative — now targetable with trastuzumab deruxtecan' },
        { term: 'TMB', definition: 'Tumor mutational burden — total mutations per megabase of sequenced DNA' },
      ],
      clinicalNotes:
        'PD-L1 scoring varies by assay and cancer type: TPS ≥50% for first-line pembrolizumab monotherapy in NSCLC; CPS ≥10 for pembrolizumab in gastric/esophageal; CPS ≥1 for cervical. ' +
        'HER2-low represents ~55% of HR+ and ~35% of TNBC breast cancers — dramatically expanding the T-DXd-eligible population. ' +
        'Universal MMR/MSI testing is recommended for all CRC (Lynch screening) and increasingly for all advanced solid tumors (immunotherapy biomarker).',
    },
    5: {
      level: 5,
      summary: 'Frontier biomarker research focuses on multi-analyte platforms, spatial proteomics, glycoproteomics, and AI-integrated biomarker discovery.',
      explanation:
        '**Multi-Analyte Liquid Biopsy Platforms**\n' +
        'Combining ctDNA, ctRNA, proteins, and metabolites in a single blood draw. ' +
        'CancerSEEK (Exact Sciences) combines ctDNA mutations in 16 genes + 8 protein biomarkers for multi-cancer detection. ' +
        'Olink proximity extension assay measures 3,000+ proteins simultaneously from minimal sample volume. ' +
        'SomaScan aptamer-based proteomics measures 7,000+ proteins for cancer detection and classification.\n\n' +
        '**Glycoproteomics**\n' +
        'Aberrant glycosylation is a hallmark of cancer. Glycan-based biomarkers improve specificity over protein alone. ' +
        'OncoBLIZZ glycoprotein panel for ovarian cancer shows improved sensitivity over CA-125. ' +
        'Core-fucosylated AFP (AFP-L3) is the prototype of glycan-refined tumor markers.\n\n' +
        '**Spatial Proteomics**\n' +
        'GeoMx Digital Spatial Profiling and CODEX/PhenoCycler enable quantification of 100+ proteins in tissue with spatial resolution. ' +
        'Combined spatial protein + transcriptomic profiling creates multi-omic tissue maps revealing biomarker context.\n\n' +
        '**AI-Integrated Biomarker Discovery**\n' +
        'Machine learning algorithms integrate multi-modal data (genomic, proteomic, imaging, clinical) for composite biomarker scores. ' +
        'AI-identified histology features (e.g., tumor-infiltrating lymphocyte density from H&E) predict immunotherapy response without additional testing. ' +
        'Foundation models trained on pan-cancer datasets identify novel biomarker signatures.',
      keyTerms: [
        { term: 'multi-analyte platform', definition: 'Technology measuring multiple biomarker types simultaneously from a single specimen' },
        { term: 'glycoproteomics', definition: 'Study of protein glycosylation patterns as cancer biomarkers' },
        { term: 'proximity extension assay', definition: 'Technology using paired antibody-DNA conjugates for high-specificity protein detection' },
        { term: 'spatial proteomics', definition: 'Quantifying proteins in tissue sections while preserving spatial location' },
        { term: 'aptamer', definition: 'Short nucleic acid molecule that binds specific proteins, used in proteomic assays' },
        { term: 'foundation model', definition: 'Large AI model trained on diverse datasets, adaptable to specific biomarker prediction tasks' },
      ],
      clinicalNotes:
        'Proteomic biomarker panels are entering clinical trials for early cancer detection (Grail Galleri uses methylomics; competitors are exploring proteomics). ' +
        'AI pathology tools (Paige.AI) are FDA-cleared for prostate cancer detection on H&E slides and are expanding to predictive biomarker applications. ' +
        'The biomarker landscape is shifting from single analytes to multi-modal signatures requiring computational interpretation. ' +
        'Regulatory frameworks (FDA, EMA) are evolving to accommodate AI-derived composite biomarkers and multi-cancer diagnostic platforms.',
    },
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'cancer-screening-guidelines', targetType: 'topic', relationship: 'sibling', label: 'Cancer Screening' },
    { targetId: 'cancer-staging-systems', targetType: 'topic', relationship: 'sibling', label: 'Cancer Staging' },
    { targetId: 'cell-cycle-and-cancer', targetType: 'concept', relationship: 'related', label: 'Cancer Biology' },
  ],
  tags: {
    systems: ['oncology', 'pathology', 'laboratory-medicine'],
    topics: ['tumor-markers', 'biomarkers', 'companion-diagnostics', 'liquid-biopsy'],
    keywords: ['PSA', 'CA-125', 'AFP', 'CEA', 'CA19-9', 'hCG', 'PD-L1', 'HER2', 'TMB', 'ctDNA', 'CTC'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
