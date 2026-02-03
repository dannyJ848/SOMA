/**
 * Pericardial Disease - Comprehensive Educational Content
 *
 * Disorders of the pericardium including pericarditis, pericardial effusion,
 * cardiac tamponade, and constrictive pericarditis
 */

import { EducationalContent } from '../../types';

export const pericardialDiseaseContent: EducationalContent = {
  id: 'pericardial-disease',
  type: 'condition',
  name: 'Pericardial Disease',
  alternateNames: ['Pericarditis', 'Pericardial Effusion', 'Cardiac Tamponade', 'Constrictive Pericarditis', 'Pericardial Disease'],
  hpoId: 'HP:0001638',

  levels: {
    1: {
      level: 1,
      summary: 'Pericardial disease affects the sac surrounding the heart (pericardium), causing inflammation, fluid buildup, or scarring that can interfere with heart function.',
      explanation: `## What is the Pericardium?

The pericardium (pair-ih-KAR-dee-um) is a thin, sac-like tissue that surrounds the heart. It has two layers with a small amount of fluid between them.

**Functions:**
- Protects the heart
- Keeps it in place in the chest
- Prevents excessive movement
- Contains a small amount of lubricating fluid

## Types of Pericardial Disease

### Pericarditis

Inflammation of the pericardium.

**What happens:**
- The sac becomes irritated and swollen
- The two layers rub against each other
- Causes sharp chest pain

**Symptoms:**
- Sharp, stabbing chest pain
- Pain worse when lying flat, better when sitting up
- Pain may spread to shoulder or neck
- Fever (if from infection)
- Dry cough

**Common causes:**
- Viral infection (most common)
- Heart attack
- Autoimmune diseases
- Kidney failure
- Certain medications

### Pericardial Effusion

Fluid buildup in the pericardial sac.

**What happens:**
- Extra fluid collects between the layers
- Can compress the heart if large amount
- May not cause symptoms if small

**Symptoms:**
- Small effusion: No symptoms
- Large effusion: Shortness of breath, chest discomfort, cough

**Causes:**
- Infection
- Heart failure
- Kidney disease
- Cancer
- Autoimmune diseases

### Cardiac Tamponade

Medical emergency! Too much fluid compresses the heart.

**What happens:**
- Fluid prevents heart from filling properly
- Heart cannot pump enough blood
- Blood pressure drops dangerously

**Symptoms:**
- Severe shortness of breath
- Lightheadedness or fainting
- Rapid heartbeat
- Low blood pressure
- Swollen veins in neck

**When to Call 911:**
- Severe shortness of breath
- Fainting or feeling like you might faint
- Chest pain with fever
- Rapid heartbeat with dizziness

**Treatment: Emergency!**
- Must remove the fluid immediately with a needle or surgery

### Constrictive Pericarditis

The pericardium becomes thick and stiff.

**What happens:**
- Sac becomes like a hard shell
- Heart cannot expand properly
- Causes swelling and fatigue

**Symptoms:**
- Swelling in legs and abdomen
- Fatigue
- Shortness of breath
- Nausea, abdominal swelling

**Causes:**
- Often from repeated episodes of pericarditis
- Heart surgery
- Radiation therapy
- Tuberculosis (in some countries)

## Diagnosis

**Tests doctors use:**
- **Physical exam** - listening for friction rub (scratchy sound)
- **ECG** - may show characteristic changes
- **Echocardiogram** - sees fluid and heart function
- **Chest X-ray** - can show enlarged heart silhouette
- **Blood tests** - look for signs of inflammation or infection
- **CT or MRI** - detailed images of pericardium
- **Pericardiocentesis** - remove fluid for testing

## Treatment

### Pericarditis

**Medications:**
- **Anti-inflammatory drugs:** Ibuprofen, aspirin
- **Colchicine:** Prevents return of pericarditis
- **Corticosteroids:** For severe cases or when other drugs don't work

**Other treatments:**
- Rest until fever and pain improve
- Treat the underlying cause

### Pericardial Effusion

**Small effusion:**
- May not need treatment
- Monitor with repeat echocardiograms
- Treat underlying cause

**Large effusion or tamponade:**
- Emergency removal of fluid (pericardiocentesis)
- May need surgery (pericardial window)

### Constrictive Pericarditis

**Medications:**
- Diuretics (water pills) for swelling

**Surgery:**
- Pericardiectomy - removal of the stiff pericardium
- Can greatly improve symptoms

## Recovery

**Most people with pericarditis recover completely within weeks to months.**

**During recovery:**
- Take medications as prescribed
- Rest and avoid strenuous activity
- Slowly return to normal activities
- Follow up with your doctor

**Recurrence:**
- Pericarditis can return in some people
- Colchicine helps prevent recurrence
- Complete treatment course to reduce risk

## Prevention

**Not all cases can be prevented, but you can:**
- Get prompt treatment for infections
- Seek treatment for autoimmune conditions
- Follow up after heart attack or heart surgery
- Avoid activities that increase risk (illegal drugs, excessive alcohol)`,
      keyTerms: [
        { term: 'pericardium', definition: 'The thin sac that surrounds and protects the heart', pronunciation: 'pair-ih-KAR-dee-um' },
        { term: 'pericarditis', definition: 'Inflammation of the pericardium, causing sharp chest pain' },
        { term: 'pericardial effusion', definition: 'Fluid buildup in the pericardial sac around the heart' },
        { term: 'cardiac tamponade', definition: 'Life-threatening compression of the heart from fluid in the pericardium' },
        { term: 'friction rub', definition: 'Scratchy sound heard with stethoscope when pericardial layers rub together' },
        { term: 'pericardiocentesis', definition: 'Procedure to remove fluid from the pericardial sac using a needle' },
        { term: 'constrictive pericarditis', definition: 'Thickened, stiff pericardium restricting heart filling' },
      ],
      analogies: [
        'The pericardium is like a sweater around the heart - it protects but allows movement.',
        'Pericarditis is like having a rash on the inside of the sweater - the layers rub together.',
        'Cardiac tamponade is like squeezing a water balloon - the heart cannot fill properly.',
        'Constrictive pericarditis is like wearing a corset - the heart cannot expand.',
      ],
      examples: [
        'A young person has sharp chest pain that gets worse when lying down and feels better sitting up - this is classic pericarditis.',
        'Someone after heart surgery develops shortness of breath and low blood pressure - this could be cardiac tamponade.',
        'A person has swelling in their legs and abdomen that gets worse over time - this could be constrictive pericarditis.',
      ],
      patientCounselingPoints: [
        'For pericarditis: Take anti-inflammatory medications as prescribed, take with food to protect stomach',
        'Sit up and lean forward to relieve chest pain from pericarditis',
        'Complete the full course of colchicine to prevent recurrence',
        'Avoid strenuous activity until your doctor says it is okay',
        'Report worsening shortness of breath or chest pain immediately',
        'If you have had pericarditis, you are at risk for recurrence - watch for symptoms',
        'For constrictive pericarditis: Diuretics will help with swelling - take as directed',
        'After pericardiectomy: Follow cardiac rehabilitation program',
        'Report fever, signs of infection after any pericardial procedure',
      ],
    },
    2: {
      level: 2,
      summary: 'Pericardial diseases encompass inflammatory (pericarditis), fluid accumulation (effusion), life-threatening compression (tamponade), and restrictive scarring (constrictive pericarditis), with distinct pathophysiology and clinical presentations.',
      explanation: `## Pericardial Diseases

**Anatomy:** The pericardium consists of two layers:
- **Fibrous pericardium:** Tough outer layer
- **Serous pericardium:** Inner layer with two parts
  - Parietal layer: Lines fibrous pericardium
  - Visceral layer: Adheres to heart (epicardium)
- **Pericardial space:** Contains 15-50 mL of serous fluid

## Acute Pericarditis

**Definition:** Inflammation of the pericardium with or without pericardial effusion.

**Etiology:**

**Idiopathic (80-90%):**
- Most presumed viral
- Coxsackie A and B, echovirus, adenovirus, influenza, HIV

**Specific Causes:**
- **Infectious:** Viral (most common), bacterial (TB in developing), fungal
- **Post-MI:** Pericarditis episode 1 (days 2-4) or Dressler syndrome (weeks to months)
- **Post-pericardiotomy:** After heart surgery
- **Trauma:** Blunt or penetrating
- **Neoplasm:** Lung, breast, lymphoma, leukemia, melanoma
- **Autoimmune:** SLE, RA, scleroderma
- **Metabolic:** Uremia (renal failure), myxedema
- **Drugs:** Hydralazine, procainamide, isoniazid, doxorubicin
- **Radiation:** Usually months to years after exposure

**Clinical Presentation:**
- **Chest pain:** Retrosternal, pleuritic, positional (worse supine, better sitting up)
- **Radiation:** May radiate to trapezius ridge (pathognomonic)
- **Fever:** If infectious
- **Dyspnea:** If effusion present

**Physical Examination:**
- **Pericardial friction rub:** Scratchy, grating sound
  - Systolic, diastolic, or both
  - Best heard at left sternal border with patient leaning forward
  - May come and go
- Fever, tachycardia

**ECG Findings (4 Stages):**

**Stage 1 (hours to days):**
- Diffuse ST elevation (concave upward)
- PR depression (except aVR)
- ST elevation in multiple leads

**Stage 2 (days to weeks):**
- ST returns to baseline
- T waves flatten

**Stage 3 (weeks):**
- T waves become inverted

**Stage 4 (weeks to months):**
- ECG returns to normal (or permanent T wave changes)

**Laboratory Findings:**
- Elevated inflammatory markers: CRP, ESR
- Leukocytosis (if infectious)
- Elevated cardiac enzymes if myocardial involvement (myopericarditis)

## Pericardial Effusion

**Definition:** Accumulation of fluid in the pericardial space.

**Etiology:**
- Any cause of pericarditis
- Heart failure
- Malignancy
- Renal failure (uremia)
- Hypoalbuminemia
- Post-MI (free wall rupture)
- Trauma
- Iatrogenic (post-procedure)

**Hemodynamics:**

**Small effusion:**
- Minimal hemodynamic effect
- Asymptomatic

**Moderate effusion:**
- May cause mild symptoms
- May require monitoring

**Large effusion:**
- Can compress cardiac chambers
- May progress to tamponade

**Echocardiographic Assessment:**

**Size:**
- Small: <100 mL, echo-free space <10 mm posterior
- Moderate: 100-500 mL, echo-free space 10-20 mm
- Large: >500 mL, echo-free space >20 mm

**Location:**
- Posterior first, then anterior, then circumferential

## Cardiac Tamponade

**Definition:** Life-threatening compression of the heart due to fluid accumulation, preventing adequate filling and cardiac output.

**Pathophysiology:**
- Increased intrapericardial pressure
- Equalization of diastolic pressures in all chambers
- Decreased stroke volume
- Compensatory tachycardia and vasoconstriction
- Eventually: Cardiovascular collapse

**Clinical Presentation:**
- Dyspnea (most common)
- Tachycardia
- Pulsus paradoxus (>10 mmHg drop in BP with inspiration)
- Hypotension
- Muffled heart sounds
- Jugular venous distension

**Beck's Triad (classic but not always present):**
1. Hypotension
2. Muffled heart sounds
3. JVD

**Tamponade physiology on echo:**
- Right atrial collapse (early diastole)
- Right ventricular diastolic collapse
- Inferior vena cava dilation (>2 cm, <50% collapse with inspiration)
- Respiratory variation in mitral/tricuspid inflow (>25% variation)

**Treatment:**
- **Emergency:** Pericardiocentesis
- **Continuous:** Pericardial catheter or window

## Constrictive Pericarditis

**Definition:** Chronic inflammation causing fibrosis and thickening of the pericardium, restricting cardiac filling.

**Etiology:**
- Idiopathic (most common in developed countries)
- Prior pericarditis
- Cardiac surgery
- Radiation therapy
- Tuberculosis (common in developing countries)
- Autoimmune

**Pathophysiology:**
- Thickened, calcified pericardium
- Restrictive filling pattern
- Equalization of end-diastolic pressures
- Dip and plateau (square root sign) in ventricular pressure tracing

**Clinical Presentation:**
- Signs of right-sided HF:
  - JVD
  - Peripheral edema
  - Ascites
  - Hepatomegaly
- Kussmaul's sign (JVD increases with inspiration)
- Pericardial knock (early diastolic sound)

**Distinguishing from Restrictive Cardiomyopathy:**
- Constriction: Respiratory variation in mitral inflow (>25%)
- Restriction: No significant respiratory variation`,
      keyTerms: [
        { term: 'pleuritic', definition: 'Sharp pain worsened by breathing; caused by inflammation of lining surfaces' },
        { term: 'Dressler syndrome', definition: 'Post-MI pericarditis occurring weeks to months after heart attack' },
        { term: 'pulsus paradoxus', definition: 'Exaggerated drop in BP (>10 mmHg) during inspiration' },
        { term: 'Kussmaul\'s sign', definition: 'Paradoxical rise in JVP with inspiration; seen in constriction' },
        { term: 'square root sign', definition: 'Dip and plateau pattern of ventricular pressure tracing in constrictive pericarditis' },
        { term: 'pericardial knock', definition: 'Early diastolic sound heard in constrictive pericarditis' },
        { term: 'trapezius ridge', definition: 'Area along shoulder; radiation of pericarditis pain here is pathognomonic' },
      ],
      analogies: [
        'Pulsus paradoxus is like sucking on a straw - when you inhale, you pull harder, but in tamponade the heart cannot fill.',
        'Constrictive pericarditis is like the heart is wearing a straightjacket - it cannot expand properly.',
        'The pericardial friction rub is like walking on snow - the crunching sound of layers rubbing together.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pericardial diseases require accurate diagnosis based on clinical presentation, ECG, echocardiography, and sometimes advanced imaging, with management ranging from anti-inflammatory therapy to emergency pericardiocentesis or surgical pericardiectomy.',
      explanation: `## Pericardial Disease: Comprehensive Management

## Diagnostic Approach

### Acute Pericarditis

**Diagnostic Criteria (at least 2 of 4):**

1. **Typical chest pain:** Pleuritic, positional, relieved by sitting up
2. **Pericardial friction rub:** Heard on auscultation
3. **Typical ECG changes:** Diffuse ST elevation, PR depression
4. **New or worsening pericardial effusion**

**Additional Testing:**

**Echocardiography:**
- Assess for effusion
- Evaluate ventricular function
- Exclude tamponade
- Look for wall motion abnormalities (myopericarditis)

**Chest X-ray:**
- May show enlarged cardiac silhouette with large effusion
- "Water bottle" configuration
- Usually normal with uncomplicated pericarditis

**Cardiac CT or MRI:**
- When echo is inconclusive
- Assess pericardial thickness
- Detect effusion, masses
- Characterize tissue (edema, inflammation)
- Late gadolinium enhancement in pericarditis

**Laboratory:**
- CBC, ESR, CRP (inflammatory markers)
- Troponin, CK-MB (myocardial involvement)
- Blood cultures (if infectious suspected)
- Autoimmune panel (if indicated)
- Tuberculosis testing (if risk factors)

**Etiology-Specific Testing:**
- Viral serologies (usually not needed)
- Purified protein derivative (TB)
- ANA, RF (autoimmune)
- Thyroid function
- Renal function

### Pericardial Effusion

**Echocardiographic Assessment:**

**Size:**
- Trace: Minimal echo-free space
- Small: <10 mm posterior effusion
- Moderate: 10-20 mm
- Large: >20 mm circumferential

**Hemodynamic Assessment:**
- Chamber collapse (RA, RV)
- IVC size and respiratory variation
- Doppler findings (respiratory variation)

**CT/MRI:**
- Better anatomic detail
- Characterize fluid (blood, exudate)
- Detect loculation
- Guide pericardiocentesis

### Cardiac Tamponade

**Clinical Diagnosis:**
- Beck's triad (hypotension, muffled heart sounds, JVD)
- Pulsus paradoxus >10 mmHg
- Tachycardia
- Dyspnea

**Echocardiographic Findings:**

**2D:**
- Large effusion (usually circumferential)
- Right atrial systolic collapse
- Right ventricular diastolic collapse
- IVC dilation with <50% respiratory collapse
- Swinging heart

**Doppler:**
- Exaggerated respiratory variation:
  - Mitral inflow: >25% decrease with inspiration
  - Tricuspid inflow: >40% increase with inspiration
  - Hepatic vein flow reversal during inspiration

### Constrictive Pericarditis

**Echocardiographic Findings:**

**2D:**
- Thickened pericardium (>2 mm)
- Pericardial calcification (poorly seen)
- Biatrial enlargement
- Abnormal septal motion (septal bounce)

**Doppler:**
- Respiratory variation in mitral/tricuspid inflow (>25%)
- Hepatic vein reversal during expiration
- Annulus reversus (mitral annulus tissue Doppler)

**CT Findings:**
- Pericardial thickening (>3 mm)
- Pericardial calcification
- IVC/hepatic vein dilation
- Narrowed tubular ventricles

**MRI Findings:**
- Pericardial thickening
- Pericardial edema (T2)
- Late gadolinium enhancement of pericardium
- Septal bounce

**Cardiac Catheterization:**
- Equalization of diastolic pressures
- Dip and plateau (square root sign)
- RV and LV pressure tracings nearly identical
- Kussmaul's sign (RA pressure increases with inspiration)

**Differentiation from Restrictive Cardiomyopathy:**

| Feature | Constriction | Restriction |
|---------|-------------|-------------|
| Respiratory variation in mitral inflow | >25% | <25% |
| Hepatic vein reversal | Expiration | Inspiration |
| Septal bounce | Present | Absent |
| Pericardial thickening | Present | Absent |
| Brain natriuretic peptide | Normal/mild | Markedly elevated |

## Treatment

### Acute Pericarditis

**First-Line Therapy:**

**NSAIDs (plus colchicine):**
- **Aspirin:** 750-1000 mg every 6-8 hours
- **Ibuprofen:** 300-800 mg every 6-8 hours
- **Indomethacin:** 25-50 mg every 8 hours
- **Duration:** 1-2 weeks, then taper over weeks

**Colchicine:**
- 0.5 mg daily (or 0.5 mg BID if >70 kg)
- Reduces recurrence from 30% to 10%
- Continue for 3 months
- Contraindications: Renal failure, drug interactions

**Corticosteroids:**
- **Indications:**
  - NSAID/colchicine contraindicated or ineffective
  - Autoimmune etiology (SLE, RA)
  - Pregnancy
- **Dose:** Prednisone 0.2-0.5 mg/kg/day
- **Taper:** Over weeks to months
- **Concern:** Increases risk of recurrence

**Recurrent Pericarditis:**
- Colchicine (continue or restart)
- NSAIDs + colchicine
- Consider corticosteroids if not already used
- Consider pericardiectomy for refractory cases

### Pericardial Effusion/Tamponade

**Pericardiocentesis:**

**Indications:**
- Cardiac tamponade (emergency)
- Symptomatic large effusion
- Diagnostic evaluation

**Technique:**
- Echocardiographic guidance
- Subxiphoid approach
- Remove fluid until hemodynamics improve

**Pericardial Catheter:**
- Leave in place for continued drainage
- Monitor for reaccumulation

**Surgical Drainage:**
- Indications:
  - Loculated effusion
  - Hemopericardium (trauma, post-procedure)
  - Recurrent effusion
  - Need for pericardial biopsy
- Procedures:
  - Subxiphoid pericardial window
  - Thoracoscopic window
  - Thoracotomy with pericardiectomy

### Constrictive Pericarditis

**Medical Therapy:**
- Diuretics for congestion
- Salt restriction
- Treat underlying cause

**Surgical Therapy:**

**Pericardiectomy:**
- Indications:
  - Symptomatic constriction
  - NYHA III-IV symptoms
  - Evidence of systemic venous congestion
- Procedure:
  - Complete or radical pericardiectomy
  - Requires cardiopulmonary bypass often
- Outcomes:
  - Operative mortality: 5-10%
  - Symptom improvement: 60-80%
  - Survival: 60-70% at 10 years

**Patient Selection:**
- Age, comorbidities
- Pericardial calcification (good surgical candidate)
- Myocardial function (poor if severe fibrosis)
- Radiation-induced (worse prognosis)`,
      keyTerms: [
        { term: 'pericardiectomy', definition: 'Surgical removal of part or all of the pericardium' },
        { term: 'loculated effusion', definition: 'Pericardial fluid collection in isolated compartments' },
        { term: 'hemopericardium', definition: 'Blood in the pericardial sac' },
        { term: 'septal bounce', definition: 'Abnormal septal motion seen in constrictive pericarditis' },
        { term: 'annulus reversus', definition: 'Tissue Doppler finding distinguishing constriction from restriction' },
        { term: 'radiation-induced', definition: 'Pericardial disease from prior radiation therapy; poor prognosis' },
      ],
      clinicalNotes: 'For acute pericarditis, always prescribe colchicine with NSAIDs to prevent recurrence. Tamponade is a clinical diagnosis - if suspected, do not delay for imaging. Echo is first-line but may be normal early. For constriction, distinguish from restrictive cardiomyopathy - respiratory variation on echo Doppler is key. Pericardiectomy is definitive treatment for constriction but carries significant morbidity.',
    },
    4: {
      level: 4,
      summary: 'Management of pericardial disease integrates anti-inflammatory therapy for pericarditis, emergency drainage for tamponade, surgical pericardiectomy for constriction, and individualized treatment based on etiology and comorbidities.',
      explanation: `## Advanced Pericardial Disease Management

## Pericarditis

### Etiology-Specific Management

**Viral Pericarditis:**
- Supportive care
- NSAIDs + colchicine
- Usually self-limited

**Bacterial Pericarditis:**
- Purulent pericarditis
- Antibiotics (usually third-generation cephalosporin)
- Surgical drainage

**Tuberculous Pericarditis:**
- More common in endemic areas
- Anti-tuberculous therapy (RIPE therapy)
- Consider corticosteroids (controversial)
- May progress to constriction without treatment

**Post-Cardiac Injury Syndromes:**
- **Post-MI pericarditis:** Days 2-4
- **Dressler syndrome:** Weeks to months post-MI
- **Post-pericardiotomy:** After cardiac surgery
- NSAIDs + colchicine
- Corticosteroids if refractory

**Uremic Pericarditis:**
- Dialysis patients
- More intensive dialysis
- NSAIDs (caution with renal function)
- Rarely needs pericardiectomy

**Radiation Pericarditis:**
- Months to years after exposure
- May cause effusion or constriction
- NSAIDs, corticosteroids
- Surgery for constriction (poor outcomes)

**Autoimmune Pericarditis:**
- SLE, RA, scleroderma
- Treat underlying disease
- Corticosteroids often needed
- Colchicine may help

### Refractory and Recurrent Pericarditis

**Recurrent Pericarditis:**
- Affects 15-30% after initial episode
- Colchicine reduces recurrence by 50%
- Risk factors:
  - No colchicine initially
  - Corticosteroid use (increases recurrence)
  - Large effusion
  - Elevated troponin

**Management:**
- NSAIDs + colchicine (if not already)
- Consider corticosteroids (taper slowly)
- Azathioprine, IVIG for refractory cases
- Anakinra (IL-1 receptor antagonist) for refractory

**Indications for Pericardiectomy in Pericarditis:**
- Refractory symptoms despite medical therapy
- Constrictive physiology develops
- Symptomatic loculated effusion

### Myopericarditis

**Definition:** Pericarditis with myocardial involvement.

**Presentation:**
- Chest pain, pericarditis symptoms
- Elevated troponin
- May have regional wall motion abnormalities
- ECG may show more focal ST elevation

**Diagnosis:**
- Cardiac MRI: LGE in myocardium
- Excludes other causes of troponin elevation

**Treatment:**
- NSAIDs + colchicine
- Avoid strenuous activity for 3-6 months
- Standard HF therapy if LV dysfunction
- Consider arrhythmia monitoring (holter)

### Pericardial Effusion Management

**Clinical Decision-Making:**

**Asymptomatic Small Effusion:**
- Observation
- Monitor with serial echo
- Treat underlying cause

**Symptomatic or Large Effusion:**
- Pericardiocentesis for diagnosis and/or relief
- Consider surgical drainage if recurrent

**Malignant Effusion:**
- Poor prognosis
- Pericardial window or sclerosis
- Consider palliative approach

**Post-Procedural Effusion:**
- After cardiac surgery, catheterization
- Small amount common
- Monitor size and hemodynamics
- Evacuate if tamponade physiology

### Cardiac Tamponade

**Emergency Management:**

**Stabilization:**
- IV fluids (crystalloid or colloid)
- Oxygen
- Avoid positive pressure ventilation (decreases venous return)
- Inotropes if needed (dobutamine)

**Definitive Treatment:**

**Pericardiocentesis:**
- Echocardiographic guidance essential
- Subxiphoid approach standard
- Remove enough fluid to relieve tamponade
- Leave catheter if continued drainage needed

**Surgical Drainage:**
- Indicated for:
  - Hemopericardium (trauma, post-procedure)
  - Loculated effusion
  - Recurrent tamponade
  - Need for biopsy
- Approaches:
  - Subxiphoid pericardial window
  - Thoracoscopic window
  - Thoracotomy with pericardiectomy

**Post-Drainage Care:**
- Monitor for reaccumulation
- Serial echocardiograms
- Treat underlying cause

### Constrictive Pericarditis

**Advanced Management:**

**Preoperative Assessment:**
- CT for calcification extent
- MRI for tissue characterization
- Cardiac catheterization if diagnosis unclear
- Assess myocardial function

**Surgical Technique:**
- Radical pericardiectomy preferred
- Remove pericardium from phrenic nerve to phrenic nerve
- May need to extend onto great vessels
- Cardiopulmonary bypass often needed
- Decortication of epicardial fibrosis (epicardiectomy)

**Outcomes:**
- Early mortality: 5-10%
- Symptom improvement: 60-80%
- Long-term survival: 60-70% at 10 years
- Worse outcomes with:
  - Radiation-induced
  - Previous cardiac surgery
  - Severe pulmonary hypertension
  - Poor LV function
  - Renal dysfunction

**Postoperative Care:**
- Inotrope support common
- Diuretics for congestion
- Monitor for low cardiac output
- May need prolonged hospitalization

**Medical Management (if not surgical candidate):**
- Diuretics
- Salt restriction
- Treat underlying cause
- Palliative care

### Effusive-Constrictive Pericarditis

**Definition:**
- Effusion with constriction physiology
- Fluid removal reveals underlying constriction

**Diagnosis:**
- Elevated right-sided pressures despite effusion drainage
- Pericardial thickening

**Management:**
- Pericardiocentesis for effusion
- Pericardiectomy for constriction
- May require staged approach

## Special Situations

### Pregnancy

**Pericarditis:**
- More common in third trimester
- NSAIDs avoided in third trimester
- Prednisone safer than NSAIDs in late pregnancy
- Colchicine generally avoided

**Tamponade:**
- Pericardiocentesis safe with echocardiographic guidance
- Normal pregnancy changes can mimic tamponade (mild physiologic pericardial effusion)

### Post-Cardiac Surgery

**Early Post-Op Effusion:**
- Common (<50% of patients)
- Usually resolves
- Monitor for tamponade

**Late Post-Op Constriction:**
- Rare complication
- May require pericardiectomy

### Pericardial Cysts

**Benign congenital lesions:**
- Usually asymptomatic
- Incidental finding
- Monitor if small
- Surgical removal if symptomatic or large

### Primary Pericardial Tumors

**Rare:**
- Mesothelioma (most common malignant)
- Sarcoma
- Lymphoma

**Treatment:**
- Surgical biopsy for diagnosis
- Chemotherapy/radiation for malignant
- Palliative surgery for symptoms`,
      keyTerms: [
        { term: 'RIPE therapy', definition: 'Rifampin, Isoniazid, Pyrazinamide, Ethambutol for tuberculosis' },
        { term: 'anakinra', definition: 'IL-1 receptor antagonist for refractory pericarditis' },
        { term: 'myopericarditis', definition: 'Pericarditis with myocardial involvement; elevated troponin' },
        { term: 'epicardiectomy', definition: 'Surgical removal of the epicardium (visceral pericardium)' },
        { term: 'effusive-constrictive', definition: 'Pericardial effusion with underlying constrictive physiology' },
        { term: 'physiologic effusion', definition: 'Small, normal pericardial fluid; not pathologic' },
        { term: 'mesothelioma', definition: 'Most common primary malignant pericardial tumor' },
      ],
      clinicalNotes: 'Always add colchicine to NSAIDs for acute pericarditis - reduces recurrence by 50%. Corticosteroids increase recurrence risk - use only when NSAIDs/colchicine contraindicated or ineffective. For tamponade, emergency drainage is life-saving - do not delay for imaging if clinical diagnosis clear. For constriction, surgical pericardiectomy is definitive but high-risk - careful patient selection essential. Radiation-induced constriction has worse surgical outcomes.',
    },
    5: {
      level: 5,
      summary: 'Contemporary management of pericardial disease integrates etiology-specific therapy, evidence-based anti-inflammatory regimens, advanced imaging, and individualized surgical decision-making based on risk and comorbidities.',
      explanation: `## Evidence-Based Pericardial Disease Management

## Landmark Trials and Evidence

### Colchicine in Pericarditis

**COPE (2013):**
- Colchicine + NSAID vs NSAID alone
- Colchicine reduced recurrence at 18 months
- Established colchicine as standard of care

**ICAP (2014):**
- Colchicine reduced recurrence from 33% to 14%
- No GI side effects with low dose (0.5 mg daily)
- Safe with NSAIDs

**COPPS-2 (2014):**
- Post-pericardiotomy syndrome
- Colchicine reduced postoperative pericarditis
- Did not reduce postoperative atrial fibrillation

**Current Practice:**
- Colchicine for all acute pericarditis (Class I)
- Duration: 3 months (first episode), 6+ months (recurrent)
- Dose: 0.5 mg daily (or BID if >70 kg)

### Corticosteroids in Pericarditis

**Controversy:**
- Effective for symptom relief
- Increases risk of recurrence (dose-dependent)
- Worse outcomes when used initially

**Recommendations:**
- Use only when:
  - NSAID/colchicine contraindicated
  - Autoimmune etiology
  - Pregnancy (third trimester)
- Use lowest effective dose
- Taper slowly over months

### Pericardiectomy for Constriction

**Surgical Outcomes:**
- Single-center series:
  - Early mortality: 5-10%
  - Symptom improvement: 60-80%
  - 10-year survival: 60-70%

**Predictors of Poor Outcome:**
- Radiation-induced etiology
- Previous cardiac surgery
- Severe pulmonary hypertension
- Poor LV function (EF <40%)
- Renal dysfunction
- Advanced age

**Timing of Surgery:**
- Earlier associated with better outcomes
- Do not delay for medical therapy if symptomatic

### Refractory Pericarditis

**Anakinra:**
- IRAP (2013): Small RCT showing benefit
- IL-1 receptor antagonist
- Consider for recurrent pericarditis

**IVIG:**
- Case series showing benefit
- Very expensive
- Consider after other therapies fail

**Azathioprine:**
- Immunosuppressive alternative
- Limited data
- Consider in refractory cases

## Controversies and Evolving Practice

### Post-Cardiac Injury Syndromes

**Post-MI Pericarditis:**
- Episode 1 (early): Days 2-4
- Dressler syndrome: Weeks to months
- Less common with reperfusion therapies
- NSAIDs preferred (avoid with other NSAID contraindications)

**Post-Pericardiotomy:**
- Occurs in 10-30% after cardiac surgery
- COPPS established colchicine for prevention
- NSAIDs for treatment
- Corticosteroids for refractory

### Imaging Advances

**Cardiac MRI:**
- Late gadolinium enhancement indicates active inflammation
- Can distinguish pericarditis from other causes of chest pain
- Prognostic information

**CT for Constriction:**
- Excellent for pericardial calcification
- Surgical planning
- May miss non-calcified constriction

**Point-of-Care Ultrasound:**
- Rapid diagnosis of effusion/tamponade
- Increasing use in emergency settings

### Pericardial Effusion in Cancer

**Malignant Effusion:**
- Poor prognosis (median survival 3-4 months)
- Lung, breast, lymphoma, leukemia most common
- Pericardial window for palliation
- Consider intrapericardial chemotherapy (rare)

### Constrictive Pericarditis vs Restrictive Cardiomyopathy

**Differentiating Features:**

| Feature | Constriction | Restriction |
|---------|-------------|-------------|
| Pericardial thickening | Present | Absent |
| Respiratory variation in MV inflow | >25% | <25% |
| Hepatic vein reversal | Expiration | Inspiration |
| Septal bounce | Present | Absent |
| Tissue Doppler e\' | Normal | Reduced |
| BNP | Normal/mild | Markedly elevated |

**Clinical Implications:**
- Constriction: Surgical (pericardiectomy)
- Restriction: Medical (HF therapy)

### Radiation-Induced Pericardial Disease

**Latency:**
- Effusion: Months to years
- Constriction: Years to decades

**Challenges:**
- Often involves other radiation injury:
  - Coronary disease
  - Valve disease
  - Lung disease
  - Esophageal disease

**Management:**
- Medical therapy first
- Surgery high risk but may be necessary
- Multidisciplinary approach essential

### Pericardial Disease in Renal Failure

**Uremic Pericarditis:**
- Dialysis patients
- More intensive dialysis may resolve
- NSAIDs (caution with renal function)
- Consider pericardiectomy if refractory

**Dialysis-Associated Effusion:**
- Common
- Usually resolves with dialysis
- Tamponade possible

## Future Directions

**Novel Therapies:**
- Rilonacept (IL-1 trap): Phase 2 showing promise
- Canakinumab: Being studied
- Methotrexate: Some benefit in small series

**Less Invasive Surgery:**
- Thoracoscopic pericardiectomy
- Robotic approaches
- Earlier intervention

**Biomarkers:**
- CRP for monitoring
- Troponin for myopericarditis
- BNP to differentiate constriction vs restriction

**Risk Stratification:**
- Identifying high-risk pericarditis
- Predicting recurrence
- Guiding intensity of therapy

**Genetic Factors:**
- Familial pericarditis described
- TNF-alpha polymorphisms
- Potential for personalized therapy`,
      keyTerms: [
        { term: 'COPE trial', definition: 'Colchicine for prevention of post-pericardiotomy syndrome and recurrence' },
        { term: 'ICAP', definition: 'Investigation on Colchicine for Acute Pericarditis trial' },
        { term: 'COPPS-2', definition: 'Colchicine for Prevention of Post-Pericardiotomy Syndrome trial' },
        { term: 'IRAP', definition: 'Investigation on Recurrent Pericarditis with Anakinra trial' },
        { term: 'Dressler syndrome', definition: 'Delayed pericarditis weeks to months after MI' },
        { term: 'rilonacept', definition: 'IL-1 trap being studied for recurrent pericarditis' },
        { term: 'post-pericardiotomy', definition: 'Pericarditis following cardiac surgery' },
      ],
      clinicalNotes: `Key Practice Points:

1. **Colchicine is essential** for all acute pericarditis - reduces recurrence by 50%
2. **Avoid corticosteroids initially** - they increase recurrence risk
3. **Tamponade is clinical** - do not delay drainage if clinical suspicion high
4. **For constriction:** Surgical pericardiectomy is definitive but high-risk
5. **Radiation-induced pericarditis** has worse outcomes - manage aggressively
6. **Post-cardiac surgery pericarditis** is common - consider prophylactic colchicine
7. **MRI is valuable** for distinguishing pericarditis from other chest pain causes
8. **Distinguish constriction from restriction** - respiratory variation on Doppler is key
9. **Myopericarditis:** Avoid competitive sports for 3-6 months
10. **Recurrent pericarditis:** Consider anakinra for refractory cases`,
      patientCounselingPoints: [
        'For pericarditis: Take NSAIDs with food to protect your stomach',
        'Complete the full course of colchicine to prevent recurrence',
        'Sit up and lean forward to relieve chest pain',
        'Avoid strenuous activity until your doctor approves',
        'Report worsening shortness of breath, dizziness, or fainting immediately',
        'For effusion: Watch for signs of tamponade - increased shortness of breath, dizziness, swelling',
        'For constrictive pericarditis: Diuretics will help with swelling',
        'After pericardiectomy: Complete cardiac rehabilitation program',
        'Recovery takes time - be patient and follow up with your cardiologist',
        'Report any fever or signs of infection after any pericardial procedure',
      ],
    },
  },

  media: [
    {
      id: 'pericardial-layers',
      type: 'diagram',
      filename: 'pericardium-anatomy.svg',
      title: 'Pericardial Anatomy',
      description: 'Fibrous and serous layers, pericardial space',
    },
    {
      id: 'pericarditis-ecg',
      type: 'diagram',
      filename: 'pericarditis-ecg-changes.svg',
      title: 'Pericarditis ECG Changes',
      description: 'Diffuse ST elevation, PR depression',
    },
    {
      id: 'tamponade-physiology',
      type: 'diagram',
      filename: 'cardiac-tamponade-physiology.svg',
      title: 'Cardiac Tamponade Physiology',
      description: 'Chamber collapse, equalization of pressures',
    },
  ],

  citations: [
    {
      id: 'esc-pericardial-2022',
      type: 'article',
      title: '2022 ESC Guidelines for the diagnosis and management of pericardial diseases',
      authors: ['Adler Y', 'et al.'],
      source: 'European Heart Journal',
    },
    {
      id: 'statPearls-pericardial',
      type: 'website',
      title: 'Pericarditis',
      authors: ['Barua A', 'Taduri M'],
      source: 'StatPearls Publishing',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK459263/',
    },
    {
      id: 'braunwald-pericardial',
      type: 'textbook',
      title: 'Braunwald\'s Heart Disease: Pericardial Disease',
      authors: ['Shabetai R', 'et al.'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'myocardial-infarction', targetType: 'condition', relationship: 'related', label: 'Myocardial Infarction' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'pericardial disease', 'emergency medicine'],
    keywords: ['pericarditis', 'tamponade', 'effusion', 'constriction', 'friction rub'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pericardialDiseaseContent;
