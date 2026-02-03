import { EducationalContent } from '../types';

export const acuteKidneyInjury: EducationalContent = {
  id: 'acute-kidney-injury',
  type: 'condition',
  name: 'Acute Kidney Injury',
  nameEs: 'Lesion Renal Aguda',
  alternateNames: ['AKI', 'Acute Renal Failure', 'ARF'],
  levels: {
    1: {
      level: 1,
      summary: 'Acute kidney injury happens when your kidneys suddenly stop working well and cannot clean your blood properly.',
      explanation:
        'Think of your kidneys like a coffee filter. Normally, they filter waste out of your blood ' +
        'and send it out as urine. In acute kidney injury (AKI), something damages the filter or blocks it, ' +
        'so waste builds up in your body. This can happen quickly -- over hours or days.\n\n' +
        'There are three main reasons the kidneys might suddenly stop working:\n\n' +
        '1. **Not enough blood reaching the kidneys** -- like a garden hose with the water turned down too low. ' +
        'This can happen from dehydration, heavy bleeding, or a weak heart.\n\n' +
        '2. **The kidney itself is damaged** -- the filter gets clogged or torn. Certain medicines, ' +
        'infections, or toxins can hurt the kidney tissue directly.\n\n' +
        '3. **The drain is blocked** -- urine cannot leave the body because something is blocking the tubes ' +
        'that carry it out, like a kidney stone or an enlarged prostate.\n\n' +
        'Doctors watch for warning signs such as making less urine than normal, swelling in the legs, ' +
        'feeling very tired, or feeling confused. Blood tests show waste products building up. ' +
        'Most of the time, if the cause is found and treated quickly, the kidneys can recover.',
      keyTerms: [
        { term: 'acute', definition: 'Happening suddenly, over a short time' },
        { term: 'kidney injury', definition: 'Damage that stops the kidneys from working properly' },
        { term: 'urine', definition: 'Liquid waste your kidneys make' },
        { term: 'dehydration', definition: 'Not having enough water in your body' },
        { term: 'toxins', definition: 'Harmful substances that can damage organs' },
      ],
      analogies: [
        'Your kidneys work like a coffee filter -- AKI is when the filter suddenly gets clogged or breaks.',
        'Imagine a sink with three problems: the faucet barely runs (not enough blood), the drain is cracked (kidney damage), or the pipe is blocked (urine blockage).',
      ],
      examples: [
        'A person who has severe diarrhea and vomiting for days without drinking enough water may develop AKI from dehydration.',
        'After major surgery, a patient might develop AKI because blood pressure dropped too low during the operation.',
      ],
      patientCounselingPoints: [
        'Drink plenty of water, especially when you are sick with vomiting or diarrhea.',
        'Tell your doctor about all medicines you take, including over-the-counter pain relievers.',
        'If you notice you are urinating much less than usual, contact your doctor.',
      ],
      clinicalNotes: '',
    },
    2: {
      level: 2,
      summary: 'AKI is classified by rising creatinine or decreasing urine output, with causes divided into pre-renal, intrinsic renal, and post-renal categories.',
      explanation:
        '## Definition and Detection\n\n' +
        'Acute kidney injury is defined by a rapid decline in kidney function occurring over hours to days. ' +
        'Doctors detect it using two key measurements:\n\n' +
        '- **Serum creatinine**: A waste product from muscle metabolism normally cleared by the kidneys. ' +
        'Rising creatinine indicates reduced kidney filtering.\n' +
        '- **Blood urea nitrogen (BUN)**: Another waste product. The BUN-to-creatinine ratio helps ' +
        'distinguish pre-renal from intrinsic causes (ratio >20:1 suggests pre-renal).\n' +
        '- **Urine output**: Healthy kidneys make at least 0.5 mL/kg/hour. Oliguria (low urine output) ' +
        'is a warning sign.\n\n' +
        '## Three Categories of Causes\n\n' +
        '### Pre-renal (before the kidney)\n' +
        'The kidneys are structurally normal but receive inadequate blood flow:\n' +
        '- Dehydration, hemorrhage, severe vomiting/diarrhea\n' +
        '- Heart failure (pump failure)\n' +
        '- Sepsis (severe infection causing blood pressure drop)\n' +
        '- Medications: NSAIDs (constrict afferent arteriole), ACE inhibitors (dilate efferent arteriole)\n\n' +
        '### Intrinsic renal (inside the kidney)\n' +
        'Direct damage to kidney structures:\n' +
        '- **Acute tubular necrosis (ATN)**: Most common cause; from prolonged ischemia or nephrotoxins\n' +
        '- **Acute interstitial nephritis (AIN)**: Allergic drug reaction (antibiotics, PPIs, NSAIDs)\n' +
        '- **Glomerulonephritis**: Immune-mediated glomerular injury\n' +
        '- **Vascular**: Renal artery thrombosis, thrombotic microangiopathy\n\n' +
        '### Post-renal (after the kidney)\n' +
        'Obstruction of urine outflow:\n' +
        '- Kidney stones, blood clots\n' +
        '- Benign prostatic hyperplasia (BPH)\n' +
        '- Tumors compressing ureters\n' +
        '- Bilateral obstruction required to cause AKI (unless single functioning kidney)\n\n' +
        '## Basic Workup\n' +
        '- Urinalysis: muddy brown casts suggest ATN; white cell casts suggest AIN; red cell casts suggest glomerulonephritis\n' +
        '- Renal ultrasound: checks for obstruction (hydronephrosis) and kidney size\n' +
        '- Urine electrolytes: help differentiate pre-renal from intrinsic causes',
      keyTerms: [
        { term: 'creatinine', definition: 'Waste product from muscle, used to measure kidney function' },
        { term: 'BUN', definition: 'Blood urea nitrogen, another kidney function marker' },
        { term: 'oliguria', definition: 'Abnormally low urine output, typically <400 mL/day' },
        { term: 'pre-renal', definition: 'AKI caused by reduced blood flow to the kidneys' },
        { term: 'intrinsic renal', definition: 'AKI caused by direct damage to kidney tissue' },
        { term: 'post-renal', definition: 'AKI caused by obstruction of urine outflow' },
        { term: 'acute tubular necrosis', definition: 'Death of tubular cells from ischemia or toxins; most common intrinsic AKI' },
        { term: 'hydronephrosis', definition: 'Swelling of the kidney due to urine backup from obstruction' },
        { term: 'urinalysis', definition: 'Laboratory test examining urine content and sediment' },
      ],
      analogies: [
        'Pre-renal AKI is like a factory (kidney) with a water supply problem -- the machines are fine but there is no input.',
        'Post-renal AKI is like a clogged drain -- the factory works but output cannot leave.',
      ],
      clinicalNotes:
        'Pre-renal AKI is the most common form (~55-60%). A trial of IV fluid resuscitation helps confirm pre-renal etiology when creatinine improves. ' +
        'Always check a urinalysis and renal ultrasound in the initial workup.',
    },
    3: {
      level: 3,
      summary: 'KDIGO staging stratifies AKI severity; fractional excretion of sodium (FENa) and urine studies guide differential diagnosis; ATN and contrast nephropathy are common intrinsic causes.',
      explanation:
        '## KDIGO Staging (2012)\n\n' +
        'The Kidney Disease: Improving Global Outcomes (KDIGO) classification defines AKI and grades severity:\n\n' +
        '| Stage | Serum Creatinine Criteria | Urine Output Criteria |\n' +
        '|-------|--------------------------|----------------------|\n' +
        '| 1 | Rise >= 0.3 mg/dL within 48h OR 1.5-1.9x baseline within 7 days | <0.5 mL/kg/h for 6-12h |\n' +
        '| 2 | 2.0-2.9x baseline | <0.5 mL/kg/h for >= 12h |\n' +
        '| 3 | >= 3.0x baseline OR creatinine >= 4.0 mg/dL OR initiation of RRT | <0.3 mL/kg/h for >= 24h OR anuria >= 12h |\n\n' +
        '## Fractional Excretion of Sodium (FENa)\n\n' +
        'FENa = (UNa x PCr) / (PNa x UCr) x 100\n\n' +
        '- **FENa <1%**: Pre-renal (kidneys avidly retaining sodium)\n' +
        '- **FENa >2%**: Intrinsic renal (tubules cannot reabsorb sodium)\n' +
        '- **Caveat**: Use FEUrea in patients on diuretics (FEUrea <35% suggests pre-renal)\n\n' +
        '## Acute Tubular Necrosis (ATN)\n\n' +
        'The most common intrinsic AKI. Two subtypes:\n\n' +
        '1. **Ischemic ATN**: Prolonged pre-renal state leads to tubular cell death. Phases:\n' +
        '   - Initiation: insult occurs\n' +
        '   - Extension: ongoing injury and inflammation\n' +
        '   - Maintenance: GFR remains low (1-2 weeks); muddy brown granular casts on UA\n' +
        '   - Recovery: tubular regeneration, polyuria phase\n\n' +
        '2. **Nephrotoxic ATN**: Direct tubular toxicity from:\n' +
        '   - Aminoglycosides (gentamicin, tobramycin) -- dose-dependent\n' +
        '   - Amphotericin B -- distal tubule injury\n' +
        '   - Cisplatin -- proximal tubule injury\n' +
        '   - Myoglobin (rhabdomyolysis) -- pigment nephropathy\n' +
        '   - Hemoglobin (hemolysis)\n\n' +
        '## Contrast-Induced Nephropathy (CIN)\n\n' +
        'AKI developing within 48-72 hours of iodinated contrast administration. Mechanism involves ' +
        'direct tubular toxicity, medullary vasoconstriction, and oxidative stress. Risk factors include ' +
        'pre-existing CKD (GFR <60), diabetes, volume depletion, high contrast volume, and concurrent ' +
        'nephrotoxins.\n\n' +
        'Prevention: pre-procedural IV normal saline hydration, minimize contrast volume, hold metformin, ' +
        'avoid concurrent nephrotoxins. N-acetylcysteine (NAC) benefit remains controversial.\n\n' +
        '## Hepatorenal Syndrome (HRS)\n\n' +
        'Functional renal failure in advanced liver disease due to splanchnic vasodilation and renal ' +
        'vasoconstriction. Two types:\n' +
        '- **HRS-AKI (formerly Type 1)**: Rapid deterioration, doubling of creatinine to >2.5 mg/dL in <2 weeks\n' +
        '- **HRS-CKD (formerly Type 2)**: Gradual, associated with refractory ascites\n\n' +
        'Treatment: albumin + vasopressors (terlipressin preferred, or midodrine + octreotide). ' +
        'Definitive treatment is liver transplantation.',
      keyTerms: [
        { term: 'KDIGO', definition: 'Kidney Disease: Improving Global Outcomes; organization that standardized AKI staging' },
        { term: 'FENa', definition: 'Fractional excretion of sodium; differentiates pre-renal (<1%) from intrinsic (>2%) AKI' },
        { term: 'FEUrea', definition: 'Fractional excretion of urea; useful when patient is on diuretics (<35% suggests pre-renal)' },
        { term: 'ATN', definition: 'Acute tubular necrosis; death of renal tubular cells from ischemia or nephrotoxins' },
        { term: 'muddy brown casts', definition: 'Characteristic urine sediment finding in ATN' },
        { term: 'contrast-induced nephropathy', definition: 'AKI caused by iodinated contrast agents, particularly in patients with CKD' },
        { term: 'hepatorenal syndrome', definition: 'Functional renal failure in advanced liver cirrhosis due to hemodynamic changes' },
        { term: 'terlipressin', definition: 'Vasopressin analogue used to treat hepatorenal syndrome' },
        { term: 'rhabdomyolysis', definition: 'Skeletal muscle breakdown releasing myoglobin, which is nephrotoxic' },
        { term: 'polyuria', definition: 'Excessive urine output, seen during ATN recovery phase' },
      ],
      clinicalNotes:
        'KDIGO Stage 3 AKI requiring RRT carries 40-60% in-hospital mortality. FENa is unreliable in the setting of ' +
        'diuretics, contrast administration, or acute glomerulonephritis. Contrast-induced nephropathy risk is highest ' +
        'when GFR <30; iso-osmolar contrast and adequate hydration are key prevention strategies.',
    },
    4: {
      level: 4,
      summary: 'AKI involves complex tubular injury and repair pathways, novel biomarkers beyond creatinine, AKI-to-CKD transition mechanisms, and evidence-based RRT timing from the STARRT-AKI trial.',
      explanation:
        '## Tubular Cell Injury and Repair Mechanisms\n\n' +
        'Ischemic or toxic injury triggers a cascade of cellular events in proximal tubular epithelial cells:\n\n' +
        '### Injury Phase\n' +
        '- **ATP depletion**: Ischemia disrupts oxidative phosphorylation, leading to Na/K-ATPase dysfunction, ' +
        'loss of cell polarity, and cytoskeletal disruption\n' +
        '- **Calcium influx**: Mitochondrial calcium overload activates calpains and phospholipases\n' +
        '- **Reactive oxygen species (ROS)**: Generated during reperfusion; cause lipid peroxidation and DNA damage\n' +
        '- **Cell death pathways**: Necrosis predominates in severe injury; apoptosis via caspase-3 and caspase-9 ' +
        'activation in sublethal injury; regulated necrosis (necroptosis via RIPK1/RIPK3/MLKL, ferroptosis via ' +
        'GPX4 depletion) increasingly recognized\n' +
        '- **Detachment**: Injured cells lose integrin-mediated adhesion and slough into the tubular lumen, ' +
        'forming casts and causing tubular obstruction\n\n' +
        '### Repair Phase\n' +
        '- Surviving tubular cells dedifferentiate, express vimentin and PAX2, proliferate, and redifferentiate\n' +
        '- Macrophages transition from M1 (pro-inflammatory, IL-6, TNF-alpha) to M2 (anti-inflammatory, IL-10, TGF-beta) ' +
        'phenotype, facilitating repair\n' +
        '- Wnt/beta-catenin and Notch signaling pathways promote tubular regeneration\n' +
        '- Maladaptive repair with persistent dedifferentiation leads to G2/M cell cycle arrest, ' +
        'profibrotic signaling (TGF-beta, CTGF), and transition to CKD\n\n' +
        '## Novel AKI Biomarkers\n\n' +
        'Serum creatinine is a late and insensitive marker. Novel biomarkers enable earlier detection:\n\n' +
        '| Biomarker | Source | Timing | Clinical Utility |\n' +
        '|-----------|--------|--------|------------------|\n' +
        '| **NGAL** (neutrophil gelatinase-associated lipocalin) | Proximal and distal tubule | 2-4h post-injury | Early detection; rises before creatinine |\n' +
        '| **KIM-1** (kidney injury molecule-1) | Proximal tubule | 12-24h | Specific for ischemic/nephrotoxic injury |\n' +
        '| **TIMP-2 x IGFBP7** (NephroCheck) | Distal tubule/collecting duct | 4-12h | FDA-approved; cell cycle arrest markers; predicts Stage 2/3 AKI |\n' +
        '| **L-FABP** (liver-type fatty acid binding protein) | Proximal tubule | 4h | Tubular stress marker |\n' +
        '| **IL-18** | Proximal tubule | 6-12h | Distinguishes ATN from pre-renal |\n' +
        '| **Urinary angiotensinogen** | Proximal tubule | Early | Reflects intrarenal RAAS activation |\n\n' +
        '## AKI-to-CKD Transition\n\n' +
        'AKI is now recognized as an independent risk factor for CKD development:\n\n' +
        '- **Maladaptive repair**: Persistent tubular injury response with G2/M arrest activates profibrotic ' +
        'pathways (TGF-beta/Smad3, Wnt/beta-catenin, Hedgehog)\n' +
        '- **Capillary rarefaction**: Loss of peritubular capillary density reduces oxygen delivery, creating ' +
        'a hypoxic microenvironment that perpetuates injury\n' +
        '- **Epigenetic reprogramming**: DNA methylation and histone modification changes persist after AKI, ' +
        'altering gene expression long-term\n' +
        '- **Mitochondrial dysfunction**: Fragmented mitochondria with impaired biogenesis fail to meet ' +
        'metabolic demands of recovering tubules\n' +
        '- **Chronic inflammation**: Persistent macrophage infiltration and cytokine release (MCP-1, IL-1beta)\n\n' +
        'Risk factors for AKI-to-CKD transition: severity and duration of AKI, recurrent AKI episodes, ' +
        'pre-existing CKD, age, diabetes, proteinuria, and failure to recover baseline creatinine.\n\n' +
        '## Renal Replacement Therapy Timing: STARRT-AKI Trial\n\n' +
        'The STARRT-AKI trial (2020, NEJM) randomized 2,927 critically ill patients with KDIGO Stage 2-3 AKI:\n' +
        '- **Accelerated strategy**: RRT initiated within 12 hours of eligibility\n' +
        '- **Standard strategy**: RRT initiated only for conventional indications (hyperkalemia, acidosis, ' +
        'volume overload, uremia)\n' +
        '- **Result**: No difference in 90-day mortality (43.9% vs 43.7%)\n' +
        '- **Key finding**: Accelerated strategy associated with higher rate of RRT dependence at 90 days and ' +
        'more adverse events\n' +
        '- **Clinical implication**: Watchful waiting with initiation for conventional indications is appropriate ' +
        'for most patients; early initiation may cause harm through hemodynamic instability and dialysis-related ' +
        'complications\n\n' +
        '## Indications for Urgent RRT\n' +
        'Mnemonic: **AEIOU**\n' +
        '- **A**cidosis: Severe metabolic acidosis (pH <7.1) refractory to bicarbonate\n' +
        '- **E**lectrolytes: Refractory hyperkalemia (>6.5 mEq/L) with ECG changes\n' +
        '- **I**ngestions: Toxic alcohols (methanol, ethylene glycol), lithium, salicylates\n' +
        '- **O**verload: Volume overload refractory to diuretics\n' +
        '- **U**remia: Uremic encephalopathy, pericarditis, or bleeding',
      keyTerms: [
        { term: 'NGAL', definition: 'Neutrophil gelatinase-associated lipocalin; early biomarker of tubular injury rising 2-4h after insult' },
        { term: 'KIM-1', definition: 'Kidney injury molecule-1; transmembrane glycoprotein specific for proximal tubular ischemic/toxic injury' },
        { term: 'TIMP-2/IGFBP7', definition: 'NephroCheck markers; cell cycle arrest biomarkers; FDA-approved for AKI risk prediction' },
        { term: 'necroptosis', definition: 'Regulated necrosis mediated by RIPK1/RIPK3/MLKL pathway' },
        { term: 'ferroptosis', definition: 'Iron-dependent cell death from lipid peroxidation due to GPX4 depletion' },
        { term: 'capillary rarefaction', definition: 'Loss of peritubular capillary density after AKI, promoting hypoxia and fibrosis' },
        { term: 'G2/M arrest', definition: 'Cell cycle arrest in tubular cells leading to profibrotic secretory phenotype' },
        { term: 'STARRT-AKI', definition: 'Landmark trial showing no benefit of accelerated RRT initiation in severe AKI' },
        { term: 'maladaptive repair', definition: 'Failed tubular recovery leading to fibrosis and CKD transition' },
        { term: 'AEIOU', definition: 'Mnemonic for urgent dialysis indications: Acidosis, Electrolytes, Ingestions, Overload, Uremia' },
      ],
      clinicalNotes:
        'TIMP-2 x IGFBP7 (NephroCheck) >0.3 identifies patients at risk for KDIGO 2-3 AKI within 12 hours. ' +
        'STARRT-AKI supports a standard approach to RRT timing -- watchful waiting unless conventional ' +
        'indications emerge. Ferroptosis inhibitors and mitochondrial-targeted agents are being explored as ' +
        'AKI therapeutics.',
    },
    5: {
      level: 5,
      summary: 'Precision AKI medicine involves molecular sub-phenotyping, AI-based early prediction models, nephrotoxin stewardship programs, and AKI management in complex populations including cirrhosis and post-cardiac surgery.',
      explanation:
        '## Precision AKI: Molecular Sub-Phenotypes\n\n' +
        'AKI is increasingly recognized as a syndrome with heterogeneous pathophysiology. Emerging ' +
        'sub-phenotyping strategies aim to identify distinct biological endotypes:\n\n' +
        '### Biomarker-Based Sub-Phenotypes\n' +
        '- **Sub-phenotype 1** (low inflammation/low injury): Lower NGAL, KIM-1, IL-6; better prognosis; ' +
        'may not benefit from aggressive intervention\n' +
        '- **Sub-phenotype 2** (high inflammation/high injury): Elevated inflammatory and tubular injury ' +
        'markers; higher mortality; may respond to targeted anti-inflammatory therapy\n' +
        '- Bhatraju et al. (2019, Kidney International) identified two AKI sub-phenotypes using latent class ' +
        'analysis of biomarker trajectories; sub-phenotype 2 had 2.3x higher 7-day mortality\n\n' +
        '### Molecular Endotypes\n' +
        '- Sepsis-associated AKI (SA-AKI) has distinct pathophysiology: microcirculatory dysfunction, ' +
        'metabolic reprogramming, mitochondrial injury, and inflammatory tubular apoptosis -- often with ' +
        'preserved renal blood flow (challenging the traditional ischemia paradigm)\n' +
        '- Urinary transcriptomics and proteomics panels under development to classify AKI endotypes in real-time\n' +
        '- The RUBY study validated clinical-biomarker models for persistent severe AKI prediction\n\n' +
        '## AI-Based AKI Prediction\n\n' +
        '### Deep Learning Models\n' +
        '- Tomasev et al. (2019, Nature): DeepMind developed a recurrent neural network predicting AKI up to ' +
        '48 hours in advance using electronic health records from VA hospitals. Achieved AUC 0.921 for KDIGO 3, ' +
        'but notable sex bias (trained predominantly on male data)\n' +
        '- Subsequent models incorporate continuous vital signs, medication administration records, and ' +
        'laboratory trends\n' +
        '- Federated learning approaches enable multi-center model training without sharing patient data\n\n' +
        '### Clinical Decision Support\n' +
        '- AKI e-alert systems reduce time to recognition and improve outcomes when coupled with ' +
        'standardized care bundles (e.g., the NHS England AKI detection system)\n' +
        '- AI-augmented nephrotoxin alerts reduce unnecessary nephrotoxin exposure by 25-35%\n' +
        '- Reinforcement learning models for personalized fluid management and vasopressor titration in ' +
        'AKI are under investigation\n\n' +
        '## Nephrotoxin Stewardship Programs\n\n' +
        'Systematic approaches to reducing medication-associated AKI:\n\n' +
        '- **NINJA (Nephrotoxic Injury Negated by Just-in-Time Action)**: Multi-center pediatric program ' +
        'reducing nephrotoxin-associated AKI by 24% through automated surveillance and real-time alerts\n' +
        '- Key nephrotoxins requiring surveillance: aminoglycosides, vancomycin, NSAIDs, ' +
        'calcineurin inhibitors, amphotericin B, IV contrast, piperacillin-tazobactam + vancomycin combination\n' +
        '- Triple-whammy combination (ACEi/ARB + diuretic + NSAID) increases AKI risk 31-fold\n' +
        '- Pharmacokinetic-guided dosing with Bayesian models for vancomycin (targeting AUC/MIC 400-600) ' +
        'reduces AKI compared to trough-based dosing\n\n' +
        '## AKI in Special Populations\n\n' +
        '### AKI in Cirrhosis\n' +
        '- Revised ICA (International Club of Ascites) criteria: AKI defined as creatinine rise >= 0.3 mg/dL ' +
        'within 48h or >= 50% from baseline; baseline = lowest creatinine in prior 3 months\n' +
        '- Low muscle mass in cirrhosis leads to falsely low baseline creatinine, masking AKI severity\n' +
        '- Differential diagnosis: pre-renal (volume-responsive), HRS-AKI (no response to albumin challenge), ' +
        'ATN (often superimposed on HRS), post-renal (rare)\n' +
        '- Terlipressin approved by FDA (2022) for HRS-AKI: CONFIRM trial showed 32% vs 17% HRS reversal vs ' +
        'placebo; requires monitoring for respiratory failure (boxed warning)\n' +
        '- Cystatin C may be superior to creatinine for GFR estimation in cirrhosis\n\n' +
        '### Cardiac Surgery-Associated AKI (CSA-AKI)\n' +
        '- Incidence: 20-30% of cardiac surgery patients; Stage 3 AKI in 2-5%\n' +
        '- Pathophysiology: hemodilution on cardiopulmonary bypass (CPB), non-pulsatile flow, ' +
        'ischemia-reperfusion injury, hemolysis from mechanical shear, inflammation from circuit activation, ' +
        'atheroemboli\n' +
        '- Risk scores: Cleveland Clinic Score, STS (Society of Thoracic Surgeons) risk calculator\n' +
        '- Prevention strategies: goal-directed perfusion (MAP > 65-70 on CPB), minimize CPB time, ' +
        'maintain hematocrit >21%, avoid hyperglycemia, remote ischemic preconditioning (RIPC) -- mixed evidence\n' +
        '- KDIGO care bundle (optimization of volume and hemodynamics, avoidance of nephrotoxins, ' +
        'prevention of hyperglycemia) in high-risk patients reduces AKI incidence\n\n' +
        '### Onco-Nephrology\n' +
        '- Immune checkpoint inhibitors (anti-PD1/PDL1, anti-CTLA4) cause AIN in 2-5% of patients; ' +
        'may present weeks to months after initiation; biopsy shows T-cell-rich interstitial infiltrate\n' +
        '- Chimeric antigen receptor T-cell (CAR-T) therapy: cytokine release syndrome-associated AKI ' +
        'in 10-30%, often concurrent with tumor lysis syndrome\n' +
        '- Tumor lysis syndrome: uric acid and calcium phosphate crystal nephropathy; prevention with ' +
        'rasburicase and aggressive hydration\n\n' +
        '## Emerging Therapeutics\n\n' +
        '- **Teprasiran**: Small interfering RNA (siRNA) targeting p53 in tubular cells; phase 3 trials ' +
        'for CSA-AKI prevention (QPI-1002)\n' +
        '- **Reltecimod (AB103)**: CD28 co-stimulatory modulator in sepsis-associated AKI\n' +
        '- **Recombinant alkaline phosphatase**: Detoxifies LPS; phase 2 trials in sepsis-associated AKI\n' +
        '- **Mitochondria-targeted antioxidants**: MitoQ, SS-31 (elamipretide) in preclinical/early trials\n' +
        '- **Stem cell therapies**: Mesenchymal stromal cells (MSCs) showing paracrine-mediated ' +
        'renoprotection in phase 1/2 trials',
      keyTerms: [
        { term: 'AKI sub-phenotypes', definition: 'Distinct biological subtypes of AKI identified by biomarker patterns and clinical trajectories' },
        { term: 'NINJA', definition: 'Nephrotoxic Injury Negated by Just-in-Time Action; pediatric nephrotoxin stewardship program' },
        { term: 'sepsis-associated AKI', definition: 'AKI in sepsis with distinct pathophysiology including microcirculatory dysfunction and metabolic reprogramming' },
        { term: 'CSA-AKI', definition: 'Cardiac surgery-associated AKI from CPB-related hemodynamic and inflammatory insults' },
        { term: 'terlipressin', definition: 'Vasopressin V1 receptor agonist FDA-approved for HRS-AKI (CONFIRM trial)' },
        { term: 'teprasiran', definition: 'siRNA targeting p53 in tubular cells under investigation for CSA-AKI prevention' },
        { term: 'triple-whammy', definition: 'Combination of ACEi/ARB + diuretic + NSAID increasing AKI risk 31-fold' },
        { term: 'remote ischemic preconditioning', definition: 'Brief limb ischemia cycles before surgery hypothesized to protect kidneys' },
        { term: 'federated learning', definition: 'AI training approach across institutions without sharing raw patient data' },
        { term: 'NephroCheck', definition: 'FDA-approved urinary TIMP-2 x IGFBP7 test predicting moderate-severe AKI' },
      ],
      clinicalNotes:
        'AI-based AKI prediction models show promise but require external validation and bias mitigation. ' +
        'Terlipressin for HRS-AKI carries a respiratory failure risk (CONFIRM trial boxed warning). ' +
        'Piperacillin-tazobactam + vancomycin increases AKI risk compared to cefepime + vancomycin ' +
        '(ACORN trial, 2023). Nephrotoxin stewardship is an evidence-based quality improvement strategy ' +
        'that all hospitals should implement.',
    },
  },
  media: [],
  citations: [
    {
      id: 'kdigo-aki-2012',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline for Acute Kidney Injury',
      authors: ['Kidney Disease: Improving Global Outcomes (KDIGO) AKI Work Group'],
      source: 'Kidney International Supplements',
      chapter: '2',
      page: '1-138',
      url: 'https://kdigo.org/guidelines/acute-kidney-injury/',
      license: 'Open Access',
    },
    {
      id: 'starrt-aki-2020',
      type: 'article',
      title: 'Timing of Initiation of Renal-Replacement Therapy in Acute Kidney Injury',
      authors: ['STARRT-AKI Investigators'],
      source: 'New England Journal of Medicine',
      page: '383:240-251',
      url: 'https://doi.org/10.1056/NEJMoa2000741',
      license: 'Subscription',
    },
    {
      id: 'tomasev-2019',
      type: 'article',
      title: 'A clinically applicable approach to continuous prediction of future acute kidney injury',
      authors: ['Tomasev N', 'Glorot X', 'Rae JW', 'et al.'],
      source: 'Nature',
      page: '572:116-119',
      license: 'Subscription',
    },
    {
      id: 'bhatraju-2019',
      type: 'article',
      title: 'Identification of Acute Kidney Injury Subphenotypes with Differing Molecular Signatures and Responses to Vasopressin Therapy',
      authors: ['Bhatraju PK', 'Zelnick LR', 'Herting J', 'et al.'],
      source: 'Kidney International',
      page: '95(6):1399-1408',
      license: 'Subscription',
    },
  ],
  crossReferences: [
    { targetId: 'chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'AKI-to-CKD transition' },
    { targetId: 'how-kidneys-work', targetType: 'concept', relationship: 'parent', label: 'Normal kidney function' },
    { targetId: 'measuring-kidney-function', targetType: 'concept', relationship: 'related', label: 'GFR measurement and creatinine' },
    { targetId: 'glomerular-diseases', targetType: 'condition', relationship: 'related', label: 'Glomerulonephritis as intrinsic AKI cause' },
  ],
  tags: {
    systems: ['renal', 'urinary'],
    topics: ['nephrology', 'critical-care', 'pathology', 'pharmacology'],
    keywords: [
      'AKI', 'acute kidney injury', 'acute renal failure', 'creatinine', 'KDIGO',
      'ATN', 'hepatorenal syndrome', 'contrast nephropathy', 'nephrotoxins',
      'dialysis', 'renal replacement therapy', 'biomarkers', 'NGAL', 'KIM-1',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },
  createdAt: '2025-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};
