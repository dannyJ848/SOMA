/**
 * Oxygen Saturation (SpO2) - Vital Signs
 *
 * Comprehensive content on pulse oximetry, oxygen saturation measurement,
 * interpretation, and clinical correlations.
 */

import { EducationalContent } from '../../types';

export const oxygenSaturation: EducationalContent = {
  id: 'physical-exam-vital-signs-oxygen-saturation',
  type: 'concept',
  name: 'Oxygen Saturation',
  alternateNames: ['SpO2', 'Pulse Oximetry', 'O2 Sat', 'SaO2'],

  levels: {
    1: {
      level: 1,
      summary: 'Oxygen saturation measures how much oxygen your blood is carrying to your body.',
      explanation: `When you breathe in, oxygen goes from your lungs into your blood. Your blood then carries this oxygen to every part of your body. Oxygen saturation tells us how well your blood is doing this job.

**Normal Oxygen Saturation:**
- 95-100% is normal for healthy people
- Think of it as a grade - you want close to 100%!

**How It's Measured:**
- A small clip goes on your finger (or earlobe or toe)
- The clip shines a light through your skin
- It can tell how much oxygen is in your blood by how the light changes
- It doesn't hurt at all!

**Low Oxygen (Hypoxemia):**
When oxygen levels drop too low:
- 90-94%: Slightly low - may need attention
- Below 90%: Concerning - usually needs oxygen
- Below 85%: Serious - emergency situation

**Signs of Low Oxygen:**
- Feeling short of breath
- Blue color around lips or fingernails (cyanosis)
- Feeling confused or sleepy
- Heart beating fast

**What Can Cause Low Oxygen:**
- Lung problems (pneumonia, asthma, COPD)
- Heart problems
- Being at high altitude (like mountains)
- Sleep apnea`,
      keyTerms: [
        { term: 'oxygen saturation', definition: 'How much oxygen your blood is carrying, shown as a percentage' },
        { term: 'pulse oximeter', definition: 'The device that clips on your finger to measure oxygen' },
        { term: 'hypoxemia', definition: 'When your blood has too little oxygen' },
        { term: 'cyanosis', definition: 'Blue color of the skin from not enough oxygen' },
      ],
      analogies: [
        'Hemoglobin in your blood is like a bus carrying passengers (oxygen) - oxygen saturation tells you how full each bus is.',
        'Your blood cells are like delivery trucks. Oxygen saturation tells you what percentage of trucks are carrying their full load.',
      ],
      examples: [
        'When you climb a tall mountain, there\'s less oxygen in the air, so your oxygen saturation might drop.',
        'When you have pneumonia, fluid in your lungs makes it harder for oxygen to get into your blood.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pulse oximetry estimates arterial oxygen saturation using spectrophotometry, with clinical interpretation requiring understanding of oxyhemoglobin dissociation and measurement limitations.',
      explanation: `## Pulse Oximetry Fundamentals

**How Pulse Oximetry Works:**
- Emits two wavelengths of light: red (660 nm) and infrared (940 nm)
- Oxygenated hemoglobin (HbO2) absorbs more infrared light
- Deoxygenated hemoglobin (Hb) absorbs more red light
- Ratio of absorption determines saturation

**Measurements:**
- SpO2: Peripheral oxygen saturation (pulse oximeter)
- SaO2: Arterial oxygen saturation (blood gas)
- SpO2 estimates SaO2 (usually within 2-3%)

## Normal Values and Interpretation

**Normal Ranges:**
| Population | Normal SpO2 |
|-----------|-------------|
| Healthy adult | 95-100% |
| Elderly (>70 yr) | 94-98% |
| COPD patients | 88-92% (target) |
| High altitude | May be lower |

**Hypoxemia Classification:**
| SpO2 | Severity | PaO2 Estimate |
|------|----------|---------------|
| 90-94% | Mild | 60-80 mmHg |
| 85-89% | Moderate | 50-60 mmHg |
| <85% | Severe | <50 mmHg |

## Oxyhemoglobin Dissociation Curve

**Shape and Significance:**
- Sigmoid (S-shaped) curve
- Flat upper portion: SpO2 maintained despite PaO2 drops (buffer zone)
- Steep middle portion: Small PaO2 change → large SpO2 change
- Critical point: SpO2 90% ≈ PaO2 60 mmHg

**Factors Shifting the Curve:**
| Right Shift (↓ affinity) | Left Shift (↑ affinity) |
|-------------------------|-------------------------|
| ↑ Temperature | ↓ Temperature |
| ↑ CO2 (Bohr effect) | ↓ CO2 |
| ↑ 2,3-DPG | ↓ 2,3-DPG |
| ↓ pH (acidosis) | ↑ pH (alkalosis) |
| Anemia (chronic) | Fetal hemoglobin |

**Clinical Implication:**
- Right shift: Easier oxygen release to tissues (helpful in exercise)
- Left shift: Harder to unload oxygen (may impair tissue delivery)

## Limitations of Pulse Oximetry

**Technical Factors:**
| Factor | Effect |
|--------|--------|
| Poor perfusion | Unreliable signal |
| Motion artifact | Erratic readings |
| Nail polish (blue/black) | May lower reading |
| Bright ambient light | Interference |
| Skin pigmentation | May affect accuracy |

**Physiological Factors:**
| Condition | Effect |
|-----------|--------|
| Carboxyhemoglobin (CO poisoning) | Falsely normal/high |
| Methemoglobinemia | Reads ~85% regardless |
| Severe anemia | Unreliable at low Hb |
| Hyperbilirubinemia | Variable |
| Venous pulsation | Artificially low |

## Clinical Applications

**When to Use:**
- Routine vital signs
- Respiratory assessment
- Procedural sedation monitoring
- Postoperative monitoring
- Sleep studies (continuous overnight)

**When to Get Arterial Blood Gas:**
- Verify low SpO2 readings
- Assess ventilation (CO2)
- Acid-base status needed
- Suspected CO poisoning or methemoglobinemia
- SpO2 doesn't match clinical picture`,
      keyTerms: [
        { term: 'SpO2', definition: 'Peripheral oxygen saturation measured by pulse oximetry', pronunciation: 'S-P-O-two' },
        { term: 'oxyhemoglobin dissociation curve', definition: 'Graph showing relationship between PaO2 and oxygen saturation' },
        { term: '2,3-DPG', definition: '2,3-diphosphoglycerate; molecule affecting hemoglobin oxygen affinity' },
        { term: 'Bohr effect', definition: 'Decreased hemoglobin oxygen affinity with increased CO2 and decreased pH' },
        { term: 'carboxyhemoglobin', definition: 'Hemoglobin bound to carbon monoxide instead of oxygen' },
      ],
    },
    3: {
      level: 3,
      summary: 'Pulse oximetry relies on Beer-Lambert principles with plethysmographic signal extraction, while oxygen delivery depends on hemoglobin concentration, saturation, and cardiac output.',
      explanation: `## Physics of Pulse Oximetry

**Beer-Lambert Law:**
\`\`\`
A = ε × c × l

Where:
A = Absorbance
ε = Molar extinction coefficient
c = Concentration
l = Path length
\`\`\`

**Spectrophotometric Basis:**
- HbO2 extinction coefficient differs from Hb at different wavelengths
- Isobestic point: 805 nm (equal absorption)
- Ratio R = (AC660/DC660) / (AC940/DC940)
- R is empirically correlated to SaO2

**Plethysmographic Signal:**
- AC component: Pulsatile arterial blood
- DC component: Constant tissue absorption (venous, capillary, non-pulsatile arterial)
- Isolation of AC signal allows arterial-specific measurement

## Oxygen Content and Delivery

**Oxygen Content (CaO2):**
\`\`\`
CaO2 = (1.34 × Hb × SaO2) + (0.003 × PaO2)
         ↑                      ↑
    Bound to Hb           Dissolved in plasma
    (majority)            (minor contribution)
\`\`\`

**Oxygen Delivery (DO2):**
\`\`\`
DO2 = CO × CaO2 × 10
    = CO × [(1.34 × Hb × SaO2) + (0.003 × PaO2)] × 10

Normal DO2: ~1000 mL O2/min
\`\`\`

**Oxygen Consumption (VO2):**
\`\`\`
VO2 = CO × (CaO2 - CvO2) × 10
Normal: 200-250 mL O2/min
\`\`\`

**Oxygen Extraction Ratio:**
\`\`\`
O2ER = VO2 / DO2 = (CaO2 - CvO2) / CaO2
Normal: 20-30%
Critical: >60% suggests supply-dependent VO2
\`\`\`

## Advanced Oxyhemoglobin Dissociation

**P50:**
- PO2 at which hemoglobin is 50% saturated
- Normal: 26.6 mmHg at pH 7.4, 37°C
- ↑P50 = right shift (easier O2 release)
- ↓P50 = left shift (impaired O2 release)

**Molecular Basis of Curve Shape:**
- Hemoglobin cooperativity
- T (tense) state: Low affinity, deoxy form
- R (relaxed) state: High affinity, oxy form
- Sequential O2 binding shifts T→R equilibrium
- Explains sigmoid shape

## Dyshemoglobinemias

**Carbon Monoxide Poisoning:**
- CO affinity for Hb: 200-250× greater than O2
- Carboxyhemoglobin (COHb) detected as HbO2 by standard oximeter
- Consequence: Falsely reassuring SpO2
- Requires co-oximetry for diagnosis
- Pulse CO-oximeters (SpCO) available but less accurate

**Methemoglobinemia:**
- Hemoglobin with Fe3+ instead of Fe2+
- Cannot bind O2
- Causes: Dapsone, benzocaine, nitrites, aniline dyes
- Pulse oximetry: Trends toward 85% regardless of true SaO2
- Diagnosis: Arterial blood gas co-oximetry
- Treatment: Methylene blue (reduces Fe3+ to Fe2+)

## Tissue Oxygenation Assessment

**Beyond SpO2:**
| Parameter | Measurement | Significance |
|-----------|-------------|--------------|
| ScvO2 | Central venous catheter | Global O2 extraction; target >70% in sepsis |
| SvO2 | PA catheter | Mixed venous; gold standard |
| StO2 | Near-infrared spectroscopy | Regional tissue oxygenation |
| Lactate | Blood test | Tissue hypoxia marker |

**Near-Infrared Spectroscopy (NIRS):**
- Penetrates tissue (vs. pulse ox which is transcutaneous)
- Measures HbO2 and Hb in microcirculation
- Applications: Cerebral oxygenation monitoring, muscle oxygenation
- Limitations: Variability, no standardized thresholds

## Pulse Oximetry Accuracy

**Validation Studies:**
- Most accurate: SpO2 70-100%
- Accuracy degrades below 70%
- Studies primarily in lighter-skinned populations
- Recent evidence: May overestimate SpO2 in darker skin tones (NEJM 2020)

**Occult Hypoxemia:**
- SpO2 ≥92% but SaO2 <88%
- More common in Black patients
- Clinical implications: Delayed O2 supplementation, missed hypoxemia

**Quality Indicators:**
- Perfusion index (PI): Ratio of pulsatile to non-pulsatile signal
- Low PI (<0.5) suggests unreliable reading
- Signal quality indicator on device`,
      keyTerms: [
        { term: 'Beer-Lambert law', definition: 'Physical principle relating light absorption to concentration and path length' },
        { term: 'plethysmography', definition: 'Detection of volume changes; pulse oximetry uses photoplethysmographic signal' },
        { term: 'P50', definition: 'Partial pressure of oxygen at 50% hemoglobin saturation; indicator of O2 affinity' },
        { term: 'co-oximetry', definition: 'Spectrophotometric measurement of multiple hemoglobin species (HbO2, Hb, COHb, MetHb)' },
        { term: 'occult hypoxemia', definition: 'Hidden hypoxemia where SpO2 overestimates true SaO2' },
      ],
      clinicalNotes: 'In suspected CO poisoning, do not rely on pulse oximetry. Obtain ABG with co-oximetry. SpO2 will appear normal despite significant carboxyhemoglobin.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding encompasses cellular oxygen utilization, oxygen toxicity mechanisms, goal-directed oxygenation, and interpretation in complex clinical scenarios.',
      explanation: `## Cellular Oxygen Utilization

### Mitochondrial Oxygen Metabolism
**Electron Transport Chain:**
\`\`\`
NADH/FADH2 → Complex I/II → CoQ → Complex III → Cytochrome c → Complex IV → O2
                                                                        ↓
                                                                      H2O
\`\`\`

**Cytochrome c Oxidase (Complex IV):**
- Terminal electron acceptor
- High O2 affinity (Km ~0.1-0.5 mmHg)
- Maintains function until PO2 extremely low
- Explains tissue resilience to moderate hypoxemia

**Critical Oxygen Delivery:**
- DO2 threshold below which VO2 becomes supply-dependent
- Normally ~300-400 mL O2/min
- Below this: Anaerobic metabolism, lactate production
- Varies with metabolic demand

### Oxygen Toxicity

**Pulmonary Oxygen Toxicity:**
- Mechanism: Reactive oxygen species (ROS) overwhelming antioxidant defenses
- Time-dose relationship: Higher FiO2 × longer duration = more damage
- Pathology: Capillary leak, edema, hyaline membrane formation
- Prevention: Use minimum FiO2 to achieve target SpO2

**CNS Oxygen Toxicity:**
- Primarily at hyperbaric pressures (>1.6 ATA)
- Manifestations: Seizures
- Mechanism: ROS affecting neuronal membranes

**Retinopathy of Prematurity:**
- High PaO2 in premature infants
- VEGF suppression → retinal vessel obliteration → neovascularization
- Prevention: Careful oxygen targeting (SpO2 91-95% in extreme preterms)

### Hyperoxia in Critical Illness

**Evidence of Harm:**
| Setting | Finding |
|---------|---------|
| Post-cardiac arrest | Hyperoxia associated with worse neurological outcomes |
| Stroke | No benefit, possible harm from hyperoxia |
| MI | High-flow O2 in normoxic patients may worsen outcomes |
| ARDS | Liberal O2 associated with mortality (LOCO2 trial) |
| General ICU | IOTA meta-analysis: Hyperoxia increases mortality |

**Mechanisms of Hyperoxic Injury:**
- Absorption atelectasis (nitrogen washout)
- Coronary vasoconstriction
- Systemic vasoconstriction
- Decreased cardiac output
- Increased free radical generation

## Goal-Directed Oxygenation

**Conservative Oxygen Therapy:**
| Population | SpO2 Target | Evidence |
|------------|-------------|----------|
| ARDS | 88-92% (original ARDSNet) to 92-96% | Variable evidence |
| COPD exacerbation | 88-92% | Reduces mortality vs. high-flow |
| MI/ACS | 90-94% (if hypoxic) | AVOID trial, DETO2X-AMI |
| Stroke | 94-98% | O2 only if hypoxic |
| Post-cardiac arrest | 94-98% | Avoid hyperoxia |
| Preterm neonates | 91-95% | NeOProM consortium |

**ICU-ROX Trial:**
- Conservative (SpO2 91-96%) vs. liberal (no upper limit) in ICU
- No difference in ventilator-free days
- Post-hoc: Possible harm in suspected hypoxic-ischemic encephalopathy

### Hypoxemia Differential and Assessment

**A-a Gradient:**
\`\`\`
A-a gradient = PAO2 - PaO2
PAO2 = (FiO2 × [Patm - PH2O]) - (PaCO2 / 0.8)
Normal: ~10-15 mmHg (increases with age: ~3 + 0.21 × age)
\`\`\`

**Hypoxemia Mechanisms:**

| Mechanism | A-a Gradient | Responds to O2 | Examples |
|-----------|--------------|----------------|----------|
| Hypoventilation | Normal | Yes | Opioids, NM disease |
| V/Q mismatch | Increased | Yes (partially) | COPD, PE, pneumonia |
| Shunt | Increased | Limited/No | ARDS, PFO, AVM |
| Diffusion impairment | Increased | Yes | ILD (exercise) |
| Low inspired O2 | Normal | Yes | Altitude |

**Shunt Equation:**
\`\`\`
Qs/Qt = (CcO2 - CaO2) / (CcO2 - CvO2)
CcO2 = End-capillary O2 content (assumes PAO2)
\`\`\`

### Advanced Monitoring Modalities

**Cerebral Oximetry (rSO2):**
- NIRS-based
- Reflects venous-weighted saturation (70% venous, 30% arterial)
- Normal: 60-80%
- Applications: Cardiac surgery, carotid endarterectomy, TBI
- Intervention thresholds: <50% or >20% drop from baseline

**Muscle Oxygen Saturation (SmO2):**
- Measured by NIRS on muscle (e.g., thenar eminence)
- Vascular Occlusion Test (VOT): Ischemia-reperfusion kinetics
- Predictive of outcomes in septic shock

**Systemic Oxygenation Indices:**
| Parameter | Formula | Normal | Critical |
|-----------|---------|--------|----------|
| P/F ratio | PaO2/FiO2 | >400 | <100 (severe ARDS) |
| OI | (MAP × FiO2 × 100)/PaO2 | <5 | >25 (severe) |
| OSI | (MAP × FiO2 × 100)/SpO2 | - | Correlates with OI |`,
      keyTerms: [
        { term: 'absorption atelectasis', definition: 'Alveolar collapse from rapid oxygen absorption when breathing high FiO2' },
        { term: 'critical oxygen delivery', definition: 'DO2 threshold below which oxygen consumption becomes supply-dependent' },
        { term: 'A-a gradient', definition: 'Alveolar-arterial oxygen difference; elevated in V/Q mismatch and shunt' },
        { term: 'shunt fraction', definition: 'Portion of cardiac output bypassing ventilated alveoli; unresponsive to supplemental O2' },
        { term: 'P/F ratio', definition: 'PaO2 to FiO2 ratio; marker of oxygenation efficiency, used to classify ARDS severity' },
      ],
      clinicalNotes: 'Current evidence favors conservative oxygenation targets (SpO2 92-96%) in most critically ill patients. Avoid hyperoxia except in specific circumstances (CO poisoning, air embolism).',
    },
    5: {
      level: 5,
      summary: 'Expert-level practice integrates precision oxygenation strategies, advanced monitoring interpretation, and evidence-based management across complex clinical scenarios.',
      explanation: `## Advanced Pulse Oximetry Technology

### Multi-Wavelength Pulse Oximetry
**Rainbow Technology (Masimo):**
- 7+ wavelengths vs. standard 2
- Measures: SpO2, SpCO, SpMet, total Hb, PVI
- Limitations: Less accurate than co-oximetry for COHb/MetHb

**Perfusion Index (PI):**
- Ratio of pulsatile (AC) to non-pulsatile (DC) infrared signal
- Normal: 1-5%
- Low PI: Poor perfusion, signal quality concern
- High PI: Vasodilation (sepsis, anesthesia)

**Pleth Variability Index (PVI):**
- Dynamic index of fluid responsiveness
- PVI = (PImax - PImin) / PImax × 100
- PVI >13% suggests volume responsiveness (mechanically ventilated)
- Limitations: Arrhythmias, spontaneous breathing, vasopressors

### Accuracy in Diverse Populations

**Racial Bias in Pulse Oximetry:**
- Sjoding et al., NEJM 2020: Occult hypoxemia 3× more common in Black patients
- Mechanism: Skin pigmentation affects light absorption
- Clinical impact: Delayed recognition of hypoxemia
- FDA guidance updates: Require diverse study populations

**Addressing Bias:**
- Awareness of limitation
- Lower threshold for ABG in uncertain cases
- Multi-site averaging
- New algorithms under development

### Oxygen Therapy Delivery Systems

**High-Flow Nasal Cannula (HFNC):**
| Parameter | Mechanism | Benefit |
|-----------|-----------|---------|
| Flow 30-60 L/min | Matches/exceeds peak inspiratory flow | Delivers set FiO2 accurately |
| Heated humidification | Mucociliary function | Comfort, secretion clearance |
| PEEP effect | 1 cmH2O per 10 L/min (mouth closed) | Alveolar recruitment |
| Dead space washout | CO2 clearance | Reduced WOB |

**HFNC vs. NIV in Hypoxemic RF:**
- FLORALI trial: HFNC reduced intubation and 90-day mortality vs. standard O2
- May be superior to NIV in de novo hypoxemic respiratory failure
- ROX index predicts HFNC success: (SpO2/FiO2)/RR >4.88 at 12h associated with success

### Oxygenation in ARDS

**PEEP Titration by Oxygenation:**
- FiO2/PEEP tables (ARDSNet)
- Decremental PEEP trial: Find best compliance
- Recruit-derecruit phenomenon

**Prone Positioning:**
- PROSEVA: Mortality benefit in severe ARDS (P/F <150)
- Mechanism: V/Q matching, dorsal lung recruitment
- Duration: ≥16 hours/day
- SpO2 may paradoxically drop initially (derecruitment during turn)

**ECMO Oxygenation:**
- VV-ECMO: Blood flow determines O2 delivery
- Target SpO2: 88-92% (rest via native lungs)
- Recirculation reduces efficiency
- Sweep gas: Controls CO2 removal

### Oxygenation in Special Populations

**Obesity:**
- Reduced FRC → rapid desaturation during apnea
- Preoxygenation: Ramp/reverse Trendelenburg position
- Target slightly higher SpO2 before intubation
- PEEP requirements often higher

**Pregnancy:**
- Increased O2 consumption (20%)
- Reduced FRC
- Leftward shift of dissociation curve (alkalosis, ↑2,3-DPG initially)
- Rapid desaturation during apnea
- Fetal oxygenation depends on maternal PaO2 >70 mmHg

**Sickle Cell Disease:**
- Sickling promoted by hypoxemia
- Target SpO2 ≥95%
- Pulse oximetry may overestimate due to HbS optical properties
- Exchange transfusion for severe ACS

### Novel Oxygenation Technologies

**Oxygen Reserve Index (ORI):**
- Masimo technology
- Reflects PaO2 in hyperoxic range (100-200 mmHg)
- Dimensionless index 0-1
- Applications: Early warning of desaturation during intubation, hyperoxia avoidance

**Transcutaneous Oxygen (TcPO2):**
- Heated electrode measures skin surface PO2
- Correlates with PaO2 in normotensive patients
- Applications: Wound healing assessment, peripheral vascular disease
- Limitations: Requires calibration, affected by perfusion

### Evidence-Based Oxygenation Targets

**HOT-ICU Trial (2021):**
- Lower (SpO2 88%) vs. higher (SpO2 96%) in ICU hypoxemia
- No difference in 90-day mortality
- Supports conservative approach safety

**PILOT Trial (2022):**
- Lower (SpO2 90%), intermediate (94%), higher (98%) targets in ICU
- No difference in ventilator-free days
- Supports avoiding hyperoxia

**Synthesized Recommendations:**
| Scenario | Target SpO2 | Notes |
|----------|-------------|-------|
| General ICU | 92-96% | Avoid hyperoxia |
| ARDS | 88-92% to 92-96% | Guideline dependent |
| COPD | 88-92% | Strong evidence |
| COVID-19 ARDS | 92-96% | Similar to non-COVID ARDS |
| Cardiac arrest (post-ROSC) | 94-98% | Titrate to avoid hyperoxia |
| Pneumonia | 92-96% | No benefit of higher targets |
| Procedural sedation | ≥92% | Pre-oxygenate high-risk patients |

### Quality and Safety

**Alarm Management:**
- SpO2 alarms: Most frequent ICU alarm
- Alarm fatigue leads to missed events
- Optimize limits: Avoid too narrow range
- Delay settings: Brief desaturations may not require immediate alarm

**Documentation and Trending:**
- SpO2 should be documented with supplemental O2 level
- Trends more valuable than single readings
- Integrate with other vitals for clinical picture`,
      keyTerms: [
        { term: 'perfusion index', definition: 'Ratio of pulsatile to non-pulsatile photoplethysmographic signal reflecting peripheral perfusion' },
        { term: 'pleth variability index', definition: 'Dynamic measure of respiratory variation in perfusion index; predictor of fluid responsiveness' },
        { term: 'ROX index', definition: '(SpO2/FiO2)/RR; predicts success of high-flow nasal cannula in hypoxemic respiratory failure' },
        { term: 'oxygen reserve index', definition: 'Masimo parameter reflecting oxygenation in hyperoxic range (PaO2 100-200 mmHg)' },
        { term: 'occult hypoxemia', definition: 'Condition where pulse oximetry overestimates true SaO2, associated with darker skin tones' },
      ],
      clinicalNotes: `Clinical Pearls:
1. Conservative SpO2 targets (92-96%) appropriate for most ICU patients; avoid hyperoxia
2. Pulse oximetry may overestimate SpO2 in patients with darker skin; maintain high index of suspicion
3. ROX index >4.88 at 12 hours predicts HFNC success in hypoxemic respiratory failure
4. During intubation, apneic oxygenation (NC at 15 L/min) extends safe apnea time
5. In sickle cell disease, target SpO2 ≥95% to prevent sickling
6. PVI >13% suggests fluid responsiveness in mechanically ventilated patients
7. ORI can provide early warning of impending desaturation before SpO2 drops`,
    },
  },

  media: [
    {
      id: 'oxyhemoglobin-curve',
      type: 'diagram',
      filename: 'oxyhemoglobin-dissociation.svg',
      title: 'Oxyhemoglobin Dissociation Curve',
      description: 'Sigmoid curve showing relationship between PaO2 and oxygen saturation with shift factors',
    },
    {
      id: 'pulse-oximetry-mechanism',
      type: 'diagram',
      filename: 'pulse-oximetry-mechanism.svg',
      title: 'Pulse Oximetry Mechanism',
      description: 'Light absorption by oxygenated and deoxygenated hemoglobin',
    },
  ],

  citations: [
    {
      id: 'nejm-racial-bias',
      type: 'article',
      title: 'Racial Bias in Pulse Oximetry Measurement',
      authors: ['Sjoding, M.W.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMc2029240',
    },
    {
      id: 'west-gas-exchange',
      type: 'textbook',
      title: 'Pulmonary Pathophysiology: The Essentials',
      authors: ['West, J.B.'],
      source: 'Wolters Kluwer',
    },
  ],

  crossReferences: [
    { targetId: 'physical-exam-vital-signs-overview', targetType: 'topic', relationship: 'parent', label: 'Vital Signs' },
    { targetId: 'system-respiratory', targetType: 'system', relationship: 'related', label: 'Respiratory System' },
    { targetId: 'condition-ards', targetType: 'condition', relationship: 'related', label: 'ARDS' },
  ],

  tags: {
    systems: ['respiratory', 'cardiovascular'],
    topics: ['physical-examination', 'vital-signs', 'clinical-skills', 'critical-care'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency-medicine', 'critical-care', 'pulmonology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default oxygenSaturation;
