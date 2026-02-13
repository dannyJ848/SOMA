/**
 * Epilepsy and Seizures
 *
 * Paroxysmal neuronal hyperexcitability causing recurrent seizures.
 */

import { EducationalContent } from '../types';

export const epilepsyContent: EducationalContent = {
  id: 'neurology-epilepsy',
  type: 'topic',
  name: 'Epilepsy and Seizures',
  alternateNames: ['Seizure Disorder', 'Convulsion', 'Epilepsy Syndrome'],

  levels: {
    1: {
      level: 1,
      summary: "Epilepsy is a condition that causes repeated seizures. A seizure is a sudden burst of electrical activity in the brain that affects how a person acts or feels for a short time.",
      explanation: `## What Is a Seizure?

A seizure is a sudden, uncontrolled electrical disturbance in the brain. It can cause changes in behavior, movements, feelings, and levels of consciousness.

## What Is Epilepsy?

Epilepsy is when you have two or more unprovoked seizures more than 24 hours apart. It's a chronic condition that needs treatment.

## Types of Seizures

**Focal Seizures (Start in One Area):**
- Awareness intact: Strange smells, feelings, deja vu
- Awareness impaired: Confused, automatic movements

**Generalized Seizures (Both Sides of Brain):**
- Absence: Staring, brief (seconds)
- Tonic-clonic (grand mal): Convulsions, loss of consciousness
- Atonic: Muscles go limp, fall
- Myoclonic: Jerks, twitches

## What Seizures Look Like

**During a Seizure:**
- Staring into space
- Confusion
- Falling
- Jerking movements
- Loss of bladder/bowel control
- Biting tongue

**After a Seizure (Postictal):**
- Confusion
- Tiredness
- Headache
- Memory loss

## Triggers

- Missed medication
- Lack of sleep
- Stress
- Alcohol
- Flashing lights (photosensitivity)
- Illness/fever`,

      keyTerms: [
        { term: 'Seizure', definition: 'Sudden burst of abnormal electrical activity in the brain' },
        { term: 'Epilepsy', definition: 'Condition with recurrent, unprovoked seizures' },
        { term: 'Convulsion', definition: 'Rhythmic jerking movements during seizure' },
        { term: 'Postictal', definition: 'Period of confusion and tiredness after a seizure' },
      ],
      analogies: [
        'A seizure is like an electrical storm in the brain.',
        'The brain after a seizure is like a computer after a crash - needs time to restart.',
      ],
      examples: [
        'Child with staring spells (absence seizures)',
        'Teenager who jerks and falls to ground (tonic-clonic)',
        'Person with strange smell before seizure (aura)',
      ],
    },

    2: {
      level: 2,
      summary: 'Epilepsy is defined by two unprovoked seizures >24 hours apart. Classification by seizure type and epilepsy syndrome guides treatment and prognosis.',
      explanation: `## Seizure Classification (ILAE 2017)

**Focal Onset:**
- Aware: Previously called "simple partial"
- Impaired awareness: Previously "complex partial"
- Evolves to bilateral tonic-clonic

**Generalized Onset:**
- Absence (typical, atypical)
- Tonic-clonic
- Myoclonic
- Atonic
- Tonic
- Clonic

**Unknown Onset:**
- Unable to classify (unwitnessed, no EEG)

## Epilepsy Syndromes

**Pediatric:**
- Childhood absence epilepsy (3-12 years)
- Benign Rolandic epilepsy (6-14 years)
- West syndrome (infantile spasms)
- Lennox-Gastaut (multiple seizure types)

**Adult:**
- Temporal lobe epilepsy (most common focal)
- Juvenile myoclonic epilepsy
- Idiopathic generalized epilepsy

## Diagnostic Workup

**EEG (Electroencephalogram):**
- Interictal epileptiform discharges
- Ictal recording (capture seizure)
- Normal EEG does NOT rule out epilepsy

**MRI Brain:**
- Must for focal epilepsy
- Look for structural causes:
  - Hippocampal sclerosis
  - Cortical dysplasia
  - Tumors
  - Vascular malformations

**Lab Evaluation:**
- Electrolytes, glucose
- Toxicology
- Medication levels
- Consider LP if infection suspected`,

      keyTerms: [
        { term: 'Aura', definition: 'Warning sensation before seizure - actually a focal seizure' },
        { term: 'Hippocampal sclerosis', definition: 'Scarring in hippocampus - common cause of temporal lobe epilepsy' },
        { term: 'Ictal', definition: 'During a seizure' },
        { term: 'Interictal', definition: 'Between seizures' },
      ],
      analogies: [
        'An aura is like the calm before the storm - a warning sign.',
        'Interictal spikes on EEG are like footprints showing epilepsy was there.',
      ],
      examples: [
        'Teen with morning myoclonic jerks - JME',
        'Child with 3Hz spike-wave on EEG - absence epilepsy',
        'MRI shows hippocampal sclerosis - mesial temporal lobe epilepsy',
      ],
      clinicalNotes: 'Pseudoseizures (psychogenic nonepileptic seizures) can mimic epilepsy. Video-EEG monitoring often needed for diagnosis. Serum prolactin rises after generalized seizure (not after PNES). Sleep deprivation increases EEG yield.',
    },

    3: {
      level: 3,
      summary: 'Antiseizure medications are first-line therapy. Choice depends on seizure type, side effect profile, and patient factors. Drug-resistant epilepsy may require surgery evaluation.',
      explanation: `## Antiseizure Medications

**First-Line Agents:**

*Focal Seizures:*
- Levetiracetam (Keppra): 500-1500mg BID
- Lamotrigine (Lamictal): 100-200mg daily
- Carbamazepine: 200-400mg TID
- Oxcarbazepine: 600-1200mg daily

*Generalized Seizures:*
- Valproate (Depakote): 10-15mg/kg BID
- Levetiracetam
- Lamotrigine
- Topiramate: 100-200mg daily

**Warnings:**
- Carbamazepine/Oxcarbazepine: Worsens generalized seizures
- Lamotrigine: Stevens-Johnson (slow titration!)
- Valproate: Teratogenic, hepatotoxic

## Drug-Resistant Epilepsy

**Definition:**
- Failure of two appropriately chosen and tolerated ASMs
- Persistent seizures despite adequate trials

**Surgery Evaluation:**
- Video-EEG monitoring
- MRI, possibly PET/SPECT
- Neuropsychological testing
- Wada test (language/memory lateralization)

**Surgical Options:**
- Temporal lobectomy (most successful)
- Lesionectomy (remove tumor/malformation)
- Corpus callosotomy (drop attacks)
- VNS, RNS, DBS (neuromodulation)

## Status Epilepticus

**Definition:**
- Seizure >5 minutes OR
- Three or more seizures in 1 hour

**Treatment:**
1. Benzodiazepine (lorazepam 2-4mg IV)
2. Urgent ASM (fosphenytoin, valproate, levetiracetam)
3. If persistent: anesthetics (midazolam, propofol, pentobarbital)`,

      keyTerms: [
        { term: 'ASM', definition: 'Antiseizure medication' },
        { term: 'Stevens-Johnson', definition: 'Severe skin reaction to medications - life-threatening' },
        { term: 'Wada test', definition: 'Test to determine language and memory dominance in each brain hemisphere' },
        { term: 'Status epilepticus', definition: 'Prolonged seizure or recurrent seizures without recovery' },
      ],
      analogies: [
        "Status epilepticus is like a seizure that won't stop - a true emergency.",
        'The Wada test is like temporarily putting half your brain to sleep to test the other half.',
      ],
      examples: [
        'Patient on carbamazepone develops worsening generalized seizures',
        'Lamotrigine titrated too fast causes SJS',
        'Temporal lobectomy cures 60-70% of properly selected patients',
      ],
      clinicalNotes: 'Therapeutic drug monitoring useful for: phenytoin, valproate, carbamazepine. Not needed for levetiracetam, lamotrigine. Women of childbearing age: avoid valproate, consider folic acid supplementation. Oral contraceptives: enzyme inducers reduce efficacy.',
    },

    4: {
      level: 4,
      summary: 'Epilepsy management requires comprehensive care including medication side effects, counseling on lifestyle factors, and monitoring for comorbidities.',
      explanation: `## Medication Side Effects

**Common Side Effects:**
- Dizziness, drowsiness
- Cognitive slowing
- Tremor, ataxia
- Visual changes (gabapentin, pregabalin)
- Weight changes (valproate gain, topiramate loss)

**Serious:**
- SJS/TEN: Lamotrigine, carbamazepine
- Aplastic anemia: Carbamazepine
- Hepatotoxicity: Valproate
- Bone marrow suppression: Felbamate

**Idiosyncratic:**
- Rash: Many ASMs
- Psychiatric: Levetiracetam (mood changes)
- Kidney stones: Topiramate, zonisamide

## Lifestyle Considerations

**Driving:**
- Laws vary by state
- Typically: seizure-free 6-12 months
- Physician reporting requirement varies

**Safety Precautions:**
- Shower not bath (drowning risk)
- Swimming with buddy
- Helmets for biking
- Height restrictions

**Contraception:**
- Enzyme inducers reduce OCP efficacy
- Need higher-dose or alternative contraception
- Valproate contraindicated in pregnancy

## Special Populations

**Elderly:**
- Lower starting doses
- Slower titration
- Drug interactions common
- Fall risk

**Women:**
- Catamenial epilepsy (seizures around menses)
- Pregnancy: Continue ASM if needed
- Breastfeeding: Most ASMs compatible
- Teratogenic risks: Valproate > Phenobarbital > others

**Comorbidities:**
- Depression (30%)
- Anxiety
- Cognitive impairment
- Sleep disorders
- SUDEP (sudden unexpected death in epilepsy)`,

      keyTerms: [
        { term: 'Catamenial epilepsy', definition: 'Seizures clustered around menstrual period due to hormonal changes' },
        { term: 'SUDEP', definition: 'Sudden Unexpected Death in Epilepsy Patients' },
        { term: 'OCP', definition: 'Oral contraceptive pill - birth control' },
        { term: 'Teratogenic', definition: 'Causes birth defects if taken during pregnancy' },
      ],
      analogies: [
        'Catamenial epilepsy is like seizures triggered by hormonal tides.',
        'SUDEP is like the heart stopping for no clear reason - rare but tragic.',
      ],
      examples: [
        'Woman with seizures around her period - catamenial epilepsy',
        'Patient on levetiracetam develops depression and anger',
        'Planning pregnancy: ASM changed from valproate to lamotrigine',
      ],
      clinicalNotes: 'SUDEP risk: 1/1000 patient-years. Higher risk: uncontrolled generalized tonic-clonic seizures, night seizures, missed medications. Reduce risk: seizure control, night supervision, compliance aids. Discuss with patients and families.',
    },

    5: {
      level: 5,
      summary: 'Epilepsy surgery offers cure potential for drug-resistant focal epilepsy. Neuromodulation provides palliative benefit for non-surgical candidates.',
      explanation: `## Surgical Epilepsy

**Preoperative Evaluation:**
- Phase I: Noninvasive
  - Video-EEG monitoring
  - High-resolution MRI (epilepsy protocol)
  - PET, SPECT, ictal SPECT
  - Neuropsychological testing
- Phase II: Invasive (if needed)
  - Subdural grids
  - Stereo-EEG (SEEG)

**Surgical Outcomes:**
- Mesial temporal sclerosis: 60-70% seizure-free
- Lesional: 50-80% depending on pathology
- Nonlesional: 20-40% seizure-free

**Neuromodulation:**
- VNS (Vagus Nerve Stimulator): 40-50% responder rate
- RNS (Responsive Neurostimulation): Similar efficacy
- DBS (Deep Brain Stimulation): Thalamic target

## Newer Therapies

**Dietary Therapies:**
- Ketogenic diet (children)
- Modified Atkins diet
- Low glycemic index treatment
- Mechanism: ketones inhibit seizures

**Cannabidiol (Epidiolex):**
- FDA-approved for:
  - Lennox-Gastaut syndrome
  - Dravet syndrome
- Does NOT cause euphoria (non-psychoactive)

## Withdrawal and Prognosis

**ASM Withdrawal:**
- Seizure-free 2+ years
- Taper slowly (months)
- Higher recurrence if:
  - Abnormal EEG
  - Structural lesion
  - Longer epilepsy duration

**Prognostic Factors:**
- Good: Idiopathic generalized, childhood absence
- Poor: Structural, hippocampal sclerosis, focal cortical dysplasia`,

      keyTerms: [
        { term: 'Stereo-EEG', definition: 'Minimally invasive EEG electrodes placed deep in brain' },
        { term: 'Ketogenic diet', definition: 'High-fat, low-carb diet that creates ketones to control seizures' },
        { term: 'Cannabidiol', definition: 'CBD - non-psychoactive component of marijuana for seizures' },
        { term: 'Hippocampal sclerosis', definition: 'Scarring in hippocampus causing intractable temporal lobe epilepsy' },
      ],
      analogies: [
        'SEEG is like planting listening devices deep in the brain to find where seizures start.',
        'The ketogenic diet is like changing brain fuel to something less seizure-prone.',
      ],
      examples: [
        'Patient with hippocampal sclerosis has temporal lobectomy, seizure-free',
        'Child with Lennox-Gastaut started on cannabidiol',
        'Adult with drug-resistant epilepsy gets VNS implant',
      ],
      clinicalNotes: 'Presurgical evaluation can identify seizure onset zone even when MRI is negative. PET shows hypometabolism in seizure focus. Ictal SPECT shows hyperperfusion. 70% of patients with normal MRI have focal findings on PET/SPECT. Referral for surgery evaluation should occur early, not after decades of failed medications.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['neurology', 'epilepsy', 'seizure', 'ASM', 'neurosurgery'],
    systems: ['nervous'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['neurology'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
