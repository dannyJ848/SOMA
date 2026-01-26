/**
 * Heart Conditions - Comprehensive Educational Content
 *
 * Covers coronary artery disease, valvular heart disease, and cardiomyopathy
 * including pathophysiology, clinical presentation, and management.
 */

import { EducationalContent } from '../types';

export const heartConditionsContent: EducationalContent = {
  id: 'category-heart-conditions',
  type: 'topic',
  name: 'Heart Conditions',
  alternateNames: ['Cardiac Diseases', 'Heart Disease', 'Cardiovascular Disease'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'Heart conditions are problems that affect how well your heart works, including blocked arteries, leaky valves, and weakened heart muscle, each requiring different treatments.',
      explanation: `## Common Heart Conditions

Your heart is a hard-working pump, and like any machine, it can develop problems. The three main types of heart conditions are:

### 1. Coronary Artery Disease (Blocked Arteries)

**What It Is:**
The arteries that supply blood to your heart muscle can become clogged with fatty deposits called plaque. This is like rust building up inside a pipe.

**What Happens:**
- Less blood reaches the heart muscle
- You may feel chest pain (angina) when active
- If an artery gets completely blocked, it causes a heart attack

**Risk Factors:**
- Smoking
- High blood pressure
- High cholesterol
- Diabetes
- Family history
- Being overweight
- Not exercising

**Warning Signs:**
- Chest pressure or squeezing
- Pain in jaw, neck, or arm
- Shortness of breath
- Sweating
- Nausea

### 2. Valvular Heart Disease (Valve Problems)

**What It Is:**
Your heart has four doors (valves) that keep blood flowing in the right direction. These valves can become leaky or narrowed.

**Types of Valve Problems:**

**Leaky Valve (Regurgitation):**
- Blood flows backward through the valve
- The heart has to work harder
- May cause shortness of breath or swelling

**Stiff Valve (Stenosis):**
- Valve doesn't open fully
- Blood has trouble getting through
- Heart must pump harder to push blood through

**Most Common:**
- Mitral valve prolapse (leaky mitral valve)
- Aortic stenosis (stiff aortic valve, especially in older adults)

### 3. Cardiomyopathy (Weak Heart Muscle)

**What It Is:**
The heart muscle itself becomes weak, thick, or stiff, making it hard to pump blood properly.

**Types:**

**Dilated Cardiomyopathy:**
- Heart becomes enlarged and weak
- Can't pump well
- May lead to heart failure

**Hypertrophic Cardiomyopathy:**
- Heart muscle becomes abnormally thick
- Harder for heart to pump blood
- Can cause sudden death in young athletes

**Restrictive Cardiomyopathy:**
- Heart muscle becomes stiff
- Can't relax properly between beats
- Rare type

### Getting Help

**When to Call 911:**
- Chest pain or pressure that doesn't go away
- Pain spreading to arm, neck, or jaw
- Severe shortness of breath
- Fainting or feeling like you might faint
- Cold sweat, nausea, or feeling like something is very wrong

**When to See Your Doctor:**
- New or worsening shortness of breath
- Swelling in legs or ankles
- Heart palpitations (feeling like your heart is racing or skipping)
- Unexplained fatigue`,
      keyTerms: [
        { term: 'coronary artery disease', definition: 'When the arteries supplying blood to the heart become narrowed or blocked' },
        { term: 'plaque', definition: 'Fatty deposits that build up in artery walls' },
        { term: 'heart attack', definition: 'When blood flow to the heart muscle is completely blocked' },
        { term: 'valve', definition: 'A door-like structure in the heart that keeps blood flowing in one direction' },
        { term: 'cardiomyopathy', definition: 'Disease of the heart muscle that makes it harder to pump blood' },
      ],
      analogies: [
        'Coronary artery disease is like a clogged pipe - things can\'t flow through properly.',
        'A leaky valve is like a door that won\'t close all the way - some of what you push through comes back.',
        'A stiff valve is like a door that\'s swollen and hard to open - you have to push harder to get through.',
        'Cardiomyopathy is like a rubber band that\'s been stretched too much - it can\'t snap back properly.',
      ],
      examples: [
        'A person with coronary artery disease might feel chest tightness when climbing stairs because their heart isn\'t getting enough blood.',
        'Someone with a leaky valve might feel short of breath when lying flat because fluid backs up in their lungs.',
      ],
    },
    2: {
      level: 2,
      summary: 'Major heart conditions include coronary artery disease (atherosclerosis causing ischemia), valvular disorders (stenosis and regurgitation), and cardiomyopathies (structural and functional myocardial abnormalities), each with distinct pathophysiology, clinical presentations, and treatment approaches.',
      explanation: `## Coronary Artery Disease (CAD)

**Pathophysiology:**
Atherosclerosis is the process of plaque accumulation in arterial walls:

1. **Endothelial injury** from smoking, hypertension, diabetes, inflammation
2. **Lipid infiltration** with LDL cholesterol entering the intima
3. **Inflammatory response** with macrophages becoming foam cells
4. **Smooth muscle proliferation** forming a fibrous cap
5. **Plaque progression** causing luminal narrowing

**Clinical Presentations:**

**Stable Angina:**
- Predictable chest discomfort with exertion
- Relieved with rest or nitroglycerin
- No permanent muscle damage
- Caused by fixed stenosis (≥70% narrowing)

**Unstable Angina:**
- Chest pain at rest or minimal exertion
- Increasing frequency or severity
- Medical emergency
- Caused by plaque rupture or erosion

**Acute MI (Heart Attack):**
- Persistent chest pain (>20 minutes)
- Caused by complete occlusion (thrombus)
- Results in myocardial necrosis
- Time is muscle - emergent reperfusion needed

**Risk Factors (from Framingham):**

**Non-Modifiable:**
- Age (men >45, women >55)
- Male sex
- Family history of premature CAD
- Genetics

**Modifiable:**
- Smoking (most important reversible risk)
- Hypertension
- Dyslipidemia (high LDL, low HDL)
- Diabetes
- Obesity
- Physical inactivity
- Poor diet

## Valvular Heart Disease

**General Types:**

**Stenosis:** Valve doesn't open fully
- Obstruction to forward flow
- Pressure overload proximal to valve
- Chamber hypertrophy

**Regurgitation (Insufficiency):** Valve doesn't close completely
- Backward flow through valve
- Volume overload proximal to valve
- Chamber dilation

**Specific Valve Disorders:**

**Aortic Stenosis:**
- Most common valve disease in developed countries
- Calcific degeneration (age >65)
- Congenital bicuspid valve (younger patients)
- Rheumatic disease (developing countries)

**Symptoms (classic triad):**
- Angina (from LV hypertrophy)
- Syncope (exertional)
- Heart failure (dyspnea)

Once symptomatic, mortality is high without valve replacement.

**Aortic Regurgitation:**
- Chronic: Volume overload, LV dilation
- Acute: Sudden severe backflow, pulmonary edema
- Causes: Annular dilation, bicuspid valve, endocarditis, dissection

**Mitral Stenosis:**
- Almost always rheumatic in origin
- More common in women
- Symptoms: Dyspnea, fatigue, atrial fibrillation, hoarseness (Ortner's syndrome)

**Mitral Regurgitation:**
- Degenerative (myxomatous, prolapse)
- Ischemic (papillary muscle dysfunction)
- Functional (LV dilation, annular enlargement)

**Mitral Valve Prolapse:**
- Myxomatous degeneration of leaflets
- Mid-systolic click murmur
- Usually benign
- Associated with connective tissue disorders

## Cardiomyopathy

**Definition:** Myocardial disease resulting in mechanical and/or electrical dysfunction

**Classification:**

**Dilated Cardiomyopathy (DCM):**
- Systolic dysfunction, chamber dilation
- Wall thinning
- Causes: Ischemic, idiopathic, viral, toxins (alcohol, chemo), pregnancy

**Hypertrophic Cardiomyopathy (HCM):**
- Asymmetric septal hypertrophy
- Diastolic dysfunction
- Dynamic LVOT obstruction (in 70%)
- Autosomal dominant (sarcomere mutations)
- Leading cause of sudden cardiac death in young athletes

**Restrictive Cardiomyopathy (RCM):**
- Stiff ventricles, normal wall thickness
- Severe diastolic dysfunction
- Causes: Amyloidosis, sarcoidosis, hemochromatosis, radiation

**Other Specific Types:**
- Peripartum cardiomyopathy (last month of pregnancy or 5 months postpartum)
- Stress-induced (takotsubo cardiomyopathy)
- Arrhythmogenic right ventricular cardiomyopathy (ARVC)`,
      keyTerms: [
        { term: 'atherosclerosis', definition: 'Buildup of plaque in artery walls causing narrowing and hardening' },
        { term: 'angina', definition: 'Chest pain caused by reduced blood flow to heart muscle', pronunciation: 'an-JYE-nah' },
        { term: 'stenosis', definition: 'Abnormal narrowing of a valve or blood vessel', pronunciation: 'ste-NO-sis' },
        { term: 'regurgitation', definition: 'Backward flow of blood through a valve', pronunciation: 're-GUR-jih-TAY-shun' },
        { term: 'myocardial infarction', definition: 'Heart attack; death of heart muscle due to blocked blood flow' },
        { term: 'LVOT', definition: 'Left ventricular outflow tract; path from LV to aorta' },
        { term: 'takotsubo', definition: 'Stress cardiomyopathy; temporary heart muscle dysfunction caused by extreme emotional stress' },
      ],
      analogies: [
        'Atherosclerosis is like a clogged drain - slowly building up until things can\'t get through.',
        'Aortic stenosis is like trying to breathe through a straw - not enough can get through.',
        'Mitral regurgitation is like a leaky faucet - some of what\'s supposed to go forward comes back.',
      ],
    },
    3: {
      level: 3,
      summary: 'Heart conditions encompass coronary artery disease from atherosclerotic plaque progression, valvular disorders from degenerative or inflammatory processes, and cardiomyopathies from primary myocardial pathology, with overlapping clinical presentations and guideline-directed management strategies.',
      explanation: `## Coronary Artery Disease

### Atherosclerosis Pathophysiology

**Plaque Evolution:**

1. **Fatty Streak:**
   - Earliest visible lesion
   - Lipid-laden macrophages (foam cells)
   - Reversible at this stage

2. **Fibrous Plaque:**
   - Lipid core with fibrous cap
   - Smooth muscle cells and collagen
   - Causes luminal narrowing

3. **Complicated Plaque:**
   - Plaque rupture or erosion
   - Thrombus formation
   - Acute coronary syndrome

**Vulnerable Plaque Characteristics:**
- Thin fibrous cap (<65 μm)
- Large lipid core (>40% plaque volume)
- Macrophage infiltration
- Spotty calcification
- Positive remodeling (outward expansion)

### Acute Coronary Syndromes (ACS)

**Classification:**
1. **STEMI:** ST-elevation MI (complete occlusion)
2. **NSTEMI:** Non-STEMI (partial occlusion, troponin elevation)
3. **Unstable Angina:** Ischemia without biomarker elevation

**STEMI ECG Patterns by Location:**
| Location | ECG Leads | Artery |
|----------|-----------|---------|
| Anterior | V1-V4 | LAD |
| Anteroseptal | V1-V3 | LAD |
| Anterolateral | V3-V6, I, aVL | LAD/LCx |
| Lateral | I, aVL, V5-V6 | LCx |
| Inferior | II, III, aVF | RCA (80%) or LCx (20%) |
| Posterior | Tall R in V1-V2, ST depression | Usually RCA |

**Right-Sided MI (Inferior MI extension):**
- Leads V3R-V6R
- ST elevation in V4R
- RCA proximal occlusion
- High risk of hypotension, bradycardia, AV block

### Valvular Heart Disease

### Aortic Stenosis

**Epidemiology:**
- Prevalence: 2% at age 65, 4% at age 85
- More common in males

**Pathophysiology:**
- Progressive calcification of valve cusps
- Increased transvalvular gradient
- Concentric LV hypertrophy (compensatory)
- Eventually decompensation → systolic dysfunction

**Hemodynamics:**
- Normal aortic valve area: 2.5-3.5 cm²
- Mild: >1.5 cm², mean gradient <25 mmHg
- Moderate: 1.0-1.5 cm², mean gradient 25-40 mmHg
- Severe: <1.0 cm², mean gradient >40 mmHg

**Treatment:**
- Severe AS with symptoms → surgical or transcatheter valve replacement
- No medical therapy improves outcomes
- Severe asymptomatic AS: Close monitoring

### Mitral Regurgitation

**Pathophysiology:**

**Primary (Organic) MR:**
- Mitral valve prolapse: Myxomatous degeneration, chordal elongation
- Flail leaflet: Chordal rupture
- Endocarditis: Leaflet perforation
- Rheumatic: Leaflet thickening, commissural fusion

**Secondary (Functional) MR:**
- Ischemic: Papillary muscle displacement
- Dilated cardiomyopathy: Annular enlargement, leaflet tethering

**Chronic Compensated Mechanisms:**
- LV and LA dilation (accommodates regurgitant volume)
- Increased preload (Frank-Starling)
- Maintains forward CO

**Chronic Decompensated:**
- Afterload increases
- Contractility decreases
- Forward CO falls, pulmonary congestion

### Cardiomyopathy

### Hypertrophic Cardiomyopathy (HCM)

**Genetics:**
- Autosomal dominant (50% inheritance)
- Multiple sarcomere protein mutations
- Most common: β-myosin heavy chain, myosin-binding protein C

**Pathophysiology:**
- Myocyte disarray (chaotic arrangement)
- Myocardial fibrosis
- Small vessel disease
- Diastolic dysfunction (impaired relaxation)

**LVOT Obstruction (HOCM):**
- Systolic anterior motion (SAM) of mitral valve
- Septal hypertrophy narrows outflow tract
- Dynamic obstruction worsens with:
  - Decreased preload (dehydration, Valsalva)
  - Decreased afterload (vasodilators)
  - Increased contractility (exercise, inotropes)

**Clinical Manifestations:**
- Exertional dyspnea (diastolic dysfunction)
- Angina (increased MVO2, small vessel disease)
- Syncope (LVOT obstruction, arrhythmias)
- Sudden cardiac death (ventricular arrhythmias)

**Diagnostic Criteria:**
- Wall thickness ≥15 mm in adults (≥13 mm with family history)
- Not explained by loading conditions alone

### Dilated Cardiomyopathy (DCM)

**Etiology:**
- Idiopathic (50%)
- Ischemic (most common identifiable cause)
- Genetic (20-35%): Titin, lamin mutations
- Toxic: Alcohol, cocaine, chemotherapy (doxorubicin)
- Infectious: Viral myocarditis (Coxsackie B, adenovirus, HIV)
- Metabolic: Thyroid disease, diabetes, nutritional
- Autoimmune: SLE, rheumatoid arthritis
- Peripartum

**Pathophysiology:**
- Chamber dilation with systolic dysfunction
- Wall thinning
- Increased wall stress (Laplace law)
- Progressive remodeling

### Restrictive Cardiomyopathy (RCM)

**Etiology:**
- Infiltrative: Amyloidosis (most common), sarcoidosis, Gaucher
- Storage: Hemochromatosis, Fabry disease, glycogen storage
- Non-infiltrative: Scleroderma, radiation, carcinoid

**Pathophysiology:**
- Myocardial stiffness
- Restrictive filling pattern
- Biatrial enlargement
- Normal wall thickness
- Preserved systolic function early`,
      keyTerms: [
        { term: 'vulnerable plaque', definition: 'Plaque at high risk of rupture; thin cap, large lipid core, inflamed' },
        { term: 'ACS', definition: 'Acute coronary syndrome; spectrum of conditions from unstable angina to STEMI' },
        { term: 'STEMI', definition: 'ST-elevation myocardial infarction; heart attack with complete occlusion' },
        { term: 'HOCM', definition: 'Hypertrophic obstructive cardiomyopathy; HCM with LVOT obstruction' },
        { term: 'systolic anterior motion', definition: 'Abnormal anterior motion of mitral valve during systole causing LVOT obstruction' },
        { term: 'myocyte disarray', definition: 'Chaotic arrangement of heart muscle cells; hallmark of HCM' },
        { term: 'amyloidosis', definition: 'Deposition of amyloid protein in tissues; causes restrictive cardiomyopathy' },
      ],
      clinicalNotes: 'In suspected inferior MI, always obtain right-sided ECG leads (V3R-V6R) to assess for RV involvement. RV infarction requires volume resuscitation, not nitrates. HCM is the most common cause of sudden cardiac death in young athletes - screen with family history and physical exam for murmurs that increase with Valsalva.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of heart conditions requires integrating pathophysiology with clinical assessment, recognizing high-risk features, and applying evidence-based management strategies including revascularization techniques, valve interventions, and emerging therapies for cardiomyopathies.',
      explanation: `## Advanced Coronary Artery Disease

### Plaque Morphology and Rupture

**Stable vs Unstable Plaque:**

**Stable Plaque:**
- Thick fibrous cap (>150 μm)
- Small lipid core
- Smooth muscle-rich
- Calcified
- Produces stable angina with fixed stenosis

**Unstable (Vulnerable) Plaque:**
- Thin fibrous cap (<65 μm)
- Large lipid core (>40%)
- Macrophage-rich shoulder region
- Neovascularization
- Minimal calcification
- Prone to rupture → ACS

**Plaque Rupture Mechanism:**
1. Mechanical stress from circumferential expansion
2. Inflammatory cytokine release (IL-1, TNF-α)
3. Metalloproteinase activation → cap degradation
4. Rupture exposes lipid core to bloodstream
5. Thrombus formation via tissue factor pathway

### Coronary Revascularization

**PCI (Percutaneous Coronary Intervention):**

**Indications:**
- STEMI: Primary PCI within 120 minutes (door-to-balloon)
- NSTE-ACS: Early invasive strategy (within 24 hours) if high risk
- Stable CAD: Ischemia-guided, symptom relief

**Stent Evolution:**
- Bare metal stents (BMS): High restenosis rate (20-30%)
- Drug-eluting stents (DES): Reduced restenosis (5-10%)
- Bioresorbable scaffolds: Experimental

**DES Types:**
- Sirolimus (SES): First-generation
- Paclitaxel (PES): First-generation
- Everolimus (Xience, Promus): Second-generation, preferred
- Zotarolimus (Resolute): Second-generation

**CABG (Coronary Artery Bypass Grafting):**

**Indications over PCI:**
- Left main disease (esp. with diabetes)
- Three-vessel disease (esp. with diabetes)
- Complex two-vessel disease involving proximal LAD
- Failed PCI
- Diffuse disease not amenable to PCI

**Graft Types:**
- Internal mammary artery (LIMA to LAD): 90% 10-year patency
- Saphenous vein graft: 50-60% 10-year patency
- Radial artery: Good alternative

**Guidelines (ISCHEMIA Trial):**
- Initial invasive strategy not superior to optimal medical therapy for stable CAD
- Revascularization for symptom relief, not mortality (most patients)
- Exception: Left main disease, extensive ischemia

## Valvular Heart Disease

### Aortic Stenosis

**Pathophysiology Progression:**
- Valve area 1.5-2.0 cm²: Mild, asymptomatic
- Valve area 1.0-1.5 cm²: Moderate, transition period
- Valve area <1.0 cm²: Severe, symptomatic phase

**Low-Flow Low-Gradient AS:**
- EF <50%, mean gradient <40 mmHg
- True severe AS: Dobutamine stress increases gradient (>40 mmHg) with limited stroke volume increase
- Pseudo-severe AS: Gradient doesn't increase significantly (valve opening limited by flow)

**Treatment Indications:**
- Symptomatic severe AS (Class I)
- Asymptomatic severe AS with:
  - EF <50% (Class I)
  - Abnormal exercise test (Class IIa)
  - Very severe AS (gradient >60 mmHg, Vmax >5 m/s) (Class IIa)
  - Rapid progression (Class IIa)

**TAVR vs SAVR:**
- TAVR (Transcatheter aortic valve replacement): Preferred in age >65-75
- SAVR (Surgical aortic valve replacement): Preferred in younger patients
- TAVR: Faster recovery, less pain, similar outcomes in appropriate patients

### Mitral Regurgitation

**Quantitative Assessment:**

**Echocardiographic Parameters:**
- Effective regurgitant orifice area (EROA)
- Regurgitant volume
- Regurgitant fraction

**Severity Grading:**
| Severity | EROA (cm²) | Regurgitant Volume (mL) | Regurgitant Fraction (%) |
|----------|------------|-------------------------|--------------------------|
| Mild | <0.10 | <30 | <30 |
| Moderate | 0.10-0.29 | 30-59 | 30-49 |
| Severe | ≥0.40 | ≥60 | ≥50 |

**Primary MR: Surgical Indications (Class I)**
- Symptomatic with LVEF >30%
- Asymptomatic with LVEF 30-60% or LVESD >40 mm

**Transcatheter Edge-to-Edge Repair (MitraClip):**
- COAPT trial: Mortality benefit in secondary MR
- EVEREST II: MitraClip vs surgery (similar outcomes in selected patients)
- For high surgical risk patients

### Valve Disease in Pregnancy

**Considerations:**
- Increased plasma volume (30-50%)
- Increased cardiac output (30-50%)
- Decreased SVR → decreased BP
- Safe for vaginal delivery with mild-moderate disease
- Cesarean for severe AS, severe MS with pulmonary HTN

## Cardiomyopathy

### HCM Management

**Pharmacologic:**
- Beta-blockers (first-line): Reduce contractility, improve filling
- Non-DHP CCB (verapamil): Alternative if beta-blocker contraindicated
- Disopyramide: Add for refractory symptoms (anticholinergic, constipation)

**Procedures:**
- Septal myectomy (surgical): Gold standard for obstruction
- Alcohol septal ablation: Alternative to surgery, creates controlled infarct
- Dual-chamber pacing: Rarely used, limited efficacy

**SCD Prevention:**
- ICD for secondary prevention (cardiac arrest, VT)
- ICD for primary prevention based on risk:
  - Family history of SCD
  - Massive hypertrophy (>30 mm)
  - Unexplained syncope
  - NSVT on Holter
  - Abnormal BP response to exercise
  - Late gadolinium enhancement on MRI

### Genetic Cardiomyopathies

**Dilated Cardiomyopathy:**
- Titin (TTN) truncations: Most common
- Lamin A/C (LMNA): High arrhythmia risk, early ICD consideration
- Phospholamban (PLN): Arrhythmias, progressive HF

**Arrhythmogenic Right Ventricular Cardiomyopathy (ARVC):**
- Desmosomal protein mutations (plakophilin, desmoplakin)
- Fibrofatty replacement of RV myocardium
- Ventricular arrhythmias
- ICD for secondary prevention, high-risk primary prevention

### Cardiac Sarcoidosis

**Diagnosis:**
- PET scan: Active inflammation (FDG uptake)
- MRI: Late gadolinium enhancement
- Endomyocardial biopsy: Low yield

**Management:**
- Corticosteroids for active inflammation
- ICD for ventricular arrhythmias or LVEF ≤35%
- Consider heart transplantation for advanced disease

### Cardiac Amyloidosis

**Types:**
- AL (light chain): Plasma cell dyscrasia, aggressive, poor prognosis
- ATTR (transthyretin): Wild-type (older males) or hereditary (mutations)

**Diagnosis:**
- Tc-99m PYP scan (for ATTR): Grade 2-3 uptake
- Serum free light chains (for AL)
- Fat pad or bone marrow biopsy with Congo red stain
- Genetic testing for ATTR mutations

**Treatment:**
- AL: Chemotherapy for plasma cell clone
- ATTR: Tafamidis (TTR stabilizer), patisiran (RNA interference)
- Diuretics for HF symptoms
- Avoid digoxin (binds to amyloid)`,
      keyTerms: [
        { term: 'DES', definition: 'Drug-eluting stent; stent coated with anti-proliferative drug to reduce restenosis' },
        { term: 'TAVR', definition: 'Transcatheter aortic valve replacement; less invasive valve replacement' },
        { term: 'SAVR', definition: 'Surgical aortic valve replacement; traditional open-heart valve surgery' },
        { term: 'COAPT trial', definition: 'Landmark trial showing MitraClip benefit in functional MR' },
        { term: 'LGE', definition: 'Late gadolinium enhancement; cardiac MRI marker of fibrosis/scar' },
        { term: 'PYP scan', definition: 'Technetium pyrophosphate scan; diagnostic for ATTR amyloidosis' },
        { term: 'tafamidis', definition: 'TTR stabilizer medication for ATTR cardiac amyloidosis' },
      ],
      clinicalNotes: 'ISCHEMIA trial showed that for stable CAD, optimal medical therapy is not inferior to early invasive strategy. TAVR has largely replaced SAVR for severe AS in patients >65. COAPT established MitraClip as standard of care for secondary MR in high-risk patients. Genetic testing increasingly important for cardiomyopathy management - screen family members when pathogenic mutation identified.',
    },
    5: {
      level: 5,
      summary: 'Contemporary management of heart conditions integrates advanced imaging for precise phenotyping, guideline-directed therapies with robust evidence, emerging transcatheter techniques, and personalized medicine approaches including genetic testing and novel pharmacotherapies.',
      explanation: `## Evidence-Based Cardiovascular Medicine

## Coronary Artery Disease

### Risk Stratification

**Clinical Risk Scores:**
- **TIMI Risk Score for NSTE-ACS:** Age ≥65, ≥3 CAD risk factors, known CAD, aspirin use, severe angina, ST changes, cardiac biomarkers
- **GRACE Risk Score:** More comprehensive, predicts 6-month mortality
- **Duke Treadmill Score:** For stable CAD prognosis

**Anatomical vs Functional Testing:**

**ISCHEMIA Trial (2020):**
- Initial invasive strategy no better than OMT for stable CAD
- No difference in mortality or MI
- Invasive better for symptom control
- PCI not protective against arrhythmic death

**ISCHEMIA-CKD Extension:**
- No benefit of invasive strategy in advanced CKD
- High risk of contrast nephropathy with invasive approach

### Secondary Prevention

**P2Y12 Inhibitor Selection:**

| Agent | Loading Dose | Maintenance | Indications | Notes |
|-------|--------------|-------------|-------------|-------|
| Clopidogrel | 300-600 mg | 75 mg daily | ACS, post-PCI | Prodrug, resistance possible |
| Prasugrel | 60 mg | 10 mg daily | ACS (PCI) | Faster, more potent, no CABG |
| Ticagrelor | 180 mg | 90 mg BID | ACS | Faster, reversible, dyspnea |
| Cangrelor | IV | 0.75 mcg/kg/min | PCI only | Immediate effect, short half-life |

**DAPT Duration:**
- Stable CAD: 6 months after DES
- ACS: 12 months minimum
- High bleeding risk: 1-3 months (short DAPT trials)
- High ischemic risk: Extended >12 months (PEGASUS, COMPASS)

**Intensive Lipid Lowering:**
- FOURIER trial: Evolocumab (PCSK9 inhibitor) → 15% CV death reduction
- ODYSSEY OUTCOMES: Alirocumab → 15% MACE reduction
- IMPROVE-IT: Ezetimibe added to statin → modest benefit
- Target: LDL <55 mg/dL for very high risk (ACC/AHA 2022)

## Valvular Heart Disease

### 2020 ACC/AHA Valve Guidelines

**Aortic Stenosis:**
- TAVR recommended over SAVR for patients >75 (Class I)
- TAVR reasonable for patients 65-75 (Class IIa)
- SAVR preferred for patients <65 (Class IIa)
- TAVR or SAVR for failed bioprosthetic valve (valve-in-valve)

**Mitral Regurgitation:**
- Primary MR: Surgery preferred (repair > replacement)
- Secondary MR: GDMT + MitraClip for symptomatic despite GDMT (COAPT)
- Transcatheter repair for primary MR at prohibitive surgical risk

**Tricuspid Regurgitation:**
- Medical therapy: Diuretics for symptoms
- Surgical repair: Severe TR requiring left-sided surgery
- Transcatheter tricuspid repair: Emerging (TriClip, transcatheter annuloplasty)

### Valve Choice

**Mechanical vs Bioprosthetic:**

| Feature | Mechanical | Bioprosthetic |
|---------|------------|---------------|
| Durability | Lifelong | 10-20 years |
| Anticoagulation | Warfarin required | None (unless AF) |
| Hemodynamics | Excellent | Excellent (modern) |
| Reoperation | Rare | Likely (young patients) |
| Recommendations | <50 years | >65-70 years |

### Interventional Options

**Transcatheter Edge-to-Edge Repair (TEER):**
- MitraClip: Most studied, COAPT positive
- PASCAL: Alternative device
-成功率 >90% for MR reduction to ≤2+

**Transcatheter Mitral Valve Replacement:**
- Tendyne, Intrepid: Early trials
- For patients unsuitable for TEER

## Cardiomyopathy

### HCM Management (2020 AHA Guideline)

**Risk Stratification for SCD:**
- ESC model: 5-year risk calculated online (HCM Risk-SCD)
- AHA approach: Consider ICD with major risk factors
- Shared decision-making essential

**Emerging Therapies:**
- Mavacamten: Myosin inhibitor, reduces obstruction (EXPLORER-HCM)
- CK-274: Similar myosin modulator (early trials)
- Both improve symptoms, exercise capacity

### Heart Failure with Preserved EF (HFpEF)

**EMPACT-MI (2023):**
- Empagliflozin started early post-MI reduces HF hospitalization
- Benefit regardless of diabetes status

**STEP-HFpEF (2023):**
- Semaglutide improved symptoms, exercise capacity, weight loss
- First pharmacologic benefit specifically in obese HFpEF

### Infiltrative Cardiomyopathies

**Cardiac Amyloidosis:**

**Diagnostic Algorithm:**
1. Suspect in HFpEF with thickened walls, low voltage ECG
2. Serum and urine protein electrophoresis
3. Serum free light chains
4. If abnormal: Hematology referral (suspected AL)
5. If normal: Tc-99m PYP scan (for ATTR)

**Treatment:**
- **ATTR (Wild-type):** Tafamidis 61 mg daily, slows decline
- **ATTR (Hereditary):** Tafamidis, patisiran, vutrisiran (RNA interference)
- **AL:** Chemotherapy targeting plasma cell clone (bortezomib-based)

**Prognosis:**
- AL (untreated): Median survival <6 months
- AL (treated): Median survival ~3-5 years
- ATTR (with tafamidis): Median survival ~5-7 years

**Cardiac Sarcoidosis:**
- Diagnosis: Japanese Ministry of Health criteria
- PET + MRI: Most sensitive
- Treatment: Prednisone ± methotrexate/azathioprine
- ICD for LVEF ≤35% or ventricular arrhythmias

### Peripartum Cardiomyopathy

**Risk Factors:**
- Age >30
- African descent
- Multiparity
- Hypertensive disorders
- Multiple gestation

**Management:**
- Standard GDMT for HFrEF (avoid ACEi/ARB in pregnancy)
- Bromocriptin: Controversial, some evidence for benefit
- Prolactin inhibition may help recovery

**Prognosis:**
- 50% recover to normal EF
- Future pregnancy: High risk of recurrence (25-50%)

### Myocarditis

**Causes:**
- Viral: Coxsackie B, adenovirus, parvovirus B19, HHV-6, SARS-CoV-2
- Immune-mediated: COVID-19 vaccine (rare, mRNA)
- Toxic: Cocaine, methamphetamine, chemotherapy
- Hypersensitivity: Penicillin, sulfonamides

**Diagnosis:**
- Cardiac MRI: Lake Louise criteria (edema + LGE)
- Endomyocardial biopsy: Gold standard but low sensitivity
- Elevated troponin disproportionate to coronary disease

**Treatment:**
- Supportive care (most recover spontaneously)
- GDMT for LV dysfunction
- Immunosuppression for giant cell, eosinophilic myocarditis
- Mechanical circulatory support for severe cases`,
      keyTerms: [
        { term: 'GRACE score', definition: 'Global Registry of Acute Coronary Events risk score; predicts 6-month mortality in ACS' },
        { term: 'DAPT', definition: 'Dual antiplatelet therapy; aspirin plus P2Y12 inhibitor' },
        { term: 'PCSK9 inhibitor', definition: 'Monoclonal antibody evolocumab/alirocumab; lowers LDL by 50-60%' },
        { term: 'COAPT trial', definition: 'Landmark trial establishing transcatheter mitral valve repair for functional MR' },
        { term: 'Lake Louise criteria', definition: 'Cardiac MRI criteria for diagnosing myocarditis' },
        { term: 'mavacamten', definition: 'Myosin inhibitor for hypertrophic cardiomyopathy; reduces LVOT obstruction' },
        { term: 'semaglutide', definition: 'GLP-1 agonist showing benefit in obese HFpEF population' },
      ],
      clinicalNotes: `Clinical pearls from recent trials:

1. **ISCHEMIA:** OMT non-inferior to invasive for stable CAD; reserve PCI for symptoms
2. **DAPT duration:** Tailored by bleeding risk (PRECISE-DARC) and ischemic risk
3. **TAVR:** Now preferred over SAVR for most patients >65 with severe AS
4. **MitraClip:** Standard for secondary MR in patients with symptomatic HF despite GDMT
5. **PCSK9 inhibitors:** Add-on to statins for very high-risk patients with LDL >70
6. **SGLT2 inhibitors:** Indicated for HFrEF regardless of diabetes, now HFpEF too
7. **Tafamidis:** First disease-modifying therapy for ATTR cardiac amyloidosis
8. **Myocarditis:** MRI increasingly diagnostic, reducing need for biopsy`,
    },
  },

  media: [
    {
      id: 'cad-progression',
      type: 'diagram',
      filename: 'coronary-artery-disease-progression.svg',
      title: 'Coronary Artery Disease Progression',
      description: 'From normal artery to plaque rupture and thrombosis',
    },
    {
      id: 'valve-disorders',
      type: 'diagram',
      filename: 'valvular-heart-disease-types.svg',
      title: 'Types of Valvular Heart Disease',
      description: 'Stenosis and regurgitation of heart valves',
    },
    {
      id: 'cardiomyopathy-types',
      type: 'diagram',
      filename: 'cardiomyopathy-classification.svg',
      title: 'Cardiomyopathy Classification',
      description: 'Dilated, hypertrophic, and restrictive patterns',
    },
  ],

  citations: [
    {
      id: 'acc-aha-cad-2021',
      type: 'article',
      title: '2021 ACC/AHA/SCAI Guideline for Coronary Artery Revascularization',
      authors: ['Dravid J', 'et al.'],
      source: 'Circulation',
    },
    {
      id: 'acc-aha-valve-2020',
      type: 'article',
      title: '2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease',
      authors: ['Otto CM', 'et al.'],
      source: 'Journal of the American College of Cardiology',
    },
    {
      id: 'aha-hcm-2020',
      type: 'article',
      title: '2020 AHA/ACC Guideline for the Diagnosis and Treatment of Patients With Hypertrophic Cardiomyopathy',
      authors: ['Maron BJ', 'et al.'],
      source: 'Circulation',
    },
    {
      id: 'ischemia-trial',
      type: 'article',
      title: 'Initial Invasive or Conservative Strategy for Stable Coronary Disease',
      authors: ['Maron DJ', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'braunwald-heart-disease',
      type: 'textbook',
      title: 'Braunwald\'s Heart Disease: A Textbook of Cardiovascular Medicine',
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'condition-atrial-fibrillation', targetType: 'condition', relationship: 'related', label: 'Atrial Fibrillation' },
    { targetId: 'topic-cardiovascular-testing', targetType: 'topic', relationship: 'related', label: 'Cardiovascular Testing' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['pathology', 'cardiology', 'internal medicine'],
    keywords: ['CAD', 'valve disease', 'cardiomyopathy', 'atherosclerosis', 'MI', 'TAVR'],
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

export default heartConditionsContent;
