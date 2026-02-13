/**
 * Coronary Artery Disease (CAD) - Comprehensive Educational Content
 *
 * Covers pathophysiology, clinical presentations, diagnosis, and management
 * of atherosclerotic coronary artery disease including stable angina and ACS.
 */

import { EducationalContent } from '../../types';

export const coronaryArteryDisease: EducationalContent = {
  id: 'condition-coronary-artery-disease',
  type: 'condition',
  name: 'Coronary Artery Disease',
  nameEs: 'Enfermedad de las Arterias Coronarias',
  alternateNames: ['CAD', 'Coronary Heart Disease', 'CHD', 'Ischemic Heart Disease', 'Atherosclerotic Heart Disease'],
  hpoId: 'HP:0001677',

  levels: {
    1: {
      level: 1,
      summary: 'Coronary artery disease happens when the blood vessels that bring blood to your heart get clogged with fatty buildup, making it harder for your heart to get the oxygen it needs.',
      explanation: `Imagine your heart is like an engine that needs fuel to run. The coronary arteries are like fuel lines that bring blood (the fuel) to your heart muscle. In coronary artery disease, these fuel lines get clogged with a sticky substance called plaque.

**What is plaque?**
Plaque is made up of:
- Cholesterol (a fatty substance)
- Calcium
- Other materials from your blood

Over many years, plaque builds up on the inside walls of your arteries, making them narrower. This is called atherosclerosis.

**What happens when arteries get clogged?**
- Less blood can flow through to your heart
- Your heart doesn't get enough oxygen
- This can cause chest pain called angina
- If an artery gets completely blocked, you have a heart attack

**Warning signs:**
- Chest pain or pressure (especially with activity)
- Shortness of breath
- Pain in your arm, neck, or jaw
- Feeling very tired
- Nausea or dizziness

**What causes it?**
- High cholesterol
- High blood pressure
- Smoking
- Diabetes
- Being overweight
- Not exercising
- Family history of heart disease

**How to prevent and treat it:**
- Don't smoke
- Eat healthy foods (less fat, more fruits and vegetables)
- Exercise regularly
- Take medicines your doctor prescribes
- Sometimes surgery is needed to open blocked arteries`,
      keyTerms: [
        { term: 'coronary arteries', definition: 'The blood vessels that wrap around your heart and bring it oxygen-rich blood' },
        { term: 'plaque', definition: 'A sticky buildup of fat, cholesterol, and other substances inside your arteries' },
        { term: 'angina', definition: 'Chest pain or discomfort that happens when your heart is not getting enough blood' },
        { term: 'heart attack', definition: 'When blood flow to part of your heart is completely blocked, damaging the heart muscle' },
      ],
      analogies: [
        'Plaque in your arteries is like rust building up inside old pipes, making it harder for water to flow through.',
        'A heart attack is like when a pipe gets so clogged that water stops flowing completely.',
        'Your coronary arteries are like a crown (corona means crown in Latin) sitting on top of your heart.',
      ],
      examples: [
        'A person who smokes, has high cholesterol, and does not exercise may develop chest pain when climbing stairs because their heart cannot get enough blood.',
        'Someone having a heart attack might feel crushing chest pain, like an elephant sitting on their chest, along with sweating and nausea.',
      ],
    },
    2: {
      level: 2,
      summary: 'Coronary artery disease is caused by atherosclerosis, a gradual buildup of fatty plaques in the coronary arteries that reduces blood flow to the heart muscle, potentially leading to angina, heart attacks, or heart failure.',
      explanation: `## Understanding Atherosclerosis

Atherosclerosis is a disease where arteries become hardened and narrowed due to plaque buildup. In coronary artery disease, this affects the arteries supplying your heart.

### The Process of Plaque Formation

1. **Endothelial injury**: The inner lining of arteries gets damaged by high blood pressure, smoking, or high cholesterol
2. **LDL infiltration**: "Bad" cholesterol (LDL) enters the artery wall
3. **Inflammation**: White blood cells try to clean up the cholesterol but become foam cells
4. **Plaque growth**: Smooth muscle cells and calcium join the mix, forming a plaque
5. **Narrowing**: The plaque grows and narrows the artery

### Clinical Presentations

**Stable Angina:**
- Chest pain/pressure with exertion or stress
- Relieved by rest or nitroglycerin
- Predictable pattern
- Occurs when oxygen demand exceeds supply

**Unstable Angina:**
- New or worsening chest pain
- Occurs at rest or with minimal activity
- Not relieved by rest
- Warning sign of impending heart attack

**Heart Attack (Myocardial Infarction):**
- Plaque ruptures and forms a blood clot
- Complete blockage of artery
- Heart muscle starts to die within minutes
- Requires emergency treatment

### Risk Factors

**Major Risk Factors:**
- High LDL cholesterol
- Low HDL cholesterol
- High blood pressure
- Smoking
- Diabetes
- Family history of early heart disease
- Age (men >45, women >55)

**Contributing Factors:**
- Obesity
- Physical inactivity
- Unhealthy diet
- Stress
- Metabolic syndrome

### Diagnosis

- **Electrocardiogram (ECG/EKG)**: Shows heart's electrical activity
- **Stress test**: Exercise while monitoring heart
- **Echocardiogram**: Ultrasound of heart
- **Coronary angiography**: X-ray with dye to see blockages
- **CT angiography**: Non-invasive imaging of coronary arteries
- **Blood tests**: Cholesterol, troponin (for heart attack)

### Treatment

**Lifestyle Changes:**
- Quit smoking
- Heart-healthy diet (Mediterranean diet, DASH diet)
- Regular exercise (150 min/week moderate activity)
- Weight management
- Stress reduction

**Medications:**
- Aspirin (blood thinner)
- Statins (cholesterol lowering)
- Beta-blockers (reduce heart workload)
- ACE inhibitors (protect heart and blood vessels)
- Nitroglycerin (relieves angina)

**Procedures:**
- **Angioplasty and stenting**: Balloon opens artery, stent keeps it open
- **Coronary artery bypass surgery (CABG)**: Surgeons create new routes around blockages`,
      keyTerms: [
        { term: 'atherosclerosis', definition: 'Hardening and narrowing of arteries due to plaque buildup in the artery walls', pronunciation: 'ath-er-oh-skleh-ROH-sis' },
        { term: 'myocardial infarction', definition: 'Medical term for heart attack; death of heart muscle due to blocked blood supply', pronunciation: 'my-oh-KAR-dee-al in-FARK-shun' },
        { term: 'LDL cholesterol', definition: 'Low-density lipoprotein; the "bad" cholesterol that builds up in artery walls' },
        { term: 'statin', definition: 'A type of medication that lowers cholesterol and reduces plaque buildup' },
        { term: 'angioplasty', definition: 'Procedure using a balloon to open a blocked artery', pronunciation: 'AN-jee-oh-plas-tee' },
      ],
      analogies: [
        'Atherosclerosis is like mineral deposits building up inside pipes - at first water still flows, but eventually the pipe can get blocked.',
        'LDL cholesterol is like delivery trucks dumping garbage into your artery walls; HDL is like garbage trucks cleaning it up.',
      ],
    },
    3: {
      level: 3,
      summary: 'Coronary artery disease results from atherosclerotic plaque formation involving endothelial dysfunction, lipid accumulation, inflammation, and vascular remodeling, manifesting as stable ischemic heart disease or acute coronary syndromes depending on plaque stability and thrombotic complications.',
      explanation: `## Pathophysiology of Atherosclerosis

### Plaque Development

**Stage 1 - Endothelial Dysfunction:**
- Endothelium loses protective functions
- Decreased nitric oxide production
- Increased permeability to LDL
- Expression of adhesion molecules (VCAM-1, ICAM-1)

**Stage 2 - Fatty Streak Formation:**
- LDL enters intima and becomes oxidized
- Monocytes migrate and differentiate into macrophages
- Macrophages engulf oxidized LDL, becoming foam cells
- Fatty streaks visible as yellow lesions

**Stage 3 - Fibrous Plaque Development:**
- Smooth muscle cells migrate from media to intima
- Collagen and extracellular matrix production
- Formation of fibrous cap over lipid core
- Calcification may occur

**Stage 4 - Advanced/Vulnerable Plaque:**
- Thin fibrous cap
- Large lipid/necrotic core
- Inflammatory cell infiltration
- Prone to rupture

### Plaque Rupture and Thrombosis

When a vulnerable plaque ruptures:
1. Thrombogenic lipid core exposed to blood
2. Platelet adhesion and activation
3. Coagulation cascade activation
4. Thrombus formation
5. Partial or complete vessel occlusion

### Clinical Syndromes

**Chronic Coronary Syndrome (Stable CAD):**
- Fixed stenosis limiting flow during increased demand
- Typical angina: substernal pressure, exertional, relieved by rest/nitrates
- Supply-demand mismatch

**Acute Coronary Syndromes (ACS):**

| Syndrome | ECG Changes | Troponin | Mechanism |
|----------|-------------|----------|-----------|
| Unstable Angina | ST depression or normal | Negative | Partial occlusion, no necrosis |
| NSTEMI | ST depression, T wave changes | Positive | Partial occlusion with necrosis |
| STEMI | ST elevation | Positive | Complete occlusion |

### Diagnostic Evaluation

**Stress Testing:**
- Exercise stress ECG: Sensitivity ~70%, Specificity ~80%
- Stress echocardiography: Better for detecting ischemia location
- Nuclear stress test (SPECT): Perfusion imaging
- Stress cardiac MRI: Gold standard for ischemia detection

**Coronary Imaging:**
- Coronary CT angiography (CCTA): >90% sensitivity and specificity
- Calcium scoring: Agatston score predicts CAD
- Invasive coronary angiography: Gold standard, allows intervention

**Physiologic Assessment:**
- Fractional flow reserve (FFR): Pressure gradient across stenosis
- FFR ≤0.80 indicates hemodynamically significant stenosis
- Instantaneous wave-free ratio (iFR): Alternative to FFR

### Treatment Strategies

**Medical Therapy (GDMT - Guideline-Directed Medical Therapy):**

*Antiplatelet therapy:*
- Aspirin 81 mg daily (lifelong)
- P2Y12 inhibitors (clopidogrel, ticagrelor, prasugrel) for ACS

*Lipid management:*
- High-intensity statin (atorvastatin 40-80 mg, rosuvastatin 20-40 mg)
- LDL goal <70 mg/dL (or <55 mg/dL for very high risk)
- Add ezetimibe if not at goal
- PCSK9 inhibitors for refractory cases

*Anti-ischemic therapy:*
- Beta-blockers: Reduce heart rate, decrease oxygen demand
- Nitrates: Venodilation, reduce preload
- Calcium channel blockers: Alternative if beta-blocker intolerant

*RAAS inhibition:*
- ACE inhibitors or ARBs: Reduce remodeling and events

**Revascularization:**

*Percutaneous Coronary Intervention (PCI):*
- Drug-eluting stents (DES) preferred
- Dual antiplatelet therapy (DAPT) post-stent

*Coronary Artery Bypass Grafting (CABG):*
- Preferred for left main disease, multivessel disease with diabetes
- LIMA to LAD: 90% patency at 10 years
- Saphenous vein grafts: 50-60% patency at 10 years`,
      keyTerms: [
        { term: 'vulnerable plaque', definition: 'Atherosclerotic plaque with thin fibrous cap and large lipid core that is prone to rupture and thrombosis' },
        { term: 'fractional flow reserve', definition: 'Pressure-derived index measuring the physiologic significance of a coronary stenosis; FFR ≤0.80 indicates significant stenosis' },
        { term: 'STEMI', definition: 'ST-elevation myocardial infarction; heart attack with complete coronary occlusion and transmural ischemia' },
        { term: 'NSTEMI', definition: 'Non-ST-elevation myocardial infarction; heart attack with partial occlusion and subendocardial ischemia' },
        { term: 'drug-eluting stent', definition: 'Coronary stent coated with medication to prevent restenosis by inhibiting neointimal proliferation' },
        { term: 'CABG', definition: 'Coronary artery bypass grafting; surgical revascularization using arterial or venous grafts' },
      ],
      clinicalNotes: 'For patients with chronic CAD and preserved LV function, the ISCHEMIA trial showed no mortality benefit of revascularization over optimal medical therapy. However, revascularization improved angina symptoms. Always maximize medical therapy before considering intervention.',
    },
    4: {
      level: 4,
      summary: 'Coronary artery disease pathogenesis involves complex interactions between lipid metabolism, endothelial biology, inflammation, and thrombosis, with contemporary management focusing on risk stratification, optimal medical therapy, and selective revascularization based on evidence from landmark trials including COURAGE, FAME, and ISCHEMIA.',
      explanation: `## Advanced Pathophysiology

### Molecular Mechanisms of Atherogenesis

**Endothelial Dysfunction:**
- Reduced eNOS activity and NO bioavailability
- Increased reactive oxygen species (ROS)
- Upregulation of adhesion molecules:
  - VCAM-1 (vascular cell adhesion molecule-1)
  - ICAM-1 (intercellular adhesion molecule-1)
  - E-selectin, P-selectin
- Increased endothelial permeability

**Lipid Retention and Modification:**
- Apolipoprotein B-containing particles (LDL, VLDL) enter intima
- Retention via proteoglycan binding
- Oxidative modification by:
  - Lipoxygenases
  - Myeloperoxidase
  - ROS from macrophages
- Oxidized LDL triggers inflammatory cascade

**Inflammatory Response:**
- Monocyte recruitment via MCP-1 (CCL2)
- Macrophage differentiation (M-CSF)
- Scavenger receptor uptake (SR-A, CD36)
- Foam cell formation
- Cytokine production (IL-1β, IL-6, TNF-α)
- NLRP3 inflammasome activation

**Plaque Progression and Vulnerability:**

| Stable Plaque | Vulnerable Plaque |
|---------------|-------------------|
| Thick fibrous cap (>65 μm) | Thin fibrous cap (<65 μm) |
| Small lipid core | Large lipid/necrotic core (>40% volume) |
| Few inflammatory cells | Abundant macrophages |
| SMC-rich | SMC apoptosis |
| More collagen | Less collagen, MMP activity |

**Plaque Rupture Mechanisms:**
- Matrix metalloproteinases (MMP-2, MMP-9) degrade collagen
- Macrophage and mast cell proteases
- Hemodynamic stress at plaque shoulders
- Circumferential wall stress

### Atherothrombosis

**Thrombogenic Elements:**
- Tissue factor exposure from necrotic core
- Collagen exposure activates platelets
- Von Willebrand factor mediates adhesion
- Platelet activation: GPIIb/IIIa, P2Y12, TXA2

**Coagulation Cascade Activation:**
- Tissue factor-factor VIIa complex
- Factor Xa and thrombin generation
- Fibrin mesh formation
- Thrombus propagation

### Risk Assessment Tools

**ASCVD Risk Calculator:**
- 10-year risk of MI, stroke, CV death
- Variables: Age, sex, race, cholesterol, SBP, HTN treatment, diabetes, smoking
- Guides statin therapy intensity

**Coronary Artery Calcium (CAC) Score:**
- Agatston scoring
- CAC = 0: Very low risk, may defer statin
- CAC 1-99: Low-moderate risk
- CAC 100-399: Moderate-high risk
- CAC ≥400: High risk, high-intensity statin

**CT-FFR:**
- Computational FFR from CTA images
- Non-invasive physiologic assessment
- Correlates with invasive FFR

### Landmark Clinical Trials

**COURAGE (2007):**
- Stable CAD: PCI + OMT vs OMT alone
- No difference in death or MI at 4.6 years
- PCI improved angina initially, but converged by 3 years

**FAME (2009):**
- FFR-guided PCI vs angiography-guided PCI
- FFR guidance: Fewer stents, better outcomes

**FAME 2 (2012):**
- FFR-positive lesions: PCI + OMT vs OMT
- PCI reduced urgent revascularization
- No mortality difference

**ISCHEMIA (2020):**
- Moderate-severe ischemia on stress testing
- Invasive strategy vs conservative strategy
- No difference in CV death, MI, hospitalization
- Invasive improved angina and quality of life
- Excluded: Left main disease, low EF, recent ACS

**ISCHEMIA-CKD (2020):**
- Advanced CKD (eGFR <30)
- No benefit of invasive strategy
- Higher procedural complications

### Guideline-Directed Medical Therapy

**Antiplatelet Therapy:**

*Chronic CAD:*
- Aspirin 75-100 mg daily
- Consider rivaroxaban 2.5 mg BID (COMPASS trial) if high risk

*Post-ACS:*
- DAPT for 12 months (minimum 6 months if bleeding risk)
- Aspirin + ticagrelor (PLATO) or prasugrel (TRITON-TIMI 38)
- Consider extended DAPT (PEGASUS-TIMI 54)

*Post-PCI:*
- DAPT duration based on bleeding risk (DAPT, PRECISE-DAPT scores)
- DES: Minimum 6 months, consider 1 month if high bleeding risk (ONYX ONE)

**Lipid Therapy:**

| Risk Category | LDL Goal | Therapy |
|---------------|----------|---------|
| Very high risk (ASCVD + high-risk features) | <55 mg/dL | High-intensity statin + ezetimibe ± PCSK9i |
| ASCVD | <70 mg/dL | High-intensity statin |
| High risk (no ASCVD) | <100 mg/dL | Moderate-high intensity statin |

**Anti-Inflammatory Therapy:**
- Colchicine 0.5 mg daily (COLCOT, LoDoCo2)
- Reduces CV events by ~25%
- Particularly post-MI

### Revascularization Decisions

**SYNTAX Score:**
- Anatomic complexity scoring system
- Low (0-22): PCI or CABG equivalent
- Intermediate (23-32): CABG preferred
- High (>32): CABG strongly preferred

**SYNTAX II:**
- Incorporates clinical variables
- Better predicts outcomes than anatomic score alone

**Left Main Disease:**
- CABG preferred if SYNTAX >22
- PCI acceptable if SYNTAX ≤22 and favorable anatomy
- EXCEL, NOBLE trials inform decisions`,
      keyTerms: [
        { term: 'inflammasome', definition: 'Multiprotein complex (NLRP3) that activates inflammatory cytokines IL-1β and IL-18 in response to cholesterol crystals and oxidized lipids' },
        { term: 'SYNTAX score', definition: 'Anatomic scoring system for coronary disease complexity; guides revascularization strategy between PCI and CABG' },
        { term: 'PCSK9 inhibitor', definition: 'Monoclonal antibody that blocks PCSK9, increasing LDL receptor recycling and dramatically lowering LDL cholesterol' },
        { term: 'colchicine', definition: 'Anti-inflammatory drug targeting neutrophils and NLRP3 inflammasome; reduces cardiovascular events in chronic CAD' },
        { term: 'DAPT score', definition: 'Risk score balancing ischemic and bleeding risk to guide duration of dual antiplatelet therapy post-PCI' },
        { term: 'complete revascularization', definition: 'Treatment of all significant coronary stenoses; associated with better outcomes than culprit-only treatment in some ACS trials' },
      ],
      clinicalNotes: 'The ISCHEMIA trial changed our approach to stable CAD: revascularization is now primarily for symptom control rather than prognosis in patients without left main disease and with preserved EF. However, ensure guideline-directed medical therapy is optimized. Consider colchicine 0.5 mg daily as an anti-inflammatory strategy based on COLCOT and LoDoCo2.',
    },
    5: {
      level: 5,
      summary: 'Contemporary coronary artery disease management integrates precision imaging, physiologic lesion assessment, intensive lipid lowering with novel agents, and anti-inflammatory strategies, with evolving evidence on complete revascularization, bioresorbable scaffolds, and the role of genetics and biomarkers in risk stratification and personalized therapy.',
      explanation: `## Precision Diagnostics

### Advanced Imaging

**Intravascular Imaging:**
- **IVUS (Intravascular Ultrasound):**
  - Plaque burden assessment
  - Stent optimization (IVUS-XPL, ULTIMATE trials)
  - Minimum stent area predicts restenosis

- **OCT (Optical Coherence Tomography):**
  - 10x higher resolution than IVUS
  - Fibrous cap thickness measurement
  - TCFA identification (<65 μm cap)
  - Stent strut coverage assessment
  - ILUMIEN III, IV trials

**Plaque Characterization:**
- Virtual histology IVUS
- Near-infrared spectroscopy (NIRS): Lipid core burden index
- Combined NIRS-IVUS catheters
- PROSPECT, PROSPECT II: Vulnerable plaque identification

**Cardiac MRI:**
- Myocardial viability assessment
- Late gadolinium enhancement
- Stress perfusion imaging
- No radiation exposure

### Physiologic Assessment

**Invasive Indices:**
| Index | Threshold | Hyperemia Required |
|-------|-----------|-------------------|
| FFR | ≤0.80 | Yes (adenosine) |
| iFR | ≤0.89 | No |
| RFR | ≤0.89 | No |
| dPR | ≤0.89 | No |

**Microvascular Assessment:**
- Index of microcirculatory resistance (IMR)
- Coronary flow reserve (CFR)
- Hyperemic microvascular resistance (HMR)
- INOCA (ischemia with non-obstructive coronary arteries)

### Computational Approaches

**CT-FFR (HeartFlow):**
- Computational fluid dynamics from CTA
- 86% accuracy vs invasive FFR
- PLATFORM, ADVANCE trials

**QFR (Quantitative Flow Ratio):**
- Angiography-derived FFR
- Real-time cath lab assessment

## Pharmacotherapy: Cutting Edge

### Lipid Lowering

**PCSK9 Inhibitors:**
- Evolocumab (Repatha), Alirocumab (Praluent)
- LDL reduction ~60% on top of statin
- FOURIER: 15% CV event reduction
- ODYSSEY OUTCOMES: 15% reduction post-ACS
- NNT ~50-60 over 2-3 years

**Bempedoic Acid:**
- ACL inhibitor (upstream of HMG-CoA reductase)
- CLEAR Outcomes: 13% reduction in CV events
- No effect on muscles (not activated in muscle tissue)
- Option for statin-intolerant patients

**Inclisiran:**
- siRNA targeting PCSK9 hepatic synthesis
- Twice-yearly dosing
- 50% LDL reduction
- ORION program ongoing for outcomes

**Lp(a)-Lowering:**
- Elevated Lp(a) in 20% of population
- Independent risk factor
- Pelacarsen (ASO): ~80% Lp(a) reduction
- Phase 3 outcomes trial (Lp(a)HORIZON) ongoing

### Anti-Inflammatory Therapy

**CANTOS (2017):**
- Canakinumab (IL-1β antibody)
- 15% reduction in CV events
- Proof of concept for inflammation hypothesis
- Not approved (infection risk, cost)

**COLCOT (2019):**
- Colchicine 0.5 mg daily post-MI
- 23% reduction in CV events
- Low cost, well-tolerated

**LoDoCo2 (2020):**
- Colchicine 0.5 mg in chronic CAD
- 31% reduction in CV events
- FDA approved for ASCVD

**Ongoing Trials:**
- Ziltivekimab (IL-6 inhibitor): ZEUS trial
- Low-dose methotrexate: Negative in CIRT

### Antithrombotic Strategies

**COMPASS (2017):**
- Rivaroxaban 2.5 mg BID + aspirin vs aspirin alone
- 24% reduction in CV events
- Increased bleeding (non-fatal)
- Consider in stable CAD without high bleeding risk

**Extended DAPT vs DAPT + Anticoagulation:**
- VOYAGER PAD: Rivaroxaban in PAD post-revascularization
- ATLAS ACS 2: Rivaroxaban post-ACS

## Revascularization: Current Evidence

### Complete Revascularization in STEMI

**COMPLETE (2019):**
- Complete revascularization vs culprit-only
- 26% reduction in CV death/MI
- Supports staged complete revascularization

**FIRE (2024):**
- FFR-guided complete revascularization in STEMI
- Improved outcomes with physiology guidance

### Bifurcation Lesions

**EBC MAIN (2022):**
- Culotte vs provisional stenting for left main bifurcation
- Similar outcomes
- Provisional strategy simpler

### Chronic Total Occlusions (CTOs)

- Technical success rates improving (>85% in expert centers)
- Hybrid algorithm approach
- EURO-CTO, RECHARGE registries
- Outcomes data mixed (EXPLORE, DECISION-CTO neutral)
- Consider for symptoms, viability

### Drug-Coated Balloons

- Alternative to stents in some situations
- In-stent restenosis: DCB non-inferior to DES
- Small vessels, bifurcations
- DEBUT, BASKET-SMALL 2 trials

### Bioresorbable Scaffolds

- Early promise: "Leave nothing behind"
- ABSORB trials: Higher thrombosis rates
- Second-generation designs under development
- Currently not recommended routinely

## Special Populations

### INOCA/MINOCA

**Ischemia with Non-Obstructive Coronary Arteries:**
- 50% of women with angina
- Microvascular dysfunction
- Epicardial vasospasm
- Diagnostic protocol: Acetylcholine challenge, CFR, IMR
- Treatment: CCB, nitrates, ranolazine, imipramine

**Myocardial Infarction with Non-Obstructive Coronary Arteries:**
- 5-10% of MI presentations
- Differential: Plaque rupture/erosion with recanalization, vasospasm, spontaneous coronary dissection, Takotsubo, myocarditis
- Cardiac MRI essential

### Spontaneous Coronary Artery Dissection (SCAD)

- Young women, peripartum
- Conservative management preferred
- High recurrence with PCI
- Fibromuscular dysplasia screening
- Genetic counseling in some cases

### CABG vs PCI: 2024 Update

**Left Main Disease:**
- EXCEL 5-year: Higher mortality with PCI (controversial)
- NOBLE 5-year: CABG superior
- Guidelines favor CABG if SYNTAX >22

**Multivessel Disease:**
- SYNTAX: CABG superior for complex disease
- BEST (diabetics): CABG superior
- FREEDOM: CABG superior in diabetics
- ISCHEMIA surgical substudy: Similar outcomes in less complex disease

## Future Directions

### Precision Medicine

**Genetic Risk Scores:**
- Polygenic risk scores for CAD
- May reclassify intermediate-risk patients
- Guide statin therapy initiation

**Pharmacogenomics:**
- CYP2C19 polymorphisms affect clopidogrel metabolism
- TAILOR-PCI: Genotype-guided therapy
- Consider ticagrelor/prasugrel in poor metabolizers

### Digital Health

- AI interpretation of coronary angiography
- Machine learning for risk prediction
- Wearable monitoring for silent ischemia
- Remote cardiac rehabilitation

### Novel Targets

- Antisense oligonucleotides (Lp(a), ANGPTL3)
- Gene editing approaches
- Plaque regression strategies
- Nanotechnology-based drug delivery`,
      keyTerms: [
        { term: 'TCFA', definition: 'Thin-cap fibroatheroma; vulnerable plaque with fibrous cap <65 μm overlying large lipid core, high rupture risk' },
        { term: 'inclisiran', definition: 'siRNA therapeutic targeting PCSK9 mRNA in liver; provides sustained LDL reduction with twice-yearly dosing' },
        { term: 'INOCA', definition: 'Ischemia with non-obstructive coronary arteries; encompasses microvascular dysfunction and vasospasm' },
        { term: 'index of microcirculatory resistance', definition: 'Invasive measure of coronary microvascular function; elevated IMR indicates microvascular dysfunction' },
        { term: 'lipoprotein(a)', definition: 'Genetically determined lipoprotein that is an independent cardiovascular risk factor; emerging therapeutic target' },
        { term: 'OCT', definition: 'Optical coherence tomography; high-resolution intravascular imaging using near-infrared light to characterize plaque morphology and assess stent apposition' },
      ],
      clinicalNotes: `Key clinical pearls for advanced CAD management:

1. **Optimize medical therapy first**: ISCHEMIA showed no mortality benefit of revascularization over OMT in stable CAD without left main disease. Ensure LDL <70 (or <55 for very high risk), aspirin, and high-intensity statin.

2. **Consider colchicine 0.5 mg daily**: Based on COLCOT and LoDoCo2, this is now guideline-recommended for secondary prevention in ASCVD.

3. **Use physiology for intermediate lesions**: FFR or iFR should guide revascularization decisions, especially in multivessel disease. Angiography alone overestimates significance.

4. **Intravascular imaging for complex PCI**: IVUS or OCT improves outcomes for left main and complex bifurcation stenting through optimization of stent sizing and expansion.

5. **Complete revascularization in STEMI**: COMPLETE trial supports staged complete revascularization for better outcomes.

6. **INOCA is real and treatable**: Consider invasive functional testing with acetylcholine challenge and CFR/IMR measurement in patients with angina and non-obstructive CAD.

7. **Lp(a) measurement**: Check once in lifetime; if elevated (>50 mg/dL), intensify risk factor modification and consider clinical trial enrollment.

8. **Genetic testing for antiplatelets**: CYP2C19 testing may guide P2Y12 inhibitor selection, particularly for PCI patients.`,
    },
  },

  media: [
    {
      id: 'atherosclerosis-progression',
      type: 'diagram',
      filename: 'atherosclerosis-progression.svg',
      title: 'Atherosclerotic Plaque Progression',
      description: 'Stages of plaque development from fatty streak to vulnerable plaque',
    },
    {
      id: 'coronary-anatomy',
      type: 'diagram',
      filename: 'coronary-anatomy.svg',
      title: 'Coronary Artery Anatomy',
      description: 'Major coronary arteries and their territories',
    },
    {
      id: 'acs-spectrum',
      type: 'diagram',
      filename: 'acs-spectrum.svg',
      title: 'Acute Coronary Syndromes Spectrum',
      description: 'Relationship between UA, NSTEMI, and STEMI',
    },
  ],

  citations: [
    {
      id: 'acc-aha-ccd-2023',
      type: 'article',
      title: '2023 AHA/ACC/ACCP/ASPC/NLA/PCNA Guideline for the Management of Patients With Chronic Coronary Disease',
      authors: ['Virani SS', 'Newby LK', 'Arnold SV', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000001168',
    },
    {
      id: 'ischemia-trial',
      type: 'article',
      title: 'Initial Invasive or Conservative Strategy for Stable Coronary Disease',
      authors: ['ISCHEMIA Trial Research Group'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1915922',
    },
    {
      id: 'libby-atherosclerosis',
      type: 'article',
      title: 'The changing landscape of atherosclerosis',
      authors: ['Libby P'],
      source: 'Nature',
      url: 'https://doi.org/10.1038/s41586-021-03392-8',
    },
  ],

  crossReferences: [
    { targetId: 'condition-hypertension', targetType: 'condition', relationship: 'related', label: 'Hypertension' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'condition-atrial-fibrillation', targetType: 'condition', relationship: 'related', label: 'Atrial Fibrillation' },
    { targetId: 'condition-peripheral-artery-disease', targetType: 'condition', relationship: 'related', label: 'Peripheral Artery Disease' },
    { targetId: 'structure-heart', targetType: 'structure', relationship: 'related', label: 'Heart' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'atherosclerosis', 'ischemia', 'interventional cardiology'],
    keywords: ['CAD', 'angina', 'myocardial infarction', 'stent', 'CABG', 'atherosclerosis', 'cholesterol'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default coronaryArteryDisease;
