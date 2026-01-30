/**
 * Oncology Conditions Database
 *
 * Comprehensive reference of 35+ oncology conditions with
 * clinical summaries, staging, diagnostics, and treatment approaches.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type OncologyConditionCategory =
  | 'solid-tumor'
  | 'hematologic-malignancy'
  | 'CNS-tumor'
  | 'skin-cancer'
  | 'endocrine-tumor';

export interface OncologyConditionEntry {
  id: string;
  name: string;
  category: OncologyConditionCategory;
  description: string;
  staging: string;
  keySymptoms: string[];
  diagnosticWorkup: string[];
  treatmentApproach: string;
  prognosis: string;
  icdCode: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function onc(
  id: string, name: string,
  category: OncologyConditionCategory, icdCode: string,
  description: string, staging: string,
  keySymptoms: string[], diagnosticWorkup: string[],
  treatmentApproach: string, prognosis: string,
): OncologyConditionEntry {
  return {
    id, name, category, description, staging,
    keySymptoms, diagnosticWorkup, treatmentApproach, prognosis, icdCode,
  };
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const ONCOLOGY_CONDITION_ENTRIES: Record<string, OncologyConditionEntry> = {

  // ---- Solid tumors – Thoracic (3) ------------------------------------------

  'non-small-cell-lung-cancer': onc(
    'non-small-cell-lung-cancer', 'Non-Small Cell Lung Cancer (NSCLC)',
    'solid-tumor', 'C34.9',
    'Most common lung cancer subtype (~85%), including adenocarcinoma, squamous cell, and large cell variants. Strongly associated with tobacco exposure but also occurs in never-smokers with driver mutations.',
    'TNM staging I-IV. Stage I: localized to lung. Stage II-III: regional lymph node involvement. Stage IV: distant metastases (brain, bone, liver, adrenals).',
    ['Persistent cough', 'Hemoptysis', 'Dyspnea', 'Chest pain', 'Unintentional weight loss', 'Recurrent pneumonia', 'Hoarseness (recurrent laryngeal nerve involvement)'],
    ['CT chest with contrast', 'PET-CT for staging', 'Tissue biopsy (bronchoscopy, CT-guided, or surgical)', 'Molecular testing (EGFR, ALK, ROS1, PD-L1, KRAS G12C)', 'Brain MRI', 'Pulmonary function tests'],
    'Stage I-II: surgical resection (lobectomy) with adjuvant chemotherapy if node-positive. Stage III: concurrent chemoradiation ± durvalumab consolidation. Stage IV: systemic therapy guided by molecular profile—targeted agents (osimertinib, alectinib, sotorasib) or immunotherapy (pembrolizumab ± chemotherapy).',
    'Stage I 5-year survival ~70-80%. Stage IV with driver mutations and targeted therapy median survival 3-5 years. Stage IV without targetable mutations median ~15-20 months with immunochemotherapy.',
  ),

  'small-cell-lung-cancer': onc(
    'small-cell-lung-cancer', 'Small Cell Lung Cancer (SCLC)',
    'solid-tumor', 'C34.9',
    'Aggressive neuroendocrine lung malignancy (~15% of lung cancers). Nearly always associated with heavy tobacco use. Rapid growth, early metastasis, and initial chemosensitivity followed by frequent relapse.',
    'Limited stage: confined to one hemithorax and regional nodes (fits in one radiation field). Extensive stage: spread beyond that boundary.',
    ['Rapidly worsening cough', 'Dyspnea', 'Weight loss', 'Paraneoplastic syndromes (SIADH, Cushing, Lambert-Eaton)', 'SVC syndrome', 'Bone pain from metastases'],
    ['CT chest/abdomen/pelvis', 'PET-CT', 'Brain MRI', 'Biopsy with neuroendocrine markers (synaptophysin, chromogranin)', 'CBC, CMP, LDH'],
    'Limited stage: concurrent chemoradiation (cisplatin/etoposide) with prophylactic cranial irradiation (PCI) if response. Extensive stage: platinum/etoposide + atezolizumab or durvalumab. PCI or MRI surveillance for brain metastases.',
    'Limited stage median survival ~20 months, 5-year survival ~20-25%. Extensive stage median survival ~12-15 months with immunochemotherapy. High relapse rate.',
  ),

  'mesothelioma': onc(
    'mesothelioma', 'Malignant Pleural Mesothelioma',
    'solid-tumor', 'C45.0',
    'Rare aggressive cancer of the pleural lining, strongly linked to asbestos exposure with latency of 20-50 years. Epithelioid subtype has better prognosis than sarcomatoid.',
    'TNM staging I-IV based on pleural involvement, nodal spread, and distant metastases. Staging guides surgical candidacy.',
    ['Progressive dyspnea', 'Chest wall pain', 'Pleural effusion', 'Weight loss', 'Fatigue', 'Dry cough'],
    ['CT chest with contrast', 'PET-CT', 'Thoracoscopic biopsy (preferred for adequate tissue)', 'Immunohistochemistry (calretinin, WT-1, CK5/6)', 'Pulmonary function tests'],
    'Multimodal approach for resectable disease: surgery (pleurectomy/decortication or extrapleural pneumonectomy) + chemotherapy ± radiation. Unresectable: cisplatin/pemetrexed + nivolumab/ipilimumab. Palliative pleurodesis for effusions.',
    'Overall median survival 12-18 months. Epithelioid subtype with multimodal therapy: median 18-24 months. Immunotherapy has improved outcomes for unresectable disease.',
  ),

  // ---- Solid tumors – GI (5) ------------------------------------------------

  'colorectal-cancer': onc(
    'colorectal-cancer', 'Colorectal Cancer (CRC)',
    'solid-tumor', 'C18.9',
    'Third most common cancer worldwide. Arises from adenomatous polyps in the colon or rectum. Screening colonoscopy dramatically reduces incidence and mortality through polyp detection and removal.',
    'TNM staging I-IV. Stage I: invades submucosa/muscularis. Stage II: penetrates wall. Stage III: lymph node positive. Stage IV: distant metastases (liver, lung, peritoneum).',
    ['Change in bowel habits', 'Rectal bleeding or melena', 'Iron deficiency anemia', 'Abdominal pain', 'Unintentional weight loss', 'Bowel obstruction (advanced)'],
    ['Colonoscopy with biopsy', 'CT chest/abdomen/pelvis', 'CEA level', 'MSI/MMR testing', 'KRAS/NRAS/BRAF molecular profiling', 'Pelvic MRI for rectal cancer'],
    'Stage I-III: surgical resection (colectomy or LAR/APR for rectal). Stage III: adjuvant FOLFOX. Rectal cancer: neoadjuvant chemoradiation. Stage IV: FOLFOX/FOLFIRI ± bevacizumab or cetuximab (if RAS wild-type). MSI-high: pembrolizumab.',
    'Stage I 5-year survival >90%. Stage III ~70% with adjuvant chemo. Stage IV median survival ~30 months with modern regimens. MSI-high metastatic CRC responds well to immunotherapy.',
  ),

  'pancreatic-cancer': onc(
    'pancreatic-cancer', 'Pancreatic Ductal Adenocarcinoma',
    'solid-tumor', 'C25.9',
    'Highly lethal malignancy with late presentation. Most patients (80%) present with unresectable or metastatic disease. KRAS mutations present in >90% of cases.',
    'Resectable, borderline resectable, locally advanced, or metastatic. TNM staging I-IV. Vascular involvement (SMA, celiac axis, SMV/portal vein) determines resectability.',
    ['Painless jaundice (head tumors)', 'Epigastric pain radiating to back', 'New-onset diabetes', 'Weight loss', 'Steatorrhea', 'Venous thromboembolism', 'Depression'],
    ['CT pancreas protocol (triphasic)', 'CA 19-9', 'EUS with FNA biopsy', 'MRI/MRCP', 'Chest CT', 'Diagnostic laparoscopy for resectable cases'],
    'Resectable: upfront surgery (Whipple or distal pancreatectomy) followed by adjuvant modified FOLFIRINOX. Borderline resectable: neoadjuvant FOLFIRINOX then surgery. Metastatic: FOLFIRINOX or gemcitabine/nab-paclitaxel. Biliary stenting for obstruction.',
    'Overall 5-year survival ~10%. Resected with adjuvant therapy ~20-25%. Metastatic median survival ~11 months with FOLFIRINOX. One of the poorest prognosis solid tumors.',
  ),

  'gastric-cancer': onc(
    'gastric-cancer', 'Gastric (Stomach) Cancer',
    'solid-tumor', 'C16.9',
    'Adenocarcinoma accounts for ~95% of gastric cancers. Higher incidence in East Asia. Associated with H. pylori infection, dietary factors (smoked/salted foods), and hereditary syndromes (CDH1 mutations).',
    'TNM staging I-IV. Depth of wall invasion (T), nodal involvement (N), and distant metastases (M). Lauren classification: intestinal vs. diffuse type.',
    ['Epigastric pain', 'Early satiety', 'Unintentional weight loss', 'Nausea/vomiting', 'Dysphagia (proximal tumors)', 'GI bleeding/melena', 'Iron deficiency anemia'],
    ['Upper endoscopy with biopsy', 'CT chest/abdomen/pelvis', 'EUS for T/N staging', 'HER2 testing', 'PET-CT', 'Diagnostic laparoscopy for advanced cases', 'PD-L1 CPS scoring'],
    'Early stage: endoscopic resection for T1a. Localized: perioperative FLOT chemotherapy + gastrectomy with D2 lymphadenectomy. Advanced/metastatic: fluoropyrimidine/platinum ± trastuzumab (HER2+) ± nivolumab (PD-L1 CPS ≥5).',
    'Stage I 5-year survival ~70%. Stage III ~20-30%. Metastatic median survival ~12-15 months. HER2+ disease benefits from targeted therapy. Diffuse type carries worse prognosis.',
  ),

  'esophageal-cancer': onc(
    'esophageal-cancer', 'Esophageal Cancer',
    'solid-tumor', 'C15.9',
    'Two main subtypes: squamous cell carcinoma (associated with tobacco/alcohol) and adenocarcinoma (associated with GERD/Barrett esophagus, obesity). Adenocarcinoma now predominates in Western countries.',
    'TNM staging I-IV. T stage based on depth of wall invasion. Staging determines surgical candidacy vs. definitive chemoradiation.',
    ['Progressive dysphagia (solids then liquids)', 'Odynophagia', 'Unintentional weight loss', 'Chest pain', 'Hoarseness (recurrent laryngeal nerve)', 'Cough from tracheoesophageal fistula'],
    ['Upper endoscopy with biopsy', 'CT chest/abdomen', 'PET-CT', 'EUS for locoregional staging', 'HER2 and PD-L1 testing', 'Bronchoscopy if airway involvement suspected'],
    'Localized: neoadjuvant chemoradiation (CROSS regimen) + esophagectomy, or perioperative chemo (FLOT). Adjuvant nivolumab if residual disease after neoadjuvant. Definitive chemoradiation for unresectable. Metastatic: fluoropyrimidine/platinum + nivolumab ± trastuzumab.',
    'Stage I 5-year survival ~50-70%. Stage III ~15-25%. Metastatic median survival ~12 months with immunochemotherapy. Checkpoint inhibitor addition has improved outcomes.',
  ),

  'hepatocellular-carcinoma': onc(
    'hepatocellular-carcinoma', 'Hepatocellular Carcinoma (HCC)',
    'solid-tumor', 'C22.0',
    'Most common primary liver cancer, arising in the setting of chronic liver disease/cirrhosis in >80% of cases. Leading causes: hepatitis B/C, alcohol, NASH/MAFLD. Can be diagnosed by imaging alone (LI-RADS 5) without biopsy.',
    'BCLC staging (0-D) incorporates tumor burden, liver function (Child-Pugh), and performance status. TNM also used. Milan criteria guide transplant eligibility.',
    ['Often asymptomatic (detected on surveillance)', 'RUQ pain', 'Weight loss', 'Hepatomegaly', 'Decompensated cirrhosis (ascites, jaundice)', 'Elevated AFP', 'Paraneoplastic syndromes'],
    ['Triphasic CT or MRI with contrast (arterial hyperenhancement + washout)', 'AFP and AFP-L3', 'Liver function assessment (Child-Pugh, MELD)', 'Biopsy only if imaging indeterminate', 'Ultrasound surveillance every 6 months for at-risk patients'],
    'Very early/early (BCLC 0-A): resection, liver transplant (Milan criteria), or ablation (RFA/MWA). Intermediate (BCLC B): TACE. Advanced (BCLC C): atezolizumab/bevacizumab first-line systemic therapy. Sorafenib or lenvatinib as alternatives.',
    'BCLC 0-A 5-year survival 50-70% with curative therapy. Transplant: 5-year survival ~70%. BCLC C with atezolizumab/bevacizumab median survival ~19 months. Underlying liver function is critical prognostic factor.',
  ),

  // ---- Solid tumors – Breast (2) --------------------------------------------

  'breast-cancer-early': onc(
    'breast-cancer-early', 'Breast Cancer (Early Stage)',
    'solid-tumor', 'C50.9',
    'Most common cancer in women worldwide. Early stage includes stage I-III disease. Major subtypes defined by receptor status: HR+/HER2-, HER2+, and triple-negative (TNBC). Screening mammography has reduced mortality.',
    'TNM staging I-III. Anatomic staging complemented by prognostic staging incorporating grade, ER/PR, HER2, and genomic assays (Oncotype DX, MammaPrint).',
    ['Painless breast lump', 'Skin changes (dimpling, peau d\'orange)', 'Nipple retraction or discharge', 'Axillary lymphadenopathy', 'Often screen-detected (asymptomatic)'],
    ['Diagnostic mammography and ultrasound', 'Core needle biopsy with ER/PR/HER2/Ki-67', 'Breast MRI for extent of disease', 'Sentinel lymph node biopsy', 'Genomic assay (Oncotype DX) for HR+/HER2- node-negative', 'Staging imaging for stage III'],
    'Surgery: lumpectomy + radiation or mastectomy. HR+/HER2-: endocrine therapy ± CDK4/6 inhibitor (abemaciclib) if high-risk; chemo guided by Oncotype DX. HER2+: neoadjuvant chemo + trastuzumab/pertuzumab, then adjuvant T-DM1 if residual disease. TNBC: neoadjuvant chemo + pembrolizumab; adjuvant pembrolizumab if residual disease.',
    'Stage I 5-year survival >95%. Stage II ~85-90%. Stage III ~50-70%. HR+ disease has excellent long-term prognosis with endocrine therapy. TNBC has higher early recurrence risk but decreasing risk after 5 years.',
  ),

  'breast-cancer-metastatic': onc(
    'breast-cancer-metastatic', 'Breast Cancer (Metastatic)',
    'solid-tumor', 'C50.9',
    'Stage IV breast cancer with distant metastases. Treatment is palliative, focused on prolonging survival and maintaining quality of life. Median survival has improved significantly with modern therapies, especially for HER2+ disease.',
    'Stage IV. Common metastatic sites: bone, liver, lung, brain. Repeat biopsy of metastases recommended to confirm receptor status (discordance in ~15%).',
    ['Bone pain', 'Dyspnea', 'Hepatomegaly/jaundice', 'Neurological symptoms (brain metastases)', 'Pathologic fractures', 'Hypercalcemia'],
    ['CT chest/abdomen/pelvis', 'Bone scan or PET-CT', 'Brain MRI if symptoms', 'Biopsy of metastatic site for receptor confirmation', 'Circulating tumor DNA (ctDNA) for PIK3CA, ESR1 mutations', 'Germline BRCA testing'],
    'HR+/HER2-: CDK4/6 inhibitor + endocrine therapy first-line; subsequent lines include PIK3CA inhibitor, mTOR inhibitor, PARP inhibitor (BRCA+), or antibody-drug conjugates (T-DXd, sacituzumab). HER2+: THP (taxane/trastuzumab/pertuzumab), then T-DXd, then tucatinib-based regimens. TNBC: pembrolizumab + chemo (PD-L1+), sacituzumab govitecan, PARP inhibitors (BRCA+).',
    'HR+/HER2- median survival ~5 years with CDK4/6 inhibitors. HER2+ median survival >5 years with modern targeted therapy. TNBC median survival ~18-24 months. Oligometastatic disease may achieve long-term disease control.',
  ),

  // ---- Solid tumors – Genitourinary (4) -------------------------------------

  'prostate-cancer': onc(
    'prostate-cancer', 'Prostate Cancer',
    'solid-tumor', 'C61',
    'Most common non-skin cancer in men. Wide spectrum from indolent low-grade disease suitable for active surveillance to aggressive metastatic castration-resistant prostate cancer (mCRPC). PSA screening remains controversial.',
    'TNM staging. Gleason score (now Grade Group 1-5) and PSA level determine risk stratification: very low, low, intermediate (favorable/unfavorable), high, very high risk.',
    ['Often asymptomatic (PSA-detected)', 'Urinary frequency/hesitancy', 'Hematuria', 'Bone pain (metastatic)', 'Erectile dysfunction', 'Lower extremity edema (advanced)'],
    ['PSA and digital rectal exam', 'Multiparametric MRI (mpMRI)', 'TRUS-guided or MRI-fusion biopsy', 'Gleason grading', 'Bone scan if PSA >20 or high-grade', 'PSMA PET-CT for staging', 'Genomic classifiers (Decipher, Prolaris)'],
    'Low risk: active surveillance. Intermediate: surgery (radical prostatectomy) or radiation ± ADT. High risk: radiation + long-term ADT ± abiraterone. Metastatic hormone-sensitive: ADT + docetaxel or novel hormonal agent (abiraterone, enzalutamide, apalutamide). mCRPC: enzalutamide, abiraterone, docetaxel, cabazitaxel, PARP inhibitors (HRD+), 177Lu-PSMA-617.',
    'Localized low-grade: >99% 10-year survival. High-risk localized: ~75-85% 10-year survival. Metastatic hormone-sensitive: median survival >5 years. mCRPC: median ~2-3 years with sequential therapies.',
  ),

  'renal-cell-carcinoma': onc(
    'renal-cell-carcinoma', 'Renal Cell Carcinoma (RCC)',
    'solid-tumor', 'C64',
    'Most common kidney malignancy (~90%). Clear cell subtype predominates (~75%). Characterized by VHL gene inactivation leading to VEGF overexpression. Historically resistant to conventional chemotherapy.',
    'TNM staging I-IV. Risk stratification for metastatic disease: IMDC criteria (favorable, intermediate, poor risk) based on hemoglobin, calcium, neutrophils, platelets, KPS, time from diagnosis.',
    ['Classic triad (rare): hematuria, flank pain, palpable mass', 'Often incidental finding on imaging', 'Weight loss', 'Paraneoplastic syndromes (polycythemia, hypercalcemia, Stauffer syndrome)', 'Varicocele (left-sided, from renal vein obstruction)'],
    ['CT abdomen/pelvis with contrast (enhancement pattern)', 'CT chest', 'Biopsy not always required if imaging classic', 'MRI for IVC thrombus evaluation', 'Bone scan if symptomatic', 'Brain MRI if metastatic'],
    'Localized: partial (preferred) or radical nephrectomy. Small tumors: active surveillance or ablation in select patients. Metastatic: immune checkpoint combinations first-line—nivolumab/cabozantinib or pembrolizumab/lenvatinib (intermediate/poor risk), pembrolizumab/lenvatinib (favorable risk). Cytoreductive nephrectomy in select cases.',
    'Stage I 5-year survival >90%. Stage IV favorable risk median survival ~4-5 years with immunotherapy combinations. Poor risk median ~15-20 months. Complete responses possible with checkpoint inhibitors.',
  ),

  'bladder-cancer': onc(
    'bladder-cancer', 'Bladder Cancer (Urothelial Carcinoma)',
    'solid-tumor', 'C67.9',
    'Most common urinary tract malignancy. Urothelial (transitional cell) carcinoma accounts for >90%. Strongly associated with smoking and occupational chemical exposures. High recurrence rate requiring long-term surveillance.',
    'TNM staging. Key distinction: non-muscle-invasive (Ta, T1, CIS) vs. muscle-invasive (T2+). Risk stratification for NMIBC guides intravesical therapy intensity.',
    ['Painless gross hematuria (most common)', 'Irritative voiding symptoms (frequency, urgency)', 'Recurrent UTIs', 'Flank pain (ureteral obstruction)', 'Pelvic pain (advanced)'],
    ['Cystoscopy with biopsy/TURBT', 'Urine cytology', 'CT urogram', 'Bimanual exam under anesthesia', 'Upper tract imaging', 'FGFR testing for metastatic disease'],
    'NMIBC: TURBT ± intravesical BCG or gemcitabine. High-risk NMIBC refractory to BCG: pembrolizumab or nadofaragene firadenovec. MIBC: neoadjuvant cisplatin-based chemo + radical cystectomy, adjuvant nivolumab. Metastatic: enfortumab vedotin + pembrolizumab first-line, or cisplatin-based chemo + avelumab maintenance. Erdafitinib for FGFR-altered tumors.',
    'NMIBC 5-year survival ~90% but 50-70% recurrence rate. MIBC with neoadjuvant chemo + cystectomy ~50% 5-year survival. Metastatic with modern therapies median survival ~15-20 months. EV + pembrolizumab has shown improved survival.',
  ),

  'testicular-cancer': onc(
    'testicular-cancer', 'Testicular Cancer',
    'solid-tumor', 'C62.9',
    'Most common solid tumor in men ages 15-35. Two main types: seminoma and nonseminoma (embryonal, yolk sac, choriocarcinoma, teratoma). Highly curable even in advanced stages with platinum-based chemotherapy.',
    'TNM staging I-III. IGCCC risk classification for metastatic disease: good, intermediate, poor prognosis based on tumor markers, primary site, and metastatic sites.',
    ['Painless testicular mass or swelling', 'Testicular heaviness', 'Back pain (retroperitoneal nodes)', 'Gynecomastia (hCG-secreting)', 'Dyspnea (pulmonary metastases)'],
    ['Testicular ultrasound', 'Serum tumor markers (AFP, beta-hCG, LDH)', 'CT chest/abdomen/pelvis', 'Radical inguinal orchiectomy (diagnostic and therapeutic)', 'Post-orchiectomy markers for staging'],
    'Stage I seminoma: surveillance or radiation or carboplatin. Stage I nonseminoma: surveillance or RPLND. Advanced disease: BEP chemotherapy (bleomycin/etoposide/cisplatin) 3-4 cycles based on risk. Post-chemo RPLND for residual masses in nonseminoma. Salvage: TIP or high-dose chemo with stem cell rescue.',
    'Stage I cure rate >99%. Good-risk metastatic 5-year survival ~95%. Intermediate-risk ~80%. Poor-risk ~50-60%. One of the great successes of modern oncology. Sperm banking recommended before treatment.',
  ),

  // ---- Solid tumors – Gynecologic (3) ---------------------------------------

  'ovarian-cancer': onc(
    'ovarian-cancer', 'Ovarian Cancer (Epithelial)',
    'solid-tumor', 'C56',
    'Most lethal gynecologic malignancy. High-grade serous carcinoma is the most common subtype (~70%). Majority present at advanced stage due to lack of effective screening. BRCA1/2 mutations in ~20%.',
    'FIGO staging I-IV. Stage I: confined to ovaries. Stage II: pelvic extension. Stage III: peritoneal spread and/or retroperitoneal nodes. Stage IV: distant metastases (pleural effusion, liver parenchyma).',
    ['Bloating', 'Pelvic/abdominal pain', 'Early satiety', 'Urinary urgency/frequency', 'Ascites', 'Bowel obstruction (advanced)', 'Often vague symptoms leading to late diagnosis'],
    ['Pelvic ultrasound (transvaginal)', 'CT chest/abdomen/pelvis', 'CA-125', 'Surgical staging (laparotomy)', 'Germline BRCA1/2 and HRD testing', 'Somatic molecular profiling'],
    'Primary debulking surgery (goal: no residual disease) + adjuvant carboplatin/paclitaxel ± bevacizumab. BRCA/HRD+: PARP inhibitor maintenance (olaparib, niraparib). Neoadjuvant chemo + interval debulking if upfront surgery not optimal. Recurrent: platinum-based rechallenge if platinum-sensitive, or pegylated liposomal doxorubicin, topotecan, bevacizumab, mirvetuximab soravtansine (FRα+).',
    'Stage I 5-year survival ~90%. Stage III-IV ~30-40%. BRCA-mutated tumors respond better to platinum and PARP inhibitors with improved survival. Overall 5-year survival ~50%.',
  ),

  'cervical-cancer': onc(
    'cervical-cancer', 'Cervical Cancer',
    'solid-tumor', 'C53.9',
    'Almost entirely caused by persistent high-risk HPV infection (types 16, 18). Highly preventable with HPV vaccination and screening (Pap smear, HPV testing). Squamous cell carcinoma (70%) and adenocarcinoma (25%).',
    'FIGO staging (2018 revision) I-IV, clinically staged but now incorporates imaging and pathology. IA: microscopic. IB-IIA: confined to cervix/upper vagina. IIB+: parametrial or beyond.',
    ['Abnormal vaginal bleeding (postcoital, intermenstrual)', 'Vaginal discharge', 'Pelvic pain', 'Flank pain (hydronephrosis from ureteral obstruction)', 'Lower extremity edema (advanced)'],
    ['Cervical biopsy (colposcopy-directed or cone)', 'Pelvic MRI', 'CT chest/abdomen/pelvis', 'PET-CT for staging', 'HPV typing', 'PD-L1 testing for advanced disease'],
    'Early (IA1): cone biopsy or simple hysterectomy. IB1-IIA1: radical hysterectomy + pelvic lymphadenectomy or definitive chemoradiation. IB2-IVA: concurrent cisplatin-based chemoradiation + brachytherapy, adjuvant pembrolizumab. Metastatic/recurrent: pembrolizumab + chemo ± bevacizumab; tisotumab vedotin second-line.',
    'Stage I 5-year survival ~90%. Stage IIB-III ~50-65% with chemoradiation. Stage IVB median survival ~17 months with pembrolizumab + chemo + bevacizumab. HPV vaccination can prevent >90% of cervical cancers.',
  ),

  'endometrial-cancer': onc(
    'endometrial-cancer', 'Endometrial Cancer',
    'solid-tumor', 'C54.1',
    'Most common gynecologic malignancy. Predominantly endometrioid histology (~80%). Strongly linked to unopposed estrogen exposure (obesity, anovulation, tamoxifen). Molecular classification (TCGA) increasingly guides treatment.',
    'FIGO staging I-IV (surgically staged). Molecular classification: POLE ultramutated, MSI-high, copy-number low (p53 wild-type), copy-number high (p53 abnormal/serous-like).',
    ['Abnormal uterine bleeding (especially postmenopausal)', 'Pelvic pain', 'Vaginal discharge', 'Often diagnosed early due to symptomatic bleeding'],
    ['Endometrial biopsy or D&C', 'Transvaginal ultrasound', 'CT chest/abdomen/pelvis or MRI', 'Molecular classification (MMR/MSI, p53, POLE)', 'CA-125 for advanced disease'],
    'Stage I low-grade: hysterectomy + BSO ± sentinel lymph node. High-risk features: adjuvant radiation ± chemotherapy. Advanced/recurrent: carboplatin/paclitaxel ± pembrolizumab (for dMMR/MSI-H) or dostarlimab. Hormone therapy (progesterone) for low-grade, HR+ recurrent disease. Lenvatinib + pembrolizumab for MSS advanced disease.',
    'Stage I 5-year survival ~90%. Stage III ~60%. Serous/p53-abnormal histology has worse prognosis (~50% at stage III). POLE-mutated has excellent prognosis regardless of stage. dMMR/MSI-H responds well to immunotherapy.',
  ),

  // ---- Skin cancer (2) -----------------------------------------------------

  'melanoma': onc(
    'melanoma', 'Cutaneous Melanoma',
    'skin-cancer', 'C43.9',
    'Most deadly skin cancer, arising from melanocytes. Risk factors include UV exposure, fair skin, numerous nevi, family history, and CDKN2A mutations. Early detection is critical for cure.',
    'AJCC TNM staging 0-IV. Breslow thickness and ulceration are key T-stage determinants. Sentinel lymph node status is the strongest prognostic factor for localized disease.',
    ['Changing mole (ABCDE criteria)', 'New pigmented lesion', 'Non-healing skin lesion', 'Amelanotic (non-pigmented) lesion', 'Lymphadenopathy (regional spread)', 'Varied symptoms from distant metastases'],
    ['Excisional biopsy (preferred) with Breslow depth', 'Sentinel lymph node biopsy (>0.8mm thickness)', 'LDH', 'CT or PET-CT for staging (stage III+)', 'Brain MRI', 'BRAF V600 mutation testing', 'PD-L1 expression'],
    'Stage 0-II: wide local excision with margins based on thickness. Stage III: surgery + adjuvant immunotherapy (nivolumab or pembrolizumab) or targeted therapy (dabrafenib/trametinib if BRAF V600+). Stage IV: first-line nivolumab + relatlimab or nivolumab + ipilimumab. BRAF+: encorafenib/binimetinib. T-VEC for injectable lesions.',
    'Stage I 5-year survival >95%. Stage III ~60-80% with adjuvant immunotherapy. Stage IV with immunotherapy: 5-year survival ~40-50% (nivolumab + ipilimumab). Complete responses can be durable. BRAF-mutated disease has targeted therapy option.',
  ),

  'merkel-cell-carcinoma': onc(
    'merkel-cell-carcinoma', 'Merkel Cell Carcinoma',
    'skin-cancer', 'C44.9',
    'Rare, aggressive neuroendocrine skin cancer. Associated with Merkel cell polyomavirus (MCPyV) in ~80% and UV exposure/immunosuppression. Frequently metastasizes to regional lymph nodes.',
    'AJCC TNM staging I-IV. Primary tumor size and nodal involvement are key prognostic factors. MCPyV-positive tumors have better prognosis.',
    ['Rapidly growing, painless, firm, dome-shaped skin nodule', 'Red-violet or skin-colored', 'Usually on sun-exposed areas (head, neck)', 'Often misdiagnosed initially'],
    ['Skin biopsy with CK20 and neuroendocrine markers', 'Sentinel lymph node biopsy', 'CT or PET-CT for staging', 'MCPyV serology'],
    'Localized: wide excision + sentinel lymph node biopsy ± adjuvant radiation. Advanced/metastatic: first-line avelumab or pembrolizumab (immune checkpoint inhibitors). Chemotherapy (cisplatin/etoposide) if immunotherapy contraindicated, though responses are less durable.',
    'Stage I 5-year survival ~65-75%. Stage III ~40-50%. Metastatic with immunotherapy: response rate ~50-60%, durable in many patients. Virus-positive tumors have better immunotherapy response.',
  ),

  // ---- Hematologic malignancies (9) -----------------------------------------

  'hodgkin-lymphoma': onc(
    'hodgkin-lymphoma', 'Hodgkin Lymphoma',
    'hematologic-malignancy', 'C81.9',
    'Lymphoid neoplasm characterized by Reed-Sternberg cells in a reactive inflammatory background. Bimodal age distribution (20s and >55). Classical HL (~95%) and nodular lymphocyte-predominant HL. Highly curable.',
    'Ann Arbor staging I-IV with Lugano modifications. A/B designation for symptoms. Limited (I-II) vs. advanced (III-IV). PET-adapted therapy increasingly used.',
    ['Painless cervical or supraclavicular lymphadenopathy', 'B symptoms (fever, drenching night sweats, >10% weight loss)', 'Pruritus', 'Alcohol-induced nodal pain (classic but rare)', 'Mediastinal mass causing cough or dyspnea'],
    ['Excisional lymph node biopsy (Reed-Sternberg cells, CD15+/CD30+)', 'PET-CT (Deauville score)', 'CBC, ESR, albumin, LDH', 'Bone marrow biopsy if clinically indicated', 'Pulmonary function tests (pre-bleomycin)', 'Fertility counseling'],
    'Early favorable: ABVD x2-4 cycles ± involved-field radiation. Early unfavorable: ABVD x4-6 ± radiation. Advanced: ABVD x6 or BV-AVD (brentuximab vedotin + AVD), PET-adapted de-escalation. Relapsed/refractory: salvage chemo + autologous stem cell transplant, then brentuximab vedotin or pembrolizumab maintenance.',
    'Early stage cure rate >90%. Advanced stage ~80-85%. Relapsed after auto-SCT: checkpoint inhibitors achieve durable remissions. One of the most curable cancers. Late effects (secondary cancers, cardiac) require long-term monitoring.',
  ),

  'diffuse-large-b-cell-lymphoma': onc(
    'diffuse-large-b-cell-lymphoma', 'Diffuse Large B-Cell Lymphoma (DLBCL)',
    'hematologic-malignancy', 'C83.3',
    'Most common non-Hodgkin lymphoma (~30%). Aggressive but potentially curable. Subtypes by gene expression: germinal center B-cell (GCB) and activated B-cell (ABC). Double/triple-hit lymphomas carry worse prognosis.',
    'Ann Arbor/Lugano staging I-IV. IPI score (age, stage, LDH, ECOG, extranodal sites) determines risk: low, low-intermediate, high-intermediate, high.',
    ['Rapidly enlarging lymphadenopathy', 'B symptoms', 'Extranodal involvement (GI, CNS, bone, testis)', 'Abdominal mass/pain', 'Superior vena cava syndrome'],
    ['Excisional lymph node biopsy', 'Immunohistochemistry (CD20+, cell of origin)', 'FISH for MYC, BCL2, BCL6 rearrangements', 'PET-CT', 'Bone marrow biopsy', 'LDH, CBC', 'CNS risk assessment (CNS-IPI)', 'Lumbar puncture if high CNS risk'],
    'R-CHOP x6 cycles is standard (rituximab, cyclophosphamide, doxorubicin, vincristine, prednisone) ± radiation for bulky disease. Pola-R-CHP (polatuzumab vedotin) for higher-risk. Double-hit: DA-EPOCH-R. Relapsed/refractory: salvage chemo + auto-SCT if chemosensitive, or CAR-T cell therapy (axicabtagene ciloleucel, lisocabtagene maraleucel, tisagenlecleucel). Bispecifics: glofitamab, epcoritamab.',
    'R-CHOP cures ~60-65% overall. Low IPI: >80% cure rate. High IPI: ~40-50%. CAR-T achieves ~40% long-term remission in relapsed/refractory. Double-hit lymphoma: ~50% cure with intensive regimens.',
  ),

  'follicular-lymphoma': onc(
    'follicular-lymphoma', 'Follicular Lymphoma',
    'hematologic-malignancy', 'C82.9',
    'Second most common NHL. Indolent B-cell lymphoma with t(14;18) translocation and BCL2 overexpression in ~85%. Median age at diagnosis ~60. Typically incurable but with long natural history. Risk of transformation to DLBCL.',
    'Ann Arbor staging. FLIPI (Follicular Lymphoma International Prognostic Index) and FLIPI2 for risk stratification. Grading 1-3A (indolent) vs. 3B (aggressive, treated as DLBCL).',
    ['Painless, waxing and waning lymphadenopathy', 'Often asymptomatic at diagnosis', 'B symptoms (less common)', 'Cytopenias from marrow involvement', 'Splenomegaly'],
    ['Excisional lymph node biopsy (follicular architecture, CD10+, CD20+, BCL2+)', 'PET-CT', 'Bone marrow biopsy', 'CBC, LDH, beta-2 microglobulin', 'Hepatitis B testing (before rituximab)'],
    'Watchful waiting for asymptomatic low-volume disease. Symptomatic: bendamustine-rituximab or R-CHOP. Rituximab maintenance x2 years. Relapsed: lenalidomide + rituximab (R2), PI3K inhibitors, EZH2 inhibitors (tazemetostat), or CAR-T cell therapy. Radiation for localized (stage I-II).',
    'Median overall survival >15-20 years. Stage I with radiation: potentially curable. Transformation to DLBCL occurs at ~3% per year. POD24 (progression within 24 months) identifies high-risk subset with worse outcomes.',
  ),

  'mantle-cell-lymphoma': onc(
    'mantle-cell-lymphoma', 'Mantle Cell Lymphoma',
    'hematologic-malignancy', 'C83.1',
    'Aggressive B-cell NHL characterized by t(11;14) and cyclin D1 overexpression. Median age ~65, male predominance. Combines features of aggressive and indolent lymphoma. Indolent/leukemic non-nodal variant exists.',
    'Ann Arbor staging. MIPI (Mantle Cell Lymphoma International Prognostic Index) for risk stratification. Ki-67 index and TP53 mutation status are important prognostic markers.',
    ['Generalized lymphadenopathy', 'Splenomegaly', 'GI involvement (lymphomatous polyposis)', 'B symptoms', 'Cytopenias', 'Leukemic phase'],
    ['Excisional biopsy (cyclin D1+, CD5+, CD20+, SOX11+)', 'FISH for t(11;14)', 'PET-CT', 'Bone marrow biopsy', 'GI endoscopy (upper and lower)', 'TP53 mutation analysis', 'Ki-67 proliferation index'],
    'Young/fit: intensive induction with cytarabine (R-DHAP/R-CHOP alternating) + auto-SCT consolidation, rituximab maintenance. Older: bendamustine-rituximab or VR-CAP. Relapsed: BTK inhibitors (ibrutinib, acalabrutinib, zanubrutinib), lenalidomide-rituximab, CAR-T cell therapy (brexucabtagene autoleucel). Bispecifics in development.',
    'Median overall survival ~5-7 years. Intensive approach: median PFS ~7-10 years. Indolent variant: prolonged survival with observation. TP53-mutated: poor outcomes with standard therapy, consider clinical trials. CAR-T shows promise in relapsed disease.',
  ),

  'acute-lymphoblastic-leukemia': onc(
    'acute-lymphoblastic-leukemia', 'Acute Lymphoblastic Leukemia (ALL)',
    'hematologic-malignancy', 'C91.0',
    'Most common pediatric cancer. Also occurs in adults with inferior outcomes. B-cell (85%) or T-cell lineage. Philadelphia chromosome (BCR-ABL) present in ~25% of adult ALL. Rapid onset with bone marrow failure.',
    'Risk stratification rather than traditional staging. Standard vs. high risk based on age, WBC, cytogenetics (Ph+, KMT2A, hypodiploidy), MRD response. Philadelphia-like ALL identified by gene expression.',
    ['Fatigue and pallor (anemia)', 'Infections/fever (neutropenia)', 'Bleeding/bruising (thrombocytopenia)', 'Bone pain', 'Lymphadenopathy', 'Hepatosplenomegaly', 'CNS symptoms (headache, cranial nerve palsies)'],
    ['CBC with differential (blasts)', 'Bone marrow biopsy with flow cytometry', 'Cytogenetics and FISH (BCR-ABL, KMT2A)', 'Molecular testing (IKZF1, Ph-like)', 'Lumbar puncture (CNS involvement)', 'MRD assessment by flow or PCR', 'TLS labs (uric acid, potassium, phosphorus, LDH)'],
    'Pediatric-inspired protocols for adolescents/young adults (15-39). Induction: vincristine, dexamethasone, asparaginase, anthracycline. CNS prophylaxis: intrathecal methotrexate. Ph+ ALL: TKI (dasatinib/ponatinib) + chemotherapy or blinatumomab. MRD-directed: blinatumomab, inotuzumab ozogamicin, or CAR-T (tisagenlecleucel) for refractory. Allo-SCT for high-risk in CR1.',
    'Pediatric ALL cure rate ~90%. Adult ALL overall survival ~40-50%. Ph+ ALL with TKI: ~60-70% 5-year survival. MRD-negative CR is strong favorable prognostic factor. CAR-T achieves ~80% CR in relapsed B-ALL.',
  ),

  'acute-myeloid-leukemia': onc(
    'acute-myeloid-leukemia', 'Acute Myeloid Leukemia (AML)',
    'hematologic-malignancy', 'C92.0',
    'Most common acute leukemia in adults. Median age ~68. Heterogeneous disease defined by recurrent genetic abnormalities (ELN 2022 classification). Can arise de novo or secondary to MDS/therapy.',
    'ELN 2022 risk stratification: favorable (NPM1+, CEBPA, core-binding factor), intermediate, adverse (TP53, complex karyotype, FLT3-ITD high ratio). MRD status refines prognosis.',
    ['Fatigue (anemia)', 'Fever/infections (neutropenia)', 'Bleeding (thrombocytopenia, DIC)', 'Gum hypertrophy (monocytic subtypes)', 'Leukostasis (very high WBC)', 'Bone pain'],
    ['CBC with differential (≥20% blasts)', 'Bone marrow biopsy with aspirate', 'Flow cytometry', 'Cytogenetics', 'Molecular panel (FLT3, NPM1, CEBPA, TP53, IDH1/2, RUNX1)', 'Coagulation studies (DIC screen)', 'TLS labs'],
    'Fit patients: intensive induction "7+3" (cytarabine + daunorubicin). FLT3+: add midostaurin. Favorable risk: consolidation with HiDAC. Intermediate/adverse: allo-SCT in CR1. CPX-351 for secondary AML. Unfit: venetoclax + azacitidine. APL (PML-RARA): ATRA + arsenic trioxide (no traditional chemo). IDH inhibitors (ivosidenib, enasidenib) for IDH-mutated.',
    'Favorable risk: 5-year OS ~60-70%. Intermediate: ~40-50%. Adverse: ~10-20%. APL cure rate >90% with ATRA/ATO. Venetoclax + azacitidine for unfit: median OS ~15 months. Allo-SCT can cure 40-50% of intermediate/adverse risk.',
  ),

  'chronic-lymphocytic-leukemia': onc(
    'chronic-lymphocytic-leukemia', 'Chronic Lymphocytic Leukemia (CLL)',
    'hematologic-malignancy', 'C91.1',
    'Most common adult leukemia in Western countries. Indolent B-cell neoplasm. Many patients diagnosed incidentally. IGHV mutational status and TP53/del(17p) are key prognostic/predictive markers.',
    'Rai (0-IV) and Binet (A-C) staging. CLL-IPI integrates TP53, IGHV, beta-2 microglobulin, stage, and age. Treatment criteria: progressive cytopenias, massive splenomegaly, symptoms, rapid doubling time.',
    ['Often asymptomatic (lymphocytosis on routine labs)', 'Lymphadenopathy', 'Splenomegaly', 'B symptoms', 'Recurrent infections (hypogammaglobulinemia)', 'Autoimmune cytopenias (AIHA, ITP)'],
    ['CBC (sustained lymphocytosis ≥5×10⁹/L)', 'Flow cytometry (CD5+, CD19+, CD23+, dim CD20)', 'FISH panel (del13q, del11q, del17p, trisomy 12)', 'TP53 mutation analysis', 'IGHV mutational status', 'Beta-2 microglobulin', 'DAT if anemia'],
    'Watch and wait for early-stage asymptomatic disease. First-line when treatment indicated: BTK inhibitors (ibrutinib, acalabrutinib, zanubrutinib) or venetoclax + obinutuzumab (fixed duration). Del(17p)/TP53 mutated: BTK inhibitor or venetoclax-based. Avoid fludarabine-based regimens for del(17p). Richter transformation: treated as aggressive lymphoma.',
    'Early-stage CLL: many patients never require treatment, normal life expectancy. IGHV mutated: median survival >15-20 years. IGHV unmutated: median ~8-10 years. BTK inhibitors: PFS >5 years. Del(17p)/TP53: historically poor, now improved with novel agents. Richter transformation: poor prognosis.',
  ),

  'chronic-myeloid-leukemia': onc(
    'chronic-myeloid-leukemia', 'Chronic Myeloid Leukemia (CML)',
    'hematologic-malignancy', 'C92.1',
    'Myeloproliferative neoplasm defined by the Philadelphia chromosome (BCR-ABL1 fusion). Paradigm for targeted therapy with tyrosine kinase inhibitors (TKIs). Three phases: chronic, accelerated, blast crisis.',
    'Chronic phase, accelerated phase, blast crisis. Sokal, Hasford, and EUTOS risk scores. Molecular response milestones: BCR-ABL1 ≤10% at 3 months, ≤1% at 6 months, ≤0.1% (MMR) at 12 months.',
    ['Fatigue', 'Splenomegaly (often massive)', 'Night sweats', 'Weight loss', 'Leukocytosis with left shift on CBC', 'Basophilia', 'Often incidental finding'],
    ['CBC with differential (leukocytosis, basophilia, all stages of myeloid maturation)', 'Peripheral blood or bone marrow for BCR-ABL1 by FISH/RT-PCR', 'Bone marrow biopsy', 'Cytogenetics for Philadelphia chromosome t(9;22)', 'BCR-ABL1 transcript type (p210 vs. p190)'],
    'Chronic phase: TKI (imatinib, dasatinib, nilotinib, bosutinib, or asciminib) first-line. Monitor BCR-ABL1 by qPCR every 3 months. Treatment-free remission (TFR) attempt after sustained deep molecular response (MR4.5) for ≥2 years. Accelerated/blast crisis: TKI + chemotherapy, then allo-SCT. Ponatinib or asciminib for T315I mutation.',
    'Chronic phase with TKI: near-normal life expectancy. 10-year OS ~85-90% with modern TKIs. TFR successful in ~50% of eligible patients. Blast crisis: poor prognosis, median survival <12 months without SCT. TKIs transformed CML from fatal to chronic disease.',
  ),

  'multiple-myeloma': onc(
    'multiple-myeloma', 'Multiple Myeloma',
    'hematologic-malignancy', 'C90.0',
    'Clonal plasma cell neoplasm producing monoclonal immunoglobulin. Preceded by MGUS and smoldering myeloma. Characterized by CRAB criteria (calcium elevation, renal insufficiency, anemia, bone disease). Incurable but with improving survival.',
    'Revised ISS (R-ISS) staging I-III based on beta-2 microglobulin, albumin, LDH, and cytogenetics. High-risk cytogenetics: t(4;14), t(14;16), del(17p), gain(1q). SLiM-CRAB criteria define treatment-requiring myeloma.',
    ['Bone pain (especially back)', 'Pathologic fractures', 'Fatigue (anemia)', 'Recurrent infections', 'Renal insufficiency', 'Hypercalcemia (confusion, constipation, polyuria)', 'Neuropathy'],
    ['SPEP, UPEP, serum free light chains', 'Bone marrow biopsy with FISH', 'Whole-body low-dose CT or PET-CT (replaces skeletal survey)', 'CBC, creatinine, calcium, LDH, albumin, beta-2 microglobulin', 'MRI for suspected cord compression'],
    'Transplant-eligible: induction with VRd (bortezomib, lenalidomide, dexamethasone) or Dara-VRd x4-6 cycles, then auto-SCT, lenalidomide maintenance. Transplant-ineligible: Dara-VRd or Dara-Rd. First relapse: carfilzomib- or pomalidomide-based triplet ± daratumumab. Later lines: selinexor, belantamab mafodotin, CAR-T (idecabtagene vicleucel, ciltacabtagene autoleucel), bispecifics (teclistamab, talquetamab).',
    'R-ISS I median OS >8 years. R-ISS III median OS ~3-4 years. Transplant-eligible with Dara-VRd: deep MRD-negative responses. High-risk cytogenetics: inferior outcomes despite modern therapy. CAR-T in relapsed disease: ~70% response rate. Overall median survival has doubled to ~6-8 years with modern therapies.',
  ),

  // ---- CNS tumors (3) -------------------------------------------------------

  'glioblastoma': onc(
    'glioblastoma', 'Glioblastoma (GBM, IDH-wildtype)',
    'CNS-tumor', 'C71.9',
    'Most common and aggressive primary brain tumor in adults. WHO grade 4. Defined by IDH-wildtype status with TERT promoter mutation, EGFR amplification, or +7/-10. Highly infiltrative, making complete resection impossible.',
    'No formal staging system. Classified by WHO 2021 CNS criteria. Extent of resection, MGMT methylation, and age are key prognostic factors. Molecular markers integrated into diagnosis.',
    ['Headache (often morning, positional)', 'Seizures', 'Progressive focal neurological deficits', 'Personality/cognitive changes', 'Nausea/vomiting (raised ICP)', 'Hemiparesis'],
    ['MRI brain with gadolinium (ring-enhancing mass with central necrosis)', 'Stereotactic biopsy or surgical resection', 'Molecular profiling (IDH, MGMT methylation, TERT, EGFR, +7/-10)', 'Spectroscopy or perfusion imaging', 'Dexamethasone for peritumoral edema'],
    'Standard of care: maximal safe surgical resection + Stupp protocol (concurrent temozolomide + radiation 60 Gy, then adjuvant temozolomide x6 cycles). Tumor-treating fields (TTFields/Optune). Recurrence: bevacizumab, re-resection, re-irradiation, or clinical trials. Elderly/poor KPS: hypofractionated RT + temozolomide or temozolomide alone if MGMT methylated.',
    'Median overall survival ~15-18 months with standard treatment. MGMT methylated: median ~22-24 months. 5-year survival ~5-10%. TTFields adds ~3-5 months to median survival. Virtually all patients recur. One of the most challenging cancers to treat.',
  ),

  'meningioma': onc(
    'meningioma', 'Meningioma',
    'CNS-tumor', 'D32.9',
    'Most common primary intracranial tumor, arising from meningeal (arachnoid) cells. Majority benign (WHO grade 1, ~80%). WHO grade 2 (atypical, ~15%) and grade 3 (anaplastic, ~3%) have higher recurrence. More common in women.',
    'WHO grading 1-3. No TNM staging. Location, grade, extent of resection (Simpson grading), and Ki-67 index determine management and prognosis.',
    ['Often incidental finding', 'Headache', 'Seizures', 'Focal neurological deficits based on location', 'Visual changes (optic nerve sheath)', 'Cognitive decline'],
    ['MRI brain with gadolinium (dural-based, homogeneously enhancing, dural tail sign)', 'CT (may show calcification or hyperostosis)', 'MR spectroscopy if diagnostic uncertainty', 'Observation with serial MRI for small, asymptomatic lesions'],
    'Observation with serial imaging for small asymptomatic grade 1. Surgical resection (goal: Simpson grade I) for symptomatic or growing tumors. Adjuvant radiation for grade 2-3 or subtotal resection. Stereotactic radiosurgery (SRS) for small, surgically inaccessible tumors. No effective systemic therapy for recurrent/progressive; clinical trials.',
    'Grade 1: 10-year recurrence ~10-20% after gross total resection. Grade 2: 5-year recurrence ~40-50%. Grade 3: median survival ~2-3 years. Most meningiomas are curable with surgery. Benign designation ICD D32.9 reflects most common grade.',
  ),

  'brain-metastases': onc(
    'brain-metastases', 'Brain Metastases',
    'CNS-tumor', 'C79.3',
    'Most common intracranial tumors overall, outnumbering primary brain tumors 10:1. Most common primaries: lung, breast, melanoma, renal, colorectal. Incidence increasing with improved systemic disease control and better CNS imaging.',
    'Number, size, location, and primary tumor histology determine management. GPA (Graded Prognostic Assessment) is disease-specific scoring system.',
    ['Headache', 'Seizures', 'Focal deficits (hemiparesis, aphasia)', 'Cognitive changes', 'Ataxia (posterior fossa)', 'Signs of elevated ICP'],
    ['MRI brain with gadolinium (gold standard)', 'Biopsy if primary unknown or diagnostic uncertainty', 'Systemic staging to assess extracranial disease', 'Molecular profiling of primary tumor (determines CNS-penetrant targeted therapy options)'],
    'Limited (1-3): surgical resection + SRS, or SRS alone. Multiple: whole-brain radiation (WBRT) with hippocampal avoidance + memantine, or SRS if ≤10 lesions. Systemic therapy with CNS activity: osimertinib (EGFR+ NSCLC), tucatinib-based (HER2+ breast), immunotherapy (melanoma, NSCLC). Dexamethasone for edema.',
    'Highly variable by primary tumor. Melanoma brain metastases with ipilimumab/nivolumab: ~50% CNS response. HER2+ breast with tucatinib: meaningful CNS activity. GPA score guides prognosis from months to years. SRS has improved outcomes for oligometastatic CNS disease.',
  ),

  // ---- Endocrine tumors (3) -------------------------------------------------

  'thyroid-cancer-differentiated': onc(
    'thyroid-cancer-differentiated', 'Differentiated Thyroid Cancer (Papillary/Follicular)',
    'endocrine-tumor', 'C73',
    'Most common endocrine malignancy. Papillary thyroid cancer (PTC, ~85%) and follicular thyroid cancer (FTC, ~10%). Excellent prognosis. Often presents as thyroid nodule. Risk factors include radiation exposure and family history.',
    'AJCC TNM staging. ATA risk stratification: low, intermediate, high risk of recurrence. Age (<55 vs. ≥55) significantly impacts AJCC staging for DTC.',
    ['Thyroid nodule (often palpable or incidental on imaging)', 'Cervical lymphadenopathy', 'Hoarseness (RLN invasion)', 'Dysphagia', 'Rarely: distant metastatic symptoms (lung, bone)'],
    ['Thyroid ultrasound with TI-RADS scoring', 'FNA biopsy (Bethesda classification)', 'Molecular testing (Afirma, ThyroSeq) for indeterminate nodules', 'TSH', 'Post-surgical: thyroglobulin and anti-Tg antibodies', 'RAI whole-body scan'],
    'Lobectomy for low-risk unifocal tumors <4cm. Total thyroidectomy for high-risk, bilateral, or >4cm. Radioactive iodine (RAI) ablation for intermediate/high risk. TSH suppression with levothyroxine. RAI-refractory: lenvatinib or sorafenib. BRAF V600E+: dabrafenib/trametinib. RET-fusion: selpercatinib.',
    'Papillary thyroid cancer 10-year survival >95%. Follicular ~90-95%. Recurrence rate depends on ATA risk: low risk <5%, high risk ~30-40%. RAI-refractory disease has worse prognosis. Overall one of the most favorable cancer diagnoses.',
  ),

  'anaplastic-thyroid-cancer': onc(
    'anaplastic-thyroid-cancer', 'Anaplastic Thyroid Cancer',
    'endocrine-tumor', 'C73',
    'Rare (<2% of thyroid cancers) but one of the most aggressive human malignancies. Often arises from dedifferentiation of pre-existing differentiated thyroid cancer. Rapid local invasion of neck structures.',
    'All cases considered stage IV at diagnosis. IVA: intrathyroidal. IVB: extrathyroidal or nodal. IVC: distant metastases.',
    ['Rapidly enlarging neck mass', 'Dysphagia', 'Dyspnea/stridor', 'Hoarseness', 'Pain', 'Compressive symptoms'],
    ['Core needle or open biopsy', 'CT neck/chest (assess airway)', 'PET-CT', 'BRAF V600E testing (present in ~40%)', 'Airway assessment'],
    'BRAF V600E+: dabrafenib/trametinib (neoadjuvant), then surgery if resectable, chemoradiation. BRAF wild-type: clinical trials, chemoradiation with weekly paclitaxel, or lenvatinib. Tracheostomy may be needed. Palliative radiation for local symptoms. Immunotherapy (pembrolizumab) showing some activity.',
    'Historically median survival 3-6 months. BRAF-directed therapy has significantly improved outcomes: ~1-year survival in responders. Complete surgical resection when achievable improves prognosis. Overall prognosis remains poor.',
  ),

  'carcinoid-tumor': onc(
    'carcinoid-tumor', 'Neuroendocrine Tumor (Carcinoid)',
    'endocrine-tumor', 'C7A.0',
    'Well-differentiated neuroendocrine tumors, most commonly arising in the GI tract (small bowel, appendix, rectum) or bronchopulmonary system. Grade 1-2 (low/intermediate proliferation). May produce serotonin causing carcinoid syndrome.',
    'TNM staging varies by primary site. WHO grading: G1 (Ki-67 <3%), G2 (Ki-67 3-20%). Distinction from high-grade neuroendocrine carcinoma is critical. Functional vs. non-functional.',
    ['Often asymptomatic (incidental finding)', 'Carcinoid syndrome (flushing, diarrhea, wheezing, right-sided heart disease) — requires liver metastases for GI primary', 'Abdominal pain', 'Bowel obstruction', 'Bronchial: cough, hemoptysis, recurrent pneumonia'],
    ['CT/MRI', '68Ga-DOTATATE PET-CT (somatostatin receptor imaging)', 'Chromogranin A', '24-hour urine 5-HIAA (carcinoid syndrome)', 'Echocardiogram (carcinoid heart disease)', 'Biopsy with Ki-67 and synaptophysin/chromogranin', 'Somatostatin receptor status'],
    'Localized: surgical resection (curative intent). Somatostatin analogs (octreotide LAR, lanreotide) for symptom control and antiproliferative effect. Progressive: PRRT (177Lu-DOTATATE), everolimus, or temozolomide/capecitabine. Liver-directed therapy (embolization, ablation) for hepatic metastases. Telotristat for refractory carcinoid syndrome diarrhea.',
    'Well-differentiated NET 5-year survival: localized >90%, regional ~70-80%, distant ~35-55%. Indolent course with some patients surviving >10 years with metastatic disease. Grade and Ki-67 index are strongest prognostic factors.',
  ),

  // ---- Additional solid tumors (6) ------------------------------------------

  'head-neck-squamous': onc(
    'head-neck-squamous', 'Head and Neck Squamous Cell Carcinoma',
    'solid-tumor', 'C14.0',
    'Cancers of the oral cavity, oropharynx, larynx, hypopharynx, and nasopharynx. HPV-associated oropharyngeal cancer (p16+) has distinct biology and better prognosis. Tobacco/alcohol for non-HPV tumors.',
    'TNM staging I-IV. Separate staging for HPV-associated (p16+) oropharyngeal cancer reflecting better prognosis. EBV-associated nasopharyngeal carcinoma also staged distinctly.',
    ['Non-healing oral ulcer', 'Hoarseness (>3 weeks)', 'Dysphagia', 'Odynophagia', 'Neck mass', 'Otalgia (referred ear pain)', 'Weight loss'],
    ['Panendoscopy with biopsy', 'CT and/or MRI of head and neck', 'PET-CT', 'p16/HPV testing for oropharynx', 'EBV for nasopharynx', 'Dental evaluation pre-radiation', 'PD-L1 CPS testing'],
    'Early (stage I-II): surgery or definitive radiation. Locally advanced: concurrent cisplatin + radiation, or surgery + adjuvant chemoradiation. Recurrent/metastatic: pembrolizumab ± chemotherapy first-line (KEYNOTE-048). Cetuximab-based regimens for cisplatin-ineligible.',
    'HPV+ oropharynx: 5-year survival ~80-90%. HPV- locally advanced: ~40-50%. Recurrent/metastatic with pembrolizumab + chemo: median survival ~13 months. HPV vaccination can prevent many oropharyngeal cancers.',
  ),

  'soft-tissue-sarcoma': onc(
    'soft-tissue-sarcoma', 'Soft Tissue Sarcoma',
    'solid-tumor', 'C49.9',
    'Heterogeneous group of >50 histologic subtypes arising from mesenchymal tissue. Most common: undifferentiated pleomorphic sarcoma, liposarcoma, leiomyosarcoma. Molecular characterization increasingly important for subtype-specific therapy.',
    'AJCC TNM staging. FNCLCC grading (differentiation, mitotic count, necrosis) is critical. Size (>5cm), depth (deep to fascia), and grade determine stage and prognosis.',
    ['Painless enlarging soft tissue mass', 'Pain if compressing nerves', 'Functional impairment based on location', 'Retroperitoneal: abdominal fullness, early satiety', 'Often large at presentation'],
    ['MRI of primary site (preferred)', 'CT for retroperitoneal sarcomas', 'Core needle biopsy (image-guided, along planned surgical axis)', 'CT chest (lung metastases)', 'Histologic subtyping with immunohistochemistry', 'Molecular testing (MDM2, CDK4, SS18, ETV6-NTRK3)'],
    'Localized: wide surgical resection with negative margins ± neoadjuvant/adjuvant radiation. Chemosensitive subtypes (synovial, myxoid/round cell liposarcoma): consider perioperative chemo. Metastatic: doxorubicin ± ifosfamide, gemcitabine/docetaxel, trabectedin, pazopanib, eribulin (liposarcoma). NTRK-fusion: larotrectinib/entrectinib.',
    'Localized with complete resection: 5-year survival ~65-75%. High-grade, deep, >5cm: higher recurrence risk. Metastatic median survival ~12-18 months. Outcomes highly subtype-dependent. Retroperitoneal sarcomas have higher local recurrence.',
  ),

  'osteosarcoma': onc(
    'osteosarcoma', 'Osteosarcoma',
    'solid-tumor', 'C40.9',
    'Most common primary malignant bone tumor. Peak incidence in adolescents (second peak >60). Most common in distal femur, proximal tibia, proximal humerus. Histologic response to neoadjuvant chemo (>90% necrosis) is key prognostic factor.',
    'Localized vs. metastatic. No standard TNM staging widely used. Most metastases to lung. Skip lesions (same bone) confer worse prognosis.',
    ['Bone pain (often at night, not relieved by rest)', 'Swelling', 'Pathologic fracture', 'Decreased range of motion', 'Limp', 'Systemic symptoms rare'],
    ['Plain radiographs (sunburst pattern, Codman triangle, periosteal reaction)', 'MRI of entire involved bone', 'CT chest', 'Bone scan or PET-CT', 'Core or open biopsy (by the definitive surgeon)', 'Alkaline phosphatase, LDH'],
    'Neoadjuvant MAP chemotherapy (methotrexate, doxorubicin, cisplatin) → surgical resection (limb-salvage preferred over amputation when feasible) → adjuvant chemo. Histologic necrosis assessment guides adjuvant. Metastatic: same backbone + ifosfamide, metastasectomy for resectable lung disease. Mifamurtide in some countries. Relapsed: ifosfamide/etoposide, regorafenib, clinical trials.',
    'Localized with good histologic response (>90% necrosis): ~70% 5-year survival. Poor response: ~50%. Metastatic at presentation: ~20-30%. Pulmonary metastasectomy can be curative in select patients. Prognosis has plateaued with standard chemotherapy.',
  ),

  'cholangiocarcinoma': onc(
    'cholangiocarcinoma', 'Cholangiocarcinoma (Bile Duct Cancer)',
    'solid-tumor', 'C22.1',
    'Cancer of the bile ducts, classified as intrahepatic, perihilar (Klatskin tumor), or distal. Associated with PSC, liver fluke infection, biliary cysts, and hepatolithiasis. Molecular profiling reveals actionable targets in ~40% (IDH1, FGFR2 fusions).',
    'TNM staging varies by anatomic location. Bismuth-Corlette classification for perihilar tumors. Resectability determined by vascular involvement and liver remnant adequacy.',
    ['Painless jaundice (extrahepatic)', 'Pruritus', 'Weight loss', 'Abdominal pain', 'Hepatomegaly (intrahepatic)', 'Cholangitis', 'New-onset diabetes'],
    ['CT/MRI with MRCP', 'CA 19-9', 'ERCP with brushings/biopsy', 'EUS-FNA for distal tumors', 'PET-CT', 'Molecular profiling (IDH1, FGFR2, BRAF, MSI, HER2, NTRK)', 'Liver volumetry if surgery planned'],
    'Resectable: surgery (hepatic resection, Whipple, or bile duct excision by location) + adjuvant capecitabine. Unresectable/metastatic: gemcitabine/cisplatin + durvalumab first-line. Second-line FOLFOX. Targeted: ivosidenib (IDH1), pemigatinib/futibatinib (FGFR2 fusions), pembrolizumab (MSI-H). Biliary drainage for obstruction.',
    'Resected 5-year survival ~25-35% for intrahepatic, ~30-40% for distal. Unresectable median survival ~12-15 months with modern chemotherapy + immunotherapy. Actionable mutations provide additional treatment options. Overall poor prognosis with late diagnosis.',
  ),

  'small-bowel-adenocarcinoma': onc(
    'small-bowel-adenocarcinoma', 'Small Bowel Adenocarcinoma',
    'solid-tumor', 'C17.9',
    'Rare malignancy of the small intestine (duodenum most common site). Associated with Crohn disease, celiac disease, familial polyposis syndromes, and Lynch syndrome. Often diagnosed at advanced stage due to non-specific symptoms.',
    'TNM staging I-IV. Duodenal cancers staged separately. MSI/MMR testing important given Lynch syndrome association.',
    ['Abdominal pain', 'Nausea/vomiting', 'GI bleeding', 'Bowel obstruction', 'Weight loss', 'Iron deficiency anemia', 'Jaundice (periampullary)'],
    ['CT abdomen/pelvis', 'CT or MR enterography', 'Upper endoscopy (duodenal)', 'Capsule endoscopy or balloon enteroscopy', 'Biopsy with MMR/MSI testing', 'CEA'],
    'Localized: surgical resection (segmental resection or pancreaticoduodenectomy for duodenal). Adjuvant chemotherapy extrapolated from CRC protocols (FOLFOX or capecitabine). Metastatic: FOLFOX or FOLFIRI ± bevacizumab. MSI-H: pembrolizumab. HER2+: trastuzumab-based therapy.',
    'Localized 5-year survival ~65%. Advanced median survival ~15-20 months. MSI-H tumors (~15%) benefit from immunotherapy. Overall rare, evidence largely extrapolated from colorectal cancer trials.',
  ),

  'adrenocortical-carcinoma': onc(
    'adrenocortical-carcinoma', 'Adrenocortical Carcinoma',
    'endocrine-tumor', 'C74.0',
    'Rare aggressive malignancy of the adrenal cortex. ~60% are functional (hormone-producing: cortisol, androgens, aldosterone). Bimodal incidence in children and adults 40-50. Associated with Li-Fraumeni syndrome (TP53) and Beckwith-Wiedemann.',
    'ENSAT staging I-IV. Size >5cm, local invasion, and distant metastases are key factors. Ki-67 >10% indicates worse prognosis.',
    ['Cushing syndrome (cortisol excess)', 'Virilization (androgen excess in women)', 'Hypertension/hypokalemia (aldosterone)', 'Abdominal/flank mass or pain', 'Incidental adrenal mass (adrenal incidentaloma)', 'Weight gain'],
    ['CT adrenal (>4cm, irregular, >10 HU unenhanced suggests malignancy)', 'MRI', 'Hormonal workup (cortisol, DHEA-S, androgens, aldosterone, catecholamines to exclude pheo)', 'PET-CT', 'Biopsy rarely needed (risk of seeding); imaging-based diagnosis', 'Weiss score on pathology'],
    'Localized: surgical resection (open adrenalectomy preferred, avoid laparoscopic for large tumors). Adjuvant mitotane for high-risk (Ki-67 >10%, R1 resection). Metastatic: mitotane + EDP (etoposide, doxorubicin, cisplatin). Second-line: gemcitabine/capecitabine or pembrolizumab (MSI-H). Clinical trials encouraged.',
    'Localized complete resection: 5-year survival ~50-60%. Stage IV median survival ~12-15 months. Mitotane improves recurrence-free survival but has significant toxicity. High-risk pathology (Ki-67 >10%) has >50% recurrence despite resection.',
  ),

};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get a single condition by ID. */
export function getOncologyConditionById(id: string): OncologyConditionEntry | undefined {
  return ONCOLOGY_CONDITION_ENTRIES[id];
}

/** Search conditions by name, category, or any text field (case-insensitive). */
export function searchOncologyConditions(query: string): OncologyConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(ONCOLOGY_CONDITION_ENTRIES).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.staging.toLowerCase().includes(q) ||
    c.treatmentApproach.toLowerCase().includes(q) ||
    c.prognosis.toLowerCase().includes(q) ||
    c.keySymptoms.some(s => s.toLowerCase().includes(q)) ||
    c.diagnosticWorkup.some(d => d.toLowerCase().includes(q)),
  );
}

/** Filter conditions by category. */
export function filterOncologyByCategory(category: OncologyConditionCategory): OncologyConditionEntry[] {
  return Object.values(ONCOLOGY_CONDITION_ENTRIES).filter(c => c.category === category);
}

/** Return the total number of oncology conditions in the database. */
export function getOncologyConditionCount(): number {
  return Object.keys(ONCOLOGY_CONDITION_ENTRIES).length;
}

/** Get all conditions matching a keyword in key symptoms (case-insensitive). */
export function filterOncologyBySymptom(symptom: string): OncologyConditionEntry[] {
  const s = symptom.toLowerCase();
  return Object.values(ONCOLOGY_CONDITION_ENTRIES).filter(c =>
    c.keySymptoms.some(ks => ks.toLowerCase().includes(s)),
  );
}
