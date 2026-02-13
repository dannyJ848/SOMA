/**
 * Cardiomyopathy - Comprehensive Educational Content
 *
 * Diseases of the heart muscle including dilated, hypertrophic,
 * restrictive, and other specific types of cardiomyopathy
 */

import { EducationalContent } from '../../types';

export const cardiomyopathyContent: EducationalContent = {
  id: 'cardiomyopathy',
  type: 'condition',
  name: 'Cardiomyopathy',
  alternateNames: ['Heart Muscle Disease', 'Myocardial Disease', 'DCM', 'HCM', 'RCM'],
  hpoId: 'HP:0001644',

  levels: {
    1: {
      level: 1,
      summary: 'Cardiomyopathy is a disease of the heart muscle that makes it harder for the heart to pump blood to the rest of the body.',
      explanation: `## What is Cardiomyopathy?

Cardiomyopathy (kar-dee-oh-my-AH-puh-thee) is a disease of the heart muscle. The heart muscle becomes enlarged, thick, or stiff, which makes it harder for the heart to pump blood.

## How the Heart Muscle Changes

**Normal Heart Muscle:**
- Flexible and strong
- Contracts and relaxes normally
- Pumps blood efficiently

**Cardiomyopathy Heart Muscle:**
- Weakened, thickened, or stiff
- Does not pump well
- Blood does not move through the body properly

## Types of Cardiomyopathy

### Dilated Cardiomyopathy

The heart becomes enlarged and weak.

**What happens:**
- The heart chambers stretch and get bigger
- The muscle becomes thin and weak
- Cannot pump blood strongly enough

**Symptoms:**
- Shortness of breath
- Fatigue and weakness
- Swelling in legs, ankles, feet
- Cough, especially when lying down

**Causes:**
- Heart attack damage
- Long-term high blood pressure
- Infections of the heart
- Alcohol or drug abuse
- Certain medications (chemotherapy)
- Sometimes unknown (idiopathic)

### Hypertrophic Cardiomyopathy

The heart muscle becomes abnormally thick.

**What happens:**
- Heart muscle thickens, especially between the ventricles
- Leaves less room for blood
- Heart has trouble relaxing
- Can block blood flow out of the heart

**Symptoms:**
- Chest pain during exercise
- Shortness of breath with activity
- Fainting or feeling like fainting
- Heart palpitations (racing or fluttering)

**Important:** This is the most common cause of sudden death in young athletes!

**Causes:**
- Usually inherited (runs in families)
- Gene problems passed from parent to child

### Restrictive Cardiomyopathy

The heart muscle becomes stiff and cannot relax.

**What happens:**
- Heart muscle is rigid
- Cannot fill properly with blood
- Less blood reaches the body

**Symptoms:**
- Shortness of breath
- Swelling in legs and abdomen
- Fatigue
- Nausea and poor appetite

**Causes:**
- Amyloidosis (protein buildup in heart)
- Hemochromatosis (iron overload)
- Sarcoidosis
- Scarring from previous heart damage

## Warning Signs

**Common symptoms of cardiomyopathy:**
- Shortness of breath, especially with activity or lying flat
- Swelling of legs, ankles, and feet
- Fatigue and weakness
- Rapid, pounding, or fluttering heartbeats
- Chest discomfort or pressure
- Dizziness or fainting

**When to Call 911:**
- Chest pain that does not go away
- Severe shortness of breath
- Fainting
- Rapid or irregular heartbeat with other symptoms

## Diagnosis

**Tests doctors use:**
- **Physical exam** - listening to heart and lungs
- **Echocardiogram** - ultrasound showing heart size and function
- **ECG** - electrical activity of the heart
- **Chest X-ray** - size of heart
- **Blood tests** - check for causes and damage
- **MRI** - detailed pictures of heart muscle
- **Genetic testing** - for inherited types
- **Heart biopsy** - sample of heart muscle (rarely needed)

## Treatment

**Depends on type and severity:**

**Lifestyle Changes:**
- Eat a healthy diet (low salt)
- Limit alcohol or avoid completely
- Quit smoking
- Exercise as recommended
- Manage stress
- Get enough sleep

**Medications:**
- Blood pressure medicines
- Water pills (diuretics) for swelling
- Medicines to strengthen heart contractions
- Blood thinners to prevent clots

**Procedures and Devices:**
- **Pacemaker** - for slow heartbeats
- **ICD** - shocks dangerous fast rhythms
- **CRT** - special pacemaker helping both sides work together
- **Surgery** - for certain types (septal myectomy for HCM)
- **Heart transplant** - for severe cases

## Living with Cardiomyopathy

**You can live well by:**
- Taking medications exactly as prescribed
- Keeping all medical appointments
- Monitoring your symptoms
- Knowing your family history (HCM is inherited!)
- Avoiding alcohol and drugs that can damage the heart
- Following your doctor\'s exercise recommendations
- Maintaining a healthy weight

**For Athletes:**
- Hypertrophic cardiomyopathy is the leading cause of sudden cardiac death in young athletes
- Screening with family history and physical exam is important
- Some athletes should avoid competitive sports if diagnosed

## Prevention

**You cannot prevent all cases, but you can:**
- Treat high blood pressure
- Control diabetes
- Avoid excessive alcohol
- Do not use illegal drugs
- Get treated for heart infections promptly
- Know your family history

**If someone in your family had:**
- Sudden death before age 50
- Unexplained fainting
- Diagnosed cardiomyopathy
- Get screened for inherited cardiomyopathy!`,
      keyTerms: [
        { term: 'cardiomyopathy', definition: 'Disease of the heart muscle that weakens or changes heart structure', pronunciation: 'kar-dee-oh-my-AH-puh-thee' },
        { term: 'dilated cardiomyopathy', definition: 'Heart becomes enlarged and weak, cannot pump effectively' },
        { term: 'hypertrophic cardiomyopathy', definition: 'Heart muscle becomes abnormally thick, can block blood flow' },
        { term: 'restrictive cardiomyopathy', definition: 'Heart muscle becomes stiff, cannot fill properly with blood' },
        { term: 'ICD', definition: 'Implantable cardioverter-defibrillator; device that shocks dangerous heart rhythms' },
        { term: 'sudden cardiac death', definition: 'Unexpected death from heart causes, often from dangerous rhythm' },
      ],
      analogies: [
        'Dilated cardiomyopathy is like a rubber band that has been stretched too much - it becomes weak and floppy.',
        'Hypertrophic cardiomyopathy is like a muscle that has been over-exercised - it becomes too thick and bulky.',
        'Restrictive cardiomyopathy is like a balloon with stiff walls - it does not expand easily.',
      ],
      examples: [
        'A young athlete suddenly collapses during a game - this could be undiagnosed hypertrophic cardiomyopathy.',
        'Someone who has been a heavy drinker for years develops shortness of breath and swelling - this could be alcohol-related dilated cardiomyopathy.',
        'A person notices they feel tired easily and their ankles are swollen - this could be early cardiomyopathy.',
      ],
      patientCounselingPoints: [
        'Take all medications exactly as prescribed - do not skip doses',
        'Report any worsening symptoms promptly to your doctor',
        'Know your family history of heart disease or sudden death',
        'Avoid alcohol and illegal drugs that can damage the heart',
        'Follow dietary recommendations (usually low salt)',
        'Exercise only as recommended by your doctor',
        'If you have an ICD, carry your device card and inform security at airports',
        'Family members may need screening if you have inherited cardiomyopathy',
        'Ask about genetic counseling if you have inherited cardiomyopathy',
        'Discuss pregnancy plans with cardiologist if you are a woman of childbearing age',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiomyopathy is a heterogeneous group of diseases of the myocardium associated with mechanical and/or electrical dysfunction, classified by morphologic and functional phenotypes (dilated, hypertrophic, restrictive).',
      explanation: `## Cardiomyopathy

**Definition:** Diseases of the heart muscle resulting in mechanical and/or electrical dysfunction, typically exhibiting inappropriate ventricular hypertrophy or dilation, and caused by multiple genetic and acquired factors.

## Classification

### By Morphology and Function

**Dilated Cardiomyopathy (DCM):**
- Chamber dilation and systolic dysfunction
- Reduced contractility
- Most common type requiring transplant

**Hypertrophic Cardiomyopathy (HCM):**
- Hypertrophy (wall thickening) without dilation
- Diastolic dysfunction
- Dynamic LVOT obstruction in 70%

**Restrictive Cardiomyopathy (RCM):**
- Restrictive filling with normal or near-normal systolic function
- Biatrial enlargement
- Myocardial stiffness

### By Cause

**Primary (Genetic):**
- DCM: Titin (TTN), lamin (LMNA) mutations
- HCM: β-myosin heavy chain, myosin-binding protein C
- RCM: Familial forms rare

**Secondary (Acquired):**
- Ischemic (prior MI)
- Toxic (alcohol, chemotherapy)
- Inflammatory (myocarditis)
- Infiltrative (amyloidosis, hemochromatosis)
- Endocrine (thyroid, diabetes)
- Peripartum

## Dilated Cardiomyopathy

**Definition:** Characterized by ventricular chamber enlargement and systolic dysfunction with normal left ventricular wall thickness.

**Epidemiology:**
- Prevalence: 1 in 2500 adults
- More common in men
- Can occur at any age

**Etiology:**

**Genetic (30-40%):**
- Autosomal dominant
- Titin truncations (TTN) most common
- Lamin A/C (LMNA): High arrhythmia risk
- Multiple other genes

**Acquired:**
- **Ischemic:** Prior MI, CAD
- **Toxic:** Alcohol (most common reversible cause), cocaine, chemotherapy (doxorubicin)
- **Inflammatory:** Viral myocarditis (Coxsackie B, adenovirus, HIV, COVID-19)
- **Metabolic:** Thyroid disease, diabetes, nutritional
- **Peripartum:** Last month of pregnancy or 5 months postpartum
- **Tachycardia-induced:** Persistent tachyarrhythmia

**Pathophysiology:**
- Chamber dilation → increased wall stress (Laplace law)
- Reduced contractility → decreased cardiac output
- Compensatory mechanisms (RAAS, SNS)
- Progressive remodeling

**Clinical Presentation:**
- Symptoms of HF: Dyspnea, fatigue, edema
- Arrhythmias: AF, VT
- Thromboembolism: From LV thrombus
- Sudden cardiac death

## Hypertrophic Cardiomyopathy

**Definition:** Primary myocardial disease characterized by myocardial hypertrophy, myocyte disarray, and fibrosis without an identifiable cause.

**Epidemiology:**
- Prevalence: 1 in 500 adults
- Most common genetic cardiovascular disease
- Leading cause of SCD in young athletes

**Genetics:**
- Autosomal dominant (50% inheritance)
- Sarcomere protein mutations:
  - β-myosin heavy chain (MYH7)
  - Myosin-binding protein C (MYBPC3)
- Penetrance incomplete and age-dependent

**Pathophysiology:**
- **Myocyte disarray:** Chaotic arrangement
- **Myocardial fibrosis:** Replacement fibrosis
- **Small vessel disease:** Abnormal intramural arteries
- **Diastolic dysfunction:** Impaired relaxation
- **LVOT obstruction:** Dynamic (70%)

**LVOT Obstruction:**
- Systolic anterior motion (SAM) of mitral valve
- Septal hypertrophy narrows outflow tract
- Worsens with: Decreased preload, decreased afterload, increased contractility

**Clinical Presentation:**
- Asymptomatic (most common)
- Exertional dyspnea (diastolic dysfunction)
- Angina (increased MVO2, small vessel disease)
- Syncope (LVOT obstruction, arrhythmias)
- Sudden cardiac death (ventricular arrhythmias)

## Restrictive Cardiomyopathy

**Definition:** Characterized by restrictive filling and reduced diastolic volume with normal or near-normal systolic function and wall thickness.

**Etiology:**

**Infiltrative:**
- **Amyloidosis:** Most common cause
  - AL (light chain): Plasma cell dyscrasia
  - ATTR (transthyretin): Wild-type or hereditary
- **Sarcoidosis:** Granulomatous inflammation
- **Gaucher disease:** Lipid accumulation

**Storage:**
- **Hemochromatosis:** Iron overload
- **Fabry disease:** Glycolipid accumulation
- **Glycogen storage:** Rare

**Non-infiltrative:**
- **Scleroderma:** Collagen deposition
- **Radiation:** Fibrosis
- **Carcinoid:** Serotonin deposition

**Pathophysiology:**
- Myocardial stiffness → restricted filling
- Diastolic dysfunction predominates
- Biatrial enlargement
- Elevated filling pressures
- Pulmonary and systemic congestion

**Clinical Presentation:**
- Symptoms of HF with preserved EF
- Prominent right-sided signs (JVD, edema, ascites)
- Arrhythmias (AF common)
- Signs of systemic disease (amyloid, sarcoid)`,
      keyTerms: [
        { term: 'systolic dysfunction', definition: 'Reduced ability of the heart to contract and pump blood' },
        { term: 'diastolic dysfunction', definition: 'Impaired ability of the heart to relax and fill properly' },
        { term: 'LVOT', definition: 'Left ventricular outflow tract; path from LV to aorta' },
        { term: 'SAM', definition: 'Systolic anterior motion; abnormal movement of mitral valve in HCM' },
        { term: 'myocyte disarray', definition: 'Chaotic arrangement of heart muscle cells; hallmark of HCM' },
        { term: 'peripartum cardiomyopathy', definition: 'Heart muscle weakness developing near the end of pregnancy or after delivery' },
        { term: 'amyloidosis', definition: 'Deposition of abnormal protein in tissues including the heart' },
      ],
      analogies: [
        'DCM is like a balloon that has been over-inflated - it becomes stretched and weak.',
        'HCM is like a bodybuilder\'s heart - muscles become thick but may not function normally.',
        'RCM is like trying to fill a stiff bag - it does not expand easily.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiomyopathy requires comprehensive evaluation including echocardiography, cardiac MRI, genetic testing, and endomyocardial biopsy when indicated, with management tailored to specific phenotype and etiology.',
      explanation: `## Cardiomyopathy: Diagnosis and Management

## Diagnostic Evaluation

### Initial Assessment

**History:**
- Family history of cardiomyopathy, SCD, or unexplained death
- Personal history of myocarditis, toxins, radiation
- Medication exposure (chemotherapy)
- Alcohol use
- Pregnancy status

**Physical Examination:**
- Signs of HF (rales, edema, JVD)
- Murmurs (MR in DCM, SAM in HCM)
- Extra heart sounds (S3 in DCM, S4 in RCM)
- Hepatomegaly, ascites (right-sided HF)

### Echocardiography

**Dilated Cardiomyopathy:**
- LV and RV dilation
- Reduced EF (usually <40%)
- Wall thinning
- Functional MR (annular dilation)

**Hypertrophic Cardiomyopathy:**
- LV wall thickness ≥15 mm (≥13 mm with family history)
- Asymmetric septal hypertrophy
- SAM of mitral valve
- LVOT obstruction (gradient >30 mmHg)

**Restrictive Cardiomyopathy:**
- Normal LV wall thickness
- Biatrial enlargement
- Normal or near-normal EF
- Abnormal diastolic function

### Cardiac MRI

**Indications:**
- Inconclusive echo
- Tissue characterization
- Fibrosis detection (late gadolinium enhancement)
- Excluding alternative diagnoses

**Findings:**

**DCM:**
- LGE: Mid-myocardial or subepicardial
- Patterns suggest specific etiologies

**HCM:**
- LGE: Common (60-70%)
- Fibrosis pattern predicts SCD risk

**RCM (Amyloid):**
- Diffuse subendocardial LGE
- Abnormal gadolinium kinetics

**RCM (Sarcoid):**
- Patchy mid-myocardial LGE
- Matches FDG-PET uptake

### Genetic Testing

**Indications:**
- HCM: Confirm diagnosis, family screening
- DCM: Family history of cardiomyopathy or SCD
- RCM: Suspected infiltrative disease

**Approach:**
- Test proband first
- If pathogenic variant found → cascade testing of relatives
- Genetic counseling recommended

### Endomyocardial Biopsy

**Indications (Class I):**
- Unexplained HFrEF <2 weeks duration (fulminant myocarditis)
- Unexplained HFrEF 2 weeks-3 months (giant cell myocarditis)

**Indications (Class IIa):**
- Suspected infiltrative disease (amyloid, sarcoid)
- Monitoring transplant rejection

### Biomarkers

**BNP/NT-proBNP:**
- Elevated in HF
- Prognostic value
- Monitoring response to therapy

**Troponin:**
- Elevated in active myocarditis
- May be chronically elevated in HCM, amyloid

## Dilated Cardiomyopathy Management

### Guideline-Directed Medical Therapy

**Standard HFrEF Therapy (GDMT):**
- ACEI/ARB/ARNI
- Evidence-based beta-blocker
- MRA
- SGLT2 inhibitor

**Add as Needed:**
- Ivabradine (if HR ≥70 despite max beta-blocker)
- Digoxin (persistent symptoms)

### Etiology-Specific Therapy

**Alcohol-Related:**
- Complete abstinence
- May recover partially or completely

**Peripartum:**
- Standard HFrEF therapy
- Bromocriptin (some evidence)
- Avoid future pregnancies (high recurrence risk)

**Chemotherapy-Induced:**
- Discontinue offending agent
- Consider if recovery before rechallenge
- More common with anthracyclines (doxorubicin)

**Myocarditis:**
- Supportive care
- GDMT for LV dysfunction
- Immunosuppression for giant cell, eosinophilic, autoimmune types

### Device Therapy

**ICD for Primary Prevention:**
- LVEF ≤35% after ≥40 days of medical therapy
- NYHA II-III symptoms

**ICD for Secondary Prevention:**
- Prior cardiac arrest or VT

**CRT:**
- LBBB with QRS ≥150 ms
- LVEF ≤35%
- NYHA II-IV symptoms

## Hypertrophic Cardiomyopathy Management

### Medical Therapy

**Beta-Blockers (First-Line):**
- Reduce heart rate → improve filling
- Reduce contractility → reduce obstruction
- Metoprolol, propranolol, atenolol

**Non-DHP CCB:**
- Verapamil (alternative to beta-blocker)
- Diltiazem

**Disopyramide:**
- Add for refractory symptoms
- Negative inotrope
- Side effects: Anticholinergic, constipation

### Septal Reduction Therapy

**Indications:**
- NYHA III-IV symptoms despite medical therapy
- LVOT gradient >50 mmHg at rest or with provocation

**Surgical Myectomy:**
- Gold standard for obstruction
- Resection of septal muscle
- Mortality <1% at experienced centers
- Immediate symptom relief

**Alcohol Septal Ablation:**
- Alternative to surgery
- Controlled infarction of septum
- Less invasive
- Potential for complete heart block requiring pacemaker

### SCD Prevention

**ICD Indications (Class I):**
- Prior cardiac arrest or spontaneous VT
- Family history of SCD (especially first-degree relative)
- Massive hypertrophy (wall thickness ≥30 mm)
- Unexplained syncope
- NSVT on Holter
- Abnormal BP response to exercise
- LGE on MRI (extensive)

**Risk Stratification:**
- European HCM Risk-SCD score (5-year risk)
- Shared decision-making

## Restrictive Cardiomyopathy Management

### General Principles

**Diuretics:**
- For congestion
- Be cautious (preload dependent)

**Treat Underlying Cause:**

**Amyloidosis:**
- AL: Chemotherapy targeting plasma cells
- ATTR: Tafamidis (TTR stabilizer)

**Hemochromatosis:**
- Phlebotomy
- Chelation therapy

**Sarcoidosis:**
- Corticosteroids
- Immunosuppressants

**Arrhythmia Management:**
- Atrial fibrillation common
- Anticoagulation if AF (high thromboembolic risk)
- Consider pacemaker for conduction disease`,
      keyTerms: [
        { term: 'LGE', definition: 'Late gadolinium enhancement; MRI marker of myocardial fibrosis/scar' },
        { term: 'cascade testing', definition: 'Genetic testing of family members after pathogenic variant identified in proband' },
        { term: 'septal myectomy', definition: 'Surgical removal of part of thickened septum in HCM' },
        { term: 'alcohol septal ablation', definition: 'Catheter-based procedure creating controlled septal infarction' },
        { term: 'NSVT', definition: 'Non-sustained ventricular tachycardia; VT <30 seconds, self-terminating' },
        { term: 'giant cell myocarditis', definition: 'Rare, fulminant myocarditis with giant cells on biopsy' },
        { term: 'tafamidis', definition: 'TTR stabilizer medication for ATTR cardiac amyloidosis' },
      ],
      clinicalNotes: 'For HCM, screen first-degree relatives with echo, ECG, and genetic testing if pathogenic variant identified. In DCM, look for reversible causes (alcohol, thyroid, pregnancy) before committing to permanent therapy. For suspected RCM, tissue diagnosis (biopsy) is often needed. Consider cardiac MRI for all cardiomyopathy cases where echo is inconclusive or tissue characterization needed.',
    },
    4: {
      level: 4,
      summary: 'Management of cardiomyopathy requires phenotypic diagnosis, etiology-specific treatment, GDMT for reduced EF, risk stratification for SCD, and consideration of advanced therapies including MCS and transplantation.',
      explanation: `## Advanced Cardiomyopathy Management

## Dilated Cardiomyopathy

### Etiology-Specific Management

**Genetic DCM:**
- Titin (TTN) truncations: Most common
- Lamin A/C (LMNA): High arrhythmia risk, consider early ICD
- Phospholamban (PLN): Arrhythmias, progressive HF
- Genetic counseling recommended

**Myocarditis:**

**Acute:**
- Supportive care
- GDMT for LV dysfunction
- Mechanical support if severe (IABP, Impella, ECMO)

**Fulminant:**
- Aggressive hemodynamic support
- Consider ECMO
- Recovery possible (up to 50%)

**Giant Cell Myocarditis:**
- Rare, fulminant
- Combination immunosuppression
- High mortality without transplant
- Early transplant evaluation

**Peripartum Cardiomyopathy:**

**Risk Factors:**
- Age >30
- African descent
- Multiparity
- Hypertensive disorders of pregnancy
- Multiple gestation

**Management:**
- Standard HFrEF therapy (avoid ACEI/ARB during pregnancy)
- Bromocriptin: Prolactin inhibition may improve recovery
- Consider therapeutic anticoagulation (high thromboembolic risk)

**Prognosis:**
- 50% recover to normal EF
- Future pregnancy: High risk of recurrence (25-50%)
- Avoid future pregnancies if EF does not recover

**Arrhythmogenic Right Ventricular Cardiomyopathy (ARVC):**
- Desmosomal protein mutations (plakophilin, desmoplakin)
- Fibrofatty replacement of RV myocardium
- Ventricular arrhythmias
- ICD for secondary prevention, high-risk primary prevention
- Consider catheter ablation for recurrent VT

### Advanced Therapies for DCM

**Indications for Advanced HF Referral:**
- NYHA III-IV despite optimal GDMT
- Frequent hospitalizations
- Dependence on inotropes
- Progressive cardiac cachexia

**Mechanical Circulatory Support:**
- Bridge to transplant
- Destination therapy
- Bridge to recovery (rare in DCM)

**Heart Transplantation:**
- Indicated for end-stage HF despite optimal therapy
- Contraindications: Active infection, malignancy, severe pulmonary hypertension, psychosocial issues

## Hypertrophic Cardiomyopathy

### Advanced Management

**Refractory Obstructive HCM:**

**Combined Pharmacologic Therapy:**
- Beta-blocker + disopyramide
- Consider add-on therapy before septal reduction

**Septal Myectomy:**
- Mortality <1% at experienced centers
- Immediate gradient relief
- Symptom improvement in >90%
- Consider concurrent mitral repair if needed

**Alcohol Septal Ablation:**
- Gradient reduction similar to surgery
- Less invasive
- Higher rate of pacemaker requirement (10-15%)
- Potential for incomplete reduction requiring repeat

**Combined or Sequential:**
- Some patients require both procedures

### Atrial Fibrillation in HCM

**Prevalence:**
- Occurs in 20-25% of patients
- Increases with age and LA size

**Management:**
- Anticoagulation regardless of CHA₂DS₂-VASc score
- Rhythm control preferred (symptoms, stroke risk)
- Amiodarone or disopyramide for rhythm control
- Consider surgical/ablation maze procedure during myectomy

### HCM Phenocopies

**Athlete\'s Heart:**
- Mild hypertrophy (13-14 mm)
- Normal diastolic function
- Reverses with detraining (3-6 months)
- Distinguish from HCM (genetic testing, deconditioning)

**Fabry Disease:**
- X-linked lysosomal storage disorder
- Concentric hypertrophy
- Enzyme replacement therapy available
- Screen for (alpha-galactosidase A activity)

**Danon Disease:**
- X-linked dominant
- LAMP2 mutation
- Severe hypertrophy, high SCD risk
- Poor prognosis, early transplant

### Emerging HCM Therapies

**Mavacamten (Camzyos):**
- Myosin inhibitor
- Reduces hypercontractility
- EXPLORER-HCM: Improved symptoms, exercise capacity
- FDA approved (2022)
- Monitoring: Starting and steady-state echocardiograms required

**CK-274:**
- Similar myosin modulator
- Early trials promising

## Restrictive Cardiomyopathy

### Amyloidosis

**AL (Light Chain):**
- Plasma cell dyscrasia
- Bone marrow biopsy diagnostic
- Serum/urine protein electrophoresis
- Serum free light chains
- Requires hematologic treatment

**ATTR (Transthyretin):**
- Wild-type: Older males, cardiac predominant
- Hereditary: Mutations in TTR gene
- PYP scan diagnostic (Grade 2-3 uptake)
- Genetic testing to differentiate

**Treatment:**

**AL:**
- Chemotherapy targeting plasma cells
- Bortezomib-based regimens
- Autologous stem cell transplant for selected patients
- Do NOT use tafamidis (different disease)

**ATTR Wild-Type:**
- Tafamidis 61 mg daily
- Slows disease progression
- Improves survival

**ATTR Hereditary:**
- Tafamidis
- Patisiran, vutrisiran (RNA interference)
- Inotersen (antisense oligonucleotide)

**Prognosis:**
- AL untreated: Median survival <6 months
- AL treated: Median survival 3-5 years
- ATTR with tafamidis: Median survival 5-7 years

### Sarcoidosis

**Diagnosis:**
- Cardiac MRI: LGE, edema
- FDG-PET: Active inflammation
- Endomyocardial biopsy: Low yield
- Japanese Ministry of Health criteria

**Treatment:**
- Corticosteroids for active inflammation
- Steroid-sparing agents (methotrexate, azathioprine)
- ICD for ventricular arrhythmias or LVEF ≤35%

## Pregnancy Considerations

**Preconception Counseling:**
- Risk stratification essential
- Discuss medication adjustments
- Some conditions contraindicate pregnancy

**High-Risk Conditions:**
- Peripartum cardiomyopathy (high recurrence)
- Severe HCM with obstruction
- Systemic amyloidosis
- Pulmonary hypertension

**Medication Adjustments:**
- ACEI/ARB/ARNI: Contraindicated (teratogenic)
- Switch to hydralazine-nitrate or continue ARNI only if essential
- Beta-blockers: Generally safe
- MRA: Avoid (teratogenic)
- SGLT2i: Insufficient data, generally avoided
- Warfarin: Avoid first trimester, use heparin
- DOACs: Insufficient data, generally avoided`,
      keyTerms: [
        { term: 'fulminant myocarditis', definition: 'Severe, rapidly progressive myocarditis requiring hemodynamic support' },
        { term: 'ARVC', definition: 'Arrhythmogenic right ventricular cardiomyopathy; fibrofatty RV replacement' },
        { term: 'mavacamten', definition: 'Myosin inhibitor for obstructive HCM; reduces hypercontractility' },
        { term: 'PYP scan', definition: 'Technetium pyrophosphate scan; diagnostic for ATTR amyloidosis' },
        { term: 'patisiran', definition: 'RNA interference therapy for hereditary ATTR amyloidosis' },
        { term: 'desmosomal', definition: 'Related to desmosomes; cell junctions mutated in ARVC' },
        { term: 'phenocopy', definition: 'Condition mimicking another disease; athlete\'s heart mimics HCM' },
      ],
      clinicalNotes: 'For DCM, always look for reversible causes before committing to permanent therapy. In HCM, screen all first-degree relatives. For amyloidosis, distinguishing AL from ATTR is critical - treatments differ completely. Consider cardiac MRI for tissue characterization when echo is inconclusive. Genetic testing increasingly important - screen family members when pathogenic mutation identified. Mavacamten is new option for obstructive HCM - requires echo monitoring due to risk of reduced EF.',
    },
    5: {
      level: 5,
      summary: 'Contemporary cardiomyopathy management integrates genetic testing, advanced imaging, phenotype-specific therapies, novel pharmacologic agents, and individualized decision-making for devices and advanced therapies.',
      explanation: `## Evidence-Based Cardiomyopathy Management

## Landmark Trials and Guidelines

### Dilated Cardiomyopathy

**GDMT Evolution:**
- **V-HeFT I (1986):** Hydralazine-nitrate reduced mortality in HFrEF
- **CONSENSUS (1987):** Enalapril reduced mortality in severe HF
- **MERIT-HF, CIBIS-II:** Beta-blockers reduced mortality
- **RALES (1999):** Spironolactone benefit in severe HF
- **PARADIGM-HF (2014):** ARNI superior to enalapril
- **DAPA-HF, EMPEROR-Reduced (2019-2020):** SGLT2i benefit regardless of diabetes

**Recent Advances:**

**Ivabradine:**
- SHIFT (2010): Reduced HF hospitalization in HFrEF with HR ≥70

**Vericiguat:**
- VICTORIA (2020): Modest reduction in CV events in high-risk HFrEF

**Omecamtiv Mecarbil:**
- GALACTIC-HF (2021): Reduced HF events in HFrEF
- Benefit greatest in EF <28%

### Hypertrophic Cardiomyopathy

**Risk Stratification:**

**ESC HCM Risk-SCD Model:**
- Calculates 5-year SCD risk
- Variables: Age, wall thickness, LA size, LVOT gradient, family history, NSVT, unexplained syncope
- ICD if 5-year risk ≥6% (consider 4-6%)

**AHA Approach:**
- Major risk factors guide ICD decision
- Shared decision-making

**Septal Reduction:**

**Surgical Myectomy:**
- Long-standing gold standard
- Mortality <1% at experienced centers
- Immediate gradient relief

**Alcohol Septal Ablation:**
- Less invasive
- Similar outcomes in experienced centers
- Higher pacemaker rate

**Mavacamten:**
- EXPLORER-HCM (2020):
  - Improved NYHA class
  - Increased exercise capacity
  - Reduced LVOT gradient
- VALOR-HCM (2022):
  - Reduced need for septal reduction
- FDA approved 2022
- Requires monitoring: Baseline, 4 weeks, then every 3-6 months
- Do not use if EF <55%

### Amyloidosis

**Diagnostic Advances:**

**Non-Biopsy Diagnosis of ATTR:**
- PYP scan Grade 2-3 uptake
- Negative monoclonal protein studies
- No biopsy needed if above criteria met

**AL Exclusion:**
- Serum and urine protein electrophoresis
- Serum free light chains
- If abnormal: Hematology referral

**Treatment Evolution:**

**ATTR:**
- **Tafamidis (TTR stabilizer):**
  - ATTR-ACT trial (2018): Reduced mortality, hospitalizations
  - First disease-modifying therapy for ATTR

- **RNA Therapeutics:**
  - Patisiran (ONeil 2020): Improved outcomes
  - Vutrisiran (HELIOS-A 2021): Similar benefit
  - Inotersen (NEJM 2018): Benefit but more toxicity

**AL:**
- **Bortezomib-based regimens:** Improved survival
- **Daratumumab:** Emerging data
- **Stem cell transplant:** For selected patients

### Peripartum Cardiomyopathy

**IPAC Study:**
- Registry of women with PPCM
- 50% recover to EF >50%
- Risk factors for poor recovery:
  - LVEF <30% at diagnosis
  - African American race
  - Later presentation

**Bromocriptin:**
- Some evidence for benefit
- Prolactin inhibition may help recovery
- Not yet standard of care
- Requires anticoagulation (thrombotic risk)

### Myocarditis

**Current Management:**

**Acute Lymphocytic Myocarditis:**
- Supportive care (most recover)
- GDMT for LV dysfunction
- Consider temporary MCS if severe

**Giant Cell Myocarditis:**
- Fulminant course
- Combination immunosuppression
- Early transplant evaluation

**COVID-19 Myocarditis:**
- Myocarditis-like presentation possible
- Elevated troponin
- Normal coronary arteries
- Cardiac MRI: Lake Louise criteria
- Usually self-limited

**Vaccine-Associated Myocarditis:**
- Rare (mRNA vaccines)
- Usually mild
- Complete recovery typical

## Genetics and Precision Medicine

**Genetic Testing Indications:**

**HCM:**
- Confirm diagnosis
- Family screening
- Reproductive counseling

**DCM:**
- Family history of DCM or SCD
- Early onset (<40 years)
- Ventricular arrhythmias

**Rationale:**
- Cascade testing of relatives
- Prognostic information
- Therapeutic implications (LMNA high arrhythmia risk)

**Counseling:**
- Pre- and post-test genetic counseling
- Discuss implications for relatives
- Psychosocial impact
- Insurance considerations (GINA protections)

## Advanced Therapies

**Mechanical Circulatory Support:**
- **LVAD:** Bridge to transplant or destination therapy
- **Total Artificial Heart:** For biventricular failure
- **ECMO:** Bridge to decision or recovery

**Heart Transplantation:**
- Indicated for end-stage HF
- Donor shortage limits availability
- Long-term outcomes: Median survival ~12 years
- Immunosuppression required

**Palliative Care:**
- Important for advanced HF
- Symptom management
- Goals of care discussions
- Quality of life focus

## Emerging Therapies

**Gene Therapy:**
- **SERCA2a (CUPID):** Initial promise not confirmed
- **AAV1.SERCA2a:** CUPID 2 negative
- Research ongoing

**Cell Therapy:**
- **Stem cells:** Mixed results
- **iPS cells:** Early research

**CRISPR/Cas9:**
- Potential for gene editing
- Early research

**Exosome Therapy:**
- Paracrine effects
- Early research

**Novel Pharmacologic:**
- **SGLT2 inhibitors:** Now indicated for all HFrEF
- **Vericiguat:** Add-on for high-risk HFrEF
- **Omecamtiv:** Myosin activator for HFrEF

## Controversies

**ICD in Non-Ischemic DCM:**
- DANISH trial: No overall ICD benefit
- Benefit in patients <68 years
- Individualize decision

**ICD Timing Post-MI:**
- Wait ≥40 days post-MI
- Allows for recovery
- Early ICD not beneficial (DINAMIT, IRIS trials)

**CRT in Non-LBBB:**
- Less benefit than LBBB
- Consider if QRS ≥150 ms
- Individualize

**Athletic Participation:**
- HCM with risk factors: Disqualify from competitive sports
- DCM with LV dysfunction: Restrict
- Shared decision-making essential`,
      keyTerms: [
        { term: 'GDMT', definition: 'Guideline-directed medical therapy; evidence-based HF medications' },
        { term: 'EXPLORER-HCM', definition: 'Trial showing mavacamten benefit in obstructive HCM' },
        { term: 'ATTR-ACT', definition: 'Trial establishing tafamidis benefit in ATTR amyloidosis' },
        { term: 'Lake Louise criteria', definition: 'Cardiac MRI criteria for diagnosing myocarditis' },
        { term: 'IPAC study', definition: 'Registry of peripartum cardiomyopathy outcomes' },
        { term: 'GINA', definition: 'Genetic Information Nondiscrimination Act; protects against genetic discrimination' },
        { term: 'DANISH trial', definition: 'ICD in non-ischemic DCM showing no overall benefit but benefit in younger patients' },
      ],
      clinicalNotes: `GDMT for HFrEF now includes quadruple therapy: ARNI + beta-blocker + MRA + SGLT2i. For HCM, screen all first-degree relatives with echo and ECG; consider genetic testing. Mavacamten is new option for obstructive HCM - requires echo monitoring for EF reduction. For amyloidosis, distinguish AL from ATTR - treatments differ completely. PYP scan can diagnose ATTR without biopsy if monoclonal protein studies negative. ICD timing after MI: wait ≥40 days for recovery. Consider palliative care early in advanced HF. Genetic counseling essential when genetic testing performed.`,
      patientCounselingPoints: [
        'Take all medications exactly as prescribed for your specific type of cardiomyopathy',
        'Report any worsening symptoms, palpitations, or dizziness promptly',
        'Know your family history and ask about screening for relatives',
        'Avoid alcohol completely if alcohol-related cardiomyopathy diagnosed',
        'Follow exercise recommendations from your cardiologist (avoid intense exercise if HCM)',
        'If you have an ICD, carry your device identification card',
        'Women: Discuss pregnancy plans with cardiologist before becoming pregnant',
        'Consider genetic counseling if you have inherited cardiomyopathy',
        'Maintain healthy weight, diet, and stress management',
        'Attend all scheduled follow-up appointments and imaging studies',
      ],
    },
  },

  media: [
    {
      id: 'cardiomyopathy-types',
      type: 'diagram',
      filename: 'cardiomyopathy-classification.svg',
      title: 'Types of Cardiomyopathy',
      description: 'Dilated, hypertrophic, and restrictive patterns',
    },
    {
      id: 'hcm-pathophysiology',
      type: 'diagram',
      filename: 'hcm-pathophysiology.svg',
      title: 'Hypertrophic Cardiomyopathy Pathophysiology',
      description: 'LVOT obstruction, SAM, myocyte disarray',
    },
    {
      id: 'dcm-vs-normal',
      type: 'diagram',
      filename: 'dcm-vs-normal-heart.svg',
      title: 'Dilated Cardiomyopathy vs Normal',
      description: 'Chamber enlargement and wall thinning',
    },
  ],

  citations: [
    {
      id: 'aha-hcm-2020',
      type: 'article',
      title: '2020 AHA/ACC Guideline for the Diagnosis and Treatment of Patients With Hypertrophic Cardiomyopathy',
      authors: ['Maron BJ', 'et al.'],
      source: 'Circulation',
    },
    {
      id: 'esc-cardiomyopathy-2022',
      type: 'article',
      title: '2022 ESC Guidelines on cardiomyopathies',
      authors: ['Charron P', 'et al.'],
      source: 'European Heart Journal',
    },
    {
      id: 'statPearls-cmd',
      type: 'website',
      title: 'Dilated Cardiomyopathy',
      authors: ['Sampaio R'],
      source: 'StatPearls Publishing',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK557541/',
    },
  ],

  crossReferences: [
    { targetId: 'heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'arrhythmia', targetType: 'condition', relationship: 'related', label: 'Arrhythmia' },
    { targetId: 'valvular-disease', targetType: 'condition', relationship: 'related', label: 'Valvular Disease' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'heart muscle disease', 'genetics'],
    keywords: ['DCM', 'HCM', 'RCM', 'amyloidosis', 'sudden death', 'GDMT'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'genetics'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cardiomyopathyContent;
