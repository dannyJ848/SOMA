/**
 * Peripheral Nervous System - Sensory and Motor Pathways
 *
 * Comprehensive coverage of PNS organization, sensory receptors,
 * motor pathways, nerve structure, and clinical assessment.
 */

import { EducationalContent } from '../../types';

export const peripheralNervousSystemContent: EducationalContent = {
  id: 'physiology-peripheral-nervous-system',
  type: 'system',
  name: 'Peripheral Nervous System',
  alternateNames: ['PNS', 'Peripheral Nerves', 'Somatic Nervous System'],

  levels: {
    1: {
      level: 1,
      summary: 'The peripheral nervous system is the network of nerves throughout your body that connects your brain and spinal cord to the rest of you.',
      explanation: `If your brain and spinal cord are like the main computer, the peripheral nervous system is like all the cables connecting it to everything else!

**What Does the PNS Do?**

**1. Sensory (Feeling) Nerves:**
These nerves carry information TO your brain about what's happening:
- Touch: Feeling a fuzzy blanket
- Temperature: Knowing water is hot or cold
- Pain: Warning you when something hurts
- Position: Knowing where your hands are even with eyes closed

**2. Motor (Movement) Nerves:**
These nerves carry commands FROM your brain to your muscles:
- Walking and running
- Picking up objects
- Smiling and talking
- Writing

**How It Works:**

Example - Catching a Ball:
1. Your eyes see the ball (sensory nerves send info to brain)
2. Your brain figures out where the ball will be
3. Motor nerves tell your arm muscles to move
4. You catch the ball!
5. Sensory nerves tell your brain "Got it!"

**Types of Nerves:**
- **Cranial nerves** (12 pairs): Connect brain to head and face
- **Spinal nerves** (31 pairs): Connect spinal cord to body

**Why It Matters:**
When you accidentally touch a hot pan, sensory nerves quickly warn your brain, and motor nerves make you pull your hand back - all in a split second!`,
      keyTerms: [
        { term: 'peripheral nervous system', definition: 'All the nerves outside your brain and spinal cord' },
        { term: 'sensory nerve', definition: 'A nerve that carries information about touch, pain, and temperature to your brain' },
        { term: 'motor nerve', definition: 'A nerve that carries movement commands from your brain to your muscles' },
        { term: 'cranial nerve', definition: 'One of 12 pairs of nerves that connect your brain directly to your head and neck' },
        { term: 'spinal nerve', definition: 'One of 31 pairs of nerves that connect your spinal cord to your body' },
      ],
      analogies: [
        'Sensory nerves are like scouts reporting back to headquarters (the brain), while motor nerves are like messengers delivering orders to the troops (muscles).',
        'Your PNS is like the internet cables in your house - connecting your main computer (brain) to all your devices (body parts).',
      ],
      examples: [
        'When you step on a sharp rock, sensory nerves in your foot quickly tell your brain "Ouch!" and motor nerves make you lift your foot.',
        'The facial nerve (a cranial nerve) is why you can smile, frown, and raise your eyebrows.',
      ],
    },
    2: {
      level: 2,
      summary: 'The PNS consists of cranial and spinal nerves containing sensory neurons (afferent) that transmit sensation to the CNS and motor neurons (efferent) that carry commands to muscles and glands.',
      explanation: `**Organization of the PNS:**

The peripheral nervous system includes all neural tissue outside the brain and spinal cord:
- 12 pairs of cranial nerves
- 31 pairs of spinal nerves
- Ganglia (clusters of cell bodies outside CNS)

**Sensory (Afferent) Division:**

*Types of Sensory Receptors:*
- **Mechanoreceptors**: Touch, pressure, vibration, stretch
- **Thermoreceptors**: Temperature (warm and cold)
- **Nociceptors**: Pain (tissue damage)
- **Proprioceptors**: Body position and movement
- **Photoreceptors**: Light (in the eye)
- **Chemoreceptors**: Chemicals (taste, smell)

*Sensory Pathways:*
1. Stimulus activates receptor
2. Sensory neuron generates action potential
3. Signal travels to spinal cord or brainstem
4. Relays to thalamus
5. Reaches sensory cortex for perception

**Motor (Efferent) Division:**

*Somatic Motor (Voluntary):*
- Controls skeletal muscles
- Single neuron from CNS to muscle
- Uses acetylcholine at neuromuscular junction

*Autonomic Motor (Involuntary):*
- Controls organs, glands, smooth muscle
- Two-neuron pathway (preganglionic → ganglionic)
- Sympathetic ("fight or flight") and parasympathetic ("rest and digest")

**Nerve Structure:**
- **Endoneurium**: Surrounds individual axons
- **Perineurium**: Surrounds bundles (fascicles)
- **Epineurium**: Surrounds entire nerve

**Cranial Nerves:**

| Number | Name | Function |
|--------|------|----------|
| I | Olfactory | Smell |
| II | Optic | Vision |
| III | Oculomotor | Eye movement, pupil |
| IV | Trochlear | Eye movement (superior oblique) |
| V | Trigeminal | Face sensation, chewing |
| VI | Abducens | Eye movement (lateral rectus) |
| VII | Facial | Facial expression, taste |
| VIII | Vestibulocochlear | Hearing, balance |
| IX | Glossopharyngeal | Taste, swallowing |
| X | Vagus | Heart, lungs, digestion |
| XI | Accessory | Head turning, shoulder shrug |
| XII | Hypoglossal | Tongue movement |

**Spinal Nerve Distribution:**
- Cervical (C1-C8): Neck, arms, hands
- Thoracic (T1-T12): Chest, abdomen
- Lumbar (L1-L5): Lower back, front of legs
- Sacral (S1-S5): Back of legs, pelvic organs`,
      keyTerms: [
        { term: 'afferent', definition: 'Carrying signals toward the CNS (sensory)', pronunciation: 'AF-er-ent' },
        { term: 'efferent', definition: 'Carrying signals away from the CNS (motor)', pronunciation: 'EF-er-ent' },
        { term: 'nociceptor', definition: 'Pain receptor that detects tissue damage', pronunciation: 'NO-sih-sep-tor' },
        { term: 'proprioception', definition: 'The sense of body position and movement' },
        { term: 'neuromuscular junction', definition: 'The connection point between a motor nerve and muscle fiber' },
        { term: 'ganglion', definition: 'A cluster of nerve cell bodies located outside the CNS', pronunciation: 'GANG-lee-on' },
      ],
      analogies: [
        'Afferent nerves are like incoming mail (information coming in), while efferent nerves are like outgoing mail (commands going out).',
        'The nerve coverings (endoneurium, perineurium, epineurium) are like the insulation around electrical wires - protecting and organizing the fibers.',
      ],
    },
    3: {
      level: 3,
      summary: 'The PNS transmits sensory information via modality-specific pathways with distinct fiber types and relay nuclei, while motor output follows parallel upper and lower motor neuron pathways converging at the neuromuscular junction.',
      explanation: `## Sensory Systems

**Somatosensory Pathways:**

*Dorsal Column-Medial Lemniscus (Fine Touch, Proprioception):*
1. Large myelinated fibers (Aα, Aβ) → dorsal root ganglion
2. Ascend ipsilaterally in dorsal columns
   - Gracile fasciculus: Lower body (medial)
   - Cuneate fasciculus: Upper body (lateral)
3. Synapse in dorsal column nuclei (medulla)
4. Decussation → medial lemniscus
5. Thalamus (VPL) → Primary somatosensory cortex

*Anterolateral System (Pain, Temperature):*
1. Small fibers (Aδ, C) → dorsal root ganglion
2. Synapse in dorsal horn (laminae I, II, V)
3. Decussation → contralateral anterolateral tract
4. Spinothalamic tract → VPL/VPM thalamus
5. Primary and secondary somatosensory cortex

**Sensory Receptor Types:**

| Receptor | Fiber | Adaptation | Detects |
|----------|-------|------------|---------|
| Meissner corpuscle | Aβ | Rapid | Light touch, texture |
| Merkel disc | Aβ | Slow | Pressure, edges |
| Pacinian corpuscle | Aβ | Rapid | Vibration, pressure |
| Ruffini ending | Aβ | Slow | Stretch, joint position |
| Muscle spindle | Aα, II | Variable | Muscle length |
| Golgi tendon organ | Ib | Slow | Muscle tension |
| Free nerve ending | Aδ, C | Variable | Pain, temperature |

**Nerve Fiber Classification:**

| Type | Diameter | Velocity | Function |
|------|----------|----------|----------|
| Aα | 12-20 μm | 70-120 m/s | Motor, proprioception |
| Aβ | 5-12 μm | 30-70 m/s | Touch, pressure |
| Aγ | 3-6 μm | 15-30 m/s | Muscle spindle motor |
| Aδ | 2-5 μm | 12-30 m/s | Fast pain, temperature |
| B | 1-3 μm | 3-15 m/s | Preganglionic autonomic |
| C | 0.3-1.5 μm | 0.5-2 m/s | Slow pain, autonomic |

## Motor Systems

**Upper Motor Neurons (UMN):**
- Cell bodies in motor cortex, brainstem
- Corticospinal tract: Primary voluntary motor pathway
- Corticobulbar tract: Cranial nerve motor nuclei
- Rubrospinal, reticulospinal, vestibulospinal: Posture/tone

**Lower Motor Neurons (LMN):**
- Cell bodies in ventral horn (spinal) or brainstem nuclei (cranial)
- Alpha motor neurons: Extrafusal muscle fibers
- Gamma motor neurons: Intrafusal fibers (spindle sensitivity)

**UMN vs LMN Lesions:**

| Feature | UMN | LMN |
|---------|-----|-----|
| Weakness | Yes | Yes |
| Atrophy | Mild (disuse) | Severe |
| Fasciculations | No | Yes |
| Tone | Increased (spastic) | Decreased (flaccid) |
| Reflexes | Hyperreflexia | Hyporeflexia/areflexia |
| Babinski | Positive (upgoing) | Negative (downgoing) |

**Neuromuscular Junction:**

1. Action potential arrives at motor terminal
2. Voltage-gated Ca²⁺ channels open
3. Ca²⁺ triggers ACh vesicle fusion
4. ACh released into synaptic cleft
5. ACh binds nicotinic receptors on muscle
6. End plate potential → muscle action potential
7. ACh degraded by acetylcholinesterase

## Peripheral Nerve Organization

**Plexuses:**

*Brachial Plexus (C5-T1):*
- Musculocutaneous → biceps, forearm flexion
- Median → forearm flexors, thenar muscles
- Ulnar → intrinsic hand muscles
- Radial → extensors

*Lumbosacral Plexus:*
- Femoral (L2-L4) → knee extension, hip flexion
- Obturator (L2-L4) → hip adduction
- Sciatic (L4-S3) → hamstrings, all below knee
  - Tibial → plantar flexion
  - Common peroneal → dorsiflexion

**Dermatomal Patterns:**
- C5: Lateral arm
- C6: Lateral forearm, thumb
- C7: Middle finger
- C8: Medial forearm, small finger
- T4: Nipple level
- T10: Umbilicus
- L4: Medial leg
- L5: Dorsum of foot
- S1: Lateral foot, sole`,
      keyTerms: [
        { term: 'dorsal column', definition: 'Ascending white matter pathway carrying fine touch and proprioception ipsilaterally' },
        { term: 'spinothalamic tract', definition: 'Ascending pathway carrying pain and temperature, crossing in spinal cord' },
        { term: 'dermatome', definition: 'Area of skin supplied by a single spinal nerve root' },
        { term: 'myotome', definition: 'Group of muscles innervated by a single spinal nerve root' },
        { term: 'motor unit', definition: 'A single motor neuron and all the muscle fibers it innervates' },
        { term: 'plexus', definition: 'Network of intersecting nerves forming new combinations' },
      ],
      clinicalNotes: 'Carpal tunnel syndrome: Median nerve compression at wrist → numbness in thumb-middle fingers, thenar weakness. Radial nerve palsy (Saturday night palsy): Wrist drop, finger drop. Peroneal nerve palsy: Foot drop. Dermatomal sensory loss suggests radiculopathy; non-dermatomal suggests peripheral neuropathy.',
    },
    4: {
      level: 4,
      summary: 'The PNS exhibits complex sensorimotor organization with specific receptor physiology, parallel ascending/descending pathways, reflex circuits, and characteristic patterns of dysfunction in neuropathy, radiculopathy, and neuromuscular disease.',
      explanation: `## Sensory Receptor Physiology

**Mechanotransduction:**
- Mechanosensitive ion channels (Piezo1, Piezo2)
- Membrane deformation → channel opening
- Generator potential → action potential initiation
- Encoding: Frequency coding of stimulus intensity

**Adaptation Mechanisms:**
- Rapidly adapting: Respond to stimulus onset/offset
  - Meissner (texture), Pacinian (vibration)
- Slowly adapting: Sustained response during stimulus
  - Merkel (pressure), Ruffini (stretch)
- Mixed patterns allow texture discrimination

**Proprioceptive System:**

*Muscle Spindle:*
- Intrafusal fibers: Nuclear bag 1, 2; nuclear chain
- Ia afferents (primary): Dynamic and static response
- II afferents (secondary): Static response
- γ motor neurons set spindle sensitivity
- α-γ coactivation maintains spindle function during contraction

*Golgi Tendon Organ:*
- Located at muscle-tendon junction
- Ib afferents signal muscle tension
- Inhibitory to homonymous motor neurons
- Protective against excessive force

## Spinal Reflexes

**Stretch Reflex (Monosynaptic):**
\`\`\`
Muscle stretch → Spindle activation → Ia afferent →
Motor neuron → Muscle contraction
\`\`\`
- Clinically tested as DTRs
- Hyporeflexia: LMN, sensory, or muscle disease
- Hyperreflexia: UMN lesion

**Reciprocal Inhibition:**
- Ia afferent activates Ia inhibitory interneuron
- Inhibits antagonist motor neurons
- Allows smooth movement

**Inverse Myotatic Reflex:**
- GTO (Ib) activation → Ib inhibitory interneuron
- Inhibits agonist, facilitates antagonist
- Autogenic inhibition (protective)

**Flexor Withdrawal Reflex:**
- Nociceptor activation
- Polysynaptic pathway
- Ipsilateral flexion, contralateral extension (crossed-extensor)

## Peripheral Neuropathy Patterns

**Classification by Distribution:**

*Length-Dependent (Dying-Back):*
- Longest nerves affected first
- Stocking-glove distribution
- Causes: Diabetes, B12 deficiency, alcohol, uremia

*Non-Length-Dependent:*
- Multifocal or proximal
- Causes: Vasculitis, CIDP, hereditary

*Mononeuropathy Multiplex:*
- Multiple individual nerves
- Causes: Vasculitis, diabetes, leprosy

**Classification by Fiber Type:**

*Large Fiber:*
- Vibration, proprioception loss
- Sensory ataxia
- Reduced/absent reflexes
- Causes: B12 deficiency, Friedreich ataxia

*Small Fiber:*
- Pain, temperature loss
- Burning, allodynia
- Preserved reflexes
- Causes: Diabetes, amyloid, Fabry

**Electrodiagnostic Features:**

*Demyelinating:*
- Prolonged distal latencies
- Reduced conduction velocity (<70% LLN)
- Conduction block
- Temporal dispersion
- Examples: GBS, CIDP, CMT1

*Axonal:*
- Reduced amplitudes
- Near-normal velocities
- Fibrillations, positive sharp waves on EMG
- Examples: Diabetic, toxic, axonal GBS

## Neuromuscular Junction Disorders

**Myasthenia Gravis:**
- Antibodies against postsynaptic AChR (85%)
- Anti-MuSK (5-8%)
- Fatiguable weakness
- Ptosis, diplopia, bulbar, respiratory
- Decrement on repetitive nerve stimulation
- Single fiber EMG: Increased jitter

**Lambert-Eaton Myasthenic Syndrome:**
- Antibodies against presynaptic P/Q Ca²⁺ channels
- Proximal weakness, autonomic symptoms
- Facilitation with exercise (post-exercise facilitation)
- Increment on high-frequency RNS
- 50% associated with small cell lung cancer

**Botulism:**
- Clostridium botulinum toxin
- Cleaves SNARE proteins
- Descending paralysis
- Pupil involvement early
- Increment on RNS

## Motor Neuron Disease

**Amyotrophic Lateral Sclerosis (ALS):**
- Combined UMN and LMN signs
- Progressive weakness
- No sensory involvement
- EMG: Widespread active denervation
- UMN signs: Hyperreflexia, spasticity, Babinski
- LMN signs: Atrophy, fasciculations, weakness

**Distinguishing Features:**

| Condition | UMN | LMN | Sensory | EMG |
|-----------|-----|-----|---------|-----|
| ALS | Yes | Yes | No | Active denervation |
| SMA | No | Yes | No | Chronic denervation |
| PLS | Yes | No | No | Normal/minimal |
| PMA | No | Yes | No | Active denervation |
| Neuropathy | No | Yes | Usually | Dependent on type |`,
      keyTerms: [
        { term: 'Piezo channels', definition: 'Mechanosensitive ion channels mediating touch sensation' },
        { term: 'α-γ coactivation', definition: 'Simultaneous activation of alpha and gamma motor neurons maintaining spindle sensitivity during contraction' },
        { term: 'conduction block', definition: 'Focal failure of action potential propagation, seen in demyelination' },
        { term: 'fibrillation potential', definition: 'Spontaneous activity of denervated muscle fibers seen on EMG' },
        { term: 'MuSK', definition: 'Muscle-specific kinase; target of antibodies in some myasthenia gravis cases' },
      ],
      clinicalNotes: 'Clinical pearls: Myasthenia vs LEMS - MG worsens with activity, LEMS improves initially. Ice pack test for ptosis in MG (cooling improves NMJ function). EDx approach: NCS first (neuropathy vs normal), then EMG (denervation, myopathy). In suspected motor neuron disease, EMG should sample multiple regions to show widespread denervation.',
    },
    5: {
      level: 5,
      summary: 'The PNS exhibits sophisticated sensorimotor integration with molecular mechanisms underlying neuropathic pain, channelopathies, autoimmune neuromuscular disease, and emerging precision medicine approaches to diagnosis and treatment.',
      explanation: `## Molecular Mechanisms of Sensation

**Mechanotransduction:**
- Piezo1/2: Primary mechanotransducers
- Piezo2 knockout: Loss of light touch, proprioception
- TRPV1, TRPA1, TRPM8: Temperature and pain
- Stoml3: Required for mechanosensitivity of Merkel cells

**Pain Molecular Biology:**

*Nociceptor Sensitization:*
- Peripheral: PGE2, bradykinin, NGF lower threshold
- Inflammatory soup: Reduces voltage-gated Na⁺ channel threshold
- TRPV1: Heat sensitized by protons, capsaicin
- Nav1.7, 1.8, 1.9: Key nociceptor Nav channels

*Central Sensitization:*
- Increased excitability of dorsal horn neurons
- NMDA receptor involvement
- Glial activation (microglia, astrocytes)
- Cytokine release (IL-1β, TNF-α, IL-6)
- Reduced descending inhibition

## Inherited Neuropathies

**Charcot-Marie-Tooth Disease:**

| Type | Gene | Protein | Mechanism |
|------|------|---------|-----------|
| CMT1A | PMP22 dup | PMP22 | Myelin instability |
| CMT1B | MPZ | P0 | Myelin compaction |
| CMT1X | GJB1 | Connexin 32 | Gap junction |
| CMT2A | MFN2 | Mitofusin 2 | Mitochondrial fusion |
| CMT4C | SH3TC2 | SH3TC2 | Schwann cell |

**Hereditary Sensory Neuropathies:**
- HSAN1: SPTLC1 (sphingolipid) - Pain insensitivity
- HSAN4: NTRK1 (TrkA) - Congenital insensitivity to pain with anhidrosis
- SCN9A channelopathies: Erythromelalgia (gain) vs CIP (loss)

**Familial Amyloid Polyneuropathy:**
- Transthyretin (TTR) mutations
- Small fiber neuropathy → large fiber
- Autonomic involvement
- Treatment: Tafamidis, patisiran, inotersen

## Autoimmune Neuropathies

**Guillain-Barré Syndrome Subtypes:**

| Subtype | Target | Geography | Features |
|---------|--------|-----------|----------|
| AIDP | Myelin (unknown) | West | Demyelinating |
| AMAN | GM1, GD1a | Asia | Axonal, pure motor |
| AMSAN | GM1, GD1a | Variable | Axonal, sensory-motor |
| Miller Fisher | GQ1b | Variable | Ophthalmoplegia, ataxia, areflexia |

**Pathophysiology:**
- Molecular mimicry (Campylobacter lipooligosaccharides)
- Complement-mediated nerve damage
- Macrophage-mediated demyelination (AIDP)
- Anti-ganglioside antibodies

**Chronic Inflammatory Demyelinating Polyradiculoneuropathy (CIDP):**
- > 8 weeks progression
- Symmetric proximal and distal weakness
- Elevated CSF protein
- Treatment: IVIg, plasmapheresis, steroids
- Variants: DADS, multifocal motor neuropathy

## Precision Diagnostics

**Nerve Conduction Studies:**

*Parameters:*
- Amplitude: Number of functioning axons
- Velocity: Myelin integrity
- Latency: Distal segment function
- F-waves: Proximal segment function

*Interpretation:*
- Axonal loss: Reduced amplitude, near-normal velocity
- Demyelination: Prolonged latency, slowed velocity, blocks
- Criteria: EFNS/PNS for CIDP, GBS

**Advanced Techniques:**

*Nerve Ultrasound:*
- Cross-sectional area measurement
- Increased CSA in demyelinating neuropathies
- Fascicular pattern in multifocal neuropathy
- Nerve enlargement proximal to compression

*MR Neurography:*
- T2 signal increase in affected nerves
- Nerve enlargement
- Fat infiltration of denervated muscle
- Plexus and root visualization

**Skin Biopsy:**
- Intraepidermal nerve fiber density (IENFD)
- Quantifies small fiber neuropathy
- Normal values age/site dependent
- Sweat gland innervation for autonomic

## Emerging Therapies

**Gene Therapy:**
- AAV-mediated gene delivery
- CMT1A: Antisense against PMP22
- SMA: Onasemnogene abeparvovec (Zolgensma)
- TTR amyloidosis: Gene silencing (patisiran, vutrisiran)

**Small Molecule:**
- PMP22-targeting compounds
- Nav1.7 inhibitors for pain
- Schwann cell modulators

**Immunotherapy:**
- FcRn inhibitors (efgartigimod in MG)
- Complement inhibitors (eculizumab, ravulizumab in MG)
- Anti-CD20 (rituximab) in antibody-mediated disease
- CAR-T: Investigational for MuSK MG

## Pain Management

**Neuropathic Pain Mechanisms:**
- Ectopic firing (injured/regenerating axons)
- Peripheral sensitization
- Central sensitization
- Disinhibition (loss of inhibitory tone)
- Altered descending modulation

**Pharmacotherapy:**

| Drug Class | Mechanism | Examples |
|------------|-----------|----------|
| TCAs | SNRI, Na⁺ block | Amitriptyline, nortriptyline |
| SNRIs | NE, 5-HT reuptake | Duloxetine, venlafaxine |
| Gabapentinoids | α2δ Ca⁺ channel | Gabapentin, pregabalin |
| Nav blockers | Sodium channels | Carbamazepine, oxcarbazepine |
| Topical | Local | Lidocaine, capsaicin |

**Interventional:**
- Nerve blocks
- Spinal cord stimulation
- Dorsal root ganglion stimulation
- Intrathecal drug delivery

**Precision Approach:**
- SCN9A/10A variants: Nav-targeted therapy
- Small fiber: Capsaicin, Nav blockers
- Inflammatory: Immunomodulation
- Central sensitization: Centrally-acting agents`,
      keyTerms: [
        { term: 'molecular mimicry', definition: 'Immune response to pathogen cross-reacts with self-antigens due to structural similarity' },
        { term: 'intraepidermal nerve fiber density', definition: 'Quantitative measure of small fiber density in skin biopsy, used to diagnose small fiber neuropathy' },
        { term: 'FcRn inhibitor', definition: 'Drug that accelerates IgG degradation by blocking neonatal Fc receptor, reducing pathogenic antibodies' },
        { term: 'anti-ganglioside antibody', definition: 'Autoantibodies against nerve membrane glycolipids, found in GBS variants' },
        { term: 'efferent copy', definition: 'Internal copy of motor commands used to predict sensory consequences of movement' },
      ],
      clinicalNotes: `Diagnostic algorithm:
1. Pattern recognition: Length-dependent vs non-length-dependent vs mononeuropathy multiplex
2. Electrodiagnostic: Axonal vs demyelinating vs mixed
3. Lab workup: Glucose, B12, SPEP/UPEP, HIV, hepatitis B/C as initial screen
4. If demyelinating: LP for protein, anti-ganglioside antibodies
5. Consider genetic testing if early onset, family history, or specific phenotype
6. Nerve/muscle biopsy if vasculitis suspected or diagnosis unclear

Emerging: Blood NfL as biomarker for axonal damage - may help track disease activity and treatment response.

For pain: Start with first-line agents (gabapentinoid or duloxetine), titrate to effect or tolerability, consider combinations for refractory cases. Opioids are third-line and require careful risk-benefit assessment.`,
    },
  },

  media: [
    {
      id: 'sensory-pathways-diagram',
      type: 'diagram',
      filename: 'sensory_pathways.svg',
      title: 'Ascending Sensory Pathways',
      description: 'Dorsal column and spinothalamic pathways with key relay points',
    },
    {
      id: 'dermatome-map',
      type: 'diagram',
      filename: 'dermatome_map.svg',
      title: 'Dermatome and Myotome Map',
      description: 'Full body dermatome distribution with key myotome levels',
    },
    {
      id: 'nerve-conduction-demo',
      type: 'animation',
      filename: 'nerve_conduction.mp4',
      title: 'Nerve Conduction Study Interpretation',
      description: 'Interactive demonstration of NCS parameters and patterns',
    },
  ],

  citations: [
    {
      id: 'dyck-peripheral-neuropathy',
      type: 'textbook',
      title: 'Peripheral Neuropathy',
      authors: ['Dyck PJ', 'Thomas PK'],
      source: 'Saunders, 4th Edition',
    },
    {
      id: 'preston-electromyography',
      type: 'textbook',
      title: 'Electromyography and Neuromuscular Disorders',
      authors: ['Preston DC', 'Shapiro BE'],
      source: 'Elsevier, 4th Edition',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-central-nervous-system', targetType: 'system', relationship: 'related', label: 'Central Nervous System' },
    { targetId: 'physiology-autonomic-nervous-system', targetType: 'system', relationship: 'related', label: 'Autonomic Nervous System' },
    { targetId: 'physiology-pain-pathways', targetType: 'pathway', relationship: 'see-also', label: 'Pain Pathways' },
    { targetId: 'condition-neuropathy', targetType: 'condition', relationship: 'see-also', label: 'Peripheral Neuropathy' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['physiology', 'anatomy', 'electrodiagnosis'],
    keywords: ['peripheral nerve', 'sensory', 'motor', 'neuropathy', 'EMG', 'NCS'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default peripheralNervousSystemContent;
