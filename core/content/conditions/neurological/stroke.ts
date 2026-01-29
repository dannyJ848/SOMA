/**
 * Stroke - Comprehensive Educational Content
 *
 * Covers ischemic and hemorrhagic stroke pathophysiology and management.
 */

import { EducationalContent } from '../../types';

export const stroke: EducationalContent = {
  id: 'condition-stroke',
  type: 'condition',
  name: 'Stroke',
  alternateNames: ['Cerebrovascular Accident', 'CVA', 'Brain Attack', 'Cerebral Infarction'],
  hpoId: 'HP:0001297',

  levels: {
    1: {
      level: 1,
      summary: 'Stroke is a medical emergency that occurs when blood flow to part of the brain is interrupted, causing brain cells to die.',
      explanation: `A stroke happens when blood flow to part of the brain is blocked or when a blood vessel in the brain bursts. This prevents brain tissue from getting oxygen and nutrients, causing brain cells to die within minutes.

**Two main types of stroke:**

**Ischemic stroke (85% of strokes):**
- A blood clot blocks a blood vessel in the brain
- Brain tissue downstream does not get blood
- Most common type

**Hemorrhagic stroke (15% of strokes):**
- A blood vessel in the brain breaks
- Blood spills into or around the brain
- Causes pressure on brain tissue

**Warning signs - BE FAST:**
- **B**alance: Sudden trouble walking, dizziness
- **E**yes: Sudden vision changes
- **F**ace: Drooping on one side
- **A**rm: Weakness or numbness on one side
- **S**peech: Slurred speech, difficulty speaking
- **T**ime: Call emergency services immediately

**Risk factors:**
- High blood pressure
- Diabetes
- High cholesterol
- Smoking
- Obesity
- Physical inactivity

**Treatment:**
- Clot-busting medication for ischemic stroke (within hours)
- Surgery for some hemorrhagic strokes
- Rehabilitation to recover function

**Prevention:**
- Control blood pressure
- Healthy diet and exercise
- Stop smoking
- Take medications as prescribed`,
      keyTerms: [
        { term: 'ischemic', definition: 'Caused by lack of blood flow' },
        { term: 'hemorrhagic', definition: 'Caused by bleeding' },
        { term: 'thrombosis', definition: 'Blood clot forming in a blood vessel' },
        { term: 'tPA', definition: 'Tissue plasminogen activator; clot-busting drug' },
      ],
      analogies: [
        'A stroke is like a power outage in the brain - when the electricity (blood flow) stops, the lights (brain cells) go out.',
        'An ischemic stroke is like a clogged pipe; a hemorrhagic stroke is like a burst pipe.',
      ],
      examples: [
        'A person who suddenly cannot lift one arm and has slurred speech is likely having a stroke.',
        'Someone with sudden severe headache and confusion may be having a hemorrhagic stroke.',
      ],
    },
    2: {
      level: 2,
      summary: 'Stroke is a cerebrovascular event causing acute neurological deficit due to focal brain, spinal cord, or retinal infarction (ischemic) or intracranial hemorrhage, requiring rapid recognition and time-sensitive treatment.',
      explanation: `## Classification

**Ischemic stroke (85%):**
- **Thrombotic**: Local clot formation
- **Embolic**: Clot travels from elsewhere (heart, carotid)
- **Lacunar**: Small vessel occlusion, subcortical infarcts
- **Cryptogenic**: Cause unknown despite workup

**Hemorrhagic stroke (15%):**
- **Intracerebral hemorrhage (ICH)**: Bleeding into brain parenchyma
- **Subarachnoid hemorrhage (SAH)**: Bleeding into subarachnoid space

**Transient Ischemic Attack (TIA):**
- Temporary neurological deficit (<24 hours)
- No infarction on imaging
- Warning sign for future stroke

## Ischemic Stroke Pathophysiology

**Ischemic cascade:**
1. Vessel occlusion -> reduced cerebral blood flow
2. Loss of electrical activity (within seconds)
3. Membrane pump failure (minutes)
4. Glutamate excitotoxicity
5. Calcium influx
6. Free radical formation
7. Inflammation
8. Cell death (necrosis and apoptosis)

**Ischemic penumbra:**
- Tissue at risk but viable
- Can be salvaged with timely reperfusion
- Target of acute stroke therapy

## Risk Factors

**Modifiable:**
- Hypertension (most important)
- Diabetes mellitus
- Atrial fibrillation
- Dyslipidemia
- Smoking
- Carotid stenosis
- Obesity, physical inactivity
- OSA, alcohol excess

**Non-modifiable:**
- Age (doubles each decade after 55)
- Sex (men > women)
- Race (African American higher risk)
- Family history
- Prior stroke/TIA

## Clinical Presentation

**Anterior circulation (carotid):**
- Hemiparesis/hemiplegia
- Aphasia (dominant hemisphere)
- Neglect (non-dominant)
- Visual field defects

**Posterior circulation (vertebrobasilar):**
- Vertigo, dizziness
- Diplopia
- Dysarthria, dysphagia
- Ataxia
- Coma (brainstem)

**Lacunar syndromes:**
- Pure motor hemiparesis
- Pure sensory stroke
- Ataxic hemiparesis
- Dysarthria-clumsy hand

## Acute Evaluation

**Time is brain:**
- 2 million neurons die per minute
- "Door to needle" target: <60 minutes
- "Door to puncture" target: <90 minutes

**Initial assessment:**
- ABCs, vital signs
- Blood glucose
- NIH Stroke Scale
- Last known well time
- CT head (urgent to exclude hemorrhage)

**Contraindications to tPA:**
- Active bleeding
- Recent surgery/trauma
- Elevated INR
- Stroke/head trauma <3 months
- Systolic BP >185 or diastolic >110

## Treatment

**Ischemic stroke:**
- IV tPA (alteplase) within 4.5 hours
- Mechanical thrombectomy (LVO, 6-24 hours with imaging selection)
- Aspirin within 24-48 hours
- BP management (permissive hypertension initially)

**Hemorrhagic stroke:**
- Reverse anticoagulation
- BP control
- Neurosurgical consultation
- Mannitol/hypertonic saline for elevated ICP`,
      keyTerms: [
        { term: 'ischemic penumbra', definition: 'Brain tissue surrounding core infarct that is at risk but salvageable' },
        { term: 'thrombectomy', definition: 'Mechanical removal of clot from blood vessel' },
        { term: 'lacunar', definition: 'Small deep infarct due to small vessel disease' },
        { term: 'LVO', definition: 'Large vessel occlusion; target for mechanical thrombectomy' },
      ],
      analogies: [
        'The ischemic penumbra is like a hiker caught in a blizzard - still alive but needs rescue quickly.',
        'Think of tPA as drain cleaner for blocked pipes in the brain.',
      ],
    },
    3: {
      level: 3,
      summary: 'Stroke management requires detailed understanding of neurovascular anatomy, advanced imaging for patient selection, endovascular therapy for large vessel occlusions, and comprehensive secondary prevention strategies.',
      explanation: `## Neurovascular Anatomy

**Anterior circulation:**
- Internal carotid artery
- Middle cerebral artery (MCA) - largest territory
- Anterior cerebral artery (ACA)

**Posterior circulation:**
- Vertebral arteries
- Basilar artery
- Posterior cerebral arteries (PCA)

**Circle of Willis:**
- Anastomotic connections
- Collateral flow potential
- Variants common

## Advanced Imaging

**CT perfusion:**
- Core vs penumbra assessment
- Mismatch = salvageable tissue
- Guides extended window thrombectomy

**CT angiography:**
- Identifies LVO
- Guides treatment decisions
- Assesses collaterals

**MRI:**
- DWI (diffusion-weighted): detects ischemia early
- PWI (perfusion-weighted): shows hypoperfusion
- MRA: vascular imaging without contrast

**ASPECTS score:**
- Alberta Stroke Program Early CT Score
- 10-point scale assessing early ischemic changes
- Predicts outcome and guides thrombectomy

## Endovascular Therapy

**Indications:**
- LVO (ICA, proximal MCA)
- Within 6 hours (DAWN/DEFUSE 3 extended to 16-24 hours with imaging)
- CTA/MRA confirmation

**Techniques:**
- Stent retrievers
- Aspiration catheters
- Combined approaches

**Outcomes:**
- mTICI 2b-3 (successful reperfusion) in 80%+
- Significantly improved functional outcomes
- Number needed to treat: 2-3

**Complications:**
- Hemorrhagic transformation
- Vessel perforation
- Distal embolization

## Hemorrhagic Stroke

**Intracerebral hemorrhage (ICH):**
- Causes: HTN (most common), CAA, coagulopathy, vascular malformations, tumors
- Location: basal ganglia, thalamus, pons, cerebellum, lobar
- Management: BP control (target <140-160 systolic), reverse anticoagulation, ICP management, surgery for cerebellar or superficial lobar with mass effect

**Subarachnoid hemorrhage (SAH):**
- Causes: aneurysm (85%), trauma, AVM
- "Thunderclap" headache
- Vasospasm risk (days 3-14)
- Treatment: aneurysm clipping or coiling, nimodipine, triple-H therapy

## Secondary Prevention

**Antiplatelet therapy:**
- Aspirin 81 mg daily
- Clopidogrel 75 mg daily
- Dual antiplatelet (short course) for minor stroke/high-risk TIA

**Anticoagulation:**
- Atrial fibrillation: DOACs preferred (apixaban, rivaroxaban, dabigatran, edoxaban)
- Warfarin for mechanical valves, moderate-severe MR, antiphospholipid syndrome

**Lipid management:**
- High-intensity statin (atorvastatin 40-80 mg, rosuvastatin 20-40 mg)
- Target LDL <70 if ASCVD

**Blood pressure:**
- Target <130/80 mmHg
- Thiazide, ACE-I, ARB, CCB

**Carotid stenosis:**
- Symptomatic >50%: CEA or stenting
- Asymptomatic >70%: consider CEA if low surgical risk`,
      keyTerms: [
        { term: 'ASPECTS', definition: 'Alberta Stroke Program Early CT Score; quantifies early ischemic changes' },
        { term: 'mTICI', definition: 'Modified Treatment in Cerebral Ischemia score; measures reperfusion success' },
        { term: 'CAA', definition: 'Cerebral amyloid angiopathy; cause of lobar hemorrhage in elderly' },
        { term: 'vasospasm', definition: 'Narrowing of cerebral arteries after SAH; causes delayed ischemia' },
      ],
      clinicalNotes: 'Mechanical thrombectomy has revolutionized stroke care for LVO. Window extended to 24 hours with appropriate imaging (DAWN/DEFUSE 3). Blood pressure management different for ischemic (permissive initially) vs hemorrhagic (aggressive control). SAH vasospasm peaks days 7-10.',
    },
    4: {
      level: 4,
      summary: 'Advanced stroke care encompasses specialized stroke unit management, management of cerebral edema and malignant MCA infarction, uncommon stroke etiologies, and comprehensive rehabilitation with neuroplasticity-based interventions.',
      explanation: `## Stroke Unit Care

**Benefits:**
- 25% reduction in death/disability
- Multidisciplinary team
- Protocol-driven care
- Early mobilization
- Dysphagia screening
- DVT prophylaxis

**Complications to prevent:**
- Pneumonia (aspiration)
- DVT/PE
- Pressure ulcers
- Falls
- Depression

## Malignant Cerebral Edema

**Definition:**
- Massive MCA territory infarction
- Severe edema days 2-5
- Risk of transtentorial herniation
- Mortality 50-80% without surgery

**Management:**
- Osmotic therapy (mannitol, hypertonic saline)
- Head of bed 30 degrees
- Avoid hypotonic fluids
- Decompressive hemicraniectomy

**Surgery:**
- <60 years (or selected older): improved survival, variable functional outcome
- Remove bone flap, duraplasty
- Cranioplasty weeks-months later

## Uncommon Stroke Etiologies

**Cervical artery dissection:**
- Vertebral > carotid
- Trauma, spontaneous
- Young patients
- Anticoagulation vs antiplatelet controversial

**Patent foramen ovale (PFO):**
- Cryptogenic stroke in young
- Closure if high-risk features (large shunt, atrial septal aneurysm)
- Otherwise medical therapy

**Vasculitis:**
- Primary CNS angiitis
- Systemic vasculitis
- VZV, syphilis, TB
- Immunosuppression

**Hypercoagulable states:**
- Antiphospholipid syndrome
- Factor V Leiden, prothrombin mutation
- Malignancy-associated
- Anticoagulation

**Reversible cerebral vasoconstriction syndrome (RCVS):**
- Thunderclap headaches
- Segmental vasoconstriction
- Triggers: postpartum, vasoconstrictive drugs
- Calcium channel blockers

## Posterior Circulation Stroke

**Basilar artery occlusion:**
- Devastating if complete
- Quadriplegia, coma
- Locked-in syndrome (pontine)
- Thrombectomy beneficial

**Cerebellar stroke:**
- Edema -> brainstem compression
- Hydrocephalus
- Surgical decompression

## Rehabilitation

**Principles:**
- Early, intensive, task-specific
- Neuroplasticity-based
- Multidisciplinary

**Timing:**
- Mobilization within 24-48 hours
- Formal rehab begins early
- Continues for months

**Modalities:**
- Constraint-induced movement therapy
- Robot-assisted therapy
- Functional electrical stimulation
- Mirror therapy
- Virtual reality

**Complications:**
- Spasticity (botulinum toxin, baclofen)
- Post-stroke pain
- Depression (SSRIs)
- Cognitive impairment
- Seizures

## Long-Term Management

**Risk factor modification:**
- Continued BP, lipid, diabetes control
- Smoking cessation
- Exercise programs
- Mediterranean diet

**Recurrence prevention:**
- Antiplatelet/anticoagulation adherence
- Statin therapy
- Carotid intervention if indicated

**Quality of life:**
- Community reintegration
- Driving evaluation
- Return to work
- Caregiver support`,
      keyTerms: [
        { term: 'malignant MCA infarction', definition: 'Massive middle cerebral artery stroke with fatal edema risk' },
        { term: 'decompressive hemicraniectomy', definition: 'Surgical removal of skull bone to relieve brain swelling' },
        { term: 'RCVS', definition: 'Reversible cerebral vasoconstriction syndrome; causes thunderclap headaches' },
        { term: 'neuroplasticity', definition: 'Brain ability to reorganize and form new connections after injury' },
      ],
      clinicalNotes: 'Stroke units improve outcomes significantly. Decompressive hemicraniectomy for malignant MCA infarction saves lives but survivors may have severe disability. Posterior circulation stroke easily missed - check for diplopia, ataxia, dysarthria. Early mobilization and intensive rehab improve recovery.',
    },
    5: {
      level: 5,
      summary: 'Frontier stroke research includes tenecteplase replacing alteplase, advanced imaging with AI for patient selection, device innovations in thrombectomy, neuroprotection trials, and telestroke networks expanding access to stroke expertise.',
      explanation: `## Thrombolysis Evolution

### Tenecteplase vs Alteplase
**Tenecteplase advantages:**
- Single bolus vs infusion
- Fibrin-specific
- Less bleeding risk
- Non-inferior in EXTEND-IA TNK
- May replace alteplase as standard

**Extended window lysis:**
- WAKE-UP trial (MRI-selected, unknown onset)
- EXTEND trial (perfusion imaging 4.5-9 hours or wake-up)
- Tenecteplase for extended window

## AI in Stroke

**Automated imaging:**
- Automated ASPECTS (e-ASPECTS)
- LVO detection on CTA
- Core/penumbra quantification
- Faster decision-making

**Clinical decision support:**
- Triage algorithms
- Outcome prediction
- Workflow optimization

## Thrombectomy Device Innovation

**Stent retrievers:**
- Continuous improvement in design
- Better wall apposition
- Reduced embolization

**Aspiration:**
- ADAPT technique (direct aspiration)
- Large-bore catheters
- May be faster for accessible clots

**Combined approaches:**
- Stent retriever + aspiration
- Higher recanalization rates

**Distal occlusions:**
- Smaller vessel thrombectomy
- Medium vessel occlusions (M2, M3)
- Improved devices

## Neuroprotection

**Failed approaches:**
- NMDA antagonists
- Free radical scavengers
- Anti-inflammatory agents
- Hypothermia

**Current investigations:**
- Albumin (ALIAS trial)
- Nerinetide (NA-1, ESCAPE-NEXT)
- Remote ischemic conditioning
- Colchicine (anti-inflammatory)
- Combination with reperfusion

**Challenges:**
- Heterogeneous stroke mechanisms
- Time window limitations
- Blood-brain barrier penetration

## Telestroke

**Network model:**
- Hub-and-spoke systems
- 24/7 specialist availability
- Videoconferencing
- Teleradiology

**Benefits:**
- Expertise to rural/underserved
- Faster treatment decisions
- Increased tPA utilization
- Better outcomes

**Limitations:**
- No physical exam
- Technology dependence
- Licensing/regulatory issues

## Mobile Stroke Units

**Concept:**
- Ambulance with CT scanner
- Point-of-care laboratory
- Telemedicine connection
- Treatment at the scene

**Results:**
- Faster tPA administration
- Improved outcomes in studies
- Cost and logistics challenges
- Expanding to select cities

## Prevention Innovations

### Left Atrial Appendage Closure
**Watchman device:**
- Alternative to anticoagulation in AF
- For patients with contraindications
- Non-inferior to warfarin in PROTECT-AF

### Carotid Stenting Advances
**TCAR (TransCarotid Artery Revascularization):**
- Flow reversal for embolic protection
- May be safer than standard stenting
- Alternative to CEA

### Polypill Approach
- Fixed-dose combination
- BP meds, statin, aspirin
- Simplifies secondary prevention
- Improves adherence

## Future Directions

### Stem Cell Therapy
- Intravenous or intra-arterial delivery
- Mesenchymal stem cells
- Neural progenitor cells
- Phase 2 trials ongoing
- Mechanism: paracrine effects, immunomodulation

### Brain-Computer Interfaces
- Decode neural signals
- Control external devices
- Assist communication and mobility
- Long-term rehabilitation potential

### Biomarkers
- Blood-based markers (GFAP, NfL)
- Rapid stroke diagnosis
- Triage and prognosis
- Point-of-care testing

### Precision Medicine
- Genetic variants affecting stroke risk
- Pharmacogenomics (clopidogrel metabolism)
- Personalized prevention
- Targeted therapies`,
      keyTerms: [
        { term: 'tenecteplase', definition: 'Newer thrombolytic agent; single bolus administration' },
        { term: 'TCAR', definition: 'TransCarotid Artery Revascularization; flow reversal for cerebral protection' },
        { term: 'NfL', definition: 'Neurofilament light chain; blood biomarker for neuronal injury' },
        { term: 'telestroke', definition: 'Remote stroke expertise via telemedicine' },
      ],
      clinicalNotes: 'Tenecteplase may become standard of care over alteplase. AI is improving imaging interpretation speed and accuracy. Mobile stroke units show promise but are resource-intensive. Neuroprotection remains the holy grail but has been elusive. Telestroke networks essential for rural stroke care.',
    },
  },

  media: [
    {
      id: 'stroke-befast',
      type: 'diagram',
      filename: 'stroke-befast.svg',
      title: 'BE FAST Stroke Recognition',
      description: 'Warning signs of stroke for rapid recognition',
    },
  ],

  citations: [
    {
      id: 'aha-stroke-2023',
      type: 'article',
      title: 'Guidelines for the Early Management of Acute Ischemic Stroke',
      source: 'Stroke',
    },
  ],

  crossReferences: [
    { targetId: 'condition-hypertension', targetType: 'condition', relationship: 'related', label: 'Hypertension' },
  ],

  tags: {
    systems: ['nervous', 'cardiovascular'],
    topics: ['neurology', 'emergency medicine', 'neurosurgery'],
    keywords: ['stroke', 'thrombectomy', 'tPA', 'cerebrovascular', 'infarction'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default stroke;
