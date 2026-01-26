/**
 * GI Neoplasia - Colon Cancer, Polyps, Screening
 *
 * Covers colorectal cancer, adenomatous and serrated polyps,
 * hereditary syndromes, and screening guidelines.
 */

import { EducationalContent } from '../types';

export const giNeoplasiaContent: EducationalContent = {
  id: 'gi-neoplasia',
  type: 'condition',
  name: 'GI Neoplasia',
  alternateNames: [
    'Colorectal Cancer',
    'Colon Cancer',
    'Rectal Cancer',
    'CRC',
    'Adenoma',
    'Polyps',
    'Lynch Syndrome',
    'FAP',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Colon cancer is one of the most common cancers. It usually starts as small growths called polyps that can be found and removed before they become cancer.',
      explanation: `**What is Colon Cancer?**

Colon cancer (also called colorectal cancer) starts in the large intestine (colon) or rectum. It usually begins as small growths called polyps on the inner lining of the colon. Over time, some polyps can turn into cancer.

**Why Screening Matters:**
- Colon cancer is the second leading cause of cancer death
- It usually grows slowly over many years
- Screening can find and remove polyps before they become cancer
- Screening finds cancer early when it is most treatable

**Polyps: The Precursors:**
- **Adenomatous polyps:** Can become cancer if not removed
- **Serrated polyps:** Also can become cancer
- Removing polyps prevents cancer

**Who Should Be Screened:**
- Most people start at age 45
- Earlier if family history of colon cancer
- Earlier if certain hereditary conditions
- Your doctor can tell you when to start

**Screening Tests:**
- **Colonoscopy:** Camera exam of the entire colon
- **Stool tests:** Check for hidden blood
- **Flexible sigmoidoscopy:** Exam of lower colon
- **CT colonography:** Special CT scan of colon
- **Colonoscopy is preferred** - allows both finding and removing polyps

**Warning Signs:**
- Change in bowel habits (new constipation or diarrhea)
- Blood in stool or rectal bleeding
- Abdominal pain or cramping
- Weakness and fatigue
- Unintended weight loss
- Anemia (low blood count)

**Risk Factors:**
- Age (risk increases after age 45)
- Family history of colon cancer or polyps
- Personal history of polyps
- Inflammatory bowel disease (ulcerative colitis, Crohn disease)
- Certain hereditary syndromes (Lynch, FAP)
- Lifestyle factors: obesity, diet low in fiber/high in red meat
- Smoking, heavy alcohol use

**Prevention:**
- Get screened starting at age 45 (or earlier if high risk)
- Eat a diet rich in fruits, vegetables, and whole grains
- Limit red and processed meats
- Exercise regularly
- Maintain healthy weight
- Limit alcohol and don't smoke
- Know your family history

**Treatment:**
- Surgery to remove cancer (main treatment)
- Chemotherapy for advanced cases
- Radiation for rectal cancer
- Targeted therapies based on tumor genetics
- Immunotherapy for some advanced cancers`,
      keyTerms: [
        { term: 'colon cancer', definition: 'Cancer that starts in the colon or rectum' },
        { term: 'polyp', definition: 'Small growth in the colon that can become cancer' },
        { term: 'adenoma', definition: 'Type of polyp that can turn into cancer' },
        { term: 'colonoscopy', definition: 'Exam of colon with a camera on a flexible tube' },
        { term: 'screening', definition: 'Testing for cancer when no symptoms are present' },
        { term: 'Lynch syndrome', definition: 'Hereditary condition that increases colon cancer risk' },
      ],
      analogies: [
        'Polyps are like weeds in a garden - if you remove them early, they do not cause problems.',
        'The colon is like a tube with a camera running through it during colonoscopy.',
        'Colon cancer usually develops slowly, like a slow-growing plant.',
      ],
      examples: [
        'A 50-year-old with no family history should start colon cancer screening.',
        'Someone whose parent had colon cancer at age 45 should start screening at 35.',
        'A person with blood in their stool needs colonoscopy to find the cause.',
      ],
      patientCounselingPoints: [
        'Start colon cancer screening at age 45, or earlier if family history',
        'Report any blood in stool or change in bowel habits to your doctor',
        'Eat a diet high in fiber from fruits, vegetables, and whole grains',
        'Exercise regularly and maintain a healthy weight',
        'Know your family history of cancer and share it with your doctor',
      ],
    },

    2: {
      level: 2,
      summary: 'Colorectal cancer arises from adenomatous or serrated polyps through the adenoma-carcinoma sequence. Screening with colonoscopy prevents cancer through polyp removal and detects cancer at an early stage.',
      explanation: `## Colorectal Cancer Epidemiology

**Statistics:**
- Third most common cancer worldwide
- Second leading cause of cancer death
- Lifetime risk: ~4-5%
- Median age at diagnosis: ~68 years
- Increasing in younger adults (<50 years)

**Anatomic Distribution:**
- Right colon (cecum to transverse): ~40%
- Left colon (splenic flexure to sigmoid): ~30%
- Rectum: ~30%

## Pathogenesis: Adenoma-Carcinoma Sequence

**Vogelgram (Key Genetic Changes):**
1. **APC loss:** Initiation (adenoma formation)
2. **KRAS activation:** Intermediate adenoma
3. **SMAD4/DCC loss:** Late adenoma
4. **p53 loss:** Carcinoma
5. **Additional changes:** Metastasis

**Time Course:**
- Small adenoma to large adenoma: 5-10 years
- Large adenoma to cancer: 5-10 years
- Total: 10-15 years (window for screening)

## Polyps

**Adenomatous Polyps:**
- Tubular adenoma
- Tubulovillous adenoma
- Villous adenoma (highest cancer risk)
- Risk of cancer related to size and histology

**Serrated Polyps:**
- Hyperplastic polyp (usually benign, distal)
- Sessile serrated lesion (SSL) - precursor
- Traditional serrated adenoma (TSA) - precursor
- Serrated pathway accounts for 20-30% of CRC

**Polyp Size and Cancer Risk:**
- <5 mm: <1% cancer risk
- 5-9 mm: ~2-5% cancer risk
- 10-19 mm: ~10% cancer risk
- ≥20 mm: >30% cancer risk

## Screening Guidelines (USPSTF 2021, ACS 2018)

**Average Risk:**
- **USPSTF:** Start at age 45-75, individualize 76-85
- **ACS:** Start at age 45, then every 10 years if normal
- Stop at age 85 (if life expectancy <10 years)

**Screening Options:**

*High-Sensitivity Tests (Annual):*
- Fecal immunochemical test (FIT)
- Guaiac-based fecal occult blood test (gFOBT)
- FIT-DNA (Cologuard) every 3 years

*Visual Exams:*
- Colonoscopy every 10 years (preferred)
- CT colonography every 5 years
- Flexible sigmoidoscopy every 5 years
- Flexible sigmoidoscopy every 5 years + FIT yearly

**Diagnostic Colonoscopy Indications:**
- Positive FIT/FOBT
- Change in bowel habits
- Iron deficiency anemia
- Rectal bleeding
- Unexplained abdominal pain
- Weight loss

## Hereditary Syndromes

**Lynch Syndrome (HNPCC):**
- Autosomal dominant
- Mismatch repair gene mutation (MLH1, MSH2, MSH6, PMS2, EPCAM)
- 70% lifetime CRC risk
- Also endometrial, ovarian, other cancers
- Screen with colonoscopy every 1-2 years starting age 20-25

**Familial Adenomatous Polyposis (FAP):**
- Autosomal dominant
- APC gene mutation
- Hundreds to thousands of adenomas
- Near 100% CRC risk without treatment
- Colectomy recommended by age 20-25

**MUTYH-Associated Polyposis (MAP):**
- Autosomal recessive
- 10-100 adenomas
- Increased CRC risk

**Serrated Polyposis Syndrome:**
- Multiple serrated polyps
- Increased CRC risk
- Colonoscopy every 1-2 years

## Cancer Staging (TNM)

**T (Primary Tumor):**
- Tis: Carcinoma in situ
- T1: Submucosa
- T2: Muscularis propria
- T3: Through muscularis propria into subserosa
- T4: Perforates visceral peritoneum or invades other organs

**N (Regional Lymph Nodes):**
- N0: No nodes
- N1: 1-3 nodes
- N2: ≥4 nodes

**M (Distant Metastasis):**
- M0: No distant metastasis
- M1: Distant metastasis present

**Stage Groupings:**
- Stage I: T1-2, N0, M0
- Stage II: T3-4, N0, M0
- Stage III: Any T, N1-2, M0
- Stage IV: Any T, any N, M1`,
      keyTerms: [
        { term: 'adenoma-carcinoma sequence', definition: 'Stepwise progression from adenoma to cancer over 10-15 years' },
        { term: 'Vogelgram', definition: 'Sequential genetic changes in colorectal cancer development' },
        { term: 'sessile serrated lesion', definition: 'Serrated polyp with cancer potential, typically proximal' },
        { term: 'FIT', definition: 'Fecal immunochemical test - screening test for occult blood' },
        { term: 'Lynch syndrome', definition: 'Hereditary nonpolyposis colorectal cancer (HNPCC)' },
        { term: 'FAP', definition: 'Familial adenomatous polyposis - hundreds of adenomas' },
        { term: 'APC', definition: 'Adenomatous polyposis coli gene; first mutation in CRC development' },
        { term: 'TNM', definition: 'Tumor, Nodes, Metastasis staging system' },
      ],
      analogies: [
        'The adenoma-carcinoma sequence is like a staircase - each step is a genetic change leading to cancer.',
        'Colonoscopy is like a security camera checking for problems before they become dangerous.',
      ],
      examples: [
        'A 50-year-old with no family history should start colon cancer screening at age 45.',
        'A person with Lynch syndrome should have colonoscopy every 1-2 years starting in their 20s.',
        'A 3 cm villous adenoma has significant cancer risk and needs complete removal.',
      ],
    },

    3: {
      level: 3,
      summary: 'Colorectal carcinogenesis involves genetic and epigenetic alterations through the adenoma-carcinoma sequence or serrated pathway. Screening modalities differ in sensitivity, specificity, and interval recommendations. Hereditary syndromes require specialized management.',
      explanation: `## Molecular Pathogenesis

**Chromosomal Instability (CIN) Pathway:**
- Accounts for ~65-70% of CRC
- APC inactivation (initiating event)
- KRAS activation (early progression)
- p53 loss (late event)
- Chromosomal losses and gains
- Aneuploidy

**Microsatellite Instability (MSI) Pathway:**
- Accounts for ~15% of CRC
- Mismatch repair (MMR) deficiency
- MMR genes: MLH1, MSH2, MSH6, PMS2
- MLH1 hypermethylation (sporadic)
- Lynch syndrome (germline mutation)
- Better prognosis, different treatment response

**Serrated Pathway:**
- Accounts for ~20-30% of CRC
- BRAF V600E mutation (key driver)
- CpG island methylator phenotype (CIMP)
- Sessile serrated lesions as precursors
- MSI common (sporadic MSI-H)
- Often right-sided, poor differentiation

**Key Molecular Markers:**
- **BRAF V600E:** Poor prognosis in wild-type MSI; opposite in MSI
- **KRAS/NRAS:** Predict anti-EGFR resistance
- **MSI-H/dMMR:** Predicts immunotherapy response
- **HER2 amplification:** Targetable in metastatic disease
- **NTRK fusions:** Rare, targetable

## Polyp Management Guidelines

**Surveillance Intervals (USMSTF 2020):**

*After Polypectomy:*
- **1-2 tubular adenomas <10 mm:** 7-10 years
- **3-4 tubular adenomas <10 mm OR 1 adenoma ≥10 mm:** 3-5 years
- **≥5 adenomas OR 1 with villous features OR 1 with high-grade dysplasia:** 1-3 years
- **Sessile serrated lesion <10 mm:** 5 years
- **Sessile serrated lesion ≥10 mm OR dysplasia:** 1-3 years
- **Traditional serrated adenoma:** 1-3 years

**Endoscopic Removal Techniques:**
- **Cold snare polypectomy:** Small polyps (<10 mm)
- **Hot snare polypectomy:** Larger polyps
- **EMR (endoscopic mucosal resection):** Large sessile polyps
- **ESD (endoscopic submucosal dissection):** En bloc resection for large lesions

## Hereditary Syndromes - Detailed

**Lynch Syndrome:**
- **Genes:** MLH1, MSH2 (most common), MSH6, PMS2, EPCAM
- **Amsterdam Criteria II (clinical):**
  - ≥3 relatives with Lynch-associated cancers
  - One affected relative is first-degree relative of other two
  - ≥2 generations affected
  - One cancer before age 50
  - FAP excluded
- **Revised Bethesda Guidelines:** Indications for MSI testing
- **Management:**
  - Colonoscopy every 1-2 years starting age 20-25 (or 2-5 years before earliest case)
  - Consider aspirin chemoprevention (600 mg daily reduces CRC)
  - Endometrial cancer screening (ultrasound, biopsy)
  - Urinary tract cytology annually (MSH2)

**FAP:**
- **Genetics:** APC mutation (chromosome 5q21)
- **Attenuated FAP:** Fewer polyps, later onset
- **Management:**
  - Colonoscopy annually starting puberty
  - Colectomy when polyps too numerous
  - Duodenal polyps surveillance (EGD)
  - Thyroid ultrasound (nodules)
  - Desmoid tumor monitoring

**MUTYH-Associated Polyposis:**
- Autosomal recessive
- Biallelic MUTYH mutations
- 10-100+ adenomas
- Colonoscopy every 1-2 years

**Serrated Polyposis Syndrome (WHO Criteria):**
- ≥5 serrated polyps proximal to sigmoid with 2 ≥10 mm
  - OR
- Any serrated polyps proximal to sigmoid with one ≥20 mm
  - OR
- >20 serrated polyps of any size

## Colonoscopy Quality Metrics

**Key Indicators:**
- **Cecal intubation rate:** >95%
- **Adenoma detection rate (ADR):** >25% (average risk), >30% (male), >20% (female)
- **Withdrawal time:** ≥6 minutes (average)
- **Adequate bowel preparation:** >85%
- **Surveillance interval adherence**

**Adenoma Detection Rate (ADR):**
- Strongly inversely associated with interval cancer
- Higher ADR = lower cancer risk between colonoscopies
- Benchmark for endoscopist quality

**Interval Colorectal Cancer:**
- Cancer diagnosed between screening exams
- Associated with:
  - Missed lesions (inadequate prep, fast withdrawal)
  - Incomplete polypectomy
  - Rapid progression (rare, serrated lesions)
  - New lesions

## Staging and Prognosis

**Stage-Specific 5-Year Survival:**
- Localized (Stage I/II): ~90%
- Regional (Stage III): ~70%
- Distant (Stage IV): ~15%

**Prognostic Factors:**
- T stage (depth of invasion)
- Number of positive lymph nodes
- Lymphovascular invasion
- Perineural invasion
- Tumor grade
- MSI status (favorable)
- RAS status (therapeutic predictive)`,
      keyTerms: [
        { term: 'CIN pathway', definition: 'Chromosomal instability pathway of colorectal carcinogenesis' },
        { term: 'MSI pathway', definition: 'Microsatellite instability pathway via MMR deficiency' },
        { term: 'CIMP', definition: 'CpG island methylator phenotype; epigenetic instability' },
        { term: 'EMR', definition: 'Endoscopic mucosal resection - removal of large polyps' },
        { term: 'ESD', definition: 'Endoscopic submucosal dissection - en bloc removal of large lesions' },
        { term: 'ADR', definition: 'Adenoma detection rate; quality metric for colonoscopy' },
        { term: 'interval cancer', definition: 'Cancer diagnosed between screening exams' },
        { term: 'withdrawal time', definition: 'Time spent withdrawing colonoscope; should be ≥6 minutes' },
      ],
      clinicalNotes: 'MSI-H/dMMR tumors respond to immune checkpoint inhibitors. KRAS mutant tumors do not respond to anti-EGFR therapy. Aspirin 600 mg daily reduces Lynch syndrome CRC risk.',
    },

    4: {
      level: 4,
      summary: 'Colorectal cancer encompasses distinct molecular subtypes with different prognoses and treatment responses. Advanced understanding of tumor biology guides personalized therapy and surveillance strategies.',
      explanation: `## Molecular Classification Systems

**CMS (Consensus Molecular Subtypes):**

*CMS1 (MSI Immune, 14%):*
- MSI-H, hypermutated
- Strong immune infiltration
- CIMP-high, BRAF mutation
- Better prognosis initially, worse if metastatic
- Poor response to 5-FU adjuvant

*CMS2 (Canonical, 37%):*
- Chromosomal instability
- WNT/MYC activation
- Epithelial differentiation
- Better survival
- Responsive to standard therapy

*CMS3 (Metabolic, 13%):*
- Metabolic dysregulation
- KRAS mutations
- Mixed features

*CMS4 (Mesenchymal, 34%):*
- TGF-β activation
- Stromal invasion
- Angiogenesis
- Worse prognosis
- Higher recurrence

**Molecular Testing in Metastatic CRC:**
- **RAS (KRAS, NRAS):** Predict anti-EGFR resistance
- **BRAF V600E:** Poor prognosis, consider targeted therapy
- **MSI/dMMR:** Immunotherapy eligibility
- **HER2 amplification:** Anti-HER2 therapy
- **NTRK fusions:** Larotrectinib/entrectinib
- **RET fusions:** Selpercatinib (emerging)

## Advanced Polyp Management

**Difficult Polyps:**
- Large (>20 mm), sessile, flat lesions
- Location: Ileocecal valve, appendix, flexures
- Previous incomplete resection

**Management Options:**
- **EMR:** Standard for large sessile lesions
- **ESD:** En bloc for suspected superficial submucosal invasion
- **Surgical resection:** Deep submucosal invasion, incomplete resection, or high-risk features

**High-Risk Features for Resection:**
- Submucosal invasion depth >1000 μm
- Poor differentiation
- Lymphovascular invasion
- Tumor budding
- Positive deep margin

**Serrated Pathway Challenges:**
- Sessile serrated lesions often subtle, mucus cap
- Hard to detect, higher miss rate
- Proximal location, behind folds
- Need careful inspection, chromoendoscopy

## Hereditary Syndromes - Advanced

**Lynch Syndrome Mosaicism:**
- Somatic MMR mutations + second hit
- Phenocopies Lynch syndrome
- MSI-H, IHC loss
- Not inherited, no family history
- Management similar but no genetic testing for relatives

**Constitutional MMR Deficiency (CMMRD):**
- Biallelic germline MMR mutations
- Café-au-lait spots, NF-like features
- Early-onset cancers (childhood)
- Brain tumors, hematologic malignancies
- Surveillance from early childhood

**Polymerase Proofreading-Associated Polyposis (PPAP):**
- POLE or POLD1 mutations
- Ultra-hypermutated tumors
- Few polyps but early-onset cancer
- Good prognosis despite high mutation burden

**NTHL1-Associated Polyposis:**
- Biallelic NTHL1 mutations
- Adenomatous and serrated polyps
- Multiple cancer types

## Chemoprevention

**Aspirin:**
- **General population:** 20-30% reduction in CRC with 10+ years use
- **Lynch syndrome:** 50-60% reduction with 600 mg daily
- **FAP:** Limited benefit, celecoxib more effective
- **Risks:** GI bleeding (age-dependent), hemorrhagic stroke

**NSAIDs:**
- **Celecoxib:** Reduces polyp burden in FAP
- **Sulindac:** Reduces polyp size and number in FAP
- **Cardiovascular risk:** Limits widespread use

**Other Agents:**
- Calcium: Modest benefit in adenoma prevention
- Vitamin D: Data mixed
- Fiber: Inconsistent evidence
- Statins: Possible benefit, not proven

## Rectal Cancer Specifics

**Location Matters:**
- Rectal cancers have different treatment due to confined anatomy
- Sphincter preservation considerations
- Higher local recurrence risk

**Neoadjuvant Therapy:**
- Clinical stage II/III
- Options:
  - Short-course radiation (5 × 5 Gy)
  - Long-course chemoradiation (50.4 Gy + 5-FU/capecitabine)
  - Total neoadjuvant therapy (TNT): Chemo → chemoradiation → chemo
- Watch and wait for complete responders

**Surgical Approaches:**
- **Low anterior resection (LAR):** Upper/mid rectum
- **Abdominoperineal resection (APR):** Low rectum, requires permanent colostomy
- **Transanal endoscopic microsurgery (TEM):** Early T1 tumors
- **Transanal minimally invasive surgery (TAMIS):** Similar to TEM

**Sphincter Preservation:**
- Distance from anal verge critical
- <1 cm: APR usually required
- >2 cm: LAR often possible
- Neoadjuvant therapy may downstage to allow LAR

## Local Recurrence

**Risk Factors:**
- Positive margins (R1 resection)
- T4 tumors
- Lymphovascular invasion
- Inadequate lymph nodes (<12)
- Emergency presentation
- Obstruction/perforation

**Management:**
- Multimodal therapy
- Surgical resection if possible
- Systemic therapy
- Palliative radiation for pain control`,
      keyTerms: [
        { term: 'CMS', definition: 'Consensus molecular subtypes of colorectal cancer' },
        { term: 'sporadic MSI', definition: 'MSI from MLH1 methylation, not germline mutation' },
        { term: 'phenocopy', definition: 'Condition mimicking genetic syndrome without germline mutation' },
        { term: 'CMMRD', definition: 'Constitutional mismatch repair deficiency; biallelic MMR mutations' },
        { term: 'LAR', definition: 'Low anterior resection for rectal cancer' },
        { term: 'APR', definition: 'Abdominoperineal resection with permanent colostomy' },
        { term: 'TEM', definition: 'Transanal endoscopic microsurgery for early rectal cancer' },
        { term: 'TNT', definition: 'Total neoadjuvant therapy for rectal cancer' },
      ],
      clinicalNotes: 'Molecular testing mandatory for metastatic CRC. RAS, BRAF, MSI required. MSI-H/dMMR: Consider pembrolizumab regardless of stage. BRAF V600E: Consider encorafenib + cetuximab.',
    },

    5: {
      level: 5,
      summary: 'Colorectal cancer management integrates screening, endoscopic treatment, surgery, and systemic therapy guided by molecular profiling. Multidisciplinary care optimizes outcomes.',
      explanation: `## Screening Recommendations (USPSTF 2021, NCCN 2024)

**Average Risk Screening:**
- **Age 45-75:** Strong recommendation, multiple options
- **Age 76-85:** Individualize based on health and prior screening
- **Age >85:** Do not screen

**Screening Modality Selection:**

*Colonoscopy (Preferred):*
- Every 10 years if normal
- Therapeutic (remove polyps)
- Requires bowel prep, sedation
- Perforation risk: ~1/1000-2000
- Detection rate: High for polyps and cancer

*FIT (Annual):*
- Detects human hemoglobin
- More specific than gFOBT
- Sensitivity: ~80% for cancer, ~25% for advanced adenomas
- Requires annual testing for effectiveness
- Positive result requires colonoscopy

*FIT-DNA (Cologuard, every 3 years):*
- FIT + mutant DNA markers
- Sensitivity: ~92% for cancer, ~42% for advanced adenomas
- False positives common (>10%)
- Positive result requires colonoscopy
- Cost higher than FIT

*CT Colonography (every 5 years):*
- Radiologic alternative
- Sensitivity similar to colonoscopy for polyps >10 mm
- Cannot remove polyps; positive findings need colonoscopy
- Radiation exposure
- Extracolonic findings (30-50%) - can be benefit or burden

**Screening for High-Risk Groups:**

*Lynch Syndrome:*
- Colonoscopy every 1-2 years starting age 20-25
- Consider annual after age 40
- Continue indefinitely

*FAP:*
- Flexible sigmoidoscopy annually starting age 10-12
- Colonoscopy annually once polyps present
- Colectomy typically by age 20-25

*Attenuated FAP:*
- Colonoscopy every 1-2 years starting age 20-25

*MUTYH:*
- Colonoscopy every 1-2 years starting age 20-25

*IBD (UC, Crohn colitis):*
- Colonoscopy with surveillance biopsies every 1-3 years
- Starting 8-10 years after onset (or age 15 for pancolitis)

*Family History (one first-degree relative):*
- If <60 years at diagnosis: Start at 40 or 10 years before earliest case
- If ≥60 years at diagnosis: Start at 40 (average risk)

## Treatment of Localized CRC

**Colon Cancer:**
- **Stage I:** Colectomy with lymphadenectomy (no adjuvant therapy)
- **Stage II:**
  - Surgery is primary treatment
  - Consider adjuvant chemotherapy for high-risk features:
    - T4, poorly differentiated, <12 lymph nodes
    - Lymphovascular/perineural invasion
    - Obstruction/perforation
    - MSI-H (no benefit from 5-FU)
- **Stage III:**
  - Adjuvant chemotherapy for all
  - FOLFOX or CAPOX (3-6 months based on risk)
  - Duration: 3 months for low-risk (T1-3, N1)
  - Duration: 6 months for high-risk (T4, N2)

**Rectal Cancer:**
- **Clinical Stage II/III:** Neoadjuvant chemoradiation
- **Total Neoadjuvant Therapy (TNT):**
  - Induction chemo → chemoradiation → surgery
  - Or chemoradiation → consolidation chemo → surgery
  - Improved pathologic complete response (pCR)
- **Watch and Wait:** If complete clinical response after chemoradiation
  - Close surveillance required
  - Surgery for regrowth
  - Similar outcomes to surgery in selected patients

## Treatment of Metastatic CRC

**First-Line Therapy (Based on Molecular Profile):**

*RAS wild-type, left-sided:*
- Doublet chemo + anti-EGFR (cetuximab or panitumumab) + bevacizumab
- Superior outcomes with anti-EGFR vs. anti-VEGF

*RAS wild-type, right-sided:*
- Doublet chemo + bevacizumab
- Anti-EGFR less effective

*RAS mutant:*
- Doublet chemo + bevacizumab
- No anti-EGFR therapy

*BRAF V600E mutant:*
- Encorafenib + cetuximab ± binimetinib
- Consider bevacizumab + chemotherapy

*MSI-H/dMMR:*
- Immune checkpoint inhibitor (pembrolizumab, nivolumab ± ipilimumab)
- First-line regardless of side

*HER2 amplified:*
- Trastuzumab + pertuzumab
- Trastuzumab deruxtecan (after progression)

*NTRK fusion:*
- Larotrectinib or entrectinib

**Maintenance Therapy:**
- After 4-6 months induction, consider de-escalation
- Fluoropyrimidine + bevacizumab maintenance
- Chemotherapy holiday possible for some

## Surveillance

**Stage I/II (Curative Resection):**
- History and physical every 3-6 months × 2 years, then every 6 months
- CEA every 3-6 months × 2 years, then every 6 months × 3 years
- CT chest/abdomen/pelvis every 6-12 months × 5 years
- Colonoscopy at 1 year, then 1-3 years depending on findings

**Stage III (Curative Resection):**
- History and physical every 3-6 months × 2 years, then every 6 months
- CEA every 3-6 months × 2 years, then every 6 months × 3 years
- CT chest/abdomen/pelvis every 6-12 months × 5 years
- Colonoscopy at 1 year, then 1-3 years depending on findings

**Metastatic Disease:**
- Restaging CT every 2-3 months on active therapy
- CEA with each cycle
- Re-biopsy at progression for molecular profiling`,
      keyTerms: [
        { term: 'FOLFOX', definition: '5-FU + leucovorin + oxaliplatin chemotherapy regimen' },
        { term: 'CAPOX', definition: 'Capecitabine + oxaliplatin chemotherapy regimen' },
        { term: 'TNT', definition: 'Total neoadjuvant therapy for rectal cancer' },
        { term: 'pCR', definition: 'Pathologic complete response - no viable tumor after treatment' },
        { term: 'watch and wait', definition: 'Non-surgical management after complete response to chemoradiation' },
        { term: 'de-escalation', definition: 'Reducing treatment intensity while maintaining efficacy' },
      ],
      clinicalNotes: `Clinical Pearls:
1. Screening: Start at 45 for average risk (not 50 anymore)
2. FIT positive: Colonoscopy required, never repeat FIT
3. ADR <20%: Find another endoscopist (quality metric)
4. Lynch syndrome: Screen all CRC and endometrial cancers for MMR deficiency
5. Rectal cancer: Multidisciplinary team required (surgery, medical oncology, radiation)
6. Metastatic CRC: Molecular testing mandatory before first-line therapy
7. RAS mutant: No anti-EGFR therapy ever (cetuximab, panitumumab)
8. MSI-H/dMMR: Immunotherapy first-line regardless of stage
9. Adjuvant chemo: 3 months sufficient for low-risk stage III (T1-3 N1)
10. CEA: Not a screening test (low sensitivity); use for surveillance post-resection
11. Interval colonoscopy: 1 year post-CRC resection; then 3 years if normal
12. Serrated polyposis: Colonoscopy every 1-2 years due to rapid progression`,
    },
  },

  media: [
    {
      id: 'adenoma-carcinoma-sequence',
      type: 'diagram',
      filename: 'adenoma-carcinoma-sequence.svg',
      title: 'Adenoma-Carcinoma Sequence',
      description: 'Genetic changes in colorectal cancer development',
    },
    {
      id: 'polyp-types',
      type: 'diagram',
      filename: 'colorectal-polyps.svg',
      title: 'Colorectal Polyp Types',
      description: 'Comparison of adenomatous and serrated polyps',
    },
  ],

  citations: [
    {
      id: 'uspstf-crc-2021',
      type: 'article',
      title: 'USPSTF Recommendation: Colorectal Cancer Screening',
      authors: ['US Preventive Services Task Force'],
      source: 'JAMA 2021',
    },
    {
      id: 'nccn-crc-2024',
      type: 'article',
      title: 'NCCN Guidelines: Colon Cancer',
      authors: ['National Comprehensive Cancer Network'],
      source: 'NCCN 2024',
    },
    {
      id: 'usmstf-polyps-2020',
      type: 'article',
      title: 'USMSTF Guidelines for Colonoscopy Surveillance After Polypectomy',
      authors: ['Lieberman DA', 'Rex DK', 'Winawer SJ'],
      source: 'Gastroenterology 2020',
    },
  ],

  crossReferences: [
    { targetId: 'condition-lower-gi', targetType: 'condition', relationship: 'related', label: 'IBD' },
    { targetId: 'procedure-colonoscopy', targetType: 'topic', relationship: 'see-also', label: 'Colonoscopy' },
    { targetId: 'procedure-polypectomy', targetType: 'topic', relationship: 'related', label: 'Polypectomy' },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: ['gastroenterology', 'oncology', 'preventive medicine'],
    keywords: ['CRC', 'colon cancer', 'polyps', 'adenoma', 'Lynch', 'FAP', 'screening'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'family medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};
