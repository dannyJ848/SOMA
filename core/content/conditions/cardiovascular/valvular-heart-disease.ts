/**
 * Valvular Heart Disease - Comprehensive Educational Content
 *
 * Covers pathophysiology, evaluation, and management of aortic stenosis,
 * aortic regurgitation, mitral stenosis, mitral regurgitation, and tricuspid disease.
 */

import { EducationalContent } from '../../types';

export const valvularHeartDisease: EducationalContent = {
  id: 'condition-valvular-heart-disease',
  type: 'condition',
  name: 'Valvular Heart Disease',
  alternateNames: ['VHD', 'Heart Valve Disease', 'Valve Stenosis', 'Valve Regurgitation', 'Valve Insufficiency'],
  hpoId: 'HP:0001654',

  levels: {
    1: {
      level: 1,
      summary: 'Valvular heart disease is when one or more of the heart\'s valves don\'t work properly, either not opening fully (stenosis) or not closing completely (regurgitation), making the heart work harder.',
      explanation: `Your heart has four valves that act like one-way doors, making sure blood flows in the right direction. When these valves don't work properly, your heart has to work harder to pump blood.

**What are the heart valves?**
- **Aortic valve**: Between the left ventricle and the aorta (main artery)
- **Mitral valve**: Between the left atrium and left ventricle
- **Tricuspid valve**: Between the right atrium and right ventricle
- **Pulmonary valve**: Between the right ventricle and pulmonary artery

**Types of valve problems:**

1. **Stenosis** (valve doesn't open fully):
   - Like a door that won't open all the way
   - Heart has to push harder to get blood through
   - Most common: Aortic stenosis

2. **Regurgitation** (valve doesn't close completely):
   - Like a door that won't close properly
   - Blood leaks backward
   - Also called "insufficiency" or "incompetence"

**What causes valve disease?**
- Aging (calcium buildup on valves)
- Born with abnormal valve (bicuspid aortic valve)
- Rheumatic fever (from untreated strep throat)
- Heart attacks
- Infections (endocarditis)
- High blood pressure

**What are the symptoms?**
Many people have no symptoms at first. As it worsens:
- Shortness of breath
- Feeling tired easily
- Chest pain or tightness
- Swollen ankles or feet
- Feeling dizzy or fainting
- Heart palpitations (feeling your heart beat)

**How is it treated?**
- **Mild cases**: Monitor with regular checkups
- **Medications**: Help control symptoms and protect the heart
- **Surgery**: Repair or replace the valve when needed
  - Open heart surgery
  - Minimally invasive procedures (TAVR, MitraClip)`,
      keyTerms: [
        { term: 'valve', definition: 'A flap in the heart that opens and closes to control blood flow in one direction' },
        { term: 'stenosis', definition: 'When a valve becomes stiff and doesn\'t open fully, blocking blood flow' },
        { term: 'regurgitation', definition: 'When a valve doesn\'t close completely, allowing blood to leak backward' },
        { term: 'murmur', definition: 'An extra heart sound caused by abnormal blood flow through a valve' },
      ],
      analogies: [
        'Heart valves work like one-way swinging doors - they open to let blood through and close to stop it going back.',
        'A stenotic valve is like trying to push people through a narrow doorway - it takes more effort.',
        'A regurgitant valve is like a door with a broken latch - some blood leaks back when it should stay closed.',
      ],
      examples: [
        'An 80-year-old man becomes short of breath when climbing stairs. His doctor hears a heart murmur and tests show his aortic valve has become stiff and narrow.',
        'A young woman who had rheumatic fever as a child develops palpitations. Her mitral valve is scarred and doesn\'t close properly.',
      ],
    },
    2: {
      level: 2,
      summary: 'Valvular heart disease encompasses stenotic and regurgitant lesions of the four heart valves, with aortic stenosis and mitral regurgitation being most common in developed countries, requiring echocardiographic assessment of severity and appropriately timed intervention.',
      explanation: `## Overview of Valve Disease

### Valve Anatomy and Function

Each valve has leaflets (or cusps) that open and close with each heartbeat:
- Aortic valve: 3 cusps
- Pulmonary valve: 3 cusps
- Mitral valve: 2 leaflets (anterior and posterior)
- Tricuspid valve: 3 leaflets

### Stenosis vs Regurgitation

| Feature | Stenosis | Regurgitation |
|---------|----------|---------------|
| Problem | Valve doesn't open fully | Valve doesn't close fully |
| Effect | Pressure overload | Volume overload |
| Adaptation | Concentric hypertrophy | Eccentric hypertrophy/dilation |
| Symptoms | Gradual (compensated) | Variable |

## Aortic Valve Disease

### Aortic Stenosis (AS)

**Causes:**
- Calcific/degenerative (most common in elderly)
- Bicuspid aortic valve (most common in <65 years)
- Rheumatic (less common in developed countries)

**Classic Triad of Symptoms:**
1. Angina (chest pain with exertion)
2. Syncope (fainting with exertion)
3. Heart failure (dyspnea)

**Physical Exam:**
- Harsh crescendo-decrescendo systolic murmur
- Best heard at right upper sternal border
- Radiates to carotids
- Parvus et tardus pulse (weak and delayed)

**Severity (Echocardiography):**

| Parameter | Mild | Moderate | Severe |
|-----------|------|----------|--------|
| Aortic valve area | >1.5 cm² | 1.0-1.5 cm² | <1.0 cm² |
| Mean gradient | <25 mmHg | 25-40 mmHg | >40 mmHg |
| Peak velocity | <3 m/s | 3-4 m/s | >4 m/s |

**Treatment:**
- Asymptomatic severe: Close monitoring
- Symptomatic severe: Valve replacement
  - SAVR (surgical aortic valve replacement)
  - TAVR (transcatheter aortic valve replacement)

### Aortic Regurgitation (AR)

**Causes:**
- Bicuspid aortic valve
- Aortic root dilation
- Endocarditis
- Rheumatic disease
- Aortic dissection (acute AR)

**Symptoms:**
- Dyspnea on exertion
- Palpitations (awareness of forceful heartbeat)
- Acute AR: Sudden heart failure (emergency)

**Physical Exam:**
- Diastolic decrescendo murmur (left sternal border)
- Wide pulse pressure
- Bounding pulses (water-hammer)
- Austin Flint murmur (low-pitched diastolic rumble)

## Mitral Valve Disease

### Mitral Stenosis (MS)

**Causes:**
- Rheumatic heart disease (almost always)
- Calcification (rare)

**Symptoms:**
- Dyspnea (from pulmonary congestion)
- Atrial fibrillation (from LA enlargement)
- Hemoptysis
- Hoarse voice (recurrent laryngeal nerve compression)

**Physical Exam:**
- Opening snap followed by diastolic rumble
- Low-pitched, best at apex
- Loud S1

**Severity:**

| MVA | Severity |
|-----|----------|
| >1.5 cm² | Mild |
| 1.0-1.5 cm² | Moderate |
| <1.0 cm² | Severe |

### Mitral Regurgitation (MR)

**Types:**
- **Primary (degenerative):** Leaflet abnormality (prolapse, flail)
- **Secondary (functional):** LV dilation with normal leaflets

**Causes:**
- Mitral valve prolapse
- Ischemic (papillary muscle dysfunction)
- Endocarditis
- Rheumatic
- Cardiomyopathy (secondary MR)

**Symptoms:**
- Dyspnea
- Fatigue
- Palpitations (atrial fibrillation)

**Physical Exam:**
- Holosystolic murmur at apex
- Radiates to axilla
- S3 may be present

## Tricuspid and Pulmonary Valve Disease

### Tricuspid Regurgitation (TR)

**Common causes:**
- Functional (RV/tricuspid annular dilation)
- Pulmonary hypertension
- Endocarditis (IV drug use)

**Physical findings:**
- Holosystolic murmur at left lower sternal border
- Increases with inspiration (Carvallo's sign)
- JVD with CV waves

### Pulmonary Stenosis

- Usually congenital
- Systolic ejection murmur at left upper sternal border

## Diagnostic Approach

**Echocardiography is key:**
- Valve anatomy and motion
- Severity quantification
- Ventricular function
- Chamber sizes

**Additional testing:**
- Cardiac catheterization (when echo unclear)
- Exercise testing (to unmask symptoms)
- CT/MRI (for anatomy)`,
      keyTerms: [
        { term: 'bicuspid aortic valve', definition: 'Congenital abnormality where the aortic valve has 2 cusps instead of 3; prone to early stenosis' },
        { term: 'TAVR', definition: 'Transcatheter aortic valve replacement; minimally invasive valve replacement through a catheter' },
        { term: 'mitral valve prolapse', definition: 'When mitral valve leaflets bulge back into the atrium during contraction; common cause of MR' },
        { term: 'rheumatic heart disease', definition: 'Valve damage from inflammatory reaction to group A strep infection; causes MS and MR' },
        { term: 'annulus', definition: 'The ring of tissue around a valve where the leaflets attach' },
      ],
      analogies: [
        'A stenotic aortic valve is like a clogged shower head - water still comes through but with more pressure behind it.',
        'TAVR is like installing a new valve from the inside - no need to open the chest.',
      ],
    },
    3: {
      level: 3,
      summary: 'Valvular heart disease evaluation integrates clinical assessment, echocardiographic quantification of severity and hemodynamic consequences, and appropriate timing of intervention based on symptom status, ventricular function, and lesion-specific criteria per ACC/AHA guidelines.',
      explanation: `## Pathophysiology by Lesion

### Aortic Stenosis

**Pressure Overload:**
- LV generates higher pressures to overcome obstruction
- Concentric LV hypertrophy (LVH)
- Preserved systolic function until late
- Diastolic dysfunction from stiff ventricle

**Myocardial Oxygen Supply-Demand Mismatch:**
- Increased LV mass = increased demand
- Elevated LV pressure compresses coronaries
- Subendocardial ischemia → angina

**Decompensation:**
- Afterload mismatch (wall stress exceeds compensation)
- LV dilation and dysfunction
- Poor prognosis once heart failure develops

### Aortic Regurgitation

**Volume Overload:**
- Regurgitant volume returns to LV in diastole
- LV dilates (eccentric hypertrophy)
- Total stroke volume increases to maintain forward output

**Acute vs Chronic:**
- Chronic: Gradual adaptation, may be asymptomatic for years
- Acute (endocarditis, dissection): No compensation → pulmonary edema, shock

### Mitral Stenosis

**LA Pressure Elevation:**
- Obstruction to LV filling
- LA pressure rises
- Transmits to pulmonary veins → congestion

**Pulmonary Hypertension:**
- Passive (transmitted LA pressure)
- Reactive (pulmonary arteriolar constriction)
- Fixed (vascular remodeling)

**Atrial Fibrillation:**
- LA enlargement
- Loss of atrial kick worsens symptoms
- High stroke risk (requires anticoagulation)

### Mitral Regurgitation

**Primary (Degenerative):**
- Leaflet pathology (prolapse, flail, perforation)
- Volume overload to LA and LV
- Surgical repair often possible

**Secondary (Functional):**
- LV dilation displaces papillary muscles
- Leaflet tethering prevents coaptation
- Treating MR without addressing LV may not help

## Echocardiographic Assessment

### Aortic Stenosis Quantification

**Continuity Equation:**
- AVA = (LVOT area × LVOT VTI) / AV VTI
- Accounts for flow dependence

**Grading:**

| | Mild | Moderate | Severe |
|---|---|---|---|
| Vmax | <3 m/s | 3-4 m/s | >4 m/s |
| Mean gradient | <25 | 25-40 | >40 |
| AVA | >1.5 cm² | 1.0-1.5 | <1.0 |
| AVA indexed | >0.85 | 0.6-0.85 | <0.6 |

**Low-Flow, Low-Gradient AS:**
- AVA <1.0 cm² but mean gradient <40 mmHg
- LV dysfunction: Dobutamine stress echo to differentiate
- Paradoxical (normal EF, small LV): Stroke volume index <35

### Mitral Regurgitation Quantification

**Qualitative:**
- Jet area/LA area
- Vena contracta width
- Pulmonary vein flow reversal

**Quantitative:**
- EROA (effective regurgitant orifice area)
- Regurgitant volume
- Regurgitant fraction

| | Mild | Moderate | Severe |
|---|---|---|---|
| EROA | <0.20 | 0.20-0.39 | ≥0.40 |
| Regurgitant volume | <30 mL | 30-59 mL | ≥60 mL |
| Regurgitant fraction | <30% | 30-49% | ≥50% |
| Vena contracta | <0.3 cm | 0.3-0.69 | ≥0.7 cm |

## Intervention Criteria

### Aortic Stenosis (2020 ACC/AHA)

**Class I (Should):**
- Symptomatic severe AS
- Severe AS undergoing other cardiac surgery
- Asymptomatic severe AS with LVEF <50%

**Class IIa (Reasonable):**
- Asymptomatic severe AS with abnormal exercise test
- Asymptomatic very severe AS (Vmax ≥5 m/s, mean gradient ≥60)
- Asymptomatic severe AS with rapid progression

### SAVR vs TAVR

| SAVR Preferred | TAVR Preferred |
|----------------|----------------|
| Low surgical risk | High/prohibitive surgical risk |
| Age <65 | Age >80 |
| Bicuspid valve | Severe frailty |
| LVOT/aortic pathology | Hostile chest (prior radiation) |
| Concomitant CABG needed | Shared decision, intermediate risk |

### Mitral Regurgitation

**Primary MR - Class I:**
- Symptomatic severe chronic MR
- Asymptomatic severe MR with LV dysfunction (EF 30-60% or LVESD ≥40 mm)

**Secondary MR:**
- COAPT trial: MitraClip for HFrEF with severe secondary MR
- Criteria: EROA ≥30, MR not massive, LVEF 20-50%
- Medical therapy optimization first

## Procedural Options

### Surgical Valve Repair
- Preferred for degenerative MR when feasible
- Superior durability to replacement
- Avoids anticoagulation

### Transcatheter Options

**TAVR:**
- Balloon-expandable (Edwards SAPIEN)
- Self-expanding (Medtronic CoreValve, Evolut)
- Now approved for all surgical risk groups

**MitraClip (TEER):**
- Edge-to-edge repair
- For primary or secondary MR
- Degenerative: DMR trial
- Functional: COAPT (positive), MITRA-FR (negative)

### Antithrombotic Therapy Post-Valve

**Mechanical Valve:**
- Lifelong warfarin (INR target varies by position)
- Aortic: 2.0-3.0
- Mitral: 2.5-3.5
- DOACs contraindicated

**Bioprosthetic Valve:**
- SAVR: Aspirin or 3-6 months warfarin
- TAVR: Aspirin ± clopidogrel short-term
- DOACs may be used if other indication (AFib)`,
      keyTerms: [
        { term: 'effective regurgitant orifice area', definition: 'Quantitative measure of regurgitation severity; the cross-sectional area of the regurgitant jet at its narrowest point' },
        { term: 'vena contracta', definition: 'The narrowest portion of a regurgitant jet, immediately downstream of the orifice; used to assess severity' },
        { term: 'low-flow low-gradient AS', definition: 'Aortic stenosis with small valve area but low gradient due to reduced flow; requires careful differentiation' },
        { term: 'transcatheter edge-to-edge repair', definition: 'Catheter-based mitral valve repair (MitraClip) that clips anterior and posterior leaflets together' },
        { term: 'continuity equation', definition: 'Echocardiographic principle using flow conservation to calculate aortic valve area' },
      ],
      clinicalNotes: 'For low-flow, low-gradient AS with reduced EF, dobutamine stress echo differentiates true-severe AS (fixed valve area, gradient increases) from pseudo-severe AS (valve area increases, flow reserve present). The COAPT trial showed MitraClip benefit in carefully selected HFrEF patients with severe secondary MR; patient selection is critical (avoid massive MR, end-stage LV dysfunction).',
    },
    4: {
      level: 4,
      summary: 'Valvular heart disease management incorporates multimodality imaging, hemodynamic staging, heart team decision-making, and evolving transcatheter technologies, with intervention timing based on symptom status, ventricular function, and lesion-specific prognostic markers as outlined in ACC/AHA/ESC guidelines and informed by pivotal trials (PARTNER, COAPT, EVEREST).',
      explanation: `## Advanced Pathophysiology

### Myocardial Response to Valve Disease

**Pressure Overload (AS, MS):**
- Sarcomere replication in parallel
- Concentric hypertrophy
- Diastolic dysfunction precedes systolic
- Myocardial fibrosis (diffuse and replacement)

**Volume Overload (AR, MR):**
- Sarcomere replication in series
- Eccentric hypertrophy and dilation
- Preserved EF may mask contractile dysfunction
- End-systolic dimension better marker

**Transition to Failure:**
- Afterload mismatch
- Myocyte death and fibrosis
- Neurohormonal activation
- Irreversible remodeling

### Biomarkers

**BNP/NT-proBNP:**
- Elevated with hemodynamic stress
- Prognostic in AS
- May guide intervention timing

**High-Sensitivity Troponin:**
- Indicates myocardial injury
- Predictor of outcomes in severe AS

## Advanced Imaging

### Cardiac MRI in VHD

**Applications:**
- Regurgitation quantification (most accurate)
- Ventricular volumes and function
- Myocardial fibrosis (LGE)
- Tissue characterization (T1 mapping)

**Fibrosis Assessment:**
- LGE indicates replacement fibrosis
- Native T1/ECV for diffuse fibrosis
- Predicts reverse remodeling post-intervention

### CT in Valve Disease

**Pre-TAVR Planning:**
- Aortic annulus sizing
- Coronary height
- Access vessel assessment
- Calcium distribution

**Aortic Valve Calcium Scoring:**
- Sex-specific thresholds for severe AS
- Men: AVC >2000 AU (likely severe)
- Women: AVC >1200 AU (likely severe)
- Helps in discordant echocardiographic findings

### Strain Imaging

**Global Longitudinal Strain (GLS):**
- More sensitive than EF
- Detects subclinical LV dysfunction in AS
- GLS <15-18% (magnitude) may indicate myocardial dysfunction
- May guide earlier intervention

## Specific Valve Lesions: Advanced

### Low-Flow, Low-Gradient AS

**Classical (Low EF):**
- EF <50%, AVA <1.0, mean gradient <40
- Dobutamine stress echo:
  - True-severe: Gradient rises, AVA stays low
  - Pseudo-severe: AVA increases to >1.0
- Stroke volume index <35 mL/m²

**Paradoxical (Preserved EF):**
- EF ≥50%, small hypertrophied LV
- Stroke volume index <35 mL/m²
- AVAi <0.6 cm²/m²
- Calcium scoring helps confirm severity
- Consider afterload mismatch

### Bicuspid Aortic Valve

**Associated Pathology:**
- Aortic root dilation
- Ascending aortic aneurysm
- Coarctation
- Turner syndrome

**Screening:**
- First-degree relatives (echo)
- Monitor aorta if dilated
- Lower threshold for surgery (4.5 cm if undergoing AVR)

### Degenerative Mitral Regurgitation

**Barlow Disease:**
- Bileaflet prolapse
- Myxomatous degeneration
- Large annulus
- Complex repair

**Fibroelastic Deficiency:**
- Localized prolapse/flail
- Chordal rupture
- Often simpler repair

**Repair Techniques:**
- Leaflet resection
- Artificial chordae (neochords)
- Annuloplasty ring
- Edge-to-edge (Alfieri)

### Secondary Mitral Regurgitation

**Mechanism:**
- LV dilation → annular dilation
- Papillary muscle displacement → leaflet tethering
- Reduced closing force

**COAPT vs MITRA-FR:**

| | COAPT | MITRA-FR |
|---|---|---|
| Population | Optimized HFrEF | HFrEF without optimization mandate |
| MR severity | Moderate-severe to severe | Included less severe |
| LV size | Not severely dilated | More dilated LVs |
| Outcome | Positive | Neutral |

**Patient Selection:**
- Optimized GDMT
- EROA ≥30 mm², not massive
- LVEDVI <96 mL/m² (proportionate MR to LV size)
- Avoid end-stage LV dysfunction

## Tricuspid Regurgitation

### Growing Recognition

**Causes:**
- Functional (most common): RV dilation, annular dilation, PH
- Primary: Endocarditis, carcinoid, rheumatic, prolapse

**Consequences:**
- Right heart failure
- Hepatic congestion
- Ascites, edema
- Poor prognosis when severe

### Intervention

**Surgical:**
- Annuloplasty with left-sided surgery
- Isolated TR surgery gaining acceptance
- Guidelines: Consider if symptomatic severe TR

**Transcatheter:**
- TriClip (edge-to-edge repair)
- Annuloplasty devices (Cardioband, Millipede)
- Orthotopic replacement (EVOQUE, TRISCEND)
- Active research area

## Prosthetic Valve Considerations

### Mechanical vs Bioprosthetic

| | Mechanical | Bioprosthetic |
|---|---|---|
| Durability | Lifetime | 10-20 years |
| Anticoagulation | Lifelong warfarin | Short-term or none |
| Age consideration | Younger patients | Older patients |
| Thrombosis | Higher risk | Lower risk |
| Structural degeneration | Rare | Expected |

### Valve-in-Valve TAVR

**For Degenerated Bioprosthesis:**
- TAVR within failed surgical bioprosthesis
- Avoids redo open surgery
- Coronary obstruction risk with small valves
- Must assess internal diameter, not label size

### Prosthetic Valve Dysfunction

**Obstruction:**
- Thrombosis (early: anticoagulation; late: pannus)
- Bioprosthetic degeneration
- Patient-prosthesis mismatch

**Regurgitation:**
- Paravalvular leak
- Structural valve degeneration
- Endocarditis

**Evaluation:**
- TTE (first-line)
- TEE (better visualization)
- CT (thrombosis, pannus, leaflet motion)
- Fluoroscopy (leaflet mobility)`,
      keyTerms: [
        { term: 'global longitudinal strain', definition: 'Speckle-tracking measure of myocardial deformation; detects subclinical LV dysfunction before EF decline' },
        { term: 'valve-in-valve TAVR', definition: 'Transcatheter valve implantation within a degenerated surgical bioprosthesis to avoid redo surgery' },
        { term: 'aortic valve calcium score', definition: 'CT-quantified calcium burden used to confirm AS severity when echocardiographic parameters are discordant' },
        { term: 'proportionate vs disproportionate MR', definition: 'Concept from COAPT/MITRA-FR: disproportionate (severe MR relative to LV size) benefits more from TEER' },
        { term: 'Barlow disease', definition: 'Diffuse myxomatous mitral valve degeneration with bileaflet prolapse, often requiring complex repair' },
      ],
      clinicalNotes: 'GLS <15-18% in asymptomatic severe AS may indicate subclinical LV dysfunction and support earlier intervention. For secondary MR in HFrEF, patient selection using COAPT criteria (proportionate MR, optimized GDMT, not end-stage) is critical for MitraClip benefit. Tricuspid valve intervention is an active area with multiple transcatheter devices in trials. Valve-in-valve TAVR is an important option for degenerated surgical bioprostheses, especially in high-risk reoperative patients.',
    },
    5: {
      level: 5,
      summary: 'Contemporary valvular heart disease management integrates advanced multimodality imaging (CMR, CT calcium scoring, strain), precision phenotyping of low-flow states, heart team-based transcatheter intervention selection, and emerging technologies for tricuspid and mitral repair, with focus on optimal timing to prevent irreversible myocardial damage guided by biomarkers, fibrosis imaging, and refined hemodynamic staging.',
      explanation: `## Precision Imaging

### Cardiac MRI Applications

**Regurgitation Quantification:**
- Phase-contrast velocity mapping
- Direct measurement of regurgitant volume
- More reproducible than echo
- Reclassifies severity in 20-40%

**Myocardial Fibrosis:**
- LGE for focal/replacement fibrosis
- Native T1 mapping for diffuse fibrosis
- ECV (extracellular volume) quantification
- Predicts outcomes and reverse remodeling

**Prognostic Implications:**
- Myocardial fibrosis in AS predicts mortality post-AVR
- GLS impairment correlates with fibrosis
- May guide earlier intervention timing

### CT Multimodality Integration

**Calcium Scoring in AS:**
- Sex-specific thresholds
- Men: Likely severe if AVC ≥2000 AU
- Women: Likely severe if AVC ≥1200 AU
- Helps in discordant low-gradient AS
- Incremental to echo in decision-making

**4D CT for Valve Planning:**
- Annulus sizing for TAVR/TMVR
- Commissural alignment
- Neo-LVOT prediction (TMVR)
- Coronary obstruction risk

### Strain-Based Decision Making

**Aortic Stenosis:**
- GLS impairment precedes EF decline
- Consider intervention if GLS <14.7% (some data)
- Ongoing trials (EVOLVED-AS)

**Mitral Regurgitation:**
- GLS helps unmask subclinical dysfunction
- Preserved EF may not mean preserved myocardium

## Hemodynamic Phenotyping

### Low-Flow AS States

**Algorithm for Low-Gradient AS:**
1. Confirm low stroke volume index (<35 mL/m²)
2. Low EF → Dobutamine stress echo
   - Flow reserve + true severe → Consider AVR
   - No flow reserve → High risk, individualize
3. Preserved EF → Calcium scoring, reassess sizing

**Projected AVA:**
- Calculated at normal flow rates
- Accounts for flow-dependent underestimation

### Exercise Hemodynamics

**Exercise Echo/Catheterization:**
- Unmask symptoms in "asymptomatic" severe VHD
- Pulmonary hypertension with exercise
- Gradient rise in MS with exercise
- May support earlier intervention

**Cardiopulmonary Exercise Testing:**
- Objective functional assessment
- Peak VO2 predicts outcomes
- Abnormal CPET may indicate subclinical limitation

## Transcatheter Valve Therapies

### TAVR Evolution

**Expanded Indications:**
- Now approved for all surgical risk categories
- Low-risk trials: PARTNER 3, Evolut Low Risk
- Non-inferior or superior to SAVR at 2 years
- Long-term durability data emerging

**Technical Advances:**
- Smaller delivery systems
- Improved sealing (reduced PVL)
- Leaflet design for durability
- Cerebral embolic protection

**Unresolved Issues:**
- Conduction abnormalities (pacemaker 10-20%)
- Long-term durability (>10 years)
- Valve thrombosis
- Bicuspid aortic valve (now increasingly treated)

### Transcatheter Mitral Intervention

**TEER (MitraClip, PASCAL):**
- DMR: EVEREST II, COAPT
- SMR: COAPT (positive), MITRA-FR (negative)
- Key: Patient selection

**Transcatheter Mitral Replacement (TMVR):**
- Tendyne, Intrepid, CardiAQ
- For unsuitable repair candidates
- Neo-LVOT obstruction risk
- Larger devices, access challenges

**Mitral Annuloplasty:**
- Cardioband (direct annuloplasty)
- Carillon (indirect via coronary sinus)
- Adjunct or standalone

### Tricuspid Transcatheter Therapies

**Current Devices:**
- TriClip (edge-to-edge): TRILUMINATE trial
- Annuloplasty: Cardioband-Tricuspid
- Replacement: EVOQUE, TRISCEND

**Challenges:**
- Large annulus
- Variable anatomy
- RV lead considerations
- Optimal timing unclear

## Guideline Updates

### 2020/2021 ACC/AHA VHD Guidelines

**Key Changes:**
- Expanded TAVR indications
- Earlier intervention triggers
- Stage D2 AS (low-flow, low-gradient with low EF)
- Emphasis on heart team
- Tricuspid disease addressed

### ESC 2021 VHD Guidelines

**Differences from US:**
- More emphasis on symptoms
- Slightly different AS thresholds
- TAVI vs SAVR cutoff age ~75
- Specific guidance on exercise testing

## Quality and Outcomes

### Heart Team Model

**Composition:**
- Interventional cardiologist
- Cardiac surgeon
- Imaging specialist
- Heart failure specialist
- Geriatrician (for elderly)
- Anesthesiologist

**Decision Framework:**
- Anatomic suitability
- Surgical risk assessment
- Frailty and comorbidities
- Patient goals and values
- Shared decision-making

### Outcome Metrics

**Procedural:**
- Mortality
- Stroke
- Vascular complications
- Conduction abnormalities
- Residual regurgitation/gradient

**Long-Term:**
- Survival
- Functional improvement
- Quality of life
- Valve durability
- Reintervention

## Emerging Directions

### Genetic and Molecular

**Calcific AS:**
- Lp(a) associated with calcification
- Potential for anti-calcification therapies
- PCSK9 inhibitors under investigation

**Degenerative MR:**
- Genetic predisposition
- Connective tissue pathways

### Novel Therapeutics

**Medical Therapy for AS:**
- No proven disease-modifying therapy
- Statin trials negative
- Lp(a)-lowering (theoretical)

**Medical Therapy for MR:**
- Optimal GDMT for secondary MR
- SGLT2 inhibitors, sacubitril/valsartan

### Future Technologies

**Next-Gen TAVR:**
- Resheathable valves
- Retrievable systems
- Anti-calcification treatments

**Advanced TEER:**
- Independent leaflet grasping
- Annular devices
- Chordal repair

**Computational Modeling:**
- Patient-specific valve simulation
- Predict outcomes
- Optimize device selection`,
      keyTerms: [
        { term: 'extracellular volume fraction', definition: 'CMR-derived measure of myocardial fibrosis; elevated ECV indicates diffuse fibrosis and worse outcomes' },
        { term: 'neo-LVOT', definition: 'New left ventricular outflow tract created by transcatheter mitral valve; if too small, causes obstruction' },
        { term: 'Stage D2 AS', definition: 'Low-flow low-gradient severe AS with low EF; high-risk subset requiring careful evaluation' },
        { term: 'EVOLVED-AS', definition: 'Trial investigating early intervention in asymptomatic AS based on CMR fibrosis detection' },
        { term: 'TriClip', definition: 'Transcatheter edge-to-edge repair device for tricuspid regurgitation (Abbott)' },
        { term: 'cerebral embolic protection', definition: 'Filter devices used during TAVR to capture debris and reduce stroke risk' },
      ],
      clinicalNotes: `Key clinical pearls for advanced VHD management:

1. **CMR fibrosis changes decision-making**: In asymptomatic severe AS, evidence of myocardial fibrosis (LGE or elevated ECV) may support earlier intervention. The EVOLVED-AS trial is testing this prospectively.

2. **Calcium scoring resolves discordance**: For low-flow, low-gradient AS, CT calcium scoring provides an independent measure of disease severity when echo parameters are discordant.

3. **COAPT criteria are essential**: For secondary MR with MitraClip, applying COAPT selection criteria (proportionate MR, optimized GDMT, not end-stage LV) predicts benefit.

4. **TAVR durability data are maturing**: 5-year data from PARTNER and Evolut trials show good durability, but longer-term follow-up needed. Consider bioprosthetic vs mechanical still for younger patients.

5. **Tricuspid disease is the next frontier**: Transcatheter tricuspid interventions are rapidly evolving. Severe TR has poor prognosis; earlier intervention may be warranted.

6. **Heart team is mandatory**: Complex valve decisions require multidisciplinary input, especially for intermediate risk and anatomically complex cases.

7. **GLS adds information**: Global longitudinal strain can detect subclinical LV dysfunction in severe AS and MR before EF declines.

8. **Lp(a) and calcific AS**: Elevated Lp(a) is associated with AS progression. Future therapies targeting Lp(a) may modify disease course.`,
    },
  },

  media: [
    {
      id: 'valve-anatomy',
      type: 'diagram',
      filename: 'valve-anatomy.svg',
      title: 'Heart Valve Anatomy',
      description: 'Location and structure of the four heart valves',
    },
    {
      id: 'as-severity',
      type: 'diagram',
      filename: 'as-severity.svg',
      title: 'Aortic Stenosis Severity Grading',
      description: 'Echocardiographic criteria for AS severity',
    },
    {
      id: 'mr-mechanism',
      type: 'diagram',
      filename: 'mr-mechanism.svg',
      title: 'Mitral Regurgitation Mechanisms',
      description: 'Primary vs secondary MR pathophysiology',
    },
  ],

  citations: [
    {
      id: 'acc-aha-vhd-2020',
      type: 'article',
      title: '2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease',
      authors: ['Otto CM', 'Nishimura RA', 'Bonow RO', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000000923',
    },
    {
      id: 'partner-3',
      type: 'article',
      title: 'Transcatheter Aortic-Valve Replacement in Low-Risk Patients',
      authors: ['Mack MJ', 'Leon MB', 'Thourani VH', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'coapt-trial',
      type: 'article',
      title: 'Transcatheter Mitral-Valve Repair in Patients with Heart Failure',
      authors: ['Stone GW', 'Lindenfeld J', 'Abraham WT', 'et al.'],
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'condition-atrial-fibrillation', targetType: 'condition', relationship: 'related', label: 'Atrial Fibrillation' },
    { targetId: 'structure-heart', targetType: 'structure', relationship: 'related', label: 'Heart' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'cardiac surgery', 'echocardiography', 'interventional cardiology'],
    keywords: ['valvular heart disease', 'aortic stenosis', 'mitral regurgitation', 'TAVR', 'heart valve'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default valvularHeartDisease;
