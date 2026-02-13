/**
 * Ovarian Cancer - Reproductive System
 *
 * Comprehensive content on ovarian cancer including types, histology,
 * staging, molecular subtypes, and clinical management approaches.
 */

import { EducationalContent } from '../../../types';

export const ovarianCancer: EducationalContent = {
  id: 'reproductive-ovarian-cancer',
  type: 'condition',
  name: 'Ovarian Cancer',
  alternateNames: ['Ovarian Carcinoma', 'Ovarian Malignancy'],

  levels: {
    1: {
      level: 1,
      summary: 'Ovarian cancer is when abnormal cells in the ovary grow out of control. It is often called the "silent killer" because early symptoms are vague. The most common type starts from cells that cover the ovary.',
      explanation: `## What Is Ovarian Cancer?

Ovarian cancer is a disease where abnormal cells in the ovary grow and divide uncontrollably, forming a tumor.

### Types of Ovarian Cancer

**1. Epithelial Ovarian Cancer (Most Common)**
- Starts from cells on the surface of the ovary
- About 90% of ovarian cancers
- Usually occurs in women over 50
- Several subtypes with different outlooks

**2. Germ Cell Tumors**
- Start from cells that make eggs
- More common in younger women
- Often curable even when advanced
- Types include teratoma, dysgerminoma

**3. Sex Cord-Stromal Tumors**
- Start from supportive tissue cells
- Can produce hormones
- Usually grow slowly
- Found in women of all ages

### Why It Is Called the "Silent Killer"

Early symptoms are often vague and mistaken for other conditions:
- Bloating
- Pelvic or abdominal pain
- Difficulty eating or feeling full quickly
- Urinary symptoms (urgency or frequency)

These symptoms are more likely to be cancer if:
- They are new
- They happen almost daily
- They last more than a few weeks

### Risk Factors

- Older age (most common after menopause)
- Family history of ovarian, breast, or colorectal cancer
- Inherited gene mutations (BRCA1, BRCA2)
- Never having been pregnant
- Endometriosis
- Obesity

### Protective Factors

- Birth control pills (reduce risk by 50% with 5+ years use)
- Pregnancy and breastfeeding
- Tubal ligation or hysterectomy
- Removal of fallopian tubes`,
      keyTerms: [
        { term: 'ovary', definition: 'The female reproductive organ that produces eggs and hormones' },
        { term: 'epithelial', definition: 'Relating to the surface layer of cells' },
        { term: 'germ cell', definition: 'Cells that develop into eggs (ova)' },
        { term: 'tumor', definition: 'An abnormal mass of tissue' },
        { term: 'menopause', definition: 'The time when menstrual periods stop permanently' },
      ],
      analogies: [
        'The ovary is like a small almond-shaped factory that produces eggs and hormones - cancer disrupts this factory.',
        'Epithelial ovarian cancer is like rust starting on the surface of metal - it begins on the outer layer and can spread deeper.',
      ],
      examples: [
        'Epithelial ovarian cancer accounts for about 90% of all ovarian cancers',
        'Women with BRCA1 mutation have a 40-60% lifetime risk of ovarian cancer',
        'Birth control pills can reduce ovarian cancer risk by up to 50%',
      ],
      patientCounselingPoints: [
        'See a doctor if you have persistent bloating, pelvic pain, or urinary changes',
        'There is no reliable screening test for ovarian cancer',
        'Family history is important - tell your doctor about any relatives with breast or ovarian cancer',
        'Removing fallopian tubes may reduce ovarian cancer risk',
      ],
    },
    2: {
      level: 2,
      summary: 'Ovarian cancer classification includes epithelial, germ cell, and sex cord-stromal types. Epithelial cancers are further divided into serous, mucinous, endometrioid, and clear cell subtypes. Hereditary factors, particularly BRCA mutations, significantly impact risk and screening strategies.',
      explanation: `## Ovarian Cancer Classification

### Major Categories

**Epithelial Ovarian Carcinoma (90%):**

Derived from surface epithelium or fallopian tube fimbria.

Subtypes:
| Subtype | Frequency | Features |
|---------|-----------|----------|
| High-grade serous | 70% | Aggressive, TP53 mutations |
| Low-grade serous | 5-10% | Less aggressive, BRAF/KRAS |
| Endometrioid | 10% | Associated with endometriosis |
| Clear cell | 10% | Hobnail cells, HNF1B mutant |
| Mucinous | 3-5% | GI or endocervical-like |

**Germ Cell Tumors (5%):**

Derived from primordial germ cells.

Types:
- Dysgerminoma (most common malignant)
- Yolk sac tumor (endodermal sinus tumor)
- Immature teratoma
- Embryonal carcinoma
- Choriocarcinoma
- Mixed germ cell tumors

**Sex Cord-Stromal Tumors (5%):**

Derived from ovarian stroma and sex cords.

Types:
- Granulosa cell tumor (most common)
- Sertoli-Leydig cell tumor
- Thecoma
- Fibroma

### Hereditary Ovarian Cancer

**BRCA1/2 Mutations:**
- Autosomal dominant inheritance
- BRCA1: 40-60% lifetime ovarian cancer risk
- BRCA2: 10-25% lifetime ovarian cancer risk
- Also increased breast cancer risk
- Ashkenazi Jewish founder mutations

**Lynch Syndrome (HNPCC):**
- Mismatch repair deficiency (MLH1, MSH2, MSH6, PMS2)
- 10-15% lifetime ovarian cancer risk
- Usually endometrioid or clear cell type
- Associated with endometrial and colorectal cancer

**Other Genetic Syndromes:**
- Li-Fraumeni (TP53)
- Peutz-Jeghers (STK11)
- ATM carriers

### Risk and Protective Factors

**Risk Factors:**
- Increasing age (median 63 years)
- Family history
- Genetic mutations
- Nulliparity
- Early menarche/late menopause
- Endometriosis (clear cell, endometrioid)
- Hormone therapy (controversial)
- Obesity

**Protective Factors:**
- Oral contraceptives (50% reduction with 5+ years)
- Multiparity
- Breastfeeding
- Tubal ligation
- Hysterectomy
- Bilateral salpingo-oophorectomy

### Screening

**Current Status:**
- No proven effective screening for average risk
- CA-125 and ultrasound studied
- No mortality benefit demonstrated
- May cause harm (false positives, surgery)

**High-Risk Screening:**
- CA-125 every 6 months
- Transvaginal ultrasound annually
- Consider risk-reducing surgery
- Start at age 30-35 or 5-10 years before earliest family case

### Clinical Presentation

**Symptoms:**
- Bloating
- Pelvic/abdominal pain
- Early satiety
- Urinary symptoms
- Constitutional symptoms (weight loss, fatigue)

**Signs:**
- Pelvic mass
- Ascites
- Pleural effusion
- Sister Mary Joseph nodule (umbilical metastasis)

**Paraneoplastic Syndromes:**
- Subacute cerebellar degeneration
- Cerebral polyneuropathy
- Syndrome of inappropriate ADH

### Diagnosis

**Workup:**
- Pelvic examination
- Transvaginal ultrasound
- CT chest/abdomen/pelvis
- CA-125 (epithelial tumors)
- LDH, AFP, hCG (germ cell tumors)
- Inhibin, CA-125 (sex cord-stromal)

**Biopsy:**
- Generally avoided if ovarian cancer likely (risk of seeding)
- Neoadjuvant chemotherapy approach
- Tissue diagnosis required before chemotherapy`,
      keyTerms: [
        { term: 'high-grade serous carcinoma', definition: 'The most common and aggressive type of ovarian cancer' },
        { term: 'dysgerminoma', definition: 'The most common malignant germ cell tumor of the ovary' },
        { term: 'granulosa cell tumor', definition: 'The most common malignant sex cord-stromal tumor' },
        { term: 'salpingo-oophorectomy', definition: 'Surgical removal of fallopian tubes and ovaries' },
        { term: 'CA-125', definition: 'A blood protein often elevated in ovarian cancer' },
      ],
      analogies: [
        'High-grade serous carcinoma is like a wildfire - it spreads quickly and aggressively. Low-grade is more like a smoldering fire that grows slowly.',
        'BRCA genes are like proofreaders for DNA - when they are broken, errors accumulate and cancer can develop.',
      ],
      examples: [
        'High-grade serous carcinoma often originates in the fallopian tube fimbria, not the ovary itself',
        'Dysgerminoma is the ovarian equivalent of testicular seminoma and is very radiosensitive',
        'Risk-reducing salpingo-oophorectomy reduces ovarian cancer risk by 80-90% in BRCA carriers',
      ],
      patientCounselingPoints: [
        'See a gynecologic oncologist if ovarian cancer is suspected',
        'Genetic counseling should be offered to all women with ovarian cancer',
        'BRCA carriers should consider risk-reducing surgery after completing childbearing',
        'Symptoms that persist for weeks should be evaluated',
      ],
    },
    3: {
      level: 3,
      summary: 'Ovarian cancer pathology involves histologic typing, grading, and staging. High-grade serous carcinoma shows TP53 mutations and chromosomal instability. Treatment includes cytoreductive surgery and platinum-based chemotherapy. Targeted therapies include PARP inhibitors for BRCA-mutated tumors.',
      explanation: `## Ovarian Cancer Pathology and Management

### Histopathology of Major Types

**High-Grade Serous Carcinoma:**

Features:
- Solid growth, papillary, or glandular
- High nuclear grade
- Mitotic activity
- Necrosis common
- Psammoma bodies

Immunophenotype:
- PAX8+, WT1+, p53 aberrant (>95%)
- p16 diffuse positive
- ER/PR variable
- CK7+, CK20-

Molecular:
- TP53 mutations (universal)
- BRCA1/2 mutations (15-20%)
- Chromosomal instability
- CCNE1 amplification

Origin:
- Most arise from fallopian tube fimbria
- Serous tubal intraepithelial carcinoma (STIC)
- "Precursor escape" hypothesis

**Low-Grade Serous Carcinoma:**

Features:
- Resembles serous borderline tumor
- Invasive growth
- Low nuclear grade
- Less mitotic activity

Molecular:
- BRAF, KRAS, NRAS mutations
- Rare TP53 mutations
- ERK pathway activation
- Progression from serous borderline tumor

**Endometrioid Carcinoma:**

Features:
- Glandular architecture
- Squamous differentiation (common)
- Associated with endometriosis
- Lynch syndrome association

Immunophenotype:
- PAX8+, ER+, PR+
- WT1 negative
- p53 wild-type (usually)
- CTNNB1 mutations (30-40%)

**Clear Cell Carcinoma:**

Features:
- Hobnail cells
- Clear cytoplasm (glycogen)
- Hyaline stroma
- Associated with endometriosis

Immunophenotype:
- HNF1B+, Napsin A+
- ER negative or weak
- p53 wild-type
- ARID1A mutations common

**Mucinous Carcinoma:**

Features:
- Gastrointestinal or endocervical-like
- Expansile or infiltrative invasion
- Often unilateral, large
- Exclude metastasis from GI tract

### Staging (FIGO 2014)

**Stage I:** Limited to ovaries/fallopian tubes
- IA: One ovary/tube, capsule intact
- IB: Both ovaries/tubes
- IC: Surgical spill, capsule rupture, positive washings

**Stage II:** Pelvic extension
- IIA: Involvement of uterus/tubes
- IIB: Other pelvic tissues

**Stage III:** Peritoneal involvement/LN
- IIIA1: Positive retroperitoneal nodes only
- IIIA2: Microscopic extrapelvic peritoneal
- IIIB: Macroscopic peritoneal <=2cm
- IIIC: Peritoneal >2cm

**Stage IV:** Distant metastasis
- IVA: Pleural effusion with positive cytology
- IVB: Parenchymal liver/splenic metastases, extra-abdominal

### Treatment Principles

**Surgery:**

Primary debulking:
- Hysterectomy, BSO, omentectomy
- Peritoneal biopsies
- Lymph node evaluation
- Resect all visible disease
- Goal: Complete cytoreduction (no residual)

Interval debulking:
- After neoadjuvant chemotherapy
- Similar surgical approach
- Similar survival if optimal debulking

**Chemotherapy:**

First-line (epithelial):
- Carboplatin AUC 5-6 + Paclitaxel 175 mg/m2
- 6 cycles every 3 weeks
- IP/IV option for optimally debulked stage III

Dose-dense paclitaxel:
- Weekly paclitaxel + 3-weekly carboplatin
- Japanese GOG study showed benefit
- More toxicity

Bevacizumab maintenance:
- GOG-218 and ICON7
- Progression-free survival benefit
- Overall survival benefit in high-risk

**Targeted Therapy:**

PARP inhibitors:
- Olaparib, niraparib, rucaparib
- Maintenance after response
- Especially effective in BRCA-mutated
- Also benefit in HRD-positive

Anti-angiogenics:
- Bevacizumab
- Cediranib (investigational)

Immunotherapy:
- Limited efficacy to date
- PD-1/PD-L1 inhibitors
- Combination trials ongoing`,
      keyTerms: [
        { term: 'debulking surgery', definition: 'Surgery to remove as much tumor as possible' },
        { term: 'PARP inhibitor', definition: 'Drug that blocks DNA repair enzyme; effective in BRCA-mutated cancers' },
        { term: 'homologous recombination deficiency', definition: 'Inability to repair DNA double-strand breaks through HR pathway' },
        { term: 'neoadjuvant chemotherapy', definition: 'Chemotherapy given before surgery' },
        { term: 'serous tubal intraepithelial carcinoma', definition: 'Precursor lesion in fallopian tube for high-grade serous carcinoma' },
      ],
      clinicalNotes: 'The fallopian tube is now recognized as the site of origin for most high-grade serous carcinomas. Pathologic examination should include sectioning and extensive examination of the fimbriae (SEE-FIM protocol) to identify serous tubal intraepithelial carcinoma (STIC).',
    },
    4: {
      level: 4,
      summary: 'Advanced ovarian cancer management integrates molecular testing, targeted therapies, and maintenance strategies. Germ cell and sex cord-stromal tumors have distinct natural histories and treatment approaches. Surveillance and recurrent disease management require multidisciplinary care.',
      explanation: `## Advanced Ovarian Cancer Management

### Molecular Testing

**Essential Testing:**

BRCA1/2:
- Germline and somatic testing
- Guides PARP inhibitor use
- Cascade testing for family
- All epithelial ovarian cancers

HRD (Homologous Recombination Deficiency):
- Myriad myChoice (genomic instability score)
- FoundationFocus CDx
- Predicts PARP inhibitor benefit
- Beyond BRCA mutations

Tumor mutational burden:
- Pembrolizumab for TMB-high
- Rare in ovarian cancer

MSI/dMMR:
- Lynch syndrome screening
- Pembrolizumab for dMMR
- Endometrioid histology

### Maintenance Therapy

**First-Line Maintenance:**

SOLO-1 (olaparib):
- BRCA-mutated advanced
- After response to platinum
- 60% reduction in progression risk
- 7-year follow-up shows sustained benefit

PAOLA-1 (olaparib + bevacizumab):
- HRD-positive population
- Added to bevacizumab maintenance
- Significant PFS benefit

PRIMA/ENGOT-OV26 (niraparib):
- All-comers (regardless of biomarker)
- Benefit in HRD and some non-HRD
- Once-daily oral

VELIA/GOG-3005 (veliparib):
- Throughout treatment
- Concurrent and maintenance
- Benefit in BRCA/HRD

**Recurrence Setting:**

Platinum-sensitive recurrence:
- PARP inhibitors as maintenance after response
- SOLO-2, NOVA, ARIEL3
- Benefit in BRCA and HRD
- Prolongs time to next treatment

### Germ Cell Tumor Management

**Dysgerminoma:**
- Highly chemosensitive
- BEP regimen (bleomycin, etoposide, cisplatin)
- Excellent prognosis (90%+ survival)
- Fertility-sparing surgery possible
- Very radiosensitive (rarely used now)

**Non-Dysgerminomatous:**
- Yolk sac: AFP elevated, BEP chemotherapy
- Immature teratoma: Grade determines treatment
- Embryonal: Aggressive, BEP
- Choriocarcinoma: hCG elevated, aggressive
- Mixed: Treat according to worst component

**Fertility Preservation:**
- Important in young patients
- Unilateral salpingo-oophorectomy often sufficient
- Chemotherapy may damage remaining ovary
- Oocyte/embryo cryopreservation

### Sex Cord-Stromal Tumors

**Granulosa Cell Tumor:**

Adult type:
- Most common malignant type
- Late recurrence (10-20 years)
- Estrogen production common
- FOXL2 mutation (C402G)
- Surgery primary treatment
- Platinum-based chemotherapy for advanced

Juvenile type:
- Rare, younger patients
- Higher mitotic activity
- Better prognosis than adult type
- No FOXL2 mutation
- Usually curable with surgery

**Sertoli-Leydig Cell Tumor:**
- Androgen production
- Virilization
- Usually low-grade
- DICER1 mutations (some)

**Thecoma/Fibroma:**
- Usually benign
- Rare malignant forms
- Surgical resection

### Recurrent Disease Management

**Platinum Sensitivity:**

Definition:
- Recurrence >6 months from completion
- Still platinum-sensitive

Treatment:
- Rechallenge with platinum-based
- Carboplatin + paclitaxel
- Carboplatin + liposomal doxorubicin
- Carboplatin + gemcitabine

Secondary cytoreduction:
- Consider if complete resection possible
- DESKTOP III showed OS benefit
- GOG-213 showed no OS benefit
- Patient selection critical

**Platinum-Resistant Disease:**

Definition:
- Recurrence <6 months
- Or progression on platinum

Treatment options:
- Non-platinum single agents
- Liposomal doxorubicin
- Topotecan
- Gemcitabine
- Weekly paclitaxel
- Bevacizumab combinations

**Supportive Care:**
- Bowel obstruction management
- Ascites control (paracentesis, catheters)
- Pleural effusion management
- Pain control
- Palliative care integration

### Surveillance

**Follow-up Schedule:**
- Every 2-4 months for 2 years
- Every 3-6 months for 3 years
- Then annually

**Evaluation:**
- Physical examination
- CA-125 (if elevated at diagnosis)
- CT scans as indicated
- Symptom assessment

**Rising CA-125:**
- MRC OV05/EORTC 55955
- Treating rising CA-125 alone did not improve survival
- Wait for symptoms or radiographic progression

### Quality of Life

**Long-term Survivors:**
- Physical side effects
- Neuropathy (taxanes, platinum)
- Fatigue
- Sexual dysfunction
- Menopausal symptoms

**Psychosocial Support:**
- Anxiety, depression screening
- Support groups
- Genetic counseling for family
- Financial counseling`,
      keyTerms: [
        { term: 'platinum-sensitive', definition: 'Recurrence occurring more than 6 months after platinum chemotherapy' },
        { term: 'BEP regimen', definition: 'Bleomycin, etoposide, cisplatin chemotherapy for germ cell tumors' },
        { term: 'interval debulking', definition: 'Surgery performed after neoadjuvant chemotherapy' },
        { term: 'secondary cytoreduction', definition: 'Surgery for recurrent ovarian cancer' },
        { term: 'FOXL2 mutation', definition: 'Characteristic mutation in adult granulosa cell tumors' },
      ],
      clinicalNotes: 'FOXL2 C402G mutation is present in >95% of adult granulosa cell tumors and can be used as a diagnostic marker. Adult granulosa cell tumors have a propensity for late recurrence, so prolonged surveillance (10-20 years) is recommended.',
    },
    5: {
      level: 5,
      summary: 'Expert-level ovarian cancer care involves precision medicine approaches, management of rare histologies, clinical trial enrollment, prevention strategies, and emerging therapies including antibody-drug conjugates and novel immunotherapy combinations.',
      explanation: `## Expert Ovarian Cancer Topics

### Rare Ovarian Cancer Types

**Small Cell Carcinoma:**
- Hypercalcemic type (SMARCA4-deficient)
- Young women
- Very aggressive
- Poor prognosis
- Immunohistochemistry: SMARCA4 loss

**Carcinosarcoma (Malignant Mixed Mullerian Tumor):**
- Biphasic: carcinoma + sarcoma
- Aggressive
- Poor response to chemotherapy
- Similar treatment to high-grade serous

**Brenner Tumor:**
- Transitional epithelium-like
- Usually benign
- Borderline and malignant variants

**Metastatic Tumors:**
- Krukenberg tumor (GI, signet ring)
- Breast cancer metastasis
- Appendiceal tumors
- Lymphoma

### Prevention Strategies

**Risk-Reducing Salpingo-Oophorectomy (RRSO):**

Indications:
- BRCA1/2 mutation carriers
- Lynch syndrome
- Completion by age 35-40 (BRCA1) or 40-45 (BRCA2)
- After childbearing complete

Benefits:
- 80% ovarian cancer risk reduction
- 50% breast cancer risk reduction (premenopausal)
- Mortality benefit

Risks:
- Surgical menopause
- Cardiovascular disease
- Osteoporosis
- Cognitive effects
- Sexual dysfunction

**Opportunistic Salpingectomy:**
- At time of hysterectomy or sterilization
- Reduces ovarian cancer risk
- Preserves ovarian function
- Emerging standard

**Oral Contraceptives:**
- 50% risk reduction with 5 years use
- Protective effect lasts decades
- Safe in BRCA carriers

### Novel Therapeutic Approaches

**Antibody-Drug Conjugates (ADCs):**

Mirvetuximab soravtansine:
- Folate receptor alpha targeting
- FR-alpha overexpressed in ovarian cancer
- SORAYA trial in platinum-resistant
- MIRASOL trial (frontline maintenance ongoing)

Other ADCs in development:
- NaPi2b-targeting
- Mesothelin-targeting
- tissue factor-targeting

**Immunotherapy:**

Current status:
- Single-agent PD-1/PD-L1: Limited efficacy
- Combination strategies being explored

Ongoing approaches:
- PARP inhibitor + immunotherapy
- Anti-angiogenic + immunotherapy
- Vaccine trials
- CAR-T cell therapy (early phase)

**Other Targets:**

Weel inhibitors:
- TP53-mutated tumors
- Gynecologic cancers enriched

ATR inhibitors:
- Replication stress
- HRD tumors

MEK inhibitors:
- Low-grade serous carcinoma
- NRAS, KRAS, BRAF mutations

### Clinical Trials

**Trial Design Considerations:**
- Maintenance setting increasingly important
- Molecular stratification
- Patient-reported outcomes
- Quality of life endpoints

**Biomarker-Driven Trials:**
- Umbrella trials
- Basket trials
- Adaptive designs

### Quality Metrics

**Surgical Quality:**
- Complete cytoreduction rate
- Surgical complexity score
- Morbidity rates
- Gynecologic oncologist involvement

**Pathology Quality:**
- STIC detection rate
- Molecular testing turnaround
- Standardized reporting

**Systemic Therapy:**
- Time to treatment initiation
- Dose intensity
- Completion rates
- Toxicity management

### Health Equity

**Disparities:**
- Racial differences in outcomes
- Access to gynecologic oncologists
- Genetic testing access
- Clinical trial enrollment
- PARP inhibitor access

**Addressing Disparities:**
- Navigation programs
- Telemedicine
- Financial assistance
- Community outreach

### Survivorship

**Long-term Follow-up:**
- Late effects of treatment
- Secondary malignancies
- Cardiovascular risk
- Bone health

**Fertility Preservation:**
- Early referral
- Oocyte/embryo freezing
- Ovarian tissue cryopreservation
- Experimental approaches

**Genetic Counseling:**
- Cascade testing
- Family planning
- Risk management for relatives
- Insurance/employment considerations

### Research Frontiers

**Early Detection:**
- Liquid biopsy (CA-125, HE4, panels)
- Novel imaging
- Risk stratification models
- Artificial intelligence

**Prevention:**
- Vaccines
- Metformin
- Aspirin
- Diet/lifestyle

**Personalized Medicine:**
- Real-time molecular profiling
- Organoid drug testing
- Adaptive therapy
- Minimal residual disease monitoring`,
      keyTerms: [
        { term: 'opportunistic salpingectomy', definition: 'Removal of fallopian tubes during other pelvic surgery to reduce cancer risk' },
        { term: 'antibody-drug conjugate', definition: 'Monoclonal antibody linked to cytotoxic drug for targeted delivery' },
        { term: 'SMARCA4', definition: 'Chromatin remodeling gene; loss defines small cell carcinoma hypercalcemic type' },
        { term: 'organoid', definition: '3D cell culture that mimics tissue architecture for research' },
        { term: 'cascade testing', definition: 'Genetic testing of at-risk relatives after identifying familial mutation' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. The fallopian tube is the site of origin for most high-grade serous carcinomas. All RRSO specimens should be processed with the SEE-FIM protocol to detect occult STIC or carcinoma.

2. PARP inhibitors provide benefit in first-line maintenance not just for BRCA-mutated tumors but also for HRD-positive tumors. Testing should include both germline and somatic BRCA as well as HRD assessment.

3. Adult granulosa cell tumors characteristically have late recurrences (10-20 years). Surveillance should continue for decades, not just the standard 5 years.

4. Opportunistic salpingectomy at the time of hysterectomy or sterilization reduces ovarian cancer risk and is increasingly recommended as a risk-reduction strategy for the general population.

5. Platinum-sensitive recurrent ovarian cancer should be treated with platinum-based rechallenge. The addition of bevacizumab improves outcomes. PARP inhibitor maintenance after response further prolongs remission.`,
    },
  },

  media: [
    {
      id: 'ovarian-cancer-types',
      type: 'diagram',
      filename: 'ovarian-cancer-types.svg',
      title: 'Types of Ovarian Cancer',
      description: 'Epithelial, germ cell, and sex cord-stromal tumors',
    },
  ],

  citations: [
    {
      id: 'solo1-olaparib',
      type: 'article',
      title: 'Maintenance Olaparib in Patients with Newly Diagnosed Advanced Ovarian Cancer',
      authors: ['Moore K', 'Colombo N', 'Scambia G', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'ovarian-cancer-who',
      type: 'textbook',
      title: 'WHO Classification of Tumours of Female Reproductive Organs',
      authors: ['WHO'],
      source: 'IARC Press',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-endometrial-cancer', targetType: 'condition', relationship: 'related', label: 'Endometrial Cancer' },
    { targetId: 'reproductive-cervical-pathology', targetType: 'condition', relationship: 'related', label: 'Cervical Pathology' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['pathology', 'oncology', 'gynecologic-cancer'],
    keywords: ['ovarian cancer', 'high-grade serous', 'BRCA', 'PARP inhibitor', 'debulking'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ovarianCancer;
