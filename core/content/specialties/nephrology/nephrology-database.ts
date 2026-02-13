/**
 * Biological Self — Nephrology Specialty Database
 * 45 entries covering glomerular, tubular, vascular, electrolyte,
 * AKI, CKD, dialysis, transplant, and congenital kidney disorders.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type NephrologyCategory =
  | 'glomerular' | 'tubular' | 'vascular' | 'electrolyte'
  | 'aki' | 'ckd' | 'dialysis' | 'transplant' | 'congenital';

export interface NephrologyEntry {
  id: string;
  name: string;
  nameEs: string;
  category: NephrologyCategory;
  icd11: string;
  description: string;
  pathophysiology: string;
  clinicalFeatures: string[];
  diagnostics: string[];
  treatment: string[];
  complications: string[];
  patientExplanation: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const neph = (
  id: string, name: string, nameEs: string, category: NephrologyCategory,
  icd11: string, description: string, pathophysiology: string,
  clinicalFeatures: string[], diagnostics: string[], treatment: string[],
  complications: string[], patientExplanation: string,
): NephrologyEntry => ({
  id, name, nameEs, category, icd11, description, pathophysiology,
  clinicalFeatures, diagnostics, treatment, complications, patientExplanation,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const NEPHROLOGY_ENTRIES: Record<string, NephrologyEntry> = {

  // ===== GLOMERULAR (10) ====================================================

  'nephrotic-syndrome': neph(
    'nephrotic-syndrome', 'Nephrotic Syndrome', 'Síndrome nefrótico', 'glomerular',
    'GB40',
    'Glomerular disorder defined by heavy proteinuria (>3.5 g/day), hypoalbuminemia, edema, and hyperlipidemia.',
    'Podocyte injury increases glomerular permeability to proteins. Albumin loss reduces oncotic pressure causing edema. Liver compensates with increased lipoprotein synthesis. Loss of antithrombin III and immunoglobulins raises thrombotic and infection risk.',
    ['Periorbital and peripheral edema', 'Frothy urine', 'Weight gain from fluid retention', 'Fatigue and malaise', 'Hyperlipidemia (xanthelasma)'],
    ['24h urine protein >3.5 g or urine protein/creatinine ratio >3.5', 'Serum albumin <3.0 g/dL', 'Lipid panel (elevated LDL and cholesterol)', 'Renal biopsy for adults', 'Complement levels, ANA, hepatitis serologies'],
    ['ACE inhibitor or ARB for proteinuria reduction', 'Corticosteroids (etiology-dependent)', 'Diuretics for edema management', 'Statins for hyperlipidemia', 'Anticoagulation if albumin <2.0 g/dL or thrombotic event'],
    ['Venous thromboembolism (renal vein thrombosis)', 'Spontaneous bacterial peritonitis', 'Acute kidney injury', 'Hyperlipidemia-associated atherosclerosis', 'Protein malnutrition'],
    'Your kidneys are leaking too much protein into the urine, causing swelling and low blood protein. Medications reduce the leak and manage swelling.',
  ),

  'nephritic-syndrome': neph(
    'nephritic-syndrome', 'Nephritic Syndrome', 'Síndrome nefrítico', 'glomerular',
    'GB40.Z',
    'Inflammatory glomerular disease presenting with hematuria, hypertension, oliguria, and mild-moderate proteinuria.',
    'Immune-complex deposition or antibody-mediated injury triggers inflammation in glomerular capillaries. Neutrophil infiltration damages the basement membrane, causing RBC leakage. Reduced GFR leads to salt/water retention.',
    ['Cola-colored or tea-colored urine (hematuria)', 'Hypertension', 'Oliguria', 'Periorbital edema (mild)', 'Mild-moderate proteinuria (<3.5 g/day)'],
    ['Urinalysis: dysmorphic RBCs, RBC casts', 'Serum creatinine and BUN (elevated)', 'Complement levels (C3, C4)', 'ASO titer and anti-DNase B (post-streptococcal)', 'Renal biopsy if etiology unclear'],
    ['Treat underlying cause', 'Salt and fluid restriction', 'Antihypertensives (ACE inhibitor preferred)', 'Loop diuretics for volume overload', 'Immunosuppression for rapidly progressive forms'],
    ['Rapidly progressive glomerulonephritis', 'Hypertensive encephalopathy', 'Pulmonary edema', 'Chronic kidney disease', 'Uremia'],
    'Inflammation in your kidney filters causes blood in the urine and high blood pressure. Treatment targets the underlying cause and controls blood pressure.',
  ),

  'iga-nephropathy': neph(
    'iga-nephropathy', 'IgA Nephropathy (Berger Disease)', 'Nefropatía por IgA', 'glomerular',
    'GB41.0',
    'Most common primary glomerulonephritis worldwide; IgA deposition in mesangium causes recurrent hematuria.',
    'Galactose-deficient IgA1 forms immune complexes that deposit in the mesangium, activating complement via the alternative and lectin pathways. Mesangial proliferation and matrix expansion cause progressive injury.',
    ['Episodic gross hematuria (often with URI)', 'Persistent microscopic hematuria', 'Mild to moderate proteinuria', 'Hypertension', 'Flank pain during episodes'],
    ['Urinalysis: hematuria with or without proteinuria', 'Serum IgA elevated in ~50%', 'Normal complement levels', 'Renal biopsy: mesangial IgA deposits on immunofluorescence', 'Oxford MEST-C classification for prognosis'],
    ['ACE inhibitor or ARB (first-line for proteinuria >0.5 g/day)', 'SGLT2 inhibitors for proteinuria reduction', 'Corticosteroids if proteinuria persists despite RAAS blockade', 'Fish oil (supportive evidence)', 'Targeted-release budesonide (Nefecon) for persistent proteinuria'],
    ['Progressive CKD (20-40% reach ESRD in 20 years)', 'Nephrotic-range proteinuria', 'Rapidly progressive crescentic form', 'Recurrence in transplant kidney', 'Henoch-Schonlein purpura (systemic IgA vasculitis)'],
    'IgA deposits in your kidney filters cause blood in the urine, especially during colds. Blood pressure and protein control protect the kidneys long-term.',
  ),

  'membranous-nephropathy': neph(
    'membranous-nephropathy', 'Membranous Nephropathy', 'Nefropatía membranosa', 'glomerular',
    'GB42.0',
    'Common cause of nephrotic syndrome in adults; immune-complex deposition along glomerular basement membrane.',
    'Anti-PLA2R antibodies (primary, ~70%) or secondary causes (hepatitis B, SLE, malignancy, drugs) form subepithelial immune deposits. Complement activation via C5b-9 damages podocytes without inflammatory cell infiltration.',
    ['Nephrotic syndrome (edema, proteinuria, hypoalbuminemia)', 'Frothy urine', 'Fatigue', 'Renal vein thrombosis risk', 'Insidious onset over weeks to months'],
    ['Anti-PLA2R antibodies (positive in ~70% primary cases)', '24h urine protein (nephrotic range)', 'Serum albumin (low)', 'Renal biopsy: subepithelial deposits, GBM thickening, IF granular IgG/C3', 'Screen for secondary causes (hepatitis B/C, ANA, cancer screening)'],
    ['Conservative therapy for 6 months (ACE/ARB, diuretics, statins)', 'Rituximab (first-line immunosuppressive)', 'Cyclophosphamide + corticosteroids (Ponticelli protocol)', 'Calcineurin inhibitors (tacrolimus or cyclosporine)', 'Anticoagulation if albumin <2.5 g/dL'],
    ['ESRD (30-40% without treatment)', 'Renal vein thrombosis and PE', 'Infections from immunosuppression and hypogammaglobulinemia', 'Spontaneous remission (up to 30%)', 'Secondary malignancy (screen in age >65)'],
    'Antibodies attack your kidney filters, causing protein loss in urine. Some cases resolve on their own; others need immune-suppressing medication.',
  ),

  'fsgs': neph(
    'fsgs', 'Focal Segmental Glomerulosclerosis (FSGS)', 'Glomeruloesclerosis focal y segmentaria', 'glomerular',
    'GB43',
    'Podocyte injury pattern causing segmental sclerosis of glomeruli; leading cause of nephrotic syndrome in African Americans.',
    'Primary FSGS involves circulating permeability factor damaging podocytes. Secondary FSGS results from adaptive hyperfiltration (obesity, reflux, reduced nephron mass) or genetic podocin/nephrin mutations. APOL1 risk variants common in African descent.',
    ['Nephrotic-range proteinuria', 'Edema', 'Hypertension', 'Microscopic hematuria (occasional)', 'Progressive renal insufficiency'],
    ['Urine protein/creatinine ratio (nephrotic range)', 'Serum albumin (low)', 'Renal biopsy: segmental sclerosis, podocyte effacement on EM', 'APOL1 genotyping in African-descent patients', 'Rule out secondary causes (HIV, obesity, drugs)'],
    ['Corticosteroids (prolonged course, 4-6 months)', 'Calcineurin inhibitors (cyclosporine/tacrolimus) for steroid-resistant', 'ACE inhibitor or ARB', 'SGLT2 inhibitors', 'Rituximab or mycophenolate for refractory cases'],
    ['ESRD (50% at 10 years if steroid-resistant)', 'High recurrence rate in transplant (30-40%)', 'Steroid side effects', 'Cardiovascular disease', 'Collapsing variant (aggressive, HIV-associated)'],
    'Parts of your kidney filters are scarring, leaking protein. Treatment aims to stop the protein loss and slow kidney damage.',
  ),

  'minimal-change-disease': neph(
    'minimal-change-disease', 'Minimal Change Disease', 'Enfermedad de cambios mínimos', 'glomerular',
    'GB44',
    'Most common cause of nephrotic syndrome in children; podocyte effacement without structural changes on light microscopy.',
    'T-cell-derived circulating factor damages podocyte foot processes, causing effacement and loss of the charge barrier. Glomeruli appear normal on light microscopy; electron microscopy shows diffuse foot process effacement.',
    ['Sudden-onset nephrotic syndrome', 'Massive edema (anasarca in severe cases)', 'Frothy urine', 'Normal blood pressure (usually)', 'No hematuria typically'],
    ['Urinalysis: heavy proteinuria, no RBCs', 'Serum albumin very low', 'Normal complement levels', 'Children: clinical diagnosis, biopsy not needed initially', 'Adults: renal biopsy (EM: foot process effacement, normal LM)'],
    ['Prednisone 1 mg/kg/day for 4-6 weeks, then taper', 'Cyclophosphamide for frequent relapsers', 'Calcineurin inhibitors for steroid-dependent', 'Rituximab for refractory cases', 'Diuretics and albumin infusions for severe edema'],
    ['Frequent relapses (50-75% of children)', 'Steroid toxicity (cushingoid, growth retardation)', 'Infection risk', 'Thromboembolism', 'Acute kidney injury from intravascular depletion'],
    'Your kidney filters look normal under regular microscope but have tiny damage visible only with powerful microscopes. Steroids usually work very well.',
  ),

  'lupus-nephritis': neph(
    'lupus-nephritis', 'Lupus Nephritis', 'Nefritis lúpica', 'glomerular',
    'GB43.1',
    'Renal manifestation of SLE; immune-complex glomerulonephritis classified into 6 classes (ISN/RPS).',
    'Anti-dsDNA and other autoantibodies form immune complexes that deposit in glomeruli (mesangial, subendothelial, subepithelial). Complement activation causes inflammation. Class III/IV (proliferative) are most severe; Class V is membranous.',
    ['Proteinuria and hematuria', 'Edema and hypertension', 'Elevated creatinine', 'Active urine sediment (RBC casts)', 'Concurrent SLE features (rash, arthritis, serositis)'],
    ['Anti-dsDNA antibodies (elevated, correlates with activity)', 'Complement C3/C4 (low with active disease)', 'Urinalysis with microscopy', 'Renal biopsy (ISN/RPS classification essential)', 'Serum creatinine and urine protein quantification'],
    ['Class I/II: supportive, treat SLE', 'Class III/IV: mycophenolate or cyclophosphamide induction + steroids', 'Class V: rituximab or calcineurin inhibitor + mycophenolate', 'Maintenance: mycophenolate or azathioprine', 'Voclosporin or belimumab as add-on therapy'],
    ['ESRD (10-30% of Class IV)', 'Relapse and flare', 'Infections from immunosuppression', 'Antiphospholipid syndrome-related thrombosis', 'Cardiovascular disease'],
    'Lupus can attack your kidneys. A biopsy shows how severe the damage is and guides the right immune-suppressing treatment.',
  ),

  'anca-vasculitis': neph(
    'anca-vasculitis', 'ANCA-Associated Vasculitis (Renal)', 'Vasculitis asociada a ANCA (renal)', 'glomerular',
    '4A44.0',
    'Pauci-immune necrotizing and crescentic glomerulonephritis caused by anti-neutrophil cytoplasmic antibodies.',
    'ANCA (MPO-p-ANCA or PR3-c-ANCA) activate neutrophils that damage small vessel walls. In kidneys, this causes focal necrotizing glomerulonephritis with crescent formation but minimal immune deposits (pauci-immune). Includes GPA, MPA, and EGPA.',
    ['Rapidly progressive renal failure', 'Hematuria and proteinuria', 'Systemic symptoms (fever, weight loss, malaise)', 'Pulmonary hemorrhage (pulmonary-renal syndrome)', 'Sinusitis, nasal ulcers (GPA)'],
    ['ANCA testing (MPO or PR3 specificity)', 'Serum creatinine (rapidly rising)', 'Urinalysis: RBC casts, dysmorphic RBCs', 'Renal biopsy: crescentic GN, pauci-immune IF', 'Chest imaging for pulmonary involvement'],
    ['Induction: cyclophosphamide or rituximab + high-dose glucocorticoids', 'Plasma exchange for severe disease or pulmonary hemorrhage', 'Maintenance: rituximab or azathioprine for 2+ years', 'Avacopan (C5a receptor inhibitor) as steroid-sparing', 'Dialysis if ESRD at presentation (may recover)'],
    ['ESRD (25% at 5 years)', 'Relapse (50% with PR3-ANCA)', 'Pulmonary hemorrhage mortality', 'Infections from immunosuppression', 'Cardiovascular disease'],
    'Your immune system attacks small blood vessels in the kidneys. Quick treatment with immune-suppressing drugs can stop the damage and sometimes restore kidney function.',
  ),

  'anti-gbm-disease': neph(
    'anti-gbm-disease', 'Anti-GBM Disease (Goodpasture Syndrome)', 'Enfermedad anti-MBG (síndrome de Goodpasture)', 'glomerular',
    'GB45',
    'Autoimmune disease with antibodies against type IV collagen in glomerular and alveolar basement membranes.',
    'IgG autoantibodies target the NC1 domain of alpha-3 chain of type IV collagen. Linear IgG deposition along GBM causes rapidly progressive crescentic glomerulonephritis. Pulmonary involvement (Goodpasture syndrome) requires concurrent alveolar injury (smoking, infection).',
    ['Rapidly progressive renal failure', 'Hemoptysis (pulmonary involvement)', 'Hematuria and proteinuria', 'Dyspnea', 'Constitutional symptoms'],
    ['Anti-GBM antibodies (serum, highly specific)', 'Renal biopsy: crescentic GN with linear IgG on IF', 'Chest X-ray: bilateral alveolar infiltrates if pulmonary', 'Serum creatinine (often markedly elevated)', 'Check concurrent ANCA (30% double-positive)'],
    ['Plasma exchange (daily for 14 days to remove antibodies)', 'Cyclophosphamide + high-dose corticosteroids', 'Dialysis if anuric at presentation', 'Lung-protective measures (stop smoking)', 'Transplant after antibodies undetectable for 6+ months'],
    ['ESRD (frequent if creatinine >5.7 or dialysis-dependent at diagnosis)', 'Fatal pulmonary hemorrhage', 'Infections from immunosuppression', 'Relapse (rare once antibodies cleared)', 'Poor renal recovery if >50% crescents on biopsy'],
    'Antibodies attack your kidney and sometimes lung membranes. Plasma exchange removes the harmful antibodies, and medications prevent new ones from forming.',
  ),

  'diabetic-nephropathy': neph(
    'diabetic-nephropathy', 'Diabetic Nephropathy', 'Nefropatía diabética', 'glomerular',
    'GB40.0',
    'Leading cause of ESRD worldwide; progressive kidney disease from chronic hyperglycemia and hemodynamic changes.',
    'Hyperglycemia causes hyperfiltration via afferent arteriolar dilation, mesangial expansion, GBM thickening, and podocyte loss. AGE products, PKC activation, and TGF-beta drive fibrosis. Nodular glomerulosclerosis (Kimmelstiel-Wilson) is pathognomonic.',
    ['Initially asymptomatic with microalbuminuria', 'Progressive proteinuria', 'Hypertension', 'Edema in advanced stages', 'Concurrent retinopathy (strong correlation)'],
    ['Urine albumin-to-creatinine ratio (UACR) screening annually', 'eGFR calculation', 'Fundoscopic exam (diabetic retinopathy supports diagnosis)', 'HbA1c', 'Biopsy rarely needed (typical presentation in longstanding diabetes)'],
    ['SGLT2 inhibitors (dapagliflozin, empagliflozin) — renoprotective', 'ACE inhibitor or ARB (first-line for albuminuria)', 'Finerenone (non-steroidal MRA)', 'GLP-1 receptor agonists', 'Strict glycemic control (HbA1c <7%) and BP <130/80'],
    ['ESRD requiring dialysis or transplant', 'Cardiovascular disease (leading cause of death)', 'Hypoglycemia with declining GFR (reduced insulin clearance)', 'Hyperkalemia from RAAS inhibition', 'Nephrotic syndrome'],
    'Long-standing diabetes can damage kidney filters over time. Newer medications (SGLT2 inhibitors, finerenone) significantly slow this process along with blood sugar and blood pressure control.',
  ),

  // ===== TUBULAR (5) ========================================================

  'acute-tubular-necrosis': neph(
    'acute-tubular-necrosis', 'Acute Tubular Necrosis (ATN)', 'Necrosis tubular aguda', 'tubular',
    'GB90.0',
    'Most common cause of intrinsic AKI; ischemic or nephrotoxic injury to renal tubular epithelial cells.',
    'Ischemic ATN: prolonged renal hypoperfusion (shock, surgery) causes tubular cell death, especially at S3 segment and medullary thick ascending limb. Nephrotoxic ATN: aminoglycosides, contrast, cisplatin directly damage tubular cells. Muddy brown casts are hallmark.',
    ['Oliguria or non-oliguria depending on cause', 'Rising creatinine over days', 'Urine output may fluctuate (initiation, maintenance, recovery phases)', 'Volume overload if oliguric', 'History of hypotension, surgery, or nephrotoxin exposure'],
    ['Urinalysis: muddy brown granular casts, renal tubular epithelial cells', 'Fractional excretion of sodium (FENa) >2%', 'BUN/creatinine ratio <20:1', 'Urine osmolality <350 mOsm/kg', 'Urine sodium >40 mEq/L'],
    ['Supportive care (no specific therapy)', 'IV fluids for volume repletion if hypovolemic', 'Discontinue nephrotoxins', 'Avoid further renal insults', 'Dialysis if indicated (refractory hyperkalemia, acidosis, volume overload)'],
    ['Need for dialysis', 'Electrolyte derangements (hyperkalemia, metabolic acidosis)', 'Volume overload and pulmonary edema', 'CKD from incomplete recovery', 'Death (in-hospital mortality 30-50% in ICU setting)'],
    'Kidney tubes were injured by low blood flow or a toxic substance. Most patients recover kidney function with supportive care over days to weeks.',
  ),

  'renal-tubular-acidosis': neph(
    'renal-tubular-acidosis', 'Renal Tubular Acidosis (Types 1-4)', 'Acidosis tubular renal (tipos 1-4)', 'tubular',
    'GB90.4',
    'Group of disorders with impaired renal acid excretion or bicarbonate reabsorption causing non-anion-gap metabolic acidosis.',
    'Type 1 (distal): impaired H+ secretion in collecting duct (urine pH >5.5). Type 2 (proximal): impaired HCO3 reabsorption in proximal tubule. Type 4 (hyperkalemic): aldosterone deficiency or resistance. Normal anion gap metabolic acidosis in all types.',
    ['Type 1: nephrocalcinosis, kidney stones, hypokalemia', 'Type 2: rickets/osteomalacia, growth failure, Fanconi features', 'Type 4: hyperkalemia, mild acidosis', 'Fatigue and muscle weakness', 'Growth retardation in children'],
    ['ABG/BMP: non-anion gap metabolic acidosis (normal AG)', 'Urine pH: >5.5 in type 1 during acidosis, <5.5 in type 2 and 4', 'Serum potassium: low (types 1,2) or high (type 4)', 'Urine anion gap: positive (impaired NH4+ excretion)', 'Serum aldosterone and renin levels (type 4)'],
    ['Type 1: oral bicarbonate or citrate (1-2 mEq/kg/day)', 'Type 2: large bicarbonate doses + thiazide diuretic', 'Type 4: fludrocortisone if hypoaldosteronism, or sodium bicarbonate', 'Potassium management (supplement types 1-2, restrict type 4)', 'Treat underlying cause (discontinue offending drug, manage diabetes)'],
    ['Nephrocalcinosis and nephrolithiasis (type 1)', 'Osteomalacia and bone disease', 'Growth failure in children', 'Cardiac arrhythmia from potassium abnormalities', 'Progressive CKD'],
    'Your kidneys have difficulty managing acid balance. Taking bicarbonate supplements helps neutralize the extra acid and prevents bone and kidney stone problems.',
  ),

  'fanconi-syndrome': neph(
    'fanconi-syndrome', 'Fanconi Syndrome', 'Síndrome de Fanconi', 'tubular',
    'GB90.3',
    'Generalized proximal tubular dysfunction causing wasting of glucose, amino acids, phosphate, bicarbonate, and uric acid.',
    'Global impairment of proximal tubular reabsorption from inherited (cystinosis, Wilson disease, galactosemia) or acquired (tenofovir, ifosfamide, multiple myeloma) causes. Results in type 2 RTA, hypophosphatemia, glycosuria with normal blood glucose, and aminoaciduria.',
    ['Polyuria and polydipsia', 'Rickets or osteomalacia (phosphate wasting)', 'Growth failure in children', 'Muscle weakness from electrolyte losses', 'Metabolic acidosis'],
    ['Urinalysis: glycosuria with normal blood glucose', 'Urine amino acids (generalized aminoaciduria)', 'Serum phosphate (low), uric acid (low)', 'ABG: non-anion gap metabolic acidosis', 'Evaluate for cystinosis (slit-lamp exam, WBC cystine levels)'],
    ['Phosphate supplementation + active vitamin D (calcitriol)', 'Bicarbonate or citrate for acidosis', 'Cysteamine for cystinosis (specific treatment)', 'Discontinue offending drugs', 'Electrolyte replacement as needed (potassium, calcium)'],
    ['Severe rickets or osteomalacia', 'Growth failure and short stature', 'Renal failure (especially cystinosis if untreated)', 'Chronic electrolyte depletion', 'Nephrocalcinosis'],
    'Your kidney tubes are leaking important substances that should be reclaimed. Replacing lost minerals and treating the underlying cause helps maintain healthy bones and growth.',
  ),

  'bartter-syndrome': neph(
    'bartter-syndrome', 'Bartter Syndrome', 'Síndrome de Bartter', 'tubular',
    'GB90.1',
    'Inherited salt-wasting tubulopathy mimicking chronic loop diuretic use; autosomal recessive channelopathy.',
    'Loss-of-function mutations in thick ascending limb transporters (NKCC2, ROMK, ClC-Kb, barttin, CaSR). Impaired NaCl reabsorption causes salt wasting, volume contraction, secondary hyperaldosteronism, hypokalemic metabolic alkalosis, and hypercalciuria.',
    ['Polyuria and polydipsia', 'Failure to thrive in neonates/infants', 'Muscle weakness and cramps', 'Salt craving', 'Neonatal variant: polyhydramnios, prematurity'],
    ['Serum potassium low, bicarbonate elevated', 'Urine calcium elevated (differentiates from Gitelman)', 'Plasma renin and aldosterone elevated', 'Normal blood pressure despite hyperaldosteronism', 'Genetic testing for confirmation'],
    ['Potassium supplementation (large doses often needed)', 'NSAIDs (indomethacin) reduce prostaglandin-mediated salt wasting', 'Potassium-sparing diuretics (spironolactone, amiloride)', 'Adequate salt and fluid intake', 'ACE inhibitors (adjunctive)'],
    ['Growth retardation', 'Nephrocalcinosis from hypercalciuria', 'Chronic hypokalemia-related cardiac arrhythmias', 'Chronic kidney disease', 'Sensorineural deafness (barttin mutations)'],
    'An inherited condition causes your kidneys to lose too much salt and potassium. Supplements and certain medications help replace what is lost.',
  ),

  'gitelman-syndrome': neph(
    'gitelman-syndrome', 'Gitelman Syndrome', 'Síndrome de Gitelman', 'tubular',
    'GB90.2',
    'Inherited tubulopathy mimicking chronic thiazide diuretic use; milder than Bartter syndrome.',
    'Loss-of-function mutation of the thiazide-sensitive NaCl cotransporter (NCCT) in the distal convoluted tubule. Causes salt wasting, hypokalemic metabolic alkalosis, hypomagnesemia, and hypocalciuria. Autosomal recessive, usually presents in adolescence or adulthood.',
    ['Muscle cramps and weakness', 'Fatigue', 'Salt craving', 'Carpopedal spasm (tetany from hypomagnesemia)', 'Often asymptomatic or mild symptoms'],
    ['Serum potassium low, magnesium low', 'Urine calcium low (key distinction from Bartter)', 'Metabolic alkalosis', 'Elevated renin and aldosterone', 'Genetic testing (SLC12A3 mutation)'],
    ['Oral magnesium supplementation (lifelong)', 'Oral potassium supplementation', 'Potassium-sparing diuretics (amiloride preferred)', 'Liberal salt intake', 'NSAIDs rarely needed (unlike Bartter)'],
    ['Chondrocalcinosis (magnesium depletion)', 'Cardiac arrhythmias from hypokalemia/hypomagnesemia', 'QT prolongation', 'Growth retardation (uncommon)', 'Reduced quality of life from chronic symptoms'],
    'An inherited kidney condition causes loss of magnesium and potassium. Lifelong supplements keep levels normal and prevent muscle cramps.',
  ),

  // ===== VASCULAR (4) =======================================================

  'renal-artery-stenosis': neph(
    'renal-artery-stenosis', 'Renal Artery Stenosis', 'Estenosis de arteria renal', 'vascular',
    'BB80.0',
    'Narrowing of renal arteries causing renovascular hypertension and ischemic nephropathy; atherosclerotic (90%) or fibromuscular dysplasia.',
    'Atherosclerotic RAS: proximal artery plaque reduces perfusion, activating RAAS causing hypertension. FMD: medial fibroplasia ("string of beads") in young women. Chronic ischemia leads to kidney atrophy and CKD.',
    ['Resistant hypertension (uncontrolled on 3+ drugs)', 'Flash pulmonary edema', 'Azotemia with ACE inhibitor/ARB initiation', 'Asymmetric kidney size', 'Abdominal bruit'],
    ['Duplex ultrasonography (screening, >60% sensitivity)', 'CT angiography or MR angiography (confirmatory)', 'Captopril renogram (functional significance)', 'Renal resistive index on Doppler', 'Atherosclerotic risk factor assessment'],
    ['Medical therapy: antihypertensives (ACE/ARB with monitoring), statin, aspirin', 'Angioplasty with stenting for FMD (curative in many)', 'Atherosclerotic RAS: medical therapy preferred (CORAL trial)', 'Revascularization only for refractory HTN, flash pulmonary edema, or progressive CKD', 'Smoking cessation'],
    ['Progressive ischemic nephropathy and CKD', 'Flash pulmonary edema', 'Renal atrophy', 'Resistant hypertension', 'Stent restenosis (15-20%)'],
    'A narrowed artery reduces blood flow to your kidney, raising blood pressure. Medications control pressure; stenting may help in select cases.',
  ),

  'renal-vein-thrombosis': neph(
    'renal-vein-thrombosis', 'Renal Vein Thrombosis', 'Trombosis de vena renal', 'vascular',
    'BB81.0',
    'Thrombotic occlusion of renal veins; often associated with nephrotic syndrome, especially membranous nephropathy.',
    'Venous stasis and hypercoagulability (loss of antithrombin III in nephrotic syndrome) promote thrombus formation. Can be acute (flank pain, hematuria) or chronic (asymptomatic with collateral formation). Left renal vein more commonly affected.',
    ['Acute: flank pain, hematuria, nausea', 'Acute renal failure if bilateral', 'Chronic: often asymptomatic', 'Worsening proteinuria', 'Pulmonary embolism (presenting symptom in some)'],
    ['CT venography or MR venography (diagnostic)', 'Doppler ultrasonography (screening)', 'D-dimer (elevated but nonspecific)', 'Evaluate for nephrotic syndrome (urine protein, albumin)', 'Thrombophilia workup if no nephrotic syndrome'],
    ['Anticoagulation (heparin then warfarin or DOAC)', 'Duration: 6-12 months minimum, longer if nephrotic', 'Catheter-directed thrombolysis for acute bilateral with AKI', 'Treat underlying nephrotic syndrome', 'IVC filter if anticoagulation contraindicated'],
    ['Pulmonary embolism', 'Chronic kidney disease', 'Renal atrophy', 'Extension to IVC', 'Anticoagulant-related bleeding'],
    'A blood clot in the kidney vein impairs drainage. Blood thinners dissolve the clot and prevent it from traveling to the lungs.',
  ),

  'hus-ttp': neph(
    'hus-ttp', 'Hemolytic Uremic Syndrome (HUS)', 'Síndrome hemolítico urémico', 'vascular',
    'GB06.0',
    'Thrombotic microangiopathy characterized by microangiopathic hemolytic anemia, thrombocytopenia, and acute kidney injury.',
    'Typical HUS: Shiga toxin-producing E. coli (STEC, usually O157:H7) damages endothelium via Gb3 receptors on renal microvasculature. Atypical HUS: complement dysregulation (factor H, I, MCP mutations) causes uncontrolled complement activation on endothelium.',
    ['Bloody diarrhea (typical HUS, preceding by 5-10 days)', 'Oliguria or anuria', 'Pallor and jaundice', 'Petechiae', 'CNS involvement (seizures, altered consciousness)'],
    ['CBC: anemia with schistocytes, thrombocytopenia', 'LDH elevated, haptoglobin low', 'Creatinine elevated (AKI)', 'Stool culture and Shiga toxin assay', 'Complement studies and genetic testing for atypical HUS'],
    ['Typical HUS: supportive care (IV fluids, transfusions, dialysis as needed)', 'Avoid antibiotics and anti-motility agents in STEC-HUS', 'Atypical HUS: eculizumab or ravulizumab (anti-C5 monoclonal antibody)', 'Plasma exchange (bridging in atypical HUS)', 'Renal replacement therapy if needed'],
    ['Acute renal failure requiring dialysis (50% in typical)', 'Chronic kidney disease (25% long-term)', 'CNS complications (seizures, stroke)', 'Pancreatitis and diabetes', 'Recurrence in atypical HUS (especially post-transplant)'],
    'A toxin or immune problem damages tiny blood vessels in the kidneys. Most children with typical HUS recover with supportive care; atypical HUS requires specialized antibody treatment.',
  ),

  'malignant-hypertension-nephrosclerosis': neph(
    'malignant-hypertension-nephrosclerosis', 'Malignant Hypertension / Hypertensive Nephrosclerosis', 'Nefroesclerosis hipertensiva maligna', 'vascular',
    'BA03',
    'Severe hypertension causing acute endothelial injury with fibrinoid necrosis (malignant) or chronic arteriolar thickening (benign nephrosclerosis).',
    'Malignant: BP >180/120 with end-organ damage; fibrinoid necrosis of afferent arterioles and onion-skinning of interlobular arteries. RAAS activation creates a vicious cycle. Benign: chronic hypertension causes hyaline arteriolosclerosis and ischemic glomerular obsolescence.',
    ['Severe headache and visual changes', 'Papilledema on fundoscopy', 'Acute kidney injury with hematuria/proteinuria', 'Microangiopathic hemolytic anemia', 'Heart failure and encephalopathy'],
    ['Blood pressure (severely elevated)', 'Serum creatinine (elevated)', 'Urinalysis: proteinuria, hematuria', 'Peripheral smear: schistocytes (MAHA)', 'Fundoscopy: flame hemorrhages, papilledema (Keith-Wagener grade III/IV)'],
    ['IV antihypertensives for malignant (nicardipine, nitroprusside, labetalol)', 'Reduce MAP by 25% in first hour, then gradually to 160/100 over 24h', 'Oral antihypertensives for chronic (ACE/ARB, CCB, thiazide)', 'Dialysis if needed', 'Avoid rapid BP normalization (risk of watershed ischemia)'],
    ['ESRD (benign nephrosclerosis is 2nd leading cause of ESRD)', 'Stroke and intracranial hemorrhage', 'Aortic dissection', 'Heart failure', 'Retinal detachment'],
    'Very high blood pressure damages kidney blood vessels. Carefully lowering blood pressure in the hospital protects kidneys, brain, and heart.',
  ),

  // ===== AKI (5) =============================================================

  'prerenal-aki': neph(
    'prerenal-aki', 'Prerenal Acute Kidney Injury', 'Lesión renal aguda prerrenal', 'aki',
    'GB60',
    'AKI from reduced renal perfusion without structural damage; most common cause of AKI (~55%).',
    'Decreased effective circulating volume (dehydration, hemorrhage, heart failure, sepsis) reduces renal blood flow. Autoregulation (afferent dilation, efferent constriction) maintains GFR until perfusion drops below threshold. Tubular function is intact — kidneys avidly reabsorb sodium and water.',
    ['Oliguria', 'Thirst, dry mucous membranes, orthostatic hypotension', 'Tachycardia', 'History of volume loss, poor intake, or heart failure', 'Concentrated dark urine'],
    ['BUN/creatinine ratio >20:1', 'FENa <1% (or FEUrea <35% if on diuretics)', 'Urine osmolality >500 mOsm/kg', 'Urine sodium <20 mEq/L', 'Bland urine sediment (no casts)'],
    ['Volume resuscitation with isotonic crystalloids', 'Treat underlying cause (stop bleeding, treat sepsis, optimize cardiac output)', 'Hold nephrotoxins and adjust drug doses', 'Monitor urine output and creatinine', 'Avoid NSAIDS and RAAS inhibitors during acute episode'],
    ['Progression to ATN if prolonged ischemia', 'Electrolyte derangements', 'Volume overload from over-resuscitation', 'Cardiorenal syndrome', 'Multi-organ dysfunction'],
    'Your kidneys are not getting enough blood flow. Restoring fluids and treating the underlying cause usually reverses the problem quickly.',
  ),

  'intrinsic-aki': neph(
    'intrinsic-aki', 'Intrinsic Acute Kidney Injury', 'Lesión renal aguda intrínseca', 'aki',
    'GB61',
    'AKI from direct structural damage to glomeruli, tubules, interstitium, or renal vasculature.',
    'Causes include ATN (ischemic/nephrotoxic, most common), acute interstitial nephritis (drug-induced), glomerulonephritis, and vascular (TMA, cholesterol emboli). Each has distinct urinary findings. Intrinsic AKI accounts for ~40% of hospital AKI.',
    ['Oliguria or non-oliguria', 'Rising creatinine unresponsive to fluids', 'Abnormal urine sediment', 'History of nephrotoxin, drug allergy, or systemic disease', 'Flank pain (some causes)'],
    ['FENa >2%, urine sodium >40', 'Urinalysis: casts (muddy brown = ATN, WBC = AIN, RBC = GN)', 'Urine eosinophils (AIN)', 'Serologic workup (ANA, ANCA, complement, anti-GBM)', 'Renal biopsy if etiology unclear'],
    ['Discontinue offending agents', 'Disease-specific therapy (steroids for AIN, immunosuppression for GN)', 'Supportive care and electrolyte management', 'Renal replacement therapy if indicated', 'Avoid further nephrotoxic insults'],
    ['Need for chronic dialysis', 'Transition to CKD', 'Hyperkalemia and metabolic acidosis', 'Volume overload and pulmonary edema', 'Uremic complications'],
    'Direct damage to the kidney tissue is causing it to malfunction. Identifying and treating the specific cause gives the best chance of recovery.',
  ),

  'postrenal-aki': neph(
    'postrenal-aki', 'Postrenal (Obstructive) AKI', 'Lesión renal aguda postrenal', 'aki',
    'GB62',
    'AKI from urinary tract obstruction; must be bilateral (or unilateral in single kidney) to cause significant azotemia.',
    'Obstruction increases intratubular pressure, initially causing afferent arteriolar dilation then constriction. Prolonged obstruction leads to tubular atrophy and interstitial fibrosis. Common causes: BPH, kidney stones, pelvic malignancy, retroperitoneal fibrosis.',
    ['Anuria or fluctuating urine output', 'Suprapubic pain or fullness', 'Flank pain (stones, hydronephrosis)', 'History of BPH, pelvic surgery, or malignancy', 'Palpable bladder on exam'],
    ['Renal ultrasound: hydronephrosis (bilateral or unilateral)', 'Post-void residual volume (elevated if bladder outlet obstruction)', 'Serum creatinine (elevated)', 'CT abdomen/pelvis without contrast if stone suspected', 'Electrolytes (hyperkalemia, type 4 RTA pattern)'],
    ['Bladder catheterization (if lower tract obstruction)', 'Percutaneous nephrostomy or ureteral stent (upper tract)', 'Monitor for post-obstructive diuresis', 'IV fluids to match urine output in diuresis phase', 'Definitive treatment of obstruction cause'],
    ['Post-obstructive diuresis (massive fluid/electrolyte losses)', 'Permanent renal damage if obstruction >2 weeks', 'Infection (pyonephrosis)', 'Hyperkalemia and metabolic acidosis', 'Chronic kidney disease from prolonged obstruction'],
    'Something is blocking urine flow, causing pressure buildup that hurts the kidneys. Relieving the blockage usually restores function, especially if caught early.',
  ),

  'contrast-nephropathy': neph(
    'contrast-nephropathy', 'Contrast-Induced Nephropathy', 'Nefropatía por contraste', 'aki',
    'GB90.Y',
    'AKI occurring 24-72 hours after iodinated contrast administration; creatinine peaks at 3-5 days.',
    'Contrast causes renal vasoconstriction (reducing medullary blood flow), direct tubular toxicity from osmotic load, and reactive oxygen species generation. Risk factors: pre-existing CKD, diabetes, volume depletion, large contrast volume, repeated exposure.',
    ['Often asymptomatic — detected by lab monitoring', 'Oliguria (uncommon)', 'Creatinine rise 24-72h post-contrast', 'Non-oliguric AKI (most common pattern)', 'Recovery within 7-14 days typically'],
    ['Serum creatinine rise >0.3 mg/dL or >25% from baseline within 48-72h', 'FENa may be low initially (prerenal-like) then rises', 'Urinalysis: muddy brown casts (ATN pattern)', 'Baseline and post-procedure creatinine monitoring', 'eGFR assessment pre-procedure'],
    ['Prevention is key: IV isotonic saline hydration pre/post procedure', 'Use low-osmolar or iso-osmolar contrast', 'Minimize contrast volume', 'Hold metformin 48h post-contrast (lactic acidosis risk)', 'Avoid concurrent nephrotoxins (NSAIDs, aminoglycosides)'],
    ['Persistent renal failure requiring dialysis (rare, <1%)', 'Lactic acidosis if metformin not held', 'Prolonged hospitalization', 'CKD acceleration', 'Need for repeat contrast deferred'],
    'The dye used in imaging can temporarily stress your kidneys. Drinking extra fluids before and after the procedure and staying hydrated greatly reduces this risk.',
  ),

  'rhabdomyolysis-aki': neph(
    'rhabdomyolysis-aki', 'Rhabdomyolysis-Induced AKI', 'LRA por rabdomiólisis', 'aki',
    'FB32.4',
    'AKI from massive skeletal muscle breakdown releasing myoglobin, which is toxic to renal tubules.',
    'Myoglobin precipitates in tubules (especially in acidic urine), causes direct tubular toxicity via lipid peroxidation, and induces renal vasoconstriction. Causes: crush injury, prolonged immobility, statins, seizures, extreme exertion, hyperthermia.',
    ['Muscle pain and weakness', 'Dark brown (tea-colored) urine', 'Swelling of affected muscles', 'Oliguria', 'Nausea, vomiting, malaise'],
    ['CK markedly elevated (>5x normal, often >10,000 U/L)', 'Urine dipstick positive for blood but no RBCs on microscopy (myoglobinuria)', 'Serum creatinine elevated', 'Hyperkalemia, hyperphosphatemia, hypocalcemia, hyperuricemia', 'LDH, AST/ALT elevated'],
    ['Aggressive IV normal saline (200-300 mL/h targeting UO 200-300 mL/h)', 'Urine alkalinization with sodium bicarbonate (controversial, target urine pH >6.5)', 'Monitor and treat hyperkalemia urgently', 'Avoid calcium supplementation unless symptomatic (deposits in injured muscle)', 'Dialysis for refractory hyperkalemia, acidosis, or volume overload'],
    ['Acute kidney injury requiring dialysis (up to 30%)', 'Disseminated intravascular coagulation', 'Compartment syndrome', 'Cardiac arrhythmia from hyperkalemia', 'Hypercalcemia in recovery phase'],
    'Damaged muscles release a protein (myoglobin) that can clog and injure kidney tubes. Aggressive IV fluids flush it out and protect the kidneys.',
  ),

  // ===== CKD (3) =============================================================

  'ckd-stages': neph(
    'ckd-stages', 'Chronic Kidney Disease (Stages 1-5)', 'Enfermedad renal crónica (estadios 1-5)', 'ckd',
    'GB61.Z',
    'Progressive irreversible loss of kidney function over >3 months; staged by eGFR and albuminuria (KDIGO).',
    'Regardless of etiology, CKD progresses through nephron loss, compensatory hyperfiltration of remaining nephrons (maladaptive), glomerulosclerosis, and tubulointerstitial fibrosis. Stage 1: eGFR ≥90; Stage 2: 60-89; Stage 3a: 45-59; Stage 3b: 30-44; Stage 4: 15-29; Stage 5: <15 mL/min/1.73m2.',
    ['Early: asymptomatic', 'Moderate: fatigue, nocturia, mild edema', 'Advanced: anorexia, nausea, pruritus, cognitive changes', 'Hypertension', 'Anemia (EPO deficiency)'],
    ['eGFR by CKD-EPI equation', 'Urine albumin-to-creatinine ratio (UACR)', 'Comprehensive metabolic panel', 'CBC (anemia assessment)', 'Renal ultrasound (kidney size, echogenicity)'],
    ['SGLT2 inhibitors (regardless of diabetes, eGFR >20)', 'ACE/ARB for albuminuria', 'Blood pressure target <130/80', 'Finerenone for diabetic CKD', 'Manage complications: anemia (ESA), mineral-bone disease (phosphate binders, vitamin D), acidosis (bicarbonate)'],
    ['Cardiovascular disease (leading cause of death)', 'CKD-mineral bone disease (renal osteodystrophy)', 'Anemia of CKD', 'Metabolic acidosis', 'Progression to ESRD'],
    'Kidney function gradually decreases over time. Newer medications can significantly slow progression, and managing blood pressure and diabetes are essential.',
  ),

  'esrd-uremia': neph(
    'esrd-uremia', 'End-Stage Renal Disease / Uremia', 'Enfermedad renal terminal / Uremia', 'ckd',
    'GB61.5',
    'Stage 5 CKD (eGFR <15) requiring renal replacement therapy; uremia is the clinical syndrome of untreated ESRD.',
    'Accumulation of uremic toxins (urea, indoxyl sulfate, p-cresol, beta-2-microglobulin) affects every organ system. Loss of erythropoietin, vitamin D activation, and acid-base/electrolyte regulation. Without dialysis or transplant, uremia is fatal.',
    ['Uremic encephalopathy (confusion, asterixis, seizures)', 'Uremic pericarditis (friction rub)', 'Uremic frost (rarely seen today)', 'Anorexia, nausea, metallic taste', 'Peripheral neuropathy and restless legs'],
    ['eGFR <15 mL/min/1.73m2', 'BUN markedly elevated', 'Electrolytes: hyperkalemia, hyperphosphatemia, hypocalcemia', 'Metabolic acidosis', 'Anemia (hemoglobin <10)'],
    ['Initiate dialysis (HD or PD) when symptomatic or eGFR <5-7', 'Kidney transplant evaluation (preferred modality)', 'Conservative/palliative management if dialysis not desired', 'EPO for anemia, phosphate binders, bicarbonate', 'Vascular access planning (AV fistula preferred, create at eGFR <20)'],
    ['Cardiovascular death (50% of ESRD mortality)', 'Dialysis access complications', 'Infections', 'Malnutrition and cachexia', 'Amyloidosis (beta-2 microglobulin, long-term dialysis)'],
    'Your kidneys can no longer clean your blood adequately. Dialysis or a kidney transplant takes over this vital function to keep you healthy.',
  ),

  'ckd-mineral-bone': neph(
    'ckd-mineral-bone', 'CKD-Mineral and Bone Disorder', 'Trastorno mineral óseo de la ERC', 'ckd',
    'GB61.4',
    'Systemic disorder of calcium, phosphorus, PTH, and vitamin D metabolism leading to bone disease and vascular calcification in CKD.',
    'Declining GFR reduces phosphate excretion and 1,25-dihydroxyvitamin D synthesis. Hyperphosphatemia and low calcitriol stimulate PTH secretion (secondary hyperparathyroidism). Elevated FGF-23 is earliest marker. Bone manifestations: osteitis fibrosa (high-turnover), adynamic bone disease (low-turnover), osteomalacia.',
    ['Bone pain and fractures', 'Proximal muscle weakness', 'Pruritus', 'Vascular and soft tissue calcification', 'Growth retardation in children'],
    ['Serum calcium, phosphorus, alkaline phosphatase', 'Intact PTH (iPTH)', 'Vitamin D (25-OH and 1,25-diOH)', 'FGF-23 (research/emerging)', 'Bone density scan and/or bone biopsy in select cases'],
    ['Phosphate binders (calcium acetate, sevelamer, lanthanum) with meals', 'Active vitamin D (calcitriol) or analogs (paricalcitol)', 'Calcimimetics (cinacalcet) for secondary hyperparathyroidism on dialysis', 'Dietary phosphorus restriction', 'Parathyroidectomy for refractory tertiary hyperparathyroidism'],
    ['Pathologic fractures', 'Vascular calcification and cardiovascular events', 'Calciphylaxis (calcific uremic arteriolopathy)', 'Adynamic bone disease from over-suppression', 'Tertiary hyperparathyroidism post-transplant'],
    'CKD disrupts the balance of calcium, phosphorus, and hormones that keep bones strong. Phosphate binders with meals and vitamin D supplements help restore this balance.',
  ),

  // ===== ELECTROLYTE (8) =====================================================

  'hyponatremia': neph(
    'hyponatremia', 'Hyponatremia', 'Hiponatremia', 'electrolyte',
    '5C70.0',
    'Serum sodium <135 mEq/L; most common electrolyte disorder in hospitalized patients.',
    'Always reflects relative water excess. Classified by volume status: hypovolemic (loss of Na > water), euvolemic (SIADH, hypothyroidism, adrenal insufficiency), hypervolemic (CHF, cirrhosis, nephrotic syndrome). ADH-mediated water retention is key mechanism in most cases.',
    ['Mild (130-135): often asymptomatic', 'Moderate (125-129): nausea, headache, confusion', 'Severe (<125): seizures, coma, respiratory arrest', 'Gait instability (chronic, increases fall risk)', 'Symptoms depend on acuity and rate of decline'],
    ['Serum sodium, osmolality (low in true hyponatremia)', 'Urine sodium and osmolality (key for classification)', 'Volume status assessment', 'TSH and cortisol (rule out endocrine causes)', 'Brain imaging if neurological symptoms'],
    ['Hypovolemic: isotonic saline', 'Euvolemic (SIADH): fluid restriction, salt tablets, loop diuretics', 'Hypervolemic: fluid/sodium restriction, diuretics, treat underlying cause', 'Severe symptomatic: 3% hypertonic saline (100 mL bolus, repeat x2 if needed)', 'Vaptans (tolvaptan) for refractory SIADH; correct no faster than 8-10 mEq/L per 24h'],
    ['Osmotic demyelination syndrome (ODS) from overcorrection', 'Cerebral edema (acute severe hyponatremia)', 'Seizures and permanent brain damage', 'Falls and fractures (chronic hyponatremia)', 'Death in severe acute cases'],
    'Your blood salt level is too low, which affects brain function. Treatment depends on the cause — sometimes restricting fluids, sometimes giving salt solutions carefully.',
  ),

  'hypernatremia': neph(
    'hypernatremia', 'Hypernatremia', 'Hipernatremia', 'electrolyte',
    '5C70.1',
    'Serum sodium >145 mEq/L; always indicates water deficit relative to sodium.',
    'Nearly always from inadequate water intake (impaired thirst or access) combined with water loss (insensible, GI, renal). Diabetes insipidus (central or nephrogenic) causes dilute polyuria. Rarely from sodium gain (iatrogenic hypertonic saline, sodium bicarbonate).',
    ['Thirst (if thirst mechanism intact)', 'Lethargy and irritability', 'Altered mental status and seizures (severe)', 'Decreased skin turgor, dry mucous membranes', 'Muscle twitching and hyperreflexia'],
    ['Serum sodium >145 mEq/L', 'Serum osmolality (elevated)', 'Urine osmolality and volume (key: concentrated vs dilute)', 'Water deprivation test and desmopressin trial if DI suspected', 'Assess free water deficit calculation'],
    ['Calculate free water deficit: 0.5 x weight(kg) x ([Na/140]-1)', 'Replace with D5W or 0.45% saline over 48-72 hours', 'Correct no faster than 10-12 mEq/L per 24h', 'Central DI: desmopressin (DDAVP)', 'Nephrogenic DI: low-salt diet, thiazide diuretics, amiloride (lithium-induced)'],
    ['Cerebral edema from overcorrection', 'Intracranial hemorrhage (brain shrinkage)', 'Rhabdomyolysis', 'Venous sinus thrombosis', 'Permanent neurological damage'],
    'Your blood salt level is too high, meaning your body needs more water. Fluids are given carefully over 2-3 days to bring it back to normal safely.',
  ),

  'hypokalemia': neph(
    'hypokalemia', 'Hypokalemia', 'Hipopotasemia', 'electrolyte',
    '5C74.0',
    'Serum potassium <3.5 mEq/L; can cause life-threatening arrhythmias and neuromuscular dysfunction.',
    'Causes: cellular shift (alkalosis, insulin, beta-agonists), renal losses (diuretics, hyperaldosteronism, RTA 1/2, hypomagnesemia), GI losses (vomiting, diarrhea). Total body deficit ~200-400 mEq for each 1 mEq/L drop. Hypomagnesemia makes hypokalemia refractory to replacement.',
    ['Muscle weakness and cramps', 'Fatigue and constipation (ileus)', 'ECG changes: flattened T waves, U waves, ST depression', 'Cardiac arrhythmias (PVCs, VT/VF in severe)', 'Rhabdomyolysis if severe (<2.5)'],
    ['Serum potassium <3.5 mEq/L', 'ECG', 'Serum magnesium (must check concurrently)', 'Urine potassium and creatinine (spot ratio or 24h)', 'ABG or BMP (metabolic alkalosis often coexists)'],
    ['Mild (3.0-3.5): oral KCl 40-80 mEq/day', 'Moderate (2.5-3.0): oral KCl 80-120 mEq/day + dietary potassium', 'Severe (<2.5 or symptomatic): IV KCl max 10-20 mEq/h via central line, cardiac monitor', 'Replace magnesium first if low', 'Potassium-sparing diuretics if ongoing losses'],
    ['Fatal cardiac arrhythmias (VF, torsades)', 'Respiratory muscle paralysis', 'Rhabdomyolysis', 'Metabolic alkalosis worsening', 'Nephrogenic diabetes insipidus (chronic hypokalemia)'],
    'Your potassium level is low, which affects your heart and muscles. Taking potassium supplements and eating potassium-rich foods (bananas, oranges) helps restore normal levels.',
  ),

  'hyperkalemia': neph(
    'hyperkalemia', 'Hyperkalemia', 'Hiperpotasemia', 'electrolyte',
    '5C74.1',
    'Serum potassium >5.0 mEq/L; medical emergency above 6.5 mEq/L due to cardiac arrest risk.',
    'Causes: decreased excretion (CKD, hypoaldosteronism, K-sparing diuretics, ACE/ARB), cellular shift (acidosis, tissue destruction, succinylcholine), excess intake (rare with normal kidneys). Pseudohyperkalemia from hemolyzed sample must be excluded.',
    ['Often asymptomatic until severe', 'Muscle weakness, ascending paralysis', 'Paresthesias', 'ECG progression: peaked T waves → flat P waves → wide QRS → sine wave → VF/asystole', 'Palpitations, bradycardia'],
    ['Serum potassium (repeat if unexpected to exclude pseudohyperkalemia)', 'ECG (mandatory)', 'BMP: BUN, creatinine (renal function)', 'ABG (acidosis as contributor)', 'Aldosterone, renin, cortisol if etiology unclear'],
    ['K >6.5 or ECG changes: IV calcium gluconate (stabilize membrane)', 'Shift K intracellularly: insulin 10 units + D50 (check glucose!), albuterol nebulizer, sodium bicarbonate (if acidotic)', 'Remove K: sodium polystyrene sulfonate, patiromer, or sodium zirconium cyclosilicate', 'Loop diuretics if renal function allows', 'Dialysis for refractory or severe with renal failure'],
    ['Cardiac arrest (VF or asystole)', 'Respiratory failure from muscle weakness', 'Recurrence after temporary measures', 'Metabolic acidosis worsening', 'Chronic hyperkalemia limiting RAAS inhibitor use in CKD'],
    'Your potassium level is too high, which can affect your heartbeat. Emergency treatment protects the heart while we bring the level down safely.',
  ),

  'hypercalcemia': neph(
    'hypercalcemia', 'Hypercalcemia', 'Hipercalcemia', 'electrolyte',
    '5C72.0',
    'Serum calcium >10.5 mg/dL (corrected) or ionized calcium >5.2 mg/dL; primary hyperparathyroidism and malignancy account for 90%.',
    'PTH-mediated: primary hyperparathyroidism (adenoma, hyperplasia) increases bone resorption, renal calcium reabsorption, and calcitriol synthesis. Non-PTH: malignancy (PTHrP, lytic lesions, calcitriol production by lymphoma), granulomatous disease, vitamin D toxicity, thiazides.',
    ['"Stones, bones, groans, and psychiatric overtones"', 'Kidney stones, polyuria, nephrogenic DI', 'Bone pain, osteoporosis', 'Constipation, nausea, pancreatitis', 'Confusion, depression, lethargy, coma'],
    ['Serum calcium and ionized calcium', 'Intact PTH level (elevated in PHPT, suppressed in malignancy)', 'PTHrP (if malignancy suspected)', 'Vitamin D levels (25-OH and 1,25-diOH)', 'Sestamibi scan or neck ultrasound (PHPT localization)'],
    ['Acute severe: aggressive IV saline hydration (200-300 mL/h)', 'Calcitonin (rapid onset, short-lived) + IV bisphosphonate (zoledronic acid)', 'Denosumab for refractory/bisphosphonate-resistant', 'PHPT: parathyroidectomy (curative)', 'Calcimimetics (cinacalcet) if surgery not feasible'],
    ['Cardiac arrhythmias (shortened QT, VF)', 'Nephrocalcinosis and renal failure', 'Pancreatitis', 'Pathologic fractures', 'Coma and death if untreated'],
    'Too much calcium in your blood causes kidney stones, bone weakening, stomach problems, and confusion. Treatment depends on the cause — often a parathyroid gland issue or underlying condition.',
  ),

  'metabolic-acidosis': neph(
    'metabolic-acidosis', 'Metabolic Acidosis', 'Acidosis metabólica', 'electrolyte',
    '5C55',
    'Systemic acidemia (pH <7.35) from excess acid production, bicarbonate loss, or impaired acid excretion.',
    'Classified by anion gap. High AG (MUDPILES): Methanol, Uremia, DKA, Propylene glycol, INH/Iron, Lactic acidosis, Ethylene glycol, Salicylates. Normal AG: RTA, diarrhea, saline infusion, carbonic anhydrase inhibitors. Winter formula predicts expected pCO2 compensation.',
    ['Kussmaul breathing (deep, rapid)', 'Fatigue and weakness', 'Nausea and vomiting', 'Confusion and lethargy', 'Hypotension in severe cases'],
    ['ABG: pH <7.35, low HCO3', 'Serum electrolytes and anion gap calculation', 'Delta-delta ratio (distinguishes mixed disorders)', 'Serum lactate', 'Osmol gap if toxic ingestion suspected'],
    ['Treat underlying cause (insulin for DKA, dialysis for toxic ingestion)', 'Sodium bicarbonate if pH <7.1 (controversial above this)', 'Normal AG: oral bicarbonate or citrate supplementation', 'Dialysis for refractory acidosis or toxic ingestions', 'Fomepizole for ethylene glycol/methanol poisoning'],
    ['Cardiac dysfunction and arrhythmias', 'Impaired oxygen delivery', 'Hyperkalemia from cellular shift', 'Chronic: bone demineralization', 'Chronic: muscle wasting and CKD progression'],
    'Your blood is too acidic. Treatment depends on why — it could be diabetes, kidney problems, or a toxic substance. Correcting the cause restores normal acid balance.',
  ),

  'metabolic-alkalosis': neph(
    'metabolic-alkalosis', 'Metabolic Alkalosis', 'Alcalosis metabólica', 'electrolyte',
    '5C56',
    'Systemic alkalemia (pH >7.45) from acid loss or bicarbonate gain; most common acid-base disorder in hospitalized patients.',
    'Generation phase: acid loss (vomiting, NG suction, diuretics) or alkali gain. Maintenance phase: volume depletion and chloride depletion sustain alkalosis by stimulating proximal bicarbonate reabsorption. Classified as chloride-responsive (urine Cl <20) or chloride-resistant (urine Cl >20).',
    ['Often asymptomatic or mild symptoms', 'Muscle cramps and weakness', 'Paresthesias and tetany (ionized calcium drops)', 'Cardiac arrhythmias', 'Confusion (severe cases)'],
    ['ABG: pH >7.45, elevated HCO3', 'Serum electrolytes (hypokalemia common)', 'Urine chloride: <20 (chloride-responsive) vs >20 (chloride-resistant)', 'Plasma renin and aldosterone (if chloride-resistant)', 'Expected pCO2 compensation: 0.7 x (HCO3 - 24) + 40'],
    ['Chloride-responsive: IV normal saline, KCl replacement', 'Chloride-resistant: treat underlying cause (spironolactone for hyperaldosteronism)', 'Replace potassium deficit', 'Acetazolamide (promotes bicarbonate excretion)', 'Rarely: HCl infusion or dialysis for life-threatening alkalosis'],
    ['Cardiac arrhythmias from hypokalemia', 'Seizures in severe alkalosis', 'Respiratory failure from compensatory hypoventilation', 'Impaired oxygen release (leftward shift of oxyhemoglobin curve)', 'Digitalis toxicity potentiation'],
    'Your blood is too alkaline, often from vomiting or diuretics. Replacing fluids and electrolytes (salt and potassium) usually corrects it.',
  ),

  'hypocalcemia': neph(
    'hypocalcemia', 'Hypocalcemia', 'Hipocalcemia', 'electrolyte',
    '5C72.1',
    'Corrected serum calcium <8.5 mg/dL or ionized calcium <4.4 mg/dL; causes neuromuscular irritability.',
    'Causes: hypoparathyroidism (post-surgical most common), vitamin D deficiency, CKD (reduced calcitriol), hypomagnesemia (inhibits PTH secretion and action), pancreatitis, massive transfusion (citrate chelation). Always correct for albumin or check ionized calcium.',
    ['Perioral numbness and paresthesias', 'Chvostek sign (facial nerve tapping)', 'Trousseau sign (carpal spasm with BP cuff)', 'Muscle cramps and tetany', 'QT prolongation and seizures (severe)'],
    ['Corrected calcium or ionized calcium', 'Serum albumin (for correction)', 'Intact PTH level', 'Serum magnesium, phosphorus, vitamin D', 'ECG: prolonged QT interval'],
    ['Symptomatic: IV calcium gluconate 1-2 g over 10-20 min + continuous infusion', 'Oral calcium 1-3 g/day + vitamin D (calcitriol if CKD or hypoparathyroidism)', 'Replace magnesium if low (essential for PTH function)', 'Thiazide diuretics (reduce urinary calcium loss in hypoparathyroidism)', 'PTH replacement (recombinant PTH for chronic hypoparathyroidism)'],
    ['Laryngospasm and airway compromise', 'Seizures', 'Heart failure and refractory hypotension', 'QT prolongation and torsades de pointes', 'Basal ganglia calcification (chronic hypoparathyroidism)'],
    'Your calcium level is low, causing tingling and muscle cramps. Calcium and vitamin D supplements restore normal levels, and we look for the underlying cause.',
  ),

  // ===== DIALYSIS (3) ========================================================

  'hemodialysis': neph(
    'hemodialysis', 'Hemodialysis', 'Hemodiálisis', 'dialysis',
    'QB80',
    'Extracorporeal blood purification using a semipermeable membrane to remove uremic toxins and excess fluid.',
    'Blood flows through hollow-fiber dialyzer where solutes move by diffusion down concentration gradients, and fluid is removed by ultrafiltration (transmembrane pressure). Standard: 3-4 hours, 3x/week. Access via AV fistula (preferred), AV graft, or central venous catheter.',
    ['Fatigue post-treatment', 'Intradialytic hypotension (most common complication)', 'Muscle cramps', 'Nausea and headache (disequilibrium)', 'Pruritus'],
    ['Kt/V >1.2 or URR >65% (adequacy measures)', 'Pre- and post-dialysis labs (BMP, CBC, phosphorus)', 'Monthly: albumin, ferritin, TSAT, iPTH', 'Access flow monitoring (Qa measurement)', 'Dry weight assessment by clinical exam or bioimpedance'],
    ['Dialysis prescription: blood flow 350-450 mL/min, dialysate flow 500-800 mL/min', 'AV fistula creation 6+ months before anticipated need', 'EPO and IV iron for anemia management', 'Phosphate binders and dietary phosphorus restriction', 'Fluid and sodium restriction between sessions (limit gain to <3-4% body weight)'],
    ['Access infection and thrombosis', 'Dialysis disequilibrium syndrome (first sessions)', 'Intradialytic hypotension and cramps', 'Cardiovascular disease (accelerated)', 'Amyloidosis (beta-2 microglobulin, long-term)'],
    'A machine cleans your blood when your kidneys cannot, usually three times a week. An arm access (fistula) works best and lasts longest.',
  ),

  'peritoneal-dialysis': neph(
    'peritoneal-dialysis', 'Peritoneal Dialysis', 'Diálisis peritoneal', 'dialysis',
    'QB81',
    'Home-based dialysis using the peritoneal membrane as a natural dialyzer for solute and fluid removal.',
    'Dialysate instilled into peritoneal cavity through a Tenckhoff catheter. Solutes diffuse across peritoneal capillaries down concentration gradients. Fluid is removed by osmotic ultrafiltration (dextrose-based) or colloid osmosis (icodextrin). CAPD (manual, 4 exchanges/day) or APD (cycler, overnight).',
    ['Abdominal fullness and bloating', 'Weight gain from dextrose absorption', 'Peritonitis (cloudy effluent, abdominal pain)', 'Hernias (increased intra-abdominal pressure)', 'Protein loss in dialysate'],
    ['PET test (peritoneal equilibration test) to classify membrane transport', 'Weekly Kt/V >1.7 (adequacy target)', 'Effluent cell count and culture if peritonitis suspected', 'Monthly labs: BMP, albumin, phosphorus', 'Residual renal function assessment'],
    ['CAPD: 4 exchanges/day with 2-2.5 L per exchange', 'APD: overnight cycler, 8-10 hours', 'Icodextrin for long dwell to improve UF', 'Strict sterile technique for exchanges', 'Exit site care and monitoring'],
    ['Peritonitis (most common serious complication, 0.5 episodes/patient-year)', 'Exit-site and tunnel infections', 'Encapsulating peritoneal sclerosis (long-term)', 'Metabolic syndrome from glucose absorption', 'Hernias (inguinal, umbilical)'],
    'You can do dialysis at home using fluid in your belly that draws out waste and excess water. It gives you more freedom than hospital dialysis.',
  ),

  'crrt': neph(
    'crrt', 'Continuous Renal Replacement Therapy (CRRT)', 'Terapia de reemplazo renal continua', 'dialysis',
    'QB82',
    'Slow continuous extracorporeal therapy for hemodynamically unstable patients with AKI in the ICU.',
    'Operates 24h/day at low blood flow rates (150-250 mL/min) to avoid rapid solute and fluid shifts. Modalities: CVVH (convection), CVVHD (diffusion), CVVHDF (both). Uses replacement fluid (pre/post-dilution) and/or dialysate. Better hemodynamic tolerance than intermittent HD.',
    ['Performed in ICU setting', 'Better tolerated hemodynamically than intermittent HD', 'Continuous fluid and solute removal', 'Requires anticoagulation of circuit (citrate preferred)', 'Immobility while on therapy'],
    ['Effluent dose 20-25 mL/kg/h (KDIGO recommendation)', 'Filter life monitoring (circuit pressures)', 'Hourly fluid balance calculation', 'Electrolytes every 6h (including ionized calcium with citrate)', 'Drug dosing adjustments (significant clearance of many medications)'],
    ['CVVHDF most commonly prescribed', 'Regional citrate anticoagulation (preferred over heparin)', 'Effluent rate 25-30 mL/kg/h prescribed (anticipate downtime)', 'Phosphorus supplementation (often depleted)', 'Nutrition optimization (amino acid losses in effluent)'],
    ['Filter clotting and circuit failure', 'Citrate toxicity (rising ionized calcium gap)', 'Hypothermia from extracorporeal circuit', 'Electrolyte derangements (hypophosphatemia)', 'Delayed renal recovery recognition'],
    'This is a gentle, continuous form of kidney support used in the ICU when standard dialysis would be too harsh for the body. It runs slowly around the clock.',
  ),

  // ===== TRANSPLANT (1) =====================================================

  'kidney-transplant': neph(
    'kidney-transplant', 'Kidney Transplantation', 'Trasplante renal', 'transplant',
    'QB90',
    'Optimal renal replacement therapy for eligible ESRD patients; provides superior survival and quality of life versus dialysis.',
    'Living or deceased donor kidney is placed in iliac fossa with vascular anastomosis to iliac vessels and ureter to bladder. Requires lifelong immunosuppression to prevent rejection. Types of rejection: hyperacute (preformed antibodies), acute cellular, acute antibody-mediated, chronic (IF/TA).',
    ['Post-operative pain and recovery', 'Immediate graft function vs delayed graft function', 'Immunosuppression side effects', 'Signs of rejection (rising creatinine, oliguria, graft tenderness)', 'Infections (UTI, CMV, BK virus)'],
    ['HLA typing and crossmatch', 'Panel reactive antibodies (PRA)', 'Pre-transplant: cardiac, cancer, infection screening', 'Post-transplant: creatinine, tacrolimus levels, urinalysis', 'Protocol biopsies (some centers) or indication biopsies for dysfunction'],
    ['Induction: basiliximab or thymoglobulin', 'Maintenance: tacrolimus + mycophenolate + prednisone (triple therapy)', 'Target tacrolimus trough levels (varies by time post-transplant)', 'CMV and PCP prophylaxis', 'Monitor for and treat rejection promptly (steroids, thymoglobulin, or plasma exchange)'],
    ['Acute rejection (10-15% in first year)', 'Infections (CMV, BK nephropathy, UTI)', 'PTLD (EBV-associated lymphoproliferative disorder)', 'Cardiovascular disease', 'Chronic allograft nephropathy (leading cause of late graft loss)'],
    'A kidney transplant from a living or deceased donor is the best treatment for kidney failure, offering longer life and better quality of life than dialysis. It requires lifelong anti-rejection medications.',
  ),

  // ===== CONGENITAL (2) ======================================================

  'polycystic-kidney-disease': neph(
    'polycystic-kidney-disease', 'Autosomal Dominant Polycystic Kidney Disease (ADPKD)', 'Enfermedad poliquística renal autosómica dominante', 'congenital',
    'GB81.0',
    'Most common hereditary kidney disease; bilateral progressive cyst formation leading to ESRD in ~50% by age 60.',
    'Mutations in PKD1 (85%, chromosome 16, more severe) or PKD2 (15%, chromosome 4, milder). Polycystin-1 and -2 dysfunction leads to abnormal tubular cell proliferation, fluid secretion, and cyst growth. Cysts compress normal parenchyma. Extrarenal manifestations: hepatic cysts, intracranial aneurysms.',
    ['Flank pain and abdominal fullness', 'Hypertension (early, often first sign)', 'Gross hematuria (cyst hemorrhage)', 'Palpable bilateral enlarged kidneys', 'Family history of ADPKD or ESRD'],
    ['Renal ultrasound (age-specific diagnostic criteria by Ravine/Pei)', 'MRI total kidney volume (htTKV for prognosis)', 'Genetic testing (if diagnosis uncertain or early evaluation)', 'Liver imaging for hepatic cysts', 'MRA if family history of intracranial aneurysm'],
    ['Tolvaptan (V2 receptor antagonist) for rapidly progressive disease', 'Strict BP control (<110/75, HALT-PKD trial)', 'ACE inhibitor or ARB preferred', 'Adequate hydration (suppresses vasopressin)', 'Avoid caffeine; pain management; antibiotics for cyst infection (fluoroquinolones penetrate cysts)'],
    ['ESRD (~50% by age 60)', 'Cyst infection and hemorrhage', 'Liver cysts (rarely symptomatic, more common in women)', 'Intracranial aneurysm rupture (5-10% prevalence)', 'Mitral valve prolapse and abdominal wall hernias'],
    'Inherited cysts slowly enlarge in both kidneys over decades. Tolvaptan can slow growth, blood pressure control is critical, and transplant is an option if kidneys fail.',
  ),

  'alport-syndrome': neph(
    'alport-syndrome', 'Alport Syndrome', 'Síndrome de Alport', 'congenital',
    'GB81.2',
    'Hereditary nephritis from mutations in type IV collagen (COL4A3/4/5) affecting kidneys, ears, and eyes.',
    'Defective alpha-3, -4, or -5 chains of type IV collagen in the GBM, cochlea, and lens. X-linked (80%, COL4A5) is most common. GBM shows characteristic basket-weave lamellation on EM. Males with X-linked form progress to ESRD by age 20-30.',
    ['Persistent microscopic hematuria (from childhood)', 'Sensorineural hearing loss (bilateral, high-frequency)', 'Anterior lenticonus and macular flecks (eye findings)', 'Progressive proteinuria', 'Family history of hematuria, deafness, or renal failure'],
    ['Urinalysis: persistent hematuria, progressive proteinuria', 'Audiometry (bilateral sensorineural hearing loss)', 'Ophthalmologic exam (anterior lenticonus pathognomonic)', 'Kidney biopsy: GBM thinning/thickening, basket-weave on EM', 'Genetic testing (COL4A3/A4/A5 mutations)'],
    ['ACE inhibitor or ARB (slow proteinuria progression, start early)', 'SGLT2 inhibitors (emerging evidence)', 'Audiological support (hearing aids)', 'Kidney transplant for ESRD (excellent outcomes)', 'Genetic counseling'],
    ['ESRD (males X-linked: age 20-30; autosomal recessive: variable)', 'Progressive hearing loss', 'Visual impairment', 'Anti-GBM disease in transplant (rare, against novel alpha-5 antigen)', 'Leiomyomatosis (rare, large deletions)'],
    'An inherited collagen defect affects kidneys, hearing, and eyes. Blood pressure medications slow kidney damage, and hearing aids help. Transplant works well if kidneys fail.',
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

export function getNephrologyEntry(id: string): NephrologyEntry | undefined {
  return NEPHROLOGY_ENTRIES[id];
}

export function searchNephrology(query: string): NephrologyEntry[] {
  const q = query.toLowerCase();
  return Object.values(NEPHROLOGY_ENTRIES).filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.nameEs.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.category.includes(q) ||
    e.icd11.toLowerCase().includes(q) ||
    e.clinicalFeatures.some(f => f.toLowerCase().includes(q)) ||
    e.diagnostics.some(d => d.toLowerCase().includes(q)),
  );
}

export function getNephrologyByCategory(cat: NephrologyCategory): NephrologyEntry[] {
  return Object.values(NEPHROLOGY_ENTRIES).filter(e => e.category === cat);
}

export function getNephrologyCount(): number {
  return Object.keys(NEPHROLOGY_ENTRIES).length;
}
