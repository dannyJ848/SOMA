/**
 * Sleep Disorders - Comprehensive Educational Content
 *
 * Covers obstructive sleep apnea, central sleep apnea, obesity hypoventilation
 * syndrome, and other sleep-disordered breathing conditions.
 */

import { EducationalContent } from '../../types';

export const sleepDisorders: EducationalContent = {
  id: 'condition-sleep-disorders',
  type: 'condition',
  name: 'Sleep-Disordered Breathing',
  alternateNames: ['Sleep Apnea', 'OSA', 'Sleep-Related Breathing Disorders'],

  levels: {
    1: {
      level: 1,
      summary: 'Sleep apnea is when you repeatedly stop breathing while sleeping, which prevents restful sleep and can affect your heart and overall health.',
      explanation: `When you sleep, all your muscles relax - including the ones in your throat. For most people, this is fine. But some people's airways get too narrow or completely close, stopping their breathing for short periods.

**What happens during sleep apnea?**

1. You fall asleep and your throat muscles relax
2. Your airway gets narrow or closes
3. You stop breathing (for 10 seconds to a minute!)
4. Your brain notices you need air and briefly wakes you
5. You take a big breath and fall back asleep
6. This can happen 30 or more times PER HOUR!

Most people don't remember waking up, but their sleep is never deep and restful.

**Signs you might have sleep apnea:**
- Loud snoring (your partner might notice!)
- Waking up gasping or choking
- Feeling tired even after sleeping all night
- Headaches in the morning
- Trouble concentrating during the day
- Falling asleep easily during the day

**Who gets sleep apnea?**
- Overweight people (extra tissue in the throat)
- People with thick necks
- Men more than women
- Older adults
- People with family members who have it

**Why is it important to treat?**
Untreated sleep apnea can cause:
- High blood pressure
- Heart problems
- Type 2 diabetes
- Accidents from being sleepy
- Memory and mood problems

**How is it treated?**

**CPAP Machine** (most common treatment):
- A mask worn over your nose (or nose and mouth)
- Gently blows air to keep your airway open
- Works great when used every night

**Other treatments:**
- Losing weight
- Special mouthpieces from a dentist
- Sleeping on your side instead of your back
- Sometimes surgery`,
      keyTerms: [
        { term: 'sleep apnea', definition: 'A condition where breathing repeatedly stops and starts during sleep', pronunciation: 'AP-nee-uh' },
        { term: 'CPAP', definition: 'Continuous Positive Airway Pressure - a machine that blows air through a mask to keep your airway open while sleeping', pronunciation: 'SEE-pap' },
        { term: 'snoring', definition: 'The sound made when air vibrates the relaxed tissues in your throat during sleep' },
        { term: 'airway', definition: 'The passage from your nose and mouth through your throat to your lungs' },
      ],
      analogies: [
        'Your airway during sleep apnea is like a garden hose that someone keeps stepping on - air can\'t flow through until the pressure is released.',
        'CPAP is like a gentle fan keeping a tent inflated - it provides just enough air pressure to keep the walls from collapsing.',
      ],
      examples: [
        'A truck driver who keeps falling asleep at red lights even after 8 hours of sleep might have sleep apnea.',
        'A husband whose wife makes him sleep in another room because of loud snoring should be tested for sleep apnea.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sleep-disordered breathing encompasses obstructive and central sleep apnea syndromes, characterized by repetitive airway obstruction or loss of respiratory drive, leading to nocturnal hypoxemia, sleep fragmentation, and significant cardiovascular consequences.',
      explanation: `## Types of Sleep-Disordered Breathing

### Obstructive Sleep Apnea (OSA)
The most common type - the airway physically collapses during sleep.

**Mechanism:**
1. Pharyngeal muscles relax during sleep
2. Soft tissues collapse inward
3. Airflow is reduced (hypopnea) or completely blocked (apnea)
4. Oxygen levels drop, CO2 rises
5. Brain triggers arousal to restore breathing
6. Cycle repeats throughout the night

**Risk Factors:**
- Obesity (BMI >30)
- Male sex (2-3x higher risk)
- Age >40
- Large neck circumference (>17" men, >16" women)
- Anatomical factors: Large tonsils, recessed chin, large tongue
- Family history
- Alcohol/sedative use
- Smoking

### Central Sleep Apnea (CSA)
The brain fails to send signals to breathe - less common than OSA.

**Causes:**
- Heart failure (Cheyne-Stokes respiration)
- Stroke affecting brainstem
- High altitude
- Opioid use
- Idiopathic

### Symptoms

**Nighttime:**
- Snoring (loud, irregular)
- Witnessed apneas (partner sees breathing stops)
- Gasping/choking awakenings
- Nocturia (frequent urination)
- Restless sleep

**Daytime:**
- Excessive sleepiness (Epworth Sleepiness Scale >10)
- Morning headaches
- Cognitive impairment
- Mood changes
- Decreased libido

## Diagnosis

### Sleep Study (Polysomnography)

**What's measured:**
- Brain waves (EEG) - sleep stages
- Eye movements (EOG)
- Muscle activity (EMG)
- Heart rhythm (ECG)
- Breathing effort and airflow
- Oxygen levels (pulse oximetry)
- Body position

**Key Results:**
- **Apnea**: Complete airflow cessation ≥10 seconds
- **Hypopnea**: ≥30% airflow reduction with ≥3% oxygen drop or arousal

### Apnea-Hypopnea Index (AHI)
Number of apneas + hypopneas per hour of sleep

| AHI | Severity |
|-----|----------|
| <5 | Normal |
| 5-14 | Mild OSA |
| 15-29 | Moderate OSA |
| ≥30 | Severe OSA |

### Home Sleep Apnea Testing (HSAT)
- Portable device used at home
- Measures breathing, oxygen, heart rate
- Appropriate for high pretest probability OSA
- May underestimate AHI (no EEG to confirm sleep)

## Treatment

### Positive Airway Pressure (PAP)

**CPAP (Continuous):**
- Single constant pressure
- Gold standard for OSA
- Pressure typically 5-20 cm H2O

**BiPAP (Bilevel):**
- Different pressures for inhale vs exhale
- Used when high pressures needed
- Also treats hypoventilation

**Auto-PAP (APAP):**
- Automatically adjusts pressure
- Responds to breathing events
- May improve comfort

### Mask Types
- Nasal mask: Covers nose only
- Nasal pillows: Small cushions in nostrils
- Full face mask: Covers nose and mouth

### Oral Appliances
- Mandibular advancement device (MAD)
- Moves jaw forward to open airway
- Good for mild-moderate OSA or CPAP intolerant

### Surgery
- Uvulopalatopharyngoplasty (UPPP): Removes excess tissue
- Maxillomandibular advancement: Moves jaw forward
- Hypoglossal nerve stimulator: Stimulates tongue movement
- Weight loss surgery: For obesity-related OSA

### Lifestyle Modifications
- Weight loss (10% weight loss can halve AHI)
- Positional therapy (side sleeping)
- Avoid alcohol and sedatives
- Treat nasal congestion

## Complications of Untreated OSA

**Cardiovascular:**
- Hypertension (especially resistant hypertension)
- Atrial fibrillation
- Heart failure
- Stroke
- Coronary artery disease

**Metabolic:**
- Insulin resistance
- Type 2 diabetes
- Metabolic syndrome

**Other:**
- Motor vehicle accidents (2-7x increased risk)
- Cognitive decline
- Depression
- Decreased quality of life`,
      keyTerms: [
        { term: 'AHI', definition: 'Apnea-Hypopnea Index; the number of breathing pauses per hour of sleep, used to diagnose and classify OSA severity' },
        { term: 'polysomnography', definition: 'Overnight sleep study that records brain waves, breathing, oxygen levels, and other parameters', pronunciation: 'pol-ee-som-NOG-rah-fee' },
        { term: 'hypopnea', definition: 'Partial blockage of airflow, causing reduced (but not absent) breathing', pronunciation: 'hy-POP-nee-ah' },
        { term: 'BiPAP', definition: 'Bilevel Positive Airway Pressure; provides different pressures for breathing in versus out' },
        { term: 'Epworth Sleepiness Scale', definition: 'Questionnaire measuring daytime sleepiness; scores >10 suggest excessive sleepiness' },
      ],
      analogies: [
        'OSA is like trying to breathe through a straw that keeps getting pinched - each time, you have to work harder to get air through.',
        'The AHI is like counting how many times someone taps your shoulder to wake you up - the higher the number, the more disrupted your sleep.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sleep-disordered breathing is characterized by repetitive episodes of complete (apnea) or partial (hypopnea) upper airway obstruction during sleep, with diagnostic stratification by AHI/RDI, and treatment selection guided by severity, anatomy, and patient factors.',
      explanation: `## Pathophysiology of OSA

### Upper Airway Mechanics

**Balance of Forces:**
- Dilator muscles (genioglossus, tensor palatini) vs.
- Collapsing forces (negative inspiratory pressure, tissue weight)

**Critical Closing Pressure (Pcrit):**
- Pressure at which pharynx collapses
- OSA patients: Pcrit near atmospheric (easily collapsing)
- Normal: Pcrit very negative (resistant to collapse)

**Contributing Factors:**
1. **Anatomical load**: Fat deposition, large tongue, retrognathia
2. **Neuromuscular**: Reduced dilator muscle tone during sleep
3. **Loop gain**: Ventilatory control instability
4. **Arousal threshold**: Low threshold leads to frequent arousals before sufficient compensation

### Intermittent Hypoxia and Reoxygenation

**Molecular Consequences:**
- Oxidative stress
- HIF-1α activation
- Inflammatory cytokine release (TNF-α, IL-6, IL-8)
- Endothelial dysfunction
- Sympathetic activation

This explains the cardiovascular consequences of OSA.

## Diagnostic Criteria and Testing

### AASM Diagnostic Criteria for OSA

OSA diagnosis requires EITHER:
1. AHI ≥15 events/hour, OR
2. AHI ≥5 events/hour PLUS symptoms (sleepiness, witnessed apneas, etc.) or comorbidities (HTN, mood disorder, CVD)

### Event Definitions (AASM 2017)

**Apnea:**
- ≥90% reduction in airflow
- Duration ≥10 seconds
- Types: Obstructive, central, or mixed

**Hypopnea:**
- ≥30% reduction in airflow
- Duration ≥10 seconds
- ≥3% oxygen desaturation OR arousal

### Respiratory Effort-Related Arousals (RERAs)
- Increased respiratory effort leading to arousal
- Does not meet apnea/hypopnea criteria
- Included in Respiratory Disturbance Index (RDI)

**RDI = AHI + RERAs per hour**

### Sleep Study Interpretation

**Sleep Architecture:**
- Reduced slow wave (N3) and REM sleep
- Increased N1 and N2
- Fragmented with frequent arousals

**Body Position:**
- Positional OSA: AHI supine ≥2x AHI lateral
- 50-60% of OSA patients have positional component

**REM-Related OSA:**
- AHI in REM ≥2x AHI in NREM
- Due to additional muscle atonia in REM
- May undertreated with CPAP titrated in NREM

**Oxygen Parameters:**
- Nadir SpO2
- Time <90% (T90)
- Oxygen desaturation index (ODI)

## Central Sleep Apnea Syndromes

### Heart Failure-Related CSA (Cheyne-Stokes)

**Mechanism:**
1. Hypocapnia from hyperventilation (lung congestion)
2. CO2 falls below apneic threshold
3. Central apnea occurs
4. CO2 rises during apnea
5. Breathing resumes with hyperpnea (overshoot)
6. Cycle repeats (crescendo-decrescendo pattern)

**Characteristics:**
- Cycle length 45-90 seconds
- Present in 30-50% of heart failure with reduced EF
- Associated with worse HF prognosis

**Treatment:**
- Optimize heart failure (most important)
- Supplemental oxygen
- CPAP or adaptive servo-ventilation (ASV)
- Note: ASV contraindicated in HFrEF (SERVE-HF trial showed harm)

### Opioid-Induced CSA

**Mechanism:**
- Opioids depress respiratory drive
- Reduce hypercapnic and hypoxic ventilatory responses
- Irregular breathing pattern (ataxic breathing)

**Features:**
- Central and obstructive events
- Often mixed apneas
- Biot's breathing pattern

**Treatment:**
- Reduce opioid dose if possible
- CPAP or BiPAP (not ASV)
- Consider alternative pain management

### Treatment-Emergent Central Apnea (CompSA)

**Definition:**
- Central apneas emerge or persist when obstructive events are eliminated by PAP
- 5-15% of OSA patients

**Management:**
- Often resolves with continued CPAP use
- If persistent, consider BiPAP or ASV

## Obesity Hypoventilation Syndrome (OHS)

### Definition (all required)
1. BMI ≥30 kg/m²
2. Awake hypercapnia (PaCO2 >45 mmHg)
3. No other cause of hypoventilation

### Pathophysiology
- Increased work of breathing (chest wall/abdominal mass)
- Reduced respiratory drive (leptin resistance)
- Usually coexists with severe OSA (90%)

### Diagnosis
- ABG showing chronic respiratory acidosis
- Elevated serum bicarbonate (>27 mEq/L) - clue
- Sleep study showing severe OSA + hypoventilation

### Treatment
- **PAP therapy**: BiPAP ST preferred if significant OHS, CPAP if mild
- **Weight loss**: Bariatric surgery highly effective
- **Supplemental O2**: If persistent hypoxemia
- **Tracheostomy**: Severe refractory cases

## CPAP Adherence and Optimization

### Adherence Definition
- Medicare: ≥4 hours/night for ≥70% of nights
- Optimal: >6 hours nightly

### Predictors of Non-Adherence
- Nasal congestion
- Claustrophobia
- Mask leak/discomfort
- Low self-efficacy
- Depression

### Improving Adherence
- Mask fitting and trials
- Heated humidification
- Pressure ramping
- Chin straps for mouth leak
- Nasal steroids for congestion
- Behavioral interventions
- Telemonitoring with early intervention`,
      keyTerms: [
        { term: 'Pcrit', definition: 'Critical closing pressure; the pharyngeal pressure at which the airway collapses. Higher (less negative) values indicate more collapsible airways' },
        { term: 'loop gain', definition: 'Measure of ventilatory control stability; high loop gain causes overcorrection of breathing abnormalities and promotes central apnea' },
        { term: 'arousal threshold', definition: 'The stimulus intensity required to wake from sleep; low threshold causes awakenings before effective compensation' },
        { term: 'RDI', definition: 'Respiratory Disturbance Index; includes AHI plus RERAs (respiratory effort-related arousals)' },
        { term: 'Cheyne-Stokes respiration', definition: 'Periodic breathing pattern with crescendo-decrescendo tidal volumes alternating with central apneas; seen in heart failure' },
        { term: 'OHS', definition: 'Obesity hypoventilation syndrome; obesity plus daytime hypercapnia without other cause, usually with OSA' },
      ],
      clinicalNotes: 'When evaluating suspected OSA, always check serum bicarbonate - elevation >27 mEq/L suggests chronic hypercapnia and possible OHS, warranting arterial blood gas. OHS patients need BiPAP rather than CPAP alone to address both obstruction and hypoventilation.',
    },
    4: {
      level: 4,
      summary: 'Advanced sleep medicine integrates physiological phenotyping of OSA (anatomical load, muscle responsiveness, loop gain, arousal threshold) to guide precision therapy, with emerging understanding of cardiovascular mechanisms and consideration of alternative therapies for PAP-intolerant patients.',
      explanation: `## Physiological Phenotyping of OSA

### The PALM Traits

OSA pathophysiology varies among patients, explaining differential treatment responses:

**P - Pcrit (Anatomical Load):**
- Pharyngeal collapsibility
- Measured by critical closing pressure
- Anatomical treatments effective when dominant

**A - Arousal Threshold:**
- How easily patient awakens
- Low threshold: Arousals before adequate compensation
- Sedatives (trazodone, eszopiclone) may help by increasing threshold

**L - Loop Gain:**
- Ventilatory control stability
- High loop gain: Excessive respiratory response to chemical stimuli
- Carbonic anhydrase inhibitors (acetazolamide) reduce loop gain
- Oxygen supplementation may help

**M - Muscle Responsiveness:**
- Ability of dilator muscles to compensate for obstruction
- Variable among patients
- Hypoglossal nerve stimulation targets this trait

### Phenotype-Guided Therapy

| Dominant Trait | Potential Therapies |
|---------------|---------------------|
| High Pcrit | Weight loss, surgery, MAD |
| Low arousal threshold | Sedatives, avoid sleep deprivation |
| High loop gain | Acetazolamide, oxygen |
| Poor muscle responsiveness | Hypoglossal stimulation, atomoxetine+oxybutynin |

### Drug-Induced Sleep Endoscopy (DISE)

**Purpose:**
- Visualize site(s) of collapse under sedation
- Guide surgical planning
- Predict MAD response

**Collapse Patterns:**
- Velum (soft palate)
- Oropharynx (lateral walls)
- Tongue base
- Epiglottis

**Grading Systems:**
- VOTE classification (Velum, Oropharynx lateral walls, Tongue, Epiglottis)
- Degree: None, partial, complete
- Configuration: Anteroposterior, lateral, concentric

## Advanced Treatment Options

### Hypoglossal Nerve Stimulation (HNS)

**Mechanism:**
- Implanted pulse generator (like pacemaker)
- Electrode on hypoglossal nerve
- Stimulates genioglossus during inspiration
- Prevents tongue prolapse

**Patient Selection (STAR Trial Criteria):**
- Moderate to severe OSA (AHI 15-65)
- CPAP failure or intolerance
- BMI <32-35 (varies by device)
- No complete concentric collapse at velum on DISE

**Outcomes:**
- 66% surgical success (AHI reduction ≥50% to <20)
- Maintained at 5 years
- Improved quality of life

### Pharmacotherapy

**Emerging Drug Combinations:**

**Atomoxetine + Oxybutynin:**
- Atomoxetine: Norepinephrine reuptake inhibitor, increases muscle tone
- Oxybutynin: Antimuscarinic, reduces genioglossus inhibition during REM
- MARIPOSA trial: AHI reduction of 50%

**AD109 (Sulthiame):**
- Carbonic anhydrase inhibitor
- Reduces loop gain and stabilizes breathing
- Phase 2 trials showing promise

**Dronabinol:**
- Cannabinoid reducing apneic events
- Mixed results, not widely adopted

### Positional Therapy Devices

**New Generation Devices:**
- Vibrotactile feedback devices
- Worn on chest or neck
- Vibrate when supine position detected
- 50-60% efficacy in positional OSA

### Maxillomandibular Advancement (MMA)

**Technique:**
- Bilateral sagittal split osteotomy (mandible)
- Le Fort I osteotomy (maxilla)
- Advances midface and jaw 10-12 mm

**Efficacy:**
- Most effective OSA surgery
- 80-90% surgical success
- Best for retrognathia

## Cardiovascular Implications

### OSA and Hypertension

**Mechanisms:**
- Sympathetic activation
- RAAS activation
- Endothelial dysfunction
- Oxidative stress

**Resistant Hypertension:**
- OSA present in 70-80% of resistant HTN
- Screen all resistant hypertension patients
- CPAP reduces BP (modest effect: 2-3 mmHg)

### OSA and Atrial Fibrillation

**Bidirectional Relationship:**
- OSA increases AF risk 2-4x
- AF promotes OSA via fluid shifts

**Clinical Implications:**
- Higher AF recurrence after cardioversion if OSA untreated
- Screen all AF patients for OSA
- CPAP may reduce AF burden

### OSA and Heart Failure

**OSA in HF:**
- Present in 50% of HF patients
- Contributes to HF progression
- CPAP improves cardiac function

**CSA in HF (Cheyne-Stokes):**
- Marker of severe HF
- ASV showed harm in HFrEF (SERVE-HF)
- Focus on HF optimization
- CPAP or phrenic nerve stimulation options

### OSA and Stroke

**OSA as Stroke Risk:**
- Independent risk factor
- 2-4x increased risk

**OSA After Stroke:**
- 50-70% prevalence post-stroke
- Impairs rehabilitation
- Early CPAP may improve outcomes

## Special Populations

### Pregnancy and OSA

**Physiological Changes:**
- Upper airway edema
- Weight gain
- Diaphragm elevation

**Risks:**
- Gestational hypertension/preeclampsia
- Gestational diabetes
- Fetal growth restriction
- Preterm birth

**Management:**
- Screen high-risk pregnancies
- CPAP safe during pregnancy
- Positional therapy

### Pediatric OSA

**Epidemiology:**
- 1-5% of children
- Peak at 2-8 years (adenotonsillar hypertrophy)

**Differences from Adult OSA:**
- Adenotonsillar hypertrophy primary cause
- Symptoms: Snoring, mouth breathing, behavioral problems
- AHI ≥1 considered abnormal in children

**Treatment:**
- Adenotonsillectomy (first-line)
- CPAP if surgery contraindicated or fails
- Weight loss if obese

### OSA in Anesthesia/Perioperative

**Increased Risks:**
- Difficult intubation
- Postoperative respiratory complications
- Sensitivity to opioids and sedatives

**Management:**
- Screen preoperatively (STOP-BANG)
- Continue CPAP perioperatively
- Extended monitoring postoperatively
- Minimize opioids`,
      keyTerms: [
        { term: 'PALM traits', definition: 'Four physiological traits contributing to OSA: Pcrit (anatomy), Arousal threshold, Loop gain, Muscle responsiveness' },
        { term: 'DISE', definition: 'Drug-induced sleep endoscopy; visualization of upper airway collapse under sedation to guide surgical planning', pronunciation: 'dice' },
        { term: 'hypoglossal nerve stimulation', definition: 'Implantable device that stimulates the tongue to move forward during inspiration, preventing airway collapse' },
        { term: 'VOTE classification', definition: 'DISE grading system for collapse at Velum, Oropharynx lateral walls, Tongue base, and Epiglottis' },
        { term: 'SERVE-HF', definition: 'Trial showing harm with adaptive servo-ventilation (ASV) in HFrEF patients with CSA, leading to contraindication' },
        { term: 'STOP-BANG', definition: 'OSA screening questionnaire: Snoring, Tiredness, Observed apnea, Pressure (HTN), BMI, Age, Neck, Gender' },
      ],
      clinicalNotes: 'Key decision points: 1) All patients with resistant hypertension or atrial fibrillation should be screened for OSA. 2) ASV is contraindicated in HFrEF (EF ≤45%) - use CPAP instead. 3) For surgical planning in PAP-intolerant patients, DISE is invaluable to identify collapse pattern. 4) Hypoglossal nerve stimulation requires absence of complete concentric collapse at velum.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art sleep medicine employs precision phenotyping, biomarker-guided therapy, advanced PAP modalities, and multimodal treatment strategies integrating pharmacotherapy, neuromodulation, and surgery based on individual pathophysiological traits.',
      explanation: `## Precision Medicine in Sleep Apnea

### Biomarkers for OSA

**Diagnostic Biomarkers:**

| Biomarker | Source | Utility |
|-----------|--------|---------|
| Urinary catecholamines | Urine | Sympathetic activation |
| hs-CRP | Serum | Inflammation, CV risk |
| IL-6, TNF-α | Serum | Inflammatory phenotype |
| Adhesion molecules | Serum | Endothelial dysfunction |
| Exosomal miRNAs | Plasma | Emerging diagnostic |

**Prognostic Biomarkers:**
- Cardiac troponins: Subclinical myocardial injury
- NT-proBNP: Cardiac strain, predicts CSA
- HbA1c: Metabolic impact

**Pharmacogenomics:**
- CYP2D6 polymorphisms affect atomoxetine metabolism
- May guide drug selection for pharmacotherapy

### Advanced PAP Modalities

**Volume-Assured Pressure Support (VAPS):**
- Auto-titrating bilevel with target tidal volume
- Examples: AVAPS, iVAPS
- Used for OHS, neuromuscular disease, COPD-OSA overlap

**Adaptive Servo-Ventilation (ASV):**
- Anticyclic algorithm counters periodic breathing
- Detects cycle length and adjusts support
- Effective for CSA, treatment-emergent CSA
- **Contraindicated:** HFrEF with EF ≤45% (SERVE-HF)

**High-Flow Nasal Therapy:**
- Alternative for CPAP-intolerant mild OSA
- Reduces AHI modestly
- Better tolerated by some patients

### Machine Learning in Sleep Medicine

**Sleep Staging:**
- Deep learning algorithms match expert scoring
- Automated analysis of wearable data
- Consumer devices (Apple Watch, Fitbit) incorporating sleep staging

**OSA Detection:**
- Smartphone-based snoring analysis
- Single-channel EEG algorithms
- Photoplethysmography-based AHI estimation

**Treatment Response Prediction:**
- Predict CPAP adherence from baseline characteristics
- Identify responders to oral appliances
- Phenotype assignment from polysomnography features

## Novel Therapeutics

### Combination Pharmacotherapy

**AD109 (Sulthiame):**
- Carbonic anhydrase inhibitor
- Reduces chemosensitivity (loop gain)
- Phase 2: 40-50% AHI reduction
- Well-tolerated

**Atomoxetine-Oxybutynin (AO):**
- Increases genioglossus EMG activity
- MARIPOSA trial: AHI reduced by 50%
- Potential first-line for select patients

**Desipramine:**
- Norepinephrine reuptake inhibitor
- May increase arousal threshold and muscle tone
- Small studies, not established

### Targeted Fluid Management

**Rostral Fluid Shift:**
- Daytime fluid accumulates in legs
- Redistributes to neck when supine
- Contributes to pharyngeal narrowing

**Interventions:**
- Compression stockings during day
- Diuretics in appropriate patients
- Elevating head of bed

**Evidence:**
- Compression stockings reduce AHI 30-40% in some patients
- Best for patients with venous insufficiency, heart failure

### Oropharyngeal Exercises (Myofunctional Therapy)

**Mechanism:**
- Strengthens dilator muscles
- Improves muscle coordination
- Changes oral posture

**Evidence:**
- Meta-analysis: AHI reduction ~50%
- May improve CPAP adherence
- No major side effects

### Phrenic Nerve Stimulation

**Mechanism:**
- Transvenous lead in phrenic nerve
- Stimulates diaphragm when central apnea detected
- Restores breathing during CSA

**remedē System:**
- FDA approved for moderate-severe CSA
- Does not require sensing airflow
- Uses minute ventilation algorithm

**Outcomes:**
- AHI reduction >50% in clinical trials
- Improved quality of life
- Option for CSA when ASV contraindicated

## OSA Endotypes and Treatment Matching

### Endotype Assessment

**Research Tools:**
- Single-channel EEG analysis
- Polysomnography-derived traits
- PALM trait assessment from standard PSG

**Commercial Development:**
- Algorithms estimating arousal threshold, loop gain
- Point toward personalized therapy
- Not yet standard of care

### Practical Phenotyping

| Clinical Feature | Suggests | Treatment Implications |
|------------------|----------|----------------------|
| Severe positional AHI | Dominant anatomical | Positional therapy, MAD |
| Very low awakening SpO2 | Low arousal threshold | Avoid sedative worsening, consider hypnotics |
| Prominent desaturation, few arousals | Tolerates obstruction | Good CPAP candidate |
| Periodic breathing pattern | High loop gain | Oxygen, acetazolamide |
| Severe REM-dominant | Anatomical + REM atonia | May need higher CPAP in REM |

## COPD-OSA Overlap Syndrome

### Definition
- Coexistence of COPD and OSA
- Prevalence: 1-4% of general population

### Clinical Importance
- Worse hypoxemia than either alone
- Higher cardiovascular risk
- Greater pulmonary hypertension risk
- Higher mortality

### Treatment
- PAP therapy for OSA component
- Supplemental O2 if persistent hypoxemia
- COPD optimization (bronchodilators, etc.)
- Consider nocturnal NIV if hypercapnic

## Quality Metrics and Outcomes

### PAP Adherence Monitoring

**Remote Monitoring:**
- Real-time data transmission
- Early intervention for non-adherence
- Automated alerts to clinicians

**Outcome Measures:**
- Usage hours per night
- Residual AHI on therapy
- Leak metrics
- Large leak time

### Patient-Reported Outcomes

**Sleepiness:**
- Epworth Sleepiness Scale (ESS)
- FOSQ (Functional Outcomes of Sleep Questionnaire)

**Quality of Life:**
- SF-36
- SAQLI (Sleep Apnea Quality of Life Index)

### Cardiovascular Outcome Trials

**SAVE Trial:**
- Secondary prevention in CVD + OSA
- CPAP did not reduce cardiovascular events
- Adherence was suboptimal (~3.3 hours)
- Post-hoc: >4 hours use showed benefit

**Interpretation:**
- Compliance critical for outcomes
- Selection of patients matters
- Ongoing trials with stricter adherence

## Clinical Practice Integration

### Screening Recommendations

| Population | Screen |
|------------|--------|
| Resistant hypertension | Yes |
| Atrial fibrillation | Yes |
| Heart failure | Yes |
| Pre-bariatric surgery | Yes |
| Type 2 diabetes | Consider |
| Pre-surgery (high risk) | Yes |
| Commercial drivers | Yes |

### Multidisciplinary Approach

- Sleep medicine specialist
- Pulmonologist
- Cardiologist (for cardiovascular comorbidities)
- ENT (surgical candidates)
- Dentist (oral appliance therapy)
- Weight management
- Mental health (for adherence, mood)`,
      keyTerms: [
        { term: 'VAPS', definition: 'Volume-assured pressure support; bilevel PAP that auto-adjusts to maintain target tidal volume, used for OHS and hypoventilation' },
        { term: 'rostral fluid shift', definition: 'Movement of daytime leg fluid to neck/pharynx when supine, contributing to OSA severity' },
        { term: 'myofunctional therapy', definition: 'Oropharyngeal exercises to strengthen and coordinate upper airway muscles, reducing AHI' },
        { term: 'remedē system', definition: 'Implantable phrenic nerve stimulator for central sleep apnea' },
        { term: 'SAVE trial', definition: 'Landmark RCT showing CPAP did not reduce cardiovascular events in OSA patients with established CVD, though adherence was suboptimal' },
        { term: 'overlap syndrome', definition: 'Coexistence of COPD and OSA with synergistic negative health effects' },
      ],
      clinicalNotes: `Key clinical pearls:

1. **Phenotyping matters**: Not all OSA is the same. Consider DISE before surgery, and recognize that patients with high loop gain may benefit from acetazolamide or oxygen rather than anatomical interventions.

2. **Cardiovascular screening**: OSA screening should be routine in resistant hypertension, AF, and HF. However, CPAP alone may not prevent cardiovascular events - comprehensive risk management remains essential.

3. **Adherence is key**: CPAP adherence >4 hours nightly is associated with benefits. Use all tools: proper mask fitting, heated humidification, APAP, telemonitoring, and behavioral support.

4. **HFrEF and CSA**: ASV is contraindicated. Use CPAP, optimize heart failure, and consider phrenic nerve stimulation.

5. **Emerging pharmacotherapy**: Atomoxetine-oxybutynin combination and sulthiame represent promising oral therapies for select patients, though not yet standard of care.

6. **Personalized approach**: Match treatment to patient phenotype, preferences, and anatomy. Not everyone needs CPAP - oral appliances, positional therapy, surgery, and emerging drugs expand options.`,
    },
  },

  media: [
    {
      id: 'osa-pathophysiology',
      type: 'diagram',
      filename: 'osa-pathophysiology.svg',
      title: 'OSA Pathophysiology',
      description: 'Diagram showing upper airway collapse, hypoxia-reoxygenation cycles, and downstream effects',
    },
    {
      id: 'palm-traits',
      type: 'diagram',
      filename: 'osa-palm-traits.svg',
      title: 'PALM Traits in OSA',
      description: 'Four physiological traits contributing to OSA severity',
    },
    {
      id: 'pap-therapy-types',
      type: 'diagram',
      filename: 'pap-therapy-comparison.svg',
      title: 'PAP Therapy Modalities',
      description: 'Comparison of CPAP, BiPAP, APAP, ASV, and VAPS',
    },
  ],

  citations: [
    {
      id: 'aasm-scoring-manual',
      type: 'article',
      title: 'The AASM Manual for the Scoring of Sleep and Associated Events',
      authors: ['American Academy of Sleep Medicine'],
      source: 'AASM',
      url: 'https://aasm.org',
    },
    {
      id: 'serve-hf-trial',
      type: 'article',
      title: 'Adaptive Servo-Ventilation for Central Sleep Apnea in Systolic Heart Failure',
      authors: ['Cowie MR', 'Woehrle H', 'Wegscheider K', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1506459',
    },
    {
      id: 'save-trial',
      type: 'article',
      title: 'CPAP for Prevention of Cardiovascular Events in Obstructive Sleep Apnea',
      authors: ['McEvoy RD', 'Antic NA', 'Heeley E', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1606599',
    },
  ],

  crossReferences: [
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
    { targetId: 'topic-pulmonary-function-tests', targetType: 'topic', relationship: 'related', label: 'Pulmonary Function Tests' },
    { targetId: 'condition-interstitial-lung-diseases', targetType: 'condition', relationship: 'related', label: 'Interstitial Lung Diseases' },
  ],

  tags: {
    systems: ['respiratory', 'cardiovascular', 'neurological'],
    topics: ['pulmonology', 'sleep medicine', 'cardiology', 'chronic disease'],
    keywords: ['sleep apnea', 'OSA', 'CSA', 'CPAP', 'polysomnography', 'snoring', 'hypoxemia', 'AHI'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'neurology', 'psychiatry'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sleepDisorders;
