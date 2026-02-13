/**
 * Atrial Fibrillation - Comprehensive Educational Content
 *
 * Covers pathophysiology, classification, stroke risk assessment,
 * rate vs rhythm control, and anticoagulation management.
 */

import { EducationalContent } from '../../../types';

export const atrialFibrillation: EducationalContent = {
  id: 'condition-atrial-fibrillation',
  type: 'condition',
  name: 'Atrial Fibrillation',
  alternateNames: ['AFib', 'AF', 'A-fib', 'Auricular Fibrillation'],
  hpoId: 'HP:0005110',

  levels: {
    1: {
      level: 1,
      summary: 'Atrial fibrillation is when the upper chambers of your heart quiver chaotically instead of beating regularly, causing an irregular and often fast heartbeat.',
      explanation: `Your heart has four chambers - two on top (atria) and two on bottom (ventricles). Normally, your heart beats in a steady rhythm, like a drum keeping time in a band.

In atrial fibrillation (AFib), the upper chambers start quivering really fast and chaotically - like a bowl of jello instead of a strong pump. This means they can't push blood properly to the lower chambers.

**What You Might Feel:**
- Your heart racing or pounding
- Fluttering feeling in your chest
- Feeling tired or weak
- Shortness of breath
- Dizziness or lightheadedness
- Some people don't feel anything at all!

**Why AFib Is a Problem:**

1. **Blood Clots:** When blood doesn't flow smoothly through the quivering atria, it can pool and form clots. These clots can travel to your brain and cause a stroke.

2. **Heart Weakness:** If your heart races for too long, it can get tired and weak.

3. **Poor Blood Flow:** You might feel tired because blood isn't pumping efficiently.

**What Causes AFib:**
- High blood pressure
- Heart disease
- Aging
- Drinking too much alcohol
- Sleep apnea
- Thyroid problems
- Sometimes we don't know why

**Treatment:**
Doctors can treat AFib with:
- Medicine to slow down the heart
- Medicine to prevent blood clots (blood thinners)
- Procedures to fix the heart rhythm
- Lifestyle changes`,
      keyTerms: [
        { term: 'atrial fibrillation', definition: 'An irregular heart rhythm where the upper heart chambers quiver instead of beating normally' },
        { term: 'atria', definition: 'The two upper chambers of the heart that receive blood' },
        { term: 'palpitations', definition: 'Feeling like your heart is racing, pounding, or fluttering' },
        { term: 'stroke', definition: 'When blood flow to part of the brain is blocked, causing brain damage' },
      ],
      analogies: [
        'AFib is like an orchestra where all the musicians start playing at different times instead of following the conductor.',
        'A normal heartbeat is like waves on a beach coming in regular patterns. AFib is like choppy water with waves coming randomly.',
        'The quivering atria are like a washing machine that\'s off balance - shaking around instead of spinning smoothly.',
      ],
      examples: [
        'Someone might notice their heart "skipping" beats while climbing stairs.',
        'A person might feel their heart racing while just sitting and watching TV.',
      ],
    },
    2: {
      level: 2,
      summary: 'Atrial fibrillation is characterized by rapid, disorganized atrial electrical activity causing an irregularly irregular ventricular response, with stroke prevention through anticoagulation being a primary management goal.',
      explanation: `## What is Atrial Fibrillation?

Atrial fibrillation (AFib) is the most common sustained cardiac arrhythmia, affecting 2-3% of adults. The atria beat chaotically at 400-600 beats per minute, but the AV node filters these signals, allowing only some to reach the ventricles.

## ECG Characteristics

The classic ECG findings:
- **Irregularly irregular rhythm** - no pattern to the R-R intervals
- **No P waves** - replaced by fibrillatory waves (f waves)
- **Variable ventricular rate** - usually 80-180 bpm if untreated

## Classification by Duration

| Type | Description |
|------|-------------|
| Paroxysmal | Terminates within 7 days (usually <48 hours) |
| Persistent | Lasts >7 days, requires intervention to terminate |
| Long-standing persistent | Continuous for >12 months |
| Permanent | Decision made to not pursue rhythm control |

## Common Causes

**Cardiac:**
- Hypertension (most common)
- Heart failure
- Valvular disease (especially mitral)
- Coronary artery disease
- Cardiomyopathy

**Non-cardiac:**
- Hyperthyroidism
- Pulmonary embolism
- Sleep apnea
- Alcohol ("holiday heart")
- Surgery (post-operative AFib common)
- Obesity

## Why AFib Causes Strokes

Without proper atrial contraction, blood pools in the left atrial appendage (LAA). This stagnant blood can form clots. When normal rhythm returns or the clot dislodges, it can travel to the brain, causing an ischemic stroke.

**AFib increases stroke risk 5-fold!**

## Stroke Risk Assessment: CHA2DS2-VASc Score

| Risk Factor | Points |
|-------------|--------|
| Congestive heart failure | 1 |
| Hypertension | 1 |
| Age ≥75 | 2 |
| Diabetes | 1 |
| Stroke/TIA history | 2 |
| Vascular disease (MI, PAD) | 1 |
| Age 65-74 | 1 |
| Sex category (female) | 1 |

**Anticoagulation recommendations:**
- Score 0 (male) or 1 (female): No anticoagulation
- Score 1 (male): Consider anticoagulation
- Score ≥2: Anticoagulation recommended

## Treatment Goals

1. **Rate Control:** Slow the ventricular rate to <110 bpm at rest
2. **Rhythm Control:** Restore and maintain normal sinus rhythm
3. **Anticoagulation:** Prevent stroke

## Medications

**Rate Control:**
- Beta-blockers (metoprolol, atenolol)
- Calcium channel blockers (diltiazem, verapamil)
- Digoxin (elderly, sedentary patients)

**Rhythm Control:**
- Flecainide, propafenone (no structural heart disease)
- Amiodarone, sotalol, dofetilide (with heart disease)

**Anticoagulation:**
- Direct oral anticoagulants (DOACs): Apixaban, rivaroxaban, dabigatran, edoxaban
- Warfarin (target INR 2-3)`,
      keyTerms: [
        { term: 'irregularly irregular', definition: 'A rhythm with no predictable pattern between heartbeats; hallmark of AFib' },
        { term: 'fibrillatory waves', definition: 'The chaotic baseline activity seen on ECG instead of P waves in AFib' },
        { term: 'CHA2DS2-VASc', definition: 'Score used to calculate stroke risk in AFib and guide anticoagulation decisions' },
        { term: 'rate control', definition: 'Strategy focusing on controlling heart rate without trying to restore normal rhythm' },
        { term: 'rhythm control', definition: 'Strategy aimed at restoring and maintaining normal sinus rhythm' },
        { term: 'DOAC', definition: 'Direct oral anticoagulant; newer blood thinners that don\'t require monitoring' },
      ],
      analogies: [
        'The AV node acts like a bouncer at a club, only letting some of the chaotic atrial signals through to the ventricles.',
        'AFib is like static on a radio - the normal heartbeat signal is replaced by chaotic noise.',
      ],
    },
    3: {
      level: 3,
      summary: 'Atrial fibrillation results from triggers initiating arrhythmia in a susceptible atrial substrate, with management requiring individualized decisions on rate vs rhythm control, appropriate anticoagulation based on CHA2DS2-VASc scoring, and consideration of catheter ablation.',
      explanation: `## Pathophysiology

### Mechanisms of AFib Initiation and Maintenance

**Triggers:**
- Ectopic foci, primarily from pulmonary veins (90%)
- Autonomic tone (vagal or sympathetic)
- Atrial stretch from volume/pressure overload

**Substrate (atrial remodeling):**
- Electrical remodeling: Shortened refractory period
- Structural remodeling: Fibrosis, dilation
- "AFib begets AFib" - the longer it persists, the harder to terminate

### Multiple Wavelet Hypothesis
- 4-6 wavelets simultaneously circle the atria
- Wavelets collide, extinguish, and regenerate
- Requires critical mass of atrial tissue to sustain

### Focal Driver Hypothesis
- Localized rotors maintain fibrillation
- Surrounding tissue exhibits fibrillatory conduction
- Basis for ablation strategies

## Classification (2020 ESC)

| Type | Definition |
|------|------------|
| First detected | First episode (may be paroxysmal or persistent) |
| Paroxysmal | Self-terminating, usually within 48 hours, may last up to 7 days |
| Persistent | Sustained >7 days or requires cardioversion |
| Long-standing persistent | Continuous >12 months when rhythm control pursued |
| Permanent | AFib accepted by patient and physician |

## Hemodynamic Consequences

1. **Loss of atrial kick:** Reduces cardiac output by 15-25%
2. **Irregular R-R intervals:** Impaired ventricular filling
3. **Tachycardia-induced cardiomyopathy:** Sustained rapid rates cause LV dysfunction
4. **Increased LA pressure:** Contributes to heart failure

## Comprehensive Evaluation

**History:**
- Symptom severity (EHRA score)
- Duration and pattern
- Triggers (alcohol, caffeine, sleep deprivation)
- Associated conditions

**Workup:**
- 12-lead ECG
- TTE (LA size, LV function, valves)
- TSH (rule out hyperthyroidism)
- BMP (electrolytes, kidney function)
- CBC
- Consider sleep study if suspected OSA

## Stroke Prevention

### Anticoagulation Decision-Making

**CHA2DS2-VASc Score Interpretation:**
- Score 0: Very low risk (~0.2%/year stroke)
- Score 1: Low risk (~1.3%/year)
- Score ≥2: Moderate-high risk (≥2.2%/year)

**HAS-BLED Score (Bleeding Risk):**
| Factor | Points |
|--------|--------|
| Hypertension | 1 |
| Abnormal renal/liver function | 1-2 |
| Stroke history | 1 |
| Bleeding history/predisposition | 1 |
| Labile INR | 1 |
| Elderly (>65) | 1 |
| Drugs/alcohol | 1-2 |

High bleeding risk (≥3) doesn't contraindicate anticoagulation but indicates need for closer monitoring.

### DOAC vs Warfarin

**DOACs preferred because:**
- Similar or superior efficacy
- Lower intracranial hemorrhage risk
- No INR monitoring required
- Fewer drug/food interactions

**Warfarin preferred when:**
- Mechanical heart valve
- Moderate-severe mitral stenosis
- Severe renal impairment (CrCl <15-30 mL/min)

## Rate vs Rhythm Control

### AFFIRM and RACE Trials
- No mortality difference between strategies
- Rate control acceptable for many patients
- Rhythm control may be preferred for:
  - Highly symptomatic patients
  - Young, active patients
  - Heart failure
  - First episode or early AFib

### Rate Control Targets
- Lenient: <110 bpm at rest (RACE II)
- Strict: <80 bpm at rest

### Rhythm Control Options

**Cardioversion:**
- Electrical: 150-200J biphasic, anterior-posterior pads
- Pharmacological: Ibutilide, flecainide, propafenone

**Antiarrhythmic Drugs:**
| Drug | Use | Major Side Effects |
|------|-----|-------------------|
| Flecainide/Propafenone | No structural heart disease | Proarrhythmia, HF |
| Sotalol | Mild structural disease | QT prolongation, bradycardia |
| Amiodarone | Heart failure, CAD | Thyroid, pulmonary, hepatic |
| Dofetilide | Heart failure | QT prolongation, torsades |
| Dronedarone | No severe HF | Less toxic than amiodarone |

**Catheter Ablation:**
- Pulmonary vein isolation (PVI) cornerstone
- 70-80% success for paroxysmal AFib
- 50-70% for persistent (may need repeat)
- Class I recommendation for symptomatic paroxysmal AFib after failed drug`,
      keyTerms: [
        { term: 'pulmonary vein isolation', definition: 'Ablation procedure targeting ectopic foci from pulmonary veins; primary AFib ablation strategy', pronunciation: 'PVI' },
        { term: 'electrical remodeling', definition: 'Shortening of atrial refractory period that perpetuates AFib' },
        { term: 'tachycardia-induced cardiomyopathy', definition: 'LV dysfunction caused by sustained rapid heart rates; reversible with rate control' },
        { term: 'HAS-BLED', definition: 'Score assessing bleeding risk in patients on anticoagulation' },
        { term: 'cardioversion', definition: 'Restoring normal rhythm using electrical shock or medications' },
        { term: 'left atrial appendage', definition: 'Small pouch in left atrium where clots commonly form in AFib; target for occlusion devices' },
      ],
      clinicalNotes: 'Always anticoagulate before cardioversion if AFib >48 hours or unknown duration (3 weeks before, 4 weeks after). DOACs are now preferred over warfarin for most patients. Catheter ablation is increasingly first-line for symptomatic paroxysmal AFib.',
    },
    4: {
      level: 4,
      summary: 'Atrial fibrillation management requires integration of rhythm vs rate control strategies, optimal anticoagulation, catheter ablation when appropriate, and management of underlying substrate including heart failure, hypertension, and sleep apnea.',
      explanation: `## Advanced Pathophysiology

### Atrial Remodeling

**Electrical Remodeling:**
- Calcium channel downregulation (L-type Ca2+)
- Shortened action potential duration
- Decreased effective refractory period
- Occurs within days of AFib onset

**Structural Remodeling:**
- Atrial fibrosis (TGF-beta mediated)
- Myocyte hypertrophy
- Gap junction redistribution (connexin-40)
- Occurs over months to years

**Autonomic Remodeling:**
- Increased sympathetic and parasympathetic innervation
- Heterogeneous autonomic tone
- Ganglionated plexi activation

### Rotor and Focal Driver Mechanisms

Modern mapping technologies identify:
- Stable rotors maintaining fibrillation
- Focal impulse and rotor modulation (FIRM) ablation
- Driver domain ablation strategies

## Clinical Scenarios

### New-Onset AFib

**Immediate Assessment:**
1. Hemodynamic stability
2. Rate vs rhythm symptoms
3. Duration (affects anticoagulation strategy)
4. Reversible triggers

**Unstable (Hypotension, Ischemia, HF):**
- Immediate synchronized cardioversion (150-200J)
- Anticoagulation considerations secondary

**Stable:**
- Rate control first (IV diltiazem, metoprolol)
- Anticoagulation based on duration
- Cardioversion consideration

### Post-Operative AFib

**Incidence:**
- Cardiac surgery: 30-50%
- Non-cardiac surgery: 5-10%

**Risk Factors:**
- Age >65
- Heart failure
- Mitral valve disease
- Previous AFib
- Withdrawal of beta-blockers

**Management:**
- Usually self-limited
- Rate control first-line
- Anticoagulation if persists >48 hours
- Consider rhythm control for recurrence

### AFib with Rapid Ventricular Response

**Rate Control Options:**

| Agent | Dose | Notes |
|-------|------|-------|
| Diltiazem | 0.25 mg/kg IV, then 5-15 mg/hr | Avoid in HFrEF |
| Metoprolol | 5 mg IV q5min x3 | Avoid in decompensated HF |
| Amiodarone | 150 mg IV over 10 min | Safe in HF; slow onset |
| Digoxin | 0.5 mg IV load | Slow onset; avoid in WPW |

### AFib with WPW (Pre-excitation)

**Danger:** AV nodal blocking agents can paradoxically increase ventricular rate via accessory pathway

**Avoid:**
- Beta-blockers
- Calcium channel blockers
- Digoxin
- Adenosine

**Treatment:**
- Procainamide (first-line)
- Ibutilide
- Cardioversion if unstable
- Urgent ablation

## Anticoagulation Deep Dive

### DOAC Dosing and Selection

| Drug | Standard Dose | Reduced Dose Criteria |
|------|--------------|----------------------|
| Apixaban | 5 mg BID | 2.5 mg BID if ≥2: age ≥80, weight ≤60 kg, Cr ≥1.5 |
| Rivaroxaban | 20 mg daily | 15 mg if CrCl 15-50 |
| Dabigatran | 150 mg BID | 75 mg BID if CrCl 15-30 (US) |
| Edoxaban | 60 mg daily | 30 mg if CrCl 15-50, weight ≤60 kg, or P-gp inhibitor |

### Left Atrial Appendage Occlusion (LAAO)

**Indications:**
- High stroke risk AND contraindication to long-term anticoagulation
- WATCHMAN device: FDA approved
- LARIAT: Epicardial ligation

**Evidence:**
- PROTECT AF, PREVAIL: Non-inferior to warfarin
- PRAGUE-17: LAAO vs DOAC (non-inferior)

### Periprocedural Anticoagulation

**For Ablation:**
- Continue anticoagulation (no interruption preferred)
- Heparin during procedure (ACT 300-400)
- Resume anticoagulation same day

**For Cardioversion:**
- If AFib <48 hours: Anticoagulate and cardiovert
- If AFib ≥48 hours or unknown: 3 weeks anticoagulation OR TEE to exclude thrombus, then cardiovert, then 4 weeks anticoagulation

## Catheter Ablation

### Techniques

**Pulmonary Vein Isolation (PVI):**
- Wide area circumferential ablation
- Entry/exit block confirmation
- 70-90% acute success

**Additional Targets:**
- CTI line (flutter prevention)
- LA roof line, mitral isthmus (persistent AFib)
- CFAE ablation (complex fractionated electrograms)
- SVC isolation (if focal triggers)

### Technology

**Radiofrequency (RF):**
- Point-by-point lesions
- Contact force sensing
- High-power short-duration

**Cryoballoon:**
- Single-shot PVI
- Arctic Front Advance
- Faster procedure, similar efficacy

**Pulsed Field Ablation (PFA):**
- Emerging technology
- Selective cardiac tissue ablation
- Spares esophagus and phrenic nerve

### Outcomes

**CABANA Trial:**
- Ablation vs drug therapy
- ITT: No significant difference in composite endpoint
- As-treated: 33% reduction in death/CV events
- Symptom benefit favored ablation

**CASTLE-AF:**
- AFib ablation in HFrEF
- 38% reduction in mortality/HF hospitalization
- EF improved more with ablation

**EARLY-AF:**
- Early ablation vs AAD for paroxysmal AFib
- Ablation superior for arrhythmia recurrence`,
      keyTerms: [
        { term: 'pre-excitation', definition: 'Ventricular activation via accessory pathway (WPW); AV nodal blockers contraindicated in AFib' },
        { term: 'WATCHMAN', definition: 'Left atrial appendage occlusion device for stroke prevention when anticoagulation contraindicated' },
        { term: 'pulsed field ablation', definition: 'Novel ablation technology using electrical fields for tissue-selective lesions' },
        { term: 'CABANA', definition: 'Randomized trial comparing catheter ablation vs drug therapy for AFib' },
        { term: 'CASTLE-AF', definition: 'Trial showing mortality benefit with AFib ablation in heart failure patients' },
        { term: 'CTI line', definition: 'Cavotricuspid isthmus ablation for atrial flutter prevention' },
      ],
      clinicalNotes: 'In AFib with WPW, avoid AV nodal blockers - use procainamide or cardioversion. CASTLE-AF suggests early ablation consideration in HFrEF. Uninterrupted anticoagulation during ablation is now standard. LAAO increasingly used when anticoagulation contraindicated.',
    },
    5: {
      level: 5,
      summary: 'Contemporary AFib management integrates precision approaches to rhythm control, emerging ablation technologies, optimal anticoagulation strategies including LAAO, and addresses the AFib-heart failure intersection with evidence from landmark trials.',
      explanation: `## Current Guidelines and Evidence

### 2023 ACC/AHA/ACCP/HRS AFib Guidelines

**Key Updates:**
1. Earlier consideration of rhythm control (EAST-AFNET 4)
2. Expanded ablation recommendations
3. DOAC preference over warfarin strengthened
4. Comprehensive risk factor management emphasized
5. Shared decision-making for all major decisions

### EAST-AFNET 4 Trial Implications

**Design:** Early rhythm control (<1 year from diagnosis) vs usual care

**Results:**
- 21% reduction in CV death, stroke, HF hospitalization, ACS
- Benefit driven by reduced stroke and CV death
- More sinus rhythm in early intervention group

**Paradigm Shift:**
- Challenges AFFIRM/RACE "rate control is sufficient" interpretation
- Earlier, more aggressive rhythm control may improve outcomes
- Mechanism: Reduction in AFib burden, reverse remodeling

## Advanced Ablation Strategies

### Substrate-Based Ablation

**Low Voltage Area (LVA) Ablation:**
- Target fibrotic areas (<0.5 mV)
- Homogenize substrate
- May improve outcomes in persistent AFib

**CFAE Ablation:**
- Complex fractionated electrograms
- STAR-AF II: Did not improve outcomes over PVI alone
- Largely abandoned

**Rotor Ablation (FIRM):**
- Map stable rotors
- Targeted ablation
- Mixed results; technique-dependent

### Hybrid Ablation

**Convergent Procedure:**
- Surgical epicardial ablation + catheter endocardial
- For persistent/long-standing persistent AFib
- 80-90% single-procedure success

**Totally Thoracoscopic (TT) Ablation:**
- Box lesion set
- Ligament of Marshall division
- LAA exclusion
- May avoid long-term anticoagulation

### Pulsed Field Ablation (PFA)

**Mechanism:**
- Non-thermal irreversible electroporation
- Selective for cardiac myocytes
- Spares adjacent structures (esophagus, phrenic nerve)

**Current Devices:**
- Farapulse (Pentaspline catheter)
- Medtronic PulseSelect
- Multiple others in development

**Advantages:**
- Near-zero esophageal injury risk
- Lower phrenic nerve injury
- Faster procedure times
- Durable lesions

**Trials:**
- ADVENT: PFA non-inferior to thermal ablation
- INSPIRE: High acute success rates

## Anticoagulation Nuances

### Special Populations

**Very Elderly (>90 years):**
- Anticoagulation still beneficial
- Individual bleeding risk assessment
- DOACs still preferred if CrCl adequate

**Falls Risk:**
- Anticoagulation benefits usually outweigh fall risk
- ~300 falls needed to offset stroke prevention benefit
- DOAC lower ICH risk is protective

**Frailty:**
- Frailty increases both stroke and bleeding risk
- Anticoagulation benefit maintained
- Life expectancy consideration

**Renal Impairment:**

| CrCl | DOAC Options |
|------|--------------|
| 30-50 | All DOACs (dose adjust) |
| 15-30 | Apixaban, rivaroxaban (with caution) |
| <15 | Warfarin or apixaban (dialysis) |
| Dialysis | Apixaban 5 mg BID (RENAL-AF) or warfarin |

### LAAO Advancements

**WATCHMAN FLX:**
- Improved design
- Higher complete closure rates
- Lower DRT (device-related thrombus)

**Amulet:**
- Dual-seal mechanism
- Larger LAA coverage
- HEAD-TO-HEAD trial vs WATCHMAN

**Post-Implant Antithrombotic Regimens:**
- Traditional: DAPT 6 weeks → ASA/clopidogrel → ASA alone
- Evolving: Some data support DOAC post-implant
- Trend toward de-escalation

### Anticoagulation in Athletes

**Considerations:**
- Higher bleeding risk with contact sports
- May prefer shorter-acting DOAC (dabigatran)
- Low CHA2DS2-VASc may defer anticoagulation
- Ablation to achieve rhythm control attractive

## AFib and Heart Failure Intersection

### AF-CHF Trial Revisited

**Original Conclusion:** No benefit to rhythm control in HF

**Reinterpretation:**
- Limited ablation use
- Drug therapy limited success
- Sinus rhythm associated with better outcomes (observational)

### AMICA Trial

**Question:** Ablation vs medical therapy in persistent AFib with HFrEF

**Result:** No significant difference in LVEF at 1 year

**Limitations:** High crossover rate, limited follow-up

### RAFT-AF

**Question:** Ablation vs rate control in HF + AFib

**Result:** No difference in mortality or HF events

**Note:** Different from CASTLE-AF; more rate control patients achieved good rates

### Synthesis

- CASTLE-AF most supportive of ablation in HFrEF
- Benefits likely depend on achieving and maintaining sinus rhythm
- Individual assessment of likelihood of success
- Earlier intervention (newer AFib, less remodeling) likely better

## Emerging Concepts

### AFib Burden

**Definition:** Percentage of time in AFib

**Relevance:**
- May correlate with stroke risk
- SWISS-AF: High burden associated with worse outcomes
- Implantables and wearables for monitoring

### Subclinical AFib (AHRE)

**Definition:** Device-detected atrial high-rate episodes without clinical AFib

**Management:**
- NOAH-AFNET 6: DOAC vs placebo - study stopped for futility
- ARTESiA: Apixaban reduced stroke but increased bleeding
- Current: Enhanced monitoring, individualized anticoagulation

### Risk Factor Modification

**ARREST-AF, LEGACY:**
- Aggressive risk factor management reduces AFib recurrence
- Weight loss >10%: 6x more likely to be arrhythmia-free
- BP control, sleep apnea treatment, alcohol reduction

**SORT-AF:**
- Structured weight loss program improves ablation outcomes
- Lifestyle modification as adjunctive therapy

### Machine Learning and AI

**Applications:**
- ECG-based AFib detection
- Stroke risk prediction beyond CHA2DS2-VASc
- Ablation outcome prediction
- Personalized therapy selection

## Future Directions

1. **PFA Maturation:** Optimal parameters, lesion durability
2. **Wearable Integration:** Continuous monitoring, AI analysis
3. **Precision Anticoagulation:** Genetic/biomarker-guided dosing
4. **Earlier Intervention:** Population screening, preventive ablation
5. **LAAO Evolution:** Totally percutaneous, improved devices
6. **Gene Therapy:** Targeting ion channel mutations`,
      keyTerms: [
        { term: 'EAST-AFNET 4', definition: 'Trial showing early rhythm control reduces CV outcomes vs usual care in AFib' },
        { term: 'AFib burden', definition: 'Percentage of time spent in atrial fibrillation; may influence stroke risk and outcomes' },
        { term: 'AHRE', definition: 'Atrial high-rate episodes; device-detected subclinical AFib' },
        { term: 'irreversible electroporation', definition: 'Mechanism of PFA; creates lesions through cell membrane permeabilization' },
        { term: 'ARREST-AF', definition: 'Study demonstrating risk factor modification reduces AFib recurrence' },
        { term: 'hybrid ablation', definition: 'Combined surgical epicardial and catheter endocardial ablation for persistent AFib' },
      ],
      clinicalNotes: `Key clinical pearls for AFib management:

1. **Anticoagulation**: DOAC preferred for nearly all; LAAO for true contraindications
2. **Early Rhythm Control**: EAST-AFNET 4 supports early intervention within first year
3. **Ablation**: First-line option for symptomatic paroxysmal AFib; CASTLE-AF for HFrEF
4. **PFA**: Emerging as safer alternative; lower esophageal/phrenic injury risk
5. **Risk Factor Modification**: Weight loss, BP control, OSA treatment are essential
6. **Subclinical AFib**: ARTESiA suggests benefit but increased bleeding; individualize
7. **WPW + AFib**: Emergency - avoid AV nodal blockers; use procainamide or DC cardioversion
8. **Special Populations**: Anticoagulate elderly and fallers; DOAC-adjusted dosing in CKD`,
    },
  },

  media: [
    {
      id: 'afib-ecg-example',
      type: 'diagram',
      filename: 'afib-ecg-characteristics.svg',
      title: 'ECG in Atrial Fibrillation',
      description: 'Irregularly irregular rhythm with fibrillatory waves',
    },
    {
      id: 'cha2ds2-vasc-calculator',
      type: 'diagram',
      filename: 'cha2ds2-vasc-score.svg',
      title: 'CHA2DS2-VASc Stroke Risk Calculator',
      description: 'Visual guide to stroke risk assessment in AFib',
    },
    {
      id: 'pvi-ablation-diagram',
      type: 'diagram',
      filename: 'pvi-ablation-anatomy.svg',
      title: 'Pulmonary Vein Isolation',
      description: 'Catheter ablation anatomy and lesion sets',
    },
  ],

  citations: [
    {
      id: 'acc-aha-afib-2023',
      type: 'article',
      title: '2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation',
      authors: ['Joglar JA', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000001193',
    },
    {
      id: 'east-afnet-4',
      type: 'article',
      title: 'Early Rhythm-Control Therapy in Patients with Atrial Fibrillation',
      authors: ['Kirchhof P', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'castle-af',
      type: 'article',
      title: 'Catheter Ablation for Atrial Fibrillation with Heart Failure',
      authors: ['Marrouche NF', 'et al.'],
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'topic-ecg-interpretation', targetType: 'topic', relationship: 'related', label: 'ECG Interpretation' },
    { targetId: 'topic-cardiac-medications', targetType: 'topic', relationship: 'related', label: 'Anticoagulation' },
    { targetId: 'condition-stroke', targetType: 'condition', relationship: 'related', label: 'Stroke Prevention' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['electrophysiology', 'anticoagulation', 'ablation', 'arrhythmia'],
    keywords: ['AFib', 'atrial fibrillation', 'CHA2DS2-VASc', 'DOAC', 'ablation', 'stroke prevention'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default atrialFibrillation;
