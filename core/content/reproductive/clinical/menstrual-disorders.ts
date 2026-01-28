/**
 * Menstrual Disorders - Reproductive Medicine
 *
 * Comprehensive content on menstrual disorders including amenorrhea,
 * abnormal uterine bleeding, dysmenorrhea, PMS/PMDD, and menorrhagia
 * with diagnosis and management approaches.
 */

import { EducationalContent } from '../../types';

export const menstrualDisorders: EducationalContent = {
  id: 'reproductive-menstrual-disorders',
  type: 'condition',
  name: 'Menstrual Disorders',
  alternateNames: ['Menstrual Irregularities', 'Abnormal Uterine Bleeding', 'Dysfunctional Uterine Bleeding'],

  levels: {
    1: {
      level: 1,
      summary: 'Menstrual disorders are problems with a woman\'s monthly period. They include missing periods, very heavy bleeding, severe cramps, or bleeding between periods.',
      explanation: `## What Are Menstrual Disorders?

Menstrual disorders are problems related to a woman\'s monthly period (menstruation). A normal period usually happens every 21-35 days and lasts 3-7 days.

### Common Types of Menstrual Problems

**1. Periods That Do Not Come (Amenorrhea)**
- Primary: Never had a period by age 15
- Secondary: Periods stop for 3+ months (if regular) or 6+ months (if irregular)

**2. Very Heavy Periods (Menorrhagia)**
- Bleeding longer than 7 days
- Soaking through a pad or tampon every hour
- Passing large blood clots

**3. Severe Cramps (Dysmenorrhea)**
- Pain that keeps you from normal activities
- Pain that does not improve with over-the-counter medicine
- Pain with nausea, vomiting, or diarrhea

**4. Bleeding Between Periods (Metrorrhagia)**
- Spotting between regular periods
- Bleeding after sex
- Unpredictable bleeding

**5. Premenstrual Syndrome (PMS)**
- Mood changes before period
- Bloating, breast tenderness
- Irritability, sadness

### When to See a Doctor

- Periods that stop suddenly
- Bleeding that lasts more than 7 days
- Severe pain with periods
- Bleeding between periods or after sex
- Signs of too much blood loss (fatigue, dizziness)

### Common Causes

- Hormone imbalances
- Stress or weight changes
- Polycystic ovary syndrome (PCOS)
- Thyroid problems
- Uterine growths (fibroids, polyps)
- Certain medications
- Pregnancy or menopause`,
      keyTerms: [
        { term: 'menstruation', definition: 'The monthly shedding of the uterine lining, also called a period' },
        { term: 'amenorrhea', definition: 'The absence of menstrual periods' },
        { term: 'menorrhagia', definition: 'Very heavy or prolonged menstrual bleeding' },
        { term: 'dysmenorrhea', definition: 'Painful menstrual cramps' },
        { term: 'PMS', definition: 'Physical and emotional symptoms that occur before a period' },
      ],
      analogies: [
        'The menstrual cycle is like the seasons - regular changes that happen in a pattern. When the pattern is disrupted, it is like having winter in summer.',
        'Heavy periods are like a faucet that will not turn off properly - instead of a steady flow, there is too much bleeding.',
      ],
      examples: [
        'A teenager who has not had a period by age 16 should see a doctor',
        'Changing a pad every hour for several hours is a sign of heavy bleeding',
        'Missing 3 periods in a row when you usually have regular periods needs evaluation',
      ],
      patientCounselingPoints: [
        'Keep track of your periods - write down when they start and end',
        'Note any symptoms like pain, mood changes, or heavy bleeding',
        'Most menstrual problems can be treated once the cause is found',
        'Do not ignore severe pain or very heavy bleeding - seek medical help',
      ],
    },
    2: {
      level: 2,
      summary: 'Menstrual disorders encompass a spectrum of abnormalities in cycle regularity, duration, flow, and associated symptoms. Evaluation involves history, examination, and targeted testing to identify underlying etiologies including endocrine disorders, anatomic abnormalities, and systemic conditions.',
      explanation: `## Classification of Menstrual Disorders

### Abnormal Uterine Bleeding (AUB) - PALM-COEIN System

**Structural Causes (PALM):**
- **P**olyp: Endometrial or cervical polyps
- **A**denomyosis: Endometrial tissue in myometrium
- **L**eiomyoma: Fibroids (submucosal, other)
- **M**alignancy/hyperplasia: Endometrial cancer or precancer

**Non-Structural Causes (COEIN):**
- **C**oagulopathy: Bleeding disorders
- **O**vulatory dysfunction: Anovulation, PCOS
- **E**ndometrial: Primary endometrial disorder
- **I**atrogenic: Medications, devices
- **N**ot yet classified: Rare conditions

### Types of Menstrual Disorders

**1. Amenorrhea**

Primary amenorrhea:
- No menarche by age 15 with normal growth/secondary sexual characteristics
- No menarche by age 13 without secondary sexual characteristics

Secondary amenorrhea:
- Absence of menses for >3 months (if previously regular)
- Absence of menses for >6 months (if previously irregular)

Common etiologies:
| Category | Examples |
|----------|----------|
| Pregnancy | Most common cause of secondary amenorrhea |
| Hypothalamic | Stress, weight loss, excessive exercise |
| Pituitary | Prolactinoma, hypopituitarism |
| Ovarian | PCOS, premature ovarian insufficiency |
| Uterine | Asherman syndrome (scarring) |
| Endocrine | Thyroid disease, hyperprolactinemia |

**2. Abnormal Uterine Bleeding Patterns**

| Term | Definition |
|------|------------|
| Menorrhagia | Heavy or prolonged bleeding at regular intervals |
| Metrorrhagia | Bleeding at irregular intervals |
| Menometrorrhagia | Heavy bleeding at irregular intervals |
| Oligomenorrhea | Cycles >35 days |
| Polymenorrhea | Cycles <21 days |

**3. Dysmenorrhea**

Primary: Pain without underlying pathology
- Prostaglandin-mediated uterine contractions
- Onset: Usually 6-12 months after menarche
- Peak: Late teens to early 20s

Secondary: Pain due to underlying condition
- Endometriosis (most common cause)
- Adenomyosis
- Fibroids
- Pelvic inflammatory disease
- Cervical stenosis

**4. Premenstrual Disorders**

PMS (Premenstrual Syndrome):
- Physical and emotional symptoms
- Occur in luteal phase, resolve with menses
- Affect daily functioning

PMDD (Premenstrual Dysphoric Disorder):
- Severe mood symptoms
- DSM-5 diagnosis
- Significant functional impairment

### Evaluation Approach

**History Components:**
- Menstrual history: Age at menarche, cycle length, duration, flow
- Bleeding pattern: Timing, amount, clots
- Associated symptoms: Pain, mood changes
- Sexual history: Contraception, STI risk
- Medical history: Bleeding disorders, thyroid disease
- Medications: Anticoagulants, hormones

**Physical Examination:**
- Vital signs (signs of anemia)
- BMI, hirsutism, acne
- Pelvic examination

**Initial Testing:**
- Pregnancy test (always!)
- CBC (anemia assessment)
- TSH (thyroid function)
- Prolactin (if indicated)
- Pelvic ultrasound
- Consider: Coagulation studies (if heavy bleeding since menarche)`,
      keyTerms: [
        { term: 'PALM-COEIN', definition: 'Classification system for causes of abnormal uterine bleeding' },
        { term: 'anovulation', definition: 'Lack of ovulation (egg release) during a menstrual cycle' },
        { term: 'menarche', definition: 'The first occurrence of menstruation' },
        { term: 'Asherman syndrome', definition: 'Intrauterine scarring causing amenorrhea or infertility' },
        { term: 'prostaglandins', definition: 'Hormone-like substances that cause uterine contractions and pain' },
      ],
      analogies: [
        'The PALM-COEIN system is like organizing a messy closet - it helps categorize bleeding problems into structural (things you can see) and functional (things you cannot see) causes.',
        'Primary dysmenorrhea is like muscle cramps after exercise - the uterus is contracting strongly without any disease being present.',
      ],
      examples: [
        'A 28-year-old with cycles every 45-60 days likely has anovulatory cycles (PCOS)',
        'Heavy bleeding since first period may indicate a bleeding disorder like von Willebrand disease',
        'Severe cramps that begin later in life (20s-30s) suggest secondary dysmenorrhea like endometriosis',
      ],
      patientCounselingPoints: [
        'Always rule out pregnancy first when periods are abnormal',
        'Track your cycles using a calendar or app - this helps your doctor diagnose problems',
        'Losing more than 80 mL of blood per period (about 16 soaked pads) is considered heavy',
        'Severe cramps are not normal - they can be treated once the cause is identified',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive evaluation of menstrual disorders requires understanding of the hypothalamic-pituitary-ovarian axis, targeted diagnostic testing, and evidence-based management strategies including hormonal therapies, surgical interventions, and lifestyle modifications.',
      explanation: `## Detailed Evaluation and Diagnosis

### Hypothalamic-Pituitary-Ovarian Axis Review

**Normal Menstrual Cycle Hormones:**

---
Follicular Phase (Days 1-14):
  - GnRH pulsatility stimulates FSH
  - FSH recruits follicles
  - Rising estradiol negative feedback
  - Endometrial proliferation

Ovulation (Mid-cycle):
  - Estradiol positive feedback triggers LH surge
  - Follicle ruptures, egg released
  - Corpus luteum forms

Luteal Phase (Days 15-28):
  - Corpus luteum produces progesterone
  - Endometrial secretory changes
  - If no pregnancy, luteolysis occurs
  - Menses begins
---

### Diagnostic Workup by Presentation

**Amenorrhea Evaluation:**

Step 1: Rule out pregnancy (hCG)
Step 2: Assess estrogen status
  - Progestin challenge (10 days medroxyprogesterone)
    - Withdrawal bleed: Estrogen present, anovulatory
    - No bleed: Low estrogen or outflow obstruction

Step 3: Determine etiology

Low/Normal FSH with withdrawal bleed:
- Hypothalamic dysfunction (stress, exercise, eating disorder)
- PCOS
- Thyroid disease
- Hyperprolactinemia

High FSH:
- Premature ovarian insufficiency
- Menopause

Low FSH with no withdrawal bleed:
- Hypothalamic amenorrhea
- Pituitary disease (prolactinoma, Sheehan syndrome)

Normal labs, no withdrawal bleed:
- Outflow tract obstruction (Asherman, cervical stenosis)
- Imperforate hymen (if primary amenorrhea)

**Heavy Menstrual Bleeding Workup:**

Laboratory:
- CBC with iron studies (ferritin)
- Pregnancy test
- TSH
- Coagulation studies (if onset at menarche - vWD, platelet function)
- LH, FSH, testosterone (if PCOS suspected)

Imaging:
- Transvaginal ultrasound (first-line)
- Saline infusion sonography (SIS) - better for polyps/submucosal fibroids
- MRI (adenomyosis, complex fibroids)
- Hysteroscopy (direct visualization + biopsy)

**Dysmenorrhea Evaluation:**

Primary dysmenorrhea:
- Diagnosis of exclusion
- Normal pelvic exam
- Onset shortly after menarche
- Responds to NSAIDs/OCPs

Secondary dysmenorrhea:
- Pelvic exam findings may be abnormal
- Onset later (20s-30s)
- May not respond to first-line therapy
- Consider:
  - Transvaginal ultrasound
  - MRI (endometriosis, adenomyosis)
  - Laparoscopy (diagnostic and therapeutic)

### Management Approaches

**Acute Heavy Bleeding:**

Medical:
- High-dose estrogen (stabilizes endometrium)
- Tranexamic acid (antifibrinolytic)
- IV conjugated estrogens (if hemodynamically unstable)
- Blood transfusion (if severe anemia)

Surgical (if medical fails):
- Dilation and curettage (D&C)
- Uterine artery embolization

**Chronic AUB Management:**

| Etiology | Medical Treatment | Surgical Options |
|----------|------------------|------------------|
| Anovulation | Combined hormonal contraceptives, cyclic progestins | Endometrial ablation (if childbearing complete) |
| Fibroids | GnRH agonists, ulipristal, TXA | Myomectomy, UAE, hysterectomy |
| Adenomyosis | LNG-IUD, combined OCPs, GnRH agonists | Hysterectomy |
| Endometrial polyps | Progestins (limited) | Hysteroscopic polypectomy |
| Coagulopathy | TXA, hormonal suppression | Endometrial ablation, hysterectomy |

**Dysmenorrhea Treatment:**

Primary:
- NSAIDs (ibuprofen, naproxen) - start 1-2 days before menses
- Combined hormonal contraceptives
- Heat therapy
- Exercise

Secondary (address underlying cause):
- Endometriosis: GnRH agonists, progestins, combined OCPs, surgery
- Adenomyosis: LNG-IUD, GnRH agonists, hysterectomy
- Fibroids: Myomectomy if submucosal

**PMS/PMDD Management:**

Lifestyle:
- Regular exercise
- Stress reduction
- Calcium supplementation (1200 mg/day)
- Limit caffeine, alcohol, salt

Medications:
- SSRIs (first-line for PMDD): Fluoxetine, sertraline
  - Luteal phase only or continuous dosing
- Combined hormonal contraceptives (especially drospirenone-containing)
- GnRH agonists with add-back (severe cases)
- Oophorectomy (last resort, definitive)`,
      keyTerms: [
        { term: 'progestin challenge', definition: 'Administration of progestin to assess estrogen status and endometrial function' },
        { term: 'tranexamic acid', definition: 'Antifibrinolytic medication used to reduce heavy bleeding' },
        { term: 'endometrial ablation', definition: 'Procedure to destroy the uterine lining to reduce bleeding' },
        { term: 'GnRH agonist', definition: 'Medication that initially stimulates then suppresses gonadotropin release' },
        { term: 'luteal phase', definition: 'Second half of menstrual cycle after ovulation when progesterone dominates' },
      ],
      analogies: [
        'The progestin challenge test is like checking if a plant has water - if it perks up (bleeds), there was estrogen present; if not, something else is wrong.',
        'Tranexamic acid works like a patch on a leaky pipe - it helps the blood clot and stops excessive bleeding.',
      ],
      examples: [
        'A progestin challenge with withdrawal bleed confirms presence of estrogen and patent outflow tract',
        'Adolescents with heavy bleeding since menarche should be screened for von Willebrand disease',
        'LNG-IUD reduces menstrual blood loss by 90% in most women by 12 months',
      ],
      clinicalNotes: 'Always perform a pregnancy test before evaluating amenorrhea - pregnancy is the most common cause of secondary amenorrhea. In adolescents with heavy menstrual bleeding since menarche, von Willebrand disease prevalence is 5-20%, much higher than the general population.',
    },
    4: {
      level: 4,
      summary: 'Complex menstrual disorders require specialized diagnostic approaches including hysteroscopy, advanced imaging, and endocrine evaluation. Management in special populations (adolescents, perimenopause, medically complex) requires tailored approaches balancing efficacy, fertility preservation, and long-term health.',
      explanation: `## Advanced Management of Menstrual Disorders

### Surgical Interventions

**Hysteroscopy:**

Indications:
- Focal intracavitary lesions (polyps, submucosal fibroids)
- Abnormal imaging requiring tissue diagnosis
- Retained products of conception
- Uterine septum
- Intrauterine adhesions (Asherman syndrome)

Techniques:
- Diagnostic hysteroscopy
- Operative hysteroscopy (polypectomy, myomectomy, lysis of adhesions, septoplasty)
- Resectoscopic procedures

Complications:
- Uterine perforation
- Fluid overload (hypo-/hyper-natremia)
- Infection
- Air embolism (rare but serious)

**Myomectomy:**

Approaches by fibroid location:
- Hysteroscopic: Submucosal (Types 0, 1, 2)
- Laparoscopic: Intramural, subserosal (depending on size/number)
- Open: Multiple large fibroids

Preoperative optimization:
- GnRH agonists: Reduce size, decrease vascularity
- Iron supplementation for anemia

**Endometrial Ablation:**

Techniques:
- Thermal balloon
- Radiofrequency
- Cryoablation
- Microwave
- Hydrothermal

Selection criteria:
- Completed childbearing
- Uterine size <10 weeks
- No contraindicating pathology (endometrial hyperplasia, large fibroids)

Outcomes:
- 90% satisfied at 1 year
- 15-40% require repeat procedure or hysterectomy by 5 years
- Pregnancy possible (high-risk) - reliable contraception essential

**Hysterectomy:**

Definitive treatment for:
- Failed medical management
- Adenomyosis (if refractory)
- Endometrial hyperplasia with atypia
- Patient preference

Routes:
- Vaginal (preferred when feasible)
- Laparoscopic/robotic
- Abdominal (large uterus, extensive adhesions)

### Special Populations

**Adolescents:**

Common presentations:
- Irregular cycles (common first 2-3 years post-menarche)
- Heavy bleeding (anovulatory cycles common)
- Dysmenorrhea

Management considerations:
- Anovulatory bleeding often normal initially
- Coagulopathy screening if heavy since menarche
- LNG-IUD and implant appropriate (IUD: nulliparous not contraindication)
- Combined OCPs regulate cycles and treat acne
- Avoid D&C (increased Asherman risk)

**Perimenopause:**

Characteristics:
- Cycle irregularity (shorter or longer)
- Anovulatory cycles common
- Heavy bleeding episodes
- Vasomotor symptoms

Management:
- Exclude endometrial pathology (biopsy if risk factors or persistent bleeding)
- LNG-IUD highly effective
- Combined OCPs (if no contraindications) for cycle control and symptoms
- Cyclic progestins
- Endometrial ablation if completed childbearing

**Medically Complex Patients:**

Anticoagulated patients:
- Coordinate with hematology
- Tranexamic acid generally safe (not absolute contraindication)
- LNG-IUD effective
- Endometrial ablation/hysterectomy if appropriate

Obesity:
- Higher risk of anovulation (PCOS)
- Endometrial cancer risk
- Transvaginal ultrasound may be technically difficult
- MRI useful alternative

**Fertility-Preserving Approaches:**

For women desiring future fertility:
- Myomectomy instead of hysterectomy
- Endometrial polypectomy
- Asherman syndrome: Hysteroscopic lysis of adhesions with postoperative estrogen
- Medical management preferred over ablation

### Endometrial Pathology

**Endometrial Hyperplasia:**

Types (WHO classification):
- Hyperplasia without atypia: Excess estrogen effect, low cancer risk
- Atypical hyperplasia/EIN: Precancerous, 30-40% progress to cancer

Management:
- Without atypia: Progestins (oral, LNG-IUD), weight loss, follow-up biopsy
- With atypia: Hysterectomy (definitive) or fertility-sparing progestin therapy with close surveillance

**Endometrial Cancer:**

Risk factors:
- Unopposed estrogen (obesity, PCOS, anovulation)
- Tamoxifen use
- Lynch syndrome
- Age >45 with abnormal bleeding (always evaluate)

Presentation:
- Postmenopausal bleeding (90% with cancer have bleeding)
- Perimenopausal irregular bleeding
- Premenopausal heavy/prolonged bleeding

Diagnosis:
- Endometrial biopsy (office)
- Dilation and curettage (if insufficient tissue)
- Hysteroscopy with directed biopsy (most accurate)`,
      keyTerms: [
        { term: 'EIN', definition: 'Endometrial Intraepithelial Neoplasia - precursor lesion to endometrial cancer' },
        { term: 'submucosal fibroid', definition: 'Fibroid that protrudes into the uterine cavity' },
        { term: 'Asherman syndrome', definition: 'Intrauterine adhesions causing amenorrhea, infertility, or recurrent pregnancy loss' },
        { term: 'Lynch syndrome', definition: 'Hereditary cancer syndrome with increased endometrial and colorectal cancer risk' },
        { term: 'fluid overload', definition: 'Complication of hysteroscopy from absorption of distension media' },
      ],
      clinicalNotes: 'Postmenopausal bleeding is endometrial cancer until proven otherwise - always evaluate with transvaginal ultrasound (endometrial thickness threshold >4-5 mm) or endometrial biopsy. In women with Lynch syndrome, consider risk-reducing hysterectomy after completing childbearing.',
    },
    5: {
      level: 5,
      summary: 'Expert-level management of menstrual disorders involves complex decision-making in rare conditions, integration of molecular diagnostics, fertility preservation strategies, and addressing health disparities while staying current with evolving surgical techniques and novel therapeutics.',
      explanation: `## Complex and Rare Menstrual Disorders

### Rare Causes of Menstrual Disorders

**Mullerian Anomalies:**

Classification (ASRM/ESHRE):
- Class I: Segmental agenesis/hypoplasia
- Class II: Unicornuate uterus
- Class III: Uterus didelphys
- Class IV: Bicornuate uterus
- Class V: Septate uterus
- Class VI: Arcuate uterus
- Class VII: DES-related anomalies

Diagnosis:
- 3D ultrasound
- MRI (gold standard)
- Hysteroscopy + laparoscopy (combined)

Management:
- Septate uterus: Hysteroscopic metroplasty (improves pregnancy outcomes)
- Other anomalies: Individualized, often obstetric monitoring

**Cervical Agenesis:**
- Rare (1:80,000-100,000)
- Presents as primary amenorrhea with cyclic pain
- Normal ovaries and uterine fundus
- Management: Uterovaginal anastomosis vs hysterectomy

**Androgen Insensitivity Syndrome (AIS):**
- 46,XY karyotype
- Presents as primary amenorrhea in phenotypic female
- Absent uterus, scant pubic/axillary hair
- Management: Gonadectomy after puberty (cancer risk), hormone replacement

**Mayer-Rokitansky-Kuster-Hauser (MRKH) Syndrome:**
- Mullerian agenesis
- Presents as primary amenorrhea with normal secondary sexual characteristics
- Normal karyotype (46,XX)
- Associated renal and skeletal anomalies
- Management: Vaginal dilation vs surgery, psychological support

### Molecular and Genetic Diagnostics

**Genetic Causes of Primary Amenorrhea:**

| Condition | Gene/Karyotype | Features |
|-----------|---------------|----------|
| Turner syndrome | 45,X | Short stature, webbed neck, streak ovaries |
| Swyer syndrome | 46,XY (SRY mutation) | Female phenotype, gonadal dysgenesis, cancer risk |
| CAIS | AR gene | Female phenotype, absent uterus |
| 17-alpha hydroxylase deficiency | CYP17A1 | Hypertension, absent puberty |
| GnRH deficiency | KAL1, FGFR1, PROK2 | Anosmia (Kallmann syndrome) |

**Genetic Testing in Menorrhagia:**
- von Willebrand disease genetic testing
- Platelet function disorder panels
- Coagulation factor mutations

**Endometrial Cancer Genomics:**
- TCGA molecular classification:
  - POLE ultramutated (excellent prognosis)
  - MSI hypermutated (intermediate prognosis)
  - Copy-number low (NSMP - no specific molecular profile)
  - Copy-number high (serous-like, poor prognosis)
- Guides adjuvant therapy decisions

### Novel Therapeutics

**Uterine Fibroids:**

Selective progesterone receptor modulators (SPRMs):
- Ulipristal acetate (5 mg daily)
- Preoperative shrinkage
- Long-term management (intermittent courses)
- Risk of endometrial changes (PAEC) requiring monitoring

GnRH antagonists with add-back:
- Elagolix, relugolix
- Oral administration
- Faster onset than agonists
- Fewer hypoestrogenic side effects with add-back

**Heavy Menstrual Bleeding:**

Oral GnRH antagonists:
- Same-day suppression of bleeding
- Useful for acute control
- Short-term use due to bone loss risk

**Endometriosis:**

GnRH antagonists:
- Elagolix (first approved oral GnRH antagonist for endometriosis pain)
- Dose-dependent suppression
- Add-back therapy recommended

Emerging targets:
- Aromatase inhibitors
- Angiogenesis inhibitors
- Immunomodulators

### Surgical Innovations

**Robotic Surgery:**
- Myomectomy: Improved suturing capabilities
- Hysterectomy: Equivalent outcomes to laparoscopic
- Cost considerations

**Single-Incision Laparoscopic Surgery (SILS):**
- Cosmetic benefits
- Technical challenges
- Limited applications

**Vaginal Natural Orifice Transluminal Endoscopic Surgery (vNOTES):**
- Hysterectomy via vaginal route with laparoscopic assistance
- No abdominal incisions
- Emerging technique

### Health Disparities and Access

**Menstrual Equity Issues:**
- Period poverty (inability to afford menstrual products)
- Impact on school/work attendance
- Taxation of menstrual products ("tampon tax")

**Cultural Considerations:**
- Menstrual stigma across cultures
- Traditional practices affecting management
- Religious considerations (fasting, prayer)

**Disparities in Care:**
- Endometriosis diagnosis delay (average 7-10 years)
- Racial disparities in hysterectomy rates
- Access to specialized care for complex disorders

### Research Frontiers

**Endometrial Regeneration:**
- Stem cell therapy for Asherman syndrome
- Tissue engineering for Mullerian anomalies
- Investigational status

**Menstrual Suppression:**
- Continuous hormonal contraception
- Long-term safety data accumulation
- Patient preference evolution

**Personalized Medicine:**
- Pharmacogenomics of hormonal therapy
- Individualized fibroid treatment based on molecular profile
- Predictive models for treatment response

**Non-Hormonal Therapies:**
- Selective progesterone receptor modulators
- Neurokinin antagonists for dysmenorrhea
- Novel targets for endometriosis`,
      keyTerms: [
        { term: 'Mullerian anomaly', definition: 'Congenital malformation of the female reproductive tract' },
        { term: 'gonadal dysgenesis', definition: 'Abnormal development of gonads; may be streak ovaries or testes with impaired function' },
        { term: 'SPRM', definition: 'Selective progesterone receptor modulator - mixed agonist/antagonist effects' },
        { term: 'POLE mutation', definition: 'DNA polymerase epsilon mutation causing ultramutated endometrial cancer with excellent prognosis' },
        { term: 'vNOTES', definition: 'Vaginal natural orifice transluminal endoscopic surgery' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. Always exclude pregnancy first in reproductive-age women with abnormal bleeding.

2. Adolescents with heavy bleeding since menarche have 5-20% prevalence of von Willebrand disease - screen early.

3. Endometrial ablation is NOT contraception - pregnancies can occur and are high-risk. Reliable contraception is essential.

4. PAEC (Progesterone receptor modulator-associated endometrial changes) with ulipristal use requires monitoring - endometrial surveillance recommended.

5. Turner syndrome patients require cardiology evaluation (coarctation, bicuspid aortic valve) and need hormone replacement for bone and cardiovascular health.

6. In women with Lynch syndrome, lifetime endometrial cancer risk is 40-60% - consider prophylactic hysterectomy after childbearing.`,
    },
  },

  media: [
    {
      id: 'palm-coein-diagram',
      type: 'diagram',
      filename: 'palm-coein.svg',
      title: 'PALM-COEIN Classification System',
      description: 'Classification of abnormal uterine bleeding causes',
    },
  ],

  citations: [
    {
      id: 'figo-aub-system',
      type: 'article',
      title: 'FIGO Classification System for Causes of Abnormal Uterine Bleeding',
      authors: ['Munro MG', 'Critchley HO'],
      source: 'International Journal of Gynecology & Obstetrics',
    },
    {
      id: 'acog-dysmenorrhea',
      type: 'article',
      title: 'Dysmenorrhea and Endometriosis in the Adolescent',
      authors: ['ACOG Committee on Adolescent Health Care'],
      source: 'Obstetrics & Gynecology',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-menstrual-cycle', targetType: 'concept', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'reproductive-pregnancy-physiology', targetType: 'concept', relationship: 'related', label: 'Pregnancy Physiology' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['gynecology', 'clinical-medicine', 'menstrual-disorders'],
    keywords: ['amenorrhea', 'menorrhagia', 'dysmenorrhea', 'PMS', 'abnormal bleeding'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default menstrualDisorders;
