/**
 * Respiratory Mechanics - Respiratory Physiology
 *
 * Comprehensive coverage of the mechanical aspects of breathing including
 * compliance, resistance, work of breathing, and pressure-volume relationships.
 */

import { EducationalContent } from '../../types';

export const respiratoryMechanicsContent: EducationalContent = {
  id: 'respiratory-mechanics',
  type: 'concept',
  name: 'Respiratory Mechanics',
  alternateNames: ['Mechanics of Breathing', 'Pulmonary Mechanics', 'Lung Mechanics'],

  levels: {
    1: {
      level: 1,
      summary: 'Respiratory mechanics is how your chest and lungs work together to move air in and out of your body when you breathe.',
      explanation: `## What Are Respiratory Mechanics?

Respiratory mechanics describes how your body physically moves air in and out of your lungs - like a pump that never stops.

### The Parts That Move Air

**Your Diaphragm:**
- Main breathing muscle
- Shaped like a dome under your lungs
- Flattens when you breathe in
- Rises when you breathe out

**Your Rib Cage:**
- Bones that protect your lungs
- Moves up and out when you inhale
- Returns to resting position when you exhale
- Muscles between ribs help move it

**Your Lungs:**
- Stretchy like balloons
- Expand when you breathe in
- Shrink when you breathe out
- Spring back on their own

### How Breathing Works

**Breathing In (Inhaling):**
- Diaphragm pulls down
- Ribs move up and out
- Chest gets bigger
- Air rushes in to fill the space
- Like pulling a plunger out of a syringe

**Breathing Out (Exhaling):**
- Muscles relax
- Lungs spring back
- Chest gets smaller
- Air is pushed out
- Usually does not need extra effort

### What Makes Breathing Easy or Hard

**Easy Breathing:**
- Healthy stretchy lungs
- Open airways
- Strong muscles
- Relaxed body

**Hard Breathing:**
- Stiff lungs (hard to stretch)
- Narrow airways (like breathing through a straw)
- Weak muscles
- Anxious or stressed

### Why It Matters

**Normal Breathing:**
- Happens without thinking
- About 12-20 breaths per minute
- Adjusts to activity level
- Very efficient

**When Things Go Wrong:**
- Asthma: airways get narrow
- Lung disease: lungs get stiff
- Muscle weakness: hard to inflate lungs
- Doctors can test how well your breathing works`,
      keyTerms: [
        { term: 'diaphragm', definition: 'The main muscle used for breathing, located under your lungs' },
        { term: 'inhale', definition: 'To breathe in, pulling air into your lungs' },
        { term: 'exhale', definition: 'To breathe out, pushing air out of your lungs' },
        { term: 'airways', definition: 'The tubes that carry air to and from your lungs' },
        { term: 'rib cage', definition: 'The bones around your chest that protect your lungs and heart' },
      ],
      analogies: [
        'Your diaphragm works like a piston in a pump - when it moves down, air gets sucked in.',
        'Your lungs are like balloons - they stretch when filled with air and spring back when you let go.',
        'Breathing through narrow airways is like drinking through a thin straw - it takes more effort.',
      ],
      examples: [
        'When you exercise, you breathe harder and faster because your muscles need more oxygen.',
        'Babies breathe mostly using their belly (diaphragm) while adults use both belly and chest.',
      ],
      patientCounselingPoints: [
        'Deep belly breathing is more efficient than shallow chest breathing',
        'Pursed lip breathing can help if you have trouble getting air out',
        'Strong breathing muscles make everyday activities easier',
      ],
    },
    2: {
      level: 2,
      summary: 'Respiratory mechanics involves the muscles, pressures, and elastic properties that move air in and out of the lungs, including concepts of compliance and resistance.',
      explanation: `## Understanding Respiratory Mechanics

### Muscles of Breathing

**Inspiration (Breathing In):**
- Diaphragm (primary): contracts and flattens
- External intercostals: lift ribs up and out
- Accessory muscles (when needed): scalenes, sternocleidomastoid
- Active process requiring energy

**Expiration (Breathing Out):**
- Passive during quiet breathing
- Elastic recoil of lungs
- Active during forced breathing
- Internal intercostals and abdominals for forced expiration

### Pressure Changes

**Atmospheric Pressure:**
- Sea level: 760 mmHg
- Reference point for lung pressures

**Intrapleural Pressure:**
- Pressure in space between lungs and chest wall
- Normally negative (-5 cmH2O at rest)
- Becomes more negative during inspiration
- Keeps lungs expanded

**Alveolar Pressure:**
- Pressure inside the alveoli
- Equals atmospheric at end of breath
- Negative during inspiration (air flows in)
- Positive during expiration (air flows out)

### Compliance

**Definition:**
- How easily the lungs stretch
- Change in volume per change in pressure
- Higher compliance = easier to inflate

**Lung Compliance:**
- About 200 mL/cmH2O
- Reduced in fibrosis (stiff lungs)
- Increased in emphysema (floppy lungs)

**Chest Wall Compliance:**
- About 200 mL/cmH2O
- Reduced in obesity, kyphoscoliosis
- Reduced with chest wall injury

**Total Compliance:**
- Lungs and chest wall in series
- About 100 mL/cmH2O
- 1/CT = 1/CL + 1/CCW

### Resistance

**Airway Resistance:**
- Opposition to airflow
- Determined by airway diameter
- Poiseuille's law applies
- Most resistance in medium bronchi

**Factors Increasing Resistance:**
- Bronchoconstriction (asthma)
- Mucus (bronchitis)
- Airway inflammation
- Decreased lung volume

**Tissue Resistance:**
- Friction of tissues sliding
- About 20% of total resistance

### Elastic Properties

**Lung Elastic Recoil:**
- Tendency of lungs to collapse
- Due to elastic fibers and surface tension
- Creates negative intrapleural pressure

**Surfactant:**
- Reduces surface tension
- Made by Type II alveolar cells
- Prevents alveolar collapse
- Reduces work of breathing

### Work of Breathing

**Components:**
- Elastic work (stretching tissues)
- Resistive work (overcoming airway resistance)
- Normally about 5% of total body oxygen consumption

**Increased Work:**
- Restrictive disease: more elastic work
- Obstructive disease: more resistive work
- Can lead to respiratory muscle fatigue`,
      keyTerms: [
        { term: 'compliance', definition: 'A measure of how easily the lungs can be stretched; change in volume per change in pressure' },
        { term: 'resistance', definition: 'Opposition to airflow through the airways' },
        { term: 'elastic recoil', definition: 'The tendency of the lungs to spring back to their resting size' },
        { term: 'surfactant', definition: 'Substance that reduces surface tension in the alveoli, making breathing easier' },
        { term: 'intrapleural pressure', definition: 'The pressure in the space between the lungs and chest wall, normally negative' },
      ],
      analogies: [
        'Compliance is like the stretchiness of a balloon - a high compliance balloon is easy to inflate.',
        'Airway resistance is like water flowing through pipes - narrower pipes have more resistance.',
        'Surfactant is like dish soap in water - it breaks surface tension and makes things easier to expand.',
      ],
      examples: [
        'In pulmonary fibrosis, lung compliance decreases, making it harder to take a deep breath.',
        'During an asthma attack, airway resistance increases dramatically due to bronchoconstriction.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pulmonary mechanics encompasses static and dynamic lung properties, pressure-volume relationships, time constants, and the factors determining airflow limitation.',
      explanation: `## Detailed Pulmonary Mechanics

### Static Lung Properties

**Pressure-Volume Curve:**
- Sigmoid relationship
- Hysteresis between inflation/deflation
- Upper and lower inflection points
- Clinical relevance in ARDS

**Specific Compliance:**
- Compliance normalized to FRC
- Allows size-independent comparison
- CL/FRC approximately 0.05 cmH2O^-1

**Lung Elastic Recoil:**
- Maximum at TLC
- Minimum at RV
- Measured as transpulmonary pressure
- Lost in emphysema

### Surface Tension and Surfactant

**Laplace's Law:**
- P = 2T/r
- Smaller alveoli would collapse into larger ones
- Surfactant prevents this

**Surfactant Composition:**
- 90% lipids (DPPC primary)
- 10% proteins (SP-A, B, C, D)
- Produced by Type II pneumocytes
- Turnover: 10 hours

**Surfactant Functions:**
- Reduces surface tension
- Stabilizes alveoli
- Prevents edema (reduces filtration)
- Immune defense (SP-A, SP-D)

### Airway Dynamics

**Poiseuille's Law:**
- R = 8ηL/πr^4
- Resistance inversely proportional to r^4
- Small radius changes = large resistance changes

**Laminar vs Turbulent Flow:**
- Reynolds number determines transition
- Turbulent in trachea and large airways
- Laminar in small airways
- Turbulence increases resistance

**Equal Pressure Point:**
- During forced expiration
- Point where airway pressure equals pleural
- Downstream airways may collapse
- Limits maximum expiratory flow

### Dynamic Properties

**Time Constants:**
- τ = R × C
- Time to 63% equilibration
- Normal: 0.5 seconds
- Varies by lung region

**Frequency Dependence of Compliance:**
- Dynamic compliance decreases at high rates
- Indicates heterogeneous time constants
- Small airways disease marker

**Dynamic Hyperinflation:**
- Incomplete expiration
- Air trapping
- Increased FRC
- Intrinsic PEEP (auto-PEEP)

### Work of Breathing

**Elastic Work:**
- Area to right of compliance curve
- Increased in restriction
- Proportional to tidal volume

**Resistive Work:**
- Area between curves (hysteresis)
- Increased in obstruction
- Proportional to flow rate

**Optimal Breathing Pattern:**
- Minimizes total work
- Restrictive: small, fast breaths
- Obstructive: large, slow breaths
- Patients naturally adopt optimal pattern

### Flow-Volume Relationships

**Effort-Dependent Portion:**
- Early expiration
- Increasing effort increases flow
- Low lung volumes

**Effort-Independent Portion:**
- After peak flow
- Flow limited by airway compression
- Cannot increase flow with more effort

**Isovolume Pressure-Flow Curve:**
- Flow plateau at high efforts
- Demonstrates flow limitation

### Respiratory System Mechanics

**Chest Wall Mechanics:**
- Tendency to expand at volumes below 75% VC
- Recoil inward above 75% VC
- Equilibrium at FRC

**Interaction with Lungs:**
- Lungs pull in, chest wall pushes out
- Balance determines FRC
- Changes with disease

### Mechanical Ventilation Considerations

**Plateau Pressure:**
- End-inspiratory hold
- Reflects compliance
- Target <30 cmH2O

**Peak Pressure:**
- Maximum during inspiration
- Reflects resistance + compliance
- Affected by flow rate

**Driving Pressure:**
- Plateau pressure minus PEEP
- Strong outcome predictor
- Reflects lung strain`,
      keyTerms: [
        { term: 'time constant', definition: 'Product of resistance and compliance (τ = R × C); time for 63% volume equilibration' },
        { term: 'dynamic hyperinflation', definition: 'Progressive air trapping due to incomplete expiration' },
        { term: 'equal pressure point', definition: 'Location where airway pressure equals pleural pressure during forced expiration' },
        { term: 'driving pressure', definition: 'Plateau pressure minus PEEP; reflects lung strain during mechanical ventilation' },
        { term: 'transpulmonary pressure', definition: 'Difference between alveolar and pleural pressure; reflects lung distending pressure' },
      ],
      clinicalNotes: 'During mechanical ventilation, driving pressure (Plateau - PEEP) correlates more strongly with mortality than either plateau pressure or PEEP alone, and should be kept below 15 cmH2O when possible.',
    },
    4: {
      level: 4,
      summary: 'Advanced respiratory mechanics integrates complex pressure-flow relationships, viscoelastic properties, heterogeneous lung behavior, and sophisticated mechanical ventilation strategies.',
      explanation: `## Advanced Respiratory Mechanics

### Viscoelastic Properties

**Stress Relaxation:**
- Pressure decreases at constant volume
- Time-dependent behavior
- Tissue rearrangement
- Important for plateau pressure measurement

**Stress Adaptation:**
- Volume increases at constant pressure
- Recruitment of atelectatic units
- Surfactant redistribution

**Hysteresis:**
- Inflation-deflation difference
- Energy dissipation
- Surfactant redistribution
- Clinical implications in recruitment

### Heterogeneous Lung Mechanics

**Regional Time Constants:**
- Dependent vs non-dependent regions
- Different R and C values
- Pendelluft phenomenon
- V/Q implications

**Pendelluft:**
- Gas redistribution between lung units
- Occurs with different time constants
- End-inspiratory flow between regions
- May cause regional overdistension

**Atelectrauma and Volutrauma:**
- Cyclic opening/closing injury
- Overdistension injury
- Stress concentration at boundaries
- VILI mechanisms

### Expiratory Flow Limitation

**Wave Speed Theory:**
- Maximum flow = wave speed × cross-sectional area
- Choke point formation
- Independent of driving pressure above critical value

**Negative Effort Dependence:**
- Paradoxical flow decrease with effort
- Severe obstruction
- Dynamic airway compression
- Seen in severe COPD

**Quantifying EFL:**
- Negative expiratory pressure technique
- Flow-volume loop superimposition
- Oscillometry during tidal breathing

### Mechanical Ventilation Physiology

**Equation of Motion:**
- Paw = (V/C) + (Flow × R) + PEEP + PEEPi
- Separating elastic and resistive components
- Monitoring for changes

**End-Inspiratory Occlusion:**
- Ppeak reflects total impedance
- P1 reflects instantaneous elastic pressure
- Pplat reflects static compliance
- P1-Pplat reflects viscoelastic/pendelluft

**Stress and Strain:**
- Stress = transpulmonary pressure
- Strain = ΔV/FRC
- Linked by specific elastance
- Targets for lung protection

### Esophageal Pressure Monitoring

**Technique:**
- Balloon catheter in esophagus
- Surrogate for pleural pressure
- Transpulmonary pressure calculation
- Pes = Ppl approximation

**Applications:**
- PEEP titration (PL > 0)
- Separating lung vs chest wall
- Work of breathing measurement
- Inspiratory effort assessment

**Limitations:**
- Regional pleural pressure variation
- Mediastinal weight effect
- Cardiac artifacts
- Positioning sensitivity

### Work of Breathing Analysis

**Pressure-Volume Loops:**
- Inspiratory work = area under curve
- Campbell diagram
- Separating elastic and resistive work

**Patient-Ventilator Interaction:**
- Trigger delay and work
- Cycling asynchrony
- Flow starvation
- Wasted efforts

**Respiratory Muscle Load:**
- P0.1 (airway occlusion at 100ms)
- Pressure-time product
- Diaphragm ultrasound
- Predicting weaning success

### ARDS Mechanics

**Baby Lung Concept:**
- Small aerated lung volume
- Normal specific compliance
- Concentrated stress
- Low tidal volumes essential

**Recruitment and Derecruitment:**
- Opening pressures heterogeneous
- Closing pressures lower
- PEEP maintains recruitment
- Personalized approach needed

**Prone Position Mechanics:**
- Reduced pleural pressure gradient
- More homogeneous ventilation
- Increased FRC
- Improved drainage

### Neurally Adjusted Ventilation

**NAVA Concept:**
- Diaphragm electrical activity (EAdi)
- Proportional assist
- Neural triggering and cycling
- Improved synchrony

**Clinical Applications:**
- Patient-ventilator asynchrony
- Weaning assessment
- Diaphragm monitoring
- Sedation reduction potential`,
      keyTerms: [
        { term: 'stress relaxation', definition: 'Time-dependent decrease in pressure at constant volume reflecting viscoelastic properties' },
        { term: 'pendelluft', definition: 'Redistribution of gas between lung units with different time constants' },
        { term: 'equation of motion', definition: 'Mathematical description relating pressure, volume, flow, compliance, and resistance' },
        { term: 'baby lung', definition: 'Concept that in ARDS the aerated lung is small with relatively normal mechanics, requiring lower tidal volumes' },
        { term: 'NAVA', definition: 'Neurally Adjusted Ventilatory Assist; ventilator mode triggered and cycled by diaphragm electrical activity' },
      ],
      clinicalNotes: 'In ARDS, esophageal manometry can guide PEEP setting to achieve positive transpulmonary pressure, potentially improving oxygenation while avoiding overdistension. However, clinical outcomes data are still evolving.',
    },
    5: {
      level: 5,
      summary: 'Expert-level respiratory mechanics encompasses cutting-edge research, personalized mechanical ventilation strategies, advanced monitoring technologies, and integration with molecular and computational approaches.',
      explanation: `## Expert Respiratory Mechanics

### Molecular Mechanisms of Lung Mechanics

**Extracellular Matrix:**
- Elastin provides recoil
- Collagen provides structural limit
- Proteoglycan ground substance
- Matrix metalloproteinases in remodeling

**Surfactant Metabolism:**
- Type II cell secretion pathways
- Surfactant protein genetics
- SP-B and SP-C mutations
- Therapeutic surfactant development

**Mechanotransduction:**
- Cellular response to stretch
- Integrin signaling
- Ion channel activation
- Gene expression changes
- VILI molecular mechanisms

### Advanced Imaging of Mechanics

**Electrical Impedance Tomography (EIT):**
- Real-time regional ventilation
- PEEP titration
- Pendelluft detection
- Recruitment assessment

**4D-CT Ventilation:**
- Registration-based ventilation imaging
- Regional time constants
- Heterogeneity quantification
- Preoperative assessment

**Lung Ultrasound Mechanics:**
- Diaphragm thickness/thickening
- Lung sliding
- B-lines for edema
- Pleural movement

### Personalized Mechanical Ventilation

**Physiological Phenotyping:**
- ARDS subphenotypes
- Recruitability assessment
- Response to interventions
- Biomarker integration

**Recruitment Strategies:**
- Staircase recruitment
- Decremental PEEP trial
- EIT-guided optimization
- Individual thresholds

**Driving Pressure Optimization:**
- Mortality association
- Component of mechanical power
- Integration with compliance
- Personalized targets

### Mechanical Power Concept

**Definition:**
- Energy delivered to respiratory system per minute
- J/min = 0.098 × RR × VT × (Ppeak - ΔP/2)
- Simplified: 0.098 × RR × VT × (PEEP + ΔP/2 + Flow × R)

**Clinical Implications:**
- Unified VILI risk metric
- Combines volume, pressure, rate
- Threshold approximately 12-17 J/min
- Normalizing to lung size

**Components:**
- Elastic power (compliance-related)
- Resistive power (resistance-related)
- PEEP power
- Relative contributions vary

### Negative Pressure Ventilation

**Iron Lung Physiology:**
- Subatmospheric chest pressure
- Physiological inspiration pattern
- Preserved venous return
- Historical and emerging applications

**Modern Applications:**
- Cuirass ventilators
- Home ventilation option
- Neuromuscular disease
- Weaning adjunct

### Spontaneous Breathing in ARDS

**Benefits:**
- Preserved diaphragm function
- Improved V/Q matching
- Hemodynamic advantages
- Earlier weaning

**Risks:**
- Patient self-inflicted lung injury (P-SILI)
- Excessive effort
- Pendelluft
- Inflammatory amplification

**Monitoring Effort:**
- Esophageal pressure swings
- P0.1 measurement
- Diaphragm ultrasound
- EAdi trending

### Extracorporeal Support Integration

**VV-ECMO Mechanics:**
- Ultra-protective ventilation
- "Lung rest" strategy
- Near-apneic ventilation
- Monitoring native lung

**ECCO2R:**
- Hypercapnic failure focus
- COPD applications
- Low-flow systems
- Mechanical ventilation reduction

### Computational Modeling

**Finite Element Analysis:**
- Regional stress/strain
- Injury prediction
- Ventilator setting optimization
- Patient-specific modeling

**CFD for Airways:**
- Flow patterns
- Aerosol deposition
- Regional resistance
- Surgical planning

**Machine Learning:**
- Pattern recognition
- Outcome prediction
- Optimal setting algorithms
- Real-time adaptation

### Research Frontiers

**Biological Markers of Strain:**
- Plasma biomarkers
- Receptor for advanced glycation end products
- Surfactant proteins
- Cell-free DNA

**Novel Monitoring:**
- Continuous compliance measurement
- Stress distribution imaging
- Real-time heterogeneity
- AI-driven optimization

**Emerging Therapies:**
- Stem cell approaches
- Gene therapy for surfactant disorders
- Targeted molecular interventions
- Bioengineered lung scaffolds

### Global Standards and Practice

**ARDSnet Legacy:**
- Low tidal volume standard
- Driving pressure evolution
- Ongoing refinement

**Prone Positioning Evidence:**
- PROSEVA trial impact
- Duration optimization
- Mechanism understanding
- Implementation science

**Neuromuscular Blockade:**
- ACURASYS and ROSE trials
- Patient selection
- Duration considerations
- Integrated care bundles`,
      keyTerms: [
        { term: 'mechanical power', definition: 'Energy delivered to the respiratory system per unit time; unified VILI risk metric' },
        { term: 'mechanotransduction', definition: 'Cellular signaling in response to mechanical forces' },
        { term: 'P-SILI', definition: 'Patient self-inflicted lung injury; injury from excessive spontaneous breathing effort' },
        { term: 'EIT', definition: 'Electrical impedance tomography; bedside imaging of regional ventilation' },
        { term: 'ECCO2R', definition: 'Extracorporeal carbon dioxide removal; low-flow system for CO2 clearance' },
      ],
      clinicalNotes: `Key clinical insights in respiratory mechanics:

1. **Mechanical power:** Emerging evidence suggests normalizing mechanical power to predicted body weight or compliant lung volume may better identify VILI risk thresholds.

2. **Driving pressure:** In ARDS, keeping driving pressure <15 cmH2O may be more important than specific PEEP or VT targets, as it reflects strain on the baby lung.

3. **P-SILI concept:** Strong spontaneous efforts can generate harmful transpulmonary pressures. Monitoring esophageal pressure or diaphragm ultrasound helps identify at-risk patients.

4. **EIT utility:** Real-time regional ventilation monitoring enables personalized PEEP titration, identifying the balance between recruitment and overdistension.

5. **Prone positioning:** Beyond oxygenation improvement, prone position creates more homogeneous mechanics, reducing the stress concentration at dependent-nondependent boundaries.

6. **Diaphragm protection:** Both underuse (ventilator-induced diaphragm dysfunction) and overuse (injury from excessive loading) can impair diaphragm function. Targeting intermediate effort levels may be optimal.

7. **Esophageal manometry:** While promising for transpulmonary pressure-guided ventilation, interpretation requires understanding of limitations including cardiac artifacts and regional pleural pressure variability.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'hess-mechanics',
      type: 'textbook',
      title: 'Respiratory Care: Principles and Practice',
      authors: ['Hess DR', 'MacIntyre NR', 'Galvin WF'],
      source: 'Jones and Bartlett',
    },
    {
      id: 'gattinoni-mechanical-power',
      type: 'article',
      title: 'Ventilator-related Causes of Lung Injury: The Mechanical Power',
      authors: ['Gattinoni L', 'Tonetti T', 'Cressoni M', 'et al.'],
      source: 'Intensive Care Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'respiratory-lung-function', targetType: 'concept', relationship: 'related', label: 'Lung Function' },
    { targetId: 'respiratory-gas-exchange', targetType: 'concept', relationship: 'related', label: 'Gas Exchange' },
    { targetId: 'condition-ards', targetType: 'condition', relationship: 'related', label: 'ARDS' },
    { targetId: 'critical-care-mechanical-ventilation', targetType: 'concept', relationship: 'related', label: 'Mechanical Ventilation' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['physiology', 'pulmonology', 'critical-care'],
    keywords: ['compliance', 'resistance', 'work of breathing', 'surfactant', 'mechanical ventilation', 'PEEP'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pulmonology', 'anesthesia'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default respiratoryMechanicsContent;
