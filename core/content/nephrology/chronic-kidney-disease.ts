import { EducationalContent } from '../types';

export const chronicKidneyDisease: EducationalContent = {
  id: 'chronic-kidney-disease',
  type: 'condition',
  name: 'Chronic Kidney Disease',
  nameEs: 'Enfermedad Renal Cronica',
  alternateNames: ['CKD', 'Chronic Renal Failure', 'Chronic Renal Insufficiency'],
  levels: {
    1: {
      level: 1,
      summary: 'Chronic kidney disease means your kidneys are slowly getting weaker and cannot clean your blood as well as they used to.',
      explanation:
        'Your kidneys are like a water filter in your home. Over time, if the filter is damaged, it does not ' +
        'work as well. Chronic kidney disease (CKD) means your kidneys have been damaged for three months ' +
        'or longer and are slowly losing their ability to clean your blood.\n\n' +
        '## What Causes It?\n\n' +
        'The two most common causes are:\n' +
        '- **Diabetes**: Too much sugar in the blood damages the tiny blood vessels inside the kidneys\n' +
        '- **High blood pressure**: Too much pressure pushing against the kidney blood vessels damages them over time\n\n' +
        'Other causes include inherited diseases (like polycystic kidney disease), recurring kidney ' +
        'infections, and some medications.\n\n' +
        '## Stages\n\n' +
        'Doctors describe CKD in stages from 1 to 5:\n' +
        '- **Stages 1-2**: Kidneys are mildly damaged but still work well enough. Most people feel fine.\n' +
        '- **Stage 3**: Kidneys are moderately damaged. Waste may start building up.\n' +
        '- **Stage 4**: Kidneys are severely damaged. You may feel tired or sick.\n' +
        '- **Stage 5**: Kidneys barely work at all. This is called kidney failure, and dialysis or a ' +
        'transplant is needed.\n\n' +
        '## What Happens Without Treatment?\n\n' +
        'When kidneys fail, waste products build up and cause problems throughout the body: swelling, ' +
        'tiredness, nausea, itching, and difficulty breathing. Treatment can slow down or stop the ' +
        'damage from getting worse.',
      keyTerms: [
        { term: 'chronic', definition: 'Lasting a long time (3 months or more)' },
        { term: 'kidney disease', definition: 'Damage to the kidneys that prevents them from filtering properly' },
        { term: 'dialysis', definition: 'A machine that cleans your blood when your kidneys cannot' },
        { term: 'transplant', definition: 'Surgery to give someone a healthy kidney from another person' },
        { term: 'diabetes', definition: 'A disease where blood sugar is too high, which can damage kidneys' },
      ],
      analogies: [
        'CKD is like a home water filter that is slowly wearing out -- it still works a little, but it lets more and more impurities through over time.',
        'Think of stages like grades on a report card for your kidneys: Stage 1 is the best, Stage 5 means they are failing.',
      ],
      patientCounselingPoints: [
        'Keep blood pressure and blood sugar under good control to protect your kidneys.',
        'Take your medications as prescribed; do not skip doses.',
        'Eat less salt and processed food to help your kidneys.',
        'Stay active and maintain a healthy weight.',
        'Do not take too many over-the-counter pain medicines like ibuprofen.',
      ],
      clinicalNotes: '',
    },
    2: {
      level: 2,
      summary: 'CKD is staged by GFR and albuminuria; major complications include anemia, bone disease, cardiovascular disease, and electrolyte imbalances.',
      explanation:
        '## Definition\n\n' +
        'CKD is defined as abnormalities of kidney structure or function present for **>3 months** with ' +
        'health implications. Key markers:\n' +
        '- **GFR <60 mL/min/1.73m^2** for 3+ months\n' +
        '- **Albuminuria** (albumin-to-creatinine ratio >= 30 mg/g)\n' +
        '- Abnormal urinary sediment, electrolyte disorders, structural abnormalities, or history of transplant\n\n' +
        '## CKD Staging\n\n' +
        '### By GFR:\n' +
        '| Stage | GFR (mL/min/1.73m^2) | Description |\n' +
        '|-------|---------------------|-------------|\n' +
        '| G1 | >= 90 | Normal or high |\n' +
        '| G2 | 60-89 | Mildly decreased |\n' +
        '| G3a | 45-59 | Mildly to moderately decreased |\n' +
        '| G3b | 30-44 | Moderately to severely decreased |\n' +
        '| G4 | 15-29 | Severely decreased |\n' +
        '| G5 | <15 | Kidney failure |\n\n' +
        '### By Albuminuria:\n' +
        '| Category | ACR (mg/g) | Description |\n' +
        '|----------|-----------|-------------|\n' +
        '| A1 | <30 | Normal to mildly increased |\n' +
        '| A2 | 30-300 | Moderately increased (microalbuminuria) |\n' +
        '| A3 | >300 | Severely increased (macroalbuminuria) |\n\n' +
        '## Common Causes\n' +
        '- Diabetic kidney disease (~40% of CKD cases)\n' +
        '- Hypertensive nephrosclerosis (~25%)\n' +
        '- Glomerulonephritis (~10%)\n' +
        '- Polycystic kidney disease (~5%)\n' +
        '- Obstructive uropathy, reflux nephropathy, others\n\n' +
        '## Major Complications\n\n' +
        '### Anemia\n' +
        'Kidneys produce erythropoietin (EPO), which stimulates red blood cell production. In CKD, EPO ' +
        'production falls, causing normocytic anemia. Treatment: erythropoiesis-stimulating agents (ESAs) ' +
        'and iron supplementation.\n\n' +
        '### Mineral and Bone Disorder (CKD-MBD)\n' +
        'Kidneys activate vitamin D and excrete phosphorus. In CKD:\n' +
        '- Phosphorus rises (hyperphosphatemia)\n' +
        '- Active vitamin D (calcitriol) falls\n' +
        '- Calcium drops, stimulating parathyroid hormone (PTH) release\n' +
        '- Secondary hyperparathyroidism leads to bone disease (renal osteodystrophy)\n\n' +
        '### Cardiovascular Disease\n' +
        'CKD patients have a much higher risk of heart disease, stroke, and heart failure. Risk factors ' +
        'include hypertension, fluid overload, vascular calcification from high phosphorus, and uremic ' +
        'toxins.\n\n' +
        '### Metabolic Acidosis\n' +
        'Failing kidneys cannot excrete acid properly. Bicarbonate supplementation slows CKD progression.\n\n' +
        '### Hyperkalemia\n' +
        'Reduced potassium excretion leads to dangerously high levels, risking cardiac arrhythmias.',
      keyTerms: [
        { term: 'GFR', definition: 'Glomerular filtration rate; the rate kidneys filter blood, measured in mL/min/1.73m^2' },
        { term: 'albuminuria', definition: 'Abnormal presence of albumin protein in urine, indicating kidney damage' },
        { term: 'ACR', definition: 'Albumin-to-creatinine ratio; used to quantify albuminuria' },
        { term: 'erythropoietin', definition: 'Kidney-produced hormone stimulating red blood cell production' },
        { term: 'CKD-MBD', definition: 'Chronic kidney disease-mineral and bone disorder; bone and mineral complications of CKD' },
        { term: 'secondary hyperparathyroidism', definition: 'Overactive parathyroid glands due to low calcium and vitamin D in CKD' },
        { term: 'metabolic acidosis', definition: 'Excess acid in the blood when kidneys cannot excrete enough acid' },
        { term: 'hyperkalemia', definition: 'Dangerously high blood potassium level' },
      ],
      clinicalNotes:
        'Screen for CKD in diabetes and hypertension patients with annual serum creatinine and urine albumin. ' +
        'Both GFR and albuminuria independently predict kidney outcomes and cardiovascular risk. ' +
        'Refer to nephrology at GFR <30 or rapidly declining GFR.',
    },
    3: {
      level: 3,
      summary: 'CKD management involves RAAS inhibition, SGLT2 inhibitors, blood pressure and glycemic targets, phosphorus control, ESAs, and preparation for renal replacement therapy.',
      explanation:
        '## Evidence-Based CKD Management\n\n' +
        '### Slowing Progression\n\n' +
        '**RAAS Inhibition:**\n' +
        '- ACE inhibitors or ARBs are first-line for CKD with albuminuria (A2-A3)\n' +
        '- Reduce intraglomerular pressure by dilating efferent arteriole\n' +
        '- Up to 30% initial creatinine rise is acceptable (monitor within 1-2 weeks)\n' +
        '- Avoid dual RAAS blockade (ONTARGET, VA NEPHRON-D trials showed increased hyperkalemia/AKI)\n\n' +
        '**SGLT2 Inhibitors:**\n' +
        '- Dapagliflozin (DAPA-CKD) and empagliflozin (EMPA-KIDNEY): reduce CKD progression ' +
        'and cardiovascular events in diabetic and non-diabetic CKD\n' +
        '- Mechanism: reduce tubuloglomerular feedback, decrease intraglomerular hypertension, ' +
        'reduce albuminuria, anti-inflammatory and anti-fibrotic effects\n' +
        '- Can be initiated down to GFR 20 mL/min\n' +
        '- Initial GFR dip (~5 mL/min) is hemodynamic and expected; long-term trajectory improves\n\n' +
        '**Non-Steroidal MRA (Finerenone):**\n' +
        '- FIDELIO-DKD and FIGARO-DKD trials: reduces kidney and cardiovascular outcomes in diabetic CKD\n' +
        '- Mechanism: blocks mineralocorticoid-mediated inflammation and fibrosis\n' +
        '- Risk: hyperkalemia; requires potassium monitoring\n\n' +
        '**Blood Pressure Targets:**\n' +
        '- KDIGO 2021: target systolic <120 mmHg (standardized office measurement) when tolerated\n' +
        '- SPRINT trial supports intensive BP control for kidney and cardiovascular benefit\n\n' +
        '**Glycemic Control:**\n' +
        '- Target HbA1c ~7% in most patients; individualize based on hypoglycemia risk\n' +
        '- SGLT2 inhibitors preferred agent; GLP-1 receptor agonists have additive benefit\n' +
        '- Avoid metformin when GFR <30; dose reduce when GFR 30-45\n\n' +
        '### Managing Complications\n\n' +
        '**Anemia:**\n' +
        '- Target hemoglobin 10-11.5 g/dL with ESAs (epoetin alfa, darbepoetin alfa)\n' +
        '- TREAT and CHOIR trials: higher Hb targets (>13) increase stroke/cardiovascular risk\n' +
        '- Check iron stores first; target ferritin >100 (>200 on dialysis), TSAT >20%\n' +
        '- HIF-PHI (roxadustat, daprodustat): oral alternatives to injectable ESAs\n\n' +
        '**CKD-MBD:**\n' +
        '- Restrict dietary phosphorus; use phosphate binders with meals\n' +
        '- Calcium-based binders (calcium carbonate/acetate) or non-calcium (sevelamer, lanthanum)\n' +
        '- Active vitamin D analogues (calcitriol, paricalcitol) for secondary hyperparathyroidism\n' +
        '- Cinacalcet (calcimimetic) for refractory hyperparathyroidism\n' +
        '- Target: maintain phosphorus 2.5-4.5, PTH 2-9x upper normal on dialysis\n\n' +
        '**Metabolic Acidosis:**\n' +
        '- Oral sodium bicarbonate when serum bicarbonate <22 mEq/L\n' +
        '- Slows CKD progression and improves nutritional status\n' +
        '- Veverimer (non-absorbed polymer acid binder) under investigation\n\n' +
        '**Hyperkalemia:**\n' +
        '- Dietary potassium restriction\n' +
        '- Potassium binders: sodium polystyrene sulfonate (Kayexalate), patiromer (Veltassa), ' +
        'sodium zirconium cyclosilicate (Lokelma)\n' +
        '- New binders enable continued RAAS inhibitor use\n\n' +
        '## Dialysis Modalities\n\n' +
        '### Hemodialysis (HD)\n' +
        '- Blood pumped through extracorporeal circuit with semipermeable membrane\n' +
        '- Typically 3-4 hours, 3 times per week in-center\n' +
        '- Access: AV fistula (preferred), AV graft, or central venous catheter\n' +
        '- Complications: hypotension, access infections, dialysis disequilibrium\n\n' +
        '### Peritoneal Dialysis (PD)\n' +
        '- Uses peritoneal membrane as dialysis filter\n' +
        '- CAPD: manual exchanges 4x/day; APD: automated cycler overnight\n' +
        '- Advantages: home-based, better residual kidney function preservation, lifestyle flexibility\n' +
        '- Complications: peritonitis, catheter infections, encapsulating peritoneal sclerosis\n\n' +
        '### When to Start Dialysis\n' +
        '- IDEAL trial: no benefit to early start (GFR 10-14) vs late start (GFR 5-7)\n' +
        '- Initiate based on symptoms: uremia, refractory fluid overload, hyperkalemia, acidosis, ' +
        'malnutrition unresponsive to intervention\n' +
        '- Typical GFR at initiation: 5-10 mL/min\n\n' +
        '## Kidney Transplantation\n\n' +
        '- Superior survival and quality of life compared to dialysis\n' +
        '- Living donor preferred (better outcomes, shorter wait time)\n' +
        '- Pre-emptive transplant (before dialysis) has best outcomes\n' +
        '- Immunosuppression: induction (basiliximab or thymoglobulin) + maintenance ' +
        '(tacrolimus + mycophenolate + prednisone)\n' +
        '- Key considerations: HLA matching, PRA (panel reactive antibodies), crossmatch testing',
      keyTerms: [
        { term: 'SGLT2 inhibitor', definition: 'Sodium-glucose cotransporter-2 inhibitor; reduces CKD progression in diabetic and non-diabetic CKD' },
        { term: 'finerenone', definition: 'Non-steroidal mineralocorticoid receptor antagonist for diabetic CKD' },
        { term: 'ESA', definition: 'Erythropoiesis-stimulating agent; treats CKD anemia by stimulating red blood cell production' },
        { term: 'HIF-PHI', definition: 'Hypoxia-inducible factor prolyl hydroxylase inhibitor; oral agent for CKD anemia' },
        { term: 'phosphate binder', definition: 'Medication taken with meals to reduce phosphorus absorption' },
        { term: 'calcimimetic', definition: 'Drug that activates calcium-sensing receptor to lower PTH (e.g., cinacalcet)' },
        { term: 'hemodialysis', definition: 'Dialysis using an extracorporeal blood circuit and semipermeable membrane' },
        { term: 'peritoneal dialysis', definition: 'Dialysis using the peritoneal membrane for fluid and solute exchange' },
        { term: 'AV fistula', definition: 'Surgically created connection between artery and vein for dialysis access' },
        { term: 'pre-emptive transplant', definition: 'Kidney transplant performed before starting dialysis; best outcomes' },
      ],
      clinicalNotes:
        'DAPA-CKD showed 39% reduction in sustained GFR decline, ESKD, or renal death regardless of diabetes status. ' +
        'Start SGLT2i even at GFR 20-25; the initial GFR dip is hemodynamic. FIDELIO-DKD showed finerenone ' +
        'reduced kidney composite outcome by 18% in diabetic CKD. Plan AV fistula creation when GFR approaches ' +
        '15-20 to allow maturation.',
    },
    4: {
      level: 4,
      summary: 'Advanced CKD pathophysiology involves tubulo-interstitial fibrosis, uremic toxin biology, vascular calcification mechanisms, and precision approaches to CKD-MBD and cardiovascular risk.',
      explanation:
        '## Pathophysiology of CKD Progression\n\n' +
        '### The Final Common Pathway: Tubulo-Interstitial Fibrosis\n\n' +
        'Regardless of the initiating injury, CKD progression converges on tubulo-interstitial fibrosis:\n\n' +
        '1. **Nephron loss** leads to compensatory hyperfiltration in remaining nephrons\n' +
        '2. **Hyperfiltration** increases glomerular capillary pressure, causing podocyte stress, ' +
        'proteinuria, and progressive glomerulosclerosis\n' +
        '3. **Proteinuria** itself is nephrotoxic: tubular reabsorption of filtered proteins activates ' +
        'NF-kB, MCP-1, and complement, driving interstitial inflammation\n' +
        '4. **Epithelial-mesenchymal transition (EMT)**: Injured tubular cells acquire mesenchymal features ' +
        'and produce extracellular matrix (partial EMT is the current paradigm)\n' +
        '5. **Pericyte-myofibroblast transition**: Perivascular pericytes detach and become collagen-producing ' +
        'myofibroblasts -- the dominant source of fibrosis\n' +
        '6. **Profibrotic signaling**: TGF-beta/Smad3, Wnt/beta-catenin, PDGF, CTGF pathways drive ' +
        'matrix deposition\n' +
        '7. **Capillary rarefaction**: Loss of peritubular capillaries creates chronic hypoxia, ' +
        'stabilizing HIF-1alpha and perpetuating fibrosis\n\n' +
        '### Uremic Toxin Biology\n\n' +
        'CKD leads to retention of uremic solutes classified by size and protein binding:\n\n' +
        '| Category | Examples | Pathological Effects |\n' +
        '|----------|---------|---------------------|\n' +
        '| Small water-soluble | Urea, creatinine, ADMA | Urea carbamylates proteins; ADMA inhibits NO synthase |\n' +
        '| Middle molecules | Beta-2-microglobulin, FGF-23, PTH | Amyloidosis, vascular calcification, bone disease |\n' +
        '| Protein-bound | Indoxyl sulfate, p-cresyl sulfate, TMAO | Endothelial dysfunction, oxidative stress, CVD, fibrosis |\n\n' +
        '- **Indoxyl sulfate (IS)**: Derived from dietary tryptophan by gut bacteria; activates AhR ' +
        '(aryl hydrocarbon receptor), NF-kB, and TGF-beta; promotes endothelial dysfunction and cardiac fibrosis\n' +
        '- **p-Cresyl sulfate (pCS)**: From tyrosine/phenylalanine metabolism; activates ROS production, ' +
        'leukocyte activation, and vascular smooth muscle cell proliferation\n' +
        '- **TMAO** (trimethylamine N-oxide): Gut microbiome-derived; promotes atherosclerosis and ' +
        'thrombosis; elevated in CKD\n' +
        '- Protein-bound toxins are poorly cleared by conventional dialysis, explaining the high ' +
        'residual cardiovascular risk in dialysis patients\n\n' +
        '### FGF-23 and CKD-MBD Pathophysiology\n\n' +
        'FGF-23 is the earliest biomarker to rise in CKD-MBD:\n\n' +
        '1. Phosphorus retention triggers FGF-23 release from osteocytes\n' +
        '2. FGF-23 (via Klotho co-receptor) promotes renal phosphorus excretion and suppresses ' +
        '1-alpha-hydroxylase, reducing calcitriol production\n' +
        '3. As CKD progresses, Klotho expression declines (Klotho deficiency is itself pathogenic)\n' +
        '4. FGF-23 accumulates to very high levels; directly causes left ventricular hypertrophy ' +
        '(via FGFR4, Klotho-independent), immune dysfunction, and erythropoietin resistance\n' +
        '5. Calcitriol deficiency leads to calcium malabsorption, stimulating PTH\n' +
        '6. PTH initially compensates by mobilizing bone calcium and increasing phosphorus excretion, ' +
        'but eventually leads to high-turnover bone disease (osteitis fibrosa cystica)\n\n' +
        '### Vascular Calcification\n\n' +
        '- In CKD, vascular smooth muscle cells (VSMCs) undergo osteochondrogenic differentiation, ' +
        'actively depositing hydroxyapatite in vessel walls\n' +
        '- Driven by: hyperphosphatemia, high calcium-phosphorus product, uremic toxins, loss of ' +
        'calcification inhibitors (fetuin-A, matrix Gla protein, pyrophosphate)\n' +
        '- Medial calcification (Monckeberg) predominates in CKD, increasing arterial stiffness and ' +
        'pulse pressure, contributing to LVH and heart failure with preserved ejection fraction\n' +
        '- Calciphylaxis (calcific uremic arteriolopathy): devastating complication with arteriolar ' +
        'calcification, thrombosis, and skin necrosis; treated with sodium thiosulfate\n\n' +
        '## Advanced Dialysis Concepts\n\n' +
        '### Dialysis Adequacy\n' +
        '- HD: Kt/V target >= 1.4 per session (HEMO study); urea reduction ratio (URR) >= 70%\n' +
        '- PD: weekly Kt/V >= 1.7 (ADEMEX study showed no benefit >1.7)\n' +
        '- Residual kidney function (RKF) contributes significantly; RKF loss accelerates on HD vs PD\n\n' +
        '### Extended/Intensive Hemodialysis\n' +
        '- Nocturnal HD (6-8 hours, 3-6 nights/week): improved phosphorus control, BP, LVH regression\n' +
        '- Short daily HD (2-3 hours, 5-6 days/week): improved fluid management\n' +
        '- FHN trial: frequent HD improved LVH and physical health composite\n\n' +
        '### Emerging Modalities\n' +
        '- **Incremental dialysis**: Starting with 2x/week HD based on residual function\n' +
        '- **Wearable/portable dialysis**: Miniaturized devices for continuous ambulatory HD\n' +
        '- **Bioartificial kidney**: Silicon nanopore membranes + renal tubular cell bioreactor (UCSF Kidney Project)',
      keyTerms: [
        { term: 'tubulo-interstitial fibrosis', definition: 'Final common pathway of CKD: scarring in tubules and interstitial space' },
        { term: 'EMT', definition: 'Epithelial-mesenchymal transition; process where tubular cells acquire fibroblast-like properties' },
        { term: 'FGF-23', definition: 'Fibroblast growth factor-23; phosphaturic hormone from osteocytes; earliest CKD-MBD marker' },
        { term: 'Klotho', definition: 'Co-receptor for FGF-23; deficiency in CKD contributes to aging phenotype and calcification' },
        { term: 'indoxyl sulfate', definition: 'Protein-bound uremic toxin from tryptophan metabolism; causes endothelial and cardiac damage' },
        { term: 'p-cresyl sulfate', definition: 'Protein-bound uremic toxin from tyrosine metabolism; promotes vascular disease' },
        { term: 'TMAO', definition: 'Trimethylamine N-oxide; gut microbiome-derived uremic toxin promoting atherosclerosis' },
        { term: 'calciphylaxis', definition: 'Calcific uremic arteriolopathy; arteriolar calcification with skin necrosis in advanced CKD' },
        { term: 'Kt/V', definition: 'Measure of dialysis adequacy; K=clearance, t=time, V=volume of distribution' },
        { term: 'pericyte-myofibroblast transition', definition: 'Key mechanism of renal fibrosis where perivascular cells become collagen-producing myofibroblasts' },
      ],
      clinicalNotes:
        'FGF-23 elevation precedes PTH rise and phosphorus elevation in CKD-MBD progression. High FGF-23 independently ' +
        'predicts mortality in CKD and dialysis patients. Protein-bound uremic toxins are poorly removed by ' +
        'conventional dialysis -- this is an active area of therapeutic development. Calciphylaxis has >50% ' +
        '1-year mortality; sodium thiosulfate, wound care, and avoidance of warfarin are mainstays of treatment.',
    },
    5: {
      level: 5,
      summary: 'Expert CKD topics encompass precision nephrology with genetic testing, novel therapeutic targets, gut-kidney axis modulation, xenotransplantation advances, and health equity in kidney disease.',
      explanation:
        '## Precision Nephrology and Genetic CKD\n\n' +
        '### APOL1-Associated Kidney Disease\n' +
        '- APOL1 G1 and G2 risk variants (in individuals of African descent) confer 7-10x increased ' +
        'risk of FSGS, hypertension-attributed CKD, and HIV-associated nephropathy\n' +
        '- Risk alleles arose through positive selection against Trypanosoma brucei (sleeping sickness)\n' +
        '- APOL1 variants cause podocyte injury through cation channel formation in the plasma membrane, ' +
        'mitochondrial dysfunction, inflammasome activation, and autophagy impairment\n' +
        '- Inaxaplin (VX-147): First-in-class small molecule inhibitor of APOL1 pore function; ' +
        'phase 2/3 trials showed 47.6% reduction in proteinuria in APOL1-mediated FSGS (AMPLITUDE trial)\n' +
        '- APOL1 genotyping increasingly used in living donor evaluation; APOL1 Long-term Kidney ' +
        'Transplantation Outcomes Network (APOLLO) studying impact on donor and recipient outcomes\n\n' +
        '### Genetic Kidney Disease Diagnosis\n' +
        '- Whole exome/genome sequencing identifies monogenic cause in 10-20% of adult CKD and up to ' +
        '30% of pediatric CKD\n' +
        '- Common monogenic diagnoses: COL4A3/4/5 (Alport spectrum), PKD1/2 (ADPKD), UMOD (uromodulin ' +
        'kidney disease), HNF1B, PAX2 (CAKUT)\n' +
        '- Clinical impact: reclassifies diagnosis in ~25% of cases, alters management in ~20%, and ' +
        'enables family screening and genetic counseling\n\n' +
        '## Novel Therapeutic Targets\n\n' +
        '### Endothelin Receptor Antagonists\n' +
        '- Atrasentan: Selective ETA receptor antagonist; ALIGN trial showed 35.4% reduction in CKD ' +
        'progression in IgA nephropathy\n' +
        '- Mechanism: Reduces glomerular inflammation, fibrosis, and podocyte injury\n' +
        '- Fluid retention and heart failure risk managed by SGLT2i co-administration\n\n' +
        '### GLP-1 Receptor Agonists in CKD\n' +
        '- FLOW trial (semaglutide): 24% reduction in kidney composite endpoint in type 2 diabetes ' +
        'with CKD; stopped early for efficacy\n' +
        '- Mechanisms beyond glucose: anti-inflammatory, anti-fibrotic, weight reduction, ' +
        'natriuretic effects\n' +
        '- Emerging as important addition to the "four pillars" of kidney protection ' +
        '(RAAS blockade + SGLT2i + finerenone + GLP-1 RA)\n\n' +
        '### Complement-Targeted Therapies\n' +
        '- Iptacopan (factor B inhibitor): For C3 glomerulopathy and IgA nephropathy\n' +
        '- Pegcetacoplan (C3 inhibitor): C3 glomerulopathy trials\n' +
        '- Avacopan (C5a receptor inhibitor): Approved for ANCA vasculitis; reduces glucocorticoid exposure\n\n' +
        '### Anti-Fibrotic Agents\n' +
        '- Pirfenidone and nintedanib (approved for lung fibrosis) being evaluated in CKD\n' +
        '- ASK1 (apoptosis signal-regulating kinase 1) inhibitors: Selonsertib failed in DKD but ' +
        'pathway remains of interest\n' +
        '- Baricitinib (JAK1/2 inhibitor): Anti-inflammatory effects being studied in lupus nephritis and DKD\n\n' +
        '## The Gut-Kidney Axis\n\n' +
        '- CKD alters gut microbiome composition (dysbiosis): increased Enterobacteriaceae, decreased ' +
        'Lactobacillaceae and Bifidobacteriaceae\n' +
        '- Uremia impairs intestinal barrier ("leaky gut"), increasing translocation of bacterial ' +
        'endotoxin and uremic toxin precursors\n' +
        '- Interventions under investigation:\n' +
        '  - AST-120 (oral charcoal adsorbent): reduces indoxyl sulfate; EPPIC trials showed marginal benefit\n' +
        '  - Targeted probiotics/synbiotics: modulate gut flora to reduce uremic toxin production\n' +
        '  - Dietary fiber: increases short-chain fatty acid production, improves barrier function\n' +
        '  - Tryptophan hydroxylase inhibitors: reduce indole-derived toxin production\n\n' +
        '## Transplant Advances\n\n' +
        '### Xenotransplantation\n' +
        '- Gene-edited pig kidneys (10-gene knockout including alpha-Gal, CMAH, B4GALNT2 + human ' +
        'transgenes: CD46, CD55, EPCR, TBM, CD47, HO1, TNFAIP3)\n' +
        '- First clinical pig-to-human kidney xenotransplants (2024-2025): demonstrated up to 2 months ' +
        'of function; limited by infection complications and immune-mediated injury\n' +
        '- Key challenges: delayed xenograft rejection, porcine endogenous retrovirus (PERV) risk, ' +
        'optimal immunosuppression, long-term outcomes\n\n' +
        '### Tolerance Induction\n' +
        '- Mixed chimerism protocols (combined kidney-bone marrow transplant): Stanford/MGH programs ' +
        'achieving immunosuppression withdrawal in selected patients\n' +
        '- Regulatory T-cell (Treg) therapy: Ex-vivo expanded Tregs to promote allograft tolerance\n' +
        '- IL-2 low-dose therapy: Expands Tregs in vivo; being tested in transplant setting\n\n' +
        '## Health Equity in Kidney Disease\n\n' +
        '- CKD-EPI 2021 equation: Removed race variable from GFR estimation, replacing the previous ' +
        'race-adjusted formula that systematically overestimated GFR in Black patients\n' +
        '- Cystatin C-based GFR estimation reduces racial bias compared to creatinine-based equations\n' +
        '- Disparities in transplant access: Black patients wait longer for transplant, have lower ' +
        'rates of pre-emptive transplant, and lower living donor rates\n' +
        '- Policy initiatives: Removing time on dialysis as a listing criterion, incentivizing ' +
        'living donation, paired kidney exchange programs, and voucher programs\n' +
        '- APOL1 genotyping in living donor evaluation: Ethical considerations around genetic ' +
        'testing and potential discrimination\n\n' +
        '## Artificial Intelligence in CKD\n\n' +
        '- KidneyIntelX: AI-derived biomarker panel (TNFR1, TNFR2, KIM-1) predicting CKD progression ' +
        'in diabetic kidney disease; FDA breakthrough device designation\n' +
        '- Machine learning models for predicting ESKD timing, optimizing dialysis prescriptions, ' +
        'and identifying transplant candidates\n' +
        '- Digital pathology with AI-assisted glomerular morphometry and interstitial fibrosis ' +
        'quantification on kidney biopsies',
      keyTerms: [
        { term: 'APOL1', definition: 'Apolipoprotein L1; risk variants in African-descent populations cause podocytopathy and CKD' },
        { term: 'inaxaplin', definition: 'First small molecule inhibitor of APOL1 pore function for APOL1-mediated FSGS' },
        { term: 'atrasentan', definition: 'Selective endothelin A receptor antagonist showing benefit in IgA nephropathy (ALIGN trial)' },
        { term: 'xenotransplantation', definition: 'Transplantation of organs across species, e.g., gene-edited pig kidneys to humans' },
        { term: 'gut-kidney axis', definition: 'Bidirectional relationship between gut microbiome and kidney health in CKD' },
        { term: 'four pillars', definition: 'RAAS blockade + SGLT2i + finerenone + GLP-1 RA as comprehensive kidney protection strategy' },
        { term: 'CKD-EPI 2021', definition: 'Race-free GFR estimation equation addressing racial bias in kidney function assessment' },
        { term: 'KidneyIntelX', definition: 'AI-derived prognostic biomarker panel for diabetic kidney disease progression' },
        { term: 'mixed chimerism', definition: 'Tolerance induction strategy using combined kidney-bone marrow transplant' },
        { term: 'FLOW trial', definition: 'Landmark trial demonstrating semaglutide reduces CKD progression in diabetic kidney disease' },
      ],
      clinicalNotes:
        'The "four pillars" of kidney protection (RAAS blockade + SGLT2i + finerenone + GLP-1 RA) represent ' +
        'a paradigm shift in CKD management. APOL1 testing should be offered in the evaluation of CKD of ' +
        'unknown etiology in patients of African descent. CKD-EPI 2021 race-free equation should be universally ' +
        'adopted. Xenotransplantation is rapidly advancing but remains experimental. Genetic testing reclassifies ' +
        'approximately 25% of CKD diagnoses and should be considered in unexplained CKD, family history, or ' +
        'atypical presentations.',
    },
  },
  media: [],
  citations: [
    {
      id: 'kdigo-ckd-2024',
      type: 'article',
      title: 'KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD',
      authors: ['Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group'],
      source: 'Kidney International',
      url: 'https://kdigo.org/guidelines/ckd-evaluation-and-management/',
      license: 'Open Access',
    },
    {
      id: 'dapa-ckd-2020',
      type: 'article',
      title: 'Dapagliflozin in Patients with Chronic Kidney Disease',
      authors: ['Heerspink HJL', 'Stefansson BV', 'Correa-Rotter R', 'et al.'],
      source: 'New England Journal of Medicine',
      page: '383:1436-1446',
      license: 'Subscription',
    },
    {
      id: 'flow-2024',
      type: 'article',
      title: 'Semaglutide and Kidney Outcomes in Type 2 Diabetes and CKD',
      authors: ['Perkovic V', 'Tuttle KR', 'Rossing P', 'et al.'],
      source: 'New England Journal of Medicine',
      license: 'Subscription',
    },
    {
      id: 'fidelio-2020',
      type: 'article',
      title: 'Finerenone in Patients with CKD and Type 2 Diabetes',
      authors: ['Bakris GL', 'Agarwal R', 'Anker SD', 'et al.'],
      source: 'New England Journal of Medicine',
      page: '383:2219-2229',
      license: 'Subscription',
    },
    {
      id: 'amplitude-2024',
      type: 'article',
      title: 'Inaxaplin for Proteinuric Kidney Disease in APOL1-Mediated FSGS',
      authors: ['Vertex Pharmaceuticals'],
      source: 'New England Journal of Medicine',
      license: 'Subscription',
    },
  ],
  crossReferences: [
    { targetId: 'acute-kidney-injury', targetType: 'condition', relationship: 'related', label: 'AKI as risk factor for CKD' },
    { targetId: 'how-kidneys-work', targetType: 'concept', relationship: 'parent', label: 'Normal kidney function' },
    { targetId: 'measuring-kidney-function', targetType: 'concept', relationship: 'related', label: 'GFR and kidney function assessment' },
    { targetId: 'kidney-disease-stages', targetType: 'concept', relationship: 'related', label: 'CKD staging framework' },
    { targetId: 'glomerular-diseases', targetType: 'condition', relationship: 'related', label: 'Glomerulonephritis as CKD cause' },
  ],
  tags: {
    systems: ['renal', 'urinary', 'cardiovascular', 'endocrine', 'skeletal'],
    topics: ['nephrology', 'internal-medicine', 'pathology', 'pharmacology', 'transplant-medicine'],
    keywords: [
      'CKD', 'chronic kidney disease', 'GFR', 'albuminuria', 'dialysis', 'hemodialysis',
      'peritoneal dialysis', 'kidney transplant', 'SGLT2 inhibitor', 'finerenone', 'anemia',
      'CKD-MBD', 'hyperkalemia', 'metabolic acidosis', 'vascular calcification', 'APOL1',
      'uremic toxins', 'xenotransplantation',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },
  createdAt: '2025-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};
