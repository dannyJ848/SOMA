/**
 * Sleep Apnea - Comprehensive Educational Content
 *
 * Covers obstructive sleep apnea pathophysiology, diagnosis, and management.
 */

import { EducationalContent } from '../../../types';

export const sleepApnea: EducationalContent = {
  id: 'ent-sleep-apnea',
  type: 'condition',
  name: 'Obstructive Sleep Apnea',
  alternateNames: ['OSA', 'Sleep-Disordered Breathing', 'Sleep Apnea Syndrome'],

  levels: {
    1: {
      level: 1,
      summary: 'Sleep apnea is when you stop breathing for short periods while you sleep, usually because your throat closes up, causing snoring and tiredness during the day.',
      explanation: `When you sleep, your muscles relax, including the ones in your throat. In some people, this causes the throat to close up and block breathing.

**What Happens in Sleep Apnea:**
1. You fall asleep and your throat muscles relax
2. Your throat closes and you stop breathing
3. Your brain notices and wakes you up just enough to breathe
4. This happens over and over all night
5. You never get good, deep sleep

**Warning Signs:**
- Very loud snoring
- Gasping or choking sounds during sleep
- Waking up with a headache
- Feeling very tired during the day, even after sleeping all night
- Trouble paying attention
- Falling asleep during the day

**Why It Matters:**
- Your body needs good sleep to work well
- Sleep apnea can make your heart work harder
- It can make you tired and grumpy
- It can be dangerous if you fall asleep driving

**Getting Help:**
If someone in your family snores loudly and seems tired all the time, they should see a doctor. Sleep apnea can be treated!

**Treatment:**
- Losing weight if overweight
- Wearing a special mask at night (CPAP) that keeps your airway open
- Sometimes surgery can help`,
      keyTerms: [
        { term: 'sleep apnea', definition: 'When you stop breathing for short periods during sleep' },
        { term: 'snoring', definition: 'The loud breathing sound made when the throat partially closes during sleep' },
        { term: 'CPAP', definition: 'A machine with a mask that blows air to keep your airway open while sleeping' },
        { term: 'airway', definition: 'The path air takes from your nose and mouth to your lungs' },
      ],
      analogies: [
        'Your throat in sleep apnea is like a floppy straw - when you try to suck through it, it collapses shut.',
        'CPAP is like a fan that keeps a tent inflated - it blows air to keep your throat open.',
      ],
      examples: [
        'Someone with sleep apnea might stop breathing 30 times every hour while they sleep without knowing it.',
        'A parent who falls asleep watching TV every night might have sleep apnea making them extra tired.',
      ],
    },
    2: {
      level: 2,
      summary: 'Obstructive sleep apnea (OSA) occurs when the upper airway repeatedly collapses during sleep, causing oxygen desaturation, sleep fragmentation, and cardiovascular stress.',
      explanation: `OSA is very common, affecting about 25% of men and 10% of women, though many are undiagnosed.

**Types of Sleep Apnea:**
- **Obstructive (OSA):** Airway physically blocked (most common)
- **Central:** Brain does not signal breathing
- **Mixed/Complex:** Combination of both

**Anatomy of Obstruction:**
Airway can collapse at multiple levels:
- Nose: Deviated septum, turbinate hypertrophy
- Palate: Long soft palate, large uvula
- Tonsils: Enlarged palatine or lingual tonsils
- Tongue: Large tongue (macroglossia)
- Epiglottis: Floppy epiglottis

**Risk Factors:**
- Obesity (strongest risk factor)
- Male sex
- Age (increases with age)
- Family history
- Alcohol use
- Sedatives
- Smoking
- Craniofacial abnormalities

**Symptoms:**
*Nighttime:*
- Loud snoring with gasping
- Witnessed apneas
- Choking awakenings
- Nocturia (frequent urination)

*Daytime:*
- Excessive sleepiness (Epworth Sleepiness Scale)
- Morning headaches
- Concentration problems
- Irritability
- Depression

**Consequences if Untreated:**
- Hypertension
- Heart disease and stroke
- Type 2 diabetes
- Motor vehicle accidents
- Decreased quality of life

**Diagnosis:**
- **Polysomnography (PSG):** Overnight sleep study in a lab
- **Home Sleep Test (HST):** Simplified testing at home
- **Apnea-Hypopnea Index (AHI):** Number of events per hour
  - Normal: <5
  - Mild: 5-14
  - Moderate: 15-29
  - Severe: 30+

**Treatment:**
1. **Lifestyle:** Weight loss, avoid alcohol/sedatives, positional therapy
2. **CPAP:** Continuous positive airway pressure (gold standard)
3. **Oral Appliances:** Mandibular advancement devices
4. **Surgery:** Uvulopalatopharyngoplasty (UPPP), tonsillectomy, nasal surgery`,
      keyTerms: [
        { term: 'obstructive sleep apnea', definition: 'Sleep disorder where the upper airway repeatedly collapses during sleep' },
        { term: 'apnea-hypopnea index', definition: 'Number of breathing pauses (apneas) and partial pauses (hypopneas) per hour of sleep', pronunciation: 'AHI' },
        { term: 'polysomnography', definition: 'Comprehensive overnight sleep study measuring breathing, brain waves, oxygen, and more' },
        { term: 'CPAP', definition: 'Continuous positive airway pressure; machine delivering pressurized air via mask to keep airway open' },
        { term: 'Epworth Sleepiness Scale', definition: 'Questionnaire measuring daytime sleepiness, score >10 suggests excessive sleepiness' },
      ],
      analogies: [
        'The airway in OSA is like a garden hose being stepped on - it gets blocked, then opens, then gets blocked again.',
        'CPAP works like air inflation in a bouncy castle - constant pressure keeps the walls from collapsing.',
      ],
    },
    3: {
      level: 3,
      summary: 'OSA pathophysiology involves upper airway collapsibility, arousal threshold abnormalities, loop gain instability, and inadequate muscle responsiveness, with treatment selection based on phenotyping and anatomical assessment.',
      explanation: `Understanding OSA mechanisms enables targeted treatment selection.

**Pathophysiological Traits (PALM Model):**

1. **P - Pharyngeal Critical Closing Pressure (Pcrit):**
   - Pressure at which airway collapses
   - Anatomical factor
   - Influences CPAP requirement

2. **A - Arousal Threshold:**
   - How easily the brain wakes up
   - Low threshold = frequent arousals, fragmented sleep
   - High threshold = prolonged apneas, severe desaturation

3. **L - Loop Gain:**
   - Ventilatory control system sensitivity
   - High loop gain = unstable breathing, central events
   - Contributes to complex apnea

4. **M - Muscle Responsiveness:**
   - Ability of genioglossus and other dilators to compensate
   - May be trainable

**Anatomy Assessment:**

*Muller Maneuver:*
- Flexible scope during forced inspiration against closed nose/mouth
- Identifies level(s) of collapse
- Palate, lateral walls, tongue base, epiglottis

*Drug-Induced Sleep Endoscopy (DISE):*
- Endoscopy during propofol sedation
- More physiologic than awake maneuvers
- Guides surgical planning

*Cephalometric Analysis:*
- Lateral X-ray measurements
- PAS (posterior airway space)
- Mandibular-hyoid distance

**CPAP Therapy:**

*Mechanism:*
- Pneumatic splint for upper airway
- Pressure determined by titration study
- Auto-CPAP adjusts to need

*Adherence Challenges:*
- 50% adherence at 1 year
- Mask discomfort, claustrophobia
- Interventions: Education, mask fitting, humidification

**Oral Appliance Therapy (OAT):**

*Mandibular Advancement Device (MAD):*
- Protrudes lower jaw forward
- Increases posterior airway space
- Best for mild-moderate OSA
- Custom-fitted by dentist

*Indications:*
- CPAP intolerance
- Mild-moderate OSA
- Preference

**Surgical Options:**

*Soft Tissue:*
- Uvulopalatopharyngoplasty (UPPP): Palate, uvula, tonsils
- Tonsillectomy (children: first-line)
- Tongue base reduction
- Epiglottopexy

*Skeletal:*
- Maxillomandibular advancement (MMA): Most effective
- Genioglossus advancement
- Hyoid suspension

*Hypoglossal Nerve Stimulation:*
- Inspire device (FDA approved)
- Implanted pulse generator
- Senses breathing, stimulates tongue protrusion
- Criteria: Moderate-severe OSA, CPAP failure, BMI <35, no concentric palatal collapse

**Special Populations:**

*Pregnancy:*
- OSA increases preeclampsia, gestational diabetes risk
- CPAP is safe
- Positional therapy (left lateral decubitus)

*Children:*
- Adenotonsillectomy is first-line
- Different AHI thresholds (AHI ≥1 abnormal)
- PSG recommended before surgery

*Heart Failure:*
- Central apnea common (Cheyne-Stokes)
- OSA worsens heart failure
- Treat OSA, optimize cardiac therapy`,
      keyTerms: [
        { term: 'Pcrit', definition: 'Critical closing pressure; the airway pressure at which the pharynx collapses' },
        { term: 'loop gain', definition: 'Sensitivity of ventilatory control system; high loop gain causes breathing instability' },
        { term: 'DISE', definition: 'Drug-induced sleep endoscopy; sedated airway evaluation for surgical planning' },
        { term: 'hypoglossal nerve stimulation', definition: 'Implanted device that stimulates tongue muscles during inspiration to maintain airway patency' },
        { term: 'maxillomandibular advancement', definition: 'Surgical advancement of upper and lower jaws to enlarge airway; most effective OSA surgery' },
      ],
      clinicalNotes: 'Home sleep testing is appropriate for high pretest probability OSA without significant comorbidities. Polysomnography is required for complex presentations, central apnea, or comorbid conditions. Post-treatment PSG is not routinely required if symptoms resolve on CPAP.',
    },
    4: {
      level: 4,
      summary: 'Advanced OSA management integrates phenotyping based on pathophysiological traits, precision CPAP algorithms, multilevel surgical planning, and understanding of cardiometabolic consequences.',
      explanation: `Contemporary OSA care moves toward precision medicine and personalized treatment selection.

**Phenotyping for Treatment Selection:**

*Anatomical Dominant:*
- High Pcrit
- Benefits from: Surgery, OAT, CPAP

*Low Arousal Threshold:*
- Wakes up before muscles can compensate
- Benefits from: Sedatives (investigational), possibly lower CPAP pressures

*High Loop Gain:*
- Unstable ventilatory control
- Complex/central apneas on CPAP
- Benefits from: Oxygen, acetazolamide (investigational), adaptive servo-ventilation (not in heart failure)

*Poor Muscle Responsiveness:*
- Genioglossus doesn't activate
- Benefits from: Hypoglossal nerve stimulation, myofunctional therapy

**Cardiovascular Consequences:**

*Mechanisms:*
- Intermittent hypoxia → oxidative stress
- Intrathoracic pressure swings → cardiac stress
- Sympathetic activation
- Endothelial dysfunction
- Systemic inflammation

*Associations:*
- Hypertension (50% of resistant HTN have OSA)
- Atrial fibrillation (recurrence after ablation)
- Heart failure
- Stroke
- Coronary artery disease

*Impact of Treatment:*
- CPAP reduces blood pressure 2-3 mmHg
- Cardiovascular mortality benefit uncertain (SAVE trial negative)
- Improved quality of life consistent

**Metabolic Consequences:**

*Insulin Resistance:*
- Intermittent hypoxia impairs glucose metabolism
- Independent of obesity
- CPAP may modestly improve HbA1c

*NAFLD Association:*
- OSA worsens hepatic steatosis
- Hypoxia drives fibrosis

**Advanced CPAP Technology:**

*Auto-CPAP (APAP):*
- Algorithm adjusts pressure breath-by-breath
- Detects flow limitation, apnea, snoring
- May improve adherence vs. fixed pressure

*Adaptive Servo-Ventilation (ASV):*
- Variable pressure support
- For central/complex apnea
- Contraindicated in HFrEF (increased mortality)

*Telemonitoring:*
- Cloud-based adherence data
- Enables early intervention
- Improves adherence rates

**Multilevel Surgical Approach:**

*Sleep Surgery Staging:*
- Identify all obstruction levels (DISE)
- Address in staged or single procedure
- Combine procedures based on phenotype

*Common Combinations:*
- Nasal surgery + palate
- Palate + tongue base
- MMA (addresses all levels)

*Expansion Sphincter Pharyngoplasty:*
- Lateral pharyngeal wall collapse addressed
- Rotation flaps
- Better than UPPP for lateral collapse

**Drug Therapy (Emerging):**

*Pharmacological Targets:*
- Noradrenergic (increase muscle tone)
- Antimuscarinic (reduce REM atonia)
- Carbonic anhydrase inhibitors (reduce loop gain)

*Combination Therapy:*
- Atomoxetine + oxybutynin: Reduces AHI 50% in trials
- Not yet standard of care
- May benefit non-anatomical phenotypes

**Positional Therapy:**

*Indication:*
- Supine-predominant OSA (AHI supine >> non-supine)

*Devices:*
- Positional pillows
- Tennis ball technique
- Vibrating position trainers

*Efficacy:*
- Reduces AHI in selected patients
- Adherence variable`,
      keyTerms: [
        { term: 'adaptive servo-ventilation', definition: 'Positive pressure device that varies support breath-by-breath, for central/complex apnea' },
        { term: 'expansion sphincter pharyngoplasty', definition: 'Surgical technique rotating palatopharyngeus muscle to reduce lateral wall collapse' },
        { term: 'SAVE trial', definition: 'Large RCT showing CPAP did not reduce cardiovascular events in OSA with existing CVD' },
        { term: 'supine-predominant OSA', definition: 'OSA significantly worse when sleeping on back, amenable to positional therapy' },
        { term: 'atomoxetine-oxybutynin', definition: 'Drug combination targeting non-anatomical OSA traits, reduces AHI in trials' },
      ],
      clinicalNotes: 'ASV is contraindicated in HFrEF (EF <45%) due to increased mortality. CPAP benefit for cardiovascular events is uncertain, but quality of life, sleepiness, and blood pressure improve. Adherence intervention should be proactive, not reactive.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge OSA management encompasses precision phenotyping, endotype-based drug development, advanced hypoglossal nerve stimulation algorithms, biomarker discovery, and systems-based approaches to adherence and population health.',
      explanation: `State-of-the-art OSA research addresses mechanisms, therapeutics, and implementation science.

**Precision Phenotyping:**

*Physiological Trait Assessment:*
- Polysomnography-derived endotyping
- Pcrit, arousal threshold, loop gain, muscle responsiveness
- Algorithms to estimate from routine PSG
- Guides treatment selection

*Cluster Analysis:*
- Data-driven patient subtypes
- Symptom clusters (sleepy, minimally symptomatic, insomnia-predominant)
- Different outcomes and treatment responses

*Biomarkers:*
- Inflammatory (CRP, IL-6)
- Oxidative stress markers
- Exosomal microRNA
- Research stage, not clinical practice

**Pharmacotherapy Development:**

*Mechanism-Based Targets:*

| Trait | Drug | Mechanism |
|-------|------|-----------|
| Muscle responsiveness | Desipramine | Norepinephrine reuptake inhibition |
| REM atonia | Oxybutynin | Antimuscarinic |
| Loop gain | Acetazolamide | Carbonic anhydrase inhibitor |
| Arousal threshold | Trazodone | Serotonergic |
| Combination | Atomoxetine + oxybutynin | Multi-target |

*Current Status:*
- No FDA-approved medications for OSA
- Phase III trials in progress
- Likely role: Non-anatomical phenotypes, CPAP-intolerant

**Advanced Neuromodulation:**

*Hypoglossal Nerve Stimulation (HNS):*
- Inspire (FDA approved), others in development
- Sensing lead detects inspiration
- Stimulates hypoglossal nerve → tongue protrusion
- Selection criteria: BMI <35 (expanding), no concentric palatal collapse
- Outcomes: ~70% responders (AHI reduction >50% to <20)

*Targeting Improvement:*
- Selective nerve branch stimulation
- Bilateral stimulation
- Tongue muscle functional MRI guidance

*Emerging Devices:*
- Transcutaneous stimulation (non-implanted)
- Phrenic nerve stimulation for central apnea
- Ansa cervicalis stimulation

**Sleep Surgery Advances:**

*Robotic-Assisted Surgery:*
- Tongue base reduction with improved access
- Transoral robotic surgery (TORS)

*Minimally Invasive Palate Procedures:*
- Implants (Pillar procedure)
- Radiofrequency ablation
- Lateral pharyngoplasty techniques

*Maxillomandibular Advancement Refinements:*
- Virtual surgical planning (3D)
- Custom plates and splints
- Improved cosmetic outcomes

**Population Health Approaches:**

*Screening:*
- STOP-BANG questionnaire in preoperative clinic
- Sleepiness screening in primary care
- Occupational screening (truck drivers, pilots)

*Health System Integration:*
- Sleep medicine integration with cardiology, endocrinology
- Care pathways for newly diagnosed OSA
- Telehealth follow-up for CPAP adherence

*Implementation Science:*
- Barriers to CPAP adherence (patient, provider, system)
- Motivational interviewing
- Peer support programs
- Health coaching

**Special Clinical Scenarios:**

*Overlap Syndrome (OSA + COPD):*
- Worse hypoxemia than either alone
- CPAP or BiPAP
- Oxygen may be needed

*OSA and Opioid Use:*
- Opioids increase central apneas
- Lower arousal threshold
- Higher CPAP pressures needed
- Consider ASV if central component (if not heart failure)

*Obesity Hypoventilation Syndrome:*
- BMI >30 with daytime hypercapnia
- Overlaps with severe OSA
- May require BiPAP with backup rate

*Post-Stroke:*
- High prevalence of OSA
- May impair recovery
- CPAP adherence challenging

**Future Directions:**

*Artificial Intelligence:*
- Automated PSG scoring
- Prediction of CPAP response
- Mask selection optimization

*Genomics:*
- Genetic risk scores for OSA
- Pharmacogenomics for drug selection

*Personalized Combination Therapy:*
- CPAP + medication
- Surgery + medication
- OAT + positional therapy`,
      keyTerms: [
        { term: 'STOP-BANG', definition: 'Screening questionnaire for OSA risk (Snoring, Tired, Observed, Pressure, BMI, Age, Neck, Gender)' },
        { term: 'overlap syndrome', definition: 'Coexistence of OSA and COPD with additive nocturnal hypoxemia' },
        { term: 'obesity hypoventilation syndrome', definition: 'Obesity with daytime hypercapnia, often with severe OSA component' },
        { term: 'endotype', definition: 'Pathophysiological subtype of OSA based on underlying mechanism' },
        { term: 'virtual surgical planning', definition: '3D computer-assisted planning for skeletal surgery with custom implants' },
      ],
      clinicalNotes: `**Clinical Pearls:**
1. AHI alone is insufficient - symptom burden and endotype matter for treatment selection
2. Hypoglossal nerve stimulation: Perform DISE to rule out concentric collapse (contraindication)
3. CPAP failure: Assess adherence data, mask fit, pressure adequacy before abandoning
4. Overlap syndrome (OSA + COPD): Often needs higher pressure or BiPAP; oxygen alone insufficient
5. Perioperative OSA: STOP-BANG ≥5 or known untreated OSA increases anesthesia risk
6. Drug therapy: Not yet standard but promising for non-anatomical phenotypes
7. Telehealth: Remote CPAP monitoring with early intervention improves adherence`,
    },
  },

  media: [
    {
      id: 'osa-pathophysiology',
      type: 'diagram',
      filename: 'osa-pathophysiology.svg',
      title: 'OSA Pathophysiology',
      description: 'Airway obstruction mechanism during sleep',
    },
    {
      id: 'cpap-mechanism',
      type: 'diagram',
      filename: 'cpap-mechanism.svg',
      title: 'CPAP Therapy',
      description: 'Continuous positive airway pressure maintaining airway patency',
    },
    {
      id: 'surgical-options',
      type: 'diagram',
      filename: 'osa-surgical-options.svg',
      title: 'Surgical Options for OSA',
      description: 'Overview of soft tissue and skeletal surgeries for OSA',
    },
  ],

  citations: [
    {
      id: 'aasm-guidelines',
      type: 'article',
      title: 'Clinical Practice Guideline for the Treatment of OSA',
      source: 'Journal of Clinical Sleep Medicine',
      authors: ['American Academy of Sleep Medicine'],
    },
    {
      id: 'jordan-lancet',
      type: 'article',
      title: 'Obstructive Sleep Apnoea',
      authors: ['Jordan AS', 'McSharry DG', 'Malhotra A'],
      source: 'The Lancet',
    },
  ],

  crossReferences: [
    { targetId: 'ent-tonsillitis-adenoids', targetType: 'condition', relationship: 'related', label: 'Tonsillitis and Adenoids' },
    { targetId: 'ent-nose-sinus-anatomy', targetType: 'structure', relationship: 'related', label: 'Nose Anatomy' },
    { targetId: 'system-respiratory', targetType: 'system', relationship: 'parent', label: 'Respiratory System' },
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'related', label: 'Cardiovascular System' },
  ],

  tags: {
    systems: ['respiratory', 'cardiovascular', 'nervous'],
    topics: ['sleep-medicine', 'otolaryngology', 'pulmonology'],
    keywords: ['sleep apnea', 'OSA', 'CPAP', 'snoring', 'hypoglossal', 'polysomnography'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sleepApnea;
