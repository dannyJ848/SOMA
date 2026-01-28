/**
 * Nerve Conduction
 *
 * Mechanisms of electrical signal propagation along nerve fibers including
 * myelination, conduction velocity, and clinical nerve conduction studies.
 */

import { EducationalContent } from '../../types';

export const NERVE_CONDUCTION: EducationalContent = {
  id: 'nervous-nerve-conduction',
  type: 'concept',
  name: 'Nerve Conduction',
  alternateNames: ['Signal propagation', 'Axonal conduction', 'Nerve impulse transmission'],

  levels: {
    1: {
      level: 1,
      summary: 'Nerve signals travel along nerve fibers like electrical pulses, moving faster in nerves covered with a special insulating coating called myelin.',
      explanation: `**How Nerve Signals Travel:**

When you touch something hot, the signal needs to travel quickly from your hand to your brain. Nerve signals travel along nerve fibers (axons) as electrical pulses called action potentials.

**Two Types of Nerve Fibers:**

1. **Unmyelinated (Without Coating)**
   - Signals travel slowly
   - Signal moves continuously along the fiber
   - Found in some pain fibers

2. **Myelinated (With Coating)**
   - Have a fatty insulating layer (myelin)
   - Signals "jump" between gaps in the myelin
   - Much faster conduction
   - Found in motor nerves and most sensory nerves

**What Affects Speed?**

*Faster conduction with:*
- Thicker nerve fibers
- More myelin coating
- Higher temperature

*Slower conduction with:*
- Thinner fibers
- Damage to myelin
- Lower temperature

**Why This Matters:**

- Quick reflexes require fast nerve conduction
- Diseases that damage myelin slow down signals
- Multiple sclerosis is a disease that damages myelin
- Doctors can test nerve conduction speed to diagnose problems

**Nerve Fiber Types:**

| Type | Speed | Function |
|------|-------|----------|
| Fastest | 70-120 m/s | Motor neurons, touch |
| Medium | 30-70 m/s | Pressure, temperature |
| Slow | 0.5-2 m/s | Dull pain, itch |`,
      keyTerms: [
        { term: 'myelin', definition: 'A fatty coating around nerve fibers that helps signals travel faster' },
        { term: 'conduction velocity', definition: 'How fast nerve signals travel along a nerve fiber' },
        { term: 'action potential', definition: 'The electrical signal that travels along nerve fibers' },
      ],
      analogies: [
        'Myelin is like insulation on electrical wires - it prevents signal loss and speeds up transmission.',
        'Signal jumping between gaps in myelinated nerves is like an express train that skips local stops.',
      ],
      examples: [
        'When you touch a hot stove, fast myelinated nerves quickly send the signal to pull your hand away.',
        'In multiple sclerosis, damaged myelin causes signals to slow down, leading to weakness and numbness.',
      ],
    },
    2: {
      level: 2,
      summary: 'Nerve conduction involves continuous propagation in unmyelinated fibers and saltatory conduction in myelinated fibers, with velocity determined by fiber diameter, myelination, and temperature, assessable through nerve conduction studies.',
      explanation: `**Continuous Conduction (Unmyelinated):**

*Mechanism:*
1. Action potential at one point depolarizes adjacent membrane
2. Local current flow opens nearby Na+ channels
3. New action potential generated
4. Process repeats along entire length
5. Slow (0.5-2 m/s)

*Characteristics:*
- Found in C fibers (pain, autonomic)
- Energy-intensive (pump activity along entire length)
- Signal amplitude constant (active regeneration)

**Saltatory Conduction (Myelinated):**

*Structure:*
| Component | Function |
|-----------|----------|
| Myelin sheath | Insulation, increases membrane resistance |
| Nodes of Ranvier | Gaps with high Na+ channel density |
| Internodes | Myelinated segments, passive current flow |

*Mechanism:*
1. Action potential at one node
2. Local current flows passively to next node
3. Depolarizes next node to threshold
4. Action potential generated at next node
5. "Jumps" from node to node
6. Fast (up to 120 m/s)

*Advantages:*
- 10-100x faster than continuous
- Energy efficient (pumps only at nodes)
- Reduced axon diameter for same speed

**Factors Affecting Conduction Velocity:**

| Factor | Effect on Velocity | Mechanism |
|--------|-------------------|-----------|
| Fiber diameter | ↑ diameter = ↑ velocity | ↓ internal resistance |
| Myelination | Myelinated >> unmyelinated | Saltatory conduction |
| Temperature | ↑ temp = ↑ velocity | Channel kinetics |
| Internode length | Optimal length fastest | Balance of factors |

**Nerve Fiber Classification:**

*Sensory/Motor (Erlanger-Gasser):*
| Type | Diameter | Velocity | Function |
|------|----------|----------|----------|
| Aα | 12-20 μm | 70-120 m/s | Motor, proprioception |
| Aβ | 5-12 μm | 30-70 m/s | Touch, pressure |
| Aγ | 3-6 μm | 15-30 m/s | Muscle spindle motor |
| Aδ | 2-5 μm | 12-30 m/s | Sharp pain, temp |
| B | 1-3 μm | 3-15 m/s | Autonomic preganglionic |
| C | 0.3-1.3 μm | 0.5-2 m/s | Dull pain, autonomic |

**Nerve Conduction Studies (NCS):**

*Procedure:*
1. Stimulate nerve at one point
2. Record response at another point
3. Calculate conduction velocity

*Parameters Measured:*
| Parameter | Normal Implication | Abnormal |
|-----------|-------------------|----------|
| Velocity | Myelination status | ↓ in demyelination |
| Amplitude | Number of functioning axons | ↓ in axonal loss |
| Latency | Time to response | ↑ in demyelination |
| F-wave | Proximal nerve function | Abnormal in proximal lesions |

**Clinical Applications:**

*Demyelinating vs Axonal:*
| Pattern | Velocity | Amplitude | Examples |
|---------|----------|-----------|----------|
| Demyelinating | ↓↓ | Normal/mild ↓ | GBS (AIDP), CIDP, CMT1 |
| Axonal | Normal/mild ↓ | ↓↓ | Diabetic neuropathy, toxic |
| Mixed | ↓ | ↓ | Many chronic neuropathies |`,
      keyTerms: [
        { term: 'saltatory conduction', definition: 'Jumping of action potentials between nodes of Ranvier in myelinated axons' },
        { term: 'nodes of Ranvier', definition: 'Gaps in myelin sheath with high concentration of sodium channels' },
        { term: 'nerve conduction study', definition: 'Clinical test measuring speed and strength of nerve signals' },
        { term: 'F-wave', definition: 'Late response in NCS testing proximal nerve segments' },
      ],
      analogies: [
        'Nodes of Ranvier are like relay stations - the signal is regenerated at each one.',
        'Demyelination is like stripping insulation from wires - signals leak out and slow down.',
      ],
    },
    3: {
      level: 3,
      summary: 'Nerve conduction physiology integrates cable properties, nodal ion channel organization, and the biophysics of myelination with clinical electrodiagnosis for characterizing peripheral nerve disorders.',
      explanation: `**Cable Theory:**

*Passive Properties:*
\`\`\`
Length Constant (λ):
λ = √(rm/ri)

rm = membrane resistance (Ω·cm)
ri = internal resistance (Ω/cm)

Higher λ → signal travels farther before decaying
Myelination ↑ rm → ↑ λ
\`\`\`

*Time Constant (τ):*
\`\`\`
τ = rm × cm

cm = membrane capacitance (F/cm²)

Lower τ → faster response to input
Myelination ↓ cm → ↓ τ
\`\`\`

*Combined Effect of Myelination:*
- ↑ rm: Reduces current loss across membrane
- ↓ cm: Reduces charge needed to change voltage
- Result: Faster, more efficient propagation

**Nodal Organization:**

*Channel Distribution:*
| Region | Channels | Density |
|--------|----------|---------|
| Node | Nav1.6, KCNQ | Very high |
| Paranode | No channels | - |
| Juxtaparanode | Kv1.1, Kv1.2 | High |
| Internode | Few channels | Low |

*Molecular Organization:*
\`\`\`
Node:
- Ankyrin G scaffolds
- Nav channels clustered
- Gliomedin (Schwann cell)

Paranode:
- Caspr/contactin complex
- Septate-like junctions
- Paranodal loop attachment

Juxtaparanode:
- Caspr2, TAG-1
- Kv channels clustered
- Repolarization
\`\`\`

**Action Potential Propagation - Detailed:**

*At the Node:*
\`\`\`
Sequence:
1. Depolarization from upstream current
2. Nav1.6 opens (high density)
3. Large inward Na+ current
4. Rapid depolarization to ~+30 mV
5. Current flows to next node
6. KCNQ2/3 opens (repolarization)
7. Refractory period prevents backpropagation
\`\`\`

*Safety Factor:*
- Nodal current >> threshold at next node
- Provides margin for successful propagation
- Reduced in demyelination → conduction block

**Electrodiagnostic Medicine:**

*Motor Nerve Conduction:*
\`\`\`
Protocol:
1. Stimulate motor nerve (supramaximal)
2. Record CMAP from muscle

Measurements:
- Distal latency (DL)
- CMAP amplitude (motor units)
- Conduction velocity = distance/time
\`\`\`

*Sensory Nerve Conduction:*
\`\`\`
Methods:
- Orthodromic: Stimulate distally, record proximally
- Antidromic: Stimulate proximally, record distally

Measurements:
- SNAP amplitude (sensory axons)
- Sensory conduction velocity
\`\`\`

*Late Responses:*
| Response | Pathway | Clinical Use |
|----------|---------|--------------|
| F-wave | Motor → cord → motor | Proximal segments |
| H-reflex | Sensory → cord → motor | S1 root function |

**Pathophysiology of Conduction Abnormalities:**

*Demyelination Effects:*
\`\`\`
Changes:
- ↑ membrane capacitance
- ↓ membrane resistance
- Current leakage at former internodes
- Temporal dispersion

Consequences:
- ↓ conduction velocity
- Conduction block
- Conduction slowing
- Nerve vulnerable to temperature
\`\`\`

*Electrodiagnostic Criteria for Demyelination:*
| Finding | Criterion |
|---------|-----------|
| Slowing | CV <70% lower limit normal |
| Conduction block | >50% amplitude drop proximal |
| Temporal dispersion | CMAP duration increase |
| Prolonged DL | >130% upper limit normal |

*Axonal Loss:*
\`\`\`
Changes:
- Decreased number of conducting fibers
- Wallerian degeneration
- Denervation of target

Electrodiagnostic:
- ↓ CMAP/SNAP amplitude
- Relatively preserved velocity
- Fibrillation potentials (EMG)
\`\`\``,
      keyTerms: [
        { term: 'cable constant', definition: 'Length constant (λ) describing how far passive current spreads' },
        { term: 'safety factor', definition: 'Ratio of nodal current to threshold at next node; margin for successful propagation' },
        { term: 'CMAP', definition: 'Compound muscle action potential; sum of motor unit potentials' },
        { term: 'temporal dispersion', definition: 'Broadening of CMAP from different fiber conduction velocities' },
      ],
      clinicalNotes: 'Conduction block is the electrodiagnostic hallmark of demyelination when present between stimulation sites. Temperature affects conduction velocity significantly (2.4 m/s per degree C); limbs should be warmed. F-wave abnormalities may be the earliest finding in Guillain-Barré syndrome due to proximal demyelination.',
    },
    4: {
      level: 4,
      summary: 'Advanced nerve conduction encompasses the molecular basis of nodal and paranodal organization, channelopathies affecting conduction, electrodiagnostic criteria for specific neuropathies, and emerging neurophysiological techniques.',
      explanation: `**Molecular Organization of Myelinated Axons:**

*Paranodal Junction:*
\`\`\`
Axonal Side:
- Caspr (contactin-associated protein)
- Contactin-1

Glial Side:
- Neurofascin-155

Function:
- Forms septate-like junctions
- Barrier function
- Maintains nodal architecture
- Antibodies → nodo-paranodopathy
\`\`\`

*Autoimmune Nodopathies:*
| Antibody Target | Syndrome | Features |
|-----------------|----------|----------|
| NF155 | CIDP variant | Young onset, tremor |
| Caspr | CIDP variant | Neuropathic pain |
| Contactin-1 | CIDP variant | Rapidly progressive |
| NF186 | CIDP variant | Pure motor |

**Ion Channel Pathophysiology:**

*Nav Channelopathies:*
| Gene | Channel | Syndrome | Mechanism |
|------|---------|----------|-----------|
| SCN9A | Nav1.7 | Erythromelalgia | Gain of function |
| SCN9A | Nav1.7 | CIP | Loss of function |
| SCN10A | Nav1.8 | Small fiber neuropathy | Gain of function |
| SCN11A | Nav1.9 | Pain insensitivity | Gain of function |

*Kv Channelopathies:*
| Target | Syndrome | Mechanism |
|--------|----------|-----------|
| KCNQ2 | Neuromyotonia | Antibodies |
| Kv1.1/1.2 | Isaac syndrome | Antibodies |
| VGCC | Lambert-Eaton | Antibodies |

**Electrodiagnostic Criteria - Disease-Specific:**

*Guillain-Barré Syndrome (AIDP):*
\`\`\`
Brighton Criteria for Demyelination:
One of:
1. ≥2 nerves with CV <70% LLN
2. ≥2 nerves with DML >130% ULN
3. F-wave latency >120% ULN in ≥2 nerves
4. Conduction block or dispersion in ≥1 nerve
\`\`\`

*CIDP:*
| Definite | Criteria |
|----------|----------|
| Motor CV | <70% LLN in 2+ nerves |
| DML | >150% ULN in 2+ nerves |
| F-wave | >120% ULN in 2+ nerves |
| Conduction block | >50% drop, 2+ sites |

*AMAN (Axonal GBS):*
- Preserved sensory responses
- Reduced CMAP amplitudes
- Normal velocities initially
- Anti-GM1 antibodies common

**Advanced Electrodiagnostic Techniques:**

*High-Resolution Ultrasound:*
\`\`\`
Applications:
- Nerve cross-sectional area
- Fascicle visualization
- Focal abnormalities
- Complement to NCS

Findings:
- Enlarged nerves in CIDP
- Focal enlargement at entrapment
- Neuroma visualization
\`\`\`

*Excitability Testing:*
| Parameter | What It Measures | Clinical Use |
|-----------|------------------|--------------|
| Strength-duration | Nodal function | Demyelination |
| Threshold electrotonus | Internodal K+ channels | CIDP vs MMN |
| Recovery cycle | Refractory period | Na+ channel function |

*Single Fiber EMG:*
- Jitter measurement
- Neuromuscular junction assessment
- Myasthenia gravis diagnosis
- Fiber density

**Conduction in Special Situations:**

*Small Fiber Neuropathy:*
\`\`\`
Challenge:
- C fibers not assessed by standard NCS
- Routine NCS normal

Alternative Testing:
- Quantitative sensory testing (QST)
- Skin biopsy (IENFD)
- Sudomotor function tests
- Laser-evoked potentials
\`\`\`

*Central Conduction:*
\`\`\`
Motor Evoked Potentials (MEP):
- TMS stimulates motor cortex
- Record from muscle
- Central motor conduction time

Somatosensory Evoked Potentials (SSEP):
- Stimulate peripheral nerve
- Record from cortex
- Evaluate sensory pathways
\`\`\`

**Regeneration and Plasticity:**

*After Axonal Injury:*
| Process | Timeline | Features |
|---------|----------|----------|
| Wallerian degeneration | Days | Distal nerve degenerates |
| Chromatolysis | Days | Cell body response |
| Axonal sprouting | Weeks | New growth cones |
| Reinnervation | Months | Target reconnection |
| Myelination | Months | New myelin formation |

*Factors Affecting Regeneration:*
- Age (worse in elderly)
- Nerve gap length
- Type of injury
- Target availability

*Collateral Reinnervation:*
- Intact axons sprout to denervated fibers
- Increases motor unit size
- Seen as polyphasic MUPs on EMG`,
      keyTerms: [
        { term: 'nodopathy', definition: 'Autoimmune disease targeting nodal/paranodal proteins' },
        { term: 'threshold electrotonus', definition: 'Technique assessing internodal properties by measuring threshold changes' },
        { term: 'IENFD', definition: 'Intraepidermal nerve fiber density; skin biopsy measure for small fiber neuropathy' },
        { term: 'collateral sprouting', definition: 'Process where intact axons branch to reinnervate denervated targets' },
      ],
      clinicalNotes: 'Paranodal antibodies (NF155, Caspr, contactin) define a distinct subgroup of CIDP with specific clinical features and treatment implications (often IVIG-resistant). Nerve ultrasound is increasingly used alongside NCS for diagnosing neuropathies. Small fiber neuropathy requires specialized testing beyond routine NCS.',
    },
    5: {
      level: 5,
      summary: 'Expert understanding of nerve conduction integrates molecular neurobiology with advanced electrodiagnostics, precision medicine approaches to neuropathy, and emerging technologies for nerve assessment and regeneration.',
      explanation: `**Molecular Mechanisms of Demyelination:**

*Immune-Mediated Demyelination:*
\`\`\`
AIDP Pathophysiology:
1. Molecular mimicry (e.g., C. jejuni → GM1)
2. Antibodies bind myelin/node targets
3. Complement activation (MAC formation)
4. Macrophage infiltration
5. Vesicular demyelination
6. Conduction failure

Target Antigens:
| Syndrome | Antigen | Location |
|----------|---------|----------|
| AIDP | Unknown (myelin) | Myelin |
| AMAN | GM1, GD1a | Node/axolemma |
| AMSAN | GM1, GD1a | Multiple |
| MFS | GQ1b | Cranial nerves |
\`\`\`

*Hereditary Demyelination (CMT):*
| Gene | Protein | Mechanism |
|------|---------|-----------|
| PMP22 | PMP22 | Gene dosage |
| MPZ | P0 | Myelin compaction |
| GJB1 | Connexin-32 | Gap junctions |
| EGR2 | Transcription factor | Myelination program |

**Precision Electrodiagnosis:**

*Algorithm Integration:*
\`\`\`
Clinical + EDx + Imaging + Biomarkers

Example: Length-Dependent Neuropathy
1. NCS: Distal > proximal changes
2. Ultrasound: No nerve enlargement
3. Labs: Glucose, B12, SPEP
4. Skin biopsy: IENFD if needed
→ Specific diagnosis and treatment
\`\`\`

*Quantitative Analysis:*
| Parameter | Technique | Application |
|-----------|-----------|-------------|
| MUNIX | Surface EMG analysis | Motor unit number estimation |
| EIM | Electrical impedance | Muscle composition |
| MUNE | Incremental stimulation | Motor unit counting |

**Emerging Technologies:**

*Magnetic Resonance Neurography:*
\`\`\`
Advantages:
- High-resolution nerve imaging
- Visualize proximal nerves
- Detect signal changes (T2)
- Fascicular detail

Applications:
- Plexopathy evaluation
- Focal neuropathy localization
- Tumor vs inflammation
- Treatment monitoring
\`\`\`

*Diffusion Tensor Imaging (DTI):*
| Metric | Meaning | Changes |
|--------|---------|---------|
| FA | Anisotropy | ↓ with injury |
| MD | Diffusivity | ↑ with injury |
| RD | Radial diffusivity | ↑ with demyelination |
| AD | Axial diffusivity | ↓ with axonal loss |

*Corneal Confocal Microscopy:*
- Non-invasive nerve imaging
- Quantifies corneal nerve fibers
- Surrogate for small fiber neuropathy
- Rapid, repeatable

**Novel Therapeutics:**

*Nerve Regeneration Enhancement:*
| Approach | Mechanism | Status |
|----------|-----------|--------|
| Neuregulin-1 | Schwann cell activation | Preclinical |
| GDNF | Neurotrophic support | Clinical trials |
| Electrical stimulation | Enhanced regeneration | Limited clinical |
| Stem cell therapy | Replace Schwann cells | Early research |

*Gene Therapy for CMT:*
\`\`\`
CMT1A (PMP22 duplication):
- Approach: Reduce PMP22 expression
- ASOs targeting PMP22
- Phase 1/2 trials ongoing

CMT1X (GJB1 mutation):
- Gene replacement
- AAV vectors
- Preclinical development
\`\`\`

*Targeted Immunotherapy:*
| Target | Drug | Application |
|--------|------|-------------|
| FcRn | Efgartigimod | CIDP, GBS |
| Complement | Eculizumab | Refractory CIDP |
| CD19/20 | Rituximab | CIDP variants |
| IL-6 | Tocilizumab | NF155+ CIDP |

**Computational Approaches:**

*Machine Learning in EDx:*
\`\`\`
Applications:
- Automated waveform analysis
- Classification algorithms
- Outcome prediction
- Normal value adjustment

Challenges:
- Data standardization
- Validation across populations
- Clinical integration
\`\`\`

*Biophysical Modeling:*
- Simulation of conduction
- Predict effect of interventions
- Understanding disease mechanisms
- Drug development tool

**Future Directions:**

*Optogenetic Approaches:*
- Light-controlled nerve stimulation
- Precise fiber-type activation
- Research applications
- Potential neuroprosthetics

*Bioelectronic Medicine:*
| Technology | Application |
|------------|-------------|
| Vagus nerve stimulation | Inflammation control |
| Closed-loop systems | Dynamic stimulation |
| Neural interfaces | Prosthetic control |

*Precision Medicine:*
\`\`\`
Integrated Assessment:
- Genomics (hereditary, susceptibility)
- Autoantibodies (inflammatory)
- Imaging (structure)
- Electrophysiology (function)
- Biomarkers (disease activity)
↓
Individualized Treatment
\`\`\`

**Clinical Challenges:**

*Cryptogenic Neuropathy:*
- 20-30% of neuropathies undiagnosed
- Extended workup protocols
- Whole exome sequencing
- Novel antibody testing
- Skin biopsy for small fiber

*Treatment Monitoring:*
\`\`\`
Outcome Measures:
- INCAT disability scale
- Grip strength, 6MWT
- NCS parameters
- Patient-reported outcomes

Biomarkers Needed:
- Disease activity markers
- Treatment response predictors
- Progression biomarkers
\`\`\``,
      keyTerms: [
        { term: 'MUNIX', definition: 'Motor Unit Number Index; surface EMG technique estimating motor units' },
        { term: 'neurography', definition: 'High-resolution MRI technique for imaging peripheral nerves' },
        { term: 'efgartigimod', definition: 'FcRn blocker reducing pathogenic antibodies; emerging therapy for inflammatory neuropathies' },
        { term: 'molecular mimicry', definition: 'Process where antibodies to pathogens cross-react with nerve antigens' },
      ],
      clinicalNotes: 'FcRn inhibitors represent a new therapeutic class for antibody-mediated neuropathies with potential advantages over IVIG/plasmapheresis. MR neurography is transforming evaluation of proximal nerve and plexus disorders. Gene therapy trials for CMT1A are underway, potentially offering the first disease-modifying treatment for hereditary neuropathies. Machine learning is beginning to be integrated into electrodiagnostic interpretation.',
    },
  },

  media: [
    {
      id: 'conduction-1',
      type: 'diagram',
      filename: 'saltatory-conduction.svg',
      title: 'Saltatory Conduction',
      description: 'Action potential propagation in myelinated axons',
    },
    {
      id: 'ncs-1',
      type: 'diagram',
      filename: 'nerve-conduction-study.svg',
      title: 'Nerve Conduction Study',
      description: 'Setup and parameters of NCS testing',
    },
  ],

  citations: [
    {
      id: 'preston-emg',
      type: 'textbook',
      title: 'Electromyography and Neuromuscular Disorders',
      authors: ['Preston, DC', 'Shapiro, BE'],
      source: 'Elsevier',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'nervous-neurophysiology-basics', targetType: 'concept', relationship: 'related', label: 'Neurophysiology Basics' },
    { targetId: 'nervous-neurotransmitters', targetType: 'concept', relationship: 'related', label: 'Neurotransmitters' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['physiology', 'neurology', 'electrodiagnosis'],
    keywords: ['nerve conduction', 'myelin', 'action potential', 'NCS', 'neuropathy', 'demyelination'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'physiology'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
