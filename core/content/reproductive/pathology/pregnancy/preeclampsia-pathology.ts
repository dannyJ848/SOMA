/**
 * Preeclampsia Pathology - Reproductive System
 *
 * Comprehensive content on preeclampsia including pathophysiology,
 * diagnosis, complications, and management.
 */

import { EducationalContent } from '../../../types';

export const preeclampsiaPathology: EducationalContent = {
  id: 'reproductive-preeclampsia-pathology',
  type: 'condition',
  name: 'Preeclampsia',
  alternateNames: ['Toxemia', 'Pregnancy-Induced Hypertension', 'PET'],

  levels: {
    1: {
      level: 1,
      summary: 'Preeclampsia is a serious pregnancy complication causing high blood pressure and organ damage. It usually starts after 20 weeks of pregnancy and can be dangerous for mother and baby if not treated.',
      explanation: `## What Is Preeclampsia?

Preeclampsia is a pregnancy complication characterized by high blood pressure and signs of damage to other organs, usually the liver and kidneys.

### When It Occurs

- Usually starts after 20 weeks of pregnancy
- Can occur earlier with certain conditions
- Most common in third trimester
- Can occur after delivery (rare)

### Signs and Symptoms

**High Blood Pressure:**
- 140/90 or higher
- Measured twice, 4 hours apart

**Other Signs:**
- Protein in urine
- Swelling of face and hands
- Severe headaches
- Vision changes (spots, blurriness)
- Upper belly pain
- Nausea or vomiting
- Sudden weight gain

### Why It Is Dangerous

For mother:
- Seizures (eclampsia)
- Stroke
- Organ damage
- HELLP syndrome

For baby:
- Growth restriction
- Premature birth
- Low birth weight
- Placental abruption

### Risk Factors

- First pregnancy
- Twins or more
- History of preeclampsia
- Age under 20 or over 35
- High blood pressure before pregnancy
- Diabetes
- Kidney disease
- Obesity

### Treatment

The only cure is delivery of the baby.

**Management may include:**
- Blood pressure monitoring
- Blood and urine tests
- Bed rest
- Blood pressure medication
- Hospitalization
- Early delivery if severe

### Prevention

- Low-dose aspirin for high-risk women
- Regular prenatal care
- Managing chronic conditions
- Healthy weight before pregnancy`,
      keyTerms: [
        { term: 'preeclampsia', definition: 'Pregnancy complication with high blood pressure and organ damage' },
        { term: 'eclampsia', definition: 'Seizures caused by preeclampsia' },
        { term: 'HELLP syndrome', definition: 'Serious complication involving blood and liver' },
        { term: 'proteinuria', definition: 'Protein in the urine' },
        { term: 'gestational hypertension', definition: 'High blood pressure during pregnancy without other organ damage' },
      ],
      analogies: [
        'The placenta in preeclampsia is like a faulty filter - it does not work properly and releases substances that damage the mother\'s blood vessels.',
      ],
      examples: [
        'Preeclampsia affects about 5-8% of pregnancies worldwide',
        'HELLP syndrome occurs in about 0.5% of pregnancies but is life-threatening',
        'Women with a history of preeclampsia have 7x higher risk in future pregnancies',
      ],
      patientCounselingPoints: [
        'Attend all prenatal appointments for blood pressure monitoring',
        'Report severe headache, vision changes, or upper belly pain immediately',
        'Low-dose aspirin may prevent preeclampsia in high-risk women',
        'Delivery is the only cure for preeclampsia',
      ],
    },
    2: {
      level: 2,
      summary: 'Preeclampsia involves abnormal placental development causing maternal endothelial dysfunction and hypertension. Diagnosis requires new-onset hypertension after 20 weeks with proteinuria or other organ dysfunction. Management balances maternal risks against fetal maturity.',
      explanation: `## Preeclampsia Overview

### Pathophysiology

**Abnormal Placentation:**
- Shallow trophoblast invasion
- Incomplete spiral artery remodeling
- Reduced placental perfusion
- Placental ischemia
- Anti-angiogenic factor release

**Maternal Response:**
- Endothelial dysfunction
- Vasospasm
- Activation of coagulation
- Inflammatory response
- Organ hypoperfusion

**Key Molecules:**
- sFlt-1 (soluble fms-like tyrosine kinase-1)
- sEng (soluble endoglin)
- PlGF (placental growth factor)
- Imbalance causes endothelial damage

### Classification

**Gestational Hypertension:**
- New BP >=140/90 after 20 weeks
- No proteinuria
- No severe features
- May progress to preeclampsia

**Preeclampsia:**
- Hypertension + proteinuria, OR
- Hypertension + evidence of organ dysfunction

**Preeclampsia with Severe Features:**
- BP >=160/110
- Thrombocytopenia (<100,000)
- Impaired liver function (2x normal)
- Renal insufficiency (Cr >1.1)
- Pulmonary edema
- Cerebral/visual symptoms
- Fetal growth restriction

**Eclampsia:**
- New-onset seizures
- Not attributable to other cause
- In woman with preeclampsia

**Chronic Hypertension with Superimposed Preeclampsia:**
- Chronic hypertension diagnosed
- New proteinuria
- Worsening hypertension
- New organ dysfunction

### Diagnostic Criteria

**Blood Pressure:**
- >=140/90 mmHg
- Two readings 4 hours apart
- New onset after 20 weeks

**Proteinuria:**
- >=300 mg/24-hour urine
- Protein/Cr ratio >=0.3
- Dipstick 2+ (if other methods unavailable)

**Without Proteinuria (Diagnosis if hypertension plus):**
- Thrombocytopenia
- Renal insufficiency
- Impaired liver function
- Pulmonary edema
- Cerebral/visual symptoms

### Risk Factors

**High Risk:**
- Prior preeclampsia
- Multifetal gestation
- Chronic hypertension
- Diabetes (pregestational)
- Renal disease
- Autoimmune disease (SLE, APS)

**Moderate Risk:**
- Nulliparity
- Obesity (BMI >30)
- Age >=35
- Family history
- Socioeconomic factors
- Black race

**Protective:**
- Prior normal pregnancy
- Smoking (paradoxical)

### Prevention

**Low-Dose Aspirin:**
- For high-risk women
- Start before 16 weeks (ideally 12 weeks)
- 81 mg daily
- 60-70% risk reduction

**Calcium:**
- For low-intake populations
- 1-2 g daily
- Reduces risk

**Other:**
- Exercise
- Weight management
- Blood pressure control
- Regular prenatal care

### Fetal/Neonatal Complications

**Growth Restriction:**
- Placental insufficiency
- 25-30% of cases
- Increased surveillance

**Oligohydramnios:**
- Reduced placental perfusion
- Sign of fetal compromise

**Placental Abruption:**
- 4-5x increased risk
- Retroplacental bleeding
- Emergency

**Preterm Delivery:**
- Iatrogenic (indicated)
- Spontaneous
- Leading cause of neonatal morbidity

### Maternal Complications

**Eclampsia:**
- Seizures
- 0.5% of preeclamptic women
- Maternal mortality
- Fetal bradycardia during seizure

**HELLP Syndrome:**
- Hemolysis
- Elevated Liver enzymes
- Low Platelets
- 0.5-0.9% of pregnancies
- 10-20% of severe preeclampsia
- High morbidity/mortality

**Other:**
- Stroke
- Renal failure
- Liver rupture
- DIC
- Pulmonary edema
- Death`,
      keyTerms: [
        { term: 'sFlt-1', definition: 'Soluble fms-like tyrosine kinase-1; anti-angiogenic factor elevated in preeclampsia' },
        { term: 'PlGF', definition: 'Placental growth factor; decreased in preeclampsia' },
        { term: 'superimposed preeclampsia', definition: 'Preeclampsia developing in woman with chronic hypertension' },
        { term: 'abruption', definition: 'Premature separation of placenta from uterus' },
        { term: 'endothelial dysfunction', definition: 'Impairment of blood vessel lining function' },
      ],
      clinicalNotes: 'The sFlt-1/PlGF ratio is an emerging biomarker for preeclampsia prediction and diagnosis. A ratio >38 is suggestive of preeclampsia, and >85 is highly predictive. It can help distinguish preeclampsia from other causes of hypertension in pregnancy.',
    },
    3: {
      level: 3,
      summary: 'Preeclampsia management involves blood pressure control, seizure prophylaxis with magnesium sulfate, and timing of delivery based on severity and gestational age. Severe features require immediate delivery regardless of gestational age. Postpartum monitoring is essential as complications can occur after delivery.',
      explanation: `## Management of Preeclampsia

### Initial Evaluation

**History:**
- Symptom assessment
- Risk factors
- Prior pregnancy history
- Current medications

**Physical Exam:**
- Blood pressure (both arms)
- Weight gain
- Edema assessment
- Deep tendon reflexes
- Funduscopic exam
- Abdominal exam
- Fetal assessment

**Laboratory Testing:**
- CBC with platelets
- Comprehensive metabolic panel
- Liver enzymes (AST, ALT, LDH)
- Creatinine
- Urine protein (24-hour or protein/cr ratio)
- Coagulation studies (if severe)
- Type and screen

**Fetal Assessment:**
- Non-stress test
- Biophysical profile
- Ultrasound for growth
- Umbilical artery Doppler
- Amniotic fluid assessment

### Management by Severity

**Mild/Without Severe Features:**

Expectant management if <37 weeks:
- Twice-weekly BP checks
- Twice-weekly labs
- Fetal testing 1-2x weekly
- Daily kick counts
- Rest (not strict bed rest)
- Antihypertensives if needed
- Delivery at 37 weeks

**Severe Features:**

Hospitalization required:
- IV magnesium sulfate for seizure prophylaxis
- Blood pressure management
- Continuous fetal monitoring
- Delivery as soon as stable

Delivery timing:
- >=34 weeks: Deliver promptly
- <34 weeks: Consider steroids, then deliver
- Only delay if maternal condition stable

### Blood Pressure Management

**Treatment Thresholds:**
- >=140/90 with symptoms
- >=160/110 regardless of symptoms

**First-Line Agents:**

Labetalol:
- Alpha- and beta-blocker
- 200-2400 mg/day divided
- Oral or IV

Nifedipine:
- Calcium channel blocker
- 30-120 mg/day (extended release)
- Avoid sublingual (precipitous drop)

Hydralazine:
- Direct vasodilator
- 50-300 mg/day
- IV for acute control

**Contraindicated:**
- ACE inhibitors
- ARBs
- Direct renin inhibitors

**Goal BP:**
- 120-160/80-100
- Avoid hypotension
- Maintain uteroplacental perfusion

### Magnesium Sulfate

**Indications:**
- Severe preeclampsia (prophylaxis)
- Eclampsia (treatment)

**Regimen:**
- Loading: 4-6 g IV over 15-20 min
- Maintenance: 1-2 g/hour continuous
- Continue 24 hours postpartum

**Monitoring:**
- Deep tendon reflexes
- Respiratory rate
- Urine output
- Magnesium levels (if renal dysfunction)

**Toxicity Signs:**
- Loss of reflexes (first sign)
- Respiratory depression
- Cardiac arrest

**Antidote:**
- Calcium gluconate 1g IV

### Delivery Management

**Vaginal vs Cesarean:**
- Vaginal preferred if possible
- Expedited if severe
- Cesarean for obstetric indications

**Anesthesia:**
- Epidural acceptable
- Avoid hypotension
- General if eclamptic seizure

**Third Stage:**
- Active management
- Risk of hemorrhage
- Risk of abruption

**Postpartum:**
- Continue magnesium 24 hours
- Monitor BP closely
- Risk of eclampsia 48+ hours postpartum

### HELLP Syndrome Management

**Diagnosis:**
- Hemolysis (schistocytes, high LDH, low haptoglobin)
- AST/ALT >2x upper limit normal
- Platelets <100,000

**Classification:**
- Class 1: Platelets <50,000
- Class 2: Platelets 50,000-100,000
- Class 3: Platelets 100,000-150,000

**Management:**
- Delivery definitive treatment
- Platelet transfusion if <20,000 or bleeding
- Correct coagulopathy
- Manage complications
- Steroids for platelet recovery (postpartum)

### Eclampsia Management

**Acute Seizure:**
1. Call for help
2. Left lateral position
3. Airway protection
4. Magnesium sulfate 4-6 g IV load
5. If recurrent: 2g IV bolus

**After Seizure:**
- Fetal heart rate assessment (bradycardia expected)
- Maternal vital signs
- Evaluate for injury
- Rule out other causes

**Delivery:**
- Once stabilized
- Usually can wait for induction
- Control BP before delivery

### Postpartum Management

**Blood Pressure:**
- May worsen initially
- Monitor closely 72 hours
- May persist weeks to months
- Restart antihypertensives

**Medications:**
- ACE inhibitors safe postpartum
- Compatible with breastfeeding

**Follow-up:**
- 1 week postpartum
- 6 weeks postpartum
- Transition to primary care
- Cardiovascular risk counseling

**Warning Signs:**
- Headache
- Vision changes
- Shortness of breath
- Epigastric pain
- Nausea/vomiting

### Recurrence Risk

**History of Preeclampsia:**
- 7x increased risk
- Earlier onset
- More severe

**Prevention in Future:**
- Low-dose aspirin
- Start preconception or early pregnancy
- Close monitoring
- BP optimization`,
      keyTerms: [
        { term: 'expectant management', definition: 'Close monitoring while delaying delivery to improve fetal maturity' },
        { term: 'corticosteroids', definition: 'Medications given to accelerate fetal lung maturity before preterm delivery' },
        { term: 'antepartum', definition: 'Before delivery' },
        { term: 'postpartum', definition: 'After delivery' },
        { term: 'schistocytes', definition: 'Fragmented red blood cells seen in hemolysis' },
      ],
      clinicalNotes: 'Eclampsia can occur up to 4 weeks postpartum. Any seizure in the postpartum period should raise suspicion for eclampsia, and patients should be evaluated for preeclampsia even if blood pressure was normal during pregnancy.',
    },
    4: {
      level: 4,
      summary: 'Long-term consequences of preeclampsia include increased cardiovascular risk requiring lifelong surveillance. Atypical presentations including early-onset, postpartum, and eclampsia without preceding hypertension require clinical vigilance.',
      explanation: `## Advanced Topics

### Long-Term Cardiovascular Risk

**Evidence:**
- 3-4x increased cardiovascular risk
- 2x increased stroke risk
- 2x increased coronary disease risk
- Persists decades after pregnancy

**Mechanism:**
- Unmasks underlying vascular vulnerability
- Endothelial dysfunction persists
- Metabolic syndrome association

**Management:**
- Cardiovascular risk assessment
- Lifestyle modifications
- Blood pressure control
- Lipid management
- Aspirin for primary prevention
- Annual well-woman exams

### Early-Onset Preeclampsia (<34 weeks)

**Characteristics:**
- More severe
- More placental
- Higher recurrence
- Stronger genetic component

**Evaluation:**
- Screen for underlying thrombophilia
- Autoimmune disease workup
- Renal evaluation
- Consider genetics

**Management:**
- More aggressive
- Earlier delivery
- Corticosteroids for fetal maturity
- Higher recurrence risk

### Atypical Presentations

**Postpartum Preeclampsia:**
- Occurs after delivery
- Usually within 48 hours to 1 week
- Can occur up to 6 weeks
- May be first presentation
- Readmission common

**Eclampsia Without Hypertension:**
- Rare
- Seizure as first sign
- Blood pressure rises after
- Diagnosis of exclusion

**Preeclampsia with Normal Urine Protein:**
- HELLP without proteinuria
- Other severe features present
- Do not delay treatment

**Superimposed on Chronic Hypertension:**
- Difficult to diagnose
- Baseline proteinuria complicates
- Look for doubling protein
- Worsening blood pressure
- New symptoms

### Differential Diagnosis

**Acute Fatty Liver of Pregnancy:**
- Late pregnancy
- Liver dysfunction
- Encephalopathy
- Hypoglycemia
- Coagulopathy
- No hemolysis

**Thrombotic Thrombocytopenic Purpura (TTP):**
- Neurologic changes
- Fever
- Renal involvement
- ADAMTS13 deficiency
- No HELLP

**Hemolytic Uremic Syndrome (HUS):**
- Postpartum
- Shiga toxin or complement
- Renal predominant
- Thrombocytopenia

**Systemic Lupus Erythematosus Flare:**
- Autoimmune
- Prior history
- Other organ involvement
- Serologies positive

**Acute Renal Failure:**
- Multiple causes
- No preeclampsia features
- Requires workup

### Fetal Considerations

**Intrauterine Growth Restriction:**
- 25-30% of preeclamptic pregnancies
- Umbilical artery Doppler
- Serial growth ultrasounds
- Delivery timing

**Oligohydramnios:**
- Marker of placental dysfunction
- AFI or MVP assessment
- Delivery consideration

**Non-Reassuring Fetal Status:**
- Reduced variability
- Late decelerations
- Emergency delivery

**Stillbirth Risk:**
- Increased 2-3 fold
- IUGR and abruption
- Fetal monitoring critical

### Anesthesia Considerations

**Epidural:**
- Preferred for labor
- Avoids BP fluctuations
- Reduces catecholamines
- Contraindicated if coagulopathy

**General Anesthesia:**
- Risk of aspiration
- Airway edema possible
- BP management challenging
- If eclamptic seizure

**Contraindications:**
- Thrombocytopenia (epidural)
- Coagulopathy
- Hemodynamic instability

### Quality Metrics

**Process Measures:**
- Aspirin prophylaxis rates
- Blood pressure measurement
- Proteinuria assessment
- Magnesium use for severe
- Corticosteroid administration

**Outcome Measures:**
- Eclampsia rate
- Maternal mortality
- Severe maternal morbidity
- Preterm birth rate
- Perinatal mortality

### Health Disparities

**Higher Rates in:**
- Black women
- Women of lower socioeconomic status
- Underinsured women
- Rural areas

**Contributing Factors:**
- Access to care
- Preconception health
- Comorbidities
- Environmental factors

**Interventions:**
- Prenatal care access
- Community health workers
- Telemedicine
- Cultural competence`,
      keyTerms: [
        { term: 'thrombotic microangiopathy', definition: 'Pathology involving small blood vessel thrombosis; seen in TTP, HUS, HELLP' },
        { term: 'primary prevention', definition: 'Preventing disease before it occurs' },
        { term: 'complement', definition: 'Part of immune system; dysregulation causes some forms of HUS/TTP' },
        { term: 'aspiration', definition: 'Inhaling stomach contents; risk during general anesthesia' },
        { term: 'catecholamines', definition: 'Stress hormones like adrenaline' },
      ],
      clinicalNotes: 'Women with a history of preeclampsia have significantly increased lifetime cardiovascular risk and should undergo cardiovascular risk factor screening and management similar to patients with known coronary artery disease risk equivalents.',
    },
    5: {
      level: 5,
      summary: 'Expert preeclampsia care involves prediction models, novel biomarkers, and potential therapeutics. Research into pathophysiology may lead to targeted treatments beyond delivery. Global implementation of prevention strategies remains a priority.',
      explanation: `## Expert Topics

### Prediction Models

**First Trimester Screening:**
- Maternal factors
- Blood pressure
- Uterine artery Doppler
- Biomarkers (PAPP-A, PlGF)
- Combined algorithms
- 75% detection rate

**Angiogenic Factors:**
- sFlt-1/PlGF ratio
- Predicts preeclampsia
- Predicts adverse outcomes
- Commercially available
- Cost-effectiveness debated

**Machine Learning:**
- Electronic health record data
- Risk stratification
- Early identification
- Implementation research

### Novel Therapeutics

**Currently No Disease-Modifying Therapy:**
- Delivery remains only cure
- Research ongoing

**Potential Approaches:**

Pravastatin:
- Proangiogenic effects
- Pilot studies promising
- Clinical trials ongoing

Metformin:
- Endothelial function
- Pilot studies
- Mechanism unclear

Antithrombotic agents:
- Heparin
- For high-risk/recurrent
- Mixed evidence

### Placental Growth Factor Testing

**Clinical Use:**
- Rule out preeclampsia
- Triage in emergency
- PlGF <100 pg/mL (high suspicion)
- Negative predictive value high

**Triage Tool:**
- PlGF >100: Low risk
- PlGF <100: High risk
- Reduces unnecessary admission
- Cost-effective

### International Perspectives

**Global Burden:**
- 10 million cases/year
- 76,000 maternal deaths
- 500,000 fetal deaths
- Higher in developing countries

**Barriers:**
- Access to prenatal care
- Resource limitations
- Magnesium availability
- Skilled birth attendance

**Interventions:**
- Task-shifting
- Community health workers
- mHealth applications
- Simplified protocols

### Research Frontiers

**Pathophysiology:**
- Exosomes
- MicroRNA
- Immunology
- Genetics
- Metabolomics

**Biomarkers:**
- Early prediction
- Severity stratification
- Novel targets
- Point-of-care tests

**Therapeutics:**
- Targeted anti-angiogenic therapy
- Immunomodulation
- Placental-targeted therapy
- Preventative vaccines

### Survivorship

**Cardiovascular Counseling:**
- Lifestyle modifications
- Risk factor control
- Aspirin prophylaxis
- Regular monitoring

**Future Pregnancies:**
- Preconception counseling
- Low-dose aspirin
- Close monitoring
- Early screening

**Mental Health:**
- Anxiety/depression
- Birth trauma
- Future pregnancy fear
- Support groups

### Education and Awareness

**World Preeclampsia Day:**
- May 22
- Global awareness
- Education campaigns
- Advocacy

**Provider Education:**
- Recognition
- Management protocols
- Simulation training
- Quality improvement

**Patient Education:**
- Warning signs
- Self-monitoring
- When to seek care
- Risk factors`,
      keyTerms: [
        { term: 'PAPP-A', definition: 'Pregnancy-associated plasma protein A; marker used in first trimester screening' },
        { term: 'proangiogenic', definition: 'Promoting growth of new blood vessels' },
        { term: 'point-of-care test', definition: 'Medical diagnostic testing at or near the site of patient care' },
        { term: 'mHealth', definition: 'Mobile health; use of mobile devices for health services' },
        { term: 'exosomes', definition: 'Extracellular vesicles involved in cell communication; contain biomarkers' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. Low-dose aspirin started before 16 weeks reduces preeclampsia risk by 60-70% in high-risk women. All women with prior preeclampsia should receive aspirin in subsequent pregnancies.

2. Magnesium sulfate is the anticonvulsant of choice for eclampsia and for seizure prophylaxis in severe preeclampsia. It reduces seizure risk by 50%.

3. Delivery is the only definitive treatment for preeclampsia. Timing balances maternal risk against fetal maturity, with delivery recommended at 37 weeks for mild and immediate delivery for severe preeclampsia.

4. Women with preeclampsia have 3-4 fold increased lifetime cardiovascular risk. They should undergo cardiovascular risk assessment and management postpartum.

5. HELLP syndrome can occur without hypertension or proteinuria. Any pregnant woman with thrombocytopenia and elevated liver enzymes should be evaluated for HELLP.`,
    },
  },

  media: [
    {
      id: 'preeclampsia-pathophysiology',
      type: 'diagram',
      filename: 'preeclampsia-pathophysiology.svg',
      title: 'Preeclampsia Pathophysiology',
      description: 'Placental and maternal factors in preeclampsia development',
    },
  ],

  citations: [
    {
      id: 'acog-preeclampsia',
      type: 'article',
      title: 'Gestational Hypertension and Preeclampsia: ACOG Practice Bulletin',
      authors: ['ACOG'],
      source: 'Obstetrics & Gynecology',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-gestational-diabetes', targetType: 'condition', relationship: 'related', label: 'Gestational Diabetes' },
    { targetId: 'reproductive-ectopic-pregnancy', targetType: 'condition', relationship: 'related', label: 'Ectopic Pregnancy' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['pathology', 'obstetrics', 'maternal-fetal-medicine'],
    keywords: ['preeclampsia', 'eclampsia', 'HELLP', 'gestational hypertension', 'pregnancy'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default preeclampsiaPathology;
