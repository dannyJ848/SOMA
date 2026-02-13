/**
 * Fertility Evaluation - Reproductive Medicine
 *
 * Comprehensive content on clinical evaluation of fertility including
 * assessment methods, diagnostic testing, and interpretation of results
 * for both male and female infertility workup.
 */

import { EducationalContent } from '../../types';

export const fertilityEvaluation: EducationalContent = {
  id: 'reproductive-fertility-evaluation',
  type: 'concept',
  name: 'Fertility Evaluation',
  alternateNames: ['Infertility Workup', 'Fertility Assessment', 'Reproductive Evaluation'],

  levels: {
    1: {
      level: 1,
      summary: 'Fertility evaluation is testing to find out why a couple cannot get pregnant, including checking both partners and looking at sperm health, egg release, and the path for sperm to reach the egg.',
      explanation: `## What is Fertility Evaluation?

When a couple has trouble getting pregnant, doctors do special tests to find out why. This is called a fertility evaluation.

### Who Gets Tested?

- Couples who have been trying to get pregnant for 1 year without success
- Women over 35 who have been trying for 6 months
- Anyone with known fertility problems

### What Doctors Check

**For Women:**
- If eggs are being released each month (ovulation)
- If the uterus and fallopian tubes are open and healthy
- Hormone levels that control reproduction

**For Men:**
- Sperm count (how many sperm)
- Sperm movement (how well they swim)
- Sperm shape (normal vs abnormal)

### Common Tests

1. **Blood Tests:** Check hormone levels
2. **Semen Analysis:** Check sperm health
3. **Ultrasound:** Look at ovaries and uterus
4. **X-ray Test:** Check if fallopian tubes are open

### Why Both Partners Get Tested

Fertility problems can come from:
- The woman (~40% of cases)
- The man (~40% of cases)
- Both partners (~10% of cases)
- Unknown reasons (~10% of cases)

Testing both partners helps doctors find the best way to help.`,
      keyTerms: [
        { term: 'fertility', definition: 'The ability to have a baby' },
        { term: 'ovulation', definition: 'When an egg is released from the ovary each month' },
        { term: 'sperm', definition: 'Male cells that can fertilize a female egg' },
        { term: 'fallopian tubes', definition: 'Tubes that carry eggs from the ovaries to the uterus' },
        { term: 'semen analysis', definition: 'A test that checks the health of sperm' },
      ],
      analogies: [
        'Fertility evaluation is like troubleshooting why a car won\'t start - you check the battery, fuel, and engine to find the problem.',
        'The female reproductive system is like a garden that needs soil (uterus), seeds (eggs), and pathways (tubes) all working together.',
      ],
      examples: [
        'A 30-year-old couple trying for 14 months would get fertility testing',
        'A semen analysis might show low sperm count as the cause of infertility',
        'Blood tests on day 3 of the menstrual cycle check hormone levels',
      ],
      patientCounselingPoints: [
        'Both partners need to be tested - fertility problems can come from either person',
        'Most fertility problems have treatments available',
        'Testing usually takes 1-2 months to complete',
        'Insurance may cover some fertility testing costs',
      ],
    },
    2: {
      level: 2,
      summary: 'Fertility evaluation involves systematic assessment of both partners including ovulation tracking, semen analysis, hormone testing, and imaging studies to identify causes of infertility such as anovulation, tubal disease, or male factor issues.',
      explanation: `## The Fertility Evaluation Process

A complete fertility workup examines both partners to identify obstacles to conception.

### When to Seek Evaluation

| Situation | Timing |
|-----------|--------|
| Woman under 35 | After 12 months of unprotected intercourse |
| Woman 35-40 | After 6 months of unprotected intercourse |
| Woman over 40 | Immediately - seek evaluation now |
| Known problems | Immediately (irregular periods, endometriosis, etc.) |

### Female Evaluation Components

**1. Ovulation Assessment**

Signs of regular ovulation:
- Regular menstrual cycles (21-35 days)
- Mid-cycle cervical mucus changes (egg white consistency)
- Basal body temperature rise after ovulation
- Positive ovulation predictor kit (LH surge)

Tests to confirm ovulation:
- Day 21-23 progesterone level (>10 ng/mL indicates ovulation)
- Serial ultrasounds to track follicle development
- Endometrial biopsy (rarely used now)

**2. Ovarian Reserve Testing**

Measures remaining egg supply:
- Day 3 FSH and estradiol levels
- Anti-Mullerian Hormone (AMH) - can be tested any day
- Antral follicle count (AFC) via ultrasound

**3. Tubal and Uterine Evaluation**

- **Hysterosalpingogram (HSG):** X-ray with dye to check tube patency
- **Sonohysterogram:** Ultrasound with fluid to check uterine cavity
- **Hysteroscopy:** Camera to directly view inside uterus

### Male Evaluation Components

**Semen Analysis (WHO 2021 Criteria):**

| Parameter | Reference Value |
|-----------|-----------------|
| Volume | at least 1.4 mL |
| Concentration | at least 16 million/mL |
| Total motility | at least 42% |
| Progressive motility | at least 30% |
| Normal morphology | at least 4% |

**Additional Male Testing:**
- Hormone levels (testosterone, FSH, LH)
- Physical examination (varicocele check)
- Genetic testing (if severe male factor)

### Common Findings

| Finding | Prevalence | Next Steps |
|---------|------------|------------|
| Ovulation disorders | 25% | Ovulation induction medication |
| Male factor | 25% | IUI or IVF, urology referral |
| Tubal disease | 20% | Surgery or IVF |
| Unexplained | 15% | Expectant management or IVF |
| Uterine factors | 10% | Surgery |
| Other | 5% | Varies by condition |`,
      keyTerms: [
        { term: 'infertility', definition: 'The inability to conceive after 12 months of unprotected intercourse (6 months if woman over 35)' },
        { term: 'ovarian reserve', definition: 'The quantity and quality of remaining eggs in the ovaries' },
        { term: 'hysterosalpingogram', definition: 'An X-ray procedure using dye to evaluate the uterus and fallopian tubes' },
        { term: 'varicocele', definition: 'Enlarged veins in the scrotum that can affect sperm production' },
        { term: 'progesterone', definition: 'A hormone produced after ovulation that prepares the uterus for pregnancy' },
      ],
      analogies: [
        'The fertility evaluation is like a detective investigating a case - gathering clues from multiple sources to solve the mystery.',
        'Ovarian reserve testing is like checking how many eggs are left in the refrigerator before planning a big breakfast.',
      ],
      examples: [
        'A day 3 FSH level over 10-15 mIU/mL suggests diminished ovarian reserve',
        'A varicocele repair can improve sperm counts by 60-80% in some men',
        'Blocked fallopian tubes may require IVF since sperm cannot reach the egg',
      ],
      patientCounselingPoints: [
        'Track your menstrual cycles before the appointment - this information is very helpful',
        'Semen analysis requires 2-7 days of abstinence before testing',
        'HSG can actually slightly increase fertility for 1-2 months after the procedure',
        'Don\'t panic if initial tests are abnormal - many issues are treatable',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive fertility evaluation integrates endocrine assessment, imaging, and functional testing to diagnose causes including hypothalamic-pituitary dysfunction, PCOS, endometriosis, tubal occlusion, and male factor infertility.',
      explanation: `## Detailed Fertility Assessment

### Endocrine Evaluation

**Day 3 Hormone Panel:**

| Hormone | Normal Range | Clinical Significance |
|---------|--------------|----------------------|
| FSH | 3-10 mIU/mL | >10 suggests diminished reserve; >20 poor prognosis |
| LH | 2-12 mIU/mL | Elevated in PCOS; LH:FSH ratio >2:1 suggests PCOS |
| Estradiol | 25-75 pg/mL | >80 may suppress FSH, masking true reserve |
| Prolactin | <20 ng/mL | Elevated causes anovulation |
| TSH | 0.4-4.0 mIU/L | Abnormal affects ovulation and pregnancy |

**Extended Testing:**
- AMH: 1.0-4.0 ng/mL (optimal); <1.0 low; >4.0 suggests PCOS
- Testosterone, DHEAS: Evaluate for hyperandrogenism
- 17-hydroxyprogesterone: Screen for non-classical adrenal hyperplasia

### Ovarian Reserve Interpretation

---
AMH Interpretation:
  >4.0 ng/mL: High (may indicate PCOS)
  1.0-4.0 ng/mL: Normal
  0.5-1.0 ng/mL: Low-normal
  <0.5 ng/mL: Very low
---

AFC (Antral Follicle Count):
  >15: Good reserve
  10-15: Normal
  5-9: Reduced
  <5: Very low

### Male Factor Evaluation

**Beyond Basic Semen Analysis:**

Physical examination findings:
- Testicular volume <15 mL suggests impaired spermatogenesis
- Varicograde (grade I-III) correlates with severity
- Vas deferens absence suggests cystic fibrosis carrier status

**Endocrine Evaluation (if abnormal semen):**
- Testosterone, FSH, LH pattern interpretation:
  - High FSH + low testosterone: Primary testicular failure
  - Low/normal FSH + low testosterone: Hypogonadotropic hypogonadism
  - Normal hormones + azoospermia: Obstruction vs testicular failure

**Specialized Testing:**
- Sperm DNA fragmentation (TUNEL, SCSA, COMET)
- Anti-sperm antibodies
- Post-ejaculate urine analysis (retrograde ejaculation)
- Transrectal ultrasound (ejaculatory duct obstruction)

### Imaging Modalities

**Hysterosalpingogram (HSG):**
- Best for tubal patency assessment
- Can identify proximal vs distal tubal occlusion
- Uterine filling defects suggest polyps or fibroids
- Therapeutic benefit: oil-based contrast may improve fertility

**Sonohysterography (SIS):**
- Saline infusion to outline uterine cavity
- Superior for detecting intracavitary lesions
- Better tolerated than HSG
- No radiation exposure

**Hysteroscopy:**
- Gold standard for uterine cavity evaluation
- Allows simultaneous treatment (polypectomy, septum resection)
- Diagnostic accuracy >95% for uterine abnormalities

**Laparoscopy:**
- Direct visualization of pelvis
- Gold standard for endometriosis diagnosis
- Can treat adhesions and mild endometriosis
- Invasive - reserved for specific indications`,
      keyTerms: [
        { term: 'hypogonadotropic hypogonadism', definition: 'Low gonadotropins (FSH/LH) leading to reduced sex steroid production; can be hypothalamic or pituitary in origin' },
        { term: 'azoospermia', definition: 'Absence of sperm in the ejaculate; may be obstructive or non-obstructive' },
        { term: 'DNA fragmentation', definition: 'Damage to sperm DNA; associated with infertility and pregnancy loss' },
        { term: 'sonohysterography', definition: 'Ultrasound with saline infusion to evaluate the uterine cavity' },
        { term: 'antral follicle', definition: 'Small fluid-filled follicles in the ovary visible on ultrasound; count reflects ovarian reserve' },
      ],
      analogies: [
        'AMH is like an egg inventory report - it tells you approximately how many eggs remain but not their quality.',
        'Hormone testing is like checking the thermostat and heating system - it shows if the control mechanisms are working properly.',
      ],
      examples: [
        'An FSH of 18 with estradiol of 45 on day 3 indicates significantly diminished ovarian reserve',
        'Sperm DNA fragmentation >30% is associated with recurrent pregnancy loss',
        'A hydrosalpinx (blocked, fluid-filled tube) can reduce IVF success rates by 50%',
      ],
      clinicalNotes: 'AMH is the most reliable marker of ovarian reserve as it does not vary significantly during the menstrual cycle. However, it does NOT predict natural fertility or pregnancy rates - it primarily predicts response to ovarian stimulation.',
    },
    4: {
      level: 4,
      summary: 'Advanced fertility evaluation encompasses genetic screening, specialized sperm function testing, endometrial assessment, and integration of results to formulate personalized treatment plans including expectant management, ovulation induction, IUI, IVF, or donor gametes.',
      explanation: `## Advanced Fertility Diagnostics

### Genetic Evaluation

**Female Genetic Testing:**

| Indication | Test | Significance |
|------------|------|--------------|
| Diminished ovarian reserve | FMR1 (fragile X) | Premutation carriers have accelerated ovarian aging |
| Family history of early menopause | FMR1, BRCA | Risk assessment and family planning |
| Recurrent pregnancy loss | Karyotype | Balanced translocations in 3-5% of couples |
| PCOS, severe acne, hirsutism | CYP21A2 | Non-classical congenital adrenal hyperplasia |

**Male Genetic Testing:**

| Finding | Test | Clinical Significance |
|---------|------|----------------------|
| Azoospermia, CBAVD | CFTR | Cystic fibrosis carrier; genetic counseling needed |
| Severe oligospermia (<5M/mL) | Karyotype | Klinefelter syndrome (47,XXY) in 10-15% |
| Severe teratozoospermia | AZF microdeletions | Y chromosome deletions; will transmit to sons |
| Globozoospermia | SPATA16, DPY19L2 | Specific genetic causes of infertility |

### Specialized Sperm Testing

**Sperm DNA Fragmentation (SDF):**

---
Methods:
  TUNEL: Direct measurement of DNA breaks
  SCSA: Sperm chromatin structure assay
  COMET: Single-cell gel electrophoresis
  SCD: Sperm chromatin dispersion test

Interpretation:
  <15%: Normal fertility potential
  15-30%: Borderline - may affect fertility
  >30%: High - associated with infertility and miscarriage
---

Clinical associations:
- Varicocele (repair may improve SDF)
- Lifestyle factors (smoking, obesity, heat exposure)
- Environmental toxins
- Advanced paternal age

**Sperm Function Tests:**
- Hyaluronan binding assay (HBA): Mature sperm selection
- Acrosome reaction testing: Ability to penetrate egg
- Hemizona assay: Sperm-egg binding (research only)
- ROS testing: Reactive oxygen species (associated with male infertility)

### Endometrial Assessment

**Controversial/Unproven Tests:**
- Endometrial receptivity array (ERA): Timing of embryo transfer
- Endometrial scratch: Mechanical injury to improve implantation
- Chronic endometritis testing: CD138 immunohistochemistry
- Uterine natural killer cells: Role unclear, testing controversial

**Evidence-Based Endometrial Evaluation:**
- Hysteroscopy for recurrent implantation failure
- MRI for adenomyosis detection
- 3D ultrasound for cavity assessment

### Integrating Results for Treatment Planning

**Decision Algorithm:**

---
Fertility Evaluation Results → Treatment Selection:

Unexplained infertility:
  Age <35: 3-6 cycles IUI with ovulation induction
  Age 35-40: Consider IVF after failed IUI
  Age >40: Proceed directly to IVF or donor eggs

Tubal factor:
  Bilateral blockage: IVF
  Hydrosalpinx: Salpingectomy before IVF
  Proximal blockage: Selective catheterization vs IVF

Male factor:
  Mild: IUI with sperm wash
  Moderate: ICSI with IVF
  Severe: ICSI or donor sperm

Diminished ovarian reserve:
  High-dose stimulation or mini-IVF
  Consider egg donation if poor response
---

### Prognostic Factors

**Female Age and IVF Success:**

| Age | Live Birth Rate per Cycle |
|-----|---------------------------|
| <35 | 40-50% |
| 35-37 | 30-35% |
| 38-40 | 20-25% |
| 41-42 | 10-15% |
| >42 | <5% |

**Predictive Models:**
- FIGO fertility tool
- Smith model for IVF outcome prediction
- Anti-Mullerian hormone as predictor of oocyte yield`,
      keyTerms: [
        { term: 'ICSI', definition: 'Intracytoplasmic sperm injection; single sperm injected directly into egg for fertilization' },
        { term: 'CBAVD', definition: 'Congenital bilateral absence of the vas deferens; associated with cystic fibrosis' },
        { term: 'AZF microdeletion', definition: 'Microdeletion in AZoospermia Factor region of Y chromosome; causes spermatogenic failure' },
        { term: 'hydrosalpinx', definition: 'Fluid-filled, blocked fallopian tube; toxic to embryos and reduces IVF success' },
        { term: 'recurrent implantation failure', definition: 'Failure to achieve pregnancy after multiple embryo transfers in IVF' },
      ],
      clinicalNotes: 'Karyotype testing is indicated for men with sperm concentrations <5 million/mL due to increased risk of chromosomal abnormalities (particularly Klinefelter syndrome). Genetic counseling is essential before proceeding with ICSI in men with genetic abnormalities, as these can be transmitted to offspring.',
    },
    5: {
      level: 5,
      summary: 'Expert-level fertility evaluation includes advanced reproductive genetics, mitochondrial function assessment, sperm epigenetics, uterine microbiome analysis, and application of artificial intelligence for predictive modeling while navigating ethical considerations in third-party reproduction.',
      explanation: `## Cutting-Edge Fertility Diagnostics

### Advanced Reproductive Genetics

**Preconception Carrier Screening:**
- Expanded carrier screening (ECS): 200+ recessive conditions
- ACOG/ACMG recommendations: screen all women for cystic fibrosis, spinal muscular atrophy, hemoglobinopathies
- Pan-ethnic screening replacing ethnicity-based approaches
- Cascade screening implications for extended family

**PGT (Preimplantation Genetic Testing) Applications:**

---
PGT-A: Aneuploidy screening
  - Detects chromosomal abnormalities in embryos
  - Controversial benefit in good prognosis patients
  - Reduces miscarriage risk in advanced maternal age
  - Mosaicism interpretation challenges

PGT-M: Monogenic/single gene disorders
  - For known familial mutations
  - Combined with HLA matching (savior siblings)
  - Mitochondrial disorders - ethical complexities

PGT-SR: Structural rearrangements
  - For balanced translocation carriers
  - Reduces recurrent miscarriage
  - Identifies unbalanced products
---

### Mitochondrial Assessment

**Oocyte Mitochondrial Function:**
- Mitochondrial DNA copy number as oocyte quality marker
- ATP content assessment
- Mitochondrial DNA mutation analysis
- Autologous mitochondrial transfer (experimental, banned in many countries)

**Sperm Mitochondrial Function:**
- Mitochondrial membrane potential (JC-1 staining)
- Mitochondrial ROS production
- Mitochondrial DNA integrity
- Correlation with fertilization and embryo development

### Sperm Epigenetics

**Epigenetic Modifications:**
- DNA methylation patterns in sperm
- Histone retention and modifications
- Non-coding RNA profiles
- Effect of paternal age and environment on offspring

**Clinical Implications:**
- Paternal epigenetic inheritance
- Association with neurodevelopmental disorders
- Transgenerational effects of paternal obesity/metabolism

### Uterine Microbiome

**Endometrial Microbiome Analysis:**
- Lactobacillus-dominant vs dysbiotic profiles
- Association with implantation failure
- Chronic endometritis (CE) and microbial alterations
- Probiotic therapy potential (investigational)

**Testing Methods:**
- 16S rRNA gene sequencing
- Shotgun metagenomics
- Endometrial fluid aspiration (less invasive)

### AI and Machine Learning in Fertility

**Predictive Models:**
- Ovarian response prediction (AMH, AFC, age algorithms)
- Embryo selection using time-lapse imaging
- IVF outcome prediction incorporating multiple variables
- Personalized stimulation protocols

**Image Analysis:**
- Automated sperm morphology assessment
- Blastocyst grading algorithms
- Follicle tracking and sizing
- Endometrial pattern analysis

### Ethical Considerations in Advanced Fertility

**Third-Party Reproduction:**
- Donor gamete implications
- Known vs anonymous donation
- Donor-conceived person rights
- Psychological screening of recipients and donors

**Emerging Technologies:**
- In vitro gametogenesis (IVG)
- Mitochondrial replacement therapy
- CRISPR and germline editing (banned for reproduction)
- Artificial gametes

### Research Frontiers

**Ovarian Rejuvenation:**
- Platelet-rich plasma (PRP) injection into ovaries
- Stem cell therapy
- HORMAD1 and meiotic competence
- Limited evidence, experimental status

**Testicular Sperm Extraction Advances:**
- Micro-TESE for non-obstructive azoospermia
- Cryopreservation techniques
- Fertility preservation in cancer patients
- Optimizing sperm retrieval rates

**Sperm Selection Technologies:**
- MACS (magnetic-activated cell sorting)
- PICSI (physiologic ICSI using hyaluronan)
- IMSI (intracytoplasmic morphologically selected sperm)
- Benefits remain controversial`,
      keyTerms: [
        { term: 'mosaicism', definition: 'Presence of cells with different genetic compositions in an embryo; interpretation challenges for PGT-A' },
        { term: 'Micro-TESE', definition: 'Microsurgical testicular sperm extraction; surgical retrieval of sperm from testicular tissue' },
        { term: 'imprinting disorders', definition: 'Diseases caused by aberrant epigenetic marks; associated with ART in some studies' },
        { term: 'IVG', definition: 'In vitro gametogenesis; creating gametes from stem cells (experimental)' },
        { term: 'PICSI', definition: 'Physiologic ICSI; sperm selection based on hyaluronan binding (maturity marker)' },
      ],
      clinicalNotes: `Current Evidence-Based Recommendations:

1. PGT-A should be considered for:
   - Advanced maternal age (>=38)
   - Recurrent implantation failure
   - Recurrent pregnancy loss
   - Severe male factor
   
2. Routine DNA fragmentation testing remains controversial:
   - Not universally recommended
   - Consider in recurrent pregnancy loss, unexplained failure
   
3. Endometrial receptivity testing:
   - ERA has limited proven benefit
   - Consider only after multiple failed transfers
   
4. Uterine microbiome testing:
   - Research tool, not standard of care
   - May be considered in recurrent implantation failure`,
    },
  },

  media: [
    {
      id: 'fertility-evaluation-workflow',
      type: 'diagram',
      filename: 'fertility-evaluation-workflow.svg',
      title: 'Fertility Evaluation Workflow',
      description: 'Step-by-step approach to fertility assessment for both partners',
    },
    {
      id: 'hsg-procedure',
      type: 'image',
      filename: 'hsg-procedure.jpg',
      title: 'Hysterosalpingogram Procedure',
      description: 'X-ray imaging of uterus and fallopian tubes',
    },
  ],

  citations: [
    {
      id: 'who-semen-2021',
      type: 'article',
      title: 'WHO Laboratory Manual for the Examination and Processing of Human Semen',
      authors: ['World Health Organization'],
      source: 'WHO',
      url: 'https://www.who.int/publications/i/item/9789240030787',
    },
    {
      id: 'asrm-infertility-definition',
      type: 'article',
      title: 'Definitions of Infertility and Recurrent Pregnancy Loss',
      authors: ['Practice Committee of ASRM'],
      source: 'Fertility and Sterility',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-menstrual-cycle', targetType: 'concept', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'reproductive-spermatogenesis', targetType: 'concept', relationship: 'related', label: 'Spermatogenesis' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['fertility', 'clinical-medicine', 'diagnostic-testing'],
    keywords: ['infertility', 'semen analysis', 'ovulation', 'HSG', 'AMH'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default fertilityEvaluation;
