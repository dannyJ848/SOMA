/**
 * Cardiovascular Testing - Comprehensive Educational Content
 *
 * Covers ECG, echocardiography, stress testing, cardiac catheterization,
 and other diagnostic modalities for cardiovascular disease.
 */

import { EducationalContent } from '../types';

export const cardiovascularTestingContent: EducationalContent = {
  id: 'topic-cardiovascular-testing',
  type: 'topic',
  name: 'Cardiovascular Testing',
  alternateNames: ['Cardiac Testing', 'Cardiac Diagnostics', 'CV Testing'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'Cardiovascular tests are tools doctors use to check how well your heart is working. These include simple tests like ECGs and X-rays, more complex tests like echocardiograms and stress tests, and procedures like cardiac catheterization.',
      explanation: `## What Is Cardiovascular Testing?

Cardiovascular tests are ways doctors can see how your heart is working without opening your chest. Think of them like taking pictures or videos of your heart to see if everything is working properly.

## Common Heart Tests

### Electrocardiogram (ECG or EKG)

**What It Is:**
A simple test that records the electrical activity of your heart.

**How It Works:**
- Small stickers (electrodes) are placed on your chest, arms, and legs
- Wires connect the stickers to a machine
- The machine draws a wavy line on paper or a screen
- Takes about 5-10 minutes

**What It Shows:**
- Heart rhythm (fast, slow, or irregular)
- Previous heart attacks
- Heart enlargement
- Electrical problems

**When It's Used:**
- Chest pain
- Fast or irregular heartbeat
- Dizziness or fainting
- Before surgery
- Routine check-up

### Chest X-Ray

**What It Is:**
A picture of your heart and lungs using radiation.

**What It Shows:**
- Heart size and shape
- Fluid in lungs
- Blood vessels in lungs
- Problems with lungs (not heart)

### Echocardiogram (Echo)

**What It Is:**
An ultrasound of the heart using sound waves.

**How It Works:**
- A technician puts gel on your chest
- A wand (transducer) is moved over your chest
- Sound waves bounce off your heart and create pictures
- Takes about 30-60 minutes

**What It Shows:**
- Heart size
- How well heart pumps
- Heart valve problems
- Holes in the heart
- Blood clots

**Types:**
- Transthoracic (on chest): Most common
- Transesophageal (down throat): Better pictures
- Stress echo: During exercise
- Doppler: Blood flow measurement

### Stress Test

**What It Is:**
Testing your heart while you exercise.

**How It Works:**
- You walk on a treadmill or ride a bike
- The test gets harder over time
- Your heart is monitored the whole time
- Usually stops when you reach your target heart rate

**What It Shows:**
- Blood flow to your heart during exercise
- How your heart handles exercise
- Cause of chest pain or shortness of breath
- Fitness level

**When You Can't Exercise:**
- Medicine is given to simulate exercise
- Called a "pharmacological stress test"

### Cardiac Catheterization (Angiogram)

**What It Is:**
A procedure to look at your heart arteries from the inside.

**How It Works:**
- A thin tube (catheter) is inserted into a blood vessel
- Usually in the groin or wrist
- The tube is guided to your heart
- Dye is injected
- X-rays show the dye flowing through arteries

**What It Shows:**
- Blockages in heart arteries
- Heart function
- Heart valve problems
- Congenital heart defects

**Important:**
- Done in a hospital
- Usually not an emergency
- May involve overnight stay

## Other Tests

### Holter Monitor

**What It Is:**
A portable ECG you wear for 24-48 hours.

**When It's Used:**
- Symptoms that come and go
- Palpitations
- Fainting
- Checking pacemaker or defibrillator function

### Event Monitor

**What It Is:**
Like a Holter monitor, but worn for weeks.

**When It's Used:**
- Symptoms that don't happen every day
- You push a button when you feel symptoms

### CT Scan of the Heart

**What It Is:**
Detailed X-ray pictures of your heart.

**What It Shows:**
- Calcium in arteries (calcium score)
- Blockages in arteries (CT angiography)
- Heart structure

### MRI of the Heart

**What It Is:**
Detailed pictures using magnets and radio waves.

**What It Shows:**
- Heart muscle damage
- Heart structure
- Heart function
- Tumors or infections

## Blood Tests for Heart Disease

### BNP (Brain Natriuretic Peptide)

**What It Tests:**
- Chemical released by heart when stressed

**When It's Used:**
- Diagnosing heart failure
- Monitoring heart failure treatment

### Troponin

**What It Tests:**
- Chemical released by damaged heart muscle

**When It's Used:**
- Diagnosing heart attack
- Checking for heart muscle damage

## Preparing for Your Tests

**ECG:**
- No special preparation needed
- Wear clothes that are easy to remove from your waist up

**Echocardiogram:**
- No special preparation needed
- Takes about an hour

**Stress Test:**
- Don't eat for 2-4 hours before
- Don't smoke or drink caffeine for several hours before
- Wear comfortable clothes and shoes for walking
- Ask about your medications before the test

**Cardiac Catheterization:**
- Don't eat or drink after midnight
- Arrange for someone to drive you home
- Ask which medications to take the morning of the test

## Understanding Your Results

Your doctor will explain what the tests show. Some results are immediate (like ECG), while others take time to analyze.

**Remember:** These tests help your doctor find problems early when they're easier to treat!`,
      keyTerms: [
        { term: 'ECG', definition: 'Electrocardiogram; test of heart electrical activity' },
        { term: 'echocardiogram', definition: 'Ultrasound picture of the heart' },
        { term: 'stress test', definition: 'Testing the heart during exercise' },
        { term: 'cardiac catheterization', definition: 'Procedure using a tube to look at heart arteries' },
        { term: 'Holter monitor', definition: 'Portable ECG worn for 24-48 hours' },
        { term: 'troponin', definition: 'Blood test for heart muscle damage' },
        { term: 'angiogram', definition: 'X-ray pictures of blood vessels using dye' },
      ],
      analogies: [
        'An ECG is like taking a picture of your heart\'s electrical system.',
        'An echocardiogram is like an ultrasound for your heart, similar to pregnancy pictures.',
        'A stress test is like taking your car for a test drive on a highway.',
      ],
      examples: [
        'A patient with chest pain might get an ECG, troponin blood test, and possibly a stress test.',
        'Someone with palpitations might wear a Holter monitor to catch the irregular heartbeat.',
        'Before heart surgery, a person might have a cardiac catheterization to plan the operation.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiovascular testing encompasses ECG for rhythm analysis, echocardiography for structure and function, stress testing for ischemia detection, cardiac catheterization for anatomy and intervention, and advanced imaging including CT, MRI, and nuclear studies, each with specific indications, contraindications, and diagnostic yield.',
      explanation: `## Electrocardiography

### Standard 12-Lead ECG

**Leads:**
- Limb leads: I, II, III, aVR, aVL, aVF
- Precordial leads: V1-V6

**What It Measures:**
- P wave: Atrial depolarization
- PR interval: AV conduction delay
- QRS complex: Ventricular depolarization
- ST segment: Early ventricular repolarization
- T wave: Ventricular repolarization
- QT interval: Ventricular repolarization time

**Indications:**
- Chest pain (rule out MI)
- Arrhythmias
- Syncope
- Pacemaker/ICD check
- Preoperative evaluation
- Wellness/physical

**Normal Values:**
- Heart rate: 60-100 bpm
- PR interval: 120-200 ms
- QRS duration: 80-120 ms
- QTc: <440 ms (men), <460 ms (women)

**Limitations:**
- Single point in time
- May miss intermittent problems
- Limited sensitivity for some conditions

### Ambulatory ECG

**Holter Monitor:**
- Continuous recording for 24-48 hours
- Detects arrhythmias, ST changes
- Patient diary correlates symptoms

**Event Monitor:**
- Longer monitoring (weeks)
- Patient activates for symptoms
- Loop recorders capture before and after activation

**Patch Monitors:**
- Single-use, wearable for 14 days
- Easier than traditional Holter

## Echocardiography

### Transthoracic Echo (TTE)

**What It Shows:**
- Chamber sizes
- Wall thickness
- Valve structure and function
- Systolic function (EF)
- Diastolic function
- Pericardial effusion
- Intracardiac masses

**Doppler:**
- Color flow: Valvular regurgitation
- Spectral: Velocity measurements, gradients

**Indications:**
- Murmur evaluation
- Heart failure
- Post-MI
- Stroke workup
- Shortness of breath

### Transesophageal Echo (TEE)

**Indications:**
- Better views than TTE needed
- Atrial appendage (stroke source)
- Aortic dissection
- Valve prostheses
- Endocarditis
- LA/LAA thrombus

**Contraindications:**
- Esophageal stricture
- Esophageal varices
- Unstable patient

### Stress Echocardiography

**Indications:**
- Diagnose CAD
- Assess ischemia severity
- Preoperative risk assessment
- Valve disease symptoms

**Protocols:**
- Exercise (treadmill or bike)
- Dobutamine (if can't exercise)
- Dipyridamole (if can't exercise)

**What It Shows:**
- Wall motion abnormalities with stress
- Ischemia vs infarction patterns

## Stress Testing

### Exercise Stress Test

**Bruce Protocol (most common):**
- 3-minute stages
- Increases speed and grade each stage
- Target: 85% of age-predicted max HR

**Indications:**
- Chest pain evaluation
- Exercise capacity
- Post-MI risk stratification
- Preoperative assessment

**Contraindications:**
- Acute MI (within 2 days)
- Unstable angina
- Decompensated HF
- Severe AS
- Uncontrolled arrhythmias

**Termination Criteria:**
- Target heart rate achieved
- Symptoms (chest pain, severe dyspnea)
- Significant ST depression
- Hypotension
- Patient request

### Nuclear Stress Test

**MPI (Myocardial Perfusion Imaging):**
- Thallium or technetium-based
- Rest and stress images
- Shows perfusion defects
- Can assess viability

**PET Stress:**
- Better resolution
- Quantitative blood flow
- Lower radiation
- More expensive

## Cardiac Catheterization

### Diagnostic Angiography

**Indications:**
- Unstable angina
- NSTEMI (early invasive)
- STEMI (emergency)
- Valvular disease before surgery
- Heart failure unexplained
- Congenital heart disease

**Access:**
- Femoral (traditional)
- Radial (increasingly common, lower bleeding)

**What It Shows:**
- Coronary anatomy (blockages)
- LV function (ventriculogram)
- Valve gradients
- Shunts (oximetry runs)
- Pulmonary pressures

**Complications:**
- Bleeding/hematoma
- Pseudoaneurysm
- AV fistula
- Stroke/TIA (<1%)
- MI (<1%)
- Death (<0.1% elective)
- Contrast nephropathy

## Advanced Imaging

### Cardiac CT

**Calcium Score:**
- Non-contrast
- Agatston score
- Risk stratification

**CT Angiography:**
- Contrast-enhanced
- Coronary anatomy
- Excludes CAD if normal

**Indications:**
- Intermediate risk chest pain
- Rule-out CAD
- Anomaly assessment
- Pulmonary vein mapping (AF ablation)

### Cardiac MRI

**Indications:**
- Viability assessment
- Cardiomyopathy
- Aortic disease
- Pericardial disease
- Mass/tumor evaluation
- Congenital heart disease
- Right ventricle assessment

**Advantages:**
- No radiation
- Excellent tissue characterization
- Accurate volumes and function

## Nuclear Cardiology

### MUGA Scan

**Radionuclide ventriculography:**
- Measures LVEF
- Wall motion
- Useful for monitoring chemo toxicity

### PET Imaging:**
- Perfusion: Rubidium-82, ammonia N-13
- Metabolism: FDG (viability, inflammation)
- Better resolution than SPECT

## Blood Testing

### Cardiac Biomarkers

**Troponin (I or T):**
- Most specific for myocardial injury
- Elevated within 2-4 hours of injury
- Peaks at 12-24 hours
- Remains elevated for 7-10 days

**BNP/NT-proBNP:**
- Heart failure diagnosis
- Prognostic value
- Treatment monitoring`,
      keyTerms: [
        { term: '12-lead ECG', definition: 'Standard electrocardiogram using 12 different leads' },
        { term: 'TTE', definition: 'Transthoracic echocardiogram; standard ultrasound of heart' },
        { term: 'TEE', definition: 'Transesophageal echo; better views via esophagus' },
        { term: 'stress test', definition: 'ECG monitoring during exercise to detect ischemia' },
        { term: 'cardiac catheterization', definition: 'Invasive procedure to visualize coronary arteries' },
        { term: 'MPI', definition: 'Myocardial perfusion imaging; nuclear stress test' },
        { term: 'CTA', definition: 'CT angiography; CT with IV contrast to see vessels' },
      ],
      analogies: [
        'TEE is like taking pictures from inside the house instead of through the window.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiovascular diagnostic testing integrates ECG for rhythm analysis, echocardiography for structure and hemodynamics, stress testing for ischemia detection, cardiac catheterization for definitive anatomy and intervention, and advanced imaging including CT, MRI, and nuclear studies for comprehensive assessment of cardiovascular disease.',
      explanation: `## Electrocardiography

### ECG Interpretation Systematic Approach

**Step 1: Rate and Rhythm**
- Rate: 300 / # large boxes between QRS complexes
- Rhythm: Regular vs irregular, P waves before each QRS

**Step 2: Axis and Intervals**
- Axis: Lead I and aVF (or -aVR)
  - Normal: -30 to +90 degrees
- PR interval: 120-200 ms
- QRS duration: <120 ms normal
- QTc: <440 ms men, <460 ms women

**Step 3: Waveform Analysis**
- P waves: Normal size, shape, axis
- QRS: No significant Q waves, normal progression
- ST: No elevation/depression
- T: Normally upright in most leads

**Step 4: Comparison**
- Compare to prior ECGs if available
- Look for changes

### Ischemia and Infarction Patterns

**STEMI Criteria:**
- New ST elevation at J point in ≥2 contiguous leads
- ≥1 mm in all leads except V2-V3
- V2-V3: ≥2 mm (men), ≥1.5 mm (women)

**Localization by ECG leads:**
| Area | Leads | Artery |
|------|-------|--------|
| Anterior | V1-V4 | LAD |
| Anteroseptal | V1-V3 | LAD |
| Anterolateral | V3-V6, I, aVL | LAD/LCx |
| Lateral | I, aVL, V5-V6 | LCx |
| Inferior | II, III, aVF | RCA (80%) or LCx (20%) |
| Posterior | Tall R in V1-V2, ST depression | Usually RCA |

**NSTEMI/Unstable Angina:**
- ST depression (horizontal or downsloping)
- T-wave inversion
- May be normal

## Echocardiography

### Standard Measurements

**M-Mode/2D:**
- LV dimensions:
  - LVEDD: 3.5-5.6 cm
  - LVESD: 2.3-4.2 cm
- Wall thickness:
  - IVS: 0.6-1.1 cm
  - PW: 0.6-1.1 cm

**LVEF Calculation:**
- Simpson's biplane (most accurate)
- Teichholz (assumes symmetric geometry)
- Visual estimation (experienced readers)

**Diastolic Function:**
- E/A ratio: Normal >1
- E/e' ratio: >14 suggests elevated filling pressures
- LA volume: Enlarged in chronic elevation
- TR velocity: >2.8 m/s suggests pulmonary HTN

### Valvular Assessment

**Stenosis:**
- Continuity equation for valve area
- Mean gradient from Doppler
- Velocity-time integral (VTI)

**Regurgitation:**
- Vena contracta width
- Regurgitant volume
- Regurgitant fraction
- Effective regurgitant orifice area (EROA)

**Severity Grading (MR):**
| Severity | EROA (cm²) | Regurgitant Volume (mL) |
|----------|------------|--------------------------|
| Mild | <0.10 | <30 |
| Moderate | 0.10-0.29 | 30-59 |
| Severe | ≥0.40 | ≥60 |

## Stress Testing

### Test Selection

**Exercise ECG (no imaging):**
- Baseline normal ECG
- Able to exercise
- Intermediate pre-test probability

**Stress with Imaging:**
- Abnormal resting ECG (LBBB, LVH, digoxin)
- Previous revascularization
- Need for localization
- Higher diagnostic accuracy

**Imaging Modalities:**

**Stress Echo:**
- No radiation
- Widely available
- Wall motion assessment
- Limited in some patients (COPD, obesity)

**Nuclear (MPI):**
- Higher sensitivity than echo
- Perfusion assessment
- Viability assessment
- Radiation exposure

**PET:**
- Better resolution
- Quantitative flow
- Lower radiation than SPECT
- More expensive

### Diagnostic Accuracy

| Test | Sensitivity | Specificity |
|------|-------------|-------------|
| Exercise ECG | 68% | 77% |
| Stress Echo | 80-85% | 80-85% |
| Nuclear SPECT | 85-90% | 75-80% |
| PET | 90% | 85% |

### Ischemia Assessment

**Amount of Ischemia:**
- <10%: Low risk
- 10-15%: Intermediate
- >15%: High risk

**Management implications:**
- Low risk: Medical management
- Intermediate: Consider catheterization
- High risk: Revascularization beneficial

## Cardiac Catheterization

### Hemodynamic Measurements

**Pressures:**
- RA: 0-8 mmHg
- RV: 15-30/0-8 mmHg
- PA: 15-30/4-12 mmHg
- PCWP: 4-12 mmHg
- LV: 100-140/5-12 mmHg
- Aorta: 100-140/60-90 mmHg

**Cardiac Output:**
- Fick method: Gold standard
- Thermodilution: Most common
- Continuity: Often unreliable

**Shunt Calculation:**
- Qp:Qs from oxygen saturations
- Step-up at atrial, ventricular, or great artery level
- >1.5:1 considered significant

### Coronary Angiography

**Views:**
- Left main:
  - RAO caudal (spider)
  - LAO caudal
  - AP cranial
- RCA:
  - LAO
  - RAO
  - Lateral

**Stenosis Assessment:**
- Visual estimation (most common)
- Quantitative coronary angiography (QCA)
- FFR for functional significance

**FFR (Fractional Flow Reserve):**
- Wire-based pressure measurement
- <0.75: Significant ischemia
- 0.75-0.80: Intermediate
- >0.80: Not significant
- FAME trials: FFR-guided PCI improves outcomes

## Advanced Imaging

### Cardiac CT

**Calcium Scoring:**
- Agatston score
- 0: No calcium
- 1-100: Minimal
- 101-400: Moderate
- >400: Severe
- Score 0: Very low short-term risk

**CT Angiography:**
- Sensitivity: >95%
- Specificity: >90%
- Negative predictive value: >98%
- Radiation: 5-15 mSv
- Contrast nephropathy risk

### Cardiac MRI

**Indications:**
- Viability (late gadolinium enhancement)
- Cardiomyopathy characterization
- RV assessment (ARVC, TOF)
- Aortic disease (dissection, aneurysm)
- Mass/tumor evaluation
- Pericardial disease

**Sequences:**
- Cine: Function
- T1: Characterization
- T2: Edema
- LGE: Fibrosis/scar
- T1 mapping: Diffuse fibrosis

### Nuclear Imaging

**MPI Protocols:**
- Stress first (common)
- Rest-stress (if stress abnormal)
- Pharmacologic stress:
  - Regadenoson (A2A agonist): Most common
  - Adenosine: Contraindicated in asthma
  - Dipyridamole: Less commonly used

**Viability Assessment:**
- Rest/redistribution protocols
- FDG PET for metabolic viability
- Hibernating myocardium: Viable but dysfunctional

## Clinical Decision Making

### Pre-Test Probability

**Diamond-Forrester Criteria:**
- Age, sex, symptoms
- Low, intermediate, high
- Guides test selection

**Appropriateness Criteria:**
- AUC/ACC: Appropriateness use criteria
- Rare (1%), May be appropriate (2%), Appropriate (3-9)
- Avoids unnecessary testing`,
      keyTerms: [
        { term: 'Simpson\'s biplane', definition: 'Most accurate echocardiographic method for measuring EF' },
        { term: 'E/e\' ratio', definition: 'Echo measure of LV filling pressures; >14 elevated' },
        { term: 'EROA', definition: 'Effective regurgitant orifice area; quantifies valve regurgitation' },
        { term: 'FFR', definition: 'Fractional flow reserve; pressure wire to assess stenosis significance' },
        { term: 'LGE', definition: 'Late gadolinium enhancement; MRI scar/fibrosis detection' },
        { term: 'regadenoson', definition: 'A2A agonist pharmacologic stress agent for MPI' },
        { term: 'QCA', definition: 'Quantitative coronary angiography; computerized stenosis measurement' },
      ],
      clinicalNotes: 'For STEMI, obtain right-sided ECG leads (V3R-V6R) to assess RV involvement. Simpson\'s biplane method preferred for EF. FFR <0.75 indicates ischemic stenosis requiring intervention. LGE on MRI detects scar/fibrosis. Regadenoson preferred pharmacologic stress (safer in asthma). Appropriateness criteria guide test selection to avoid unnecessary testing.',
    },
    4: {
      level: 4,
      summary: 'Advanced cardiovascular testing integrates multimodality imaging for precise diagnosis, risk stratification, and therapeutic guidance, including echocardiography for comprehensive structure/function assessment, CT and MRI for tissue characterization, invasive hemodynamics, and novel biomarkers for personalized cardiovascular care.',
      explanation: `## Echocardiography Advances

### Strain Imaging (Speckle Tracking)

**Principles:**
- Measures myocardial deformation
- Angle-independent
- More sensitive than visual assessment

**Global Longitudinal Strain (GLS):**
- Normal: >-20%
- Reduced values: Early dysfunction
- Detection of chemotherapy toxicity
- Post-MI remodeling assessment

**Clinical Applications:**
- Early detection of dysfunction
- Cardiac amyloidosis (apical sparing pattern)
- Hypertrophic cardiomyopathy
- Aortic stenosis severity assessment

### 3D Echocardiography

**Advantages:**
- Accurate volume measurements
- No geometric assumptions
- Better for complex anatomy

**Applications:**
- RV volume assessment
- Mitral annulus measurement
- LVOT area calculation
- Complex valve disease

### Contrast Echocardiography

**Indications:**
- Suboptimal windows
- Endocardial border definition
- LV thrombus detection
- RVO calculation
- Apical ballooning syndromes
- Mass differentiation

**Agents:**
- Perflutren lipid microspheres
- Safe, rare hypersensitivity

## Cardiac CT Advances

### Coronary CTA Interpretation

**CAD-RADS Classification:**
- 0: 0% stenosis
- 1: 1-24% stenosis
- 2: 25-49% stenosis
- 3: 50-69% stenosis
- 4: 70-99% stenosis
- 4A: One vessel
- 4B: Two vessels
- 4C: Three vessels or left main
- 5: Total occlusion

**Fractional Flow Reserve CT (FFRCT):**
- Non-invasive FFR calculation
- PLATFORM study: Good correlation with invasive FFR
- Avoids invasive angiography in some cases

### CT-FFR

**Advantages:**
- Non-invasive
- Uses standard CTA data
- No additional radiation
- Reasonable accuracy (83% vs invasive FFR)

### CT Plaque Characterization

**Plaque Types:**
- Calcified (high density)
- Non-calcified (low density)
- Mixed

**High-Risk Features:**
- Positive remodeling
- Low attenuation plaque (<30 HU)
- Napkin-ring sign
- Spotty calcification

## Cardiac MRI Advances

### T1 Mapping

**Native T1:**
- Increased in edema, fibrosis, amyloid
- Decreased in fat, iron overload
- Normal values: Vendor-specific
- Post-contrast T1: Extracellular volume (ECV)

**ECV (Extracellular Volume):**
- Normal: 25-30%
- Increased in fibrosis, amyloid
- Quantification of diffuse fibrosis

### T2 Mapping

**Applications:**
- Myocardial edema detection
- Acute infarction vs chronic
- Myocarditis
- Transplant rejection

### Feature Tracking (CMR-FT)

**Strain assessment by CMR:**
- No ionizing radiation
- Excellent reproducibility
- Reference standard for strain

### 4D Flow

**Blood flow visualization:**
- Flow quantification
- Vortex assessment
- Valve regurgitation
- Shunt quantification

## Nuclear Imaging Advances

### PET MPI

**Tracers:**
- Rubidium-82: Generator-produced
- Ammonia N-13: Cyclotron-produced
- Flurpiridaz F-18: Investigational

**Advantages over SPECT:**
- Better resolution
- Absolute flow quantification
- Lower radiation
- Faster acquisition
- Better attenuation correction

### FDG PET

**Applications:**
- Viability assessment
- Cardiac sarcoidosis
- Endocarditis
- Infection (prosthetic valves)

**Sarcoidosis:**
- FDG + rest perfusion mismatch
- Patterns of involvement
- Treatment response assessment

## Invasive Assessment

### Intravascular Imaging

**IVUS (Intravascular Ultrasound):**
- Cross-sectional images of vessel
- Plaque characterization
- Stent optimization
- Left main assessment

**OCT (Optical Coherence Tomography):**
- Higher resolution than IVUS
- Fibrous cap thickness
- Plaque rupture
- Stent apposition
- TCFA identification (thin-cap fibroatheroma)
- Useful in ACS, bifurcation lesions

**NIRS (Near-Infrared Spectroscopy):**
- Lipid-rich plaque detection
- Combined with IVUS
- MaxLCBI: Quantifies lipid core burden

### Pressure Wire Assessment

**FFR (Fractional Flow Reserve):**
- Hyperemic pressure ratio
- Normal: >0.80-1.00
- Ischemic: <0.75-0.80
- Gray zone: 0.75-0.80

**iFR (Instantaneous Wave-Free Ratio):**
- Hyperemia-free
- Similar accuracy to FFR
- Easier to perform
- DEFINE-FLAIR: Non-inferior to FFR

**RFR (Resting Full-Cycle Ratio):**
- Alternative resting index
- No hyperemia needed

## Biomarker Advances

### High-Sensitivity Troponin

**Benefits:**
- Earlier MI detection
- Rule-out at 1 hour possible
- More sensitive for myocardial injury
- Prognostic value

**Algorithms:**
- 0/1 hour protocol
- 0/2 hour protocol
- 0/3 hour protocol

### D-Dimer

**Pulmonary Embolism:**
- High negative predictive value
- Age-adjusted cutoff (age × 10 μg/L)
- Wells criteria + D-dimer strategy

### Novel Biomarkers

**ST2:**
- Fibrosis marker
- Prognostic in heart failure
- Not affected by renal dysfunction or obesity

**Galectin-3:**
- Fibrosis marker
- Prognostic in HF
- Not routinely used

**GDF-15:**
- General stress marker
- Prognostic value

**High-Sensitivity CRP:**
- Inflammatory marker
- Risk stratification
- Statin therapy decision (JUPITER)

## Test Selection Algorithms

### Chest Pain Evaluation

**Low Risk:**
- Stress test (exercise if possible)
- CTA if intermediate risk

**Intermediate Risk:**
- Functional imaging preferred
- Consider coronary CTA

**High Risk:**
- Invasive angiography

### Heart Failure Evaluation

**Initial:**
- ECG, echocardiogram, BNP, troponin

**If Diagnosis Unclear:**
- Cardiac MRI for tissue characterization
- Coronary angiography for ischemia assessment

### Valvular Disease

**TTE first-line:**
- Comprehensive assessment
- TEE if inadequate views or specific questions

**Before Intervention:**
- TEE for procedural planning
- CT for annular sizing (TAVR)
- Coronary angiography before surgery`,
      keyTerms: [
        { term: 'GLS', definition: 'Global longitudinal strain; sensitive marker of ventricular function' },
        { term: 'CAD-RADS', definition: 'Coronary Artery Disease Reporting and Data System; CTA classification' },
        { term: 'FFRCT', definition: 'Fractional flow reserve from CT data; non-invasive FFR' },
        { term: 'T1 mapping', definition: 'CMR technique measuring native T1 values; detects fibrosis, edema' },
        { term: 'ECV', definition: 'Extracellular volume; CMR quantification of diffuse fibrosis' },
        { term: 'IVUS', definition: 'Intravascular ultrasound; catheter-based vessel imaging' },
        { term: 'OCT', definition: 'Optical coherence tomography; high-resolution intracoronary imaging' },
        { term: 'iFR', definition: 'Instantaneous wave-free ratio; resting alternative to FFR' },
      ],
      clinicalNotes: 'GLS detects dysfunction earlier than EF. CAD-RADS standardizes CTA reporting. FFRCT non-invasive alternative to invasive FFR. T1 mapping detects diffuse fibrosis not seen on LGE. OCT superior for plaque characterization but limited penetration. iFR similar to FFR without hyperemic agent. High-sensitivity troponin enables 1-hour MI rule-out protocols.',
    },
    5: {
      level: 5,
      summary: 'Contemporary cardiovascular testing integrates advanced echocardiographic techniques including strain and 3D imaging, coronary CTA with FFRCT capabilities, high-resolution MRI with tissue characterization, intravascular imaging with OCT and IVUS, and novel biomarkers for precision diagnosis and risk stratification.',
      explanation: `## State-of-the-Art Imaging

### Echocardiography

**Strain Imaging (GLS):**
- Normal: >-18 to -20%
- Detects subclinical dysfunction
- Chemotherapy toxicity monitoring (ACCF/ACE guidelines)
- Cardiac amyloidosis: Apical sparing pattern
- Aortic stenosis: Low-gradient severe AS assessment
- Prognostic in HF, valvular disease

**3D TTE:**
- More accurate volumes vs 2D
- Essential for:
  - MV annular assessment (percutaneous repair)
  - LVOT area (AS severity calculation)
  - RV assessment (challenging with 2D)

**Contrast Echocardiography:**
- FDA-approved agents (Definity, Optison)
- Improves endocardial visualization
- Essential for:
  - LV thrombus detection
  - Apical views (commonly poor)
  - RVO calculation (MR, PR severity)

**Point-of-Care Ultrasound:**
- Increasing use in emergency, critical care
- Focused assessments (RSAT, BLUE protocol)
- Complement to comprehensive echo

### Cardiac CT

**Coronary CTA:**
- SCCT 2021 Guidelines:
  - Stable chest pain: First-line for low-intermediate risk
  - Negative predictive value >98%
  - Radiation reduced with modern scanners (1-3 mSv)

**FFRCT:**
- PLATFORM, PACIFIC trials
- Similar diagnostic accuracy to invasive FFR
- Reduces need for invasive angiography
- Cost-effectiveness established

**Coronary Artery Reporting and Data System (CAD-RADS 2.0):**
- Standardized reporting
- Management recommendations
- Follow-up intervals defined

**Plaque Characterization:**
- High-risk plaque features:
  - Positive remodeling
  - Low attenuation plaque
  - Napkin-ring sign
- May predict future events

### Cardiac MRI

**T1 and T2 Mapping:**
- Detect diffuse fibrosis (T1)
- Detect edema (T2)
- Normal values vary by vendor
- Reference ranges established

**Extracellular Volume (ECV):**
- Quantifies interstitial space
- Normal: 25-30%
- Conditions with elevated ECV:
  - Amyloidosis (>40%)
  - Fibrosis
  - Edema

**4D Flow CMR:**
- Time-resolved 3D flow
- Applications:
  - Regurgitant fraction
  - Shunt quantification
  - Flow patterns
  - Wall shear stress

### Nuclear Cardiology

**PET MPI:**
- Advantages over SPECT:
  - Absolute quantification of flow
  - Better diagnostic accuracy
  - Lower radiation
  - Faster acquisition
  - Better attenuation correction

**Hybrid Imaging:**
- PET/CT: Combined anatomy and function
- PET/MR: Combined function and tissue characterization (emerging)

### Intravascular Imaging

**IVUS:**
- Qualitative assessment:
  - Plaque composition
  - Calcification
  - Dissection
  - Thrombus

- Quantitative:
  - Lumen area
  - EEM area
  - Plaque burden
  - Minimal lumen area

**OCT:**
- Resolution: 10-20 microns
- Applications:
  - Fibrous cap thickness
  - TCFA identification
  - Stent apposition
  - Edge dissection
  - Tissue characterization

- CLOPATH study:
  - TCFA predicts future events
  - Microcalcifications predict rupture

**NIRS-IVUS:**
- Lipid core detection
- MaxLCBI predicts events
- Combined imaging increasingly common

## Invasive Assessment

### Pressure Wire

**FFR:**
- Deferrals: CABG, SYNTAX
- FAME trials: Improved outcomes
- Normal: >0.80-1.00
- Gray zone: 0.75-0.80

**iFR:**
- DEFINE-FLAIR: Non-inferior to FFR
- ADVISE II: Confirmed
- No hyperemia needed
- Easier to perform

**RFR:**
- Resting full-cycle ratio
- Validate in R3F study

### Intracoronary Physiology

**Coronary Flow Reserve:**
- Hyperemic/resting flow
- Limited by microvascular dysfunction

**Index of Microcirculatory Resistance:**
- Specific for microvascular function
- Predicts outcomes post-MI
- IMR >25: Abnormal

## Biomarkers

### High-Sensitivity Troponin

**Assays:**
- Detect troponin in healthy individuals
- 99th percentile upper reference limit

**Diagnostic Algorithms:**
- 0/1 hour rule-out possible
- 0/2 hour alternative
- ESC 2020: hsTn preferred

**Elevations in Non-ACS:**
- Heart failure
- Pulmonary embolism
- Myocarditis
- Renal failure
- Sepsis

### Natriuretic Peptides

**BNP vs NT-proBNP:**
- BNP: Shorter half-life, affected by obesity
- NT-proBNP: Longer half-life, affected by renal dysfunction

**Serial Monitoring:**
- Guides HF therapy (some benefit)
- Prognostic value well established

### Emerging Biomarkers

**ST2:**
- Marker of fibrosis, remodeling
- Prognostic in HF
- Not affected by BMI, renal dysfunction
- Guideline-recommended in HF (Class IIa)

**GDF-15:**
- Prognostic in CAD, HF
- Associated with frailty

## Diagnostic Algorithms

### Stable Chest Pain

**2021 ESC Guidelines:**
- CT-first strategy for most patients
- Ischemia testing if CT not available
- Invasive angiography for high risk

**2019 AHA/ACC Guidelines:**
- Shared decision-making
- Consider pre-test probability
- Reserve testing for intermediate probability

### Heart Failure

**HFrEF Diagnostic Workup:**
1. ECG
2. Echocardiogram
3. Coronary anatomy (CT or invasive)
4. MRI if diagnosis uncertain
5. Biomarkers (BNP, troponin)

**HFpEF Diagnostic Workup:**
1. HFA-PEFF score
2. Echocardiography (diastolic assessment)
3. Biomarkers (BNP, troponin)
4. Stress testing (exercise hemodynamics)
5. Cardiac MRI if needed

### Valvular Disease

**AS Severity:**
- TTE first-line
- Dobutamine stress if low-flow low-gradient
- CT for calcium score (if equivocal)
- Invasive hemodynamics if still uncertain

**MR Severity:**
- TTE comprehensive
- TEE for procedural planning
- 3D for annular sizing`,
      keyTerms: [
        { term: 'RSAT', definition: 'Rapid Shock Assessment Transthoracic echo; POC protocol' },
        { term: 'BLUE protocol', definition: 'Bedside lung ultrasound in emergency' },
        { term: 'CAD-RADS 2.0', definition: 'Updated coronary CTA classification system' },
        { term: 'MaxLCBI', definition: 'Maximum lipid core burden index; NIRS measure of lipid plaque' },
        { term: 'TCFA', definition: 'Thin-cap fibroatheroma; high-risk plaque vulnerable to rupture' },
        { term: 'HFA-PEFF', definition: 'HFpEF diagnostic algorithm; echo, biomarkers, functional testing' },
        { term: 'CLOPATH', definition: 'Study showing OCT-detected TCFA predicts future events' },
      ],
      clinicalNotes: `Contemporary cardiovascular testing updates:

1. **Echo:** GLS detects early dysfunction, chemotherapy toxicity monitoring
2. **CT:** CAD-RADS 2.0 standardizes reporting; FFRCT non-invasive ischemia assessment
3. **MRI:** T1/T2 mapping, ECV quantify diffuse fibrosis; 4D flow for hemodynamics
4. **Intravascular:** OCT highest resolution; NIRS detects lipid plaque
5. **Pressure wires:** iFR similar to FFR without hyperemia
6. **Biomarkers:** hsTn enables 1-hour rule-out; ST2 prognostic in HF
7. **Chest pain:** CT-first strategy (ESC) or pre-test probability guided (AHA)
8. **Valvular:** 3D essential for TAVR planning; CT calcium scoring for AS`,
    },
  },

  media: [
    {
      id: 'ecg-lead-placement',
      type: 'diagram',
      filename: 'ecg-lead-placement.svg',
      title: 'ECG Lead Placement',
      description: 'Standard 12-lead ECG electrode positions',
    },
    {
      id: 'echo-views',
      type: 'diagram',
      filename: 'echocardiogram-standard-views.svg',
      title: 'Standard Echocardiographic Views',
      description: 'PLAX, PSAX, apical, subcostal views',
    },
    {
      id: 'coronary-angiogram',
      type: 'diagram',
      filename: 'coronary-angiography-views.svg',
      title: 'Coronary Angiography Standard Views',
      description: 'LAO, RAO, cranial, caudal projections',
    },
  ],

  citations: [
    {
      id: 'ase-echo-guidelines',
      type: 'article',
      title: 'Guidelines for the Use of Echocardiography',
      authors: ['Douglas PS', 'et al.'],
      source: 'Journal of the American Society of Echocardiography',
    },
    {
      id: 'sct-ct-guidelines',
      type: 'article',
      title: '2021 SCCT Guidelines for Coronary CT Angiography',
      authors: ['Chinnaiyan KM', 'et al.'],
      source: 'Journal of Cardiovascular Computed Tomography',
    },
    {
      id: 'esc-chest-pain-2021',
      type: 'article',
      title: '2021 ESC Guidelines for the Diagnosis and Treatment of Acute Coronary Syndromes',
      authors: ['Collet JP', 'et al.'],
      source: 'European Heart Journal',
    },
    {
      id: 'acc-aha-stable-cad-2021',
      type: 'article',
      title: '2021 AHA/ACC/ASE/CHEST/SAEM/SCCT/SCMR Guideline for the Evaluation of Chest Pain',
      authors: ['Fihn SD', 'et al.'],
      source: 'Circulation',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'related', label: 'Coronary Artery Disease' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'category-heart-conditions', targetType: 'topic', relationship: 'related', label: 'Heart Conditions' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'radiology', 'diagnostics'],
    keywords: ['ECG', 'echo', 'stress test', 'cardiac cath', 'CTA', 'MRI', 'nuclear'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency medicine', 'radiology'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cardiovascularTestingContent;
