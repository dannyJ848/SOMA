/**
 * Parkinson Disease
 *
 * Progressive neurodegenerative disorder causing movement impairment.
 */

import { EducationalContent } from '../types';

export const parkinsonsContent: EducationalContent = {
  id: 'neurology-parkinsons',
  type: 'topic',
  name: 'Parkinson Disease',
  alternateNames: ['PD', 'Paralysis Agitans', 'Parkinsonism'],

  levels: {
    1: {
      level: 1,
      summary: "Parkinson disease is a brain disorder that causes uncontrollable movements, shaking, and problems with balance and coordination. It happens when nerve cells in the brain that control movement are damaged.",
      explanation: `## What Is Parkinson Disease?

Parkinson disease is a condition that affects movement. It happens when certain brain cells (neurons) gradually break down or die.

## Main Symptoms

**Tremor:**
- Shaking, usually in hands
- "Pill-rolling" tremor
- Happens at rest, improves with movement

**Bradykinesia:**
- Slow movement
- Trouble starting movements
- Freezing in place

**Rigidity:**
- Stiff muscles
- Arms don't swing when walking
- Muscle aches

**Postural Instability:**
- Balance problems
- Falls
- Stooped posture

**Other Symptoms:**
- Small, cramped handwriting
- Soft speech
- Blank facial expression
- Walking problems (shuffling)
- Sleep problems
- Depression, anxiety

## Who Gets It?

- Usually age 60+
- Men more than women
- Sometimes runs in families
- Exposure to certain chemicals may increase risk

## Treatment

- Medications to replace dopamine
- Physical therapy
- Occupational therapy
- Speech therapy
- Exercise
- Healthy diet`,

      keyTerms: [
        { term: 'Dopamine', definition: 'Brain chemical that helps control movement' },
        { term: 'Tremor', definition: 'Rhythmic shaking movement' },
        { term: 'Bradykinesia', definition: 'Slowness of movement' },
        { term: 'Rigidity', definition: 'Stiffness or inflexibility of muscles' },
      ],
      analogies: [
        'Dopamine is like the oil that keeps the engine running smoothly.',
        'Bradykinesia is like moving through molasses - everything is slow.',
      ],
      examples: [
        'Elderly man with shaking hands while resting',
        'Person who shuffles when walking and has no arm swing',
        'Someone with soft voice and blank facial expression',
      ],
    },

    2: {
      level: 2,
      summary: 'Parkinson disease is a progressive neurodegenerative disorder characterized by resting tremor, bradykinesia, rigidity, and postural instability. Caused by loss of dopaminergic neurons in substantia nigra.',
      explanation: `## Pathophysiology

**Dopaminergic Neuron Loss:**
- Substantia nigra pars compacta
- Striatal dopamine deficiency
- Imbalance: direct vs indirect pathways
- Results in bradykinesia, rigidity

**Lewy Bodies:**
- Intracellular inclusions
- Alpha-synuclein aggregates
- Pathologic hallmark of PD

**Causes:**
- Idiopathic (most cases)
- Genetic (10-15%): SNCA, LRRK2, Parkin, PINK1
- Secondary: drugs (MPTP, antipsychotics), vascular, toxins

## Clinical Features

**Motor Symptoms (TRAP):**
- **T**remor: 4-6Hz resting, pill-rolling
- **R**igidity: Lead-pipe or cogwheel
- **A**kinesia/Bradykinesia: Most disabling
- **P**ostural instability: Late finding, falls

**Non-Motor Symptoms:**
- Hyposmia (reduced smell)
- REM sleep behavior disorder
- Constipation
- Depression, anxiety
- Cognitive impairment
- Orthostatic hypotension

## Differential Diagnosis

**Parkinson Plus Syndromes:**
- MSA: Multiple system atrophy
- PSP: Progressive supranuclear palsy
- CBD: Corticobasilar degeneration
- DLB: Dementia with Lewy bodies

**Essential Tremor:**
- Action tremor (not resting)
- No bradykinesia/rigidity
- Family history common
- Alcohol responsive`,

      keyTerms: [
        { term: 'Substantia nigra', definition: 'Area in brain that produces dopamine - degenerates in PD' },
        { term: 'Lewy bodies', definition: 'Abnormal protein deposits found in brains of PD patients' },
        { term: 'Alpha-synuclein', definition: 'Protein that accumulates in PD causing Lewy bodies' },
        { term: 'Hyposmia', definition: 'Reduced sense of smell - early PD sign' },
      ],
      analogies: [
        'The substantia nigra is like the factory that makes dopamine - in PD it shuts down.',
        'Lewy bodies are like trash piles that accumulate inside brain cells.',
      ],
      examples: [
        'Patient with resting tremor, bradykinesia, and rigidity diagnosed with PD',
        'Person with action tremor only - essential tremor, not PD',
        'Patient with falls early and vertical gaze palsy - PSP',
      ],
      clinicalNotes: 'Clinical diagnosis based on UK Brain Bank criteria. Asymmetric onset supports diagnosis. DaTscan can help distinguish PD from essential tremor but not from atypical parkinsonism. Consider PD when ≥2 of: resting tremor, bradykinesia, rigidity, postural instability.',
    },

    3: {
      level: 3,
      summary: 'Dopamine replacement is mainstay of PD treatment. Levodopa is most effective but causes motor complications over time. Dopamine agonists have different side effect profile.',
      explanation: `## Pharmacologic Treatment

**Levodopa (Gold Standard):**
- Combined with carbidopa (Sinemet)
- Carbidopa prevents peripheral breakdown
- Most effective symptomatic treatment
- Dosing: 25/100mg tablets, TID-QID
- Side effects: Nausea, orthostasis, hallucinations

**Motor Complications:**
- Wearing off: Shorter duration of effect
- Dyskinesias: Involuntary movements
- On-off fluctuations: Unpredictable responses
- Occur in 50% after 5 years

**Dopamine Agonists:**
- Pramipexole, ropinirole, rotigotine
- Longer half-life than levodopa
- Less motor fluctuations initially
- Side effects: Sleep attacks, hallucinations, impulse control disorders
- Used alone in younger patients to delay levodopa

**MAO-B Inhibitors:**
- Selegiline, rasagiline, safinamide
- Mild symptomatic benefit
- Possible disease-modifying effect
- Used as adjunct

**COMT Inhibitors:**
- Entacapone, opicapone, tolcapone
- Prolong levodopa effect
- Used for wearing off
- Diarrhea, orange urine

**Anticholinergics:**
- Benztropine, trihexyphenidyl
- Help tremor
- Side effects: confusion, hallucinations, urinary retention
- Avoid in elderly`,

      keyTerms: [
        { term: 'Wearing off', definition: 'Medication effect shortens, symptoms return before next dose' },
        { term: 'Dyskinesia', definition: 'Involuntary, writhing movements from levodopa' },
        { term: 'MAO-B', definition: 'Enzyme that breaks down dopamine - inhibiting prolongs effect' },
        { term: 'COMT', definition: 'Enzyme that breaks down levodopa - inhibiting prolongs effect' },
      ],
      analogies: [
        'Wearing off is like a car running out of gas faster than it used to.',
        "Dyskinesia is like your body has a mind of its own and won't stop moving.",
      ],
      examples: [
        'Patient on Sinemet develops dyskinesias after 7 years',
        'Young PD patient started on pramipexole to delay levodopa',
        'Elderly patient develops hallucinations on dopamine agonist',
      ],
      clinicalNotes: 'Protein can interfere with levodopa absorption. Take on empty stomach. Avoid high-protein meals with dose. Long-acting formulations (Sinemet CR, Rytary) for smoothing effect. Consider levodopa-carbidopa intestinal gel (Duopa) for advanced refractory PD.',
    },

    4: {
      level: 4,
      summary: 'PD progresses through Hoehn and Yahr stages. Non-motor symptoms dominate later disease. Advanced treatments include DBS, infusion therapies, and device-aided therapies.',
      explanation: `## Disease Progression

**Hoehn and Yahr Staging:**
- Stage 1: Unilateral involvement
- Stage 2: Bilateral, no balance impairment
- Stage 3: Balance impairment, mild disability
- Stage 4: Severe disability, still able to stand
- Stage 5: Wheelchair or bedbound

**Non-Motor Symptom Management:**
- Cognitive: Cholinesterase inhibitors (rivastigmine)
- Psychosis: Pimavanserin (Nuplazid), quetiapine
- Depression: SSRIs
- Orthostasis: Midodrine, fludrocortisone, compression stockings
- Constipation: Fiber, hydration, laxatives
- Sleep: Melatonin, clonazepam for RBD
- Drooling: Glycopyrrolate, atropine drops

## Surgical Therapy

**Deep Brain Stimulation (DBS):**
- Targets: STN, GPi, VIM
- Indications:
  - Motor complications despite optimized meds
  - Responsive to levodopa
  - No significant dementia
  - medically fit for surgery
- Improves: Motor fluctuations, dyskinesias, tremor
- Does NOT improve: Axial symptoms, speech, balance

**Device-Aided Therapies:**
- LCGIG: Levodopa-carbidopa intestinal gel
- FSO: Subcutaneous apomorphine infusion
- DBS: Most established option

## Advanced Considerations

**Impulse Control Disorders:**
- Pathologic gambling
- Hypersexuality
- compulsive shopping/eating
- Associated with dopamine agonists
- Dose reduction or discontinuation needed

**Psychosis:**
- Visual hallucinations common
- Delusions less common
- First: Remove anticholinergics, amantadine
- Then: Reduce dopamine agonist
- Pimavanserin for persistent psychosis`,

      keyTerms: [
        { term: 'DBS', definition: 'Deep Brain Stimulation - implanted device to modulate brain circuits' },
        { term: 'STN', definition: 'Subthalamic nucleus - common DBS target for PD' },
        { term: 'GPi', definition: 'Globus pallidus internus - DBS target' },
        { term: 'Pimavanserin', definition: 'Antipsychotic specifically for PD psychosis without worsening motor symptoms' },
      ],
      analogies: [
        'DBS is like a pacemaker for the brain.',
        'Impulse control disorders are like losing the brakes on your behaviors.',
      ],
      examples: [
        'Patient with motor fluctuations gets STN DBS',
        'Person with compulsive gambling on pramipexole - medication changed',
        'PD patient with hallucinations - pimavanserin prescribed',
      ],
      clinicalNotes: 'UPDRS (Unified Parkinson Disease Rating Scale) measures disease severity. Higher scores = worse. Used to track progression and treatment response. Cognitive decline is a major determinant of quality of life and nursing home placement.',
    },

    5: {
      level: 5,
      summary: 'Parkinson disease is progressive with no cure. Treatment focuses on symptom management and maintaining quality of life. Disease-modifying therapies remain an unmet need.',
      explanation: `## Prodromal Parkinson Disease

**Early Signs (Years Before Diagnosis):**
- Hyposmia (reduced smell)
- REM sleep behavior disorder (acting out dreams)
- Constipation
- Depression, anxiety
- Orthostatic hypotension

**Risk of Conversion:**
- RBD: 50-80% develop synucleinopathy in 10-15 years
- Hyposmia: Increased risk
- Combined markers: Higher risk

## Emerging Therapies

**Disease Modification:**
- No proven disease-modifying therapy yet
- Agents under investigation:
  - Alpha-synuclein immunotherapy
  - GLP-1 agonists (exenatide, lixisenatide)
  - Agents targeting mitochondrial function

**Novel Therapeutics:**
- Inhaled levodopa (Inbrija) for off episodes
- Subcutaneous levodopa (Fesema) - under development
- Adenosine A2A antagonist (istradefylline) - adjunct

## Genetics and PD

**Monogenic Forms:**
- SNCA (alpha-synuclein): Autosomal dominant
- LRRK2: Most common genetic PD (variable penetrance)
- Parkin, PINK1, DJ-1: Autosomal recessive, young onset
- GBA: Glucocerebrosidase mutation increases risk

**Genetic Testing:**
- Consider young onset (<50) or strong family history
- Implications for prognosis, family planning
- LRRK2: Typical PD course
- GBA: Faster progression, more cognitive decline

## Palliative Care

**Early Integration:**
- Advance care planning
- Goals of care discussions
- Symptom management
- Caregiver support

**End-of-Life Considerations:**
- Palliative feeding for dysphagia
- Hospice appropriate for advanced PD
- Focus on comfort, dignity`,

      keyTerms: [
        { term: 'Prodromal', definition: 'Early stage of disease before typical symptoms appear' },
        { term: 'RBD', definition: 'REM sleep behavior disorder - acting out dreams, early PD sign' },
        { term: 'Monogenic', definition: 'Caused by mutation in single gene' },
        { term: 'GLP-1', definition: 'Glucagon-like peptide-1 - diabetes drugs being tested for PD' },
      ],
      analogies: [
        "Prodromal PD is like the movie trailers before the main feature - hints of what's coming.",
        'Genetic forms are like reading the script ahead of time - you know the plot.',
      ],
      examples: [
        'Patient with RBD develops PD 8 years later',
        'Young onset PD patient found to have Parkin mutation',
        'GLP-1 agonist trial shows possible disease-modifying effect',
      ],
      clinicalNotes: 'PD is associated with reduced life expectancy. Most common cause of death: pneumonia, cardiovascular disease. Fall prevention, fracture risk assessment important. Bone density monitoring and treatment of osteoporosis recommended. Regular exercise may slow progression.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['neurology', 'parkinsons', 'movement-disorders', 'dopamine', 'neurodegenerative'],
    systems: ['nervous'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['neurology'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
