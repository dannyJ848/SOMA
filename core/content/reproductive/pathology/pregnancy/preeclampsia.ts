import { EducationalContent } from '../../../types';

export const preeclampsiaContent: EducationalContent = {
  id: 'reproductive-preeclampsia',
  type: 'condition',
  name: 'Preeclampsia',
  alternateNames: ['Toxemia', 'Pregnancy-induced hypertension', 'Pre-eclampsia', 'Gestational proteinuric hypertension'],
  levels: {
    1: {
      level: 1,
      summary: 'Preeclampsia is a serious pregnancy condition with high blood pressure that can affect many organs. It usually starts after 20 weeks of pregnancy.',
      explanation: `Preeclampsia is a condition that only happens during pregnancy or shortly after birth. It causes high blood pressure and can damage organs like the kidneys and liver.

**What Happens in Preeclampsia:**
- Blood pressure goes up (hypertension)
- Protein leaks into the urine (a sign the kidneys are stressed)
- Swelling, especially in hands and face
- The placenta may not work as well

**Warning Signs - Call Your Doctor Right Away:**
- Severe headaches that won't go away
- Vision problems (blurry vision, seeing spots)
- Pain in the upper right belly
- Sudden swelling of face or hands
- Trouble breathing
- Nausea or vomiting in the second half of pregnancy

**Who Gets Preeclampsia?**
- It can happen to anyone, but is more common if you:
  - Are having your first baby
  - Had preeclampsia before
  - Have high blood pressure, diabetes, or kidney disease
  - Are carrying twins or more
  - Are over 35 or under 20
  - Have obesity

**Why Is It Dangerous?**
- Without treatment, can lead to seizures (eclampsia)
- Can damage kidneys, liver, and brain
- Can affect the baby's growth
- Can cause the placenta to separate early

**Treatment:**
- The only cure is delivering the baby
- Doctor will balance baby's development with mother's safety
- Medicine to control blood pressure
- Magnesium sulfate to prevent seizures
- Close monitoring

**Good News:**
- Most people with preeclampsia have healthy babies
- With proper care, serious complications can usually be prevented`,
      keyTerms: [
        { term: 'Preeclampsia', definition: 'A pregnancy condition with high blood pressure and signs of organ damage' },
        { term: 'Blood pressure', definition: 'The force of blood pushing against blood vessel walls' },
        { term: 'Eclampsia', definition: 'Seizures in a pregnant person with preeclampsia; very serious' },
        { term: 'Placenta', definition: 'The organ that provides nutrients and oxygen to the baby during pregnancy' },
      ],
      analogies: [
        'Blood pressure is like water pressure in a hose - too high and it can damage the pipes (blood vessels)',
        'The placenta is like a delivery service - if it is not working well, the baby does not get everything it needs',
      ],
      patientCounselingPoints: [
        'Go to all your prenatal appointments - preeclampsia can be detected early',
        'Know the warning signs and seek help immediately if they occur',
        'Take low-dose aspirin if your doctor recommends it for prevention',
        'Preeclampsia is not your fault - it cannot be completely prevented',
      ],
    },
    2: {
      level: 2,
      summary: 'Preeclampsia is a multisystem disorder of pregnancy characterized by new-onset hypertension after 20 weeks with proteinuria or end-organ dysfunction, requiring careful monitoring and timely delivery.',
      explanation: `Preeclampsia is a leading cause of maternal and fetal morbidity and mortality worldwide, complicating 2-8% of pregnancies.

**Diagnostic Criteria (ACOG):**

**Hypertension PLUS:**
- Blood pressure ≥140/90 mmHg on two occasions 4 hours apart after 20 weeks
- OR BP ≥160/110 (can confirm within minutes)

**PLUS one of the following:**
- Proteinuria (≥300 mg/24h OR protein/creatinine ≥0.3 OR dipstick 2+)
- Thrombocytopenia (platelets <100,000)
- Renal insufficiency (creatinine >1.1 mg/dL or doubled)
- Impaired liver function (transaminases ≥2x normal)
- Pulmonary edema
- New-onset headache or visual symptoms

**Classification:**

**Preeclampsia WITHOUT Severe Features**
- Meets criteria above without severe features
- Manage expectantly with close monitoring
- Deliver at 37 weeks

**Preeclampsia WITH Severe Features**
- BP ≥160/110 on two occasions
- Platelets <100,000
- Liver enzymes ≥2x normal with RUQ/epigastric pain
- Creatinine >1.1 or doubled
- Pulmonary edema
- New-onset cerebral or visual disturbances

**HELLP Syndrome:**
- Hemolysis (abnormal smear, LDH elevated, bilirubin elevated)
- Elevated Liver enzymes
- Low Platelets
- Can occur with minimal hypertension
- High maternal morbidity and mortality

**Eclampsia:**
- Seizures in preeclamptic patient
- Can occur antepartum, intrapartum, or postpartum (up to 6 weeks)
- Treat with magnesium sulfate

**Risk Factors:**
- High risk: Prior preeclampsia, multifetal pregnancy, chronic HTN, diabetes, renal disease, autoimmune disease
- Moderate risk: First pregnancy, age >35, BMI >30, family history, IVF pregnancy

**Prevention:**
- Low-dose aspirin (81 mg/day) starting at 12-16 weeks
- For women with high-risk factors or ≥2 moderate-risk factors
- Reduces preeclampsia risk by ~10-20%

**Management Principles:**
- Delivery is the only cure
- Balance maternal risk vs. fetal prematurity
- Antihypertensives for severe hypertension
- Magnesium sulfate for seizure prophylaxis
- Corticosteroids for fetal lung maturity if <34 weeks`,
      keyTerms: [
        { term: 'HELLP syndrome', definition: 'Severe complication of preeclampsia with Hemolysis, Elevated Liver enzymes, and Low Platelets' },
        { term: 'Eclampsia', definition: 'New-onset seizures in a patient with preeclampsia' },
        { term: 'Proteinuria', definition: 'Protein in the urine; sign of kidney involvement in preeclampsia' },
        { term: 'Magnesium sulfate', definition: 'Medication used to prevent seizures in preeclampsia/eclampsia' },
        { term: 'Severe features', definition: 'Signs of significant organ damage or dangerously high blood pressure in preeclampsia' },
      ],
      examples: [
        'A 28-week pregnant woman with BP 165/105, headache, and elevated liver enzymes has preeclampsia with severe features and needs urgent evaluation for delivery',
        'A woman with chronic hypertension who develops new proteinuria at 32 weeks has superimposed preeclampsia',
      ],
    },
    3: {
      level: 3,
      summary: 'Preeclampsia results from abnormal placentation leading to systemic endothelial dysfunction, characterized by an imbalance of angiogenic factors, with clinical manifestations determined by target organ involvement.',
      explanation: `**Pathophysiology:**

**Abnormal Placentation (Stage 1)**
- Normal: Trophoblast invades spiral arteries, replacing smooth muscle
- Preeclampsia: Shallow trophoblast invasion
- Spiral arteries retain muscular walls → high resistance
- Placental ischemia/hypoxia

**Maternal Syndrome (Stage 2)**
- Oxidatively stressed placenta releases factors into maternal circulation
- Systemic endothelial dysfunction
- Vasoconstriction, platelet activation, reduced organ perfusion

**Angiogenic Imbalance:**

| Factor | Normal Pregnancy | Preeclampsia |
|--------|------------------|--------------|
| sFlt-1 | Low | Elevated (anti-angiogenic) |
| PlGF | Rising | Decreased (pro-angiogenic) |
| sEng | Low | Elevated (anti-angiogenic) |

- sFlt-1/PlGF ratio: Predictive and diagnostic utility
- Ratio <38: Low short-term risk of preeclampsia
- Ratio >85: High risk

**Target Organ Effects:**

**Renal**
- Glomerular endotheliosis (pathognomonic)
- Decreased GFR, proteinuria
- Uric acid elevation (impaired excretion)

**Hepatic**
- Periportal hemorrhagic necrosis
- Elevated transaminases
- Subcapsular hematoma (rare, life-threatening)
- Hepatic rupture (rare)

**Hematologic**
- Microangiopathic hemolytic anemia
- Thrombocytopenia (consumption)
- DIC in severe cases

**Neurologic**
- Cerebral edema
- Posterior reversible encephalopathy syndrome (PRES)
- Eclamptic seizures
- Intracranial hemorrhage (leading cause of death)

**Cardiopulmonary**
- Increased SVR, decreased cardiac output
- Pulmonary edema (capillary leak + iatrogenic fluid)

**Diagnostic Workup:**

**Laboratory**
- CBC with platelets
- Comprehensive metabolic panel (Cr, LFTs)
- LDH, uric acid
- Urinalysis, protein/creatinine ratio or 24h urine

**HELLP Diagnosis:**
- Hemolysis: Schistocytes, LDH >600, bilirubin >1.2
- Liver: AST >70
- Platelets: <100,000

**Imaging**
- Ultrasound for fetal assessment
- Consider MRI if atypical neurologic symptoms

**Management by Severity and Gestational Age:**

**Without Severe Features:**
- <37 weeks: Expectant management, close surveillance
- ≥37 weeks: Delivery

**With Severe Features:**
- <34 weeks: May attempt expectant management if stable, with corticosteroids
- ≥34 weeks: Delivery after stabilization
- Any gestational age: Deliver if uncontrolled HTN, eclampsia, pulmonary edema, abruption, DIC, fetal compromise

**Antihypertensive Therapy:**
- Goal: <160/110 to prevent stroke
- First-line: IV labetalol, IV hydralazine, or PO nifedipine
- Avoid ACE inhibitors, ARBs (teratogenic)

**Magnesium Sulfate:**
- Loading: 4-6g IV over 20-30 minutes
- Maintenance: 1-2g/hour
- Monitor reflexes, respiratory rate, urine output
- Continue 24-48 hours postpartum
- Toxicity antidote: Calcium gluconate`,
      keyTerms: [
        { term: 'sFlt-1', definition: 'Soluble fms-like tyrosine kinase-1; anti-angiogenic protein elevated in preeclampsia' },
        { term: 'PlGF', definition: 'Placental growth factor; pro-angiogenic protein decreased in preeclampsia' },
        { term: 'Glomerular endotheliosis', definition: 'Renal lesion pathognomonic for preeclampsia; swollen endothelial cells occluding capillaries' },
        { term: 'PRES', definition: 'Posterior reversible encephalopathy syndrome; brain edema associated with severe hypertension and eclampsia' },
        { term: 'Spiral artery remodeling', definition: 'Normal process of trophoblast invasion that creates low-resistance uterine blood flow; defective in preeclampsia' },
      ],
      examples: [
        'A patient with platelets 75,000, LDH 750, and AST 200 has HELLP syndrome regardless of blood pressure level',
        'The sFlt-1/PlGF ratio can help rule out preeclampsia in patients with new hypertension of uncertain etiology',
      ],
    },
    4: {
      level: 4,
      summary: 'Preeclampsia pathogenesis involves immune maladaptation, oxidative stress, and genetic susceptibility leading to placental dysfunction, with sFlt-1/PlGF imbalance driving the clinical syndrome through widespread endothelial dysfunction.',
      explanation: `**Molecular Pathogenesis:**

**Immune Maladaptation**

*Normal Implantation*
- Decidual NK cells (CD56bright) regulate trophoblast invasion
- Regulatory T cells suppress anti-fetal immune response
- HLA-G on extravillous trophoblast interacts with maternal immune cells

*Preeclampsia*
- Altered decidual NK cell function
- Reduced regulatory T cells
- KIR/HLA-C incompatibility may increase risk
- First pregnancy and new partner risks support immune hypothesis

**Oxidative Stress**

*Ischemia-Reperfusion*
- Abnormal spiral arteries → intermittent placental perfusion
- Hypoxia-reoxygenation cycles
- Free radical generation

*Consequences*
- Trophoblast apoptosis and necrosis
- Release of syncytiotrophoblast microparticles
- Activation of maternal inflammatory response
- Lipid peroxidation

**Angiogenic Factor Biology:**

**sFlt-1 (Soluble Fms-Like Tyrosine Kinase-1)**
- Truncated, soluble form of VEGF receptor
- Produced by hypoxic placenta
- Binds and neutralizes VEGF and PlGF
- Causes endothelial dysfunction:
  - Hypertension (loss of VEGF-mediated vasodilation)
  - Proteinuria (loss of VEGF support of glomerular endothelium)
  - Edema (increased vascular permeability)

**PlGF (Placental Growth Factor)**
- Normally increases throughout pregnancy
- Decreases before clinical preeclampsia
- Low levels even in first trimester in future preeclamptics

**Soluble Endoglin (sEng)**
- TGF-β co-receptor
- Elevated in preeclampsia
- Potentiates sFlt-1 effects
- May contribute to HELLP syndrome

**Genetic Factors:**

*Maternal Genes*
- Susceptibility genes: ACVR2A, STOX1, ERAP1/2
- Association with thrombophilia (factor V Leiden, prothrombin mutation) is weak

*Fetal/Paternal Contribution*
- Fetal genotype influences risk (paternal contribution)
- Same partner longer interval increases risk (loss of immune tolerance)

*Epigenetics*
- DNA methylation changes in placenta
- Imprinted genes may play a role

**First Trimester Prediction:**

*Combined Screening*
- Maternal factors
- Mean arterial pressure (MAP)
- Uterine artery pulsatility index (UtA-PI)
- Serum markers: PAPP-A (low), PlGF (low)

*Detection Rates*
- Early-onset (<34 weeks): 75-90%
- Late-onset (≥34 weeks): 45-55%
- False positive ~10%

*Clinical Utility*
- Identifies candidates for aspirin prophylaxis
- Risk-based surveillance protocols
- FMF (Fetal Medicine Foundation) algorithm widely used

**Long-Term Implications:**

**Maternal Cardiovascular Risk**
- 2-4x increased risk of future:
  - Chronic hypertension
  - Ischemic heart disease
  - Stroke
  - Heart failure
- Risk correlates with severity and recurrence
- Shared risk factors vs. vascular injury during pregnancy

**Future Pregnancy**
- Recurrence risk 15-20% (higher if early-onset)
- Earlier onset and more severe in subsequent pregnancies
- Benefit from preconception counseling

**Offspring**
- Increased cardiovascular risk
- Higher blood pressure in adolescence
- Metabolic syndrome risk`,
      keyTerms: [
        { term: 'Syncytiotrophoblast microparticles', definition: 'Fragments of placental tissue released into maternal circulation; increased in preeclampsia and trigger inflammation' },
        { term: 'KIR/HLA-C', definition: 'Killer immunoglobulin-like receptors and their HLA ligands; certain combinations associated with preeclampsia risk' },
        { term: 'Uterine artery pulsatility index', definition: 'Doppler measurement of uterine artery resistance; elevated when spiral artery remodeling is deficient' },
        { term: 'sEng', definition: 'Soluble endoglin; anti-angiogenic factor elevated in preeclampsia, especially HELLP syndrome' },
        { term: 'STOX1', definition: 'Gene encoding a transcription factor; certain variants associated with preeclampsia susceptibility' },
      ],
      clinicalNotes: 'The FMF first-trimester screening algorithm combines maternal factors, MAP, UtA-PI, and serum PAPP-A and PlGF to generate patient-specific risk. Women at high risk (>1:100 for preterm preeclampsia) should receive aspirin 150mg at bedtime starting before 16 weeks, which reduces early preeclampsia by ~60%.',
    },
    5: {
      level: 5,
      summary: 'Evidence-based management of preeclampsia integrates risk stratification, biomarker-guided decision making, standardized treatment protocols for hypertensive emergencies and seizure prophylaxis, and attention to postpartum complications and long-term cardiovascular health.',
      explanation: `**Prediction and Prevention:**

**First-Trimester Screening (FMF Algorithm)**

*Components*
- Prior probability from maternal factors (history, BMI, conception method)
- Biophysical markers: MAP, UtA-PI
- Biochemical markers: PAPP-A, PlGF

*Performance*
| Preeclampsia Type | Detection Rate (10% FPR) |
|-------------------|--------------------------|
| <32 weeks | 90% |
| <37 weeks | 75% |
| ≥37 weeks | 45% |

**Aspirin Prophylaxis (ACOG/USPTF)**

*High-Risk (Any One)*
- Prior preeclampsia
- Multifetal pregnancy
- Chronic hypertension
- Diabetes (type 1 or 2)
- Renal disease
- Autoimmune disease

*Moderate-Risk (≥2)*
- Nulliparity
- Age ≥35
- BMI >30
- Family history (first-degree)
- Sociodemographic factors
- Prior adverse outcome (IUGR, abruption)

*Dosing*
- 81 mg daily (some protocols use 150 mg)
- Start at 12-16 weeks (before 16 weeks optimal)
- Continue until delivery
- NNT to prevent one case: ~50-70

**Antepartum Management:**

**Monitoring for Preeclampsia Without Severe Features**
- Twice weekly BP and symptoms
- Weekly labs (CBC, CMP, LFTs)
- Twice weekly NST/AFI
- Weekly growth ultrasound if IUGR suspected
- Deliver at 37 weeks

**Expectant Management of Severe Features <34 Weeks**
- Only at facilities with adequate NICU
- Continuous fetal monitoring during stabilization
- Corticosteroids for fetal lung maturity
- Magnesium sulfate
- Antihypertensives
- Daily labs, frequent BP checks
- Deliver for: Uncontrolled HTN, eclampsia, pulmonary edema, abruption, DIC, non-reassuring FHT, abnormal labs (HELLP worsening)

**Intrapartum Management:**

**Blood Pressure Control**
- Treat sustained SBP ≥160 or DBP ≥110
- Goal: 140-150/90-100 (avoid precipitous drop)

| Agent | Initial Dose | Repeat | Max |
|-------|--------------|--------|-----|
| Labetalol IV | 20 mg | 40, 80 mg q10min | 300 mg |
| Hydralazine IV | 5-10 mg | q20min | 20 mg |
| Nifedipine PO | 10-20 mg | q20min | 50 mg |

**Magnesium Sulfate Protocol**
- Loading: 4-6 g IV over 20-30 min
- Maintenance: 1-2 g/hour
- Target level: 4.8-8.4 mg/dL (2-3.5 mmol/L)
- Toxicity progression: Hyporeflexia → Respiratory depression → Cardiac arrest
- Antidote: 1 g calcium gluconate IV

**Delivery Route**
- Vaginal preferred if favorable cervix and stable
- Cesarean for obstetric indications
- Avoid general anesthesia if possible (exaggerated pressor response)

**Postpartum Management:**

**Continued Risk**
- Preeclampsia can develop or worsen up to 6 weeks postpartum
- HELLP syndrome may first present postpartum
- Eclampsia occurs postpartum in 20-30% of cases

**Monitoring**
- BP every 4-6 hours while inpatient
- Continue magnesium 24-48 hours postpartum
- Daily labs until improving
- Outpatient BP checks days 3-7

**Postpartum Hypertension Management**
- Nifedipine or labetalol common choices
- Avoid diuretics (already intravascularly depleted)
- NSAIDs may worsen BP - use cautiously

**Long-Term Care:**

**Cardiovascular Counseling**
- Preeclampsia is a risk factor for future CVD
- Risk is 2-4x higher for HTN, MI, stroke, heart failure
- Annual BP and metabolic screening
- Lifestyle modification emphasis
- Consider early statin therapy if other risk factors

**Preconception Counseling for Future Pregnancy**
- Recurrence risk 15-20%
- Higher if early-onset or severe
- Start aspirin at 12 weeks
- Consider low-molecular-weight heparin if antiphospholipid syndrome
- Pre-pregnancy optimization of weight, BP, comorbidities`,
      keyTerms: [
        { term: 'ACOG', definition: 'American College of Obstetricians and Gynecologists; primary source of US obstetric practice guidelines' },
        { term: 'FMF algorithm', definition: 'Fetal Medicine Foundation risk calculation combining maternal factors, BP, Doppler, and biomarkers for preeclampsia prediction' },
        { term: 'Expectant management', definition: 'Delaying delivery while closely monitoring mother and fetus to gain gestational age when benefits outweigh risks' },
        { term: 'CHIPS trial', definition: 'Control of Hypertension In Pregnancy Study; showed tight BP control did not improve outcomes but was safe' },
        { term: 'NNT', definition: 'Number needed to treat; how many patients need treatment to prevent one adverse outcome' },
      ],
      clinicalNotes: 'The 2024 ACOG practice bulletin emphasizes that aspirin prophylaxis should be started ideally by 12-16 weeks and certainly before 16 weeks for maximum benefit. The sFlt-1/PlGF ratio is increasingly used to risk stratify women with suspected preeclampsia, with a low ratio (<38) having >99% NPV for developing preeclampsia within 1 week. Women with history of preeclampsia should be counseled about their increased lifetime cardiovascular risk and engaged in long-term preventive care.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'article',
      title: 'ACOG Practice Bulletin No. 222: Gestational Hypertension and Preeclampsia',
      source: 'Obstetrics & Gynecology',
      authors: ['ACOG'],
      url: 'https://doi.org/10.1097/AOG.0000000000003891',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'Pre-eclampsia - Lancet Seminar',
      source: 'The Lancet',
      authors: ['Chappell, L.C.', 'Cluver, C.A.', 'Kingdom, J.', 'Tong, S.'],
      url: 'https://doi.org/10.1016/S0140-6736(20)32335-7',
    },
  ],
  crossReferences: [
    { targetId: 'reproductive-pregnancy-complications', targetType: 'condition', relationship: 'parent', label: 'Pregnancy Complications' },
    { targetId: 'reproductive-fertility', targetType: 'process', relationship: 'related', label: 'Fertility' },
  ],
  tags: {
    systems: ['reproductive', 'cardiovascular', 'renal'],
    topics: ['pathology', 'obstetrics', 'hypertension', 'emergency'],
    keywords: ['preeclampsia', 'eclampsia', 'HELLP', 'pregnancy hypertension', 'magnesium sulfate', 'sFlt-1', 'PlGF'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obstetrics-gynecology', 'medicine', 'emergency-medicine'],
    },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
