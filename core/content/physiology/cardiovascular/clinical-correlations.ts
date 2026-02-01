/**
 * Clinical Correlations - Cardiovascular System
 *
 * Common cardiovascular diseases showing physiology gone wrong,
 * diagnostic tests, and drug mechanisms.
 */

import { EducationalContent } from '../../types';

export const clinicalHypertension: EducationalContent = {
  id: 'clinical-correlation-cardiovascular-hypertension',
  type: 'topic',
  name: 'Clinical: Hypertension',
  nameEs: 'Hipertension Clinica',
  alternateNames: ['High Blood Pressure', 'HTN'],

  levels: {
    1: {
      level: 1,
      summary: 'High blood pressure (hypertension) happens when the force of blood against your artery walls is consistently too high, like water flowing through a pipe at too much pressure.',
      explanation: `## What Is High Blood Pressure?

### Understanding Blood Pressure

Your heart pumps blood through tubes called arteries. Blood pressure measures how hard the blood pushes against the artery walls.

**Normal vs. High:**
- Normal: Less than 120/80 mmHg
- High: 130/80 mmHg or higher
- Very high: 180/120 mmHg or higher

### Why Does Blood Pressure Get Too High?

Think of your blood vessels like garden hoses:

1. **Too much water flowing**: Your heart pumps too much blood
2. **Hoses too narrow**: Your arteries become stiff or narrow
3. **Both together**: More blood flowing through smaller pipes

### What Causes High Blood Pressure?

**Things you cannot control:**
- Getting older (arteries get stiffer)
- Family history (genes you inherit)
- Being African American (higher risk)

**Things you can control:**
- Eating too much salt
- Not exercising
- Being overweight
- Smoking
- Drinking too much alcohol
- Stress

### Why Is High Blood Pressure Dangerous?

Over time, high pressure damages:
- Heart (heart attacks, heart failure)
- Brain (strokes)
- Eyes (vision loss)
- Kidneys (kidney failure)
- Arteries throughout the body

### The Good News

High blood pressure often has no symptoms, so regular check-ups are important. When found early, it can be controlled with:
- Healthy eating (less salt, more fruits and vegetables)
- Regular exercise
- Losing weight if needed
- Medications if lifestyle changes are not enough`,
      keyTerms: [
        { term: 'blood pressure', definition: 'The force of blood pushing against artery walls when the heart beats and rests' },
        { term: 'hypertension', definition: 'Medical term for consistently high blood pressure' },
        { term: 'systolic', definition: 'The top number - pressure when the heart beats' },
        { term: 'diastolic', definition: 'The bottom number - pressure when the heart rests between beats' },
        { term: 'arteries', definition: 'Blood vessels that carry blood away from the heart to the body' },
      ],
      analogies: [
        'Blood pressure is like water pressure in your home pipes - too much pressure can damage the pipes over time.',
        'Arteries are like flexible garden hoses - as we age, they can become stiff like old pipes.',
        'The heart is like a pump - it has to work harder when the pipes are narrow or blocked.',
      ],
      examples: [
        'A blood pressure reading of 140/90 means the pressure is 140 when the heart beats and 90 when it rests.',
        'When you feel stressed, your blood pressure may temporarily rise, but it should return to normal when you calm down.',
        'People who eat a lot of fast food often develop high blood pressure because of the high salt content.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hypertension involves persistently elevated arterial pressure from increased cardiac output, peripheral resistance, or both. It is diagnosed when readings are consistently 130/80 mmHg or higher and classified by severity and cause.',
      explanation: `## Understanding Hypertension

### Blood Pressure Physiology

**Determinants of Blood Pressure:**
BP = Cardiac Output x Total Peripheral Resistance

- **Cardiac Output**: Amount of blood pumped per minute (HR x Stroke Volume)
- **Peripheral Resistance**: Resistance in small arteries (arterioles)

### Classifications of Hypertension

| Category | Systolic | | Diastolic |
|----------|----------|---|-----------|
| Normal | <120 | and | <80 |
| Elevated | 120-129 | and | <80 |
| Stage 1 | 130-139 | or | 80-89 |
| Stage 2 | >=140 | or | >=90 |
| Hypertensive Crisis | >=180 | and/or | >=120 |

### Types of Hypertension

**Primary (Essential) Hypertension:**
- 90-95% of cases
- No single identifiable cause
- Multiple contributing factors
- Develops gradually over years

**Secondary Hypertension:**
- 5-10% of cases
- Caused by underlying conditions:
  - Kidney disease
  - Adrenal gland tumors
  - Thyroid problems
  - Sleep apnea
  - Certain medications
  - Narrowing of the aorta

### Mechanisms of Blood Pressure Elevation

**Increased Cardiac Output:**
- High sodium intake expands blood volume
- Increased sympathetic nervous system activity
- Increased renin-angiotensin system activity

**Increased Peripheral Resistance:**
- Arterial stiffness with aging
- Endothelial dysfunction
- Vascular remodeling (arteriole wall thickening)
- Salt sensitivity causing vasoconstriction

### Risk Factors

**Non-modifiable:**
- Age (risk increases with age)
- Family history
- Race (African Americans at higher risk)
- Male sex (until menopause)

**Modifiable:**
- Obesity
- Physical inactivity
- High sodium intake
- Low potassium intake
- Excessive alcohol
- Smoking
- Chronic stress

### Diagnostic Approach

**Proper Measurement:**
- Rest 5 minutes before measuring
- Seated with back supported, feet flat
- Arm at heart level
- Correct cuff size
- Average of 2-3 readings

**Evaluation includes:**
- Medical history
- Physical examination
- Baseline labs (kidney function, electrolytes)
- ECG
- Assessment for target organ damage
- Screening for secondary causes`,
      keyTerms: [
        { term: 'cardiac output', definition: 'Volume of blood the heart pumps per minute; CO = HR x SV' },
        { term: 'peripheral resistance', definition: 'Resistance to blood flow in the peripheral circulation, primarily arterioles' },
        { term: 'renin-angiotensin system', definition: 'Hormonal system that regulates blood pressure and fluid balance' },
        { term: 'endothelial dysfunction', definition: 'Impaired function of the inner lining of blood vessels' },
        { term: 'target organ damage', definition: 'Damage to heart, brain, kidneys, or eyes from chronic hypertension' },
      ],
      analogies: [
        'The renin-angiotensin system is like a water pressure regulator - it senses low pressure and tightens up to increase it.',
        'Vascular remodeling is like adding layers of tape around a straw - the opening gets smaller and harder to push fluid through.',
        'Blood pressure medications work like different plumbers tools - some widen pipes, others slow the pump, others reduce water volume.',
      ],
      examples: [
        'A patient with stage 1 hypertension (135/88) might first try lifestyle modifications for 3-6 months before starting medication.',
        'Secondary hypertension from kidney artery narrowing can cause sudden onset of high blood pressure in young adults.',
        'White coat hypertension occurs when blood pressure is elevated only in medical settings due to anxiety.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hypertension pathophysiology involves complex neurohumoral dysregulation including RAAS activation, sympathetic overactivity, endothelial dysfunction, vascular remodeling, and sodium retention, leading to target organ damage through mechanical stress and inflammatory mechanisms.',
      explanation: `## Pathophysiology of Hypertension

### Neurohumoral Mechanisms

**Renin-Angiotensin-Aldosterone System (RAAS):**
1. Decreased renal perfusion or sympathetic stimulation releases renin
2. Renin converts angiotensinogen to angiotensin I
3. ACE converts angiotensin I to angiotensin II
4. Angiotensin II effects:
   - Potent vasoconstriction
   - Aldosterone release (sodium/water retention)
   - Sympathetic activation
   - Vascular remodeling

**Sympathetic Nervous System:**
- Increased norepinephrine release
- Alpha-1 receptor stimulation: Vasoconstriction
- Beta-1 receptor stimulation: Increased heart rate and contractility
- Renal sympathetic activation: Increased renin release

**Natriuretic Peptides:**
- ANP/BNP released from cardiac chambers in response to stretch
- Promote vasodilation and natriuresis
- Counter-regulatory to RAAS
- Often insufficient to overcome hypertensive mechanisms

### Vascular Pathophysiology

**Endothelial Dysfunction:**
- Reduced nitric oxide bioavailability
- Increased endothelin-1 (potent vasoconstrictor)
- Impaired vasodilation
- Pro-thrombotic state
- Inflammatory activation

**Vascular Remodeling:**
- Media thickening due to smooth muscle hypertrophy/hyperplasia
- Increased collagen deposition
- Reduced arterial compliance
- Lumen narrowing increases resistance

**Mechanisms:**
- Hemodynamic stress stimulates growth factors
- Inflammatory cell infiltration
- Matrix metalloproteinase activation
- Elastin fragmentation

### Renal Mechanisms

**Pressure-Natriuresis Relationship:**
- Normal: Higher BP increases sodium excretion
- Hypertension: Curve shifted rightward (higher BP needed to excrete same sodium)
- Mechanisms:
  - Increased tubular sodium reabsorption
  - Reduced renal blood flow
  - Intrarenal RAAS activation

**Salt Sensitivity:**
- 50% of hypertensives are salt-sensitive
- Exaggerated BP response to sodium loading
- More common in African Americans, elderly, diabetics
- Mechanism: Impaired renal sodium handling

### Target Organ Damage

**Cardiac:**
- Left ventricular hypertrophy (pressure overload)
- Diastolic dysfunction
- Systolic heart failure (late)
- Coronary artery disease acceleration

**Vascular:**
- Accelerated atherosclerosis
- Aortic aneurysm formation
- Aortic dissection risk
- Peripheral artery disease

**Renal:**
- Nephrosclerosis (arteriolar thickening)
- Glomerulosclerosis
- Proteinuria
- Progressive chronic kidney disease

**Cerebrovascular:**
- Lacunar infarcts (small vessel disease)
- White matter disease
- Intracerebral hemorrhage
- Vascular dementia

**Ocular:**
- Hypertensive retinopathy:
  - AV nicking
  - Copper/silver wiring
  - Flame hemorrhages
  - Cotton wool spots
  - Papilledema (malignant hypertension)`,
      keyTerms: [
        { term: 'angiotensin II', definition: 'Potent vasoconstrictor peptide; central mediator of RAAS' },
        { term: 'natriuresis', definition: 'Excretion of sodium in urine; promoted by natriuretic peptides' },
        { term: 'arterial compliance', definition: 'Ability of arteries to expand and recoil with pressure changes' },
        { term: 'left ventricular hypertrophy', definition: 'Thickening of the heart muscle due to chronic pressure overload' },
        { term: 'nephrosclerosis', definition: 'Kidney damage from chronic hypertension affecting small arteries' },
      ],
      analogies: [
        'The pressure-natriuresis relationship is like a leaky bucket - higher pressure (water level) should make more leak out, but in hypertension, the holes are plugged.',
        'Vascular remodeling is like a muscle getting bigger from weightlifting - artery walls thicken from constant pressure stress.',
        'Endothelial dysfunction is like a damaged highway surface - smooth blood flow is disrupted, causing problems downstream.',
      ],
      examples: [
        'A hypertensive emergency (BP >180/120 with organ damage) requires IV medications to lower pressure gradually over hours.',
        'ACE inhibitors work by blocking conversion of angiotensin I to II, reducing vasoconstriction and aldosterone.',
        'Thiazide diuretics lower BP by increasing sodium excretion, reducing blood volume and peripheral resistance.',
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced hypertension management requires understanding of drug mechanisms, hemodynamic profiles, resistant hypertension workup, and recognition of hypertensive emergencies. Modern treatment integrates pharmacology with device-based therapies and addresses the sympathetic nervous system.',
      explanation: `## Clinical Management of Hypertension

### Drug Classes and Mechanisms

**Diuretics:**
- **Thiazides** (HCTZ, chlorthalidone): Inhibit Na-Cl cotransport in DCT
  - Reduce plasma volume initially
  - Long-term: Decrease peripheral resistance
  - First-line for most patients
- **Loop diuretics** (furosemide): For volume overload, CKD
- **Potassium-sparing** (spironolactone): Aldosterone antagonist

**RAAS Inhibitors:**
- **ACE inhibitors** (lisinopril): Block ACE, reduce angiotensin II and aldosterone
  - Also increase bradykinin (cough side effect)
  - Renoprotective in diabetes
- **ARBs** (losartan): Block AT1 receptors directly
  - No cough, similar efficacy to ACEi
- **Direct renin inhibitors** (aliskiren): Block renin directly

**Calcium Channel Blockers:**
- **Dihydropyridines** (amlodipine): Block L-type channels in vascular smooth muscle
  - Vasodilation without cardiac suppression
- **Non-dihydropyridines** (verapamil, diltiazem): Also cardiac effects
  - Reduce heart rate and contractility

**Beta-Blockers:**
- **Cardioselective** (metoprolol): Beta-1 selective
  - Reduce HR and contractility
- **Non-selective** (propranolol): Both beta-1 and beta-2
- **Vasodilating** (carvedilol): Also alpha-1 blockade

**Other Agents:**
- **Alpha-blockers** (doxazosin): Vasodilation
- **Central agonists** (clonidine): Reduce sympathetic outflow
- **Vasodilators** (hydralazine): Direct arterial relaxation
- **Renal denervation**: Catheter-based sympathetic ablation

### Treatment Algorithm

**Initial Therapy:**
- Stage 1 + CVD risk: Lifestyle + single agent
- Stage 2: Two agents from different classes
- Goal: <130/80 for most adults

**Combination Therapy:**
- ACEi/ARB + CCB (synergistic)
- ACEi/ARB + thiazide
- Avoid ACEi + ARB together

**Resistant Hypertension (uncontrolled on 3 drugs):**
Workup:
- Medication adherence assessment
- White coat confirmation (ABPM)
- Secondary cause screening:
  - Primary aldosteronism (PAC/PRA ratio)
  - Renal artery stenosis (imaging)
  - OSA screening
  - Pheochromocytoma (metanephrines)
  - Coarctation of aorta

Treatment:
- Optimize diuretic (switch to chlorthalidone or loop)
- Add spironolactone (PATHWAY-2 trial)
- Consider renal denervation

### Hypertensive Emergencies

**Definition:** Severe hypertension (>180/120) with acute target organ damage

**Clinical Presentations:**
- Hypertensive encephalopathy
- Acute heart failure/pulmonary edema
- Acute coronary syndrome
- Acute aortic dissection
- Acute stroke
- Acute kidney injury
- Retinal hemorrhages/papilledema

**Management Principles:**
- **Lower gradually**: 10-20% reduction in first hour
- **Avoid overshoot**: Risk of hypoperfusion
- **IV agents preferred**:
  - Nicardipine (titratable)
  - Labetalol (beta + alpha blockade)
  - Esmolol (short-acting beta-blocker)
  - Nitroprusside (potent, for emergencies)
- **Exceptions requiring rapid control:**
  - Aortic dissection (SBP <120 in 20 min)
  - Ischemic stroke with candidate for thrombolysis (<185/110)

### Special Populations

**Pregnancy:**
- Safe: Labetalol, nifedipine, methyldopa
- Contraindicated: ACEi, ARB, direct renin inhibitors (fetal toxicity)
- Severe: IV labetalol or hydralazine

**Chronic Kidney Disease:**
- ACEi/ARB first-line (reduce proteinuria)
- Loop diuretics if eGFR <30
- Higher targets may be acceptable

**Diabetes:**
- ACEi/ARB preferred (renal protection)
- Thiazide-like diuretics acceptable
- Beta-blockers mask hypoglycemia symptoms

**Coronary Artery Disease:**
- Beta-blockers + ACEi
- Avoid excessive reduction (risk ischemia)

### Device-Based Therapies

**Renal Denervation:**
- Catheter-based radiofrequency or ultrasound ablation
- Destroys renal afferent and efferent sympathetic nerves
- SPYRAL and RADIANCE trials show efficacy in resistant HTN
- Consider when meds fail or not tolerated

**Baroreflex Activation Therapy:**
- Carotid sinus stimulator
- Reduces sympathetic tone
- Investigational status`,
      keyTerms: [
        { term: 'resistant hypertension', definition: 'Blood pressure remaining above goal despite 3 antihypertensives including a diuretic' },
        { term: 'hypertensive emergency', definition: 'Severe hypertension with acute target organ damage requiring immediate reduction' },
        { term: 'primary aldosteronism', definition: 'Excess aldosterone production often from adrenal adenoma; common cause of secondary hypertension' },
        { term: 'renal denervation', definition: 'Procedure to ablate renal sympathetic nerves for treatment-resistant hypertension' },
        { term: 'ABPM', definition: 'Ambulatory blood pressure monitoring; 24-hour measurement to confirm diagnosis and assess control' },
      ],
      analogies: [
        'Combination antihypertensive therapy is like using multiple tools to fix a leak - each attacks the problem from a different angle.',
        'Resistant hypertension is like a stubborn stain that needs special treatment after regular cleaning fails.',
        'Treating hypertensive emergencies is like deflating an overinflated balloon - too fast and it pops, too slow and it stays dangerous.',
      ],
      examples: [
        'A patient on lisinopril, amlodipine, and HCTZ with BP 155/95 has resistant hypertension and needs evaluation for secondary causes.',
        'Pheochromocytoma causes episodic hypertension with headaches, sweating, and palpitations due to catecholamine excess.',
        'In hypertensive encephalopathy, reducing BP too quickly can cause watershed infarcts - gradual reduction is critical.',
      ],
    },
    5: {
      level: 5,
      summary: 'Precision management of hypertension integrates genomic profiling, advanced hemodynamic phenotyping, personalized drug selection based on pharmacogenomics, and emerging therapies targeting novel pathways including endothelin, aldosterone synthase, and vascular inflammation.',
      explanation: `## Precision Hypertension Medicine

### Genomic and Molecular Insights

**Monogenic Hypertension Syndromes:**
| Syndrome | Gene | Mechanism | Treatment |
|----------|------|-----------|-----------|
| Liddle syndrome | SCNN1B/gamma | ENaC constitutive activation | Amiloride (not spironolactone) |
| GRA | CYP11B1/B2 fusion | Aldosterone ACTH-dependent | Glucocorticoids |
| Apparent mineralocorticoid excess | HSD11B2 | Cortisol activates MR | Spironolactone |
| Gordon syndrome | WNK1, WNK4 | Increased NCC activity | Thiazides |
| PAH deficiency | CYP11A1 | DOC excess | Glucocorticoids |

**Polygenic Risk Scores:**
- Hundreds of SNPs identified in GWAS
- PRS can predict hypertension development
- May guide intensity of lifestyle interventions
- Clinical utility evolving

### Hemodynamic Phenotyping

**Invasive Hemodynamic Assessment:**
- Cardiac output and SVR measurement
- Guides personalized therapy selection:
  - High CO, normal SVR: Beta-blockers, diltiazem
  - Normal CO, high SVR: ACEi/ARB, CCB
  - High volume: Diuretics

**Impedance Cardiography:**
- Non-invasive CO and SVR estimation
- Useful for therapy titration
- Limited accuracy in some populations

**Arterial Stiffness Assessment:**
- Pulse wave velocity (PWV)
- Augmentation index
- Central blood pressure measurement
- Independent predictor of CV events
- May guide therapy beyond brachial BP

### Pharmacogenomics

**ACE I/D Polymorphism:**
- D allele: Higher ACE levels
- Better response to ACE inhibitors with II genotype
- Less clear clinical utility

**CYP2D6 (Beta-blocker metabolism):**
- Poor metabolizers: Higher drug levels, more bradycardia
- Ultra-rapid: Subtherapeutic levels

**ADRB1 (Beta-1 receptor):**
- Arg389 variant: Greater BP reduction with beta-blockers
- Ser49Gly: Affects heart rate response

**NEDD4L (Epithelial sodium channel):**
- Variants affect thiazide response
- Salt-sensitive hypertension

### Novel Therapeutic Targets

**Endothelin Pathway:**
- Endothelin receptor antagonists (bosentan)
- Currently approved for pulmonary hypertension
- Investigational for resistant systemic HTN
- Side effects: Edema, liver toxicity

**Aldosterone Synthase Inhibition:**
- Baxdrostat, lorundrostat
- Selective CYP11B2 inhibition
- Reduces aldosterone without affecting cortisol
- PROMINENT trial results awaited

**Angiotensin-(1-7) Axis:**
- Mas receptor agonists
- Counter-regulatory to angiotensin II
- Vasodilatory and anti-inflammatory
- Early clinical development

**Soluble Guanylate Cyclase Stimulators:**
- Enhance NO signaling
- Vasodilation independent of NO bioavailability
- In trials for resistant hypertension

**Natriuretic Peptide Enhancement:**
- Neprilysin inhibitors (sacubitril)
- Currently in HFrEF (Entresto)
- Trials for hypertension ongoing

### Inflammation and Immunity

**Immune Mechanisms in Hypertension:**
- T-cell activation in perivascular tissue
- Cytokine-driven vascular dysfunction
- Autoantibodies to AT1 receptors (preeclampsia)

**Anti-inflammatory Approaches:**
- Colchicine: Reduces CV events in chronic CAD
- Canakinumab: IL-1beta antibody (CANTOS)
- Methotrexate: Disappointing results (CIRT)

### Device Therapy Advances

**Second-Generation Renal Denervation:**
- Improved catheter designs
- Better nerve targeting (main renal arteries + branches)
- Spyral and Paradise systems
- Durable efficacy in trials

**Carotid Baroreflex Stimulation:**
- Implantable pulse generator
- Electrical stimulation of carotid sinus
- Barostim neo system
- Moderate efficacy in trials

**Central Iliac Arterio-venous Anastomosis:**
- Creates fixed shunt
- Reduces cardiac preload
- ROX coupler system
- Limited by side effects

### Digital Health Integration

**Home Blood Pressure Monitoring:**
- Twice daily measurements
- Improved control rates
- Telemedicine integration

**Wearable Devices:**
- Continuous BP estimation (cuffless)
- Photoplethysmography-based
- Accuracy improving

**AI-Guided Management:**
- Risk prediction algorithms
- Personalized treatment recommendations
- Adherence monitoring
- Outcome prediction`,
      keyTerms: [
        { term: 'monogenic hypertension', definition: 'Rare genetic disorders causing hypertension through single gene mutations' },
        { term: 'pulse wave velocity', definition: 'Measure of arterial stiffness; speed of pressure wave propagation' },
        { term: 'pharmacogenomics', definition: 'Study of how genetic variation affects drug response' },
        { term: 'endothelin receptor antagonist', definition: 'Drug blocking potent vasoconstrictor endothelin; used in PAH' },
        { term: 'central blood pressure', definition: 'Pressure in the aorta near the heart; better predictor of outcomes than brachial BP' },
      ],
      analogies: [
        'Pharmacogenomics is like having a genetic instruction manual that tells you which medication will work best for your specific body chemistry.',
        'Arterial stiffness is like aging rubber bands - young ones stretch easily, old ones are brittle and snap back harshly.',
        'Precision medicine in hypertension is like using GPS navigation instead of a paper map - it guides treatment based on your unique biological coordinates.',
      ],
      examples: [
        'A patient with Liddle syndrome responds to amiloride but not spironolactone because the defect is in ENaC, not aldosterone signaling.',
        'Pulse wave velocity >10 m/s indicates significant arterial stiffness and elevated cardiovascular risk independent of brachial BP.',
        'Patients with the Arg389 ADRB1 variant show greater BP reduction with metoprolol, demonstrating pharmacogenomic-guided therapy potential.',
      ],
    },
  },

  media: [
    {
      id: 'bp-measurement-technique',
      type: 'diagram',
      filename: 'bp-measurement.svg',
      title: 'Proper Blood Pressure Measurement Technique',
      description: 'Illustration of correct patient positioning and cuff placement',
    },
    {
      id: 'hypertension-complications',
      type: 'diagram',
      filename: 'htn-target-organs.svg',
      title: 'Target Organ Damage in Hypertension',
      description: 'Visual summary of organs affected by chronic hypertension',
    },
  ],

  citations: [
    {
      id: 'acc-aha-2017-guideline',
      type: 'article',
      title: '2017 ACC/AHA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults',
      source: 'Journal of the American College of Cardiology (2017)',
    },
    {
      id: 'williams-2023-esc',
      type: 'article',
      title: '2023 ESH Guidelines for the management of arterial hypertension',
      source: 'European Heart Journal (2023)',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-cardiac-cycle', targetType: 'topic', relationship: 'related', label: 'Cardiac Cycle' },
    { targetId: 'physiology-hemodynamics', targetType: 'topic', relationship: 'related', label: 'Hemodynamics' },
    { targetId: 'clinical-correlation-cardiovascular-heart-failure', targetType: 'topic', relationship: 'see-also', label: 'Heart Failure' },
    { targetId: 'clinical-correlation-cardiovascular-atherosclerosis', targetType: 'topic', relationship: 'see-also', label: 'Atherosclerosis' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['clinical-medicine', 'pharmacology', 'pathophysiology'],
    keywords: ['hypertension', 'blood pressure', 'antihypertensives', 'RAAS', 'target organ damage'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const clinicalHeartFailure: EducationalContent = {
  id: 'clinical-correlation-cardiovascular-heart-failure',
  type: 'topic',
  name: 'Clinical: Heart Failure',
  nameEs: 'Insuficiencia Cardiaca Clinica',
  alternateNames: ['CHF', 'Congestive Heart Failure'],

  levels: {
    1: {
      level: 1,
      summary: 'Heart failure occurs when the heart cannot pump enough blood to meet the bodys needs, causing fluid buildup and shortness of breath.',
      explanation: `## What Is Heart Failure?

### When the Heart Gets Weak

Heart failure means your heart is not pumping blood as well as it should. Think of it like a pump that is getting old and cannot push water through the pipes effectively.

### What Happens in Heart Failure?

**The Heart Struggles:**
- Cannot pump enough blood to the body
- Blood backs up in the lungs and legs
- Fluid builds up in the wrong places

**Common Symptoms:**
- Shortness of breath, especially when lying down
- Swelling in legs and feet
- Feeling tired and weak
- Rapid weight gain from fluid
- Coughing, especially at night

### Two Main Types

**Heart Cannot Squeeze Well (HFrEF):**
- Pumping problem
- Heart muscle is weak
- Common after heart attacks

**Heart Cannot Fill Well (HFpEF):**
- Stiff heart problem
- Heart muscle is thick and rigid
- Common with high blood pressure
- More common in older adults

### Why Does Heart Failure Happen?

**Common causes:**
- Heart attacks that damage heart muscle
- Long-term high blood pressure
- Faulty heart valves
- Infections of the heart
- Too much alcohol
- Some chemotherapy drugs

### Living with Heart Failure

Heart failure cannot be cured, but it can be managed:
- Take medications every day
- Limit salt in your diet
- Weigh yourself daily
- Stay active but rest when needed
- Regular doctor visits

With good care, many people live active lives for years.`,
      keyTerms: [
        { term: 'heart failure', definition: 'A condition where the heart cannot pump enough blood for the bodys needs' },
        { term: 'edema', definition: 'Swelling caused by fluid buildup in body tissues' },
        { term: 'ejection fraction', definition: 'Percentage of blood pumped out of the heart with each beat' },
        { term: 'congestion', definition: 'Fluid buildup in the lungs or body from poor heart pumping' },
      ],
      analogies: [
        'The heart is like a sponge - in HFrEF it is weak and floppy; in HFpEF it is stiff and cannot expand.',
        'Heart failure is like a failing water pump - it cannot push water to where it is needed, and water backs up in the system.',
        'The bodys circulation is like a highway system - when the main pump station fails, traffic backs up everywhere.',
      ],
      examples: [
        'A person with heart failure might wake up breathless at night and need extra pillows to sleep comfortably.',
        'Checking weight daily helps catch fluid buildup early - a 2-3 pound gain in one day means trouble.',
        'Heart failure medications like water pills help the body get rid of excess fluid through urination.',
      ],
    },
    2: {
      level: 2,
      summary: 'Heart failure is a clinical syndrome of dyspnea, fatigue, and fluid retention from impaired ventricular function. Classified by ejection fraction (HFrEF vs HFpEF) and functional capacity (NYHA class).',
      explanation: `## Understanding Heart Failure

### Definition and Classification

**Heart Failure (HF):**
- Complex clinical syndrome
- Structural or functional cardiac disorder
- Impaired ventricular filling or ejection
- Clinical manifestations at rest or with exertion

**Classification by Ejection Fraction:**

| Type | EF Range | Description |
|------|----------|-------------|
| HFrEF (Heart Failure with reduced EF) | <=40% | Systolic dysfunction |
| HFmrEF (HF with mildly reduced EF) | 41-49% | Borderline |
| HFpEF (HF with preserved EF) | >=50% | Diastolic dysfunction |
| HFimpEF (HF with improved EF) | >40% | Previously reduced, now improved |

### Pathophysiology

**HFrEF - Pumping Problem:**
- Damaged myocardium
- Reduced contractility
- Decreased stroke volume
- Compensatory mechanisms:
  - Frank-Starling mechanism (initially helpful)
  - Neurohormonal activation (RAAS, SNS)
  - Ventricular remodeling

**HFpEF - Filling Problem:**
- Stiff, non-compliant ventricle
- Impaired relaxation
- Elevated filling pressures
- Normal contractile function
- Associated with:
  - Hypertension
  - Diabetes
  - Obesity
  - Aging
  - Atrial fibrillation

### Clinical Presentation

**Symptoms:**
- Dyspnea (exertional, orthopnea, paroxysmal nocturnal)
- Fatigue and weakness
- Peripheral edema
- Abdominal bloating/ascites
- Cough
- Decreased exercise tolerance

**Signs:**
- Elevated JVP
- Pulmonary rales/crackles
- S3 gallop (HFrEF)
- S4 (HFpEF)
- Hepatomegaly
- Peripheral edema

### Functional Classification

**NYHA (New York Heart Association):**
- Class I: No limitation
- Class II: Slight limitation (comfortable at rest)
- Class III: Marked limitation (comfortable only at rest)
- Class IV: Symptoms at rest

**ACC/AHA Staging:**
- Stage A: At risk, no structural disease
- Stage B: Structural disease, no symptoms
- Stage C: Structural disease with prior/current symptoms
- Stage D: Refractory symptoms at rest

### Common Etiologies

**Ischemic:**
- Coronary artery disease
- Prior myocardial infarction

**Non-ischemic:**
- Hypertension
- Valvular heart disease
- Dilated cardiomyopathy
- Hypertrophic cardiomyopathy
- Myocarditis
- Infiltrative diseases (amyloidosis, sarcoidosis)
- Tachycardia-induced
- Peripartum cardiomyopathy
- Toxic (alcohol, chemotherapy, cocaine)

### Diagnostic Evaluation

**Labs:**
- BNP or NT-proBNP (elevated)
- CBC, CMP (assess renal function, electrolytes)
- Liver function tests
- TSH
- Lipid panel
- HbA1c

**Imaging:**
- Echocardiogram (EF, valvular function, diastolic parameters)
- Chest X-ray (pulmonary congestion, cardiomegaly)
- Cardiac MRI (tissue characterization)

**Other:**
- ECG (arrhythmias, prior MI, LVH)
- Coronary angiography (ischemic workup)
- Stress testing`,
      keyTerms: [
        { term: 'HFrEF', definition: 'Heart failure with reduced ejection fraction; EF <=40%; systolic dysfunction' },
        { term: 'HFpEF', definition: 'Heart failure with preserved ejection fraction; EF >=50%; diastolic dysfunction' },
        { term: 'ejection fraction', definition: 'Percentage of blood pumped out with each contraction; normal >55%' },
        { term: 'BNP', definition: 'B-type natriuretic peptide; hormone released by stretched heart muscle; diagnostic marker' },
        { term: 'orthopnea', definition: 'Shortness of breath when lying flat; improves when sitting up' },
      ],
      analogies: [
        'HFrEF is like a weak muscle that cannot squeeze effectively; HFpEF is like a stiff balloon that cannot expand to fill.',
        'Neurohormonal activation in heart failure is like revving a car engine that is already overheating - it helps short-term but causes damage long-term.',
        'Frank-Starling compensation is like stretching a rubber band more to get a stronger snap - works until overstretched.',
      ],
      examples: [
        'BNP >400 pg/mL in a patient with dyspnea strongly suggests heart failure as the cause.',
        'A patient with EF 25% has HFrEF and may benefit from medications that improve survival like beta-blockers and ACE inhibitors.',
        'HFpEF patients often have multiple comorbidities including obesity, diabetes, and atrial fibrillation.',
      ],
    },
    3: {
      level: 3,
      summary: 'Heart failure pathophysiology involves neurohormonal activation (RAAS, SNS, ADH), ventricular remodeling, and progressive myocardial dysfunction. Treatment targets these pathways with evidence-based mortality-reducing therapies.',
      explanation: `## Heart Failure Pathophysiology and Management

### Neurohormonal Activation

**Compensatory But Maladaptive Mechanisms:**

**RAAS Activation:**
- Reduced renal perfusion triggers renin release
- Angiotensin II causes:
  - Vasoconstriction (afterload increase)
  - Aldosterone release (sodium/water retention)
  - Myocardial remodeling
  - Direct myocardial toxicity
- Results: Volume overload, increased wall stress, fibrosis

**Sympathetic Nervous System:**
- Baroreceptor-mediated increase
- Norepinephrine effects:
  - Increased heart rate and contractility
  - Vasoconstriction
  - Beta-receptor downregulation over time
  - Direct myocyte toxicity
  - Arrhythmogenesis

**Other Hormones:**
- **ADH (vasopressin)**: Water retention
- **Endothelin**: Vasoconstriction, remodeling
- **Inflammatory cytokines** (TNF-alpha, IL-6): Myocardial depression

**Counter-regulatory (but insufficient):**
- **Natriuretic peptides** (ANP, BNP): Vasodilation, natriuresis
- **Nitric oxide**: Vasodilation
- **Prostaglandins**: Renal vasodilation

### Ventricular Remodeling

**Process:**
1. Initial injury (MI, pressure overload, etc.)
2. Myocyte stretch and stress
3. Neurohormonal activation
4. Myocyte hypertrophy and apoptosis
5. Fibroblast activation and fibrosis
6. Chamber dilation and shape change
7. Progressive dysfunction

**Molecular Mechanisms:**
- Stretch-activated signaling
- Calcium overload
- Oxidative stress
- Matrix metalloproteinase activation
- Collagen deposition

### Guideline-Directed Medical Therapy (GDMT)

**HFrEF - Mortality-Reducing Therapies:**

**1. ACE Inhibitors/ARBs/ARNI:**
- Block RAAS
- Reduce afterload and remodeling
- ARNI (sacubitril/valsartan): Dual neprilysin/ARB
- PARADIGM-HF: ARNI superior to ACEi

**2. Beta-Blockers:**
- Bisoprolol, carvedilol, metoprolol succinate
- Reverse sympathetic activation
- Improve survival, reduce hospitalizations
- Start low, titrate up

**3. Mineralocorticoid Receptor Antagonists:**
- Spironolactone, eplerenone
- Block aldosterone effects
- Reduce mortality and hospitalization
- Monitor potassium and renal function

**4. SGLT2 Inhibitors:**
- Dapagliflozin, empagliflozin
- Originally diabetes drugs
- DAPA-HF, EMPEROR-Reduced: Reduce CV death and HF hospitalization
- Mechanism: Multiple including improved cardiac energetics

**5. Hydralazine-Isosorbide Dinitrate:**
- Especially effective in Black patients (A-HeFT trial)
- Alternative if ACEi/ARB not tolerated
- Reduces preload and afterload

**Device Therapies:**
- **ICD**: Primary prevention if EF <=35%
- **CRT**: QRS >150ms (LBBB) or >130ms with EF <=35%
- **LVAD**: Bridge to transplant or destination therapy

### Acute Decompensated Heart Failure

**Classification:**
- **Warm and wet**: Perfused, congested (most common)
- **Warm and dry**: Perfused, not congested
- **Cold and wet**: Hypoperfused, congested (cardiogenic shock)
- **Cold and dry**: Hypoperfused, not congested

**Management:**
- Loop diuretics (IV for congestion)
- Vasodilators (if hypertensive)
- Inotropes (if hypoperfused, consider dobutamine, milrinone)
- Oxygen (if hypoxemic)
- Treat triggers (infection, ischemia, arrhythmia)

**Avoid in ADHF:**
- NSAIDs (fluid retention, renal dysfunction)
- Thiazolidinediones
- Negative inotropes (nondihydropyridine CCBs)

### HFpEF Management

**Challenge:** No proven mortality-reducing therapies

**Approach:**
- Treat comorbidities (hypertension, diabetes, obesity, AF)
- Diuretics for congestion
- SGLT2 inhibitors now recommended (EMPEROR-Preserved)
- ARNI may help (PARAGON-HF mixed results)
- Exercise training
- Manage risk factors aggressively`,
      keyTerms: [
        { term: 'GDMT', definition: 'Guideline-directed medical therapy; evidence-based treatments that improve survival in HFrEF' },
        { term: 'ARNI', definition: 'Angiotensin receptor-neprilysin inhibitor; sacubitril/valsartan; dual mechanism' },
        { term: 'SGLT2 inhibitor', definition: 'Sodium-glucose cotransporter-2 inhibitor; diabetes drug with cardiovascular benefits' },
        { term: 'ventricular remodeling', definition: 'Structural and shape changes in the heart in response to injury or stress' },
        { term: 'CRT', definition: 'Cardiac resynchronization therapy; biventricular pacing for dyssynchrony' },
      ],
      analogies: [
        'Neurohormonal activation is like a car stuck in overdrive - it tries to compensate but eventually burns out the engine.',
        'GDMT for heart failure attacks multiple villains - ACEi blocks RAAS, beta-blockers calm the sympathetic system, MRAs block aldosterone, SGLT2i provide new benefits.',
        'Heart failure remodeling is like a house slowly shifting on a weak foundation - the structure changes shape over time.',
      ],
      examples: [
        'The PARADIGM-HF trial showed sacubitril/valsartan reduced cardiovascular death by 20% vs enalapril in HFrEF.',
        'Dapagliflozin reduced cardiovascular death or worsening heart failure by 26% in DAPA-HF regardless of diabetes status.',
        'CRT improves EF by 5-10% and reduces hospitalizations in patients with LBBB and wide QRS complexes.',
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced heart failure management requires understanding hemodynamic profiles, inotropic and mechanical support, transplant evaluation, and palliative care integration. HFpEF remains challenging with emerging therapies targeting unique pathophysiology.',
      explanation: `## Advanced Heart Failure Management

### Hemodynamic Assessment

**Invasive Monitoring (Pulmonary Artery Catheter):**
- **RA pressure**: Right heart filling
- **PA pressure**: Pulmonary vascular resistance
- **PCWP**: Left heart filling (normal <12 mmHg)
- **Cardiac output/index**: Pump function (CI >2.2)
- **SVR**: Afterload

**Profiles Guide Therapy:**

| Profile | PCWP | CI | Treatment Focus |
|---------|------|-----|-----------------|
| Warm & Wet | Elevated | Normal | Diuretics |
| Cold & Wet | Elevated | Low | Inotropes + diuretics |
| Cold & Dry | Normal/Low | Low | Inotropes, consider fluids |

### Inotropic Therapy

**Indications:**
- Cardiogenic shock
- Bridge to recovery/transplant/device
- Palliation for symptom relief (chronic outpatient inotropes)

**Agents:**

**Dobutamine:**
- Beta-1 agonist
- Increased contractility, mild vasodilation
- Tolerance with continuous use (tachyphylaxis)
- Arrhythmogenic

**Milrinone:**
- Phosphodiesterase inhibitor
- Inodilator (increases contractility, vasodilates)
- Longer half-life ( renal clearance)
- Useful in pulmonary hypertension

**Levosimendan:**
- Calcium sensitizer
- Opens ATP-sensitive K+ channels
- Active metabolite (long half-life)
- Useful for intermittent infusions

### Mechanical Circulatory Support

**Intra-aortic Balloon Pump (IABP):**
- Counterpulsation
- Diastolic augmentation, systolic unloading
- Limited support (~0.5 L/min augmentation)
- IABP-SHOCK II: No mortality benefit

**Impella:**
- Percutaneous axial flow pump
- Aspiration from LV to aorta
- Reduces LV workload and myocardial oxygen demand
- 2.5-5.5 L/min flow
- DANGER trial: No benefit in routine cardiogenic shock

**ECMO (Extracorporeal Membrane Oxygenation):**
- VA-ECMO: Biventricular and respiratory support
- Provides full hemodynamic support
- Increases afterload (may need LV venting)
- ECPELLA: Combined ECMO + Impella

**Long-term Options:**
- **LVAD**: Left ventricular assist device
  - Bridge to transplant or destination therapy
  - Continuous or pulsatile flow
  - Requires anticoagulation
  - Risk of bleeding, infection, thrombosis
- **Total Artificial Heart**: SynCardia
  - Biventricular replacement
  - Bridge to transplant

### Heart Transplantation

**Indications:**
- Refractory heart failure despite optimal therapy
- EF <20% with severe symptoms
- Repeated hospitalizations
- Dependence on inotropes
- Cardiogenic shock with no recovery

**Contraindications:**
- Active infection
- Active malignancy
- Severe pulmonary hypertension (fixed)
- Severe renal or hepatic dysfunction
- Poor social support/non-adherence
- Advanced age (relative)

**Outcomes:**
- 1-year survival: ~90%
- 5-year survival: ~70%
- 10-year survival: ~50%
- Immunosuppression required lifelong

### Palliative Care

**Integration throughout disease:**
- Symptom management
- Advance care planning
- Quality of life focus
- Hospice when appropriate

**Inotrope-dependent patients:**
- Chronic outpatient dobutamine or milrinone
- Improves quality of life
- Limited survival (months to years)
- Bridge to transplant or destination

### HFpEF: Pathophysiology and Emerging Therapies

**Pathophysiology:**
- Stiff ventricle with impaired relaxation
- Elevated filling pressures
- Left atrial dysfunction
- Pulmonary vascular disease
- Systemic/endothelial inflammation

**Phenotypes:**
- Atrial myopathy-predominant
- Pulmonary vascular-predominant
- Right heart dysfunction
- Obesity/metabolic phenotype

**Emerging Therapies:**
- **SGLT2 inhibitors**: EMPEROR-Preserved showed benefit
- **ARNI**: PARAGON-HF suggested benefit in EF <57%
- **Vericiguat**: Soluble guanylate cyclase stimulator
- **Omecamtiv mecarbil**: Cardiac myosin activator
- **Anti-inflammatory agents**: Colchicine trials ongoing

**Diagnosis Challenges:**
- Elevated BNP but less than HFrEF
- Diastolic stress testing
- Invasive exercise hemodynamics (gold standard)
- LA strain assessment

### Cardio-Oncology

**Chemotherapy-Induced Cardiomyopathy:**
- Anthracyclines (dose-dependent)
- Trastuzumab (HER2 antibody, reversible)
- Immune checkpoint inhibitors (myocarditis)

**Monitoring:**
- Baseline cardiac assessment
- Serial echocardiograms
- Biomarker monitoring (troponin, BNP)
- Consider prophylactic ACEi/beta-blocker in high-risk

### Pregnancy and Heart Failure

**Peripartum Cardiomyopathy:**
- EF <45% in last month pregnancy or first 5 months postpartum
- No other cause identified
- Risk factors: Age >30, twins, preeclampsia, African ancestry

**Management:**
- Bromocriptine (prolactin inhibition)
- Standard HF therapy (except ACEi/ARB)
- High recovery rate (50-70%)`,
      keyTerms: [
        { term: 'cardiogenic shock', definition: 'Severe circulatory failure from cardiac pump failure; hypotension with tissue hypoperfusion' },
        { term: 'LVAD', definition: 'Left ventricular assist device; mechanical pump that assists the failing left ventricle' },
        { term: 'destination therapy', definition: 'Permanent mechanical support for patients not eligible for transplant' },
        { term: 'peripartum cardiomyopathy', definition: 'Heart failure developing in late pregnancy or early postpartum period' },
        { term: 'inodilator', definition: 'Drug with both inotropic (contractility) and vasodilatory properties' },
      ],
      analogies: [
        'Mechanical circulatory support is like a backup generator for a failing power plant - it keeps things running while repairs are made.',
        'Palliative care in heart failure is like having a skilled navigator for a difficult journey - it helps manage the road regardless of the destination.',
        'HFpEF is like a stiff old leather shoe - it does not expand well when you try to put your foot in.',
      ],
      examples: [
        'A patient in cardiogenic shock with BP 75/50 and cold extremities needs immediate inotropic support and possible mechanical assistance.',
        'The ROADMAP trial showed levosimendan infusions every 2 weeks reduced hospitalization in advanced HF.',
        'Patients on chronic home inotropes have a median survival of 3-6 months without transplant or device.',
      ],
    },
    5: {
      level: 5,
      summary: 'Contemporary heart failure management integrates biomarker-guided therapy, advanced imaging including strain analysis, genetic testing for cardiomyopathies, and personalized approaches based on phenotyping. Emerging therapies target inflammation, fibrosis, and metabolic pathways.',
      explanation: `## Precision Medicine in Heart Failure

### Biomarker-Guided Therapy

**NT-proBNP Guided Treatment:**
- GUIDE-IT trial: NT-proBNP <1000 pg/mL target
- Intensify therapy if elevated
- Mixed results but reasonable approach

**Novel Biomarkers:**
- **sST2**: Soluble ST2 (IL-33 decoy receptor)
  - Reflects fibrosis and remodeling
  - Independent prognostic value
  - Not affected by BMI like BNP
- **Galectin-3**: Macrophage activation, fibrosis
  - Predicts remodeling and outcomes
- **GDF-15**: Growth differentiation factor
  - General marker of cellular stress
- **Cardiac troponins**: Myocardial injury
  - Even mild elevation prognostic

**Multi-marker Approach:**
- Combine BNP, troponin, ST2
- Better risk stratification
- Guides intensity of therapy

### Advanced Imaging

**Speckle-Tracking Echocardiography:**
- **Global Longitudinal Strain (GLS)**
  - More sensitive than EF for early dysfunction
  - Detects subclinical cardiotoxicity
  - Normal: -18% to -22%
- **Myocardial Work Index**
  - Non-invasive pressure-strain analysis
  - Accounts for afterload
  - Predicts CRT response

**Cardiac MRI:**
- **Late gadolinium enhancement (LGE)**
  - Scar/fibrosis detection
  - Predicts sudden cardiac death risk
  - Guides ICD decisions beyond EF
- **T1/T2 mapping**
  - Tissue characterization
  - Detects diffuse fibrosis, edema, infiltration
- **Extracellular volume (ECV)**
  - Quantifies fibrosis
  - Predicts outcomes

**Nuclear Imaging:**
- **Amyloidosis imaging**
  - Technetium-pyrophosphate scan
  - Differentiates ATTR from AL amyloid
  - Non-invasive diagnosis possible
- **Sympathetic innervation** (MIBG)
  - Predicts arrhythmia risk

### Genetic Testing

**Indications:**
- Dilated cardiomyopathy (especially young)
- Hypertrophic cardiomyopathy
- Arrhythmogenic cardiomyopathy
- Family history of sudden cardiac death
- LV non-compaction

**Common Genes:**
- **TTN (titin)**: Truncating variants common in DCM
- **LMNA**: Lamin A/C; high arrhythmia risk
- **MYH7, MYBPC3**: Hypertrophic cardiomyopathy
- **PKP2, DSP**: Arrhythmogenic cardiomyopathy

**Clinical Impact:**
- Cascade screening of family members
- ICD decisions (LMNA carriers)
- Prognostication
- Future gene therapy potential

### Phenotype-Specific Approaches

**Infiltrative Cardiomyopathy:**
- **Cardiac amyloidosis**
  - ATTR: Tafamidis stabilizes TTR
  - AL: Chemotherapy for underlying clone
- **Sarcoidosis**: Immunosuppression
- **Hemochromatosis**: Phlebotomy, chelation

**Arrhythmogenic Cardiomyopathy:**
- Restrict exercise
- ICD for high-risk
- Antiarrhythmics (flecainide, sotalol, amiodarone)

**Takotsubo (Stress) Cardiomyopathy:**
- Catecholamine surge trigger
- Resolves typically in weeks
- Beta-blockers, ACEi short-term
- High recurrence risk

**Chemotherapy-Induced:**
- Dexrazoxane for high-dose anthracyclines
- Prophylactic ACEi/beta-blocker
- Earlier detection with strain imaging

### Emerging Therapies

**Anti-inflammatory Approaches:**
- **Canakinumab**: IL-1beta antibody
  - CANTOS: Reduced CV events in inflammation
  - Expensive, injectable
- **Colchicine**: Low-cost, oral
  - COLCOT: Reduced post-MI events
  - Trials in HF ongoing
- **Methotrexate**: CIRT negative result

**Metabolic Modulation:**
- **Trimetazidine**: Partial fatty acid oxidation inhibitor
  - Improves myocardial efficiency
  - Adjunctive therapy
- **Perhexiline**: CPT-1 inhibitor
  - Shifts metabolism to glucose
  - Useful in refractory angina/HF

**Fibrosis Inhibition:**
- **Pirfenidone**: Antifibrotic
  - Used in pulmonary fibrosis
  - Trials in HF with high sST2
- **TGF-beta inhibitors**: Investigational

**Gene Therapy:**
- **SERCA2a gene therapy**
  - Improves calcium handling
  - Mixed trial results (CUPID)
- **Stromal cell-derived factor-1**
  - Promotes cardiac regeneration

**Cell Therapy:**
- Mesenchymal stem cells
- Cardiac stem cells
- Disappointing results so far
- Refinement ongoing

### Artificial Intelligence in HF

**Risk Prediction:**
- Machine learning models predict readmission
- Identify high-risk patients
- Guide resource allocation

**Imaging Analysis:**
- Automated EF calculation
- Strain analysis
- Predict response to CRT

**Drug Discovery:**
- AI-designed molecules
- Repurposing existing drugs
- Identifying new targets

### Quality and Outcomes

**Registries and Quality Improvement:**
- Get With The Guidelines - Heart Failure
- ADHERE registry
- Track quality metrics
- Compare outcomes

**Readmission Reduction:**
- Transitional care programs
- Telemonitoring
- Disease management
- Medication reconciliation

**Shared Decision-Making:**
- Discuss prognosis honestly
- Incorporate patient values
- Advance care planning
- Palliative care integration`,
      keyTerms: [
        { term: 'global longitudinal strain', definition: 'Speckle-tracking echocardiographic measure of myocardial deformation; sensitive marker of early dysfunction' },
        { term: 'late gadolinium enhancement', definition: 'Cardiac MRI technique detecting scar or fibrosis; predicts arrhythmia risk' },
        { term: 'cascade screening', definition: 'Testing family members after identifying genetic cardiomyopathy in proband' },
        { term: 'ATTR amyloidosis', definition: 'Transthyretin amyloidosis; can be hereditary or wild-type (senile)' },
        { term: 'myocardial work index', definition: 'Non-invasive estimation of cardiac work using strain and blood pressure' },
      ],
      analogies: [
        'Biomarker-guided therapy is like using a GPS for navigation - it tells you when you are off course and need to adjust.',
        'Genetic testing in cardiomyopathy is like having a crystal ball for family members - it predicts who else might be at risk.',
        'Multi-marker risk assessment is like having multiple weather indicators - together they give a more accurate forecast than any single sign.',
      ],
      examples: [
        'A patient with DCM and an LMNA mutation has high risk of sudden death and may need ICD even with EF >35%.',
        'GLS imaging detected subclinical cardiotoxicity in 20% of patients with normal EF during trastuzumab therapy.',
        'Tafamidis reduced all-cause mortality by 30% in ATTR-CM (ATTR-ACT trial), establishing a disease-specific therapy.',
      ],
    },
  },

  media: [
    {
      id: 'heart-failure-types',
      type: 'diagram',
      filename: 'hf-types-comparison.svg',
      title: 'HFrEF vs HFpEF Comparison',
      description: 'Comparison of reduced and preserved ejection fraction heart failure',
    },
    {
      id: 'neurohormonal-activation',
      type: 'diagram',
      filename: 'hf-neurohormonal.svg',
      title: 'Neurohormonal Activation in Heart Failure',
      description: 'Diagram showing RAAS, SNS, and compensatory mechanisms',
    },
  ],

  citations: [
    {
      id: 'acc-aha-hf-guideline',
      type: 'article',
      title: '2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure',
      source: 'Circulation (2022)',
    },
    {
      id: 'paradigm-hf',
      type: 'article',
      title: 'Angiotensin-Neprilysin Inhibition versus Enalapril in Heart Failure',
      source: 'New England Journal of Medicine (2014)',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-cardiac-cycle', targetType: 'topic', relationship: 'related', label: 'Cardiac Cycle' },
    { targetId: 'clinical-correlation-cardiovascular-hypertension', targetType: 'topic', relationship: 'see-also', label: 'Hypertension' },
    { targetId: 'clinical-correlation-cardiovascular-coronary-disease', targetType: 'topic', relationship: 'see-also', label: 'Coronary Artery Disease' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['clinical-medicine', 'pharmacology', 'pathophysiology'],
    keywords: ['heart failure', 'HFrEF', 'HFpEF', 'ejection fraction', 'BNP', 'cardiomyopathy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default {
  clinicalHypertension,
  clinicalHeartFailure,
};
