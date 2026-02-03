/**
 * Biological Self — Oncology Specialty Database
 * 44 entries covering solid tumors, hematologic malignancies, treatment modalities,
 * screening guidelines, supportive care, and paraneoplastic syndromes.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type OncologyCategory =
  | 'solid-tumor' | 'hematologic-malignancy' | 'treatment-modality'
  | 'screening' | 'supportive-care' | 'paraneoplastic';

export interface OncologyEntry {
  id: string;
  name: string;
  nameEs: string;
  category: OncologyCategory;
  icd11: string;
  description: string;
  epidemiology: string;
  riskFactors: string[];
  clinicalFeatures: string[];
  staging: string;
  diagnostics: string[];
  treatment: string;
  prognosis: string;
  patientExplanation: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const onc = (
  id: string, name: string, nameEs: string, category: OncologyCategory,
  icd11: string, description: string, epidemiology: string, riskFactors: string[],
  clinicalFeatures: string[], staging: string, diagnostics: string[],
  treatment: string, prognosis: string, patientExplanation: string,
): OncologyEntry => ({
  id, name, nameEs, category, icd11, description, epidemiology, riskFactors,
  clinicalFeatures, staging, diagnostics, treatment, prognosis, patientExplanation,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const ONCOLOGY_ENTRIES: Record<string, OncologyEntry> = {

  // ===== SOLID TUMORS (18) ===================================================

  'nsclc': onc(
    'nsclc', 'Non-Small Cell Lung Cancer', 'Cancer de pulmon de celulas no pequenas', 'solid-tumor',
    '2C25', 'Most common lung cancer type (85%); includes adenocarcinoma, squamous cell, and large cell subtypes.',
    'Leading cause of cancer death worldwide; ~230,000 new cases/yr in US; median age 70; adenocarcinoma most common subtype.',
    ['Tobacco smoking (80-90%)', 'Radon exposure', 'Asbestos and occupational carcinogens', 'Air pollution', 'Family history', 'Prior radiation therapy to chest'],
    ['Persistent cough or hemoptysis', 'Dyspnea and chest pain', 'Weight loss and fatigue', 'Hoarseness (recurrent laryngeal nerve invasion)', 'Superior vena cava syndrome', 'Pancoast syndrome (shoulder pain, Horner syndrome)'],
    'TNM staging (AJCC 8th): Stage I (localized), II (local spread), III (nodal involvement), IV (distant metastases). PET/CT and brain MRI for staging workup.',
    ['CT chest with contrast', 'PET/CT for staging', 'Tissue biopsy (bronchoscopy, CT-guided, or surgical)', 'Molecular testing: EGFR, ALK, ROS1, BRAF, PD-L1, KRAS G12C', 'Brain MRI', 'Pulmonary function tests if surgery considered'],
    'Stage I-II: surgical resection +/- adjuvant chemo (cisplatin-based) or osimertinib (EGFR+); Stage III: concurrent chemoradiation + durvalumab; Stage IV: driver mutation-guided targeted therapy (osimertinib, alectinib) or immunotherapy (pembrolizumab) +/- chemo.',
    'Stage I: 70-90% 5-yr survival; Stage II: 50-60%; Stage III: 15-35%; Stage IV: 5-yr survival 5-10%, improved with targeted therapy and immunotherapy.',
    'Lung cancer treatment has advanced dramatically. Molecular testing of your tumor can identify targeted treatments that may be more effective and better tolerated than traditional chemotherapy.',
  ),

  'sclc': onc(
    'sclc', 'Small Cell Lung Cancer', 'Cancer de pulmon de celulas pequenas', 'solid-tumor',
    '2C25.1', 'Aggressive neuroendocrine lung cancer (15%); strongly associated with smoking; rapid doubling time.',
    'About 30,000 cases/yr in US; almost exclusively in smokers; male predominance decreasing; median age 70.',
    ['Heavy tobacco smoking (near-universal)', 'Radon exposure', 'Asbestos exposure', 'Family history of lung cancer'],
    ['Rapidly enlarging central mass', 'Cough, dyspnea, hemoptysis', 'Superior vena cava syndrome', 'Paraneoplastic syndromes (SIADH, Cushing, Lambert-Eaton)', 'Weight loss and anorexia', 'Bone pain from metastases'],
    'Limited stage (confined to one hemithorax and regional nodes) vs. extensive stage (beyond). Two-thirds present with extensive disease.',
    ['CT chest/abdomen/pelvis', 'PET/CT', 'Brain MRI (high CNS metastasis rate)', 'Tissue biopsy with neuroendocrine markers (chromogranin, synaptophysin)', 'CBC, LFTs, LDH', 'Sodium level (SIADH screening)'],
    'Limited: concurrent cisplatin/etoposide + thoracic radiation + prophylactic cranial irradiation (PCI); Extensive: platinum/etoposide + atezolizumab or durvalumab + PCI or surveillance MRI.',
    'Limited stage: median survival 15-20 months, 20-25% 5-yr survival; Extensive stage: median survival 10-12 months with immunotherapy, 5-yr survival <5%. Very chemo-sensitive but high relapse rate.',
    'Small cell lung cancer responds well to initial treatment but tends to return. Adding immunotherapy has improved outcomes. Prophylactic brain radiation can prevent spread to the brain.',
  ),

  'breast-cancer': onc(
    'breast-cancer', 'Breast Cancer', 'Cancer de mama', 'solid-tumor',
    '2C6', 'Most common cancer in women; heterogeneous disease classified by receptor status (ER, PR, HER2).',
    'About 300,000 new cases/yr in US; 1 in 8 lifetime risk for women; median age 62; <1% in men.',
    ['Female sex and increasing age', 'BRCA1/BRCA2 mutations', 'Family history (first-degree relative)', 'Early menarche / late menopause', 'Nulliparity or late first pregnancy', 'HRT use, obesity, alcohol', 'Prior chest radiation'],
    ['Painless breast mass (most common)', 'Nipple discharge or retraction', 'Skin changes (peau d\'orange, dimpling)', 'Axillary lymphadenopathy', 'Inflammatory breast cancer (erythema, warmth)', 'Paget disease of nipple'],
    'TNM (AJCC 8th) plus prognostic staging incorporating grade, ER/PR, HER2, and genomic assays (Oncotype DX). Stage I-III (localized/regional), Stage IV (metastatic).',
    ['Diagnostic mammogram and ultrasound', 'Core needle biopsy with ER, PR, HER2, Ki-67', 'Breast MRI for extent of disease', 'Genomic assays (Oncotype DX, MammaPrint)', 'Sentinel lymph node biopsy', 'CT/bone scan/PET for staging if advanced'],
    'ER+/HER2-: endocrine therapy (tamoxifen or AI) +/- CDK4/6 inhibitor; HER2+: trastuzumab + pertuzumab + chemo; Triple-negative: chemo +/- immunotherapy (pembrolizumab). Surgery: lumpectomy + radiation or mastectomy. Neoadjuvant chemo for locally advanced.',
    'Overall 5-yr survival ~90%; Stage I: >99%; Stage II: ~93%; Stage III: ~72%; Stage IV: ~28%. ER+ has best long-term prognosis; triple-negative worst but improving with immunotherapy.',
    'Breast cancer treatment is highly personalized based on your tumor\'s characteristics. Many women are cured with a combination of surgery, radiation, and medicines tailored to their cancer type.',
  ),

  'colorectal-cancer': onc(
    'colorectal-cancer', 'Colorectal Cancer', 'Cancer colorrectal', 'solid-tumor',
    '2B90', 'Third most common cancer; arises from adenomatous polyps via adenoma-carcinoma sequence.',
    'About 150,000 new cases/yr in US; increasing in adults <50; lifetime risk ~4%; 3rd leading cause of cancer death.',
    ['Age >45', 'Adenomatous polyps', 'Inflammatory bowel disease', 'Family history or hereditary syndromes (Lynch, FAP)', 'Red/processed meat, low fiber diet', 'Obesity, smoking, alcohol', 'Type 2 diabetes'],
    ['Change in bowel habits', 'Rectal bleeding or melena', 'Iron deficiency anemia', 'Abdominal pain or obstruction', 'Weight loss', 'Right-sided: occult bleeding, anemia; Left-sided: obstruction, hematochezia'],
    'TNM (AJCC 8th): Stage I (submucosa/muscularis), II (through wall), III (node-positive), IV (distant metastases, commonly liver/lung).',
    ['Colonoscopy with biopsy', 'CT chest/abdomen/pelvis', 'CEA level (baseline)', 'MSI/MMR testing and KRAS/NRAS/BRAF molecular testing', 'MRI pelvis for rectal cancer', 'PET/CT if metastatic disease suspected'],
    'Stage I-III colon: surgical resection + adjuvant FOLFOX (stage III, high-risk II); Rectal: neoadjuvant chemoradiation + surgery (total neoadjuvant increasingly used); Stage IV: FOLFOX/FOLFIRI +/- bevacizumab or cetuximab (RAS WT); MSI-H: pembrolizumab.',
    'Stage I: >90% 5-yr survival; Stage II: 70-85%; Stage III: 50-70%; Stage IV: 10-15%, but resectable liver mets may achieve 40% 5-yr survival.',
    'Colorectal cancer is often preventable through screening colonoscopies that find and remove polyps before they become cancer. If diagnosed, treatment options depend on the stage and molecular features.',
  ),

  'prostate-cancer': onc(
    'prostate-cancer', 'Prostate Cancer', 'Cancer de prostata', 'solid-tumor',
    '2C82', 'Most common non-skin cancer in men; usually adenocarcinoma; highly variable natural history.',
    'About 290,000 new cases/yr in US; 1 in 8 lifetime risk; median age 66; more common and aggressive in Black men.',
    ['Age >50', 'African American race', 'Family history (BRCA2 mutations)', 'High-fat diet', 'Obesity'],
    ['Often asymptomatic (detected by PSA)', 'Urinary symptoms (frequency, hesitancy, nocturia)', 'Hematuria', 'Bone pain (metastatic disease)', 'Erectile dysfunction', 'Spinal cord compression (advanced)'],
    'TNM staging + Gleason score (Grade Group 1-5) + PSA level. Risk groups: very low, low, intermediate (favorable/unfavorable), high, very high, metastatic.',
    ['PSA and digital rectal exam', 'Multiparametric prostate MRI', 'Transrectal or transperineal biopsy (ISUP grading)', 'Bone scan if PSA >20 or high-grade', 'CT or PSMA-PET for staging', 'Germline genetic testing (BRCA2)'],
    'Low risk: active surveillance preferred; Intermediate: surgery (radical prostatectomy) or radiation + short-course ADT; High risk: radiation + long-term ADT +/- abiraterone; Metastatic: ADT + docetaxel or novel hormonal agents (abiraterone, enzalutamide); mCRPC: sequential agents, PARP inhibitors (BRCA+), Lu-PSMA-617.',
    'Localized: >98% 5-yr survival; regional: >98%; distant: 5-yr survival ~30% but improving with combination therapies. Gleason 6 rarely lethal.',
    'Many prostate cancers grow slowly and may only need monitoring (active surveillance). If treatment is needed, there are many effective options. Discuss potential side effects like urinary and sexual function changes with your doctor.',
  ),

  'pancreatic-cancer': onc(
    'pancreatic-cancer', 'Pancreatic Cancer', 'Cancer de pancreas', 'solid-tumor',
    '2C10', 'Aggressive adenocarcinoma of the pancreas; 4th leading cause of cancer death; poor overall prognosis.',
    'About 65,000 new cases/yr in US; median age 70; equal sex distribution; incidence rising.',
    ['Tobacco smoking', 'Chronic pancreatitis', 'Obesity and type 2 diabetes', 'Family history (BRCA2, PALB2, Lynch)', 'Heavy alcohol use', 'Age >55'],
    ['Painless jaundice (head tumors)', 'Epigastric pain radiating to back', 'Unexplained weight loss', 'New-onset diabetes', 'Steatorrhea (exocrine insufficiency)', 'Courvoisier sign (palpable gallbladder)', 'Migratory thrombophlebitis (Trousseau syndrome)'],
    'TNM staging: Resectable, borderline resectable, locally advanced (unresectable), metastatic. Vascular involvement (SMA, celiac, SMV/portal vein) determines resectability.',
    ['CT pancreas protocol (triple-phase)', 'CA 19-9 level', 'EUS with FNA for tissue diagnosis', 'MRI/MRCP if CT inconclusive', 'Chest CT for metastatic workup', 'Genetic testing (germline BRCA2, PALB2)'],
    'Resectable: surgery (Whipple or distal pancreatectomy) + adjuvant mFOLFIRINOX; Borderline: neoadjuvant FOLFIRINOX or gem/nab-paclitaxel + radiation then surgery; Locally advanced/metastatic: FOLFIRINOX or gem/nab-paclitaxel; BRCA+: platinum-based chemo + olaparib maintenance.',
    'Resectable: 5-yr survival 20-25% with adjuvant therapy; locally advanced: median survival 12-18 months; metastatic: median survival 6-11 months. Overall 5-yr survival ~10%.',
    'Pancreatic cancer is challenging, but new treatments including combination chemotherapy and genetic-targeted therapies are improving outcomes. Surgical removal offers the best chance for cure when possible.',
  ),

  'hepatocellular-carcinoma': onc(
    'hepatocellular-carcinoma', 'Hepatocellular Carcinoma', 'Carcinoma hepatocelular', 'solid-tumor',
    '2C12.0', 'Primary liver cancer arising from hepatocytes; strongly associated with cirrhosis and viral hepatitis.',
    'About 40,000 new cases/yr in US; 3:1 male predominance; rising incidence due to NASH; 5th most common cancer worldwide.',
    ['Cirrhosis (any etiology)', 'Chronic hepatitis B (even without cirrhosis)', 'Chronic hepatitis C', 'NASH/metabolic syndrome', 'Alcohol-related liver disease', 'Aflatoxin B1 exposure', 'Hemochromatosis'],
    ['Often asymptomatic (found on screening)', 'Right upper quadrant pain', 'Hepatomegaly', 'Weight loss and anorexia', 'Decompensated cirrhosis (ascites, jaundice)', 'Paraneoplastic: erythrocytosis, hypercalcemia, hypoglycemia'],
    'BCLC staging (0-D) incorporating tumor burden, liver function (Child-Pugh), and performance status. Also Milan criteria for transplant eligibility.',
    ['Surveillance ultrasound +/- AFP every 6 months in cirrhotics', 'Multiphasic CT or MRI (arterial enhancement + washout = diagnostic)', 'AFP, AFP-L3, DCP biomarkers', 'Biopsy if imaging indeterminate', 'Assess liver function (Child-Pugh, MELD)'],
    'BCLC 0-A: resection, ablation (RFA/MWA), or liver transplant (Milan criteria); BCLC B: TACE; BCLC C: atezolizumab + bevacizumab (first-line systemic) or sorafenib/lenvatinib; BCLC D: best supportive care.',
    'BCLC 0-A: 5-yr survival 50-70% (transplant best); BCLC B: median 20 months; BCLC C: median 12-16 months with atezolizumab/bevacizumab; BCLC D: <3 months.',
    'Liver cancer can often be detected early through regular screening if you have liver disease. Treatments range from surgery or transplant for early-stage to medications for advanced disease.',
  ),

  'gastric-cancer': onc(
    'gastric-cancer', 'Gastric Cancer', 'Cancer gastrico', 'solid-tumor',
    '2B72', 'Adenocarcinoma of the stomach; classified as intestinal or diffuse type (Lauren classification).',
    'About 26,000 new cases/yr in US; much higher in East Asia; declining incidence in West; M:F 1.5:1; median age 68.',
    ['H. pylori infection (strongest risk factor)', 'Smoking', 'High salt and smoked food diet', 'Pernicious anemia and atrophic gastritis', 'Family history (CDH1 mutation for diffuse type)', 'Prior gastric surgery'],
    ['Epigastric pain and dyspepsia', 'Unintentional weight loss', 'Nausea, vomiting, early satiety', 'Dysphagia (GEJ tumors)', 'GI bleeding or iron deficiency anemia', 'Virchow node (left supraclavicular), Sister Mary Joseph nodule, Krukenberg tumor (ovarian mets)'],
    'TNM (AJCC 8th): depth of invasion (T), nodal involvement (N), and metastases (M). Adequate staging requires 15+ lymph nodes at surgery.',
    ['Upper endoscopy with biopsy', 'CT chest/abdomen/pelvis', 'EUS for local staging (T and N)', 'PET/CT if metastatic disease suspected', 'HER2 testing, PD-L1 CPS, MSI status', 'Diagnostic laparoscopy for locally advanced disease'],
    'Localized: endoscopic resection (T1a) or gastrectomy + D2 lymphadenectomy + perioperative FLOT chemo; Locally advanced: perioperative chemo (FLOT) + surgery + adjuvant nivolumab (if residual disease); Metastatic: FOLFOX or CAPOX +/- trastuzumab (HER2+) +/- nivolumab (CPS>=5).',
    'Stage IA: >90% 5-yr survival; Stage IB-II: 50-70%; Stage III: 20-40%; Stage IV: median survival 12-15 months with modern regimens.',
    'Gastric cancer treatment often involves a combination of chemotherapy and surgery. Testing your tumor for HER2 and other markers helps select the best treatment. H. pylori treatment may reduce risk.',
  ),

  'esophageal-cancer': onc(
    'esophageal-cancer', 'Esophageal Cancer', 'Cancer de esofago', 'solid-tumor',
    '2B70', 'Two main types: squamous cell (upper/mid esophagus) and adenocarcinoma (distal/GEJ, arising from Barrett).',
    'About 21,000 new cases/yr in US; adenocarcinoma now more common in Western countries; M:F 4:1; median age 67.',
    ['Barrett esophagus (adenocarcinoma)', 'GERD', 'Tobacco and alcohol (synergistic for SCC)', 'Obesity', 'Achalasia', 'Caustic injury', 'Hot beverages (SCC)'],
    ['Progressive dysphagia (solids then liquids)', 'Unintentional weight loss', 'Odynophagia', 'Hoarseness (recurrent laryngeal nerve)', 'Chronic cough or aspiration', 'GI bleeding'],
    'TNM (AJCC 8th) with separate staging for SCC and adenocarcinoma incorporating grade and location.',
    ['Upper endoscopy with biopsy', 'EUS for T and N staging', 'CT chest/abdomen', 'PET/CT for distant staging', 'HER2, PD-L1, MSI testing', 'Bronchoscopy if tracheal invasion suspected'],
    'Localized (T1a): endoscopic mucosal resection; Locally advanced: neoadjuvant chemoradiation (CROSS regimen: carboplatin/paclitaxel + RT) then esophagectomy + adjuvant nivolumab; Metastatic: FOLFOX/CAPOX +/- nivolumab +/- trastuzumab (HER2+).',
    'Stage I: 60-80% 5-yr survival; Stage II: 30-40%; Stage III: 15-25%; Stage IV: <5%. Adjuvant nivolumab after trimodality therapy improved DFS.',
    'Esophageal cancer treatment has improved with combination approaches. Barrett esophagus screening can catch pre-cancerous changes early. Difficulty swallowing should always be evaluated promptly.',
  ),

  'renal-cell-carcinoma': onc(
    'renal-cell-carcinoma', 'Renal Cell Carcinoma', 'Carcinoma de celulas renales', 'solid-tumor',
    '2C90', 'Most common kidney cancer in adults; clear cell (70-80%) is predominant subtype; known for unpredictable behavior.',
    'About 80,000 new cases/yr in US; M:F 2:1; median age 64; incidental detection increasing with imaging.',
    ['Smoking', 'Obesity and hypertension', 'VHL syndrome (clear cell)', 'Acquired cystic kidney disease (dialysis)', 'Family history', 'Tuberous sclerosis'],
    ['Classic triad (rare): hematuria, flank pain, palpable mass', 'Most found incidentally on imaging', 'Paraneoplastic: erythrocytosis, hypercalcemia, Stauffer syndrome', 'Varicocele (left-sided, from renal vein invasion)', 'Constitutional symptoms (fever, weight loss)'],
    'TNM (AJCC 8th): T1 (<=7 cm, confined), T2 (>7 cm, confined), T3 (renal vein/perinephric), T4 (beyond Gerota fascia). IMDC criteria for metastatic risk stratification.',
    ['CT abdomen with and without contrast (enhancing renal mass)', 'CT chest for staging', 'MRI if IVC thrombus suspected', 'Renal biopsy if diagnosis uncertain', 'Metastatic workup: brain MRI if symptomatic, bone scan if elevated ALP'],
    'Localized: partial (preferred T1) or radical nephrectomy; adjuvant pembrolizumab for high-risk; Metastatic: ipilimumab + nivolumab (intermediate/poor risk) or pembrolizumab + axitinib (all risk groups); cytoreductive nephrectomy in select cases. Resistant to conventional chemotherapy.',
    'Localized: 5-yr survival >90% (T1); Metastatic: median survival 3-5 years with modern IO/TKI combos; IMDC favorable risk: best outcomes; complete responses rare but durable.',
    'Kidney cancer is often found incidentally on imaging and cured with surgery. Even if advanced, new immunotherapy combinations have dramatically improved survival.',
  ),

  'bladder-cancer': onc(
    'bladder-cancer', 'Bladder Cancer', 'Cancer de vejiga', 'solid-tumor',
    '2C94', 'Most common urothelial malignancy; classified as non-muscle-invasive (NMIBC) or muscle-invasive (MIBC).',
    'About 83,000 new cases/yr in US; M:F 3:1; median age 73; 4th most common cancer in men.',
    ['Tobacco smoking (strongest, 50% of cases)', 'Occupational chemical exposure (aromatic amines, benzidine)', 'Chronic cystitis or schistosomiasis (SCC type)', 'Prior pelvic radiation', 'Cyclophosphamide exposure', 'Arsenic in drinking water'],
    ['Painless gross hematuria (most common)', 'Irritative voiding symptoms (frequency, urgency)', 'Recurrent UTI-like symptoms', 'Flank pain (ureteral obstruction)', 'Pelvic pain (advanced)', 'Lower extremity edema (advanced)'],
    'TNM: Ta (papillary, non-invasive), Tis (CIS), T1 (subepithelial), T2 (muscle-invasive), T3 (perivesical), T4 (adjacent organs). NMIBC risk groups: low, intermediate, high.',
    ['Cystoscopy with biopsy/TURBT', 'Urine cytology', 'CT urogram', 'Bimanual exam under anesthesia', 'Upper tract imaging', 'PD-L1 testing for advanced disease'],
    'NMIBC: TURBT + intravesical BCG (high-risk) or mitomycin; High-risk BCG-unresponsive: pembrolizumab or nadofaragene; MIBC: neoadjuvant cisplatin-based chemo + radical cystectomy + adjuvant nivolumab; Metastatic: enfortumab vedotin + pembrolizumab (first-line) or cisplatin-based chemo + avelumab maintenance.',
    'NMIBC: 5-yr survival >90% but 50-70% recurrence; MIBC: 5-yr survival 50-60% with neoadjuvant chemo + surgery; Metastatic: median survival 12-15 months, improving with EV + pembro.',
    'Bladder cancer often recurs, so regular cystoscopy follow-up is essential. Blood in the urine should always be evaluated. Quitting smoking is the most important preventive step.',
  ),

  'ovarian-cancer': onc(
    'ovarian-cancer', 'Ovarian Cancer', 'Cancer de ovario', 'solid-tumor',
    '2C73', 'Leading cause of gynecologic cancer death; high-grade serous is most common and aggressive subtype.',
    'About 20,000 new cases/yr in US; median age 63; lifetime risk 1.3%; 70% present at advanced stage.',
    ['BRCA1/BRCA2 mutations (highest risk)', 'Lynch syndrome', 'Family history', 'Nulliparity', 'Early menarche / late menopause', 'Endometriosis (clear cell/endometrioid)', 'HRT (estrogen only)'],
    ['Vague abdominal/pelvic symptoms (bloating, early satiety)', 'Abdominal distension and ascites', 'Pelvic or abdominal mass', 'Urinary frequency', 'Change in bowel habits', 'Unintentional weight loss'],
    'FIGO staging (surgical): Stage I (ovary confined), II (pelvic extension), III (abdominal spread/nodes), IV (distant metastases). Most present as Stage III-IV.',
    ['Pelvic exam and transvaginal ultrasound', 'CA-125 level (elevated in >80% of advanced)', 'CT chest/abdomen/pelvis', 'Surgical staging with optimal debulking', 'Germline and somatic BRCA1/2 and HRD testing', 'Consider HE4 and ROMA algorithm'],
    'Primary debulking surgery (goal: no residual disease) + adjuvant carboplatin/paclitaxel x6 cycles; BRCA+/HRD+: olaparib maintenance; bevacizumab in select cases. Neoadjuvant chemo if not upfront surgical candidate. Recurrent: platinum-sensitive vs resistant guides therapy.',
    'Stage I: 90% 5-yr survival; Stage II: 70%; Stage III: 30-40%; Stage IV: 15-20%. BRCA+ paradoxically better chemo-sensitivity. PARP inhibitors significantly extend progression-free survival.',
    'Ovarian cancer is often found at an advanced stage because symptoms are vague. Genetic testing is important because BRCA mutations change treatment and help screen family members. New maintenance therapies are improving outcomes.',
  ),

  'cervical-cancer': onc(
    'cervical-cancer', 'Cervical Cancer', 'Cancer de cuello uterino', 'solid-tumor',
    '2C77', 'HPV-driven malignancy; squamous cell (70%) and adenocarcinoma (25%); largely preventable with vaccination and screening.',
    'About 14,000 new cases/yr in US; 4th most common cancer in women globally; median age 50; major burden in low-resource settings.',
    ['Persistent high-risk HPV infection (HPV 16, 18)', 'Lack of screening', 'Immunosuppression (HIV)', 'Smoking', 'Early sexual activity', 'Multiple sexual partners', 'Oral contraceptive use (prolonged)'],
    ['Often asymptomatic (detected on screening)', 'Abnormal vaginal bleeding (post-coital, intermenstrual)', 'Vaginal discharge (watery or blood-tinged)', 'Pelvic pain (advanced)', 'Hydronephrosis and leg edema (advanced)', 'Fistula formation (very advanced)'],
    'FIGO 2018 staging (clinical + imaging): Stage I (cervix confined), II (beyond uterus, not pelvic wall), III (pelvic wall/hydronephrosis/nodes), IV (bladder/rectum/distant).',
    ['Pap smear and HPV testing', 'Colposcopy with biopsy', 'Pelvic exam under anesthesia', 'MRI pelvis for local staging', 'PET/CT for nodal and distant staging', 'Cystoscopy/proctoscopy if invasion suspected'],
    'Stage IA1: cone biopsy or simple hysterectomy; Stage IA2-IB2: radical hysterectomy + pelvic lymphadenectomy or concurrent chemoradiation (cisplatin); Stage IB3-IVA: concurrent chemoradiation + brachytherapy + adjuvant pembrolizumab; Stage IVB: cisplatin/paclitaxel/bevacizumab + pembrolizumab (PD-L1+).',
    'Stage I: 80-95% 5-yr survival; Stage II: 60-75%; Stage III: 30-50%; Stage IV: 15-20%. Pembrolizumab addition has improved advanced-stage outcomes.',
    'Cervical cancer is highly preventable with HPV vaccination and regular Pap smears. When detected early, it is very curable. Even advanced cases have new treatment options with immunotherapy.',
  ),

  'endometrial-cancer': onc(
    'endometrial-cancer', 'Endometrial Cancer', 'Cancer de endometrio', 'solid-tumor',
    '2C76', 'Most common gynecologic cancer; Type I (endometrioid, estrogen-driven) and Type II (serous, clear cell, aggressive).',
    'About 66,000 new cases/yr in US; median age 63; incidence rising with obesity epidemic; most present at early stage.',
    ['Obesity (excess estrogen from aromatization)', 'Unopposed estrogen / tamoxifen use', 'Early menarche / late menopause', 'Nulliparity', 'PCOS', 'Lynch syndrome', 'Type 2 diabetes and hypertension'],
    ['Abnormal uterine bleeding (90%)', 'Postmenopausal bleeding', 'Vaginal discharge', 'Pelvic pain or pressure (advanced)', 'Hematometra in elderly'],
    'FIGO surgical staging: Stage I (uterus confined), II (cervical stroma invasion), III (regional spread), IV (bladder/bowel or distant). Molecular classification: POLE ultramutated, MSI-H, copy-number low, copy-number high (p53 mutant).',
    ['Endometrial biopsy (pipelle) or D&C', 'Transvaginal ultrasound (endometrial stripe >4 mm postmenopausal)', 'CT chest/abdomen/pelvis or MRI', 'Molecular/genomic testing (MMR/MSI, p53, POLE)', 'CA-125 if advanced', 'Preoperative assessment for surgical fitness'],
    'Stage I-II: total hysterectomy + BSO + staging + sentinel lymph node; adjuvant radiation or chemo based on risk. Stage III-IV: surgery + carboplatin/paclitaxel +/- radiation; MSI-H/dMMR: pembrolizumab + lenvatinib or dostarlimab; p53-mutant (serous): aggressive chemo + trastuzumab if HER2+.',
    'Stage I: 85-95% 5-yr survival; Stage II: 75%; Stage III: 50-65%; Stage IV: 15-25%. POLE-mutated has excellent prognosis; p53-mutant (Type II) worst.',
    'Endometrial cancer usually presents early with abnormal bleeding and is highly curable with surgery. Molecular testing of the tumor now guides treatment decisions. Maintaining a healthy weight reduces risk.',
  ),

  'melanoma': onc(
    'melanoma', 'Melanoma', 'Melanoma', 'solid-tumor',
    '2C30.Z', 'Most lethal skin cancer; arises from melanocytes; remarkable response to immunotherapy in advanced disease.',
    'About 100,000 new cases/yr in US; incidence rising; median age 65; leading cancer death in young adults (25-30).',
    ['UV radiation (intermittent intense > chronic)', 'Fair skin, light eyes, red hair', 'Multiple or atypical nevi', 'Family history / CDKN2A mutation', 'Personal history of melanoma', 'Immunosuppression', 'History of blistering sunburns'],
    ['Changing mole (ABCDE: Asymmetry, Border, Color, Diameter, Evolution)', 'New pigmented lesion', 'Amelanotic melanoma (non-pigmented)', 'Satellite lesions or in-transit metastases', 'Regional lymphadenopathy', 'Metastatic symptoms (brain, lung, liver, bone)'],
    'AJCC 8th TNM: Breslow depth, ulceration, mitotic rate determine T stage. Sentinel lymph node status critical for staging. Stage I-II (localized), III (nodal), IV (distant).',
    ['Full-body skin exam with dermoscopy', 'Excisional biopsy (punch or excisional, NOT shave for suspected melanoma)', 'Sentinel lymph node biopsy (if >0.8 mm or ulcerated)', 'BRAF V600 mutation testing', 'CT/PET for staging (stage III-IV)', 'Brain MRI for stage III-IV', 'LDH level'],
    'Stage I-II: wide local excision (margins per Breslow depth); adjuvant nivolumab or pembrolizumab (stage IIB-III); Stage III resectable: neoadjuvant nivo + ipi then surgery; Stage IV: nivolumab + ipilimumab or pembrolizumab; BRAF+: dabrafenib + trametinib; nivolumab + relatlimab.',
    'Stage I: 95-99% 5-yr survival; Stage II: 80-90%; Stage III: 40-78% (improving with adjuvant IO); Stage IV: 5-yr survival ~30-50% with dual IO (vs <10% pre-immunotherapy era).',
    'Melanoma treatment has been revolutionized by immunotherapy. Early detection through regular skin checks is critical. Use sunscreen, avoid tanning beds, and see a dermatologist for any changing moles.',
  ),

  'thyroid-cancer': onc(
    'thyroid-cancer', 'Thyroid Cancer', 'Cancer de tiroides', 'solid-tumor',
    '2D10', 'Most common endocrine malignancy; papillary (80-85%) has excellent prognosis; anaplastic is rapidly fatal.',
    'About 44,000 new cases/yr in US; F:M 3:1; median age 50; incidence has tripled due to incidental detection, now stabilizing.',
    ['Radiation exposure (especially childhood)', 'Family history (MEN2 for medullary)', 'Iodine deficiency or excess', 'Hashimoto thyroiditis', 'Cowden syndrome', 'Gardner syndrome'],
    ['Painless thyroid nodule (most common)', 'Cervical lymphadenopathy', 'Hoarseness (recurrent laryngeal nerve invasion)', 'Dysphagia or dyspnea (advanced)', 'Rapidly enlarging mass (anaplastic)', 'Diarrhea and flushing (medullary)'],
    'AJCC 8th TNM; differentiated thyroid cancer: age is a staging factor (age <55 = max Stage II). Risk stratification: ATA low, intermediate, high risk for recurrence.',
    ['Thyroid ultrasound with TI-RADS classification', 'FNA biopsy (Bethesda classification)', 'Molecular testing (Afirma, ThyroSeq) for indeterminate nodules', 'Thyroglobulin (DTC) or calcitonin (medullary)', 'Cross-sectional imaging for advanced disease', 'Genetic testing for RET (medullary)'],
    'Papillary/follicular: thyroidectomy (total or lobectomy based on risk) +/- RAI ablation + TSH suppression with levothyroxine; Medullary: total thyroidectomy + neck dissection (no RAI), selpercatinib/pralsetinib for RET-mutant; Anaplastic: multimodal (chemo + RT + surgery if feasible), lenvatinib + pembrolizumab, dabrafenib + trametinib if BRAF+.',
    'Papillary: >98% 10-yr survival; Follicular: >95% 10-yr survival; Medullary: 80-90% 10-yr; Anaplastic: median survival 3-6 months. Overall thyroid cancer-specific mortality very low.',
    'Most thyroid cancers have an excellent outlook. Treatment typically involves surgery and sometimes radioactive iodine. Lifelong thyroid hormone replacement is needed after surgery.',
  ),

  'head-neck-scc': onc(
    'head-neck-scc', 'Head and Neck Squamous Cell Carcinoma', 'Carcinoma epidermoide de cabeza y cuello', 'solid-tumor',
    '2C2D', 'SCC of oral cavity, oropharynx, larynx, hypopharynx; HPV-positive oropharyngeal cancer is a distinct entity.',
    'About 66,000 new cases/yr in US; M:F 3:1; HPV+ oropharyngeal rising in younger patients; tobacco-related declining.',
    ['Tobacco and alcohol (synergistic)', 'HPV infection (oropharynx, especially HPV-16)', 'Betel nut chewing', 'Poor oral hygiene', 'Plummer-Vinson syndrome', 'EBV (nasopharyngeal)'],
    ['Non-healing mouth ulcer or mass', 'Persistent sore throat or hoarseness', 'Dysphagia or odynophagia', 'Otalgia (referred ear pain)', 'Cervical lymphadenopathy (may be presenting sign)', 'Cranial nerve deficits (advanced)'],
    'AJCC 8th TNM with separate staging for HPV+ oropharynx (better prognosis stage-for-stage). p16 immunohistochemistry as HPV surrogate.',
    ['Direct laryngoscopy and biopsy under anesthesia', 'p16/HPV testing for oropharyngeal tumors', 'CT neck with contrast and CT chest', 'PET/CT for staging', 'MRI for base of tongue or perineural invasion', 'Dental evaluation pre-radiation'],
    'Early stage: surgery or radiation alone; Locally advanced: concurrent cisplatin + radiation (standard) or surgery + adjuvant chemo-RT; Recurrent/metastatic: pembrolizumab +/- chemo (KEYNOTE-048); cetuximab-based regimens; HPV+ de-escalation trials ongoing.',
    'HPV+: 80-90% 3-yr survival; HPV-: 50-60% 3-yr survival. Early stage: >80% cure; locally advanced: 40-60% cure. HPV status is the strongest prognostic factor for oropharyngeal cancer.',
    'HPV-related throat cancers have an excellent prognosis. Quitting tobacco and alcohol is essential. Treatment may affect swallowing, speech, and appearance — a multidisciplinary team provides comprehensive support.',
  ),

  'sarcoma': onc(
    'sarcoma', 'Soft Tissue Sarcoma', 'Sarcoma de tejidos blandos', 'solid-tumor',
    '2B5T', 'Heterogeneous group of mesenchymal malignancies; >80 histologic subtypes; rare tumors requiring expert management.',
    'About 13,000 new cases/yr in US; all ages; slight male predominance; represent <1% of adult cancers.',
    ['Prior radiation therapy', 'Chronic lymphedema (angiosarcoma)', 'Li-Fraumeni syndrome (TP53)', 'Neurofibromatosis (MPNST)', 'Vinyl chloride (hepatic angiosarcoma)', 'Immunosuppression (Kaposi sarcoma)'],
    ['Painless enlarging soft tissue mass', 'Mass >5 cm is concerning', 'Deep-seated location (subfascial)', 'Pain (only in 1/3)', 'Retroperitoneal mass (GI symptoms, back pain)', 'Site-specific symptoms depending on location'],
    'AJCC 8th TNM incorporating tumor size, grade (FNCLCC), depth, and site. Separate staging for retroperitoneal, extremity, and head/neck sites.',
    ['MRI of primary site (preferred)', 'Core needle biopsy (NOT excisional for large tumors)', 'CT chest for lung metastasis screening', 'Histologic subtyping and grading', 'Molecular testing (translocations, MDM2 amplification)', 'CT abdomen/pelvis for retroperitoneal tumors'],
    'Localized: wide surgical resection + radiation (pre- or post-op for high-grade extremity); Metastatic: doxorubicin-based chemo (first-line); trabectedin, eribulin, pazopanib for specific subtypes; GIST: imatinib (KIT/PDGFRA mutant). Subtype-specific approaches essential.',
    'Localized: 5-yr survival 50-80% (grade and size dependent); Metastatic: median survival 12-18 months. GIST with imatinib: dramatically improved survival. Histologic subtype is most important prognostic factor.',
    'Sarcomas are rare cancers that need treatment at specialized centers. A growing lump that is deep, larger than a golf ball, or painful should be evaluated. Treatment is tailored to the specific subtype.',
  ),

  'gbm': onc(
    'gbm', 'Glioblastoma (GBM)', 'Glioblastoma', 'solid-tumor',
    '2A00.0', 'Most common and aggressive primary brain tumor in adults; WHO Grade 4 astrocytoma, IDH-wildtype.',
    'About 12,000 new cases/yr in US; median age 65; slight male predominance; most common malignant brain tumor.',
    ['Prior ionizing radiation (strongest established)', 'Age >50', 'Male sex', 'No confirmed environmental risk factors', 'Rare genetic syndromes (Li-Fraumeni, NF1, Turcot)'],
    ['Headache (worse in morning, with vomiting)', 'Seizures (new-onset in adult)', 'Progressive focal neurological deficits', 'Personality/cognitive changes', 'Papilledema and signs of raised ICP', 'Aphasia or visual field deficits'],
    'WHO 2021 CNS classification: GBM is IDH-wildtype, Grade 4 astrocytoma. No standard TNM staging; described by extent of resection and molecular features (MGMT promoter methylation, TERT, EGFR amplification).',
    ['MRI brain with gadolinium (ring-enhancing mass with necrosis)', 'Stereotactic biopsy or maximal safe resection', 'IDH mutation status (negative defines GBM)', 'MGMT promoter methylation (predictive for temozolomide)', '1p/19q codeletion (absent in GBM)', 'Advanced MRI: perfusion, spectroscopy, DTI for surgical planning'],
    'Maximal safe surgical resection + concurrent temozolomide + radiation (Stupp protocol) + adjuvant temozolomide x6 cycles; tumor-treating fields (TTFields/Optune); bevacizumab for recurrence; MGMT methylated: best temozolomide response. Clinical trials strongly encouraged.',
    'Median survival 14-16 months with Stupp protocol; MGMT methylated: median 22 months; 5-yr survival ~5-10%. TTFields added ~3 months to median survival. IDH-mutant grade 4 astrocytoma has better prognosis.',
    'Glioblastoma is a challenging brain cancer, but treatments including surgery, radiation, and chemotherapy can extend life and maintain quality of life. Clinical trials offer access to new approaches.',
  ),

  // ===== HEMATOLOGIC MALIGNANCIES (8) ========================================

  'all': onc(
    'all', 'Acute Lymphoblastic Leukemia', 'Leucemia linfoblastica aguda', 'hematologic-malignancy',
    '2A93.1', 'Aggressive malignancy of lymphoid progenitors; most common childhood cancer; bimodal age distribution.',
    'About 6,000 new cases/yr in US; peak ages 2-5 and >65; most common childhood cancer (80% of pediatric leukemias); B-ALL 85%.',
    ['Age (childhood peak)', 'Down syndrome', 'Prior radiation exposure', 'Genetic predisposition (Li-Fraumeni)', 'Certain chemical exposures'],
    ['Fatigue, pallor, fever', 'Bone pain (especially children)', 'Lymphadenopathy and hepatosplenomegaly', 'Petechiae and bleeding', 'CNS symptoms (headache, cranial nerve palsies)', 'Mediastinal mass (T-ALL)'],
    'Risk stratification: standard vs. high risk based on age, WBC, cytogenetics (Ph+, MLL rearrangement, hypodiploidy = high risk; hyperdiploidy, ETV6-RUNX1 = favorable). MRD status critical.',
    ['CBC with differential and peripheral smear', 'Bone marrow biopsy with flow cytometry', 'Cytogenetics and FISH', 'Molecular: BCR-ABL, MLL, ETV6-RUNX1', 'Lumbar puncture for CNS involvement', 'CT chest for mediastinal mass (T-ALL)'],
    'Multi-agent chemo: induction (vincristine, prednisone, asparaginase, daunorubicin), consolidation, maintenance (2-3 years); CNS prophylaxis (intrathecal methotrexate); Ph+ ALL: add dasatinib or ponatinib; relapsed: blinatumomab, inotuzumab, CAR-T (tisagenlecleucel); high-risk: allo-SCT.',
    'Pediatric: 85-90% cure rate; Adult: 40-50% overall survival; Ph+ ALL improved with TKI to 60-70%; MRD-negative status predicts better outcomes.',
    'Childhood ALL is one of the greatest success stories in cancer medicine — most children are cured. Treatment is long (2-3 years) but highly effective. Report fevers immediately.',
  ),

  'aml': onc(
    'aml', 'Acute Myeloid Leukemia', 'Leucemia mieloide aguda', 'hematologic-malignancy',
    '2A60.Z', 'Aggressive hematologic malignancy of myeloid progenitors; most common acute leukemia in adults.',
    'About 20,000 new cases/yr in US; median age 68; incidence increases with age; slight male predominance.',
    ['Age >60', 'Prior chemotherapy (alkylators, topoisomerase II inhibitors)', 'Myelodysplastic syndrome', 'Radiation exposure', 'Benzene', 'Down syndrome (GATA1)', 'Fanconi anemia'],
    ['Fatigue, pallor, dyspnea', 'Gingival hyperplasia (monocytic subtypes)', 'DIC (especially APL)', 'Leukostasis (headache, dyspnea with very high WBC)', 'Skin infiltration (leukemia cutis)', 'Auer rods pathognomonic on smear'],
    'ELN 2022 risk stratification: favorable (t(8;21), inv(16), NPM1 mutant without FLT3-ITD, biCEBPA), intermediate, adverse (complex karyotype, TP53, ASXL1, RUNX1). MRD increasingly important.',
    ['CBC, peripheral smear (blasts, Auer rods)', 'Bone marrow biopsy and aspirate', 'Flow cytometry (CD13, CD33, CD34, MPO)', 'Cytogenetics and molecular panel (FLT3, NPM1, CEBPA, IDH1/2, TP53)', 'Coagulation panel (DIC screen for APL)', 'HLA typing if transplant candidate'],
    'Induction: 7+3 (cytarabine + daunorubicin) or CPX-351 for secondary AML; APL: ATRA + arsenic trioxide (avoid chemo); consolidation: HiDAC or allo-SCT (intermediate/adverse risk); targeted: midostaurin (FLT3+), enasidenib/ivosidenib (IDH mutant); venetoclax + azacitidine for unfit patients.',
    'Favorable risk: 60-70% cure; intermediate: 40-50%; adverse: 10-20%. APL: >90% cure with ATRA/ATO. Venetoclax combos improved older/unfit patient outcomes. MRD negativity predicts better survival.',
    'AML treatment is intensive and requires hospitalization for several weeks. Molecular testing of your leukemia helps choose the most effective targeted therapy. APL is a curable subtype requiring urgent specific treatment.',
  ),

  'cll': onc(
    'cll', 'Chronic Lymphocytic Leukemia', 'Leucemia linfocitica cronica', 'hematologic-malignancy',
    '2A85.1', 'Indolent B-cell malignancy; most common leukemia in Western adults; variable clinical course.',
    'About 21,000 new cases/yr in US; median age 70; M:F 2:1; most common leukemia in developed countries.',
    ['Age >50', 'Male sex', 'Family history of CLL or lymphoproliferative disorders', 'No established modifiable risk factors', 'Caucasian ethnicity (rare in East Asian populations)'],
    ['Often asymptomatic (incidental lymphocytosis)', 'Painless lymphadenopathy', 'B symptoms (fevers, night sweats, weight loss)', 'Recurrent infections (hypogammaglobulinemia)', 'Splenomegaly', 'Autoimmune cytopenias (AIHA, ITP)'],
    'Rai staging (0-IV) and Binet staging (A-C). Molecular prognostics: IGHV mutation status, del(17p)/TP53, del(11q), del(13q), trisomy 12, complex karyotype.',
    ['CBC with differential (lymphocytosis >5000/mcL)', 'Peripheral blood flow cytometry (CD5+, CD19+, CD23+)', 'FISH panel: del(13q), del(11q), del(17p), trisomy 12', 'IGHV mutation status', 'TP53 mutation analysis', 'Beta-2 microglobulin, LDH, immunoglobulins'],
    'Watch-and-wait for asymptomatic early stage; Treatment indications: symptomatic disease, cytopenias, bulky nodes, rapid doubling. First-line: BTK inhibitors (ibrutinib, acalabrutinib, zanubrutinib) or venetoclax + obinutuzumab (fixed-duration); del(17p)/TP53: BTK inhibitor or venetoclax-based preferred.',
    'Highly variable; early stage median survival >10 years. IGHV mutated: indolent course; unmutated: more aggressive. del(17p)/TP53 mutation: worst but improved with novel agents. Overall survival improved dramatically with BTK inhibitors and venetoclax.',
    'Many patients with CLL live for years without needing treatment. When treatment is needed, new targeted pills (BTK inhibitors) have transformed outcomes. Regular monitoring is important to know when to start therapy.',
  ),

  'cml': onc(
    'cml', 'Chronic Myeloid Leukemia', 'Leucemia mieloide cronica', 'hematologic-malignancy',
    '2A20.1', 'Myeloproliferative neoplasm driven by BCR-ABL1 fusion (Philadelphia chromosome); paradigm for targeted therapy.',
    'About 9,000 new cases/yr in US; median age 64; slight male predominance; accounts for 15% of adult leukemias.',
    ['No established environmental risk factors', 'Ionizing radiation (atomic bomb survivors)', 'Age', 'Not hereditary'],
    ['Fatigue and weight loss', 'Splenomegaly (often massive)', 'Left upper quadrant fullness or pain', 'Night sweats', 'Leukocytosis with left shift (incidental finding)', 'Blast crisis: fever, bone pain, bleeding (resembles acute leukemia)'],
    'Three phases: chronic phase (CP, >90% at diagnosis), accelerated phase (AP), blast crisis (BC, >20% blasts). Sokal, Euro, and EUTOS scores for risk stratification.',
    ['CBC with differential (leukocytosis, basophilia, all myeloid stages)', 'Peripheral blood or bone marrow BCR-ABL1 by FISH or PCR', 'Bone marrow biopsy with cytogenetics (Philadelphia chromosome t(9;22))', 'Quantitative BCR-ABL1 PCR (baseline and monitoring)', 'ABL kinase domain mutation testing if resistance'],
    'Chronic phase: TKI therapy — imatinib, dasatinib, nilotinib, bosutinib (first-line); asciminib for resistant disease or T315I; response milestones at 3, 6, 12 months (BCR-ABL1 levels); treatment-free remission (TFR) attempt after sustained deep molecular response; blast crisis: TKI + acute leukemia-type chemo + allo-SCT.',
    'CP with TKI: near-normal life expectancy; >90% achieve complete cytogenetic response; deep molecular response in 40-60%. Blast crisis: median survival 6-12 months. CML transformed from fatal to chronic manageable disease.',
    'CML is a remarkable success story in cancer medicine. Daily pill therapy (TKI) controls the disease for most patients. Some patients may even be able to stop treatment after deep, sustained responses.',
  ),

  'hodgkin-lymphoma': onc(
    'hodgkin-lymphoma', 'Hodgkin Lymphoma', 'Linfoma de Hodgkin', 'hematologic-malignancy',
    '2B30', 'B-cell lymphoma characterized by Reed-Sternberg cells; bimodal age distribution; highly curable.',
    'About 8,500 new cases/yr in US; bimodal: peaks at 20-34 and >55; slight male predominance; incidence stable.',
    ['EBV infection (40-50% of cases)', 'Immunosuppression (HIV)', 'Family history (sibling risk 3-7x)', 'Young adult age', 'Higher socioeconomic status (paradoxical)'],
    ['Painless cervical or supraclavicular lymphadenopathy', 'B symptoms (fever, drenching night sweats, >10% weight loss)', 'Pruritus', 'Alcohol-induced pain at node sites (rare but specific)', 'Mediastinal mass (cough, dyspnea, SVC syndrome)', 'Pel-Ebstein fever pattern'],
    'Ann Arbor/Lugano staging: I (single nodal group), II (two or more, same side of diaphragm), III (both sides), IV (extranodal). Bulky disease and B symptoms modify prognosis.',
    ['Excisional lymph node biopsy (Reed-Sternberg cells, CD15+, CD30+)', 'PET/CT for staging (highly FDG-avid)', 'Bone marrow biopsy (may be omitted if PET-negative)', 'CBC, ESR, albumin, LDH', 'HIV and hepatitis screening', 'Fertility counseling and preservation'],
    'Early favorable: ABVD x2 + involved-site RT (20 Gy); Early unfavorable: ABVD x4 + RT; Advanced: ABVD x6 or BrECADD (PET-adapted); PET2-negative: de-escalation possible. Relapsed: salvage chemo + auto-SCT; brentuximab vedotin; pembrolizumab/nivolumab; CAR-T emerging.',
    'Early stage: >90% cure rate; Advanced stage: 70-80% cure with ABVD, improving with BrECADD. Relapsed after auto-SCT: checkpoint inhibitors achieve durable responses in 15-20%. One of the most curable cancers.',
    'Hodgkin lymphoma is one of the most curable cancers, especially when found early. Treatment is very effective but discuss fertility preservation before starting. Late effects of treatment require long-term follow-up.',
  ),

  'dlbcl': onc(
    'dlbcl', 'Diffuse Large B-Cell Lymphoma', 'Linfoma difuso de celulas B grandes', 'hematologic-malignancy',
    '2A81.1', 'Most common aggressive non-Hodgkin lymphoma; curable in majority with R-CHOP; heterogeneous biology.',
    'About 25,000 new cases/yr in US; median age 64; slight male predominance; most common NHL subtype (30-40%).',
    ['Immunosuppression (HIV, post-transplant)', 'Autoimmune diseases', 'Prior indolent lymphoma (transformation)', 'EBV', 'No major modifiable risk factors identified'],
    ['Rapidly enlarging lymphadenopathy', 'B symptoms (40%)', 'Extranodal disease (30-40%): GI, CNS, bone, testis', 'Abdominal mass or GI obstruction', 'Superior vena cava syndrome', 'Bone marrow involvement (10-20%)'],
    'Ann Arbor/Lugano staging. IPI (International Prognostic Index): age >60, stage III-IV, elevated LDH, ECOG >=2, >1 extranodal site. Cell-of-origin: GCB vs. ABC (activated B-cell).',
    ['Excisional lymph node biopsy', 'Immunohistochemistry (CD20+, BCL-2, BCL-6, MYC, Ki-67)', 'PET/CT staging', 'Bone marrow biopsy', 'Cell-of-origin (Hans algorithm or GEP)', 'FISH for MYC, BCL2, BCL6 rearrangements (double/triple-hit)', 'CNS IPI for CNS prophylaxis assessment'],
    'R-CHOP x6 cycles (standard); Pola-R-CHP for high-risk (POLARIX trial); double/triple-hit: DA-EPOCH-R; CNS prophylaxis (intrathecal or HD methotrexate) for high CNS-IPI; interim PET-adapted approaches; Relapsed: salvage + auto-SCT or CAR-T (axi-cel, liso-cel, tisa-cel) for chemo-refractory.',
    'R-CHOP: 60-70% cure overall; IPI 0-1: >80%; IPI 4-5: 40-50%. Double-hit: 40-50% with intensive therapy. CAR-T in relapsed/refractory: 40% long-term remission. PET-negative after 2 cycles predicts excellent outcome.',
    'DLBCL is an aggressive but curable lymphoma. R-CHOP immunochemotherapy cures the majority. If initial treatment is not successful, CAR-T cell therapy offers a second chance at cure.',
  ),

  'follicular-lymphoma': onc(
    'follicular-lymphoma', 'Follicular Lymphoma', 'Linfoma folicular', 'hematologic-malignancy',
    '2A85.0', 'Most common indolent non-Hodgkin lymphoma; characterized by t(14;18) and BCL2 overexpression; incurable but long survival.',
    'About 15,000 new cases/yr in US; median age 60; slight female predominance; second most common NHL.',
    ['No well-established modifiable risk factors', 'Immunosuppression', 'Pesticide exposure (possible)', 'Family history of lymphoproliferative disorders'],
    ['Painless waxing and waning lymphadenopathy', 'Often asymptomatic with widespread disease', 'B symptoms (uncommon)', 'Splenomegaly', 'Bone marrow involvement common', 'Transformation to DLBCL (risk 2-3% per year)'],
    'Ann Arbor/Lugano staging. FLIPI (Follicular Lymphoma IPI): age >60, stage III-IV, hemoglobin <12, elevated LDH, >4 nodal sites. FLIPI-2 adds beta-2 microglobulin and largest node >6 cm.',
    ['Excisional lymph node biopsy (follicular architecture, BCL2+, CD10+)', 'FISH for t(14;18)', 'PET/CT staging', 'Bone marrow biopsy', 'Grading: 1-2 (low grade), 3A, 3B (treat as DLBCL)', 'FLIPI scoring', 'Transformation workup if rapid growth or rising LDH'],
    'Stage I-II: radiation (curative intent) or watch-and-wait; Advanced asymptomatic: watch-and-wait; Symptomatic: rituximab + bendamustine or R-CHOP + rituximab maintenance; lenalidomide + rituximab (R2); Relapsed: PI3K inhibitors, EZH2 inhibitors (tazemetostat), CAR-T (axi-cel) for 3rd line. Transformed: treat as DLBCL.',
    'Median overall survival >15-20 years with modern therapy. Not curable with standard therapy (except limited stage with RT). 20-year disease-specific survival 60-70%. Transformation risk is main threat.',
    'Follicular lymphoma is a slow-growing lymphoma that often does not need immediate treatment. When treatment is needed, it is very effective. Regular monitoring is essential to watch for transformation.',
  ),

  'multiple-myeloma': onc(
    'multiple-myeloma', 'Multiple Myeloma', 'Mieloma multiple', 'hematologic-malignancy',
    '2A83.1', 'Clonal plasma cell malignancy producing monoclonal protein causing organ damage (CRAB criteria: Calcium, Renal, Anemia, Bone).',
    'About 35,000 new cases/yr in US; median age 69; M:F 1.4:1; more common in Black patients; preceded by MGUS/smoldering myeloma.',
    ['MGUS (1% per year progression)', 'Age >65', 'Black race (2x incidence)', 'Male sex', 'Obesity', 'Family history', 'Prior radiation exposure'],
    ['Bone pain (back, ribs — lytic lesions)', 'Fatigue from anemia', 'Recurrent bacterial infections', 'Hypercalcemia (confusion, constipation, polyuria)', 'Renal insufficiency', 'Neuropathy (light chain, amyloid)'],
    'Revised ISS (R-ISS): Stage I (beta-2M <3.5, albumin >=3.5, standard-risk cytogenetics, normal LDH), Stage II (neither I nor III), Stage III (beta-2M >5.5 + high-risk cytogenetics or elevated LDH). High-risk: t(4;14), t(14;16), del(17p), gain(1q).',
    ['SPEP/UPEP with immunofixation', 'Serum free light chains', 'Bone marrow biopsy with cytogenetics/FISH', 'Low-dose whole-body CT or PET/CT (no skeletal survey)', 'CBC, calcium, creatinine, albumin, beta-2 microglobulin, LDH', 'Exclude SLiM-CRAB criteria for smoldering myeloma requiring treatment'],
    'Transplant-eligible: induction with VRd (bortezomib, lenalidomide, dex) x4 + auto-SCT + lenalidomide maintenance; quadruplets emerging (Dara-VRd); Transplant-ineligible: DRd (daratumumab, lenalidomide, dex) or VRd; High-risk: Dara-VRd + tandem transplant; Relapsed: selinexor, belantamab, CAR-T (ide-cel, cilta-cel), bispecific antibodies (teclistamab).',
    'Median survival 5-7 years overall, >10 years for standard-risk transplant-eligible. R-ISS Stage I: median >8 years. High-risk cytogenetics: median 3-4 years. CAR-T and bispecifics transforming relapsed disease.',
    'Multiple myeloma treatment has advanced significantly with many new therapies including CAR-T cells. While not yet curable for most, many patients live well for years. Stay hydrated, report bone pain promptly, and avoid NSAIDs.',
  ),

  'mds': onc(
    'mds', 'Myelodysplastic Syndromes', 'Sindromes mielodisplasicos', 'hematologic-malignancy',
    '2A9D', 'Clonal stem cell disorders with ineffective hematopoiesis, cytopenias, and risk of AML transformation.',
    'About 15,000 new cases/yr in US; median age 70; M:F 1.5:1; incidence rises sharply with age.',
    ['Age >60', 'Prior chemotherapy (alkylators, topoisomerase II inhibitors)', 'Prior radiation therapy', 'Benzene exposure', 'Tobacco smoking', 'Aplastic anemia history'],
    ['Fatigue from anemia (most common presenting feature)', 'Recurrent infections (neutropenia)', 'Bleeding or bruising (thrombocytopenia)', 'Often incidental finding on CBC', 'Splenomegaly uncommon'],
    'IPSS-M (molecular): incorporates gene mutations, cytogenetics, and cytopenias for 6 risk categories. WHO 2022 classification by blast count, lineage dysplasia, ring sideroblasts, and specific cytogenetics (del(5q)).',
    ['CBC with differential and reticulocyte count', 'Peripheral blood smear (dysplastic features)', 'Bone marrow biopsy with iron stain', 'Cytogenetics (del(5q), -7, complex karyotype)', 'Molecular panel (SF3B1, TP53, ASXL1, TET2, DNMT3A, U2AF1)', 'EPO level, B12, folate, copper (exclude mimics)'],
    'Lower-risk: ESAs (EPO level <500), luspatercept (ring sideroblasts/SF3B1), lenalidomide (del(5q)); transfusion support; iron chelation if overloaded. Higher-risk: azacitidine or decitabine (hypomethylating agents); allo-SCT for eligible patients (only curative option). TP53-mutant: clinical trials (magrolimab).',
    'Highly variable by IPSS-M: very low risk median survival >8 years; very high risk <2 years. AML transformation in ~30% overall. Allo-SCT can cure 40-50% of eligible patients. TP53-mutant has dismal prognosis.',
    'MDS is a group of bone marrow disorders. Some patients only need monitoring, while others need active treatment. Blood transfusions and growth factors can improve quality of life. Discuss transplant eligibility with your team.',
  ),

  // ===== TREATMENT MODALITIES (6) ============================================

  'chemotherapy-principles': onc(
    'chemotherapy-principles', 'Chemotherapy Principles', 'Principios de quimioterapia', 'treatment-modality',
    'NE80', 'Systemic cytotoxic therapy targeting rapidly dividing cells; backbone of cancer treatment; classified by mechanism of action.',
    'Used in >50% of all cancer treatments; can be curative (testicular, lymphoma, leukemia) or palliative; given as adjuvant, neoadjuvant, or definitive.',
    ['Not applicable — treatment modality'],
    ['Myelosuppression (neutropenia, anemia, thrombocytopenia)', 'Nausea and vomiting', 'Alopecia', 'Mucositis', 'Fatigue', 'Organ-specific toxicity (cardiotoxicity, nephrotoxicity, neurotoxicity, pulmonary fibrosis)'],
    'Not applicable — treatment modality. Dosing follows body surface area (BSA) or AUC-based calculations. Cycles typically every 2-4 weeks to allow marrow recovery.',
    ['CBC with differential before each cycle', 'Renal and hepatic function', 'Tumor markers and imaging per protocol', 'Echocardiogram (anthracyclines)', 'Audiometry (cisplatin)', 'Fertility assessment prior to treatment'],
    'Classes: alkylating agents (cyclophosphamide, cisplatin), antimetabolites (5-FU, methotrexate, gemcitabine), anthracyclines (doxorubicin), taxanes (paclitaxel, docetaxel), vinca alkaloids (vincristine), topoisomerase inhibitors (irinotecan, etoposide). Combination regimens exploit different mechanisms and resistance pathways.',
    'Efficacy varies by cancer type: curative in germ cell tumors, lymphoma, some leukemias; palliative in most metastatic solid tumors. Side effects usually reversible except cumulative organ toxicity.',
    'Chemotherapy uses powerful medicines to kill cancer cells. Side effects occur because normal fast-growing cells (hair, gut lining, bone marrow) are also affected. Most side effects are temporary and manageable.',
  ),

  'immunotherapy-checkpoint': onc(
    'immunotherapy-checkpoint', 'Immunotherapy (Checkpoint Inhibitors)', 'Inmunoterapia (inhibidores de puntos de control)', 'treatment-modality',
    'NE83', 'Monoclonal antibodies blocking immune checkpoints (PD-1, PD-L1, CTLA-4) to restore antitumor immunity.',
    'FDA-approved for 20+ cancer types; transformed outcomes in melanoma, lung, renal, bladder, head/neck, Hodgkin, MSI-H tumors. Market >$50 billion annually.',
    ['Not applicable — treatment modality'],
    ['Immune-related adverse events (irAEs): colitis, hepatitis, pneumonitis, thyroiditis, hypophysitis', 'Dermatitis and pruritus', 'Fatigue', 'Arthralgias and myalgias', 'Rare: myocarditis, neurotoxicity, adrenal insufficiency', 'Pseudo-progression (initial tumor enlargement before response)'],
    'Not applicable. Biomarkers: PD-L1 expression (TPS, CPS), MSI-H/dMMR status, tumor mutational burden (TMB). Not all patients respond — biomarker selection improves outcomes.',
    ['PD-L1 testing (IHC)', 'MSI/MMR testing', 'TMB (selected indications)', 'Baseline thyroid function, LFTs, glucose', 'Autoimmune disease history (relative contraindication)', 'Organ transplant history (risk of rejection)'],
    'Anti-PD-1: pembrolizumab, nivolumab; Anti-PD-L1: atezolizumab, durvalumab, avelumab; Anti-CTLA-4: ipilimumab; Combinations: nivolumab + ipilimumab (melanoma, RCC, NSCLC); Anti-LAG-3: relatlimab + nivolumab; irAE management: hold IO, corticosteroids, additional immunosuppression for severe irAEs.',
    'Durable responses in 15-40% depending on tumor type and selection; some patients achieve complete responses lasting years. Melanoma nivo + ipi: 50% 5-yr survival. irAEs manageable but can be fatal (1-2%).',
    'Immunotherapy helps your own immune system fight cancer. It works differently from chemotherapy — side effects are related to the immune system becoming overactive. Some patients have long-lasting responses. Report any new symptoms promptly.',
  ),

  'radiation-therapy': onc(
    'radiation-therapy', 'Radiation Therapy', 'Radioterapia', 'treatment-modality',
    'NE60', 'Use of ionizing radiation to damage tumor DNA; delivered as external beam (EBRT), brachytherapy, or radiopharmaceuticals.',
    'Used in ~50% of all cancer patients during their treatment course; curative or palliative intent; technology has advanced dramatically (IMRT, SBRT, proton therapy).',
    ['Not applicable — treatment modality'],
    ['Fatigue (most common)', 'Skin erythema and desquamation', 'Mucositis (head/neck)', 'Esophagitis (thoracic)', 'Enteritis/proctitis (pelvic)', 'Late effects: fibrosis, secondary malignancy, cardiovascular disease', 'Radiation pneumonitis'],
    'Not applicable. Dose prescribed in Gray (Gy) with fractionation (typical: 1.8-2 Gy/fraction x 25-35 fractions). SBRT: 3-5 high-dose fractions. Brachytherapy: intracavitary or interstitial.',
    ['Simulation CT for treatment planning', 'Target volume delineation (GTV, CTV, PTV)', 'MRI fusion for precision', 'Weekly on-treatment visits', 'Dental evaluation (head/neck)', 'Pulmonary function tests (thoracic)'],
    'Techniques: 3D conformal, IMRT (intensity-modulated), VMAT, SBRT/SRS (stereotactic), proton therapy, brachytherapy (cervix, prostate, breast); curative: head/neck, cervix, prostate, early lung; palliative: bone mets, brain mets, SVC syndrome, spinal cord compression; concurrent chemoradiation enhances efficacy.',
    'Curative intent: high local control rates (80-95% early stage); palliative: effective symptom relief in 70-80%. Late effects are dose- and site-dependent. Modern techniques significantly reduce collateral damage.',
    'Radiation therapy precisely targets tumors using high-energy beams. Each session is painless and lasts minutes, but you may need treatment daily for several weeks. Side effects are usually limited to the treated area.',
  ),

  'targeted-therapy': onc(
    'targeted-therapy', 'Targeted Therapy', 'Terapia dirigida', 'treatment-modality',
    'NE81', 'Drugs targeting specific molecular alterations driving cancer growth; examples include TKIs, mAbs, CDK inhibitors, PARP inhibitors.',
    'Approved agents for most common cancers; paradigm shift from histology-based to biomarker-based treatment; many oral agents available.',
    ['Not applicable — treatment modality'],
    ['Drug-specific toxicities: skin rash (EGFR inhibitors), diarrhea (TKIs), hypertension (VEGF inhibitors)', 'Hepatotoxicity', 'QTc prolongation', 'Cardiac toxicity (HER2 agents)', 'Interstitial lung disease (rare but serious)', 'Cytopenias'],
    'Not applicable. Molecular testing required: EGFR, ALK, ROS1, BRAF, HER2, KRAS G12C, RET, MET, NTRK fusions (tumor-agnostic), BRCA1/2, IDH1/2, FLT3, BCR-ABL.',
    ['Next-generation sequencing (NGS) of tumor', 'Liquid biopsy (ctDNA) for non-invasive molecular profiling', 'Companion diagnostic testing', 'Baseline organ function (liver, cardiac, renal)', 'Pharmacogenomics in select cases', 'ECG for QTc-prolonging agents'],
    'TKIs: osimertinib (EGFR), alectinib (ALK), selpercatinib (RET), imatinib (BCR-ABL/KIT), larotrectinib (NTRK); mAbs: trastuzumab (HER2), cetuximab (EGFR); CDK4/6i: palbociclib, ribociclib (ER+ breast); PARP inhibitors: olaparib (BRCA); ADCs: T-DXd (HER2), EV (nectin-4), sacituzumab govitecan (Trop-2).',
    'Dramatic responses when matched to correct target; some achieve years of disease control. Resistance inevitably develops; sequential targeted therapies extend survival. ADCs represent newest breakthrough with broad activity.',
    'Targeted therapy attacks specific changes in cancer cells, often sparing normal cells. Molecular testing of your tumor identifies whether these drugs can work for you. Many are pills taken at home.',
  ),

  'car-t-therapy': onc(
    'car-t-therapy', 'CAR-T Cell Therapy', 'Terapia con celulas CAR-T', 'treatment-modality',
    'NE84', 'Autologous T cells engineered with chimeric antigen receptors targeting tumor antigens; cellular immunotherapy.',
    'FDA-approved for relapsed/refractory ALL, DLBCL, follicular lymphoma, mantle cell lymphoma, and multiple myeloma. Limited centers capable of delivery.',
    ['Not applicable — treatment modality'],
    ['Cytokine release syndrome (CRS: fever, hypotension, hypoxia)', 'Immune effector cell-associated neurotoxicity (ICANS)', 'Prolonged cytopenias', 'B-cell aplasia and hypogammaglobulinemia (CD19-targeted)', 'Infections from immunosuppression', 'Rare: secondary T-cell lymphoma'],
    'Not applicable. Bridging therapy may be needed during manufacturing (3-4 weeks). Lymphodepleting chemotherapy (fludarabine + cyclophosphamide) before infusion.',
    ['Leukapheresis for T-cell collection', 'Disease assessment before and after bridging', 'Cardiac and pulmonary evaluation', 'Infectious disease screening', 'Ensure REMS-certified center', 'Tocilizumab and ICU access availability for CRS management'],
    'Products: tisagenlecleucel (ALL, DLBCL), axicabtagene ciloleucel (DLBCL, follicular), lisocabtagene maraleucel (DLBCL), idecabtagene vicleucel and ciltacabtagene autoleucel (myeloma); Anti-BCMA CAR-T for myeloma. CRS management: tocilizumab + dexamethasone. ICANS: dexamethasone.',
    'DLBCL (3rd line): 40% complete response rate with durable remissions; ALL: 80-90% initial response, 50% long-term remission; Myeloma: 70-80% response, median PFS 12-18 months. Second-line DLBCL (ZUMA-7): superior to auto-SCT.',
    'CAR-T therapy uses your own immune cells, re-engineered in a lab, to fight your cancer. It is currently available for certain blood cancers that have not responded to other treatments. It requires specialized hospital care.',
  ),

  'bone-marrow-transplant': onc(
    'bone-marrow-transplant', 'Bone Marrow Transplant (SCT)', 'Trasplante de medula osea', 'treatment-modality',
    'NE85', 'Hematopoietic stem cell transplant: autologous (own cells) or allogeneic (donor cells); curative for many hematologic malignancies.',
    'About 22,000 transplants/yr in US; autologous more common; allogeneic expanding with alternative donors (haploidentical, cord blood).',
    ['Not applicable — treatment modality'],
    ['Mucositis and GI toxicity from conditioning', 'Infections (bacterial, viral, fungal) during engraftment', 'Graft-versus-host disease (GVHD) — acute and chronic (allogeneic)', 'Veno-occlusive disease / sinusoidal obstruction syndrome', 'Engraftment failure', 'Late effects: cataracts, endocrine dysfunction, secondary malignancy, infertility'],
    'Not applicable. Conditioning regimens: myeloablative (MAC) vs. reduced-intensity (RIC). Donor matching: HLA-matched sibling (best), matched unrelated donor, haploidentical, cord blood.',
    ['HLA typing (patient and potential donors)', 'Disease restaging and remission status', 'Organ function assessment (cardiac, pulmonary, hepatic, renal)', 'Infectious disease screening (CMV, EBV, HIV, hepatitis)', 'Dental evaluation', 'Psychosocial assessment and caregiver identification'],
    'Auto-SCT: myeloma (post-induction), lymphoma (chemo-sensitive relapse); Allo-SCT: AML, ALL, MDS, aplastic anemia (curative via graft-vs-leukemia effect); Conditioning: busulfan/cyclophosphamide (MAC) or fludarabine/melphalan (RIC); GVHD prophylaxis: tacrolimus + methotrexate or post-transplant cyclophosphamide (haplo).',
    'Auto-SCT: low TRM (<3%), extends remission; Allo-SCT: TRM 15-25% (MAC), 10-15% (RIC); AML in CR1: 50-65% long-term survival; aplastic anemia: 75-90% with matched sibling. Chronic GVHD affects 30-50% of allo-SCT survivors.',
    'A bone marrow transplant replaces damaged or diseased marrow with healthy stem cells. Auto-transplant uses your own cells; allo-transplant uses a donor\'s cells which can also fight remaining cancer. Recovery takes months.',
  ),

  // ===== SCREENING (4) =======================================================

  'breast-cancer-screening': onc(
    'breast-cancer-screening', 'Breast Cancer Screening', 'Tamizaje de cancer de mama', 'screening',
    'QA0Z', 'Mammographic screening reduces breast cancer mortality; guidelines vary by organization; risk-based approach for enhanced screening.',
    'Mammography reduces breast cancer mortality by 20-30% in screened populations; benefit greatest in ages 50-74; overdiagnosis rate estimated 10-20%.',
    ['Average risk: all women starting at age 40-50', 'High risk: BRCA carriers, prior chest radiation, strong family history', 'Lifetime risk >20% qualifies for enhanced screening'],
    ['Screening is for asymptomatic women', 'Diagnostic workup for palpable mass, nipple discharge, or skin changes regardless of screening status'],
    'Not applicable — screening modality.',
    ['Mammography (2D or 3D tomosynthesis)', 'Breast MRI (high-risk women, alternating with mammography)', 'Clinical breast exam (variable recommendations)', 'Risk assessment tools (Tyrer-Cuzick, Gail model)', 'Genetic counseling and testing if indicated'],
    'ACS: annual mammography starting age 40 (or 45), option to switch to biennial at 55; USPSTF 2024: biennial mammography 40-74; High risk (>20% lifetime): annual mammography + breast MRI starting at 25-30; dense breasts: consider supplemental screening (MRI, ultrasound, contrast-enhanced mammography).',
    'Regular mammographic screening reduces breast cancer death by 20-30%. 3D mammography (tomosynthesis) improves cancer detection, especially in dense breasts.',
    'Mammograms save lives by finding breast cancer early when it is most treatable. Talk to your doctor about when to start and how often to screen, especially if you have a family history.',
  ),

  'colon-cancer-screening': onc(
    'colon-cancer-screening', 'Colon Cancer Screening', 'Tamizaje de cancer de colon', 'screening',
    'QA02', 'Screening detects and removes precancerous polyps; proven to reduce CRC incidence and mortality; begin at age 45.',
    'CRC screening reduces mortality by 50-60% (colonoscopy); rising CRC incidence in adults <50 prompted lowering screening age from 50 to 45.',
    ['Average risk: all adults starting at age 45', 'High risk: family history, IBD, hereditary syndromes (Lynch, FAP) — start earlier', 'Prior adenomas: surveillance intervals based on findings'],
    ['Screening is for asymptomatic individuals', 'Symptoms (rectal bleeding, iron deficiency anemia, change in bowel habits) warrant diagnostic colonoscopy regardless of screening status'],
    'Not applicable — screening modality.',
    ['Colonoscopy every 10 years (gold standard)', 'FIT (fecal immunochemical test) annually', 'Stool DNA test (Cologuard) every 3 years', 'CT colonography every 5 years', 'Flexible sigmoidoscopy every 5 years', 'Blood-based tests emerging (Shield by Guardant)'],
    'USPSTF/ACS: begin at age 45 for average risk; colonoscopy preferred but any modality acceptable. High-risk: colonoscopy starting at 40 or 10 years before youngest affected relative; Lynch: colonoscopy every 1-2 years starting age 20-25; FAP: annual sigmoidoscopy starting age 10-12. Stop at 75-85 based on health status.',
    'Colonoscopy with polypectomy reduces CRC incidence by 80% and mortality by 50-60%. FIT detects 74% of cancers annually. Even non-invasive tests significantly reduce CRC deaths.',
    'Colon cancer screening starting at age 45 can prevent cancer by finding and removing polyps. Colonoscopy is the most thorough option, but stool-based tests are also effective if done consistently.',
  ),

  'lung-cancer-screening': onc(
    'lung-cancer-screening', 'Lung Cancer Screening', 'Tamizaje de cancer de pulmon', 'screening',
    'QA0Z', 'Low-dose CT (LDCT) screening reduces lung cancer mortality in high-risk individuals by 20%; eligibility based on age and smoking history.',
    'LDCT screening reduces lung cancer mortality by 20% (NLST) to 24% (NELSON trial). Only ~5% of eligible individuals currently screened in the US.',
    ['Adults aged 50-80 with >=20 pack-year smoking history who currently smoke or quit within past 15 years (USPSTF 2021)'],
    ['Screening is for asymptomatic high-risk individuals', 'Any pulmonary symptoms warrant diagnostic evaluation regardless of screening eligibility'],
    'Not applicable — screening modality.',
    ['Low-dose CT chest (LDCT) annually', 'Lung-RADS reporting system for nodule management', 'Shared decision-making including smoking cessation counseling', 'No role for chest X-ray or sputum cytology for screening'],
    'USPSTF 2021: annual LDCT for adults 50-80 with >=20 pack-year history who currently smoke or quit within 15 years; discontinue when 15 years since quitting or life-limiting comorbidity; Lung-RADS guides follow-up of detected nodules; integrate smoking cessation into every screening visit.',
    'LDCT screening reduces lung cancer mortality by 20-24%. False positive rate ~25% at baseline but lower with Lung-RADS protocols. Most screen-detected cancers are early stage and curable.',
    'If you have a significant smoking history, a yearly low-dose CT scan can find lung cancer early when it is most curable. This is a quick, painless scan. Quitting smoking provides the greatest benefit of all.',
  ),

  'cervical-cancer-screening': onc(
    'cervical-cancer-screening', 'Cervical Cancer Screening', 'Tamizaje de cancer cervicouterino', 'screening',
    'QA03', 'Pap smear and HPV testing detect cervical pre-cancer; combined with HPV vaccination, can virtually eliminate cervical cancer.',
    'Cervical cancer screening has reduced incidence by >70% in countries with organized programs; HPV vaccination will further reduce incidence dramatically.',
    ['All women with a cervix starting at age 21 (or 25 per ACS)', 'Immunosuppressed women may need more frequent screening', 'HPV vaccination does not change screening recommendations'],
    ['Screening for asymptomatic women', 'Abnormal bleeding or discharge requires diagnostic evaluation regardless of screening'],
    'Not applicable — screening modality.',
    ['Pap smear (cytology)', 'HPV testing (primary or co-testing)', 'Colposcopy with biopsy for abnormal results', 'HPV vaccination (preventive, not screening)'],
    'USPSTF: age 21-29 cytology every 3 years; age 30-65 cytology every 3 years, HPV testing every 5 years, or co-testing every 5 years; ACS 2020: primary HPV testing alone every 5 years starting at age 25 (preferred); stop at 65 if adequate prior screening. Post-hysterectomy (no cervix): no screening needed.',
    'Regular screening reduces cervical cancer incidence by >70%. HPV vaccination + screening could virtually eliminate cervical cancer. Pre-cancerous lesions are easily treatable.',
    'Regular Pap smears and HPV tests can prevent cervical cancer by finding and treating pre-cancerous changes early. HPV vaccination is also highly effective. Most cervical cancers occur in unscreened women.',
  ),

  // ===== SUPPORTIVE CARE (4) =================================================

  'tumor-lysis-syndrome': onc(
    'tumor-lysis-syndrome', 'Tumor Lysis Syndrome', 'Sindrome de lisis tumoral', 'supportive-care',
    '5A70', 'Oncologic emergency from massive tumor cell destruction releasing intracellular contents; can cause fatal arrhythmias and renal failure.',
    'Occurs in 5-20% of patients treated for highly proliferative cancers; highest risk in Burkitt lymphoma, ALL, AML with high WBC.',
    ['High tumor burden and rapid proliferation', 'Burkitt lymphoma and ALL (highest risk)', 'AML with WBC >100K', 'Elevated LDH and uric acid at baseline', 'Pre-existing renal impairment', 'Dehydration'],
    ['Hyperuricemia (gout-like symptoms)', 'Hyperkalemia (arrhythmias, muscle weakness)', 'Hyperphosphatemia (secondary hypocalcemia)', 'Hypocalcemia (tetany, seizures, QTc prolongation)', 'Acute kidney injury (uric acid/calcium phosphate crystal nephropathy)', 'Cardiac arrhythmias'],
    'Cairo-Bishop criteria: laboratory TLS (2+ of: uric acid >8, K >6, phosphate >4.5, calcium <7) and clinical TLS (lab TLS + renal failure, arrhythmia, or seizure). Risk stratification: low, intermediate, high.',
    ['BMP (K, Ca, phos, BUN, creatinine) every 6-8 hours', 'Uric acid level', 'LDH', 'ECG monitoring', 'Urine output monitoring', 'Phosphate and calcium levels'],
    'Prevention: aggressive IV hydration (3 L/m2/day), allopurinol (intermediate risk), rasburicase (high risk); Treatment: rasburicase for hyperuricemia, kayexalate or emergent dialysis for hyperkalemia, phosphate binders, IV calcium for symptomatic hypocalcemia, hemodialysis if refractory.',
    'With prophylaxis: clinical TLS rate <5%; without: up to 20% in high-risk. Mortality 20-50% if clinical TLS develops. Rasburicase has dramatically reduced TLS-related morbidity.',
    'Tumor lysis syndrome happens when cancer cells break down very quickly during treatment, releasing harmful substances. Your medical team will give preventive fluids and medications to protect your kidneys and heart.',
  ),

  'febrile-neutropenia': onc(
    'febrile-neutropenia', 'Febrile Neutropenia', 'Neutropenia febril', 'supportive-care',
    '4B00', 'Fever in a neutropenic cancer patient is a medical emergency requiring immediate empiric antibiotics; mortality 5-10% if untreated.',
    'Occurs in 10-50% of patients receiving myelosuppressive chemotherapy; leading cause of chemotherapy dose delays and reductions.',
    ['Myelosuppressive chemotherapy (nadir day 7-14)', 'ANC <500 or expected to fall <500', 'Mucositis (portal of entry)', 'Central venous catheters', 'Prior episode of febrile neutropenia', 'Hematologic malignancy'],
    ['Fever >=38.3C single or >=38.0C sustained >1 hour', 'May lack typical infection signs (no pus, minimal infiltrate)', 'Rigors and chills', 'Hypotension and tachycardia (sepsis)', 'Perianal pain or tenderness', 'Oral mucositis lesions'],
    'MASCC score for risk stratification: low risk (>=21) vs. high risk (<21). Low risk may be treated as outpatient; high risk requires inpatient IV antibiotics.',
    ['Blood cultures (2 sets, including from central line)', 'CBC with differential', 'BMP, LFTs', 'Urinalysis and urine culture', 'Chest X-ray', 'Lactate and procalcitonin if sepsis concern'],
    'Immediate empiric antibiotics within 1 hour: anti-pseudomonal beta-lactam (cefepime, piperacillin-tazobactam, or meropenem); add vancomycin for catheter infection, hemodynamic instability, or MRSA concern; antifungal (micafungin/voriconazole) if fever persists >4-7 days; G-CSF (filgrastim) for high-risk or complications. Low-risk outpatient: ciprofloxacin + amoxicillin-clavulanate.',
    'Overall mortality 5-10% with prompt antibiotics; delayed antibiotics: mortality rises significantly. Gram-negative bacteremia mortality 20-30%. Most febrile neutropenia episodes are culture-negative but still require antibiotics.',
    'Fever during chemotherapy is a medical emergency — go to the emergency room immediately. You will receive antibiotics right away. Prevention with G-CSF (Neulasta) can reduce risk.',
  ),

  'cancer-pain-management': onc(
    'cancer-pain-management', 'Cancer Pain Management', 'Manejo del dolor oncologico', 'supportive-care',
    'MG30.0', 'Systematic approach to cancer-related pain using WHO analgesic ladder and multimodal strategies; affects 60-90% of advanced cancer patients.',
    'Pain occurs in 50% of all cancer patients and 70-90% with advanced disease; undertreated in 30-50% of cases; major determinant of quality of life.',
    ['Tumor invasion of bone, nerve, or viscera', 'Treatment-related pain (surgery, chemo neuropathy, radiation)', 'Pathologic fractures', 'Mucositis', 'Procedural pain'],
    ['Somatic pain (well-localized, aching — bone metastases)', 'Visceral pain (diffuse, crampy — organ involvement)', 'Neuropathic pain (burning, shooting — nerve compression or chemotherapy-induced)', 'Breakthrough pain (transient flares on baseline regimen)', 'Total pain concept (physical, psychological, social, spiritual)'],
    'Not applicable. Assessment using validated scales (NRS 0-10, Edmonton Symptom Assessment System). WHO analgesic ladder: Step 1 (non-opioid), Step 2 (weak opioid), Step 3 (strong opioid).',
    ['Comprehensive pain assessment (location, quality, severity, timing)', 'Evaluate for oncologic emergency (cord compression, fracture)', 'Imaging if new or worsening pain', 'Functional assessment', 'Psychosocial assessment'],
    'WHO ladder: Step 1 — acetaminophen/NSAIDs; Step 2 — weak opioids (tramadol); Step 3 — strong opioids (morphine, oxycodone, hydromorphone, fentanyl); Adjuvants: gabapentin/pregabalin (neuropathic), dexamethasone (inflammation, nerve compression), bisphosphonates/denosumab (bone pain); Interventional: nerve blocks, intrathecal pumps, radiation for bone mets, vertebroplasty.',
    'Adequate pain control achievable in 80-90% with WHO ladder approach. Palliative radiation relieves bone pain in 60-80%. Early palliative care integration improves quality of life and may extend survival.',
    'Cancer pain can almost always be well controlled. Do not suffer in silence — tell your team about your pain level. There are many effective treatments beyond pills, including radiation for bone pain and nerve block procedures.',
  ),

  'antiemetics-oncology': onc(
    'antiemetics-oncology', 'Antiemetics in Oncology', 'Antiemeticos en oncologia', 'supportive-care',
    'QD60', 'Prevention and treatment of chemotherapy-induced nausea and vomiting (CINV); stratified by emetogenic risk of regimen.',
    'CINV affects 60-80% of chemo patients without prophylaxis; highly emetogenic regimens (cisplatin, AC) cause emesis in >90% without antiemetics.',
    ['Highly emetogenic chemotherapy (HEC: cisplatin, AC, streptozocin)', 'Moderately emetogenic (MEC: oxaliplatin, carboplatin, irinotecan)', 'Female sex, younger age, history of motion sickness', 'Prior CINV episodes', 'Low alcohol intake (less protective)'],
    ['Acute CINV (within 24 hours)', 'Delayed CINV (days 2-5, especially cisplatin)', 'Anticipatory CINV (conditioned response)', 'Breakthrough CINV (despite prophylaxis)', 'Nausea (often more distressing than vomiting)'],
    'Not applicable. CINV emetogenic risk classification: high (>90%), moderate (30-90%), low (10-30%), minimal (<10%). Guides prophylactic antiemetic selection.',
    ['Emetogenic risk assessment of regimen', 'Prior CINV history', 'Patient risk factors', 'Assess for other causes of nausea (constipation, CNS mets, medications, gastroparesis)'],
    'HEC: 3-drug regimen (5-HT3 antagonist + NK1 antagonist + dexamethasone) +/- olanzapine; AC regimen: add olanzapine (4-drug); MEC: 5-HT3 antagonist + dexamethasone +/- NK1; Low: dexamethasone or prochlorperazine. Agents: ondansetron, granisetron, palonosetron (5-HT3); aprepitant, fosaprepitant, rolapitant (NK1); olanzapine 5-10 mg (highly effective). Breakthrough: lorazepam, metoclopramide, different class agent.',
    'Modern 4-drug regimens control acute CINV in >90% and delayed CINV in 70-80%. Olanzapine addition significantly improved nausea control. Anticipatory CINV best prevented by optimal control from first cycle.',
    'We now have excellent medications to prevent chemotherapy-related nausea and vomiting. Take anti-nausea medicines as prescribed BEFORE they are needed. If you still feel nauseated, tell your team — adjustments can help.',
  ),

  // ===== PARANEOPLASTIC SYNDROMES (4) ========================================

  'siadh-malignancy': onc(
    'siadh-malignancy', 'SIADH of Malignancy', 'SIADH asociado a malignidad', 'paraneoplastic',
    '5A60.0', 'Syndrome of inappropriate ADH secretion by tumor cells causing euvolemic hyponatremia; most commonly from SCLC.',
    'Occurs in 10-15% of SCLC; also seen in head/neck SCC, lymphoma, and other cancers; most common cause of euvolemic hyponatremia in cancer patients.',
    ['Small cell lung cancer (most common)', 'Head and neck cancers', 'Lymphoma', 'CNS tumors', 'Drug-induced (vincristine, cyclophosphamide, carbamazepine)'],
    ['Hyponatremia symptoms: nausea, headache, confusion', 'Seizures and obtundation (severe, Na <120)', 'Weakness and fatigue', 'Euvolemic on exam', 'May be asymptomatic if chronic and gradual'],
    'Not applicable — paraneoplastic syndrome. Severity graded by sodium level and symptom acuity.',
    ['Serum sodium, osmolality', 'Urine sodium (>40 mEq/L) and osmolality (>100 mOsm/kg)', 'Volume status assessment', 'TSH and cortisol (exclude hypothyroidism and adrenal insufficiency)', 'ADH level (elevated but not routinely measured)', 'Identify and image the underlying malignancy'],
    'Mild/chronic: fluid restriction (800-1000 mL/day); Moderate: fluid restriction + salt tablets +/- loop diuretics; Severe/symptomatic: hypertonic saline (3%) with careful correction (<=8-10 mEq/L per 24 hours to avoid osmotic demyelination); tolvaptan (vasopressin receptor antagonist) for refractory cases; definitive: treat underlying cancer.',
    'Responds to effective cancer treatment; SIADH often resolves with tumor response. Severe hyponatremia mortality 10-20% if untreated. Correction too rapid risks osmotic demyelination syndrome.',
    'SIADH causes low sodium levels because your cancer produces a hormone that makes your body retain water. Treatment involves limiting fluid intake and treating the underlying cancer.',
  ),

  'hypercalcemia-malignancy': onc(
    'hypercalcemia-malignancy', 'Hypercalcemia of Malignancy', 'Hipercalcemia asociada a malignidad', 'paraneoplastic',
    '5A50.0', 'Most common metabolic emergency in cancer; caused by PTHrP (humoral), osteolytic metastases, or 1,25-vitamin D (lymphoma).',
    'Occurs in 20-30% of cancer patients during disease course; most common in squamous cell cancers, breast, renal cell, and multiple myeloma.',
    ['Squamous cell carcinomas (PTHrP-mediated)', 'Breast cancer with bone metastases', 'Multiple myeloma (osteolytic)', 'Renal cell carcinoma', 'Lymphoma (1,25-vitamin D production)', 'Adult T-cell leukemia/lymphoma (HTLV-1)'],
    ['Polyuria and polydipsia', 'Nausea, vomiting, constipation', 'Confusion and lethargy (severe: coma)', 'Shortened QTc interval', 'Renal insufficiency', '"Bones, stones, groans, and psychiatric moans"'],
    'Not applicable — paraneoplastic syndrome. Severity: mild (10.5-12), moderate (12-14), severe (>14 mg/dL). Corrected calcium = measured + 0.8 x (4.0 - albumin).',
    ['Corrected serum calcium or ionized calcium', 'PTHrP level', 'Intact PTH (should be suppressed)', '1,25-dihydroxyvitamin D (lymphoma)', 'BMP (renal function)', 'ECG', 'Skeletal imaging for lytic lesions'],
    'Aggressive IV normal saline (200-300 mL/hr initially); IV zoledronic acid 4 mg (onset 2-4 days) or denosumab (if refractory or renal impairment); calcitonin 4 IU/kg for rapid initial reduction (effect wanes in 48 hours); treat underlying malignancy; glucocorticoids for vitamin D-mediated (lymphoma). Avoid thiazide diuretics.',
    'Poor prognostic sign: median survival 30-90 days after first episode in advanced cancer. Responds to antiresorptive therapy and cancer treatment. Recurrence common without effective antineoplastic therapy.',
    'High calcium from cancer can cause confusion, nausea, and kidney problems. Treatment with IV fluids and bone-strengthening medications works quickly. Treating the underlying cancer is essential to prevent recurrence.',
  ),

  'lambert-eaton': onc(
    'lambert-eaton', 'Lambert-Eaton Myasthenic Syndrome', 'Sindrome miastenico de Lambert-Eaton', 'paraneoplastic',
    '8C60.0', 'Autoimmune disorder targeting presynaptic voltage-gated calcium channels (VGCC); 60% associated with SCLC.',
    'Rare (~1 per million); 60% paraneoplastic (primarily SCLC), 40% autoimmune without cancer; may precede cancer diagnosis by years.',
    ['Small cell lung cancer (strongest association)', 'Autoimmune predisposition (HLA-B8)', 'Smoking (via SCLC association)', 'Other cancers rarely (lymphoma, thymoma)'],
    ['Proximal muscle weakness (legs more than arms)', 'Fatigability that improves with repeated use (opposite of myasthenia gravis)', 'Hyporeflexia that improves after exercise (post-exercise facilitation)', 'Autonomic dysfunction (dry mouth, constipation, erectile dysfunction)', 'Ptosis and diplopia (milder than MG)', 'Gait difficulty'],
    'Not applicable — paraneoplastic syndrome. Delta-P VGCC antibody positive in >90%. EMG shows incremental response at high-frequency repetitive stimulation (opposite of MG).',
    ['Anti-VGCC antibodies (P/Q-type)', 'EMG with repetitive nerve stimulation (decrement at low frequency, increment at high frequency)', 'CT chest for SCLC screening', 'SOX1 antibodies (high specificity for SCLC association)', 'PET/CT if high cancer suspicion with negative CT', 'Cancer screening every 6 months for 2 years if initially cancer-free'],
    'Treat underlying SCLC if present (neurological improvement with tumor response); 3,4-diaminopyridine (amifampridine) — first-line symptomatic treatment; IVIG or plasma exchange for severe weakness; immunosuppression (prednisone, azathioprine) for autoimmune LEMS; pyridostigmine as adjunct.',
    'Paraneoplastic LEMS: prognosis tied to SCLC outcome; paradoxically, SCLC patients with LEMS may have better cancer survival. Autoimmune LEMS: chronic but manageable; most respond to 3,4-DAP.',
    'Lambert-Eaton syndrome causes muscle weakness because your immune system attacks nerve signals. It is sometimes the first sign of lung cancer, so screening is important. Medications can improve strength.',
  ),

  'dermatomyositis-paraneoplastic': onc(
    'dermatomyositis-paraneoplastic', 'Paraneoplastic Dermatomyositis', 'Dermatomiositis paraneoplasica', 'paraneoplastic',
    '4A41', 'Inflammatory myopathy with characteristic skin findings; 15-30% of adult dermatomyositis cases are associated with underlying malignancy.',
    'DM affects ~1 per 100,000; cancer association in 15-30% of adults (higher in elderly); cancer may be diagnosed before, concurrent with, or after DM.',
    ['Age >40 (strongest risk factor for cancer association)', 'Anti-TIF1-gamma antibody (highest cancer risk)', 'Anti-NXP2 antibody in adults', 'Rapid onset of symptoms', 'Dysphagia', 'Cutaneous necrosis', 'Treatment-resistant DM'],
    ['Heliotrope rash (violaceous periorbital edema)', 'Gottron papules (knuckles, elbows, knees)', 'V-sign and shawl sign (photodistributed erythema)', 'Proximal muscle weakness (difficulty rising from chair, climbing stairs)', 'Dysphagia (pharyngeal muscle weakness)', 'Mechanic\'s hands (roughened, cracked skin)', 'Periungual erythema and nail fold capillary changes'],
    'Not applicable — paraneoplastic syndrome. Cancer most commonly diagnosed within 1-3 years of DM diagnosis. Most common associated cancers: ovarian, lung, GI, breast, NHL.',
    ['CK level (elevated in 70-80%)', 'Myositis-specific antibodies (anti-TIF1-gamma, anti-NXP2, anti-Mi-2)', 'EMG (myopathic pattern)', 'MRI of proximal muscles (edema on STIR)', 'Muscle biopsy (perifascicular atrophy, perimysial inflammation)', 'Age-appropriate cancer screening + CT chest/abdomen/pelvis + ovarian assessment in women'],
    'Cancer-associated: treat underlying malignancy (DM often improves with cancer treatment); Immunosuppression: prednisone 1 mg/kg + steroid-sparing agent (methotrexate, azathioprine, mycophenolate); Refractory: IVIG (first-line for dysphagia), rituximab; Skin: hydroxychloroquine, sun protection; Physical therapy for muscle strengthening.',
    'Cancer-associated DM: prognosis tied to underlying malignancy; DM often improves with successful cancer treatment. Non-cancer DM: chronic but manageable; 5-yr survival 80-90%. Anti-TIF1-gamma positive patients require vigilant cancer screening.',
    'Dermatomyositis causes skin rashes and muscle weakness. In some adults, it can be a sign of an underlying cancer. Thorough cancer screening is essential. Treatment addresses both the inflammation and any underlying malignancy.',
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

export function getOncologyEntry(id: string): OncologyEntry | undefined {
  return ONCOLOGY_ENTRIES[id];
}

export function searchOncology(query: string): OncologyEntry[] {
  const q = query.toLowerCase();
  return Object.values(ONCOLOGY_ENTRIES).filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.nameEs.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.category.includes(q) ||
    e.clinicalFeatures.some(f => f.toLowerCase().includes(q)) ||
    e.diagnostics.some(d => d.toLowerCase().includes(q)),
  );
}

export function getOncologyByCategory(cat: OncologyCategory): OncologyEntry[] {
  return Object.values(ONCOLOGY_ENTRIES).filter(e => e.category === cat);
}

export function getOncologyCount(): number {
  return Object.keys(ONCOLOGY_ENTRIES).length;
}
