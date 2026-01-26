/**
 * Stroke - Comprehensive Neurology Content
 *
 * Complete coverage of ischemic and hemorrhagic stroke including presentation,
 * workup, treatment, and secondary prevention.
 */

import { EducationalContent } from '../../types';

export const strokeOverviewContent: EducationalContent = {
  id: 'neuro-stroke-overview',
  type: 'condition',
  name: 'Stroke',
  alternateNames: ['Cerebrovascular Accident', 'CVA', 'Brain Attack'],
  hpoId: 'HP:0001297',

  levels: {
    1: {
      level: 1,
      summary: 'A stroke happens when blood flow to part of the brain is blocked or when a blood vessel in the brain bursts.',
      explanation: `A stroke is like a "brain attack." Just like your heart needs blood to work, your brain does too. When blood can't get to part of your brain, those brain cells start to die.

**Two Main Types:**
- **Blocked blood vessel (ischemic stroke)**: Most common (about 87%). A clot blocks blood flow, like a clog in a pipe
- **Burst blood vessel (hemorrhagic stroke)**: A blood vessel breaks and bleeds into the brain

**Warning Signs - BE FAST:**
- **B** - Balance: Sudden loss of balance
- **E** - Eyes: Sudden vision problems
- **F** - Face: Face drooping on one side
- **A** - Arms: Arm weakness on one side
- **S** - Speech: Slurred or strange speech
- **T** - Time: Time to call 911!

**Why It's an Emergency:**
Every minute matters! The faster you get treatment, the more brain cells can be saved. "Time is brain!"`,
      keyTerms: [
        { term: 'stroke', definition: 'When blood flow to part of the brain stops, causing brain cells to die' },
        { term: 'ischemic', definition: 'Caused by a blockage that stops blood flow', pronunciation: 'iss-KEE-mik' },
        { term: 'hemorrhagic', definition: 'Caused by bleeding', pronunciation: 'hem-or-AJ-ik' },
      ],
      analogies: [
        'A stroke is like a water pipe that gets clogged or bursts - either way, the water (blood) can\'t get where it needs to go.',
        'Brain cells without blood are like plants without water - they start dying within minutes.',
      ],
      examples: [
        'A person suddenly notices their face is drooping and they can\'t raise one arm - this is a stroke emergency.',
        'Someone develops a severe headache and becomes confused - this could be a bleeding stroke.',
      ],
    },
    2: {
      level: 2,
      summary: 'Stroke is a neurological emergency characterized by sudden onset of focal deficits, classified as ischemic (thrombotic, embolic, lacunar) or hemorrhagic (intracerebral, subarachnoid).',
      explanation: `**Classification:**

**Ischemic Stroke (87%)**
- *Large vessel atherosclerosis*: Carotid or intracranial stenosis
- *Cardioembolism*: Atrial fibrillation, valve disease, MI
- *Small vessel disease (lacunar)*: Deep brain infarcts from lipohyalinosis
- *Other causes*: Dissection, vasculitis, hypercoagulable states
- *Cryptogenic*: Unknown cause (~25%)

**Hemorrhagic Stroke (13%)**
- *Intracerebral hemorrhage (ICH)*: Bleeding into brain tissue
  - Hypertensive: Basal ganglia, thalamus, pons, cerebellum
  - Amyloid angiopathy: Lobar hemorrhages in elderly
- *Subarachnoid hemorrhage (SAH)*: Bleeding around brain
  - Usually from ruptured aneurysm

**Clinical Presentation:**
- Sudden onset (maximal at onset or rapidly progressive)
- Focal neurological deficits
- Depends on affected vascular territory

**Vascular Territories:**
- *Anterior cerebral artery (ACA)*: Leg weakness, personality changes
- *Middle cerebral artery (MCA)*: Face/arm > leg weakness, aphasia (dominant), neglect (non-dominant)
- *Posterior cerebral artery (PCA)*: Visual field defects, memory issues
- *Basilar artery*: Coma, cranial nerve deficits, "locked-in" syndrome

**Time Windows:**
- IV tPA: Within 4.5 hours of symptom onset
- Mechanical thrombectomy: Up to 24 hours in selected patients
- Every 15-minute delay reduces good outcome probability`,
      keyTerms: [
        { term: 'thrombotic', definition: 'Caused by a blood clot forming in a blood vessel' },
        { term: 'embolic', definition: 'Caused by a clot traveling from elsewhere (usually heart)' },
        { term: 'lacunar', definition: 'Small deep infarcts from disease of tiny penetrating arteries' },
        { term: 'tPA', definition: 'Tissue plasminogen activator - a clot-dissolving medication' },
      ],
      analogies: [
        'A thrombotic stroke is like a pipe slowly rusting shut. An embolic stroke is like debris flowing through pipes until it gets stuck.',
      ],
    },
    3: {
      level: 3,
      summary: 'Stroke evaluation requires emergent neuroimaging, NIHSS assessment, and determination of eligibility for reperfusion therapy, followed by etiological workup and secondary prevention.',
      explanation: `**Initial Assessment:**

**History (Last Known Well - LKW):**
- Exact time of symptom onset or LKW
- Witness account
- Wake-up stroke: May use MRI DWI-FLAIR mismatch

**NIHSS (National Institutes of Health Stroke Scale):**
- 0-42 points, higher = more severe
- Domains: Consciousness, gaze, visual fields, facial palsy, motor (arms/legs), ataxia, sensory, language, dysarthria, neglect
- >25: Severe stroke
- <4: Minor stroke

**Emergent Workup:**
1. Non-contrast CT head (rule out hemorrhage)
2. CT angiography (identify large vessel occlusion)
3. CT perfusion (core vs penumbra in late window)
4. Labs: Glucose, CBC, coagulation, troponin, renal function
5. ECG

**Reperfusion Eligibility:**

*IV Alteplase (tPA):*
- Time: <4.5 hours from LKW
- Contraindications:
  - Recent surgery/trauma (<14 days)
  - Active bleeding
  - Platelet <100K
  - INR >1.7
  - Recent ischemic stroke (<3 months)
  - History of ICH
  - Uncontrolled HTN (>185/110)

*Mechanical Thrombectomy:*
- Large vessel occlusion (ICA, M1, M2, basilar)
- NIHSS >=6
- ASPECTS >=6 (ischemic changes on CT)
- 0-6 hours: Standard window
- 6-24 hours: DAWN/DEFUSE 3 criteria (perfusion mismatch)

**Stroke Mimics:**
- Hypoglycemia (always check glucose first!)
- Seizure with Todd's paralysis
- Migraine with aura
- Conversion disorder
- Brain tumor`,
      keyTerms: [
        { term: 'NIHSS', definition: 'National Institutes of Health Stroke Scale - standardized severity assessment' },
        { term: 'ASPECTS', definition: 'Alberta Stroke Program Early CT Score - measures early ischemic changes' },
        { term: 'penumbra', definition: 'Ischemic tissue at risk but potentially salvageable' },
        { term: 'LKW', definition: 'Last known well - the last time patient was at baseline' },
      ],
      clinicalNotes: 'Door-to-needle time goal: <60 minutes. Door-to-groin time goal: <90 minutes. Activate stroke code for any sudden focal deficit.',
    },
    4: {
      level: 4,
      summary: 'Acute stroke management involves coordinated systems of care, advanced imaging for patient selection, and multimodal reperfusion strategies, with emphasis on time-dependent treatment effect.',
      explanation: `**Advanced Imaging:**

**CT Perfusion Parameters:**
- *CBF (Cerebral Blood Flow)*: Volume of blood per time per tissue mass
- *CBV (Cerebral Blood Volume)*: Total blood volume in tissue
- *MTT (Mean Transit Time)*: CBV/CBF
- *Tmax*: Time to maximum of residue function
- Core: CBF <30% of normal (irreversible)
- Penumbra: Tmax >6s with preserved CBV (salvageable)

**MRI DWI-FLAIR Mismatch:**
- DWI positive, FLAIR negative suggests <4.5 hours
- Useful for wake-up stroke eligibility

**Thrombectomy Trials:**
- MR CLEAN, ESCAPE, SWIFT PRIME, EXTEND-IA, REVASCAT (0-6h)
- DAWN, DEFUSE 3 (6-24h)
- NNT ~2.6 for functional independence

**Anesthesia for Thrombectomy:**
- Conscious sedation vs general anesthesia
- Recent data suggests outcomes similar if managed well

**Post-Procedural Care:**

*Blood Pressure Management:*
- Post-tPA: <180/105 for 24 hours
- Post-thrombectomy (reperfused): <140 systolic
- No reperfusion: Permissive hypertension (up to 220/120)

*Hemorrhagic Transformation:*
- Occurs in 5-40% of ischemic strokes
- Risk factors: Large stroke, reperfusion therapy, anticoagulation
- Types: HI1, HI2, PH1, PH2 (ECASS classification)
- PH2 (>30% infarct with mass effect): Worst prognosis

**Stroke Subtypes (TOAST Classification):**
1. Large artery atherosclerosis (>50% stenosis)
2. Cardioembolism (high-risk vs medium-risk)
3. Small vessel occlusion (lacune)
4. Other determined etiology (dissection, vasculitis, etc.)
5. Undetermined (cryptogenic)

**Etiologic Workup:**
- Cardiac: Echo (TTE/TEE), prolonged monitoring (30-day)
- Vascular: CTA/MRA head and neck, vessel wall imaging
- Hematologic: Hypercoagulable workup if young/unprovoked
- CSF: If vasculitis suspected`,
      keyTerms: [
        { term: 'Tmax', definition: 'Time to maximum of residue function on perfusion imaging; >6s indicates penumbra' },
        { term: 'TOAST', definition: 'Trial of Org 10172 in Acute Stroke Treatment - stroke subtype classification' },
        { term: 'hemorrhagic transformation', definition: 'Bleeding into area of ischemic stroke' },
        { term: 'NNT', definition: 'Number needed to treat - patients treated per one good outcome' },
      ],
      clinicalNotes: 'Extended window thrombectomy (6-24h) requires perfusion imaging showing significant mismatch. DAWN criteria: Clinical-core mismatch. DEFUSE 3: Perfusion mismatch ratio >=1.8, mismatch volume >=15mL, core <70mL.',
    },
    5: {
      level: 5,
      summary: 'Comprehensive stroke care encompasses hyperacute intervention, multimodal neuroprotection, precision secondary prevention including PFO closure and LAA occlusion, and integrated rehabilitation strategies.',
      explanation: `**Emerging Therapies:**

*Tenecteplase:*
- Single bolus administration (easier than tPA infusion)
- Superior recanalization in LVO before thrombectomy
- Non-inferior outcomes

*Neuroprotection Trials:*
- Multiple failures historically
- Current targets: Hypothermia, remote ischemic conditioning
- Adjunctive to reperfusion

**Cryptogenic Stroke Workup:**

*PFO (Patent Foramen Ovale):*
- Present in ~25% general population
- ROPE score stratifies likelihood PFO is causal
- Closure indicated if: Age <60, moderate-large shunt, atrial septal aneurysm
- CLOSE, RESPECT, REDUCE trials support closure

*Atrial Cardiopathy:*
- Increased P-wave terminal force in V1
- Elevated BNP/NT-proBNP
- Left atrial enlargement
- May warrant anticoagulation even without documented AF

*Prolonged Cardiac Monitoring:*
- Implantable loop recorder if high suspicion
- 30-day ambulatory monitoring minimum
- CRYSTAL-AF: 30% AF detection at 3 years with ILR

**Secondary Prevention:**

*Antiplatelet Therapy:*
- Aspirin + clopidogrel for 21 days (minor stroke/TIA) - POINT, CHANCE
- Then single antiplatelet agent
- Aspirin alone for maintenance if no indication for DAPT

*Anticoagulation:*
- AF: DOACs preferred (except mechanical valve)
- Timing: 4-2-1-14 rule (hemorrhagic risk vs infarct size)
- LAA occlusion (WATCHMAN) if anticoagulation contraindicated

*Lipid Management:*
- High-intensity statin regardless of baseline LDL
- Target LDL <70 (some recommend <55)
- Ezetimibe, PCSK9 inhibitors if needed
- TST, SPARCL trials

*Blood Pressure:*
- Target <130/80 after acute phase
- Most benefit with <120 systolic

**Carotid Revascularization:**
- Symptomatic stenosis >=50%: CEA or CAS
- Timing: Within 2 weeks if stable
- Asymptomatic stenosis: Threshold rising (>=70% with risk factors)

**Special Populations:**

*Young Stroke (<50):*
- Dissection workup (vessel wall MRI)
- Hypercoagulable evaluation
- Recreational drug use (cocaine, amphetamines)
- PFO evaluation
- Rare: CADASIL, Fabry disease, mitochondrial

*Posterior Circulation:*
- Basilar occlusion: Emergent thrombectomy (ATTENTION, BAOCHE trials)
- Higher mortality, but survivors often recover well
- Consider in coma patients

**Quality Metrics:**
- Get With The Guidelines - Stroke
- Door-to-needle, door-to-device times
- Dysphagia screening before oral intake
- DVT prophylaxis
- Statin and antithrombotic at discharge
- Stroke education`,
      keyTerms: [
        { term: 'tenecteplase', definition: 'Modified tPA with single bolus dosing; emerging as standard' },
        { term: 'ROPE score', definition: 'Risk of Paradoxical Embolism - estimates probability PFO caused stroke' },
        { term: 'LAA occlusion', definition: 'Left atrial appendage closure device (WATCHMAN) for AF without anticoagulation' },
        { term: 'CADASIL', definition: 'Cerebral Autosomal Dominant Arteriopathy with Subcortical Infarcts and Leukoencephalopathy' },
      ],
      clinicalNotes: `Current practice pearls:
1. Never delay CT for lab results (only need glucose)
2. Thrombectomy can proceed on anticoagulation
3. Tenecteplase increasingly used in LVO before thrombectomy
4. 24-hour window for thrombectomy with imaging selection
5. DAPT x 21 days for minor stroke/TIA (NIHSS <=3 or TIA with ABCD2 >=4)
6. PFO closure if age <60 with ROPE >=7
7. Aggressive LDL lowering (<70, consider <55)
8. Early mobilization improves outcomes (AVERT cautionary)`,
    },
  },

  media: [
    {
      id: 'stroke-ct-examples',
      type: 'image',
      filename: 'stroke_ct_findings.jpg',
      title: 'CT Findings in Acute Stroke',
      description: 'Hyperdense MCA sign, loss of grey-white differentiation, insular ribbon sign',
    },
    {
      id: 'nihss-video',
      type: 'video',
      filename: 'nihss_assessment.mp4',
      title: 'NIHSS Assessment Demonstration',
      description: 'Step-by-step NIHSS examination',
      duration: 480,
    },
  ],

  citations: [
    {
      id: 'powers-guidelines-2019',
      type: 'article',
      title: 'Guidelines for the Early Management of Patients With Acute Ischemic Stroke',
      authors: ['Powers WJ', 'Rabinstein AA', 'Ackerson T'],
      source: 'Stroke',
      url: 'https://doi.org/10.1161/STR.0000000000000211',
    },
  ],

  crossReferences: [
    { targetId: 'neuro-hemorrhagic-stroke', targetType: 'condition', relationship: 'related', label: 'Hemorrhagic Stroke' },
    { targetId: 'neuro-tia', targetType: 'condition', relationship: 'related', label: 'Transient Ischemic Attack' },
    { targetId: 'anatomy-cerebral-cortex', targetType: 'structure', relationship: 'see-also', label: 'Cerebral Cortex' },
  ],

  tags: {
    systems: ['nervous', 'cardiovascular'],
    topics: ['neurology', 'emergency', 'vascular'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine', 'emergency'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const hemorrhagicStrokeContent: EducationalContent = {
  id: 'neuro-hemorrhagic-stroke',
  type: 'condition',
  name: 'Hemorrhagic Stroke',
  alternateNames: ['Intracerebral Hemorrhage', 'ICH', 'Brain Bleed'],
  hpoId: 'HP:0001342',

  levels: {
    1: {
      level: 1,
      summary: 'A hemorrhagic stroke happens when a blood vessel in the brain breaks open and bleeds into the brain tissue.',
      explanation: `A hemorrhagic stroke is when bleeding happens inside the brain. This is different from the more common type where a blood vessel gets blocked.

**Why It Happens:**
- High blood pressure weakens blood vessels over time
- The weakened vessel can burst like a worn-out pipe
- Blood then leaks into the brain and damages brain cells

**Common Causes:**
- High blood pressure (most common)
- Blood thinning medications
- Abnormal blood vessels from birth
- Brain tumors

**Warning Signs:**
- Sudden severe headache ("worst headache of my life")
- Nausea and vomiting
- Confusion or passing out
- Weakness on one side
- Trouble speaking

**Why It's Serious:**
- Blood takes up space and squeezes the brain
- More bleeding can happen
- Emergency treatment is needed to stop bleeding and reduce pressure`,
      keyTerms: [
        { term: 'hemorrhage', definition: 'Bleeding, especially when severe or hard to stop' },
        { term: 'blood pressure', definition: 'The force of blood pushing against artery walls' },
        { term: 'blood vessel', definition: 'Tubes that carry blood through your body' },
      ],
      analogies: [
        'Like a garden hose with too much pressure - eventually it can spring a leak or burst.',
        'Blood in the brain is like water damage in a house - it causes harm wherever it spreads.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hemorrhagic stroke includes intracerebral hemorrhage (ICH) and subarachnoid hemorrhage (SAH), with distinct causes, presentations, and management strategies.',
      explanation: `**Types of Hemorrhagic Stroke:**

**Intracerebral Hemorrhage (ICH)**
- Bleeding directly into brain tissue
- ~15% of all strokes
- Higher mortality than ischemic stroke

*Common Causes:*
- Hypertension (50-70%): Basal ganglia, thalamus, pons, cerebellum
- Cerebral amyloid angiopathy: Lobar hemorrhages in elderly
- Anticoagulation-related
- Vascular malformations (AVM, cavernoma)
- Tumors (primary or metastatic)
- Cocaine/amphetamine use

**Subarachnoid Hemorrhage (SAH)**
- Bleeding into space around brain
- Usually from ruptured aneurysm (~85%)
- "Worst headache of my life" - thunderclap onset

*Common Causes:*
- Saccular aneurysm (berry aneurysm)
- Trauma
- Arteriovenous malformation
- Perimesencephalic (benign)

**Clinical Features:**

*ICH:*
- Sudden focal deficit (like ischemic stroke)
- Headache, vomiting more common
- May have rapid decline in consciousness
- Signs depend on location

*SAH:*
- Thunderclap headache
- Neck stiffness (meningism)
- May have focal signs if aneurysm compresses nearby structures
- Altered consciousness
- Seizures

**Initial Workup:**
- Non-contrast CT: Highly sensitive for acute blood
- CTA: Identify aneurysm or vascular malformation
- Lumbar puncture: If CT negative but SAH suspected (xanthochromia)`,
      keyTerms: [
        { term: 'intracerebral', definition: 'Within the brain tissue itself' },
        { term: 'subarachnoid', definition: 'In the space between brain and surrounding membranes' },
        { term: 'aneurysm', definition: 'Weak, ballooning area of a blood vessel wall' },
        { term: 'thunderclap headache', definition: 'Severe headache reaching maximum intensity in seconds to minutes' },
      ],
    },
    3: {
      level: 3,
      summary: 'ICH management focuses on blood pressure control, reversal of coagulopathy, and prevention of hematoma expansion, while SAH requires aneurysm treatment and management of vasospasm.',
      explanation: `**ICH Management:**

**Acute Blood Pressure:**
- Target SBP <140 if presents 150-220 (INTERACT2, ATACH-2)
- Rapid lowering if >220
- Nicardipine or labetalol preferred IV agents
- Avoid hypotension

**Reversal of Coagulopathy:**
- *Warfarin*: 4-factor PCC + Vitamin K
- *DOACs*:
  - Dabigatran: Idarucizumab (Praxbind)
  - Xa inhibitors: Andexanet alfa (Andexxa) or 4F-PCC
- *Antiplatelet*: Platelet transfusion controversial (PATCH trial negative)
- *Heparin*: Protamine

**Surgical Intervention:**
- Cerebellar hemorrhage >3cm or with hydrocephalus: Emergent evacuation
- Supratentorial: STICH trials generally negative for surgery
- Minimally invasive techniques: MISTIE III promising in selected patients
- EVD for hydrocephalus

**Prognostic Scores:**
- ICH Score: GCS, age, volume, IVH, infratentorial location
- Higher score = higher mortality

**SAH Management:**

**Grading:**
- Hunt-Hess: Clinical grade (I-V)
- Fisher: CT blood pattern (predicts vasospasm)
- WFNS: GCS-based

**Aneurysm Treatment:**
- Secure within 24 hours if possible
- Endovascular coiling preferred for most (ISAT trial)
- Surgical clipping for some locations/morphologies

**Vasospasm Prevention/Treatment:**
- Day 3-14: Peak risk
- Nimodipine 60mg q4h x 21 days (reduces poor outcomes)
- Triple-H therapy if symptomatic: Hypertension, Hypervolemia, Hemodilution
- Endovascular: Intra-arterial verapamil, angioplasty

**Other SAH Complications:**
- Rebleeding (highest first 24h before securing)
- Hydrocephalus (requires EVD)
- Hyponatremia (SIADH or cerebral salt wasting)
- Seizures
- Cardiac complications (stress cardiomyopathy)`,
      keyTerms: [
        { term: '4-factor PCC', definition: 'Prothrombin complex concentrate containing factors II, VII, IX, X for warfarin reversal' },
        { term: 'vasospasm', definition: 'Arterial narrowing 3-14 days after SAH causing delayed ischemia' },
        { term: 'EVD', definition: 'External ventricular drain for CSF diversion in hydrocephalus' },
        { term: 'nimodipine', definition: 'Calcium channel blocker reducing poor outcomes in SAH' },
      ],
      clinicalNotes: 'ICH: Rapid BP control to <140 SBP is safe and may reduce hematoma expansion. SAH: Always secure aneurysm before allowing hypertension for vasospasm.',
    },
    4: {
      level: 4,
      summary: 'Advanced hemorrhagic stroke management requires multidisciplinary neurocritical care, early prognostication without nihilism, and consideration of emerging surgical and hemostatic therapies.',
      explanation: `**ICH Pathophysiology:**

*Hematoma Expansion:*
- Occurs in ~30% within first hours
- "Spot sign" on CTA predicts expansion
- Targets for intervention: BP control, hemostasis

*Perihematomal Edema:*
- Peaks at 10-14 days
- Thrombin-mediated injury
- Iron toxicity from hemoglobin breakdown
- Target for neuroprotection trials

**Advanced ICH Management:**

*Hemostatic Agents:*
- Tranexamic acid: TICH-2 no benefit on outcome, reduced expansion
- Recombinant Factor VIIa: Reduced expansion but no outcome benefit, increased thrombosis

*Minimally Invasive Surgery:*
- MISTIE III: Clot evacuation with thrombolysis
- ENRICH: Early stereotactic aspiration
- Best candidates: Moderate-sized lobar ICH

*Prognostication Pitfalls:*
- ICH Score developed before aggressive care
- Self-fulfilling prophecy of withdrawal
- Recommend 72-hour stabilization before major decisions
- "Full Code Full Care" paradigm

**SAH Advanced Management:**

*Delayed Cerebral Ischemia (DCI):*
- Not just vasospasm - also microthrombosis, spreading depolarization
- Multimodal monitoring: TCD, continuous EEG, CMD microdialysis
- Induced hypertension if symptomatic (after aneurysm secured)

*Triple-H Therapy Evolution:*
- Hypervolemia not beneficial (may be harmful)
- Induced hypertension: Main intervention
- Avoid hypovolemia

*Endovascular Rescue:*
- Intra-arterial vasodilators: Nicardipine, verapamil, milrinone
- Balloon angioplasty for refractory cases
- May need repeated treatments

**Unruptured Aneurysm Management:**
- ISUIA and PHASES data for rupture risk
- Location matters: PCOM, ACOM higher risk
- Size: Generally treat >7mm (varies by location)
- Observation with imaging for small asymptomatic

**Cerebral Amyloid Angiopathy:**
- Lobar ICH in elderly
- Microbleeds on susceptibility imaging
- Boston criteria for diagnosis
- High recurrence rate
- Avoid anticoagulation if possible`,
      keyTerms: [
        { term: 'spot sign', definition: 'Contrast extravasation on CTA indicating active bleeding' },
        { term: 'DCI', definition: 'Delayed cerebral ischemia - neurological decline 3-14 days post-SAH' },
        { term: 'Boston criteria', definition: 'Diagnostic criteria for cerebral amyloid angiopathy' },
        { term: 'PHASES', definition: 'Population, Hypertension, Age, Size, Earlier SAH, Site - aneurysm rupture risk score' },
      ],
      clinicalNotes: 'Spot sign on CTA predicts hematoma expansion - consider for triage. CAA: Multiple lobar hemorrhages and microbleeds are characteristic. Avoid antithrombotics when possible in CAA.',
    },
    5: {
      level: 5,
      summary: 'Hemorrhagic stroke care involves precision diagnosis of underlying etiology, individualized surgical decision-making, emerging neuroprotective strategies, and comprehensive secondary prevention.',
      explanation: `**Precision Diagnostics:**

*Vessel Wall MRI:*
- Identifies inflammatory, infectious, or neoplastic vasculopathy
- Distinguishes reversible cerebral vasoconstriction syndrome (RCVS) from vasculitis
- Evaluates intracranial atherosclerosis

*Genetic Considerations:*
- Familial aneurysms: Screen first-degree relatives if 2+ affected
- CADASIL: Deep ICH, lacunar strokes, migraine, dementia
- Hereditary hemorrhagic telangiectasia: Pulmonary AVMs, brain AVMs
- COL4A1/A2 mutations: Small vessel disease, hemorrhage

**Surgical Innovations:**

*AVM Management:*
- Spetzler-Martin grade determines approach
- Multimodal: Surgery, radiosurgery, embolization
- Observation for high-grade AVMs per ARUBA results
- Case-by-case analysis required

*Cavernous Malformations:*
- Surgical resection for symptomatic accessible lesions
- Stereotactic radiosurgery controversial
- Familial forms: CCM1, CCM2, CCM3 genes

*Flow Diversion:*
- Pipeline and similar devices
- Complex/giant aneurysms
- Requires antiplatelet therapy

**Emerging Therapies:**

*Neuroprotection:*
- Deferoxamine (iron chelation): Negative trials
- Pioglitazone (PPARgamma agonist): Under study
- Fingolimod (S1P modulator): Under study

*Anti-inflammation:*
- Targeting perihematomal inflammation
- IL-1 receptor antagonism
- Minocycline

**Secondary Prevention:**

*ICH Survivors:*
- BP target <130/80
- Restart antiplatelet after 1-4 weeks if indicated
- Restart anticoagulation: Consider at 4-8 weeks if compelling indication
- LAA occlusion if AF and anticoagulation contraindicated
- Statin continuation: Safe, may reduce recurrence

*Post-SAH:*
- Annual imaging if unruptured aneurysm history
- Screen family members
- Smoking cessation critical

**Quality Metrics:**
- Door-to-CT time
- Neurosurgical consultation
- Neurocritical care admission
- DVT prophylaxis timing
- 30-day mortality
- mRS at 90 days`,
      keyTerms: [
        { term: 'flow diversion', definition: 'Endovascular devices redirecting flow away from aneurysms to promote thrombosis' },
        { term: 'RCVS', definition: 'Reversible Cerebral Vasoconstriction Syndrome - thunderclap headache with reversible arterial narrowing' },
        { term: 'Spetzler-Martin', definition: 'AVM grading system based on size, eloquence, and venous drainage' },
        { term: 'mRS', definition: 'Modified Rankin Scale - functional outcome measure 0-6' },
      ],
      clinicalNotes: `Hemorrhagic stroke pearls:
1. ICH: Aggressive early BP control (<140 SBP) safe and may reduce expansion
2. Warfarin ICH: Emergent 4F-PCC + Vitamin K, then investigate cause
3. SAH: Secure aneurysm within 24h, then manage vasospasm days 3-14
4. CAA: Characterized by lobar microbleeds, avoid antithrombotics
5. Restart anticoagulation at 4-8 weeks if indication remains compelling
6. Full code/full care for 72h before major prognostic discussions
7. Family screening if 2+ first-degree relatives with aneurysms`,
    },
  },

  media: [
    {
      id: 'ich-locations',
      type: 'diagram',
      filename: 'ich_locations.svg',
      title: 'Common ICH Locations',
      description: 'Basal ganglia, thalamic, lobar, pontine, and cerebellar hemorrhages',
    },
  ],

  citations: [
    {
      id: 'hemphill-ich-guidelines',
      type: 'article',
      title: 'Guidelines for the Management of Spontaneous Intracerebral Hemorrhage',
      authors: ['Hemphill JC', 'Greenberg SM', 'Anderson CS'],
      source: 'Stroke',
    },
  ],

  crossReferences: [
    { targetId: 'neuro-stroke-overview', targetType: 'condition', relationship: 'parent', label: 'Stroke Overview' },
    { targetId: 'neuro-sah', targetType: 'condition', relationship: 'related', label: 'Subarachnoid Hemorrhage' },
  ],

  tags: {
    systems: ['nervous', 'cardiovascular'],
    topics: ['neurology', 'emergency', 'neurocritical care'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export const strokeContent = {
  overview: strokeOverviewContent,
  hemorrhagic: hemorrhagicStrokeContent,
};

export default strokeContent;
