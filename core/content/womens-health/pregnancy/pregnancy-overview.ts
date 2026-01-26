import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const pregnancyOverview: WomensHealthContent = {
  id: 'pregnancy-overview',
  title: 'Pregnancy Overview',
  category: 'Pregnancy',
  complexityLevels: [
    {
      level: 1,
      title: 'Understanding Pregnancy',
      content: `Pregnancy is the time when a baby grows inside a woman's uterus. It usually lasts about 40 weeks, counting from the first day of your last period.

**The Three Trimesters:**

**First Trimester (Weeks 1-12)**
- Baby's organs begin to form
- Many women feel tired and nauseous
- Missed period is often the first sign
- Baby is called an embryo

**Second Trimester (Weeks 13-26)**
- You may feel better and have more energy
- You can usually feel the baby move around week 20
- Your belly starts to show
- Baby is called a fetus

**Third Trimester (Weeks 27-40)**
- Baby grows rapidly
- You may feel uncomfortable as baby gets bigger
- Baby moves into position for birth
- Your body prepares for labor

**Common Signs of Pregnancy:**
- Missed period
- Nausea (morning sickness)
- Breast tenderness
- Needing to urinate more often
- Feeling tired
- Food cravings or dislikes

**Taking Care of Yourself:**
- Start prenatal care early
- Take prenatal vitamins with folic acid
- Eat healthy foods
- Avoid alcohol, tobacco, and drugs
- Stay active with safe exercise
- Get plenty of rest

**Remember:** Every pregnancy is different. If you think you might be pregnant, take a pregnancy test and see a healthcare provider.
`,
      keyPoints: [
        'Pregnancy typically lasts 40 weeks from the last period',
        'Pregnancy is divided into three trimesters',
        'Early prenatal care is important for a healthy pregnancy',
        'Common signs include missed period, nausea, and fatigue',
      ],
      vocabulary: [
        { term: 'Trimester', definition: 'Pregnancy divided into three 3-month periods' },
        { term: 'Embryo', definition: 'Name for baby in first 8 weeks of pregnancy' },
        { term: 'Fetus', definition: 'Name for baby from 9 weeks until birth' },
        { term: 'Prenatal Care', definition: 'Medical care during pregnancy' }
      ],
      quiz: [
        {
          question: 'How long does a typical pregnancy last?',
          options: [
            '36 weeks',
            '40 weeks',
            '44 weeks',
            '48 weeks',
          ],
          correctAnswer: 1,
          explanation: 'A typical full-term pregnancy lasts about 40 weeks, counting from the first day of the last menstrual period.',
        },
        {
          question: 'What is a common sign of early pregnancy?',
          options: [
            'Increased appetite',
            'Missed period',
            'Weight loss',
            'Better vision',
          ],
          correctAnswer: 1,
          explanation: 'A missed period is often the first and most noticeable sign of pregnancy. Other early signs can include nausea, breast tenderness, and fatigue.',
        }
      ]
    },
    {
      level: 2,
      title: 'Pregnancy Basics and Fetal Development',
      content: `Understanding the progression of pregnancy and fetal development helps expectant parents track the amazing journey of growth and prepare for each stage.

**Conception and Implantation:**

**Week 1-2:**
- Egg is released from ovary (ovulation)
- Sperm fertilizes egg in fallopian tube
- Fertilized egg travels to uterus
- Implanted in uterine lining

**Week 3-4:**
- Implantation complete
- Placenta begins to form
- Hormone levels rise (hCG, progesterone)
- Pregnancy test becomes positive

**Fetal Development Timeline:**

**First Trimester (Weeks 1-12):**

| Week | Developmental Milestones |
|------|------------------------|
| 4-5 | Heart begins to beat |
| 6-8 | Major organs forming, arms and legs appear |
| 9-10 | Fingers and toes form, facial features develop |
| 11-12 | Baby can make movements, sex organs form |

**Second Trimester (Weeks 13-26):**

| Week | Developmental Milestones |
|------|------------------------|
| 13-16 | Skin forms, baby can suck thumb |
| 17-20 | Mother feels movement (quickening), heartbeat audible |
| 21-24 | Hair grows, lungs develop |
| 25-26 | Eyes open, responds to sounds |

**Third Trimester (Weeks 27-40):**

| Week | Developmental Milestones |
|------|------------------------|
| 27-32 | Rapid weight gain, brain development |
| 33-36 | Baby turns head-down, bones harden |
| 37-40 | Full term, ready for birth |

**Pregnancy Terminology:**

**Gestational Age:**
- Measured from first day of last period
- Adds ~2 weeks to fetal age
- Standard way pregnancy is dated

**Fetal Age:**
- Actual age of fetus from conception
- About 2 weeks less than gestational age

**Due Date Calculation:**
- Naegele's Rule: LMP + 1 year - 3 months + 7 days
- Or: LMP + 280 days (40 weeks)
- Only 5% of babies born on exact due date
- Full term: 37-42 weeks

**Pregnancy Categories by Duration:**

| Category | Weeks |
|----------|-------|
| Preterm | <37 |
| Early term | 37-38 |
| Full term | 39-40 |
| Late term | 41 |
| Postterm | 42+ |

**Physical Changes:**

**First Trimester:**
- Breast enlargement and tenderness
- Fatigue and sleepiness
- Nausea and vomiting
- Frequent urination
- Food aversions/cravings

**Second Trimester:**
- Pregnancy becomes visible
- "Glow" of pregnancy
- Increased energy
- Linea nigra (dark line on belly)
- Skin changes (stretch marks begin)

**Third Trimester:**
- Rapid belly growth
- Back pain and pelvic pressure
- Shortness of breath
- Difficulty sleeping
| Braxton Hicks contractions |
`,
      keyPoints: [
        'Gestational age is measured from the last menstrual period',
        'Major organ development occurs in the first trimester',
        'Quickening (feeling movement) typically occurs around weeks 17-20',
        'Full term is defined as 39-40 weeks',
      ],
      vocabulary: [
        { term: 'Gestational Age', definition: 'Age of pregnancy measured from last menstrual period' },
        { term: 'Quickening', definition: 'First movements of fetus felt by mother' },
        { term: 'Linea Nigra', definition: 'Dark line appearing on belly during pregnancy' },
        { term: 'Braxton Hicks', definition: 'Practice contractions that occur before true labor' }
      ],
      quiz: [
        {
          question: 'How is gestational age calculated?',
          options: [
            'From the date of conception',
            'From the first day of the last menstrual period',
            'From when the pregnancy test is positive',
            'From the first prenatal visit',
          ],
          correctAnswer: 1,
          explanation: 'Gestational age is calculated from the first day of the last menstrual period (LMP), which is approximately two weeks before conception occurred.',
        },
        {
          question: 'When is a pregnancy considered full term?',
          options: [
            '35-36 weeks',
            '37-38 weeks',
            '39-40 weeks',
            '41-42 weeks',
          ],
          correctAnswer: 2,
          explanation: 'Full term is defined as 39-40 weeks. Early term is 37-38 weeks, late term is 41 weeks, and preterm is less than 37 weeks.',
        }
      ]
    },
    {
      level: 3,
      title: 'Maternal Physiology and Adaptation',
      content: `Pregnancy induces profound physiological adaptations to support fetal development and prepare for lactation. Understanding these changes helps distinguish normal adaptations from pathology.

**Cardiovascular Changes:**

**Hemodynamic Adaptations:**

| Parameter | Non-pregnant | Pregnancy | Change |
|-----------|--------------|-----------|--------|
| Blood volume | 5 L | 6.5-7 L | ↑40-50% |
| Cardiac output | 4.5 L/min | 6 L/min | ↑30-50% |
| Heart rate | 70 bpm | 85 bpm | ↑10-20 bpm |
| Blood pressure | 120/80 | ↓first/↑third | Variable |

**Vascular Changes:**
- Systemic vascular resistance decreases
- Uterine blood flow increases to 500-700 mL/min
- Aortic compression by gravid uterus (supine hypotension syndrome)
- Varicose veins and hemorrhoids common

**Respiratory Changes:**
- Minute ventilation increases 40%
- Tidal volume increases (diaphragm elevation)
- Respiratory rate remains unchanged
- Shortness of breath common (dyspnea of pregnancy)

**Hematologic Changes:**

**Blood Composition:**
- Plasma volume increases more than RBC mass → physiologic anemia
- Hematocrit decreases to 32-36%
- WBC count increases to 12,000-18,000
- Increased clotting factors (hypercoagulable state)
- Fibrinogen increases to 400-500 mg/dL

**Iron Metabolism:**
- Increased iron requirements (1 g total during pregnancy)
- Iron absorption increases
- Supplemental iron often needed

**Renal Changes:**
- Kidney size increases 1-1.5 cm
- GFR increases 50% (creatinine 0.5-0.7 mg/dL)
| Ureters dilate (right > left) |
- Glycosuria and proteinuria may be normal
- Frequent urination from compression

**Gastrointestinal Changes:**

| Change | Effect |
|--------|--------|
| Decreased motility | Constipation |
| Reduced lower esophageal sphincter tone | Heartburn |
| Gallbladder stasis | Increased gallstone risk |
| Nausea/vomiting | Morning sickness |

**Endocrine Changes:**

**Placental Hormones:**
- **hCG:** Maintains corpus luteum, pregnancy test detection
- **hPL:** Anti-insulin effect, glucose sparing for fetus
- **Estrogen:** Uterine growth, breast development
- **Progesterone:** Maintains pregnancy, prevents contractions

**Maternal Hormones:**
- **Prolactin:** Increases 10-fold, prepares for lactation
- **Cortisol:** Increases, helps fetal lung maturation
- **Thyroid hormone:** Increased binding globulin, total T4 rises

**Reproductive Tract Changes:**

**Uterus:**
- Weight increases from 60 g to 1000 g
- Volume increases from 10 mL to 5 L
- Blood flow increases to 500-700 mL/min
- Braxton Hicks contractions (painless practice contractions)

**Cervix:**
- Softening (Goodell's sign)
- Mucus plug forms (protective barrier)
- Effacement and dilation near term

**Breasts:**
- Enlargement and tenderness
- Montgomery's tubercles prominent
- Colostrum production by 16 weeks
- Ready for lactation

**Weight Gain:**

**Recommended Total Weight Gain:**

| Pre-pregnancy BMI | Recommended Gain |
|-------------------|------------------|
| Underweight (<18.5) | 28-40 lbs |
| Normal (18.5-24.9) | 25-35 lbs |
| Overweight (25-29.9) | 15-25 lbs |
| Obese (≥30) | 11-20 lbs |

**Distribution of Weight Gain:**
- Baby: 7-8 lbs
- Placenta: 1-2 lbs
| Amniotic fluid: 2 lbs |
- Uterus: 2 lbs |
- Breast tissue: 1-2 lbs
- Blood volume: 3-4 lbs
- Maternal stores: 5-9 lbs
`,
      keyPoints: [
        'Blood volume increases 40-50% during pregnancy',
        'Physiologic anemia occurs due to greater plasma volume increase',
        'Hypercoagulable state increases DVT risk',
        'Weight gain recommendations depend on pre-pregnancy BMI',
      ],
      vocabulary: [
        { term: 'Supine Hypotension Syndrome', definition: 'Drop in blood pressure when lying flat due to vena cava compression' },
        { term: 'Physiologic Anemia', definition: 'Normal hemodilution of pregnancy' },
        { term: 'Goodell\'s Sign', definition: 'Softening of the cervix in early pregnancy' },
        { term: 'Colostrum', definition: 'First milk produced, rich in antibodies' }
      ],
      quiz: [
        {
          question: 'What causes physiologic anemia in pregnancy?',
          options: [
            'Iron deficiency',
            'Plasma volume increase greater than red blood cell mass increase',
            'Decreased bone marrow production',
            'Increased red blood cell destruction',
          ],
          correctAnswer: 1,
          explanation: 'Physiologic anemia of pregnancy is caused by plasma volume increasing approximately 40-50% while red blood cell mass increases only about 20%, resulting in hemodilution.',
        },
        {
          question: 'What is a normal hematocrit during pregnancy?',
          options: [
            '28-30%',
            '32-36%',
            '40-45%',
            '48-52%',
          ],
          correctAnswer: 1,
          explanation: 'Normal hematocrit in pregnancy is 32-36%, lower than the non-pregnant range of 37-47% due to physiologic hemodilution.',
        }
      ]
    },
    {
      level: 4,
      title: 'Prenatal Assessment and Screening',
      content: `Comprehensive prenatal assessment combines routine surveillance with targeted screening to optimize outcomes for mother and fetus.

**Initial Prenatal Assessment:**

**Comprehensive History:**
- Medical and surgical history
- Obstetric and gynecologic history
- Family history (genetic conditions)
- Social history (substance use, domestic violence)
- Current medications
- Allergies

**Physical Examination:**
- Vital signs (including baseline BP)
- Height, weight, BMI calculation
- Thyroid examination
- Breast examination
- Cardiovascular examination
- Abdominal and pelvic examination
- Estimated gestational age confirmation

**Laboratory Testing:**

**First Trimester Labs (Routine):**
- Blood type and Rh status
- Antibody screen
- Complete blood count
- Rubella titer
- Hepatitis B surface antigen
- Syphilis serology
- HIV testing
| Urinalysis and culture |
- Cervical cancer screening (if due)

**Optional First Trimester Labs:**
- Varicella titer
- TSH (thyroid function)
- TB screening (risk-based)
- Genetic carrier screening

**Prenatal Genetic Screening:**

**First Trimester Screen (11-13 weeks):**
- Nuchal translucency ultrasound
- PAPP-A (pregnancy-associated plasma protein A)
- Free beta-hCG
- Detects: Down syndrome (Trisomy 21), Trisomy 18/13
- Detection rate: ~85% for Down syndrome

**Second Trimester Screen (15-20 weeks):**
- Quad screen:
  - AFP (alpha-fetoprotein)
  - hCG
  - Estriol
  - Inhibin A
- Detection rate: ~80% for Down syndrome

**Cell-Free DNA (NIPT):**
- Can be done from 10 weeks
- Screens for common aneuploidies
- Detection rate: >99% for Down syndrome
- Also determines fetal sex
- Optional/screening, not diagnostic

**Diagnostic Testing:**

**Chorionic Villus Sampling (CVS):**
- Performed 10-13 weeks
- Samples placental tissue
| Miscarriage risk: 0.5-1% |
- Earlier diagnosis than amniocentesis

**Amniocentesis:**
- Performed 15-20 weeks
- Samples amniotic fluid
- Miscarriage risk: 0.1-0.3%
- Fetal karyotype and genetic testing

**Anatomy Ultrasound (18-22 weeks):**
- Comprehensive fetal anatomic survey
- Placental location
- Amniotic fluid volume
- Fetal growth assessment
- Detects structural abnormalities

**Routine Prenatal Visits:**

**Standard Schedule:**

| Timing | Frequency |
|--------|-----------|
| Until 28 weeks | Every 4 weeks |
| 28-36 weeks | Every 2 weeks |
| 36 weeks-delivery | Weekly |

**Visit Components:**
- Blood pressure measurement
- Weight check
| Urine dip (protein, glucose) |
- Fundal height measurement (after 20 weeks)
| Fetal heart rate assessment |
- Patient questions and concerns

**Gestational Hypertension Disorders Screening:**
- Blood pressure at each visit
- Baseline labs for high-risk patients
- Education on warning signs

**Gestational Diabetes Screening:**

**Universal Screening (24-28 weeks):**
- 1-hour 50g glucose challenge test
- If ≥140 mg/dL → 3-hour 100g GTT

**Diagnostic Criteria (Carpenter-Coustan):**
- Fasting: ≥95 mg/dL
- 1-hour: ≥180 mg/dL
- 2-hour: ≥155 mg/dL
- 3-hour: ≥140 mg/dL
| (2+ abnormal values = GDM)

**Group B Strep Screening (35-37 weeks):**
- Vaginal/rectal culture
- Positive patients receive IV antibiotics in labor

**Fetal Surveillance (High-Risk Pregnancies):**
- Non-stress test (NST)
- Biophysical profile (BPP)
- Doppler velocimetry
- Contraction stress test (rare)
`,
      keyPoints: [
        'Standard prenatal visit schedule increases in frequency as pregnancy advances',
        'Cell-free DNA screening offers >99% detection for Down syndrome',
        'Gestational diabetes screening occurs at 24-28 weeks',
        'Group B strep screening at 35-37 weeks guides intrapartum management',
      ],
      vocabulary: [
        { term: 'NIPT', definition: 'Non-Invasive Prenatal Testing - cell-free DNA screening from maternal blood' },
        { term: 'Nuchal Translucency', definition: 'Fluid collection at back of fetal neck, marker for aneuploidy' },
        { term: 'Biophysical Profile', definition: 'Ultrasound assessment of fetal well-being' },
        { term: 'Fundal Height', definition: 'Measurement from pubic bone to top of uterus' }
      ],
      quiz: [
        {
          question: 'What is the detection rate of cell-free DNA (NIPT) for Down syndrome?',
          options: [
            '80%',
            '85%',
            '90%',
            '>99%',
          ],
          correctAnswer: 3,
          explanation: 'Cell-free DNA screening (NIPT) has a detection rate of >99% for Down syndrome (Trisomy 21), making it the most sensitive screening test available.',
        },
        {
          question: 'When is routine gestational diabetes screening performed?',
          options: [
            '12-14 weeks',
            '18-22 weeks',
            '24-28 weeks',
            '32-36 weeks',
          ],
          correctAnswer: 2,
          explanation: 'Universal gestational diabetes screening is performed at 24-28 weeks using a 1-hour 50g glucose challenge test, followed by a 3-hour GTT if indicated.',
        }
      ]
    },
    {
      level: 5,
      title: 'High-Risk Pregnancy and Advanced Assessment',
      content: `High-risk pregnancies require specialized monitoring, advanced diagnostic techniques, and multidisciplinary management to optimize maternal and fetal outcomes.

**Classification of High-Risk Pregnancy:**

**Maternal Risk Factors:**
- Age <18 or >35
- Pre-existing medical conditions
- Previous pregnancy complications
- BMI ≥30 or <18.5
- Substance use
- Chronic hypertension
- Pre-gestational diabetes

**Pregnancy-Related Risk Factors:**
- Multifetal gestation
- Preeclampsia
| Gestational diabetes |
- Preterm labor |
- Fetal growth restriction
- Placenta previa
- Oligohydramnios/Polyhydramnios

**Multifetal Gestation:**

**Types:**
- **Dizygotic (fraternal):** Two separate eggs, two placentas (di/di)
- **Monozygotic (identical):** Single egg splits
  - Di/di: Separate placentas, separate sacs
  - Mono/di: Shared placenta, separate sacs
  - Mono/mono: Shared placenta, shared sac (highest risk)

**Complications:**
- Preterm birth (average delivery: 36 weeks)
- Preeclampsia (2-3x increased risk)
- Twin-twin transfusion syndrome (mono/di, mono/mono)
- Intrauterine growth restriction (IUGR)
- Discordant growth

**Monitoring:**
- Ultrasound every 4-6 weeks
- Cervical length screening (from 16-24 weeks)
- Increased nutritional requirements (600 kcal/day additional)
- More frequent prenatal visits

**Hypertensive Disorders:**

**Chronic Hypertension:**
- Present before 20 weeks
- Baseline end-organ assessment
- Medication adjustment
- Increased surveillance for superimposed preeclampsia

**Preeclampsia:**
- New onset hypertension ≥20 weeks
- Proteinuria or end-organ dysfunction
- Severe features: BP ≥160/110, thrombocytopenia, elevated LFTs
- Delivery is only cure
- Magnesium sulfate for seizure prophylaxis (severe features)
- Antihypertensives for BP control

**Eclampsia:**
- Preeclampsia + seizures
- Medical emergency
- Magnesium sulfate treatment
- Stabilization then delivery

**HELLP Syndrome:**
- Hemolysis, Elevated Liver enzymes, Low Platelets
- Variant of preeclampsia
- High maternal morbidity
- Prompt delivery indicated

**Preterm Labor:**

**Risk Factors:**
- Previous preterm birth
- Multifetal gestation
- Short cervix (<25 mm)
- Infection
| Uterine overdistension |
- Smoking, substance use

**Assessment:**
- Fetal fibronectin (fFN) testing
- Cervical length by ultrasound
- Tocometry (contraction monitoring)

**Management:**
- Corticosteroids (betamethasone) for fetal lung maturity
- Magnesium sulfate for neuroprotection (23-32 weeks)
- Tocolytics (short-term prolongation)
- Antibiotics if PPROM (preterm premature rupture of membranes)

**Fetal Growth Restriction (FGR):**

**Etiologies:**
- Placental insufficiency (most common)
- Maternal factors (hypertension, malnutrition)
- Fetal factors (infection, aneuploidy)
- Umbilical cord abnormalities

**Diagnosis:**
- Estimated fetal weight <10th percentile
- Abnormal Doppler studies
- Decreased amniotic fluid
- Growth pattern on serial ultrasounds

**Surveillance:**
- Weekly or twice-weekly NST
- BPP assessment
| Doppler velocimetry (umbilical artery, MCA) |
- Delivery timing based on gestational age and Doppler findings

**Placental Abnormalities:**

**Placenta Previa:**
- Placenta covers internal cervical os
- Painless bleeding
- C-section delivery required
- Resolves in many cases as uterus grows

**Placenta Acreta Spectrum:**
- Abnormal placental attachment to myometrium
- **Accreta:** Attached to myometrium
- **Increta:** Invades myometrium
- **Percreta:** Through uterine serosa
- Risk: Previous C-section, previa, Asherman syndrome
- Antenatal diagnosis by MRI
- Planned delivery with surgical team

**Fetal Anomalies:**

**Detection:**
- Detailed anatomy ultrasound (18-22 weeks)
- Fetal echocardiogram if indicated
- MRI for CNS anomalies
- Amniocentesis for genetic diagnosis

**Management:**
- Counseling regarding prognosis
- Delivery planning at tertiary center
- Potential for in-utero interventions (rare)
- Postnatal surgical planning

**Advanced Fetal Surveillance:**

**Doppler Velocimetry:**
- **Umbilical artery:** placental resistance
- **Middle cerebral artery:** fetal anemia
- **Uterine arteries:** preeclampsia risk
- **Ductus venosus:** fetal acid-base status

**Biophysical Profile (BPP):**
- NST (2 points)
- Fetal breathing (2 points)
- Fetal movement (2 points)
- Fetal tone (2 points)
- Amniotic fluid volume (2 points)
- Score 8-10: reassuring
- Score 6: equivocal, repeat
- Score 0-4: abnormal, consider delivery

**Contraction Stress Test:**
- Assesses fetal response to uterine contractions
- Late decelerations indicate uteroplacental insufficiency
- Rarely used today, replaced by BPP
`,
      keyPoints: [
        'Multifetal gestations require specialized monitoring for complications like TTTS',
        'Preeclampsia is a progressive multisystem disorder requiring delivery for cure',
        'Fetal growth restriction management balances prematurity risks with ongoing pregnancy risks',
        'Placenta accreta spectrum requires specialized surgical planning',
      ],
      vocabulary: [
        { term: 'TTTS', definition: 'Twin-Twin Transfusion Syndrome - blood imbalance between mono/di twins' },
        { term: 'fFN', definition: 'Fetal Fibronectin - protein indicating risk of preterm labor' },
        { term: 'HELLP', definition: 'Hemolysis, Elevated Liver enzymes, Low Platelets' },
        { term: 'MCA Doppler', definition: 'Middle Cerebral artery Doppler to assess fetal anemia' }
      ],
      quiz: [
        {
          question: 'What is the most appropriate management for severe preeclampsia?',
          options: [
            'Bed rest at home',
            'Delivery (only cure)',
            'Antibiotics',
            'Increased fluid intake',
          ],
          correctAnswer: 1,
          explanation: 'Delivery is the only cure for preeclampsia. Timing depends on gestational age and disease severity, with magnesium sulfate for seizure prophylaxis in severe cases.',
        },
        {
          question: 'What is a biophysical profile score that requires further evaluation?',
          options: [
            '10',
            '8',
            '6',
            'None of the above',
          ],
          correctAnswer: 2,
          explanation: 'A BPP score of 6 is equivocal and requires further evaluation or repeat testing. Scores of 8-10 are reassuring, while scores of 0-4 are abnormal and may indicate need for delivery.',
        }
      ]
    }
  ],
  relatedTopics: [
    'prenatal-care',
    'labor-delivery',
    'postpartum-care',
    'pregnancy-complications',
  ],
  lastUpdated: '2025-01-25',
  references: [
    'ACOG Practice Bulletins',
    'Williams Obstetrics 26th Edition',
    'American College of Obstetricians and Gynecologists Guidelines',
  ]
};
