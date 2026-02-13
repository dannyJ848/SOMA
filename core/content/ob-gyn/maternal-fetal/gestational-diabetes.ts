import { EducationalContent } from '../../types';

export const gestationalDiabetes: EducationalContent = {
  id: 'obgyn-gestational-diabetes',
  type: 'condition',
  name: 'Gestational Diabetes Mellitus',
  nameEs: 'Diabetes Gestacional',
  alternateNames: ['GDM', 'Gestational Diabetes'],
  levels: {
    1: {
      level: 1,
      summary: 'Gestational diabetes is a type of diabetes that develops during pregnancy when the body cannot make enough insulin to handle the extra demands of growing a baby.',
      explanation:
        'When you are pregnant, your body needs more insulin (a hormone that controls blood sugar) than usual. ' +
        'In gestational diabetes, the body cannot keep up, so blood sugar levels get too high. This usually develops ' +
        'around 24-28 weeks of pregnancy. High blood sugar can make the baby grow too large, which can cause problems ' +
        'during delivery. It can also affect the baby\'s blood sugar after birth. The good news is that gestational diabetes ' +
        'can usually be managed with healthy eating, exercise, and sometimes medication.',
      keyTerms: [
        { term: 'Insulin', definition: 'A hormone made by the pancreas that helps sugar move from the blood into cells for energy' },
        { term: 'Blood sugar (glucose)', definition: 'The main sugar in your blood that comes from food and gives your body energy' },
      ],
      analogies: ['Insulin is like a key that opens cell doors for sugar to enter; in gestational diabetes, pregnancy changes the locks so the keys do not work as well.'],
      patientCounselingPoints: [
        'Gestational diabetes is not your fault — it is caused by pregnancy hormones.',
        'Checking blood sugar at home and following your meal plan are very important.',
        'Gestational diabetes usually goes away after delivery, but you need follow-up testing.',
      ],
    },
    2: {
      level: 2,
      summary: 'GDM is diagnosed via glucose tolerance testing at 24-28 weeks, managed with diet/exercise as first line, and insulin or metformin when targets are not met.',
      explanation:
        '**Screening (24-28 weeks):**\n' +
        '- Two-step (most common in US): 1-hr 50g GCT; if >=130-140 mg/dL -> 3-hr 100g OGTT\n' +
        '- 3-hr OGTT thresholds (Carpenter-Coustan): fasting >=95, 1h >=180, 2h >=155, 3h >=140; need >=2 abnormal values\n' +
        '- One-step (IADPSG): 2-hr 75g OGTT; fasting >=92, 1h >=180, 2h >=153; 1 abnormal value diagnostic\n\n' +
        '**Glucose Targets:**\n' +
        '- Fasting: <95 mg/dL\n' +
        '- 1-hour postprandial: <140 mg/dL\n' +
        '- 2-hour postprandial: <120 mg/dL\n\n' +
        '**Management:**\n' +
        '- Medical nutrition therapy: 3 meals + 2-3 snacks, 30-40% carbohydrates, complex carbs preferred\n' +
        '- Exercise: 30 min moderate activity most days\n' +
        '- Insulin: first-line pharmacotherapy if diet fails; rapid-acting (lispro, aspart) + intermediate (NPH)\n' +
        '- Metformin/glyburide: alternatives but cross placenta; metformin increasingly accepted\n\n' +
        '**Fetal Risks:**\n' +
        '- Macrosomia (>4000g), shoulder dystocia, neonatal hypoglycemia, respiratory distress, jaundice',
      keyTerms: [
        { term: 'Glucose challenge test (GCT)', definition: 'Screening test where blood sugar is measured 1 hour after drinking a 50g glucose solution' },
        { term: 'Macrosomia', definition: 'A baby weighing over 4000g (8 lb 13 oz) at birth, more common with poorly controlled GDM' },
        { term: 'Medical nutrition therapy', definition: 'Structured meal planning with controlled carbohydrate intake to manage blood sugar in GDM' },
      ],
    },
    3: {
      level: 3,
      summary: 'GDM pathophysiology involves placental hormones causing progressive insulin resistance; management requires glycemic monitoring, pharmacotherapy escalation, and antepartum surveillance for macrosomia and fetal compromise.',
      explanation:
        '**Pathophysiology:**\n' +
        '- Normal pregnancy: insulin resistance increases 50-60% by third trimester (human placental lactogen, progesterone, cortisol, TNF-alpha)\n' +
        '- GDM: pre-existing beta-cell dysfunction unmasked by pregnancy insulin resistance\n' +
        '- Pedersen hypothesis: maternal hyperglycemia -> fetal hyperinsulinemia -> macrosomia + metabolic complications\n\n' +
        '**Antepartum Surveillance:**\n' +
        '- Diet-controlled: weekly NST starting 36-40 weeks (varies by institution)\n' +
        '- Medication-controlled or poorly controlled: weekly NST/BPP starting 32 weeks\n' +
        '- Serial growth ultrasounds q4 weeks to monitor for macrosomia or growth restriction\n\n' +
        '**Delivery Timing:**\n' +
        '- Diet-controlled: delivery by 39-40+6 weeks; may await spontaneous labor\n' +
        '- Medication-controlled: delivery at 39+0-39+6 weeks\n' +
        '- Poorly controlled or estimated fetal weight >=4500g: consider cesarean delivery\n\n' +
        '**Postpartum:**\n' +
        '- 2-hr 75g OGTT at 4-12 weeks postpartum to screen for persistent diabetes\n' +
        '- 50% lifetime risk of developing T2DM\n' +
        '- Screen every 1-3 years thereafter\n' +
        '- Breastfeeding may reduce future T2DM risk',
      keyTerms: [
        { term: 'Pedersen hypothesis', definition: 'Maternal hyperglycemia leads to fetal hyperinsulinemia, driving excessive fetal growth and neonatal metabolic complications' },
        { term: 'Human placental lactogen (hPL)', definition: 'Placental hormone that induces maternal insulin resistance to ensure glucose delivery to the fetus' },
        { term: 'Beta-cell dysfunction', definition: 'Impaired insulin secretion from pancreatic beta cells, the underlying defect unmasked by pregnancy in GDM' },
      ],
      clinicalNotes: 'The one-step vs. two-step screening debate remains unresolved. The one-step approach diagnoses more cases but whether treatment of milder cases improves outcomes is uncertain (ARRIVE-related questions).',
    },
    4: {
      level: 4,
      summary: 'Advanced GDM management integrates continuous glucose monitoring, pharmacokinetic considerations for insulin analogs in pregnancy, and risk stratification for preeclampsia comorbidity and long-term cardiometabolic programming.',
      explanation:
        '**Continuous Glucose Monitoring (CGM):**\n' +
        '- Real-time CGM (Dexcom, Libre) increasingly used in GDM\n' +
        '- CONCEPTT trial (T1DM): CGM reduced neonatal complications; GDM-specific data emerging\n' +
        '- Time in range (63-140 mg/dL) target: >70% with <4% time below range\n' +
        '- May reduce HbA1c and macrosomia rates compared to SMBG alone\n\n' +
        '**Insulin Pharmacology in Pregnancy:**\n' +
        '- Rapid-acting: lispro and aspart do not cross placenta significantly; category B\n' +
        '- Long-acting: detemir (category B) preferred over glargine (limited data) in pregnancy\n' +
        '- Total daily insulin dose: typically 0.7-1.0 U/kg in first trimester, rising to 1.0-2.0 U/kg in third trimester\n' +
        '- Insulin requirements may drop abruptly near term (placental insufficiency sign)\n\n' +
        '**Comorbidity with Preeclampsia:**\n' +
        '- GDM increases PE risk 1.5-2x independently of BMI\n' +
        '- Shared pathways: endothelial dysfunction, inflammation, oxidative stress\n' +
        '- Low-dose aspirin recommended for GDM patients with additional PE risk factors\n\n' +
        '**Fetal Programming:**\n' +
        '- In utero hyperglycemia exposure programs offspring for childhood obesity and metabolic syndrome\n' +
        '- HAPO Follow-Up Study: maternal glucose levels on a continuous spectrum predict offspring adiposity at age 10-14\n' +
        '- Epigenetic modifications at adiponectin, LEP, and PPARGC1A loci in cord blood',
      keyTerms: [
        { term: 'Continuous glucose monitoring', definition: 'Wearable device providing real-time interstitial glucose readings every 1-5 minutes, enabling detailed glycemic profiling' },
        { term: 'Fetal programming', definition: 'In utero environmental exposures (like hyperglycemia) that permanently alter offspring metabolic and cardiovascular risk' },
        { term: 'Time in range', definition: 'Percentage of time glucose stays within target (63-140 mg/dL in pregnancy), an emerging glycemic metric from CGM data' },
      ],
      clinicalNotes: 'A sudden drop in insulin requirements in the third trimester should raise concern for placental insufficiency. CGM is increasingly used but not yet universally recommended for GDM.',
    },
    5: {
      level: 5,
      summary: 'Expert-level GDM science encompasses beta-cell genomics, placental metabolomics, microbiome-driven insulin resistance, and precision approaches to postpartum T2DM prevention.',
      explanation:
        '**Genetic Susceptibility:**\n' +
        '- GDM shares >50% of T2DM risk loci: TCF7L2, CDKAL1, MTNR1B, KCNJ11, GCK\n' +
        '- MTNR1B rs10830963: melatonin receptor variant impairing insulin secretion — associated with higher fasting glucose in GCT\n' +
        '- Polygenic risk scores combining T2DM loci predict GDM with modest discrimination (AUC ~0.65)\n\n' +
        '**Placental Metabolomics:**\n' +
        '- Altered lipid profiles: increased ceramides, sphingomyelin, and branched-chain amino acids in GDM placentae\n' +
        '- Placental exosomes carry altered miRNA cargo (miR-101, miR-125b) affecting skeletal muscle insulin signaling\n' +
        '- Placental glucose transporter (GLUT1) expression correlates with fetal growth trajectory\n\n' +
        '**Gut Microbiome:**\n' +
        '- GDM-associated dysbiosis: reduced Faecalibacterium, increased Ruminococcus and Collinsella\n' +
        '- Short-chain fatty acid profiles altered, contributing to systemic inflammation\n' +
        '- Probiotic supplementation (Lactobacillus + Bifidobacterium) shows modest glucose improvement in RCTs\n\n' +
        '**Postpartum T2DM Prevention:**\n' +
        '- DPP (Diabetes Prevention Program): intensive lifestyle reduces progression by 58%\n' +
        '- Metformin: 31% reduction; less effective than lifestyle in younger/higher BMI women\n' +
        '- GLP-1 receptor agonists under study for postpartum weight/metabolic management\n' +
        '- Breastfeeding for >=6 months associated with 40-50% reduced T2DM risk (SWIFT cohort)\n\n' +
        '**Closed-Loop Systems:**\n' +
        '- Hybrid closed-loop insulin delivery (CamAPS FX) tested in T1DM pregnancy with promising results\n' +
        '- Potential application in insulin-requiring GDM; trials ongoing',
      keyTerms: [
        { term: 'TCF7L2', definition: 'Strongest common genetic risk factor for T2DM, also associated with GDM; affects beta-cell function and incretin signaling' },
        { term: 'Placental exosomes', definition: 'Extracellular vesicles released by the placenta carrying miRNA cargo that modulates maternal insulin sensitivity' },
        { term: 'Closed-loop insulin delivery', definition: 'Automated system combining CGM with an algorithm-driven insulin pump for real-time glucose management' },
      ],
      clinicalNotes: 'Polygenic risk scores for GDM are not yet clinically actionable but may enable first-trimester risk stratification in future. The MTNR1B variant has implications for melatonin-based chronotherapy. Closed-loop systems represent the frontier for insulin-requiring GDM management.',
    },
  },
  media: [],
  citations: [
    { id: 'hapo-2008', type: 'article', title: 'Hyperglycemia and Adverse Pregnancy Outcomes (HAPO)', source: 'New England Journal of Medicine', authors: ['HAPO Study Cooperative Research Group'] },
  ],
  crossReferences: [
    { targetId: 'obgyn-preeclampsia', targetType: 'condition', relationship: 'sibling', label: 'Preeclampsia' },
    { targetId: 'obgyn-prenatal-care', targetType: 'topic', relationship: 'related', label: 'Prenatal Care' },
    { targetId: 'obgyn-labor-management', targetType: 'topic', relationship: 'related', label: 'Labor and Delivery Management' },
  ],
  tags: {
    systems: ['reproductive', 'endocrine'],
    topics: ['maternal-fetal-medicine', 'diabetes', 'metabolic'],
    keywords: ['gestational diabetes', 'GDM', 'glucose tolerance', 'macrosomia', 'insulin', 'pregnancy diabetes'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['ob-gyn', 'medicine'] },
  },
  createdAt: '2025-06-01',
  updatedAt: '2025-06-01',
  version: 1,
  status: 'published',
};
