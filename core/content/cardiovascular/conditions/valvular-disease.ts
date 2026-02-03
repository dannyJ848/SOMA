/**
 * Valvular Heart Disease - Comprehensive Educational Content
 *
 * Disorders of heart valves including stenosis and regurgitation
 * Covers aortic, mitral, tricuspid, and pulmonary valve diseases
 */

import { EducationalContent } from '../../types';

export const valvularDiseaseContent: EducationalContent = {
  id: 'valvular-disease',
  type: 'condition',
  name: 'Valvular Heart Disease',
  alternateNames: ['Heart Valve Disease', 'Valve Disorder', 'Valvulopathy', 'Stenosis', 'Regurgitation'],
  hpoId: 'HP:0001636',

  levels: {
    1: {
      level: 1,
      summary: 'Valvular heart disease means one or more of the heart valves are not working properly, either not opening wide enough (stenosis) or not closing tightly (regurgitation).',
      explanation: `## What are Heart Valves?

Your heart has four doors called valves that keep blood flowing in the right direction:

1. **Mitral valve** - between left upper and lower chambers
2. **Aortic valve** - between left lower chamber and aorta (main artery)
3. **Tricuspid valve** - between right upper and lower chambers
4. **Pulmonary valve** - between right lower chamber and lung artery

## Types of Valve Problems

### Stenosis (Stiff Valve)

The valve does not open completely.
- Like a door that is swollen shut
- Blood has trouble getting through
- Heart must pump harder to push blood through

### Regurgitation (Leaky Valve)

The valve does not close completely.
- Like a door that does not latch
- Blood leaks backward
- Heart must work harder to pump enough forward

## Common Valve Diseases

### Aortic Stenosis

The aortic valve becomes stiff and narrow.

**What happens:**
- Left ventricle must pump harder
- Heart muscle thickens from working hard
- Eventually heart may weaken

**Symptoms:**
- Chest pain (angina)
- Fainting, especially with activity
- Shortness of breath
- Feeling tired easily

**Who gets it:**
- Older adults (wear and tear)
- People born with 2 valve flaps instead of 3
- People with rheumatic fever history

### Aortic Regurgitation

The aortic valve leaks blood backward.

**What happens:**
- Blood flows back into the heart after being pumped out
- Heart must pump more blood
- Heart enlarges from extra volume

**Symptoms:**
- Shortness of breath (worse when lying flat)
- Swollen ankles and feet
- Palpitations (aware of heartbeat)
- Fatigue

### Mitral Regurgitation

The mitral valve leaks, allowing blood to flow backward in the left heart.

**What happens:**
- Blood leaks backward when left ventricle contracts
- Left upper chamber enlarges
- Lungs can become congested

**Symptoms:**
- Shortness of breath, especially with activity
- Swelling in legs, ankles
- Palpitations
- Fatigue

**Causes:**
- Mitral valve prolapse (valve flaps are floppy)
- Heart attack damage
- Rheumatic fever
- Infection (endocarditis)

### Mitral Stenosis

The mitral valve does not open completely.

**What happens:**
- Blood cannot flow easily from upper to lower left heart
- Pressure builds up in upper chamber and lungs
- Can cause atrial fibrillation

**Symptoms:**
- Shortness of breath
- Feeling tired
- Swelling
- Heart palpitations

**Cause:**
- Almost always from rheumatic fever (often years earlier)

### Mitral Valve Prolapse

The valve flaps are floppy and bulge backward.

**What happens:**
- Valve may leak (regurgitation)
- Usually mild
- Many people have no symptoms

**Symptoms (if any):**
- Palpitations
- Chest discomfort
- Anxiety
- Fatigue

**Note:** Very common, usually not serious, most people live normally

## Diagnosis

**Doctors use several tests:**
- **Physical exam** - listening for murmurs (extra heart sounds)
- **Echocardiogram** - ultrasound showing valve problems
- **ECG** - electrical activity
- **Chest X-ray** - heart size
- **Cardiac catheterization** - detailed pictures

**What is a murmur?**
- Extra sound caused by turbulent blood flow
- "Whooshing" sound between heartbeats
- Can indicate valve problem

## Treatment

**Depends on severity:**

**Mild cases:**
- Regular monitoring
- Medications for symptoms
- Antibiotics before dental work (some cases)

**Severe cases:**
- Valve repair (preferred if possible)
- Valve replacement

### Valve Replacement Options

**Mechanical valves:**
- Durable, lasts lifetime
- Requires blood thinners (warfarin) forever
- Makes clicking sound

**Bioprosthetic (tissue) valves:**
- From pig or cow tissue
- Does not require long-term blood thinners
- Wears out in 10-20 years
- May need replacement

### Less Invasive Options

**TAVR (Transcatheter Aortic Valve Replacement):**
- Replace valve through catheter in groin
- No open-heart surgery
- For aortic stenosis in older or high-risk patients

**MitraClip:**
- Repairs leaky mitral valve through catheter
- For patients who cannot have surgery

## Living with Valve Disease

**You can help by:**
- Regular check-ups with heart doctor
- Take medications as prescribed
- Tell all doctors about your valve problem
- Practice good dental hygiene (reduces infection risk)
- Know if you need antibiotics before dental work
- Report worsening symptoms promptly

**When to call your doctor:**
- Worsening shortness of breath
- Chest pain
- Fainting
- Rapid heartbeat
- Swelling in legs or abdomen
- Fever (possible infection)`,
      keyTerms: [
        { term: 'stenosis', definition: 'Narrowing of a heart valve that prevents it from opening completely', pronunciation: 'ste-NO-sis' },
        { term: 'regurgitation', definition: 'Leaking of a heart valve that allows backward blood flow', pronunciation: 're-GUR-jih-TAY-shun' },
        { term: 'aortic stenosis', definition: 'Narrowing of the aortic valve, making it hard for the heart to pump blood to the body' },
        { term: 'mitral valve prolapse', definition: 'Condition where the mitral valve flaps bulge backward into the upper chamber' },
        { term: 'murmur', definition: 'Extra heart sound caused by turbulent blood flow, often from valve problems' },
        { term: 'TAVR', definition: 'Transcatheter aortic valve replacement; less invasive valve replacement through a catheter' },
        { term: 'bioprosthetic', definition: 'Valve made from animal tissue (pig or cow) used for replacement' },
      ],
      analogies: [
        'A stenotic valve is like a door that is swollen shut - you have to push hard to get through.',
        'A leaky valve is like a door with a gap - some of what you push through comes back.',
        'The heart valves are like one-way doors in a building - they keep traffic (blood) moving in the right direction.',
      ],
      examples: [
        'An elderly person notices they get chest pain and feel faint when walking uphill - this could be aortic stenosis.',
        'Someone feels their heart racing and notices their ankles are swollen at the end of the day - this could be mitral regurgitation.',
        'A person who had rheumatic fever as a child now has shortness of breath - this could be mitral stenosis from old damage.',
      ],
      patientCounselingPoints: [
        'If you have a mechanical valve, take warfarin exactly as prescribed and have regular blood tests',
        'Practice good oral hygiene to reduce risk of valve infection',
        'Ask your doctor if you need antibiotics before dental work',
        'Report any fever, chills, or feeling unwell promptly - could be valve infection',
        'Know your symptoms and when they are getting worse',
        'Stay active but discuss exercise limits with your doctor',
        'Tell all healthcare providers about your valve problem and medications',
        'Women: discuss pregnancy plans with cardiologist before becoming pregnant',
      ],
    },
    2: {
      level: 2,
      summary: 'Valvular heart disease encompasses stenosis (impaired opening) and regurgitation (incompetent closing) of cardiac valves, causing pressure or volume overload leading to chamber hypertrophy, dilation, and eventual heart failure.',
      explanation: `## Valvular Heart Disease

**Definition:** Structural or functional abnormalities of heart valves causing stenosis (impaired opening) or regurgitation (incompetent closing).

## Valve Anatomy and Function

**Normal Valve Structure:**
- **Leaflets (cusps):** Thin, flexible tissue flaps
- **Annulus:** Fibrous ring anchoring leaflets
- **Chordae tendineae:** Tendinous cords connecting leaflets to papillary muscles (mitral, tricuspid)
- **Papillary muscles:** Anchor chordae, prevent prolapse

**Normal Hemodynamics:**
- **Aortic valve:** 3 cusps, area 2.5-3.5 cm²
- **Mitral valve:** 2 cusps, area 4-6 cm²
- **Tricuspid valve:** 3 cusps, area 7-9 cm²
- **Pulmonic valve:** 3 cusps, area 2.5-3.5 cm²

## Pathophysiology

### Stenosis

**Mechanism:**
- Valve orifice narrowed
- Obstruction to forward flow
- Pressure overload proximal to valve
- Concentric hypertrophy (wall thickening)

**Consequences:**
- Increased gradient across valve
- Chamber hypertrophy (compensatory)
- Eventually: Diastolic dysfunction, chamber dilation, systolic failure

### Regurgitation

**Mechanism:**
- Incomplete valve closure
- Backward flow during systole (mitral, tricuspid, pulmonary) or diastole (aortic)
- Volume overload proximal to valve
- Eccentric hypertrophy (chamber dilation)

**Consequences:**
- Increased total stroke volume (forward + regurgitant)
- Chamber dilation
- Eventually: Systolic failure, pulmonary congestion

## Specific Valve Disorders

### Aortic Stenosis

**Etiology:**
- **Degenerative calcification:** Most common cause in developed countries
  - Age-related (typically >70 years)
  - Progressive calcification of trileaflet valve
- **Bicuspid aortic valve:** Most common congenital heart defect (1-2%)
  - Presents earlier (50-60 years)
  - Premature calcification
- **Rheumatic fever:** Rare in developed countries

**Pathophysiology:**
- Progressive valve narrowing
- Increased transvalvular gradient
- LV concentric hypertrophy (compensation)
- Eventually: LV systolic dysfunction, symptoms

**Hemodynamics:**

| Severity | Valve Area (cm²) | Mean Gradient (mmHg) | Velocity (m/s) |
|----------|------------------|---------------------|----------------|
| Normal | 2.5-3.5 | <5 | <2.5 |
| Mild | >1.5 | <25 | <3.0 |
| Moderate | 1.0-1.5 | 25-40 | 3.0-4.0 |
| Severe | <1.0 | >40 | >4.0 |

**Classic Triad (Symptoms):**
- Angina: From LV hypertrophy (increased O2 demand)
- Syncope: Exertional, from fixed cardiac output
- Heart failure: Dyspnea from elevated LV pressures

**Once symptoms appear, mortality is high without valve replacement.**

### Aortic Regurgitation

**Etiology:**

**Chronic:**
- **Degenerative:** Annular dilation, calcification
- **Bicuspid valve:** With or without stenosis
- **Rheumatic:** Almost always with mitral involvement
- **Endocarditis:** Acute or chronic

**Acute:**
- **Aortic dissection:** Type A (with intimal tear)
- **Endocarditis:** Leaflet perforation
- **Trauma:** Blunt chest injury

**Pathophysiology:**

**Chronic:**
- Volume overload
- LV eccentric hypertrophy (dilation)
- Increased total stroke volume
- Wide pulse pressure (diastolic runoff)
- Eventually: LV failure

**Acute:**
- Sudden severe regurgitation
- No time for compensation
- LV cannot accommodate large volume
- Pulmonary edema, cardiogenic shock
- Medical emergency

**Clinical Signs:**
- Widened pulse pressure
- Diastolic murmur (decrescendo, early diastolic)
- Austin Flint murmur (rumbling diastolic at apex from mitral vibration)
- Water-hammer pulse (Corrigan's pulse)
- Head bobbing (de Musset's sign)

### Mitral Regurgitation

**Etiology:**

**Primary (Organic):**
- **Mitral valve prolapse:** Myxomatous degeneration
- **Rheumatic:** Leaflet thickening, commissural fusion
- **Endocarditis:** Leaflet perforation
- **Trauma:** Chordal rupture

**Secondary (Functional):**
- **Ischemic:** Papillary muscle dysfunction, LV dilation
- **Dilated cardiomyopathy:** Annular enlargement, leaflet tethering

**Pathophysiology:**

**Acute:**
- Sudden volume overload
- LA pressure rises dramatically
- Pulmonary edema
- No time for LA compensation

**Chronic Compensated:**
- LA and LV dilation accommodate regurgitant volume
- Maintains forward cardiac output
- Asymptomatic or minimally symptomatic

**Chronic Decompensated:**
- Afterload increases
- Contractility decreases
- Forward output falls
- Pulmonary congestion

**Clinical Signs:**
- Holosystolic murmur (radiates to axilla)
- S3 (volume overload)
- Laterally displaced PMI
- Signs of pulmonary congestion

### Mitral Stenosis

**Etiology:**
- Almost always rheumatic in origin
- Latent period of 20-40 years after rheumatic fever
- More common in women (2:1)

**Pathophysiology:**
- Progressive narrowing of mitral orifice
- Elevated LA pressure
- Pulmonary venous hypertension
- Pulmonary arterial hypertension
- Right heart failure

**Clinical Signs:**
- Diastolic murmur (rumbling, low-pitched)
- Opening snap (if leaflets pliable)
- Loud P1 (pulmonic component of S2)
- Signs of pulmonary hypertension`,
      keyTerms: [
        { term: 'annulus', definition: 'Fibrous ring that forms the base of a heart valve' },
        { term: 'chordae tendineae', definition: 'Tendon-like cords connecting valve leaflets to papillary muscles' },
        { term: 'papillary muscles', definition: 'Muscles in the ventricles that anchor the chordae tendineae' },
        { term: 'pressure overload', definition: 'Increased pressure required to pump blood through narrowed valve' },
        { term: 'volume overload', definition: 'Increased volume that chamber must handle from regurgitation' },
        { term: 'concentric hypertrophy', definition: 'Thickening of heart wall in response to pressure overload' },
        { term: 'eccentric hypertrophy', definition: 'Dilation of heart chamber in response to volume overload' },
        { term: 'opening snap', definition: 'High-pitched sound from abrupt opening of stenotic mitral valve' },
      ],
      analogies: [
        'Concentric hypertrophy is like a weightlifter\'s muscles getting bigger from lifting heavy weights.',
        'Eccentric hypertrophy is like a balloon being stretched - the chamber gets larger and thinner.',
        'Aortic stenosis is like trying to push water through a narrow nozzle - you need more pressure.',
      ],
    },
    3: {
      level: 3,
      summary: 'Valvular heart disease requires understanding of hemodynamic severity assessment, natural history, and timing of intervention based on symptoms, valve area, gradient, and chamber response.',
      explanation: `## Valvular Heart Disease: Diagnosis and Management

## Diagnostic Evaluation

### Echocardiography

**Primary diagnostic tool**

**Comprehensive assessment:**
- Valve morphology (leaflet thickness, calcification, mobility)
- Valve area (planimetry, continuity equation)
- Transvalvular gradients (Doppler)
- Regurgitant severity (vena contracta, PISA, jet characteristics)
- Chamber size and function
- Pulmonary pressures

### Cardiac Catheterization

**Indications:**
- Discrepancy between echo and clinical findings
- Assessment of coronary anatomy before surgery
- Hemodynamic assessment (when echo inconclusive)

**Measurements:**
- Direct pressure measurements
- Cardiac output
- Valve area calculation (Gorlin formula)
- Coronary angiography

## Hemodynamic Assessment

### Stenosis Severity

**Key Parameters:**
- **Valve area:** Fixed anatomic measurement
- **Mean gradient:** Flow-dependent
- **Peak velocity:** Flow-dependent

**Important Concept:**
- Low gradient can occur with:
  - Mild stenosis
  - Severe stenosis with low flow (low-flow, low-gradient AS)

### Regurgitation Severity

**Qualitative Assessment:**
- Jet size and characteristics
- Flow convergence (PISA)
- Vena contracta width
- Doppler density
- Chamber size changes

**Quantitative Assessment:**

**Mitral Regurgitation:**
- **Effective Regurgitant Orifice Area (EROA)**
  - Mild: <0.20 cm²
  - Moderate: 0.20-0.39 cm²
  - Severe: ≥0.40 cm²

- **Regurgitant Volume**
  - Mild: <30 mL
  - Moderate: 30-59 mL
  - Severe: ≥60 mL

- **Regurgitant Fraction**
  - Mild: <30%
  - Moderate: 30-49%
  - Severe: ≥50%

**Aortic Regurgitation:**
- **Regurgitant Volume**
  - Mild: <30 mL
  - Moderate: 30-59 mL
  - Severe: ≥60 mL

- **Regurgitant Fraction**
  - Mild: <30%
  - Moderate: 30-49%
  - Severe: ≥50%

## Aortic Stenosis

### Natural History

**Valve Area Progression:**
- Mean rate: 0.1 cm²/year
- Faster with:
  - Diabetes
  - Smoking
  - Hypercholesterolemia
  - Renal disease

**Symptom Latent Period:**
- Long asymptomatic period (decades)
- Survival after symptoms: 2-3 years (without treatment)
- Sudden death risk: 1-2%/year after symptoms

### Indications for Intervention

**Class I (Strong Indication):**
- Symptomatic severe AS
- Severe AS with LVEF <50%

**Class IIa (Reasonable):**
- Very severe AS (gradient >60 mmHg, Vmax >5 m/s) if asymptomatic
- Severe AS with abnormal exercise test
- Severe AS with rapid progression (velocity increase ≥0.3 m/s/year)
- Severe AS needing other cardiac surgery

### Low-Flow, Low-Gradient AS

**Paradoxical Low-Flow, Low-Gradient:**
- EF <50%, gradient <40 mmHg, stroke volume index <35 mL/m²
- Severe AS confirmed by:
  - Calcium scoring (CT) - Agatston >1600 (men) or >1200 (women)
  - Dobutamine stress: Velocity increases, stroke volume does not

**Classical Low-Flow, Low-Gradient:**
- Low EF, low gradient, low stroke volume
- Dobutamine stress required:
  - True severe: Velocity >4 m/s with dobutamine
  - Pseudo-severe: Velocity does not increase significantly

## Mitral Regurgitation

### Primary vs Secondary

**Primary (Organic):**
- Valve apparatus abnormal
- Surgical correction targets valve

**Secondary (Functional):**
- Valve normal, LV dysfunction
- Medical therapy (GDMT) + valve intervention

### Indications for Intervention

**Primary MR - Surgery (Class I):**
- Symptomatic with LVEF >30%
- Asymptomatic with LVEF 30-60% and LVESD ≥40 mm

**Secondary MR - Guidelines:**
- GDMT first
- Consider surgery/MitraClip if symptomatic despite GDMT
- Consider surgery if LVEF >30% and coronary bypass planned

## Mitral Stenosis

### Natural History

**Progressive:**
- Symptom onset: 20-40 years after rheumatic fever
- Latent period: No symptoms despite stenosis
- Progressive: Worsening symptoms over years

**Complications:**
- Atrial fibrillation (from LA enlargement)
- Pulmonary hypertension
- Right heart failure
- Systemic embolization (LA thrombus)

### Indications for Intervention

**Class I:**
- Symptomatic moderate-severe MS (MVA ≤1.5 cm²)
- Severe MS (MVA ≤1.0 cm²) if symptomatic

**Percutaneous Mitral Balloon Commissurotomy (PMBC):**
- Indicated if:
  - Favorable valve morphology (Wilkins score <8)
  - No LA thrombus
  - No moderate-severe MR
  - No significant coronary disease

**Surgery (Commissurotomy or Replacement):**
- Unfavorable valve morphology for PMBC
- Concomitant need for other surgery
- Significant MR

## Aortic Regurgitation

### Natural History

**Chronic:**
- Long asymptomatic period
- Progressive LV dilation
- Eventually: LV dysfunction, symptoms

**Acute:**
- Rapid decompensation
- Pulmonary edema, cardiogenic shock
- Surgical emergency

### Indications for Intervention

**Chronic AR - Surgery (Class I):**
- Symptomatic
- Asymptomatic with LVEF ≤50%
- Asymptomatic with LVESD ≥50 mm

**Acute AR - Surgery (Class I):**
- Emergency surgery

## Multivalve Disease

**Common Combinations:**
- AS + AR
- MS + MR
- AS + MR
- TR secondary to left-sided disease

**Principles:**
- Treat most severe lesion first
- Consider combined procedures
- More complex decision-making`,
      keyTerms: [
        { term: 'continuity equation', definition: 'Method to calculate valve area using flow and velocities' },
        { term: 'Gorlin formula', definition: 'Formula to calculate valve area using catheterization data' },
        { term: 'PISA', definition: 'Proximal isovelocity surface area; method to quantify regurgitation' },
        { term: 'vena contracta', definition: 'Narrowest point of regurgitant jet; width indicates severity' },
        { term: 'Wilkins score', definition: 'Echocardiographic score of mitral valve morphology for PMBC candidacy' },
        { term: 'paradoxical low-flow low-gradient', definition: 'Severe AS with small stroke volume but preserved EF' },
        { term: 'PMBC', definition: 'Percutaneous mitral balloon commissurotomy; balloon stretching of mitral valve' },
      ],
      clinicalNotes: 'In severe AS, symptoms (angina, syncope, HF) dramatically change prognosis - intervene promptly. For MR, distinguish primary (valve problem) from secondary (LV dysfunction) as management differs. In low-gradient AS with low EF, dobutamine stress helps distinguish true severe from pseudo-severe. TEE is superior to TTE for visualizing valve anatomy and detecting vegetations.',
    },
    4: {
      level: 4,
      summary: 'Management of valvular heart disease integrates clinical assessment, echocardiographic quantification, timing of surgical or transcatheter intervention, and consideration of comorbidities with evolving techniques.',
      explanation: `## Advanced Management of Valvular Disease

## Aortic Stenosis

### Transcatheter Aortic Valve Replacement (TAVR)

**Indications (2020 ACC/AHA Guidelines):**

**Class I (Preferred):**
- Symptomatic severe AS in patients >75 years
- Symptomatic severe AS in patients 65-75 after heart team discussion

**Class IIa (Reasonable):**
- Symptomatic severe AS in patients <65 (discuss TAVR vs SAVR)

**TAVR vs SAVR Decision:**

| Factor | Favors TAVR | Favors SAVR |
|--------|-------------|-------------|
| Age | >65-75 | <65 |
| Anatomy | Suitable annulus | Unsuitable for TAVR |
| Comorbidities | High surgical risk | Low surgical risk |
| Coronary access | May be difficult | Easier |
| Reoperation | Prior CABG | None |
| Durability concerns | Young patient | Older patient |

**Complications:**
- Vascular complications (10-15%)
- Stroke (2-5%)
- Conduction abnormalities requiring PPM (10-15%)
- Paravalvular leak (more common with early generation)
- Coronary access issues (future interventions)

**Valve-in-Valve:**
- TAVR inside failed surgical bioprosthesis
- Alternative to redo surgery
- Requires careful sizing

### Surgical Aortic Valve Replacement (SAVR)

**Indications:**
- Patients <65 (durability priority)
- Unsuitable anatomy for TAVR
- Need for concomitant surgery (CABG, ascending aorta)
- Endocarditis

**Valve Choice:**

**Mechanical:**
- Indefinite durability
- Requires warfarin (INR 2.5-3.5)
- Higher bleeding risk
- Patient preference (no redo surgery)

**Bioprosthetic:**
- Limited durability (10-20 years)
- No long-term anticoagulation
- Future valve-in-valve possible

## Mitral Regurgitation

### Transcatheter Edge-to-Edge Repair (TEER)

**MitraClip:**
- COAPT Trial (2018):
  - Reduced mortality vs medical therapy in secondary MR
  - Reduced HF hospitalizations
  - Established TEER for secondary MR

**Indications (2020 Guidelines):**
- Primary MR: Prohibitive surgical risk
- Secondary MR: Symptomatic despite GDMT (Class IIa)

**Patient Selection:**
- Suitable anatomy (central, non-calcified, adequate leaflet length)
- LVEF 20-50%
- LVESD <70 mm
- Pulmonary systolic pressure <70 mmHg

**Success Rates:**
- MR reduction to ≤2+: >90%
- Procedural success: >95%
- 1-year survival: ~85% (secondary MR)

### Mitral Valve Surgery

**Repair vs Replacement:**

**Repair Preferred (Class I):**
- Primary MR with suitable anatomy
- Experienced center
- Anterior or posterior leaflet prolapse

**Replacement Indications:**
- Extensive valve calcification
- Rheumatic disease
- Failed repair
- Endocarditis with extensive destruction

**Approaches:**
- Median sternotomy (standard)
- Right mini-thoracotomy (minimally invasive)
- Robotic (selected centers)

### Concomitant CABG

**Indications:**
- CAD with MR requiring surgery
- Ischemic MR with indications for CABG
- Usually repair or replace moderate MR at time of CABG

## Mitral Stenosis

### Percutaneous Mitral Balloon Commissurotomy (PMBC)

**Ideal Candidate:**
- Pliable, non-calcified valve
- Wilkins score <8
- No LA thrombus
- No moderate-severe MR
- No significant CAD

**Success Rates:**
- Procedural success: >90%
- 10-year freedom from reintervention: ~50%

**Complications:**
- Severe MR (2-5%)
- Pericardial tamponade (1%)
- Systemic embolization (<1%)
- Death (<1%)

### Surgery

**Commissurotomy:**
- Open or closed
- Suitable for some non-calcified valves

**Replacement:**
- Calcified valve
- Failed PMBC
- Concomitant MR or need for other surgery

## Aortic Regurgitation

### Medical Management

**Chronic AR:**
- Afterload reduction (ACEI/ARB, CCB)
- Diuretics for volume overload
- GDMT for LV dysfunction
- Avoid strenuous isometric exercise

**Acute AR:**
- Vasodilators (nitroprusside)
- Inotropes if low output
- Avoid diuretics (preload dependent)
- Emergency surgery

### Surgery Timing

**Chronic AR:**
- Monitor LV size and function
- Surgery before irreversible LV dysfunction
- Earlier surgery if progressive dilation

**Acute AR:**
- Emergency surgery regardless of LV function

## Tricuspid Regurgitation

### Etiology

**Secondary (Functional):**
- Most common (80-90%)
- Annular dilation from:
  - Left-sided heart disease
  - Pulmonary hypertension
  - AF (annular enlargement)

**Primary:**
- Trauma (blunt, pacemaker leads)
- Endocarditis (IVDU)
- Ebstein anomaly
- Rheumatic (rare)

### Management

**Medical:**
- Diuretics for symptoms
- Treat underlying left-sided disease

**Surgery:**
- Indicated for severe TR needing left-sided surgery
- Tricuspid annuloplasty (repair) preferred
- Replacement if repair not possible

**Transcatheter:**
- Triclip, TriCinch (early experience)
- For high-risk surgical candidates

## Prosthetic Valves

### Complications

**Structural Valve Degeneration:**
- Bioprosthetic: Wear out over 10-20 years
- Mechanical: Rare

**Thrombosis:**
- Mechanical: Higher risk
- Bioprosthetic: Lower risk but still possible

**Endocarditis:**
- Both types at risk
- More common early (<12 months)

**Paravalvular Leak:**
- Suture dehiscence
- May require reintervention

**Patient-Prosthesis Mismatch:**
- Prosthesis too small for patient
- Residual gradients

### Anticoagulation

**Mechanical Valves:**
- Warfarin required indefinitely
- Target INR:
  - Aortic mechanical: 2.5-3.5
  - Mitral mechanical: 3.0-3.5

**Bioprosthetic Valves:**
- Aspirin 75-100 mg daily first 3 months
- Warfarin for first 3 months if surgical
- Long-term: Only if other indication (AF, VTE)

### Pregnancy Considerations

**Bioprosthetic:**
- Preferred
- May need replacement during childbearing years

**Mechanical:**
- Warfarin teratogenic (first trimester)
- Options:
  - Heparin throughout (high thrombosis risk)
  - Warfarin after first trimester (safer for mother)
  - Replace before pregnancy (ideal)`,
      keyTerms: [
        { term: 'TAVR', definition: 'Transcatheter aortic valve replacement; less invasive valve replacement' },
        { term: 'SAVR', definition: 'Surgical aortic valve replacement; traditional open-heart surgery' },
        { term: 'TEER', definition: 'Transcatheter edge-to-edge repair; MitraClip procedure for MR' },
        { term: 'COAPT trial', definition: 'Landmark trial showing MitraClip benefit in secondary MR' },
        { term: 'valve-in-valve', definition: 'TAVR inside failed surgical bioprosthesis' },
        { term: 'paravalvular leak', definition: 'Leak around prosthetic valve, not through it' },
        { term: 'patient-prosthesis mismatch', definition: 'Prosthesis too small causing high residual gradients' },
      ],
      clinicalNotes: 'TAVR is now preferred over SAVR for most patients >75 with severe AS. For secondary MR, MitraClip is standard for symptomatic patients despite GDMT (COAPT). PMBC is preferred for suitable MS candidates. In tricuspid disease, secondary TR often improves with treatment of left-sided disease. Mechanical valves require warfarin indefinitely with careful INR monitoring.',
    },
    5: {
      level: 5,
      summary: 'Contemporary valve disease management integrates transcatheter techniques, surgical advances, individualized prosthetic selection, and guideline-based intervention timing based on symptoms and objective measures.',
      explanation: `## Evidence-Based Valvular Disease Management

## Landmark Trials

### Aortic Stenosis

**PARTNER Trials:**

**PARTNER 1B (TAVR vs medical therapy):**
- Inoperable patients
- TAVR reduced mortality (20.5 vs 50.7% at 1 year)
- Established TAVR for inoperable patients

**PARTNER 1A (TAVR vs SAVR):**
- High-risk patients
- Similar mortality, TAVR had more stroke, less bleeding
- Established TAVR as alternative to SAVR in high-risk

**PARTNER 2 (Intermediate risk):**
- TAVR similar to SAVR for mortality, stroke
- TAVR had more pacemaker, less AKI, AF, bleeding

**PARTNER 3 (Low risk):**
- TAVR superior to SAVR:
  - Lower mortality, stroke, rehospitalization
  - Better hemodynamics
  - Shorter recovery
- TAVR had more pacemaker, moderate-severe AR

**EVOLUT Low Risk:**
- Similar outcomes TAVR vs SAVR
- More pacemaker with TAVR

**Implications:**
- TAVR preferred for most patients >65-75
- SAVR preferred for younger patients (<65)
- Individualized decision for patients 65-75

### Mitral Regurgitation

**COAPT Trial (2018):**
- Transcatheter mitral valve repair (MitraClip) vs medical therapy
- Secondary MR, symptomatic despite GDMT
- Results:
  - 38% reduction in mortality at 2 years
  - 47% reduction in HF hospitalizations
  - Improved quality of life
- Established TEER as standard for secondary MR

**MITRA-FR Trial:**
- Similar population to COAPT
- No benefit with MitraClip
- Differences: Earlier enrollment, less optimized GDMT

**INTERPRETATION:**
- Patient selection critical
- Optimize GDMT first
- Ensure moderate-severe MR
- Suitable valve anatomy

**EXPAND Study:**
- Real-world MitraClip outcomes
- >1000 patients
- High procedural success (>95%)
- Safety and efficacy similar to COAPT

**PASCAL:**
- Alternative device to MitraClip
- Similar outcomes
- May handle more anatomies

**EVEREST II:**
- MitraClip vs surgery for primary MR
- Surgery more effective but higher complication rate
- MitraClip reasonable for high-risk primary MR

### Transcatheter Mitral Valve Replacement (TMVR)

**Early Trials:**
- Tendyne, Intrepid
- Early experience promising
- For patients unsuitable for TEER
- Ongoing trials

## Guidelines Evolution

### 2020 ACC/AHA Valve Guidelines

**Major Changes:**

**TAVR Expansion:**
- TAVR Class I for patients >75
- TAVR Class IIa for patients 65-75
- Age lowered from previous guidelines

**MitraClip Expansion:**
- Class IIa for secondary MR
- Class I for primary MR at prohibitive surgical risk

**Tricuspid:**
- Transcatheter tricuspid repair Class IIb
- Surgery indicated for severe TR if other cardiac surgery needed

### 2021 ESC/EACTS Guidelines

**Similar to ACC/AHA with:**
- Emphasis on Heart Team approach
- Age cutoffs less rigid
- Comorbidities important in decision

## Controversies and Emerging Areas

### Bioprosthetic Valve Durability

**Concerns with TAVR:**
- Earlier structural degeneration than surgical bioprosthesis?
- Some data showing earlier degeneration in younger patients
- Long-term data (>10 years) limited

**Implications:**
- TAVR preferred for older patients (less concern about durability)
- SAVR preferred for younger patients (longevity priority)

### Valve-in-Valve Procedures

**TAVR in Failed Surgical Bioprosthesis:**
- Valve-in-Valve International Registry
- Good short-term outcomes
- Higher gradients than native valve TAVR
- Careful sizing critical

**Valve-in-Valve in Failed TAVR:**
- Possible but more challenging
- Early experience

### Bicuspid Aortic Valve

**Historically Excluded from TAVR Trials:**
- Concern about incomplete expansion, paravalvular leak

**Recent Data:**
- TAVR feasible in selected bicuspid valves
- Higher pacemaker rate
- Careful CT sizing essential
- Ongoing trials

### Coronary Access After TAVR

**Problem:**
- TAVR prosthesis can obstruct coronary ostia
- Difficult to access coronaries for future procedures

**Solutions:**
- Careful annular sizing
- Supra-annular valves may be better
- Coronary access techniques developing

### Medical Therapy for Valve Disease

**Statins for AS:**
- SALTIRE trial: No effect on AS progression
- Not recommended

**ACEI/ARB for AS:**
- Small studies suggested benefit
- Larger trials inconclusive
- May be considered for comorbidities

**BP Management for AR:**
- Afterload reduction improves outcomes
- ACEI/ARB, dihydropyridine CCB beneficial

## Special Populations

### Endocarditis Prophylaxis

**Current Guidelines:**
- Only for highest-risk patients:
  - Prosthetic valves
  - Previous endocarditis
  - Certain congenital heart diseases
  - Cardiac transplant with valve disease

**Not Recommended:**
- Native valve disease without above risk factors
- Changed from previous guidelines

### Pregnancy

**Bioprosthetic Valves:**
- Preferred in women of childbearing age
- May need replacement during childbearing years
- Warfarin not required

**Mechanical Valves:**
- Warfarin teratogenic (facial abnormalities, embryopathy)
- First trimester options:
  - Continue warfarin (risk to fetus)
  - Switch to heparin (risk to mother)
  - Replace before pregnancy (ideal)

**Regurgitation:**
- Usually tolerated well
- May worsen with volume expansion
- Monitor closely

### Renal Disease

**Valve Calcification:**
- Accelerated in renal failure
- Earlier AS onset
- More rapid progression

**TAVR vs SAVR:**
- TAVR: Contrast load concern
- SAVR: Surgical risk higher
- Individualize

### Liver Disease

**Coagulopathy:**
- Bleeding risk with anticoagulation (mechanical valves)
- Bioprosthetic preferred
- Careful surgical risk assessment

## Future Directions

**Transcatheter Technologies:**
- Tricuspid repair (TriClip, TriCinch)
- Transcatheter mitral valve replacement
- TAVR for bicuspid valves
- TAVR for pure AR (not yet FDA-approved)

**Imaging:**
- 3D printing for procedural planning
- CT-based procedural guidance
- Fusion imaging

**Medical Therapy:**
- Paclitaxel for valve degeneration (investigational)
- PCSK9 inhibitors for calcification (preclinical)

**Durability Improvements:**
- Novel anti-calcification treatments
- New tissue engineering approaches`,
      keyTerms: [
        { term: 'PARTNER trial', definition: 'Series of trials establishing TAVR efficacy across risk categories' },
        { term: 'COAPT trial', definition: 'Landmark trial showing MitraClip benefit in secondary MR' },
        { term: 'EXPAND study', definition: 'Real-world registry of MitraClip outcomes' },
        { term: 'bicuspid aortic valve', definition: 'Congenital valve with 2 leaflets instead of 3; more common in males' },
        { term: 'supra-annular', definition: 'Valve design that sits above the annulus; better coronary access' },
        { term: 'valve-in-valve', definition: 'TAVR inside failed surgical bioprosthesis' },
        { term: 'endocarditis prophylaxis', definition: 'Antibiotics before procedures to prevent valve infection' },
      ],
      clinicalNotes: `Key Practice Changes (2020-2024):

1. **TAVR First:** Preferred for AS in patients >75, reasonable 65-75
2. **SAVR Preferred:** For patients <65 (durability priority)
3. **MitraClip Standard:** For secondary MR symptomatic despite GDMT (COAPT)
4. **PMBC Preferred:** For suitable MS candidates (Wilkins <8)
5. **Endocarditis Prophylaxis:** Limited to high-risk prosthetic valves, previous endocarditis, certain CHD
6. **Coronary Artery Assessment:** Before valve surgery (PCI if needed)
7. **Low-Gradient AS:** Use dobutamine stress or CT calcium scoring to assess severity
8. **Watch for Progression:** Serial echo to time intervention before irreversible damage

Timing of Intervention:
- AS: Immediately when symptoms develop
- AR: Before irreversible LV dysfunction (EF <50%, LVESD ≥50 mm)
- MR (primary): Before LV dysfunction (EF <60%, LVESD ≥40 mm)
- MR (secondary): When symptomatic despite GDMT
- MS: When symptomatic or pulmonary hypertension develops`,
      patientCounselingPoints: [
        'If you have a mechanical valve, take warfarin exactly as prescribed and get regular INR checks',
        'Practice excellent dental hygiene to reduce endocarditis risk',
        'Ask your cardiologist if you need antibiotics before dental work',
        'Report any fever, chills, or feeling unwell promptly - could be valve infection',
        'Know your normal symptoms and report any changes',
        'If you have TAVR or bioprosthetic valve, you may not need long-term warfarin',
        'Stay active but discuss exercise limits with your cardiologist',
        'Women: Discuss pregnancy plans before becoming pregnant with valve disease',
        'If you have a prosthetic valve, carry a card identifying the type',
        'Attend all scheduled follow-up appointments and echocardiograms',
      ],
    },
  },

  media: [
    {
      id: 'valve-stenosis-regurgitation',
      type: 'diagram',
      filename: 'valve-stenosis-vs-regurgitation.svg',
      title: 'Stenosis vs Regurgitation',
      description: 'Normal, stenotic, and regurgitant valve function',
    },
    {
      id: 'aortic-stenosis-pathophysiology',
      type: 'diagram',
      filename: 'aortic-stenosis-pathophysiology.svg',
      title: 'Aortic Stenosis Pathophysiology',
      description: 'Hemodynamic changes in aortic stenosis',
    },
    {
      id: 'mitral-valve-anatomy',
      type: 'diagram',
      filename: 'mitral-valve-anatomy.svg',
      title: 'Mitral Valve Anatomy',
      description: 'Leaflets, chordae, annulus, papillary muscles',
    },
  ],

  citations: [
    {
      id: 'acc-aha-valve-2020',
      type: 'article',
      title: '2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease',
      authors: ['Otto CM', 'et al.'],
      source: 'Journal of the American College of Cardiology',
    },
    {
      id: 'esc-valve-2021',
      type: 'article',
      title: '2021 ESC/EACTS Guidelines for the Management of Valvular Heart Disease',
      authors: ['Baumgartner H', 'et al.'],
      source: 'European Heart Journal',
    },
    {
      id: 'statPearls-valve',
      type: 'website',
      title: 'Valvular Heart Disease',
      authors: ['Augustine D', 'Zafar F'],
      source: 'StatPearls Publishing',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470319/',
    },
  ],

  crossReferences: [
    { targetId: 'heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'cardiomyopathy', targetType: 'condition', relationship: 'related', label: 'Cardiomyopathy' },
    { targetId: 'congenital-heart', targetType: 'condition', relationship: 'related', label: 'Congenital Heart Disease' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'cardiac surgery', 'valve disease'],
    keywords: ['AS', 'AR', 'MS', 'MR', 'TAVR', 'MitraClip', 'stenosis', 'regurgitation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default valvularDiseaseContent;
