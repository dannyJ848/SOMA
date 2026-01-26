/**
 * Cardiomyopathies - Comprehensive Educational Content
 *
 * Covers dilated, hypertrophic, restrictive, and arrhythmogenic cardiomyopathies,
 * including pathophysiology, genetics, diagnosis, and management.
 */

import { EducationalContent } from '../../types';

export const cardiomyopathies: EducationalContent = {
  id: 'condition-cardiomyopathies',
  type: 'condition',
  name: 'Cardiomyopathies',
  alternateNames: ['DCM', 'HCM', 'RCM', 'ARVC', 'Heart Muscle Disease'],
  hpoId: 'HP:0001638',

  levels: {
    1: {
      level: 1,
      summary: 'Cardiomyopathy means the heart muscle itself is diseased, making it harder for the heart to pump blood properly.',
      explanation: `Your heart is mostly made of muscle. When that muscle gets sick or damaged, it is called cardiomyopathy. This is different from blocked arteries or valve problems - the muscle itself has the problem.

**Types of Cardiomyopathy:**

1. **Dilated Cardiomyopathy (Stretched Heart)**
The heart becomes weak and stretched out like a worn-out balloon. It cannot squeeze hard enough to pump blood well.

2. **Hypertrophic Cardiomyopathy (Thick Heart)**
The heart muscle grows too thick, especially the wall between the chambers. This can block blood from leaving the heart.

3. **Restrictive Cardiomyopathy (Stiff Heart)**
The heart muscle becomes stiff and cannot relax properly to fill with blood.

4. **Arrhythmogenic Cardiomyopathy (Electrical Problems)**
The heart muscle is replaced by scar and fat tissue, causing dangerous heart rhythm problems.

**What Causes Cardiomyopathy:**
- Genes passed down in families
- Infections that damage the heart
- Alcohol or drug abuse
- Certain medications (some cancer treatments)
- Diabetes
- High blood pressure (over time)
- Sometimes the cause is unknown

**Symptoms:**
- Feeling tired and weak
- Shortness of breath
- Swelling in legs and feet
- Dizziness or fainting
- Heart palpitations (feeling heart racing)

**Treatment:**
- Medications to help the heart work better
- Devices to control heart rhythm (pacemakers, defibrillators)
- In severe cases, heart transplant may be needed`,
      keyTerms: [
        { term: 'cardiomyopathy', definition: 'A disease of the heart muscle itself' },
        { term: 'dilated', definition: 'When something is stretched out larger than normal' },
        { term: 'hypertrophic', definition: 'When something grows thicker than normal' },
        { term: 'defibrillator', definition: 'A device that can shock the heart back to a normal rhythm' },
      ],
      analogies: [
        'Dilated cardiomyopathy is like a stretched-out rubber band that has lost its snap.',
        'Hypertrophic cardiomyopathy is like having walls so thick in a room that there is not enough space inside.',
        'Restrictive cardiomyopathy is like a leather bag that has become so stiff it will not open properly.',
      ],
      examples: [
        'A young athlete who suddenly faints during exercise might have hypertrophic cardiomyopathy.',
        'Someone who drinks heavily for many years might develop dilated cardiomyopathy.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiomyopathies are primary diseases of cardiac muscle classified by morphology and function: dilated (enlarged, weak), hypertrophic (thickened), restrictive (stiff), and arrhythmogenic (fibrofatty replacement).',
      explanation: `## Overview

Cardiomyopathies are diseases of the myocardium that impair cardiac function. They are classified by their structural and functional abnormalities rather than their cause.

## Classification

| Type | Chamber Size | Wall | Function | Main Problem |
|------|-------------|------|----------|--------------|
| Dilated (DCM) | Enlarged | Thin | Weak squeeze | Systolic failure |
| Hypertrophic (HCM) | Normal/small | Thick | Stiff | Diastolic dysfunction, obstruction |
| Restrictive (RCM) | Normal | Normal/thick | Very stiff | Diastolic failure |
| Arrhythmogenic (ACM) | Varies | Fat/scar | Arrhythmias | Sudden death |

## Dilated Cardiomyopathy (DCM)

**What Happens:**
- Left ventricle (and often right) dilates
- Wall becomes thin
- Ejection fraction drops (<40%)
- Heart failure develops

**Common Causes:**
- Idiopathic (30-40% are genetic)
- Ischemic (coronary artery disease)
- Alcohol
- Viral myocarditis
- Peripartum
- Chemotherapy (anthracyclines)
- Familial/genetic

**Symptoms:**
- Heart failure symptoms (dyspnea, edema)
- Fatigue
- Palpitations
- Risk of sudden death from arrhythmia

**Treatment:**
- Standard heart failure therapy (GDMT)
- Consider ICD for EF ≤35%
- Treat underlying cause if identified

## Hypertrophic Cardiomyopathy (HCM)

**What Happens:**
- Asymmetric septal hypertrophy (usually)
- Wall thickness ≥15 mm without clear cause
- May have outflow obstruction (HOCM)
- Diastolic dysfunction

**Genetics:**
- Most common genetic heart disease
- Autosomal dominant
- Sarcomere gene mutations (MYH7, MYBPC3 most common)

**Symptoms:**
- May be asymptomatic
- Dyspnea on exertion
- Chest pain
- Syncope (especially with exertion)
- Sudden cardiac death (most feared)

**Obstruction in HOCM:**
- Septal hypertrophy + SAM (systolic anterior motion of mitral valve)
- Creates dynamic LVOT obstruction
- Gradient increases with: Valsalva, standing, exercise
- Gradient decreases with: Squatting, handgrip

**Treatment:**
- Beta-blockers or non-dihydropyridine CCBs (first-line)
- Avoid dehydration and vasodilators
- Septal reduction therapy for refractory symptoms
- ICD for high-risk patients

## Restrictive Cardiomyopathy (RCM)

**What Happens:**
- Stiff ventricular walls
- Impaired diastolic filling
- Normal or near-normal EF
- Elevated filling pressures

**Causes:**
- Amyloidosis (most common)
- Sarcoidosis
- Hemochromatosis (iron overload)
- Radiation
- Endomyocardial fibrosis
- Idiopathic

**Key Features:**
- Prominent y-descent on JVP
- May have Kussmaul sign
- BNP very elevated
- Must distinguish from constrictive pericarditis

## Arrhythmogenic Cardiomyopathy (ACM/ARVC)

**What Happens:**
- Fibrofatty replacement of myocardium
- Classically right ventricle (ARVC)
- Can involve both ventricles or LV dominant
- Substrate for ventricular arrhythmias

**Genetics:**
- Desmosomal gene mutations
- Autosomal dominant with variable penetrance

**Presentation:**
- Ventricular arrhythmias
- Palpitations
- Syncope
- Sudden cardiac death (especially young athletes)
- Later: Right heart failure

**Diagnosis:**
- Task Force Criteria (major and minor)
- MRI shows fibrofatty replacement, RV dilation
- ECG: Epsilon waves, T-wave inversions V1-V3

**Treatment:**
- ICD for high-risk patients
- Avoid competitive sports
- Beta-blockers
- Antiarrhythmic drugs
- Catheter ablation for VT`,
      keyTerms: [
        { term: 'sarcomere', definition: 'The basic contractile unit of heart muscle; mutations cause HCM' },
        { term: 'systolic anterior motion (SAM)', definition: 'Abnormal forward movement of mitral valve causing LVOT obstruction in HCM' },
        { term: 'amyloidosis', definition: 'Disease where abnormal proteins deposit in tissues including the heart' },
        { term: 'desmosome', definition: 'Cell-cell junction proteins; mutations cause arrhythmogenic cardiomyopathy' },
        { term: 'epsilon wave', definition: 'Small wave after QRS on ECG, sign of arrhythmogenic cardiomyopathy' },
        { term: 'ejection fraction', definition: 'Percentage of blood pumped out with each heartbeat; measures heart strength' },
      ],
      analogies: [
        'DCM is like a water balloon filled too full - it is stretched and weak.',
        'HCM obstruction is like having a swinging door that blocks the hallway when people try to walk through.',
        'RCM is like a thick-walled thermos that will not expand to accept more liquid.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiomyopathies involve distinct pathophysiological mechanisms with genetic underpinnings, requiring phenotype-specific management strategies including pharmacotherapy, devices, and interventional approaches.',
      explanation: `## Dilated Cardiomyopathy - Detailed

### Pathophysiology

**Molecular Mechanisms:**
- Sarcomere mutations (titin TTN most common in DCM)
- Cytoskeletal protein defects
- Nuclear envelope mutations (laminopathies)
- Disrupted excitation-contraction coupling

**Remodeling Process:**
1. Initial myocyte injury or stress
2. Compensatory hypertrophy and dilation
3. Neurohormonal activation (RAAS, SNS)
4. Progressive chamber dilation
5. Functional mitral regurgitation
6. End-stage heart failure

### Etiologic Classification

**Genetic (30-50%):**
- TTN (titin): Most common, truncating variants
- LMNA (lamin A/C): Conduction disease, high arrhythmia risk
- SCN5A: Sodium channel, overlap with Brugada
- Sarcomere genes: Overlap with HCM

**Acquired:**
- Ischemic (distinguish from primary DCM)
- Toxic: Alcohol, cocaine, anthracyclines, trastuzumab
- Inflammatory: Myocarditis, HIV, Chagas
- Metabolic: Thyroid, diabetes
- Tachycardia-mediated: AFib, PVCs
- Peripartum

### Diagnosis

**Echocardiography:**
- LV dilation (LVEDVI > 75 mL/m2)
- Reduced EF (<40%)
- Global hypokinesis
- Functional MR

**Cardiac MRI:**
- Gold standard for volumes/function
- Mid-wall fibrosis (LGE) - prognostic
- Exclude ischemic etiology

**Genetic Testing:**
- Recommended for all DCM
- Cascade screening of family members
- Impacts prognosis (LMNA high risk)

### Management

**GDMT for HFrEF:**
- ARNi or ACEi/ARB
- Beta-blocker
- MRA
- SGLT2 inhibitor
- Diuretics as needed

**Devices:**
- ICD if EF ≤35% after 3 months GDMT
- CRT if LBBB + QRS ≥150 ms

**Treat Underlying Cause:**
- Alcohol cessation
- Revascularization if ischemic
- Immunosuppression if active myocarditis

## Hypertrophic Cardiomyopathy - Detailed

### Pathophysiology

**Sarcomere Dysfunction:**
- Mutations cause inefficient contraction
- Increased energy cost
- Compensatory hypertrophy
- Myocyte disarray, fibrosis

**LVOT Obstruction Mechanism:**
- Basal septal hypertrophy narrows outflow
- Venturi effect pulls mitral valve forward (SAM)
- Dynamic obstruction increases with:
  - Decreased preload (dehydration, Valsalva)
  - Decreased afterload (vasodilators)
  - Increased contractility

**Diastolic Dysfunction:**
- Increased wall thickness
- Myocardial stiffness
- Elevated filling pressures

### Diagnosis

**Echocardiography:**
- Wall thickness ≥15 mm (or ≥13 mm with family history)
- Asymmetric septal hypertrophy (typical)
- SAM of mitral valve
- LVOT gradient (provocable or resting)
- Diastolic dysfunction

**Cardiac MRI:**
- LGE for fibrosis (prognostic for SCD)
- Accurate wall thickness measurement
- Apical variants better visualized

**Genetic Testing:**
- Sarcomere genes in 60% of familial HCM
- MYH7, MYBPC3 most common
- Cascade screening of first-degree relatives

### Risk Stratification for SCD

**Major Risk Factors:**
- Family history of SCD
- Unexplained syncope
- Massive hypertrophy (≥30 mm)
- NSVT on Holter
- Abnormal BP response to exercise

**ESC Risk Calculator:**
- 5-year SCD risk estimate
- Inputs: Age, wall thickness, LA size, gradient, family history, NSVT, syncope

**ICD Indications:**
- Prior cardiac arrest or sustained VT (Class I)
- 5-year risk ≥6% per ESC calculator (Class IIa)
- Massive hypertrophy, LMNA mutation, extensive LGE

### Treatment

**Symptomatic Management:**
- Beta-blockers (first-line)
- Verapamil (if beta-blocker intolerant)
- Disopyramide (add for refractory obstruction)
- Avoid vasodilators, diuretics, digoxin

**Septal Reduction Therapy:**
Indications: Symptoms despite medical therapy + gradient ≥50 mmHg

| Approach | Description | Pros | Cons |
|----------|-------------|------|------|
| Surgical myectomy | Remove septal muscle | Excellent results, MV repair | Open heart surgery |
| Alcohol septal ablation | Infarct septum via LAD septal branch | Less invasive | Conduction block, late arrhythmia |

**Mavacamten:**
- Cardiac myosin inhibitor
- Reduces contractility and obstruction
- EXPLORER-HCM: Improved symptoms, gradient
- FDA approved for obstructive HCM

## Restrictive Cardiomyopathy

### Cardiac Amyloidosis

**Types:**
- AL (light chain): Plasma cell dyscrasia
- ATTR-wt (wild-type TTR): Senile/wild-type, elderly
- ATTR-m (mutant TTR): Hereditary, various mutations

**Diagnosis:**
- Echo: Thick walls, diastolic dysfunction, apical sparing on strain
- Bone scintigraphy (PYP): Positive in ATTR (not AL)
- Cardiac MRI: Diffuse LGE, T1 elevation
- Tissue biopsy if needed (fat pad, endomyocardial)

**Treatment:**
- AL: Chemotherapy targeting plasma cells
- ATTR: Tafamidis (TTR stabilizer) - reduces mortality
- Supportive: Diuretics (cautious), avoid beta-blockers in AL

### Cardiac Sarcoidosis

**Features:**
- Granulomatous inflammation
- Conduction abnormalities
- Ventricular arrhythmias
- Heart failure (DCM or RCM phenotype)

**Diagnosis:**
- PET: FDG uptake in inflamed myocardium
- MRI: LGE in non-coronary distribution
- Biopsy (endomyocardial or extracardiac)

**Treatment:**
- Immunosuppression (steroids, then steroid-sparing)
- ICD for ventricular arrhythmias
- Pacemaker for conduction disease`,
      keyTerms: [
        { term: 'titin', definition: 'Largest human protein; TTN truncating variants are most common cause of genetic DCM' },
        { term: 'laminopathy', definition: 'LMNA gene mutations causing DCM with high arrhythmia risk and conduction disease' },
        { term: 'mavacamten', definition: 'Cardiac myosin inhibitor that reduces obstruction in HCM' },
        { term: 'apical sparing', definition: 'Strain pattern on echo suggestive of cardiac amyloidosis' },
        { term: 'tafamidis', definition: 'TTR stabilizer that reduces mortality in ATTR cardiac amyloidosis' },
        { term: 'myectomy', definition: 'Surgical removal of septal muscle to relieve LVOT obstruction in HCM' },
      ],
      clinicalNotes: 'LMNA mutations carry high arrhythmia risk - consider ICD at lower EF thresholds. In HCM, avoid vasodilators and inotropes. Cardiac amyloidosis should be suspected in any HFpEF with wall thickening - PYP scan can diagnose ATTR non-invasively.',
    },
    4: {
      level: 4,
      summary: 'Advanced cardiomyopathy management integrates precision genetic diagnosis, phenotype-specific therapies including novel agents, advanced imaging for risk stratification, and device therapy with consideration for transplantation and mechanical support.',
      explanation: `## Advanced Genetic Considerations

### Genetic Testing Strategy

**Panel Testing:**
- Comprehensive cardiomyopathy panels (50-100+ genes)
- Phenotype-specific panels available
- Variant interpretation: Pathogenic > Likely pathogenic > VUS

**Cascade Screening:**
- First-degree relatives of positive probands
- Clinical screening even if genetic test negative
- Phenotype may be delayed (age-dependent penetrance)

### Genotype-Phenotype Correlations

**DCM:**
| Gene | Features | Management Implications |
|------|----------|------------------------|
| TTN | Variable expressivity, may recover | Standard GDMT |
| LMNA | Conduction disease, high VT risk | Lower threshold for ICD |
| RBM20 | Early onset, severe, arrhythmic | Aggressive device therapy |
| PLN | High arrhythmia burden | Consider early ICD |
| BAG3 | May present as DCM or HCM | - |

**HCM:**
| Gene | Features |
|------|----------|
| MYH7 | Earlier onset, more severe |
| MYBPC3 | Later onset, better prognosis |
| TNNI3 | Apical HCM variant |
| Multiple | Worse prognosis than single |

### Peripartum Cardiomyopathy

**Risk Factors:**
- Multiparity, advanced maternal age
- Preeclampsia
- African ancestry
- TTN variants (15-20% have truncating variant)

**Prognosis:**
- 50% recover EF
- Worse if EF <30% or RV involvement
- Recurrence risk 25-50% in subsequent pregnancy

**Unique Considerations:**
- Bromocriptine may improve outcomes
- Mechanical support as bridge
- Contraception counseling

## Advanced Imaging in Cardiomyopathy

### Cardiac MRI Protocol

**Standard Sequences:**
- Cine SSFP: Volumes, function, mass
- T1 mapping: Native T1, ECV calculation
- T2 mapping: Edema detection
- LGE: Fibrosis pattern

**Pattern Recognition:**

| Pattern | Suggests |
|---------|----------|
| Mid-wall septal LGE | DCM (non-ischemic) |
| RV insertion point LGE | Pulmonary hypertension |
| Subepicardial LGE | Myocarditis |
| Patchy multifocal LGE | Sarcoidosis, HCM |
| Diffuse subendocardial LGE | Amyloidosis |

### PET Imaging

**Indications:**
- Cardiac sarcoidosis (FDG-PET)
- Inflammatory cardiomyopathy
- Viability assessment

**Sarcoidosis Protocol:**
- High-fat, low-carb diet to suppress normal myocardial FDG uptake
- Focal uptake = active inflammation
- Perfusion defects = scar

### Strain Imaging

**Global Longitudinal Strain (GLS):**
- Early marker of dysfunction
- Predicts outcomes in HCM
- Apical sparing pattern in amyloidosis

**Mechanical Dyssynchrony:**
- Guide CRT patient selection
- Predict response

## Novel Therapeutics

### Mavacamten (HCM)

**Mechanism:**
- Allosteric modulator of cardiac myosin
- Reduces actin-myosin cross-bridge formation
- Decreases contractility and LVOT gradient

**Clinical Evidence:**
- EXPLORER-HCM: 37% achieved primary endpoint (symptoms + gradient)
- VALOR-HCM: Reduced need for septal reduction therapy

**Monitoring:**
- Echo every 12 weeks
- Hold if EF drops <50%
- Drug interactions (CYP2C19, 3A4)

### Aficamten

**Similar mechanism to mavacamten**
- May have safer profile
- SEQUOIA-HCM trial: Positive results

### Emerging Therapies

**Gene Therapy:**
- AAV-based gene replacement
- Being studied for genetic DCM
- LAMP-B trial for LMNA

**RNA Therapeutics:**
- Patisiran, inotersen for ATTR amyloid
- siRNA targeting production of abnormal protein

## Device Therapy

### ICD in Cardiomyopathy

**DCM:**
- Primary prevention: EF ≤35% after ≥3 months GDMT
- LMNA: Lower threshold (consider at EF <45% with risk factors)

**HCM:**
- ESC risk calculator >6% (Class IIa)
- Individual risk factors considered

**Subcutaneous ICD:**
- Alternative to transvenous
- Preferred in young patients
- No pacing capability (limitation in LMNA)

### CRT in DCM

**Indications:**
- EF ≤35% + LBBB + QRS ≥150 ms (Class I)
- Non-LBBB with QRS ≥150 ms (Class IIa)

**Response Prediction:**
- LBBB best responders
- Ischemic less responsive than non-ischemic
- Mechanical dyssynchrony on echo may help

### Advanced Heart Failure Devices

**LVAD Consideration:**
- Bridge to transplant
- Destination therapy
- Bridge to recovery (rare, but possible in some DCM)

**Specific Considerations:**
- HCM: Small LV cavity challenging for cannula placement
- RCM: Poor candidate due to RV dysfunction
- ACM: RV involvement may require BiVAD

## Transplantation

### Cardiomyopathy-Specific Issues

**HCM:**
- Generally good candidates
- May have donor-recipient size mismatch issues
- Denervated heart eliminates outflow obstruction physiology

**Amyloidosis:**
- AL: Only if hematologic disease controlled
- ATTR: TTR produced by liver; may need combined heart-liver transplant for hereditary
- Wild-type ATTR: Heart transplant alone

**ARVC:**
- Consider before severe biventricular failure
- May recur in transplanted heart (case reports)

## Arrhythmogenic Cardiomyopathy - Advanced

### Revised Task Force Criteria (2010)

**Categories:**
- Major and minor criteria
- Structural, histological, ECG, arrhythmia, genetic, family history

**Diagnosis:**
- Definite: 2 major, or 1 major + 2 minor, or 4 minor
- Borderline: 1 major + 1 minor, or 3 minor
- Possible: 1 major, or 2 minor

### Phenotypic Variants

**Classic ARVC:**
- Right ventricular predominant
- Triangle of dysplasia (RVIT, RVOT, apex)

**Left-Dominant (ALVC):**
- LV fibrofatty replacement
- May mimic DCM
- High arrhythmia risk

**Biventricular:**
- Both ventricles involved
- Worst prognosis

### Exercise Restriction

**Rationale:**
- Exercise accelerates disease progression
- Increases arrhythmia risk
- Desmosomal stress from mechanical load

**Recommendations:**
- No competitive sports
- Limit to low-intensity recreational activity
- Family members with genes but no phenotype: Individualized`,
      keyTerms: [
        { term: 'ECV', definition: 'Extracellular volume on MRI; elevated in infiltrative disease and fibrosis' },
        { term: 'penetrance', definition: 'Proportion of individuals with mutation who express the phenotype; often incomplete in cardiomyopathy' },
        { term: 'aficamten', definition: 'Next-generation cardiac myosin inhibitor for obstructive HCM' },
        { term: 'triangle of dysplasia', definition: 'Three RV regions typically affected in ARVC: inflow, outflow, apex' },
        { term: 'VUS', definition: 'Variant of uncertain significance; genetic finding of unknown clinical relevance' },
        { term: 'siRNA', definition: 'Small interfering RNA; therapeutic approach targeting disease-causing genes' },
      ],
      clinicalNotes: 'Genetic testing is now standard of care for all cardiomyopathies. LMNA carriers need aggressive device therapy due to high arrhythmia risk. Cardiac amyloidosis is underdiagnosed - think of it in HFpEF with wall thickening. Exercise restriction is critical in ACM to prevent disease progression.',
    },
    5: {
      level: 5,
      summary: 'Contemporary cardiomyopathy management leverages precision medicine with genotype-guided therapy, advanced imaging phenotyping, novel pharmacotherapies targeting disease mechanisms, and emerging gene therapies with potential for disease modification.',
      explanation: `## Current Guidelines and Evidence

### 2024 AHA/ACC Guideline Updates

**Key Recommendations:**
1. Genetic testing for all cardiomyopathy phenotypes
2. CMR as central imaging modality
3. HCM-specific therapies (mavacamten)
4. Updated risk stratification models
5. Multidisciplinary cardiomyopathy clinics

### ESC Guidelines

**HCM (2023):**
- ESC Risk-SCD calculator for ICD decisions
- Mavacamten as Class IIa for obstructive HCM
- Lifestyle guidance for athletes and pregnancy

**DCM (2023):**
- Genetic testing recommended for all
- LMNA-specific ICD criteria
- Arrhythmia-specific screening

## Precision Medicine Approaches

### Genotype-Directed Management

**LMNA Cardiomyopathy:**
- ICD recommended if: Male, NSVT, EF <45%, or non-missense mutation
- Even before EF drops to 35%
- Avoid CRT-D (pro-arrhythmic in some)

**RBM20 Cardiomyopathy:**
- High arrhythmia risk similar to LMNA
- Early ICD consideration
- May not respond to standard GDMT

**PLN Cardiomyopathy:**
- Common in Netherlands (founder mutation)
- High arrhythmia burden
- Exercise restriction may help

### Pharmacogenomics

**Beta-Blocker Response:**
- Genetic variants affect metabolism
- CYP2D6 polymorphisms
- Personalized dosing emerging

**Warfarin in DCM:**
- CYP2C9, VKORC1 genotyping
- Avoid bleeding complications

## Advanced Imaging Integration

### Artificial Intelligence in CMR

**Applications:**
- Automated segmentation
- Pattern recognition for diagnosis
- Risk prediction models
- Quality assurance

**Deep Learning Models:**
- HCM vs athlete's heart differentiation
- Cardiomyopathy classification
- LGE quantification

### Strain and Beyond

**Feature Tracking:**
- CMR-based strain analysis
- Circumferential, radial, longitudinal
- Predicts outcomes

**T1 Mapping Evolution:**
- Native T1 for diffuse fibrosis
- ECV calculation
- Amyloid vs HCM differentiation

**4D Flow:**
- Flow patterns in HCM
- LVOT obstruction dynamics
- Research applications

## Emerging Therapeutics

### Gene Therapy

**AAV-Based Approaches:**

| Target | Gene | Status |
|--------|------|--------|
| DCM/LMNA | LMNA gene replacement | Preclinical |
| Danon disease | LAMP2 | Clinical trial (NCT03882437) |
| HCM | MYBPC3 augmentation | Preclinical |
| ARVC | Desmosomal genes | Early research |

**Challenges:**
- AAV vector limitations
- Immune response
- Dose-finding
- Long-term durability

### RNA Therapeutics

**ATTR Amyloidosis:**
- Patisiran: siRNA targeting TTR mRNA (IV)
- Vutrisiran: Next-gen siRNA (SC, less frequent)
- Inotersen: Antisense oligonucleotide

**HCM:**
- Antisense approaches targeting mutant alleles
- Precision targeting of specific mutations

### Gene Editing

**CRISPR Applications:**
- In vivo editing of mutations
- ARVC: Correction of desmosomal mutations
- Base editing for point mutations

**Challenges:**
- Delivery to cardiac tissue
- Off-target effects
- Ethical considerations

## Mechanical Circulatory Support

### VAD in Cardiomyopathy

**DCM:**
- Best outcomes for LVAD
- Bridge to recovery possible (especially peripartum)
- Destination therapy established

**HCM:**
- Small LV cavity challenges
- May need different cannula position
- Limited experience

**ACM with BiV Failure:**
- BiVAD may be required
- TAH consideration
- Bridge to transplant

### Emerging Devices

**Minimally Invasive VADs:**
- MVAD (mini VAD)
- Percutaneous options in development

**Temporary Support:**
- Impella for acute decompensation
- ECMO bridging strategies

## Special Populations

### Athletes

**Differentiating Athlete's Heart from HCM:**

| Feature | Athlete's Heart | HCM |
|---------|----------------|-----|
| Wall thickness | <13 mm, symmetric | >15 mm, asymmetric |
| LV cavity | Dilated | Normal/small |
| Diastolic function | Normal | Abnormal |
| LGE | Absent | Present |
| Deconditioning | Regression | Persists |
| Genetics | Negative | Often positive |

**Return to Play:**
- Individualized risk assessment
- HCM: Generally no competitive sports
- DCM with recovered EF: Case-by-case
- Gene carriers without phenotype: Controversial

### Pregnancy

**Risk Stratification:**

| Cardiomyopathy | Risk Level |
|----------------|------------|
| DCM with recovered EF | Low-moderate |
| DCM with low EF | High (contraindicated if <30%) |
| HCM without obstruction | Low |
| HCM with obstruction | Moderate |
| ARVC | Moderate-high |
| Prior peripartum CM | High (25-50% recurrence) |

**Management:**
- Pre-conception counseling
- Beta-blockers safe (some)
- Avoid ACEi/ARB, mavacamten
- Close monitoring
- Delivery planning

### Pediatric Considerations

**Unique Features:**
- Different gene spectrum
- Syndromic associations
- Growth and development impact
- Transition to adult care

**Syndromes with Cardiomyopathy:**
- Noonan syndrome (HCM)
- Friedreich ataxia (HCM)
- Duchenne/Becker (DCM)
- Barth syndrome (DCM)

## Future Directions

### Clinical Trials

**Ongoing:**
- EXPLORER-LTE: Long-term mavacamten
- VALOR-HCM extension
- Gene therapy trials for Danon, LMNA
- SGLT2 inhibitors in HCM

### Research Priorities

1. **Precision Medicine:** Mutation-specific therapies
2. **Biomarkers:** Early detection, monitoring
3. **Prevention:** Halting progression in gene carriers
4. **Regeneration:** Stem cell and tissue engineering
5. **AI Integration:** Risk prediction, treatment optimization

### Cardiomyopathy Centers

**Components:**
- Multidisciplinary team
- Genetic counseling
- Advanced imaging
- Device expertise
- Heart failure/transplant capability
- Clinical research participation`,
      keyTerms: [
        { term: 'feature tracking', definition: 'CMR technique for strain analysis without dedicated sequences' },
        { term: 'vutrisiran', definition: 'Next-generation siRNA for ATTR amyloidosis with less frequent dosing' },
        { term: 'CRISPR', definition: 'Gene editing technology with potential for correcting cardiomyopathy mutations' },
        { term: 'Danon disease', definition: 'X-linked LAMP2 mutation causing severe HCM-like phenotype' },
        { term: 'antisense oligonucleotide', definition: 'Short DNA/RNA sequences that bind mRNA to reduce protein production' },
        { term: 'athlete heart', definition: 'Physiologic cardiac remodeling from exercise; must differentiate from HCM' },
      ],
      clinicalNotes: `Key clinical pearls for cardiomyopathy management:

1. **Genetic Testing**: Standard of care for all cardiomyopathies; informs prognosis and family screening
2. **LMNA Risk**: High arrhythmia risk - lower threshold for ICD than standard EF cutoffs
3. **HCM Therapy**: Mavacamten is now available for obstructive HCM; monitor EF closely
4. **Amyloid Diagnosis**: PYP scan can diagnose ATTR non-invasively; tafamidis reduces mortality
5. **CMR Value**: Essential for tissue characterization, risk stratification, and differential diagnosis
6. **ACM/ARVC**: Exercise restriction critical; disease progresses with athletic activity
7. **Peripartum CM**: Consider TTN testing; bromocriptine may help; high recurrence risk
8. **Athlete's Heart vs HCM**: Deconditioning test, genetics, CMR pattern help differentiate
9. **Pregnancy Planning**: Pre-conception counseling essential; some conditions contraindicated
10. **Gene Therapy**: Emerging for specific conditions (Danon, LMNA); watch clinical trials`,
    },
  },

  media: [
    {
      id: 'cardiomyopathy-types',
      type: 'diagram',
      filename: 'cardiomyopathy-classification.svg',
      title: 'Cardiomyopathy Classification',
      description: 'Visual comparison of DCM, HCM, RCM morphology',
    },
    {
      id: 'hcm-obstruction',
      type: 'diagram',
      filename: 'hcm-lvot-obstruction.svg',
      title: 'LVOT Obstruction in HCM',
      description: 'SAM and dynamic obstruction mechanism',
    },
    {
      id: 'amyloid-imaging',
      type: 'diagram',
      filename: 'cardiac-amyloid-diagnosis.svg',
      title: 'Cardiac Amyloidosis Diagnosis',
      description: 'Algorithm for PYP scan and tissue diagnosis',
    },
  ],

  citations: [
    {
      id: 'aha-hcm-2024',
      type: 'article',
      title: '2024 AHA/ACC Guideline for the Diagnosis and Treatment of HCM',
      authors: ['Ommen SR', 'et al.'],
      source: 'Circulation',
    },
    {
      id: 'explorer-hcm',
      type: 'article',
      title: 'Mavacamten for Treatment of Symptomatic Obstructive HCM',
      authors: ['Olivotto I', 'et al.'],
      source: 'Lancet',
    },
    {
      id: 'braunwald-cardiomyopathy',
      type: 'textbook',
      title: 'Braunwald\'s Heart Disease',
      source: 'Elsevier',
      chapter: 'The Cardiomyopathies',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'condition-atrial-fibrillation', targetType: 'condition', relationship: 'related', label: 'Arrhythmias' },
    { targetId: 'topic-cardiac-medications', targetType: 'topic', relationship: 'related', label: 'Cardiac Medications' },
    { targetId: 'topic-genetics', targetType: 'topic', relationship: 'related', label: 'Cardiac Genetics' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiomyopathy', 'genetics', 'heart failure', 'sudden death'],
    keywords: ['HCM', 'DCM', 'amyloidosis', 'mavacamten', 'ICD', 'genetic testing'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cardiomyopathies;
