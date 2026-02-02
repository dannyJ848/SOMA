/**
 * Hormone Panels - Laboratory Interpretation Content
 *
 * Educational content for hormone panel interpretation including:
 * - Cortisol (AM/PM, random, 24-hr urine), ACTH
 * - Testosterone (total/free), Estradiol, Progesterone
 * - FSH, LH, Prolactin
 * - Growth hormone, IGF-1
 * - DHEA-S, Aldosterone, Renin
 * - Clinical contexts: PCOS, menopause, hypogonadism, Cushing's, Addison's
 *
 * Spanish translations (nameEs) included per SOMA convention.
 */

import { EducationalContent } from '../types';

// =============================================================================
// HORMONE PANELS INTERPRETATION (EducationalContent format)
// =============================================================================

export const hormonePanelsInterpretation: EducationalContent = {
  id: 'hormone-panels-interpretation',
  type: 'concept',
  name: 'Hormone Panel Interpretation',
  alternateNames: ['Endocrine Labs', 'Hormonal Assays', 'Paneles Hormonales'],

  levels: {
    1: {
      level: 1,
      summary:
        'Hormones are chemical messengers in your blood that control many body functions. Doctors test hormone levels to find out why you may feel tired, gain weight, or have trouble with growth or reproduction.',
      explanation: `Hormones are like tiny text messages sent through your blood to tell different parts of your body what to do. They control things like:

- **Energy and stress** — Cortisol helps your body handle stress (Cortisol)
- **Growth** — Growth hormone helps children grow and adults stay healthy (Hormona del Crecimiento)
- **Reproduction** — Testosterone, estrogen, and progesterone control puberty, periods, and fertility (Testosterona, Estrógeno, Progesterona)
- **Blood pressure** — Aldosterone helps control your blood pressure and salt balance (Aldosterona)

**Why do doctors check hormones?**
- You feel very tired or stressed all the time
- A child is growing too slowly or too quickly
- A woman has irregular periods or difficulty getting pregnant
- A man has low energy or muscle loss
- You are gaining or losing weight unexpectedly

The tests usually require a blood sample, sometimes at a specific time of day, because hormone levels change throughout the day.`,
      keyTerms: [
        { term: 'hormone', definition: 'A chemical messenger in your blood that tells organs what to do (hormona)' },
        { term: 'cortisol', definition: 'The "stress hormone" that helps your body deal with stress and control energy (cortisol)' },
        { term: 'testosterone', definition: 'A hormone important for muscle, energy, and male traits (testosterona)' },
        { term: 'estrogen', definition: 'A hormone important for female development and menstrual cycles (estrógeno)' },
      ],
      analogies: [
        'Hormones are like text messages sent through your blood — each one tells a specific organ what to do and when.',
        'Your pituitary gland is like a manager that sends orders (hormones) to workers (organs) throughout the body.',
      ],
      examples: [
        'A teenager visits the doctor because they have not started puberty yet. The doctor checks FSH and LH to see if the hormonal signals are being sent correctly.',
        'A woman with irregular periods has her hormone levels checked to find out if she has PCOS.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Hormone panels measure levels of chemical messengers produced by endocrine glands. Proper interpretation requires understanding normal ranges, diurnal variation, and the hypothalamic-pituitary-target organ feedback loops.',
      explanation: `Hormone panels evaluate the endocrine system — the network of glands that produce chemical messengers controlling metabolism, growth, reproduction, and stress response.

**Adrenal Hormones:**
| Hormone | Spanish | Normal Range | Function |
|---------|---------|-------------|----------|
| Cortisol (AM) | Cortisol | 6–23 mcg/dL (morning) | Stress response, metabolism |
| ACTH | ACTH (Corticotropina) | 10–60 pg/mL (AM) | Stimulates cortisol production |
| DHEA-S | DHEA-S (Sulfato de dehidroepiandrosterona) | Varies by age/sex | Adrenal androgen |
| Aldosterone | Aldosterona | 3–16 ng/dL (upright) | Sodium retention, potassium excretion |
| Renin | Renina | 0.5–4.0 ng/mL/hr | Regulates aldosterone release |

**Reproductive Hormones:**
| Hormone | Spanish | Normal Range | Function |
|---------|---------|-------------|----------|
| Testosterone (total, male) | Testosterona | 300–1000 ng/dL | Male traits, muscle, libido |
| Testosterone (total, female) | Testosterona | 15–70 ng/dL | Small role in libido, bone health |
| Free testosterone | Testosterona libre | 5–21 pg/mL (male) | Biologically active fraction |
| Estradiol (E2) | Estradiol | Varies with cycle | Female development, cycle regulation |
| Progesterone | Progesterona | Varies with cycle | Prepares uterus for pregnancy |
| FSH | FSH (Hormona foliculoestimulante) | Varies with cycle/sex | Stimulates egg/sperm production |
| LH | LH (Hormona luteinizante) | Varies with cycle/sex | Triggers ovulation; stimulates testosterone |
| Prolactin | Prolactina | 2–29 ng/mL (female); 2–18 ng/mL (male) | Milk production |

**Growth-Related Hormones:**
| Hormone | Spanish | Normal Range | Function |
|---------|---------|-------------|----------|
| Growth hormone (GH) | Hormona del crecimiento | < 5 ng/mL (random) | Growth, metabolism |
| IGF-1 | IGF-1 (Factor de crecimiento similar a insulina tipo 1) | Age-dependent | Mediates GH effects |

**Key Principle — Feedback Loops:**
The hypothalamus and pituitary gland control most hormones through negative feedback. When a target hormone is low, the pituitary sends more stimulating hormone. When the target hormone is high, the pituitary sends less.`,
      keyTerms: [
        { term: 'diurnal variation', definition: 'Normal change in hormone levels throughout the day; cortisol is highest in the morning', pronunciation: 'dye-UR-nal' },
        { term: 'negative feedback', definition: 'When a high hormone level signals the brain to produce less stimulating hormone' },
        { term: 'FSH', definition: 'Follicle-Stimulating Hormone; stimulates egg or sperm production (Hormona foliculoestimulante)' },
        { term: 'LH', definition: 'Luteinizing Hormone; triggers ovulation and testosterone production (Hormona luteinizante)' },
      ],
      analogies: [
        'The hypothalamic-pituitary axis is like a thermostat: when the room (blood) gets too warm (too much hormone), the furnace (pituitary) turns down; when it is too cold, the furnace turns up.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Hormone panel interpretation requires understanding of hypothalamic-pituitary-end organ axes, dynamic testing, and pattern recognition for conditions like Cushing syndrome, Addison disease, PCOS, hypogonadism, and menopause.',
      explanation: `## Hormone Panel Interpretation

### Hypothalamic-Pituitary-Adrenal (HPA) Axis

**Cortisol (Cortisol):**
- AM cortisol (8 AM): 6–23 mcg/dL; PM cortisol: < 10 mcg/dL
- 24-hour urine free cortisol (Cortisol libre urinario de 24 horas): 20–90 mcg/day
- Late-night salivary cortisol (Cortisol salival nocturno): < 0.27 mcg/dL

**ACTH (Corticotropina):**
- AM: 10–60 pg/mL
- Interpret WITH cortisol to localize the problem

**Cushing Syndrome Pattern (Síndrome de Cushing):**
| Test | Finding | Interpretation |
|------|---------|----------------|
| 24-hr urine cortisol | > 3x ULN | Confirms hypercortisolism |
| Late-night salivary cortisol | Elevated | Loss of diurnal rhythm |
| Low-dose dexamethasone suppression (1 mg overnight) | AM cortisol > 1.8 mcg/dL | Fails to suppress = abnormal |
| ACTH level | High → pituitary or ectopic; Low → adrenal |

**Addison Disease Pattern (Enfermedad de Addison):**
- AM cortisol < 3 mcg/dL = suggestive
- ACTH elevated (primary) or low (secondary/tertiary)
- Cosyntropin (ACTH) stimulation test: Cortisol should rise to > 18–20 mcg/dL at 30 or 60 min

### Hypothalamic-Pituitary-Gonadal (HPG) Axis

**Female Reproductive Panel:**

| Phase | Estradiol (pg/mL) | Progesterone (ng/mL) | FSH (mIU/mL) | LH (mIU/mL) |
|-------|-------------------|---------------------|---------------|--------------|
| Early follicular | 20–150 | < 1.0 | 3–10 | 2–8 |
| Ovulatory peak | 100–400 | — | 5–25 (surge) | 20–80 (surge) |
| Luteal | 50–250 | 5–20 | 1–8 | 1–10 |
| Postmenopausal | < 20 | < 0.5 | > 25 | > 15 |

**PCOS Pattern (Síndrome de Ovario Poliquístico):**
- LH:FSH ratio > 2:1 (classic, not required for diagnosis)
- Elevated total or free testosterone
- Normal or mildly elevated DHEA-S
- Rotterdam criteria: 2 of 3 — oligo/anovulation, hyperandrogenism, polycystic ovaries on ultrasound

**Menopause Pattern (Menopausia):**
- FSH > 25–30 mIU/mL (consistently elevated)
- Estradiol < 20 pg/mL
- LH elevated

**Male Hypogonadism (Hipogonadismo Masculino):**
- Total testosterone < 300 ng/dL (AM, fasting, on 2 occasions)
- Free testosterone low
- Primary (hypergonadotropic): High FSH/LH → testicular failure
- Secondary (hypogonadotropic): Low/normal FSH/LH → pituitary or hypothalamic cause

**Prolactin (Prolactina):**
- Mild elevation (25–100 ng/mL): Medications (dopamine antagonists), stalk effect, hypothyroidism
- Moderate (100–200 ng/mL): Microprolactinoma vs medications
- Marked (> 200 ng/mL): Macroprolactinoma likely
- Hook effect: Very large prolactinomas may report falsely normal; request serial dilution

### Growth Hormone Axis

**GH (Hormona del Crecimiento):**
- Random GH is unreliable (pulsatile secretion)
- GH deficiency: Provocative testing (insulin tolerance test = gold standard, or glucagon/arginine)
- GH excess (acromegaly): Oral glucose tolerance test — GH should suppress to < 1 ng/mL; failure = acromegaly

**IGF-1 (Factor de crecimiento similar a insulina tipo 1):**
- Reflects integrated GH secretion (stable throughout day)
- Age- and sex-specific reference ranges
- Elevated in acromegaly; low in GH deficiency, malnutrition, liver disease

### Renin-Angiotensin-Aldosterone System (RAAS)

**Aldosterone:Renin Ratio (ARR) — Relación Aldosterona-Renina:**
- Screening for primary aldosteronism (Conn syndrome)
- ARR > 30 with aldosterone > 15 ng/dL = positive screen
- Confirmatory: Salt loading test, fludrocortisone suppression test, or saline infusion test`,
      keyTerms: [
        { term: 'cosyntropin stimulation test', definition: 'Synthetic ACTH injection testing adrenal reserve; cortisol should rise to > 18 mcg/dL', pronunciation: 'koh-SIN-troh-pin' },
        { term: 'Rotterdam criteria', definition: 'Diagnostic criteria for PCOS requiring 2 of 3: oligo/anovulation, hyperandrogenism, polycystic ovaries' },
        { term: 'hook effect', definition: 'Falsely normal prolactin in giant prolactinomas due to antibody saturation; request serial dilution if suspected' },
        { term: 'aldosterone:renin ratio (ARR)', definition: 'Screening test for primary aldosteronism; ARR > 30 with aldosterone > 15 ng/dL is positive' },
      ],
      clinicalNotes:
        'Timing matters: Cortisol and testosterone must be drawn in the early morning (before 10 AM). FSH/LH interpretation requires knowing the menstrual cycle day. Always confirm abnormal screening results with dynamic/confirmatory testing.',
    },
    4: {
      level: 4,
      summary:
        'Advanced hormone interpretation integrates dynamic testing protocols, assay methodologies, binding-protein effects, and algorithmic approaches to complex endocrine diagnoses.',
      explanation: `## Advanced Hormone Panel Interpretation

### Dynamic Testing Protocols

**Cushing Syndrome Workup Algorithm:**

1. **Screening (need 2 of 3 positive):**
   - 24-hr urine free cortisol (UFC) > 3x ULN
   - Late-night salivary cortisol x2 elevated
   - 1 mg overnight DST: AM cortisol > 1.8 mcg/dL

2. **ACTH-dependent vs ACTH-independent:**
   - ACTH > 20 pg/mL → ACTH-dependent (pituitary vs ectopic)
   - ACTH < 5 pg/mL → ACTH-independent (adrenal source)

3. **Differentiating Cushing disease vs ectopic ACTH:**
   - High-dose DST (8 mg): > 50% cortisol suppression favors pituitary
   - CRH stimulation: ACTH rise > 35% favors pituitary
   - Inferior petrosal sinus sampling (IPSS): Central-to-peripheral ACTH ratio > 3:1 (post-CRH) = pituitary source (gold standard)

**Adrenal Insufficiency Workup:**
- AM cortisol < 3 mcg/dL: Virtually diagnostic
- AM cortisol > 15 mcg/dL: Essentially excludes it
- AM cortisol 3–15 mcg/dL: Cosyntropin stimulation test
  - Standard-dose (250 mcg): Cortisol > 18–20 mcg/dL at 30/60 min = normal
  - Low-dose (1 mcg): More sensitive for secondary AI but not widely standardized
- 21-hydroxylase antibodies: Autoimmune adrenalitis (most common cause in developed countries)

### Assay Considerations

**Testosterone Measurement:**
- Immunoassay (standard): Acceptable for males with normal ranges
- Liquid chromatography-tandem mass spectrometry (LC-MS/MS): Gold standard; required for female testosterone, pediatric, and low-range values
- Calculated free testosterone (Vermeulen equation) preferred over analog free T assays (unreliable)
- SHBG measurement essential: Obesity, diabetes → low SHBG → low total T but possibly normal free T

**Cortisol Measurement:**
- Most immunoassays measure total cortisol (bound + free)
- CBG (cortisol-binding globulin) changes affect total cortisol:
  - Elevated CBG: Pregnancy, OCPs, estrogen therapy → falsely high total cortisol
  - Low CBG: Nephrotic syndrome, cirrhosis, critical illness → falsely low total cortisol
- Salivary cortisol measures free cortisol (not affected by CBG changes)
- Synthetic glucocorticoids (prednisolone, dexamethasone) cross-react variably

**Prolactin:**
- Macroprolactin (big-big prolactin): Biologically inactive; causes falsely elevated prolactin
- PEG precipitation removes macroprolactin; request if elevation is asymptomatic
- Monomeric (bioactive) prolactin = clinically relevant

### Complex Clinical Patterns

**Functional Hypothalamic Amenorrhea (Amenorrea hipotalámica funcional):**
- Low FSH, LH, estradiol
- Caused by stress, weight loss, excessive exercise
- Diagnosis of exclusion (rule out pituitary lesion, thyroid disease, pregnancy)
- GnRH stimulation test can confirm hypothalamic cause

**Non-Classic Congenital Adrenal Hyperplasia (Hiperplasia suprarrenal congénita no clásica):**
- 17-hydroxyprogesterone (17-OHP) > 200 ng/dL baseline or > 1000 ng/dL post-cosyntropin
- Common in PCOS workup; prevalence 1–5% depending on ethnicity
- CYP21A2 mutations most common

**Subclinical Cushing Syndrome (Adrenal Incidentaloma):**
- 1 mg DST with cortisol 1.8–5.0 mcg/dL = possible autonomous cortisol secretion
- Additional tests: DHEA-S (suppressed), midnight cortisol, ACTH (suppressed)
- Associated with metabolic syndrome, osteoporosis, cardiovascular risk

### Aldosterone and Renin — Advanced Interpretation

**Primary Aldosteronism Workup (Aldosteronismo primario):**
1. Screen: ARR > 30 + aldosterone > 15 ng/dL
2. Confirm: Saline infusion test (aldosterone > 10 ng/dL after 2L NS = positive)
3. Subtype: CT adrenals + adrenal vein sampling (AVS) if surgical candidate
   - Lateralization ratio > 4:1 suggests unilateral adenoma (surgery)
   - Bilateral = bilateral adrenal hyperplasia (spironolactone/eplerenone)

**Medication Interference with RAAS Testing:**
| Drug | Effect on Aldosterone | Effect on Renin | Effect on ARR |
|------|----------------------|-----------------|---------------|
| ACE-I / ARB | ↓ | ↑ | ↓ (false negative) |
| Beta-blockers | — | ↓ | ↑ (false positive) |
| Spironolactone | ↑ | ↑ | Unreliable |
| MRA recommended washout: 6 weeks spironolactone; 2 weeks for others |`,
      keyTerms: [
        { term: 'inferior petrosal sinus sampling (IPSS)', definition: 'Interventional procedure comparing pituitary venous ACTH to peripheral; gold standard for Cushing disease vs ectopic ACTH' },
        { term: 'SHBG', definition: 'Sex Hormone-Binding Globulin; carrier protein that affects bioavailable testosterone; low in obesity, high with estrogen/liver disease' },
        { term: 'macroprolactin', definition: 'Biologically inactive prolactin-IgG complex causing falsely elevated total prolactin; detected by PEG precipitation' },
        { term: '17-hydroxyprogesterone', definition: 'Steroid precursor elevated in congenital adrenal hyperplasia (21-hydroxylase deficiency)' },
      ],
      clinicalNotes:
        'Assay methodology matters: LC-MS/MS is the gold standard for sex steroids but not universally available. Always account for binding proteins (SHBG, CBG) and consider free hormone levels when total levels are borderline. Dynamic testing remains essential for definitive endocrine diagnoses.',
    },
    5: {
      level: 5,
      summary:
        'Expert hormone analysis encompasses precision endocrinology, genetic testing, rare endocrine tumors, multidisciplinary case resolution, and evidence-based guideline application in complex clinical scenarios.',
      explanation: `## Expert-Level Hormone Panel Analysis

### Precision Endocrinology and Genetics

**Congenital Adrenal Hyperplasia (CAH) — Molecular (Hiperplasia suprarrenal congénita):**
- CYP21A2 genotype-phenotype correlation:
  - Classic salt-wasting: Null/null, severe loss of 21-hydroxylase
  - Classic simple virilizing: I2 splice, I172N
  - Non-classic: V281L, P30L (mild enzyme impairment)
- Genotyping guides genetic counseling and prenatal management
- Adrenal steroid profiles by LC-MS/MS for comprehensive evaluation

**Genetic Causes of Hypogonadism:**
| Condition | Gene(s) | Presentation |
|-----------|---------|-------------|
| Klinefelter (47,XXY) | — | Male hypogonadism, tall, gynecomastia |
| Turner (45,X) | — | Female, short stature, streak gonads |
| Kallmann syndrome | KAL1, FGFR1, others | Hypogonadotropic hypogonadism + anosmia |
| GnRH receptor mutation | GNRHR | Isolated hypogonadotropic hypogonadism |
| 5-alpha reductase deficiency | SRD5A2 | 46,XY DSD, virilization at puberty |
| Androgen insensitivity | AR gene | 46,XY DSD, female phenotype (complete) |

### Multiple Endocrine Neoplasia (MEN) Syndromes

| Syndrome | Gene | Endocrine Tumors | Key Labs |
|----------|------|-----------------|----------|
| MEN1 | MEN1 (menin) | Parathyroid, pituitary, pancreatic NETs | Calcium, PTH, prolactin, gastrin, insulin |
| MEN2A | RET | Medullary thyroid Ca, pheo, parathyroid | Calcitonin, metanephrines, calcium |
| MEN2B | RET | Medullary thyroid Ca, pheo, mucosal neuromas | Calcitonin, metanephrines |
| MEN4 | CDKN1B | Parathyroid, pituitary (rare) | Calcium, PTH, pituitary hormones |

### Pheochromocytoma/Paraganglioma (Feocromocitoma/Paraganglioma)

**Biochemical Diagnosis:**
- Plasma free metanephrines (metanefrinas libres en plasma): Sensitivity 97–99%, specificity 85–89%
- 24-hr urine fractionated metanephrines + catecholamines: Sensitivity 90–97%
- Plasma metanephrines > 3x ULN = virtually diagnostic
- Borderline elevations: Clonidine suppression test — normal response = plasma normetanephrine suppression to < 40% of baseline

**Genetic Testing Recommendations:**
- All pheochromocytomas: Consider germline testing (SDHx, VHL, RET, NF1, MAX, TMEM127)
- 40% of pheochromocytomas have germline mutations
- SDHx mutations: Increased paraganglioma risk, lifetime surveillance needed

### Acromegaly — Advanced Evaluation (Acromegalia)

**Diagnostic Algorithm:**
1. Elevated IGF-1 for age/sex → Confirmatory OGTT
2. OGTT: GH nadir > 1.0 ng/mL (older assays) or > 0.4 ng/mL (ultrasensitive) = positive
3. Pituitary MRI → Macroadenoma (75%), microadenoma, or negative
4. If MRI negative + confirmed: Consider ectopic GHRH-secreting tumor (measure GHRH)

**Post-Surgical Monitoring:**
- Day 1 post-op GH < 1 ng/mL = remission predictor
- 12-week IGF-1 and OGTT for definitive assessment
- Discordant GH/IGF-1: Assay interference, liver disease, poorly controlled diabetes, estrogen therapy

### Complex Diagnostic Scenarios

**Pseudo-Cushing States (Estados de pseudo-Cushing):**
- Alcohol use disorder, depression, obesity, poorly controlled diabetes
- CRH-DST (Dex-CRH test): Cortisol > 1.4 mcg/dL after CRH = true Cushing; < 1.4 = pseudo-Cushing
- If equivocal: Midnight serum cortisol (inpatient) or repeat screening after addressing confounder

**Late-Onset (Non-Classic) CAH vs PCOS:**
| Feature | NCAH | PCOS |
|---------|------|------|
| 17-OHP (AM baseline) | > 200 ng/dL | < 200 ng/dL usually |
| 17-OHP post-cosyntropin | > 1000 ng/dL | < 1000 ng/dL |
| DHEA-S | Moderately elevated | Mildly elevated or normal |
| Prevalence | 1–5% | 6–12% |
- Both may coexist; genetic testing (CYP21A2) is definitive

**Critical Illness-Related Corticosteroid Insufficiency (CIRCI):**
- Total cortisol may be misleadingly low due to low CBG/albumin
- Random cortisol < 10 mcg/dL or delta cortisol < 9 mcg/dL after cosyntropin = CIRCI
- Free cortisol assays not yet standardized for clinical use
- SCCM guidelines: Hydrocortisone 200 mg/day IV for refractory septic shock

### Evidence-Based Guideline Summary

| Condition | Key Guideline | Diagnostic Gold Standard |
|-----------|---------------|------------------------|
| Cushing syndrome | Endocrine Society 2008 | 24-hr UFC, late-night salivary cortisol, 1 mg DST |
| Primary AI | Endocrine Society 2016 | AM cortisol + cosyntropin stimulation |
| Male hypogonadism | AUA/Endocrine Society 2018 | 2 AM total testosterone (LC-MS/MS) |
| PCOS | Rotterdam 2003/International 2023 | Clinical/biochemical hyperandrogenism + oligo/anovulation |
| Primary aldosteronism | Endocrine Society 2016 | ARR screen → confirmatory → subtype with AVS |
| Acromegaly | Endocrine Society 2014 | IGF-1 + OGTT |
| Pheochromocytoma | Endocrine Society 2014 | Plasma free metanephrines |

### Spanish Terminology Quick Reference

| English | Spanish |
|---------|---------|
| Cortisol | Cortisol |
| ACTH | Hormona adrenocorticotrópica (ACTH) |
| Testosterone | Testosterona |
| Estradiol | Estradiol |
| Progesterone | Progesterona |
| FSH | Hormona foliculoestimulante (FSH) |
| LH | Hormona luteinizante (LH) |
| Prolactin | Prolactina |
| Growth Hormone | Hormona del crecimiento (GH) |
| IGF-1 | Factor de crecimiento similar a insulina tipo 1 |
| DHEA-S | Sulfato de dehidroepiandrosterona |
| Aldosterone | Aldosterona |
| Renin | Renina |
| Cushing syndrome | Síndrome de Cushing |
| Addison disease | Enfermedad de Addison |
| PCOS | Síndrome de ovario poliquístico (SOP) |
| Hypogonadism | Hipogonadismo |
| Menopause | Menopausia |`,
      keyTerms: [
        { term: 'Dex-CRH test', definition: 'Combined dexamethasone-CRH stimulation test distinguishing true Cushing syndrome from pseudo-Cushing states' },
        { term: 'plasma free metanephrines', definition: 'Most sensitive test for pheochromocytoma (97–99%); measures methylated catecholamine metabolites' },
        { term: 'SDHx mutations', definition: 'Succinate dehydrogenase subunit gene mutations predisposing to hereditary paraganglioma/pheochromocytoma syndromes' },
        { term: 'CIRCI', definition: 'Critical Illness-Related Corticosteroid Insufficiency; relative adrenal insufficiency in septic shock' },
      ],
      clinicalNotes:
        'Expert endocrine diagnosis requires integration of biochemistry, imaging, genetics, and clinical phenotype. Dynamic testing protocols must be performed under standardized conditions. Assay methodology (immunoassay vs LC-MS/MS) significantly impacts result interpretation, particularly for sex steroids and cortisol in special populations (pregnancy, critical illness, OCP use).',
    },
  },

  media: [],
  citations: [
    {
      id: 'williams-endocrinology',
      type: 'textbook',
      title: 'Williams Textbook of Endocrinology',
      authors: ['Melmed S', 'Auchus RJ', 'Goldfine AB'],
      source: 'Elsevier',
    },
    {
      id: 'endocrine-society-guidelines',
      type: 'website',
      title: 'Endocrine Society Clinical Practice Guidelines',
      source: 'Endocrine Society',
      url: 'https://www.endocrine.org/clinical-practice-guidelines',
    },
  ],
  crossReferences: [
    { targetId: 'lab-cortisol', targetType: 'concept', relationship: 'child' },
    { targetId: 'lab-testosterone', targetType: 'concept', relationship: 'child' },
    { targetId: 'lab-estradiol', targetType: 'concept', relationship: 'child' },
    { targetId: 'lab-fsh', targetType: 'concept', relationship: 'child' },
    { targetId: 'lab-prolactin', targetType: 'concept', relationship: 'child' },
    { targetId: 'lab-aldosterone', targetType: 'concept', relationship: 'child' },
  ],
  tags: {
    systems: ['endocrine', 'reproductive'],
    topics: ['laboratory', 'endocrinology', 'reproduction', 'diagnosis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'ob-gyn', 'pediatrics'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
