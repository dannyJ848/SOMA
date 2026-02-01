import { EducationalContent } from '../../types';

export const prenatalCare: EducationalContent = {
  id: 'obgyn-prenatal-care',
  type: 'topic',
  name: 'Prenatal Care',
  nameEs: 'Cuidado Prenatal',
  alternateNames: ['Antenatal Care', 'Pregnancy Monitoring'],
  levels: {
    1: {
      level: 1,
      summary: 'Prenatal care is the regular medical checkups a woman gets during pregnancy to keep her and her baby healthy.',
      explanation:
        'When a woman is pregnant, she visits her doctor or midwife many times before the baby is born. ' +
        'These visits help make sure both mom and baby are doing well. The doctor checks things like ' +
        'blood pressure, weight, and how the baby is growing. They also do blood tests and ultrasounds ' +
        '(pictures of the baby inside the womb). Starting prenatal care early and going to all appointments ' +
        'is one of the best things a mom can do for her baby.',
      keyTerms: [
        { term: 'Prenatal', definition: 'Before birth; relating to the time during pregnancy' },
        { term: 'Ultrasound', definition: 'A safe test using sound waves to create pictures of the baby inside the womb' },
        { term: 'Trimester', definition: 'One of three 3-month periods that make up a pregnancy' },
      ],
      analogies: ['Prenatal visits are like regular car maintenance — catching small problems before they become big ones.'],
      patientCounselingPoints: [
        'Start prenatal care as soon as you know you are pregnant.',
        'Take prenatal vitamins with folic acid daily.',
        'Avoid alcohol, tobacco, and recreational drugs during pregnancy.',
      ],
    },
    2: {
      level: 2,
      summary: 'Prenatal care follows a structured visit schedule with screenings, labs, and imaging at key gestational milestones to detect complications early.',
      explanation:
        '**Visit Schedule:**\n' +
        '- Weeks 4-28: monthly visits\n' +
        '- Weeks 28-36: every 2 weeks\n' +
        '- Weeks 36-40: weekly visits\n\n' +
        '**First Trimester:**\n' +
        '- Confirm pregnancy, estimate due date, initial labs (CBC, blood type, Rh, rubella, STI screening, urinalysis)\n' +
        '- Dating ultrasound, nuchal translucency screening (11-14 weeks)\n\n' +
        '**Second Trimester:**\n' +
        '- Anatomy scan at 18-22 weeks, quad screen or cell-free DNA\n' +
        '- Glucose challenge test at 24-28 weeks, Rh antibody screen\n\n' +
        '**Third Trimester:**\n' +
        '- Group B strep culture at 36 weeks, fetal position assessment, cervical checks near term',
      keyTerms: [
        { term: 'Nuchal translucency', definition: 'Ultrasound measurement of fluid behind the baby\'s neck used to screen for chromosomal abnormalities' },
        { term: 'Quad screen', definition: 'Blood test measuring four markers to assess risk of neural tube defects and Down syndrome' },
        { term: 'Group B Streptococcus (GBS)', definition: 'Bacteria that can be passed to the baby during delivery, treated with antibiotics in labor' },
      ],
      examples: [
        'A positive glucose challenge test (>140 mg/dL) requires a follow-up 3-hour glucose tolerance test to diagnose gestational diabetes.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive prenatal care integrates risk stratification, genetic screening algorithms, and evidence-based guidelines from ACOG to optimize maternal and fetal outcomes.',
      explanation:
        '**Risk Stratification:**\n' +
        '- Low-risk: healthy nullipara or multipara without comorbidities\n' +
        '- High-risk: AMA (>=35), chronic HTN, diabetes, multiple gestation, prior preterm birth, BMI >40\n\n' +
        '**Genetic Screening:**\n' +
        '- Cell-free DNA (cfDNA/NIPT): screens trisomy 21, 18, 13, and sex chromosome aneuploidies; sensitivity >99% for T21\n' +
        '- First trimester combined screen: nuchal translucency + PAPP-A + free beta-hCG\n' +
        '- Diagnostic: chorionic villus sampling (10-13 wk) or amniocentesis (15-20 wk)\n\n' +
        '**Routine Labs and Monitoring:**\n' +
        '- Initial: CBC, type & screen, antibody screen, rubella IgG, HBsAg, HIV, syphilis, GC/CT, Pap if due, UA/UCx\n' +
        '- 24-28 wk: 1-hr GCT (50g), repeat Rh antibody, administer RhoGAM if Rh-negative\n' +
        '- 36 wk: GBS rectovaginal culture\n\n' +
        '**Medications:**\n' +
        '- Folic acid 400-800 mcg daily (4 mg if prior NTD)\n' +
        '- Low-dose aspirin 81 mg starting 12-28 wk for preeclampsia prevention in high-risk patients',
      keyTerms: [
        { term: 'Cell-free DNA (cfDNA)', definition: 'Non-invasive prenatal testing analyzing fetal DNA fragments circulating in maternal blood' },
        { term: 'RhoGAM', definition: 'Anti-D immune globulin given to Rh-negative mothers to prevent alloimmunization' },
        { term: 'ACOG', definition: 'American College of Obstetricians and Gynecologists, the primary professional organization setting OB-GYN practice guidelines' },
      ],
      clinicalNotes: 'ACOG recommends offering aneuploidy screening to all pregnant patients regardless of age. cfDNA has high sensitivity but is a screening test — positive results require diagnostic confirmation.',
    },
    4: {
      level: 4,
      summary: 'Advanced prenatal management addresses Rh alloimmunization, cervical insufficiency, and antepartum fetal surveillance including biophysical profiles, NST, and Doppler velocimetry.',
      explanation:
        '**Antepartum Fetal Surveillance:**\n' +
        '- Non-stress test (NST): reactive = 2 accelerations of 15 bpm x 15 sec in 20 min\n' +
        '- Biophysical profile (BPP): NST + 4 ultrasound parameters (tone, movement, breathing, AFI); score 8-10 normal\n' +
        '- Modified BPP: NST + amniotic fluid index (AFI)\n' +
        '- Contraction stress test (CST): 3 contractions in 10 min; late decelerations = positive (concerning)\n\n' +
        '**Doppler Velocimetry:**\n' +
        '- Umbilical artery: absent or reversed end-diastolic flow indicates severe placental insufficiency\n' +
        '- Middle cerebral artery (MCA) peak systolic velocity: screening for fetal anemia (>1.5 MoM)\n\n' +
        '**Rh Alloimmunization:**\n' +
        '- Indirect Coombs positive -> serial MCA Dopplers\n' +
        '- MCA PSV >1.5 MoM -> cordocentesis and intrauterine transfusion\n\n' +
        '**Cervical Insufficiency:**\n' +
        '- History-indicated cerclage: prior second-trimester loss\n' +
        '- Ultrasound-indicated cerclage: cervical length <25 mm before 24 weeks with prior preterm birth\n' +
        '- Vaginal progesterone for short cervix without prior PTB',
      keyTerms: [
        { term: 'Biophysical profile (BPP)', definition: 'Composite fetal assessment scoring NST, breathing, movement, tone, and amniotic fluid' },
        { term: 'MCA Doppler', definition: 'Middle cerebral artery peak systolic velocity measurement used to detect fetal anemia non-invasively' },
        { term: 'Cerclage', definition: 'Surgical suture placed around the cervix to prevent premature dilation in cervical insufficiency' },
      ],
      clinicalNotes: 'MCA Doppler has largely replaced amniocentesis for monitoring Rh-alloimmunized pregnancies. A BPP score <=4 generally warrants delivery.',
    },
    5: {
      level: 5,
      summary: 'Expert-level prenatal care involves cell-free DNA analytics, placental biomarkers for preeclampsia prediction, and integration of AI-driven risk models into clinical decision-making.',
      explanation:
        '**Advanced Genomic Screening:**\n' +
        '- Genome-wide cfDNA analysis detects microdeletions (22q11.2, 1p36, 5p-) with variable PPV depending on prevalence\n' +
        '- Confined placental mosaicism causes ~1% of cfDNA false positives for trisomy\n' +
        '- Exome/genome sequencing for fetuses with structural anomalies and normal karyotype — diagnostic yield ~10-30%\n\n' +
        '**Preeclampsia Prediction Models:**\n' +
        '- First-trimester combined screening (FMF algorithm): MAP, UtA-PI, PAPP-A, PlGF; detection rate ~75% for preterm PE at 10% FPR\n' +
        '- sFlt-1/PlGF ratio: <38 rules out PE within 1 week (NPV ~99%); >85 confirms PE within 4 weeks\n\n' +
        '**Preterm Birth Prediction:**\n' +
        '- Quantitative fetal fibronectin (qfFN): risk stratification beyond binary positive/negative\n' +
        '- Cervical length + qfFN combined models improve specificity\n' +
        '- Vaginal microbiome analysis (Lactobacillus depletion) as emerging predictive biomarker\n\n' +
        '**AI Integration:**\n' +
        '- Machine learning models for CTG interpretation outperform traditional pattern-based reading\n' +
        '- Automated placental pathology from whole-slide imaging\n' +
        '- Predictive models integrating EHR data for adverse outcome risk stratification',
      keyTerms: [
        { term: 'sFlt-1/PlGF ratio', definition: 'Angiogenic biomarker ratio used for short-term prediction and confirmation of preeclampsia' },
        { term: 'Confined placental mosaicism', definition: 'Chromosomal abnormality limited to the placenta that can cause false-positive cfDNA results' },
        { term: 'Quantitative fetal fibronectin', definition: 'Continuous measure of fFN concentration providing graded preterm birth risk assessment' },
      ],
      clinicalNotes: 'The sFlt-1/PlGF ratio is validated in European and international guidelines (NICE, ISSHP) but not yet standard in all US practices. First-trimester PE screening with aspirin prophylaxis reduces preterm PE by ~62% (ASPRE trial).',
    },
  },
  media: [],
  citations: [
    { id: 'acog-prenatal-2024', type: 'article', title: 'ACOG Practice Bulletin: Routine Prenatal Care', source: 'Obstetrics & Gynecology', authors: ['ACOG Committee on Practice Bulletins'] },
  ],
  crossReferences: [
    { targetId: 'obgyn-labor-management', targetType: 'topic', relationship: 'related', label: 'Labor and Delivery Management' },
    { targetId: 'obgyn-preeclampsia', targetType: 'condition', relationship: 'see-also', label: 'Preeclampsia' },
    { targetId: 'obgyn-gestational-diabetes', targetType: 'condition', relationship: 'see-also', label: 'Gestational Diabetes' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['obstetrics', 'prenatal', 'screening', 'preventive-care'],
    keywords: ['prenatal care', 'antenatal', 'pregnancy monitoring', 'genetic screening', 'cfDNA', 'NIPT'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['ob-gyn'] },
  },
  createdAt: '2025-06-01',
  updatedAt: '2025-06-01',
  version: 1,
  status: 'published',
};
