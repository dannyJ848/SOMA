/**
 * Ischemic Stroke - In-Depth Neurology Content
 *
 * Comprehensive coverage of ischemic stroke pathophysiology, classification,
 * acute management with thrombolytics and thrombectomy, and secondary prevention.
 */

import { EducationalContent } from '../../types';

export const ischemicStrokeContent: EducationalContent = {
  id: 'neuro-ischemic-stroke-depth',
  type: 'condition',
  name: 'Ischemic Stroke',
  nameEs: 'Accidente Cerebrovascular Isquémico',
  alternateNames: ['Cerebral Infarction', 'Ischemic CVA', 'Brain Infarct'],
  hpoId: 'HP:0002140',

  levels: {
    1: {
      level: 1,
      summary:
        'An ischemic stroke happens when a blood clot blocks blood flow to part of the brain, causing brain cells to die from lack of oxygen.',
      explanation: `## What Is an Ischemic Stroke?

An ischemic stroke is the most common type of stroke, making up about 87% of all strokes. It happens when a blood clot blocks a blood vessel that carries blood to the brain.

## How It Happens

Think of the blood vessels in your brain like water pipes in a house:
- **A clot forms in the pipe (thrombotic)**: Fatty buildup narrows the pipe over time, then a clot blocks it completely
- **A clot travels to the pipe (embolic)**: A clot forms somewhere else (often the heart) and travels through the blood until it gets stuck in a smaller brain vessel

## Warning Signs - Act FAST

**F** - Face drooping on one side
**A** - Arm weakness or numbness
**S** - Speech that is slurred or hard to understand
**T** - Time to call 911 immediately

Other warning signs include:
- Sudden confusion
- Trouble seeing in one or both eyes
- Sudden trouble walking or dizziness
- Sudden severe headache with no known cause

## Why Every Minute Matters

When blood flow is blocked:
- Brain cells start dying within **minutes**
- About **2 million brain cells die every minute** without treatment
- Quick treatment can save brain tissue and reduce permanent damage

## What Doctors Can Do

- **Clot-busting medicine**: Given through an IV to dissolve the clot (must be given within hours)
- **Clot removal procedure**: A doctor threads a tiny device through blood vessels to physically pull out the clot
- **Preventing future strokes**: Blood thinners, blood pressure medicine, healthy lifestyle changes`,

      keyTerms: [
        { term: 'ischemic stroke', definition: 'A stroke caused by a blood clot blocking blood flow to the brain', pronunciation: 'iss-KEE-mik' },
        { term: 'blood clot', definition: 'A thick lump of blood that can block a blood vessel' },
        { term: 'brain cells', definition: 'The tiny building blocks of the brain that control everything you do' },
        { term: 'blood vessel', definition: 'A tube that carries blood through your body' },
      ],
      analogies: [
        'An ischemic stroke is like a clogged drain - water (blood) cannot flow through to where it is needed.',
        'Brain cells without blood are like fish out of water - they cannot survive without what they need.',
        'A clot traveling to the brain is like a ball rolling through pipes until it gets stuck at a narrow spot.',
      ],
      examples: [
        'A 70-year-old man suddenly cannot move his right arm and has trouble speaking - he is having an ischemic stroke.',
        'A woman with an irregular heartbeat develops sudden weakness on her left side because a clot from her heart traveled to her brain.',
        'A person wakes up and notices their face is drooping - they call 911 and get life-saving treatment at the hospital.',
      ],
      patientCounselingPoints: [
        'Call 911 immediately if you notice any stroke warning signs - do not drive yourself to the hospital.',
        'Note the exact time symptoms started - this helps doctors decide on treatment.',
        'Take your blood pressure and cholesterol medicines as prescribed to prevent strokes.',
        'If you have atrial fibrillation, take your blood thinner exactly as directed.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Ischemic stroke results from arterial occlusion by thrombosis or embolism, classified by TOAST criteria into large artery, cardioembolic, small vessel, other, and cryptogenic subtypes.',
      explanation: `## Classification (TOAST Criteria)

**1. Large Artery Atherosclerosis (20-25%)**
- Atherosclerotic plaque in carotid or intracranial arteries
- Usually causes stenosis >50%
- Risk factors: hypertension, diabetes, smoking, hyperlipidemia

**2. Cardioembolism (25-30%)**
- Clot originates in the heart
- Most common source: atrial fibrillation (AF)
- Other sources: mechanical valves, endocarditis, cardiac tumors, recent MI with mural thrombus

**3. Small Vessel Disease / Lacunar (20-25%)**
- Occlusion of small penetrating arteries
- Creates small infarcts (<1.5 cm) called lacunes
- Common locations: basal ganglia, thalamus, internal capsule, pons
- Classic syndromes: pure motor, pure sensory, ataxic hemiparesis

**4. Other Determined Causes (5%)**
- Arterial dissection (especially in young patients)
- Vasculitis
- Hypercoagulable states
- Sickle cell disease

**5. Cryptogenic (25-30%)**
- No identified cause after full workup
- May be due to undetected paroxysmal AF or PFO

## Clinical Presentation by Vascular Territory

**Middle Cerebral Artery (MCA) - Most Common:**
- Contralateral face and arm > leg weakness
- Aphasia (dominant hemisphere, usually left)
- Neglect (non-dominant hemisphere, usually right)
- Gaze preference toward the lesion

**Anterior Cerebral Artery (ACA):**
- Contralateral leg > arm weakness
- Personality changes, abulia (lack of will)
- Urinary incontinence

**Posterior Cerebral Artery (PCA):**
- Contralateral homonymous hemianopia
- Memory impairment (if bilateral)
- Alexia without agraphia (dominant)

**Vertebrobasilar:**
- Cranial nerve deficits
- Crossed signs (ipsilateral face, contralateral body)
- Vertigo, nystagmus, ataxia
- Locked-in syndrome (basilar occlusion)

## Acute Evaluation Timeline

1. **Door to CT**: <25 minutes
2. **Door to labs**: Finger stick glucose immediately
3. **Door to tPA**: Goal <60 minutes
4. **CTA**: Identify large vessel occlusion for thrombectomy consideration`,

      keyTerms: [
        { term: 'TOAST classification', definition: 'System categorizing ischemic stroke into five subtypes based on cause' },
        { term: 'lacunar stroke', definition: 'Small stroke from blockage of a tiny penetrating brain artery' },
        { term: 'aphasia', definition: 'Difficulty producing or understanding language from brain damage', pronunciation: 'ah-FAY-zhah' },
        { term: 'hemianopia', definition: 'Loss of vision in half of the visual field', pronunciation: 'hem-ee-an-OH-pee-ah' },
        { term: 'cryptogenic', definition: 'Of unknown origin despite complete evaluation' },
      ],
      analogies: [
        'The TOAST classification is like diagnosing why a pipe is clogged - was it rust buildup, debris from upstream, or a tiny pipe narrowing?',
        'Hemispatial neglect is like one half of the world simply ceasing to exist for the patient.',
      ],
      examples: [
        'A patient with atrial fibrillation who stopped taking blood thinners develops sudden left-sided weakness - likely right MCA cardioembolic stroke.',
        'A diabetic patient develops pure motor hemiparesis affecting the right face, arm, and leg equally - classic lacunar stroke in the left internal capsule.',
        'A 35-year-old with sudden neck pain and Horner syndrome develops contralateral weakness - arterial dissection causing stroke.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Ischemic stroke management centers on emergent reperfusion therapy (IV thrombolysis and mechanical thrombectomy), supported by neuroimaging-guided patient selection and standardized stroke protocols.',
      explanation: `## Pathophysiology

**Ischemic Cascade:**
1. Arterial occlusion reduces cerebral blood flow (CBF)
2. CBF <10 mL/100g/min: Irreversible neuronal death (infarct core)
3. CBF 10-22 mL/100g/min: Ischemic penumbra (at risk, potentially salvageable)
4. Energy failure leads to glutamate release, calcium influx, free radical production
5. Inflammation amplifies injury over hours to days

**Penumbra Concept:**
- Core: Already dead tissue (CBF <30% normal)
- Penumbra: Functionally impaired but structurally intact tissue
- Collateral circulation sustains the penumbra temporarily
- Goal of reperfusion: Save the penumbra before it progresses to core

## Reperfusion Therapies

**IV Alteplase (tPA):**
- Dose: 0.9 mg/kg (max 90 mg), 10% bolus, remainder over 60 min
- Window: 0-4.5 hours from last known well (LKW)
- NINDS trial: NNT = 8 for favorable outcome at 3 months
- Extended criteria (3-4.5h): Age <80, no diabetes + prior stroke, NIHSS <25

**IV Tenecteplase:**
- Single bolus: 0.25 mg/kg (max 25 mg)
- Non-inferior to alteplase, easier administration
- Preferred in many centers, especially before thrombectomy

**Mechanical Thrombectomy:**
- Indicated for large vessel occlusion (LVO): ICA, M1, proximal M2, basilar
- Standard window: 0-6 hours (MR CLEAN, ESCAPE, EXTEND-IA, SWIFT PRIME, REVASCAT)
- Extended window: 6-24 hours with imaging selection
  - DAWN: Clinical-core mismatch (NIHSS >= 10 with small core)
  - DEFUSE 3: Perfusion mismatch ratio >= 1.8, core < 70 mL
- NNT = 2.6 for reduced disability
- Can be performed after or without IV thrombolysis

**Blood Pressure Management:**
- Pre-reperfusion: Lower to <185/110 before tPA
- During/after tPA: Maintain <180/105 for 24 hours
- Post-thrombectomy (successful): Target SBP <140
- No reperfusion: Permissive HTN up to 220/120 (avoid lowering >15%)

## NIHSS (National Institutes of Health Stroke Scale)

- 0-42 point scale assessing 11 domains
- Key domains: Level of consciousness, gaze, visual fields, facial palsy, limb motor, ataxia, sensory, language, dysarthria, extinction/neglect
- Severity: 0 = no deficit, 1-4 minor, 5-15 moderate, 16-20 moderate-severe, 21-42 severe
- Guides tPA eligibility and prognosis

## Stroke Mimics

- **Hypoglycemia**: Always check glucose first
- **Seizure with Todd paralysis**: Post-ictal weakness lasting hours
- **Complex migraine**: Aura can mimic stroke
- **Conversion disorder**: Non-anatomical distribution
- **Brain tumor**: Subacute onset, headache, seizures`,

      keyTerms: [
        { term: 'ischemic penumbra', definition: 'Brain tissue at risk of dying but still salvageable if blood flow is restored in time' },
        { term: 'alteplase', definition: 'Recombinant tissue plasminogen activator (tPA) used to dissolve blood clots', pronunciation: 'AL-teh-place' },
        { term: 'thrombectomy', definition: 'Surgical removal of a blood clot, typically via catheter through the groin', pronunciation: 'throm-BEK-toh-mee' },
        { term: 'NIHSS', definition: 'National Institutes of Health Stroke Scale - standardized assessment of stroke severity' },
        { term: 'last known well', definition: 'The last time the patient was observed at their neurological baseline' },
      ],
      analogies: [
        'The penumbra is like a ring of wilting flowers around dead ones - water them quickly and they recover; wait too long and they die too.',
        'Thrombectomy is like using a tiny vacuum cleaner threaded through your blood vessels to suck out the clot.',
      ],
      examples: [
        'A patient arrives at 2 hours with left MCA occlusion on CTA, NIHSS 16 - receives IV tPA and proceeds to thrombectomy.',
        'A wake-up stroke patient has DWI-FLAIR mismatch on MRI suggesting onset <4.5 hours - eligible for IV thrombolysis.',
        'A patient at 14 hours with right M1 occlusion has CT perfusion showing 8 mL core and 90 mL penumbra - qualifies for thrombectomy.',
      ],
      clinicalNotes:
        'Door-to-needle goal: <60 minutes. Door-to-groin puncture goal: <90 minutes. Always check glucose before tPA. Tenecteplase is increasingly preferred for its simpler dosing and superior recanalization in LVO.',
    },

    4: {
      level: 4,
      summary:
        'Advanced ischemic stroke care integrates multimodal imaging for patient selection, addresses complications including hemorrhagic transformation and malignant edema, and employs precision secondary prevention based on stroke etiology.',
      explanation: `## Advanced Neuroimaging

**CT Perfusion (CTP):**
- Cerebral Blood Flow (CBF): Volume of blood per unit time per tissue mass
- Cerebral Blood Volume (CBV): Total blood in a given tissue volume
- Mean Transit Time (MTT): CBV / CBF
- Tmax: Time to peak of deconvolved residue function
- Core estimation: CBF <30% (RAPID software: Tmax > 10s approximation)
- Penumbra estimation: Tmax >6s
- Mismatch ratio: Penumbra volume / Core volume (goal >= 1.8 for extended window)

**MRI Sequences:**
- DWI (Diffusion-Weighted Imaging): Detects cytotoxic edema within minutes
- FLAIR: Becomes positive after ~4.5 hours (DWI-FLAIR mismatch for timing)
- SWI/GRE: Detects hemorrhage, microbleeds
- MRA: Non-invasive vascular imaging
- Vessel wall imaging: Evaluates intracranial atherosclerosis, dissection, vasculitis

**Collateral Assessment:**
- CTA multiphase or delayed-phase imaging
- Good collaterals = slower core growth = better thrombectomy outcomes
- Collateral status may be more important than time

## Hemorrhagic Transformation (HT)

**ECASS Classification:**
- HI-1: Small petechiae along infarct margins
- HI-2: More confluent petechiae within infarct, no mass effect
- PH-1: Hematoma <30% infarct area, mild mass effect
- PH-2: Hematoma >30% infarct area with significant mass effect (symptomatic)

**Risk Factors for HT:**
- Large infarct volume, reperfusion therapy, anticoagulation
- Hyperglycemia, high NIHSS score, early CT hypodensity

**Management of Symptomatic ICH Post-tPA:**
1. Stop tPA infusion immediately
2. Stat CT head
3. Cryoprecipitate 10 units (target fibrinogen >200)
4. Tranexamic acid 1g IV
5. Platelet transfusion if count <100K
6. Neurosurgical consultation

## Malignant MCA Infarction

- Complete MCA territory infarction with massive edema
- Peak edema days 2-5; mortality ~80% with medical management alone
- **Decompressive hemicraniectomy**: Reduces mortality to ~20% (DECIMAL, DESTINY, HAMLET)
- Best outcomes in patients <60 years, operated within 48 hours
- Improves survival but many survivors have moderate-severe disability (mRS 4)

## Etiologic Workup

**Cardiac Evaluation:**
- Telemetry during admission (minimum 24-48h)
- TTE; TEE if PFO or valvular disease suspected
- Extended cardiac monitoring: 30-day Holter or implantable loop recorder
- CRYSTAL-AF: ILR detected AF in 30% at 3 years

**Antiplatelet Strategy:**
- Minor stroke (NIHSS <=3) or high-risk TIA: DAPT x 21 days (POINT, CHANCE)
- Intracranial atherosclerosis: DAPT x 90 days (SAMMPRIS medical arm)
- CYP2C19 testing guides clopidogrel efficacy

**Anticoagulation for AF:**
- DOAC preferred (apixaban, rivaroxaban, dabigatran, edoxaban)
- Timing: Based on infarct size - small 48h, moderate 3-5d, large 7-14d
- Mechanical valve: Warfarin (INR 2.5-3.5)

**Statin Therapy:**
- High-intensity statin for all ischemic stroke patients
- Target LDL <70 mg/dL (some guidelines <55)
- Add ezetimibe or PCSK9 inhibitor if target not reached`,

      keyTerms: [
        { term: 'Tmax', definition: 'Time to maximum of the deconvolved residue function on CT perfusion; >6 seconds indicates penumbra' },
        { term: 'DWI-FLAIR mismatch', definition: 'DWI positive with FLAIR negative suggests stroke onset less than 4.5 hours ago' },
        { term: 'hemorrhagic transformation', definition: 'Bleeding into an area of ischemic brain infarction' },
        { term: 'decompressive hemicraniectomy', definition: 'Removal of a skull bone flap to relieve pressure from massive brain swelling' },
        { term: 'DAPT', definition: 'Dual antiplatelet therapy, typically aspirin plus clopidogrel' },
      ],
      clinicalNotes:
        'RAPID software is the most widely used automated perfusion analysis. Collateral assessment on CTA is a key predictor of thrombectomy success. For malignant MCA infarction, discuss hemicraniectomy early with family. CYP2C19 genotyping can guide antiplatelet selection.',
    },

    5: {
      level: 5,
      summary:
        'Cutting-edge ischemic stroke management encompasses tenecteplase adoption, extended thrombectomy indications, neuroprotection trials, precision anticoagulation timing, and integrated neurovascular care systems.',
      explanation: `## Evolving Reperfusion Paradigms

**Tenecteplase as Standard:**
- AcT-TRACE randomized trials support non-inferiority to alteplase
- Single IV bolus (0.25 mg/kg, max 25 mg) simplifies administration
- Higher fibrin specificity, longer half-life, better early recanalization for LVO
- Increasingly adopted as first-line thrombolytic worldwide

**Expanding Thrombectomy Indications:**
- M2 and M3 occlusions: MR CLEAN-LATE, emerging data supportive
- Basilar artery occlusion: ATTENTION, BAOCHE trials support thrombectomy
- Low NIHSS with LVO: Under investigation (MR CLEAN-NO IV)
- Large core infarcts (ASPECTS 3-5): SELECT2, ANGEL-ASPECT, RESCUE-Japan LIMIT
- Direct thrombectomy without IV tPA: MR CLEAN-NO IV, SWIFT DIRECT

**Tandem Occlusions (Cervical ICA + Intracranial):**
- Acute carotid stenting + intracranial thrombectomy
- Antiplatelet management peri-procedurally: IV cangrelor or tirofiban

## Neuroprotection

**Current Investigations:**
- Nerinetide (NA-1): PSD-95 inhibitor - ESCAPE-NA1 showed benefit without tPA
- Remote ischemic conditioning: RESIST trial
- Glibenclamide (glyburide): SUR1-TRPM4 channel blocker reducing edema (CHARM trial)
- Therapeutic hypothermia: Technically challenging, mixed results

## Precision Secondary Prevention

**PFO and Cryptogenic Stroke:**
- ROPE score stratifies probability PFO is causative (0-10)
- Closure indicated: Age <60, ROPE >=7, moderate-large shunt
- CLOSE, RESPECT, REDUCE trials support closure; NNT ~20-28 over 5 years

**ESUS (Embolic Stroke of Undetermined Source):**
- NAVIGATE-ESUS, RE-SPECT ESUS: Anticoagulation not superior to aspirin
- Subclinical AF detection with prolonged monitoring is key

**Intracranial Atherosclerosis:**
- Aggressive medical therapy superior to stenting (SAMMPRIS)
- Wingspan stenting reserved for failure of maximal medical therapy

**Carotid Revascularization:**
- Symptomatic stenosis >=50%: CEA or TCAR within 14 days
- CREST-2 evaluating revascularization vs medical therapy for asymptomatic stenosis

## Anticoagulation Timing Post-Stroke

**ELAN Trial:**
- Early anticoagulation (within 48h for small/moderate infarcts) is safe
- Small infarct: Start DOAC at 24-48 hours
- Moderate infarct: Start at 3-5 days
- Large infarct: Start at 7-14 days

## Stroke Systems of Care

**Mobile Stroke Units:**
- CT scanner in ambulance, tPA in field
- BEST-MSU: Improved functional outcomes with prehospital tPA

**Quality Metrics (Get With The Guidelines):**
- Door-to-needle: <60 min (target <45 min)
- Door-to-groin: <90 min
- Dysphagia screen, DVT prophylaxis, antithrombotic at discharge
- Anticoagulation for AF, statin at discharge, rehabilitation assessment`,

      keyTerms: [
        { term: 'tenecteplase', definition: 'Modified tPA with single-bolus dosing, increasingly adopted as standard thrombolytic' },
        { term: 'ROPE score', definition: 'Risk of Paradoxical Embolism score estimating likelihood a PFO caused stroke' },
        { term: 'ESUS', definition: 'Embolic Stroke of Undetermined Source - a subset of cryptogenic stroke' },
        { term: 'TCAR', definition: 'TransCarotid Artery Revascularization with flow reversal neuroprotection' },
        { term: 'mobile stroke unit', definition: 'Ambulance equipped with CT scanner enabling prehospital tPA' },
        { term: 'tandem occlusion', definition: 'Simultaneous cervical ICA and intracranial vessel occlusion' },
      ],
      clinicalNotes: `Key practice pearls:
1. Tenecteplase single bolus is replacing alteplase infusion in many centers
2. Large core thrombectomy (ASPECTS 3-5) now supported by SELECT2 and ANGEL-ASPECT
3. Basilar occlusion thrombectomy supported by ATTENTION and BAOCHE
4. ELAN trial supports early anticoagulation (48h) for small-moderate AF-related strokes
5. PFO closure for patients <60 with ROPE >=7 and no alternative etiology
6. CYP2C19 genotyping guides clopidogrel use; consider ticagrelor for poor metabolizers
7. Mobile stroke units improve outcomes by enabling prehospital thrombolysis
8. Intracranial atherosclerosis: medical therapy remains standard per SAMMPRIS`,
    },
  },

  media: [
    {
      id: 'ischemic-stroke-ct-perfusion',
      type: 'image',
      filename: 'ct_perfusion_core_penumbra.jpg',
      title: 'CT Perfusion: Core vs. Penumbra',
      description: 'CT perfusion maps showing CBF core and Tmax penumbra with mismatch indicating salvageable tissue',
    },
    {
      id: 'ischemic-stroke-vascular-territories',
      type: 'diagram',
      filename: 'cerebral_vascular_territories.svg',
      title: 'Cerebral Vascular Territories',
      description: 'ACA, MCA, and PCA territories with associated clinical syndromes',
    },
  ],

  citations: [
    {
      id: 'powers-ais-guidelines-2019',
      type: 'article',
      title: 'Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update',
      authors: ['Powers WJ', 'Rabinstein AA', 'Ackerson T'],
      source: 'Stroke',
      url: 'https://doi.org/10.1161/STR.0000000000000211',
    },
    {
      id: 'goyal-thrombectomy-meta-2016',
      type: 'article',
      title: 'Endovascular thrombectomy after large-vessel ischaemic stroke: a meta-analysis',
      authors: ['Goyal M', 'Menon BK', 'van Zwam WH'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(16)00163-X',
    },
  ],

  crossReferences: [
    { targetId: 'neuro-hemorrhagic-stroke-depth', targetType: 'condition', relationship: 'sibling', label: 'Hemorrhagic Stroke' },
    { targetId: 'neuro-stroke-overview', targetType: 'condition', relationship: 'parent', label: 'Stroke Overview' },
    { targetId: 'neuro-seizure-types', targetType: 'condition', relationship: 'related', label: 'Seizure Types' },
  ],

  tags: {
    systems: ['nervous', 'cardiovascular'],
    topics: ['neurology', 'stroke', 'cerebrovascular', 'emergency', 'thrombolysis', 'thrombectomy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine', 'emergency'],
    },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ischemicStrokeContent;
