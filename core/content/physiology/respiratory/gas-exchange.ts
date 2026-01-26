/**
 * Gas Exchange - Comprehensive Educational Content
 *
 * Covers diffusion across the alveolar-capillary membrane, V/Q matching,
 * and oxygen transport from atmosphere to tissues.
 */

import { EducationalContent } from '../../types';

export const gasExchange: EducationalContent = {
  id: 'physiology-gas-exchange',
  type: 'process',
  name: 'Gas Exchange',
  alternateNames: ['Pulmonary Gas Exchange', 'External Respiration', 'Alveolar Gas Exchange'],

  levels: {
    1: {
      level: 1,
      summary: 'Gas exchange is how oxygen gets from the air in your lungs into your blood, and how carbon dioxide leaves your blood to be breathed out.',
      explanation: `## How Does Your Body Get Oxygen?

### The Journey of Oxygen

When you breathe in, air travels through your nose or mouth, down your throat, and into your lungs. But how does the oxygen actually get into your blood?

**The Trading Place: Tiny Air Sacs**

Your lungs have millions of tiny balloon-like air sacs called **alveoli** (al-VEE-oh-lie). These are like tiny rooms where oxygen and carbon dioxide are traded:

1. **Oxygen moves IN**: Oxygen from the air you breathed passes through the thin walls of the air sacs and into tiny blood vessels
2. **Carbon dioxide moves OUT**: Carbon dioxide (a waste gas your body makes) passes from your blood into the air sacs to be breathed out

Think of it like trading cards through a fence - oxygen cards go one way, carbon dioxide cards go the other way.

### Why Does This Work?

Gases move from where there's a lot to where there's a little - like how a smell spreads through a room. This is called **diffusion**.

- Air you breathe has lots of oxygen
- Your blood coming to the lungs has little oxygen (it used it up)
- So oxygen naturally moves from air → blood

It works the opposite for carbon dioxide:
- Blood has lots of carbon dioxide (waste from cells)
- Air in your lungs has little carbon dioxide
- So carbon dioxide moves from blood → air

### What Makes Gas Exchange Work Well?

**Big surface area**: If you spread out all your air sacs flat, they'd cover a tennis court! That's a lot of space for trading gases.

**Thin walls**: The walls between air and blood are super thin (thinner than a piece of paper) so gases can pass through easily.

**Good blood flow**: Your heart pumps blood through your lungs constantly to pick up oxygen and drop off carbon dioxide.`,
      keyTerms: [
        { term: 'alveoli', definition: 'Tiny balloon-shaped air sacs in your lungs where oxygen and carbon dioxide are exchanged' },
        { term: 'diffusion', definition: 'When something spreads from where there\'s a lot to where there\'s less, like a smell spreading through a room' },
        { term: 'carbon dioxide', definition: 'A waste gas your body makes that you breathe out' },
        { term: 'oxygen', definition: 'The gas in air that your body needs to make energy' },
      ],
      analogies: [
        'Your alveoli are like millions of tiny bubbles at the end of a straw, each one a place where air and blood can trade gases.',
        'Gas exchange is like two people passing notes under a door - oxygen notes go in, carbon dioxide notes come out.',
        'Diffusion is like dropping food coloring in water - it spreads from where it\'s dark (lots) to where it\'s clear (little).',
      ],
      examples: [
        'When you come inside on a cold day and see your breath, that\'s the carbon dioxide and water vapor you just breathed out.',
        'High-altitude climbers need oxygen tanks because there\'s less oxygen in the thin mountain air, making gas exchange harder.',
        'When you exercise, you breathe faster to exchange more oxygen because your muscles need more.',
      ],
    },
    2: {
      level: 2,
      summary: 'Gas exchange occurs by diffusion across the alveolar-capillary membrane, driven by partial pressure gradients, with oxygen and carbon dioxide exchanging efficiently due to the large surface area and thin diffusion barrier.',
      explanation: `## How Gas Exchange Works

### The Alveolar-Capillary Unit

Gas exchange happens where air meets blood at the **alveolar-capillary membrane**:

**Structure (from air to blood):**
1. Surfactant layer (reduces surface tension)
2. Alveolar epithelium (Type I pneumocytes - very thin)
3. Basement membrane (fused between epithelium and capillary)
4. Capillary endothelium

**Total thickness**: 0.3-0.5 micrometers (extremely thin!)

**Surface area**: 50-100 m² (size of a tennis court)

### Partial Pressures Drive Diffusion

**Partial pressure** = the pressure exerted by one gas in a mixture

**Atmospheric air at sea level (760 mmHg total):**
- Oxygen (O2): 160 mmHg (21% of air)
- Nitrogen (N2): 600 mmHg (79% of air)
- Carbon dioxide (CO2): 0.3 mmHg (trace)

**Alveolar air is different (humidified, mixed with CO2):**
- Oxygen (PaO2): ~100 mmHg
- Carbon dioxide (PaCO2): ~40 mmHg
- Water vapor: 47 mmHg

### Oxygen Diffusion

| Location | PO2 (mmHg) | Description |
|----------|-----------|-------------|
| Atmospheric air | 160 | Inspired air |
| Alveolar air | 100 | After mixing and humidification |
| Venous blood (arriving) | 40 | Oxygen depleted |
| Arterial blood (leaving) | 100 | Fully oxygenated |

**Gradient**: 100 - 40 = 60 mmHg drives O2 into blood

The blood reaches equilibrium (PO2 = 100 mmHg) in about 0.25 seconds, but it stays in the capillary for 0.75 seconds - plenty of reserve time!

### Carbon Dioxide Diffusion

| Location | PCO2 (mmHg) | Description |
|----------|------------|-------------|
| Venous blood (arriving) | 46 | Loaded with CO2 |
| Alveolar air | 40 | Maintained by ventilation |
| Arterial blood (leaving) | 40 | CO2 eliminated |

**Gradient**: Only 6 mmHg, but CO2 diffuses 20x faster than O2, so it still crosses easily.

### Ventilation-Perfusion (V/Q) Matching

For efficient gas exchange, **ventilation (V)** and **blood flow (Q)** must be matched:

**Ideal V/Q ratio**: 0.8 (4 L/min ventilation ÷ 5 L/min blood flow)

**V/Q Mismatch Examples:**

| V/Q Ratio | What It Means | Example |
|-----------|---------------|---------|
| V/Q = 0 | No ventilation (shunt) | Collapsed lung, pneumonia |
| V/Q low | Poor ventilation | Mucus plugging, asthma |
| V/Q high | Poor blood flow | Pulmonary embolism |
| V/Q = ∞ | No blood flow (dead space) | PE blocking vessel |

### Regional Differences in the Lung

The lung isn't uniform - gravity affects V/Q:

**At the BASE (bottom when standing):**
- More blood flow (gravity pulls blood down)
- V/Q lower (~0.6)

**At the APEX (top):**
- Less blood flow
- V/Q higher (~3.3)

**Average** across whole lung: 0.8

### Diffusion vs. Perfusion Limitation

**Diffusion-limited**: Gas exchange limited by how fast gas crosses membrane
- Example: CO (carbon monoxide) - used to test diffusion capacity (DLCO)

**Perfusion-limited**: Gas exchange limited by blood flow
- Examples: O2 and CO2 (normally)
- Gas equilibrates before blood leaves capillary

**O2 can become diffusion-limited if:**
- Membrane thickens (fibrosis)
- Surface area decreases (emphysema)
- Transit time shortens (exercise + disease)`,
      keyTerms: [
        { term: 'partial pressure', definition: 'The pressure exerted by a single gas in a mixture of gases; drives diffusion', pronunciation: 'PAR-shul PRESH-ur' },
        { term: 'alveolar-capillary membrane', definition: 'The thin barrier between alveolar air and blood where gas exchange occurs', pronunciation: 'al-VEE-oh-lar KAP-ih-lair-ee' },
        { term: 'V/Q ratio', definition: 'Ventilation-perfusion ratio; describes matching of air flow to blood flow in the lungs' },
        { term: 'shunt', definition: 'Blood passing through the lungs without being oxygenated; V/Q = 0' },
        { term: 'dead space', definition: 'Ventilated areas that don\'t participate in gas exchange; V/Q = infinity' },
        { term: 'Type I pneumocyte', definition: 'Thin flat cells that make up 95% of alveolar surface area and allow gas diffusion' },
      ],
      analogies: [
        'V/Q matching is like having the right number of workers (blood flow) for the amount of packages (ventilation) - too many workers standing around or too many undelivered packages are both inefficient.',
        'The alveolar-capillary membrane is like plastic wrap - very thin but still a barrier that gases must cross.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pulmonary gas exchange follows Fick\'s law of diffusion, with efficiency determined by alveolar-capillary membrane characteristics, V/Q distribution, and the balance between diffusion and perfusion limitations across varying physiological conditions.',
      explanation: `## Diffusion Physiology

### Fick's Law of Diffusion

**Vgas = (A × D × ΔP) / T**

Where:
- Vgas = rate of gas transfer
- A = surface area
- D = diffusion coefficient (solubility/√molecular weight)
- ΔP = partial pressure gradient
- T = thickness of membrane

**Clinical implications:**
| Factor | Disease Example | Effect |
|--------|-----------------|--------|
| ↓ Area | Emphysema | ↓ Gas exchange |
| ↓ ΔP | High altitude | ↓ O2 uptake |
| ↑ Thickness | Pulmonary fibrosis | ↓ Diffusion |

### Diffusion Coefficient

CO2 diffuses ~20x faster than O2 despite similar molecular weights:
- CO2 is much more soluble in plasma
- D = solubility / √MW
- This is why CO2 retention occurs late in lung disease

### The Alveolar Gas Equation

**PAO2 = PIO2 - (PACO2 / R)**

Where:
- PAO2 = alveolar PO2
- PIO2 = inspired PO2 = FiO2 × (Patm - PH2O) = 0.21 × (760-47) = 150 mmHg
- PACO2 = alveolar PCO2 ≈ arterial PCO2
- R = respiratory quotient (~0.8)

**Simplified**: PAO2 = 150 - (PaCO2 × 1.25)

### Alveolar-Arterial (A-a) Gradient

**A-a gradient = PAO2 - PaO2**

| Normal A-a Gradient | Value |
|---------------------|-------|
| Young adult | 5-10 mmHg |
| Elderly | Age/4 + 4 mmHg |

**Causes of elevated A-a gradient:**
1. V/Q mismatch (most common)
2. Shunt
3. Diffusion impairment

**Normal A-a gradient with hypoxemia:**
- Hypoventilation (↑ PaCO2)
- Low FiO2 (altitude)

### Ventilation-Perfusion Relationships

**Oxygen-CO2 Diagram:**
- Plots PO2 vs PCO2 for different V/Q ratios
- Shows range from V/Q = 0 (venous blood composition) to V/Q = ∞ (inspired air composition)
- Normal operating point: V/Q = 0.8

**Hypoxic Pulmonary Vasoconstriction (HPV):**
- Unique to pulmonary circulation (systemic vessels dilate with hypoxia)
- Low alveolar PO2 → local vasoconstriction
- Redirects blood away from poorly ventilated areas
- Improves V/Q matching
- Mechanism: Inhibition of K+ channels → depolarization → Ca2+ influx
- Blunted by: Vasodilators, anesthetics, sepsis

### V/Q Distribution

**Three-Zone Model (West Zones):**

| Zone | Location | Characteristics | V/Q |
|------|----------|-----------------|-----|
| Zone 1 | Apex | PA > Pa > Pv (potential dead space) | Highest |
| Zone 2 | Middle | Pa > PA > Pv (waterfall effect) | Intermediate |
| Zone 3 | Base | Pa > Pv > PA (continuous flow) | Lowest |

Where PA = alveolar pressure, Pa = arterial, Pv = venous

**Effects on gas exchange:**
- Apex: High V/Q → high PO2, low PCO2
- Base: Low V/Q → lower PO2, higher PCO2

### Shunt Equation

**Qs/Qt = (CcO2 - CaO2) / (CcO2 - CvO2)**

Where:
- Qs/Qt = shunt fraction
- CcO2 = end-capillary O2 content (calculated from PAO2)
- CaO2 = arterial O2 content
- CvO2 = mixed venous O2 content

**Anatomical shunt**: 2-5% (bronchial circulation, Thebesian veins)

**Pathological causes:**
- Intrapulmonary: ARDS, pneumonia, atelectasis
- Intracardiac: ASD, VSD, PFO

**Key feature**: Shunt does not respond to supplemental O2
- 100% O2 test: If PaO2 <500 mmHg on 100% FiO2 → significant shunt

### Diffusion Capacity (DLCO)

**DLCO = VCO / PACO**

Measured using single-breath CO uptake:
- CO avidly binds hemoglobin → virtually no back-pressure
- Measures transfer factor from alveolus to RBC

**Components:**
1/DLCO = 1/DM + 1/θVc

Where:
- DM = membrane diffusion capacity
- θ = CO-Hb reaction rate
- Vc = pulmonary capillary blood volume

**Clinical patterns:**

| DLCO | Pattern | Examples |
|------|---------|----------|
| Low | Parenchymal destruction | Emphysema |
| Low | Membrane thickening | IPF, sarcoidosis |
| Low | Vascular disease | Pulmonary hypertension, PE |
| Low | Anemia | Reduced Hb |
| High | Increased blood volume | Polycythemia, L-R shunt |
| High | Alveolar hemorrhage | Goodpasture's, SLE |`,
      keyTerms: [
        { term: 'Fick\'s law', definition: 'Describes factors determining diffusion rate: area, diffusion coefficient, pressure gradient, and membrane thickness' },
        { term: 'A-a gradient', definition: 'Alveolar-arterial oxygen gradient; difference between calculated alveolar and measured arterial PO2; assesses gas exchange efficiency' },
        { term: 'hypoxic pulmonary vasoconstriction', definition: 'Unique pulmonary response that constricts vessels to poorly ventilated areas, redirecting blood flow to improve V/Q matching' },
        { term: 'DLCO', definition: 'Diffusing capacity of lung for carbon monoxide; measures gas transfer across the alveolar-capillary membrane' },
        { term: 'West zones', definition: 'Three regions of lung with different V/Q characteristics based on relationship between alveolar, arterial, and venous pressures' },
        { term: 'respiratory quotient', definition: 'Ratio of CO2 produced to O2 consumed; normally 0.8; varies with metabolism' },
      ],
      clinicalNotes: 'The A-a gradient is essential for distinguishing hypoxemia causes. A normal gradient suggests hypoventilation or low FiO2. An elevated gradient points to V/Q mismatch, shunt, or diffusion impairment. The 100% oxygen test helps separate shunt (minimal response) from V/Q mismatch (significant improvement).',
    },
    4: {
      level: 4,
      summary: 'Gas exchange efficiency depends on the integration of diffusion kinetics, V/Q heterogeneity, shunt physiology, and adaptive mechanisms including hypoxic pulmonary vasoconstriction, with clinical assessment requiring synthesis of A-a gradient, shunt calculations, and DLCO interpretation.',
      explanation: `## Advanced Gas Exchange Physiology

### Diffusion Limitation vs. Perfusion Limitation

**Perfusion-limited transfer:**
- Gas equilibrates before blood leaves capillary
- Increasing blood flow increases gas transfer
- Normal O2 and CO2 at rest
- N2O is prototype perfusion-limited gas

**Diffusion-limited transfer:**
- Blood leaves capillary before equilibration
- Increasing diffusion capacity increases transfer
- CO is prototype diffusion-limited gas
- O2 becomes diffusion-limited in:
  - Exercise (shortened transit time)
  - Altitude (reduced driving pressure)
  - Parenchymal disease (reduced DLCO)

**Transit Time Analysis:**
- Normal capillary transit: 0.75 sec
- Time to equilibrate O2: 0.25 sec
- Reserve: 0.50 sec (3x normal)
- Exercise: transit may fall to 0.25 sec
- Disease: combination of ↓ reserve + abnormal membrane

### Oxygen Cascade

| Location | PO2 (mmHg) | Limiting Factor |
|----------|-----------|-----------------|
| Atmosphere | 160 | Barometric pressure |
| Humidified trachea | 150 | Water vapor |
| Alveolus | 100 | CO2 dilution |
| Arterial blood | 95-100 | V/Q mismatch, shunt |
| Capillary (mean) | 40 | Tissue extraction |
| Mitochondria | 1-3 | Utilization |

### V/Q Heterogeneity: Multiple Inert Gas Elimination Technique (MIGET)

**Principle:**
- Infuse 6 gases with different solubilities
- Measure arterial and mixed expired concentrations
- Calculate V/Q distribution

**Findings in disease:**

| Disease | V/Q Pattern |
|---------|-------------|
| Asthma | Low V/Q mode, minimal shunt |
| COPD | Bimodal (low V/Q + high V/Q) |
| ARDS | Shunt + low V/Q |
| Pulmonary embolism | High V/Q / dead space |
| Pneumonia | Shunt-predominant |

### Oxygen Content Calculations

**Oxygen content (CaO2):**
CaO2 = (Hb × 1.34 × SaO2) + (0.003 × PaO2)

Where:
- Hb = hemoglobin (g/dL)
- 1.34 = O2 carrying capacity of Hb (mL O2/g Hb)
- SaO2 = oxygen saturation (fraction)
- 0.003 = O2 solubility (mL O2/mmHg/dL)

**Normal values:**
- CaO2 (arterial): 20 mL O2/dL
- CvO2 (venous): 15 mL O2/dL
- C(a-v)O2 difference: 5 mL O2/dL

**Oxygen delivery (DO2):**
DO2 = CaO2 × CO × 10 = 20 × 5 × 10 = 1000 mL O2/min

**Oxygen consumption (VO2):**
VO2 = C(a-v)O2 × CO × 10 = 5 × 5 × 10 = 250 mL O2/min

### Mechanisms of Hypoxemia

| Mechanism | PaCO2 | A-a Gradient | Response to O2 |
|-----------|-------|--------------|----------------|
| Low FiO2 | Low | Normal | Complete |
| Hypoventilation | High | Normal | Complete |
| V/Q mismatch | Variable | Elevated | Good |
| Diffusion impairment | Variable | Elevated | Good |
| Shunt | Variable | Elevated | Poor |

### Shunt vs. V/Q Mismatch: Physiological Distinction

**Iso-shunt diagram:**
- Shows relationship between FiO2 and PaO2 for different shunt fractions
- Pure V/Q mismatch: Steep response to O2
- Shunt: Flat response above FiO2 0.3-0.4

**Why shunt doesn't respond to O2:**
- Shunted blood (V/Q = 0) never contacts alveolar gas
- Non-shunted blood is already maximally saturated on room air
- Increasing FiO2 adds little to O2 content (Hb fully saturated)
- Shunted blood dilutes O2 content regardless

**Clinical estimation:**
- 5% shunt ≈ 40 mmHg drop below expected PaO2
- 10% shunt: PaO2 ~100 mmHg on 100% O2
- 30% shunt: PaO2 ~50 mmHg on 100% O2

### Hypoxic Pulmonary Vasoconstriction: Mechanisms

**Oxygen sensor:**
- Mitochondria in pulmonary artery smooth muscle cells
- Reduced O2 → altered ROS signaling
- K+ channel inhibition → membrane depolarization
- Voltage-gated Ca2+ channel opening
- Smooth muscle contraction

**Modulation:**
| Factor | Effect on HPV |
|--------|--------------|
| Acidosis | Enhanced |
| Alkalosis | Inhibited |
| Hypothermia | Inhibited |
| Anesthetic agents | Inhibited |
| Vasodilators (NO, prostacyclin) | Inhibited |
| Sepsis | Inhibited |

**Clinical implications:**
- One-lung ventilation: HPV reduces shunt
- ARDS: Patchy HPV response
- Chronic hypoxia: Pulmonary hypertension

### DLCO Interpretation Algorithm

**Low DLCO:**
1. Parenchymal disease
   - IPF, hypersensitivity pneumonitis
   - Emphysema
   - Sarcoidosis
2. Vascular disease
   - Primary pulmonary hypertension
   - Chronic thromboembolic disease
3. Other
   - Anemia
   - Carboxyhemoglobin elevation

**High DLCO:**
1. Polycythemia (increased Hb, increased Vc)
2. Alveolar hemorrhage (blood in alveoli binds CO)
3. Left-to-right shunt (increased Vc)
4. Asthma (air trapping → better V/Q matching)
5. Obesity (increased cardiac output)

**DLCO/VA (KCO):**
- Corrects for lung volume
- Low DLCO with normal KCO: Volume loss (lobectomy, atelectasis)
- Low DLCO with low KCO: Membrane/vascular pathology`,
      keyTerms: [
        { term: 'perfusion limitation', definition: 'Gas exchange rate limited by blood flow; gas equilibrates before blood leaves capillary' },
        { term: 'diffusion limitation', definition: 'Gas exchange rate limited by membrane transfer; blood leaves capillary before equilibration' },
        { term: 'oxygen cascade', definition: 'Stepwise drop in PO2 from atmosphere to mitochondria, with each step representing a limiting factor' },
        { term: 'MIGET', definition: 'Multiple inert gas elimination technique; research method to quantify V/Q distribution using gases of varying solubility' },
        { term: 'iso-shunt diagram', definition: 'Graph showing relationship between FiO2 and PaO2 for different shunt fractions; guides oxygen therapy expectations' },
        { term: 'KCO', definition: 'DLCO corrected for alveolar volume (DLCO/VA); distinguishes membrane pathology from volume loss' },
      ],
      clinicalNotes: 'In ICU patients, applying the shunt equation helps predict response to FiO2 changes. With >30% shunt, increasing FiO2 has diminishing returns; recruitment maneuvers, PEEP optimization, or prone positioning may be more effective. In contrast, V/Q mismatch responds well to supplemental oxygen, making this distinction clinically actionable.',
    },
    5: {
      level: 5,
      summary: 'Contemporary gas exchange assessment integrates bedside physiological measurements with advanced imaging and computational modeling to phenotype respiratory failure, guide precision therapy, and predict outcomes in complex cardiopulmonary disease.',
      explanation: `## Precision Gas Exchange Assessment

### Advanced Shunt and V/Q Analysis

**Bedside Shunt Estimation:**

Using the Riley three-compartment model:
- Ideal compartment: Perfect V/Q
- Venous admixture: V/Q = 0 (shunt)
- Alveolar dead space: V/Q = ∞

**Practical calculation:**
Qs/Qt = (CcO2 - CaO2) / (CcO2 - CvO2)

For 100% O2 (CcO2 ≈ arterial saturation + dissolved):
Estimated shunt = (PAO2 - PaO2) / 20

**Limitations:**
- Assumes single ideal compartment
- Mixed venous sample required for accuracy
- FiO2 <1.0 cannot distinguish shunt from V/Q mismatch

### Oxygen Response Curves

**P/F Ratio Across FiO2:**
- Calculate P/F at multiple FiO2 levels
- Persistent low P/F despite increasing FiO2 → shunt-predominant
- Improving P/F with increasing FiO2 → V/Q mismatch

**Oxygen Response Index (ORI):**
- Maps PaO2 against FiO2 adjustments
- Steep slope: V/Q mismatch (responsive)
- Flat slope: Shunt (non-responsive)

### DLCO: Advanced Interpretation

**Components:**
1/DLCO = 1/DM + 1/θVc

**Distinguishing membrane vs. vascular contributions:**
- DM (membrane): Surface area, thickness
- θVc (blood): Hemoglobin concentration, capillary volume

**Clinical technique:**
- Measure DLCO at different alveolar O2 concentrations
- High O2 reduces θ → isolates DM contribution
- Low O2 enhances θ → emphasizes Vc contribution

**Disease-specific patterns:**
| Disease | DM | Vc | DLCO |
|---------|----|----|------|
| Emphysema | ↓↓ | ↓ | ↓↓ |
| IPF | ↓↓ | ↓ | ↓↓ |
| Primary PHT | Normal | ↓↓ | ↓ |
| Anemia | Normal | Normal | ↓ |
| Polycythemia | Normal | Normal | ↑ |

### Dead Space Analysis

**Physiological dead space:**
VD/VT = (PaCO2 - PECO2) / PaCO2

Where PECO2 = mixed expired CO2

**Volumetric capnography:**
- Measures CO2 elimination across breath
- Phase III slope indicates V/Q heterogeneity
- Calculates:
  - Fowler dead space (anatomic)
  - Bohr dead space (physiological)
  - Alveolar dead space fraction

**Dead space as prognostic marker:**
- ARDS: VD/VT >0.57 predicts mortality
- Pulmonary embolism: Elevated dead space confirms diagnosis
- COVID-19: High dead space correlates with severity

### Imaging-Based V/Q Assessment

**CT Perfusion Analysis:**
- Dual-energy CT separates iodine from tissue
- Maps regional perfusion
- Identifies perfusion defects

**Electrical Impedance Tomography (EIT):**
- Real-time regional ventilation assessment
- Bedside identification of overdistension vs. collapse
- V/Q ratio estimation with combined perfusion assessment

**Functional MRI:**
- Gadolinium-enhanced perfusion imaging
- Hyperpolarized gas (Xe-129, He-3) ventilation imaging
- Quantitative regional V/Q mapping

### Gas Exchange in Specific Conditions

**ARDS Phenotypes:**

| Subphenotype | V/Q Pattern | Mechanism | Treatment Implication |
|--------------|-------------|-----------|----------------------|
| Focal | Shunt (dependent) | Consolidation | Prone positioning effective |
| Diffuse | Mixed V/Q + shunt | Alveolar damage | Higher PEEP may help |
| Hypoperfused | Dead space | Microthrombosis | Anticoagulation |

**Pulmonary Embolism:**
- Acute: Dead space + reflex V/Q mismatch
- V/Q scan sensitivity: 40-50% (small PE may miss)
- D(a-A)CO2 gap widens (marker of increased dead space)

**COPD Exacerbation:**
- Increased V/Q mismatch (secretions, bronchospasm)
- Dynamic hyperinflation worsens V/Q
- Risk of CO2 retention with high-flow O2 (Haldane effect + decreased hypoxic drive)

### Critical Care Gas Exchange Optimization

**PEEP Titration:**
Optimize for:
- Best compliance (least shunt from atelectasis)
- Without overdistension (increased dead space)
- EIT-guided: Balance between collapse and overdistension

**Prone Positioning:**
- Improves V/Q matching in dependent lung
- Reduces shunt by 10-15%
- Reduces compression atelectasis
- Indicated: P/F <150 despite optimal PEEP

**Inhaled Pulmonary Vasodilators:**
- iNO, epoprostenol reach only ventilated areas
- Selective vasodilation improves V/Q matching
- Reduce shunt fraction
- No mortality benefit but can bridge to other therapies

### Oxygenation Targets: Evidence Summary

**ARDS:**
- Conservative O2 (PaO2 55-80, SpO2 88-95%) vs. liberal
- HOT-ICU: No difference
- ICU-ROX: No harm from conservative
- Current practice: Avoid hyperoxia, tolerate moderate hypoxemia

**Acute MI/Stroke:**
- AVOID trial (MI): Supplemental O2 harmful if normoxemic
- Target: SpO2 ≥94% without routine supplementation

**Clinical integration:**
1. Identify mechanism (shunt vs. V/Q mismatch)
2. Predict response to FiO2 increase
3. Apply appropriate interventions (PEEP, prone, vasodilators)
4. Target appropriate oxygenation (avoid hyperoxia)
5. Monitor response with serial gas exchange assessment`,
      keyTerms: [
        { term: 'volumetric capnography', definition: 'CO2 monitoring technique that plots expired CO2 against volume to quantify dead space and V/Q heterogeneity' },
        { term: 'D(a-A)CO2 gap', definition: 'Difference between arterial and end-tidal CO2; elevated with increased dead space ventilation' },
        { term: 'oxygen response index', definition: 'Measure of PaO2 change per unit FiO2 change; distinguishes shunt-predominant from V/Q mismatch physiology' },
        { term: 'hyperpolarized gas MRI', definition: 'Functional imaging using Xe-129 or He-3 to visualize regional ventilation distribution' },
        { term: 'ARDS subphenotypes', definition: 'Distinct biological and radiographic patterns (focal, diffuse, hypoperfused) with different treatment responses' },
        { term: 'iNO', definition: 'Inhaled nitric oxide; selective pulmonary vasodilator that improves V/Q matching by dilating vessels in ventilated regions' },
      ],
      clinicalNotes: `Key clinical practice points:

1. **Dead space monitoring** in ARDS: VD/VT >0.60 indicates severe physiological derangement and predicts poor outcomes; trend over time guides prognosis.

2. **Shunt quantification** guides intervention selection: >30% shunt unlikely to respond to FiO2 alone; prioritize recruitment (PEEP, prone positioning).

3. **DLCO interpretation** requires clinical context: Always correct for Hb, consider alveolar volume (KCO), and correlate with imaging findings.

4. **Volumetric capnography** provides continuous dead space assessment without arterial sampling; increasing phase III slope indicates worsening V/Q heterogeneity.

5. **Avoid hyperoxia**: Emerging evidence suggests harm from supranormal PaO2; target SpO2 88-96% in most critically ill patients.`,
    },
  },

  media: [
    {
      id: 'alveolar-capillary-membrane',
      type: 'diagram',
      filename: 'alveolar-capillary-membrane.svg',
      title: 'Alveolar-Capillary Membrane',
      description: 'Cross-section showing the diffusion barrier layers',
    },
    {
      id: 'vq-matching-diagram',
      type: 'diagram',
      filename: 'vq-matching.svg',
      title: 'V/Q Matching',
      description: 'Diagram showing different V/Q states from shunt to dead space',
    },
    {
      id: 'west-zones',
      type: 'diagram',
      filename: 'west-zones.svg',
      title: 'West Zones of the Lung',
      description: 'Regional V/Q differences based on gravitational effects',
    },
  ],

  citations: [
    {
      id: 'west-respiratory-physiology',
      type: 'textbook',
      title: 'Respiratory Physiology: The Essentials',
      authors: ['West JB', 'Luks AM'],
      source: 'Wolters Kluwer',
      chapter: '4-5',
    },
    {
      id: 'nunn-applied',
      type: 'textbook',
      title: 'Nunn\'s Applied Respiratory Physiology',
      authors: ['Lumb AB'],
      source: 'Elsevier',
      chapter: '7-8',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-ventilation-mechanics', targetType: 'topic', relationship: 'sibling', label: 'Ventilation Mechanics' },
    { targetId: 'physiology-oxygen-hemoglobin', targetType: 'topic', relationship: 'sibling', label: 'Oxygen-Hemoglobin Dissociation' },
    { targetId: 'condition-ards', targetType: 'condition', relationship: 'see-also', label: 'ARDS' },
    { targetId: 'condition-pulmonary-embolism', targetType: 'condition', relationship: 'see-also', label: 'Pulmonary Embolism' },
  ],

  tags: {
    systems: ['respiratory', 'cardiovascular'],
    topics: ['physiology', 'pulmonology', 'critical care'],
    keywords: ['gas exchange', 'diffusion', 'V/Q mismatch', 'shunt', 'DLCO', 'hypoxemia', 'alveoli'],
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

export default gasExchange;
