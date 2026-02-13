/**
 * Cardiovascular System Overview - Comprehensive Educational Content
 *
 * Covers anatomy, physiology, and function of the heart and blood vessels
 * including circulation, cardiac cycle, and basic hemodynamics.
 */

import { EducationalContent } from '../types';

export const cardiovascularOverviewContent: EducationalContent = {
  id: 'system-cardiovascular',
  type: 'system',
  name: 'Cardiovascular System',
  alternateNames: ['Circulatory System', 'CV System', 'Cardiovasculature'],
  fmaId: 'FMA:7199',

  levels: {
    1: {
      level: 1,
      summary: 'The cardiovascular system is your body\'s delivery service, using the heart as a pump and blood vessels as roads to carry oxygen and nutrients to every cell.',
      explanation: `## Your Body's Delivery System

Imagine your body is like a big city, and your cells are the houses. Just like a city needs delivery trucks to bring food and supplies to every house, your body needs a way to deliver important things to every cell.

**The Main Parts:**

1. **The Heart - Your Pump**
The heart is a muscular pump about the size of your fist. It sits in the middle of your chest, slightly to the left. It beats about 100,000 times a day, pumping blood through your body.

2. **Blood Vessels - The Roads**
- Arteries: Highways carrying fresh blood AWAY from heart
- Veins: Smaller roads bringing used blood BACK to heart
- Capillaries: Tiny pathways where deliveries happen

3. **Blood - The Delivery Trucks**
Blood carries oxygen, nutrients, and other important things your cells need.

**How It Works:**

1. Your heart pumps blood out to your lungs to pick up oxygen
2. The oxygen-rich blood goes back to the heart
3. The heart pumps this blood out to the rest of your body
4. Your cells take what they need
5. Blood returns to the heart to start over

This whole trip happens in less than a minute for one drop of blood!

**Why It Matters:**

Without this system working properly, your cells wouldn't get oxygen or food. You couldn't survive more than a few minutes without your cardiovascular system.`,
      keyTerms: [
        { term: 'heart', definition: 'The muscular organ that pumps blood throughout your body' },
        { term: 'arteries', definition: 'Blood vessels that carry blood away from the heart' },
        { term: 'veins', definition: 'Blood vessels that carry blood back to the heart' },
        { term: 'oxygen', definition: 'The gas in air that your cells need to survive' },
      ],
      analogies: [
        'The cardiovascular system is like a city\'s delivery system - the heart is the main post office, blood vessels are the roads, and blood is the delivery truck.',
        'Your heart is like a water pump in a fountain - it keeps everything moving in a continuous loop.',
        'Arteries are like highways leaving a city, while veins are like streets returning to the city.',
      ],
      examples: [
        'When you exercise, your heart beats faster to deliver more oxygen to your muscles.',
        'If you cut your finger, you can see your cardiovascular system working as blood flows out to help clean the wound.',
      ],
    },
    2: {
      level: 2,
      summary: 'The cardiovascular system consists of the heart, blood vessels, and blood, working together to maintain circulation through pulmonary and systemic circuits, with the heart acting as a dual pump serving both lungs and body tissues.',
      explanation: `## Cardiovascular System Structure

The cardiovascular system is a closed circulatory system consisting of three main components:

### 1. The Heart

**Location:** Mediastinum, between the lungs, slightly left of midline
**Size:** Approximately the size of a closed fist (250-350 grams)
**Chambers:** Four chambers - two atria (receiving) and two ventricles (pumping)

**Heart Chambers:**
| Chamber | Location | Function |
|---------|----------|----------|
| Right Atrium | Upper right | Receives deoxygenated blood from body |
| Right Ventricle | Lower right | Pumps blood to lungs |
| Left Atrium | Upper left | Receives oxygenated blood from lungs |
| Left Ventricle | Lower left | Pumps blood to body |

**Key Point:** The left ventricle has the thickest walls because it must pump blood to the entire body against high resistance.

### 2. Blood Vessels

**Arteries (Away from Heart):**
- Thick, muscular walls to handle high pressure
- Carry oxygenated blood (except pulmonary artery)
- Elastic properties help maintain blood pressure

**Veins (Toward Heart):**
- Thinner walls than arteries
- Have valves to prevent backflow
- Carry deoxygenated blood (except pulmonary veins)
- Act as blood reservoirs (~65% of blood volume)

**Capillaries:**
- Microscopic vessels where exchange occurs
- Thin walls (one cell thick) allow diffusion
- Site of oxygen, nutrient, and waste exchange

### 3. Blood

**Components:**
- Plasma (55%): Liquid portion carrying proteins, nutrients, wastes
- Red blood cells: Carry oxygen via hemoglobin
- White blood cells: Part of immune system
- Platelets: Blood clotting

## Circulation Pathways

### Pulmonary Circulation
- Right ventricle → Pulmonary artery → Lungs → Pulmonary veins → Left atrium
- Purpose: Oxygenation of blood and CO2 removal
- Low pressure system

### Systemic Circulation
- Left ventricle → Aorta → Body tissues → Vena cava → Right atrium
- Purpose: Deliver oxygen and nutrients to tissues
- High pressure system

## The Cardiac Cycle

**Systole (Contraction):**
- Ventricles contract, pushing blood out
- AV valves close (Lub sound)
- Semilunar valves open

**Diastole (Relaxation):**
- Ventricles relax and fill
- Semilunar valves close (Dub sound)
- AV valves open

**Cardiac Output:** Amount of blood pumped per minute
- Heart Rate × Stroke Volume
- Normal: ~5 liters/minute at rest`,
      keyTerms: [
        { term: 'atrium', definition: 'Upper chamber of the heart that receives blood', pronunciation: 'AY-tree-um' },
        { term: 'ventricle', definition: 'Lower chamber of the heart that pumps blood out', pronunciation: 'VEN-tri-kul' },
        { term: 'pulmonary circulation', definition: 'Circulation between heart and lungs for oxygenation' },
        { term: 'systemic circulation', definition: 'Circulation between heart and body tissues' },
        { term: 'systole', definition: 'Contraction phase of the cardiac cycle', pronunciation: 'SIS-toe-lee' },
        { term: 'diastole', definition: 'Relaxation phase of the cardiac cycle', pronunciation: 'die-AS-toe-lee' },
        { term: 'cardiac output', definition: 'Volume of blood pumped by the heart per minute' },
      ],
      analogies: [
        'The heart has four chambers like rooms in a house - two upstairs (atria) for receiving guests and two downstairs (ventricles) for sending them out.',
        'Heart valves work like one-way doors in a building - they only open in one direction to control traffic flow.',
      ],
    },
    3: {
      level: 3,
      summary: 'The cardiovascular system functions through pressure gradients generated by cardiac contraction, with hemodynamic principles governing blood flow, resistance, and distribution to maintain tissue perfusion and homeostasis.',
      explanation: `## Cardiovascular Physiology

### Hemodynamic Principles

**Blood Flow (Q):** Governed by the relationship:
Q = ΔP / R

Where:
- Q = Cardiac output
- ΔP = Pressure gradient
- R = Vascular resistance

**Blood Pressure Determinants:**
MAP = CO × TPR

Where:
- MAP = Mean arterial pressure
- CO = Cardiac output
- TPR = Total peripheral resistance

### Vascular Function

**Arterial System:**
- Aorta and large arteries: Windkessel effect (elastic recoil maintains diastolic pressure)
- Medium arteries: Distribution conduits
- Arterioles: Primary resistance vessels (control blood flow distribution)

**Venous System:**
- Venules: Collect blood from capillaries
- Veins: Capacitance vessels (contain ~65% of blood volume)
- Venous return enhanced by:
  - Skeletal muscle pump
  - Respiratory pump (thoracic pressure changes)
  - Venous valves

**Capillary Exchange:**
- Starling forces govern fluid movement
- Hydrostatic pressure pushes fluid out
- Oncotic pressure pulls fluid in
- Net filtration = (Pc - Pi) - σ(πp - πi)

### Cardiac Electrophysiology

**Conduction System:**
1. SA Node (pacemaker) → Atria
2. AV Node (delay) → Bundle of His
3. Bundle Branches → Purkinje fibers → Ventricles

**Action Potential Phases (Ventricular Myocyte):**
- Phase 0: Rapid Na+ influx (depolarization)
- Phase 1: Brief K+ efflux
- Phase 2: Ca2+ influx plateau (absolute refractory)
- Phase 3: K+ efflux (repolarization)
- Phase 4: Resting membrane potential

**Autonomic Control:**
- Parasympathetic (vagus): Decreases HR, decreases conduction velocity
- Sympathetic: Increases HR, increases contractility, increases conduction velocity

### Control of Circulation

**Local Control (Metabolic):**
- Active hyperemia: Increased flow with increased activity
- Reactive hyperemia: Increased flow after occlusion
- Autoregulation: Maintains constant flow despite BP changes

**Neural Control:**
- Baroreceptor reflex: Primary short-term BP regulator
- Chemoreceptor reflex: Responds to CO2, O2, pH
- Vasomotor center: Medullary control of vascular tone

**Hormonal Control:**
- RAAS: Long-term BP regulation, volume control
- ADH: Water retention, vasoconstriction
- ANP/BNP: Natriuresis, vasodilation
- Epinephrine: Acute cardiovascular response

### Coronary Circulation

**Left Coronary Artery:**
- Left anterior descending (LAD): Anterior LV, anterior 2/3 of interventricular septum, apex
- Left circumflex (LCx): Lateral LV, left atrium

**Right Coronary Artery (RCA):**
- Right atrium, RV, inferior LV
- Posterior descending artery (PDA)
- SA node (60% of people), AV node (90%)

**Coronary Perfusion:**
- Occurs primarily during diastole
- High oxygen extraction (70-75% at rest)
- Minimal reserve for increased demand`,
      keyTerms: [
        { term: 'hemodynamics', definition: 'Study of blood flow and the forces involved in circulation' },
        { term: 'mean arterial pressure', definition: 'Average arterial pressure during cardiac cycle; approx MAP = DBP + 1/3(SBP-DBP)' },
        { term: 'Windkessel effect', definition: 'Elastic recoil of aorta maintaining diastolic pressure' },
        { term: 'Starling forces', definition: 'Hydrostatic and oncotic pressures governing capillary fluid exchange' },
        { term: 'SA node', definition: 'Sinoatrial node; natural pacemaker of the heart located in right atrium' },
        { term: 'autoregulation', definition: 'Local maintenance of constant blood flow despite blood pressure changes' },
        { term: 'coronary perfusion', definition: 'Blood flow to heart muscle, primarily during diastole' },
      ],
      clinicalNotes: 'Understanding coronary artery distribution is crucial for localizing myocardial infarctions on ECG. LAD occlusion causes anterior MI; RCA causes inferior MI with possible bradycardia from AV node involvement. Diastole is when coronary perfusion occurs, so tachycardia reduces coronary blood flow.',
    },
    4: {
      level: 4,
      summary: 'Advanced cardiovascular physiology integrates complex interactions between electrical activation, mechanical contraction, valvular function, and peripheral circulation, with multiple regulatory systems maintaining homeostasis through feedback mechanisms and adaptive responses.',
      explanation: `## Advanced Cardiovascular Physiology

### Ventricular Mechanics

**Pressure-Volume Loops:**

The cardiac cycle can be represented as a pressure-volume relationship with key phases:

1. **IVR (Isovolumic Relaxation):** Aortic valve closes, mitral valve closed
2. **LV Filling:** Mitral valve opens, rapid then reduced filling
3. **IVC (Isovolumic Contraction):** Mitral valve closes, aortic valve closed
4. **Ejection:** Aortic valve opens, rapid then reduced ejection

**Key Parameters:**
- ESV (End-systolic volume): ~50 mL
- EDV (End-diastolic volume): ~120 mL
- SV (Stroke volume) = EDV - ESV: ~70 mL
- EF (Ejection fraction) = SV/EDV: ~55-70%

**Frank-Starling Law:**
Increased preload → increased stretch → increased contractile force
- Sarcomere length optimum: 2.2 μm
- Beyond optimal length: decreased force (overstretch)

**Contractility Regulation:**
- Sympathetic stimulation ↑ contractility (norepinephrine)
- Calcium availability is rate-limiting
- Negative inotropes: beta-blockers, calcium channel blockers, antiarrhythmics

### Valvular Physiology

**Aortic Valve:**
- 3 cusps (left, right, posterior)
- Opens during ventricular systole
- Coronary ostia behind cusps
- No coronary flow during systole (cusps cover ostia)

**Mitral Valve:**
- 2 cusps (anterior, posterior)
- Annulus area 4-6 cm²
- Chordae tendineae prevent prolapse
- Papillary muscles coordinate with contraction

**Timing of Valve Events:**
- S1 (Mitral/tricuspid close): Beginning of systole
- S2 (Aortic/pulmonic close): Beginning of diastole
- Physiological splitting of S2: Aortic closes before pulmonic

### Peripheral Circulation

**Vascular Resistance Distribution:**
| Vessel | % Total Resistance |
|--------|-------------------|
| Aorta | ~5% |
| Large arteries | ~10% |
| Small arteries | ~15% |
| Arterioles | ~50% |
| Capillaries | ~20% |

**Arteriolar Control:**
- Myogenic response: Constriction to increased pressure
- Metabolic dilation: H+, CO2, K+, adenosine cause dilation
- Flow-mediated dilation: NO release from endothelium
- Sympathetic constriction: Alpha-1 receptors

**Capillary Dynamics:**
Starling equation:
Jv = Kf [(Pc - Pi) - σ(πp - πi)]

- Kf: Filtration coefficient
- σ: Reflection coefficient
- Pulmonary capillaries: Net filtration ~0 (no interstitial fluid)
- Systemic capillaries: Net filtration

### Venous Return and Right Heart Function

**Determinants of Venous Return:**
VR = (RAP - MSFP) / VRresistance

- RAP: Right atrial pressure
- MSFP: Mean systemic filling pressure (~7 mmHg)
- VRresistance: Resistance to venous return

**Factors Increasing MSFP:**
- Increased blood volume
- Venous constriction
- Decreased venous compliance

**Right Ventricular-Pulmonary Artery Coupling:**
TAPSE/PASP ratio assesses coupling
- Normal: TAPSE > 20 mm, PASP < 25 mmHg
- RV failure occurs when afterload exceeds contractile capacity

### Neurohormonal Regulation

**Baroreceptor Reflex:**
- Carotid sinus (Hering nerve → glossopharyngeal)
- Aortic arch (vagus nerve)
- Respond to changes in stretch (pressure)
- Primary short-term regulator (seconds to hours)

**Renin-Angiotensin-Aldosterone System (RAAS):**
- Long-term blood pressure regulation
- Volume homeostasis
- Angiotensin II: Potent vasoconstrictor, stimulates aldosterone, ADH, thirst

**Natriuretic Peptides:**
- ANP from atria (stretch), BNP from ventricles (stretch)
- Promote sodium and water excretion
- Vasodilation, inhibit RAAS
- Counterbalance to antidiuretic systems

### Coronary Physiology

**Coronary Flow Reserve:**
Ratio of maximal to resting flow
- Normal: 4-5x increase possible
- Reduced in coronary artery disease
- Measured by fractional flow reserve (FFR)

**Metabolic Regulation:**
- Adenosine: Primary metabolic vasodilator
- Oxygen demand: Primary determinant of coronary flow
- Autoregulation maintains flow over 60-180 mmHg perfusion pressure

**Myocardial Oxygen Consumption (MVO2) Determinants:**
- Heart rate (major)
- Contractility
- Wall tension (Laplace law: T = P × r / 2h)

Clinical: Reducing heart rate is most effective way to reduce MVO2`,
      keyTerms: [
        { term: 'Frank-Starling law', definition: 'Relationship between preload and stroke volume; increased stretch increases force of contraction' },
        { term: 'Starling equation', definition: 'Mathematical relationship governing fluid movement across capillary membranes' },
        { term: 'mean systemic filling pressure', definition: 'Equilibrium pressure in circulation when flow stops; determines driving pressure for venous return' },
        { term: 'fractional flow reserve', definition: 'Ratio of maximal flow in stenotic artery to normal flow; <0.80 indicates significant ischemia' },
        { term: 'TAPSE', definition: 'Tricuspid annular plane systolic excursion; measures RV systolic function' },
        { term: 'wall tension', definition: 'Force per unit length in ventricular wall; major determinant of MVO2 (Laplace law)' },
      ],
      clinicalNotes: 'Understanding pressure-volume loops is essential for interpreting cardiac function. The area within the loop represents stroke work. FFR < 0.80 indicates a hemodynamically significant coronary stenosis requiring revascularization. Right heart failure often occurs due to pulmonary hypertension causing RV-PA uncoupling.',
    },
    5: {
      level: 5,
      summary: 'Contemporary cardiovascular physiology integrates molecular mechanisms, biomechanical principles, and clinical applications, with implications for understanding disease pathogenesis, therapeutic targeting, and advanced hemodynamic monitoring in critical care and cardiovascular medicine.',
      explanation: `## Clinical Cardiovascular Physiology

## Hemodynamic Monitoring

### Invasive Monitoring

**Arterial Line:**
- Direct arterial pressure measurement
- arterial waveform analysis
- Systolic, diastolic, mean pressure
- Pulse pressure variation for fluid responsiveness

**Pulmonary Artery Catheter (Swan-Ganz):**
Measures:
- Right atrial pressure (RAP)
- Right ventricular pressure (RVP)
- Pulmonary artery pressure (PAP)
- Pulmonary capillary wedge pressure (PCWP)
- Cardiac output (thermodilution)

**Calculated Parameters:**
- Cardiac index (CI) = CO / BSA
- Systemic vascular resistance (SVR)
- Pulmonary vascular resistance (PVR)
- Stroke volume (SV) and stroke volume index (SVI)

### Shock Classification by Hemodynamics

**Cardiogenic Shock (Cold and Wet):**
- Low CI, high PCWP
- High SVR (compensatory)
- Treatment: Inotropes, afterload reduction, mechanical support

**Distributive Shock (Warm and Wet):**
- High CI, low PCWP
- Low SVR
- Examples: Sepsis, anaphylaxis, neurogenic

**Hypovolemic Shock (Cold and Dry):**
- Low CI, low PCWP
- High SVR
- Treatment: Fluid resuscitation

**Obstructive Shock:**
- Low CI, variable PCWP
- High/low SVR depending on cause
- Examples: PE, tamponade, tension pneumothorax

## Cardiovascular Integration

### Cardiopulmonary Interaction

**Ventilator Effects:**
- Increased intrathoracic pressure → decreased venous return
- Positive pressure ventilation can reduce cardiac output
- Hyperventilation → decreased PaCO2 → pulmonary vasoconstriction

**PEEP Effects:**
- Reduces venous return (preload)
- May reduce RV output
- Can improve LV function by reducing afterload

### Renin-Angiotensin-Aldosterone System (RAAS)

**Therapeutic Targeting:**
- ACE inhibitors: Block conversion of Ang I to Ang II
- ARBs: Block Ang II type 1 receptor
- ARNI (sacubitril/valsartan): Blocks ARB + inhibits neprilysin (increases NPs)
- MRAs: Block aldosterone receptor

**Clinical Applications:**
- HFrEF: All three classes reduce mortality
- HTN: First-line agents
- CKD: Renoprotective effects
- Post-MI: Prevent remodeling

### Cardiovascular Pharmacology

**Beta-Blockers:**
- Reduce heart rate (chronotropy)
- Reduce contractility (inotropy)
- Reduce conduction velocity (dromotropy)
- Cardioselective: metoprolol, atenolol
- Non-selective: carvedilol, propranolol
- Indications: HFrEF, HTN, angina, arrhythmias

**Calcium Channel Blockers:**
- Dihydropyridines (amlodipine): Vasodilators
- Non-dihydropyridines (verapamil, diltiazem): Negative chronotropy/inotropy
- Indications: HTN, angina, rate control

**Vasopressors:**
- Norepinephrine: Alpha-1 > beta-1; first-line for shock
- Epinephrine: Alpha + beta; anaphylaxis, cardiac arrest
- Phenylephrine: Pure alpha; SVT with hypotension
- Vasopressin: V1 receptors; septic shock adjunct

**Inotropes:**
- Dobutamine: Beta-1 > beta-2; cardiogenic shock
- Milrinone: PDE-3 inhibitor; pulmonary hypertension + HF
- Digoxin: Na+/K+ ATPase inhibition; rate control in HFpEF

## Evidence-Based Applications

### ACC/AHA Guidelines Integration

**Hypertension (2017 ACC/AHA):**
- Normal: <120/80 mmHg
- Elevated: 120-129/<80 mmHg
- Stage 1: 130-139/80-89 mmHg
- Stage 2: ≥140/≥90 mmHg
- First-line: ACEi/ARB, CCB, thiazide diuretics

**Stable Ischemic Heart Disease (2021):**
- Medical therapy: ACEi, beta-blocker, statin, aspirin
- Revascularization: Ischemia-guided for most
- Complete revascularization preferred for multivessel CAD

**Heart Failure (2022 AHA/ACC/HFSA):**
- GDMT four pillars: ARNI/ACEi, beta-blocker, MRA, SGLT2i
- Rapid initiation strategy
- Device therapy for eligible patients

### Biomarkers in Clinical Practice

**Natriuretic Peptides (BNP/NT-proBNP):**
- Diagnosis of HF: Rule-out if normal
- Prognosis: Higher levels = worse outcomes
- Monitoring: Guided therapy not superior to usual care

**High-Sensitivity Troponin:**
- Detect myocardial injury
- Rule-out MI: <99th percentile at 0-3 hours
- Prognostic in HF, CKD, sepsis

### Advanced Hemodynamic Assessment

**Echocardiographic Assessment:**
- LVEF by Simpson's biplane method
- Diastolic function: E/e', LA volume, TR velocity
- Right heart: TAPSE, S', RV strain
- Valve function: Gradient, valve area, regurgitation

**Cardiac MRI:**
- Gold standard for volumes, EF
- Tissue characterization (LGE for fibrosis)
- Viability assessment
- Perfusion imaging

**CT Coronary Angiography:**
- Anatomical assessment of CAD
- Plaque characterization
- Stent patency`,
      keyTerms: [
        { term: 'Swan-Ganz catheter', definition: 'Pulmonary artery catheter for comprehensive hemodynamic monitoring including CO, PAP, PCWP' },
        { term: 'PCWP', definition: 'Pulmonary capillary wedge pressure; surrogate for left atrial pressure' },
        { term: 'pulse pressure variation', definition: 'Respiratory variation in arterial pulse pressure; predicts fluid responsiveness' },
        { term: 'GDMT', definition: 'Guideline-directed medical therapy; evidence-based pharmacotherapy' },
        { term: 'Simpson\'s biplane method', definition: 'Echocardiographic method for measuring LVEF; most accurate' },
        { term: 'LGE', definition: 'Late gadolinium enhancement; cardiac MRI technique for detecting myocardial fibrosis/scar' },
      ],
      clinicalNotes: `Clinical integration of cardiovascular physiology:

1. **Shock Management:** Classify by hemodynamics (wet/dry, warm/cold) before initiating therapy
2. **Hemodynamic Monitoring:** Invasive monitoring when diagnosis/management uncertain
3. **GDMT for HFrEF:** Four pillars have ~70% combined mortality reduction
4. **BNP Interpretation:** Higher cutoffs in elderly, obese; lower in acute pulmonary edema
5. **Valve Disease:** Echo grading integrates gradient, valve area, and symptoms
6. **Coronary Physiology:** FFR < 0.80 or iFR < 0.89 indicates ischemic stenosis
7. **Diastolic Function:** E/e' > 14 suggests elevated filling pressures
8. **RV-PA Coupling:** TAPSE/PASP ratio < 0.31 mm/mmHg suggests RV failure`,
    },
  },

  media: [
    {
      id: 'cv-anatomy-overview',
      type: 'diagram',
      filename: 'cardiovascular-system-anatomy.svg',
      title: 'Cardiovascular System Anatomy',
      description: 'Overview of heart, blood vessels, and circulation',
    },
    {
      id: 'cardiac-cycle-diagram',
      type: 'diagram',
      filename: 'cardiac-cycle-wiggers.svg',
      title: 'The Cardiac Cycle (Wiggers Diagram)',
      description: 'Relationship between ECG, pressures, and sounds',
    },
    {
      id: 'conduction-system',
      type: 'diagram',
      filename: 'cardiac-conduction-system.svg',
      title: 'Cardiac Conduction System',
      description: 'SA node, AV node, bundle branches, Purkinje fibers',
    },
    {
      id: 'pv-loop',
      type: 'diagram',
      filename: 'pressure-volume-loop.svg',
      title: 'Left Ventricular Pressure-Volume Loop',
      description: 'Hemodynamic representation of cardiac cycle',
    },
  ],

  citations: [
    {
      id: 'guyton-hall-physiology',
      type: 'textbook',
      title: 'Guyton and Hall Textbook of Medical Physiology',
      source: 'Elsevier',
      chapter: 'Cardiovascular Physiology',
    },
    {
      id: 'boron-medical-physiology',
      type: 'textbook',
      title: 'Medical Physiology',
      authors: ['Boron WF', 'Boulpaep EL'],
      source: 'Elsevier',
    },
    {
      id: 'acc-aha-hypertension-2017',
      type: 'article',
      title: '2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults',
      authors: ['Whelton PK', 'et al.'],
      source: 'Hypertension',
      url: 'https://doi.org/10.1161/HYP.0000000000000065',
    },
    {
      id: 'acc-aha-hf-2022',
      type: 'article',
      title: '2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure',
      authors: ['Heidenreich PA', 'et al.'],
      source: 'Circulation',
    },
  ],

  crossReferences: [
    { targetId: 'structure-heart', targetType: 'structure', relationship: 'related', label: 'Heart' },
    { targetId: 'structure-coronary-arteries', targetType: 'structure', relationship: 'related', label: 'Coronary Arteries' },
    { targetId: 'system-respiratory', targetType: 'system', relationship: 'related', label: 'Respiratory System' },
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'child', label: 'Coronary Artery Disease' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'child', label: 'Heart Failure' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['anatomy', 'physiology', 'hemodynamics'],
    keywords: ['heart', 'circulation', 'cardiac cycle', 'blood pressure', 'cardiac output'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cardiovascularOverviewContent;
