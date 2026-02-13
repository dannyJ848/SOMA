/**
 * Valvular Heart Disease - Comprehensive Educational Content
 *
 * Covers aortic stenosis, aortic regurgitation, mitral stenosis, mitral regurgitation,
 * tricuspid valve disease, with pathophysiology, diagnosis, and management.
 */

import { EducationalContent } from '../../types';

export const valvularHeartDisease: EducationalContent = {
  id: 'condition-valvular-heart-disease',
  type: 'condition',
  name: 'Valvular Heart Disease',
  alternateNames: ['VHD', 'Heart Valve Disease', 'Valve Disorders'],
  hpoId: 'HP:0001654',

  levels: {
    1: {
      level: 1,
      summary: 'Valvular heart disease occurs when heart valves don\'t open or close properly, making it harder for your heart to pump blood.',
      explanation: `Your heart has four valves that act like one-way doors, making sure blood flows in the right direction. When these valves don't work properly, your heart has to work harder.

**The Four Heart Valves:**
1. **Aortic valve** - between left ventricle and aorta (to body)
2. **Mitral valve** - between left atrium and left ventricle
3. **Tricuspid valve** - between right atrium and right ventricle
4. **Pulmonary valve** - between right ventricle and lungs

**Two Main Problems:**

**Stenosis (Too Narrow):**
The valve doesn't open fully, like a door that only opens partway. Blood has to squeeze through a smaller opening, making the heart work harder.

**Regurgitation (Leaky):**
The valve doesn't close completely, allowing blood to leak backward. The heart has to pump extra to make up for the leak.

**Common Symptoms:**
- Shortness of breath
- Feeling tired or weak
- Swollen ankles or feet
- Dizziness or fainting
- Heart murmur (unusual sound heard with stethoscope)
- Chest discomfort

**What Causes Valve Problems:**
- Getting older (wear and tear)
- Being born with an abnormal valve
- Infections
- Rheumatic fever (more common in developing countries)
- Heart attacks

**Treatment Options:**
- Medications to help the heart and relieve symptoms
- Heart-healthy lifestyle
- Surgery or procedures to repair or replace the valve`,
      keyTerms: [
        { term: 'valve', definition: 'A flap in the heart that opens and closes to control blood flow' },
        { term: 'stenosis', definition: 'When a valve becomes stiff and doesn\'t open fully' },
        { term: 'regurgitation', definition: 'When a valve leaks and allows blood to flow backward' },
        { term: 'heart murmur', definition: 'An unusual swooshing sound from blood flowing through abnormal valves' },
      ],
      analogies: [
        'Heart valves are like one-way doors in a subway station - they let people through in one direction and prevent them from going back.',
        'A stenotic valve is like trying to pour water through a kinked hose.',
        'A leaky valve is like a door that won\'t close all the way - things keep going back through.',
      ],
      examples: [
        'An elderly person might develop aortic stenosis from calcium buildup on their valve, like lime scale in pipes.',
        'Someone might have a leaky mitral valve that causes them to feel short of breath when climbing stairs.',
      ],
    },
    2: {
      level: 2,
      summary: 'Valvular heart disease includes stenosis (obstruction) and regurgitation (incompetence) of heart valves, with left-sided lesions (aortic, mitral) being most clinically significant due to higher pressures and consequences for systemic circulation.',
      explanation: `## Overview of Valve Diseases

### Left-Sided Valve Disease (More Common, More Symptomatic)

**Aortic Stenosis (AS):**
- Most common valve lesion requiring intervention
- Narrowing of aortic valve outflow
- Classic triad: Angina, syncope, heart failure
- Causes: Calcific (elderly), bicuspid aortic valve, rheumatic

**Aortic Regurgitation (AR):**
- Incompetent aortic valve allows backflow
- Acute vs chronic (very different presentations)
- Causes: Bicuspid valve, endocarditis, aortic root dilation

**Mitral Stenosis (MS):**
- Almost always from rheumatic heart disease
- LA pressure elevation → pulmonary hypertension
- Atrial fibrillation common
- "Fish mouth" orifice appearance

**Mitral Regurgitation (MR):**
- Most common valve lesion overall
- Primary (valve problem) vs secondary (LV problem)
- Can be acute (ruptured chordae) or chronic

### Right-Sided Valve Disease (Less Common)

**Tricuspid Regurgitation (TR):**
- Usually functional (RV dilation)
- Primary causes: Endocarditis (IV drug use), carcinoid, Ebstein's

**Pulmonary Valve Disease:**
- Rare in adults
- Usually congenital

## Diagnosis

### Physical Exam

**Murmur Characteristics:**

| Valve Lesion | Timing | Location | Radiation | Character |
|--------------|--------|----------|-----------|-----------|
| AS | Systolic | RSB 2nd ICS | Carotids | Crescendo-decrescendo |
| AR | Diastolic | LSB | None | Decrescendo, blowing |
| MS | Diastolic | Apex | None | Rumbling with opening snap |
| MR | Systolic | Apex | Axilla | Holosystolic, blowing |
| TR | Systolic | LSB | None | Holosystolic, increases with inspiration |

**Other Findings:**
- AS: Pulsus parvus et tardus, S4, narrow pulse pressure
- AR: Wide pulse pressure, bounding pulses, head bobbing
- MS: Loud S1, opening snap, RV heave, AFib
- MR: Displaced PMI, S3, laterally displaced apex

### Echocardiography

**Key Measurements:**
- Valve area (stenosis)
- Regurgitant volume/fraction
- Pressure gradients
- Chamber size and function
- Pulmonary pressures

### Severity Grading

**Aortic Stenosis:**
| Severity | AVA (cm2) | Mean Gradient (mmHg) | Peak Velocity (m/s) |
|----------|-----------|---------------------|---------------------|
| Mild | >1.5 | <20 | <3.0 |
| Moderate | 1.0-1.5 | 20-40 | 3.0-4.0 |
| Severe | <1.0 | >40 | >4.0 |

**Mitral Regurgitation:**
| Severity | Regurgitant Volume (mL) | EROA (cm2) |
|----------|------------------------|------------|
| Mild | <30 | <0.2 |
| Moderate | 30-59 | 0.2-0.39 |
| Severe | ≥60 | ≥0.4 |

## Management Overview

**Medical Therapy:**
- Treat symptoms (diuretics, rate control)
- Treat associated conditions (AFib anticoagulation, HTN)
- No medications prevent valve disease progression

**Surgical Options:**
- Valve repair (preferred for MR)
- Surgical valve replacement (mechanical vs bioprosthetic)
- Transcatheter interventions (TAVR, MitraClip)

**Indications for Intervention:**
- Symptomatic severe disease
- Asymptomatic severe disease with LV dysfunction
- Undergoing other cardiac surgery`,
      keyTerms: [
        { term: 'aortic stenosis', definition: 'Narrowing of the aortic valve that obstructs blood flow from LV to aorta', pronunciation: 'ay-OR-tik steh-NO-sis' },
        { term: 'mitral regurgitation', definition: 'Leakage of the mitral valve allowing blood to flow back into LA during systole' },
        { term: 'rheumatic heart disease', definition: 'Valve damage from repeated episodes of rheumatic fever, causing scarring' },
        { term: 'valve area', definition: 'Measurement of how open a valve is; smaller area means more stenosis' },
        { term: 'EROA', definition: 'Effective regurgitant orifice area; measures severity of valve leakage' },
        { term: 'bioprosthetic valve', definition: 'Replacement valve made from animal tissue; doesn\'t require lifelong anticoagulation' },
      ],
      analogies: [
        'A stenotic valve is like a turnstile that only opens halfway - people (blood) back up waiting to get through.',
        'Pressure gradients across a stenotic valve are like the water pressure difference before and after a kink in a hose.',
      ],
    },
    3: {
      level: 3,
      summary: 'Valvular heart disease leads to pressure and/or volume overload of cardiac chambers with compensatory remodeling, and management decisions are guided by symptoms, hemodynamic severity, and impact on ventricular function.',
      explanation: `## Pathophysiology

### Pressure Overload (Stenosis)

**Aortic Stenosis:**
- LV faces increased afterload
- Concentric LV hypertrophy (wall thickening)
- Maintains wall stress (Law of Laplace)
- Eventually: Diastolic dysfunction → Systolic dysfunction
- Fixed cardiac output → symptoms with exertion

**Mitral Stenosis:**
- LA pressure rises to push blood through narrow valve
- LA dilation, atrial fibrillation
- Pulmonary venous hypertension
- Pulmonary arterial hypertension (reactive)
- RV failure eventually

### Volume Overload (Regurgitation)

**Aortic Regurgitation (Chronic):**
- LV receives normal forward flow + regurgitant flow
- Eccentric LV hypertrophy (dilation)
- Largest LV volumes of any heart disease
- Eventually: Systolic dysfunction

**Mitral Regurgitation (Chronic):**
- LA dilates to accommodate regurgitant volume
- LV dilates but wall stress initially normal (low-pressure LA)
- "Volume begets volume" - progressive dilation
- Eventually: LV dysfunction, pulmonary hypertension

### Acute vs Chronic Regurgitation

| Feature | Acute | Chronic |
|---------|-------|---------|
| Chamber dilation | None | Significant |
| Compensation | None | Remodeled |
| LA pressure (MR) | Very high | Mildly elevated |
| Pulmonary edema | Common | Less common |
| Hemodynamics | Severe | Compensated |
| Urgency | Emergency | Elective |

## Aortic Stenosis - Detailed

### Etiology

**Calcific (Degenerative):**
- Most common in elderly (>70 years)
- Similar risk factors to atherosclerosis
- Progressive, 0.1-0.3 cm2 decrease/year

**Bicuspid Aortic Valve:**
- 1-2% of population
- Earlier calcification (50-60 years)
- Associated with aortopathy (aneurysm risk)

**Rheumatic:**
- Usually combined with mitral disease
- Commissural fusion
- Declining in developed countries

### Natural History

**Latent Phase:**
- Long asymptomatic period
- Average: 10-20 years of progression
- Sudden death rare in asymptomatic patients

**Symptomatic Phase:**
- Once symptoms develop, prognosis poor without intervention
- Angina: Average survival 5 years
- Syncope: Average survival 3 years
- Heart failure: Average survival 2 years

### Low-Flow, Low-Gradient AS

**Classical Low-Flow (EF <50%):**
- Low EF reduces gradient despite severe stenosis
- Dobutamine stress echo to differentiate:
  - True severe AS: Valve area stays <1.0 cm2
  - Pseudo-severe AS: Valve area increases (valve opens)

**Paradoxical Low-Flow (EF ≥50%):**
- Small, hypertrophied LV with reduced stroke volume
- Gradient <40 mmHg despite severe AS
- Stroke volume index <35 mL/m2
- Often in elderly, hypertensive women

### Intervention Indications

**Symptomatic Severe AS:**
- Class I indication for AVR
- Symptoms: Dyspnea, angina, syncope

**Asymptomatic Severe AS with:**
- EF <50% (Class I)
- Very severe AS (Vmax >5 m/s, mean gradient >60) (Class IIa)
- Rapid progression (Class IIa)
- Undergoing other cardiac surgery (Class I)
- Exercise-induced symptoms or BP drop (Class IIa)

### SAVR vs TAVR

| Feature | SAVR | TAVR |
|---------|------|------|
| Approach | Sternotomy | Transfemoral/transapical |
| Recovery | 6-8 weeks | Days |
| Mortality (low risk) | ~1% | ~1% |
| Paravalvular leak | Rare | More common |
| Pacemaker need | 5% | 10-20% |
| Durability data | 20+ years | 8-10 years (ongoing) |
| Age consideration | Any | Increasingly all ages |

**Current Recommendations:**
- Low surgical risk: SAVR or TAVR (shared decision)
- Intermediate risk: TAVR or SAVR
- High/prohibitive risk: TAVR
- Age <65 or bicuspid: SAVR generally preferred

## Mitral Regurgitation - Detailed

### Classification

**Primary (Degenerative) MR:**
- Intrinsic valve pathology
- Mitral valve prolapse (most common)
- Ruptured chordae
- Rheumatic disease
- Endocarditis

**Secondary (Functional) MR:**
- LV disease causes papillary muscle displacement
- Valve leaflets structurally normal but don't coapt
- Ischemic cardiomyopathy
- Dilated cardiomyopathy

### Intervention Indications

**Primary MR:**
- Symptomatic severe MR: Class I for surgery
- Asymptomatic severe MR with:
  - EF 30-60% or LVESD ≥40 mm (Class I)
  - EF >60% and LVESD <40 mm (Class IIa if high repair likelihood)
  - New AFib or pulmonary hypertension (Class IIa)

**Secondary MR:**
- Optimize GDMT first
- Persistent severe MR despite GDMT:
  - CABG: Add mitral surgery if undergoing CABG (Class IIa)
  - Isolated: Consider MitraClip (COAPT criteria)

### COAPT Criteria (for MitraClip in Secondary MR)

- EF 20-50%
- LVESD ≤70 mm
- Severe MR (EROA ≥30 mm2)
- On maximally tolerated GDMT
- Not a candidate for surgery`,
      keyTerms: [
        { term: 'concentric hypertrophy', definition: 'Wall thickening without chamber dilation; response to pressure overload' },
        { term: 'eccentric hypertrophy', definition: 'Chamber dilation with proportional wall thickening; response to volume overload' },
        { term: 'low-flow low-gradient AS', definition: 'Severe AS with reduced gradient due to low stroke volume' },
        { term: 'TAVR', definition: 'Transcatheter aortic valve replacement; minimally invasive valve replacement' },
        { term: 'MitraClip', definition: 'Transcatheter edge-to-edge repair device for mitral regurgitation' },
        { term: 'COAPT trial', definition: 'Landmark trial showing MitraClip benefit in secondary MR with specific criteria' },
      ],
      clinicalNotes: 'In severe AS, symptoms mark a critical transition - intervene promptly. Low-flow low-gradient AS requires dobutamine stress echo for proper diagnosis. For MR, repair is preferred over replacement when feasible. Secondary MR requires GDMT optimization before intervention.',
    },
    4: {
      level: 4,
      summary: 'Advanced valve management requires integration of multimodality imaging, hemodynamic assessment, interventional options including transcatheter therapies, and consideration of valve-specific factors including durability, anticoagulation, and patient-specific considerations.',
      explanation: `## Advanced Imaging

### Cardiac MRI in VHD

**Regurgitation Quantification:**
- Phase contrast imaging
- Regurgitant volume and fraction
- More accurate than echo in some settings

**Tissue Characterization:**
- Late gadolinium enhancement: Fibrosis
- T1 mapping: Diffuse fibrosis
- Prognostic in AS (myocardial fibrosis predicts outcomes)

**Aortic Assessment:**
- Aortopathy with bicuspid valve
- Aneurysm surveillance

### CT Imaging

**Pre-TAVR Planning:**
- Annular sizing (perimeter, area)
- Coronary height
- Valve calcification pattern
- Access route assessment
- LVOT assessment

**Valve-in-Valve Planning:**
- Original prosthesis identification
- True ID measurement
- Coronary obstruction risk

### 3D Echocardiography

**Mitral Valve Assessment:**
- Detailed leaflet anatomy
- Prolapse localization (Carpentier classification)
- En-face view for surgical planning

**Tricuspid Valve:**
- Complex anatomy better visualized
- Annular sizing

## Valve Prostheses

### Mechanical vs Bioprosthetic

| Feature | Mechanical | Bioprosthetic |
|---------|------------|---------------|
| Durability | Lifetime | 10-20 years |
| Anticoagulation | Lifelong warfarin | 3-6 months (usually) |
| Thromboembolism | Higher without AC | Lower |
| Structural degeneration | No | Yes (eventual) |
| Sound | Click audible | Silent |

**Decision Factors:**
- Age: <50 often mechanical, >65 often bio
- Anticoagulation tolerance
- Desire for future pregnancy
- Lifestyle considerations
- Potential for future TAVR-in-valve

### Valve Selection Guidelines (2020)

**Mechanical:**
- <50 years old
- Already on anticoagulation
- Long life expectancy
- No contraindication to warfarin
- Patient preference

**Bioprosthetic:**
- >65 years old
- Contraindication to anticoagulation
- Limited life expectancy
- Desire to avoid anticoagulation
- Women wanting pregnancy

### Prosthetic Valve Complications

**Structural Valve Deterioration:**
- Stenosis or regurgitation over time
- Bioprosthetic: 10-30% at 10 years
- Risk factors: Young age, renal failure, mitral position

**Prosthetic Valve Endocarditis:**
- Early (<60 days): S. aureus, coagulase-neg staph
- Late: Similar to native valve
- Higher mortality than native valve IE
- Often requires surgery

**Valve Thrombosis:**
- More common with mechanical valves
- Subtherapeutic anticoagulation
- Presentations: Embolism, valve dysfunction
- Treatment: Intensify anticoagulation vs surgery

**Paravalvular Leak:**
- More common after TAVR
- May cause hemolysis, heart failure
- Percutaneous closure options

## Transcatheter Valve Interventions

### TAVR Advanced Concepts

**Valve Types:**
- Balloon-expandable (Edwards SAPIEN)
- Self-expanding (Medtronic CoreValve/Evolut)
- Mechanically expandable (Boston Lotus)

**Access Routes:**
- Transfemoral (preferred)
- Transapical
- Transaortic
- Subclavian/axillary
- Transcaval

**Complications:**
- Stroke: 1-3%
- Pacemaker: 10-20% (higher with self-expanding)
- Paravalvular leak: 5-10% moderate-severe
- Vascular complications: 5-10%
- Coronary obstruction: <1%

**Bicuspid AS and TAVR:**
- Higher paravalvular leak
- Requires careful sizing
- Newer-generation valves performing better
- Included in current guidelines for high-risk patients

### Transcatheter Mitral Interventions

**MitraClip (TEER):**
- Edge-to-edge repair
- Creates double orifice
- FDA approved for primary and secondary MR
- COAPT: Mortality benefit in secondary MR
- MITRA-FR: No benefit (different patient selection)

**TMVR (Transcatheter Mitral Valve Replacement):**
- Emerging technology
- Challenges: Large annulus, variable anatomy, LVOT obstruction
- Valve-in-ring, valve-in-MAC options
- Multiple devices in trials

### Transcatheter Tricuspid Interventions

**Growing Field:**
- TEER (TriClip): Edge-to-edge repair
- Annuloplasty devices
- TTVI (Transcatheter tricuspid valve implantation)

**TRILUMINATE Trial:**
- TriClip reduced TR severity
- Improved quality of life
- FDA approval expected

## Special Populations

### Pregnancy and VHD

**High-Risk Lesions:**
- Severe AS (symptoms, EF)
- Severe MS
- Mechanical prostheses (anticoagulation challenge)

**Anticoagulation:**
- Warfarin: Teratogenic (6-12 weeks)
- LMWH: Less effective for mechanical valves
- Heparin: Alternative but requires monitoring
- Strategy: Balance maternal and fetal risk

**Management:**
- Pre-pregnancy intervention for severe lesions
- Monitoring and early delivery if needed
- Multidisciplinary team essential

### Endocarditis Prophylaxis

**Who Needs Prophylaxis:**
- Prosthetic heart valves
- Previous endocarditis
- Specific congenital heart disease
- Cardiac transplant with valvulopathy

**Procedures Requiring Prophylaxis:**
- Dental procedures involving gingival manipulation
- NOT routine GI/GU procedures

**Antibiotic:**
- Amoxicillin 2g PO (or alternatives if allergic)`,
      keyTerms: [
        { term: 'Carpentier classification', definition: 'System describing mitral valve dysfunction by leaflet motion type' },
        { term: 'valve-in-valve', definition: 'TAVR implanted inside failing surgical bioprosthesis' },
        { term: 'structural valve deterioration', definition: 'Progressive calcification and dysfunction of bioprosthetic valves over time' },
        { term: 'TEER', definition: 'Transcatheter edge-to-edge repair (MitraClip, TriClip)' },
        { term: 'paravalvular leak', definition: 'Regurgitation around (not through) a prosthetic valve' },
        { term: 'MITRA-FR', definition: 'Trial showing no benefit of MitraClip in secondary MR with different criteria than COAPT' },
      ],
      clinicalNotes: 'TAVR is now appropriate for all surgical risk categories per guidelines. For MitraClip in secondary MR, COAPT criteria matter - patient selection is key. Consider bioprosthetic valve-in-valve as future option when selecting initial prosthesis. Mechanical valves require meticulous anticoagulation monitoring.',
    },
    5: {
      level: 5,
      summary: 'Contemporary valvular heart disease management integrates advanced imaging, expanding transcatheter options, precision in patient selection, and evolving evidence on durability and outcomes, with emerging therapies targeting native valve repair and earlier intervention.',
      explanation: `## Current Guidelines and Trials

### 2020/2021 ACC/AHA VHD Guidelines

**Key Updates:**
1. TAVR expanded to low-risk patients
2. Stages of VHD formalized (A through D)
3. MitraClip for secondary MR (COAPT criteria)
4. Enhanced role of Heart Valve Team
5. Lifetime management concept emphasized

### Landmark Trials Summary

**Aortic Stenosis:**
- PARTNER 3, Evolut Low Risk: TAVR non-inferior in low risk
- PARTNER 3 5-year: Comparable durability
- NOTION: Long-term TAVR vs SAVR follow-up ongoing

**Mitral Regurgitation:**
- COAPT: MitraClip reduced mortality in secondary MR
- MITRA-FR: No benefit (less sick patients, less MR reduction)
- Reconciliation: Patient selection and procedural success matter

**Tricuspid Regurgitation:**
- TRILUMINATE Pivotal: TriClip improved outcomes
- Multiple devices in development
- Growing recognition of TR importance

## Valve Durability and Long-term Outcomes

### TAVR Durability

**Current Data (8-10 years):**
- Structural valve deterioration: 5-10%
- Hemodynamic valve deterioration: 10-15%
- Comparable to surgical bioprostheses
- Longer follow-up ongoing

**Factors Affecting Durability:**
- Valve crimping and deployment
- Patient factors (age, renal function)
- Anticoagulation/antiplatelet strategy
- Leaflet design and materials

### Lifetime Management

**Young Patient Considerations:**
- First valve choice affects all subsequent options
- Mechanical: Commits to anticoagulation
- Bioprosthetic: Plans for reintervention
- TAVR-in-valve: Feasible but coronary access concerns
- Ross procedure: Avoids prosthesis initially

**Ross Procedure:**
- Pulmonary autograft to aortic position
- Pulmonary homograft to pulmonary position
- Living tissue, potential for growth
- Complex operation, expertise-dependent
- Long-term neoaortic root dilation concern

## Advanced Transcatheter Therapies

### Newer TAVR Technologies

**Next-Generation Valves:**
- Improved sealing (reduced PVL)
- Retrievable/repositionable
- Lower profile
- Conduction system-sparing designs

**Cerebral Protection:**
- Sentinel device
- Reduces stroke debris
- Guidelines: May be considered (IIb)

### TMVR Progress

**Current Challenges:**
- Large delivery systems
- LVOT obstruction risk
- Annular sizing variability
- Anchoring in mitral annulus

**Specific Populations:**
- Valve-in-ring: More predictable
- Valve-in-MAC: High risk but feasible
- Native TMVR: Multiple devices in trials

### Tricuspid Transcatheter Therapies

**TEER (TriClip, PASCAL):**
- Reduces TR severity
- Procedural success 70-90%
- Symptom improvement
- Mortality data awaited

**Annuloplasty Systems:**
- Cardioband
- Millipede
- Ring-based approaches

**TTVR:**
- Large valves needed
- RV lead management
- Multiple devices in development

## Emerging Concepts

### Cardiac Amyloidosis and AS

**Association:**
- Older patients with AS may have coexistent amyloid
- Both cause LVH, diastolic dysfunction
- Amyloid may affect surgical risk
- Screen with: Low voltage ECG, LGE pattern, bone scan

**Implications:**
- TAVR may be preferred (avoid sternotomy)
- TTR amyloid has treatment options (tafamidis)
- Prognostic significance

### Leaflet Thrombosis (HALT)

**Definition:**
- Subclinical leaflet thickening on CT
- Can occur with surgical and transcatheter valves
- Reduced leaflet motion (RELM)

**Clinical Significance:**
- Unclear if affects durability
- Associated with elevated gradients
- May resolve with anticoagulation
- Current: Antiplatelet standard; anticoagulation if high risk

### Earlier Intervention Trials

**EVOLVED (Aortic Stenosis):**
- Intervention for asymptomatic moderate-severe AS
- Exercise testing abnormalities
- Testing earlier intervention paradigm

**RECOVERY (Mitral Regurgitation):**
- Earlier surgery in asymptomatic severe MR
- May prevent irreversible LV remodeling

### Functional Tricuspid Regurgitation

**Growing Recognition:**
- Secondary TR common in left heart disease
- Progressive and harmful
- Previously undertreated ("forgotten valve")

**Intervention Timing:**
- Earlier intervention may prevent RV failure
- Transcatheter options making treatment accessible
- Guidelines evolving

## Quality and Outcomes

### Heart Valve Centers of Excellence

**Components:**
- Multidisciplinary Heart Valve Team
- High volume (≥50 TAVR/year minimum)
- Full range of interventional options
- Imaging expertise
- Outcomes tracking

### Shared Decision-Making

**Elements:**
- Patient values and preferences
- Life expectancy considerations
- Risk/benefit of options
- Anticoagulation implications
- Recovery and rehabilitation
- Future reintervention potential

### Follow-up Recommendations

**Post-Intervention:**
- Baseline echo post-procedure
- Annual clinical assessment
- Echo if symptoms or murmur change
- CT for TAVR durability assessment (research)

## Future Directions

1. **Living Tissue Valves:** Bioengineered valves with regenerative potential
2. **Polymer Valves:** Non-biologic, potentially longer lasting
3. **AI-Guided Planning:** Automated CT analysis for sizing
4. **Minimally Invasive Surgery:** Smaller incisions, faster recovery
5. **Gene Therapy:** For calcific aortic stenosis prevention
6. **Drug-Eluting TAVR:** Reduce leaflet thrombosis/degeneration
7. **Native Mitral Valve Repair:** Transcatheter chordal repair, annuloplasty`,
      keyTerms: [
        { term: 'HALT', definition: 'Hypoattenuated leaflet thickening; subclinical thrombosis on prosthetic valve leaflets' },
        { term: 'RELM', definition: 'Reduced leaflet motion; functional consequence of leaflet thrombosis' },
        { term: 'Heart Valve Team', definition: 'Multidisciplinary group including interventionalists, surgeons, imagers for valve decisions' },
        { term: 'Ross procedure', definition: 'Pulmonary autograft to aortic position; avoids prosthesis in young patients' },
        { term: 'Valve-in-MAC', definition: 'TMVR implanted in severe mitral annular calcification' },
        { term: 'TTR amyloidosis', definition: 'Transthyretin cardiac amyloidosis; increasingly recognized in elderly AS patients' },
      ],
      clinicalNotes: `Key clinical pearls for valvular heart disease:

1. **AS Staging**: At-risk (A) → Progressive (B) → Severe asymptomatic (C) → Symptomatic (D)
2. **TAVR Expansion**: Now appropriate across risk spectrum; consider lifetime management
3. **Low-Flow AS**: Don't miss it; dobutamine stress echo for diagnosis
4. **Secondary MR**: COAPT criteria predict MitraClip benefit; GDMT optimization first
5. **Cardiac Amyloid**: Screen in older AS patients; affects prognosis and treatment
6. **Tricuspid Disease**: No longer the "forgotten valve"; transcatheter options emerging
7. **Durability**: TAVR showing good mid-term durability; long-term data accumulating
8. **Young Patients**: Consider lifetime valve management; mechanical vs bio vs Ross
9. **Pregnancy**: Pre-pregnancy intervention for severe lesions; multidisciplinary care
10. **Endocarditis Prophylaxis**: Only for prosthetic valves and specific dental procedures`,
    },
  },

  media: [
    {
      id: 'valve-anatomy-diagram',
      type: 'diagram',
      filename: 'heart-valve-anatomy.svg',
      title: 'Heart Valve Anatomy',
      description: 'Location and structure of the four heart valves',
    },
    {
      id: 'valve-hemodynamics',
      type: 'diagram',
      filename: 'valve-pressure-gradients.svg',
      title: 'Valve Hemodynamics',
      description: 'Pressure gradients in stenosis and regurgitation',
    },
    {
      id: 'tavr-procedure',
      type: 'diagram',
      filename: 'tavr-procedure-steps.svg',
      title: 'TAVR Procedure',
      description: 'Steps of transcatheter aortic valve replacement',
    },
  ],

  citations: [
    {
      id: 'acc-aha-vhd-2020',
      type: 'article',
      title: '2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease',
      authors: ['Otto CM', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000000923',
    },
    {
      id: 'coapt-trial',
      type: 'article',
      title: 'Transcatheter Mitral-Valve Repair in Patients with Heart Failure',
      authors: ['Stone GW', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'braunwald-vhd',
      type: 'textbook',
      title: 'Braunwald\'s Heart Disease',
      source: 'Elsevier',
      chapter: 'Valvular Heart Disease',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'condition-atrial-fibrillation', targetType: 'condition', relationship: 'related', label: 'Atrial Fibrillation' },
    { targetId: 'procedure-cardiac-catheterization', targetType: 'topic', relationship: 'related', label: 'Catheterization/TAVR' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['valvular disease', 'interventional cardiology', 'cardiac surgery'],
    keywords: ['aortic stenosis', 'mitral regurgitation', 'TAVR', 'MitraClip', 'valve replacement', 'murmur'],
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

export default valvularHeartDisease;
