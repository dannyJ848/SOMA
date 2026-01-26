/**
 * Gestational Diabetes Mellitus
 *
 * Comprehensive content on GDM pathophysiology, screening, diagnosis, and management.
 */

import { EducationalContent } from '../../../types';

export const GESTATIONAL_DIABETES: EducationalContent = {
  id: 'endocrine-diabetes-gestational',
  type: 'condition',
  name: 'Gestational Diabetes Mellitus',
  alternateNames: ['GDM', 'Pregnancy diabetes', 'Diabetes in pregnancy'],

  levels: {
    1: {
      level: 1,
      summary: 'Gestational diabetes is high blood sugar that develops during pregnancy in women who did not have diabetes before becoming pregnant.',
      explanation: `During pregnancy, your body goes through many changes to help your baby grow. Sometimes, these changes can make it harder for your body to use insulin properly, causing blood sugar to rise too high.

**What happens:**
- Your body needs more insulin during pregnancy
- Sometimes your body cannot make enough extra insulin
- Blood sugar gets too high
- This usually goes away after the baby is born

**Why it matters:**
- High blood sugar can affect your baby's growth
- Babies may grow too large, making delivery harder
- Both mom and baby have higher risk of getting Type 2 diabetes later

**Treatment:**
- Healthy eating with careful attention to carbohydrates
- Regular physical activity (like walking)
- Checking blood sugar several times a day
- Some women need insulin shots
- Regular doctor visits to monitor mom and baby

**Good news:**
Most women with gestational diabetes have healthy babies when they follow their treatment plan!`,
      keyTerms: [
        { term: 'gestational', definition: 'Related to pregnancy' },
        { term: 'blood sugar', definition: 'The amount of sugar (glucose) in your blood' },
        { term: 'insulin', definition: 'A hormone that helps your body use sugar for energy' },
      ],
      analogies: [
        'During pregnancy, your body is like a busy factory that needs extra fuel. Sometimes the factory cannot keep up with the increased demand.',
        'Insulin is like a key that opens doors to let sugar into your cells. In gestational diabetes, the locks get sticky and need more keys.',
      ],
      examples: [
        'A pregnant woman takes a sugar drink test at her prenatal visit and finds out she has gestational diabetes.',
        'A mother with gestational diabetes checks her blood sugar before and after meals to keep her baby healthy.',
      ],
    },
    2: {
      level: 2,
      summary: 'Gestational diabetes mellitus (GDM) is glucose intolerance first recognized during pregnancy, caused by pregnancy-related insulin resistance that exceeds the body\'s compensatory insulin secretion capacity.',
      explanation: `Gestational diabetes affects approximately 6-9% of pregnancies in the United States. It typically develops in the second or third trimester when pregnancy hormones create significant insulin resistance.

**Pathophysiology:**
- Placental hormones (hPL, estrogen, progesterone, cortisol) create insulin resistance
- Normal pregnancy requires 2-3 times more insulin than non-pregnant state
- GDM occurs when beta cells cannot meet increased insulin demand
- Blood sugar rises, especially after meals

**Risk Factors:**
- Overweight or obese before pregnancy (BMI ≥25)
- Previous gestational diabetes
- Family history of Type 2 diabetes
- Age ≥25 years
- Ethnic background (Hispanic, Black, Asian, Pacific Islander, Native American)
- Polycystic ovary syndrome (PCOS)
- Previous large baby (≥9 lbs/4 kg)

**Screening and Diagnosis:**
*One-Step Approach (75g OGTT):*
- Fasting ≥92 mg/dL, or
- 1-hour ≥180 mg/dL, or
- 2-hour ≥153 mg/dL
(One abnormal value = diagnosis)

*Two-Step Approach:*
- Step 1: 50g glucose challenge (non-fasting), 1-hour ≥130-140 mg/dL = screen positive
- Step 2: 100g OGTT if screen positive
  - Fasting ≥95 mg/dL
  - 1-hour ≥180 mg/dL
  - 2-hour ≥155 mg/dL
  - 3-hour ≥140 mg/dL
(Two or more abnormal values = diagnosis)

**Complications:**
*For Mother:*
- Preeclampsia
- Cesarean delivery
- Future Type 2 diabetes (50% lifetime risk)

*For Baby:*
- Macrosomia (large baby)
- Shoulder dystocia
- Neonatal hypoglycemia
- Respiratory distress
- Future obesity and diabetes risk`,
      keyTerms: [
        { term: 'glucose intolerance', definition: 'Difficulty processing sugar properly, resulting in elevated blood sugar' },
        { term: 'macrosomia', definition: 'A baby that is significantly larger than average (usually >4000g or 8.8 lbs)' },
        { term: 'OGTT', definition: 'Oral glucose tolerance test; a diagnostic test measuring blood sugar response to a glucose drink' },
        { term: 'preeclampsia', definition: 'A serious pregnancy complication with high blood pressure and protein in urine' },
        { term: 'neonatal hypoglycemia', definition: 'Low blood sugar in a newborn baby' },
      ],
      analogies: [
        'The placenta releases hormones that act like blockers, making it harder for insulin to unlock cells. The pancreas must work overtime to compensate.',
        'GDM screening is like checking if your car can handle a hill - we give a glucose load and see if your body can process it.',
      ],
    },
    3: {
      level: 3,
      summary: 'Gestational diabetes mellitus results from physiologic insulin resistance of pregnancy exceeding beta cell compensatory capacity. Management focuses on glycemic control through lifestyle modification and pharmacotherapy when needed, with attention to both maternal and fetal outcomes.',
      explanation: `**Pathophysiology of Pregnancy-Related Insulin Resistance:**

*Hormonal Contributors:*
- Human placental lactogen (hPL): Major contributor to insulin resistance
- Progesterone: Impairs insulin signaling
- Cortisol: Increases gluconeogenesis
- Prolactin: Contributes to insulin resistance
- TNF-alpha: Placental production increases in GDM

*Metabolic Changes:*
- Insulin sensitivity decreases 50-60% by third trimester
- Normal pregnancy: Beta cells increase insulin secretion 2-3 fold
- GDM: Inadequate beta cell response (often preexisting dysfunction unmasked)
- Hepatic glucose production increases
- Lipolysis increases, elevating free fatty acids

**Diagnostic Criteria:**

*IADPSG/ADA One-Step (preferred by ADA):*
| Time | Threshold |
|------|-----------|
| Fasting | ≥92 mg/dL (5.1 mmol/L) |
| 1-hour | ≥180 mg/dL (10.0 mmol/L) |
| 2-hour | ≥153 mg/dL (8.5 mmol/L) |

*Carpenter-Coustan Two-Step (still widely used in US):*
| Time | Threshold |
|------|-----------|
| Fasting | ≥95 mg/dL |
| 1-hour | ≥180 mg/dL |
| 2-hour | ≥155 mg/dL |
| 3-hour | ≥140 mg/dL |

*Screening Timing:*
- Universal screening: 24-28 weeks gestation
- High-risk patients: Early screening at first prenatal visit
- If early screening negative: Repeat at 24-28 weeks

**Management:**

*Glycemic Targets (ADA):*
| Time | Target |
|------|--------|
| Fasting | <95 mg/dL |
| 1-hour postprandial | <140 mg/dL |
| 2-hour postprandial | <120 mg/dL |

*Lifestyle Intervention:*
- Medical nutrition therapy (MNT): First-line treatment
- Carbohydrate counting: 175g/day minimum, distributed across meals/snacks
- Avoid high glycemic index foods
- Physical activity: 30 minutes moderate intensity most days
- Self-monitoring of blood glucose (SMBG): Fasting + postprandial

*Pharmacotherapy:*
- Insulin: Gold standard when lifestyle insufficient
  - Often NPH + rapid-acting analog (lispro or aspart)
  - Does not cross placenta
- Metformin: Crosses placenta; short-term safety data reassuring
- Glyburide: Crosses placenta; associated with higher neonatal hypoglycemia

**Fetal Surveillance:**
- Growth ultrasounds: Monitor for macrosomia
- Non-stress testing: Starting 32-34 weeks if on medication or poor control
- Delivery timing: 39-40 weeks if well-controlled; earlier if complications

**Postpartum:**
- Screen for persistent diabetes at 4-12 weeks postpartum (75g OGTT)
- Breastfeeding encouraged (may reduce diabetes risk)
- Lifelong screening for Type 2 diabetes (every 1-3 years)`,
      keyTerms: [
        { term: 'human placental lactogen', definition: 'Hormone produced by placenta that creates insulin resistance to ensure fetal glucose supply' },
        { term: 'IADPSG', definition: 'International Association of Diabetes and Pregnancy Study Groups; developed widely-used diagnostic criteria' },
        { term: 'medical nutrition therapy', definition: 'Evidence-based dietary intervention customized for disease management' },
        { term: 'non-stress test', definition: 'Fetal monitoring test evaluating heart rate patterns in response to movement' },
        { term: 'shoulder dystocia', definition: 'Obstetric emergency where fetal shoulders are impacted after head delivery' },
      ],
      clinicalNotes: 'The choice of one-step vs two-step screening remains controversial. One-step identifies more cases but may lead to overtreatment. Two-step is more specific. Most US practices use two-step, while international guidelines favor one-step. Insulin remains preferred pharmacotherapy due to lack of placental transfer, though metformin use is increasing.',
    },
    4: {
      level: 4,
      summary: 'GDM represents a continuum of beta cell dysfunction unmasked by pregnancy-induced insulin resistance. Pathophysiology involves disrupted insulin signaling pathways, adipokine dysregulation, and placental hormone effects. Management balances glycemic control against maternal/fetal risks.',
      explanation: `**Molecular Pathophysiology:**

*Insulin Signaling Disruption:*
- TNF-alpha: Serine phosphorylation of IRS-1 (inhibitory)
- Free fatty acids: Activate PKC, impairing insulin receptor signaling
- hPL: Downregulates insulin receptor substrate
- Placental growth hormone: Induces hepatic insulin resistance

*Adipokine Dysregulation:*
- Adiponectin: Decreased in GDM (normally insulin-sensitizing)
- Leptin: Elevated (associated with insulin resistance)
- Resistin: Elevated in GDM
- Visfatin: Altered placental expression

*Beta Cell Adaptations:*
- Normal pregnancy: Beta cell mass increases 1.4-2.4 fold
- Mechanisms: Proliferation (prolactin/hPL via JAK2/STAT5), decreased apoptosis
- GDM: Impaired adaptive expansion
- Genetic factors: TCF7L2, CDKAL1, KCNJ11 variants associated with GDM

**Hyperglycemia in Pregnancy (HAPO) Study Findings:**

Continuous associations between maternal glucose and:
| Outcome | Association |
|---------|-------------|
| Birth weight >90th percentile | Linear with fasting and post-load glucose |
| Primary cesarean | 1.11 OR per 1-SD glucose increase |
| Neonatal hypoglycemia | Strong association |
| Cord C-peptide >90th percentile | Strongest correlation (fetal hyperinsulinemia) |

*Clinical Implication:* No clear threshold; even mild hyperglycemia increases risks

**Treatment Evidence:**

*Landmark Trials:*
- ACHOIS (2005): Treatment of mild GDM reduced serious perinatal complications (1% vs 4%)
- Landon Trial (2009): Treatment reduced macrosomia, shoulder dystocia, cesarean, preeclampsia

*Insulin Regimen:*
- Starting dose: 0.7-1.0 units/kg/day (increases through pregnancy)
- Distribution: ~50% basal (NPH or long-acting analog), ~50% prandial
- Rapid-acting analogs: Lispro and aspart preferred (faster absorption)
- Insulin requirements may double by third trimester

*Metformin (MiG Trial):*
- Non-inferior to insulin for glycemic control
- 46% required supplemental insulin
- Neonatal outcomes similar
- Long-term offspring outcomes: MiG TOFU shows slightly higher BMI at 2 years

**Fetal Complications - Pathophysiology:**

*Pedersen Hypothesis:*
Maternal hyperglycemia → Fetal hyperglycemia (glucose crosses placenta) → Fetal hyperinsulinemia → Macrosomia + complications

*Organ-Specific Effects:*
- Heart: Asymmetric septal hypertrophy (insulin-mediated)
- Lung: Delayed surfactant production (insulin inhibits)
- Liver: Hepatomegaly, elevated iron storage
- Hematopoietic: Polycythemia (hypoxia-driven)

**Postpartum Diabetes Risk:**

*Progression to T2DM:*
- 15-60% within 5-15 years (varies by population)
- Highest risk: Higher gestational glucose, early diagnosis, insulin requirement

*Prevention Strategies:*
- Diabetes Prevention Program: Lifestyle intervention reduced progression 58%
- Metformin: 50% reduction in DPP (particularly effective post-GDM)
- Breastfeeding: Associated with reduced maternal diabetes risk

**Preexisting Diabetes vs GDM:**

*Key Distinctions:*
| Feature | Preexisting | GDM |
|---------|-------------|-----|
| Timing | First trimester or pre-pregnancy | >24 weeks |
| First trimester HbA1c | Often elevated | Normal |
| Congenital anomalies | Increased if uncontrolled | Not increased |
| Management | Preconception care essential | Screen-diagnosed |`,
      keyTerms: [
        { term: 'HAPO study', definition: 'Hyperglycemia and Adverse Pregnancy Outcome study; established continuous glucose-risk relationships' },
        { term: 'Pedersen hypothesis', definition: 'Theory that maternal hyperglycemia causes fetal hyperinsulinemia, driving macrosomia and complications' },
        { term: 'TCF7L2', definition: 'Transcription factor 7-like 2; strongest common genetic variant for T2DM, also associated with GDM' },
        { term: 'asymmetric septal hypertrophy', definition: 'Thickening of the cardiac septum in infants of diabetic mothers; caused by fetal hyperinsulinemia' },
        { term: 'MiG Trial', definition: 'Metformin in Gestational diabetes trial; established metformin as alternative to insulin' },
      ],
      clinicalNotes: 'The debate over diagnostic criteria (one-step vs two-step) reflects uncertainty about the optimal balance between detecting all at-risk pregnancies and avoiding overdiagnosis. One-step (IADPSG) criteria based on HAPO data identify ~18% of pregnancies as GDM, vs 5-7% with two-step. Long-term offspring outcomes from intervention trials will help clarify benefits.',
    },
    5: {
      level: 5,
      summary: 'GDM pathogenesis involves complex placental-maternal metabolic crosstalk, epigenetic programming, and genetic susceptibility intersecting with pregnancy physiology. Emerging evidence addresses transgenerational effects, precision approaches to management, and novel therapeutic targets.',
      explanation: `**Advanced Pathophysiological Mechanisms:**

*Placental Dysfunction:*
- Altered glucose transporter expression (GLUT1 upregulation)
- Placental oxidative stress: Mitochondrial dysfunction, ROS generation
- Inflammasome activation: NLRP3 contributes to insulin resistance
- Placental microRNAs: Altered profile affects maternal metabolism

*Epigenetic Programming:*
- Intrauterine hyperglycemia programs offspring metabolism
- DNA methylation changes in genes: IGF2, LEP, ADIPOQ
- Histone modifications in metabolic genes
- Persistence into adulthood → transgenerational diabetes risk

*Gut Microbiome:*
- Altered composition in GDM (decreased diversity)
- Reduced Faecalibacterium, increased Parabacteroides
- Metabolite changes affect insulin sensitivity
- Potential therapeutic target

**Genetic Architecture:**

*GDM-Associated Loci (GWAS findings):*
| Gene | Function | Effect |
|------|----------|--------|
| TCF7L2 | Wnt signaling, beta cell | Strongest association |
| GCK | Glucokinase | Glucose sensing |
| MTNR1B | Melatonin receptor | Insulin secretion |
| CDKAL1 | tRNA modification | Beta cell function |
| IRS1 | Insulin signaling | Insulin sensitivity |
| KCNJ11/ABCC8 | K-ATP channel | Insulin secretion |

*Monogenic Forms in Pregnancy:*
- MODY (especially GCK-MODY): May present as apparent GDM
- GCK-MODY: Stable, mild fasting hyperglycemia
  - If fetus inherits mutation: Do not treat (risks hypoglycemia)
  - If fetus does not inherit: Treat to prevent macrosomia

**Advanced Management Considerations:**

*Continuous Glucose Monitoring:*
- CONCEPTT trial (T1DM) showed benefits; extrapolation to GDM ongoing
- Reveals glycemic variability not captured by SMBG
- Emerging data supports use in insulin-treated GDM
- Targets: Time in range (63-140 mg/dL) >70%

*Pharmacotherapy Nuances:*

Metformin Considerations:
- Crosses placenta (fetal levels ~50% of maternal)
- MiG TOFU: Offspring have higher BMI at 2 years, 9 years
- Mechanism may involve placental AMPK activation
- Some guidelines caution against first-line use

Insulin Analogs Safety:
| Analog | Placental Transfer | Safety Data |
|--------|-------------------|-------------|
| Lispro | Minimal | Extensive, reassuring |
| Aspart | Minimal | Extensive, reassuring |
| Glulisine | Minimal | Limited data |
| Glargine | None detected | Reassuring (off-label) |
| Detemir | Minimal | FDA pregnancy category B |
| Degludec | Limited data | Avoid in pregnancy |

*Intrapartum Management:*
- Target glucose 70-110 mg/dL during labor
- IV dextrose with insulin infusion if needed
- Neonatal glucose monitoring for 24-48 hours

**Long-Term Outcomes:**

*Maternal Cardiovascular Risk:*
- GDM independently associated with CVD (2x risk)
- Mechanism: Shared risk factors + vascular dysfunction during pregnancy
- Screening recommended beyond diabetes

*Offspring Programming:*
- EPOCH study: GDM exposure → increased offspring BMI, adiposity
- Greater effect than obesity alone
- Epigenetic mechanisms confirmed in human studies
- Potential for transgenerational transmission

**Emerging Approaches:**

*Prediction and Prevention:*
- First trimester risk models (adipokines, metabolomics)
- Myo-inositol supplementation: May reduce GDM incidence
- Probiotics: Mixed evidence, some benefit in high-risk

*Novel Therapeutic Targets:*
- FGF21 analogs: Improve insulin sensitivity
- GLP-1 RAs: Not currently used in pregnancy (teratogenicity concerns)
- Adiponectin mimetics: Preclinical

*Precision Medicine:*
- Genetic risk scores for GDM
- Subtyping based on pathophysiology (insulin-deficient vs resistant)
- Personalized treatment based on phenotype

**Controversies and Future Directions:**

*Diagnostic Threshold Debate:*
- IADPSG criteria increase GDM prevalence 2-3 fold
- HAPO showed continuous risk, but treatment benefit unclear at lower glucose
- Need RCTs of treatment at different thresholds

*Treatment Intensity:*
- Optimal glycemic targets not definitively established
- Risks of overtreatment (maternal hypoglycemia, small for gestational age)
- Individualization based on fetal growth patterns

*Long-term Treatment Comparison:*
- Ongoing studies: Insulin vs metformin offspring outcomes at 10+ years
- Bariatric surgery before pregnancy: Reduces GDM but SGA risk`,
      keyTerms: [
        { term: 'epigenetic programming', definition: 'Heritable changes in gene expression without DNA sequence alteration; mediates in utero environmental effects' },
        { term: 'GCK-MODY', definition: 'Glucokinase mutations causing mild stable fasting hyperglycemia; management differs from typical GDM' },
        { term: 'transgenerational effects', definition: 'Health impacts transmitted across multiple generations through epigenetic or other mechanisms' },
        { term: 'EPOCH study', definition: 'Exploring Perinatal Outcomes among Children study; demonstrated lasting metabolic effects of in utero hyperglycemia' },
        { term: 'myo-inositol', definition: 'Inositol isoform that may improve insulin sensitivity; investigated for GDM prevention' },
      ],
      clinicalNotes: 'GDM management continues to evolve. Key clinical considerations: (1) Consider monogenic diabetes in atypical presentations; (2) Long-term metformin offspring outcomes warrant attention when counseling; (3) Postpartum follow-up is critical but often neglected; (4) GDM is a window into future cardiometabolic risk for both mother and child. Emerging precision approaches may allow tailored management based on underlying pathophysiology.',
    },
  },

  media: [
    {
      id: 'gdm-pathophysiology-1',
      type: 'diagram',
      filename: 'gdm-pathophysiology.svg',
      title: 'GDM Pathophysiology',
      description: 'Hormonal and metabolic changes leading to gestational diabetes',
    },
    {
      id: 'gdm-screening-algorithm-1',
      type: 'diagram',
      filename: 'gdm-screening-algorithm.svg',
      title: 'GDM Screening Approaches',
      description: 'One-step vs two-step screening protocols',
    },
  ],

  citations: [
    {
      id: 'hapo-study-2008',
      type: 'article',
      title: 'Hyperglycemia and Adverse Pregnancy Outcomes',
      authors: ['HAPO Study Cooperative Research Group'],
      source: 'N Engl J Med 2008;358:1991-2002',
      license: 'Copyrighted',
    },
    {
      id: 'ada-gdm-2024',
      type: 'article',
      title: 'Management of Diabetes in Pregnancy: Standards of Care',
      authors: ['American Diabetes Association Professional Practice Committee'],
      source: 'Diabetes Care 2024',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-diabetes-type2', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' },
    { targetId: 'endocrine-pcos', targetType: 'condition', relationship: 'related', label: 'Polycystic Ovary Syndrome' },
    { targetId: 'endocrine-insulin-types', targetType: 'topic', relationship: 'see-also', label: 'Insulin Types' },
    { targetId: 'endocrine-metabolic-syndrome', targetType: 'condition', relationship: 'related', label: 'Metabolic Syndrome' },
  ],

  tags: {
    systems: ['endocrine', 'reproductive'],
    topics: ['diabetes', 'pregnancy', 'maternal health'],
    keywords: ['GDM', 'gestational diabetes', 'pregnancy', 'glucose intolerance', 'macrosomia', 'OGTT'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'obstetrics'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
