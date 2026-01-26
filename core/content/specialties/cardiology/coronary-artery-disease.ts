/**
 * Coronary Artery Disease (CAD) - Comprehensive Educational Content
 *
 * Covers anatomy, pathophysiology, clinical presentation, diagnosis, and treatment
 * of atherosclerotic coronary artery disease and acute coronary syndromes.
 */

import { EducationalContent } from '../../types';

export const coronaryArteryDisease: EducationalContent = {
  id: 'condition-coronary-artery-disease',
  type: 'condition',
  name: 'Coronary Artery Disease',
  alternateNames: ['CAD', 'Coronary Heart Disease', 'CHD', 'Ischemic Heart Disease', 'IHD', 'Atherosclerotic Heart Disease'],
  hpoId: 'HP:0001677',

  levels: {
    1: {
      level: 1,
      summary: 'Coronary artery disease happens when the blood vessels that feed your heart become clogged with fatty deposits, making it hard for blood to reach your heart muscle.',
      explanation: `Your heart is a muscle that works all day and night, and like any muscle, it needs food and oxygen to work properly. The heart gets its own blood supply through special tubes called coronary arteries that wrap around the outside of your heart.

Sometimes, a sticky substance called plaque (made of fat, cholesterol, and other things) builds up inside these tubes, kind of like how gunk can build up inside a drain pipe. When this happens, the tubes get narrower and less blood can flow through them.

When your heart doesn't get enough blood:
- You might feel chest pain or pressure (called angina)
- You might feel short of breath when you exercise
- In serious cases, a piece of plaque can break off and completely block the tube, causing a heart attack

**What causes plaque to build up?**
- Eating too many fatty foods
- Not getting enough exercise
- Smoking
- Having high blood pressure or diabetes
- It also runs in families

**How to keep your heart healthy:**
- Eat lots of fruits, vegetables, and whole grains
- Exercise regularly (walking, swimming, biking)
- Don't smoke
- See your doctor for regular check-ups`,
      keyTerms: [
        { term: 'coronary arteries', definition: 'The blood vessels that bring blood to your heart muscle' },
        { term: 'plaque', definition: 'A sticky buildup of fat and other substances inside blood vessels' },
        { term: 'angina', definition: 'Chest pain or discomfort that happens when your heart needs more blood than it\'s getting' },
        { term: 'heart attack', definition: 'When blood flow to part of the heart is completely blocked, damaging the heart muscle' },
      ],
      analogies: [
        'Coronary arteries are like water pipes that can get clogged with buildup over time.',
        'Plaque building up in your arteries is like rust forming inside a pipe - it makes the opening smaller.',
        'A heart attack is like a traffic jam that completely stops all cars from getting through.',
      ],
      examples: [
        'Someone with CAD might feel chest tightness when climbing stairs because their heart isn\'t getting enough blood.',
        'Many people take a daily aspirin to help prevent clots from forming on the plaque.',
      ],
    },
    2: {
      level: 2,
      summary: 'Coronary artery disease is caused by atherosclerosis - the buildup of plaque inside coronary arteries that reduces blood flow to the heart muscle, leading to symptoms ranging from stable angina to heart attack.',
      explanation: `## Anatomy of Coronary Arteries

The heart receives blood through two main coronary arteries that branch off the aorta:

**Left Coronary Artery (LCA):**
- Left Main (LM) - short trunk that divides into:
  - Left Anterior Descending (LAD) - supplies front and bottom of left ventricle
  - Left Circumflex (LCx) - supplies back and side of left ventricle

**Right Coronary Artery (RCA):**
- Supplies right ventricle and bottom of heart
- In most people, supplies the SA and AV nodes

## What is Atherosclerosis?

Atherosclerosis is the disease process where plaque builds up in artery walls:
1. Damage to the inner lining of the artery (from high blood pressure, smoking, high cholesterol)
2. White blood cells enter and become "foam cells" filled with cholesterol
3. A fatty streak forms and grows into a plaque
4. Plaque can become hard (calcified) or soft (lipid-rich)
5. Soft plaques are more likely to rupture and cause blood clots

## Clinical Presentations

**Stable Angina:**
- Chest pain/pressure that happens predictably with exertion
- Relieved by rest or nitroglycerin within minutes
- Caused by stable plaques narrowing the artery

**Unstable Angina:**
- New or worsening chest pain
- Occurs at rest or with minimal exertion
- Caused by plaque rupture with partial clot formation
- Medical emergency

**Heart Attack (Myocardial Infarction):**
- Complete blockage of a coronary artery
- Chest pain lasting more than 20 minutes, not relieved by rest
- Can cause permanent damage to heart muscle
- Requires immediate emergency treatment

## Risk Factors

**Non-modifiable:**
- Age (men >45, women >55)
- Male sex
- Family history of early heart disease
- Race/ethnicity

**Modifiable:**
- High LDL cholesterol
- Low HDL cholesterol
- High blood pressure
- Diabetes
- Smoking
- Obesity
- Physical inactivity
- Poor diet`,
      keyTerms: [
        { term: 'atherosclerosis', definition: 'Disease where plaque builds up inside arteries', pronunciation: 'ath-er-oh-skleh-ROH-sis' },
        { term: 'left anterior descending (LAD)', definition: 'Major coronary artery that supplies the front of the heart; often called "the widow maker"' },
        { term: 'stable angina', definition: 'Predictable chest pain with exertion that goes away with rest' },
        { term: 'unstable angina', definition: 'New or worsening chest pain that may occur at rest; a medical emergency' },
        { term: 'myocardial infarction', definition: 'Heart attack - death of heart muscle from blocked blood supply', pronunciation: 'my-oh-KAR-dee-al in-FARK-shun' },
      ],
      analogies: [
        'The left main coronary artery is like a tree trunk that splits into two main branches (LAD and LCx).',
        'Stable angina is like a car engine warning light that comes on when you push it too hard but turns off when you slow down.',
      ],
    },
    3: {
      level: 3,
      summary: 'Coronary artery disease results from progressive atherosclerotic plaque formation in epicardial coronary arteries, characterized by endothelial dysfunction, lipid accumulation, inflammation, and fibrous cap formation, with acute coronary syndromes arising from plaque rupture and thrombosis.',
      explanation: `## Coronary Anatomy and Physiology

### Arterial Distribution

**Left Coronary System:**
- Left Main (LM): 1-2 cm, bifurcates/trifurcates
- Left Anterior Descending (LAD):
  - Diagonal branches (D1, D2, D3)
  - Septal perforators
  - Supplies anterior LV, anterior septum, apex
- Left Circumflex (LCx):
  - Obtuse marginal branches (OM1, OM2)
  - Supplies lateral and posterolateral LV
- Ramus intermedius (if trifurcation): Supplies lateral wall

**Right Coronary System:**
- Right Coronary Artery (RCA):
  - Acute marginal branches
  - Posterior descending artery (PDA) - in 85% (right dominant)
  - Posterolateral branches
  - SA nodal artery (60%), AV nodal artery (80%)
  - Supplies RV, inferior LV, posterior septum

### Dominance
- Right dominant (85%): RCA gives rise to PDA
- Left dominant (8%): LCx gives rise to PDA
- Co-dominant (7%): Both contribute to PDA

## Pathophysiology of Atherosclerosis

### Initiation
1. Endothelial dysfunction from shear stress, hypertension, toxins
2. Increased permeability to LDL particles
3. LDL oxidation in subendothelial space

### Progression
4. Monocyte recruitment via adhesion molecules (VCAM-1, ICAM-1)
5. Monocyte differentiation to macrophages
6. Macrophage uptake of oxidized LDL - foam cell formation
7. Smooth muscle cell migration and proliferation
8. Extracellular matrix deposition (collagen, elastin)
9. Necrotic core formation from dead foam cells
10. Fibrous cap formation over lipid core

### Plaque Types
- **Stable plaque**: Thick fibrous cap, small lipid core, low inflammation
- **Vulnerable plaque**: Thin fibrous cap (<65 microns), large lipid core, active inflammation

### Acute Plaque Events
- Plaque rupture: Fibrous cap disruption exposing thrombogenic core
- Plaque erosion: Endothelial denudation without rupture
- Calcific nodule: Eruption of calcific nodule through fibrous cap

## Acute Coronary Syndromes (ACS)

### Classification
| Syndrome | ECG Changes | Troponin | Pathology |
|----------|-------------|----------|-----------|
| Unstable Angina | ST depression, T wave inversion, or normal | Negative | Partial occlusion, no necrosis |
| NSTEMI | ST depression, T wave inversion | Elevated | Partial occlusion with necrosis |
| STEMI | ST elevation | Elevated | Complete occlusion with transmural necrosis |

### ECG Localization
- Anterior MI: V1-V4 (LAD)
- Lateral MI: I, aVL, V5-V6 (LCx or diagonal)
- Inferior MI: II, III, aVF (RCA or LCx)
- Posterior MI: ST depression V1-V3 (RCA or LCx)
- Right ventricular: ST elevation V4R (proximal RCA)

## Diagnosis

### Biomarkers
- **Troponin I/T**: Most specific, rises 3-6 hours, peaks 24 hours
- **High-sensitivity troponin**: Detects smaller infarcts, faster detection
- **CK-MB**: Less specific, useful for reinfarction detection

### Stress Testing
- Exercise ECG: Standard screening
- Stress echocardiography: Regional wall motion abnormalities
- Myocardial perfusion imaging (SPECT/PET): Perfusion defects
- Stress CMR: Wall motion and perfusion

### Invasive Assessment
- Coronary angiography: Gold standard for anatomy
- Fractional flow reserve (FFR): Physiologic significance (abnormal <0.80)
- Intravascular ultrasound (IVUS): Plaque characterization
- Optical coherence tomography (OCT): High-resolution imaging`,
      keyTerms: [
        { term: 'endothelial dysfunction', definition: 'Impaired function of the artery inner lining that initiates atherosclerosis' },
        { term: 'vulnerable plaque', definition: 'Atherosclerotic plaque with thin fibrous cap prone to rupture' },
        { term: 'STEMI', definition: 'ST-elevation myocardial infarction - complete coronary occlusion with transmural necrosis' },
        { term: 'NSTEMI', definition: 'Non-ST-elevation myocardial infarction - partial occlusion with subendocardial necrosis' },
        { term: 'fractional flow reserve', definition: 'Pressure-based measure of coronary lesion physiologic significance', pronunciation: 'FFR' },
        { term: 'troponin', definition: 'Cardiac-specific protein released with myocardial injury; gold standard biomarker' },
      ],
      clinicalNotes: 'Left main disease and proximal LAD disease carry the highest mortality risk. FFR-guided revascularization improves outcomes compared to angiography-alone decision making.',
    },
    4: {
      level: 4,
      summary: 'CAD pathogenesis involves complex interactions between lipoprotein metabolism, endothelial biology, inflammation, and thrombosis, with acute coronary syndromes representing a spectrum of plaque instability and thrombotic occlusion requiring risk-stratified management.',
      explanation: `## Advanced Pathophysiology

### Lipoprotein Metabolism in Atherogenesis

**Atherogenic Lipoproteins:**
- LDL: Primary driver of atherosclerosis
- Lipoprotein(a): Independent risk factor, promotes thrombosis
- Remnant particles: VLDL remnants highly atherogenic
- Small dense LDL: More easily oxidized, more atherogenic

**Protective Lipoproteins:**
- HDL: Reverse cholesterol transport, anti-inflammatory, antioxidant
- ApoA-I: Key structural protein of HDL

**Genetic Influences:**
- PCSK9: Regulates LDL receptor degradation
- Familial hypercholesterolemia (FH): LDL receptor mutations
- Lipoprotein(a): Primarily genetically determined

### Inflammation in Atherosclerosis

**Inflammatory Markers:**
- High-sensitivity CRP (hsCRP): Systemic inflammation marker
- IL-6, IL-1beta: Pro-inflammatory cytokines
- CANTOS trial: Anti-IL-1beta (canakinumab) reduced CV events

**Inflammatory Cells:**
- Macrophages: M1 (pro-inflammatory) vs M2 (resolution)
- T lymphocytes: Th1 cells promote plaque progression
- Neutrophils: Contribute to plaque erosion

### Plaque Rupture Mechanisms

**Vulnerable Plaque Features:**
- Large lipid-rich necrotic core (>40% of plaque volume)
- Thin fibrous cap (<65 microns)
- Active inflammation (macrophage-rich)
- Positive remodeling (outward growth)
- Spotty calcification
- Neovascularization

**Triggers of Rupture:**
- Physical stress (blood pressure surge, exercise)
- Matrix metalloproteinase (MMP) degradation of collagen
- Macrophage apoptosis and necrosis
- Intraplaque hemorrhage from vasa vasorum

### Thrombosis Cascade

1. Plaque rupture exposes tissue factor
2. Tissue factor activates factor VII
3. Thrombin generation
4. Platelet activation and aggregation
5. Fibrin mesh formation
6. Red thrombus with complete occlusion (STEMI) vs white thrombus with partial occlusion (NSTEMI)

## Clinical Risk Stratification

### Chronic Coronary Syndromes

**Pre-test Probability Assessment:**
- Age, sex, symptom typicality
- Risk factors
- ECG findings

**HEART Score (for ACS):**
- History
- ECG
- Age
- Risk factors
- Troponin
- 0-3: Low risk, 4-6: Intermediate, 7-10: High risk

**TIMI Risk Score (NSTE-ACS):**
- Age ≥65
- ≥3 CAD risk factors
- Known CAD (≥50% stenosis)
- ASA use in past 7 days
- Severe angina (≥2 episodes in 24h)
- ST changes ≥0.5mm
- Elevated cardiac markers

### Acute Coronary Syndrome Management

**STEMI:**
- Primary PCI preferred (goal door-to-balloon <90 min)
- Fibrinolysis if PCI not available within 120 min
- Pharmacoinvasive strategy if fibrinolysis given

**NSTE-ACS:**
- Early invasive strategy for high-risk features
- Ischemia-guided strategy for low-risk patients

**Antiplatelet Therapy:**
- Aspirin: Irreversible COX-1 inhibition
- P2Y12 inhibitors:
  - Clopidogrel: Prodrug, variable metabolism (CYP2C19)
  - Prasugrel: More potent, more bleeding
  - Ticagrelor: Reversible, dyspnea side effect

**Anticoagulation:**
- Unfractionated heparin: Titratable, reversible
- Enoxaparin: Fixed dosing, renal adjustment
- Bivalirudin: Direct thrombin inhibitor, less bleeding

## Revascularization Strategies

### PCI Considerations

**Stent Types:**
- Bare metal stents (BMS): Rare use now
- Drug-eluting stents (DES): Standard of care
  - Everolimus, zotarolimus: Current generation
  - Reduce in-stent restenosis

**Complex PCI:**
- Left main PCI: Increasingly performed in selected patients
- Chronic total occlusion (CTO): Requires specialized techniques
- Calcified lesions: Atherectomy, intravascular lithotripsy

### CABG Considerations

**Indications:**
- Left main disease
- Three-vessel disease with diabetes
- Complex CAD (high SYNTAX score)
- Failed PCI

**Graft Selection:**
- Left internal mammary artery (LIMA) to LAD: Gold standard
- Radial artery: Second best long-term patency
- Saphenous vein: Higher failure rates

**SYNTAX Score:**
- Anatomic complexity scoring
- Low (0-22): PCI comparable to CABG
- Intermediate (23-32): Case-by-case
- High (≥33): CABG preferred`,
      keyTerms: [
        { term: 'PCSK9', definition: 'Proprotein convertase subtilisin/kexin type 9; degrades LDL receptors; inhibitors dramatically lower LDL' },
        { term: 'tissue factor', definition: 'Thrombogenic protein in plaque core that initiates coagulation cascade upon exposure' },
        { term: 'SYNTAX score', definition: 'Angiographic scoring system quantifying coronary disease complexity to guide revascularization strategy' },
        { term: 'drug-eluting stent', definition: 'Coronary stent coated with antiproliferative drug to reduce restenosis' },
        { term: 'TIMI risk score', definition: 'Seven-variable risk stratification tool for NSTE-ACS patients' },
        { term: 'door-to-balloon time', definition: 'Interval from hospital arrival to first device in culprit artery; target <90 minutes for STEMI' },
      ],
      clinicalNotes: 'Current guidelines recommend ticagrelor or prasugrel over clopidogrel for ACS. P2Y12 inhibitor pretreatment is not recommended for NSTE-ACS unless coronary anatomy is known. The ISCHEMIA trial showed no benefit for routine invasive strategy in stable CAD with moderate-severe ischemia.',
    },
    5: {
      level: 5,
      summary: 'Contemporary CAD management integrates precision medicine approaches, advanced imaging for plaque characterization, physiologic lesion assessment, optimal medical therapy, and individualized revascularization decisions based on randomized trial data and guideline recommendations.',
      explanation: `## Current Guidelines and Evidence

### Chronic Coronary Syndromes (ESC 2019, ACC/AHA 2021)

**Diagnostic Pathway:**
1. Clinical pre-test probability assessment
2. Low PTP (<15%): No testing or CAC scoring
3. Intermediate PTP: Functional imaging preferred over anatomic
4. High PTP or known CAD: Consider direct catheterization

**Coronary Artery Calcium (CAC) Scoring:**
- Improves risk reclassification
- CAC = 0: Very low 10-year ASCVD risk (<5%)
- CAC >100 or >75th percentile: Statin recommended
- CAC >300: Consider aspirin

**CT Coronary Angiography (CCTA):**
- High negative predictive value
- PROMISE trial: Comparable outcomes to functional testing
- SCOT-HEART trial: CCTA reduced MI compared to standard care
- FFR-CT: Noninvasive physiologic assessment

### Optimal Medical Therapy

**Lipid Management:**
- High-intensity statin for all ASCVD
- LDL target <70 mg/dL (or <55 mg/dL very high risk)
- Add ezetimibe if not at goal
- PCSK9 inhibitors for high-risk patients not at goal
- Bempedoic acid: Alternative for statin intolerance
- Inclisiran: siRNA targeting PCSK9 (twice yearly dosing)

**Antiplatelet Therapy (Chronic):**
- Aspirin monotherapy for stable CAD
- Prolonged DAPT vs aspirin monotherapy: Risk-benefit balance
- COMPASS trial: Rivaroxaban 2.5mg BID + aspirin reduced CV events
- TWILIGHT trial: Ticagrelor monotherapy after short DAPT feasible

**Anti-anginal Medications:**
- Beta-blockers: First-line for angina and post-MI
- Calcium channel blockers: Alternative or add-on
- Long-acting nitrates: Add-on therapy
- Ranolazine: Late sodium current inhibitor, no mortality benefit

**ACE Inhibitors/ARBs:**
- All patients with LVEF <40%
- Consider for all CAD patients (HOPE, EUROPA trials)

### Acute Coronary Syndromes Update

**STEMI Management:**
- Radial access preferred (MATRIX, RIVAL trials)
- Complete revascularization: COMPLETE trial showed benefit
- Thrombus aspiration: Routine use not recommended (TOTAL trial)
- Culprit lesion only for cardiogenic shock (CULPRIT-SHOCK)

**NSTE-ACS Timing:**
- Very early (<2h): Refractory angina, hemodynamic instability
- Early (<24h): High-risk features (TIMACS trial)
- Invasive (<72h): Elevated troponin, dynamic changes
- Ischemia-guided: Low-risk patients

**Post-ACS Therapy Duration:**
- DAPT: 12 months standard (shorter in high bleeding risk)
- PEGASUS-TIMI 54: Extended ticagrelor in stable post-MI
- Extended dual pathway: Rivaroxaban + aspirin per COMPASS

### Revascularization Decisions

**PCI vs CABG in Multivessel Disease:**

| Trial | Population | Finding |
|-------|------------|---------|
| SYNTAX | LM/3VD | CABG superior for high SYNTAX |
| EXCEL | LM | Controversy: 5-yr outcomes favor CABG |
| NOBLE | LM | CABG superior at 5 years |
| BEST | MVD+DM | CABG superior with longer f/u |
| FREEDOM | DM+MVD | CABG reduces mortality |

**Complete vs Culprit-Only Revascularization:**
- STEMI: Complete revascularization recommended (COMPLETE)
- NSTE-ACS: Consider based on FFR guidance
- CULPRIT-SHOCK: Culprit-only in cardiogenic shock initially

### Advanced Imaging and Assessment

**Intravascular Imaging:**
- IVUS: Stent optimization improves outcomes (ULTIMATE trial)
- OCT: Better detection of edge dissection, malapposition
- Near-infrared spectroscopy (NIRS): Lipid core detection

**Physiology:**
- FFR cutoff: ≤0.80 for revascularization
- iFR cutoff: ≤0.89 (DEFINE-FLAIR, iFR-SWEDEHEART)
- Resting Pd/Pa indices: Comparable to iFR
- Microvascular disease: CFR, IMR assessment

**Plaque Imaging:**
- CCTA high-risk features: Low attenuation plaque, positive remodeling, napkin-ring sign
- CMR: Edema, hemorrhage, microvascular obstruction
- PET: Inflammation imaging with FDG, FMISO

### Emerging Therapies

**Novel Targets:**
- Anti-inflammatory: Colchicine (COLCOT, LoDoCo2)
- Triglyceride reduction: Icosapent ethyl (REDUCE-IT)
- Lipoprotein(a): Antisense/siRNA trials ongoing
- ANGPTL3 inhibition: Evinacumab

**Gene Therapy:**
- VERVE-101: PCSK9 gene editing
- One-time LDL lowering potential

**Regenerative Approaches:**
- Stem cell therapy: Limited efficacy in trials
- Cardiac patches: Investigational

### Secondary Prevention Bundle

**"ABCDE" Framework:**
- A: Antiplatelet/Anticoagulation, ACE-I
- B: Beta-blocker, Blood pressure <130/80
- C: Cholesterol (LDL <70), Cessation (smoking)
- D: Diet (Mediterranean), Diabetes control (HbA1c <7%)
- E: Exercise (cardiac rehabilitation)

**Cardiac Rehabilitation:**
- Class I recommendation for all ACS and revascularization
- 20-30% reduction in mortality
- Underutilized: <30% participation rate

### Special Populations

**Women:**
- More atypical presentations
- Higher bleeding risk with antiplatelet therapy
- MINOCA more common (microvascular, spontaneous dissection)

**Elderly:**
- Invasive strategy still beneficial (AFTER EIGHTY trial)
- Adjust antiplatelet intensity for bleeding risk

**Chronic Kidney Disease:**
- Higher event rates
- Contrast nephropathy consideration
- Adjust anticoagulant dosing

**Diabetes:**
- More aggressive LDL targets (<55 mg/dL)
- CABG preferred for multivessel disease
- SGLT2 inhibitors for CV risk reduction`,
      keyTerms: [
        { term: 'FFR-CT', definition: 'Noninvasive fractional flow reserve derived from coronary CT angiography; avoids invasive pressure measurement' },
        { term: 'MINOCA', definition: 'Myocardial infarction with non-obstructive coronary arteries; includes microvascular dysfunction, spontaneous coronary dissection, coronary spasm' },
        { term: 'PCSK9 inhibitors', definition: 'Monoclonal antibodies (evolocumab, alirocumab) that dramatically lower LDL by preventing LDL receptor degradation' },
        { term: 'inclisiran', definition: 'siRNA therapy targeting PCSK9 mRNA given twice yearly; 50% LDL reduction' },
        { term: 'ISCHEMIA trial', definition: 'Landmark 2020 trial showing no mortality benefit for routine invasive strategy in stable CAD with moderate-severe ischemia' },
        { term: 'COMPLETE trial', definition: 'Trial demonstrating benefit of complete revascularization over culprit-only PCI in STEMI' },
      ],
      clinicalNotes: `Key clinical pearls for CAD management:

1. **Risk Assessment**: Use 10-year ASCVD risk calculator; CAC improves risk stratification in intermediate-risk patients
2. **Lipid Therapy**: High-intensity statin + ezetimibe + PCSK9i as needed to achieve LDL <70 (or <55 in very high risk)
3. **STEMI**: Primary PCI is preferred; aim for door-to-balloon <90 min; radial access reduces bleeding; complete revascularization is beneficial
4. **Stable CAD**: ISCHEMIA trial: Invasive strategy reduces spontaneous MI but not death; OMT is reasonable first-line
5. **DAPT Duration**: Balance ischemic risk (DAPT score) vs bleeding risk (PRECISE-DAPT); shorter duration with current-generation DES is acceptable
6. **Revascularization**: Heart team discussion for complex disease; SYNTAX/SYNTAX II for risk stratification; CABG remains superior for DM+MVD and high SYNTAX
7. **Secondary Prevention**: Cardiac rehabilitation is underutilized but highly effective; colchicine emerging as anti-inflammatory adjunct
8. **Novel Therapies**: Consider icosapent ethyl for elevated TG; watch for Lp(a)-lowering trials; gene therapy may transform chronic disease management`,
    },
  },

  media: [
    {
      id: 'coronary-anatomy-diagram',
      type: 'diagram',
      filename: 'coronary-anatomy.svg',
      title: 'Coronary Artery Anatomy',
      description: 'Major coronary arteries and their distribution territories',
    },
    {
      id: 'atherosclerosis-progression',
      type: 'diagram',
      filename: 'atherosclerosis-stages.svg',
      title: 'Atherosclerosis Progression',
      description: 'Stages from fatty streak to complicated plaque',
    },
    {
      id: 'acs-ecg-patterns',
      type: 'diagram',
      filename: 'acs-ecg-patterns.svg',
      title: 'ACS ECG Patterns',
      description: 'ECG changes in STEMI, NSTEMI, and unstable angina',
    },
  ],

  citations: [
    {
      id: 'esc-ccs-2019',
      type: 'article',
      title: '2019 ESC Guidelines for the diagnosis and management of chronic coronary syndromes',
      authors: ['Knuuti, J.', 'et al.'],
      source: 'European Heart Journal',
      url: 'https://doi.org/10.1093/eurheartj/ehz425',
    },
    {
      id: 'acc-cad-2021',
      type: 'article',
      title: '2021 ACC/AHA/SCAI Guideline for Coronary Artery Revascularization',
      source: 'Journal of the American College of Cardiology',
    },
    {
      id: 'braunwald-heart-disease',
      type: 'textbook',
      title: 'Braunwald\'s Heart Disease',
      source: 'Elsevier',
      chapter: 'Stable Ischemic Heart Disease and Acute Coronary Syndromes',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'procedure-cardiac-catheterization', targetType: 'topic', relationship: 'related', label: 'Cardiac Catheterization' },
    { targetId: 'topic-ecg-interpretation', targetType: 'topic', relationship: 'related', label: 'ECG Interpretation' },
    { targetId: 'topic-cardiac-medications', targetType: 'topic', relationship: 'related', label: 'Cardiac Medications' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['pathology', 'therapeutics', 'interventional cardiology'],
    keywords: ['atherosclerosis', 'myocardial infarction', 'angina', 'stent', 'CABG', 'ACS'],
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

export default coronaryArteryDisease;
