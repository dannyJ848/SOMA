/**
 * Gestational Diabetes - Chronic Disease Education
 *
 * Comprehensive patient education about gestational diabetes mellitus,
 * diabetes diagnosed during pregnancy that affects both mother and baby.
 */

import { EducationalContent } from '../../types';

export const GESTATIONAL_DIABETES: EducationalContent = {
  id: 'chronic-disease-gestational-diabetes',
  type: 'condition',
  name: 'Gestational Diabetes',
  alternateNames: ['Gestational diabetes mellitus', 'GDM', 'Pregnancy-induced diabetes', 'Gestational glucose intolerance'],

  levels: {
    1: {
      level: 1,
      summary: 'Gestational diabetes is diabetes that develops during pregnancy and usually goes away after the baby is born, but needs careful management for a healthy pregnancy.',
      explanation: `**What Is Gestational Diabetes?**

Gestational diabetes (GDM) is diabetes that first appears during pregnancy. It means your blood sugar levels are higher than normal, which can affect both you and your baby.

**Why Does It Happen?**

During pregnancy, the placenta makes hormones that can block insulin from working properly. This is called insulin resistance. Some women cannot make enough extra insulin to overcome this resistance.

**Risk Factors:**

- Being overweight before pregnancy
- Age 25 or older
- Family history of diabetes
- Had GDM in a previous pregnancy
- Had a large baby before (over 9 pounds)
- Certain ethnic backgrounds (Hispanic, African American, Asian, Native American)
- Polycystic ovary syndrome (PCOS)

**How Is It Found?**

All pregnant women are tested for GDM between 24-28 weeks of pregnancy. You drink a sweet drink and have your blood sugar checked.

**How Does It Affect the Baby?**

If not controlled, GDM can cause:
- Baby to grow too large (making delivery harder)
- Low blood sugar in baby after birth
- Breathing problems for the baby
- Increased risk of jaundice

**How Is It Treated?**

Most women can manage GDM with:
- Eating healthy foods and watching carbs
- Regular physical activity
- Checking blood sugar at home
- Some women need insulin or medicine

**Blood Sugar Targets:**

\`\`\`
Before meals:  95 mg/dL or lower
1 hour after eating: 140 mg/dL or lower
2 hours after eating: 120 mg/dL or lower
\`\`\`

**What Happens After Birth?**

- Blood sugar usually returns to normal after delivery
- You'll be tested 6-12 weeks after birth
- GDM increases your risk of Type 2 diabetes later in life
- Lifestyle changes can help prevent future diabetes

**Healthy Eating Tips:**

- Eat 3 meals and 2-3 snacks each day
- Don't skip meals
- Watch your carbohydrate portions
- Include protein with meals
- Stay hydrated

**Remember:** Managing your blood sugar helps ensure a healthy pregnancy and baby!`,
      keyTerms: [
        { term: 'placenta', definition: 'The organ that develops in pregnancy to nourish the baby' },
        { term: 'insulin resistance', definition: 'When the body does not use insulin well during pregnancy' },
        { term: 'carbohydrates', definition: 'Foods that turn into sugar, like bread, pasta, fruit, and milk' },
        { term: 'blood sugar', definition: 'The amount of sugar in your blood' },
        { term: 'jaundice', definition: 'Yellowing of the skin and eyes caused by high bilirubin' },
      ],
      analogies: [
        'The placenta hormones act like roadblocks, making it harder for insulin to do its job of controlling blood sugar.',
      ],
      examples: [
        'Alisha was diagnosed with GDM at 28 weeks. She checks her blood sugar 4 times a day and walks after meals to keep her levels in target.',
        'Sarah works with a dietitian to plan her meals. Her baby is growing well and her blood sugars are controlled with diet alone.',
      ],
      patientCounselingPoints: [
        'GDM is not your fault - pregnancy hormones cause insulin resistance in many women.',
        'Testing your blood sugar regularly helps you and your care team make adjustments.',
        'Stay active - walking for 10-15 minutes after meals can lower blood sugar.',
        'Keep snacks handy in case your blood sugar drops too low.',
        'Breastfeeding may help reduce your risk of Type 2 diabetes later.',
      ],
    },
    2: {
      level: 2,
      summary: 'Gestational diabetes mellitus is glucose intolerance first recognized during pregnancy, resulting from placental hormones causing insulin resistance, requiring careful glycemic control to prevent maternal and fetal complications.',
      explanation: `**Understanding Gestational Diabetes:**

Gestational diabetes mellitus (GDM) affects 6-25% of pregnancies depending on population and screening criteria. It develops when pregnancy hormones from the placenta cause insulin resistance that the pancreas cannot overcome.

**Pathophysiology:**

*Normal Pregnancy Changes:*
- Placenta produces hormones (HPL, progesterone, cortisol, prolactin)
- These hormones cause insulin resistance
- Normally, pancreas compensates by producing 2-3x more insulin

*In GDM:*
- Insulin production cannot match resistance
- Maternal hyperglycemia develops
- Excess glucose crosses placenta to fetus
- Fetal pancreas responds with increased insulin

**Screening and Diagnosis:**

*Universal Screening:*
\`\`\`
Screening Timeline:
├─ Initial screening: At first prenatal visit (high risk)
└─ Routine screening: 24-28 weeks gestation
\`\`\`

*Diagnostic Criteria (IADPSG):*
| Test | Threshold |
|------|-----------|
| Fasting glucose | ≥92 mg/dL (5.1 mmol/L) |
| 1-hour OGTT | ≥180 mg/dL (10.0 mmol/L) |
| 2-hour OGTT | ≥153 mg/dL (8.5 mmol/L) |

*One-Step vs Two-Step Approach:*
- One-step: 75g OGTT with IADPSG criteria
- Two-step: 1-hour 50g screen, then diagnostic 3-hour 100g OGTT if positive

**Glycemic Targets:**

\`\`\`
Recommended Targets (ADA):
─────────────────────────────────────
Fasting:          <95 mg/dL
1-hour postmeal:  <140 mg/dL
2-hour postmeal:  <120 mg/dL
─────────────────────────────────────
\`\`\`

**Maternal and Fetal Risks:**

*Maternal Complications:*
- Preeclampsia (2-3x increased risk)
- Cesarean delivery (increased due to macrosomia)
- Trauma during delivery
- Future Type 2 diabetes (50% risk within 10 years)

*Fetal/Neonatal Complications:*
- Macrosomia (birth weight >4,000g or >90th percentile)
- Shoulder dystocia
- Birth trauma
- Neonatal hypoglycemia
- Hyperbilirubinemia/jaundice
- Respiratory distress syndrome
- Hypocalcemia, hypomagnesemia

**Management:**

*Medical Nutrition Therapy:*
- Individualized meal planning
- Carbohydrate controlled (33-40% of calories)
- Consistent carbohydrate distribution
- Avoid simple sugars
- Include complex carbs, fiber, protein
- 3 meals + 2-4 snacks daily

*Physical Activity:*
- 30 minutes moderate activity daily
- Walking after meals improves postprandial glucose
- Avoid activities with fall risk

*Glucose Monitoring:*
- Self-monitoring 4-7 times daily
- Fasting and postprandial checks
- Review logs weekly with provider

*Pharmacologic Therapy (if needed):*
| Medication | Timing | Considerations |
|------------|--------|----------------|
| Insulin | Any trimester | Gold standard, doesn't cross placenta |
| Metformin | 2nd/3rd trimester | Crosses placenta, long-term safety debated |
| Glyburide | 2nd trimester | Crosses placenta, higher hypoglycemia risk |

**Delivery Planning:**

- Optimal timing: 38-39 weeks for well-controlled GDM
- Earlier delivery if complications develop
- No routine delivery before 39 weeks for well-controlled GDM
- Continue insulin during labor (adjust for oral intake)

**Postpartum Care:**

*Immediate:*
- Continue glucose monitoring
- Neonatal glucose monitoring
- Breastfeeding encouraged

*Follow-up:*
- 75g OGTT 4-12 weeks postpartum
- Annual diabetes screening thereafter
- Lifestyle modification to prevent Type 2 diabetes`,
      keyTerms: [
        { term: 'IADPSG', definition: 'International Association of Diabetes and Pregnancy Study Groups' },
        { term: 'macrosomia', definition: 'Excessive fetal growth, typically birth weight >4,000g or >90th percentile' },
        { term: 'shoulder dystocia', definition: 'Delivery complication where fetal shoulder impacts maternal pelvis after head delivers' },
        { term: 'HPL', definition: 'Human placental lactogen; placental hormone causing insulin resistance' },
        { term: 'preeclampsia', definition: 'New-onset hypertension with protein/organ dysfunction after 20 weeks gestation' },
        { term: 'neonatal hypoglycemia', definition: 'Low blood sugar in newborn, common with maternal GDM' },
      ],
      analogies: [
        'In GDM, excess glucose crosses the placenta like a sugar overflow, making the baby grow too large.',
      ],
      clinicalNotes: 'All women with GDM need postpartum glucose testing due to high risk of progression to Type 2 diabetes. The IADPSG criteria diagnose more women but may improve outcomes.',
      patientCounselingPoints: [
        'Check your blood sugar at the same times each day for consistent results.',
        'Morning sickness can make blood sugar control harder - talk to your provider.',
        'Join a GDM support group to learn from other pregnant women.',
        'Keep fast-acting carbs with you for low blood sugar.',
        'Your baby will be monitored for growth and well-being more closely.',
      ],
    },
    3: {
      level: 3,
      summary: 'Gestational diabetes mellitus is carbohydrate intolerance resulting in hyperglycemia of variable severity with onset or first recognition during pregnancy, caused by insufficient insulin secretion to overcome pregnancy-induced insulin resistance.',
      explanation: `**Pathophysiology:**

*Pregnancy-Induced Metabolic Changes:*

Normal pregnancy creates a diabetogenic state through multiple mechanisms:
\`\`\`
Placental Hormones → Insulin Resistance
├─ Human Placental Lactogen (HPL)
├─ Progesterone
├─ Cortisol
├─ Prolactin
└─ Placental growth hormone

Insulin Resistance ↑ → Pancreatic β-cell compensation required
↓
If compensation inadequate → GDM
\`\`\`

*Risk Factor Assessment:*
\`\`\`
High Risk (test at first prenatal visit):
- Previous GDM
- Macrosomia in previous pregnancy
- Known diabetes in first-degree relative
- PCOS
- Obesity (BMI ≥30)
- High-risk ethnicity

Average Risk (test at 24-28 weeks):
- No high-risk features
- Age ≥25 years

Low Risk (no screening per some guidelines):
- Age <25
- Normal BMI
- No family history
- Low-risk ethnicity
\`\`\`

**Diagnostic Criteria:**

*IADPSG (one-step, most widely adopted):*
| Time | Plasma Glucose |
|------|----------------|
| Fasting | ≥92 mg/dL (5.1 mmol/L) |
| 1 hour | ≥180 mg/dL (10.0 mmol/L) |
| 2 hour | ≥153 mg/dL (8.5 mmol/L) |

*Carpenter-Coustan (two-step):*
- 50g 1-hour screen: ≥140 mg/dL (130 mg/dL for high-risk)
- If positive, 100g 3-hour OGTT
- Diagnosis if ≥2 values met:
  - Fasting: ≥95 mg/dL
  - 1-hour: ≥180 mg/dL
  - 2-hour: ≥155 mg/dL
  - 3-hour: ≥140 mg/dL

**Fetal Pathophysiology:**

*Pederson Hypothesis:*
\`\`\`
Maternal Hyperglycemia
      ↓
Fetal Hyperglycemia (glucose crosses placenta)
      ↓
Fetal Hyperinsulinemia (fetal pancreas responds)
      ↓
Fetal Macrosomia (insulin acts as growth factor)
      ↓
Metabolic Consequences in neonate
\`\`\`

*Fetal Effects:*
- Shoulder dystocia risk ↑ with birth weight >4,000g
- Neonatal hypoglycemia from hyperinsulinemia at birth
- Polycythemia from chronic fetal hypoxia
- Hypocalcemia, hyperbilirubinemia
- Respiratory distress from delayed surfactant

**Management:**

*Medical Nutrition Therapy:*
\`\`\`
Carbohydrate Distribution:
Breakfast:   30-45g
Morning snack: 15g
Lunch:       45-60g
Afternoon snack: 15-30g
Dinner:      45-60g
Evening snack: 15-30g

Total:       175-240g/day
(approximately 33-40% of total calories)
\`\`\`

*Insulin Therapy:*
\`\`\'
Indications for Insulin:
- Fasting glucose >95 mg/dL despite diet
- 1-hour postprandial >140 mg/dL
- 2-hour postprandial >120 mg/dL
- Evidence of excessive fetal growth

Common Regimen:
- Basal: NPH or glargine at bedtime
- Bolus: Rapid-acting before meals
- Starting dose: 0.7-1.0 units/kg/day (divided)

Insulin Requirements by Trimester:
T1: May decrease due to nausea
T2: Increasing (0.7 units/kg)
T3: Highest (0.9-1.0 units/kg)
\`\`\`

*Oral Agents:*
\`\`\`
Metformin:
- Category B, crosses placenta
- Mechanism: ↓ hepatic gluconeogenesis, ↑ insulin sensitivity
- Starting: 500mg daily, titrate to 2000-2500mg
- May be combined with insulin

Glyburide:
- Category B, crosses placenta
- Mechanism: Sulfonylurea, ↑ insulin secretion
- Starting: 2.5mg daily, titrate to 20mg
- Higher failure rate than insulin/metformin
- More neonatal hypoglycemia
\`\`\`

**Antepartum Surveillance:**

*Fetal Monitoring:*
- Growth ultrasounds every 4-6 weeks
- Amniotic fluid assessment
- Antenatal testing starting at 32-36 weeks
  - NST or BPP twice weekly if poorly controlled
  - Weekly if well-controlled

*Maternal Surveillance:*
- Weekly prenatal visits initially
- Biweekly visits if stable
- Monitor for preeclampsia
- Assess glycemic control at each visit

**Delivery Timing:**

\`\`\`
Indication                     Timing
─────────────────────────────────────────────
Well-controlled GDM            39-40 weeks
Poorly controlled GDM          37-39 weeks
GDM requiring insulin          38-39 weeks
GDM with complications         Individualized
Classic indications            Earlier as indicated
  (preeclampsia, etc.)
─────────────────────────────────────────────
\`\`\`

**Postpartum Considerations:**

*Immediate Postpartum:*
- Insulin requirements ↓ dramatically after delivery
- Discontinue insulin/metformin/glyburide postpartum
- Monitor maternal glucose for 24 hours
- Continue with usual diet

*Long-term Follow-up:*
- 75g 2-hour OGTT at 4-12 weeks postpartum
- Category: Normal, Prediabetes, or Diabetes
- If prediabetes: lifestyle intervention, metformin considered
- If normal: Annual fasting glucose or A1C
- Educate on future pregnancy risk
- Lifetime risk of Type 2 diabetes: 50-70%`,
      keyTerms: [
        { term: 'Pederson hypothesis', definition: 'Theory that maternal hyperglycemia causes fetal hyperinsulinemia leading to complications' },
        { term: 'NST', definition: 'Non-stress test; fetal heart rate monitoring to assess well-being' },
        { term: 'BPP', definition: 'Biophysical profile; ultrasound assessment of fetal well-being' },
        { term: 'polycythemia', definition: 'Increased red blood cell mass; can occur in infants of diabetic mothers' },
        { term: 'carbohydrate counting', definition: 'Method of meal planning tracking grams of carbohydrates' },
      ],
      clinicalNotes: 'Metformin use in pregnancy remains controversial; long-term offspring outcomes are still being studied. Insulin remains the gold standard for pharmacologic therapy.',
      patientCounselingPoints: [
        'You will need to test your blood sugar 4-7 times a day to guide therapy.',
        'The risk of developing Type 2 diabetes later is high - make healthy habits permanent.',
        'Future pregnancies will require early screening for diabetes.',
        'Your child may have higher risk of obesity and diabetes later in life.',
        'Breastfeeding may help with postpartum weight loss and glucose control.',
      ],
    },
    4: {
      level: 4,
      summary: 'Gestational diabetes represents a state of carbohydrate intolerance resulting from pregnancy-induced insulin resistance overwhelming beta cell compensation, requiring sophisticated glycemic management to prevent maternal-fetal complications and mitigate long-term metabolic risk.',
      explanation: `**Complex Pathophysiology:**

GDM reflects the intersection of genetic predisposition, metabolic dysfunction, and the profound endocrine changes of pregnancy.

*Normal Pregnancy Metabolism:*
\`\`\`
Metabolic Adaptations by Trimester:
─────────────────────────────────────────
First Trimester:
  - Enhanced insulin sensitivity
  - Increased fat storage
  - Fasting glucose ↓

Second/Third Trimesters:
  - Progressive insulin resistance
  - ↑ Lipolysis, ↓ glucose uptake
  - Fasting glucose normalizes
  - Postprandial glucose ↑
  - Maternal glucose → fetal nutrition
─────────────────────────────────────────
\`\`\`

*Hormonal Mechanisms:*
\`\`\`
Placental Hormones → Insulin Resistance
─────────────────────────────────────────
Human Placental Lactogen (hPL):
  - ↑ from 10 weeks to term
  - Direct anti-insulin effect
  - ↑ lipolysis → free fatty acids

Progesterone:
  - ↓ insulin receptor affinity
  - ↓ peripheral glucose utilization

Cortisol:
  - ↑ hepatic gluconeogenesis
  - ↑ insulin resistance

Prolactin:
  - Beta cell proliferation (adaptive)
  - Insulin resistance effect

TNF-α (from placenta):
  - Impairs insulin signaling
  - ↑ serine phosphorylation of IRS-1
─────────────────────────────────────────
\`\`\`

**Genetic and Epigenetic Factors:**

*Genetic Overlap with Type 2 Diabetes:*
- Shared susceptibility loci (TCF7L2, SLC30A8, MTNR1B)
- Polygenic risk scores predict GDM risk
- Family history of T2DM increases GDM risk 2-8 fold

*Epigenetic Programming:*
\`\`\`
In Utero Exposure → Long-term Consequences
─────────────────────────────────────────
Maternal Hyperglycemia
         ↓
Fetal Epigenetic Changes
         ↓
Altered Metabolic Set Points
         ↓
Offspring Metabolic Disease Risk:
  - Obesity
  - Glucose intolerance
  - Type 2 diabetes
  - Cardiovascular disease
─────────────────────────────────────────
\`\`\`

*Developmental Origins of Health and Disease (DOHaD):*
- Offspring of GDM pregnancies have higher BMI
- Earlier onset of puberty in offspring
- Increased diabetes risk in childhood/adolescence

**Advanced Management:**

*Continuous Glucose Monitoring in GDM:*
\`\`\`
CGM Benefits:
- Detect postprandial spikes missed by fingerstick
- Nocturnal hypoglycemia detection
- Reduced testing burden
- Better correlation with fetal outcomes
- May allow more targeted therapy

CGM Targets (GDM-Specific):
- Average glucose: <95-100 mg/dL
- Time in range: >70% (63-140 mg/dL)
- Time above range: <25% (>140 mg/dL)
- Time below range: <4% (<63 mg/dL)
\`\`\`

*Individualized Insulin Algorithms:*
\`\`\'
Basal-Bolus Approach:
BASAL (NPH/Detemir/Glargine):
  - Fasting hyperglycemia
  - Dose: 40-50% of TDD

BOLUS (Lispro/Aspart):
  - Pre-meal hyperglycemia
  - Dose: 50-60% of TDD
  - Insulin:Carb ratio (1:10 to 1:15)
  - Correction factor (1700/TDD)

Considerations:
  - Post-breakfast hyperglycemia common
  - May require higher breakfast ratios
  - Renal filtration ↑ in pregnancy
  - Creatinine clearance ↑ 50%
\`\`\`

**Fetal Surveillance:**

*Biometry Growth Patterns:*
\`\`\'
Abdominal Circumference >90th percentile:
  - Suggests maternal hyperglycemia
  - Consider tighter control
  - May predict shoulder dystocia risk

Estimated Fetal Weight >4,500g:
  - Consider cesarean delivery
  - Discuss risks of vaginal delivery
\`\`\`

*Antenatal Testing Strategy:*
| Condition | Surveillance Frequency |
|-----------|----------------------|
| Diet-controlled GDM | Weekly NST/BPP at 40+ weeks |
| Insulin-requiring GDM | Twice weekly NST/BPP at 32-36 weeks |
| Poorly controlled | Daily or twice daily testing |
| Reduced fetal movements | Immediate evaluation |

**Delivery Planning:**

*Risk Assessment:*
\`\`\`
Shoulder Dystocia Risk Factors:
- Birth weight >4,000g
- Maternal diabetes
- Short maternal stature
- Prolonged second stage
- Operative vaginal delivery
\`\`\`

*Anesthetic Considerations:*
- Neuraxial anesthesia preferred for vaginal delivery
- Consider epidural early for anticipated difficult delivery
- Airway management considerations if BMI >40
- Glucose management during labor

**Intrapartum Glucose Management:**

*Target Range:*
\`\`\`
Intrapartum Maternal Glucose:
- Goal: 80-110 mg/dL (4.4-6.1 mmol/L)
- Check every 1-2 hours
- Adjust insulin infusion accordingly

Insulin Infusion Protocol:
- Start: 1-2 units/hour
- Adjust based on glucose
- Continue D5W or D10NS IV fluids
- Prevent maternal hypoglycemia
- Prevent neonatal hypoglycemia
\`\`\`

**Postpartum and Long-Term Risk:**

*Recurrence Risk:*
\`\`\`
Risk of GDM in Future Pregnancy:
────────────────────────────────
Previous GDM: 30-70% recurrence
Risk factors for recurrence:
  - Higher maternal age
  - Higher BMI
  - Higher parity
  - Earlier GDM diagnosis
  - Insulin requirement
────────────────────────────────
\`\`\`

*Progression to Type 2 Diabetes:*
\`\`\`
Cumulative Risk After GDM:
────────────────────────────────
6 months postpartum: 5-10%
1 year:              10-15%
5 years:             30-50%
10 years:            50-70%

Protective Factors:
  - Return to pre-pregnancy weight
  - Breastfeeding >6 months
  - Physical activity
  - Healthy diet (Mediterranean, DASH)
  - Metformin (in high-risk women)
────────────────────────────────
\`\`\``,
      keyTerms: [
        { term: 'DOHaD', definition: 'Developmental Origins of Health and Disease; concept linking prenatal exposures to adult disease' },
        { term: 'time in range', definition: 'Percentage of time glucose within target range; key CGM metric' },
        { term: 'epigenetic programming', definition: 'Heritable changes in gene expression without DNA sequence alteration' },
        { term: 'creatinine clearance', definition: 'Measure of kidney filtration; increases during pregnancy' },
        { term: 'neuraxial anesthesia', definition: 'Epidural or spinal anesthesia for pain control during delivery' },
      ],
      clinicalNotes: 'GDM identifies women at high risk for future cardiovascular disease, not just diabetes. Consider long-term cardiovascular risk reduction strategies. Offspring require long-term metabolic monitoring.',
      patientCounselingPoints: [
        'Your A1C should be checked at 4-12 weeks after delivery.',
        'Breastfeeding reduces both your and your baby risk of future diabetes.',
        'Maintaining a healthy weight after pregnancy is crucial.',
        'Consider a preconception visit before future pregnancies.',
        'Your child should maintain a healthy lifestyle to reduce their metabolic risk.',
      ],
    },
    5: {
      level: 5,
      summary: 'Gestational diabetes mellitus represents a complex metabolic disorder exposing pregnancy-induced insulin resistance in genetically susceptible women, creating transgenerational metabolic risk through epigenetic programming and requiring precision medicine approaches for optimal maternal-fetal outcomes.',
      explanation: `**Advanced Pathogenesis:**

GDM provides a human model of gene-environment interaction, where pregnancy stress unmasks latent metabolic dysfunction and creates long-term consequences across generations.

*Genetic Architecture:*
\`\`\`
Shared Loci Between GDM and T2DM:
─────────────────────────────────────────
TCF7L2         - Wnt signaling, beta cell function
MTNR1B         - Melatonin receptor, circadian
SLC30A8        - Zinc transport in beta cells
CDKAL1         - Beta cell development
CDC123/CAMK1D  - Cell cycle regulation
HKDC1          - Hexokinase activity
GCKR           - Glucokinase regulation
─────────────────────────────────────────

Unique GDM Loci:
- Pregnancy-specific insulin resistance genes
- Placental development genes
- Hormone metabolism variants
\`\`\`

*Polygenic Risk Scores:*
- Predict GDM before pregnancy
- Identify women needing early intervention
- May guide preconception counseling
- Limited clinical adoption currently

**Immunologic and Inflammatory Pathways:**

*Adipose Tissue Inflammation:*
\`\`\`
Pregnancy Adipose Remodeling:
─────────────────────────────────────────
Normal:
  Adipose expansion → Angiogenesis
  → Anti-inflammatory M2 macrophages
  → Healthy metabolic adaptation

GDM:
  Adipose dysfunction → Hypoxia
  → Pro-inflammatory M1 macrophages
  → TNF-α, IL-6, MCP-1 secretion
  → Systemic insulin resistance
─────────────────────────────────────────
\`\`\`

*Cytokine-Mediated Insulin Resistance:*
- TNF-α impairs insulin receptor signaling
- IL-6 induces SOCS proteins
- Leptin resistance develops
- Adiponectin decreases
- Inflammatory markers predict GDM development

**Epigenetic Transgenerational Effects:**

*DNA Methylation Changes:*
\`\`\'
Offspring Epigenetic Alterations:
─────────────────────────────────────────
Maternal Hyperglycemia
        ↓
Placental DNA Methylation Changes
  (LEP, ADIPOQ, PPARGC1A, RXRA)
        ↓
Fetal Epigenetic Reprogramming
        ↓
Altered Metabolic Set Points:
  - Appetite regulation genes
  - Glucose metabolism genes
  - Adipocyte differentiation genes
        ↓
Offspring Phenotype:
  - Higher birth weight
  - Childhood obesity
  - Earlier puberty
  - Glucose intolerance
  - Type 2 diabetes
─────────────────────────────────────────
\`\`\`

*Human Evidence:*
- HAPO cohort: Continuous relationship between maternal glucose and outcomes
- Epigenome-wide association studies (EWAS) reveal DMRs
- Sex-specific effects on offspring
- Persistence into adolescence and adulthood

**Precision Medicine Approaches:**

*Phenotype-Guided Therapy:*
\`\`\'
GDM Subtypes (emerging data):
─────────────────────────────────────────
Phenotype A:  Mild insulin resistance
  - Diet-controlled
  - Lower complication risk
  - Lower future T2DM risk

Phenotype B:  Severe insulin resistance
  - Early-onset GDM
  - Requires insulin
  - Higher complication risk
  - Higher future T2DM risk
  - May benefit from metformin postpartum

Phenotype C:  Primary beta cell dysfunction
  - Lower BMI
  - Earlier diagnosis
  - Autoantibody negative
  - May progress to T1DM
─────────────────────────────────────────
\`\`\`

*Pharmacogenomics:*
\`\`\'
Gene Variants Affecting Therapy:
─────────────────────────────────────────
TCF7L2        - Sulfonylurea response
KCNJ11        - Sulfonylurea sensitivity
SLCO1B1       - Statin-related myopathy
OXTR          - Oxytocin response
CYP2C9        - Glyburide metabolism
─────────────────────────────────────────
\`\`\`

**Advanced Therapeutic Considerations:**

*Continuous Glucose Monitoring:*
\`\`\'
CGGDM Trial Findings:
- CGM improved time in range
- Reduced neonatal hypoglycemia
- Reduced neonatal intensive care
- Reduced large for gestational age
- No increase in maternal hypoglycemia
- Patient satisfaction improved

Cost-effectiveness:
- Most cost-effective in insulin-treated GDM
- Consider in all GDM regardless of treatment
- May replace some fingerstick testing
\`\`\`

*Novel Pharmacologic Approaches:*
\`\`\'
Investigational/Consideration:
─────────────────────────────────────────
GLP-1 agonists:
  - Limited pregnancy data
  - Animal studies concerning
  - Hold for pregnancy currently

SGLT2 inhibitors:
  - Limited pregnancy data
  - Potential for ketoacidosis
  - Avoid in pregnancy/breastfeeding

Metformin for prevention:
  - In high-risk women pre-pregnancy
  - Reduces GDM development
  - Consider in PCOS patients
─────────────────────────────────────────
\`\`\`

**Long-Term Cardiovascular Risk:**

*Women-Centered Cardiovascular Disease:*
\`\`\'
Lifetime Risk After GDM:
─────────────────────────────────────────
Condition                  Relative Risk
─────────────────────────────────────────
Type 2 diabetes            7-10x
Hypertension               2-3x
Dyslipidemia               2x
Cardiovascular disease     2x
Stroke                     1.5x
Heart failure              2x
─────────────────────────────────────────

Implications:
  - Screen for CVD risk factors
  - Aggressive risk factor modification
  - Consider statins if not breastfeeding
  - Lifelong surveillance needed
\`\`\`

**Global Health Perspectives:**

*Epidemiology:*
\`\`\'
GDM Prevalence by Region (varies by criteria):
─────────────────────────────────────────
Region:           GDM Prevalence:
─────────────────────────────────────────
South Asia        15-25%
Middle East       12-21%
East Asia         10-15%
Europe            5-10%
North America     5-10%
Africa            5-15%
─────────────────────────────────────────

Contributing factors:
  - Ethnicity
  - BMI trends
  - Age at childbirth
  - Screening practices
  - Diagnostic criteria
\`\`\`

*Health Equity Considerations:*
- Access to GDM screening varies globally
- Cost of monitoring and treatment
- Cultural food practices affecting diet
- Language barriers in education
- Postpartum follow-up challenges

**Research Frontiers:**

*Prevention Strategies:*
- Preconception weight management
- Pre-pregnancy metformin in high-risk women
- Early pregnancy lifestyle intervention
- Microbiome modulation

*Diagnostic Innovation:*
- Early pregnancy biomarkers
- Combined risk prediction models
- Point-of-care HbA1c in pregnancy
- Continuous monitoring代替fingerstick

*Offspring Long-Term Follow-up:*
- Metabolic programming interventions
- Early lifestyle interventions
- Pharmacologic prevention strategies`,
      keyTerms: [
        { term: 'HAPO', definition: 'Hyperglycemia and Adverse Pregnancy Outcome study; landmark GDM research' },
        { term: 'DMR', definition: 'Differentially methylated region; epigenetic marker altered by exposures' },
        { term: 'EWAS', definition: 'Epigenome-wide association study' },
        { term: 'M1/M2 macrophages', definition: 'Pro- and anti-inflammatory macrophage phenotypes' },
        { term: 'SOCS proteins', definition: 'Suppressors of cytokine signaling; induce insulin resistance' },
      ],
      clinicalNotes: 'All women with GDM require lifelong cardiovascular risk surveillance. Offspring need long-term metabolic monitoring. Epigenetic mechanisms suggest transgenerational effects that may span multiple generations.',
      patientCounselingPoints: [
        'GDM is a "warning sign" for your future metabolic health.',
        'Lifestyle changes after pregnancy can dramatically reduce your diabetes risk.',
        'Your child benefits from healthy family habits and regular checkups.',
        'Consider genetic counseling if you have a strong family history of diabetes.',
        'Research continues to advance - ask about clinical trials.',
      ],
    },
  },

  media: [
    {
      id: 'gdm-pathogenesis',
      type: 'diagram',
      filename: 'gdm-pathogenesis.svg',
      title: 'Gestational Diabetes Pathogenesis',
      description: 'Diagram showing how pregnancy hormones cause insulin resistance',
    },
    {
      id: 'gdm-meal-planning',
      type: 'diagram',
      filename: 'gdm-plate-method.svg',
      title: 'GDM Healthy Plate Method',
      description: 'Visual guide for balanced meals with gestational diabetes',
    },
  ],

  citations: [
    {
      id: 'ada-gdm-2024',
      type: 'article',
      title: 'Standards of Care in Diabetes-2024: Gestational Diabetes Mellitus',
      source: 'Diabetes Care',
      authors: ['American Diabetes Association'],
    },
    {
      id: 'acog-practice-bulletin',
      type: 'article',
      title: 'Gestational Diabetes Mellitus: ACOG Practice Bulletin',
      source: 'Obstetrics & Gynecology',
      authors: ['American College of Obstetricians and Gynecologists'],
    },
    {
      id: 'hapo-study',
      type: 'article',
      title: 'Hyperglycemia and Adverse Pregnancy Outcome (HAPO) Study',
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-type1-diabetes', targetType: 'condition', relationship: 'related', label: 'Type 1 Diabetes' },
    { targetId: 'chronic-disease-type2-diabetes', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' },
    { targetId: 'chronic-disease-diabetes-complications', targetType: 'condition', relationship: 'related', label: 'Diabetes Complications' },
  ],

  tags: {
    systems: ['endocrine', 'reproductive'],
    structures: ['pancreas', 'placenta'],
    topics: ['pregnancy', 'diabetes', 'metabolism', 'fetal development'],
    keywords: ['gestational diabetes', 'GDM', 'pregnancy diabetes', 'maternal health', 'fetal health'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['obstetrics-gynecology', 'medicine'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
