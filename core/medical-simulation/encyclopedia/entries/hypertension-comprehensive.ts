/**
 * Comprehensive Hypertension Encyclopedia Entries
 * 
 * Based on ACC/AHA 2024 Hypertension Guidelines, ESC/ESH Guidelines,
 * and NCBI StatPearls (Open Access)
 * 
 * Covers: definition, classification, pathophysiology, end-organ damage,
 * diagnosis, treatment, resistant hypertension, emergencies, special populations
 */

import type { EncyclopediaEntry } from '../types';

// ═══════════════════════════════════════════════════════════════════════════════
// PRIMARY HYPERTENSION ENTRY
// ═══════════════════════════════════════════════════════════════════════════════

export const hypertensionEntry: EncyclopediaEntry = {
  entryId: 'hypertension',
  name: 'Hypertension (High Blood Pressure)',
  aliases: ['high blood pressure', 'HTN', 'arterial hypertension', 'systemic hypertension'],
  entryType: 'condition',
  category: 'cardiovascular',
  subcategory: 'vascular-disease',
  summary: 'A chronic condition characterized by persistently elevated blood pressure in the arteries, increasing the risk of heart disease, stroke, and kidney disease.',
  overview: {
    patient: 'Hypertension, or high blood pressure, is when the force of blood pushing against your artery walls is consistently too high. Think of it like water pressure in a garden hose - if the pressure is too high for too long, it can damage the hose. Similarly, high blood pressure can damage your blood vessels and organs over time. It is often called the "silent killer" because it usually has no symptoms but significantly increases your risk of heart attack, stroke, kidney disease, and other serious health problems. Blood pressure is measured with two numbers: systolic (pressure when the heart beats) over diastolic (pressure when the heart rests). Normal blood pressure is less than 120/80 mmHg. Treatment typically involves lifestyle changes and sometimes medication.',
    intermediate: 'Hypertension is defined as persistently elevated arterial blood pressure (BP ≥130/80 mmHg per ACC/AHA or ≥140/90 mmHg per ESC/ESH). It is a major modifiable risk factor for cardiovascular disease, affecting approximately 1.4 billion adults worldwide. The condition is classified by severity: Stage 1 (130-139/80-89 mmHg), Stage 2 (≥140/90 mmHg), and hypertensive crisis (≥180/120 mmHg). Pathophysiology involves multiple mechanisms including activation of the renin-angiotensin-aldosterone system (RAAS), sympathetic nervous system overactivity, endothelial dysfunction, and abnormal sodium handling. Hypertension can be primary (essential, 90-95% of cases) with no identifiable cause, or secondary (5-10%) due to identifiable conditions like renal artery stenosis, primary aldosteronism, or pheochromocytoma. Target organ damage affects the heart (LVH, heart failure), brain (stroke, cognitive decline), kidneys (nephrosclerosis, CKD), eyes (retinopathy), and peripheral arteries.',
    professional: 'Hypertension is a chronic elevation of systemic arterial blood pressure defined as sustained BP ≥130/80 mmHg (ACC/AHA 2017/2024) or ≥140/90 mmHg (ESC/ESH 2023, NICE UK). It represents a heterogeneous disorder of blood pressure regulation involving complex interactions between genetic, environmental, and behavioral factors. Epidemiology: Global prevalence ~30-45% of adults, with significant geographic and ethnic variation (highest in Eastern Europe, lowest in high-income Asia-Pacific). Primary (essential) hypertension accounts for 90-95% of cases and results from the interplay of polygenic predisposition with environmental factors (dietary sodium, obesity, physical inactivity, stress). Secondary hypertension (5-10%) includes renovascular disease, primary aldosteronism (5-10% of resistant hypertension), obstructive sleep apnea, renal parenchymal disease, pheochromocytoma, Cushing syndrome, coarctation of aorta, and drug-induced (NSAIDs, OCPs, stimulants, calcineurin inhibitors). Pathophysiologically, hypertension involves: (1) increased peripheral vascular resistance (structural remodeling, functional constriction), (2) increased cardiac output (salt-sensitive, volume expansion), (3) RAAS dysregulation, (4) sympathetic nervous system overactivity, (5) endothelial dysfunction (reduced NO, increased endothelin), (6) abnormal renal sodium handling, and (7) vascular inflammation/oxidative stress. The condition is graded based on office BP measurements, with additional risk stratification incorporating target organ damage, cardiovascular risk factors, and established cardiovascular or kidney disease.',
  },
  content: [
    {
      title: 'Definition and Classification',
      content: {
        patient: `Blood pressure is classified into several categories based on your readings:

**Normal**: Less than 120/80 mmHg - This is where you want to be for optimal health.

**Elevated**: 120-129 systolic and less than 80 diastolic - This is a warning sign. You do not have high blood pressure yet, but you are likely to develop it unless you make lifestyle changes.

**Stage 1 Hypertension**: 130-139 systolic OR 80-89 diastolic - This is the beginning of high blood pressure. Your doctor will likely recommend lifestyle changes and may consider medication if you have other heart disease risk factors.

**Stage 2 Hypertension**: 140 or higher systolic OR 90 or higher diastolic - This is more severe high blood pressure. You will need lifestyle changes and usually medication to bring your blood pressure down.

**Hypertensive Crisis**: Higher than 180 systolic and/or higher than 120 diastolic - This is a medical emergency. Wait a few minutes and check again. If readings are still high, contact your doctor immediately or call emergency services, especially if you have symptoms like chest pain, shortness of breath, or neurological symptoms.

Note: If your top and bottom numbers fall into different categories, your correct blood pressure category is the higher category.`,
        intermediate: `Blood Pressure Classification (ACC/AHA 2017/2024 Guidelines):

| Category | Systolic (mmHg) | | Diastolic (mmHg) |
|----------|-----------------|-|------------------|
| Normal | <120 | and | <80 |
| Elevated | 120-129 | and | <80 |
| Stage 1 Hypertension | 130-139 | or | 80-89 |
| Stage 2 Hypertension | >=140 | or | >=90 |
| Hypertensive Crisis | >=180 | and/or | >=120 |

Alternative ESC/ESH 2023 Classification:
- Optimal: <120/80
- Normal: 120-129/80-84
- High-normal: 130-139/85-89
- Grade 1 HTN: 140-159/90-99
- Grade 2 HTN: 160-179/100-109
- Grade 3 HTN: >=180/>=110
- Isolated systolic HTN: >=140 and <90

Measurement considerations: Blood pressure should be measured after 5 minutes of rest, with the patient seated, back supported, feet flat on floor, arm supported at heart level. Use an appropriate cuff size (bladder width 40% of arm circumference). Take at least two readings 1-2 minutes apart and average them. White coat hypertension (elevated office BP but normal home/ambulatory BP) affects 15-30% of patients. Masked hypertension (normal office but elevated out-of-office BP) affects 10-20% and carries similar cardiovascular risk as sustained hypertension.`,
        professional: `Blood Pressure Classification Systems:

**ACC/AHA 2017/2024 (US)**
- Normal: <120/<80 mmHg
- Elevated: 120-129/<80 mmHg
- Stage 1 HTN: 130-139 or 80-89 mmHg
- Stage 2 HTN: >=140 or >=90 mmHg
- Hypertensive Crisis: >=180 and/or >=120 mmHg

**ESC/ESH 2023 (Europe)**
- Optimal: <120/<80
- Normal: 120-129/80-84
- High-normal: 130-139/85-89
- Grade 1: 140-159/90-99
- Grade 2: 160-179/100-109
- Grade 3: >=180/>=110
- Isolated systolic HTN: SBP>=140 with DBP<90 (common in elderly)

**Ambulatory BP Monitoring (ABPM) Thresholds**
- Daytime HTN: >=135/85 mmHg
- Nighttime HTN: >=120/70 mmHg
- 24-hour HTN: >=130/80 mmHg

**Home BP Monitoring (HBPM) Thresholds**
- Hypertension: >=135/85 mmHg (corresponds to office >=140/90)

Phenotypes:
1. White coat hypertension: Office BP>=130/80 but awake ABPM<135/85 or HBPM<130/80. Affects 15-30% of general population, 30-40% of untreated patients. Associated with increased risk vs normotension but lower than sustained HTN.
2. Masked hypertension: Office BP<130/80 but out-of-office BP elevated. Affects 10-20% of population, higher in smokers, diabetics, OSA. Cardiovascular risk equivalent to sustained HTN.
3. White coat effect: Office BP higher than home BP in treated patients (does not establish diagnosis).
4. Morning surge: Exaggerated morning BP elevation (>20 mmHg morning-evening difference or >135/85 mmHg morning BP).
5. Nocturnal dipping patterns: Normal dip (10-20% lower than daytime), Non-dip (<10% reduction), Reverse dip (higher at night), Extreme dip (>20% reduction). Non-dipping associated with increased CV risk, diabetes, CKD, OSA.`,
      },
    },
    {
      title: 'Primary vs Secondary Hypertension Causes',
      content: {
        patient: `**Primary (Essential) Hypertension** (90-95% of cases): This is high blood pressure that develops gradually over many years without a single identifiable cause. It is the most common type and results from a combination of:
- Family history and genetics
- Aging
- Unhealthy diet (too much salt, not enough fruits and vegetables)
- Lack of physical activity
- Being overweight or obese
- Drinking too much alcohol
- Chronic stress
- Smoking

**Secondary Hypertension** (5-10% of cases): This is caused by an underlying medical condition. It often appears suddenly and causes higher blood pressure than primary hypertension. Causes include:
- Kidney problems (narrowed arteries to kidneys, kidney disease)
- Adrenal gland tumors (producing too much aldosterone, cortisol, or adrenaline)
- Obstructive sleep apnea (breathing stops during sleep)
- Thyroid problems
- Coarctation (narrowing) of the aorta
- Pregnancy-related conditions
- Certain medications (birth control pills, cold remedies, decongestants, pain relievers, steroids)

Secondary hypertension can sometimes be cured by treating the underlying cause.`,
        intermediate: `**Primary (Essential) Hypertension** (90-95%):
Multifactorial etiology involving genetic predisposition and environmental factors:
- Genetic factors: Polygenic inheritance, 30-50% heritability; candidate genes include ACE, AGT, AGTR1, ADD1, NEDD4L
- Dietary sodium: Salt sensitivity affects 30-50% of hypertensives, more common in African Americans, elderly, diabetics, CKD patients
- Obesity: Each 5 kg/m2 increase in BMI associated with ~5 mmHg SBP increase; mechanisms include increased SNS activity, RAAS activation, insulin resistance, leptin-mediated effects, compression of kidneys by visceral fat
- Physical inactivity: Reduced exercise associated with increased vascular stiffness and SNS tone
- Alcohol: Dose-dependent effect; >2 drinks/day increases BP
- Psychosocial stress: Chronic stress, low socioeconomic status, job strain
- Sleep deprivation: <6 hours sleep associated with increased BP

**Secondary Hypertension** (5-10%, more common in younger patients and those with resistant hypertension):
- Renal parenchymal disease (2-5%): Chronic kidney disease, diabetic nephropathy, glomerulonephritis, polycystic kidney disease
- Renovascular disease (1-4%): Atherosclerotic (elderly, smokers), fibromuscular dysplasia (young women)
- Primary aldosteronism (5-10% of resistant HTN, 1-2% general): Aldosterone-producing adenoma (Conn syndrome), bilateral adrenal hyperplasia; screen with aldosterone-renin ratio (ARR)
- Obstructive sleep apnea (30-50% of resistant HTN): Intermittent hypoxia leads to sympathetic activation, oxidative stress
- Pheochromocytoma (0.1-0.6%): Catecholamine-secreting tumor; triad of headache, sweating, palpitations
- Cushing syndrome (2-3% of resistant HTN): Cortisol excess from pituitary, adrenal, or ectopic ACTH
- Thyroid disease: Hypothyroidism (diastolic HTN), hyperthyroidism (systolic HTN)
- Coarctation of aorta (0.1%): Congenital narrowing; radiofemoral delay, arm BP > leg BP
- Drug-induced: NSAIDs (sodium retention), oral contraceptives (RAAS activation), corticosteroids, calcineurin inhibitors, sympathomimetics, MAOIs, erythropoietin`,
        professional: `**Primary (Essential) Hypertension** - Pathophysiological mechanisms:

1. Hemodynamic patterns:
   - "Volume" type: High cardiac output, normal PVR; salt-sensitive, common in obesity, CKD, elderly, African descent
   - "Resistance" type: Normal CO, high PVR; salt-resistant, related to vascular remodeling
   - Mixed pattern: Most common in established hypertension

2. Genetic architecture:
   - Polygenic with >1000 associated loci identified in GWAS
   - Heritability estimates 30-50%
   - Key pathways: RAAS (ACE, AGT, AGTR1), natriuretic peptides (NPPA, NPR3), endothelial function (NOS3, EDN1), adrenergic signaling (ADRB1, ADRB2), sodium handling (NEDD4L, UMOD, SLC4A5)
   - Rare monogenic forms: Liddle syndrome (SCNN1B/G), Gordon syndrome (WNK1/4), apparent mineralocorticoid excess (HSD11B2), glucocorticoid-remediable aldosteronism (CYP11B1/B2 chimeric)

3. Environmental determinants:
   - Sodium intake: DASH-Sodium trial showed dose-response; optimal <1500 mg/day, limit <2300 mg/day
   - Potassium: DASH diet rich in potassium blunts sodium effect
   - Obesity: Adipose tissue secretes leptin (SNS activation), resistin, inflammatory cytokines; physical compression of kidneys; hyperinsulinemia; increased renal sodium reabsorption
   - Alcohol: U-shaped relationship; mechanism includes cortisol, norepinephrine, RAAS activation
   - Sympathetic nervous system: Increased muscle sympathetic nerve activity in obesity, OSA, chronic stress

**Secondary Hypertension - Detailed Evaluation**

Screening indications: Age <30 years, abrupt onset, severe/resistant HTN, new-onset HTN in older adult (>55), hypokalemia (spontaneous or diuretic-induced), abdominal bruit, elevated creatinine with ACE-I, family history of kidney disease or early stroke, episodic symptoms suggesting pheochromocytoma.

Renovascular hypertension:
- Atherosclerotic: >90% of cases; >50% stenosis hemodynamically significant; fibromuscular dysplasia in younger women
- Diagnosis: CTA/MRA (gold standard), captopril renography (less used), duplex ultrasound
- Treatment: ACE-I/ARB first-line (monitor creatinine), revascularization for flash pulmonary edema, refractory HTN, declining kidney function

Primary aldosteronism:
- Prevalence: 5-10% of all hypertensives, up to 20% of resistant HTN
- Screen with aldosterone-renin ratio (ARR): aldosterone (ng/dL) / PRA (ng/mL/hr) >20 with aldosterone >15 ng/dL (or >10 with newer assays)
- Confirm with salt loading test or fludrocortisone suppression
- Subtype differentiation: Adrenal CT, adrenal vein sampling (gold standard) if surgery candidate
- Treatment: Unilateral adrenalectomy for APA, MRAs (spironolactone, eplerenone) for IHA

Obstructive sleep apnea:
- Strong association with resistant HTN, non-dipping pattern
- Mechanisms: Intermittent hypoxia leads to chemoreceptor activation leads to sustained SNS activation; oxidative stress; endothelial dysfunction; RAAS activation
- Treatment: CPAP reduces BP ~2-3 mmHg, greater in resistant HTN`,
      },
    },
    {
      title: 'Pathophysiology',
      content: {
        patient: `Hypertension develops through several interconnected mechanisms:

**RAAS (Renin-Angiotensin-Aldosterone System)**: This is a hormone system that regulates blood pressure. When blood pressure drops, kidneys release renin, which triggers a chain reaction producing angiotensin II. This chemical constricts blood vessels and tells the adrenal glands to release aldosterone, which causes the kidneys to hold onto salt and water. In hypertension, this system becomes overactive.

**Sympathetic Nervous System**: This is your body's "fight or flight" system. In chronic hypertension, it stays partially activated even when you are resting, causing blood vessels to constrict and the heart to beat faster and harder.

**Endothelial Dysfunction**: The endothelium is the lining of your blood vessels. It normally produces chemicals that help vessels relax. In hypertension, this lining does not work properly, so blood vessels stay too tight.

**Sodium Handling**: Your kidneys normally regulate sodium precisely. In some people with hypertension, kidneys hold onto too much sodium, which pulls water into blood vessels, increasing blood volume and pressure.

Over time, these factors cause blood vessels to become stiff and thickened, making blood pressure harder to control.`,
        intermediate: `**Pathophysiological Mechanisms in Hypertension:**

**1. Renin-Angiotensin-Aldosterone System (RAAS)**
The RAAS is a critical regulator of blood pressure and volume status:
- Renin (from juxtaglomerular cells) converts angiotensinogen to angiotensin I
- ACE (primarily pulmonary endothelium) converts Ang I to Ang II
- Ang II effects: potent vasoconstriction (AT1 receptors), aldosterone release, SNS activation, vascular remodeling, renal sodium retention, antidiuretic hormone release
- Aldosterone: epithelial sodium channel activation leads to Na+/water retention, K+ excretion; non-epithelial effects include vascular fibrosis and remodeling
- Inappropriate RAAS activation contributes to volume expansion and vasoconstriction
- ACE2/Ang-(1-7)/Mas receptor axis provides counter-regulatory vasodilation but is downregulated in HTN

**2. Sympathetic Nervous System (SNS)**
Chronic SNS overactivity characterizes essential hypertension:
- Increased norepinephrine release from sympathetic nerve terminals
- Enhanced cardiovascular reactivity to stress
- Renal sympathetic activation increases renin release and tubular sodium reabsorption
- Mechanisms: baroreceptor resetting at higher pressures, increased chemoreceptor sensitivity (especially with OSA), leptin-mediated activation from obesity, stress, chronic pain
- Direct neural recordings show elevated muscle sympathetic nerve activity (MSNA) in hypertensive patients

**3. Endothelial Dysfunction**
The endothelium normally maintains vascular homeostasis through:
- Nitric oxide (NO): vasodilation, antiproliferative, antithrombotic; reduced bioavailability in HTN due to oxidative stress, eNOS uncoupling
- Endothelin-1: potent vasoconstrictor; increased in HTN
- Prostacyclin: vasodilation and platelet inhibition
- Endothelium-dependent vasodilation is impaired in hypertension, contributing to increased peripheral resistance

**4. Renal Sodium Handling**
Abnormal pressure-natriuresis relationship:
- Kidneys require higher arterial pressure to excrete given sodium load
- Mechanisms: increased Na+-K+-ATPase activity, enhanced Na+/H+ exchanger, overactive epithelial sodium channels (ENaC)
- Salt-sensitive hypertension: exaggerated BP response to dietary sodium; more common in African Americans, elderly, diabetics, CKD
- Genes affecting sodium transport: NEDD4L, UMOD, SLC4A5 variants associated with HTN

**5. Vascular Remodeling**
Structural changes in resistance arteries:
- Eutrophic remodeling: rearrangement of smooth muscle cells around smaller lumen (no change in cell mass)
- Hypertrophic remodeling: increased wall thickness, wall-to-lumen ratio
- Rarefaction: reduced capillary density
- Increased stiffness from collagen deposition and elastin fragmentation
- Matrix metalloproteinases (MMPs) and tissue inhibitors (TIMPs) regulate extracellular matrix remodeling`,
        professional: `**Advanced Pathophysiology of Hypertension**

**RAAS Molecular Biology:**
Renin secretion regulated by: (1) juxtaglomerular apparatus baroreceptors (afferent arteriole stretch), (2) macula densa NaCl delivery (tubuloglomerular feedback), (3) SNS beta1 stimulation, (4) negative feedback from Ang II. Prorenin receptors (PRR) on vascular smooth muscle contribute to local Ang II generation and TGF-beta signaling independent of renin enzymatic activity.

Angiotensin II signaling via AT1 receptors: Gq/11 coupling leads to PLC activation leads to IP3/DAG leads to Ca2+ release/PKC activation leads to vasoconstriction, growth, proliferation. AT1 receptor activation also stimulates NADPH oxidase leads to superoxide production leads to oxidative stress, endothelial dysfunction, and vascular inflammation. Transactivation of receptor tyrosine kinases (EGFR, PDGFR, IGF-1R) mediates growth effects.

Aldosterone effects beyond epithelia: Genomic effects via mineralocorticoid receptors (MR) in vascular smooth muscle, cardiomyocytes, brain; non-genomic effects via membrane receptors. MR activation promotes inflammation, fibrosis (TGF-beta, collagen synthesis), and endothelial dysfunction. "Apparent mineralocorticoid excess" from cortisol occurs when 11beta-HSD2 (converts cortisol to cortisone) is inhibited by glycyrrhizin (licorice) or congenitally deficient.

**Neurogenic Mechanisms:**
Chronically elevated SNS activity involves central mechanisms:
- Impaired baroreflex sensitivity: Resetting to higher pressure, reduced gain
- Enhanced chemoreceptor reflex: Exaggerated response to hypoxia/hypercapnia in OSA
- Leptin-melanocortin pathway: Obesity leads to elevated leptin leads to POMC neurons leads to MC4R leads to increased SNS outflow despite leptin resistance at appetite centers
- Brain renin-angiotensin system: AT1 receptors in circumventricular organs (OVLT, SFO) regulate sympathetic outflow
- Renal afferent signaling: Ischemic kidney increases afferent nerve traffic to central SNS centers

Renal denervation interrupts both efferent sympathetic and afferent sensory fibers. Clinical trials (SPYRAL HTN-ON MED, RADIANCE-HTN SOLO) show modest BP reduction (~5-10 mmHg) in selected patients.

**Endothelial Mechanisms:**
eNOS regulation: Shear stress activates PI3K-Akt leads to eNOS Ser1177 phosphorylation leads to NO production. BH4 (tetrahydrobiopterin) is essential cofactor; oxidation to BH3 radical leads to eNOS uncoupling leads to superoxide instead of NO. ADMA (asymmetric dimethylarginine), endogenous NOS inhibitor, elevated in HTN, CKD, hypercholesterolemia.

Oxidative stress in HTN: NADPH oxidase (NOX1, NOX2, NOX4 isoforms) is major source of vascular superoxide. Superoxide reacts rapidly with NO to form peroxynitrite (ONOO-), reducing NO bioavailability and causing protein nitration damage. Mitochondrial dysfunction contributes ROS. Antioxidant defenses (SOD, catalase, glutathione peroxidase) overwhelmed.

**Vascular Biology:**
Myogenic tone: Bayliss effect - arterial smooth muscle contracts in response to increased transmural pressure, contributing to autoregulation. Enhanced myogenic responses in hypertensive resistance arteries.

Vascular remodeling molecular mechanisms: Hemodynamic forces (shear stress, cyclic strain) activate mechanotransduction pathways. Integrins connect extracellular matrix to cytoskeleton, transmitting forces. Focal adhesion kinase (FAK), RhoA/ROCK pathway, and MAPK signaling mediate smooth muscle migration and proliferation. TGF-beta signaling promotes collagen deposition and fibrosis.

Arterial stiffness: Pulse wave velocity increases with age and HTN. Elastin fragmentation and collagen deposition in media. Advanced glycation end-products (AGEs) cross-link collagen. Stiff arteries cause premature return of reflected pressure wave in systole (augmentation index), increasing cardiac workload and reducing coronary perfusion.

**Immune Mechanisms:**
T cells, particularly CD8+ and Th17, infiltrate perivascular adipose tissue and adventitia in HTN. Ang II stimulates immune cells directly via AT1 receptors. Cytokines (IL-6, IL-17, TNF-alpha) promote vascular dysfunction and renal injury. Oxidative stress activates inflammasomes (NLRP3) leads to IL-1beta, IL-18 release. Regulatory T cells (Tregs) are protective; their dysfunction contributes to HTN. Experimental immunosuppression attenuates Ang II-induced HTN.`,
      },
    },
    {
      title: 'End Organ Damage',
      content: {
        patient: `Untreated or poorly controlled hypertension damages blood vessels throughout the body, leading to serious complications:

**Heart**: High blood pressure makes the heart work harder. Over time, the heart muscle thickens (left ventricular hypertrophy) and may weaken. This can lead to heart failure, coronary artery disease, and arrhythmias. Hypertension is a leading cause of heart failure.

**Brain**: High blood pressure damages brain blood vessels, increasing risk of stroke (both ischemic - blocked artery, and hemorrhagic - bleeding). It also contributes to dementia, particularly vascular dementia and may accelerate Alzheimer's disease.

**Kidneys**: The kidney's small blood vessels are damaged, reducing their ability to filter waste. This can lead to chronic kidney disease and eventually kidney failure requiring dialysis or transplant. Kidney disease can also make blood pressure harder to control.

**Eyes**: Hypertension damages retinal blood vessels, causing hypertensive retinopathy. Severe cases can cause vision loss. Changes in the back of the eye can indicate how long and how severe hypertension has been.

**Blood Vessels**: Chronic high pressure causes atherosclerosis (hardening and narrowing of arteries) throughout the body, including peripheral artery disease affecting legs, and increases risk of aortic aneurysm and dissection.`,
        intermediate: `**Cardiovascular Target Organ Damage:**

**Heart:**
- Left ventricular hypertrophy (LVH): Most common manifestation; concentric pattern (increased wall thickness) in pressure overload; detected by ECG (Sokolow-Lyon voltage criteria, Cornell criteria) or echocardiography (LV mass index >115 g/m2 men, >95 g/m2 women). LVH is independent risk factor for CAD, HF, arrhythmias, sudden death.
- Heart failure: HTN leading cause of HFpEF; contributes to HFrEF through increased afterload, LV remodeling, ischemia. Pathophysiology: chronic pressure overload leads to concentric hypertrophy leads to diastolic dysfunction leads to elevated filling pressures leads to pulmonary congestion.
- Coronary artery disease: HTN accelerates atherosclerosis, is independent risk factor for MI. Mechanisms: endothelial dysfunction, increased wall stress, inflammation.
- Atrial fibrillation: HTN increases risk 1.5-2 fold through LA enlargement, fibrosis, diastolic dysfunction.

**Cerebrovascular:**
- Stroke: HTN strongest modifiable risk factor; accounts for ~50% of stroke risk. Risk increases continuously across BP range. Mechanisms: accelerated atherosclerosis (large vessels), lipohyalinosis (small vessel disease), microaneurysm formation (Charcot-Bouchard), increased risk of atrial fibrillation leads to cardioembolic stroke.
- Lacunar infarcts: Small deep infarcts from lipohyalinosis of penetrating arteries; associated with chronic HTN.
- Intracerebral hemorrhage: HTN most common cause (50-70%); typically basal ganglia, thalamus, pons, cerebellum from rupture of microaneurysms.
- Vascular cognitive impairment: Chronic small vessel ischemia leads to white matter hyperintensities, lacunes, brain atrophy; contributes to vascular dementia and mixed dementia.

**Kidney:**
- Hypertensive nephrosclerosis: Chronic changes include glomerulosclerosis, tubular atrophy, interstitial fibrosis, arteriolar hyalinosis. Pathology: intimal thickening and hyaline change in afferent arterioles leads to glomerular ischemia leads to global sclerosis.
- Chronic kidney disease: HTN both cause and consequence of CKD. GFR decline accelerates with poor BP control. Threshold for renal protection <130/80 in diabetes, <140/90 general population per KDOQI.
- Proteinuria: Marker of glomerular damage; both cause and effect of renal injury. ACE-I/ARB reduce proteinuria independent of BP.

**Eye (Hypertensive Retinopathy):**
- Keith-Wagener-Barker classification (modified):
  - Grade 1: Arteriolar narrowing, tortuosity
  - Grade 2: Arteriovenous nicking (nipping)
  - Grade 3: Grade 2 + hemorrhages, exudates, cotton-wool spots
  - Grade 4: Grade 3 + papilledema (malignant HTN)
- Simplified Scheie classification: Groups retinopathy and arteriosclerotic changes separately
- Chronic HTN: AV nicking, copper/silver wiring (light reflex from thickened arteriolar walls)
- Malignant/accelerated HTN: Hemorrhages, cotton-wool spots, hard exudates (macular star), papilledema

**Peripheral Arteries:**
- Atherosclerotic disease: Lower extremity PAD, renal artery stenosis, mesenteric ischemia
- Aortic disease: Aneurysm formation (atherosclerotic), aortic dissection (weakened media from chronic pressure stress)`,
        professional: `**Detailed End-Organ Pathology and Clinical Implications**

**Cardiac Manifestations:**

Left ventricular hypertrophy pathophysiology: Pressure overload induces myocyte hypertrophy (increased protein synthesis, sarcomere addition in parallel), increased wall thickness reduces wall stress per Laplace law (stress = pressure x radius / 2 x thickness). However, hypertrophy is maladaptive: reduced capillary density relative to mass, interstitial fibrosis, impaired relaxation, increased oxygen demand, supply-demand mismatch leads to subendocardial ischemia.

LVH regression with antihypertensive therapy: ACE-I and ARB most effective; regression associated with improved outcomes independent of BP reduction. Losartan Intervention for Endpoint Reduction (LIFE) study showed LVH regression predicted reduced CV events.

Heart failure with preserved ejection fraction (HFpEF): HTN is primary risk factor (60-70% of HFpEF patients have HTN). Pathophysiology: concentric LVH leads to increased LV stiffness (beta-stiffness coefficient), impaired relaxation (tau, time constant of relaxation), elevated filling pressures, LA enlargement, pulmonary hypertension. Diastolic dysfunction precedes symptoms by years.

**Cerebrovascular Disease:**

Small vessel disease (SVD) pathology: Lipohyalinosis of penetrating arterioles (100-800 micrometers) - hyaline thickening, fibrinoid necrosis, vessel tortuosity. Leads to lacunar infarcts, white matter lesions (leukoaraiosis), cerebral microbleeds, enlarged perivascular spaces. SVD accounts for 25% of ischemic strokes and most spontaneous intracerebral hemorrhages.

White matter hyperintensities on MRI: Reflect chronic ischemia from small vessel disease. Associated with cognitive decline, gait disturbance, depression. Progression slowed by BP control (PROGRESS trial).

Cognitive impairment: Vascular dementia risk increases with duration and severity of HTN. Midlife HTN particularly important for later dementia risk. SPRINT MIND substudy showed intensive BP control reduced mild cognitive impairment and probable dementia (HR 0.81).

**Kidney Pathology:**

Hypertensive nephrosclerosis histology:
- Arterioles: Hyaline arteriolosclerosis (plasma protein insudation), myointimal hyperplasia (onion-skinning in malignant HTN)
- Interlobular arteries: Fibroelastic intimal thickening, reduplication of elastic lamina
- Glomeruli: Ischemic global sclerosis (collapsing capillaries, wrinkled basement membranes), focal segmental glomerulosclerosis pattern in severe cases
- Tubulointerstitium: Tubular atrophy, interstitial fibrosis proportional to vascular/glomerular damage

Focal segmental glomerulosclerosis secondary to nephrosclerosis: Particularly in African Americans with APOL1 high-risk variants (G1/G2). May present with heavy proteinuria, rapid progression.

**Retinal Changes:**

Pathophysiology of AV nicking: Arteriosclerotic arteriole compresses venule at crossing point; shared adventitia leads to venous displacement and nicking appearance. Copper wiring (early) and silver wiring (late) reflect increased wall thickness changing light reflex.

Malignant (accelerated) hypertension: Characterized by fibrinoid necrosis of arterioles, endothelial damage. Funduscopic findings reflect ischemia (cotton-wool spots), blood-retinal barrier breakdown (hemorrhages, hard exudates), optic nerve ischemia (papilledema). Ophthalmic emergency requiring immediate BP reduction.

**Aortic Disease:**

Aortic dissection: HTN present in 70-80% of cases. Chronic elevated pressure degenerates aortic media (cystic medial necrosis), especially with age. Shear stress at points of maximal hydraulic stress (sinus of Valsalva, isthmus) predisposes to intimal tear. Stanford Type A (proximal) and Type B (distal) classification.

Thoracic aortic aneurysm: HTN major risk factor; 5x increased risk with uncontrolled HTN. Growth rate proportional to diameter and pressure. Elective repair at 5.5 cm ascending, 6.0-6.5 cm descending.

**Peripheral Artery Disease:**
Chronic HTN accelerates atherosclerosis in lower extremities. Ankle-brachial index (ABI) <0.9 indicates PAD. HTN control reduces progression and cardiovascular events, though effect on claudication symptoms less than with lipid management.`,
      },
    },
    {
      title: 'Diagnosis and Workup',
      content: {
        patient: `**How Blood Pressure is Measured:**

Your blood pressure should be measured while seated, with your back supported and feet flat on the floor. Your arm should rest at heart level. The blood pressure cuff should fit properly - too small or too large can give incorrect readings.

The doctor or nurse should take at least two readings, 1-2 minutes apart, and average them. For a new diagnosis, they should confirm with readings on at least two separate visits.

**Home Blood Pressure Monitoring:**
Your doctor may recommend checking your blood pressure at home. This can:
- Confirm you actually have high blood pressure (some people are nervous at the doctor's office)
- Monitor how well treatment is working
- Check for white coat hypertension (high only at doctor's office) or masked hypertension (normal at office but high at home)

Use a validated automatic upper arm cuff monitor. Take two readings in the morning and two in the evening for 7 days, discarding the first day, then average the rest.

**Ambulatory Blood Pressure Monitoring (ABPM):**
This test uses a portable device that measures your blood pressure every 15-30 minutes over 24 hours while you go about your normal activities. It can:
- Confirm the diagnosis
- Check for dipping (normal blood pressure drop at night)
- Identify white coat or masked hypertension

**Additional Testing:**
Your doctor will order tests to check for target organ damage and secondary causes:
- Blood tests: Kidney function, electrolytes, cholesterol, blood sugar, thyroid
- Urine test: Check for protein (kidney damage)
- ECG: Check for heart enlargement or previous heart attack
- Echocardiogram: Sometimes needed to assess heart function and thickness
- Eye exam: Check for retinal changes`,
        intermediate: `**Diagnostic Evaluation of Hypertension:**

**Blood Pressure Measurement Technique:**
Proper technique is essential for accurate diagnosis:
- Patient preparation: 5 minutes seated rest, avoid caffeine/exercise/smoking 30 minutes prior, empty bladder
- Position: Seated with back supported, feet flat on floor, legs uncrossed
- Arm: Supported at heart level, bare arm (no clothing under cuff)
- Cuff: Bladder width 40% of arm circumference, length 80-100% of arm circumference; too small overestimates, too large underestimates BP
- Device: Validated automated oscillometric device preferred; manual auscultation acceptable
- Multiple readings: At least two measurements 1-2 minutes apart, average them
- Both arms: Measure initially; use arm with higher pressure for subsequent readings
- Orthostatic measurements: Check sitting and standing (1-3 min) in elderly, diabetics, those with symptoms suggestive of orthostatic hypotension

**Office Blood Pressure Thresholds:**
- Normal: <120/<80 mmHg
- Elevated/Stage 1: 130-139/80-89 mmHg (ACC/AHA) or 140-159/90-99 (ESC/ESH)
- Stage 2: >=140/90 (ACC/AHA) or >=160/100 (ESC/ESH)

**Out-of-Office Blood Pressure Monitoring:**

Home Blood Pressure Monitoring (HBPM):
- Protocol: Two readings morning and evening for 7 days (discard day 1), average remaining 12 readings
- Thresholds: >=135/85 mmHg corresponds to office >=140/90 mmHg
- Advantages: Multiple readings, evaluates white coat effect, improves control by 20%, prognostic value superior to office BP
- Devices: Use validated devices (validatebp.org, stridebp.org)

Ambulatory Blood Pressure Monitoring (ABPM):
- Gold standard for confirming diagnosis
- 24-hour monitoring with readings every 15-30 minutes daytime, 30-60 minutes nighttime
- Interpretation:
  - Normal: <130/80 (24-hr), <135/85 (daytime), <120/70 (nighttime)
  - White coat HTN: Office >=140/90 but ABPM normal
  - Masked HTN: Office <140/90 but ABPM elevated
  - Non-dipping: <10% reduction in nocturnal BP (associated with increased CV risk)
  - Morning surge: Exaggerated morning BP elevation

**Baseline Evaluation:**

Laboratory testing:
- Basic metabolic panel: Creatinine/eGFR (baseline kidney function, monitor with ACE-I/ARB), electrolytes (hypokalemia suggests aldosteronism), glucose
- Lipid panel: ASCVD risk assessment
- HbA1c: Diabetes screening
- TSH: Thyroid dysfunction screening
- Urinalysis: Proteinuria, hematuria suggesting renal parenchymal disease
- Urine albumin-to-creatinine ratio: Microalbuminuria (early kidney damage marker)

Electrocardiogram:
- LVH criteria: Sokolow-Lyon (SV1 + RV5/V6 >=35 mm), Cornell (RaVL + SV3 >28 mm men, >20 mm women)
- Previous MI (Q waves), ischemia (ST-T changes), arrhythmia (AF), conduction disease

**Additional Workup:**

Echocardiography (indicated in specific situations):
- Evaluate LVH when ECG inconclusive
- Assess LV systolic/diastolic function
- Evaluate valve disease
- Assess for secondary causes (coarctation, primary aldosteronism with LVH)

Funduscopic examination:
- Grade hypertensive retinopathy
- Particularly important in severe/accelerated HTN

Secondary cause screening (when indicated):
- Renal artery duplex ultrasound, CTA/MRA for suspected renovascular disease
- Aldosterone-renin ratio for primary aldosteronism
- Polysomnography for OSA screening
- 24-hour urine catecholamines/metanephrines or plasma metanephrines for pheochromocytoma
- Dexamethasone suppression test for Cushing syndrome
- CT abdomen for adrenal masses`,
        professional: `**Comprehensive Diagnostic Approach**

**Blood Pressure Measurement Validation:**

Automated oscillometric devices measure mean arterial pressure via oscillations during cuff deflation, then estimate SBP/DBP using proprietary algorithms. Device validation is critical - many consumer devices have not been properly validated. Recommended validation protocols: AAMI/ESH/ISO Universal Standard (ISO 81060-2:2018), British Hypertension Society protocol.

Common measurement errors:
- "White coat" effect: 15-30% of patients; associated with lower CV risk than sustained HTN but higher than normotension; may warrant pharmacotherapy if high CV risk
- Masked hypertension: 10-20% prevalence; CV risk equivalent to sustained HTN; commonly seen in smokers, diabetics, CKD patients
- Measurement artifact: Cuff over clothing (+5-50 mmHg), talking (+5-20 mmHg), back unsupported (+5-15 mmHg), arm unsupported (+5-10 mmHg), legs crossed (+2-8 mmHg), full bladder (+10 mmHg)

**ABPM Interpretation:**

Blood pressure load: Percentage of readings above threshold (>140/90 daytime, >120/70 nighttime). Load >25-30% associated with increased risk even if average normal.

Circadian patterns:
- Dipper: 10-20% nocturnal reduction (normal)
- Non-dipper: <10% reduction (associated with increased CV events, CKD progression)
- Reverse dipper: Higher nocturnal than daytime BP (highest risk group, often secondary HTN)
- Extreme dipper: >20% reduction (possible J-curve concern in elderly)

Morning surge: MS defined as morning BP (2 hours after waking) minus lowest nocturnal BP. Exaggerated surge (>20-35 mmHg) associated with stroke risk independent of 24-hour BP.

**Risk Stratification:**

Total CV risk assessment recommended (ACC/AHA ASCVD Risk Calculator, SCORE2/SCORE2-OP, QRISK):
- Traditional risk factors: Age, sex, total/HDL cholesterol, smoking, diabetes, BP, statin use, aspirin use
- Additional risk enhancers: Family history premature ASCVD, chronic inflammatory disease, South Asian ancestry, CKD, elevated Lp(a), apoB/ApoA1 ratio, ABI <0.9, hs-CRP >=2 mg/L

Target organ damage markers (independent of risk scoring):
- LVH (ECG or echo)
- Albuminuria/proteinuria
- CKD (eGFR <60 or albuminuria)
- Hypertensive retinopathy (grade 3-4)
- PWV >10 m/s or ABI <0.9

**Secondary Hypertension Evaluation Protocol:**

Clinical clues prompting evaluation:
- Age at onset <30 years or >55 years (new onset)
- Severity: Stage 2 at onset, resistant HTN (uncontrolled on 3 drugs including diuretic)
- Sudden onset or worsening of previously controlled HTN
- Spontaneous or diuretic-induced hypokalemia
- Abdominal bruit
- Elevated creatinine after ACE-I/ARB initiation (bilateral renovascular disease)
- Family history of kidney disease or early stroke
- Episodic symptoms (headache, palpitations, sweating) suggesting pheochromocytoma

Renovascular hypertension:
- Duplex ultrasound: Sensitivity 60-90%, highly operator dependent; acceleration time >0.1s, resistive index <0.5 suggest significant stenosis
- CTA: Excellent sensitivity/specificity for atherosclerotic disease; contraindicated in severe CKD
- MRA: Gadolinium-enhanced MRA accurate but gadolinium contraindicated if GFR<30 (NSF risk); non-contrast techniques less sensitive
- Invasive angiography: Gold standard; digital subtraction angiography with pressure gradient measurement
- Captopril renography: Less used now; identifies functional significance

Primary aldosteronism:
- Screening ARR: Aldosterone (ng/dL) / PRA (ng/mL/hr) or aldosterone (pmol/L) / PRA (ng/mL/hr) ratio. ARR >20-40 with aldosterone >15 ng/dL suggests PA. Factors affecting ARR: K+ status (hypokalemia suppresses aldosterone), medications (ACE-I/ARB, MRAs, K+ sparing diuretics increase renin; beta-blockers, NSAIDs, central alpha-agonists decrease renin). Hold interfering medications 4-6 weeks if possible.
- Confirmatory testing: Oral salt loading (urine aldosterone >12 mcg/24hr on high salt diet), saline infusion test (aldosterone >10 ng/dL after 2L NS), fludrocortisone suppression test
- Subtype differentiation: CT adrenal (identifies >4 cm masses, guides AVS), adrenal vein sampling (lateralization essential if unilateral disease suspected and surgery considered)

Pheochromocytoma:
- Biochemical testing: 24-hour urine fractionated metanephrines (sensitivity 97-98%) or plasma free metanephrines (sensitivity 96-99%); suppressible conditions (tricyclics, phenoxybenzamine) can cause false positives
- Imaging: CT abdomen/pelvis (90% adrenal), MIBG scintigraphy (functional imaging), 68Ga-DOTATATE PET (somatostatin receptor imaging, superior to MIBG)
- Genetic testing: VHL, NF1, RET, SDHx genes in appropriate clinical scenarios

OSA screening:
- STOP-BANG questionnaire: Snoring, Tiredness, Observed apnea, Pressure HTN, BMI >35, Age >50, Neck circumference >40 cm, Male gender; score >=3 high risk
- Polysomnography: AHI >5 with symptoms or >15 without; severity mild (5-15), moderate (15-30), severe (>30)
- Home sleep apnea testing acceptable for high pre-test probability without significant comorbidities`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'heart', structureName: 'Heart', linkText: 'Heart', relevance: 'Primary target organ; LVH and heart failure complications' },
    { structureId: 'left-ventricle', structureName: 'Left Ventricle', linkText: 'Left Ventricle', relevance: 'Hypertrophy and remodeling from pressure overload' },
    { structureId: 'aorta', structureName: 'Aorta', linkText: 'Aorta', relevance: 'Central blood pressure regulation; aortic stiffness and dissection risk' },
    { structureId: 'kidneys', structureName: 'Kidneys', linkText: 'Kidneys', relevance: 'BP regulation via RAAS and sodium handling; target organ damage' },
    { structureId: 'adrenal-glands', structureName: 'Adrenal Glands', linkText: 'Adrenal Glands', relevance: 'Aldosterone production; pheochromocytoma site' },
    { structureId: 'renal-artery', structureName: 'Renal Artery', linkText: 'Renal Arteries', relevance: 'Renovascular hypertension from stenosis' },
    { structureId: 'brain', structureName: 'Brain', linkText: 'Brain', relevance: 'Stroke and encephalopathy target organ' },
    { structureId: 'retina', structureName: 'Retina', linkText: 'Retina', relevance: 'Hypertensive retinopathy assessment' },
    { structureId: 'peripheral-arteries', structureName: 'Peripheral Arteries', linkText: 'Peripheral Arteries', relevance: 'Peripheral artery disease; vascular stiffness' },
  ],
  references: [
    {
      referenceId: 'acc-aha-htn-2024',
      type: 'guideline',
      title: '2024 Hypertension Clinical Practice Guidelines',
      authors: 'Whelton PK, et al.',
      source: 'Circulation',
      year: 2024,
      citation: 'Whelton PK, et al. 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults. Circulation. 2018;138(17):e484-e594. (2024 Update)',
    },
    {
      referenceId: 'esc-esh-2023',
      type: 'guideline',
      title: '2023 ESH Guidelines for the Management of Arterial Hypertension',
      authors: 'Mancia G, et al.',
      source: 'Journal of Hypertension',
      year: 2023,
      citation: 'Mancia G, et al. 2023 ESH Guidelines for the management of arterial hypertension. J Hypertens. 2023;41(12):1874-2071.',
    },
    {
      referenceId: 'statpearls-hypertension',
      type: 'textbook',
      title: 'Hypertension',
      authors: 'Joseph A, et al.',
      source: 'NCBI StatPearls',
      year: 2024,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK539800/',
      citation: 'Joseph A, et al. Hypertension. StatPearls. NCBI; 2024.',
    },
    {
      referenceId: 'sprint-trial',
      type: 'journal-article',
      title: 'A Randomized Trial of Intensive versus Standard Blood-Pressure Control',
      authors: 'Wright JT Jr, et al.',
      source: 'New England Journal of Medicine',
      year: 2015,
      citation: 'SPRINT Research Group. A randomized trial of intensive versus standard blood-pressure control. N Engl J Med. 2015;373(22):2103-2116.',
    },
    {
      referenceId: 'pathway-2-trial',
      type: 'journal-article',
      title: 'Spironolactone versus placebo, bisoprolol, and doxazosin to determine the optimal treatment for drug-resistant hypertension',
      authors: 'Williams B, et al.',
      source: 'The Lancet',
      year: 2015,
      citation: 'Williams B, et al. Spironolactone versus placebo, bisoprolol, and doxazosin to determine the optimal treatment for drug-resistant hypertension (PATHWAY-2): a randomised, double-blind, crossover trial. Lancet. 2015;386(10008):2059-2068.',
    },
    {
      referenceId: 'allhat-trial',
      type: 'journal-article',
      title: 'Major outcomes in high-risk hypertensive patients randomized to angiotensin-converting enzyme inhibitor or calcium channel blocker vs diuretic',
      authors: 'ALLHAT Officers and Coordinators',
      source: 'JAMA',
      year: 2002,
      citation: 'ALLHAT Officers and Coordinators. Major outcomes in high-risk hypertensive patients randomized to angiotensin-converting enzyme inhibitor or calcium channel blocker vs diuretic. JAMA. 2002;288(23):2981-2997.',
    },
    {
      referenceId: 'hyvet-trial',
      type: 'journal-article',
      title: 'Treatment of hypertension in patients 80 years of age or older',
      authors: 'Beckett NS, et al.',
      source: 'New England Journal of Medicine',
      year: 2008,
      citation: 'Beckett NS, et al. Treatment of hypertension in patients 80 years of age or older. N Engl J Med. 2008;358(18):1887-1898.',
    },
    {
      referenceId: 'acog-htn-pregnancy',
      type: 'guideline',
      title: 'ACOG Practice Bulletin: Gestational Hypertension and Preeclampsia',
      authors: 'American College of Obstetricians and Gynecologists',
      source: 'Obstetrics and Gynecology',
      year: 2020,
      citation: 'Gestational Hypertension and Preeclampsia: ACOG Practice Bulletin, Number 222. Obstet Gynecol. 2020;135(6):e237-e260.',
    },
  ],
  relatedEntries: [
    { entryId: 'heart-failure', entryType: 'condition', name: 'Heart Failure', relationship: 'causes' },
    { entryId: 'coronary-artery-disease', entryType: 'condition', name: 'Coronary Artery Disease', relationship: 'causes' },
    { entryId: 'stroke', entryType: 'condition', name: 'Stroke', relationship: 'causes' },
    { entryId: 'chronic-kidney-disease', entryType: 'condition', name: 'Chronic Kidney Disease', relationship: 'causes' },
    { entryId: 'cardiovascular-physiology', entryType: 'physiology', name: 'Cardiovascular Physiology', relationship: 'related-to' },
    { entryId: 'blood-vessels', entryType: 'anatomy', name: 'Blood Vessels', relationship: 'part-of' },
    { entryId: 'left-ventricle', entryType: 'anatomy', name: 'Left Ventricle', relationship: 'part-of' },
    { entryId: 'kidneys', entryType: 'anatomy', name: 'Kidneys', relationship: 'part-of' },
    { entryId: 'renal-artery', entryType: 'anatomy', name: 'Renal Artery', relationship: 'part-of' },
    { entryId: 'adrenal-glands', entryType: 'anatomy', name: 'Adrenal Glands', relationship: 'part-of' },
    { entryId: 'brain', entryType: 'anatomy', name: 'Brain', relationship: 'part-of' },
    { entryId: 'primary-aldosteronism', entryType: 'condition', name: 'Primary Aldosteronism', relationship: 'causes' },
    { entryId: 'pheochromocytoma', entryType: 'condition', name: 'Pheochromocytoma', relationship: 'causes' },
    { entryId: 'obstructive-sleep-apnea', entryType: 'condition', name: 'Obstructive Sleep Apnea', relationship: 'causes' },
  ],
  searchMetadata: {
    primaryKeywords: ['hypertension', 'high blood pressure', 'HTN', 'arterial hypertension', 'systemic hypertension', 'blood pressure elevation'],
    secondaryKeywords: ['BP control', 'antihypertensive', 'thiazide', 'ACE inhibitor', 'ARB', 'calcium channel blocker', 'beta blocker', 'resistant hypertension'],
    synonyms: ['high blood pressure', 'elevated blood pressure', 'BP', 'HTN', 'arterial hypertension', 'systemic hypertension', 'essential hypertension', 'primary hypertension'],
    abbreviations: ['HTN', 'BP', 'SBP', 'DBP', 'ACE-I', 'ARB', 'CCB', 'RAAS', 'LVH', 'CKD', 'CAD'],
    icdCodes: ['I10', 'I11', 'I12', 'I13', 'I15', 'I16', 'O10', 'O11', 'O13', 'O14', 'O15'],
    meshTerms: ['Hypertension', 'Blood Pressure', 'Antihypertensive Agents', 'Hypertensive Emergency', 'Secondary Hypertension'],
    tags: ['cardiology', 'cardiovascular', 'vascular disease', 'chronic disease', 'emergency medicine', 'primary care', 'nephrology', 'obstetrics'],
    searchBoost: 1.2,
  },
  clinicalImportance: 'essential',
  reviewStatus: 'approved',
  version: '1.0.0',
  lastUpdated: '2026-02-02',
  author: 'SOMA Medical Encyclopedia',
};


// ═══════════════════════════════════════════════════════════════════════════════
// LIFESTYLE MODIFICATIONS ENTRY
// ═══════════════════════════════════════════════════════════════════════════════

export const hypertensionLifestyleEntry: EncyclopediaEntry = {
  entryId: 'hypertension-lifestyle',
  name: 'Lifestyle Modifications for Hypertension',
  aliases: ['DASH diet', 'dietary approaches to stop hypertension', 'non-pharmacological hypertension treatment'],
  entryType: 'condition',
  category: 'cardiovascular',
  subcategory: 'lifestyle-medicine',
  summary: 'Non-pharmacological interventions including dietary modifications, weight management, physical activity, and behavioral changes for blood pressure control.',
  overview: {
    patient: 'Lifestyle changes are the foundation of blood pressure management and may be all that is needed for Stage 1 hypertension or elevated blood pressure. Key changes include: losing weight if overweight, following the DASH diet rich in fruits and vegetables, reducing sodium intake, increasing potassium through foods, getting regular physical activity, limiting alcohol, quitting smoking, and managing stress. These changes can lower blood pressure by 5-20 mmHg and significantly reduce your risk of heart disease and stroke. Even small changes make a difference.',
    intermediate: 'Lifestyle modification is first-line therapy for all patients with hypertension or elevated blood pressure. The DASH diet, sodium restriction, weight loss, and regular physical activity have the strongest evidence base. The DASH diet emphasizes fruits (4-5 servings/day), vegetables (4-5 servings/day), whole grains, low-fat dairy, and lean proteins while limiting sodium, sweets, and red meat. Sodium reduction to <2300 mg/day (ideally <1500 mg/day) provides additional benefit. Weight loss of 10 kg can reduce SBP by 5-20 mmHg. Regular aerobic exercise (150 minutes/week moderate intensity) reduces SBP by 4-9 mmHg. Combined interventions can achieve reductions comparable to single-drug therapy.',
    professional: 'Non-pharmacological interventions form the foundation of hypertension management and are indicated for all patients regardless of medication requirements. Evidence-based interventions include: (1) Dietary Approaches to Stop Hypertension (DASH) - rich in fruits, vegetables, whole grains, low-fat dairy; reduces SBP 8-14 mmHg; (2) Sodium restriction - optimal <1500 mg/day, reduces SBP 2-8 mmHg; effect enhanced in salt-sensitive individuals; (3) Weight management - each 1 kg loss reduces SBP ~1 mmHg; 10 kg loss reduces SBP 5-20 mmHg; (4) Physical activity - 150 min/week moderate aerobic exercise reduces SBP 4-9 mmHg; isometric exercise (handgrip) shows promise with ~10 mmHg reduction; (5) Alcohol limitation - </=2 drinks/day men, </=1 drink/day women; (6) Potassium supplementation - 3500-5000 mg/day through diet reduces SBP 3-5 mmHg; (7) Smoking cessation; (8) Stress management. Implementation requires addressing social determinants of health and individual barriers to adherence.',
  },
  content: [
    {
      title: 'Dietary Interventions',
      content: {
        patient: `**The DASH Diet** (Dietary Approaches to Stop Hypertension):
This eating plan is proven to lower blood pressure. It includes:
- Fruits: 4-5 servings per day (bananas, berries, oranges, apples)
- Vegetables: 4-5 servings per day (leafy greens, broccoli, carrots)
- Whole grains: 6-8 servings per day (brown rice, oatmeal, whole wheat bread)
- Low-fat dairy: 2-3 servings per day (yogurt, milk)
- Lean proteins: Fish, poultry, beans, nuts
- Limit: Red meat, sweets, sugary drinks

**Reduce Sodium:**
- Aim for less than 2,300 mg per day, ideally 1,500 mg or less
- Cook at home more often
- Read food labels and choose low-sodium options
- Avoid processed foods, canned soups, deli meats
- Rinse canned vegetables and beans
- Use herbs and spices instead of salt

**Increase Potassium:**
Potassium helps lower blood pressure by balancing sodium. Good sources include:
- Sweet potatoes, white potatoes
- Bananas, oranges, cantaloupe
- Spinach, tomatoes
- Beans and lentils
- Yogurt
- Fish

Get potassium from foods, not supplements (unless your doctor approves).`,
        intermediate: `**Dietary Approaches to Stop Hypertension (DASH):**

The DASH diet is the most studied dietary pattern for hypertension:
- Fruits: 4-5 servings/day
- Vegetables: 4-5 servings/day
- Whole grains: 6-8 servings/day
- Low-fat dairy: 2-3 servings/day
- Lean meats, poultry, fish: </=6 oz/day
- Nuts, seeds, legumes: 4-5 servings/week
- Sweets: </=5 servings/week
- Fats and oils: 2-3 servings/day

Original DASH trial (NEJM 1997): SBP reduction 11.4 mmHg (hypertensive patients), 5.5 mmHg (normotensive) without sodium restriction.

**Sodium Restriction:**
DASH-Sodium trial showed dose-response relationship:
- Low sodium (1,500 mg/day) vs. high sodium (3,300 mg/day): Additional 6-8 mmHg SBP reduction
- Effect greatest in African Americans, older adults, and those with baseline HTN
- Achieved by eliminating processed foods, restaurant meals, and added salt

**Potassium Intake:**
- Target: 3,500-5,000 mg/day through dietary sources
- Mechanisms: Natriuresis, improved endothelial function, reduced SNS activity
- High potassium foods: Sweet potato (542 mg), white beans (595 mg), yogurt (380 mg), halibut (490 mg), banana (422 mg)
- Caution: Avoid supplements and excessive dietary potassium if CKD or on ACE-I/ARB/MRA

**Mediterranean Diet:**
PREDIMED trial showed CV event reduction. Components include olive oil, nuts, fish, vegetables, whole grains. May provide additional benefit beyond BP lowering.`,
        professional: `**Evidence-Based Dietary Interventions**

**DASH Diet Mechanisms:**
High intake of potassium (4.7 g/day), magnesium (500 mg/day), calcium (1,240 mg/day), fiber (30 g/day), and protein (18% calories). Reduced saturated fat (6% calories) and cholesterol (150 mg/day). The blood pressure lowering effect is multifactorial: increased potassium and magnesium promote natriuresis and vasodilation; increased calcium may improve vascular smooth muscle function; reduced saturated fat improves endothelial function; increased fiber and protein increase satiety and support weight management.

OmniHeart trial modified DASH by substituting protein (25% calories) or unsaturated fat (27% calories) for carbohydrate (48% calories). Both modifications achieved additional SBP reduction (~1-2 mmHg) compared to standard DASH, suggesting carbohydrate reduction may provide marginal benefit.

**Sodium Sensitivity:**
Phenotypic classification based on BP response to Na+ loading. Salt-sensitive individuals show >5-10 mmHg SBP increase from low (<50 mEq/day) to high (>200 mEq/day) sodium. Prevalence: 30-50% of hypertensives; higher in African Americans (70%), elderly (60%), diabetics, CKD patients.

Mechanisms of salt sensitivity: impaired pressure-natriuresis curve, enhanced SNS/RAAS activation with salt loading, reduced nitric oxide bioavailability, endothelial dysfunction. Genetic factors: NEDD4L, UMOD, SLC4A5 variants associated with salt-sensitive BP phenotypes.

**Time-Restricted Eating:**
Emerging evidence for intermittent fasting and time-restricted eating (e.g., 8-hour eating window) showing modest BP benefits through weight loss and metabolic improvement. Limited long-term outcome data.

**Implementation Strategies:**
- Referral to registered dietitian: Individualized counseling improves adherence
- Group-based programs: Community DASH education programs effective
- Mobile health: Apps for dietary tracking, sodium counting, recipe suggestions
- Policy approaches: Food labeling, sodium reduction in processed foods, food subsidies for healthy options

**Barriers to Implementation:**
- Food deserts and limited access to fresh produce
- Cost of healthy foods vs. processed alternatives
- Cultural food preferences and practices
- Time constraints for meal preparation
- Limited health literacy
- Social determinants of health require systematic approaches beyond individual counseling`,
      },
    },
    {
      title: 'Physical Activity and Weight Management',
      content: {
        patient: `**Physical Activity:**
Aim for at least 150 minutes of moderate aerobic activity per week (like brisk walking) or 75 minutes of vigorous activity. Add muscle-strengthening exercises twice weekly.

Tips to get started:
- Start slowly and build up gradually
- Find activities you enjoy
- Break exercise into 10-minute chunks if needed
- Walking, swimming, cycling, and dancing all count
- Take stairs instead of elevator
- Park farther away and walk

**Weight Loss:**
If you are overweight, losing even 5-10% of your body weight can significantly lower blood pressure.
- Aim for gradual weight loss (1-2 pounds per week)
- Combine reduced calories with increased activity
- Even modest weight loss makes a difference
- Set realistic goals and track progress

Losing weight also reduces your risk of diabetes, sleep apnea, and joint problems.`,
        intermediate: `**Exercise Prescription:**

Current recommendations:
- Aerobic: 150 min/week moderate intensity (50-70% HRmax) OR 75 min/week vigorous intensity (70-85% HRmax)
- Resistance: 2-3 sessions/week, 8-10 exercises, 1-3 sets of 10-15 repetitions
- Flexibility: 2-3 days/week stretching

**Aerobic Exercise Effects:**
- Acute (post-exercise hypotension): 5-7 mmHg reduction lasting 4-10 hours
- Chronic training: 4-9 mmHg SBP reduction in hypertensives
- Mechanisms: Decreased SNS tone, improved baroreflex sensitivity, enhanced endothelial NO production, reduced peripheral resistance, improved arterial compliance, weight loss

**Isometric Exercise:**
Handgrip training shows particular promise:
- Protocol: 4 x 2-minute contractions at 30-40% maximal voluntary contraction, 1-minute rest, 3x/week for 8-12 weeks
- Meta-analysis shows BP reduction ~10/6 mmHg
- Mechanisms: Improved autonomic balance, enhanced arterial function
- Practical advantages: Low cost, portable, time-efficient

**Weight Management:**
- Target: BMI 18.5-24.9 kg/m2; waist circumference <40 inches men, <35 inches women
- Effect: Each 1 kg weight loss reduces SBP ~1 mmHg; 10 kg loss reduces SBP 5-20 mmHg
- Mechanisms: Reduced SNS activation, improved insulin sensitivity, reduced leptin, decreased renal compression
- Implementation: 500-750 kcal/day deficit for 1-2 lb/week loss; Mediterranean or DASH diet patterns

**Barriers and Solutions:**
- Time constraints: High-intensity interval training (HIIT) provides time-efficient option; 10-minute exercise bouts accumulate
- Physical limitations: Adapted programs for arthritis, cardiac disease; refer to cardiac rehab if indicated
- Motivation: Group exercise, wearable activity trackers, smartphone apps, social support
- Safety: Screen for cardiovascular disease before vigorous exercise; gradual progression`,
        professional: `**Exercise Physiology in Hypertension**

**Cardiovascular Adaptations to Training:**

Aerobic exercise induces:
1. Reduced resting SNS tone: Decreased muscle sympathetic nerve activity (MSNA), enhanced baroreflex sensitivity
2. Improved endothelial function: Increased eNOS expression and activity, enhanced NO bioavailability, improved vasodilation
3. Reduced peripheral resistance: Decreased alpha-adrenergic vasoconstriction, improved vascular compliance
4. Cardiac remodeling: Physiologic eccentric hypertrophy (different from pathologic pressure-overload hypertrophy)
5. Metabolic improvements: Improved insulin sensitivity, lipid profile, inflammatory markers

**Exercise Intensity and BP Response:**
- Moderate intensity (40-60% VO2max): Optimal for BP lowering
- Vigorous intensity (>60% VO2max): Greater acute pressor response during exercise but similar or greater chronic benefits
- Isometric exercise: Static contractions cause exaggerated pressor response during activity but chronic training reduces resting BP significantly
- Post-exercise hypotension: Consistent 5-7 mmHg reduction lasting 4-10 hours; mechanism involves decreased SNS activity, increased NO, thermoregulatory vasodilation

**High-Intensity Interval Training (HIIT):**
Alternating periods of high intensity (80-90% HRmax) with recovery periods. Meta-analyses show BP reductions comparable or superior to moderate continuous exercise with shorter time commitment (30 vs 60 minutes). May be particularly effective for vascular function improvement.

**Resistance Training Considerations:**
Previously discouraged due to acute pressor response. Now recognized as safe and beneficial when performed properly:
- Avoid Valsalva maneuver (breath-holding causes dramatic BP elevation)
- Emphasize exhalation during exertion
- Moderate intensity (60-70% 1-repetition maximum)
- Circuit training may provide aerobic benefits simultaneously
- Particularly important for sarcopenia prevention in elderly hypertensives

**Exercise in Special Populations:**
- Elderly: Balance and flexibility training added to aerobic/resistance; prevent falls; orthostatic precautions
- CKD: Exercise safe and beneficial; consider during dialysis
- Pregnancy: Moderate exercise generally safe; avoid supine positions after first trimester, high-impact activities, overheating
- CAD: Cardiac rehabilitation program; exercise stress test before vigorous activity
- Heart failure: Supervised cardiac rehab; adjust for exercise intolerance

**Behavioral Economics and Exercise Adherence:**
- Financial incentives: Modest short-term effects
- Gamification: Smartphone apps with challenges, rewards
- Social components: Group exercise, buddy systems, team competitions
- Habit formation: Consistent scheduling, environmental cues, implementation intentions
- Wearable technology: Activity tracking, goal setting, feedback; mixed long-term adherence data`,
      },
    },
    {
      title: 'Other Lifestyle Factors',
      content: {
        patient: `**Limit Alcohol:**
Drinking too much alcohol raises blood pressure. Limit to:
- Men: No more than 2 drinks per day
- Women: No more than 1 drink per day
Less is better for blood pressure. One drink equals 12 oz beer, 5 oz wine, or 1.5 oz spirits.

**Quit Smoking:**
Each cigarette temporarily raises blood pressure and damages blood vessels. Quitting reduces cardiovascular risk immediately. Within one year, your heart disease risk drops by 50%. Within 15 years, it approaches that of a non-smoker.

**Stress Management:**
Chronic stress contributes to high blood pressure. Try:
- Deep breathing exercises
- Meditation or mindfulness
- Yoga or tai chi
- Regular physical activity
- Spending time in nature
- Connecting with friends and family
- Getting adequate sleep (7-9 hours)

**Sleep:**
Poor sleep and sleep apnea contribute to high blood pressure. If you snore loudly, stop breathing during sleep, or wake up tired, ask your doctor about sleep apnea testing. Treatment can significantly improve blood pressure control.`,
        intermediate: `**Alcohol and Blood Pressure:**

Relationship is dose-dependent:
- Light drinking (</=2 drinks/day): Small BP effect
- Moderate-heavy (>2 drinks/day): Clear BP elevation
- Binge drinking: Acute and chronic harmful effects
- Mechanisms: SNS activation, cortisol release, RAAS activation, endothelial dysfunction, weight gain

Recommendation: </=2 drinks/day men, </=1 drink/day women; less is better for BP control

**Smoking Cessation:**
- Acute effect: Each cigarette transiently raises BP and HR
- Long-term benefit: CV risk reduction begins immediately; within 1 year, CV risk reduced 50%; at 15 years, approaches never-smoker risk
- HTN-specific: Smoking cessation counseling and support should be provided to all hypertensive smokers
- Methods: Combination NRT (patch + gum/inhaler), varenicline, bupropion, behavioral counseling; most effective with combined pharmacotherapy + behavioral support

**Stress Management:**
- Biofeedback: Modest BP reduction (~5 mmHg) in motivated patients
- Meditation/mindfulness: Transcendental meditation shows 4-7 mmHg SBP reduction; mindfulness-based stress reduction effective
- Yoga: Combines physical activity, breathing, meditation; BP reduction 5-10 mmHg in studies
- Cognitive behavioral therapy: Targets maladaptive stress responses
- Practical implementation: 15-20 minutes daily practice; smartphone apps for guided meditation

**Sleep and Sleep Apnea:**
- Goal: 7-9 hours quality sleep
- OSA treatment: CPAP reduces BP ~2-3 mmHg average, up to 5-10 mmHg in compliant users with resistant HTN
- Screening: STOP-BANG questionnaire; formal polysomnography if high risk
- Treatment alternatives: Mandibular advancement devices, positional therapy, weight loss, hypoglossal nerve stimulation`,
        professional: `**Advanced Behavioral Interventions**

**Psychosocial Stress and Hypertension:**
Chronic stress activates the hypothalamic-pituitary-adrenal (HPA) axis and SNS, contributing to HTN development. Job strain, low socioeconomic status, social isolation, and chronic life stressors are associated with incident HTN. Mechanisms include: elevated cortisol, increased MSNA, endothelial dysfunction, poor sleep, unhealthy coping behaviors (overeating, alcohol, smoking).

**Stress Management Interventions:**

1. Mindfulness-Based Stress Reduction (MBSR):
   - 8-week structured program combining meditation, body awareness, yoga
   - Meta-analysis shows SBP reduction ~5 mmHg, DBP ~3 mmHg
   - Improved medication adherence, reduced healthcare utilization

2. Transcendental Meditation:
   - Largest effect size among meditation techniques (~4-7 mmHg SBP)
   - Mechanisms: Reduced SNS activity, improved HRV, decreased cortisol

3. Biofeedback:
   - Device-assisted learning to control physiological processes
   - Types: Thermal, electrodermal, respiratory, HRV biofeedback
   - Effect size: ~5-10 mmHg with active practice
   - Often combined with relaxation training

4. Yoga:
   - Systematic review: SBP reduction ~5 mmHg, DBP ~4 mmHg
   - Combines physical postures (asanas), breathing (pranayama), meditation
   - Iyengar yoga particularly studied for hypertension
   - May be culturally appropriate intervention in certain populations

5. Cognitive Behavioral Therapy (CBT):
   - Targets maladaptive thoughts and behaviors contributing to stress
   - Effective for depression and anxiety comorbidities
   - Indirect BP benefits through stress reduction and improved self-care

**Sleep-Related Hypertension:**

Obstructive sleep apnea (OSA):
- Pathophysiology: Intermittent hypoxia leads to chemoreceptor activation leads to sustained SNS activation; oxidative stress; endothelial dysfunction; RAAS activation; intrathoracic pressure changes
- Prevalence: 30-50% of resistant HTN patients have OSA
- Treatment: CPAP reduces 24-hour BP by ~2-3 mmHg; greater effect in resistant HTN, patients with higher AHI, and with good adherence (>4 hours/night)
- Alternative treatments: Mandibular advancement devices (effective for mild-moderate OSA), positional therapy, weight loss, surgical options (inspire hypoglossal nerve stimulation), oral appliances

Sleep duration and quality:
- Short sleep (<6 hours): Associated with 20% increased HTN risk
- Long sleep (>9 hours): Also associated with increased CV risk (U-shaped relationship)
- Sleep deprivation effects: Elevated cortisol, increased SNS activity, impaired glucose metabolism, weight gain
- Sleep hygiene optimization: Consistent schedule, dark quiet environment, limit screens, avoid caffeine late, moderate evening meals

**Combined Lifestyle Interventions:**

PREMIER trial: Intensive behavioral intervention (weight loss, Na+ reduction, physical activity, DASH) achieved 14.2/7.4 mmHg reduction in prehypertensive patients without medication. Greater BP reduction than any single intervention alone.

Multicomponent programs addressing multiple risk factors simultaneously produce additive benefits. Integration of dietary counseling, physical activity promotion, smoking cessation, and stress management within healthcare systems maximizes population-level BP control.

**Implementation Science:**
Barriers to lifestyle modification include: food deserts, cost of healthy foods, time constraints, cultural preferences, limited health literacy, social determinants of health. Effective implementation requires:
- Team-based care (physicians, nurses, dietitians, health coaches)
- Community-based programs (YMCA, faith-based organizations)
- Policy approaches (sodium reduction targets, food subsidies, built environment)
- Digital health tools (apps, telemedicine, remote monitoring)
- Addressing health equity and social determinants`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'heart', structureName: 'Heart', linkText: 'Heart', relevance: 'Benefits from BP reduction' },
    { structureId: 'kidneys', structureName: 'Kidneys', linkText: 'Kidneys', relevance: 'Sodium handling and BP regulation' },
    { structureId: 'blood-vessels', structureName: 'Blood Vessels', linkText: 'Blood Vessels', relevance: 'Target of dietary interventions' },
  ],
  references: [
    {
      referenceId: 'dash-trial',
      type: 'journal-article',
      title: 'A Clinical Trial of the Effects of Dietary Patterns on Blood Pressure',
      authors: 'Appel LJ, et al.',
      source: 'New England Journal of Medicine',
      year: 1997,
      citation: 'Appel LJ, et al. A clinical trial of the effects of dietary patterns on blood pressure. N Engl J Med. 1997;336(16):1117-1124.',
    },
    {
      referenceId: 'dash-sodium-trial',
      type: 'journal-article',
      title: 'Effects on Blood Pressure of Reduced Dietary Sodium and the Dietary Approaches to Stop Hypertension (DASH) Diet',
      authors: 'Sacks FM, et al.',
      source: 'New England Journal of Medicine',
      year: 2001,
      citation: 'Sacks FM, et al. Effects on blood pressure of reduced dietary sodium and the Dietary Approaches to Stop Hypertension (DASH) diet. N Engl J Med. 2001;344(1):3-10.',
    },
    {
      referenceId: 'premier-trial',
      type: 'journal-article',
      title: 'Effects of Comprehensive Lifestyle Modification on Blood Pressure Control',
      authors: 'Appel LJ, et al.',
      source: 'JAMA',
      year: 2003,
      citation: 'Appel LJ, et al. Effects of comprehensive lifestyle modification on blood pressure control: main results of the PREMIER clinical trial. JAMA. 2003;289(16):2083-2093.',
    },
  ],
  relatedEntries: [
    { entryId: 'hypertension', entryType: 'condition', name: 'Hypertension', relationship: 'treats' },
    { entryId: 'cardiovascular-physiology', entryType: 'physiology', name: 'Cardiovascular Physiology', relationship: 'related-to' },
  ],
  searchMetadata: {
    primaryKeywords: ['DASH diet', 'lifestyle modification', 'dietary sodium', 'weight loss', 'exercise', 'blood pressure lifestyle'],
    secondaryKeywords: ['sodium restriction', 'potassium intake', 'physical activity', 'stress management', 'smoking cessation'],
    synonyms: ['lifestyle changes', 'non-pharmacological treatment', 'behavioral intervention'],
    tags: ['lifestyle medicine', 'nutrition', 'exercise physiology', 'cardiovascular', 'prevention'],
    searchBoost: 1.0,
  },
  clinicalImportance: 'important',
  reviewStatus: 'approved',
  version: '1.0.0',
  lastUpdated: '2026-02-02',
  author: 'SOMA Medical Encyclopedia',
};


// ═══════════════════════════════════════════════════════════════════════════════
// PHARMACOTHERAPY ENTRY
// ═══════════════════════════════════════════════════════════════════════════════

export const hypertensionPharmacotherapyEntry: EncyclopediaEntry = {
  entryId: 'hypertension-pharmacotherapy',
  name: 'Antihypertensive Medications',
  aliases: ['blood pressure medications', 'antihypertensives', 'antihypertensive drug classes'],
  entryType: 'medication',
  category: 'cardiovascular',
  subcategory: 'pharmacology',
  summary: 'Drug classes used to treat hypertension including thiazide diuretics, ACE inhibitors, ARBs, calcium channel blockers, and beta-blockers.',
  overview: {
    patient: 'When lifestyle changes are not enough to control blood pressure, medications are needed. The main types of blood pressure medications work in different ways: thiazide diuretics help your kidneys remove excess salt and water; ACE inhibitors and ARBs relax blood vessels by blocking hormones that constrict them; calcium channel blockers relax blood vessels by blocking calcium; and beta-blockers slow your heart rate. Most people start with one medication, but many need two or more to reach their blood pressure goal. Your doctor will choose medications based on your overall health, other conditions you have, and potential side effects.',
    intermediate: 'First-line antihypertensive classes include thiazide diuretics (chlorthalidone, hydrochlorothiazide), ACE inhibitors (lisinopril, enalapril), ARBs (losartan, valsartan), and dihydropyridine calcium channel blockers (amlodipine). Beta-blockers are not first-line for uncomplicated hypertension but are indicated with heart failure, coronary artery disease, or arrhythmias. Treatment initiation depends on BP stage and cardiovascular risk: Stage 2 HTN (>=140/90) warrants immediate pharmacotherapy plus lifestyle modification; Stage 1 (130-139/80-89) requires medication if clinical CVD, diabetes, CKD, or 10-year ASCVD risk >=10%. Target BP is generally <130/80 mmHg. Single-pill combinations improve adherence and are preferred when multiple agents are needed.',
    professional: 'Pharmacological treatment of hypertension follows an evidence-based approach using first-line agents from five major classes: thiazide diuretics, ACE inhibitors, angiotensin receptor blockers (ARBs), calcium channel blockers (CCBs), and beta-blockers (for compelling indications). Initiation thresholds: Stage 2 HTN (>=140/90) requires immediate pharmacotherapy; Stage 1 HTN requires medication if established CVD, diabetes, CKD, or 10-year ASCVD risk >=10%, otherwise lifestyle with reassessment. Treatment target <130/80 mmHg (ACC/AHA) or <140/90 mmHg (ESC/ESH) if tolerated. Combination therapy required for most Stage 2 HTN; single-pill combinations (SPCs) improve adherence by 20-25% and are guideline-preferred over free combinations. Chlorthalidone is preferred over hydrochlorothiazide due to longer half-life and superior outcomes data (ALLHAT). ACE-I/ARB combination contraindicated (ONTARGET, ALTITUDE showed harm). Resistant HTN may require mineralocorticoid receptor antagonists (spironolactone), vasodilators, or device-based therapies.',
  },
  content: [
    {
      title: 'First-Line Antihypertensive Classes',
      content: {
        patient: `**Thiazide Diuretics (Water Pills)**
Examples: Hydrochlorothiazide, chlorthalidone
How they work: Help kidneys remove excess salt and water, reducing blood volume.
Common side effects: Increased urination (usually temporary), low potassium, dizziness.
Tips: Usually taken in the morning to avoid nighttime bathroom trips. Chlorthalidone often works better than hydrochlorothiazide.

**ACE Inhibitors**
Examples: Lisinopril, enalapril, ramipril
How they work: Block production of angiotensin II, a chemical that narrows blood vessels.
Common side effects: Dry cough (10-20% of patients), high potassium, dizziness.
Important: Blood tests needed to check kidney function and potassium levels.

**ARBs (Angiotensin Receptor Blockers)**
Examples: Losartan, valsartan, olmesartan
How they work: Block angiotensin II from attaching to receptors on blood vessels.
Common side effects: Dizziness, high potassium (less cough than ACE inhibitors).
Often used if ACE inhibitors cause cough.

**Calcium Channel Blockers (CCBs)**
Examples: Amlodipine, nifedipine
How they work: Relax blood vessels by blocking calcium from entering muscle cells.
Common side effects: Ankle swelling, flushing, headache, dizziness.
Amlodipine is the most commonly prescribed BP medication.

**Beta-Blockers**
Examples: Metoprolol, atenolol, carvedilol
How they work: Slow heart rate and reduce force of heart contraction.
Not usually first choice unless you also have heart failure, coronary artery disease, or irregular heartbeat.
Side effects: Fatigue, slow heart rate, sexual dysfunction.`,
        intermediate: `**Thiazide Diuretics**
- Agents: Chlorthalidone (preferred), hydrochlorothiazide (HCTZ), indapamide
- Mechanism: Inhibit Na+-Cl- cotransporter in distal convoluted tubule leads to natriuresis, volume reduction
- Dosing: Chlorthalidone 12.5-25 mg daily (longer half-life 40-60h); HCTZ 12.5-50 mg daily (shorter half-life 6-15h)
- ALLHAT trial established chlorthalidone as appropriate first-line with superior outcomes data
- Side effects: Hypokalemia, hyponatremia, hyperuricemia/gout, hyperglycemia, photosensitivity
- Monitoring: Electrolytes and creatinine 1-2 weeks after initiation/dose change, then periodically
- Indapamide: 1.25-2.5 mg daily; thiazide-like with fewer metabolic side effects

**ACE Inhibitors (ACE-I)**
- Agents: Lisinopril, enalapril, ramipril, perindopril, benazepril
- Mechanism: Block ACE leads to decreased Ang II leads to vasodilation, decreased aldosterone, decreased SNS activity
- Dosing: Lisinopril 10-40 mg daily; enalapril 5-40 mg daily (BID dosing)
- Indications: First-line; especially beneficial with diabetes, CKD, proteinuria, heart failure, post-MI
- Contraindications: Pregnancy (teratogenic), angioedema history, bilateral renal artery stenosis
- Side effects: Dry cough (10-20% - bradykinin-mediated), hyperkalemia, acute kidney injury (especially with RAS, dehydration), angioedema (rare but serious)
- Monitoring: Creatinine and potassium 1-2 weeks after initiation

**Angiotensin Receptor Blockers (ARBs)**
- Agents: Losartan, valsartan, olmesartan, irbesartan, candesartan
- Mechanism: Block AT1 receptor leads to vasodilation, reduced aldosterone; no effect on bradykinin (less cough)
- Indications: Alternative to ACE-I (if cough); first-line with diabetes, CKD; HF with reduced EF (specific agents)
- Contraindications: Pregnancy, bilateral RAS
- Side effects: Hyperkalemia, AKI (less than ACE-I), rare angioedema
- Losartan: Mild uricosuric effect (beneficial in gout)

**Calcium Channel Blockers (CCBs)**
- Dihydropyridines: Amlodipine, nifedipine, felodipine (vascular selective)
- Non-dihydropyridines: Diltiazem, verapamil (cardiac and vascular effects)
- Mechanism: Block L-type calcium channels leads to vascular smooth muscle relaxation leads to vasodilation
- Dosing: Amlodipine 2.5-10 mg daily (long half-life 30-50h)
- Side effects: Peripheral edema (dose-dependent, venular dilation, not improved by diuretics), flushing, headache, gingival hyperplasia (rare), reflex tachycardia
- More effective in African Americans as monotherapy
- Verapamil/diltiazem contraindicated with HFrEF, heart block; avoid with beta-blockers (additive AV nodal effects)

**Beta-Blockers**
- Cardioselective (beta-1): Metoprolol, bisoprolol, atenolol
- Vasodilatory: Carvedilol (alpha-1 and beta), nebivolol (beta-1 selective with NO-mediated vasodilation)
- Non-selective: Propranolol, nadolol
- Mechanism: Block beta-adrenergic receptors leads to decreased HR, contractility, renin release
- NOT first-line for uncomplicated HTN (LIFE trial showed inferior stroke prevention vs ARB)
- Indications: Compelling indications - HFrEF, post-MI, angina, tachyarrhythmias (AF rate control)
- Side effects: Fatigue, depression, sexual dysfunction, masking hypoglycemia (diabetics), bronchospasm (non-selective), metabolic effects`,
        professional: `**Pharmacokinetics and Clinical Pharmacology**

**Thiazide Pharmacokinetics:**
Chlorthalidone vs HCTZ: Chlorthalidone has 1.5-2x potency, much longer half-life (40-60h vs 6-15h), better 24-hour BP coverage. Eliminated primarily unchanged by kidneys. Metolazone: More potent, longer acting than HCTZ; useful in combination with loop diuretics in diuretic resistance (sequential nephron blockade).

**ACE-I Pharmacokinetics:**
Lisinopril: Not metabolized (eliminated unchanged in urine); no dose adjustment needed in liver disease; reduce dose in renal impairment. Enalapril: Prodrug (enalaprilat is active metabolite); hepatic metabolism. Ramipril: Prodrug; hepatic activation; long half-life allows once-daily dosing. Perindopril: Prodrug; particularly effective in elderly (HYVET trial).

**ARB Pharmacokinetics:**
Losartan: Partially metabolized to active metabolite (E-3174); dose reduction in hepatic impairment; uricosuric effect via inhibition of URAT1. Valsartan: Minimal metabolism; biliary (80%) and renal (20%) elimination. Olmesartan: Prodrug (olmesartan medoxomil); potent, long-acting.

**CCB Pharmacokinetics:**
Amlodipine: Long half-life (30-50h) allows once-daily dosing; hepatic metabolism; no dose adjustment in renal impairment. Extensive protein binding. Felodipine: High first-pass metabolism; food increases bioavailability. Nifedipine: Immediate-release contraindicated (reflex tachycardia, MI risk); extended-release formulations preferred.

**Drug Interactions:**
- NSAIDs: Antagonize ACE-I, ARB, diuretic effects; reduce renal function
- Potassium supplements/sparing diuretics + ACE-I/ARB/MRA: Hyperkalemia risk
- Verapamil/diltiazem + beta-blockers: AV block, bradycardia
- CCB + simvastatin: Dose limitation (simvastatin </=20 mg with amlodipine, </=40 mg with diltiazem/verapamil due to CYP3A4 inhibition)
- ACE-I/ARB + lithium: Reduced lithium clearance, toxicity risk
- ACE-I + ARB: Contraindicated (ALTITUDE, ONTARGET showed harm)`,
      },
    },
    {
      title: 'Combination Therapy and Treatment Algorithms',
      content: {
        patient: `**When You Need More Than One Medication:**

Most people with Stage 2 high blood pressure (140/90 or higher) need two or more medications to reach their goal. Taking multiple medications that work in different ways often works better than increasing the dose of one medication.

**Combination Pills:**
Many medications combine two drugs in one pill, such as:
- ACE inhibitor + calcium channel blocker
- ARB + calcium channel blocker
- ACE inhibitor or ARB + thiazide diuretic

These combination pills are convenient and help you remember to take your medications.

**Treatment Timeline:**
1. Start one or two medications depending on how high your blood pressure is
2. Your doctor may increase the dose every 2-4 weeks until goal is reached
3. If not at goal, a second or third medication may be added
4. Most people need 2-3 medications to control their blood pressure

**Important:** Never stop taking your blood pressure medication suddenly. This can cause rebound high blood pressure. Always talk to your doctor before making changes.`,
        intermediate: `**Combination Therapy Principles:**

Most Stage 2 HTN requires two or more agents for adequate control. Preferred combinations are physiologically complementary:
- ACE-I/ARB + CCB: Synergistic vasodilation; ACE-I attenuates CCB-induced peripheral edema
- ACE-I/ARB + thiazide: Counteract each other's adverse effects (ACE-I reduces thiazide-related K+ loss; thiazide reduces ACE-I-related hyperkalemia)
- CCB + thiazide: Additive BP lowering

AVOID combining:
- ACE-I + ARB: ONTARGET and ALTITUDE trials showed increased adverse events (renal dysfunction, hyperkalemia) without additional benefit
- Beta-blocker + non-DHP CCB (diltiazem, verapamil): Additive AV nodal effects, heart block risk

Single-Pill Combinations (SPCs):
- Improve adherence by 20-25% vs free combinations (ACC/AHA guideline preference)
- Reduce pill burden and simplify regimen
- Available combinations: ACE-I/CCB (e.g., benazepril/amlodipine), ARB/CCB (e.g., valsartan/amlodipine), ACE-I/thiazide, ARB/thiazide, triple combinations (ACE-I/CCB/thiazide)

**Treatment Algorithm:**

Initial treatment:
- If BP <20/10 mmHg above target: Start one first-line agent
- If BP >=20/10 mmHg above target: Start two first-line agents (combination preferred)

Titration:
- Increase dose every 2-4 weeks to maximally tolerated dose
- Reassess BP and medication tolerance at each visit

Add-on therapy:
- If not at goal on maximally tolerated first-line agent: Add second agent from complementary class
- If not at goal on two agents: Add third agent (typically the remaining first-line class)
- If not at goal on three agents (including diuretic): Evaluate for resistant hypertension

**Special Considerations:**

Renal protection in diabetes/CKD:
- ACE-I or ARB first-line
- May need to add CCB or thiazide for BP control
- Avoid ACE-I + ARB combination

Heart failure with reduced EF:
- Triple therapy: ACE-I/ARB/ARNI + evidence-based beta-blocker + MRA (spironolactone/eplerenone)
- Hydralazine/isosorbide dinitrate added in Black patients with persistent symptoms (A-HeFT trial)
- Avoid non-DHP CCBs (negative inotropy)

Coronary artery disease:
- Beta-blocker + ACE-I foundation
- Add CCB or thiazide for BP control if needed`,
        professional: `**Evidence-Based Treatment Strategies**

**Landmark Clinical Trials:**

ALLHAT (2002): Largest HTN outcomes trial (n=33,357). Compared chlorthalidone, amlodipine, lisinopril, and doxazosin in high-risk HTN. Chlorthalidone superior to lisinopril for combined CHD (secondary endpoint) and superior to both amlodipine and lisinopril for heart failure. No difference in primary endpoint (fatal CHD or nonfatal MI). Established thiazides as appropriate first-line therapy.

ACCOMPLISH (2008): ACE-I + CCB (benazepril/amlodipine) superior to ACE-I + thiazide (benazepril/HCTZ) for CV outcomes (20% relative risk reduction) despite similar BP control. Challenged thiazide primacy in combination therapy; CCB-based combination may be preferred in high-risk patients.

SPRINT (2015): Intensive BP control (SBP <120) vs standard (<140) in high-risk patients without diabetes. Intensive group had 25% lower composite CV outcomes, 27% lower all-cause mortality. Driving force for <130/80 targets. Caveats: Excluded diabetics, used automated unattended BP measurement, limited generalizability to frail elderly.

STEP (2021): Chinese elderly trial (60-80 years) showed intensive treatment (SBP 110-<130) vs standard (130-150) reduced CV events. Supports intensive targets in elderly if tolerated.

HOPE-3 (2016): Lowering BP in intermediate-risk patients without CVD: No CV benefit from BP lowering alone unless baseline SBP >143.5 mmHg.

**Resistant Hypertension Management:**

Definition: BP above goal despite adherence to 3 antihypertensives of different classes at maximally tolerated doses, one being a diuretic; OR controlled BP requiring >=4 medications.

Pseudoresistance evaluation (exclude first):
- Improper BP measurement technique
- White coat effect
- Poor adherence (up to 50% of apparent resistance)
- Inadequate dosing/regimen
- Interfering substances (NSAIDs, OCPs, steroids, sympathomimetics, licorice, stimulants)

Optimize diuretic:
- Switch HCTZ to chlorthalidone 25 mg daily (more potent, longer acting)
- Add loop diuretic if eGFR <45 or volume overload
- Ensure adequate diuresis

Add mineralocorticoid receptor antagonist:
- Spironolactone 25-50 mg daily (PATHWAY-2 trial: most effective 4th-line agent; BP reduction ~8-10 mmHg)
- Monitor K+ and creatinine
- Alternative: Eplerenone (fewer endocrine side effects, less potent), amiloride

Alternative add-on agents:
- Beta-blocker (especially if CAD, HF, AF)
- Central alpha-agonist (clonidine - patch or oral; guanfacine ER)
- Direct vasodilator (hydralazine, minoxidil)
- Combined alpha/beta-blocker (labetalol)

Device-based therapies:
- Renal denervation: Consider in selected resistant HTN after comprehensive evaluation (SPYRAL, RADIANCE trials show modest benefit ~5-10 mmHg)

**Special Populations:**

African American patients:
- Respond better to thiazides and CCBs (2x response vs ACE-I/ARB monotherapy)
- Combination therapy often needed; ACE-I/ARB + thiazide or CCB effective
- Higher rates of salt-sensitive HTN, LVH, CKD progression

Elderly:
- Target <130/80 if tolerated (SPRINT included up to age 80+)
- Check orthostatic BP; avoid overtreatment
- Indapamide preferred over HCTZ (HYVET trial)
- J-curve concerns with diastolic <60, especially if CAD

Pregnancy:
- Safe: Labetalol, nifedipine, methyldopa
- Contraindicated: ACE-I, ARB, DRI (fetotoxic); atenolol (fetal growth restriction)
- Target 120-160/80-105 (avoid overtreatment compromising uteroplacental perfusion)`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'kidneys', structureName: 'Kidneys', linkText: 'Kidneys', relevance: 'Site of thiazide diuretic action' },
    { structureId: 'heart', structureName: 'Heart', linkText: 'Heart', relevance: 'Target of beta-blockers' },
    { structureId: 'blood-vessels', structureName: 'Blood Vessels', linkText: 'Blood Vessels', relevance: 'Target of ACE-I, ARB, CCB action' },
    { structureId: 'adrenal-glands', structureName: 'Adrenal Glands', linkText: 'Adrenal Glands', relevance: 'Site of aldosterone production (target of MRAs)' },
  ],
  references: [
    {
      referenceId: 'allhat-trial',
      type: 'journal-article',
      title: 'Major outcomes in high-risk hypertensive patients randomized to ACE-I or CCB vs diuretic',
      authors: 'ALLHAT Officers',
      source: 'JAMA',
      year: 2002,
      citation: 'ALLHAT Officers. Major outcomes in high-risk hypertensive patients randomized to angiotensin-converting enzyme inhibitor or calcium channel blocker vs diuretic. JAMA. 2002;288:2981-2997.',
    },
    {
      referenceId: 'accomplish-trial',
      type: 'journal-article',
      title: 'Benazepril plus amlodipine or hydrochlorothiazide for hypertension in high-risk patients',
      authors: 'Jamerson K, et al.',
      source: 'New England Journal of Medicine',
      year: 2008,
      citation: 'Jamerson K, et al. Benazepril plus amlodipine or hydrochlorothiazide for hypertension in high-risk patients. N Engl J Med. 2008;359:2417-2428.',
    },
    {
      referenceId: 'life-trial',
      type: 'journal-article',
      title: 'Cardiovascular morbidity and mortality in the Losartan Intervention For Endpoint reduction in hypertension study (LIFE)',
      authors: 'Dahlof B, et al.',
      source: 'The Lancet',
      year: 2002,
      citation: 'Dahlof B, et al. Cardiovascular morbidity and mortality in the Losartan Intervention For Endpoint reduction in hypertension study (LIFE). Lancet. 2002;359:995-1003.',
    },
  ],
  relatedEntries: [
    { entryId: 'hypertension', entryType: 'condition', name: 'Hypertension', relationship: 'treats' },
    { entryId: 'resistant-hypertension', entryType: 'condition', name: 'Resistant Hypertension', relationship: 'see-also' },
  ],
  searchMetadata: {
    primaryKeywords: ['antihypertensive', 'blood pressure medication', 'ACE inhibitor', 'ARB', 'calcium channel blocker', 'thiazide', 'beta-blocker'],
    secondaryKeywords: ['lisinopril', 'amlodipine', 'losartan', 'hydrochlorothiazide', 'spironolactone', 'combination therapy'],
    synonyms: ['BP drugs', 'hypertension medication', 'antihypertensive agents'],
    tags: ['pharmacology', 'cardiovascular', 'condition', 'medication'],
    searchBoost: 1.1,
  },
  clinicalImportance: 'essential',
  reviewStatus: 'approved',
  version: '1.0.0',
  lastUpdated: '2026-02-02',
  author: 'SOMA Medical Encyclopedia',
};


// ═══════════════════════════════════════════════════════════════════════════════
// RESISTANT HYPERTENSION ENTRY
// ═══════════════════════════════════════════════════════════════════════════════

export const resistantHypertensionEntry: EncyclopediaEntry = {
  entryId: 'resistant-hypertension',
  name: 'Resistant Hypertension',
  aliases: ['refractory hypertension', 'difficult-to-control hypertension', 'treatment-resistant hypertension'],
  entryType: 'condition',
  category: 'cardiovascular',
  subcategory: 'vascular-disease',
  summary: 'Hypertension that remains above goal despite concurrent use of three antihypertensive agents of different classes at maximally tolerated doses, including a diuretic.',
  overview: {
    patient: 'Resistant hypertension means your blood pressure stays high even though you are taking three different blood pressure medications at the right doses, including a water pill (diuretic). Or, you may need four or more medications to control your blood pressure. This affects about 10-20% of people with high blood pressure. It is important to properly diagnose resistant hypertension because sometimes the issue is not taking medications correctly, using the wrong measurement technique, or having blood pressure that is only high at the doctor\'s office. Your doctor will also check for underlying causes that can be treated, such as kidney problems, hormone disorders, or sleep apnea. Treatment may involve switching medications, adding spironolactone, or investigating for underlying causes.',
    intermediate: 'Resistant hypertension is defined as blood pressure that remains above goal (<130/80 mmHg) despite adherence to 3 antihypertensive agents of different classes at maximally tolerated doses, one being a diuretic. Alternatively, controlled BP requiring 4 or more medications also defines resistant HTN. Prevalence is 10-20% of treated hypertensive patients. Before confirming true resistance, pseudoresistance must be excluded: improper BP measurement, white coat effect, poor medication adherence (estimated 50% of apparent resistance), inadequate dosing or regimen, and interfering substances (NSAIDs, OCPs, steroids, decongestants). Secondary causes are more common in resistant HTN and should be evaluated: primary aldosteronism (5-20%), renovascular disease, obstructive sleep apnea (70-80% of resistant HTN), renal parenchymal disease, pheochromocytoma, Cushing syndrome. Treatment involves optimizing the diuretic (switch HCTZ to chlorthalidone), ensuring maximally tolerated doses, and adding spironolactone 25-50 mg daily (PATHWAY-2 trial showed greatest benefit). Alternative add-ons include beta-blockers, central alpha-agonists, or direct vasodilators. Renal denervation may be considered in selected patients.',
    professional: 'Resistant hypertension (RH) is defined as BP that remains above goal despite the use of 3 antihypertensive agents of different classes at maximally tolerated doses, one of which should be a diuretic (typically ACE-I/ARB + CCB + thiazide), OR controlled BP requiring >=4 medications. True prevalence ~10-20% of treated HTN, up to 50% in referral populations. Pathophysiology typically involves volume expansion (inadequate diuretic therapy, secondary aldosteronism, salt-sensitive mechanisms) and/or heightened SNS activation (OSA, obesity, renovascular). Evaluation must first exclude pseudoresistance through ABPM to identify white coat effect, assessment of medication adherence (pharmacy records, drug levels), verification of proper technique, and review of interfering substances (NSAIDs most common, OCPs, steroids, stimulants, calcineurin inhibitors, licorice). Secondary cause screening is essential: primary aldosteronism (screen all RH with ARR), OSA (polysomnography), renovascular disease (imaging if indicated), renal parenchymal disease. Pharmacological approach: (1) Optimize diuretic - switch HCTZ to chlorthalidone 25 mg (more potent, longer acting) or indapamide, add loop diuretic if eGFR<45; (2) Add MRA - spironolactone 25-50 mg daily (PATHWAY-2 showed 8-10 mmHg SBP reduction, superior to doxazosin or bisoprolol); monitor K+ and creatinine; (3) Alternative add-ons - beta-blocker, central alpha-agonist (clonidine), direct vasodilator (hydralazine, minoxidil). Device-based therapy: Renal denervation shows modest benefit (~5-10 mmHg) in selected patients after comprehensive evaluation (SPYRAL HTN-ON MED, RADIANCE-HTN trials). Prognosis: CV risk 2-3x higher than controlled HTN; requires aggressive risk factor management.',
  },
  content: [
    {
      title: 'Evaluation of Resistant Hypertension',
      content: {
        patient: `**Is it Really Resistant?**

Before confirming resistant hypertension, your doctor will check for "pseudoresistance" - reasons why your blood pressure might appear high when it's actually controlled:

1. **White coat hypertension**: Your blood pressure is only high at the doctor's office. Home or ambulatory monitoring can check for this.

2. **Not taking medications correctly**: Up to 50% of people with "resistant" blood pressure are not taking their medications as prescribed. Cost, side effects, or complex schedules may be factors.

3. **Measurement errors**: Using the wrong cuff size, talking during measurement, or not resting before measuring can give falsely high readings.

4. **Inadequate treatment**: You might not be on the right doses or best combination of medications.

5. **Substances that raise blood pressure**:
   - Pain relievers like ibuprofen and naproxen (NSAIDs)
   - Decongestants (pseudoephedrine)
   - Some antidepressants
   - Steroids
   - Birth control pills
   - Herbal supplements like licorice
   - Alcohol

**Tests to Find Underlying Causes:**
- Blood and urine tests for kidney function and hormones
- Screening for sleep apnea (overnight sleep study)
- Imaging of kidney arteries if indicated
- Eye examination
- Home or ambulatory blood pressure monitoring`,
        intermediate: `**Systematic Evaluation Protocol:**

**Step 1: Exclude Pseudoresistance**

White coat effect:
- Home BP monitoring or ABPM essential
- If out-of-office BP normal, treatment intensity can be reduced

Medication adherence assessment:
- Direct questioning without judgment
- Pharmacy refill records
- Drug levels if available
- Address cost barriers, side effects, regimen complexity

Measurement verification:
- Proper technique: 5-minute rest, correct cuff size, seated position, arm at heart level
- Check both arms initially
- Orthostatic measurements in elderly
- Validated automated device

**Step 2: Identify Interfering Substances**

Common contributors to apparent resistance:
- NSAIDs (most common): Antagonize ACE-I, ARB, diuretic effects; sodium/water retention
- Oral contraceptives: RAAS activation, fluid retention
- Systemic corticosteroids, ACTH
- Sympathomimetics: Decongestants, stimulants, cocaine, amphetamines
- Erythropoietin: Dose-dependent BP elevation
- Calcineurin inhibitors: Cyclosporine, tacrolimus
- Natural licorice (glycyrrhizin): Inhibits 11beta-HSD2, causing apparent mineralocorticoid excess
- Excessive alcohol intake
- Herbal supplements: Ephedra, ginseng

**Step 3: Screen for Secondary Causes**

Primary aldosteronism:
- Prevalence: 5-20% of resistant HTN
- Screen with aldosterone-renin ratio (ARR)
- Confirmatory testing: Salt loading, saline infusion test
- Subtype differentiation: Adrenal CT, adrenal vein sampling

Obstructive sleep apnea:
- Prevalence: 70-80% of resistant HTN
- Screen with STOP-BANG questionnaire
- Confirm with polysomnography

Renovascular disease:
- Particularly if flash pulmonary edema, asymmetric kidney size, abdominal bruit
- Imaging: CTA, MRA, or duplex ultrasound

Other secondary causes:
- Renal parenchymal disease: Urinalysis, creatinine, renal ultrasound
- Pheochromocytoma: Plasma/urine metanephrines if episodic symptoms
- Cushing syndrome: 24-hour urine cortisol or dexamethasone suppression test
- Thyroid disease: TSH
- Coarctation of aorta: Clinical exam, imaging if suspected`,
        professional: `**Comprehensive Diagnostic Workup**

**Ambulatory Blood Pressure Monitoring in RH:**
Essential to confirm true resistance vs white coat effect. Patterns in RH:
- Non-dipping pattern common (loss of normal nocturnal BP decline <10%)
- Reverse dipping associated with secondary causes
- High BP load (>25-30% of readings elevated) despite normal average
- Morning surge may indicate increased CV risk

**Biochemical Evaluation:**

Primary aldosteronism screening:
- Aldosterone-renin ratio (ARR): Aldosterone (ng/dL) / PRA (ng/mL/hr)
- Cutoff >20-40 (depending on assay) with aldosterone >15 ng/dL suggests PA
- Factors affecting ARR:
  - Hypokalemia suppresses aldosterone (correct K+ before testing)
  - Medications: ACE-I/ARB, MRAs, K+ sparing diuretics increase renin; beta-blockers, NSAIDs, central alpha-agonists decrease renin
  - Ideally hold interfering medications 4-6 weeks; if not possible, interpret cautiously
- Confirmatory testing required:
  - Oral salt loading test: High salt diet 3 days, urine aldosterone >12 mcg/24hr confirms PA
  - Saline infusion test: 2L NS over 4 hours, aldosterone >10 ng/dL confirms PA
  - Fludrocortisone suppression test (more complex, used less frequently)
- Subtype differentiation:
  - Adrenal CT: Identifies >4 cm masses, guides AVS
  - Adrenal vein sampling (AVS): Gold standard for lateralization; essential if considering unilateral adrenalectomy

OSA evaluation:
- STOP-BANG questionnaire: Snoring, Tiredness, Observed apnea, Pressure HTN, BMI>35, Age>50, Neck circumference>40cm, male Gender
- Score >=3: High risk for moderate-severe OSA
- Polysomnography or home sleep apnea testing
- AHI >5 with symptoms or >15 without indicates OSA

**Imaging Studies:**

Renovascular disease:
- Duplex ultrasound: Operator dependent; acceleration time >0.1s, resistive index <0.5 suggest significant stenosis
- CTA: Excellent sensitivity/specificity; contrast concern in CKD
- MRA: Gadolinium-enhanced accurate; non-contrast techniques less sensitive; gadolinium contraindicated if GFR<30
- Invasive angiography: Gold standard with pressure gradient measurement

Adrenal imaging:
- CT abdomen with adrenal protocol: Identify adenomas, hyperplasia, masses
- MRI: Alternative for adrenal characterization
- Functional imaging: NP-59 scintigraphy (rarely used), 11C-metomidate PET (research)

**Medication Adherence Assessment:**
Up to 50% of apparent RH is due to non-adherence. Assessment methods:
- Direct patient report (often inaccurate due to social desirability bias)
- Pharmacy refill records: Medication possession ratio (MPR) or proportion of days covered (PDC)
- Drug levels or biomarkers where available
- Electronic monitoring devices (research setting)
- Therapeutic drug monitoring for specific agents

Barriers to adherence:
- Cost and insurance coverage
- Side effects
- Complex regimens (multiple daily doses, pill burden)
- Health beliefs and misconceptions
- Cognitive impairment
- Depression
- Substance abuse`,
      },
    },
    {
      title: 'Treatment of Resistant Hypertension',
      content: {
        patient: `**Treating Resistant Hypertension:**

If you truly have resistant hypertension, your doctor will:

1. **Optimize your current medications**:
   - Switch from hydrochlorothiazide to chlorthalidone (works longer and better)
   - Make sure you are on the highest tolerated doses
   - Add a loop diuretic if your kidney function is reduced

2. **Add spironolactone**:
   - This medication blocks aldosterone, a hormone that raises blood pressure
   - Studies show it's the most effective add-on medication for resistant HTN
   - Side effects may include breast tenderness and high potassium (requires blood tests)
   - Alternative: Eplerenone (fewer side effects)

3. **Treat underlying causes**:
   - CPAP machine for sleep apnea
   - Surgery for hormone-producing tumors
   - Procedures for blocked kidney arteries

4. **Intensify lifestyle changes**:
   - Strict low-sodium diet (<1500 mg/day)
   - Weight loss if overweight
   - Regular exercise

5. **Other options if needed**:
   - Beta-blockers
   - Additional medications like clonidine
   - In selected cases, a procedure called renal denervation

**Follow-up:**
You will need more frequent monitoring, including home blood pressure checks. Despite treatment, your cardiovascular risk may still be higher than average, so managing other risk factors (cholesterol, diabetes, smoking) is very important.`,
        intermediate: `**Pharmacological Treatment Algorithm:**

**Step 1: Optimize Diuretic Therapy**

Switch thiazide:
- Change hydrochlorothiazide to chlorthalidone 25 mg daily (more potent, longer half-life 40-60h vs 6-15h)
- OR indapamide 1.25-2.5 mg daily (effective, fewer metabolic side effects)

Add loop diuretic if:
- eGFR <45 mL/min/1.73m2
- Significant volume overload
- Torsemide preferred over furosemide (better bioavailability, longer duration)
- Consider twice daily dosing for sustained effect

Ensure adequate diuresis:
- Clinical volume assessment
- Check for peripheral edema
- Monitor weight trends

**Step 2: Add Mineralocorticoid Receptor Antagonist (MRA)**

Spironolactone (PATHWAY-2 trial - first choice):
- Start 25 mg daily
- May increase to 50 mg if needed and tolerated
- Expected BP reduction: ~8-10/4-5 mmHg (superior to doxazosin or bisoprolol)
- Monitor: Potassium and creatinine at 1-2 weeks, then monthly x3, then quarterly
- Side effects: Gynecomastia, breast tenderness, sexual dysfunction, hyperkalemia
- Hyperkalemia management: If K+ 5.5-6.0, reduce dose or hold; dietary counseling; consider potassium binder (patiromer, SZC) if recurrent

Eplerenone (alternative):
- 50-100 mg daily (may divide BID)
- Fewer endocrine side effects (selective for mineralocorticoid receptor)
- Less potent than spironolactone
- Higher cost

Amiloride:
- 5-10 mg daily
- Direct ENaC blocker (different mechanism than MRAs)
- Alternative if spironolactone not tolerated

Contraindications to MRA: Severe CKD (eGFR <30), baseline K+ >5.0, Addison disease

**Step 3: Alternative Add-On Agents (if needed)**

Beta-blockers:
- Particularly if concomitant CAD, HFrEF, AF
- Cardioselective (metoprolol, bisoprolol) or vasodilatory (carvedilol, nebivolol)
- Not first-line for uncomplicated RH

Central alpha-agonists:
- Clonidine: 0.1-0.3 mg BID or weekly patch (Catapres-TTS)
- Guanfacine ER: 1-4 mg daily (less sedating)
- Effective but sedation, dry mouth, rebound hypertension risk with non-adherence

Direct vasodilators:
- Hydralazine: 25-100 mg BID-TID
  - Lupus-like syndrome risk (dose and duration related)
  - Tachyphylaxis
  - Requires beta-blocker (reflex tachycardia) and diuretic (fluid retention)
- Minoxidil: 2.5-10 mg BID
  - Very potent, reserved for refractory cases
  - Requires loop diuretic and beta-blocker
  - Side effects: Hirsutism, edema, pericardial effusion

Combined alpha/beta-blocker:
- Labetalol: 200-800 mg BID
- Useful in pregnancy and refractory HTN
- Side effects: Orthostatic hypotension, fatigue

Alpha-blockers:
- Doxazosin: 1-8 mg daily
- Useful with BPH
- Caution: Orthostatic hypotension (especially first dose), heart failure exacerbation (ALLHAT)

**Step 4: Device-Based Therapies**

Renal denervation (RDN):
- Catheter-based ablation of renal sympathetic nerves (radiofrequency, ultrasound, or chemical)
- Rationale: Interrupt efferent sympathetic and afferent sensory fibers
- Evidence: SPYRAL HTN-ON MED, RADIANCE-HTN trials show modest benefit (~5-10 mmHg) sustained to 3 years
- Patient selection: True resistant HTN after excluding pseudoresistance; stable medication regimen; suitable renal anatomy
- Not effective in: Isolated systolic HTN without elevated renin, extensive renal artery disease
- Generally safe; rare complications: renal artery dissection, pseudoaneurysm

Baroreflex activation therapy (BAT):
- Carotid sinus stimulation
- Limited availability; role not established

**Lifestyle Intensification:**
- Strict sodium restriction: <1500 mg/day
- Weight loss if overweight: Target BMI <25
- Exercise: 150 min/week moderate aerobic activity
- Alcohol restriction: </=1-2 drinks/day
- CPAP if OSA present (can significantly improve BP control)
- Stress management techniques`,
        professional: `**Advanced Pharmacological Strategies**

**Sequential Nephron Blockade:**
In volume-expanded resistant HTN with reduced GFR, combining diuretics that act at different nephron sites can be effective:
- Thiazide (distal convoluted tubule) + loop diuretic (thick ascending limb)
- Metolazone particularly effective (blocks same site as thiazide but more potent in low GFR)
- Risk: Volume depletion, electrolyte disturbances (hypokalemia, hyponatremia, hypomagnesemia)
- Requires close monitoring

**Alternative Medication Classes:**

Direct renin inhibitor:
- Aliskiren: Rarely used; contraindicated with ACE-I or ARB; diabetes and ACE-I/ARB combination showed harm (ALTITUDE trial)

Endothelin antagonists:
- Not approved for RH; investigated in resistant/salt-sensitive HTN; darusentan showed efficacy but significant edema

Nitric oxide donors:
- Not standard therapy; research ongoing for resistant HTN

**Hyperkalemia Management with MRAs:**
Challenge: MRAs most effective for RH but hyperkalemia limits use, especially in CKD.

Strategies to enable MRA use:
1. Dietary counseling: Limit high potassium foods
2. Loop diuretics: Promote kaliuresis
3. Reduce ACE-I/ARB dose if needed (balance proteinuria/CV protection)
4. Potassium binders:
   - Patiromer (Veltassa): 8.4-25.2 g daily; binds K+ in GI tract
   - Sodium zirconium cyclosilicate (Lokelma): 10 g daily; exchanges Na+ for K+
   - May allow continued MRA use in CKD patients with recurrent hyperkalemia

**Special Populations:**

Resistant HTN in CKD:
- Very high prevalence due to volume expansion, RAAS activation, vascular stiffness
- Loop diuretics essential when eGFR <30
- Higher risk of hyperkalemia with MRA; consider potassium binders to enable use
- Higher risk of pseudoresistance from arterial stiffness (isolated systolic HTN with low diastolic)

Resistant HTN in obesity:
- Central obesity strongly associated with RH
- Weight loss most effective intervention (bariatric surgery can normalize BP)
- High prevalence of OSA requiring treatment
- Higher diuretic requirements
- Spironolactone particularly effective (PATHWAY-2 subanalysis showed greater benefit in obesity)

Resistant HTN in elderly:
- Very common due to arterial stiffness, multiple comorbidities
- Higher risk of orthostatic hypotension; always measure standing BP
- Isolated systolic HTN most common pattern
- Avoid overtreatment (J-curve concerns with diastolic <60, especially if CAD)
- Renal denervation may be less effective in very elderly due to vascular changes

**Prognosis and Monitoring:**
Patients with RH have CV risk 2-3x higher than controlled HTN despite treatment. Requires:
- More frequent monitoring: every 2-4 weeks during medication adjustments, then every 1-3 months once stable
- Home BP monitoring essential
- Aggressive management of other CV risk factors (lipids, diabetes, smoking)
- Consider cardiology or hypertension specialist referral

**Research and Future Directions:**
- Novel agents: SGLT2 inhibitors show BP lowering and may have role in RH; endothelin antagonists under investigation
- Device therapies: Improved patient selection for RDN; ongoing trials of carotid body denervation, deep brain stimulation
- Genetics: Pharmacogenomic approaches to identify optimal drug classes for individual patients`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'kidneys', structureName: 'Kidneys', linkText: 'Kidneys', relevance: 'Volume expansion and secondary aldosteronism' },
    { structureId: 'adrenal-glands', structureName: 'Adrenal Glands', linkText: 'Adrenal Glands', relevance: 'Primary aldosteronism evaluation' },
    { structureId: 'renal-artery', structureName: 'Renal Artery', linkText: 'Renal Arteries', relevance: 'Renovascular disease screening' },
    { structureId: 'heart', structureName: 'Heart', linkText: 'Heart', relevance: 'Increased CV risk target organ' },
  ],
  references: [
    {
      referenceId: 'pathway-2-trial',
      type: 'journal-article',
      title: 'Spironolactone versus placebo, bisoprolol, and doxazosin for drug-resistant hypertension',
      authors: 'Williams B, et al.',
      source: 'The Lancet',
      year: 2015,
      citation: 'Williams B, et al. Spironolactone versus placebo, bisoprolol, and doxazosin to determine the optimal treatment for drug-resistant hypertension (PATHWAY-2). Lancet. 2015;386:2059-2068.',
    },
    {
      referenceId: 'spyral-htn-on-med',
      type: 'journal-article',
      title: 'Catheter-based renal denervation in patients with uncontrolled hypertension receiving antihypertensive medications',
      authors: 'Kandzari DE, et al.',
      source: 'The Lancet',
      year: 2018,
      citation: 'Kandzari DE, et al. Catheter-based renal denervation in patients with uncontrolled hypertension receiving antihypertensive medications (SPYRAL HTN-ON MED). Lancet. 2018;391:2166-2175.',
    },
    {
      referenceId: 'radiance-htn-solo',
      type: 'journal-article',
      title: 'Endovascular ultrasound renal denervation to treat hypertension',
      authors: 'Azizi M, et al.',
      source: 'The Lancet',
      year: 2018,
      citation: 'Azizi M, et al. Endovascular ultrasound renal denervation to treat hypertension (RADIANCE-HTN SOLO). Lancet. 2018;391:2335-2345.',
    },
  ],
  relatedEntries: [
    { entryId: 'hypertension', entryType: 'condition', name: 'Hypertension', relationship: 'similar-to' },
    { entryId: 'primary-aldosteronism', entryType: 'condition', name: 'Primary Aldosteronism', relationship: 'causes' },
    { entryId: 'obstructive-sleep-apnea', entryType: 'condition', name: 'Obstructive Sleep Apnea', relationship: 'causes' },
  ],
  searchMetadata: {
    primaryKeywords: ['resistant hypertension', 'refractory hypertension', 'difficult to treat BP', 'spironolactone resistant'],
    secondaryKeywords: ['PATHWAY-2', 'renal denervation', 'true resistant HTN', 'pseudoresistance'],
    synonyms: ['treatment-resistant hypertension', 'difficult-to-control hypertension', 'refractory hypertension'],
    tags: ['cardiology', 'cardiovascular', 'resistant disease', 'specialized care'],
    searchBoost: 1.0,
  },
  clinicalImportance: 'important',
  reviewStatus: 'approved',
  version: '1.0.0',
  lastUpdated: '2026-02-02',
  author: 'SOMA Medical Encyclopedia',
};


// ═══════════════════════════════════════════════════════════════════════════════
// HYPERTENSIVE EMERGENCY ENTRY
// ═══════════════════════════════════════════════════════════════════════════════

export const hypertensiveEmergencyEntry: EncyclopediaEntry = {
  entryId: 'hypertensive-emergency',
  name: 'Hypertensive Emergency',
  aliases: ['malignant hypertension', 'accelerated hypertension', 'hypertensive crisis'],
  entryType: 'condition',
  category: 'emergency',
  subcategory: 'cardiovascular-emergency',
  summary: 'A life-threatening condition characterized by severely elevated blood pressure with acute target organ damage requiring immediate IV treatment.',
  overview: {
    patient: 'A hypertensive emergency is a medical crisis where blood pressure is extremely high (usually 180/120 mmHg or higher) AND there is evidence of damage to vital organs like the brain, heart, kidneys, or eyes. This is different from simply having high blood pressure numbers - the key is that organs are being actively damaged. Symptoms may include severe headache, confusion, chest pain, shortness of breath, vision changes, seizures, or decreased urination. This requires immediate emergency medical care, usually in an intensive care unit. Treatment involves carefully lowering blood pressure with intravenous medications over several hours to days. It is different from hypertensive urgency, where blood pressure is high but there is no organ damage.',
    intermediate: 'Hypertensive emergency is defined as severe hypertension (typically SBP >=180 mmHg and/or DBP >=120 mmHg) with evidence of acute or ongoing target organ damage. This is distinct from hypertensive urgency (severe BP elevation without target organ damage). The condition requires immediate hospitalization, intensive care monitoring, and controlled IV antihypertensive therapy. Target organ manifestations include hypertensive encephalopathy, acute stroke (ischemic or hemorrhagic), acute coronary syndrome, acute heart failure, acute kidney injury, aortic dissection, eclampsia, and retinal damage with papilledema. The key therapeutic principle is controlled, gradual BP reduction - typically 10-20% reduction in mean arterial pressure over the first hour, followed by gradual further reduction over 24-48 hours. Overly aggressive or rapid reduction can precipitate cerebral, coronary, or renal ischemia.',
    professional: 'Hypertensive emergency represents a true medical emergency characterized by severe arterial hypertension (SBP >=180 and/or DBP >=120 mmHg) with acute or rapidly progressive target organ dysfunction. The pathophysiology involves failure of normal autoregulatory mechanisms, leading to endothelial injury, fibrinoid necrosis of arterioles, and microvascular thrombosis. Clinical presentations include: (1) Neurologic - hypertensive encephalopathy (breakthrough hyperperfusion, vasogenic edema/PRES), ischemic stroke, intracerebral hemorrhage, subarachnoid hemorrhage; (2) Cardiovascular - acute aortic dissection, acute coronary syndrome, acute decompensated heart failure with pulmonary edema; (3) Renal - acute kidney injury, microangiopathic hemolytic anemia; (4) Pregnancy-related - eclampsia, severe preeclampsia; (5) Retinal - papilledema indicating malignant/accelerated phase. Management requires ICU admission, arterial line for continuous BP monitoring, and titratable IV antihypertensives. Target: reduce MAP by no more than 10-20% in first hour, then additional 5-15% over next 23 hours. Exceptions: aortic dissection (immediate reduction to SBP <120, HR <60), and acute ischemic stroke (higher thresholds, cautious reduction to prevent penumbral hypoperfusion). Available agents include nicardipine, clevidipine, labetalol, esmolol, nitroprusside, nitroglycerin, fenoldopam, hydralazine, and phentolamine - selection based on specific clinical scenario, comorbidities, and monitoring capabilities.',
  },
  content: [
    {
      title: 'Clinical Presentation and Diagnosis',
      content: {
        patient: `**Symptoms of Hypertensive Emergency:**

The symptoms depend on which organs are being damaged:

**Brain-related symptoms:**
- Severe headache that comes on suddenly
- Confusion or difficulty thinking
- Visual changes or vision loss
- Seizures
- Weakness or numbness on one side of the body
- Stroke symptoms

**Heart-related symptoms:**
- Chest pain or pressure
- Shortness of breath, especially when lying down
- Rapid or irregular heartbeat
- Coughing up pink frothy fluid

**Other warning signs:**
- Severe anxiety or restlessness
- Nausea and vomiting
- Decreased urine output
- Severe nosebleeds

**Malignant Hypertension** is a specific type where there is swelling of the optic disc (papilledema) visible during eye examination, indicating severe brain involvement.

**How is it different from Hypertensive Urgency?**
- Emergency: Very high BP + organ damage (symptoms present) - requires ICU care
- Urgency: Very high BP but NO organ damage (no symptoms) - managed with oral medications, not an emergency

If you have severely high blood pressure with any of these symptoms, call emergency services immediately.`,
        intermediate: `**Target Organ Manifestations:**

**Neurologic (most common):**
- Hypertensive encephalopathy: Insidious onset over 24-48 hours of headache, nausea, vomiting, confusion, visual disturbances, seizures, transient focal deficits; due to breakthrough hyperperfusion and vasogenic edema (PRES); reversible if treated promptly
- Acute ischemic stroke: Focal deficits based on vascular territory; BP management controversial - permissive hypertension often allowed
- Intracerebral hemorrhage: Sudden severe headache, focal deficits, decreased consciousness; HTN most common cause
- Subarachnoid hemorrhage: "Thunderclap" headache, meningeal signs
- Posterior reversible encephalopathy syndrome (PRES): Headache, altered mental status, seizures, visual loss; MRI shows T2 hyperintensity in posterior parietal-occipital white matter

**Cardiovascular:**
- Acute aortic dissection: Tearing chest/back pain, pulse deficits, new neurologic deficits; most time-critical emergency
- Acute coronary syndrome: Chest pain, dyspnea, diaphoresis
- Acute pulmonary edema: Severe dyspnea, orthopnea, pink frothy sputum, diffuse rales

**Renal:**
- Acute kidney injury: Oliguria, rising creatinine, hematuria, proteinuria
- Microangiopathic hemolytic anemia: Schistocytes on peripheral smear, thrombocytopenia

**Ophthalmologic:**
- Hypertensive retinopathy Grade IV: Papilledema (optic disc swelling), hemorrhages, exudates, cotton-wool spots
- Acute vision loss from retinal artery occlusion or optic neuropathy

**Pregnancy-related:**
- Eclampsia: Seizures in setting of preeclampsia
- Severe preeclampsia with symptoms

**Differentiating Emergency from Urgency:**

Hypertensive Emergency:
- Severe HTN (>=180/120) + acute target organ damage
- Requires ICU admission, IV medications, continuous monitoring

Hypertensive Urgency:
- Severe HTN (>=180/120) WITHOUT target organ damage
- No acute symptoms or signs of organ injury
- Managed with oral medications, gradual BP reduction over 24-48 hours
- Does NOT require emergency department visit or IV therapy`,
        professional: `**Pathophysiology and Clinical Syndromes**

**Breakthrough of Autoregulation:**
Normal cerebral autoregulation maintains constant cerebral blood flow (CBF) across a range of mean arterial pressures (typically 60-160 mmHg). In chronic HTN, this range shifts rightward (autoregulatory curve reset to higher pressures). In malignant/accelerated HTN, when pressure exceeds the upper limit of autoregulation, breakthrough hyperperfusion occurs.

Consequences:
- Vasogenic edema (blood-brain barrier disruption)
- Endothelial injury
- Fibrinoid necrosis of arterioles
- Microvascular thrombosis
- PREDOMINANTLY affects posterior circulation (poorer sympathetic innervation) leading to PRES

**Specific Clinical Syndromes:**

**Hypertensive Encephalopathy:**
- Clinical triad: Severe HTN + altered mental status + papilledema
- Pathophysiology: Breakthrough hyperperfusion leads to vasogenic edema
- MRI: T2/FLAIR hyperintensity in bilateral parietal-occipital white matter (posterior predilection), also cerebellum, brainstem, basal ganglia may be affected
- DWI typically normal (vasogenic not cytotoxic edema)
- Diagnosis of exclusion: Must rule out stroke, mass lesion, seizure, toxic-metabolic encephalopathy
- Treatment: Reduce MAP 10-20% in first hour

**Malignant (Accelerated) Hypertension:**
- Historical distinction: Papilledema present (malignant) vs absent (accelerated)
- Modern usage: Often interchangeable
- Characterized by: (1) severe HTN (usually DBP >130), (2) grade III-IV retinopathy, (3) renal involvement, (4) microangiopathic hemolytic anemia
- Pathology: Fibrinoid necrosis of arterioles, "onion-skin" intimal hyperplasia
- Ophthalmic emergency requiring immediate BP reduction

**Acute Aortic Dissection:**
- Most time-critical hypertensive emergency
- Chronic HTN present in 70-80% of cases
- Stanford Type A (proximal) and Type B (distal)
- Immediate goals: HR <60 bpm, SBP <120 mmHg (if tolerated) to reduce shear stress (dP/dt)
- Beta-blockade FIRST (prevent reflex tachycardia), then add vasodilator if needed
- Type A requires emergent surgery

**Acute Stroke:**
- Ischemic stroke: Permissive hypertension generally allowed unless thrombolysis candidate or >220/120
- Intracerebral hemorrhage: SBP target 140-160 (INTERACT-2, ATACH-2 trials)
- Rapid reduction can extend ischemic penumbra or worsen outcomes

**Eclampsia/Preeclampsia:**
- Unique pathophysiology: Endothelial dysfunction, vasospasm, coagulation abnormalities
- Magnesium sulfate mandatory for seizure prophylaxis/treatment
- BP target: <160/105 (avoid compromising uteroplacental perfusion)`,
      },
    },
    {
      title: 'Treatment and Management',
      content: {
        patient: `**If You Suspect Hypertensive Emergency:**

Call emergency services immediately. This is not something to manage at home.

**In the Hospital:**

1. **Immediate care in ICU**: You will be admitted to an intensive care unit with close monitoring

2. **Continuous blood pressure monitoring**: An arterial line (small tube in an artery) allows continuous BP measurement

3. **IV medications**: Medications given through a vein to lower blood pressure carefully:
   - Nicardipine or clevidipine
   - Labetalol
   - Nitroglycerin
   - Other medications as needed

4. **Careful, gradual reduction**: Blood pressure is lowered slowly:
   - First hour: Reduce by about 10-20%
   - Next 2-6 hours: Gradually lower toward 160/100-110
   - 24-48 hours: Reach closer to normal levels

Lowering blood pressure too fast can cause strokes or organ damage.

5. **Monitoring organs**: Tests to check heart, brain, kidneys, and eyes

6. **Finding the cause**: Checking for what triggered the emergency

**Recovery:**
With proper treatment, most people recover. However, you will need long-term treatment to prevent it from happening again.

**Prevention:**
- Take blood pressure medications as prescribed
- Regular monitoring at home
- Lifestyle modifications
- Regular doctor visits`,
        intermediate: `**Management Principles:**

**Setting:** Intensive care unit with:
- Continuous arterial BP monitoring (arterial line)
- Cardiac telemetry
- Frequent neuro checks
- Foley catheter for urine output monitoring
- Airway management capability

**Blood Pressure Targets:**

General rule for most hypertensive emergencies:
- Reduce MAP by 10-20% in first hour
- Then additional 5-15% over next 23 hours
- Do NOT normalize BP acutely - risk of cerebral, coronary, renal hypoperfusion

**Important Exceptions:**

1. Aortic dissection:
   - Immediate: SBP <120, HR <60 (if tolerated)
   - Beta-blockade FIRST, then vasodilator

2. Acute ischemic stroke:
   - Non-thrombolysis: Permissive hypertension; treat only if >220/120
   - Thrombolysis candidate: <185/110 before; <180/105 during/after
   - Target ~15% reduction over 24 hours if treatment needed

3. Intracerebral hemorrhage:
   - SBP 150-220: Target <140
   - SBP >220: Cautious reduction

4. Preeclampsia/Eclampsia:
   - Target <160/105
   - Magnesium sulfate for seizure prevention

**IV Antihypertensive Agents:**

| Drug | Typical Dose | Onset | Duration | Best For |
|------|-------------|-------|----------|----------|
| Nicardipine | 5 mg/hr, titrate to 15 mg/hr | 1-2 min | 10-20 min | Most emergencies |
| Clevidipine | 1-2 mg/hr, max 32 mg/hr | 1-2 min | 5-15 min | Rapid titration needed |
| Labetalol | 20 mg IV, then 20-80 mg q10min | 5 min | 2-6 hr | Dissection, pregnancy |
| Esmolol | 500 mcg/kg bolus, 50-300 mcg/kg/min | 1-2 min | 10-20 min | Ultra-short acting |
| Nitroprusside | 0.25-10 mcg/kg/min | Seconds | 1-2 min | Most potent; avoid neuro |
| Nitroglycerin | 5-100 mcg/min | 2-5 min | 5-10 min | ACS, pulmonary edema |
| Fenoldopam | 0.1-0.3 mcg/kg/min | 5 min | 30-60 min | Renal impairment |
| Hydralazine | 10-20 mg IV q20-40min | 10-20 min | 3-8 hr | Pregnancy; less preferred |

**Precipitating Cause Evaluation:**
- Medication nonadherence (most common)
- Acute glomerulonephritis
- Renovascular disease
- Pheochromocytoma crisis
- Drug-induced (cocaine, MAOIs, stimulants)
- Postoperative causes`,
        professional: `**Pharmacological Management by Clinical Scenario**

**Hypertensive Encephalopathy/PRES:**
- Preferred: Nicardipine, labetalol, clevidipine (titrable, no ICP increase)
- AVOID: Nitroprusside (increases ICP), hydralazine (unpredictable)
- Target: MAP reduction 10-20%; clinical improvement within 6 hours
- MRI improvement: Days to weeks

**Acute Ischemic Stroke:**
- Non-thrombolysis: Permissive hypertension generally allowed unless >220/120 or other emergency indication
- Thrombolysis eligible: Treat if >185/110 before; maintain <180/105 during/after
- Preferred: Labetalol, nicardipine (titrable)
- Target: ~15% reduction over 24 hours if treatment needed
- Rationale: Ischemic penumbra perfusion dependent on collateral pressure; precipitous drops extend infarction

**Intracerebral Hemorrhage:**
- INTERACT-2 and ATACH-2: Intensive BP lowering (SBP <140) safe but marginal benefit
- Current guidelines: If SBP 150-220, target 140; if >220, cautious reduction
- Preferred: Nicardipine or clevidipine for precise titration
- Avoid rapid drops

**Subarachnoid Hemorrhage:**
- Pre-treatment: SBP <160 or MAP <110 before aneurysm secured
- Nimodipine (oral) for vasospasm prophylaxis
- Triple-H therapy (hypertension, hypervolemia, hemodilution) for vasospasm after aneurysm secured

**Acute Aortic Dissection:**
- Immediate: HR <60 bpm, SBP <120 mmHg (if tolerated)
- CRITICAL: Beta-blockade FIRST (esmolol, labetalol)
  - Prevents reflex tachycardia and increased contractility (reduces dP/dt)
- THEN add vasodilator if needed (nicardipine, nitroprusside)
- Type A: Emergent surgery
- Type B: Medical management primarily

**Acute Coronary Syndrome:**
- Target: <140/90 or 10-20% reduction
- Nitroglycerin first-line (coronary vasodilation)
- Beta-blockers (reduce demand)
- Avoid excessive hypotension (coronary perfusion diastolic-dependent)
- ACE-I beneficial for remodeling

**Acute Pulmonary Edema:**
- Nitroglycerin (venodilation reduces preload)
- Loop diuretics
- Nitroprusside or nicardipine if additional afterload reduction needed
- Non-invasive ventilation (CPAP/BiPAP) reduces preload/afterload
- Avoid beta-blockers initially (negative inotropy)

**Acute Kidney Injury:**
- Avoid ACE-I/ARB if bilateral RAS or volume depletion
- Fenoldopam may preserve renal perfusion
- Loop diuretics if volume overloaded
- Consider dialysis if refractory

**Preeclampsia/Eclampsia:**
- Magnesium sulfate: Loading dose 4-6g IV, then 1-2 g/hr infusion
- BP control: Labetalol, hydralazine, or nifedipine
- Target: <160/105 (not lower - maintain uteroplacental perfusion)
- Delivery: Definitive treatment when appropriate gestational age

**Scleroderma Renal Crisis:**
- ACE-I (captopril, enalaprilat) mandatory and life-saving despite renal function
- Continue even if creatinine rises
- Avoid high-dose steroids (precipitate crisis)

**Sympathomimetic/Catecholamine Excess:**
- Cocaine, amphetamines, MAO inhibitor-tyramine interaction, pheochromocytoma crisis, clonidine withdrawal
- Alpha-blockade first (phentolamine 5-15 mg IV, labetalol)
- AVOID pure beta-blockers (unopposed alpha stimulation worsens HTN)
- Nitroglycerin, nicardipine adjunctive

**Specific Drug Considerations:**

**Nitroprusside:**
- Most potent agent; onset/offset seconds
- Cyanide toxicity risk: >2 mcg/kg/min or >48-72 hours duration
- Thiocyanate toxicity in renal failure
- Increases ICP - avoid in most neurologic emergencies
- Largely replaced by nicardipine/clevidipine

**Nicardipine vs Clevidipine:**
- Both: Rapid onset/offset, titratable, safe in most scenarios
- Nicardipine: Longer duration (10-20 min after stopping), hepatic metabolism
- Clevidipine: Ultra-short (5-15 min), blood esterase metabolism (no organ adjustment), lipid emulsion formulation
- Clevidipine contraindicated: Soy/egg allergy, defective lipid metabolism

**Labetalol:**
- Combined alpha-1 and non-selective beta-blockade
- Good for: Aortic dissection, pregnancy, pheochromocytoma, sympathomimetic excess
- Avoid: Acute heart failure, asthma, bradycardia, heart block
- Oral bioavailability low; IV dosing differs from oral

**Fenoldopam:**
- Dopamine-1 receptor agonist
- Renal vasodilation (increases renal blood flow, preserves GFR)
- No rebound hypertension after stopping
- Good for: Renal impairment, postoperative HTN

**Transition to Oral Therapy:**
Once stabilized (usually 8-24 hours), transition to oral regimen:
- Start oral agents while weaning IV
- Ensure 24-hour coverage
- Typical combination: ACE-I or ARB + thiazide or CCB
- Comprehensive discharge planning with close follow-up`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'brain', structureName: 'Brain', linkText: 'Brain', relevance: 'Hypertensive encephalopathy, stroke' },
    { structureId: 'heart', structureName: 'Heart', linkText: 'Heart', relevance: 'Acute coronary syndrome, pulmonary edema' },
    { structureId: 'aorta', structureName: 'Aorta', linkText: 'Aorta', relevance: 'Aortic dissection' },
    { structureId: 'kidneys', structureName: 'Kidneys', linkText: 'Kidneys', relevance: 'Acute kidney injury' },
    { structureId: 'retina', structureName: 'Retina', linkText: 'Retina', relevance: 'Papilledema, malignant HTN' },
  ],
  references: [
    {
      referenceId: 'interact2-trial',
      type: 'journal-article',
      title: 'Intensive blood pressure reduction in acute cerebral hemorrhage trial',
      authors: 'Anderson CS, et al.',
      source: 'New England Journal of Medicine',
      year: 2013,
      citation: 'Anderson CS, et al. Rapid blood-pressure lowering in patients with acute intracerebral hemorrhage. N Engl J Med. 2013;368:2355-2365.',
    },
    {
      referenceId: 'atach2-trial',
      type: 'journal-article',
      title: 'Intensive blood-pressure lowering in patients with acute cerebral hemorrhage',
      authors: 'Qureshi AI, et al.',
      source: 'New England Journal of Medicine',
      year: 2016,
      citation: 'Qureshi AI, et al. Intensive blood-pressure lowering in patients with acute cerebral hemorrhage. N Engl J Med. 2016;375:1033-1043.',
    },
  ],
  relatedEntries: [
    { entryId: 'hypertension', entryType: 'condition', name: 'Hypertension', relationship: 'see-also' },
    { entryId: 'stroke', entryType: 'condition', name: 'Stroke', relationship: 'causes' },
    { entryId: 'heart-failure', entryType: 'condition', name: 'Heart Failure', relationship: 'causes' },
  ],
  searchMetadata: {
    primaryKeywords: ['hypertensive emergency', 'malignant hypertension', 'hypertensive crisis', 'accelerated hypertension'],
    secondaryKeywords: ['hypertensive encephalopathy', 'PRES', 'aortic dissection', 'IV antihypertensive'],
    synonyms: ['malignant HTN', 'accelerated HTN', 'hypertensive urgency vs emergency'],
    tags: ['emergency medicine', 'critical care', 'cardiovascular', 'neurology'],
    searchBoost: 1.2,
  },
  clinicalImportance: 'essential',
  reviewStatus: 'approved',
  version: '1.0.0',
  lastUpdated: '2026-02-02',
  author: 'SOMA Medical Encyclopedia',
};


// ═══════════════════════════════════════════════════════════════════════════════
// HYPERTENSION IN SPECIAL POPULATIONS ENTRY
// ═══════════════════════════════════════════════════════════════════════════════

export const hypertensionSpecialPopulationsEntry: EncyclopediaEntry = {
  entryId: 'hypertension-special-populations',
  name: 'Hypertension in Special Populations',
  aliases: ['pregnancy hypertension', 'pediatric hypertension', 'elderly hypertension', 'hypertension in African Americans'],
  entryType: 'condition',
  category: 'cardiovascular',
  subcategory: 'special-populations',
  summary: 'Management of hypertension in specific patient groups including pregnancy, elderly, children, African Americans, and patients with diabetes or kidney disease.',
  overview: {
    patient: 'High blood pressure affects different groups of people differently and requires tailored approaches. During pregnancy, high blood pressure can be dangerous for both mother and baby, requiring special medications and careful monitoring. In older adults, blood pressure targets may be adjusted to avoid dizziness and falls while still preventing stroke and heart disease. Children and teens are diagnosed using different criteria based on age and height. African Americans have higher rates of high blood pressure that tends to be more severe, and certain medications work better. People with diabetes or kidney disease need stricter blood pressure control to protect their organs. Your doctor will individualize your treatment based on your specific situation, age, other health conditions, and overall health goals.',
    intermediate: 'Hypertension management requires individualization for special populations. Pregnancy: Chronic HTN, gestational HTN, preeclampsia, and eclampsia are distinct entities with specific management. Safe medications include labetalol, nifedipine, and methyldopa; ACE-I/ARB are contraindicated. Delivery is definitive treatment for preeclampsia when gestationally appropriate. Elderly: Isolated systolic HTN is common due to arterial stiffness. Targets <130/80 if tolerated (SPRINT, STEP trials), but avoid overtreatment and check orthostatic BP. Indapamide preferred over HCTZ (HYVET trial). Pediatrics: BP percentiles based on age, sex, and height. Secondary causes more common than in adults. African Americans: Higher prevalence, earlier onset, greater severity. Respond better to thiazides and CCBs. Diabetes: Target <130/80; ACE-I or ARB first-line for renal protection; SGLT2 inhibitors and GLP-1 RAs provide additional BP lowering and CV/renal benefits. CKD: ACE-I/ARB first-line if albuminuria; careful monitoring of creatinine and potassium; loop diuretics if eGFR<30.',
    professional: 'Special population considerations are essential for optimal hypertension management. Pregnancy: Classification includes chronic HTN (pre-existing or <20 weeks), gestational HTN (>20 weeks without proteinuria), preeclampsia (HTN + proteinuria or severe features), and eclampsia (preeclampsia + seizures). First-line agents: Labetalol, extended-release nifedipine, methyldopa. Contraindicated: ACE-I, ARB, DRI (fetotoxic); atenolol (fetal growth restriction). Magnesium sulfate mandatory for eclampsia prevention/treatment. Target 120-160/80-105 (avoid compromising uteroplacental perfusion). Elderly: SPRINT and STEP support intensive targets (<130/80) if tolerated. Key considerations: orthostatic hypotension (always measure standing BP), frailty assessment, J-curve concerns with low diastolic BP (<60) particularly with CAD, indapamide preferred over HCTZ. Pediatrics: Definitions based on percentiles for age, sex, and height (<13 years) or adult thresholds (>=13 years). Secondary causes more common; comprehensive evaluation required. Treatment threshold: Stage 2, Stage 1 with symptoms/comorbidities, or persistent Stage 1 despite lifestyle. African Americans: Higher prevalence (40-45% vs 30%), earlier onset, more salt-sensitive HTN, greater target organ damage, higher stroke and CKD rates. Monotherapy response: Thiazides and CCBs >2x ACE-I/ARB response. Combination ACE-I/ARB + thiazide or CCB effective. Diabetes: ACE-I or ARB first-line (albuminuria reduction); SGLT2 inhibitors and GLP-1 RAs provide CV/renal protection with modest BP lowering. CKD: KDIGO target <130/80; ACE-I/ARB slow progression in albuminuric CKD; expect 20-30% creatinine rise with initiation (hemodynamic); loop diuretics preferred when eGFR<30; hyperkalemia management critical.',
  },
  content: [
    {
      title: 'Hypertension in Pregnancy',
      content: {
        patient: `**Types of High Blood Pressure in Pregnancy:**

1. **Chronic Hypertension**: You had high blood pressure before pregnancy or it started before 20 weeks. Continue safe blood pressure medications.

2. **Gestational Hypertension**: High blood pressure starts after 20 weeks but there is no protein in urine. Usually goes away after delivery.

3. **Preeclampsia**: High blood pressure after 20 weeks WITH protein in urine OR other organ problems. This is serious and needs close monitoring.

4. **Eclampsia**: Preeclampsia with seizures - a medical emergency.

**Warning Signs of Preeclampsia:**
- Severe headache that does not go away
- Vision changes (seeing spots, blurriness)
- Upper belly pain, especially on the right side
- Sudden weight gain or swelling in face and hands
- Nausea and vomiting in late pregnancy

**Safe Medications During Pregnancy:**
- Labetalol
- Nifedipine (extended-release)
- Methyldopa

**Medications to Avoid:**
- ACE inhibitors and ARBs (can harm baby's kidneys)
- Atenolol (can slow baby's growth)

**Treatment:**
Your doctor will monitor you closely with frequent visits, blood tests, and ultrasounds. You may need to deliver early if preeclampsia is severe. Delivery is the only cure for preeclampsia.

**After Delivery:**
Blood pressure may stay high for a few weeks. Preeclampsia increases your risk of high blood pressure and heart disease later in life, so continue regular check-ups.`,
        intermediate: `**Classification and Diagnosis:**

**Chronic Hypertension:**
- Pre-existing HTN or diagnosed <20 weeks gestation
- Persists >12 weeks postpartum
- Risk of superimposed preeclampsia

**Gestational Hypertension:**
- New-onset HTN >=140/90 after 20 weeks without proteinuria or severe features
- Usually resolves by 12 weeks postpartum
- May progress to preeclampsia

**Preeclampsia:**
- HTN after 20 weeks + proteinuria (>=300 mg/24hr or protein/creatinine ratio >=0.3)
- OR HTN + any severe feature even without proteinuria:
  - Thrombocytopenia (<100,000)
  - Renal insufficiency (creatinine >1.1 mg/dL or doubling)
  - Elevated liver enzymes (2x normal)
  - Pulmonary edema
  - New cerebral or visual symptoms
  - Severe range BP (>=160/110)

**Eclampsia:**
- Preeclampsia + new-onset grand mal seizures
- Can occur without prior warning signs
- Emergency requiring immediate magnesium sulfate

**Treatment:**

Blood pressure targets:
- Treat persistent >=140/90 or severe range >=160/110
- Target: 120-160/80-105 (avoid overtreatment compromising uteroplacental perfusion)

First-line agents:
1. Labetalol: Alpha- and beta-blockade; effective; well-tolerated
2. Extended-release nifedipine: CCB; effective; oral or sublingual
3. Methyldopa: Central alpha-agonist; long safety record; slower onset

Contraindicated:
- ACE inhibitors, ARBs, direct renin inhibitors (fetotoxic: renal agenesis, oligohydramnios, skull hypoplasia)
- Atenolol (fetal growth restriction, bradycardia)

**Magnesium Sulfate:**
- Indications: Eclampsia treatment, severe preeclampsia seizure prophylaxis
- Regimen: Loading dose 4-6g IV over 15-20 min, then maintenance 1-2 g/hr
- Monitoring: Deep tendon reflexes, respiratory rate (>12/min), urine output (>30 mL/hr)
- Toxicity signs: Loss of reflexes (first sign), respiratory depression, cardiac arrest
- Antidote: Calcium gluconate 1g IV

**Delivery Considerations:**
- Severe features at any gestational age: Deliver after maternal stabilization
- Without severe features at term (>=37 weeks): Deliver
- Without severe features preterm: Expectant management with close monitoring if stable
- Delivery is definitive treatment for preeclampsia

**Postpartum:**
- BP may remain elevated or worsen initially (fluid mobilization)
- Continue monitoring; may resume ACE-I/ARB postpartum (compatible with breastfeeding)
- Preeclampsia increases lifetime CV risk; ensure long-term follow-up`,
        professional: `**Pathophysiology and Management**

**Preeclampsia Pathophysiology:**
- Abnormal placentation: Incomplete trophoblast invasion of spiral arteries, leading to placental ischemia
- Anti-angiogenic state: Elevated soluble fms-like tyrosine kinase-1 (sFlt-1) and soluble endoglin; reduced placental growth factor (PlGF)
- Endothelial dysfunction: Systemic vascular resistance increase, proteinuria, edema
- Activation of coagulation and inflammatory cascades
- Multi-organ involvement: Brain (hyperreflexia, seizures), liver (HELLP syndrome), kidneys (proteinuria, renal failure), lungs (pulmonary edema), hematologic (thrombocytopenia, DIC)

**Risk Stratification:**
High-risk factors for preeclampsia:
- Prior preeclampsia
- Chronic HTN
- Diabetes (pre-gestational)
- Renal disease
- Autoimmune disease (SLE, APS)
- Multiple gestation
- First pregnancy
- Obesity
- Age extremes

**Prevention:**
Low-dose aspirin for high-risk nulliparous or those with prior preeclampsia (start 12-16 weeks, continue to delivery)

**HELLP Syndrome:**
- Hemolysis, Elevated Liver enzymes, Low Platelets
- Variant of severe preeclampsia
- May occur without significant HTN
- Management: Delivery if >=34 weeks or maternal deterioration; corticosteroids for fetal maturation if <34 weeks; supportive care

**Postpartum Preeclampsia/Eclampsia:**
- Can occur up to 6 weeks postpartum
- Often presents with headache, visual changes, HTN
- Same treatment principles; magnesium sulfate still effective

**Long-term Cardiovascular Risk:**
- Preeclampsia increases lifetime risk of HTN, CAD, stroke, CKD
- 2x risk of CV death
- Requires enhanced surveillance and risk factor modification postpartum

**Chronic Hypertension in Pregnancy:**
- Superimposed preeclampsia develops in 20-50%
- Continue prepregnancy antihypertensives except ACE-I/ARB
- Target <140/90 or severe range <160/110
- Close monitoring for fetal growth, superimposed preeclampsia`,
      },
    },
    {
      title: 'Hypertension in Elderly, Children, and Ethnic Groups',
      content: {
        patient: `**Elderly:**
As people age, blood vessels become stiffer, often leading to high systolic blood pressure with normal or low diastolic pressure. This is called isolated systolic hypertension. Treatment is important to prevent stroke and heart disease, but targets may be adjusted based on overall health. Your doctor will check your blood pressure sitting and standing to avoid dizziness. The goal is usually less than 130/80 if you are healthy and tolerate treatment well.

**Children and Teens:**
High blood pressure in children is different from adults. Doctors use special charts based on age, sex, and height rather than fixed numbers. Causes are often different too - kidney problems are more common causes in children. Treatment usually starts with lifestyle changes. If medication is needed, the same types used in adults are often used, but doses are adjusted for size.

**African Americans:**
High blood pressure is more common, starts earlier, and is more severe in African Americans. It is also more likely to cause kidney disease, stroke, and heart disease. Certain medications work better, including thiazide water pills and calcium channel blockers. Addressing barriers to care and healthy lifestyle options is important.`,
        intermediate: `**Hypertension in the Elderly:**

Characteristics:
- Predominantly isolated systolic HTN (stiff arteries, widened pulse pressure)
- Increased arterial stiffness (pulse wave velocity increases with age)
- Orthostatic hypotension common (baroreflex impairment)
- White coat effect more common

Treatment targets:
- ACC/AHA: <130/80 if tolerated (SPRINT included elderly up to age 80+)
- ESC/ESH: <140/90; individualized for frailty
- HYVET trial (>=80 years): Indapamide +/- perindopril reduced stroke, HF, mortality

Special considerations:
- Always check orthostatic BP (lying/sitting and standing)
- Avoid overtreatment: J-curve concerns with diastolic <60, especially if CAD
- Start low, go slow
- Indapamide preferred over HCTZ in very elderly
- Balance benefits vs fall risk, cognitive effects

**Hypertension in Children and Adolescents:**

Definitions (AAP 2017):
- Age <13 years: >=95th percentile for age, sex, and height on >=3 occasions
- Age >=13 years: >=130/80 (adult thresholds)
- Staging: Stage 1 (95th percentile to <95th + 12 mmHg or 130/80 to 139/89); Stage 2 (>95th + 12 mmHg or >=140/90)

Evaluation:
- Secondary causes more common than in adults (especially <6 years or Stage 2)
- Most common secondary cause: Renal parenchymal disease
- Workup: Renal function, urinalysis, renal ultrasound, echocardiogram
- Additional testing based on clinical suspicion

Treatment:
- Lifestyle modification first-line for all
- Pharmacotherapy if symptomatic, secondary HTN, target organ damage, diabetes, persistent Stage 1 despite lifestyle, or Stage 2
- Agents: ACE-I, ARB, CCB, thiazides, beta-blockers (all off-label but commonly used)
- Targets: Reduce <95th percentile or <130/80 in adolescents

**Hypertension in African Americans:**

Epidemiology:
- Prevalence: 40-45% vs 30% general population
- Earlier onset, more severe disease
- Greater target organ damage, higher stroke and CKD rates

Pathophysiology:
- Greater salt sensitivity (50-75% vs 25-50%)
- Higher rates of low-renin HTN
- Greater vascular stiffness
- Socioeconomic and healthcare access factors

Treatment considerations:
- Monotherapy response: Thiazides and CCBs >2x ACE-I/ARB response
- ACE-I or ARB + thiazide or CCB effective combinations
- Combination therapy often required
- Higher doses of spironolactone may be needed for resistant HTN
- Address social determinants: Food access, medication cost, healthcare access`,
        professional: `**Advanced Special Population Considerations**

**Frailty and Hypertension in Elderly:**
Frailty assessment (Fried criteria: unintentional weight loss, weakness, exhaustion, slow walking speed, low physical activity) should guide treatment intensity. Shared decision-making regarding BP targets in frail elderly. SPRINT excluded nursing home residents and those with significant cognitive impairment; generalizability to very frail elderly uncertain. Deprescribing may be appropriate in very elderly with limited life expectancy.

**Pediatric Secondary Hypertension:**
- Renovascular disease: Fibromuscular dysplasia more common than atherosclerosis
- Coarctation of aorta: Check BP in all 4 extremities; radiofemoral delay
- Endocrine causes: Pheochromocytoma, hyperthyroidism, hyperaldosteronism
- Medication-induced: ADHD stimulants, corticosteroids, oral contraceptives
- Genetic causes: Liddle syndrome, Gordon syndrome (often present in childhood)

**Health Disparities in African American HTN:**
- Biological factors: APOL1 high-risk variants increase CKD risk; greater salt sensitivity
- Social determinants: Food deserts, healthcare access, chronic stress from discrimination, occupational factors
- Intervention approaches: Community health workers, church-based programs, telemedicine, team-based care

**Hypertension in Diabetes:**

Target: <130/80 (ADA/ACC/AHA)

Pharmacologic approach:
- ACE-I or ARB first-line (albuminuria reduction independent of BP)
- SGLT2 inhibitors: BP reduction 3-5 mmHg, plus CV and renal benefits
- GLP-1 receptor agonists: Modest BP reduction, CV benefit
- Thiazides effective but may worsen glycemic control slightly
- Beta-blockers mask hypoglycemia symptoms
- Resistant HTN common; evaluate for OSA, primary aldosteronism

**Hypertension in Chronic Kidney Disease:**

Target: <130/80 (KDIGO 2021)

Special considerations:
- ACE-I or ARB first-line if albuminuria present (slows progression)
- Monitor creatinine and potassium closely:
  - Expect 20-30% rise in creatinine with initiation (hemodynamic effect)
  - If stabilizes, continue
  - If continues rising or >30% rise, evaluate for renovascular disease
- Loop diuretics preferred when eGFR <30 or significant volume overload
- Volume overload common; may need higher diuretic doses
- Resistant HTN very common
- Higher risk of hyperkalemia with ACE-I/ARB/MRA combination; consider potassium binders

**Hypertension in Pregnancy - Advanced:**

Preconception counseling:
- Optimize BP control before conception
- Transition from ACE-I/ARB to pregnancy-safe agents
- Assess target organ damage
- Counsel on risks of pregnancy with chronic HTN

Risk stratification for adverse maternal cardiac events (WHO classification):
- Modified WHO I: No detectable increased risk
- Modified WHO II-III: Small increased risk or significantly increased risk
- Modified WHO IV: Pregnancy contraindication

Breastfeeding considerations:
- Labetalol, nifedipine, methyldopa: Compatible
- ACE-I/ARB: Generally considered compatible postpartum (captopril, enalapril preferred for shorter half-life)
- Diuretics: May reduce milk supply at high doses`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'uterus', structureName: 'Uterus', linkText: 'Uterus', relevance: 'Pregnancy physiology' },
    { structureId: 'placenta', structureName: 'Placenta', linkText: 'Placenta', relevance: 'Preeclampsia pathophysiology' },
    { structureId: 'kidneys', structureName: 'Kidneys', linkText: 'Kidneys', relevance: 'CKD and HTN interaction' },
    { structureId: 'heart', structureName: 'Heart', linkText: 'Heart', relevance: 'Target organ in all populations' },
  ],
  references: [
    {
      referenceId: 'hyvet-trial',
      type: 'journal-article',
      title: 'Treatment of hypertension in patients 80 years of age or older',
      authors: 'Beckett NS, et al.',
      source: 'New England Journal of Medicine',
      year: 2008,
      citation: 'Beckett NS, et al. Treatment of hypertension in patients 80 years of age or older. N Engl J Med. 2008;358:1887-1898.',
    },
    {
      referenceId: 'acog-preeclampsia',
      type: 'guideline',
      title: 'ACOG Practice Bulletin: Gestational Hypertension and Preeclampsia',
      authors: 'ACOG',
      source: 'Obstetrics and Gynecology',
      year: 2020,
      citation: 'ACOG Practice Bulletin No. 222: Gestational Hypertension and Preeclampsia. Obstet Gynecol. 2020;135:e237-e260.',
    },
    {
      referenceId: 'aap-pediatric-htn',
      type: 'guideline',
      title: 'Clinical Practice Guideline for Screening and Management of High Blood Pressure in Children and Adolescents',
      authors: 'Flynn JT, et al.',
      source: 'Pediatrics',
      year: 2017,
      citation: 'Flynn JT, et al. Clinical Practice Guideline for Screening and Management of High Blood Pressure in Children and Adolescents. Pediatrics. 2017;140(3):e20171904.',
    },
  ],
  relatedEntries: [
    { entryId: 'hypertension', entryType: 'condition', name: 'Hypertension', relationship: 'see-also' },
    { entryId: 'chronic-kidney-disease', entryType: 'condition', name: 'Chronic Kidney Disease', relationship: 'related-to' },
    { entryId: 'preeclampsia', entryType: 'condition', name: 'Preeclampsia', relationship: 'related-to' },
  ],
  searchMetadata: {
    primaryKeywords: ['pregnancy hypertension', 'pediatric hypertension', 'elderly hypertension', 'geriatric HTN', 'African American hypertension'],
    secondaryKeywords: ['preeclampsia', 'isolated systolic hypertension', 'childhood HTN', 'adolescent BP'],
    synonyms: ['special populations HTN', 'hypertension in pregnancy', 'HTN in elderly'],
    tags: ['obstetrics', 'pediatrics', 'geriatrics', 'cardiovascular', 'health disparities'],
    searchBoost: 1.0,
  },
  clinicalImportance: 'important',
  reviewStatus: 'approved',
  version: '1.0.0',
  lastUpdated: '2026-02-02',
  author: 'SOMA Medical Encyclopedia',
};

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORT ARRAY - All Hypertension Entries
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Array of all hypertension-related encyclopedia entries
 * Includes: main hypertension entry, lifestyle modifications, pharmacotherapy,
 * resistant hypertension, hypertensive emergency, and special populations
 */
export const hypertensionEntries = [
  hypertensionEntry,
  hypertensionLifestyleEntry,
  hypertensionPharmacotherapyEntry,
  resistantHypertensionEntry,
  hypertensiveEmergencyEntry,
  hypertensionSpecialPopulationsEntry,
];

export default hypertensionEntries;
