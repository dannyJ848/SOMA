import { LegacyWomensHealthContent } from '../types';

export const prenatalCareSchedule: LegacyWomensHealthContent = {
  id: 'concept-prenatal-care-schedule',
  type: 'concept',
  name: 'Prenatal Care Schedule',
  alternateNames: ['Antenatal care', 'Pregnancy checkups', 'OB visits'],

  levels: {
    1: {
      level: 1,
      summary: 'Prenatal care includes regular doctor visits during pregnancy to keep you and your baby healthy, with more frequent visits as your due date approaches.',
      explanation: `**Why Prenatal Care Matters:**
Regular checkups help catch problems early when they're easier to treat. These visits also help you prepare for delivery and parenthood.

**Visit Schedule:**
- **Weeks 4-28:** Once a month
- **Weeks 28-36:** Every 2 weeks
- **Weeks 36-40:** Every week

**What Happens at Visits:**
- Check your weight and blood pressure
- Measure your belly to track baby's growth
- Listen to baby's heartbeat
- Test your urine
- Answer your questions

**Important Tests:**
- **First Trimester:** Blood tests, ultrasound to date pregnancy
- **Second Trimester:** Anatomy scan ultrasound, screening for birth defects
- **Third Trimester:** Glucose test for diabetes, group B strep test

**Warning Signs to Report:**
- Vaginal bleeding
- Severe headache
- Vision changes
- Severe abdominal pain
- Baby moving less than usual
- Leaking fluid from vagina`,
      keyTerms: [
        { term: 'prenatal', definition: 'Before birth; care during pregnancy' },
        { term: 'trimester', definition: 'A three-month period; pregnancy has three trimesters' },
        { term: 'ultrasound', definition: 'A test using sound waves to create pictures of your baby' },
      ],
      analogies: ['Think of prenatal care like regular car maintenance - catching small issues early prevents big problems later.'],
      examples: ['Seeing your doctor monthly in the first half of pregnancy', 'Getting an ultrasound around 20 weeks to check baby\'s organs'],
    },
    2: {
      level: 2,
      summary: 'Prenatal care follows a structured schedule of visits and testing throughout pregnancy, progressing from monthly visits to weekly monitoring as term approaches.',
      explanation: `**Visit Frequency:**
- First visit: As early as possible (confirm pregnancy, establish care)
- 4-28 weeks: Every 4 weeks
- 28-36 weeks: Every 2 weeks
- 36-40+ weeks: Weekly

**Routine Visit Components:**

*Every Visit:*
- Blood pressure
- Weight
- Fundal height (after 20 weeks)
- Fetal heart tones
- Urinalysis (protein, glucose)
- Symptom review

**Laboratory Testing Schedule:**

*First Trimester (Initial Labs):*
- Blood type, Rh factor, antibody screen
- CBC
- Rubella immunity
- Hepatitis B surface antigen
- HIV
- Syphilis (RPR/VDRL)
- Urine culture
- Chlamydia/gonorrhea (if indicated)

*First Trimester Screening (Optional):*
- NIPT (cell-free DNA) or first trimester screen
- NT ultrasound (11-14 weeks)

*Second Trimester:*
- Anatomy ultrasound (18-22 weeks)
- Quad screen (if no earlier screening)

*Third Trimester:*
- Glucose challenge test (24-28 weeks)
- Repeat CBC (28 weeks)
- Rh antibody screen (if Rh negative)
- Group B strep culture (35-37 weeks)

**Immunizations:**
- Tdap: 27-36 weeks (each pregnancy)
- Flu shot: Any trimester during flu season
- COVID-19: Per current guidelines`,
      keyTerms: [
        { term: 'fundal height', definition: 'Distance from pubic bone to top of uterus, measured in centimeters after 20 weeks' },
        { term: 'Rh factor', definition: 'A protein on red blood cells; Rh negative mothers may need RhoGAM to prevent antibody formation' },
        { term: 'NIPT', definition: 'Non-invasive prenatal testing using cell-free DNA to screen for chromosomal abnormalities' },
        { term: 'group B strep', definition: 'Bacteria that can live in vagina; screening determines need for antibiotics during labor' },
      ],
    },
    3: {
      level: 3,
      summary: 'Prenatal care involves risk-stratified surveillance, evidence-based screening protocols, and timely intervention to optimize maternal and fetal outcomes.',
      explanation: `**Risk Stratification:**

*Low-Risk Pregnancy:*
- Standard visit schedule
- Routine testing per guidelines
- Physician, midwife, or NP/PA care appropriate

*High-Risk Categories:*
- Medical conditions (diabetes, hypertension, autoimmune)
- Obstetric history (preterm birth, preeclampsia, stillbirth)
- Multiple gestation
- Fetal concerns (growth restriction, anomalies)
- Advanced maternal age
- Requires MFM consultation or co-management

**First Trimester Care:**

*Dating and Viability:*
- Confirm IUP and gestational age
- Crown-rump length (CRL) most accurate <14 weeks
- EDD calculation: Last menstrual period or ultrasound

*Aneuploidy Screening Options:*
- Cell-free DNA (NIPT): 99% sensitivity for T21, available from 10 weeks
- First trimester screen: NT + hCG + PAPP-A (11-14 weeks)
- Combined first and second trimester: Integrated, sequential

*Diagnostic Testing:*
- Chorionic villus sampling (CVS): 10-13 weeks
- Amniocentesis: 15+ weeks

**Second Trimester:**

*Anatomy Survey (18-22 weeks):*
- Detailed fetal anatomy assessment
- Placental location
- Amniotic fluid volume
- Cervical length if indicated

*Genetic Screening:*
- Quad screen if no prior screening
- AFP for open neural tube defects

**Third Trimester:**

*Glucose Screening:*
- 50g glucose challenge test
- Abnormal (≥140): 100g 3-hour GTT

*GBS Screening (35-37 weeks):*
- Rectovaginal swab
- Positive: Intrapartum antibiotics

*Antenatal Testing (if indicated):*
- Non-stress test (NST)
- Biophysical profile (BPP)
- Growth ultrasounds`,
      keyTerms: [
        { term: 'MFM', definition: 'Maternal-fetal medicine specialist; subspecialist in high-risk pregnancy' },
        { term: 'NT', definition: 'Nuchal translucency; ultrasound measurement of fluid behind fetal neck, marker for aneuploidy' },
        { term: 'CVS', definition: 'Chorionic villus sampling; invasive test for chromosomal and genetic diagnosis' },
        { term: 'BPP', definition: 'Biophysical profile; assessment combining NST with ultrasound evaluation of fetal wellbeing' },
      ],
      clinicalNotes: 'NIPT has >99% sensitivity and 99.9% specificity for trisomy 21 but is screening, not diagnostic. Positive NIPT requires confirmatory amniocentesis. Cell-free DNA has higher false positive rates for T18 and T13.',
    },
    4: {
      level: 4,
      summary: 'Advanced prenatal care requires interpretation of complex screening results, management of identified fetal anomalies, surveillance protocols for high-risk conditions, and coordination of multidisciplinary care.',
      explanation: `**Screening Result Interpretation:**

*Cell-Free DNA:*
- Low-risk result: Very high negative predictive value
- High-risk result: PPV varies by age and condition
  - T21: PPV 90%+ in high-risk population
  - T18/T13: PPV 60-80%
  - Sex chromosome: PPV 40-60%
- No-call result: Higher aneuploidy risk, consider repeat or amnio

*Integrated Screening:*
- Combines first and second trimester markers
- Detection rate ~95% for T21 at 5% FPR

**Fetal Anomaly Management:**

*Soft Markers:*
- Echogenic bowel, echogenic intracardiac focus, choroid plexus cyst
- Most are benign variants
- Consider in context of prior screening results

*Structural Anomalies:*
- MFM consultation
- Genetic counseling and testing (amniocentesis, microarray)
- Pediatric subspecialty consultations
- Delivery planning at appropriate level center

**High-Risk Surveillance Protocols:**

*Chronic Hypertension:*
- Serial BP monitoring
- Baseline 24-hour urine protein or protein/creatinine ratio
- Monthly labs (hepatic, renal, platelet)
- Growth ultrasounds every 4 weeks after 24 weeks
- Weekly NST from 32 weeks

*Pregestational Diabetes:*
- A1c every trimester
- Detailed anatomy scan + fetal echo
- Growth ultrasounds every 4 weeks after 24 weeks
- Weekly NST from 32 weeks
- Timing of delivery based on control and complications

*Prior Preterm Birth:*
- 17-OHPC weekly (if singleton, prior spontaneous PTB)
- Cervical length surveillance (16-24 weeks)
- Cerclage if indicated

**Multiple Gestation:**

*Dichorionic-Diamniotic:*
- Growth ultrasounds every 4 weeks from 20 weeks
- Earlier for complications (discordance, IUGR)

*Monochorionic-Diamniotic:*
- Every 2 weeks from 16 weeks (TTTS screening)
- Growth ultrasounds every 2-4 weeks

*Monochorionic-Monoamniotic:*
- Inpatient monitoring from 24-28 weeks
- Frequent surveillance for cord entanglement`,
      keyTerms: [
        { term: 'PPV', definition: 'Positive predictive value; probability that a positive test result is truly positive' },
        { term: '17-OHPC', definition: '17-alpha hydroxyprogesterone caproate; progesterone for preterm birth prevention' },
        { term: 'TTTS', definition: 'Twin-twin transfusion syndrome; complication of monochorionic twins' },
        { term: 'microarray', definition: 'Chromosomal microarray analysis; detects small deletions/duplications' },
      ],
      clinicalNotes: 'Monochorionic twins require more intensive surveillance than dichorionic. TTTS can develop rapidly; any discordance in fluid volumes or growth warrants urgent MFM evaluation. Delivery timing differs by chorionicity and complications.',
    },
    5: {
      level: 5,
      summary: 'Expert prenatal care involves systems-level quality improvement, guideline implementation, management of rare or complex conditions, shared decision-making for uncertain situations, and addressing disparities in prenatal care access and outcomes.',
      explanation: `**Quality Metrics and Systems:**

*Key Performance Indicators:*
- Early prenatal care (first trimester entry)
- Appropriate screening completion
- GDM screening rates
- GBS screening and treatment
- Tdap immunization rates
- Preterm birth rates

*EHR Integration:*
- Decision support for gestational age-appropriate testing
- Reminder systems for time-sensitive interventions
- Risk score calculations

**Rare/Complex Conditions:**

*Fetal Therapy Candidates:*
- Myelomeningocele (fetal surgery)
- Lower urinary tract obstruction (vesicoamniotic shunt)
- Congenital diaphragmatic hernia (FETO)
- Twin-twin transfusion (laser ablation)
- Referral to specialized centers

*Maternal Cardiac Disease:*
- mWHO risk classification guides care intensity
- Multidisciplinary cardio-obstetrics team
- Delivery planning with anesthesia, cardiology

*Red Cell Alloimmunization:*
- Serial antibody titers
- MCA Doppler for fetal anemia
- Intrauterine transfusion if needed

**Shared Decision-Making Scenarios:**

*Positive NIPT with Soft Markers:*
- Amniocentesis vs. expectant management
- Counseling about residual risk

*Fetal Anomaly with Uncertain Prognosis:*
- Multidisciplinary counseling
- Pregnancy continuation vs. termination
- Palliative care planning

*Post-Term Pregnancy:*
- Induction vs. expectant management
- ARRIVE trial implications

**Disparities in Care:**

*Documented Inequities:*
- Later initiation of prenatal care in underserved populations
- Lower screening completion rates
- Higher preterm birth and maternal mortality in Black women

*Mitigation Strategies:*
- Group prenatal care models (CenteringPregnancy)
- Community health workers
- Transportation and childcare support
- Implicit bias training
- Culturally concordant care

**Emerging Approaches:**

*Remote Monitoring:*
- Home blood pressure monitoring
- Self-collected cervical length
- Fetal heart rate monitoring apps

*Precision Medicine:*
- Preeclampsia prediction algorithms
- Pharmacogenomics for medication dosing
- Personalized risk assessment`,
      keyTerms: [
        { term: 'ARRIVE trial', definition: 'Landmark trial showing elective induction at 39 weeks in nulliparous women reduces cesarean without harm' },
        { term: 'MCA Doppler', definition: 'Middle cerebral artery Doppler; detects fetal anemia in alloimmunization by measuring peak systolic velocity' },
        { term: 'CenteringPregnancy', definition: 'Group prenatal care model with education, support, and standard care' },
        { term: 'FETO', definition: 'Fetoscopic endoluminal tracheal occlusion; procedure for severe CDH' },
      ],
      clinicalNotes: 'Black women have 3-4x higher maternal mortality than white women in the US; this persists after controlling for socioeconomic factors. Explicit attention to disparities, standardized protocols, and patient advocacy are essential components of quality care.',
    },
  },
  media: [],
  citations: [
    {
      id: 'acog-routine-prenatal',
      type: 'article',
      title: 'ACOG Guidelines for Perinatal Care',
      source: 'American College of Obstetricians and Gynecologists',
      license: 'Copyright ACOG',
    },
    {
      id: 'uspstf-prenatal',
      type: 'website',
      title: 'Prenatal Care Recommendations',
      source: 'US Preventive Services Task Force',
      url: 'https://www.uspreventiveservicestaskforce.org/',
      license: 'Public domain',
    },
  ],
  crossReferences: [
    { targetId: 'concept-preconception-care', targetType: 'concept', relationship: 'related', label: 'Preconception Care' },
    { targetId: 'concept-common-pregnancy-symptoms', targetType: 'concept', relationship: 'related', label: 'Pregnancy Symptoms' },
    { targetId: 'concept-warning-signs-in-pregnancy', targetType: 'concept', relationship: 'related', label: 'Warning Signs' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['obstetrics', 'patient-education', 'womens-health', 'prenatal-care'],
    keywords: ['prenatal care', 'pregnancy checkups', 'ultrasound', 'antenatal care', 'screening'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['obgyn'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
