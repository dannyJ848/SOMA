/**
 * Obstructive Sleep Apnea - Comprehensive Educational Content
 *
 * Covers the pathophysiology, diagnosis, and treatment of obstructive
 * sleep apnea including CPAP therapy and surgical options.
 */

import { EducationalContent } from '../types';

export const obstructiveSleepApnea: EducationalContent = {
  id: 'condition-obstructive-sleep-apnea',
  type: 'condition',
  name: 'Obstructive Sleep Apnea',
  alternateNames: ['OSA', 'Sleep Apnea', 'Obstructive Sleep Apnea Syndrome', 'Sleep-Disordered Breathing'],

  levels: {
    1: {
      level: 1,
      summary: 'Obstructive sleep apnea is when your throat closes during sleep, making you stop breathing many times each night. This keeps you from getting good rest.',
      explanation: `When you sleep, all your muscles relax - including the muscles in your throat. For some people, when these muscles relax too much, the throat closes up and blocks air from getting through. This is called obstructive sleep apnea.

**What Happens During Sleep Apnea:**
- Your throat closes and you stop breathing
- Your brain notices you're not getting air
- Your brain wakes you up just enough to open your throat
- You start breathing again
- This can happen dozens or even hundreds of times a night!
- You usually don't remember waking up

**Signs of Sleep Apnea:**
- Loud snoring (often noticed by family members)
- Pauses in breathing during sleep
- Gasping or choking sounds
- Feeling very tired during the day even after sleeping
- Waking up with a headache
- Trouble concentrating

**Who Gets Sleep Apnea:**
- People who are overweight
- People with larger necks or smaller airways
- Older adults
- More common in men (but women get it too, especially after menopause)

**Why It's Important to Treat:**
- Sleep apnea makes you very tired
- It can cause high blood pressure
- It increases risk of heart problems
- It makes it dangerous to drive or operate machines
- Treatment helps you feel much better!

**Treatment:**
The most common treatment is a CPAP machine - a small device that gently pushes air through a mask to keep your throat open while you sleep.`,
      keyTerms: [
        { term: 'obstructive sleep apnea', definition: 'A condition where your throat closes during sleep and you stop breathing many times' },
        { term: 'snoring', definition: 'The sound made when air passes through a partly blocked throat during sleep' },
        { term: 'CPAP', definition: 'A machine that pushes gentle air through a mask to keep your throat open while sleeping' },
        { term: 'apnea', definition: 'A pause in breathing' },
      ],
      analogies: [
        'Your throat during sleep apnea is like a straw that keeps getting pinched closed - air can\'t get through until you wake up just enough to open it.',
        'CPAP works like an air splint for your throat - the constant gentle pressure keeps the walls from collapsing.',
      ],
      examples: [
        'Someone with sleep apnea might snore loudly, then go silent for several seconds (stopped breathing), then gasp and start snoring again.',
        'A person with untreated sleep apnea might fall asleep during meetings or while watching TV because they\'re so tired.',
      ],
    },
    2: {
      level: 2,
      summary: 'Obstructive sleep apnea (OSA) is characterized by repeated upper airway collapse during sleep, causing breathing pauses (apneas) and oxygen drops. It affects 10-30% of adults and is associated with cardiovascular disease, daytime sleepiness, and impaired quality of life.',
      explanation: `Obstructive sleep apnea occurs when the upper airway repeatedly collapses during sleep, blocking airflow despite continued breathing efforts.

**Pathophysiology:**
During sleep, muscle tone decreases throughout the body. In OSA:
- Reduced tone in pharyngeal dilator muscles (tongue, soft palate)
- Anatomic factors narrow the airway
- Negative inspiratory pressure causes airway collapse
- Brain senses low oxygen or high CO2 → brief arousal → airway reopens
- Cycle repeats throughout the night

**Risk Factors:**
- Obesity (strongest modifiable risk factor)
- Male sex
- Age (increases with age)
- Family history
- Anatomic factors: large neck, retrognathia, enlarged tonsils
- Alcohol and sedative use
- Smoking
- Nasal congestion

**Symptoms:**

*Nighttime:*
- Loud snoring (present in ~95% of OSA patients)
- Witnessed apneas (bed partner reports breathing stops)
- Gasping/choking during sleep
- Restless sleep
- Nocturia (frequent nighttime urination)

*Daytime:*
- Excessive daytime sleepiness (EDS)
- Morning headaches
- Difficulty concentrating
- Memory problems
- Mood changes, irritability
- Decreased libido

**Diagnosis:**

*Sleep Study (Polysomnography):*
- Gold standard for diagnosis
- Measures breathing, oxygen levels, brain waves, heart rhythm
- Apnea-Hypopnea Index (AHI): Number of apneas + hypopneas per hour

*OSA Severity:*
| Severity | AHI |
|----------|-----|
| Mild | 5-14 events/hour |
| Moderate | 15-29 events/hour |
| Severe | ≥30 events/hour |

**Consequences of Untreated OSA:**
- Cardiovascular: Hypertension, arrhythmias, heart failure, stroke
- Metabolic: Insulin resistance, weight gain
- Neurocognitive: Memory impairment, depression
- Safety: Increased motor vehicle accidents
- Quality of life: Impaired work performance, relationships

**Treatment Options:**

*CPAP (Continuous Positive Airway Pressure):*
- First-line treatment for moderate-severe OSA
- Mask delivers constant pressure to keep airway open
- Highly effective when used consistently
- Requires adjustment to find right pressure and mask

*Other Treatments:*
- Weight loss (can cure mild OSA in some patients)
- Oral appliances (move jaw forward to open airway)
- Positional therapy (avoid sleeping on back)
- Surgery (in select cases)`,
      keyTerms: [
        { term: 'apnea', definition: 'Complete cessation of airflow for ≥10 seconds', pronunciation: 'AP-nee-ah' },
        { term: 'hypopnea', definition: 'Partial reduction in airflow (≥30%) with oxygen drop or arousal', pronunciation: 'hy-POP-nee-ah' },
        { term: 'AHI', definition: 'Apnea-Hypopnea Index; number of apneas and hypopneas per hour of sleep' },
        { term: 'CPAP', definition: 'Continuous Positive Airway Pressure; device that provides constant pressure to maintain airway patency' },
        { term: 'polysomnography', definition: 'Comprehensive sleep study recording brain waves, breathing, oxygen, and other parameters', pronunciation: 'PAH-lee-som-NOG-rah-fee' },
      ],
      analogies: [
        'CPAP is like a pneumatic splint for your airway - constant gentle pressure keeps the walls from collapsing, similar to how air pressure keeps a balloon inflated.',
        'The upper airway in OSA is like a collapsible tube - when suction (negative inspiratory pressure) pulls air in, the soft walls can collapse unless something keeps them open.',
      ],
    },
    3: {
      level: 3,
      summary: 'Obstructive sleep apnea results from repetitive upper airway collapse during sleep due to anatomic and neuromuscular factors. The cyclical hypoxemia-reoxygenation, sympathetic surges, and sleep fragmentation contribute to cardiometabolic morbidity. Diagnosis requires polysomnography or home sleep testing, with PAP therapy as first-line treatment.',
      explanation: `## Pathophysiology

**Upper Airway Anatomy and Collapse:**

The pharynx lacks rigid support and relies on dilator muscle activity:

*Anatomic Factors:*
- Structural narrowing (retrognathia, macroglossia, enlarged tonsils)
- Increased fat deposition (neck, parapharyngeal)
- Edema (rostral fluid shift when supine)

*Neuromuscular Factors:*
- Decreased pharyngeal dilator muscle tone during sleep
- Genioglossus (main tongue protrusor) most important
- Protective reflex reduced during sleep

**Starling Resistor Model:**
\`\`\`
P_critical = Pressure at which airway collapses
Pcrit is elevated in OSA patients (less negative/positive)
Upstream pressure (nasal) - Pcrit - Downstream pressure = Airflow
When upstream pressure < Pcrit → Collapse occurs
\`\`\`

**Consequences of Repetitive Events:**

| Mechanism | Acute Effect | Chronic Consequence |
|-----------|--------------|---------------------|
| Intermittent hypoxia | ROS generation, HIF activation | Systemic inflammation, endothelial dysfunction |
| Reoxygenation | Oxidative stress | Atherosclerosis acceleration |
| Intrathoracic pressure swings | ↑ LV afterload, ↓ venous return | LV remodeling, atrial stretching (AF) |
| Arousals | Sympathetic surges | Sustained hypertension |
| Sleep fragmentation | Sleepiness, cognitive impairment | Metabolic dysregulation |

## Diagnosis

**Polysomnography (PSG) Criteria (AASM):**

*Apnea:*
- ≥90% reduction in airflow
- Duration ≥10 seconds
- Classification:
  - Obstructive: Continued respiratory effort
  - Central: No respiratory effort
  - Mixed: Central then obstructive

*Hypopnea:*
- ≥30% reduction in airflow for ≥10 seconds
- Plus: ≥3% O2 desaturation OR arousal

*Respiratory Effort-Related Arousal (RERA):*
- Sequence of breaths with increasing effort
- Leading to arousal
- Not meeting apnea/hypopnea criteria

**Indices:**
\`\`\`
AHI = (Apneas + Hypopneas) / Hours of sleep
RDI = (Apneas + Hypopneas + RERAs) / Hours of sleep
ODI = Oxygen desaturations (≥3% or ≥4%) / Hour
\`\`\`

**Home Sleep Apnea Testing (HSAT):**
- Portable monitoring without EEG
- Appropriate for high pretest probability, uncomplicated OSA
- May underestimate severity (uses recording time, not sleep time)
- Negative test in symptomatic patient → In-lab PSG

**Clinical Assessment Tools:**
| Tool | Components | Use |
|------|-----------|-----|
| STOP-BANG | Snoring, Tired, Observed apnea, BP, BMI, Age, Neck, Gender | Screening (≥3 = high risk) |
| Epworth Sleepiness Scale | 8 situations rated 0-3 | Sleepiness assessment (>10 abnormal) |
| Berlin Questionnaire | Snoring, sleepiness, hypertension/obesity | Risk stratification |

## Treatment

### Positive Airway Pressure (PAP)

**Mechanism:** Pneumatic splint - pressure prevents airway collapse

**Modalities:**
| Mode | Description | Indication |
|------|-------------|------------|
| CPAP | Fixed pressure | Most OSA patients |
| APAP | Auto-adjusting (range) | Pressure-intolerant, positional OSA |
| BiPAP | Separate inspiratory/expiratory | High pressure needs, hypoventilation |

**Titration:**
- In-lab: Manual titration during PSG
- Home: Auto-titrating device (APAP) with data download

**Efficacy:**
- Reduces AHI to <5 in most patients
- Improves sleepiness, quality of life
- Reduces blood pressure (~2-3 mmHg)
- Mortality benefit in observational studies

**Adherence Challenges:**
- Average use: ~4-5 hours/night
- Definition of "adequate use": ≥4 hours on 70% of nights
- Interventions: Education, mask fitting, humidification, desensitization

### Alternative Treatments

**Oral Appliances (Mandibular Advancement Devices):**
- Move mandible forward, opening retroglossal space
- Indicated: Mild-moderate OSA, CPAP intolerance
- Efficacy: ~50% reduction in AHI
- Requires dental expertise for fitting
- Side effects: TMJ discomfort, tooth movement

**Positional Therapy:**
- For positional OSA (AHI supine >> AHI lateral)
- Devices/techniques to prevent supine sleep
- Limited long-term adherence

**Surgery:**
- UPPP (uvulopalatopharyngoplasty): Variable efficacy
- MMA (maxillomandibular advancement): ~90% success, major surgery
- Hypoglossal nerve stimulation (Inspire): Implantable, for select patients
- Tracheostomy: Definitive but rarely used

**Weight Loss:**
- 10% weight loss → ~30% AHI reduction
- Bariatric surgery can "cure" OSA in some patients
- Should be combined with other treatment initially`,
      keyTerms: [
        { term: 'Pcrit', definition: 'Critical closing pressure; pressure at which the pharynx collapses; elevated in OSA' },
        { term: 'intermittent hypoxia', definition: 'Cyclical drops in oxygen characteristic of OSA; drives oxidative stress and inflammation' },
        { term: 'RERA', definition: 'Respiratory Effort-Related Arousal; respiratory event not meeting apnea/hypopnea criteria but causing arousal' },
        { term: 'RDI', definition: 'Respiratory Disturbance Index; AHI plus RERAs' },
        { term: 'APAP', definition: 'Auto-titrating PAP; automatically adjusts pressure based on detected events' },
        { term: 'STOP-BANG', definition: 'OSA screening questionnaire: Snoring, Tired, Observed apnea, Pressure (BP), BMI, Age, Neck size, Gender' },
      ],
      clinicalNotes: 'OSA is an independent risk factor for resistant hypertension, atrial fibrillation, and stroke. Screen all patients with AF, resistant HTN, and heart failure for OSA. CPAP improves BP control but large RCTs have not shown mortality benefit (possibly due to adherence issues). Driving regulations vary by jurisdiction but patients with untreated severe OSA should be counseled about driving risk.',
    },
    4: {
      level: 4,
      summary: 'Obstructive sleep apnea pathophysiology involves complex interactions between anatomic upper airway compromise, reduced neuromuscular compensation during sleep, and low arousal threshold. The cardiometabolic consequences result from intermittent hypoxia-induced oxidative stress, sympathetic activation, and systemic inflammation. Treatment selection requires consideration of OSA phenotype and patient characteristics.',
      explanation: `## Advanced Pathophysiology

### Upper Airway Mechanics

**Pcrit (Critical Closing Pressure):**
\`\`\`
Normal: Pcrit = -15 to -5 cm H2O (very negative, resistant to collapse)
OSA:    Pcrit = -5 to +5 cm H2O (more collapsible)

Determinants of Pcrit:
- Anatomic load: ↑ soft tissue, ↓ craniofacial size → ↑ Pcrit
- Muscle compensation: ↓ dilator activity → ↑ Pcrit
- Surface tension: ↑ adhesive forces → ↑ Pcrit

Starling resistor concept:
Qmax = (Pus - Pcrit) / Rus
Where: Pus = upstream (nasal) pressure, Rus = upstream resistance
When Pus < Pcrit → Flow = 0 (collapse)
\`\`\`

### Neuromuscular Compensation

**Genioglossus Muscle:**
- Primary tongue protrusor
- Activity decreases at sleep onset
- Negative pressure reflex: Pharyngeal collapse → Mechanoreceptor activation → GG recruitment
- This reflex is attenuated during sleep
- OSA patients have higher wake GG activity (compensation) that fails during sleep

**Loop Gain Concept:**
\`\`\`
Loop gain = Controller gain × Plant gain

High loop gain → Ventilatory instability
- Sensitive chemoreflex (controller)
- Effective ventilation (plant)
- Causes overshoot/undershoot in ventilation
- Can perpetuate obstructive events

Targeted treatment: Oxygen, acetazolamide may reduce loop gain
\`\`\`

### Arousal Threshold

**Low Arousal Threshold Phenotype:**
- Some OSA patients arouse too easily
- Prevents buildup of respiratory drive that would recruit dilator muscles
- Paradoxically, deeper sleep might help maintain airway patency
- Treatment implications: Sedatives (trazodone, eszopiclone) may help select patients

### OSA Endotypes/Phenotypes

| Phenotype | Characteristics | Treatment Implications |
|-----------|-----------------|----------------------|
| Anatomic | High Pcrit, obesity, structural issues | Weight loss, surgery, PAP |
| Low arousal threshold | Wake easily before muscles activate | Sedatives (select patients), PAP |
| High loop gain | Ventilatory instability | Oxygen, acetazolamide, PAP |
| Poor muscle compensation | Inadequate dilator recruitment | Hypoglossal nerve stimulation |

## Cardiovascular Pathophysiology

### Intermittent Hypoxia Cascade

\`\`\`
Cyclical hypoxia-reoxygenation
↓
Mitochondrial ROS generation
↓
HIF-1α activation (hypoxic) / NF-κB activation (inflammatory)
↓
Endothelial dysfunction:
- ↓ NO bioavailability
- ↑ Endothelin-1
- ↑ Adhesion molecules
↓
Atherosclerosis, arterial stiffness
\`\`\`

### Hemodynamic Consequences

**During Apneic Events:**
\`\`\`
Mueller maneuver (inspiratory effort against closed airway):
- Highly negative intrathoracic pressure (-40 to -80 cm H2O)
- ↑ LV transmural pressure (afterload)
- ↓ Venous return to left heart
- ↑ Venous return to right heart → RV distension
- Interventricular septum shift

Arousal + Hypoxia:
- Sympathetic surge
- Vasoconstriction
- Acute BP spike (can exceed 200 mmHg systolic)
- Tachycardia → bradycardia cycling
\`\`\`

**Chronic Effects:**
| Condition | Mechanism | OSA Prevalence |
|-----------|-----------|----------------|
| Hypertension | Sustained sympathetic activation, RAAS | ~50% of OSA |
| Atrial fibrillation | Atrial stretch, autonomic, inflammation | 40-50% of AF patients have OSA |
| Heart failure | Afterload, sympathetic, remodeling | 50-70% of HF patients |
| Stroke | AF, hypertension, hypercoagulability | OSA increases stroke risk 2-3x |
| Pulmonary hypertension | Chronic hypoxia, LV dysfunction | Group 3 PH |

## Advanced Diagnostics

### Polysomnography Interpretation

**Respiratory Event Scoring:**
\`\`\`
Obstructive Apnea:
- ≥90% airflow reduction
- ≥10 seconds
- Continued/increased respiratory effort (thorax/abdomen movement)

Central Apnea:
- ≥90% airflow reduction
- ≥10 seconds
- Absent respiratory effort

Mixed Apnea:
- Begins as central (no effort)
- Ends as obstructive (effort against closed airway)

Hypopnea (AASM Recommended):
- ≥30% flow reduction
- ≥10 seconds
- ≥3% desat OR arousal

Hypopnea (AASM Acceptable/Medicare):
- ≥30% flow reduction
- ≥10 seconds
- ≥4% desat
\`\`\`

### Phenotyping from PSG

**Derivable Metrics:**
| Measure | Significance |
|---------|--------------|
| AHI supine vs. non-supine | Positional OSA (ratio >2:1) |
| AHI REM vs. NREM | REM-predominant OSA |
| Oxygen nadir, T90 | Hypoxic burden |
| Arousal index | Sleep fragmentation |
| % hypopneas with arousal (vs. desat) | Low arousal threshold phenotype |

## Treatment Optimization

### PAP Therapy Details

**Pressure Titration Goals:**
\`\`\`
Target: AHI <5, SpO2 >90%, minimal snoring
Position: Titrate in all positions (especially supine, REM)
Typical pressures: 8-12 cm H2O (range 4-20)

APAP algorithms:
- Detect flow limitation, snoring, apneas
- Increase pressure in response
- Decrease pressure when events resolved
- Provides 90th/95th percentile pressure data
\`\`\`

**CPAP Troubleshooting:**
| Problem | Solutions |
|---------|-----------|
| Mask leak | Refit, different style, chin strap for mouth leak |
| Pressure intolerance | Ramp function, EPR/flex, APAP, bilevel |
| Aerophagia | Lower pressure, EPR, bilevel |
| Nasal congestion | Heated humidification, nasal steroids, treat rhinitis |
| Claustrophobia | Desensitization, nasal pillows vs. full face |
| Residual sleepiness | Verify adequate treatment (download data), treat comorbid |

### Hypoglossal Nerve Stimulation

**Mechanism:** Stimulates genioglossus during inspiration to maintain airway

**Patient Selection (Inspire criteria):**
- Moderate-severe OSA (AHI 15-65)
- BMI <32-35 kg/m²
- CPAP failure/intolerance
- No complete concentric collapse on DISE
- Central apnea index <25%

**Outcomes:**
- ~70% responders (≥50% AHI reduction + AHI <20)
- Improvements sustained at 5 years`,
      keyTerms: [
        { term: 'loop gain', definition: 'Measure of ventilatory control system sensitivity; high loop gain causes breathing instability' },
        { term: 'arousal threshold', definition: 'Tendency to wake from sleep; low threshold may perpetuate OSA by preventing muscle recruitment' },
        { term: 'endotype', definition: 'Underlying physiological trait contributing to OSA (anatomy, muscle function, loop gain, arousal threshold)' },
        { term: 'DISE', definition: 'Drug-Induced Sleep Endoscopy; visualizes airway collapse pattern to guide surgical planning' },
        { term: 'Mueller maneuver', definition: 'Inspiratory effort against closed airway, generating highly negative intrathoracic pressure' },
        { term: 'hypoglossal nerve stimulation', definition: 'Implantable device that stimulates tongue protrusor muscles to maintain airway during sleep' },
      ],
      clinicalNotes: 'Phenotyping OSA is emerging as a strategy to personalize treatment. Patients with low arousal threshold may benefit from sedative-hypnotics (counterintuitive). High loop gain responds to supplemental O2 or acetazolamide. Drug-induced sleep endoscopy (DISE) can identify collapse patterns to guide surgical selection. Hypoglossal nerve stimulation (Inspire) is an effective option for selected CPAP-intolerant patients.',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding of OSA recognizes phenotypic heterogeneity based on underlying pathophysiological traits (endotypes), enabling precision medicine approaches. The cardiometabolic consequences reflect complex interactions between intermittent hypoxia, oxidative stress, sympathetic activation, and systemic inflammation, with ongoing research into biomarkers and targeted therapies.',
      explanation: `## Precision Medicine in OSA

### Physiological Phenotyping (PALM Traits)

**Pcrit (Pharyngeal collapsibility):**
\`\`\`
Assessment:
- Research: Pharyngeal pressure catheter during sleep
- Clinical surrogate: Pressure required for CPAP efficacy

Treatment matching:
- High Pcrit (poor anatomy): PAP, surgery, weight loss
- Near-normal Pcrit: May respond to non-PAP therapies
\`\`\`

**Arousal Threshold:**
\`\`\`
Assessment:
- Nadir SpO2 before arousal
- Respiratory drive indices from PSG
- Surrogate: High % hypopneas with arousal (vs. desaturation)

Treatment for low arousal threshold:
- Trazodone, eszopiclone (increase threshold)
- Allows buildup of CO2/respiratory drive → muscle recruitment
- Paradox: Sedatives may help select OSA patients
\`\`\`

**Loop Gain:**
\`\`\`
Assessment:
- Research: Proportional assist ventilation technique
- Surrogate: Central apnea presence, periodic breathing pattern

Treatment for high loop gain:
- Supplemental O2 (reduces hypoxic ventilatory response)
- Acetazolamide (reduces CO2 ventilatory response)
- CPAP still works but may require higher pressure
\`\`\`

**Muscle Responsiveness:**
\`\`\`
Assessment:
- Research: EMG during sleep
- Difficult to assess clinically

Treatment for poor muscle compensation:
- Hypoglossal nerve stimulation
- Pharmacotherapy (in development):
  - Atomoxetine-oxybutynin combination (targets NE and muscarinic systems)
  - Reduces AHI ~50% in some studies
\`\`\`

### Drug Therapy for OSA

**Emerging Pharmacotherapy:**

| Agent | Mechanism | Evidence | Status |
|-------|-----------|----------|--------|
| Atomoxetine + oxybutynin | ↑ NE, ↓ ACh → ↑ dilator tone | Phase 2 RCT: 63% AHI reduction | Investigational |
| Dronabinol | CB1 agonist, serotonin modulation | Small RCT: Modest AHI reduction | Investigational |
| Carbonic anhydrase inhibitors | ↓ loop gain | Reduces AHI in select phenotypes | Off-label |
| Trazodone/eszopiclone | ↑ arousal threshold | Benefits low arousal threshold phenotype | Off-label |
| Oxygen | ↓ loop gain, ↓ hypoxic burden | Reduces AHI 50%, desaturations | Adjunctive |

### Biomarkers and Risk Stratification

**Hypoxic Burden Concept:**
\`\`\`
Beyond AHI:
- Hypoxic burden = Area under desaturation curve
- Better predicts cardiovascular outcomes than AHI
- T90 (time SpO2 <90%) correlates with pulmonary HTN

Implications:
- AHI-matched patients may have different risks
- Treatment goals may need to address hypoxic burden specifically
\`\`\`

**Cardiovascular Risk Biomarkers:**
| Biomarker | Association |
|-----------|-------------|
| hs-CRP | Inflammation, CV risk |
| IL-6, TNF-α | Inflammatory cytokines |
| Endothelial markers (sICAM, sVCAM) | Vascular dysfunction |
| BNP/NT-proBNP | Cardiac strain, HF |
| Troponin | Myocardial injury |
| Catecholamines | Sympathetic activation |

### OSA and Major Outcomes

**Cardiovascular Mortality Debate:**

Observational studies: Strong association with mortality
RCTs (SAVE, RICCADSA, ISAACC): No mortality benefit with CPAP

\`\`\`
Explanations for RCT results:
1. Adherence: Average ~3.3 h/night (inadequate?)
2. Patient selection: Excluded very severe/sleepy (who might benefit most)
3. Duration: May need longer follow-up
4. Dose-response: Benefits may accrue >4-6 h/night
5. Secondary prevention: May need primary prevention studies

Current interpretation:
- CPAP improves symptoms, quality of life
- BP reduction ~2-3 mmHg
- Mortality benefit uncertain but observational data supportive
- Treat symptomatic patients; risk-benefit individualized for asymptomatic
\`\`\`

### Special Populations

**Heart Failure with OSA:**
\`\`\`
Overlap syndromes common:
- HFrEF: 50-70% have SDB (mixed OSA + CSA)
- HFpEF: High OSA prevalence
- Fluid redistribution contributes (rostral fluid shift)

Treatment considerations:
- CPAP/APAP for predominantly obstructive
- Avoid ASV in HFrEF with CSA (SERVE-HF: increased mortality)
- Optimal diuresis reduces OSA severity
- Cardiac resynchronization reduces central events
\`\`\`

**Obesity Hypoventilation Syndrome (OHS):**
\`\`\`
Definition: BMI ≥30 + awake hypercapnia (PaCO2 ≥45) + SDB
90% have OSA; 10% sleep hypoventilation alone

Treatment:
- PAP (CPAP may suffice if OSA-predominant)
- BiPAP/AVAPS if persistent hypercapnia or hypoventilation
- Weight loss (bariatric surgery often needed)
- High mortality if untreated
\`\`\`

**Pregnancy:**
- OSA increases preeclampsia, gestational diabetes risk
- Treatment with CPAP is safe
- Lateral positioning, conservative pressures
- Postpartum: Re-evaluate (severity may decrease)

### Future Directions

**Wearable Technology:**
- Smartwatches with SpO2, HRV detecting OSA
- Screening potential, not diagnostic replacement
- May enable long-term adherence monitoring

**Pharmacotherapy Pipeline:**
- Selective K+ channel modulators
- Hypoglossal nerve stimulants
- Combination therapy targeting multiple endotypes

**Personalized Treatment Algorithms:**
\`\`\`
Future approach:
1. Diagnose OSA (PSG/HSAT)
2. Phenotype (endotype assessment)
3. Match treatment to phenotype(s)
4. Combination therapy for multiple traits
5. Monitor response and adjust

Current barriers:
- Endotyping not routine in clinical practice
- Limited non-PAP options
- Reimbursement challenges
\`\`\``,
      keyTerms: [
        { term: 'PALM traits', definition: 'Four OSA endotypes: Pharyngeal collapsibility (anatomy), Arousal threshold, Loop gain, Muscle responsiveness' },
        { term: 'hypoxic burden', definition: 'Cumulative hypoxemia measure (area under desaturation curve) that may predict cardiovascular outcomes better than AHI' },
        { term: 'obesity hypoventilation syndrome', definition: 'Obesity (BMI≥30) plus awake hypercapnia (PaCO2≥45) with sleep-disordered breathing; high mortality' },
        { term: 'rostral fluid shift', definition: 'Redistribution of fluid from legs to neck when supine, contributing to upper airway edema and OSA severity' },
        { term: 'SERVE-HF', definition: 'Trial showing increased mortality with ASV in HFrEF patients with central sleep apnea; changed treatment paradigm' },
      ],
      clinicalNotes: 'Clinical pearls: 1) AHI alone may not capture cardiovascular risk - consider hypoxic burden. 2) CPAP adherence correlates with benefit; target >4 h/night on 70% of nights. 3) Screen all HF, AF, resistant HTN patients for OSA. 4) Avoid ASV in HFrEF with EF≤45% and predominant CSA (SERVE-HF). 5) Emerging pharmacotherapy (atomoxetine + oxybutynin) may offer alternatives for select patients. 6) Phenotyping is research-based but concepts can guide clinical reasoning (e.g., high residual AHI on CPAP suggests high loop gain or central component).',
    },
  },

  media: [
    {
      id: 'osa-airway-collapse',
      type: 'diagram',
      filename: 'osa-airway-collapse.svg',
      title: 'Upper Airway Collapse in OSA',
      description: 'Anatomical diagram showing normal airway vs. collapsed airway during obstructive event',
    },
    {
      id: 'psg-osa-example',
      type: 'diagram',
      filename: 'psg-osa-example.svg',
      title: 'PSG Recording Showing Obstructive Apneas',
      description: 'Example polysomnography tracing with obstructive apneas, effort, and desaturations',
    },
    {
      id: 'cpap-mechanism',
      type: 'diagram',
      filename: 'cpap-mechanism.svg',
      title: 'CPAP Mechanism of Action',
      description: 'Diagram showing how positive pressure maintains airway patency',
    },
  ],

  citations: [
    {
      id: 'aasm-osa-guidelines',
      type: 'article',
      title: 'Clinical Practice Guideline for Diagnostic Testing for Adult Obstructive Sleep Apnea',
      authors: ['Kapur, V.K.', 'Auckley, D.H.', 'Chowdhuri, S.'],
      source: 'Journal of Clinical Sleep Medicine',
      chapter: '13(3):479-504',
    },
    {
      id: 'wellman-phenotyping',
      type: 'article',
      title: 'A simplified method for determining phenotypic traits in patients with obstructive sleep apnea',
      authors: ['Wellman, A.', 'Edwards, B.A.', 'Sands, S.A.'],
      source: 'Journal of Applied Physiology',
      chapter: '114:911-922',
    },
    {
      id: 'kryger-principles',
      type: 'textbook',
      title: 'Principles and Practice of Sleep Medicine',
      authors: ['Kryger, M.H.', 'Roth, T.', 'Dement, W.C.'],
      source: 'Elsevier, 7th Edition',
    },
  ],

  crossReferences: [
    { targetId: 'condition-central-sleep-apnea', targetType: 'condition', relationship: 'related', label: 'Central Sleep Apnea' },
    { targetId: 'diagnostic-sleep-studies', targetType: 'topic', relationship: 'related', label: 'Sleep Studies' },
    { targetId: 'condition-hypertension', targetType: 'condition', relationship: 'see-also', label: 'Hypertension' },
    { targetId: 'condition-atrial-fibrillation', targetType: 'condition', relationship: 'see-also', label: 'Atrial Fibrillation' },
  ],

  tags: {
    systems: ['respiratory', 'cardiovascular', 'nervous'],
    topics: ['sleep medicine', 'pulmonology', 'cardiology'],
    keywords: ['sleep apnea', 'OSA', 'CPAP', 'snoring', 'AHI', 'polysomnography', 'hypopnea'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pulmonology', 'neurology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default obstructiveSleepApnea;
