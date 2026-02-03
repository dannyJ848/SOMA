/**
 * Respiratory Control - Comprehensive Educational Content
 *
 * Covers brainstem respiratory centers, central and peripheral chemoreceptors,
 * the Hering-Breuer reflex, sleep-related breathing control, and clinical
 * disorders of respiratory regulation.
 */

import { EducationalContent } from '../../types';

export const respiratoryControl: EducationalContent = {
  id: 'physiology-respiratory-control',
  type: 'process',
  name: 'Respiratory Control',
  alternateNames: ['Neural Control of Breathing', 'Respiratory Regulation', 'Breathing Control'],

  levels: {
    1: {
      level: 1,
      summary: 'Your brain automatically controls your breathing so you get the right amount of oxygen and get rid of carbon dioxide, even while you sleep.',
      explanation: `## How Does Your Brain Control Breathing?

### Breathing Happens Automatically

You don't have to think about breathing -- it just happens! Your brain has a special area that sends signals to your breathing muscles, telling them when to breathe in and when to breathe out. This works even when you're sleeping.

### Your Brain Watches Your Blood

Your brain is always checking the air in your blood:
- **Too much carbon dioxide?** Your brain tells you to breathe faster and deeper to blow it off
- **Not enough oxygen?** Your brain also speeds up your breathing
- **Just right?** Your brain keeps your breathing calm and steady

Carbon dioxide is actually the **main thing** your brain watches. That's why holding your breath gets uncomfortable -- carbon dioxide builds up and your brain tells you to breathe!

### You Can Also Control Your Breathing

Even though breathing is automatic, you can take over:
- You can hold your breath (for a little while!)
- You can breathe faster or slower on purpose
- You can take a deep breath before blowing out birthday candles

But your brain's automatic system always wins in the end. If you hold your breath too long, your brain will make you gasp for air.

### Why Does This Matter?

Your brain's breathing control center keeps you alive 24 hours a day. It adjusts your breathing for everything you do:
- **Exercising**: Breathing gets faster and deeper
- **Sleeping**: Breathing slows down and becomes regular
- **Talking or singing**: Your brain coordinates breathing with your voice
- **Going to high places**: Your brain adjusts to thinner air on mountains`,
      keyTerms: [
        { term: 'brainstem', definition: 'The lower part of your brain that controls automatic functions like breathing, heart rate, and blood pressure' },
        { term: 'carbon dioxide', definition: 'A waste gas your body makes that your brain monitors to control how fast you breathe' },
        { term: 'automatic breathing', definition: 'Breathing that happens without you having to think about it, controlled by your brainstem' },
        { term: 'oxygen', definition: 'The gas in air that your body needs to make energy; your brain watches its level in your blood' },
      ],
      analogies: [
        'Your brainstem breathing center is like a thermostat for your lungs -- it automatically adjusts how fast and deep you breathe to keep your blood gases just right.',
        'Carbon dioxide building up is like a smoke detector going off -- it triggers your brain to make you breathe faster to clear the air.',
        'Holding your breath is like holding a ball underwater -- you can do it for a while, but eventually the automatic system takes over and it pops back up.',
      ],
      examples: [
        'When you run fast, you start breathing harder without deciding to -- your brain detects more carbon dioxide from your working muscles and speeds up your breathing.',
        'When you go to sleep, your breathing slows down because your body is resting and making less carbon dioxide.',
        'Mountain climbers breathe faster at high altitude because there is less oxygen in the air, and their brain adjusts automatically.',
      ],
    },
    2: {
      level: 2,
      summary: 'Breathing is controlled by respiratory centers in the brainstem that generate rhythmic breathing patterns, with chemoreceptors in the brain and blood vessels monitoring CO2, O2, and pH to adjust ventilation.',
      explanation: `## Neural Control of Breathing

### Brainstem Respiratory Centers

The brainstem contains groups of neurons that control breathing:

**1. Medullary Respiratory Center**

This is the main breathing center, located in the medulla oblongata (lower brainstem):

- **Dorsal Respiratory Group (DRG)**:
  - Controls inspiration (breathing in)
  - Sends signals to the diaphragm via the phrenic nerve
  - Sets the basic breathing rhythm

- **Ventral Respiratory Group (VRG)**:
  - Active during forced breathing
  - Controls both inspiration and expiration
  - Activates accessory muscles when you need more air

**2. Pontine Respiratory Centers**

Located in the pons (upper brainstem), these fine-tune the breathing pattern:

- **Pneumotaxic center**: Limits inspiration, helps control breathing rate
- **Apneustic center**: Promotes deep, prolonged inspiration (usually kept in check by the pneumotaxic center)

### Chemoreceptors: The Sensors

**Central Chemoreceptors (in the brainstem):**
- Detect changes in **CO2** (actually H+ ions from CO2)
- Located on the ventral surface of the medulla
- **Most important** driver of normal breathing
- CO2 crosses the blood-brain barrier, converts to H+, stimulates breathing

**Peripheral Chemoreceptors (in blood vessels):**
- **Carotid bodies**: At the bifurcation of the common carotid arteries
  - Detect low O2, high CO2, and low pH
  - Signal via the glossopharyngeal nerve (CN IX)
  - **Main sensors for oxygen levels**

- **Aortic bodies**: In the aortic arch
  - Similar function but less important
  - Signal via the vagus nerve (CN X)

### What Drives Breathing?

| Stimulus | Importance | Detected By |
|----------|-----------|-------------|
| CO2 (via H+) | Primary driver | Central chemoreceptors |
| O2 | Secondary driver | Peripheral chemoreceptors (carotid bodies) |
| pH (H+) | Modulates both | Central + peripheral |

**Key point**: CO2 is the main stimulus for breathing, not oxygen!
- A small rise in CO2 (even 2-3 mmHg) strongly increases ventilation
- Oxygen only becomes a significant driver when it drops significantly (below ~60 mmHg)

### Other Inputs to Breathing

- **Lung stretch receptors**: Prevent over-inflation (Hering-Breuer reflex)
- **Irritant receptors**: Trigger coughing, sneezing
- **Joint and muscle receptors**: Increase breathing during exercise
- **Cortex**: Voluntary control (holding breath, speaking)
- **Hypothalamus**: Emotional responses (gasping with surprise)

### Altitude Acclimatization

When you go to high altitude:
1. Low oxygen stimulates peripheral chemoreceptors
2. Breathing increases (hyperventilation)
3. CO2 is blown off, causing respiratory alkalosis
4. Over days, the kidneys excrete bicarbonate to normalize pH
5. This allows continued hyperventilation without alkalosis
6. More red blood cells are produced (EPO) over weeks`,
      keyTerms: [
        { term: 'medulla oblongata', definition: 'Lower brainstem region containing the dorsal and ventral respiratory groups that generate the basic breathing rhythm', pronunciation: 'meh-DUH-lah ob-long-GAH-tah' },
        { term: 'chemoreceptor', definition: 'A sensor that detects chemical changes (CO2, O2, pH) in the blood or cerebrospinal fluid and signals the brain to adjust breathing', pronunciation: 'KEE-moh-ree-SEP-tor' },
        { term: 'carotid body', definition: 'Peripheral chemoreceptor at the carotid artery bifurcation; the main sensor for blood oxygen levels', pronunciation: 'kah-ROT-id' },
        { term: 'phrenic nerve', definition: 'Nerve from spinal cord levels C3-C5 that controls the diaphragm; "C3, 4, 5 keeps the diaphragm alive"' },
        { term: 'Hering-Breuer reflex', definition: 'Reflex that stops inspiration when the lungs are stretched, preventing over-inflation' },
        { term: 'blood-brain barrier', definition: 'Selective barrier separating blood from brain tissue; CO2 crosses easily but H+ ions cannot' },
      ],
      analogies: [
        'The brainstem respiratory center is like an autopilot for breathing -- it keeps everything running smoothly without conscious effort, but you can override it temporarily.',
        'Chemoreceptors are like smoke detectors for your blood -- they constantly monitor for dangerous levels of CO2 or low oxygen and sound the alarm to breathe more.',
        'The carotid body is like an oxygen sensor on a furnace -- it detects when oxygen is getting low and triggers a response to get more air flowing.',
      ],
    },
    3: {
      level: 3,
      summary: 'Respiratory rhythm generation involves the pre-Botzinger complex and brainstem neural networks, with ventilatory drive modulated by central chemoreceptors (medullary H+ sensing), peripheral chemoreceptors (carotid body O2/CO2/pH sensing), and mechanoreceptor feedback, integrating multiple inputs to match ventilation to metabolic demand.',
      explanation: `## Respiratory Rhythm Generation

### Pre-Botzinger Complex

The **pre-Botzinger complex (preBotC)** is the core respiratory rhythm generator:

- Located in the ventrolateral medulla, rostral to the obex
- Contains pacemaker neurons that generate inspiratory bursts
- Neurokinin-1 receptor (NK1R) expressing neurons are essential
- Destruction of preBotC abolishes rhythmic breathing in animal models
- Uses both pacemaker properties and network interactions

**Rhythm generation models:**
1. **Pacemaker hypothesis**: Individual neurons have intrinsic oscillatory properties
   - Persistent sodium currents (INaP)
   - Calcium-activated nonselective cation currents (ICAN)
2. **Network hypothesis**: Rhythm emerges from synaptic interactions
3. **Hybrid model** (current consensus): Both mechanisms contribute

### Brainstem Respiratory Groups

**Dorsal Respiratory Group (DRG):**
- Located in the nucleus tractus solitarius (NTS)
- Receives afferent input from:
  - Vagus nerve (CN X): Lung stretch receptors, aortic chemoreceptors
  - Glossopharyngeal nerve (CN IX): Carotid body chemoreceptors
- Projects to contralateral phrenic motor neurons
- Primarily inspiratory neurons

**Ventral Respiratory Group (VRG):**
- Extends along the ventrolateral medulla
- Contains multiple subdivisions:

| Region | Location | Function |
|--------|----------|----------|
| Botzinger complex | Rostral | Expiratory neurons, inhibit inspiration |
| Pre-Botzinger complex | Sub-Botzinger | Rhythm generator |
| Rostral VRG (rVRG) | Below preBotC | Inspiratory premotor neurons |
| Caudal VRG (cVRG) | Caudal medulla | Expiratory premotor neurons |

**Pontine Respiratory Group:**
- **Pneumotaxic center (Kolliker-Fuse and medial parabrachial nuclei)**:
  - Modulates inspiratory duration
  - Lesion causes apneusis (prolonged inspiration)
  - Fine-tunes respiratory pattern
- **Apneustic center**:
  - Less well-defined anatomically
  - Promotes inspiration
  - Normally inhibited by pneumotaxic center and vagal afferents

### Central Chemoreception

**Location**: Ventral medullary surface (retrotrapezoid nucleus/parafacial region - RTN/pFRG)

**Mechanism:**
1. Arterial PCO2 rises
2. CO2 crosses blood-brain barrier freely (lipid-soluble)
3. CO2 + H2O -> H2CO3 -> H+ + HCO3- (in CSF)
4. H+ stimulates central chemoreceptors
5. Ventilation increases

**Key features:**
- Responds to **CSF pH/H+**, not CO2 directly
- CO2 crosses BBB rapidly; HCO3- and H+ do not
- CSF has minimal protein buffering, so pH changes are amplified
- Accounts for ~80% of the ventilatory response to CO2
- Response time: 1-2 minutes (slower than peripheral)

**CO2 ventilatory response curve:**
- Linear relationship between PaCO2 and minute ventilation
- Slope: ~2-3 L/min per mmHg CO2
- Shifted left by hypoxia (sensitized)
- Shifted right by sleep, sedatives, opioids (blunted)

### Peripheral Chemoreception

**Carotid Bodies:**
- Located at the bifurcation of common carotid arteries
- Type I (glomus) cells: Chemosensory cells
- Type II (sustentacular) cells: Supporting cells
- Afferent: Glossopharyngeal nerve (CN IX, Hering nerve)
- Extremely high blood flow per gram of tissue (2000 mL/100g/min)

**Sensing mechanism:**
1. Low PaO2 inhibits K+ channels on glomus cells
2. Cell membrane depolarizes
3. Voltage-gated Ca2+ channels open
4. Neurotransmitter release (dopamine, acetylcholine, ATP)
5. Afferent nerve firing increases

**Response characteristics:**
- Responds to PaO2 (dissolved O2), not O2 content or SaO2
- Minimal response above PaO2 of ~60 mmHg
- Exponential increase in firing below PaO2 of 60 mmHg
- Also responds to increased PaCO2, decreased pH
- Response time: Seconds (fast)

**CO2 and O2 interaction:**
- Hypoxia sensitizes the CO2 response (multiplicative interaction)
- Combined hypoxia + hypercapnia produces greater response than sum of individual stimuli

### Hering-Breuer Reflex

**Inflation reflex:**
- Lung stretch activates slowly adapting pulmonary stretch receptors (SARs)
- SARs located in airway smooth muscle
- Afferent pathway: Vagus nerve
- Effect: Terminates inspiration, promotes expiration
- More active in infants; requires larger tidal volumes in adults (~1L)

**Deflation reflex:**
- Lung deflation stimulates rapidly adapting receptors (RARs)
- Effect: Promotes inspiratory activity, sighing
- Helps prevent atelectasis

### Altitude Acclimatization: Detailed Mechanism

**Acute (hours to days):**
1. Peripheral chemoreceptor stimulation (low PaO2)
2. Hyperventilation with respiratory alkalosis
3. Alkalosis initially limits further hyperventilation (brakes on)

**Subacute (2-7 days):**
4. Renal HCO3- excretion normalizes CSF and blood pH
5. CSF HCO3- also decreases (choroid plexus transport)
6. Central chemoreceptors "reset" to lower PCO2
7. Further hyperventilation now possible

**Chronic (weeks to months):**
8. Erythropoietin release increases RBC production
9. 2,3-DPG increases (right-shifts oxyhemoglobin curve)
10. Pulmonary vasculature remodeling
11. Capillary density increases in tissues

**Ventilatory acclimatization paradox:**
- At altitude, ventilation continues to increase over days
- This occurs even though PaO2 has improved from initial hyperventilation
- Explained by CSF pH normalization allowing central chemoreceptor re-engagement`,
      keyTerms: [
        { term: 'pre-Botzinger complex', definition: 'The core respiratory rhythm generator in the ventrolateral medulla; contains pacemaker neurons with intrinsic oscillatory properties essential for inspiratory burst generation', pronunciation: 'pray-BET-zinger' },
        { term: 'retrotrapezoid nucleus', definition: 'Key central chemoreceptor site on the ventral medullary surface; contains PHOX2B-expressing neurons that sense CO2/H+ changes in CSF' },
        { term: 'glomus cells', definition: 'Type I chemosensory cells in the carotid body that detect hypoxia via K+ channel inhibition and signal via neurotransmitter release' },
        { term: 'slowly adapting stretch receptors', definition: 'Mechanoreceptors in airway smooth muscle that sense lung inflation and mediate the Hering-Breuer reflex via vagal afferents' },
        { term: 'apneusis', definition: 'Abnormal prolonged inspiratory gasps caused by loss of pneumotaxic center input to the medullary respiratory groups' },
        { term: 'ventilatory acclimatization', definition: 'Progressive increase in ventilation at altitude over days, enabled by renal and CSF bicarbonate adjustments that allow sustained hyperventilation' },
      ],
      clinicalNotes: 'The CO2 ventilatory response curve is clinically important. Opioids flatten the curve (reduced sensitivity), explaining respiratory depression. In COPD with chronic hypercapnia, central chemoreceptors may reset to higher PCO2 baselines; these patients may rely on hypoxic drive (peripheral chemoreceptors). Excessive O2 administration can suppress this drive, worsening hypoventilation -- though the Haldane effect and V/Q redistribution are now considered more important mechanisms than simple suppression of hypoxic drive.',
    },
    4: {
      level: 4,
      summary: 'Respiratory control involves complex oscillator networks, state-dependent modulation during sleep, reflex integration through the Hering-Breuer pathway, and pathological patterns including Cheyne-Stokes breathing, with clinical implications for mechanical ventilation, sedation, and altitude medicine.',
      explanation: `## Advanced Respiratory Control

### Respiratory Oscillator Models

**Three-Phase Model of Breathing:**

The respiratory cycle is divided into three neural phases:
1. **Inspiration (I)**: Active diaphragmatic contraction
2. **Post-inspiration (PI/E1)**: Passive expiration with laryngeal braking
3. **Active expiration (E2)**: Abdominal and internal intercostal recruitment

**Neural populations for each phase:**

| Phase | Key Neurons | Location | Neurotransmitter |
|-------|------------|----------|------------------|
| Inspiration | Pre-I/I neurons | PreBotC | Glutamate |
| Post-inspiration | Post-I neurons | BotC | GABA/Glycine |
| Active expiration | Late-E neurons | pFRG/RTN | Glutamate |

**Conditional oscillator hypothesis:**
- The preBotC generates the inspiratory rhythm constitutively
- The expiratory oscillator (pFRG/RTN) is conditionally active
- Activated by increased metabolic demand, hypercapnia, exercise
- Explains transition from passive to active expiration

### Hering-Breuer Reflex: Detailed Circuitry

**Slowly Adapting Receptors (SARs):**
- Located in airway smooth muscle, trachea to bronchioles
- Activated by sustained lung distension
- Afferent fibers: Myelinated vagal Abeta fibers
- Central projection: Nucleus tractus solitarius
- Relay: Pump cells in NTS inhibit DRG inspiratory neurons
- Output: Terminates inspiration (inspiratory off-switch)

**Clinical significance:**
- Contributes to tidal volume regulation
- Threshold higher in adults than neonates
- Bilateral vagotomy: Slow, deep breathing (apneustic pattern)
- Active during mechanical ventilation (ventilator cycling)
- May contribute to ventilator-induced lung protection

**Rapidly Adapting Receptors (RARs):**
- Located in airway epithelium
- Respond to rapid changes in volume, irritants
- Mediate: Coughing, bronchoconstriction, mucus secretion
- Afferent: Myelinated vagal fibers
- Adapt rapidly (<2 seconds)

**C-Fiber Receptors (J receptors):**
- Unmyelinated vagal afferents
- Pulmonary C-fibers: Alveolar walls, near capillaries
- Bronchial C-fibers: Airway mucosa
- Stimulated by: Pulmonary edema, chemical irritants, capsaicin
- Responses: Rapid shallow breathing, apnea, bronchoconstriction
- May contribute to dyspnea in pulmonary edema and PE

### Sleep-Related Breathing Control

**NREM Sleep:**
- Withdrawal of wakefulness drive (reticular activating system)
- Ventilation decreases 10-15%
- PaCO2 rises 2-8 mmHg
- Upper airway muscle tone decreases
- Apneic threshold: PaCO2 below which breathing stops
  - 2-6 mmHg below eupneic level
  - Relevant to central apneas during sleep transitions

**REM Sleep:**
- Irregular breathing pattern
- Atonia of accessory respiratory muscles
- Diaphragm function preserved
- Ventilatory responses to hypoxia and hypercapnia blunted
- Most obstructive apneas occur in REM

**Loop Gain Concept:**
- Loop gain = magnitude of ventilatory response / magnitude of disturbance
- High loop gain: Overshoot → undershoot → oscillation (Cheyne-Stokes)
- Components:
  - **Controller gain**: Chemoreceptor sensitivity
  - **Plant gain**: Efficiency of CO2 elimination per unit ventilation
  - **Circulatory delay**: Time for blood to travel from lung to chemoreceptors

### Cheyne-Stokes Breathing

**Pattern:** Crescendo-decrescendo tidal volumes alternating with central apneas

**Mechanism:**
1. High controller gain (sensitized chemoreceptors)
2. Increased circulatory delay (low cardiac output)
3. Transient disturbance lowers PaCO2 below apneic threshold
4. Apnea → PaCO2 rises
5. Delayed detection → overshooting ventilatory response
6. PaCO2 falls again below threshold → repeat cycle

**Cycle length:**
- Related to circulatory time
- Longer in more severe heart failure
- Typically 45-90 seconds

**Clinical associations:**
- Heart failure (30-40% of patients)
- Stroke
- High-altitude periodic breathing (similar mechanism)
- Associated with poor prognosis in heart failure

### Central Apnea Syndromes

**Causes:**
1. **High loop gain**: CHF, altitude
2. **Impaired respiratory drive**: Brainstem lesions, opioids
3. **Treatment-emergent**: CPAP therapy (complex sleep apnea)

**Opioid-induced respiratory depression:**
- Dose-dependent suppression of:
  - Respiratory rate (primary effect)
  - Tidal volume
  - Hypercapnic ventilatory response
  - Hypoxic ventilatory response
- Mu receptor activation in:
  - PreBotC (rhythm disruption)
  - RTN (chemoreception blunting)
  - NTS (reflex integration)
- Naloxone reversal via competitive antagonism

### Respiratory Pattern Abnormalities

| Pattern | Description | Localization |
|---------|-------------|--------------|
| Cheyne-Stokes | Crescendo-decrescendo with apneas | Bilateral cortical or CHF |
| Central neurogenic hyperventilation | Sustained rapid deep breathing | Midbrain/upper pons |
| Apneustic | Prolonged inspiratory pauses | Lower pons |
| Cluster breathing | Clusters of breaths with irregular pauses | Lower pons/upper medulla |
| Ataxic (Biot's) | Completely irregular | Medulla |
| Agonal | Gasping, irregular | Severe medullary dysfunction |

### Exercise Hyperpnea

**The exercise stimulus problem:**
- Ventilation increases immediately with exercise onset
- PaCO2, PaO2, pH remain remarkably constant during moderate exercise
- No single chemoreceptor mechanism explains this

**Contributing mechanisms:**
1. **Central command**: Cortical motor signals to respiratory centers
2. **Muscle afferents**:
   - Group III (mechanoreceptors): Respond to muscle contraction
   - Group IV (metaboreceptors): Respond to metabolic products
3. **Peripheral chemoreceptors**: Oscillatory CO2 detection
4. **Body temperature**: Rising temp increases ventilation
5. **Potassium**: K+ release from exercising muscle stimulates carotid body

**Anaerobic threshold:**
- Above AT, lactate production increases
- Additional CO2 from bicarbonate buffering (CO2 = HCO3- + H+)
- Further ventilatory stimulus
- V/VCO2 slope increases (ventilatory efficiency decreases)`,
      keyTerms: [
        { term: 'loop gain', definition: 'Ratio of ventilatory response to ventilatory disturbance; determines stability of breathing control; high loop gain promotes periodic breathing patterns' },
        { term: 'apneic threshold', definition: 'The PaCO2 level below which breathing ceases during sleep; typically 2-6 mmHg below the eupneic setpoint' },
        { term: 'conditional oscillator', definition: 'The expiratory rhythm generator (pFRG/RTN) that activates only under conditions of increased ventilatory demand, enabling active expiration' },
        { term: 'J receptors', definition: 'Pulmonary C-fiber endings near alveolar capillaries; stimulated by pulmonary edema, causing rapid shallow breathing and dyspnea' },
        { term: 'exercise hyperpnea', definition: 'The increase in ventilation during exercise; driven by central command, muscle afferents, and oscillatory chemoreceptor signaling rather than simple chemoreceptor activation' },
        { term: 'Cheyne-Stokes breathing', definition: 'Periodic breathing with crescendo-decrescendo tidal volumes alternating with central apneas; caused by high loop gain and prolonged circulatory delay in heart failure' },
      ],
      clinicalNotes: 'Understanding loop gain is clinically actionable in sleep medicine. In patients with central sleep apnea, treatments target loop gain components: supplemental O2 reduces controller gain, acetazolamide lowers plant gain by metabolic acidosis, and adaptive servo-ventilation (ASV) dampens the oscillatory pattern. However, ASV is contraindicated in HFrEF (SERVE-HF trial showed increased mortality). Opioid-induced central apnea presents a distinct challenge: naloxone reverses acute depression, but chronic opioid use requires careful dose reduction and may benefit from non-invasive positive pressure ventilation.',
    },
    5: {
      level: 5,
      summary: 'Contemporary respiratory control science encompasses genetic determinants of respiratory drive (PHOX2B mutations in congenital central hypoventilation), phrenic nerve pacing technology, respiratory failure phenotyping based on control of breathing physiology, and the physiological basis of high-flow nasal cannula therapy.',
      explanation: `## Precision Respiratory Control

### Congenital Central Hypoventilation Syndrome (CCHS)

**Genetics:**
- Autosomal dominant (most de novo mutations)
- PHOX2B gene mutations (chromosome 4p13)
- Polyalanine repeat expansion mutations (PARMs): 90% of cases
  - Normal: 20 alanines
  - Disease: 24-33 alanines (longer = more severe)
- Non-polyalanine repeat mutations (NPARMs): 10%
  - Frameshift, missense, nonsense
  - Associated with Hirschsprung disease and neural crest tumors

**Pathophysiology:**
- PHOX2B is a transcription factor for autonomic nervous system development
- Required for development of:
  - RTN/pFRG chemosensory neurons
  - Carotid body glomus cells
  - Autonomic ganglia
- Mutant PHOX2B fails to drive RTN neuron specification
- Loss of central CO2 chemosensitivity

**Clinical features:**
- Absent or markedly diminished ventilatory response to CO2
- Adequate breathing while awake (cortical input compensates)
- Hypoventilation during sleep (especially NREM)
- Severe mutations: 24/7 ventilatory dependence
- Associated features: Hirschsprung disease, neuroblastoma, cardiac rhythm disturbances

**Genotype-phenotype correlation:**

| PHOX2B Mutation | Severity | Ventilatory Need |
|-----------------|----------|------------------|
| 20/25 PARM | Mild | Sleep ventilation only |
| 20/26 PARM | Moderate | Sleep ventilation; some need 24/7 |
| 20/27+ PARM | Severe | Often 24/7 ventilation |
| NPARM | Variable, often severe | High risk of neural crest tumors |

### Phrenic Nerve Pacing

**Indications:**
- CCHS (preferred long-term solution in appropriate patients)
- High cervical spinal cord injury (C1-C2)
- Central hypoventilation of other etiologies

**Techniques:**

**1. Direct phrenic nerve stimulation:**
- Electrodes implanted on phrenic nerve in thorax
- Requires intact phrenic nerve and diaphragm
- Bilateral stimulation preferred
- Risk: Phrenic nerve damage during implantation

**2. Diaphragm pacing (intramuscular electrodes):**
- Laparoscopic electrode implantation into diaphragm motor points
- Maps optimal stimulation sites intraoperatively
- Less risk to phrenic nerve itself
- FDA-approved for SCI and ALS (humanitarian use)

**Stimulation parameters:**
- Frequency: 7-12 Hz (low frequency to prevent fatigue)
- Conditioning period: 2-4 weeks to build endurance
- Gradual increase in pacing duration
- Monitor for diaphragm fatigue (decreased tidal volume)

**Outcomes:**
- CCHS: Can provide full-time ventilatory support
- Improved quality of life vs. tracheostomy/ventilator
- SCI: Reduces ventilator dependence
- Limitations: Cannot respond to metabolic demands (fixed rate)

### Respiratory Failure Phenotyping

**Type 1 (Hypoxemic) vs. Type 2 (Hypercapnic) Respiratory Failure:**

| Feature | Type 1 | Type 2 |
|---------|--------|--------|
| PaO2 | Low | Low |
| PaCO2 | Normal or low | Elevated (>45 mmHg) |
| Mechanism | V/Q mismatch, shunt | Pump failure, drive failure |
| Control of breathing | Drive intact, lungs fail | Drive or pump fails |

**Control-of-Breathing-Based Phenotyping:**

**1. Drive failure:**
- Central hypoventilation (CCHS, brainstem lesion)
- Drug-induced (opioids, sedatives)
- Obesity hypoventilation (reduced drive + mechanical load)
- Metabolic alkalosis (suppressed drive)

**2. Neuromuscular pump failure:**
- Phrenic nerve injury
- Myasthenia gravis, Guillain-Barre
- Critical illness polyneuropathy/myopathy
- Diaphragm fatigue

**3. Mechanical load imbalance:**
- COPD exacerbation (increased resistance, hyperinflation)
- Severe obesity (reduced compliance)
- Chest wall restriction
- Dynamic hyperinflation

**4. Increased dead space ventilation:**
- Pulmonary embolism
- ARDS (microvascular thrombosis)
- COPD (V/Q mismatch)

### High-Flow Nasal Cannula (HFNC) Physiology

**Mechanisms of action:**

**1. Dead space washout:**
- High flow (30-60 L/min) flushes nasopharyngeal dead space
- Reduces CO2 rebreathing
- Effectively increases alveolar ventilation
- Estimated 0.5-1.0 mL/kg reduction in dead space per 1 L/min

**2. CPAP effect:**
- Generates low-level positive airway pressure
- Open mouth: 1-3 cm H2O
- Closed mouth: 3-7 cm H2O
- Recruits atelectatic lung
- Reduces work of breathing

**3. Matched inspiratory demand:**
- Standard nasal cannula: 1-6 L/min (patient's peak inspiratory flow: 30-120 L/min)
- Gap between supply and demand is filled by room air, diluting FiO2
- HFNC meets or exceeds inspiratory flow demand
- Delivers accurate FiO2 (0.21-1.0)

**4. Heated humidification:**
- Gas heated to 31-37 degrees C, 100% relative humidity
- Preserves mucociliary function
- Reduces metabolic cost of gas conditioning
- Improved comfort and tolerance

**5. Reduction of inspiratory effort:**
- Decreases respiratory drive (improved gas exchange, reduced dead space)
- Decreases resistive work (lower turbulent flow in pharynx)
- Decreases elastic work (CPAP effect)

**Clinical evidence:**
- FLORALI trial: HFNC reduced intubation in severe hypoxemic RF (P/F <200)
- ROX index: (SpO2/FiO2) / RR; >4.88 at 12h predicts HFNC success
- Post-extubation: Non-inferior to NIV in high-risk patients (HIGH trial)
- COVID-19: Widely used as bridge to intubation or recovery

### Advanced Chemoreceptor Physiology

**Molecular oxygen sensing in the carotid body:**
- Mitochondrial complex hypothesis:
  - Hypoxia inhibits mitochondrial complex I and IV
  - Altered NADH/NAD+ ratio
  - ROS signaling changes
  - AMPK activation
- Ion channel cascade:
  - TASK-1/TASK-3 K+ channels (background K+ channels) inhibited by hypoxia
  - BK channel inhibition
  - Membrane depolarization
  - L-type Ca2+ channel opening
  - Vesicular release of dopamine, ATP, acetylcholine

**Carotid body plasticity:**
- Chronic intermittent hypoxia (OSA model):
  - Enhanced carotid body sensitivity (long-term facilitation)
  - Contributes to sympathetic activation in OSA
  - Mechanism: ROS-mediated upregulation of HIF-1alpha
  - Target for OSA-associated hypertension

**RTN/pFRG molecular CO2 sensing:**
- PHOX2B-expressing glutamatergic neurons
- Intrinsic pH sensitivity via:
  - TASK-2 K+ channels (acid-sensitive)
  - Connexin-26 hemichannels (CO2-sensitive, release ATP)
  - GPR4 proton-sensing receptor
- Paracrine signaling:
  - Astrocytic ATP release amplifies chemosensory response
  - pH-dependent astrocyte signaling

### Emerging Therapeutic Targets

**Carotid body modulation:**
- Carotid body resection: Investigated for resistant hypertension and HFrEF
  - BREATH trial: Bilateral CB resection in HFrEF with central apnea
  - Reduced AHI and sympathetic activity
  - Safety concerns limit adoption
- Bioelectronic carotid body stimulation under investigation

**Pharmacological targeting of respiratory drive:**
- Ampakines (CX717): Enhance glutamatergic transmission at preBotC
  - Reverse opioid-induced respiratory depression without antagonizing analgesia
  - Phase II trials for opioid-related respiratory depression
- Doxapram: Non-specific respiratory stimulant
  - Stimulates carotid body chemoreceptors
  - Limited by narrow therapeutic window, seizure risk
- GAL-021: BK channel blocker
  - Stimulates carotid body
  - Reverses opioid respiratory depression in phase I trials

**Closed-loop respiratory support:**
- Integration of continuous SpO2, EtCO2, and respiratory rate monitoring
- Automated FiO2 titration (CLiO2 in neonates)
- Automated HFNC flow adjustment
- AI-driven ventilator management (under investigation)`,
      keyTerms: [
        { term: 'PHOX2B', definition: 'Paired-like homeobox 2B gene; transcription factor essential for development of autonomic neurons including RTN chemoreceptors; mutations cause congenital central hypoventilation syndrome' },
        { term: 'phrenic nerve pacing', definition: 'Electrical stimulation of the phrenic nerve or diaphragm to produce ventilation without mechanical ventilator; used in CCHS and high cervical SCI' },
        { term: 'ROX index', definition: 'Risk stratification tool for HFNC: (SpO2/FiO2)/respiratory rate; values >4.88 at 12 hours predict HFNC success in hypoxemic respiratory failure' },
        { term: 'long-term facilitation', definition: 'Persistent augmentation of carotid body sensitivity after chronic intermittent hypoxia; contributes to sympathetic overactivity and hypertension in OSA' },
        { term: 'ampakines', definition: 'Positive allosteric modulators of AMPA glutamate receptors that enhance respiratory rhythm generation; investigated for reversing opioid respiratory depression without antagonizing analgesia' },
        { term: 'connexin-26 hemichannels', definition: 'CO2-sensitive gap junction hemichannels in RTN neurons and astrocytes that release ATP in response to CO2, amplifying the central chemoreceptor response' },
      ],
      clinicalNotes: `Key clinical practice points:

1. **CCHS screening**: Any child with unexplained hypoventilation during sleep requires PHOX2B genetic testing. Genotype determines ventilatory support needs and tumor surveillance requirements (NPARM: annual neuroblastoma screening).

2. **HFNC optimization**: The ROX index provides evidence-based decision support. A ROX index <2.85 at 2 hours, <3.47 at 6 hours, or <3.85 at 12 hours suggests HFNC failure and need for escalation. Do not delay intubation based on patient appearance alone.

3. **Opioid respiratory depression** management extends beyond naloxone. In chronic pain patients, naloxone precipitates withdrawal and pain crisis. Non-opioid reversal agents (ampakines) are in development. Meanwhile, use lowest effective opioid dose and monitor with continuous capnography (EtCO2) rather than pulse oximetry alone.

4. **Cheyne-Stokes treatment in HFrEF**: ASV is contraindicated (SERVE-HF). Options include optimizing heart failure therapy, supplemental O2, CPAP, and phrenic nerve stimulation (Remede System -- FDA-approved for CSA in HF).

5. **Carotid body plasticity** in OSA contributes to treatment-resistant hypertension; adequate CPAP therapy may partially reverse long-term facilitation over months.`,
    },
  },

  media: [
    {
      id: 'brainstem-respiratory-centers',
      type: 'diagram',
      filename: 'brainstem-respiratory-centers.svg',
      title: 'Brainstem Respiratory Centers',
      description: 'Anatomical diagram showing DRG, VRG, preBotC, and pontine groups with their connections',
    },
    {
      id: 'chemoreceptor-pathways',
      type: 'diagram',
      filename: 'chemoreceptor-pathways.svg',
      title: 'Chemoreceptor Pathways',
      description: 'Central and peripheral chemoreceptor locations, afferent pathways, and integration at the brainstem',
    },
    {
      id: 'cheyne-stokes-pattern',
      type: 'diagram',
      filename: 'cheyne-stokes-pattern.svg',
      title: 'Cheyne-Stokes Breathing Pattern',
      description: 'Waveform showing crescendo-decrescendo tidal volumes with central apneas and corresponding PaCO2 oscillation',
    },
    {
      id: 'hfnc-mechanisms',
      type: 'diagram',
      filename: 'hfnc-mechanisms.svg',
      title: 'HFNC Mechanisms of Action',
      description: 'Diagram showing dead space washout, CPAP effect, flow matching, and humidification',
    },
  ],

  citations: [
    {
      id: 'west-respiratory-physiology',
      type: 'textbook',
      title: 'Respiratory Physiology: The Essentials',
      authors: ['West JB', 'Luks AM'],
      source: 'Wolters Kluwer',
      chapter: '8',
    },
    {
      id: 'guyton-hall',
      type: 'textbook',
      title: 'Textbook of Medical Physiology',
      authors: ['Hall JE', 'Hall ME'],
      source: 'Elsevier',
      chapter: '42',
    },
    {
      id: 'feldman-2003',
      type: 'article',
      title: 'Breathing: Rhythmicity, Plasticity, Chemosensitivity',
      authors: ['Feldman JL', 'Mitchell GS', 'Nattie EE'],
      source: 'Annu Rev Neurosci',
    },
    {
      id: 'weese-mayer-cchs',
      type: 'article',
      title: 'An Official ATS Clinical Policy Statement: Congenital Central Hypoventilation Syndrome',
      authors: ['Weese-Mayer DE', 'Berry-Kravis EM', 'Ceccherini I', 'Keens TG', 'Loghmanee DA', 'Trang H'],
      source: 'Am J Respir Crit Care Med',
    },
    {
      id: 'florali-trial',
      type: 'article',
      title: 'High-Flow Oxygen through Nasal Cannula in Acute Hypoxemic Respiratory Failure',
      authors: ['Frat JP', 'Thille AW', 'Mercat A'],
      source: 'N Engl J Med',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-gas-exchange', targetType: 'topic', relationship: 'sibling', label: 'Gas Exchange' },
    { targetId: 'physiology-ventilation-mechanics', targetType: 'topic', relationship: 'sibling', label: 'Ventilation Mechanics' },
    { targetId: 'condition-sleep-apnea', targetType: 'condition', relationship: 'see-also', label: 'Sleep Apnea' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'see-also', label: 'Heart Failure' },
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'see-also', label: 'COPD' },
    { targetId: 'topic-acid-base', targetType: 'topic', relationship: 'related', label: 'Acid-Base Physiology' },
  ],

  tags: {
    systems: ['respiratory', 'nervous'],
    topics: ['physiology', 'pulmonology', 'neurology', 'sleep medicine', 'critical care'],
    keywords: [
      'respiratory control', 'chemoreceptors', 'brainstem', 'pre-Botzinger complex',
      'Cheyne-Stokes', 'CCHS', 'PHOX2B', 'phrenic nerve', 'HFNC',
      'carotid body', 'Hering-Breuer reflex', 'sleep apnea', 'opioid respiratory depression',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'neurology', 'pediatrics'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default respiratoryControl;
