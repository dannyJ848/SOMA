/**
 * Lab Interpretation Database
 *
 * Comprehensive database of ~35 common laboratory tests with reference ranges,
 * clinical significance, causes of abnormal values, critical values, and
 * patient-friendly explanations. Bilingual (English/Spanish) naming.
 *
 * Used by SOMA for quick lab lookup, educational content, and patient communication.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type LabCategory =
  | 'hematology'
  | 'chemistry'
  | 'hepatic'
  | 'renal'
  | 'endocrine'
  | 'cardiac'
  | 'coagulation'
  | 'urinalysis'
  | 'inflammatory'
  | 'tumor-marker';

export interface LabInterpretationEntry {
  id: string;
  name: string;
  nameEs: string;
  category: LabCategory;
  normalRange: string;
  units: string;
  specimen: string;
  highCauses: string[];
  lowCauses: string[];
  clinicalSignificance: string;
  criticalValues: string;
  patientExplanation: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function lab(
  id: string,
  name: string,
  nameEs: string,
  cat: LabCategory,
  range: string,
  units: string,
  specimen: string,
  high: string[],
  low: string[],
  sig: string,
  crit: string,
  explain: string,
): LabInterpretationEntry {
  return {
    id,
    name,
    nameEs,
    category: cat,
    normalRange: range,
    units,
    specimen,
    highCauses: high,
    lowCauses: low,
    clinicalSignificance: sig,
    criticalValues: crit,
    patientExplanation: explain,
  };
}

// ---------------------------------------------------------------------------
// Database entries
// ---------------------------------------------------------------------------

const entries: LabInterpretationEntry[] = [
  // ── Hematology ──────────────────────────────────────────────────────────
  lab(
    'wbc',
    'White Blood Cell Count',
    'Conteo de Glóbulos Blancos',
    'hematology',
    '4.5–11.0',
    'x10^3/uL',
    'Whole blood (EDTA)',
    ['Infection', 'Leukemia', 'Inflammatory disorders', 'Corticosteroid use', 'Stress response'],
    ['Bone marrow failure', 'Aplastic anemia', 'Chemotherapy', 'Severe infections (sepsis)', 'Autoimmune neutropenia'],
    'Primary marker of immune function and infection. Differential count identifies which WBC subtype is affected, guiding diagnosis toward bacterial, viral, allergic, or malignant processes.',
    'Critical low: <2.0 x10^3/uL; Critical high: >30.0 x10^3/uL',
    'White blood cells are your body\'s defense soldiers. A high count usually means your body is fighting an infection or inflammation. A low count means you may be more vulnerable to infections.',
  ),
  lab(
    'rbc',
    'Red Blood Cell Count',
    'Conteo de Glóbulos Rojos',
    'hematology',
    'M: 4.7–6.1; F: 4.2–5.4',
    'x10^6/uL',
    'Whole blood (EDTA)',
    ['Polycythemia vera', 'Dehydration', 'Chronic hypoxia (COPD, high altitude)', 'Smoking'],
    ['Iron deficiency anemia', 'Chronic blood loss', 'Hemolysis', 'Bone marrow failure', 'Chronic kidney disease'],
    'Measures oxygen-carrying capacity. Combined with hemoglobin and hematocrit to classify anemias and polycythemias. MCV further sub-classifies etiology.',
    'Critical low: <2.0 x10^6/uL; Critical high: >7.0 x10^6/uL',
    'Red blood cells carry oxygen throughout your body. Too few can make you feel tired and short of breath (anemia). Too many can thicken your blood and raise clot risk.',
  ),
  lab(
    'hemoglobin',
    'Hemoglobin',
    'Hemoglobina',
    'hematology',
    'M: 13.5–17.5; F: 12.0–16.0',
    'g/dL',
    'Whole blood (EDTA)',
    ['Polycythemia vera', 'Dehydration', 'COPD', 'High altitude living'],
    ['Iron deficiency', 'B12/folate deficiency', 'Chronic disease', 'Acute hemorrhage', 'Thalassemia', 'Sickle cell disease'],
    'Best single indicator of blood\'s oxygen-carrying capacity. Essential for anemia workup and transfusion decisions. Trends over time more informative than a single value.',
    'Critical low: <7.0 g/dL; Critical high: >20.0 g/dL',
    'Hemoglobin is the protein inside red blood cells that carries oxygen. Low levels mean anemia, which causes fatigue, dizziness, and pale skin. Very low levels may require a blood transfusion.',
  ),
  lab(
    'hematocrit',
    'Hematocrit',
    'Hematocrito',
    'hematology',
    'M: 40–54; F: 36–48',
    '%',
    'Whole blood (EDTA)',
    ['Polycythemia', 'Dehydration', 'Severe burns', 'Chronic lung disease'],
    ['Anemia (all types)', 'Overhydration', 'Hemorrhage', 'Bone marrow disorders'],
    'Represents the percentage of blood volume occupied by red blood cells. Affected by both red cell mass and plasma volume. Used alongside hemoglobin in anemia classification.',
    'Critical low: <20%; Critical high: >60%',
    'Hematocrit tells us what proportion of your blood is made up of red blood cells. A low percentage often means anemia, while a high percentage can indicate dehydration or a blood disorder.',
  ),
  lab(
    'platelets',
    'Platelet Count',
    'Conteo de Plaquetas',
    'hematology',
    '150–400',
    'x10^3/uL',
    'Whole blood (EDTA)',
    ['Reactive thrombocytosis (infection, inflammation)', 'Iron deficiency', 'Myeloproliferative disorders', 'Post-splenectomy'],
    ['ITP', 'DIC', 'TTP/HUS', 'Bone marrow failure', 'Chemotherapy', 'Liver cirrhosis', 'Hypersplenism'],
    'Essential for hemostasis. Low counts increase bleeding risk; elevated counts may indicate reactive process or myeloproliferative disorder. Always check smear if automated count abnormal.',
    'Critical low: <50 x10^3/uL; Critical high: >1000 x10^3/uL',
    'Platelets are tiny cell fragments that help your blood clot. Low platelets mean you may bruise or bleed easily. Very high platelets can increase clotting risk.',
  ),
  lab(
    'mcv',
    'Mean Corpuscular Volume',
    'Volumen Corpuscular Medio',
    'hematology',
    '80–100',
    'fL',
    'Whole blood (EDTA)',
    ['B12 deficiency', 'Folate deficiency', 'Liver disease', 'Hypothyroidism', 'Myelodysplasia', 'Alcoholism'],
    ['Iron deficiency', 'Thalassemia', 'Chronic disease', 'Sideroblastic anemia', 'Lead poisoning'],
    'Key to classifying anemia: microcytic (<80 fL), normocytic (80–100 fL), or macrocytic (>100 fL). Directs the differential diagnosis and further workup.',
    'No standard critical values; interpret in clinical context',
    'MCV measures the average size of your red blood cells. Small cells often point to iron deficiency; large cells may indicate a vitamin B12 or folate deficiency.',
  ),

  // ── Chemistry ───────────────────────────────────────────────────────────
  lab(
    'glucose',
    'Glucose (Fasting)',
    'Glucosa (Ayuno)',
    'chemistry',
    '70–100',
    'mg/dL',
    'Serum or plasma (gray top)',
    ['Diabetes mellitus', 'Cushing syndrome', 'Pancreatitis', 'Stress response', 'Corticosteroid use'],
    ['Insulin overdose', 'Insulinoma', 'Adrenal insufficiency', 'Liver failure', 'Sepsis', 'Malnutrition'],
    'Fundamental metabolic marker. Fasting glucose >=126 mg/dL on two occasions diagnoses diabetes. Values 100–125 indicate prediabetes. Critical hypoglycemia requires immediate treatment.',
    'Critical low: <40 mg/dL; Critical high: >500 mg/dL',
    'Blood sugar is your body\'s main energy source. High fasting levels may signal diabetes. Very low levels (hypoglycemia) can cause shakiness, confusion, and even loss of consciousness.',
  ),
  lab(
    'sodium',
    'Sodium',
    'Sodio',
    'chemistry',
    '136–145',
    'mEq/L',
    'Serum (red or SST top)',
    ['Dehydration', 'Diabetes insipidus', 'Cushing syndrome', 'Excessive salt intake'],
    ['SIADH', 'Heart failure', 'Cirrhosis', 'Adrenal insufficiency', 'Diuretic use', 'Polydipsia'],
    'Major extracellular cation governing fluid balance and neurological function. Rapid correction of dysnatremias can cause osmotic demyelination or cerebral edema.',
    'Critical low: <120 mEq/L; Critical high: >160 mEq/L',
    'Sodium helps control fluid balance and nerve function. Low sodium can cause confusion and seizures; high sodium often results from dehydration.',
  ),
  lab(
    'potassium',
    'Potassium',
    'Potasio',
    'chemistry',
    '3.5–5.0',
    'mEq/L',
    'Serum (red or SST top)',
    ['Kidney failure', 'Acidosis', 'ACE inhibitors/ARBs', 'Rhabdomyolysis', 'Tissue destruction', 'Hemolyzed specimen (spurious)'],
    ['Diuretics', 'Vomiting/diarrhea', 'Alkalosis', 'Insulin administration', 'Hypomagnesemia'],
    'Critical for cardiac conduction and muscle function. Both hypo- and hyperkalemia cause life-threatening arrhythmias. Always correlate with ECG findings.',
    'Critical low: <2.5 mEq/L; Critical high: >6.5 mEq/L',
    'Potassium keeps your heart rhythm steady and muscles working properly. Levels that are too high or too low can cause dangerous heart rhythm problems.',
  ),
  lab(
    'calcium',
    'Calcium (Total)',
    'Calcio (Total)',
    'chemistry',
    '8.5–10.5',
    'mg/dL',
    'Serum (red or SST top)',
    ['Primary hyperparathyroidism', 'Malignancy', 'Vitamin D excess', 'Sarcoidosis', 'Thiazide diuretics'],
    ['Hypoparathyroidism', 'Vitamin D deficiency', 'Chronic kidney disease', 'Pancreatitis', 'Hypomagnesemia'],
    'Essential for bone metabolism, muscle contraction, and coagulation. Always correct for albumin level. Ionized calcium is more accurate in critically ill patients.',
    'Critical low: <6.5 mg/dL; Critical high: >13.0 mg/dL',
    'Calcium is vital for bones, muscles, and nerves. High calcium can cause kidney stones, fatigue, and confusion. Low calcium may lead to muscle cramps and tingling.',
  ),
  lab(
    'magnesium',
    'Magnesium',
    'Magnesio',
    'chemistry',
    '1.7–2.2',
    'mg/dL',
    'Serum (red or SST top)',
    ['Renal failure', 'Excessive supplementation', 'Adrenal insufficiency', 'Hypothyroidism'],
    ['Alcoholism', 'Malabsorption', 'Diuretics', 'Proton pump inhibitors', 'Diarrhea'],
    'Cofactor in >300 enzymatic reactions. Hypomagnesemia often coexists with hypokalemia and hypocalcemia and must be corrected first for those to respond to treatment.',
    'Critical low: <1.0 mg/dL; Critical high: >4.7 mg/dL',
    'Magnesium supports hundreds of chemical reactions in your body, including nerve and muscle function. Low levels can cause muscle cramps, tremors, and heart rhythm issues.',
  ),

  // ── Hepatic ─────────────────────────────────────────────────────────────
  lab(
    'alt',
    'Alanine Aminotransferase (ALT)',
    'Alanina Aminotransferasa (ALT)',
    'hepatic',
    '7–56',
    'U/L',
    'Serum (red or SST top)',
    ['Hepatitis (viral, alcoholic, autoimmune)', 'Drug-induced liver injury', 'NAFLD/NASH', 'Ischemic hepatitis', 'Celiac disease'],
    ['N/A (low values not clinically significant)', 'Vitamin B6 deficiency (rare cause of low ALT)'],
    'More liver-specific than AST. ALT >1000 U/L suggests acute viral hepatitis, ischemic injury, or toxin exposure. ALT/AST ratio helps differentiate etiologies.',
    'No universal critical value; >1000 U/L warrants urgent evaluation',
    'ALT is an enzyme mainly found in the liver. When liver cells are damaged, ALT leaks into the blood. A high ALT signals liver inflammation or injury.',
  ),
  lab(
    'ast',
    'Aspartate Aminotransferase (AST)',
    'Aspartato Aminotransferasa (AST)',
    'hepatic',
    '10–40',
    'U/L',
    'Serum (red or SST top)',
    ['Liver disease', 'Myocardial infarction', 'Muscle injury/rhabdomyolysis', 'Hemolysis', 'Alcoholic hepatitis (AST:ALT >2:1)'],
    ['N/A (low values not clinically significant)', 'Uremia', 'Vitamin B6 deficiency'],
    'Present in liver, heart, muscle, and red blood cells. AST:ALT ratio >2:1 suggests alcoholic liver disease. Elevated AST with normal ALT may indicate cardiac or muscle origin.',
    'No universal critical value; >1000 U/L warrants urgent evaluation',
    'AST is an enzyme found in the liver, heart, and muscles. High levels can mean liver damage, but unlike ALT, they can also come from heart or muscle injury.',
  ),
  lab(
    'alkaline-phosphatase',
    'Alkaline Phosphatase (ALP)',
    'Fosfatasa Alcalina (FA)',
    'hepatic',
    '44–147',
    'U/L',
    'Serum (red or SST top)',
    ['Biliary obstruction', 'Cholestasis', 'Bone disease (Paget, metastases)', 'Pregnancy (third trimester)', 'Growing children'],
    ['Hypothyroidism', 'Zinc deficiency', 'Pernicious anemia', 'Malnutrition'],
    'Elevated in cholestatic liver disease and bone disorders. GGT co-elevation confirms hepatic origin. Isoenzyme fractionation distinguishes liver from bone source.',
    'No standard critical value; markedly elevated values require imaging',
    'ALP is an enzyme found in the liver and bones. High levels may mean a bile duct blockage or a bone disorder. Your doctor may order additional tests to find the source.',
  ),
  lab(
    'total-bilirubin',
    'Total Bilirubin',
    'Bilirrubina Total',
    'hepatic',
    '0.1–1.2',
    'mg/dL',
    'Serum (red or SST top)',
    ['Liver disease (hepatitis, cirrhosis)', 'Biliary obstruction', 'Hemolytic anemia', 'Gilbert syndrome', 'Neonatal jaundice'],
    ['N/A (low values not clinically significant)'],
    'Breakdown product of hemoglobin. Direct (conjugated) fraction elevated in obstructive/hepatocellular disease; indirect (unconjugated) elevated in hemolysis and Gilbert syndrome.',
    'Neonatal critical: >15 mg/dL; Adult: >12 mg/dL suggests severe liver dysfunction',
    'Bilirubin comes from the natural breakdown of red blood cells. High levels cause jaundice (yellowing of skin and eyes) and may indicate liver problems or excessive red cell destruction.',
  ),
  lab(
    'albumin',
    'Albumin',
    'Albúmina',
    'hepatic',
    '3.5–5.5',
    'g/dL',
    'Serum (red or SST top)',
    ['Dehydration (relative increase)'],
    ['Liver cirrhosis', 'Nephrotic syndrome', 'Malnutrition', 'Burns', 'Chronic inflammation', 'Protein-losing enteropathy'],
    'Major plasma protein synthesized by the liver. Reflects chronic liver synthetic function (half-life ~20 days). Also used to correct total calcium levels and assess nutritional status.',
    'Critical low: <1.5 g/dL (associated with poor prognosis)',
    'Albumin is a protein made by your liver. Low levels can indicate chronic liver disease, kidney problems losing protein, or poor nutrition. It also helps your doctor interpret other lab values.',
  ),

  // ── Renal ───────────────────────────────────────────────────────────────
  lab(
    'creatinine',
    'Creatinine',
    'Creatinina',
    'renal',
    'M: 0.7–1.3; F: 0.6–1.1',
    'mg/dL',
    'Serum (red or SST top)',
    ['Acute kidney injury', 'Chronic kidney disease', 'Rhabdomyolysis', 'Dehydration', 'High muscle mass', 'Certain medications (TMP-SMX, cimetidine)'],
    ['Low muscle mass', 'Malnutrition', 'Advanced liver disease', 'Pregnancy'],
    'Byproduct of muscle metabolism filtered by kidneys. Used to estimate GFR. Rising creatinine indicates declining kidney function. Baseline influenced by age, sex, and muscle mass.',
    'Critical high: >10.0 mg/dL (may require dialysis)',
    'Creatinine is a waste product from muscles filtered by your kidneys. High levels mean your kidneys may not be filtering well. Your doctor uses it to estimate how well your kidneys work.',
  ),
  lab(
    'bun',
    'Blood Urea Nitrogen (BUN)',
    'Nitrógeno Ureico en Sangre (BUN)',
    'renal',
    '7–20',
    'mg/dL',
    'Serum (red or SST top)',
    ['Dehydration', 'GI bleeding', 'High protein diet', 'Kidney disease', 'Heart failure', 'Catabolic states'],
    ['Liver failure', 'Malnutrition', 'Overhydration', 'SIADH', 'Pregnancy'],
    'Urea is a protein metabolism end-product. BUN/Creatinine ratio helps differentiate prerenal (>20:1) from intrinsic renal causes. Less specific for kidney function than creatinine alone.',
    'Critical high: >100 mg/dL',
    'BUN measures a waste product that your kidneys filter out. High levels can mean kidney problems, dehydration, or GI bleeding. The BUN-to-creatinine ratio helps your doctor pinpoint the cause.',
  ),
  lab(
    'egfr',
    'Estimated GFR',
    'Tasa de Filtración Glomerular Estimada',
    'renal',
    '>60',
    'mL/min/1.73m2',
    'Calculated from serum creatinine',
    ['N/A (higher is better)'],
    ['Chronic kidney disease', 'Acute kidney injury', 'Age-related decline', 'Diabetes', 'Hypertension', 'Polycystic kidney disease'],
    'Gold standard estimate of kidney function. CKD staging: Stage 1 (>=90), Stage 2 (60–89), Stage 3a (45–59), Stage 3b (30–44), Stage 4 (15–29), Stage 5 (<15, dialysis territory).',
    'Critical low: <15 mL/min/1.73m2 (Stage 5 CKD, dialysis consideration)',
    'eGFR estimates how well your kidneys filter blood. A normal value is above 60. Lower numbers mean your kidneys are not working as well, and very low values may mean you need dialysis.',
  ),

  // ── Endocrine ───────────────────────────────────────────────────────────
  lab(
    'tsh',
    'Thyroid-Stimulating Hormone (TSH)',
    'Hormona Estimulante de la Tiroides (TSH)',
    'endocrine',
    '0.4–4.0',
    'mIU/L',
    'Serum (red or SST top)',
    ['Primary hypothyroidism', 'TSH-secreting pituitary adenoma (rare)', 'Recovery from non-thyroidal illness', 'Lithium use'],
    ['Hyperthyroidism (Graves disease)', 'Secondary hypothyroidism (pituitary)', 'Excessive thyroid hormone replacement', 'Corticosteroid use'],
    'First-line screening test for thyroid disorders. Inverse log-linear relationship with free T4: small changes in T4 cause large TSH swings. Interpret with free T4 for complete picture.',
    'Critical high: >40 mIU/L (myxedema concern); Critical low: <0.01 mIU/L (thyrotoxicosis)',
    'TSH tells your thyroid gland how much hormone to make. A high TSH means your thyroid is underactive (hypothyroidism); a low TSH means it may be overactive (hyperthyroidism).',
  ),
  lab(
    'free-t4',
    'Free Thyroxine (Free T4)',
    'Tiroxina Libre (T4 Libre)',
    'endocrine',
    '0.8–1.8',
    'ng/dL',
    'Serum (red or SST top)',
    ['Hyperthyroidism (Graves, toxic nodule)', 'Excessive levothyroxine dose', 'Acute thyroiditis'],
    ['Hypothyroidism (primary or central)', 'Severe illness (euthyroid sick)', 'Pituitary failure'],
    'Active, unbound thyroid hormone. Free T4 is preferred over total T4 because it is unaffected by binding protein changes (pregnancy, estrogen, liver disease).',
    'Critical high: >5.0 ng/dL (thyroid storm risk); Critical low: <0.4 ng/dL',
    'Free T4 measures the active thyroid hormone available to your body. High levels cause weight loss, rapid heartbeat, and anxiety. Low levels cause fatigue, weight gain, and cold sensitivity.',
  ),
  lab(
    'hba1c',
    'Hemoglobin A1c',
    'Hemoglobina Glicosilada (HbA1c)',
    'endocrine',
    '<5.7 (normal); 5.7–6.4 (prediabetes); >=6.5 (diabetes)',
    '%',
    'Whole blood (EDTA)',
    ['Uncontrolled diabetes', 'Iron deficiency (falsely elevated)', 'Splenectomy'],
    ['Hemolytic anemia', 'Recent transfusion', 'Chronic kidney disease (EPO therapy)', 'Sickle cell disease (variant Hb)'],
    'Reflects average blood glucose over 2–3 months. Superior to fasting glucose for long-term glycemic assessment. Target <7% for most diabetics; individualized for elderly or complicated patients.',
    'No standard critical value; >=10% indicates very poor glycemic control',
    'HbA1c shows your average blood sugar over the past 2–3 months. It is the main test for monitoring diabetes control. A lower number means better blood sugar management.',
  ),
  lab(
    'cortisol-am',
    'Cortisol (Morning)',
    'Cortisol (Matutino)',
    'endocrine',
    '6–23 (AM)',
    'mcg/dL',
    'Serum (red or SST top)',
    ['Cushing syndrome', 'Stress', 'Exogenous corticosteroids', 'Ectopic ACTH', 'Adrenal adenoma'],
    ['Adrenal insufficiency (Addison disease)', 'Pituitary failure', 'Abrupt steroid withdrawal'],
    'Primary stress hormone with diurnal variation (peaks 6–8 AM). Morning cortisol <3 mcg/dL strongly suggests adrenal insufficiency; >18 mcg/dL makes it unlikely. Confirmatory testing often needed.',
    'Critical low: <3 mcg/dL (adrenal crisis risk with illness/stress)',
    'Cortisol is a stress hormone with levels highest in the morning. Very low levels can mean your adrenal glands are not working, causing fatigue, low blood pressure, and salt cravings.',
  ),

  // ── Cardiac ─────────────────────────────────────────────────────────────
  lab(
    'troponin-i',
    'Troponin I (High-Sensitivity)',
    'Troponina I (Alta Sensibilidad)',
    'cardiac',
    '<0.04 (conventional); <14 ng/L (hs-cTnI, sex-specific cutoffs vary)',
    'ng/mL or ng/L',
    'Serum (red or SST top)',
    ['Acute myocardial infarction', 'Myocarditis', 'Pulmonary embolism', 'Heart failure', 'Sepsis', 'Renal failure', 'Takotsubo cardiomyopathy'],
    ['N/A (low/undetectable is normal)'],
    'Highly specific and sensitive for myocardial injury. Serial measurements (0 and 3 hours) with delta changes are key to diagnosing MI. Rise-and-fall pattern distinguishes acute from chronic elevation.',
    'Any elevation above 99th percentile URL is abnormal and requires clinical correlation',
    'Troponin is a protein released when heart muscle is damaged. Even a small rise can indicate a heart attack. Serial measurements help your doctors determine if damage is ongoing.',
  ),
  lab(
    'bnp',
    'B-type Natriuretic Peptide (BNP)',
    'Péptido Natriurético Cerebral (BNP)',
    'cardiac',
    '<100',
    'pg/mL',
    'Whole blood or plasma (EDTA)',
    ['Heart failure', 'Acute coronary syndrome', 'Pulmonary hypertension', 'Renal failure', 'Atrial fibrillation', 'Advanced age'],
    ['Obesity (paradoxically lower)', 'Flash pulmonary edema (early)'],
    'Released by ventricles in response to volume overload and wall stress. BNP <100 pg/mL makes heart failure unlikely (high negative predictive value). Used for diagnosis and prognosis in dyspnea.',
    'No standard critical value; >500 pg/mL strongly suggests heart failure',
    'BNP is released by your heart when it is under stress from fluid overload. A low BNP helps rule out heart failure as a cause of shortness of breath. High levels suggest the heart is struggling.',
  ),
  lab(
    'ck-mb',
    'Creatine Kinase-MB (CK-MB)',
    'Creatina Quinasa-MB (CK-MB)',
    'cardiac',
    '<5.0',
    'ng/mL',
    'Serum (red or SST top)',
    ['Myocardial infarction', 'Myocarditis', 'Cardiac surgery', 'Rhabdomyolysis (with CK-MM)', 'Muscular dystrophy'],
    ['N/A (low values not clinically significant)'],
    'Historically the primary cardiac marker, now largely replaced by troponin for MI diagnosis. Still useful for detecting reinfarction (faster rise and fall than troponin) and post-cardiac-surgery injury.',
    'No standard critical value; interpret relative to total CK and clinical context',
    'CK-MB is an enzyme from heart muscle. It rises after heart damage and falls faster than troponin, making it useful for detecting a second heart attack shortly after the first.',
  ),

  // ── Coagulation ─────────────────────────────────────────────────────────
  lab(
    'pt-inr',
    'Prothrombin Time / INR',
    'Tiempo de Protrombina / INR',
    'coagulation',
    'PT: 11–13.5 sec; INR: 0.8–1.1 (2.0–3.0 on warfarin)',
    'seconds / ratio',
    'Plasma (light blue top, citrate)',
    ['Warfarin therapy', 'Liver disease', 'Vitamin K deficiency', 'DIC', 'Factor VII deficiency'],
    ['N/A (short PT rarely significant)', 'Hypercoagulable states (research context)'],
    'Measures extrinsic and common coagulation pathways. INR standardizes PT across labs. Essential for warfarin monitoring. Prolonged PT with normal aPTT suggests factor VII deficiency.',
    'Critical high INR: >5.0 (major bleeding risk; consider vitamin K or reversal agent)',
    'PT/INR measures how long your blood takes to clot. If you take warfarin (a blood thinner), this test ensures your dose is safe. Too high means excessive bleeding risk.',
  ),
  lab(
    'aptt',
    'Activated Partial Thromboplastin Time (aPTT)',
    'Tiempo de Tromboplastina Parcial Activado (TTPa)',
    'coagulation',
    '25–35',
    'seconds',
    'Plasma (light blue top, citrate)',
    ['Heparin therapy', 'Hemophilia A/B', 'von Willebrand disease', 'Lupus anticoagulant', 'DIC', 'Liver disease'],
    ['N/A (short aPTT not clinically significant in most settings)'],
    'Measures intrinsic and common coagulation pathways. Used to monitor unfractionated heparin. Prolonged aPTT with normal PT suggests factor VIII, IX, XI, or XII deficiency.',
    'Critical high: >100 seconds (significant bleeding risk)',
    'aPTT measures a different part of the clotting process than PT. It is used to monitor heparin therapy and diagnose bleeding disorders like hemophilia.',
  ),
  lab(
    'd-dimer',
    'D-Dimer',
    'Dímero D',
    'coagulation',
    '<0.50',
    'mg/L FEU',
    'Plasma (light blue top, citrate)',
    ['DVT/PE', 'DIC', 'Recent surgery', 'Pregnancy', 'Malignancy', 'Infection/sepsis', 'Trauma', 'Advanced age'],
    ['N/A (low values are reassuring)'],
    'Fibrin degradation product. High sensitivity but low specificity for thromboembolism. A normal D-dimer with low clinical probability effectively rules out DVT/PE. Age-adjusted cutoff: age x 10 mcg/L for patients >50.',
    'No standard critical value; interpret with clinical probability (Wells score)',
    'D-dimer is a substance released when a blood clot dissolves. A negative result helps rule out dangerous clots in your lungs or legs. A positive result needs further imaging to confirm.',
  ),

  // ── Urinalysis ──────────────────────────────────────────────────────────
  lab(
    'urine-protein',
    'Urine Protein',
    'Proteína en Orina',
    'urinalysis',
    '<150 mg/24h or negative dipstick',
    'mg/24h or qualitative',
    'Random or 24-hour urine',
    ['Nephrotic syndrome', 'Diabetic nephropathy', 'Glomerulonephritis', 'Preeclampsia', 'Multiple myeloma (Bence Jones)', 'Fever/exercise (transient)'],
    ['N/A (absence is normal)'],
    'Persistent proteinuria is a hallmark of kidney disease. Spot urine protein/creatinine ratio can substitute for 24-hour collection. Albuminuria >30 mg/day is earliest sign of diabetic nephropathy.',
    '>3.5 g/24h defines nephrotic-range proteinuria',
    'Protein should not normally appear in urine. Its presence often signals kidney damage. Your doctor may order repeat testing because temporary causes like exercise can raise it briefly.',
  ),
  lab(
    'urine-glucose',
    'Urine Glucose',
    'Glucosa en Orina',
    'urinalysis',
    'Negative',
    'qualitative',
    'Random urine',
    ['Uncontrolled diabetes (blood glucose >180 mg/dL exceeds renal threshold)', 'Pregnancy', 'Fanconi syndrome', 'SGLT2 inhibitor use'],
    ['N/A (absence is normal)'],
    'Glucose appears in urine when blood glucose exceeds renal threshold (~180 mg/dL). Less precise than blood glucose but useful as a screening indicator. SGLT2 inhibitors intentionally cause glucosuria.',
    'No critical value; presence prompts blood glucose testing',
    'Glucose normally stays in your blood, not urine. If it spills into urine, it usually means your blood sugar is quite high, which may indicate uncontrolled diabetes.',
  ),

  // ── Inflammatory ────────────────────────────────────────────────────────
  lab(
    'crp',
    'C-Reactive Protein (CRP)',
    'Proteína C Reactiva (PCR)',
    'inflammatory',
    '<1.0 (low CV risk); 1.0–3.0 (moderate); >3.0 (high risk or inflammation)',
    'mg/L',
    'Serum (red or SST top)',
    ['Acute infection', 'Autoimmune flare (RA, lupus)', 'Malignancy', 'Tissue injury/surgery', 'Cardiovascular risk'],
    ['N/A (low values are normal/desirable)'],
    'Acute phase reactant produced by the liver. Rises within 6–8 hours of inflammation and falls rapidly with resolution. hs-CRP used for cardiovascular risk stratification.',
    '>10 mg/L suggests acute infection or significant inflammation',
    'CRP is a marker of inflammation in your body. High levels can mean infection, autoimmune flare, or other inflammation. A special high-sensitivity version helps assess heart disease risk.',
  ),
  lab(
    'esr',
    'Erythrocyte Sedimentation Rate (ESR)',
    'Velocidad de Sedimentación Globular (VSG)',
    'inflammatory',
    'M: <15; F: <20 (age-adjusted: age/2 for males; (age+10)/2 for females)',
    'mm/hr',
    'Whole blood (EDTA)',
    ['Infection', 'Autoimmune disease', 'Malignancy', 'Temporal arteritis', 'Polymyalgia rheumatica', 'Pregnancy', 'Anemia'],
    ['Polycythemia', 'Sickle cell disease', 'Heart failure', 'Low fibrinogen'],
    'Non-specific marker of inflammation. Rises slowly (days) and falls slowly. ESR >100 mm/hr narrows differential to serious infection, malignancy, or autoimmune disease (e.g., giant cell arteritis).',
    'No standard critical value; ESR >100 mm/hr warrants urgent evaluation',
    'ESR measures how fast red blood cells settle in a tube. Faster settling means more inflammation. It is a general test — your doctor uses it alongside other labs to find the cause.',
  ),
  lab(
    'procalcitonin',
    'Procalcitonin',
    'Procalcitonina',
    'inflammatory',
    '<0.05',
    'ng/mL',
    'Serum (red or SST top)',
    ['Bacterial infection/sepsis', 'Severe trauma', 'Major surgery', 'Burns', 'Medullary thyroid carcinoma'],
    ['N/A (low values suggest absence of bacterial infection)'],
    'More specific than CRP for bacterial infection. Helps distinguish bacterial from viral illness and guide antibiotic stewardship (start/stop decisions). Serial levels track treatment response.',
    '>2.0 ng/mL high probability of sepsis; >10 ng/mL severe sepsis/septic shock',
    'Procalcitonin rises specifically in bacterial infections, unlike CRP which rises in any inflammation. It helps your doctor decide whether antibiotics are needed and when to stop them.',
  ),

  // ── Tumor Markers ───────────────────────────────────────────────────────
  lab(
    'psa',
    'Prostate-Specific Antigen (PSA)',
    'Antígeno Prostático Específico (PSA)',
    'tumor-marker',
    '<4.0 (age-adjusted thresholds vary)',
    'ng/mL',
    'Serum (red or SST top)',
    ['Prostate cancer', 'BPH', 'Prostatitis', 'Recent ejaculation', 'Urinary retention', 'Prostate biopsy/manipulation'],
    ['5-alpha reductase inhibitors (finasteride, dutasteride — halve PSA)'],
    'Used for prostate cancer screening and monitoring. Not cancer-specific: BPH, infection, and manipulation raise PSA. Free-to-total PSA ratio, PSA density, and velocity improve specificity.',
    'No standard critical value; >10 ng/mL associated with higher cancer probability',
    'PSA is a protein made by the prostate. Elevated levels can indicate prostate cancer but also non-cancerous enlargement or infection. It is a screening tool, not a definitive diagnosis.',
  ),
  lab(
    'cea',
    'Carcinoembryonic Antigen (CEA)',
    'Antígeno Carcinoembrionario (ACE)',
    'tumor-marker',
    '<2.5 (non-smokers); <5.0 (smokers)',
    'ng/mL',
    'Serum (red or SST top)',
    ['Colorectal cancer', 'Lung cancer', 'Breast cancer', 'Pancreatic cancer', 'Smoking', 'Cirrhosis', 'IBD', 'Hypothyroidism'],
    ['N/A (low values are normal/desirable)'],
    'Primary role is monitoring colorectal cancer treatment response and detecting recurrence. NOT recommended as a screening test due to poor sensitivity and specificity. Trend more valuable than single value.',
    'No standard critical value; rising trend post-treatment suggests recurrence',
    'CEA is used mainly to monitor treatment of colon cancer. Rising levels after surgery may signal the cancer is returning. It is not a good screening test because many non-cancer conditions raise it.',
  ),
  lab(
    'ca-125',
    'Cancer Antigen 125 (CA-125)',
    'Antígeno de Cáncer 125 (CA-125)',
    'tumor-marker',
    '<35',
    'U/mL',
    'Serum (red or SST top)',
    ['Ovarian cancer', 'Endometriosis', 'Pelvic inflammatory disease', 'Pregnancy (first trimester)', 'Liver cirrhosis', 'Menstruation'],
    ['N/A (low values are normal/desirable)'],
    'Primarily used to monitor ovarian cancer response and recurrence. Not recommended for screening in general population due to many benign causes. Best used with imaging and clinical assessment.',
    'No standard critical value; trend during treatment is most informative',
    'CA-125 is commonly used to follow ovarian cancer during treatment. Many non-cancerous conditions, including endometriosis and menstruation, can elevate it, so a single high value does not mean cancer.',
  ),
  lab(
    'afp',
    'Alpha-Fetoprotein (AFP)',
    'Alfa-Fetoproteína (AFP)',
    'tumor-marker',
    '<10',
    'ng/mL',
    'Serum (red or SST top)',
    ['Hepatocellular carcinoma', 'Germ cell tumors (testicular, ovarian)', 'Hepatitis/cirrhosis (mild elevation)', 'Pregnancy (maternal serum screening)'],
    ['N/A (low values are normal/desirable)'],
    'Used for hepatocellular carcinoma surveillance in high-risk patients (cirrhosis) and monitoring germ cell tumors. Also part of maternal serum screening: elevated AFP suggests neural tube defects.',
    'No standard critical value; >400 ng/mL highly suspicious for HCC in cirrhotic patient',
    'AFP is used to screen for liver cancer in high-risk patients and to track certain testicular cancers. In pregnancy, it helps screen for birth defects. Mild elevations can occur with liver inflammation.',
  ),
];

// ---------------------------------------------------------------------------
// Indexed record keyed by id
// ---------------------------------------------------------------------------

export const LAB_INTERPRETATION_ENTRIES: Record<string, LabInterpretationEntry> =
  entries.reduce<Record<string, LabInterpretationEntry>>((acc, entry) => {
    acc[entry.id] = entry;
    return acc;
  }, {});

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/**
 * Search lab entries by name or Spanish name (case-insensitive substring match).
 * Returns an array of matching entries.
 */
export function searchLabEntries(query: string): LabInterpretationEntry[] {
  const q = query.toLowerCase();
  return entries.filter(
    (e) =>
      e.name.toLowerCase().includes(q) ||
      e.nameEs.toLowerCase().includes(q) ||
      e.id.toLowerCase().includes(q),
  );
}

/**
 * Filter lab entries by one or more categories.
 */
export function filterLabEntriesByCategory(
  ...categories: LabCategory[]
): LabInterpretationEntry[] {
  const catSet = new Set<LabCategory>(categories);
  return entries.filter((e) => catSet.has(e.category));
}

/**
 * Get a single lab entry by its id, or undefined if not found.
 */
export function getLabEntryById(id: string): LabInterpretationEntry | undefined {
  return LAB_INTERPRETATION_ENTRIES[id];
}

/**
 * Return all unique categories that have at least one entry.
 */
export function getAvailableLabCategories(): LabCategory[] {
  return [...new Set(entries.map((e) => e.category))];
}

/**
 * Full-text search across all textual fields (name, causes, significance, explanation).
 * Returns entries ranked by number of field matches (descending).
 */
export function fullTextSearchLabs(query: string): LabInterpretationEntry[] {
  const q = query.toLowerCase();

  const scored = entries.map((e) => {
    let score = 0;
    if (e.name.toLowerCase().includes(q)) score += 3;
    if (e.nameEs.toLowerCase().includes(q)) score += 3;
    if (e.id.toLowerCase().includes(q)) score += 2;
    if (e.clinicalSignificance.toLowerCase().includes(q)) score += 2;
    if (e.patientExplanation.toLowerCase().includes(q)) score += 1;
    if (e.criticalValues.toLowerCase().includes(q)) score += 1;
    if (e.highCauses.some((c) => c.toLowerCase().includes(q))) score += 1;
    if (e.lowCauses.some((c) => c.toLowerCase().includes(q))) score += 1;
    return { entry: e, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.entry);
}
