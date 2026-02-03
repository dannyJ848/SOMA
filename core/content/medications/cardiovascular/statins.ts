/**
 * Statin Medications - HMG-CoA Reductase Inhibitors
 *
 * Comprehensive content for commonly prescribed statins including:
 * - Atorvastatin (Lipitor)
 * - Rosuvastatin (Crestor)
 * - Simvastatin (Zocor)
 * - Pravastatin (Pravachol)
 * - Lovastatin (Mevacor)
 */

import { MedicationContent, DrugClassContent } from '../types';

export const statinClassOverview: DrugClassContent = {
  id: 'drug-class-statins',
  className: 'HMG-CoA Reductase Inhibitors (Statins)',
  drugClass: 'statin',
  category: 'cardiovascular',
  prototypeDrug: 'atorvastatin',
  mechanismOfAction: 'Competitively inhibit HMG-CoA reductase, the rate-limiting enzyme in hepatic cholesterol synthesis, leading to upregulation of LDL receptors and increased LDL clearance from plasma.',

  levels: {
    1: {
      level: 1,
      summary: 'Statins are medicines that lower your cholesterol to help prevent heart attacks and strokes.',
      howItWorks: 'Statins tell your liver to make less cholesterol and remove more of the bad cholesterol from your blood. Think of them as cholesterol cleaners for your body.',
      usedFor: 'Statins help prevent heart attacks and strokes by lowering the bad cholesterol (LDL) in your blood. Your doctor might prescribe them if you have high cholesterol, diabetes, or already had a heart problem.',
      sideEffects: 'Most people feel fine on statins. Some people notice muscle aches or weakness. Very rarely, muscles can become seriously damaged. Tell your doctor if you have unexplained muscle pain.',
      warnings: 'Tell your doctor if you have liver problems or drink a lot of alcohol. Some statins should not be taken with grapefruit juice.',
      howToTake: 'Take your statin once daily, usually at bedtime. Some can be taken at any time. Try to take it at the same time every day.',
    },
    2: {
      level: 2,
      summary: 'Statins are cholesterol-lowering medications that reduce LDL ("bad") cholesterol by blocking its production in the liver, significantly reducing cardiovascular disease risk.',
      howItWorks: 'Your liver makes most of the cholesterol in your body. Statins block an enzyme called HMG-CoA reductase that the liver needs to make cholesterol. When the liver cant make as much cholesterol, it pulls LDL cholesterol from your bloodstream to use instead, lowering your LDL levels.',
      usedFor: `Statins are prescribed for:
- High LDL cholesterol (hyperlipidemia)
- Prevention of heart attacks and strokes
- After a heart attack to prevent another one
- Diabetes (higher cardiovascular risk)
- Peripheral artery disease`,
      sideEffects: `Common side effects:
- Muscle aches (myalgia) - occurs in about 5-10% of people
- Headache
- Digestive upset
- Elevated liver enzymes (usually mild)

Rare but serious:
- Rhabdomyolysis (severe muscle breakdown)
- New-onset diabetes (slightly increased risk)`,
      warnings: `Important warnings:
- Do not take if pregnant or breastfeeding
- Avoid excessive alcohol use
- Some statins interact with grapefruit juice
- Tell your doctor about all other medications
- Report unexplained muscle pain, tenderness, or weakness`,
      howToTake: 'Take once daily. Some statins (simvastatin, lovastatin) work best if taken in the evening because thats when your liver makes the most cholesterol. Others (atorvastatin, rosuvastatin) can be taken any time of day.',
      keyTerms: [
        { term: 'LDL cholesterol', definition: 'Low-density lipoprotein - the "bad" cholesterol that builds up in arteries' },
        { term: 'HDL cholesterol', definition: 'High-density lipoprotein - the "good" cholesterol that removes LDL from arteries' },
        { term: 'myalgia', definition: 'Muscle pain or aching without muscle damage' },
      ],
    },
    3: {
      level: 3,
      summary: 'Statins competitively inhibit HMG-CoA reductase to decrease hepatic cholesterol synthesis, causing upregulation of LDL receptors and enhanced LDL clearance, with pleiotropic effects including anti-inflammatory and plaque-stabilizing properties.',
      howItWorks: `**Primary Mechanism:**
HMG-CoA reductase catalyzes the rate-limiting step in cholesterol biosynthesis (HMG-CoA to mevalonate). Statins structurally resemble HMG-CoA and competitively inhibit this enzyme.

**Downstream Effects:**
1. Decreased intrahepatic cholesterol
2. Upregulation of hepatic LDL receptor expression
3. Increased LDL clearance from plasma
4. Decreased VLDL secretion

**Pleiotropic Effects:**
- Improved endothelial function
- Reduced vascular inflammation
- Plaque stabilization
- Antithrombotic properties
- Reduced oxidative stress`,
      usedFor: `**Primary Prevention (no established CVD):**
- LDL-C >=190 mg/dL
- Diabetes mellitus (age 40-75)
- 10-year ASCVD risk >=7.5%

**Secondary Prevention (established CVD):**
- Prior MI, stroke, or TIA
- Stable angina
- Coronary revascularization
- Peripheral artery disease

**High-Intensity vs Moderate-Intensity:**
- High-intensity: Lowers LDL-C by >=50% (atorvastatin 40-80mg, rosuvastatin 20-40mg)
- Moderate-intensity: Lowers LDL-C by 30-49%`,
      sideEffects: `**Musculoskeletal (most common concern):**
- Myalgia (5-10%): Muscle pain without CK elevation
- Myopathy (<0.1%): Muscle symptoms with CK >10x ULN
- Rhabdomyolysis (rare): Massive CK elevation with myoglobinuria

**Hepatic:**
- Transaminase elevation (0.5-2%): Usually asymptomatic
- Clinically significant hepatotoxicity is rare

**Metabolic:**
- New-onset diabetes (9-12% relative increase)
- Higher risk with intensive therapy, metabolic syndrome

**Other:**
- Cognitive effects (rare, reversible)
- Hemorrhagic stroke (slight increase in those with prior hemorrhagic stroke)`,
      warnings: `**Contraindications:**
- Active liver disease or unexplained persistent transaminase elevation
- Pregnancy (Category X) and breastfeeding
- Concomitant use with strong CYP3A4 inhibitors (for CYP3A4-metabolized statins)

**Precautions:**
- Renal impairment (dose adjustment for some)
- Hypothyroidism (increased myopathy risk)
- Heavy alcohol use
- Asian ancestry (consider lower starting doses for rosuvastatin)`,
      howToTake: `**Timing:**
- Simvastatin, lovastatin: Take in evening (cholesterol synthesis peaks at night)
- Atorvastatin, rosuvastatin: Any time (long half-lives)
- Fluvastatin: Any time (also long-acting)

**Food Interactions:**
- Lovastatin: Take with food (improves absorption)
- Others: Can be taken with or without food
- Grapefruit: Avoid with simvastatin, lovastatin, atorvastatin (CYP3A4 inhibition)`,
      interactions: `**Major Interactions:**
- CYP3A4 inhibitors (clarithromycin, itraconazole, HIV protease inhibitors): Increased statin levels
- Gemfibrozil: Significantly increases myopathy risk
- Cyclosporine: Use lowest statin doses

**Moderate Interactions:**
- Amiodarone: Limit simvastatin to 20mg
- Diltiazem/verapamil: Limit simvastatin to 10-20mg
- Warfarin: May increase INR`,
      monitoring: `**Baseline:**
- Lipid panel (fasting or non-fasting)
- Liver function tests (ALT)
- Consider CK if high myopathy risk

**Follow-up:**
- Lipid panel at 4-12 weeks, then annually
- LFTs only if symptoms suggest hepatotoxicity
- CK only if muscle symptoms develop`,
      keyTerms: [
        { term: 'HMG-CoA reductase', definition: 'The rate-limiting enzyme in cholesterol biosynthesis that statins inhibit' },
        { term: 'pleiotropic effects', definition: 'Effects beyond the primary mechanism, such as anti-inflammatory properties' },
        { term: 'rhabdomyolysis', definition: 'Severe muscle breakdown with CK >10x ULN and risk of acute kidney injury' },
        { term: 'ASCVD', definition: 'Atherosclerotic cardiovascular disease, including CAD, stroke, and PAD' },
      ],
    },
    4: {
      level: 4,
      summary: 'Statins reduce LDL-C 30-50%+ through competitive HMG-CoA reductase inhibition, with cardiovascular benefit extending beyond lipid-lowering to include pleiotropic anti-inflammatory and plaque-stabilizing effects; intensity-guided dosing targets LDL-C reduction goals based on ASCVD risk stratification.',
      howItWorks: `**Molecular Mechanism:**
- Statins contain a moiety structurally similar to HMG-CoA
- Bind reversibly to the active site of HMG-CoA reductase (Km ~10 nM)
- Block conversion of HMG-CoA to mevalonate
- Decrease hepatocyte cholesterol content

**Regulatory Response:**
- SREBP-2 cleavage and nuclear translocation
- Increased transcription of LDL receptor gene
- Enhanced LDL receptor expression on hepatocyte surface
- Increased LDL-C clearance from circulation
- Secondary decrease in VLDL production

**Pleiotropic Mechanisms:**
1. Isoprenoid depletion:
   - Decreased prenylation of small GTPases (Rho, Rac)
   - Improved endothelial NO production
   - Reduced inflammation and oxidative stress

2. Anti-inflammatory effects:
   - Decreased CRP, IL-6, TNF-alpha
   - Reduced monocyte adhesion
   - NF-kB pathway inhibition

3. Plaque effects:
   - Decreased macrophage content
   - Increased collagen content
   - Reduced MMP activity
   - Enhanced fibrous cap stability`,
      usedFor: `**ACC/AHA Statin Benefit Groups:**

1. **Clinical ASCVD** (secondary prevention)
   - High-intensity statin for all
   - LDL-C goal <70 mg/dL (or <55 in very high risk)

2. **LDL-C >=190 mg/dL**
   - High-intensity statin
   - Often genetic etiology (familial hypercholesterolemia)

3. **Diabetes mellitus (age 40-75)**
   - Moderate-intensity: All
   - High-intensity: If 10-year risk >=7.5% or risk enhancers

4. **Primary prevention with LDL-C 70-189 and 10-year risk >=7.5%**
   - Moderate- to high-intensity based on risk

**Risk Enhancers:**
- Family history of premature ASCVD
- Persistently elevated LDL-C >=160
- Metabolic syndrome
- CKD
- Inflammatory conditions (RA, psoriasis, HIV)
- Ethnicity (South Asian)
- Elevated Lp(a), apoB, hsCRP, triglycerides
- ABI <0.9
- CAC score (if uncertain about statin benefit)`,
      sideEffects: `**Statin-Associated Muscle Symptoms (SAMS):**

Spectrum:
- Myalgia: Symptoms, normal CK
- Myopathy: Symptoms + CK 4-10x ULN
- Severe myopathy: CK >10x ULN
- Rhabdomyolysis: CK >40x ULN, AKI, myoglobinuria

Risk factors for SAMS:
- Advanced age
- Female sex
- Low body weight
- Renal/hepatic dysfunction
- Hypothyroidism
- High statin dose
- Drug interactions
- Strenuous exercise
- Genetic variants (SLCO1B1*5)

Management of SAMS:
1. Confirm causality (dechallenge/rechallenge)
2. Rule out other causes (hypothyroidism, vitamin D deficiency)
3. Consider lower dose, alternate-day dosing
4. Switch to hydrophilic statin (pravastatin, rosuvastatin)
5. Consider non-statin therapy if intolerant

**Hepatotoxicity:**
- Transaminase elevation >3x ULN: ~1%
- Serious hepatotoxicity: Very rare
- Not a class effect; can try different statin

**Diabetes Risk:**
- OR ~1.09-1.12 for new-onset diabetes
- Higher with intensive therapy
- CVD benefit far outweighs diabetes risk`,
      warnings: `**Absolute Contraindications:**
- Active liver disease
- Pregnancy (Category X): May cause fetal abnormalities
- Breastfeeding (most statins)
- Hypersensitivity

**Drug Interactions by Metabolism:**

CYP3A4 metabolized (simvastatin, lovastatin, atorvastatin):
- Strong inhibitors contraindicated with simvastatin/lovastatin
- Atorvastatin: Use cautiously, lower doses

CYP2C9 metabolized (fluvastatin, rosuvastatin partially):
- Fewer significant interactions

Not CYP metabolized (pravastatin, pitavastatin):
- Safest for drug interactions

**Specific Precautions:**
- Renal impairment: Rosuvastatin 5mg max if CrCl <30
- Asian patients: Lower rosuvastatin starting dose
- SLCO1B1*5 carriers: Consider lower simvastatin dose`,
      howToTake: `**Dosing Considerations:**

High-intensity (>=50% LDL-C reduction):
- Atorvastatin 40-80 mg
- Rosuvastatin 20-40 mg

Moderate-intensity (30-49% LDL-C reduction):
- Atorvastatin 10-20 mg
- Rosuvastatin 5-10 mg
- Simvastatin 20-40 mg
- Pravastatin 40-80 mg
- Lovastatin 40-80 mg

**Equipotent Dosing:**
Rosuvastatin 10 = Atorvastatin 20 = Simvastatin 40-80

**Titration:**
- Check lipids at 4-12 weeks
- If not at goal: Maximize statin before adding
- Add ezetimibe if still not at goal
- Consider PCSK9 inhibitor for very high risk`,
      interactions: `**Major Drug Interactions:**

Gemfibrozil + statin:
- Significantly increases statin AUC (especially simvastatin)
- 15-fold increase in rhabdomyolysis risk
- Prefer fenofibrate if combination needed

Cyclosporine:
- Increases statin levels via OATP1B1 and CYP3A4 inhibition
- Use pravastatin or lowest dose rosuvastatin

Strong CYP3A4 inhibitors:
- Clarithromycin, itraconazole, ketoconazole
- HIV protease inhibitors (ritonavir, cobicistat)
- Contraindicated with simvastatin; use caution with atorvastatin

**Moderate Interactions:**

Amiodarone + simvastatin: Max simvastatin 20 mg
Amlodipine + simvastatin: Max simvastatin 20 mg
Diltiazem/verapamil + simvastatin: Max simvastatin 10 mg
Dronedarone + simvastatin: Max simvastatin 10 mg

Warfarin: May potentiate anticoagulation
Digoxin: Slight increase in digoxin levels
Colchicine: Increased myopathy risk`,
      monitoring: `**Baseline Assessment:**
- Fasting or non-fasting lipid panel
- ALT (some add AST)
- Hemoglobin A1c or fasting glucose
- Consider CK if high myopathy risk
- TSH if symptoms suggest hypothyroidism

**Follow-up Monitoring:**
- Lipid panel: 4-12 weeks after initiation/dose change, then annually
- LFTs: Only if hepatic symptoms develop
- CK: Only if muscle symptoms develop
- HbA1c: Annually if risk factors for diabetes

**Response Assessment:**
- Calculate percent LDL-C reduction
- High-intensity should achieve >=50% reduction
- If inadequate response: Check adherence, add ezetimibe`,
      clinicalPearls: `**Key Clinical Pearls:**

1. **Timing matters less than adherence:** While evening dosing is theoretically better for short-acting statins, any consistent time improves adherence

2. **SAMS management:** Most patients can tolerate a statin; try dechallenge/rechallenge, lower doses, alternate-day dosing, or different statin

3. **Rosuvastatin vs atorvastatin:** Rosuvastatin slightly more potent mg-for-mg; less drug interactions but needs renal adjustment

4. **"Statin intolerance":** True intolerance is rare (<5%); nocebo effect is common in clinical practice

5. **Combination therapy:** Ezetimibe adds ~15-20% LDL reduction; PCSK9 inhibitors add ~60%

6. **Special populations:**
   - CKD: Statins safe; rosuvastatin dose-capped
   - Liver disease: Avoid if active; NAFLD is not a contraindication
   - Elderly: Age alone not a contraindication; consider life expectancy`,
      keyTerms: [
        { term: 'SREBP-2', definition: 'Sterol regulatory element-binding protein 2; transcription factor that upregulates LDL receptor expression' },
        { term: 'SLCO1B1', definition: 'Gene encoding OATP1B1 transporter; *5 variant associated with increased statin levels and myopathy risk' },
        { term: 'OATP1B1', definition: 'Organic anion transporting polypeptide; hepatic uptake transporter for statins' },
        { term: 'CAC score', definition: 'Coronary artery calcium score; used to refine ASCVD risk assessment' },
      ],
    },
    5: {
      level: 5,
      summary: 'Statins remain first-line lipid-lowering therapy with robust evidence for ASCVD event reduction; contemporary management emphasizes LDL-C treatment targets, risk-enhancer guided intensity selection, SAMS management algorithms, and integration with non-statin therapies (ezetimibe, PCSK9i, bempedoic acid, inclisiran) to achieve guideline-recommended goals.',
      howItWorks: `**Molecular Pharmacology:**

Binding characteristics:
- Competitive, reversible inhibition of HMG-CoA reductase
- Affinity: Rosuvastatin > atorvastatin > simvastatin > pravastatin
- Hepatic selectivity varies by lipophilicity and active transport

OATP1B1-mediated hepatic uptake:
- SLCO1B1*5 (rs4149056) reduces uptake
- Explains increased systemic exposure and myopathy risk
- Pharmacogenomic testing available but not routine

Intracellular cholesterol sensing:
- Reduced cholesterol activates SCAP-SREBP pathway
- SREBP-2 translocates to nucleus
- Increases LDL receptor, HMG-CoA reductase, PCSK9 expression
- Net effect: Enhanced LDL clearance despite increased synthesis enzyme

**Beyond LDL-Lowering:**

Evidence for pleiotropic benefit:
- JUPITER: hsCRP reduction independent predictor of benefit
- Meta-analyses: LDL-C lowering explains most but not all benefit
- Ongoing research into anti-inflammatory effects (CANTOS implications)

Plaque stabilization mechanisms:
- Reduced lipid core volume (REVERSAL, ASTEROID)
- Increased fibrous cap thickness (OCT studies)
- Reduced vasa vasorum neovascularization
- Decreased plaque inflammation (18F-FDG PET)`,
      usedFor: `**Evidence-Based Indications:**

Secondary Prevention (Strongest Evidence):
- 4S, LIPID, CARE, HPS, TNT, PROVE IT-TIMI 22
- NNT ~25-50 for major events over 5 years
- Benefit extends to very low LDL-C (FOURIER, ODYSSEY)

Primary Prevention:
- WOSCOPS, AFCAPS, JUPITER, HOPE-3
- Benefit when 10-year risk justifies treatment
- Shared decision-making for borderline risk

Special Populations:
- Diabetes: CARDS - clear benefit
- CKD: SHARP - reduced atherosclerotic events
- Elderly: PROSPER - benefit to age 82; less data >85
- Very low LDL-C: Safe down to ~25 mg/dL based on Mendelian randomization and trials

**2018 AHA/ACC Cholesterol Guidelines:**

Risk categories and LDL-C thresholds:
1. Very high-risk ASCVD: LDL-C <70 (consider <55)
2. High-risk ASCVD: LDL-C <70
3. Diabetes + risk factors: LDL-C <70
4. Primary prevention high-risk: 50% reduction

Role of risk enhancers in borderline-risk patients:
- CAC = 0 favors deferring/deprescribing
- CAC >= 100 or >= 75th percentile favors treatment`,
      sideEffects: `**SAMS - Evidence-Based Assessment:**

Prevalence reality:
- RCTs: ~1-5% myalgia
- Observational: 10-20%
- Nocebo effect explains much of discrepancy (SAMSON, StatinWISE trials)

SAMS Diagnostic Approach:
1. SAMS Clinical Index (SAMS-CI) score
2. Dechallenge (resolution in 2-4 weeks)
3. Rechallenge (recurrence with same statin)
4. Blinded rechallenge if feasible

SLCO1B1 genotyping:
- *5/*5: 17-fold increased myopathy risk with simvastatin
- CPIC guidelines: Avoid simvastatin in *5/*5
- Consider testing in SAMS or high interaction risk

**Management Algorithm for SAMS:**

1. Exclude secondary causes (hypothyroidism, vitamin D deficiency, drug interactions)
2. If mild: Reassess statin necessity, continue with monitoring
3. If moderate: Hold statin, reassess in 2-4 weeks
4. If resolves: Rechallenge with same or different statin, lower dose
5. If recurs: Trial alternate-day dosing (rosuvastatin, atorvastatin)
6. If persistent intolerance: Non-statin therapy (ezetimibe, bempedoic acid)

**Hepatotoxicity:**
- Baseline LFT recommended
- Routine monitoring NOT required
- Mild elevations (<3x ULN) often transient
- NAFLD: Statins may improve histology

**Diabetes Risk:**
- Number needed to harm ~255 over 4 years
- CV benefit far exceeds diabetes risk
- Screen at-risk patients; not a reason to avoid statins`,
      warnings: `**Contemporary Contraindications:**

Absolute:
- Pregnancy: Category X; discontinue prior to conception
- Active/acute liver disease with elevated transaminases
- Known hypersensitivity

Relative:
- Heavy alcohol use (>3 drinks/day for men, >2 for women)
- Unexplained CK elevation >10x ULN
- Prior rhabdomyolysis on any statin (without identifiable cause)

**High-Risk Scenarios for Myopathy:**

Drug combinations:
- Gemfibrozil + any statin (particularly simvastatin)
- Cyclosporine + statin (use pravastatin if needed)
- Strong CYP3A4 inhibitors + simvastatin/lovastatin

Patient factors:
- Advanced age (>80 years)
- Small body frame, frailty
- Multiorgan dysfunction
- Perioperative period
- Hypothyroidism (untreated)
- Genetic variants (SLCO1B1, CYP2D6)

**Regulatory Dose Limits:**

Simvastatin 80 mg: Do not initiate; only continue if tolerating >12 months
Simvastatin + amiodarone: Max 20 mg
Simvastatin + amlodipine: Max 20 mg
Simvastatin + diltiazem: Max 10 mg
Rosuvastatin + cyclosporine: Max 5 mg
Rosuvastatin + atazanavir/ritonavir: Max 10 mg`,
      howToTake: `**Intensity-Based Dosing:**

High-intensity (>=50% LDL-C reduction):
- Atorvastatin 40-80 mg daily
- Rosuvastatin 20-40 mg daily

Moderate-intensity (30-49% LDL-C reduction):
- Atorvastatin 10-20 mg
- Rosuvastatin 5-10 mg
- Simvastatin 20-40 mg
- Pravastatin 40-80 mg
- Lovastatin 40 mg
- Fluvastatin XL 80 mg
- Pitavastatin 2-4 mg

**Practical Dosing Strategies:**

Initial selection:
- Generic atorvastatin: Cost-effective, once-daily, fewest interactions
- Generic rosuvastatin: Slightly more potent, renal clearance

Maximization before adding:
- Uptitrate to maximum tolerated dose
- Document response before adding second agent

Combination approaches:
- Statin + ezetimibe: Additional 15-20% LDL-C reduction
- Statin + bempedoic acid: Additional 18-25% reduction
- Statin + PCSK9i: Additional 50-60% reduction

**Non-adherence strategies:**
- Simplify regimen (once daily)
- Address SAMS perception
- Pill boxes, adherence apps
- Long-acting statin for alternate-day dosing`,
      interactions: `**High-Priority Drug Interactions:**

Contraindicated combinations:
- Simvastatin/lovastatin + strong CYP3A4 inhibitors
- Simvastatin/lovastatin + gemfibrozil
- Simvastatin + fusidic acid (systemic)

Dose limitations:
| Interacting Drug | Simvastatin Max | Lovastatin Max |
|------------------|-----------------|----------------|
| Amiodarone | 20 mg | 40 mg |
| Amlodipine | 20 mg | - |
| Diltiazem | 10 mg | 20 mg |
| Verapamil | 10 mg | 20 mg |
| Dronedarone | 10 mg | - |
| Ranolazine | 20 mg | - |

**Atorvastatin interactions:**
- CYP3A4 inhibitors: 2-4x increase in exposure
- Use caution with HIV protease inhibitors
- Colchicine: Increased myopathy risk

**Rosuvastatin interactions:**
- OATP1B1/BCRP inhibitors (cyclosporine, certain protease inhibitors)
- Limit dose with cyclosporine (5 mg max)
- Gemfibrozil: Double rosuvastatin AUC

**Pravastatin/Pitavastatin:**
- Minimal CYP metabolism
- Preferred in complex polypharmacy
- Still avoid gemfibrozil

**Warfarin:**
- All statins may increase INR
- Monitor INR when starting/changing statins
- Usually modest effect`,
      monitoring: `**Baseline Assessment:**

Required:
- Lipid panel (fasting or non-fasting)
- Hepatic transaminases (ALT +/- AST)

Consider:
- Fasting glucose/HbA1c
- CK in high-risk for myopathy
- TSH if symptomatic
- Renal function (rosuvastatin dosing)

**Follow-up Schedule:**

Lipid panel:
- 4-12 weeks after initiation or dose change
- Annually once at goal
- Calculate percent LDL-C reduction

LFTs:
- NOT required routinely
- Check if hepatic symptoms (fatigue, anorexia, jaundice, dark urine)
- Mild elevation (<3x ULN): Can continue, recheck

Muscle monitoring:
- Baseline CK only if high risk
- Check CK only if symptomatic
- If CK >10x ULN: Discontinue, hydrate, monitor renal function

**Goal Assessment:**

Percent reduction vs absolute targets:
- High-intensity should achieve >=50% reduction
- ASCVD: Consider LDL-C <70 or <55 mg/dL targets

Not at goal:
1. Verify adherence
2. Maximize statin if tolerated
3. Add ezetimibe (IMPROVE-IT)
4. Consider PCSK9i for very high risk (FOURIER, ODYSSEY)
5. Consider bempedoic acid if statin-intolerant`,
      clinicalPearls: `**Expert Practice Points:**

1. **Goal-directed therapy:** Treat to LDL-C targets, not just percent reduction. Very high-risk ASCVD benefits from <55 mg/dL.

2. **SAMS reality check:** SAMSON and StatinWISE trials show most muscle symptoms are not statin-caused. Nocebo effect is powerful.

3. **Statin intensity matters:** High-intensity vs moderate-intensity shows consistent 15-20% RRR difference in CVD events.

4. **The "Rule of 6%":** Doubling the statin dose only adds ~6% additional LDL-C lowering. Adding ezetimibe is more effective.

5. **Generic prescribing:** Atorvastatin and rosuvastatin are generic and cost-effective. Brand-only statins rarely justified.

6. **ASCVD risk calculation:** Use Pooled Cohort Equations or PREVENT calculator. CAC score for borderline-risk shared decision-making.

7. **Post-ACS:** High-intensity statin for ALL patients (PROVE IT-TIMI 22). Start in-hospital.

8. **Primary prevention in elderly:** STAREE trial ongoing. Currently, shared decision-making; consider frailty and life expectancy.

9. **Statin-associated diabetes:** Screen annually with HbA1c. CV benefit >> diabetes risk. Not a reason to stop.

10. **Combination therapy escalation:**
    - Maximize statin
    - Add ezetimibe (15-20% additional reduction, oral, generic)
    - Add bempedoic acid if statin-intolerant (18% reduction)
    - PCSK9 inhibitor for very high risk not at goal (60% reduction)
    - Inclisiran (siRNA) twice-yearly dosing option`,
      keyTerms: [
        { term: 'IMPROVE-IT', definition: 'Trial demonstrating ezetimibe added to simvastatin reduces CV events vs statin alone in post-ACS patients' },
        { term: 'FOURIER', definition: 'Trial showing evolocumab (PCSK9i) added to statin reduces CV events by 15% in stable ASCVD' },
        { term: 'bempedoic acid', definition: 'ACL inhibitor upstream of HMG-CoA reductase; does not cause myopathy; useful in statin intolerance' },
        { term: 'inclisiran', definition: 'siRNA targeting PCSK9 mRNA; twice-yearly subcutaneous injection; 50% LDL-C reduction' },
        { term: 'SAMSON trial', definition: 'N-of-1 trial design showing two-thirds of statin side effects are nocebo effect' },
      ],
    },
  },

  drugsInClass: ['atorvastatin', 'rosuvastatin', 'simvastatin', 'pravastatin', 'lovastatin', 'fluvastatin', 'pitavastatin'],

  classWarnings: [
    'Contraindicated in pregnancy (Category X)',
    'Risk of myopathy and rhabdomyolysis, especially with drug interactions',
    'May increase risk of new-onset diabetes',
    'Avoid with gemfibrozil due to significant myopathy risk',
  ],

  classInteractions: [
    {
      drug: 'Gemfibrozil',
      severity: 'major',
      mechanism: 'Inhibits OATP1B1 and glucuronidation, increasing statin levels',
      clinicalEffect: '15-fold increased risk of rhabdomyolysis',
      management: 'Avoid combination; use fenofibrate if fibrate needed',
    },
    {
      drug: 'Strong CYP3A4 inhibitors',
      severity: 'major',
      mechanism: 'Inhibit metabolism of CYP3A4-metabolized statins',
      clinicalEffect: 'Markedly increased statin exposure and myopathy risk',
      management: 'Contraindicated with simvastatin/lovastatin; use caution with atorvastatin',
    },
    {
      drug: 'Cyclosporine',
      severity: 'major',
      mechanism: 'Inhibits OATP1B1 and CYP3A4',
      clinicalEffect: 'Increased statin levels',
      management: 'Use lowest effective statin dose; pravastatin preferred',
    },
  ],

  crossReferences: [
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'related', label: 'Coronary Artery Disease' },
    { targetId: 'condition-hyperlipidemia', targetType: 'condition', relationship: 'related', label: 'Hyperlipidemia' },
    { targetId: 'drug-ezetimibe', targetType: 'topic', relationship: 'related', label: 'Ezetimibe' },
    { targetId: 'drug-class-pcsk9-inhibitors', targetType: 'topic', relationship: 'related', label: 'PCSK9 Inhibitors' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['pharmacology', 'therapeutics', 'lipid management'],
    keywords: ['cholesterol', 'LDL', 'hyperlipidemia', 'atherosclerosis', 'cardiovascular prevention'],
    clinicalRelevance: 'critical',
  },

  citations: [
    {
      id: 'acc-aha-cholesterol-2018',
      type: 'article',
      title: '2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Blood Cholesterol',
      source: 'Journal of the American College of Cardiology',
      url: 'https://doi.org/10.1016/j.jacc.2018.11.003',
    },
  ],

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const atorvastatin: MedicationContent = {
  id: 'medication-atorvastatin',
  genericName: 'atorvastatin',
  brandNames: ['Lipitor'],
  drugClass: 'statin',
  category: 'cardiovascular',
  formulations: ['tablet'],
  pregnancyCategory: 'X - Contraindicated in pregnancy',
  lactationSafety: 'Not recommended during breastfeeding',

  levels: {
    1: {
      level: 1,
      summary: 'Atorvastatin is a medicine that lowers cholesterol to help prevent heart attacks and strokes.',
      howItWorks: 'This medicine tells your liver to make less cholesterol and helps your body get rid of the bad cholesterol in your blood.',
      usedFor: 'Your doctor prescribed this to lower your cholesterol and protect your heart. It helps prevent heart attacks and strokes.',
      sideEffects: 'Most people feel fine on this medicine. Some people get muscle aches or an upset stomach. Tell your doctor if your muscles hurt for no reason.',
      warnings: 'Do not take this if you are pregnant or trying to get pregnant. Tell your doctor about all other medicines you take.',
      howToTake: 'Take one tablet once a day at the same time each day. You can take it with or without food. It works even if you do not feel different.',
    },
    2: {
      level: 2,
      summary: 'Atorvastatin (Lipitor) is a statin medication that significantly lowers LDL cholesterol by blocking its production in the liver, reducing the risk of heart attacks and strokes.',
      howItWorks: 'Atorvastatin blocks an enzyme in the liver called HMG-CoA reductase that your body needs to make cholesterol. When the liver cant make as much, it absorbs more LDL cholesterol from your blood, lowering your levels.',
      usedFor: 'Prescribed for high cholesterol, prevention of heart attacks and strokes, and for people with diabetes or heart disease to reduce cardiovascular risk.',
      sideEffects: 'Common: Muscle aches (5-10%), headache, digestive upset. Rare but serious: Severe muscle pain with weakness (rhabdomyolysis), liver problems.',
      warnings: 'Do not use if pregnant or breastfeeding. Avoid grapefruit juice in large amounts. Tell your doctor about muscle pain that does not go away.',
      howToTake: 'Take once daily at any time, with or without food. If you miss a dose, take it when you remember unless it is almost time for your next dose.',
      interactions: 'Can interact with certain antibiotics, antifungals, and other heart medicines. Always tell your doctor and pharmacist about all your medications.',
      keyTerms: [
        { term: 'LDL cholesterol', definition: 'The "bad" cholesterol that builds up in arteries' },
        { term: 'rhabdomyolysis', definition: 'Rare serious breakdown of muscle tissue' },
      ],
    },
    3: {
      level: 3,
      summary: 'Atorvastatin is a synthetic, lipophilic HMG-CoA reductase inhibitor that provides potent LDL-C reduction (up to 60% at maximum dose) with a long half-life allowing once-daily dosing at any time.',
      howItWorks: 'Atorvastatin competitively inhibits HMG-CoA reductase, blocking the rate-limiting step in cholesterol biosynthesis. The resulting decrease in intrahepatic cholesterol upregulates LDL receptor expression, increasing LDL clearance from plasma. It also reduces VLDL synthesis and has pleiotropic anti-inflammatory effects.',
      usedFor: 'Primary and secondary cardiovascular prevention, hyperlipidemia (including familial hypercholesterolemia), hypertriglyceridemia, and mixed dyslipidemia. High-intensity dosing (40-80 mg) recommended for ASCVD.',
      sideEffects: 'Myalgia (5-10%), elevated transaminases (1-2%), GI upset, headache. Rare: myopathy, rhabdomyolysis, new-onset diabetes (slight increase), cognitive effects (rare, reversible).',
      warnings: 'Contraindicated in active liver disease, pregnancy, and breastfeeding. Use caution with CYP3A4 inhibitors (but safer than simvastatin). Monitor for SAMS.',
      howToTake: 'Take 10-80 mg once daily at any time (long half-life ~14 hours). With or without food. Start 10-20 mg for most patients; 80 mg for high-risk ASCVD.',
      interactions: 'CYP3A4 substrate but less interaction risk than simvastatin. Major: clarithromycin, itraconazole, HIV protease inhibitors (use lower atorvastatin doses). Moderate: amiodarone, diltiazem. Avoid gemfibrozil.',
      monitoring: 'Baseline and 4-12 week lipid panel. LFTs at baseline; recheck only if symptoms. CK only if muscle symptoms develop.',
      keyTerms: [
        { term: 'lipophilic', definition: 'Fat-soluble; atorvastatin enters hepatocytes by passive diffusion and active transport' },
        { term: 'half-life', definition: 'At 14 hours, atorvastatin can be taken at any time of day' },
      ],
    },
    4: {
      level: 4,
      summary: 'Atorvastatin is a potent, lipophilic synthetic statin with CYP3A4 metabolism and the longest active metabolite half-life (~30 hours), enabling flexible dosing and providing high-intensity therapy at 40-80 mg with up to 60% LDL-C reduction.',
      howItWorks: `**Pharmacodynamics:**
- Competitive, reversible HMG-CoA reductase inhibitor
- Ki for reductase: ~1 nM (highly potent)
- Active orthohydroxy and parahydroxy metabolites contribute to efficacy
- Hepatic selectivity via OATP1B1-mediated uptake

**Pleiotropic Effects:**
- Improved endothelial function (increased NO bioavailability)
- Anti-inflammatory (reduced CRP, IL-6)
- Antithrombotic (reduced TF expression, PAI-1)
- Plaque stabilization (increased collagen, reduced MMP activity)`,
      usedFor: `**Guideline-Based Indications:**

High-intensity therapy (40-80 mg):
- Clinical ASCVD (secondary prevention)
- LDL-C >= 190 mg/dL
- Diabetes with 10-year ASCVD risk >= 7.5%

Moderate-intensity therapy (10-20 mg):
- Primary prevention with 10-year risk 7.5-20%
- Diabetes age 40-75 without high-risk features
- Statin intolerance requiring dose reduction`,
      sideEffects: `**SAMS (Statin-Associated Muscle Symptoms):**
- Myalgia without CK elevation: 5-10%
- Myopathy (CK >10x ULN): <0.1%
- Rhabdomyolysis: Very rare
- Risk factors: Drug interactions, hypothyroidism, genetic variants

**Hepatic:**
- ALT >3x ULN: ~0.5%
- Serious hepatotoxicity: Very rare

**Metabolic:**
- New-onset diabetes: OR ~1.09
- Dose-dependent effect`,
      warnings: `**Contraindications:**
- Active liver disease
- Pregnancy (Category X)
- Breastfeeding
- Hypersensitivity

**Drug Interaction Precautions:**
Unlike simvastatin/lovastatin, no absolute contraindication with CYP3A4 inhibitors, but dose adjustment recommended:
- With clarithromycin, itraconazole: Limit to 20 mg
- With HIV protease inhibitors: Use lowest effective dose
- With cyclosporine: Avoid or limit to 10 mg`,
      howToTake: `**Dosing:**
- Starting dose: 10-20 mg once daily
- Maximum dose: 80 mg once daily
- High-intensity: 40-80 mg
- Moderate-intensity: 10-20 mg

**Pharmacokinetics:**
- Absorption: 30% bioavailable; food does not affect
- Half-life: Parent 14 hours; active metabolites ~30 hours
- Metabolism: CYP3A4
- Excretion: Primarily biliary (98%)
- Timing: Any time of day due to long half-life`,
      interactions: `**CYP3A4 Interactions:**

Major:
- Itraconazole: 3x increase in atorvastatin AUC
- Clarithromycin: 4x increase
- Ritonavir: Consider alternatives or lowest dose

Moderate:
- Diltiazem: 1.4x increase
- Amiodarone: 1.3x increase

**Other Interactions:**
- Gemfibrozil: Doubles atorvastatin AUC via OATP1B1 and glucuronidation inhibition
- Cyclosporine: 7-8x increase via multiple mechanisms
- Colchicine: Additive myopathy risk
- Digoxin: 20% increase in digoxin levels
- Warfarin: Monitor INR closely`,
      monitoring: `**Baseline:**
- Lipid panel
- LFTs (ALT)
- Consider: fasting glucose/HbA1c, CK if high risk

**Follow-up:**
- Lipid panel 4-12 weeks after start/dose change
- Calculate percent LDL-C reduction (goal >= 50% for high-intensity)
- LFTs only if hepatic symptoms
- CK only if muscle symptoms`,
      clinicalPearls: `1. **First-line statin:** Generic atorvastatin is cost-effective with excellent efficacy and fewer interactions than simvastatin.

2. **40 mg vs 80 mg:** 80 mg provides additional ~6% LDL-C reduction over 40 mg. Consider adding ezetimibe instead.

3. **Time of dosing:** Flexibility is a key advantage; patient preference improves adherence.

4. **Post-ACS:** Initiate 80 mg in-hospital per PROVE IT-TIMI 22 data.

5. **ASCVD secondary prevention:** High-intensity (40-80 mg) for all unless contraindicated.`,
      keyTerms: [
        { term: 'PROVE IT-TIMI 22', definition: 'Trial showing atorvastatin 80 mg superior to pravastatin 40 mg post-ACS' },
        { term: 'active metabolites', definition: 'Orthohydroxy and parahydroxy atorvastatin contribute to total HMG-CoA reductase inhibition' },
      ],
    },
    5: {
      level: 5,
      summary: 'Atorvastatin is a first-line statin for most patients due to high potency, generic availability, flexible dosing, and favorable interaction profile compared to simvastatin; key trials (TNT, SPARCL, PROVE IT) established high-intensity atorvastatin as standard of care in secondary prevention.',
      howItWorks: `**Molecular Pharmacology:**

Structure-Activity:
- Synthetic compound with dihydroxyheptanoic acid moiety
- Binds HMG-CoA reductase with Ki ~1 nM
- Active hydroxy metabolites (ortho- and para-) contribute ~70% of total activity
- Lactone prodrug form not used clinically

Hepatic Uptake:
- OATP1B1 (SLCO1B1) and OATP1B3 mediate hepatic uptake
- SLCO1B1*5 reduces uptake (less impact than for simvastatin)
- Lipophilic nature allows passive hepatocyte entry as well

**Pharmacokinetics Detail:**
- Tmax: 1-2 hours
- Bioavailability: ~14% (extensive first-pass)
- Protein binding: 98%
- Vd: ~381 L
- Half-life: Parent 14h; metabolites 20-30h
- CYP3A4 metabolism; avoid inducers
- Biliary excretion (98%); minimal renal`,
      usedFor: `**Key Clinical Trial Evidence:**

TNT (Treating to New Targets):
- Atorvastatin 80 mg vs 10 mg in stable CAD
- 22% RRR in major CV events with intensive therapy
- Established benefit of LDL-C <70 mg/dL target

SPARCL:
- Atorvastatin 80 mg post-stroke/TIA
- 16% reduction in recurrent stroke
- Slight increase in hemorrhagic stroke (use caution in prior hemorrhagic stroke)

PROVE IT-TIMI 22:
- Atorvastatin 80 mg vs pravastatin 40 mg post-ACS
- 16% RRR favoring high-intensity atorvastatin
- "Lower is better" for LDL-C

REVERSAL:
- Atorvastatin 80 mg halted plaque progression on IVUS

CARDS:
- Atorvastatin 10 mg in diabetes
- 37% RRR in major CV events

**Contemporary Practice:**
- Generic since 2011; highly cost-effective
- First-line choice for most indications
- Fixed-dose combinations with ezetimibe, amlodipine available`,
      sideEffects: `**SAMS Management Specific to Atorvastatin:**

Compared to other statins:
- Lower SAMS risk than simvastatin 80 mg
- Similar SAMS to rosuvastatin
- 4-5% incidence in clinical practice

SAMS management:
1. Verify statin causality (symptoms resolve with dechallenge, recur with rechallenge)
2. If confirmed: Try atorvastatin 20 mg or rosuvastatin (hydrophilic)
3. If intolerant: Consider alternate-day atorvastatin (long half-life allows)
4. Atorvastatin 20 mg M/W/F provides ~50% of daily dose efficacy

**Hepatotoxicity:**
- Transaminase >3x ULN: 0.4% at 80 mg
- Rarely clinically significant
- NAFLD is NOT a contraindication; may improve histology

**Diabetes Risk:**
- Meta-analysis: 9-12% increase in new diabetes
- Dose-dependent
- Benefit in CV risk reduction far outweighs diabetes risk
- Screen at-risk patients with annual HbA1c`,
      warnings: `**Absolute Contraindications:**
- Active liver disease or unexplained persistent transaminase elevation
- Pregnancy (Category X) - may cause fetal harm
- Breastfeeding
- Hypersensitivity to atorvastatin or excipients

**CYP3A4 Interaction Management:**

Strong CYP3A4 inhibitors (itraconazole, clarithromycin, HIV PIs):
- NOT absolutely contraindicated (unlike simvastatin)
- Use lowest effective atorvastatin dose (10-20 mg)
- Consider rosuvastatin or pravastatin as alternative

Specific scenarios:
- Clarithromycin: 4x increase in exposure; limit atorvastatin dose
- HIV therapy: Integrase inhibitors preferred over boosted PIs if on statins
- Solid organ transplant on cyclosporine: Use pravastatin; if atorvastatin required, max 10 mg

**Special Populations:**
- Elderly: No dose adjustment; benefits extend to age 75+
- Renal impairment: No adjustment needed (biliary excretion)
- Hepatic impairment: Contraindicated if active; use cautiously in compensated cirrhosis`,
      howToTake: `**Evidence-Based Dosing:**

Secondary Prevention (ASCVD):
- High-intensity: 40-80 mg once daily
- If 80 mg not tolerated: 40 mg + ezetimibe 10 mg

Primary Prevention:
- Moderate to high-intensity based on risk
- 10-20 mg for moderate-intensity
- 40-80 mg for high-intensity

Post-ACS:
- Initiate atorvastatin 80 mg in-hospital
- Do not delay for fasting lipid panel

**Practical Tips:**
- Any time of day dosing (long half-life)
- Take with or without food
- No grapefruit restriction needed at moderate amounts (unlike simvastatin)
- Missed dose: Take as soon as remembered unless close to next dose

**Alternate-Day Dosing:**
- Useful for SAMS patients
- 20-40 mg every other day
- ~70-80% LDL-C lowering compared to daily`,
      interactions: `**High-Yield Drug Interactions:**

| Interacting Drug | Effect on Atorvastatin | Management |
|------------------|------------------------|------------|
| Clarithromycin | 4x AUC increase | Use azithromycin if possible; limit atorvastatin to 20 mg |
| Itraconazole | 3x AUC increase | Avoid if possible; limit to 20 mg |
| Cyclosporine | 7-8x increase | Use pravastatin preferred; if atorvastatin, max 10 mg |
| Ritonavir | Significant increase | Consider rosuvastatin or pravastatin |
| Gemfibrozil | 2x increase | Avoid; use fenofibrate if fibrate needed |
| Diltiazem | 1.4x increase | Generally safe; monitor |
| Amiodarone | 1.3x increase | Monitor for SAMS |
| Ezetimibe | Safe combination | Standard second-line addition |

**Warfarin Interaction:**
- Atorvastatin may increase INR modestly
- Check INR within 1-2 weeks of starting atorvastatin
- Usually minor adjustment needed

**Colchicine:**
- Additive myopathy risk
- Use with caution, especially in renal impairment

**OATP1B1 Inhibitors (beyond CYP3A4):**
- Gemfibrozil: Major OATP1B1 inhibitor
- Cyclosporine: Dual CYP3A4 and OATP1B1 inhibition
- Certain HIV medications`,
      monitoring: `**Baseline Evaluation:**

Required:
- Lipid panel (fasting or non-fasting acceptable)
- Hepatic function (ALT, +/- AST)

Recommended:
- Fasting glucose or HbA1c
- TSH if clinically indicated
- Renal function (though no adjustment needed)

Consider:
- CK baseline if high myopathy risk
- 10-year ASCVD risk calculation
- CAC score for borderline-risk primary prevention

**Follow-up Monitoring:**

Lipid panel:
- 4-12 weeks after initiation or dose change
- Annually once at goal
- Calculate percent LDL-C reduction from baseline

Treatment Targets:
- High-intensity: Expect >= 50% LDL-C reduction
- ASCVD: LDL-C <70 mg/dL (consider <55 very high risk)

LFTs:
- Routine monitoring NOT recommended
- Check only if hepatic symptoms develop
- Mild elevation (<3x ULN) often transient; can continue

CK:
- Routine monitoring NOT recommended
- Check only if muscle symptoms develop
- If CK >10x ULN: Stop statin, hydrate, monitor renal function

HbA1c:
- Annually in at-risk patients
- Slight diabetes risk increase does not outweigh CV benefit`,
      clinicalPearls: `**Expert Clinical Practice Points:**

1. **Default choice for most patients:** Generic atorvastatin is cost-effective with excellent efficacy. Fewer significant interactions than simvastatin.

2. **Intensity selection:**
   - ASCVD: Always high-intensity (40-80 mg)
   - Primary prevention: Based on risk calculator and risk enhancers
   - Post-ACS: Start 80 mg in-hospital

3. **SAMS troubleshooting:**
   - Confirm causality with dechallenge/rechallenge
   - If intolerant to atorvastatin 80 mg, try 40 mg or rosuvastatin
   - Alternate-day atorvastatin is effective due to long half-life
   - True statin intolerance is rare (<5%)

4. **Not at goal on maximum dose:**
   - Add ezetimibe (15-20% additional LDL-C reduction)
   - If still not at goal: PCSK9 inhibitor for very high-risk
   - Bempedoic acid for statin intolerance

5. **Drug interactions:**
   - Safer than simvastatin with CYP3A4 inhibitors (not contraindicated)
   - Still reduce dose with strong inhibitors
   - Avoid gemfibrozil; use fenofibrate if fibrate needed

6. **Special scenarios:**
   - Post-transplant: Prefer pravastatin for cyclosporine patients
   - HIV: Coordinate with HIV team; rosuvastatin often preferred with boosted PIs
   - Elderly: Age is not a contraindication; benefit extends to 75+

7. **Combination therapy:**
   - Atorvastatin + ezetimibe fixed-dose available
   - Atorvastatin + amlodipine fixed-dose for hypertension + hyperlipidemia

8. **Patient counseling priorities:**
   - Emphasize CV risk reduction, not just cholesterol number
   - Lifetime therapy for most patients
   - Address SAMS concerns proactively (nocebo effect is real)
   - No strict grapefruit avoidance (unlike simvastatin)`,
      keyTerms: [
        { term: 'TNT trial', definition: 'Treating to New Targets; established benefit of LDL-C <70 mg/dL with high-intensity atorvastatin' },
        { term: 'CARDS', definition: 'Collaborative Atorvastatin Diabetes Study; showed 37% CV risk reduction in diabetes' },
        { term: 'nocebo effect', definition: 'Patient experiences side effects due to negative expectations, not the drug itself' },
      ],
    },
  },

  pharmacokinetics: {
    absorption: 'Rapidly absorbed; ~30% bioavailable (extensive first-pass metabolism)',
    distribution: 'Volume of distribution ~381 L; 98% protein bound',
    metabolism: 'CYP3A4 to active ortho- and para-hydroxylated metabolites; metabolites contribute ~70% of activity',
    elimination: 'Primarily biliary/fecal (98%); <2% renal',
    halfLife: 'Parent: ~14 hours; Active metabolites: 20-30 hours',
    peakEffect: '1-2 hours',
    bioavailability: '14%',
    proteinBinding: '98%',
  },

  dosing: [
    {
      indication: 'Primary prevention (moderate-intensity)',
      adultDose: '10-20 mg once daily',
      maxDose: '80 mg/day',
    },
    {
      indication: 'Secondary prevention / ASCVD (high-intensity)',
      adultDose: '40-80 mg once daily',
      maxDose: '80 mg/day',
    },
    {
      indication: 'Familial hypercholesterolemia',
      adultDose: '10-80 mg once daily',
      pediatricDose: '10-20 mg/day (age 10-17 years)',
      maxDose: '80 mg/day',
    },
    {
      indication: 'With strong CYP3A4 inhibitors',
      adultDose: 'Start 10 mg; max 20 mg/day',
      maxDose: '20 mg/day',
    },
  ],

  interactions: [
    {
      drug: 'Clarithromycin',
      severity: 'major',
      mechanism: 'Strong CYP3A4 inhibition increases atorvastatin exposure 4-fold',
      clinicalEffect: 'Increased risk of myopathy and rhabdomyolysis',
      management: 'Limit atorvastatin to 20 mg/day; consider azithromycin alternative',
    },
    {
      drug: 'Itraconazole',
      severity: 'major',
      mechanism: 'Strong CYP3A4 inhibition increases atorvastatin exposure 3-fold',
      clinicalEffect: 'Increased risk of myopathy',
      management: 'Limit atorvastatin to 20 mg/day; consider alternative antifungal',
    },
    {
      drug: 'Cyclosporine',
      severity: 'major',
      mechanism: 'CYP3A4 and OATP1B1 inhibition increases atorvastatin 7-8 fold',
      clinicalEffect: 'Significantly increased myopathy risk',
      management: 'Avoid if possible; if used, limit to 10 mg/day; pravastatin preferred',
    },
    {
      drug: 'Gemfibrozil',
      severity: 'major',
      mechanism: 'OATP1B1 inhibition and reduced glucuronidation double atorvastatin levels',
      clinicalEffect: 'Significantly increased myopathy/rhabdomyolysis risk',
      management: 'Avoid combination; use fenofibrate if fibrate needed',
    },
    {
      drug: 'HIV protease inhibitors',
      severity: 'major',
      mechanism: 'CYP3A4 inhibition (especially ritonavir-boosted regimens)',
      clinicalEffect: 'Markedly increased atorvastatin exposure',
      management: 'Use lowest atorvastatin dose; consider rosuvastatin or pravastatin',
    },
    {
      drug: 'Diltiazem',
      severity: 'moderate',
      mechanism: 'Moderate CYP3A4 inhibition increases atorvastatin by ~40%',
      clinicalEffect: 'Modest increase in myopathy risk',
      management: 'Generally safe; monitor for muscle symptoms',
    },
    {
      drug: 'Warfarin',
      severity: 'moderate',
      mechanism: 'May increase warfarin effect; mechanism unclear',
      clinicalEffect: 'Increased INR and bleeding risk',
      management: 'Monitor INR within 1-2 weeks of starting; adjust warfarin as needed',
    },
    {
      drug: 'Digoxin',
      severity: 'minor',
      mechanism: 'Increases digoxin levels by ~20%',
      clinicalEffect: 'Potential for digoxin toxicity',
      management: 'Monitor digoxin levels; usually clinically insignificant',
    },
  ],

  monitoring: [
    {
      parameter: 'Lipid panel',
      frequency: 'Baseline, 4-12 weeks after initiation, then annually',
      rationale: 'Assess LDL-C reduction and adjust therapy',
      targetRange: 'LDL-C reduction >=50% for high-intensity; <70 mg/dL for ASCVD',
    },
    {
      parameter: 'Hepatic function (ALT)',
      frequency: 'Baseline; thereafter only if symptoms',
      rationale: 'Monitor for hepatotoxicity',
      targetRange: 'ALT <3x ULN',
    },
    {
      parameter: 'Creatine kinase (CK)',
      frequency: 'Only if muscle symptoms develop',
      rationale: 'Assess for myopathy/rhabdomyolysis',
      targetRange: 'CK <10x ULN',
    },
    {
      parameter: 'HbA1c or fasting glucose',
      frequency: 'Annually in at-risk patients',
      rationale: 'Monitor for new-onset diabetes',
      targetRange: 'Per diabetes guidelines',
    },
  ],

  counselingPoints: [
    {
      topic: 'Purpose',
      instruction: 'This medication lowers cholesterol to reduce your risk of heart attack and stroke. It works even if you feel fine and should be taken long-term.',
      importance: 'critical',
    },
    {
      topic: 'Dosing',
      instruction: 'Take once daily at any time that works for you. Pick a consistent time to help remember. Take with or without food.',
      importance: 'important',
    },
    {
      topic: 'Muscle symptoms',
      instruction: 'Report unexplained muscle pain, tenderness, or weakness to your doctor, especially with fever or dark urine. Most muscle aches are not serious.',
      importance: 'critical',
    },
    {
      topic: 'Pregnancy',
      instruction: 'Do not take if pregnant, planning pregnancy, or breastfeeding. Use effective contraception while on this medication.',
      importance: 'critical',
    },
    {
      topic: 'Drug interactions',
      instruction: 'Inform all healthcare providers that you take atorvastatin. Certain medications can increase side effects.',
      importance: 'important',
    },
    {
      topic: 'Lifestyle',
      instruction: 'Continue heart-healthy diet and exercise. This medication works best combined with lifestyle changes.',
      importance: 'important',
    },
    {
      topic: 'Grapefruit',
      instruction: 'Moderate grapefruit consumption is okay with atorvastatin (unlike some other statins). Avoid excessive amounts.',
      importance: 'helpful',
    },
    {
      topic: 'Monitoring',
      instruction: 'Blood tests will be done periodically to check cholesterol levels and ensure the medication is safe for you.',
      importance: 'important',
    },
  ],

  crossReferences: [
    { targetId: 'drug-class-statins', targetType: 'topic', relationship: 'parent', label: 'Statin Drug Class' },
    { targetId: 'medication-ezetimibe', targetType: 'topic', relationship: 'related', label: 'Ezetimibe' },
    { targetId: 'condition-hyperlipidemia', targetType: 'condition', relationship: 'related', label: 'Hyperlipidemia' },
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'related', label: 'Coronary Artery Disease' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['pharmacology', 'therapeutics', 'lipid management'],
    keywords: ['statin', 'cholesterol', 'LDL', 'cardiovascular prevention', 'Lipitor'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pharmacology'],
    },
  },

  citations: [
    {
      id: 'lipitor-pi',
      type: 'website',
      title: 'Lipitor (atorvastatin) Prescribing Information',
      source: 'Pfizer',
      url: 'https://labeling.pfizer.com/showlabeling.aspx?id=587',
    },
    {
      id: 'tnt-trial',
      type: 'article',
      title: 'Intensive Lipid Lowering with Atorvastatin in Patients with Stable Coronary Disease',
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa050461',
    },
  ],

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const rosuvastatin: MedicationContent = {
  id: 'medication-rosuvastatin',
  genericName: 'rosuvastatin',
  brandNames: ['Crestor'],
  drugClass: 'statin',
  category: 'cardiovascular',
  formulations: ['tablet'],
  pregnancyCategory: 'X - Contraindicated in pregnancy',
  lactationSafety: 'Not recommended during breastfeeding',

  levels: {
    1: {
      level: 1,
      summary: 'Rosuvastatin is a powerful cholesterol-lowering medicine that helps prevent heart attacks and strokes.',
      howItWorks: 'This medicine tells your liver to make less cholesterol and helps clean the bad cholesterol out of your blood.',
      usedFor: 'Your doctor prescribed this to lower your cholesterol and protect your heart and blood vessels.',
      sideEffects: 'Most people feel fine. Some get muscle aches or headaches. Tell your doctor about any unexplained muscle pain.',
      warnings: 'Do not take if pregnant or breastfeeding. Your doctor may need to adjust the dose if you have kidney problems.',
      howToTake: 'Take one tablet once a day at the same time each day. You can take it with or without food.',
    },
    2: {
      level: 2,
      summary: 'Rosuvastatin (Crestor) is one of the most potent statin medications, lowering LDL cholesterol by up to 55%, with fewer drug interactions than some other statins.',
      howItWorks: 'Rosuvastatin blocks the enzyme HMG-CoA reductase in the liver that makes cholesterol. When less cholesterol is made, the liver pulls more LDL from your blood to compensate.',
      usedFor: 'High cholesterol, prevention of heart attacks and strokes, and for people with heart disease or diabetes to reduce cardiovascular risk.',
      sideEffects: 'Common: Muscle aches, headache, nausea, weakness. Rare: Severe muscle breakdown, liver problems, increased blood sugar.',
      warnings: 'Not for use in pregnancy or breastfeeding. Dose adjustment needed for kidney problems. Asian patients may need lower starting doses.',
      howToTake: 'Take once daily at any time, with or without food. Do not double up if you miss a dose.',
      interactions: 'Fewer drug interactions than some statins, but still interacts with cyclosporine, certain HIV medications, and gemfibrozil.',
      keyTerms: [
        { term: 'hydrophilic', definition: 'Water-soluble; rosuvastatin does not enter non-liver cells as easily, potentially causing fewer muscle side effects' },
      ],
    },
    3: {
      level: 3,
      summary: 'Rosuvastatin is a hydrophilic, synthetic HMG-CoA reductase inhibitor with the highest potency among available statins, minimal CYP450 metabolism, and renal excretion requiring dose adjustment in severe kidney impairment.',
      howItWorks: 'Rosuvastatin competitively inhibits HMG-CoA reductase with high affinity. Its hydrophilic nature limits penetration into peripheral tissues. Hepatic uptake via OATP1B1 contributes to hepatic selectivity. Minimal CYP metabolism results in fewer drug interactions.',
      usedFor: 'Primary and secondary cardiovascular prevention, hyperlipidemia, mixed dyslipidemia. High-intensity dosing (20-40 mg) provides >= 50% LDL-C reduction.',
      sideEffects: 'Myalgia (3-5%), proteinuria (dose-related, usually transient), headache, abdominal pain. Less myotoxicity concern than lipophilic statins due to poor muscle penetration.',
      warnings: 'Contraindicated in active liver disease and pregnancy. Dose cap in severe renal impairment (CrCl <30: max 10 mg). Consider lower starting dose in Asian patients due to higher plasma concentrations.',
      howToTake: 'Take 5-40 mg once daily at any time. Starting dose 10-20 mg for most; 5 mg for Asians, renal impairment, or with certain drug interactions.',
      interactions: 'Primary interactions via OATP1B1/BCRP, not CYP450. Cyclosporine significantly increases levels (max 5 mg). Gemfibrozil doubles exposure. Protease inhibitors may increase levels.',
      monitoring: 'Baseline and follow-up lipid panels. LFTs at baseline. Urinalysis if high doses used. CK only if symptomatic. Adjust dose for renal function.',
      keyTerms: [
        { term: 'OATP1B1', definition: 'Organic anion transporter that mediates hepatic uptake of rosuvastatin' },
        { term: 'BCRP', definition: 'Breast cancer resistance protein; efflux transporter affecting rosuvastatin levels' },
      ],
    },
    4: {
      level: 4,
      summary: 'Rosuvastatin is the most potent statin available with a hydrophilic structure conferring hepatic selectivity, minimal CYP450 interactions, but important OATP1B1/BCRP transporter-mediated interactions; requires renal dose adjustment and Asian-ancestry dose considerations.',
      howItWorks: `**Pharmacodynamics:**
- Most potent HMG-CoA reductase inhibitor (Ki < atorvastatin)
- Hydrophilic structure limits passive diffusion into non-hepatic tissues
- Active hepatic uptake via OATP1B1, OATP1B3
- Minimal metabolism: ~10% by CYP2C9, CYP2C19
- Long half-life (19 hours) allows any-time dosing

**Comparative Potency:**
- Rosuvastatin 10 mg ≈ Atorvastatin 20 mg ≈ Simvastatin 40-80 mg
- Maximum LDL-C reduction ~55% at 40 mg`,
      usedFor: `**Guideline-Based Indications:**
- Clinical ASCVD: High-intensity (20-40 mg)
- LDL-C >= 190 mg/dL: High-intensity
- Diabetes with ASCVD risk factors: High-intensity
- Primary prevention with elevated risk: Moderate to high-intensity

**JUPITER Trial:**
- Rosuvastatin 20 mg in elevated hsCRP, normal LDL
- 44% RRR in first major CV event
- Extended primary prevention indication`,
      sideEffects: `**SAMS:**
- Potentially lower myotoxicity due to hydrophilicity
- SLCO1B1*5 polymorphism less impactful than for simvastatin
- Still monitor for and manage as with other statins

**Proteinuria:**
- Dose-related proteinuria reported (particularly > 40 mg)
- Usually tubular, not glomerular
- Typically transient and not associated with renal dysfunction

**Other:**
- Hepatotoxicity rare
- New-onset diabetes (similar to other statins)`,
      warnings: `**Renal Dosing:**
- CrCl >= 30: No adjustment; start 10 mg
- CrCl < 30: Start 5 mg, max 10 mg
- HD: 5 mg max

**Asian Patients:**
- 2-fold higher plasma concentrations
- Start 5 mg; max 20 mg recommended
- Pharmacogenomics: ABCG2 and OATP1B1 variants

**Pregnancy/Lactation:**
- Category X
- Contraindicated in breastfeeding`,
      howToTake: `**Dosing:**
- Initial: 10-20 mg once daily (5 mg if renal impairment, Asian, drug interactions)
- High-intensity: 20-40 mg once daily
- Maximum: 40 mg (20 mg in Asian patients)

**Timing:** Any time of day
**Food:** With or without`,
      interactions: `**Transporter-Mediated (Primary):**

Cyclosporine:
- 7-11x increase via OATP1B1 inhibition
- Rosuvastatin max 5 mg if cyclosporine necessary

Gemfibrozil:
- 2x increase (less than with other statins but still significant)
- Avoid; use fenofibrate if needed

Protease inhibitors:
- Variable increases (atazanavir/ritonavir: 3x)
- Limit rosuvastatin to 10 mg with lopinavir/ritonavir
- Limit to 20 mg with atazanavir/ritonavir

**CYP-Mediated (Minimal):**
- Little interaction with CYP3A4 inhibitors
- Safer than simvastatin/lovastatin/atorvastatin with macrolides, azoles

**Warfarin:**
- May increase INR; monitor closely`,
      monitoring: `**Baseline:**
- Lipid panel
- LFTs
- Renal function (for dosing)
- Fasting glucose/HbA1c

**Follow-up:**
- Lipid panel 4-12 weeks, then annually
- Urinalysis if dose > 20 mg (some guidelines)
- LFTs only if symptoms
- CK only if muscle symptoms`,
      clinicalPearls: `1. **Fewest CYP450 interactions:** Preferred when complex polypharmacy with CYP3A4 inhibitors.

2. **Renal dosing matters:** Unlike atorvastatin, requires adjustment for CrCl < 30.

3. **Asian-specific dosing:** Pharmacogenomic differences warrant lower starting and maximum doses.

4. **Switching from atorvastatin:** Rosuvastatin 10 mg ≈ atorvastatin 20 mg.

5. **Alternate-day dosing:** Long half-life allows for SAMS patients.

6. **JUPITER extended indication:** Primary prevention in elevated hsCRP even with normal LDL-C.`,
      keyTerms: [
        { term: 'JUPITER', definition: 'Trial demonstrating rosuvastatin benefit in primary prevention with elevated hsCRP' },
        { term: 'hepatic selectivity', definition: 'Preferential uptake by liver; reduces muscle side effects' },
      ],
    },
    5: {
      level: 5,
      summary: 'Rosuvastatin offers the highest LDL-C lowering potency, favorable drug interaction profile via minimal CYP metabolism, and is preferred in polypharmacy; JUPITER established primary prevention benefit in inflammatory phenotypes; key considerations include renal dose adjustment, Asian pharmacogenomics, and transporter-mediated interactions.',
      howItWorks: `**Molecular Pharmacology:**

Structure:
- Synthetic methane-sulfonamide pyrimidine
- Hydrophilic due to polar sulfone group
- Does not undergo lactone-acid interconversion

Binding:
- Highest affinity for HMG-CoA reductase among statins
- Multiple polar interactions in enzyme binding site

Hepatic Selectivity:
- Limited passive diffusion across cell membranes (low logD)
- Active hepatic uptake via OATP1B1 (SLCO1B1), OATP1B3
- Hepatic efflux via BCRP (ABCG2), MRP2 (ABCC2)
- Biliary and renal excretion (both important)

**Pharmacogenomics:**

SLCO1B1 (OATP1B1):
- c.521T>C (*5) reduces hepatic uptake
- Increases systemic exposure
- Less pronounced myopathy risk than with simvastatin

ABCG2 (BCRP):
- c.421C>A reduces efflux
- Common in Asian populations (40% vs 10% Caucasian)
- Explains higher rosuvastatin levels in Asians

Clinical implementation:
- Consider genotyping in unexplained elevated levels
- Explains inter-individual variability`,
      usedFor: `**Key Clinical Trial Data:**

JUPITER (2008):
- 17,802 patients with LDL-C < 130 and hsCRP >= 2 mg/L
- Rosuvastatin 20 mg vs placebo
- 44% RRR in primary endpoint (HR 0.56)
- Trial stopped early for efficacy
- Controversy: Number needed to treat high; increased diabetes

METEOR:
- Rosuvastatin 40 mg slowed carotid IMT progression

ASTEROID:
- High-dose rosuvastatin regressed coronary atherosclerosis on IVUS

CORONA:
- No mortality benefit in systolic heart failure (older HFrEF population)
- Reduced HF hospitalizations

GISSI-HF:
- No benefit in chronic heart failure

**Contemporary Practice:**
- Generic since 2016; cost-effective option
- Preferred when CYP3A4 interactions are concern
- First-line alongside atorvastatin`,
      sideEffects: `**SAMS Considerations:**

Theoretical advantages:
- Hydrophilicity reduces muscle penetration
- SLCO1B1*5 impact less pronounced
- Consider for patients intolerant to lipophilic statins

SAMS prevalence:
- Similar to atorvastatin in clinical trials (~3-5%)
- Real-world rates higher (10-15%) due to nocebo

**Proteinuria:**
- Dose-related dipstick proteinuria
- Mechanism: Reduced tubular reabsorption of filtered proteins
- Not associated with progressive renal disease
- Guideline recommendation for urinalysis monitoring controversial

**Specific Adverse Effects:**
- Hepatotoxicity: Similar rarity to other statins
- Diabetes: Meta-analyses show similar risk to other statins
- Memory complaints: Rare; usually reversible`,
      warnings: `**Regulatory Warnings:**

FDA Asian labeling:
- Start 5 mg
- Max 20 mg
- Based on PK studies showing 2-fold higher exposure

Renal impairment:
- CrCl 30-60: Start 5 mg, use caution with 40 mg
- CrCl < 30 not on HD: Start 5 mg, max 10 mg
- HD: 5 mg max (10% removed by dialysis)

**Drug-Specific Dose Caps:**

| Interacting Drug | Max Rosuvastatin |
|------------------|------------------|
| Cyclosporine | 5 mg |
| Atazanavir/ritonavir | 10 mg |
| Lopinavir/ritonavir | 10 mg |
| Gemfibrozil | Avoid |
| Regorafenib | 5 mg |
| Darolutamide | 5 mg |

**Hepatic Impairment:**
- Avoid in active liver disease
- Use cautiously in chronic liver disease`,
      howToTake: `**Evidence-Based Dosing:**

Standard initiation:
- Most patients: 10-20 mg daily
- Asian patients: 5 mg daily
- Renal impairment (CrCl < 60): 5 mg daily
- With interacting drugs: 5 mg daily

Intensity targets:
- High-intensity (>= 50% LDL-C reduction): 20-40 mg
- Moderate-intensity (30-49%): 5-10 mg

Maximum doses:
- General population: 40 mg
- Asian ancestry: 20 mg
- Severe renal impairment: 10 mg
- With cyclosporine: 5 mg

**Pharmacokinetics:**
- Tmax: 3-5 hours
- Bioavailability: 20%
- Half-life: 19 hours
- Protein binding: 88%
- Excretion: 90% fecal, 10% renal`,
      interactions: `**Transporter-Mediated Interactions (High-Yield):**

OATP1B1 inhibitors:
| Drug | Effect on Rosuvastatin | Management |
|------|------------------------|------------|
| Cyclosporine | 7x increase | Max 5 mg |
| Gemfibrozil | 2x increase | Avoid |
| Elbasvir/grazoprevir | 3x increase | Max 10 mg |
| Glecaprevir/pibrentasvir | 5x increase | Contraindicated > 10 mg |

BCRP inhibitors:
| Drug | Effect | Management |
|------|--------|------------|
| Eltrombopag | 2x increase | Monitor |
| Regorafenib | Increased exposure | Max 5 mg |
| Darolutamide | 5x increase | Max 5 mg |

HIV protease inhibitors:
| Regimen | Effect | Management |
|---------|--------|------------|
| Atazanavir/ritonavir | 3x increase | Max 10 mg |
| Lopinavir/ritonavir | 2x increase | Max 10 mg |
| Tipranavir/ritonavir | Use caution | Use lowest dose |

**Minimal CYP Interactions:**
- Clarithromycin: Minimal effect (unlike atorvastatin)
- Itraconazole: Minimal effect
- Advantage in polypharmacy

**Warfarin:**
- Increased INR reported
- Monitor INR when starting rosuvastatin`,
      monitoring: `**Baseline Evaluation:**

Required:
- Lipid panel
- Hepatic function (ALT)
- Renal function (eGFR for dosing)
- Asian ancestry determination for dosing

Recommended:
- Fasting glucose or HbA1c
- Baseline CK if high myopathy risk

**Follow-up Protocol:**

Lipid panel:
- 4-12 weeks after initiation/dose change
- Annually once at goal
- Calculate percent LDL-C reduction

Renal function:
- Periodically, especially if on higher doses
- Adjust dose if eGFR declines

Urinalysis:
- Some guidelines recommend with doses > 20 mg
- Proteinuria usually transient
- Not associated with renal dysfunction

LFTs/CK:
- Only if symptomatic

**Goal Assessment:**
- High-intensity: >= 50% LDL-C reduction expected
- ASCVD target: LDL-C < 70 mg/dL (or < 55 very high risk)`,
      clinicalPearls: `**Expert Clinical Practice Points:**

1. **Drug interaction advantage:** When patients on CYP3A4 inhibitors (macrolides, azoles) need statin, rosuvastatin is preferred over atorvastatin/simvastatin.

2. **Renal impairment:** Unlike atorvastatin, dose adjustment required. But still safe; renal excretion does not mean nephrotoxic.

3. **Asian patients:** Routinely start lower (5 mg) and cap at 20 mg. Not race-based dosing but pharmacogenomics.

4. **JUPITER implications:** Consider for primary prevention in patients with elevated hsCRP (>= 2 mg/L) even with LDL-C < 130 mg/dL.

5. **Post-transplant:** Still requires dose cap with cyclosporine (5 mg max), but can be used. Pravastatin often preferred.

6. **HIV patients:** Preferred over atorvastatin with boosted PI regimens. Coordinate with HIV team.

7. **SAMS patients:** May trial rosuvastatin if intolerant to atorvastatin (different structure, hydrophilic).

8. **Generic availability:** Comparable cost to generic atorvastatin; potency advantage at lower mg doses.

9. **Alternate-day dosing:** 19-hour half-life supports every-other-day regimen for SAMS patients.

10. **Combination therapy:**
    - Add ezetimibe before switching to higher rosuvastatin dose
    - Fixed-dose rosuvastatin/ezetimibe available
    - PCSK9i can be added for very high-risk patients not at goal`,
      keyTerms: [
        { term: 'ABCG2', definition: 'Efflux transporter (BCRP) affecting rosuvastatin; polymorphisms explain Asian dose response' },
        { term: 'METEOR trial', definition: 'Showed rosuvastatin slowed carotid intima-media thickness progression' },
        { term: 'ASTEROID trial', definition: 'Demonstrated coronary atheroma regression with high-dose rosuvastatin' },
      ],
    },
  },

  pharmacokinetics: {
    absorption: 'Peak concentration 3-5 hours; bioavailability ~20%',
    distribution: '88% protein bound; hepatic selective',
    metabolism: 'Minimal CYP metabolism (~10% CYP2C9)',
    elimination: '90% fecal, 10% renal (intact drug)',
    halfLife: '~19 hours',
    bioavailability: '20%',
    proteinBinding: '88%',
  },

  dosing: [
    {
      indication: 'Hyperlipidemia (general population)',
      adultDose: '10-20 mg once daily initially; 5-40 mg range',
      maxDose: '40 mg/day',
    },
    {
      indication: 'Hyperlipidemia (Asian patients)',
      adultDose: '5 mg once daily initially',
      maxDose: '20 mg/day',
    },
    {
      indication: 'Severe renal impairment (CrCl < 30)',
      adultDose: '5 mg once daily initially',
      maxDose: '10 mg/day',
      renalAdjustment: 'Required for CrCl < 30 mL/min',
    },
    {
      indication: 'High-intensity therapy (ASCVD)',
      adultDose: '20-40 mg once daily',
      maxDose: '40 mg/day (20 mg in Asian patients)',
    },
  ],

  interactions: [
    {
      drug: 'Cyclosporine',
      severity: 'contraindicated',
      mechanism: 'OATP1B1 inhibition increases rosuvastatin 7-fold',
      clinicalEffect: 'Markedly increased myopathy and rhabdomyolysis risk',
      management: 'If rosuvastatin required, max 5 mg/day; prefer pravastatin',
    },
    {
      drug: 'Gemfibrozil',
      severity: 'major',
      mechanism: 'OATP1B1 inhibition doubles rosuvastatin exposure',
      clinicalEffect: 'Increased myopathy risk',
      management: 'Avoid combination; use fenofibrate if fibrate required',
    },
    {
      drug: 'Lopinavir/ritonavir',
      severity: 'major',
      mechanism: 'OATP1B1 and BCRP inhibition',
      clinicalEffect: '2-fold increase in rosuvastatin',
      management: 'Limit rosuvastatin to 10 mg/day',
    },
    {
      drug: 'Atazanavir/ritonavir',
      severity: 'major',
      mechanism: 'Transporter inhibition',
      clinicalEffect: '3-fold increase in rosuvastatin',
      management: 'Limit rosuvastatin to 10 mg/day',
    },
    {
      drug: 'Warfarin',
      severity: 'moderate',
      mechanism: 'Unknown; may increase warfarin effect',
      clinicalEffect: 'Increased INR and bleeding risk',
      management: 'Monitor INR when starting or changing rosuvastatin dose',
    },
  ],

  monitoring: [
    {
      parameter: 'Lipid panel',
      frequency: 'Baseline, 4-12 weeks, then annually',
      rationale: 'Assess LDL-C response',
      targetRange: '>= 50% LDL-C reduction for high-intensity; < 70 mg/dL for ASCVD',
    },
    {
      parameter: 'Renal function',
      frequency: 'Baseline, periodically',
      rationale: 'Dose adjustment required for CrCl < 30',
    },
    {
      parameter: 'Hepatic function',
      frequency: 'Baseline; thereafter only if symptoms',
      rationale: 'Monitor for hepatotoxicity',
    },
    {
      parameter: 'Urinalysis',
      frequency: 'Consider with doses > 20 mg',
      rationale: 'Monitor for proteinuria (usually transient)',
    },
  ],

  counselingPoints: [
    {
      topic: 'Purpose',
      instruction: 'This medication lowers cholesterol to protect against heart attacks and strokes. Take it even if you feel well.',
      importance: 'critical',
    },
    {
      topic: 'Dosing',
      instruction: 'Take once daily at any time, with or without food. Be consistent with timing.',
      importance: 'important',
    },
    {
      topic: 'Muscle symptoms',
      instruction: 'Report unexplained muscle pain, tenderness, or weakness promptly. Stop and call your doctor if severe.',
      importance: 'critical',
    },
    {
      topic: 'Pregnancy',
      instruction: 'Do not take if pregnant or planning pregnancy. Use contraception while on this medication.',
      importance: 'critical',
    },
    {
      topic: 'Drug interactions',
      instruction: 'Tell all healthcare providers you take rosuvastatin. Some medications require dose adjustments.',
      importance: 'important',
    },
    {
      topic: 'Ethnicity consideration',
      instruction: 'If you are of Asian descent, your doctor may prescribe a lower dose that is just as effective for you.',
      importance: 'helpful',
    },
  ],

  crossReferences: [
    { targetId: 'drug-class-statins', targetType: 'topic', relationship: 'parent', label: 'Statin Drug Class' },
    { targetId: 'medication-atorvastatin', targetType: 'topic', relationship: 'sibling', label: 'Atorvastatin' },
    { targetId: 'condition-hyperlipidemia', targetType: 'condition', relationship: 'related', label: 'Hyperlipidemia' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['pharmacology', 'therapeutics', 'lipid management'],
    keywords: ['statin', 'cholesterol', 'LDL', 'Crestor', 'cardiovascular prevention'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pharmacology'],
    },
  },

  citations: [
    {
      id: 'crestor-pi',
      type: 'website',
      title: 'Crestor (rosuvastatin) Prescribing Information',
      source: 'AstraZeneca',
    },
    {
      id: 'jupiter-trial',
      type: 'article',
      title: 'Rosuvastatin to Prevent Vascular Events in Men and Women with Elevated C-Reactive Protein',
      source: 'New England Journal of Medicine',
    },
  ],

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

// Export all statin medications
export const statins = {
  classOverview: statinClassOverview,
  atorvastatin,
  rosuvastatin,
};

export default statins;
