/**
 * Pelvic Examination - Reproductive Clinical Medicine
 *
 * Comprehensive content on pelvic examination including indications,
 * technique, findings, and clinical correlations for both routine
 * screening and diagnostic evaluation.
 */

import { EducationalContent } from '../../types';

export const pelvicExam: EducationalContent = {
  id: 'reproductive-pelvic-exam',
  type: 'concept',
  name: 'Pelvic Examination',
  alternateNames: ['Gynecologic Exam', 'Internal Exam', 'Vaginal Exam'],

  levels: {
    1: {
      level: 1,
      summary: 'A pelvic exam is a check of a woman\'s reproductive organs. The doctor looks at and feels the vagina, cervix, uterus, and ovaries to make sure everything is healthy.',
      explanation: `## What Is a Pelvic Exam?

A pelvic exam is when a doctor or nurse checks the health of a woman's reproductive organs. This includes the vulva (outside), vagina, cervix, uterus, and ovaries.

### Why Pelvic Exams Are Done

**Routine Health Screening:**
- Check for cervical cancer (Pap smear)
- Screen for sexually transmitted infections
- Part of annual wellness visits

**When You Have Symptoms:**
- Unusual vaginal discharge
- Pelvic pain
- Irregular bleeding
- Pain with sex

**Other Reasons:**
- Before starting birth control
- During pregnancy
- To check for problems getting pregnant

### What Happens During the Exam

**Before the Exam:**
- You'll change into a gown
- Empty your bladder
- The doctor will explain each step

**External Exam:**
- The doctor looks at the outside of your genitals
- Checks for any redness, swelling, or sores

**Speculum Exam:**
- A speculum (metal or plastic tool) gently opens the vagina
- Allows the doctor to see the vaginal walls and cervix
- Pap smear and STI tests are collected here
- May feel pressure but shouldn't hurt

**Bimanual Exam:**
- Doctor inserts two gloved fingers into the vagina
- The other hand presses on your lower belly
- Feels the size and shape of the uterus and ovaries
- Checks for any lumps or tenderness

### Tips for Your Exam

- Try to relax - tensing up can make it uncomfortable
- Breathe slowly and deeply
- Tell the doctor if something hurts
- Ask questions if you're nervous
- You can ask for a chaperone to be present
- You can stop the exam at any time`,
      keyTerms: [
        { term: 'speculum', definition: 'A tool that gently holds the vaginal walls open during an exam' },
        { term: 'cervix', definition: 'The lower part of the uterus that opens into the vagina' },
        { term: 'Pap smear', definition: 'A test that collects cells from the cervix to check for cancer' },
        { term: 'bimanual exam', definition: 'Part of the pelvic exam where the doctor uses both hands to feel internal organs' },
        { term: 'vulva', definition: 'The external female genitals' },
      ],
      analogies: [
        'The speculum is like a small flashlight holder - it helps the doctor see inside, similar to how you might hold your mouth open at the dentist.',
        'The bimanual exam is like gently feeling for a ball through a pillow - the doctor feels internal organs through the belly wall.',
      ],
      examples: [
        'A routine Pap smear is recommended every 3 years for most women ages 21-29',
        'A woman with pelvic pain would have a pelvic exam to check for causes',
        'Birth control pills can be prescribed after a pelvic exam confirms everything is normal',
      ],
      patientCounselingPoints: [
        'Pelvic exams should not be painful - tell your provider if you feel pain',
        'You don\'t need to shave or wax before your exam',
        'Try to schedule your exam when you\'re not on your period if possible',
        'It\'s okay to feel nervous - let your provider know so they can help you relax',
        'You have the right to stop the exam or ask questions at any time',
      ],
    },
    2: {
      level: 2,
      summary: 'The pelvic examination consists of external inspection, speculum examination for cervical visualization and sampling, and bimanual examination for uterine and adnexal assessment. Indications include routine screening, symptom evaluation, and pregnancy-related care.',
      explanation: `## Components of the Pelvic Examination

The pelvic exam is a systematic assessment of the female reproductive organs combining visual inspection and palpation.

### Indications

**Screening Purposes:**
- Cervical cancer screening (Pap smear, HPV testing)
- STI screening (gonorrhea, chlamydia)
- Annual wellness examination

**Symptom Evaluation:**
- Abnormal vaginal bleeding
- Pelvic pain
- Vaginal discharge
- Dyspareunia (painful intercourse)
- Urinary symptoms
- Vulvar lesions or itching

**Pregnancy-Related:**
- Confirmation of pregnancy
- Cervical assessment in labor
- Postpartum evaluation

### Current Screening Guidelines

**Cervical Cancer Screening (USPSTF/ACOG):**

| Age Group | Recommendation |
|-----------|----------------|
| <21 years | No screening |
| 21-29 years | Pap alone every 3 years |
| 30-65 years | Pap alone every 3 years, or Pap + HPV every 5 years, or primary HPV every 5 years |
| >65 years | Stop if adequate prior screening |

**Annual Pelvic Exam:**
- No longer universally recommended for asymptomatic women
- Shared decision-making between patient and provider
- May be performed when symptoms or concerns present

### Examination Technique

**Preparation:**
- Private, warm room
- Chaperone offered
- Empty bladder
- Informed consent
- Explanation of each step

**External Examination:**

Inspect:
- Vulva: Skin changes, lesions, masses
- Clitoris: Size (clitoromegaly suggests hyperandrogenism)
- Urethral meatus: Prolapse, discharge, lesions
- Vaginal introitus: Atrophy, discharge
- Perineum: Scarring, lesions
- Anus: Hemorrhoids, fissures, lesions

**Speculum Examination:**

Technique:
- Warm speculum with water (not lubricant before Pap)
- Insert at 45-degree angle, rotate to horizontal
- Advance while opening blades
- Visualize cervix, lock speculum

Assess:
- Vaginal walls: Color, lesions, discharge
- Cervix: Position, color, lesions, discharge
- Cervical os: Nulliparous (round) vs. parous (slit-like)
- Collect specimens: Pap smear, cultures, wet mount

**Bimanual Examination:**

Technique:
- Index and middle finger inserted
- Abdominal hand on lower abdomen
- Cervix: Position, motion tenderness
- Uterus: Size, shape, position, mobility, tenderness
- Adnexa: Masses, tenderness

Findings:
- Cervical motion tenderness (CMT): Suggests PID, ectopic pregnancy
- Enlarged uterus: Pregnancy, fibroids, adenomyosis
- Adnexal mass: Ovarian cyst, ectopic, tumor
- Fixed uterus: Endometriosis, adhesions

**Rectovaginal Examination:**

Indications:
- Evaluate rectovaginal septum
- Assess for endometriosis
- Evaluate posterior uterus
- Screen for rectal masses
- Obtain stool for occult blood

### Documentation

**Normal Exam Example:**
"External genitalia normal. Vaginal mucosa pink, rugated. Cervix smooth, midline, no lesions. Uterus anteverted, normal size, non-tender, mobile. Adnexa without masses or tenderness."`,
      keyTerms: [
        { term: 'adnexa', definition: 'The ovaries, fallopian tubes, and supporting ligaments on either side of the uterus' },
        { term: 'cervical motion tenderness', definition: 'Pain when the cervix is moved during exam; suggests pelvic inflammation' },
        { term: 'anteverted', definition: 'Uterine position tilted forward toward the bladder' },
        { term: 'retroverted', definition: 'Uterine position tilted backward toward the rectum' },
        { term: 'wet mount', definition: 'Microscopic examination of vaginal discharge for infection diagnosis' },
      ],
      analogies: [
        'The bimanual exam is like checking the size of a fruit through a bag - you feel from both sides to get an accurate sense of size and shape.',
        'Cervical motion tenderness is like wiggling a sore tooth - movement of the cervix causes pain if there\'s inflammation.',
      ],
      examples: [
        'A smooth, firm mass felt on bimanual exam may represent a uterine fibroid',
        'Cervical motion tenderness with fever and discharge suggests pelvic inflammatory disease',
        'A 12-week size uterus in a non-pregnant patient suggests fibroids',
      ],
      patientCounselingPoints: [
        'Current guidelines no longer recommend annual pelvic exams for all asymptomatic women',
        'Pap smears are not needed before age 21 regardless of sexual activity',
        'HPV testing is now an option for cervical cancer screening in women 30 and older',
        'A speculum exam without a Pap smear may be done to evaluate symptoms',
      ],
    },
    3: {
      level: 3,
      summary: 'The pelvic examination integrates inspection, speculum examination, bimanual palpation, and potentially rectovaginal examination. Systematic technique and accurate interpretation of findings guide differential diagnosis and further evaluation.',
      explanation: `## Clinical Pelvic Examination

### Anatomical Considerations

**Pelvic Anatomy Review:**

External structures:
- Mons pubis
- Labia majora and minora
- Clitoris (glans, body, crura)
- Urethral meatus
- Vaginal introitus
- Bartholin glands (5 and 7 o'clock)
- Skene glands (periurethral)
- Perineal body

Internal structures:
- Vagina: 7-10 cm length, rugated walls
- Cervix: Ectocervix (squamous), endocervix (columnar), transformation zone
- Uterus: 7-8 cm length, 60-80g
- Ovaries: 3-4 cm, almond-shaped
- Fallopian tubes: Not normally palpable

**Uterine Position Terminology:**
- Version: Direction of cervix relative to vaginal axis
  - Anteverted (most common): Cervix points posteriorly
  - Retroverted: Cervix points anteriorly
- Flexion: Angle between uterine body and cervix
  - Anteflexed: Body tilts forward on cervix
  - Retroflexed: Body tilts backward on cervix

### Detailed Examination Findings

**External Examination Findings:**

| Finding | Significance |
|---------|-------------|
| Vulvar atrophy | Hypoestrogenic state |
| Vulvar lesions | Infection, dermatosis, neoplasia |
| Clitoromegaly | Hyperandrogenism |
| Bartholin cyst/abscess | Duct obstruction, infection |
| Urethral caruncle | Prolapsed urethral mucosa |
| Cystocele | Anterior vaginal wall prolapse |
| Rectocele | Posterior vaginal wall prolapse |
| Uterine prolapse | Descent of uterus into vagina |

**Speculum Findings:**

Cervical appearance:
- Normal: Pink, smooth, small os
- Ectropion: Columnar epithelium visible (normal variant, common in young women, OCPs)
- Nabothian cysts: Mucus-filled cysts (normal)
- Cervicitis: Erythema, friability, mucopurulent discharge
- Cervical polyp: Benign outgrowth from os
- Cervical lesion: May require colposcopy

Vaginal discharge assessment:

| Type | Characteristics | Likely Diagnosis |
|------|-----------------|------------------|
| White, curdy | Thick, adherent, pH <4.5 | Candida |
| Gray, thin | Fishy odor, pH >4.5 | Bacterial vaginosis |
| Yellow-green, frothy | Malodorous, pH >4.5 | Trichomonas |
| Mucopurulent | From cervical os | Cervicitis (GC, CT) |

**Bimanual Examination Findings:**

---
Uterine Findings:

Size estimation:
  Normal: 7-8 cm or "lemon" size
  8-10 weeks pregnant or fibroid: "small orange"
  12 weeks pregnant: "grapefruit" at symphysis
  16 weeks pregnant: Midway to umbilicus
  20 weeks pregnant: At umbilicus

Consistency:
  Normal: Firm
  Pregnancy: Soft (Hegar sign)
  Adenomyosis: Boggy, diffusely enlarged

Shape:
  Normal: Pear-shaped
  Fibroids: Irregular contour

Mobility:
  Normal: Mobile
  Fixed: Endometriosis, adhesions, malignancy
---

Adnexal findings:
- Normal ovary: 3 cm, slightly tender
- Ovarian cyst: Smooth, mobile, cystic
- Solid mass: Concerning for neoplasm
- Tenderness: Inflammation, torsion, hemorrhage
- Fullness in cul-de-sac: Fluid, endometriosis, mass

### Special Examination Techniques

**Valsalva Maneuver:**
- Patient bears down during speculum or bimanual exam
- Assesses for pelvic organ prolapse
- Grading: I (descends to introitus), II (at introitus), III (beyond introitus)

**Cervical Length Assessment (Digital):**
- 3-4 cm closed cervix normal
- Shortened cervix concerning in pregnancy
- Dilation assessment in labor

**Pelvic Pain Examination:**
- Single-digit exam to localize tenderness
- Assess for trigger points
- Evaluate levator ani muscles
- Check for pelvic floor dysfunction

### Laboratory Specimens

**From Speculum Exam:**
- Pap smear: Cervical cytology
- HPV test: Cervical HPV DNA
- Endocervical swab: GC, chlamydia NAAT
- Wet mount: Vaginal discharge microscopy
- pH testing: Vaginal pH (normal 3.8-4.5)
- Whiff test: KOH added to discharge (fishy odor in BV)

**Wet Mount Findings:**

| Finding | Diagnosis |
|---------|-----------|
| Hyphae, pseudohyphae | Candidiasis |
| Motile trichomonads | Trichomoniasis |
| Clue cells (>20%) | Bacterial vaginosis |
| WBCs >10/HPF | Inflammatory vaginitis |`,
      keyTerms: [
        { term: 'transformation zone', definition: 'Area of the cervix where squamous and columnar epithelium meet; most cervical cancers arise here' },
        { term: 'ectropion', definition: 'Visible columnar epithelium on the ectocervix; normal variant often seen with estrogen' },
        { term: 'clue cells', definition: 'Vaginal epithelial cells covered with bacteria; diagnostic of bacterial vaginosis' },
        { term: 'Hegar sign', definition: 'Softening of the lower uterine segment in early pregnancy' },
        { term: 'cul-de-sac', definition: 'Pouch of Douglas; peritoneal space posterior to uterus' },
      ],
      analogies: [
        'The transformation zone is like a border region where two different cell types meet - this area of transition is where problems are most likely to develop.',
        'Clue cells are like frosted glass - you can\'t see through the cells because they\'re coated with bacteria.',
      ],
      examples: [
        'A retroverted uterus may be more difficult to palpate on bimanual exam',
        'Nabothian cysts are common findings that do not require treatment',
        'Cervical ectropion in a woman on OCPs is a normal finding, not pathology',
      ],
      clinicalNotes: 'The bimanual exam has limited sensitivity for detecting ovarian masses, especially in obese patients. Ultrasound should be used to evaluate suspected adnexal pathology. The absence of adnexal tenderness does not rule out ectopic pregnancy.',
    },
    4: {
      level: 4,
      summary: 'Advanced pelvic examination encompasses technique modifications for special populations, integration with imaging findings, assessment of pelvic floor dysfunction, and examination under anesthesia for complex pathology.',
      explanation: `## Advanced Pelvic Examination

### Special Populations

**Adolescent Patients:**

Examination approach:
- External exam sufficient for most indications
- Speculum exam only if clinically necessary
- Consider narrow speculum (Huffman or Pederson)
- Allow control over exam pace
- Education focus

Indications for speculum exam:
- Abnormal vaginal bleeding requiring evaluation
- Persistent vaginal discharge
- Sexual assault forensic exam
- Removal of foreign body
- IUD insertion

**Menopausal/Postmenopausal:**

Examination considerations:
- Atrophic changes: Pale, thin mucosa, decreased rugae
- May require smaller speculum
- Examine for prolapse (common)
- Evaluate for postmenopausal bleeding

Findings of concern:
- Vaginal bleeding (endometrial evaluation needed)
- Vulvar lesions (increased risk of VIN, vulvar cancer)
- Adnexal masses (higher risk of malignancy)

**Pregnancy:**

First trimester findings:
- Chadwick sign: Blue discoloration of cervix/vagina
- Goodell sign: Softening of cervix
- Hegar sign: Softening of lower uterine segment
- Uterine enlargement

Cervical exam indications:
- Preterm labor evaluation
- Premature rupture of membranes
- Labor assessment
- Avoid in placenta previa

**Post-Hysterectomy:**

Examination elements:
- Vaginal cuff inspection
- No cervical cytology needed (if benign indication)
- Continued screening if history of CIN 2+
- Assess for vault prolapse

### Pelvic Floor Assessment

**Pelvic Organ Prolapse (POP-Q System):**

Reference points:
- Aa, Ba: Anterior vaginal wall
- C: Cervix or vaginal cuff
- Ap, Bp: Posterior vaginal wall
- D: Posterior fornix (if cervix present)
- gh: Genital hiatus
- pb: Perineal body
- tvl: Total vaginal length

Staging:
- Stage 0: No prolapse
- Stage I: Most distal portion >1 cm above hymen
- Stage II: Within 1 cm of hymen
- Stage III: >1 cm beyond hymen but not total
- Stage IV: Complete eversion

**Levator Ani Assessment:**

Technique:
- Single-digit examination
- Palpate puborectalis, pubococcygeus
- Assess tone and tenderness
- Strength grading (Modified Oxford scale 0-5)

Findings:
- Hypertonicity: Pelvic pain, dyspareunia
- Trigger points: Myofascial pain
- Weakness: Incontinence, prolapse

### Integration with Imaging

**When Ultrasound Enhances Exam:**

---
Indications for Pelvic Ultrasound:

Following abnormal pelvic exam:
  - Adnexal mass felt on exam
  - Uterine enlargement
  - Unable to assess adnexa (obesity)

Specific symptoms:
  - Abnormal uterine bleeding
  - Pelvic pain
  - Suspected ectopic pregnancy
  - Infertility evaluation

Imaging-first scenarios:
  - Suspected ovarian torsion
  - Postmenopausal adnexal mass
  - Ectopic pregnancy evaluation
---

**Correlation of Exam and Imaging:**

| Exam Finding | Ultrasound Correlation |
|--------------|------------------------|
| Enlarged uterus | Fibroid number, size, location |
| Adnexal mass | Cystic vs. solid, complexity |
| Uterine tenderness | Endometrial thickness, adenomyosis |
| Fixed uterus | Endometrioma, adhesions |

### Examination Under Anesthesia (EUA)

**Indications:**
- Severe pelvic pain preventing adequate exam
- Child sexual abuse evaluation
- Complex pelvic pathology
- Cancer staging
- Prior to surgical procedures

**Advantages:**
- Complete muscle relaxation
- No patient discomfort
- Thorough assessment of pelvic masses
- Accurate prolapse staging
- Rectovaginal assessment

**Technique:**
- Systematic approach
- Bladder catheterization
- Assess vaginal caliber, length
- Bimanual and rectovaginal exam
- Cystoscopy and proctoscopy if indicated

### Exam in Acute Conditions

**Suspected Ectopic Pregnancy:**
- Gentle examination
- Cervical motion tenderness common
- Adnexal mass in 50%
- Cul-de-sac fullness (hemoperitoneum)
- Avoid vigorous bimanual if rupture suspected

**Pelvic Inflammatory Disease:**
- CMT (chandelier sign)
- Uterine tenderness
- Adnexal tenderness
- Purulent endocervical discharge
- Right upper quadrant tenderness (Fitz-Hugh-Curtis)

**Ovarian Torsion:**
- Unilateral adnexal tenderness
- Palpable mass (50-60%)
- Pain out of proportion to exam
- Exam may be limited by pain

**Sexual Assault Forensic Exam:**
- Specialized training required
- Chain of custody for specimens
- Document injuries with photography
- Colposcopy for detailed assessment
- Swabs for DNA evidence
- STI prophylaxis and emergency contraception`,
      keyTerms: [
        { term: 'POP-Q', definition: 'Pelvic Organ Prolapse Quantification; standardized system for measuring prolapse' },
        { term: 'Chadwick sign', definition: 'Bluish discoloration of the cervix and vagina in early pregnancy' },
        { term: 'chandelier sign', definition: 'Severe pain with cervical motion causing patient to jump; classic for PID' },
        { term: 'genital hiatus', definition: 'Opening in the pelvic floor from mid-urethra to posterior hymen' },
        { term: 'examination under anesthesia', definition: 'Pelvic exam performed with patient sedated for complete assessment' },
      ],
      clinicalNotes: 'In suspected ectopic pregnancy, the absence of an adnexal mass on exam does not rule out ectopic - ultrasound is required. Cervical motion tenderness is present in only 75% of ectopic pregnancies. Serial beta-hCG and ultrasound are the diagnostic standards.',
    },
    5: {
      level: 5,
      summary: 'Expert-level pelvic examination integrates clinical findings with advanced diagnostic modalities, encompasses examination for oncologic staging, addresses examination in complex clinical scenarios, and incorporates current evidence on screening guidelines.',
      explanation: `## Expert Pelvic Examination

### Oncologic Examination

**Cervical Cancer Staging (FIGO 2018):**

Clinical examination elements:
- Tumor size measurement
- Vaginal involvement
- Parametrial involvement
- Pelvic sidewall extension
- Bladder/rectal involvement

---
FIGO Staging (Clinical):

Stage I: Confined to cervix
  IA1: <3mm depth, <7mm width
  IA2: 3-5mm depth, <7mm width
  IB1: <=2cm visible tumor
  IB2: >2cm but <=4cm
  IB3: >4cm

Stage II: Beyond cervix, not to pelvic wall/lower vagina
  IIA: Upper 2/3 vagina
  IIB: Parametrial involvement

Stage III: To pelvic wall, lower vagina, or hydronephrosis
  IIIA: Lower 1/3 vagina
  IIIB: Pelvic sidewall or hydronephrosis
  IIIC: Lymph node involvement (by imaging/pathology)

Stage IV: Beyond true pelvis or mucosa involvement
  IVA: Bladder/rectal mucosa
  IVB: Distant metastasis
---

**Parametrial Assessment:**
- Rectovaginal exam essential
- Normal: Parametria smooth, mobile
- Involved: Nodularity, fixation
- Extension to sidewall: Cannot reach above tumor

**Vulvar Cancer Examination:**
- Complete vulvar inspection
- Measurement of lesion(s)
- Distance from midline structures
- Inguinal lymph node palpation
- Perianal involvement

### Complex Clinical Scenarios

**Chronic Pelvic Pain Evaluation:**

Systematic approach:
1. External genitalia: Vulvodynia, lichen sclerosus
2. Single-digit exam: Localize tenderness
3. Vestibular exam: Vulvar vestibulitis (cotton swab test)
4. Levator assessment: Myofascial dysfunction
5. Bladder base: Interstitial cystitis
6. Uterosacral ligaments: Endometriosis
7. Rectovaginal exam: Rectovaginal endometriosis

**Pelvic Pain Mapping:**
- Conscious pain mapping
- Patient indicates pain severity at each location
- Helps identify source: Visceral vs. musculoskeletal

**Endometriosis Assessment:**

Physical findings:
- Uterosacral nodularity (tender)
- Fixed, retroverted uterus
- Adnexal masses (endometriomas)
- Rectovaginal nodules
- Blue/red lesions on cervix or vaginal fornix

Correlation with disease:
- Exam has low sensitivity (24-76%)
- Rectovaginal nodules correlate with deep disease
- MRI/ultrasound enhance detection

### Evidence-Based Screening

**Current Controversies:**

Annual bimanual exam debate:
- USPSTF: Insufficient evidence to recommend
- ACOG: Shared decision-making
- Evidence does not support cancer detection via exam
- Patient preference varies

Cervical cancer screening evolution:
- Primary HPV testing now an option
- Extended intervals with negative testing
- Exit strategy at 65 with adequate prior screening

**HPV Vaccination Impact:**
- Reduced CIN 2+ in vaccinated populations
- Screening guidelines under review
- Potential for extended intervals or later start

### Quality Assurance

**Optimizing Examination Accuracy:**

Technique factors:
- Adequate relaxation essential
- Warm speculum
- Proper positioning (frog-leg, lithotomy)
- Good lighting
- Appropriate speculum size

Patient factors:
- Full bladder obscures exam
- Prior surgery/radiation alters anatomy
- Obesity limits bimanual assessment
- Pain/anxiety affects cooperation

Examiner factors:
- Training and experience
- Systematic approach
- Documentation standards
- Recognition of limitations

**When to Refer:**

| Scenario | Referral |
|----------|----------|
| Abnormal Pap/HPV | Colposcopy |
| Adnexal mass | Gynecologic oncology if high-risk features |
| Complex prolapse | Urogynecology |
| Chronic pain | Pelvic pain specialist |
| Vulvar lesion | Vulvar clinic/biopsy |

### Research and Emerging Practices

**Point-of-Care Testing:**
- Bedside microscopy declining
- NAAT replacing culture
- Self-collected specimens for STI/HPV
- Rapid diagnostics

**Telehealth Limitations:**
- Physical exam cannot be replaced
- May guide triage
- Self-exam instruction potential

**Artificial Intelligence Applications:**
- Colposcopy image analysis
- Cervical cytology screening
- Risk stratification models

### Communication and Documentation

**Trauma-Informed Approach:**
- Ask permission before each step
- Offer control (stop at any time)
- Explain findings as you go
- Consider history of trauma/abuse
- Document patient responses

**Medical-Legal Considerations:**
- Chaperone documentation
- Detailed description of findings
- Objective measurements
- Photography for lesions (with consent)
- Clear abnormal/normal statements`,
      keyTerms: [
        { term: 'parametrium', definition: 'Connective tissue surrounding the cervix; assessed for cancer staging' },
        { term: 'vulvodynia', definition: 'Chronic vulvar pain without identifiable cause' },
        { term: 'cotton swab test', definition: 'Methodical testing of vestibule for localized pain in vulvar vestibulitis' },
        { term: 'NAAT', definition: 'Nucleic acid amplification test; molecular test for STIs' },
        { term: 'trauma-informed care', definition: 'Healthcare approach recognizing impact of trauma on patient experience' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. The bimanual exam has limited sensitivity for ovarian cancer detection. No screening exam has been shown to reduce ovarian cancer mortality.

2. Rectovaginal examination is essential for cervical cancer staging and endometriosis assessment. It should not be omitted when indicated.

3. FIGO cervical cancer staging was updated in 2018 to include imaging and pathologic lymph node findings, though clinical exam remains the foundation.

4. Pelvic floor muscle dysfunction is underdiagnosed. Systematic levator assessment should be included in evaluation of chronic pelvic pain and dyspareunia.

5. Self-collected specimens for HPV and STI testing show comparable accuracy and may improve screening uptake in some populations.`,
    },
  },

  media: [
    {
      id: 'pelvic-exam-technique',
      type: 'diagram',
      filename: 'pelvic-exam-technique.svg',
      title: 'Pelvic Examination Technique',
      description: 'Step-by-step illustration of speculum and bimanual examination',
    },
    {
      id: 'pop-q-staging',
      type: 'diagram',
      filename: 'pop-q-staging.svg',
      title: 'POP-Q Staging System',
      description: 'Reference points for pelvic organ prolapse quantification',
    },
  ],

  citations: [
    {
      id: 'acog-well-woman',
      type: 'article',
      title: 'Well-Woman Visit',
      authors: ['ACOG Committee on Gynecologic Practice'],
      source: 'ACOG Committee Opinion',
      url: 'https://www.acog.org',
    },
    {
      id: 'uspstf-cervical-cancer',
      type: 'article',
      title: 'Screening for Cervical Cancer',
      authors: ['US Preventive Services Task Force'],
      source: 'JAMA',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-cervical-pathology', targetType: 'condition', relationship: 'related', label: 'Cervical Pathology' },
    { targetId: 'reproductive-endometriosis', targetType: 'condition', relationship: 'related', label: 'Endometriosis' },
    { targetId: 'reproductive-pcos', targetType: 'condition', relationship: 'related', label: 'PCOS' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['clinical-medicine', 'gynecology', 'physical-examination', 'screening'],
    keywords: ['pelvic exam', 'speculum', 'Pap smear', 'bimanual', 'cervix'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obstetrics-gynecology'],
    },
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pelvicExam;
