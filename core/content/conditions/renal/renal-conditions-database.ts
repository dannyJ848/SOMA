/**
 * Renal Conditions Database
 *
 * Comprehensive reference of 30 renal conditions with
 * clinical summaries, patient education, and emergency guidance.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type RenalCategory =
  | 'glomerular'
  | 'tubular'
  | 'vascular'
  | 'obstructive'
  | 'electrolyte'
  | 'acid-base'
  | 'cystic'
  | 'transplant';

export interface RenalConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: RenalCategory;
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

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function rc(
  id: string, name: string, nameEs: string,
  category: RenalCategory, icd11: string, description: string,
  pathophysiology: string,
  clinicalFeatures: string[], diagnostics: string[],
  treatment: string[], complications: string[],
  patientExplanation: string, emergencySigns: string[],
): RenalConditionEntry {
  return {
    id, name, nameEs, category, icd11, description,
    pathophysiology, clinicalFeatures, diagnostics,
    treatment, complications, patientExplanation, emergencySigns,
  };
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const RENAL_CONDITIONS: Record<string, RenalConditionEntry> = {

  // ---- Glomerular (6) ----------------------------------------------------

  'minimal-change-disease': rc(
    'minimal-change-disease', 'Minimal Change Disease', 'Enfermedad de cambios minimos',
    'glomerular', 'GB40',
    'Most common cause of nephrotic syndrome in children. Light microscopy appears normal; electron microscopy reveals podocyte foot process effacement.',
    'T-cell-mediated circulating permeability factor damages podocyte foot processes, leading to loss of the glomerular charge barrier. Albumin and other proteins pass freely into the urine while the glomerular basement membrane remains structurally intact.',
    ['Sudden-onset periorbital and peripheral edema', 'Massive proteinuria (>3.5 g/day)', 'Hypoalbuminemia', 'Hyperlipidemia', 'Frothy urine', 'Weight gain from fluid retention'],
    ['Urinalysis with heavy proteinuria', '24-hour urine protein or spot urine protein-to-creatinine ratio', 'Serum albumin and lipid panel', 'Renal biopsy (typically reserved for adults or steroid-resistant cases)', 'Electron microscopy showing foot process effacement'],
    ['First-line: oral corticosteroids (prednisone 1 mg/kg/day for 4-6 weeks then taper)', 'Steroid-resistant: calcineurin inhibitors (cyclosporine, tacrolimus)', 'Frequently relapsing: cyclophosphamide, mycophenolate, or rituximab', 'Supportive: salt restriction, diuretics for edema, statins for hyperlipidemia', 'ACE inhibitor or ARB for persistent proteinuria'],
    ['Steroid toxicity from frequent relapses', 'Thromboembolism (loss of antithrombin III)', 'Spontaneous bacterial peritonitis', 'Acute kidney injury from hypovolemia', 'Hyperlipidemia-related cardiovascular risk'],
    'Minimal change disease is the most common kidney problem causing major protein loss in children. Your kidneys have tiny filters, and in this condition the filters develop microscopic damage that lets protein leak into the urine. The good news is that most patients respond well to steroid treatment and many children outgrow the condition. However, some patients experience relapses that require additional medications.',
    ['Severe abdominal pain (possible peritonitis or renal vein thrombosis)', 'Sudden leg swelling or chest pain (thromboembolism)', 'Signs of infection with fever during immunosuppression', 'Severe edema with respiratory difficulty'],
  ),

  'membranous-nephropathy': rc(
    'membranous-nephropathy', 'Membranous Nephropathy', 'Nefropatia membranosa',
    'glomerular', 'GB42',
    'Most common cause of nephrotic syndrome in white adults. Characterized by diffuse thickening of the glomerular basement membrane from subepithelial immune complex deposition.',
    'Autoantibodies (most commonly anti-PLA2R) form immune complexes on the subepithelial side of the glomerular basement membrane. Complement activation and podocyte injury lead to GBM thickening and massive proteinuria without significant inflammation.',
    ['Insidious-onset nephrotic syndrome', 'Peripheral edema progressing to anasarca', 'Frothy urine', 'Fatigue', 'Possible microscopic hematuria', 'High risk for renal vein thrombosis and DVT/PE'],
    ['Anti-PLA2R antibody (positive in ~70% of primary cases)', '24-hour urine protein (nephrotic range)', 'Serum albumin, lipid panel, renal function', 'Renal biopsy: GBM thickening with "spike and dome" pattern on silver stain', 'Immunofluorescence: granular IgG and C3 along capillary walls', 'Screen for secondary causes (hepatitis B, lupus, malignancy)'],
    ['Observation for 6 months if low risk (normal GFR, moderate proteinuria)', 'Immunosuppression for high risk: rituximab (first-line), or cyclophosphamide + corticosteroids (Ponticelli regimen)', 'Calcineurin inhibitors as alternative', 'ACE inhibitor or ARB for proteinuria reduction', 'Anticoagulation if albumin <2.5 g/dL or thrombotic event', 'Statin therapy for hyperlipidemia'],
    ['Thromboembolic events (renal vein thrombosis, PE)', 'Progressive chronic kidney disease (30-40% untreated)', 'Infection during immunosuppressive therapy', 'Secondary causes (malignancy in older adults)'],
    'Membranous nephropathy occurs when your immune system mistakenly attacks the filters in your kidneys, causing them to thicken and leak protein. About one-third of patients improve on their own, one-third stay stable, and one-third gradually worsen without treatment. Modern treatments like rituximab are very effective at stopping the immune attack. You will also need blood thinners because this condition raises the risk of blood clots.',
    ['Sudden leg swelling, pain, or chest pain (thromboembolism)', 'Rapid decline in urine output', 'Unexplained weight loss (screen for malignancy)', 'Severe edema with breathing difficulty'],
  ),

  'iga-nephropathy': rc(
    'iga-nephropathy', 'IgA Nephropathy (Berger Disease)', 'Nefropatia por IgA (enfermedad de Berger)',
    'glomerular', 'GB44',
    'Most common glomerulonephritis worldwide. Characterized by mesangial deposition of IgA-containing immune complexes, presenting classically as episodic gross hematuria after upper respiratory infections.',
    'Defective O-glycosylation of IgA1 leads to galactose-deficient IgA1 (Gd-IgA1). Auto-antibodies recognize Gd-IgA1, forming immune complexes that deposit in the glomerular mesangium, activating complement and causing mesangial proliferation and inflammation.',
    ['Episodic gross hematuria (synpharyngitic: within 1-2 days of URI)', 'Persistent microscopic hematuria between episodes', 'Mild to moderate proteinuria', 'Hypertension', 'Flank pain during gross hematuria episodes', 'Rarely presents with rapidly progressive GN'],
    ['Urinalysis: dysmorphic RBCs, RBC casts', 'Serum IgA (elevated in ~50%)', 'Normal C3 and C4 complement levels', 'Renal biopsy: mesangial IgA deposits on immunofluorescence', 'Light microscopy: mesangial proliferation', 'Oxford classification (MEST-C score) for prognosis'],
    ['ACE inhibitor or ARB (cornerstone for proteinuria >0.5 g/day)', 'SGLT2 inhibitors (dapagliflozin) for CKD progression', 'Targeted-release budesonide (Nefecon) for persistent proteinuria', 'Corticosteroids for crescentic or rapidly progressive disease', 'Fish oil (some evidence for slowing progression)', 'Immunosuppression reserved for aggressive disease'],
    ['Progressive CKD to ESRD (20-40% over 20 years)', 'Nephrotic-range proteinuria (poor prognosis)', 'Henoch-Schonlein purpura (systemic form)', 'Recurrence after kidney transplant (30-60%)'],
    'IgA nephropathy is the most common type of kidney inflammation worldwide. Your immune system produces an abnormal form of an antibody called IgA, which gets stuck in your kidney filters and causes irritation and bleeding. Many people have a mild course, but some develop progressive kidney damage over years. Taking blood pressure medications that protect the kidneys (ACE inhibitors or ARBs) is the most important step. Newer treatments can slow or stop progression in many cases.',
    ['Tea- or cola-colored urine lasting more than a few days', 'Rapid rise in blood pressure', 'Significant decrease in urine output', 'Severe flank pain or fever (rule out other causes)'],
  ),

  'focal-segmental-glomerulosclerosis': rc(
    'focal-segmental-glomerulosclerosis', 'Focal Segmental Glomerulosclerosis (FSGS)', 'Glomeruloesclerosis focal y segmentaria',
    'glomerular', 'GB43',
    'Pattern of glomerular injury with sclerosis affecting some glomeruli (focal) and parts of the tuft (segmental). Most common cause of nephrotic syndrome in Black and Hispanic adults.',
    'Podocyte injury and depletion from various causes (genetic mutations, circulating permeability factors, hyperfiltration, viral infection) leads to podocyte foot process effacement, segmental scarring with hyalinosis, and progressive glomerular loss with secondary FSGS in remaining nephrons.',
    ['Nephrotic syndrome (edema, heavy proteinuria, hypoalbuminemia)', 'Hypertension (common at presentation)', 'Microscopic hematuria (in 30-50%)', 'Renal insufficiency at presentation (in some)', 'Often insidious onset with progressive course'],
    ['Renal biopsy: segmental sclerosis and hyalinosis on light microscopy', 'Electron microscopy: diffuse foot process effacement', 'Immunofluorescence: IgM and C3 trapping in sclerotic areas', '24-hour urine protein', 'Genetic testing for familial forms (NPHS1, NPHS2, TRPC6)', 'Screen for secondary causes (HIV, obesity, reflux, heroin use)'],
    ['ACE inhibitor or ARB (mandatory for all)', 'Primary FSGS: corticosteroids (prolonged course 4-6 months)', 'Steroid-resistant: calcineurin inhibitors (cyclosporine, tacrolimus)', 'Second-line: mycophenolate mofetil, rituximab', 'Supportive: sodium restriction, diuretics, statins', 'Treat underlying cause in secondary FSGS (weight loss, ART for HIV)'],
    ['Progressive CKD to ESRD (50% in 10 years if untreated)', 'Steroid resistance and treatment toxicity', 'High recurrence rate after transplant (30-40% primary FSGS)', 'Thromboembolic events', 'Cardiovascular disease from chronic nephrotic state'],
    'FSGS is a condition where scar tissue forms in the tiny filters of your kidneys, causing protein to spill into the urine. It can be caused by genetic factors, infections, obesity, or other stresses on the kidneys. Treatment depends on the cause but usually involves medications to reduce protein loss and protect remaining kidney function. Some forms respond to immune-suppressing drugs, while others require managing the underlying trigger.',
    ['Rapid increase in swelling or weight gain', 'Significant decrease in urine output', 'Chest pain or leg swelling (thromboembolism risk)', 'Signs of infection during immunosuppressive therapy'],
  ),

  'lupus-nephritis': rc(
    'lupus-nephritis', 'Lupus Nephritis', 'Nefritis lupica',
    'glomerular', 'GB45.0',
    'Kidney involvement in systemic lupus erythematosus (SLE), occurring in up to 50% of SLE patients. Classified into six histological classes (ISN/RPS) guiding treatment intensity.',
    'Anti-dsDNA antibodies form immune complexes that deposit in glomeruli (mesangial, subendothelial, or subepithelial locations depending on class). Complement activation via the classical pathway causes glomerular inflammation, proliferation, and potential crescentic transformation.',
    ['Proteinuria (often nephrotic range in class V)', 'Active urine sediment with RBC casts and dysmorphic RBCs', 'Hypertension', 'Peripheral edema', 'Elevated creatinine', 'Concurrent SLE flare symptoms (rash, arthritis, serositis)'],
    ['Urinalysis and urine protein quantification', 'Serologies: anti-dsDNA (elevated), C3/C4 (low with active disease)', 'ANA, anti-Smith antibody', 'Renal biopsy with ISN/RPS classification (classes I-VI)', 'Immunofluorescence: "full house" pattern (IgG, IgA, IgM, C3, C1q)', 'Activity and chronicity indices on biopsy'],
    ['Class I-II: supportive care, treat SLE', 'Class III-IV (proliferative): induction with mycophenolate or cyclophosphamide + corticosteroids, then maintenance with mycophenolate or azathioprine', 'Class V (membranous): mycophenolate or calcineurin inhibitor + low-dose steroid', 'Voclosporin (add-on for active disease)', 'Belimumab (add-on for all classes)', 'ACE inhibitor or ARB, hydroxychloroquine for all SLE patients'],
    ['Progressive CKD to ESRD (10-30% over 15 years)', 'Transformation to more severe histological class', 'Antiphospholipid syndrome with thrombosis', 'Treatment toxicity (infections, cytopenias, infertility)', 'Cardiovascular disease from chronic inflammation'],
    'Lupus nephritis occurs when the immune system, already overactive in lupus, attacks the kidneys. Your doctor will likely recommend a kidney biopsy to determine the class of involvement, which guides treatment decisions. Mild forms may only need monitoring, while more aggressive forms require powerful immune-suppressing medications. Taking hydroxychloroquine and controlling blood pressure are essential for all lupus patients to protect kidney health.',
    ['Dark or bloody urine with new SLE flare symptoms', 'Rapid rise in creatinine', 'Severe hypertension', 'New edema or weight gain suggesting nephrotic flare', 'Fever or infection signs during immunosuppression'],
  ),

  'post-streptococcal-glomerulonephritis': rc(
    'post-streptococcal-glomerulonephritis', 'Post-Streptococcal Glomerulonephritis', 'Glomerulonefritis postestreptococica',
    'glomerular', 'GB40.0',
    'Immune complex-mediated glomerulonephritis developing 1-3 weeks after streptococcal pharyngitis or 3-6 weeks after skin infection. Most common in children aged 5-12.',
    'Nephritogenic strains of group A Streptococcus trigger formation of circulating immune complexes (anti-streptococcal antibodies + streptococcal antigens). These deposit in glomeruli, activating complement via the alternative pathway, causing endocapillary proliferative glomerulonephritis.',
    ['Acute nephritic syndrome: hematuria (tea/cola-colored urine), proteinuria, edema', 'Hypertension', 'Oliguria', 'Periorbital edema (especially upon waking)', 'Recent strep pharyngitis or impetigo', 'Malaise and mild fever'],
    ['Urinalysis: dysmorphic RBCs, RBC casts, mild proteinuria', 'Elevated ASO titer (pharyngitis) or anti-DNase B (skin infection)', 'Low C3 complement (returns to normal in 6-8 weeks)', 'Normal C4 (alternative pathway activation)', 'Elevated BUN/creatinine', 'Renal biopsy rarely needed (reserved for atypical presentations)'],
    ['Primarily supportive (self-limiting in children)', 'Salt and fluid restriction', 'Loop diuretics for edema and hypertension', 'Antihypertensives if needed (CCBs, hydralazine)', 'Antibiotics to eradicate residual streptococcal infection', 'Dialysis rarely needed for severe AKI or hyperkalemia'],
    ['Full recovery in >95% of children', 'Adults have higher risk of persistent renal impairment', 'Rapidly progressive glomerulonephritis (rare)', 'Hypertensive encephalopathy', 'Pulmonary edema from fluid overload'],
    'Post-streptococcal glomerulonephritis happens when a strep infection (like strep throat or a skin infection) triggers your immune system to accidentally attack your kidneys. It typically occurs 1-3 weeks after the infection. The great news is that almost all children recover completely. Treatment focuses on managing symptoms like swelling and high blood pressure while the body heals itself over several weeks.',
    ['Severe headache or visual changes (hypertensive emergency)', 'Significant decrease in urine output', 'Severe swelling or difficulty breathing', 'Persistent or worsening symptoms beyond 2-3 weeks', 'Seizures'],
  ),

  // ---- Tubular (4) -------------------------------------------------------

  'acute-tubular-necrosis': rc(
    'acute-tubular-necrosis', 'Acute Tubular Necrosis (ATN)', 'Necrosis tubular aguda',
    'tubular', 'GB90',
    'Most common cause of intrinsic acute kidney injury. Caused by ischemic or nephrotoxic injury to renal tubular epithelial cells, resulting in tubular cell death and obstruction.',
    'Ischemia (prolonged renal hypoperfusion) or direct nephrotoxins damage tubular epithelial cells, particularly the metabolically active S3 segment of the proximal tubule and the thick ascending limb. Dead cells slough into the lumen forming casts, obstructing flow and causing backleak of filtrate. GFR drops precipitously.',
    ['Oliguric or non-oliguric acute kidney injury', 'Rising BUN and creatinine over days', 'Muddy brown granular casts on urinalysis', 'History of hypotension, sepsis, surgery, or nephrotoxin exposure', 'Phases: initiation, maintenance (1-2 weeks), recovery (polyuric phase)'],
    ['Urinalysis: muddy brown granular casts, renal tubular epithelial cells', 'Fractional excretion of sodium (FENa) >2%', 'BUN:creatinine ratio <20:1', 'Urine osmolality <350 mOsm/kg (loss of concentrating ability)', 'Renal ultrasound to exclude obstruction', 'Nephrotoxin and medication review'],
    ['Remove offending nephrotoxin or treat underlying cause', 'Aggressive fluid resuscitation if hypovolemic', 'Hemodynamic optimization (MAP >65 mmHg)', 'Avoid further nephrotoxic agents (aminoglycosides, NSAIDs, contrast)', 'Renal replacement therapy (dialysis) if indicated for refractory acidosis, hyperkalemia, uremia, or fluid overload', 'Supportive care through recovery phase'],
    ['Need for dialysis (20-30% of ICU patients with ATN)', 'Electrolyte derangements (hyperkalemia, metabolic acidosis)', 'Fluid overload and pulmonary edema', 'Progression to CKD if recovery incomplete', 'Increased mortality in ICU setting (40-70% when multiorgan failure)'],
    'Acute tubular necrosis means the small tubes inside your kidneys have been damaged, usually by low blood flow (from severe dehydration or low blood pressure) or by toxic substances (certain medications or contrast dye). Your kidneys temporarily lose the ability to filter waste. The good news is that these tubes can regenerate, and kidney function often recovers over days to weeks with supportive care. During recovery you may notice increased urination as the kidneys start working again.',
    ['No urine output for several hours', 'Severe swelling or shortness of breath', 'Confusion or altered mental status', 'Nausea and vomiting with inability to keep fluids down', 'Muscle weakness or heart palpitations (hyperkalemia)'],
  ),

  'renal-tubular-acidosis': rc(
    'renal-tubular-acidosis', 'Renal Tubular Acidosis', 'Acidosis tubular renal',
    'tubular', 'GB90.3',
    'Group of disorders where renal tubules fail to properly acidify urine, causing non-anion gap metabolic acidosis despite relatively preserved GFR. Three main types: distal (Type 1), proximal (Type 2), and hyperkalemic (Type 4).',
    'Type 1 (distal): impaired H+ secretion in the collecting duct alpha-intercalated cells, unable to lower urine pH below 5.5. Type 2 (proximal): defective HCO3- reabsorption in the proximal tubule, leading to bicarbonaturia. Type 4: aldosterone deficiency or resistance causes hyperkalemia, which impairs ammoniagenesis and net acid excretion.',
    ['Non-anion gap metabolic acidosis with relatively preserved GFR', 'Type 1: hypokalemia, nephrocalcinosis, kidney stones, growth failure in children', 'Type 2: hypokalemia, osteomalacia, may be part of Fanconi syndrome', 'Type 4: hyperkalemia, mild acidosis, often in diabetics with CKD', 'Fatigue, muscle weakness, bone pain'],
    ['Serum electrolytes: low bicarbonate, normal anion gap', 'Urine pH: >5.5 in Type 1, variable in Type 2, <5.5 in Type 4', 'Urine anion gap (positive in RTA, suggesting impaired NH4+ excretion)', 'Serum potassium: low (Types 1 and 2), high (Type 4)', 'Ammonium chloride loading test (Type 1 confirmation)', 'Urine electrolytes, aldosterone and renin levels (Type 4)', 'Renal ultrasound for nephrocalcinosis'],
    ['Type 1: oral alkali replacement (sodium bicarbonate or potassium citrate 1-2 mEq/kg/day)', 'Type 2: high-dose alkali replacement (10-15 mEq/kg/day), thiazide diuretics to enhance proximal reabsorption', 'Type 4: treat hyperkalemia (dietary restriction, fludrocortisone if aldosterone deficient, loop diuretics, sodium bicarbonate)', 'Address underlying cause (Sjogren syndrome, medications, diabetes)', 'Monitor bone mineral density'],
    ['Nephrocalcinosis and recurrent kidney stones (Type 1)', 'Osteomalacia and rickets in children (Types 1 and 2)', 'Growth retardation in children', 'Progressive CKD', 'Life-threatening hyperkalemia (Type 4)', 'Fanconi syndrome features (Type 2): glycosuria, phosphaturia, aminoaciduria'],
    'Renal tubular acidosis means your kidneys have trouble removing acid from your blood or holding onto bicarbonate (a natural buffer). This makes your blood slightly too acidic. There are several types, and your doctor determines which one based on blood and urine tests. Treatment usually involves taking alkaline supplements to neutralize the extra acid. With proper treatment, you can prevent kidney stones, bone thinning, and other complications.',
    ['Severe muscle weakness or paralysis (extreme potassium imbalance)', 'Heart palpitations or irregular heartbeat', 'Confusion or difficulty breathing', 'Inability to tolerate oral supplements (vomiting)'],
  ),

  'fanconi-syndrome': rc(
    'fanconi-syndrome', 'Fanconi Syndrome', 'Sindrome de Fanconi',
    'tubular', 'GB91',
    'Generalized dysfunction of the proximal renal tubule causing impaired reabsorption of glucose, amino acids, phosphate, uric acid, bicarbonate, and low-molecular-weight proteins.',
    'Injury to proximal tubular epithelial cells disrupts multiple solute transporters and endocytic machinery. Causes include genetic disorders (cystinosis in children, Wilson disease), drugs (tenofovir, ifosfamide, cisplatin), multiple myeloma (light chains), and heavy metals (lead, cadmium). The resulting renal losses lead to metabolic acidosis, hypophosphatemia, and rickets or osteomalacia.',
    ['Polyuria and polydipsia', 'Rickets or osteomalacia (phosphate wasting)', 'Growth failure in children', 'Muscle weakness (hypokalemia and hypophosphatemia)', 'Type 2 (proximal) renal tubular acidosis', 'Glucosuria with normal blood glucose'],
    ['Urinalysis: glucosuria, aminoaciduria, low-molecular-weight proteinuria, phosphaturia', 'Serum: metabolic acidosis, hypokalemia, hypophosphatemia, hypouricemia', 'Urine uric acid (elevated fractional excretion)', 'Cystine levels (if cystinosis suspected)', 'Bone imaging for rickets/osteomalacia', 'Evaluate for underlying cause (genetic testing, medication review, serum/urine protein electrophoresis)'],
    ['Treat underlying cause (cysteamine for cystinosis, stop offending drug)', 'Phosphate supplementation and active vitamin D (calcitriol)', 'Alkali replacement (potassium citrate or bicarbonate)', 'Potassium supplementation as needed', 'Adequate hydration', 'Monitor growth in children and bone density'],
    ['Severe rickets or osteomalacia with fractures', 'Growth retardation and short stature', 'Progressive CKD (especially in cystinosis)', 'Electrolyte emergencies (severe hypokalemia)', 'Renal failure if underlying cause not treated'],
    'Fanconi syndrome affects the first part of the small tubes in your kidneys, making them unable to reclaim important substances from the urine. You end up losing sugar, minerals, amino acids, and bicarbonate that your body needs. The most important thing is finding and treating the underlying cause. You will likely need supplements to replace what the kidneys are losing, especially phosphate and bicarbonate, to protect your bones and maintain proper body chemistry.',
    ['Severe bone pain or fractures', 'Extreme muscle weakness or difficulty walking', 'Persistent vomiting or dehydration', 'Signs of severe electrolyte imbalance (heart palpitations, confusion)'],
  ),

  'bartter-syndrome': rc(
    'bartter-syndrome', 'Bartter Syndrome', 'Sindrome de Bartter',
    'tubular', 'GB90.4',
    'Rare inherited salt-wasting tubulopathy affecting the thick ascending limb of Henle. Mimics chronic loop diuretic use with hypokalemia, metabolic alkalosis, and normal-to-low blood pressure.',
    'Loss-of-function mutations in channels and transporters of the thick ascending limb (NKCC2, ROMK, ClC-Kb, barttin, or CaSR) impair NaCl reabsorption. This causes renal salt wasting, volume contraction, activation of the renin-angiotensin-aldosterone system, and secondary potassium and hydrogen ion secretion in the collecting duct.',
    ['Polyuria and polydipsia', 'Failure to thrive in neonates (antenatal Bartter)', 'Muscle weakness and cramps (hypokalemia)', 'Salt craving', 'Normal or low blood pressure despite elevated renin/aldosterone', 'Possible sensorineural deafness (Type IV)', 'Nephrocalcinosis in some subtypes'],
    ['Serum electrolytes: hypokalemia, metabolic alkalosis, hypomagnesemia', 'Elevated plasma renin and aldosterone', 'Normal blood pressure', 'Urine: elevated chloride, potassium, and calcium excretion', 'Urine prostaglandin E2 (elevated)', 'Genetic testing for definitive diagnosis (NKCC2, ROMK, ClC-Kb, BSND, CASR)', 'Rule out surreptitious diuretic use (urine drug screen)'],
    ['Potassium supplementation (high doses often required)', 'NSAIDs (indomethacin) to reduce prostaglandin-mediated salt wasting', 'Potassium-sparing diuretics (spironolactone, amiloride)', 'Magnesium supplementation if hypomagnesemic', 'Adequate salt and fluid intake', 'ACE inhibitors in select cases', 'Growth hormone for severe growth failure'],
    ['Growth retardation and short stature', 'Nephrocalcinosis and CKD', 'Severe electrolyte crises', 'Sensorineural hearing loss (Type IV)', 'Intellectual disability in severe neonatal forms', 'Chronic fatigue and reduced quality of life'],
    'Bartter syndrome is a rare inherited condition where your kidneys waste too much salt. It acts as if you are constantly taking a water pill. This leads to low potassium and other mineral imbalances. Treatment involves replacing the lost potassium and sometimes using anti-inflammatory medications to help the kidneys hold onto salt. With consistent treatment most patients do well, though lifelong supplementation and monitoring are needed.',
    ['Severe muscle weakness or inability to move', 'Heart palpitations or irregular heartbeat (dangerous hypokalemia)', 'Seizures', 'Severe dehydration in neonates or infants', 'Persistent vomiting'],
  ),

  // ---- Vascular (4) ------------------------------------------------------

  'renal-artery-stenosis': rc(
    'renal-artery-stenosis', 'Renal Artery Stenosis', 'Estenosis de la arteria renal',
    'vascular', 'BB80',
    'Narrowing of one or both renal arteries, most commonly from atherosclerosis (older adults) or fibromuscular dysplasia (young women). A potentially reversible cause of secondary hypertension and ischemic nephropathy.',
    'Reduced renal perfusion pressure distal to the stenosis activates the renin-angiotensin-aldosterone system, causing sodium retention and vasoconstriction (renovascular hypertension). Chronic ischemia leads to tubular atrophy, interstitial fibrosis, and progressive nephron loss (ischemic nephropathy).',
    ['Resistant hypertension (uncontrolled on 3+ medications)', 'Abrupt onset of hypertension before age 30 (FMD) or after age 55 (atherosclerotic)', 'Flash pulmonary edema with bilateral disease', 'Epigastric or flank bruit', 'Asymmetric kidney size', 'Acute kidney injury after starting ACE inhibitor or ARB'],
    ['Duplex renal ultrasound (first-line screening)', 'CT angiography or MR angiography (confirmatory)', 'Captopril renography (functional significance)', 'Renal arteriography (gold standard, invasive)', 'Plasma renin activity (elevated)', 'Serum creatinine trend and kidney size comparison'],
    ['Medical therapy first-line for atherosclerotic RAS: antihypertensives (ACE inhibitor/ARB with close creatinine monitoring), statin, antiplatelet', 'Revascularization (angioplasty with stenting) for: FMD, recurrent flash pulmonary edema, refractory hypertension, progressive CKD', 'FMD: angioplasty alone (no stent) is often curative', 'Surgical revascularization for complex anatomy', 'Risk factor modification (smoking cessation, diabetes control)'],
    ['Progressive ischemic nephropathy and CKD', 'Refractory hypertension with end-organ damage', 'Flash pulmonary edema', 'Renal atrophy of affected kidney', 'Cardiovascular events (high atherosclerotic burden)'],
    'Renal artery stenosis means the blood vessel supplying your kidney is narrowed, reducing blood flow. Your kidney responds by releasing hormones that raise blood pressure. In younger patients, a condition called fibromuscular dysplasia is often the cause and can frequently be fixed with a balloon procedure. In older patients, the narrowing is usually from cholesterol buildup, and treatment focuses on medications to control blood pressure and protect the kidneys.',
    ['Sudden severe hypertension with headache, vision changes, or chest pain', 'Acute shortness of breath (flash pulmonary edema)', 'Rapid rise in creatinine after starting blood pressure medication', 'New flank pain suggesting renal infarction'],
  ),

  'hemolytic-uremic-syndrome': rc(
    'hemolytic-uremic-syndrome', 'Hemolytic Uremic Syndrome (HUS)', 'Sindrome hemolitico uremico',
    'vascular', 'BB81',
    'Thrombotic microangiopathy characterized by the triad of microangiopathic hemolytic anemia, thrombocytopenia, and acute kidney injury. Most commonly caused by Shiga toxin-producing E. coli (STEC-HUS) in children.',
    'Typical HUS: Shiga toxin from E. coli O157:H7 binds to Gb3 receptors on renal endothelial cells, causing endothelial injury, platelet activation, and fibrin deposition in glomerular capillaries. Atypical HUS: uncontrolled complement activation (mutations in complement regulatory proteins) causes endothelial damage and thrombotic microangiopathy.',
    ['Bloody diarrhea prodrome (typical HUS, 5-10 days before)', 'Pallor and fatigue (hemolytic anemia)', 'Petechiae or easy bruising (thrombocytopenia)', 'Oliguria or anuria (acute kidney injury)', 'Hypertension', 'Irritability, seizures, or altered mental status (CNS involvement)'],
    ['CBC: anemia with schistocytes on smear, thrombocytopenia', 'Elevated LDH, indirect bilirubin, reticulocyte count', 'Low or undetectable haptoglobin', 'Negative direct Coombs test', 'Elevated creatinine and BUN', 'Stool culture and Shiga toxin assay', 'ADAMTS13 activity (normal in HUS, low in TTP)', 'Complement studies and genetic testing for atypical HUS'],
    ['Typical STEC-HUS: supportive care (IV fluids, transfusions, dialysis as needed)', 'Avoid antibiotics and antimotility agents (may worsen toxin release)', 'Atypical HUS: eculizumab (C5 complement inhibitor) is first-line', 'Ravulizumab (long-acting C5 inhibitor) as alternative', 'RBC transfusions for severe anemia (avoid platelet transfusions unless active bleeding)', 'Renal replacement therapy for severe AKI', 'Meningococcal vaccination before complement inhibitor therapy'],
    ['Need for acute dialysis (50-70%)', 'Residual CKD or hypertension (25-30%)', 'ESRD (5% typical, higher in atypical)', 'Neurological complications (seizures, stroke)', 'Recurrence in atypical HUS without complement blockade', 'Cardiac and pancreatic involvement (rare)'],
    'HUS most commonly occurs in children after a bout of bloody diarrhea from a bacterial infection (usually E. coli). The bacterial toxin damages blood vessels in the kidneys, causing small clots, red blood cell destruction, and kidney failure. Most children with typical HUS recover with supportive care, though some need temporary dialysis. Atypical HUS is caused by the immune system and requires specialized medications. Both forms need close monitoring for long-term kidney health.',
    ['No urine output for 12+ hours', 'Seizures or confusion', 'Severe pallor or rapid breathing', 'Bloody diarrhea with progressive weakness', 'Persistent vomiting with inability to stay hydrated'],
  ),

  'thrombotic-thrombocytopenic-purpura': rc(
    'thrombotic-thrombocytopenic-purpura', 'Thrombotic Thrombocytopenic Purpura (TTP)', 'Purpura trombotica trombocitopenica',
    'vascular', 'BB82',
    'Life-threatening thrombotic microangiopathy caused by severe ADAMTS13 deficiency (<10%), leading to uncleaved ultra-large von Willebrand factor multimers and systemic platelet-rich thrombi.',
    'Acquired autoantibodies (or rarely congenital deficiency) inhibit ADAMTS13, the metalloprotease that cleaves ultra-large VWF multimers. Uncleaved VWF strings on endothelium trap platelets, forming microthrombi in arterioles and capillaries throughout the body, causing organ ischemia, red cell shearing, and consumptive thrombocytopenia.',
    ['Classic pentad (rarely complete): microangiopathic hemolytic anemia, thrombocytopenia, neurological symptoms, renal impairment, fever', 'Neurological: confusion, headache, focal deficits, seizures', 'Purpura and mucosal bleeding', 'Fatigue and jaundice', 'Abdominal pain, nausea', 'Renal involvement usually milder than HUS'],
    ['CBC: severe thrombocytopenia, anemia with schistocytes', 'ADAMTS13 activity <10% (diagnostic)', 'ADAMTS13 inhibitor (autoantibody) present', 'Elevated LDH, indirect bilirubin; low haptoglobin', 'Negative direct Coombs test', 'Creatinine (usually mildly elevated)', 'Calculate PLASMIC score for clinical prediction'],
    ['Urgent plasma exchange (therapeutic plasmapheresis) is lifesaving', 'Corticosteroids (methylprednisolone 1 g/day IV initially)', 'Caplacizumab (anti-VWF nanobody) to reduce thrombotic events', 'Rituximab for refractory or relapsing disease', 'Do NOT transfuse platelets (may worsen thrombosis)', 'Recombinant ADAMTS13 (congenital TTP)', 'Folic acid supplementation'],
    ['Mortality >90% untreated; ~10-20% with treatment', 'Relapse in 30-50% of acquired TTP', 'Ischemic stroke or myocardial infarction', 'Chronic cognitive impairment', 'Depression and fatigue (long-term sequelae)', 'ESRD is rare compared to HUS'],
    'TTP is a serious blood disorder where an enzyme that normally trims a clotting protein is blocked by your immune system. Without this enzyme, abnormal clotting occurs in small blood vessels throughout the body, destroying red blood cells and using up platelets. TTP is a medical emergency requiring urgent plasma exchange treatment, which removes the harmful antibodies and replaces the missing enzyme. With prompt treatment, most patients recover, though the condition can relapse.',
    ['Any neurological changes (confusion, slurred speech, weakness)', 'Severe headache', 'Chest pain', 'New bruising or bleeding', 'Fever with known TTP history', 'Dark urine suggesting hemolysis flare'],
  ),

  'renal-vein-thrombosis': rc(
    'renal-vein-thrombosis', 'Renal Vein Thrombosis', 'Trombosis de la vena renal',
    'vascular', 'BB85',
    'Thrombotic occlusion of one or both renal veins, most commonly associated with nephrotic syndrome (especially membranous nephropathy) or renal cell carcinoma.',
    'Hypercoagulable state (loss of antithrombin III, protein C, and protein S in nephrotic syndrome, or tumor thrombus extension in RCC) promotes clot formation in renal veins. Acute occlusion causes renal congestion, hemorrhage, and infarction. Chronic occlusion may develop collateral drainage and remain clinically silent.',
    ['Acute: flank pain, hematuria, nausea, acute kidney injury', 'Chronic: often asymptomatic or discovered incidentally', 'Left-sided varicocele (left renal vein drains left gonadal vein)', 'Worsening proteinuria in nephrotic patients', 'Pulmonary embolism as presenting event', 'Bilateral RVT may cause acute renal failure'],
    ['CT venography or MR venography (imaging of choice)', 'Doppler renal ultrasound (absent or reversed venous flow)', 'D-dimer (elevated but nonspecific)', 'Urinalysis (hematuria, worsening proteinuria)', 'Evaluate for nephrotic syndrome and malignancy', 'CT chest if PE suspected'],
    ['Anticoagulation with heparin then warfarin or DOAC (3-6 months minimum)', 'Longer or indefinite anticoagulation if ongoing risk factor (persistent nephrotic syndrome)', 'Catheter-directed thrombolysis for acute bilateral RVT with renal failure', 'Treat underlying cause (nephrotic syndrome management, oncologic treatment)', 'IVC filter if anticoagulation contraindicated'],
    ['Pulmonary embolism', 'Acute kidney injury or renal infarction', 'Chronic kidney disease', 'Extension into IVC', 'Contralateral kidney involvement', 'Adrenal hemorrhage (left adrenal vein drainage)'],
    'Renal vein thrombosis means a blood clot has formed in the vein draining blood from your kidney. It often occurs in patients who lose a lot of protein in the urine (nephrotic syndrome), which makes the blood more likely to clot. Treatment with blood thinners dissolves the clot and prevents it from traveling to the lungs. Managing the underlying kidney condition is equally important to prevent recurrence.',
    ['Sudden severe flank pain', 'Blood in the urine', 'Shortness of breath or chest pain (PE)', 'Rapid decrease in urine output', 'New swelling in one leg'],
  ),

  // ---- Obstructive (4) ---------------------------------------------------

  'nephrolithiasis': rc(
    'nephrolithiasis', 'Nephrolithiasis (Kidney Stones)', 'Nefrolitiasis (calculos renales)',
    'obstructive', 'GB70',
    'Formation of solid crystal aggregates in the urinary tract. Most common types: calcium oxalate (70-80%), calcium phosphate, uric acid, struvite (infection-related), and cystine.',
    'Supersaturation of urine with stone-forming salts exceeds solubility, leading to crystal nucleation, growth, and aggregation. Low urine volume, high excretion of calcium, oxalate, or uric acid, and low citrate (a natural inhibitor) promote stone formation. Struvite stones form in alkaline urine infected with urease-producing organisms (Proteus). Cystine stones result from inherited cystinuria.',
    ['Acute, severe, colicky flank pain radiating to groin (renal colic)', 'Hematuria (gross or microscopic)', 'Nausea and vomiting', 'Urinary urgency and frequency (distal stones)', 'Costovertebral angle tenderness', 'Restlessness (cannot find comfortable position)'],
    ['Non-contrast CT abdomen/pelvis (gold standard)', 'Urinalysis (hematuria, pH, crystals)', 'Basic metabolic panel (creatinine, calcium)', 'Uric acid level', 'Stone analysis when passed', '24-hour urine collection (for recurrent stone formers): calcium, oxalate, citrate, uric acid, sodium, volume'],
    ['Acute: IV fluids, NSAIDs (ketorolac) and/or opioids for pain, antiemetics, tamsulosin (medical expulsive therapy for stones 5-10 mm)', 'Stones <5 mm: observation with hydration (most pass spontaneously)', 'Stones >10 mm or complicated: urologic intervention (shock wave lithotripsy, ureteroscopy with laser, percutaneous nephrolithotomy)', 'Prevention: increase fluid intake to >2.5 L/day, dietary modifications based on stone type', 'Thiazide diuretics (calcium stones), potassium citrate (calcium/uric acid), allopurinol (uric acid stones)'],
    ['Urinary tract obstruction with hydronephrosis', 'Acute kidney injury (especially with single kidney or bilateral stones)', 'UTI and urosepsis (obstructed infected kidney is a urologic emergency)', 'Recurrence (50% within 5-10 years without prevention)', 'Chronic kidney disease from recurrent obstruction'],
    'Kidney stones form when minerals in your urine become too concentrated and crystallize. The pain occurs when a stone moves into the ureter (the tube connecting kidney to bladder), causing spasm and blockage. Small stones usually pass on their own with fluids and pain medication, while larger stones may need a procedure to break them up or remove them. Drinking plenty of water every day is the single most important thing you can do to prevent new stones.',
    ['Fever with flank pain (infected obstructed kidney requires emergency drainage)', 'Inability to keep fluids down from vomiting', 'Anuria or minimal urine output', 'Pain uncontrolled by oral medications', 'Known single kidney with stone symptoms'],
  ),

  'hydronephrosis': rc(
    'hydronephrosis', 'Hydronephrosis', 'Hidronefrosis',
    'obstructive', 'GB71',
    'Dilation of the renal pelvis and calyces due to obstruction of urine outflow. Can be unilateral or bilateral, acute or chronic, and ranges from mild to severe.',
    'Obstruction at any level from the renal pelvis to the urethral meatus raises intraluminal pressure, which is transmitted retrograde to the collecting system. Acute obstruction increases tubular and Bowman capsule pressure, reducing GFR. Chronic obstruction leads to tubular atrophy, interstitial fibrosis, and irreversible nephron loss. Common causes include stones, BPH, tumors, UPJ obstruction, and pregnancy.',
    ['Flank pain or dull aching (chronic)', 'Acute renal colic if sudden obstruction', 'Decreased urine output or anuria (bilateral or single kidney)', 'Recurrent UTIs', 'Nausea and vomiting', 'Palpable flank mass in severe cases', 'May be asymptomatic (discovered incidentally)'],
    ['Renal ultrasound (first-line: shows collecting system dilation)', 'CT urogram for cause identification', 'Nuclear renal scan (MAG3) for functional obstruction and split function', 'BUN and creatinine', 'Urinalysis and urine culture', 'Post-void residual volume (if lower tract obstruction suspected)'],
    ['Urgent decompression if infected or bilateral with AKI (nephrostomy tube or ureteral stent)', 'Treat underlying cause: stone removal, BPH treatment (tamsulosin, surgical), tumor resection', 'UPJ obstruction: pyeloplasty', 'Posterior urethral valves (children): valve ablation', 'Monitor mild antenatal hydronephrosis (many resolve)', 'Nephrectomy for non-functioning kidney with recurrent infections'],
    ['Obstructive uropathy and AKI', 'Pyonephrosis (infected hydronephrosis) - urologic emergency', 'Progressive renal atrophy and CKD', 'Post-obstructive diuresis (after relief of bilateral obstruction)', 'Hypertension', 'Spontaneous rupture of collecting system (rare)'],
    'Hydronephrosis means your kidney is swollen because urine cannot drain properly. Think of it like a backed-up plumbing system. The blockage could be from a kidney stone, enlarged prostate, tumor, or a narrowing in the drainage system. Treatment focuses on relieving the blockage to allow urine to flow again and protect kidney function. If there are signs of infection along with the blockage, this is an emergency requiring immediate drainage.',
    ['Fever with known or suspected urinary obstruction', 'No urine output (bilateral obstruction)', 'Severe unrelenting flank pain', 'Confusion or sepsis symptoms in setting of obstruction', 'Worsening kidney function on lab tests'],
  ),

  'benign-prostatic-hyperplasia-obstruction': rc(
    'benign-prostatic-hyperplasia-obstruction', 'BPH-Related Obstructive Uropathy', 'Uropatia obstructiva por hiperplasia prostatica',
    'obstructive', 'GB72',
    'Chronic bladder outlet obstruction from benign prostatic enlargement leading to bilateral hydronephrosis, bladder dysfunction, and potential renal impairment.',
    'Progressive prostatic enlargement compresses the prostatic urethra, increasing bladder outlet resistance. The detrusor muscle initially hypertrophies to overcome resistance, then decompensates. Rising intravesical pressures transmit retrograde through ureters to the renal pelvis, causing bilateral hydronephrosis and obstructive nephropathy. Post-renal AKI occurs in complete retention.',
    ['Lower urinary tract symptoms: hesitancy, weak stream, straining, incomplete emptying', 'Nocturia and frequency', 'Overflow incontinence', 'Recurrent UTIs', 'Acute urinary retention', 'Bilateral flank pain if hydronephrosis', 'Elevated creatinine discovered incidentally'],
    ['Digital rectal exam (enlarged, smooth, rubbery prostate)', 'PSA (to exclude prostate cancer)', 'Post-void residual volume (elevated)', 'Renal ultrasound (bilateral hydronephrosis, bladder wall thickening)', 'Serum creatinine and electrolytes', 'Uroflowmetry', 'Urodynamic studies in complex cases'],
    ['Urinary catheter placement for acute retention or renal impairment', 'Alpha-blockers (tamsulosin, doxazosin) for symptom relief', '5-alpha reductase inhibitors (finasteride, dutasteride) to shrink prostate', 'Combination therapy for larger prostates', 'Surgical: TURP, HoLEP, UroLift, Rezum for refractory symptoms', 'Monitor for post-obstructive diuresis after catheter placement', 'Avoid anticholinergics and sympathomimetics'],
    ['Chronic kidney disease from prolonged obstruction', 'Recurrent UTIs and urosepsis', 'Bladder stones', 'Detrusor failure (atonic bladder)', 'Gross hematuria', 'Post-obstructive diuresis with electrolyte imbalance'],
    'When the prostate gland enlarges, it can squeeze the urethra and make it hard to empty the bladder. Over time, urine can back up into the kidneys and potentially damage them. Medications can relax the prostate muscle or shrink the gland. If medications are not enough, several minimally invasive procedures can open up the blocked channel. If your kidneys are already affected, a catheter may be needed first to relieve the pressure while planning definitive treatment.',
    ['Complete inability to urinate (acute retention)', 'Fever or chills with urinary symptoms', 'Flank pain with known BPH', 'Confusion or nausea with elevated creatinine', 'Large volume diuresis after catheter placement (monitor closely)'],
  ),

  'ureteropelvic-junction-obstruction': rc(
    'ureteropelvic-junction-obstruction', 'Ureteropelvic Junction Obstruction', 'Obstruccion de la union ureteropelvica',
    'obstructive', 'GB73',
    'Impaired urine flow at the junction of the renal pelvis and proximal ureter, the most common cause of hydronephrosis in children. Can be congenital or acquired.',
    'Congenital UPJ obstruction results from an intrinsic aperistaltic segment of the proximal ureter, extrinsic compression by a crossing vessel, or abnormal insertion angle. Acquired causes include stones, scarring, or tumors. The functional obstruction prevents efficient pelvis-to-ureter urine transfer, causing progressive pelvic dilation and potential parenchymal damage.',
    ['Antenatal hydronephrosis on prenatal ultrasound (most common presentation)', 'Intermittent flank pain, often after fluid intake', 'UTI in infants (may be presenting sign)', 'Palpable abdominal mass in neonates (large hydronephrotic kidney)', 'Hematuria after trauma', 'May be incidentally discovered in adults'],
    ['Renal ultrasound (hydronephrosis without ureteral dilation)', 'MAG3 diuretic renography (functional obstruction and split renal function)', 'MR urography (anatomic detail in older children and adults)', 'VCUG (to exclude vesicoureteral reflux)', 'Serum creatinine (if bilateral or solitary kidney)'],
    ['Observation with serial ultrasound for mild cases with preserved function', 'Dismembered pyeloplasty (Anderson-Hynes): gold standard surgical repair (>95% success)', 'Robotic or laparoscopic pyeloplasty in adults', 'Endopyelotomy for select cases', 'Temporary nephrostomy or stent if infected or acute decompensation', 'Nephrectomy only for non-functioning kidney (<10% split function)'],
    ['Progressive loss of renal function', 'Recurrent UTIs', 'Stone formation in dilated collecting system', 'Spontaneous rupture of renal pelvis (rare)', 'Hypertension', 'Pain episodes affecting quality of life'],
    'UPJ obstruction means there is a narrowing where your kidney connects to the tube (ureter) that carries urine to the bladder. It is often found before birth on prenatal ultrasound. Many mild cases in newborns improve on their own with careful monitoring. When surgery is needed, pyeloplasty has an excellent success rate of over 95%. In adults, symptoms often include intermittent flank pain, especially after drinking large amounts of fluid.',
    ['Fever with flank pain (infected hydronephrosis)', 'Severe or worsening flank pain', 'Hematuria after abdominal trauma', 'Signs of UTI in an infant with known hydronephrosis'],
  ),

  // ---- Electrolyte (4) ---------------------------------------------------

  'hyperkalemia': rc(
    'hyperkalemia', 'Hyperkalemia', 'Hiperpotasemia',
    'electrolyte', 'DB50',
    'Serum potassium >5.0 mEq/L, a potentially life-threatening electrolyte emergency due to risk of fatal cardiac arrhythmias. Most commonly caused by renal failure, medications, or tissue breakdown.',
    'Potassium homeostasis depends on renal excretion (90%) and transcellular shifts. Hyperkalemia results from increased intake, transcellular shift (acidosis, insulin deficiency, cell lysis), or decreased renal excretion (AKI, CKD, hypoaldosteronism, K-sparing diuretics). Elevated extracellular K+ reduces the resting membrane potential, affecting cardiac conduction and increasing arrhythmia risk.',
    ['Often asymptomatic until severe', 'Muscle weakness and fatigue', 'Paresthesias', 'Nausea and vomiting', 'Cardiac: palpitations, bradycardia, cardiac arrest', 'ECG changes: peaked T waves, widened QRS, loss of P waves, sine wave pattern'],
    ['Serum potassium (repeat to confirm, avoid hemolysis artifact)', '12-lead ECG (immediate)', 'BMP: creatinine, bicarbonate, glucose', 'Arterial blood gas if acidosis suspected', 'Serum digoxin level if applicable', 'Urinary potassium and TTKG to assess renal excretion', 'CK, LDH, uric acid if rhabdomyolysis or tumor lysis suspected'],
    ['ECG changes present: IV calcium gluconate (membrane stabilizer, works in minutes)', 'Shift K+ intracellularly: insulin + dextrose, inhaled beta-agonist (albuterol), sodium bicarbonate (if acidotic)', 'Remove K+ from body: sodium polystyrene sulfonate (Kayexalate), patiromer, or sodium zirconium cyclosilicate', 'Loop diuretics if volume tolerant', 'Hemodialysis for severe or refractory hyperkalemia', 'Discontinue offending medications (ACE inhibitors, K-sparing diuretics, NSAIDs)', 'Low-potassium diet education'],
    ['Fatal cardiac arrhythmia (ventricular fibrillation, asystole)', 'Cardiac arrest', 'Respiratory muscle weakness', 'Recurrence if underlying cause not addressed', 'Iatrogenic hypoglycemia from insulin treatment'],
    'Hyperkalemia means your blood potassium level is too high. Potassium is essential for your heart and muscles, but too much can cause dangerous heart rhythm problems. This often happens when the kidneys cannot remove enough potassium (as in kidney disease) or when certain medications accumulate potassium. Treatment may involve giving medications to protect the heart, shift potassium into cells, and remove it from the body. Avoiding high-potassium foods and adjusting medications are key for prevention.',
    ['Any ECG changes (peaked T waves, wide QRS)', 'Muscle weakness or difficulty breathing', 'Heart palpitations or slow heart rate', 'Potassium >6.0 mEq/L', 'Known renal failure with missed dialysis and symptoms'],
  ),

  'hyponatremia': rc(
    'hyponatremia', 'Hyponatremia', 'Hiponatremia',
    'electrolyte', 'DB51',
    'Serum sodium <135 mEq/L, the most common electrolyte abnormality in hospitalized patients. Severity ranges from asymptomatic to life-threatening cerebral edema.',
    'Sodium is the primary determinant of serum osmolality and extracellular fluid volume. Hyponatremia reflects excess water relative to sodium. ADH (vasopressin) is the key regulator; inappropriate secretion (SIADH) is a common cause. Classification by volume status: hypovolemic (sodium and water loss, sodium lost more), euvolemic (SIADH, hypothyroidism, adrenal insufficiency), hypervolemic (heart failure, cirrhosis, nephrotic syndrome—dilutional).',
    ['Mild (130-134): often asymptomatic', 'Moderate (125-129): nausea, headache, fatigue, muscle cramps', 'Severe (<125): confusion, seizures, coma, respiratory arrest', 'Chronic: gait instability, falls, osteoporosis, cognitive impairment', 'Rate of development matters: acute (<48h) more symptomatic than chronic'],
    ['Serum sodium and osmolality', 'Urine sodium and osmolality', 'Volume status assessment (clinical exam)', 'TSH and cortisol (exclude hypothyroidism and adrenal insufficiency)', 'BMP including glucose (correct for hyperglycemia)', 'Liver function, BNP if hypervolemic', 'Chest X-ray and head CT if SIADH suspected'],
    ['Hypovolemic: isotonic saline (0.9% NaCl)', 'Euvolemic (SIADH): fluid restriction (800-1000 mL/day), salt tablets, urea, tolvaptan (vasopressin receptor antagonist)', 'Hypervolemic: fluid restriction, loop diuretics, treat underlying cause', 'Severe symptomatic: hypertonic saline (3% NaCl) 100-150 mL bolus', 'CRITICAL: correct no faster than 8-10 mEq/L in 24 hours to avoid osmotic demyelination syndrome', 'Desmopressin clamp if overcorrection occurs'],
    ['Osmotic demyelination syndrome (central pontine myelinolysis) from overcorrection', 'Seizures and status epilepticus', 'Brain herniation from cerebral edema', 'Falls and fractures (chronic hyponatremia)', 'Respiratory arrest in severe acute cases'],
    'Hyponatremia means your blood sodium is too low, which affects the water balance in your body and brain. It can cause symptoms ranging from mild nausea and headaches to serious confusion or seizures. The treatment depends on the cause: sometimes you need more salt, sometimes you need to drink less fluid, and sometimes your doctor needs to treat an underlying condition. It is important that sodium is corrected slowly, because fixing it too fast can cause a different kind of brain injury.',
    ['Confusion, seizures, or loss of consciousness', 'Severe headache with nausea and vomiting', 'Sodium <120 mEq/L', 'Symptoms developing rapidly (acute hyponatremia)', 'Respiratory distress'],
  ),

  'hypercalcemia': rc(
    'hypercalcemia', 'Hypercalcemia', 'Hipercalcemia',
    'electrolyte', 'DB52',
    'Serum calcium >10.5 mg/dL (or ionized calcium >5.2 mg/dL). Most commonly caused by primary hyperparathyroidism (outpatient) or malignancy (inpatient). Mnemonic: "stones, bones, groans, and psychiatric moans."',
    'Calcium homeostasis involves PTH, vitamin D, and calcitonin. Primary hyperparathyroidism: autonomous PTH secretion increases bone resorption, renal calcium reabsorption, and calcitriol production. Malignancy: PTHrP secretion (humoral), osteolytic metastases, or calcitriol production by lymphoma. Elevated calcium impairs renal concentrating ability (nephrogenic DI), shortens cardiac QT interval, and causes widespread smooth muscle dysfunction.',
    ['Stones: nephrolithiasis, nephrocalcinosis', 'Bones: bone pain, osteoporosis, pathologic fractures', 'Groans: constipation, nausea, anorexia, pancreatitis', 'Psychiatric moans: confusion, lethargy, depression, coma', 'Polyuria and polydipsia (nephrogenic DI)', 'Shortened QT interval, bradycardia'],
    ['Serum calcium (total and ionized), albumin for correction', 'Intact PTH level (elevated in hyperparathyroidism, suppressed in malignancy)', 'PTHrP (if malignancy suspected)', 'Vitamin D levels (25-OH and 1,25-dihydroxy)', 'Serum phosphorus (low in hyperparathyroidism, variable in malignancy)', 'BUN, creatinine', '24-hour urine calcium', 'ECG (shortened QT interval)', 'Bone densitometry, sestamibi scan if hyperparathyroidism'],
    ['Acute severe (>14 mg/dL or symptomatic): aggressive IV normal saline (200-300 mL/h), IV bisphosphonate (zoledronic acid), calcitonin (rapid but transient effect)', 'Denosumab if refractory to bisphosphonates', 'Loop diuretics only after adequate volume repletion', 'Dialysis for severe hypercalcemia with renal failure', 'Hyperparathyroidism: parathyroidectomy (definitive), cinacalcet if not surgical candidate', 'Malignancy: treat underlying cancer', 'Avoid thiazide diuretics, lithium, immobilization'],
    ['Acute kidney injury from dehydration and nephrocalcinosis', 'Cardiac arrhythmias', 'Pancreatitis', 'Nephrocalcinosis and chronic kidney disease', 'Coma and death if untreated severe hypercalcemia', 'Pathologic fractures from bone resorption'],
    'Hypercalcemia means too much calcium in your blood. The most common causes are an overactive parathyroid gland or cancer. Symptoms follow the classic pattern of "stones, bones, groans, and moans"—kidney stones, bone pain, stomach problems, and confusion. Mild cases may only need monitoring, but severe hypercalcemia is a medical emergency requiring IV fluids and medications to lower calcium quickly. Finding and treating the underlying cause is essential.',
    ['Calcium >14 mg/dL', 'Confusion, lethargy, or altered consciousness', 'Severe dehydration with inability to drink', 'Heart rhythm abnormalities', 'Severe abdominal pain (pancreatitis)'],
  ),

  'hypomagnesemia': rc(
    'hypomagnesemia', 'Hypomagnesemia', 'Hipomagnesemia',
    'electrolyte', 'DB53',
    'Serum magnesium <1.7 mg/dL. Commonly caused by GI losses, renal wasting (diuretics, alcohol), or poor intake. Often coexists with hypokalemia and hypocalcemia that are refractory until magnesium is repleted.',
    'Magnesium is critical for Na+/K+-ATPase function, PTH secretion and action, and cardiac ion channel stability. Renal wasting occurs with loop and thiazide diuretics, alcohol, aminoglycosides, cisplatin, and Gitelman/Bartter syndromes. GI losses from chronic diarrhea, malabsorption, or PPI use. Low Mg impairs ROMK channels (causing K wasting) and PTH release (causing functional hypoparathyroidism with hypocalcemia).',
    ['Neuromuscular: tremor, tetany, positive Chvostek and Trousseau signs', 'Cardiac: prolonged QT, torsades de pointes, digitalis sensitivity', 'Weakness and fatigue', 'Refractory hypokalemia despite potassium supplementation', 'Refractory hypocalcemia despite calcium supplementation', 'Seizures in severe cases', 'Often asymptomatic when mild'],
    ['Serum magnesium level', 'Serum potassium and calcium (frequently co-depleted)', 'Urine magnesium: >24 mg/day suggests renal wasting; <24 mg/day suggests GI loss or poor intake', 'Fractional excretion of magnesium', 'ECG (prolonged QT, U waves)', 'BMP including creatinine', 'Review medications (diuretics, PPIs, aminoglycosides)'],
    ['Severe or symptomatic: IV magnesium sulfate (1-2 g over 15-60 minutes, then infusion)', 'Oral magnesium oxide, citrate, or glycinate for mild/chronic cases', 'Replete magnesium BEFORE correcting hypokalemia or hypocalcemia', 'Address underlying cause (discontinue offending medication, treat diarrhea)', 'Potassium-sparing diuretics (amiloride) for chronic renal wasting', 'Dietary counseling (nuts, seeds, leafy greens, whole grains)', 'Monitor telemetry in severe cases'],
    ['Torsades de pointes and sudden cardiac death', 'Refractory hypokalemia leading to cardiac arrhythmia', 'Refractory hypocalcemia with tetany', 'Seizures', 'Increased digoxin toxicity', 'Chronic: osteoporosis, insulin resistance'],
    'Magnesium is a mineral essential for your heart rhythm, muscles, and nerves. Low magnesium often occurs alongside low potassium and calcium, and all three need to be corrected together—in fact, your potassium and calcium levels may not respond to treatment until magnesium is fixed first. Common causes include certain medications (especially diuretics and heartburn drugs), alcohol use, and digestive problems. Treatment involves magnesium supplements by IV or orally.',
    ['Irregular heartbeat or palpitations', 'Muscle spasms or seizures', 'Numbness or tingling around mouth or fingertips', 'Severe weakness', 'Known QT prolongation with low magnesium'],
  ),

  // ---- Acid-Base (4) -----------------------------------------------------

  'metabolic-acidosis': rc(
    'metabolic-acidosis', 'Metabolic Acidosis', 'Acidosis metabolica',
    'acid-base', 'DB60',
    'Primary decrease in serum bicarbonate (<22 mEq/L) with low pH, classified by anion gap into high anion gap (HAGMA) and normal anion gap (NAGMA). Common etiologies remembered by MUDPILES and HARDUP mnemonics.',
    'HAGMA: accumulation of unmeasured anions from endogenous acids (lactic acidosis, ketoacidosis, uremia) or exogenous toxins (methanol, ethylene glycol, salicylates). Anion gap = Na - (Cl + HCO3), normal 8-12. NAGMA: loss of bicarbonate (diarrhea, RTA) or failure to excrete acid (RTA, early CKD). The body compensates via respiratory alkalosis (Kussmaul respirations) per Winter formula: expected pCO2 = 1.5(HCO3) + 8 ± 2.',
    ['Kussmaul respirations (deep, rapid breathing)', 'Fatigue and malaise', 'Nausea, vomiting, abdominal pain', 'Altered mental status in severe cases', 'Hypotension from vasodilation', 'Hyperkalemia (transcellular potassium shift)', 'Fruity breath in DKA', 'Symptoms of underlying cause'],
    ['Arterial blood gas (pH, pCO2, HCO3)', 'Basic metabolic panel (calculate anion gap)', 'Delta-delta ratio to identify mixed disorders', 'Serum lactate, ketones, glucose', 'Serum osmolality and osmolar gap (toxic ingestion)', 'Urine anion gap (NAGMA workup: positive = RTA, negative = GI loss)', 'Toxicology screen if ingestion suspected', 'Renal function tests'],
    ['Treat underlying cause (insulin for DKA, fluids for lactic acidosis, fomepizole for toxic alcohols, dialysis for severe uremia)', 'IV sodium bicarbonate for severe acidosis (pH <7.1) or NAGMA', 'Volume resuscitation for dehydration', 'Correct electrolyte abnormalities (potassium shifts with correction)', 'Hemodialysis for toxic ingestions or severe renal failure', 'Oral alkali for chronic metabolic acidosis (CKD, RTA)'],
    ['Cardiac arrhythmias from acidosis and hyperkalemia', 'Cardiovascular collapse in severe acidosis', 'Chronic bone demineralization', 'Muscle wasting (chronic acidosis)', 'Accelerated CKD progression', 'Death if underlying cause not identified and treated'],
    'Metabolic acidosis means your blood has become too acidic because of either excess acid production or loss of bicarbonate (your body\'s natural buffer). The most important step is finding WHY it is happening—common causes include uncontrolled diabetes, kidney failure, severe infection, or poisoning. Your body tries to compensate by breathing faster and deeper. Treatment focuses on fixing the underlying problem, and in severe cases, giving bicarbonate directly into your vein.',
    ['Rapid deep breathing (Kussmaul respirations)', 'Confusion or altered consciousness', 'Severe nausea and abdominal pain (DKA)', 'Known ingestion of toxic substance', 'pH <7.2 or bicarbonate <10 mEq/L'],
  ),

  'metabolic-alkalosis': rc(
    'metabolic-alkalosis', 'Metabolic Alkalosis', 'Alcalosis metabolica',
    'acid-base', 'DB61',
    'Primary increase in serum bicarbonate (>28 mEq/L) with elevated pH. Most commonly caused by vomiting, nasogastric suction, or diuretic use. Classified as chloride-responsive (urine Cl <20) or chloride-resistant (urine Cl >20).',
    'Generation phase: HCl loss (vomiting, NG suction), bicarbonate gain (antacids, citrate in transfusions), or contraction alkalosis (diuretics). Maintenance phase: chloride depletion, hypokalemia, and volume contraction prevent renal bicarbonate excretion. Respiratory compensation via hypoventilation is limited (hypoxia drive prevents pCO2 rising above ~55 mmHg).',
    ['Often asymptomatic with mild alkalosis', 'Muscle cramps and weakness (hypokalemia)', 'Paresthesias and tetany (decreased ionized calcium)', 'Arrhythmias', 'Confusion and lethargy in severe cases', 'Hypoventilation (compensatory)', 'Signs of volume depletion if chloride-responsive'],
    ['Arterial blood gas (elevated pH, elevated HCO3, compensatory elevated pCO2)', 'BMP: elevated bicarbonate, hypokalemia, hypochloremia', 'Urine chloride: <20 mEq/L (chloride-responsive: vomiting, diuretics) or >20 mEq/L (chloride-resistant: hyperaldosteronism, Bartter/Gitelman)', 'Serum magnesium', 'Blood pressure (hypertension suggests mineralocorticoid excess)', 'Renin and aldosterone levels if chloride-resistant'],
    ['Chloride-responsive: IV normal saline, KCl replacement, treat underlying cause (antiemetics, stop diuretic)', 'Chloride-resistant: treat underlying cause (spironolactone for hyperaldosteronism, surgical adrenalectomy for adenoma)', 'Replete potassium and magnesium', 'Acetazolamide (carbonic anhydrase inhibitor) to promote bicarbonate excretion', 'HCl infusion or dialysis in severe refractory cases', 'H2-blockers or PPIs if NG suction is necessary'],
    ['Cardiac arrhythmias from hypokalemia', 'Respiratory depression from hypoventilation', 'Seizures in severe alkalosis', 'Tissue hypoxia (left shift of oxyhemoglobin curve)', 'Refractory hypokalemia if magnesium not corrected'],
    'Metabolic alkalosis means your blood is too alkaline, usually because you have lost too much acid (from vomiting or stomach drainage) or your kidneys are holding onto too much bicarbonate. It often comes with low potassium and low chloride levels. Treatment depends on the cause: most cases respond to IV fluids with salt and potassium replacement. If related to hormonal imbalance, specific medications or procedures may be needed.',
    ['Severe muscle weakness or paralysis', 'Heart rhythm abnormalities', 'Confusion or seizures', 'Difficulty breathing', 'pH >7.55'],
  ),

  'respiratory-acidosis': rc(
    'respiratory-acidosis', 'Respiratory Acidosis', 'Acidosis respiratoria',
    'acid-base', 'DB62',
    'Primary increase in pCO2 (>45 mmHg) from alveolar hypoventilation, lowering blood pH. Acute forms are dangerous; chronic forms are partially compensated by renal bicarbonate retention.',
    'Any condition impairing CO2 elimination causes pCO2 to rise. Central causes: drug overdose (opioids, benzodiazepines), brainstem lesion, obesity hypoventilation. Neuromuscular: myasthenia gravis, Guillain-Barre, ALS. Pulmonary: severe COPD, asthma, pneumonia, ARDS. Renal compensation: kidneys increase H+ excretion and HCO3- reabsorption over 3-5 days (chronic compensation: HCO3 rises 3.5 mEq/L per 10 mmHg rise in pCO2).',
    ['Dyspnea and tachypnea (or paradoxical bradypnea in central causes)', 'Headache (cerebral vasodilation from CO2)', 'Confusion, somnolence, coma (CO2 narcosis)', 'Tremor and myoclonus', 'Flushing and diaphoresis', 'Papilledema in severe cases', 'Signs of underlying cause (wheezing, pinpoint pupils, weakness)'],
    ['Arterial blood gas: low pH, elevated pCO2, with or without elevated HCO3 (compensation)', 'Serum BMP to check bicarbonate and electrolytes', 'Pulse oximetry (may be normal on supplemental O2)', 'Chest X-ray', 'Pulmonary function tests (if chronic)', 'Toxicology screen if overdose suspected', 'Neuromuscular workup if indicated (NIF, FVC)'],
    ['Acute: secure airway and improve ventilation', 'Non-invasive positive pressure ventilation (BiPAP) for COPD exacerbation', 'Intubation and mechanical ventilation for severe respiratory failure', 'Bronchodilators for asthma/COPD', 'Naloxone for opioid overdose', 'Treat underlying cause (antibiotics for pneumonia, steroids for asthma)', 'Chronic: avoid excessive O2 in COPD (may worsen CO2 retention), optimize bronchodilator therapy, nocturnal NIV'],
    ['Respiratory arrest', 'Cardiac arrhythmias (hypoxia and acidosis)', 'CO2 narcosis and coma', 'Pulmonary hypertension (chronic hypercapnia)', 'Polycythemia (chronic hypoxia)', 'Right heart failure (cor pulmonale)'],
    'Respiratory acidosis happens when your lungs cannot blow off enough carbon dioxide, making your blood acidic. This can occur suddenly (such as in a drug overdose or severe asthma attack) or develop slowly (such as in advanced COPD). Treatment focuses on helping your lungs work better—sometimes with breathing machines or medications—and treating whatever is causing the breathing problem. Chronic cases may need long-term support like a nighttime breathing mask.',
    ['Severe drowsiness or inability to stay awake', 'Blue lips or fingertips (cyanosis)', 'Confusion or inability to speak', 'Severe difficulty breathing', 'Known overdose or poisoning'],
  ),

  'diabetic-ketoacidosis': rc(
    'diabetic-ketoacidosis', 'Diabetic Ketoacidosis (DKA)', 'Cetoacidosis diabetica',
    'acid-base', 'DB63',
    'Life-threatening complication of diabetes characterized by the triad of hyperglycemia (>250 mg/dL), metabolic acidosis (pH <7.3, HCO3 <18), and ketonemia. Most common in Type 1 diabetes but can occur in Type 2.',
    'Absolute or relative insulin deficiency with counter-regulatory hormone excess (glucagon, cortisol, catecholamines) leads to unopposed lipolysis, producing free fatty acids that the liver converts to ketone bodies (acetoacetate, beta-hydroxybutyrate, acetone). Ketoacids consume bicarbonate, causing high anion gap metabolic acidosis. Hyperglycemia causes osmotic diuresis, leading to profound dehydration and electrolyte losses.',
    ['Polyuria, polydipsia, and dehydration', 'Nausea, vomiting, and abdominal pain', 'Kussmaul respirations (deep, rapid breathing)', 'Fruity breath odor (acetone)', 'Altered mental status progressing to coma', 'Tachycardia and hypotension', 'Weakness and fatigue', 'Precipitant history: missed insulin, infection, new-onset diabetes'],
    ['Point-of-care glucose (>250 mg/dL)', 'ABG or VBG: pH <7.3, low bicarbonate', 'Serum ketones (beta-hydroxybutyrate preferred)', 'BMP: elevated anion gap, potassium (may be high despite total body depletion), elevated BUN/creatinine', 'Urinalysis: ketonuria, glycosuria', 'CBC, blood cultures (infection trigger)', 'Serum osmolality', 'ECG (hyperkalemia effects, MI trigger)'],
    ['Aggressive IV fluid resuscitation: 0.9% NS 1-1.5 L/h initially, then switch to 0.45% NS', 'IV insulin infusion (0.1-0.14 units/kg/h) after confirming K >3.3', 'Potassium replacement: add KCl to fluids when K <5.3 (total body K is depleted)', 'Add dextrose to fluids when glucose <200 mg/dL (continue insulin to close anion gap)', 'Monitor glucose hourly, BMP every 2-4 hours', 'Transition to subcutaneous insulin when gap closed, eating, and pH >7.3', 'Identify and treat precipitant (infection, MI, medication non-adherence)'],
    ['Cerebral edema (especially in children with rapid correction)', 'Hypokalemia during treatment (can cause arrhythmia)', 'Hypoglycemia from insulin infusion', 'ARDS', 'Thromboembolism', 'Recurrent DKA if diabetes education inadequate'],
    'DKA is a serious diabetes emergency that occurs when your body cannot use sugar for energy (due to lack of insulin) and instead breaks down fat, producing acids called ketones. This makes your blood dangerously acidic. DKA is treated in the hospital with IV fluids to rehydrate you, insulin to help your body use sugar again, and careful monitoring of your potassium and other electrolytes. Prevention is key: never skip insulin, have a sick-day plan, and check for ketones when blood sugar is high.',
    ['Blood sugar >300 mg/dL with nausea or vomiting', 'Rapid breathing or fruity breath', 'Confusion or drowsiness', 'Abdominal pain with known diabetes', 'Positive ketones on home test'],
  ),

  // ---- Cystic (3) --------------------------------------------------------

  'autosomal-dominant-pkd': rc(
    'autosomal-dominant-pkd', 'Autosomal Dominant Polycystic Kidney Disease (ADPKD)', 'Enfermedad renal poliquistica autosomica dominante',
    'cystic', 'GB60',
    'Most common inherited kidney disease (1 in 400-1000). Bilateral renal cysts progressively enlarge, destroying normal parenchyma and leading to ESRD in ~50% by age 60.',
    'Mutations in PKD1 (85%, more severe) or PKD2 (15%, milder) genes encoding polycystin-1 and polycystin-2 on primary cilia. Loss of polycystin function dysregulates intracellular calcium and increases cAMP, driving tubular epithelial proliferation, fluid secretion into cysts, and extracellular matrix remodeling. A "second hit" (somatic mutation) in individual tubular cells initiates cyst formation.',
    ['Bilateral flank pain and fullness', 'Palpable enlarged kidneys', 'Hematuria (gross or microscopic)', 'Hypertension (often early, before GFR declines)', 'Recurrent UTIs and cyst infections', 'Kidney stones (uric acid and calcium oxalate)', 'Hepatic cysts (most common extrarenal manifestation)', 'Family history of PKD or cerebral aneurysms'],
    ['Renal ultrasound (age-dependent diagnostic criteria based on cyst number)', 'MRI with total kidney volume (TKV) for prognostication (Mayo classification)', 'Genetic testing (PKD1/PKD2 mutation analysis) for indeterminate cases or preimplantation diagnosis', 'GFR estimation', 'MRA of cerebral vessels (screening for intracranial aneurysms in high-risk families)', 'Liver imaging for hepatic cysts', 'Urinalysis and urine culture'],
    ['Tolvaptan (vasopressin V2 receptor antagonist) for rapidly progressive disease (slows TKV growth and GFR decline)', 'Blood pressure control <130/80 (ACE inhibitor or ARB preferred)', 'High water intake (suppress vasopressin) if not on tolvaptan', 'Pain management: avoid NSAIDs, consider cyst aspiration or surgical decortication', 'Antibiotics for cyst infections (fluoroquinolones penetrate cysts best)', 'Renal replacement therapy (dialysis or transplant) for ESRD', 'Screening relatives with ultrasound at age 18-25'],
    ['ESRD requiring dialysis or transplant (~50% by age 60)', 'Cyst hemorrhage and infection', 'Intracranial aneurysm rupture (5-10% prevalence)', 'Massive hepatomegaly from liver cysts', 'Kidney stones', 'Mitral valve prolapse and other cardiac valvular abnormalities', 'Chronic pain and reduced quality of life'],
    'ADPKD is the most common inherited kidney disease. Fluid-filled cysts grow in both kidneys over decades, gradually replacing normal tissue. There is now a medication (tolvaptan) that can slow cyst growth in patients with rapidly progressive disease. Controlling blood pressure and staying well hydrated are also important. Because this condition can also cause cysts in the liver and, in some families, weakened blood vessels in the brain, your doctor may recommend additional screening.',
    ['Sudden severe headache (possible intracranial aneurysm rupture)', 'Fever with flank pain (cyst infection)', 'Gross hematuria that does not resolve', 'Sudden worsening of kidney function', 'Severe abdominal pain (cyst hemorrhage or rupture)'],
  ),

  'autosomal-recessive-pkd': rc(
    'autosomal-recessive-pkd', 'Autosomal Recessive Polycystic Kidney Disease (ARPKD)', 'Enfermedad renal poliquistica autosomica recesiva',
    'cystic', 'GB61',
    'Rare but severe inherited cystic kidney disease (1 in 20,000) presenting in infancy or childhood. Always involves both kidneys and congenital hepatic fibrosis.',
    'Mutations in PKHD1 gene encoding fibrocystin/polyductin, a protein on primary cilia of renal collecting ducts and bile ducts. Disrupted ciliary signaling leads to fusiform dilation of collecting ducts (not spherical cysts as in ADPKD). Congenital hepatic fibrosis results from ductal plate malformation. Severe neonatal forms present with massively enlarged echogenic kidneys and pulmonary hypoplasia.',
    ['Bilateral enlarged echogenic kidneys on prenatal or neonatal ultrasound', 'Oligohydramnios and pulmonary hypoplasia (severe neonatal form)', 'Potter sequence in severe cases', 'Hypertension (early childhood)', 'Recurrent UTIs', 'Progressive renal insufficiency', 'Hepatomegaly and portal hypertension (congenital hepatic fibrosis)', 'Growth retardation'],
    ['Prenatal or neonatal renal ultrasound (bilateral enlarged, echogenic kidneys with preserved reniform shape)', 'Family history (autosomal recessive pattern)', 'Genetic testing (PKHD1 mutations)', 'Liver ultrasound and biopsy (ductal plate malformation)', 'Portal pressure assessment', 'Renal function monitoring', 'Hepatic function and platelet count (hypersplenism)'],
    ['Neonatal respiratory support for pulmonary hypoplasia', 'Blood pressure control (ACE inhibitor or ARB)', 'Management of portal hypertension (portosystemic shunting if severe variceal bleeding)', 'Renal replacement therapy for ESRD', 'Combined liver-kidney transplant in severe cases', 'Nutritional support and growth monitoring', 'Treat UTIs promptly', 'Genetic counseling for family'],
    ['Neonatal death from pulmonary hypoplasia (30% of severe cases)', 'ESRD (50% by age 15-20)', 'Portal hypertension with variceal bleeding', 'Cholangitis', 'Systemic hypertension', 'Growth failure and malnutrition'],
    'ARPKD is a rare, serious inherited kidney disease that appears in babies and young children. Unlike the more common adult form, it always affects the liver as well. The severity varies widely—some babies have breathing problems at birth, while others are not diagnosed until later in childhood. Treatment focuses on managing blood pressure, supporting nutrition and growth, and treating liver complications. Some children will eventually need kidney and/or liver transplantation.',
    ['Breathing difficulty in a newborn with large kidneys', 'Vomiting blood or black stools (variceal bleeding)', 'Fever with abdominal pain (cholangitis)', 'Severely elevated blood pressure in a child', 'Rapid decline in kidney function'],
  ),

  'medullary-sponge-kidney': rc(
    'medullary-sponge-kidney', 'Medullary Sponge Kidney', 'Rinon en esponja medular',
    'cystic', 'GB62',
    'Congenital malformation with cystic dilation of the medullary and papillary collecting ducts, giving a "sponge-like" appearance. Predisposes to nephrolithiasis and recurrent UTIs.',
    'Ectatic (dilated) collecting ducts in the renal medulla create stasis, promoting calcium crystal deposition (nephrocalcinosis) and stone formation. The cause is uncertain; most cases are sporadic. Urinary stasis in dilated ducts also predisposes to urinary infections. Renal function is usually preserved unless complicated by obstruction or infection.',
    ['Often asymptomatic (discovered incidentally)', 'Recurrent calcium kidney stones', 'Renal colic', 'Hematuria (gross or microscopic)', 'Recurrent UTIs', 'Distal RTA in some patients', 'Nephrocalcinosis on imaging'],
    ['CT urogram (ectatic papillary ducts with "paintbrush" or "bouquet of flowers" appearance)', 'KUB X-ray (medullary nephrocalcinosis)', 'IVP (classic but largely replaced by CT): contrast pooling in dilated ducts', 'Urinalysis: hematuria, possible hypercalciuria', '24-hour urine: hypercalciuria, hypocitraturia common', 'Metabolic stone workup', 'Renal function usually normal'],
    ['High fluid intake (>2.5 L/day)', 'Potassium citrate for hypocitraturia and stone prevention', 'Thiazide diuretics for hypercalciuria', 'Treat UTIs promptly with appropriate antibiotics', 'Stone removal procedures when symptomatic', 'Dietary counseling: moderate calcium intake, low sodium, limit oxalate-rich foods', 'No specific therapy for the structural abnormality itself'],
    ['Recurrent nephrolithiasis requiring multiple interventions', 'Recurrent pyelonephritis', 'Nephrocalcinosis', 'Distal renal tubular acidosis', 'CKD is rare unless complicated by chronic obstruction or infection', 'Anxiety from chronic stone disease'],
    'Medullary sponge kidney is a condition you are born with where the tiny tubes inside the kidney are wider than normal, creating small pockets where crystals and bacteria can collect. This makes you more prone to kidney stones and urinary infections. The kidney itself usually works fine throughout life. Treatment focuses on preventing stones by drinking plenty of water, and your doctor may prescribe medications to change your urine chemistry and reduce stone formation.',
    ['Fever with flank pain (pyelonephritis)', 'Severe renal colic not responding to pain medication', 'Inability to pass urine', 'Blood in urine that does not stop'],
  ),

  // ---- Transplant (3) ----------------------------------------------------

  'acute-transplant-rejection': rc(
    'acute-transplant-rejection', 'Acute Kidney Transplant Rejection', 'Rechazo agudo de trasplante renal',
    'transplant', 'KA60',
    'Immune-mediated injury to a transplanted kidney occurring days to months post-transplant. Classified as T-cell mediated (cellular) or antibody-mediated rejection, requiring prompt diagnosis and treatment to prevent graft loss.',
    'T-cell mediated rejection: recipient T cells recognize donor MHC antigens (direct or indirect allorecognition), infiltrate the graft, and cause tubulitis and interstitial inflammation. Antibody-mediated rejection: donor-specific antibodies (DSA) bind donor endothelial HLA antigens, activating complement and causing microvascular inflammation (peritubular capillaritis, glomerulitis) with C4d deposition.',
    ['Rising serum creatinine (often asymptomatic initially)', 'Decreased urine output', 'Graft tenderness or swelling', 'Low-grade fever', 'Hypertension (new or worsening)', 'Fluid retention and edema', 'May be subclinical (detected only on protocol biopsy)'],
    ['Serum creatinine trend (rising from baseline)', 'Donor-specific antibody (DSA) panel', 'Renal allograft biopsy (gold standard): Banff classification', 'C4d staining on biopsy (antibody-mediated)', 'Doppler ultrasound of graft (elevated resistive index)', 'Urinalysis (proteinuria, hematuria)', 'BK virus PCR and CMV testing to exclude infectious causes', 'Tacrolimus/cyclosporine trough levels'],
    ['T-cell mediated: pulse IV methylprednisolone (500 mg daily x 3 days)', 'Steroid-resistant cellular rejection: anti-thymocyte globulin (ATG)', 'Antibody-mediated: plasmapheresis, IVIG, rituximab, bortezomib', 'Optimize maintenance immunosuppression (adjust tacrolimus, mycophenolate)', 'Eculizumab for complement-mediated injury in refractory cases', 'Treat precipitants (non-adherence, inadequate immunosuppression levels)'],
    ['Graft loss if untreated or refractory', 'Chronic allograft nephropathy from subclinical rejection episodes', 'Opportunistic infections from intensified immunosuppression', 'Return to dialysis', 'Sensitization complicating future transplant', 'PTLD risk with intensified immunosuppression'],
    'Acute rejection means your immune system is attacking your transplanted kidney because it recognizes it as foreign. This can happen even with immunosuppressive medications. The most important sign is a rise in your creatinine blood test, which is why regular lab monitoring is essential. A kidney biopsy confirms the diagnosis and guides treatment. Most episodes respond to additional immune-suppressing treatment. Taking your medications exactly as prescribed and never skipping doses is the best way to prevent rejection.',
    ['Sudden decrease in urine output', 'Rapid rise in creatinine on routine labs', 'Pain or swelling over the transplanted kidney', 'Fever in a transplant recipient', 'New or worsening swelling after transplant'],
  ),

  'chronic-allograft-nephropathy': rc(
    'chronic-allograft-nephropathy', 'Chronic Allograft Nephropathy', 'Nefropatia cronica del injerto',
    'transplant', 'KA61',
    'Progressive decline in transplant kidney function over months to years, the leading cause of late graft loss. Now termed interstitial fibrosis and tubular atrophy (IF/TA) reflecting histological findings without specifying etiology.',
    'Multifactorial: immune injury (chronic antibody-mediated rejection with transplant glomerulopathy, recurrent subclinical T-cell rejection), calcineurin inhibitor nephrotoxicity, recurrent or de novo glomerular disease, BK nephropathy, hypertension, and donor factors (older donor, prolonged ischemia time). Final common pathway: interstitial fibrosis, tubular atrophy, and arteriolar hyalinosis.',
    ['Gradual rise in serum creatinine over months to years', 'Proteinuria (often increasing)', 'Hypertension (worsening)', 'Generally asymptomatic until advanced', 'Signs of CKD in later stages (anemia, bone disease)', 'Recurrent UTIs may be contributing'],
    ['Serial serum creatinine and proteinuria trending', 'Donor-specific antibodies (de novo DSA indicates immune component)', 'Allograft biopsy: IF/TA grading, transplant glomerulopathy, C4d', 'BK virus PCR (exclude BK nephropathy)', 'Calcineurin inhibitor trough levels', 'Protocol biopsies (some centers perform at 3, 12 months)', 'Renal ultrasound (graft size, resistive indices)'],
    ['Optimize immunosuppression (balance rejection prevention vs. nephrotoxicity)', 'Minimize calcineurin inhibitor exposure (convert to belatacept or mTOR inhibitor if appropriate)', 'Treat antibody-mediated component if identified', 'Blood pressure control <130/80 (ARB or CCB preferred for transplant)', 'Proteinuria management', 'Manage CKD complications (anemia, bone disease, acidosis)', 'Prepare for re-transplant or return to dialysis when GFR declining'],
    ['Return to dialysis (graft loss)', 'Cardiovascular disease (leading cause of death in transplant recipients)', 'Anemia and bone disease of CKD', 'Sensitization complicating re-transplantation', 'Medication side effects from prolonged immunosuppression', 'Reduced quality of life'],
    'Chronic allograft nephropathy is the gradual wearing down of a transplanted kidney over time. Multiple factors contribute, including low-level immune attacks, medication effects, high blood pressure, and the original kidney disease returning. While there is no cure, your doctor can adjust medications and manage blood pressure to slow the process. If the transplant eventually fails, you may need dialysis or be evaluated for another transplant.',
    ['Rapid rise in creatinine (may indicate acute rejection superimposed on chronic changes)', 'New or worsening proteinuria', 'Uncontrolled blood pressure despite multiple medications', 'Symptoms of advanced kidney failure (nausea, swelling, fatigue)'],
  ),

  'bk-virus-nephropathy': rc(
    'bk-virus-nephropathy', 'BK Virus Nephropathy', 'Nefropatia por virus BK',
    'transplant', 'KA62',
    'Reactivation of BK polyomavirus in immunosuppressed kidney transplant recipients, causing tubulointerstitial nephritis and potential graft loss in 10-80% of cases if untreated.',
    'BK virus is a ubiquitous polyomavirus (seroprevalence >80% of adults) that remains latent in urothelial cells. Intense immunosuppression after kidney transplant allows viral reactivation, replication in tubular epithelial cells, and direct cytopathic injury. The virus spreads cell-to-cell, causing tubular necrosis, interstitial inflammation, and fibrosis. Immune reconstitution is key to viral clearance.',
    ['Often asymptomatic (detected on screening)', 'Rising creatinine (may mimic acute rejection)', 'Ureteral stenosis (BK ureteritis)', 'Hematuria (uncommon)', 'Typically occurs 2-6 months post-transplant', 'No systemic symptoms (unlike CMV)'],
    ['BK virus quantitative PCR in blood (viremia >10,000 copies/mL highly suggestive)', 'Urine BK PCR and decoy cells on urine cytology (sensitive but not specific)', 'Allograft biopsy (definitive): viral cytopathic changes, positive SV40 immunostain', 'Distinguish from acute rejection (critical, as treatment is opposite)', 'Serum creatinine trending', 'Donor-specific antibodies (to exclude concurrent rejection)'],
    ['Reduction of immunosuppression (primary treatment): decrease tacrolimus target, reduce or stop mycophenolate', 'Monitor viral load every 2-4 weeks until clearance', 'No proven antiviral therapy (cidofovir and leflunomide have limited evidence)', 'IVIG in some protocols', 'Close monitoring for rejection after immunosuppression reduction', 'Screening: urine BK PCR at 1, 3, 6, 9, 12 months; blood PCR if urine positive', 'Retransplantation possible after viral clearance'],
    ['Graft loss (10-80% of biopsy-proven cases)', 'Ureteral stricture requiring intervention', 'Acute rejection triggered by immunosuppression reduction', 'Hemorrhagic cystitis', 'Recurrence in subsequent transplant (possible but lower risk with pre-emptive monitoring)'],
    'BK virus is a common virus that most people carry without any problems. However, after a kidney transplant, the medications that prevent rejection can allow this virus to reactivate and damage the transplanted kidney. That is why your doctor regularly screens your blood and urine for this virus. The main treatment is to carefully reduce your anti-rejection medications so your immune system can fight the virus, while closely monitoring for signs of rejection.',
    ['Rising creatinine with known BK viremia', 'High BK viral load (>10,000 copies/mL in blood)', 'Difficulty urinating (ureteral stricture)', 'Signs of rejection while reducing immunosuppression'],
  ),

  // ---- Additional Key Conditions (2) -------------------------------------

  'chronic-kidney-disease': rc(
    'chronic-kidney-disease', 'Chronic Kidney Disease (CKD)', 'Enfermedad renal cronica',
    'tubular', 'GB61.Z',
    'Persistent abnormality of kidney structure or function for >3 months, classified by GFR (stages 1-5) and albuminuria (A1-A3). Affects ~15% of US adults. Leading causes: diabetes and hypertension.',
    'Progressive nephron loss from any chronic insult leads to compensatory hyperfiltration in remaining nephrons, which paradoxically accelerates further injury through glomerular hypertension and proteinuria. Loss of functional nephrons impairs waste clearance (uremia), fluid/electrolyte balance, erythropoietin production (anemia), vitamin D activation (bone disease), and acid excretion (metabolic acidosis). RAAS activation and inflammation promote fibrosis.',
    ['Often asymptomatic until stage 4-5', 'Fatigue and malaise', 'Nocturia and polyuria (loss of concentrating ability)', 'Edema and weight gain', 'Nausea, anorexia, metallic taste (uremia)', 'Pruritus', 'Restless legs', 'Hypertension', 'Signs of complications: pallor (anemia), bone pain, peripheral neuropathy'],
    ['Serum creatinine and eGFR calculation (CKD-EPI equation)', 'Urine albumin-to-creatinine ratio (UACR)', 'BMP: electrolytes, bicarbonate, calcium, phosphorus', 'CBC (anemia of CKD)', 'PTH and vitamin D levels', 'Lipid panel', 'Renal ultrasound (small echogenic kidneys in advanced CKD)', 'Hepatitis B/C and HIV screening', 'Urine sediment and protein electrophoresis to evaluate etiology'],
    ['Treat underlying cause (glycemic control, BP management)', 'ACE inhibitor or ARB for proteinuria and BP control', 'SGLT2 inhibitor (dapagliflozin, empagliflozin) for CKD progression', 'Finerenone (nonsteroidal MRA) for diabetic CKD', 'GLP-1 receptor agonist for diabetic CKD', 'Manage complications: EPO for anemia, phosphate binders, vitamin D, bicarbonate supplementation', 'Dietary modifications: sodium <2 g/day, protein moderation, potassium restriction in advanced stages', 'Renal replacement therapy preparation (stage 4-5): AV fistula, transplant evaluation, peritoneal dialysis catheter'],
    ['Cardiovascular disease (leading cause of death in CKD)', 'ESRD requiring dialysis or transplant', 'Anemia', 'CKD-mineral bone disorder (renal osteodystrophy)', 'Metabolic acidosis with muscle wasting', 'Hyperkalemia', 'Uremic encephalopathy and pericarditis (emergencies)', 'Increased infection risk'],
    'Chronic kidney disease means your kidneys are gradually losing their ability to filter blood. The two most common causes are diabetes and high blood pressure. CKD often has no symptoms until advanced stages, which is why regular blood and urine tests are important. Newer medications like SGLT2 inhibitors can significantly slow progression. Controlling blood sugar, blood pressure, and taking kidney-protective medications are the cornerstones of treatment. If CKD progresses to kidney failure, dialysis or a transplant may be needed.',
    ['New or worsening swelling, especially with shortness of breath', 'Confusion or severe drowsiness (uremic encephalopathy)', 'Chest pain (uremic pericarditis)', 'Severe nausea with inability to eat or drink', 'Potassium >6.0 mEq/L on lab work', 'Muscle twitching or seizures'],
  ),

  'acute-kidney-injury': rc(
    'acute-kidney-injury', 'Acute Kidney Injury (AKI)', 'Lesion renal aguda',
    'tubular', 'GB90.Z',
    'Abrupt decline in kidney function over hours to days, defined by KDIGO criteria: rise in creatinine by >=0.3 mg/dL in 48h, rise to >=1.5x baseline in 7 days, or urine output <0.5 mL/kg/h for 6 hours. Classified as prerenal (60-70%), intrinsic (25-40%), or postrenal (5-10%).',
    'Prerenal: decreased renal perfusion from hypovolemia, heart failure, or vasodilation (sepsis), with intact tubular function initially. Intrinsic: direct damage to glomeruli (GN), tubules (ATN), interstitium (AIN), or vasculature (TMA). Postrenal: obstruction of urinary outflow (stones, BPH, tumor). All pathways converge on reduced GFR and accumulation of uremic toxins, potassium, acid, and fluid.',
    ['Oliguria or anuria (or non-oliguric in some ATN)', 'Rising creatinine and BUN', 'Fluid overload (edema, pulmonary congestion)', 'Nausea and vomiting', 'Altered mental status in severe uremia', 'Signs related to cause: hypotension (prerenal), rash and eosinophilia (AIN), flank pain (obstruction)'],
    ['Serum creatinine trend and KDIGO staging', 'Urinalysis and urine microscopy (bland = prerenal; muddy brown casts = ATN; WBC casts/eosinophils = AIN; RBC casts = GN)', 'FENa (<1% prerenal, >2% intrinsic) or FEUrea if on diuretics', 'BMP: potassium, bicarbonate, phosphorus', 'Renal ultrasound (hydronephrosis for post-renal, kidney size)', 'Bladder scan or post-void residual', 'Medication review for nephrotoxins', 'Volume status assessment (clinical + point-of-care ultrasound)'],
    ['Prerenal: volume resuscitation (isotonic crystalloid), treat underlying cause (heart failure optimization, sepsis protocol)', 'Intrinsic: remove nephrotoxin, treat specific cause (steroids for AIN, immunosuppression for GN, supportive for ATN)', 'Postrenal: urgent decompression (Foley catheter, nephrostomy tube, or ureteral stent)', 'Renal replacement therapy indications (AEIOU): Acidosis refractory, Electrolytes (hyperkalemia), Ingestion (toxic alcohols, lithium), Overload (fluid refractory to diuretics), Uremia (encephalopathy, pericarditis)', 'Avoid further nephrotoxic insults', 'Dose-adjust renally cleared medications'],
    ['Need for acute dialysis', 'Progression to CKD (20-50% after severe AKI)', 'Hyperkalemia with cardiac arrhythmias', 'Pulmonary edema', 'Uremic encephalopathy or pericarditis', 'Death (hospital mortality 20-50% depending on cause and severity)', 'Electrolyte and acid-base emergencies'],
    'Acute kidney injury means your kidneys have suddenly stopped working well. This can happen because of dehydration, low blood pressure, a blocked urinary tract, or direct damage to the kidneys from infections, medications, or toxins. Treatment depends on the cause: fluids for dehydration, drainage for blockages, or stopping harmful medications. Most cases improve with prompt treatment, but severe cases may need temporary dialysis. AKI can increase your risk of kidney problems in the future, so follow-up is important.',
    ['No urine output for several hours', 'Severe swelling or difficulty breathing', 'Confusion or altered mental status', 'Severe nausea with inability to keep anything down', 'Known exposure to nephrotoxin with rising creatinine', 'Chest pain (uremic pericarditis)'],
  ),

};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get a single condition by ID. */
export function getRenalCondition(id: string): RenalConditionEntry | undefined {
  return RENAL_CONDITIONS[id];
}

/** Search conditions by name, category, or any text field (case-insensitive). */
export function searchRenalConditions(query: string): RenalConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(RENAL_CONDITIONS).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEs.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.pathophysiology.toLowerCase().includes(q) ||
    c.patientExplanation.toLowerCase().includes(q) ||
    c.clinicalFeatures.some(f => f.toLowerCase().includes(q)) ||
    c.diagnostics.some(d => d.toLowerCase().includes(q)) ||
    c.treatment.some(t => t.toLowerCase().includes(q)) ||
    c.complications.some(comp => comp.toLowerCase().includes(q)),
  );
}

/** Filter conditions by category. */
export function getRenalByCategory(category: RenalCategory): RenalConditionEntry[] {
  return Object.values(RENAL_CONDITIONS).filter(c => c.category === category);
}

/** Return the total number of renal conditions in the database. */
export function getRenalConditionCount(): number {
  return Object.keys(RENAL_CONDITIONS).length;
}

/** Get all conditions with a specific clinical feature (case-insensitive). */
export function getRenalByClinicalFeature(feature: string): RenalConditionEntry[] {
  const f = feature.toLowerCase();
  return Object.values(RENAL_CONDITIONS).filter(c =>
    c.clinicalFeatures.some(cf => cf.toLowerCase().includes(f)),
  );
}

/** Get all conditions that list a specific emergency sign (case-insensitive). */
export function getRenalByEmergencySign(sign: string): RenalConditionEntry[] {
  const s = sign.toLowerCase();
  return Object.values(RENAL_CONDITIONS).filter(c =>
    c.emergencySigns.some(es => es.toLowerCase().includes(s)),
  );
}

/** Get all available renal categories with their condition counts. */
export function getRenalCategorySummary(): Record<RenalCategory, number> {
  const summary = {} as Record<RenalCategory, number>;
  for (const c of Object.values(RENAL_CONDITIONS)) {
    summary[c.category] = (summary[c.category] || 0) + 1;
  }
  return summary;
}
