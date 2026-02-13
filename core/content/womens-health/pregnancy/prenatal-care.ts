import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const prenatalCare: WomensHealthContent = {
  id: 'prenatal-care',
  title: 'Prenatal Care',
  category: 'Pregnancy',
  complexityLevels: [
    {
      level: 1,
      title: 'What is Prenatal Care?',
      content: `Prenatal care is the healthcare you get during pregnancy. It helps keep you and your baby healthy.

**Why Prenatal Care is Important:**
- Checks on your baby's growth and health
- Finds and treats any problems early
- Helps you learn what to expect during pregnancy
- Reduces the risk of complications
- Helps you prepare for labor and birth

**Your First Prenatal Visit:**

At your first visit, your healthcare provider will:
- Confirm your pregnancy
- Calculate your due date
- Ask about your health history
- Do a physical exam
- Order blood tests
- Prescribe prenatal vitamins

**Typical Prenatal Visit Schedule:**

| When | How Often |
|------|-----------|
| Weeks 4-28 | Once a month |
| Weeks 28-36 | Every 2 weeks |
| Weeks 36-birth | Once a week |

**What Happens at Each Visit:**
- Check your weight
- Check your blood pressure
- Check your baby's heartbeat
- Measure your belly
- Ask about how you're feeling
- Answer your questions

**Prenatal Vitamins:**
- Take a vitamin with folic acid every day
- Folic acid helps prevent birth defects
- Start taking before you get pregnant if possible
- Take them throughout pregnancy

**Warning Signs - Call Your Doctor If:**
- Vaginal bleeding or spotting
- Severe abdominal pain
- Severe headache
- Blurred vision
- Sudden swelling of hands or face
- Fever over 100.4°F (38°C)
- Decreased baby movement
- Fluid leaking from vagina

**Remember:** Regular prenatal visits give your baby the best start in life!`,
      keyPoints: [
        'Prenatal care monitors the health of both mother and baby',
        'Visits become more frequent as pregnancy progresses',
        'Prenatal vitamins with folic acid are essential',
        'Warning signs should be reported immediately'
      ],
      vocabulary: [
        { term: 'Prenatal Care', definition: 'Medical care during pregnancy' },
        { term: 'Folic Acid', definition: 'B vitamin that helps prevent birth defects' },
        { term: 'Trimester', definition: 'Pregnancy divided into three parts' },
        { term: 'Due Date', definition: 'Estimated date when baby will be born' }
      ],
      quiz: [
        {
          question: 'How often are prenatal visits in the third trimester (after 36 weeks)?',
          options: [
            'Once a month',
            'Every 2 weeks',
            'Once a week',
            'Every 2 weeks until birth'
          ],
          correctAnswer: 2,
          explanation: 'After 36 weeks, prenatal visits are scheduled once a week to closely monitor both mother and baby as the due date approaches.'
        },
        {
          question: 'What is the purpose of folic acid in prenatal vitamins?',
          options: [
            'Helps with weight gain',
            'Prevents birth defects of the brain and spine',
            'Reduces morning sickness',
            'Helps baby grow taller'
          ],
          correctAnswer: 1,
          explanation: 'Folic acid is crucial for preventing neural tube defects (birth defects of the brain and spine). It\'s most important in the first weeks of pregnancy.'
        }
      ]
    },
    {
      level: 2,
      title: 'Prenatal Care Components and Schedule',
      content: `Comprehensive prenatal care follows a structured schedule to monitor maternal and fetal well-being throughout pregnancy.

**Initial Prenatal Visit (First Visit):**

Ideally scheduled at 8-10 weeks gestation:

**Confirmatory Testing:**
- Pregnancy test (urine or serum)
- Pregnancy dating ultrasound (if uncertain dates)
- Estimate due date using Naegele's rule

**Comprehensive Assessment:**

**History Taking:**
- Medical and surgical history
- Current medications and supplements
- Allergies
- Family medical history
- Social history (smoking, alcohol, drug use)
- Occupational and environmental exposures
- Exercise and dietary habits

**Obstetric History:**
- Previous pregnancies and outcomes
- History of complications
- Past deliveries (vaginal vs. cesarean)
- History of miscarriages or terminations

**Gynecologic History:**
- Last menstrual period (LMP)
- Menstrual history
- Contraceptive history
- Previous gynecologic surgeries
- History of infections

**Physical Examination:**
- Height, weight, BMI
- Vital signs (blood pressure baseline)
- Thyroid examination
- Breast examination
- Cardiac examination
- Abdominal examination
- Pelvic examination
- Assessment of uterine size

**Laboratory Testing:**

**Routine Initial Labs:**
- Complete blood count (CBC)
- Blood type and Rh status
- Antibody screen
- Rubella titer
- Hepatitis B surface antigen
- Syphilis screening
- HIV testing
- Urinalysis and culture
- Gonorrhea and chlamydia testing

**Additional Tests as Indicated:**
- Tuberculosis screening
- Varicella titer
- Thyroid function tests
- Cystic fibrosis carrier screening
- Hemoglobin electrophoresis (anemia screening)

**Subsequent Prenatal Visits:**

**Schedule:**

| Gestational Age | Visit Frequency |
|-----------------|-----------------|
| Up to 28 weeks | Every 4 weeks |
| 28-36 weeks | Every 2 weeks |
| 36 weeks until delivery | Every week |

**Each Visit Includes:**
- Blood pressure measurement
- Weight check
| Urine dipstick (protein, glucose) |
- Assessment of symptoms |
- Fetal heart rate assessment (after 10-12 weeks)
| Fundal height measurement (after 20 weeks) |
- Patient education and counseling |

**Fetal Heart Rate Monitoring:**
- Doppler detection: 10-12 weeks
- Normal range: 110-160 bpm
- Assesses fetal well-being

**Fundal Height Measurement:**
- Measures in centimeters from pubic bone to top of uterus
- After 20 weeks, roughly equals weeks of gestation
- Allows for growth assessment
- Deviations may indicate problems (IUGR, excess amniotic fluid)

**Nutritional Counseling:**

**Key Recommendations:**
- Balanced diet with all food groups
- Adequate protein intake
- Increased calorie needs (+300 in second, +500 in third trimester)
- Stay hydrated with water
- Limit caffeine to <200 mg/day
- Avoid alcohol completely
- Avoid raw/undercooked foods
- Avoid certain fish high in mercury

**Essential Nutrients:**
- **Folic acid:** 600-800 mcg daily
- **Iron:** 27 mg daily
- **Calcium:** 1,000 mg daily
- **Vitamin D:** 600 IU daily
- **DHA:** 200-300 mg daily

**Exercise Recommendations:**
- Regular moderate exercise encouraged
- Aim for 150 minutes per week
- Avoid contact sports and activities with fall risk
- Stay hydrated and avoid overheating
- Listen to your body

**Common Discomforts and Management:**

| Symptom | Management Strategies |
|---------|---------------------|
| Nausea | Small frequent meals, ginger, vitamin B6 |
| Fatigue | Rest, naps, moderate exercise |
| Back pain | Good posture, pregnancy pillow, gentle stretching |
| Heartburn | Small meals, avoid triggers, antacids |
| Constipation | Fiber, fluids, stool softeners |
| Swelling | Elevate feet, avoid standing for long periods |
| Frequent urination | Normal, but report pain/burning |`,
      keyPoints: [
        'Initial prenatal visit should occur at 8-10 weeks',
        'Visit frequency increases from monthly to weekly as pregnancy progresses',
        'Fundal height in centimeters roughly equals gestational age after 20 weeks',
        'Proper nutrition and exercise are key components of prenatal care'
      ],
      vocabulary: [
        { term: 'Naegele\'s Rule', definition: 'Method to calculate due date: LMP + 1 year - 3 months + 7 days' },
        { term: 'Fundal Height', definition: 'Distance from pubic bone to top of uterus' },
        { term: 'Doppler', definition: 'Device to detect and amplify fetal heartbeat' },
        { term: 'DHA', definition: 'Docosahexaenoic acid - omega-3 fatty acid important for fetal brain development' }
      ],
      quiz: [
        {
          question: 'What is the recommended daily intake of folic acid during pregnancy?',
          options: [
            '200-400 mcg',
            '600-800 mcg',
            '1,000-1,200 mcg',
            '1,500-2,000 mcg'
          ],
          correctAnswer: 1,
          explanation: 'The recommended daily intake of folic acid during pregnancy is 600-800 mcg. This helps prevent neural tube defects and supports rapid cell division.'
        },
        {
          question: 'What is the normal range for fetal heart rate?',
          options: [
            '80-110 bpm',
            '110-160 bpm',
            '160-200 bpm',
            '200-240 bpm'
          ],
          correctAnswer: 1,
          explanation: 'The normal fetal heart rate range is 110-160 beats per minute. This can be detected using a Doppler device starting around 10-12 weeks of gestation.'
        }
      ]
    },
    {
      level: 3,
      title: 'Prenatal Screening and Specialized Testing',
      content: `Modern prenatal care includes various screening and diagnostic tests to assess fetal health and detect potential complications.

**First Trimester Screening (11-13 weeks):**

**Combined First Trimester Screen:**
- **Nuchal Translucency (NT) ultrasound:**
  - Measures fluid at back of fetal neck
  - Increased NT associated with aneuploidy
  - Normal: <3 mm (varies by gestational age)

- **Maternal serum markers:**
  - PAPP-A (pregnancy-associated plasma protein A)
  - Free beta-hCG (human chorionic gonadotropin)

**Detection Rates:**
- Down syndrome (Trisomy 21): ~85%
- Trisomy 18: ~80%
- Trisomy 13: ~80%

**Cell-Free DNA Screening (NIPT):**

**Technology:**
- Analyzes fetal DNA in maternal blood
- Can be performed from 10 weeks gestation
- Screens for:
  - Trisomy 21, 18, 13
  - Sex chromosome abnormalities
  - Selected microdeletions
  - Fetal sex (optional)

**Advantages:**
- High detection rates (>99% for T21)
- Low false positive rate (<0.5%)
- Non-invasive

**Limitations:**
- Screening test, not diagnostic
- Limited in multiple gestations
- Cost considerations
- May fail in obese patients

**Second Trimester Screening (15-20 weeks):**

**Quad Screen:**
- **AFP** (alpha-fetoprotein)
  - Elevated: neural tube defects, abdominal wall defects
  - Low: Down syndrome

- **hCG:** Elevated in Down syndrome

- **Estriol:** Low in Down syndrome

- **Inhibin A:** Elevated in Down syndrome

**Detection rate:** ~80% for Down syndrome

**Maternal Serum AFP (MSAFP):**
- Screens for neural tube defects
- Elevated levels trigger:
  - Detailed ultrasound
  - Amniocentesis consideration

**Diagnostic Testing:**

**Chorionic Villus Sampling (CVS):**

**Procedure:**
- Performed 10-13 weeks gestation
- Catheter through cervix or needle through abdomen
- Samples placental tissue (chorionic villi)

**Advantages:**
- Early diagnosis
- Rapid results (karyotype in 7-10 days)

**Disadvantages:**
- Slightly higher miscarriage risk than amniocentesis (0.5-1%)
- Cannot detect neural tube defects
- May cause mosaicism artifact

**Amniocentesis:**

**Procedure:**
- Performed 15-20 weeks gestation
- Needle through abdominal wall into amniotic sac
- Removes 15-20 mL amniotic fluid

**Analysis:**
- Fetal karyotype
- Neural tube defect assessment (AFP/acetylcholinesterase)
- Specific genetic testing (CF, SMA, etc.)

**Risks:**
- Pregnancy loss: 0.1-0.3%
- Leakage of amniotic fluid: 1-2%
- Infection: <1%

**Anatomy Ultrasound (18-22 weeks):**

**Comprehensive Assessment:**

**Fetal Structures:**
- Cranium and brain
- Face (cleft lip/palate)
- Spine
- Heart (4-chamber view, outflow tracts)
- Stomach, kidneys, bladder
- Limbs (all extremities)
- Umbilical cord (3-vessel cord)

**Placental Assessment:**
- Location (previa vs. normal)
- Appearance
- Cord insertion

**Amniotic Fluid:**
- Amniotic fluid index (AFI)
- Single deepest pocket (SDP)
- Oligohydramnios: AFI <5 cm
- Polyhydramnios: AFI >24 cm

**Growth Assessment:**
- Estimated fetal weight
- Growth percentiles
- Symmetry of growth

**Glucose Screening (24-28 weeks):**

**Two-Step Approach:**

**Step 1: 1-hour Glucose Challenge Test (GCT)**
- 50g glucose load
- Measure blood glucose 1 hour later
- Threshold: ≥140 mg/dL (or ≥130 for higher sensitivity)

**Step 2: 3-hour 100g Oral Glucose Tolerance Test (OGTT)**
- Fasting glucose
- 1-hour, 2-hour, 3-hour post-glucose

**Diagnostic Criteria (Carpenter-Coustan):**
- Fasting: ≥95 mg/dL
- 1-hour: ≥180 mg/dL
- 2-hour: ≥155 mg/dL
- 3-hour: ≥140 mg/dL
| (2 or more abnormal = gestational diabetes) |

**Group B Streptococcus Screening (35-37 weeks):**

**Procedure:**
- Vaginal and rectal swab
- Culture for GBS
- Positive: IV penicillin in labor
- Negative: no treatment needed

**Significance:**
- GBS can cause neonatal sepsis
- Early-onset disease prevention
| Standard of care |

**Third Trimester Surveillance:**

**For Low-Risk Patients:**
- Kick counts (from 28 weeks)
- Routine prenatal visits
- Education on warning signs

**For High-Risk Patients:**
- Non-stress test (NST)
- Biophysical profile (BPP)
- Doppler studies
- Amniotic fluid assessment

**Kick Count Method:**
- Count time for 10 movements
- Should be <2 hours
- Perform daily at same time
- Report decreased movement`,
      keyPoints: [
        'First trimester screen combines NT ultrasound with serum markers',
        'NIPT offers >99% detection for Down syndrome with low false positive rate',
        'Anatomy ultrasound at 18-22 weeks assesses fetal structural development',
        'Universal GBS screening at 35-37 weeks guides intrapartum management'
      ],
      vocabulary: [
        { term: 'Nuchal Translucency', definition: 'Fluid collection at back of fetal neck, screening marker for aneuploidy' },
        { term: 'NIPT', definition: 'Non-Invasive Prenatal Testing using cell-free fetal DNA' },
        { term: 'Oligohydramnios', definition: 'Decreased amniotic fluid (AFI <5 cm)' },
        { term: 'Polyhydramnios', definition: 'Increased amniotic fluid (AFI >24 cm)' }
      ],
      quiz: [
        {
          question: 'What is the miscarriage risk associated with amniocentesis?',
          options: [
            '0.1-0.3%',
            '0.5-1%',
            '1-2%',
            '2-5%'
          ],
          correctAnswer: 0,
          explanation: 'The pregnancy loss rate associated with amniocentesis is approximately 0.1-0.3%, making it a relatively safe procedure compared to CVS which has a slightly higher risk.'
        },
        {
          question: 'When is routine group B strep screening performed?',
          options: [
            '20-24 weeks',
            '28-32 weeks',
            '35-37 weeks',
            '39-40 weeks'
          ],
          correctAnswer: 2,
          explanation: 'Group B streptococcus screening is performed at 35-37 weeks gestation. This timing allows for detection of colonization close to delivery when results are most relevant.'
        }
      ]
    },
    {
      level: 4,
      title: 'High-Risk Prenatal Care and Special Populations',
      content: `High-risk pregnancies require enhanced surveillance, specialized testing, and often multidisciplinary management to optimize outcomes.

**Identifying High-Risk Pregnancies:**

**Risk Factors:**

| Category | Risk Factors |
|----------|--------------|
| Maternal age | <18 or >35 years |
| Medical conditions | Hypertension, diabetes, autoimmune disease |
| Obstetric history | Prior preterm birth, preeclampsia, stillbirth |
| Current pregnancy | Multifetal, bleeding, decreased fetal movement |
| Lifestyle | Smoking, substance use, limited prenatal care |
| BMI | Underweight <18.5 or Obese >30 |

**Multifetal Gestation Care:**

**Enhanced Surveillance:**

**Ultrasound Schedule:**
- First trimester: Chorionicity determination
- Every 4-6 weeks: Growth assessment
- 16-24 weeks: Cervical length screening
- Third trimester: Weekly/Bi-weekly depending on chorionicity

**Chorionicity-Specific Risks:**

| Type | Placentas | Membranes | Risk Level |
|------|-----------|-----------|------------|
| Dichorionic-diamniotic | Separate | Separate | Baseline |
| Monochorionic-diamniotic | Shared | Separate | Higher (TTTS) |
| Monochorionic-monoamniotic | Shared | None | Highest (cord entanglement) |

**Twin-Specific Complications:**
- Twin-twin transfusion syndrome (mono/di)
- Selective intrauterine growth restriction
- Twin reversed arterial perfusion sequence
- Discordant anomalies
- Preterm labor

**Hypertensive Disorders Management:**

**Chronic Hypertension:**
- Baseline evaluation (renal, cardiac, retinal)
- Medication adjustment (avoid ACE inhibitors, ARBs)
- Low-dose aspirin 81 mg daily starting at 12 weeks
- Increased surveillance for superimposed preeclampsia
- Delivery planning by 39 weeks

**Preeclampsia Prevention:**
- Low-dose aspirin 81-150 mg daily
- Start between 12-28 weeks (optimally <16 weeks)
- Continue until delivery
- Reduces preeclampsia risk by ~50% in high-risk women

**Gestational Diabetes Management:**

**Management Protocol:**
- Medical nutrition therapy
- Blood glucose monitoring (fasting and postprandial)
- Exercise recommendation
- Medication if needed (insulin, glyburide, metformin)

**Glucose Targets:**
- Fasting: <95 mg/dL
- 1-hour postprandial: <140 mg/dL
- 2-hour postprandial: <120 mg/dL

**Surveillance:**
- Growth ultrasounds every 4-6 weeks
- Antenatal testing starting at 32 weeks
- Consider delivery at 39-40 weeks if well-controlled

**Preterm Labor Prevention:**

**Risk Assessment:**
- History of spontaneous preterm birth (strongest risk factor)
- Short cervical length (<25 mm)
| Multiple gestation |
- Cervical surgery history

**Interventions:**

**Progesterone Supplementation:**
- 17-OHPC (Makena) weekly IM injections
- Indicated: history of singleton spontaneous preterm birth
- Start at 16-24 weeks, continue to 36 weeks
- Reduces recurrent preterm birth by ~33%

**Cervical Cerclage:**
- Placed at 12-14 weeks
- Indicated: prior cervical insufficiency, short cervix
- Removed at 36-37 weeks

**Fetal Growth Restriction (FGR) Management:**

**Monitoring Protocol:**
- Serial growth ultrasounds every 2-3 weeks
- Umbilical artery Doppler
- Middle cerebral artery Doppler
- Amniotic fluid assessment
- Antenatal testing (NST/BPP) 1-2 times weekly

**Delivery Timing:**

| Gestational Age | Doppler Findings | Delivery Timing |
|-----------------|------------------|-----------------|
| <32 weeks | Absent/reversed EDF | Consider delivery |
| 32-34 weeks | Abnormal Dopplers | Individualized |
| 34-37 weeks | Any FGR | Consider delivery |
| >37 weeks | FGR | Delivery recommended |

**Special Populations:**

**Adolescent Pregnancy:**
- Higher risk of preterm birth, preeclampsia
- Nutritional support critical
- Age-appropriate education
- Social support assessment

**Advanced Maternal Age (≥35):**
- Increased aneuploidy risk
- Higher rates of hypertension, diabetes
- Consider genetic counseling
- Enhanced surveillance

**Obesity (BMI ≥30):**
- Increased: diabetes, preeclampsia, stillbirth
- Technical challenges with ultrasound
- Anesthesia considerations
| Weight gain counseling |
- Thromboembolism prophylaxis

**Substance Use Disorders:**
- Non-judgmental screening
- Referral to treatment programs
- Opioid agonist therapy (methadone, buprenorphine)
- Monitor for neonatal abstinence syndrome

**Domestic Violence Screening:**
- Screen at each trimester
- Provide resources
- Safety planning
- Mandatory reporting considerations`,
      keyPoints: [
        'Multifetal gestations require chorionicity determination and enhanced surveillance',
        'Low-dose aspirin reduces preeclampsia risk in high-risk women',
        'Progesterone supplementation prevents recurrent preterm birth',
        'FGR management involves Doppler surveillance and timed delivery'
      ],
      vocabulary: [
        { term: 'Chorionicity', definition: 'Number of placentas in multiple gestation' },
        { term: 'TTTS', definition: 'Twin-Twin Transfusion Syndrome - complication of monochorionic twins' },
        { term: 'Cerclage', definition: 'Surgical procedure to close cervix and prevent pregnancy loss' },
        { term: 'EDF', definition: 'End-Diastolic Flow - Doppler assessment of placental resistance' }
      ],
      quiz: [
        {
          question: 'What is the recommended dosing schedule for low-dose aspirin to prevent preeclampsia?',
          options: [
            'As needed',
            'Once daily starting at 12-28 weeks (optimally <16 weeks)',
            'Twice daily starting at 20 weeks',
            'Once weekly starting at 16 weeks'
          ],
          correctAnswer: 1,
          explanation: 'Low-dose aspirin (81-150 mg) should be taken once daily starting between 12-28 weeks gestation, ideally before 16 weeks, and continued until delivery.'
        },
        {
          question: 'Who is eligible for 17-OHPC (Makena) progesterone supplementation?',
          options: [
          'All pregnant women',
          'Women with multifetal gestation',
          'Women with history of singleton spontaneous preterm birth',
          'Women with gestational diabetes'
          ],
          correctAnswer: 2,
          explanation: '17-OHPC is indicated for women with a history of singleton spontaneous preterm birth. It reduces the risk of recurrent preterm birth by approximately 33%.'
          }
      ]
    },
    {
      level: 5,
      title: 'Advanced Prenatal Assessment and Therapies',
      content: `Advances in prenatal diagnosis and fetal therapy allow for increasingly sophisticated assessment and treatment of fetal conditions.

**Fetal Therapy Overview:**

**Classification of Interventions:**

**Minimally Invasive:**
- Fetal blood sampling (cordocentesis)
- Fetal transfusion
- Shunt placement
- Medication administration

**Surgical:**
- Open fetal surgery
- Fetoscopic surgery
- EXIT procedure (Ex-Utero Intrapartum Treatment)

**Fetal Anemia Management:**

**Causes:**
- Alloimmunization (Rh, Kell, etc.)
- Parvovirus B19 infection
- Twin-twin transfusion syndrome
- Fetomaternal hemorrhage

**Assessment:**
- Middle cerebral artery (MCA) peak systolic velocity
- MoM (multiples of median) >1.5 suggests anemia
- Doppler ultrasound technique

**Treatment:**
- Intrauterine blood transfusion
- Cordocentesis under ultrasound guidance
- O-negative, irradiated, CMV-negative blood
- Repeat transfusions every 1-3 weeks
- Survival >90% with experienced centers

**Fetal Arrhythmia Management:**

**Types:**
- **SVT (supraventricular tachycardia):** 220-300 bpm
- **Atrial flutter:** 300-500 bpm
- **Complete heart block:** Associated with SSA/SSB antibodies

**Treatment:**
- Maternal oral antiarrhythmics:
  - Digoxin (first line for SVT)
  - Flecainide
  - Sotalol
- Transplacental transfer to fetus
- Monitor maternal levels and ECG

**Lower Urinary Tract Obstruction (LUTO):**

**Presentation:**
- Bilateral hydronephrosis
- Oligohydramnios
- Bladder dilation
- Keyhole sign

**Intervention:**
- Vesicoamniotic shunt placement
- Fetoscopic cystoscopy (valve ablation)
- Consider: pulmonary hypoplasia risk, renal function

**Congenital Diaphragmatic Hernia (CDH):**

**Assessment:**
- Hernia side and contents
- Lung-to-head ratio (LHR)
- Liver position (in vs. out of chest)
- Severity stratification

**Fetoscopic Tracheal Occlusion:**
- Balloon placement in fetal trachea
- Promotes lung growth
- Reversal at 34 weeks
- Improves survival in severe cases

**Spina Bifida (Myelomeningocele):**

**Prenatal Assessment:**
- Level of lesion
- Ventriculomegaly degree
- Lower extremity movement
- Clubfoot presence

**Fetal Surgery:**
- Open repair at 19-26 weeks
- MOMS trial results:
  - Reduced need for shunting
  - Improved motor function
  - Maternal risks (uterine rupture, hysterectomy)

**Twin-Twin Transfusion Syndrome (TTTS):**

**Staging (Quintero):**
- **Stage I:** Bladder visible in donor twin
- **Stage II:** Bladder not visible in donor
- **Stage III:** critically abnormal Dopplers
- **Stage IV:** Hydrops in one or both twins
- **Stage V:** Demise of one or both twins

**Treatment:**
- **Septostomy:** Communication between amniotic sacs
- **Laser ablation:** Gold standard for Stage II-III
  - Fetoscopic identification of vessels
  - Ablation of anastomotic vessels
  - Survival rates: 60-75% both twins, 80% at least one
- **Amnioreduction:** Temporary measure
- **Selective reduction:** For severe cases

**Congenital High Airway Obstruction Syndrome (CHAOS):**

**Causes:**
- Laryngeal atresia
- Tracheal atresia
- Subglottic stenosis

**Management:**
- EXIT procedure
- Secure airway while on placental support
- Team-based delivery planning

**Monochorionic-Monoamniotic Twins:**

**Risks:**
- Cord entanglement
- Twin reversed arterial perfusion (TRAP)
- Congenital anomalies

**Management:**
- Intensive surveillance (NST/BPP twice weekly)
- Inpatient monitoring at 28-32 weeks
- Early delivery (32-34 weeks)

**Radiofrequency Ablation (RFA):**
- For TRAP sequence
- Selective reduction of acardiac twin
- Preservation of pump twin

**Fetal Procedures: Risk-Benefit Considerations:**

**Maternal Risks:**
- Anesthesia complications
- Preterm labor
- Premature rupture of membranes
- Infection
- Uterine rupture (open procedures)
- Future pregnancy complications

**Fetal Risks:**
- Preterm delivery
- Procedure-related loss
- Iatrogenic prematurity
- Need for emergency delivery

**Success Metrics:**
- Survival to discharge
- Need for additional procedures
- Long-term outcomes
- Quality of life measures

**Ethical Considerations:**
- Informed consent complexity
- Balancing maternal and fetal risks
- Resource allocation
- Experimental nature of many procedures
- Multidisciplinary counseling

**Future Directions:**
- Stem cell therapies
- Gene therapy
- Nanotechnology for drug delivery
- Minimally invasive techniques
- Improved imaging and guidance`,
      keyPoints: [
        'Fetal blood sampling and transfusion can treat fetal anemia with >90% survival',
        'Laser ablation is gold standard for TTTS Stage II-III',
        'Open fetal surgery for spina bifida improves motor outcomes',
        'EXIT procedure allows airway management while on placental support'
      ],
      vocabulary: [
        { term: 'Cordocentesis', definition: 'Procedure to sample fetal blood from umbilical cord' },
        { term: 'MCA PSV', definition: 'Middle Cerebral Artery Peak Systolic Velocity - screens for fetal anemia' },
        { term: 'EXIT Procedure', definition: 'Ex-Utero Intrapartum Treatment - surgery during delivery while placental support maintained' },
        { term: 'TRAP Sequence', definition: 'Twin Reversed Arterial Perfusion - acardiac twin parasitic on pump twin' }
      ],
      quiz: [
        {
          question: 'What is the gold standard treatment for Stage II-III Twin-Twin Transfusion Syndrome?',
          options: [
            'Amnioreduction only',
            'Septostomy',
            'Laser ablation of anastomotic vessels',
            'Immediate delivery'
          ],
          correctAnswer: 2,
          explanation: 'Laser ablation of the anastomotic vessels between twins is the gold standard treatment for Stage II-III TTTS, with survival rates of 60-75% for both twins.'
        },
        {
          question: 'What is the primary indication for the EXIT procedure?',
          options: [
          'Severe twin-twin transfusion',
          'Fetal anemia requiring transfusion',
          'Airway obstruction that cannot be managed after cord clamping',
          'Preterm labor prevention'
          ],
          correctAnswer: 2,
          explanation: 'The EXIT procedure is performed when the fetus has an airway obstruction that cannot be managed after delivery. It maintains placental support while securing the airway.'
          }
      ]
    }
  ],
  relatedTopics: [
    'pregnancy-overview',
    'pregnancy-complications',
    'labor-delivery',
    'postpartum-care'
  ],
  lastUpdated: '2025-01-25',
  references: [
    'ACOG Practice Bulletins',
    'SMFM Consult Series',
    'Williams Obstetrics 26th Edition'
  ]
};
