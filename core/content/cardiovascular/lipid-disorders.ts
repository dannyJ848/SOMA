/**
 * Lipid Disorders - Comprehensive Educational Content
 *
 * Covers cholesterol metabolism, dyslipidemia, cardiovascular risk,
 statin therapy, and evidence-based prevention strategies.
 */

import { EducationalContent } from '../types';

export const lipidDisordersContent: EducationalContent = {
  id: 'topic-lipid-disorders',
  type: 'topic',
  name: 'Lipid Disorders',
  alternateNames: ['Dyslipidemia', 'Hyperlipidemia', 'High Cholesterol'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'Cholesterol is a fat-like substance your body needs, but too much of the wrong kind can build up in your arteries and cause heart attacks and strokes. Managing cholesterol involves healthy eating, exercise, and sometimes medications.',
      explanation: `## What Is Cholesterol?

Cholesterol is a waxy, fat-like substance found in all cells of your body. Your body needs some cholesterol to work properly, but too much can be harmful.

**Two Sources of Cholesterol:**
1. **Your liver:** Makes all the cholesterol your body needs
2. **Food:** Found in animal products (meat, dairy, eggs)

## Types of Cholesterol

Cholesterol travels through your blood in packages called lipoproteins. The main types are:

**LDL (Bad Cholesterol):**
- Stands for "Low-Density Lipoprotein"
- "L" for "Lousy"
- Builds up in artery walls
- Forms plaque that clogs arteries
- Higher levels are bad

**HDL (Good Cholesterol):**
- Stands for "High-Density Lipoprotein"
- "H" for "Healthy"
- Removes cholesterol from arteries
- Takes it back to liver
- Higher levels are good

**Triglycerides:**
- Another type of fat in blood
- Store excess energy from food
- High levels are bad
- Increased by:
  - Being overweight
  - Eating too many carbs/sugar
  - Drinking alcohol
  - Not exercising

## Why It Matters

When there's too much LDL cholesterol in your blood, it can build up in the walls of your arteries. This is called plaque. Over time:

1. Plaque grows and narrows arteries
2. Less blood flows through
3. If plaque ruptures, blood clots form
4. Blood clots can block arteries completely
5. Result: Heart attack or stroke

## Understanding Your Numbers

**Cholesterol Test (Lipid Panel):**

| Type | Good Level |
|------|------------|
| Total Cholesterol | <200 mg/dL |
| LDL (Bad) | <100 mg/dL |
| HDL (Good) | >40 mg/dL (men), >50 mg/dL (women) |
| Triglycerides | <150 mg/dL |

**Risk Categories for LDL:**
- Optimal: <100 mg/dL
- Near optimal: 100-129 mg/dL
- Borderline high: 130-159 mg/dL
- High: 160-189 mg/dL
- Very high: ≥190 mg/dL

## Who Should Be Tested?

**All Adults:**
- Get tested every 4-6 years
- More often if you have risk factors

**Children:**
- Once between ages 9-11
- Again between ages 17-21

## Risk Factors for High Cholesterol

**Things You Can't Change:**
- Family history (genes)
- Age (cholesterol rises with age)
- Gender (women's risk rises after menopause)

**Things You CAN Change:**
- Diet high in saturated fat
- Diet high in trans fat
- Being overweight
- Not exercising enough
- Smoking

## Lowering Cholesterol

**Diet Changes:**

**Eat Less:**
- Saturated fats (red meat, full-fat dairy)
- Trans fats (processed foods, fried foods)
- Cholesterol (organ meats, egg yolks)
- Refined carbohydrates and sugars

**Eat More:**
- Fruits and vegetables
- Whole grains
- Fish (especially fatty fish like salmon)
- Nuts
- Olive oil
- Foods with plant sterols

**Lifestyle Changes:**
- Exercise regularly (30 minutes most days)
- Lose weight if overweight
- Quit smoking
- Limit alcohol

**Medications:**
When lifestyle changes aren't enough:
- **Statins:** Most common, very effective
- **Ezetimibe:** Blocks cholesterol absorption
- **PCSK9 inhibitors:** Injected, very powerful
- **Bile acid sequestrants:** Less commonly used

## Statins: The Main Treatment

**What They Do:**
- Lower LDL cholesterol 25-50%
- Stabilize plaque
- Reduce inflammation in arteries
- Prevent heart attacks and strokes

**Who Should Take Statins:**
- People who already had heart attack or stroke
- People with very high LDL (>190 mg/dL)
- People with diabetes + risk factors
- People with high calculated risk

**Common Statins:**
- Atorvastatin (Lipitor)
- Rosuvastatin (Crestor)
- Simvastatin (Zocor)
- Pravastatin (Pravachol)

**Side Effects:**
- Most people tolerate them well
- Muscle aches (uncommon)
- Liver problems (rare)
- Increased blood sugar (small risk)

## Prevention

**Best Strategies:**
1. Know your numbers
2. Eat a heart-healthy diet (Mediterranean style)
3. Exercise regularly
4. Maintain healthy weight
5. Don't smoke
6. Limit alcohol
7. Take prescribed medications

Remember: High cholesterol has no symptoms. The only way to know is to get tested!`,
      keyTerms: [
        { term: 'cholesterol', definition: 'A waxy fat-like substance in your blood that your body needs' },
        { term: 'LDL', definition: 'Low-density lipoprotein; "bad" cholesterol that builds up in arteries' },
        { term: 'HDL', definition: 'High-density lipoprotein; "good" cholesterol that removes bad cholesterol' },
        { term: 'triglycerides', definition: 'A type of fat that stores excess energy' },
        { term: 'plaque', definition: 'Buildup of cholesterol in artery walls' },
        { term: 'statin', definition: 'A medicine that lowers cholesterol' },
        { term: 'lipid panel', definition: 'A blood test that measures cholesterol levels' },
      ],
      analogies: [
        'LDL is like garbage trucks dropping off trash in your arteries.',
        'HDL is like street sweepers cleaning up the trash.',
        'Your arteries are like pipes - plaque buildup is like rust that clogs them.',
      ],
      examples: [
        'Eating oatmeal with nuts for breakfast can help lower LDL cholesterol.',
        'Walking 30 minutes a day, 5 days a week can raise HDL and lower LDL.',
        'If your LDL is 160 mg/dL, you have high cholesterol and may need treatment.',
        'Salmon, walnuts, and olive oil contain healthy fats that improve cholesterol.',
      ],
      patientCounselingPoints: [
        'Get your cholesterol checked every 4-6 years',
        'Eat more fruits, vegetables, and whole grains',
        'Choose lean proteins and low-fat dairy',
        'Limit red meat to once a week or less',
        'Avoid trans fats (check labels for "partially hydrogenated oils")',
        'Exercise at least 30 minutes most days',
        'Take statins at bedtime for best effect',
        'Report muscle aches to your doctor',
      ],
    },
    2: {
      level: 2,
      summary: 'Dyslipidemia involves abnormalities in lipid metabolism including elevated LDL (atherogenic), low HDL (protective), and elevated triglycerides, with ASCVD risk determining treatment intensity including lifestyle modification and statin-based therapy with or without ezetimibe or PCSK9 inhibitors.',
      explanation: `## Lipid Metabolism Overview

**Lipoproteins:** Particles that transport lipids in blood

| Lipoprotein | Origin | Main Lipid | Function |
|-------------|--------|------------|----------|
| Chylomicron | Intestine | Triglyceride | Transport dietary fat |
| VLDL | Liver | Triglyceride | Transport endogenous fat |
| IDL | VLDL catabolism | TG + Cholesterol | Precursor to LDL |
| LDL | IDL catabolism | Cholesterol | Deliver cholesterol to tissues |
| HDL | Liver/intestine | Cholesterol | Reverse cholesterol transport |

**Key Concepts:**
- LDL deposits cholesterol in arterial walls (atherogenic)
- HDL removes cholesterol from arteries (protective)
- Triglycerides reflect VLDL, associated with CV risk

## Lipid Classification

**Primary Lipid Abnormalities:**

**Elevated LDL (Hypercholesterolemia):**
- Most atherogenic lipid disorder
- Caused by: Diet, genetics (FH), hypothyroidism, nephrotic syndrome
- Risk factor: CAD, PAD, stroke

**Low HDL:**
- Associated with increased CV risk
- Caused by: Genetics, metabolic syndrome, smoking, TG >200
- Difficult to treat (exercise most effective)

**Elevated Triglycerides:**
- Independent risk factor (especially >500 mg/dL)
- Caused by: Obesity, diabetes, alcohol, medications, genetics
- Very high levels (>500) risk of pancreatitis

**Mixed Dyslipidemia:**
- Elevated LDL + low HDL + elevated TG
- Common in metabolic syndrome, diabetes

## Risk Assessment

**2018 ACC/AHA Cholesterol Guideline:**

**Age Groups:**
- Adults 20-39: Assessment every 4-6 years
- Adults 40-75: Assessment and 10-year risk calculation

**ASCVD Risk Calculator:**
- Estimates 10-year risk of MI or stroke
- Inputs: Age, sex, race, SBP, treatment, smoking, total cholesterol, HDL, diabetes
- Categories:
  - Low risk: <5%
  - Borderline risk: 5-7.5%
  - Intermediate risk: 7.5-20%
  - High risk: ≥20%

**Risk-Enhancing Factors:**
- Family history of premature ASCVD
- Elevated Lp(a) (>50 mg/dL)
- hs-CRP >2 mg/L
- CKD (eGFR <60)
- Microalbuminuria
- Men >45 or women >55 with chronic inflammatory conditions

## Statin Therapy

**Statin Benefit Groups:**

**Group 1 (Very High Risk):**
- Clinical ASCVD (CAD, PAD, stroke)
- LDL ≥190 mg/dL
- Diabetes 40-75 years

**Group 2 (Intermediate Risk):**
- 10-year risk ≥7.5%
- Consider risk-enhancing factors

**Intensity:**

| Intensity | Examples | LDL Reduction | When to Use |
|-----------|----------|---------------|-------------|
| High | Atorvastatin 40-80 mg | ≥50% | ASCVD, very high risk |
| Moderate | Atorvastatin 10-20 mg | 30-50% | Diabetes, intermediate risk |
| Low | Simvastatin 10 mg | <30% | Rarely used |

**Statin Selection:**
- High-intensity preferred for ASCVD <75 years
- Moderate-intensity for:
  - ASCVD >75 years
  - Diabetes
  - Intermediate risk

## Non-Statin Therapy

**Ezetimibe:**
- Inhibits intestinal cholesterol absorption
- LDL reduction: ~15-20%
- IMROVE-IT: Added benefit when added to statin in post-ACS
- Generally well-tolerated

**PCSK9 Inhibitors:**
- Monoclonal antibodies (evolocumab, alirocumab)
- LDL reduction: 50-60%
- FOURIER and ODYSSEY OUTCOMES: Reduced CV events
- Expensive, injectable (every 2-4 weeks)
- Indicated for:
  - ASCVD with LDL ≥70 despite max statin
  - HeFH with LDL ≥100 despite max statin
  - LDL ≥190 mg/dL

**Bempedoic Acid:**
- Inhibits cholesterol synthesis upstream of statins
- LDL reduction: ~15-25%
- Oral, daily
- Used when statins not tolerated

**Inclisiran:**
- siRNA targeting PCSK9
- LDL reduction: ~50%
- Subcutaneous every 6 months
- Approved for ASCVD, HeFH

**Bile Acid Sequestrants:**
- Cholestyramine, colestipol, colesevelam
- LDL reduction: 15-30%
- GI side effects common
- Drug interactions

## Familial Hypercholesterolemia (FH)

**Heterozygous FH:**
- LDL 160-400 mg/dL
- Prevalence: 1 in 250
- Autosomal dominant (LDL receptor mutation)
- High CAD risk (untreated: 50% MI by age 60)

**Homozygous FH:**
- LDL >400-600 mg/dL
- Prevalence: 1 in 1 million
- CAD in childhood
- Requires: Max statin + ezetimibe + PCSK9i + possibly lomitapide/evinacumab`,
      keyTerms: [
        { term: 'lipoprotein', definition: 'Particle that transports lipids (cholesterol, TG) through blood' },
        { term: 'ASCVD', definition: 'Atherosclerotic cardiovascular disease; CAD, stroke, PAD' },
        { term: 'familial hypercholesterolemia', definition: 'Genetic disorder causing very high LDL from birth' },
        { term: 'PCSK9 inhibitor', definition: 'Monoclonal antibody that dramatically lowers LDL' },
        { term: 'ezetimibe', definition: 'Drug that blocks intestinal cholesterol absorption' },
        { term: 'lipoprotein(a)', definition: 'Genetic variant of LDL; independent risk factor' },
        { term: 'reverse cholesterol transport', definition: 'HDL removing cholesterol from tissues back to liver' },
      ],
      analogies: [
        'FH is like having a factory that can\'t recycle garbage - it just keeps piling up.',
      ],
    },
    3: {
      level: 3,
      summary: 'Lipid disorders result from genetic and environmental factors causing atherogenic dyslipidemia characterized by elevated LDL, low HDL, and elevated triglycerides. The 2018 ACC/AHA guidelines emphasize ASCVD risk assessment, statin therapy as first-line, and add-on agents for high-risk patients not at goal.',
      explanation: `## Lipoprotein Metabolism

### Exogenous Pathway (Dietary)
1. Dietary fat → intestinal chylomicrons
2. Chylomicrons transport TG to peripheral tissues (LPL-mediated)
3. Chylomicron remnants → liver uptake
4. Hours after meal, chylomicrons cleared

### Endogenous Pathway (Hepatic)
1. Liver synthesizes VLDL (containing TG, cholesterol)
2. LPL hydrolyzes VLDL TG → IDL
3. IDL converted to LDL (via hepatic lipase)
4. LDL delivers cholesterol to tissues via LDL receptor
5. LDL taken up by liver (clearance) or artery wall (atherosclerosis)

### Reverse Cholesterol Transport
1. Cholesterol efflux from peripheral cells → HDL
2. LCAT esterifies cholesterol in HDL
3. HDL transports cholesterol to liver (via SR-B1, CETP)
4. Liver excretes cholesterol in bile

## Pathophysiology of Atherosclerosis

**LDL Entry and Modification:**
1. LDL enters arterial intima
2. Oxidative modification → OxLDL
3. OxLDL taken up by macrophages → foam cells
4. Foam cells form fatty streak
5. Inflammatory cascade → plaque progression

**Vulnerable Plaque Characteristics:**
- Large lipid core
- Thin fibrous cap
- Macrophage infiltration
- Prone to rupture → thrombosis

## Secondary Causes of Dyslipidemia

| Cause | LDL | TG | HDL |
|-------|-----|-------|-----|
| Hypothyroidism | ↑ | ↑ | ↓ |
| Nephrotic syndrome | ↑↑ | - | - |
| Diabetes | - | ↑ | ↓ |
| Obesity | - | ↑ | ↓ |
| Alcohol | - | ↑ | ↑ |
| Estrogen | ↓ | ↑ | ↑ |
| Anabolic steroids | ↑ | ↓ | ↓ |
| Protease inhibitors | ↑ | ↑ | ↓ |

## Familial Hypercholesterolemia

**Genetics:**
- LDL receptor mutations (most common)
- ApoB mutations
- PCSK9 gain-of-function

**Heterozygous FH:**
- LDL: 160-400 mg/dL
- Tendon xanthomas (Achilles)
- Premature CAD
- First-degree relatives: 50% affected

**Homozygous FH:**
- LDL: 400-1000 mg/dL
- Cutaneous xanthomas
- CAD in childhood
- May need LDL apheresis, liver transplant

**Diagnosis:**
- Dutch Lipid Clinic Network Criteria
- LDL >190 + family history
- Genetic testing (cascade screening)

## 2018 ACC/AHA Guideline Highlights

**Statin Benefit Groups (Revised):**

**Group 1: Clinical ASCVD**
- High-intensity statin if age <75
- Moderate-intensity if age >75

**Group 2: LDL ≥190 mg/dL**
- High-intensity statin regardless of risk calculation

**Group 3: Diabetes 40-75 years**
- Moderate-intensity statin
- High-intensity if 10-year risk ≥7.5%

**Group 4: 10-year ASCVD risk ≥7.5%**
- Moderate-intensity statin
- Consider risk-enhancing factors

**LDL Lowering Goals:**
- Very high risk (ASCVD + risk enhancers): LDL <70 (≥50% reduction)
- High risk (ASCVD): LDL <70 (≥50% reduction)
- Moderate risk: LDL <100 (≥30% reduction)

## Non-Statin Therapy

**Ezetimibe:**
- NPC1L1 inhibition → decreased intestinal absorption
- LDL reduction: 15-20%
- IMPROVE-IT: Post-ACS, added to statin → 6.4% RRR in CV events
- Well-tolerated, minimal drug interactions

**PCSK9 Inhibitors:**

**Mechanism:**
- Monoclonal antibodies bind PCSK9
- Prevent LDL receptor degradation
- Increased LDL clearance

**Evidence:**
- FOURIER (evolocumab): 15% RRR in MACE
- ODYSSEY OUTCOMES (alirocumab): 15% RRR in MACE
- LDL reduction: 50-60%

**Indications:**
- ASCVD with LDL ≥70 on max tolerated statin
- HeFH with LDL ≥100 on max tolerated statin
- LDL ≥190 (especially FH)

**Bempedoic Acid:**
- ACLY: LDL reduction + CV benefit
- Inhibits ATP citrate lyase (upstream of HMG-CoA)
- Useful for statin-intolerant patients

**Inclisiran:**
- ORION trials: Significant LDL reduction
- siRNA targeting PCSK9 mRNA
- Subcutaneous every 6 months
- No injection site reactions (vs PCSK9i)

## Triglyceride Management

**Very High TG (>500 mg/dL):**
- Primary concern: Pancreatitis risk
- Treatment: Fibrates, omega-3 (prescription), niacin
- Avoid estrogen, alcohol, high-carb diet

**Moderately Elevated TG (150-499):**
- Secondary concern: ASCVD risk
- Treatment: Statin first (addresses LDL, remnant cholesterol)
- Consider adding:
  - EPA (icosapent ethyl) if ASCVD/diabetes + TG 135-499 (REDUCE-IT)
  - Fibrates if high TG + low HDL

## Lp(a) Management

**Characteristics:**
- Genetically determined
- Not affected by lifestyle
- Independently atherogenic and thrombogenic

**Risk Threshold:**
- >50 mg/dL (or >125 nmol/L) high risk
- Levels >100-200 mg/dL very high risk

**Management:**
- No approved Lp(a)-lowering therapies
- More aggressive LDL lowering
- Consider:
  - Niacin (reduces Lp(a) 20-30%)
  - PCSK9 inhibitors (reduce Lp(a) 25-30%)
  - Lipoprotein apheresis (very high Lp(a))

**Emerging:**
- Pelacarsen (antisense): Phase 3 ongoing
- Olpasiran (siRNA): Phase 3 ongoing`,
      keyTerms: [
        { term: 'foam cell', definition: 'Macrophage that has engulfed OxLDL; key component of fatty streaks' },
        { term: 'tendon xanthoma', definition: 'Cholesterol deposition in tendons (Achilles); pathognomonic for FH' },
        { term: 'NPC1L1', definition: 'Niemann-Pick C1-Like 1 protein; target of ezetimibe' },
        { term: 'IMPROVE-IT', definition: 'Trial showing ezetimibe benefit added to statin in post-ACS' },
        { term: 'FOURIER trial', definition: 'Evolocumab (PCSK9i) reduced MACE 15% in ASCVD' },
        { term: 'REDUCE-IT', definition: 'Icosapent ethyl (EPA) reduced CV events in high-risk patients' },
        { term: 'Lp(a)', definition: 'Lipoprotein(a); genetic, independent risk factor, difficult to treat' },
      ],
      clinicalNotes: 'Screen all adults with lipid panel every 4-6 years. For ASCVD, start high-intensity statin <75, moderate >75. Add ezetimibe if LDL ≥70 on statin. Consider PCSK9i if LDL ≥70 on statin + ezetimibe. FH requires cascade screening of first-degree relatives. Lp(a) measured once in lifetime to identify high-risk patients.',
    },
    4: {
      level: 4,
      summary: 'Advanced lipid management integrates comprehensive ASCVD risk assessment including risk-enhancing factors and coronary artery calcium scoring, high-intensity statin therapy as cornerstone, evidence-based use of non-statin agents, and special considerations for familial hypercholesterolemia, statin intolerance, and hypertriglyceridemia.',
      explanation: `## Risk Assessment Advances

### Coronary Artery Calcium (CAC) Scoring

**Indications:**
- Borderline/intermediate risk (5-20% 10-year risk)
- Decisional ambiguity about statin therapy

**Scoring (Agatston Units):**
| Score | Risk | Management |
|-------|------|-------------|
| 0 | Very low | May defer statin |
| 1-99 | Low | Consider statin |
| 100-399 | Moderate | Statin recommended |
| ≥400 | High | Statin definitely indicated |

**Evidence:**
- MESA, Framingham: CAC predicts events independent of risk factors
- CAC=0 in patients <50: Low short-term risk
- CAC >300: Risk equivalent to known CAD

**Special Populations:**
- Women: CAC more predictive than risk factors
- South Asians: Higher risk at lower scores

**Limitations:**
- Radiation exposure (minimal)
- Cost (though decreasing)
- Not for patients already on statins
- Not for young adults <40

### Risk-Enhancing Factors

**Lp(a):**
- Measured once in lifetime
- >50 mg/dL (or >125 nmol/L) = high risk
- May push toward statin in intermediate risk
- No specific Lp(a) lowering therapy proven

**hs-CRP:**
- >2 mg/L: Increased risk
- >3 mg/L: Consider statin in intermediate risk
- JUPITER trial: Rosuvastatin benefit in elevated hs-CRP

**Family History:**
- Premature CAD in first-degree relative (<55 male, <65 female)
- Doubles personal risk independent of risk score
- Consider statin at lower risk threshold

**Metabolic Syndrome:**
- ≥3 of: Waist >40M/35F, TG ≥150, BP ≥130/85, Glucose ≥100, HDL <40M/50F
- Increases ASCVD risk

## Statin Intolerance

**Definition:**
- Inability to tolerate ≥2 different statins
- Symptoms: SAMS (statin-associated muscle symptoms)
- Unacceptable side effects that resolve with discontinuation

**True SAMS:**
- Muscle symptoms + CK elevation >4× ULN
- Rare (<1% in clinical trials)
- Risk factors: Age >80, female, Asian, small body, polypharmacy

**Management Strategies:**

1. **Confirm discontinuation-rechallenge**
2. **Switch to different statin** (different metabolism)
   - Rosuvastatin (CYP2C9)
   - Pravastatin (minimal CYP)
   - Fluvastatin (CYP2C9)
3. **Lowest effective dose**
4. **Alternate day dosing** (especially long-acting statins)
5. **Non-statin alternatives:**
   - Ezetimibe
   - Bempedoic acid
   - PCSK9 inhibitors
   - Inclisiran

**GAUSS-3 Trial:**
- Ezetimibe and evolocumab effective in statin-intolerant
- Bempedoic acid + ezetimibe effective
- Many "statin-intolerant" tolerate rechallenge

## Familial Hypercholesterolemia

### Diagnosis

**Dutch Lipid Clinic Network Criteria:**

| Criteria | Points |
|----------|--------|
| Family history of premature CAD | 1 |
| Family history of LDL >190 | 1 |
| Patient with premature CAD | 2 |
| Patient with peripheral arterial disease | 1 |
| Tendon xanthomas | 6 |
| Arcus corneae before age 45 | 4 |
| LDL >190 | 1 |
| LDL >250 (or >330 with risk factors) | 2 |
| LDL >400 | 3 |
| LDL >500 with risk factors | 8 |
| DNA mutation | 8 |

**Score:**
- >8: Definite FH
- 6-8: Probable FH
- 3-5: Possible FH

**Cascade Screening:**
- Index case → test all first-degree relatives
- Each positive → test their first-degree relatives
- Most efficient FH detection strategy

### Treatment

**Heterozygous FH:**
- High-intensity statin + ezetimibe
- Add PCSK9 inhibitor if LDL ≥100
- Goal: LDL <100 (or <70 with ASCVD)

**Homozygous FH:**
- Max statin + ezetimibe + PCSK9i
- Consider:
  - Lomitapide (MTP inhibitor)
  - Evinacumab (ANGPTL3 inhibitor)
  - LDL apheresis
  - Liver transplant

## PCSK9 Inhibitors

**Mechanism:**
- Monoclonal antibodies bind circulating PCSK9
- Prevent PCSK9-mediated LDL receptor degradation
- Increased hepatic LDL clearance

**Agents:**
- Evolocumab (Repatha): 140 mg SC q2weeks or 420 mg monthly
- Alirocumab (Praluent): 75-150 mg SC q2weeks

**Evidence:**
- FOURIER (evolocumab): 15% RRR, LDL 30 mg/dL average
- ODYSSEY OUTCOMES (alirocumab): 15% RRR
- Benefit independent of baseline LDL
- Ongoing reduction with continued therapy

**Safety:**
- Well-tolerated
- Injection site reactions (some patients)
- No neurocognitive effects in trials

## Triglyceride Management

**REDUCE-IT Trial:**
- Icosapent ethyl (pure EPA) 4 g/day
- Patients: ASCVD or diabetes + TG 135-499
- Results: 25% RRR in MACE
- Benefit independent of TG reduction
- Possible pleiotropic effects

**STRENGTH Trial:**
- Omega-3 carboxylic acids (EPA + DHA)
- Stopped early for futility
- Different formulation than REDUCE-IT

**Current Recommendations:**
- Prescription EPA (icosapent ethyl) for:
  - ASCVD or diabetes + TG 135-499 + on statin
- OTC fish oil: Not recommended (insufficient evidence)

**Severe Hypertriglyceridemia (>500 mg/dL):**
- Pancreatitis risk
- Treatment:
  - Fibrate (fenofibrate, gemfibrozil)
  - Prescription omega-3 (EPA)
  - Niacin
  - Avoid: Estrogen, alcohol, high-carb diet`,
      keyTerms: [
        { term: 'CAC scoring', definition: 'Coronary artery calcium CT scan; Agatston score predicts ASCVD risk' },
        { term: 'Agatston units', definition: 'Calcium score quantifying coronary artery calcification' },
        { term: 'SAMS', definition: 'Statin-associated muscle symptoms; muscle pain, weakness' },
        { term: 'GAUSS-3', definition: 'Trial of non-statin therapies in statin-intolerant patients' },
        { term: 'cascade screening', definition: 'Testing relatives of index case with FH' },
        { term: 'icosapent ethyl', definition: 'Prescription EPA; reduced CV events in REDUCE-IT' },
        { term: 'lomitapide', definition: 'MTP inhibitor for homozygous FH' },
      ],
      clinicalNotes: 'CAC scoring useful for intermediate risk patients where statin decision uncertain. CAC=0 may defer statin in low-intermediate risk. For statin intolerance, confirm by rechallenge; many tolerate alternative statin. Cascade screening for FH is cost-effective. REDUCE-IT established icosapent ethyl for ASCVD/diabetes with TG 135-499 on statin.',
    },
    5: {
      level: 5,
      summary: 'Contemporary lipid management integrates lower LDL thresholds (<70 for very high risk), coronary artery calcium scoring for risk refinement, combination therapy including PCSK9 inhibitors and bempedoic acid, emerging therapies targeting Lp(a) and triglycerides, and precision approaches for statin intolerance and familial hypercholesterolemia.',
      explanation: `## 2022 ACC Expert Decision Pathway

### Very High-Risk Definition

**Criteria (≥2 required):**
- Multiple major ASCVD events
- ASCVD + multiple high-risk conditions:
  - Diabetes
  - Hypertension
  - LDL ≥100 despite statin
  - Persistent smoking
  - CKD (eGFR <60)
  - HF
  - Family history of premature ASCVD
- ASCVD + heterozygous FH
- ASCVD + history of CABG or PCI

**LDL Goals:**
- Very high risk: LDL <55 mg/dL (≥50% reduction)
- High risk: LDL <70 mg/dL (≥50% reduction)

**Severe Primary Hypercholesterolemia (LDL ≥190):**
- LDL <100 mg/dL
- LDL <70 mg/dL if very high risk

### Non-Statin Therapy Algorithm

**Step 1:** Max tolerated statin
**Step 2:** Add ezetimibe
**Step 3:** Consider PCSK9 inhibitor if:
- ASCVD + LDL ≥70 on statin + ezetimibe
- HeFH + LDL ≥100 on max tolerated therapy
- LDL ≥190

**Consider Adding PCSK9i Earlier:**
- Very high-risk ASCVD
- Recurrent events
- Progressive atherosclerosis on imaging

## PCSK9 Inhibitor Updates

**ODYSSEY OUTCOMES Subanalyses:**
- Benefit regardless of baseline LDL
- Benefit regardless of Lp(a) level
- Greater benefit with more recent ACS

**FOURIER Open Label Extension:**
- Continued LDL reduction with ongoing therapy
- No safety signal with longer exposure
- No attenuation of benefit

**Real-World Evidence:**
- Lower LDL than trials (often <20 mg/dL)
- High persistence rates (unlike other injectables)
- Cost remains barrier

**Inclisiran:**
- ORION-10, ORION-9: Phase 3 positive
- Subcutaneous every 6 months
- LDL reduction ~50%
- Administered at office visits (improves adherence)

## Emerging Therapies

### Lp(a) Lowering

**Pelacarsen (Antisense):**
- ORION-9 phase 3: 80% Lp(a) reduction
- Primary endpoint: CV outcomes (Lp(a) HORIZON)
- Subcutaneous every 4 weeks

**Olpasiran (siRNA):**
- OCEAN(a)-OUTCOMERS phase 3 ongoing
- >90% Lp(a) reduction
- Subcutaneous every 12-24 weeks

### Bempedoic Acid

**CLEAR Outcomes Trial (2023):**
- Statin-intolerant patients
- 13% RRR in MACE
- LDL reduction: ~21%
- Safety: No increase in muscle symptoms
- Gout increased (known effect)

**Role:**
- Statin-intolerant patients
- Add-on to statin for additional LDL lowering
- Fixed-dose combination with ezetimibe available

### Mipomersen (Kynamro)
- Antisense to apoB
- LDL reduction: 25-47%
- Indication: Homozygous FH
- Injection site reactions common
- Hepatic steatosis concern

### Evinacumab (Evkeeza)
- ANGPTL3 inhibitor
- LDL reduction: ~50%
- Indication: Homozygous FH
- IV infusion monthly

## Triglyceride Management

**REDUCE-IT Reanalysis:**
- Benefit independent of TG reduction
- Possible EPA-specific effects
- Benefit regardless of baseline TG (135-499 range)

**STRENGTH Trial (Negative):**
- EPA + DHA combination
- Stopped early for futility
- Different formulation than REDUCE-IT

**PROMINENT Trial (Pemafibrate):**
- Selective PPAR-α modulator
- TG reduction: 26-30%
- No CV benefit (actually trend to harm)
- Triglyceride lowering alone insufficient

**Current Recommendations:**
- Prescription EPA (icosapent ethyl) for:
  - ASCVD or diabetes
  - TG 135-499 on statin
  - Consider other causes of TG elevation first

## Special Populations

### Older Adults (>75)

**Rationale for Treatment:**
- Absolute benefit higher (higher baseline risk)
- Statins well-tolerated
- Under-treated in practice

**Approach:**
- Moderate-intensity statin (lower side effects)
- Reassess goals based on frailty, life expectancy
- Consider CAC scoring if decision uncertain

### Women

**Risk Assessment:**
- Underestimated by risk calculators
- Pregnancy considerations
- Menopause: Risk increases

**Statin Safety in Pregnancy:**
- Category X (contraindicated)
- Hold statins when planning pregnancy
- Resume postpartum if breastfeeding (most considered safe)

### Asian Americans

**Statin Dosing:**
- May need lower doses (higher blood levels)
- Especially rosuvastatin
- Start low, go slow

### South Asians
- Higher ASCVD risk at lower BMI
- Earlier statin consideration
- Aggressive LDL goals

## Statin Safety

**Liver:**
- Routine monitoring not required (FDA 2012)
- Check baseline LFTs
- Repeat only if symptoms

**Muscle:**
- Routine CK monitoring not required
- Check CK if muscle symptoms
- Myopathy risk: <0.1%

**Diabetes:**
- Small increase in risk (0.1% absolute)
- Net benefit favors statin
- Monitor glucose in at-risk patients

**Cognition:**
- No convincing evidence of impairment
- FDA reviewed and found no causal link
- HPS-BETH trial: No cognitive effect

**Hemorrhagic Stroke:**
- SPARCL trial signal with atorvastatin
- Benefit outweighs risk in most patients
- Consider in those with prior hemorrhagic stroke

## Global Perspectives

**WHO HEARTS:**
- Simple treatment protocols
- Task-shifting to non-physicians
- Generic statins widely available
- Focus on moderate-intensity statin

**Cost Barriers:**
- PCSK9 inhibitors increasingly available
- Biosimilars reducing costs
- Tiered formularies improving access

## Future Directions

1. **Gene Editing:**
   - CRISPR-Cas9 for PCSK9 (early trials)
   - Potential for one-time treatment

2. **Vaccines:**
   - PCSK9 vaccine in development
   - Antibodies against PCSK9

3. **RNA Therapeutics:**
   - Inclisiran already approved
   - Emerging Lp(a) siRNA therapies

4. **Artificial Intelligence:**
   - Risk prediction enhancement
   - Personalized therapy selection
   - Adherence monitoring

5. **Polypill Strategies:**
   - Statin + BP med + aspirin
   - TIPS-3: Reduced CV events in intermediate risk`,
      keyTerms: [
        { term: 'very high risk', definition: 'ASCVD with multiple risk enhancers; LDL goal <55' },
        { term: 'CLEAR Outcomes', definition: 'Bempedoic acid trial in statin-intolerant; 13% RRR' },
        { term: 'ORION-9', definition: 'Inclisiran trial; ~50% LDL reduction, every 6 months' },
        { term: 'Lp(a) HORIZON', definition: 'Pelacarsen phase 3 outcomes trial' },
        { term: 'OCEAN(a)', definition: 'Olpasiran phase 3 outcomes trial for Lp(a)' },
        { term: 'pemafibrate', definition: 'Selective PPAR-α modulator; PROMINENT trial negative for CV benefit' },
        { term: 'polypill', definition: 'Fixed-dose combination of statin, antihypertensive, aspirin' },
      ],
      clinicalNotes: `2022 ACC pathway defines very high-risk (LDL <55) vs high-risk (LDL <70). For statin-intolerant, CLEAR outcomes supports bempedoic acid efficacy. Inclisiran offers 6-month dosing improving adherence. REDUCE-IT established icosapent ethyl for ASCVD/diabetes with TG 135-499. PROMINENT negative - TG lowering alone insufficient. Emerging Lp(a) therapies (pelacarsen, olpasiran) in phase 3.`,
    },
  },

  media: [
    {
      id: 'lipid-transport',
      type: 'diagram',
      filename: 'lipoprotein-metabolism.svg',
      title: 'Lipoprotein Metabolism Pathways',
      description: 'Exogenous and endogenous lipid transport',
    },
    {
      id: 'atherogenesis',
      type: 'diagram',
      filename: 'atherosclerosis-development.svg',
      title: 'Atherosclerosis Development',
      description: 'From LDL entry to plaque formation',
    },
    {
      id: 'statin-mechanism',
      type: 'diagram',
      filename: 'statin-mechanism-of-action.svg',
      title: 'Statin Mechanism of Action',
      description: 'HMG-CoA reductase inhibition',
    },
  ],

  citations: [
    {
      id: 'acc-aha-cholesterol-2018',
      type: 'article',
      title: '2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Blood Cholesterol',
      authors: ['Grundy SM', 'et al.'],
      source: 'Circulation',
    },
    {
      id: 'acc-pathway-2022',
      type: 'article',
      title: '2022 ACC Expert Consensus Decision Pathway on the Role of Nonstatin Therapies for LDL-Cholesterol Lowering in the Management of Atherosclerotic Cardiovascular Disease Risk',
      authors: ['Lloyd-Jones DM', 'et al.'],
      source: 'Journal of the American College of Cardiology',
    },
    {
      id: 'fourier-trial',
      type: 'article',
      title: 'Evolocumab and Clinical Outcomes',
      authors: ['Sabatine MS', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'reduce-it',
      type: 'article',
      title: 'Icosapent Ethyl for Cardiovascular Prevention',
      authors: ['Bhatt DL', 'et al.'],
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'related', label: 'Coronary Artery Disease' },
    { targetId: 'topic-hypertension', targetType: 'topic', relationship: 'related', label: 'Hypertension' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'preventive medicine', 'internal medicine'],
    keywords: ['cholesterol', 'LDL', 'HDL', 'triglycerides', 'statin', 'PCSK9', 'FH'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default lipidDisordersContent;
