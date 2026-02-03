import { EducationalContent } from '../../../types';

export const pregnancyComplicationsContent: EducationalContent = {
  id: 'reproductive-pregnancy-complications',
  type: 'condition',
  name: 'Pregnancy Complications',
  alternateNames: ['High-risk pregnancy', 'Obstetric complications', 'Pregnancy-related conditions'],
  levels: {
    1: {
      level: 1,
      summary: 'Pregnancy complications are health problems that can happen during pregnancy. Most pregnancies are healthy, but some need extra care and monitoring.',
      explanation: `While most pregnancies go smoothly, some can have complications that need special attention. Knowing the warning signs helps keep both the pregnant person and baby safe.

**Common Pregnancy Complications:**

**Miscarriage**
- Loss of pregnancy before 20 weeks
- Happens in about 10-20% of known pregnancies
- Often due to chromosomal problems
- Signs: Heavy bleeding, cramping, passing tissue

**Gestational Diabetes**
- High blood sugar that develops during pregnancy
- Usually goes away after birth
- Managed with diet, exercise, and sometimes medication
- Important to control to protect both parent and baby

**Preeclampsia**
- High blood pressure and protein in urine after 20 weeks
- Can be serious if not treated
- Signs: Severe headaches, vision changes, swelling, upper belly pain
- May require early delivery

**Placenta Problems**
- Placenta previa: Placenta covers the cervix
- Placental abruption: Placenta separates from the uterus early
- Both can cause bleeding and may need special care

**Preterm Labor**
- Labor that starts before 37 weeks
- Babies born early may need extra medical care
- Signs: Regular contractions, pressure, backache, fluid leaking

**Warning Signs to Call Your Doctor Immediately:**
- Heavy bleeding
- Severe headache or vision changes
- Fever over 100.4°F (38°C)
- Severe belly pain
- Baby moving less than usual
- Fluid leaking from vagina
- Painful urination

**Prevention Tips:**
- Go to all prenatal appointments
- Take prenatal vitamins
- Eat healthy and stay active (as approved by your doctor)
- Avoid alcohol, tobacco, and drugs
- Tell your doctor about all medications`,
      keyTerms: [
        { term: 'Miscarriage', definition: 'Loss of a pregnancy before 20 weeks' },
        { term: 'Preeclampsia', definition: 'A serious condition with high blood pressure during pregnancy' },
        { term: 'Gestational diabetes', definition: 'Diabetes that develops during pregnancy' },
        { term: 'Preterm', definition: 'Before 37 weeks of pregnancy; early' },
        { term: 'Placenta', definition: 'The organ that provides oxygen and nutrients to the baby during pregnancy' },
      ],
      analogies: [
        'The placenta is like a filter and delivery service - it brings good things to the baby and filters out harmful things',
        'Prenatal care is like regular car maintenance - it helps catch problems early',
      ],
      patientCounselingPoints: [
        'Most pregnancies are healthy',
        'Regular prenatal care helps catch problems early',
        'Know the warning signs and when to call your doctor',
        'Many complications can be managed successfully with proper care',
      ],
    },
    2: {
      level: 2,
      summary: 'Pregnancy complications include hypertensive disorders, gestational diabetes, placental abnormalities, preterm labor, and fetal growth issues, each requiring specific monitoring and management strategies.',
      explanation: `Pregnancy complications can affect the pregnant person, the fetus, or both. Early recognition and management improve outcomes.

**Hypertensive Disorders of Pregnancy:**

**Gestational Hypertension**
- Blood pressure ≥140/90 after 20 weeks
- No proteinuria or other organ damage
- Resolves after delivery

**Preeclampsia**
- Hypertension PLUS proteinuria OR end-organ damage
- Risk factors: First pregnancy, obesity, multiple gestation, prior preeclampsia
- Complications: Seizures (eclampsia), HELLP syndrome, stroke
- Treatment: Delivery is the cure; magnesium sulfate for seizure prevention

**Chronic Hypertension**
- High blood pressure before pregnancy or before 20 weeks
- Increased risk of superimposed preeclampsia

**Diabetes in Pregnancy:**

**Gestational Diabetes**
- Glucose intolerance first recognized in pregnancy
- Screening at 24-28 weeks (glucose tolerance test)
- Risks: Large baby (macrosomia), birth injury, neonatal hypoglycemia
- Management: Diet, exercise, glucose monitoring, insulin if needed

**Pregestational Diabetes**
- Type 1 or Type 2 before pregnancy
- Needs tight glucose control before and during pregnancy
- Risk of birth defects if poorly controlled early

**Placental Complications:**

**Placenta Previa**
- Placenta covers cervical opening
- Presents with painless vaginal bleeding
- Requires cesarean delivery if complete

**Placental Abruption**
- Premature separation of placenta from uterus
- Presents with painful bleeding, contractions, fetal distress
- Can be life-threatening; may need emergency delivery

**Preterm Labor and Birth:**
- Labor before 37 weeks
- Leading cause of newborn complications
- Management: Tocolytics, corticosteroids, magnesium for neuroprotection
- May be able to delay delivery to improve outcomes

**Fetal Growth Issues:**

**Intrauterine Growth Restriction (IUGR)**
- Baby smaller than expected
- Can be due to placental problems, infections, or genetic issues
- Requires close monitoring

**Macrosomia**
- Baby larger than normal (>4000-4500g)
- Associated with diabetes
- Risk of birth injury`,
      keyTerms: [
        { term: 'Gestational hypertension', definition: 'New high blood pressure after 20 weeks of pregnancy without protein in urine' },
        { term: 'HELLP syndrome', definition: 'Severe complication with hemolysis, elevated liver enzymes, and low platelets' },
        { term: 'Macrosomia', definition: 'Baby larger than normal at birth, usually over 4000-4500 grams (8.8-9.9 pounds)' },
        { term: 'Tocolytics', definition: 'Medications used to slow or stop preterm labor contractions' },
        { term: 'IUGR', definition: 'Intrauterine growth restriction; baby not growing as expected' },
      ],
      examples: [
        'A woman at 32 weeks with headache, blood pressure 160/100, and protein in urine has preeclampsia and needs close monitoring and possible delivery',
        'A woman with gestational diabetes whose blood sugars are not controlled with diet may need insulin to protect herself and baby',
      ],
    },
    3: {
      level: 3,
      summary: 'Obstetric complications involve complex pathophysiology including abnormal placentation, vascular dysfunction, metabolic derangements, and inflammatory processes, with management guided by gestational age and severity.',
      explanation: `**Hypertensive Disorders - Detailed Classification:**

**Chronic Hypertension**
- BP ≥140/90 before 20 weeks or preexisting
- Increased risk of superimposed preeclampsia, abruption, IUGR

**Gestational Hypertension**
- New hypertension ≥20 weeks without proteinuria
- Up to 50% progress to preeclampsia

**Preeclampsia**

*Diagnostic Criteria (ACOG 2020)*
- BP ≥140/90 on two occasions ≥4 hours apart after 20 weeks PLUS:
  - Proteinuria (≥300 mg/24h or protein/creatinine ratio ≥0.3), OR
  - Thrombocytopenia (<100,000)
  - Renal insufficiency (Cr >1.1 or doubled)
  - Impaired liver function (elevated transaminases)
  - Pulmonary edema
  - Cerebral or visual symptoms

*Preeclampsia with Severe Features*
- BP ≥160/110 on two occasions
- Thrombocytopenia
- Liver transaminases ≥2x normal
- Severe persistent RUQ or epigastric pain
- Renal insufficiency
- Pulmonary edema
- New-onset headache or visual disturbances

**HELLP Syndrome**
- Hemolysis (schistocytes, elevated LDH, low haptoglobin)
- Elevated Liver enzymes
- Low Platelets
- May occur without severe hypertension
- High maternal mortality risk

**Eclampsia**
- Seizures in preeclampsia patient
- Can occur antepartum, intrapartum, or postpartum
- Treatment: Magnesium sulfate (MgSO4)

**Management Principles:**

*Preeclampsia without Severe Features*
- Delivery at 37 weeks
- Twice-weekly BP and labs
- Daily fetal kick counts
- Weekly NST/AFI

*Preeclampsia with Severe Features*
- <34 weeks: Consider expectant management if stable
- ≥34 weeks: Delivery after stabilization
- Corticosteroids if <34 weeks
- Magnesium sulfate for seizure prophylaxis
- Antihypertensives: Labetalol, hydralazine, nifedipine

**Gestational Diabetes:**

*Pathophysiology*
- Pregnancy is diabetogenic (hPL, cortisol, progesterone)
- Insulin resistance increases through pregnancy
- Beta cell compensation may be inadequate

*Screening*
- One-step: 75g OGTT at 24-28 weeks (WHO criteria)
- Two-step: 50g GCT, then 100g OGTT if positive

*Management*
- MNT (medical nutrition therapy) first-line
- SMBG: Fasting <95, 1-hour postprandial <140, 2-hour <120
- Insulin if diet fails; metformin/glyburide considered
- Increased fetal surveillance in third trimester

**Preterm Labor:**

*Definition*: Regular contractions with cervical change before 37 weeks

*Risk Factors*
- Prior preterm birth (strongest predictor)
- Short cervix, uterine anomalies
- Multiple gestation, polyhydramnios
- Infection (chorioamnionitis, UTI)

*Management*
- Tocolysis: Nifedipine, indomethacin (<32 weeks), magnesium
- Antenatal corticosteroids: 23-34 weeks (betamethasone/dexamethasone)
- Magnesium for neuroprotection: <32 weeks
- GBS prophylaxis if indicated`,
      keyTerms: [
        { term: 'Superimposed preeclampsia', definition: 'Development of preeclampsia in a patient with chronic hypertension' },
        { term: 'hPL', definition: 'Human placental lactogen; hormone contributing to insulin resistance in pregnancy' },
        { term: 'Antenatal corticosteroids', definition: 'Steroids given to promote fetal lung maturity before preterm delivery' },
        { term: 'Tocolysis', definition: 'Pharmacologic inhibition of uterine contractions to delay preterm delivery' },
        { term: 'NST', definition: 'Non-stress test; fetal heart rate monitoring to assess fetal well-being' },
        { term: 'Chorioamnionitis', definition: 'Infection of the fetal membranes and amniotic fluid; risk factor for preterm delivery' },
      ],
      examples: [
        'A 30-week pregnant woman with BP 165/110, headache, and platelets of 80,000 has preeclampsia with severe features requiring stabilization and likely delivery',
        'Betamethasone given to a woman in preterm labor at 28 weeks reduces risk of respiratory distress syndrome, IVH, and death in the newborn',
      ],
    },
    4: {
      level: 4,
      summary: 'The pathophysiology of pregnancy complications involves complex interactions between abnormal placentation, immune maladaptation, angiogenic imbalance, and metabolic dysfunction, with emerging biomarkers improving prediction and management.',
      explanation: `**Preeclampsia Pathophysiology:**

**Two-Stage Model**
1. *Stage 1*: Abnormal placentation
   - Defective spiral artery remodeling
   - Inadequate trophoblast invasion
   - Preserved musculoelastic wall → high resistance
   - Results in placental hypoxia/ischemia

2. *Stage 2*: Maternal syndrome
   - Release of anti-angiogenic factors from stressed placenta
   - Systemic endothelial dysfunction
   - Multiorgan involvement

**Angiogenic Imbalance**
- sFlt-1 (soluble fms-like tyrosine kinase-1): Anti-angiogenic
  - Binds and neutralizes VEGF and PlGF
  - Elevated in preeclampsia
- PlGF (placental growth factor): Pro-angiogenic
  - Decreased in preeclampsia
- sFlt-1/PlGF ratio: Predictive biomarker
  - <38: Low risk of preeclampsia within 1 week
  - >85: High risk

**Immunologic Factors**
- NK cells and regulatory T cells critical for implantation
- HLA-C/KIR incompatibility theories
- First pregnancy risk: Lack of prior antigen exposure
- Risk reduction with same partner pregnancy interval

**Genetic and Environmental Factors**
- FLT1, VEGF polymorphisms
- Family history (maternal and paternal)
- Altitude, stress, nutritional factors

**HELLP Syndrome Mechanism**
- Microangiopathic hemolytic anemia
- Hepatic sinusoidal obstruction
- Platelet activation and consumption
- Overlap with TTP/HUS in severe cases

**Gestational Diabetes Pathophysiology:**

**Normal Pregnancy Adaptations**
- Progressive insulin resistance (50-60% reduction in sensitivity)
- Mediated by: hPL, TNF-α, cortisol, progesterone
- Compensatory β-cell hyperplasia and increased insulin secretion

**GDM Pathogenesis**
- Inadequate β-cell compensation
- Pre-existing β-cell dysfunction unmasked
- Genetic susceptibility (TCF7L2, KCNJ11, and other T2DM genes)
- Adipokine dysregulation

**Fetal Effects**
- Glucose crosses placenta; insulin does not
- Fetal hyperglycemia → fetal hyperinsulinemia
- Macrosomia: Insulin is growth factor
- Neonatal hypoglycemia: Persistent hyperinsulinemia after delivery
- Long-term: Offspring obesity and diabetes risk

**Preterm Birth Pathophysiology:**

**Common Pathway of Parturition**
- Cervical ripening (collagen breakdown)
- Membrane activation (prostaglandins, MMPs)
- Uterine contractility (oxytocin receptors, gap junctions)

**Pathways to Preterm Labor**
1. *Infection/Inflammation*
   - Ascending cervical infection
   - Cytokines (IL-1, IL-6, TNF-α)
   - Prostaglandin synthesis activation

2. *Decidual Hemorrhage*
   - Abruption, subchorionic hematoma
   - Thrombin activates parturition

3. *Uterine Overdistension*
   - Multiple gestation, polyhydramnios
   - Mechanical stretch activates contraction genes

4. *Cervical Insufficiency*
   - Structural weakness or prior trauma
   - Painless dilation

5. *Stress/HPA Axis*
   - Maternal or fetal stress
   - CRH elevation accelerates parturition`,
      keyTerms: [
        { term: 'sFlt-1', definition: 'Soluble fms-like tyrosine kinase-1; anti-angiogenic protein elevated in preeclampsia that binds VEGF and PlGF' },
        { term: 'PlGF', definition: 'Placental growth factor; pro-angiogenic protein decreased in preeclampsia; used in screening' },
        { term: 'Spiral artery remodeling', definition: 'Normal process where trophoblast invades and remodels uterine arteries; defective in preeclampsia' },
        { term: 'Fetal programming', definition: 'Concept that intrauterine environment affects long-term offspring health outcomes' },
        { term: 'CRH', definition: 'Corticotropin-releasing hormone; placental CRH elevation associated with preterm birth' },
      ],
      clinicalNotes: 'The sFlt-1/PlGF ratio is increasingly used in clinical practice to rule out preeclampsia in women with suspected disease. A ratio <38 has >99% negative predictive value for preeclampsia within one week. This allows safer outpatient management of women with hypertension who are low risk.',
    },
    5: {
      level: 5,
      summary: 'Contemporary management of pregnancy complications integrates risk stratification tools, biomarker-guided decision-making, evidence-based interventions, and multidisciplinary care to optimize maternal and fetal outcomes.',
      explanation: `**Risk Assessment and Prevention:**

**Preeclampsia Risk Stratification**
*High-Risk Factors (Any One)*
- Prior preeclampsia
- Multifetal gestation
- Chronic hypertension
- Type 1 or 2 diabetes
- Renal disease
- Autoimmune disease (SLE, antiphospholipid syndrome)

*Moderate-Risk Factors (≥2)*
- Nulliparity
- BMI >30
- Family history of preeclampsia
- Age ≥35
- Prior adverse pregnancy outcome

**Aspirin Prophylaxis**
- Low-dose aspirin (81-162 mg daily) at 12-28 weeks
- Start by 16 weeks for maximum benefit
- 10-20% risk reduction
- Indicated for any high-risk or ≥2 moderate-risk factors

**First Trimester Screening**
- Combined: MAP, uterine artery pulsatility index, PAPP-A, PlGF
- Detection rate 75-90% for early preeclampsia
- Allows earlier aspirin initiation

**Management of Severe Hypertensive Disorders:**

**Acute Blood Pressure Control**
- Goal: <160/110 to prevent stroke
- IV labetalol: 20mg, then 40mg, then 80mg q10min
- IV hydralazine: 5-10mg q20min
- PO nifedipine: 10-20mg q20min
- Avoid precipitous drops (fetal compromise)

**Magnesium Sulfate Protocol**
- Loading: 4-6g IV over 20-30 min
- Maintenance: 1-2g/hour
- Monitor: Reflexes, respiratory rate, urine output
- Therapeutic level: 4-7 mEq/L
- Antidote: Calcium gluconate

**Timing of Delivery in Hypertensive Disorders**
| Condition | Gestational Age | Management |
|-----------|-----------------|------------|
| Chronic HTN | 37-39 weeks | Consider 37 if on meds |
| Gestational HTN | 37 weeks | Delivery |
| Preeclampsia no severe | 37 weeks | Delivery |
| Preeclampsia severe | ≥34 weeks | Deliver after stabilization |
| Preeclampsia severe | <34 weeks | Expectant if stable |
| HELLP | Any | Deliver after stabilization |

**Gestational Diabetes Management:**

**Glucose Targets**
- Fasting: <95 mg/dL (5.3 mmol/L)
- 1-hour postprandial: <140 mg/dL (7.8 mmol/L)
- 2-hour postprandial: <120 mg/dL (6.7 mmol/L)

**Pharmacotherapy**
- Insulin: Gold standard; does not cross placenta
- Metformin: Crosses placenta; MODY trial data reassuring
- Glyburide: Falls out of favor due to higher macrosomia and hypoglycemia

**Fetal Surveillance**
- Weekly NST/AFI starting 32-34 weeks (earlier if insulin-requiring)
- Growth ultrasounds every 4 weeks
- Delivery timing: 39-40 weeks if diet-controlled; 39 weeks if medication

**Preterm Birth Management:**

**Antenatal Corticosteroids**
- Betamethasone 12mg IM x 2 doses 24 hours apart
- Dexamethasone 6mg IM x 4 doses 12 hours apart
- Given at 23-34 weeks
- Late preterm (34-36 6/7): Consider if no prior steroids

**Tocolysis Options**
| Agent | Mechanism | Contraindications |
|-------|-----------|-------------------|
| Nifedipine | Ca-channel blocker | Hypotension |
| Indomethacin | COX inhibitor | >32 weeks (oligohydramnios) |
| Terbutaline | β-agonist | Cardiac disease |
| Magnesium | Unclear | Myasthenia gravis |

**Magnesium for Neuroprotection**
- 4g loading, 1g/hour maintenance
- Given at <32 weeks if delivery imminent
- Reduces cerebral palsy risk by 30-40%

**Progesterone for Prevention**
- 17-OHPC IM weekly: Prior spontaneous PTB
- Vaginal progesterone: Short cervix (<25mm at 16-24 weeks)

**Cervical Cerclage**
- History-indicated: Prior cervical insufficiency
- Ultrasound-indicated: Short cervix + prior PTB
- Rescue: Dilated cervix, bulging membranes

**Postpartum Considerations:**

**Preeclampsia**
- BP often worsens days 3-6 postpartum
- Continue BP monitoring
- May need antihypertensives for weeks
- Counsel on future cardiovascular risk

**GDM**
- 75g OGTT at 4-12 weeks postpartum
- 50% develop T2DM within 10-20 years
- Lifestyle intervention and annual screening`,
      keyTerms: [
        { term: 'ACOG', definition: 'American College of Obstetricians and Gynecologists; primary guideline organization for obstetric care' },
        { term: '17-OHPC', definition: '17-alpha hydroxyprogesterone caproate; intramuscular progesterone for preterm birth prevention in women with prior PTB' },
        { term: 'Rescue cerclage', definition: 'Emergency cervical cerclage placed when cervix is already dilated with bulging membranes' },
        { term: 'MAP', definition: 'Mean arterial pressure; used in first-trimester preeclampsia screening algorithms' },
        { term: 'Uterine artery pulsatility index', definition: 'Doppler measurement of uterine artery resistance; elevated in pregnancies at risk for preeclampsia' },
      ],
      clinicalNotes: 'The ASPRE trial demonstrated that aspirin 150mg at bedtime, initiated before 16 weeks in high-risk women identified by first-trimester screening, reduced preterm preeclampsia by 62%. Current ACOG guidance recommends low-dose aspirin (81mg, though some use 162mg) for all women with high-risk factors or ≥2 moderate-risk factors, started ideally at 12-16 weeks.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'article',
      title: 'ACOG Practice Bulletin: Gestational Hypertension and Preeclampsia',
      source: 'Obstetrics & Gynecology',
      authors: ['ACOG'],
      url: 'https://doi.org/10.1097/AOG.0000000000003891',
    },
    {
      id: 'ref-2',
      type: 'textbook',
      title: 'Williams Obstetrics',
      authors: ['Cunningham, F.G.', 'Leveno, K.J.', 'Bloom, S.L.'],
      source: 'McGraw-Hill',
      license: 'Proprietary',
    },
  ],
  crossReferences: [
    { targetId: 'reproductive-preeclampsia', targetType: 'condition', relationship: 'child', label: 'Preeclampsia' },
    { targetId: 'reproductive-ectopic-pregnancy', targetType: 'condition', relationship: 'sibling', label: 'Ectopic Pregnancy' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['pathology', 'obstetrics', 'pregnancy'],
    keywords: ['preeclampsia', 'gestational diabetes', 'preterm labor', 'hypertension', 'pregnancy complications'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obstetrics-gynecology'],
    },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
