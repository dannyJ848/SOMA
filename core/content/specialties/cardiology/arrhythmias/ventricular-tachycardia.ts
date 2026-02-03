/**
 * Ventricular Tachycardia - Comprehensive Educational Content
 *
 * Covers mechanisms, classification, diagnosis, acute management,
 * and long-term therapy including ICD and ablation.
 */

import { EducationalContent } from '../../../types';

export const ventricularTachycardia: EducationalContent = {
  id: 'condition-ventricular-tachycardia',
  type: 'condition',
  name: 'Ventricular Tachycardia',
  alternateNames: ['VT', 'V-tach', 'Ventricular Tachy'],
  hpoId: 'HP:0004756',

  levels: {
    1: {
      level: 1,
      summary: 'Ventricular tachycardia is a dangerous fast heart rhythm that starts in the bottom chambers of the heart and can be life-threatening.',
      explanation: `Your heart has four chambers - two on top (atria) and two on bottom (ventricles). The ventricles are the powerful pumping chambers that push blood to your body and lungs.

Normally, electrical signals start at the top of your heart and travel down in an organized way. In ventricular tachycardia (VT), the electrical signals start in the wrong place - directly in the ventricles - and make the heart beat very fast.

**Why VT is Dangerous:**

When your heart beats too fast from the wrong place:
- It doesn't have time to fill with blood properly
- It can't pump blood effectively to your body
- You can feel very sick very quickly
- It can turn into an even more dangerous rhythm

**Warning Signs:**
- Your heart racing or pounding
- Feeling dizzy or lightheaded
- Chest discomfort
- Shortness of breath
- Fainting or nearly fainting
- In severe cases, sudden collapse

**What Causes VT:**
- Previous heart attack (most common)
- Weak heart muscle (cardiomyopathy)
- Heart failure
- Some medications or drugs
- Abnormalities you're born with

**Treatment:**
- Emergency treatment may include electrical shock to the heart (cardioversion)
- Medications to control the rhythm
- A special device (ICD) that can shock the heart back to normal if VT happens
- Sometimes procedures to fix the abnormal electrical pathway

**This is a medical emergency!** If someone collapses or becomes unresponsive with a fast heart rate, call 911 immediately.`,
      keyTerms: [
        { term: 'ventricular tachycardia', definition: 'A fast heart rhythm starting in the bottom pumping chambers of the heart' },
        { term: 'ventricles', definition: 'The two lower chambers of the heart that pump blood out to the body' },
        { term: 'cardioversion', definition: 'An electrical shock to reset the heart to a normal rhythm' },
        { term: 'ICD', definition: 'Implantable cardioverter-defibrillator - a device that monitors heart rhythm and delivers shocks if needed' },
      ],
      analogies: [
        'VT is like the engine of a car revving way too fast - it makes a lot of noise but doesn\'t actually move the car well.',
        'Normal heart rhythm is like a well-choreographed dance. VT is like everyone suddenly dancing at triple speed without coordination.',
      ],
      examples: [
        'Someone who had a heart attack years ago might develop VT from scar tissue in their heart.',
        'A person with VT might suddenly feel their heart racing while just sitting down.',
      ],
    },
    2: {
      level: 2,
      summary: 'Ventricular tachycardia is a wide complex tachycardia (≥3 consecutive ventricular beats at ≥100 bpm) that can be hemodynamically stable or cause cardiovascular collapse, requiring prompt recognition and treatment.',
      explanation: `## Definition and Classification

**Definition:**
- ≥3 consecutive ventricular beats at rate ≥100 bpm
- Wide QRS complex (≥120 ms)
- Can originate from anywhere in the ventricles

**Classification by Duration:**
| Type | Duration | Significance |
|------|----------|--------------|
| Non-sustained VT (NSVT) | <30 seconds, self-terminating | May indicate risk |
| Sustained VT | ≥30 seconds or requires intervention | Medical emergency |

**Classification by Morphology:**
- **Monomorphic VT:** Same QRS appearance each beat - single focus/circuit
- **Polymorphic VT:** Changing QRS morphology - multiple foci or unstable circuit

## ECG Recognition

**Key Features:**
1. Wide QRS (≥120 ms, usually ≥140 ms)
2. Rate typically 150-250 bpm
3. AV dissociation (P waves marching through at slower rate)
4. Fusion beats and capture beats
5. Regular or nearly regular R-R intervals

**Distinguishing VT from SVT with Aberrancy:**

| Feature | Favors VT |
|---------|-----------|
| AV dissociation | Yes |
| Fusion/capture beats | Yes |
| Very wide QRS (>160 ms) | Yes |
| Concordance (all QRS same direction in V1-V6) | Yes |
| History of heart disease | Yes |
| Age >50 | Yes |

**Important Rule:** Assume wide complex tachycardia is VT until proven otherwise!

## Common Causes

**Ischemic Heart Disease (Most Common):**
- Prior myocardial infarction with scar
- Active ischemia

**Non-ischemic:**
- Dilated cardiomyopathy
- Hypertrophic cardiomyopathy
- Arrhythmogenic right ventricular cardiomyopathy (ARVC)
- Cardiac sarcoidosis
- Channelopathies (Long QT, Brugada)

**Reversible Causes:**
- Electrolyte abnormalities (hypokalemia, hypomagnesemia)
- Drug toxicity (digoxin, antiarrhythmics)
- Hypoxia
- Illicit drugs (cocaine, methamphetamine)

## Hemodynamic Impact

VT can cause:
- Decreased cardiac output (no atrial kick + rapid rate)
- Hypotension
- Heart failure exacerbation
- Myocardial ischemia
- Degeneration to ventricular fibrillation

**Symptoms depend on:**
- Ventricular rate
- Underlying heart function
- Duration of VT

## Acute Management

**Unstable VT (Hypotension, Altered Mental Status, Chest Pain):**
- Synchronized cardioversion (100J biphasic, then escalate)
- Pulseless VT = defibrillation as in cardiac arrest

**Stable Monomorphic VT:**
1. IV Amiodarone (150 mg over 10 min, then infusion)
2. IV Procainamide (alternative)
3. IV Lidocaine (third-line)
4. Elective cardioversion if drugs fail

**Polymorphic VT:**
- If normal QT: Treat as monomorphic VT
- If prolonged QT (Torsades de Pointes): IV Magnesium, overdrive pacing

## Long-term Management

**ICD:**
- Primary indication for sustained VT/VF survivors
- Secondary prevention of sudden cardiac death

**Medications:**
- Beta-blockers (first-line)
- Amiodarone or sotalol for ICD shocks

**Catheter Ablation:**
- For recurrent VT despite medications
- Can reduce ICD shocks significantly`,
      keyTerms: [
        { term: 'monomorphic VT', definition: 'VT with consistent QRS morphology suggesting a single electrical focus', pronunciation: 'mon-oh-MOR-fik' },
        { term: 'polymorphic VT', definition: 'VT with varying QRS morphology suggesting multiple foci or unstable circuit' },
        { term: 'sustained VT', definition: 'VT lasting ≥30 seconds or requiring intervention to terminate' },
        { term: 'AV dissociation', definition: 'Atria and ventricles beating independently; helps distinguish VT from SVT' },
        { term: 'torsades de pointes', definition: 'Polymorphic VT with twisting QRS axis, associated with long QT', pronunciation: 'tor-SAHD deh PWANT' },
        { term: 'synchronized cardioversion', definition: 'Electrical shock timed to the R wave to avoid inducing VF' },
      ],
      analogies: [
        'AV dissociation is like two drummers playing at different tempos - the atria keep their own beat while ventricles race.',
        'Monomorphic VT is like a broken record stuck playing the same note rapidly. Polymorphic VT is like someone randomly hitting different keys on a piano very fast.',
      ],
    },
    3: {
      level: 3,
      summary: 'Ventricular tachycardia mechanisms include reentry around scar, triggered activity, and enhanced automaticity, with management guided by hemodynamic stability, etiology, and long-term risk assessment for sudden cardiac death.',
      explanation: `## Mechanisms of VT

### Reentry (Most Common in Structural Heart Disease)

**Requirements:**
1. Two pathways with different conduction velocities
2. Unidirectional block in one pathway
3. Slow conduction allowing recovery of excitability

**In Post-MI VT:**
- Scar tissue creates zones of slow conduction
- Surviving myocyte bundles form channels through scar
- Circuit develops around scar border zone
- Critical isthmus identified during mapping

### Triggered Activity

**Early Afterdepolarizations (EADs):**
- Occur during phase 2-3 of action potential
- Associated with prolonged QT
- Mechanism of Torsades de Pointes
- Pause-dependent

**Delayed Afterdepolarizations (DADs):**
- Occur after repolarization complete
- Caused by intracellular calcium overload
- Digitalis toxicity, catecholamine excess
- Exercise/catecholamine dependent

### Enhanced Automaticity

- Abnormal automatic focus fires faster than SA node
- Idiopathic VT (structurally normal heart)
- Digitalis toxicity
- Usually responds to adenosine or verapamil

## Clinical Presentations and Evaluation

### History

**Symptoms:**
- Palpitations, racing heart
- Presyncope or syncope
- Chest discomfort
- Dyspnea
- Sudden cardiac arrest

**Risk Factors:**
- Prior MI, heart failure
- Family history of SCD
- Medications causing QT prolongation
- Substance use

### Physical Examination During VT

- Tachycardia (regular)
- Hypotension (variable)
- Cannon A waves in JVP (AV dissociation)
- Variable S1 intensity

### Diagnostic Workup

**Initial:**
- 12-lead ECG (during and after VT)
- Continuous monitoring
- Electrolytes, magnesium
- Troponin
- BNP
- Drug levels if applicable

**Structural Assessment:**
- Echocardiography (LV function, structural abnormalities)
- Cardiac MRI (scar characterization, ARVC, sarcoid)
- Coronary angiography if ischemia suspected

**Electrophysiologic:**
- EP study for inducibility
- Risk stratification
- Mapping for ablation

## ECG Analysis for VT

### Brugada Algorithm for Wide Complex Tachycardia

1. RS complex absent in all precordial leads? → VT
2. R to S >100 ms in any precordial lead? → VT
3. AV dissociation? → VT
4. Morphology criteria for VT?

**RBBB Morphology (V1 positive):**
- V1: Monophasic R, qR, or RS with tall R
- V6: R/S ratio <1 or QS pattern

**LBBB Morphology (V1 negative):**
- V1: Initial R >40 ms, slurred/notched S downstroke
- V6: QR or QS pattern

### Specific VT Patterns

**RVOT VT (Right Ventricular Outflow Tract):**
- LBBB morphology with inferior axis
- Usually benign, structurally normal heart
- Exercise-induced, catecholamine-sensitive
- Responds to adenosine, beta-blockers

**Fascicular VT (Idiopathic LV VT):**
- RBBB + left axis deviation (posterior fascicle)
- RBBB + right axis deviation (anterior fascicle)
- Relatively narrow QRS (120-140 ms)
- Verapamil-responsive

## Management Algorithm

### Acute Unstable VT

1. Confirm pulselessness → ACLS protocol
2. If pulse present with instability → Synchronized cardioversion
3. Correct reversible causes (K+, Mg2+, ischemia)

### Acute Stable Monomorphic VT

**First-line: IV Amiodarone**
- 150 mg over 10 minutes
- Then 1 mg/min for 6 hours, then 0.5 mg/min
- Total 24-hour dose ~1 g

**Second-line: IV Procainamide**
- 20-50 mg/min until arrhythmia suppressed, hypotension, QRS widens 50%, or max 17 mg/kg
- Then 1-4 mg/min infusion
- Avoid in heart failure

**Third-line: IV Lidocaine**
- 1-1.5 mg/kg bolus, then 1-4 mg/min
- Less effective than amiodarone/procainamide
- Useful in ischemic VT

### Long-Term Management

**ICD Indications:**
- Survived SCD (VF or hemodynamically unstable VT)
- Sustained VT with structural heart disease
- EF ≤35% (primary prevention)
- Specific cardiomyopathies (HCM, ARVC, sarcoid)

**Antiarrhythmic Drugs:**

| Drug | Mechanism | Use | Concerns |
|------|-----------|-----|----------|
| Amiodarone | Class III + others | First-line for recurrent VT | Organ toxicity |
| Sotalol | Beta-blocker + Class III | Alternative | QT prolongation |
| Mexiletine | Class IB | Add-on to amiodarone | GI side effects |

**Catheter Ablation:**
- Recurrent VT despite medications
- ICD shocks despite AADs
- Incessant VT or VT storm
- Success rates 50-80% depending on substrate`,
      keyTerms: [
        { term: 'reentry', definition: 'Circular electrical conduction pattern creating sustained arrhythmia around anatomic or functional barrier' },
        { term: 'early afterdepolarization', definition: 'Abnormal depolarization during repolarization phase; mechanism of Torsades de Pointes' },
        { term: 'delayed afterdepolarization', definition: 'Abnormal depolarization after complete repolarization; caused by calcium overload' },
        { term: 'VT storm', definition: '≥3 separate VT episodes within 24 hours requiring intervention' },
        { term: 'RVOT VT', definition: 'Idiopathic VT from right ventricular outflow tract; typically benign' },
        { term: 'fascicular VT', definition: 'Idiopathic LV VT involving Purkinje system; verapamil-responsive' },
      ],
      clinicalNotes: 'When in doubt, treat wide complex tachycardia as VT. Avoid verapamil in wide complex tachycardia unless fascicular VT is confirmed. Procainamide is relatively contraindicated in heart failure. RVOT VT has LBBB + inferior axis morphology.',
    },
    4: {
      level: 4,
      summary: 'Advanced VT management requires understanding of substrate characterization, risk stratification for sudden death, optimal ICD programming, antiarrhythmic selection, and ablation strategies including epicardial approaches.',
      explanation: `## Advanced Pathophysiology

### Scar-Related VT Substrate

**Zones Within Scar:**
1. Dense scar: No electrical activity
2. Border zone: Slow conduction, basis for reentry
3. Channels: Surviving myocyte bundles through scar
4. Exit sites: Where VT emerges from circuit

**Electroanatomic Features:**
- Scar = Low voltage (<0.5 mV bipolar)
- Border zone = 0.5-1.5 mV
- Normal myocardium = >1.5 mV
- Late potentials: Fragmented signals indicating slow conduction

### Non-Ischemic VT Substrates

**Dilated Cardiomyopathy:**
- Septal, basal predilection
- Often endocardial with epicardial involvement
- Multiple morphologies common

**ARVC:**
- RV predominant
- Epicardial/intramural circuits
- Triangle of dysplasia (inflow, outflow, apex)
- Multiple VT morphologies

**Cardiac Sarcoidosis:**
- Patchy inflammation and scar
- Often intramural/epicardial
- May involve both ventricles
- Consider immunosuppression

**Hypertrophic Cardiomyopathy:**
- Polymorphic VT/VF more common
- Associated with massive LVH, fibrosis
- High risk features: Family SCD, syncope, NSVT, extreme LVH

## Risk Stratification for Sudden Cardiac Death

### Primary Prevention ICD Criteria

**Ischemic:**
- EF ≤35%, NYHA II-III, ≥40 days post-MI, ≥90 days post-revascularization
- EF ≤30%, NYHA I

**Non-ischemic:**
- EF ≤35%, NYHA II-III, on GDMT ≥3 months
- Specific: ARVC, sarcoid, HCM with risk factors, channelopathies

### MADIT-II, SCD-HeFT Evidence

**MADIT-II:**
- Post-MI, EF ≤30%
- 31% mortality reduction with ICD

**SCD-HeFT:**
- Ischemic and non-ischemic, EF ≤35%, NYHA II-III
- 23% mortality reduction

**DANISH (Non-ischemic):**
- No overall mortality benefit
- Reduced SCD, but competing mortality
- Younger patients may benefit more

### EP Study Role

**Value:**
- Inducibility correlates with risk in ischemic
- Less predictive in non-ischemic
- Syncope workup
- Pre-ablation mapping

## ICD Programming and Management

### Contemporary Programming

**ATP (Anti-Tachycardia Pacing):**
- First-line for stable monomorphic VT
- 8-beat burst at 84-88% of VT cycle length
- Can terminate 70-80% of VT
- Painless, preserves battery

**Shock Therapy:**
- Reserved for ATP failures or unstable VT/VF
- Tiered: Start 25-35J, escalate
- Painful, causes anxiety

**Detection:**
- Rate criteria (e.g., >180 bpm)
- Duration criteria (e.g., >30 beats)
- Morphology discrimination
- Onset criteria (sudden vs gradual)

### Reducing Inappropriate Shocks

**Common Causes:**
- Atrial fibrillation with RVR
- Supraventricular tachycardia
- Lead noise/fracture
- Oversensing (T waves, myopotentials)

**Strategies:**
- Prolonged detection intervals
- Higher rate cutoffs when possible
- Enhanced discrimination algorithms
- Dual-chamber detection

### ICD Storm Management

**Definition:** ≥3 appropriate shocks in 24 hours

**Acute Management:**
1. Sedate patient (reduces catecholamines)
2. IV beta-blocker (esmolol)
3. IV amiodarone
4. Correct electrolytes
5. Address ischemia
6. Consider deep sedation/intubation if refractory

**Underlying Causes:**
- Worsening heart failure
- Ischemia
- Electrolyte disturbance
- Medication nonadherence
- Pro-arrhythmic drugs

## Catheter Ablation for VT

### Indications

**Strong:**
- Incessant VT
- VT storm
- Recurrent ICD shocks despite AAD
- Intolerance to AAD

**Evolving:**
- First-line for stable, monomorphic VT in structural heart disease
- Substrate modification for primary prevention (PAUSE-SCD trial ongoing)

### Mapping Techniques

**Activation Mapping:**
- Trace sequence of electrical activation
- Identify earliest site (exit)
- Best for hemodynamically stable VT

**Entrainment Mapping:**
- Pace to entrain VT circuit
- Post-pacing interval = VT cycle length indicates circuit
- Defines isthmus location

**Substrate Mapping:**
- Voltage mapping in sinus rhythm
- Identify scar, border zone, channels
- Late potentials, local abnormal ventricular activities (LAVA)
- Does not require VT induction

### Ablation Strategies

**Scar Homogenization:**
- Eliminate all abnormal signals within scar
- Target late potentials
- May be superior to limited ablation

**Linear Ablation:**
- Cut through scar to exit sites
- Core-to-exit approach

**Epicardial Ablation:**
- Required in 20-30% of non-ischemic VT
- Percutaneous subxiphoid approach
- Watch for coronary arteries, phrenic nerve

### Outcomes

**Ischemic VT:**
- Single procedure success: 50-60%
- Freedom from recurrence at 1 year: 70-80%
- Reduced ICD shocks: 80-90%

**Non-ischemic VT:**
- More challenging
- Higher epicardial involvement
- May require repeat procedures

**Complications:**
- Vascular access: 2-3%
- Tamponade: 1-2%
- Stroke: <1%
- Death: <1%`,
      keyTerms: [
        { term: 'late potentials', definition: 'Low-amplitude, fragmented signals after QRS indicating slow conduction zones within scar' },
        { term: 'entrainment mapping', definition: 'Pacing technique to localize reentrant VT circuit by comparing post-pacing interval to VT cycle length' },
        { term: 'scar homogenization', definition: 'Ablation strategy eliminating all abnormal electrograms within ventricular scar' },
        { term: 'ATP', definition: 'Anti-tachycardia pacing; painless ICD intervention for stable VT' },
        { term: 'ARVC', definition: 'Arrhythmogenic right ventricular cardiomyopathy; genetic disorder causing RV fatty/fibrofatty replacement' },
        { term: 'epicardial ablation', definition: 'Ablation from heart surface via subxiphoid pericardial access' },
      ],
      clinicalNotes: 'Modern ICD programming emphasizes longer detection times and ATP before shocks to reduce inappropriate therapy. DANISH suggests non-ischemic patients may have less ICD benefit - consider patient age and competing risks. VT ablation reduces shocks but hasn\'t proven mortality benefit.',
    },
    5: {
      level: 5,
      summary: 'Contemporary VT management integrates precision substrate characterization with advanced imaging, optimized ICD programming balancing efficacy and quality of life, and evolving ablation technologies including high-density mapping, imaging integration, and stereotactic radiotherapy.',
      explanation: `## Current Guidelines and Evidence

### 2017 AHA/ACC/HRS Ventricular Arrhythmia Guidelines

**Key Recommendations:**
- ICD for SCD survivors, sustained VT with structural heart disease
- Primary prevention ICD for EF ≤35% with specified criteria
- EP study for syncope with structural heart disease
- Catheter ablation for recurrent VT (Class I)

### VANISH Trial

**Question:** Ablation vs escalated AAD for ischemic VT with ICD

**Result:**
- Ablation superior (59.1% vs 68.5% composite endpoint)
- Reduced VT recurrence
- Fewer appropriate ICD shocks

**Implication:** Ablation should be considered earlier, not just after AAD failure

### BERLIN-VT, STAR-VT

**BERLIN-VT:**
- Ablation + ICD vs ICD alone in primary prevention
- Reduced VT/VF burden with ablation
- No mortality difference (underpowered)

**STAR-VT:**
- Substrate-based ablation in sinus rhythm
- Feasible and effective
- Potential for preventive ablation

## Advanced Imaging Integration

### Cardiac MRI for VT

**Scar Characterization:**
- Late gadolinium enhancement (LGE)
- Dense scar vs border zone quantification
- Scar channels visualization
- Correlation with VT circuits

**Pre-procedural Planning:**
- 3D scar reconstruction
- Integration with electroanatomic mapping
- Target identification before procedure

**Specific Patterns:**
| Etiology | LGE Pattern |
|----------|-------------|
| Ischemic | Subendocardial, following coronary territory |
| NICM | Mid-wall, septal |
| ARVC | RV free wall, fat infiltration |
| Sarcoid | Patchy, multifocal |
| Myocarditis | Epicardial, lateral |
| HCM | Patchy, areas of maximal hypertrophy |

### CT Integration

**Coronary Anatomy:**
- Avoid ablating near coronary arteries
- Especially important for epicardial ablation

**Scar Detection:**
- Wall thinning
- Fat infiltration
- Calcification

### PET Imaging

**Cardiac Sarcoidosis:**
- FDG-PET for active inflammation
- Perfusion + FDG = scar with active edge

## Advanced Ablation Technologies

### High-Density Mapping

**Systems:**
- Rhythmia (64-electrode basket)
- CARTO HD, Advisor HD
- Orion (64-electrode mini-basket)

**Advantages:**
- Thousands of points rapidly acquired
- Better scar delineation
- Identification of conducting channels
- Improved circuit characterization

### Imaging-Guided Ablation

**MUSIC (MRI-guided):**
- Real-time MRI during ablation
- Direct scar visualization
- Lesion assessment

**ICE Integration:**
- Intracardiac echo for visualization
- Catheter-tissue contact
- Real-time guidance

### Contact Force Technology

**Importance:**
- Adequate force = durable lesions
- 10-40 grams generally optimal
- Reduces reconnection and recurrence

### Needle Ablation

**For Intramural VT:**
- Retractable needle into myocardium
- Saline-infused for larger lesions
- Reaches intramural circuits
- Limited availability

## Stereotactic Body Radiotherapy (SBRT) for VT

### ENCORE-VT Experience

**Concept:**
- Non-invasive ablation using radiation
- 25 Gy single fraction to VT substrate
- Outpatient procedure

**Results:**
- Significant VT reduction in refractory cases
- Alternative when catheter ablation fails
- Long-term safety data emerging

### Current Status

**Appropriate Patients:**
- Refractory VT despite ablation and AAD
- No other options
- Part of clinical trials

**Concerns:**
- Long-term cardiac and non-cardiac toxicity
- Optimal dose and fractionation
- Patient selection

## VT in Special Populations

### End-Stage Renal Disease

- Higher SCD risk
- Electrolyte fluctuations
- Drug clearance altered
- ICD benefit uncertain (limited data)
- Ablation feasible but higher risk

### Transplant Candidates

**Considerations:**
- Bridge with VT suppression
- MCS may reduce arrhythmia burden
- Post-transplant: Monitor for rejection, CAV

### Post-LVAD

**VT in LVAD Patients:**
- Common (25-50% experience VT)
- Better tolerated due to LVAD flow
- ICD still needed
- Ablation can be performed

### Pregnancy

- Rare but challenging
- Avoid radiation if possible
- Amiodarone relatively contraindicated
- Beta-blockers, lidocaine safer
- Cardioversion safe for fetus

## Emerging Concepts

### Substrate-Based Prevention

**PAUSE-SCD Trial:**
- Prophylactic ablation in high-risk ischemic
- Primary prevention context
- Results awaited

### Pulsed Field Ablation for VT

- Under investigation
- Potential for deeper lesions
- Tissue selectivity advantages
- Early clinical experience

### Genetic Testing Integration

**Channelopathies:**
- Long QT syndrome genotyping guides therapy
- Brugada: SCN5A mutation implications
- ARVC: Desmosomal gene testing

**Predictive Value:**
- Family screening
- Risk stratification beyond EF

### Wearable Defibrillators

**LifeVest:**
- Bridge in high-risk periods
- Post-MI, pre-ICD implant
- Awaiting LV recovery
- VEST trial: No overall mortality benefit, but reduced SCD

## Quality Metrics and Outcomes

### Ablation Center Volume

- Higher volume = better outcomes
- Minimum standards emerging
- Team experience important

### Long-term Follow-up

**Post-Ablation:**
- ICD interrogation essential
- Monitor for VT recurrence
- May need repeat ablation (20-30%)
- AAD continuation often needed

**Mortality Outcomes:**
- Ablation reduces VT/shocks
- Mortality benefit not definitively proven
- Quality of life improved

### Shared Decision-Making

**ICD Discussions:**
- Benefits vs burdens
- End-of-life considerations
- Device deactivation options
- Patient values and preferences`,
      keyTerms: [
        { term: 'stereotactic body radiotherapy', definition: 'Non-invasive VT ablation using focused radiation to destroy arrhythmogenic substrate' },
        { term: 'high-density mapping', definition: 'Electroanatomic mapping using multi-electrode catheters for rapid, detailed substrate characterization' },
        { term: 'late gadolinium enhancement', definition: 'MRI technique showing myocardial scar based on delayed contrast washout' },
        { term: 'VANISH trial', definition: 'RCT demonstrating catheter ablation superiority over escalated AAD for ischemic VT' },
        { term: 'contact force ablation', definition: 'Technology measuring catheter-tissue contact to optimize lesion creation' },
        { term: 'intramural VT', definition: 'VT circuits located within ventricular wall, challenging to ablate from endocardium or epicardium' },
      ],
      clinicalNotes: `Key clinical pearls for VT management:

1. **ECG Diagnosis**: When in doubt, treat WCT as VT - safer approach
2. **Acute Management**: Amiodarone first-line; procainamide in stable patients without HF
3. **ICD Programming**: Modern approach favors longer detection, more ATP, reduce shocks
4. **Ablation Timing**: Consider earlier (VANISH); don't wait for multiple AAD failures
5. **Imaging Integration**: Pre-procedural MRI identifies scar substrate and circuits
6. **Epicardial Access**: Required in 20-30% non-ischemic VT; learn subxiphoid approach
7. **Refractory VT**: SBRT emerging option; needle ablation for intramural
8. **DANISH Implications**: Non-ischemic ICD benefit less certain; individualize decision
9. **Genetic Testing**: Increasingly important for channelopathies and cardiomyopathies
10. **End-of-Life**: ICD deactivation discussions essential for advanced HF`,
    },
  },

  media: [
    {
      id: 'vt-ecg-patterns',
      type: 'diagram',
      filename: 'vt-ecg-patterns.svg',
      title: 'Ventricular Tachycardia ECG Patterns',
      description: 'Monomorphic and polymorphic VT ECG examples',
    },
    {
      id: 'vt-mechanism-diagram',
      type: 'diagram',
      filename: 'vt-reentry-mechanism.svg',
      title: 'VT Reentry Mechanism',
      description: 'Scar-related reentry circuit illustration',
    },
    {
      id: 'vt-ablation-map',
      type: 'diagram',
      filename: 'vt-substrate-mapping.svg',
      title: 'VT Substrate Mapping',
      description: 'Electroanatomic voltage map showing scar and ablation targets',
    },
  ],

  citations: [
    {
      id: 'aha-acc-va-2017',
      type: 'article',
      title: '2017 AHA/ACC/HRS Guideline for Management of Patients With Ventricular Arrhythmias and Prevention of SCD',
      authors: ['Al-Khatib SM', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000000549',
    },
    {
      id: 'vanish-trial',
      type: 'article',
      title: 'Ablation versus Antiarrhythmic Drugs for Treatment of Ventricular Tachycardia (VANISH)',
      authors: ['Sapp JL', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'braunwald-vt',
      type: 'textbook',
      title: 'Braunwald\'s Heart Disease',
      source: 'Elsevier',
      chapter: 'Ventricular Arrhythmias',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'related', label: 'Coronary Artery Disease' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'topic-ecg-interpretation', targetType: 'topic', relationship: 'related', label: 'ECG Interpretation' },
    { targetId: 'topic-cardiac-medications', targetType: 'topic', relationship: 'related', label: 'Antiarrhythmic Drugs' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['electrophysiology', 'arrhythmia', 'sudden cardiac death', 'ablation'],
    keywords: ['VT', 'ventricular tachycardia', 'ICD', 'ablation', 'sudden death', 'wide complex tachycardia'],
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

export default ventricularTachycardia;
