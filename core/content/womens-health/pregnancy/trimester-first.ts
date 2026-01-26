import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const trimesterFirst: WomensHealthContent = {
  id: 'trimester-first',
  title: 'First Trimester of Pregnancy',
  category: 'Pregnancy',
  complexityLevels: [
    {
      level: 1,
      title: 'Welcome to the First Trimester!',
      content: `The first trimester lasts from week 1 to week 12 of pregnancy. It's an exciting time when your body goes through many changes!

**What is Happening:**

**Weeks 1-4:**
- Egg is fertilized and implants in uterus
- Your body starts making pregnancy hormones
- You might miss your first period
- Very early signs may begin

**Weeks 5-8:**
- Baby's heart starts beating!
- Major organs begin to form
- You may feel tired and nauseous
- Breasts might feel tender

**Weeks 9-12:**
- Baby is now called a fetus
- All major organs have formed
- Fingers and toes develop
- Risk of miscarriage decreases after week 12

**Common Symptoms:**
- Morning sickness (nausea)
- Extreme tiredness
- Breast tenderness
- Needing to pee more often
- Food cravings or dislikes
- Mood swings

**Taking Care of Yourself:**
- Schedule your first prenatal visit
- Start taking prenatal vitamins
- Eat healthy, small meals
- Rest when tired
- Avoid alcohol, smoking, and drugs
- Drink plenty of water

**When to Call Your Doctor:**
- Vaginal bleeding
- Severe abdominal pain
- Severe nausea and vomiting
- Fever over 100°F

**Remember:** Every pregnancy is different. Some women have many symptoms, others have few. Both are normal!`,
      keyPoints: [
        'First trimester spans weeks 1-12 of pregnancy',
        'Major organs form during this critical period',
        'Morning sickness and fatigue are common symptoms',
        'Schedule first prenatal visit early'
      ],
      vocabulary: [
        { term: 'Trimester', definition: 'Pregnancy divided into three 3-month periods' },
        { term: 'Fetus', definition: 'Name for baby from 9 weeks until birth' },
        { term: 'Morning Sickness', definition: 'Nausea common in early pregnancy' },
        { term: 'Prenatal Vitamins', definition: 'Special vitamins for pregnancy with folic acid' }
      ],
      quiz: [
        {
          question: 'When does the first trimester end?',
          options: [
            'Week 8',
            'Week 12',
            'Week 16',
            'Week 20'
          ],
          correctAnswer: 1,
          explanation: 'The first trimester lasts from week 1 through week 12 of pregnancy, encompassing the first three months.',
        },
        {
          question: 'When does the baby\'s heart typically start beating?',
          options: [
            'Week 3',
            'Weeks 5-6',
            'Week 10',
            'Week 15',
          ],
          correctAnswer: 1,
          explanation: 'The baby\'s heart typically starts beating around weeks 5-6 of pregnancy and can often be seen on ultrasound by week 6-7.',
        }
      ]
    },
    {
      level: 2,
      title: 'First Trimester Changes and Development',
      content: `The first trimester is a period of rapid fetal development and significant maternal adaptation. Understanding these changes helps expectant parents navigate this transformative time.

**Fetal Development Timeline:**

**Weeks 1-4 (Conception and Implantation):**

| Week | Development |
|------|-------------|
| 1 | Last menstrual period (pregnancy dating starts here) |
| 2 | Ovulation and fertilization |
| 3 | Blastocyst forms, begins traveling to uterus |
| 4 | Implantation occurs, hCG production begins |

**Weeks 5-8 (Embryonic Period):**
- **Week 5:** Heart tube begins forming, neural tube closes
- **Week 6:** Heartbeat detectable, limb buds appear
- **Week 7:** Brain development rapid, facial features forming
- **Week 8:** Organogenesis continues, fingers/toes begin

**Weeks 9-12 (Fetal Period):**
- All major organs formed
- Fetal movement begins (not yet felt)
- External genitalia forming (sex determinable on ultrasound)
- Fetal length: ~2-3 inches crown-rump
- Fetal weight: ~0.5-1 ounce

**Maternal Changes:**

**Hormonal Shifts:**

| Hormone | Function | Effects |
|---------|----------|---------|
| hCG | Maintains corpus luteum | Pregnancy test positive, nausea |
| Progesterone | Supports pregnancy | Fatigue, breast tenderness |
| Estrogen | Growth promotion | Nasal congestion, increased blood flow |
| Relaxin | Prepares pelvis | Joint laxity |

**Physical Symptoms:**

**Breast Changes:**
- Tenderness and enlargement
- Darkening of areolas
- Montgomery's tubercles appear
- Veins become visible

**Constitutional Symptoms:**
- Fatigue (often extreme)
- Nausea with or without vomiting
- Increased urination frequency
- Food aversions and cravings
- Heightened sense of smell
- Excessive saliva (ptyalism)

**Emotional Changes:**
- Mood swings
- Anxiety about pregnancy
- Excitement mixed with worry
- Irritability

**Common First Trimester Concerns:**

**Morning Sickness:**
- Affects up to 80% of pregnant people
- Typically improves by week 12-14
- More common in first pregnancies
- May be triggered by strong odors

**Management:**
- Eat small, frequent meals
- Dry crackers before rising
- Ginger supplements or tea
- Vitamin B6 (10-25 mg three times daily)
- Avoid triggers

**Fatigue:**
- Progesterone causes sleepiness
- Increased metabolic demands
- Usually improves in second trimester
- Rest when needed, nap if possible

**Breast Tenderness:**
- Hormone-induced changes
- Supportive bra helpful
- Usually improves after first trimester
| Normal and expected |

**First Prenatal Visit:**

**Timing: Ideally 8-10 weeks**

**Components:**
- Confirm pregnancy (due date, gestational age)
- Complete medical and obstetric history
- Physical examination
- Laboratory testing:
  - Blood type and Rh status
  - Complete blood count
  - Infectious disease screening
  - Urinalysis
- Genetic counseling and screening options
- Patient education

**Red Flag Symptoms:**

**Immediate Evaluation Needed:**
- Vaginal bleeding (any amount)
- Severe abdominal pain
- Severe vomiting preventing hydration
- Fever >100.4°F (38°C)
| Severe headache with vision changes |
- Shoulder pain (possible ectopic)`,
      keyPoints: [
        'All major organs form by week 8 of pregnancy',
        'Morning sickness affects up to 80% of pregnant people',
        'First prenatal visit should occur at 8-10 weeks',
        'Bleeding and severe pain require immediate evaluation'
      ],
      vocabulary: [
        { term: 'Organogenesis', definition: 'Formation and development of organs' },
        { term: 'hCG', definition: 'Human chorionic gonadotropin - pregnancy hormone detected in tests' },
        { term: 'Implantation', definition: 'When fertilized egg attaches to uterine lining' },
        { term: 'Crown-Rump Length', definition: 'Measurement of fetus from head to buttock' }
      ],
      quiz: [
        {
          question: 'By what week have all major organs formed in the fetus?',
          options: [
            'Week 4',
            'Week 6',
            'Week 8',
            'Week 12'
          ],
          correctAnswer: 2,
          explanation: 'By week 8 of pregnancy, all major organs have formed (organogenesis complete). The fetus continues to grow and mature, but the basic structure is established.',
        },
        {
          question: 'What hormone is primarily responsible for morning sickness in early pregnancy?',
          options: [
            'Estrogen',
            'hCG',
            'Progesterone',
            'Testosterone',
          ],
          correctAnswer: 1,
          explanation: 'Human chorionic gonadotropin (hCG) is the primary hormone responsible for morning sickness. Levels peak around weeks 9-12, which correlates with when symptoms are typically worst.',
        }
      ]
    },
    {
      level: 3,
      title: 'First Trimester Medical Assessment',
      content: `Comprehensive first trimester assessment establishes the foundation for prenatal care, including pregnancy confirmation, dating, and initial screening.

**Pregnancy Confirmation:**

**Urine Pregnancy Tests:**
- Detect hCG ≥25 mIU/mL
- Positive ~1 week after missed period
- False positives: rare (medications, rare medical conditions)
- False negatives: testing too early, diluted urine

**Serum Pregnancy Testing:**
- Detects hCG ≥5 mIU/mL
- Quantitative level provides gestational age estimation
- Used for confirmation and monitoring

**Gestational Age Assessment:**

**Last Menstrual Period (LMP) Dating:**
- Standard for pregnancy dating
- Naegele's Rule: LMP + 280 days
- Assumes 28-day cycle with ovulation day 14
- Limitations: irregular cycles, uncertain LMP

**Ultrasound Dating:**

**First Trimester Ultrasound (6-13 weeks):**
- Most accurate method of dating
- Crown-rump length (CRL) measurement
- Accuracy: ±5-7 days
- Used if:
  - Uncertain LMP
  - Discrepancy between dates and uterus size
  - Irregular cycles

**Dating Criteria:**
- ≤8 6/7 weeks: CRL most accurate
- 9-13 weeks: CRL + head circumference
- If discrepancy >1 week, ultrasound dating preferred

**Initial Laboratory Assessment:**

**Standard Labs:**

| Test | Purpose |
|------|---------|
| Blood type & Rh | Identify blood type, Rh status |
| Antibody screen | Detect red cell antibodies |
| CBC | Baseline hemoglobin, platelets |
| Rubella titer | Immunity status |
| Hepatitis B | Hep B surface antigen |
| Syphilis | RPR/VDRL screening |
| HIV | HIV testing (with consent) |
| Urinalysis | Baseline renal, infection |
| Gonorrhea/Chlamydia | STI screening |

**Optional Tests:**
- Varicella titer
- TSH (thyroid function)
- TB screening
- Genetic carrier screening
- Cystic fibrosis carrier screening
- Hemoglobin electrophoresis

**First Trimester Screening:**

**Combined First Trimester Screen (11-13 weeks):**

**Components:**
1. **Nuchal Translucency (NT) ultrasound**
   - Measures fluid at back of fetal neck
   - Increased NT associated with aneuploidy
   - Requires certified sonographer

2. **Maternal serum markers:**
   - PAPP-A (pregnancy-associated plasma protein A)
   - Free beta-hCG

**Detection Rates:**
- Down syndrome: ~85% (5% false positive)
- Trisomy 18/13: ~80%

**Cell-Free DNA (NIPT):**

**Technology:**
- Fetal DNA in maternal blood
- Can be performed from 10 weeks
- Screens for:
  - Trisomy 21, 18, 13
  - Sex chromosome abnormalities
  - Optional: fetal sex

**Advantages:**
- High detection rate (>99% for T21)
- Low false positive rate (<0.5%)
- Early testing available

**Limitations:**
- Screening, not diagnostic
- Limited in multiples
- Higher cost
- May fail in obese patients

**Common First Trimester Complications:**

**Spontaneous Abortion (Miscarriage):**
- Occurs in ~15-20% of recognized pregnancies
- Most occur in first trimester
- Risk factors:
  - Advanced maternal age
  - Previous miscarriage
  - Chronic medical conditions
  - Smoking, alcohol, drug use

**Signs:**
- Vaginal bleeding
- Abdominal cramping
- Loss of pregnancy symptoms
- Ultrasound shows no fetal heartbeat

**Ectopic Pregnancy:**
- Implantation outside uterus (usually fallopian tube)
- Occurs in ~2% of pregnancies
- Risk factors:
  - Previous ectopic
  - Tubal surgery/infection
  - PID history
  - IVF pregnancy

**Diagnosis:**
- Transvaginal ultrasound
- Serial hCG levels
- May require methotrexate or surgery

**Hyperemesis Gravidarum:**
- Severe nausea and vomiting
- Dehydration, electrolyte imbalances
- Weight loss >5% pre-pregnancy weight
- May require hospitalization, IV fluids`,
      keyPoints: [
        'Ultrasound dating in first trimester is most accurate (±5-7 days)',
        'Combined first trimester screen detects ~85% of Down syndrome cases',
        'Cell-free DNA offers highest detection rate with low false positive',
        'Miscarriage occurs in 15-20% of recognized pregnancies'
      ],
      vocabulary: [
        { term: 'CRL', definition: 'Crown-Rump Length - fetal measurement from head to buttock' },
        { term: 'NIPT', definition: 'Non-Invasive Prenatal Testing using cell-free fetal DNA' },
        { term: 'PAPP-A', definition: 'Pregnancy-Associated Plasma Protein-A - screening marker' },
        { term: 'Hyperemesis Gravidarum', definition: 'Severe form of morning sickness requiring medical intervention' }
      ],
      quiz: [
        {
          question: 'What is the accuracy of first trimester ultrasound dating?',
          options: [
            '±1-2 days',
            '±5-7 days',
            '±10-14 days',
            '±21 days'
          ],
          correctAnswer: 1,
          explanation: 'First trimester ultrasound dating is accurate to within ±5-7 days when crown-rump length is measured, making it the most accurate method of pregnancy dating.',
        },
        {
          question: 'What is the detection rate of the combined first trimester screen for Down syndrome?',
          options: [
            '50%',
            '65%',
            '85%',
            '99%',
          ],
          correctAnswer: 2,
          explanation: 'The combined first trimester screen (NT ultrasound + PAPP-A and beta-hCG) has an approximately 85% detection rate for Down syndrome with a 5% false positive rate.',
        }
      ]
    },
    {
      level: 4,
      title: 'First Trimester Physiology and Adaptations',
      content: `The first trimester involves profound physiological changes as the maternal body adapts to support early pregnancy development.

**Maternal Physiological Adaptations:**

**Cardiovascular System:**

**Hemodynamic Changes:**
- Peripheral vasodilation begins
- Systemic vascular resistance decreases
- Blood pressure: slight decrease (nadir at ~24 weeks)
- Heart rate begins to increase (+10-15 bpm by term)

**Plasma Volume Expansion:**
- Begins as early as 6 weeks
- Total increase: 40-50% by term
- Greater than RBC mass increase → physiologic anemia
- Mechanism: RAAS activation, aldosterone increase

**Hematologic Changes:**

**Red Blood Cells:**
- Mass increases ~20%
- Less than plasma increase → hemodilution
- Hematocrit decreases to 32-36%
- Iron requirements increase

**White Blood Cells:**
- Mild leukocytosis (12,000-18,000)
- Neutrophilia predominates
- Physiologic, not infectious

**Coagulation Changes:**
- Increased clotting factors (I, VII, VIII, X, fibrinogen)
- Decreased protein S
- Hypercoagulable state develops
- DVT prevention important

**Respiratory Adaptations:**

**Ventilation Changes:**
- Minute ventilation increases ~40%
- Driven by progesterone (respiratory stimulant)
- Tidal volume increases (rate unchanged)
- Respiratory alkalosis partially compensated (renal bicarbonate excretion)

**Subjective Dyspnea:**
- Common symptom
- Normal respiratory rate
- Due to increased awareness of breathing
- Also from progesterone effect on respiratory center

**Renal Adaptations:**

**Anatomic Changes:**
- Kidney size increases 1-1.5 cm
- Dilatation of renal pelves, ureters (right > left)
- Due to progesterone and compression

**Functional Changes:**
- GFR increases 50%
- Creatinine decreases to 0.5-0.7 mg/dL
- BUN decreases to 8-10 mg/dL
| Increased urination frequency |

**Glucose Metabolism:**

**First Trimester Changes:**
- Increased insulin sensitivity
- Enhanced peripheral glucose uptake
- Fasting glucose may decrease slightly
- May cause hypoglycemia in fasting state

**Later Implications:**
- Placental hormones → insulin resistance
- Gestational diabetes risk later

**Endocrine Changes:**

**hCG Dynamics:**
- Peaks at ~9-10 weeks (~100,000 mIU/mL)
- Declines to plateau by week 20
- Functions:
  - Maintains corpus luteum
  - Stimulates thyroid gland
  - Promotes angiogenesis
  - Immune modulation

**Progesterone Production:**
- First 6-8 weeks: corpus luteum
- After luteoplacental shift: placenta
- Functions:
  - Maintains endometrium
  - Decreases uterine contractility
  - Promotes immune tolerance
  - Breast development

**Estrogen Production:**
- Increases progressively
- Fetal adrenal (DHEA) → placenta (estrogen)
- Functions:
  - Uterine growth
  - Breast development
  - Vascular function
  - Promotes hepatic protein synthesis

**Thyroid Function:**

**hCG-Thyroid Interaction:**
- hCG has TSH-like activity
- Free T4 slightly increased
- TSH slightly decreased
- Hyperemesis may have thyroid component

**Breast Changes:**

**Early Development:**
- Ductal and alveolar proliferation
- Increased vascularity
- Increased size, tenderness
- Montgomery's tubercles prominent
- Areolar pigmentation increases

**Uterine Changes:**

**First Trimester:**
- Remains pelvic organ
- Weight: 60 g → 140 g
- Shape: globular
- Chadwick's sign: bluish discoloration
- Goodell's sign: cervical softening
- Hegar's sign: compressibility of isthmus

**Placental Development:**

**Timeline:**
- Implantation: day 6-10 post-conception
- Villous development: weeks 5-12
- Maternal blood flow established: week 12

**Functions:**
- Gas exchange
| Nutrient delivery |
- Waste removal |
- Hormone production |
- Immune barrier |

**Embryonic/Fetal Development:**

**Critical Periods:**

| Organ | Critical Period | Teratogen Risk |
|-------|----------------|----------------|
| Brain | 3-16 weeks | Neural tube defects |
| Heart | 3-8 weeks | Cardiac defects |
| Palate | 6-9 weeks | Cleft palate |
| Limbs | 4-8 weeks | Limb abnormalities |
| External genitalia | 8-12 weeks | Ambiguous genitalia |

**Teratogen Principles:**
- Timing determines effect
- Dose-dependent
- Susceptibility varies
| Some agents have specific effects |`,
      keyPoints: [
        'Plasma volume begins expanding as early as 6 weeks',
        'GFR increases 50% with corresponding creatinine decrease',
        'hCG peaks at 9-10 weeks then declines',
        'Organ-specific critical periods determine teratogen effects'
      ],
      vocabulary: [
        { term: 'Luteoplacental Shift', definition: 'Transfer of progesterone production from corpus luteum to placenta at 6-8 weeks' },
        { term: 'Chadwick\'s Sign', definition: 'Bluish discoloration of cervix/vagina in pregnancy' },
        { term: 'Teratogen', definition: 'Agent that causes birth defects' },
        { term: 'RAAS', definition: 'Renin-Angiotensin-Aldosterone System' }
      ],
      quiz: [
        {
          question: 'At what gestational age does hCG typically peak?',
          options: [
            '4-5 weeks',
            '9-10 weeks',
            '14-15 weeks',
            '20 weeks'
          ],
          correctAnswer: 1,
          explanation: 'hCG typically peaks at approximately 9-10 weeks gestation at levels around 100,000 mIU/mL, then gradually declines to a plateau by week 20.',
        },
        {
          question: 'What is the critical period for heart development?',
          options: [
            '3-8 weeks',
            '10-12 weeks',
            '14-16 weeks',
            '20-24 weeks',
          ],
          correctAnswer: 0,
          explanation: 'The critical period for heart development is weeks 3-8 of gestation. Exposure to teratogens during this window can result in structural cardiac defects.',
        }
      ]
    },
    {
      level: 5,
      title: 'Advanced First Trimester Assessment and Genetics',
      content: `Early pregnancy assessment encompasses sophisticated genetic screening, diagnostic testing, and detailed anatomic evaluation to optimize pregnancy outcomes.

**First Trimester Genetics:**

**Cell-Free DNA (cfDNA) Technology:**

**Technical Aspects:**
- Fragments of fetal DNA in maternal plasma
- Derive from apoptotic trophoblasts
- Comprise 10-20% of total cell-free DNA
- Detectable from 4 weeks, reliable from 10 weeks

**Analytic Methods:**
- **Massively parallel sequencing (MPS):**
  - Random DNA sequencing
  - Chromosome representation analysis

- **Targeted analysis:**
  - SNP-based approach
  - Specific chromosome regions

**Performance Characteristics:**

| Condition | Detection Rate | False Positive Rate |
|-----------|----------------|---------------------|
| Trisomy 21 | >99% | <0.5% |
| Trisomy 18 | 97-99% | 0.2-0.4% |
| Trisomy 13 | 87-99% | 0.2-0.4% |
| Sex chromosome | 95-99% | ~1% |

**Clinical Applications:**
- Aneuploidy screening
- Fetal sex determination
| Microdeletion screening (controversial) |
- Single gene disorders (emerging) |

**First Trimester Ultrasound:**

**Nuchal Translucency (NT) Measurement:**

**Technical Requirements:**
- 11-13 weeks, 6 days gestation
- CRL 45-84 mm
- Midsagittal view
- Fetal neutral position
- Magnification (fetal image fills 75% of screen)
- Caliper placement (inner-to-inner)

**Interpretation:**
- NT increases with gestational age
- Must use gestational-age specific cutoffs
- NT > 3.5 mm considered markedly increased

**Associated Findings:**
- Reversed A-wave in ductus venosus
- Tricuspid regurgitation
- Absent/hypoplasic nasal bone

**Fetal Echocardiography:**

**Indications:**
- Increased NT (>3.5 mm)
- Abnormal ductus venosus Doppler
- Family history of congenital heart disease
- Maternal diabetes (pre-gestational)
| Autoimmune antibodies (SSA/SSB) |
- Teratogen exposure |

**Early Anatomic Survey:**

**13-14 Week Scan:**
- Cranium and brain
- Spine
- Stomach
| Bladder |
- Four-chamber heart (possible)
- Upper and lower limbs
- Umbilical cord insertion

**Chorionic Villus Sampling (CVS):**

**Procedure:**

**Timing:** 10-13 weeks

**Approaches:**
- **Transcervical:**
  - Through cervical canal
  - Ultrasound-guided catheter
  - Placenta location consideration

- **Transabdominal:**
  - Through abdominal wall
  - Needle aspiration
  - Local anesthesia

**Sample Analysis:**
- Cytogenetics (karyotype, FISH)
- Chromosomal microarray (CMA)
- Specific genetic testing (CF, SMA, etc.)

**Advantages:**
- Early diagnosis
- Multiple testing options
- Rapid results possible

**Disadvantages:**
- Pregnancy loss risk: 0.5-1%
- Limb defects (theoretical, older data)
| Mosaicism (confined placental) |
- Cannot detect NTDs

**First Trimester Maternal Serum Screening:**

**PAPP-A (Pregnancy-Associated Plasma Protein A):**
- Produced by syncytiotrophoblasts
- Low levels associated with:
  - Trisomy 21, 18
  - SGA
  - Preeclampsia
  - Stillbirth

**Free Beta-hCG:**
- High levels associated with Trisomy 21
- Low levels associated with Trisomy 18, 13

**Integrated Risk Assessment:**
- Combines NT, PAPP-A, beta-hCG
- Maternal age
- Nuchal fold, nasal bone
- Adjusted detection rate >90%

**Epigenetic Screening:**
- DNA methylation patterns
- Placental health assessment
- Preeclampsia risk prediction
- Emerging technology

**Early Pregnancy Complications:**

**Subchorionic Hematoma:**
- Collection of blood between chorion and uterus
- Incidence: ~1-3%
- Ultrasound appearance: crescentic collection
- Clinical significance controversial
- Increased miscarriage risk if large

**Prognostic Factors:**
- Size relative to gestational sac
- Maternal age
- Presence of bleeding
- Fetal cardiac activity

**Management:**
- Observation (most resolve)
- Activity modification (controversial)
- Repeat ultrasound

**First Trimester Bleeding:**

**Differential:**
- Subchorionic hematoma
- Threatened abortion
- Incomplete abortion
- Ectopic pregnancy
- Molar pregnancy

**Evaluation:**
- Ultrasound (first-line)
- Serial hCG (if ultrasound nondiagnostic)
- Rh status if applicable (Rhogam if Rh-negative)

**Prognosis:**
- Fetal cardiac activity = >90% survival
- No cardiac activity = miscarriage inevitable
- Subchorionic hemorrhage: 70-90% survival`,
      keyPoints: [
        'Cell-free DNA provides >99% detection for Down syndrome with low false positive',
        'NT measurement requires strict technical criteria for accuracy',
        'CVS allows early diagnosis but carries 0.5-1% pregnancy loss risk',
        'Integrated risk assessment combines multiple markers for optimal detection'
      ],
      vocabulary: [
        { term: 'CMA', definition: 'Chromosomal Microarray - high-resolution genetic testing' },
        { term: 'FISH', definition: 'Fluorescence In Situ Hybridization - rapid genetic test for specific chromosomes' },
        { term: 'SGA', definition: 'Small for Gestational Age - below 10th percentile for weight' },
        { term: 'Mosaicism', definition: 'Presence of two or more cell lines with different genetics' }
      ],
      quiz: [
        {
          question: 'What is the gestational age window for performing chorionic villus sampling (CVS)?',
          options: [
            '6-9 weeks',
            '10-13 weeks',
            '14-18 weeks',
            '20-24 weeks'
          ],
          correctAnswer: 1,
          explanation: 'CVS is performed between 10-13 weeks gestation. This allows for earlier diagnosis than amniocentesis while providing sufficient placental tissue for analysis.',
        },
        {
          question: 'What is the primary advantage of integrated risk assessment?',
          options: [
            'Lower cost',
            'Higher detection rate for aneuploidy',
            'Shorter time to results',
            'No ultrasound needed',
          ],
          correctAnswer: 1,
          explanation: 'Integrated risk assessment combining NT, PAPP-A, beta-hCG, and maternal age provides detection rates >90% for Down syndrome with lower false positive rates than any single marker.',
        }
      ]
    }
  ],
  relatedTopics: [
    'pregnancy-overview',
    'prenatal-care',
    'pregnancy-complications'
  ],
  lastUpdated: '2025-01-25',
  references: [
    'ACOG Practice Bulletin No. 226',
    'SMFM Consult Series: First Trimester Screening',
    'Williams Obstetrics 26th Edition'
  ]
};
