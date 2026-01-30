/**
 * Pharmacology Drug Classes Database
 *
 * Comprehensive database of 31 major drug classes with mechanisms,
 * indications, side effects, contraindications, and clinical pearls.
 */

// ============================================
// Interface
// ============================================

export interface DrugClassEntry {
  id: string;
  name: string;
  nameEs: string;
  category:
    | 'cardiovascular'
    | 'endocrine'
    | 'neurologic'
    | 'respiratory'
    | 'gi'
    | 'musculoskeletal'
    | 'infectious'
    | 'psychiatric'
    | 'oncologic'
    | 'immunologic'
    | 'hematologic'
    | 'dermatologic';
  mechanism: string;
  mechanismDetailed: string;
  prototypeDrug: string;
  commonDrugs: string[];
  indications: string[];
  sideEffects: string[];
  contraindications: string[];
  monitoring: string[];
  patientCounseling: string;
  clinicalPearl: string;
}

// ============================================
// Helper
// ============================================

/** Compact constructor to reduce boilerplate */
function dc(
  id: string,
  name: string,
  nameEs: string,
  category: DrugClassEntry['category'],
  mechanism: string,
  mechanismDetailed: string,
  prototypeDrug: string,
  commonDrugs: string[],
  indications: string[],
  sideEffects: string[],
  contraindications: string[],
  monitoring: string[],
  patientCounseling: string,
  clinicalPearl: string,
): DrugClassEntry {
  return {
    id, name, nameEs, category, mechanism, mechanismDetailed,
    prototypeDrug, commonDrugs, indications, sideEffects,
    contraindications, monitoring, patientCounseling, clinicalPearl,
  };
}

// ============================================
// Database
// ============================================

export const DRUG_CLASSES: Record<string, DrugClassEntry> = {

  // ── Cardiovascular (8) ──────────────────────

  statins: dc(
    'statins', 'HMG-CoA Reductase Inhibitors (Statins)', 'Estatinas',
    'cardiovascular',
    'Statins competitively inhibit HMG-CoA reductase, the rate-limiting enzyme in hepatic cholesterol synthesis. This upregulates LDL receptors on hepatocytes, increasing clearance of LDL-C from the blood.',
    'Binds the active site of HMG-CoA reductase in the mevalonate pathway, blocking conversion of HMG-CoA to mevalonate. Reduced intracellular cholesterol triggers SREBP-mediated upregulation of LDL receptor gene transcription, enhancing hepatic LDL uptake. Pleiotropic effects include improved endothelial function, anti-inflammatory action, and plaque stabilization.',
    'Atorvastatin',
    ['Atorvastatin', 'Rosuvastatin', 'Simvastatin', 'Pravastatin', 'Lovastatin', 'Fluvastatin', 'Pitavastatin'],
    ['Hyperlipidemia', 'ASCVD risk reduction', 'Secondary prevention post-MI', 'Familial hypercholesterolemia'],
    ['Myalgia', 'Elevated transaminases', 'Rhabdomyolysis (rare)', 'New-onset diabetes', 'GI upset'],
    ['Active liver disease', 'Pregnancy (Category X)', 'Concurrent strong CYP3A4 inhibitors with simvastatin/lovastatin'],
    ['Lipid panel at baseline and 4-12 weeks', 'LFTs if symptoms arise', 'CK if myalgia develops'],
    'Take in the evening for short-acting statins. Report unexplained muscle pain, tenderness, or dark urine immediately.',
    'Rosuvastatin and atorvastatin are high-intensity statins; they can be taken at any time of day due to long half-lives. Simvastatin should be taken at bedtime.',
  ),

  ace_inhibitors: dc(
    'ace_inhibitors', 'ACE Inhibitors', 'Inhibidores de la ECA',
    'cardiovascular',
    'ACE inhibitors block angiotensin-converting enzyme, preventing conversion of angiotensin I to angiotensin II. This reduces vasoconstriction, aldosterone secretion, and sympathetic activity, lowering blood pressure and reducing cardiac afterload.',
    'Competitive inhibition of ACE (kininase II) prevents Ang I to Ang II conversion in the RAAS. Also inhibits bradykinin degradation, contributing to vasodilation and the characteristic dry cough. Reduces aldosterone release, promoting natriuresis. Decreases cardiac remodeling by reducing Ang II-mediated fibrosis.',
    'Lisinopril',
    ['Lisinopril', 'Enalapril', 'Ramipril', 'Benazepril', 'Captopril', 'Fosinopril', 'Quinapril'],
    ['Hypertension', 'Heart failure (HFrEF)', 'Post-MI', 'Diabetic nephropathy', 'CKD with proteinuria'],
    ['Dry cough', 'Hyperkalemia', 'Angioedema (rare)', 'Hypotension', 'Acute kidney injury', 'Dizziness'],
    ['Bilateral renal artery stenosis', 'History of angioedema', 'Pregnancy (Category D)', 'Concurrent use with aliskiren in diabetes'],
    ['Serum creatinine and potassium within 1-2 weeks of initiation', 'Blood pressure monitoring', 'Recheck after dose changes'],
    'Do not use potassium supplements or salt substitutes without consulting your doctor. Rise slowly from sitting to prevent dizziness. Report any facial or throat swelling immediately.',
    'ACE inhibitor cough occurs in ~10-15% of patients and is more common in women and Asian populations. If cough is intolerable, switch to an ARB.',
  ),

  arbs: dc(
    'arbs', 'Angiotensin II Receptor Blockers (ARBs)', 'Bloqueadores del receptor de angiotensina II',
    'cardiovascular',
    'ARBs selectively block the AT1 receptor, preventing angiotensin II from causing vasoconstriction and aldosterone release. Unlike ACE inhibitors, they do not affect bradykinin metabolism, resulting in less cough.',
    'Selective antagonism of the angiotensin II type 1 (AT1) receptor blocks Ang II-mediated vasoconstriction, aldosterone secretion, ADH release, sympathetic activation, and cardiac/vascular remodeling. Unopposed AT2 receptor stimulation may contribute additional vasodilatory and anti-proliferative effects.',
    'Losartan',
    ['Losartan', 'Valsartan', 'Irbesartan', 'Olmesartan', 'Telmisartan', 'Candesartan', 'Azilsartan'],
    ['Hypertension', 'Heart failure (HFrEF if ACE-intolerant)', 'Diabetic nephropathy', 'Stroke prevention in LVH'],
    ['Hyperkalemia', 'Hypotension', 'Dizziness', 'Elevated creatinine', 'Angioedema (very rare)'],
    ['Pregnancy (Category D)', 'Bilateral renal artery stenosis', 'Concurrent ACE inhibitor + aliskiren'],
    ['Serum creatinine and potassium within 1-2 weeks', 'Blood pressure', 'Renal function periodically'],
    'Avoid potassium supplements unless directed. Stay hydrated. Do not use if pregnant or planning pregnancy.',
    'Losartan has a unique uricosuric effect that can lower uric acid levels, making it a preferred ARB in patients with gout and hypertension.',
  ),

  beta_blockers: dc(
    'beta_blockers', 'Beta-Adrenergic Blockers', 'Betabloqueantes',
    'cardiovascular',
    'Beta-blockers antagonize beta-adrenergic receptors, reducing heart rate, contractility, and renin release. This decreases myocardial oxygen demand and lowers blood pressure through multiple mechanisms.',
    'Competitive antagonism at beta-1 receptors (cardiac) decreases chronotropy, inotropy, dromotropy, and renin secretion. Beta-2 blockade (non-selective agents) causes bronchospasm and peripheral vasoconstriction. Third-generation agents (carvedilol, nebivolol) add alpha-1 blockade or nitric oxide-mediated vasodilation. Chronic use reduces mortality in HFrEF via reverse remodeling.',
    'Metoprolol',
    ['Metoprolol', 'Atenolol', 'Propranolol', 'Carvedilol', 'Bisoprolol', 'Nebivolol', 'Labetalol', 'Nadolol'],
    ['Hypertension', 'Heart failure (HFrEF)', 'Post-MI', 'Atrial fibrillation rate control', 'Angina', 'Migraine prophylaxis', 'Essential tremor'],
    ['Bradycardia', 'Fatigue', 'Cold extremities', 'Bronchospasm', 'Masked hypoglycemia', 'Depression', 'Sexual dysfunction', 'Rebound tachycardia on abrupt withdrawal'],
    ['Decompensated heart failure', 'Severe bradycardia/heart block', 'Severe reactive airway disease (non-selective)', 'Pheochromocytoma (without alpha-blockade)'],
    ['Heart rate and blood pressure', 'Blood glucose in diabetics', 'ECG if conduction disease suspected'],
    'Do not stop suddenly; taper over 1-2 weeks. May mask symptoms of low blood sugar. Report shortness of breath or worsening fatigue.',
    'Only carvedilol, bisoprolol, and metoprolol succinate (extended-release) have mortality benefit in HFrEF. Atenolol has fallen out of favor as first-line for hypertension due to inferior outcomes.',
  ),

  calcium_channel_blockers: dc(
    'calcium_channel_blockers', 'Calcium Channel Blockers', 'Bloqueadores de canales de calcio',
    'cardiovascular',
    'CCBs block L-type voltage-gated calcium channels in cardiac and smooth muscle cells. Dihydropyridines (amlodipine) primarily cause arterial vasodilation, while non-dihydropyridines (verapamil, diltiazem) also reduce heart rate and contractility.',
    'Inhibition of L-type Ca2+ channels reduces intracellular calcium in vascular smooth muscle (vasodilation) and cardiac myocytes (negative inotropy/chronotropy). DHPs have greater vascular selectivity; non-DHPs have greater cardiac selectivity, prolonging AV nodal conduction. Vasodilation reduces afterload and improves coronary blood flow.',
    'Amlodipine',
    ['Amlodipine', 'Nifedipine', 'Felodipine', 'Verapamil', 'Diltiazem'],
    ['Hypertension', 'Angina (stable/vasospastic)', 'Atrial fibrillation rate control (non-DHP)', 'Raynaud phenomenon'],
    ['Peripheral edema (DHP)', 'Constipation (verapamil)', 'Bradycardia (non-DHP)', 'Gingival hyperplasia', 'Flushing', 'Headache', 'Dizziness'],
    ['Severe heart failure (verapamil)', 'Concurrent beta-blocker with non-DHP (risk of complete heart block)', 'Sick sinus syndrome without pacemaker'],
    ['Heart rate and blood pressure', 'ECG if using non-DHP', 'Edema assessment'],
    'Swelling of the ankles is common and not dangerous but report it. Avoid grapefruit juice with some CCBs. Do not crush extended-release tablets.',
    'Amlodipine peripheral edema is dose-dependent and can be reduced by combining with an ACE inhibitor or ARB, which dilates the venous side and reduces capillary pressure.',
  ),

  thiazide_diuretics: dc(
    'thiazide_diuretics', 'Thiazide Diuretics', 'Diureticos tiazidicos',
    'cardiovascular',
    'Thiazides inhibit the Na-Cl cotransporter in the distal convoluted tubule, reducing sodium reabsorption and promoting diuresis. Long-term antihypertensive effect is primarily due to decreased peripheral vascular resistance.',
    'Blockade of the NCC (Na-Cl symporter) in the DCT increases sodium and chloride excretion. Compensatory increased Na/Ca exchange at the basolateral membrane enhances calcium reabsorption (useful in osteoporosis, harmful in hypercalcemia workup). Chronic use reduces PVR through unclear mechanisms involving reduced vascular reactivity.',
    'Hydrochlorothiazide',
    ['Hydrochlorothiazide', 'Chlorthalidone', 'Indapamide', 'Metolazone'],
    ['Hypertension', 'Edema (mild)', 'Calcium nephrolithiasis prevention', 'Nephrogenic diabetes insipidus'],
    ['Hypokalemia', 'Hyponatremia', 'Hyperuricemia', 'Hyperglycemia', 'Hypercalcemia', 'Photosensitivity', 'Erectile dysfunction'],
    ['Anuria', 'Severe renal impairment (GFR < 30, except metolazone)', 'Sulfonamide allergy (use caution)'],
    ['Electrolytes (K+, Na+, Ca2+, Mg2+)', 'Renal function', 'Glucose and uric acid', 'Blood pressure'],
    'Take in the morning to avoid nighttime urination. Eat potassium-rich foods (bananas, oranges). Use sunscreen due to photosensitivity risk.',
    'Chlorthalidone is 1.5-2x more potent than HCTZ with a longer duration of action and has stronger evidence for cardiovascular outcome reduction. Guidelines increasingly favor chlorthalidone or indapamide over HCTZ.',
  ),

  loop_diuretics: dc(
    'loop_diuretics', 'Loop Diuretics', 'Diureticos de asa',
    'cardiovascular',
    'Loop diuretics inhibit the Na-K-2Cl cotransporter (NKCC2) in the thick ascending limb of the loop of Henle. This produces potent diuresis by blocking reabsorption of ~25% of filtered sodium.',
    'Inhibition of NKCC2 in the TAL abolishes the corticomedullary concentration gradient, producing copious dilute urine. Loss of the lumen-positive potential difference reduces paracellular reabsorption of Ca2+ and Mg2+. Venodilation occurs before diuretic onset, providing rapid preload reduction in acute heart failure. Also stimulates prostaglandin-mediated renal vasodilation.',
    'Furosemide',
    ['Furosemide', 'Bumetanide', 'Torsemide', 'Ethacrynic acid'],
    ['Acute decompensated heart failure', 'Pulmonary edema', 'Edema (hepatic, renal)', 'Hypercalcemia', 'Acute kidney injury (to maintain urine output)'],
    ['Hypokalemia', 'Hyponatremia', 'Hypomagnesemia', 'Hypocalcemia', 'Ototoxicity', 'Hyperuricemia/gout', 'Hypotension', 'Metabolic alkalosis'],
    ['Anuria', 'Severe electrolyte depletion', 'Hepatic coma', 'Sulfonamide allergy (except ethacrynic acid)'],
    ['Daily weight', 'Electrolytes (K+, Na+, Mg2+, Ca2+)', 'Renal function', 'Blood pressure', 'Hearing (with high doses or aminoglycosides)'],
    'Take in the morning (and early afternoon if twice daily) to avoid nocturia. Weigh yourself daily and report rapid weight gain. Stay hydrated but follow fluid restrictions if prescribed.',
    'Furosemide oral bioavailability is erratic (10-100%, average 50%). Torsemide has 80-100% oral bioavailability and a longer duration of action, making it preferred in chronic heart failure with inconsistent response to furosemide.',
  ),

  doacs: dc(
    'doacs', 'Direct Oral Anticoagulants (DOACs)', 'Anticoagulantes orales directos',
    'cardiovascular',
    'DOACs directly inhibit specific clotting factors: factor Xa (rivaroxaban, apixaban, edoxaban) or thrombin/factor IIa (dabigatran). They provide predictable anticoagulation without routine monitoring.',
    'Factor Xa inhibitors bind the active site of factor Xa, blocking conversion of prothrombin to thrombin. Dabigatran is a direct thrombin inhibitor that binds both free and clot-bound thrombin. All have rapid onset (1-4 hrs), predictable pharmacokinetics, fewer drug/food interactions than warfarin, and do not require routine INR monitoring.',
    'Apixaban',
    ['Apixaban', 'Rivaroxaban', 'Edoxaban', 'Dabigatran'],
    ['Non-valvular atrial fibrillation stroke prevention', 'DVT/PE treatment and prophylaxis', 'Post-surgical VTE prophylaxis'],
    ['Bleeding', 'GI upset (dabigatran)', 'Dyspepsia', 'Bruising', 'Anemia'],
    ['Mechanical heart valves', 'Severe renal impairment (dabigatran CrCl < 30)', 'Active pathological bleeding', 'Moderate-to-severe mitral stenosis'],
    ['Renal function at baseline and annually', 'CBC', 'Signs of bleeding', 'Hepatic function'],
    'Take rivaroxaban with food for better absorption. Do not skip doses. Carry a card stating you are on a blood thinner. Inform all healthcare providers and dentists.',
    'Apixaban has the lowest bleeding risk among DOACs based on major trials (ARISTOTLE). Dabigatran can be reversed with idarucizumab; andexanet alfa reverses factor Xa inhibitors. All DOACs are renally cleared to varying degrees.',
  ),

  // ── Endocrine (6) ──────────────────────────

  biguanides: dc(
    'biguanides', 'Biguanides (Metformin)', 'Biguanidas (Metformina)',
    'endocrine',
    'Metformin reduces hepatic glucose production and improves insulin sensitivity in peripheral tissues. It activates AMP-activated protein kinase (AMPK), a key cellular energy sensor, without causing hypoglycemia.',
    'Primarily activates AMPK in hepatocytes, suppressing gluconeogenesis and reducing hepatic glucose output. Enhances peripheral glucose uptake in skeletal muscle via increased GLUT4 translocation. Reduces intestinal glucose absorption. Does not stimulate insulin secretion, hence no hypoglycemia risk as monotherapy. Also modestly reduces LDL and triglycerides.',
    'Metformin',
    ['Metformin', 'Metformin XR'],
    ['Type 2 diabetes (first-line)', 'Prediabetes', 'Polycystic ovary syndrome (off-label)', 'Gestational diabetes (off-label)'],
    ['GI upset (nausea, diarrhea, bloating)', 'Metallic taste', 'Vitamin B12 deficiency (long-term)', 'Lactic acidosis (very rare)'],
    ['eGFR < 30 mL/min', 'Acute or chronic metabolic acidosis', 'Radiographic contrast (hold 48 hrs)', 'Severe hepatic impairment'],
    ['HbA1c every 3-6 months', 'Renal function annually', 'Vitamin B12 levels periodically', 'CBC'],
    'Take with meals to reduce stomach upset. Start with a low dose and increase slowly. The extended-release form may cause fewer GI side effects.',
    'Metformin should be continued in most patients with type 2 diabetes even when other agents are added. It is weight-neutral or causes modest weight loss, making it uniquely advantageous among diabetes medications.',
  ),

  sulfonylureas: dc(
    'sulfonylureas', 'Sulfonylureas', 'Sulfonilureas',
    'endocrine',
    'Sulfonylureas stimulate insulin secretion by binding to the SUR1 subunit of the ATP-sensitive potassium channel on pancreatic beta cells. This depolarizes the cell and triggers calcium-dependent insulin exocytosis.',
    'Binding to SUR1 closes KATP channels on beta-cell membranes, causing depolarization and opening of voltage-gated Ca2+ channels. Intracellular calcium rise triggers insulin granule exocytosis. Effectiveness requires residual beta-cell function. Second-generation agents (glipizide, glyburide, glimepiride) have greater potency and fewer drug interactions than first-generation agents.',
    'Glipizide',
    ['Glipizide', 'Glyburide', 'Glimepiride'],
    ['Type 2 diabetes (second-line or add-on)'],
    ['Hypoglycemia', 'Weight gain', 'GI upset', 'Rash', 'Hyponatremia (SIADH-like, rare)'],
    ['Type 1 diabetes', 'Diabetic ketoacidosis', 'Severe hepatic or renal impairment (glyburide)', 'Sulfonamide allergy (caution)'],
    ['Blood glucose', 'HbA1c every 3-6 months', 'Renal function', 'Hepatic function'],
    'Take 30 minutes before meals. Always carry a source of fast-acting sugar. Do not skip meals. Avoid alcohol, which increases hypoglycemia risk.',
    'Glyburide has the highest hypoglycemia risk and should be avoided in the elderly and those with renal impairment. Glipizide is preferred in CKD because it has no active metabolites.',
  ),

  sglt2_inhibitors: dc(
    'sglt2_inhibitors', 'SGLT2 Inhibitors', 'Inhibidores de SGLT2',
    'endocrine',
    'SGLT2 inhibitors block the sodium-glucose cotransporter 2 in the proximal tubule, preventing glucose reabsorption and causing glycosuria. This insulin-independent mechanism also promotes natriuresis and weight loss.',
    'Selective inhibition of SGLT2 in the S1 segment of the proximal tubule blocks reabsorption of ~90% of filtered glucose. Resulting glycosuria lowers plasma glucose independently of insulin. Osmotic diuresis and natriuresis reduce preload and blood pressure. Restored tubuloglomerular feedback (via increased distal sodium delivery to macula densa) reduces glomerular hyperfiltration, conferring renal protection.',
    'Empagliflozin',
    ['Empagliflozin', 'Dapagliflozin', 'Canagliflozin', 'Ertugliflozin'],
    ['Type 2 diabetes', 'Heart failure (HFrEF and HFpEF)', 'CKD (with or without diabetes)', 'ASCVD risk reduction'],
    ['Genital mycotic infections', 'UTIs', 'Polyuria', 'Hypotension/dehydration', 'Euglycemic DKA (rare)', 'Fournier gangrene (very rare)'],
    ['Type 1 diabetes', 'eGFR < 20 (for new starts)', 'Recurrent UTIs or genital infections', 'Frequent DKA'],
    ['Renal function', 'Blood pressure', 'Signs of genital infections', 'Ketones if ill (sick-day rules)', 'HbA1c'],
    'May cause more frequent urination and genital yeast infections. Maintain good hygiene. Stop before surgery and during serious illness. Stay hydrated.',
    'SGLT2 inhibitors have revolutionized cardiorenal medicine. EMPA-REG, DAPA-HF, and CREDENCE trials showed benefits in heart failure and CKD independent of glucose lowering. Consider in any patient with HF or CKD regardless of diabetes status.',
  ),

  glp1_agonists: dc(
    'glp1_agonists', 'GLP-1 Receptor Agonists', 'Agonistas del receptor GLP-1',
    'endocrine',
    'GLP-1 receptor agonists mimic the incretin hormone GLP-1, stimulating glucose-dependent insulin secretion, suppressing glucagon, slowing gastric emptying, and promoting satiety. They cause significant weight loss.',
    'Activation of the GLP-1 receptor on pancreatic beta cells enhances glucose-dependent insulin secretion via cAMP/PKA pathway. Suppresses alpha-cell glucagon release. Delays gastric emptying (especially short-acting agents). Central appetite suppression via hypothalamic receptors reduces caloric intake. Cardiovascular benefits may involve anti-inflammatory and anti-atherosclerotic effects.',
    'Semaglutide',
    ['Semaglutide', 'Liraglutide', 'Dulaglutide', 'Exenatide', 'Tirzepatide (dual GIP/GLP-1)'],
    ['Type 2 diabetes', 'Obesity/weight management', 'ASCVD risk reduction', 'NAFLD/NASH (investigational)'],
    ['Nausea/vomiting (dose-dependent, improves over time)', 'Diarrhea', 'Injection site reactions', 'Pancreatitis (rare)', 'Gallbladder disease'],
    ['Personal/family history of medullary thyroid carcinoma', 'MEN2 syndrome', 'History of pancreatitis', 'Gastroparesis'],
    ['HbA1c', 'Weight', 'Signs of pancreatitis', 'Thyroid nodules', 'Renal function'],
    'Start at a low dose and increase gradually to minimize nausea. Inject subcutaneously in abdomen, thigh, or upper arm. Rotate injection sites. Nausea typically improves after 4-8 weeks.',
    'GLP-1 agonists produce the most weight loss of any diabetes medication (up to 15-20% with high-dose semaglutide). Low hypoglycemia risk as monotherapy since insulin secretion is glucose-dependent.',
  ),

  thyroid_hormones: dc(
    'thyroid_hormones', 'Thyroid Hormone Replacement', 'Hormonas tiroideas',
    'endocrine',
    'Levothyroxine (T4) is a synthetic thyroid hormone that restores normal levels of thyroxine. It is converted peripherally to the active T3, which binds nuclear thyroid receptors to regulate metabolism, growth, and development.',
    'T4 is a prohormone converted to active T3 by type 1 and 2 deiodinases in peripheral tissues. T3 binds nuclear thyroid hormone receptors (TR-alpha and TR-beta), forming heterodimers with RXR that modulate transcription of genes controlling basal metabolic rate, thermogenesis, protein synthesis, and carbohydrate/lipid metabolism.',
    'Levothyroxine',
    ['Levothyroxine', 'Liothyronine (T3)', 'Desiccated thyroid'],
    ['Hypothyroidism', 'Myxedema coma', 'Thyroid cancer suppression therapy', 'TSH suppression post-thyroidectomy'],
    ['Palpitations', 'Tachycardia', 'Tremor', 'Insomnia', 'Heat intolerance', 'Weight loss', 'Bone loss (if over-replaced)', 'Anxiety'],
    ['Untreated adrenal insufficiency (treat with cortisol first)', 'Acute MI (relative)', 'Thyrotoxicosis'],
    ['TSH every 6-8 weeks until stable, then every 6-12 months', 'Free T4', 'Heart rate', 'Bone density (if suppressive doses)'],
    'Take on an empty stomach 30-60 minutes before breakfast with water only. Separate from calcium, iron, and antacids by at least 4 hours. Be consistent with brand/generic.',
    'Levothyroxine has a narrow therapeutic index and many drug/food interactions affecting absorption. Even switching between generic manufacturers can alter TSH. Wait 6-8 weeks after dose changes before rechecking TSH due to its long half-life (~7 days).',
  ),

  corticosteroids_systemic: dc(
    'corticosteroids_systemic', 'Systemic Corticosteroids', 'Corticosteroides sistemicos',
    'endocrine',
    'Corticosteroids bind intracellular glucocorticoid receptors, translocating to the nucleus to modulate gene transcription. They suppress inflammation and immune responses by inhibiting NF-kB and AP-1, reducing cytokine production.',
    'Lipophilic steroids cross cell membranes and bind the cytoplasmic glucocorticoid receptor (GR). The GR-steroid complex translocates to the nucleus, binding glucocorticoid response elements (GREs) to upregulate anti-inflammatory genes (lipocortin-1, IL-10) and transrepressing pro-inflammatory transcription factors (NF-kB, AP-1), suppressing COX-2, cytokines (IL-1, IL-6, TNF-alpha), and adhesion molecules.',
    'Prednisone',
    ['Prednisone', 'Prednisolone', 'Methylprednisolone', 'Dexamethasone', 'Hydrocortisone'],
    ['Asthma exacerbation', 'COPD exacerbation', 'Autoimmune diseases', 'Organ transplant rejection', 'Adrenal insufficiency (hydrocortisone)', 'Allergic reactions', 'Inflammatory conditions'],
    ['Weight gain', 'Hyperglycemia', 'Osteoporosis', 'Adrenal suppression', 'Immunosuppression', 'Cushing features', 'Insomnia', 'Mood changes', 'GI ulceration', 'Cataracts', 'Skin thinning'],
    ['Systemic fungal infections', 'Live vaccines during immunosuppressive doses', 'Untreated infections'],
    ['Blood glucose', 'Blood pressure', 'Bone density (long-term use)', 'Ophthalmologic exams', 'Electrolytes', 'HPA axis (if tapering)'],
    'Take with food to reduce stomach irritation. Do not stop suddenly after prolonged use; must taper. Carry a steroid card. Report signs of infection or mood changes.',
    'The equivalent anti-inflammatory doses are: hydrocortisone 20mg = prednisone 5mg = methylprednisolone 4mg = dexamethasone 0.75mg. Dexamethasone has no mineralocorticoid activity and a long duration, making it preferred for cerebral edema and COVID-19.',
  ),

  // ── Neurologic/Psychiatric (6) ──────────────

  ssris: dc(
    'ssris', 'Selective Serotonin Reuptake Inhibitors (SSRIs)', 'Inhibidores selectivos de la recaptacion de serotonina',
    'psychiatric',
    'SSRIs selectively inhibit the serotonin transporter (SERT) in the presynaptic neuron, increasing serotonin availability in the synaptic cleft. Therapeutic effects require 4-6 weeks due to downstream receptor desensitization.',
    'Blockade of SERT prevents serotonin (5-HT) reuptake into the presynaptic terminal. Acutely, increased 5-HT activates inhibitory 5-HT1A autoreceptors, limiting initial benefit. Over weeks, autoreceptor desensitization allows sustained 5-HT neurotransmission enhancement. Downstream effects include BDNF upregulation and neuroplasticity changes in the hippocampus and prefrontal cortex.',
    'Sertraline',
    ['Sertraline', 'Fluoxetine', 'Escitalopram', 'Citalopram', 'Paroxetine', 'Fluvoxamine'],
    ['Major depressive disorder', 'Generalized anxiety disorder', 'OCD', 'PTSD', 'Panic disorder', 'Social anxiety disorder', 'Premenstrual dysphoric disorder'],
    ['Sexual dysfunction', 'GI upset (nausea, diarrhea)', 'Insomnia or somnolence', 'Headache', 'Weight gain', 'Hyponatremia (SIADH)', 'Serotonin syndrome (with MAOIs)', 'QTc prolongation (citalopram)'],
    ['Concurrent MAOI use (14-day washout)', 'Concurrent pimozide (some SSRIs)', 'Uncontrolled mania'],
    ['Mood and suicidality (especially first 4 weeks and in youth)', 'Sexual function', 'Sodium levels in elderly', 'Bleeding risk if on anticoagulants'],
    'Effects take 4-6 weeks to fully develop. Do not stop abruptly; taper to avoid discontinuation symptoms. Avoid alcohol. Report worsening mood or suicidal thoughts immediately.',
    'Fluoxetine has the longest half-life (2-6 days; active metabolite 4-16 days) and is least likely to cause discontinuation syndrome. Paroxetine has the most anticholinergic effects and highest risk of discontinuation symptoms.',
  ),

  snris: dc(
    'snris', 'Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs)', 'Inhibidores de la recaptacion de serotonina y norepinefrina',
    'psychiatric',
    'SNRIs inhibit reuptake of both serotonin and norepinephrine, enhancing dual monoamine neurotransmission. The norepinephrine component provides additional benefits for pain, energy, and concentration beyond SSRIs.',
    'Dual blockade of SERT and NET increases synaptic 5-HT and NE. Serotonergic effects predominate at lower doses; noradrenergic effects become significant at higher doses (especially venlafaxine). NE enhancement in descending inhibitory pain pathways mediates analgesic effects. Combined monoamine enhancement may provide broader efficacy in treatment-resistant depression.',
    'Venlafaxine',
    ['Venlafaxine', 'Duloxetine', 'Desvenlafaxine', 'Levomilnacipran', 'Milnacipran'],
    ['Major depressive disorder', 'Generalized anxiety disorder', 'Diabetic neuropathy (duloxetine)', 'Fibromyalgia (duloxetine, milnacipran)', 'Chronic musculoskeletal pain', 'Social anxiety disorder'],
    ['Nausea', 'Hypertension (dose-dependent)', 'Sexual dysfunction', 'Insomnia', 'Diaphoresis', 'Dry mouth', 'Constipation', 'Dizziness', 'Discontinuation syndrome'],
    ['Concurrent MAOI use', 'Uncontrolled narrow-angle glaucoma (venlafaxine, duloxetine)', 'Severe hepatic impairment (duloxetine)'],
    ['Blood pressure (especially venlafaxine)', 'Mood and suicidality', 'Hepatic function (duloxetine)', 'Renal function', 'Intraocular pressure if at risk for glaucoma'],
    'Take at the same time each day. Do not crush extended-release capsules. Do not stop abruptly. Report elevated blood pressure, severe headaches, or mood changes.',
    'Venlafaxine acts primarily as an SSRI at doses below 150mg/day; noradrenergic effects become clinically meaningful at 150mg+ and dopaminergic effects at 300mg+. Duloxetine is preferred for comorbid pain conditions.',
  ),

  benzodiazepines: dc(
    'benzodiazepines', 'Benzodiazepines', 'Benzodiacepinas',
    'neurologic',
    'Benzodiazepines are positive allosteric modulators of the GABA-A receptor. They bind the interface between alpha and gamma subunits, increasing the frequency of chloride channel opening and enhancing inhibitory neurotransmission.',
    'Binding to the benzodiazepine site on GABA-A receptors (alpha-1/2/3/5 + gamma-2 subunits) increases receptor affinity for GABA, increasing the frequency (not duration) of Cl- channel opening. This hyperpolarizes neurons, producing anxiolytic (alpha-2/3), sedative/amnestic (alpha-1), muscle relaxant, and anticonvulsant effects. Does not directly open the channel (unlike barbiturates), providing a ceiling effect and wider safety margin.',
    'Lorazepam',
    ['Lorazepam', 'Diazepam', 'Alprazolam', 'Clonazepam', 'Midazolam', 'Temazepam', 'Chlordiazepoxide', 'Oxazepam'],
    ['Acute anxiety', 'Seizures (status epilepticus)', 'Alcohol withdrawal', 'Insomnia (short-term)', 'Procedural sedation', 'Muscle spasm', 'Preoperative anxiolysis'],
    ['Sedation', 'Cognitive impairment', 'Respiratory depression', 'Dependence and withdrawal', 'Falls (elderly)', 'Paradoxical agitation', 'Anterograde amnesia', 'Tolerance'],
    ['Severe respiratory insufficiency', 'Sleep apnea (relative)', 'Acute narrow-angle glaucoma', 'Myasthenia gravis', 'Concurrent opioid use (increased respiratory depression risk)'],
    ['Sedation level', 'Respiratory status', 'Cognitive function', 'Signs of dependence', 'Fall risk assessment'],
    'Avoid alcohol completely. Do not drive or operate machinery until you know how this medication affects you. Do not stop suddenly after regular use; must taper. Risk of dependence increases with duration of use.',
    'LOT (lorazepam, oxazepam, temazepam) are preferred in hepatic impairment because they are metabolized only by glucuronidation (no CYP450 involvement). Flumazenil reverses benzodiazepine effects but can precipitate seizures in chronic users.',
  ),

  typical_antipsychotics: dc(
    'typical_antipsychotics', 'Typical (First-Generation) Antipsychotics', 'Antipsicoticos tipicos (primera generacion)',
    'psychiatric',
    'Typical antipsychotics block dopamine D2 receptors in the mesolimbic pathway, reducing positive psychotic symptoms. However, D2 blockade in other pathways causes significant extrapyramidal and endocrine side effects.',
    'Non-selective D2 receptor antagonism across all four dopamine pathways: mesolimbic (therapeutic antipsychotic effect), mesocortical (worsens negative symptoms and cognition), nigrostriatal (EPS, tardive dyskinesia), and tuberoinfundibular (hyperprolactinemia). Potency correlates with D2 binding affinity. High-potency agents (haloperidol) cause more EPS; low-potency agents (chlorpromazine) cause more sedation, anticholinergic, and alpha-blocking effects.',
    'Haloperidol',
    ['Haloperidol', 'Chlorpromazine', 'Fluphenazine', 'Perphenazine', 'Thiothixene'],
    ['Schizophrenia', 'Acute psychosis', 'Acute agitation', 'Tourette syndrome (haloperidol)', 'Intractable hiccups (chlorpromazine)', 'Nausea (low-dose)'],
    ['Extrapyramidal symptoms (dystonia, akathisia, parkinsonism)', 'Tardive dyskinesia', 'Hyperprolactinemia', 'Sedation', 'QTc prolongation', 'Neuroleptic malignant syndrome', 'Anticholinergic effects', 'Orthostatic hypotension'],
    ['Parkinson disease', 'Dementia-related psychosis (FDA black box)', 'QTc prolongation', 'CNS depression', 'Comatose states'],
    ['AIMS exam for tardive dyskinesia every 6-12 months', 'EPS assessment', 'Prolactin if symptomatic', 'ECG (QTc)', 'Metabolic panel'],
    'Report involuntary muscle movements, especially of the face or tongue. Rise slowly due to dizziness risk. Avoid excessive heat exposure. Take as prescribed even when feeling well.',
    'Neuroleptic malignant syndrome (fever, rigidity, altered consciousness, CK elevation) is a life-threatening emergency. Treat with dantrolene and bromocriptine. High-potency agents like haloperidol carry the highest risk.',
  ),

  atypical_antipsychotics: dc(
    'atypical_antipsychotics', 'Atypical (Second-Generation) Antipsychotics', 'Antipsicoticos atipicos (segunda generacion)',
    'psychiatric',
    'Atypical antipsychotics block both D2 and 5-HT2A receptors. Serotonin antagonism reduces EPS risk and may improve negative symptoms and cognition compared to typical agents. Many also modulate other receptors.',
    'Dual D2/5-HT2A antagonism is the defining feature. 5-HT2A blockade in the nigrostriatal pathway disinhibits dopamine release, offsetting D2 blockade and reducing EPS. Lower D2 occupancy threshold (60-80%) vs typicals. Fast D2 dissociation (clozapine, quetiapine) further reduces EPS. Variable affinity for H1 (sedation, weight gain), alpha-1 (orthostasis), and M1 (anticholinergic effects) receptors.',
    'Risperidone',
    ['Risperidone', 'Olanzapine', 'Quetiapine', 'Aripiprazole', 'Ziprasidone', 'Clozapine', 'Lurasidone', 'Paliperidone', 'Brexpiprazole', 'Cariprazine'],
    ['Schizophrenia', 'Bipolar disorder', 'Major depressive disorder (adjunct)', 'Irritability in autism', 'Treatment-resistant schizophrenia (clozapine)'],
    ['Metabolic syndrome (weight gain, hyperglycemia, dyslipidemia)', 'Sedation', 'Orthostatic hypotension', 'QTc prolongation', 'Hyperprolactinemia (risperidone)', 'Agranulocytosis (clozapine)', 'Seizures (clozapine)'],
    ['Dementia-related psychosis (black box)', 'Uncontrolled diabetes (olanzapine, relative)', 'QTc prolongation (ziprasidone)'],
    ['Fasting glucose and lipids at baseline, 3 months, then annually', 'Weight and BMI', 'ANC (clozapine: weekly x6mo, then biweekly)', 'Blood pressure', 'ECG if indicated'],
    'Take lurasidone with at least 350 calories for absorption. Monitor weight closely. Report excessive thirst or urination. Do not stop clozapine abruptly.',
    'Clozapine is the gold standard for treatment-resistant schizophrenia and reduces suicidality, but requires mandatory ANC monitoring due to agranulocytosis risk (~1%). Aripiprazole is a D2 partial agonist with the lowest metabolic risk.',
  ),

  anticonvulsants: dc(
    'anticonvulsants', 'Anticonvulsants / Antiepileptic Drugs', 'Anticonvulsivantes',
    'neurologic',
    'Anticonvulsants reduce neuronal excitability through various mechanisms: blocking voltage-gated sodium or calcium channels, enhancing GABAergic inhibition, or reducing glutamate-mediated excitation.',
    'Sodium channel blockers (carbamazepine, phenytoin, lamotrigine) prolong channel inactivation, reducing high-frequency repetitive firing. Calcium channel modulators (gabapentin, pregabalin) bind alpha-2-delta subunit of voltage-gated Ca2+ channels, reducing neurotransmitter release. GABA enhancers (valproate) increase GABA synthesis and inhibit GABA degradation. SV2A ligands (levetiracetam) modulate synaptic vesicle release. Many agents have multiple mechanisms.',
    'Levetiracetam',
    ['Levetiracetam', 'Valproate', 'Lamotrigine', 'Carbamazepine', 'Phenytoin', 'Gabapentin', 'Pregabalin', 'Topiramate', 'Oxcarbazepine'],
    ['Epilepsy (focal and generalized)', 'Neuropathic pain', 'Bipolar disorder (mood stabilizer)', 'Migraine prophylaxis', 'Trigeminal neuralgia', 'Fibromyalgia'],
    ['Sedation', 'Dizziness', 'Cognitive impairment', 'Hepatotoxicity (valproate)', 'SJS/TEN (lamotrigine, carbamazepine)', 'Teratogenicity (valproate, most severe)', 'Hyponatremia (carbamazepine, oxcarbazepine)', 'Weight gain (valproate, gabapentin) or loss (topiramate)'],
    ['Pregnancy (valproate contraindicated; lamotrigine preferred)', 'Hepatic disease (valproate)', 'Urea cycle disorders (valproate)', 'HLA-B*1502 positive (carbamazepine; Asian populations)'],
    ['Drug levels (phenytoin, valproate, carbamazepine)', 'CBC', 'LFTs', 'Sodium', 'Pregnancy test before starting valproate', 'HLA-B*1502 screening if indicated'],
    'Do not stop suddenly as this can trigger seizures. Take at regular intervals. Report any rash immediately, especially with lamotrigine. Use reliable contraception with enzyme-inducing agents.',
    'Lamotrigine must be titrated very slowly (over 6+ weeks) to minimize risk of SJS/TEN, especially when combined with valproate which doubles lamotrigine levels. HLA-B*1502 testing is recommended before carbamazepine in patients of Asian ancestry.',
  ),

  // ── Respiratory (3) ─────────────────────────

  beta2_agonists: dc(
    'beta2_agonists', 'Beta-2 Adrenergic Agonists', 'Agonistas beta-2 adrenergicos',
    'respiratory',
    'Beta-2 agonists activate beta-2 adrenergic receptors on bronchial smooth muscle, stimulating adenylyl cyclase and increasing cAMP. This relaxes airway smooth muscle and relieves bronchospasm within minutes (SABA) or provides sustained bronchodilation (LABA).',
    'Beta-2 receptor activation couples to Gs protein, activating adenylyl cyclase and increasing intracellular cAMP. cAMP activates PKA, which phosphorylates myosin light chain kinase (reducing activity), opens Ca2+-activated K+ channels (hyperpolarization), and inhibits IP3-mediated Ca2+ release. Net effect: smooth muscle relaxation, bronchodilation, increased mucociliary clearance, and mast cell stabilization.',
    'Albuterol',
    ['Albuterol (SABA)', 'Levalbuterol (SABA)', 'Formoterol (LABA)', 'Salmeterol (LABA)', 'Vilanterol (LABA)', 'Indacaterol (LABA)'],
    ['Asthma (acute rescue and maintenance)', 'COPD', 'Exercise-induced bronchospasm', 'Hyperkalemia (acute treatment)'],
    ['Tremor', 'Tachycardia', 'Palpitations', 'Hypokalemia', 'Headache', 'Nervousness', 'Paradoxical bronchospasm (rare)', 'Tolerance with overuse'],
    ['LABA monotherapy in asthma (must combine with ICS)', 'Cardiac arrhythmias (use with caution)', 'Hypersensitivity'],
    ['Symptom frequency (SABA use > 2 days/week suggests uncontrolled asthma)', 'Heart rate', 'Potassium with frequent use'],
    'Shake inhaler before use. Wait 1 minute between puffs. Rinse mouth after use. If using rescue inhaler more than twice a week, your asthma may not be well controlled; see your doctor.',
    'SABA overuse (> 2 canisters/year) is a marker of poorly controlled asthma and is associated with increased mortality. LABAs must NEVER be used as monotherapy in asthma (FDA black box); always combine with ICS.',
  ),

  inhaled_corticosteroids: dc(
    'inhaled_corticosteroids', 'Inhaled Corticosteroids (ICS)', 'Corticosteroides inhalados',
    'respiratory',
    'Inhaled corticosteroids reduce airway inflammation by suppressing cytokine production, reducing eosinophil infiltration, and decreasing mucus secretion. They are the cornerstone of persistent asthma management.',
    'Topical glucocorticoid receptor activation in airway epithelium and immune cells suppresses NF-kB and AP-1-mediated transcription of inflammatory genes. Reduces eosinophils, mast cells, T-lymphocytes, macrophages, and dendritic cells in the airway. Decreases vascular permeability, mucus production, and airway hyperresponsiveness. Upregulates beta-2 receptor expression, preventing tachyphylaxis to beta-agonists. Onset of benefit: days to weeks.',
    'Fluticasone',
    ['Fluticasone propionate', 'Budesonide', 'Beclomethasone', 'Mometasone', 'Ciclesonide'],
    ['Persistent asthma (all severities)', 'COPD (with frequent exacerbations)', 'Eosinophilic bronchitis'],
    ['Oral candidiasis (thrush)', 'Dysphonia', 'Cough', 'Pharyngitis', 'Adrenal suppression (high doses)', 'Growth suppression in children (mild)', 'Osteoporosis (high-dose, long-term)', 'Easy bruising'],
    ['Active pulmonary tuberculosis', 'Untreated fungal infections', 'Primary treatment for acute bronchospasm (not a rescue medication)'],
    ['Asthma control assessment', 'Growth in children', 'Bone density (high-dose, long-term)', 'Oral examination for thrush', 'Adrenal function if on high doses'],
    'Rinse mouth and spit after each use to prevent thrush. Use a spacer with MDIs for better delivery and fewer side effects. This is a controller; use every day even when feeling well.',
    'ICS are first-line controller therapy for all levels of persistent asthma. Ciclesonide is a prodrug activated in the lungs with minimal oral bioavailability, resulting in fewer local and systemic side effects.',
  ),

  leukotriene_modifiers: dc(
    'leukotriene_modifiers', 'Leukotriene Receptor Antagonists', 'Antagonistas de receptores de leucotrienos',
    'respiratory',
    'Leukotriene modifiers block CysLT1 receptors (montelukast) or inhibit 5-lipoxygenase (zileuton), reducing leukotriene-mediated bronchoconstriction, mucus production, airway edema, and eosinophil recruitment.',
    'Cysteinyl leukotrienes (LTC4, LTD4, LTE4) are potent bronchoconstrictors released from mast cells and eosinophils via the 5-LOX/arachidonic acid pathway. CysLT1 receptor antagonism (montelukast, zafirlukast) blocks downstream bronchoconstriction and inflammation. Zileuton inhibits 5-lipoxygenase directly, blocking all leukotriene synthesis. Particularly effective in aspirin-exacerbated respiratory disease and exercise-induced bronchospasm.',
    'Montelukast',
    ['Montelukast', 'Zafirlukast', 'Zileuton'],
    ['Asthma (add-on or alternative to ICS in mild persistent)', 'Allergic rhinitis', 'Exercise-induced bronchospasm', 'Aspirin-exacerbated respiratory disease'],
    ['Headache', 'GI upset', 'Neuropsychiatric events (FDA boxed warning: mood changes, suicidality)', 'Hepatotoxicity (zileuton)', 'Churg-Strauss-like syndrome (rare, unmasked by steroid tapering)'],
    ['Acute asthma attack (not a rescue medication)', 'Hepatic impairment (zileuton)'],
    ['Neuropsychiatric symptoms (all, especially montelukast)', 'LFTs (zileuton: baseline, monthly x3, then periodically)', 'Asthma control'],
    'Take montelukast in the evening. Not for acute attacks. Report any mood changes, anxiety, depression, or unusual behavior immediately.',
    'FDA added a boxed warning to montelukast in 2020 for neuropsychiatric events. It should be reserved for patients who cannot tolerate or do not respond to other therapies. Consider risk-benefit carefully before prescribing.',
  ),

  // ── GI (3) ──────────────────────────────────

  ppis: dc(
    'ppis', 'Proton Pump Inhibitors (PPIs)', 'Inhibidores de la bomba de protones',
    'gi',
    'PPIs irreversibly inhibit the hydrogen-potassium ATPase (proton pump) on gastric parietal cells. This blocks the final step of acid secretion, producing profound and sustained suppression of gastric acid production.',
    'Prodrugs activated in the acidic canalicular space of parietal cells. The active sulfenamide form covalently binds cysteine residues on the H+/K+-ATPase, irreversibly inactivating the pump. Since new pumps must be synthesized, acid suppression persists 24-48 hours. Maximum effect requires 3-5 days of dosing as not all pumps are active simultaneously. Best taken 30-60 min before meals when pumps are transitioning to active state.',
    'Omeprazole',
    ['Omeprazole', 'Esomeprazole', 'Pantoprazole', 'Lansoprazole', 'Rabeprazole', 'Dexlansoprazole'],
    ['GERD', 'Peptic ulcer disease', 'H. pylori eradication (combination)', 'Zollinger-Ellison syndrome', 'Stress ulcer prophylaxis', 'NSAID gastroprotection'],
    ['Headache', 'Diarrhea', 'C. difficile infection', 'Hypomagnesemia', 'B12 deficiency (long-term)', 'Calcium malabsorption and fracture risk', 'Acute interstitial nephritis (rare)', 'Rebound acid hypersecretion on discontinuation'],
    ['Hypersensitivity', 'Concurrent rilpivirine or atazanavir (reduced absorption)'],
    ['Magnesium (long-term use)', 'B12 (long-term use)', 'Renal function', 'Bone density (long-term, high-risk)', 'Reassess need every 6-12 months'],
    'Take 30-60 minutes before your first meal of the day. Swallow whole; do not crush or chew delayed-release capsules. Discuss with your doctor if you have been taking this for more than 8 weeks.',
    'PPIs are frequently overprescribed. Always attempt step-down therapy (to H2 blocker) or discontinuation after 8-12 weeks for uncomplicated GERD. Taper rather than abrupt stop to avoid rebound acid hypersecretion.',
  ),

  h2_blockers: dc(
    'h2_blockers', 'H2 Receptor Antagonists', 'Antagonistas del receptor H2',
    'gi',
    'H2 blockers competitively inhibit histamine at the H2 receptor on gastric parietal cells, reducing basal and meal-stimulated acid secretion. They are less potent than PPIs but have a faster onset.',
    'Reversible competitive antagonism of histamine H2 receptors on the basolateral membrane of parietal cells. Blocks histamine-stimulated activation of adenylyl cyclase, reducing cAMP and decreasing H+/K+-ATPase activity. Most effective against basal (overnight) acid secretion. Tolerance (tachyphylaxis) can develop within 2-4 weeks of continuous use.',
    'Famotidine',
    ['Famotidine', 'Cimetidine', 'Nizatidine'],
    ['GERD (mild)', 'Peptic ulcer disease', 'Dyspepsia', 'Stress ulcer prophylaxis', 'Pre-anesthesia aspiration prophylaxis'],
    ['Headache', 'Dizziness', 'Constipation or diarrhea', 'Gynecomastia (cimetidine)', 'Drug interactions (cimetidine inhibits CYP450)'],
    ['Hypersensitivity'],
    ['Symptom resolution', 'Renal function (dose adjust in CKD)'],
    'Can be taken with or without food. For heartburn prevention, take 30-60 minutes before a meal. Available over the counter for occasional use.',
    'Ranitidine (Zantac) was withdrawn worldwide in 2020 due to NDMA contamination concerns. Famotidine is now the preferred H2 blocker. Cimetidine is a potent CYP450 inhibitor (1A2, 2C19, 2D6, 3A4) and has antiandrogenic effects.',
  ),

  antiemetics_5ht3: dc(
    'antiemetics_5ht3', '5-HT3 Receptor Antagonists (Antiemetics)', 'Antagonistas del receptor 5-HT3 (Antiemeticos)',
    'gi',
    '5-HT3 antagonists block serotonin receptors in the chemoreceptor trigger zone and on vagal afferents in the GI tract. This prevents nausea and vomiting, particularly from chemotherapy and post-operative stimuli.',
    'Selective antagonism of 5-HT3 receptors on vagal afferent neurons in the GI tract and in the CTZ/nucleus tractus solitarius in the brainstem. Chemotherapy and radiation damage enterochromaffin cells, causing massive serotonin release that activates vagal 5-HT3 receptors, triggering the emetic reflex. Blockade at both peripheral and central sites provides potent antiemetic effect, most effective against acute (not delayed) chemotherapy-induced emesis.',
    'Ondansetron',
    ['Ondansetron', 'Granisetron', 'Dolasetron', 'Palonosetron'],
    ['Chemotherapy-induced nausea/vomiting', 'Radiation-induced nausea', 'Post-operative nausea/vomiting', 'Gastroenteritis-related vomiting'],
    ['Headache', 'Constipation', 'QTc prolongation (dose-dependent)', 'Dizziness', 'Serotonin syndrome (with serotonergic drugs)'],
    ['Congenital long QT syndrome', 'Concurrent QTc-prolonging drugs (use caution)', 'Apomorphine (ondansetron)'],
    ['ECG if risk factors for QTc prolongation', 'Electrolytes (K+, Mg2+)', 'Bowel function'],
    'May cause constipation; increase fluids and fiber. Can be taken as a dissolving tablet if unable to swallow. Report palpitations or fainting.',
    'Palonosetron has a uniquely long half-life (~40 hours) and is the preferred 5-HT3 antagonist for prevention of delayed chemotherapy-induced emesis. A single dose covers 5 days. Ondansetron IV max single dose is 16mg due to QTc risk.',
  ),

  // ── Musculoskeletal (2) ─────────────────────

  nsaids: dc(
    'nsaids', 'Nonsteroidal Anti-Inflammatory Drugs (NSAIDs)', 'Antiinflamatorios no esteroideos (AINEs)',
    'musculoskeletal',
    'NSAIDs inhibit cyclooxygenase (COX) enzymes, blocking the conversion of arachidonic acid to prostaglandins. This reduces inflammation, pain, and fever. COX-1 inhibition causes GI and platelet side effects; COX-2 selectivity reduces GI risk but increases cardiovascular risk.',
    'Non-selective NSAIDs inhibit both COX-1 (constitutive: GI protection, platelet aggregation, renal perfusion) and COX-2 (inducible: inflammation, pain, fever). Reduced prostaglandin E2 and I2 synthesis decreases vasodilation, edema, and sensitization of nociceptors. COX-1 inhibition reduces thromboxane A2 in platelets (antiplatelet effect) and protective gastric mucosal prostaglandins (ulcerogenic). Celecoxib selectively inhibits COX-2, sparing GI protective prostaglandins.',
    'Ibuprofen',
    ['Ibuprofen', 'Naproxen', 'Diclofenac', 'Indomethacin', 'Ketorolac', 'Meloxicam', 'Celecoxib', 'Piroxicam'],
    ['Pain (mild to moderate)', 'Inflammation', 'Fever', 'Osteoarthritis', 'Rheumatoid arthritis', 'Dysmenorrhea', 'Gout flare', 'Pericarditis'],
    ['GI ulceration/bleeding', 'Renal impairment', 'Hypertension', 'Cardiovascular events (MI, stroke)', 'Platelet dysfunction', 'Fluid retention', 'Hepatotoxicity', 'Bronchospasm (aspirin-exacerbated respiratory disease)'],
    ['Active GI bleeding', 'Severe renal impairment', 'Post-CABG surgery (FDA black box)', 'Third trimester of pregnancy', 'Aspirin-sensitive asthma (for non-selective)'],
    ['Renal function', 'Blood pressure', 'GI symptoms', 'CBC if prolonged use', 'LFTs periodically'],
    'Take with food or milk to reduce stomach upset. Use the lowest effective dose for the shortest duration. Avoid combining different NSAIDs. Report black stools, severe stomach pain, or swelling.',
    'Naproxen has the most favorable cardiovascular safety profile among NSAIDs. Ketorolac should not exceed 5 days of use due to GI and renal risks. The "triple whammy" (NSAID + ACE/ARB + diuretic) dramatically increases acute kidney injury risk.',
  ),

  dmards: dc(
    'dmards', 'Disease-Modifying Antirheumatic Drugs (DMARDs)', 'Farmacos antireumaticos modificadores de la enfermedad',
    'musculoskeletal',
    'DMARDs suppress the underlying immune-mediated inflammatory process in rheumatoid arthritis and other autoimmune diseases. Unlike NSAIDs, they slow disease progression and prevent joint destruction. Methotrexate is the anchor drug.',
    'Conventional DMARDs: Methotrexate inhibits dihydrofolate reductase and aminoimidazole carboxamide ribonucleotide transformylase, increasing adenosine release (anti-inflammatory) and inhibiting lymphocyte proliferation. Hydroxychloroquine inhibits TLR signaling and antigen processing in lysosomes. Sulfasalazine and leflunomide suppress T-cell proliferation via distinct mechanisms. Biologic DMARDs target specific cytokines (TNF-alpha, IL-6, IL-17) or immune cells (B cells, T-cell costimulation).',
    'Methotrexate',
    ['Methotrexate', 'Hydroxychloroquine', 'Sulfasalazine', 'Leflunomide', 'Adalimumab', 'Etanercept', 'Tofacitinib (JAK inhibitor)'],
    ['Rheumatoid arthritis', 'Psoriatic arthritis', 'Ankylosing spondylitis', 'SLE (hydroxychloroquine)', 'Inflammatory bowel disease (some agents)', 'Juvenile idiopathic arthritis'],
    ['Immunosuppression/infections', 'Hepatotoxicity (methotrexate)', 'Myelosuppression', 'GI intolerance', 'Retinal toxicity (hydroxychloroquine)', 'Teratogenicity (methotrexate, leflunomide)', 'Injection site reactions (biologics)', 'Reactivation of TB/hepatitis B (biologics)'],
    ['Active serious infection', 'Pregnancy (methotrexate Category X)', 'Severe hepatic/renal impairment', 'Bone marrow suppression', 'Immunodeficiency states'],
    ['CBC with differential', 'LFTs and renal function (methotrexate)', 'Annual eye exams (hydroxychloroquine)', 'TB screening before biologics', 'Hepatitis B/C screening', 'Chest X-ray at baseline'],
    'Do not take methotrexate daily (it is a weekly medication). Take folic acid as directed to reduce side effects. Avoid alcohol. Use effective contraception. Report fever, sore throat, or unusual bleeding.',
    'Methotrexate is dosed WEEKLY, not daily; daily dosing is a dangerous and potentially fatal medication error. Always supplement with folic acid 1mg daily (or leucovorin if significant toxicity). Onset of benefit takes 6-12 weeks.',
  ),

  // ── Infectious (3) ──────────────────────────

  penicillins: dc(
    'penicillins', 'Penicillins', 'Penicilinas',
    'infectious',
    'Penicillins are beta-lactam antibiotics that inhibit bacterial cell wall synthesis by binding penicillin-binding proteins (PBPs). This prevents cross-linking of peptidoglycan, leading to osmotic lysis and bactericidal killing.',
    'Beta-lactam ring mimics the D-Ala-D-Ala substrate of transpeptidase (PBP), forming a covalent acyl-enzyme complex that irreversibly inhibits the enzyme. Without peptidoglycan cross-linking, the cell wall cannot withstand osmotic pressure, causing lysis. Bactericidal and time-dependent (efficacy depends on time above MIC). Resistance primarily via beta-lactamase production (overcome by beta-lactamase inhibitors: clavulanate, sulbactam, tazobactam) or altered PBPs (MRSA).',
    'Amoxicillin',
    ['Amoxicillin', 'Amoxicillin-clavulanate', 'Ampicillin', 'Ampicillin-sulbactam', 'Piperacillin-tazobactam', 'Penicillin V', 'Penicillin G', 'Nafcillin', 'Dicloxacillin'],
    ['Streptococcal pharyngitis', 'Otitis media', 'Sinusitis', 'Pneumonia', 'UTI (ampicillin)', 'Skin/soft tissue infections', 'Endocarditis (penicillin G)', 'Syphilis (penicillin G)', 'Intra-abdominal infections (piperacillin-tazobactam)'],
    ['Diarrhea', 'Nausea', 'Rash (maculopapular, especially with EBV)', 'Allergic reactions (urticaria to anaphylaxis)', 'C. difficile infection', 'Interstitial nephritis (rare)', 'Seizures (high-dose penicillin G)'],
    ['Penicillin allergy (true IgE-mediated)', 'History of anaphylaxis to any beta-lactam'],
    ['Allergic reactions', 'Renal function (dose adjust)', 'CBC with prolonged use', 'Signs of C. difficile (prolonged diarrhea)'],
    'Complete the full course even if feeling better. Take amoxicillin with or without food. Report rash, itching, difficulty breathing, or prolonged diarrhea.',
    'The cross-reactivity rate between penicillins and cephalosporins is ~2% (much lower than the historically quoted 10%). Most reported penicillin allergies are not true IgE-mediated reactions; penicillin skin testing can safely de-label ~90% of patients.',
  ),

  fluoroquinolones: dc(
    'fluoroquinolones', 'Fluoroquinolones', 'Fluoroquinolonas',
    'infectious',
    'Fluoroquinolones inhibit bacterial DNA gyrase (topoisomerase II) and topoisomerase IV, preventing DNA supercoiling, replication, and transcription. They are bactericidal with concentration-dependent killing.',
    'DNA gyrase (Gram-negative target) introduces negative supercoils for DNA replication; topoisomerase IV (Gram-positive target) decatenates daughter chromosomes. Fluoroquinolones stabilize the enzyme-DNA cleavage complex, creating double-strand breaks that trigger SOS response and cell death. Concentration-dependent killing with a long post-antibiotic effect. Excellent tissue penetration, including prostate, bone, and respiratory tract.',
    'Ciprofloxacin',
    ['Ciprofloxacin', 'Levofloxacin', 'Moxifloxacin', 'Delafloxacin'],
    ['Complicated UTI', 'Bacterial prostatitis', 'Community-acquired pneumonia (respiratory FQs)', 'Intra-abdominal infections', 'Bone/joint infections', 'Anthrax'],
    ['Tendinopathy and tendon rupture', 'QTc prolongation', 'Peripheral neuropathy', 'CNS effects (seizures, psychosis)', 'Aortic aneurysm/dissection risk', 'Dysglycemia', 'C. difficile infection', 'Photosensitivity', 'Musculoskeletal effects in children'],
    ['Myasthenia gravis (may worsen)', 'Concurrent class IA/III antiarrhythmics', 'Known QTc prolongation', 'Children (relative; growth plate concerns)'],
    ['Tendon pain or swelling', 'Neurologic symptoms', 'Blood glucose in diabetics', 'QTc if risk factors', 'Signs of aortic dissection (chest/back pain)'],
    'Stop immediately and contact doctor if you experience tendon pain, numbness/tingling, or muscle weakness. Avoid direct sunlight. Do not take with dairy, antacids, or iron supplements (separate by 2 hours). Stay well hydrated.',
    'FDA black box warns of disabling and potentially irreversible side effects (tendinitis, neuropathy, CNS effects). Reserve fluoroquinolones for conditions without safer alternatives. Risk of tendon rupture is increased in patients over 60, on corticosteroids, or with organ transplants.',
  ),

  macrolides: dc(
    'macrolides', 'Macrolide Antibiotics', 'Antibioticos macrolidos',
    'infectious',
    'Macrolides bind the 50S ribosomal subunit, blocking translocation of peptidyl-tRNA and inhibiting bacterial protein synthesis. They are bacteriostatic at usual doses and bactericidal at high concentrations against some organisms.',
    'Reversible binding to the 23S rRNA of the 50S ribosomal subunit blocks the peptide exit tunnel and inhibits translocation (movement of ribosome along mRNA). Primarily bacteriostatic. Additional immunomodulatory/anti-inflammatory properties: reduce neutrophil chemotaxis, cytokine production, and mucus secretion. This explains benefit in diffuse panbronchiolitis and cystic fibrosis independent of antimicrobial activity.',
    'Azithromycin',
    ['Azithromycin', 'Clarithromycin', 'Erythromycin', 'Fidaxomicin (structural macrolide for C. diff)'],
    ['Community-acquired pneumonia', 'Streptococcal pharyngitis (penicillin-allergic)', 'Sinusitis', 'Chlamydia', 'Mycobacterium avium complex (MAC)', 'H. pylori (clarithromycin)', 'Pertussis', 'Gastroparesis (erythromycin, prokinetic)'],
    ['GI upset (nausea, diarrhea, abdominal pain)', 'QTc prolongation (azithromycin, erythromycin)', 'Hepatotoxicity', 'Ototoxicity (high-dose, reversible)', 'Drug interactions (CYP3A4 inhibition: clarithromycin, erythromycin)', 'Infantile hypertrophic pyloric stenosis (erythromycin in neonates)'],
    ['History of QTc prolongation', 'Concurrent QTc-prolonging drugs', 'Cholestatic jaundice from prior macrolide use', 'Myasthenia gravis (relative)'],
    ['QTc if risk factors', 'LFTs if prolonged use', 'Drug interaction check (clarithromycin, erythromycin)', 'Hearing (high doses)'],
    'Take azithromycin on an empty stomach or with food. Complete the full course. Report irregular heartbeat, severe diarrhea, or yellowing of skin/eyes.',
    'Azithromycin has minimal CYP450 interaction unlike erythromycin and clarithromycin. Its long tissue half-life (68 hours) allows short courses (Z-pack: 5 days). Clarithromycin interacts significantly with statins metabolized by CYP3A4 (simvastatin, lovastatin); use azithromycin instead.',
  ),
};

// ============================================
// Utility Functions
// ============================================

/**
 * Retrieve a drug class entry by its ID.
 * Returns undefined if not found.
 */
export function getDrugClass(id: string): DrugClassEntry | undefined {
  return DRUG_CLASSES[id];
}

/**
 * Search drug classes by a case-insensitive query string.
 * Matches against name, nameEs, prototypeDrug, commonDrugs, indications, and mechanism.
 */
export function searchDrugClasses(query: string): DrugClassEntry[] {
  const q = query.toLowerCase();
  return Object.values(DRUG_CLASSES).filter((entry) => {
    return (
      entry.name.toLowerCase().includes(q) ||
      entry.nameEs.toLowerCase().includes(q) ||
      entry.prototypeDrug.toLowerCase().includes(q) ||
      entry.commonDrugs.some((d) => d.toLowerCase().includes(q)) ||
      entry.indications.some((i) => i.toLowerCase().includes(q)) ||
      entry.mechanism.toLowerCase().includes(q) ||
      entry.category.toLowerCase().includes(q)
    );
  });
}

/**
 * Get all drug classes belonging to a specific category.
 */
export function getDrugClassesByCategory(
  category: DrugClassEntry['category'],
): DrugClassEntry[] {
  return Object.values(DRUG_CLASSES).filter((entry) => entry.category === category);
}

/**
 * Get total number of drug classes in the database.
 */
export function getDrugClassCount(): number {
  return Object.keys(DRUG_CLASSES).length;
}
