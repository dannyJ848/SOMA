/**
 * Endocrinology Specialty Database
 * 25+ entries covering diabetes, thyroid, adrenal, pituitary,
 * bone/calcium, reproductive hormones, and metabolic disorders.
 */

// --- Types ---

export type EndocrinologySubcategory =
  | 'diabetes' | 'thyroid' | 'adrenal' | 'pituitary'
  | 'bone-calcium' | 'reproductive-hormones' | 'metabolic';

export interface EndocrinologyEntry {
  id: string;
  name: string;
  nameEs: string;
  subcategory: EndocrinologySubcategory;
  summary: string;
  pathophysiology: string;
  clinicalFeatures: string[];
  diagnosticWorkup: string[];
  managementPrinciples: string;
  medications: string[];
  monitoring: string[];
  complications: string[];
  patientEducation: string;
  referralCriteria: string;
}

// --- Compact helper ---

function endo(
  id: string, name: string, nameEs: string,
  subcategory: EndocrinologySubcategory, summary: string,
  pathophysiology: string, clinicalFeatures: string[],
  diagnosticWorkup: string[], managementPrinciples: string,
  medications: string[], monitoring: string[],
  complications: string[], patientEducation: string,
  referralCriteria: string
): EndocrinologyEntry {
  return {
    id, name, nameEs, subcategory, summary, pathophysiology,
    clinicalFeatures, diagnosticWorkup, managementPrinciples,
    medications, monitoring, complications, patientEducation,
    referralCriteria,
  };
}

// --- Database ---

export const ENDOCRINOLOGY_ENTRIES: Record<string, EndocrinologyEntry> = {};

const entries: EndocrinologyEntry[] = [

  // ============================================================
  // DIABETES (6)
  // ============================================================
  endo(
    'type-1-dm', 'Type 1 Diabetes Management', 'Manejo de diabetes tipo 1',
    'diabetes',
    'Autoimmune destruction of pancreatic beta cells requiring lifelong insulin replacement.',
    'T-cell mediated autoimmune attack on beta cells leads to absolute insulin deficiency. Genetic susceptibility (HLA-DR3/DR4) plus environmental triggers initiate autoimmunity. GAD65, IA-2, and ZnT8 autoantibodies are detectable months to years before clinical onset.',
    ['Polyuria, polydipsia, polyphagia, weight loss', 'Often acute onset in children/young adults', 'DKA as initial presentation in ~30%', 'Low or absent C-peptide levels'],
    ['HbA1c and fasting glucose', 'C-peptide level (low/absent)', 'Autoantibodies: GAD65, IA-2, ZnT8, ICA', 'Comprehensive metabolic panel', 'Lipid panel and thyroid function (associated autoimmunity)'],
    'Basal-bolus insulin regimen or insulin pump therapy. Carbohydrate counting guides mealtime dosing. Continuous glucose monitoring (CGM) improves outcomes. Target HbA1c <7% for most adults; individualize based on hypoglycemia risk.',
    ['Insulin glargine/detemir (basal)', 'Insulin lispro/aspart (bolus)', 'Insulin pump (continuous subcutaneous infusion)', 'Pramlintide (adjunct amylin analog)'],
    ['HbA1c every 3 months', 'CGM or SMBG 4-10 times daily', 'Annual dilated eye exam', 'Annual urine albumin-to-creatinine ratio', 'Annual lipid panel and thyroid function'],
    ['Diabetic retinopathy', 'Diabetic nephropathy', 'Peripheral neuropathy', 'Cardiovascular disease', 'DKA', 'Hypoglycemia'],
    'Type 1 diabetes means your immune system attacked the cells that make insulin. You will need insulin for life. Learning to count carbohydrates and use a CGM can greatly improve blood sugar control and quality of life.',
    'All patients with suspected Type 1 DM should see endocrinology. Refer urgently if DKA or new diagnosis.'
  ),

  endo(
    'type-2-dm-stepwise', 'Type 2 DM Stepwise Therapy', 'Terapia escalonada para diabetes tipo 2',
    'diabetes',
    'Progressive insulin resistance and beta-cell dysfunction managed with lifestyle and stepwise pharmacotherapy.',
    'Insulin resistance in muscle, liver, and adipose tissue precedes beta-cell failure. Chronic hyperglycemia causes glucotoxicity and lipotoxicity, further impairing insulin secretion. Incretin effect is diminished. Hepatic glucose output is increased.',
    ['Often asymptomatic early', 'Gradual onset of polyuria, polydipsia', 'Acanthosis nigricans', 'Obesity (central adiposity)', 'Family history of T2DM', 'Metabolic syndrome features'],
    ['Fasting plasma glucose (>=126 mg/dL)', 'HbA1c (>=6.5%)', '2-hour OGTT (>=200 mg/dL)', 'Random glucose >=200 with symptoms', 'Lipid panel, renal function, hepatic panel', 'Urine albumin-to-creatinine ratio'],
    'Step 1: Lifestyle modification + metformin. Step 2: Add GLP-1 RA or SGLT2 inhibitor (especially with CVD or CKD). Step 3: Add DPP-4 inhibitor, TZD, or sulfonylurea. Step 4: Add basal insulin. Step 5: Intensify to basal-bolus. Target HbA1c <7% for most; individualize for elderly/comorbid patients.',
    ['Metformin (first-line)', 'Semaglutide/liraglutide (GLP-1 RA)', 'Empagliflozin/dapagliflozin (SGLT2i)', 'Sitagliptin (DPP-4i)', 'Pioglitazone (TZD)', 'Glipizide/glimepiride (sulfonylurea)', 'Insulin glargine (basal)', 'Insulin lispro (bolus)'],
    ['HbA1c every 3-6 months', 'Fasting glucose and self-monitoring', 'Annual eye, foot, and kidney screening', 'Lipid panel annually', 'Blood pressure at every visit'],
    ['Cardiovascular disease (2-4x risk)', 'Diabetic nephropathy', 'Retinopathy', 'Neuropathy', 'Non-alcoholic fatty liver disease', 'Increased infection risk'],
    'Type 2 diabetes develops when your body cannot use insulin properly and the pancreas cannot keep up. Lifestyle changes including diet, exercise, and weight loss are the foundation. Medications are added in steps as needed to reach blood sugar goals.',
    'Refer if HbA1c remains >9% despite dual therapy, insulin initiation needed, or suspected Type 1 or LADA.'
  ),

  endo(
    'dka', 'Diabetic Ketoacidosis', 'Cetoacidosis diabetica',
    'diabetes',
    'Life-threatening metabolic emergency with hyperglycemia, ketosis, and acidosis due to absolute or relative insulin deficiency.',
    'Severe insulin deficiency triggers unrestrained lipolysis, producing free fatty acids oxidized to ketone bodies (acetoacetate, beta-hydroxybutyrate) in the liver. Hyperglycemia causes osmotic diuresis leading to dehydration and electrolyte depletion. Counter-regulatory hormones (glucagon, cortisol, catecholamines) amplify hyperglycemia.',
    ['Nausea, vomiting, abdominal pain', 'Kussmaul breathing (deep, rapid)', 'Fruity breath odor (acetone)', 'Altered mental status', 'Severe dehydration', 'Tachycardia, hypotension'],
    ['Blood glucose (usually >250 mg/dL)', 'Arterial blood gas (pH <7.3, bicarb <18)', 'Serum ketones or beta-hydroxybutyrate', 'Basic metabolic panel (anion gap >12)', 'Serum osmolality', 'Urinalysis, CBC, blood cultures to identify trigger'],
    'Emergency: IV fluid resuscitation (0.9% NaCl initially), continuous IV insulin infusion, aggressive potassium replacement (ensure K >3.3 before insulin), frequent electrolyte monitoring. Transition to subcutaneous insulin when anion gap closes, patient is eating, and pH >7.3. Identify and treat precipitant.',
    ['Regular insulin IV drip', 'IV normal saline then half-normal saline', 'Potassium chloride/phosphate replacement', 'Dextrose 5% when glucose <200 mg/dL', 'Bicarbonate only if pH <6.9'],
    ['Blood glucose hourly', 'BMP every 2-4 hours', 'Anion gap trending', 'Urine output monitoring', 'Mental status checks', 'Venous blood gas for pH trending'],
    ['Cerebral edema (especially pediatric)', 'Hypokalemia (cardiac arrhythmias)', 'Hypoglycemia from insulin', 'Acute respiratory distress', 'Thromboembolism', 'Death if untreated'],
    'DKA is a medical emergency. It happens when there is not enough insulin and the body burns fat for fuel, producing dangerous acids. Seek emergency care if vomiting, breathing fast, or confused with high blood sugars.',
    'All DKA requires emergency/ICU management. Endocrinology consult for insulin regimen optimization on discharge.'
  ),

  endo(
    'hhs', 'Hyperosmolar Hyperglycemic State', 'Estado hiperosmolar hiperglucemico',
    'diabetes',
    'Severe hyperglycemia with profound dehydration and hyperosmolality without significant ketoacidosis, typically in older Type 2 DM patients.',
    'Relative insulin deficiency is sufficient to prevent ketogenesis but insufficient to control hyperglycemia. Glucose levels rise dramatically (often >600 mg/dL). Osmotic diuresis causes massive fluid losses (8-12 L deficit). Resultant hyperosmolality (>320 mOsm/kg) causes neurological dysfunction.',
    ['Profound dehydration', 'Altered consciousness progressing to coma', 'Glucose often >600 mg/dL', 'Gradual onset over days to weeks', 'Focal neurological deficits possible', 'No Kussmaul breathing (minimal acidosis)'],
    ['Serum glucose (often 600-1200 mg/dL)', 'Serum osmolality (>320 mOsm/kg)', 'BMP (mild or no anion gap acidosis)', 'pH >7.3, bicarbonate >18', 'CBC, urinalysis, chest X-ray for precipitant', 'Blood cultures if infection suspected'],
    'Aggressive IV fluid resuscitation is paramount (correct 50% deficit in first 12 hours). Isotonic saline initially, switch to half-normal when hemodynamically stable. Low-dose insulin infusion (lower rates than DKA). Careful electrolyte monitoring and replacement. Identify trigger (infection, MI, medication non-compliance).',
    ['IV normal saline (aggressive rehydration)', 'Low-dose regular insulin infusion', 'Potassium replacement', 'Dextrose when glucose approaches 300 mg/dL', 'DVT prophylaxis (high thrombosis risk)'],
    ['Glucose hourly', 'Electrolytes every 2-4 hours', 'Serum osmolality trending', 'Strict I/O monitoring', 'Neurological status', 'Cardiac telemetry'],
    ['Seizures', 'Cerebral edema (from rapid correction)', 'Thromboembolism (DVT/PE)', 'Rhabdomyolysis', 'Mortality rate 10-20%'],
    'HHS occurs when blood sugar rises extremely high causing severe dehydration and confusion. It develops slowly over days and is a medical emergency requiring hospital treatment with IV fluids and insulin.',
    'All HHS requires ICU-level care. Endocrinology consult for discharge insulin regimen and follow-up.'
  ),

  endo(
    'gestational-dm', 'Gestational Diabetes', 'Diabetes gestacional',
    'diabetes',
    'Glucose intolerance first recognized during pregnancy, driven by placental hormones that induce insulin resistance.',
    'Human placental lactogen, progesterone, cortisol, and prolactin create progressive insulin resistance in the second and third trimesters. Women with insufficient beta-cell reserve to compensate develop hyperglycemia. Genetic predisposition and pre-pregnancy obesity increase risk.',
    ['Usually asymptomatic (detected by screening)', 'Excessive fetal growth on ultrasound', 'Polyhydramnios', 'Risk factors: obesity, age >25, family hx, prior GDM, PCOS'],
    ['24-28 week screening (universal or risk-based)', '1-hour 50g glucose challenge test (>=130-140 mg/dL)', '3-hour 100g OGTT (Carpenter-Coustan criteria)', 'Early screening if high-risk', 'Fasting glucose at first prenatal visit'],
    'Medical nutrition therapy and exercise first. Self-monitoring of glucose (fasting <95, 1h post-meal <140, 2h <120 mg/dL). If diet fails after 1-2 weeks, insulin is preferred pharmacotherapy. Metformin/glyburide used if insulin refused. Postpartum: 6-12 week 75g OGTT to reclassify.',
    ['Insulin (preferred: NPH + lispro/aspart)', 'Metformin (second-line)', 'Glyburide (second-line, less preferred)', 'Medical nutrition therapy (first-line)'],
    ['SMBG 4x daily (fasting + post-meals)', 'Monthly HbA1c (target <6%)', 'Fetal growth ultrasounds', 'Non-stress tests in third trimester', 'Postpartum 75g OGTT at 6-12 weeks', 'Annual diabetes screening lifelong'],
    ['Macrosomia and birth trauma', 'Neonatal hypoglycemia', 'Preeclampsia', 'Cesarean delivery', 'Future Type 2 DM (50% risk in 5-10 years)', 'Neonatal jaundice and respiratory distress'],
    'Gestational diabetes means pregnancy hormones make it harder for insulin to work. Controlling blood sugar with diet, exercise, and sometimes medication protects both you and your baby. After delivery, you will need lifelong diabetes screening.',
    'Refer to MFM if glucose uncontrolled despite insulin, or to endocrinology for complex insulin management.'
  ),

  endo(
    'hypoglycemia-mgmt', 'Hypoglycemia Management', 'Manejo de hipoglucemia',
    'diabetes',
    'Blood glucose <70 mg/dL causing autonomic and neuroglycopenic symptoms, requiring prompt recognition and treatment.',
    'Hypoglycemia triggers a counter-regulatory hormone cascade: glucagon (primary), epinephrine, cortisol, and growth hormone. In diabetes, these responses may be blunted (hypoglycemia unawareness). Neuroglycopenic symptoms appear when brain glucose delivery is insufficient. In non-diabetic patients, causes include insulinoma, adrenal insufficiency, sepsis, and reactive hypoglycemia.',
    ['Autonomic: tremor, sweating, palpitations, anxiety, hunger', 'Neuroglycopenic: confusion, slurred speech, seizure, coma', 'Level 1: glucose 54-70 mg/dL', 'Level 2: glucose <54 mg/dL', 'Level 3: altered mental status requiring assistance', 'Hypoglycemia unawareness in recurrent episodes'],
    ['Point-of-care glucose', 'Whipple triad (symptoms + low glucose + resolution with treatment)', 'If non-diabetic: insulin, C-peptide, proinsulin, BHB during hypoglycemia', '72-hour supervised fast if insulinoma suspected', 'Cortisol level if adrenal insufficiency suspected', 'Medication and supplement review'],
    'Rule of 15: 15g fast-acting carbs, recheck in 15 minutes, repeat if still <70. For severe hypoglycemia: glucagon IM/IN/SC or IV dextrose. Address cause: adjust insulin/sulfonylurea doses, review meal timing, treat underlying etiology. For recurrent hypoglycemia unawareness, raise glucose targets for 2-3 weeks to restore awareness.',
    ['Glucose tablets (15g fast-acting carbs)', 'Glucagon emergency kit (IM/nasal)', 'IV dextrose 50% (25g bolus)', 'Diazoxide (for insulinoma)', 'Octreotide (refractory hypoglycemia)'],
    ['SMBG or CGM with low glucose alerts', 'Assess for hypoglycemia unawareness', 'Review of insulin/medication doses', 'Dietary pattern assessment', 'Frequency and severity logging'],
    ['Seizures', 'Loss of consciousness', 'Cardiac arrhythmias', 'Permanent neurological injury', 'Death if prolonged severe hypoglycemia', 'Motor vehicle accidents'],
    'Low blood sugar needs quick treatment: eat or drink 15 grams of fast-acting sugar (like juice or glucose tablets), then recheck in 15 minutes. Always carry glucose and a glucagon kit. Tell family and friends how to give glucagon if you pass out.',
    'Refer if recurrent severe hypoglycemia, hypoglycemia unawareness, or suspected non-diabetic hypoglycemia (insulinoma workup).'
  ),

  // ============================================================
  // THYROID (5)
  // ============================================================
  endo(
    'hypothyroidism', 'Hypothyroidism (Hashimoto\'s)', 'Hipotiroidismo (Hashimoto)',
    'thyroid',
    'Underactive thyroid most commonly from autoimmune thyroiditis (Hashimoto\'s), causing decreased T4/T3 production.',
    'Hashimoto\'s thyroiditis involves lymphocytic infiltration and gradual destruction of the thyroid gland. Anti-TPO and anti-thyroglobulin antibodies mediate the process. Reduced T4/T3 production leads to elevated TSH via negative feedback. Subclinical hypothyroidism (elevated TSH, normal free T4) may precede overt disease by years.',
    ['Fatigue, cold intolerance, weight gain', 'Constipation, dry skin, hair loss', 'Bradycardia, delayed relaxation of deep tendon reflexes', 'Depression, cognitive slowing', 'Menstrual irregularities (menorrhagia)', 'Myxedema in severe cases'],
    ['TSH (elevated)', 'Free T4 (low in overt disease)', 'Anti-TPO antibodies (positive in Hashimoto\'s)', 'Anti-thyroglobulin antibodies', 'Lipid panel (often elevated LDL)', 'CBC (may show macrocytic anemia)'],
    'Levothyroxine replacement is the standard of care. Start at full replacement dose in young, healthy patients (1.6 mcg/kg/day) or low dose (25-50 mcg/day) in elderly or cardiac patients. Take on empty stomach 30-60 min before breakfast. Goal: normalize TSH. Subclinical hypothyroidism: treat if TSH >10 or symptomatic with TSH >4.5.',
    ['Levothyroxine (T4, first-line)', 'Liothyronine (T3, controversial adjunct)', 'Desiccated thyroid extract (not preferred)'],
    ['TSH 6-8 weeks after dose change', 'Annual TSH once stable', 'Lipid panel', 'Clinical symptom assessment', 'Pregnancy: TSH each trimester (lower targets)'],
    ['Myxedema coma (severe, life-threatening)', 'Cardiovascular disease (dyslipidemia)', 'Infertility and pregnancy complications', 'Depression and cognitive impairment', 'Peripheral neuropathy'],
    'Your thyroid gland is underactive and does not make enough hormone. Taking a daily thyroid pill replaces what your body cannot make. Take it on an empty stomach each morning. Blood tests every few months ensure the right dose.',
    'Refer if difficulty achieving euthyroid state, pregnancy, suspected pituitary cause, or myxedema.'
  ),

  endo(
    'hyperthyroidism-graves', 'Hyperthyroidism (Graves\' Disease)', 'Hipertiroidismo (enfermedad de Graves)',
    'thyroid',
    'Autoimmune hyperthyroidism caused by TSH receptor-stimulating antibodies producing excess thyroid hormone.',
    'IgG antibodies (TSI/TRAb) bind and activate the TSH receptor, stimulating thyroid hormone synthesis and gland growth independent of TSH regulation. Genetic susceptibility (HLA-DR3) and environmental factors (stress, smoking, infections) contribute. The diffuse gland hyperplasia produces excess T4 and T3.',
    ['Weight loss despite increased appetite', 'Heat intolerance, sweating', 'Tremor, anxiety, irritability', 'Tachycardia, palpitations, atrial fibrillation', 'Exophthalmos (Graves\' ophthalmopathy)', 'Diffuse goiter with bruit', 'Pretibial myxedema (dermatopathy)'],
    ['TSH (suppressed, often <0.01)', 'Free T4 and free T3 (elevated)', 'TSI or TRAb (positive in Graves\')', 'Radioactive iodine uptake (elevated, diffuse)', 'Thyroid ultrasound with Doppler', 'CBC before starting antithyroid drugs'],
    'Three options: antithyroid drugs (methimazole preferred), radioactive iodine ablation, or thyroidectomy. Methimazole first-line for initial treatment (12-18 months trial). Beta-blockers for symptom control. RAI for relapse or definitive therapy. Surgery for large goiter, ophthalmopathy, or pregnancy planning. PTU only in first trimester or thyroid storm.',
    ['Methimazole (first-line antithyroid)', 'Propylthiouracil (first trimester/thyroid storm)', 'Propranolol or atenolol (symptom control)', 'Radioactive iodine I-131', 'Selenium (may help mild ophthalmopathy)'],
    ['Thyroid function tests every 4-6 weeks initially', 'CBC with differential (agranulocytosis risk)', 'Liver function tests', 'Eye exam for ophthalmopathy', 'TSH, free T4 after RAI or surgery'],
    ['Atrial fibrillation and heart failure', 'Thyroid storm', 'Osteoporosis', 'Graves\' ophthalmopathy (vision loss)', 'Agranulocytosis from antithyroid drugs', 'Thyroid storm'],
    'Graves\' disease causes your immune system to overstimulate the thyroid, making too much hormone. Treatment options include medication, radioactive iodine, or surgery. Eye symptoms should be reported promptly. Regular blood tests are essential.',
    'Refer to endocrinology for all new Graves\' disease. Urgent referral for thyroid storm or progressive ophthalmopathy.'
  ),

  endo(
    'thyroid-nodule', 'Thyroid Nodule Evaluation', 'Evaluacion de nodulo tiroideo',
    'thyroid',
    'Focal thyroid lesions found in up to 50% of adults by ultrasound; the key task is excluding malignancy (~5-15% of nodules).',
    'Thyroid nodules arise from focal hyperplasia, colloid accumulation, cyst formation, or neoplasia. Most are benign (colloid nodules, follicular adenomas). Malignant nodules (papillary, follicular, medullary, anaplastic carcinoma) have distinct ultrasound and cytologic features. Radiation exposure, family history, and certain genetic mutations increase cancer risk.',
    ['Usually asymptomatic (incidental finding)', 'Palpable neck mass', 'Dysphagia or voice changes if compressive', 'Rapid growth raises malignancy concern', 'Hard, fixed nodule suspicious', 'Cervical lymphadenopathy'],
    ['TSH level (low TSH: radionuclide scan)', 'Thyroid ultrasound with TI-RADS scoring', 'FNA biopsy per ATA size/features criteria', 'Bethesda cytology classification', 'Molecular testing for indeterminate FNA', 'Calcitonin if medullary cancer suspected'],
    'Risk-stratify by ultrasound features (TI-RADS). FNA for nodules >=1 cm with suspicious features or >=1.5-2 cm if low suspicion. Benign cytology: surveillance US. Malignant: surgery. Indeterminate: molecular testing or diagnostic lobectomy. Suppressed TSH: obtain radionuclide scan (hot nodules rarely malignant).',
    ['Levothyroxine (post-thyroidectomy replacement)', 'Molecular testing (Afirma, ThyroSeq)', 'No medications for benign observation'],
    ['Surveillance ultrasound per risk category', 'Repeat FNA if nodule grows >20%', 'TSH monitoring if on levothyroxine', 'Annual clinical exam'],
    ['Thyroid cancer (5-15%)', 'Compressive symptoms', 'Hyperthyroidism (toxic nodule)', 'Anxiety from surveillance'],
    'Most thyroid nodules are harmless. An ultrasound and possibly a needle biopsy help determine if further action is needed. Even if you need monitoring, most nodules never cause problems.',
    'Refer if suspicious US features, indeterminate/malignant FNA, rapidly growing nodule, or compressive symptoms.'
  ),

  endo(
    'thyroid-cancer', 'Thyroid Cancer Overview', 'Resumen de cancer de tiroides',
    'thyroid',
    'Malignancy of the thyroid gland; most common is papillary carcinoma with excellent prognosis when differentiated.',
    'Differentiated thyroid cancers (papillary 80%, follicular 10%) arise from follicular cells and retain iodine-avidity. Papillary cancer spreads via lymphatics; follicular via hematogenous route. Medullary thyroid cancer (5%) arises from parafollicular C cells, produces calcitonin, and may be hereditary (MEN2). Anaplastic (<2%) is undifferentiated and aggressive.',
    ['Thyroid nodule (often incidental)', 'Cervical lymphadenopathy', 'Hoarseness (recurrent laryngeal nerve invasion)', 'Dysphagia or dyspnea if advanced', 'Family history of thyroid cancer or MEN', 'Prior radiation exposure'],
    ['Thyroid ultrasound with FNA biopsy', 'Bethesda cytology classification', 'Molecular markers (BRAF, RAS, RET/PTC)', 'Pre-op CT/MRI for advanced disease', 'Calcitonin and CEA (medullary cancer)', 'Genetic testing for RET mutations (medullary)'],
    'Surgery is primary treatment: lobectomy for small, low-risk papillary cancers; total thyroidectomy for larger or higher-risk tumors. RAI ablation for intermediate/high-risk differentiated cancers post-thyroidectomy. TSH suppression with levothyroxine. Active surveillance acceptable for papillary microcarcinomas (<1 cm). External beam radiation for anaplastic or unresectable disease.',
    ['Levothyroxine (TSH suppression)', 'Radioactive iodine I-131 (ablation)', 'Lenvatinib/sorafenib (RAI-refractory)', 'Vandetanib/cabozantinib (medullary)', 'External beam radiation (anaplastic)'],
    ['Thyroglobulin + anti-Tg antibodies (DTC)', 'Neck ultrasound every 6-12 months', 'TSH monitoring (suppression targets)', 'Calcitonin/CEA (medullary)', 'Whole-body iodine scan post-RAI', 'Cross-sectional imaging if elevated markers'],
    ['Recurrence (local or distant)', 'Hypoparathyroidism post-surgery', 'Recurrent laryngeal nerve injury', 'RAI side effects (sialadenitis, dry mouth)', 'Second primary malignancy'],
    'Most thyroid cancers grow slowly and have excellent cure rates. Treatment usually involves surgery and sometimes radioactive iodine. You will need lifelong thyroid hormone replacement and regular monitoring with blood tests and ultrasounds.',
    'All thyroid cancer managed by endocrinology and surgical oncology/ENT. Refer for multidisciplinary tumor board.'
  ),

  endo(
    'thyroid-storm', 'Thyroid Storm', 'Tormenta tiroidea',
    'thyroid',
    'Life-threatening exacerbation of thyrotoxicosis with multi-organ decompensation and mortality of 10-30%.',
    'Acute surge of thyroid hormones causes catecholamine hypersensitivity, resulting in cardiovascular collapse, hyperthermia, and CNS dysfunction. Precipitated by infection, surgery, trauma, iodine load, or medication non-adherence in patients with uncontrolled hyperthyroidism. Burch-Wartofsky score >45 supports diagnosis.',
    ['High fever (>104 F/40 C)', 'Tachycardia, atrial fibrillation, heart failure', 'Agitation, delirium, psychosis, coma', 'Nausea, vomiting, diarrhea, jaundice', 'Diaphoresis', 'Burch-Wartofsky Point Scale for clinical diagnosis'],
    ['Clinical diagnosis (do not wait for labs)', 'TSH, free T4, free T3', 'CBC, BMP, LFTs, coagulation studies', 'Blood cultures', 'Chest X-ray, ECG', 'Burch-Wartofsky score calculation'],
    'ICU admission. Block new hormone synthesis (PTU preferred: also blocks T4-to-T3 conversion). Block hormone release (iodine 1 hour AFTER PTU). Block peripheral effects (propranolol IV or PO). Block T4-to-T3 conversion (hydrocortisone). Supportive care: cooling, IV fluids, treat precipitant. Cholestyramine to reduce enterohepatic recirculation.',
    ['PTU loading dose 500-1000mg then 250mg q4h', 'SSKI or Lugol\'s iodine (1 hour after PTU)', 'Propranolol IV or high-dose PO', 'Hydrocortisone 100mg IV q8h', 'Acetaminophen (avoid aspirin)', 'Cholestyramine (adjunct)'],
    ['Continuous cardiac telemetry', 'Hourly vitals and temperature', 'Thyroid function every 24-48 hours', 'Electrolytes and glucose frequently', 'Liver function (PTU hepatotoxicity)', 'ICU-level neurological monitoring'],
    ['Cardiovascular collapse and death', 'Multi-organ failure', 'DIC', 'Seizures', 'Hepatic failure (from storm or PTU)'],
    'Thyroid storm is a rare but life-threatening emergency where the thyroid goes dangerously overactive. It requires immediate hospital treatment. If you have Graves\' disease, never stop your medication without your doctor\'s guidance.',
    'All thyroid storm patients require ICU admission with endocrinology consultation.'
  ),

  // ============================================================
  // ADRENAL (4)
  // ============================================================
  endo(
    'cushings-syndrome', 'Cushing\'s Syndrome', 'Sindrome de Cushing',
    'adrenal',
    'Chronic glucocorticoid excess causing central obesity, hyperglycemia, hypertension, and multi-system effects.',
    'Excess cortisol may be exogenous (iatrogenic from corticosteroid use, most common) or endogenous. Endogenous causes: ACTH-secreting pituitary adenoma (Cushing\'s disease, 70%), ectopic ACTH (lung cancer, carcinoid), or adrenal tumors. Chronic cortisol excess causes proteolysis, lipolysis redistribution, insulin resistance, and immunosuppression.',
    ['Central obesity, moon facies, buffalo hump', 'Purple striae, easy bruising, thin skin', 'Proximal muscle weakness', 'Hypertension, hyperglycemia', 'Osteoporosis, vertebral fractures', 'Depression, cognitive changes', 'Hirsutism, menstrual irregularity'],
    ['24-hour urinary free cortisol (x2)', 'Late-night salivary cortisol (x2)', '1mg overnight dexamethasone suppression test', 'ACTH level (ACTH-dependent vs independent)', 'High-dose dexamethasone suppression (pituitary vs ectopic)', 'MRI pituitary or CT adrenals', 'Inferior petrosal sinus sampling if needed'],
    'Taper exogenous steroids if iatrogenic. Pituitary adenoma: transsphenoidal surgery (first-line). Adrenal tumor: adrenalectomy. Ectopic ACTH: treat underlying tumor. Medical therapy as bridge or if surgery not possible. Post-operative adrenal insufficiency expected (cortisol replacement needed until HPA axis recovers).',
    ['Ketoconazole (steroidogenesis inhibitor)', 'Metyrapone', 'Osilodrostat', 'Pasireotide (pituitary-directed)', 'Mifepristone (cortisol receptor blocker)', 'Hydrocortisone replacement post-op'],
    ['Cortisol levels post-treatment', 'Morning cortisol / ACTH stimulation test', 'MRI surveillance for pituitary recurrence', 'Metabolic parameters (glucose, BP, lipids)', 'DEXA scan for bone density', 'Mental health screening'],
    ['Cardiovascular disease', 'Thromboembolic events', 'Opportunistic infections', 'Osteoporotic fractures', 'Diabetes mellitus', 'Persistent adrenal insufficiency post-treatment'],
    'Cushing\'s syndrome means your body has too much cortisol. This can come from medications or a tumor. Treatment depends on the cause and may involve surgery or adjusting medications. Recovery takes time as your body readjusts.',
    'Refer all suspected Cushing\'s to endocrinology. Biochemical confirmation and localization require specialist expertise.'
  ),

  endo(
    'addisons-disease', 'Addison\'s Disease', 'Enfermedad de Addison',
    'adrenal',
    'Primary adrenal insufficiency with deficient cortisol and aldosterone production, most often autoimmune.',
    'Autoimmune adrenalitis (80% in developed countries) causes progressive destruction of the adrenal cortex. >90% of the gland must be destroyed before clinical insufficiency manifests. Loss of cortisol removes negative feedback, increasing ACTH (causing hyperpigmentation via MSH co-secretion). Aldosterone deficiency causes salt wasting, hyperkalemia, and hypotension.',
    ['Fatigue, weakness, weight loss', 'Hyperpigmentation (skin creases, buccal mucosa)', 'Hypotension, orthostatic dizziness', 'Salt craving', 'Nausea, abdominal pain', 'Hyperkalemia, hyponatremia', 'Adrenal crisis with acute illness'],
    ['Morning cortisol (low, <3 mcg/dL diagnostic)', 'ACTH stimulation test (cosyntropin test)', 'ACTH level (elevated in primary AI)', '21-hydroxylase antibodies', 'BMP (hyperkalemia, hyponatremia, hypoglycemia)', 'Renin and aldosterone', 'CT adrenals (calcification in TB, hemorrhage)'],
    'Lifelong glucocorticoid and mineralocorticoid replacement. Hydrocortisone 15-25 mg/day in divided doses (mimicking circadian rhythm). Fludrocortisone 0.05-0.2 mg/day for aldosterone replacement. Stress dosing essential: double or triple dose for illness. Injectable hydrocortisone for emergencies. MedicAlert bracelet mandatory.',
    ['Hydrocortisone (glucocorticoid replacement)', 'Fludrocortisone (mineralocorticoid)', 'Dexamethasone or prednisone (alternative GC)', 'Hydrocortisone IM injection (emergency kit)', 'DHEA supplementation (if symptomatic, especially women)'],
    ['Clinical assessment (energy, weight, BP)', 'Electrolytes (sodium, potassium)', 'Renin level (guide fludrocortisone dose)', 'ACTH not useful for monitoring', 'Annual screening for associated autoimmune diseases', 'Bone density if overreplaced'],
    ['Adrenal crisis (life-threatening)', 'Osteoporosis from overreplacement', 'Associated autoimmune conditions (thyroid, T1DM)', 'Cardiovascular risk', 'Reduced quality of life'],
    'Your adrenal glands do not make enough cortisol and aldosterone. You need daily hormone replacement tablets and must increase the dose when sick, injured, or having surgery. Always wear a medical alert bracelet and carry an emergency injection kit.',
    'Refer to endocrinology for diagnosis confirmation, dose optimization, and adrenal crisis prevention education.'
  ),

  endo(
    'pheochromocytoma', 'Pheochromocytoma', 'Feocromocitoma',
    'adrenal',
    'Catecholamine-secreting tumor of the adrenal medulla causing paroxysmal or sustained hypertension.',
    'Chromaffin cell tumor produces excess epinephrine, norepinephrine, and/or dopamine. ~40% have germline mutations (SDH, VHL, RET, NF1). The "rule of 10s" (10% bilateral, 10% extra-adrenal, 10% malignant) is now understood to underestimate genetic and malignant rates. Catecholamine surges cause episodic hypertension, tachycardia, and metabolic effects.',
    ['Paroxysmal hypertension (classic triad: headache, sweating, palpitations)', 'Sustained hypertension in some', 'Pallor during episodes', 'Anxiety, tremor', 'Orthostatic hypotension (volume depletion)', 'Weight loss, hyperglycemia'],
    ['24-hour urine fractionated metanephrines and catecholamines', 'Plasma free metanephrines (high sensitivity)', 'CT or MRI abdomen/pelvis', 'MIBG scan if CT/MRI equivocal', 'Genetic testing (SDH, VHL, RET, NF1)', 'Clonidine suppression test if borderline results'],
    'Alpha-blockade first (phenoxybenzamine 10-14 days pre-op), then add beta-blockade. Adequate volume expansion. Surgical resection (laparoscopic adrenalectomy preferred) is curative for benign tumors. Pre-operative preparation is critical to prevent hypertensive crisis. Lifelong follow-up for recurrence, especially if genetic.',
    ['Phenoxybenzamine (alpha-blocker, pre-op)', 'Doxazosin (alternative alpha-blocker)', 'Propranolol (beta-blocker, AFTER alpha)', 'Metyrosine (catecholamine synthesis inhibitor)', 'CVD regimen (cyclophosphamide/vincristine/dacarbazine) for malignant'],
    ['Annual plasma metanephrines for 10+ years', 'Blood pressure monitoring', 'Periodic imaging if genetic syndrome', 'Contralateral adrenal surveillance', 'Screen family members if genetic'],
    ['Hypertensive crisis (stroke, MI, aortic dissection)', 'Catecholamine cardiomyopathy', 'Malignant pheochromocytoma (metastatic)', 'Recurrence', 'Adrenal insufficiency post-bilateral adrenalectomy'],
    'A pheochromocytoma is a rare tumor that makes adrenaline-like hormones, causing high blood pressure episodes. Surgery removes the tumor after careful medical preparation. Regular follow-up is important as tumors can return, and family members may need testing.',
    'All suspected pheochromocytomas require endocrinology and surgical referral. Do NOT biopsy adrenal masses before ruling out pheo.'
  ),

  endo(
    'adrenal-incidentaloma', 'Adrenal Incidentaloma', 'Incidentaloma suprarrenal',
    'adrenal',
    'Adrenal mass discovered incidentally on imaging performed for other reasons; prevalence 4-5% on CT.',
    'Most incidentalomas are non-functioning cortical adenomas. However, a systematic evaluation must exclude: subclinical Cushing\'s (5-20%), pheochromocytoma (5%), primary aldosteronism (if hypertensive), adrenocortical carcinoma (4-5%), and metastatic disease. Size >4 cm, irregular borders, high Hounsfield units (>10 HU unenhanced), and heterogeneous enhancement raise malignancy concern.',
    ['Usually asymptomatic (incidental discovery)', 'Screen for cortisol excess symptoms', 'Screen for catecholamine excess symptoms', 'Evaluate for hypertension and hypokalemia (aldosteronism)', 'Assess imaging features for malignancy risk'],
    ['1mg dexamethasone suppression test (cortisol excess)', 'Plasma free metanephrines (pheochromocytoma)', 'Aldosterone/renin ratio if hypertensive', 'DHEA-S (adrenocortical carcinoma marker)', 'CT characteristics: size, HU, washout', 'Consider MRI chemical shift imaging'],
    'Non-functional adenoma <4 cm with benign imaging: observe with repeat imaging at 6-12 months and hormone testing annually for up to 5 years. Functional tumors: treat per specific diagnosis. Suspicious for carcinoma (>4 cm, >10 HU, irregular): surgical resection. Metastasis suspected: biopsy ONLY after pheo excluded.',
    ['No medication for benign non-functional lesions', 'Treat per specific diagnosis if functional', 'Pre-operative alpha/beta-blockade if pheo', 'Hydrocortisone replacement post-adrenalectomy if needed'],
    ['Repeat CT at 6-12 months (benign features)', 'Annual hormonal evaluation up to 5 years', 'Interval growth >1 cm warrants further evaluation', 'Long-term follow-up per guideline recommendations'],
    ['Missed pheochromocytoma (life-threatening if biopsied)', 'Undetected cortisol excess and metabolic sequelae', 'Adrenocortical carcinoma', 'Patient anxiety from surveillance', 'Unnecessary surgery for benign lesions'],
    'An adrenal incidentaloma is a lump found on your adrenal gland by accident during a scan done for another reason. Most are harmless, but blood tests and sometimes follow-up scans are needed to make sure it is not producing excess hormones or growing.',
    'Refer to endocrinology if functional (abnormal hormonal workup), >4 cm, growing, or suspicious imaging features.'
  ),

  // ============================================================
  // PITUITARY (3)
  // ============================================================
  endo(
    'prolactinoma', 'Prolactinoma', 'Prolactinoma',
    'pituitary',
    'Most common pituitary adenoma; secretes excess prolactin causing hypogonadism and galactorrhea.',
    'Lactotroph adenomas autonomously secrete prolactin. Microprolactinomas (<10 mm) are more common in women; macroprolactinomas (>=10 mm) in men. Elevated prolactin inhibits GnRH pulsatility, suppressing LH/FSH and gonadal function. Mass effect from macroadenomas can compress the optic chiasm and adjacent pituitary.',
    ['Women: amenorrhea, oligomenorrhea, galactorrhea, infertility', 'Men: erectile dysfunction, decreased libido, gynecomastia', 'Bitemporal hemianopia (macroadenoma)', 'Headache', 'Hypogonadism and osteoporosis', 'Delayed diagnosis common in men'],
    ['Serum prolactin (proportional to tumor size)', 'Rule out medications causing hyperprolactinemia', 'MRI pituitary with gadolinium', 'Visual field testing if macroadenoma', 'Pituitary hormone panel (assess other axes)', 'Pregnancy test in women'],
    'Dopamine agonists are first-line even for macroadenomas (>90% response). Cabergoline preferred over bromocriptine (more effective, fewer side effects). Tumor shrinkage occurs within weeks to months. Surgery (transsphenoidal) reserved for drug intolerance, resistance, or CSF leak. Pregnancy considerations: stop cabergoline once pregnant for microprolactinomas.',
    ['Cabergoline (preferred dopamine agonist)', 'Bromocriptine (alternative, safer in pregnancy)', 'No medications for asymptomatic microprolactinoma observation'],
    ['Prolactin level 1 month after treatment, then periodically', 'MRI at 1 year, then per response', 'Visual fields if macroadenoma', 'Bone density in hypogonadal patients', 'Trial off medication after 2+ years if normalized'],
    ['Visual field loss (macroadenoma)', 'Pituitary apoplexy', 'Osteoporosis from hypogonadism', 'Infertility', 'CSF leak (rare, large tumors)', 'Compulsive behaviors from dopamine agonists (rare)'],
    'A prolactinoma is a benign pituitary tumor that makes too much prolactin hormone. It can affect periods, fertility, and sex drive. Medication (a pill taken 1-2 times weekly) shrinks the tumor in most cases without needing surgery.',
    'Refer to endocrinology for prolactin >100 ng/mL, any macroadenoma, visual symptoms, or fertility planning.'
  ),

  endo(
    'acromegaly', 'Acromegaly', 'Acromegalia',
    'pituitary',
    'Chronic excess growth hormone (GH) from a pituitary adenoma, causing progressive soft tissue and skeletal overgrowth.',
    'GH-secreting pituitary somatotroph adenomas produce excess GH, which stimulates hepatic IGF-1 production. IGF-1 mediates most clinical effects. GH excess before epiphyseal closure causes gigantism. In adults, it causes acral and soft tissue enlargement. Diagnosis is often delayed 7-10 years due to gradual onset.',
    ['Enlarged hands, feet (increasing ring/shoe size)', 'Coarsened facial features, prognathism, frontal bossing', 'Excessive sweating, oily skin', 'Carpal tunnel syndrome', 'Sleep apnea', 'Arthralgia, joint degeneration', 'Headache, visual field defects', 'Hypertension, cardiomyopathy, diabetes'],
    ['IGF-1 level (elevated, age/sex-adjusted)', 'Oral glucose tolerance test with GH (fails to suppress <1 ng/mL)', 'MRI pituitary with gadolinium', 'Visual field testing', 'Echocardiogram', 'Colonoscopy (increased colon polyp risk)', 'Sleep study, glucose/HbA1c'],
    'Transsphenoidal surgery is first-line for most patients. Cure rates: 80-90% for microadenomas, 40-60% for macroadenomas. Medical therapy for persistent disease or surgical contraindications: somatostatin analogs, GH receptor antagonist (pegvisomant), or dopamine agonists. Radiation therapy as adjunct. Target: normal IGF-1 and random GH <1 ng/mL.',
    ['Octreotide LAR (somatostatin analog)', 'Lanreotide (somatostatin analog)', 'Pegvisomant (GH receptor antagonist)', 'Cabergoline (adjunct for modest GH elevation)', 'Pasireotide (second-line somatostatin analog)'],
    ['IGF-1 every 3-6 months', 'Random GH levels', 'MRI pituitary annually then per response', 'Echocardiogram every 1-2 years', 'Colonoscopy every 3-5 years', 'Sleep apnea reassessment', 'Diabetes/glucose monitoring'],
    ['Cardiovascular disease (leading cause of death)', 'Diabetes mellitus', 'Obstructive sleep apnea', 'Colon polyps and cancer risk', 'Vertebral fractures', 'Carpal tunnel syndrome', 'Hypopituitarism (post-treatment)'],
    'Acromegaly results from a pituitary tumor making too much growth hormone. It causes gradual enlargement of the hands, feet, and face. Surgery is usually the first treatment. Even after treatment, regular monitoring is important for heart health and cancer screening.',
    'All acromegaly should be managed by endocrinology. Refer for elevated IGF-1, clinical features, or pituitary mass.'
  ),

  endo(
    'diabetes-insipidus', 'Diabetes Insipidus', 'Diabetes insipida',
    'pituitary',
    'Disorder of water balance with dilute polyuria from deficient ADH (central) or renal resistance to ADH (nephrogenic).',
    'Central DI: insufficient ADH production/secretion from posterior pituitary (causes: surgery, trauma, tumors, autoimmune, idiopathic). Nephrogenic DI: kidneys cannot respond to ADH (causes: lithium, hypercalcemia, genetic mutations in V2 receptor or aquaporin-2). Without ADH action, collecting ducts remain impermeable to water, producing large volumes of dilute urine.',
    ['Polyuria (3-20 L/day of dilute urine)', 'Polydipsia (intense thirst)', 'Nocturia', 'Dehydration if fluid intake insufficient', 'Hypernatremia in severe cases', 'Fatigue from sleep disruption'],
    ['Serum sodium and osmolality (high-normal or elevated)', 'Urine osmolality (<300 mOsm/kg, often <100)', 'Urine specific gravity (<1.005)', 'Water deprivation test (gold standard)', 'Desmopressin challenge (distinguishes central vs nephrogenic)', 'MRI pituitary (absent posterior bright spot in central DI)', 'Copeptin measurement (emerging)'],
    'Central DI: desmopressin (DDAVP) replacement, intranasal or oral. Start low and titrate to control polyuria while avoiding hyponatremia. Nephrogenic DI: treat underlying cause (stop lithium if possible), thiazide diuretics paradoxically reduce urine output, amiloride for lithium-induced, low-sodium diet, ensure adequate water access.',
    ['Desmopressin intranasal/oral/SQ (central DI)', 'Hydrochlorothiazide (nephrogenic DI)', 'Amiloride (lithium-induced nephrogenic DI)', 'NSAIDs (adjunct, reduce prostaglandin-mediated diuresis)', 'Low-sodium, low-protein diet (nephrogenic)'],
    ['Serum sodium frequently during initiation', 'Urine volume and osmolality', 'Daily weights', 'Fluid intake and output', 'Sodium every 1-3 months once stable', 'MRI follow-up for central DI etiology'],
    ['Severe dehydration and hypernatremia', 'Hyponatremia from desmopressin overtreatment', 'Seizures (from rapid sodium changes)', 'Growth failure in children', 'Reduced quality of life', 'Bladder distension from chronic polyuria'],
    'Diabetes insipidus is not related to blood sugar. It means your body cannot properly control water balance, leading to excessive urination and thirst. Treatment depends on the type: a nasal spray or tablet for central DI, or specific medications for nephrogenic DI.',
    'Refer to endocrinology for diagnosis confirmation (water deprivation test), central DI management, and pituitary imaging evaluation.'
  ),

  // ============================================================
  // BONE / CALCIUM (3)
  // ============================================================
  endo(
    'osteoporosis', 'Osteoporosis Management', 'Manejo de osteoporosis',
    'bone-calcium',
    'Systemic skeletal disorder with low bone mass and microarchitectural deterioration increasing fracture risk.',
    'Bone remodeling imbalance: osteoclast-mediated resorption exceeds osteoblast-mediated formation. Estrogen deficiency (menopause) accelerates bone loss by increasing osteoclast activity and lifespan. Secondary causes: glucocorticoids, hyperparathyroidism, hyperthyroidism, malabsorption, medications. RANKL/OPG pathway is central to osteoclast regulation.',
    ['Often silent until fracture occurs', 'Vertebral compression fractures (height loss, kyphosis)', 'Hip fractures (high morbidity/mortality)', 'Wrist (Colles) fractures', 'Back pain from vertebral fractures', 'Loss of height >1.5 inches'],
    ['DEXA scan (T-score <=-2.5 = osteoporosis)', 'FRAX score for 10-year fracture risk', 'Serum calcium, phosphorus, vitamin D', 'PTH level', 'TSH, CBC, CMP', 'Bone turnover markers (CTX, P1NP)', '24-hour urine calcium', 'Vertebral fracture assessment (VFA)'],
    'Lifestyle: weight-bearing exercise, fall prevention, adequate calcium (1200 mg/day) and vitamin D (800-1000 IU/day). Pharmacotherapy if T-score <=-2.5, osteoporotic fracture, or FRAX >=20% major / >=3% hip fracture risk. Bisphosphonates first-line. Denosumab, teriparatide, romosozumab, or abaloparatide for high-risk patients.',
    ['Alendronate (bisphosphonate, weekly)', 'Zoledronic acid (IV bisphosphonate, annual)', 'Denosumab (RANKL inhibitor, q6 months)', 'Teriparatide (PTH analog, anabolic)', 'Romosozumab (sclerostin inhibitor)', 'Calcium and vitamin D supplementation'],
    ['DEXA every 1-2 years on therapy', 'Serum calcium, vitamin D levels', 'Bone turnover markers to assess response', 'Height measurement annually', 'Medication adherence assessment', 'Dental health (bisphosphonate jaw risk)'],
    ['Fragility fractures (hip, vertebral, wrist)', 'Chronic pain from vertebral fractures', 'Loss of mobility and independence', 'Atypical femoral fractures (rare, bisphosphonates)', 'Osteonecrosis of jaw (rare)', 'Rebound bone loss stopping denosumab'],
    'Osteoporosis weakens bones silently until a fracture occurs. Weight-bearing exercise, calcium, vitamin D, and medication can strengthen bones and prevent fractures. DEXA scans monitor your bone density over time.',
    'Refer if T-score <=-2.5 with fracture, failure to respond to first-line therapy, secondary osteoporosis, or premenopausal osteoporosis.'
  ),

  endo(
    'hyperparathyroidism', 'Primary Hyperparathyroidism', 'Hiperparatiroidismo primario',
    'bone-calcium',
    'Excess PTH secretion (usually from adenoma) causing hypercalcemia, bone loss, and kidney stones.',
    'Single parathyroid adenoma (85%) or multigland hyperplasia (15%) autonomously secretes PTH. Elevated PTH increases bone resorption (releasing calcium), renal calcium reabsorption, and 1,25-dihydroxyvitamin D synthesis (increasing gut absorption). Chronic excess leads to osteoporosis, nephrolithiasis, and hypercalcemia-related symptoms.',
    ['Often asymptomatic (discovered on routine labs)', '"Stones, bones, groans, and psychiatric overtones"', 'Kidney stones (calcium oxalate/phosphate)', 'Osteoporosis, especially cortical bone', 'Fatigue, weakness, depression', 'Constipation, nausea', 'Polyuria, polydipsia', 'Cognitive impairment'],
    ['Serum calcium (elevated)', 'Intact PTH (elevated or inappropriately normal)', 'Phosphorus (low-normal or low)', '25-hydroxyvitamin D', '24-hour urine calcium', 'Serum creatinine and eGFR', 'DEXA (including distal 1/3 radius)', 'Renal ultrasound or CT (nephrolithiasis)', 'Sestamibi/SPECT or 4D-CT for localization'],
    'Surgery (parathyroidectomy) is curative and indicated if: calcium >1 mg/dL above normal, T-score <=-2.5, vertebral fracture, eGFR <60, age <50, nephrolithiasis/nephrocalcinosis, or 24h urine calcium >400 mg. Observation with annual monitoring acceptable if asymptomatic without surgical criteria. Cinacalcet for non-surgical candidates.',
    ['Parathyroidectomy (curative, first-line when indicated)', 'Cinacalcet (calcimimetic, lowers calcium)', 'Bisphosphonates or denosumab (bone protection)', 'Vitamin D repletion (if deficient, with monitoring)', 'Adequate hydration'],
    ['Serum calcium and PTH post-operatively', 'Calcium and PTH every 6-12 months if observing', 'DEXA every 1-2 years', 'Renal function and 24h urine calcium annually', 'Renal imaging per clinical judgment'],
    ['Nephrolithiasis and nephrocalcinosis', 'Osteoporosis and pathological fractures', 'Hypercalcemic crisis', 'Pancreatitis', 'Cardiovascular disease', 'Hungry bone syndrome post-parathyroidectomy'],
    'Primary hyperparathyroidism means one or more of your parathyroid glands makes too much hormone, raising blood calcium. This can cause kidney stones and weak bones. Surgery to remove the overactive gland cures the condition in most cases.',
    'Refer to endocrinology for all confirmed primary hyperparathyroidism. Surgical referral if meets criteria for parathyroidectomy.'
  ),

  endo(
    'vitamin-d-deficiency', 'Vitamin D Deficiency', 'Deficiencia de vitamina D',
    'bone-calcium',
    'Insufficient 25-hydroxyvitamin D (<20 ng/mL) impairing calcium absorption, bone health, and potentially multiple organ systems.',
    'Vitamin D (cholecalciferol from skin/diet) is hydroxylated in the liver to 25(OH)D, then in the kidney to active 1,25(OH)2D. Deficiency reduces intestinal calcium absorption from ~30% to ~10-15%, triggering secondary hyperparathyroidism. Chronic deficiency causes osteomalacia (adults) or rickets (children) with impaired bone mineralization.',
    ['Often asymptomatic', 'Bone pain and muscle weakness', 'Frequent fractures', 'Fatigue', 'Depression', 'Proximal myopathy (difficulty rising from chair)', 'Rickets in children (bowed legs, widened wrists)'],
    ['25-hydroxyvitamin D level (gold standard)', 'Deficient <20 ng/mL, insufficient 20-29 ng/mL', 'Serum calcium, phosphorus, alkaline phosphatase', 'PTH level (elevated = secondary hyperparathyroidism)', 'DEXA if osteoporosis suspected', 'Consider celiac panel if malabsorption suspected'],
    'Repletion: Vitamin D3 50,000 IU weekly for 8-12 weeks, then maintenance 1,000-2,000 IU daily. Severe deficiency or malabsorption may need higher doses. Target 25(OH)D 30-50 ng/mL. Address underlying causes. Calcium supplementation if dietary intake insufficient. Malabsorption may require IM vitamin D or calcitriol.',
    ['Cholecalciferol D3 (preferred)', 'Ergocalciferol D2 (alternative)', 'Calcitriol (active form, for renal failure)', 'Calcium carbonate or citrate supplementation'],
    ['25(OH)D level after 3 months of repletion', 'Calcium and PTH to assess response', 'Annual 25(OH)D once replete', 'DEXA if osteoporosis present'],
    ['Osteomalacia and rickets', 'Secondary hyperparathyroidism', 'Osteoporosis and fractures', 'Muscle weakness and falls', 'Hypocalcemia (severe deficiency)'],
    'Vitamin D is essential for strong bones and overall health. Low levels are very common, especially in northern climates, darker skin, and with limited sun exposure. A supplement taken daily or weekly can restore levels and protect your bones.',
    'Refer if severe deficiency with osteomalacia, refractory to supplementation, or suspected malabsorption disorder.'
  ),

  // ============================================================
  // REPRODUCTIVE HORMONES (2)
  // ============================================================
  endo(
    'pcos-endocrine', 'PCOS (Endocrine Aspects)', 'SOP (aspectos endocrinos)',
    'reproductive-hormones',
    'Polycystic ovary syndrome: the most common endocrinopathy in reproductive-age women, characterized by hyperandrogenism, ovulatory dysfunction, and polycystic ovarian morphology.',
    'Neuroendocrine dysfunction increases GnRH pulse frequency, favoring LH over FSH secretion. Excess LH drives ovarian theca cell androgen production. Insulin resistance and hyperinsulinemia amplify androgen production and reduce SHBG. Arrested follicular development produces polycystic morphology. Adipose tissue inflammation contributes to metabolic dysfunction.',
    ['Irregular or absent menses (oligo/anovulation)', 'Hirsutism, acne, androgenic alopecia', 'Obesity (50-70% of patients)', 'Acanthosis nigricans', 'Infertility', 'Mood disorders (anxiety, depression)'],
    ['Rotterdam criteria (2 of 3): hyperandrogenism, oligo/anovulation, polycystic ovaries on US', 'Total and free testosterone', 'DHEA-S', 'TSH, prolactin (rule out other causes)', 'Fasting glucose, insulin, HbA1c', '2-hour OGTT (if BMI >25 or other risk)', 'Lipid panel', '17-hydroxyprogesterone (rule out CAH)', 'Transvaginal ultrasound'],
    'Lifestyle modification is foundational (5-10% weight loss restores ovulation in many). Combined OCP for menstrual regulation and antiandrogen effect. Spironolactone for hirsutism/acne. Metformin for insulin resistance. Letrozole (first-line) or clomiphene for ovulation induction when fertility desired. Screen for metabolic comorbidities.',
    ['Combined oral contraceptives (menstrual regulation)', 'Spironolactone (antiandrogen)', 'Metformin (insulin resistance)', 'Letrozole (ovulation induction, first-line)', 'Clomiphene citrate (ovulation induction)', 'Eflornithine cream (facial hirsutism)'],
    ['Menstrual cycle tracking', 'Weight and BMI', 'Fasting glucose or OGTT every 1-2 years', 'Lipid panel every 1-2 years', 'Blood pressure', 'Depression/anxiety screening', 'Endometrial surveillance if prolonged amenorrhea'],
    ['Type 2 diabetes (5-10x risk)', 'Metabolic syndrome', 'Endometrial hyperplasia/cancer', 'Cardiovascular disease', 'Obstructive sleep apnea', 'Non-alcoholic fatty liver disease', 'Infertility', 'Depression and anxiety'],
    'PCOS is a common hormone condition causing irregular periods, excess hair growth, and sometimes difficulty getting pregnant. Lifestyle changes like exercise and healthy eating are the most important first step. Medications can help with specific symptoms.',
    'Refer to endocrinology for complex PCOS with severe insulin resistance or metabolic features. Reproductive endocrinology for infertility.'
  ),

  endo(
    'male-hypogonadism', 'Male Hypogonadism', 'Hipogonadismo masculino',
    'reproductive-hormones',
    'Deficient testosterone production from testicular failure (primary) or hypothalamic-pituitary dysfunction (secondary).',
    'Primary hypogonadism: testicular damage (Klinefelter syndrome, orchitis, chemotherapy, radiation, trauma) with low testosterone and elevated LH/FSH. Secondary hypogonadism: inadequate gonadotropin secretion from pituitary/hypothalamic disease (adenoma, hemochromatosis, opioids, obesity, Kallmann syndrome). Functional hypogonadism from obesity, aging, or chronic illness is common.',
    ['Decreased libido, erectile dysfunction', 'Fatigue, low energy', 'Reduced muscle mass and strength', 'Increased body fat (especially visceral)', 'Depressed mood, poor concentration', 'Gynecomastia', 'Decreased bone density', 'Hot flashes (acute-onset hypogonadism)', 'Infertility, small testes'],
    ['Morning total testosterone (x2, low if <300 ng/dL)', 'Free testosterone (calculated or equilibrium dialysis)', 'LH, FSH (distinguish primary vs secondary)', 'Prolactin (rule out prolactinoma)', 'Iron studies (hemochromatosis)', 'Pituitary MRI if secondary', 'DEXA scan', 'Semen analysis if fertility desired', 'Karyotype if primary + small testes'],
    'Address reversible causes first (weight loss, discontinue opioids, treat sleep apnea). Testosterone replacement therapy (TRT) if confirmed hypogonadism with symptoms. Contraindicated if fertility desired (exogenous T suppresses spermatogenesis) - use clomiphene or hCG instead. Monitor hematocrit, PSA, lipids. TRT contraindicated in breast/prostate cancer, severe OSA, hematocrit >54%.',
    ['Testosterone cypionate/enanthate IM injections', 'Testosterone topical gel (1-2%)', 'Testosterone patches', 'Testosterone nasal gel', 'Clomiphene citrate (off-label, preserves fertility)', 'hCG (preserves spermatogenesis)', 'Anastrozole (if elevated estradiol)'],
    ['Testosterone level 3-6 months', 'Hematocrit every 6-12 months (polycythemia risk)', 'PSA at baseline, 3-6 months, then annually', 'Lipid panel annually', 'DEXA every 1-2 years', 'Liver function', 'Symptom assessment (validated questionnaire)'],
    ['Polycythemia (hematocrit >54%)', 'Cardiovascular risk (debated)', 'Sleep apnea worsening', 'Infertility from exogenous T', 'Acne, oily skin', 'Gynecomastia from aromatization', 'Hepatotoxicity (oral formulations)', 'Mood changes'],
    'Low testosterone can cause fatigue, low sex drive, and weak bones. Treatment with testosterone replacement can improve symptoms but requires regular blood tests to monitor for side effects. If you want children, specific alternative treatments can preserve fertility.',
    'Refer to endocrinology for secondary hypogonadism, age <40, pituitary mass, infertility, or complex management decisions.'
  ),

  // ============================================================
  // METABOLIC (2)
  // ============================================================
  endo(
    'metabolic-syndrome', 'Metabolic Syndrome', 'Sindrome metabolico',
    'metabolic',
    'Cluster of interconnected metabolic risk factors (abdominal obesity, dyslipidemia, hypertension, hyperglycemia) that doubles cardiovascular risk and increases T2DM risk 5-fold.',
    'Central adiposity drives chronic low-grade inflammation and insulin resistance. Visceral fat releases free fatty acids, TNF-alpha, IL-6, and adipokines that impair insulin signaling. Hepatic insulin resistance increases VLDL production and gluconeogenesis. The resulting hyperinsulinemia promotes sodium retention (hypertension) and enhanced androgen production.',
    ['Requires 3 of 5: waist circumference >40" (M) or >35" (F)', 'Triglycerides >=150 mg/dL', 'HDL <40 (M) or <50 (F) mg/dL', 'Blood pressure >=130/85 mmHg', 'Fasting glucose >=100 mg/dL', 'Affects ~35% of US adults'],
    ['Waist circumference measurement', 'Fasting lipid panel', 'Fasting glucose and HbA1c', 'Blood pressure', 'Liver enzymes (ALT for NAFLD screening)', 'Uric acid', 'hsCRP (inflammatory marker)'],
    'Lifestyle modification is the cornerstone: structured exercise (150+ min/week moderate intensity), Mediterranean or DASH diet, 7-10% weight loss. Treat each component individually if lifestyle insufficient. Metformin for prediabetes. Statins for dyslipidemia. Antihypertensives per guidelines. GLP-1 RAs and SGLT2i offer metabolic benefits beyond glucose.',
    ['Metformin (prediabetes)', 'Statins (dyslipidemia)', 'ACE inhibitors/ARBs (hypertension)', 'GLP-1 receptor agonists (obesity + glucose)', 'SGLT2 inhibitors (multi-metabolic benefit)', 'Orlistat or other weight management agents'],
    ['Weight, BMI, waist circumference at each visit', 'Blood pressure at each visit', 'Fasting glucose/HbA1c every 6-12 months', 'Lipid panel annually', 'Liver enzymes (NAFLD progression)', 'Cardiovascular risk assessment'],
    ['Type 2 diabetes (5x risk)', 'Cardiovascular disease (2x risk)', 'Non-alcoholic steatohepatitis (NASH)', 'Chronic kidney disease', 'Obstructive sleep apnea', 'Hyperuricemia and gout', 'Polycystic ovary syndrome overlap'],
    'Metabolic syndrome is a combination of belly fat, high blood pressure, high blood sugar, and abnormal cholesterol that significantly increases your risk of heart disease and diabetes. Losing weight through diet and exercise is the most powerful treatment.',
    'Refer to endocrinology if metabolic syndrome with pre-diabetes resistant to lifestyle, or complex multi-component management needed.'
  ),

  endo(
    'obesity-endocrine', 'Obesity Management (Endocrine Approach)', 'Manejo de obesidad (enfoque endocrino)',
    'metabolic',
    'Chronic disease of excess adiposity evaluated and managed with attention to endocrine contributors and complications.',
    'Obesity involves dysregulation of energy homeostasis controlled by leptin, ghrelin, GLP-1, PYY, insulin, and central appetite circuits. Adipose tissue is an active endocrine organ secreting adipokines. Endocrine causes to exclude: hypothyroidism, Cushing\'s syndrome, hypothalamic disorders, insulinoma, and medications. Genetic factors (MC4R, leptin pathway) account for a subset.',
    ['BMI >=30 kg/m2 (or >=27.5 in Asians)', 'Central adiposity', 'Weight-related complications assessment', 'Screening for endocrine causes', 'Edmonton Obesity Staging System for severity', 'Assessment of eating behaviors and psychosocial factors'],
    ['BMI calculation and waist circumference', 'TSH (hypothyroidism)', '1mg dexamethasone suppression test (if Cushingoid)', 'Fasting glucose, HbA1c, lipid panel', 'Liver enzymes (NAFLD)', 'Testosterone in males (obesity-related hypogonadism)', 'Sleep study if symptoms suggest OSA', 'Medication review for weight-promoting drugs'],
    'Comprehensive approach: behavioral counseling, structured dietary intervention (500-750 kcal/day deficit), exercise (150-300 min/week), anti-obesity medications if BMI >=30 or >=27 with comorbidity. Metabolic/bariatric surgery for BMI >=40 or >=35 with comorbidities. Address endocrine contributors. Avoid weight-promoting medications when possible.',
    ['Semaglutide 2.4mg weekly (GLP-1 RA)', 'Tirzepatide (GIP/GLP-1, dual incretin)', 'Liraglutide 3.0mg daily', 'Phentermine-topiramate ER', 'Naltrexone-bupropion', 'Orlistat (lipase inhibitor)', 'Bariatric surgery (Roux-en-Y, sleeve gastrectomy)'],
    ['Weight and BMI every visit', 'Metabolic parameters every 3-6 months', 'Nutritional deficiencies post-bariatric surgery', 'Mental health screening', 'Blood pressure, glucose, lipids', 'Medication adjustments as weight changes', 'DEXA for body composition (select cases)'],
    ['Type 2 diabetes', 'Cardiovascular disease', 'Non-alcoholic fatty liver (NAFLD/NASH)', 'Obstructive sleep apnea', 'Osteoarthritis', 'Depression and stigma', 'Certain cancers (breast, colon, endometrial)', 'GERD', 'Infertility'],
    'Obesity is a chronic disease, not a personal failure. Modern treatments include effective medications and surgery that work with your body\'s biology. An endocrine evaluation ensures no underlying hormone problems are contributing. Sustained lifestyle changes combined with medical treatment produce the best long-term outcomes.',
    'Refer to endocrinology for suspected endocrine cause, anti-obesity medication management, or pre-bariatric surgery evaluation.'
  ),
];

// Populate the record
for (const entry of entries) {
  ENDOCRINOLOGY_ENTRIES[entry.id] = entry;
}

// --- Lookup functions ---

export function getEndocrinologyEntry(id: string): EndocrinologyEntry | undefined {
  return ENDOCRINOLOGY_ENTRIES[id];
}

export function searchEndocrinology(query: string): EndocrinologyEntry[] {
  const q = query.toLowerCase();
  return Object.values(ENDOCRINOLOGY_ENTRIES).filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.nameEs.toLowerCase().includes(q) ||
    e.summary.toLowerCase().includes(q) ||
    e.subcategory.toLowerCase().includes(q) ||
    e.medications.some(m => m.toLowerCase().includes(q)) ||
    e.clinicalFeatures.some(f => f.toLowerCase().includes(q))
  );
}

export function getEndoBySubcategory(subcategory: EndocrinologySubcategory): EndocrinologyEntry[] {
  return Object.values(ENDOCRINOLOGY_ENTRIES).filter(e => e.subcategory === subcategory);
}

export function getEndocrinologyCount(): number {
  return Object.keys(ENDOCRINOLOGY_ENTRIES).length;
}
