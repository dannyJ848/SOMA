/**
 * Sleep Apnea - Comprehensive Educational Content
 *
 * Covers pathophysiology, diagnosis, and management of obstructive
 * and central sleep apnea.
 */

import { EducationalContent } from '../../types';

export const sleepApnea: EducationalContent = {
  id: 'condition-sleep-apnea',
  type: 'condition',
  name: 'Sleep Apnea',
  nameEs: 'Apnea del Sueño',
  alternateNames: ['Obstructive Sleep Apnea', 'OSA', 'Central Sleep Apnea', 'CSA', 'Sleep-Disordered Breathing'],
  hpoId: 'HP:0010265',

  levels: {
    1: {
      level: 1,
      summary: 'Sleep apnea is a condition where breathing repeatedly stops and starts during sleep, causing poor sleep and daytime tiredness.',
      explanation: `Sleep apnea is a common sleep disorder where your breathing pauses many times during the night. Each pause can last from a few seconds to minutes, and may happen 30 times or more an hour.

**What happens during sleep apnea:**
- Your throat muscles relax too much
- Your airway collapses or gets blocked
- You stop breathing for brief periods
- Your brain wakes you up just enough to breathe again
- This happens many times without you remembering

**Common signs:**
- Loud snoring (often with pauses)
- Gasping or choking during sleep
- Morning headache
- Dry mouth or sore throat
- Daytime sleepiness and fatigue
- Trouble concentrating
- Mood changes or irritability

**Risk factors:**
- Being overweight
- Large neck size
- Male gender
- Age over 40
- Family history
- Enlarged tonsils
- Alcohol or sedatives before bed

**Health problems from untreated sleep apnea:**
- High blood pressure
- Heart disease
- Stroke
- Diabetes
- Depression
- Car accidents from falling asleep

**Diagnosis:**
- Sleep study (polysomnogram) monitors breathing, brain activity, and oxygen levels during sleep
- Home sleep tests available for some patients

**Treatment:**
- CPAP (mask that blows air into throat to keep airway open)
- Weight loss
- Avoid alcohol and sleeping pills
- Sleep on your side
- Mouthpieces for some cases
- Surgery for severe cases`,
      keyTerms: [
        { term: 'apnea', definition: 'A pause in breathing during sleep that lasts at least 10 seconds' },
        { term: 'CPAP', definition: 'Continuous Positive Airway Pressure; a machine that uses air pressure to keep airways open during sleep' },
        { term: 'polysomnogram', definition: 'A sleep study that records brain waves, breathing, and oxygen levels during sleep' },
      ],
      analogies: [
        'Sleep apnea is like trying to breathe through a wet paper towel - the airway collapses and air can\'t get through.',
        'Each time you stop breathing, it\'s like your brain hits a reset button, waking you up just enough to breathe again. This can happen hundreds of times a night.',
      ],
      examples: [
        'A truck driver who falls asleep at the wheel might have undiagnosed sleep apnea.',
        'Someone whose partner complains about their loud snoring and gasping at night should be evaluated for sleep apnea.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sleep apnea encompasses obstructive sleep apnea (OSA, 90% of cases) from upper airway collapse during sleep, and central sleep apnea (CSA) from absent respiratory effort. Diagnosis requires sleep study with AHI ≥5 events/hour with symptoms or ≥15 regardless of symptoms.',
      explanation: `## Types of Sleep Apnea

**Obstructive Sleep Apnea (OSA) - 90%:**
- Upper airway collapses during sleep
- Respiratory effort continues against obstruction
- Most common form

**Central Sleep Apnea (CSA) - 10%:**
- Brain fails to send proper signals to breathing muscles
- No respiratory effort during apnea
- Associated with heart failure, neurological conditions, opioid use

**Mixed Sleep Apnea:**
- Combination of obstructive and central events
- Often begins as central, becomes obstructive

## Obstructive Sleep Apnea (OSA)

**Pathophysiology:**
- Pharyngeal muscle relaxation during REM and NREM sleep
- Negative intrathoracic pressure during inspiration sucks airway walls inward
- Anatomical narrowing from obesity, large tonsils, retrognathia
- Airway collapse leads to hypoxia and micro-arousals

**Risk Factors:**
- Obesity (BMI >30)
- Male sex (2-3x more common)
- Age >40
- Neck circumference >17 inches (men), >16 inches (women)
- Craniofacial abnormalities
- Family history
- Alcohol, sedatives, smoking
- Nasal congestion

**Symptoms:**
**Nighttime:**
- Loud snoring (often disruptive to bed partner)
- Witnessed apneas (gasping, choking)
- Restless sleep, frequent position changes
- Nocturia

**Daytime:**
- Excessive daytime sleepiness
- Morning headaches
- Poor concentration
- Irritability, mood changes
- Decreased libido

## Diagnosis

**Sleep Study (Polysomnogram):**
- Measures: EEG (brain waves), EOG (eye movements), EMG (muscle tone), respiratory effort, airflow, oxygen saturation
- Performed in sleep lab or home

**Key Metrics:**
- **AHI (Apnea-Hypopnea Index)**: Number of apneas + hypopneas per hour of sleep
- **Oxygen Desaturation Index (ODI)**: Drops in oxygen per hour
- **Arousal Index**: Number of awakenings per hour

**Severity Classification (AHI):**
| Severity | AHI (events/hour) |
|----------|-------------------|
| Normal | <5 |
| Mild | 5-14.9 |
| Moderate | 15-29.9 |
| Severe | ≥30 |

**Diagnostic Criteria:**
- AHI ≥5 with symptoms OR
- AHI ≥15 regardless of symptoms

## Treatment of OSA

**Positive Airway Pressure (PAP) Therapy:**
- **CPAP**: Continuous pressure (first-line)
- **APAP**: Auto-adjusting pressure
- **BiPAP**: Different pressures for inhalation/exhalation

**Alternative Therapies:**
- Oral appliances (mandibular advancement devices)
- Weight loss
- Positional therapy (avoid supine sleep)
- Avoid alcohol and sedatives
- Upper airway surgery (UPPP, MMA, HNS) - reserved for specific cases

**When to Treat:**
- Moderate-severe OSA (AHI ≥15)
- Mild OSA (AHI 5-15) with symptoms or comorbidities`,
      keyTerms: [
        { term: 'AHI', definition: 'Apnea-Hypopnea Index; number of breathing pauses per hour of sleep' },
        { term: 'hypopnea', definition: 'Partial reduction in breathing (50% reduction for ≥10 seconds with oxygen drop or arousal)' },
        { term: 'UPPP', definition: 'Uvulopalatopharyngoplasty; surgery removing excess throat tissue' },
        { term: 'retrognathia', definition: 'Receding chin; jaw positioned farther back than normal, narrowing airway' },
        { term: 'nocturia', definition: 'Frequent urination at night; in OSA, caused by atrial natriuretic peptide release from atrial stretch' },
      ],
      analogies: [
        'The AHI score is like a "stop count" - how many times per hour your breathing stops or significantly slows down.',
        'CPAP is like a pneumatic splint - the air pressure keeps your airway open just like a splint holds a broken bone in place.',
      ],
    },
    3: {
      level: 3,
      summary: 'OSA pathogenesis involves upper airway collapsibility from anatomical and neuromuscular factors, leading to cyclical desaturation, sympathetic activation, and sleep fragmentation. CSA involves reduced ventilatory drive from chemoreceptor dysfunction or heart failure.',
      explanation: `## Obstructive Sleep Apnea: Pathophysiology

### Upper Airway Collapse

**Anatomical Factors:**
- Reduced airway caliber (retropalatal and retroglossal regions)
- Soft tissue enlargement (tonsils, tongue, lateral pharyngeal walls)
- Skeletal constraints (micrognathia, retrognathia, high arched palate)
- Neck circumference (surrogate for upper airway fat)

**Neuromuscular Factors:**
- Reduced dilator muscle activity during sleep
- Delayed or diminished reflex response to negative pressure
- REM atonia exacerbates collapse

**Loop Gain:**
- Ventilatory control instability
- High loop gain = overshoot/undershoot of ventilation
- Contributes to periodic breathing and central apneas

### Physiologic Consequences

**Cyclical Events:**
1. Airway obstruction
2. Hypoxia and hypercapnia
3. Increased sympathetic activity
4. Micro-arousal (cortical awakening)
5. Restoration of airway patency
6. Hyperventilation and hypocapnia
7. Return to sleep → repeat

**Cardiovascular Effects:**
- Sympathetic activation → hypertension
- Negative intrathoracic pressure → increased LV afterload
- Oxidative stress and inflammation
- Endothelial dysfunction
- Insulin resistance

**Neurocognitive Effects:**
- Sleep fragmentation → daytime sleepiness
- Prefrontal cortex dysfunction → executive dysfunction
- Hippocampal effects → memory impairment

### Phenotypes of OSA

| Phenotype | Features | Treatment Implications |
|-----------|----------|----------------------|
| Anatomic-predominant | High BMI, large neck | Weight loss, surgery may be effective |
| REM-predominant | Events mainly in REM | Lower CPAP pressures often adequate |
| Positional | Worse when supine | Positional therapy effective |
| High loop gain | Cheyne-Stokes breathing pattern | May need different PAP approach |

## Central Sleep Apnea

### Types

**Primary Central Sleep Apnea (CSA):**
- Idiopathic, no clear cause
- Diagnosis of exclusion

**Cheyne-Stokes Breathing (CSB):**
- Periodic breathing with crescendo-decrescendo pattern
- Usually from heart failure or stroke
- Arousal-related central events

**Treatment-Emergent Central Apnea:**
- Central apneas appear when starting CPAP for OSA
- Usually resolves with continued PAP therapy
- May require ASV (adaptive servo-ventilation)

**High Altitude Periodic Breathing:**
- Hypoxic ventilatory response overshoot
- Resolves with acclimatization or descent

### CSA Pathophysiology

**Heart Failure-Related CSA:**
- Pulmonary congestion stimulates pulmonary irritant receptors
- Circulatory delay prolongs feedback loop
- Increased chemosensitivity
- Hypocapnia below apnea threshold during sleep

**Opioid-Induced CSA:**
- Blunted ventilatory response to hypercapnia
- Increased risk with higher doses and certain medications (benzodiazepines)
- Can convert OSA to mixed or central apnea

### CSA Diagnosis

**Polysomnography Criteria:**
- ≥5 central apneas per hour
- >50% of apneas are central
- No evidence of upper airway obstruction

**CSA with Cheyne-Stokes Pattern:**
- ≥3 consecutive central apneas/hypopneas
- Crescendo-decrescendo breathing pattern
- Cycle length ≥40 seconds

## Treatment Approaches

### PAP Modalities

| Modality | Indication | Mechanism |
|----------|------------|-----------|
| CPAP | OSA, some CSA | Fixed pressure |
| APAP | OSA (home therapy) | Auto-adjusting pressure |
| BiPAP (S/T mode) | OSA with high pressure needs, obesity hypoventilation | IPAP/EPAP difference |
| ASV | CSA, complex sleep apnea | Adjusts support breath-by-breath |
| Volume-targeted PAP | Obesity hypoventilation | Guaranteed tidal volume |

### Alternative Therapies

**Mandibular Advancement Devices:**
- Oral appliances advancing mandible
- Indicated for mild-moderate OSA or CPAP intolerant
- ~50% reduction in AHI on average
- Custom-made preferred over over-the-counter

**Hypoglossal Nerve Stimulation:**
- Implanted device stimulating tongue protrusion
- Approved for moderate-severe OSA with CPAP failure
- BMI <32-35, AHI 15-65, <25% central events

**Positional Therapy:**
- Vibration devices to prevent supine sleep
- Effective for positional OSA (supine AHI >2x lateral)
- Low cost, good adherence

**Surgical Options:**
- UPPP: Limited success (~40% cure)
- MMA (maxillomandibular advancement): ~80% success
- HNS (hypoglossal nerve stimulation)
- Tracheostomy: Curative but extreme measure`,
      keyTerms: [
        { term: 'loop gain', definition: 'Ventilatory control stability; high loop gain causes instability in breathing pattern' },
        { term: 'CSB', definition: 'Cheyne-Stokes breathing; periodic breathing with crescendo-decrescendo pattern' },
        { term: 'ASV', definition: 'Adaptive servo-ventilation; PAP mode that adjusts support breath-by-breath for CSA' },
        { term: 'BMI', definition: 'Body mass index; weight in kg / (height in m)²' },
        { term: 'arousal', definition: 'Brief awakening from sleep, often not remembered; fragments sleep' },
      ],
      clinicalNotes: 'For CSA with Cheyne-Stokes breathing due to heart failure, optimize medical therapy first. ASV contraindicated in LVEF ≤45% and CSA predominantly Cheyne-Stokes (SERVE-HF trial). For opioid-induced CSA, consider BiPAP ST or ASV with caution.',
    },
    4: {
      level: 4,
      summary: 'Advanced sleep apnea management addresses phenotypes, PAP optimization strategies, comorbidity interactions, and treatment-emergent central apnea, with attention to cardiovascular risk reduction and personalized therapy selection.',
      explanation: `## Phenotype-Guided Therapy

### OSA Phenotyping

**Anatomic Risk:**
- Assess cephalometry (lateral neck X-ray)
- Drug-induced sleep endoscopy (DISE) for surgical planning
- Upper airway CT/MRI for research

**Physiologic Traits:**
| Trait | Measurement | Clinical Utility |
|-------|-------------|------------------|
| Upper airway collapsibility | CPAP level at which obstruction resolves | Predicts CPAP pressure needed |
| Loop gain | Ventilatory response to CO2 | Predicts ASV or complex apnea |
| Arousal threshold | Pressure needed to cause arousal | Low threshold = prone to waking |
| Upper airway muscle responsiveness | EMG of genioglossus | Predicts response to hypoglossal stimulation |

### Precision PAP Therapy

**CPAP Optimization:**
- Start at prescribed pressure from titration
- Auto-adjusting (APAP) allows pressure range 4-20 cm H2O
- Remote monitoring for adherence tracking
- Mask leak management critical

**When to Consider ASV:**
- Treatment-emergent CSA persisting >3 months
- Primary CSA not due to heart failure
- Complex sleep apnea (mixed obstructive/central)

**Contraindications to ASV:**
- LVEF ≤45% with CSA-CSB (SERVE-HF trial showed increased mortality)
- Symptomatic heart failure with reduced EF

## Comorbidities and Interactions

### Cardiovascular Disease

**Hypertension:**
- OSA contributes to 30-40% of hypertension cases
- Resistant HTN: >80% have OSA
- CPAP lowers BP by 2-5 mmHg on average
- Greater effect with good adherence (>4 hours/night)

**Atrial Fibrillation:**
- OSA prevalence ~50% in AF
- Recurrence after ablation/cardioversion higher with untreated OSA
- CPAP may reduce AF recurrence

**Heart Failure:**
- HFrEF: CSA-CSB prevalence 30-50%
- HFpEF: OSA more common
- PAP therapy improves LVEF and quality of life
- Optimize GDMT before adding ASV (with EF >45% consideration)

**Pulmonary Hypertension:**
- Group 3 PH from OSA usually mild
- CPAP can reduce pulmonary pressures
- Screen with echocardiogram if severe OSA or symptoms

### Metabolic Effects
- Insulin resistance independent of obesity
- OSA treatment improves glycemic control modestly
- NAFLD more common in OSA patients

### Neurocognitive Effects
- Executive dysfunction, attention problems
- Increased dementia risk
- CPAP may improve cognition, especially when adherent

## Treatment-Resistant OSA

**Definition:**
AHI ≥10 despite optimal PAP therapy

**Causes and Solutions:**
| Cause | Evaluation | Solution |
|-------|------------|----------|
| Poor adherence | Download data | Mask fit, humidity, education |
| Mouth leak | Observe | Chin strap, full face mask |
| Pressure insufficient | Repeat titration | Increase pressure, consider BiPAP |
| Persistent obstruction | DISE | Consider surgery or HNS |
| Central apneas | Check study | ASV (if EF >45%) |

## Special Populations

### Pregnancy
- Weight gain and hormones worsen OSA
- Screen with snoring, witnessed apneas, hypertension
- CPAP safe in pregnancy
- Untreated OSA associated with preeclampsia, gestational diabetes

### Pediatric OSA
- Tonsillar hypertrophy most common cause
- AD/HD-like symptoms common
- First-line: Adenotonsillectomy
- CPAP for refractory cases or complex children

### Post-Stroke
- OSA in 60-70% of stroke patients
- CSA-CSB in 10-20%
- CPAP associated with better recovery
- Early treatment may improve outcomes

### COPD-OSA Overlap Syndrome
- Combined OSA + COPD
- Severe hypoxemia, higher mortality
- Nocturnal hypoxemia more pronounced
- Aggressive treatment indicated`,
      keyTerms: [
        { term: 'DISE', definition: 'Drug-induced sleep endoscopy; evaluates airway collapse sites under sedation' },
        { term: 'treatment-emergent CSA', definition: 'Central apneas that develop when treating OSA with CPAP' },
        { term: 'overlap syndrome', definition: 'Coexistence of COPD and OSA; worse outcomes than either alone' },
        { term: 'GDMT', definition: 'Guideline-directed medical therapy; optimal heart failure medications' },
      ],
      clinicalNotes: 'For resistant hypertension, screen for OSA regardless of BMI. For AF patients undergoing ablation, treat OSA to reduce recurrence. SERVE-HF trial showed ASV increased mortality in HFrEF with CSA-CSB - avoid in LVEF ≤45%. PAP adherence >4 hours/night needed for cardiovascular benefit.',
    },
    5: {
      level: 5,
      summary: 'Contemporary sleep apnea care integrates precision phenotyping, novel therapeutics including hypoglossal nerve stimulation, personalized PAP algorithms, biomarker-guided risk stratification, and attention to cardiovascular, metabolic, and neurocognitive sequelae.',
      explanation: `## Advanced Pathophysiology

### Upper Airway Critical Closing Pressure (Pcrit)
**Concept:**
- Negative intraluminal pressure at which airway collapses
- More negative = more stable airway
- Measured during sleep study (research)
- Correlates with OSA severity

**Clinical Applications:**
- Predicts CPAP pressure required
- Guides surgical decision-making
- Higher Pcrit predicts surgical success

### Loop Gain and Ventilatory Control

**Components:**
- Controller gain: Ventilatory response to CO2
- Plant gain: Effect of ventilation on PaCO2
- Delay: Circulatory time between lungs and chemoreceptors

**High Loop Gain Manifestations:**
- Periodic breathing (Cheyne-Stokes)
- Treatment-emergent central apnea
- Complex sleep apnea
- Poorer CPAP response

**Therapeutic Implications:**
- ASV effective for high loop gain
- Acetazolamide may reduce loop gain
- Oxygen therapy stabilizes breathing pattern

### Arousal Threshold
**Definition:**
- Level of respiratory stimulus needed to cause cortical arousal

**Low Arousal Threshold:**
- Wakes easily from respiratory events
- Shorter events, more fragmentation
- May respond to sedatives (raises threshold)

**High Arousal Threshold:**
- Longer events, more severe desaturation
- More responsive to PAP therapy

## Novel Therapeutics

### Hypoglossal Nerve Stimulation
**Technology:**
- Implanted pulse generator (like pacemaker)
- Electrode to hypoglossal nerve (XII cranial nerve)
- Respiratory sensing lead
- Stimulates tongue protrusion during inspiration

**Evidence:**
- STAR trial: AHI reduced from 32 to 9 events/hour
- 70% achieved AHI <10, 40% achieved AHI <5
- Improvements in sleepiness and quality of life

**Patient Selection:**
- Moderate-severe OSA (AHI 15-65)
- CPAP failure or intolerance
- BMI <32-35 (most studied)
- <25% central events
- No complete concentric collapse on DISE

### Targeted Hypoglossal Neurostimulation
**Genio system:**
- Transoral stimulation device
- Less invasive than implanted system
- Limited availability

### Expiratory Positive Airway Pressure (EPAP) Valves
**Provent therapy:**
- Nasal valves creating expiratory resistance
- Generates pressure to maintain airway
- Limited efficacy (best for mild OSA)
- Poor long-term adherence

### Pharmacologic Therapies

**Current Options:**
- None FDA-approved specifically for OSA

**Investigational Agents:**
| Agent | Mechanism | Status |
|-------|-----------|--------|
| Solriamfetol | Dopamine-norepinephrine reuptake inhibitor | Approved for EDS (any cause) |
| Atomoxetine + Oxybutynin | Increase genioglossus activity + reduce arousal | Phase 2/3 |
| Desmethylazelastine | Serotonin antagonist | Phase 2 |
| Dronabinol | Cannabinoid | Mixed results |

### Positional Therapy Innovations
**Smart Devices:**
- Wearable sensors detecting position
- Vibration feedback to prevent supine position
- Objective adherence tracking
- Data integration with CPAP

## Cardiovascular Risk Reduction

### OSA as Cardiovascular Risk Factor
**Pathways:**
- Sympathetic overactivity
- Systemic inflammation (CRP, IL-6, TNF-α)
- Endothelial dysfunction
- Insulin resistance
- Intrathoracic pressure swings

### Blood Pressure Effects
**Magnitude:**
- 2-5 mmHg reduction with CPAP
- Greater reduction in resistant HTN (up to 7-10 mmHg)
- Effect requires >4 hours/night adherence
- Benefits seen within weeks

### Arrhythmia Management
**Atrial Fibrillation:**
- OSA treatment reduces recurrence after ablation
- Consider sleep study in all AF patients
- CPAP improves ablation success rates

### Heart Failure Integration
**HFrEF with CSA-CSB:**
- ASV contraindicated (SERVE-HF)
- Optimize GDMT
- Consider oxygen or acetazolamide
- Transvenous phrenic nerve stimulation (remestemcel) under study

## Precision Medicine Approaches

### Biomarker Development
**Potential Biomarkers:**
- MicroRNAs (miR-130a, miR-30a)
- Proteomic signatures
- Inflammatory markers
- Genetic risk scores

### Genomic Risk Factors
**Common Variants:**
- Multiple loci identified through GWAS
- PLEKHO1, GPR83 genes associated with OSA severity
- Overlap with genes for BMI, craniofacial structure

### Pharmacogenomics
**Opioid Sensitivity:**
- Genetic variants predict opioid-induced respiratory depression
- May identify high-risk patients for CSA

### AI and Machine Learning
**Applications:**
- Automated OSA screening from wearable data
- Prediction of PAP adherence
- Personalized pressure algorithms
- Home sleep apnea test interpretation

## Emerging Populations

### Women with OSA
- Underdiagnosed (different symptom presentation)
- Menopause transition increases risk
- Pregnancy complications when untreated
- May need different diagnostic thresholds

### Ethnic Considerations
- Asian populations develop OSA at lower BMI
- Different craniofacial anatomy
- May require adjusted screening criteria

### Bariatric Surgery Patients
- Significant weight loss reduces but doesn't eliminate OSA
- Many require ongoing PAP therapy
- Pre-operative sleep study recommended`,
      keyTerms: [
        { term: 'Pcrit', definition: 'Critical closing pressure; negative pressure at which airway collapses during sleep' },
        { term: 'controller gain', definition: 'Ventilatory system responsiveness to changes in CO2; component of loop gain' },
        { term: 'complete concentric collapse', definition: 'Airway collapses circumferentially on DISE; predicts poor response to HNS' },
        { term: 'EDS', definition: 'Excessive daytime sleepiness; primary symptom of OSA' },
      ],
      clinicalNotes: `Key clinical pearls for advanced sleep apnea management:

1. **HNS selection**: Ensure AHI 15-65, BMI <35, <25% central events, and no complete concentric collapse on DISE. Refer to experienced centers.

2. **ASV contraindication**: DO NOT use in LVEF ≤45% with CSA-CSB (SERVE-HR trial showed increased mortality). Consider in CSA with preserved EF.

3. **CPAP adherence**: Aim for >4 hours/night, >70% of nights. Remote monitoring enables early intervention for poor adherence.

4. **Cardiovascular risk**: OSA independently contributes to HTN, AF, CAD, and stroke. Aggressive treatment indicated with comorbid CVD.

5. **Resistant hypertension**: Screen all patients with OSA regardless of BMI. Up to 80% of resistant HTN patients have OSA.

6. **Treatment-emergent CSA**: Usually resolves within 3 months of continued CPAP. Don't rush to ASV unless persistent and symptomatic.

7. **Pregnancy**: Low threshold for testing. Untreated OSA associated with preeclampsia, gestational diabetes, and poor fetal outcomes.

8. **Post-op AF**: Sleep study indicated after AF ablation. Untreated OSA increases recurrence risk.

9. **Overlap syndrome**: COPD + OSA = higher mortality. Aggressive treatment with nocturnal oxygen + PAP indicated.

10. **Future directions**: Solriamfetol approved for EDS (any cause). Combination pharmacotherapy (atomoxetine + oxybutynin) shows promise in clinical trials.`,
    },
  },

  media: [
    {
      id: 'osa-pathophysiology',
      type: 'diagram',
      filename: 'osa-pathophysiology.svg',
      title: 'OSA Pathophysiology',
      description: 'Mechanism of upper airway collapse in obstructive sleep apnea',
    },
    {
      id: 'hypopnea-vs-apnea',
      type: 'diagram',
      filename: 'hypopnea-apnea-comparison.svg',
      title: 'Apnea vs Hypopnea',
      description: 'Comparison of complete vs partial breathing events during sleep',
    },
    {
      id: 'ahi-classification',
      type: 'diagram',
      filename: 'ahi-severity-chart.svg',
      title: 'AHI Severity Classification',
      description: 'Severity categories based on apnea-hypopnea index',
    },
  ],

  citations: [
    {
      id: 'aasm-aasm-2023',
      type: 'website',
      title: 'International Classification of Sleep Disorders',
      source: 'American Academy of Sleep Medicine',
      url: 'https://aasm.org',
    },
    {
      id: 'aasm-cpap-2019',
      type: 'article',
      title: 'Clinical Practice Guideline for Sleep Apnea',
      authors: ['Kushida CA', 'Nicholas DA', 'Malhotra A', 'et al.'],
      source: 'Journal of Clinical Sleep Medicine',
      url: 'https://doi.org/10.5664/jcsm.7690',
    },
    {
      id: 'serve-hf-trial',
      type: 'article',
      title: 'Adaptive Servo-Ventilation for Central Sleep Apnea in Heart Failure',
      authors: ['Cowie MR', 'Woehrle H', 'Wegscheider K', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1406659',
    },
    {
      id: 'star-trial',
      type: 'article',
      title: 'Upper Airway Stimulation for Obstructive Sleep Apnea',
      authors: ['Strollo PJ', 'Soose RJ', 'Maurer JT', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1308655',
    },
  ],

  crossReferences: [
    { targetId: 'condition-hypertension', targetType: 'condition', relationship: 'related', label: 'Hypertension' },
    { targetId: 'condition-atrial-fibrillation', targetType: 'condition', relationship: 'related', label: 'Atrial Fibrillation' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
    { targetId: 'condition-stroke', targetType: 'condition', relationship: 'related', label: 'Stroke' },
  ],

  tags: {
    systems: ['respiratory', 'nervous', 'cardiovascular'],
    topics: ['pulmonology', 'sleep medicine', 'neurology', 'cardiology'],
    keywords: ['sleep apnea', 'OSA', 'CSA', 'CPAP', 'snoring', 'hypersomnia', 'polysomnography'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'neurology'],
    },
  },

  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sleepApnea;
