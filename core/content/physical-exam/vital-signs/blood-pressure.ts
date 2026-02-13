/**
 * Blood Pressure - Vital Signs
 *
 * Comprehensive content on blood pressure measurement, interpretation,
 * abnormalities, and clinical correlations.
 */

import { EducationalContent } from '../../types';

export const bloodPressure: EducationalContent = {
  id: 'physical-exam-vital-signs-blood-pressure',
  type: 'concept',
  name: 'Blood Pressure',
  alternateNames: ['BP', 'Arterial Blood Pressure', 'Systemic Blood Pressure'],

  levels: {
    1: {
      level: 1,
      summary: 'Blood pressure measures how hard your heart pushes blood through your body.',
      explanation: `Blood pressure is like measuring how hard water pushes through a garden hose. When your heart beats, it pushes blood through tubes called blood vessels to every part of your body.

**The Two Numbers:**
Blood pressure is written as two numbers, like 120/80:
- **Top number (systolic):** How hard the blood pushes when your heart squeezes
- **Bottom number (diastolic):** How hard the blood pushes when your heart rests between beats

**Normal Blood Pressure:**
- A healthy blood pressure is around 120/80 or lower
- Think of it like Goldilocks - not too high, not too low, just right!

**High Blood Pressure (Hypertension):**
- When blood pushes too hard (140/90 or higher)
- Usually has no symptoms - called "the silent killer"
- Can damage your heart, kidneys, and eyes over time
- Often caused by eating too much salt, not exercising, or being overweight

**Low Blood Pressure (Hypotension):**
- When blood doesn't push hard enough
- Can make you feel dizzy or lightheaded
- Standing up too fast can cause it temporarily

**How It's Measured:**
- A cuff wraps around your arm and squeezes
- A special device listens to your heartbeat
- The doctor reads the numbers on a gauge`,
      keyTerms: [
        { term: 'blood pressure', definition: 'How hard blood pushes against the walls of your blood vessels' },
        { term: 'systolic', definition: 'The top number; pressure when the heart beats' },
        { term: 'diastolic', definition: 'The bottom number; pressure when the heart rests' },
        { term: 'hypertension', definition: 'High blood pressure' },
      ],
      analogies: [
        'Blood pressure is like water pressure in a hose - too high and the hose could burst, too low and water barely trickles out.',
        'The heart is like a pump, and blood pressure tells us how hard the pump is working.',
      ],
      examples: [
        'When you exercise, your blood pressure goes up temporarily because your heart works harder.',
        'Drinking caffeine can raise your blood pressure for a short time.',
      ],
    },
    2: {
      level: 2,
      summary: 'Blood pressure reflects cardiac output and peripheral vascular resistance, with hypertension and hypotension having significant cardiovascular implications.',
      explanation: `## Blood Pressure Fundamentals

Blood pressure (BP) is the force exerted by circulating blood against arterial walls. It is expressed as systolic over diastolic pressure (e.g., 120/80 mmHg).

**Components:**
- **Systolic Blood Pressure (SBP):** Peak pressure during ventricular contraction
- **Diastolic Blood Pressure (DBP):** Minimum pressure during ventricular relaxation
- **Pulse Pressure:** SBP - DBP (normally 30-50 mmHg)
- **Mean Arterial Pressure (MAP):** Average pressure; MAP = DBP + 1/3(Pulse Pressure)

## Blood Pressure Categories (ACC/AHA 2017)

| Category | Systolic | Diastolic |
|----------|----------|-----------|
| Normal | <120 mmHg | AND <80 mmHg |
| Elevated | 120-129 mmHg | AND <80 mmHg |
| Hypertension Stage 1 | 130-139 mmHg | OR 80-89 mmHg |
| Hypertension Stage 2 | ≥140 mmHg | OR ≥90 mmHg |
| Hypertensive Crisis | >180 mmHg | AND/OR >120 mmHg |

## Measurement Technique

**Proper Technique:**
1. Patient seated, back supported, feet flat on floor for 5 minutes
2. Arm supported at heart level
3. Appropriate cuff size (bladder encircling 80% of arm)
4. No caffeine, exercise, or smoking 30 minutes prior
5. Empty bladder
6. Take 2-3 readings, average the results

**Cuff Size Matters:**
| Arm Circumference | Cuff Size |
|------------------|-----------|
| 22-26 cm | Small adult |
| 27-34 cm | Adult |
| 35-44 cm | Large adult |
| 45-52 cm | Thigh cuff |

**Common Errors:**
- Cuff too small → falsely high reading
- Cuff too large → falsely low reading
- Arm unsupported → falsely high
- Talking during measurement → falsely high

## Hypertension

**Primary (Essential) Hypertension (90-95%):**
- No identifiable cause
- Risk factors: family history, age, obesity, high sodium intake, sedentary lifestyle

**Secondary Hypertension (5-10%):**
- Renal disease (most common)
- Renovascular disease (renal artery stenosis)
- Primary aldosteronism
- Pheochromocytoma
- Cushing syndrome
- Obstructive sleep apnea
- Medications (NSAIDs, oral contraceptives, steroids)

## Hypotension

**Definition:** SBP <90 mmHg or >20-30 mmHg drop from baseline

**Types:**
- **Orthostatic:** ≥20 mmHg SBP or ≥10 mmHg DBP drop upon standing
- **Postprandial:** Decrease after eating (common in elderly)
- **Shock:** Inadequate tissue perfusion

**Causes:**
- Dehydration
- Blood loss
- Medications
- Heart problems
- Endocrine disorders`,
      keyTerms: [
        { term: 'systolic', definition: 'The top number; maximum pressure during heart contraction', pronunciation: 'sis-TOL-ik' },
        { term: 'diastolic', definition: 'The bottom number; minimum pressure during heart relaxation', pronunciation: 'dy-ah-STOL-ik' },
        { term: 'pulse pressure', definition: 'Difference between systolic and diastolic pressure; reflects arterial stiffness' },
        { term: 'MAP', definition: 'Mean Arterial Pressure; average pressure during cardiac cycle; MAP = DBP + 1/3(PP)' },
        { term: 'orthostatic hypotension', definition: 'Drop in BP upon standing; ≥20 mmHg systolic or ≥10 mmHg diastolic' },
      ],
    },
    3: {
      level: 3,
      summary: 'Blood pressure is determined by cardiac output and systemic vascular resistance, regulated by complex neurohormonal mechanisms including the RAAS, sympathetic nervous system, and local vasodilators.',
      explanation: `## Hemodynamic Principles

**Fundamental Equation:**
\`\`\`
MAP = CO × SVR

Where:
- MAP = Mean Arterial Pressure
- CO = Cardiac Output (HR × SV)
- SVR = Systemic Vascular Resistance
\`\`\`

**Determinants of Blood Pressure:**

| Cardiac Output Factors | SVR Factors |
|----------------------|-------------|
| Heart rate | Arteriolar tone |
| Contractility | Blood viscosity |
| Preload (venous return) | Vessel length |
| Afterload | |

## Blood Pressure Regulation

**Short-term (Seconds to Minutes):**
1. **Baroreceptor Reflex:**
   - Carotid sinus and aortic arch receptors
   - ↑BP → ↑stretch → ↑afferent firing → ↑vagal, ↓sympathetic output
   - Results in vasodilation and decreased HR
   - Resets over days in chronic hypertension

2. **Chemoreceptor Reflex:**
   - Peripheral (carotid/aortic bodies) and central chemoreceptors
   - Hypoxia/hypercapnia → sympathetic activation → ↑BP

3. **CNS Ischemic Response:**
   - Severe ↓BP → brainstem ischemia → massive sympathetic discharge
   - Last-ditch mechanism

**Intermediate-term (Minutes to Hours):**
1. **Renin-Angiotensin-Aldosterone System (RAAS):**
   - ↓Renal perfusion → renin release → angiotensinogen → Ang I → Ang II
   - Ang II effects: Vasoconstriction, aldosterone release, ADH release, thirst
   - Aldosterone: Na+ and water retention

2. **Capillary Fluid Shift:**
   - ↓BP → ↓capillary pressure → fluid moves from interstitium to plasma
   - Helps restore blood volume

**Long-term (Days to Weeks):**
1. **Renal-Pressure Natriuresis:**
   - ↑BP → ↑Na+ and water excretion → ↓blood volume
   - Primary long-term BP regulator

2. **Vascular Remodeling:**
   - Chronic ↑BP → arterial wall thickening
   - Contributes to sustained hypertension

## Auscultatory Blood Pressure Measurement

**Korotkoff Sounds:**
| Phase | Description | Clinical Significance |
|-------|-------------|----------------------|
| I | First clear tapping sound | Systolic pressure |
| II | Swishing/murmur quality | - |
| III | Louder, crisper | - |
| IV | Muffled, soft | DBP in some populations |
| V | Disappearance of sound | Diastolic pressure (standard) |

**Auscultatory Gap:**
- Silent interval between Phase I and II/III
- Common in hypertension, aortic stenosis
- Can lead to underestimation of SBP
- Prevention: Palpate radial pulse while inflating

## Blood Pressure Variability

**Normal Physiologic Variation:**
- Circadian: 10-20% lower during sleep (dipping)
- Respiratory: ↓SBP with inspiration (normal <10 mmHg)
- Beat-to-beat: Continuous variation

**Abnormal Patterns:**
- **Non-dipping:** <10% nocturnal decrease (↑cardiovascular risk)
- **Reverse dipping:** BP higher at night (autonomic dysfunction)
- **White coat hypertension:** Elevated only in clinical setting
- **Masked hypertension:** Normal in clinic, elevated at home

## Secondary Hypertension Workup

**Clinical Clues Suggesting Secondary Cause:**
- Onset <30 or >55 years
- Severe/resistant hypertension
- Sudden worsening of previously controlled BP
- Hypertensive emergency at young age
- Associated features (hypokalemia, renal bruit, cushingoid appearance)

**Initial Screening Tests:**
| Suspected Cause | Screening Test |
|-----------------|----------------|
| Renal parenchymal | Creatinine, UA, renal ultrasound |
| Renovascular | Renal artery Doppler, CT/MR angiography |
| Primary aldosteronism | Aldosterone-to-renin ratio |
| Pheochromocytoma | Plasma metanephrines |
| Cushing syndrome | 24-hour urine cortisol, dexamethasone suppression |
| Obstructive sleep apnea | Polysomnography |`,
      keyTerms: [
        { term: 'RAAS', definition: 'Renin-Angiotensin-Aldosterone System; hormonal cascade regulating BP through vasoconstriction and sodium retention' },
        { term: 'baroreceptor', definition: 'Stretch receptor in carotid sinus and aortic arch sensing arterial pressure changes' },
        { term: 'Korotkoff sounds', definition: 'Sounds heard over the brachial artery during BP measurement; Phase I = systolic, Phase V = diastolic' },
        { term: 'auscultatory gap', definition: 'Silent interval in Korotkoff sounds that may cause underestimation of systolic BP' },
        { term: 'white coat hypertension', definition: 'Elevated BP in clinical settings with normal ambulatory/home readings' },
        { term: 'masked hypertension', definition: 'Normal clinic BP with elevated ambulatory/home readings' },
      ],
      clinicalNotes: 'Primary aldosteronism is underdiagnosed; screen any patient with resistant hypertension or spontaneous hypokalemia with aldosterone-to-renin ratio.',
    },
    4: {
      level: 4,
      summary: 'Blood pressure regulation involves integrated neurohumoral pathways with pathophysiologic derangements in hypertension leading to end-organ damage and cardiovascular risk that guides therapeutic targeting.',
      explanation: `## Advanced Hemodynamic Physiology

### Vascular Tone Regulation

**Endothelial Factors:**
| Factor | Effect | Mechanism |
|--------|--------|-----------|
| Nitric Oxide (NO) | Vasodilation | ↑cGMP → smooth muscle relaxation |
| Prostacyclin (PGI2) | Vasodilation | ↑cAMP → smooth muscle relaxation |
| Endothelin-1 (ET-1) | Vasoconstriction | ET-A/B receptors → ↑Ca2+ |
| EDHF | Vasodilation | Hyperpolarization via K+ channels |

**Endothelial Dysfunction in Hypertension:**
- Decreased NO bioavailability
- Increased oxidative stress
- Elevated ET-1
- Reduced EDHF-mediated relaxation
- Contributes to vascular stiffness and CVD risk

### Arterial Stiffness

**Central vs. Peripheral Pressure:**
- Pulse wave travels from aorta to periphery
- Reflected waves return from branch points
- In young/healthy: Reflected wave returns in diastole (augments coronary perfusion)
- In stiff arteries: Reflected wave returns in systole → ↑central systolic pressure

**Clinical Measures:**
- **Pulse Wave Velocity (PWV):** Gold standard for arterial stiffness
  - Carotid-femoral PWV >10 m/s indicates significant stiffening
- **Augmentation Index (AIx):** Measure of wave reflection
- **Central Blood Pressure:** Better predictor of CV events than brachial BP

### Hypertensive End-Organ Damage

**Target Organ Assessment:**

| Organ | Damage | Assessment |
|-------|--------|------------|
| Heart | LVH, diastolic dysfunction, HF, CAD | ECG, echocardiogram, BNP |
| Brain | Stroke, TIA, vascular dementia, lacunar infarcts | MRI (white matter changes) |
| Kidneys | Albuminuria, CKD | eGFR, urine albumin-to-creatinine ratio |
| Eyes | Hypertensive retinopathy | Fundoscopy |
| Vessels | Atherosclerosis, AAA, PAD | ABI, carotid IMT, CT angiography |

**Hypertensive Retinopathy Classification:**

| Grade | Findings | Significance |
|-------|----------|--------------|
| 1 | Mild arteriolar narrowing | Mild hypertension |
| 2 | AV nicking, copper/silver wiring | Moderate hypertension |
| 3 | Hemorrhages, exudates, cotton wool spots | Accelerated hypertension |
| 4 | Papilledema | Malignant hypertension (emergency) |

### Hypertensive Emergencies vs. Urgencies

**Hypertensive Emergency:**
- Severe HTN (often >180/120) WITH acute end-organ damage
- Requires immediate BP reduction (minutes to hours)
- IV antihypertensive therapy

**Types and Treatment:**
| Syndrome | Target Organs | First-Line Agent |
|----------|---------------|------------------|
| Hypertensive encephalopathy | CNS | Nicardipine, labetalol |
| Aortic dissection | Aorta | Esmolol + nicardipine |
| Acute pulmonary edema | Heart, lungs | Nitroglycerin + loop diuretic |
| Acute MI/unstable angina | Heart | Nitroglycerin, esmolol |
| Acute renal failure | Kidneys | Fenoldopam, nicardipine |
| Eclampsia | Multiple | Labetalol, hydralazine, MgSO4 |
| Pheochromocytoma crisis | Multiple | Phentolamine |

**BP Reduction Goals:**
- General: Reduce MAP by 20-25% in first hour
- Ischemic stroke: <185/110 if thrombolysis candidate; otherwise permissive HTN
- Hemorrhagic stroke: Target SBP 140-180 mmHg
- Aortic dissection: Target HR <60, SBP 100-120 within 20 minutes

### Resistant Hypertension

**Definition:**
- BP above goal despite 3 drugs at optimal doses (including diuretic)
- OR controlled on ≥4 drugs

**Workup:**
1. Confirm adherence (pill counts, drug levels)
2. Exclude white coat effect (ABPM)
3. Optimize medications and doses
4. Screen for secondary causes
5. Assess for interfering substances (NSAIDs, decongestants, licorice)

**Treatment Approach:**
1. Ensure thiazide/thiazide-like diuretic at appropriate dose
2. Add spironolactone (effective in primary aldosteronism and beyond)
3. Consider beta-blocker or alpha-blocker
4. Renal denervation (emerging therapy)

### Special Populations

**Pregnancy:**
- Avoid ACE-I, ARBs (teratogenic)
- First-line: Labetalol, methyldopa, nifedipine
- Preeclampsia: MgSO4 for seizure prophylaxis

**Chronic Kidney Disease:**
- ACE-I or ARB first-line (renoprotective)
- Target <130/80 if albuminuria
- Accept up to 30% creatinine rise with RAAS inhibition

**Diabetes:**
- ACE-I or ARB preferred (renoprotection)
- Target <130/80 mmHg`,
      keyTerms: [
        { term: 'pulse wave velocity', definition: 'Speed of arterial pressure wave propagation; gold standard measure of arterial stiffness' },
        { term: 'augmentation index', definition: 'Measure of wave reflection contribution to central systolic pressure' },
        { term: 'resistant hypertension', definition: 'BP above goal despite 3 drugs at optimal doses including diuretic' },
        { term: 'AV nicking', definition: 'Arteriovenous crossing changes on fundoscopy from arteriolar wall thickening compressing venule' },
        { term: 'hypertensive emergency', definition: 'Severe hypertension with acute end-organ damage requiring immediate IV therapy' },
        { term: 'hypertensive urgency', definition: 'Severe hypertension without acute end-organ damage; oral therapy, no immediate hospitalization required' },
      ],
      clinicalNotes: 'In resistant hypertension, spironolactone 25-50 mg is highly effective as fourth-line agent regardless of aldosterone levels (PATHWAY-2 trial).',
    },
    5: {
      level: 5,
      summary: 'Expert management integrates evidence-based guidelines with individualized therapy, understanding hemodynamic phenotypes, and applying emerging technologies and novel therapeutic targets.',
      explanation: `## Contemporary Blood Pressure Management

### Guideline Synthesis and Application

**Major Guidelines Comparison:**
| Aspect | ACC/AHA 2017 | ESC/ESH 2018 | ISH 2020 |
|--------|-------------|--------------|----------|
| HTN threshold | ≥130/80 | ≥140/90 | ≥140/90 |
| Target (general) | <130/80 | <130/80 | <140/90 (<130/80 if tolerated) |
| Target (elderly) | <130 if tolerated | 130-139 (age 65-79), 130-139 (≥80) | <140/90 |
| Initial therapy | Monotherapy or combination | Combination if BP ≥150/95 or ↑risk | Single-pill combination |

**Evidence Base for Targets:**
- SPRINT: Intensive (<120 SBP) vs. standard (<140) → 25% ↓CV events
- Note: Excludes DM, prior stroke; uses automated unattended measurement
- ACCORD-BP: Intensive control in diabetes did not reduce major CV events
- Meta-analyses: Progressive benefit to ~120-125 systolic

### Hemodynamic Phenotyping

**Personalized Approach Based on Hemodynamics:**
| Phenotype | Characteristics | Preferred Agents |
|-----------|----------------|------------------|
| High SVR | Normal/low CO, ↑SVR | Vasodilators (CCB, ACE-I, ARB) |
| Volume expanded | ↑CO, edema | Diuretics |
| Hyperdynamic | ↑HR, ↑CO | Beta-blockers |
| Mixed | Variable | Combination therapy |

**Assessment Methods:**
- Impedance cardiography
- Inert gas rebreathing
- Echocardiography (CO estimation)
- Bioimpedance spectroscopy (volume status)

### Ambulatory and Home Blood Pressure

**Ambulatory BP Monitoring (ABPM):**
- 24-hour recording: Awake and asleep readings
- Superior predictor of CV outcomes vs. office BP
- Identifies nocturnal non-dipping, masked HTN, white coat HTN

**ABPM Thresholds:**
| Period | HTN Threshold | Target |
|--------|---------------|--------|
| 24-hour | ≥130/80 | <125/75 |
| Daytime | ≥135/85 | <130/80 |
| Nighttime | ≥120/70 | <115/65 |

**Home BP Monitoring:**
- Average of duplicate readings AM and PM for 7 days
- Threshold for HTN: ≥135/85 mmHg
- Improves adherence and BP control

### Novel and Emerging Therapies

**Renal Denervation:**
- Catheter-based sympathetic nerve ablation
- SPYRAL HTN-OFF MED: 5-7 mmHg SBP reduction at 3 months
- SPYRAL HTN-ON MED: 9 mmHg reduction vs. sham at 6 months
- Patient selection: True resistant HTN, confirmed adherence

**Baroreceptor Activation Therapy:**
- Implantable device stimulating carotid baroreceptors
- Rheos/Barostim: ~25 mmHg SBP reduction in resistant HTN
- Reserved for refractory cases after extensive workup

**Emerging Pharmacologic Targets:**
| Target | Agent | Mechanism |
|--------|-------|-----------|
| Angiotensinogen | Zilebesiran (siRNA) | Hepatic AGT knockdown |
| Aldosterone synthase | Baxdrostat | ↓Aldosterone synthesis |
| Natriuretic peptides | Neprilysin inhibitors | ↑ANP, BNP |
| Aminopeptidase A | Firibastat | Inhibits brain RAAS |

### Advanced Secondary Hypertension

**Primary Aldosteronism Detailed Workup:**
1. Screening: Aldosterone-to-renin ratio (ARR) >30 with PA >15 ng/dL
2. Confirmation: Salt loading (oral or IV), fludrocortisone suppression
3. Subtyping: Adrenal CT → adrenal vein sampling if surgery considered
4. Treatment: Unilateral = surgery; bilateral = MRA (spironolactone/eplerenone)

**Renovascular Hypertension:**
- Atherosclerotic (older patients, diffuse vascular disease)
- Fibromuscular dysplasia (young women, "string of beads")
- Screening: Renal artery Doppler (PSV >200 cm/s, RAR >3.5)
- Imaging: CTA, MRA
- Treatment: Medical therapy first; angioplasty for FMD, selected RAS cases

**Pheochromocytoma:**
- Episodic hypertension, headache, palpitations, diaphoresis (triad)
- Screening: Plasma metanephrines (sensitivity 96-100%)
- Localization: CT/MRI, MIBG scan if needed
- Preoperative: Alpha blockade (phenoxybenzamine) → then beta blockade
- Never beta-block before adequate alpha blockade (precipitates crisis)

### Blood Pressure in Acute Settings

**Perioperative Management:**
- Hold ACE-I/ARB morning of surgery (↓intraoperative hypotension)
- Continue beta-blockers (avoid withdrawal)
- Target intraoperative SBP within 20% of baseline

**Acute Ischemic Stroke:**
- If thrombolysis: Maintain <185/110 before, <180/105 after
- No thrombolysis: Treat only if >220/120
- Rapid reduction may extend infarct (penumbral ischemia)

**Hemorrhagic Stroke:**
- INTERACT2/ATACH-2: Intensive BP lowering not clearly beneficial
- Target SBP 140-180 mmHg
- Avoid precipitous drops

### Quality Metrics and Population Health

**BP Control Rates:**
- US control rate: ~50% of hypertensives
- Team-based care models improve control
- Home monitoring + telemonitoring improves outcomes

**High-Value Interventions:**
1. Simplified regimens (once-daily dosing)
2. Single-pill combinations (improve adherence)
3. Generic medications (thiazides, ACE-I highly cost-effective)
4. Population-level sodium reduction
5. Community health worker programs`,
      keyTerms: [
        { term: 'SPRINT', definition: 'Systolic Blood Pressure Intervention Trial; demonstrated CV benefit of intensive (<120) vs. standard (<140) BP control' },
        { term: 'ABPM', definition: 'Ambulatory Blood Pressure Monitoring; 24-hour BP recording providing superior prognostic information' },
        { term: 'renal denervation', definition: 'Catheter-based ablation of renal sympathetic nerves for resistant hypertension' },
        { term: 'single-pill combination', definition: 'Fixed-dose combination antihypertensive; improves adherence and BP control' },
        { term: 'aldosterone-to-renin ratio', definition: 'Screening test for primary aldosteronism; elevated ratio suggests autonomous aldosterone production' },
        { term: 'zilebesiran', definition: 'Investigational siRNA therapy targeting hepatic angiotensinogen production' },
      ],
      clinicalNotes: `Clinical Pearls:
1. SPRINT used automated unattended BP measurement - office readings are typically 5-10 mmHg higher
2. Initial combination therapy (single-pill) increasingly preferred over monotherapy titration
3. Resistant HTN: Add spironolactone 25-50 mg before referring for renal denervation
4. Never give beta-blocker before alpha-blockade in suspected pheochromocytoma
5. ABPM should be offered to all patients with suspected white coat or masked HTN
6. In acute ischemic stroke, permissive hypertension (allow BP up to 220/120) unless thrombolysis planned`,
    },
  },

  media: [
    {
      id: 'bp-measurement-technique',
      type: 'diagram',
      filename: 'bp-measurement-technique.svg',
      title: 'Proper Blood Pressure Measurement Technique',
      description: 'Positioning, cuff placement, and common errors',
    },
    {
      id: 'korotkoff-sounds',
      type: 'animation',
      filename: 'korotkoff-sounds.mp4',
      title: 'Korotkoff Sounds',
      description: 'Audio demonstration of the five phases of Korotkoff sounds',
    },
  ],

  citations: [
    {
      id: 'acc-aha-2017',
      type: 'article',
      title: '2017 ACC/AHA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults',
      authors: ['Whelton, P.K.', 'et al.'],
      source: 'Journal of the American College of Cardiology',
    },
    {
      id: 'sprint-trial',
      type: 'article',
      title: 'A Randomized Trial of Intensive versus Standard Blood-Pressure Control',
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1511939',
    },
  ],

  crossReferences: [
    { targetId: 'physical-exam-vital-signs-overview', targetType: 'topic', relationship: 'parent', label: 'Vital Signs' },
    { targetId: 'condition-hypertension', targetType: 'condition', relationship: 'related', label: 'Hypertension' },
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'related', label: 'Cardiovascular System' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['physical-examination', 'vital-signs', 'clinical-skills'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine', 'emergency-medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default bloodPressure;
