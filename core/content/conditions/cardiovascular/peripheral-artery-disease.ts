/**
 * Peripheral Artery Disease (PAD) - Comprehensive Educational Content
 *
 * Covers pathophysiology, diagnosis, medical management, and revascularization
 * strategies for atherosclerotic peripheral arterial disease.
 */

import { EducationalContent } from '../../types';

export const peripheralArteryDisease: EducationalContent = {
  id: 'condition-peripheral-artery-disease',
  type: 'condition',
  name: 'Peripheral Artery Disease',
  alternateNames: ['PAD', 'Peripheral Vascular Disease', 'PVD', 'Peripheral Arterial Disease', 'Claudication'],
  hpoId: 'HP:0004950',

  levels: {
    1: {
      level: 1,
      summary: 'Peripheral artery disease is when the blood vessels in your legs get clogged with fatty deposits, reducing blood flow and causing leg pain when you walk.',
      explanation: `Peripheral artery disease (PAD) is similar to clogged pipes. The arteries that carry blood to your legs become narrowed by fatty buildup (called plaque), making it harder for blood to flow through.

**What causes PAD?**
The same things that cause heart disease:
- Smoking (biggest risk factor)
- Diabetes
- High blood pressure
- High cholesterol
- Being overweight
- Not exercising
- Getting older

**What does PAD feel like?**
The most common symptom is leg pain or cramping when you walk, called claudication:
- Pain usually in the calf, but can be in thigh or buttock
- Starts when walking and goes away with rest
- Happens at the same distance each time
- Like a "charlie horse" that comes with exercise

**Other symptoms:**
- Legs feel cold or numb
- Sores on feet or toes that don't heal
- Skin color changes on legs
- Weak pulse in legs or feet
- Shiny skin on legs
- Hair loss on legs

Many people with PAD have no symptoms at all!

**Why is PAD serious?**
- Makes walking difficult, affecting daily life
- Can lead to wounds that don't heal
- In severe cases, may require amputation
- People with PAD often have heart disease too
- Increased risk of heart attack and stroke

**How is PAD treated?**
1. **Lifestyle changes**: Quit smoking, exercise, healthy diet
2. **Walking program**: Actually improves blood flow over time
3. **Medications**: Blood thinners, cholesterol medicine, blood pressure pills
4. **Procedures**: Open blocked arteries with balloons or stents
5. **Surgery**: Bypass blocked areas with grafts`,
      keyTerms: [
        { term: 'claudication', definition: 'Leg pain or cramping that happens when you walk and goes away with rest' },
        { term: 'plaque', definition: 'Fatty buildup inside arteries that narrows them and blocks blood flow' },
        { term: 'artery', definition: 'Blood vessel that carries blood from your heart to the rest of your body' },
        { term: 'amputation', definition: 'Surgical removal of a body part, like a toe, foot, or leg' },
      ],
      analogies: [
        'PAD is like a clogged drain - water (blood) cannot flow through as easily.',
        'Walking with claudication is like a car running out of gas - the muscles cannot get enough fuel (oxygen) to keep going.',
        'An artery with plaque is like a highway with lane closures - traffic (blood) slows down and backs up.',
      ],
      examples: [
        'A 65-year-old smoker notices he has to stop every block when walking to the store because of calf pain. The pain goes away after resting for a few minutes.',
        'A diabetic woman develops a sore on her toe that will not heal after several months. Her doctor finds that blood flow to her foot is very low.',
      ],
    },
    2: {
      level: 2,
      summary: 'Peripheral artery disease is atherosclerotic narrowing of lower extremity arteries, presenting as intermittent claudication or critical limb ischemia, diagnosed by ankle-brachial index, and managed with risk factor modification, antiplatelet therapy, exercise, and revascularization when needed.',
      explanation: `## Understanding PAD

PAD is caused by atherosclerosis - the same disease process that causes coronary artery disease. Plaque builds up in the arteries of the legs, reducing blood flow to the muscles.

### Risk Factors

**Major risk factors:**
- Smoking (4x increased risk)
- Diabetes (3-4x increased risk)
- Age >65
- Hypertension
- Hyperlipidemia
- Family history of vascular disease

### Clinical Stages (Fontaine Classification)

| Stage | Symptoms |
|-------|----------|
| I | Asymptomatic |
| IIa | Mild claudication (>200 m walking distance) |
| IIb | Moderate-severe claudication (<200 m) |
| III | Rest pain |
| IV | Tissue loss (ulcers, gangrene) |

### Intermittent Claudication

- Muscle pain with walking
- Reproducible at same distance
- Relieved by 2-5 minutes of rest
- Location indicates level of disease:
  - Calf: Femoral-popliteal disease
  - Thigh/buttock: Aorto-iliac disease

### Critical Limb Ischemia (CLI)

- Rest pain (especially at night, improved by hanging foot down)
- Non-healing ulcers
- Gangrene
- Limb-threatening condition
- Requires revascularization

### Diagnosis

**Physical Examination:**
- Diminished or absent pulses
- Hair loss on legs
- Shiny, thin skin
- Cool extremities
- Delayed capillary refill
- Rubor on dependency (red when hanging down)
- Pallor on elevation

**Ankle-Brachial Index (ABI):**
- Ratio of ankle to arm blood pressure
- Normal: 1.0-1.3
- Borderline: 0.91-0.99
- PAD: 0.41-0.90 (mild-moderate)
- Severe PAD: ≤0.40
- Non-compressible (calcified): >1.40

**Additional Testing:**
- Toe-brachial index (TBI): For diabetics with calcified vessels
- Arterial duplex ultrasound
- CT angiography
- MR angiography
- Conventional angiography (for intervention)

### Treatment

**Medical Management (All patients):**
- Smoking cessation (most important!)
- Antiplatelet therapy (aspirin or clopidogrel)
- Statin therapy (LDL goal <70 mg/dL)
- Blood pressure control
- Diabetes management
- Cilostazol: For claudication symptoms

**Exercise Therapy:**
- Supervised exercise program: Walk until claudication, rest, repeat
- 30-45 minutes, 3 times per week
- 12-week program minimum
- Can double walking distance

**Revascularization:**
- Indicated for lifestyle-limiting claudication failing medical therapy
- Required for CLI
- Endovascular: Angioplasty, stenting
- Surgical: Bypass grafting

### Prognosis

**Limb outcomes:**
- Claudication: 70-80% stable, 20-30% worsen
- 1-2% progress to amputation per year

**Cardiovascular risk:**
- PAD is a CAD equivalent
- 5-year mortality 15-30%
- MI and stroke common causes of death`,
      keyTerms: [
        { term: 'ankle-brachial index', definition: 'Test comparing blood pressure at the ankle to the arm; low values indicate PAD' },
        { term: 'critical limb ischemia', definition: 'Severe PAD with rest pain, ulcers, or gangrene; limb-threatening condition' },
        { term: 'intermittent claudication', definition: 'Leg muscle pain or cramping with walking that resolves with rest; classic PAD symptom' },
        { term: 'revascularization', definition: 'Procedures to restore blood flow through blocked arteries, including angioplasty and bypass' },
        { term: 'cilostazol', definition: 'Medication that improves walking distance in claudication by dilating arteries and inhibiting platelets' },
      ],
      analogies: [
        'The ABI is like a traffic report for your leg arteries - if the ratio is low, there is a bottleneck slowing down blood flow.',
        'Supervised exercise for PAD is like training for a marathon - gradually building up blood flow through collateral vessels.',
      ],
    },
    3: {
      level: 3,
      summary: 'PAD pathophysiology involves atherosclerotic stenoses causing inadequate distal perfusion with supply-demand mismatch during exertion, quantified by hemodynamic testing (ABI, segmental pressures, pulse volume recordings), and treated through guideline-directed medical therapy with revascularization reserved for lifestyle-limiting claudication or limb-threatening ischemia.',
      explanation: `## Pathophysiology

### Atherosclerosis in PAD

**Plaque Distribution:**
- Infrarenal aorta and iliac (30%)
- Femoral and popliteal (80-90%)
- Tibial arteries (40-50%)
- Often multilevel disease

**Hemodynamic Effects:**
- Stenosis >50% diameter = hemodynamically significant
- Flow limitation during exercise → claudication
- Flow limitation at rest → critical limb ischemia

### Collateral Circulation

**Development:**
- Pre-existing arterioles enlarge
- Angiogenesis stimulated by ischemia
- Arteriogenesis from shear stress
- Collaterals can maintain limb viability

**Exercise Training Effect:**
- Improves collateral function
- Improves muscle oxidative metabolism
- Improves endothelial function
- Mechanism of exercise benefit in claudication

## Diagnostic Evaluation

### Hemodynamic Testing

**Segmental Pressures:**
- Cuffs at thigh, calf, ankle
- Gradient >20 mmHg between segments = significant stenosis
- Localizes disease level

**Pulse Volume Recording (PVR):**
- Measures volume changes with cardiac cycle
- Waveform analysis indicates disease severity
- Useful when ABI falsely elevated

**Exercise ABI:**
- Measure ABI after treadmill exercise
- Decrease >20% or to <0.90 supports diagnosis
- Useful when resting ABI is borderline

### Imaging

**Duplex Ultrasound:**
- First-line imaging for symptomatic PAD
- Peak systolic velocity ratio >2 = >50% stenosis
- Maps lesion location and severity

**CT Angiography:**
- Excellent anatomic detail
- Pre-procedural planning
- Limitations: Calcium blooming, contrast

**MR Angiography:**
- No ionizing radiation
- Gadolinium or non-contrast techniques
- May overestimate stenosis

**Invasive Angiography:**
- Gold standard
- Performed when intervention planned
- Hemodynamic measurements (pressure gradients)

## Medical Management

### Antiplatelet Therapy

**Aspirin:**
- Reduces cardiovascular events
- Not proven to improve limb outcomes alone
- Standard of care for PAD

**Clopidogrel:**
- Alternative to aspirin
- CAPRIE trial: Superior to aspirin for PAD subgroup

**Dual Antiplatelet:**
- Not routine for stable PAD
- Consider after revascularization

### Anticoagulation

**Rivaroxaban 2.5 mg BID + Aspirin (COMPASS):**
- 24% reduction in MACE + limb events
- Increased bleeding
- Consider in high-risk PAD patients

**Vorapaxar:**
- PAR-1 antagonist
- TRA2P-TIMI 50: Reduced extremity revascularization
- Bleeding concerns limit use

### Lipid Therapy

**High-Intensity Statin:**
- Reduces cardiovascular events
- May stabilize plaque
- Target LDL <70 mg/dL (or 50% reduction)

**PCSK9 Inhibitors:**
- FOURIER: Reduced MACE and major adverse limb events
- Consider for LDL not at goal

### Claudication Medications

**Cilostazol:**
- Phosphodiesterase III inhibitor
- Improves walking distance 50-70%
- Contraindicated in heart failure

**Pentoxifylline:**
- Minimal efficacy
- Not recommended routinely

### Blood Pressure Control

- Target <130/80 mmHg
- Beta-blockers NOT contraindicated (old belief dispelled)
- ACE inhibitors preferred (HOPE trial benefits)

## Exercise Therapy

### Supervised Exercise Training (SET)

**Components:**
- Treadmill or track walking
- Walk until moderate claudication
- Rest until resolved
- Repeat for 30-45 minutes
- 3 sessions per week for ≥12 weeks

**Outcomes:**
- Increases pain-free walking distance by 100-150%
- Improves quality of life
- Medicare coverage in US

**Mechanisms:**
- Improved muscle metabolism
- Improved endothelial function
- Collateral development
- Gait efficiency

### Home Exercise Programs

- Less effective than supervised
- Structured program with goals
- Alternative when SET unavailable

## Revascularization

### Indications

**Claudication:**
- Lifestyle-limiting symptoms
- Adequate trial of medical therapy + exercise
- Favorable anatomy for intervention

**CLI:**
- All patients with adequate anatomy
- Limb salvage priority

### Endovascular Options

**Angioplasty ± Stenting:**
- Iliac disease: Excellent outcomes
- Femoral-popliteal: Good outcomes, especially focal lesions
- Infrapopliteal: Reserved for CLI wound healing

**Drug-Coated Balloons/Stents:**
- Paclitaxel-coated devices
- Improved patency for femoropopliteal lesions
- Mortality signal in meta-analyses (controversial)

**Atherectomy:**
- Debulks plaque
- Combined with balloon/stent
- Lesion preparation

### Surgical Options

**Bypass Grafting:**
- Preferred for long, complex lesions
- Autogenous vein conduit preferred (great saphenous vein)
- Femoral-popliteal or femoral-tibial bypass

**Endarterectomy:**
- Common femoral artery disease
- Combined with profundaplasty`,
      keyTerms: [
        { term: 'pulse volume recording', definition: 'Plethysmographic test measuring arterial volume changes; useful when ABI is falsely elevated due to calcification' },
        { term: 'supervised exercise training', definition: 'Structured, monitored walking program shown to significantly improve claudication symptoms' },
        { term: 'COMPASS trial', definition: 'Study showing rivaroxaban 2.5 mg BID plus aspirin reduces cardiovascular and limb events in PAD' },
        { term: 'drug-coated balloon', definition: 'Angioplasty balloon coated with antiproliferative drug to reduce restenosis after treatment' },
        { term: 'great saphenous vein', definition: 'Preferred conduit for lower extremity bypass surgery; better long-term patency than synthetic grafts' },
      ],
      clinicalNotes: 'Exercise is first-line therapy for claudication. Supervised exercise training is proven to improve walking distance and should be offered before revascularization for non-limb-threatening PAD. For patients with both PAD and CAD, consider adding rivaroxaban 2.5 mg BID to aspirin based on COMPASS if bleeding risk is acceptable.',
    },
    4: {
      level: 4,
      summary: 'PAD management requires systematic cardiovascular risk reduction with guideline-directed medical therapy including intensified antiplatelet strategies (COMPASS regimen), lipid lowering targeting LDL <70 mg/dL, and supervised exercise, with revascularization decisions guided by anatomic complexity (TASC classification), procedural risk, and patient functional goals, balancing endovascular-first versus surgery-first approaches.',
      explanation: `## Advanced Pathophysiology

### Atherosclerosis Mechanisms in PAD

**Oxidative Stress:**
- Mitochondrial dysfunction in ischemic muscle
- Reactive oxygen species generation
- Muscle fiber damage

**Inflammation:**
- Elevated hs-CRP, IL-6, TNF-α
- Leukocyte adhesion and infiltration
- Plaque instability

**Endothelial Dysfunction:**
- Impaired flow-mediated dilation
- Reduced nitric oxide bioavailability
- Contributes to disease progression

### Acute Limb Ischemia (ALI)

**Etiology:**
- Thrombosis of native artery or graft
- Embolism (cardiac source, proximal aneurysm)
- Trauma

**Classification (Rutherford):**

| Class | Description | Sensory | Motor | Prognosis |
|-------|-------------|---------|-------|-----------|
| I | Viable | None | None | Not threatened |
| IIa | Marginally threatened | Minimal | None | Salvageable if treated promptly |
| IIb | Immediately threatened | Beyond toes | Mild-moderate | Salvageable with immediate revascularization |
| III | Irreversible | Profound | Paralysis | Amputation |

**Management:**
- Anticoagulation (heparin)
- Urgent revascularization
- Surgical thromboembolectomy or catheter-directed thrombolysis
- Fasciotomy if compartment syndrome

## Comprehensive Medical Therapy

### Intensified Antiplatelet/Antithrombotic Strategy

**COMPASS Trial:**
- Rivaroxaban 2.5 mg BID + aspirin vs aspirin alone
- 28% reduction in major adverse limb events
- 46% reduction in major amputation
- Bleeding increase (non-fatal)

**Vorapaxar (TRA2P-TIMI 50):**
- PAR-1 inhibitor
- 16% reduction in hospitalization for ALI
- Bleeding concerns (especially with hx of stroke)

### Lipid Management

**High-Risk PAD Features:**
- Prior amputation
- Prior revascularization
- CLI
- Multilevel disease

**PCSK9 Inhibitor Benefit:**
- FOURIER: Evolocumab reduced MALE by 42% in PAD subset
- Consider for patients not at LDL goal despite high-intensity statin + ezetimibe

### Antihyperglycemic Therapy

**SGLT2 Inhibitors:**
- Concern for amputation risk (canagliflozin in CANVAS)
- Subsequent trials (empagliflozin, dapagliflozin) did not confirm
- Use with caution in patients with foot wounds

**GLP-1 Agonists:**
- Cardiovascular benefit
- No specific limb data

## Revascularization Decision-Making

### TASC II Classification

| Type | Aorto-Iliac | Femoral-Popliteal |
|------|-------------|-------------------|
| A | Short stenosis | Single <10 cm |
| B | <3 cm aortic | Multiple <15 cm |
| C | Bilateral CIA stenosis | Recalcified >15 cm |
| D | Infarenal occlusion | CTO popliteal |

**General Principles:**
- TASC A, B: Endovascular first
- TASC D: Surgical first (traditional)
- TASC C: Case-by-case
- Increasingly endovascular-first approach

### Evidence for Revascularization

**CLEVER Trial (Claudication):**
- SET vs stenting vs optimal medical therapy (OMT)
- SET superior to stenting at 6 months
- Stenting superior to OMT alone

**BEST-CLI (Critical Limb Ischemia):**
- Bypass vs endovascular for CLI
- Bypass superior if adequate saphenous vein
- If no vein conduit, endovascular equivalent

**BASIL Trial:**
- CLI patients with >2 year life expectancy
- Bypass had better amputation-free survival long-term

### Endovascular Techniques

**Standard Angioplasty:**
- Effective for focal lesions
- Limited by elastic recoil and dissection

**Self-Expanding Stents:**
- Overcomes recoil
- Concerns about stent fracture in femoropopliteal segment

**Drug-Coated Technology:**
- IN.PACT Admiral (paclitaxel-coated balloon)
- Zilver PTX (paclitaxel-eluting stent)
- Improved primary patency
- Mortality signal in 2018 meta-analysis (Katsanos et al.)
- Subsequent analyses did not confirm consistent signal
- FDA continues to monitor

**Intravascular Lithotripsy:**
- Shockwave balloons
- Fracture calcified plaque
- Improve vessel compliance

**Atherectomy:**
- Directional (SilverHawk, TurboHawk)
- Rotational (Rotablator)
- Orbital (Diamondback)
- Excimer laser
- Use for lesion preparation, calcium modification

### Surgical Techniques

**Inflow Procedures:**
- Aortobifemoral bypass
- Iliofemoral bypass
- Axillofemoral bypass (extra-anatomic)

**Outflow Procedures:**
- Femoropopliteal bypass (above or below knee)
- Femoral-tibial bypass
- Pedal bypass

**Conduit Selection:**
- Autogenous vein preferred (great saphenous vein)
- Arm veins as alternative
- Prosthetic (PTFE, Dacron) for above-knee only

## Chronic Limb-Threatening Ischemia (CLTI)

### Updated Terminology

CLTI replaces CLI to emphasize:
- Chronic nature (vs acute)
- Limb-threatening severity
- Includes broader spectrum

### WIfI Classification

**Wound:**
- Grade 0-3 based on ulcer depth, gangrene extent

**Ischemia:**
- Grade 0-3 based on ABI, ankle/toe pressures, TcPO2

**Foot Infection:**
- Grade 0-3 from none to systemic sepsis

**Integration:**
- Predicts amputation risk
- Guides treatment intensity

### Wound Care

**Multidisciplinary Team:**
- Vascular surgery
- Podiatry
- Wound care nursing
- Infectious disease
- Orthotics

**Offloading:**
- Total contact casting
- Pressure redistribution

**Debridement:**
- Sharp debridement of necrotic tissue
- Enzymatic or biological alternatives

**Adjuncts:**
- Negative pressure wound therapy
- Hyperbaric oxygen (limited evidence)
- Growth factors`,
      keyTerms: [
        { term: 'BEST-CLI', definition: 'Trial showing bypass surgery superior to endovascular for CLTI if adequate saphenous vein available' },
        { term: 'WIfI classification', definition: 'Wound, Ischemia, foot Infection staging system for chronic limb-threatening ischemia prognosis and treatment planning' },
        { term: 'TASC classification', definition: 'Trans-Atlantic Inter-Society Consensus classification of PAD lesion complexity guiding endovascular vs surgical approach' },
        { term: 'chronic limb-threatening ischemia', definition: 'Updated terminology for advanced PAD with rest pain, ulcers, or gangrene threatening limb viability' },
        { term: 'intravascular lithotripsy', definition: 'Shockwave technology delivered by balloon catheter to fracture arterial calcium and improve vessel compliance' },
      ],
      clinicalNotes: 'The BEST-CLI trial is practice-changing: for patients with CLTI and adequate saphenous vein, bypass should be considered first-line despite increasing endovascular capabilities. The drug-coated device mortality signal remains controversial; many interventionalists continue to use DCB/DES while monitoring long-term outcomes. For patients with both coronary and peripheral disease (polyvascular), COMPASS-eligible patients should be considered for rivaroxaban 2.5 mg BID + aspirin.',
    },
    5: {
      level: 5,
      summary: 'Contemporary PAD management integrates precision risk stratification, optimized antithrombotic regimens including COMPASS-derived strategies, emerging therapies targeting angiogenesis and inflammation, advanced endovascular technologies including intravascular lithotripsy and drug-coated devices with ongoing safety monitoring, and multidisciplinary CLTI care emphasizing limb salvage with evidence-based revascularization strategies informed by BEST-CLI and anatomic complexity.',
      explanation: `## Precision Risk Assessment

### Beyond ABI

**Toe Pressure and TcPO2:**
- Toe pressure <30 mmHg indicates CLI
- TcPO2 <30 mmHg predicts poor wound healing
- More accurate in diabetes

**CT Perfusion:**
- Tissue-level perfusion assessment
- Research application currently

**Functional Imaging:**
- 18F-FDG PET for plaque inflammation
- May identify unstable plaques

### Biomarkers

**hs-CRP:**
- Predicts cardiovascular events
- May guide therapy intensity

**NT-proBNP:**
- Cardiovascular risk stratification
- Elevated in PAD with cardiac dysfunction

**Circulating Angiogenic Cells:**
- Research biomarker
- May predict response to therapy

### Genetics

**Polygenic Risk:**
- GWAS loci overlap with CAD
- May identify high-risk individuals early

**Pharmacogenomics:**
- CYP2C19 for clopidogrel metabolism
- Guided antiplatelet selection

## Advanced Therapeutics

### Novel Antithrombotic Strategies

**Post-COMPASS Considerations:**
- Risk-benefit calculation
- Bleeding risk assessment (HAS-BLED derivative)
- Duration of therapy

**Factor XI Inhibitors:**
- Potential for safer anticoagulation
- Phase 2 trials ongoing
- May uncouple thrombosis from bleeding

### Angiogenesis Therapies

**Gene Therapy:**
- HGF, FGF, VEGF gene transfer
- Phase 3 trials largely disappointing
- Ongoing research in cell selection

**Cell Therapy:**
- Bone marrow-derived cells
- Mesenchymal stem cells
- Endothelial progenitor cells
- Mixed results in trials (PACE, PROVASA)

**Growth Factors:**
- Topical PDGF for wound healing
- Limited systemic applications

### Inflammation-Targeted Therapies

**Colchicine:**
- LoDoCo2 showed benefit in CAD
- Theoretical benefit in PAD
- Not yet studied specifically

**IL-1β Inhibition:**
- CANTOS showed CAD benefit
- PAD data limited

### Lipid-Lowering Intensification

**PCSK9 Inhibitors in PAD:**
- FOURIER PAD subanalysis: MALE reduced 42%
- Consider in high-risk CLTI patients

**Inclisiran:**
- siRNA PCSK9 inhibitor
- Twice-yearly dosing
- Outcomes data awaited

## Endovascular Innovation

### Drug-Coated Devices: Current State

**Safety Monitoring:**
- 2018 Katsanos meta-analysis: Mortality signal
- FDA advisory, continued monitoring
- Subsequent analyses conflicting
- SWEDEPAD trial ongoing

**Practical Approach:**
- Informed consent regarding uncertainty
- Reserve for appropriate lesions
- Consider alternatives (uncoated PTA, stent graft)

### Intravascular Imaging

**IVUS:**
- Vessel sizing
- Calcium assessment
- Stent optimization

**OCT:**
- Higher resolution
- Limited penetration
- Dissection evaluation

### Specialized Devices

**Covered Stents (Stent Grafts):**
- Viabahn for femoropopliteal
- Excludes aneurysms, dissections
- VIASTAR, VIBRANT trials

**Bioresorbable Scaffolds:**
- "Leave nothing behind"
- Limited data in PAD
- Potential advantage in young patients

**Intravascular Lithotripsy:**
- Shockwave for calcium
- DISRUPT PAD trials: High acute efficacy
- Combined with DCB for calcified lesions

### Re-entry Devices

**Chronic Total Occlusion Crossing:**
- Subintimal angioplasty and re-entry
- Outback, Pioneed devices
- Improve CTO success rates

## CLTI Comprehensive Care

### Multidisciplinary Limb Salvage

**Team Composition:**
- Vascular surgery
- Interventional cardiology/radiology
- Podiatry
- Wound care
- Infectious disease
- Orthopedic surgery
- Prosthetics
- Physical therapy
- Nutrition
- Social work

### Evidence-Based Revascularization

**BEST-CLI Implications:**
- Bypass with adequate saphenous vein = superior
- Endovascular acceptable if no vein
- Shared decision-making essential

**BASIL-2:**
- Vein bypass vs BAP-first strategy
- Vein bypass superior for AFS

**VOYAGER PAD:**
- Post-revascularization
- Rivaroxaban 2.5 mg BID + aspirin
- Reduced ALI and major adverse limb events

### Amputation Prevention

**Staged Approach:**
- Debridement first
- Revascularization
- Wound reconstruction
- Offloading and rehabilitation

**Minor vs Major Amputation:**
- Toe/partial foot: Preserve mobility
- Major amputation: Last resort
- Mortality 30% at 30 days for major amputation

### Post-Revascularization Surveillance

**Duplex Ultrasound:**
- Monitor bypass patency
- Detect stenosis before occlusion
- Allow revision before graft loss

**Clinical Monitoring:**
- Wound progression
- Symptom recurrence
- ABI change

## Future Directions

### Digital Health

**Remote Monitoring:**
- Wearable activity tracking
- Wound photography for telemedicine
- ABI measurement devices

**AI Applications:**
- Angiogram interpretation
- Risk prediction models
- Outcome forecasting

### Regenerative Medicine

**Tissue-Engineered Grafts:**
- Bioengineered vessels
- Acellular matrices
- Early clinical use

**Stem Cell Optimization:**
- Cell selection and conditioning
- Combination therapies
- Timing optimization

### Precision Medicine

**Personalized Therapy Selection:**
- Biomarker-guided antiplatelet
- Genetic risk stratification
- Tailored revascularization

**Quality Metrics:**
- Limb salvage rates
- Functional outcomes
- Patient-reported outcomes`,
      keyTerms: [
        { term: 'VOYAGER PAD', definition: 'Trial showing rivaroxaban 2.5 mg BID + aspirin reduces adverse limb events after peripheral revascularization' },
        { term: 'BASIL-2', definition: 'Trial comparing vein bypass to endovascular-first strategy in chronic limb-threatening ischemia' },
        { term: 'intravascular lithotripsy', definition: 'Shockwave technology in balloon catheter form to fracture arterial calcium before angioplasty or stenting' },
        { term: 'angiogenesis therapy', definition: 'Investigational treatments using genes, cells, or growth factors to stimulate new blood vessel formation' },
        { term: 'chronic total occlusion crossing', definition: 'Specialized endovascular techniques and devices for reopening completely blocked arterial segments' },
        { term: 'stent graft', definition: 'Covered stent providing a fabric barrier between stent and vessel wall; used for aneurysms and long lesions' },
      ],
      clinicalNotes: `Key clinical pearls for advanced PAD management:

1. **BEST-CLI changes practice**: For CLTI with adequate saphenous vein, surgical bypass should be the first-line approach. This is a departure from recent endovascular-first trends.

2. **COMPASS for polyvascular disease**: Patients with PAD + CAD or polyvascular disease should be considered for rivaroxaban 2.5 mg BID + aspirin if acceptable bleeding risk.

3. **Drug-coated devices remain useful**: Despite the mortality signal controversy, DCB/DES remain options for femoropopliteal disease. Engage in informed consent and consider alternatives.

4. **Supervised exercise is evidence-based**: SET should be offered to all claudicants before revascularization. Medicare now covers SET.

5. **CLTI is a medical emergency**: These patients have 20-40% 1-year mortality. Urgent revascularization and multidisciplinary care are essential.

6. **VOYAGER after revascularization**: For patients undergoing peripheral revascularization, consider rivaroxaban 2.5 mg BID + aspirin for secondary prevention.

7. **PCSK9 inhibitors in high-risk PAD**: FOURIER data support aggressive LDL lowering with evolocumab in patients with PAD not at goal.

8. **Wound care is a team sport**: Multidisciplinary limb preservation clinics improve outcomes. Collaborate with podiatry, wound care, and infectious disease.`,
    },
  },

  media: [
    {
      id: 'abi-measurement',
      type: 'diagram',
      filename: 'abi-measurement.svg',
      title: 'Ankle-Brachial Index Measurement',
      description: 'Technique for measuring ABI and interpretation of results',
    },
    {
      id: 'pad-anatomy',
      type: 'diagram',
      filename: 'pad-anatomy.svg',
      title: 'Lower Extremity Arterial Anatomy',
      description: 'Arterial supply to the lower extremities and common sites of PAD',
    },
    {
      id: 'fontaine-stages',
      type: 'diagram',
      filename: 'fontaine-stages.svg',
      title: 'Fontaine Classification',
      description: 'Clinical stages of peripheral artery disease',
    },
  ],

  citations: [
    {
      id: 'acc-aha-pad-2016',
      type: 'article',
      title: 'AHA/ACC Guideline on the Management of Patients With Lower Extremity Peripheral Artery Disease',
      authors: ['Gerhard-Herman MD', 'Gornik HL', 'Barrett C', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000000471',
    },
    {
      id: 'compass-trial',
      type: 'article',
      title: 'Rivaroxaban with or without Aspirin in Stable Cardiovascular Disease',
      authors: ['Eikelboom JW', 'Connolly SJ', 'Bosch J', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1709118',
    },
    {
      id: 'best-cli',
      type: 'article',
      title: 'Bypass versus Angioplasty in Severe Ischaemia of the Leg (BEST-CLI)',
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'related', label: 'Coronary Artery Disease' },
    { targetId: 'condition-aortic-aneurysm', targetType: 'condition', relationship: 'related', label: 'Aortic Aneurysm' },
    { targetId: 'condition-hypertension', targetType: 'condition', relationship: 'related', label: 'Hypertension' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['vascular surgery', 'interventional cardiology', 'atherosclerosis', 'wound care'],
    keywords: ['PAD', 'claudication', 'critical limb ischemia', 'ABI', 'bypass surgery', 'angioplasty'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default peripheralArteryDisease;
