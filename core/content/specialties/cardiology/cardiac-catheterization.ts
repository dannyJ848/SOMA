/**
 * Cardiac Catheterization - Comprehensive Educational Content
 *
 * Covers diagnostic and interventional cardiac catheterization procedures,
 * including coronary angiography, PCI, hemodynamic assessment, and structural interventions.
 */

import { EducationalContent } from '../../types';

export const cardiacCatheterization: EducationalContent = {
  id: 'procedure-cardiac-catheterization',
  type: 'topic',
  name: 'Cardiac Catheterization',
  alternateNames: ['Cath', 'Coronary Angiography', 'PCI', 'Heart Catheterization', 'Interventional Cardiology'],

  levels: {
    1: {
      level: 1,
      summary: 'Cardiac catheterization is a procedure where doctors insert a thin tube into blood vessels to look at your heart and treat blockages.',
      explanation: `Cardiac catheterization (often called a "heart cath") is a common procedure that lets doctors look inside your heart and blood vessels. It is usually done in a special room called a cath lab.

**How It Works:**

1. A small tube (catheter) is inserted through a blood vessel, usually in your wrist or groin
2. The tube is guided up to your heart using X-ray images
3. Special dye is injected so doctors can see your heart arteries on X-ray
4. If a blockage is found, it can often be treated during the same procedure

**Why You Might Need a Heart Cath:**

- To check for blocked arteries (after a heart attack or chest pain)
- To measure pressures inside your heart
- To look at heart valves
- To treat a blockage found during the procedure
- Before certain heart surgeries

**What Happens During the Procedure:**

- You lie on a table in a special room
- The area where the tube goes in is numbed with medicine
- You are awake but given medicine to help you relax
- You might feel pressure but usually not pain
- The procedure takes about 30 minutes to 2 hours

**Treating Blockages (Angioplasty and Stents):**

If a blockage is found:
1. A tiny balloon is inflated to open the artery
2. A small metal tube (stent) is placed to keep it open
3. The stent stays in permanently

**After the Procedure:**

- You rest for several hours
- Pressure is applied to stop bleeding where the tube was inserted
- Most people go home the same day or the next day
- You will take blood thinner medications

**Risks:**

Like any procedure, heart cath has some risks including bleeding, bruising, and rarely, heart attack or stroke. However, it is generally very safe.`,
      keyTerms: [
        { term: 'catheter', definition: 'A thin, flexible tube that can be inserted into blood vessels' },
        { term: 'angioplasty', definition: 'Using a balloon to open a blocked artery' },
        { term: 'stent', definition: 'A small metal mesh tube that keeps an artery open' },
        { term: 'cath lab', definition: 'The special room where heart catheterization procedures are done' },
      ],
      analogies: [
        'A catheter is like a thin straw that travels through your blood vessels to reach your heart.',
        'Angioplasty is like using a tiny balloon to unclog a blocked pipe.',
        'A stent is like a small scaffolding that holds the artery open.',
      ],
      examples: [
        'Someone having a heart attack might go straight to the cath lab to have the blocked artery opened.',
        'A patient with chest pain might have a heart cath to check if they have any blockages.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiac catheterization includes diagnostic coronary angiography for visualizing coronary arteries and interventional procedures like percutaneous coronary intervention (PCI) for treating coronary artery disease.',
      explanation: `## Overview

Cardiac catheterization is an invasive procedure that provides direct visualization of coronary anatomy, hemodynamic assessment, and therapeutic intervention for cardiovascular disease.

## Access Routes

**Femoral Approach:**
- Common femoral artery (retrograde)
- Common femoral vein (for right heart cath)
- Allows larger sheath sizes
- Requires longer bed rest

**Radial Approach:**
- Now preferred for most cases
- Lower bleeding complications
- Faster ambulation
- Smaller sheath size (5-7 French)
- Requires adequate Allen test

**Other Access:**
- Brachial artery
- Ulnar artery
- Subclavian vein (for pacemaker leads)

## Diagnostic Catheterization

### Coronary Angiography

**Purpose:**
- Visualize coronary artery anatomy
- Identify stenoses (blockages)
- Plan revascularization

**Technique:**
- Selective catheter engagement of coronary ostia
- Contrast injection under fluoroscopy
- Multiple views to fully assess lesions

**Standard Catheter Selection:**
- Left coronary: JL (Judkins Left)
- Right coronary: JR (Judkins Right)
- Alternative: Amplatz, multipurpose

**Angiographic Views:**
| Artery | Key Views |
|--------|-----------|
| Left main | AP, RAO, LAO |
| LAD | RAO cranial, LAO cranial, AP cranial |
| LCx | RAO caudal, LAO caudal |
| RCA | LAO, RAO |

### Right Heart Catheterization

**Indications:**
- Heart failure evaluation
- Pulmonary hypertension assessment
- Pre-transplant evaluation
- Cardiogenic shock

**Measurements:**
- Right atrial pressure (RA)
- Right ventricular pressure (RV)
- Pulmonary artery pressure (PA)
- Pulmonary capillary wedge pressure (PCWP)
- Cardiac output (thermodilution or Fick)

**Normal Hemodynamics:**
| Chamber | Systolic | Diastolic | Mean |
|---------|----------|-----------|------|
| RA | - | - | 0-8 |
| RV | 15-30 | 0-8 | - |
| PA | 15-30 | 4-12 | 9-18 |
| PCWP | - | - | 4-12 |

## Percutaneous Coronary Intervention (PCI)

### Indications

**STEMI:**
- Primary PCI preferred over fibrinolysis
- Door-to-balloon time <90 minutes

**NSTE-ACS:**
- Early invasive strategy for high-risk patients
- Urgent if hemodynamic instability

**Stable CAD:**
- Significant stenosis with symptoms despite medical therapy
- Positive stress test with ischemia

### Procedure Steps

1. Access and anticoagulation
2. Guide catheter engagement
3. Wire crossing of lesion
4. Lesion preparation (if needed)
5. Stent deployment
6. Post-dilation (if needed)
7. Final angiography

### Equipment

**Guide Catheters:**
- Larger than diagnostic (6-7 French)
- Provide support for device delivery

**Guidewires:**
- Workhorse wires for standard lesions
- Specialty wires for CTOs, calcification

**Balloons:**
- Semi-compliant for predilation
- Non-compliant for high-pressure dilation

**Stents:**
- Drug-eluting stents (DES): Standard of care
- Bare metal stents (BMS): Rare use now
- Bioabsorbable scaffolds: Limited use

### Antiplatelet Therapy

**Dual Antiplatelet Therapy (DAPT):**
- Aspirin indefinitely
- P2Y12 inhibitor (clopidogrel, ticagrelor, prasugrel)
- Duration: 6-12 months for DES

**During PCI:**
- Unfractionated heparin (ACT 250-350)
- Bivalirudin as alternative
- Glycoprotein IIb/IIIa inhibitors (select cases)

## Complications

### Vascular Access Complications
- Bleeding, hematoma
- Pseudoaneurysm
- AV fistula
- Retroperitoneal hemorrhage (femoral)
- Radial artery occlusion

### Procedural Complications
- Coronary dissection
- Perforation
- No-reflow phenomenon
- Air embolism
- Contrast nephropathy

### Systemic
- Allergic reaction to contrast
- Stroke
- Myocardial infarction
- Death (<1% for elective)`,
      keyTerms: [
        { term: 'PCI', definition: 'Percutaneous coronary intervention; procedure to open blocked coronary arteries' },
        { term: 'drug-eluting stent', definition: 'Stent coated with medication to prevent restenosis' },
        { term: 'PCWP', definition: 'Pulmonary capillary wedge pressure; reflects left heart filling pressure' },
        { term: 'DAPT', definition: 'Dual antiplatelet therapy; aspirin plus P2Y12 inhibitor after stent placement' },
        { term: 'radial access', definition: 'Catheter insertion through the wrist artery; lower bleeding risk' },
        { term: 'door-to-balloon time', definition: 'Time from hospital arrival to first coronary balloon inflation in STEMI' },
      ],
      analogies: [
        'Guide catheters are like straws that help deliver tools to the heart.',
        'Stent deployment is like placing a tiny scaffold inside a collapsed tunnel to hold it open.',
        'The contrast dye is like ink that makes the blood vessels visible on X-ray.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiac catheterization encompasses coronary angiography, hemodynamic assessment, and percutaneous interventions including PCI, with outcomes dependent on technique, lesion complexity, and post-procedural management.',
      explanation: `## Coronary Angiography Interpretation

### Lesion Assessment

**Visual Estimation:**
- Subjective diameter stenosis (%)
- 50-69%: Moderate
- 70-89%: Severe
- >90%: Critical

**Quantitative Coronary Angiography (QCA):**
- Computer-assisted measurement
- Reference vessel diameter
- Minimal lumen diameter
- Percent stenosis

### Lesion Characteristics

**AHA/ACC Classification:**

| Type | Features | Success Rate |
|------|----------|--------------|
| A | Short, concentric, smooth | >85% |
| B1 | One B feature | >85% |
| B2 | Two or more B features | 75-85% |
| C | High-risk features | <75% |

**B Features:**
- Length >10 mm
- Eccentric
- Moderate tortuosity
- Moderate calcification
- Total occlusion <3 months
- Ostial location
- Bifurcation requiring double wire

**C Features:**
- Length >20 mm
- Excessive tortuosity
- Severe calcification
- Total occlusion >3 months
- Degenerated SVG

### TIMI Flow Grades

| Grade | Description |
|-------|-------------|
| 0 | No flow beyond occlusion |
| 1 | Contrast penetrates but does not opacify |
| 2 | Delayed filling and clearing |
| 3 | Normal flow and clearing |

## Hemodynamic Assessment

### Pressure Waveform Analysis

**Right Atrial Pressure:**
- a wave: Atrial contraction
- c wave: Tricuspid closure
- x descent: Atrial relaxation
- v wave: Passive atrial filling
- y descent: Tricuspid opening

**Right Ventricular Pressure:**
- Rapid upstroke during systole
- Early diastolic dip
- End-diastolic pressure (RVEDP)

**Pulmonary Artery Pressure:**
- Dicrotic notch (pulmonic valve closure)
- Mean PA pressure >20 mmHg = pulmonary hypertension (updated definition)

**PCWP:**
- Surrogate for left atrial pressure
- Similar waveform to RA but delayed
- Giant v waves in severe MR

### Cardiac Output

**Thermodilution:**
- Inject cold saline into RA
- Temperature change measured in PA
- Computed from temperature curve

**Fick Method:**
CO = VO2 / (CaO2 - CvO2)

**Considerations:**
- Thermodilution less accurate with TR
- Fick requires accurate VO2 measurement

### Derived Calculations

**Cardiac Index:**
CI = CO / BSA (normal 2.5-4.0 L/min/m2)

**Pulmonary Vascular Resistance:**
PVR = (mean PAP - PCWP) x 80 / CO (normal <250 dyn-sec/cm5)

**Systemic Vascular Resistance:**
SVR = (MAP - RAP) x 80 / CO (normal 800-1200 dyn-sec/cm5)

### Shunt Detection

**Oximetry Run:**
- Sequential O2 saturations from SVC to PA
- Step-up indicates left-to-right shunt
- Location of step-up indicates defect level

**Shunt Ratio (Qp:Qs):**
Qp:Qs = (SaO2 - MVO2) / (PVO2 - PAO2)

## PCI Techniques

### Lesion Preparation

**Predilation:**
- Semi-compliant balloon
- 1:1 sizing to vessel
- Lower pressures (6-8 atm)

**Rotational Atherectomy:**
- Calcified lesions
- High-speed rotating burr
- Ablates calcium and plaque

**Orbital Atherectomy:**
- Alternative for calcification
- Eccentric diamond-coated crown
- Modifies calcium

**Cutting/Scoring Balloons:**
- Wires or blades on balloon surface
- Controlled plaque disruption
- Reduce dissection risk

**Intravascular Lithotripsy:**
- Shockwave technology
- Fractures calcium
- Growing use for heavily calcified lesions

### Stent Optimization

**Sizing:**
- Match reference vessel diameter
- IVUS/OCT guidance preferred
- Avoid oversizing (perforation risk)

**Expansion:**
- High-pressure post-dilation
- Non-compliant balloon
- Ensure full apposition

**Edge Assessment:**
- Check for dissection
- Ensure full lesion coverage
- Avoid geographic miss

### Physiology-Guided PCI

**Fractional Flow Reserve (FFR):**
- Pressure ratio during hyperemia
- FFR ≤0.80 = significant
- Adenosine for hyperemia

**Instantaneous Wave-Free Ratio (iFR):**
- Resting pressure ratio
- No adenosine needed
- iFR ≤0.89 = significant

**Evidence:**
- FAME 2: FFR-guided PCI superior to medical therapy
- DEFINE-FLAIR, iFR-SWEDEHEART: iFR non-inferior to FFR

### Complex PCI

**Chronic Total Occlusion (CTO):**
- Complete vessel occlusion
- Specialized wires and techniques
- Antegrade vs retrograde approaches
- Higher procedural time and complexity

**Bifurcation Lesions:**
- Main vessel and side branch involvement
- Provisional stenting vs two-stent techniques
- Medina classification

**Left Main PCI:**
- Increasingly performed
- IVUS optimization critical
- Comparable to CABG in select patients (EXCEL, NOBLE)`,
      keyTerms: [
        { term: 'TIMI flow', definition: 'Angiographic grading of coronary blood flow; TIMI 3 is normal' },
        { term: 'FFR', definition: 'Fractional flow reserve; pressure ratio assessing physiologic significance of stenosis' },
        { term: 'CTO', definition: 'Chronic total occlusion; completely blocked artery present for >3 months' },
        { term: 'rotational atherectomy', definition: 'High-speed diamond-tipped burr for calcified lesion modification' },
        { term: 'oximetry run', definition: 'Sequential O2 saturation measurements to detect intracardiac shunts' },
        { term: 'intravascular lithotripsy', definition: 'Shockwave technology to fracture coronary calcification' },
      ],
      clinicalNotes: 'FFR/iFR-guided PCI improves outcomes compared to angiography-alone decision making. IVUS/OCT optimization reduces stent failure. Radial access is now preferred for most procedures due to reduced bleeding and faster recovery.',
    },
    4: {
      level: 4,
      summary: 'Advanced cardiac catheterization integrates intravascular imaging, physiologic assessment, complex intervention techniques, and structural heart procedures with evidence-based decision making for optimal outcomes.',
      explanation: `## Intravascular Imaging

### Intravascular Ultrasound (IVUS)

**Technology:**
- Miniature ultrasound transducer on catheter
- 20-40 MHz frequency
- 150-200 micron resolution
- Axial imaging of vessel wall

**Measurements:**
- Lumen area (minimal, reference)
- Plaque burden
- Stent expansion (minimum stent area)
- Stent apposition

**Clinical Applications:**
- Left main PCI (Class IIa recommendation)
- Stent optimization
- Aorto-ostial lesions
- In-stent restenosis evaluation

**IVUS Criteria for Significant Left Main:**
- MLA <6.0 mm2 (Asian population <4.5 mm2)
- Correlates with FFR <0.80

### Optical Coherence Tomography (OCT)

**Technology:**
- Near-infrared light
- 10-20 micron resolution (10x IVUS)
- Requires blood clearance (contrast flush)

**Advantages over IVUS:**
- Higher resolution
- Better stent strut visualization
- Thrombus detection
- Thin-cap fibroatheroma identification

**Clinical Applications:**
- Stent optimization (apposition, expansion)
- Edge dissection detection
- Neoatherosclerosis
- Acute coronary syndrome mechanism

**ILUMIEN III/IV Studies:**
- OCT-guided PCI non-inferior to FFR-guided
- Better stent expansion with OCT guidance

### Combined Imaging

**IVUS/OCT Co-registration:**
- Complementary information
- IVUS: Deep wall penetration
- OCT: Surface detail

**Angiography Fusion:**
- 3D reconstruction
- Wire pathway planning
- CTO visualization

## Structural Heart Interventions

### Transcatheter Aortic Valve Replacement (TAVR)

**Indications:**
- Severe symptomatic aortic stenosis
- All surgical risk categories (per guidelines)

**Pre-Procedure Planning:**
- CT for annular sizing
- Coronary height assessment
- Access route evaluation

**Valve Types:**
- Balloon-expandable: Edwards SAPIEN
- Self-expanding: Medtronic Evolut

**Complications:**
- Paravalvular leak
- Conduction disturbance (pacemaker)
- Vascular complications
- Stroke
- Coronary obstruction (rare)

### Transcatheter Mitral Intervention

**Edge-to-Edge Repair (MitraClip, PASCAL):**
- Secondary MR with HFrEF (COAPT criteria)
- Primary MR with high surgical risk
- Creates double orifice

**TMVR (Transcatheter Mitral Valve Replacement):**
- Valve-in-valve
- Valve-in-ring
- Native valve (trials ongoing)

### Left Atrial Appendage Occlusion (LAAO)

**Indications:**
- AFib with high stroke risk
- Contraindication to long-term anticoagulation

**Devices:**
- WATCHMAN FLX
- Amulet

**Evidence:**
- PROTECT AF, PREVAIL: Non-inferior to warfarin
- PRAGUE-17: Non-inferior to DOACs

### Patent Foramen Ovale (PFO) Closure

**Indication:**
- Cryptogenic stroke with PFO
- Age <60 years typically

**Evidence:**
- CLOSE, RESPECT, REDUCE trials: Benefit for stroke prevention
- NNT ~28 over 5 years

### Other Structural Procedures

**Atrial Septal Defect (ASD) Closure:**
- Secundum ASD with Qp:Qs >1.5:1
- Suitable anatomy (adequate rims)

**Paravalvular Leak Closure:**
- Symptomatic hemolysis or heart failure
- Percutaneous approach with plugs

**Alcohol Septal Ablation:**
- Obstructive HCM
- Septal artery alcohol injection

## Hemodynamic Support

### Intra-Aortic Balloon Pump (IABP)

**Mechanism:**
- Counterpulsation in aorta
- Inflates in diastole (augments coronary perfusion)
- Deflates in systole (reduces afterload)

**Indications:**
- Cardiogenic shock (support during PCI)
- High-risk PCI
- Mechanical complications of MI

**Limitations:**
- IABP-SHOCK II: No mortality benefit in shock

### Impella

**Types:**
| Device | Flow | Access |
|--------|------|--------|
| Impella CP | 3.5-4.0 L/min | Femoral |
| Impella 5.0/5.5 | 5.0-5.5 L/min | Axillary |
| Impella RP | 4.0 L/min | Right heart |

**Mechanism:**
- Axial flow pump across aortic valve
- Active LV unloading

**Applications:**
- High-risk PCI
- Cardiogenic shock
- Support during VT ablation

### ECMO (VA-ECMO)

**Configuration:**
- Femoral vein to femoral artery
- Percutaneous or surgical

**Indications:**
- Refractory cardiogenic shock
- Cardiac arrest
- Bridge to decision/transplant

**Considerations:**
- Team expertise critical
- LV distension may occur (need vent)
- Limb ischemia with femoral access

## Quality and Safety

### Radiation Safety

**Operator Practices:**
- Minimize fluoroscopy time
- Use collimation
- Maximize distance from source
- Lead protection

**Patient Dose Reduction:**
- Lowest acceptable frame rates
- Appropriate imaging modes
- Skin dose monitoring

### Contrast Nephropathy Prevention

**Risk Factors:**
- CKD
- Diabetes
- Dehydration
- Contrast volume

**Prevention:**
- Adequate hydration
- Minimize contrast
- Iso-osmolar contrast
- Hold nephrotoxins

**Contrast Volume Thresholds:**
- Limit: 3-4 x GFR (mL)
- Higher risk with larger volumes`,
      keyTerms: [
        { term: 'OCT', definition: 'Optical coherence tomography; high-resolution intravascular imaging using light' },
        { term: 'TAVR', definition: 'Transcatheter aortic valve replacement; minimally invasive valve implantation' },
        { term: 'MitraClip', definition: 'Device for transcatheter edge-to-edge mitral valve repair' },
        { term: 'Impella', definition: 'Microaxial flow pump providing active LV support during procedures' },
        { term: 'VA-ECMO', definition: 'Venoarterial extracorporeal membrane oxygenation for circulatory support' },
        { term: 'neoatherosclerosis', definition: 'New atherosclerotic plaque developing within stent over time' },
      ],
      clinicalNotes: 'IVUS/OCT optimization of stent deployment reduces restenosis and thrombosis. COAPT criteria must be met for MitraClip benefit in secondary MR. Impella provides superior hemodynamic support compared to IABP but with higher complication rates. CT planning is essential for TAVR sizing.',
    },
    5: {
      level: 5,
      summary: 'Contemporary interventional cardiology integrates advanced imaging, physiologic assessment, mechanical support, and emerging technologies for complex coronary and structural interventions with evolving evidence guiding practice.',
      explanation: `## Current Guidelines and Evidence

### PCI Guidelines (2021 ACC/AHA Revascularization)

**Class I Recommendations:**
- Primary PCI for STEMI
- PCI for NSTE-ACS high-risk features
- PCI or CABG for significant left main or multivessel CAD

**Physiologic Assessment:**
- FFR/iFR recommended for intermediate lesions (Class I)
- Angiography alone discouraged for revascularization decisions

**Imaging:**
- IVUS for left main PCI (Class IIa)
- IVUS/OCT for stent optimization (Class IIa)

### Landmark Trials Summary

**FAME 2:**
- FFR-guided PCI + OMT vs OMT alone
- Reduced urgent revascularization with FFR-guided PCI

**EXCEL/NOBLE:**
- PCI vs CABG for left main disease
- Controversy over 5-year outcomes
- Patient selection crucial

**COMPLETE:**
- Complete revascularization in STEMI
- Reduced CV death and MI with complete vs culprit-only

**ISCHEMIA:**
- Invasive vs conservative for stable CAD with moderate-severe ischemia
- No mortality difference at 3.2 years
- Invasive reduced MI, improved angina

## Advanced Coronary Interventions

### CTO PCI Algorithms

**J-CTO Score:**
- Blunt stump
- Calcification
- Bending >45 degrees
- Occlusion length >20 mm
- Previously failed

**Antegrade Techniques:**
- Antegrade wire escalation
- Antegrade dissection re-entry (ADR)
- STAR technique (last resort)

**Retrograde Techniques:**
- Retrograde via collaterals
- Reverse CART
- Epicardial collaterals

**Hybrid Algorithm:**
- Strategy based on anatomy
- Flexibility to switch approaches
- Success rates >85% in experienced hands

### Calcified Lesion Management

**Assessment:**
- Fluoroscopy
- IVUS (acoustic shadowing, calcium arc)
- OCT (calcium thickness, area, length)

**Modification Techniques:**
| Technique | Mechanism | Considerations |
|-----------|-----------|----------------|
| Rotational atherectomy | Ablation | 1.25-2.0 mm burrs |
| Orbital atherectomy | Sanding | Classic/Micro crown |
| Intravascular lithotripsy | Fracture | Shockwave C2+ |
| Laser atherectomy | Photoablation | Limited availability |

**Strategy:**
- Modify calcium to allow stent expansion
- Combine with high-pressure post-dilation
- Imaging confirms optimization

### Bifurcation PCI

**Medina Classification:**
- (Main, Main distal, Side branch)
- 1 = >50% stenosis, 0 = <50%
- Example: (1,1,1) = true bifurcation

**Provisional Strategy:**
- Stent main vessel
- Provisional side branch intervention if needed
- Kissing balloon inflation

**Two-Stent Techniques:**
- Crush/mini-crush
- Culotte
- T-stenting/TAP
- DK-crush

**Evidence:**
- Provisional strategy generally preferred
- Two-stent for large side branch with significant disease
- DK-crush may be superior for true bifurcations

### In-Stent Restenosis

**Mechanisms:**
- Neointimal hyperplasia
- Neoatherosclerosis
- Stent underexpansion
- Geographic miss

**Treatment:**
- Drug-coated balloon (Class I)
- DES (Class I)
- IVUS/OCT to assess mechanism

## Structural Heart Innovation

### TAVR Evolution

**Low-Risk TAVR (PARTNER 3, Evolut Low Risk):**
- 30-day outcomes favored TAVR
- 5-year data: Comparable outcomes
- Shared decision-making for all risk levels

**Bicuspid Aortic Valve:**
- Feasible but higher rates of complications
- Newer devices improving outcomes
- Careful CT planning essential

**Pure Aortic Regurgitation:**
- Not FDA approved
- JenaValve in trials
- Technical challenges

### Tricuspid Valve Intervention

**Devices:**
- TriClip (TEER): FDA approved
- PASCAL Ace (TEER)
- Annuloplasty systems
- TTVR (transcatheter tricuspid valve replacement)

**TRILUMINATE Pivotal:**
- TriClip improved TR severity
- Better quality of life
- Awaiting mortality data

### Emerging Structural Procedures

**Native TMVR:**
- Multiple devices in trials
- Challenges: LVOT obstruction, anchoring
- Tendyne, EVOQUE, Intrepid

**Hypertrophic Cardiomyopathy:**
- Alcohol septal ablation remains option
- Mavacamten reducing need for intervention

**Congenital Heart Disease:**
- TPVR (transcatheter pulmonary valve)
- ASD/VSD closure
- PDA closure

## Quality Metrics and Outcomes

### Performance Measures

**Process Measures:**
- Radial access rates
- Door-to-balloon times
- DAPT prescribing

**Outcome Measures:**
- In-hospital mortality
- Vascular complications
- AKI
- 30-day readmission

### Registry Data

**NCDR CathPCI:**
- National benchmarking
- Risk-adjusted outcomes
- Quality improvement

**Operator/Institutional Volume:**
- Relationship with outcomes
- Minimum standards debated

## Future Directions

### Technology Innovation

**Robotics:**
- CorPath GRX system
- Remote PCI capability
- Precision and radiation reduction

**Artificial Intelligence:**
- Angiographic lesion assessment
- FFR prediction from angiography
- Outcome prediction

**Bioresorbable Scaffolds:**
- Absorb (withdrawn)
- Newer designs in development
- Potential for vessel restoration

### Expanding Indications

**Renal Denervation:**
- Resistant hypertension
- SPYRAL HTN-OFF MED positive
- Reemerging after initial setbacks

**Shockwave for Peripheral:**
- Calcified iliac, femoral disease
- Expanded indications

**Cerebral Protection:**
- Routine use debated
- Sentinel device available
- May reduce silent infarcts

### Precision Medicine

**Genetic Guidance:**
- P2Y12 inhibitor selection (CYP2C19)
- Response variability

**Pharmacogenomics:**
- Warfarin dosing
- Statin intolerance prediction`,
      keyTerms: [
        { term: 'J-CTO score', definition: 'Scoring system predicting CTO crossing difficulty based on lesion characteristics' },
        { term: 'DK-crush', definition: 'Double-kissing crush technique for bifurcation lesions' },
        { term: 'drug-coated balloon', definition: 'Balloon delivering antiproliferative drug for in-stent restenosis treatment' },
        { term: 'hybrid algorithm', definition: 'Flexible CTO approach selecting antegrade or retrograde based on anatomy' },
        { term: 'Medina classification', definition: 'System describing bifurcation lesion involvement pattern' },
        { term: 'CorPath', definition: 'Robotic system for remote-controlled coronary intervention' },
      ],
      clinicalNotes: `Key clinical pearls for cardiac catheterization:

1. **Radial Access**: Preferred approach; reduces bleeding and improves outcomes
2. **Physiology**: FFR/iFR should guide intermediate lesion treatment decisions
3. **Imaging**: IVUS/OCT optimization improves stent outcomes; critical for left main PCI
4. **STEMI**: Complete revascularization is beneficial (COMPLETE trial)
5. **CTO**: Hybrid approach with experienced operators achieves >85% success
6. **Calcification**: Modify before stenting; lithotripsy is emerging option
7. **Structural**: TAVR for all risk categories; MitraClip requires COAPT criteria
8. **Support**: Match support level to risk; Impella for high-risk, ECMO for shock
9. **Contrast**: Limit to 3-4x GFR to prevent nephropathy
10. **Quality**: Monitor outcomes; radial rates and door-to-balloon times are key metrics`,
    },
  },

  media: [
    {
      id: 'cath-lab-setup',
      type: 'diagram',
      filename: 'cath-lab-equipment.svg',
      title: 'Cardiac Catheterization Laboratory',
      description: 'Equipment and patient positioning',
    },
    {
      id: 'coronary-angiography',
      type: 'diagram',
      filename: 'coronary-angiography-views.svg',
      title: 'Coronary Angiography Views',
      description: 'Standard projections for LAD, LCx, RCA visualization',
    },
    {
      id: 'pci-equipment',
      type: 'diagram',
      filename: 'pci-equipment-guide.svg',
      title: 'PCI Equipment',
      description: 'Catheters, wires, balloons, and stents',
    },
  ],

  citations: [
    {
      id: 'acc-aha-revasc-2021',
      type: 'article',
      title: '2021 ACC/AHA/SCAI Guideline for Coronary Artery Revascularization',
      authors: ['Lawton JS', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000001038',
    },
    {
      id: 'ischemia-trial',
      type: 'article',
      title: 'Initial Invasive or Conservative Strategy for Stable Coronary Disease',
      authors: ['Maron DJ', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'kern-cath-handbook',
      type: 'textbook',
      title: 'The Cardiac Catheterization Handbook',
      authors: ['Kern MJ'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'related', label: 'Coronary Artery Disease' },
    { targetId: 'condition-valvular-heart-disease', targetType: 'condition', relationship: 'related', label: 'Valvular Heart Disease' },
    { targetId: 'topic-cardiac-medications', targetType: 'topic', relationship: 'related', label: 'Antiplatelet Therapy' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['procedures', 'interventional cardiology', 'structural heart'],
    keywords: ['PCI', 'stent', 'TAVR', 'angiography', 'catheter', 'FFR'],
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

export default cardiacCatheterization;
