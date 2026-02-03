/**
 * Hemodynamics - Comprehensive Educational Content
 *
 * Covers blood pressure regulation, vascular resistance, blood flow dynamics,
 * baroreceptor reflexes, RAAS, and clinical hemodynamic assessment.
 */

import { EducationalContent } from '../../types';

export const hemodynamics: EducationalContent = {
  id: 'physiology-hemodynamics',
  type: 'process',
  name: 'Hemodynamics',
  alternateNames: ['Blood Pressure Regulation', 'Vascular Hemodynamics', 'Circulatory Dynamics'],

  levels: {
    1: {
      level: 1,
      summary: 'Hemodynamics is about how blood flows through your body, what controls your blood pressure, and how your body keeps blood going to all your organs.',
      explanation: `## How Blood Flows Through Your Body

### Blood Pressure: The Push Behind Blood Flow

Your heart pumps blood through tubes called **blood vessels**. The force of blood pushing against the walls of these tubes is called **blood pressure**.

Think of it like water flowing through a garden hose:
- The pump (your heart) creates pressure
- The hose (blood vessels) carries the water (blood)
- If you squeeze the hose (blood vessels get narrower), pressure goes up

### Two Numbers in Blood Pressure

When a doctor says your blood pressure is "120 over 80":
- **120** (top number / systolic): Pressure when your heart squeezes
- **80** (bottom number / diastolic): Pressure when your heart relaxes

A healthy blood pressure is usually around **120/80 mmHg**.

### What Controls Blood Pressure?

Your body has automatic systems that keep blood pressure just right:

1. **Your heart**: Pumping faster or harder raises pressure
2. **Blood vessels**: Squeezing tighter (narrowing) raises pressure; relaxing (widening) lowers it
3. **Kidneys**: Control how much water stays in your blood -- more water means higher pressure

### Why Blood Has to Keep Flowing

Every cell in your body needs oxygen and nutrients delivered by blood. If blood stops flowing to an area, those cells start to die. That is why:
- A heart attack happens when blood stops flowing to part of the heart
- A stroke happens when blood stops flowing to part of the brain

### Your Body's "Thermostat" for Blood Pressure

Just like your house has a thermostat that turns the heater on and off, your body has sensors that detect blood pressure changes and adjust it automatically:
- Stand up too fast? Your body quickly tightens blood vessels to keep blood flowing to your brain
- Exercising? Your heart pumps faster and sends more blood to your muscles`,
      keyTerms: [
        { term: 'blood pressure', definition: 'The force of blood pushing against the walls of your blood vessels' },
        { term: 'blood vessels', definition: 'Tubes that carry blood throughout your body -- arteries, veins, and capillaries' },
        { term: 'systolic pressure', definition: 'The top number in blood pressure; the pressure when your heart squeezes' },
        { term: 'diastolic pressure', definition: 'The bottom number in blood pressure; the pressure when your heart relaxes' },
      ],
      analogies: [
        'Blood pressure is like water pressure in a hose -- the pump pushes water through, and squeezing the hose makes pressure go up.',
        'Your blood vessels are like roads in a city -- highways (arteries) carry blood fast, and tiny streets (capillaries) deliver to every house (cell).',
        'Blood pressure sensors are like a thermostat -- they detect changes and automatically adjust to keep things stable.',
      ],
      examples: [
        'When you get scared, your blood pressure goes up because your body is preparing to run or fight.',
        'Eating too much salt can raise blood pressure because salt makes your body hold onto more water, increasing the volume of blood.',
        'Athletes sometimes have lower blood pressure because their hearts are strong and efficient.',
      ],
      patientCounselingPoints: [
        'A healthy blood pressure is usually below 120/80 mmHg.',
        'High blood pressure usually has no symptoms, which is why it is called the "silent killer."',
        'Regular exercise, reducing salt, and maintaining a healthy weight all help keep blood pressure in a good range.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hemodynamics describes the physics of blood flow, determined by cardiac output and vascular resistance, with blood pressure regulated by nervous system reflexes, kidney function, and hormones to maintain adequate organ perfusion.',
      explanation: `## Blood Flow Physics

### The Basic Equation

**Blood Pressure = Cardiac Output x Vascular Resistance**

Or: **BP = CO x SVR**

This is analogous to Ohm's law in electricity (V = I x R):
- Blood pressure (BP) = voltage
- Cardiac output (CO) = current flow
- Systemic vascular resistance (SVR) = resistance

### Blood Pressure Components

| Component | Definition | Normal Value |
|-----------|-----------|--------------|
| Systolic BP | Peak pressure during ventricular contraction | ~120 mmHg |
| Diastolic BP | Lowest pressure during ventricular relaxation | ~80 mmHg |
| Pulse Pressure | Systolic - Diastolic | ~40 mmHg |
| Mean Arterial Pressure (MAP) | Average pressure throughout cardiac cycle | ~93 mmHg |

**MAP = Diastolic + 1/3 (Pulse Pressure)**
MAP = 80 + 1/3(40) = ~93 mmHg

MAP is the most important value because it represents the actual driving pressure for organ perfusion.

### Vascular Resistance

**What determines resistance?**

| Factor | Effect on Resistance | Clinical Example |
|--------|---------------------|-----------------|
| Vessel radius (most important) | Halve the radius = 16x resistance | Vasoconstriction from cold |
| Blood viscosity | Higher viscosity = more resistance | Polycythemia (too many red cells) |
| Vessel length | Longer = more resistance | Generally fixed in adults |

**Poiseuille's Law**: Resistance = 8nL / (pi x r^4)
- r (radius) has the biggest effect because it is raised to the 4th power!

### Types of Blood Vessels

| Vessel | Function | Special Features |
|--------|----------|-----------------|
| Arteries | Carry blood away from heart | Thick, elastic walls; absorb pressure |
| Arterioles | Control resistance (the "faucets") | Smooth muscle; most resistance here |
| Capillaries | Exchange oxygen, nutrients, waste | Thin walls; one cell thick |
| Venules | Collect blood from capillaries | Thin walls; some exchange |
| Veins | Return blood to heart | Valves prevent backflow; hold 60-70% of blood |

### Short-Term Blood Pressure Regulation

**Baroreceptor Reflex (seconds to minutes):**

Sensors in the carotid sinus and aortic arch detect pressure changes:

**If BP drops** (example: standing up quickly):
1. Baroreceptors detect decreased stretch
2. Signal to brain (medulla)
3. Sympathetic nervous system activated
4. Heart rate increases, blood vessels constrict
5. BP returns to normal

**If BP rises** (example: stress response):
1. Baroreceptors detect increased stretch
2. Parasympathetic nervous system activated
3. Heart rate decreases, blood vessels dilate
4. BP returns to normal

### Long-Term Blood Pressure Regulation

**Kidneys (hours to days):**
- High BP: Kidneys excrete more water and salt, reducing blood volume
- Low BP: Kidneys retain water and salt, increasing blood volume

**RAAS (Renin-Angiotensin-Aldosterone System):**
1. Low BP detected by kidneys
2. Renin released by kidneys
3. Renin converts angiotensinogen to angiotensin I
4. ACE converts angiotensin I to angiotensin II
5. Angiotensin II causes:
   - Blood vessel constriction (raises BP immediately)
   - Aldosterone release (kidneys retain salt and water)
   - ADH release (kidneys retain water)
   - Thirst sensation

### Blood Flow Distribution

At rest, blood flow is distributed based on need:

| Organ | % of Cardiac Output | Special Features |
|-------|-------------------|--------------------|
| Brain | 15% | Autoregulation maintains constant flow |
| Heart | 5% | Highest O2 extraction |
| Kidneys | 20% | For filtration, not just O2 needs |
| GI tract | 25% | Increases after meals |
| Skeletal muscle | 20% | Increases dramatically with exercise |
| Skin | 5% | Varies with temperature regulation |`,
      keyTerms: [
        { term: 'mean arterial pressure (MAP)', definition: 'Average blood pressure throughout the cardiac cycle; the driving pressure for organ perfusion; MAP = Diastolic + 1/3 Pulse Pressure', pronunciation: 'M-A-P' },
        { term: 'systemic vascular resistance (SVR)', definition: 'Total resistance to blood flow from all the blood vessels in the body; mostly determined by arterioles' },
        { term: 'baroreceptor reflex', definition: 'Automatic reflex that detects blood pressure changes and adjusts heart rate and vessel tone to maintain stable BP' },
        { term: 'RAAS', definition: 'Renin-Angiotensin-Aldosterone System; hormone pathway that raises blood pressure by constricting vessels and retaining salt and water' },
        { term: 'pulse pressure', definition: 'Difference between systolic and diastolic pressure; reflects stroke volume and arterial stiffness' },
        { term: 'arterioles', definition: 'Small muscular blood vessels that are the main site of vascular resistance; they act as the "faucets" controlling blood flow to tissues' },
      ],
      analogies: [
        'MAP = CO x SVR is like water pressure in plumbing: pressure depends on how hard the pump works (CO) and how narrow the pipes are (SVR).',
        'Arterioles are like faucets in your house -- they can open wide to let more blood through or tighten to restrict flow.',
        'The baroreceptor reflex is like cruise control in a car -- it detects speed changes and adjusts the throttle automatically.',
      ],
      examples: [
        'When you stand up, gravity pulls blood to your legs. Baroreceptors detect the pressure drop and quickly raise heart rate and constrict vessels to prevent fainting.',
        'Blood pressure medications like ACE inhibitors block the RAAS system to lower blood pressure by preventing vasoconstriction and reducing fluid retention.',
        'During exercise, blood flow to muscles can increase from 20% to over 80% of cardiac output, while flow to the gut decreases.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hemodynamics integrates Poiseuille flow, vascular compliance, arterial windkessel function, autoregulatory mechanisms, and neurohumoral control to maintain organ perfusion across diverse physiological states, with clinical assessment guided by invasive and non-invasive hemodynamic parameters.',
      explanation: `## Hemodynamic Principles

### Poiseuille's Law and Flow Dynamics

**Q = (delta P x pi x r^4) / (8 x n x L)**

Where:
- Q = flow
- delta P = pressure gradient
- r = vessel radius
- n = viscosity
- L = vessel length

**Clinical significance of r^4:**
- 50% reduction in radius = 94% reduction in flow
- This explains why atherosclerosis is so devastating
- Also why vasospasm causes dramatic ischemia

### Laminar vs. Turbulent Flow

**Reynolds number (Re)** predicts flow pattern:
Re = (rho x v x d) / n

| Re Value | Flow Pattern | Clinical Setting |
|----------|-------------|-----------------|
| <2000 | Laminar (silent) | Normal blood flow |
| >2000 | Turbulent (audible) | Murmurs, bruits |

**Turbulence occurs with:**
- High velocity (stenosis, high CO states)
- Low viscosity (anemia)
- Large vessel diameter (aorta)
- Vessel irregularity (atherosclerosis)

### Arterial System: Windkessel Model

The aorta and large arteries function as a **windkessel** (elastic reservoir):
- During systole: Elastic arteries expand, storing ~50% of stroke volume
- During diastole: Arteries recoil, maintaining continuous flow

**Compliance = Change in Volume / Change in Pressure**

**Arterial stiffness increases with age:**
- Loss of elastin, increased collagen
- Increased pulse wave velocity (PWV)
- Widened pulse pressure (isolated systolic hypertension)
- Increased cardiac workload (afterload)

### Venous System

**Capacitance vessels (veins hold ~60-70% of blood volume):**
- Venoconstriction shifts blood to arterial side (increases preload)
- Gravity effects: Standing pools ~500 mL in lower extremities
- Muscle pump: Skeletal muscle contraction pushes venous blood centrally
- Respiratory pump: Inspiration decreases intrathoracic pressure, augments venous return

**Venous return determinants (Guyton model):**
- Mean systemic filling pressure (MSFP): ~7 mmHg
- Right atrial pressure (RAP)
- Venous resistance

VR = (MSFP - RAP) / Venous Resistance

### Baroreceptor Reflex: Detailed Pathway

**Afferent limb:**
- Carotid sinus → glossopharyngeal nerve (CN IX) → NTS
- Aortic arch → vagus nerve (CN X) → NTS

**Integration:** Nucleus tractus solitarius (NTS) → CVLM → RVLM

**Efferent limb:**
- Sympathetic: ↑ HR, ↑ contractility, ↑ SVR, venoconstriction
- Parasympathetic: ↑ vagal tone → ↓ HR

**Baroreceptor resetting:**
- Chronic hypertension shifts the "set point" upward
- Baroreceptors adapt over 1-2 days to sustained pressure changes
- This is why acute antihypertensive therapy can cause symptomatic hypotension

### RAAS Pathway

**Complete cascade:**

| Step | Component | Source | Action |
|------|-----------|--------|--------|
| 1 | Renin | Juxtaglomerular cells | Cleaves angiotensinogen |
| 2 | Angiotensinogen | Liver | Substrate |
| 3 | Angiotensin I | Circulating | Inactive decapeptide |
| 4 | ACE | Pulmonary endothelium | Converts AI to AII |
| 5 | Angiotensin II | Circulating | Vasoconstriction, aldosterone release |
| 6 | Aldosterone | Adrenal cortex (zona glomerulosa) | Na+ reabsorption, K+ excretion |

**Renin release triggers:**
- Decreased renal perfusion pressure (afferent arteriole)
- Decreased NaCl delivery to macula densa
- Sympathetic stimulation (beta-1 receptors on JG cells)

**Angiotensin II receptor subtypes:**
- AT1: Vasoconstriction, aldosterone, cardiac/vascular hypertrophy, Na+ reabsorption, sympathetic facilitation
- AT2: Vasodilation, anti-proliferative (counterregulatory)

### Additional Neurohumoral Systems

**Natriuretic peptides (counter-regulatory to RAAS):**
- ANP: Released from atria with stretch → natriuresis, vasodilation
- BNP: Released from ventricles with stretch → natriuresis, vasodilation
- Clinical use: BNP/NT-proBNP for heart failure diagnosis

**Vasopressin (ADH):**
- Released from posterior pituitary
- V1 receptors: Vasoconstriction
- V2 receptors: Water reabsorption in collecting duct
- Clinical use: Vasopressin for septic shock (V1 agonism)

**Endothelial factors:**
- Nitric oxide (NO): Vasodilation, anti-platelet, anti-inflammatory
- Endothelin-1: Potent vasoconstriction
- Prostacyclin (PGI2): Vasodilation, anti-platelet

### Autoregulation

**Definition:** Ability of an organ to maintain constant blood flow despite changes in perfusion pressure.

**Mechanisms:**
1. **Myogenic response** (Bayliss effect): Stretch → vasoconstriction
2. **Metabolic**: Local metabolites (CO2, adenosine, K+, H+) → vasodilation
3. **Endothelial**: Flow-mediated release of NO

**Organ-specific autoregulation:**

| Organ | Pressure Range (MAP) | Key Mediator |
|-------|---------------------|--------------|
| Brain | 60-150 mmHg | CO2, myogenic |
| Kidney | 80-180 mmHg | Myogenic, TGF |
| Heart | 60-140 mmHg | Adenosine, metabolic |

**Autoregulation shifts in chronic hypertension:**
- Curve shifts rightward (higher pressures needed)
- Minimum autoregulatory pressure increases
- Acute BP lowering can cause organ ischemia`,
      keyTerms: [
        { term: 'windkessel model', definition: 'Model of arterial function where elastic arteries store blood during systole and release it during diastole, converting pulsatile flow to continuous flow' },
        { term: 'pulse wave velocity (PWV)', definition: 'Speed of the pressure wave traveling through arteries; increased with arterial stiffness; marker of cardiovascular risk' },
        { term: 'Reynolds number', definition: 'Dimensionless number predicting laminar vs. turbulent flow; turbulence occurs above ~2000 and produces audible sounds (bruits, murmurs)' },
        { term: 'mean systemic filling pressure', definition: 'Pressure in the vasculature when cardiac output is zero; represents the driving pressure for venous return; normally ~7 mmHg' },
        { term: 'autoregulation', definition: 'Ability of organs to maintain constant blood flow across a range of perfusion pressures through myogenic, metabolic, and endothelial mechanisms' },
        { term: 'juxtaglomerular cells', definition: 'Specialized cells in kidney afferent arterioles that sense perfusion pressure and release renin to activate the RAAS cascade' },
        { term: 'endothelin-1', definition: 'Potent endothelium-derived vasoconstrictor peptide involved in vascular tone regulation and implicated in pulmonary hypertension' },
      ],
      clinicalNotes: 'Autoregulation is critical in clinical practice. In chronically hypertensive patients, the autoregulatory curve shifts rightward, meaning rapid BP reduction can cause watershed ischemia (especially cerebral). The recommendation is to lower MAP by no more than 25% in the first hour of a hypertensive emergency. Conversely, in septic shock, autoregulation may be impaired, making organ perfusion directly pressure-dependent and justifying MAP targets of 65+ mmHg.',
    },
    4: {
      level: 4,
      summary: 'Advanced hemodynamics integrates ventriculo-arterial coupling, wave reflection analysis, microcirculatory assessment, and organ-specific autoregulatory physiology to guide precision resuscitation, vasoactive therapy, and management of complex shock states.',
      explanation: `## Advanced Hemodynamic Physiology

### Arterial Wave Reflection and Augmentation

**Forward and reflected waves:**
- Left ventricle generates a forward pressure wave
- Wave reflects at branch points and arteriolar impedance mismatches
- In young, compliant arteries: reflected wave returns during diastole (augments coronary perfusion)
- In stiff arteries: reflected wave returns during systole (augments systolic pressure)

**Augmentation index (AIx):**
AIx = (Augmentation Pressure / Pulse Pressure) x 100
- Reflects arterial stiffness and wave reflection timing
- Correlates with cardiovascular risk
- Measured non-invasively via applanation tonometry

**Central vs. peripheral BP:**
- Peripheral BP overestimates central BP in young patients (amplification)
- Peripheral BP underestimates central BP in elderly (early wave reflection)
- Central BP may better predict target organ damage

### Impedance and Vascular Load

**Beyond SVR: Input impedance (Zin):**
- SVR only captures steady-state (DC) component of vascular load
- Input impedance captures pulsatile (AC) component
- Components:
  - Characteristic impedance (Zc): Proximal aortic impedance
  - Peripheral resistance: Arteriolar tone
  - Arterial compliance: Large artery distensibility
  - Wave reflection: Timing and magnitude

**Optimal ventricular-arterial matching** requires considering all impedance components, not just SVR.

### Microcirculation

**Structure:**
- Arterioles (20-100 um) → metarterioles → precapillary sphincters → capillaries (5-8 um) → venules

**Capillary dynamics (Starling forces):**
Jv = Kf [(Pc - Pi) - sigma(pi_c - pi_i)]

Where:
- Jv = net fluid movement
- Kf = filtration coefficient
- Pc = capillary hydrostatic pressure (~35 mmHg arteriolar, ~15 mmHg venular)
- Pi = interstitial hydrostatic pressure (~0 mmHg)
- sigma = reflection coefficient
- pi_c = capillary oncotic pressure (~25 mmHg)
- pi_i = interstitial oncotic pressure (~5 mmHg)

**Revised Starling principle:**
- The subglycocalyx space (NOT interstitium) is the relevant oncotic compartment
- Absorption does not occur in steady-state capillaries
- Lymphatic drainage is the primary mechanism for interstitial fluid removal
- Clinical implication: Albumin infusion is less effective at maintaining intravascular volume than previously thought

### Shock Physiology

**Hemodynamic profiles:**

| Shock Type | CO | SVR | PCWP | SvO2 |
|------------|----|----|------|------|
| Cardiogenic | ↓↓ | ↑↑ | ↑↑ | ↓↓ |
| Hypovolemic | ↓ | ↑↑ | ↓↓ | ↓ |
| Distributive (septic) | ↑ (early) | ↓↓ | ↓/N | ↑ (early) |
| Obstructive (PE) | ↓ | ↑ | ↓ (LV) | ↓ |

**Septic shock hemodynamics:**
- Early (warm shock): Vasodilation, high CO, low SVR
- Late (cold shock): Myocardial depression, low CO, high SVR
- Microcirculatory dysfunction independent of macrocirculation
- Coherence loss between macro and micro circulation

### Fluid Responsiveness

**Static parameters (poor predictors):**
- CVP: Does not reliably predict fluid responsiveness
- PCWP: Better but still limited

**Dynamic parameters (better predictors):**

| Parameter | Method | Threshold |
|-----------|--------|-----------|
| Pulse pressure variation (PPV) | Arterial line | >13% |
| Stroke volume variation (SVV) | Arterial line + algorithm | >12% |
| Passive leg raise (PLR) | Echocardiography | >10% increase in CO |
| End-expiratory occlusion | Ventilator + CO monitor | >5% increase in CO |
| IVC distensibility | Bedside echo | >18% (mechanically ventilated) |

**Requirements for PPV/SVV:**
- Mechanically ventilated
- Tidal volume >=8 mL/kg
- Sinus rhythm
- Closed chest

### Vasoactive Pharmacology: Hemodynamic Effects

| Agent | Receptors | HR | CO | SVR | Primary Use |
|-------|-----------|----|----|-----|------------|
| Norepinephrine | Alpha-1 >> Beta-1 | +/0 | +/0 | +++ | Septic shock (1st line) |
| Epinephrine | Beta-1 = Beta-2 > Alpha | ++ | ++ | + | Cardiac arrest, anaphylaxis |
| Vasopressin | V1 | 0 | 0 | ++ | Septic shock (adjunct) |
| Dobutamine | Beta-1 > Beta-2 | + | ++ | - | Cardiogenic shock |
| Milrinone | PDE-3 inhibitor | + | ++ | -- | Acute HF, RV failure |
| Phenylephrine | Alpha-1 (pure) | - | - | +++ | Post-spinal hypotension |

### Organ-Specific Hemodynamics

**Cerebral circulation:**
- CBF = CPP / CVR
- CPP = MAP - ICP (or CVP if higher)
- Normal CBF: 50 mL/100g/min
- Autoregulation: MAP 60-150 mmHg
- CO2 reactivity: 3% change in CBF per mmHg CO2
- Lost autoregulation: Traumatic brain injury, severe sepsis

**Renal circulation:**
- Two capillary beds in series (glomerular + peritubular)
- Afferent arteriole: Regulates RBF and GFR
- Efferent arteriole: Regulates filtration fraction
- Tubuloglomerular feedback: Macula densa senses NaCl delivery
- ACE inhibitor effect: Efferent dilation → ↓GFR acutely but renoprotective long-term

**Coronary circulation:**
- Left coronary flow predominantly during diastole
- Right coronary flow throughout cycle
- Near-maximal O2 extraction at rest (~75%)
- Increased demand met primarily by increased flow
- Adenosine: Primary metabolic vasodilator
- Coronary flow reserve: 4-5x resting flow (reduced in CAD)`,
      keyTerms: [
        { term: 'augmentation index', definition: 'Ratio of augmentation pressure to pulse pressure; reflects arterial stiffness and wave reflection timing; independent predictor of cardiovascular risk' },
        { term: 'revised Starling principle', definition: 'Updated model recognizing the subglycocalyx space as the relevant oncotic compartment; explains why albumin is less effective at expanding plasma volume than classic theory predicted' },
        { term: 'pulse pressure variation (PPV)', definition: 'Respiratory variation in arterial pulse pressure during mechanical ventilation; >13% predicts fluid responsiveness' },
        { term: 'passive leg raise', definition: 'Reversible autotransfusion maneuver that tests fluid responsiveness by shifting ~300 mL of blood from the legs to the central circulation; >10% CO increase indicates responsiveness' },
        { term: 'hemodynamic coherence', definition: 'Alignment between macrocirculatory (MAP, CO) and microcirculatory (capillary perfusion) parameters; can be lost in sepsis despite adequate MAP' },
        { term: 'cerebral perfusion pressure (CPP)', definition: 'Effective pressure driving cerebral blood flow; CPP = MAP - ICP; target >60 mmHg in TBI' },
        { term: 'coronary flow reserve', definition: 'Ratio of maximal to resting coronary blood flow; normally 4-5x; reduced in coronary artery disease and microvascular dysfunction' },
      ],
      clinicalNotes: 'Modern resuscitation has moved beyond static filling pressures. CVP should not be used to guide fluid therapy (meta-analysis shows no correlation with fluid responsiveness). Dynamic parameters (PPV, SVV, passive leg raise) are far superior. In septic shock, restoring MAP with norepinephrine is necessary but insufficient -- microcirculatory assessment with sublingual videomicroscopy or near-infrared spectroscopy may reveal persistent tissue hypoperfusion despite normalized macrocirculatory parameters.',
    },
    5: {
      level: 5,
      summary: 'Contemporary hemodynamic management integrates advanced monitoring technologies, microcirculatory assessment, computational fluid dynamics, and precision phenotyping to individualize resuscitation strategies, optimize organ perfusion, and advance understanding of vascular pathobiology.',
      explanation: `## Precision Hemodynamic Assessment

### Advanced Hemodynamic Monitoring

**Pulse contour analysis (PiCCO, FloTrac, LiDCO):**
- Derives CO from arterial waveform morphology
- Calibrated (PiCCO: transpulmonary thermodilution) vs. uncalibrated (FloTrac)
- Additional parameters:
  - Global end-diastolic volume (GEDI): Volumetric preload
  - Extravascular lung water (EVLW): Pulmonary edema quantification
  - Cardiac function index (CFI): Contractility surrogate
  - Systemic vascular resistance index (SVRI)

**Calibration considerations:**
- PiCCO requires recalibration with hemodynamic changes
- FloTrac accuracy decreases with low SVR (sepsis) and arrhythmias
- All pulse contour methods assume stable vascular impedance

**Echocardiographic hemodynamics:**
- VTI (velocity-time integral) at LVOT: SV surrogate
- SV = VTI x LVOT area
- CO = SV x HR
- E/e' estimates filling pressure
- TAPSE and S' assess RV function
- Speckle-tracking strain: Beyond EF

### Microcirculatory Assessment

**Sublingual videomicroscopy (IDF/SDF imaging):**
- Direct visualization of sublingual capillaries
- Quantitative parameters:
  - Microvascular flow index (MFI)
  - Perfused vessel density (PVD)
  - Proportion of perfused vessels (PPV)
  - Total vessel density (TVD)
  - Heterogeneity index

**Near-infrared spectroscopy (NIRS):**
- Measures tissue oxygen saturation (StO2)
- Vascular occlusion test (VOT):
  - Deoxygenation slope: O2 consumption rate
  - Reoxygenation slope: Microvascular reactivity
  - Hyperemic response: Recruit capillary reserve
- Abnormal VOT predicts organ failure in sepsis

**Microcirculatory targets in resuscitation:**
- MFI >2.6
- PPV >88%
- Heterogeneity index <0.4
- Evidence: ANDROMEDA-SHOCK showed microcirculation-guided resuscitation trends toward benefit

### Hemodynamic Phenotyping in Shock

**Machine learning-derived phenotypes:**
- Latent class analysis of hemodynamic variables identifies distinct shock subphenotypes
- Each subphenotype may respond differently to interventions
- Example: Alpha (vasoplegic, fluid responsive) vs. Beta (cardiac dysfunction, high filling pressures)

**Precision vasopressor selection:**
- Angiotensin II (Giapreza):
  - Synthetic AT II for distributive shock
  - ATHOS-3 trial: Effective when norepinephrine insufficient
  - May benefit patients with low renin activity
  - Potential role in RAAS-deficient phenotype
- Methylene blue:
  - Inhibits guanylate cyclase (blocks NO-mediated vasodilation)
  - For refractory vasoplegic shock (especially post-cardiopulmonary bypass)
  - No RCT evidence; observational data supports use

### Vascular Glycocalyx

**Structure:**
- Endothelial surface layer (0.2-2.0 um thick)
- Proteoglycans: Syndecan-1, glypican-1 (core proteins with GAG chains)
- GAGs: Heparan sulfate, chondroitin sulfate, hyaluronic acid
- Bound plasma proteins: Albumin, antithrombin

**Functions:**
- Mechanotransduction of shear stress (flow-mediated vasodilation)
- Selective permeability barrier (revised Starling principle)
- Anti-coagulant surface (heparan sulfate binds antithrombin)
- Anti-inflammatory (prevents leukocyte adhesion)
- Reservoir for signaling molecules

**Glycocalyx degradation in disease:**
| Condition | Mechanism | Biomarker |
|-----------|-----------|-----------|
| Sepsis | TNF-alpha, MMP activation | Syndecan-1, heparan sulfate |
| Ischemia-reperfusion | ROS, heparanase | Syndecan-1 |
| Hyperglycemia | ROS, enzymatic degradation | HA fragments |
| Trauma | Sympathoadrenal activation | Syndecan-1 (shock severity correlate) |

**Therapeutic implications:**
- Avoiding fluid overload (dilutes plasma proteins, accelerates glycocalyx shedding)
- Albumin may protect glycocalyx (vs. crystalloid)
- Hydrocortisone reduces glycocalyx shedding in cardiac surgery
- Sulodexide (GAG replacement): Under investigation

### Computational Hemodynamics

**Patient-specific CFD modeling:**
- CT/MRI-derived vascular geometry
- Finite element analysis of blood flow
- Applications:
  - FFR-CT: Non-invasive fractional flow reserve from CT angiography
  - Shear stress mapping: Predicts atherosclerotic plaque progression
  - Aneurysm rupture risk: Wall stress analysis
  - LVAD outflow graft optimization

**Digital hemodynamic twins:**
- Real-time integration of monitoring data with computational models
- Predicts response to interventions (fluid, vasopressors, PEEP changes)
- Closed-loop vasopressor titration under development

### Emerging Hemodynamic Targets

**Diastolic perfusion pressure:**
- Diastolic BP - CVP (or LVEDP)
- May be more relevant than MAP for coronary and renal perfusion
- Diastolic shock index (HR/DBP): Emerging predictor of outcomes

**Venous congestion:**
- VExUS (Venous Excess Ultrasound Score)
- Integrates IVC, hepatic vein, portal vein, and renal vein Doppler
- Identifies venous congestion contributing to organ dysfunction
- Guides decongestion (diuresis) therapy

**Tissue CO2 monitoring:**
- Sublingual PCO2 gap (PslCO2 - PaCO2)
- Reflects microcirculatory perfusion
- Elevated gap indicates tissue hypoperfusion despite adequate MAP
- May guide de-resuscitation decisions

### Future Directions

**Artificial intelligence in hemodynamics:**
- Hypotension prediction algorithms (e.g., Acumen HPI)
  - Predicts hypotension 5-15 minutes before occurrence
  - Uses arterial waveform features
  - FDA-cleared, early clinical adoption

**Wearable hemodynamic monitoring:**
- Continuous cuffless BP measurement
- Photoplethysmography-derived CO estimates
- Integration with remote patient monitoring
- Potential for early deterioration detection

**Organ perfusion biomarkers:**
- Renal resistive index (ultrasound): Predicts AKI
- Optic nerve sheath diameter: Non-invasive ICP estimate
- Hepatic venous flow patterns: Assess congestion
- Multimodal integration for organ-specific perfusion assessment`,
      keyTerms: [
        { term: 'glycocalyx', definition: 'Endothelial surface layer of proteoglycans and glycosaminoglycans; critical for vascular permeability, mechanotransduction, and anti-coagulant function; degraded in sepsis, trauma, and ischemia-reperfusion' },
        { term: 'VExUS score', definition: 'Venous Excess Ultrasound Score integrating IVC, hepatic, portal, and renal venous Doppler to grade venous congestion and guide decongestion therapy' },
        { term: 'FFR-CT', definition: 'Non-invasive fractional flow reserve derived from CT angiography using computational fluid dynamics; avoids invasive coronary catheterization for hemodynamic assessment' },
        { term: 'angiotensin II (Giapreza)', definition: 'Synthetic angiotensin II approved for refractory distributive shock; acts on AT1 receptors for vasoconstriction; ATHOS-3 trial demonstrated efficacy as adjunct vasopressor' },
        { term: 'Acumen HPI', definition: 'FDA-cleared AI algorithm analyzing arterial waveform features to predict hypotension 5-15 minutes before onset; enables proactive hemodynamic management' },
        { term: 'syndecan-1', definition: 'Transmembrane proteoglycan of the endothelial glycocalyx; circulating levels serve as a biomarker of glycocalyx degradation and endothelial injury' },
        { term: 'diastolic shock index', definition: 'Heart rate divided by diastolic blood pressure; emerging metric for identifying hemodynamic compromise when MAP appears adequate' },
      ],
      clinicalNotes: `Key clinical practice points:

1. **Hemodynamic monitoring evolution**: No single monitor is sufficient. Best practice integrates echocardiography (structure + function), arterial waveform analysis (CO, fluid responsiveness), and microcirculatory assessment to build a comprehensive hemodynamic picture.

2. **Venous congestion** is an underrecognized cause of organ dysfunction. VExUS scoring helps identify patients who need decongestion rather than more fluid, even when CO appears adequate.

3. **Glycocalyx protection** is emerging as a resuscitation principle. Avoiding excessive crystalloid, using albumin when possible, and limiting hyperglycemia may preserve endothelial integrity.

4. **Microcirculatory assessment** reveals that a significant proportion of patients with normalized MAP still have impaired tissue perfusion. Sublingual videomicroscopy and tissue CO2 monitoring may identify these patients for targeted intervention.

5. **AI-driven hemodynamic management** is becoming clinical reality. Hypotension prediction algorithms enable proactive rather than reactive management, and closed-loop vasopressor systems are in clinical trials.`,
    },
  },

  media: [
    {
      id: 'bp-regulation-diagram',
      type: 'diagram',
      filename: 'bp-regulation-overview.svg',
      title: 'Blood Pressure Regulation',
      description: 'Overview of short-term (baroreceptor) and long-term (RAAS, renal) blood pressure regulatory mechanisms',
    },
    {
      id: 'raas-pathway',
      type: 'diagram',
      filename: 'raas-pathway.svg',
      title: 'RAAS Pathway',
      description: 'Complete renin-angiotensin-aldosterone system cascade with pharmacologic targets',
    },
    {
      id: 'autoregulation-curves',
      type: 'diagram',
      filename: 'autoregulation-curves.svg',
      title: 'Organ Autoregulation Curves',
      description: 'Autoregulatory pressure-flow curves for brain, kidney, and heart with disease state shifts',
    },
  ],

  citations: [
    {
      id: 'guyton-hemodynamics',
      type: 'textbook',
      title: 'Guyton and Hall Textbook of Medical Physiology',
      authors: ['Hall JE', 'Hall ME'],
      source: 'Elsevier',
      chapter: '14-19',
    },
    {
      id: 'marino-icu-book',
      type: 'textbook',
      title: 'Marino\'s The ICU Book',
      authors: ['Marino PL'],
      source: 'Wolters Kluwer',
      chapter: '8-12',
    },
    {
      id: 'nichols-vascular',
      type: 'textbook',
      title: 'McDonald\'s Blood Flow in Arteries',
      authors: ['Nichols WW', 'O\'Rourke MF', 'Vlachopoulos C'],
      source: 'CRC Press',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-cardiac-cycle', targetType: 'topic', relationship: 'sibling', label: 'Cardiac Cycle' },
    { targetId: 'physiology-cardiac-electrophysiology', targetType: 'topic', relationship: 'sibling', label: 'Cardiac Electrophysiology' },
    { targetId: 'condition-hypertension', targetType: 'condition', relationship: 'see-also', label: 'Hypertension' },
    { targetId: 'condition-shock', targetType: 'condition', relationship: 'see-also', label: 'Shock' },
  ],

  tags: {
    systems: ['cardiovascular', 'renal'],
    topics: ['physiology', 'cardiology', 'critical care', 'nephrology'],
    keywords: ['hemodynamics', 'blood pressure', 'vascular resistance', 'RAAS', 'baroreceptor', 'autoregulation', 'shock', 'fluid responsiveness', 'microcirculation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hemodynamics;
