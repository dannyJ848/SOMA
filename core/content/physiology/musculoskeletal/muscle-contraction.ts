/**
 * Muscle Contraction - Comprehensive Educational Content
 *
 * Covers sliding filament theory, excitation-contraction coupling,
 * cross-bridge cycling, skeletal/cardiac/smooth muscle differences,
 * and clinical correlations including myopathies and pharmacology.
 */

import { EducationalContent } from '../../types';

export const muscleContraction: EducationalContent = {
  id: 'physiology-muscle-contraction',
  type: 'process',
  name: 'Muscle Contraction',
  nameEs: 'Contraccion Muscular',
  alternateNames: ['Excitation-Contraction Coupling', 'Sliding Filament Mechanism', 'Myocyte Physiology'],

  levels: {
    1: {
      level: 1,
      summary: 'Muscles contract when your brain sends an electrical signal that causes protein fibers inside muscle cells to slide past each other, shortening the muscle.',
      explanation: `## How Muscles Work

### What Makes a Muscle Move?

1. Your **brain** sends an electrical signal through a nerve
2. The nerve releases a chemical (**acetylcholine**) at the muscle
3. This triggers the muscle cell to contract (shorten)
4. Tiny protein fibers inside the cell **slide past each other** like interlocking fingers

### Two Main Proteins

- **Actin**: Thin filaments (like a rope)
- **Myosin**: Thick filaments with little heads that grab onto actin and pull

The myosin heads grab, pull, release, and grab again -- like a rowing motion -- making the muscle shorter.

### Three Types of Muscle

1. **Skeletal muscle**: Moves your bones; you control it voluntarily
2. **Cardiac muscle**: Pumps your heart; works automatically
3. **Smooth muscle**: Lines your organs (stomach, blood vessels); works automatically

### Energy for Contraction

Muscles need **ATP** (the body's energy currency) to contract AND to relax. When ATP runs out, muscles lock up -- this is why rigor mortis happens after death.`,
      keyTerms: [
        { term: 'actin', definition: 'Thin protein filaments in muscle cells that are pulled by myosin' },
        { term: 'myosin', definition: 'Thick protein filaments with heads that grab and pull actin to shorten muscle' },
        { term: 'acetylcholine', definition: 'Chemical signal released by nerves to trigger muscle contraction' },
        { term: 'ATP', definition: 'The energy molecule muscles need to contract and relax' },
      ],
      analogies: [
        'Myosin heads grabbing actin is like someone pulling a rope hand over hand.',
        'Muscle contraction is like a telescope collapsing -- the pieces slide inward.',
        'ATP is the fuel that keeps the rowing motion going.',
      ],
      examples: [
        'When you flex your bicep, your brain tells the muscle to contract, pulling your forearm up.',
        'A muscle cramp is an involuntary, painful contraction that will not release.',
        'Rigor mortis happens because dead muscles have no ATP to release the myosin-actin bond.',
      ],
      patientCounselingPoints: [
        'Muscles need protein, calcium, and energy to work properly.',
        'Stretching before exercise helps prevent muscle cramps.',
        'Muscle weakness can come from nerve problems, not just muscle problems.',
      ],
    },
    2: {
      level: 2,
      summary: 'Skeletal muscle contraction follows the sliding filament model: an action potential triggers calcium release from the sarcoplasmic reticulum, enabling actin-myosin cross-bridge cycling powered by ATP hydrolysis.',
      explanation: `## Muscle Contraction

### The Sarcomere: Contractile Unit

The sarcomere is the basic unit of muscle contraction:
- **Z-lines**: Boundaries of each sarcomere
- **Thin filaments (actin)**: Anchored to Z-lines
- **Thick filaments (myosin)**: Centered between Z-lines
- **I-band**: Actin only (shortens during contraction)
- **A-band**: Overlap zone (stays same length)
- **H-zone**: Myosin only (shortens during contraction)

### Excitation-Contraction Coupling

1. **Motor neuron** releases ACh at neuromuscular junction
2. ACh binds **nicotinic receptors** -> Na+ influx -> muscle **action potential**
3. AP travels along sarcolemma and down **T-tubules**
4. T-tubule voltage sensor (DHPR) activates **ryanodine receptor (RyR1)** on sarcoplasmic reticulum
5. **Ca2+ released** from SR into cytoplasm
6. Ca2+ binds **troponin C** -> tropomyosin moves -> exposes myosin binding sites on actin
7. **Cross-bridge cycling** begins

### Cross-Bridge Cycle

1. **Attachment**: Myosin head binds actin
2. **Power stroke**: Myosin pulls actin toward center (ADP + Pi released)
3. **Detachment**: New ATP binds myosin -> releases from actin
4. **Recovery**: ATP hydrolysis re-cocks myosin head

### Muscle Relaxation

1. Motor neuron stops firing
2. **SERCA pump** actively pumps Ca2+ back into SR
3. Ca2+ falls -> troponin-tropomyosin complex re-covers binding sites
4. Cross-bridges cannot form -> muscle relaxes

### Skeletal vs. Cardiac vs. Smooth

| Feature | Skeletal | Cardiac | Smooth |
|---------|----------|---------|--------|
| Control | Voluntary | Involuntary | Involuntary |
| Striated | Yes | Yes | No |
| Ca2+ source | SR only | SR + extracellular | Extracellular + SR |
| Regulation | Troponin | Troponin | Calmodulin-MLCK |
| Gap junctions | No | Yes | Yes (some) |`,
      keyTerms: [
        { term: 'sarcomere', definition: 'The basic contractile unit of striated muscle, from Z-line to Z-line' },
        { term: 'sarcoplasmic reticulum', definition: 'Internal Ca2+ storage in muscle cells; releases Ca2+ for contraction' },
        { term: 'ryanodine receptor', definition: 'Ca2+ release channel on the SR activated during excitation-contraction coupling' },
        { term: 'troponin', definition: 'Regulatory protein complex (T, C, I) on actin that controls myosin binding site exposure' },
        { term: 'SERCA', definition: 'SR Ca2+-ATPase pump that removes Ca2+ from cytoplasm to cause relaxation' },
        { term: 'cross-bridge cycle', definition: 'Repeated attach-pull-release-recock cycle of myosin on actin' },
      ],
      analogies: [
        'The sarcomere shortening is like an accordion being squeezed.',
        'Troponin-tropomyosin is like a safety cover over a button -- Ca2+ removes the cover so myosin can press the button.',
        'SERCA is like a vacuum cleaner sucking up Ca2+ to stop contraction.',
      ],
      examples: [
        'Succinylcholine (depolarizing blocker) causes initial fasciculations then paralysis at the NMJ.',
        'Malignant hyperthermia is caused by RyR1 mutations causing uncontrolled Ca2+ release.',
        'Cardiac troponin I and T are used as biomarkers for heart attack because they leak from damaged heart cells.',
      ],
    },
    3: {
      level: 3,
      summary: 'Muscle contraction involves DHPR-RyR coupling for EC coupling, Ca2+-troponin regulation of cross-bridge cycling with ATP-dependent kinetics, length-tension and force-velocity relationships, and distinct mechanisms in cardiac (CICR) and smooth muscle (calmodulin-MLCK).',
      explanation: `## Muscle Contraction Physiology

### Excitation-Contraction Coupling: Molecular Detail

**Skeletal muscle (mechanical coupling):**
DHPR (L-type Ca2+ channel, Cav1.1) on T-tubule directly contacts RyR1 on SR via physical linkage. DHPR voltage change -> conformational change -> RyR1 opens. No extracellular Ca2+ entry required.

**Cardiac muscle (CICR):**
DHPR (Cav1.2) opens with AP -> small Ca2+ influx -> activates RyR2 on SR -> massive Ca2+ release (Ca2+-induced Ca2+ release). Ca2+ gain: ~10x amplification.

### Cross-Bridge Kinetics

**Myosin ATPase cycle:**
1. ATP hydrolysis (M-ATP -> M-ADP-Pi): Myosin cocked
2. Cross-bridge attachment (weak then strong binding): Pi release
3. Power stroke (~10 nm movement): ADP release
4. Rigor state (AM): Awaiting new ATP
5. Detachment: ATP binding

**Velocity depends on:** ATPase rate (myosin heavy chain isoform). Type I (slow, MHC-I) vs Type IIa/IIx (fast, MHC-IIa/IIx).

### Length-Tension Relationship

**Optimal sarcomere length:** ~2.0-2.2 um (maximal actin-myosin overlap)
- <1.6 um: Thin filament overlap interferes
- >2.2 um: Decreasing overlap -> decreased force
- >3.6 um: No overlap -> zero force

**Frank-Starling mechanism (cardiac):** Increased sarcomere length (within physiological range) -> increased Ca2+ sensitivity (titin-mediated) -> increased force.

### Force-Velocity Relationship

- **Isometric** (constant length): Maximum force, zero velocity
- **Isotonic** (constant force): Velocity inversely related to load
- Maximum velocity (Vmax): Zero load; determined by myosin ATPase rate
- **Hill equation:** (P + a)(V + b) = (P0 + a)b

### Smooth Muscle Contraction

**Ca2+-calmodulin-MLCK pathway:**
1. Ca2+ entry (L-type channels) or SR release (IP3 receptor)
2. Ca2+ binds calmodulin (CaM)
3. Ca2+-CaM activates myosin light chain kinase (MLCK)
4. MLCK phosphorylates myosin regulatory light chain (MLC20)
5. Phosphorylated myosin cross-bridges cycle with actin

**Relaxation:** MLCP (myosin light chain phosphatase) dephosphorylates MLC20.
**Latch state:** Partially dephosphorylated cross-bridges maintain tone with low ATP consumption.

**Regulation of MLCP:**
- RhoA/Rho kinase inhibits MLCP -> sustained contraction (vasoconstriction)
- NO/cGMP/PKG activates MLCP -> relaxation (vasodilation)`,
      keyTerms: [
        { term: 'CICR', definition: 'Calcium-induced calcium release; small Ca2+ influx via DHPR triggers massive SR release via RyR2 in cardiac muscle' },
        { term: 'length-tension relationship', definition: 'Force production depends on sarcomere length; optimal at 2.0-2.2 um with maximal actin-myosin overlap' },
        { term: 'latch state', definition: 'Smooth muscle maintaining tone with dephosphorylated cross-bridges at low ATP cost' },
        { term: 'MLCK', definition: 'Myosin light chain kinase; Ca2+-CaM-activated enzyme that phosphorylates myosin for smooth muscle contraction' },
        { term: 'Rho kinase', definition: 'Inhibits MLCP to sustain smooth muscle contraction; target of Ca2+-sensitization pathways' },
        { term: 'myosin heavy chain isoform', definition: 'Determines ATPase rate and contraction speed; MHC-I (slow) vs MHC-IIa/IIx (fast)' },
      ],
      clinicalNotes: 'Cardiac troponin I/T release reflects myocyte injury (type 1 MI: plaque rupture; type 2: supply-demand mismatch). High-sensitivity troponin assays detect smaller injuries. Malignant hyperthermia (RyR1 GOF mutation) -> uncontrolled SR Ca2+ release -> rigidity, hyperthermia, rhabdomyolysis; treat with dantrolene (RyR1 blocker). Smooth muscle Rho kinase inhibitors (fasudil) are used for cerebral vasospasm.',
    },
    4: {
      level: 4,
      summary: 'Advanced muscle physiology integrates molecular DHPR-RyR coupling mechanisms, cross-bridge kinetic modeling, titin-based passive stiffness and mechanosensing, fiber-type plasticity via PGC-1alpha/calcineurin signaling, and pathophysiology of channelopathies, cardiomyopathies, and neuromuscular disorders.',
      explanation: `## Advanced Muscle Contraction

### EC Coupling: Molecular Architecture

**Skeletal triad:** T-tubule flanked by two SR terminal cisternae. DHPR tetrads on T-tubule directly face alternating RyR1 tetramers on SR (checkerboard pattern). Mechanical coupling: DHPR II-III loop contacts RyR1.

**Cardiac dyad:** T-tubule opposes one SR cisterna. DHPR-RyR2 coupling is functional (Ca2+ diffusion), not physical. Ca2+ spark = elemental Ca2+ release event from single RyR2 cluster. Global [Ca2+]i transient = summation of sparks.

**RyR regulation:**
- Activated by: Ca2+ (CICR), caffeine, calstabin removal
- Inhibited by: Mg2+, calstabin (FKBP12/12.6), dantrolene
- PKA phosphorylation: Enhances RyR2 open probability (sympathetic effect on cardiac contractility)
- Pathological leak: PKA hyperphosphorylation in HF -> diastolic SR Ca2+ leak -> reduced SR load -> systolic dysfunction + arrhythmias

### Titin: The Third Filament

**Structure:** Giant protein (3-4 MDa) spanning half-sarcomere from Z-disc to M-line.
**Functions:** Passive stiffness (I-band spring elements: tandem Ig domains, PEVK region, N2B element); centering myosin filaments; mechanosensing (M-line kinase domain).
**Isoforms:** N2B (stiff, cardiac) vs N2BA (compliant, cardiac) vs N2A (skeletal). N2B/N2BA ratio determines passive myocardial stiffness.
**Phosphorylation:** PKA/PKG phosphorylation of N2B element decreases passive stiffness (lusitropy).

### Fiber Type Plasticity

**Signaling pathways:**
- Calcineurin/NFAT: Slow-twitch program (endurance training)
- PGC-1alpha: Mitochondrial biogenesis, oxidative metabolism
- AKT/mTOR: Hypertrophy (resistance training)
- Myostatin (GDF-8): Negative regulator of muscle mass

**Clinical relevance:** Disuse atrophy involves fast-to-slow shift reversal; cachexia (cancer, HF) involves myostatin upregulation and ubiquitin-proteasome activation.

### Neuromuscular Junction Disorders

**Myasthenia gravis:** Anti-AChR antibodies (85%) or anti-MuSK (5-8%); reduced NMJ safety factor -> fatigable weakness. Treatment: AChE inhibitors, immunosuppression, thymectomy.
**Lambert-Eaton:** Anti-VGCC (P/Q type) antibodies; reduced ACh release; associated with SCLC. Facilitation with repeated stimulation.
**Botulism:** Botulinum toxin cleaves SNARE proteins (SNAP-25, VAMP) -> blocks ACh vesicle fusion -> flaccid paralysis.

### Cardiac Channelopathies

**HCM mutations:** Sarcomeric protein mutations (beta-MHC R403Q, MYBPC3 truncations) -> increased Ca2+ sensitivity, hypercontractility, impaired relaxation. Mavacamten (myosin inhibitor) reduces LVOT obstruction.
**DCM mutations:** TTN truncating variants (25% of familial DCM); LMNA mutations (conduction disease + DCM).`,
      keyTerms: [
        { term: 'Ca2+ spark', definition: 'Elemental Ca2+ release from single RyR2 cluster; cardiac contraction = summation of sparks' },
        { term: 'calstabin', definition: 'FKBP12/12.6 stabilizing RyR closed state; dissociation causes pathological Ca2+ leak in HF' },
        { term: 'titin', definition: '3-4 MDa sarcomeric protein providing passive stiffness; isoform ratio determines myocardial compliance' },
        { term: 'PGC-1alpha', definition: 'Transcriptional coactivator driving mitochondrial biogenesis and oxidative fiber-type program' },
        { term: 'mavacamten', definition: 'Cardiac myosin inhibitor reducing hypercontractility in HCM; approved after EXPLORER-HCM' },
        { term: 'MuSK', definition: 'Muscle-specific kinase essential for NMJ formation; anti-MuSK antibodies cause myasthenia gravis' },
      ],
      clinicalNotes: 'RyR2 pathological leak (PKA hyperphosphorylation in HF) causes both systolic dysfunction (reduced SR Ca2+ load) and arrhythmias (delayed afterdepolarizations from NCX). Rycal compounds (JTV-519, ARM036) stabilize calstabin-RyR2 interaction; under investigation. Titin truncating variants (TTNtv) are the most common genetic cause of DCM; genetic testing is now recommended for familial cardiomyopathy.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art muscle physiology integrates cryo-EM sarcomeric structures, RyR2 leak and Rycal therapeutics, titin-based cardiomyopathy genetics, myosin-targeted HCM therapy, gene therapy for muscular dystrophies, and emerging sarcomere-directed precision medicine.',
      explanation: `## Precision Muscle Physiology

### Structural Biology

**Cryo-EM of cardiac sarcomere:** Actin-myosin interaction resolved at near-atomic level. Super-relaxed (SRX) state: Myosin heads folded against thick filament backbone (interacting-heads motif, IHM). HCM mutations destabilize IHM -> more heads available for contraction -> hypercontractility.

**Mavacamten mechanism:** Stabilizes myosin SRX state -> reduces number of available cross-bridges -> decreases contractility without affecting individual cross-bridge force. VALOR-HCM: Reduced need for septal reduction therapy.

### RyR2 Therapeutics

**Rycal compounds:** ARM210 (Phase I for CPVT); stabilize calstabin-RyR2 interaction to prevent diastolic Ca2+ leak. Target: CPVT, HF arrhythmias, potentially HFrEF.
**Dantrolene repurposing:** RyR2 stabilizer; pilot studies in CPVT and HF; limited by hepatotoxicity.

### Gene Therapy for Muscle Disease

**Duchenne muscular dystrophy:** Micro-dystrophin AAV gene therapy (delandistrogene moxeparvovec, Elevidys) FDA accelerated approval 2023. Exon-skipping ASOs (eteplirsen, golodirsen) for specific mutations.
**SMA:** Onasemnogene (Zolgensma, AAV9-SMN1) single-dose gene replacement. Nusinersen (ASO) and risdiplam (small molecule) for SMN2 splicing.
**Pompe disease:** AAV-based GAA gene therapy in Phase I/II; cipaglucosidase alfa + miglustat (chaperone) approved as ERT.

### Titin in Disease

**TTNtv in DCM:** Present in ~25% of familial DCM; incomplete penetrance; modifier genes and second hits determine phenotype. Truncations in A-band have highest pathogenicity.
**Titin in HFpEF:** Increased N2B/N2BA ratio and hypophosphorylation of N2B -> increased passive stiffness -> diastolic dysfunction. PKG-enhancing therapies (sacubitril/valsartan, riociguat) may improve titin compliance.

### Emerging Targets

**Omecamtiv mecarbil:** Cardiac myosin activator; increases systolic ejection time without increasing MVO2. GALACTIC-HF: Modest benefit in HFrEF. Most effective in patients with lowest EF.
**Fast skeletal troponin activator (reldesemtiv):** Increases Ca2+ sensitivity of fast fibers; Phase III for ALS and SMA (COURAGE-ALS negative; investigation continues).`,
      keyTerms: [
        { term: 'super-relaxed state', definition: 'Myosin heads folded in interacting-heads motif; energy-conserving; HCM mutations destabilize this state' },
        { term: 'Rycal', definition: 'Compounds stabilizing calstabin-RyR2 interaction to prevent pathological Ca2+ leak; ARM210 in trials' },
        { term: 'micro-dystrophin', definition: 'Truncated dystrophin gene deliverable via AAV for Duchenne muscular dystrophy gene therapy' },
        { term: 'TTNtv', definition: 'Titin truncating variants; most common genetic cause of DCM; A-band truncations most pathogenic' },
        { term: 'omecamtiv mecarbil', definition: 'Cardiac myosin activator increasing ejection time; GALACTIC-HF showed benefit in HFrEF' },
        { term: 'interacting-heads motif', definition: 'Structural arrangement of folded myosin heads on thick filament; target of mavacamten' },
      ],
      clinicalNotes: `1) Mavacamten represents first disease-specific HCM therapy by stabilizing myosin SRX state. 2) TTNtv genetic testing is standard in familial DCM workup; A-band location predicts pathogenicity. 3) Gene therapy for DMD and SMA is transforming pediatric neuromuscular disease. 4) RyR2 stabilization is a promising strategy for CPVT and HF arrhythmias. 5) Sarcomere-directed therapies (activators and inhibitors) enable precision approaches to systolic dysfunction and hypertrophy.`,
    },
  },

  media: [
    { id: 'sarcomere-structure', type: 'diagram', filename: 'sarcomere-contraction.svg',
      title: 'Sarcomere Structure and Contraction', description: 'Sliding filament model with actin, myosin, and regulatory proteins' },
    { id: 'ec-coupling', type: 'diagram', filename: 'excitation-contraction-coupling.svg',
      title: 'Excitation-Contraction Coupling', description: 'DHPR-RyR coupling in skeletal and cardiac muscle' },
  ],

  citations: [
    { id: 'boron-muscle', type: 'textbook', title: 'Medical Physiology', authors: ['Boron WF', 'Boulpaep EL'], source: 'Elsevier', chapter: '9-10' },
    { id: 'guyton-muscle', type: 'textbook', title: 'Guyton and Hall Textbook of Medical Physiology', authors: ['Hall JE', 'Hall ME'], source: 'Elsevier', chapter: '6-8' },
  ],

  crossReferences: [
    { targetId: 'physiology-cardiac-cycle', targetType: 'topic', relationship: 'related', label: 'Cardiac Cycle' },
    { targetId: 'physiology-bone-remodeling', targetType: 'topic', relationship: 'sibling', label: 'Bone Remodeling' },
    { targetId: 'condition-myasthenia-gravis', targetType: 'condition', relationship: 'see-also', label: 'Myasthenia Gravis' },
    { targetId: 'condition-hcm', targetType: 'condition', relationship: 'see-also', label: 'Hypertrophic Cardiomyopathy' },
  ],

  tags: {
    systems: ['musculoskeletal', 'cardiovascular'],
    topics: ['physiology', 'neurology', 'cardiology'],
    keywords: ['muscle', 'contraction', 'sarcomere', 'actin', 'myosin', 'calcium', 'NMJ', 'troponin'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default muscleContraction;
