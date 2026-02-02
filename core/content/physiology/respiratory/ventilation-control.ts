/**
 * Ventilation Control - Comprehensive Educational Content
 *
 * Covers central/peripheral chemoreceptors, brainstem respiratory centers,
 * neural control of breathing, and clinical disorders of ventilatory control.
 */

import { EducationalContent } from '../../types';

export const ventilationControl: EducationalContent = {
  id: 'physiology-ventilation-control',
  type: 'process',
  name: 'Ventilation Control',
  nameEs: 'Control de la Ventilacion',
  alternateNames: ['Respiratory Control', 'Breathing Regulation', 'Neural Control of Breathing'],

  levels: {
    1: {
      level: 1,
      summary: 'Your brain automatically controls your breathing, speeding it up when you need more oxygen and slowing it down when you are resting.',
      explanation: `## How Your Brain Controls Breathing

### Breathing Is Automatic

You do not have to think about breathing -- your brain does it for you, even while you sleep. A special area in the lower part of your brain called the **brainstem** sends signals to your breathing muscles.

### Sensors That Monitor Your Blood

Your body has sensors that check your blood for:
- **Carbon dioxide (CO2)**: The main thing your body monitors. Too much CO2 makes you breathe faster.
- **Oxygen (O2)**: If oxygen drops very low, emergency sensors speed up breathing.
- **pH (acidity)**: If blood becomes too acidic, breathing increases to blow off CO2.

### When Does Breathing Change?

- **Exercise**: Muscles make more CO2, so you breathe faster and deeper
- **Sleep**: Breathing slows because your body needs less oxygen
- **High altitude**: Less oxygen in the air triggers faster breathing
- **Illness**: Lung diseases can make breathing harder and less efficient

### Can You Control Your Breathing?

Yes! You can hold your breath, breathe faster, or slow down on purpose. But your brain will always take over if CO2 gets too high -- that is why you cannot hold your breath until you pass out.`,
      keyTerms: [
        { term: 'brainstem', definition: 'The lower part of your brain that controls automatic functions like breathing' },
        { term: 'carbon dioxide', definition: 'A waste gas from your cells; too much makes you breathe faster' },
        { term: 'diaphragm', definition: 'The main breathing muscle under your lungs that contracts when you inhale' },
        { term: 'automatic', definition: 'Something your body does without you thinking about it' },
      ],
      analogies: [
        'Your brainstem is like a thermostat for breathing -- it detects when CO2 is too high and turns up ventilation.',
        'The CO2 sensors are like smoke detectors -- when CO2 levels rise, the alarm (faster breathing) goes off.',
        'Holding your breath is like holding a door shut -- eventually the pressure builds up and forces it open.',
      ],
      examples: [
        'When you run, you breathe faster because your muscles produce more CO2.',
        'If you hyperventilate (breathe too fast), you blow off too much CO2 and feel dizzy.',
        'Mountain climbers breathe faster at high altitude because there is less oxygen.',
      ],
      patientCounselingPoints: [
        'Your body mainly monitors CO2, not oxygen, to control breathing.',
        'Deep slow breathing can help calm anxiety and slow your heart rate.',
        'Sleep apnea is a condition where breathing stops repeatedly during sleep.',
      ],
    },
    2: {
      level: 2,
      summary: 'Breathing is controlled by brainstem respiratory centers that receive input from central chemoreceptors (CO2/pH sensitive) and peripheral chemoreceptors (O2/CO2/pH sensitive), adjusting ventilation to maintain blood gas homeostasis.',
      explanation: `## Ventilation Control

### Brainstem Respiratory Centers

**Medulla oblongata:**
- **Dorsal respiratory group (DRG)**: Primarily inspiratory neurons; receives input from chemoreceptors and lung receptors
- **Ventral respiratory group (VRG)**: Both inspiratory and expiratory neurons; active during forced breathing

**Pons:**
- **Pneumotaxic center**: Fine-tunes respiratory rate by limiting inspiration
- **Apneustic center**: Promotes prolonged inspiration (normally overridden by pneumotaxic center)

### Chemoreceptors

**Central chemoreceptors (medulla):**
- Respond to **CSF pH** (which reflects blood CO2)
- CO2 crosses blood-brain barrier -> H+ in CSF -> stimulates breathing
- Most important driver of normal ventilation
- Responsible for ~70-80% of CO2-driven ventilation

**Peripheral chemoreceptors (carotid and aortic bodies):**
- Respond to **low PaO2** (<60 mmHg), high PaCO2, low pH
- Carotid bodies (CN IX) are most important
- Only sensors that detect hypoxemia
- Fast response (seconds)

### How CO2 Drives Breathing

For every 1 mmHg increase in PaCO2 above normal:
- Ventilation increases by ~2-3 L/min
- This is the **CO2 ventilatory response curve**

### Other Inputs to Breathing

| Input | Receptor | Effect |
|-------|----------|--------|
| Lung stretch | Pulmonary stretch receptors | Hering-Breuer reflex (limits over-inflation) |
| Irritants | Irritant receptors (airways) | Cough, bronchoconstriction |
| Pain/emotion | Cortex, limbic system | Voluntary changes, anxiety hyperventilation |
| Exercise | Muscle/joint receptors | Immediate ventilation increase |
| Temperature | Hypothalamus | Increased ventilation with fever |

### Breathing During Sleep

- Voluntary (cortical) control is lost
- Chemical drive (CO2) becomes sole controller
- Upper airway muscle tone decreases
- Ventilation decreases ~10-15% (normal PaCO2 rises 3-5 mmHg)`,
      keyTerms: [
        { term: 'central chemoreceptors', definition: 'Medullary sensors responding to CSF pH/CO2; primary driver of ventilation' },
        { term: 'peripheral chemoreceptors', definition: 'Carotid/aortic body sensors detecting low O2, high CO2, and low pH' },
        { term: 'Hering-Breuer reflex', definition: 'Lung stretch receptor reflex that limits over-inflation by inhibiting inspiration' },
        { term: 'DRG', definition: 'Dorsal respiratory group; primary inspiratory center in the medulla' },
        { term: 'pneumotaxic center', definition: 'Pontine center that limits inspiration duration and fine-tunes respiratory rate' },
        { term: 'CO2 ventilatory response', definition: 'Linear increase in ventilation with rising PaCO2; ~2-3 L/min per mmHg' },
      ],
      analogies: [
        'Central chemoreceptors are like a CO2 thermostat in the brain -- they sense rising CO2 and crank up breathing.',
        'Peripheral chemoreceptors are like emergency oxygen sensors -- they only fire the alarm when O2 drops dangerously low.',
        'The pneumotaxic center is like a metronome setting the pace of breathing.',
      ],
      examples: [
        'In COPD, chronic CO2 retention resets central chemoreceptors, making hypoxic drive (peripheral) more important.',
        'Opioid overdose depresses brainstem respiratory centers, causing life-threatening hypoventilation.',
        'Cheyne-Stokes breathing (alternating deep/shallow) occurs in heart failure due to delayed chemoreceptor feedback.',
      ],
    },
    3: {
      level: 3,
      summary: 'Ventilatory control integrates central chemoreception (medullary pH/CO2 sensing via TASK channels), peripheral chemoreception (carotid body glomus cell O2/CO2/pH sensing), brainstem pattern generation (pre-Botzinger complex), and reflex inputs to maintain arterial blood gas homeostasis.',
      explanation: `## Ventilation Control Physiology

### Brainstem Rhythm Generation

**Pre-Botzinger complex (preBotC):** Key inspiratory rhythm generator in ventrolateral medulla. Pacemaker neurons with intrinsic bursting properties. NK1R+ and SST+ neurons essential.

**Respiratory phases:**
1. **Inspiration**: preBotC -> premotor neurons -> phrenic nerve (C3-5) -> diaphragm; external intercostals
2. **Post-inspiration** (passive expiration): Gradual decay of inspiratory activity; glottic control
3. **Active expiration** (exercise): Botzinger complex + lateral parafacial region; abdominal muscles, internal intercostals

### Central Chemoreception

**Retrotrapezoid nucleus (RTN):** Primary CO2/H+ sensor in medulla. PHOX2B+ glutamatergic neurons. CO2 -> H+ in brain ECF -> activation of RTN neurons -> increased preBotC drive.

**TASK-2 channels:** pH-sensitive K+ channels on RTN neurons. Acidification closes TASK channels -> depolarization -> increased firing.

**CO2 ventilatory response curve:**
- Slope: ~2-3 L/min per mmHg PaCO2
- Shifted left (increased sensitivity) by: Hypoxemia, metabolic acidosis, progesterone
- Shifted right (decreased sensitivity) by: Sleep, opioids, chronic hypercapnia

### Peripheral Chemoreception

**Carotid body glomus (type I) cells:**
- O2 sensing: Hypoxia inhibits K+ channels (TASK, BK, Kv) -> depolarization -> Ca2+ entry -> neurotransmitter release (ACh, ATP, dopamine) -> CN IX afferents
- CO2/H+ sensing: Direct and via carbonic anhydrase; additive with hypoxia (multiplicative interaction)
- Response: Fast (<1-2 seconds); critical for hypoxic ventilatory response (HVR)

**Hypoxic ventilatory response:** PaO2 <60 mmHg triggers significant increase. Sigmoid response curve. Potentiated by concurrent hypercapnia. Blunted by: Carotid body resection, chronic hypoxia (high altitude acclimatization over days), dopamine.

### Integrated Responses

**Exercise hyperpnea:** Ventilation increases immediately (neurogenic: central command + muscle mechanoreceptors) then proportionally to CO2 production. PaCO2 and PaO2 remain remarkably stable. Mechanism of fine-tuning still debated (feed-forward vs feedback).

**Sleep-disordered breathing:**
- OSA: Upper airway collapse (reduced genioglossus tone) -> apnea -> hypoxia/hypercapnia -> arousal -> resumption
- CSA/Cheyne-Stokes: High loop gain (excessive ventilatory response) -> overshoot/undershoot oscillation. Seen in HF (prolonged circulation time increases feedback delay).

**Altitude acclimatization:**
- Acute: HVR increases ventilation -> respiratory alkalosis -> central chemoreceptor depression (limits further increase)
- Days 1-3: Renal HCO3- excretion lowers CSF pH -> restores central chemoreceptor drive -> further ventilation increase
- Weeks: Carotid body sensitivity increases; polycythemia improves O2 carrying`,
      keyTerms: [
        { term: 'pre-Botzinger complex', definition: 'Medullary nucleus generating inspiratory rhythm; essential pacemaker for breathing' },
        { term: 'retrotrapezoid nucleus', definition: 'Primary central CO2/H+ chemosensor with PHOX2B+ neurons; drives preBotC' },
        { term: 'TASK channels', definition: 'pH-sensitive K+ channels on RTN neurons; closure by acidification increases neuronal firing' },
        { term: 'glomus cells', definition: 'Type I cells in carotid body sensing O2, CO2, pH; release neurotransmitters to CN IX' },
        { term: 'loop gain', definition: 'Ratio of ventilatory response to disturbance; high loop gain causes breathing instability (CSA)' },
        { term: 'hypoxic ventilatory response', definition: 'Increase in ventilation triggered by PaO2 <60 mmHg; mediated by peripheral chemoreceptors' },
      ],
      clinicalNotes: 'In COPD with chronic hypercapnia, central chemoreceptors reset to higher CO2 setpoint, and hypoxic drive via peripheral chemoreceptors becomes important. Giving high-flow O2 can abolish hypoxic drive and worsen CO2 retention (though V/Q mismatch and Haldane effect contribute more). Opioid-induced respiratory depression acts primarily on preBotC and RTN neurons. Loop gain assessment may predict CPAP response in OSA.',
    },
    4: {
      level: 4,
      summary: 'Advanced ventilatory control integrates molecular oxygen sensing (HIF/mitochondrial ROS in carotid body), RTN PHOX2B chemosensation, preBotC rhythm generation, loop gain in sleep-disordered breathing, and pharmacology of respiratory depression.',
      explanation: `## Advanced Ventilation Control

### Molecular O2 Sensing in Carotid Body

**Mitochondrial hypothesis:** Hypoxia reduces electron transport -> decreased ROS -> K+ channel closure -> depolarization.
**Olfactory receptor hypothesis (Olfr78):** Lactate generated in hypoxia activates Olfr78 on glomus cells -> potentiates response.
**TASK1/TASK3 heterodimer:** Primary O2-sensitive K+ channel. Hypoxia also inhibits BK channels (Ca2+-activated K+).
**Neurotransmitter release:** ACh (nicotinic/muscarinic on CN IX), ATP (P2X2/3 receptors), dopamine (auto-inhibitory via D2).

### PHOX2B and Congenital Central Hypoventilation

**CCHS (Ondine curse):** PHOX2B polyalanine expansion mutations -> RTN neuron developmental failure -> absent CO2 chemosensitivity. Patients depend entirely on hypoxic drive (peripheral). Require ventilatory support during sleep.
**PHOX2B+27 repeat (normal 20):** Most common CCHS genotype; longer repeats -> more severe phenotype + Hirschsprung disease risk.

### Respiratory Rhythm Generation: Detailed

**preBotC neurons:** Two types: (1) NK1R+ glutamatergic rhythm generators; (2) SST+ inhibitory neurons shaping burst pattern.
**Botzinger complex:** Expiratory neurons providing inspiratory inhibition.
**Lateral parafacial (pFL):** Active expiratory oscillator; recruited during exercise and metabolic acidosis.

**Coupling model:** preBotC generates inspiratory rhythm -> BotC provides post-inspiratory and expiratory patterning -> pFL adds active expiration when needed.

### Loop Gain and Sleep-Disordered Breathing

**Loop gain = controller gain x plant gain**
- Controller gain: CO2 ventilatory response slope (chemosensitivity)
- Plant gain: Efficiency of ventilation in changing PaCO2 (inversely related to FRC and cardiac output)

**High loop gain -> breathing instability:**
- Heart failure CSA: Increased controller gain + increased plant gain (low CO, increased circulation time)
- High altitude periodic breathing: Increased controller gain from hypoxia
- Treatment: Supplemental O2 reduces controller gain; acetazolamide increases plant stability (metabolic acidosis)

**OSA phenotyping (PALM model):**
- P: Pharyngeal anatomy (collapsibility, Pcrit)
- A: Arousal threshold (low -> frequent arousals -> ventilatory instability)
- L: Loop gain (high -> overshoot/undershoot)
- M: Muscle responsiveness (genioglossus effectiveness)

### Pharmacology of Respiratory Control

**Opioid depression:** Mu-receptor activation on preBotC (reduces frequency) and RTN (reduces CO2 sensitivity). Naloxone reverses.
**Benzodiazepines:** GABA-A enhancement; less respiratory depression than opioids but synergistic when combined.
**Respiratory stimulants:** Doxapram (peripheral chemoreceptor stimulant); progesterone (increases CO2 sensitivity); acetazolamide (metabolic acidosis -> central stimulation); ampakines (AMPA receptor agonists enhancing preBotC, investigational for opioid-induced depression).`,
      keyTerms: [
        { term: 'PHOX2B', definition: 'Transcription factor for RTN development; polyalanine expansion mutations cause CCHS (absent CO2 chemosensitivity)' },
        { term: 'Pcrit', definition: 'Critical closing pressure of the pharynx; higher Pcrit indicates more collapsible airway' },
        { term: 'PALM model', definition: 'OSA endotyping: Pharyngeal anatomy, Arousal threshold, Loop gain, Muscle responsiveness' },
        { term: 'controller gain', definition: 'CO2 ventilatory response slope; high controller gain increases breathing instability' },
        { term: 'ampakines', definition: 'AMPA receptor positive modulators enhancing preBotC output; investigational for opioid respiratory depression' },
        { term: 'Olfr78', definition: 'Olfactory receptor on carotid body glomus cells activated by lactate during hypoxia' },
      ],
      clinicalNotes: 'OSA endotyping (PALM model) enables precision therapy: High loop gain -> acetazolamide or O2; low arousal threshold -> sedatives (low-dose); poor muscle responsiveness -> hypoglossal nerve stimulation (Inspire). CCHS diagnosis requires PHOX2B genetic testing; patients need lifelong nocturnal ventilation. Opioid+benzodiazepine combination has synergistic respiratory depression risk.',
    },
    5: {
      level: 5,
      summary: 'Contemporary ventilatory control encompasses optogenetic/chemogenetic dissection of brainstem circuits, carotid body molecular oxygen sensing debates, precision OSA phenotyping (PALM), emerging respiratory stimulants targeting preBotC, and biomarker-guided sleep-disordered breathing management.',
      explanation: `## Precision Ventilation Control

### Brainstem Circuit Dissection

**Optogenetic/chemogenetic studies:** Selective preBotC NK1R+ neuron ablation -> fatal apnea in rodents. SST+ neuron silencing -> loss of inspiratory pattern without rhythm loss. GlyT2+ neurons provide post-inspiratory braking.

**Developmental transcriptomics:** Single-cell RNA-seq of neonatal brainstem identifies >50 neuronal subtypes in respiratory column. Ongoing mapping of specific contributions.

### Carotid Body: Unresolved Questions

**O2 sensor identity debate:** Mitochondrial complex I vs. complex IV as primary sensor. NDUFS2 subunit knockdown in glomus cells abolishes O2 response (Lopez-Barneo lab). Heme oxygenase-2 / hydrogen sulfide pathway proposed as alternative.

**Carotid body in metabolic disease:** Chronic intermittent hypoxia (OSA) -> carotid body sensitization -> sympathetic overactivation -> hypertension. Carotid body ablation/modulation under investigation for resistant hypertension (ongoing trials).

### Precision OSA Management

**Endotyping in practice:** Drug-induced sleep endoscopy (DISE) for anatomy; polysomnographic loop gain estimation; arousal threshold prediction from clinical features (supine AHI ratio, NREM predominance).

**Targeted therapies:**
| Endotype | Intervention |
|----------|-------------|
| Anatomic | CPAP, MAS, surgery, Inspire |
| High loop gain | O2, acetazolamide, CO2 |
| Low arousal threshold | Trazodone, eszopiclone |
| Poor muscle response | Hypoglossal nerve stimulation |

**Combination pharmacotherapy (atomoxetine + oxybutynin):** MARIPOSA trial; reduces AHI by increasing genioglossus muscle activity (noradrenergic + antimuscarinic). Emerging as non-CPAP alternative.

### Respiratory Stimulant Pipeline

**GAL-021 (BK channel blocker):** Mimics carotid body stimulation; Phase II for post-operative respiratory depression.
**Ampakines (CX717):** Enhance glutamatergic transmission at preBotC; reverse opioid-induced depression without affecting analgesia.
**Dronabinol:** Cannabinoid; stabilizes upper airway serotonergic signaling; PACE trial for OSA showed modest AHI reduction.

### Biomarker Integration

**Loop gain from clinical PSG:** Automated algorithms estimate loop gain from apnea/hypopnea event morphology (ventilatory overshoot magnitude).
**Wearable respiratory monitoring:** Accelerometry + SpO2 for home sleep apnea phenotyping. AI-based AHI estimation from pulse oximetry alone.`,
      keyTerms: [
        { term: 'NDUFS2', definition: 'Mitochondrial complex I subunit proposed as the molecular O2 sensor in carotid body glomus cells' },
        { term: 'atomoxetine-oxybutynin', definition: 'Combination noradrenergic/antimuscarinic therapy increasing genioglossus activity for OSA' },
        { term: 'GAL-021', definition: 'BK channel blocker stimulating carotid body; investigated for post-operative respiratory depression' },
        { term: 'DISE', definition: 'Drug-induced sleep endoscopy for visualizing upper airway collapse pattern in OSA' },
        { term: 'carotid body modulation', definition: 'Ablation or electrical stimulation of carotid body under investigation for resistant hypertension in OSA' },
        { term: 'Inspire device', definition: 'Implantable hypoglossal nerve stimulator for OSA; activated during sleep to prevent airway collapse' },
      ],
      clinicalNotes: `1) OSA endotyping is moving toward precision management: not all OSA is anatomic, and CPAP is not the only option. 2) Loop gain estimation from PSG enables identification of patients who may benefit from pharmacotherapy or O2. 3) Atomoxetine+oxybutynin is the most advanced pharmacologic OSA therapy but is not yet standard of care. 4) Carotid body-mediated sympathetic overactivation links OSA to hypertension; targeting this may address cardiometabolic consequences. 5) Respiratory stimulants preserving analgesia (ampakines) may reduce opioid-related mortality.`,
    },
  },

  media: [
    { id: 'brainstem-centers', type: 'diagram', filename: 'brainstem-respiratory-centers.svg',
      title: 'Brainstem Respiratory Centers', description: 'preBotC, DRG, VRG, pneumotaxic and apneustic centers' },
    { id: 'chemoreceptor-pathways', type: 'diagram', filename: 'chemoreceptor-ventilation.svg',
      title: 'Chemoreceptor Pathways', description: 'Central and peripheral chemoreceptor inputs to ventilation' },
  ],

  citations: [
    { id: 'west-respiratory', type: 'textbook', title: 'Respiratory Physiology: The Essentials', authors: ['West JB', 'Luks AM'], source: 'Wolters Kluwer', chapter: '8' },
    { id: 'nunn-control', type: 'textbook', title: 'Nunn\'s Applied Respiratory Physiology', authors: ['Lumb AB'], source: 'Elsevier', chapter: '4' },
  ],

  crossReferences: [
    { targetId: 'physiology-gas-exchange', targetType: 'topic', relationship: 'sibling', label: 'Gas Exchange' },
    { targetId: 'physiology-ventilation-mechanics', targetType: 'topic', relationship: 'sibling', label: 'Ventilation Mechanics' },
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'see-also', label: 'COPD' },
    { targetId: 'condition-sleep-apnea', targetType: 'condition', relationship: 'see-also', label: 'Sleep Apnea' },
  ],

  tags: {
    systems: ['respiratory', 'nervous'],
    topics: ['physiology', 'pulmonology', 'neurology', 'sleep medicine'],
    keywords: ['ventilation', 'chemoreceptors', 'brainstem', 'CO2', 'hypoxia', 'sleep apnea', 'respiratory control'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ventilationControl;
