import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const trimesterSecond: WomensHealthContent = {
  id: 'trimester-second',
  title: 'Second Trimester of Pregnancy',
  category: 'Pregnancy',
  complexityLevels: [
    {
      level: 1,
      title: 'The Second Trimester - Months 4-6',
      content: `The second trimester spans weeks 13 to 26 of pregnancy. Many women feel their best during this time!

**What is Happening:**

**Weeks 13-16:**
- Baby is about 4-5 inches long
- Baby can suck their thumb
- Baby starts making facial expressions
- You may start feeling better with less nausea

**Weeks 17-20:**
- Baby is about 6 inches long
- You may feel the baby move for the first time!
- Baby's heartbeat can be heard
| Baby develops eyebrows and hair |

**Weeks 21-24:**
- Baby is about 10-12 inches long
- Baby's skin is still wrinkled
- Baby responds to sounds
| Baby practices breathing movements |

**Weeks 25-26:**
- Baby is about 13-14 inches long
- Baby's lungs are developing
- Baby's eyes begin to open
| Baby weighs about 1.5-2 pounds |

**Common Feelings:**
- More energy (often called the "honeymoon phase")
- Less nausea than first trimester
- Belly becomes noticeable
- Back pain may begin
| Shortness of breath |
- Skin changes (stretch marks, line on belly) |

**Important Appointments:**
- Anatomy scan ultrasound (around 20 weeks)
- Glucose screening test (around 24-28 weeks)
- Regular prenatal visits every 4 weeks

**When to Call Your Doctor:**
- Vaginal bleeding
- Severe abdominal pain
| Fluid leakage from vagina |
- Decreased or no baby movement after feeling movement |
- Severe headache |
- Vision changes
`,
      keyPoints: [
        'Second trimester covers weeks 13-26 of pregnancy',
        'Quickening (first movements) typically occurs around weeks 17-20',
        'Many women feel better with more energy during this time',
        'Anatomy ultrasound and glucose screening are key tests',
      ],
      vocabulary: [
        { term: 'Quickening', definition: 'First fetal movements felt by the mother' },
        { term: 'Anatomy Scan', definition: 'Detailed ultrasound to check baby\'s development' },
        { term: 'Glucose Screening', definition: 'Test for gestational diabetes' },
        { term: 'Honeymoon Phase', definition: 'Period in second trimester when many women feel best' }
      ],
      quiz: [
        {
          question: 'When do most women first feel their baby move?',
          options: [
            '8-12 weeks',
            '17-20 weeks',
            '28-30 weeks',
            '35-37 weeks',
          ],
          correctAnswer: 1,
          explanation: 'Most women feel their baby move (quickening) for the first time between weeks 17-20 of pregnancy, though it can range from 16-25 weeks.',
        },
        {
          question: 'What important screening test is typically done around weeks 24-28?',
          options: [
            'Blood type testing',
            'Glucose screening for gestational diabetes',
            'Ultrasound for due date',
            'Group B strep test',
          ],
          correctAnswer: 1,
          explanation: 'The glucose screening test for gestational diabetes is typically performed between 24-28 weeks of pregnancy. This is a standard screening for all pregnant women.',
        }
      ]
    },
    {
      level: 2,
      title: 'Second Trimester Development and Changes',
      content: `The second trimester is often called the "golden period" of pregnancy as energy typically improves and the pregnancy becomes more visible.

**Fetal Development:**

**Week 13-16 (Month 4):**
- Fetal length: ~4-5 inches
- Fetal weight: ~2-4 ounces
- Lanugo (fine hair) covers body
- Kidneys begin producing urine
- Fetal movements begin (not yet felt)
- Sex may be determinable on ultrasound

**Week 17-20 (Month 5):**
- Fetal length: ~6 inches
- Fetal weight: ~9-12 ounces
- **Quickening** (first movements typically felt)
- Vernix caseosa (creamy coating) develops
- Eyebrows and lashes appear
- Hearing developing
- Heartbeat audible with Doppler

**Week 21-24 (Month 6):**
- Fetal length: ~10-12 inches
- Fetal weight: ~1-1.5 pounds
- Lung development (surfactant production begins)
- Responds to sounds and voices
- Sleep-wake patterns established
- Skin translucent, wrinkled

**Week 25-26:**
- Fetal length: ~13-14 inches
- Fetal weight: ~1.5-2 pounds
- Eyes begin to open
- Fingernails developed
- Practice breathing movements
| Viable (survival possible with intensive care) |

**Maternal Changes:**

**Physical Symptoms:**

**Positive Changes:**
- Increased energy ("honeymoon phase")
- Reduced nausea
- Thickening hair
| "Pregnancy glow" (skin changes) |

**New Symptoms:**
- Growing belly visible
- Back pain (increased weight, posture changes)
- Round ligament pain (sharp groin pain)
- Shortness of breath (uterus pushing on diaphragm)
| Skin changes (stretch marks, linea nigra) |
- Increased vaginal discharge |
- Congestion/bleeding gums |

**Braxton Hicks Contractions:**
- Irregular "practice" contractions
- Usually painless
| Help prepare uterus for labor |
- Different from true labor (regular, increasing intensity)

**Weight Gain:**

**Recommended Gain:**

| Pre-pregnancy BMI | Total Gain | 2nd Trimester Rate |
|-------------------|------------|-------------------|
| Underweight | 28-40 lbs | ~1 lb/week |
| Normal | 25-35 lbs | ~1 lb/week |
| Overweight | 15-25 lbs | ~0.6 lb/week |
| Obese | 11-20 lbs | ~0.5 lb/week |

**Prenatal Testing and Screenings:**

**Anatomy Ultrasound (18-22 weeks):**
- Detailed examination of fetal anatomy
- Checks:
  - Brain, spine, heart
  - Stomach, kidneys, bladder
  - Limbs, face
  - Placenta location
  - Amniotic fluid volume

**Glucose Tolerance Testing (24-28 weeks):**
- Screen for gestational diabetes
- 1-hour test: drink 50g glucose, test blood in 1 hour
| If abnormal: 3-hour diagnostic test |

**Maternal Serum AFP (15-20 weeks):**
- Screens for neural tube defects
- May be part of quad screen

**Kick Counts:**
- Begin monitoring fetal movements (usually starting at 28 weeks)
- Count time for 10 movements
- Should be less than 2 hours

**Common Discomforts:**

| Symptom | Management |
|---------|------------|
| Back pain | Good posture, pregnancy belt, gentle exercise |
| Round ligament pain | Rest, gentle stretching, slow movements |
| Heartburn | Small meals, avoid triggers, antacids |
| Constipation | Fiber, fluids, stool softeners |
| Leg cramps | Stretching, hydration, magnesium |
| Swelling | Elevate feet, avoid standing long periods |
`,
      keyPoints: [
        'Quickening typically occurs between weeks 17-20',
        'Anatomy ultrasound at 18-22 weeks assesses fetal development',
        'Glucose screening at 24-28 weeks tests for gestational diabetes',
        'Weight gain of about 1 pound per week is typical in second trimester',
      ],
      vocabulary: [
        { term: 'Lanugo', definition: 'Fine, soft hair that covers the fetus' },
        { term: 'Vernix Caseosa', definition: 'Waxy white substance coating fetal skin' },
        { term: 'Linea Nigra', definition: 'Dark line appearing on the belly during pregnancy' },
        { term: 'Round Ligament Pain', definition: 'Sharp pain in groin caused by stretching ligaments' }
      ],
      quiz: [
        {
          question: 'What is vernix caseosa?',
          options: [
            'A type of fetal movement',
            'A waxy white substance protecting fetal skin',
            'The medical term for stretch marks',
            'A test for gestational diabetes',
          ],
          correctAnswer: 1,
          explanation: 'Vernix caseosa is a waxy white substance that coats and protects the fetal skin. It consists of dead cells, oils, and lanugo.',
        },
        {
          question: 'At what gestational age is the anatomy ultrasound typically performed?',
          options: [
            '8-10 weeks',
            '12-14 weeks',
            '18-22 weeks',
            '28-30 weeks',
          ],
          correctAnswer: 2,
          explanation: 'The detailed anatomy ultrasound is typically performed between 18-22 weeks gestation. This allows for visualization of fetal anatomy and detection of structural abnormalities.',
        }
      ]
    },
    {
      level: 3,
      title: 'Second Trimester Medical Assessment',
      content: `The second trimester involves critical screening and diagnostic assessments to evaluate fetal well-being and maternal health.

**Anatomy Ultrasound (18-22 weeks):**

**Complete Fetal Anatomic Survey:**

**Required Elements (AIUM guidelines):**

**Cranium and Brain:**
- Skull shape and integrity
- Lateral ventricles (choroid plexus)
- Cisterna magna
- Cerebellum
- Posterior fossa

**Face:**
- Eyes (lenses and orbits)
- Nose (nasal bone)
| Lips and philtrum (cleft assessment) |
- Profile (micrognathia, forehead)

**Neck:**
- Nuchal region (cysts, hygroma)
- Airway (when visible)

**Chest:**
- Heart position
- Cardiac situs
- Four-chamber view
- Outflow tracts (when possible)
- Lung assessment

**Abdomen:**
- Stomach (presence, position)
- Liver position
- Umbilical cord insertion
- Abdominal wall integrity
- Kidneys (both present)
- Bladder (visible)

**Spine:**
- Cervical, thoracic, lumbar, sacral
- Skin covering
- Alignment
- Vertebrae

**Extremities:**
- All four limbs present
- Long bones (length assessment)
- Hands and feet
- Fingers and toes (count)

**Placenta:**
- Location (previa assessment)
- Appearance
- Cord insertion site

**Amniotic Fluid:**
- Single deepest pocket ≥2 cm (normal)
- Amniotic fluid index (AFI) 5-24 cm (normal)

**Gestational Diabetes Screening:**

**Two-Step Approach (most common):**

**Step 1: 1-hour Glucose Challenge Test (GCT)**
- 50-gram glucose load
- No fasting required
- Blood glucose measured at 1 hour
- Positive result: ≥140 mg/dL (or ≥130 for higher sensitivity)

**Step 2: 3-hour 100-gram OGTT (if GCT positive)**

**Preparation:**
- Fasting for 8-12 hours
- Carbohydrate loading for 3 days prior
- Rest during test

**Diagnostic Criteria (Carpenter-Coustan):**

| Time | Threshold |
|------|-----------|
| Fasting | ≥95 mg/dL |
| 1-hour | ≥180 mg/dL |
| 2-hour | ≥155 mg/dL |
| 3-hour | ≥140 mg/dL |

Diagnosis: 2 or more abnormal values

**Fetal Echocardiography:**

**Indications:**
- Abnormal cardiac screening on anatomy ultrasound
- Increased nuchal translucency (>3.5 mm)
- Suspected chromosomal abnormality
- Family history of congenital heart disease
- Maternal diabetes
- Autoimmune antibodies (SSA/SSB)
- Teratogen exposure
- IVF pregnancy

**Assessment:**
- Cardiac situs
- Atrial and ventricular septa
- Four chambers
- Outflow tracts
- Great vessel relationships
- Venous connections
- Arrhythmias

**Cervical Length Screening:**

**Indications:**
- History of spontaneous preterm birth
- Multiple gestation
| Uterine anomalies |
- Cervical surgery history |
- Preterm labor symptoms |

**Technique:**
- Transvaginal ultrasound
- Measurement from internal to external os
- Performed at 16-24 weeks

**Interpretation:**
- >30 mm: low risk
- 25-30 mm: intermediate risk
- <25 mm: increased risk

**Management of Short Cervix:**
- Vaginal progesterone
- Consider cerclage if prior preterm birth
- Enhanced surveillance

**Fetal Movement Monitoring:**

**Starting at 28 weeks:**
- Kick counts daily
- Count time for 10 movements
- Should be <2 hours
- Best times: after meals, evening
- Report decreased movement

**Maternal Laboratory Assessment:**

**Mid-Pregnancy Labs:**
- Repeat CBC (check for anemia)
- Urinalysis (protein, glucose, infection)
- Antibody screen (if Rh-negative)
- Glucose screening
- Group B Strep screening (35-37 weeks)

**Rh-Negative Management:**
- Initial antibody screen
- RhoGAM at 28 weeks if unsensitized
`,
      keyPoints: [
        'Anatomy ultrasound assesses all major fetal organ systems',
        'Two-step approach screens for gestational diabetes',
        'Cervical length screening identifies preterm birth risk',
        'Fetal movement monitoring begins at 28 weeks',
      ],
      vocabulary: [
        { term: 'OGTT', definition: 'Oral Glucose Tolerance Test - diagnostic test for gestational diabetes' },
        { term: 'Situs', definition: 'Position and arrangement of organs within the body' },
        { term: 'Cisterna Magna', definition: 'Fluid-filled space at the back of the brain' },
        { term: 'RhoGAM', definition: 'Medication given to prevent Rh sensitization' }
      ],
      quiz: [
        {
          question: 'What is the diagnostic threshold for the 1-hour glucose challenge test?',
          options: [
            '≥120 mg/dL',
            '≥140 mg/dL',
            '≥160 mg/dL',
            '≥180 mg/dL',
          ],
          correctAnswer: 1,
          explanation: 'The 1-hour glucose challenge test is considered positive (abnormal) at a threshold of ≥140 mg/dL. A lower threshold of ≥130 mg/dL can be used for increased sensitivity.',
        },
        {
          question: 'What cervical length is considered high risk for preterm birth?',
          options: [
            '<35 mm',
            '<30 mm',
            '<25 mm',
            '<20 mm',
          ],
          correctAnswer: 2,
          explanation: 'A cervical length less than 25 mm on transvaginal ultrasound is associated with increased risk of spontaneous preterm birth. This triggers interventions such as progesterone supplementation.',
        }
      ]
    },
    {
      level: 4,
      title: 'Second Trimester Physiology and Complications',
      content: `The second trimester involves continued maternal physiological adaptations and the emergence of specific pregnancy complications.

**Maternal Physiological Changes:**

**Cardiovascular System:**

**Blood Pressure Changes:**
- Systemic vascular resistance reaches nadir (~24 weeks)
- BP typically lower than pre-pregnancy
- Diastolic decreases more than systolic
- Begins to rise again in third trimester

**Cardiac Output:**
- Increases to 30-50% above baseline
- Peaks around week 24
- Driven by increased stroke volume and heart rate
- May cause benign murmurs (flow murmurs)

**Hematologic Changes:**

**Physiologic Anemia:**
- Plasma volume expansion peaks (~50% increase)
- RBC mass increases ~20%
- Hemoglobin nadir: 10.5-11.0 g/dL
- Hematocrit: 32-36%
| Iron deficiency common |

**Hypercoagulability:**
- Fibrinogen peaks at 400-500 mg/dL
- Factors VII, VIII, IX, X increased
| Protein S decreased |
- DVT risk elevated |

**Respiratory System:**

**Pulmonary Changes:**
- Minute ventilation increased ~40%
| Tidal volume increased |
- Respiratory rate unchanged |
- Mild respiratory alkalosis |
- Compensated by renal bicarbonate excretion |

**Dyspnea:**
- Common symptom
- Progesterone effect on respiratory center
- Diaphragm elevation (uterus at umbilicus)
| Airway mucosal edema |

**Gastrointestinal System:**

**Anatomic Changes:**
- Stomach rotated upward and to the right
- Displaced by enlarging uterus
- Delayed gastric emptying
| Increased esophageal reflux |

**Common Symptoms:**

**Heartburn:**
- Decreased lower esophageal sphincter tone
- Progesterone smooth muscle relaxation
| Mechanical displacement |

**Constipation:**
- Progesterone slows motility
| Iron supplements |
- Mechanical compression |

**Hemorrhoids:**
| Vascular congestion |
| Mechanical compression |
| Constipation exacerbation |

**Second Trimester Complications:**

**Gestational Diabetes:**

**Pathophysiology:**
- Placental hormones (hPL, cortisol, prolactin) cause insulin resistance
- Pancreatic beta cells cannot compensate
| Hyperglycemia develops |

**Risk Factors:**
- BMI >30
- Age >35
- Family history of type 2 diabetes
- Previous GDM
- Previous macrosomic infant
- Certain ethnicities

**Fetal Risks:**
- Macrosomia (>4000 g)
- Hypoglycemia after birth
- Hyperbilirubinemia
- Shoulder dystocia
| Stillbirth |

**Management:**
- Medical nutrition therapy
- Blood glucose monitoring
- Exercise
- Insulin or oral agents if needed

**Preterm Labor:**

**Risk Factors:**
- History of spontaneous preterm birth
- Multifetal gestation
| Short cervix (<25 mm) |
- Infection |
- Uterine overdistension |
- Smoking, substance use |

**Assessment:**
- Fetal fibronectin (fFN)
- Cervical length by ultrasound
- Tocometry

**Management:**
- Corticosteroids for fetal lung maturity
- Magnesium sulfate for neuroprotection
| Tocolytics (short-term prolongation) |
- Antibiotics if PPROM |

**Placenta Previa:**

**Types:**
- **Complete:** Internal os fully covered
- **Partial:** Internal os partially covered
- **Marginal:** Placenta at edge of os
- **Low-lying:** Placenta near but not at os

**Diagnosis:**
- Transabdominal or transvaginal ultrasound
| Usually incidentally found on anatomy scan |

**Natural History:**
- 90% resolve by delivery
- Migration due to placental growth and lower uterine segment development

**Management:**
- Pelvic rest (no intercourse)
- No digital exams
| Follow-up ultrasound |
- Cesarean delivery required if persists |

**Cervical Insufficiency:**

**Definition:**
- Painless cervical dilation
| Second trimester loss |
- Typically <24 weeks |

**Risk Factors:**
- Prior cervical surgery (LEEP, cone biopsy)
- Cervical trauma
| Congenital anomalies |
- Short cervix on ultrasound |

**Management:**
- Cerclage placement at 12-14 weeks
- Vaginal progesterone
| Serial cervical length monitoring |

**Abnormal Placentation:**

**Risk Factors:**
- Prior cesarean delivery
- Prior myomectomy
- Placenta previa
- Advanced maternal age
- Multiparity
- Smoking

**Ultrasound Findings:**
- Loss of retroplacental clear space
| Irregular bladder wall |
- Numerous vascular lacunae
- Abnormal placental vascularity

**Management:**
- Antenatal diagnosis with MRI
- Planned delivery at tertiary center
| Multidisciplinary team |
`,
      keyPoints: [
        'Cardiac output peaks around week 24 at 30-50% above baseline',
        'Gestational diabetes results from insulin resistance exceeding pancreatic compensation',
        '90% of placenta previa cases resolve by delivery',
        'Cervical insufficiency presents with painless dilation and second trimester loss',
      ],
      vocabulary: [
        { term: 'hPL', definition: 'Human Placental Lactogen - hormone causing insulin resistance' },
        { term: 'fFN', definition: 'Fetal Fibronectin - protein indicating preterm labor risk' },
        { term: 'Macrosomia', definition: 'Excessive fetal birth weight, typically >4000 grams' },
        { term: 'PPROM', definition: 'Preterm Premature Rupture of Membranes' }
      ],
      quiz: [
        {
          question: 'What causes gestational diabetes?',
          options: [
            'Too much sugar in the diet',
            'Placental hormones cause insulin resistance that exceeds pancreatic compensation',
            'Autoimmune destruction of pancreatic cells',
            'Kidney dysfunction',
          ],
          correctAnswer: 1,
          explanation: 'Gestational diabetes develops when placental hormones (particularly human placental lactogen) cause insulin resistance that the pancreas cannot compensate for, resulting in hyperglycemia.',
        },
        {
          question: 'What percentage of placenta previa cases resolve by delivery?',
          options: [
            '50%',
            '70%',
            '90%',
            '99%',
          ],
          correctAnswer: 2,
          explanation: 'Approximately 90% of placenta previa cases diagnosed in the second trimester resolve by delivery due to placental migration as the uterus grows and the lower uterine segment develops.',
        }
      ]
    },
    {
      level: 5,
      title: 'Advanced Second Trimester Assessment',
      content: `Sophisticated second trimester assessment allows for detailed evaluation of fetal anatomy, growth, and maternal-fetal well-being.

**Detailed Fetal Anatomic Survey:**

**Advanced Ultrasound Techniques:**

**3D/4D Ultrasound:**
- Surface rendering of fetal face and body
- Cleft palate assessment
- Limb abnormality evaluation
- Parental bonding

**Fetal Echocardiography:**

**Comprehensive Assessment:**

**Systematic Approach:**
1. **Situs:** Abdominal situs, cardiac position
2. **Atria:** Size, septum primum, septum secundum
3. **AV valves:** Tricuspid, mitral
4. **Ventricles:** Size, function, septum
5. **Outflow tracts:** Aortic, pulmonary
6. **Great arteries:** Size, position, arch
7. **Veins:** SVC, IVC, pulmonary veins

**Specific Lesion Detection:**
- Atrial septal defects
- Ventricular septal defects
- Tetralogy of Fallot
- Transposition of great arteries
- Coarctation of aorta
- Hypoplastic left heart

**Fetal MRI:**

**Indications:**
- CNS anomalies (ventriculomegaly, callosal abnormalities)
- Congenital diaphragmatic hernia (lung volume)
- Complex placental abnormalities
- Neck masses (airway assessment)

**Advantages:**
- Soft tissue contrast superior to ultrasound
- Operator-independent
- Large field of view
- Tissue characterization

**Fetal Growth Assessment:**

**Biometry:**
- Biparietal diameter (BPD)
- Head circumference (HC)
- Abdominal circumference (AC)
- Femur length (FL)
- Estimated fetal weight (EFW)

**Growth Patterns:**

| Percentile | Interpretation |
|------------|----------------|
| <10th | SGA (may indicate FGR) |
| 10th-90th | Appropriate for gestational age (AGA) |
| >90th | LGA (macrosomia risk) |

**Doppler Velocimetry:**

**Umbilical Artery:**
- Assesses placental resistance
- Normal: S/D ratio decreases with gestation
- Abnormal: Increased resistance, absent/reversed EDF

**Middle Cerebral Artery:**
- Fetal anemia assessment
- Peak systolic velocity (PSV)
- Brain sparing in FGR

**Uterine Arteries:**
- Preeclampsia screening
- Notch assessment
- Resistance index

**Ductus Venosus:**
- Fetal acid-base assessment
| Critical in severe FGR |

**Multiple Gestation Assessment:**

**Chorionicity Determination:**
- **Dichorionic:** Lambda sign (twin peak)
- **Monochorionic:** T sign
- Critical for management

**Monochorionic Complications:**

**Twin-Twin Transfusion (TTTS):**
- Staging: Quintero criteria
- Ultrasound findings:
  - Discordant amniotic fluid
  - Stuck twin
  - Bladder visibility (donor vs recipient)
  - Doppler abnormalities

**Selective IUGR:**
- Discordant growth (>20%)
- Abnormal Doppler in smaller twin
| Difficult management decisions |

**Twin Anemia-Polycythemia Sequence (TAPS):**
- Spontaneous or post-laser
- MCA PSV differences
- Few or no amniotic fluid differences

**Cervical Assessment:**

**Transvaginal Cervical Length:**
- Technique: Empty bladder, measure from internal to external os
- Inter- and intraobserver variability: ~5 mm
- Optimal timing: 16-24 weeks

**Cervical Shortening Patterns:**
- **Progressive:** Serial measurements showing decrease
- **Static:** Remains short but stable
- **Dynamic:** Variable length

**Management Algorithms:**

| CL (mm) | History | Management |
|---------|---------|------------|
| <25 | Prior PTB | Cerclage |
| <25 | No prior PTB | Progesterone |
| 10-15 | Any | Cerclage consider |

**Fetal Movement Assessment:**

**Kick Count Methodology:**
- Begin at 28 weeks
- Count time for 10 movements
- Perform at same time daily
- Normal: <2 hours
- Decreased: >2 hours or significantly different

**Maternal Perception:**
- 40-50% of movements perceived by mother
- Evening peak movements
| Sleep-wake cycles established |

**Clinical Action:**
- Maternal concern for decreased movement
- NST or BCP assessment
- Ultrasound for growth/fluid
- Consider delivery based on gestational age

**Advanced Genetic Screening:**

**Penta Screen:**
- AFP
- hCG
- uE3 (unconjugated estriol)
- Inhibin A
- ADAM12 (emerging)

**Detection Rates:**
- Down syndrome: ~85%
- Trisomy 18: ~80%
- Open neural tube defects: ~85%

**Cell-Free DNA (NIPT) in Second Trimester:**
- Can be performed after 10 weeks
- Later sampling still valid
- May be used after first-trimester screening failure

**Amniocentesis (15-20 weeks):**
- Karyotype analysis
- Chromosomal microarray (CMA)
| Fetal infections (PCR) |
| Genetic testing for specific conditions |
`,
      keyPoints: [
        'Fetal echocardiography can detect most major cardiac abnormalities',
        'Doppler velocimetry assesses placental and fetal circulation',
        'Monochorionic twins require specialized surveillance for TTTS',
        'Cervical length <25 mm indicates increased preterm birth risk',
      ],
      vocabulary: [
        { term: 'Lambda Sign', definition: 'Triangular appearance of placenta in dichorionic twins' },
        { term: 'T Sign', definition: 'Appearance of monochorionic twin placenta without twin peak' },
        { term: 'Brain Sparing', definition: 'MCA vasodilation in response to fetal hypoxia' },
        { term: 'CMA', definition: 'Chromosomal Microarray - high-resolution genetic testing' }
      ],
      quiz: [
        {
          question: 'What is the Lambda sign in twin ultrasound assessment?',
          options: [
            'Sign of abnormal blood flow',
            'Triangular appearance indicating dichorionic twins',
            'Appearance of the T sign in monochorionic twins',
            'Marker for twin-twin transfusion',
          ],
          correctAnswer: 1,
          explanation: 'The Lambda sign (or twin peak) is a triangular projection of tissue between the twin gestations that indicates dichorionic (separate placentas) twinning.',
        },
        {
          question: 'What Doppler finding indicates severe placental insufficiency?',
          options: [
            'Decreased umbilical artery resistance',
            'Absent or reversed end-diastolic flow in umbilical artery',
            'Increased middle cerebral artery resistance',
            'Normal uterine artery Dopplers',
          ],
          correctAnswer: 1,
          explanation: 'Absent or reversed end-diastolic flow (ARED-F) in the umbilical artery indicates severe placental insufficiency and is associated with significant fetal growth restriction and hypoxia.',
        }
      ]
    }
  ],
  relatedTopics: [
    'pregnancy-overview',
    'prenatal-care',
    'pregnancy-complications',
  ],
  lastUpdated: '2025-01-25',
  references: [
    'ACOG Practice Bulletins',
    'SMFM Consult Series',
    'Williams Obstetrics 26th Edition',
  ]
};
