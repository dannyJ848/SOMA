/**
 * Gas Exchange - Respiratory Physiology
 *
 * Physiology of oxygen and carbon dioxide exchange between
 * alveoli and blood, including diffusion and transport.
 */

import { EducationalContent } from '../../types';

export const gasExchangeContent: EducationalContent = {
  id: 'physiology-gas-exchange',
  type: 'concept',
  name: 'Gas Exchange',
  alternateNames: ['Respiratory Gas Exchange', 'Pulmonary Gas Transfer', 'Oxygen and CO2 Exchange'],

  levels: {
    1: {
      level: 1,
      summary: 'Gas exchange is the process where oxygen moves from air in the lungs into the blood, and carbon dioxide moves from blood into the air to be breathed out.',
      explanation: `## What Is Gas Exchange?

Gas exchange is how your body gets oxygen from the air and removes carbon dioxide waste. This happens in tiny air sacs called alveoli in your lungs.

### Where Gas Exchange Happens

**The Alveoli:**
- Tiny air sacs at the end of breathing tubes
- About 300 million in each lung
- Surrounded by tiny blood vessels (capillaries)
- Walls are extremely thin - only one cell thick

### How Oxygen Gets Into Blood

**Step 1:**
- Air enters lungs and reaches alveoli
- Oxygen is present in the alveolar air

**Step 2:**
- Oxygen dissolves in the thin film of fluid lining alveoli

**Step 3:**
- Oxygen crosses the alveolar wall
- Passes through capillary wall
- Enters the bloodstream
- Binds to hemoglobin in red blood cells

### How Carbon Dioxide Leaves Blood

**Step 1:**
- Carbon dioxide is waste from body cells
- Carried in blood to lungs

**Step 2:**
- CO2 crosses from blood into alveoli
- Opposite direction of oxygen

**Step 3:**
- CO2 is breathed out

### Why This Works

**Diffusion:**
- Gases move from high concentration to low concentration
- Oxygen: high in alveoli, low in blood -> moves into blood
- CO2: high in blood, low in alveoli -> moves out of blood

**Thin Walls:**
- The blood-air barrier is extremely thin
- Only about 0.5 micrometers
- Allows rapid gas exchange
- Like a very thin screen door

### Large Surface Area

**Total Area:**
- If spread out, alveolar surface would cover a tennis court
- This huge area allows lots of gas exchange
- About 70-100 square meters`,
      keyTerms: [
        { term: 'alveoli', definition: 'Tiny air sacs where gas exchange occurs' },
        { term: 'diffusion', definition: 'Movement of gases from high to low concentration' },
        { term: 'hemoglobin', definition: 'Protein in red blood cells that carries oxygen' },
        { term: 'capillaries', definition: 'Tiny blood vessels surrounding alveoli' },
        { term: 'blood-air barrier', definition: 'Thin membrane separating air in alveoli from blood' },
      ],
      analogies: [
        'Gas exchange is like a crowded room - people move from crowded areas to empty spaces until evenly distributed.',
        'The blood-air barrier is like a coffee filter - thin enough for exchange but strong enough to keep blood and air separate.',
        'Hemoglobin is like a delivery truck - it picks up oxygen and carries it to where it is needed.',
      ],
      examples: [
        'In pneumonia, fluid fills alveoli and blocks gas exchange, causing low oxygen levels.',
        'At high altitude, less oxygen in the air means less oxygen diffuses into blood.',
      ],
    },
    2: {
      level: 2,
      summary: 'Gas exchange occurs by diffusion across the alveolar-capillary membrane. Oxygen moves from alveoli to blood driven by partial pressure gradients, while carbon dioxide moves in the opposite direction.',
      explanation: `## Partial Pressure and Diffusion

### Partial Pressures

**Definition:**
Partial pressure is the pressure a gas would exert if it alone occupied the volume. Total pressure is the sum of partial pressures (Dalton\'s Law).

**Atmospheric Air (Sea Level):**
- Total pressure: 760 mmHg
- Oxygen (21%): 159 mmHg (760 x 0.21)
- Nitrogen (79%): 601 mmHg
- CO2 (0.04%): 0.3 mmHg
- Water vapor: 47 mmHg (saturated at 37C)

**Alveolar Air:**
- PO2: ~100 mmHg
- PCO2: ~40 mmHg
- PH2O: 47 mmHg

**Arterial Blood:**
- PaO2: 95-100 mmHg
- PaCO2: 40 mmHg

**Venous Blood:**
- PvO2: 40 mmHg
- PvCO2: 46 mmHg

### Alveolar Gas Equation

**Formula:**
PAO2 = FiO2(Patm - PH2O) - (PaCO2/R)

Where:
- PAO2 = alveolar PO2
- FiO2 = fraction of inspired oxygen (0.21 for room air)
- Patm = atmospheric pressure (760 mmHg at sea level)
- PH2O = water vapor pressure (47 mmHg)
- R = respiratory quotient (typically 0.8)

**Simplified (room air at sea level):**
PAO2 = 150 - (PaCO2/0.8)
Normal PAO2 = ~100 mmHg

### Diffusion Capacity

**Fick\'s Law of Diffusion:**
Rate of diffusion proportional to:
- Surface area (A)
- Partial pressure difference (delta P)
- Solubility (S)
- 1/distance (thickness)

**DLCO (Diffusing Capacity of Lung for Carbon Monoxide):**
- Measures gas exchange efficiency
- Uses CO (binds strongly to hemoglobin)
- Normal: 80-120% predicted
- Reduced in emphysema, fibrosis

### The Blood-Air Barrier

**Structure:**
1. Surfactant layer
2. Type I alveolar cell
3. Basement membrane (fused)
4. Capillary endothelial cell
5. Plasma

**Thickness:** 0.5 micrometers

### Factors Affecting Gas Exchange

**Diffusion Limitation:**
- Thickening of blood-air barrier (fibrosis)
- Reduced surface area (emphysema)
- Increased distance (edema)

**Perfusion Limitation:**
- Low cardiac output
- Reduced pulmonary blood flow
- Shunt (blood bypassing ventilated alveoli)

**Ventilation-Perfusion Mismatch:**
- V/Q = 1 in ideal alveolus
- Dead space (V/Q > 1): ventilation without perfusion
- Shunt (V/Q < 1): perfusion without ventilation

### A-a Gradient

**Calculation:**
A-a gradient = PAO2 - PaO2

**Normal:**
- <10-15 mmHg (young adults)
- <20-25 mmHg (elderly)

**Interpretation:**
- Normal A-a: problem is hypoventilation or low FiO2
- Elevated A-a: problem is within the lung (V/Q mismatch, shunt, diffusion limitation)

### Hypoxemia Causes

| Mechanism | A-a Gradient | Response to O2 | Example |
|-----------|--------------|----------------|---------|
| Hypoventilation | Normal | Good | Drug overdose |
| Low FiO2 | Normal | Excellent | High altitude |
| V/Q mismatch | Increased | Good | COPD |
| Shunt | Increased | Poor | ARDS |
| Diffusion limitation | Increased | Good (at rest) | Pulmonary fibrosis |`,
      keyTerms: [
        { term: 'partial pressure', definition: 'Pressure exerted by an individual gas in a mixture' },
        { term: 'A-a gradient', definition: 'Difference between alveolar and arterial oxygen partial pressures' },
        { term: 'DLCO', definition: 'Diffusing capacity of lung for carbon monoxide; measures gas transfer efficiency' },
        { term: 'V/Q ratio', definition: 'Ventilation-perfusion ratio; should be 1 for optimal gas exchange' },
        { term: 'shunt', definition: 'Blood passing through lungs without being oxygenated' },
      ],
      analogies: [
        'Partial pressure is like your share of the rent - your portion of the total pressure.',
        'The A-a gradient is like checking for leaks - if there is a big difference, something is wrong with the system.',
        'A shunt is like a bypass road that goes around the lungs - blood takes a shortcut without picking up oxygen.',
      ],
      examples: [
        'In emphysema, loss of alveolar walls reduces surface area, decreasing DLCO and causing V/Q mismatch.',
        'In ARDS, fluid-filled alveoli create shunt, causing refractory hypoxemia despite high oxygen delivery.',
      ],
    },
    3: {
      level: 3,
      summary: 'Advanced gas exchange physiology includes oxygen and carbon dioxide transport mechanisms, the oxygen-hemoglobin dissociation curve, and the regulation of ventilation through chemoreceptors.',
      explanation: `## Oxygen Transport

### Dissolved Oxygen

**Amount:**
- 0.003 mL O2 per mmHg per 100 mL blood
- At PaO2 100 mmHg: 0.3 mL/100 mL
- Minor contribution to total transport

### Hemoglobin-Bound Oxygen

**Hemoglobin Structure:**
- 4 subunits (2 alpha, 2 beta)
- Each with heme group
- Each heme binds one O2 molecule
- 4 O2 per hemoglobin molecule

**Oxygen Content Equation:**
CaO2 = (1.34 x Hgb x SaO2) + (0.003 x PaO2)

Normal (Hb 15, SaO2 98%, PaO2 100):
CaO2 = (1.34 x 15 x 0.98) + (0.003 x 100) = 19.7 + 0.3 = 20 mL/100 mL

### Oxygen-Hemoglobin Dissociation Curve

**Shape:**
- Sigmoidal (S-shaped)
- Cooperative binding
- Steep at 10-60 mmHg (unloading zone)
- Flat at >60 mmHg (loading zone)

**P50:**
- PO2 at which hemoglobin is 50% saturated
- Normal: 26.6 mmHg
- Right shift: higher P50
- Left shift: lower P50

**Right Shift (Decreased Affinity, Easier Unloading):**
- Increased temperature
- Increased PCO2 (Bohr effect)
- Decreased pH (Bohr effect)
- Increased 2,3-DPG

**Left Shift (Increased Affinity, Harder Unloading):**
- Decreased temperature
- Decreased PCO2
- Increased pH
- Decreased 2,3-DPG
- CO poisoning
- Fetal hemoglobin

### 2,3-DPG

**Function:**
- Binds to hemoglobin
- Reduces oxygen affinity
- Facilitates unloading
- Increased in:
  - Chronic hypoxia
  - Anemia
  - High altitude

## Carbon Dioxide Transport

### Forms of CO2 in Blood

**Dissolved:**
- 5-10% of total
- 0.07 mL per mmHg per 100 mL

**Bicarbonate:**
- 60-70% of total
- CO2 + H2O -> H2CO3 -> H+ + HCO3-
- Carbonic anhydrase catalyzes
- Chloride shift (Hamburger effect)

**Carbamino Compounds:**
- 20-30% of total
- CO2 binds to hemoglobin
- Forms carbaminohemoglobin

### CO2 Dissociation Curve

**Characteristics:**
- More linear than O2 curve
- Position depends on oxygenation (Haldane effect)
- Deoxygenated blood carries more CO2

**Haldane Effect:**
- Deoxygenated hemoglobin binds more CO2
- Facilitates CO2 pickup in tissues
- Complements Bohr effect

## Ventilation-Perfusion Relationships

### Regional Differences

**Upright Lung:**
- Base: higher perfusion, more ventilation
- Apex: lower perfusion, less ventilation
- V/Q varies from 0.6 (base) to 3.0 (apex)

**Effects:**
- PO2 slightly higher at apex
- PCO2 slightly lower at apex
- Recruitment of base during exercise

### West Zones

**Zone 1 (Apex):**
- Pa > PV > PA (dead space)
- Uncommon in health
- May occur with:
  - Hemorrhage
  - Positive pressure ventilation
  - High PEEP

**Zone 2:**
- Pa > PA > PV
- Waterfall effect
- Flow determined by Pa - PA

**Zone 3 (Base):**
- Pa > PV > PA
- Blood flow depends on perfusion pressure
- Most of lung in health

### Shunt Equation

**Qs/Qt = (CcO2 - CaO2) / (CcO2 - CvO2)**

Where:
- CcO2 = end-capillary O2 content
- CaO2 = arterial O2 content
- CvO2 = mixed venous O2 content

**Normal:** <5%
**Significant:** >15-20%

## Hypoxemia Mechanisms Detailed

### Hypoventilation
- PAO2 decreases as PaCO2 increases
- A-a gradient normal
- Responds well to supplemental O2

### V/Q Mismatch
- Most common cause of hypoxemia
- Areas of low V/Q act like shunt
- Improved by supplemental O2

### Shunt
- Blood bypasses ventilated alveoli
- Intrapulmonary or cardiac
- Refractory to O2 therapy
- Respond only to increasing FiO2 slightly

### Diffusion Limitation
- Thick barrier or reduced surface
- Exercise worsens (short transit time)
- Improves with supplemental O2
- Rest usually compensated`,
      keyTerms: [
        { term: 'oxygen content', definition: 'Total amount of oxygen in blood (dissolved + hemoglobin-bound)' },
        { term: 'P50', definition: 'PO2 at which hemoglobin is 50% saturated' },
        { term: '2,3-DPG', definition: '2,3-diphosphoglycerate; compound that decreases hemoglobin oxygen affinity' },
        { term: 'Bohr effect', definition: 'Right shift of oxyhemoglobin curve by increased CO2 or decreased pH' },
        { term: 'Haldane effect', definition: 'Increased CO2 binding by deoxygenated hemoglobin' },
      ],
      clinicalNotes: 'The oxygen-hemoglobin dissociation curve has important clinical implications. In exercising muscle (high CO2, low pH, high temperature), the curve shifts right, facilitating oxygen unloading. In the lungs (opposite conditions), it shifts left, facilitating oxygen loading.',
    },
    4: {
      level: 4,
      summary: 'Clinical gas exchange physiology covers arterial blood gas interpretation, pulse oximetry limitations, mechanisms of hypoxia and hypercapnia, and assessment of gas exchange in disease states.',
      explanation: `## Arterial Blood Gas Interpretation

### Normal Values

| Parameter | Normal Range |
|-----------|--------------|
| pH | 7.35-7.45 |
| PaCO2 | 35-45 mmHg |
| PaO2 | 80-100 mmHg (room air) |
| HCO3 | 22-26 mEq/L |
| Base excess | -2 to +2 |
| SaO2 | 95-100% |

### Step-by-Step Interpretation

**Step 1: Assess pH**
- pH <7.35: Acidosis
- pH >7.45: Alkalosis
- pH 7.35-7.45: Normal or compensated

**Step 2: Identify Primary Disorder**
- Metabolic: pH and HCO3 same direction
- Respiratory: pH and PaCO2 opposite

**Step 3: Check Compensation**
- Winter\'s formula (metabolic acidosis)
- Expected PaCO2 = 1.5 x HCO3 + 8 +/- 2

**Step 4: Calculate A-a Gradient**
- PAO2 = FiO2(Patm - 47) - (PaCO2/0.8)
- A-a = PAO2 - PaO2
- Normal < age/4 + 4

### Pulse Oximetry

**Principle:**
- Beer-Lambert law
- Absorption at 660 nm (deoxy) and 940 nm (oxy)
- Ratio calculates saturation

**Limitations:**
- Cannot distinguish COHb (reads falsely high)
- Poor signal with low perfusion
- Motion artifact
- Dark skin underestimates
- Dyshemoglobins interfere

**Accuracy:**
- Good at 80-100%
- Poor below 70%
- SpO2 typically 2-4% higher than SaO2

## Hypoxia vs Hypoxemia

### Hypoxemia (Low PaO2)

**Causes:**
- Hypoventilation
- Low FiO2
- V/Q mismatch
- Shunt
- Diffusion limitation

### Hypoxia (Inadequate Tissue Oxygen)

**Types:**
1. **Hypoxic hypoxia:** Low PaO2
2. **Anemic hypoxia:** Low hemoglobin
3. **Circulatory hypoxia:** Low cardiac output
4. **Histotoxic hypoxia:** Cyanide poisoning

### Oxygen Delivery

**DO2 = Cardiac Output x Arterial Oxygen Content**
- Normal: ~1000 mL/min
- Depends on:
  - Cardiac output
  - Hemoglobin concentration
  - SaO2

### Oxygen Consumption

**VO2 = CO x (CaO2 - CvO2)**
- Normal: ~250 mL/min
- Tissue extraction: 25-30%
- Can increase 10x with exercise

### Oxygen Extraction Ratio

**O2ER = VO2 / DO2 = (CaO2 - CvO2) / CaO2**
- Normal: 0.25-0.30
- Increased: low DO2 or high VO2
- Decreased: sepsis (pathologic)

## Hypercapnia

### Mechanisms

**Hypoventilation:**
- Decreased respiratory drive
- Neuromuscular disease
- Chest wall restriction
- Central sleep apnea

**Increased CO2 Production:**
- Fever
- Sepsis
- High carbohydrate intake
- Exercise

**Increased Dead Space:**
- COPD
- Pulmonary embolism
- Mechanical ventilation

**V/Q Mismatch:**
- High V/Q areas
- Dead space effect

### Acute vs Chronic

**Acute:**
- pH falls 0.08 per 10 mmHg rise in PaCO2
- Compensatory mechanisms not active
- Severe acidemia

**Chronic:**
- Renal compensation (HCO3 retention)
- pH near normal despite high PaCO2
- Kidneys take 3-5 days

### Permissive Hypercapnia

**Strategy:**
- Accept elevated PaCO2
- To protect lung (low tidal volume)
- pH >7.25 acceptable
- Not if:
  - Increased ICP
  - Severe pulmonary hypertension
  - Hemodynamic instability

## Assessment of Gas Exchange

### P/F Ratio

**PaO2/FiO2:**
- Normal: 400-500
- Mild ARDS: 200-300
- Moderate ARDS: 100-200
- Severe ARDS: <100

### Alveolar-Arterial Oxygen Difference

**Normal:**
- Young: <10 mmHg
- Elderly: <20 mmHg

**Elevated in:**
- V/Q mismatch
- Shunt
- Diffusion limitation

### Shunt Fraction

**Calculation:**
- Requires pulmonary artery catheter
- Mixed venous sample
- Qs/Qt calculation
- Normal <5%

### Dead Space

**Physiologic Dead Space:**
Vd/Vt = (PaCO2 - PeCO2) / PaCO2
- Normal: 0.25-0.35
- Increased in COPD, PE

**Bohr Equation:**
Used to calculate dead space ratio

### Diffusing Capacity

**DLCO:**
- Normal: 80-120% predicted
- Decreased:
  - Emphysema (loss of surface area)
  - Pulmonary fibrosis (thick barrier)
  - Pulmonary vascular disease
  - Anemia

**DLCO/VA (Kco):**
- Corrects for lung volume
- "Per unit volume" diffusion
- Interpret with TLC`,
      keyTerms: [
        { term: 'oxygen delivery', definition: 'Total oxygen transported to tissues per minute (CO x CaO2)' },
        { term: 'oxygen extraction', definition: 'Fraction of delivered oxygen consumed by tissues' },
        { term: 'P/F ratio', definition: 'PaO2 to FiO2 ratio; measure of oxygenation efficiency' },
        { term: 'dead space', definition: 'Portion of tidal volume that does not participate in gas exchange' },
        { term: 'permissive hypercapnia', definition: 'Ventilation strategy accepting elevated PaCO2 to protect lungs' },
      ],
      clinicalNotes: 'The P/F ratio is widely used to classify ARDS severity, but it is affected by ventilator settings including PEEP. The oxygenation index (OI) and oxygen saturation index (OSI) incorporate mean airway pressure and may be more reflective of lung injury severity.',
    },
    5: {
      level: 5,
      summary: 'Expert gas exchange physiology includes advanced monitoring, mathematical modeling of V/Q relationships, bedside assessment techniques, and integration of gas exchange principles in mechanical ventilation strategies.',
      explanation: `## Advanced Monitoring

### Mixed Venous Oxygen Saturation

**SvO2:**
- Normal: 65-75%
- <60%: inadequate oxygen delivery
- >80%: decreased extraction (sepsis)

**ScvO2 (Central):**
- Upper body saturation
- Normally slightly higher than SvO2
- Trend useful in sepsis resuscitation

### Near-Infrared Spectroscopy (NIRS)

**Tissue Oxygen Saturation (StO2):**
- Thenar muscle
- Cerebral (neonates)
- Skeletal muscle assessment
- Trend monitoring

**Interpretation:**
- Baseline measurement
- Occlusion (ischemia) response
- Reperfusion pattern
- Shock assessment

### Transcutaneous Monitoring

**TcPO2 and TcPCO2:**
- Heated electrode
- Skin perfusion dependent
- Useful in neonates
- Trend monitoring
- Correlate with blood gas

## Mathematical Modeling

### Riley Three-Compartment Model

**Concept:**
- Ideal alveoli (perfect V/Q)
- Shunt (perfusion only)
- Dead space (ventilation only)

**Shunt Equation:**
Qs/Qt = (CcO2 - CaO2) / (CcO2 - CvO2)

**Dead Space:**
Vd/Vt = (PaCO2 - PeCO2) / PaCO2

### Multiple Inert Gas Elimination Technique (MIGET)

**Principle:**
- Infuse multiple inert gases
- Measure retention/excretion
- Characterize V/Q distribution
- Identify shunt and dead space

**Clinical Use:**
- Research tool
- Complex V/Q analysis
- Rarely used clinically

### Computational Models

**Pulmonary Circulation Models:**
- Distributed parameter
- V/Q matching
- Recruitment/derecruitment
- Drug distribution

**Gas Exchange Models:**
- Mass balance equations
- Diffusion limitations
- Multi-compartment
- Personalized prediction

## Ventilator Strategies and Gas Exchange

### PEEP and Recruitment

**Mechanism:**
- Recruits collapsed alveoli
- Reduces shunt
- Improves V/Q
- May overdistend

**Optimal PEEP:**
- Maximize compliance
- Minimize driving pressure
- EIT-guided
- Best PEEP trials

### Prone Positioning

**Gas Exchange Effects:**
- Better V/Q matching
- Recruitment of dorsal lung
- Redistribution of perfusion
- Reduced shunt fraction

**Physiologic Basis:**
- Gravity effects on perfusion
- Shape of chest
- Heart position
- Abdominal pressure

### ECMO and Gas Exchange

**VV-ECMO:**
- Oxygenation provided externally
- Lower PaO2 acceptable
- "Mixed" blood in patient
- Pre-oxygenator monitoring

**Gas Exchange Management:**
- Sweep gas flow
- Oxygen concentration
- CO2 clearance separate
- Lung rest strategy

### Inhaled Vasodilators

**Mechanism:**
- Reduce pulmonary vascular resistance
- Improve perfusion to ventilated areas
- Better V/Q matching
- Improve oxygenation

**Agents:**
- Nitric oxide
- Epoprostenol
- Iloprost

**Monitoring:**
- Response variable
- Methemoglobin (NO)
- Systemic hypotension
- Plateau pressure

## Altitude Physiology

### Acclimatization

**Acute Changes:**
- Hyperventilation
- Increased cardiac output
- Decreased PaO2
- Increased 2,3-DPG

**Chronic Adaptation:**
- Hypoxic ventilatory response
- Polycythemia
- Increased capillaries
- Mitochondrial changes

### High Altitude Illness

**Acute Mountain Sickness:**
- Headache
- Hypoxemia
- Self-limited

**High Altitude Pulmonary Edema:**
- Hypoxic vasoconstriction
- Uneven perfusion
- Capillary stress failure
- Non-cardiogenic edema

**High Altitude Cerebral Edema:**
- Vasogenic edema
- Hypoxia-induced
- Life-threatening

### Aviation and Diving

**Commercial Aviation:**
- Cabin pressure 6000-8000 feet
- PaO2 ~60 mmHg
- Generally well-tolerated
- Supplemental O2 for COPD

**Decompression Sickness:**
- Nitrogen bubble formation
- Joint pain
- Neurologic symptoms
- Treatment: recompression

## Exercise Physiology

### Gas Exchange Changes

**Ventilation:**
- Increases linearly then plateau
- Dead space/tidal volume ratio decreases
- Alveolar ventilation increases

**Perfusion:**
- Cardiac output increases 4-6x
- Pulmonary vascular recruitment
- Capillary distention
- Increased surface area

**Diffusion:**
- Shortened transit time
- May become limiting in disease
- DLCO increases
- Equilibration maintained

### Limiting Factors

**Cardiac:**
- Maximal cardiac output
- Stroke volume plateau
- Heart rate maximum

**Ventilatory:**
- Expiratory flow limitation
- Work of breathing
- Respiratory muscle fatigue

**Gas Exchange:**
- V/Q mismatch
- Diffusion limitation (disease)
- Hypoxemia (high altitude)

### Training Effects

**Adaptations:**
- Increased stroke volume
- Increased muscle capillaries
- Increased mitochondria
- Improved extraction
- Ventilatory efficiency

## Clinical Applications

### Preoperative Assessment

**Risk Stratification:**
- PFTs
- ABG
- DLCO
- Exercise testing

**Predictors of Complications:**
- FEV1 <2 L
- DLCO <60%
- ppoFEV1 <40%
- Exercise SpO2 <90%

### Weaning Assessment

**Readiness:**
- Adequate oxygenation
- Acceptable ABG
- Low ventilator support
- Minimal secretions

**Predictors:**
- RSBI <105
- Negative inspiratory force
- Vital capacity
- Airway occlusion pressure`,
      keyTerms: [
        { term: 'MIGET', definition: 'Multiple inert gas elimination technique; research method for V/Q assessment' },
        { term: 'oxygenation index', definition: '(OI) Mean airway pressure x FiO2 / PaO2 x 100; measures severity of hypoxemia' },
        { term: 'ScvO2', definition: 'Central venous oxygen saturation; mixed venous oxygen from superior vena cava' },
        { term: 'sweep gas', definition: 'Gas flow through oxygenator in ECMO controlling CO2 clearance' },
        { term: 'capillary stress failure', definition: 'Disruption of capillary walls from high pressure causing edema' },
      ],
      clinicalNotes: `Key concepts in gas exchange physiology:

1. **V/Q mismatch** is the most common cause of hypoxemia in clinical practice. Understanding the four mechanisms (hypoventilation, shunt, V/Q mismatch, diffusion limitation) guides rational therapy.

2. **Shunt fraction:** When shunt exceeds 15-20%, increasing FiO2 has minimal effect on PaO2. Management requires recruitment (PEEP, proning) to reopen collapsed units.

3. **Oxygen delivery vs oxygen consumption:** Tissue oxygenation depends on both delivery (cardiac output, hemoglobin, saturation) and extraction. Global measures may not reflect regional tissue oxygenation.

4. **The Haldane effect:** Often overlooked, this explains how deoxygenated blood in tissues picks up more CO2, and oxygenated blood in lungs releases it - complementing the Bohr effect.

5. **Pulse oximetry limitations:** CO poisoning gives falsely normal readings. Always consider CO in fire victims or those with unexplained symptoms despite normal SpO2.

6. **Dead space:** Increased dead space ratio suggests pulmonary embolism or COPD. Capnography can help identify this at the bedside.

7. **Exercise limitation:** Understanding whether limitation is cardiac, ventilatory, or gas exchange-related guides rehabilitation and therapy.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'west-gas-exchange',
      type: 'textbook',
      title: 'West\'s Respiratory Physiology: The Essentials',
      authors: ['West JB', 'Luks AM'],
      source: 'Lippincott Williams & Wilkins',
    },
    {
      id: 'nunn-applied',
      type: 'textbook',
      title: 'Nunn\'s Applied Respiratory Physiology',
      authors: ['Lumb AB'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-oxygen-transport', targetType: 'concept', relationship: 'related', label: 'Oxygen Transport' },
    { targetId: 'physiology-ventilation-mechanics', targetType: 'concept', relationship: 'related', label: 'Ventilation Mechanics' },
    { targetId: 'clinical-arterial-blood-gases', targetType: 'concept', relationship: 'related', label: 'Arterial Blood Gases' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['physiology', 'pulmonology', 'critical-care'],
    keywords: ['gas exchange', 'diffusion', 'oxygen', 'carbon dioxide', 'V/Q ratio', 'hypoxemia'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'physiology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default gasExchangeContent;
