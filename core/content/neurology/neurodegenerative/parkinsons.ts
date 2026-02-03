/**
 * Parkinson Disease - In-Depth Neurology Content
 *
 * Comprehensive coverage of Parkinson disease pathophysiology, clinical features,
 * pharmacotherapy, surgical interventions, and emerging therapies.
 */

import { EducationalContent } from '../../types';

export const parkinsonsDepthContent: EducationalContent = {
  id: 'neuro-parkinsons-depth',
  type: 'condition',
  name: 'Parkinson Disease',
  nameEs: 'Enfermedad de Parkinson',
  alternateNames: ['PD', 'Paralysis Agitans', 'Parkinsonism'],
  hpoId: 'HP:0001300',

  levels: {
    1: {
      level: 1,
      summary:
        'Parkinson disease is a brain condition that causes shaking, stiffness, and difficulty with walking and balance, getting worse slowly over time.',
      explanation: `## What Is Parkinson Disease?

Parkinson disease is a condition where nerve cells in a part of the brain that controls movement slowly die. As these cells die, the brain makes less of a chemical called dopamine, which is needed for smooth, controlled movement.

## Main Symptoms

**Motor (Movement) Symptoms:**
- **Tremor**: Shaking, usually starting in one hand at rest (like rolling a pill between your fingers)
- **Stiffness (Rigidity)**: Muscles feel tight and hard to move
- **Slowness (Bradykinesia)**: Movements become slow and small
- **Balance problems**: Difficulty keeping balance; risk of falling

**Non-Motor Symptoms (often appear first):**
- Loss of smell
- Constipation
- Sleep problems (acting out dreams)
- Depression or anxiety
- Trouble sleeping

## Who Gets Parkinson Disease?

- Usually starts after age 60 (average age 62)
- Men are 1.5 times more likely to develop it than women
- Affects about 1 million people in the United States
- Exact cause unknown for most people
- Small percentage is genetic (runs in families)

## How It Is Treated

- **Medications**: Replace or mimic dopamine to improve movement
  - Carbidopa-levodopa is the most effective medicine
- **Exercise**: Regular physical activity helps maintain mobility and balance
- **Surgery**: Deep brain stimulation (DBS) can help control symptoms in some patients
- **Therapy**: Physical, occupational, and speech therapy

## Living with Parkinson Disease

- Symptoms progress slowly over many years
- Most people live for decades after diagnosis
- Staying active is one of the most important things you can do
- A team of doctors, therapists, and caregivers provides the best care`,

      keyTerms: [
        { term: 'Parkinson disease', definition: 'A brain disease that causes tremor, stiffness, and slow movement due to loss of dopamine-producing brain cells' },
        { term: 'dopamine', definition: 'A brain chemical needed for smooth, controlled movement', pronunciation: 'DOH-pah-meen' },
        { term: 'tremor', definition: 'Involuntary shaking, usually in the hands' },
        { term: 'deep brain stimulation', definition: 'A surgery where a small device sends electrical signals to the brain to reduce symptoms' },
      ],
      analogies: [
        'Dopamine is like oil in a machine - without enough of it, movements become stiff and jerky.',
        'Parkinson tremor is like a car idling roughly - it shakes at rest but smooths out when you start driving (moving purposefully).',
        'Deep brain stimulation is like a pacemaker for the brain, helping to regulate movement signals.',
      ],
      examples: [
        'A man notices his right hand shaking when he sits still, and his wife says he walks more slowly than before.',
        'A woman with Parkinson finds it hard to button her shirt because her fingers are stiff and slow.',
        'A grandfather with Parkinson starts an exercise program and notices his balance and walking improve.',
      ],
      patientCounselingPoints: [
        'Exercise is one of the best things you can do - aim for at least 30 minutes most days.',
        'Take your medications on time, especially levodopa, which works best on a schedule.',
        'Tell your doctor about non-movement symptoms like depression, sleep problems, or constipation.',
        'Fall prevention is important - remove tripping hazards and use assistive devices if needed.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Parkinson disease is a progressive neurodegenerative disorder characterized by loss of dopaminergic neurons in the substantia nigra pars compacta, presenting with asymmetric resting tremor, rigidity, bradykinesia, and postural instability.',
      explanation: `## Pathology

- Loss of dopaminergic neurons in the substantia nigra pars compacta (SNpc)
- Lewy bodies: Intracytoplasmic inclusions of alpha-synuclein protein
- >60-80% of dopaminergic neurons lost before motor symptoms appear
- Pathology spreads from brainstem to cortex (Braak staging)

## Cardinal Motor Features (TRAP)

**T - Tremor (70% at onset):**
- Resting tremor (4-6 Hz) - "pill-rolling"
- Asymmetric onset (one hand)
- Diminishes with action
- Re-emergent tremor: Returns after maintaining a posture

**R - Rigidity:**
- Cogwheel rigidity (ratchety feel with passive movement)
- Lead-pipe rigidity (constant resistance)
- Activated by contralateral movement (Froment maneuver)

**A - Akinesia/Bradykinesia:**
- Slowness and smallness of movement (required for diagnosis)
- Micrographia (small handwriting)
- Hypomimia (masked facies, reduced facial expression)
- Reduced arm swing when walking
- Difficulty initiating movement (freezing)

**P - Postural Instability:**
- Usually a later feature
- Pull test: Retropulsion with inability to recover
- Increased fall risk

## Non-Motor Symptoms

**Prodromal (years before motor symptoms):**
- Hyposmia/anosmia (90%)
- REM sleep behavior disorder (RBD) - acting out dreams
- Constipation
- Depression/anxiety

**During Disease Course:**
- Cognitive impairment (eventually dementia in 50-80%)
- Autonomic dysfunction: Orthostatic hypotension, urinary dysfunction
- Psychosis: Visual hallucinations (often medication-related)
- Pain and fatigue
- Sialorrhea (drooling from reduced swallowing)

## Diagnosis

- **Clinical diagnosis**: Bradykinesia + at least one of tremor or rigidity
- **UK Brain Bank Criteria**: Most commonly used
- **MDS Clinical Diagnostic Criteria**: More comprehensive
- **DaTscan (I-123 ioflupane SPECT)**: Shows reduced dopamine transporter uptake in striatum
  - Distinguishes PD from essential tremor (normal DaTscan)
  - Cannot distinguish PD from other parkinsonian syndromes (MSA, PSP)
- **MRI**: Usually normal; used to exclude structural causes

## Differential Diagnosis

- Essential tremor: Action/postural tremor, bilateral, family history, alcohol-responsive
- Drug-induced parkinsonism: Dopamine blockers (antipsychotics, metoclopramide)
- Vascular parkinsonism: Lower body predominant, gait freezing, vascular risk factors
- Atypical parkinsonisms: MSA, PSP, CBD, DLB (poor levodopa response, red flags)`,

      keyTerms: [
        { term: 'substantia nigra', definition: 'Brain region containing dopamine-producing neurons that degenerate in Parkinson disease', pronunciation: 'sub-STAN-shee-ah NY-grah' },
        { term: 'Lewy bodies', definition: 'Abnormal clumps of alpha-synuclein protein found in brain cells in Parkinson disease' },
        { term: 'bradykinesia', definition: 'Slowness of movement - the hallmark motor feature required for PD diagnosis', pronunciation: 'brad-ee-kih-NEE-zhah' },
        { term: 'DaTscan', definition: 'Nuclear imaging test that shows loss of dopamine transporters in the brain' },
        { term: 'REM sleep behavior disorder', definition: 'Acting out dreams during sleep, often a precursor to Parkinson disease' },
      ],
      analogies: [
        'The substantia nigra is like a factory that makes dopamine - in Parkinson disease, the factory slowly shuts down.',
        'Cogwheel rigidity feels like turning a stiff gear - it clicks and catches as you move the joint.',
        'Lewy bodies are like protein garbage that accumulates inside brain cells, eventually causing them to malfunction and die.',
      ],
      examples: [
        'A 65-year-old man with a 2-year history of right hand resting tremor, shuffling gait, and reduced facial expression - classic Parkinson disease.',
        'A woman reports her husband has been punching and kicking in his sleep for 5 years; he now develops a left hand tremor - RBD preceding PD.',
        'A patient on metoclopramide for nausea develops bilateral parkinsonism - drug-induced parkinsonism (will improve with discontinuation).',
      ],
    },

    3: {
      level: 3,
      summary:
        'Parkinson disease treatment is centered on dopaminergic pharmacotherapy with levodopa as the gold standard, supplemented by dopamine agonists, MAO-B inhibitors, and COMT inhibitors to manage motor fluctuations.',
      explanation: `## Pharmacotherapy

**Levodopa (Gold Standard):**
- Always given with carbidopa (peripheral decarboxylase inhibitor)
- Formulations: Immediate-release (Sinemet), controlled-release (Sinemet CR), extended-release (Rytary), enteral gel (Duopa)
- Most effective medication for motor symptoms
- Starting dose: 25/100 mg TID, titrate to effect
- Long-term complications:
  - *Motor fluctuations*: Wearing off (end-of-dose deterioration), on-off phenomena
  - *Dyskinesias*: Involuntary movements (peak-dose choreiform movements)
  - Typically develop after 5-10 years of use

**Dopamine Agonists:**
- Pramipexole (Mirapex), ropinirole (Requip), rotigotine (Neupro patch)
- Less motor fluctuations/dyskinesia risk than levodopa
- Side effects: Impulse control disorders (gambling, hypersexuality, compulsive shopping), somnolence, hallucinations, peripheral edema
- Often used in younger patients (<60) to delay levodopa complications

**MAO-B Inhibitors:**
- Rasagiline (Azilect), selegiline (Eldepryl), safinamide (Xadago)
- Block dopamine metabolism, increasing dopamine availability
- Mild symptomatic benefit; may be used as monotherapy in early disease
- Useful add-on to reduce off time

**COMT Inhibitors:**
- Entacapone (Comtan), opicapone (Ongentys)
- Block peripheral levodopa metabolism, prolonging its effect
- Combination pill: Carbidopa/levodopa/entacapone (Stalevo)
- Used for motor fluctuations (reduce off time)
- Tolcapone: More effective but hepatotoxic (requires LFT monitoring)

**Amantadine:**
- NMDA receptor antagonist; weak dopaminergic effects
- Main use: Reduce levodopa-induced dyskinesias
- Extended-release formulation (Gocovri): FDA-approved for dyskinesia

**Anticholinergics:**
- Trihexyphenidyl, benztropine
- Primarily for tremor in younger patients
- Limited use due to cognitive side effects (avoid in elderly)

## Managing Motor Complications

**Wearing Off:**
1. Increase levodopa frequency (smaller doses more often)
2. Add COMT inhibitor (entacapone, opicapone)
3. Add MAO-B inhibitor
4. Switch to controlled/extended-release formulations
5. Add dopamine agonist

**Dyskinesia:**
1. Reduce individual levodopa dose (increase frequency to compensate)
2. Add amantadine (Gocovri)
3. Consider continuous dopaminergic stimulation (pump or DBS)

**Psychosis:**
- Pimozide, quetiapine are traditional options
- Pimavanserin (Nuplazid): 5-HT2A inverse agonist, FDA-approved for PD psychosis
- Clozapine: Most effective but requires monitoring for agranulocytosis

## Non-Motor Symptom Management

- **Depression**: SSRIs, SNRIs; pramipexole has antidepressant effects
- **Dementia**: Rivastigmine (only cholinesterase inhibitor with PD-dementia approval)
- **Orthostatic hypotension**: Fludrocortisone, midodrine, droxidopa (Northera)
- **Constipation**: Fiber, MiraLAX, lubiprostone
- **Sialorrhea**: Glycopyrrolate, botulinum toxin to salivary glands

## Hoehn and Yahr Staging

| Stage | Description |
|-------|-------------|
| 1 | Unilateral involvement only |
| 2 | Bilateral involvement, no impairment of balance |
| 3 | Bilateral with postural instability; physically independent |
| 4 | Severe disability; able to walk/stand unassisted |
| 5 | Wheelchair-bound or bedridden without assistance |`,

      keyTerms: [
        { term: 'levodopa', definition: 'Dopamine precursor; most effective medication for Parkinson motor symptoms', pronunciation: 'LEE-voh-DOH-pah' },
        { term: 'wearing off', definition: 'End-of-dose deterioration where symptoms return before the next levodopa dose is due' },
        { term: 'dyskinesia', definition: 'Involuntary movements (typically choreiform) caused by dopaminergic medication', pronunciation: 'dis-kih-NEE-zhah' },
        { term: 'impulse control disorder', definition: 'Compulsive behaviors (gambling, shopping, hypersexuality) caused by dopamine agonists' },
        { term: 'pimavanserin', definition: 'Selective 5-HT2A inverse agonist approved for Parkinson disease psychosis' },
        { term: 'MAO-B inhibitor', definition: 'Drug that blocks monoamine oxidase B, reducing dopamine breakdown in the brain' },
      ],
      clinicalNotes:
        'Levodopa remains the most effective therapy. Motor fluctuations are inevitable with long-term use - manage with dose fractionation, COMT/MAO-B inhibitors, and eventually consider DBS. Always ask about impulse control disorders in patients on dopamine agonists. Pimavanserin is first-line for PD psychosis.',
    },

    4: {
      level: 4,
      summary:
        'Advanced Parkinson disease management includes deep brain stimulation, continuous drug delivery systems, management of levodopa-resistant symptoms, and recognition of atypical parkinsonian syndromes.',
      explanation: `## Deep Brain Stimulation (DBS)

**Targets:**
- Subthalamic nucleus (STN): Most common; reduces motor symptoms and allows medication reduction
- Globus pallidus interna (GPi): Comparable motor benefit; better for dyskinesia, less medication reduction
- Ventral intermediate nucleus (VIM) of thalamus: Tremor only (less used in PD)

**Patient Selection:**
- Definite PD (good levodopa response is the best predictor of DBS success)
- Disabling motor fluctuations or tremor despite optimized medication
- No significant cognitive impairment (MMSE >24, no dementia)
- No active psychiatric disease
- Realistic expectations
- Age: No strict cutoff, but >70-75 generally less favorable

**Outcomes:**
- 50-60% improvement in off-time motor scores
- 1-3 hour reduction in off time per day
- Significant reduction in dyskinesia (especially STN)
- Medication reduction: 30-50% (STN)
- Does NOT improve: Levodopa-unresponsive symptoms (freezing, falls, speech, cognition)

**Complications:**
- Surgical: Hemorrhage (1-2%), infection (3-5%), lead migration
- Stimulation-related: Dysarthria, paresthesias, mood changes, weight gain
- Hardware: Battery replacement every 3-5 years (rechargeable last longer)

## Continuous Drug Delivery

**Levodopa-Carbidopa Intestinal Gel (Duopa/Duodopa):**
- Continuous infusion via PEG-J tube into jejunum
- Bypasses erratic gastric emptying
- Reduces off time by ~2 hours/day
- Complications: Tube dislocation, peritonitis, neuropathy (B12/folate monitor)

**Subcutaneous Apomorphine:**
- Continuous infusion pump (outside US) or rescue pen (Apokyn)
- Potent dopamine agonist for rescue during off periods
- Requires pretreatment with trimethobenzamide (antiemetic)
- Foslevodopa/foscarbidopa (Vyalev): Subcutaneous levodopa infusion

## Atypical Parkinsonian Syndromes (Red Flags)

**Multiple System Atrophy (MSA):**
- Parkinsonism + severe autonomic failure (MSA-P) or cerebellar ataxia (MSA-C)
- Rapid progression, poor levodopa response
- MRI: Hot cross bun sign (pons), putaminal rim sign
- Median survival: 6-9 years from onset

**Progressive Supranuclear Palsy (PSP):**
- Early falls (typically backward), vertical supranuclear gaze palsy
- Frontal cognitive syndrome, pseudobulbar affect
- Poor levodopa response
- MRI: Hummingbird sign (midbrain atrophy)
- Median survival: 5-8 years

**Corticobasal Degeneration (CBD):**
- Asymmetric parkinsonism with cortical signs
- Alien limb phenomenon, apraxia, cortical sensory loss, myoclonus
- May present as corticobasal syndrome or progressive aphasia

**Dementia with Lewy Bodies (DLB):**
- Dementia within 1 year of motor symptoms (vs PD dementia: motor first)
- Fluctuating cognition, visual hallucinations, RBD
- Severe neuroleptic sensitivity
- DaTscan positive (distinguishes from AD)

## Levodopa-Resistant Symptoms (Major Challenges)

- Freezing of gait: Cueing strategies (laser pointer, metronome), exercise
- Falls: Multifactorial; balance training, home safety assessment
- Speech: Lee Silverman Voice Treatment (LSVT LOUD)
- Dysphagia: Speech pathology, modified diet, eventual PEG consideration
- Cognitive decline: Rivastigmine; limited benefit
- Autonomic dysfunction: Droxidopa, fludrocortisone for OH; botulinum toxin for sialorrhea`,

      keyTerms: [
        { term: 'deep brain stimulation', definition: 'Surgical implantation of electrodes delivering electrical impulses to specific brain targets to modulate circuit dysfunction' },
        { term: 'subthalamic nucleus', definition: 'Most common DBS target for PD; part of basal ganglia circuitry controlling movement', pronunciation: 'sub-thal-AM-ik' },
        { term: 'MSA', definition: 'Multiple System Atrophy - atypical parkinsonism with severe autonomic failure or cerebellar ataxia' },
        { term: 'PSP', definition: 'Progressive Supranuclear Palsy - atypical parkinsonism with early falls and vertical gaze palsy' },
        { term: 'LSVT LOUD', definition: 'Lee Silverman Voice Treatment - evidence-based speech therapy for Parkinson hypophonia' },
      ],
      clinicalNotes:
        'The best predictor of DBS success is a robust levodopa response. DBS does not improve levodopa-unresponsive symptoms. Red flags for atypical parkinsonism: early falls, rapid progression, poor levodopa response, severe autonomic failure, vertical gaze palsy, alien limb. DLB patients are extremely sensitive to antipsychotics - avoid typical antipsychotics.',
    },

    5: {
      level: 5,
      summary:
        'Frontier Parkinson research encompasses alpha-synuclein-targeting therapies, genetic and prodromal approaches, adaptive DBS, GLP-1 agonist neuroprotection trials, and precision medicine based on molecular subtyping.',
      explanation: `## Disease-Modifying Therapy Pipeline

**Alpha-Synuclein-Targeting Therapies:**
- *Immunotherapy*: Prasinezumab (PRX002/RO7046015) - anti-alpha-synuclein antibody
  - PASADENA trial: Some signal on motor progression in certain subgroups
  - PADOVA trial: Phase 2b ongoing
- *ASO (Antisense Oligonucleotides)*: Reduce SNCA expression
  - ION464: Intrathecal delivery, targeting SNCA mRNA
- *Small molecule inhibitors*: Prevent alpha-synuclein aggregation
  - Anle138b, UCB0599: Phase 2 trials
- *Vaccines*: Active immunization against alpha-synuclein (AFF1, UB-312)

**GLP-1 Receptor Agonists:**
- Exenatide: EXENATIDE-PD Phase 2 showed sustained motor improvement off medication
- Lixisenatide: LixiPark Phase 2 showed motor benefit at 12 months
- Semaglutide: Large Phase 3 trial (>1000 patients) initiated
- Mechanism: Anti-inflammatory, neurotrophic, insulin signaling restoration

**Other Approaches:**
- Ambroxol: GCase chaperone for GBA1 mutation carriers (and sporadic PD)
- Isradipine: Calcium channel blocker (STEADY-PD III: negative)
- Iron chelation (deferiprone): Mixed results
- Ursodeoxycholic acid (UDCA): Mitochondrial protection; Phase 3 planned
- Gene therapy: AAV-GAD (glutamic acid decarboxylase) into STN; AAV-GDNF/neurturin for trophic support

## Genetics and Precision Medicine

**Monogenic PD (5-10%):**
- *LRRK2*: Most common genetic cause (G2019S mutation)
  - Autosomal dominant, incomplete penetrance
  - LRRK2 kinase inhibitors in clinical trials (DNL201, BIIB122)
- *GBA1*: Glucocerebrosidase mutations (most common genetic risk factor)
  - Heterozygous carriers: 5-10x risk
  - GCase-targeting therapies: Ambroxol, venglustat, PR001 (gene therapy)
- *SNCA*: Alpha-synuclein (duplications, triplications, point mutations)
- *PARK2 (Parkin), PINK1, DJ-1*: Autosomal recessive, young-onset
  - Mitophagy pathway (mitochondrial quality control)
- *VPS35*: Autosomal dominant, endosomal trafficking

**Molecular Subtyping:**
- SynNeurGe model: Synuclein, Neuroinflammation, Gene-defined subtypes
- Alpha-synuclein seed amplification assay (SAA): Detects misfolded alpha-synuclein in CSF and skin biopsies
  - Sensitivity >85% for clinical PD
  - May enable biological definition of PD (similar to amyloid in AD)
- Dopamine transporter imaging + SAA may define PD biologically

## Prodromal PD and Prevention

**Prodromal Markers:**
- REM sleep behavior disorder: 80-90% convert to synucleinopathy over 10-15 years
- Hyposmia + constipation + RBD: Very high risk profile
- DAT-SPECT: Reduced uptake predates motor symptoms by years

**At-Risk Cohorts:**
- LRRK2 and GBA1 mutation carriers
- Idiopathic RBD patients
- Target populations for prevention trials

**Prevention Trials in Planning:**
- PPMI (Parkinson Progression Markers Initiative): Largest prodromal PD cohort
- Testing interventions in at-risk populations before motor symptoms develop

## Surgical Innovation

**Adaptive DBS (aDBS):**
- Closed-loop stimulation: Adjusts in real time based on brain signals
- Uses local field potentials (beta oscillations in STN) as feedback
- ADAPT-PD: aDBS showed 50% improvement over conventional DBS in motor scores
- Longer battery life due to intermittent stimulation

**Focused Ultrasound (FUS):**
- MRI-guided focused ultrasound thalamotomy
- Non-invasive lesioning for tremor-dominant PD
- Unilateral only; bilateral associated with speech/swallowing complications
- FDA-approved for medication-refractory tremor

**Cell-Based Therapies:**
- iPSC-derived dopaminergic neurons: Transplantation trials
- STEM-PD: Allogeneic ESC-derived dopaminergic neurons (Phase 1)
- Risk: Tumor formation, immune rejection, variable engraftment
- Decades of fetal cell transplant research informing approach

## Palliative Care and Late-Stage Management

- Integrated palliative care improves quality of life at all stages
- Goals of care discussions: Advance directives, feeding tube decisions
- Fall prevention: #1 cause of morbidity in advanced PD
- Caregiver burden: Depression in 40-60% of caregivers
- Hospice criteria: Dependence in ADLs, recurrent aspiration pneumonia, significant weight loss`,

      keyTerms: [
        { term: 'alpha-synuclein SAA', definition: 'Seed Amplification Assay detecting misfolded alpha-synuclein in CSF, enabling biological diagnosis of PD' },
        { term: 'LRRK2', definition: 'Leucine-Rich Repeat Kinase 2 - most common genetic cause of familial Parkinson disease' },
        { term: 'GBA1', definition: 'Gene encoding glucocerebrosidase - mutations are the most common genetic risk factor for PD' },
        { term: 'adaptive DBS', definition: 'Closed-loop deep brain stimulation that adjusts in real time based on brain signal feedback' },
        { term: 'focused ultrasound', definition: 'Non-invasive MRI-guided technique using ultrasound energy to create targeted brain lesions for tremor' },
        { term: 'GLP-1 receptor agonist', definition: 'Diabetes drugs showing neuroprotective potential in Parkinson disease through anti-inflammatory and neurotrophic mechanisms' },
      ],
      clinicalNotes: `Parkinson disease practice pearls:
1. Alpha-synuclein SAA may enable biological definition of PD (analogous to amyloid biomarkers in AD)
2. GLP-1 receptor agonists are the most promising neuroprotective candidates (exenatide, lixisenatide, semaglutide)
3. LRRK2 kinase inhibitors target the most common genetic cause of familial PD
4. GBA1-targeted therapy (ambroxol) may benefit both genetic and sporadic PD
5. Adaptive DBS outperforms conventional DBS in early trials
6. RBD converts to synucleinopathy in 80-90% over 15 years - ideal prevention trial population
7. Focused ultrasound offers non-invasive tremor treatment option
8. Integrated palliative care should begin early, not just at end of life
9. Levodopa is still the most effective symptomatic therapy after 50+ years`,
    },
  },

  media: [
    {
      id: 'pd-basal-ganglia-circuit',
      type: 'diagram',
      filename: 'basal_ganglia_circuit_pd.svg',
      title: 'Basal Ganglia Circuit in Parkinson Disease',
      description: 'Direct and indirect pathway dysfunction in dopamine-depleted basal ganglia',
    },
    {
      id: 'pd-datscan',
      type: 'image',
      filename: 'datscan_normal_vs_pd.jpg',
      title: 'DaTscan: Normal vs. Parkinson Disease',
      description: 'Reduced comma-shaped uptake becoming period-shaped in PD, indicating dopamine transporter loss',
    },
  ],

  citations: [
    {
      id: 'armstrong-pd-guidelines-2020',
      type: 'article',
      title: 'Diagnosis and Treatment of Parkinson Disease: A Review',
      authors: ['Armstrong MJ', 'Okun MS'],
      source: 'JAMA',
      url: 'https://doi.org/10.1001/jama.2019.22360',
    },
    {
      id: 'bloem-pd-lancet-2021',
      type: 'article',
      title: 'Parkinson disease',
      authors: ['Bloem BR', 'Okun MS', 'Klein C'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(21)00218-X',
    },
  ],

  crossReferences: [
    { targetId: 'neuro-alzheimers-depth', targetType: 'condition', relationship: 'related', label: 'Alzheimer Disease' },
    { targetId: 'neuro-seizure-types', targetType: 'condition', relationship: 'see-also', label: 'Seizure Types' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['neurology', 'neurodegenerative', 'movement disorders', 'deep brain stimulation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine', 'geriatrics'],
    },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default parkinsonsDepthContent;
