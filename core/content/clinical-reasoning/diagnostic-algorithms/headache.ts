/**
 * Headache Diagnostic Algorithm
 *
 * A comprehensive approach to evaluating headache, distinguishing
 * primary headache disorders from secondary causes requiring urgent intervention.
 */

import { DiagnosticAlgorithm } from '../types';

export const HEADACHE_ALGORITHM: DiagnosticAlgorithm = {
  id: 'algorithm-headache',
  name: 'Headache Diagnostic Algorithm',
  alternateNames: ['Cephalgia Evaluation', 'Head Pain Workup'],
  presentation: 'Headache',
  icdCodes: ['R51', 'G43.909', 'G44.1', 'G44.209'],

  levels: {
    1: {
      level: 1,
      summary: 'Headaches are very common and usually not dangerous. But some headaches can be signs of serious problems that need quick treatment.',
      explanation: `Almost everyone gets headaches sometimes. Most are just annoying, but doctors need to make sure it is not something serious.

**Two Types of Headaches:**
1. **Primary headaches**: The headache IS the problem (like migraines or tension headaches)
2. **Secondary headaches**: The headache is caused by something else (like infection, bleeding, or a tumor)

**Common Headache Types:**
- **Tension headaches**: Feel like a tight band around your head, both sides
- **Migraines**: Often one-sided, throbbing, with nausea and sensitivity to light
- **Cluster headaches**: Severe pain around one eye, with watery eye and stuffy nose

**What Doctors Look For:**
1. **How did it start?** The worst headache of your life that started suddenly is a red flag
2. **Where is the pain?** One side? Both sides? Behind your eye?
3. **What else is happening?** Fever? Stiff neck? Vision changes? Weakness?
4. **Have you had headaches like this before?** New or different headaches need more attention

**When to Get Help Right Away:**
- Worst headache of your life (especially if sudden)
- Headache with fever and stiff neck
- Headache with confusion or trouble speaking
- Headache after hitting your head
- Headache with weakness or numbness on one side`,
      keyTerms: [
        { term: 'migraine', definition: 'A type of headache that is often on one side, throbs, and can cause nausea and sensitivity to light', pronunciation: 'MY-grain' },
        { term: 'tension headache', definition: 'A headache that feels like a tight band around your head, usually caused by stress or muscle tightness' },
        { term: 'red flag', definition: 'A warning sign that suggests something might be seriously wrong' },
      ],
      analogies: [
        'A tension headache feels like someone is squeezing your head with their hands.',
        'A migraine throbs like a drum beating inside your head.',
      ],
      examples: [
        'A student who gets headaches during finals that feel like pressure around their head likely has tension headaches from stress.',
        'A woman who gets throbbing headaches on one side with nausea before her period may have menstrual migraines.',
      ],
    },
    2: {
      level: 2,
      summary: 'Headache evaluation focuses on distinguishing dangerous secondary causes from benign primary headache disorders using red flag symptoms and targeted examination.',
      explanation: `Headache is one of the most common medical complaints. The key clinical skill is identifying the small percentage with serious underlying causes.

**Primary vs. Secondary Headaches:**

**Primary Headaches (90%+ of cases):**
- Tension-type headache: Most common, bilateral, non-pulsatile, mild-moderate
- Migraine: Unilateral, pulsatile, moderate-severe, with nausea/photophobia
- Cluster headache: Severe unilateral orbital pain with autonomic features

**Secondary Headaches (red flags - SNOOP):**
- **S**ystemic symptoms (fever, weight loss) or **S**econdary risk factors (HIV, cancer)
- **N**eurologic symptoms (confusion, weakness, vision changes)
- **O**nset sudden (thunderclap headache)
- **O**lder age (new headache after 50)
- **P**ositional or **P**rogressive pattern change

**Key History Questions:**
- Onset: Sudden (seconds) vs. gradual (hours-days)
- Pattern: First or worst headache? Progressive worsening?
- Triggers: Position, Valsalva, exertion, cough
- Associated symptoms: Nausea, photophobia, aura, neck stiffness, fever
- Medical history: Cancer, HIV, coagulopathy

**Physical Examination:**
- Vital signs: Fever, hypertension
- Neurologic exam: Mental status, cranial nerves, motor, sensory
- Fundoscopy: Papilledema (increased intracranial pressure)
- Neck: Stiffness (meningismus)
- Temporal arteries: Tenderness (giant cell arteritis in elderly)

**Dangerous Diagnoses to Consider:**
1. Subarachnoid hemorrhage (SAH): Thunderclap headache
2. Meningitis/encephalitis: Fever, neck stiffness, altered mental status
3. Brain tumor/mass: Progressive headache, focal neurologic signs
4. Giant cell arteritis: Age >50, scalp tenderness, jaw claudication
5. Idiopathic intracranial hypertension: Young obese women, papilledema
6. Cerebral venous thrombosis: Postpartum, OCP use, progressive headache

**When to Image:**
CT or MRI indicated for: new severe headache, thunderclap onset, abnormal neurologic exam, progressive pattern, immunocompromised, anticoagulation, age >50 with new headache`,
      keyTerms: [
        { term: 'thunderclap headache', definition: 'A severe headache that reaches maximum intensity within seconds to a minute - a red flag for bleeding in the brain' },
        { term: 'photophobia', definition: 'Sensitivity to light, common in migraines and meningitis', pronunciation: 'foh-toh-FOH-bee-uh' },
        { term: 'meningitis', definition: 'Infection of the membranes covering the brain and spinal cord', pronunciation: 'men-in-JY-tis' },
        { term: 'papilledema', definition: 'Swelling of the optic nerve visible on eye exam, indicates increased pressure inside the skull', pronunciation: 'pap-il-eh-DEE-mah' },
      ],
      analogies: [
        'Papilledema is like checking the pressure in a balloon by looking at one spot - the optic nerve shows if there is too much pressure in the skull.',
      ],
    },
    3: {
      level: 3,
      summary: 'Headache evaluation requires systematic application of red flag criteria, understanding of ICHD-3 diagnostic criteria, and appropriate use of neuroimaging and cerebrospinal fluid analysis.',
      explanation: `## Systematic Approach to Headache

### Initial Assessment
- Vital signs: Fever (infection), severe hypertension (hypertensive emergency)
- Quick neurologic screen: Mental status, pupils, motor strength
- Identify immediate threats: SAH, meningitis, herniation

### History - Critical Elements

**SNOOP4 Red Flags:**
- **S**ystemic symptoms/signs (fever, weight loss, immunocompromised)
- **S**econdary risk factors (HIV, cancer history)
- **N**eurologic symptoms (confusion, focal deficits, seizure, papilledema)
- **O**nset sudden (thunderclap: maximal in <1 minute)
- **O**lder (new onset after 50)
- **P**revious headache history change (different from baseline)
- **P**ositional (worse lying down: ICP, or standing: low CSF pressure)
- **P**recipitated by Valsalva, cough, exertion
- **P**rogressive over days-weeks
- **P**regnancy/postpartum

**Primary Headache Characterization:**

| Feature | Tension | Migraine | Cluster |
|---------|---------|----------|---------|
| Location | Bilateral | Unilateral (60%) | Strictly unilateral orbital |
| Quality | Pressing/tightening | Pulsating | Stabbing/boring |
| Intensity | Mild-moderate | Moderate-severe | Severe-excruciating |
| Duration | 30 min - 7 days | 4-72 hours | 15-180 minutes |
| Activity | Not aggravated | Aggravated | Restlessness |
| Nausea | No | Yes | Sometimes |
| Photo/phonophobia | No | Yes (both) | Sometimes |
| Autonomic features | No | No | Yes (tearing, rhinorrhea, ptosis) |

### Physical Examination Focus

**Neurologic Examination:**
- Mental status: Confusion suggests encephalitis, SAH, mass effect
- Cranial nerves: III, IV, VI (increased ICP), VII (facial asymmetry)
- Visual fields: Hemianopia (mass, stroke)
- Motor/sensory: Focal findings suggest structural lesion
- Reflexes: Asymmetry concerning for structural lesion
- Gait: Ataxia in posterior fossa pathology

**Specific Maneuvers:**
- Fundoscopy: Papilledema, subhyaloid hemorrhage (SAH)
- Jolt accentuation: Worsening with horizontal head movement (meningitis)
- Temporal artery palpation: Tenderness, decreased pulse (GCA)
- Kernig/Brudzinski signs: Meningeal irritation

### Secondary Headache Workup

**Subarachnoid Hemorrhage:**
- CT head (non-contrast): 98% sensitive within 6 hours, decreases over time
- Lumbar puncture if CT negative: Xanthochromia, elevated RBC count
- CTA/MRA or conventional angiography if SAH confirmed

**Meningitis/Encephalitis:**
- Blood cultures before antibiotics (but do not delay antibiotics)
- Lumbar puncture: Opening pressure, cell count, protein, glucose, cultures
- CT before LP only if: Immunocompromised, CNS disease history, new seizure, papilledema, altered consciousness, focal neurologic deficit

**Elevated ICP/Mass Lesion:**
- MRI with contrast (preferred for tumors, posterior fossa)
- CT with contrast if MRI unavailable
- Avoid LP until mass effect ruled out

**Giant Cell Arteritis:**
- ESR, CRP (both often markedly elevated)
- Temporal artery biopsy (gold standard)
- Start steroids immediately if high suspicion (do not wait for biopsy)

**Cerebral Venous Thrombosis:**
- CT venography or MR venography
- Risk factors: Postpartum, OCP, hypercoagulable state

### Diagnostic Imaging Decision

**CT Head (without contrast):**
- First-line for: SAH (within 6 hours), acute trauma, acute stroke
- Advantages: Fast, widely available, excellent for blood

**MRI Brain:**
- Preferred for: Tumors, posterior fossa, venous thrombosis, small lesions
- With contrast: Tumor, infection, inflammation
- MRV: Cerebral venous thrombosis

**When to Image:**
- Any SNOOP4 red flag present
- Abnormal neurologic examination
- First or worst headache
- Pattern change from established primary headache`,
      keyTerms: [
        { term: 'ICHD-3', definition: 'International Classification of Headache Disorders, 3rd edition - standard diagnostic criteria for headaches' },
        { term: 'xanthochromia', definition: 'Yellow discoloration of CSF indicating bilirubin from RBC breakdown, present 12+ hours after SAH', pronunciation: 'zan-thoh-KROH-mee-uh' },
        { term: 'giant cell arteritis', definition: 'Inflammatory disease of medium-large arteries, primarily temporal artery, causing headache and vision loss risk' },
        { term: 'jolt accentuation', definition: 'Worsening headache with horizontal rotation of head 2-3 times per second, suggests meningeal irritation' },
      ],
      clinicalNotes: 'CT sensitivity for SAH decreases over time: 98% at 6 hours, 93% at 12 hours, 80% at 24 hours, 50% at 1 week. LP is mandatory if CT is negative and clinical suspicion remains high.',
    },
    4: {
      level: 4,
      summary: 'Advanced headache evaluation integrates clinical decision rules, CSF analysis interpretation, and understanding of pathophysiology to guide diagnosis and management of both primary and secondary headache disorders.',
      explanation: `## Advanced Diagnostic Framework

### SAH Evaluation - Ottawa SAH Rule

**Can exclude SAH without LP if ALL present:**
- Age <40
- No neck stiffness on examination
- No witnessed LOC
- No onset during exertion
- Headache not instantaneous (reached maximum in <1 second)
- No limited neck flexion on examination

**If any criterion absent: CT + LP if CT negative**

**LP Interpretation for SAH:**
- Timing: Wait 6-12 hours after onset for xanthochromia to develop
- RBC count: Compare tube 1 to tube 4 (traumatic tap shows decreasing count)
- Xanthochromia: Visual inspection vs. spectrophotometry (more sensitive)
- Opening pressure: Often elevated in SAH

**CSF Analysis Patterns:**

| Condition | WBC | Protein | Glucose | Opening Pressure |
|-----------|-----|---------|---------|------------------|
| Bacterial meningitis | >1000 (PMN) | Elevated | Low (<40% serum) | Elevated |
| Viral meningitis | 50-500 (lymph) | Mildly elevated | Normal | Normal-elevated |
| TB/fungal meningitis | 50-500 (lymph) | Elevated | Low | Elevated |
| SAH | RBCs, xanthochromia | Elevated | Normal | Elevated |
| IIH | Normal | Normal | Normal | Very elevated |
| Carcinomatous | Variable | Elevated | Low | Variable |

### Migraine Pathophysiology

**Current Understanding:**
- Cortical spreading depression: Wave of depolarization (aura)
- Trigeminovascular activation: Release of CGRP, substance P
- Neurogenic inflammation: Vasodilation, plasma extravasation
- Central sensitization: Explains cutaneous allodynia, photophobia

**Migraine Variants:**
- With aura (classic): Visual, sensory, or language disturbance preceding headache
- Without aura (common): No prodrome, more frequent
- Chronic migraine: ≥15 headache days/month for >3 months, ≥8 with migraine features
- Status migrainosus: Attack >72 hours despite treatment
- Vestibular migraine: Vertigo with migraine features
- Hemiplegic migraine: Motor weakness as aura component

### Cluster Headache Specifics

**Pathophysiology:**
- Hypothalamic dysfunction (circadian periodicity)
- Trigeminal-autonomic reflex activation
- Parasympathetic activation (lacrimation, rhinorrhea)
- Sympathetic dysfunction (ptosis, miosis)

**Cluster Periods:**
- Episodic: Attacks in clusters lasting weeks-months, then remission
- Chronic: No remission period >3 months

### Special Syndromes

**Reversible Cerebral Vasoconstriction Syndrome (RCVS):**
- Recurrent thunderclap headaches over 1-4 weeks
- Triggers: Postpartum, vasoactive substances (SSRIs, triptans, cocaine)
- Imaging: Multifocal arterial narrowing on CTA/MRA
- Usually self-limited but stroke risk exists

**Posterior Reversible Encephalopathy Syndrome (PRES):**
- Headache, altered mental status, seizures, visual disturbance
- Associated with: Hypertension, eclampsia, immunosuppressants
- MRI: Bilateral parieto-occipital edema (vasogenic)

**Spontaneous Intracranial Hypotension:**
- Positional headache (worse upright, better supine)
- CSF leak from dural tear
- MRI: Pachymeningeal enhancement, brain sagging
- Treatment: Bed rest, caffeine, epidural blood patch

**Idiopathic Intracranial Hypertension (IIH):**
- Young, obese women
- Headache, transient visual obscurations, pulsatile tinnitus
- Papilledema on exam
- LP: Elevated opening pressure (>25 cm H2O), normal CSF
- MRI signs: Empty sella, optic nerve sheath distension, flattened posterior sclera

### Medication Overuse Headache

**Criteria:**
- Headache ≥15 days/month in patient with pre-existing headache disorder
- Regular overuse of acute headache medication >3 months
- Simple analgesics ≥15 days/month, or triptans/opioids/combination ≥10 days/month

**Management:**
- Withdrawal of offending medication
- Bridge therapy during withdrawal period
- Preventive medication initiation
- High relapse rate without behavioral intervention`,
      keyTerms: [
        { term: 'Ottawa SAH Rule', definition: 'Clinical decision rule to identify patients with thunderclap headache who do not require LP after negative CT' },
        { term: 'RCVS', definition: 'Reversible Cerebral Vasoconstriction Syndrome - recurrent thunderclap headaches with multifocal arterial narrowing' },
        { term: 'PRES', definition: 'Posterior Reversible Encephalopathy Syndrome - vasogenic edema causing headache, AMS, seizures' },
        { term: 'medication overuse headache', definition: 'Chronic headache resulting from frequent use of acute headache medications' },
        { term: 'cortical spreading depression', definition: 'Wave of neuronal depolarization spreading across cortex, underlying migraine aura' },
      ],
      clinicalNotes: 'RCVS and SAH can have similar presentations with thunderclap headache. RCVS typically has recurrent thunderclap headaches and may have normal initial imaging. CTA/MRA showing beading suggests RCVS but angiogram may be needed to differentiate from vasculitis.',
    },
    5: {
      level: 5,
      summary: 'Expert headache management requires integration of current evidence on diagnostic accuracy, understanding of emerging biomarkers, and application of guideline-directed acute and preventive therapies while recognizing complex and atypical presentations.',
      explanation: `## Expert-Level Diagnostic Considerations

### Diagnostic Accuracy of Clinical Features

**Thunderclap Headache Evaluation:**
- Prevalence of SAH with thunderclap: ~10-25%
- CT sensitivity at 6 hours: 98-100% (with modern multidetector CT)
- Debate: Is LP still necessary after negative high-quality CT within 6 hours?
- Current consensus: LP still recommended due to potential catastrophic miss
- CTA: Should be performed if any suspicion remains after negative CT/LP

**Migraine Diagnosis:**
- Clinical diagnosis; imaging only for red flags
- POUND mnemonic sensitivity/specificity limited
- Diagnostic criteria (ICHD-3) require at least 5 attacks for migraine without aura
- Aura should be fully reversible and last 5-60 minutes

### Challenging Presentations

**Headache in Pregnancy:**
- Primary headaches often improve (especially migraine)
- New or changed headache: Must consider secondary causes
- Preeclampsia/eclampsia: Headache, visual changes, hypertension, proteinuria
- Cerebral venous thrombosis: Hypercoagulable state of pregnancy
- PRES: Associated with preeclampsia
- Pituitary apoplexy: Sudden severe headache, visual field defects, ophthalmoplegia
- Imaging: MRI without contrast preferred; CT if emergent

**Headache in Immunocompromised:**
- Lower threshold for imaging
- Consider: CNS lymphoma, toxoplasmosis, PML, cryptococcal meningitis
- Cryptococcal meningitis: Serum cryptococcal antigen, CSF analysis
- May have minimal CSF pleocytosis despite significant infection

**Headache with Fever:**
- Meningitis: LP unless contraindication
- Encephalitis: Consider HSV (temporal lobe involvement on MRI)
- Brain abscess: Ring-enhancing lesion, dental/sinus source
- Do NOT delay antibiotics for imaging if bacterial meningitis suspected

### Emerging Concepts

**CGRP as Biomarker:**
- Calcitonin gene-related peptide elevated during migraine attacks
- Basis for anti-CGRP monoclonal antibodies (erenumab, fremanezumab, galcanezumab)
- May eventually have diagnostic utility

**Neuroimaging Advances:**
- High-resolution vessel wall MRI: Differentiates vasculitis from other vasculopathies
- 7T MRI: Enhanced visualization of trigeminal nerve, brainstem
- SWI sequences: Improved detection of microbleeds, cavernomas

### Evidence-Based Treatment

**Acute Migraine Treatment (AHS 2021):**
- First-line: Triptans, NSAIDs, combination analgesics
- Consider gepants (ubrogepant, rimegepant) if triptan contraindicated or ineffective
- Lasmiditan: 5-HT1F agonist, no vasoconstriction (safe in CVD)
- Anti-emetics: Metoclopramide, prochlorperazine (also have analgesic effect)

**Preventive Migraine Treatment:**
- Oral: Beta-blockers, topiramate, valproate, amitriptyline
- Injectable: Anti-CGRP monoclonal antibodies
- Procedures: OnabotulinumtoxinA (chronic migraine), nerve blocks
- Neuromodulation: TMS, eTNS, gammaCore (vagal nerve stimulation)
- Goal: ≥50% reduction in headache days

**Cluster Headache Treatment:**
- Acute: High-flow oxygen (12-15 L/min for 15-20 min), sumatriptan injection
- Preventive: Verapamil (first-line), lithium, galcanezumab
- Transitional: Prednisone burst, greater occipital nerve block

### Red Flag Nuances

**When "Worst Headache of Life" Is Not SAH:**
- Primary thunderclap headache: Diagnosis of exclusion
- RCVS: Recurrent thunderclap, triggers, normal or near-normal initial imaging
- Cervical artery dissection: Neck pain, Horner syndrome
- Pituitary apoplexy: Visual field defects, hormonal dysfunction
- Colloid cyst of third ventricle: Position-related, may cause sudden death

**Chronic Daily Headache:**
- Chronic migraine: ≥15 days, ≥8 with migraine features
- Chronic tension-type: ≥15 days, bilateral, pressing quality
- New daily persistent headache: Distinct onset date, persistent since
- Hemicrania continua: Strictly unilateral, responds to indomethacin
- Medication overuse: Superimposed on primary headache

### Pearls and Pitfalls

**Clinical Pearls:**
1. Thunderclap headache during sexual activity: Consider SAH and RCVS
2. Headache worsening with Valsalva: Chiari malformation, posterior fossa lesion
3. Unilateral headache with ipsilateral autonomic features: Consider TACs (cluster, hemicrania)
4. New headache in patient with cancer: Must rule out metastases, leptomeningeal disease
5. Headache with jaw claudication in elderly: GCA, start steroids immediately

**Common Pitfalls:**
1. Attributing new headache to sinusitis without red flag evaluation
2. Stopping evaluation after negative CT without LP when SAH suspected
3. Missing medication overuse headache
4. Not considering GCA in elderly with new headache
5. Over-relying on normal neurologic exam (can be normal in serious pathology)`,
      keyTerms: [
        { term: 'gepants', definition: 'CGRP receptor antagonists for acute migraine treatment (ubrogepant, rimegepant)' },
        { term: 'TACs', definition: 'Trigeminal Autonomic Cephalalgias - cluster headache, paroxysmal hemicrania, hemicrania continua, SUNCT/SUNA' },
        { term: 'hemicrania continua', definition: 'Continuous unilateral headache with autonomic features, responsive only to indomethacin' },
        { term: 'vessel wall MRI', definition: 'High-resolution MRI technique to evaluate arterial wall enhancement in vasculitis and other vasculopathies' },
      ],
      clinicalNotes: `Key clinical pearls:
1. The absence of meningismus does not exclude SAH or meningitis, especially early
2. GCA can cause permanent vision loss; treat with steroids before biopsy confirmation
3. Medication overuse headache is extremely common and frequently missed
4. Hemicrania continua and paroxysmal hemicrania have absolute response to indomethacin - therapeutic trial is diagnostic
5. New daily persistent headache may occur after viral illness and has distinct features from transformed migraine`,
    },
  },

  steps: [
    {
      id: 'initial-assessment',
      type: 'action',
      content: {
        1: 'Check if this is an emergency by asking about the worst headache ever, fever, confusion, or weakness.',
        2: 'Initial assessment: Identify red flag symptoms (SNOOP), perform brief neurologic screen, assess vital signs.',
        3: 'Rapid triage: SNOOP4 red flag screening. Vital signs (fever, severe hypertension). Brief neuro exam (mental status, pupils, motor strength). Identify unstable patients.',
        4: 'Systematic red flag evaluation. Assess for meningeal signs. Fundoscopy for papilledema. Determine if emergent workup needed.',
        5: 'Expert triage: Pattern recognition for high-risk presentations. Consider atypical presentations of serious pathology. Bedside assessment guides urgency of workup.',
      },
      nextSteps: [
        { condition: 'Thunderclap headache', targetStepId: 'sah-evaluation' },
        { condition: 'Fever with headache', targetStepId: 'meningitis-evaluation' },
        { condition: 'Focal neurologic signs', targetStepId: 'structural-evaluation' },
        { condition: 'No red flags', targetStepId: 'primary-headache-evaluation' },
      ],
    },
    {
      id: 'sah-evaluation',
      type: 'warning',
      content: {
        1: 'EMERGENCY: A sudden, severe headache could mean bleeding in your brain. You need tests right away!',
        2: 'CRITICAL: Thunderclap headache requires urgent CT scan. If CT is negative, lumbar puncture is needed to rule out subarachnoid hemorrhage.',
        3: 'SAH workup: Immediate non-contrast CT head. If negative and <6 hours from onset, consider Ottawa SAH Rule. LP if CT negative (especially if >6 hours from onset).',
        4: 'Apply Ottawa SAH Rule for LP decision. CT sensitivity time-dependent. LP: Look for xanthochromia and RBC count. If positive, CTA for aneurysm localization.',
        5: 'Expert evaluation: Consider RCVS if recurrent thunderclap with triggers. Cervical artery dissection in younger patients with neck pain. CTA should follow positive LP. May need DSA for small aneurysms.',
      },
      isRedFlag: true,
      requiresUrgentAction: true,
      nextSteps: [
        { condition: 'SAH confirmed', targetStepId: 'sah-management' },
        { condition: 'SAH ruled out', targetStepId: 'other-thunderclap' },
      ],
    },
    {
      id: 'meningitis-evaluation',
      type: 'warning',
      content: {
        1: 'EMERGENCY: Headache with fever and stiff neck could be a serious brain infection. Tests are needed right away.',
        2: 'CRITICAL: Suspected meningitis. Start antibiotics immediately after blood cultures. Lumbar puncture needed but do not delay treatment.',
        3: 'Meningitis workup: Blood cultures, then empiric antibiotics immediately. CT before LP only if: Immunocompromised, CNS disease history, new seizure, papilledema, focal deficits, GCS <10.',
        4: 'Empiric therapy: Ceftriaxone + vancomycin + ampicillin (if >50 or immunocompromised) + dexamethasone. LP analysis guides further management. Consider HSV encephalitis (acyclovir).',
        5: 'Expert management: CSF interpretation nuances. Consider TB/fungal if risk factors. MRI for encephalitis evaluation. Opening pressure important for diagnosis.',
      },
      isRedFlag: true,
      requiresUrgentAction: true,
      nextSteps: [
        { condition: 'Bacterial meningitis confirmed', targetStepId: 'bacterial-meningitis-management' },
        { condition: 'Viral meningitis likely', targetStepId: 'viral-meningitis-management' },
        { condition: 'Encephalitis suspected', targetStepId: 'encephalitis-management' },
      ],
    },
    {
      id: 'structural-evaluation',
      type: 'decision',
      content: {
        1: 'Your headache with other symptoms needs a brain scan to make sure nothing is pressing on your brain.',
        2: 'Focal neurologic signs or progressive headache requires imaging to evaluate for mass lesion, stroke, or other structural cause.',
        3: 'Structural evaluation: MRI with contrast preferred. CT if MRI unavailable. Look for mass, hemorrhage, infarction, venous thrombosis.',
        4: 'Imaging selection: MRI better for posterior fossa, tumor detection. Consider MRV/CTV if venous thrombosis suspected. PET may be needed for suspected CNS lymphoma.',
        5: 'Expert evaluation: Recognize subtle findings. Leptomeningeal enhancement suggests carcinomatous meningitis. Vessel wall MRI for vasculitis. Consider pituitary imaging for visual field defects.',
      },
      nextSteps: [
        { condition: 'Mass lesion identified', targetStepId: 'mass-management' },
        { condition: 'Venous thrombosis', targetStepId: 'cvt-management' },
        { condition: 'Imaging negative', targetStepId: 'further-evaluation' },
      ],
    },
    {
      id: 'primary-headache-evaluation',
      type: 'question',
      content: {
        1: 'Tell me more about your headaches. How often do you get them? What do they feel like? What else happens when you have one?',
        2: 'Characterize the headache: Frequency, duration, location, quality, associated features (nausea, photophobia, autonomic symptoms), triggers.',
        3: 'Apply ICHD-3 criteria: Differentiate tension-type, migraine, cluster, and other primary headaches based on characteristic features.',
        4: 'Detailed phenotyping: Aura characteristics, autonomic features, medication use patterns. Screen for medication overuse headache. Assess functional impact.',
        5: 'Expert characterization: Consider rare primary headache disorders (paroxysmal hemicrania, hemicrania continua - indomethacin trial). Evaluate for chronic migraine criteria. Assess comorbidities.',
      },
      nextSteps: [
        { condition: 'Migraine features', targetStepId: 'migraine-management' },
        { condition: 'Tension-type features', targetStepId: 'tension-management' },
        { condition: 'Cluster/autonomic features', targetStepId: 'cluster-management' },
        { condition: 'Medication overuse pattern', targetStepId: 'moh-management' },
      ],
    },
    {
      id: 'sah-management',
      type: 'endpoint',
      content: {
        1: 'You have bleeding around your brain. You need to be in the hospital with brain specialists taking care of you.',
        2: 'Subarachnoid hemorrhage confirmed. Admission to neuroscience ICU. Neurosurgery consultation for aneurysm treatment. Blood pressure control and prevention of rebleeding.',
        3: 'SAH management: ICU admission, nimodipine for vasospasm prevention, BP control, seizure prophylaxis consideration. Aneurysm treatment (coiling vs. clipping) within 24-72 hours if possible.',
        4: 'Grade severity (Hunt-Hess, Fisher). Monitor for vasospasm (TCDs, CTA). EVD if hydrocephalus. Hypertensive therapy if vasospasm develops. Complications: Rebleeding, vasospasm, hydrocephalus.',
        5: 'Expert management: Aneurysm morphology guides intervention. Coiling vs. clipping decision. Triple-H therapy (hypertension, hemodilution, hypervolemia) being replaced by targeted therapy. Rescue angioplasty for refractory vasospasm.',
      },
    },
    {
      id: 'migraine-management',
      type: 'endpoint',
      content: {
        1: 'You have migraines. There are medicines that can help stop them when they start and others that can prevent them.',
        2: 'Migraine management: Acute treatment options include triptans, NSAIDs, and anti-nausea medicines. If frequent, preventive daily medication may help.',
        3: 'Acute treatment: NSAID or triptan based on severity. Anti-emetic PRN. Lifestyle modification. Consider preventive therapy if ≥4 headache days/month or significant disability.',
        4: 'Stratified care approach: Mild-moderate: NSAID. Moderate-severe: Triptan. Refractory: Gepant, lasmiditan, neuroleptic. Prevention: Beta-blocker, topiramate, amitriptyline, CGRP mAb.',
        5: 'Expert management: Optimize acute therapy to avoid MOH. Anti-CGRP mAbs for prevention if other agents fail. Botox for chronic migraine. Neuromodulation options. Address comorbidities. Multidisciplinary approach for refractory cases.',
      },
    },
    {
      id: 'tension-management',
      type: 'endpoint',
      content: {
        1: 'You have tension headaches. Simple pain relievers and reducing stress can help.',
        2: 'Tension-type headache: Acute treatment with OTC analgesics (acetaminophen, NSAIDs). Stress reduction, adequate sleep, and addressing triggers. Prevention if frequent.',
        3: 'TTH management: Simple analgesics for acute. Limit use to prevent MOH. Prevention: Amitriptyline most evidence. Physical therapy, stress management.',
        4: 'Chronic TTH: Amitriptyline or other TCA first-line preventive. Behavioral interventions effective. Rule out medication overuse. Address contributing factors.',
        5: 'Expert approach: Distinguish from chronic migraine (often overlap). Physical therapy and behavioral therapy as effective as medications. EMG biofeedback. Avoid narcotic analgesics.',
      },
    },
    {
      id: 'cluster-management',
      type: 'endpoint',
      content: {
        1: 'You have cluster headaches - one of the most painful types. Special treatments can help stop attacks and prevent them.',
        2: 'Cluster headache: Acute treatment with high-flow oxygen or sumatriptan injection. Prevention during cluster periods with verapamil.',
        3: 'Cluster management: Acute: 100% O2 at 12-15 L/min via non-rebreather or sumatriptan 6mg SQ. Prevention: Verapamil (titrate to effect, monitor ECG). Transitional: Prednisone burst.',
        4: 'Refractory cluster: High-dose verapamil (may need >480mg, monitor for heart block). Add lithium. Greater occipital nerve block. Galcanezumab approved for episodic cluster.',
        5: 'Expert management: Differentiate from other TACs. Consider paroxysmal hemicrania (indomethacin responsive) or SUNCT/SUNA. Occipital nerve stimulation or SPG stimulation for refractory cases. Deep brain stimulation in extreme cases.',
      },
    },
    {
      id: 'moh-management',
      type: 'endpoint',
      content: {
        1: 'Taking pain medicine too often for headaches can actually make headaches worse. We need to break this cycle.',
        2: 'Medication overuse headache: Need to reduce or stop the overused medication. Preventive medication will be started. This transition period can be difficult but is necessary.',
        3: 'MOH management: Withdrawal of offending medication (can be abrupt or tapered depending on medication). Bridge therapy during withdrawal. Start preventive medication. Behavioral support.',
        4: 'Withdrawal approaches: Opioids require taper. Triptans can often stop abruptly. Bridge with NSAIDs, nerve blocks, or corticosteroids. High relapse rate without behavioral intervention.',
        5: 'Expert management: Outpatient vs. inpatient withdrawal based on severity. Anti-CGRP antibodies may work even without withdrawal but not ideal. Multidisciplinary approach critical. Address underlying primary headache disorder. Long-term follow-up essential.',
      },
    },
  ],

  startStepId: 'initial-assessment',

  differentials: [
    {
      diagnosis: 'Migraine',
      prevalence: 'common',
      urgency: 'routine',
      keyFeatures: ['Unilateral', 'Pulsating quality', 'Moderate-severe intensity', 'Nausea/vomiting', 'Photophobia and phonophobia', 'Duration 4-72 hours'],
    },
    {
      diagnosis: 'Tension-type Headache',
      prevalence: 'common',
      urgency: 'routine',
      keyFeatures: ['Bilateral', 'Pressing/tightening quality', 'Mild-moderate intensity', 'No nausea', 'May have photophobia or phonophobia (not both)'],
    },
    {
      diagnosis: 'Cluster Headache',
      prevalence: 'uncommon',
      urgency: 'urgent',
      keyFeatures: ['Strictly unilateral orbital/supraorbital', 'Severe-excruciating', 'Restlessness', 'Autonomic features (lacrimation, rhinorrhea, ptosis)', '15-180 minute duration', 'Circadian pattern'],
    },
    {
      diagnosis: 'Subarachnoid Hemorrhage',
      prevalence: 'uncommon',
      urgency: 'emergent',
      keyFeatures: ['Thunderclap onset', 'Worst headache of life', 'Neck stiffness', 'Altered consciousness', 'May have focal deficits'],
    },
    {
      diagnosis: 'Meningitis',
      prevalence: 'uncommon',
      urgency: 'emergent',
      keyFeatures: ['Fever', 'Neck stiffness', 'Headache', 'Photophobia', 'Altered mental status', 'Petechial rash (meningococcal)'],
    },
    {
      diagnosis: 'Brain Tumor',
      prevalence: 'uncommon',
      urgency: 'urgent',
      keyFeatures: ['Progressive headache', 'Worse in morning', 'Worse with Valsalva', 'Focal neurologic deficits', 'Seizures', 'Papilledema'],
    },
    {
      diagnosis: 'Giant Cell Arteritis',
      prevalence: 'uncommon',
      urgency: 'emergent',
      keyFeatures: ['Age >50', 'New headache', 'Scalp tenderness', 'Jaw claudication', 'Visual symptoms', 'Elevated ESR/CRP'],
    },
    {
      diagnosis: 'Idiopathic Intracranial Hypertension',
      prevalence: 'uncommon',
      urgency: 'urgent',
      keyFeatures: ['Young obese women', 'Daily headache', 'Transient visual obscurations', 'Pulsatile tinnitus', 'Papilledema'],
    },
    {
      diagnosis: 'Medication Overuse Headache',
      prevalence: 'common',
      urgency: 'routine',
      keyFeatures: ['≥15 headache days/month', 'Regular use of acute medications', 'Pre-existing primary headache', 'Improvement after withdrawal'],
    },
  ],

  redFlags: [
    {
      finding: 'Thunderclap headache (maximal intensity within seconds)',
      implication: 'Subarachnoid hemorrhage, RCVS, or other vascular emergency',
      action: 'Immediate CT head, LP if CT negative',
    },
    {
      finding: 'New headache with fever and neck stiffness',
      implication: 'Meningitis or encephalitis',
      action: 'Empiric antibiotics immediately, LP after CT if indicated',
    },
    {
      finding: 'New headache in patient over 50',
      implication: 'Giant cell arteritis, mass lesion, or other secondary cause',
      action: 'Check ESR/CRP, consider imaging, low threshold for temporal artery biopsy',
    },
    {
      finding: 'Papilledema on fundoscopy',
      implication: 'Increased intracranial pressure (tumor, IIH, CVT)',
      action: 'Urgent imaging, avoid LP until mass ruled out',
    },
    {
      finding: 'Headache with focal neurologic deficits',
      implication: 'Structural lesion, stroke, or other serious pathology',
      action: 'Urgent neuroimaging',
    },
    {
      finding: 'Progressive headache worsening over days-weeks',
      implication: 'Mass lesion, subdural hematoma, or chronic process',
      action: 'Brain imaging (MRI preferred)',
    },
    {
      finding: 'Headache triggered by Valsalva, cough, or exertion',
      implication: 'Chiari malformation, posterior fossa lesion, or CSF leak',
      action: 'MRI of brain and cervical spine',
    },
    {
      finding: 'New headache in immunocompromised patient',
      implication: 'Opportunistic infection, lymphoma, or other secondary cause',
      action: 'Low threshold for imaging and LP',
    },
  ],

  media: [
    {
      id: 'headache-algorithm-flowchart',
      type: 'diagram',
      filename: 'headache-algorithm.svg',
      title: 'Headache Evaluation Algorithm',
      description: 'Flowchart for systematic headache evaluation',
    },
    {
      id: 'headache-red-flags',
      type: 'diagram',
      filename: 'snoop-red-flags.svg',
      title: 'SNOOP4 Red Flags',
      description: 'Visual guide to headache red flags',
    },
  ],

  citations: [
    {
      id: 'ichd-3',
      type: 'article',
      title: 'The International Classification of Headache Disorders, 3rd edition',
      authors: ['Headache Classification Committee of IHS'],
      source: 'Cephalalgia',
      url: 'https://ichd-3.org/',
    },
    {
      id: 'ahs-migraine-treatment-2021',
      type: 'article',
      title: 'The American Headache Society Consensus Statement: Update on integrating new migraine treatments',
      source: 'Headache',
    },
    {
      id: 'ottawa-sah-rule',
      type: 'article',
      title: 'Clinical decision rules to rule out subarachnoid hemorrhage for acute headache',
      authors: ['Perry JJ', 'et al.'],
      source: 'JAMA',
    },
  ],

  crossReferences: [
    { targetId: 'algorithm-syncope', targetType: 'pathway', relationship: 'related', label: 'Syncope Algorithm' },
    { targetId: 'red-flags-neurologic', targetType: 'topic', relationship: 'related', label: 'Neurologic Red Flags' },
    { targetId: 'exam-neurologic', targetType: 'topic', relationship: 'related', label: 'Neurologic Examination' },
  ],

  tags: {
    systems: ['neurologic'],
    topics: ['diagnostic-algorithm', 'emergency-medicine', 'neurology'],
    keywords: ['headache', 'migraine', 'SAH', 'meningitis', 'thunderclap', 'cluster headache', 'tension headache'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency-medicine', 'neurology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default HEADACHE_ALGORITHM;
