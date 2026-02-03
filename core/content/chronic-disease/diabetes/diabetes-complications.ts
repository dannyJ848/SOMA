/**
 * Diabetes Complications - Chronic Disease Education
 *
 * Comprehensive patient education about acute and chronic complications
 * of diabetes, including prevention and early detection strategies.
 */

import { EducationalContent } from '../../types';

export const DIABETES_COMPLICATIONS: EducationalContent = {
  id: 'chronic-disease-diabetes-complications',
  type: 'condition',
  name: 'Diabetes Complications',
  alternateNames: ['Diabetic complications', 'Diabetes-related problems', 'Chronic diabetes complications', 'Acute diabetes complications'],

  levels: {
    1: {
      level: 1,
      summary: 'Diabetes can cause problems in many parts of the body over time, but keeping your blood sugar, blood pressure, and cholesterol healthy helps prevent most complications.',
      explanation: `**What Are Diabetes Complications?**

Over time, high blood sugar can damage blood vessels and nerves throughout your body. This can cause problems with your heart, eyes, kidneys, feet, and more.

**Why Do Complications Happen?**

Think of high blood sugar like rough water flowing through pipes. Over time, it can wear down and damage the pipes (your blood vessels). High blood pressure and cholesterol make this damage worse.

**Types of Complications:**

*Eye Problems (Retinopathy):*
- Blood vessels in the eyes get damaged
- Can cause vision problems or blindness
- Annual eye exams help catch problems early

*Kidney Problems (Nephropathy):*
- Kidneys get damaged from filtering too much sugar
- Can lead to kidney failure
- Found early with urine tests

*Nerve Problems (Neuropathy):*
- Nerves get damaged, especially in feet and legs
- Can cause tingling, numbness, or pain
- Can make it hard to feel injuries

*Foot Problems:*
- Poor blood flow and nerve damage
- Cuts and sores may not heal well
- Can lead to serious infections

*Heart and Blood Vessel Problems:*
- Higher risk of heart attack and stroke
- Higher risk of high blood pressure
- Poor circulation in legs

**Prevention Checklist:**


✓ Keep blood sugar in target range
✓ Keep blood pressure below 140/90
✓ Keep cholesterol at healthy levels
✓ Don't smoke
✓ Be physically active
✓ Eat healthy foods
✓ Take medications as prescribed
✓ Get regular checkups


**Screening Tests:**

| Test | How Often |
|------|-----------|
| A1C blood test | Every 3-6 months |
| Eye exam | Once a year |
| Foot exam | Every 3-6 months |
| Urine test for kidney | Once a year |
| Cholesterol test | Once a year |

**Warning Signs - When to Call Your Doctor:**

- Vision changes or blurry vision
- Swelling in legs or feet
- Numbness, tingling, or burning in feet
- Cuts or sores that don't heal
- Chest pain or shortness of breath
- Sudden weakness or trouble speaking

**Good News:** Most complications can be prevented or slowed by managing your diabetes well!`,
      keyTerms: [
        { term: 'retinopathy', definition: 'Damage to the blood vessels in the back of the eye' },
        { term: 'nephropathy', definition: 'Kidney damage caused by diabetes' },
        { term: 'neuropathy', definition: 'Nerve damage that can cause pain, numbness, or tingling' },
        { term: 'A1C', definition: 'A blood test showing average blood sugar over 3 months' },
        { term: 'peripheral', definition: 'Related to the outer parts of the body, like hands and feet' },
      ],
      analogies: [
        'Your blood vessels are like garden hoses - high blood sugar is like running water at too high pressure, eventually causing wear and damage.',
        'Nerve damage is like frayed electrical wires - the signals between your body and brain don\'t travel properly.',
      ],
      examples: [
        'Maria noticed her vision was blurry. Her eye doctor found early retinopathy and started treatment to save her sight.',
        'John checks his feet every day for cuts because he has neuropathy and cannot feel small injuries.',
      ],
      patientCounselingPoints: [
        'Most complications have no symptoms at first - that is why regular screening is so important.',
        'The longer you have diabetes, the higher your risk of complications.',
        'Quitting smoking is one of the best things you can do to prevent complications.',
        'Foot care is essential - check your feet daily and never go barefoot.',
        'Keep your appointments even when you feel fine.',
      ],
    },
    2: {
      level: 2,
      summary: 'Chronic diabetes complications result from prolonged hyperglycemia damaging blood vessels and nerves, leading to microvascular (eye, kidney, nerve) and macrovascular (heart, brain, vessels) complications that can be prevented or delayed with good glycemic control.',
      explanation: `**Pathophysiology Overview:**

Chronically elevated blood glucose damages blood vessels through multiple pathways:
- Formation of advanced glycation end-products (AGEs)
- Activation of protein kinase C
- Increased polyol pathway activity
- Oxidative stress and inflammation
- Endothelial dysfunction

**Microvascular Complications:**

*Diabetic Retinopathy:*

Stages:
--------------------------------
Mild Non-proliferative:    Small balloon-like swelling
Moderate Non-proliferative: Blood vessels that nourish
                           retina may swell and distort
Severe Non-proliferative:  Many blood vessels blocked
Proliferative:             New abnormal blood vessels grow
                           (high risk of bleeding)
--------------------------------


*Symptoms:* Often none until late stages; may include:
- Floaters or dark spots
- Blurry or distorted vision
- Difficulty seeing at night
- Sudden vision loss (advanced)

*Diabetic Nephropathy:*
\`\`\'
Progression:
--------------------------------
Stage 1:  Hyperfiltration (increased GFR)
Stage 2:  Silent phase (normal GFR, microalbuminuria)
Stage 3:  Overt nephropathy (macroalbuminuria)
Stage 4:  Decreasing GFR
Stage 5:  Kidney failure (ESRD)
--------------------------------


*Detection:* Urine albumin-to-creatinine ratio (UACR)
- Normal: <30 mg/g
- Microalbuminuria: 30-300 mg/g
- Macroalbuminuria: >300 mg/g

*Diabetic Neuropathy:*

Types of Diabetic Neuropathy:
--------------------------------
Peripheral:        Feet/hands, sensory loss
Autonomic:         Digestion, heart rate, BP
Proximal:          Hips/thighs, pain/weakness
Focal:             Sudden nerve damage (e.g., Bell's palsy)
--------------------------------


*Common Symptoms:*
- Numbness, tingling, burning pain
- Loss of sensation (cannot feel temperature or pain)
- Ulcers from unnoticed injuries
- Digestive problems (gastroparesis)
- Dizziness on standing

**Macrovascular Complications:**

*Coronary Artery Disease:*
- 2-4x increased risk of heart attack
- Often silent (no chest pain)
- Worse outcomes after cardiac events

*Cerebrovascular Disease:*
- 2-3x increased risk of stroke
- Higher risk of vascular dementia
- Poorer recovery after stroke

*Peripheral Arterial Disease:*
- Reduced blood flow to legs
- Claudication (pain with walking)
- Poor wound healing
- Increased amputation risk

**Foot Complications:**

*Pathway to Ulceration:*

Neuropathy + Poor Circulation
           ↓
    Minor trauma (unnoticed)
           ↓
    Non-healing wound
           ↓
        Infection
           ↓
      Ulcer → Gangrene → Amputation


**Acute Complications:**

*Hypoglycemia (Low Blood Sugar):*
- Blood glucose <70 mg/dL
- Causes: Too much insulin, delayed meals, exercise
- Symptoms: Shaking, sweating, confusion, palpitations
- Treatment: 15-20g fast-acting glucose

*Diabetic Ketoacidosis (DKA):*
- More common in Type 1 diabetes
- Causes: Missed insulin, illness, stress
- Symptoms: Nausea, vomiting, abdominal pain, fruity breath, confusion
- Medical emergency - requires hospital care

*Hyperosmolar Hyperglycemic State (HHS):*
- More common in Type 2 diabetes
- Very high blood sugar (>600 mg/dL)
- Severe dehydration, confusion
- Medical emergency`,
      keyTerms: [
        { term: 'AGEs', definition: 'Advanced glycation end-products; harmful compounds formed when sugar binds to proteins' },
        { term: 'microalbuminuria', definition: 'Small amounts of albumin in urine; early sign of kidney damage' },
        { term: 'GFR', definition: 'Glomerular filtration rate; measure of kidney function' },
        { term: 'autonomic neuropathy', definition: 'Nerve damage affecting involuntary body functions' },
        { term: 'peripheral arterial disease', definition: 'Narrowed arteries reducing blood flow to limbs' },
        { term: 'claudication', definition: 'Pain in legs with walking due to poor circulation' },
        { term: 'ESRD', definition: 'End-stage renal disease; kidney failure requiring dialysis or transplant' },
      ],
      analogies: [
        'Microalbuminuria is like a warning light on your car dashboard - it tells you kidney damage is starting before serious problems develop.',
      ],
      clinicalNotes: 'The DCCT trial showed intensive glycemic control reduces microvascular complications by 50-76%. The UKPDS showed similar benefits in Type 2 diabetes. Early intervention is key.',
      patientCounselingPoints: [
        'Control the ABCs: A1C, Blood pressure, Cholesterol',
        'Get an annual dilated eye exam to catch retinopathy early.',
        'Take off your shoes and socks at every medical visit for a foot exam.',
        'Don\'t smoke - it dramatically increases complication risk.',
        'Report vision changes, swelling, or foot problems immediately.',
      ],
    },
    3: {
      level: 3,
      summary: 'Diabetes complications result from chronic hyperglycemia-induced microvascular and macrovascular damage, mediated through advanced glycation end-products, oxidative stress, and inflammation, requiring systematic screening and aggressive risk factor modification.',
      explanation: `**Molecular Pathogenesis:**

*Hyperglycemia-Induced Damage Pathways:*

Hyperglycemia
    ↓
┌---------┬---------┬----------┬---------┐
↓         ↓         ↓          ↓         ↓
AGEs      PKC      Polyol    Hexosamine  ROS
formation activation pathway  pathway    production
    ↓         ↓         ↓          ↓         ↓
└---------┴---------┴----------┴---------┘
                    ↓
    Vascular damage + Nerve injury
                    ↓
              Complications


*Advanced Glycation End-products (AGEs):*
- Non-enzymatic glycation of proteins/lipids
- Cross-linking of collagen (vessel stiffening)
- RAGE receptor activation → inflammation
- Basement membrane thickening

**Diabetic Retinopathy:**

*Classification and Findings:*

Diabetic Retinopathy Stages:
-------------------------------------------
Mild NPDR:
  - Microaneurysms
  - Dot/blot hemorrhages
  - Hard exudates

Moderate NPDR:
  - Cotton wool spots (infarcts)
  - Venous beading
  - Intraretinal microvascular abnormalities

Severe NPDR:
  - >20 hemorrhages in each quadrant
  - Venous beading in ≥2 quadrants
  - IRMA in ≥1 quadrant

Proliferative DR:
  - Neovascularization of disc (NVD)
  - Neovascularization elsewhere (NVE)
  - Preretinal/vitreous hemorrhage
  - Tractional retinal detachment
-------------------------------------------


*Macular Edema:*
- Center-involving DME
- Clinically significant macular edema (CSME)
- Anti-VEGF injections, focal laser, steroids

*Screening:*

Recommended Screening Frequency:
-----------------------------------------
Type 1:  Begin 5 years after diagnosis,
          then annually

Type 2:  Begin at diagnosis,
          then annually

Pregnancy: Pre-conception, each trimester,
          postpartum (women with diabetes)
-----------------------------------------


**Diabetic Nephropathy:**

*Pathophysiology:*

Natural History:
-----------------------------------------
Hyperfiltration (GFR >120)
        ↓
Glomerular hypertrophy
        ↓
Albuminuria (micro- → macro-)
        ↓
Declining GFR
        ↓
ESRD (≈10 years from macroalbuminuria)
-----------------------------------------


*Histologic Changes:*
- Glomerular basement membrane thickening
- Mesangial expansion
- Kimmelstiel-Wilson nodules
- Arteriolar hyalinosis

*Renal Protective Measures:*
\`\`\'
ACE Inhibitors or ARBs:
- First-line for albuminuria
- Reduce progression by 30-50%
- Reduce proteinuria
- Use even if blood pressure normal

SGLT2 Inhibitors:
- Reduce CKD progression
- Reduce albuminuria
- Cardiovascular benefit

Non-steroidal MRA (finerenone):
- CKD benefit in T2DM
- Reduces CV events


**Diabetic Neuropathy:**

*Classification:*

Diabetic Neuropathy Types:
-----------------------------------------
Distal Symmetric Polyneuropathy:
  - Length-dependent
  - "Stocking-glove" distribution
  - Sensory > motor
  - Autonomic involvement common

Autonomic Neuropathy:
  - Cardiovascular: resting tachycardia,
                    exercise intolerance,
                    orthostatic hypotension
  - Gastrointestinal: gastroparesis,
                       diarrhea, constipation
  - Genitourinary: neurogenic bladder,
                    sexual dysfunction
  - Sudomotor: anhidrosis, gustatory sweating

Mononeuropathy:
  - Cranial nerves (III, IV, VI, VII)
  - Peripheral nerves (median, ulnar, femoral)
  - Painful, sudden onset
  - Usually self-limited

Radiculoplexus Neuropathy:
  - Diabetic amyotrophy (proximal)
  - Pain, weakness, atrophy
  - Usually unilateral
-----------------------------------------


*Diagnostic Testing:*

Neuropathy Assessment:
-----------------------------------------
Bedside Tests:
  - 10g monofilament (plantar surface)
  - Vibration (128 Hz tuning fork)
  - Pinprick sensation
  - Ankle reflexes

Quantitative Testing:
  - Nerve conduction studies
  - Quantitative sensory testing
  - Autonomic function tests
-----------------------------------------


**Cardiovascular Disease:**

*Pathophysiology:*
- Accelerated atherosclerosis
- Endothelial dysfunction
- Pro-thrombotic state
- Dyslipidemia (high TG, low HDL, small dense LDL)

*Risk Assessment:*
- Diabetes is a CHD risk equivalent
- 10-year risk >20% for most patients
- Consider additional testing for high-risk

**Foot Complications:**

*Risk Classification:*

Risk Category | Findings | Management
------------------------------------------------
0:           No neuropathy,     Annual exam
             no PAD, no deformity
------------------------------------------------
1:           Neuropathy,        Every 3-6 months,
             no deformity       Self-exams daily
------------------------------------------------
2:           Neuropathy +       Every 2-3 months,
             deformity or PAD   Specialist care
------------------------------------------------
3:           History of ulcer   Every 1-2 months,
             or amputation      Podiatry care
------------------------------------------------
`,
      keyTerms: [
        { term: 'RAGE', definition: 'Receptor for advanced glycation end-products; mediates inflammatory response' },
        { term: 'NPDR', definition: 'Non-proliferative diabetic retinopathy; early stage without new vessel growth' },
        { term: 'PDR', definition: 'Proliferative diabetic retinopathy; advanced stage with abnormal new vessels' },
        { term: 'DME', definition: 'Diabetic macular edema; swelling in central retina causing vision loss' },
        { term: 'anti-VEGF', definition: 'Anti-vascular endothelial growth factor; medications to reduce retinal swelling' },
        { term: 'Kimmelstiel-Wilson nodules', definition: 'Nodular glomerular lesions characteristic of diabetic nephropathy' },
        { term: 'monofilament testing', definition: '5.07 monofilament test for protective sensation in feet' },
        { term: 'gastroparesis', definition: 'Delayed gastric emptying due to autonomic neuropathy' },
      ],
      clinicalNotes: 'The STENO-2 trial showed multifactorial intervention (glucose, BP, lipids, aspirin, ACEi) reduced cardiovascular events by 50% and death by 50% in Type 2 diabetes.',
      patientCounselingPoints: [
        'Tight glucose control reduces complication risk but does not eliminate it completely.',
        'Blood pressure control is as important as glucose control for preventing complications.',
        'Foot ulcers can develop in just a few days - daily inspection is essential.',
        'Call immediately for any foot redness, swelling, or drainage.',
        'Vaccination against pneumococcus, hepatitis B, influenza, and COVID-19 is recommended.',
      ],
    },
    4: {
      level: 4,
      summary: 'Diabetes complications represent the cumulative effect of chronic hyperglycemia on vascular and neural tissues, mediated by biochemical pathways leading to advanced glycation, oxidative stress, and inflammation, requiring systematic screening and comprehensive risk factor management.',
      explanation: `**Biochemical Pathogenesis:**

*Advanced Glycation End-products (AGEs) and RAGE Signaling:*

AGE Formation Pathway:
-------------------------------------------------
Glucose + Protein → Schiff base → Amadori product → AGE

AGE Effects:
- Collagen cross-linking → tissue stiffness
- LDL glycation → accelerated atherosclerosis
- RAGE activation → NF-κB → inflammation
- Oxidative stress → endothelial dysfunction
-------------------------------------------------


*Polyol Pathway:*
- Aldose reductase converts glucose to sorbitol
- Consumes NADPH (needed for glutathione)
- Increases intracellular osmolarity
- Causes oxidative stress and cellular damage

*Protein Kinase C Activation:*
- Hyperglycemia → DAG → PKC activation
- Increased vascular permeability
- Enhanced pro-inflammatory gene expression
- Pro-thrombotic state

**Diabetic Retinopathy:**

*Advanced Management:*
\`\`\'
Treatment by Stage:
-------------------------------------------------
Mild-Moderate NPDR:  Observation,
                     glycemic control

Severe NPDR:         Consider anti-VEGF
                     for DME

Proliferative DR:    Pan-retinal photocoagulation
                     (PRP laser)

DME:                 Anti-VEGF injections (aflibercept,
                     bevacizumab, ranibizumab)
                     Focal/grid laser for
                     non-center involving

Vitreous Hemorrhage: Pars plana vitrectomy if
                     non-clearing
                     (usually >1 month)
-------------------------------------------------
\`\`\'

*Anti-VEGF Therapy:*
- Aflibercept (Eylea): Most potent, higher cost
- Bevacizumab (Avastin): Off-label, lower cost
- Ranibizumab (Lucentis): FDA-approved, higher cost
- Monthly initially, then as needed

**Diabetic Nephropathy:**

*Histologic Classification:*

Renal Pathology Changes:
-------------------------------------------------
Glomerular:
  - Basement membrane thickening (early)
  - Mesangial expansion (progressive)
  - Kimmelstiel-Wilson nodules (nodular sclerosis)
  - Global glomerulosclerosis (late)

Vascular:
  - Arteriolar hyalinosis (afferent > efferent)
  - Arteriosclerosis

Tubulointerstitial:
  - Tubular atrophy
  - Interstitial fibrosis
  - Inflammatory infiltrate
-------------------------------------------------


*Comprehensive Renoprotection:*

Multifactorial Approach:
-------------------------------------------------
Glycemic Control:
  - Target A1C <7.0% (individualized)
  - Reduce progression by 30-40%

Blood Pressure Control:
  - Target <130/80 mmHg
  - ACEi/ARB first line
  - Reduce progression by 30-50%

SGLT2 Inhibitors:
  - Empagliflozin, dapagliflozin, canagliflozin
  - Reduce hard renal outcomes by 30-40%
  - Benefit independent of glucose lowering

Non-steroidal MRA:
  - Finerenone
  - Reduces CKD progression and CV events

Dietary Protein Restriction:
  - 0.8 g/kg/day (if progressive CKD)
-------------------------------------------------


**Cardiovascular Autonomic Neuropathy:**

*Diagnostic Criteria:*

CAN Staging (Ewing's Criteria):
-------------------------------------------------
Early/possible:
  - One abnormal test on resting HR,
    Valsalva, or tilt-table

Definite:
  - Two or more abnormal heart rate tests
  - Or one abnormal BP test

Severe:
  - Orthostatic hypotension
  - Resting tachycardia
  - Exercise intolerance
-------------------------------------------------


*Clinical Consequences:*
- Silent myocardial ischemia (no angina)
- Intraoperative instability
- Arrhythmias
- Sudden cardiac death (2x increased risk)

**Foot Complications:**

*Comprehensive Foot Exam:*

Annual Comprehensive Foot Exam Components:
-------------------------------------------------
1. History:
   - Previous ulcer/amputation
   - Foot symptoms
   - Current footwear

2. Vascular Assessment:
   - Pulses (dorsalis pedis, posterior tibial)
   - Capillary refill
   - Ankle-brachial index if suspected PAD

3. Neurologic Assessment:
   - 10g monofilament (4 sites)
   - Vibration perception (128 Hz)
   - Pinprick sensation
   - Ankle reflexes

4. Dermatologic Assessment:
   - Skin integrity
   - Callus, deformity
   - Nail condition
   - Between toes

5. Musculoskeletal Assessment:
   - Range of motion
   - Bony prominences
   - Charcot foot assessment
-------------------------------------------------


*Charcot Neuroarthropathy:*

Charcot Foot:
-------------------------------------------------
Pathophysiology:
  - Autonomic neuropathy → increased blood flow
  - Bone resorption > formation
  - Microfractures → collapse

Eikenberg Stages:
  0: Acute inflammation, normal X-ray
  1: Fragmentation, decreased bone density
  2: Coalescence
  3: Consolidation
  4: Reconstruction

Treatment:
  - Acute: Offloading (TCC), NSAIDs, bisphosphonates
  - Chronic: Accommodative footwear, orthotics
-------------------------------------------------
`,
      keyTerms: [
        { term: 'NF-κB', definition: 'Nuclear factor kappa B; transcription factor promoting inflammation' },
        { term: 'DAG', definition: 'Diacylglycerol; second messenger that activates PKC' },
        { term: 'PRP', definition: 'Pan-retinal photocoagulation; laser treatment for proliferative retinopathy' },
        { term: 'TCC', definition: 'Total contact cast; offloading device for Charcot foot or ulcers' },
        { term: 'orthostatic hypotension', definition: 'Blood pressure drop upon standing due to autonomic neuropathy' },
        { term: 'silent ischemia', definition: 'Heart ischemia without angina due to autonomic neuropathy' },
      ],
      clinicalNotes: 'SGLT2 inhibitors have renal benefit even in patients with normal A1C. Consider early nephrology referral (eGFR <30 or UACR >300). Retinal screening can be done with retinal photography in primary care settings.',
      patientCounselingPoints: [
        'Diabetes complications often have no symptoms until advanced stages.',
        'The best treatment is prevention - control blood sugar, BP, and lipids.',
        'All complications are reversible if caught very early.',
        'Most complications progress more slowly with good control.',
        'Regular screening detects problems when they are most treatable.',
      ],
    },
    5: {
      level: 5,
      summary: 'Diabetes complications result from integrated pathogenic processes of advanced glycation, oxidative stress, and inflammatory pathways causing microvascular and macrovascular injury, requiring precision medicine approaches with novel therapeutic agents targeting specific pathophysiologic mechanisms.',
      explanation: `**Integrated Pathogenic Networks:**

The molecular basis of diabetic complications involves interconnected biochemical pathways creating a self-perpetuating cycle of vascular injury.

*Unified Mechanism (Brownlee Hypothesis):*

Hyperglycemia
      ↓
Mitochondrial ROS overproduction
      ↓
┌-------------┴----------------------------┐
↓          ↓           ↓          ↓         ↓
Inhibited   AGE        PKC        Hexosamine  DNA
GAPDH       formation  activation  pathway    damage
            ↓          ↓          ↓          ↓
          Pseudohypoxia + Inflammation + Fibrosis
                      ↓
            Vascular & Neural Injury
                      ↓
                Clinical Complications


*Epigenetic Modifications:*
- DNA methylation changes in target tissues
- Histone modifications persist after glucose normalization
- "Metabolic memory" - hyperglycemic legacy effect
- Explains why early control matters (DCCT/EDIC)

**Advanced Retinal Disease:**

*Novel Therapeutics:*

Emerging Retinal Therapies:
-------------------------------------------------
Longer-acting Anti-VEGF:
  - High-dose aflibercept (8 mg)
  - Port delivery system (Susvimo)
  - Faricimab (VEGF + Ang2 bispecific)

Neuroprotection:
  - Somatostatin analogs
  - Netarsudil (Rho kinase inhibitor)

Gene Therapy:
  - ADVM-022 (anti-VEGF gene therapy)

Anti-inflammatory:
  - Corticosteroid implants
  - Non-steroidal options
-------------------------------------------------


*Imaging Advances:*
- OCT angiography (non-invasive vessel visualization)
- Ultra-widefield imaging (peripheral pathology)
- AI-based image analysis (automated grading)

**Diabetic Kidney Disease:**

*Novel Therapeutic Targets:*

New Directions in DKD Treatment:
-------------------------------------------------
Mineralocorticoid Receptor Antagonists:
  - Finerenone (non-steroidal MRA)
  - Eplerenone (steroidal MRA)
  - Reduced CKD progression and CV events

SGLT2 Inhibitors:
  - Multiple agents with proven renal benefit
  - Benefit extends to non-diabetic CKD
  - Mechanism: tubuloglomerular feedback,
    reduced hyperfiltration

Endothelin Receptor Antagonists:
  - Atrasentan (investigational)
  - Anti-fibrotic and anti-inflammatory

Anti-inflammatory Agents:
  - Baricitinib (JAK inhibitor)
  - CCX140 (CCR2 antagonist)

Nrf2 Activators:
  - Bardoxolone (controversial)

GLP-1 Receptor Agonists:
  - Independent renal benefit
  - Reduced albuminuria
-------------------------------------------------


*Precision Medicine in DKD:*
- APOL1 risk variants (African ancestry)
- Biomarkers: NGAL, KIM-1, L-FABP
- Genetic risk scores for progression
- Treatment response prediction

**Neuropathy:**

*Pathogenesis-Targeted Therapies:*

Emerging Neuropathy Treatments:
-------------------------------------------------
Pathogenesis-Directed:
  - Aldose reductase inhibitors (epalrestat - Japan)
  - PKC-beta inhibitors (ruboxistaurin - investigational)
  - AGE inhibitors (pyridoxamine - investigational)
  - Benfotiamine (thiamine derivative)

Symptom Management:
  - Duloxetine, pregabalin, gabapentin (FDA-approved)
  - SNRIs, TCAs, topical agents

Disease Modification:
  - Alpha-lipoic acid (intravenous)
  - Nerve growth factors (investigational)
  - Stem cell therapy (early research)
-------------------------------------------------


*Cardiovascular Autonomic Neuropathy:*
- Strongest predictor of silent ischemia
- Associated with increased mortality
- No disease-modifying therapy
- Focus on risk factor reduction

**Cardiovascular Disease:**

*GLP-1 and SGLT2 Cardiovascular Trials:*

Landmark CVOT Results:
-------------------------------------------------
GLP-1 Agonists with CV Benefit:
  - Semaglutide: ↓ MACE 26% (SUSTAIN-6)
  - Liraglutide: ↓ CV death 22% (LEADER)
  - Dulaglutide: ↓ MACE 12% (REWIND)

SGLT2 Inhibitors with CV Benefit:
  - Empagliflozin: ↓ CV death 38% (EMPA-REG OUTCOME)
  - Canagliflozin: ↓ MACE 14% (CANVAS)
  - Dapagliflozin: ↓ HF hosp 27% (DECLARE-TIMI)

Combination Therapy:
  - Synergistic effects
  - Consider in all high-risk patients
-------------------------------------------------


**Prevention and Screening:**

*Risk Stratification:*

Personalized Screening Intervals:
-------------------------------------------------
Retinopathy:
  - Type 1: Begin 5 years post-diagnosis
  - Type 2: Begin at diagnosis
  - Pregnancy: Each trimester
  - Post-proliferative: Every 3-6 months

Nephropathy:
  - Annual UACR + eGFR
  - If UACR >30: Repeat in 3 months
  - If eGFR <60: Refer nephrology

Neuropathy:
  - Annual comprehensive exam
  - 10g monofilament testing
  - Symptom assessment

CVD:
  - ASCVD risk calculator (adjunct)
  - Consider stress testing if high risk
  - CT calcium scoring (selective)
-------------------------------------------------


**Artificial Intelligence Applications:**

*Retinal Imaging AI:*
- Automated DR grading
- Earlier detection than human graders
- Can detect CVD risk from retinal images
- Enables population screening

*Predictive Analytics:*
- Risk prediction models for complications
- Personalized screening intervals
- Treatment response prediction
- Resource optimization`,
      keyTerms: [
        { term: 'metabolic memory', definition: 'Persistence of diabetic complications despite later glycemic control' },
        { term: 'DCCT/EDIC', definition: 'Diabetes Control and Complications Trial/Epidemiology of Diabetes Interventions and Complications' },
        { term: 'CVOT', definition: 'Cardiovascular outcomes trial; required for diabetes medications' },
        { term: 'MACE', definition: 'Major adverse cardiovascular events' },
        { term: 'APOL1', definition: 'Apolipoprotein L1 gene; risk variants increase kidney disease in African ancestry' },
        { term: 'NGAL', definition: 'Neutrophil gelatinase-associated lipocalin; early kidney injury biomarker' },
      ],
      clinicalNotes: 'Intensive multifactorial intervention reduces complications by 50% and mortality by 50% (STENO-2). The legacy effect means early intensive control has benefits that persist for decades.',
      patientCounselingPoints: [
        'The first 5-10 years of diabetes control are critical for long-term complications.',
        'Newer medications (SGLT2i, GLP-1RA) protect organs beyond sugar control.',
        'Genetic testing may help predict complication risk in the future.',
        'AI is improving early detection of complications through retinal imaging.',
        'Personalized medicine may tailor prevention strategies to your individual risk.',
      ],
    },
  },

  media: [
    {
      id: 'diabetes-complications-overview',
      type: 'diagram',
      filename: 'diabetes-complications-systems.svg',
      title: 'Diabetes Complications by Body System',
      description: 'Diagram showing how diabetes affects different body systems',
    },
    {
      id: 'diabetic-retinopathy-stages',
      type: 'diagram',
      filename: 'diabetic-retinopathy-stages.svg',
      title: 'Stages of Diabetic Retinopathy',
      description: 'Visual progression of diabetic retinopathy from mild to proliferative',
    },
    {
      id: 'foot-exam-guide',
      type: 'diagram',
      filename: 'diabetic-foot-exam.svg',
      title: 'Diabetic Foot Examination',
      description: 'Guide to comprehensive diabetic foot examination',
    },
  ],

  citations: [
    {
      id: 'ada-standards-2024',
      type: 'article',
      title: 'Standards of Care in Diabetes-2024: Microvascular Complications',
      source: 'Diabetes Care',
      authors: ['American Diabetes Association'],
    },
    {
      id: 'dcct-edic',
      type: 'article',
      title: 'The Diabetes Control and Complications Trial/Epidemiology of Diabetes Interventions and Complications Study',
      source: 'New England Journal of Medicine',
    },
    {
      id: 'ukpds',
      type: 'article',
      title: 'UK Prospective Diabetes Study',
      source: 'British Medical Journal',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-type1-diabetes', targetType: 'condition', relationship: 'parent', label: 'Type 1 Diabetes' },
    { targetId: 'chronic-disease-type2-diabetes', targetType: 'condition', relationship: 'parent', label: 'Type 2 Diabetes' },
    { targetId: 'chronic-disease-hypoglycemia', targetType: 'condition', relationship: 'related', label: 'Hypoglycemia' },
    { targetId: 'chronic-disease-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
  ],

  tags: {
    systems: ['endocrine', 'cardiovascular', 'nervous', 'renal', 'visual'],
    topics: ['diabetes', 'complications', 'prevention', 'screening'],
    keywords: ['diabetic complications', 'retinopathy', 'nephropathy', 'neuropathy', 'foot ulcers'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
