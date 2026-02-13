/**
 * Heart Murmurs - Physical Examination
 */

import { EducationalContent } from '../../types';

export const heartMurmurs: EducationalContent = {
  id: 'cardiovascular-heart-murmurs',
  type: 'concept',
  name: 'Heart Murmurs',
  alternateNames: ['Cardiac Murmurs', 'Heart Sounds', 'Valvular Murmurs'],

  levels: {
    1: {
      level: 1,
      summary: 'Heart murmurs are extra whooshing or swishing sounds heard when listening to the heart, caused by turbulent blood flow.',
      explanation: `## What Are Heart Murmurs?

A heart murmur is an extra sound heard when a doctor listens to your heart with a stethoscope. Instead of the normal "lub-dub" sound, there might be an extra whooshing, swishing, or blowing noise.

### Why Do Murmurs Happen?

Murmurs are caused by turbulent blood flow - when blood does not flow smoothly through the heart. This can happen because:

**Heart valves:**
- A valve might be too narrow (stenosis)
- A valve might leak (regurgitation)
- A valve might not close properly

**Holes in the heart:**
- Blood flows through abnormal openings
- Creates extra turbulence

**Increased blood flow:**
- Fever, anemia, or pregnancy
- Makes normal valves sound noisy

### Are Murmurs Always Bad?

**No! Many murmurs are harmless:**
- Children often have innocent murmurs
- Pregnant women may develop temporary murmurs
- Athletes may have flow murmurs
- These are called "innocent" or "functional" murmurs

**When murmurs need attention:**
- Loud or harsh murmurs
- Murmurs with symptoms (chest pain, shortness of breath)
- Murmurs that get worse over time
- Murmurs in adults that are new

### How Doctors Check Murmurs

- **Listen with stethoscope** - Different spots on the chest
- **Have you change position** - Sitting, lying down, leaning forward
- **Have you exercise briefly** - May change the sound
- **Order tests** - Echocardiogram to see the heart valves

### What Happens Next?

If a murmur is found:
- Many need no treatment
- Some need regular monitoring
- Some need medication
- A few may need surgery to fix a valve
- Most people with murmurs live normal, healthy lives`,

      keyTerms: [
        { term: 'murmur', definition: 'An extra sound heard when listening to the heart' },
        { term: 'turbulent flow', definition: 'Blood that does not flow smoothly, creating extra sounds' },
        { term: 'stenosis', definition: 'When a valve opening is too narrow' },
        { term: 'regurgitation', definition: 'When a valve leaks and blood flows backward' },
        { term: 'innocent murmur', definition: 'A harmless murmur that does not indicate heart disease' },
      ],

      analogies: [
        'A heart murmur is like a river - smooth water is quiet, but rapids make noise.',
        'A narrow valve is like putting your thumb over a garden hose - the water speeds up and makes noise.',
        'An innocent murmur is like a creaky floorboard - it makes noise but does not mean the house is falling down.',
      ],

      examples: [
        'A soft murmur in a healthy child is usually innocent and goes away with time.',
        'A loud murmur with chest pain might mean a valve problem needs fixing.',
        'Many pregnant women develop benign flow murmurs that disappear after delivery.',
      ],

      patientCounselingPoints: [
        'Most heart murmurs are not dangerous and do not need treatment.',
        'If you have a murmur, tell your dentist before procedures - you might need antibiotics.',
        'Regular checkups help monitor murmurs over time.',
        'Innocent murmurs often disappear as children grow.',
      ],
    },

    2: {
      level: 2,
      summary: 'Heart murmurs are classified by timing, intensity, pitch, shape, location, and radiation to distinguish innocent from pathological murmurs and identify underlying valvular disease.',
      explanation: `## Murmur Characteristics

### Timing

**Systolic Murmurs:**
- Occur between S1 and S2
- Most common type
- May be innocent or pathological

**Diastolic Murmurs:**
- Occur between S2 and next S1
- Almost always pathological
- Require investigation

**Continuous Murmurs:**
- Occur throughout cardiac cycle
- Examples: PDA, venous hum

### Intensity Grading (Levine Scale)

| Grade | Description |
|-------|-------------|
| I | Barely audible in quiet room |
| II | Quiet but immediately audible |
| III | Moderately loud, no thrill |
| IV | Loud with palpable thrill |
| V | Very loud, heard with edge of stethoscope |
| VI | Audible without stethoscope |

### Other Characteristics

**Pitch:**
- High-pitched: Regurgitant lesions
- Low-pitched: Stenotic lesions

**Shape:**
- Crescendo-decrescendo (diamond-shaped)
- Plateau (uniform intensity)
- Decrescendo (declining)

**Location and Radiation:**
- Where murmur is loudest
- Where sound travels (radiates)

### Common Innocent Murmurs

**Still Murmur (Children):**
- Vibratory, musical quality
- Left lower sternal border
- Disappears with sitting
- Age 2-7 years

**Venous Hum:**
- Continuous, superclavicular
- Right side > left
- Disappears with neck compression or supine

**Pulmonary Flow Murmur:**
- Systolic, pulmonic area
- Normal variant
- Louder with inspiration

### Pathological Murmur Patterns

**Aortic Stenosis:**
- Crescendo-decrescendo systolic
- Right upper sternal border
- Radiates to carotids
- Peaks in mid-systole

**Mitral Regurgitation:**
- Holosystolic, blowing
- Apex, radiates to axilla
- Constant intensity
- Does not change with respiration`,

      keyTerms: [
        { term: 'holosystolic', definition: 'Throughout the entire systolic phase' },
        { term: 'thrill', definition: 'Palpable vibration from turbulent blood flow' },
        { term: 'radiation', definition: 'Transmission of murmur sound to other areas' },
        { term: 'crescendo-decrescendo', definition: 'Getting louder then softer' },
        { term: 'Still murmur', definition: 'Common innocent murmur in children' },
      ],

      analogies: [
        'Murmur timing is like music - different notes happen at different times in the song.',
        'Murmur radiation is like a pebble in a pond - the waves travel outward from the source.',
      ],

      examples: [
        'Grade I-II systolic murmur at LLSB in a healthy child is likely Still murmur.',
        'Grade IV murmur with thrill suggests significant valvular disease.',
        'Any diastolic murmur requires echocardiographic evaluation.',
      ],

      clinicalNotes: 'All diastolic murmurs are pathological and warrant evaluation. Grade I-II short systolic murmurs in asymptomatic patients are often innocent.',
    },

    3: {
      level: 3,
      summary: 'Comprehensive murmur evaluation integrates clinical features, dynamic maneuvers, and differential diagnosis to distinguish valvular pathology and guide diagnostic testing.',
      explanation: `## Detailed Murmur Classification

### Systolic Ejection Murmurs

**Characteristics:**
- Crescendo-decrescendo shape
- Following ejection click
- Peaks in mid-systole

**Causes:**
- Aortic stenosis
- Pulmonary stenosis
- Hypertrophic cardiomyopathy
- Flow murmurs (increased cardiac output)

### Holosystolic Regurgitant Murmurs

**Characteristics:**
- Uniform intensity throughout systole
- High-pitched, blowing quality
- No gap after S1

**Causes:**
- Mitral regurgitation
- Tricuspid regurgitation
- Ventricular septal defect

### Diastolic Murmurs

**Early Diastolic (Decrescendo):**
- Aortic regurgitation
- Pulmonary regurgitation
- High-pitched, blowing
- Best heard leaning forward

**Mid-Diastolic (Rumble):**
- Mitral stenosis
- Tricuspid stenosis
- Low-pitched, rumbling
- Preceded by opening snap

### Dynamic Maneuvers

**Respiration:**
- Inspiration increases right-sided murmurs
- Expiration increases left-sided murmurs

**Valsalva:**
- Decreases most murmurs
- Increases HCM and MVP murmurs

**Standing:**
- Increases HCM and MVP murmurs
- Decreases most other murmurs

**Squatting:**
- Increases most murmurs (more preload)
- Decreases HCM and MVP murmurs

**Handgrip:**
- Increases regurgitant murmurs
- Decreases stenotic murmurs

### Differential Diagnosis by Location

**Apex (Mitral Area):**
- MR: Holosystolic, radiates to axilla
- MS: Mid-diastolic rumble
- Austin Flint: Functional MS from AR

**Left Sterna Border:**
- VSD: Holosystolic
- HCM: Systolic, harsh
- AS: May radiate here

**Right Upper Sterna Border:**
- AS: Classic location
- Radiates to carotids

**Left Upper Sterna Border:**
- PS: Systolic ejection
- Pulmonary flow murmur
- PR: Early diastolic`,

      keyTerms: [
        { term: 'Austin Flint murmur', definition: 'Functional mitral stenosis murmur from aortic regurgitation' },
        { term: 'Graham Steell murmur', definition: 'Functional pulmonary regurgitation from pulmonary hypertension' },
        { term: 'Carey Coombs murmur', definition: 'Mid-diastolic rumble in acute rheumatic fever' },
      ],

      analogies: [
        'Dynamic maneuvers are like adjusting the volume - some murmurs get louder, others softer.',
        'An Austin Flint murmur is like a echo - the original problem (AR) creates a second sound (MS-like).',
      ],

      examples: [
        'Murmur that increases with Valsalva suggests HCM or MVP.',
        'Murmur that changes with respiration helps identify right vs left origin.',
        'Squatting makes HCM murmur softer, AS murmur louder.',
      ],

      clinicalNotes: 'Maneuvers are essential for bedside differentiation of murmurs. Squatting increases preload and afterload; Valsalva decreases venous return.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of murmur assessment with echocardiographic correlation, severity grading, and management decisions for valvular heart disease.',
      explanation: `## Echocardiographic Correlation

**Indications for Echo:**
- Any diastolic murmur
- Grade >=3 systolic murmur
- Symptomatic patient
- Murmur with radiation
- New murmur in adult
- Murmur with other cardiac signs

**Severity Assessment:**

**Aortic Stenosis:**
- Mild: Area >1.5 cm2, mean gradient <20
- Moderate: Area 1.0-1.5, gradient 20-40
- Severe: Area <1.0, gradient >40

**Mitral Regurgitation:**
- Mild: Central jet <20% LA
- Moderate: 20-40%
- Severe: >40%, pulmonary vein reversal

**Aortic Regurgitation:**
- Mild: Jet width <25% LVOT
- Moderate: 25-65%
- Severe: >65%, holodiastolic flow reversal

### Clinical Decision Making

**Surgical Indications - AS:**
- Severe AS with symptoms
- Severe AS undergoing cardiac surgery
- Very severe AS (gradient >60) with low surgical risk

**Surgical Indications - MR:**
- Symptomatic severe MR
- Asymptomatic with LV dysfunction
- Asymptomatic with new AF or PAH

**Surgical Indications - AR:**
- Symptomatic severe AR
- Asymptomatic with LV dilation
- Asymptomatic with declining EF

### Intervention Options

**Surgical Valve Replacement:**
- Mechanical: Durable, requires anticoagulation
- Bioprosthetic: Limited durability, no anticoagulation
- Ross procedure: For young patients (pulmonary to aortic)

**Transcatheter Approaches:**
- TAVR: Transcatheter aortic valve replacement
- MitraClip: Percutaneous mitral repair
- Balloon valvuloplasty: For select stenotic valves

### Monitoring

**Asymptomatic Patients:**
- Mild disease: Echo every 3-5 years
- Moderate: Every 1-2 years
- Severe: Every 6-12 months

**Symptoms to Watch:**
- Dyspnea on exertion
- Reduced exercise tolerance
- Chest pain
- Syncope
- Heart failure signs`,

      keyTerms: [
        { term: 'TAVR', definition: 'Transcatheter aortic valve replacement' },
        { term: 'MitraClip', definition: 'Percutaneous device for mitral repair' },
        { term: 'PAH', definition: 'Pulmonary arterial hypertension' },
        { term: 'LVOT', definition: 'Left ventricular outflow tract' },
      ],

      clinicalNotes: 'Timing of intervention is crucial - operate too early risks complications; too late results in irreversible LV dysfunction.',
    },

    5: {
      level: 5,
      summary: 'Expert murmur evaluation in complex congenital disease, post-surgical patients, and advanced hemodynamic assessment.',
      explanation: `## Complex Valvular Disease

**Mixed Lesions:**
- Combined stenosis and regurgitation
- Multiple valve involvement
- Challenging hemodynamics
- Consider staged procedures

**Prosthetic Valve Assessment:**

**Normal Sounds:**
- Mechanical: Closing click
- Bioprosthetic: May be silent
- Mild physiologic regurgitation

**Abnormal Findings:**
- New murmur suggests dysfunction
- Thrombosis
- Pannus formation
- Endocarditis
- Paravalvular leak

### Congenital Murmurs

**Tetralogy of Fallot:**
- Systolic ejection murmur at LUSB
- Decreases with squatting
- Single S2
- Cyanosis

**Ventricular Septal Defect:**
- Holosystolic, harsh
- Left lower sternal border
- Large VSD: soft murmur, symptoms
- Small VSD: loud murmur, asymptomatic

**Atrial Septal Defect:**
- Wide fixed S2 split
- Systolic ejection murmur (increased flow)
- Diastolic tricuspid rumble
- Often asymptomatic until adulthood

### Endocarditis Prophylaxis

**Current Guidelines (Limited):**
- Only for highest risk patients
- Dental procedures with manipulation
- Not for routine GI/GU procedures

**High-Risk Conditions:**
- Prosthetic valves
- Prior endocarditis
- Certain congenital heart diseases
- Cardiac transplant with valvulopathy

### Advanced Imaging

**3D Echocardiography:**
- Better valve visualization
- Quantification of regurgitation
- Guidance for interventions

**Cardiac MRI:**
- Valve area quantification
- Flow quantification
- Tissue characterization

**CT Angiography:**
- Annular sizing for TAVR
- Coronary evaluation
- Calcification assessment

### Research Frontiers

**Polymer Valves:**
- Combining durability of mechanical
- No anticoagulation needed
- Under investigation

**Tissue Engineering:**
- Growing valves from cells
- Patient-specific tissue
- Future possibility`,

      keyTerms: [
        { term: 'pannus', definition: 'Tissue overgrowth on prosthetic valve' },
        { term: 'paravalvular leak', definition: 'Leak around rather than through valve' },
        { term: 'annular sizing', definition: 'Measuring valve ring for prosthesis' },
      ],

      clinicalNotes: 'Prosthetic valve endocarditis within first year suggests contamination at implantation; after one year, similar risk factors to native valves.',
    },
  },

  media: [],

  citations: [
    {
      id: 'acc-valvular',
      type: 'article',
      title: '2020 ACC/AHA Guideline for Management of Valvular Heart Disease',
      source: 'Circulation',
    },
  ],

  crossReferences: [
    { targetId: 'cardiovascular-cardiac-auscultation', targetType: 'process', relationship: 'parent', label: 'Cardiac Auscultation' },
    { targetId: 'cardiology-valvular-disease', targetType: 'topic', relationship: 'related', label: 'Valvular Disease' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['physical-examination', 'cardiology'],
    keywords: ['murmur', 'valve', 'auscultation', 'stenosis', 'regurgitation'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'cardiology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default heartMurmurs;
