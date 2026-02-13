/**
 * Diabetes Mellitus Comprehensive Encyclopedia Entry
 *
 * Transcribed from OpenStax Anatomy & Physiology Chapter 17 (CC BY 4.0)
 * and NCBI StatPearls (Open Access)
 *
 * Comprehensive coverage of diabetes pathophysiology, diagnosis, and management
 */

import type { EncyclopediaEntry } from '../types';

// ═══════════════════════════════════════════════════════════════════════════════
// DIABETES MELLITUS - MAIN ENTRY
// ═══════════════════════════════════════════════════════════════════════════════

export const diabetesMellitusEntry: EncyclopediaEntry = {
  entryId: 'diabetes-mellitus',
  name: 'Diabetes Mellitus',
  nameEs: 'Diabetes Mellitus',
  entryType: 'condition',
  category: 'endocrine',
  aliases: ['Diabetes', 'DM', 'Sugar Diabetes'],
  summary: 'A chronic metabolic disorder characterized by elevated blood glucose due to insulin deficiency, insulin resistance, or both, leading to microvascular and macrovascular complications.',
  overview: {
    patient: 'Diabetes mellitus, commonly called diabetes, is a condition where your blood sugar (glucose) is too high. This happens because your body either doesn\'t make enough insulin (a hormone that helps glucose enter cells) or can\'t use insulin properly. There are two main types: Type 1, where the body attacks and destroys insulin-producing cells, and Type 2, where the body becomes resistant to insulin. Over time, high blood sugar can damage your eyes, kidneys, nerves, and blood vessels. With proper management including diet, exercise, medication, and monitoring, people with diabetes can live healthy lives.',
    intermediate: 'Diabetes mellitus is a group of metabolic disorders characterized by chronic hyperglycemia resulting from defects in insulin secretion, insulin action, or both. Type 1 diabetes (5-10% of cases) is an autoimmune destruction of pancreatic beta cells leading to absolute insulin deficiency. Type 2 diabetes (90-95% of cases) involves progressive insulin resistance combined with relative insulin deficiency. Other forms include gestational diabetes (onset during pregnancy) and specific genetic/medication-induced types. Diagnostic criteria include fasting glucose ≥126 mg/dL, HbA1c ≥6.5%, 2-hour OGTT ≥200 mg/dL, or random glucose ≥200 mg/dL with symptoms. Chronic complications affect microvasculature (retinopathy, nephropathy, neuropathy) and macrovasculature (cardiovascular disease, stroke).',
    professional: 'Diabetes mellitus comprises a heterogeneous group of metabolic disorders unified by chronic hyperglycemia. Pathophysiology involves absolute or relative insulin deficiency, impaired insulin action, or both. Classification: Type 1 diabetes mellitus (T1DM) - autoimmune-mediated destruction of pancreatic beta cells (HLA-DR3/DR4, anti-GAD65, anti-IA-2, anti-ZnT8 antibodies), absolute insulin deficiency, ketosis-prone; Type 2 diabetes mellitus (T2DM) - insulin resistance (IRS-1/PI3K pathway defects, lipotoxicity, inflammation) with progressive beta cell dysfunction (amylin aggregation, ER stress, dedifferentiation); Gestational diabetes mellitus (GDM) - glucose intolerance first recognized during pregnancy (placental hormones, HPL, progesterone, cortisol induce insulin resistance); Other specific types: MODY (monogenic, HNF1A, GCK mutations), secondary (pancreatitis, Cushing\'s, acromegaly, medications). Diagnostic thresholds per ADA: FPG ≥126 mg/dL (7.0 mmol/L), HbA1c ≥6.5% (48 mmol/mol), 2h PG ≥200 mg/dL (11.1 mmol/L) during 75g OGTT, or RPG ≥200 mg/dL with classic symptoms. Microvascular complications (retinopathy, nephropathy, neuropathy) correlate with glycemic control; macrovascular complications (ASCVD) multifactorial.',
  },
  content: [
    {
      title: 'Types and Classification',
      content: {
        patient: `There are several types of diabetes:

TYPE 1 DIABETES: Your immune system mistakenly attacks and destroys the insulin-producing cells (beta cells) in your pancreas. Without insulin, your body can't use glucose for energy. This usually develops in children and young adults but can occur at any age. People with Type 1 need insulin injections every day to survive. It's not caused by diet or lifestyle.

TYPE 2 DIABETES: Your body becomes resistant to insulin, and eventually your pancreas can't make enough to keep up. This is the most common type (about 90-95% of cases). Risk factors include being overweight, family history, being over 45, physical inactivity, and certain ethnic backgrounds. Many people can manage Type 2 with diet, exercise, and oral medications, though some eventually need insulin.

GESTATIONAL DIABETES: Develops during pregnancy when hormones block insulin's action. It usually goes away after delivery, but increases the mother's risk of developing Type 2 diabetes later. Babies born to mothers with gestational diabetes may have health problems.

OTHER TYPES: Less common forms include genetic forms (MODY), diabetes from pancreas diseases (like pancreatitis), and medication-induced diabetes (from steroids).`,
        intermediate: `DIABETES CLASSIFICATION:

TYPE 1 DIABETES MELLITUS (T1DM): Autoimmune destruction of pancreatic beta cells leading to absolute insulin deficiency. Represents 5-10% of diabetes cases. Typically presents in childhood or adolescence but can occur at any age (LADA - latent autoimmune diabetes in adults). Characteristics: lean body habitus, polyuria/polydipsia/polyphagia with weight loss, ketosis-prone, requires exogenous insulin for survival. Associated with other autoimmune diseases (Hashimoto's thyroiditis, celiac disease, Addison's disease, pernicious anemia). Markers: anti-GAD65 (glutamic acid decarboxylase), anti-IA-2 (islet antigen 2), anti-insulin antibodies, anti-ZnT8 (zinc transporter 8). Genetic susceptibility: HLA-DR3-DQ2, HLA-DR4-DQ8 haplotypes.

TYPE 2 DIABETES MELLITUS (T2DM): Progressive disorder involving insulin resistance with relative insulin deficiency. Represents 90-95% of cases. Risk factors: obesity (especially visceral), sedentary lifestyle, age >45, family history, certain ethnicities (African American, Hispanic/Latino, Native American, Asian American, Pacific Islander), prior gestational diabetes, PCOS, hypertension, dyslipidemia. Usually insidious onset, diagnosed incidentally or with complications. Often preceded by prediabetes (impaired fasting glucose 100-125 mg/dL, impaired glucose tolerance 140-199 mg/dL, HbA1c 5.7-6.4%).

GESTATIONAL DIABETES MELLITUS (GDM): Glucose intolerance with onset or first recognition during pregnancy (not overt diabetes). Affects 2-10% of pregnancies. Pathophysiology: placental hormones (human placental lactogen, progesterone, cortisol, prolactin) induce insulin resistance; normally compensated by increased insulin secretion, but inadequate beta cell reserve leads to hyperglycemia. Screening at 24-28 weeks (1-hour 50g glucose challenge test, followed by 3-hour 100g OGTT if positive). Associated with macrosomia, birth trauma, neonatal hypoglycemia, preeclampsia. Women with GDM have 50% lifetime risk of developing T2DM.

OTHER SPECIFIC TYPES:
- Monogenic diabetes (MODY): Autosomal dominant, onset <25 years, non-ketotic. Common: HNF1A-MODY (sulfonylurea-sensitive), GCK-MODY (stable mild fasting hyperglycemia).
- Pancreatic disease-related: Pancreatitis, pancreatectomy, cystic fibrosis, hemochromatosis, pancreatic cancer.
- Endocrinopathies: Cushing's syndrome, acromegaly, pheochromocytoma, glucagonoma, hyperthyroidism.
- Drug/chemical induced: Glucocorticoids, thiazides, atypical antipsychotics, calcineurin inhibitors, protease inhibitors.
- Genetic syndromes: Down syndrome, Turner syndrome, Klinefelter syndrome, Wolfram syndrome.`,
        professional: `ETIOLOGIC CLASSIFICATION OF DIABETES MELLITUS (ADA):

TYPE 1 DIABETES MELLITUS:
Immune-mediated: T-cell mediated autoimmune destruction of beta cells. Genetic predisposition: HLA class II genes (DRB1*04-DQA1*0301-DQB1*0302 and DRB1*03-DQA1*0501-DQB1*0201 confer highest risk). Environmental triggers: enteroviruses (Coxsackie B), rotavirus, dietary factors, gut microbiome dysbiosis. Seroconversion of autoantibodies precedes clinical onset by months to years. Staging: Stage 1 (normoglycemia, ≥2 autoantibodies), Stage 2 (dysglycemia, ≥2 autoantibodies), Stage 3 (clinical diabetes). Beta cell mass reduced by 80-90% at diagnosis.

Idiopathic: Rare forms of T1DM without evidence of autoimmunity, often in African or Asian ancestry ("Flatbush diabetes" or "ketosis-prone type 2 diabetes"), may have episodic DKA but remit without insulin.

TYPE 2 DIABETES MELLITUS:
Multifactorial pathogenesis involving genetic and environmental factors. Genome-wide association studies identify >400 susceptibility loci (TCF7L2 strongest common variant). Pathophysiologic triad: (1) Insulin resistance - reduced glucose uptake in muscle, unrestrained hepatic gluconeogenesis, increased lipolysis in adipose; (2) Beta cell dysfunction - progressive failure of glucose-stimulated insulin secretion, loss of first-phase insulin response, inappropriate glucagon secretion; (3) Hepatic glucose overproduction. "Toxic triad" of glucotoxicity, lipotoxicity, and inflammation drives disease progression. Incretin defect: reduced GLP-1 secretion and resistance.

GESTATIONAL DIABETES MELLITUS:
Diagnosis criteria (IADPSG/ADA 75g OGTT at 24-28 weeks): FPG ≥92 mg/dL, 1h ≥180 mg/dL, or 2h ≥153 mg/dL (any one abnormal). Pathophysiology reflects the "diabetogenic stress" of pregnancy: hPL (human placental lactogen) - growth hormone-like effects causing insulin resistance; progesterone - impairs GLUT4 translocation; cortisol - promotes gluconeogenesis; prolactin - beta cell adaptation. Beta cell mass normally increases 1.5-2 fold during pregnancy; failure of this compensatory expansion causes GDM.

MONOGENIC DIABETES (MODY):
Autosomal dominant inheritance, age of onset typically <25 years, non-ketotic, C-peptide positive. Most common:
- GCK-MODY (MODY2): Glucokinase mutations, reset glucose threshold (~8 mmol/L), stable mild fasting hyperglycemia since birth, low microvascular risk, no treatment needed.
- HNF1A-MODY (MODY3): Hepatocyte nuclear factor 1A mutations, progressive beta cell dysfunction, sulfonylurea hypersensitivity (excellent response to low-dose sulfonylureas).
- HNF4A-MODY (MODY1): Similar to HNF1A, may have macrosomia and neonatal hypoglycemia.

SECONDARY DIABETES:
Pancreatic: Chronic pancreatitis (calcification, exocrine insufficiency), cystic fibrosis-related diabetes (CFRD - partial insulin deficiency, unique complications), hemochromatosis (bronze diabetes), pancreatectomy.
Endocrine: Cushing's (cortisol → insulin resistance, gluconeogenesis), acromegaly (GH → anti-insulin), pheochromocytoma (catecholamines → glycogenolysis, insulin suppression), glucagonoma (diabetes + necrolytic migratory erythema + weight loss), hyperthyroidism.
Drug-induced: Glucocorticoids (most common - dose-dependent, affect hepatic glucose production), atypical antipsychotics (clozapine, olanzapine - weight gain + direct beta cell toxicity), calcineurin inhibitors (tacrolimus > cyclosporine), thiazide diuretics (hypokalemia reduces insulin secretion), statins (modest risk increase), protease inhibitors.`,
      },
    },
    {
      title: 'Pathophysiology and Insulin Action',
      content: {
        patient: `To understand diabetes, you need to understand how insulin normally works:

INSULIN'S NORMAL JOB: After you eat, glucose enters your blood. Your pancreas releases insulin, which acts like a key to unlock cells so glucose can enter and be used for energy. Insulin helps:
- Muscle and fat cells absorb glucose from blood
- Liver store glucose as glycogen for later use
- Prevent liver from making too much glucose

WHAT GOES WRONG IN DIABETES:
In Type 1: The immune system destroys insulin-producing cells, so no insulin is made.
In Type 2: Cells become resistant to insulin (the "key" doesn't work well), and the pancreas can't make enough extra insulin to compensate. Over time, the pancreas wears out and produces even less insulin.

Without enough working insulin, glucose builds up in the blood (high blood sugar), while cells starve for energy. The body tries to fix this by:
- Making you thirsty (to dilute the excess sugar)
- Making you urinate more (to get rid of excess sugar)
- Breaking down fat and muscle for energy (causing weight loss)`,
        intermediate: `NORMAL GLUCOSE HOMEOSTASIS:

Glucose is the primary energy source for the brain and red blood cells (obligate glucose users) and preferred fuel for most tissues. Normal fasting glucose: 70-100 mg/dL. Postprandial glucose rises but returns to baseline within 2-3 hours through coordinated hormonal regulation.

INSULIN SYNTHESIS AND SECRETION:
Beta cells in pancreatic islets synthesize insulin as preproinsulin → proinsulin → C-peptide + insulin (A and B chains). Secretion is glucose-dependent: Glucose enters beta cells via GLUT2 (high Km, matches plasma glucose). Glucokinase phosphorylates glucose → glycolysis → mitochondrial metabolism → ATP/ADP ratio increases → KATP channel closure (Kir6.2 + SUR1) → membrane depolarization → voltage-gated Ca2+ channel opening → Ca2+ influx → insulin granule exocytosis. "Amplifying pathway": glucose metabolism generates signals (NADPH, malonyl-CoA, mitochondrial factors) enhancing secretion independent of KATP.

INSULIN SIGNAL TRANSDUCTION:
Insulin receptor (INSR) is a heterotetrameric tyrosine kinase. Binding causes autophosphorylation → IRS-1/2 docking → PI3K activation (p85/p110) → PIP3 generation → PDK1/2 → Akt/PKB phosphorylation. Akt mediates: (1) GLUT4 translocation (AS160 phosphorylation) → glucose uptake in muscle and adipose; (2) Glycogen synthesis (GSK3 phosphorylation/inactivation → glycogen synthase activation); (3) Gluconeogenesis suppression (FOXO1 phosphorylation/exclusion from nucleus → PEPCK, G6Pase downregulation). Alternative pathway: Ras/MAPK for growth and gene transcription.

PATHOPHYSIOLOGY OF TYPE 1:
Autoimmune destruction of beta cells mediated by autoreactive CD8+ T cells, CD4+ Th1 cells, and autoantibodies. Insulitis (lymphocytic infiltration) precedes overt diabetes. Progressive loss of beta cell mass: Stage 1 (compensated autoimmunity), Stage 2 (dysglycemia), Stage 3 (clinical diabetes when <20% beta cell mass remains). Absolute insulin deficiency requires exogenous insulin.

PATHOPHYSIOLOGY OF TYPE 2:
Insulin resistance develops first (genetic + environmental), compensated by increased insulin secretion. Over time, beta cells fail ("beta cell exhaustion"). Mechanisms of insulin resistance: IRS-1 serine phosphorylation (by PKC, IKKβ, JNK activated by lipids/inflammation) blocks tyrosine phosphorylation; lipid intermediates (DAG, ceramides) interfere with signaling; inflammatory cytokines (TNF-α, IL-6) activate serine kinases. Beta cell dysfunction: amylin aggregation, ER stress, oxidative stress, mitochondrial dysfunction, dedifferentiation (beta cells revert to progenitor state), possibly viral infection or autoimmune component. Inappropriate glucagon secretion (loss of paracrine insulin suppression). Hepatic glucose overproduction unopposed.`,
        professional: `INTEGRATED PATHOPHYSIOLOGY OF GLUCOSE REGULATION:

BETA CELL FUNCTION AND GLUCOSE SENSING:
Glucokinase (GK) acts as the pancreatic glucose sensor (Km ~8 mM, matching fasting glucose). GK regulatory protein (GKRP) sequesters GK in nucleus at low glucose; glucose promotes GK release to cytoplasm. Metabolic coupling factors: NADPH from pentose phosphate pathway and malic enzyme; pyruvate cycling; mitochondrial signals (ATP, Ca2+, reactive oxygen species). "Metabolic amplification" accounts for ~70% of glucose-stimulated insulin secretion (GSIS) independent of KATP channels.

INSULIN RECEPTOR SIGNALING CASCADES:
INSR has two isoforms: INSR-A (fetal, growth-promoting, binds IGF-II) and INSR-B (metabolic, binds IRS proteins preferentially). Activation causes cross-phosphorylation of tyrosine residues in kinase domain (Tyr1158, 1162, 1163). IRS proteins (1-6) have PTB domain (binds phosphorylated NPEY motif) and YXXM motifs (bind p85 PI3K regulatory subunit). PI3K pathway: p110 catalytic subunit generates PIP3 from PIP2 → PDK1 phosphorylates Akt at Thr308 → mTORC2 phosphorylates Ser473 → fully active Akt. Akt substrates: AS160 (RabGAP, phosphorylation causes GLUT4 vesicle docking/fusion); GSK3α/β (phosphorylation inactivates, derepressing glycogen synthase); FOXO1 (phosphorylation causes nuclear exclusion, reducing gluconeogenic gene expression); TSC2 (mTORC1 activation); Bad (anti-apoptotic). MAPK pathway: Shc/Grb2/SOS complex activates Ras → Raf-1 → MEK1/2 → ERK1/2 → transcription factor phosphorylation (Elk-1, c-Fos) for growth and proliferation.

TISSUE-SPECIFIC INSULIN ACTION:
Skeletal muscle (40% body mass): Insulin increases GLUT4 translocation 10-20 fold, glucose primarily stored as glycogen (glycogen synthase activation, glycogen phosphorylase inhibition). Insulin stimulates protein synthesis (mTORC1 activation) and inhibits proteolysis.
Adipose tissue: GLUT4-mediated glucose uptake → lipogenesis (fatty acid synthase, acetyl-CoA carboxylase activation); hormone-sensitive lipase phosphorylation/inhibition (anti-lipolytic); increased LPL activity (clearance of circulating triglycerides).
Liver: Insulin suppresses glucose output (↓ gluconeogenesis: FOXO1 exclusion reduces PEPCK, G6Pase, PCK2; ↑ glycolysis: GKRP regulation, PFK2 activation; ↓ glycogenolysis: glycogen phosphorylase inhibition); promotes glycogen synthesis (dephosphorylation/activation of glycogen synthase); promotes lipogenesis (SREBP-1c activation → ACC, FAS, SCD1). Insulin is the main regulator of hepatic glucose production (HGP) - basal HGP ~2 mg/kg/min, suppressed by >80% after carbohydrate intake.

TYPE 1 DIABETES PATHOGENESIS:
Genetic susceptibility (HLA-DQ/DR) + environmental triggers → loss of self-tolerance → islet autoimmunity. Antigen presentation by dendritic cells/macrophages → autoreactive CD4+ T cell activation (Th1 phenotype producing IFN-γ, TNF-α) → CD8+ cytotoxic T cell recruitment → beta cell apoptosis via perforin/granzyme and Fas-FasL pathways. Autoantibodies (GAD65, IA-2, insulin, ZnT8) are markers but not pathogenic. Beta cell destruction rate variable: rapid in young children, slower in adults (LADA). "Honeymoon period" - partial remission after diagnosis due to residual beta cell function.

TYPE 2 DIABETES PATHOGENESIS:
"Ectopic lipid hypothesis" (Randle cycle modified): Elevated plasma FFA from adipose lipolysis → muscle: DAG activates novel PKC → serine phosphorylation of IRS-1 → insulin resistance; liver: ceramide accumulation → Akt inhibition → unrestrained HGP; beta cells: chronic lipid exposure ("lipotoxicity") → ceramide formation → ER stress → apoptosis.
"Inflammation hypothesis": Adipose tissue inflammation (obesity-associated) → macrophage infiltration (phenotypic switch from M2 to M1) → pro-inflammatory cytokine production (TNF-α, IL-6, IL-1β, MCP-1) → activation of IKKβ/NF-κB and JNK pathways → serine kinase activation → insulin resistance in multiple tissues. IL-1β impairs beta cell function directly.
"Glucotoxicity": Chronic hyperglycemia induces oxidative stress (mitochondrial superoxide generation) → DNA damage → PARP activation → GAPDH inhibition → glycolytic intermediates shunted to damaging pathways (AGE formation, PKC activation, hexosamine pathway). Beta cells particularly vulnerable due to low antioxidant defenses.
INCRETIN DEFECT: GLP-1 is L-cell derived hormone (ileum, colon) secreted in response to nutrients. In T2DM: reduced postprandial GLP-1 secretion (~30% decrease); impaired insulinotropic effect of GLP-1 ("beta cell GLP-1 resistance"); paradoxically elevated glucagon response to glucose (normally suppressed by hyperglycemia + GLP-1).`,
      },
    },
    {
      title: 'Diagnosis Criteria',
      content: {
        patient: `Diabetes is diagnosed through blood tests:

FASTING PLASMA GLUCOSE (FPG): Blood drawn after not eating for at least 8 hours.
- Normal: Less than 100 mg/dL
- Prediabetes: 100-125 mg/dL
- Diabetes: 126 mg/dL or higher

HEMOGLOBIN A1c (HbA1c): Shows average blood sugar over past 2-3 months.
- Normal: Less than 5.7%
- Prediabetes: 5.7% - 6.4%
- Diabetes: 6.5% or higher

ORAL GLUCOSE TOLERANCE TEST (OGTT): Blood drawn after fasting, then you drink a sugary drink, and blood is drawn again after 2 hours.
- Normal: Less than 140 mg/dL at 2 hours
- Prediabetes: 140-199 mg/dL
- Diabetes: 200 mg/dL or higher

RANDOM PLASMA GLUCOSE: Blood drawn at any time, regardless of when you last ate.
- Diabetes: 200 mg/dL or higher WITH symptoms (increased thirst, frequent urination, weight loss, blurred vision)

Usually, a diagnosis requires two abnormal tests on different days, unless there are clear symptoms of high blood sugar.`,
        intermediate: `DIAGNOSTIC CRITERIA FOR DIABETES MELLITUS (ADA Standards of Medical Care):

Any one of the following criteria met on two separate occasions (unless unequivocal symptoms present):
1. Fasting Plasma Glucose (FPG) ≥126 mg/dL (7.0 mmol/L) after at least 8 hours of no caloric intake
2. Hemoglobin A1c (HbA1c) ≥6.5% (48 mmol/mol) using NGSP-certified assay standardized to DCCT
3. 2-hour Plasma Glucose (2h PG) ≥200 mg/dL (11.1 mmol/L) during 75g Oral Glucose Tolerance Test (OGTT)
4. Random Plasma Glucose ≥200 mg/dL (11.1 mmol/L) in a patient with classic symptoms of hyperglycemia or hyperglycemic crisis

PREDIABETES CATEGORIES (Increased risk for diabetes and cardiovascular disease):
- Impaired Fasting Glucose (IFG): FPG 100-125 mg/dL (5.6-6.9 mmol/L)
- Impaired Glucose Tolerance (IGT): 2h PG 140-199 mg/dL (7.8-11.0 mmol/L) during OGTT
- HbA1c 5.7-6.4% (39-46 mmol/mol)

TEST CHARACTERISTICS:

Fasting Plasma Glucose: Convenient, reproducible. Fasting required. Misses some diabetes cases (postprandial hyperglycemia).

HbA1c: No fasting required; reflects 2-3 month average glycemia (weighted toward recent weeks). Affected by conditions altering red blood cell turnover: falsely low with anemia (iron deficiency, hemolysis), chronic blood loss, pregnancy, hemoglobin variants; falsely high with iron deficiency without anemia, splenectomy, certain hemoglobinopathies. Not recommended for cystic fibrosis, suspected type 1, pregnancy (use OGTT), HIV treatment.

OGTT: Most sensitive for detecting diabetes and prediabetes. Cumbersome, less reproducible. Used for gestational diabetes diagnosis and when FPG/A1c inconclusive.

Random Glucose: Useful in acute settings with symptomatic hyperglycemia. Requires confirmation unless unequivocal hyperglycemia with classic symptoms.

SCREENING RECOMMENDATIONS: Asymptomatic adults age 35+ should be screened. Earlier/more frequent if overweight (BMI ≥25, or ≥23 in Asian Americans) AND additional risk factors: first-degree relative with diabetes, high-risk ethnicity, history of GDM or baby >9 lbs, hypertension, dyslipidemia (HDL <35 or TG >250), PCOS, physical inactivity, or conditions associated with insulin resistance (acanthosis nigricans, severe obesity).`,
        professional: `DIAGNOSTIC CONSIDERATIONS AND SPECIAL POPULATIONS:

TEST SELECTION AND INTERPRETATION:
Fasting Plasma Glucose: Reproducibility CV ~5-10%. Threshold 126 mg/dL corresponds to HbA1c ~6.5% and 2h PG ~200 mg/dL. Consider postprandial testing in IFG patients (20-30% have isolated IGT). FPG ≥110 mg/dL in presence of symptoms highly suggestive.

HbA1c Assay Considerations: NGSP certification ensures traceability to DCCT reference. Methodologies: HPLC (separates hemoglobin variants), immunoassay, enzymatic, boronate affinity. Interferences: Hemoglobin variants (HbS, HbC, HbE) may cause inaccurate results with some methods; African, Mediterranean, Southeast Asian ancestry screening recommended. Conditions affecting RBC lifespan: Hemolytic anemias, G6PD deficiency, recent transfusion (falsely low); iron deficiency, B12/folate deficiency (falsely high). Glycation rate varies individually ("high" or "low" glycators). Alternative tests: Fructosamine (serum glycated proteins, reflects 2-3 weeks), glycated albumin.

OGTT Protocol: 75g anhydrous glucose in 300 mL water over 5 minutes (pregnant women: 100g for 3-hour test). Measure FPG and 2h PG (optional 30, 60, 90 min for research). Patient preparation: normal carbohydrate diet (>150g/day) for 3 days prior, overnight fast 8-14 hours, avoid strenuous exercise, smoking, caffeine morning of test. Repeat testing: Reproducibility 50-60% for diabetes diagnosis (biological variation, measurement error). If discordant results (FPG vs A1c vs OGTT), abnormal result should be repeated.

GESTATIONAL DIABETES DIAGNOSIS:
Two-step approach (ACOG): 1-hour 50g glucose challenge test (GCT) non-fasting, plasma glucose ≥130-140 mg/dL (threshold varies) → diagnostic 3-hour 100g OGTT with Carpenter-Coustan or NDDG thresholds (fasting ≥95, 1h ≥180, 2h ≥155, 3h ≥140 mg/dL - two or more abnormal).
One-step approach (IADPSG/ADA): 75g OGTT at 24-28 weeks; diabetes if FPG ≥92, 1h ≥180, or 2h ≥153 mg/dL (any single abnormal). Identifies more women with GDM, associated with improved outcomes but increases prevalence.

DIAGNOSIS IN SPECIAL CIRCUMSTANCES:
Cystic fibrosis-related diabetes (CFRD): OGTT preferred; A1c unreliable due to inflammation/hemolysis. Screen annually from age 10.
Pancreatic diabetes (post-pancreatectomy): OGTT or self-monitoring; insulin deficiency often develops early.
Steroid-induced hyperglycemia: A1c may not reflect acute changes; random glucose monitoring recommended.
Post-transplant diabetes: OGTT preferred; high incidence with tacrolimus/sirolimus.

DIFFERENTIAL DIAGNOSIS:
Stress hyperglycemia: Acute illness, MI, stroke, trauma can cause transient hyperglycemia; diabetes diagnosed if persistent after recovery.
Factitious hyperglycemia: Poor sample handling (delay in processing, glycolysis continues in vitro - sodium fluoride tube prevents).
Other causes of glycosuria: Renal glycosuria (low renal threshold, normal blood glucose).`,
      },
    },
    {
      title: 'Acute Complications',
      content: {
        patient: `Diabetic Ketoacidosis (DKA) and Hyperosmolar Hyperglycemic State (HHS) are serious, life-threatening emergencies:

DIABETIC KETOACIDOSIS (DKA):
- Happens mostly in Type 1 diabetes, but can occur in Type 2
- Blood sugar is very high (usually >250 mg/dL)
- Body lacks insulin and starts breaking down fat for energy
- Produces ketones (acidic byproducts) that build up in blood
- Symptoms: extreme thirst, frequent urination, fruity breath, nausea/vomiting, abdominal pain, rapid breathing, confusion, drowsiness
- This is a medical emergency requiring hospitalization

HYPEROSMOLAR HYPERGLYCEMIC STATE (HHS):
- Usually occurs in older adults with Type 2 diabetes
- Blood sugar extremely high (>600 mg/dH)
- Ketones are minimal or absent
- Severe dehydration occurs
- Symptoms: extreme thirst, dry mouth, weakness, confusion, seizures, possibly coma
- Higher mortality rate than DKA
- Also requires emergency hospital care

Both conditions are triggered by illness, infection, missed insulin doses, or certain medications. Prevention includes regular blood sugar monitoring, taking medications as prescribed, and seeking medical help early when sick.`,
        intermediate: `DIABETIC KETOACIDOSIS (DKA):

Definition: Hyperglycemia (glucose >250 mg/dL), ketonemia (positive serum ketones or beta-hydroxybutyrate ≥3 mmol/L), and anion gap metabolic acidosis (pH <7.30, bicarbonate <18 mEq/L). Represents absolute insulin deficiency with counter-regulatory hormone excess (glucagon, catecholamines, cortisol, growth hormone).

Pathophysiology: Insulin deficiency → unrestrained lipolysis in adipose tissue → increased FFA delivery to liver → beta-oxidation → ketogenesis (acetoacetate and beta-hydroxybutyrate). Glucagon excess stimulates hepatic ketogenesis and gluconeogenesis. Hyperglycemia causes osmotic diuresis → volume depletion → prerenal azotemia. Ketones cause metabolic acidosis (anion gap: measured cations - measured anions; normal 8-12, elevated >12 in DKA). Ketoacidosis stimulates respiratory compensation (Kussmaul respirations - deep, rapid breathing) to lower CO2.

Precipitants: Infection (pneumonia, UTI) 40%, insulin omission/non-compliance 25%, new-onset diabetes 20%, myocardial infarction, stroke, pancreatitis, medications (SGLT2 inhibitors, corticosteroids, atypical antipsychotics).

Clinical Features: Polyuria, polydipsia, weight loss, weakness (hours to days); nausea, vomiting, abdominal pain (may mimic acute abdomen); Kussmaul respirations, acetone breath (fruity); altered mental status (can progress to coma); signs of dehydration (tachycardia, hypotension, dry mucosa).

Management: Volume resuscitation (isotonic saline 1-1.5 L in first hour, then based on hemodynamics); Insulin infusion (regular insulin 0.1 U/kg bolus then 0.1 U/kg/hr or 0.14 U/kg/hr without bolus; aim for glucose decline 50-70 mg/dL/hr); Potassium replacement (insulin drives K+ into cells; replace if K+ <5.2 mEq/L; hold insulin if K+ <3.3); Bicarbonate controversial (pH <6.9 only); Transition to SC insulin when glucose <200 and acidosis resolved.

HYPEROSMOLAR HYPERGLYCEMIC STATE (HHS):

Definition: Severe hyperglycemia (glucose >600 mg/dL), hyperosmolality (>320 mOsm/kg), and profound dehydration without significant ketosis (pH >7.30, bicarbonate >18). Occurs predominantly in elderly Type 2 diabetics with impaired thirst response and limited access to water.

Pathophysiology: Relative insulin deficiency (sufficient to prevent ketosis but inadequate to control glucose) with prolonged osmotic diuresis. Severe dehydration concentrates glucose further. Higher mortality than DKA (10-20% vs <5%) due to comorbidities, older age, and delayed recognition.

Clinical Features: Severe dehydration, altered mental status (can progress to coma), focal neurological deficits (seizures, hemiparesis), absence of Kussmaul respirations. Onset gradual (days to weeks).

Management: Aggressive fluid resuscitation (isotonic saline initially, then 0.45% saline if hypernatremic); Insulin after initial fluid resuscitation (lower doses than DKA); gradual glucose correction (avoid rapid shifts causing cerebral edema); Thromboprophylaxis (high risk of venous thromboembolism); treatment of precipitating illness.`,
        professional: `ADVANCED DKA/HHS PATHOPHYSIOLOGY AND MANAGEMENT:

DKA BIOCHEMISTRY:
Ketone bodies: Acetoacetate, beta-hydroxybutyrate (BHB), and acetone. NADH/NAD+ ratio determines BHB/acetoacetate ratio (normally 1:1, increases to 3:1 or higher in severe DKA). Nitroprusside test detects acetoacetate and acetone but not BHB - may underestimate ketosis during treatment as BHB converts to acetoacetate. Direct BHB measurement preferred.

Anion gap calculation: (Na+ + K+) - (Cl- + HCO3-) or simplified Na+ - (Cl- + HCO3-). Normal 8-12 mEq/L. Elevated in DKA due to unmeasured anions (ketoacids, lactate, renal organic anions). Delta ratio: (Change in anion gap)/(Change in HCO3-) - helps identify mixed acid-base disorders. >2 suggests metabolic alkalosis superimposed; <1 suggests non-anion gap metabolic acidosis coexisting.

Fluid and electrolyte derangements: Total body water deficit ~5-10 L (100 mL/kg). Total body K+ depletion 3-5 mEq/kg despite often normal or elevated serum K+ (acidosis shifts K+ extracellularly, insulin deficiency reduces cellular uptake, hyperosmolality causes K+ efflux). Sodium: dilutional hyponatremia common (corrected Na+ = measured Na+ + 1.6[(glucose-100)/100]). Phosphate depletion common (cellular shift with insulin therapy). Magnesium deficiency nearly universal.

DKA TREATMENT PROTOCOLS:
ADA consensus 2009: Fluid resuscitation is primary: 1.0-1.5 L isotonic saline first hour, then 250-500 mL/h based on hemodynamics. When glucose reaches 200 mg/dL, add dextrose (D5W or D10W) and continue insulin to clear ketones. Transition to SC insulin when: glucose <200, two of: pH >7.30, anion gap ≤12, serum bicarbonate ≥18, and patient can eat. Overlap IV and SC insulin by 1-2 hours.

Insulin regimens: Regular IV insulin 0.1 U/kg bolus then 0.1 U/kg/h, or 0.14 U/kg/h without bolus. If glucose not declining 50-70 mg/dL in first hour, increase insulin. SC rapid-acting insulin analogs (lispro, aspart) can be used in mild-moderate DKA (0.3 U/kg bolus, then 0.1 U/kg/h or 0.2 U/kg q2h).

Bicarbonate therapy: Controversial. No benefit demonstrated for pH >6.9. Consider if pH 6.5-6.9 with hemodynamic instability or life-threatening hyperkalemia. If used: 100 mmol in 400 mL sterile water with 20 mEq KCl over 2 hours. Avoid bicarbonate if pH >7.0 due to risks: paradoxical CSF acidosis, hypokalemia, tissue hypoxia (left shift of oxyhemoglobin curve), rebound alkalosis.

Complications: Cerebral edema (primarily pediatric, 0.5-1% mortality, treat with mannitol 1 g/kg or hypertonic saline 3% 5-10 mL/kg); Hypoglycemia (prevent with dextrose infusion when glucose <200); Hypokalemia (most common preventable cause of death); ARDS; thromboembolism.

HHS MANAGEMENT:
Fluid replacement more critical than insulin (insulin can worsen hypotension by driving glucose/water intracellularly). Average fluid deficit 8-12 L. First hour: 1-1.5 L isotonic saline. Switch to 0.45% saline if corrected Na+ normal/high and hemodynamics stable. Aim for gradual osmolality decline (3-8 mOsm/kg/h). Start insulin (0.05-0.1 U/kg/h) only after fluid expansion and when glucose not declining with fluids alone. Target glucose 250-300 mg/dL during treatment to maintain osmotic gradient. Thromboprophylaxis essential (LMWH) - 20-25% risk of VTE.

SGLT2 INHIBITOR-ASSOCIATED EUGLYCEMIC DKA:
Recognition: Glucose <250 mg/dL (often <200) despite ketosis, with metabolic acidosis. Can occur during illness, fasting, surgery, or with reduced carbohydrate intake. Mechanism: SGLT2 inhibitors lower glucose, increase ketone production (increased lipolysis, reduced insulin/glucagon ratio), and cause volume contraction. Treatment: Standard DKA protocol but with earlier dextrose addition. Hold SGLT2 inhibitor.`,
      },
    },
    {
      title: 'Chronic Complications',
      content: {
        patient: `Over time, high blood sugar damages blood vessels and nerves throughout the body:

MICROVASCULAR COMPLICATIONS (small blood vessels):

DIABETIC RETINOPATHY (EYE DAMAGE): Diabetes is the leading cause of blindness in adults. High blood sugar damages blood vessels in the retina (back of eye). Early stage (non-proliferative): weakened vessels leak fluid, causing swelling. Advanced stage (proliferative): new abnormal vessels grow and can bleed. Regular eye exams are crucial.

DIABETIC NEPHROPATHY (KIDNEY DISEASE): Diabetes is the leading cause of kidney failure. High blood sugar damages the tiny filtering units (glomeruli) in kidneys. Early signs include protein leaking into urine (microalbuminuria). Progresses to decreased kidney function and eventually dialysis may be needed.

DIABETIC NEUROPATHY (NERVE DAMAGE): About half of people with diabetes develop nerve damage. Types include:
- Peripheral neuropathy: Numbness, tingling, burning, or pain in feet and legs, spreading to hands. Can lead to foot ulcers and amputations.
- Autonomic neuropathy: Affects nerves controlling digestion, bladder, sexual function, sweating, and cardiovascular system.

MACROVASCULAR COMPLICATIONS (large blood vessels):
Diabetes increases risk of heart attacks, strokes, and peripheral artery disease (reduced blood flow to legs) by 2-4 times. High blood sugar, combined often with high blood pressure and cholesterol, accelerates atherosclerosis (hardening of arteries).

Good blood sugar control, blood pressure control, and cholesterol management dramatically reduce these risks.`,
        intermediate: `DIABETIC MICROVASCULAR COMPLICATIONS:

Pathophysiology unified by chronic hyperglycemia causing: (1) Advanced glycation end-product (AGE) formation and cross-linking; (2) Polyol pathway activation (sorbitol/aldose reductase); (3) Protein kinase C (PKC) activation; (4) Hexosamine pathway activation; (5) Oxidative stress (mitochondrial superoxide generation). These pathways converge on vascular damage.

DIABETIC RETINOPATHY:
Leading cause of blindness in working-age adults. Prevalence increases with diabetes duration (20% at 10 years, 90% at 25 years for T1DM). Classification:
- Non-proliferative diabetic retinopathy (NPDR): Microaneurysms, dot-blot hemorrhages, hard exudates (lipid leakage), cotton wool spots (ischemia), intraretinal microvascular abnormalities (IRMA). Mild, moderate, severe based on "4-2-1 rule" (hemorrhages/microaneurysms in 4 quadrants, venous beading in 2 quadrants, IRMA in 1 quadrant).
- Proliferative diabetic retinopathy (PDR): Neovascularization (new vessels on disc [NVD] or elsewhere [NVE]) due to retinal ischemia driving VEGF production. Complications: vitreous hemorrhage, tractional retinal detachment, neovascular glaucoma.
- Diabetic macular edema (DME): Leading cause of vision loss in diabetes. Retinal thickening/edema involving or threatening fovea. Clinically significant if central-involved (CI-DME).
Screening: Annual dilated eye exam for T2DM at diagnosis, T1DM 5 years after diagnosis, then annually (every 2 years if normal). Treatment: laser photocoagulation, intravitreal anti-VEGF (bevacizumab, ranibizumab, aflibercept), steroids, vitrectomy.

DIABETIC NEPHROPATHY:
Leading cause of end-stage renal disease (ESRD). Natural history: Stage 1 (hyperfiltration, GFR >150), Stage 2 (normal GFR, basement membrane thickening), Stage 3 (incipient nephropathy - microalbuminuria 30-300 mg/day), Stage 4 (overt nephropathy - macroalbuminuria >300 mg/day, declining GFR, hypertension), Stage 5 (ESRD). Pathology: glomerular basement membrane thickening, mesangial expansion, nodular glomerulosclerosis (Kimmelstiel-Wilson lesions), tubulointerstitial fibrosis. Screening: Annual urine albumin-to-creatinine ratio (ACR) and eGFR. Treatment: ACE inhibitors or ARBs (reduce proteinuria and slow progression), SGLT2 inhibitors (renal protection independent of glucose), blood pressure control (<130/80), glycemic control. Dialysis or transplant when eGFR <15 or uremic symptoms.

DIABETIC NEUROPATHY:
Most common complication (affects 50% of patients). Distal symmetric polyneuropathy (DSPN): "Stocking-glove" distribution, length-dependent, sensory > motor, symmetric. Symptoms: numbness, tingling, burning, allodynia, loss of protective sensation (10-g monofilament test). Risk factors: diabetes duration, poor glycemic control, height (taller patients), smoking. Autonomic neuropathy: Gastroparesis (delayed gastric emptying, nausea, early satiety), diabetic diarrhea (especially nocturnal), neurogenic bladder (retention, UTIs), erectile dysfunction, orthostatic hypotension, cardiac autonomic neuropathy (resting tachycardia, painless MI), sudomotor dysfunction (anhidrosis, gustatory sweating). Treatment: gabapentin, pregabalin, duloxetine, TCAs for pain; symptom-specific for autonomic.

DIABETIC FOOT COMPLICATIONS:
Combination of neuropathy (loss of protective sensation, Charcot arthropathy), peripheral artery disease (ischemia), and infection. Risk of ulceration 25% lifetime. Amputation risk 15-25x higher than general population. Prevention: daily foot inspection, proper footwear, nail care, monofilament testing, vascular assessment.

MACROVASCULAR COMPLICATIONS:
Accelerated atherosclerosis causing coronary artery disease (CAD, 2-4x increased risk), cerebrovascular disease (ischemic stroke), and peripheral artery disease (PAD). Risk amplified by clustering of risk factors (metabolic syndrome: hypertension, dyslipidemia, obesity). Type 2 diabetes is considered a CAD risk equivalent (same 10-year risk as someone with prior MI). Heart failure risk increased (diabetic cardiomyopathy - independent of CAD/hypertension). Treatment: aggressive risk factor modification (statins, ACE-I/ARB, antiplatelet therapy), glycemic control with cardioprotective agents (SGLT2 inhibitors, GLP-1 receptor agonists).`,
        professional: `ADVANCED COMPLICATION PATHOPHYSIOLOGY:

UNIFYING HYPOTHESIS OF MICROVASCULAR DAMAGE:
Michael Brownlee's "unifying mechanism": Hyperglycemia-induced mitochondrial superoxide production inhibits GAPDH, diverting upstream glycolytic intermediates to four damaging pathways: (1) Increased AGE formation (methylglyoxal); (2) Increased hexosamine pathway flux (UDP-GlcNAc modification of transcription factors); (3) Increased PKC activation (especially β and δ isoforms from DAG); (4) Increased polyol pathway flux (sorbitol accumulation, NADPH/NAD+ depletion).

AGEs and RAGE: Non-enzymatic glycation creates early glycation products (Amadori products) then stable AGEs (pentosidine, CML, CEL). AGEs cross-link collagen (vascular stiffness, basement membrane thickening). AGEs bind RAGE (receptor for AGEs) activating NF-κB, inflammatory cytokine production, and oxidative stress. AGE accumulation is irreversible; effects persist even after glucose normalization ("metabolic memory" or legacy effect).

RETINOPATHY DETAIL:
Molecular mechanisms: VEGF upregulation (hypoxia-inducible factor 1α), ICAM-1 mediated leukostasis, BRB (blood-retinal barrier) breakdown via tight junction disruption (occludin, claudin-5), pericyte dropout (distinctive feature, due to hyperglycemia-induced apoptosis), microaneurysm formation at capillary bifurcations. Classification systems: ETDRS (Early Treatment Diabetic Retinopathy Study), International Clinical Diabetic Retinopathy Severity Scale. Treatment: Panretinal photocoagulation (PRP) reduces VEGF drive by ablating ischemic retina; anti-VEGF (ranibizumab, aflibercept, bevacizumab) first-line for CI-DME; vitrectomy for non-clearing vitreous hemorrhage, tractional detachment involving macula. Fenofibrate shows benefit in DME prevention (FIELD, ACCORD studies) through PPAR-α effects.

NEPHROPATHY DETAIL:
Hemodynamic factors: Glomerular hyperfiltration (afferent arteriolar dilation > efferent constriction) increases intraglomerular pressure. RAAS activation (local and systemic) drives progression. Structural changes: mesangial expansion (matrix deposition, cell proliferation), podocyte loss (detachment, apoptosis), tubulointerstitial fibrosis (EMT of tubular cells, inflammation). Molecular: TGF-β is central mediator of fibrosis; CTGF (connective tissue growth factor); VEGF podocyte effects. Screening: Spot urine ACR preferred over 24-hour collection (albumin excretion varies with exercise, UTI, fever, heart failure). ACR categories: <30 mg/g normal, 30-300 mg/g moderately increased, >300 mg/g severely increased. Consider false positives: exercise within 24h, fever, UTI, heart failure, hematuria, uncontrolled hypertension. eGDR (estimated glucose disposal rate) correlates with nephropathy risk in T1DM.

NEUROPATHY MECHANISMS:
Distal symmetric polyneuropathy: Length-dependent dying-back axonopathy affecting longest axons first. "Double-crush" hypothesis - diabetes predisposes to compression neuropathies. Metabolic factors: polyol pathway (sorbitol accumulation causes osmotic stress, NAD+ depletion impairs axonal transport), AGE accumulation in peripheral nerves, oxidative stress, mitochondrial dysfunction, neurotrophic factor deficiency (NGF). Small fiber neuropathy (C and Aδ fibers) presents with pain and autonomic symptoms, may precede large fiber loss; can be assessed with intraepidermal nerve fiber density (skin biopsy), quantitative sensory testing (QST), or corneal confocal microscopy. Treatment-resistant options: alpha-lipoic acid (antioxidant), benfotiamine (B1 derivative), spinal cord stimulation. Cardiovascular autonomic neuropathy (CAN): Tests - heart rate variability (expiration:inspiration ratio, Valsalva ratio, standing HR increase), baroreflex sensitivity. Associated with increased mortality (arrhythmia, silent ischemia).

MACROVASCULAR PATHOPHYSIOLOGY:
Accelerated atherosclerosis: Endothelial dysfunction (reduced NO bioavailability, increased endothelin), increased endothelial permeability, enhanced leukocyte adhesion (ICAM-1, VCAM-1, selectins), impaired endothelial progenitor cell function, platelet hyperaggregability, elevated fibrinogen, PAI-1 elevation (prothrombotic state), dysfunctional HDL (reduced anti-inflammatory capacity). "Metabolic memory": DCCT/EDIC and UKPDS demonstrated that early intensive glycemic control provides lasting cardiovascular benefit even after glucose control deteriorates (legacy effect). EMPA-REG, CANVAS, DECLARE trials showed SGLT2 inhibitors reduce cardiovascular events; LEADER, SUSTAIN-6 showed GLP-1 RAs cardiovascular benefit. Mechanisms: beyond glucose lowering, direct vascular effects (improved endothelial function, anti-inflammatory), weight loss, blood pressure reduction, reduced arterial stiffness.`,
      },
    },
    {
      title: 'Treatment and Management',
      content: {
        patient: `Diabetes management is comprehensive and individualized:

LIFESTYLE MODIFICATIONS (Foundation for all types):
- Healthy eating: Balanced meals with controlled carbohydrates, plenty of vegetables, lean proteins, whole grains. Work with a dietitian for meal planning.
- Physical activity: At least 150 minutes of moderate exercise per week (walking, swimming, cycling). Exercise helps lower blood sugar and improves insulin sensitivity.
- Weight management: Losing 5-10% of body weight can significantly improve Type 2 diabetes control.
- Blood sugar monitoring: Regular checks to understand patterns and guide treatment.
- Stress management and adequate sleep.

MEDICATIONS FOR TYPE 2 DIABETES:
- Metformin: First-line for most. Reduces liver glucose production, improves insulin sensitivity. Inexpensive, well-tolerated.
- Sulfonylureas (glipizide, glyburide): Stimulate pancreas to release more insulin. Can cause low blood sugar and weight gain.
- Insulin: Required for Type 1; sometimes needed for Type 2 when other medications insufficient.
- GLP-1 Receptor Agonists (semaglutide, liraglutide, dulaglutide): Weekly injections that increase insulin when needed, reduce appetite, promote weight loss.
- SGLT2 Inhibitors (empagliflozin, canagliflozin, dapagliflozin): Help kidneys remove excess sugar in urine. Also protect heart and kidneys.
- DPP-4 Inhibitors (sitagliptin, linagliptin): Increase natural incretin hormones.
- Others: Thiazolidinediones (pioglitazone), alpha-glucosidase inhibitors, meglitinides.

BLOOD SUGAR GOALS (individualized):
- Most adults: A1c less than 7% (average glucose ~154 mg/dL)
- Fasting glucose: 80-130 mg/dL
- 1-2 hours after meals: Less than 180 mg/dL

Your healthcare team will help set personalized goals based on your age, health, and risk of low blood sugar.`,
        intermediate: `GLYCEMIC TARGETS AND INDIVIDUALIZATION (ADA 2023):

General target for most non-pregnant adults: HbA1c <7% (53 mmol/mol) to reduce microvascular complications. Corresponding glucose targets: preprandial 80-130 mg/dL, peak postprandial <180 mg/dL (1-2 hours after meal start). More stringent targets (A1c <6.5%) may be appropriate for selected patients (new diagnosis, long life expectancy, no CVD, hypoglycemia risk low, good support) if achievable without significant hypoglycemia. Less stringent targets (A1c <8%) appropriate for: history of severe hypoglycemia, limited life expectancy, advanced complications, extensive comorbidities, long-standing diabetes with difficulty achieving target despite diabetes self-management education, hypoglycemia unawareness.

LIFESTYLE MANAGEMENT:
Medical Nutrition Therapy (MNT): ADA recommendations emphasize variety of healthy eating patterns (Mediterranean, DASH, low-carbohydrate, vegetarian). Macronutrient distribution flexible; focus on carbohydrate quality (minimize refined grains, added sugars), overall dietary pattern. Carbohydrate counting (for insulin dosing): 1 unit insulin per 10-15g carbohydrate (individualized I:C ratio). Weight loss: Moderate caloric restriction (500-750 kcal/day deficit) for overweight/obese; 5% loss improves glycemia, 10-15% may induce diabetes remission in early T2DM. Physical activity: 150+ min/week moderate-intensity aerobic (spread over ≥3 days), resistance training 2-3 sessions/week, reduce sedentary time.

TYPE 2 DIABETES PHARMACOTHERAPY:

METFORMIN: First-line unless contraindicated (eGFR <30). Biguanide - reduces hepatic glucose production (decreases gluconeogenesis via AMPK activation, reduced glycogenolysis), increases peripheral insulin sensitivity. Benefits: weight neutral or loss, low hypoglycemia risk, cardiovascular safety, inexpensive. Side effects: GI (diarrhea, nausea - improve with gradual titration, extended-release formulation), vitamin B12 deficiency (monitor periodically), rare lactic acidosis (avoid in hypoxic states, severe renal impairment).

SULFONYLUREAS (Glipizide, Glimepiride, Glyburide): Bind SUR1 subunit of KATP channel → closure → depolarization → insulin secretion (glucose-independent). Effective glucose lowering (A1c -1-1.5%). Disadvantages: hypoglycemia risk (especially glyburide in elderly, renal impairment), weight gain (2-3 kg), secondary failure (beta cell exhaustion). Avoid glyburide in elderly/CKD due to long half-life and hypoglycemia risk.

GLP-1 RECEPTOR AGONISTS (Liraglutide, Semaglutide, Dulaglutide, Exenatide, Lixisenatide): Mimic endogenous GLP-1 (incretin hormone). Actions: glucose-dependent insulin secretion (reduced hypoglycemia risk), suppressed glucagon secretion, delayed gastric emptying, central appetite suppression (weight loss 3-6 kg). Semaglutide (oral and injectable) and high-dose liraglutide (3 mg) approved for obesity. LEADER (liraglutide), SUSTAIN-6 (semaglutide), REWIND (dulaglutide) showed cardiovascular benefit. Side effects: GI (nausea, vomiting, diarrhea - usually transient), gallbladder disease, rare pancreatitis (causal link unproven), thyroid C-cell tumors in rodents (contraindicated with MEN2, medullary thyroid carcinoma history). Injection (daily or weekly) or oral semaglutide.

SGLT2 INHIBITORS (Empagliflozin, Canagliflozin, Dapagliflozin, Ertugliflozin): Inhibit sodium-glucose cotransporter 2 in proximal tubule → glycosuria (80 g/day), osmotic diuresis, caloric loss. A1c lowering modest (-0.5-1.0%). Benefits: weight loss (2-3 kg), blood pressure reduction, cardiovascular protection (EMPA-REG, CANVAS, DECLARE - reduced MACE, heart failure hospitalization), renal protection (CREDENCE - canagliflozin reduced ESRD progression). Side effects: genital mycotic infections (10-15% women, 5% men), urinary tract infections, volume depletion, rare euglycemic DKA, Fournier's gangrene (rare), amputations (canagliflozin signal, not replicated in other trials). Hold before surgery and during acute illness.

DPP-4 INHIBITORS (Sitagliptin, Saxagliptin, Linagliptin, Alogliptin): Inhibit dipeptidyl peptidase-4 enzyme that degrades GLP-1 and GIP → increase endogenous incretin levels. Modest A1c lowering (-0.5-0.8%). Weight neutral, minimal hypoglycemia risk when used alone. Oral, once daily. Generally well-tolerated. CAROLINA (linagliptin) showed cardiovascular safety. SAVOR-TIMI 58 (saxagliptin) showed increased hospitalization for heart failure (concern, not seen in other trials).

THIAZOLIDINEDIONES (Pioglitazone): PPAR-γ agonist - improves insulin sensitivity in muscle, adipose, liver. A1c reduction -1-1.5%. Benefits: durable glycemic control, potential cardiovascular benefit (PROACTIVE trial), may reduce stroke in prediabetes (IRIS trial). Disadvantages: weight gain (fluid retention + adipogenesis), edema, heart failure exacerbation, bone fractures (women), possible bladder cancer signal (controversial). Avoid in heart failure, osteoporosis.

INSULIN THERAPY FOR TYPE 2:
Indicated when A1c >10%, fasting glucose >300 mg/dL, symptomatic hyperglycemia, ketosis. Basal insulin (NPH, glargine, detemir, degludec) typically initiated (10 units or 0.1-0.2 U/kg at bedtime). If basal insulin inadequate, add mealtime insulin (rapid-acting) or switch to premixed insulin. Basal-bolus most closely mimics physiology. Consider insulin when other agents fail to achieve targets.`,
        professional: `COMPREHENSIVE DIABETES MANAGEMENT:

ALGORITHMIC APPROACH TO T2DM (ADA/EASD Consensus 2022):

Step 1 (all patients): Lifestyle intervention + Metformin (unless contraindicated/intolerant).

Step 2 (add to metformin based on comorbidities):
- Established ASCVD or high risk: GLP-1 RA with proven cardiovascular benefit (liraglutide, semaglutide, dulaglutide) OR SGLT2 inhibitor with cardiovascular benefit (empagliflozin, canagliflozin, dapagliflozin). Consider both classes if A1c above target.
- Heart failure (HFrEF or HFpEF): SGLT2 inhibitor (dapagliflozin, empagliflozin) - now foundational therapy for HF regardless of diabetes status.
- CKD with albuminuria: SGLT2 inhibitor (reduces CKD progression) and/or finerenone (non-steroidal MRA if SGLT2 inadequate); GLP-1 RA if additional glucose lowering needed.
- Weight loss priority: GLP-1 RA (especially semaglutide 2.4 mg, tirzepatide) or dual GIP/GLP-1 agonist (tirzepatide shows superior A1c and weight reduction).
- Hypoglycemia avoidance: GLP-1 RA, DPP-4 inhibitor, or TZD (avoid SU, insulin).

Step 3 (triple therapy): If dual therapy inadequate, consider adding third agent from different class. Common combinations: metformin + GLP-1 RA + SGLT2i; metformin + SU + DPP-4i (inexpensive option); metformin + basal insulin + GLP-1 RA.

Step 4 (injectable therapy): If A1c >target on oral triple therapy, add basal insulin or intensify to basal-bolus, or consider adding GLP-1 RA if not already used. When basal insulin >0.5 U/kg without target achievement, consider GLP-1 RA addition before intensifying insulin (better efficacy, weight benefit, less hypoglycemia than adding mealtime insulin per DURATION-8, BEGIN ONCE LONG trials).

TYPE 1 DIABETES MANAGEMENT:
Intensive insulin therapy: Multiple daily injections (MDI) or continuous subcutaneous insulin infusion (CSII/pump). Basal insulin (long-acting analogs: glargine U100/U300, detemir, degludec - flat profiles, reduced nocturnal hypoglycemia vs NPH) + prandial insulin (rapid-acting: lispro, aspart, glulisine; ultra-rapid: faster aspart, lispro-a; inhaled insulin: Afrezza). Carbohydrate counting for prandial dosing (I:C ratios), correction doses (insulin sensitivity factor/correction factor). Physiologic insulin replacement: basal ~40-50% of total daily dose (TDD), bolus ~50-60%.

Continuous Glucose Monitoring (CGM): Real-time CGM (rtCGM: Dexcom G6/G7, Medtronic Guardian) or intermittently scanned CGM (isCGM: FreeStyle Libre 2/3). Measures interstitial glucose every 1-5 minutes. Benefits: reduced hypoglycemia, improved TIR (time in range), reduced A1c, alerts for highs/lows. Time in Range goals: >70% time 70-180 mg/dL, <4% time <70 mg/dL, <1% time <54 mg/dL.

Insulin Pump Therapy: CSII delivers continuous basal and calculated boluses. Advanced features: insulin-on-board calculators, pattern tracking, low glucose suspend (LGS), predictive low glucose suspend (PLGS), hybrid closed-loop systems (sensor communicates with pump to automatically adjust basal insulin, suspend before lows, even auto-correct boluses - Medtronic 770G/780G, Tandem Control-IQ). Closed-loop/artificial pancreas systems approaching automated glucose management.

SPECIALIZED MEDICATIONS:

PRAMLINTIDE: Amylin analog (amylin is co-secreted with insulin from beta cells). Delays gastric emptying, suppresses glucagon, increases satiety. Approved for T1DM and T2DM on mealtime insulin. Reduces postprandial glucose and promotes weight loss. Dose before meals, reduces mealtime insulin by 50% initially. Nausea common initially.

ACARBOSE/MIGLITOL: Alpha-glucosidase inhibitors - inhibit intestinal enzymes that digest carbohydrates, slowing glucose absorption. Flatten postprandial glucose peaks. Minimal systemic absorption. Side effects: flatulence, diarrhea (limit compliance). Take with first bite of meal.

COLESEVELAM: Bile acid sequestrant approved for T2DM (mechanism unclear - may increase incretins). Modest A1c reduction, LDL cholesterol benefit. GI side effects.

BROMOCRIPTINE-QR: Dopamine D2 receptor agonist (quick release formulation). Central action on hypothalamus to reset circadian rhythms. Modest A1c reduction, may reduce cardiovascular events (Cycloset Safety trial). Take within 2 hours of waking.

TIRZEPATIDE: Dual GIP and GLP-1 receptor agonist (SURPASS trials). Superior to semaglutide in A1c reduction (-2.0-2.5%) and weight loss (up to 12-15 kg). Weekly injection. GIP component may enhance lipid clearance and insulin sensitivity beyond GLP-1 effects.

BLOOD PRESSURE AND LIPID MANAGEMENT:
Blood pressure target <130/80 mmHg (if tolerated) using ACE inhibitors or ARBs (cardiorenal protection, especially with albuminuria). Statin therapy for all diabetics aged 40-75 regardless of baseline LDL (high-intensity for ASCVD, moderate for others). Aspirin primary prevention controversial (benefit may not exceed bleeding risk in modern era with statins, unless 10-year ASCVD risk >10%).`,
      },
    },
    {
      title: 'Monitoring and Management Goals',
      content: {
        patient: `Regular monitoring is essential for successful diabetes management:

SELF-MONITORING OF BLOOD GLUCOSE (SMBG):
- Check blood sugar as recommended by your healthcare provider
- Common times: before meals, 1-2 hours after meals, at bedtime, before driving
- More frequent checks during illness, when starting new medications, or when changing routines
- Keep a log of results to identify patterns

CONTINUOUS GLUCOSE MONITORING (CGM):
- Small sensor worn on body measures glucose continuously
- Shows trends and alerts for highs and lows
- Reduces fingerstick requirements
- Particularly helpful for Type 1 diabetes

HEMOGLOBIN A1c TESTING:
- Blood test every 3-6 months
- Shows average blood sugar over 2-3 months
- Goal for most adults: less than 7%

REGULAR HEALTH SCREENINGS:
- Annual dilated eye exams
- Annual urine tests for kidney function
- Annual foot exams (more often if problems)
- Regular blood pressure and cholesterol checks
- Dental checkups every 6 months

RECOGNIZING PROBLEMS:
- Know signs of low blood sugar: shakiness, sweating, confusion, irritability
- Know signs of high blood sugar: increased thirst, frequent urination, fatigue
- Have a sick day plan for illness
- Wear medical identification

Your diabetes care team (doctor, diabetes educator, dietitian, pharmacist) works with you to create a personalized plan and adjust it as needed over time.`,
        intermediate: `COMPREHENSIVE DIABETES MONITORING:

GLYCEMIC MONITORING:
SMBG frequency individualized: Type 1 MDI: 4-10 times/day (before meals, snacks, bedtime, before exercise, when suspect low/high, before driving). Type 2 on insulin: fasting + some postprandial checks. Type 2 on oral agents: periodic fasting checks may be sufficient if stable. CGM metrics: Average glucose, glucose management indicator (GMI, estimated A1c), time in range (TIR 70-180 mg/dL), time below range (<70, <54), time above range (>180, >250), coefficient of variation (CV, glycemic variability target <36%). Standardized CGM report (AGP - ambulatory glucose profile) shows 24-hour glucose curve with median and percentiles.

METABOLIC MONITORING:
A1c every 3 months if therapy changed or not at goal; every 6 months if stable at target. Fructosamine or glycated albumin if A1c unreliable. Self-monitoring of weight. For insulin therapy: review injection technique, rotation sites, lipohypertrophy assessment. Hypoglycemia assessment: frequency, severity, awareness (Clarke or Gold scores for hypoglycemia unawareness), need for glucagon prescription.

COMPLICATION SCREENING:

Eye: Dilated comprehensive eye exam at diagnosis (Type 2) or 5 years after onset (Type 1), then annually. Normal exams can extend to every 2 years. If retinopathy present, more frequent monitoring. Optical coherence tomography (OCT) for macular edema assessment, fluorescein angiography for treatment planning.

Kidney: Annual urine albumin-to-creatinine ratio (ACR) and serum creatinine/eGFR. If elevated ACR, repeat 2-3 times over 3-6 months (2 of 3 positive = albuminuria). eGFR categories guide medication dosing and referral. Nephrology referral when eGFR <30, ACR >300 mg/g with hematuria, rapid decline, resistant hypertension, or uncertain etiology.

Foot: Annual comprehensive foot exam including inspection, monofilament testing (10-g for protective sensation), vibration sense (128 Hz tuning fork), pinprick, ankle reflexes, pulse palpation (dorsalis pedis, posterior tibial). Risk stratification: low risk (normal exam, annual screening), moderate risk (neuropathy or PAD, 3-6 month visits), high risk (history of ulcer/amputation, 1-3 month visits). Patient education on daily foot inspection, proper footwear, nail care.

Cardiovascular: Blood pressure every visit (target <130/80). Lipid panel at diagnosis, annually if on statins, every 5 years if not. ECG if symptomatic or with cardiovascular risk factors. Consider coronary calcium scoring or stress testing in symptomatic or high-risk asymptomatic patients (controversial).

IMMUNIZATIONS:
Annual influenza vaccine. Pneumococcal vaccine: PCV20 once or PCV15 followed by PPSV23. Hepatitis B series (if not previously vaccinated, 2- or 3-dose series). COVID-19 vaccination per current guidelines. Zoster vaccine (Shingrix) at age 50+ (2 doses).

PSYCHOSOCIAL CARE:
Screen for diabetes distress (DDS - Diabetes Distress Scale), depression (PHQ-9), anxiety (GAD-7), eating disorders, cognitive impairment (especially in elderly). Address barriers to self-management (health literacy, financial constraints, social support). Behavioral health referral when indicated.

SICK DAY MANAGEMENT:
Continue basal insulin (never stop). Monitor glucose every 2-4 hours; check ketones if glucose >250 mg/dL (Type 1) or if ill. Hydration: 1 cup fluid every hour while awake (sugar-free if glucose >180, sugar-containing if glucose <100). Supplemental rapid-acting insulin for hyperglycemia per correction scale. Seek urgent care for: persistent vomiting, moderate/large ketones, severe dehydration, altered mental status, chest pain, respiratory distress.

TRANSITIONS OF CARE:
Hospitalization: Maintain glucose 140-180 mg/dL for most patients; more stringent may be appropriate if achievable without hypoglycemia. Basal-bolus preferred over sliding scale alone. Procedures: hold metformin 48 hours if using iodinated contrast (eGFR <60), hold SGLT2 inhibitors 3 days before surgery (euglycemic DKA risk), monitor closely if NPO.`,
        professional: `ADVANCED MONITORING STRATEGIES:

CGM ADVANCED ANALYTICS:
Ambulatory Glucose Profile (AGP) standardizes CGM data display: median glucose line, 25th-75th percentile (interquartile range), 10th-90th percentile bands over 24 hours. Interpreting glycemic variability: Coefficient of variation (CV = SD/mean × 100%); target <36% for stable glucose. Low Blood Glucose Index (LBGI) and High Blood Glucose Index (HBGI) quantify risk. CONGA (continuous overlapping net glycemic action) assesses hour-to-hour variability. Glucose metrics correlate with outcomes: TIR strongly associated with microvascular complications (retinopathy, microalbuminuria) in REPLACE-BG and other studies; every 10% increase in TIR correlates with reduced complication risk.

INSULIN DOSE ADJUSTMENT ALGORITHMS:
Pattern management: Review glucose data to identify trends (consistent fasting highs = increase basal; post-meal highs = adjust I:C ratio or pre-bolus timing). Correction factor (insulin sensitivity factor, ISF): 1800/TDD (rapid analogs) or 1500/TDD (regular insulin) = mg/dL drop per 1 unit. Insulin:carbohydrate ratio: 500/TDD = grams carbohydrate covered by 1 unit. Pre-bolus timing: rapid-acting 15 min before meal, ultra-rapid 0-5 min before. Active insulin time (duration of insulin action): typically 3-5 hours for rapid analogs, used for insulin-on-board calculations.

DIABETES TECHNOLOGY:
Sensor-augmented pump therapy: Integration of CGM with insulin pump (MiniMed 670G/770G/780G, Tandem t:slim with Control-IQ). Hybrid closed-loop: Algorithm automatically adjusts basal insulin based on CGM values; some systems (780G advanced, Omnipod 5) can deliver automatic correction boluses. Threshold suspend (LGS) and predictive low glucose suspend (PLGS) reduce hypoglycemia. Dual-hormone systems (insulin + glucagon) in development for tighter control with reduced hypoglycemia.

Smart insulin pens: Bluetooth-enabled pens (InPen, NovoPen Echo Plus) track dosing, calculate doses based on CGM data, provide reminders. Connected devices improve adherence and dosing accuracy.

Digital health: FDA-cleared digital therapeutics (BlueStar, Livongo) provide real-time coaching, pattern recognition, provider connectivity. Telemedicine for remote monitoring and dose adjustments.

COMPLICATION RISK STRATIFICATION:
Retinopathy: Risk calculators (DCCT-derived) based on diabetes duration, A1c, blood pressure. OCT-angiography detects microvascular changes before visible on fundus exam. AI-based screening (IDx-DR) for autonomous diabetic retinopathy detection.

Nephropathy: Kidney failure risk equations (KFRE - Tangri) incorporating age, sex, eGFR, ACR to predict 2- and 5-year risk of kidney failure. Precision medicine: APOL1 genotyping in African ancestry patients with kidney disease. Urine proteomics (CKD273 classifier) may predict nephropathy before albuminuria.

Cardiovascular: ASCVD risk calculators (Pooled Cohort Equations), though underestimate risk in diabetes. Coronary artery calcium scoring for reclassification in intermediate-risk patients. Cardiac autonomic testing (heart rate variability, baroreflex sensitivity) for high-risk stratification.

QUALITY METRICS AND REGISTRY DATA:
Healthcare Effectiveness Data and Information Set (HEDIS) measures: A1c control (<8%, <7%), medical attention for nephropathy, eye exams, blood pressure control. Provider feedback and benchmarking. Population health approaches identify gaps in care.

SPECIAL POPULATION CONSIDERATIONS:
Elderly: Less stringent goals (A1c <7.5% if healthy, <8% if complex/intermediate health, <8.5% if very complex/poor health) to avoid hypoglycemia. Simplify regimens (basal insulin alone may suffice). Cognitive impairment screening, fall risk assessment, vision/hearing adequacy for self-management.

Pediatric: Type 1 goals slightly higher (A1c <7.5% across ages). Intensive family-based education. Growth and pubertal monitoring. Psychosocial support critical during adolescence.

Pregnancy: Preconception counseling essential. Target glucose: fasting ≤95, 1-hour ≤140, 2-hour ≤120 mg/dL. A1c goal <6% if achievable without hypoglycemia. Insulin preferred (safe), metformin and glyburide acceptable alternatives. Increased surveillance for preeclampsia, fetal monitoring.`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'pancreas', structureName: 'Pancreas', linkText: 'Pancreas', relevance: 'Produces insulin and glucagon; beta cell destruction in Type 1 diabetes' },
    { structureId: 'islets-of-langerhans', structureName: 'Islets of Langerhans', linkText: 'Islets of Langerhans', relevance: 'Endocrine cells including beta cells that produce insulin' },
    { structureId: 'liver', structureName: 'Liver', linkText: 'Liver', relevance: 'Key target of insulin action; site of glucose storage and production' },
    { structureId: 'kidneys', structureName: 'Kidneys', linkText: 'Kidneys', relevance: 'Complication site (diabetic nephropathy); SGLT2 inhibitor site of action' },
    { structureId: 'retina', structureName: 'Retina', linkText: 'Retina', relevance: 'Complication site (diabetic retinopathy)' },
    { structureId: 'peripheral-nerves', structureName: 'Peripheral Nerves', linkText: 'Peripheral Nerves', relevance: 'Complication site (diabetic neuropathy)' },
    { structureId: 'heart', structureName: 'Heart', linkText: 'Heart', relevance: 'Macrovascular complications; coronary artery disease risk' },
    { structureId: 'blood-vessels', structureName: 'Blood Vessels', linkText: 'Blood Vessels', relevance: 'Microvascular and macrovascular damage from chronic hyperglycemia' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-17-pancreas',
      type: 'textbook',
      title: 'Anatomy and Physiology - Chapter 17: The Endocrine System - Pancreas and Glucose Regulation',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2022,
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/17-9-the-endocrine-pancreas',
      citation: 'Betts JG, Young KA, Wise JA, et al. Anatomy and Physiology 2e. Chapter 17: The Endocrine System - The Endocrine Pancreas. OpenStax; 2022.',
    },
    {
      referenceId: 'statpearls-diabetes',
      type: 'textbook',
      title: 'Diabetes Mellitus',
      authors: 'Sapra A, Bhandari P.',
      source: 'NCBI StatPearls',
      year: 2023,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK551501/',
      citation: 'Sapra A, Bhandari P. Diabetes Mellitus. StatPearls. NCBI; 2023.',
    },
    {
      referenceId: 'statpearls-dka',
      type: 'textbook',
      title: 'Diabetic Ketoacidosis',
      authors: 'Dhatariya KK, Vellanki P.',
      source: 'NCBI StatPearls',
      year: 2023,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK534848/',
      citation: 'Dhatariya KK, Vellanki P. Diabetic Ketoacidosis. StatPearls. NCBI; 2023.',
    },
    {
      referenceId: 'ada-standards-2023',
      type: 'guideline',
      title: 'Standards of Care in Diabetes—2023',
      authors: 'American Diabetes Association Professional Practice Committee',
      source: 'Diabetes Care',
      year: 2023,
      volume: '46(Suppl 1)',
      citation: 'American Diabetes Association Professional Practice Committee. Standards of Care in Diabetes—2023. Diabetes Care. 2023;46(Suppl 1):S1-S291.',
    },
    {
      referenceId: 'ada-easd-2022',
      type: 'guideline',
      title: 'Consensus Report: Management of Hyperglycemia in Type 2 Diabetes',
      authors: 'Davies MJ, et al.',
      source: 'Diabetes Care',
      year: 2022,
      volume: '45(11)',
      pages: '2753-2786',
      citation: 'Davies MJ, Aroda VR, Collins BS, et al. Management of Hyperglycemia in Type 2 Diabetes, 2022. A Consensus Report by the American Diabetes Association (ADA) and the European Association for the Study of Diabetes (EASD). Diabetes Care. 2022;45(11):2753-2786.',
    },
  ],
  relatedEntries: [
    { entryId: 'endocrine-system', entryType: 'physiology', name: 'Endocrine System', relationship: 'part-of', description: 'Pancreatic endocrine function and hormone regulation' },
    { entryId: 'pancreas', entryType: 'anatomy', name: 'Pancreas', relationship: 'part-of', description: 'Organ producing insulin' },
    { entryId: 'insulin', entryType: 'medication', name: 'Insulin', relationship: 'treated-by', description: 'Essential hormone for glucose regulation' },
    { entryId: 'metformin', entryType: 'medication', name: 'Metformin', relationship: 'treated-by', description: 'First-line medication for Type 2 diabetes' },
    { entryId: 'coronary-artery-disease', entryType: 'condition', name: 'Coronary Artery Disease', relationship: 'causes', description: 'Macrovascular complication of diabetes' },
    { entryId: 'stroke', entryType: 'condition', name: 'Stroke', relationship: 'causes', description: 'Cerebrovascular complication of diabetes' },
    { entryId: 'kidney-disease', entryType: 'condition', name: 'Chronic Kidney Disease', relationship: 'causes', description: 'Diabetic nephropathy' },
    { entryId: 'hypoglycemia', entryType: 'condition', name: 'Hypoglycemia', relationship: 'causes', description: 'Low blood sugar from diabetes treatment' },
    { entryId: 'obesity', entryType: 'condition', name: 'Obesity', relationship: 'caused-by', description: 'Major risk factor for Type 2 diabetes' },
    { entryId: 'metabolic-syndrome', entryType: 'condition', name: 'Metabolic Syndrome', relationship: 'related-to', description: 'Cluster of risk factors including insulin resistance' },
  ],
  searchMetadata: {
    primaryKeywords: ['diabetes mellitus', 'diabetes', 'type 1 diabetes', 'type 2 diabetes', 'T1DM', 'T2DM', 'gestational diabetes', 'hyperglycemia', 'insulin', 'blood sugar'],
    secondaryKeywords: ['diabetic ketoacidosis', 'DKA', 'hyperosmolar hyperglycemic state', 'HHS', 'diabetic retinopathy', 'diabetic nephropathy', 'diabetic neuropathy', 'A1c', 'hemoglobin A1c', 'glucose tolerance test', 'OGTT', 'fasting glucose'],
    synonyms: ['sugar diabetes', 'diabetes mellitus', 'DM', 'adult-onset diabetes', 'juvenile diabetes', 'insulin-dependent diabetes', 'non-insulin-dependent diabetes', 'gestational diabetes mellitus'],
    abbreviations: ['DM', 'T1DM', 'T2DM', 'GDM', 'HbA1c', 'A1c', 'FPG', 'OGTT', 'DKA', 'HHS', 'SMBG', 'CGM', 'TIR', 'BMI', 'eGFR', 'ACR', 'SGLT2', 'GLP-1', 'DPP-4', 'MODY', 'LADA', 'ASCVD'],
    icdCodes: ['E10', 'E10.9', 'E11', 'E11.9', 'E13', 'E14', 'O24.4', 'E08', 'E09'],
    meshTerms: ['Diabetes Mellitus', 'Diabetes Mellitus, Type 1', 'Diabetes Mellitus, Type 2', 'Diabetic Ketoacidosis', 'Hyperglycemia', 'Insulin', 'Glucose', 'Hemoglobin A, Glycosylated'],
    tags: ['endocrinology', 'metabolism', 'chronic disease', 'autoimmune', 'insulin resistance', 'hyperglycemia', 'microvascular complications', 'macrovascular complications', 'preventive care'],
  },
  lastUpdated: '2026-02-02T13:30:00Z',
  version: '1.0',
  reviewStatus: 'approved',
  clinicalImportance: 'essential',
};

// ═══════════════════════════════════════════════════════════════════════════════
// ADDITIONAL DIABETES-RELATED ENTRIES
// ═══════════════════════════════════════════════════════════════════════════════

export const diabeticKetoacidosisEntry: EncyclopediaEntry = {
  entryId: 'diabetic-ketoacidosis',
  name: 'Diabetic Ketoacidosis (DKA)',
  nameEs: 'Cetoacidosis Diabetica (CAD)',
  entryType: 'condition',
  category: 'emergency',
  aliases: ['DKA'],
  summary: 'A life-threatening acute complication of diabetes characterized by hyperglycemia, ketosis, and metabolic acidosis due to insulin deficiency.',
  overview: {
    patient: 'Diabetic ketoacidosis (DKA) is a dangerous condition that happens when your body lacks insulin and starts breaking down fat for energy too quickly. This produces acids called ketones that build up in your blood. DKA usually develops in people with Type 1 diabetes but can occur in Type 2. Warning signs include extreme thirst, frequent urination, nausea, vomiting, stomach pain, fruity-smelling breath, rapid breathing, and confusion. DKA is a medical emergency requiring immediate hospital treatment with fluids and insulin. Without prompt treatment, it can lead to coma or death.',
    intermediate: 'Diabetic ketoacidosis is an acute metabolic emergency defined by the triad of hyperglycemia (glucose >250 mg/dL), ketonemia (positive serum ketones or beta-hydroxybutyrate ≥3 mmol/L), and anion gap metabolic acidosis (pH <7.30, bicarbonate <18 mEq/L). It results from absolute insulin deficiency combined with elevated counter-regulatory hormones (glucagon, cortisol, catecholamines, growth hormone). Pathophysiology involves unrestrained lipolysis, hepatic ketogenesis, and gluconeogenesis causing hyperglycemia and ketone accumulation. Precipitants include infection (40%), insulin omission (25%), new-onset diabetes (20%), myocardial infarction, stroke, or medications. Mortality <5% with appropriate treatment. Management involves aggressive fluid resuscitation, intravenous insulin, potassium replacement, and treatment of precipitating causes.',
    professional: 'Diabetic ketoacidosis (DKA) represents the most severe manifestation of absolute insulin deficiency and counter-regulatory hormone excess. Diagnostic criteria: plasma glucose >250 mg/dL, arterial pH <7.30, serum bicarbonate <18 mEq/L, anion gap >10, positive serum ketones, and ketonuria. Pathophysiology centers on adipose tissue lipolysis → increased FFA delivery to liver → mitochondrial beta-oxidation and ketogenesis (acetoacetate, beta-hydroxybutyrate). Glucagon excess drives hepatic ketogenesis and gluconeogenesis while peripheral insulin absence prevents glucose utilization. Hyperglycemia causes osmotic diuresis with volume depletion, electrolyte losses (total body deficits: Na+ 7-10 mEq/kg, K+ 3-5 mEq/kg, PO4 5-10 mmol/kg), and prerenal azotemia. Ketone bodies cause high anion gap metabolic acidosis with respiratory compensation (Kussmaul respirations). Precipitants must be identified and treated. Treatment protocol: 1-1.5 L isotonic saline in first hour, then 250-500 mL/h based on hemodynamics; regular insulin 0.1 U/kg bolus then 0.1 U/kg/h or 0.14 U/kg/h without bolus; potassium replacement when K+ <5.2 (hold insulin if K+ <3.3); glucose monitoring with dextrose addition when glucose <200; transition to subcutaneous insulin when acidosis resolves. Complications include hypoglycemia, hypokalemia, cerebral edema (primarily pediatric), and ARDS.',
  },
  content: [
    {
      title: 'Clinical Features and Diagnosis',
      content: {
        patient: `Symptoms of DKA develop over hours to days and include:

- Extreme thirst and frequent urination (as your body tries to eliminate excess sugar)
- Nausea and vomiting (ketones irritate the stomach)
- Stomach pain (can be severe, sometimes mistaken for appendicitis)
- Fruity or acetone breath (ketones have a sweet smell)
- Rapid, deep breathing (your body tries to correct the acid buildup)
- Weakness and fatigue
- Confusion or drowsiness (can progress to coma)
- Dry mouth and skin
- Flushed face

If you or someone with diabetes shows these symptoms, especially if blood sugar is very high, seek emergency medical help immediately.`,
        intermediate: `CLINICAL PRESENTATION:
Symptoms evolve over 24 hours or less in most cases. Classic presentation includes polyuria, polydipsia, and weight loss progressing to nausea, vomiting, and abdominal pain. Abdominal pain in DKA can mimic acute abdomen (surgical abdomen) due to gastric stasis, ileus, or acidosis; resolves with DKA treatment. Physical findings: dehydration (dry mucous membranes, poor skin turgor, tachycardia, orthostatic hypotension), Kussmaul respirations (deep, rapid breathing attempting respiratory compensation for metabolic acidosis - respiratory quotient approaches 1.0), acetone breath odor (fruity, like nail polish remover), altered mental status ranging from mild confusion to coma (more common in HHS than DKA). Fever suggests underlying infection; absence of fever doesn't exclude infection.

DIAGNOSTIC CRITERIA:
- Plasma glucose >250 mg/dL (13.9 mmol/L)
- Arterial pH <7.30 or venous pH <7.25
- Serum bicarbonate <18 mEq/L
- Anion gap >10-12 mEq/L (calculated as Na+ - [Cl- + HCO3-])
- Positive serum ketones (acetoacetate, beta-hydroxybutyrate) or moderate/large ketonuria
- Effective serum osmolality variable but often <320 mOsm/kg (distinguishes from HHS)

LABORATORY FINDINGS:
Complete metabolic panel: Hyperglycemia, hyponatremia (dilutional - corrected Na+ adds 1.6 mEq/L for every 100 mg/dL glucose above 100), anion gap metabolic acidosis, prerenal azotemia (BUN:creatinine ratio >30:1). Serum potassium often normal or elevated despite total body deficit (acidosis shifts K+ extracellularly). Serum phosphate low or low-normal. Beta-hydroxybutyrate elevated (preferred over serum ketones as represents predominant ketone body). CBC may show leukocytosis (stress demargination or infection). Lipase often mildly elevated without true pancreatitis. ECG for MI evaluation if indicated; peaked T waves if hyperkalemia present.`,
        professional: `DIAGNOSTIC NUANCES:

Euglycemic DKA: Glucose <250 mg/dL (sometimes <200) with ketoacidosis. Occurs with starvation, pregnancy, or SGLT2 inhibitor use. Mechanism: SGLT2 inhibitors cause glucosuria lowering blood glucose while ketogenesis continues; reduced insulin:glucagon ratio favors ketone production. Recognized increasingly with SGLT2 inhibitor use in Type 2 diabetes. Treatment same but dextrose added earlier.

Anion gap interpretation: Corrected anion gap adjusts for albumin (each 1 g/dL decrease in albumin reduces AG by 2.5). Delta gap (Δ/Δ ratio) = (Measured AG - Normal AG)/(Normal HCO3- - Measured HCO3-). Normal ratio 1-2; <1 suggests mixed non-anion gap metabolic acidosis; >2 suggests metabolic alkalosis coexisting.

Serum ketone measurement: Nitroprusside reaction (Acetest, Ketostix) detects acetoacetate and acetone, not beta-hydroxybutyrate (BHB). During DKA, BHB:acetoacetate ratio 3:1 or higher; with treatment, BHB converts to acetoacetate, paradoxically worsening "ketone" readings initially. Direct BHB measurement (ketone meter, laboratory) preferred for diagnosis and monitoring. Resolution criteria: BHB <1 mmol/L better than traditional closure of anion gap alone.

Precipitant evaluation: Complete infectious workup (chest X-ray, urinalysis and culture, blood cultures if febrile). ECG and troponins for MI. Lipase if abdominal pain significant (true pancreatitis can precipitate DKA). Pregnancy test in women of childbearing age. Medication review for SGLT2 inhibitors, steroids, atypical antipsychotics, interferon.`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'pancreas', structureName: 'Pancreas', linkText: 'Pancreas', relevance: 'Source of insulin deficiency' },
    { structureId: 'liver', structureName: 'Liver', linkText: 'Liver', relevance: 'Site of ketone production' },
  ],
  references: [
    {
      referenceId: 'ada-dka-guideline',
      type: 'guideline',
      title: 'Hyperglycemic Crises in Adult Patients With Diabetes',
      authors: 'Dhatariya KK, et al.',
      source: 'Diabetes Care',
      year: 2023,
      citation: 'Dhatariya KK, et al. Hyperglycemic Crises in Adult Patients With Diabetes: A Consensus Statement. Diabetes Care. 2023;46(Suppl 1):S278-S286.',
    },
  ],
  relatedEntries: [
    { entryId: 'diabetes-mellitus', entryType: 'condition', name: 'Diabetes Mellitus', relationship: 'caused-by' },
    { entryId: 'hyperosmolar-hyperglycemic-state', entryType: 'condition', name: 'Hyperosmolar Hyperglycemic State', relationship: 'similar-to' },
    { entryId: 'type-1-diabetes', entryType: 'condition', name: 'Type 1 Diabetes', relationship: 'related-to' },
  ],
  searchMetadata: {
    primaryKeywords: ['diabetic ketoacidosis', 'DKA', 'ketoacidosis', 'ketones', 'diabetic emergency'],
    secondaryKeywords: ['hyperglycemia', 'metabolic acidosis', 'anion gap', 'insulin deficiency'],
    synonyms: ['DKA', 'diabetic acidosis'],
    abbreviations: ['DKA', 'BHB', 'HHS'],
    icdCodes: ['E10.1', 'E11.1'],
    meshTerms: ['Diabetic Ketoacidosis'],
    tags: ['emergency', 'endocrine', 'critical care'],
  },
  lastUpdated: '2026-02-02T13:30:00Z',
  version: '1.0',
  reviewStatus: 'approved',
  clinicalImportance: 'essential',
};

export const type1DiabetesEntry: EncyclopediaEntry = {
  entryId: 'type-1-diabetes',
  name: 'Type 1 Diabetes Mellitus',
  nameEs: 'Diabetes Mellitus Tipo 1',
  entryType: 'condition',
  category: 'endocrine',
  aliases: ['T1DM', 'Juvenile Diabetes', 'Insulin-Dependent Diabetes', 'IDDM'],
  summary: 'An autoimmune disease characterized by destruction of pancreatic beta cells leading to absolute insulin deficiency and lifelong dependence on exogenous insulin.',
  overview: {
    patient: 'Type 1 diabetes is an autoimmune condition where your body\'s immune system mistakenly attacks and destroys the insulin-producing cells in your pancreas. Without insulin, your body cannot use glucose for energy, causing blood sugar to rise dangerously high. Type 1 diabetes typically develops in children and young adults, which is why it used to be called "juvenile diabetes," but it can occur at any age. People with Type 1 diabetes must take insulin every day to survive. It is not caused by diet or lifestyle, and currently there is no cure. With proper insulin therapy, blood sugar monitoring, and lifestyle management, people with Type 1 diabetes can live full, healthy lives.',
    intermediate: 'Type 1 diabetes mellitus (T1DM) is an organ-specific autoimmune disease resulting in the destruction of pancreatic beta cells and absolute insulin deficiency. It accounts for 5-10% of all diabetes cases. The disease involves genetic susceptibility (HLA class II haplotypes DR3-DQ2 and DR4-DQ8), environmental triggers (enteroviruses, diet), and autoimmune mechanisms (autoreactive T cells, autoantibodies). Autoantibodies against GAD65, IA-2, insulin, and ZnT8 can be detected months to years before symptom onset. Clinical presentation follows a prodrome of polyuria, polydipsia, weight loss, and often includes diabetic ketoacidosis (DKA) at diagnosis. Management requires intensive insulin therapy (multiple daily injections or pump), frequent blood glucose monitoring or continuous glucose monitoring, carbohydrate counting, and vigilance for hypoglycemia. Long-term complications mirror Type 2 diabetes but may develop more rapidly with poor control.',
    professional: 'Type 1 diabetes mellitus (T1DM) is a T-cell-mediated autoimmune disease resulting in selective destruction of pancreatic beta cells and absolute insulin deficiency. Genetic susceptibility conferred primarily by HLA class II genes (HLA-DRB1*03-DQA1*05:01-DQB1*02:01 and HLA-DRB1*04-DQA1*03:01-DQB1*03:02 haplotypes), with >50 loci contributing through genome-wide association studies (INS-VNTR, PTPN22, IL2RA). Environmental triggers include enteroviruses (Coxsackie B), rotavirus, and potentially dietary factors. Autoimmune pathogenesis involves antigen presentation by dendritic cells, activation of autoreactive CD4+ Th1 cells, CD8+ cytotoxic T-cell mediated beta cell apoptosis, and humoral autoimmunity (anti-GAD65, anti-IA-2/ICA512, anti-insulin, anti-ZnT8, anti-ICA69 antibodies). Disease staging: Stage 1 (asymptomatic, ≥2 autoantibodies, normoglycemia), Stage 2 (dysglycemia, ≥2 autoantibodies), Stage 3 (symptomatic diabetes). At diagnosis, 80-90% of beta cell mass has been destroyed. Clinical management requires physiologic insulin replacement using basal-bolus regimens or continuous subcutaneous insulin infusion (CSII), intensive glucose monitoring, structured diabetes education, and psychosocial support. Immunotherapy (teplizumab) approved for delay of Stage 3 in Stage 2 at-risk individuals.',
  },
  content: [
    {
      title: 'Autoimmune Pathogenesis',
      content: {
        patient: `Type 1 diabetes develops when the immune system goes wrong:

The immune system normally protects you from infections by attacking viruses and bacteria. In Type 1 diabetes, it mistakenly identifies the insulin-producing beta cells in your pancreas as threats and destroys them. This happens over months or years before symptoms appear.

Scientists believe this requires three things:
1. Genetic predisposition - certain genes increase risk
2. Environmental trigger - possibly a viral infection
3. Autoimmune response - the immune attack on beta cells

Once enough beta cells are destroyed (usually 80-90%), the pancreas can no longer produce enough insulin, and symptoms of diabetes develop. The autoimmune process may continue slowly even after diagnosis.`,
        intermediate: `AUTOIMMUNE MECHANISMS:

Genetic Susceptibility: HLA class II genes account for ~50% of genetic risk. High-risk haplotypes: DR3-DQ2 (DRB1*03:01-DQA1*05:01-DQB1*02:01) and DR4-DQ8 (DRB1*04-DQA1*03:01-DQB1*03:02). Heterozygotes for DR3/DR4 have highest risk (OR ~15). Protective alleles: DQB1*06:02 (strong protection, OR 0.03). Non-HLA loci: INS-VNTR (insulin gene variable number tandem repeat, affects thymic insulin expression), PTPN22 (lymphoid tyrosine phosphatase, T-cell signaling), IL2RA (CD25, IL-2 receptor alpha, regulatory T-cell function), CTLA4 (immune checkpoint).

Environmental Triggers: Concordance in identical twins only 30-50%, indicating environmental factors. Enteroviruses (especially Coxsackie B) most strongly implicated: viral infection of beta cells, molecular mimicry, bystander activation. Rotavirus (seasonality correlation, shared epitopes with T-cell epitopes). Hygiene hypothesis: reduced early childhood infections may increase autoimmunity. Vitamin D deficiency associated with increased risk. Early infant diet: breastfeeding protective; early exposure to cow's milk or gluten may increase risk (controversial). Gut microbiome alterations precede disease.

Autoimmune Process: Insulitis (lymphocytic infiltration of islets) precedes clinical disease. Dendritic cells present beta cell antigens (insulin, GAD65, IA-2, ZnT8) to CD4+ T cells in pancreatic lymph nodes. Th1-dominant response (IFN-γ, TNF-α) promotes CD8+ cytotoxic T-cell differentiation. CD8+ T cells recognize beta cell antigens presented on MHC class I and kill via perforin/granzyme and Fas-Fas ligand pathways. Autoantibodies produced by B cells are markers but not directly pathogenic; they indicate ongoing autoimmune destruction.`,
        professional: `DETAILED IMMUNOPATHOLOGY:

Beta Cell Autoantigens:
- Insulin and proinsulin (B-chain peptide epitopes, insulin B:9-23 immunodominant in NOD mice and humans)
- GAD65 (glutamic acid decarboxylase, 65 kDa isoform, gamma-aminobutyric acid synthesis)
- IA-2 (islet antigen 2, ICA512, protein tyrosine phosphatase-like protein)
- ZnT8 (zinc transporter 8, Slc30A8, zinc transport into insulin granules, polymorphism affects risk)
- ICA69 (islet cell antigen 69)

Autoantibody characteristics:
- GAD65 antibodies: Most persistent, present in 70-80% at diagnosis, useful for LADA diagnosis
- IA-2 antibodies: Present in 50-60%, correlate with rapid progression
- ZnT8 antibodies: Present in 60-70%, more common in children, marker of aggressive beta cell destruction
- Insulin autoantibodies (IAA): Often first to appear in young children, affected by exogenous insulin therapy
- ICA (islet cell cytoplasmic antibodies): Older assay, largely replaced by specific antibody testing

T-cell mediated cytotoxicity: Autoreactive CD8+ T cells infiltrate islets (insulitis), recognize peptide-MHC class I complexes on beta cells. Perforin/granzyme B-mediated killing predominant. Beta cells have low expression of anti-apoptotic Bcl-2, making them susceptible. Fas-FasL interaction contributes. Cytokine-mediated toxicity: IFN-γ, TNF-α, IL-1β directly impair beta cell function and induce apoptosis.

Disease prediction: Risk stratification using genetic (HLA) + autoantibody screening. Single autoantibody: ~15% 10-year risk. Multiple autoantibodies: >80% 10-year risk. TrialNet and other screening programs identify at-risk relatives.`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'pancreas', structureName: 'Pancreas', linkText: 'Pancreas', relevance: 'Site of beta cell destruction' },
    { structureId: 'islets-of-langerhans', structureName: 'Islets of Langerhans', linkText: 'Islets of Langerhans', relevance: 'Beta cells destroyed by autoimmune process' },
  ],
  references: [
    {
      referenceId: 'statpearls-t1dm',
      type: 'textbook',
      title: 'Diabetes Mellitus Type 1',
      authors: 'Redondo MJ, et al.',
      source: 'NCBI StatPearls',
      year: 2023,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK507713/',
      citation: 'Redondo MJ, et al. Diabetes Mellitus Type 1. StatPearls. NCBI; 2023.',
    },
  ],
  relatedEntries: [
    { entryId: 'diabetes-mellitus', entryType: 'condition', name: 'Diabetes Mellitus', relationship: 'part-of' },
    { entryId: 'diabetic-ketoacidosis', entryType: 'condition', name: 'Diabetic Ketoacidosis', relationship: 'causes' },
    { entryId: 'insulin', entryType: 'medication', name: 'Insulin', relationship: 'treated-by' },
  ],
  searchMetadata: {
    primaryKeywords: ['type 1 diabetes', 'T1DM', 'juvenile diabetes', 'insulin dependent diabetes', 'autoimmune diabetes'],
    secondaryKeywords: ['beta cell destruction', 'autoantibodies', 'GAD65', 'insulin deficiency'],
    synonyms: ['T1D', 'IDDM', 'juvenile onset diabetes'],
    abbreviations: ['T1DM', 'T1D', 'IDDM'],
    icdCodes: ['E10'],
    meshTerms: ['Diabetes Mellitus, Type 1'],
    tags: ['endocrine', 'autoimmune', 'pediatric', 'chronic'],
  },
  lastUpdated: '2026-02-02T13:30:00Z',
  version: '1.0',
  reviewStatus: 'approved',
  clinicalImportance: 'essential',
};

export const type2DiabetesEntry: EncyclopediaEntry = {
  entryId: 'type-2-diabetes',
  name: 'Type 2 Diabetes Mellitus',
  nameEs: 'Diabetes Mellitus Tipo 2',
  entryType: 'condition',
  category: 'endocrine',
  aliases: ['T2DM', 'Adult-Onset Diabetes', 'Non-Insulin-Dependent Diabetes', 'NIDDM'],
  summary: 'A metabolic disorder characterized by insulin resistance and progressive beta cell dysfunction, accounting for 90-95% of diabetes cases.',
  overview: {
    patient: 'Type 2 diabetes is the most common form of diabetes, affecting about 90-95% of people with the disease. In Type 2 diabetes, your body becomes resistant to insulin and over time cannot make enough insulin to keep blood sugar normal. It typically develops in adults over 45 but is increasingly seen in younger people, including children and teens. Risk factors include being overweight, family history, inactivity, and certain ethnic backgrounds. Many people have no symptoms at first. Type 2 diabetes can often be managed with lifestyle changes and oral medications, though some people eventually need insulin. With proper management, complications can be prevented or delayed.',
    intermediate: 'Type 2 diabetes mellitus (T2DM) is a chronic metabolic disorder characterized by insulin resistance in peripheral tissues and progressive beta cell dysfunction. It represents 90-95% of all diabetes cases. Pathophysiology involves a complex interplay of genetic susceptibility (>400 loci identified, TCF7L2 strongest), obesity (especially visceral adiposity), physical inactivity, and aging. The natural history includes prolonged prediabetes phase (impaired fasting glucose or impaired glucose tolerance) during which insulin resistance is compensated by hyperinsulinemia. Eventually, beta cells cannot maintain adequate insulin secretion relative to the degree of insulin resistance, leading to hyperglycemia. Risk factors include obesity, family history, sedentary lifestyle, age >45, history of gestational diabetes, PCOS, and certain ethnicities (African American, Hispanic/Latino, Native American, Asian American). Often asymptomatic at diagnosis, detected through screening. Management emphasizes lifestyle modification, with metformin as first-line pharmacotherapy, progressing to additional agents (SGLT2 inhibitors, GLP-1 receptor agonists, DPP-4 inhibitors, sulfonylureas, thiazolidinediones, insulin) based on individual characteristics and comorbidities.',
    professional: 'Type 2 diabetes mellitus (T2DM) is a heterogeneous, polygenic metabolic disorder characterized by pathophysiologic defects in multiple organs: (1) insulin resistance in skeletal muscle (reduced glucose uptake), adipose tissue (increased lipolysis), and liver (unrestrained gluconeogenesis); (2) progressive beta cell dysfunction and loss of adequate insulin secretion; (3) incretin defect (reduced GLP-1 response, impaired insulinotropic effect); (4) alpha cell dysfunction (inappropriate glucagon secretion); (5) renal glucose reabsorption (increased SGLT2 activity); (6) central appetite regulation (resistance to satiety signals). Genetic architecture involves common variants (TCF7L2, CDKN2A, CDKAL1, HHEX, SLC30A8, KCNJ11, FTO) each contributing small effect, plus rare monogenic forms (MODY). Epigenetic modifications and metabolic memory contribute to disease progression. The "twin cycle hypothesis" proposes that chronic calorie excess and ectopic lipid accumulation in liver and pancreas drive disease, potentially reversible with substantial weight loss. Natural history includes compensated insulin resistance (normoglycemia), prediabetes (dysglycemia), and overt diabetes with progressive beta cell failure. T2DM is part of metabolic syndrome clustering with hypertension, dyslipidemia, and central obesity.',
  },
  content: [
    {
      title: 'Pathophysiology and Risk Factors',
      content: {
        patient: `Type 2 diabetes develops through two main problems:

INSULIN RESISTANCE: Your body's cells don't respond normally to insulin. It's like the insulin "key" doesn't unlock the cells properly to let glucose in. Your pancreas tries to compensate by making more insulin, and for a while this works.

BETA CELL FAILURE: Eventually, after years of overworking, the pancreas can't keep up. It produces less and less insulin, and blood sugar rises.

WHAT CAUSES THIS:
- Being overweight, especially carrying weight around your middle
- Lack of physical activity
- Family history of diabetes
- Getting older (risk increases after 45)
- Having had gestational diabetes
- Certain ethnic backgrounds have higher risk
- Poor sleep and high stress may contribute

The good news: losing even 5-10% of your body weight and getting regular exercise can dramatically improve or even reverse early Type 2 diabetes.`,
        intermediate: `PATHOPHYSIOLOGY:

Insulin Resistance: Reduced glucose uptake and metabolism in response to insulin. Mechanisms include: (1) lipid-induced insulin resistance - elevated plasma FFA (from adipose lipolysis) lead to intramyocellular and intrahepatic lipid accumulation, activating novel PKC isoforms that serine-phosphorylate IRS-1, blocking PI3K activation; (2) inflammation - adipose tissue macrophage infiltration and pro-inflammatory cytokines (TNF-α, IL-6, IL-1β) activate serine kinases (IKKβ, JNK) that impair insulin signaling; (3) mitochondrial dysfunction - reduced oxidative capacity leads to incomplete fatty acid oxidation and accumulation of toxic lipid intermediates; (4) ER stress - unfolded protein response impairs insulin signaling.

Beta Cell Dysfunction: Progressive failure of glucose-stimulated insulin secretion. Mechanisms: glucotoxicity (chronic hyperglycemia impairs insulin gene transcription and beta cell function), lipotoxicity (ceramide formation, ER stress, oxidative stress), amylin aggregation (islet amyloid polypeptide deposits), dedifferentiation (beta cells revert to progenitor-like state), reduced beta cell mass (apoptosis exceeds replication). Loss of first-phase insulin response is early marker.

Risk Factors:
- Obesity: BMI ≥30 (especially visceral/central adiposity - waist circumference >40" men, >35" women in US)
- Physical inactivity: <150 min/week moderate activity
- Family history: First-degree relative with diabetes (2-3x risk)
- Age: Risk increases significantly after 45 years
- Race/Ethnicity: African American, Hispanic/Latino, Native American, Asian American, Pacific Islander (1.5-2x higher rates)
- History of GDM: 50% lifetime risk of T2DM
- PCOS: Insulin resistance syndrome
- Prediabetes: Annual progression rate 5-10%
- Sleep disorders: Obstructive sleep apnea, shift work, short sleep duration
- Medications: Glucocorticoids, atypical antipsychotics, some antiretrovirals`,
        professional: `ADVANCED PATHOPHYSIOLOGY:

Tissue-Specific Insulin Resistance:
Skeletal muscle: Primary site of insulin-stimulated glucose disposal. Defects in IRS-1-associated PI3K activity, reduced GLUT4 translocation, decreased glycogen synthesis. "Glucose-fatty acid cycle" (Randle hypothesis modified): fatty acid oxidation produces acetyl-CoA and NADH, inhibiting PDH and shifting pyruvate to lactate rather than oxidation, and inhibiting key glycolytic enzymes. Intramyocellular lipid (IMCL) measured by MR spectroscopy correlates with insulin resistance.

Liver: Insulin normally suppresses hepatic glucose production (HGP) via FOXO1 phosphorylation/exclusion reducing gluconeogenic enzymes (PEPCK, G6Pase, PCK2) and activating glycogen synthesis. In insulin resistance, unrestrained HGP continues despite hyperinsulinemia ("hepatic insulin resistance"). Hepatic steatosis (fatty liver) is both consequence and cause - lipid intermediates (DAG, ceramides) activate PKCε → IRS-2 serine phosphorylation → impaired insulin signaling. Portal hypothesis: visceral adipose lipolysis delivers high FFA concentrations directly to liver via portal vein.

Adipose tissue: Insulin normally suppresses lipolysis (HSL inhibition) and stimulates LPL (triglyceride clearance). In obesity/insulin resistance, increased basal lipolysis (despite hyperinsulinemia) elevates circulating FFA. Adipokine dysregulation: reduced adiponectin (insulin-sensitizing), increased leptin (leptin resistance), increased inflammatory mediators (TNF-α, IL-6, resistin, RBP4, MCP-1).

Beta Cell Failure Progression:
"Starling curve of the pancreas" - insulin secretion initially increases to compensate for resistance, then plateaus and declines. Stages: (1) compensation (hyperinsulinemia maintains normoglycemia), (2) transition (postprandial hyperglycemia, IFG/IGT), (3) overt diabetes (fasting hyperglycemia), (4) insulin dependence (severe insulin deficiency). Mechanisms: ER stress (UPR activation → CHOP-mediated apoptosis), oxidative stress (mitochondrial ROS), amyloid deposition (IAPP cytotoxicity), dedifferentiation (loss of beta cell identity markers PDX1, NKX6.1, expression of progenitor markers), possibly viral infection or autoimmune component in some cases.

Incretin Defect: GLP-1 is secreted by L-cells in response to nutrients. In T2DM: reduced postprandial GLP-1 secretion (though modest, ~30% reduction); more importantly, impaired insulinotropic response to GLP-1 ("beta cell GLP-1 resistance"). GIP response also blunted. This defect is partially correctable with improved glycemic control (glucotoxicity reversal).`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'pancreas', structureName: 'Pancreas', linkText: 'Pancreas', relevance: 'Beta cell dysfunction and insulin secretion' },
    { structureId: 'adipose-tissue', structureName: 'Adipose Tissue', linkText: 'Adipose Tissue', relevance: 'Insulin resistance and inflammation source' },
    { structureId: 'liver', structureName: 'Liver', linkText: 'Liver', relevance: 'Insulin resistance site; glucose production' },
    { structureId: 'skeletal-muscle', structureName: 'Skeletal Muscle', linkText: 'Skeletal Muscle', relevance: 'Primary site of insulin-stimulated glucose disposal' },
  ],
  references: [
    {
      referenceId: 'statpearls-t2dm',
      type: 'textbook',
      title: 'Diabetes Mellitus Type 2',
      authors: 'Freeman AM, et al.',
      source: 'NCBI StatPearls',
      year: 2023,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK513253/',
      citation: 'Freeman AM, et al. Diabetes Mellitus Type 2. StatPearls. NCBI; 2023.',
    },
  ],
  relatedEntries: [
    { entryId: 'diabetes-mellitus', entryType: 'condition', name: 'Diabetes Mellitus', relationship: 'part-of' },
    { entryId: 'insulin-resistance', entryType: 'physiology', name: 'Insulin Resistance', relationship: 'caused-by' },
    { entryId: 'metabolic-syndrome', entryType: 'condition', name: 'Metabolic Syndrome', relationship: 'related-to' },
    { entryId: 'obesity', entryType: 'condition', name: 'Obesity', relationship: 'caused-by' },
  ],
  searchMetadata: {
    primaryKeywords: ['type 2 diabetes', 'T2DM', 'adult onset diabetes', 'insulin resistance'],
    secondaryKeywords: ['beta cell dysfunction', 'prediabetes', 'metabolic syndrome', 'hyperglycemia'],
    synonyms: ['T2D', 'NIDDM', 'non-insulin dependent diabetes'],
    abbreviations: ['T2DM', 'T2D', 'NIDDM', 'IR'],
    icdCodes: ['E11'],
    meshTerms: ['Diabetes Mellitus, Type 2'],
    tags: ['endocrine', 'metabolism', 'chronic', 'lifestyle'],
  },
  lastUpdated: '2026-02-02T13:30:00Z',
  version: '1.0',
  reviewStatus: 'approved',
  clinicalImportance: 'essential',
};

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORT ALL DIABETES ENTRIES
// ═══════════════════════════════════════════════════════════════════════════════

export const diabetesEntries: EncyclopediaEntry[] = [
  diabetesMellitusEntry,
  diabeticKetoacidosisEntry,
  type1DiabetesEntry,
  type2DiabetesEntry,
];

export default diabetesEntries;
