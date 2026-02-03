/**
 * Biological Self - Metabolic Conditions Database
 * Compact reference of 30 metabolic/endocrine conditions across all categories
 */

// --- Types ---

export type MetabolicCategory =
  | 'diabetes' | 'thyroid' | 'adrenal' | 'pituitary'
  | 'lipid' | 'obesity' | 'bone-mineral' | 'inborn-error';

export interface MetabolicConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: MetabolicCategory;
  icd11: string;
  description: string;
  pathophysiology: string;
  clinicalFeatures: string[];
  diagnostics: string[];
  treatment: string[];
  complications: string[];
  patientExplanation: string;
  emergencySigns: string[];
}

// --- Compact helper ---

function mc(
  id: string, name: string, nameEs: string, category: MetabolicCategory,
  icd11: string, description: string, pathophysiology: string,
  clinicalFeatures: string[], diagnostics: string[], treatment: string[],
  complications: string[], patientExplanation: string, emergencySigns: string[]
): MetabolicConditionEntry {
  return {
    id, name, nameEs, category, icd11, description, pathophysiology,
    clinicalFeatures, diagnostics, treatment, complications,
    patientExplanation, emergencySigns,
  };
}

// --- Database ---

const metabolicArray: MetabolicConditionEntry[] = [

  // ============================================================
  // DIABETES (5)
  // ============================================================
  mc(
    'type-1-diabetes',
    'Type 1 Diabetes Mellitus',
    'Diabetes Mellitus Tipo 1',
    'diabetes',
    '5A10',
    'Autoimmune destruction of pancreatic beta cells leading to absolute insulin deficiency, typically presenting in childhood or adolescence.',
    'T-cell mediated autoimmune destruction of beta cells in genetically susceptible individuals (HLA-DR3/DR4). Triggers may include viral infections (Coxsackie B, enteroviruses). Progressive beta-cell loss leads to absolute insulin deficiency. GAD65, IA-2, and ZnT8 autoantibodies are present in ~90% at diagnosis.',
    ['Polyuria and polydipsia', 'Unintentional weight loss', 'Fatigue', 'Blurred vision', 'DKA at presentation (30%)', 'Nausea and vomiting'],
    ['Fasting glucose >=126 mg/dL', 'Random glucose >=200 mg/dL with symptoms', 'HbA1c >=6.5%', 'C-peptide low/undetectable', 'Positive autoantibodies (GAD65, IA-2, ZnT8, IAA)'],
    ['Basal-bolus insulin regimen (MDI or insulin pump)', 'Continuous glucose monitoring (CGM)', 'Carbohydrate counting', 'Hybrid closed-loop systems', 'Regular HbA1c monitoring (goal <7%)', 'Annual screening for complications'],
    ['Diabetic ketoacidosis (DKA)', 'Hypoglycemia', 'Retinopathy', 'Nephropathy', 'Neuropathy', 'Cardiovascular disease', 'Celiac disease and thyroid autoimmunity'],
    'Type 1 diabetes means your immune system has attacked the cells that make insulin. You will need insulin injections or a pump every day for life. With modern tools like continuous glucose monitors and insulin pumps, most people live full, active lives.',
    ['Diabetic ketoacidosis: nausea, vomiting, fruity breath, rapid breathing, confusion', 'Severe hypoglycemia: confusion, seizures, loss of consciousness', 'Persistent blood glucose >300 mg/dL with ketones']
  ),

  mc(
    'type-2-diabetes',
    'Type 2 Diabetes Mellitus',
    'Diabetes Mellitus Tipo 2',
    'diabetes',
    '5A11',
    'Progressive metabolic disorder characterized by insulin resistance and relative insulin deficiency, accounting for ~90-95% of all diabetes cases.',
    'Insulin resistance in skeletal muscle, liver, and adipose tissue combined with progressive beta-cell dysfunction (the "ominous octet" of DeFronzo). Hepatic glucose overproduction, decreased incretin effect, increased lipolysis, and increased renal glucose reabsorption all contribute. Genetic predisposition plus environmental factors (obesity, sedentary lifestyle) drive onset.',
    ['Polyuria and polydipsia', 'Fatigue', 'Blurred vision', 'Slow wound healing', 'Acanthosis nigricans', 'Recurrent infections', 'Often asymptomatic at diagnosis'],
    ['Fasting glucose >=126 mg/dL', 'HbA1c >=6.5%', '2-hour OGTT >=200 mg/dL', 'Random glucose >=200 mg/dL with symptoms', 'Screening recommended at age 35+ or earlier with risk factors'],
    ['Lifestyle modification (diet, exercise, weight loss)', 'Metformin (first-line)', 'SGLT2 inhibitors (empagliflozin, dapagliflozin) for cardiorenal benefit', 'GLP-1 receptor agonists (semaglutide, liraglutide) for CV and weight benefit', 'DPP-4 inhibitors, TZDs, sulfonylureas as alternatives', 'Insulin for advanced disease or uncontrolled hyperglycemia'],
    ['Cardiovascular disease (2-4x increased risk)', 'Retinopathy', 'Nephropathy (leading cause of ESRD)', 'Peripheral neuropathy', 'Non-alcoholic fatty liver disease', 'Peripheral artery disease'],
    'Type 2 diabetes means your body does not use insulin well and may not make enough. It is strongly linked to weight and lifestyle. Many people can improve their diabetes significantly through weight loss, healthy eating, and exercise. Medications can also help control blood sugar and protect your heart and kidneys.',
    ['Hyperosmolar hyperglycemic state: extreme thirst, confusion, glucose >600 mg/dL', 'Severe hypoglycemia with insulin or sulfonylureas', 'Signs of cardiovascular event (chest pain, stroke symptoms)']
  ),

  mc(
    'gestational-diabetes',
    'Gestational Diabetes Mellitus',
    'Diabetes Mellitus Gestacional',
    'diabetes',
    '5A13',
    'Glucose intolerance first recognized during pregnancy, affecting 6-9% of pregnancies, with implications for both maternal and fetal health.',
    'Placental hormones (human placental lactogen, progesterone, cortisol) create progressive insulin resistance in the second and third trimesters. Women with insufficient beta-cell reserve to compensate develop hyperglycemia. Genetic susceptibility and pre-existing insulin resistance (obesity) increase risk.',
    ['Usually asymptomatic', 'Detected on routine screening at 24-28 weeks', 'Polyuria and polydipsia (if severe)', 'Excessive fetal growth on ultrasound', 'Recurrent vaginal candidiasis'],
    ['Screening at 24-28 weeks gestation', 'One-step: 75g OGTT (IADPSG criteria)', 'Two-step: 50g GCT screen then 100g OGTT if positive', 'Early screening if high-risk (BMI >=30, prior GDM, PCOS, family history)'],
    ['Medical nutrition therapy and carbohydrate management', 'Blood glucose monitoring (fasting <95, 1-hr postprandial <140, 2-hr <120 mg/dL)', 'Exercise (30 min/day moderate)', 'Insulin if targets not met (first-line pharmacotherapy)', 'Metformin or glyburide as alternatives', 'Postpartum glucose testing at 4-12 weeks'],
    ['Macrosomia and birth injury', 'Neonatal hypoglycemia', 'Preeclampsia', 'Cesarean delivery', 'Future T2DM in mother (50% lifetime risk)', 'Childhood obesity in offspring'],
    'Gestational diabetes means your blood sugar is too high during pregnancy. This is common and usually goes away after delivery. Controlling your blood sugar protects your baby from growing too large and having low blood sugar at birth. After delivery, you should be tested regularly because you have a higher chance of developing diabetes later.',
    ['Persistent glucose >200 mg/dL', 'Signs of preeclampsia: severe headache, vision changes, upper abdominal pain', 'Decreased fetal movement']
  ),

  mc(
    'type-1-5-diabetes',
    'Latent Autoimmune Diabetes in Adults (LADA)',
    'Diabetes Autoinmune Latente del Adulto',
    'diabetes',
    '5A10.1',
    'Slowly progressive autoimmune diabetes presenting in adults over 30, initially resembling T2DM but with eventual insulin dependence. Also called type 1.5 diabetes.',
    'Autoimmune beta-cell destruction similar to T1DM but with slower progression. Patients retain partial beta-cell function for months to years. GAD65 antibodies are positive in ~90%. Shares genetic susceptibility with both T1DM (HLA associations) and T2DM. May represent a continuum of autoimmune diabetes.',
    ['Adult onset (typically >30 years)', 'Initially responsive to oral agents', 'Progressive insulin requirement within 6-12 months to 6 years', 'Lower BMI than typical T2DM', 'Personal or family history of autoimmune disease', 'May present with mild ketosis'],
    ['GAD65 antibodies (most sensitive)', 'C-peptide low-normal and declining', 'HbA1c and glucose criteria same as other diabetes', 'IA-2 and ZnT8 antibodies', 'Rule out typical T2DM and T1DM by clinical context'],
    ['Early insulin initiation recommended to preserve beta-cell function', 'DPP-4 inhibitors may help preserve C-peptide', 'Avoid sulfonylureas (accelerate beta-cell failure)', 'Lifestyle modification', 'CGM as disease progresses', 'Transition to full insulin regimen as needed'],
    ['DKA if insulin delayed too long', 'Hypoglycemia', 'Microvascular complications', 'Other autoimmune conditions (thyroid, celiac)'],
    'LADA is sometimes called type 1.5 diabetes. It is an autoimmune form of diabetes that starts in adulthood and progresses more slowly than typical type 1. You may start with pills but will likely need insulin within a few years. Early insulin use may help preserve your remaining insulin-producing cells.',
    ['DKA symptoms: nausea, vomiting, abdominal pain, fruity breath', 'Rapid deterioration of glucose control despite oral medications']
  ),

  mc(
    'diabetic-ketoacidosis',
    'Diabetic Ketoacidosis (DKA)',
    'Cetoacidosis Diabetica',
    'diabetes',
    '5A20',
    'Life-threatening acute metabolic emergency characterized by hyperglycemia, ketoacidosis, and dehydration, most common in T1DM but can occur in T2DM.',
    'Absolute or relative insulin deficiency combined with counter-regulatory hormone excess (glucagon, cortisol, catecholamines, GH). Unopposed lipolysis releases free fatty acids oxidized to ketone bodies (beta-hydroxybutyrate, acetoacetate) in the liver. Results in high anion gap metabolic acidosis, osmotic diuresis, and severe dehydration. Triggers include infection (40%), insulin omission, new-onset T1DM, and SGLT2 inhibitor use (euglycemic DKA).',
    ['Nausea and vomiting', 'Abdominal pain', 'Kussmaul respirations (deep, rapid breathing)', 'Fruity breath (acetone)', 'Polyuria progressing to oliguria', 'Altered mental status', 'Dehydration and tachycardia'],
    ['Blood glucose >250 mg/dL (may be lower in euglycemic DKA)', 'Arterial pH <7.30', 'Serum bicarbonate <18 mEq/L', 'Elevated anion gap (>12)', 'Positive serum/urine ketones', 'Beta-hydroxybutyrate >3 mmol/L', 'BMP, CBC, urinalysis, blood cultures to identify trigger'],
    ['Aggressive IV fluid resuscitation (NS then 0.45% NS)', 'Continuous IV insulin infusion (0.1 U/kg/hr)', 'Potassium replacement (goal 4-5 mEq/L before starting insulin)', 'Dextrose added when glucose <200 mg/dL', 'Bicarbonate only if pH <6.9', 'Identify and treat precipitant', 'Transition to subcutaneous insulin when AG closes and patient eating'],
    ['Cerebral edema (especially pediatric)', 'Hypokalemia and cardiac arrhythmia', 'ARDS', 'Venous thromboembolism', 'Rhabdomyolysis', 'Death (mortality 1-5%)'],
    'DKA is a dangerous complication of diabetes where your blood becomes too acidic. It happens when your body does not have enough insulin and starts breaking down fat for energy, producing toxic acids called ketones. It requires emergency hospital treatment with fluids, insulin, and electrolytes.',
    ['All DKA presentations are emergencies', 'Altered mental status or coma', 'pH <7.0 or bicarbonate <5', 'Severe hyperkalemia or hypokalemia', 'Hemodynamic instability']
  ),

  // ============================================================
  // THYROID (5)
  // ============================================================
  mc(
    'hypothyroidism',
    'Hypothyroidism',
    'Hipotiroidismo',
    'thyroid',
    '5A00.0',
    'Deficiency of thyroid hormone causing decreased metabolic rate, most commonly due to Hashimoto thyroiditis in iodine-sufficient areas.',
    'Primary hypothyroidism (95%): autoimmune destruction (Hashimoto thyroiditis with anti-TPO and anti-thyroglobulin antibodies), post-thyroidectomy, post-radioiodine, or iodine deficiency. Lymphocytic infiltration and follicular destruction reduce T4/T3 synthesis. Loss of negative feedback causes TSH elevation. Central hypothyroidism (5%): pituitary or hypothalamic disease produces low/inappropriate TSH.',
    ['Fatigue and lethargy', 'Cold intolerance', 'Weight gain', 'Constipation', 'Dry skin and hair', 'Bradycardia', 'Delayed relaxation of deep tendon reflexes', 'Myxedema (non-pitting edema)', 'Depression and cognitive slowing', 'Menstrual irregularities'],
    ['TSH elevated (primary) or low/normal (central)', 'Free T4 low', 'Anti-TPO antibodies (Hashimoto confirmation)', 'Anti-thyroglobulin antibodies', 'Lipid panel (often elevated LDL)', 'CBC (macrocytic anemia possible)'],
    ['Levothyroxine replacement (1.6 mcg/kg/day full replacement)', 'Start low in elderly/cardiac patients (12.5-25 mcg)', 'Take on empty stomach 30-60 min before food', 'Recheck TSH 6-8 weeks after dose change', 'Goal TSH 0.5-2.5 mIU/L', 'Avoid calcium/iron within 4 hours of dose'],
    ['Myxedema coma', 'Accelerated atherosclerosis', 'Heart failure', 'Infertility and pregnancy complications', 'Peripheral neuropathy', 'Hyperlipidemia'],
    'Hypothyroidism means your thyroid gland is underactive and does not make enough hormone. This slows your body down, causing tiredness, weight gain, and feeling cold. Treatment is a daily pill (levothyroxine) that replaces the missing hormone. Most people feel better within weeks of starting treatment.',
    ['Myxedema coma: profound hypothermia, altered consciousness, bradycardia, hyponatremia', 'Severe depression or psychosis']
  ),

  mc(
    'hyperthyroidism',
    'Hyperthyroidism (Graves Disease)',
    'Hipertiroidismo (Enfermedad de Graves)',
    'thyroid',
    '5A00.1',
    'Excess thyroid hormone production causing hypermetabolic state, with Graves disease being the most common cause (60-80%) due to TSH receptor-stimulating antibodies.',
    'Graves disease: TSH receptor-stimulating immunoglobulins (TSI/TRAb) bind the TSH receptor, causing autonomous thyroid hormone production and gland hyperplasia. Other causes: toxic multinodular goiter (autonomous nodules), toxic adenoma, thyroiditis (transient hormone release), exogenous thyroid hormone. Excess T3/T4 increases basal metabolic rate, oxygen consumption, and sympathetic tone.',
    ['Weight loss despite increased appetite', 'Heat intolerance and sweating', 'Tremor', 'Tachycardia and palpitations', 'Anxiety and irritability', 'Graves ophthalmopathy (proptosis, lid lag)', 'Diffuse goiter with bruit', 'Pretibial myxedema (Graves)', 'Hyperdefecation', 'Menstrual irregularities'],
    ['TSH suppressed (<0.1 mIU/L)', 'Free T4 and/or Free T3 elevated', 'TSH receptor antibodies (TRAb/TSI) for Graves', 'Radioactive iodine uptake and scan (diffuse vs nodular vs low uptake)', 'Thyroid ultrasound with Doppler', 'CBC and LFTs baseline before treatment'],
    ['Antithyroid drugs: methimazole (first-line) or PTU (first trimester pregnancy, thyroid storm)', 'Radioactive iodine (I-131) ablation', 'Thyroidectomy (large goiter, severe ophthalmopathy, suspicious nodule)', 'Beta-blockers for symptom control (propranolol)', 'Selenium supplementation for mild Graves ophthalmopathy', 'Monitoring for hypothyroidism after definitive therapy'],
    ['Thyroid storm (mortality 20-30%)', 'Atrial fibrillation', 'Heart failure (high-output)', 'Osteoporosis', 'Graves ophthalmopathy progression', 'Agranulocytosis from antithyroid drugs'],
    'Hyperthyroidism means your thyroid is overactive and makes too much hormone, speeding up your body. You may lose weight, feel anxious, have a fast heartbeat, and feel hot. Graves disease is the most common cause. Treatment options include medication, radioactive iodine, or surgery.',
    ['Thyroid storm: high fever >104F, extreme tachycardia, delirium, heart failure', 'New atrial fibrillation with rapid rate', 'Severe eye swelling with vision changes']
  ),

  mc(
    'thyroid-nodules',
    'Thyroid Nodules',
    'Nodulos Tiroideos',
    'thyroid',
    '2D10',
    'Discrete lesions within the thyroid gland, found in 50-65% of adults on ultrasound. The vast majority are benign; ~5-15% harbor malignancy.',
    'Most nodules are colloid or hyperplastic (benign). Follicular adenomas are benign neoplasms. Malignant nodules include papillary (80%), follicular (10-15%), medullary (5%), and anaplastic (<2%) thyroid carcinoma. Nodule formation involves TSH stimulation, growth factors (IGF-1, EGF), somatic mutations (BRAF V600E in papillary, RAS in follicular), and iodine deficiency. Risk factors for malignancy include radiation exposure, family history, and male sex.',
    ['Usually asymptomatic (incidental finding)', 'Palpable neck mass', 'Dysphagia or voice change (if large or invasive)', 'Rapid growth concerning for malignancy', 'Compressive symptoms: dyspnea, cough', 'Hyperthyroidism if autonomous (toxic adenoma)'],
    ['Thyroid ultrasound with standardized reporting (ACR TI-RADS)', 'TSH level', 'Fine-needle aspiration (FNA) biopsy based on size and US features', 'Bethesda cytology classification (I-VI)', 'Molecular testing for indeterminate cytology (Afirma, ThyroSeq)', 'Radioiodine scan if TSH suppressed'],
    ['Observation with serial ultrasound for benign nodules', 'Repeat FNA for Bethesda I (nondiagnostic)', 'Molecular testing for Bethesda III/IV (indeterminate)', 'Thyroid lobectomy or total thyroidectomy for suspicious/malignant results', 'Radioactive iodine for differentiated thyroid cancer post-surgery', 'TSH suppression therapy for differentiated thyroid cancer', 'Levothyroxine if thyroidectomy performed'],
    ['Thyroid cancer (5-15% of nodules)', 'Compressive symptoms', 'Cosmetic concerns', 'Hyperthyroidism from autonomous nodules', 'Anxiety from incidental findings'],
    'Thyroid nodules are very common lumps in the thyroid gland. Most are harmless and do not need treatment. Your doctor uses ultrasound and sometimes a needle biopsy to check if a nodule needs further action. Only a small percentage turn out to be cancer, and most thyroid cancers are very treatable.',
    ['Rapidly enlarging nodule with compressive symptoms', 'Hoarseness from vocal cord paralysis', 'Fixed, hard nodule with lymphadenopathy']
  ),

  mc(
    'thyroiditis',
    'Thyroiditis',
    'Tiroiditis',
    'thyroid',
    '5A01',
    'Group of inflammatory thyroid disorders including subacute (de Quervain), postpartum, and silent thyroiditis, causing transient thyrotoxicosis followed by hypothyroidism.',
    'Subacute thyroiditis: viral infection triggers granulomatous inflammation and follicular destruction, releasing preformed thyroid hormone (thyrotoxic phase). Follows a triphasic pattern: thyrotoxicosis (1-2 months), hypothyroidism (2-4 months), recovery. Postpartum thyroiditis: autoimmune lymphocytic infiltration occurring within 12 months of delivery in 5-10% of women. Silent thyroiditis: painless autoimmune variant. Riedel thyroiditis: rare fibrosing variant.',
    ['Subacute: painful, tender thyroid with fever and malaise', 'Jaw/ear pain radiation', 'Thyrotoxic symptoms initially (tachycardia, tremor, anxiety)', 'Hypothyroid symptoms later (fatigue, weight gain)', 'Postpartum: painless thyroid enlargement 2-6 months after delivery', 'Silent: painless thyroid with thyrotoxicosis'],
    ['TSH, Free T4, Free T3', 'ESR markedly elevated in subacute (often >50 mm/hr)', 'CRP elevated', 'Radioactive iodine uptake LOW (distinguishes from Graves)', 'Anti-TPO antibodies (postpartum/silent)', 'Thyroglobulin elevated', 'Ultrasound: heterogeneous, hypoechoic areas'],
    ['Subacute: NSAIDs for pain (first-line), prednisone for severe cases (40 mg taper over 4-8 weeks)', 'Beta-blockers for thyrotoxic symptoms', 'Levothyroxine if hypothyroid phase prolonged (>6 months)', 'Postpartum: levothyroxine during hypothyroid phase, monitor for permanent hypothyroidism', 'No antithyroid drugs (hormone is from destruction, not overproduction)'],
    ['Permanent hypothyroidism (5-15% subacute, 20-50% postpartum)', 'Recurrence (2% subacute)', 'Atrial fibrillation during thyrotoxic phase', 'Depression during hypothyroid phase'],
    'Thyroiditis is inflammation of the thyroid gland, often from a virus or your immune system. It typically causes a temporary phase of too much thyroid hormone followed by too little, then recovery. Treatment focuses on managing symptoms. Most people recover fully, though some develop permanent hypothyroidism.',
    ['Thyroid storm symptoms during thyrotoxic phase', 'Severe neck pain with inability to swallow', 'Signs of myxedema in prolonged hypothyroid phase']
  ),

  mc(
    'thyroid-cancer',
    'Thyroid Cancer',
    'Cancer de Tiroides',
    'thyroid',
    '2D10.0',
    'Malignant neoplasm of the thyroid gland; the most common endocrine malignancy. Papillary thyroid cancer accounts for ~80% of cases with excellent prognosis.',
    'Papillary: RET/PTC rearrangements or BRAF V600E mutations drive proliferation; classic papillary nuclear features (Orphan Annie eyes, nuclear grooves, psammoma bodies). Follicular: RAS mutations, PAX8-PPARG rearrangement; requires capsular/vascular invasion for diagnosis. Medullary: arises from parafollicular C cells; RET proto-oncogene mutations (sporadic or MEN2); produces calcitonin. Anaplastic: dedifferentiation from prior differentiated carcinoma; p53 mutations; rapidly lethal.',
    ['Painless thyroid nodule', 'Cervical lymphadenopathy', 'Hoarseness (recurrent laryngeal nerve invasion)', 'Dysphagia', 'Fixed, hard nodule', 'Family history of thyroid cancer or MEN2', 'History of radiation exposure'],
    ['Thyroid ultrasound (microcalcifications, irregular margins, taller-than-wide)', 'FNA biopsy with Bethesda classification', 'Molecular testing (BRAF, RAS, RET)', 'Calcitonin level (medullary)', 'CEA (medullary)', 'RET genetic testing (medullary/MEN2)', 'Staging CT/MRI for advanced disease'],
    ['Total thyroidectomy +/- central neck dissection', 'Radioactive iodine (I-131) for intermediate/high-risk differentiated cancers', 'TSH suppression with levothyroxine', 'Thyroglobulin monitoring for recurrence (differentiated)', 'Tyrosine kinase inhibitors for radioiodine-refractory (lenvatinib, sorafenib)', 'RET inhibitors for medullary (selpercatinib, pralsetinib)', 'External beam radiation for anaplastic'],
    ['Recurrence (5-30% depending on stage)', 'Hypoparathyroidism post-surgery', 'Recurrent laryngeal nerve injury', 'Radioiodine-refractory disease', 'Anaplastic transformation'],
    'Thyroid cancer is one of the most treatable cancers. The most common type (papillary) has a cure rate above 95%. Treatment usually involves surgery and sometimes radioactive iodine. You will need lifelong thyroid hormone replacement and monitoring with blood tests and ultrasound.',
    ['Rapidly enlarging mass with stridor or airway compromise', 'New hoarseness suggesting nerve invasion', 'Anaplastic thyroid cancer (urgent referral)']
  ),

  // ============================================================
  // ADRENAL (4)
  // ============================================================
  mc(
    'adrenal-insufficiency',
    'Adrenal Insufficiency (Addison Disease)',
    'Insuficiencia Suprarrenal (Enfermedad de Addison)',
    'adrenal',
    '5A74',
    'Deficiency of adrenal cortex hormones (cortisol, aldosterone, androgens). Primary form (Addison disease) is most often autoimmune; secondary form results from pituitary ACTH deficiency.',
    'Primary: autoimmune adrenalitis (80% in developed countries) destroys all three adrenal cortex zones. 21-hydroxylase antibodies are the hallmark. Other causes include TB (leading cause worldwide), adrenal hemorrhage (Waterhouse-Friderichsen), metastases, and fungal infections. Loss of cortisol, aldosterone, and adrenal androgens. Elevated ACTH drives hyperpigmentation via melanocyte stimulation. Secondary: chronic exogenous glucocorticoid use (most common overall), pituitary tumors, or surgery suppress ACTH.',
    ['Fatigue and weakness', 'Hyperpigmentation (primary only -- skin creases, buccal mucosa, scars)', 'Weight loss and anorexia', 'Hypotension and orthostatic dizziness', 'Salt craving (primary)', 'Nausea, vomiting, abdominal pain', 'Hyponatremia and hyperkalemia (primary)', 'Hypoglycemia'],
    ['Morning cortisol <3 mcg/dL diagnostic, >15 excludes', 'ACTH stimulation test (cosyntropin 250 mcg): cortisol <18 mcg/dL at 30/60 min is diagnostic', 'ACTH level: high in primary, low in secondary', 'Aldosterone and renin (primary: low aldosterone, high renin)', '21-hydroxylase antibodies', 'CT adrenals (calcification in TB/hemorrhage)', 'Pituitary MRI for secondary'],
    ['Hydrocortisone replacement (15-25 mg/day in 2-3 divided doses)', 'Fludrocortisone 0.05-0.2 mg/day for primary (mineralocorticoid replacement)', 'DHEA supplementation in women (quality of life)', 'Stress-dose steroids during illness/surgery (double or triple dose)', 'Medical alert bracelet', 'Emergency injection kit (IM hydrocortisone 100 mg)', 'Gradual glucocorticoid taper for secondary (iatrogenic)'],
    ['Adrenal crisis (mortality 6%)', 'Osteoporosis from over-replacement', 'Impaired quality of life', 'Associated autoimmune conditions (thyroid, T1DM, vitiligo)'],
    'Adrenal insufficiency means your adrenal glands do not make enough cortisol, a hormone essential for responding to stress. You will need to take replacement hormones daily and increase the dose during illness or surgery. Always wear a medical alert bracelet and carry an emergency injection kit.',
    ['Adrenal crisis: severe hypotension, shock, abdominal pain, fever, altered consciousness', 'Vomiting or diarrhea preventing oral medication', 'Any significant illness, trauma, or surgery without stress dosing']
  ),

  mc(
    'cushing-syndrome',
    'Cushing Syndrome',
    'Sindrome de Cushing',
    'adrenal',
    '5A71',
    'Clinical syndrome resulting from chronic glucocorticoid excess, whether from exogenous steroids (most common), pituitary adenoma (Cushing disease), adrenal tumors, or ectopic ACTH production.',
    'Exogenous (iatrogenic): chronic supraphysiologic glucocorticoid use. Endogenous ACTH-dependent (80%): pituitary corticotroph adenoma (Cushing disease, 70%) or ectopic ACTH (small cell lung cancer, carcinoid -- 10%). ACTH-independent (20%): adrenal adenoma, carcinoma, or bilateral hyperplasia. Cortisol excess causes protein catabolism, gluconeogenesis, lipogenesis (central), immune suppression, and bone resorption.',
    ['Central obesity with thin extremities', 'Moon facies and dorsocervical fat pad (buffalo hump)', 'Wide purple striae (>1 cm)', 'Easy bruising and thin skin', 'Proximal muscle weakness', 'Hypertension', 'Hyperglycemia/diabetes', 'Osteoporosis and fractures', 'Hirsutism and acne in women', 'Depression and cognitive impairment'],
    ['24-hour urine free cortisol (>=3x ULN diagnostic)', 'Late-night salivary cortisol (elevated)', '1 mg overnight dexamethasone suppression test (cortisol >1.8 mcg/dL)', 'If positive: ACTH level to determine dependent vs independent', 'High-dose dexamethasone suppression (pituitary suppresses, ectopic does not)', 'Pituitary MRI', 'Inferior petrosal sinus sampling (IPSS) if MRI negative', 'CT chest/abdomen for ectopic source or adrenal mass'],
    ['Transsphenoidal surgery for Cushing disease (first-line, 70-90% remission)', 'Adrenalectomy for adrenal tumors', 'Resection of ectopic ACTH source', 'Medical therapy: ketoconazole, metyrapone, osilodrostat, cabergoline', 'Pasireotide for Cushing disease (refractory)', 'Bilateral adrenalectomy (last resort, causes Nelson syndrome risk)', 'Glucocorticoid replacement post-surgery until HPA axis recovers'],
    ['Opportunistic infections', 'Vertebral compression fractures', 'Cardiovascular disease and thromboembolism', 'Psychiatric disorders', 'Diabetes mellitus', 'Nelson syndrome after bilateral adrenalectomy'],
    'Cushing syndrome happens when your body has too much cortisol, the stress hormone. It can come from taking steroid medications or from a tumor making too much cortisol. It causes weight gain in the face and belly, skin changes, high blood sugar, and weak bones. Treatment depends on the cause.',
    ['Severe hypertension or hypertensive crisis', 'Psychosis or severe depression with suicidal ideation', 'Severe infection (immunosuppressed state)', 'Pathological fracture']
  ),

  mc(
    'pheochromocytoma',
    'Pheochromocytoma / Paraganglioma',
    'Feocromocitoma / Paraganglioma',
    'adrenal',
    '2F91',
    'Catecholamine-secreting neuroendocrine tumor arising from adrenal medulla (pheochromocytoma) or extra-adrenal sympathetic/parasympathetic ganglia (paraganglioma). "Rule of 10s" is now outdated; ~40% are hereditary.',
    'Chromaffin cells of neural crest origin produce and secrete excess catecholamines (norepinephrine predominantly, epinephrine, dopamine). Episodic or sustained catecholamine release causes paroxysmal hypertension, tachycardia, and metabolic effects. Hereditary syndromes include MEN2A/2B (RET), VHL (VHL gene), NF1 (NF1 gene), and SDH mutations (SDHB/C/D). SDHB mutations carry highest malignancy risk (up to 40%).',
    ['Paroxysmal hypertension (episodic or sustained)', 'Classic triad: headache, sweating, palpitations', 'Anxiety and pallor during episodes', 'Tremor', 'Orthostatic hypotension', 'Hyperglycemia', 'Weight loss', 'Triggered by exercise, surgery, anesthesia, or tyramine-rich foods'],
    ['Plasma free metanephrines (test of choice, sensitivity >97%)', '24-hour urine metanephrines and catecholamines', 'CT abdomen/pelvis with contrast (adrenal mass)', 'MRI (T2-bright "lightbulb sign")', 'MIBG scintigraphy (I-123) for localization', 'Ga-68 DOTATATE PET/CT (superior for paraganglioma and metastatic disease)', 'Genetic testing recommended for all patients'],
    ['Alpha-blockade first (phenoxybenzamine or doxazosin) for 10-14 days preoperatively', 'Then beta-blockade if tachycardic (never before alpha!)', 'Liberal salt and fluid intake pre-surgery', 'Surgical resection (laparoscopic adrenalectomy preferred)', 'Annual biochemical screening post-resection', 'Genetic counseling and family screening', 'MIBG therapy or chemotherapy for malignant/metastatic disease'],
    ['Hypertensive crisis and stroke', 'Catecholamine cardiomyopathy', 'Arrhythmias and sudden death', 'Malignant transformation (10% pheochromocytoma, 15-40% paraganglioma)', 'Pheochromocytoma multisystem crisis'],
    'Pheochromocytoma is a rare tumor that makes too much adrenaline, causing episodes of high blood pressure, headache, and rapid heartbeat. Treatment is surgery, but blood pressure medications must be started first to make surgery safe. Genetic testing is important because many of these tumors run in families.',
    ['Hypertensive crisis (BP >200/120 mmHg)', 'Pheochromocytoma crisis: fever, encephalopathy, multi-organ failure', 'Cardiac arrhythmia or acute heart failure', 'Do NOT give beta-blockers before alpha-blockade']
  ),

  mc(
    'congenital-adrenal-hyperplasia',
    'Congenital Adrenal Hyperplasia (CAH)',
    'Hiperplasia Suprarrenal Congenita',
    'adrenal',
    '5A71.0',
    'Autosomal recessive group of disorders caused by enzymatic defects in cortisol biosynthesis. 21-hydroxylase deficiency accounts for >95% of cases.',
    '21-hydroxylase (CYP21A2) deficiency blocks cortisol and aldosterone synthesis, shunting precursors (17-hydroxyprogesterone) toward adrenal androgens. Low cortisol removes negative feedback, increasing ACTH, which causes adrenal hyperplasia and further androgen excess. Classic forms: salt-wasting (75%) with aldosterone deficiency causing neonatal salt crisis, or simple virilizing. Non-classic (late-onset): mild enzyme deficiency presenting with hyperandrogenism in adolescence/adulthood.',
    ['Classic salt-wasting: neonatal salt-losing crisis (hyponatremia, hyperkalemia, dehydration)', 'Ambiguous genitalia in 46,XX neonates (virilization)', 'Precocious puberty and accelerated growth', 'Short adult stature (premature epiphyseal fusion)', 'Non-classic: hirsutism, acne, oligomenorrhea, infertility in women', 'Adrenal rest tumors in testes'],
    ['Newborn screening: elevated 17-hydroxyprogesterone (17-OHP)', '17-OHP markedly elevated (>10,000 ng/dL in classic)', 'ACTH stimulation test for non-classic (17-OHP >1,500 ng/dL at 60 min)', 'Electrolytes (hyponatremia, hyperkalemia in salt-wasting)', 'Renin elevated (salt-wasting)', 'Adrenal androgens elevated (DHEA-S, androstenedione, testosterone)', 'CYP21A2 genotyping'],
    ['Glucocorticoid replacement: hydrocortisone (children) or prednisone/dexamethasone (adults)', 'Fludrocortisone for salt-wasting form', 'Sodium chloride supplementation in infancy', 'Stress-dose steroids during illness/surgery', 'Surgical correction of ambiguous genitalia (timing debated)', 'Non-classic: low-dose glucocorticoid or OCP for hyperandrogenism', 'Monitor 17-OHP, androgens, growth velocity, bone age'],
    ['Adrenal crisis in undiagnosed or undertreated patients', 'Short stature from androgen excess or glucocorticoid over-treatment', 'Infertility', 'Testicular adrenal rest tumors', 'Metabolic syndrome from glucocorticoid therapy', 'Psychosocial impact'],
    'Congenital adrenal hyperplasia (CAH) is an inherited condition where the adrenal glands cannot make cortisol properly. This causes the body to overproduce male-type hormones. Treatment involves replacing the missing hormones with daily medication. Newborn screening helps catch this early so treatment can begin right away.',
    ['Neonatal salt-wasting crisis: vomiting, dehydration, shock in first 2 weeks of life', 'Adrenal crisis at any age during illness without stress dosing', 'Ambiguous genitalia requiring urgent endocrine evaluation']
  ),

  // ============================================================
  // PITUITARY (4)
  // ============================================================
  mc(
    'acromegaly',
    'Acromegaly',
    'Acromegalia',
    'pituitary',
    '5A61',
    'Chronic growth hormone (GH) excess in adults, almost always from a pituitary somatotroph adenoma, causing progressive somatic and metabolic changes.',
    'GH-secreting pituitary adenoma (>95% of cases) produces excess GH, which stimulates hepatic IGF-1 production. GH and IGF-1 promote growth of bone, cartilage, and soft tissue. Chronic elevation leads to organomegaly, metabolic disturbances (insulin resistance), and cardiovascular complications. Rare causes include ectopic GH or GHRH secretion. Somatic mutations in the GNAS gene (Gs-alpha) found in ~40% of sporadic cases.',
    ['Gradual coarsening of facial features (frontal bossing, prognathism)', 'Enlarged hands and feet (ring and shoe size increase)', 'Widened tooth spacing', 'Macroglossia', 'Deepening of voice', 'Excessive sweating and oily skin', 'Arthralgias', 'Carpal tunnel syndrome', 'Headache and visual field defects (tumor mass effect)', 'Sleep apnea'],
    ['IGF-1 level (elevated for age/sex -- screening test)', 'Oral glucose tolerance test with GH (GH not suppressed to <1 ng/mL confirms diagnosis)', 'Pituitary MRI with contrast', 'Visual field testing', 'Glucose tolerance test (diabetes screening)', 'Echocardiogram', 'Colonoscopy (increased colon polyp/cancer risk)', 'Sleep study'],
    ['Transsphenoidal surgery (first-line for most patients)', 'Somatostatin receptor ligands (octreotide LAR, lanreotide) if surgery not curative', 'GH receptor antagonist (pegvisomant) for refractory disease', 'Cabergoline (modest efficacy, used with mild IGF-1 elevation)', 'Stereotactic radiosurgery for residual/recurrent disease', 'Manage comorbidities: diabetes, hypertension, sleep apnea, arthropathy'],
    ['Cardiomyopathy and heart failure', 'Hypertension', 'Diabetes mellitus (30%)', 'Obstructive sleep apnea (70%)', 'Colon polyps and cancer', 'Arthropathy', 'Increased mortality (2-3x if uncontrolled)'],
    'Acromegaly is caused by a benign pituitary tumor that makes too much growth hormone. This causes gradual enlargement of your hands, feet, and facial features. Surgery to remove the tumor is the main treatment. Controlling the disease is important because untreated acromegaly can cause heart problems, diabetes, and joint disease.',
    ['Severe headache with sudden vision loss (pituitary apoplexy)', 'Signs of heart failure', 'Acute visual field loss']
  ),

  mc(
    'prolactinoma',
    'Prolactinoma',
    'Prolactinoma',
    'pituitary',
    '2F70.0',
    'Benign pituitary lactotroph adenoma secreting excess prolactin, the most common functioning pituitary tumor (~40% of pituitary adenomas).',
    'Clonal proliferation of lactotroph cells forms a prolactin-secreting adenoma. Prolactin excess causes hypogonadism by suppressing GnRH pulsatility, leading to reduced LH/FSH and sex steroids. Galactorrhea results from direct prolactin effect on mammary tissue. Macroadenomas (>10 mm) may cause mass effect symptoms. Rarely associated with MEN1 syndrome. Prolactin level generally correlates with tumor size.',
    ['Women: oligomenorrhea/amenorrhea, galactorrhea, infertility, decreased libido', 'Men: decreased libido, erectile dysfunction, gynecomastia (often diagnosed late as macroadenoma)', 'Headache and visual field defects (macroadenoma)', 'Decreased bone density', 'Galactorrhea may be absent'],
    ['Serum prolactin level (>200 ng/mL strongly suggests prolactinoma)', 'Rule out other causes of hyperprolactinemia (medications, hypothyroidism, renal failure)', 'Pituitary MRI with contrast', 'Visual field testing for macroadenomas', 'Assess other pituitary hormones (hypopituitarism from mass effect)', 'Consider hook effect for large tumors with "normal" prolactin (dilute sample)'],
    ['Dopamine agonists (first-line even for macroadenomas): cabergoline preferred over bromocriptine', 'Tumor shrinkage in >90% with dopamine agonists', 'Surgery (transsphenoidal) for dopamine agonist intolerance/resistance or CSF leak', 'Radiation for refractory cases', 'Fertility management: cabergoline withdrawal once pregnant (for microprolactinoma)', 'Monitor prolactin and MRI'],
    ['Visual field loss from macroadenoma', 'Pituitary apoplexy (hemorrhage into tumor)', 'Osteoporosis from chronic hypogonadism', 'Infertility', 'CSF rhinorrhea with dopamine agonist (rapid tumor shrinkage)', 'Cardiac valve disease with high-dose cabergoline (rare at prolactinoma doses)'],
    'A prolactinoma is a benign tumor of the pituitary gland that makes too much prolactin hormone. This can cause missed periods and breast milk production in women, or low sex drive and erectile problems in men. The good news is that medication (cabergoline) shrinks the tumor and normalizes prolactin in most patients without needing surgery.',
    ['Sudden severe headache with vision loss (pituitary apoplexy)', 'Rapid visual deterioration', 'CSF leak (clear fluid from nose)']
  ),

  mc(
    'hypopituitarism',
    'Hypopituitarism',
    'Hipopituitarismo',
    'pituitary',
    '5A60',
    'Partial or complete deficiency of anterior pituitary hormones (GH, LH/FSH, TSH, ACTH, prolactin), caused by pituitary tumors, surgery, radiation, or infiltrative diseases.',
    'Loss of pituitary hormone secretion follows a typical sequence: GH first, then LH/FSH, TSH, and ACTH last. Causes include pituitary adenomas (most common), craniopharyngioma, surgery, radiation (gradual onset over years), Sheehan syndrome (postpartum pituitary necrosis from hemorrhage), pituitary apoplexy, lymphocytic hypophysitis, hemochromatosis, sarcoidosis, and traumatic brain injury. Each hormone deficit produces distinct clinical features.',
    ['GH deficiency: fatigue, decreased muscle mass, increased body fat, reduced bone density', 'LH/FSH deficiency: amenorrhea, infertility, decreased libido, erectile dysfunction', 'TSH deficiency: secondary hypothyroidism symptoms', 'ACTH deficiency: fatigue, weight loss, hypoglycemia, pale skin (no hyperpigmentation unlike primary AI)', 'Diabetes insipidus if posterior pituitary involved', 'Sheehan syndrome: failure to lactate postpartum'],
    ['Anterior pituitary hormones: 8 AM cortisol, TSH/free T4, LH/FSH, estradiol/testosterone, IGF-1, prolactin', 'Dynamic testing: insulin tolerance test (gold standard for GH and ACTH reserve), ACTH stimulation test, GnRH stimulation test', 'Pituitary MRI with contrast', 'Visual field testing', 'Electrolytes and serum osmolality (diabetes insipidus)', 'Iron studies (hemochromatosis)'],
    ['Replace deficient hormones in correct order: cortisol first (before thyroid hormone!)', 'Hydrocortisone for ACTH deficiency', 'Levothyroxine for TSH deficiency (monitor free T4, not TSH)', 'Sex steroids for gonadotropin deficiency (testosterone or estrogen/progesterone)', 'GH replacement (daily injection) if symptomatic', 'Desmopressin for diabetes insipidus', 'Fertility: gonadotropin injections or pulsatile GnRH'],
    ['Adrenal crisis if cortisol deficiency untreated', 'Pituitary apoplexy', 'Osteoporosis', 'Cardiovascular disease', 'Impaired quality of life', 'Infertility'],
    'Hypopituitarism means your pituitary gland (a small gland at the base of the brain) does not make enough hormones. This can affect many body functions. Treatment involves replacing the missing hormones with medications. It is important to always replace cortisol first and to carry emergency information about your condition.',
    ['Adrenal crisis: severe weakness, hypotension, collapse (especially during illness)', 'Pituitary apoplexy: sudden severe headache, vision loss, hormonal collapse', 'Diabetes insipidus: extreme thirst, massive urine output']
  ),

  mc(
    'diabetes-insipidus',
    'Diabetes Insipidus',
    'Diabetes Insipida',
    'pituitary',
    '5A60.0',
    'Disorder of water balance characterized by excretion of large volumes of dilute urine due to deficient ADH (central) or renal resistance to ADH (nephrogenic).',
    'Central DI: insufficient ADH (vasopressin) secretion from posterior pituitary. Causes include pituitary surgery (most common), tumors (craniopharyngioma, metastases), trauma, autoimmune (lymphocytic infundibuloneurohypophysitis), and idiopathic (30%). Nephrogenic DI: renal collecting duct resistance to ADH. Causes include lithium (most common drug cause), hypercalcemia, hypokalemia, chronic kidney disease, and hereditary (AVPR2 or AQP2 mutations). Loss of water reabsorption leads to polyuria, hypernatremia, and compensatory polydipsia.',
    ['Polyuria (3-20 L/day of dilute urine)', 'Polydipsia and intense thirst', 'Nocturia', 'Dehydration if water access restricted', 'Fatigue', 'Hypernatremia symptoms: confusion, irritability, seizures'],
    ['Serum sodium and osmolality (elevated or high-normal)', 'Urine osmolality inappropriately dilute (<300 mOsm/kg)', 'Water deprivation test (gold standard): urine fails to concentrate', 'Desmopressin (DDAVP) challenge: urine concentrates in central (>50% increase), not in nephrogenic', 'Copeptin levels (emerging biomarker for central DI)', 'Pituitary MRI (absence of posterior pituitary bright spot)', 'Serum calcium, potassium, lithium level'],
    ['Central DI: desmopressin (DDAVP) intranasal, oral, or injectable', 'Monitor sodium closely during initiation (risk of hyponatremia)', 'Free water access essential', 'Nephrogenic DI: treat underlying cause, low-sodium diet, thiazide diuretics (paradoxical effect), NSAIDs (indomethacin)', 'Amiloride for lithium-induced DI', 'Fluid replacement matching output in acute settings'],
    ['Severe hypernatremia and dehydration (if water access limited)', 'Hyponatremia from DDAVP overtreatment', 'Seizures', 'Growth failure in children', 'Bladder distension from massive urine volumes'],
    'Diabetes insipidus causes you to produce very large amounts of dilute urine, leading to extreme thirst. It is not related to blood sugar. The central type is treated with desmopressin (a synthetic version of the missing hormone). The most important thing is to always have access to water and take your medication as prescribed.',
    ['Severe hypernatremia (Na >155 mEq/L) with altered mental status', 'Seizures', 'Inability to drink or access water', 'Hyponatremic seizures from DDAVP overcorrection']
  ),

  // ============================================================
  // LIPID (3)
  // ============================================================
  mc(
    'hyperlipidemia',
    'Hyperlipidemia (Dyslipidemia)',
    'Hiperlipidemia (Dislipidemia)',
    'lipid',
    '5C80',
    'Abnormal lipid levels in the blood, primarily elevated LDL cholesterol and/or triglycerides, representing a major modifiable risk factor for atherosclerotic cardiovascular disease (ASCVD).',
    'LDL particles infiltrate the arterial intima, undergo oxidation, and are engulfed by macrophages forming foam cells. This initiates and propagates atherosclerotic plaque. HDL mediates reverse cholesterol transport. Triglyceride-rich lipoproteins (VLDL, remnants) are also atherogenic. Causes: primary (genetic -- polygenic or monogenic) and secondary (diet, obesity, diabetes, hypothyroidism, nephrotic syndrome, medications). Statin therapy reduces LDL by inhibiting HMG-CoA reductase and upregulating hepatic LDL receptors.',
    ['Usually asymptomatic until ASCVD event', 'Xanthomas (tendon, eruptive, tuberous) in severe cases', 'Xanthelasma (eyelid deposits)', 'Corneal arcus (in young patients suggests familial)', 'Lipemia retinalis (severe hypertriglyceridemia)', 'Pancreatitis (TG >500 mg/dL)'],
    ['Fasting lipid panel (LDL, HDL, triglycerides, total cholesterol)', 'Non-HDL cholesterol calculation', 'ApoB level (reflects atherogenic particle number)', 'Lp(a) level (check once in lifetime)', '10-year ASCVD risk calculator (Pooled Cohort Equations)', 'Coronary artery calcium score for borderline risk', 'Rule out secondary causes: TSH, glucose, renal/liver function, urinalysis'],
    ['Lifestyle: heart-healthy diet (Mediterranean, DASH), exercise 150 min/week, weight loss', 'Statins (first-line): high-intensity (atorvastatin 40-80 mg, rosuvastatin 20-40 mg) for ASCVD or high risk', 'Ezetimibe add-on if LDL not at goal', 'PCSK9 inhibitors (evolocumab, alirocumab) for very high risk or familial hypercholesterolemia', 'Bempedoic acid for statin-intolerant patients', 'Inclisiran (siRNA, twice-yearly injection)', 'Fibrates or omega-3 fatty acids for severe hypertriglyceridemia', 'Icosapent ethyl (EPA) for ASCVD risk reduction with elevated TG'],
    ['Atherosclerotic cardiovascular disease (MI, stroke)', 'Peripheral artery disease', 'Acute pancreatitis (TG >500 mg/dL)', 'Aortic stenosis (accelerated)'],
    'High cholesterol means there is too much fatty substance in your blood, which can build up in your arteries and lead to heart attacks and strokes. Lifestyle changes (healthy diet, exercise, weight management) are the foundation. Statin medications are very effective and safe for most people and significantly reduce heart attack and stroke risk.',
    ['Acute pancreatitis from severe hypertriglyceridemia (>1000 mg/dL)', 'Symptoms of acute coronary syndrome', 'Stroke symptoms']
  ),

  mc(
    'familial-hypercholesterolemia',
    'Familial Hypercholesterolemia (FH)',
    'Hipercolesterolemia Familiar',
    'lipid',
    '5C80.0',
    'Autosomal dominant genetic disorder causing severely elevated LDL cholesterol from birth, with dramatically increased risk of premature ASCVD. Heterozygous FH prevalence ~1:250; homozygous ~1:300,000.',
    'Mutations in LDL receptor (most common, >90%), ApoB (receptor binding domain), or PCSK9 (gain-of-function causing LDL receptor degradation) impair hepatic LDL clearance. Heterozygous FH: LDL typically 190-400 mg/dL; 50% of men have ASCVD by age 50, 30% of women by age 60. Homozygous FH: LDL 400-1000 mg/dL; ASCVD in childhood, untreated mortality by age 20. Lifelong LDL exposure drives accelerated atherosclerosis.',
    ['Severely elevated LDL from childhood', 'Tendon xanthomas (pathognomonic -- Achilles, hands)', 'Corneal arcus before age 45', 'Premature coronary artery disease', 'Xanthelasma', 'Aortic stenosis (homozygous)', 'Family history of early heart disease or high cholesterol'],
    ['LDL cholesterol >190 mg/dL in adults or >160 mg/dL in children', 'Dutch Lipid Clinic Network Score or Simon Broome criteria', 'Cascade family screening (lipid testing of first-degree relatives)', 'Genetic testing (LDL receptor, ApoB, PCSK9 mutations)', 'Coronary artery calcium score', 'Carotid intima-media thickness', 'Lp(a) level'],
    ['High-intensity statin from diagnosis (age 8-10 in children)', 'Ezetimibe (add-on)', 'PCSK9 inhibitors (evolocumab, alirocumab) -- reduce LDL by additional 50-60%', 'Inclisiran (siRNA targeting PCSK9)', 'Bempedoic acid for statin-intolerant', 'LDL apheresis for homozygous FH or refractory cases (every 1-2 weeks)', 'Evinacumab (anti-ANGPTL3) for homozygous FH', 'Lomitapide and mipomersen for homozygous FH', 'Liver transplant for homozygous FH (curative)'],
    ['Premature ASCVD (MI, stroke as early as teens in homozygous)', 'Aortic valve disease', 'Supravalvular aortic stenosis (homozygous)', 'Premature death without treatment'],
    'Familial hypercholesterolemia is an inherited condition that causes very high cholesterol from birth. Without treatment, it significantly increases your risk of heart attack at a young age. Early and aggressive cholesterol-lowering treatment is essential. Family members should also be screened because it is genetic.',
    ['Symptoms of acute coronary syndrome at any age', 'Chest pain or exertional angina in young patients', 'Family member with sudden cardiac death']
  ),

  mc(
    'hypertriglyceridemia',
    'Severe Hypertriglyceridemia',
    'Hipertrigliceridemia Severa',
    'lipid',
    '5C81',
    'Marked elevation of serum triglycerides (>500 mg/dL), carrying significant risk of acute pancreatitis and contributing to ASCVD when chronic.',
    'Triglycerides are carried in chylomicrons (dietary) and VLDL (hepatic). Severe elevation results from overproduction (obesity, diabetes, alcohol, high carbohydrate intake), impaired clearance (lipoprotein lipase deficiency, ApoC-II deficiency), or combined. At TG >1000 mg/dL, chylomicronemia causes hyperviscosity and pancreatic capillary damage leading to pancreatitis. Familial hypertriglyceridemia and familial combined hyperlipidemia are common genetic causes. Secondary causes include uncontrolled diabetes, alcohol, estrogens, retinoids, protease inhibitors, and hypothyroidism.',
    ['Often asymptomatic', 'Eruptive xanthomas (crops of yellow papules on trunk, buttocks)', 'Lipemia retinalis', 'Hepatosplenomegaly', 'Acute pancreatitis (TG >500, especially >1000 mg/dL)', 'Abdominal pain', 'Memory and cognitive difficulties (chronic severe)'],
    ['Fasting lipid panel', 'Non-fasting TG acceptable for screening (>175 mg/dL abnormal)', 'ApoB and lipoprotein subfraction analysis', 'Rule out secondary causes: TSH, HbA1c/glucose, renal function, LFTs, alcohol history', 'Lipoprotein lipase activity and ApoC-II level for suspected genetic causes', 'Genetic testing for familial chylomicronemia syndrome', 'Lipase if pancreatitis suspected'],
    ['Acute (TG >1000 with pancreatitis risk): NPO, IV insulin infusion, IV fluids', 'Very low-fat diet (<10-15% calories from fat)', 'Treat secondary causes aggressively (diabetes, alcohol, medications)', 'Fibrates (fenofibrate first-line for isolated hypertriglyceridemia)', 'High-dose omega-3 fatty acids (4g/day EPA/DHA)', 'Icosapent ethyl (EPA only) for ASCVD risk reduction', 'Statins for mixed dyslipidemia', 'Volanesorsen (antisense to ApoC-III) for familial chylomicronemia syndrome', 'Weight loss and exercise'],
    ['Acute pancreatitis (5-10% mortality)', 'Recurrent pancreatitis', 'Atherosclerotic cardiovascular disease', 'Hepatic steatosis', 'Eruptive xanthomas'],
    'Very high triglycerides (a type of fat in your blood) can cause a painful and dangerous condition called pancreatitis (inflamed pancreas). Reducing fat in your diet, avoiding alcohol, controlling diabetes, and taking medications like fibrates are all important for lowering triglycerides and preventing pancreatitis.',
    ['Acute pancreatitis: severe epigastric pain radiating to back, nausea, vomiting', 'TG >1000 mg/dL (high risk for pancreatitis)', 'Lipemic serum noted on blood draw']
  ),

  // ============================================================
  // OBESITY (2)
  // ============================================================
  mc(
    'obesity',
    'Obesity',
    'Obesidad',
    'obesity',
    '5B81',
    'Chronic, relapsing, multifactorial disease defined by BMI >=30 kg/m2, associated with profound cardiometabolic, mechanical, and psychosocial consequences. Affects >40% of US adults.',
    'Energy imbalance mediated by hypothalamic regulation of hunger/satiety signals. Leptin resistance reduces satiety signaling despite elevated leptin levels. Ghrelin elevation with weight loss promotes regain. Adipose tissue acts as an endocrine organ secreting adipokines (leptin, adiponectin, resistin, TNF-alpha, IL-6), creating chronic low-grade inflammation and insulin resistance. Ectopic fat deposition (liver, muscle, pericardium) drives metabolic complications. Heritability is 40-70%, with >900 gene loci identified. Environmental factors (ultra-processed foods, sedentary lifestyle) interact with genetic susceptibility.',
    ['Elevated BMI (>=30 kg/m2)', 'Central adiposity (waist circumference >40 in men, >35 in women)', 'Acanthosis nigricans', 'Obstructive sleep apnea', 'Joint pain (weight-bearing joints)', 'GERD', 'Depression and reduced quality of life', 'Metabolic syndrome features'],
    ['BMI calculation and classification (Class I: 30-34.9, II: 35-39.9, III: >=40)', 'Waist circumference', 'Fasting glucose, HbA1c', 'Lipid panel', 'Liver enzymes (NAFLD screening)', 'TSH (exclude hypothyroidism)', 'Sleep study if OSA symptoms', 'Edmonton Obesity Staging System for severity', 'Body composition analysis (optional)'],
    ['Lifestyle modification: caloric deficit (500-750 kcal/day), physical activity (150-300 min/week), behavioral therapy', 'GLP-1 receptor agonists: semaglutide 2.4 mg weekly (~15-17% weight loss)', 'Dual GIP/GLP-1 agonist: tirzepatide (~20-22% weight loss)', 'Phentermine-topiramate ER (~10% weight loss)', 'Naltrexone-bupropion (~5-6% weight loss)', 'Orlistat (lipase inhibitor, modest efficacy)', 'Metabolic surgery for BMI >=40 or >=35 with comorbidities: sleeve gastrectomy, Roux-en-Y gastric bypass', 'Address psychological contributors'],
    ['Type 2 diabetes', 'Cardiovascular disease (2-4x risk)', 'Non-alcoholic fatty liver disease / steatohepatitis', 'Obstructive sleep apnea', 'Osteoarthritis', 'Cancer (13 types linked to obesity)', 'Depression', 'Infertility'],
    'Obesity is a complex chronic disease influenced by genetics, environment, and behavior. It is not simply a matter of willpower. Modern treatments including new medications (like semaglutide and tirzepatide) and metabolic surgery can produce significant, sustained weight loss and improve health. Talk to your doctor about all available options.',
    ['Obesity hypoventilation syndrome (daytime hypoxia, hypercapnia)', 'Unstable cardiac symptoms', 'Severe depression or suicidal ideation related to weight']
  ),

  mc(
    'metabolic-syndrome',
    'Metabolic Syndrome',
    'Sindrome Metabolico',
    'obesity',
    '5B80',
    'Cluster of interconnected cardiometabolic risk factors (central obesity, insulin resistance, dyslipidemia, hypertension) that significantly increase risk of T2DM and ASCVD. Prevalence ~35% of US adults.',
    'Central adiposity drives insulin resistance, which is the unifying pathophysiological mechanism. Visceral adipose tissue secretes pro-inflammatory cytokines (TNF-alpha, IL-6) and has reduced adiponectin, promoting hepatic VLDL overproduction (elevated TG, low HDL), endothelial dysfunction, and a prothrombotic state. Ectopic lipid deposition in liver and muscle worsens insulin resistance. Free fatty acid flux from lipolysis contributes to hepatic gluconeogenesis. The result is a 5x increased risk of T2DM and 2x increased risk of CVD.',
    ['Central obesity (increased waist circumference)', 'Elevated blood pressure (>=130/85 mmHg)', 'Elevated fasting glucose (>=100 mg/dL)', 'Elevated triglycerides (>=150 mg/dL)', 'Low HDL (<40 mg/dL men, <50 mg/dL women)', 'Acanthosis nigricans', 'Hyperuricemia and gout'],
    ['Diagnosis requires 3 of 5 ATP III criteria: waist >102 cm men / >88 cm women, TG >=150, HDL <40 men / <50 women, BP >=130/85, fasting glucose >=100', 'Fasting lipid panel', 'Fasting glucose and HbA1c', 'Blood pressure measurement', 'Waist circumference', 'HOMA-IR (research)', 'Uric acid', 'Liver enzymes and ultrasound (NAFLD assessment)'],
    ['Lifestyle modification is cornerstone: 7-10% weight loss, 150+ min/week exercise, Mediterranean or DASH diet', 'Treat each component: antihypertensives (ACEi/ARB preferred), statins, metformin if prediabetes progressing', 'GLP-1 agonists or tirzepatide address multiple components', 'Address sleep apnea', 'Smoking cessation', 'Limit alcohol and refined carbohydrates', 'Consider metabolic surgery for severe obesity with metabolic syndrome'],
    ['Type 2 diabetes (5x risk)', 'Cardiovascular disease (2x risk)', 'Non-alcoholic steatohepatitis and cirrhosis', 'Chronic kidney disease', 'Polycystic ovary syndrome overlap', 'Hyperuricemia and gout'],
    'Metabolic syndrome means you have a combination of risk factors -- a large waist, high blood pressure, high blood sugar, high triglycerides, and low HDL cholesterol -- that together greatly increase your chance of heart disease and diabetes. Losing even 7-10% of your body weight through diet and exercise can significantly improve all of these numbers.',
    ['Signs of acute coronary syndrome', 'Hypertensive crisis', 'New-onset diabetes with hyperglycemic symptoms']
  ),

  // ============================================================
  // BONE-MINERAL (3)
  // ============================================================
  mc(
    'osteoporosis',
    'Osteoporosis',
    'Osteoporosis',
    'bone-mineral',
    'FB83',
    'Systemic skeletal disease characterized by low bone mass and microarchitectural deterioration, leading to increased fracture risk. Most common metabolic bone disease.',
    'Imbalance between osteoclast-mediated bone resorption and osteoblast-mediated bone formation. RANK/RANKL/OPG pathway is central: osteoblasts produce RANKL which activates osteoclasts; OPG is a decoy receptor. Estrogen deficiency (postmenopausal) increases RANKL expression, accelerating bone loss. Age-related decline in osteoblast function and Wnt signaling reduces formation. Risk factors: female sex, advancing age, low BMI, family history, smoking, alcohol, glucocorticoids, immobility. Secondary causes include hyperparathyroidism, hyperthyroidism, celiac disease, and chronic steroid use.',
    ['Usually asymptomatic until fracture', 'Fragility fractures (hip, vertebral, wrist, humerus)', 'Height loss (>1.5 inches suggests vertebral compression fractures)', 'Kyphosis (dowager hump)', 'Back pain from vertebral fractures', 'Decreased mobility and fear of falling'],
    ['DXA scan (dual-energy X-ray absorptiometry): T-score <=-2.5 at hip or spine', 'FRAX score (10-year fracture probability)', 'Vertebral fracture assessment', 'Serum calcium, phosphorus, alkaline phosphatase', '25-hydroxyvitamin D level', 'PTH level', 'TSH', 'CBC, CMP, serum protein electrophoresis (exclude secondary causes)', 'CTX or P1NP (bone turnover markers for monitoring)'],
    ['Calcium (1000-1200 mg/day) and vitamin D (800-1000 IU/day)', 'Weight-bearing and resistance exercise', 'Fall prevention strategies', 'Bisphosphonates first-line: alendronate, risedronate (oral weekly), zoledronic acid (IV yearly)', 'Denosumab (anti-RANKL, every 6 months) for bisphosphonate-intolerant or renal insufficiency', 'Anabolic agents: teriparatide (PTH analog, 2-year limit), romosozumab (anti-sclerostin, 1 year) for severe osteoporosis', 'Raloxifene (SERM) for vertebral fracture prevention', 'Drug holiday consideration after 3-5 years of bisphosphonates'],
    ['Hip fracture (20-30% mortality within 1 year)', 'Vertebral compression fractures', 'Chronic pain and disability', 'Loss of independence', 'Atypical femur fracture (rare, with prolonged bisphosphonate use)', 'Osteonecrosis of the jaw (rare)'],
    'Osteoporosis means your bones have become thin and fragile, making them more likely to break. It often has no symptoms until a fracture occurs. Prevention includes calcium, vitamin D, weight-bearing exercise, and avoiding smoking. Medications can strengthen bones and significantly reduce fracture risk.',
    ['Hip fracture after minimal trauma', 'Multiple vertebral compression fractures', 'Acute back pain with height loss (new vertebral fracture)', 'Fall with suspected fracture in elderly patient']
  ),

  mc(
    'primary-hyperparathyroidism',
    'Primary Hyperparathyroidism',
    'Hiperparatiroidismo Primario',
    'bone-mineral',
    '5A50',
    'Excessive PTH secretion from one or more parathyroid glands, causing hypercalcemia. Most common cause of hypercalcemia in outpatients. Single adenoma in 85% of cases.',
    'Parathyroid adenoma (85%), hyperplasia (10%), or carcinoma (<1%) autonomously secretes PTH independent of calcium feedback. Excess PTH increases bone resorption (activates osteoclasts), increases renal calcium reabsorption, increases renal phosphate excretion, and stimulates renal 1-alpha-hydroxylase (increasing 1,25-dihydroxyvitamin D and GI calcium absorption). Net result: hypercalcemia, hypophosphatemia, and accelerated bone turnover. Associated with MEN1 (parathyroid + pituitary + pancreas) and MEN2A.',
    ['"Stones, bones, groans, and psychiatric overtones"', 'Kidney stones (calcium oxalate or phosphate)', 'Bone pain, osteoporosis, osteitis fibrosa cystica', 'Abdominal pain, constipation, nausea, peptic ulcers', 'Depression, confusion, fatigue, cognitive impairment', 'Polyuria and polydipsia', 'Muscle weakness', 'Often asymptomatic (incidental hypercalcemia)'],
    ['Serum calcium elevated with PTH elevated or inappropriately normal', '24-hour urine calcium (distinguishes from familial hypocalciuric hypercalcemia)', 'Serum phosphorus (low)', 'Vitamin D levels (25-OH and 1,25-dihydroxy)', 'Creatinine and eGFR', 'DXA bone density (distal 1/3 radius, lumbar spine, hip)', 'Sestamibi-SPECT/CT or 4D-CT for adenoma localization', 'Neck ultrasound'],
    ['Parathyroidectomy (definitive treatment, cure rate >95%)', 'Surgery indications: calcium >1 mg/dL above normal, age <50, T-score <=-2.5, eGFR <60, kidney stones, vertebral fracture', 'Minimally invasive parathyroidectomy with intraoperative PTH monitoring', 'Medical management if surgery not indicated: hydration, avoid thiazides', 'Cinacalcet (calcimimetic) for hypercalcemia if surgery contraindicated', 'Bisphosphonates or denosumab for bone protection', 'Annual monitoring for asymptomatic patients not undergoing surgery'],
    ['Hypercalcemic crisis (calcium >14 mg/dL)', 'Kidney stones and nephrocalcinosis', 'Osteoporosis and fractures', 'Pancreatitis', 'Cardiac arrhythmias (shortened QT)', 'Hungry bone syndrome post-surgery (acute hypocalcemia)'],
    'Primary hyperparathyroidism means one of your parathyroid glands is overactive, making too much hormone that raises calcium in your blood. This can weaken bones, cause kidney stones, and affect your mood. Surgery to remove the overactive gland is curative in most cases. If mild and asymptomatic, monitoring is an option.',
    ['Severe hypercalcemia (calcium >14 mg/dL): confusion, cardiac arrhythmias, dehydration', 'Acute renal failure', 'Pathological fracture', 'Post-surgery severe hypocalcemia (tetany, seizures)']
  ),

  mc(
    'vitamin-d-deficiency',
    'Vitamin D Deficiency / Osteomalacia',
    'Deficiencia de Vitamina D / Osteomalacia',
    'bone-mineral',
    '5B70',
    'Inadequate vitamin D leading to impaired calcium absorption and defective bone mineralization. Rickets in children, osteomalacia in adults. Affects ~40% of the global population.',
    'Vitamin D (cholecalciferol/D3 from skin UV synthesis and diet, ergocalciferol/D2 from plants) is hydroxylated in liver (25-OH vitamin D) and kidney (1,25-dihydroxyvitamin D, the active form). Active vitamin D increases intestinal calcium and phosphorus absorption. Deficiency leads to hypocalcemia, secondary hyperparathyroidism, and phosphorus wasting. Impaired mineralization produces osteoid accumulation (osteomalacia) and growth plate abnormalities (rickets). Risk factors: dark skin, northern latitudes, limited sun exposure, malabsorption (celiac, IBD, gastric bypass), obesity, chronic kidney disease, liver disease.',
    ['Diffuse bone and muscle pain', 'Proximal muscle weakness (difficulty rising from chair, climbing stairs)', 'Fatigue', 'Increased fall risk', 'Children: bowed legs, widened wrists, rachitic rosary, craniotabes, delayed fontanelle closure', 'Bone tenderness on palpation', 'Pathological fractures'],
    ['25-hydroxyvitamin D level: deficiency <20 ng/mL, insufficiency 20-29 ng/mL', 'Serum calcium (low or low-normal)', 'Phosphorus (low)', 'Alkaline phosphatase (elevated)', 'PTH (elevated secondary hyperparathyroidism)', 'X-rays: Looser zones (pseudofractures) in osteomalacia, cupping/fraying of metaphyses in rickets', 'DXA bone density', '24-hour urine calcium (low)'],
    ['Vitamin D3 supplementation: deficiency treatment 50,000 IU weekly x 8-12 weeks then 1000-2000 IU daily maintenance', 'Calcium supplementation (1000-1200 mg/day)', 'Active vitamin D (calcitriol) for CKD or hypoparathyroidism', 'Treat underlying malabsorption', 'Higher doses needed for obesity (BMI >30) and malabsorption', 'Monitor 25-OH vitamin D at 3 months', 'Goal level 30-50 ng/mL', 'Sun exposure guidance (10-15 min midday)'],
    ['Osteomalacia and pathologic fractures', 'Osteoporosis', 'Secondary hyperparathyroidism', 'Hypocalcemic tetany and seizures (severe deficiency)', 'Rickets with skeletal deformities in children', 'Increased fall risk and fractures in elderly'],
    'Vitamin D is essential for strong bones and muscles. Many people do not get enough from sunlight and food. Low vitamin D can cause bone pain, muscle weakness, and increase your risk of falls and fractures. A simple blood test can check your level, and supplements can correct the deficiency.',
    ['Hypocalcemic tetany: muscle spasms, numbness, tingling, seizures', 'Pathological fracture', 'Severe rickets with respiratory compromise in infants']
  ),

  // ============================================================
  // INBORN ERRORS OF METABOLISM (4)
  // ============================================================
  mc(
    'phenylketonuria',
    'Phenylketonuria (PKU)',
    'Fenilcetonuria',
    'inborn-error',
    '5C50',
    'Autosomal recessive disorder of phenylalanine metabolism due to phenylalanine hydroxylase (PAH) deficiency, causing intellectual disability if untreated. Newborn screening has transformed outcomes.',
    'Mutations in the PAH gene reduce or abolish phenylalanine hydroxylase activity, preventing conversion of phenylalanine to tyrosine. Phenylalanine accumulates in blood and brain, causing neurotoxicity through multiple mechanisms: impaired myelination, disrupted neurotransmitter synthesis (reduced dopamine, serotonin), and oxidative stress. Phenylpyruvate and other phenylketones appear in urine (phenylketonuria). BH4 (tetrahydrobiopterin) is the essential cofactor; some mutations respond to BH4 supplementation. Classic PKU: PAH activity <1%; mild PKU: PAH activity 1-5%.',
    ['Normal at birth', 'Without treatment: intellectual disability (severe by age 1 year)', 'Musty/mousy odor (phenylacetic acid)', 'Fair skin and hair (impaired melanin synthesis from low tyrosine)', 'Eczema', 'Seizures', 'Behavioral problems (hyperactivity, aggression)', 'Maternal PKU: teratogenic if uncontrolled during pregnancy (microcephaly, CHD, IUGR in fetus)'],
    ['Newborn screening (mandatory in all US states): elevated phenylalanine on dried blood spot', 'Confirmatory plasma phenylalanine level (>360 umol/L or >6 mg/dL)', 'PAH genotyping', 'BH4 loading test (to identify BH4-responsive patients)', 'Plasma amino acid profile (low tyrosine)', 'Urine pterin analysis (rule out BH4 synthesis/recycling defects)', 'Neurocognitive assessment'],
    ['Phenylalanine-restricted diet (lifelong): medical formula + measured low-protein foods', 'Target phenylalanine levels: 120-360 umol/L (2-6 mg/dL)', 'Sapropterin (BH4 supplement) for responsive genotypes (~25-50%)', 'Pegvaliase (PEGylated phenylalanine ammonia lyase enzyme substitution) for adults inadequately controlled', 'Large neutral amino acid supplements (adjunctive)', 'Regular monitoring of phenylalanine levels', 'Strict control before and during pregnancy (maternal PKU)'],
    ['Intellectual disability (if untreated or poorly controlled)', 'Executive function deficits even with treatment', 'Behavioral and psychiatric disorders', 'White matter abnormalities', 'Maternal PKU syndrome (congenital heart disease, microcephaly in offspring)', 'Nutritional deficiencies from restricted diet', 'Osteoporosis'],
    'PKU is an inherited condition where your body cannot process an amino acid called phenylalanine found in many protein-containing foods. Newborn screening catches it early. Treatment is a special low-phenylalanine diet started from birth, which prevents intellectual disability. Some patients also benefit from medications. Lifelong dietary management is important.',
    ['Undiagnosed newborn with rising phenylalanine and neurological deterioration', 'Maternal PKU with uncontrolled phenylalanine during pregnancy (fetal risk)', 'Severe nutritional deficiency from overly restricted diet']
  ),

  mc(
    'gaucher-disease',
    'Gaucher Disease',
    'Enfermedad de Gaucher',
    'inborn-error',
    '5C51.0',
    'Most common lysosomal storage disease, caused by deficiency of glucocerebrosidase (GBA), leading to accumulation of glucocerebroside in macrophages. Type 1 (non-neuronopathic) is most common.',
    'Autosomal recessive mutations in the GBA gene reduce glucocerebrosidase activity, causing glucocerebroside (glucosylceramide) accumulation in tissue macrophages (Gaucher cells). These lipid-laden macrophages infiltrate the spleen, liver, bone marrow, and sometimes the CNS. Type 1 (94%): non-neuronopathic, variable severity, common in Ashkenazi Jewish population (1:850 carrier frequency). Type 2: acute neuronopathic, fatal in infancy. Type 3: chronic neuronopathic. GBA heterozygous mutations are the most common genetic risk factor for Parkinson disease.',
    ['Splenomegaly (massive, often first finding)', 'Hepatomegaly', 'Bone pain and bone crises (avascular necrosis, pathologic fractures)', 'Anemia and thrombocytopenia (hypersplenism and marrow infiltration)', 'Easy bruising and bleeding', 'Fatigue', 'Growth retardation in children', 'Type 2/3: seizures, oculomotor apraxia, progressive neurodegeneration'],
    ['Glucocerebrosidase enzyme activity in leukocytes (low confirms diagnosis)', 'GBA gene sequencing (common mutations: N370S, L444P)', 'CBC (cytopenia)', 'Biomarkers: chitotriosidase (markedly elevated), CCL18/PARC, glucosylsphingosine', 'Ferritin (elevated)', 'MRI of liver, spleen, bone (Gaucher infiltration pattern)', 'DXA bone density', 'Abdominal ultrasound for organ volumes'],
    ['Enzyme replacement therapy (ERT): imiglucerase, velaglucerase alfa, taliglucerase alfa (IV every 2 weeks)', 'Substrate reduction therapy (SRT): eliglustat (oral, first-line for Type 1 with compatible CYP2D6 genotype), miglustat', 'Splenectomy rarely indicated now (increases bone disease risk)', 'Orthopedic management of bone complications', 'Monitoring: CBC, biomarkers, organ volumes, bone density every 6-12 months', 'Genetic counseling', 'Screen for Parkinson disease risk in GBA carriers'],
    ['Bone crises (excruciating pain)', 'Avascular necrosis of femoral head', 'Pathologic fractures', 'Severe cytopenias and bleeding', 'Pulmonary hypertension', 'Parkinson disease (increased risk in GBA carriers and patients)', 'Hepatic fibrosis', 'Type 2: death in infancy from neurodegeneration'],
    'Gaucher disease is an inherited condition where a fatty substance builds up in certain cells, enlarging the spleen and liver and weakening bones. Enzyme replacement therapy (given by IV every two weeks) or oral medication can effectively manage the disease. Early treatment prevents irreversible bone and organ damage.',
    ['Bone crisis with severe pain and fever', 'Severe bleeding from profound thrombocytopenia', 'Splenic rupture', 'Rapid neurological deterioration (Type 2/3)']
  ),

  mc(
    'wilsons-disease',
    'Wilson Disease',
    'Enfermedad de Wilson',
    'inborn-error',
    '5C64.0',
    'Autosomal recessive disorder of copper metabolism caused by mutations in ATP7B, leading to toxic copper accumulation in liver, brain, and other organs. Treatable if diagnosed early.',
    'ATP7B (Wilson ATPase) is a hepatocyte copper transporter responsible for biliary copper excretion and incorporation of copper into ceruloplasmin. Mutations cause defective biliary copper excretion and reduced ceruloplasmin synthesis. Copper accumulates first in liver, then overflows into blood, depositing in brain (basal ganglia), cornea (Kayser-Fleischer rings), kidneys, and joints. Hepatic copper toxicity causes oxidative damage, mitochondrial dysfunction, and hepatocyte death. Neurological damage results from copper deposition in lenticular nuclei. Onset typically ages 5-40.',
    ['Hepatic: hepatitis, cirrhosis, acute liver failure (may be first presentation)', 'Neurological: tremor, dysarthria, dystonia, parkinsonism, gait abnormality', 'Psychiatric: personality change, depression, psychosis (often precedes neurological)', 'Kayser-Fleischer rings (copper deposits in Descemet membrane -- 95% in neurological Wilson)', 'Hemolytic anemia (Coombs-negative)', 'Renal tubular acidosis', 'Sunflower cataracts'],
    ['Serum ceruloplasmin (low, <20 mg/dL)', 'Serum copper (total low due to low ceruloplasmin, but free copper elevated)', '24-hour urine copper (elevated >100 mcg/day, >40 mcg suggestive)', 'Slit-lamp examination for Kayser-Fleischer rings', 'Liver biopsy with hepatic copper quantification (>250 mcg/g dry weight diagnostic)', 'ATP7B gene sequencing', 'Leipzig score (composite diagnostic score)', 'MRI brain (T2 hyperintensity in basal ganglia, "face of the giant panda" sign)'],
    ['Lifelong treatment required', 'D-penicillamine (copper chelator, first-line -- monitor for side effects: nephrotoxicity, bone marrow suppression)', 'Trientine (alternative chelator, fewer side effects)', 'Zinc acetate (blocks intestinal copper absorption -- maintenance therapy or mild disease)', 'Low-copper diet (avoid liver, shellfish, chocolate, mushrooms, nuts)', 'Liver transplantation for acute liver failure or decompensated cirrhosis (curative)', 'Screen first-degree relatives (siblings especially)', 'Monitoring: 24-hour urine copper, free copper, liver function, CBC'],
    ['Acute liver failure (fulminant Wilson disease)', 'Cirrhosis and portal hypertension', 'Irreversible neurological damage if treatment delayed', 'Hemolytic crises', 'Renal failure', 'Psychiatric disability'],
    'Wilson disease is a rare inherited condition where copper builds up in your body, damaging the liver and brain. It is very treatable with medications that remove excess copper. Early diagnosis and lifelong treatment can prevent serious complications. Family members should also be tested because it is genetic.',
    ['Acute liver failure: jaundice, coagulopathy, encephalopathy', 'Hemolytic crisis with acute kidney injury', 'Rapid neurological deterioration', 'Status epilepticus']
  ),

  mc(
    'hemochromatosis',
    'Hereditary Hemochromatosis',
    'Hemocromatosis Hereditaria',
    'inborn-error',
    '5C64.1',
    'Most common genetic disorder in Caucasians (1:200-300), caused by HFE gene mutations leading to excessive intestinal iron absorption and organ iron deposition. C282Y homozygosity accounts for ~80% of cases.',
    'HFE protein normally regulates hepcidin, the master iron regulator. C282Y mutation reduces hepcidin production, leading to unrestricted ferroportin-mediated iron absorption from enterocytes. Iron accumulates in liver (cirrhosis), pancreas (diabetes), heart (cardiomyopathy), joints, skin, and pituitary. Iron catalyzes free radical formation (Fenton reaction) causing oxidative tissue damage. Clinical penetrance is variable: ~28% of C282Y homozygous men develop clinical disease vs ~1% of women (menstruation is protective). H63D is a milder mutation with lower penetrance.',
    ['Often asymptomatic until organ damage (age 40-60 in men, post-menopausal in women)', 'Fatigue (most common early symptom)', 'Arthralgias (metacarpophalangeal joints -- "iron fist")', 'Hepatomegaly and elevated liver enzymes', 'Skin bronzing ("bronze diabetes")', 'Diabetes mellitus', 'Erectile dysfunction and hypogonadism', 'Cardiomyopathy and arrhythmias', 'Cirrhosis (with increased HCC risk)'],
    ['Transferrin saturation (>45% suggests iron overload)', 'Serum ferritin (elevated -- correlates with iron stores)', 'HFE gene testing (C282Y and H63D mutations)', 'Liver MRI with FerriScan (quantitative iron measurement)', 'Liver biopsy with Perls Prussian blue stain (if diagnosis uncertain or staging needed)', 'Liver function tests', 'Fasting glucose / HbA1c', 'Echocardiogram if cardiac symptoms', 'Screen first-degree relatives with HFE testing and iron studies'],
    ['Therapeutic phlebotomy: weekly removal of 500 mL blood until ferritin <50 ng/mL', 'Maintenance phlebotomy: every 2-4 months to keep ferritin 50-100 ng/mL', 'Iron chelation (deferasirox, deferoxamine) if phlebotomy not tolerated (anemia, poor venous access)', 'Avoid iron supplements and vitamin C supplementation (enhances iron absorption)', 'Limit alcohol (synergistic liver toxicity)', 'Avoid raw shellfish (Vibrio vulnificus -- increased risk)', 'Screen for hepatocellular carcinoma if cirrhotic (ultrasound + AFP every 6 months)', 'Treat associated conditions: diabetes, heart disease, hypogonadism'],
    ['Cirrhosis and hepatocellular carcinoma (200x risk with cirrhosis)', 'Cardiomyopathy and heart failure', 'Diabetes mellitus ("bronze diabetes")', 'Hypogonadism and infertility', 'Arthropathy (not reversible with treatment)', 'Infections (iron-overloaded macrophages have impaired bactericidal function)'],
    'Hereditary hemochromatosis causes your body to absorb too much iron from food, which deposits in organs and can cause liver disease, diabetes, and heart problems. Treatment is simple and effective: regular blood removal (phlebotomy) to lower iron stores. When caught early, organ damage can be prevented. Family members should be tested.',
    ['Signs of liver failure or acute hepatic decompensation', 'New-onset heart failure or arrhythmia', 'Sepsis with unusual organisms (Vibrio, Listeria, Yersinia)']
  ),

  // ============================================================
  // ADDITIONAL CONDITIONS TO REACH 30
  // ============================================================

  mc(
    'hypoglycemia',
    'Hypoglycemia',
    'Hipoglucemia',
    'diabetes',
    '5A44',
    'Abnormally low blood glucose (<70 mg/dL), most commonly from diabetes treatment (insulin, sulfonylureas), but also from insulinoma, adrenal insufficiency, or critical illness.',
    'Glucose counterregulation involves glucagon secretion (first defense), epinephrine release, cortisol, and growth hormone. In diabetes, impaired counterregulation and hypoglycemia unawareness develop with recurrent episodes. Non-diabetic causes: insulinoma (autonomous insulin secretion), nesidioblastosis, post-bariatric surgery (dumping syndrome with reactive hypoglycemia), adrenal insufficiency, alcohol inhibition of gluconeogenesis, severe liver disease, non-islet cell tumors (IGF-2 producing), and factitious (exogenous insulin or sulfonylurea).',
    ['Adrenergic symptoms: tremor, sweating, palpitations, anxiety, hunger', 'Neuroglycopenic symptoms: confusion, difficulty concentrating, slurred speech, visual changes', 'Seizures and loss of consciousness (severe)', 'Behavioral changes', 'Coma and death if untreated', 'Whipple triad: symptoms + low glucose + symptom resolution with glucose correction'],
    ['Blood glucose <70 mg/dL (level 1), <54 mg/dL (level 2, clinically significant), severe (cognitive impairment requiring assistance)', 'Whipple triad confirmation', 'If non-diabetic: 72-hour supervised fast with serial glucose, insulin, C-peptide, proinsulin, beta-hydroxybutyrate', 'Insulin-to-glucose ratio and C-peptide help distinguish cause', 'Sulfonylurea screen', 'Cortisol level', 'CT/MRI pancreas for insulinoma', 'IGF-2 level for non-islet cell tumors'],
    ['Acute: oral glucose (15-20g fast-acting carbohydrates), recheck in 15 min (Rule of 15)', 'Severe: IV dextrose (D50) or glucagon injection (IM/SC/intranasal)', 'Adjust diabetes medications (reduce insulin or sulfonylurea dose)', 'CGM with low glucose alerts for diabetes patients', 'Insulinoma: surgical resection (90% cure)', 'Diazoxide for inoperable insulinoma', 'Frequent small meals for reactive hypoglycemia', 'Treat underlying cause (adrenal insufficiency, etc.)'],
    ['Brain damage from prolonged neuroglycopenia', 'Cardiac arrhythmias', 'Seizures', 'Falls and injury', 'Hypoglycemia unawareness (loss of warning symptoms)', 'Increased cardiovascular mortality', 'Reduced quality of life and fear of hypoglycemia'],
    'Hypoglycemia means your blood sugar has dropped too low, usually from diabetes medication. Symptoms include shaking, sweating, confusion, and feeling faint. Treat it immediately by eating or drinking something with sugar (juice, glucose tablets). Always carry a fast-acting sugar source and make sure someone close to you knows how to use glucagon.',
    ['Loss of consciousness or seizure', 'Glucose <40 mg/dL', 'Unable to swallow or take oral glucose', 'Confusion or combativeness', 'Hypoglycemia not responding to oral glucose']
  ),

  mc(
    'siadh',
    'Syndrome of Inappropriate ADH Secretion (SIADH)',
    'Sindrome de Secrecion Inadecuada de ADH',
    'pituitary',
    '5A60.1',
    'Excess ADH (vasopressin) secretion causing dilutional hyponatremia with euvolemia. Common causes include CNS disorders, pulmonary disease, malignancy, and medications.',
    'Excessive or inappropriate ADH secretion causes water retention by increasing aquaporin-2 channels in renal collecting ducts. This leads to concentrated urine, expanded plasma volume (euvolemic or mildly hypervolemic), dilutional hyponatremia, and low serum osmolality. The expanded volume triggers natriuretic peptides causing sodium wasting, perpetuating hyponatremia. Causes: CNS (stroke, trauma, meningitis, SAH), pulmonary (pneumonia, TB, SCLC), drugs (SSRIs, carbamazepine, cyclophosphamide, NSAIDs, ecstasy/MDMA), ectopic ADH (small cell lung cancer), pain, nausea, and post-surgical state.',
    ['Nausea and malaise (mild hyponatremia 125-135 mEq/L)', 'Headache', 'Confusion and disorientation', 'Muscle cramps and weakness', 'Seizures (severe <120 mEq/L)', 'Coma and respiratory arrest (severe)', 'Euvolemic on exam (no edema, no dehydration)'],
    ['Serum sodium <135 mEq/L with serum osmolality <280 mOsm/kg', 'Urine osmolality inappropriately concentrated (>100 mOsm/kg)', 'Urine sodium >40 mEq/L', 'Clinically euvolemic', 'Normal thyroid and adrenal function (must exclude hypothyroidism and adrenal insufficiency)', 'Low serum uric acid', 'BUN low', 'Chest X-ray (pulmonary cause)', 'CT head if neurological cause suspected'],
    ['Treat underlying cause', 'Fluid restriction (800-1000 mL/day) -- first-line for mild cases', 'Salt tablets and loop diuretics (furosemide increases free water excretion)', 'Tolvaptan (vasopressin V2 receptor antagonist) for refractory SIADH', 'Hypertonic saline (3% NaCl) for severe symptomatic hyponatremia', 'Correction rate: no more than 8-10 mEq/L per 24 hours (risk of osmotic demyelination syndrome)', 'Demeclocycline (rarely used now)', 'Urea (oral osmotic agent, used in Europe)'],
    ['Osmotic demyelination syndrome (central pontine myelinolysis) from overly rapid correction', 'Seizures and brain edema from severe hyponatremia', 'Falls and fractures', 'Cognitive impairment (chronic mild hyponatremia)', 'Death from brain herniation (acute severe hyponatremia)'],
    'SIADH is a condition where your body retains too much water, diluting the sodium in your blood. This can cause nausea, confusion, and in severe cases, seizures. Treatment involves finding and treating the underlying cause, limiting fluid intake, and sometimes medications. Sodium correction must be done carefully and gradually.',
    ['Sodium <120 mEq/L with seizures or altered mental status', 'Acute symptomatic hyponatremia (requires 3% saline)', 'Signs of cerebral edema: headache, vomiting, altered consciousness', 'Respiratory arrest']
  ),

  mc(
    'pagets-disease-bone',
    'Paget Disease of Bone',
    'Enfermedad Osea de Paget',
    'bone-mineral',
    'FB92',
    'Focal disorder of bone remodeling with excessive and disorganized osteoclastic resorption and osteoblastic formation, leading to enlarged, structurally weak bones. Second most common metabolic bone disease after osteoporosis.',
    'Paramyxoviral triggers (measles, canine distemper) are suspected in genetically susceptible individuals (SQSTM1/p62 mutations in 10-50% of familial cases). Disease progresses through three phases: (1) lytic/osteoclastic phase with large multinucleated osteoclasts, (2) mixed phase with both resorption and chaotic new bone formation, (3) sclerotic/osteoblastic phase with dense, disorganized "woven" bone. The result is enlarged, vascularized bones with a mosaic (jigsaw puzzle) pattern on histology. Commonly affects pelvis, spine, femur, tibia, and skull.',
    ['Often asymptomatic (incidental finding on X-ray or elevated alkaline phosphatase)', 'Bone pain (most common symptom)', 'Bone enlargement and deformity (bowing of tibia, skull enlargement)', 'Hearing loss (VIII nerve compression from skull involvement)', 'Increased warmth over affected bone (hypervascularity)', 'Pathologic fractures', 'Headache (skull involvement)', 'Spinal stenosis and radiculopathy'],
    ['Serum alkaline phosphatase (markedly elevated -- best marker of disease activity)', 'Bone-specific alkaline phosphatase or P1NP for specificity', 'X-ray: cortical thickening, trabecular coarsening, lytic and sclerotic areas, "cotton wool" skull, "flame-shaped" lytic front in long bones', 'Bone scan (technetium-99m): high sensitivity for polyostotic disease', 'CT/MRI for complications (spinal stenosis, sarcomatous transformation)', 'Serum calcium (usually normal, may elevate with immobilization)', 'Bone biopsy rarely needed (mosaic pattern pathognomonic)'],
    ['Not all patients need treatment (asymptomatic, normal ALP)', 'Bisphosphonates: zoledronic acid (single IV dose, first-line, may achieve years of remission)', 'Alendronate or risedronate (oral alternatives)', 'Calcitonin (second-line, now rarely used)', 'Adequate calcium and vitamin D supplementation', 'Orthopedic surgery for fractures, severe deformity, or joint replacement', 'Monitor alkaline phosphatase for relapse', 'Treat before elective surgery on pagetic bone (reduce vascularity)'],
    ['Osteosarcoma (<1% but 1000x increased risk vs general population)', 'Pathologic fractures', 'Hearing loss and cranial nerve compression', 'Spinal stenosis and paralysis', 'High-output heart failure (rare, extensive disease)', 'Hypercalcemia with immobilization', 'Secondary osteoarthritis of adjacent joints'],
    'Paget disease causes some of your bones to grow abnormally large and weak. Many people have no symptoms, and it is found by chance on blood tests or X-rays. When treatment is needed, a single dose of intravenous bisphosphonate (zoledronic acid) can control the disease for years. Regular monitoring is important.',
    ['Sudden severe bone pain (possible fracture or sarcomatous change)', 'Neurological deficit from spinal stenosis', 'Signs of high-output heart failure', 'New mass arising from pagetic bone (osteosarcoma)']
  ),

  mc(
    'addisonian-crisis',
    'Adrenal Crisis',
    'Crisis Suprarrenal',
    'adrenal',
    '5A74.1',
    'Life-threatening emergency caused by acute cortisol insufficiency, presenting with shock, typically precipitated by physiologic stress in patients with undiagnosed or undertreated adrenal insufficiency.',
    'Acute decompensation of chronic adrenal insufficiency or acute adrenal destruction. Cortisol is essential for vascular tone (permissive effect on catecholamines), glucose homeostasis, and inflammatory regulation. Without cortisol during physiologic stress, the body cannot mount appropriate hemodynamic and metabolic responses. Precipitants: infection (most common), surgery, trauma, abrupt glucocorticoid withdrawal, bilateral adrenal hemorrhage (Waterhouse-Friderichsen in meningococcemia), and adrenal infarction (antiphospholipid syndrome). Mortality is 6% per crisis.',
    ['Profound hypotension and shock refractory to fluids and vasopressors', 'Severe weakness and fatigue', 'Nausea, vomiting, abdominal pain', 'Fever', 'Altered mental status or coma', 'Dehydration', 'Hypoglycemia', 'Hyponatremia and hyperkalemia'],
    ['Clinical diagnosis: DO NOT delay treatment for confirmatory testing', 'Random cortisol (low in crisis, but any value may be inappropriately low in critical illness)', 'ACTH level (draw before giving hydrocortisone if possible)', 'BMP: hyponatremia, hyperkalemia, hypoglycemia, elevated creatinine', 'CBC (eosinophilia, lymphocytosis)', 'Blood cultures and infection workup (common trigger)', 'ECG (hyperkalemia changes)'],
    ['IMMEDIATE: IV hydrocortisone 100 mg bolus, then 50 mg every 6-8 hours', 'Aggressive IV normal saline resuscitation (often 2-3 L in first hours)', 'IV dextrose for hypoglycemia', 'Vasopressors if needed (may be refractory until cortisol replaced)', 'Treat precipitating cause (antibiotics for infection)', 'Taper hydrocortisone over 1-3 days as patient improves', 'Resume oral replacement and fludrocortisone when stable and eating', 'Patient and family education on crisis prevention'],
    ['Death (mortality 6% per event)', 'Multi-organ failure', 'Cerebral edema', 'Cardiac arrest', 'Recurrent crises without proper prevention education'],
    'An adrenal crisis is a medical emergency where your body does not have enough cortisol to handle stress. It causes dangerously low blood pressure and can be fatal without treatment. If you have adrenal insufficiency, always carry your emergency injection kit, wear a medical alert bracelet, and know when to increase your medication or give the emergency injection.',
    ['All adrenal crisis presentations are emergencies requiring immediate treatment', 'Shock not responding to fluids or vasopressors', 'Hypotension with known adrenal insufficiency', 'Altered consciousness in patient on chronic steroids who is acutely ill']
  ),

];

// --- Build Record ---

export const METABOLIC_CONDITIONS: Record<string, MetabolicConditionEntry> = {};
for (const entry of metabolicArray) {
  METABOLIC_CONDITIONS[entry.id] = entry;
}

// --- Utility Functions ---

/** Get a single metabolic condition by id */
export function getMetabolicCondition(id: string): MetabolicConditionEntry | undefined {
  return METABOLIC_CONDITIONS[id];
}

/** Search metabolic conditions by text across name, description, category, clinical features, pathophysiology, and treatment */
export function searchMetabolicConditions(query: string): MetabolicConditionEntry[] {
  const q = query.toLowerCase();
  return metabolicArray.filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.nameEs.toLowerCase().includes(q) ||
    e.category.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.pathophysiology.toLowerCase().includes(q) ||
    e.clinicalFeatures.some(f => f.toLowerCase().includes(q)) ||
    e.diagnostics.some(d => d.toLowerCase().includes(q)) ||
    e.treatment.some(t => t.toLowerCase().includes(q))
  );
}

/** Get all conditions for a given metabolic category */
export function getMetabolicByCategory(category: MetabolicCategory): MetabolicConditionEntry[] {
  return metabolicArray.filter(e => e.category === category);
}

/** Get total number of metabolic conditions in the database */
export function getMetabolicConditionCount(): number {
  return metabolicArray.length;
}

/** Get all unique categories represented in the database */
export function getMetabolicCategories(): MetabolicCategory[] {
  return [...new Set(metabolicArray.map(e => e.category))];
}

/** Get conditions that list a specific emergency sign keyword */
export function getMetabolicEmergencies(keyword: string): MetabolicConditionEntry[] {
  const q = keyword.toLowerCase();
  return metabolicArray.filter(e =>
    e.emergencySigns.some(s => s.toLowerCase().includes(q))
  );
}
