/**
 * Cardiomyopathy - Comprehensive Educational Content
 *
 * Covers dilated, hypertrophic, restrictive, and arrhythmogenic cardiomyopathies
 * including pathophysiology, genetics, diagnosis, and management.
 */

import { EducationalContent } from '../../types';

export const cardiomyopathy: EducationalContent = {
  id: 'condition-cardiomyopathy',
  type: 'condition',
  name: 'Cardiomyopathy',
  nameEs: 'Cardiomiopatía',
  alternateNames: ['Heart Muscle Disease', 'DCM', 'HCM', 'Dilated Cardiomyopathy', 'Hypertrophic Cardiomyopathy'],
  hpoId: 'HP:0001638',

  levels: {
    1: {
      level: 1,
      summary: 'Cardiomyopathy is a disease of the heart muscle that makes it harder for your heart to pump blood to the rest of your body.',
      explanation: `Cardiomyopathy means "heart muscle disease." In this condition, the heart muscle becomes abnormal, making it harder for the heart to work properly. There are different types based on what goes wrong with the muscle.

**Types of Cardiomyopathy:**

1. **Dilated Cardiomyopathy (DCM)**
   - The heart becomes larger and stretched out
   - The walls become thinner and weaker
   - The heart can't pump as well
   - Most common type

2. **Hypertrophic Cardiomyopathy (HCM)**
   - The heart muscle becomes too thick
   - Often runs in families
   - The heart can't relax properly
   - Can cause sudden death in young athletes

3. **Restrictive Cardiomyopathy**
   - The heart muscle becomes stiff
   - The heart can't fill properly
   - Less common

4. **Arrhythmogenic Cardiomyopathy**
   - Heart muscle is replaced by fat and scar tissue
   - Causes dangerous heart rhythms

**What causes cardiomyopathy?**
- Many cases have no known cause (idiopathic)
- Inherited (passed down in families)
- Viral infections
- Long-term high blood pressure
- Heart attacks
- Alcohol abuse
- Drug use (cocaine, some cancer drugs)
- Pregnancy (rare)
- Thyroid disease

**What are the symptoms?**
- Shortness of breath (especially with activity or lying down)
- Swelling in legs, ankles, and feet
- Feeling tired
- Irregular heartbeat or palpitations
- Dizziness or fainting
- Some people have no symptoms

**How is it diagnosed?**
- Echocardiogram (ultrasound of the heart)
- ECG (heart rhythm test)
- Blood tests
- MRI of the heart
- Sometimes genetic testing

**How is it treated?**
- Medications to help the heart pump better
- Medications to control heart rhythm
- Implantable devices (pacemakers, defibrillators)
- Lifestyle changes (limit salt, alcohol, exercise)
- In severe cases: heart transplant`,
      keyTerms: [
        { term: 'cardiomyopathy', definition: 'A disease of the heart muscle that makes it harder for the heart to pump blood' },
        { term: 'dilated', definition: 'When the heart becomes enlarged and stretched out, making it weak' },
        { term: 'hypertrophic', definition: 'When the heart muscle becomes abnormally thick' },
        { term: 'defibrillator', definition: 'A device implanted in the chest that can shock the heart back to a normal rhythm if dangerous rhythms occur' },
      ],
      analogies: [
        'A dilated heart is like a balloon that has been stretched out too much - it gets bigger but weaker.',
        'A hypertrophic heart is like a room with walls that are too thick - less space inside for blood.',
        'A restrictive heart is like a stiff balloon that is hard to blow up - it cannot fill properly.',
      ],
      examples: [
        'A 45-year-old man with a family history of heart problems develops shortness of breath. Tests show his heart is enlarged and weak.',
        'A high school athlete faints during basketball practice. An echocardiogram reveals that his heart muscle is abnormally thick.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiomyopathies are myocardial diseases classified by structural phenotype (dilated, hypertrophic, restrictive, arrhythmogenic), with varied etiologies including genetic mutations, ischemia, toxins, and inflammation, managed through heart failure therapies, arrhythmia prevention, and device implantation.',
      explanation: `## Classification of Cardiomyopathies

### Dilated Cardiomyopathy (DCM)

**Definition:**
- LV (or biventricular) dilation
- Systolic dysfunction (reduced EF)
- Not explained by CAD or abnormal loading conditions

**Causes:**
- Idiopathic (~50%)
- Familial/genetic (20-35%)
- Alcoholic
- Peripartum
- Viral myocarditis
- Chemotherapy (anthracyclines, trastuzumab)
- Tachycardia-induced
- HIV
- Thyroid disease
- Hemochromatosis

**Clinical Features:**
- Heart failure symptoms (dyspnea, edema, fatigue)
- S3 gallop
- Mitral regurgitation (from dilation)
- Arrhythmias (AFib, VT)
- Thromboembolic events

### Hypertrophic Cardiomyopathy (HCM)

**Definition:**
- LV wall thickness ≥15 mm
- Not explained by abnormal loading conditions (HTN, AS)
- Often asymmetric septal hypertrophy

**Genetics:**
- Autosomal dominant
- Sarcomere gene mutations (MYH7, MYBPC3 most common)
- Variable penetrance

**Key Concepts:**
- **LVOT obstruction**: Systolic anterior motion (SAM) of mitral valve
- **Diastolic dysfunction**: Stiff, non-compliant LV
- **Arrhythmias**: AF, VT, sudden cardiac death
- **Microvascular ischemia**: Despite normal coronaries

**Symptoms:**
- Often asymptomatic
- Dyspnea on exertion
- Chest pain
- Palpitations
- Syncope (concerning for arrhythmia)
- Sudden death (rare but feared)

### Restrictive Cardiomyopathy (RCM)

**Definition:**
- Stiff ventricles with impaired filling
- Normal or near-normal wall thickness and systolic function
- Elevated filling pressures

**Causes:**
- Amyloidosis (most common in US)
- Sarcoidosis
- Hemochromatosis
- Radiation
- Endomyocardial fibrosis (tropical)
- Fabry disease

### Arrhythmogenic Cardiomyopathy (ACM)

**Definition:**
- Fibro-fatty replacement of myocardium
- Originally described as ARVC (RV)
- Now includes LV and biventricular forms

**Genetics:**
- Desmosomal gene mutations (PKP2, DSP, DSG2)
- Autosomal dominant with variable penetrance

**Features:**
- Ventricular arrhythmias (VT, VF)
- Sudden death (especially with exercise)
- RV dilation and dysfunction
- Epsilon waves on ECG

## Diagnosis

### Echocardiography

**DCM:**
- Dilated LV (LVEDD >55-60 mm)
- Reduced EF (<40%)
- Global hypokinesis
- Functional MR

**HCM:**
- Wall thickness ≥15 mm
- Asymmetric septal hypertrophy often
- SAM of mitral valve
- LVOT gradient (≥30 mmHg = obstructive)

**RCM:**
- Normal wall thickness and EF
- Dilated atria
- Restrictive filling pattern
- Pericardial effusion (amyloid)

### Cardiac MRI

- Tissue characterization
- Scar pattern helps identify etiology
- Late gadolinium enhancement (LGE)
  - Mid-wall in DCM
  - At RV insertion points in HCM
  - Diffuse in amyloid

### Genetic Testing

- First-degree relatives of patients with HCM
- Familial DCM
- Confirms diagnosis and guides family screening

## Treatment

### DCM (Heart Failure Therapy)

**Guideline-Directed Medical Therapy:**
- ACE inhibitor/ARB/ARNI
- Beta-blocker
- MRA (spironolactone, eplerenone)
- SGLT2 inhibitor
- Diuretics for congestion

**Device Therapy:**
- ICD for primary prevention (EF ≤35%)
- CRT if LBBB and EF ≤35%

**Advanced:**
- Mechanical support (LVAD)
- Heart transplant

### HCM

**Symptom Management:**
- Beta-blockers (first line)
- Verapamil or diltiazem (if beta-blocker not tolerated)
- Disopyramide (for refractory obstruction)
- Mavacamten (new: myosin inhibitor)

**Septal Reduction Therapy:**
- Surgical myectomy
- Alcohol septal ablation

**SCD Prevention:**
- ICD for high-risk patients
- Risk calculators (HCM Risk-SCD)

### RCM

- Treat underlying cause (amyloid, sarcoid)
- Diuretics for congestion (careful - preload dependent)
- Rate control for AFib (no digoxin in amyloid)
- Transplant if refractory

### ACM

- Exercise restriction
- Beta-blockers
- ICD for arrhythmia prevention
- Ablation for refractory VT`,
      keyTerms: [
        { term: 'LVOT obstruction', definition: 'Blockage of blood flow out of the left ventricle, often dynamic in HCM due to SAM of the mitral valve' },
        { term: 'systolic anterior motion', definition: 'Abnormal movement of the mitral valve toward the septum during systole, causing LVOT obstruction in HCM' },
        { term: 'amyloidosis', definition: 'Disease where abnormal proteins deposit in the heart, causing restrictive physiology; two main types: AL and ATTR' },
        { term: 'sarcomere', definition: 'The basic unit of muscle contraction; mutations in sarcomere genes cause HCM' },
        { term: 'mavacamten', definition: 'Novel medication for HCM that inhibits myosin, reducing hypercontractility and LVOT obstruction' },
      ],
      analogies: [
        'LVOT obstruction in HCM is like putting your thumb over a garden hose - the heart works harder to push blood past the obstruction.',
        'Amyloid deposits in the heart are like glue stiffening the muscle, so it cannot relax and fill properly.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiomyopathies are characterized by distinct structural and functional phenotypes (dilated, hypertrophic, restrictive, arrhythmogenic) with overlapping genetic etiologies involving sarcomere, cytoskeletal, and desmosomal proteins, requiring comprehensive evaluation including cardiac MRI with tissue characterization and genetic testing for diagnosis and family screening.',
      explanation: `## Genetic Architecture

### Sarcomeric Cardiomyopathies (HCM, DCM overlap)

**Major Genes:**
- MYH7: Beta-myosin heavy chain (HCM, DCM)
- MYBPC3: Myosin-binding protein C (HCM)
- TNNT2: Cardiac troponin T (HCM, DCM)
- TNNI3: Cardiac troponin I (HCM, RCM)
- TPM1: Alpha-tropomyosin (HCM, DCM)

**Genotype-Phenotype Correlations:**
- MYH7: Often more severe HCM, higher SCD risk
- MYBPC3: Milder, later onset, incomplete penetrance
- Specific variants may predict arrhythmia risk

### Non-Sarcomeric DCM Genes

**Cytoskeletal:**
- TTN (titin): Most common DCM gene (~25% familial DCM)
- LMNA (lamin A/C): High arrhythmia risk, conduction disease
- DES (desmin): Skeletal myopathy overlap

**Desmosomal:**
- PKP2, DSP, DSG2: Originally ACM, now known in DCM

**Other:**
- FLNC (filamin C): Arrhythmogenic DCM
- RBM20: Aggressive DCM
- PLN: Phospholamban (Dutch founder variant)

### Arrhythmogenic Cardiomyopathy Genetics

**Desmosome Genes:**
- PKP2: Plakophilin-2 (most common)
- DSP: Desmoplakin
- DSG2: Desmoglein-2
- DSC2: Desmocollin-2
- JUP: Junction plakoglobin

**Non-Desmosomal:**
- TMEM43
- PLN
- FLNC
- DES

### Genetic Testing Approach

**When to Test:**
- HCM: All patients (guides family screening)
- DCM: Familial disease, young onset, unexplained
- ACM: Clinical diagnosis, family screening

**Cascade Screening:**
- First-degree relatives of mutation carriers
- Genotype-positive, phenotype-negative: Regular surveillance
- Genotype-negative relatives: Reassurance (usually)

## Dilated Cardiomyopathy: In-Depth

### Pathophysiology

**Myocyte Loss and Replacement Fibrosis:**
- Various insults → myocyte death
- Fibroblast activation → fibrosis
- Ventricular remodeling

**Neurohormonal Activation:**
- SNS and RAAS activation
- Maladaptive remodeling
- Progressive dysfunction

### Specific Etiologies

**Peripartum Cardiomyopathy:**
- Last month of pregnancy to 5 months postpartum
- Multifactorial (sFlt-1, prolactin, genetics)
- ~50% recover EF
- Bromocriptine may help (inhibits prolactin)
- Subsequent pregnancy risk if EF not recovered

**Alcohol-Induced:**
- Heavy use for years
- May recover with abstinence
- Thiamine deficiency contributes

**Tachycardia-Induced:**
- Persistent rapid heart rates (AF, AVNRT, atrial tachycardia)
- Reversible with rate control/ablation

**Chemotherapy-Induced:**
- Anthracyclines: Dose-dependent, irreversible
- Trastuzumab: Not dose-dependent, often reversible
- Checkpoint inhibitors: Immune-related myocarditis

### LMNA Cardiomyopathy

**Clinical Features:**
- DCM phenotype
- High rate of conduction disease (AV block)
- Atrial arrhythmias
- High SCD risk
- Skeletal myopathy, lipodystrophy variants

**Management:**
- Lower threshold for ICD (EF <45% or even earlier)
- LMNA risk calculator available
- Consider genetic counseling

## Hypertrophic Cardiomyopathy: In-Depth

### Pathophysiology

**Sarcomere Dysfunction:**
- Mutations → hypercontractility
- Impaired relaxation
- Increased energy consumption
- Myocyte disarray
- Interstitial fibrosis

**LVOT Obstruction Mechanism:**
- Septal hypertrophy
- SAM of mitral valve (Venturi effect)
- Contact with septum in mid-systole
- Dynamic: Worsens with decreased preload or afterload

**Diastolic Dysfunction:**
- Increased passive stiffness
- Impaired active relaxation
- Elevated filling pressures

### Clinical Evaluation

**Provocative Maneuvers for LVOT Gradient:**
- Valsalva (decreases preload → increases gradient)
- Amyl nitrite (decreases afterload → increases gradient)
- Exercise (definitive test if resting gradient <30)

**Risk Stratification for SCD:**
- Prior cardiac arrest or sustained VT
- Family history of SCD
- Unexplained syncope
- Maximum wall thickness ≥30 mm
- NSVT on monitoring
- Abnormal BP response to exercise
- Extensive LGE on CMR
- LV apical aneurysm

**ESC HCM Risk-SCD Calculator:**
- Estimates 5-year SCD risk
- >6%: ICD recommended
- 4-6%: Consider ICD
- <4%: Generally no ICD

### Treatment Advances

**Mavacamten (Camzyos):**
- Cardiac myosin inhibitor
- Reduces LVOT gradient
- Improves symptoms
- EXPLORER-HCM, VALOR-HCM trials
- Monitor EF (can reduce too much)

**Septal Reduction Therapy:**
- Surgical myectomy: Gold standard
- Alcohol septal ablation: Alternative for poor surgical candidates

## Restrictive Cardiomyopathy: Amyloidosis

### Types of Cardiac Amyloidosis

**AL (Light Chain):**
- Plasma cell dyscrasia
- Rapidly progressive
- Multi-organ involvement
- Treat underlying plasma cell disorder

**ATTR (Transthyretin):**
- Wild-type (ATTRwt): Senile, older men
- Hereditary (ATTRh): Variant, earlier onset
- Increasingly recognized
- Specific treatments available

### Diagnosis

**Red Flags:**
- HFpEF with LVH (especially if history of HTN is mild)
- Carpal tunnel syndrome (bilateral)
- Low-voltage ECG despite LV thickness
- Apical sparing pattern on strain imaging
- Tendon ruptures

**Testing:**
- Technetium pyrophosphate scan (PYP): Highly sensitive for ATTR
- Mass spectrometry of tissue biopsy
- Genetic testing for ATTRh
- Rule out AL with SPEP, UPEP, FLC

### Treatment

**ATTR Amyloidosis:**
- Tafamidis: TTR stabilizer (ATTR-ACT trial)
- Reduces mortality and hospitalizations
- Indicated for both ATTRwt and ATTRh

**AL Amyloidosis:**
- Hematology referral
- Chemotherapy (targeting plasma cells)
- Autologous stem cell transplant in select patients`,
      keyTerms: [
        { term: 'TTN truncating variant', definition: 'Mutation in titin gene that shortens the protein; most common genetic cause of dilated cardiomyopathy' },
        { term: 'LMNA cardiomyopathy', definition: 'DCM caused by lamin A/C mutations; notable for high arrhythmia and sudden death risk' },
        { term: 'technetium pyrophosphate scan', definition: 'Nuclear imaging highly sensitive and specific for ATTR cardiac amyloidosis; avoids biopsy' },
        { term: 'tafamidis', definition: 'TTR stabilizer drug that reduces mortality and hospitalization in ATTR cardiac amyloidosis' },
        { term: 'apical sparing', definition: 'Strain imaging pattern where LV apex is preserved relative to base; characteristic of cardiac amyloidosis' },
      ],
      clinicalNotes: 'LMNA cardiomyopathy has unique risk for SCD even with moderately reduced EF. Consider ICD at EF <45% or with other risk factors. Use the LMNA-Risk-VTA calculator. For suspected cardiac amyloidosis, a positive technetium pyrophosphate scan with negative light chain workup is diagnostic of ATTR without biopsy. Tafamidis is a game-changer for ATTR amyloidosis.',
    },
    4: {
      level: 4,
      summary: 'Cardiomyopathies require integrative diagnosis using advanced imaging (CMR with LGE, T1/T2 mapping, strain), genetic testing with cascade screening, and phenotype-genotype correlation, with management guided by etiology-specific therapies (GDMT for DCM, mavacamten for obstructive HCM, tafamidis for ATTR) and risk stratification for device implantation.',
      explanation: `## Advanced Imaging

### Cardiac MRI Phenotyping

**Dilated Cardiomyopathy:**
- LV volumes and EF quantification
- LGE pattern:
  - Mid-wall septal: Idiopathic, poor prognosis
  - Subepicardial: Myocarditis
  - Subendocardial: Ischemic
- T1 mapping: Native T1 elevated in fibrosis
- T2 mapping: Edema indicates active inflammation

**Hypertrophic Cardiomyopathy:**
- Wall thickness and distribution
- LGE:
  - At RV insertion points (common)
  - Extensive LGE (>15%) = worse prognosis
- Apical aneurysm detection
- LV mass quantification

**Cardiac Amyloidosis:**
- LVH with reduced LGE-technique performance (diffuse uptake)
- T1 mapping: Very elevated native T1
- ECV markedly elevated (>0.45)
- "Zebra" pattern of LGE (difficulty nulling myocardium)

**Arrhythmogenic Cardiomyopathy:**
- RV regional wall motion abnormalities
- RV dilation
- Fatty infiltration (limited sensitivity)
- LGE in RV free wall or LV
- Task Force criteria integration

### Strain Imaging

**Global Longitudinal Strain (GLS):**
- More sensitive than EF for early dysfunction
- Apical sparing pattern pathognomonic for amyloid
- Reduced GLS predicts outcomes in HCM
- Detects subclinical chemotherapy cardiotoxicity

**Mechanical Dispersion:**
- Time from Q wave to peak strain varies by segment
- Predicts arrhythmias in HCM and ACM

## Genetic Testing and Counseling

### Clinical Utility

**Diagnosis:**
- Confirms genetic etiology
- Distinguishes overlapping phenotypes
- Identifies syndromic features

**Risk Stratification:**
- LMNA: High arrhythmia risk
- PLN: Arrhythmogenic
- RBM20: Aggressive DCM
- Multiple variants: Worse prognosis

**Family Screening:**
- Genotype-positive relatives: Surveillance regardless of phenotype
- Genotype-negative relatives: May discontinue screening

### Cascade Screening Protocol

1. Index case: Comprehensive genetic testing
2. If positive: Offer testing to first-degree relatives
3. Genotype-positive, phenotype-negative:
   - ECG and echo periodically
   - HCM: Every 1-3 years
   - DCM: Every 1-3 years
   - ACM: Every 2-3 years
4. Consider activity restrictions for high-risk genes

### Variant Interpretation

**Pathogenic/Likely Pathogenic:**
- Sufficient evidence for causality
- Can be used for family screening

**Variant of Uncertain Significance (VUS):**
- Cannot be used for clinical decisions
- May reclassify over time
- Family segregation may help

## DCM Advanced Management

### GDMT Optimization

**The Four Pillars:**
1. ACEi/ARB/ARNI (sacubitril/valsartan)
2. Beta-blocker (carvedilol, metoprolol succinate, bisoprolol)
3. MRA (spironolactone, eplerenone)
4. SGLT2i (dapagliflozin, empagliflozin)

**Newer Agents:**
- Vericiguat (sGC stimulator): For recent HF worsening
- Omecamtiv mecarbil (myosin activator): Phase 3 positive

### Device Therapy

**ICD:**
- Primary prevention: EF ≤35% on ≥3 months GDMT
- LMNA: Consider earlier (EF 35-45%)
- Adjust for life expectancy, comorbidities

**CRT:**
- EF ≤35%, LBBB ≥150 ms
- Consider if LBBB 130-149 ms or non-LBBB ≥150 ms
- Higher response rates with non-ischemic DCM

### Myocarditis and Inflammatory DCM

**Endomyocardial Biopsy Indications:**
- New heart failure with suspected giant cell myocarditis
- Fulminant presentation
- Arrhythmias with suspected sarcoidosis
- Not routine for DCM

**CMR in Myocarditis:**
- Lake Louise criteria (revised 2018)
- T2-based edema imaging
- T1-based: LGE, ECV elevation
- Helps differentiate from other DCM etiologies

## HCM Advanced Management

### Obstructive HCM Therapies

**Mavacamten:**
- Reduces actin-myosin cross-bridge formation
- 74% reduction in gradient (EXPLORER-HCM)
- Improves NYHA class, pVO2, symptoms
- Monitor EF (hold if <50%, stop if <30%)
- Caution with negative inotropes

**Aficamten:**
- Next-generation myosin inhibitor
- SEQUOIA-HCM trial ongoing

**Septal Reduction Therapy Decision:**
- Gradient ≥50 mmHg (resting or provoked)
- Symptoms refractory to medications
- Myectomy if suitable anatomy, experienced center
- Alcohol ablation for poor surgical candidates

### Non-Obstructive HCM

**Management:**
- Symptom-based (dyspnea from diastolic dysfunction)
- Beta-blockers, CCBs
- Diuretics cautiously
- Treat AFib aggressively (anticoagulate, rhythm control)

### SCD Risk Assessment

**ACC/AHA Approach:**
- Major risk factors
- Individual assessment

**ESC Risk Calculator:**
- HCM Risk-SCD
- Estimates 5-year risk
- ICD if ≥6%

**Extended Risk Markers:**
- Apical aneurysm
- Extensive LGE (>15% LV mass)
- Systolic dysfunction (EF <50%)

## Cardiac Amyloidosis

### ATTR Amyloidosis Deep Dive

**Epidemiology:**
- ATTRwt: >10% of HFpEF in elderly, underdiagnosed
- ATTRh: Val122Ile variant common in African Americans

**Diagnosis Algorithm:**
1. Suspect based on red flags
2. Serum/urine immunofixation + FLC to rule out AL
3. Technetium-PYP scan (or DPD in Europe)
4. Grade 2-3 uptake + negative light chains = ATTR diagnosed
5. Genetic testing to distinguish ATTRwt vs ATTRh

**Treatment:**
- Tafamidis 80 mg daily (Vyndaqel) or 61 mg (Vyndamax)
- ATTR-ACT: 30% reduction in mortality
- Gene silencers (patisiran, inotersen, vutrisiran): Reduce TTR production
- Clinical trials: CRISPR-based therapies

### AL Amyloidosis

**Urgency:**
- Rapidly progressive
- Requires prompt hematology referral
- Cardiac involvement = worse prognosis

**Treatment:**
- Chemotherapy (bortezomib-based)
- Autologous stem cell transplant (if eligible)
- Daratumumab (anti-CD38)
- Cardiac transplant considered in select patients`,
      keyTerms: [
        { term: 'Lake Louise criteria', definition: 'CMR diagnostic criteria for myocarditis using T1 and T2-based tissue characterization' },
        { term: 'LMNA-Risk-VTA', definition: 'Calculator for predicting ventricular arrhythmia risk in LMNA cardiomyopathy to guide ICD decisions' },
        { term: 'aficamten', definition: 'Next-generation cardiac myosin inhibitor in development for obstructive HCM' },
        { term: 'gene silencers', definition: 'RNA-based therapies (siRNA, antisense) that reduce TTR production in ATTR amyloidosis' },
        { term: 'septal myectomy', definition: 'Surgical resection of hypertrophied septum to relieve LVOT obstruction in HCM; gold standard' },
      ],
      clinicalNotes: 'For suspected cardiac amyloidosis, a high-grade PYP scan (grade 2-3) with negative light chain workup is sufficient for ATTR diagnosis without biopsy. In HCM, mavacamten represents a paradigm shift for obstructive disease, though EF monitoring is essential. For LMNA cardiomyopathy, use the LMNA-Risk-VTA calculator as the ICD threshold is lower than standard DCM. CMR with LGE quantification provides prognostic information across all cardiomyopathies.',
    },
    5: {
      level: 5,
      summary: 'Contemporary cardiomyopathy management integrates precision diagnostics (multiparametric CMR, genetic testing, biomarkers), emerging therapies (myosin inhibitors, gene silencing/editing, immunomodulation), and individualized risk stratification for device therapy, with increasing recognition of overlap syndromes and gene-specific management approaches informed by large registries and clinical trials.',
      explanation: `## Precision Diagnostics

### Multiparametric CMR

**Tissue Characterization Suite:**
- T1 mapping: Native T1 (fibrosis, edema, infiltration)
- ECV: Extracellular expansion (amyloid, fibrosis)
- T2 mapping: Edema (myocarditis, active inflammation)
- T2* mapping: Iron overload (hemochromatosis)
- LGE: Replacement fibrosis patterns

**Prognostic Integration:**
- LGE extent predicts arrhythmia in HCM and DCM
- Native T1 correlates with outcomes
- ECV differentiates diffuse fibrosis from focal

**Emerging Techniques:**
- Feature tracking for strain
- 4D flow for diastolic assessment
- AI-assisted segmentation and analysis

### Advanced Genetic Analysis

**Whole Exome/Genome Sequencing:**
- For unexplained cases
- Identifies novel variants
- Research applications

**Polygenic Risk Scores:**
- May modify monogenic disease expression
- Research stage

**Functional Variant Testing:**
- iPSC-derived cardiomyocytes
- Predict variant pathogenicity
- Personalized disease modeling

### Biomarkers

**BNP/NT-proBNP:**
- Elevated across cardiomyopathies
- Prognostic
- Monitor response to therapy

**High-Sensitivity Troponin:**
- Chronic elevation indicates ongoing injury
- Predicts outcomes in HCM

**Galectin-3, ST2:**
- Fibrosis markers
- Additive prognostic value

## Gene-Specific Management

### LMNA Cardiomyopathy

**Risk Stratification:**
- LMNA-Risk-VTA calculator
- Variables: NSVT, EF, sex, mutation type
- ≥10% 5-year risk: Consider ICD

**Unique Features:**
- High SCD risk even with mild EF reduction
- AV block common
- Consider ICD/CRT-D early

### PLN Cardiomyopathy

**Dutch Founder Variant (c.40_42del):**
- Arrhythmogenic phenotype
- LV non-compaction overlap
- Low-voltage ECG

**Management:**
- ICD threshold lower
- Potential for gene therapy

### RBM20 Cardiomyopathy

**Features:**
- Aggressive DCM
- Young onset
- High arrhythmia burden

**Approach:**
- Early ICD consideration
- Aggressive HF therapy
- Consider transplant evaluation early

### FLNC Cardiomyopathy

**Phenotype:**
- DCM with prominent LGE
- Arrhythmogenic
- Ring-like LGE pattern

**Management:**
- ICD for prevention
- SCD risk elevated

## Emerging Therapeutics

### Myosin Inhibitors for HCM

**Mavacamten:**
- FDA approved 2022
- Reduces hypercontractility
- EXPLORER-HCM: NYHA and pVO2 improvement
- VALOR-HCM: Reduced need for SRT
- Long-term extension data positive

**Aficamten:**
- Next-generation
- SEQUOIA-HCM positive
- May have different safety profile

### Gene-Targeted Therapies

**ATTR Amyloidosis:**
- Patisiran, inotersen, vutrisiran (siRNA/antisense)
- Reduce hepatic TTR production
- APOLLO, HELIOS-A trials positive

**CRISPR Gene Editing:**
- NTLA-2001: In vivo CRISPR for TTR
- Single infusion, durable TTR knockdown
- Phase 1 data promising

**HCM Gene Therapy:**
- Allele-specific silencing (research)
- Gene replacement strategies

### Immunomodulation

**Giant Cell Myocarditis:**
- Aggressive immunosuppression
- Cyclosporine, steroids
- Often requires transplant

**Cardiac Sarcoidosis:**
- Corticosteroids first-line
- Steroid-sparing agents
- ICD for arrhythmia risk

**Checkpoint Inhibitor Myocarditis:**
- Hold checkpoint inhibitor
- High-dose corticosteroids
- Abatacept, alemtuzumab for refractory

## Device and Surgical Advances

### Leadless and Subcutaneous ICDs

**S-ICD:**
- No transvenous leads
- Infection advantage
- Cannot pace (except briefly)
- Consider for young patients without pacing need

**Leadless Pacing:**
- Combined with S-ICD (under study)
- Reduces lead-related complications

### Ventricular Assist Devices

**LVAD in Cardiomyopathy:**
- Bridge to transplant
- Destination therapy
- May allow myocardial recovery in select cases

**HeartMate 3:**
- Full magnetic levitation
- Lower pump thrombosis
- MOMENTUM 3 outcomes favorable

### Cardiac Transplantation

**Indications:**
- Refractory HF despite optimal therapy
- Recurrent life-threatening arrhythmias
- No absolute contraindications

**Cardiomyopathy-Specific Considerations:**
- Giant cell myocarditis: High recurrence risk
- Sarcoidosis: Can recur in allograft
- ATTR: Not a transplant indication (tafamidis available)
- AL amyloid: Only if hematologic remission

## Registries and Trials

### SHaRe Registry (HCM)

**Key Findings:**
- Genotype-phenotype correlations
- Lifetime outcomes data
- Informs risk stratification

### HCMR Registry

**CMR-Based Risk:**
- LGE extent and outcomes
- Apical aneurysm prevalence and risk
- Advancing imaging-based prognosis

### TRED-HF

**Recovery in DCM:**
- Pilot study of therapy withdrawal
- 40% relapse after stopping GDMT
- Argues for continued therapy even if EF normalizes

### EXPLORER-LTE

**Long-Term Mavacamten:**
- Durable benefit at 2+ years
- Continued safety
- Informs long-term management

## Future Directions

### Precision Medicine

**Variant-Specific Therapy:**
- Targeting specific mutations
- Personalized approaches

**Phenotypic Subtyping:**
- Beyond traditional classification
- Imaging + genetics + biomarkers

**AI Integration:**
- Image analysis automation
- Risk prediction models
- Treatment optimization

### Regenerative Medicine

**Cell Therapy:**
- iPSC-derived cardiomyocytes
- Early trials
- Potential for myocardial regeneration

**Cardiac Tissue Engineering:**
- Engineered heart tissue
- Research applications`,
      keyTerms: [
        { term: 'NTLA-2001', definition: 'In vivo CRISPR-based gene editing therapy for ATTR amyloidosis targeting TTR gene in liver' },
        { term: 'SHaRe registry', definition: 'Sarcomeric Human Cardiomyopathy Registry providing genotype-phenotype and outcomes data for HCM' },
        { term: 'TRED-HF', definition: 'Trial showing high relapse rate when withdrawing GDMT in DCM with recovered EF, supporting continued therapy' },
        { term: 'iPSC-derived cardiomyocytes', definition: 'Patient-specific heart cells generated from induced pluripotent stem cells for disease modeling and drug testing' },
        { term: 'subcutaneous ICD', definition: 'Defibrillator placed entirely outside the chest cavity, avoiding transvenous lead complications' },
        { term: 'checkpoint inhibitor myocarditis', definition: 'Immune-related myocarditis from cancer immunotherapy; requires aggressive immunosuppression' },
      ],
      clinicalNotes: `Key clinical pearls for advanced cardiomyopathy management:

1. **Gene-specific ICD thresholds**: LMNA cardiomyopathy has higher SCD risk than typical DCM. Use LMNA-Risk-VTA calculator; ICD considered at EF 35-45%.

2. **Mavacamten transforms obstructive HCM**: For symptomatic obstructive HCM despite beta-blockers, mavacamten reduces gradient, improves symptoms, and may eliminate need for SRT. Monitor EF closely.

3. **Cardiac amyloidosis is underdiagnosed**: Screen HFpEF patients with unexplained LVH. PYP scan + negative light chains = ATTR diagnosis without biopsy. Tafamidis reduces mortality.

4. **TRED-HF informs DCM recovery**: Even when EF normalizes, high relapse rate with GDMT withdrawal. Continue therapy indefinitely in recovered DCM.

5. **CMR LGE is prognostic**: In HCM, >15% LGE increases SCD risk. In DCM, mid-wall LGE indicates worse prognosis and may lower ICD threshold.

6. **CRISPR for ATTR is here**: NTLA-2001 shows durable TTR reduction with single infusion. Gene editing moving from research to clinic.

7. **Overlapping genes, overlapping phenotypes**: Same genes (FLNC, PLN, DSP) can cause DCM or ACM. Manage based on phenotype AND genotype.

8. **Myocarditis CMR**: Lake Louise criteria with T1/T2 mapping help diagnose inflammatory cardiomyopathy and differentiate from other DCM etiologies.`,
    },
  },

  media: [
    {
      id: 'cardiomyopathy-types',
      type: 'diagram',
      filename: 'cardiomyopathy-types.svg',
      title: 'Types of Cardiomyopathy',
      description: 'Comparison of dilated, hypertrophic, restrictive, and arrhythmogenic cardiomyopathy',
    },
    {
      id: 'hcm-lvot-obstruction',
      type: 'diagram',
      filename: 'hcm-lvot-obstruction.svg',
      title: 'LVOT Obstruction in HCM',
      description: 'Mechanism of dynamic LVOT obstruction with SAM of mitral valve',
    },
    {
      id: 'amyloid-diagnosis',
      type: 'diagram',
      filename: 'amyloid-diagnosis.svg',
      title: 'Cardiac Amyloidosis Diagnosis Algorithm',
      description: 'Approach to diagnosing and differentiating AL vs ATTR amyloidosis',
    },
  ],

  citations: [
    {
      id: 'acc-aha-hcm-2020',
      type: 'article',
      title: '2020 AHA/ACC Guideline for the Diagnosis and Treatment of Patients With Hypertrophic Cardiomyopathy',
      authors: ['Ommen SR', 'Mital S', 'Burke MA', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000000937',
    },
    {
      id: 'explorer-hcm',
      type: 'article',
      title: 'Mavacamten for Treatment of Symptomatic Obstructive Hypertrophic Cardiomyopathy',
      authors: ['Olivotto I', 'Oreziak A', 'Barrber R', 'et al.'],
      source: 'Lancet',
    },
    {
      id: 'attr-act',
      type: 'article',
      title: 'Tafamidis Treatment for Patients with Transthyretin Amyloid Cardiomyopathy',
      authors: ['Maurer MS', 'Schwartz JH', 'Gundapaneni B', 'et al.'],
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
    topics: ['cardiology', 'heart failure', 'genetics', 'electrophysiology'],
    keywords: ['cardiomyopathy', 'HCM', 'DCM', 'amyloidosis', 'genetic heart disease'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cardiomyopathy;
