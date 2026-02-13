/**
 * Gestational Diabetes - Reproductive System
 *
 * Comprehensive content on gestational diabetes including screening,
 * diagnosis, management, and complications.
 */

import { EducationalContent } from '../../../types';

export const gestationalDiabetes: EducationalContent = {
  id: 'reproductive-gestational-diabetes',
  type: 'condition',
  name: 'Gestational Diabetes',
  alternateNames: ['GDM', 'Gestational Diabetes Mellitus', 'Pregnancy Diabetes'],

  levels: {
    1: {
      level: 1,
      summary: 'Gestational diabetes is high blood sugar that develops during pregnancy and usually goes away after delivery. It needs to be managed to keep mother and baby healthy.',
      explanation: `## What Is Gestational Diabetes?

Gestational diabetes (GDM) is diabetes that develops for the first time during pregnancy.

### Why It Happens

- Pregnancy hormones make it harder for insulin to work
- This is called insulin resistance
- Usually starts in the second half of pregnancy
- Most women have no symptoms

### Who Is at Risk

- Overweight or obese
- Age 25 or older
- Family history of diabetes
- Previous gestational diabetes
- Had a large baby before
- Certain ethnic backgrounds
- Polycystic ovary syndrome (PCOS)

### Screening Test

**Glucose Challenge Test:**
- Drink a sweet liquid
- Blood test 1 hour later
- If high, needs follow-up testing
- Usually done at 24-28 weeks

### Why It Matters

For baby:
- May grow very large
- Harder delivery
- Low blood sugar at birth
- Breathing problems

For mother:
- High blood pressure
- Need for C-section
- Type 2 diabetes later in life

### Management

- Healthy eating plan
- Regular exercise
- Check blood sugar at home
- May need insulin or medication
- Close monitoring of baby

### After Delivery

- Blood sugar usually returns to normal
- Need testing 6-12 weeks after birth
- Higher risk of type 2 diabetes later
- Can reduce risk with healthy lifestyle`,
      keyTerms: [
        { term: 'gestational diabetes', definition: 'Diabetes that develops during pregnancy' },
        { term: 'insulin resistance', definition: 'When the body does not respond properly to insulin' },
        { term: 'glucose', definition: 'Sugar in the blood' },
        { term: 'C-section', definition: 'Cesarean delivery; surgical birth' },
        { term: 'macrosomia', definition: 'Baby that is larger than average' },
      ],
      analogies: [
        'Insulin is like a key that opens cells to let sugar in - pregnancy hormones make the lock sticky so the key does not work as well.',
      ],
      examples: [
        'Gestational diabetes affects 2-10% of pregnancies in the United States',
        'About 50% of women with gestational diabetes develop type 2 diabetes within 10 years',
        'Proper management reduces complication risk by 50-70%',
      ],
      patientCounselingPoints: [
        'Most women with gestational diabetes have healthy babies',
        'Monitoring blood sugar helps guide treatment decisions',
        'Healthy eating and exercise are the first treatments',
        'Get tested for diabetes 6-12 weeks after delivery',
      ],
    },
    2: {
      level: 2,
      summary: 'Gestational diabetes results from pregnancy-induced insulin resistance. Diagnosis uses either one-step or two-step approaches. Management includes glucose monitoring, dietary counseling, and insulin when needed. Metformin and glyburide are alternatives to insulin.',
      explanation: `## Gestational Diabetes Overview

### Pathophysiology

**Insulin Resistance:**
- Human placental lactogen (hPL)
- Progesterone
- Cortisol
- Tumor necrosis factor-alpha
- Leptin
- Increased adiposity

**Compensatory Response:**
- Beta-cell hyperplasia
- Increased insulin secretion
- Failure to compensate = GDM

### Risk Factors

**Strong:**
- Prior GDM
- BMI >30
- Family history of diabetes
- Prior macrosomic infant
- Polycystic ovary syndrome

**Moderate:**
- Age >25
- Ethnicity (Asian, Hispanic, African American, Native American)
- Prior unexplained stillbirth

### Screening and Diagnosis

**Timing:**
- 24-28 weeks gestation
- Earlier if high risk
- First prenatal visit if very high risk

**Two-Step Approach (Common in US):**

Step 1: 50g Glucose Challenge Test (GCT)
- No fasting required
- 1-hour plasma glucose
- >=130-140 mg/dL abnormal (cutoff varies)

Step 2: 100g OGTT if GCT abnormal
- Fasting required
- 3-hour test
- 2 or more abnormal values = GDM

**One-Step Approach (IADPSG/WHO):**
- 75g OGTT
- Fasting required
- One or more abnormal values:
  - Fasting >=92 mg/dL
  - 1-hour >=180 mg/dL
  - 2-hour >=153 mg/dL

### Maternal Complications

**Pregnancy:**
- Preeclampsia (2-3x risk)
- Cesarean delivery
- Polyhydramnios
- Preterm labor

**Long-term:**
- Type 2 diabetes (50% within 10 years)
- Cardiovascular disease
- Recurrent GDM (30-50%)
- Metabolic syndrome

### Fetal/Neonatal Complications

**Fetal:**
- Macrosomia (shoulder dystocia risk)
- Polyhydramnios
- Congenital anomalies (if pregestational)

**Neonatal:**
- Hypoglycemia
- Respiratory distress syndrome
- Hyperbilirubinemia
- Hypocalcemia
- Polycythemia

**Long-term offspring:**
- Obesity
- Type 2 diabetes
- Metabolic syndrome

### Glycemic Targets

**Fasting:** <95 mg/dL
**1-hour postprandial:** <140 mg/dL
**2-hour postprandial:** <120 mg/dL

### Non-Pharmacologic Management

**Medical Nutrition Therapy:**
- Carbohydrate counting
- Consistent carbohydrate intake
- 3 meals + 2-3 snacks
- Low glycemic index foods
- Caloric needs based on BMI

**Exercise:**
- 30 minutes moderate activity daily
- Walking, swimming
- After meals helps glucose
- Contraindications evaluated

**Glucose Monitoring:**
- Fasting daily
- Postprandial (1 or 2 hour)
- Pattern management
- Keep log

### Pharmacologic Management

**Insulin (First-Line):**
- Does not cross placenta
- Multiple types (NPH, regular, rapid-acting)
- Basal-bolus regimen common
- Dose titration

**Metformin:**
- Crosses placenta but appears safe
- Alternative to insulin
- Less effective than insulin
- May need insulin addition

**Glyburide:**
- Alternative to insulin
- Less preferred than metformin
- Can cause neonatal hypoglycemia

**Contraindicated:**
- Oral hypoglycemic agents (other than metformin/glyburide)
- Statins
- ACE inhibitors
- ARBs

### Monitoring

**Maternal:**
- Weekly to biweekly visits
- Blood pressure
- Urine protein
- Fetal movement counts
- Weight gain
- Ketones (if on insulin)

**Fetal:**
- Growth ultrasounds (every 3-4 weeks)
- Amniotic fluid assessment
- NST starting 32 weeks (if on meds or poor control)
- BPP if indicated

### Delivery Timing

**Well-controlled:**
- Diet: 39-40 weeks
- Medications: 39 weeks

**Poorly controlled:**
- Earlier based on situation
- Individualized

**Route:**
- Vaginal preferred
- C-section if macrosomia (>4500g with GDM, >5000g without)
- Estimated fetal weight by ultrasound

### Intrapartum Management

**Glucose Management:**
- Target 70-110 mg/dL
- Regular insulin drip or
- Subcutaneous rapid-acting
- Hourly checks

**Neonatal Care:**
- Glucose monitoring
- Early feeding
- Hypoglycemia treatment
- Observation 24-48 hours

### Postpartum Care

**Glucose Testing:**
- 75g OGTT at 6-12 weeks
- Fasting glucose
- HbA1c
- Diagnose diabetes, prediabetes, or normal

**Breastfeeding:**
- Encouraged
- Reduces postpartum glucose
- May require less insulin
- Metformin compatible

**Contraception:**
- Discuss before discharge
- Estrogen may affect glucose
- Progestin-only acceptable
- IUDs safe

**Long-term Follow-up:**
- Lifestyle counseling
- Annual diabetes screening
- Weight management
- Exercise program`,
      keyTerms: [
        { term: 'OGTT', definition: 'Oral Glucose Tolerance Test' },
        { term: 'macrosomia', definition: 'Birth weight >4000-4500g' },
        { term: 'shoulder dystocia', definition: 'Difficulty delivering baby\'s shoulders after head is out' },
        { term: 'polyhydramnios', definition: 'Too much amniotic fluid' },
        { term: 'basal-bolus', definition: 'Insulin regimen with long-acting and rapid-acting insulin' },
      ],
      clinicalNotes: 'The Hyperglycemia and Adverse Pregnancy Outcome (HAPO) study established continuous associations between maternal glucose levels and adverse outcomes, leading to the IADPSG diagnostic criteria that use lower thresholds than traditional criteria.',
    },
    3: {
      level: 3,
      summary: 'Gestational diabetes management requires multidisciplinary care including nutrition, endocrinology, and maternal-fetal medicine. Preconception counseling for women with prior GDM is essential. Long-term follow-up focuses on diabetes prevention through lifestyle modification.',
      explanation: `## Advanced GDM Management

### Specialized Care

**Indications for MFM Referral:**
- Poor glycemic control
- Insulin requirement
- Type 1 or Type 2 diabetes
- Complications
- Fetal growth concerns

**Team Approach:**
- OB/GYN
- MFM specialist
- Diabetes educator
- Registered dietitian
- Endocrinologist
- Neonatology

### Insulin Management

**Types:**

Rapid-acting (lispro, aspart, glulisine):
- Before meals
- Corrects postprandial spikes
- Category B

Short-acting (regular):
- Before meals
- Less expensive
- Category B

Intermediate (NPH):
- Basal coverage
- Twice daily
- Category B

Long-acting (glargine, detemir):
- Once or twice daily
- Less hypoglycemia
- Category C (human data reassuring)

**Regimens:**
- Basal-bolus (most common)
- Split-mixed
- Pump therapy (experienced users)

**Titration:**
- Based on glucose patterns
- Increase by 10-20%
- Check for hypoglycemia
- Adjust as pregnancy progresses

### Continuous Glucose Monitoring (CGM)

**Benefits:**
- Real-time glucose data
- Pattern recognition
- Reduced HbA1c
- Less hypoglycemia

**Use in Pregnancy:**
- Increasing adoption
- Especially for Type 1
- Supplement to fingersticks
- Insurance coverage variable

### Prediabetes Recognition

**Early Pregnancy Screening:**
- Obese women
- Prior GDM
- Strong family history
- Early GDM diagnosis

**Criteria:**
- HbA1c 5.7-6.4%
- Fasting 100-125 mg/dL
- Earlier intervention

### Preconception Counseling

**For Women with Prior GDM:**
- Weight loss if overweight
- Exercise program
- Screen for diabetes
- Metformin if prediabetic
- Folate supplementation
- Early GDM screening

**Risk Reduction:**
- 30% risk reduction with lifestyle
- Metformin may reduce recurrence
- Pre-pregnancy BMI optimization

### Complicated Cases

**Type 1 Diabetes in Pregnancy:**
- Preconception counseling essential
- HbA1c <6.5% before conception
- Increased surveillance
- Higher complication risk
- Tight glucose control

**Type 2 Diabetes in Pregnancy:**
- Stop oral agents (except metformin/glyburide)
- Insulin often needed
- Earlier fetal surveillance
- Congenital anomaly risk

**Steroid-Induced Hyperglycemia:**
- Betamethasone for fetal maturity
- Significant glucose rise
- Insulin management
- Temporary increase

### Long-Term Outcomes

**Maternal:**
- 50% type 2 diabetes at 10 years
- Cardiovascular disease risk
- Recurrent GDM 30-70%
- Metabolic syndrome

**Offspring:**
- Obesity risk
- Impaired glucose tolerance
- Type 2 diabetes risk
- Cardiovascular risk

**Prevention:**
- Lifestyle intervention
- Breastfeeding
- Regular screening
- Weight management`,
      keyTerms: [
        { term: 'CGM', definition: 'Continuous glucose monitoring system' },
        { term: 'HbA1c', definition: 'Hemoglobin A1c; measure of average glucose over 3 months' },
        { term: 'MFM', definition: 'Maternal-fetal medicine; high-risk pregnancy specialist' },
        { term: 'betamethasone', definition: 'Steroid given to mature fetal lungs' },
        { term: 'congenital anomaly', definition: 'Birth defect present at birth' },
      ],
      clinicalNotes: 'Women with gestational diabetes have a 50% risk of developing type 2 diabetes within 10 years. Lifestyle intervention can reduce this risk by approximately 30-50%, making postpartum counseling and follow-up essential.',
    },
    4: {
      level: 4,
      summary: 'Complex GDM management includes insulin pump therapy during pregnancy, management of diabetic ketoacidosis (rare but serious), and strategies for women with obesity. Postpartum care transitions focus on long-term diabetes prevention programs.',
      explanation: `## Complex GDM Topics

### Insulin Pump Therapy

**During Pregnancy:**
- Experienced users continue
- Basal rate adjustments
- Carb ratios change
- Increased insulin needs 2nd/3rd trimester
- Postpartum decrease

**Benefits:**
- Better control
- Flexibility
- Reduced hypoglycemia
- Data tracking

**Challenges:**
- Sites (abdomen vs hip)
- Morning sickness
- Cost
- Training required

### Diabetic Ketoacidosis (DKA) in Pregnancy

**Risk Factors:**
- Hyperemesis
- Infection
- Steroids
- Beta-agonists
- Insulin omission
- Dehydration

**Presentation:**
- Normal or mildly elevated glucose
- Classic symptoms
- Anion gap metabolic acidosis
- Ketosis

**Treatment:**
- Aggressive fluid resuscitation
- Insulin drip
- Electrolyte replacement
- Fetal monitoring
- ICU level care

**Prognosis:**
- High fetal mortality if untreated
- Prompt treatment essential
- Can occur at lower glucose levels

### Obesity and GDM

**Interactions:**
- Higher GDM risk
- Worse glycemic control
- Higher insulin requirements
- More complications
- Difficult glucose monitoring

**Management:**
- Calorie restriction (not aggressive)
- Nutritional counseling
- Exercise modifications
- Consider metformin early
- Higher insulin doses

**Delivery Considerations:**
- Anesthetic risks
- Surgical risks
- Wound infection
- Thromboprophylaxis

### Ethnic and Cultural Considerations

**Higher Risk Groups:**
- Asian (especially South Asian)
- Hispanic/Latina
- African American
- Native American
- Pacific Islander

**Cultural Food Patterns:**
- Individualize nutrition counseling
- Cultural competence
- Interpreter services
- Community resources

### Quality Metrics

**Process:**
- Screening rates
- Diagnosis timeliness
- Education completion
- Glucose monitoring frequency
- Visit adherence

**Outcomes:**
- Mean glucose levels
- HbA1c
- Large for gestational age rate
- Cesarean rate
- Neonatal hypoglycemia

### Telemedicine

**Applications:**
- Remote monitoring
- Virtual visits
- Glucose data review
- Dietary counseling
- Reduces visits

**Benefits:**
- Access
- Convenience
- Cost
- Satisfaction

**Limitations:**
- Technology access
- Physical exam
- Disparities

### Postpartum Programs

**Diabetes Prevention:**
- Lifestyle intervention (DPP)
- 7% weight loss goal
- 150 minutes exercise weekly
- Structured programs

**Breastfeeding Support:**
- Lactation consultant
- Benefits for glucose
- Insulin adjustments
- Continuation support

**Long-term Monitoring:**
- Annual glucose testing
- HbA1c
- Cardiovascular risk
- Reproductive counseling`,
      keyTerms: [
        { term: 'DKA', definition: 'Diabetic ketoacidosis; life-threatening hyperglycemic emergency' },
        { term: 'anion gap', definition: 'Calculated value in metabolic acidosis' },
        { term: 'thromboprophylaxis', definition: 'Prevention of blood clots' },
        { term: 'DPP', definition: 'Diabetes Prevention Program' },
        { term: 'carb ratio', definition: 'Insulin-to-carbohydrate ratio for dosing' },
      ],
      clinicalNotes: 'DKA in pregnancy can occur at lower glucose levels than in non-pregnant patients, often around 200 mg/dL. Pregnant patients with diabetes who present with nausea, vomiting, or signs of dehydration should be evaluated for DKA even if glucose is not extremely elevated.',
    },
    5: {
      level: 5,
      summary: 'Expert GDM care involves novel biomarkers for early detection, personalized medicine approaches, and population-level interventions to reduce GDM incidence. Research into the developmental origins of health and disease (DOHaD) informs long-term prevention strategies.',
      explanation: `## Expert Topics

### Novel Biomarkers

**First Trimester Prediction:**
- Fasting glucose
- HbA1c
- Adipokines
- Inflammatory markers
- Metabolomics

**Early Detection:**
- Screen high-risk women early
- Earlier intervention
- Better outcomes

**Microbiome:**
- Gut bacteria and GDM
- Potential intervention target
- Probiotics
- Fecal transplant (research)

### Personalized Medicine

**Genetics:**
- GDM risk genes
- Pharmacogenomics
- Insulin dosing
- Metformin response

**Precision Nutrition:**
- Glycemic response prediction
- Individualized diets
- Continuous monitoring
- AI-driven recommendations

### Population Health

**Prevention Strategies:**
- Preconception programs
- Weight management
- Exercise promotion
- Community interventions

**Policy:**
- Screening guidelines
- Insurance coverage
- Workplace accommodations
- Maternity leave

**Disparities:**
- Access to care
- Food insecurity
- Safe exercise spaces
- Cultural factors
- Addressing social determinants

### Developmental Origins

**DOHaD (Barker Hypothesis):**
- Fetal programming
- Adult disease risk
- Transgenerational effects
- GDM effects on offspring

**Mechanisms:**
- Epigenetic changes
- Metabolic programming
- Beta-cell development
- Obesity pathways

**Interventions:**
- In utero environment
- Breastfeeding
- Early childhood nutrition
- Multi-generational impact

### Research Frontiers

**In Utero Treatment:**
- Metformin in pregnancy
- Effects on offspring
- Long-term follow-up
- MiG trial results

**Continuous Monitoring:**
- Artificial pancreas
- Closed-loop systems
- Pregnancy-specific algorithms
- Automated insulin delivery

**Prevention Trials:**
- Myoinositol
- Probiotics
- Lifestyle
- Metformin preconception

**Stem Cell Therapy:**
- Beta-cell regeneration
- Future possibility
- Research stage

### Global Health

**Burden:**
- Rising rates worldwide
- Obesity epidemic
- Nutrition transition
- Resource limitations

**Solutions:**
- Simplified protocols
- Task-shifting
- Telemedicine
- Community health workers
- Cost-effective approaches

**LMIC Challenges:**
- Glucose monitoring access
- Insulin availability
- Training
- Follow-up

### Future Directions

**Technology:**
- Wearable sensors
- AI prediction models
- Digital therapeutics
- Remote monitoring

**Treatment:**
- New medications
- Targeted therapies
- Immunomodulation
- Gene therapy

**Prevention:**
- Precision prevention
- Multi-level interventions
- Policy changes
- Environmental modifications`,
      keyTerms: [
        { term: 'DOHaD', definition: 'Developmental Origins of Health and Disease' },
        { term: 'epigenetic', definition: 'Changes in gene expression without DNA sequence changes' },
        { term: 'closed-loop', definition: 'Automated insulin delivery system' },
        { term: 'myoinositol', definition: 'Supplement studied for GDM prevention' },
        { term: 'LMIC', definition: 'Low- and middle-income countries' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. All pregnant women should be screened for gestational diabetes at 24-28 weeks. High-risk women should be screened in the first trimester and again at 24-28 weeks if initial screen negative.

2. Glycemic targets in pregnancy are lower than non-pregnant adults: fasting <95 mg/dL, 1-hour <140 mg/dL, 2-hour <120 mg/dL.

3. Insulin is the first-line pharmacologic treatment for GDM as it does not cross the placenta. Metformin and glyburide are alternatives but cross the placenta and may be less effective.

4. Women with GDM have 50% risk of type 2 diabetes within 10 years. Postpartum testing at 6-12 weeks and regular screening thereafter is essential.

5. The HAPO study showed continuous associations between maternal glucose and adverse outcomes, leading to the IADPSG diagnostic criteria with lower thresholds than traditional criteria.`,
    },
  },

  media: [
    {
      id: 'gdm-pathophysiology',
      type: 'diagram',
      filename: 'gdm-pathophysiology.svg',
      title: 'Gestational Diabetes Pathophysiology',
      description: 'Insulin resistance in pregnancy',
    },
  ],

  citations: [
    {
      id: 'hapo-study',
      type: 'article',
      title: 'Hyperglycemia and Adverse Pregnancy Outcome (HAPO) Study',
      authors: ['HAPO Study Cooperative Research Group'],
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-preeclampsia-pathology', targetType: 'condition', relationship: 'related', label: 'Preeclampsia' },
    { targetId: 'reproductive-ectopic-pregnancy', targetType: 'condition', relationship: 'related', label: 'Ectopic Pregnancy' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['pathology', 'obstetrics', 'endocrinology'],
    keywords: ['gestational diabetes', 'GDM', 'insulin', 'glucose', 'pregnancy diabetes'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default gestationalDiabetes;
