/**
 * Atrial Fibrillation - Comprehensive Educational Content
 *
 * Covers pathophysiology, classification, stroke risk, rate vs rhythm control,
 * and catheter ablation for atrial fibrillation.
 */

import { EducationalContent } from '../../types';

export const atrialFibrillation: EducationalContent = {
  id: 'condition-atrial-fibrillation',
  type: 'condition',
  name: 'Atrial Fibrillation',
  nameEs: 'Fibrilación Auricular',
  alternateNames: ['AFib', 'AF', 'A-fib', 'Auricular Fibrillation'],
  hpoId: 'HP:0005110',

  levels: {
    1: {
      level: 1,
      summary: 'Atrial fibrillation is when your heart beats in an irregular, often fast rhythm because the upper chambers of your heart quiver instead of pumping normally.',
      explanation: `Your heart has four chambers - two on top (atria) and two on bottom (ventricles). Normally, your heart beats in a steady rhythm like a drum, controlled by electrical signals.

In atrial fibrillation (AFib), the electrical signals in the upper chambers go haywire. Instead of beating normally, the atria quiver or shake very fast (like Jell-O wiggling). This makes your whole heart beat irregularly.

**What does AFib feel like?**
Some people feel:
- Heart racing or pounding (palpitations)
- Chest discomfort
- Shortness of breath
- Feeling dizzy or lightheaded
- Feeling very tired

But many people don't feel anything at all!

**Why is AFib dangerous?**
When the atria quiver instead of pumping, blood can pool and form clots. If a clot travels to your brain, it causes a stroke. AFib increases stroke risk by 5 times.

Over time, AFib can also weaken your heart and lead to heart failure.

**What causes AFib?**
- High blood pressure
- Heart disease
- Drinking too much alcohol
- Being overweight
- Sleep apnea
- Thyroid problems
- Getting older

**How is AFib treated?**
1. **Blood thinners**: Prevent blood clots and stroke
2. **Heart rate medicines**: Slow down the heart rate
3. **Heart rhythm medicines**: Try to restore normal rhythm
4. **Procedures**: Cardioversion (shock) or ablation (burning abnormal tissue)
5. **Lifestyle changes**: Lose weight, limit alcohol, treat sleep apnea`,
      keyTerms: [
        { term: 'atrium', definition: 'One of the two upper chambers of the heart that receive blood' },
        { term: 'palpitations', definition: 'The feeling of your heart racing, pounding, or skipping beats' },
        { term: 'blood thinner', definition: 'Medicine that helps prevent blood clots from forming' },
        { term: 'stroke', definition: 'Brain damage that happens when blood flow to part of the brain is blocked, often by a blood clot' },
      ],
      analogies: [
        'Normally your heart beats like a steady drum: lub-dub, lub-dub. In AFib, it is like a drummer having a seizure - completely irregular.',
        'The atria in AFib are like a bag of worms wiggling around instead of squeezing blood properly.',
        'Blood pooling in the atria is like water sitting still in a pond - it gets stagnant and things can start forming in it.',
      ],
      examples: [
        'A 70-year-old man with high blood pressure notices his heart sometimes races and feels irregular, especially after drinking alcohol.',
        'A woman who had a stroke is found to have AFib, which caused a blood clot that traveled to her brain.',
      ],
    },
    2: {
      level: 2,
      summary: 'Atrial fibrillation is an irregularly irregular supraventricular arrhythmia characterized by chaotic atrial activation, increasing stroke risk 5-fold and requiring anticoagulation based on risk stratification, along with rate or rhythm control strategies.',
      explanation: `## What Happens in AFib

Instead of organized electrical signals, the atria have multiple chaotic wavelets of electrical activity. This causes:
- Atrial rates of 350-600 beats per minute (too fast to contract effectively)
- Loss of atrial "kick" (10-25% of cardiac output)
- Irregularly irregular ventricular response (typically 80-180 bpm untreated)

## Classification of AFib

| Type | Definition |
|------|------------|
| Paroxysmal | Episodes that start and stop on their own, lasting <7 days |
| Persistent | Continuous AFib lasting >7 days |
| Long-standing persistent | Continuous AFib >12 months |
| Permanent | AFib accepted by patient and physician; no more rhythm control attempts |

## Causes and Risk Factors

**Cardiac Causes:**
- Hypertension (most common)
- Heart failure
- Valvular heart disease (especially mitral stenosis)
- Coronary artery disease
- Cardiomyopathy

**Non-Cardiac Causes:**
- Thyroid disease (hyperthyroidism)
- Obesity
- Sleep apnea
- Alcohol ("holiday heart")
- Pulmonary disease
- Post-surgery
- Caffeine (controversial)

## Complications

### Stroke
- 5x increased risk of ischemic stroke
- Cardioembolic strokes are often larger and more disabling
- Blood clots typically form in the left atrial appendage

### Heart Failure
- Tachycardia-induced cardiomyopathy (heart weakens from racing)
- Loss of atrial contraction reduces cardiac output
- AFib and HF commonly coexist

## Diagnosis

**ECG findings:**
- Absent P waves
- Irregularly irregular R-R intervals
- Fibrillatory waves (fine or coarse)
- Ventricular rate varies

**Additional workup:**
- Echocardiogram (heart structure, function)
- TSH (thyroid function)
- CBC, BMP (baseline labs)
- Sleep study if suspected OSA

## Treatment

### Stroke Prevention (Most Important!)

**CHA₂DS₂-VASc Score** predicts stroke risk:
| Factor | Points |
|--------|--------|
| Congestive heart failure | 1 |
| Hypertension | 1 |
| Age ≥75 | 2 |
| Diabetes | 1 |
| Stroke/TIA/thromboembolism | 2 |
| Vascular disease (MI, PAD) | 1 |
| Age 65-74 | 1 |
| Sex category (female) | 1 |

- Score ≥2 (men) or ≥3 (women): Anticoagulation recommended
- Anticoagulant options: DOACs (apixaban, rivaroxaban, dabigatran, edoxaban) or warfarin

### Rate Control
Goal: Resting heart rate <110 bpm (lenient) or <80 bpm (strict)
- Beta-blockers (metoprolol, carvedilol)
- Calcium channel blockers (diltiazem, verapamil)
- Digoxin (adjunctive)

### Rhythm Control
Goal: Restore and maintain normal sinus rhythm
- **Cardioversion**: Electrical shock or drugs to reset rhythm
- **Antiarrhythmic drugs**: Flecainide, propafenone, sotalol, dofetilide, amiodarone
- **Catheter ablation**: Burn or freeze areas triggering AFib (pulmonary vein isolation)`,
      keyTerms: [
        { term: 'anticoagulation', definition: 'Blood-thinning medication that prevents blood clots from forming', pronunciation: 'an-tee-koh-ag-yoo-LAY-shun' },
        { term: 'cardioversion', definition: 'Using an electrical shock or medication to restore a normal heart rhythm' },
        { term: 'CHA₂DS₂-VASc', definition: 'Scoring system to assess stroke risk in atrial fibrillation and guide anticoagulation decisions' },
        { term: 'rate control', definition: 'Strategy focused on slowing the heart rate without trying to restore normal rhythm' },
        { term: 'rhythm control', definition: 'Strategy focused on restoring and maintaining normal sinus rhythm' },
      ],
      analogies: [
        'The CHA₂DS₂-VASc score is like a checklist that adds up your stroke risk factors - the more points, the more benefit from blood thinners.',
        'Rate control is like letting traffic flow chaotically but slowly; rhythm control is like restoring the traffic lights.',
      ],
    },
    3: {
      level: 3,
      summary: 'Atrial fibrillation is a re-entrant arrhythmia initiated by triggers (often pulmonary vein ectopy) and sustained by atrial substrate remodeling, requiring comprehensive management addressing thromboembolism prophylaxis, ventricular rate modulation, and rhythm restoration through pharmacologic or ablative approaches.',
      explanation: `## Electrophysiologic Mechanisms

### Initiation
- **Focal triggers**: Ectopic beats, most commonly from pulmonary veins
- PV musculature has shorter refractory periods
- "AFib begets AFib" - episodes promote electrical remodeling

### Maintenance
**Multiple Wavelet Hypothesis (Moe):**
- Multiple re-entrant wavelets coexist
- Wavelets collide, extinguish, and regenerate
- Requires critical mass of atrial tissue

**Focal Driver Hypothesis:**
- Localized rotors or focal sources drive AFib
- Fibrillatory conduction to rest of atria

### Atrial Remodeling
**Electrical remodeling:**
- Shortened atrial refractory period
- Loss of rate adaptation
- Increased dispersion of refractoriness

**Structural remodeling:**
- Atrial fibrosis
- Myocyte hypertrophy
- Gap junction changes
- Autonomic nerve proliferation

## Clinical Assessment

### History
- Symptom burden (EHRA score)
- Pattern and triggers
- Duration of episodes
- Prior cardioversions, ablations
- Anticoagulation history

### EHRA Symptom Score
| Grade | Symptoms |
|-------|----------|
| I | No symptoms |
| IIa | Mild; normal daily activity not affected |
| IIb | Moderate; normal daily activity not affected but patient troubled |
| III | Severe; normal daily activity affected |
| IV | Disabling; normal daily activity discontinued |

### Diagnostic Studies

**Transthoracic Echocardiogram:**
- Left atrial size (remodeling marker)
- LV function
- Valvular disease

**Transesophageal Echocardiogram:**
- LAA thrombus assessment before cardioversion
- LAA morphology

**Ambulatory Monitoring:**
- Holter (24-72 hours)
- Event monitors (weeks)
- Implantable loop recorders (years)

## Stroke Prevention

### CHA₂DS₂-VASc Application
- Score 0 (men) or 1 (women): No anticoagulation
- Score 1 (men) or 2 (women): Consider anticoagulation
- Score ≥2 (men) or ≥3 (women): Anticoagulation recommended

### HAS-BLED Bleeding Risk Score
| Factor | Points |
|--------|--------|
| Hypertension (uncontrolled) | 1 |
| Abnormal renal/liver function | 1-2 |
| Stroke history | 1 |
| Bleeding history | 1 |
| Labile INR | 1 |
| Elderly (>65) | 1 |
| Drugs/alcohol | 1-2 |

- High bleeding risk (≥3) does NOT contraindicate anticoagulation
- Identifies modifiable bleeding risk factors

### DOAC vs Warfarin

| Feature | DOACs | Warfarin |
|---------|-------|----------|
| Monitoring | Not required | INR monitoring |
| Drug interactions | Fewer | Many |
| Reversal agent | Available for most | Vitamin K, PCC |
| Renal clearance | Varies by agent | Hepatic |
| Mechanical valves | Contraindicated | Required |
| Mitral stenosis | Not recommended | Preferred |

### Left Atrial Appendage Closure
- For patients with contraindications to long-term anticoagulation
- WATCHMAN, LARIAT devices
- Surgical LAA exclusion

## Rate Control

### Pharmacology

**Beta-blockers:**
- Block AV nodal conduction
- First-line for most patients
- Avoid in acute decompensated HF

**Non-dihydropyridine CCBs:**
- Diltiazem, verapamil
- Avoid in HFrEF (negative inotropy)

**Digoxin:**
- Increases vagal tone, slows AV conduction
- Adjunctive to beta-blocker/CCB
- Less effective with exercise

**Amiodarone:**
- For rate control when other agents fail
- Multiple toxicities limit long-term use

### Rate Control Targets
- RACE II trial: Lenient (<110 bpm resting) vs strict (<80 bpm)
- No difference in outcomes
- Lenient control acceptable for most

### AV Node Ablation + Pacemaker
- "Ablate and pace" strategy
- Reserved for refractory cases
- Permanent pacemaker dependence

## Rhythm Control

### Cardioversion

**Electrical Cardioversion:**
- Biphasic waveform, 120-200J
- Anterior-posterior pad placement preferred
- Success rates 90%+ for recent-onset AFib

**Pharmacologic Cardioversion:**
- Class IC: Flecainide, propafenone (no structural heart disease)
- Class III: Ibutilide, dofetilide, amiodarone

**Anticoagulation for Cardioversion:**
- AFib ≥48 hours or unknown duration:
  - 3 weeks anticoagulation before OR TEE to exclude LAA thrombus
  - 4 weeks anticoagulation after
- AFib <48 hours: Cardiovert with anticoagulation; continue based on CHA₂DS₂-VASc

### Antiarrhythmic Drug Therapy

| Drug | Class | Use | Monitoring |
|------|-------|-----|------------|
| Flecainide | IC | No structural heart disease | ECG (QRS) |
| Propafenone | IC | No structural heart disease | ECG (QRS) |
| Sotalol | III | Can use with some structural disease | QTc, renal function |
| Dofetilide | III | Can use with HF | QTc, inpatient initiation |
| Amiodarone | III | Any structural heart disease | Thyroid, liver, lungs, skin |
| Dronedarone | III | No severe HF | LFTs |

### Catheter Ablation
- Pulmonary vein isolation (PVI) is cornerstone
- Success rates: 60-80% at 1 year (single procedure)
- May need repeat procedures
- Better outcomes with earlier intervention
- Consider before or with AAD failure`,
      keyTerms: [
        { term: 'pulmonary vein isolation', definition: 'Catheter ablation procedure that electrically isolates the pulmonary veins from the left atrium to eliminate AFib triggers', pronunciation: 'PUL-muh-ner-ee vane eye-soh-LAY-shun' },
        { term: 'atrial remodeling', definition: 'Electrical and structural changes in the atria that promote AFib maintenance and progression' },
        { term: 'left atrial appendage', definition: 'Small pouch in the left atrium where blood clots typically form in AFib; target for closure devices' },
        { term: 'DOAC', definition: 'Direct oral anticoagulant; newer blood thinners that inhibit factor Xa or thrombin directly' },
        { term: 'EHRA score', definition: 'European Heart Rhythm Association symptom severity classification for atrial fibrillation' },
      ],
      clinicalNotes: 'When initiating DOACs, ensure appropriate dosing for renal function. Apixaban and rivaroxaban require dose reduction for certain combinations of age, weight, and creatinine. Avoid DOACs in moderate-severe mitral stenosis and mechanical valves. Always calculate CHA₂DS₂-VASc - even paroxysmal AFib requires anticoagulation if score is elevated.',
    },
    4: {
      level: 4,
      summary: 'Atrial fibrillation management integrates mechanistic understanding of trigger-substrate interactions, personalized stroke risk assessment, shared decision-making for rhythm versus rate control, and evolving ablation techniques including pulsed-field ablation, with attention to AFib comorbidities and the growing evidence for early rhythm control.',
      explanation: `## Advanced Pathophysiology

### Cellular Electrophysiology
- **Ionic current changes:**
  - Downregulation of L-type Ca²⁺ current (ICaL)
  - Increased inward rectifier K⁺ current (IK1)
  - Reduced transient outward K⁺ current (Ito)
- **Calcium handling abnormalities:**
  - Increased diastolic Ca²⁺ leak from SR
  - Delayed afterdepolarizations
  - Triggered activity

### Molecular Mechanisms
**Fibrosis pathways:**
- TGF-β signaling
- Angiotensin II
- Connective tissue growth factor
- MicroRNA dysregulation

**Inflammation:**
- Elevated CRP, IL-6
- NLRP3 inflammasome activation
- Oxidative stress

### Substrate Characterization
**Voltage mapping:**
- Low voltage zones (<0.5 mV) indicate fibrosis
- Predict procedural outcomes
- Guide ablation strategy

**Imaging:**
- LA LGE-MRI for fibrosis quantification
- Utah stages (I-IV) based on fibrosis burden
- Stage IV: >35% enhancement, poor ablation outcomes

## Comprehensive Risk Assessment

### CHA₂DS₂-VASc Nuances
- Clinical trial validation differs from real-world
- Stroke risk increases with age regardless of score
- Consider continuous rather than categorical risk

### Beyond CHA₂DS₂-VASc
**Biomarkers:**
- Troponin: Independent stroke predictor
- NT-proBNP: Adds predictive value
- ABC-AF score incorporates biomarkers

**Imaging:**
- LAA morphology (chicken wing vs cactus vs cauliflower)
- LA appendage flow velocity (<20 cm/s = high risk)
- Spontaneous echo contrast (SEC)

### Net Clinical Benefit
- Balance stroke prevention vs bleeding risk
- DOACs provide net benefit even in elderly
- HAS-BLED identifies modifiable risks, not contraindications

## Contemporary DOAC Evidence

### Landmark Trials
| Trial | DOAC | Key Finding |
|-------|------|-------------|
| RE-LY | Dabigatran | 150mg: Superior efficacy; 110mg: Similar efficacy, less bleeding |
| ROCKET-AF | Rivaroxaban | Non-inferior, higher-risk population |
| ARISTOTLE | Apixaban | Superior efficacy and safety |
| ENGAGE AF-TIMI 48 | Edoxaban | Non-inferior, less bleeding |

### Special Situations
**Renal impairment:**
- Apixaban: Use down to CrCl 15 mL/min
- Rivaroxaban: Avoid if CrCl <15 mL/min
- Dabigatran: Avoid if CrCl <30 mL/min
- Edoxaban: Avoid if CrCl <15 mL/min; consider half-dose if >95 mL/min

**Obesity:**
- Limited data for BMI >40 or weight >120 kg
- Consider drug-specific pharmacokinetic data
- Apixaban often preferred

**ACS with AFib:**
- Triple therapy (DOAC + DAPT) increases bleeding
- PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS, ENTRUST-AF PCI trials
- Minimize triple therapy duration; prefer DOAC + P2Y12i

## Early Rhythm Control

### EAST-AFNET 4 (2020)
- Early rhythm control (<1 year from diagnosis) vs usual care
- 21% reduction in CV death, stroke, hospitalization
- Changed paradigm toward earlier intervention
- Rhythm control: Cardioversion, AADs, or ablation

### EARLY-AF (2021)
- First-line ablation vs AADs
- Ablation: Lower AFib recurrence
- Fewer adverse events with ablation

### STOP-AF First (2021)
- Cryoballoon ablation vs AADs as first-line
- Superior freedom from arrhythmia with ablation

## Catheter Ablation: Technical Advances

### Pulmonary Vein Isolation
**Endpoints:**
- Entry block: No conduction into PVs
- Exit block: No conduction out of PVs
- Dormant conduction testing (adenosine)

**Technologies:**
- Radiofrequency: Point-by-point lesions
- Cryoballoon: Single-shot isolation
- Contact force sensing
- High-power short-duration (HPSD)

### Pulsed-Field Ablation (PFA)
- Non-thermal tissue ablation
- Irreversible electroporation
- Myocardial-selective (spares esophagus, phrenic nerve)
- ADVENT trial: Non-inferior to thermal
- Rapid procedure times

### Beyond PVI
**Additional Targets:**
- Posterior wall isolation
- Mitral isthmus line
- CTI (cavotricuspid isthmus) if typical flutter
- CFAE ablation (less effective)
- Rotor ablation (CONFIRM: Mixed results)
- Marshall vein ethanol infusion

### Outcomes Predictors
- LA size (worse if >50-55 mm)
- Duration of persistent AFib
- Fibrosis burden (LGE-MRI)
- Sleep apnea (worse if untreated)
- Obesity (worse outcomes)

## Left Atrial Appendage Management

### Device Occlusion
**WATCHMAN:**
- PROTECT-AF, PREVAIL trials
- Non-inferior to warfarin for stroke prevention
- Avoids long-term anticoagulation
- DAPT for 6 months, then aspirin alone

**Amulet:**
- Dual-seal design
- Amulet IDE trial: Non-inferior to WATCHMAN

### Surgical Exclusion
**Indications:**
- Concomitant cardiac surgery
- Thoracoscopic ablation

**AtriClip:**
- External LAA occlusion
- >95% success rate
- No anticoagulation data alone

**LAAOS III (2021):**
- LAA occlusion during cardiac surgery
- 33% stroke reduction
- Anticoagulation still needed

## Integrated AFib Care

### Risk Factor Modification
**ARREST-AF, LEGACY:**
- Weight loss (>10%) associated with:
  - 6x greater likelihood of arrhythmia-free survival
  - Improvement in LA remodeling

**Modifiable Factors:**
- Hypertension: Target BP control
- Sleep apnea: CPAP
- Alcohol: Abstinence (ARREST-AF)
- Exercise: Regular, moderate (avoid excessive)
- Diabetes: Glycemic control

### Multidisciplinary Approach
- EP specialist
- Anticoagulation management (pharmacist)
- Risk factor clinic
- Nursing education
- Shared decision-making`,
      keyTerms: [
        { term: 'pulsed-field ablation', definition: 'Novel ablation technology using irreversible electroporation to create myocardial-selective lesions without thermal energy' },
        { term: 'EAST-AFNET 4', definition: 'Landmark trial showing early rhythm control (<1 year from diagnosis) reduces cardiovascular outcomes in AFib' },
        { term: 'left atrial appendage occlusion', definition: 'Device-based or surgical closure of the LAA to reduce stroke risk without long-term anticoagulation' },
        { term: 'low-voltage zone', definition: 'Areas of atrial tissue with reduced electrogram amplitude indicating fibrosis and potential ablation substrate' },
        { term: 'dormant conduction', definition: 'Temporarily blocked pulmonary vein connections that can recover, revealed by adenosine testing during ablation' },
      ],
      clinicalNotes: 'The EAST-AFNET 4 trial shifted the paradigm toward early rhythm control. For patients within 1 year of AFib diagnosis, especially those with symptoms or heart failure, consider rhythm control strategies early. Ablation as first-line therapy is now supported by multiple trials. For ablation candidates, address modifiable risk factors (weight loss, sleep apnea treatment, alcohol reduction) to improve outcomes. Pulsed-field ablation represents a promising advancement with improved safety profile.',
    },
    5: {
      level: 5,
      summary: 'Contemporary atrial fibrillation management emphasizes precision medicine approaches including AF burden quantification, genetic risk stratification, advanced imaging for substrate characterization, first-line ablation strategies, and novel technologies including pulsed-field ablation, with integration of digital health tools for rhythm monitoring and guideline-directed therapy optimization.',
      explanation: `## Mechanistic Advances

### Genetic Architecture
**Monogenic AF:**
- Ion channel mutations (KCNQ1, KCNH2, SCN5A)
- Structural protein mutations (MYL4)
- Transcription factors (NKX2-5, TBX5)

**Common Variants (GWAS):**
- >100 loci identified
- PITX2: Most significant signal
- GWAS + clinical variables improve prediction
- Polygenic risk scores in development

### Calcium Handling Dysfunction
- RyR2 hyperphosphorylation
- Increased diastolic SR Ca²⁺ leak
- Delayed afterdepolarizations
- Triggered activity from PVs

### Inflammation and Oxidative Stress
**NLRP3 Inflammasome:**
- Activated by Ca²⁺ overload, ROS
- IL-1β, IL-18 release
- Promotes fibrosis
- Therapeutic target (colchicine trials ongoing)

**Oxidative Stress:**
- NOX2, NOX4 upregulation
- eNOS uncoupling
- Mitochondrial dysfunction

## Precision Phenotyping

### AF Burden Assessment
**Continuous Monitoring:**
- Implantable loop recorders (ILR)
- Cardiac implantable electronic devices (CIEDs)
- Smartwatches (Apple Watch, Fitbit)
- Patch monitors (Zio, SEEQ)

**Clinical Implications:**
- AF burden correlates with stroke risk
- Brief episodes (<24h) have lower stroke risk
- Device-detected AF (AHRE): Anticoagulation if high-risk features
- NOAH-AFNET 6, ARTESiA trials: Inform AHRE management

### Imaging Phenotyping

**Late Gadolinium Enhancement MRI:**
- Utah classification of fibrosis (Stages I-IV)
- Predicts ablation outcomes
- Stage IV (>35%): Consider medical therapy

**LA Strain:**
- Speckle-tracking echocardiography
- Impaired strain predicts stroke
- May identify high-risk patients with low CHA₂DS₂-VASc

**4D Flow MRI:**
- LA flow patterns
- Stasis quantification
- Research tool for thrombogenesis understanding

## Anticoagulation: Nuances

### DOAC Pharmacokinetics

| Parameter | Dabigatran | Rivaroxaban | Apixaban | Edoxaban |
|-----------|------------|-------------|----------|----------|
| Target | Thrombin | Factor Xa | Factor Xa | Factor Xa |
| Bioavailability | 6-7% | 66% fasting, 80-100% with food | 50% | 62% |
| Renal excretion | 80% | 35% | 27% | 50% |
| Half-life | 12-17h | 5-9h (young), 11-13h (elderly) | 12h | 10-14h |
| Drug interactions | P-gp | CYP3A4, P-gp | CYP3A4, P-gp | P-gp |

### Reversal Agents
- **Idarucizumab**: Dabigatran-specific antibody fragment
- **Andexanet alfa**: Recombinant factor Xa decoy for apixaban/rivaroxaban
- **4-factor PCC**: Off-label for factor Xa inhibitors

### Special Populations

**Device-Detected AF:**
- AHRE: Atrial high-rate episodes (>175 bpm for >5-6 minutes)
- NOAH-AFNET 6: Edoxaban vs no anticoagulation in AHRE
- ARTESiA: Apixaban vs aspirin in subclinical AF
- Current practice: Individualized based on burden and stroke risk

**AF with ICH History:**
- Consider LAAO if high stroke risk
- If resuming anticoagulation, DOACs likely safer than warfarin
- Shared decision-making essential

**AF in ESRD:**
- Limited DOAC data; apixaban (2.5 mg BID) used
- Consider bleeding risk carefully
- LAAO may be considered

## Ablation: State of the Art

### Pulsed-Field Ablation (PFA)

**Mechanism:**
- Irreversible electroporation
- Disrupts cell membrane integrity
- Non-thermal: No heating or freezing
- Tissue-selective: Cardiomyocytes sensitive, neurons resistant

**Advantages:**
- Reduced esophageal injury risk
- Phrenic nerve sparing
- Rapid lesion creation
- Potentially durable lesions

**Evidence:**
- ADVENT: Non-inferior to RF/cryo for PVI
- Ongoing: PULSED-AF, MANIFEST-PF registries
- Long-term durability data emerging

### Hybrid Approaches

**Convergent Procedure:**
- Epicardial ablation (surgeon)
- Endocardial ablation (EP)
- Box lesion set
- For persistent/long-standing persistent AFib

**Thoracoscopic Ablation + LAAO:**
- AtriClip placement
- PV isolation
- Ganglionic plexi ablation
- Marshall ligament division

### Ablation Strategy Selection

**Paroxysmal AF:**
- PVI alone often sufficient
- Consider single-shot devices (cryo, PFA)
- 60-80% freedom from AF at 1 year (single procedure)

**Persistent AF:**
- PVI as foundation
- Consider additional targets:
  - Posterior wall isolation
  - Mitral isthmus
  - Empiric linear lesions less supported
- 50-70% freedom from AF at 1 year

**Long-Standing Persistent AF:**
- Lower success rates (40-60%)
- Hybrid approaches
- Consider staging (PVI first, then additional)

## Emerging Therapies

### Pharmacologic

**Antiarrhythmic Drugs in Development:**
- Atrial-selective K⁺ channel blockers
- SK channel blockers
- Gap junction modulators

**Upstream Therapies:**
- Colchicine (COPAFIB trial)
- SGLT2 inhibitors (AF reduction in HF trials)
- RAAS inhibition (ACEi/ARB for remodeling)

### Non-Pharmacologic

**Renal Denervation:**
- ERADICATE-AF: RDN + PVI vs PVI alone
- Improved outcomes in hypertensive AF patients
- Modulates autonomic balance

**Neuromodulation:**
- Low-level vagal stimulation
- Spinal cord stimulation
- Investigational

### Digital Health Integration

**Remote Monitoring:**
- Smartwatch AF detection (Apple Heart Study, HEARTLINE)
- Continuous rhythm monitoring
- Adherence tracking

**AI Applications:**
- AF detection from single-lead ECG
- Risk prediction models
- Ablation lesion optimization

## Guideline Integration

### 2023 ACC/AHA/ACCP/HRS AF Guideline Updates

**Key Recommendations:**
- Class I: Anticoagulation based on CHA₂DS₂-VASc
- Class I: DOACs preferred over warfarin (no MS or mechanical valve)
- Class I: Risk factor modification
- Class IIa: Ablation as first-line for paroxysmal AF
- Class IIb: Ablation before AAD for persistent AF

### Shared Decision-Making Framework
1. Stroke risk (CHA₂DS₂-VASc)
2. Symptom burden (EHRA score)
3. Patient values and preferences
4. Comorbidities affecting strategy
5. Ablation candidacy and success likelihood`,
      keyTerms: [
        { term: 'irreversible electroporation', definition: 'Mechanism of pulsed-field ablation where high-voltage electric fields permanently disrupt cell membranes without thermal injury' },
        { term: 'atrial high-rate episodes', definition: 'Device-detected rapid atrial rhythms suggesting AF; duration threshold varies by guideline and clinical implications remain under study' },
        { term: 'Utah classification', definition: 'MRI-based staging of left atrial fibrosis (I-IV) used to predict catheter ablation outcomes' },
        { term: 'polygenic risk score', definition: 'Aggregate genetic risk based on multiple common variants; emerging tool for AF risk prediction' },
        { term: 'NLRP3 inflammasome', definition: 'Multiprotein complex mediating inflammatory responses in AF pathogenesis; potential therapeutic target' },
        { term: 'convergent procedure', definition: 'Hybrid surgical-catheter ablation combining epicardial and endocardial approaches for persistent AF' },
      ],
      clinicalNotes: `Key clinical pearls for advanced AF management:

1. **Early rhythm control works**: EAST-AFNET 4 changed practice. For patients with recent-onset AF, pursue rhythm control early rather than waiting for AAD failure.

2. **Ablation as first-line is here**: EARLY-AF and STOP-AF First support cryoballoon ablation before AADs for paroxysmal AF. PFA is emerging as the next frontier with improved safety.

3. **Risk factor modification is essential**: Weight loss, OSA treatment, BP control, and alcohol cessation improve ablation outcomes and may reduce AF burden independently.

4. **Device-detected AF is nuanced**: AHRE management is evolving. Consider stroke risk factors, AF burden, and individual risk-benefit when deciding on anticoagulation.

5. **Fibrosis predicts outcomes**: Consider LGE-MRI before ablation for persistent AF. Stage IV fibrosis (>35%) predicts poor ablation outcomes.

6. **LAAO expands options**: For patients with contraindications to long-term anticoagulation, WATCHMAN/Amulet devices offer stroke protection.

7. **Personalize DOAC selection**: Consider renal function, drug interactions, and patient preference. Apixaban often preferred for safety profile.

8. **Digital tools are transforming monitoring**: Smartwatches detect AF, but clinical application requires careful interpretation and follow-up.`,
    },
  },

  media: [
    {
      id: 'afib-ecg',
      type: 'diagram',
      filename: 'afib-ecg.svg',
      title: 'Atrial Fibrillation ECG',
      description: 'Classic ECG findings in atrial fibrillation: absent P waves, irregularly irregular rhythm',
    },
    {
      id: 'afib-mechanism',
      type: 'diagram',
      filename: 'afib-mechanism.svg',
      title: 'AFib Pathophysiology',
      description: 'Multiple wavelet hypothesis and pulmonary vein triggers',
    },
    {
      id: 'chadvasc-algorithm',
      type: 'diagram',
      filename: 'chadvasc-algorithm.svg',
      title: 'CHA₂DS₂-VASc Anticoagulation Algorithm',
      description: 'Decision pathway for stroke prevention in AFib',
    },
  ],

  citations: [
    {
      id: 'acc-aha-af-2023',
      type: 'article',
      title: '2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation',
      authors: ['Joglar JA', 'Chung MK', 'Armbruster AL', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000001193',
    },
    {
      id: 'east-afnet-4',
      type: 'article',
      title: 'Early Rhythm-Control Therapy in Patients with Atrial Fibrillation',
      authors: ['Kirchhof P', 'Camm AJ', 'Goette A', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa2019422',
    },
    {
      id: 'early-af',
      type: 'article',
      title: 'Cryoballoon or Radiofrequency Ablation for Paroxysmal Atrial Fibrillation',
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'condition-hypertension', targetType: 'condition', relationship: 'related', label: 'Hypertension' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'related', label: 'Coronary Artery Disease' },
    { targetId: 'structure-heart', targetType: 'structure', relationship: 'related', label: 'Heart' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'electrophysiology', 'arrhythmia', 'anticoagulation'],
    keywords: ['atrial fibrillation', 'AFib', 'anticoagulation', 'ablation', 'stroke prevention', 'rate control', 'rhythm control'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default atrialFibrillation;
