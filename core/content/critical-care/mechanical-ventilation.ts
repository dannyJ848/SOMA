/**
 * Mechanical Ventilation - Educational Content
 *
 * Comprehensive guide to understanding mechanical ventilation,
 * from basic concepts to advanced ventilator management.
 */

import { EducationalContent } from '../types';

export const mechanicalVentilation: EducationalContent = {
  id: 'critical-care-mechanical-ventilation',
  type: 'concept',
  name: 'Mechanical Ventilation',
  alternateNames: ['Breathing Machine', 'Ventilator Support', 'Life Support Ventilation'],

  levels: {
    1: {
      level: 1,
      summary: 'A ventilator is a machine that helps patients breathe when their lungs cannot work well enough on their own.',
      explanation: `## What is a Ventilator?

A ventilator (sometimes called a "breathing machine") is a machine that pushes air into your lungs when you cannot breathe well enough on your own. It helps keep oxygen coming in and carbon dioxide going out.

**Why might someone need a ventilator?**
- Their lungs are too sick to breathe on their own (like with severe pneumonia)
- They had surgery and are still asleep from anesthesia
- An injury or illness makes their breathing muscles too weak
- They are in a coma and cannot control their breathing

## How Does it Work?

**The breathing tube**
Most people on a ventilator have a tube that goes through their mouth and into their windpipe (trachea). This is called an endotracheal tube or "ET tube."
- The tube is connected to the ventilator machine
- It delivers air directly into the lungs
- Patients cannot talk with this tube in place
- It may feel uncomfortable, so medicine helps keep patients calm

**What the machine does**
- Pushes air (with extra oxygen if needed) into the lungs
- Controls how fast breaths happen
- Controls how big each breath is
- Monitors how well breathing is going
- Has alarms to alert nurses if something changes

## What to Expect

**If your loved one is on a ventilator:**
- They will have a tube in their mouth
- They cannot eat or drink by mouth
- They cannot talk (communication may use writing, blinking, or nodding)
- They may be given medicine to help them stay calm and comfortable
- Nurses will suction the tube to remove mucus
- The goal is usually to get off the ventilator as soon as safely possible

**Good signs of improvement:**
- Needing less oxygen
- Breathing more on their own
- Being more awake and alert
- Passing "breathing tests" to see if ready to come off

**The breathing test**
Before removing the ventilator, doctors do a test where the machine gives less help to see if the patient can breathe on their own. If they pass, the tube can be removed (called extubation).`,
      keyTerms: [
        { term: 'ventilator', definition: 'A machine that helps push air into the lungs for people who cannot breathe well enough on their own' },
        { term: 'endotracheal tube', definition: 'A breathing tube placed through the mouth into the windpipe', pronunciation: 'EN-doh-TRAY-kee-al' },
        { term: 'extubation', definition: 'The process of removing the breathing tube when a patient is ready to breathe on their own', pronunciation: 'EKS-too-BAY-shun' },
        { term: 'oxygen', definition: 'The gas in air that our bodies need to survive' },
      ],
      analogies: [
        'A ventilator is like a helper that takes over the job of breathing when your lungs are too tired or sick to do it alone.',
        'The breathing tube is like a snorkel that goes directly into your airway so the machine can blow air into your lungs.',
        'Getting off the ventilator is like taking off training wheels - first you practice with some help, then you try on your own.',
      ],
      examples: [
        'After a car accident, someone might need a ventilator while their body heals because they are unconscious.',
        'A person with severe COVID-19 pneumonia might need a ventilator because their lungs are too inflamed to get enough oxygen.',
      ],
    },

    2: {
      level: 2,
      summary: 'Mechanical ventilation uses a machine to deliver controlled breaths through an endotracheal tube, providing respiratory support while managing oxygen levels, breathing rate, and lung pressures.',
      explanation: `## Understanding Mechanical Ventilation

Mechanical ventilation provides life-saving respiratory support when the lungs or respiratory muscles cannot maintain adequate gas exchange. The ventilator takes over part or all of the work of breathing.

### Why Patients Need Ventilation

**Respiratory Failure**
- Type 1 (Hypoxemic): Low oxygen despite breathing (pneumonia, ARDS)
- Type 2 (Hypercapnic): Cannot remove carbon dioxide (COPD, muscle weakness)
- Combined: Both oxygen and CO2 problems

**Other Indications**
- Airway protection (unconscious, heavy sedation)
- Post-operative support
- Shock (reduces oxygen demand of breathing muscles)
- Neurological conditions affecting breathing

### Types of Ventilator Support

**Invasive Ventilation**
Uses an endotracheal tube (through mouth) or tracheostomy (through neck)
- Most reliable form of support
- Required for severe respiratory failure
- Allows complete control of breathing

**Non-Invasive Ventilation (NIV)**
Uses a tight-fitting face mask (BiPAP, CPAP)
- No tube in airway
- Patient must be awake and cooperative
- Good for COPD flares, heart failure, sleep apnea
- May avoid need for intubation

### Basic Ventilator Settings

| Setting | What It Controls | Typical Values |
|---------|------------------|----------------|
| Tidal Volume (VT) | Size of each breath | 6-8 mL/kg ideal body weight |
| Respiratory Rate (RR) | Breaths per minute | 12-20 breaths/min |
| FiO2 | Percentage of oxygen | 21% (room air) to 100% |
| PEEP | Pressure keeping lungs open | 5-15 cmH2O |

### Ventilator Modes

**Volume Control**
- Machine delivers a set volume of air
- Pressure varies depending on lung stiffness
- Guarantees tidal volume

**Pressure Control**
- Machine delivers air to reach a set pressure
- Volume varies depending on lung compliance
- Limits pressure to protect lungs

**Pressure Support**
- Patient triggers breaths
- Machine adds pressure to make breathing easier
- Used for weaning off the ventilator

### Monitoring on the Ventilator

**Key Values Watched**
- Oxygen saturation (SpO2): Target usually 92-96%
- Peak pressure: How much pressure to deliver breath
- Plateau pressure: Pressure in lungs at rest
- Minute ventilation: Total air moved per minute

**Blood Gas Analysis**
- PaO2: Oxygen level in blood
- PaCO2: Carbon dioxide level in blood
- pH: Acid-base balance

### Weaning from the Ventilator

**Readiness Criteria**
- Underlying condition improved
- Adequate oxygenation on low settings
- Can breathe on their own
- Awake and follows commands
- Cough strong enough to clear secretions

**Weaning Trial**
- Spontaneous Breathing Trial (SBT)
- Minimal ventilator support for 30-120 minutes
- If tolerated, proceed to extubation
- Signs of failure: fast breathing, distress, low oxygen`,
      keyTerms: [
        { term: 'tidal volume', definition: 'The amount of air delivered with each breath from the ventilator' },
        { term: 'PEEP', definition: 'Positive End-Expiratory Pressure - pressure maintained in lungs to keep air sacs open', pronunciation: 'peep' },
        { term: 'FiO2', definition: 'Fraction of Inspired Oxygen - the percentage of oxygen in delivered air' },
        { term: 'weaning', definition: 'The process of gradually reducing ventilator support as the patient gets stronger' },
        { term: 'spontaneous breathing trial', definition: 'A test where the patient breathes with minimal machine help to see if ready for extubation' },
        { term: 'tracheostomy', definition: 'A surgical opening in the neck with a tube placed directly into the windpipe', pronunciation: 'tray-kee-OS-toh-mee' },
      ],
      analogies: [
        'PEEP is like keeping a balloon slightly inflated so it is easier to blow up - it keeps the air sacs from collapsing completely.',
        'Weaning from a ventilator is like learning to swim - first you have full support, then you gradually let go until the patient swims alone.',
      ],
      clinicalNotes: 'Non-invasive ventilation should be tried first in appropriate patients (COPD exacerbation, cardiogenic pulmonary edema) as it avoids intubation risks. Daily spontaneous breathing trials reduce ventilator days.',
    },

    3: {
      level: 3,
      summary: 'Mechanical ventilation encompasses multiple modes delivering volume or pressure-targeted breaths, with settings optimized to balance oxygenation, ventilation, and lung protection while planning systematic weaning.',
      explanation: `## Physiology of Mechanical Ventilation

### Respiratory Mechanics

**Normal Breathing (Negative Pressure)**
- Diaphragm contracts, creating negative pleural pressure
- Air flows into lungs passively
- Venous return enhanced during inspiration

**Positive Pressure Ventilation**
- Ventilator creates positive pressure to push air in
- Reverses normal physiology
- Can impair venous return and cardiac output
- May cause barotrauma if pressures excessive

### Key Equations

**Compliance** = ΔVolume / ΔPressure
- Normal: 50-100 mL/cmH2O
- Decreased in ARDS, pulmonary fibrosis, edema

**Resistance** = ΔPressure / Flow
- Increased in asthma, COPD, bronchospasm

**Driving Pressure** = Plateau Pressure - PEEP
- Reflects stress on lung parenchyma
- Target <15 cmH2O in ARDS

## Ventilator Modes in Detail

### Volume-Controlled Ventilation (VCV)

**Settings**
- Tidal volume: 6-8 mL/kg IBW
- Respiratory rate: 12-20/min
- Flow rate: 40-60 L/min
- Flow pattern: Square or decelerating

**Characteristics**
- Guaranteed volume delivery
- Pressure varies with compliance/resistance
- Risk of high pressures if compliance decreases

### Pressure-Controlled Ventilation (PCV)

**Settings**
- Inspiratory pressure: 10-25 cmH2O above PEEP
- Respiratory rate: 12-20/min
- Inspiratory time: 0.8-1.2 seconds

**Characteristics**
- Pressure-limited (lung protective)
- Volume varies with compliance
- More comfortable for some patients

### Pressure Support Ventilation (PSV)

- Patient triggers all breaths
- Machine provides set pressure boost
- Patient controls rate, timing, volume
- Used for weaning and awake patients

### Synchronized Intermittent Mandatory Ventilation (SIMV)

- Set number of mandatory breaths
- Patient can breathe spontaneously between
- Mandatory breaths synchronized to patient effort
- Historical mode, less commonly used now

### Advanced Modes

**APRV (Airway Pressure Release Ventilation)**
- High CPAP with brief releases
- Promotes spontaneous breathing
- May improve oxygenation in ARDS

**HFOV (High-Frequency Oscillatory Ventilation)**
- Very small tidal volumes at high rates (300-900/min)
- Used in refractory hypoxemia
- Evidence mixed in adults

## Lung-Protective Ventilation

### ARDS Network Protocol

**Background**: ARDSNet trial (2000) demonstrated mortality reduction with low tidal volume ventilation.

**Core Principles**
| Parameter | Target |
|-----------|--------|
| Tidal volume | 6 mL/kg IBW (range 4-8) |
| Plateau pressure | ≤30 cmH2O |
| PEEP | Titrated per PEEP-FiO2 table |
| pH goal | 7.30-7.45 |

**PEEP-FiO2 Ladder**
Higher PEEP used with higher oxygen requirements to keep alveoli open and reduce FiO2.

### Permissive Hypercapnia
- Allow CO2 to rise to protect lungs
- Accept pH down to 7.20-7.25
- Contraindicated in elevated ICP

### Prone Positioning
- PROSEVA trial: Reduced mortality in severe ARDS
- Indications: P/F ratio <150 on FiO2 ≥0.6
- Duration: 16+ hours per session
- Mechanism: Improves V/Q matching, reduces atelectasis

## Weaning and Liberation

### Daily Assessment

**Spontaneous Awakening Trial (SAT)**
- Stop sedation daily
- Assess for readiness to wean

**Spontaneous Breathing Trial (SBT)**
- Criteria: FiO2 ≤40%, PEEP ≤8, hemodynamically stable, follows commands
- Methods: T-piece, PSV 5-8 cmH2O, or CPAP
- Duration: 30-120 minutes
- Pass: RR <35, SpO2 ≥90%, no distress, stable HR/BP

### Weaning Failure Causes

**Respiratory**
- Inadequate resolution of lung disease
- Secretions, bronchospasm
- Respiratory muscle weakness

**Cardiac**
- Heart failure exacerbation with increased work of breathing
- Fluid overload

**Neurological**
- Delirium
- Excessive sedation
- Critical illness polyneuropathy

### Tracheostomy Considerations
- Usually after 10-14 days of intubation expected
- Benefits: Comfort, mobility, easier weaning
- Does not reduce mortality but improves quality of life`,
      keyTerms: [
        { term: 'driving pressure', definition: 'Plateau pressure minus PEEP; represents pressure distending the alveoli' },
        { term: 'IBW', definition: 'Ideal Body Weight - used for calculating lung-protective tidal volumes based on height' },
        { term: 'APRV', definition: 'Airway Pressure Release Ventilation - mode using high continuous pressure with brief releases' },
        { term: 'prone positioning', definition: 'Turning patient face-down to improve oxygenation in severe ARDS' },
        { term: 'permissive hypercapnia', definition: 'Allowing elevated CO2 levels to enable lung-protective low tidal volumes' },
      ],
      clinicalNotes: 'ARDSNet lung-protective ventilation (6 mL/kg IBW, plateau ≤30) is standard of care. Driving pressure <15 cmH2O is associated with improved survival. Prone positioning for 16+ hours reduces mortality in moderate-severe ARDS.',
    },

    4: {
      level: 4,
      summary: 'Advanced ventilator management requires understanding of respiratory mechanics, patient-ventilator interaction, rescue therapies for refractory hypoxemia, and systematic approaches to liberation guided by evidence-based protocols.',
      explanation: `## Advanced Respiratory Mechanics

### Static vs Dynamic Measurements

**Static Compliance (Cstat)**
Cstat = VT / (Pplat - PEEP)
- Measured during inspiratory hold
- Reflects lung + chest wall compliance
- Normal: 50-100 mL/cmH2O
- Decreased in ARDS, fibrosis, obesity

**Dynamic Compliance**
Cdyn = VT / (Ppeak - PEEP)
- Includes resistive component
- Lower than static compliance
- Large difference suggests high resistance

### Stress and Strain Concepts

**Stress** = Transpulmonary pressure (Pplat - Ppleural)
- Force per unit area on lung tissue
- Goal: Minimize excessive stress

**Strain** = ΔV / FRC
- Change in volume relative to resting volume
- Correlates with VILI risk

### Auto-PEEP (Intrinsic PEEP)

**Definition**: Air trapped due to incomplete exhalation

**Causes**
- Obstructive disease (COPD, asthma)
- High respiratory rate
- Short expiratory time
- High minute ventilation

**Detection**
- Expiratory hold maneuver
- Flow not returning to zero before next breath

**Management**
- Reduce rate, increase expiratory time
- Bronchodilators
- Apply external PEEP (80% of auto-PEEP)

## Patient-Ventilator Asynchrony

### Types of Asynchrony

| Type | Description | Solution |
|------|-------------|----------|
| Ineffective triggering | Patient effort doesn't trigger breath | Increase sensitivity, reduce auto-PEEP |
| Double triggering | Two breaths for one effort | Increase VT or inspiratory time |
| Auto-triggering | Breaths without patient effort | Decrease sensitivity, fix leaks |
| Flow starvation | Inadequate flow for demand | Increase flow or change to pressure mode |
| Premature cycling | Breath ends too early | Adjust cycling criteria |

### Detection Methods
- Waveform analysis
- Esophageal pressure monitoring
- Clinical observation

### Clinical Impact
- Increased work of breathing
- Prolonged ventilation
- Patient discomfort
- Possible lung injury

## Rescue Therapies for Refractory Hypoxemia

### Neuromuscular Blockade

**ACURASYS Trial (2010)**
- Cisatracurium x 48h in early severe ARDS
- Improved survival (HR 0.68)

**ROSE Trial (2019)**
- No mortality difference with early paralysis
- Discordant with ACURASYS

**Current Practice**
- Consider in severe ARDS with P/F <150
- Facilitates lung-protective ventilation
- Limit duration to 48 hours when possible

### Prone Positioning

**PROSEVA Trial (2013)**
- 16h prone positioning in severe ARDS
- 28-day mortality: 16% vs 32.8% (p<0.001)
- NNT = 6

**Mechanism**
- Recruits dorsal lung regions
- Improves V/Q matching
- Reduces overdistension

**Contraindications**
- Spinal instability
- Open abdomen
- Recent sternotomy
- Hemodynamic instability (relative)

### Inhaled Pulmonary Vasodilators

**Inhaled Nitric Oxide (iNO)**
- Selective pulmonary vasodilation
- Improves V/Q matching
- Does not improve mortality in ARDS
- Consider as bridge or for RV failure

**Inhaled Epoprostenol**
- Similar mechanism to iNO
- Less expensive
- Off-label use

### ECMO

**EOLIA Trial (2018)**
- VV-ECMO vs conventional in severe ARDS
- Primary outcome not significant (p=0.09)
- High crossover rate clouded results
- Bayesian analysis suggests benefit

**Indications for VV-ECMO**
- P/F <80 for >6h despite optimization
- pH <7.25 with PaCO2 ≥60 for >6h
- Reversible or transplantable condition

## Liberation from Mechanical Ventilation

### Predictive Indices

**Rapid Shallow Breathing Index (RSBI)**
RSBI = f / VT (breaths/min per liter)
- <105: Likely to wean successfully
- >105: Weaning failure more likely
- Sensitivity ~90%, specificity ~60%

**Negative Inspiratory Force (NIF)**
- More negative than -20 to -30 cmH2O suggests adequate strength

### Weaning Protocols

**Benefits of Protocol-Driven Weaning**
- Reduces ventilator days
- Reduces ICU length of stay
- Decreases variability in care

**SBT Methods**
- T-piece: No ventilator support
- PSV 5-8 cmH2O: Compensates for tube resistance
- Automatic tube compensation (ATC)
- CPAP: Minimal support

### Extubation Failure

**Risk Factors**
- Age >65
- Cardiac disease
- Chronic respiratory disease
- Prolonged ventilation
- Weak cough, copious secretions

**Prevention**
- Cuff leak test for upper airway edema
- Prophylactic NIV post-extubation in high-risk patients
- Ensure adequate NPO status

**Management**
- Early reintubation if needed (delay worsens outcomes)
- Consider high-flow nasal cannula
- Evaluate and treat cause`,
      keyTerms: [
        { term: 'auto-PEEP', definition: 'Intrinsic positive end-expiratory pressure from incomplete exhalation and air trapping' },
        { term: 'RSBI', definition: 'Rapid Shallow Breathing Index - respiratory rate divided by tidal volume; predicts weaning outcome' },
        { term: 'patient-ventilator asynchrony', definition: 'Mismatch between patient respiratory effort and ventilator delivery' },
        { term: 'transpulmonary pressure', definition: 'Airway pressure minus pleural pressure; true distending pressure of the lung' },
        { term: 'VILI', definition: 'Ventilator-Induced Lung Injury - damage from mechanical ventilation itself' },
      ],
      clinicalNotes: 'PROSEVA showed NNT of 6 for prone positioning in severe ARDS. RSBI <105 predicts weaning success but has limited specificity. Protocol-driven weaning reduces ventilator days. Consider prophylactic NIV post-extubation in high-risk patients.',
    },

    5: {
      level: 5,
      summary: 'Expert-level ventilator management integrates physiologic principles with evolving trial evidence, personalized phenotyping approaches, and recognition of areas of ongoing uncertainty in optimizing mechanical ventilation strategies.',
      explanation: `## Evolving Paradigms in Mechanical Ventilation

### Beyond Low Tidal Volume: Individualized Targets

**Driving Pressure as Primary Target**
- Amato 2015: Driving pressure independently associated with mortality
- May be better target than VT or Pplat alone
- Debate: Should we target ΔP <15 or individualize?

**Mechanical Power**
Power = 0.098 × RR × VT × (Ppeak - ΔP/2)
- Integrates all potentially injurious variables
- May better predict VILI
- Thresholds under investigation

**Esophageal Pressure-Guided PEEP**
- EPVent-2 trial: No mortality difference
- May benefit specific phenotypes
- Allows estimation of transpulmonary pressure

### ARDS Phenotypes

**Hypo- vs Hyper-inflammatory**
- Latent class analysis of ARDS trials
- Hyperinflammatory: Higher IL-6, mortality, vasopressor need
- Differential response to interventions (PEEP, fluids)

**Focal vs Non-focal**
- LIVE trial: Personalized ventilation by morphology
- Focal: Lower PEEP, prone positioning
- Non-focal: Higher PEEP, recruitment
- Study negative overall but concept promising

### Optimal PEEP Selection

**Methods**
1. PEEP-FiO2 tables (ARDSNet)
2. Best compliance PEEP
3. Stress index
4. Electrical impedance tomography (EIT)
5. Esophageal pressure-guided
6. Transpulmonary pressure targeting

**Current Evidence**
- ART trial: High PEEP with recruitment harmful
- EPVent-2: Esophageal-guided no better overall
- No single method clearly superior
- Consider individualized approach

## Advanced Rescue Strategies

### Prone Positioning Nuances

**Extended Duration**
- PROSEVA: 16h minimum
- Some centers use 20-24h
- Responders may benefit from repeated sessions

**Awake Prone Positioning**
- COVID-19 era expansion
- May delay or prevent intubation
- Comfort and compliance challenges

**Prone + ECMO**
- Safe and feasible
- May enhance ECMO oxygenation
- Requires experienced team

### VV-ECMO Decision-Making

**When to Cannulate**
- Murray score ≥3.0
- Uncompensated hypercapnia with pH <7.20
- PRESERVE criteria for severe ARDS

**CESAR vs EOLIA Interpretation**
- CESAR: Benefit but confounded by referral effect
- EOLIA: Primary outcome negative, post-hoc analyses suggest benefit
- Bayesian analysis: >90% probability of benefit

**VV-ECMO Settings Management**
- Blood flow: Typically 50-80 mL/kg/min
- Sweep gas: Titrate to PaCO2
- FdO2: Usually 100% on ECMO circuit
- Rest lung: Ultraprotective ventilation

### Extracorporeal CO2 Removal (ECCO2R)

- Low-flow venovenous circuits
- Removes CO2, allows ultra-low VT
- REST trial ongoing
- May allow VT 3-4 mL/kg IBW

## Weaning and Liberation Science

### Difficult Weaning Categories (WIND Study)

| Category | Definition | Proportion |
|----------|------------|------------|
| Simple | First SBT to liberation ≤24h | 55-60% |
| Difficult | Liberation 1-7 days | 25-30% |
| Prolonged | Liberation >7 days | 15-20% |

### Tracheostomy Timing

**TracMan Trial**
- Early (≤4 days) vs late (>10 days)
- No mortality difference
- No difference in ventilator-free days

**Current Approach**
- Consider when ventilation expected >10-14 days
- Earlier if clear benefit (comfort, mobility)
- Individual patient factors important

### Post-Extubation Support

**High-Flow Nasal Cannula (HFNC)**
- FLORALI: Reduced reintubation vs NIV in low-risk
- Provides some PEEP, wash-out dead space
- Comfort advantage

**Prophylactic NIV**
- Reduces reintubation in high-risk (Ferrer 2006)
- Consider for chronic respiratory disease, cardiac disease

## Quality and Systems Issues

### Ventilator-Associated Events (VAE)

**CDC Surveillance Definition**
- Replaces VAP for surveillance
- Ventilator-Associated Condition (VAC)
- Infection-Related VAC (IVAC)
- Possible/Probable VAP

**Prevention Bundle (Updated)**
- Head of bed elevation
- Subglottic secretion drainage
- Oral care
- Spontaneous awakening/breathing trials
- DVT and stress ulcer prophylaxis

### Ventilator Shortages and Allocation

**Lessons from COVID-19**
- Surge capacity planning
- Crisis standards of care
- Allocation frameworks
- Sharing and split ventilation debates

### Long-Term Outcomes

**Post-Intensive Care Syndrome (PICS)**
- Physical: ICU-acquired weakness
- Cognitive: Memory, executive function
- Psychological: PTSD, depression, anxiety

**Rehabilitation**
- Early mobility while ventilated
- Post-ICU rehabilitation programs
- Long-term follow-up recommended

### Research Frontiers

**Closed-Loop Ventilation**
- Automated FiO2 adjustment
- Automated weaning protocols
- AI-driven optimization

**Biomarkers for Personalization**
- ARDS phenotyping for treatment selection
- Predictive models for weaning success
- Markers of lung injury and recovery`,
      keyTerms: [
        { term: 'mechanical power', definition: 'Integrated measure of energy delivered to lungs per minute; may better predict ventilator-induced lung injury' },
        { term: 'ECCO2R', definition: 'Extracorporeal Carbon Dioxide Removal - low-flow circuit to remove CO2 and allow ultra-protective ventilation' },
        { term: 'ARDS phenotypes', definition: 'Distinct biological subtypes of ARDS (hypo- vs hyper-inflammatory) with different treatment responses' },
        { term: 'VAE', definition: 'Ventilator-Associated Event - CDC surveillance definition replacing VAP' },
        { term: 'PICS', definition: 'Post-Intensive Care Syndrome - new or worsening physical, cognitive, and psychological impairments after critical illness' },
      ],
      clinicalNotes: `Expert practice points:
1. Driving pressure may be a better target than absolute tidal volume or plateau pressure
2. ARDS phenotyping shows promise for personalized treatment but not yet ready for routine practice
3. VV-ECMO evidence suggests benefit in severe ARDS when delivered at experienced centers
4. Early tracheostomy does not improve mortality but may improve patient comfort and facilitate rehabilitation
5. Long-term outcomes (PICS) must be considered when making critical care decisions
6. Quality improvement focuses on prevention bundles and protocolized weaning`,
    },
  },

  media: [
    {
      id: 'ventilator-modes-comparison',
      type: 'diagram',
      filename: 'ventilator-modes-comparison.svg',
      title: 'Ventilator Modes Comparison',
      description: 'Comparison of common ventilator modes with waveforms and settings',
    },
    {
      id: 'lung-protective-ventilation',
      type: 'diagram',
      filename: 'lung-protective-ventilation.svg',
      title: 'Lung-Protective Ventilation Strategy',
      description: 'ARDSNet protocol for low tidal volume ventilation',
    },
  ],

  citations: [
    {
      id: 'ardsnet-trial',
      type: 'article',
      title: 'Ventilation with Lower Tidal Volumes as Compared with Traditional Tidal Volumes for ALI and ARDS',
      authors: ['ARDS Network'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJM200005043421801',
    },
    {
      id: 'proseva-trial',
      type: 'article',
      title: 'Prone Positioning in Severe ARDS',
      authors: ['Guerin, C.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1214103',
    },
  ],

  crossReferences: [
    { targetId: 'critical-care-icu-basics', targetType: 'topic', relationship: 'related', label: 'ICU Basics' },
    { targetId: 'critical-care-sedation-pain', targetType: 'topic', relationship: 'related', label: 'ICU Sedation' },
    { targetId: 'critical-care-multi-organ-failure', targetType: 'topic', relationship: 'related', label: 'Multi-Organ Failure' },
    { targetId: 'pulmonology-ards', targetType: 'condition', relationship: 'see-also', label: 'ARDS' },
  ],

  tags: {
    systems: ['respiratory', 'critical-care'],
    topics: ['mechanical ventilation', 'respiratory support', 'ARDS', 'weaning'],
    keywords: ['ventilator', 'PEEP', 'tidal volume', 'ARDS', 'extubation', 'ECMO', 'prone positioning'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency medicine', 'anesthesia'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default mechanicalVentilation;
