/**
 * Pregnancy Tests - Laboratory Interpretation Content
 *
 * Educational content for pregnancy test interpretation:
 * - hCG biology and detection methods
 * - Urine vs blood (qualitative vs quantitative)
 * - Timing, sensitivity, false positives and negatives
 * - Serial hCG interpretation and ectopic pregnancy
 * - Gestational trophoblastic disease markers
 *
 * Spanish translation (nameEs) included per SOMA convention.
 */

import { EducationalContent } from '../types';

export const pregnancyTestsContent: EducationalContent = {
  id: 'topic-pregnancy-tests',
  type: 'topic',
  name: 'Pregnancy Tests',
  nameEs: 'Pruebas de Embarazo',
  alternateNames: [
    'hCG Test',
    'Beta-hCG',
    'Pregnancy Blood Test',
    'Urine Pregnancy Test',
    'UPT',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Pregnancy tests check for a hormone called hCG that your body makes when you are pregnant. Tests can be done with urine (at home) or blood (at the doctor).',
      explanation: `# Pregnancy Tests

## How Do Pregnancy Tests Work?

When a fertilized egg attaches to the wall of the uterus, your body starts making a special hormone called **hCG** (human chorionic gonadotropin). Pregnancy tests look for this hormone.

**Think of hCG like a signal flare.** When pregnancy begins, the body shoots up this signal that says "a baby is growing here!" The test is a detector that spots the flare.

## Types of Pregnancy Tests

### Home Urine Test
- Available at any pharmacy without a prescription
- Hold the test stick in your urine stream or dip it in a cup of urine
- Results in 1-5 minutes
- Best to use first morning urine (most concentrated)
- Can detect pregnancy as early as the **first day of a missed period**

### Blood Test (at the Doctor)
- **Qualitative:** Yes or no -- are you pregnant?
- **Quantitative:** Measures the exact amount of hCG in your blood
- More sensitive than urine tests
- Can detect pregnancy a few days earlier than home tests
- Used to monitor pregnancy health and check for problems

## When to Test

- Wait until **at least the first day of your missed period** for the most accurate result
- Testing too early can give a false negative (test says no, but you are pregnant)
- If the test is negative but your period does not come, test again in a few days

## False Results

| Result Type | Meaning | Possible Causes |
|------------|---------|----------------|
| False negative | Test says not pregnant, but you are | Tested too early, dilute urine |
| False positive | Test says pregnant, but you are not | Very rare; certain medications, recent miscarriage |

## What to Do After a Positive Test
- See your doctor to confirm the pregnancy
- Start prenatal vitamins (especially folic acid)
- Avoid alcohol, smoking, and certain medications`,
      keyTerms: [
        { term: 'hCG', definition: 'A hormone your body makes during pregnancy that pregnancy tests detect' },
        { term: 'urine pregnancy test', definition: 'A test you can do at home by checking your urine for the pregnancy hormone' },
        { term: 'false negative', definition: 'When the test says you are not pregnant, but you actually are' },
        { term: 'false positive', definition: 'When the test says you are pregnant, but you actually are not' },
        { term: 'missed period', definition: 'When your monthly period does not come on time, which can be an early sign of pregnancy' },
      ],
      analogies: [
        'hCG is like a signal flare that pregnancy shoots into your blood and urine, and the test is the detector that spots it.',
        'Testing too early is like trying to hear a whisper from across a loud room -- the signal is not strong enough yet.',
      ],
      patientCounselingPoints: [
        'Use first morning urine for the most accurate home test result.',
        'Wait until at least the first day of your missed period to test.',
        'A negative test with a missed period should be repeated in a few days.',
        'No home test is 100% accurate -- see your doctor to confirm a positive result.',
        'Some medications, like fertility drugs containing hCG, can cause a false positive.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Pregnancy detection relies on hCG, produced by trophoblast cells after implantation. Urine tests detect hCG qualitatively (threshold ~20-25 mIU/mL), while serum quantitative beta-hCG allows precise monitoring of early pregnancy viability.',
      explanation: `## Pregnancy Testing: hCG Basics

### hCG Biology
- Produced by **syncytiotrophoblast** cells after implantation (~6-12 days post-conception)
- Maintains the corpus luteum, which produces progesterone to sustain early pregnancy
- Composed of alpha and beta subunits (alpha shared with LH, FSH, TSH; beta is pregnancy-specific)

### Urine vs Blood Tests

| Feature | Urine (Home Test) | Blood (Qualitative) | Blood (Quantitative) |
|---------|-------------------|--------------------|--------------------|
| Sensitivity | ~20-25 mIU/mL | ~5-25 mIU/mL | 1-2 mIU/mL |
| Earliest detection | ~12-14 DPO | ~10-12 DPO | ~9-11 DPO |
| Result type | Positive/Negative | Positive/Negative | Exact number |
| Turnaround | 1-5 minutes | Hours | Hours |
| Use | Screening | Confirming | Monitoring |

DPO = days post-ovulation

### Normal hCG Progression

| Gestational Age | hCG Range (mIU/mL) |
|----------------|-------------------|
| 3 weeks | 5-50 |
| 4 weeks | 5-426 |
| 5 weeks | 18-7,340 |
| 6 weeks | 1,080-56,500 |
| 7-8 weeks | 7,650-229,000 |
| 9-12 weeks | 25,700-288,000 |
| Peak (8-11 weeks) | Up to 288,000 |
| Second trimester | Declines and plateaus |

### Doubling Time
- Normal early pregnancy: hCG doubles every **48-72 hours**
- Slower rise may suggest ectopic pregnancy or nonviable pregnancy
- A single hCG value cannot determine viability -- serial measurements are needed

### Causes of False Results

**False Negative:**
- Testing too early (hCG below detection threshold)
- Very dilute urine
- Hook effect (extremely high hCG overwhelms test in rare cases)

**False Positive:**
- Biochemical pregnancy (very early loss)
- hCG-producing tumors (rare)
- Heterophilic antibodies
- Recent hCG injection (fertility treatment)
- Phantom hCG (non-specific assay interference)

### Important Clinical Points
- Ectopic pregnancy: hCG positive but may rise abnormally
- Miscarriage: hCG initially rises then fails to double or declines
- Molar pregnancy: very high hCG levels for gestational age`,
      keyTerms: [
        { term: 'beta-hCG', definition: 'The pregnancy-specific subunit of hCG measured in quantitative blood tests' },
        { term: 'doubling time', definition: 'Normal hCG doubles every 48-72 hours in early viable pregnancy' },
        { term: 'ectopic pregnancy', definition: 'Pregnancy implanted outside the uterus, often in the fallopian tube' },
        { term: 'hook effect', definition: 'Very high hCG concentrations can overwhelm the test, causing a false negative' },
        { term: 'syncytiotrophoblast', definition: 'Placental cells that produce hCG during pregnancy' },
      ],
      patientCounselingPoints: [
        'A single blood hCG number cannot tell you if the pregnancy is healthy -- your doctor will check it again in 48-72 hours.',
        'If you have pain or bleeding with a positive pregnancy test, seek medical attention right away.',
        'After a miscarriage or ectopic treatment, hCG is monitored until it returns to zero.',
        'Home pregnancy tests are very accurate when used correctly, but blood tests give more information.',
      ],
    },
    3: {
      level: 3,
      summary:
        'hCG is a glycoprotein heterodimer produced by syncytiotrophoblast with multiple molecular forms. Serial quantitative beta-hCG measurements, discriminatory zones, and correlation with ultrasound findings guide the evaluation of early pregnancy viability and ectopic pregnancy.',
      explanation: `## hCG: Advanced Diagnostic Interpretation

### hCG Molecular Biology

hCG is a heterodimeric glycoprotein:
- **Alpha subunit:** 92 amino acids, shared with LH, FSH, TSH
- **Beta subunit:** 145 amino acids, unique to hCG (pregnancy-specific)
- Multiple molecular forms: intact hCG, free beta-hCG, hyperglycosylated hCG (H-hCG), nicked hCG, beta-core fragment

**Hyperglycosylated hCG (H-hCG):**
- Predominant form in first 3-4 weeks
- Promotes trophoblast invasion
- Elevated in gestational trophoblastic disease
- Ratio of H-hCG to total hCG may predict pregnancy viability

### Discriminatory Zone

The **discriminatory zone** is the hCG level above which a normal intrauterine pregnancy (IUP) should be visible on transvaginal ultrasound (TVUS):
- Traditional: 1,500-2,000 mIU/mL (TVUS)
- More conservative: 3,000-3,500 mIU/mL
- ACOG 2018: single threshold not recommended; use clinical context

**Interpretation:**
| hCG Level | Ultrasound Finding | Interpretation |
|-----------|-------------------|---------------|
| Above discriminatory zone | IUP seen | Normal (most likely) |
| Above discriminatory zone | No IUP | Ectopic or early nonviable pregnancy |
| Below discriminatory zone | No IUP | Too early to determine; repeat in 48-72h |
| Any level | IUP with fetal heart rate | Viable pregnancy |

### Serial hCG Assessment

**Minimum Rise for Viable Pregnancy:**
- Previously: 53% rise in 48 hours
- Updated (Barnhart 2004): depends on initial hCG level
  - hCG <1,500: minimum 49% rise in 48h
  - hCG 1,500-3,000: minimum 40% rise
  - hCG >3,000: minimum 33% rise
- Slower rise suggests ectopic (but ~15% of ectopics have normal doubling)

**Decline After Pregnancy Loss:**
- Complete miscarriage: hCG should decline by ~50% every 48 hours
- Incomplete decline suggests retained products or ectopic

### Ectopic Pregnancy Evaluation

**Risk Factors:** Previous ectopic, PID, tubal surgery, IVF, IUD, smoking

**Workup Algorithm:**
1. Positive hCG + symptoms (pain, bleeding, amenorrhea)
2. TVUS to locate pregnancy
3. If no IUP: serial hCG + repeat TVUS
4. Plateau or abnormal rise: presumed ectopic
5. Treatment: methotrexate (medical) or salpingectomy/salpingostomy (surgical)

**Methotrexate Monitoring:**
- hCG on days 1, 4, 7
- Expect >=15% decline between day 4 and day 7
- Weekly hCG until undetectable

### hCG in Gestational Trophoblastic Disease (GTD)

| Type | hCG Pattern | Features |
|------|-------------|---------|
| Complete mole | Very high (>100,000) | 46,XX (paternal), no fetus, snowstorm US |
| Partial mole | Mildly elevated | 69,XXX/XXY, abnormal fetus |
| Choriocarcinoma | Persistently elevated post-mole | Malignant, highly chemo-sensitive |

### Pregnancy-Related Screening

**First Trimester Combined Screening (11-13 wk):**
- Free beta-hCG + PAPP-A + nuchal translucency
- Low PAPP-A and high free beta-hCG: increased Down syndrome risk

**Second Trimester Quad Screen (15-22 wk):**
- AFP, hCG, estriol, inhibin A
- Elevated hCG: Down syndrome risk
- Low hCG: trisomy 18 risk`,
      keyTerms: [
        { term: 'discriminatory zone', definition: 'hCG level above which TVUS should visualize an intrauterine pregnancy (~1,500-3,500 mIU/mL)' },
        { term: 'hyperglycosylated hCG', definition: 'Variant form predominant in early pregnancy; elevated in trophoblastic disease' },
        { term: 'gestational trophoblastic disease', definition: 'Spectrum from molar pregnancy to choriocarcinoma characterized by abnormal hCG patterns' },
        { term: 'PAPP-A', definition: 'Pregnancy-associated plasma protein A; first trimester screening marker' },
        { term: 'methotrexate', definition: 'Antifolate drug used for medical management of ectopic pregnancy' },
        { term: 'discriminatory rise', definition: 'Minimum expected hCG increase (35-49% in 48h) depending on initial level for viable pregnancy' },
      ],
    },
    4: {
      level: 4,
      summary:
        'Graduate-level hCG interpretation encompasses assay-specific variability, phantom hCG differential, pregnancy of unknown location algorithms, and advanced trophoblastic disease monitoring using hCG isoform profiles.',
      explanation: `## Graduate-Level hCG and Pregnancy Test Interpretation

### hCG Assay Variability

**Inter-Assay Discordance:**
- Different manufacturers calibrate against different WHO standards
- 4th IS (International Standard) 75/537: current reference
- Results can vary 30-50% between assay platforms
- Clinical implication: **serial hCG must be measured on the same assay**

**Antibody Specificity:**
| Assay | Detects | Pitfalls |
|-------|---------|---------|
| Intact hCG only | Heterodimer | Misses nicked hCG, free beta |
| Total hCG | Intact + free beta | Most clinically useful |
| Free beta-hCG | Beta subunit only | Screening marker |
| Hyperglycosylated hCG | H-hCG | Research/GTD monitoring |

### Phantom hCG

**Definition:** Persistently positive serum hCG without true hCG production

**Causes:**
- Heterophilic antibodies (HAMA - human anti-mouse antibodies) interfere with immunoassay
- Can persist for years, leading to unnecessary surgery and chemotherapy

**Diagnostic Approach:**
1. Urine hCG negative (heterophilic antibodies too large for renal filtration)
2. Serial dilution nonlinearity (fails parallel dilution)
3. Different assay platform gives different result
4. Pre-treat serum with heterophilic blocking tubes

### Pregnancy of Unknown Location (PUL) Algorithm

**M4/M6 Risk Models:**
- Logistic regression using hCG, progesterone, and hCG ratio at 48h
- Classify PUL as:
  - High probability viable IUP
  - High probability ectopic
  - High probability failing PUL
  - Indeterminate (needs further surveillance)

**Progesterone in PUL:**
| Progesterone Level | Interpretation |
|-------------------|---------------|
| <5 ng/mL | Nonviable pregnancy (abnormal location or failing IUP) |
| 5-25 ng/mL | Indeterminate |
| >25 ng/mL | Likely viable IUP |

### Advanced GTD Monitoring

**hCG Surveillance After Molar Evacuation:**
- Weekly hCG until 3 consecutive normal values
- Then monthly for 6 months (partial mole) or 12 months (complete mole)
- Rising or plateauing hCG: evaluate for persistent/invasive GTD

**FIGO Staging and Scoring for GTN:**
- WHO Prognostic Scoring System determines treatment
  - Low risk (score 0-6): single-agent methotrexate or actinomycin D
  - High risk (score >=7): multi-agent chemotherapy (EMA-CO)
- hCG is the primary biomarker for treatment response

**hCG Isoform Profiling in GTD:**
- Elevated H-hCG:total hCG ratio suggests invasive disease
- Free beta-hCG elevation: correlates with tumor burden
- Beta-core fragment (urine): useful for monitoring

### Quiescent GTD
- Persistent low-level hCG (typically <200 mIU/mL) without radiographic disease
- Normal free beta:total ratio suggests quiescent state
- Abnormal ratio (elevated free beta) suggests active GTN
- Management: surveillance vs treatment (controversial)

### Clinical Pearls

1. **hCG in heterotopic pregnancy** (IUP + ectopic simultaneously): incidence increasing with ART; cannot rely on hCG trend alone
2. **Post-molar hCG monitoring:** reliable contraception required during surveillance
3. **hCG and thyroid:** very high hCG can cause hyperthyroidism (beta-hCG stimulates TSH receptor)
4. **Male hCG elevation:** always consider testicular germ cell tumor`,
      keyTerms: [
        { term: 'phantom hCG', definition: 'False positive serum hCG from heterophilic antibody interference; urine hCG negative' },
        { term: 'pregnancy of unknown location', definition: 'Positive hCG without visible intrauterine or ectopic pregnancy on ultrasound' },
        { term: 'FIGO staging', definition: 'International staging system for gestational trophoblastic neoplasia using WHO scoring' },
        { term: 'heterophilic antibodies', definition: 'Antibodies (often HAMA) that interfere with immunoassays causing false positives' },
        { term: 'quiescent GTD', definition: 'Persistent low-level hCG after molar evacuation without active malignancy' },
        { term: 'heterotopic pregnancy', definition: 'Simultaneous intrauterine and ectopic pregnancy; increased with assisted reproduction' },
      ],
      clinicalNotes: 'When hCG results are unexpected or do not fit the clinical picture, always consider assay interference (phantom hCG) and request urine hCG, serial dilution, or testing on a different platform before initiating treatment. In male patients, any hCG elevation warrants testicular ultrasound.',
    },
    5: {
      level: 5,
      summary:
        'Expert hCG interpretation integrates molecular isoform analysis, AI-based PUL prediction models, personalized ectopic management algorithms, novel biomarkers (activin A, VEGF, kisspeptin), and evolving clinical trial data on expectant management of tubal ectopic pregnancy.',
      explanation: `## Expert-Level Pregnancy Test Interpretation

### Molecular hCG Isoforms in Clinical Practice

**Complete Isoform Panel:**
| Isoform | Source | Clinical Utility |
|---------|--------|-----------------|
| Intact hCG | Syncytiotrophoblast | Standard pregnancy monitoring |
| Free beta-hCG | Trophoblast, tumors | Aneuploidy screening, GTN monitoring |
| H-hCG | Cytotrophoblast | Early implantation, GTD, invasive potential |
| Nicked hCG | Degradation | Macrophage-processed, found in moles |
| pSTF (pituitary hCG) | Pituitary | Low levels in menopause, post-hysterectomy |
| Beta-core fragment | Renal metabolism | Urine monitoring in GTD |

**Pituitary hCG:**
- Low levels (1-10 mIU/mL) physiologically produced by anterior pituitary
- Rises in menopause (hCG rises with gonadotropins)
- Can cause diagnostic confusion in perimenopausal women
- Suppresses with estrogen/progesterone administration

### Novel Biomarkers in Ectopic Pregnancy

| Biomarker | Finding in Ectopic | Status |
|-----------|-------------------|--------|
| Activin A | Elevated | Promising adjunct, not yet clinical standard |
| VEGF | Elevated | Associated with tubal damage |
| Kisspeptin | Decreased | Lower in ectopic and failing pregnancies |
| Inhibin A | Variable | Less useful alone |
| Progesterone | <5 suggests nonviable | Established, limited specificity |
| ADAM12 | Decreased | First trimester marker under investigation |

### AI and Machine Learning in PUL Management

**Predictive Models:**
- Neural network models integrating hCG trajectory, progesterone, age, history, ultrasound features
- Outperform traditional logistic regression (M4/M6 models)
- Can stratify risk into >5 categories vs traditional 3-4
- Personalized surveillance intervals based on individual risk profile

**Decision Support Systems:**
- Automated hCG trajectory analysis with slope detection
- Alert systems for abnormal rise/plateau patterns
- Integration with electronic health records for real-time monitoring

### Evolving Ectopic Management

**Expectant Management of Tubal Ectopic:**
- Selected cases: declining hCG, no fetal cardiac activity, small ectopic mass
- GEM3 trial (2023): expectant management non-inferior to methotrexate for suitable cases
- Criteria: hCG <1,500 declining, asymptomatic, reliable follow-up

**Methotrexate Predictive Factors:**
- hCG <5,000: single-dose protocol success ~88%
- hCG 5,000-10,000: consider two-dose protocol
- Progesterone >10 and ectopic heartbeat: predictors of failure
- Nomogram-based protocols for personalized dosing

**Salpingostomy vs Salpingectomy:**
- ESEP trial: no difference in subsequent intrauterine pregnancy rate in women with healthy contralateral tube
- Persistent trophoblast after salpingostomy: ~7% require methotrexate
- Consider salpingostomy when contralateral tube damaged

### hCG in Testicular Cancer

**Staging Marker:**
| IGCCC Risk | hCG | AFP | LDH |
|-----------|-----|-----|-----|
| Good | <5,000 | <1,000 | <1.5x ULN |
| Intermediate | 5,000-50,000 | 1,000-10,000 | 1.5-10x ULN |
| Poor | >50,000 | >10,000 | >10x ULN |

- hCG half-life post-orchiectomy: 24-36 hours
- Failure to decline appropriately indicates persistent disease

### Cell-Free DNA and hCG

- Correlation between cf-DNA fraction and hCG levels
- Non-invasive prenatal testing (NIPT) accuracy affected by low fetal fraction
- Low fetal fraction associated with triploidy, obesity, early gestational age
- hCG level can help predict adequate fetal fraction for NIPT

### Quality and Regulatory Considerations

- FDA-cleared home tests: sensitivity typically 20-25 mIU/mL
- Hook effect threshold varies by assay (>500,000 mIU/mL)
- CLIA-waived vs moderate complexity POC devices
- WHO 4th International Standard for hCG calibration
- Cross-reactivity with LH: relevant in perimenopausal patients`,
      keyTerms: [
        { term: 'pituitary hCG', definition: 'Low-level hCG from anterior pituitary; increases in menopause, causing diagnostic confusion' },
        { term: 'kisspeptin', definition: 'Novel biomarker lower in ectopic pregnancy; under investigation as adjunct diagnostic' },
        { term: 'GEM3 trial', definition: 'Landmark trial showing expectant management non-inferior to methotrexate for selected tubal ectopics' },
        { term: 'IGCCC risk classification', definition: 'International Germ Cell Consensus Classification using hCG, AFP, LDH for testicular cancer staging' },
        { term: 'hook effect', definition: 'Extremely high hCG saturating assay antibodies causing false low/negative results' },
        { term: 'non-invasive prenatal testing', definition: 'Cell-free DNA screening for aneuploidy; accuracy related to fetal fraction and hCG levels' },
      ],
      clinicalNotes: 'Expert management of pregnancy-related hCG requires familiarity with assay-specific limitations, isoform biology, and evolving evidence around expectant management of ectopic pregnancy. Always consider phantom hCG in unexplained persistent low-level positivity, and remember that pituitary hCG production can mimic pathology in postmenopausal women.',
    },
  },

  media: [],
  citations: [
    {
      id: 'medlineplus-pregnancy-test',
      type: 'website',
      title: 'Pregnancy Test',
      source: 'MedlinePlus, U.S. National Library of Medicine',
      url: 'https://medlineplus.gov/pregnancytest.html',
      accessedDate: '2025-01-15',
    },
    {
      id: 'aacc-hcg',
      type: 'website',
      title: 'hCG - Lab Tests Online',
      source: 'American Association for Clinical Chemistry (AACC)',
      url: 'https://labtestsonline.org/tests/hcg-pregnancy-test',
      accessedDate: '2025-01-15',
    },
    {
      id: 'acog-ectopic-2018',
      type: 'guideline',
      title: 'ACOG Practice Bulletin No. 193: Tubal Ectopic Pregnancy',
      source: 'American College of Obstetricians and Gynecologists',
      authors: ['ACOG Committee on Practice Bulletins'],
    },
  ],
  crossReferences: [
    { targetId: 'topic-std-screening', targetType: 'topic', relationship: 'related', label: 'STD Screening Tests' },
    { targetId: 'lab-cmp', targetType: 'concept', relationship: 'see-also', label: 'Comprehensive Metabolic Panel' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['pregnancy', 'hCG', 'lab-interpretation', 'obstetrics', 'emergency-medicine'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['obstetrics', 'emergency'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
