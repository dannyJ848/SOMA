/**
 * Prenatal Care - Reproductive Clinical Medicine
 *
 * Comprehensive content on prenatal care visits, screening tests,
 * maternal health monitoring, and fetal assessment throughout pregnancy.
 */

import { EducationalContent } from '../../types';

export const prenatalCare: EducationalContent = {
  id: 'reproductive-prenatal-care',
  type: 'concept',
  name: 'Prenatal Care',
  alternateNames: ['Antenatal Care', 'Pregnancy Care', 'Obstetric Care'],

  levels: {
    1: {
      level: 1,
      summary: 'Prenatal care is regular doctor visits during pregnancy to make sure the mother and baby are healthy. These visits include checkups, blood tests, and ultrasounds.',
      explanation: `## What Is Prenatal Care?

Prenatal care means all the medical care a woman receives during pregnancy. It helps doctors find and prevent problems early.

### Why Prenatal Care Is Important

- Keeps the mother healthy during pregnancy
- Checks that the baby is growing well
- Finds problems early so they can be treated
- Prepares parents for delivery and baby care
- Gives mothers a chance to ask questions

### What Happens at Prenatal Visits

**First Visit (Usually Weeks 6-10):**
- Confirm the pregnancy
- Calculate when the baby is due
- Do blood tests and urine tests
- Check weight and blood pressure
- Discuss health history and lifestyle

**Regular Visits:**
- Early pregnancy: Once a month
- Mid-pregnancy (28-36 weeks): Every 2 weeks
- Late pregnancy (36+ weeks): Every week

**At Each Visit:**
- Check weight gain
- Measure blood pressure
- Measure belly size
- Listen to baby's heartbeat
- Check urine for protein and sugar

### Common Tests and Screenings

**Blood Tests:**
- Blood type and Rh factor
- Anemia (low iron)
- Infections (HIV, hepatitis, syphilis)
- Immunity to rubella (German measles)

**Ultrasounds:**
- First trimester: Confirm pregnancy, count babies
- Second trimester: Check baby's growth and organs
- May see if baby is a boy or girl

**Glucose Test:**
- Done around 24-28 weeks
- Checks for gestational diabetes
- Drink a sweet drink, then blood test

### Warning Signs to Report

Call your doctor right away if you have:
- Heavy bleeding
- Severe headache or vision changes
- Very swollen hands or face
- Baby moving less than usual
- Fluid leaking from vagina
- Fever
- Painful urination`,
      keyTerms: [
        { term: 'prenatal', definition: 'Before birth; related to the time during pregnancy' },
        { term: 'ultrasound', definition: 'A scan that uses sound waves to see the baby inside the uterus' },
        { term: 'gestational diabetes', definition: 'High blood sugar that starts during pregnancy' },
        { term: 'Rh factor', definition: 'A protein on red blood cells; important to check during pregnancy' },
        { term: 'due date', definition: 'The estimated date when the baby will be born' },
      ],
      analogies: [
        'Prenatal care is like regular car maintenance - checking everything works properly to prevent breakdowns on the journey.',
        'Growing a baby is like building a house - regular inspections help catch problems early before they become big issues.',
      ],
      examples: [
        'A first prenatal visit at 8 weeks confirms the pregnancy and estimates the due date',
        'The 20-week ultrasound checks that all the baby\'s organs are developing normally',
        'Weekly visits in the last month help monitor for signs of labor',
      ],
      patientCounselingPoints: [
        'Start prenatal care as soon as you know you\'re pregnant',
        'Take prenatal vitamins with folic acid daily',
        'Keep all your prenatal appointments, even if you feel fine',
        'Write down questions to ask at each visit',
        'Report any unusual symptoms between visits',
      ],
    },
    2: {
      level: 2,
      summary: 'Prenatal care follows a structured schedule of visits including first trimester dating and genetic screening, second trimester anatomy scan and glucose testing, and third trimester fetal growth and positioning assessment. Care addresses maternal health, fetal development, and preparation for delivery.',
      explanation: `## Comprehensive Prenatal Care

Prenatal care is organized into scheduled visits with specific goals at each stage of pregnancy.

### First Trimester Care (Weeks 1-12)

**Initial Visit Components:**

| Assessment | Purpose |
|------------|---------|
| Medical history | Identify risk factors |
| Physical exam | Baseline maternal health |
| Pelvic exam | Uterine size confirmation |
| Dating ultrasound | Confirm gestational age |
| Laboratory panel | Screen for conditions |

**First Trimester Labs:**
- Complete blood count (CBC)
- Blood type, Rh, and antibody screen
- Rubella immunity
- Hepatitis B surface antigen
- HIV, syphilis, gonorrhea, chlamydia
- Urinalysis and urine culture
- Pap smear if due

**First Trimester Screening:**
- NIPT (Non-Invasive Prenatal Testing): Cell-free fetal DNA, screens for Down syndrome and other chromosomal conditions
- Combined first trimester screen: Nuchal translucency ultrasound + blood markers (PAPP-A, hCG)

### Second Trimester Care (Weeks 13-27)

**Key Visits and Tests:**
- Quad screen (if NIPT not done): AFP, hCG, estriol, inhibin A
- Anatomy ultrasound (18-22 weeks): Comprehensive fetal survey
- Glucose screening (24-28 weeks): 1-hour glucose tolerance test

**Anatomy Scan Evaluates:**
- Fetal growth parameters (head, abdomen, femur)
- Brain, spine, and spinal cord
- Heart chambers and vessels
- Abdominal organs
- Kidneys and bladder
- Limbs and digits
- Placental location
- Amniotic fluid volume

### Third Trimester Care (Weeks 28-40)

**Increased Visit Frequency:**
- 28-36 weeks: Every 2 weeks
- 36 weeks to delivery: Weekly

**Third Trimester Assessments:**
- Fundal height measurement
- Fetal position (presentation)
- Fetal heart rate
- Group B Streptococcus (GBS) culture at 36-37 weeks
- Fetal movement counts

**Late Pregnancy Monitoring:**
- Non-stress test (NST): Fetal heart rate patterns
- Biophysical profile (BPP): NST plus ultrasound assessment
- Growth ultrasound if concerns

### Routine Visit Components

**At Every Visit:**
- Weight measurement
- Blood pressure
- Urine dipstick (protein, glucose)
- Fundal height (after 20 weeks)
- Fetal heart tones (after 10-12 weeks with Doppler)

**Counseling Topics:**
- Nutrition and weight gain goals
- Exercise recommendations
- Work and travel safety
- Warning signs
- Preparation for labor and delivery
- Breastfeeding
- Postpartum contraception`,
      keyTerms: [
        { term: 'NIPT', definition: 'Non-Invasive Prenatal Testing; blood test analyzing fetal DNA in maternal blood' },
        { term: 'nuchal translucency', definition: 'Ultrasound measurement of fluid at back of fetal neck; marker for chromosomal conditions' },
        { term: 'fundal height', definition: 'Distance from pubic bone to top of uterus; estimates fetal growth' },
        { term: 'Group B Strep', definition: 'Bacteria that can be passed to baby during delivery; treated with antibiotics in labor' },
        { term: 'biophysical profile', definition: 'Ultrasound assessment of fetal well-being including movement, tone, breathing, and fluid' },
      ],
      analogies: [
        'The anatomy scan is like a detailed home inspection - checking every system to make sure everything is built correctly.',
        'The glucose test is like checking if the pregnancy has affected the body\'s thermostat for blood sugar.',
      ],
      examples: [
        'A positive GBS culture means antibiotics in labor to protect the baby from infection',
        'Fundal height of 32 cm at 32 weeks suggests appropriate fetal growth',
        'An anterior placenta may make it harder to feel baby movements early',
      ],
      patientCounselingPoints: [
        'Weight gain recommendations vary based on pre-pregnancy BMI',
        'Fetal movement should be consistent - report any significant decrease',
        'Group B Strep colonization is common and treatable during labor',
        'The anatomy scan may not detect all abnormalities - it\'s a screening, not diagnostic test',
      ],
    },
    3: {
      level: 3,
      summary: 'Prenatal care integrates risk assessment, screening algorithms, and evidence-based interventions. First trimester screening combines ultrasound markers with biochemical analytes; second trimester includes detailed anatomic survey and glucose tolerance testing; third trimester focuses on fetal surveillance and delivery planning.',
      explanation: `## Evidence-Based Prenatal Care

### Risk Assessment and Stratification

**Risk Factors for Pregnancy Complications:**

Maternal factors:
- Age (<17 or >35)
- Pre-existing conditions (diabetes, hypertension, autoimmune)
- Prior pregnancy complications
- BMI (underweight or obese)
- Substance use

Obstetric factors:
- Multiple gestation
- Prior preterm birth
- Prior cesarean delivery
- Uterine anomalies
- Cervical insufficiency

**Risk-Appropriate Care:**
- Low-risk: Standard prenatal schedule
- High-risk: Additional surveillance, specialist referral
- Very high-risk: Maternal-fetal medicine consultation

### First Trimester Screening

**Combined First Trimester Screen (11-14 weeks):**

---
Components:
  Nuchal translucency (NT): Fluid at fetal neck
  Free beta-hCG: Elevated in Down syndrome
  PAPP-A: Low in Down syndrome

Detection rates:
  Trisomy 21: 82-87%
  Trisomy 18: 90%
  Trisomy 13: 85%

False positive rate: 5%
---

**Cell-Free DNA (NIPT):**

| Condition | Detection Rate | False Positive Rate |
|-----------|---------------|---------------------|
| Trisomy 21 | >99% | 0.1% |
| Trisomy 18 | 97-99% | 0.2% |
| Trisomy 13 | 87-99% | 0.2% |
| Sex chromosome | 90-95% | Variable |

Limitations:
- Not diagnostic (confirmatory testing needed for positive)
- Lower PPV in low-risk populations
- May not detect mosaicism or confined placental mosaicism
- Test failure in 1-5% (obesity, early gestation)

### Second Trimester Assessment

**Anatomy Ultrasound Protocol:**

Fetal biometry:
- Biparietal diameter (BPD)
- Head circumference (HC)
- Abdominal circumference (AC)
- Femur length (FL)
- Estimated fetal weight (EFW)

Structural survey:
- CNS: Ventricles, cerebellum, cisterna magna
- Face: Lips, palate
- Heart: Four-chamber, outflow tracts
- Spine: Vertebrae, cord
- Abdomen: Stomach, kidneys, bladder
- Umbilical cord: Three vessels
- Placenta: Location, grade
- Cervix: Length

**Soft Markers and Their Significance:**

| Marker | Associated Condition | LR+ for Trisomy 21 |
|--------|---------------------|-------------------|
| Echogenic bowel | T21, CF, CMV | 5.5 |
| Choroid plexus cyst | T18 | 1.0 |
| Echogenic cardiac focus | T21 | 1.8 |
| Pyelectasis | T21 | 1.5 |
| Short humerus/femur | T21 | Variable |

### Glucose Screening

**One-Step Approach (75g OGTT):**
- Diagnostic thresholds: Fasting >=92, 1hr >=180, 2hr >=153 mg/dL
- One abnormal value = diagnosis

**Two-Step Approach:**
- Screen: 50g glucose challenge (1hr >=130-140 mg/dL positive)
- Diagnose: 100g OGTT (Carpenter-Coustan or NDDG criteria)

### Third Trimester Surveillance

**Fetal Movement Assessment:**
- Kick counts: 10 movements in 2 hours
- Decreased movement warrants evaluation

**Non-Stress Test (NST):**
- Reactive: >=2 accelerations of >=15 bpm for >=15 seconds in 20 minutes
- Non-reactive: Requires further evaluation (BPP, extended NST)

**Biophysical Profile Scoring:**

| Component | Normal (2 points) | Abnormal (0 points) |
|-----------|-------------------|---------------------|
| NST | Reactive | Non-reactive |
| Breathing | >=1 episode >=30 sec | Absent |
| Movement | >=3 discrete movements | <3 movements |
| Tone | Extension/flexion | Limp |
| AFI | >=5 cm | <5 cm |

Score 8-10: Normal; 6: Equivocal; 4 or less: Abnormal`,
      keyTerms: [
        { term: 'PAPP-A', definition: 'Pregnancy-associated plasma protein A; first trimester screening marker' },
        { term: 'positive predictive value', definition: 'Probability that a positive test result indicates true disease' },
        { term: 'soft markers', definition: 'Ultrasound findings associated with increased aneuploidy risk but often normal variants' },
        { term: 'amniotic fluid index', definition: 'Ultrasound measurement of amniotic fluid volume in four quadrants' },
        { term: 'OGTT', definition: 'Oral glucose tolerance test; diagnostic test for gestational diabetes' },
      ],
      analogies: [
        'Soft markers are like yellow flags rather than red flags - they warrant attention but often represent normal variations.',
        'The biophysical profile is like a report card for the fetus, grading multiple aspects of well-being.',
      ],
      examples: [
        'A NIPT positive for trisomy 21 requires amniocentesis confirmation before making decisions',
        'An isolated choroid plexus cyst typically resolves and has minimal significance',
        'BPP score of 4 or less indicates need for delivery or intensive monitoring',
      ],
      clinicalNotes: 'ACOG recommends offering aneuploidy screening to all pregnant women regardless of age. Cell-free DNA has the highest detection rate but is still a screening test. Positive results require diagnostic confirmation with amniocentesis or CVS before irreversible decisions.',
    },
    4: {
      level: 4,
      summary: 'Advanced prenatal care encompasses genetic counseling, detailed ultrasound assessment, management of high-risk conditions, and integration of multiple surveillance modalities. Evidence-based protocols guide screening, diagnosis, and intervention timing.',
      explanation: `## Advanced Prenatal Management

### Genetic Screening and Counseling

**Expanded Carrier Screening:**
- Pan-ethnic approach (>100 conditions)
- Conditions: CF, SMA, hemoglobinopathies, fragile X
- Timing: Preconception or early pregnancy
- Partner testing if carrier identified

**Diagnostic Testing Indications:**

Amniocentesis (15-20 weeks):
- Positive screening test
- Prior affected pregnancy
- Ultrasound anomalies
- Advanced maternal age (offered)
- Risk: ~0.1-0.3% pregnancy loss

Chorionic villus sampling (10-13 weeks):
- Same indications, earlier results
- Cannot detect neural tube defects
- Risk: ~0.2-0.5% pregnancy loss
- Confined placental mosaicism possible

**Advanced Genetic Testing:**

| Test | Specimen | Detects |
|------|----------|---------|
| Karyotype | Amniocytes/CVS | Chromosomal abnormalities |
| Microarray | Amniocytes/CVS | Copy number variants |
| Exome sequencing | Various | Single gene mutations |

### High-Risk Pregnancy Management

**Preeclampsia Risk Reduction:**

Risk factors:
- Prior preeclampsia
- Chronic hypertension
- Diabetes
- Autoimmune disease
- Multiple gestation
- First pregnancy

Prevention: Low-dose aspirin 81mg starting 12-16 weeks for high-risk patients

Surveillance:
- Blood pressure monitoring
- Preeclampsia labs (CBC, CMP, LDH)
- Urine protein/creatinine ratio
- Umbilical artery Doppler if IUGR

**Preterm Birth Prevention:**

| Risk Factor | Intervention |
|-------------|--------------|
| Prior spontaneous PTB | 17-OHP injections or vaginal progesterone |
| Short cervix (<25mm) | Vaginal progesterone +/- cerclage |
| Current cervical dilation | Cerclage if <24 weeks |
| Multiple gestation | Surveillance, corticosteroids if preterm |

**Fetal Growth Restriction:**

Definition: EFW <10th percentile

Evaluation:
- Detailed anatomy scan
- Amniotic fluid assessment
- Umbilical artery Doppler
- Consider aneuploidy testing
- Evaluate for maternal causes

Doppler findings progression:
1. Increased S/D ratio
2. Absent end-diastolic flow
3. Reversed end-diastolic flow (ominous)

### Diabetes in Pregnancy

**Pregestational Diabetes Management:**

Targets:
- Fasting: <95 mg/dL
- 1-hour postprandial: <140 mg/dL
- 2-hour postprandial: <120 mg/dL
- HbA1c: <6-6.5% (if achievable without hypoglycemia)

Surveillance:
- Early ultrasound for dating
- First trimester A1c
- Detailed anatomy scan
- Fetal echocardiogram (24-28 weeks)
- Growth ultrasounds q4 weeks in third trimester
- Antenatal testing starting 32-34 weeks

**Gestational Diabetes:**

Management ladder:
1. Diet and exercise (2 weeks trial)
2. Oral agents (metformin, glyburide)
3. Insulin

Timing of delivery:
- Diet-controlled: 39-40 6/7 weeks
- Medication-controlled: 39-39 6/7 weeks
- Poorly controlled: Individualized, earlier

### Multiple Gestation

**Chorionicity Determination:**
- Lambda sign (dichorionic) vs. T sign (monochorionic)
- Best assessed first trimester
- Critical for surveillance planning

**Surveillance by Type:**

| Type | Risk | Surveillance |
|------|------|--------------|
| Di/Di | Baseline | Growth q4 weeks |
| Mo/Di | TTTS, IUGR | Growth q2 weeks, Doppler |
| Mo/Mo | Cord entanglement | Inpatient 24+ weeks, frequent monitoring |

**Twin-Twin Transfusion Syndrome:**
- Occurs in monochorionic twins
- Staging: Quintero I-V
- Treatment: Fetoscopic laser ablation
- Without treatment: 90% mortality`,
      keyTerms: [
        { term: 'cerclage', definition: 'Surgical stitch placed in cervix to prevent preterm dilation' },
        { term: '17-OHP', definition: '17-alpha hydroxyprogesterone; injection to prevent recurrent preterm birth' },
        { term: 'umbilical artery Doppler', definition: 'Ultrasound assessment of blood flow resistance in umbilical artery' },
        { term: 'TTTS', definition: 'Twin-twin transfusion syndrome; unequal blood sharing between monochorionic twins' },
        { term: 'chorionicity', definition: 'Number of placentas in multiple gestation; determines risk level' },
      ],
      clinicalNotes: 'Determination of chorionicity in twins is the single most important factor for pregnancy management. Monochorionic twins require intensive surveillance for TTTS and growth discordance. All monochorionic-monoamniotic twins should be delivered by 32-34 weeks after corticosteroids.',
    },
    5: {
      level: 5,
      summary: 'Expert prenatal management integrates evidence-based guidelines, shared decision-making for complex scenarios, and emerging technologies. Management of severe complications requires multidisciplinary coordination and individualized risk-benefit analysis.',
      explanation: `## Expert-Level Prenatal Care

### Emerging Technologies

**Advanced Genetic Testing:**

Whole exome sequencing:
- Detects single gene mutations
- Indicated for anomalies without chromosomal/CMA explanation
- Diagnostic yield: 10-30% of structural anomalies
- Challenges: VUS interpretation, secondary findings

Non-invasive prenatal diagnosis:
- Fetal RhD genotyping from maternal blood
- Single gene disorder testing (CF, SCD)
- Moving toward broader applications

**Advanced Imaging:**

Fetal MRI:
- CNS anomalies (ventriculomegaly, corpus callosum)
- Chest masses
- Placental abnormalities
- Better soft tissue resolution than ultrasound

Fetal echocardiography advances:
- 3D/4D imaging
- Spatiotemporal image correlation (STIC)
- Color Doppler assessment

### Complex Clinical Scenarios

**Previable PPROM (14-22 weeks):**

Management options:
1. Expectant management (high infection risk, pulmonary hypoplasia)
2. Termination

Counseling points:
- 50% will deliver within 1 week
- Survival rates improve with each week of latency
- Long-term morbidity significant
- Pulmonary hypoplasia risk highest if <22 weeks

**Severe Early-Onset Preeclampsia:**

---
Before viability (<24 weeks):

Options:
  - Expectant management with close surveillance
  - Termination for maternal indications
  - Delivery (non-viable infant)

Considerations:
  - HELLP syndrome development
  - Eclampsia risk
  - Renal function deterioration
  - Fetal growth and well-being

Expectant management criteria:
  - Stable maternal condition
  - No HELLP
  - Controllable blood pressure
  - Preserved fetal status
---

**Fetal Anomaly Management:**

Counseling framework:
1. Accurate diagnosis (multidisciplinary evaluation)
2. Prognosis discussion (survival, morbidity, quality of life)
3. All management options (termination, perinatal hospice, intervention)
4. Non-directive counseling with psychosocial support

Fetal intervention considerations:
- Myelomeningocele repair (MOMS trial eligibility)
- EXIT procedure for airway obstruction
- In-utero transfusion for severe anemia
- Fetoscopic procedures (TTTS, LUTO)

### Current Guidelines and Controversies

**Low-Dose Aspirin:**

ACOG/SMFM recommendations:
- Start 12-16 weeks, continue until delivery
- 81 mg daily
- High-risk: Prior preeclampsia, chronic HTN, diabetes, multiples
- Moderate risk: Multiple moderate factors

Evidence base:
- 17% reduction in preeclampsia (ASPRE trial)
- Greater benefit with adherence >90%
- Timing of initiation affects efficacy

**Antenatal Corticosteroids:**

Standard indications (24-34 weeks):
- Threatened preterm birth
- Single course betamethasone 12mg IM x 2

Late preterm (34-36 6/7 weeks):
- Consider if cesarean planned
- Reduces respiratory morbidity
- Potential long-term effects under study

Rescue course:
- If >7 days since initial course
- <34 weeks
- Imminent delivery expected

**Timing of Delivery:**

Evidence-based recommendations by condition:

| Condition | Recommended Delivery Timing |
|-----------|----------------------------|
| Uncomplicated | 39-40 6/7 weeks |
| GDM diet-controlled | 39-40 6/7 weeks |
| GDM medication-controlled | 39-39 6/7 weeks |
| Chronic HTN, controlled | 37-39 weeks |
| Preeclampsia without severe features | 37 weeks |
| Preeclampsia with severe features | 34 weeks after steroids |
| IUGR with normal Doppler | 38-39 weeks |
| Prior stillbirth | 37-38 weeks |

### Quality Metrics and Healthcare Disparities

**Key Quality Indicators:**
- Early prenatal care initiation (<13 weeks)
- Adequate prenatal visits
- First trimester screening completion
- GBS screening rate
- Appropriate timing of delivery

**Addressing Disparities:**

Documented disparities:
- Late or no prenatal care
- Higher maternal morbidity/mortality
- Preterm birth rates
- Infant mortality

Interventions:
- Group prenatal care (CenteringPregnancy)
- Community health workers
- Addressing implicit bias
- Telehealth integration
- Transportation assistance

### Ethical Considerations

**Maternal-Fetal Conflict:**
- Maternal autonomy primary
- Informed consent for all interventions
- Cannot compel cesarean or blood transfusion
- Court-ordered treatment rarely appropriate

**Fetal Rights and Viability:**
- Varies by jurisdiction
- Impact on termination access
- Periviability counseling challenges`,
      keyTerms: [
        { term: 'VUS', definition: 'Variant of uncertain significance; genetic finding with unclear clinical meaning' },
        { term: 'MOMS trial', definition: 'Management of Myelomeningocele Study; established criteria for fetal surgery' },
        { term: 'EXIT procedure', definition: 'Ex utero intrapartum treatment; maintains placental circulation while securing fetal airway' },
        { term: 'periviability', definition: 'Gestational age at threshold of extrauterine survival (22-25 weeks)' },
        { term: 'LUTO', definition: 'Lower urinary tract obstruction; fetal condition amenable to in-utero intervention' },
      ],
      clinicalNotes: `Key Practice Points:

1. Cell-free DNA screening has >99% detection for trisomy 21 but positive results still require diagnostic confirmation. PPV depends on prior probability.

2. Low-dose aspirin for preeclampsia prevention should begin by 16 weeks to be effective. Earlier initiation may provide greater benefit.

3. Timing of delivery balances risks of prematurity against risks of continued pregnancy. Evidence-based guidelines provide framework but individualization necessary.

4. Shared decision-making is essential for complex prenatal diagnoses. Non-directive counseling respects patient autonomy while providing complete information.

5. Healthcare disparities in prenatal care outcomes are well-documented. Systematic interventions including group care and community health workers show promise.`,
    },
  },

  media: [
    {
      id: 'prenatal-visit-schedule',
      type: 'diagram',
      filename: 'prenatal-visit-schedule.svg',
      title: 'Prenatal Visit Schedule',
      description: 'Timeline of standard prenatal care visits and key tests',
    },
    {
      id: 'anatomy-scan-checklist',
      type: 'diagram',
      filename: 'anatomy-scan-checklist.svg',
      title: 'Second Trimester Anatomy Scan Components',
      description: 'Comprehensive list of structures evaluated at anatomy ultrasound',
    },
  ],

  citations: [
    {
      id: 'acog-prenatal-care',
      type: 'article',
      title: 'Routine Tests During Pregnancy',
      authors: ['ACOG Committee on Obstetric Practice'],
      source: 'ACOG Practice Bulletin',
      url: 'https://www.acog.org',
    },
    {
      id: 'smfm-guidelines',
      type: 'article',
      title: 'Society for Maternal-Fetal Medicine Consult Series',
      authors: ['SMFM Publications Committee'],
      source: 'American Journal of Obstetrics and Gynecology',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-pregnancy-physiology', targetType: 'process', relationship: 'related', label: 'Pregnancy Physiology' },
    { targetId: 'reproductive-preeclampsia', targetType: 'condition', relationship: 'related', label: 'Preeclampsia' },
    { targetId: 'reproductive-gestational-diabetes', targetType: 'condition', relationship: 'related', label: 'Gestational Diabetes' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['clinical-medicine', 'obstetrics', 'prenatal-care', 'screening'],
    keywords: ['pregnancy', 'prenatal', 'ultrasound', 'screening', 'NIPT', 'gestational diabetes'],
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

export default prenatalCare;
