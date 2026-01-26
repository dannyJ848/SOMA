/**
 * Cardiac Medications - Comprehensive Educational Content
 *
 * Covers major classes of cardiovascular medications including
 * antiarrhythmics, antihypertensives, anticoagulants, antiplatelets,
 * lipid-lowering agents, and heart failure medications.
 */

import { EducationalContent } from '../../types';

export const cardiacMedications: EducationalContent = {
  id: 'topic-cardiac-medications',
  type: 'topic',
  name: 'Cardiac Medications',
  alternateNames: [
    'Cardiovascular Pharmacology',
    'Cardiac Drugs',
    'CV Medications',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Cardiac medications are drugs that help the heart work better and treat problems like high blood pressure, chest pain, and irregular heartbeats.',
      explanation: `**What Are Cardiac Medications?**

Cardiac medications are medicines that help keep your heart and blood vessels healthy. Doctors prescribe them to treat many different heart problems.

**Common Types of Heart Medicines:**

**1. Blood Pressure Medicines**
- Help relax blood vessels so blood flows more easily
- Lower the pressure against which your heart must pump
- Common names: lisinopril, amlodipine, hydrochlorothiazide

**2. Water Pills (Diuretics)**
- Help your body get rid of extra water and salt
- Reduce swelling in feet and ankles
- Lower blood pressure
- Common name: furosemide (Lasix)

**3. Heart Rhythm Medicines**
- Help keep your heartbeat steady and regular
- Treat fast or irregular heartbeats
- Common names: metoprolol, amiodarone

**4. Blood Thinners**
- Help prevent dangerous blood clots
- Important for people who have had heart attacks or strokes
- Common names: warfarin (Coumadin), clopidogrel (Plavix)

**5. Cholesterol Medicines**
- Lower bad cholesterol in the blood
- Help prevent plaque buildup in arteries
- Common name: atorvastatin (Lipitor)

**6. Nitroglycerin**
- Quick-relief medicine for chest pain (angina)
- Helps blood vessels open wider
- Comes as a small tablet or spray

**Important Tips:**
- Take your medicines exactly as prescribed
- Never skip doses or stop without asking your doctor
- Tell your doctor about side effects
- Keep a list of all your medicines with you

**Warning:**
Some heart medicines can interact with other drugs, foods, or supplements. Always check with your doctor or pharmacist before starting anything new.`,
      keyTerms: [
        { term: 'blood pressure', definition: 'The force of blood pushing against blood vessel walls' },
        { term: 'diuretic', definition: 'A medicine that helps the body get rid of extra water and salt', pronunciation: 'dy-ur-ET-ik' },
        { term: 'blood thinner', definition: 'Medicine that helps prevent blood clots from forming' },
        { term: 'cholesterol', definition: 'A fat-like substance in the blood; too much can clog arteries', pronunciation: 'koh-LES-ter-all' },
        { term: 'angina', definition: 'Chest pain or discomfort that happens when heart doesn\'t get enough blood' },
      ],
      analogies: [
        'Blood pressure medicine is like opening a wider lane on a highway - it lets traffic (blood) flow more easily.',
        'Diuretics are like releasing water from a dam - they reduce the fluid burden on your heart.',
        'Blood thinners are like adding a special additive to motor oil - they help prevent sludge (clots) from forming.',
      ],
      examples: [
        'Someone with high blood pressure might take lisinopril every morning to help keep their numbers in a healthy range.',
        'A person who has had a heart attack might take aspirin and another blood thinner to prevent another attack.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiovascular pharmacology includes multiple drug classes with distinct mechanisms: beta-blockers reduce heart rate and contractility, ACE inhibitors relax blood vessels, calcium channel blockers affect cardiac conduction and vascular tone, diuretics promote fluid loss, and statins lower cholesterol.',
      explanation: `## Major Cardiovascular Drug Classes

### 1. Beta-Blockers

**Mechanism:** Block beta-adrenergic receptors, reducing effects of epinephrine

**Effects:**
- Decreased heart rate
- Decreased contractility (force of heart contraction)
- Decreased blood pressure
- Reduced myocardial oxygen demand

**Common Drugs:**
- Metoprolol (Lopressor, Toprol)
- Atenolol (Tenormin)
- Propranolol (Inderal)
- Carvedilol (Coreg) - also alpha-blockade
- Bisoprolol (Zebeta)

**Uses:**
- Hypertension
- Angina
- Heart failure
- Arrhythmias (AFib rate control)
- Post-MI

### 2. ACE Inhibitors

**Mechanism:** Block angiotensin-converting enzyme, preventing angiotensin II production

**Effects:**
- Vasodilation (arteries and veins)
- Reduced aldosterone secretion
- Decreased blood pressure
- Reduced cardiac afterload

**Common Drugs:**
- Lisinopril (Prinivil, Zestril)
- Enalapril (Vasotec)
- Ramipril (Altace)
- Benazepril (Lotensin)

**Uses:**
- Hypertension (first-line)
- Heart failure (cornerstone therapy)
- Diabetic nephropathy (kidney protection)
- Post-MI

**Side Effects:** Dry cough, hyperkalemia, angioedema (rare)

### 3. Calcium Channel Blockers

**Mechanism:** Block calcium entry into cells

**Types:**

**Dihydropyridines (vascular effects):**
- Amlodipine (Norvasc)
- Nifedipine (Procardia)
- Felodipine (Plendil)

**Non-dihydropyridines (cardiac effects):**
- Diltiazem (Cardizem)
- Verapamil (Calan)

**Uses:** Hypertension, angina, arrhythmias (rate control)

### 4. Diuretics

**Classes:**

**Thiazides:**
- Hydrochlorothiazide (HCTZ)
- Chlorthalidone
- First-line for hypertension

**Loop Diuretics:**
- Furosemide (Lasix)
- More powerful, for heart failure

**Potassium-Sparing:**
- Spironolactone
- Eplerenone

### 5. Statins (HMG-CoA Reductase Inhibitors)

**Mechanism:** Block cholesterol production in liver

**Effects:**
- Lower LDL (25-50%)
- Slightly raise HDL
- Lower triglycerides
- Stabilize plaques

**Common Drugs:**
- Atorvastatin (Lipitor)
- Simvastatin (Zocor)
- Rosuvastatin (Crestor)

**Uses:** Hyperlipidemia, cardiovascular prevention

### 6. Antiplatelets

**Mechanism:** Prevent platelet aggregation

**Drugs:**
- Aspirin (irreversible COX inhibition)
- Clopidogrel (Plavix) - P2Y12 inhibitor
- Prasugrel (Effient) - P2Y12 inhibitor
- Ticagrelor (Brilinta) - P2Y12 inhibitor

**Uses:** CAD prevention, post-stent, post-MI

### 7. Anticoagulants

**Mechanism:** Interfere with clotting cascade

**Drugs:**
- Warfarin (Coumadin) - Vitamin K antagonist
- Dabigatran (Pradaxa) - Direct thrombin inhibitor
- Rivaroxaban (Xarelto) - Factor Xa inhibitor
- Apixaban (Eliquis) - Factor Xa inhibitor

**Uses:** AFib stroke prevention, VTE treatment, mechanical valves (warfarin)`,
      keyTerms: [
        { term: 'beta-blocker', definition: 'Drug that blocks adrenaline receptors, slowing heart rate and lowering blood pressure' },
        { term: 'ACE inhibitor', definition: 'Drug that blocks the enzyme that makes blood vessels narrow' },
        { term: 'calcium channel blocker', definition: 'Drug that relaxes blood vessels by blocking calcium from entering cells' },
        { term: 'statin', definition: 'Drug that lowers cholesterol by blocking its production in the liver' },
        { term: 'antiplatelet', definition: 'Drug that prevents blood cells called platelets from sticking together' },
        { term: 'anticoagulant', definition: 'Drug that slows down blood clotting' },
        { term: 'afterload', definition: 'The pressure the heart must pump against to eject blood' },
      ],
      analogies: [
        'Beta-blockers are like gently applying the brakes on a car - they slow down your heart so it doesn\'t have to work as hard.',
        'ACE inhibitors are like widening a pipe - they make blood vessels larger so blood flows more easily.',
        'Statins are like a filter for your blood - they remove harmful cholesterol before it can build up in your arteries.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiovascular pharmacology encompasses multiple mechanistic classes targeting specific receptors, enzymes, and ion channels. Understanding these mechanisms allows rational drug selection for hypertension, heart failure, arrhythmias, ischemic disease, and thrombotic disorders.',
      explanation: `## Antiarrhythmic Medications (Vaughan Williams Classification)

### Class I: Sodium Channel Blockers

**Class IA (moderate blocking, prolong repolarization):**
- Quinidine, Procainamide, Disopyramide
- Uses: SVT, VT
- Side effects: Torsades de pointes, anticholinergic effects

**Class IB (fast on/off, short action):**
- Lidocaine (IV only), Mexiletine
- Uses: Ventricular arrhythmias, especially ischemic

**Class IC (slow on/off, potent blockade):**
- Flecainide, Propafenone
- Uses: SVT in structurally normal hearts
- Contraindicated: CAD, structural heart disease (CAST trial)

### Class II: Beta-Blockers

**Membrane-stabilizing agents:**
- Propranolol (also Class I effect)
- Used for rate control in AFib, thyrotoxicosis, anxiety

### Class III: Potassium Channel Blockers

**Amiodarone:**
- Multi-class effects (I, II, III, IV)
- Highly effective for AFib, VT
- Toxicities: Thyroid, pulmonary, liver, skin, eye

**Sotalol:**
- Beta-blocker + Class III
- Requires normal QT and renal function

**Dofetilide:**
- Pure Class III
- Requires inpatient initiation

### Class IV: Calcium Channel Blockers (Non-dihydropyridines)

**Diltiazem, Verapamil:**
- Slow AV nodal conduction
- Rate control for AFib
- Negative inotropy (avoid in HFrEF)

## Heart Failure Pharmacotherapy

### Guideline-Directed Medical Therapy (GDMT) for HFrEF

**1. ACE Inhibitors (or ARBs, ARNI)**
- Enalapril, Lisinopril
- Losartan, Valsartan (ARBs)
- Sacubitril/valsartan (Entresto) - ARNI superior to ACEI alone

**2. Beta-Blockers**
- Carvedilol, Metoprolol succinate, Bisoprolol
- Start low, titrate slowly
- Reduces mortality by 30-35%

**3. Mineralocorticoid Receptor Antagonists (MRA)**
- Spironolactone, Eplerenone
- Reduces mortality, hospitalization
- Monitor potassium, renal function

**4. SGLT2 Inhibitors** (new recommendation)
- Dapagliflozin, Empagliflozin
- Originally diabetes drugs
- Significant HF benefit independent of diabetes

**5. Ivabradine**
- If HR >70 on maximally tolerated beta-blocker
- Sinus rhythm only

**6. Hydralazine-Isosorbide Dinitrate**
- Alternative for patients who cannot take ACEI/ARB
- Specifically beneficial in African American patients

## Antihypertensive Classes and Selection

| Class | Mechanism | Best For | Avoid In |
|-------|-----------|----------|----------|
| Thiazides | ↓ Na+ reabsorption | Elderly, African Americans | Gout, severe renal disease |
| ACEI/ARB | ↓ Angiotensin II | Diabetes, CKD, HF, post-MI | Pregnancy, bilateral renal artery stenosis |
| CCB | ↓ Ca2+ entry | Elderly, angina | Severe HFrEF (non-DHP) |
| Beta-blockers | Block β receptors | Post-MI, HFrEF, tachycardia | Asthma/COPD, bradycardia |
| Aldosterone antagonists | Block aldosterone | Resistant HTN, HF | Hyperkalemia, severe CKD |

## Lipid-Lowering Therapy

**Statins (Intensity):**

| Intensity | Examples | LDL Reduction |
|-----------|----------|---------------|
| High | Rosuvastatin 20-40mg, Atorvastatin 40-80mg | ≥50% |
| Moderate | Rosuvastatin 5-10mg, Atorvastatin 10-20mg | 30-50% |
| Low | Simvastatin 10mg, Pravastatin 10-20mg | <30% |

**Non-Statins:**
- Ezetimibe: Cholesterol absorption inhibitor
- PCSK9 inhibitors: Alirocumab, Evolocumab (injectable)
- Bempedoic acid: ATP citrate lyase inhibitor
- Fibrates: Triglyceride lowering
- Niacin: LDL and TG lowering (limited use due to side effects)

## Antithrombotic Therapy

**Dual Antiplatelet Therapy (DAPT):**
- Aspirin + P2Y12 inhibitor (clopidogrel, prasugrel, ticagrelor)
- Post-ACS: Typically 12 months
- Post-stent: Minimum 1-6 months depending on stent type and clinical presentation

**DOACs vs Warfarin for AFib:**
- DOACs preferred for non-valvular AFib
- Dose adjustments based on renal function
- Reversal agents available (idarucizumab for dabigatran, andexanet alfa for factor Xa inhibitors)

**Triple Therapy (high bleeding risk):**
- OAC + DAPT increases bleeding 3-4 fold
- Consider dropping aspirin early when possible`,
      keyTerms: [
        { term: 'Vaughan Williams classification', definition: 'System for classifying antiarrhythmic drugs based on mechanism of action' },
        { term: 'CAST trial', definition: 'Cardiac Arrhythmia Suppression Trial; showed increased mortality with Class IC drugs in post-MI patients' },
        { term: 'GDMT', definition: 'Guideline-directed medical therapy; evidence-based treatments for heart failure' },
        { term: 'ARNI', definition: 'Angiotensin receptor-neprilysin inhibitor; sacubitril/valsartan combination' },
        { term: 'DAPT', definition: 'Dual antiplatelet therapy; aspirin plus a P2Y12 inhibitor' },
        { term: 'DOAC', definition: 'Direct oral anticoagulant; newer alternatives to warfarin' },
        { term: 'non-valvular AFib', definition: 'Atrial fibrillation not caused by significant valve disease (especially mitral stenosis or mechanical valve)' },
      ],
      clinicalNotes: 'Always evaluate renal function before prescribing ACEI/ARBs, MRAs, and DOACs. Monitor potassium with ACEI/ARBs, MRAs, and heparin. Watch for bradycardia with beta-blockers, especially in combination with other rate-slowing drugs.',
    },
    4: {
      level: 4,
      summary: 'Advanced cardiovascular pharmacotherapy integrates comorbidity management, drug interaction considerations, individualized risk-benefit assessment, and emerging evidence from clinical trials to optimize outcomes across diverse patient populations.',
      explanation: `## Advanced Pharmacologic Concepts

### Drug Interactions in Cardiology

**Statins and CYP Interactions:**

| Statin | CYP Metabolism | Interactions |
|--------|----------------|--------------|
| Simvastatin | CYP3A4 | Macrolides, azoles, amiodarone, grapefruit |
| Atorvastatin | CYP3A4 | Same as simvastatin (less severe) |
| Rosuvastatin | Minimal CYP | Fewer interactions |
| Pravastatin | Non-CYP | Few interactions |

**Antiplatelet Interactions:**
- PPIs: May reduce clopidogrel activation (omeprazole most significant)
- NSAIDs: Increase bleeding risk with all antiplatelets
- SSRIs: Additive bleeding risk

**DOAC Drug Interactions:**
- Dabigatran: P-gp inhibitors (verapamil, dronedarone)
- Rivaroxaban/Apixaban: P-gp and CYP3A4 inhibitors/inducers

### Special Population Considerations

**Pregnancy:**
- Safe: Labetalol, nifedipine, methyldopa (for hypertension)
- Avoid: ACEI, ARBs (teratogenic), warfarin
- Statins: Generally contraindicated

**Elderly:**
- Start low, go slow (especially beta-blockers, diuretics)
- Orthostatic hypotension risk
- Renal function assessment crucial
- Polypharmacy considerations

**Renal Dysfunction:**

| Drug | Adjustment Needed |
|------|-------------------|
| ACEI/ARB | Dose reduce if CrCl <30 |
| Dofetilide | Contraindicated if CrCl <20 |
| Sotalol | Dose reduce if CrCl <40 |
| Apixaban | Dose reduce if 2 criteria: Cr ≥1.5, age ≥80, weight ≤60kg |
| Rivaroxaban | Avoid if CrCl <15 |
| Digoxin | Dose reduce; narrow therapeutic window |

**Liver Disease:**
- Avoid statins in active liver disease or LFTs >3x ULN
- Use DOACs cautiously (some hepatic metabolism)
- Avoid amiodarone if possible (hepatotoxicity)

### Clinical Trial Evidence Updates

**Heart Failure:**

| Trial | Population | Intervention | Key Finding |
|-------|------------|--------------|-------------|
| PARADIGM-HF | HFrEF | Sacubitril/valsartan vs enalapril | 20% reduction in CV death/HF hospitalization |
| DAPA-HF | HFrEF | Dapagliflozin vs placebo | 30% reduction in HF worsening/CV death |
| EMPEROR-Reduced | HFrEF | Empagliflozin vs placebo | 25% reduction in HF hospitalization/CV death |
| VICTORIA | HF with EF <45% | Vericiguat vs placebo | 10% reduction in CV death/HF hospitalization |
| EMPEROR-Preserved | HFpEF | Empagliflozin vs placebo | 21% reduction in HF hospitalization |

**Lipid Management:**
- ODYSSEY OUTCOMES: Alirocumab reduced MACE in post-ACS patients
- FOURIER: Evolocumab reduced MACE in ASCVD patients
- IMPROVE-IT: Ezetimibe added to statin reduced events after ACS
- REDUCE-IT: Icosapent ethyl (omega-3) reduced CV events in high-risk patients

**Anticoagulation:**
- ENGAGE AF-TIMI 48: Edoxaban non-inferior to warfarin with less bleeding
- ARISTOTLE: Apixaban superior to warfarin for safety/efficacy
- ROCKET AF: Rivaroxaban non-inferior to warfarin

### Precision Medicine in Cardiology

**Pharmacogenomics:**
- CYP2C19 variants: Affect clopidogrel activation
  - *2, *3 alleles: Poor metabolizers, consider alternative
- SLCO1B1 variants: Statin-associated myopathy risk
- VKORC1 variants: Warfarin sensitivity

**Biomarker-Guided Therapy:**
- NT-proBNP: Guid HF diagnosis and treatment titration
- hsCRP: Statin benefit in primary prevention (JUPITER trial)
- Lp(a): Genetic risk factor, consider aggressive LDL lowering

### Toxicity Management

**Amiodarone Toxicity Monitoring:**
- Baseline: CXR, LFTs, TFTs, ECG
- Every 6 months: TFTs, LFTs
- Annually: CXR, pulmonary function tests if symptomatic
- Ophthalmology exam annually

**Digoxin Toxicity:**
- Presenting symptoms: Nausea, visual changes, arrhythmias
- Risk factors: Hypokalemia, renal dysfunction, drug interactions
- Treatment: Digoxin-specific antibody fragments (Digibind) for severe toxicity
- Target level: 0.5-0.9 ng/mL (lower than previously recommended)

**Statins: Myopathy:**
- Check CK if symptoms present
- Discontinue if CK >10x ULN or symptoms severe
- Consider alternative statin or non-statin after resolution`,
      keyTerms: [
        { term: 'CYP3A4', definition: 'Cytochrome P450 3A4; important liver enzyme for drug metabolism' },
        { term: 'P-glycoprotein', definition: 'Efflux transporter affecting drug absorption and elimination; important for DOACs, digoxin' },
        { term: 'HFrEF', definition: 'Heart failure with reduced ejection fraction; EF ≤40%' },
        { term: 'HFpEF', definition: 'Heart failure with preserved ejection fraction; EF ≥50%' },
        { term: 'LFTs', definition: 'Liver function tests; AST, ALT, alkaline phosphatase, bilirubin' },
        { term: 'NT-proBNP', definition: 'N-terminal pro-BNP; biomarker for heart failure diagnosis and prognosis' },
        { term: 'Lp(a)', definition: 'Lipoprotein(a); genetically determined risk factor for cardiovascular disease' },
      ],
      clinicalNotes: 'Warfarin requires INR monitoring; target depends on indication (2.0-3.0 for AFib/DVT, 2.5-3.5 for mechanical mitral valve). When switching between anticoagulants, ensure overlapping therapy to prevent therapeutic gaps.',
    },
    5: {
      level: 5,
      summary: 'Contemporary cardiovascular pharmacology integrates evidence-based guidelines, emerging therapeutic targets, individualized risk assessment, and novel delivery systems to optimize outcomes across the spectrum of cardiovascular disease while minimizing adverse effects.',
      explanation: `## Current Guideline Updates

### 2023 ACC/AHA Heart Failure Guideline Highlights

**4 Foundations of HFrEF Treatment:**
1. **ARNI** (Sacubitril/valsartan) - first-line
2. **Beta-blocker** (evidence-based: carvedilol, metoprolol succinate, bisoprolol)
3. **MRA** (spironolactone, eplerenone)
4. **SGLT2 inhibitor** (dapagliflozin, empagliflozin) - now foundational

**Additional Therapies:**
- Ivabradine: If sinus rhythm, HR ≥70 bpm, on maximally tolerated beta-blocker
- Hydralazine-isosorbide dinitrate: Additional benefit in African American patients
- Vericiguat: High-risk HF with recent hospitalization

**HFpEF Update:**
- SGLT2 inhibitors now recommended (Class 2a)
- MRAs reasonable (Class 2a)
- ARNI reasonable (Class 2b)

### 2023 ACC Expert Consensus on LDL Lowering

**Risk Categories:**

| Risk Category | 10-Year Risk | LDL Target |
|---------------|--------------|------------|
| Low | <5% | No treatment |
| Borderline | 5-7.5% | Consider statin |
| Intermediate | 7.5-20% | Moderate statin |
| High | ≥20% or risk enhancers | High-intensity statin |
| Very High | ASCVD + multiple events | LDL ≥70 mg/dL; add ezetimibe |
| Extreme | Multiple events + risk enhancers | LDL ≥55 mg/dL; add ezetimibe ± PCSK9i |

**Risk Enhancers:**
- Elevated Lp(a) >50 mg/dL
- Elevated hsCRP >2 mg/L
- Family history of premature ASCVD
- Chronic kidney disease
- South Asian ancestry
- Premature menopause

### 2023 ACC/AHA AFib Guideline Updates

**DOACs Preferred Over Warfarin:**
- Class 1 recommendation for non-valvular AFib
- Consider apixaban for highest stroke and bleeding risk
- Warfarin still preferred for mechanical valves, moderate-severe mitral stenosis

**Left Atrial Appendage Occlusion (LAAO):**
- Consider for patients with contraindications to long-term anticoagulation
- Watchman device: Class 2a for selected patients

**Rate Control:**
- Beta-blocker or diltiazem for most patients
- Digoxin as adjunct if rate control inadequate

## Emerging Therapies

### Inclisiran
- siRNA targeting PCSK9 mRNA
- Twice-yearly subcutaneous injection
- 50% LDL reduction
- ORION trials show sustained LDL lowering

### Bempedoic Acid
- ATP citrate lyase inhibitor
- Prodrug activated in liver (less muscle exposure)
- CLEAR outcomes trial showed 13% CV risk reduction
- Useful for statin-intolerant patients

### Gene Therapy
- PCSK9 gene editing (VERVE-101) in development
- One-time treatment potential
- Early phase trials ongoing

### Novel Heart Failure Therapies
- Omecamtiv mecarbil: Myosin activator (GALACTIC-HF: neutral on primary endpoint)
- Mavacamten: Myosin inhibitor for HOCM (EXPLORER-HCM: positive)
- Ferroptosis inhibitors: Under investigation

### Anti-Inflammatory Therapies
- Colchicine: 0.5 mg daily (COLCOT, LoDoCo2) reduced CV events
- Canakinumab: CANTOS trial showed benefit but high cost

## Clinical Implementation Considerations

### Medication Adherence Optimization

**Barriers to Address:**
- Cost: Use generics, patient assistance programs
- Side effects: Proactive management, dose adjustment
- Polypharmacy: Deprescribing when appropriate
- Regimen complexity: Once-daily dosing preferred

**Interventions:**
- Fixed-dose combinations (polypill)
- Pill organizers, smart pill boxes
- Mobile phone reminders
- Collaborative care models

### Deprescribing in Cardiology

**Potential Candidates:**
- Aspirin for primary prevention in low-risk elderly
- Dual antiplatelet therapy beyond recommended duration
- Multiple antihypertensives causing hypotension
- Statins in life-limiting illness

**Approach:**
- Assess benefit-risk ratio
- Consider life expectancy, goals of care
- Taper slowly (especially beta-blockers)
- Monitor for withdrawal effects

### Precision Medicine Applications

**Pharmacogenetic Testing:**
- CYP2C19 for clopidogrel (commercially available)
- SLCO1B1 for statin selection
- CYP2D6 for beta-blocker metabolism

**Biomarker-Guided Therapy:**
- Serial NT-proBNP for HF titration
- Coronary calcium for statin decision
- Lipoprotein(a) for intensified therapy
- hsCRP for residual inflammatory risk

## Quality Metrics and Performance

**Appropriate Use Metrics:**
- GDMT prescription rates for HFrEF
- Statin prescription at discharge for ACS
- DOAC over warfarin for non-valvular AFib
- P2Y12 inhibitor selection (ticagrelor/prasugrel over clopidogrel for ACS)
- Cardiac rehabilitation enrollment

**Benchmarking:**
- Compare to national databases
- Track prescription rates
- Monitor adherence and outcomes
- Identify care gaps`,
      keyTerms: [
        { term: 'GDMT', definition: 'Guideline-directed medical therapy; evidence-based medications for heart failure' },
        { term: 'risk enhancers', definition: 'Factors that increase cardiovascular risk beyond traditional risk factors' },
        { term: 'LAAO', definition: 'Left atrial appendage occlusion; device closure to reduce stroke risk in AFib without anticoagulation' },
        { term: 'siRNA', definition: 'Small interfering RNA; therapeutic approach to silence specific genes like PCSK9' },
        { term: 'polypill', definition: 'Fixed-dose combination of multiple cardiovascular medications in one pill' },
        { term: 'deprescribing', definition: 'Systematic process of reducing or stopping medications when risks outweigh benefits' },
        { term: 'residual inflammatory risk', definition: 'Cardiovascular risk that remains after LDL lowering, related to inflammation' },
      ],
      clinicalNotes: `Clinical practice updates:

1. **Heart Failure**: SGLT2 inhibitors are now foundational therapy for both HFrEF and HFpEF, regardless of diabetes status. Initiate early in the disease course.

2. **Lipid Management**: Lower targets (≥70 mg/dL for very high risk, ≥55 mg/dL for extreme risk) require combination therapy in many patients. PCSK9 inhibitors underutilized.

3. **Anticoagulation**: DOACs preferred over warfarin for non-valvular AFib except when contraindicated. Consider LAAO for patients who cannot tolerate anticoagulation.

4. **Inflammation**: Colchicine 0.5 mg daily now reasonable for secondary prevention in selected patients.

5. **Precision Medicine**: Pharmacogenetic testing may be considered for antiplatelet selection, especially in high-risk PCI patients.

6. **Polypharmacy**: Regular medication review for deprescribing opportunities, especially in elderly and those with limited life expectancy.`,
    },
  },

  media: [
    {
      id: 'cardiac-drug-classes',
      type: 'diagram',
      filename: 'cardiac-medication-classes.svg',
      title: 'Cardiac Medication Classes',
      description: 'Overview of major cardiovascular drug classes and their mechanisms',
    },
    {
      id: 'gdmt-algorithm',
      type: 'diagram',
      filename: 'heart-failure-gdmt-algorithm.svg',
      title: 'HFrEF GDMT Algorithm',
      description: 'Stepwise approach to guideline-directed medical therapy for heart failure',
    },
    {
      id: 'anticoagulation-decision',
      type: 'diagram',
      filename: 'anticoagulation-decision-tree.svg',
      title: 'Anticoagulation Selection',
      description: 'Decision tree for choosing antithrombotic therapy',
    },
  ],

  citations: [
    {
      id: 'acc-hf-guideline-2022',
      type: 'article',
      title: '2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure',
      source: 'Journal of the American College of Cardiology',
      url: 'https://doi.org/10.1016/j.jacc.2021.12.011',
    },
    {
      id: 'acc-cholesterol-2018',
      type: 'article',
      title: '2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Blood Cholesterol',
      source: 'Circulation',
    },
    {
      id: 'acc-afib-2023',
      type: 'article',
      title: '2023 ACC/AHA/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation',
      source: 'Journal of the American College of Cardiology',
    },
  ],

  crossReferences: [
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'related', label: 'Coronary Artery Disease' },
    { targetId: 'condition-atrial-fibrillation', targetType: 'condition', relationship: 'related', label: 'Atrial Fibrillation' },
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['pharmacology', 'cardiology', 'therapeutics'],
    keywords: ['beta-blockers', 'ACE inhibitors', 'statins', 'antiarrhythmics', 'anticoagulants', 'heart failure'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cardiacMedications;
