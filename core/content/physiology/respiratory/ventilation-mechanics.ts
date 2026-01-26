/**
 * Ventilation Mechanics - Comprehensive Educational Content
 *
 * Covers breathing muscles, lung volumes, compliance, and the mechanics
 * of moving air in and out of the lungs.
 */

import { EducationalContent } from '../../types';

export const ventilationMechanics: EducationalContent = {
  id: 'physiology-ventilation-mechanics',
  type: 'process',
  name: 'Ventilation Mechanics',
  alternateNames: ['Breathing Mechanics', 'Pulmonary Ventilation', 'Respiratory Mechanics'],

  levels: {
    1: {
      level: 1,
      summary: 'Breathing is how your body moves air in and out of your lungs, using muscles to expand and squeeze your chest.',
      explanation: `## How Do We Breathe?

Breathing is something you do all day without thinking about it. Let's understand how it works!

### The Main Breathing Muscle: The Diaphragm

Your **diaphragm** is a big dome-shaped muscle that sits below your lungs, like a trampoline at the bottom of your chest. Here's how it works:

**Breathing In (Inhaling):**
1. Your diaphragm flattens down like pressing on a trampoline
2. This makes more room in your chest
3. Air rushes into your lungs to fill the extra space
4. It's like pulling back on a syringe - the space gets bigger, so air flows in

**Breathing Out (Exhaling):**
1. Your diaphragm relaxes and springs back up
2. This squeezes the space in your chest
3. Air is pushed out of your lungs
4. It's like pushing on the syringe - the space gets smaller, so air flows out

### Helper Muscles

When you breathe normally, your diaphragm does most of the work. But when you exercise or need more air, other muscles help:
- **Rib muscles**: Pull your ribs up and out to make even more room
- **Neck muscles**: Help lift your ribcage when you're really working hard
- **Belly muscles**: Help push air out faster when you're exercising

### How Much Air Do Your Lungs Hold?

Think of your lungs like balloons:
- **Normal breath**: About a soda can's worth of air (500 mL)
- **Big deep breath**: About 3 large water bottles worth (4-6 liters)
- There's always some air left in your lungs, even after you breathe out as hard as you can

### Why Does This Matter?

When you have lung problems, these muscles might have to work harder. People with asthma or other breathing conditions might notice their chest or neck muscles working more than normal.`,
      keyTerms: [
        { term: 'diaphragm', definition: 'The main breathing muscle shaped like a dome under your lungs' },
        { term: 'inhale', definition: 'To breathe in; when air enters your lungs' },
        { term: 'exhale', definition: 'To breathe out; when air leaves your lungs' },
        { term: 'lungs', definition: 'The spongy organs in your chest that take in oxygen and release carbon dioxide' },
      ],
      analogies: [
        'Your diaphragm works like a piston in a pump - when it moves down, it sucks air in; when it moves up, it pushes air out.',
        'Breathing is like a balloon inside a jar - when you make the jar bigger, the balloon fills with air; when the jar gets smaller, air comes out.',
        'Your lungs are like sponges that can squeeze small or expand big depending on how much air you need.',
      ],
      examples: [
        'When you run fast, you notice yourself breathing harder because your muscles need more oxygen.',
        'When you hold your breath underwater, you can feel pressure in your chest from the air trapped inside.',
        'Hiccups happen when your diaphragm suddenly twitches and pulls air in quickly.',
      ],
    },
    2: {
      level: 2,
      summary: 'Ventilation involves the coordinated action of respiratory muscles to create pressure gradients that move air, with lung volumes measured by spirometry to assess pulmonary function.',
      explanation: `## The Mechanics of Breathing

### Pressure and Airflow

Breathing works because of **pressure differences**:
- Air flows from areas of high pressure to low pressure
- To breathe in, we must make the pressure in our lungs lower than outside air
- To breathe out, we must make lung pressure higher than outside air

### Inspiratory Muscles (Breathing In)

**Primary Muscles:**

1. **Diaphragm**
   - Does 70-80% of the work during quiet breathing
   - Innervated by the phrenic nerve (C3-C5)
   - Contracts to flatten, increasing thoracic volume
   - "C3, 4, 5 keeps the diaphragm alive"

2. **External Intercostals**
   - Located between ribs, fibers run diagonally downward
   - Contract to lift ribs up and out (bucket handle motion)
   - Increase chest diameter

**Accessory Muscles (used during exercise or respiratory distress):**
- Sternocleidomastoid: Lifts the sternum
- Scalenes: Elevate the first two ribs
- Pectoralis minor: Pulls on ribs when arms are fixed

### Expiratory Muscles (Breathing Out)

**During quiet breathing:**
- Expiration is PASSIVE - no muscle contraction needed
- Lungs naturally spring back due to elastic recoil
- Diaphragm simply relaxes

**During forced expiration (coughing, exercise):**
- Abdominal muscles (rectus abdominis, obliques)
- Internal intercostals
- These actively compress the chest to push air out

### Lung Volumes and Capacities

**Volumes (cannot be subdivided):**

| Volume | Definition | Normal Value |
|--------|------------|--------------|
| Tidal Volume (TV) | Air moved in one normal breath | 500 mL |
| Inspiratory Reserve (IRV) | Extra air you can breathe in after normal breath | 3000 mL |
| Expiratory Reserve (ERV) | Extra air you can push out after normal breath | 1100 mL |
| Residual Volume (RV) | Air remaining after maximum exhalation | 1200 mL |

**Capacities (combinations of volumes):**

| Capacity | Calculation | Normal Value |
|----------|-------------|--------------|
| Inspiratory Capacity (IC) | TV + IRV | 3500 mL |
| Functional Residual Capacity (FRC) | ERV + RV | 2300 mL |
| Vital Capacity (VC) | TV + IRV + ERV | 4600 mL |
| Total Lung Capacity (TLC) | All volumes | 5800 mL |

### Compliance: How Stretchy Are the Lungs?

**Lung compliance** = how easily the lungs expand
- High compliance = lungs stretch easily (like a soft balloon)
- Low compliance = lungs are stiff (like an old, tough balloon)

Normal compliance: ~200 mL/cm H2O

**Factors affecting compliance:**
- **Decreased** in: Pulmonary fibrosis, ARDS, pulmonary edema
- **Increased** in: Emphysema, aging

### Dead Space

Not all air you breathe reaches the gas-exchange areas:
- **Anatomic dead space**: Air in conducting airways (~150 mL)
- This air never participates in gas exchange
- Alveolar ventilation = (TV - dead space) x respiratory rate`,
      keyTerms: [
        { term: 'diaphragm', definition: 'Primary dome-shaped muscle of inspiration, innervated by the phrenic nerve (C3-C5)', pronunciation: 'DY-uh-fram' },
        { term: 'compliance', definition: 'A measure of how easily the lungs expand; change in volume per change in pressure', pronunciation: 'kum-PLY-ans' },
        { term: 'tidal volume', definition: 'The amount of air moved in and out during a normal breath, about 500 mL' },
        { term: 'vital capacity', definition: 'The maximum amount of air that can be exhaled after maximum inhalation' },
        { term: 'residual volume', definition: 'Air remaining in lungs after maximum exhalation; prevents lung collapse' },
        { term: 'dead space', definition: 'Air that doesn\'t participate in gas exchange; fills the conducting airways' },
      ],
      analogies: [
        'Accessory muscles are like calling in backup workers when the main employee (diaphragm) can\'t handle the workload alone.',
        'Residual volume is like the air that stays in a balloon even when you squeeze it - your lungs never completely empty.',
      ],
    },
    3: {
      level: 3,
      summary: 'Ventilation mechanics involve the interplay of transpulmonary pressure, chest wall and lung compliance, airway resistance, and the work of breathing, with respiratory muscle recruitment following predictable patterns based on ventilatory demand.',
      explanation: `## Pressure Dynamics in Ventilation

### Key Pressures

1. **Atmospheric pressure (Patm)**: 760 mmHg at sea level (reference point = 0)

2. **Intrapleural pressure (Ppl)**:
   - Pressure in the pleural space between lung and chest wall
   - Always negative during normal breathing (-5 to -8 cm H2O)
   - Prevents lung collapse
   - Becomes more negative during inspiration

3. **Alveolar pressure (Palv)**:
   - Pressure inside the alveoli
   - Equals atmospheric pressure at end-inspiration and end-expiration
   - Becomes negative during inspiration (air flows in)
   - Becomes positive during expiration (air flows out)

4. **Transpulmonary pressure (Ptp)**:
   - Ptp = Palv - Ppl
   - Always positive (keeps lungs inflated)
   - Increases during inspiration to expand lungs

### The Breathing Cycle

**Inspiration:**
1. Diaphragm contracts, descends
2. External intercostals lift ribs
3. Thoracic volume increases
4. Ppl becomes more negative (-5 to -8 cm H2O)
5. Palv becomes negative (-1 cm H2O)
6. Air flows down pressure gradient into lungs

**Expiration (quiet):**
1. Inspiratory muscles relax
2. Elastic recoil of lungs and chest wall
3. Thoracic volume decreases
4. Palv becomes positive (+1 cm H2O)
5. Air flows out

### Compliance

**Definition**: Change in volume per unit change in pressure (dV/dP)

**Lung Compliance:**
- Determined by elastic tissue (elastin) and surface tension
- Normal: 200 mL/cm H2O
- Measured as slope of pressure-volume curve

**Chest Wall Compliance:**
- Determined by rib cage and muscle/tissue properties
- Normal: 200 mL/cm H2O

**Total Respiratory System Compliance:**
- 1/Ctotal = 1/Clung + 1/Cchest wall
- Normal: 100 mL/cm H2O

**Clinical Significance:**
| Condition | Lung Compliance | Mechanism |
|-----------|-----------------|-----------|
| Emphysema | Increased | Loss of elastin |
| Pulmonary fibrosis | Decreased | Collagen deposition |
| ARDS | Decreased | Alveolar edema |
| Chest wall disease | Normal lungs, decreased total | Kyphoscoliosis, obesity |

### Surface Tension and Surfactant

**Surface tension** in alveoli:
- Water molecules attract each other, creating tension at air-water interface
- Tends to collapse alveoli
- Would require very high pressure to inflate lungs without surfactant

**Surfactant:**
- Produced by Type II pneumocytes
- Composition: 90% lipid (mainly DPPC - dipalmitoylphosphatidylcholine), 10% protein
- Functions:
  1. Reduces surface tension, making inflation easier
  2. Stabilizes alveoli (prevents small ones from collapsing into large ones)
  3. Reduces work of breathing
  4. Keeps alveoli dry (reduces transudation)

**LaPlace's Law**: P = 2T/r
- Smaller alveoli would have higher pressure and collapse into larger ones
- Surfactant reduces T proportionally more in smaller alveoli, equalizing pressures

### Airway Resistance

**Poiseuille's Law**: R = 8ηl/πr⁴

Resistance is inversely proportional to the fourth power of radius:
- 50% reduction in radius → 16x increase in resistance

**Distribution of resistance:**
- 80% in upper airways (nose, pharynx, larynx, trachea)
- 20% in lower airways
- Smallest airways contribute little to total resistance (huge combined cross-section)

**Factors affecting resistance:**
| Factor | Effect |
|--------|--------|
| Bronchodilators | Decrease |
| Bronchospasm | Increase |
| Mucus | Increase |
| Dynamic compression (forced expiration) | Increase |
| Lung volume (high) | Decrease (radial traction) |

### Work of Breathing

**Components:**
1. **Elastic work**: Overcoming compliance (lungs and chest wall)
2. **Resistive work**: Overcoming airway resistance

**Normal work of breathing**: 3-5% of total oxygen consumption

**Increased in:**
- Low compliance states (fibrosis, edema)
- High resistance states (asthma, COPD)
- Both cause respiratory muscle fatigue if prolonged`,
      keyTerms: [
        { term: 'transpulmonary pressure', definition: 'The pressure difference across the lung (alveolar minus intrapleural), which keeps the lung inflated' },
        { term: 'surfactant', definition: 'Phospholipid mixture produced by Type II pneumocytes that reduces alveolar surface tension', pronunciation: 'sur-FAK-tant' },
        { term: 'LaPlace\'s law', definition: 'Physical law stating that pressure in a sphere equals 2 x surface tension / radius; explains why surfactant prevents alveolar collapse' },
        { term: 'Poiseuille\'s law', definition: 'Describes relationship between resistance and tube radius; resistance is proportional to 1/r⁴' },
        { term: 'DPPC', definition: 'Dipalmitoylphosphatidylcholine; the main lipid component of pulmonary surfactant' },
        { term: 'elastic recoil', definition: 'The tendency of stretched lung tissue to return to resting volume; drives passive expiration' },
      ],
      clinicalNotes: 'Surfactant deficiency in premature infants causes Respiratory Distress Syndrome (RDS). Treatment with exogenous surfactant and antenatal corticosteroids has dramatically reduced mortality. In adults, surfactant dysfunction contributes to ARDS pathophysiology.',
    },
    4: {
      level: 4,
      summary: 'Ventilation mechanics involve complex interactions between respiratory muscle energetics, pressure-volume relationships, flow limitation, and the balance between resistive and elastic loads, with clinical assessment requiring integration of static and dynamic measurements.',
      explanation: `## Advanced Respiratory Mechanics

### Pressure-Volume Relationships

**Static Compliance Curve:**
- Measured under conditions of no airflow
- Reveals elastic properties of respiratory system
- Shows sigmoidal shape with upper and lower inflection points

**Hysteresis:**
- Inflation and deflation curves don't overlap
- Deflation curve shows higher compliance
- Due to:
  1. Surfactant redistribution during expansion
  2. Alveolar recruitment
  3. Surface tension history

**Upper Inflection Point (UIP):**
- Plateau where further pressure yields little volume gain
- Indicates over-distension risk
- Critical for setting ventilator limits

**Lower Inflection Point (LIP):**
- Where compliance begins to improve on inflation
- Represents alveolar opening pressure
- Guides PEEP settings in ARDS

### Respiratory Muscle Physiology

**Diaphragm Function:**

*Geometry and mechanics:*
- Zone of apposition: Diaphragm in contact with chest wall
- Costal component: Attaches to ribs, displaces them outward
- Crural component: Attaches to vertebrae, works as piston

*Length-tension relationship:*
- Optimal length at FRC
- At high lung volumes (hyperinflation), diaphragm flattens
- Shortened muscle = reduced force generation
- Explains dyspnea in COPD with hyperinflation

**Force-Velocity Relationship:**
- Higher contraction velocity = lower force
- Rapid breathing reduces efficiency
- Respiratory failure often involves high rate, low tidal volume

**Respiratory Muscle Fatigue:**
- Central fatigue: Reduced neural drive
- Peripheral fatigue: Impaired contractility
- Manifested by rising PaCO2, paradoxical breathing
- Critical threshold: >40% maximal pressure sustained

### Dynamic Airway Mechanics

**Equal Pressure Point (EPP):**
During forced expiration:
1. Alveolar pressure = elastic recoil + pleural pressure
2. Pressure drops along airways due to resistance
3. EPP: Point where airway pressure = pleural pressure
4. Downstream of EPP, airways are compressed

**Flow Limitation:**
- Maximum expiratory flow determined by airway properties, not effort
- At iso-volume, flows converge regardless of expiratory effort
- Basis of flow-volume loop plateau in obstructive disease

**Dynamic Hyperinflation:**
- When expiratory time insufficient for complete exhalation
- FRC rises above resting level
- Creates intrinsic PEEP (auto-PEEP)
- Increases work of breathing
- Common in COPD exacerbations, asthma

### Intrinsic PEEP (Auto-PEEP)

**Causes:**
- Airflow obstruction
- Insufficient expiratory time (high respiratory rate)
- High minute ventilation

**Consequences:**
- Increased inspiratory threshold load
- Hemodynamic compromise (reduced venous return)
- Difficulty triggering ventilator

**Detection:**
- Expiratory flow doesn't return to zero before next breath
- Expiratory hold maneuver reveals positive end-expiratory pressure

**Management:**
- Reduce respiratory rate
- Increase expiratory time (lower I:E ratio)
- Bronchodilators
- External PEEP (to reduce triggering work)

### Work of Breathing Analysis

**Campbell Diagram:**
- Graphical representation of work of breathing
- Area represents total work
- Separates elastic and resistive components

**Work = ∫PdV**

Components:
1. **Elastic work**: Area under compliance curve
2. **Inspiratory resistive work**: Area between compliance curve and inspiratory loop
3. **Expiratory work**: Normally zero (passive)

**Oxygen cost of breathing:**
- Normal: 1-2 mL O2/L ventilation
- Increased in respiratory disease: 5-10 mL O2/L
- Can consume 30-50% of total O2 in respiratory failure

### Mechanical Ventilation Considerations

**Driving Pressure:**
ΔP = Plateau pressure - PEEP = VT / Compliance

- Strong predictor of outcomes in ARDS
- Target: <15 cm H2O
- Reflects lung strain for given tidal volume

**Respiratory System Mechanics Equation:**
Paw = (V x E) + (V̇ x R) + PEEP

Where:
- Paw = airway pressure
- V = volume
- E = elastance (1/compliance)
- V̇ = flow
- R = resistance
- PEEP = end-expiratory pressure

**Distinguishing Compliance vs. Resistance Problems:**
| Measurement | Compliance Problem | Resistance Problem |
|-------------|-------------------|-------------------|
| Peak inspiratory pressure | Increased | Increased |
| Plateau pressure | Increased | Normal |
| Peak - Plateau gradient | Normal | Increased |`,
      keyTerms: [
        { term: 'equal pressure point', definition: 'Location during forced expiration where intrabronchial pressure equals pleural pressure; airways downstream are dynamically compressed' },
        { term: 'auto-PEEP', definition: 'Intrinsic positive end-expiratory pressure caused by incomplete exhalation; increases work of breathing' },
        { term: 'dynamic hyperinflation', definition: 'Progressive air trapping due to insufficient expiratory time, raising end-expiratory lung volume above FRC' },
        { term: 'driving pressure', definition: 'Plateau pressure minus PEEP; reflects the pressure needed to inflate the respiratory system during mechanical ventilation' },
        { term: 'zone of apposition', definition: 'Area where the diaphragm muscle lies in contact with the lower rib cage, optimizing force generation' },
        { term: 'flow limitation', definition: 'Phenomenon where expiratory flow cannot increase beyond a maximum regardless of effort; due to dynamic airway compression' },
      ],
      clinicalNotes: 'In mechanically ventilated patients, distinguishing between compliance and resistance problems is crucial. A high peak-plateau gradient (>5 cm H2O) suggests airway resistance issues (bronchospasm, mucus plugging, kinked tube). High plateau pressure with normal gradient indicates compliance problems (ARDS, pneumothorax, auto-PEEP).',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding of ventilation mechanics integrates physiological principles with bedside assessment tools, enabling precision titration of mechanical ventilation, recognition of patient-ventilator interactions, and optimization of respiratory muscle function in critical illness.',
      explanation: `## Precision Respiratory Mechanics

### Advanced Lung Mechanics Assessment

**Stress and Strain:**
- **Stress**: Transpulmonary pressure (force per unit area)
- **Strain**: Volume change relative to resting volume (ΔV/FRC)
- Relationship: Stress = Specific elastance × Strain

**Transpulmonary Pressure Monitoring:**
- PL = Paw - Pes (esophageal pressure approximates pleural pressure)
- Gold standard for assessing lung stress
- Guides PEEP and ventilatory pressure limits

**Esophageal Manometry:**
- Balloon catheter measures Pes
- Allows calculation of true transpulmonary pressure
- Particularly valuable in obesity, abdominal hypertension
- Normal chest wall contribution: ~5 cm H2O at end-expiration

### Regional Ventilation Assessment

**Electrical Impedance Tomography (EIT):**
- Real-time imaging of ventilation distribution
- Identifies:
  - Overdistension (anterior regions)
  - Collapse/consolidation (dependent regions)
  - Pendelluft (intra-tidal gas redistribution)
- Guides individualized PEEP titration

**Computed Tomography Analysis:**
- Quantitative assessment of:
  - Normally aerated tissue
  - Poorly aerated (recruitble)
  - Non-aerated (consolidated/collapsed)
  - Hyperinflated
- Informs recruitment potential

### Patient-Ventilator Interaction

**Asynchrony Types:**

1. **Trigger asynchrony:**
   - Ineffective efforts: Patient effort doesn't trigger breath
   - Auto-triggering: Ventilator cycles without patient effort
   - Double-triggering: One effort triggers two breaths

2. **Flow asynchrony:**
   - Flow mismatch: Delivered flow ≠ patient demand
   - Premature termination: Breath ends before patient ready

3. **Cycling asynchrony:**
   - Early cycling: Mechanical breath ends before neural inspiration ends
   - Delayed cycling: Mechanical breath continues after neural inspiration

**Asynchrony Index:**
- Number of asynchronous events / total breaths
- >10% associated with worse outcomes
- Detection requires careful waveform analysis

### Respiratory Muscle Assessment

**Diaphragm Ultrasound:**

*Measurements:*
- Thickness (zone of apposition): Normal 1.5-2.5 mm
- Thickening fraction: (end-inspiratory - end-expiratory) / end-expiratory × 100
- Excursion: Displacement during breathing

*Clinical applications:*
- Detect diaphragm dysfunction (paralysis, weakness)
- Predict extubation outcome (thickening fraction >30% favorable)
- Guide weaning process

**Transdiaphragmatic Pressure (Pdi):**
- Pdi = Pgas - Pes
- Gold standard for diaphragm function
- Normal: 80-120 cm H2O with maximal effort
- Weakness: <30 cm H2O

**Ventilator-Induced Diaphragm Dysfunction (VIDD):**
- Controlled mechanical ventilation → diaphragm atrophy
- Develops within 18-48 hours
- Mechanisms:
  - Proteolysis (calpain, caspase activation)
  - Oxidative stress
  - Mitochondrial dysfunction
- Prevention: Maintain diaphragm activity (avoid full control)

### Mechanical Ventilation Optimization

**Lung Protective Ventilation:**
- Tidal volume: 6-8 mL/kg predicted body weight
- Plateau pressure: <30 cm H2O
- Driving pressure: <15 cm H2O
- PEEP: Titrated to oxygenation/compliance/EIT

**Mechanical Power:**
- MP = 0.098 × RR × VT × (Peak pressure - ½ × driving pressure)
- Integrates multiple ventilator parameters
- Higher power associated with VILI and mortality
- Target: <17 J/min normalized to compliance

**Pendelluft Prevention:**
- Regional stress amplification from spontaneous efforts
- Higher in heterogeneous lung disease
- Management:
  - Neuromuscular blockade (severe ARDS)
  - Deeper sedation
  - Careful transition to assisted modes

### Weaning from Mechanical Ventilation

**Readiness Criteria:**
- Resolution of underlying condition
- Adequate oxygenation: PaO2/FiO2 >150, PEEP ≤8
- Hemodynamic stability
- Able to initiate spontaneous breaths
- Adequate consciousness

**Spontaneous Breathing Trial (SBT):**
- Duration: 30-120 minutes
- Support levels: T-piece, CPAP, or low PSV
- Success predictors:
  - RSBI <105 (breaths/min/L)
  - No distress, stable vitals
  - Adequate gas exchange

**Weaning Predictors:**
| Parameter | Threshold | Sensitivity |
|-----------|-----------|-------------|
| RSBI | <105 | High |
| MIP | <-20 to -25 cm H2O | Moderate |
| P0.1 | <3-4 cm H2O | Moderate |
| Vital capacity | >10-15 mL/kg | Moderate |

### Clinical Integration

**Difficult Weaning Assessment:**
1. Respiratory mechanics
   - Auto-PEEP
   - Compliance
   - Resistance
2. Respiratory muscle function
   - Diaphragm ultrasound
   - MIP, P0.1
3. Cardiac function
   - Fluid status
   - LV/RV function during SBT
4. Airway patency
   - Cuff leak
   - Upper airway edema

**Lung-Diaphragm Protective Ventilation:**
- Balance lung protection with diaphragm preservation
- Maintain partial support modes when possible
- Target inspiratory effort: 5-10 cm H2O
- Monitor with Pes or diaphragm ultrasound
- Avoid both over-assistance (atrophy) and under-assistance (fatigue)`,
      keyTerms: [
        { term: 'esophageal manometry', definition: 'Measurement of esophageal pressure using a balloon catheter to estimate pleural pressure for calculating transpulmonary pressure' },
        { term: 'VIDD', definition: 'Ventilator-induced diaphragm dysfunction; rapid atrophy from controlled mechanical ventilation causing weaning difficulties' },
        { term: 'mechanical power', definition: 'Energy transferred from ventilator to lungs per unit time; integrates multiple parameters associated with ventilator-induced lung injury' },
        { term: 'pendelluft', definition: 'Intra-tidal gas movement between lung regions with different time constants; amplifies regional stress' },
        { term: 'RSBI', definition: 'Rapid shallow breathing index; respiratory rate divided by tidal volume in liters; <105 predicts weaning success' },
        { term: 'electrical impedance tomography', definition: 'Real-time imaging technique showing regional ventilation distribution for personalized ventilator management' },
      ],
      clinicalNotes: `Key practice recommendations:

1. **Esophageal pressure monitoring** in moderate-severe ARDS allows safe PEEP optimization and prevents hidden lung overdistension in obese patients.

2. **Diaphragm-protective targets**: Keep respiratory effort (P0.1) between 1-4 cm H2O and diaphragm thickening fraction 15-30% to balance lung protection with muscle preservation.

3. **Asynchrony detection**: Systematic waveform analysis should be part of daily ventilator assessment; asynchrony index >10% warrants mode or setting adjustment.

4. **Weaning protocol implementation**: Protocolized daily SBT assessment reduces ventilator days; RSBI remains the most practical bedside predictor.

5. **Consider VIDD** in prolonged ventilator dependence; early mobilization and spontaneous breathing modes may preserve diaphragm function.`,
    },
  },

  media: [
    {
      id: 'lung-volumes-diagram',
      type: 'diagram',
      filename: 'lung-volumes-capacities.svg',
      title: 'Lung Volumes and Capacities',
      description: 'Spirogram showing tidal volume, reserve volumes, and capacities',
    },
    {
      id: 'pressure-volume-curve',
      type: 'diagram',
      filename: 'pressure-volume-curve.svg',
      title: 'Pressure-Volume Relationships',
      description: 'Static compliance curve with inflection points and hysteresis',
    },
    {
      id: 'breathing-mechanics-animation',
      type: 'animation',
      filename: 'breathing-mechanics.mp4',
      title: 'Breathing Mechanics Animation',
      description: 'Animated visualization of diaphragm contraction and lung expansion',
    },
  ],

  citations: [
    {
      id: 'west-respiratory-physiology',
      type: 'textbook',
      title: 'Respiratory Physiology: The Essentials',
      authors: ['West JB', 'Luks AM'],
      source: 'Wolters Kluwer',
      chapter: '2-3',
    },
    {
      id: 'guyton-hall',
      type: 'textbook',
      title: 'Textbook of Medical Physiology',
      authors: ['Hall JE', 'Hall ME'],
      source: 'Elsevier',
      chapter: '38-39',
    },
    {
      id: 'ards-net',
      type: 'article',
      title: 'Ventilation with Lower Tidal Volumes for Acute Lung Injury and ARDS',
      authors: ['ARDS Network'],
      source: 'N Engl J Med',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-gas-exchange', targetType: 'topic', relationship: 'sibling', label: 'Gas Exchange' },
    { targetId: 'structure-diaphragm', targetType: 'structure', relationship: 'related', label: 'Diaphragm Anatomy' },
    { targetId: 'topic-pulmonary-function-tests', targetType: 'topic', relationship: 'related', label: 'Pulmonary Function Tests' },
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'see-also', label: 'COPD' },
    { targetId: 'condition-ards', targetType: 'condition', relationship: 'see-also', label: 'ARDS' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['physiology', 'pulmonology', 'critical care'],
    keywords: ['ventilation', 'breathing', 'compliance', 'lung volumes', 'diaphragm', 'surfactant', 'mechanical ventilation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ventilationMechanics;
