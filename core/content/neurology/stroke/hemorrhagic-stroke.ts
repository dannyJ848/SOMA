/**
 * Hemorrhagic Stroke - In-Depth Neurology Content
 *
 * Comprehensive coverage of intracerebral hemorrhage and subarachnoid hemorrhage,
 * including pathophysiology, acute management, surgical options, and outcomes.
 */

import { EducationalContent } from '../../types';

export const hemorrhagicStrokeDepthContent: EducationalContent = {
  id: 'neuro-hemorrhagic-stroke-depth',
  type: 'condition',
  name: 'Hemorrhagic Stroke',
  nameEs: 'Accidente Cerebrovascular Hemorrágico',
  alternateNames: ['Intracerebral Hemorrhage', 'ICH', 'Brain Bleed', 'Hemorrhagic CVA'],
  hpoId: 'HP:0001342',

  levels: {
    1: {
      level: 1,
      summary:
        'A hemorrhagic stroke happens when a blood vessel in the brain bursts and bleeds into or around the brain, causing damage to brain tissue.',
      explanation: `## What Is a Hemorrhagic Stroke?

A hemorrhagic stroke happens when a blood vessel inside or around the brain breaks open and bleeds. Even though it is less common than strokes caused by blood clots, it is more dangerous and more likely to be fatal.

## Two Types of Hemorrhagic Stroke

**1. Bleeding Inside the Brain (Intracerebral Hemorrhage)**
- A blood vessel deep inside the brain bursts
- Blood pools and presses on brain tissue
- The most common cause is long-term high blood pressure

**2. Bleeding Around the Brain (Subarachnoid Hemorrhage)**
- A blood vessel on the surface of the brain bursts
- Blood fills the space between the brain and the skull
- Usually caused by a weak, balloon-like spot on a blood vessel (aneurysm) that pops

## Warning Signs

- **Sudden, severe headache** - often described as the worst headache of your life
- Nausea and vomiting
- Sudden weakness or numbness, especially on one side
- Sudden confusion or trouble speaking
- Vision problems
- Loss of balance or trouble walking
- Loss of consciousness

## Why It Is So Dangerous

- Blood takes up space inside the skull and squeezes the brain
- Brain cells are damaged by the pressure and by chemicals in the blood
- The bleeding can spread and get worse quickly
- Emergency treatment is needed to stop bleeding and reduce pressure

## Treatment

- Emergency surgery may be needed to remove the blood or repair the blood vessel
- Medications to lower blood pressure and prevent more bleeding
- Close monitoring in an intensive care unit
- Rehabilitation to recover lost abilities`,

      keyTerms: [
        { term: 'hemorrhagic stroke', definition: 'A stroke caused by bleeding in or around the brain', pronunciation: 'hem-or-AJ-ik' },
        { term: 'aneurysm', definition: 'A weak, balloon-like bulge in a blood vessel wall that can burst', pronunciation: 'AN-yur-iz-um' },
        { term: 'blood pressure', definition: 'The force of blood pushing against the walls of your blood vessels' },
        { term: 'intensive care unit', definition: 'A special hospital area for patients who need constant monitoring' },
      ],
      analogies: [
        'A hemorrhagic stroke is like a water pipe bursting inside a wall - the water (blood) damages everything around it.',
        'An aneurysm is like a weak spot on a balloon - it can pop if too much pressure builds up.',
        'High blood pressure over many years is like constantly over-inflating a tire - eventually, weak spots give way.',
      ],
      examples: [
        'A 60-year-old with uncontrolled high blood pressure suddenly gets the worst headache of his life and collapses.',
        'A woman develops sudden weakness on one side and starts vomiting - a CT scan shows bleeding in her brain.',
        'A young person gets a sudden thunderclap headache - doctors find a burst aneurysm on the surface of the brain.',
      ],
      patientCounselingPoints: [
        'Controlling your blood pressure is the most important thing you can do to prevent a brain bleed.',
        'If you get a sudden severe headache unlike anything you have ever experienced, call 911 immediately.',
        'Take blood pressure medications every day as prescribed, even if you feel fine.',
        'Avoid blood-thinning supplements and medications unless prescribed by your doctor.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Hemorrhagic stroke includes intracerebral hemorrhage (ICH) from hypertension or amyloid angiopathy, and subarachnoid hemorrhage (SAH) typically from ruptured saccular aneurysms, each with distinct evaluation and management strategies.',
      explanation: `## Intracerebral Hemorrhage (ICH)

**Epidemiology:**
- 10-15% of all strokes; highest mortality rate
- 30-day mortality: 30-50%
- Incidence higher in elderly, Asian populations, anticoagulated patients

**Causes by Location:**
- *Hypertensive (50-70%)*: Basal ganglia, thalamus, pons, cerebellum
  - Chronic HTN causes lipohyalinosis of small penetrating arteries
  - Charcot-Bouchard microaneurysms
- *Cerebral Amyloid Angiopathy (CAA)*: Lobar hemorrhages in elderly
  - Beta-amyloid deposits in cortical vessel walls
  - Recurrent lobar bleeds; often associated with dementia
- *Anticoagulation-related*: Any location; expanding hemorrhage common
- *Vascular malformations*: AVM, cavernoma, dural fistula
- *Tumors*: Primary brain tumors or metastases (melanoma, renal, lung)
- *Drug-related*: Cocaine, amphetamines (acute hypertensive surge)

**Clinical Presentation:**
- Sudden onset focal neurological deficit (similar to ischemic stroke)
- Headache more common than in ischemic stroke (~50%)
- Vomiting, decreased consciousness suggest elevated ICP
- Seizures in 5-10% acutely

## Subarachnoid Hemorrhage (SAH)

**Epidemiology:**
- ~5% of all strokes; mean age 55
- Female predominance; often associated with smoking, HTN, family history

**Causes:**
- Ruptured saccular (berry) aneurysm: ~85%
- Non-aneurysmal perimesencephalic: ~10% (benign course)
- AVM, dissection, vasculitis: ~5%

**Common Aneurysm Locations:**
- Anterior communicating artery (AComA): 30-35%
- Posterior communicating artery (PComA): 25-30%
- Middle cerebral artery bifurcation: 20%
- Basilar tip: 5-10%

**Clinical Presentation:**
- Thunderclap headache: Sudden onset, maximal within seconds
- Neck stiffness (meningismus) develops over hours
- Nausea, vomiting, photophobia
- Altered consciousness (25% present in coma)
- Focal signs if aneurysm compresses adjacent structures
  - PComA aneurysm: CN III palsy (pupil-involving)

## Initial Workup

**ICH:**
- Non-contrast CT: Hyperdense (white) lesion acutely
- CTA: Rule out underlying vascular lesion; identify spot sign (active bleeding)
- MRI with SWI: Detect microbleeds (suggests CAA if lobar pattern)

**SAH:**
- Non-contrast CT: Sensitivity ~98% within 6 hours, declines after 24h
- If CT negative but clinical suspicion high: Lumbar puncture
  - Xanthochromia (yellow CSF from bilirubin) confirms SAH
  - RBC count that does not clear across tubes
- CTA or conventional angiography to identify aneurysm`,

      keyTerms: [
        { term: 'intracerebral hemorrhage', definition: 'Bleeding directly into brain tissue', pronunciation: 'in-trah-SER-eh-bral' },
        { term: 'subarachnoid hemorrhage', definition: 'Bleeding into the space between brain and its surrounding membrane', pronunciation: 'sub-ah-RAK-noyd' },
        { term: 'cerebral amyloid angiopathy', definition: 'Protein deposits in brain blood vessel walls causing recurrent lobar bleeds in the elderly' },
        { term: 'thunderclap headache', definition: 'Sudden-onset severe headache reaching maximum intensity within seconds' },
        { term: 'xanthochromia', definition: 'Yellow discoloration of spinal fluid indicating prior subarachnoid bleeding', pronunciation: 'zan-tho-KROH-mee-ah' },
      ],
      analogies: [
        'Hypertensive ICH is like years of high water pressure finally bursting a weakened pipe.',
        'SAH from a ruptured aneurysm is like an over-inflated balloon popping - blood sprays across the brain surface.',
        'The spot sign on CTA is like seeing a leak in real time before the pipe fully bursts.',
      ],
      examples: [
        'A 70-year-old with long-standing hypertension develops sudden right-sided weakness and decreased consciousness - CT shows left basal ganglia hemorrhage.',
        'A 55-year-old woman gets a sudden thunderclap headache while exercising - CT shows blood in the subarachnoid space, and CTA reveals an AComA aneurysm.',
        'An 82-year-old on warfarin with INR 3.5 develops confusion and left arm weakness - CT shows right frontal lobar hemorrhage consistent with CAA.',
      ],
    },

    3: {
      level: 3,
      summary:
        'ICH management focuses on blood pressure control, coagulopathy reversal, and prevention of hematoma expansion, while SAH management centers on aneurysm securing, vasospasm prevention, and multimodal monitoring.',
      explanation: `## ICH Acute Management

**Blood Pressure Control:**
- SBP 150-220: Target <140 (INTERACT2: safe and may reduce expansion)
- SBP >220: Aggressive but cautious reduction (ATACH-2: no benefit of <120 target)
- Preferred agents: IV nicardipine (5-15 mg/hr), labetalol (10-20 mg IV pushes)
- Avoid: Nitroprusside (raises ICP), sublingual nifedipine

**Reversal of Coagulopathy:**
- *Warfarin*: 4-factor PCC (Kcentra) 25-50 units/kg + Vitamin K 10mg IV
  - Target INR <1.5 within 1 hour
- *Dabigatran*: Idarucizumab (Praxbind) 5g IV
- *Xa inhibitors (apixaban, rivaroxaban)*: Andexanet alfa (Andexxa) or 4F-PCC
- *Heparin*: Protamine sulfate (1 mg per 100 units heparin, max 50 mg)
- *Antiplatelet agents*: Platelet transfusion generally NOT recommended (PATCH trial: worse outcomes)
- *Tranexamic acid*: TICH-2 showed reduced expansion but no outcome benefit

**Hematoma Expansion Prevention:**
- Occurs in ~30% of patients in first 3-6 hours
- Spot sign on CTA predicts expansion (sensitivity ~60%, specificity ~90%)
- Aggressive BP control is primary strategy
- Hemostatic agents: No proven benefit on functional outcome

**Surgical Options:**
- *Cerebellar ICH >3 cm or with hydrocephalus*: Emergent evacuation (high evidence)
- *Supratentorial ICH*: STICH and STICH-II largely negative for craniotomy
- *Minimally invasive approaches*: MISTIE III (catheter + alteplase), ENRICH (early stereotactic aspiration) - promising
- *EVD (External Ventricular Drain)*: For hydrocephalus or IVH with ventriculomegaly

**ICH Score (Prognostication):**
| Component | Criteria | Points |
|-----------|----------|--------|
| GCS 3-4 | Yes | 2 |
| GCS 5-12 | Yes | 1 |
| ICH volume >=30 mL | Yes | 1 |
| IVH present | Yes | 1 |
| Infratentorial | Yes | 1 |
| Age >=80 | Yes | 1 |
- Score 0: 0% mortality; Score 5-6: ~100% mortality
- Warning: Self-fulfilling prophecy risk with early withdrawal of care

## SAH Acute Management

**Grading Scales:**
- Hunt-Hess: Grade I (minimal headache) to V (coma, posturing)
- Fisher Modified: Grade 0-4 based on CT blood pattern (predicts vasospasm)
- WFNS: Based on GCS and focal deficit

**Aneurysm Securing:**
- Goal: Within 24 hours of admission
- *Endovascular coiling*: Preferred for most (ISAT trial: better outcomes vs clipping)
  - Advantages: Less invasive, shorter recovery
  - Limitations: Higher retreatment rate, not all morphologies suitable
- *Surgical clipping*: Preferred for MCA aneurysms, wide-neck, associated hematoma
- *Flow diversion*: For complex/giant aneurysms (Pipeline Embolization Device)

**Vasospasm and Delayed Cerebral Ischemia (DCI):**
- Peak incidence: Days 3-14 post-hemorrhage
- Nimodipine 60mg PO/NG q4h x 21 days: Standard of care (reduces poor outcomes)
- Monitoring: Daily TCDs (mean velocity >120 cm/s concerning, >200 cm/s critical)
- Induced hypertension: First-line for symptomatic vasospasm (after aneurysm secured)
- Endovascular rescue: Intra-arterial nicardipine/verapamil, balloon angioplasty

**Other SAH Complications:**
- Rebleeding: Highest risk first 24h; secure aneurysm early
- Hydrocephalus: Acute (EVD) or chronic (VP shunt needed in ~20%)
- Hyponatremia: SIADH vs cerebral salt wasting (CSW)
  - SIADH: Euvolemic, fluid restrict
  - CSW: Hypovolemic, give salt (hypertonic saline or fludrocortisone)
- Cardiac: Stress cardiomyopathy (Takotsubo), troponin elevation, arrhythmias
- Seizures: Prophylactic AED use controversial; typically short-term levetiracetam`,

      keyTerms: [
        { term: '4-factor PCC', definition: 'Prothrombin complex concentrate containing factors II, VII, IX, X for urgent warfarin reversal' },
        { term: 'spot sign', definition: 'Contrast extravasation on CTA indicating active hemorrhage and predicting hematoma expansion' },
        { term: 'vasospasm', definition: 'Narrowing of cerebral arteries 3-14 days after SAH, causing delayed cerebral ischemia' },
        { term: 'nimodipine', definition: 'Calcium channel blocker that reduces poor outcomes after SAH, standard of care for 21 days' },
        { term: 'EVD', definition: 'External ventricular drain - catheter placed into brain ventricle to drain CSF and monitor pressure' },
        { term: 'DCI', definition: 'Delayed cerebral ischemia - neurological deterioration from vasospasm and other mechanisms after SAH' },
      ],
      clinicalNotes:
        'ICH: Target SBP <140 within 1 hour. Reverse anticoagulation emergently (4F-PCC for warfarin, idarucizumab for dabigatran). Cerebellar hemorrhage >3 cm requires emergent surgical evaluation. SAH: Secure aneurysm within 24h, then nimodipine x 21 days and daily TCDs for vasospasm monitoring.',
    },

    4: {
      level: 4,
      summary:
        'Advanced hemorrhagic stroke management requires neurocritical care expertise including multimodal monitoring, individualized surgical decision-making, and addressing secondary brain injury from perihematomal edema and inflammation.',
      explanation: `## ICH Pathophysiology and Secondary Injury

**Primary Injury:**
- Direct mechanical disruption from hematoma mass effect
- Volume-dependent: ABC/2 method for estimation (A x B x C / 2 in cm)
- IVH extension worsens prognosis (acts as independent predictor)

**Secondary Injury:**
- *Perihematomal edema (PHE)*: Peaks at 10-14 days
  - Phase 1 (hours): Hydrostatic from clot retraction
  - Phase 2 (days 1-3): Coagulation cascade activation, thrombin-mediated
  - Phase 3 (days 3+): Hemoglobin breakdown, iron-mediated toxicity
- *Inflammation*: Microglial activation, neutrophil infiltration
- *Blood-brain barrier disruption*: Ongoing edema and injury amplification

**Targets for Neuroprotection (Under Investigation):**
- Deferoxamine (iron chelation): i-DEF trial - negative
- Fingolimod (S1P receptor modulator): Reduces lymphocyte infiltration
- Pioglitazone (PPARgamma agonist): Anti-inflammatory, promotes hematoma resolution
- IL-1 receptor antagonist (anakinra): Under study

## Advanced ICH Surgical Management

**Minimally Invasive Surgery Evolution:**
- MISTIE III: Catheter-based aspiration + low-dose alteplase
  - Goal: Reduce clot to <15 mL
  - Did not meet primary endpoint but showed benefit in per-protocol analysis
- ENRICH: Early minimally invasive surgery with navigation
  - Endoscopic or parafascicular approaches
- Endoscopic evacuation: Direct visualization, better clot removal
- Robot-assisted stereotactic aspiration: Under development

**Prognostication and Ethical Considerations:**
- ICH Score predicts mortality but was developed before aggressive care
- Self-fulfilling prophecy: Early withdrawal leads to poor outcomes
- "Full code, full care" paradigm recommended for at least 72 hours
- FUNC Score: Predicts functional independence (ICH volume, age, location, GCS, pre-ICH cognitive impairment)
- Do not use prognostic scores to limit early aggressive care

## Advanced SAH Management

**Multimodal Monitoring:**
- Continuous EEG: Detect non-convulsive seizures, cortical spreading depolarizations
- Transcranial Doppler (TCD): Daily MCA velocities
  - Lindegaard ratio (MCA/ICA velocity): >3 suggests vasospasm, >6 severe
- Brain tissue oxygenation (PbtO2): <20 mmHg concerning
- Cerebral microdialysis: Lactate/pyruvate ratio >40 indicates metabolic crisis
- CT perfusion: Detect perfusion deficits before clinical symptoms

**DCI: Beyond Vasospasm:**
- Vasospasm alone does not explain all DCI
- Additional mechanisms:
  - Microthrombosis in subarachnoid space
  - Cortical spreading depolarizations
  - Blood-brain barrier disruption
  - Systemic inflammation
- Implication: Targeting vasospasm alone is insufficient

**Triple-H Therapy Evolution:**
- Classical: Hypertension, Hypervolemia, Hemodilution
- Current evidence:
  - Hypervolemia: NOT beneficial, may cause pulmonary edema (prophylactic abandoned)
  - Hemodilution: NOT beneficial
  - Induced hypertension: MAIN effective component
- Modern approach: Euvolemia + induced hypertension for symptomatic DCI

**Unruptured Aneurysm Management:**
- ISUIA data: Small (<7mm) anterior circulation aneurysms have low annual rupture risk (~0.1%)
- PHASES score: Population, Hypertension, Age, Size, Earlier SAH, Site
- Generally treat: >7mm, posterior circulation, symptomatic, family history
- Observation: Small, asymptomatic, anterior circulation with serial imaging
- Risk of treatment (2-5% morbidity) must be weighed against natural history

## Cerebral Amyloid Angiopathy (CAA)

**Diagnosis (Modified Boston Criteria 2.0):**
- Definite: Full autopsy with lobar ICH + severe CAA
- Probable with supporting pathology: Clinical + some pathological evidence
- Probable: Age >=50, 2+ lobar hemorrhages or 1 lobar hemorrhage + cortical superficial siderosis
- Possible: Single lobar hemorrhage, age >=50
- MRI findings: Lobar microbleeds, cortical superficial siderosis, white matter hyperintensities

**Management Considerations:**
- High recurrence risk (~10% per year)
- Avoid anticoagulation if possible
- Antiplatelet use: Individualized risk-benefit analysis
- No specific treatment; control modifiable risk factors
- CAA-related inflammation: May respond to immunosuppression`,

      keyTerms: [
        { term: 'perihematomal edema', definition: 'Swelling around the hemorrhage from blood breakdown products and inflammation' },
        { term: 'ABC/2 method', definition: 'Formula to estimate ICH volume: largest diameter x perpendicular diameter x number of slices x slice thickness / 2' },
        { term: 'cortical spreading depolarization', definition: 'Waves of neuronal depolarization that spread across cortex, contributing to secondary injury' },
        { term: 'Lindegaard ratio', definition: 'MCA to extracranial ICA velocity ratio on TCD; >3 suggests vasospasm' },
        { term: 'FUNC score', definition: 'Prognostic score predicting functional independence after ICH' },
        { term: 'Modified Boston Criteria', definition: 'Diagnostic criteria for cerebral amyloid angiopathy using clinical and imaging features' },
      ],
      clinicalNotes:
        'Do not make early withdrawal-of-care decisions based on ICH Score - provide full aggressive care for 72 hours. Vasospasm monitoring with daily TCDs is standard; consider CT perfusion if clinical concern. Modern SAH management uses induced hypertension (not triple-H) for symptomatic DCI. CAA: Lobar microbleeds on SWI are a hallmark; avoid anticoagulation when possible.',
    },

    5: {
      level: 5,
      summary:
        'Contemporary hemorrhagic stroke care integrates precision etiologic diagnosis, individualized surgical strategies, emerging neuroprotective therapies, and evidence-based secondary prevention including restart of antithrombotics.',
      explanation: `## Precision Etiologic Diagnosis

**Vessel Wall MRI:**
- High-resolution MRI of intracranial vessels
- Distinguishes: Atherosclerosis (eccentric enhancement), vasculitis (concentric enhancement), reversible cerebral vasoconstriction syndrome (RCVS), moyamoya
- Critical for young patients with non-hypertensive ICH

**Genetic Considerations:**
- *CADASIL*: NOTCH3 mutation - deep ICH, lacunar strokes, migraine with aura, subcortical dementia
- *Hereditary hemorrhagic telangiectasia (HHT)*: ENG/ACVRL1 mutations - pulmonary and cerebral AVMs
- *COL4A1/A2*: Small vessel disease, ICH, porencephaly
- *Familial aneurysms*: Screen first-degree relatives if 2+ family members affected
  - MRA screening every 5-7 years starting at age 20-25

**RCVS (Reversible Cerebral Vasoconstriction Syndrome):**
- Thunderclap headache with multifocal arterial narrowing
- Triggers: Postpartum, vasoactive drugs (triptans, SSRIs, cannabis)
- Can cause SAH, ICH, ischemic stroke
- Diagnosis: Serial imaging showing reversibility at 12 weeks
- Treatment: Remove trigger, calcium channel blockers, supportive care

## Surgical Innovation

**AVM Management:**
- Spetzler-Martin grading (I-V): Size, eloquence, venous drainage
- *Grade I-II*: Microsurgical resection (gold standard)
- *Grade III*: Multimodal (embolization + surgery or radiosurgery)
- *Grade IV-V*: Generally observe (ARUBA trial: intervention worse than observation)
- Stereotactic radiosurgery: Obliteration over 2-3 years; best for <3 cm

**Cavernous Malformations:**
- Low-flow vascular malformations not visible on angiography
- Familial forms: CCM1 (KRIT1), CCM2 (malcavernin), CCM3 (PDCD10)
- Surgical resection for symptomatic, accessible lesions
- Brainstem cavernomas: Operate if exophytic or recurrently hemorrhagic
- Stereotactic radiosurgery: Controversial, reserved for inoperable cases

**Flow Diversion for Aneurysms:**
- Pipeline Embolization Device (PED), FRED, SILK
- Redirects flow away from aneurysm sac, promotes thrombosis
- Best for: Large/giant, wide-neck, fusiform aneurysms
- Requires DAPT for 3-6 months post-procedure
- Risk: Delayed aneurysm rupture (rare), in-stent stenosis

## Emerging Therapies

**ICH:**
- Glibenclamide: SUR1-TRPM4 blocker reducing edema (CHARM trial)
- Anti-CD47 antibodies: Enhance hematoma clearance by macrophages
- Stem cell therapy: Preclinical data on neurogenesis and repair
- Focused ultrasound: Non-invasive clot liquefaction (DIANA trial)

**SAH:**
- Clazosentan: Endothelin receptor antagonist reducing angiographic vasospasm (REACT)
  - Reduces vasospasm but impact on functional outcome debated
- Intrathecal nicardipine: Sustained-release formulation
- Anti-spreading depolarization therapies: Under investigation

## Secondary Prevention

**Restarting Antithrombotics After ICH:**
- *Antiplatelet agents*:
  - Restart at 1-4 weeks if compelling indication (e.g., recent coronary stent)
  - RESTART trial: Restarting aspirin did not increase recurrent ICH
  - Lower threshold for restart in deep (hypertensive) ICH vs lobar (CAA) ICH
- *Anticoagulation*:
  - Restart at 4-8 weeks if compelling indication (e.g., mechanical valve, high CHA2DS2-VASc)
  - SoSTART, APACHE-AF trials: Restarting anticoagulation appears safe for most
  - CAA with lobar ICH: Avoid anticoagulation; consider LAA occlusion (WATCHMAN)
  - Left atrial appendage occlusion: Alternative to long-term anticoagulation for AF

**Blood Pressure Targets Post-ICH:**
- Long-term target: <130/80 mmHg
- SPS3, PROGRESS trials support aggressive BP lowering
- Choice of agent less important than achieving target

**Statin Use After ICH:**
- SPARCL raised concern (slight increase in hemorrhagic stroke)
- Meta-analyses: Statins safe, may reduce overall stroke risk
- Continue if indicated for cardiovascular prevention

**Lifestyle Modifications:**
- Smoking cessation (especially important for aneurysm patients)
- Alcohol moderation (<2 drinks/day)
- Regular exercise
- Maintain healthy weight`,

      keyTerms: [
        { term: 'RCVS', definition: 'Reversible Cerebral Vasoconstriction Syndrome - thunderclap headache with reversible arterial narrowing' },
        { term: 'Spetzler-Martin grade', definition: 'AVM classification (I-V) based on size, eloquence, and venous drainage guiding treatment decisions' },
        { term: 'flow diversion', definition: 'Endovascular device redirecting blood flow away from aneurysm to promote thrombosis and healing' },
        { term: 'LAA occlusion', definition: 'Left atrial appendage closure device as alternative to anticoagulation in AF patients' },
        { term: 'clazosentan', definition: 'Endothelin receptor antagonist that reduces angiographic vasospasm after SAH' },
        { term: 'CADASIL', definition: 'Hereditary small vessel disease from NOTCH3 mutations causing strokes, migraine, and dementia' },
      ],
      clinicalNotes: `Hemorrhagic stroke practice pearls:
1. ICH: Aggressive BP control (<140 SBP) safe and may reduce expansion
2. Warfarin ICH: Emergent 4F-PCC + Vitamin K; target INR <1.5 within 1 hour
3. SAH: Secure aneurysm within 24h; nimodipine x 21 days; monitor with daily TCDs
4. CAA: Lobar microbleeds and cortical superficial siderosis on SWI; avoid anticoagulation
5. Restarting anticoagulation at 4-8 weeks appears safe if indication is compelling (SoSTART)
6. Full code/full care for 72h before major prognostic discussions in ICH
7. Screen first-degree relatives if 2+ family members have cerebral aneurysms
8. RCVS: Remove vasoactive triggers, use CCB; imaging resolves by 12 weeks
9. High-grade AVMs (IV-V): Generally observe per ARUBA trial results`,
    },
  },

  media: [
    {
      id: 'ich-ct-locations',
      type: 'image',
      filename: 'ich_ct_locations.jpg',
      title: 'ICH Locations on CT',
      description: 'Hypertensive (basal ganglia, thalamus, pons, cerebellum) vs CAA (lobar) hemorrhage patterns',
    },
    {
      id: 'sah-ct-fisher',
      type: 'image',
      filename: 'sah_fisher_grading.jpg',
      title: 'SAH Fisher Grade on CT',
      description: 'CT patterns of subarachnoid blood distribution predicting vasospasm risk',
    },
    {
      id: 'aneurysm-coiling-diagram',
      type: 'diagram',
      filename: 'aneurysm_coiling_vs_clipping.svg',
      title: 'Aneurysm Coiling vs. Clipping',
      description: 'Endovascular coiling and surgical clipping approaches for cerebral aneurysm treatment',
    },
  ],

  citations: [
    {
      id: 'hemphill-ich-guidelines-2015',
      type: 'article',
      title: 'Guidelines for the Management of Spontaneous Intracerebral Hemorrhage',
      authors: ['Hemphill JC', 'Greenberg SM', 'Anderson CS'],
      source: 'Stroke',
      url: 'https://doi.org/10.1161/STR.0000000000000069',
    },
    {
      id: 'connolly-sah-guidelines-2012',
      type: 'article',
      title: 'Guidelines for the Management of Aneurysmal Subarachnoid Hemorrhage',
      authors: ['Connolly ES', 'Rabinstein AA', 'Carhuapoma JR'],
      source: 'Stroke',
      url: 'https://doi.org/10.1161/STR.0b013e3182587839',
    },
  ],

  crossReferences: [
    { targetId: 'neuro-ischemic-stroke-depth', targetType: 'condition', relationship: 'sibling', label: 'Ischemic Stroke' },
    { targetId: 'neuro-stroke-overview', targetType: 'condition', relationship: 'parent', label: 'Stroke Overview' },
    { targetId: 'neuro-alzheimers-depth', targetType: 'condition', relationship: 'related', label: 'Alzheimer Disease (CAA overlap)' },
  ],

  tags: {
    systems: ['nervous', 'cardiovascular'],
    topics: ['neurology', 'stroke', 'hemorrhage', 'neurocritical care', 'emergency', 'neurosurgery'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine', 'surgery', 'emergency'],
    },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hemorrhagicStrokeDepthContent;
