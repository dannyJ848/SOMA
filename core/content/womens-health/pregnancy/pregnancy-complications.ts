import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const pregnancyComplications: WomensHealthContent = {
  id: 'pregnancy-complications',
  title: 'Pregnancy Complications',
  category: 'Pregnancy',
  complexityLevels: [
    {
      level: 1,
      title: 'Understanding Pregnancy Complications',
      content: `Most pregnancies are healthy and uncomplicated. But sometimes problems can happen. Knowing the warning signs helps you get help quickly.

**Common Pregnancy Complications:**

**Miscarriage:**
- Loss of pregnancy before 20 weeks
| Happens in about 15-20% of known pregnancies |
- Signs: vaginal bleeding, cramping, back pain |
- Usually not caused by anything you did |

**Ectopic Pregnancy:**
- Pregnancy outside the uterus (usually in fallopian tube) |
- Can be life-threatening
- Signs: abdominal pain, vaginal bleeding, shoulder pain |

**Preeclampsia:**
- High blood pressure after 20 weeks
| Can damage organs |
- Signs: severe headache, vision changes, swelling in hands/face |
- Requires medical treatment

**Gestational Diabetes:**
- High blood sugar during pregnancy
| Usually goes away after birth |
- Treated with diet, exercise, sometimes medication |

**Preterm Labor:**
- Labor before 37 weeks
| Signs: regular contractions, pelvic pressure, back pain |
- May need medications to stop labor |

**Placenta Previa:**
- Placenta covering the cervix
| Can cause bleeding |
- May require C-section delivery |

**Warning Signs - Call Your Doctor:**
- Vaginal bleeding
| Severe abdominal pain |
| Severe headache or vision changes |
| Sudden swelling of hands, face, or feet |
| Fever over 100.4°F (38°C) |
| Leakage of fluid from vagina |
| Decreased or no baby movement |
| Regular contractions before 37 weeks |

**Remember:** Most complications are treatable, especially when found early. Regular prenatal care helps catch problems early.
`,
      keyPoints: [
        'Most pregnancies are healthy and uncomplicated',
        'Warning signs include bleeding, severe pain, headache, swelling, fever, fluid leakage, decreased movement',
        'Regular prenatal care helps detect complications early',
        'Most complications are treatable when caught early',
      ],
      vocabulary: [
        { term: 'Miscarriage', definition: 'Loss of pregnancy before 20 weeks' },
        { term: 'Ectopic Pregnancy', definition: 'Pregnancy outside the uterus' },
        { term: 'Preeclampsia', definition: 'High blood pressure and organ damage in pregnancy' },
        { term: 'Gestational Diabetes', definition: 'Diabetes that develops during pregnancy' }
      ],
      quiz: [
        {
          question: 'What is the most common symptom of preeclampsia?',
          options: [
            'Low blood pressure',
            'High blood pressure with possible headache and vision changes',
            'Low blood sugar',
            'Excessive weight gain',
          ],
          correctAnswer: 1,
          explanation: 'Preeclampsia is characterized by high blood pressure after 20 weeks of pregnancy. Common symptoms include severe headaches, vision changes, and swelling of the hands and face.',
        },
        {
          question: 'What is an ectopic pregnancy?',
          options: [
            'Pregnancy with twins',
            'Pregnancy outside the uterus, usually in the fallopian tube',
            'Pregnancy after age 40',
            'High-risk pregnancy',
          ],
          correctAnswer: 1,
          explanation: 'An ectopic pregnancy occurs when the fertilized egg implants outside the uterus, most commonly in the fallopian tube. This is a medical emergency that requires prompt treatment.',
        }
      ]
    },
    {
      level: 2,
      title: 'Common Pregnancy Complications',
      content: `Pregnancy complications range from minor to serious. Early recognition and management improve outcomes for both mother and baby.

**Miscarriage (Spontaneous Abortion):**

**Definition:**
- Pregnancy loss before 20 weeks gestation
| Incidence: 15-20% of recognized pregnancies |
- Most occur in first trimester

**Risk Factors:**
- Advanced maternal age
| Previous miscarriage |
| Chronic conditions (diabetes, thyroid) |
| Infections |
| Cervical insufficiency |

**Signs:**
- Vaginal bleeding (spotting to heavy)
| Abdominal cramping |
| Back pain |
| Passage of tissue |

**Management:**
- Expectant management (natural passage)
| Medication (misoprostol) |
| Dilation and curettage (D&C) |
- Emotional support

**Ectopic Pregnancy:**

**Definition:**
- Implantation outside uterine cavity
| 95-96% in fallopian tubes |
- Incidence: 1-2% of pregnancies

**Risk Factors:**
- Previous ectopic
| Tubal surgery/pelvic inflammatory disease |
| Endometriosis |
| Assisted reproductive technology |

**Diagnosis:**
- Transvaginal ultrasound
| Serial hCG levels |
- Culdocentesis (rare)

**Management:**
- Methotrexate (if stable, early)
| Laparoscopic surgery |
- Salpingostomy or salpingectomy

**Preeclampsia:**

**Definition:**
- New-onset hypertension (≥140/90) after 20 weeks
| With proteinuria OR end-organ dysfunction |
- Incidence: 2-8% of pregnancies

**Risk Factors:**
- First pregnancy
| Age <20 or >35 |
| Multiple gestation |
| Chronic hypertension |
| Diabetes, obesity |
| Family history

**Severe Features:**
- BP ≥160/110
| Thrombocytopenia <100,000 |
| Elevated liver enzymes |
| Severe headache, vision changes |
| Pulmonary edema |

**Management:**
- Delivery is only cure
| Antihypertensives for BP control |
| Magnesium sulfate for seizure prophylaxis |
| Corticosteroids for fetal lung maturity if preterm |

**Gestational Diabetes Mellitus (GDM):**

**Definition:**
- Glucose intolerance first recognized in pregnancy
| Incidence: 6-25% (varies by population) |
| Usually diagnosed 24-28 weeks |

**Risk Factors:**
| BMI ≥30 |
| Previous GDM |
| Family history of diabetes |
| Previous macrosomic infant |
| Certain ethnicities

**Screening:**
- 1-hour 50g glucose challenge test
| If positive: 3-hour 100g OGTT |

**Management:**
| Medical nutrition therapy |
| Blood glucose monitoring |
| Exercise |
| Insulin or oral agents if needed |
| Antenatal fetal surveillance |

**Preterm Labor:**

**Definition:**
| Regular contractions with cervical change before 37 weeks |
| Incidence: 10-12% of births |

**Risk Factors:**
- Previous preterm birth
| Multifetal gestation |
| Short cervix |
| Infection |
| Smoking, substance use |

**Management:**
- Corticosteroids (betamethasone) for fetal lung maturity
| Magnesium sulfate for neuroprotection (<32 weeks) |
| Tocolytics (short-term prolongation) |
| Antibiotics if PPROM |
`,
      keyPoints: [
        'Miscarriage occurs in 15-20% of recognized pregnancies, mostly in first trimester',
        'Ectopic pregnancy is a medical emergency requiring prompt treatment',
        'Preeclampsia requires delivery as the definitive treatment',
        'GDM is screened at 24-28 weeks with glucose challenge test',
      ],
      vocabulary: [
        { term: 'Spontaneous Abortion', definition: 'Medical term for miscarriage' },
        { term: 'Proteinuria', definition: 'Protein in the urine, a sign of preeclampsia' },
        { term: 'OGTT', definition: 'Oral Glucose Tolerance Test for diabetes diagnosis' },
        { term: 'PPROM', definition: 'Preterm Premature Rupture of Membranes' }
      ],
      quiz: [
        {
          question: 'What defines severe features of preeclampsia?',
          options: [
            'Blood pressure ≥130/80',
            'Blood pressure ≥160/110 or thrombocytopenia <100,000',
            'Proteinuria only',
            'Mild headache only',
          ],
          correctAnswer: 1,
          explanation: 'Severe features of preeclampsia include blood pressure ≥160/110 mmHg, thrombocytopenia <100,000, elevated liver enzymes, severe headache, visual changes, or pulmonary edema.',
        },
        {
          question: 'What medication is given for fetal lung maturity when preterm labor is threatened?',
          options: [
            'Magnesium sulfate',
            'Betamethasone (corticosteroids)',
            'Insulin',
            'Antibiotics',
          ],
          correctAnswer: 1,
          explanation: 'Betamethasone is a corticosteroid given to accelerate fetal lung maturity when preterm delivery is likely. It is given in two doses 24 hours apart.',
        }
      ]
    },
    {
      level: 3,
      title: 'Management of Pregnancy Complications',
      content: `Effective management of pregnancy complications requires systematic evaluation, risk stratification, and timely intervention.

**Hypertensive Disorders:**

**Classification:**

| Disorder | Onset | Resolution |
|----------|-------|------------|
| Chronic hypertension | <20 weeks | Postpartum (usually persists) |
| Gestational hypertension | ≥20 weeks | Postpartum (usually by 12 weeks) |
| Preeclampsia | ≥20 weeks | Postpartum (by 12 weeks) |
| Eclampsia | Any | Delivery |
| HELLP syndrome | Usually third trimester | Postpartum |

**Preeclampsia Management:**

**Mild Preeclampsia:**
- Outpatient management if reliable
| BP <160/110 |
| No severe features |
- Biweekly NST, weekly labs
| Deliver at 37 weeks

**Severe Preeclampsia:**
- Hospitalization required
| Magnesium sulfate: 4-6 g loading, 2 g/hour maintenance |
- Antihypertensives: Labetalol, Hydralazine
| Delivery once stable |
| Corticosteroids if <34 weeks |

**Magnesium Toxicity:**
- Loss of DTRs (first sign)
| Respiratory depression |
| Cardiac arrest |
- Antidote: Calcium gluconate

**Placental Abnormalities:**

**Placenta Previa:**
- Placenta implants over or near internal cervical os
| Types: Complete, partial, marginal, low-lying |
| Incidence: 0.5% |
- Diagnosis: Ultrasound

**Management:**
- Pelvic rest (no intercourse, no digital exams)
| Emergency C-section for bleeding |
- Delivery at 36-37 weeks (or earlier if bleeding) |
| Requires C-section delivery (if complete previa persists) |

**Placental Abruption:**
| Premature separation of normally implanted placenta |
| Incidence: 0.4-1% |
- Risk factors: Hypertension, trauma, smoking, cocaine |
- Grades: 0 (asymptomatic) to 3 (fetal demise) |

**Management:**
- Emergency delivery for significant abruption
| C-section for fetal distress |
| Vaginal delivery possible if stable and bleeding minimal |

**Multiple Gestation Complications:**

**Twin-Twin Transfusion Syndrome (TTTS):**
- Monochorionic twins only
| Shared placental circulation |
- Incidence: 10-15% of monochorionic twins |

**Quintero Staging:**
| Stage | Findings |
|-------|----------|
| I | Small bladder in donor twin |
| II | No bladder in donor twin |
| III | Critically abnormal Dopplers |
| IV | Hydrops in one or both twins |
| V | Demise of one twin |

**Management:**
- Serial ultrasounds
| Laser coagulation for stages II-III |
| Septostomy (controversial) |
| Delivery when indicated by gestational age/stage |

**Intrauterine Growth Restriction (IUGR):**

**Etiology:**
- Placental insufficiency (most common)
| Maternal factors (hypertension, malnutrition) |
| Fetal factors (infection, aneuploidy) |
| Umbilical cord factors |

**Assessment:**
- Ultrasound for estimated fetal weight
| Doppler studies (umbilical artery, MCA) |
| Amniotic fluid assessment |

**Management:**
- Antenatal surveillance (NST, BPP) |
- Delivery timing based on:
  - Gestational age
  - Doppler findings
  - BPP results
| Generally deliver by 37 weeks at latest |

**Fetal Demise:**

**Definition:**
- Intrauterine fetal death at ≥20 weeks
| Incidence: 0.6% |

**Causes:**
- Unexplained (25-50%)
| Placental abnormalities (24%) |
| Maternal medical conditions (20%) |
| Fetal anomalies (10%) |
| Infection (10%) |
| Cord complications (5%) |

**Management:**
- Confirm diagnosis with ultrasound
| Discuss options (induction vs. D&E) |
| Autopsy/karyotype consideration |
| Emotional support and counseling
| Rhogam if Rh-negative |
`,
      keyPoints: [
        'Hypertensive disorders are classified by onset and associated findings',
        'Severe preeclampsia requires magnesium sulfate for seizure prophylaxis',
        'TTTS affects monochorionic twins and is staged by severity',
        'IUGR delivery timing depends on gestational age and Doppler findings',
      ],
      vocabulary: [
        { term: 'HELLP Syndrome', definition: 'Hemolysis, Elevated Liver enzymes, Low Platelets - variant of preeclampsia' },
        { term: 'DTRs', definition: 'Deep Tendon Reflexes - monitored during magnesium sulfate therapy' },
        { term: 'Hydrops', definition: 'Abnormal fluid accumulation in two or more fetal compartments' },
        { term: 'Karyotype', definition: 'Chromosome analysis to detect genetic abnormalities' }
      ],
      quiz: [
        {
          question: 'What is the first sign of magnesium sulfate toxicity?',
          options: [
            'Seizure',
            'Loss of deep tendon reflexes',
            'Respiratory distress',
            'Cardiac arrest',
          ],
          correctAnswer: 1,
          explanation: 'The first sign of magnesium sulfate toxicity is loss of deep tendon reflexes. This occurs before respiratory depression and cardiac arrest, making it an important early warning sign.',
        },
        {
          question: 'What is the most common cause of intrauterine growth restriction?',
          options: [
            'Fetal genetic anomalies',
            'Maternal infection',
            'Placental insufficiency',
            'Cord abnormalities',
          ],
          correctAnswer: 2,
          explanation: 'Placental insufficiency is the most common cause of intrauterine growth restriction, accounting for the majority of cases. The placenta fails to deliver adequate nutrients and oxygen to support normal fetal growth.',
        }
      ]
    },
    {
      level: 4,
      title: 'Advanced Management of Complex Complications',
      content: `Complex pregnancy complications require multidisciplinary care, advanced monitoring techniques, and individualized delivery planning.

**Cardiovascular Complications in Pregnancy:**

**Peripartum Cardiomyopathy (PPCM):**

**Definition:**
- Heart failure (EF <45%) in last month of pregnancy or 5 months postpartum
| No other identifiable cause |
| Incidence: 1:1000 to 1:4000 |

**Risk Factors:**
- Age >30
| Multifetal gestation |
| African descent |
| Preeclampsia |
| Family history of cardiomyopathy

**Diagnosis:**
| Echocardiogram |
| BNP elevation |
| Exclude other causes |

**Management:**
- Standard heart failure therapy (adjusting for pregnancy/postpartum)
| Bromocriptine (controversial) |
| Anticoagulation if EF <35% |
- Avoid future pregnancy if EF doesn't recover

**Myocardial Infarction:**
- Rare but increasing with delayed childbearing
| Diagnose with ECG, troponin |
- Coronary angiography with shielding |
| Management: Cardiology-led, individualized |

**Thromboembolic Complications:**

**Deep Vein Thrombosis (DVT):**
- 5x increased risk in pregnancy
| Left leg more common (compression of left iliac vein) |

**Diagnosis:|
- Doppler ultrasound (first-line)
| D-dimer limited utility (elevated normally) |

**Treatment:|
- Low molecular weight heparin (LMWH) |
| Warfarin contraindicated (teratogenic) |
| Continue anticoagulation 6-12 weeks postpartum |

**Pulmonary Embolism:|
- V/Q scan or CT pulmonary angiogram |
| LMWH or unfractionated heparin |
| Thrombolytics only for massive PE |

**Renal Complications:**

**Acute Kidney Injury (AKI):**
- Prerenal: dehydration, preeclampsia
| Intrinsic: ATN, glomerulonephritis |
| Postrenal: obstruction |

**Management:|
- Treat underlying cause |
| Fluid resuscitation (careful in preeclampsia) |
| Dialysis if refractory |

**Chronic Kidney Disease:|
- Risk of worsening renal function |
| Increased preeclampsia risk |
| Preterm delivery often necessary |

**Hepatic Complications:**

**Intrahepatic Cholestasis of Pregnancy (ICP):**
- Pruritus without rash
| Elevated bile acids |
| Increased risk of stillbirth |
- Treatment: Ursodeoxycholic acid
| Delivery at 36-37 weeks

**HELLP Syndrome:**
- Severe variant of preeclampsia
| LDH >600 IU/L |
| AST/ALT >70 IU/L |
| Platelets <100,000 |

**Management:|
- Immediate delivery once stabilized |
| Corticosteroids if <34 weeks |
| Platelet transfusion if <20,000 |
| Possible postpartum liver dysfunction |

**Hematologic Complications:**

**Thrombocytopenia:**
- Gestational thrombocytopenia (70%): mild, benign
| Preeclampsia/HELLP (21%) |
| ITP (3%) |
| TTP/HUS (rare)

**ITP Management:|
- Mild: observation |
| Severe: corticosteroids, IVIG |
| Avoid antiplatelet agents

**Disseminated Intravascular Coagulation (DIC):|
- Consumptive coagulopathy |
| Abruption, sepsis, amniotic fluid embolism |
| Replacement of platelets, plasma, cryoprecipitate |

**Endocrine Emergencies:**

**Diabetic Ketoacidosis (DKA):|
- Lower threshold in pregnancy (hunger, stress) |
| More rapid onset |
| Fetal risk: acidosis, demise |

**Management:|
| Aggressive fluid resuscitation |
| Insulin infusion |
| Dextrose once blood glucose <200 mg/dL |
| Continuous fetal monitoring |
| Treat precipitating cause |

**Thyroid Storm:|
- Exacerbation of hyperthyroidism |
| Medical emergency |
| PTU preferred over methimazole |
`,
      keyPoints: [
        'PPCM is heart failure presenting late pregnancy to 5 months postpartum',
        'LMWH is treatment of choice for pregnancy-associated DVT',
        'HELLP syndrome requires immediate delivery once stabilized',
        'DKA has lower threshold and more rapid onset in pregnancy',
      ],
      vocabulary: [
        { term: 'PPCM', definition: 'Peripartum Cardiomyopathy - heart failure around time of delivery' },
        { term: 'ICP', definition: 'Intrahepatic Cholestasis of Pregnancy - liver condition causing itching' },
        { term: 'ATN', definition: 'Acute Tubular Necrosis - kidney injury type' },
        { term: 'PTU', definition: 'Propylthiouracil - antithyroid medication preferred in pregnancy' }
      ],
      quiz: [
        {
          question: 'What is the preferred treatment for pregnancy-associated DVT?',
          options: [
            'Warfarin',
            'Low molecular weight heparin (LMWH)',
            'Direct oral anticoagulants',
            'Antiplatelet agents',
          ],
          correctAnswer: 1,
          explanation: 'Low molecular weight heparin (LMWH) is the treatment of choice for DVT in pregnancy because it does not cross the placenta and is not teratogenic, unlike warfarin.',
        },
        {
          question: 'What is the defining laboratory feature of HELLP syndrome?',
          options: [
            'Elevated bilirubin only',
            'Hemolysis, Elevated Liver enzymes, Low Platelets',
            'Elevated white count only',
            'Low hemoglobin only',
          ],
          correctAnswer: 1,
          explanation: 'HELLP syndrome is defined by Hemolysis (LDH elevated), Elevated Liver enzymes (AST/ALT), and Low Platelets. It is a severe variant of preeclampsia requiring immediate delivery.',
        }
      ]
    },
    {
      level: 5,
      title: 'Critical Care and Special Situations',
      content: `Pregnancy complications requiring critical care demand specialized knowledge of physiologic changes and multidisciplinary management.

**Obstetric Critical Care:**

**Physiologic Considerations:**
- Blood volume increased 40-50% (can mask shock until decompensation) |
| Aortocaval compression by gravid uterus |
| Decreased functional residual capacity |
| Increased oxygen consumption (20-30%) |
| Hypercoagulable state |

**Maternal Resuscitation:**

**Modifications:|
- Left lateral tilt (displace uterus) |
- Airway management more difficult (edema) |
| Lower tidal volumes (reduced FRC) |
| Chest compressions positioned higher |
| Consider perimortem C-section at 4 minutes

**Perimortem C-section:|
- Indicated if gravid >20 weeks |
- Relieves aortocaval compression |
| Improves resuscitation dynamics |
| May save infant |
- Should be initiated within 4 minutes of cardiac arrest |

**Amniotic Fluid Embolism (AFE):**

**Definition:|
- Amniotic fluid enters maternal circulation |
| Incidence: 1:40,000 |
| Mortality: 20-60% |

**Pathophysiology:|
- Mechanical obstruction (pulmonary) |
| Anaphylactoid reaction |
| DIC |

**Clinical Presentation:|
- Sudden hypotension |
| Hypoxia |
| Coagulopathy |
| Cardiac arrest |

**Management:|
- Rapid blood product resuscitation |
| Hemodynamic support |
| Treat coagulopathy |
| Consider ECMO in refractory cases |

**Septic Shock in Pregnancy:|

**Common Sources:|
| Pyelonephritis |
| Chorioamnionitis |
| Pneumonia |
| Postpartum endometritis |

**Management:|
| Early goal-directed therapy |
| Broad-spectrum antibiotics |
| Vasopressors (norepinephrine preferred) |
| Delivery source control if intra-amniotic infection |

**Obstetric Hemorrhage Protocol:**

**Massive Transfusion Protocol (MTP):|
- 1:1:1 ratio (PRBC:Plasma:Platelets) |
| Prevent dilutional coagulopathy |
| Point-of-care testing (TEG/ROTEM) |

**Interventions:|
- Uterotonics (oxytocin, methylergonovine, carboprost) |
| Uterine balloon tamponade |
- Compression sutures (B-Lynch) |
| Uterine artery embolization |
| Hysterectomy (last resort) |

**Trauma in Pregnancy:|

**Assessment Priorities:|
- Maternal stabilization (best for fetus) |
| Left lateral tilt |
| Larger blood volumes (can compensate initially) |
| FAST scan (bladder window with uterus) |

**Placental Abruption:|
- Most common traumatic fetal death cause |
- External fetal monitoring |
| Rhogam if indicated |
- Kleihauer-Betke test (fetal-maternal hemorrhage) |

**Domestic Violence:|
- Homicide leading cause of pregnancy-associated death |
- Screen at each visit |
| Safety planning |
| Resources and referrals |

**Neurologic Emergencies:|

**Preeclampsia-associated Stroke:|
- Hemorrhagic more common than ischemic |
| Severe hypertension key risk factor |
| MRI preferred (no radiation) |
| Control BP before imaging if possible |

**Eclampsia:|
- Magnesium sulfate for seizure prophylaxis |
| Loading: 4-6 g IV over 15-20 min |
| Maintenance: 2 g/hour |
| Duration: 24 hours after delivery or last seizure |

**Postpartum Complications Requiring Critical Care:|

**Delayed Postpartum Hemorrhage:|
- Subinvolution |
| Retained products |
| Infection |
| Ultrasound evaluation |
| D&C or medical management |

**Postpartum Preeclampsia:|
| Can present days to weeks after delivery |
| Same management as antepartum |
| Extended monitoring needed |
`,
      keyPoints: [
        'Pregnancy increases blood volume, masking shock until late decompensation',
        'Perimortem C-section should be initiated within 4 minutes of cardiac arrest',
        'Amniotic fluid embolism presents with sudden hypotension, hypoxia, and coagulopathy',
        'Trauma in pregnancy requires maternal stabilization for fetal benefit',
      ],
      vocabulary: [
        { term: 'AFE', definition: 'Amniotic Fluid Embolism - rare obstetric emergency' },
        { term: 'MTP', definition: 'Massive Transfusion Protocol for hemorrhage' },
        { term: 'FAST', definition: 'Focused Assessment with Sonography in Trauma' },
        { term: 'ECMO', definition: 'Extracorporeal Membrane Oxygenation - advanced life support' }
      ],
      quiz: [
        {
          question: 'When should perimortem C-section be initiated during maternal cardiac arrest?',
          options: [
            'Immediately upon arrest',
            'After 2 minutes of unsuccessful resuscitation',
            'After 4 minutes of unsuccessful resuscitation',
            'After 10 minutes of resuscitation',
          ],
          correctAnswer: 2,
          explanation: 'Perimortem C-section should be initiated after 4 minutes of unsuccessful resuscitation. This relieves aortocaval compression, improves resuscitation dynamics, and provides the best chance for infant survival.',
        },
        {
          question: 'What is the preferred ratio for massive transfusion in obstetric hemorrhage?',
          options: [
            '2:1:1 (PRBC:Plasma:Platelets)',
            '1:1:1 (PRBC:Plasma:Platelets)',
            '3:2:1 (PRBC:Plasma:Platelets)',
            '4:1:1 (PRBC:Plasma:Platelets)',
          ],
          correctAnswer: 1,
          explanation: 'The 1:1:1 ratio of packed red blood cells to plasma to platelets is preferred for massive transfusion in obstetric hemorrhage to prevent dilutional coagulopathy and provide balanced resuscitation.',
        }
      ]
    }
  ],
  relatedTopics: [
    'pregnancy-overview',
    'prenatal-care',
    'labor-delivery',
    'postpartum-care',
  ],
  lastUpdated: '2025-01-25',
  references: [
    'ACOG Practice Bulletins',
    'Society for Maternal-Fetal Medicine Consult Series',
    'Williams Obstetrics 26th Edition',
  ]
};
