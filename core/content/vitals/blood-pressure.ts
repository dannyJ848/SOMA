/**
 * Blood Pressure - Vital Signs
 *
 * Comprehensive content on blood pressure measurement, normal ranges,
 * hypertension, hypotension, and home monitoring guidance.
 */

import { EducationalContent } from '../types';

export const bloodPressure: EducationalContent = {
  id: 'vitals-blood-pressure',
  type: 'concept',
  name: 'Blood Pressure',
  alternateNames: ['BP', 'Arterial Blood Pressure', 'Systemic Blood Pressure'],

  levels: {
    1: {
      level: 1,
      summary: 'Blood pressure measures how hard your blood pushes against your blood vessel walls as your heart pumps.',
      explanation: `Blood pressure is like water pressure in a garden hose - it measures how hard the blood pushes as it flows through your body.

**What the Numbers Mean:**
Blood pressure is written as two numbers, like 120/80 (said "120 over 80"):
- **Top number (120):** The pressure when your heart squeezes and pushes blood out
- **Bottom number (80):** The pressure when your heart relaxes between beats

**What's Normal:**
- A healthy blood pressure is usually around 120/80 or lower
- Too high is called "high blood pressure" (hypertension)
- Too low can make you feel dizzy or faint

**Why It Matters:**
- High blood pressure can hurt your heart and blood vessels over time
- It often has no symptoms - that's why it's called the "silent killer"
- You can have high blood pressure and feel perfectly fine

**How It's Measured:**
- A cuff wraps around your upper arm
- The cuff squeezes your arm, then slowly releases
- A gauge shows your blood pressure numbers

**What You Can Do:**
- Get your blood pressure checked regularly
- Eat less salt
- Exercise and stay active
- Maintain a healthy weight
- Don't smoke`,
      keyTerms: [
        { term: 'blood pressure', definition: 'How hard blood pushes against the walls of blood vessels' },
        { term: 'hypertension', definition: 'High blood pressure - when the pressure is too high' },
        { term: 'blood pressure cuff', definition: 'The device that wraps around your arm to measure blood pressure' },
      ],
      analogies: [
        'Blood pressure is like water pressure in a garden hose - too much pressure can damage the hose over time.',
        'The heart is like a pump, and blood pressure tells us how strongly it\'s pumping.',
        'Think of your arteries like balloons - too much pressure stretches and weakens them.',
      ],
      examples: [
        'When you exercise, your blood pressure goes up temporarily to send more blood to your muscles.',
        'When you stand up quickly and feel dizzy, that\'s because blood pressure dropped briefly.',
        'Eating salty foods can raise blood pressure because salt makes your body hold onto water.',
      ],
    },
    2: {
      level: 2,
      summary: 'Blood pressure is the force exerted by blood against arterial walls, measured as systolic (heart contraction) over diastolic (heart relaxation) pressure in mmHg.',
      explanation: `## Understanding Blood Pressure

Blood pressure reflects the force of blood pushing against artery walls as the heart pumps blood throughout the body.

**The Two Numbers:**
- **Systolic (top number):** Pressure when the heart contracts (systole)
- **Diastolic (bottom number):** Pressure when the heart relaxes between beats (diastole)

## Blood Pressure Categories (Adults)

| Category | Systolic (mmHg) | | Diastolic (mmHg) |
|----------|-----------------|---|------------------|
| Normal | Less than 120 | and | Less than 80 |
| Elevated | 120-129 | and | Less than 80 |
| High BP Stage 1 | 130-139 | or | 80-89 |
| High BP Stage 2 | 140 or higher | or | 90 or higher |
| Hypertensive Crisis | Higher than 180 | and/or | Higher than 120 |

## Age-Related Variations

- **Children:** Normal BP is lower and increases with age
- **Teenagers:** Gradually approaches adult levels
- **Elderly:** Systolic often increases due to stiffer arteries
- Blood pressure tends to be higher in the morning

## How Blood Pressure Is Measured

**Manual (Auscultatory) Method:**
1. Cuff inflated above systolic pressure
2. Slowly deflated while listening with stethoscope
3. First sound heard = systolic pressure (Korotkoff sounds begin)
4. Sound disappears = diastolic pressure (Korotkoff sounds end)

**Automatic Devices:**
- Use oscillometry (detect vibrations in arterial wall)
- Convenient for home use
- May be less accurate in certain conditions

## Measurement Best Practices

- Rest 5 minutes before measuring
- Sit with feet flat, back supported, arm at heart level
- Don't talk during measurement
- Empty bladder first
- Avoid caffeine and exercise 30 minutes before
- Take 2-3 readings, 1 minute apart

## White Coat Hypertension

- Blood pressure elevated only in medical settings
- Due to anxiety or stress
- Home readings are normal
- Affects 15-30% of people
- May still indicate some cardiovascular risk

## What Affects Blood Pressure

- Salt intake
- Physical activity
- Stress and anxiety
- Medications
- Caffeine and alcohol
- Sleep quality
- Body weight`,
      keyTerms: [
        { term: 'systolic', definition: 'The top blood pressure number; pressure during heart contraction', pronunciation: 'sis-TOL-ik' },
        { term: 'diastolic', definition: 'The bottom blood pressure number; pressure during heart relaxation', pronunciation: 'dye-ah-STOL-ik' },
        { term: 'mmHg', definition: 'Millimeters of mercury; the unit used to measure blood pressure' },
        { term: 'white coat hypertension', definition: 'High blood pressure readings only in medical settings due to anxiety' },
        { term: 'Korotkoff sounds', definition: 'The sounds heard through a stethoscope during manual blood pressure measurement' },
      ],
      analogies: [
        'Systolic pressure is like the surge when a faucet is turned on; diastolic is the steady flow between surges.',
        'Blood pressure is like tire pressure - too high or too low causes problems.',
      ],
    },
    3: {
      level: 3,
      summary: 'Blood pressure is determined by cardiac output and systemic vascular resistance, regulated by neural, hormonal, and local mechanisms, with hypertension classified as primary or secondary.',
      explanation: `## Hemodynamic Principles

**Blood Pressure Equation:**
\`\`\`
Mean Arterial Pressure (MAP) = Cardiac Output (CO) × Systemic Vascular Resistance (SVR)
\`\`\`

**Components:**
- **Cardiac Output** = Heart Rate × Stroke Volume
- **Systemic Vascular Resistance** = determined by arteriolar tone

**Mean Arterial Pressure (MAP):**
\`\`\`
MAP = Diastolic + 1/3 (Systolic - Diastolic)
     = Diastolic + 1/3 (Pulse Pressure)
\`\`\`
- Normal MAP: 70-105 mmHg
- MAP > 60 mmHg needed for organ perfusion

## Regulation of Blood Pressure

**Short-Term (Seconds to Minutes):**
1. **Baroreceptor Reflex:**
   - Located in carotid sinus and aortic arch
   - Detect stretch in arterial walls
   - Increase firing with increased BP → vagal activation → decreased HR and BP
   - Decrease firing with decreased BP → sympathetic activation → increased HR and BP

2. **Chemoreceptor Reflex:**
   - Respond to O2, CO2, and pH changes
   - Secondary role in BP regulation

**Intermediate (Minutes to Hours):**
1. **Renin-Angiotensin-Aldosterone System (RAAS):**
   - Low BP → renin release from kidney
   - Angiotensin II → vasoconstriction + aldosterone release
   - Aldosterone → Na+ retention → increased blood volume → increased BP

2. **Capillary Fluid Shift:**
   - Low BP → fluid moves from interstitium into capillaries

**Long-Term (Hours to Days):**
1. **Renal Fluid Balance:**
   - Pressure natriuresis: High BP → increased Na+ excretion
   - Controls blood volume over time

## Hypertension Classification

**Primary (Essential) Hypertension (90-95%):**
- No identifiable cause
- Multifactorial: genetics, lifestyle, environment
- Risk factors: obesity, high sodium, low potassium, sedentary lifestyle, stress

**Secondary Hypertension (5-10%):**
| Cause | Mechanism | Clues |
|-------|-----------|-------|
| Renal disease | Decreased GFR, fluid retention | Elevated creatinine |
| Renovascular | RAAS activation | Young female (FMD) or elderly (atherosclerosis) |
| Primary aldosteronism | Aldosterone excess | Hypokalemia |
| Pheochromocytoma | Catecholamine excess | Episodic symptoms, tachycardia |
| Cushing syndrome | Cortisol excess | Central obesity, striae |
| Coarctation of aorta | Mechanical obstruction | BP higher in arms than legs |
| Sleep apnea | Sympathetic activation | Snoring, daytime sleepiness |

## Orthostatic Hypotension

**Definition:**
- Systolic BP drop ≥20 mmHg, OR
- Diastolic BP drop ≥10 mmHg
- Within 3 minutes of standing

**Causes:**
- Volume depletion (dehydration, hemorrhage)
- Medications (antihypertensives, diuretics, antidepressants)
- Autonomic dysfunction (diabetes, Parkinson's)
- Aging (decreased baroreceptor sensitivity)

**Symptoms:** Lightheadedness, dizziness, syncope, blurred vision

## Home Blood Pressure Monitoring

**Indications:**
- Suspected white coat hypertension
- Resistant hypertension evaluation
- Medication titration
- Masked hypertension detection

**Protocol:**
- Validated oscillometric device
- Appropriate cuff size (bladder encircles 80% of arm)
- Morning and evening readings
- 2 readings per session, 1-2 minutes apart
- Record for 7 days before clinic visit
- Average readings (exclude first day)

**Diagnostic Thresholds:**
| Setting | Hypertension Threshold |
|---------|----------------------|
| Office | ≥140/90 mmHg |
| Home | ≥135/85 mmHg |
| Daytime ambulatory | ≥135/85 mmHg |
| Nighttime ambulatory | ≥120/70 mmHg |
| 24-hour ambulatory | ≥130/80 mmHg |`,
      keyTerms: [
        { term: 'cardiac output', definition: 'Volume of blood pumped by the heart per minute; CO = HR × SV' },
        { term: 'systemic vascular resistance', definition: 'Total resistance to blood flow in the systemic circulation; primarily determined by arteriolar tone' },
        { term: 'baroreceptor', definition: 'Pressure-sensing nerve endings in carotid sinus and aortic arch that detect arterial stretch' },
        { term: 'RAAS', definition: 'Renin-Angiotensin-Aldosterone System; hormonal pathway regulating blood pressure and fluid balance' },
        { term: 'orthostatic hypotension', definition: 'Drop in BP upon standing (≥20 systolic or ≥10 diastolic within 3 minutes)' },
        { term: 'primary aldosteronism', definition: 'Adrenal condition causing excess aldosterone secretion; common cause of secondary hypertension' },
      ],
      clinicalNotes: 'When evaluating new hypertension, consider secondary causes if: age <30 or >55, resistant to treatment, sudden onset, or associated with hypokalemia. Screen for end-organ damage with urinalysis, creatinine, ECG, and fundoscopy.',
    },
    4: {
      level: 4,
      summary: 'Blood pressure regulation involves complex neurohumoral interactions, with hypertension causing end-organ damage through vascular remodeling, endothelial dysfunction, and target organ injury requiring systematic evaluation and evidence-based management.',
      explanation: `## Advanced Hemodynamics

**Arterial Pressure Waveform:**
- Systolic peak reflects left ventricular ejection
- Dicrotic notch marks aortic valve closure
- Diastolic pressure maintained by arterial compliance
- Pulse pressure = Systolic - Diastolic

**Pulse Pressure Considerations:**
- Wide pulse pressure (>60 mmHg): Aortic regurgitation, hyperthyroidism, arterial stiffness
- Narrow pulse pressure (<25 mmHg): Low cardiac output, aortic stenosis, tamponade

**Arterial Stiffness:**
- Measured by pulse wave velocity (PWV)
- Increases with age, diabetes, hypertension
- Leads to isolated systolic hypertension in elderly
- Independent predictor of cardiovascular events

## Vascular Biology of Hypertension

**Endothelial Dysfunction:**
- Decreased nitric oxide (NO) bioavailability
- Increased reactive oxygen species (ROS)
- Impaired vasodilation
- Pro-inflammatory, pro-thrombotic state

**Vascular Remodeling:**
- Inward eutrophic remodeling (increased wall-to-lumen ratio)
- Media hypertrophy
- Increased collagen deposition
- Arteriolar rarefaction

**Molecular Mechanisms:**
1. **Oxidative Stress:**
   - NAD(P)H oxidase activation
   - Superoxide inactivates NO
   - Peroxynitrite formation

2. **Inflammation:**
   - Angiotensin II activates NF-κB
   - Increased adhesion molecules
   - Monocyte infiltration

3. **Sympathetic Overactivity:**
   - Central resetting
   - Increased norepinephrine release
   - α1-receptor mediated vasoconstriction

## Hypertensive Target Organ Damage

**Heart:**
- Left ventricular hypertrophy (LVH)
- Diastolic dysfunction → HFpEF
- Coronary artery disease
- Atrial fibrillation

**Brain:**
- Lacunar infarcts
- White matter disease (leukoaraiosis)
- Cognitive impairment
- Hemorrhagic stroke

**Kidney:**
- Hypertensive nephrosclerosis
- Microalbuminuria → proteinuria
- Decreased GFR
- ESRD

**Eyes:**
- Hypertensive retinopathy
- Keith-Wagener-Barker Classification:
  - Grade I: Arteriolar narrowing
  - Grade II: AV nicking
  - Grade III: Hemorrhages, exudates
  - Grade IV: Papilledema

**Vasculature:**
- Atherosclerosis acceleration
- Aortic aneurysm
- Peripheral arterial disease

## Hypertensive Emergencies

**Definition:** Severe hypertension with acute end-organ damage

| Emergency | Target Organ | Key Features |
|-----------|-------------|--------------|
| Hypertensive encephalopathy | Brain | Altered mental status, headache, seizures |
| Acute coronary syndrome | Heart | Chest pain, ECG changes |
| Acute pulmonary edema | Heart | Dyspnea, hypoxemia |
| Aortic dissection | Aorta | Tearing chest/back pain |
| Acute kidney injury | Kidney | Oliguria, rising creatinine |
| Eclampsia | Brain/Placenta | Seizures in pregnancy |
| PRES | Brain | Headache, visual changes, seizures |

**Management Principles:**
- IV antihypertensive therapy
- Goal: Reduce MAP by 20-25% in first hour
- Exception: Aortic dissection (rapid SBP <120)
- Avoid precipitous drops (cerebral ischemia risk)

## Resistant Hypertension

**Definition:** BP above goal despite ≥3 antihypertensive agents (including diuretic) at optimal doses

**Evaluation:**
1. Confirm with ABPM (exclude white coat effect)
2. Assess adherence
3. Review medications (NSAIDs, decongestants, OCPs)
4. Screen for secondary causes:
   - Primary aldosteronism (aldosterone/renin ratio)
   - Renal artery stenosis (duplex, CTA, MRA)
   - Pheochromocytoma (plasma metanephrines)
   - Sleep apnea (sleep study)
   - Cushing syndrome (dexamethasone suppression)

**Treatment:**
- Optimize diuretic (chlorthalidone preferred)
- Add spironolactone 25-50 mg (PATHWAY-2 trial)
- Consider renal denervation (emerging)

## Blood Pressure Variability

**Types:**
- Visit-to-visit variability
- Day-to-day variability
- Within-visit variability
- Diurnal variation (dipping pattern)

**Clinical Significance:**
- High variability associated with increased CV events
- Non-dippers (nocturnal BP drop <10%): Increased target organ damage
- Reverse dippers: Associated with secondary hypertension, sleep apnea`,
      keyTerms: [
        { term: 'pulse wave velocity', definition: 'Speed of arterial pressure wave propagation; marker of arterial stiffness' },
        { term: 'HFpEF', definition: 'Heart Failure with preserved Ejection Fraction; common consequence of hypertensive heart disease' },
        { term: 'PRES', definition: 'Posterior Reversible Encephalopathy Syndrome; hypertensive emergency affecting posterior brain' },
        { term: 'resistant hypertension', definition: 'BP above goal despite 3 optimally-dosed antihypertensives including a diuretic' },
        { term: 'dipping pattern', definition: 'Normal 10-20% nocturnal BP reduction; non-dipping indicates increased CV risk' },
        { term: 'arterial compliance', definition: 'Ability of arteries to expand and recoil; decreases with age and disease' },
      ],
      clinicalNotes: 'In resistant hypertension, spironolactone is highly effective even without primary aldosteronism (PATHWAY-2 trial). Always check adherence with pill counts or drug levels before diagnosing true resistance.',
    },
    5: {
      level: 5,
      summary: 'Expert blood pressure management integrates advanced phenotyping, individualized target selection, contemporary trial evidence, and recognition of emerging therapies including device-based interventions and precision medicine approaches.',
      explanation: `## Precision Hypertension Phenotyping

**BP Phenotypes by Ambulatory Monitoring:**
| Phenotype | Office BP | Ambulatory BP | Prevalence | CV Risk |
|-----------|-----------|---------------|------------|---------|
| Sustained normotension | Normal | Normal | Reference | Low |
| White coat hypertension | High | Normal | 15-30% | Modest ↑ |
| Masked hypertension | Normal | High | 10-15% | High |
| Sustained hypertension | High | High | 50-60% | Highest |

**Masked Hypertension Considerations:**
- Often missed without ABPM or home monitoring
- Associated with male sex, smoking, alcohol, diabetes
- Higher CV risk than white coat hypertension
- Screen in patients with target organ damage but normal office BP

## Contemporary Trial Evidence

**BP Targets (Key Trials):**

| Trial | Population | Intervention | Outcome |
|-------|------------|--------------|---------|
| SPRINT | High CV risk, non-diabetic | SBP <120 vs <140 | 25% ↓ CV events with intensive |
| ACCORD-BP | Type 2 DM | SBP <120 vs <140 | No benefit (possible harm) |
| HOPE-3 | Intermediate risk | BP lowering vs placebo | Benefit in top BP tertile |
| STEP | Age 60-80, Chinese | SBP 110-130 vs 130-150 | 26% ↓ CV events with intensive |

**SPRINT Implications:**
- Office BP measured with automated device (AOBP)
- Traditional BP 5-10 mmHg higher than SPRINT protocol
- Intensive treatment beneficial but increases hypotension, syncope, AKI

**Treatment Approach by Risk:**
- High CV risk (>10% 10-year): Target <130/80
- Lower risk: Target <140/90 reasonable
- Elderly (>80): Consider frailty, standing BP, tolerability
- CKD with proteinuria: Target <130/80 (KDIGO 2021)

## Pharmacotherapy Optimization

**First-Line Agents:**
- ACE inhibitors/ARBs
- Calcium channel blockers (dihydropyridines)
- Thiazide-type diuretics (chlorthalidone, indapamide preferred)

**Combination Therapy:**
- Most patients require ≥2 agents
- Single-pill combinations improve adherence
- Recommended initial combinations:
  - ACEi/ARB + CCB
  - ACEi/ARB + Diuretic
  - CCB + Diuretic

**Agent Selection by Comorbidity:**
| Comorbidity | Preferred | Avoid/Caution |
|-------------|-----------|---------------|
| HFrEF | ACEi/ARB/ARNI, BB, MRA | Non-DHP CCB |
| CKD (proteinuria) | ACEi/ARB | NSAIDs |
| Diabetes | ACEi/ARB | High-dose thiazide |
| CAD | BB, ACEi | Hydralazine (reflex tachycardia) |
| Pregnancy | Labetalol, nifedipine, methyldopa | ACEi/ARB |
| Gout | Losartan | Thiazides |
| Benign prostatic hyperplasia | α-blockers | — |

## Device-Based Therapies

**Renal Denervation:**
- Catheter-based ablation of renal sympathetic nerves
- Sham-controlled trials (SPYRAL HTN-ON MED, RADIANCE-HTN): Modest BP reduction
- May benefit patients with resistant hypertension
- FDA-approved (Symplicity Spyral, Paradise systems)

**Baroreflex Activation Therapy:**
- Implanted device stimulates carotid baroreceptors
- Reserved for severe resistant hypertension
- Limited availability

**Arteriovenous Anastomosis:**
- Creates iliac AV fistula
- Reduces SVR, increases venous return
- ROX Coupler device (CE marked, not FDA approved)

## Special Populations

**Hypertension in Pregnancy:**

| Disorder | Definition | Management |
|----------|------------|------------|
| Chronic HTN | Pre-existing or <20 weeks | Labetalol, nifedipine; target <140/90 |
| Gestational HTN | ≥20 weeks, no proteinuria | Monitor for preeclampsia |
| Preeclampsia | HTN + proteinuria (or end-organ) | Delivery (definitive); MgSO4 for seizure prophylaxis |
| Preeclampsia with severe features | SBP ≥160 or DBP ≥110, symptoms | Urgent delivery; IV labetalol, hydralazine |
| HELLP | Hemolysis, elevated liver enzymes, low platelets | Urgent delivery |

**Perioperative Hypertension:**
- Continue most antihypertensives (including BB)
- Hold ACEi/ARB morning of surgery
- Treat SBP >180 or DBP >110 intraoperatively
- Avoid precipitous drops (target 20% reduction)

## Emerging Directions

**Genetic Insights:**
- GWAS identified ~1,000 BP-associated loci
- Polygenic risk scores may guide early intervention
- Rare monogenic hypertension (Liddle, Gordon syndrome)

**Novel Therapeutics:**
- Aldosterone synthase inhibitors (baxdrostat, lorundrostat)
- RNA interference (zilebesiran - targets angiotensinogen)
- Dual endothelin antagonists

**Digital Health:**
- Smartphone-based BP monitoring
- AI-driven BP prediction
- Remote therapeutic adjustment

## Quality Metrics and Systems Approach

**Performance Measures:**
- Percentage of hypertensive patients with controlled BP
- Time from diagnosis to control
- Medication intensification at uncontrolled visits

**Team-Based Care:**
- Pharmacist-led management programs
- Nurse care managers
- Community health workers
- Electronic health record clinical decision support`,
      keyTerms: [
        { term: 'AOBP', definition: 'Automated Office Blood Pressure; standardized measurement protocol used in SPRINT trial, typically lower than routine office BP' },
        { term: 'masked hypertension', definition: 'Normal office BP with elevated out-of-office BP; high CV risk often undetected' },
        { term: 'renal denervation', definition: 'Catheter-based procedure ablating renal sympathetic nerves to reduce BP' },
        { term: 'ARNI', definition: 'Angiotensin Receptor-Neprilysin Inhibitor (sacubitril/valsartan); preferred in HFrEF' },
        { term: 'baxdrostat', definition: 'Aldosterone synthase inhibitor; investigational agent for resistant hypertension' },
        { term: 'zilebesiran', definition: 'siRNA therapeutic targeting hepatic angiotensinogen; single dose provides months of BP reduction' },
      ],
      clinicalNotes: `Clinical Pearls:
1. SPRINT-style BP measurement (resting alone, automated) yields values 5-10 mmHg lower than traditional office BP
2. In resistant hypertension, confirm with ABPM before intensifying therapy or pursuing secondary workup
3. Chlorthalidone and indapamide are more effective than HCTZ for BP reduction and CV outcomes
4. Consider starting dual therapy if baseline BP >20/10 above goal
5. Deprescribing antihypertensives may be appropriate in frail elderly with orthostatic symptoms
6. New aldosterone synthase inhibitors show promise for resistant hypertension with fewer side effects than spironolactone`,
    },
  },

  media: [
    {
      id: 'bp-measurement-technique',
      type: 'diagram',
      filename: 'bp-measurement-technique.svg',
      title: 'Proper Blood Pressure Measurement Technique',
      description: 'Patient positioning and cuff placement for accurate BP measurement',
    },
    {
      id: 'bp-categories-chart',
      type: 'diagram',
      filename: 'bp-categories-chart.svg',
      title: 'Blood Pressure Categories',
      description: 'Visual representation of normal, elevated, and hypertensive BP ranges',
    },
    {
      id: 'raas-pathway',
      type: 'diagram',
      filename: 'raas-pathway.svg',
      title: 'Renin-Angiotensin-Aldosterone System',
      description: 'Hormonal pathway regulating blood pressure',
    },
  ],

  citations: [
    {
      id: 'acc-aha-2017',
      type: 'article',
      title: '2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults',
      authors: ['Whelton PK', 'Carey RM', 'Aronow WS', 'et al.'],
      source: 'Journal of the American College of Cardiology',
      url: 'https://doi.org/10.1016/j.jacc.2017.11.006',
    },
    {
      id: 'sprint-trial',
      type: 'article',
      title: 'A Randomized Trial of Intensive versus Standard Blood-Pressure Control',
      authors: ['SPRINT Research Group'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1511939',
    },
  ],

  crossReferences: [
    { targetId: 'vitals-heart-rate', targetType: 'topic', relationship: 'sibling', label: 'Heart Rate' },
    { targetId: 'cardiovascular-hypertension', targetType: 'condition', relationship: 'related', label: 'Hypertension' },
    { targetId: 'renal-kidney-function', targetType: 'topic', relationship: 'related', label: 'Kidney Function' },
  ],

  tags: {
    systems: ['cardiovascular', 'renal'],
    topics: ['vital-signs', 'clinical-skills', 'home-monitoring'],
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
