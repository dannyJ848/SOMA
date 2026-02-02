/**
 * Stroke Comprehensive Encyclopedia Entries
 * 
 * Covers ischemic and hemorrhagic stroke, pathophysiology, diagnosis, treatment,
 * and rehabilitation at patient, intermediate, and professional levels.
 * 
 * Sources: AHA/ASA Guidelines, Stroke Council Recommendations,
 * NCBI StatPearls, UpToDate Clinical References
 */

import type { EncyclopediaEntry } from '../types';

// ═══════════════════════════════════════════════════════════════════════════════
// STROKE - MAIN ENTRY
// ═══════════════════════════════════════════════════════════════════════════════

export const strokeOverviewEntry: EncyclopediaEntry = {
  entryId: 'stroke',
  name: 'Stroke (Cerebrovascular Accident)',
  entryType: 'condition',
  category: 'neurologic',
  subcategory: 'cerebrovascular',
  summary: 'A medical emergency caused by interrupted blood supply to the brain, resulting in brain cell death and neurological deficits.',
  overview: {
    patient: 'A stroke is a medical emergency that occurs when blood flow to part of your brain is interrupted or reduced, depriving brain tissue of oxygen and nutrients. Within minutes, brain cells begin to die. There are two main types: ischemic stroke (caused by a blocked artery, about 85% of cases) and hemorrhagic stroke (caused by bleeding in or around the brain, about 15% of cases). Stroke is a leading cause of death and disability worldwide. Recognizing stroke symptoms quickly and seeking immediate medical attention is critical, as treatments are most effective within the first few hours. Remember the acronym FAST: Face drooping, Arm weakness, Speech difficulty, Time to call emergency services.',
    intermediate: 'Stroke is an acute cerebrovascular event characterized by focal (or sometimes global) neurological impairment lasting greater than 24 hours (or leading to death) due to central nervous system infarction or hemorrhage. Ischemic strokes result from arterial occlusion (thrombotic or embolic) causing cerebral infarction. Hemorrhagic strokes result from vessel rupture causing intracerebral hemorrhage (ICH) or subarachnoid hemorrhage (SAH). The ischemic penumbra represents salvageable tissue surrounding the irreversibly damaged infarct core. Time-dependent reperfusion therapies (IV thrombolysis within 4.5 hours, mechanical thrombectomy up to 24 hours in selected patients) can significantly improve outcomes. Comprehensive stroke care involves rapid assessment, neuroimaging, acute treatment, secondary prevention, and rehabilitation.',
    professional: 'Stroke is defined as an acute episode of focal or global neurological dysfunction caused by brain, spinal cord, or retinal vascular injury as a result of hemorrhage or infarction. Ischemic stroke (87% of cases in high-income countries) results from large artery atherosclerosis, cardioembolism (particularly atrial fibrillation), small vessel occlusion (lacunar infarcts), or other/undetermined etiologies (TOAST classification). Hemorrhagic stroke includes spontaneous intracerebral hemorrhage (10%, typically hypertensive or amyloid angiopathy) and aneurysmal or non-aneurysmal subarachnoid hemorrhage (3%). Pathophysiology involves excitotoxicity, calcium overload, oxidative stress, inflammation, and blood-brain barrier disruption. The "Time is Brain" concept reflects the estimated 1.9 million neuron loss per minute of untreated large vessel occlusion. Modern stroke systems of care emphasize prehospital notification, door-to-needle times <60 minutes for IV thrombolysis, and door-to-puncture times <90 minutes for endovascular therapy.',
  },
  content: [
    {
      title: 'Types of Stroke',
      content: {
        patient: `There are two main categories of stroke:

Ischemic Stroke (Blocked Artery): About 85% of all strokes. A blood clot blocks a blood vessel in the brain, cutting off oxygen supply. This can happen in three ways:
- Atherothrombotic: A fatty plaque buildup in a brain artery ruptures and forms a clot
- Cardioembolic: A clot forms in the heart (often due to irregular heartbeat) and travels to the brain
- Lacunar: Small vessel disease affects tiny deep brain arteries, often related to long-standing high blood pressure or diabetes

Hemorrhagic Stroke (Bleeding): About 15% of strokes, but more deadly. A blood vessel bursts and bleeds into or around the brain:
- Intracerebral Hemorrhage (ICH): Bleeding directly into brain tissue, usually from high blood pressure damaging small arteries
- Subarachnoid Hemorrhage (SAH): Bleeding into the space surrounding the brain, often from a ruptured brain aneurysm`,
        intermediate: `Ischemic Stroke Subtypes (TOAST Classification):
1. Large Artery Atherosclerosis: Stenosis or occlusion of major cerebral arteries (ICA, MCA, vertebral, basilar) from atherosclerotic plaque. Often causes cortical or large subcortical infarcts. May be due to local thrombosis or artery-to-artery embolism.

2. Cardioembolism: Emboli originating from cardiac sources. High-risk sources include atrial fibrillation (most common), mechanical heart valves, dilated cardiomyopathy with EF <30%, intracardiac thrombus, infective endocarditis. Causes sudden large territory infarcts, often with hemorrhagic transformation.

3. Small Vessel Occlusion (Lacunar): Occlusion of small penetrating arteries (100-800 um) supplying deep structures (basal ganglia, internal capsule, thalamus, pons). Associated with chronic hypertension and diabetes. Classic lacunar syndromes: pure motor, pure sensory, sensorimotor, ataxic hemiparesis, dysarthria-clumsy hand.

4. Stroke of Other Determined Etiology: Dissection, vasculitis, hypercoagulable states, moyamoya, CADASIL.

5. Stroke of Undetermined Etiology: Cryptogenic stroke despite complete evaluation.

Hemorrhagic Stroke:
- Intracerebral Hemorrhage: Spontaneous bleeding into brain parenchyma. Causes: hypertension (50-60%, deep locations), cerebral amyloid angiopathy (lobar hemorrhages in elderly), anticoagulation, vascular malformations (AVM, cavernous malformation), coagulopathy, vasculitis, sympathomimetic drugs.

- Subarachnoid Hemorrhage: Bleeding into subarachnoid space. Causes: saccular (berry) aneurysms (85%), non-aneurysmal perimesencephalic SAH, trauma, dissection, AVM, vasculitis, coagulopathy.`,
        professional: `Comprehensive Stroke Classification:

ISCHENIC STROKE ETIOLOGIC SUBTYPES:

Large Artery Atherosclerotic Disease:
- Aortic arch atheroma (>4mm thickness, mobile components): 5-10% of ischemic strokes, increased with age
- Extracranial carotid stenosis: >50% stenosis symptomatic; plaque morphology (ulceration, intraplaque hemorrhage) predicts events
- Intracranial atherosclerosis: Higher prevalence in Asian, Black, Hispanic populations; MCA > basilar > intracranial ICA; high recurrence risk without aggressive medical therapy (SAMMPRIS trial)
- Artery-to-artery embolism: Cholesterol, platelet-fibrin, or thrombotic emboli from proximal lesions

Cardioembolic Sources:
High risk (>5% annual stroke risk without anticoagulation):
- Atrial fibrillation (paroxysmal, persistent, permanent): CHA2DS2-VASc score guides risk stratification
- Rheumatic mitral stenosis
- Mechanical heart valves
- Left ventricular thrombus (post-MI, cardiomyopathy)
- Dilated cardiomyopathy with EF <30%
- Infective endocarditis
- Marantic (non-bacterial thrombotic) endocarditis
- Left atrial appendage thrombus

Moderate risk (2-5% annual risk):
- Mitral annular calcification
- Patent foramen ovale with atrial septal aneurysm
- Atrial flutter
- Sick sinus syndrome

Small Vessel Disease (Lacunar Infarcts):
- Pathology: Lipohyalinosis (hypertension-related vessel wall thickening), microatheroma, segmental arterial disorganization
- Locations: Lenticulostriate arteries (internal capsule, basal ganglia), thalamoperforators, pontine perforators, recurrent artery of Heubner
- Radiological pattern: Subcortical infarcts <15-20mm; white matter hyperintensities, lacunes, microbleeds, perivascular spaces (total SVD burden score)
- Clinical correlates: Cognitive impairment, gait disturbance, mood disorders

Hemorrhagic Stroke Detailed Etiology:

Intracerebral Hemorrhage:
1. Hypertensive ICH: Charcot-Bouchard microaneurysms on penetrating arteries; typical locations: putamen/globus pallidus (60-65%), thalamus (15-25%), pons (5-10%), cerebellum (5-7%)
2. Cerebral Amyloid Angiopathy (CAA): Beta-amyloid deposition in cortical/leptomeningeal vessels; lobar hemorrhages; microbleeds; cortical superficial siderosis; associated with Alzheimer disease
3. Vascular Malformations: AVM (2%), cavernous malformation (5-10%), dural arteriovenous fistula
4. Coagulopathy: Anticoagulation-related ICH (warfarin 1-2%/year, DOACs lower risk; higher mortality), thrombolysis-related, hemophilia, DIC, thrombocytopenia
5. Tumor-related: Glioblastoma, metastases (melanoma, choriocarcinoma, thyroid, renal cell, lung)
6. Drug-related: Cocaine, amphetamines, phenylpropanolamine
7. Vasculitis: Primary CNS, systemic

Subarachnoid Hemorrhage:
- Saccular aneurysms: Circle of Willis bifurcations; anterior circulation (85%): AComA (30%), MCA (25%), ICA/PCoA (20%), AChA; posterior circulation (15%): basilar tip, SCA, PICA
- Risk factors for aneurysm formation/rupture: Hypertension, smoking, female sex, familial history, ADPKD, Ehlers-Danlos IV, NF1, aortic coarctation
- Perimesencephalic SAH: Venous origin; benign course; CT pattern: blood centered in prepontine/interpeduncular cisterns without extension to lateral Sylvian fissures or anterior interhemispheric fissure`,
      },
      subsections: [
        {
          title: 'Transient Ischemic Attack (TIA)',
          content: {
            patient: 'A TIA, sometimes called a "mini-stroke," is a temporary blockage of blood flow to the brain that does not cause permanent damage. Symptoms are similar to stroke but resolve within minutes to hours (usually less than 1 hour). A TIA is a warning sign - about 1 in 3 people who have a TIA will eventually have a stroke, often within 48 hours. You should seek emergency care immediately even if symptoms resolve.',
            intermediate: 'TIA is defined as a transient episode of neurological dysfunction caused by focal brain, spinal cord, or retinal ischemia without acute infarction. The tissue-based definition (absence of infarction on imaging) has replaced the time-based definition (symptoms <24 hours). Short-term stroke risk after TIA is significant: ABCD2 score predicts risk (Age, Blood pressure, Clinical features, Duration, Diabetes). Score >=4 indicates high risk. Urgent evaluation within 24 hours with brain imaging, vascular imaging, and cardiac monitoring is recommended.',
            professional: 'TIA Definition and Risk Stratification: TIA is defined as a transient episode of neurological dysfunction caused by focal brain, spinal cord, or retinal ischemia without evidence of acute infarction on neuroimaging. The distinction from minor stroke is arbitrary based on imaging rather than time. ABCD2 score (Age >=60: 1 point; BP >=140/90: 1 point; Clinical unilateral weakness: 2 points, speech impairment without weakness: 1 point; Duration 10-59 min: 1 point, >=60 min: 2 points; Diabetes: 1 point). Risk of stroke at 2 days: 0-3 points = 1.0%, 4-5 points = 4.1%, 6-7 points = 8.1%. ABCD3-I adds dual TIA (2 points), imaging (carotid stenosis >=50%: 2 points, DWI lesion: 2 points). ESSEN score and subsequent CA-AI systems further refine risk.',
          },
        },
      ],
    },
    {
      title: 'Pathophysiology',
      content: {
        patient: `When blood flow to the brain stops, several damaging processes begin:

Ischemic Penumbra: This is the area around the dead brain tissue (infarct core) where cells are injured but still alive. These cells can be saved if blood flow is restored quickly - this is why "time is brain" and fast treatment matters so much.

Excitotoxicity: Without oxygen, brain cells cannot maintain proper ion balance. This causes excessive release of glutamate, a brain chemical that normally helps nerve cells communicate. Too much glutamate overstimulates and kills cells.

Blood-Brain Barrier Breakdown: The protective barrier between blood vessels and brain tissue becomes leaky, allowing harmful substances to enter the brain and causing swelling (edema).

Inflammation: The immune system responds to the injury, which can cause additional damage as immune cells release harmful substances while trying to clean up dead tissue.`,
        intermediate: `Ischemic Cascade and Penumbra:
The ischemic cascade begins when cerebral blood flow (CBF) drops below critical thresholds. Normal CBF is 50-60 mL/100g/min. Electrical failure occurs at ~20 mL/100g/min; membrane ion pump failure at ~10 mL/100g/min. The penumbra is tissue with CBF between these thresholds - electrically silent but structurally intact. Without reperfusion, the penumbra progresses to infarction over hours (classically 3-6 hours, but can extend to 24+ hours in some patients).

Excitotoxicity Mechanism:
ATP depletion causes membrane depolarization and voltage-gated calcium channel opening. Glutamate release and impaired reuptake lead to overstimulation of NMDA and AMPA receptors. Calcium influx activates destructive enzymes: phospholipases (membrane damage), proteases (cytoskeletal degradation), and endonucleases (DNA fragmentation). Mitochondrial calcium overload leads to opening of the mitochondrial permeability transition pore, cytochrome c release, and apoptosis.

Blood-Brain Barrier Disruption:
Ischemia damages endothelial tight junctions (occludin, claudin-5 degradation) via MMP-2 and MMP-9 activation. Basal lamina breakdown (type IV collagen, laminin, fibronectin degradation) allows extravasation of fluid and cells. Vasogenic edema peaks at 24-72 hours. Hemorrhagic transformation can occur with reperfusion of damaged vessels.

Inflammatory Response:
Microglial activation within minutes; release of pro-inflammatory cytokines (IL-1beta, TNF-alpha, IL-6). Neutrophil infiltration at 6-24 hours; adhesion molecule upregulation (ICAM-1, P-selectin). Complement activation and membrane attack complex formation. Secondary injury from free radicals, nitric oxide, and inflammatory mediators.`,
        professional: `Detailed Pathophysiological Mechanisms:

ISCHEMIC PENUMBRA:
- Definition: Peri-infarct tissue with CBF 10-20 mL/100g/min (oligemia <20, penumbra 10-20, core <8-10 mL/100g/min)
- Imaging correlates: DWI (diffusion restriction) represents core; PWI (perfusion deficit) minus DWI mismatch represents penumbra
- Clinical-radiological mismatch: NIHSS > 8 with small DWI lesion suggests significant penumbra
- Collateral circulation: Leptomeningeal collaterals from ACA/PCA to MCA territory determine penumbral salvage; pial collateral grade correlates with outcomes
- Time window evolution: Classically 3-6 hours, but DAWN and DEFUSE 3 trials demonstrated benefit up to 24 hours in selected patients with clinical-core mismatch

EXCITOTOXICITY AND CALCIUM DYSREGULATION:
1. Depolarization cascade: Decreased ATP leads to Na+/K+-ATPase failure, membrane depolarization, and voltage-gated Ca2+ channel opening
2. Glutamate storm: Depolarization causes vesicular glutamate release and reversal of glutamate transporters (GLT-1, GLAST); 100-fold extracellular glutamate increase
3. Receptor activation: NMDA receptor (Ca2+ and Na+ influx), AMPA receptor (Ca2+ permeable subunits upregulated in ischemia)
4. Calcium overload: Cytosolic Ca2+ rises from 100 nM to micromolar levels; mitochondrial Ca2+ uniporter uptake leads to mPTP opening
5. Enzyme activation: Calpains (cytoskeletal degradation), phospholipase A2 and C (membrane damage), neuronal nitric oxide synthase (NO + superoxide leads to peroxynitrite)
6. Mitochondrial dysfunction: Decreased membrane potential, ATP depletion, cytochrome c release, caspase activation, apoptosis

FREE RADICAL AND OXIDATIVE STRESS:
- Superoxide production: Xanthine oxidase, NADPH oxidase, mitochondrial electron transport chain
- NO synthase uncoupling: eNOS uncoupling due to BH4 oxidation produces superoxide
- Peroxynitrite formation: NO + O2- leads to ONOO- (potent oxidant)
- Lipid peroxidation: Membrane polyunsaturated fatty acid damage, 4-hydroxynonenal formation
- Antioxidant depletion: Glutathione, SOD, catalase, peroxiredoxins overwhelmed

BLOOD-BRAIN BARRIER DYNAMICS:
1. Early phase (minutes-hours): Ischemia-induced tight junction protein phosphorylation; transcellular transport increase
2. Subacute phase (hours-days): MMP-2 and MMP-9 upregulation; basal lamina degradation; pericyte contraction and detachment
3. Reperfusion injury: ROS burst with reperfusion; neutrophil-mediated damage; hemorrhagic transformation risk
4. Chronic remodeling: Angiogenesis, gliosis, scar formation

INFLAMMATORY CASCADE:
- Microglia: Resident CNS macrophages activate within minutes; M1 (pro-inflammatory) vs M2 (anti-inflammatory/repair) phenotypes
- Astrocyte reactivity: GFAP upregulation, hypertrophy; release of chemokines
- Peripheral immune cell infiltration: Neutrophils (6-24h), monocytes/macrophages (24-72h), T cells
- Inflammasome activation: NLRP3 inflammasome in microglia; IL-1beta and IL-18 maturation
- Complement system: Alternative pathway activation; C3a and C5a anaphylatoxins

HEMORRHAGIC STROKE PATHOPHYSIOLOGY:
- ICH: Direct tissue destruction, mass effect, perihematomal edema (glutamate excitotoxicity, thrombin toxicity, complement activation, iron-mediated oxidative stress), intracranial pressure elevation, herniation risk
- SAH: Direct effect of blood on brain tissue and vessels; early brain injury (global ischemia from raised ICP); delayed cerebral vasospasm (3-14 days); cortical spreading depolarizations; hydrocephalus; hyponatremia/SIADH or cerebral salt wasting`,
      },
    },
    {
      title: 'Risk Factors',
      content: {
        patient: `Many factors increase stroke risk. Some you cannot control, but many you can:

Non-Modifiable Risk Factors:
- Age: Risk doubles each decade after age 55
- Sex: Men have higher risk at younger ages; women have higher lifetime risk
- Family history: Stroke in close relatives increases your risk
- Race/Ethnicity: African Americans, Hispanics, and some Asian groups have higher risk
- Prior stroke or TIA: Strongest predictor of future stroke

Modifiable Risk Factors:
- High blood pressure: The most important risk factor; damages blood vessel walls
- Atrial fibrillation (AFib): Irregular heartbeat can form clots in the heart
- Diabetes: Damages blood vessels and doubles stroke risk
- High cholesterol: Leads to plaque buildup in arteries
- Smoking: Doubles stroke risk and damages blood vessels
- Physical inactivity and obesity
- Excessive alcohol use
- Sleep apnea: Breathing pauses during sleep increase blood pressure
- Other heart diseases: Heart failure, valve disease, enlarged heart`,
        intermediate: `Vascular Risk Factors - Detailed Assessment:

Hypertension: The most powerful modifiable risk factor. Risk increases continuously across the blood pressure spectrum. Prehypertension (120-139/80-89 mmHg) carries increased risk. Each 10 mmHg increase in systolic BP approximately doubles stroke risk. Mechanisms: accelerated atherosclerosis, lipohyalinosis of small vessels, cardiac remodeling, atrial fibrillation promotion. Target: <130/80 mmHg for stroke prevention (SPRINT, ACC/AHA guidelines).

Atrial Fibrillation: Present in 15-20% of ischemic strokes; responsible for >50% of cardioembolic strokes. Risk varies by comorbidities (CHA2DS2-VASc score). Paroxysmal AF carries similar stroke risk as persistent AF. Silent AF increasingly recognized (30-day monitoring detects in 15-20% of cryptogenic strokes).

Diabetes Mellitus: Increases ischemic stroke risk 2-4 fold; also increases severity and mortality. Microvascular complications (retinopathy, nephropathy) mark generalized vascular disease. Intensive glycemic control reduces microvascular complications but macrovascular benefit less clear; BP and lipid control more impactful for stroke prevention.

Dyslipidemia: Total cholesterol and LDL-C associated with atherosclerotic stroke risk; HDL-C inversely associated. Statins reduce stroke risk 20-30% per 1 mmol/L LDL reduction. Triglycerides and Lp(a) emerging as independent risk factors.

Smoking: Causally associated with 2-4 fold increased stroke risk; risk decreases toward baseline within 2-5 years of cessation. Mechanisms: endothelial dysfunction, accelerated atherosclerosis, prothrombotic effects, inflammation.

Other Modifiable Factors:
- Physical inactivity: Regular moderate exercise reduces stroke risk 25-30%
- Obesity: BMI >30 associated with increased risk; abdominal obesity particularly relevant
- Diet: High sodium, low potassium, low fruit/vegetable intake; Mediterranean diet protective
- Alcohol: J-shaped relationship; heavy drinking increases risk; light-moderate may be protective
- Sleep apnea: OSA increases risk via hypertension, atrial fibrillation, endothelial dysfunction
- Psychosocial stress and depression: Associated with 30-50% increased risk
- Oral contraceptives/HRT: Estrogen increases thrombotic risk, particularly with smoking, migraine with aura, age >35
- Inflammatory conditions: Rheumatoid arthritis, SLE, inflammatory bowel disease
- Infections: Chronic infections (periodontal, H. pylori, HIV) may contribute`,
        professional: `Advanced Risk Stratification and Emerging Factors:

CARDIOVASCULAR RISK SCORES:
- Framingham Stroke Risk Profile (FSRP): Incorporates age, sex, SBP, hypertension treatment, diabetes, smoking, prior CVD, AF, LVH
- CHA2DS2-VASc for AF stroke risk: C (congestive heart failure) 1 point, H (hypertension) 1 point, A2 (age >=75) 2 points, D (diabetes) 1 point, S2 (prior stroke/TIA/thromboembolism) 2 points, V (vascular disease) 1 point, A (age 65-74) 1 point, Sc (sex category female) 1 point
- HAS-BLED for bleeding risk on anticoagulation: Hypertension, Abnormal renal/liver function, Stroke, Bleeding history, Labile INR, Elderly (>65), Drugs/alcohol

GENETIC AND EPIGENETIC FACTORS:
- Monogenic stroke disorders: CADASIL (NOTCH3 mutations), CARASIL (HTRA1), Fabry disease (GLA), MELAS, mitochondrial disorders, sickle cell disease, homocystinuria, Ehlers-Danlos type IV (COL3A1), Marfan (FBN1), familial hypercholesterolemia
- Polygenic risk scores: Hundreds of loci associated with stroke; combined scores improve risk prediction beyond traditional factors
- Pharmacogenomics: CYP2C19 variants affect clopidogrel metabolism; VKORC1/CYP2C9 affect warfarin dosing

ADVANCED LIPID MARKERS:
- Lipoprotein(a): Genetically determined; independent risk factor; levels >50 mg/dL or >125 nmol/L increase risk; PCSK9 inhibitors and emerging targeted therapies reduce Lp(a)
- ApoB/ApoA1 ratio: Better predictor than LDL/HDL alone
- Small dense LDL: More atherogenic; associated with hypertriglyceridemia and low HDL
- HDL functionality: HDL efflux capacity more predictive than HDL-C level

INFLAMMATORY AND NOVEL BIOMARKERS:
- High-sensitivity CRP: Inflammatory marker; >2 mg/L indicates increased vascular risk
- Homocysteine: Moderate association with stroke; folate/B12 supplementation reduces homocysteine but stroke reduction less clear
- Fibrinogen and D-dimer: Markers of coagulation activation
- NT-proBNP: Cardiac stress marker; predicts AF and stroke risk
- Microalbuminuria: Marker of endothelial dysfunction
- Carotid intima-media thickness (cIMT) and plaque: Structural markers of subclinical atherosclerosis
- Coronary artery calcium score: Marker of generalized atherosclerosis; predictive of stroke risk

HORMONAL AND REPRODUCTIVE FACTORS:
- Pregnancy and postpartum: Increased risk (3-9 fold) due to hypercoagulability; risk highest in late pregnancy and first 6 weeks postpartum
- Preeclampsia/eclampsia: Associated with future stroke risk
- Migraine with aura: 2-4 fold increased ischemic stroke risk; amplified with smoking and OCP use
- Hormone replacement therapy: WHI demonstrated increased stroke risk with combined estrogen-progestin; transdermal lower risk than oral

LIFESTYLE FACTORS - MECHANISMS:
- Exercise: Improves endothelial function, reduces inflammation, improves insulin sensitivity, promotes angiogenesis, reduces BP and improves lipid profile
- Diet: DASH and Mediterranean diets reduce stroke via multiple mechanisms; sodium reduction lowers BP; potassium increases vasodilation and natriuresis; omega-3 fatty acids may have anti-inflammatory and antithrombotic effects
- Sleep: OSA causes intermittent hypoxia, sympathetic activation, oxidative stress, inflammation, atrial remodeling leading to AF; CPAP treatment may reduce risk`,
      },
    },
    {
      title: 'Clinical Presentation',
      content: {
        patient: `Stroke symptoms come on suddenly. Remember FAST:

F - Face drooping: One side of the face may droop or feel numb. Ask the person to smile - is it uneven?
A - Arm weakness: One arm may be weak or numb. Ask them to raise both arms - does one drift down?
S - Speech difficulty: Speech may be slurred, hard to understand, or they may struggle to find words
T - Time to call emergency services: If any signs are present, even if they go away, call immediately

Other sudden symptoms:
- Numbness or weakness on one side of the body (face, arm, leg)
- Vision problems in one or both eyes
- Severe headache with no known cause (especially with hemorrhagic stroke)
- Trouble walking, dizziness, loss of balance or coordination
- Confusion, trouble understanding

The specific symptoms depend on which part of the brain is affected.`,
        intermediate: `Stroke Recognition and Localization:

The "Sudden" Nature: Stroke symptoms have abrupt onset, typically maximal at start (thunderclap for SAH) or progressing over minutes to hours (stuttering course in large vessel occlusion). This distinguishes stroke from most other neurological conditions.

Vascular Territory Localization:

Anterior Circulation (Internal Carotid to MCA/ACA):
- MCA syndrome (most common): Contralateral face/arm > leg weakness, sensory loss, homonymous hemianopia, gaze deviation toward lesion, aphasia (left hemisphere), hemineglect (right hemisphere), apraxia
- ACA syndrome: Contralateral leg > arm weakness, abulia, urinary incontinence, transcortical motor aphasia, paraparesis if bilateral
- ICA occlusion: May cause massive infarction with MCA+ACA territories; decreased consciousness, severe hemiplegia

Posterior Circulation (Vertebral to Basilar to PCA):
- Lateral medullary (Wallenberg) syndrome: Vertigo, vomiting, ipsilateral facial numbness, contralateral body numbness, dysphagia, hoarseness, ipsilateral ataxia, Horner syndrome
- Basilar artery occlusion: Locked-in syndrome (quadriplegia, anarthria, preserved consciousness with vertical eye movements), coma, or sudden death
- PCA syndrome: Homonymous hemianopia, alexia without agraphia (dominant), prosopagnosia (bilateral), thalamic syndromes

Lacunar Syndromes (Small Deep Infarcts):
- Pure motor hemiparesis: Face, arm, leg equally affected
- Pure sensory stroke: Contralateral numbness/tingling
- Sensorimotor stroke: Combined sensory and motor
- Ataxic hemiparesis: Leg > arm, ipsilateral ataxia
- Dysarthria-clumsy hand syndrome: Slurred speech, hand incoordination

Hemorrhagic Stroke Presentations:
- ICH: Sudden severe headache (50%), vomiting, decreased consciousness, seizures (10%), progressive focal deficits based on location
- SAH: "Thunderclap" headache ("worst headache of life"), meningismus, photophobia, nausea/vomiting, decreased consciousness`,
        professional: `Comprehensive Clinical Assessment:

NIH STROKE SCALE (NIHSS):
Systematic quantification of stroke severity (0-42 points):
1a. Level of consciousness (0-3)
1b. LOC questions (0-2)
1c. LOC commands (0-2)
2. Best gaze (0-2)
3. Visual fields (0-3)
4. Facial palsy (0-3)
5. Motor arm (0-4 x 2)
6. Motor leg (0-4 x 2)
7. Limb ataxia (0-2)
8. Sensory (0-2)
9. Best language (0-3)
10. Dysarthria (0-2)
11. Extinction/inattention (0-2)

Interpretation: 0 = no stroke symptoms; 1-4 = minor stroke; 5-15 = moderate stroke; 16-20 = moderate-severe stroke; 21-42 = severe stroke. NIHSS predicts outcomes and guides treatment decisions. Limitations: posterior circulation strokes may have low NIHSS despite severity; right hemisphere strokes may be underestimated.

DETAILED VASCULAR SYNDROMES:

Middle Cerebral Artery (MCA) Syndromes:
- Superior division: Internal capsule involvement causes dense face/arm weakness with relative leg sparing
- Inferior division: Wernicke aphasia (dominant), sensory extinction, anosognosia (nondominant), homonymous hemianopia
- Stem occlusion: Striatocapsular infarct; dense hemiparesis

Anterior Cerebral Artery (ACA) Syndromes:
- Heubner artery: Head of caudate, anterior internal capsule; contralateral face/arm weakness
- Pericallosal: Medial frontal/parietal cortex; leg weakness, abulia, paratonic rigidity, transcortical motor aphasia

Posterior Cerebral Artery (PCA) Syndromes:
- Calcarine cortex: Contralateral homonymous hemianopia with macular sparing
- Temporal-occipital: Visual agnosia, prosopagnosia, visual hallucinations, alexia without agraphia
- Thalamic: Contralateral sensory loss, Dejerine-Roussy syndrome (thalamic pain), memory impairment

Brainstem Syndromes (Classic):
- Medial medullary: Ipsilateral hypoglossal nerve palsy + contralateral hemiparesis + contralateral loss of proprioception/vibration
- Lateral medullary (Wallenberg): Vertebral or PICA occlusion
- Medial pontine: Ipsilateral facial palsy + contralateral hemiparesis + contralateral sensory loss + internuclear ophthalmoplegia
- Weber syndrome: CN III palsy + contralateral hemiparesis
- Locked-in syndrome: Basilar artery occlusion; quadriplegia, anarthria, preserved vertical eye movements

Intracerebral Hemorrhage Signs:
- Putaminal: Contralateral hemiparesis, hemisensory loss, conjugate gaze deviation, aphasia or neglect
- Thalamic: Vertical gaze abnormalities, small pupils, contralateral sensory > motor deficit, hydrocephalus common
- Pontine: Pinpoint pupils, ophthalmoplegia, quadriparesis, coma; devastating prognosis
- Cerebellar: Ataxia, vomiting, headache, inability to walk; may deteriorate suddenly from brainstem compression
- Lobar: Seizures more common; deficits depend on lobe involved

Subarachnoid Hemorrhage:
- Thunderclap headache: Instantaneous peak intensity
- Meningeal irritation: Nuchal rigidity, Kernig sign, Brudzinski sign
- Cranial nerve palsies: III (posterior communicating artery aneurysm), VI (elevated ICP)
- Terson syndrome: SAH + vitreous/preretinal hemorrhage

STROKE MIMICS:
Must differentiate from: Todd's paralysis (post-seizure), migraine with aura, hypoglycemia, conversion disorder, Bell's palsy, peripheral vestibular disorders, brain tumor (subacute progressive), encephalitis, toxic-metabolic encephalopathy.`,
      },
    },
    {
      title: 'Diagnosis',
      content: {
        patient: `Rapid diagnosis is crucial for stroke treatment:

Emergency Assessment:
- Physical exam: Checking vital signs, neurological exam using the NIH Stroke Scale
- Blood tests: Blood sugar, complete blood count, clotting studies
- Heart monitoring: ECG to check for atrial fibrillation

Brain Imaging:
- CT Scan (Non-Contrast): The first test done in most cases. It can quickly rule out bleeding and may show early signs of ischemic stroke.
- CT Angiography (CTA): Uses dye injected into a vein to visualize blood vessels in the brain and neck; shows blockages
- Perfusion CT: Shows blood flow to different parts of the brain, helping identify salvageable tissue

MRI (Magnetic Resonance Imaging):
- DWI (Diffusion-Weighted Imaging): Can detect ischemic stroke within minutes; most sensitive early test
- FLAIR: Shows established infarction and edema
- MRA: Visualizes blood vessels without radiation or dye

Vessel Imaging:
- Carotid ultrasound: Looks for plaque and narrowing in neck arteries
- Transcranial Doppler: Assesses blood flow in brain arteries
- Catheter angiography: Gold standard for detailed vessel imaging, used before procedures`,
        intermediate: `Diagnostic Workup for Acute Stroke:

Initial Evaluation (Emergency Department):
1. Time of onset determination (last known well) - critical for treatment decisions
2. ABCs: Airway, breathing, circulation
3. Vital signs including blood pressure in both arms
4. Fingerstick glucose (treat if <60 mg/dL)
5. Brief neurological exam and NIHSS
6. 12-lead ECG (AF detection, prior MI, LVH)
7. Labs: CBC, PT/INR, aPTT, chemistry panel, troponin
8. CT brain non-contrast

Neuroimaging Protocol:
- Non-Contrast CT (NCCT): First-line; excludes hemorrhage (100% sensitivity), identifies early ischemic changes (hyperdense artery sign, loss of insular ribbon, sulcal effacement). ASPECTS score quantifies early ischemic change in MCA territory.

- CT Angiography (CTA): From aortic arch to vertex; identifies large vessel occlusion (LVO), arterial dissection, stenosis.

- CT Perfusion (CTP): Generates maps of cerebral blood flow (CBF), cerebral blood volume (CBV), mean transit time (MTT), Tmax. Penumbra = mismatch between large Tmax and small core.

MRI in Acute Stroke:
- DWI: Restricted diffusion appears within minutes; highly sensitive and specific for acute infarction
- FLAIR: Vasogenic edema visible after ~6 hours; DWI-FLAIR mismatch suggests <4.5 hours
- Gradient Echo (GRE) or SWI: Detects hemorrhage and microbleeds
- MRA: Time-of-flight (no contrast) or contrast-enhanced

Vascular Imaging:
- Carotid duplex ultrasound: Identifies stenosis >50%
- Transcranial Doppler (TCD): Evaluates intracranial vessels; detects emboli, vasospasm, collateral flow
- CTA neck: Evaluates carotid bifurcation and vertebral origins
- Digital Subtraction Angiography (DSA): Gold standard; reserved for endovascular planning`,
        professional: `Advanced Diagnostic Approaches:

IMAGING SELECTION FOR EXTENDED TIME WINDOW TREATMENT:

Clinical-Core Mismatch (DAWN trial criteria):
- ICA or M1 occlusion
- Small infarct core (DWI or CTP rCBF <30% <21 mL)
- Clinical severity (NIHSS) mismatched with core size
- 6-24 hours from last known well

Perfusion-Core Mismatch (DEFUSE 3 criteria):
- ICA or M1 occlusion
- Core (DWI or CTP rCBF <30%) <70 mL
- Mismatch ratio >1.8
- Mismatch volume >15 mL
- 6-16 hours from last known well

WAKE-UP Trial (Unknown Onset):
- DWI-FLAIR mismatch: DWI positive, FLAIR negative
- Suggests stroke onset <4.5 hours
- IV alteplase beneficial

ADVANCED IMAGING TECHNIQUES:

Multiphase CTA:
- Single contrast injection with multiple arterial phases
- Evaluates collateral circulation
- Predicts response to thrombectomy

CTA Collateral Scoring:
- Tan scale: 0-3 scoring of collateral filling
- Good collaterals associated with smaller core, better outcomes

MRI Advanced Techniques:
- ASL (Arterial Spin Labeling): Non-contrast perfusion
- DTI (Diffusion Tensor Imaging): White matter tractography
- Vessel wall imaging: Identifies vasculitis, dissection, intracranial atherosclerosis

CARDIAC EVALUATION FOR EMBOLIC SOURCE:
- Transthoracic echocardiography (TTE): LV thrombus, LV dysfunction, valvular disease, PFO
- Transesophageal echocardiography (TEE): Superior for atrial appendage thrombus, PFO with ASA, aortic arch atheroma
- Prolonged cardiac monitoring: 30-day event monitor or insertable cardiac monitor for cryptogenic stroke

LABORATORY EVALUATION FOR YOUNG OR CRYPTOGENIC STROKE:
- Hypercoagulable panel: Protein C, S, antithrombin III, Factor V Leiden, prothrombin G20210A, antiphospholipid antibodies
- Vasculitis workup: ESR, CRP, ANA, ANCA
- Genetic testing: CADASIL (NOTCH3), Fabry disease (GLA)
- Toxicology: Drug screen for cocaine, amphetamines`,
      },
    },
    {
      title: 'Acute Treatment',
      content: {
        patient: `Stroke treatment must begin as quickly as possible:

Ischemic Stroke Treatments:

Clot-Busting Medications (Thrombolysis):
- tPA (tissue Plasminogen Activator/Alteplase): Given through an IV, dissolves clots. Must be given within 4.5 hours of symptom start.
- Tenecteplase (TNK): Newer alternative, given as a single bolus instead of infusion

Mechanical Thrombectomy:
- For large artery blockages (in the brain's main arteries)
- A catheter is threaded through an artery in the groin/wrist up to the brain
- A stent retriever or suction device removes the clot
- Can be done up to 24 hours after stroke onset in selected patients

Blood Pressure Management:
- Generally lowered cautiously after thrombolysis
- May be allowed to run high temporarily before treatment to maintain blood flow

Hemorrhagic Stroke Treatments:

Intracerebral Hemorrhage:
- Blood pressure control to prevent hematoma expansion
- Reversal of blood thinners if applicable
- Surgery sometimes needed to remove large clots, especially cerebellar hemorrhages

Subarachnoid Hemorrhage:
- Secure the aneurysm quickly (coiling or clipping) to prevent rebleeding
- Nimodipine to prevent vasospasm-related stroke
- Manage hydrocephalus with drainage if needed`,
        intermediate: `Acute Ischemic Stroke Management:

IV THROMBOLYSIS:
- Alteplase (tPA): 0.9 mg/kg (max 90 mg); 10% bolus, 90% over 60 minutes
- Window: 4.5 hours from symptom onset or last known well
- Tenecteplase: 0.25 mg/kg IV bolus (max 25 mg); non-inferior in recent trials

MECHANICAL THROMBECTOMY:
- Indication: Large vessel occlusion (ICA, M1, proximal M2, basilar)
- Time windows: 0-6 hours (strongest evidence); 6-24 hours with advanced imaging selection
- Technique: Stent retrievers or aspiration catheters
- Outcomes: mRS 0-2 achieved in 46-60% vs 13-30% with medical therapy alone

BLOOD PRESSURE MANAGEMENT:
- Pre-treatment: <185/110 mmHg for thrombolysis eligibility
- Post-thrombolysis: <180/105 for 24 hours
- Permissive hypertension: Allow up to 220/120 if not receiving thrombolysis

GENERAL ACUTE CARE:
- Airway: Intubate if GCS <=8, loss of airway reflexes
- Temperature: Treat fever; maintain normothermia
- Glucose: Maintain 140-180 mg/dL; avoid hypoglycemia
- DVT prophylaxis: SCDs initially; pharmacologic after 24 hours if no bleeding

HEMORRHAGIC STROKE ACUTE MANAGEMENT:

Intracerebral Hemorrhage:
- BP management: SBP target 140-160 mmHg
- Coagulopathy reversal: PCC for warfarin, andexanet alfa or PCC for DOACs, protamine for heparin
- Surgery: Cerebellar hemorrhage >3 cm or brainstem compression

Subarachnoid Hemorrhage:
- Aneurysm securing: Endovascular coiling vs surgical clipping
- Nimodipine: 60 mg PO/NG q4h for 21 days
- Vasospasm management: Induced hypertension, intra-arterial vasodilators, angioplasty
- Hydrocephalus: EVD placement if symptomatic`,
        professional: `Advanced Acute Stroke Interventions:

ENDOVASCULAR TECHNIQUES:

Access Approaches:
- Transfemoral: Standard; 6-8 Fr sheath
- Transradial: Increasing use; lower access site complications
- Transcarotid: Direct carotid puncture for difficult arch anatomy

Thrombectomy Devices and Techniques:
- Stent retrievers: Self-expanding nitinol stents (Solitaire, Trevo); first-line
- Aspiration catheters: Large-bore distal access catheters (ACE, Sofia); ADAPT technique
- Combined techniques: Solumbra - stent retriever plus local aspiration

Special Situations:
- Tandem occlusions: Carotid stenosis/occlusion plus intracranial occlusion
- Basilar artery occlusion: Highest mortality if untreated; thrombectomy beneficial up to 24 hours
- Cervical dissection: Stenting if tandem occlusion or severe stenosis

ANESTHESIA CONSIDERATIONS:
- Conscious sedation: Preferred; allows neurological monitoring
- General anesthesia: Consider if agitated, airway compromise
- Blood pressure: Avoid hypotension during induction

COMPLICATION MANAGEMENT:

Hemorrhagic Transformation:
- Symptomatic ICH after thrombolysis: 6% overall
- Management: Stop antithrombotics; reverse anticoagulation; BP control; neurosurgical consultation

Cerebral Edema:
- Malignant MCA infarction: Decompressive hemicraniectomy reduces mortality
- Medical ICP management: Head elevation, osmotherapy, sedation

SPECIALIZED ICU MANAGEMENT:
- Neurointensive care: Protocolized care improves outcomes
- Multimodal monitoring: ICP, PbtO2, cerebral microdialysis, continuous EEG
- Temperature management: Targeted temperature management if fever
- Glycemic control: Insulin protocols; avoid <80 or >200 mg/dL`,
      },
    },
    {
      title: 'Secondary Prevention',
      content: {
        patient: `Preventing another stroke is critical after the first one:

Lifestyle Changes:
- Stop smoking completely
- Regular exercise as approved by your doctor
- Healthy diet low in salt and saturated fat
- Maintain healthy weight
- Limit alcohol

Medications:
- Antiplatelet drugs: Aspirin, clopidogrel (Plavix) to prevent clot formation
- Anticoagulants: For atrial fibrillation (warfarin, apixaban, rivaroxaban, dabigatran)
- Statins: Lower cholesterol and stabilize plaque
- Blood pressure medications: Multiple types may be needed
- Diabetes medications: Tight control reduces stroke risk

Procedures:
- Carotid endarterectomy: Surgery to remove plaque from carotid artery
- Carotid stenting: Less invasive alternative
- Left atrial appendage closure: For AF patients who cannot take blood thinners`,
        intermediate: `Secondary Prevention Strategies:

ANTIPLATELET THERAPY (Non-Cardioembolic Stroke):
- Aspirin: 81-325 mg daily; reduces recurrent stroke by ~20%
- Clopidogrel: 75 mg daily
- Short-term DAPT: Clopidogrel + aspirin for 21-90 days after minor stroke or high-risk TIA

ANTICOAGULATION (Cardioembolic - Atrial Fibrillation):
- Warfarin: Target INR 2-3
- Direct Oral Anticoagulants (DOACs): Apixaban, rivaroxaban, dabigatran, edoxaban
- DOACs have similar efficacy to warfarin with lower ICH risk

LIPID MANAGEMENT:
- High-intensity statin: Atorvastatin 40-80 mg or rosuvastatin 20-40 mg
- Target LDL <70 mg/dL for very high risk
- Add ezetimibe or PCSK9 inhibitors if needed

BLOOD PRESSURE CONTROL:
- Target: <130/80 mmHg
- Combination therapy often needed

CAROTID REVASCULARIZATION:
- Carotid endarterectomy (CEA): Gold standard for symptomatic severe stenosis (70-99%)
- Carotid artery stenting (CAS): Alternative for high surgical risk

LEFT ATRIAL APPENDAGE CLOSURE:
- Watchman device: For non-valvular AF with contraindications to long-term anticoagulation`,
        professional: `Advanced Secondary Prevention:

PRECISION MEDICINE APPROACHES:

Genetic-Guided Therapy:
- CYP2C19 loss-of-function alleles: Reduce clopidogrel effectiveness
- Pharmacogenomic panels: Emerging role in antiplatelet selection

Advanced Lipid Management:
- Lp(a): If elevated >50 mg/dL, more aggressive LDL lowering
- ApoB targeting: Target <65 mg/dL for very high risk

DEVICE-BASED PREVENTION:

Left Atrial Appendage Closure:
- Watchman FLX: Second-generation device
- Patient selection: True contraindication to anticoagulation

PFO Closure - Refined Indications:
- Age cutoff: Benefit demonstrated in <60 years
- RoPE score: Predicts PFO-attributable fraction

NOVEL ANTICOAGULATION APPROACHES:
- Factor XI inhibitors (milvexian, asundexian): In development

LIFESTYLE INTERVENTIONS - EVIDENCE BASE:
- Mediterranean diet: PREDIMED trial; 30% reduction in stroke
- Exercise: High-intensity interval training
- Weight loss: Bariatric surgery; GLP-1 agonists

SPECIAL POPULATIONS:

Cervical Artery Dissection:
- Antithrombotic therapy: Anticoagulation vs antiplatelet
- Duration: 3-6 months typically

Hypercoagulable States:
- Antiphospholipid syndrome: Warfarin target INR 2-3
- Malignancy-associated stroke: LMWH preferred

Intracranial Atherosclerosis:
- Aggressive medical therapy: Dual antiplatelet for 90 days then single; high-intensity statin; SBP <130
- Stenting: SAMMPRIS trial showed medical therapy superior`,
      },
    },
    {
      title: 'Complications',
      content: {
        patient: `Stroke can lead to serious complications:

Brain Swelling (Cerebral Edema):
- Life-threatening swelling in the days following a large stroke
- Can cause brain tissue to push through skull openings
- Emergency surgery may be needed

Hemorrhagic Transformation:
- Ischemic stroke area begins to bleed, especially after clot-busting treatment
- Can worsen symptoms

Seizures:
- Can occur early (first week) or late after stroke
- More common with hemorrhagic strokes

Medical Complications:
- Pneumonia from aspiration
- Blood clots in legs (DVT)
- Urinary tract infections
- Pressure sores
- Depression and anxiety
- Falls and injuries

Recurrent Stroke:
- About 1 in 4 stroke survivors will have another stroke
- Highest risk in first few weeks`,
        intermediate: `Stroke Complications - Detailed Overview:

NEUROLOGICAL COMPLICATIONS:

Cerebral Edema and Herniation:
- Timing: Peaks 48-96 hours after large infarction
- Pathophysiology: Cytotoxic edema followed by vasogenic edema
- Signs: Decreased consciousness, pupillary changes
- Management: Head elevation, hyperosmolar therapy, decompressive craniectomy

Hemorrhagic Transformation:
- Classification: HI-1, HI-2, PH-1, PH-2
- Risk factors: Large infarct, cardioembolic etiology, reperfusion therapy

Seizures:
- Early seizures: <7 days; incidence 2-6%
- Late seizures/epilepsy: >7 days; develops in 5-10%

MEDICAL COMPLICATIONS:

Aspiration Pneumonia:
- Most common medical complication; 15-25%
- Prevention: Swallow screening, NPO status until evaluated

Venous Thromboembolism:
- DVT incidence 10-20% without prophylaxis
- Prophylaxis: SCDs for all; pharmacologic after 24-48 hours

PSYCHOLOGICAL COMPLICATIONS:
- Post-stroke depression: 30-50% of survivors
- Anxiety disorders: 20-25%
- Cognitive impairment: Vascular dementia`,
        professional: `Advanced Complication Management:

NEUROLOGICAL COMPLICATIONS:

Malignant Cerebral Edema:
- Decompressive hemicraniectomy:
  * Indications: Age 18-60, NIHSS >15, infarct >50% MCA territory
  * Outcomes: Reduces mortality from ~70% to ~20%

Hemorrhagic Transformation:
- Symptomatic hemorrhage: Any new hemorrhage with neurological deterioration
- Management protocol: Immediate CT; labs; hold antithrombotics; BP control

SYSTEMIC COMPLICATIONS:

Aspiration and Dysphagia:
- FEES vs MBS evaluation
- Feeding decisions: NG tube short-term; PEG if prolonged need

Venous Thromboembolism Prophylaxis:
- IPC reduces DVT risk
- PREVAIL trial: Low-dose heparin safe post-thrombolysis after 24-48 hours

REHABILITATION COMPLICATIONS:

Spasticity:
- Management: Stretching, positioning, oral baclofen/tizanidine, botulinum toxin, intrathecal baclofen pump
- Contracture prevention: Serial casting, dynamic splinting

Heterotopic Ossification:
- Prophylaxis: Etidronate or indomethacin

Central Post-Stroke Pain:
- Treatment: Gabapentin, pregabalin, TCAs, SNRIs; motor cortex stimulation

Falls and Fractures:
- Prevention: Gait training, assistive devices, hip protectors

PSYCHOLOGICAL AND COGNITIVE:

Post-Stroke Depression:
- Diagnosis: PHQ-9 screening
- Treatment: SSRIs; FLAME trial showed fluoxetine may enhance motor recovery

Cognitive Impairment:
- Vascular cognitive impairment: Executive dysfunction prominent
- Treatment: Vascular risk factor control; cholinesterase inhibitors`,
      },
    },
    {
      title: 'Rehabilitation',
      content: {
        patient: `Recovery and rehabilitation after stroke:

Recovery Timeline:
- Most rapid recovery occurs in first 3 months
- Continued improvement possible for 6-12 months or longer
- Recovery depends on stroke severity, location, age, and health

Rehabilitation Team:
- Physical therapists: Walking, balance, strength
- Occupational therapists: Daily activities (dressing, eating, bathing)
- Speech therapists: Speaking, understanding, swallowing
- Rehabilitation doctors (physiatrists): Medical aspects of recovery
- Psychologists: Emotional adjustment
- Social workers: Resources, insurance, discharge planning

Therapy Approaches:
- Constraint-induced movement therapy: Restraining unaffected limb
- Robotic therapy: Devices assist with movement
- Virtual reality: Computer-based exercises
- Electrical stimulation: Activates weak muscles

Recovery Goals:
- Maximize independence in daily activities
- Learn adaptive techniques and assistive devices
- Prevent complications
- Return to home, work, and community`,
        intermediate: `Comprehensive Stroke Rehabilitation:

REHABILITATION SETTINGS:
- Acute inpatient rehabilitation: 3+ hours therapy daily
- Skilled nursing facility: Less intensive
- Home health/outpatient: After discharge

NEUROPLASTICITY AND RECOVERY:
- Brain reorganization: Perilesional cortex and contralesional hemisphere
- Use-dependent plasticity: Repetitive task practice drives reorganization
- Critical periods: Highest plasticity early

MOTOR RECOVERY:
- Brunnstrom stages: Progressive recovery pattern
- Task-oriented training: Hundreds of repetitions needed
- Body-weight supported treadmill training
- Constraint-induced movement therapy (CIMT)
- Mirror therapy
- Robotics: Exoskeletons and end-effector devices

COGNITIVE REHABILITATION:
- Attention training, memory strategies, executive function training
- Spatial neglect: Prism adaptation, visual scanning

APHASIA REHABILITATION:
- Constraint-induced aphasia therapy (CIAT)
- Melodic intonation therapy
- Augmentative and alternative communication (AAC)

DYSPHAGIA MANAGEMENT:
- Swallowing therapy, NMES, diet modifications

PSYCHOLOGICAL SUPPORT:
- Adjustment counseling, family/caregiver training, support groups`,
        professional: `Advanced Rehabilitation Concepts:

NEUROPLASTICITY MECHANISMS:

Cellular Mechanisms:
- Long-term potentiation (LTP): Synaptic strengthening
- Synaptogenesis: New synapse formation
- Axonal sprouting: Collateral sprouting from intact pathways
- Dendritic arborization: Increased complexity with enriched environment

EVIDENCE-BASED INTERVENTIONS:

Upper Extremity:
- EXCITE trial: CIMT improved motor function sustained at 2 years
- AVERT trial: Very early mobilization did not improve outcomes
- VECTORS trial: Robotic therapy non-inferior to conventional

Gait Rehabilitation:
- Treadmill training with body-weight support
- Functional electrical stimulation (FES)
- Exoskeletons: ReWalk, Ekso, Indego
- Rhythmic auditory stimulation

Technology-Assisted Rehabilitation:
- Virtual reality: Wii, Kinect, specialized systems
- Telerehabilitation: Remote delivery effective
- Wearable sensors: Activity monitoring, biofeedback
- Brain-computer interfaces: Direct neural control

NON-INVASIVE BRAIN STIMULATION:

rTMS:
- Low-frequency to contralesional M1 improves motor function
- FDA cleared for motor recovery

tDCS:
- Anodal increases, cathodal decreases excitability
- Applications: Motor recovery, aphasia, neglect

SPECIALIZED PROGRAMS:

Aphasia Intensive Programs:
- CIAT: 30+ hours over 2 weeks
- Pharmacotherapy adjuncts: Limited evidence

Spatial Neglect Rehabilitation:
- Prism adaptation, limb activation, virtual reality
- rTMS to right posterior parietal cortex

Cognitive Rehabilitation:
- Attention Process Training (APT)
- Goal Management Training (GMT)
- Computer-based training: Limited transfer evidence

SPASTICITY MANAGEMENT:

Pharmacological:
- Oral: Baclofen, tizanidine, dantrolene
- Botulinum toxin: Type A or B; effects last 3-4 months
- Intrathecal baclofen pump: For severe generalized spasticity

Procedural:
- Phenol/alcohol neurolysis
- Surgical: Tendon lengthening, selective dorsal rhizotomy

LONG-TERM OUTCOMES:

Outcome Prediction:
- Initial stroke severity (NIHSS) strongest predictor
- Age, lesion location, early improvement

Community Participation:
- Stroke Club, adaptive sports, driving rehabilitation
- Return to work: Vocational counseling

LIFE-LONG MANAGEMENT:
- Secondary prevention continues lifelong
- Managing late complications: Shoulder pain, complex regional pain syndrome`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'brain', structureName: 'Brain', linkText: 'Brain Anatomy', relevance: 'Primary organ affected by stroke', viewPreset: 'superior', highlightColor: '#ff6b6b' },
    { structureId: 'cerebrum', structureName: 'Cerebrum', linkText: 'Cerebrum', relevance: 'Location of most ischemic and hemorrhagic strokes', viewPreset: 'superior' },
    { structureId: 'middle-cerebral-artery', structureName: 'Middle Cerebral Artery', linkText: 'Middle Cerebral Artery', relevance: 'Most common site of large vessel occlusion', highlightColor: '#ff6b6b' },
    { structureId: 'anterior-cerebral-artery', structureName: 'Anterior Cerebral Artery', linkText: 'Anterior Cerebral Artery', relevance: 'Supplies medial frontal/parietal cortex', highlightColor: '#ff6b6b' },
    { structureId: 'posterior-cerebral-artery', structureName: 'Posterior Cerebral Artery', linkText: 'Posterior Cerebral Artery', relevance: 'Supplies occipital lobe and thalamus', highlightColor: '#ff6b6b' },
    { structureId: 'basilar-artery', structureName: 'Basilar Artery', linkText: 'Basilar Artery', relevance: 'Critical posterior circulation vessel', highlightColor: '#ff6b6b' },
    { structureId: 'internal-carotid-artery', structureName: 'Internal Carotid Artery', linkText: 'Internal Carotid Artery', relevance: 'Common site of atherosclerosis and dissection', highlightColor: '#ff6b6b' },
    { structureId: 'circle-of-willis', structureName: 'Circle of Willis', linkText: 'Circle of Willis', relevance: 'Collateral circulation pathway', highlightColor: '#4ecdc4' },
    { structureId: 'thalamus', structureName: 'Thalamus', linkText: 'Thalamus', relevance: 'Common site of lacunar infarcts and hemorrhage', highlightColor: '#ff6b6b' },
    { structureId: 'pons', structureName: 'Pons', linkText: 'Pons', relevance: 'Location of lacunar infarcts and hypertensive hemorrhage', highlightColor: '#ff6b6b' },
    { structureId: 'cerebellum', structureName: 'Cerebellum', linkText: 'Cerebellum', relevance: 'Site of hemorrhage and infarction', highlightColor: '#ff6b6b' },
    { structureId: 'left-ventricle', structureName: 'Left Ventricle', linkText: 'Heart - Left Ventricle', relevance: 'Source of cardioembolic stroke', highlightColor: '#4ecdc4' },
    { structureId: 'left-atrium', structureName: 'Left Atrium', linkText: 'Left Atrium', relevance: 'Site of thrombus formation in atrial fibrillation', highlightColor: '#4ecdc4' },
  ],
  references: [
    {
      referenceId: 'aha-stroke-guideline-2019',
      type: 'guideline',
      title: '2019 Update to the 2018 Guidelines for the Early Management of Acute Ischemic Stroke',
      authors: 'Powers WJ, et al.',
      source: 'Stroke',
      year: 2019,
      citation: 'Powers WJ, et al. 2019 Update to the 2018 Guidelines for the Early Management of Acute Ischemic Stroke. Stroke. 2019;50(12):e344-e418.',
    },
    {
      referenceId: 'asa-secondary-prevention-2021',
      type: 'guideline',
      title: '2021 Guideline for the Prevention of Stroke in Patients With Stroke and Transient Ischemic Attack',
      authors: 'Kleindorfer DO, et al.',
      source: 'Stroke',
      year: 2021,
      citation: 'Kleindorfer DO, et al. 2021 Guideline for the Prevention of Stroke in Patients With Stroke and Transient Ischemic Attack. Stroke. 2021;52(7):e364-e467.',
    },
    {
      referenceId: 'dawn-trial',
      type: 'journal-article',
      title: 'Thrombectomy 6 to 24 Hours after Stroke with a Mismatch between Deficit and Infarct',
      authors: 'Nogueira RG, et al.',
      source: 'New England Journal of Medicine',
      year: 2018,
      citation: 'Nogueira RG, et al. Thrombectomy 6 to 24 Hours after Stroke with a Mismatch between Deficit and Infarct. N Engl J Med. 2018;378(1):11-21.',
    },
    {
      referenceId: 'defuse3-trial',
      type: 'journal-article',
      title: 'Endovascular Therapy following Imaging Evaluation for Ischemic Stroke 6-24 Hours after Onset',
      authors: 'Albers GW, et al.',
      source: 'New England Journal of Medicine',
      year: 2018,
      citation: 'Albers GW, et al. Endovascular Therapy following Imaging Evaluation for Ischemic Stroke 6-24 Hours after Onset. N Engl J Med. 2018;378(8):708-718.',
    },
    {
      referenceId: 'wake-up-trial',
      type: 'journal-article',
      title: 'MRI-Guided Thrombolysis for Stroke with Unknown Time of Onset',
      authors: 'Thomalla G, et al.',
      source: 'New England Journal of Medicine',
      year: 2018,
      citation: 'Thomalla G, et al. MRI-Guided Thrombolysis for Stroke with Unknown Time of Onset. N Engl J Med. 2018;379(7):611-622.',
    },
    {
      referenceId: 'statpearls-stroke-2023',
      type: 'textbook',
      title: 'Ischemic Stroke',
      authors: 'Jauch EC, et al.',
      source: 'NCBI StatPearls',
      year: 2023,
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK499997/',
      citation: 'Jauch EC, et al. Ischemic Stroke. StatPearls. NCBI; 2023.',
    },
    {
      referenceId: 'aHA-hemorrhagic-guideline-2022',
      type: 'guideline',
      title: '2022 Guideline for the Management of Patients With Spontaneous Intracerebral Hemorrhage',
      authors: 'Greenberg SM, et al.',
      source: 'Stroke',
      year: 2022,
      citation: 'Greenberg SM, et al. 2022 Guideline for the Management of Patients With Spontaneous Intracerebral Hemorrhage. Stroke. 2022;53(7):e282-e361.',
    },
    {
      referenceId: 'stroke-rehab-guideline-2016',
      type: 'guideline',
      title: 'Guidelines for Adult Stroke Rehabilitation and Recovery',
      authors: 'Winstein CJ, et al.',
      source: 'Stroke',
      year: 2016,
      citation: 'Winstein CJ, et al. Guidelines for Adult Stroke Rehabilitation and Recovery. Stroke. 2016;47(6):e98-e169.',
    },
  ],
  relatedEntries: [
    { entryId: 'brain', entryType: 'anatomy', name: 'Brain Anatomy', relationship: 'see-also', relevanceScore: 100 },
    { entryId: 'blood-vessels', entryType: 'anatomy', name: 'Blood Vessels', relationship: 'see-also', relevanceScore: 95 },
    { entryId: 'atrial-fibrillation', entryType: 'condition', name: 'Atrial Fibrillation', relationship: 'causes', relevanceScore: 90 },
    { entryId: 'hypertension', entryType: 'condition', name: 'Hypertension', relationship: 'causes', relevanceScore: 90 },
    { entryId: 'atherosclerosis', entryType: 'condition', name: 'Atherosclerosis', relationship: 'causes', relevanceScore: 85 },
    { entryId: 'diabetes-mellitus', entryType: 'condition', name: 'Diabetes Mellitus', relationship: 'causes', relevanceScore: 80 },
    { entryId: 'hyperlipidemia', entryType: 'condition', name: 'Hyperlipidemia', relationship: 'causes', relevanceScore: 75 },
    { entryId: 'alteplase', entryType: 'medication', name: 'Alteplase (tPA)', relationship: 'treated-by', relevanceScore: 95 },
    { entryId: 'tenecteplase', entryType: 'medication', name: 'Tenecteplase', relationship: 'treated-by', relevanceScore: 90 },
    { entryId: 'mechanical-thrombectomy', entryType: 'procedure', name: 'Mechanical Thrombectomy', relationship: 'treated-by', relevanceScore: 95 },
    { entryId: 'aspirin', entryType: 'medication', name: 'Aspirin', relationship: 'treated-by', relevanceScore: 85 },
    { entryId: 'clopidogrel', entryType: 'medication', name: 'Clopidogrel', relationship: 'treated-by', relevanceScore: 80 },
    { entryId: 'warfarin', entryType: 'medication', name: 'Warfarin', relationship: 'treated-by', relevanceScore: 75 },
    { entryId: 'apixaban', entryType: 'medication', name: 'Apixaban', relationship: 'treated-by', relevanceScore: 80 },
    { entryId: 'statins', entryType: 'medication', name: 'Statins', relationship: 'treated-by', relevanceScore: 85 },
    { entryId: 'ct-scan', entryType: 'imaging', name: 'CT Scan', relationship: 'diagnosed-by', relevanceScore: 95 },
    { entryId: 'mri', entryType: 'imaging', name: 'MRI', relationship: 'diagnosed-by', relevanceScore: 90 },
    { entryId: 'ct-angiography', entryType: 'imaging', name: 'CT Angiography', relationship: 'diagnosed-by', relevanceScore: 90 },
    { entryId: 'tia', entryType: 'condition', name: 'Transient Ischemic Attack', relationship: 'similar-to', relevanceScore: 95 },
    { entryId: 'aphasia', entryType: 'symptom', name: 'Aphasia', relationship: 'has-symptom', relevanceScore: 80 },
    { entryId: 'hemiparesis', entryType: 'symptom', name: 'Hemiparesis', relationship: 'has-symptom', relevanceScore: 85 },
    { entryId: 'seizures', entryType: 'symptom', name: 'Seizures', relationship: 'caused-by', relevanceScore: 60 },
    { entryId: 'cerebral-edema', entryType: 'condition', name: 'Cerebral Edema', relationship: 'caused-by', relevanceScore: 70 },
  ],
  searchMetadata: {
    primaryKeywords: ['stroke', 'cerebrovascular accident', 'CVA', 'brain attack', 'ischemic stroke', 'hemorrhagic stroke', 'cerebral infarction'],
    secondaryKeywords: ['thrombolysis', 'tPA', 'tenecteplase', 'mechanical thrombectomy', 'FAST', 'penumbra', 'recanalization'],
    synonyms: ['brain attack', 'cerebrovascular accident', 'apoplexy', 'cerebral infarction', 'cerebral hemorrhage', 'intracerebral bleed'],
    abbreviations: ['CVA', 'AIS', 'ICH', 'SAH', 'LVO', 'MCA', 'ICA', 'tPA', 'TNK', 'TIA', 'NIHSS', 'CTA', 'CTP', 'DWI', 'FLAIR'],
    icdCodes: ['I63', 'I61', 'I60', 'G45'],
    meshTerms: ['Stroke', 'Brain Ischemia', 'Intracranial Hemorrhages', 'Subarachnoid Hemorrhage', 'Cerebral Infarction'],
    tags: ['neurology', 'emergency', 'cerebrovascular', 'neurocritical-care', 'vascular', 'thrombectomy', 'thrombolysis'],
    searchBoost: 2.0,
  },
  clinicalImportance: 'essential',
  reviewStatus: 'approved',
  lastUpdated: '2026-02-02',
  version: '1.0',
  author: 'SOMA Medical Encyclopedia',
};

// ═══════════════════════════════════════════════════════════════════════════════
// ISCHEMIC STROKE - SPECIFIC ENTRY
// ═══════════════════════════════════════════════════════════════════════════════

export const ischemicStrokeEntry: EncyclopediaEntry = {
  entryId: 'ischemic-stroke',
  name: 'Ischemic Stroke',
  entryType: 'condition',
  category: 'neurologic',
  subcategory: 'cerebrovascular',
  summary: 'Stroke caused by interruption of blood supply to the brain due to arterial blockage, accounting for approximately 87% of all strokes.',
  overview: {
    patient: 'Ischemic stroke occurs when a blood clot blocks an artery supplying blood to your brain. Without oxygen and nutrients, brain cells begin to die within minutes. It is the most common type of stroke, accounting for about 87% of all strokes. There are three main subtypes: atherothrombotic (clot forms at a plaque buildup), cardioembolic (clot travels from the heart), and lacunar (small vessel disease). Emergency treatments can restore blood flow and minimize brain damage, but must be given quickly.',
    intermediate: 'Ischemic stroke results from arterial occlusion leading to cerebral infarction. Major mechanisms include large artery atherosclerosis (thrombosis or artery-to-artery embolism), cardioembolism (particularly from atrial fibrillation), and small vessel occlusion (lipohyalinosis of penetrating arteries causing lacunar infarcts). The ischemic cascade involves energy failure, excitotoxicity, calcium overload, and inflammatory responses. The ischemic penumbra represents salvageable tissue surrounding the infarct core. IV thrombolysis within 4.5 hours and mechanical thrombectomy for large vessel occlusion are evidence-based reperfusion therapies.',
    professional: 'Ischemic stroke (IS) is characterized by central nervous system infarction from arterial occlusion. TOAST classification: Large artery atherosclerosis (embolic or thrombotic), Cardioembolism (high and moderate risk sources), Small vessel occlusion (lacunar), Other determined etiology, and Undetermined (cryptogenic). Pathophysiology involves hemodynamic compromise, thromboembolism, and the ischemic cascade (excitotoxicity, oxidative stress, inflammation). Collateral circulation determines the fate of the ischemic penumbra. Modern management emphasizes rapid reperfusion: IV alteplase within 4.5 hours (class I evidence) and mechanical thrombectomy for anterior circulation large vessel occlusion up to 24 hours with appropriate imaging selection (DAWN, DEFUSE 3 trials).',
  },
  content: [
    {
      title: 'Subtypes and Mechanisms',
      content: {
        patient: `Ischemic stroke has different causes:

Large Artery Stroke: Caused by atherosclerosis (fatty plaque buildup) in major neck or brain arteries. The plaque can rupture and form a clot, or pieces can break off and travel to the brain.

Cardioembolic Stroke: A clot forms in the heart (often due to atrial fibrillation, an irregular heartbeat) and travels through the bloodstream to the brain. These strokes tend to be larger and more severe.

Lacunar Stroke: Small blockages in tiny deep brain arteries, often from long-standing high blood pressure or diabetes. These cause small deep strokes affecting areas like the internal capsule or basal ganglia.`,
        intermediate: `Large Artery Atherosclerotic Stroke: Accounts for 15-20% of ischemic strokes. Occurs at carotid bifurcation, intracranial ICA, MCA, vertebral, or basilar arteries. Mechanisms include in-situ thrombosis from plaque rupture or artery-to-artery embolism of cholesterol, platelet, or thrombotic material. Emboli tend to occlude the MCA (largest territory). 

Cardioembolic Stroke: Accounts for 20-25% of ischemic strokes; responsible for >50% of discrete cerebral infarcts. Sources include atrial fibrillation (most common), mechanical valves, LV thrombus, dilated cardiomyopathy. Characteristics: Sudden onset, Wernicke aphasia possible, hemorrhagic transformation common, multiple territories, cortical deficits.

Lacunar Stroke: Accounts for 20-25% of ischemic strokes. Results from occlusion of single penetrating artery (100-800 um) supplying deep structures. Associated with chronic hypertension and diabetes causing lipohyalinosis (wall thickening, lumen narrowing). Classic lacunar syndromes: pure motor, pure sensory, sensorimotor, ataxic hemiparesis, dysarthria-clumsy hand. Prognosis generally better than cortical strokes.`,
        professional: `Large Artery Atherosclerosis: Pattern of infarction depends on mechanism. Artery-to-artery embolism causes cortical or cerebellar infarcts in distal territory. Hemodynamic compromise causes watershed/borderzone infarcts between vascular territories. Combined mechanisms common. Intracranial atherosclerosis particularly prevalent in Asian, Black, and Hispanic populations.

Cardioembolism: High-risk sources (>5% annual stroke risk): AF, mechanical prosthetic valves, LV thrombus, dilated cardiomyopathy (EF <30%), infective endocarditis, marantic endocarditis. Moderate risk: Mitral annular calcification, PFO with ASA, atrial flutter. Clinical clues: Sudden maximal deficit at onset, decreased consciousness, aphasia/neglect (cortical signs), hemorrhagic transformation, multiple scattered infarcts in different territories.

Small Vessel Disease (Lacunar Infarction): Penetrating arteries affected include lenticulostriates (supplying internal capsule, putamen, caudate), thalamoperforators (thalamus), pontine perforators (pons), recurrent artery of Heubner (caudate head, anterior internal capsule). Pathology: Segmental arterial disorganization (lipohyalinosis), microatheroma, microaneurysm. MRI appearance: Subcortical infarcts 3-15mm; diffusion restriction acutely. Associated white matter changes (leukoaraiosis) reflect diffuse small vessel disease.`,
      },
    },
    {
      title: 'Acute Treatment',
      content: {
        patient: `Ischemic stroke treatments aim to restore blood flow:

Clot-Busting Medicine (Thrombolysis):
- tPA (Alteplase): Given through IV within 4.5 hours of symptom start
- Tenecteplase: Newer option, single injection
- The sooner given, the better the outcome

Mechanical Thrombectomy:
- For large clots in major brain arteries
- Doctor threads a catheter from groin/wrist to brain
- Uses stent or suction to remove clot
- Can be done up to 24 hours in selected patients

These treatments can be given together for best results.`,
        intermediate: `IV Thrombolysis:
- Alteplase: 0.9 mg/kg (max 90 mg); 10% bolus, 90% infusion over 60 minutes
- Window: 4.5 hours from symptom onset (ECASS III)
- Benefit: 30% increased odds of independent outcome; NNT ~8
- Risks: Symptomatic ICH ~6%, systemic bleeding
- Tenecteplase: 0.25 mg/kg IV bolus; non-inferior in AcT and EXTEND-IA TNK trials

Mechanical Thrombectomy:
- Indication: Large vessel occlusion (ICA, M1, proximal M2, basilar)
- Devices: Stent retrievers (Solitaire, Trevo), aspiration catheters (ACE, Sofia), combined techniques
- Evidence: Multiple trials (MR CLEAN, ESCAPE, EXTEND-IA, SWIFT PRIME, REVASCAT) demonstrated benefit with NNT ~3
- Time window: Standard 0-6 hours; extended to 6-24 hours with imaging selection (DAWN, DEFUSE 3)
- Outcomes: 46-60% achieve functional independence (mRS 0-2) vs 13-30% with medical therapy alone`,
        professional: `Reperfusion Therapy - Evidence Base:

IV Thrombolysis:
- NINDS trial (1995): Established benefit within 3 hours despite higher early mortality from hemorrhage
- ECASS III (2008): Extended window to 4.5 hours with benefit
- IST-3 (2012): Broader eligibility; benefit extended to wider population
- WAKE-UP (2018): DWI-FLAIR mismatch identifies patients within 4.5 hours window despite unknown onset
- EXTEND (2019): Perfusion imaging selection up to 9 hours or wake-up stroke; benefit demonstrated
- Tenecteplase: AcT trial showed non-inferiority to alteplase; EXTEND-IA TNK showed superior early reperfusion

Mechanical Thrombectomy:
- Landmark trials (2015): MR CLEAN, ESCAPE, EXTEND-IA, SWIFT PRIME, REVASCAT - all positive
- DAWN (2018): Clinical-core mismatch allows thrombectomy 6-24 hours; mRS 0-2: 49% vs 13%
- DEFUSE 3 (2018): Perfusion-core mismatch 6-16 hours; benefit demonstrated
- AURORA meta-analysis: Benefit across all subgroups
- DIRECT-MT, DEVT: Thrombectomy alone non-inferior to thrombectomy plus thrombolysis in Chinese populations

Combined Approach:
- Bridging therapy: IV thrombolysis followed by thrombectomy
- Direct thrombectomy: Thrombectomy without preceding IV thrombolysis
- Current evidence favors bridging in eligible patients`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'middle-cerebral-artery', structureName: 'Middle Cerebral Artery', linkText: 'MCA', relevance: 'Most common site of occlusion' },
    { structureId: 'internal-carotid-artery', structureName: 'Internal Carotid Artery', linkText: 'ICA', relevance: 'Common source of embolism' },
    { structureId: 'circle-of-willis', structureName: 'Circle of Willis', linkText: 'Circle of Willis', relevance: 'Collateral circulation' },
  ],
  references: [
    {
      referenceId: 'toast-classification',
      type: 'journal-article',
      title: 'Classification of Subtype of Acute Ischemic Stroke',
      authors: 'Adams HP Jr, et al.',
      source: 'Stroke',
      year: 1993,
      citation: 'Adams HP Jr, et al. Classification of Subtype of Acute Ischemic Stroke. Stroke. 1993;24(1):35-41.',
    },
  ],
  relatedEntries: [
    { entryId: 'stroke', entryType: 'condition', name: 'Stroke Overview', relationship: 'part-of' },
    { entryId: 'alteplase', entryType: 'medication', name: 'Alteplase', relationship: 'treated-by' },
    { entryId: 'mechanical-thrombectomy', entryType: 'procedure', name: 'Mechanical Thrombectomy', relationship: 'treated-by' },
  ],
  searchMetadata: {
    primaryKeywords: ['ischemic stroke', 'cerebral infarction', 'brain ischemia', 'arterial occlusion'],
    tags: ['neurology', 'emergency', 'cerebrovascular', 'thrombosis'],
    abbreviations: ['IS', 'AIS'],
    icdCodes: ['I63'],
  },
  clinicalImportance: 'essential',
  reviewStatus: 'approved',
  lastUpdated: '2026-02-02',
  version: '1.0',
  author: 'SOMA Medical Encyclopedia',
};

// ═══════════════════════════════════════════════════════════════════════════════
// HEMORRHAGIC STROKE - SPECIFIC ENTRY
// ═══════════════════════════════════════════════════════════════════════════════

export const hemorrhagicStrokeEntry: EncyclopediaEntry = {
  entryId: 'hemorrhagic-stroke',
  name: 'Hemorrhagic Stroke',
  entryType: 'condition',
  category: 'neurologic',
  subcategory: 'cerebrovascular',
  summary: 'Stroke caused by bleeding into or around the brain, including intracerebral hemorrhage and subarachnoid hemorrhage, accounting for approximately 15% of strokes.',
  overview: {
    patient: 'Hemorrhagic stroke occurs when a blood vessel in or around the brain ruptures and bleeds. Although less common than ischemic stroke (about 15% of strokes), it is more deadly. There are two main types: intracerebral hemorrhage (bleeding inside the brain tissue, usually from high blood pressure) and subarachnoid hemorrhage (bleeding around the brain, often from a ruptured aneurysm). Symptoms include sudden severe headache, vomiting, confusion, and loss of consciousness. Immediate medical attention is critical.',
    intermediate: 'Hemorrhagic stroke results from blood vessel rupture causing bleeding into the brain parenchyma (intracerebral hemorrhage, ICH) or subarachnoid space (subarachnoid hemorrhage, SAH). ICH causes direct tissue destruction, mass effect, and perihematomal edema; hypertensive vasculopathy and cerebral amyloid angiopathy are leading causes. SAH is most commonly caused by ruptured saccular aneurysms. Mortality is high: 30-50% for ICH, 40-50% for aneurysmal SAH. Management focuses on preventing hematoma expansion (blood pressure control, reversal of anticoagulation), surgical or endovascular securing of aneurysms, and managing complications (vasospasm, hydrocephalus, cerebral edema).',
    professional: 'Hemorrhagic stroke encompasses spontaneous intracerebral hemorrhage (10% of all strokes) and aneurysmal subarachnoid hemorrhage (3%). ICH etiologies include hypertensive vasculopathy (Charcot-Bouchard microaneurysms on penetrating arteries), cerebral amyloid angiopathy (lobar hemorrhages), anticoagulation, vascular malformations, and coagulopathy. SAH results from saccular aneurysm rupture (85%) or non-aneurysmal perimesencephalic hemorrhage. Pathophysiology involves hematoma formation with direct tissue injury, perihematomal edema (thrombin toxicity, complement activation, iron-mediated oxidative stress), and intracranial hypertension. Acute management emphasizes blood pressure control (INTERACT2, ATACH-2), rapid reversal of anticoagulation, and neurosurgical/neurointerventional interventions for selected cases.',
  },
  content: [
    {
      title: 'Types of Hemorrhagic Stroke',
      content: {
        patient: `There are two main types of hemorrhagic stroke:

Intracerebral Hemorrhage (ICH): Bleeding directly into the brain tissue. Most commonly caused by chronic high blood pressure that damages small arteries over time. Common locations include the putamen (deep brain), thalamus, pons, and cerebellum. In elderly patients, a condition called cerebral amyloid angiopathy can cause bleeding in the brain's outer lobes.

Subarachnoid Hemorrhage (SAH): Bleeding into the space surrounding the brain, between the brain and the thin tissues covering it. Most often caused by a ruptured brain aneurysm - a weak spot in a blood vessel wall that balloons out and bursts. The hallmark symptom is a sudden, severe "thunderclap" headache.`,
        intermediate: `Intracerebral Hemorrhage (ICH):
- Hypertensive ICH (50-60%): Chronic hypertension causes lipohyalinosis of penetrating arteries; Charcot-Bouchard microaneurysms form and rupture. Typical locations: putamen/external capsule (60-65%), thalamus (15-25%), pons (5-10%), cerebellum (5-7%).
- Cerebral amyloid angiopathy (CAA): Beta-amyloid deposition in cortical and leptomeningeal vessels; causes lobar hemorrhages, often recurrent, in elderly; associated with Alzheimer disease; microbleeds on MRI and cortical superficial siderosis are markers.
- Other causes: Anticoagulation-related, vascular malformations (AVM, cavernoma), coagulopathy, tumor bleeding, sympathomimetic drugs (cocaine, amphetamines), vasculitis.

Subarachnoid Hemorrhage (SAH):
- Aneurysmal SAH (85%): Saccular (berry) aneurysms at arterial bifurcations; anterior circulation 85% (AComA 30%, MCA 25%, ICA/PCoA 20%); posterior circulation 15% (basilar tip, vertebral/PICA).
- Non-aneurysmal SAH: Perimesencephalic pattern (venous origin, benign prognosis), trauma, dissection, vasculitis, coagulopathy.
- Risk factors: Hypertension, smoking, heavy alcohol use, familial history, ADPKD, Ehlers-Danlos IV, NF1.
- Complications: Rebleeding (highest risk day 1-2), delayed cerebral ischemia from vasospasm (days 3-14), hydrocephalus, hyponatremia, cardiac dysfunction.`,
        professional: `ICH Detailed Pathophysiology:

Hematoma Expansion:
- Occurs in 30-40% of patients within first 3 hours; predicts poor outcome
- "Spot sign" on CTA (contrast extravasation) predicts expansion
- Ultra-early BP reduction may limit expansion (INTERACT2)

Perihematomal Edema:
- Develops within hours, peaks 3-14 days
- Mechanisms: Thrombin toxicity, complement activation, plasmin activation, iron-mediated oxidative stress from erythrocyte lysis

Location-Specific Considerations:
- Putaminal hemorrhage: Most common; internal capsule involvement causes dense hemiparesis
- Thalamic hemorrhage: Vertical gaze palsy, miosis, hydrocephalus common
- Pontine hemorrhage: Devastating; pinpoint pupils, quadriparesis, coma
- Cerebellar hemorrhage: Surgical emergency if >3cm or brainstem compression
- Lobar hemorrhage: Seizures more common; CAA common cause in elderly

SAH Advanced Concepts:

Aneurysm Pathophysiology:
- Hemodynamic stress at bifurcations leads to internal elastic lamina disruption
- Risk factors promote aneurysm formation and growth
- Rupture risk related to size (>7mm higher risk), location, shape (irregular)

Clinical Grading:
- Hunt-Hess: I (asymptomatic/minimal headache) to V (coma, decerebrate)
- WFNS: Combines GCS and motor deficit
- Modified Fisher Scale: Predicts vasospasm risk

Delayed Cerebral Ischemia (DCI):
- Occurs 3-14 days post-SAH; from large artery vasospasm and microcirculatory dysfunction
- Treatment: Induced hypertension, intra-arterial vasodilators, angioplasty
- Prevention: Nimodipine (evidence-based)`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'basal-ganglia', structureName: 'Basal Ganglia', linkText: 'Basal Ganglia', relevance: 'Common site of hypertensive ICH' },
    { structureId: 'cerebellum', structureName: 'Cerebellum', linkText: 'Cerebellum', relevance: 'Site of hemorrhage requiring surgery' },
    { structureId: 'circle-of-willis', structureName: 'Circle of Willis', linkText: 'Circle of Willis', relevance: 'Location of most aneurysms' },
  ],
  references: [
    {
      referenceId: 'ich-guideline-2022',
      type: 'guideline',
      title: '2022 Guideline for the Management of Spontaneous Intracerebral Hemorrhage',
      authors: 'Greenberg SM, et al.',
      source: 'Stroke',
      year: 2022,
      citation: 'Greenberg SM, et al. 2022 Guideline for the Management of Spontaneous Intracerebral Hemorrhage. Stroke. 2022;53(7):e282-e361.',
    },
  ],
  relatedEntries: [
    { entryId: 'stroke', entryType: 'condition', name: 'Stroke Overview', relationship: 'part-of' },
    { entryId: 'intracerebral-hemorrhage', entryType: 'condition', name: 'Intracerebral Hemorrhage', relationship: 'similar-to' },
    { entryId: 'subarachnoid-hemorrhage', entryType: 'condition', name: 'Subarachnoid Hemorrhage', relationship: 'similar-to' },
  ],
  searchMetadata: {
    primaryKeywords: ['hemorrhagic stroke', 'brain bleed', 'intracranial hemorrhage', 'cerebral hemorrhage'],
    tags: ['neurology', 'emergency', 'neurosurgery', 'critical-care'],
    abbreviations: ['ICH', 'SAH', 'IVH'],
    icdCodes: ['I61', 'I60'],
  },
  clinicalImportance: 'essential',
  reviewStatus: 'approved',
  lastUpdated: '2026-02-02',
  version: '1.0',
  author: 'SOMA Medical Encyclopedia',
};

// ═══════════════════════════════════════════════════════════════════════════════
// TIA ENTRY
// ═══════════════════════════════════════════════════════════════════════════════

export const tiaEntry: EncyclopediaEntry = {
  entryId: 'tia',
  name: 'Transient Ischemic Attack (TIA)',
  entryType: 'condition',
  category: 'neurologic',
  subcategory: 'cerebrovascular',
  summary: 'A temporary episode of neurological dysfunction caused by focal brain, spinal cord, or retinal ischemia without acute infarction, often called a "mini-stroke."',
  overview: {
    patient: 'A transient ischemic attack (TIA), sometimes called a "mini-stroke," is a temporary blockage of blood flow to the brain that does not cause permanent damage. Symptoms are the same as stroke but resolve completely within minutes to hours (usually less than 1 hour). Even though symptoms go away, a TIA is a serious warning sign - about 1 in 3 people who have a TIA will eventually have a stroke, with the highest risk within the first 48 hours. You should seek emergency care immediately even if symptoms resolve completely.',
    intermediate: 'TIA is defined as a transient episode of neurological dysfunction caused by focal brain, spinal cord, or retinal ischemia without evidence of acute infarction on neuroimaging. The modern tissue-based definition has replaced the older time-based definition (symptoms <24 hours). TIA and minor stroke represent a continuum; the distinction depends on imaging rather than symptom duration. Short-term stroke risk is substantial: 4-10% at 7 days, 8-12% at 30 days, and 10-20% at 90 days. Risk stratification tools (ABCD2, ABCD3-I) guide urgency of evaluation. All patients require urgent brain imaging, vascular imaging, and cardiac monitoring.',
    professional: 'TIA is defined as a transient episode of neurological dysfunction caused by focal brain, spinal cord, or retinal ischemia without acute infarction (AHA/ASA 2009 tissue-based definition). This replaces the traditional time-based definition, recognizing that tissue status (imaging) rather than arbitrary time thresholds determines significance. Differentiation from minor stroke depends on DWI negativity. Stroke risk after TIA is highest in the first 48 hours (2-day risk 4-5%). ABCD2 score (Age, Blood pressure, Clinical features, Duration, Diabetes) and its extensions (ABCD3-I with Dual TIA and Imaging) stratify risk. Current guidelines recommend urgent evaluation within 24 hours with brain MRI (DWI), CTA/MRA of head and neck, and cardiac monitoring (minimum 24 hours, preferably 30 days for cryptogenic cases).',
  },
  content: [
    {
      title: 'Risk Stratification',
      content: {
        patient: `Doctors use scoring systems to determine stroke risk after TIA:

ABCD2 Score:
- Age 60 or older: 1 point
- Blood pressure 140/90 or higher: 1 point
- Clinical symptoms:
  * Weakness on one side: 2 points
  * Speech problem without weakness: 1 point
- Duration:
  * 10-59 minutes: 1 point
  * 60 minutes or more: 2 points
- Diabetes: 1 point

Score interpretation:
- 0-3: Low risk (1% stroke at 2 days)
- 4-5: Moderate risk (4% stroke at 2 days)
- 6-7: High risk (8% stroke at 2 days)

Higher scores mean you need more urgent evaluation and treatment.`,
        intermediate: `ABCD2 Score Components:
- Age >=60 years: 1 point
- Blood pressure >=140/90 mmHg: 1 point
- Clinical features: Unilateral weakness (2 points), Speech impairment without weakness (1 point)
- Duration: >=60 minutes (2 points), 10-59 minutes (1 point)
- Diabetes: 1 point

Predictive Performance:
- Score 0-3: 2-day stroke risk 1.0%, 7-day risk 1.2%, 90-day risk 3.1%
- Score 4-5: 2-day risk 4.1%, 7-day risk 5.9%, 90-day risk 9.8%
- Score 6-7: 2-day risk 8.1%, 7-day risk 11.7%, 90-day risk 17.8%

ABCD3-I Score (Improved):
- ABCD2 components plus:
- Dual TIA (>=2 TIAs within 7 days): 2 points
- Carotid stenosis >=50%: 2 points
- DWI lesion: 2 points

Better discrimination for high-risk patients; imaging components most predictive.`,
        professional: `Risk Stratification Tools:

ABCD2 Score:
- Development: Rothwell et al.; validated in multiple populations
- Performance: C-statistic 0.60-0.72 for 7-day stroke
- Clinical use: Identifies low-risk patients who may not need hospitalization

ABCD3 and ABCD3-I:
- Added components improve discrimination
- Imaging (DWI lesion, carotid stenosis) most predictive
- C-statistic 0.75-0.80 for ABCD3-I

ESSEN Score:
- Predicts recurrent stroke and cardiovascular events
- Components: Age >65, hypertension, diabetes, prior MI, other cardiovascular disease, peripheral artery disease, smoking

Risk Score Applications:
- SOAR (Stroke subtype, Oxfordshire classification, Age, prestroke mRS): Predicts early mortality
- SPI-II: Predicts 2-year stroke recurrence`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'brain', structureName: 'Brain', linkText: 'Brain', relevance: 'Affected tissue' },
    { structureId: 'internal-carotid-artery', structureName: 'Internal Carotid Artery', linkText: 'Carotid Artery', relevance: 'Common source' },
  ],
  references: [
    {
      referenceId: 'tia-definition-2009',
      type: 'guideline',
      title: 'Definition and Evaluation of Transient Ischemic Attack',
      authors: 'Easton JD, et al.',
      source: 'Stroke',
      year: 2009,
      citation: 'Easton JD, et al. Definition and Evaluation of Transient Ischemic Attack. Stroke. 2009;40(6):2276-2293.',
    },
  ],
  relatedEntries: [
    { entryId: 'stroke', entryType: 'condition', name: 'Stroke', relationship: 'causes' },
    { entryId: 'ischemic-stroke', entryType: 'condition', name: 'Ischemic Stroke', relationship: 'similar-to' },
  ],
  searchMetadata: {
    primaryKeywords: ['TIA', 'transient ischemic attack', 'mini stroke', 'amaurosis fugax'],
    tags: ['neurology', 'emergency', 'warning sign'],
    abbreviations: ['TIA', 'ABCD2'],
    icdCodes: ['G45'],
  },
  clinicalImportance: 'essential',
  reviewStatus: 'approved',
  lastUpdated: '2026-02-02',
  version: '1.0',
  author: 'SOMA Medical Encyclopedia',
};

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORT ALL ENTRIES
// ═══════════════════════════════════════════════════════════════════════════════

export const strokeEntries: EncyclopediaEntry[] = [
  strokeOverviewEntry,
  ischemicStrokeEntry,
  hemorrhagicStrokeEntry,
  tiaEntry,
];

export default strokeEntries;
