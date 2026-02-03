import { EducationalContent } from '../../types';

export const preeclampsia: EducationalContent = {
  id: 'obgyn-preeclampsia',
  type: 'condition',
  name: 'Preeclampsia',
  nameEs: 'Preeclampsia',
  alternateNames: ['Toxemia of Pregnancy', 'Pregnancy-Induced Hypertension with Proteinuria'],
  hpoId: 'HP:0100602',
  levels: {
    1: {
      level: 1,
      summary: 'Preeclampsia is a serious pregnancy condition where the mother develops high blood pressure and organ damage, usually after 20 weeks of pregnancy.',
      explanation:
        'During pregnancy, some women develop dangerously high blood pressure along with problems in organs like the kidneys or liver. ' +
        'This is called preeclampsia. Warning signs include bad headaches that do not go away, seeing spots or blurry vision, ' +
        'pain in the upper belly (near the ribs), sudden swelling of the face or hands, and very high blood pressure readings. ' +
        'Preeclampsia can be dangerous for both mom and baby. The only cure is delivering the baby, so doctors must balance ' +
        'the baby\'s need to grow with the mother\'s safety.',
      keyTerms: [
        { term: 'Blood pressure', definition: 'The force of blood pushing against the walls of your arteries' },
        { term: 'Preeclampsia', definition: 'A pregnancy complication with high blood pressure and signs of organ damage', pronunciation: 'pree-eh-KLAMP-see-uh' },
      ],
      analogies: ['Preeclampsia is like a warning light on your car dashboard — it signals that something under the hood needs urgent attention.'],
      patientCounselingPoints: [
        'Report severe headaches, vision changes, or upper abdominal pain immediately.',
        'Attend all prenatal visits so blood pressure can be monitored.',
        'Take low-dose aspirin if recommended by your doctor for prevention.',
      ],
    },
    2: {
      level: 2,
      summary: 'Preeclampsia is defined as new-onset hypertension (>=140/90) after 20 weeks with proteinuria or end-organ dysfunction; severe features include BP >=160/110, thrombocytopenia, or liver/renal impairment.',
      explanation:
        '**Diagnosis:**\n' +
        '- BP >=140/90 on two occasions 4 hours apart after 20 weeks\n' +
        '- PLUS proteinuria (>=300 mg/24h or protein/creatinine ratio >=0.3) OR end-organ dysfunction\n\n' +
        '**Severe Features (any one):**\n' +
        '- BP >=160/110, platelets <100,000, liver transaminases >2x normal\n' +
        '- Creatinine >1.1 mg/dL or doubling, pulmonary edema, new-onset headache or visual disturbances\n\n' +
        '**Risk Factors:**\n' +
        '- Nulliparity, prior preeclampsia, chronic HTN, diabetes, kidney disease, autoimmune disorders\n' +
        '- Multiple gestation, obesity, AMA, family history\n\n' +
        '**Management:**\n' +
        '- Without severe features at >=37 weeks: delivery recommended\n' +
        '- With severe features at >=34 weeks: delivery after stabilization\n' +
        '- <34 weeks with severe features: magnesium sulfate (seizure prophylaxis) + corticosteroids for fetal lung maturity + expectant management if stable\n' +
        '- Antihypertensives: IV labetalol, IV hydralazine, or PO nifedipine for acute severe HTN',
      keyTerms: [
        { term: 'Proteinuria', definition: 'Excess protein in the urine, indicating kidney stress from preeclampsia' },
        { term: 'Magnesium sulfate', definition: 'Medication given IV to prevent seizures (eclampsia) in women with preeclampsia' },
        { term: 'Eclampsia', definition: 'New-onset seizures in a preeclamptic patient, a life-threatening emergency' },
      ],
      examples: ['A 32-year-old at 35 weeks with BP 165/105, headache, and platelets of 85,000 has preeclampsia with severe features requiring delivery after magnesium and corticosteroids.'],
    },
    3: {
      level: 3,
      summary: 'Preeclampsia is a placenta-mediated disorder of abnormal spiral artery remodeling leading to endothelial dysfunction, managed with timed delivery, magnesium sulfate, and antihypertensives, with HELLP syndrome as a severe variant.',
      explanation:
        '**Pathophysiology:**\n' +
        '- Stage 1 (preclinical): inadequate trophoblast invasion of spiral arteries -> reduced placental perfusion\n' +
        '- Stage 2 (clinical): placental hypoxia releases anti-angiogenic factors (sFlt-1) into maternal circulation -> widespread endothelial dysfunction\n' +
        '- Result: vasoconstriction, increased vascular permeability, end-organ damage\n\n' +
        '**HELLP Syndrome:**\n' +
        '- Hemolysis (schistocytes, elevated LDH, low haptoglobin)\n' +
        '- Elevated Liver enzymes (AST/ALT >2x ULN)\n' +
        '- Low Platelets (<100,000)\n' +
        '- Occurs in 10-20% of severe preeclampsia; can develop without hypertension in ~15% of cases\n' +
        '- Complications: DIC, placental abruption, hepatic rupture, acute renal failure\n\n' +
        '**Magnesium Sulfate Protocol:**\n' +
        '- Loading: 4-6 g IV over 20-30 min\n' +
        '- Maintenance: 1-2 g/hr IV\n' +
        '- Therapeutic range: 4.8-8.4 mg/dL\n' +
        '- Monitor: reflexes (lost at 10 mg/dL), respiratory rate (depressed at 12 mg/dL), urine output\n' +
        '- Antidote: calcium gluconate 1 g IV\n\n' +
        '**Prevention:**\n' +
        '- Low-dose aspirin 81 mg daily starting 12-28 weeks (optimally before 16 weeks) in high-risk patients\n' +
        '- ASPRE trial: 62% reduction in preterm preeclampsia with first-trimester aspirin in screened population',
      keyTerms: [
        { term: 'HELLP syndrome', definition: 'Severe preeclampsia variant with Hemolysis, Elevated Liver enzymes, and Low Platelets' },
        { term: 'Spiral artery remodeling', definition: 'Process where trophoblasts invade and dilate maternal uterine arteries to increase placental blood flow; defective in preeclampsia' },
        { term: 'sFlt-1', definition: 'Soluble fms-like tyrosine kinase-1; anti-angiogenic protein released by the hypoxic placenta, central to preeclampsia pathogenesis' },
      ],
      clinicalNotes: 'HELLP can present without significant hypertension — a high index of suspicion is needed. Calcium gluconate must be at bedside whenever magnesium is infusing.',
    },
    4: {
      level: 4,
      summary: 'Advanced preeclampsia management involves angiogenic biomarkers for diagnosis and prognosis, expectant management protocols for early-onset disease, and postpartum surveillance for cardiovascular risk.',
      explanation:
        '**Angiogenic Biomarkers:**\n' +
        '- sFlt-1/PlGF ratio: <38 rules out PE within 1 week (NPV 99.3%); >85 rules in preterm PE, >110 rules in term PE\n' +
        '- Aids diagnosis in equivocal cases (chronic HTN + superimposed PE, atypical presentations)\n' +
        '- Cost-effective: reduces unnecessary admissions (PARROT trial: 37% reduction in time to PE diagnosis)\n\n' +
        '**Early-Onset Preeclampsia (<34 weeks):**\n' +
        '- Expectant management at tertiary centers with NICU capability\n' +
        '- Daily assessment: symptoms, BP, labs q12-24h (CBC, LFTs, creatinine, LDH)\n' +
        '- Deliver for: uncontrollable severe HTN, eclampsia, HELLP, pulmonary edema, abruption, non-reassuring FHR\n' +
        '- Betamethasone 12 mg IM x 2 doses 24h apart for fetal lung maturity\n' +
        '- MgSO4 for neuroprotection if <32 weeks\n\n' +
        '**Postpartum Considerations:**\n' +
        '- BP may worsen 3-6 days postpartum; monitor for 72 hours minimum\n' +
        '- Postpartum preeclampsia/eclampsia can occur up to 6 weeks after delivery\n' +
        '- Long-term: 2x lifetime risk of cardiovascular disease, 4x risk of chronic HTN\n' +
        '- ACOG recommends annual cardiovascular risk assessment and lifestyle counseling\n\n' +
        '**Recurrence:**\n' +
        '- Risk of recurrence in subsequent pregnancy: 15-25% (higher if early-onset)\n' +
        '- Aspirin 81-162 mg starting before 16 weeks in subsequent pregnancies',
      keyTerms: [
        { term: 'sFlt-1/PlGF ratio', definition: 'Angiogenic biomarker ratio for preeclampsia diagnosis and short-term prognosis; <38 rules out, >85/>110 rules in' },
        { term: 'Expectant management', definition: 'Careful monitoring with delayed delivery to gain fetal maturity in early-onset preeclampsia without immediate delivery indications' },
        { term: 'Neuroprotection', definition: 'Magnesium sulfate given before 32 weeks to reduce risk of cerebral palsy in premature neonates' },
      ],
      clinicalNotes: 'The sFlt-1/PlGF ratio is incorporated into NICE and ISSHP guidelines. Postpartum cardiovascular risk is under-recognized — preeclampsia is a window into future CVD.',
    },
    5: {
      level: 5,
      summary: 'Expert-level preeclampsia science integrates two-stage placental disease models, immunologic tolerance failure, single-cell transcriptomics of the placental bed, and investigational therapies targeting angiogenic imbalance.',
      explanation:
        '**Immunologic Mechanisms:**\n' +
        '- Inadequate HLA-C/KIR interaction: certain maternal KIR AA genotypes + paternal HLA-C2 increase risk\n' +
        '- Impaired uterine NK cell-mediated spiral artery remodeling\n' +
        '- Regulatory T cell deficit at the maternal-fetal interface\n' +
        '- Complement dysregulation: elevated C5a, reduced complement regulatory proteins\n\n' +
        '**Single-Cell and Spatial Transcriptomics:**\n' +
        '- scRNA-seq of decidua reveals altered stromal-immune cell communication in PE\n' +
        '- Spatial transcriptomics maps placental villous vs. decidual gene expression\n' +
        '- Extravillous trophoblast subtypes with defective invasion signatures identified\n\n' +
        '**Investigational Therapeutics:**\n' +
        '- Therapeutic apheresis: sFlt-1 removal via dextran sulfate adsorption columns (proof of concept, prolonged pregnancy by ~8 days in pilot)\n' +
        '- Pravastatin: restores angiogenic balance in animal models; human RCTs ongoing\n' +
        '- siRNA targeting sFlt-1 (placenta-targeted nanoparticles): preclinical\n' +
        '- Metformin: may reduce sFlt-1 secretion; secondary analyses show reduced PE in GDM patients\n\n' +
        '**Prediction Models:**\n' +
        '- First-trimester combined (FMF): MAP + UtA-PI + PAPP-A + PlGF; DR 75% for preterm PE at 10% FPR\n' +
        '- Machine learning integrating clinical, biochemical, and ultrasound data achieves AUC >0.90\n' +
        '- Polygenic risk scores incorporating GWA loci under development\n\n' +
        '**Long-Term Epigenetic Legacy:**\n' +
        '- Offspring of preeclamptic pregnancies show altered DNA methylation in cardiometabolic genes\n' +
        '- Increased cardiovascular risk in both mothers and offspring across the lifespan',
      keyTerms: [
        { term: 'KIR/HLA-C interaction', definition: 'Killer immunoglobulin-like receptor and HLA-C genotype combinations that modulate uterine NK cell function and spiral artery remodeling' },
        { term: 'Therapeutic apheresis', definition: 'Extracorporeal removal of sFlt-1 from maternal blood using adsorption columns to prolong pregnancy in early-onset PE' },
        { term: 'Extravillous trophoblast', definition: 'Placental cells that invade the decidua and remodel spiral arteries; defective invasion is central to preeclampsia' },
      ],
      clinicalNotes: 'Therapeutic sFlt-1 apheresis remains investigational (SAVE trial). Pravastatin trials are ongoing but promising. The two-hit model (genetic susceptibility + placental insult) best explains disease heterogeneity.',
    },
  },
  media: [],
  citations: [
    { id: 'rana-pe-2019', type: 'article', title: 'Preeclampsia: Pathophysiology, Challenges, and Perspectives', source: 'Circulation Research', authors: ['Rana, S.', 'Lemoine, E.', 'Granger, J.P.', 'Karumanchi, S.A.'] },
  ],
  crossReferences: [
    { targetId: 'obgyn-gestational-diabetes', targetType: 'condition', relationship: 'sibling', label: 'Gestational Diabetes' },
    { targetId: 'obgyn-prenatal-care', targetType: 'topic', relationship: 'related', label: 'Prenatal Care' },
    { targetId: 'obgyn-labor-management', targetType: 'topic', relationship: 'related', label: 'Labor and Delivery Management' },
  ],
  tags: {
    systems: ['reproductive', 'cardiovascular', 'renal'],
    topics: ['maternal-fetal-medicine', 'hypertension', 'obstetric-emergency'],
    keywords: ['preeclampsia', 'HELLP', 'eclampsia', 'magnesium sulfate', 'sFlt-1', 'PlGF', 'pregnancy hypertension'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['ob-gyn', 'medicine', 'emergency-medicine'] },
  },
  createdAt: '2025-06-01',
  updatedAt: '2025-06-01',
  version: 1,
  status: 'published',
};
