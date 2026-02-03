/**
 * Cardiac Cycle - Comprehensive Educational Content
 *
 * Covers the heart cycle phases (systole/diastole), cardiac output,
 * preload/afterload/contractility, Frank-Starling mechanism, and
 * pressure-volume relationships.
 */

import { EducationalContent } from '../../types';

export const cardiacCycle: EducationalContent = {
  id: 'physiology-cardiac-cycle',
  type: 'process',
  name: 'Cardiac Cycle',
  nameEs: 'Ciclo Cardíaco',
  alternateNames: ['Heart Cycle', 'Systole and Diastole', 'Cardiac Mechanics'],

  levels: {
    1: {
      level: 1,
      summary: 'The cardiac cycle is the sequence of events that happens each time your heart beats, including the heart squeezing to push blood out and then relaxing to fill back up.',
      explanation: `## How Your Heart Beats

### The Heart Is a Pump

Your heart is about the size of your fist and works like a pump. Every time it beats, it goes through two main phases:

1. **Squeeze (Systole)**: The heart muscle tightens and pushes blood out to your body and lungs
2. **Relax (Diastole)**: The heart muscle relaxes and fills up with blood again

This squeeze-relax cycle happens about **60-100 times per minute** -- that is your heart rate!

### Doors in Your Heart: Valves

Your heart has four one-way doors called **valves**. They make sure blood flows in the right direction:

- They open to let blood through
- They snap shut to stop blood from flowing backward
- The "lub-dub" sound you hear with a stethoscope is the valves closing

### How Much Blood Does Your Heart Pump?

Each beat pushes out about **70 milliliters** of blood (about a third of a cup). In one minute, your heart pumps about **5 liters** -- that is like filling a big water bottle ten times!

This is called **cardiac output** -- how much blood your heart pumps each minute.

### What Makes Your Heart Pump More?

Three things affect how well your heart pumps:

- **How full it is** (preload): Like stretching a rubber band -- a fuller heart pumps more blood
- **How hard it has to push** (afterload): Like blowing through a thin straw vs. a wide one
- **How strong the squeeze is** (contractility): The strength of the heart muscle itself

### Why Does This Matter?

Your body needs a constant supply of blood to deliver oxygen and nutrients. When you exercise, your heart beats faster and pumps more blood. When you sleep, it slows down because your body needs less.`,
      keyTerms: [
        { term: 'systole', definition: 'The squeezing phase when the heart pushes blood out', pronunciation: 'SIS-toh-lee' },
        { term: 'diastole', definition: 'The relaxing phase when the heart fills with blood', pronunciation: 'dye-AS-toh-lee' },
        { term: 'cardiac output', definition: 'The amount of blood your heart pumps in one minute' },
        { term: 'valve', definition: 'A one-way door in your heart that keeps blood flowing in the right direction' },
        { term: 'heart rate', definition: 'How many times your heart beats per minute' },
      ],
      analogies: [
        'Your heart works like a squeeze bottle -- squeeze to push liquid out, release to fill back up.',
        'Heart valves are like one-way doors in a building -- they let you go through one direction but not back.',
        'Cardiac output is like a factory production line -- heart rate is how fast the line runs, and stroke volume is how big each package is.',
      ],
      examples: [
        'When you put your hand on your chest and feel your heartbeat, each thump is one cardiac cycle -- one squeeze and one relax.',
        'During a scary movie, your heart rate goes up because adrenaline makes your heart beat faster.',
        'Athletes often have a slower resting heart rate because each beat is stronger and pumps more blood.',
      ],
      patientCounselingPoints: [
        'A normal resting heart rate is 60-100 beats per minute.',
        'Your heart pumps about 2,000 gallons of blood every day.',
        'Exercise helps strengthen your heart so it pumps more efficiently.',
      ],
    },
    2: {
      level: 2,
      summary: 'The cardiac cycle consists of systole (ventricular contraction and ejection) and diastole (ventricular relaxation and filling), with valves coordinating blood flow and cardiac output determined by heart rate and stroke volume.',
      explanation: `## The Cardiac Cycle in Detail

### Overview

One complete cardiac cycle lasts about **0.8 seconds** at a heart rate of 75 bpm:
- **Systole** (contraction): ~0.3 seconds
- **Diastole** (relaxation): ~0.5 seconds

### Phases of the Cardiac Cycle

**1. Atrial Systole (Atrial Kick)**
- Atria contract, pushing final 20-30% of blood into ventricles
- AV valves (mitral and tricuspid) are open
- Semilunar valves (aortic and pulmonary) are closed
- Corresponds to the P wave on ECG

**2. Isovolumetric Contraction**
- Ventricles begin contracting
- ALL valves are closed (volume does not change)
- Pressure rises rapidly
- Corresponds to the QRS complex

**3. Ventricular Ejection**
- Ventricular pressure exceeds arterial pressure
- Aortic and pulmonary valves open
- Blood is ejected into aorta and pulmonary artery
- About 60-70% of ventricular blood is ejected (ejection fraction)

**4. Isovolumetric Relaxation**
- Ventricles relax, pressure drops
- ALL valves are closed again
- No blood enters or leaves

**5. Ventricular Filling**
- Ventricular pressure drops below atrial pressure
- AV valves open
- Blood flows passively from atria to ventricles (70-80% of filling)
- Ends with atrial systole completing the fill

### Heart Sounds

| Sound | Timing | Cause |
|-------|--------|-------|
| S1 ("lub") | Start of systole | AV valves close (mitral + tricuspid) |
| S2 ("dub") | End of systole | Semilunar valves close (aortic + pulmonary) |

### Cardiac Output

**Cardiac Output (CO) = Heart Rate (HR) x Stroke Volume (SV)**

- **Normal CO**: ~5 L/min
- **Heart Rate**: 60-100 bpm at rest
- **Stroke Volume**: ~70 mL per beat

### Stroke Volume Determinants

| Factor | Definition | Analogy |
|--------|-----------|---------|
| Preload | Stretch on the heart before it contracts | How far you pull back a rubber band |
| Afterload | Resistance the heart pumps against | How hard it is to push open a heavy door |
| Contractility | Intrinsic strength of heart muscle | How strong the person pulling the rubber band is |

### Frank-Starling Mechanism

**"The heart pumps what it receives."**

When more blood returns to the heart (increased preload), the ventricle stretches more and contracts more forcefully, pumping out more blood. This matches output to input automatically.`,
      keyTerms: [
        { term: 'isovolumetric contraction', definition: 'Phase where the ventricle contracts with all valves closed, building pressure without changing volume', pronunciation: 'EYE-so-vol-yoo-MET-rik' },
        { term: 'ejection fraction', definition: 'Percentage of blood pumped out with each beat; normal is 55-70%' },
        { term: 'stroke volume', definition: 'The amount of blood pumped by one ventricle in one beat; normally about 70 mL' },
        { term: 'preload', definition: 'The degree of stretch on heart muscle fibers before contraction; related to blood volume returning to the heart' },
        { term: 'afterload', definition: 'The resistance the heart must overcome to eject blood; largely determined by blood pressure in the arteries' },
        { term: 'contractility', definition: 'The inherent strength of heart muscle contraction, independent of preload and afterload' },
        { term: 'Frank-Starling mechanism', definition: 'The principle that increased ventricular filling leads to increased contraction force and stroke volume' },
      ],
      analogies: [
        'Isovolumetric contraction is like pushing against a locked door -- you are building pressure but nothing is moving yet.',
        'The Frank-Starling mechanism is like a rubber band: stretch it more and it snaps back harder.',
        'Afterload is like trying to blow up a balloon that is already partly inflated -- the more pressure already in it, the harder you have to push.',
      ],
      examples: [
        'A normal ejection fraction is 55-70%. Heart failure can reduce this to 20-30%, meaning much less blood is pumped per beat.',
        'When you stand up quickly, less blood returns to the heart (lower preload), so stroke volume temporarily drops -- this is why you might feel lightheaded.',
        'During exercise, cardiac output can increase to 20-25 L/min through increased heart rate and stroke volume.',
      ],
    },
    3: {
      level: 3,
      summary: 'The cardiac cycle integrates electrical activation, mechanical contraction, valve dynamics, and pressure-volume relationships across seven distinct phases, with cardiac output regulated by preload (Frank-Starling mechanism), afterload (wall stress), and contractility (inotropic state).',
      explanation: `## Cardiac Cycle Physiology

### Seven Phases of the Cardiac Cycle

**Phase 1: Atrial Systole**
- Duration: ~0.1 sec
- Atrial contraction contributes 15-25% of ventricular filling ("atrial kick")
- Produces "a" wave in jugular venous pulse
- Critical in conditions with stiff ventricles (diastolic dysfunction)
- ECG: P wave

**Phase 2: Isovolumetric Contraction**
- Duration: ~0.05 sec
- All four valves closed
- Ventricular pressure rises from ~8 mmHg to ~80 mmHg (left) rapidly
- No volume change (isovolumetric)
- Produces S1 heart sound
- ECG: QRS complex

**Phase 3: Rapid Ejection**
- Duration: ~0.12 sec
- Aortic valve opens when LV pressure > aortic pressure (~80 mmHg)
- Two-thirds of stroke volume ejected in first third of systole
- Peak LV and aortic pressure: ~120 mmHg
- ECG: ST segment

**Phase 4: Reduced Ejection**
- Duration: ~0.15 sec
- Blood flow decelerates as ventricle begins to repolarize
- Aortic pressure begins to fall
- ECG: T wave

**Phase 5: Isovolumetric Relaxation**
- Duration: ~0.08 sec
- Aortic valve closes (produces S2)
- All valves closed again
- LV pressure falls rapidly
- Dicrotic notch on aortic pressure tracing

**Phase 6: Rapid Filling**
- Duration: ~0.12 sec
- AV valves open when LV pressure < atrial pressure
- 70-80% of filling occurs passively
- May produce S3 in dilated ventricles (pathologic in adults >40)

**Phase 7: Diastasis (Slow Filling)**
- Duration: variable (shortens with tachycardia)
- Minimal additional filling
- Pressures in atria and ventricles nearly equalize
- First phase lost with tachycardia

### Pressure-Volume Loop

The PV loop is a powerful tool for understanding cardiac mechanics:

**Four corners of the PV loop:**
1. **Mitral valve closes** (end-diastolic point): Volume ~120 mL, Pressure ~8 mmHg
2. **Aortic valve opens**: Volume ~120 mL (same), Pressure ~80 mmHg
3. **Aortic valve closes** (end-systolic point): Volume ~50 mL, Pressure ~100 mmHg
4. **Mitral valve opens**: Volume ~50 mL (same), Pressure drops to ~5 mmHg

**Key parameters from the loop:**
- **End-diastolic volume (EDV)**: ~120 mL
- **End-systolic volume (ESV)**: ~50 mL
- **Stroke volume (SV)**: EDV - ESV = 70 mL
- **Ejection fraction (EF)**: SV/EDV = 58%
- **Stroke work**: Area enclosed by the PV loop

### Preload: Frank-Starling Mechanism

**Molecular basis:**
- Stretching myocardium increases sarcomere length toward optimal (~2.2 um)
- Optimizes actin-myosin overlap
- Increases calcium sensitivity of troponin C (length-dependent activation)
- Titin acts as molecular spring connecting Z-disc to M-line

**Clinical surrogates for preload:**
| Surrogate | Method | Limitations |
|-----------|--------|-------------|
| LVEDV | Echocardiography | Geometry dependent |
| LVEDP | Catheterization | Compliance dependent |
| CVP | Central line | Does not reflect LV preload reliably |
| PCWP | PA catheter | Affected by mitral disease, PEEP |

### Afterload

**Laplace's Law: Wall Stress = (Pressure x Radius) / (2 x Wall Thickness)**

Clinical determinants:
- **Systemic vascular resistance (SVR)**: Primary component
- **Arterial compliance**: Aortic stiffness increases with age
- **Ventricular radius**: Dilated ventricles have higher wall stress
- **Ventricular thickness**: Hypertrophy normalizes wall stress

**Effects on PV loop:**
- Increased afterload: Higher peak pressure, smaller SV, larger ESV
- Decreased afterload: Lower peak pressure, larger SV, smaller ESV

### Contractility (Inotropy)

**End-Systolic Pressure-Volume Relationship (ESPVR):**
- The gold standard for contractility assessment
- Slope = Ees (end-systolic elastance)
- Load-independent measure

**Positive inotropes increase Ees (steeper ESPVR):**
- Sympathetic stimulation (beta-1 agonism)
- Digitalis
- Calcium
- Phosphodiesterase inhibitors

**Negative inotropes decrease Ees (flatter ESPVR):**
- Beta-blockers (acute effect)
- Calcium channel blockers (non-dihydropyridine)
- Myocardial ischemia
- Acidosis

### Cardiac Output Regulation

**CO = HR x SV**

**Normal values:**
- CO: 4-8 L/min
- Cardiac index (CI): CO/BSA = 2.5-4.0 L/min/m2

**Heart rate regulation:**
- Intrinsic rate (SA node): ~100 bpm
- Resting rate ~72 bpm (vagal tone dominates)
- Sympathetic: increases rate (chronotropy) and conduction speed (dromotropy)
- Parasympathetic: decreases rate

**Exercise response:**
- CO can increase 4-5x (to ~20-25 L/min)
- HR: up to ~200 bpm (220 - age)
- SV: increases 30-50% (Frank-Starling + contractility)`,
      keyTerms: [
        { term: 'pressure-volume loop', definition: 'Graph plotting LV pressure vs. volume through one cardiac cycle; area represents stroke work; shape reveals preload, afterload, and contractility relationships' },
        { term: 'end-systolic elastance (Ees)', definition: 'Slope of the end-systolic pressure-volume relationship; load-independent measure of contractility' },
        { term: 'dicrotic notch', definition: 'Brief pressure rise on the aortic tracing caused by aortic valve closure and elastic recoil of the aorta' },
        { term: 'titin', definition: 'Giant sarcomeric protein acting as a molecular spring; contributes to passive stiffness and the Frank-Starling mechanism' },
        { term: 'diastasis', definition: 'Period of slow ventricular filling during mid-to-late diastole when atrial and ventricular pressures are nearly equal' },
        { term: 'Laplace law', definition: 'Wall stress = (Pressure x Radius) / (2 x Thickness); explains relationship between chamber geometry and afterload' },
        { term: 'cardiac index', definition: 'Cardiac output normalized to body surface area (CO/BSA); normal 2.5-4.0 L/min/m2' },
      ],
      clinicalNotes: 'The pressure-volume loop is essential for understanding hemodynamic interventions. Vasodilators shift the PV loop leftward (reduced afterload, increased SV). Inotropes steepen the ESPVR slope, increasing SV at any given preload. Volume resuscitation shifts the loop rightward along the diastolic compliance curve. Understanding these relationships guides management of acute heart failure and cardiogenic shock.',
    },
    4: {
      level: 4,
      summary: 'Advanced cardiac cycle analysis integrates pressure-volume loop mechanics, ventricular-arterial coupling, diastolic function assessment, and myocardial energetics to characterize both systolic and diastolic heart failure phenotypes and guide targeted hemodynamic interventions.',
      explanation: `## Advanced Cardiac Mechanics

### Ventricular-Arterial Coupling

**Concept:** Efficient energy transfer requires matching ventricular elastance (Ees) to arterial elastance (Ea).

**Arterial Elastance (Ea):**
Ea = End-systolic pressure / Stroke volume
- Integrates SVR, arterial compliance, and heart rate
- Represents total vascular load on the heart

**Coupling ratio: Ees/Ea**
- Optimal efficiency: Ees/Ea ~ 1.0
- Optimal stroke work: Ees/Ea ~ 0.5-0.7
- Heart failure: Ees/Ea < 0.5 (uncoupled)

**PV Loop Shifts with Disease:**

| Condition | ESPVR | EDPVR | Loop Shape |
|-----------|-------|-------|------------|
| HFrEF | Flattened (↓Ees) | Right-shifted | Wide, low, right |
| HFpEF | Normal Ees | Steepened (↑stiffness) | Narrow, tall, upward |
| Aortic Stenosis | ↑Ees (compensatory) | Left shift (concentric LVH) | Tall, narrow |
| Aortic Regurgitation | ↓Ees (late) | Right-shifted (eccentric LVH) | Wide, volume-loaded |
| Dilated CMP | ↓↓Ees | Right and upward shift | Very wide, low |

### Diastolic Function Assessment

**Phases of diastolic function:**
1. **Isovolumetric relaxation**: Active, energy-dependent (tau = time constant of relaxation)
2. **Early rapid filling**: Determined by relaxation rate and LV suction
3. **Diastasis**: Passive compliance
4. **Atrial contraction**: Active, augments filling

**Echocardiographic assessment:**

| Parameter | Normal | Grade I (Impaired Relaxation) | Grade II (Pseudonormal) | Grade III (Restrictive) |
|-----------|--------|-------------------------------|------------------------|------------------------|
| E/A ratio | 0.8-2.0 | <0.8 | 0.8-2.0 | >2.0 |
| E/e' | <10 | <10 | 10-14 | >14 |
| DT (ms) | 150-200 | >200 | 150-200 | <150 |
| LAVI (mL/m2) | <34 | May be normal | >34 | >34 |
| TR velocity (m/s) | <2.8 | <2.8 | 2.8-3.4 | >2.8 |

**Tau (time constant of isovolumetric relaxation):**
- Measured invasively: dP/dt during relaxation
- Normal: 30-50 ms
- Prolonged in ischemia, hypertrophy, and hypertrophic cardiomyopathy
- Temperature-sensitive, load-sensitive

### Myocardial Energetics

**Myocardial oxygen consumption (MVO2):**
- Basal metabolism: 25%
- Electrical activation: 1%
- Mechanical work: 74%

**Determinants of MVO2:**
1. **Wall stress** (most important): T = P x r / 2h
2. **Heart rate**
3. **Contractility**

**Pressure-Volume Area (PVA):**
PVA = Stroke Work + Potential Energy
- PVA correlates linearly with MVO2
- Potential energy = elastic energy stored in myocardium at end-systole

**Mechanical efficiency:**
- External work / Total energy consumption
- Normal: ~25%
- Decreased in heart failure (more energy wasted as heat)
- Increased by afterload reduction (less PE)

### Frank-Starling: Molecular Details

**Length-dependent activation:**
1. Increased sarcomere length → decreased interfilament lattice spacing
2. Closer proximity of myosin heads to actin binding sites
3. Increased calcium sensitivity of troponin C
4. Titin-mediated positioning of myosin heads near actin

**Beyond optimal length:**
- Overstretching (sarcomere >2.4 um) → descending limb
- Less actin-myosin overlap
- Clinically: severely dilated hearts with reduced function

**The Anrep effect:**
- Slow increase in contractility following acute increase in afterload
- Time course: minutes
- Mechanism: stretch-activated channels, Na-H exchanger activation
- Partially compensates for increased afterload

**The Bowditch effect (treppe):**
- Increased contractility with increased heart rate
- Mechanism: increased intracellular calcium accumulation
- Frequency-force relationship
- Reversed in heart failure (negative force-frequency relationship)

### Hemodynamic Profiles in Acute Heart Failure

**Forrester Classification (based on PCWP and CI):**

| Profile | CI (L/min/m2) | PCWP (mmHg) | Status | Treatment |
|---------|--------------|-------------|---------|-----------|
| I | >2.2 | <18 | Warm & Dry | Optimize oral meds |
| II | >2.2 | >18 | Warm & Wet | Diuretics, vasodilators |
| III | <2.2 | <18 | Cold & Dry | Cautious volume |
| IV | <2.2 | >18 | Cold & Wet | Inotropes + diuretics |

### Cardiac Reserve

**Exercise capacity depends on:**
- Chronotropic reserve: ability to increase HR
- Preload reserve: Frank-Starling recruitment
- Contractile reserve: increased inotropy
- Vasodilatory reserve: afterload reduction

**Impaired reserve in heart failure:**
- Blunted HR response (chronotropic incompetence)
- Flat Frank-Starling curve
- Negative force-frequency relationship
- Impaired vasodilation`,
      keyTerms: [
        { term: 'ventricular-arterial coupling', definition: 'Relationship between ventricular contractile properties (Ees) and arterial load (Ea); optimal coupling maximizes cardiac efficiency and stroke work' },
        { term: 'arterial elastance (Ea)', definition: 'Effective arterial load as seen by the ventricle; integrates SVR, compliance, and heart rate; Ea = ESP/SV' },
        { term: 'pressure-volume area (PVA)', definition: 'Sum of stroke work and potential energy on the PV diagram; correlates linearly with myocardial oxygen consumption' },
        { term: 'Anrep effect', definition: 'Slow autoregulatory increase in contractility following an acute increase in afterload; mediated by stretch-activated channels' },
        { term: 'Bowditch effect', definition: 'Positive force-frequency relationship where increased heart rate leads to increased contractility via calcium accumulation; reversed in heart failure' },
        { term: 'tau', definition: 'Time constant of isovolumetric relaxation; quantifies active relaxation rate; prolonged in diastolic dysfunction and ischemia' },
        { term: 'Forrester classification', definition: 'Hemodynamic phenotyping of heart failure based on cardiac index and wedge pressure into four profiles guiding therapy' },
      ],
      clinicalNotes: 'In cardiogenic shock, understanding ventricular-arterial coupling guides intervention: if Ees is severely depressed (systolic failure), inotropes improve coupling. If Ea is markedly elevated (vasoconstrictive state), vasodilators restore coupling. Mechanical support (IABP, Impella) reduces Ea while augmenting perfusion. In HFpEF, the steep EDPVR means small volume changes cause large pressure swings, explaining exertional dyspnea and flash pulmonary edema.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art cardiac cycle assessment leverages invasive PV loop analysis, advanced echocardiographic strain imaging, computational modeling, and integration of cellular mechanobiology to phenotype heart failure, guide device therapy, and evaluate novel pharmacologic targets.',
      explanation: `## Precision Cardiac Mechanics

### Invasive PV Loop Analysis: Clinical Application

**Conductance catheter technique:**
- Multi-electrode catheter measures instantaneous volume (conductance) and pressure
- Real-time PV loop generation
- Vena cava occlusion: generates family of loops for ESPVR and EDPVR determination

**Derived parameters:**

| Parameter | Formula | Clinical Significance |
|-----------|---------|----------------------|
| Ees | Slope of ESPVR | Contractility (load-independent) |
| Ea | ESP/SV | Arterial load |
| PRSW | Slope of SW vs. EDV | Preload-recruitable stroke work |
| dP/dtmax | Maximum rate of pressure rise | Contractility surrogate |
| Tau | Time constant of relaxation | Diastolic function |
| EDPVR | Exponential fit to end-diastolic points | Chamber stiffness |
| Ees/Ea | Coupling ratio | Mechanical efficiency |
| PVA | SW + PE | MVO2 correlate |

**Limitations of Ees:**
- Assumes linear ESPVR (actually curvilinear at extremes)
- Volume intercept (V0) changes with disease
- Best assessed with multiple loading conditions

### Myocardial Strain and Work

**Speckle-tracking echocardiography:**
- Global longitudinal strain (GLS): normal -18% to -22%
- GLS detects subclinical systolic dysfunction before EF declines
- Segmental strain identifies regional wall motion abnormalities

**Myocardial work index (MWI):**
- Non-invasive estimation of PV loop area using strain and cuff blood pressure
- Accounts for afterload (unlike GLS alone)
- Components:
  - Global work index (GWI): total myocardial work
  - Global constructive work (GCW): shortening during systole + lengthening during IVR
  - Global wasted work (GWW): lengthening during systole + shortening during IVR
  - Global work efficiency (GWE): GCW / (GCW + GWW)

**Clinical applications:**
- CRT response prediction: High GWW predicts benefit
- Chemotherapy cardiotoxicity: GWI decline precedes EF drop
- Subclinical LV dysfunction in valvular disease

### Diastolic Function: Advanced Concepts

**Single-beat estimation of EDPVR:**
- Uses echocardiographic volumes and estimated pressures
- Exponential model: P = A(e^(BV) - 1)
- Chamber stiffness constant (B) differentiates HFpEF phenotypes

**Left atrial strain:**
- Reservoir strain: reflects LA compliance
- Conduit strain: passive emptying
- Contractile strain: active emptying (atrial kick)
- LA reservoir strain <24% predicts elevated filling pressures
- Emerging as superior to E/e' for diastolic function grading

**Exercise diastolic stress testing:**
- Abnormal rise in E/e' with exercise unmasks latent diastolic dysfunction
- Exercise PCWP >25 mmHg diagnostic of HFpEF
- Invasive exercise hemodynamics remain the gold standard (2024 HFA-ESC consensus)

### Cardiomyocyte Mechanobiology

**Titin isoform switching:**
- N2BA (compliant) vs. N2B (stiff) isoforms
- HFpEF: Increased N2B/N2BA ratio → increased passive stiffness
- Phosphorylation by PKA/PKG reduces passive tension
- Therapeutic target: Enhancing titin phosphorylation

**Calcium handling in heart failure:**
- SERCA2a downregulation → impaired calcium reuptake → diastolic dysfunction
- RyR2 leak → calcium depletion of SR → systolic dysfunction
- NCX upregulation → net calcium loss → reduced contractility
- Therapeutic targets: SERCA2a gene therapy, RyR2 stabilizers (dantrolene)

**Myofilament targets:**
- Omecamtiv mecarbil: cardiac myosin activator
  - Increases systolic ejection time without increasing MVO2
  - GALACTIC-HF: Modest benefit in HFrEF
- Mavacamten: cardiac myosin inhibitor
  - Reduces hypercontractility in HCM
  - EXPLORER-HCM: Significant symptom improvement

### Computational Cardiac Mechanics

**Finite element modeling:**
- Patient-specific LV geometry from imaging
- Constitutive models incorporating fiber architecture
- Predicts response to interventions:
  - Surgical ventricular restoration
  - CRT lead placement optimization
  - LVAD flow optimization

**Digital twin concept:**
- Personalized computational heart model
- Updated with real-time hemodynamic data
- Predicts drug response, device settings
- Under development for clinical decision support

### Mechanical Circulatory Support: Hemodynamic Integration

**Intra-aortic balloon pump (IABP):**
- Diastolic augmentation: increases coronary perfusion
- Systolic unloading: reduces afterload (Ea)
- Net effect: Shifts PV loop left and down
- Limited CO augmentation (~0.5 L/min)
- IABP-SHOCK II: No mortality benefit in MI cardiogenic shock

**Impella:**
- Direct LV unloading: Aspirates blood from LV → aorta
- PV loop effect: Marked leftward shift, reduced PVA
- Reduces MVO2 and LV wall stress
- 2.5-5.5 L/min flow depending on device size
- Decreasing interest for routine cardiogenic shock (DANGER trial)

**ECMO (VA-ECMO):**
- Provides biventricular and respiratory support
- Increases afterload (retrograde aortic flow)
- May worsen LV distension → LV venting needed
- Combined ECMO + Impella (ECPELLA): Unloads LV while providing systemic support

### Future Directions

**Pressure-volume loop-guided ICU management:**
- Real-time PV loop monitoring with miniaturized conductance catheters
- AI-assisted interpretation for hemodynamic optimization
- Integration with vasopressor/inotrope titration algorithms

**Biomarker-integrated hemodynamic assessment:**
- High-sensitivity troponin trends correlate with PVA changes
- NT-proBNP reflects wall stress and EDPVR shifts
- Galectin-3 and sST2 predict myocardial fibrosis progression

**Remote hemodynamic monitoring:**
- CardioMEMS (implantable PA pressure sensor)
- Reduces HF hospitalizations by 37% (CHAMPION trial)
- Enables proactive preload management`,
      keyTerms: [
        { term: 'global longitudinal strain (GLS)', definition: 'Speckle-tracking echocardiographic measure of myocardial deformation; detects subclinical systolic dysfunction before EF declines; normal -18% to -22%' },
        { term: 'myocardial work index', definition: 'Non-invasive estimation of PV loop area using strain-pressure analysis; accounts for afterload unlike GLS alone' },
        { term: 'omecamtiv mecarbil', definition: 'Cardiac myosin activator that increases systolic ejection time without raising intracellular calcium or MVO2; studied in GALACTIC-HF for HFrEF' },
        { term: 'mavacamten', definition: 'Cardiac myosin inhibitor that reduces hypercontractility and LVOT obstruction in hypertrophic cardiomyopathy; approved after EXPLORER-HCM' },
        { term: 'ECPELLA', definition: 'Combined VA-ECMO and Impella strategy providing systemic circulatory support with simultaneous LV unloading to prevent LV distension' },
        { term: 'CardioMEMS', definition: 'Implantable wireless pulmonary artery pressure sensor enabling remote hemodynamic monitoring and proactive heart failure management' },
        { term: 'titin isoform switching', definition: 'Shift between compliant (N2BA) and stiff (N2B) titin isoforms altering passive ventricular stiffness; contributes to HFpEF pathophysiology' },
      ],
      clinicalNotes: `Key clinical practice points:

1. **PV loop analysis** in the cath lab is underutilized but invaluable for phenotyping cardiomyopathy and guiding therapy. Ees/Ea assessment can distinguish patients who will benefit from inotropes vs. vasodilators.

2. **Myocardial work imaging** is emerging as a superior metric to EF and GLS for predicting CRT response, chemotherapy cardiotoxicity, and subclinical dysfunction in valvular disease.

3. **Mechanical support selection** should be guided by hemodynamic phenotype: IABP for modest afterload reduction, Impella for direct LV unloading, VA-ECMO for biventricular failure, and ECPELLA for combined LV unloading + systemic support.

4. **LA strain** is increasingly recognized as a robust marker of diastolic function and may replace E/e' in HFpEF diagnosis.

5. **Remote hemodynamic monitoring** (CardioMEMS) has level I evidence for reducing HF hospitalizations and is being integrated into ambulatory heart failure management pathways.`,
    },
  },

  media: [
    {
      id: 'cardiac-cycle-diagram',
      type: 'diagram',
      filename: 'cardiac-cycle-phases.svg',
      title: 'Cardiac Cycle Phases',
      description: 'Wiggers diagram showing pressure, volume, ECG, and heart sounds through one cardiac cycle',
    },
    {
      id: 'pv-loop-normal',
      type: 'diagram',
      filename: 'pv-loop-normal.svg',
      title: 'Normal Pressure-Volume Loop',
      description: 'Standard left ventricular PV loop with labeled phases and key parameters',
    },
    {
      id: 'frank-starling-curve',
      type: 'diagram',
      filename: 'frank-starling-curve.svg',
      title: 'Frank-Starling Curve',
      description: 'Relationship between preload and stroke volume showing normal and heart failure curves',
    },
  ],

  citations: [
    {
      id: 'guyton-textbook',
      type: 'textbook',
      title: 'Guyton and Hall Textbook of Medical Physiology',
      authors: ['Hall JE', 'Hall ME'],
      source: 'Elsevier',
      chapter: '9-11',
    },
    {
      id: 'braunwald-heart-disease',
      type: 'textbook',
      title: 'Braunwald\'s Heart Disease: A Textbook of Cardiovascular Medicine',
      authors: ['Libby P', 'Bonow RO', 'Mann DL', 'Tomaselli GF'],
      source: 'Elsevier',
      chapter: '21-23',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-hemodynamics', targetType: 'topic', relationship: 'sibling', label: 'Hemodynamics' },
    { targetId: 'physiology-cardiac-electrophysiology', targetType: 'topic', relationship: 'sibling', label: 'Cardiac Electrophysiology' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'see-also', label: 'Heart Failure' },
    { targetId: 'condition-valvular-disease', targetType: 'condition', relationship: 'see-also', label: 'Valvular Heart Disease' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['physiology', 'cardiology', 'critical care'],
    keywords: ['cardiac cycle', 'systole', 'diastole', 'cardiac output', 'preload', 'afterload', 'contractility', 'Frank-Starling', 'pressure-volume loop', 'ejection fraction'],
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

export default cardiacCycle;
