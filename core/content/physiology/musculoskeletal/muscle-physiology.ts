/**
 * Muscle Physiology - Comprehensive Educational Content
 *
 * Covers muscle contraction mechanisms, fiber types, and clinical applications
 * for orthopedic and rheumatologic patient education.
 */

import { EducationalContent } from '../../types';

export const muscleContractionContent: EducationalContent = {
  id: 'physiology-muscle-contraction',
  type: 'process',
  name: 'Muscle Contraction Mechanism',
  alternateNames: ['Sliding Filament Theory', 'Excitation-Contraction Coupling'],

  levels: {
    1: {
      level: 1,
      summary: 'Muscles contract when tiny protein threads slide past each other, like fingers interlocking, to shorten the muscle and create movement.',
      explanation: `Your muscles are made of tiny fibers, and inside those fibers are even tinier threads called proteins. When you want to move, your brain sends a signal through nerves to your muscles.

**How muscles contract:**
1. Your brain sends an electrical signal down a nerve
2. The nerve releases a chemical message at the muscle
3. Calcium is released inside the muscle fiber
4. Protein threads (actin and myosin) grab onto each other
5. They slide past each other, shortening the muscle
6. This creates pulling force that moves your bones

**Why this matters:**
- Muscles need energy (from food) to contract
- They also need calcium to work properly
- Without proper nerve signals, muscles cannot contract

Think of it like a rowing team: the rowers (myosin) grab the oars and pull (actin), moving the boat forward. Each pull moves the boat a little bit, and many pulls together create smooth movement.`,
      keyTerms: [
        { term: 'muscle fiber', definition: 'A single muscle cell, which is long and thin like a thread' },
        { term: 'contraction', definition: 'When a muscle shortens and creates pulling force' },
        { term: 'nerve signal', definition: 'An electrical message from your brain that tells muscles when to contract' },
      ],
      analogies: [
        'Muscle contraction is like interlocking your fingers and then bringing your hands together - the fingers slide past each other.',
        'Myosin pulling on actin is like a rowing team pulling oars to move a boat.',
      ],
      examples: [
        'When you bend your elbow, your biceps muscle contracts (shortens) to pull your forearm up.',
        'When you smile, many small facial muscles contract to move your lips and cheeks.',
      ],
    },
    2: {
      level: 2,
      summary: 'Muscle contraction occurs through the sliding filament mechanism, where myosin heads pull on actin filaments within sarcomeres, powered by ATP and regulated by calcium.',
      explanation: `Skeletal muscle is organized into repeating units called sarcomeres, which are the basic contractile units. Within each sarcomere, two types of protein filaments interact:

**Thick Filaments (Myosin):**
- Made of many myosin molecules
- Each myosin has a "head" that can bind to actin
- The head contains an ATPase enzyme that breaks down ATP

**Thin Filaments (Actin):**
- Two twisted strands of actin proteins
- Tropomyosin covers the myosin binding sites
- Troponin controls tropomyosin position

**The Contraction Process:**

1. **Nerve signal arrives** - Action potential travels down motor neuron
2. **Acetylcholine released** - Neurotransmitter crosses the neuromuscular junction
3. **Muscle membrane depolarizes** - Signal spreads along muscle fiber
4. **Calcium released** - From sarcoplasmic reticulum storage
5. **Troponin binds calcium** - Causes tropomyosin to shift
6. **Myosin binds actin** - Binding sites now exposed
7. **Power stroke** - Myosin pulls actin toward center
8. **ATP binds** - Myosin releases actin, cycle repeats

**Relaxation:**
- Calcium pumped back into sarcoplasmic reticulum
- Tropomyosin covers binding sites again
- No more cross-bridges can form
- Muscle returns to resting length

**Energy Requirements:**
- ATP is needed for the power stroke
- ATP is also needed to pump calcium back for relaxation
- Without ATP, muscles become stiff (rigor)`,
      keyTerms: [
        { term: 'sarcomere', definition: 'The basic unit of muscle contraction, containing organized actin and myosin filaments', pronunciation: 'SAR-koh-meer' },
        { term: 'myosin', definition: 'The thick filament protein with heads that pull on actin', pronunciation: 'MY-oh-sin' },
        { term: 'actin', definition: 'The thin filament protein that myosin pulls on', pronunciation: 'AK-tin' },
        { term: 'troponin', definition: 'Protein that binds calcium and regulates muscle contraction', pronunciation: 'TRO-po-nin' },
        { term: 'sarcoplasmic reticulum', definition: 'Storage compartment for calcium inside muscle fibers', pronunciation: 'sar-ko-PLAZ-mik reh-TIK-yoo-lum' },
        { term: 'ATP', definition: 'Adenosine triphosphate - the energy currency used for muscle contraction' },
      ],
      analogies: [
        'The sarcomere is like a ladder that can telescope - the rungs (Z-lines) move closer together as the sides (filaments) slide past each other.',
      ],
    },
    3: {
      level: 3,
      summary: 'The sliding filament theory describes cross-bridge cycling between myosin and actin, regulated by the troponin-tropomyosin complex, with excitation-contraction coupling linking membrane depolarization to calcium release via T-tubules and the sarcoplasmic reticulum.',
      explanation: `**Sarcomere Structure:**

| Band/Zone | Contents | During Contraction |
|-----------|----------|-------------------|
| Z-line | Anchors thin filaments | Move closer together |
| I-band | Thin filaments only | Shortens |
| A-band | Thick filaments (+ overlap) | Stays constant |
| H-zone | Thick filaments only | Shortens/disappears |
| M-line | Center of sarcomere | Stationary |

**Excitation-Contraction Coupling:**

1. Action potential reaches T-tubule (transverse tubule)
2. DHP receptors (voltage-gated) detect depolarization
3. Mechanical coupling to ryanodine receptors (RyR1) on SR
4. RyR1 opens, releasing Ca2+ into cytoplasm
5. Cytoplasmic [Ca2+] rises from ~100 nM to ~1-10 microM
6. Calcium binds troponin C, initiating contraction

**Cross-Bridge Cycle (Detailed):**

1. **Attachment (Rigor state)**: Myosin bound to actin, no nucleotide
2. **ATP binding**: ATP binds myosin, causing detachment from actin
3. **Hydrolysis/Cocking**: ATP hydrolyzed to ADP + Pi; head moves to high-energy position
4. **Cross-bridge formation**: Head binds new actin site
5. **Power stroke**: Pi released, then ADP; head pivots, pulling actin
6. **Rigor**: Cycle repeats if ATP and Ca2+ available

**Troponin-Tropomyosin Regulation:**
- Troponin complex: TnC (calcium binding), TnI (inhibitory), TnT (tropomyosin binding)
- At rest: TnI holds tropomyosin over actin binding sites
- Ca2+ binding to TnC causes conformational change
- TnI releases, tropomyosin shifts deeper into groove
- Myosin binding sites on actin exposed

**Clinical Correlation - Myasthenia Gravis:**
- Autoantibodies against acetylcholine receptors
- Reduced receptor density at neuromuscular junction
- Results in fatigable weakness
- Improves with acetylcholinesterase inhibitors`,
      keyTerms: [
        { term: 'T-tubule', definition: 'Transverse tubule - invagination of sarcolemma that conducts action potentials into the fiber interior' },
        { term: 'DHP receptor', definition: 'Dihydropyridine receptor - voltage sensor on T-tubules that triggers calcium release' },
        { term: 'ryanodine receptor', definition: 'Calcium release channel on sarcoplasmic reticulum (RyR1 in skeletal muscle)' },
        { term: 'cross-bridge cycle', definition: 'The repetitive attach-pull-release cycle of myosin heads that produces muscle contraction' },
        { term: 'power stroke', definition: 'The force-generating movement of the myosin head that pulls actin' },
      ],
      clinicalNotes: 'Understanding the neuromuscular junction is critical for anesthesiology (neuromuscular blocking agents) and neurology (myasthenia gravis, Lambert-Eaton syndrome). The A-band remains constant during contraction - this is a classic exam point.',
    },
    4: {
      level: 4,
      summary: 'Muscle contraction involves precise molecular mechanisms including the cross-bridge cycle kinetics, cooperative activation of thin filaments, length-tension and force-velocity relationships, and motor unit recruitment patterns governing force production.',
      explanation: `**Molecular Mechanisms of Cross-Bridge Cycle:**

| State | Myosin | Actin | Nucleotide | Energy State |
|-------|--------|-------|------------|--------------|
| Rigor | Attached | Bound | None | Low |
| Detached | Free | Released | ATP bound | Low |
| Cocked | Free | Near binding site | ADP + Pi | High |
| Force-generating | Attached | Bound | ADP releasing | Converting |
| Post-power stroke | Attached | Bound | ADP released | Low |

**Cooperative Activation:**
- Calcium binding to one troponin affects neighboring units
- Strong myosin binding further displaces tropomyosin
- Positive feedback increases sensitivity
- Hill coefficient ~2-4 for calcium activation

**Length-Tension Relationship:**
- Optimal sarcomere length: ~2.0-2.2 micrometers
- Maximum overlap of thick and thin filaments
- Too short: Filament interference, reduced force
- Too long: Insufficient overlap, fewer cross-bridges
- Clinical: Preload optimization in heart (Frank-Starling)

**Force-Velocity Relationship:**
- Hyperbolic relationship (Hill equation)
- Maximum velocity at zero load
- Maximum force at zero velocity (isometric)
- Power output peaks at ~30% maximum velocity
- Eccentric contractions can generate higher force

**Contraction Types:**
- **Isometric**: Length constant, tension varies
- **Isotonic concentric**: Muscle shortens at constant tension
- **Isotonic eccentric**: Muscle lengthens while developing tension
- Eccentric: Greater force capacity, more muscle damage

**Motor Unit Recruitment:**

Henneman's Size Principle:
1. Small motor neurons have lowest threshold (recruited first)
2. Type I (slow oxidative) motor units recruited early
3. Progressive recruitment of larger motor neurons
4. Type IIx (fast glycolytic) recruited last for high-force activities

Rate Coding:
- Force modulated by firing frequency
- Low frequency: Individual twitches
- Higher frequency: Summation and fusion
- Maximum force: Fused tetanus (3-4x single twitch)

**Energy Systems:**
- Phosphocreatine system: Immediate (~10 seconds)
- Anaerobic glycolysis: Short-term (10 sec - 2 min)
- Aerobic metabolism: Long-term (>2 min)
- ATP consumption during contraction: ~10^15 molecules/second per fiber`,
      keyTerms: [
        { term: 'length-tension relationship', definition: 'The relationship between muscle fiber length and force production capacity' },
        { term: 'force-velocity relationship', definition: 'The inverse relationship between contraction velocity and force output' },
        { term: 'Henneman\'s size principle', definition: 'Motor units are recruited in order of increasing size, from slow to fast' },
        { term: 'rate coding', definition: 'Modulation of muscle force by changing motor neuron firing frequency' },
        { term: 'tetanus', definition: 'Sustained muscle contraction from high-frequency stimulation' },
        { term: 'eccentric contraction', definition: 'Muscle lengthening while generating force (e.g., lowering a weight)' },
      ],
      clinicalNotes: 'Eccentric contractions cause more muscle damage and DOMS (delayed onset muscle soreness) than concentric contractions. This is relevant for rehabilitation protocols. The length-tension relationship underlies the Frank-Starling mechanism in cardiac muscle.',
    },
    5: {
      level: 5,
      summary: 'Advanced muscle physiology encompasses molecular structure-function relationships, calcium handling dynamics, regulatory mechanisms, pathophysiology of neuromuscular disorders, and pharmacological targets for muscle diseases.',
      explanation: `**Molecular Structure-Function Relationships:**

**Myosin Structure:**
- Heavy chains: Motor domain, lever arm, coiled-coil tail
- Essential light chains (ELC): Structural
- Regulatory light chains (RLC): Modulatory function
- MHC isoforms determine fiber type (I, IIa, IIx)

**Titin:**
- Giant protein spanning half-sarcomere
- Molecular spring providing passive tension
- I-band region: PEVK segment (extensible)
- A-band region: Bound to myosin
- Mutations cause cardiomyopathies, muscular dystrophies

**Calcium Handling Dynamics:**

| Parameter | Skeletal Muscle | Cardiac Muscle |
|-----------|-----------------|----------------|
| RyR isoform | RyR1 | RyR2 |
| Activation | Mechanical (DHP-RyR) | CICR |
| Ca2+ transient | ~1-10 microM | ~0.5-2 microM |
| Duration | 20-100 ms | 200-400 ms |
| SERCA isoform | SERCA1a | SERCA2a |

**Malignant Hyperthermia:**
- RyR1 mutations (most common: R615C in humans)
- Uncontrolled Ca2+ release upon trigger exposure
- Triggers: Volatile anesthetics (sevoflurane, isoflurane), succinylcholine
- Clinical: Rigidity, hyperthermia, hypermetabolism, rhabdomyolysis
- Treatment: Dantrolene (blocks RyR1), cooling, supportive care
- Screening: Caffeine-halothane contracture test

**Neuromuscular Junction Disorders:**

| Condition | Site | Mechanism | Electrodiagnosis |
|-----------|------|-----------|------------------|
| Myasthenia gravis | Postsynaptic | Anti-AChR antibodies | Decremental response |
| Lambert-Eaton | Presynaptic | Anti-VGCC antibodies | Incremental response |
| Botulism | Presynaptic | SNARE cleavage | Decreased CMAP |
| Congenital myasthenic | Variable | Genetic mutations | Variable |

**Pharmacological Targets:**

Neuromuscular Blocking Agents:
- **Depolarizing (Succinylcholine)**: Binds AChR, sustained depolarization
  - Phase I block: Fasciculations, then paralysis
  - Phase II block: Prolonged exposure, resembles non-depolarizing
- **Non-depolarizing (Rocuronium, Vecuronium)**: Competitive antagonists
  - Reversed by neostigmine (AChE inhibitor) + glycopyrrolate
  - Sugammadex: Encapsulates rocuronium directly

Calcium Channel Modulation:
- Dantrolene: RyR1 blocker
- Verapamil: L-type VGCC blocker (not used in skeletal muscle)

**Muscular Dystrophies:**

Duchenne Muscular Dystrophy:
- X-linked dystrophin gene mutation
- Loss of sarcolemmal stability
- Contraction-induced damage
- Progressive weakness, cardiomyopathy
- Elevated CK (10-100x normal)
- Treatment: Corticosteroids, gene therapy (emerging)

**Advanced Concepts:**
- Catch-like property of unfused tetanus
- Post-tetanic potentiation (myosin light chain phosphorylation)
- Staircase phenomenon (treppe)
- Fatigue mechanisms (Pi accumulation, pH, SR Ca2+ depletion)`,
      keyTerms: [
        { term: 'malignant hyperthermia', definition: 'Pharmacogenetic disorder with uncontrolled muscle contraction triggered by anesthetics, due to RyR1 mutations' },
        { term: 'dantrolene', definition: 'Ryanodine receptor blocker used to treat malignant hyperthermia' },
        { term: 'CICR', definition: 'Calcium-induced calcium release - the mechanism in cardiac muscle where calcium triggers more calcium release' },
        { term: 'dystrophin', definition: 'Structural protein linking cytoskeleton to extracellular matrix; absent in Duchenne muscular dystrophy' },
        { term: 'sugammadex', definition: 'Cyclodextrin that encapsulates rocuronium for rapid reversal of neuromuscular blockade' },
      ],
      clinicalNotes: `Preoperative screening for malignant hyperthermia susceptibility is critical in patients with family history or prior suspicious reactions. The caffeine-halothane contracture test remains gold standard for diagnosis.

In myasthenia gravis, edrophonium (Tensilon) test historically used for diagnosis, but serology (anti-AChR, anti-MuSK antibodies) and electrodiagnosis now preferred. Pyridostigmine for symptomatic treatment; immunosuppression for disease modification.

Muscular dystrophies require multidisciplinary care including cardiology (surveillance for cardiomyopathy), pulmonology (respiratory function), and orthopedics (contractures, scoliosis).`,
    },
  },

  media: [
    {
      id: 'sarcomere-animation',
      type: 'animation',
      filename: 'sarcomere_contraction.mp4',
      title: 'Sarcomere Contraction Animation',
      description: 'Animated visualization of sliding filament mechanism',
    },
    {
      id: 'cross-bridge-cycle',
      type: 'diagram',
      filename: 'cross_bridge_cycle.svg',
      title: 'Cross-Bridge Cycle Steps',
      description: 'Detailed diagram of the myosin-actin cross-bridge cycle',
    },
    {
      id: 'nmj-structure',
      type: 'diagram',
      filename: 'neuromuscular_junction.svg',
      title: 'Neuromuscular Junction',
      description: 'Anatomy and signaling at the motor end plate',
    },
  ],

  citations: [
    {
      id: 'guyton-muscle',
      type: 'textbook',
      title: 'Textbook of Medical Physiology',
      authors: ['Guyton AC', 'Hall JE'],
      source: 'Elsevier',
      chapter: 'Contraction of Skeletal Muscle',
    },
    {
      id: 'huxley-sliding',
      type: 'article',
      title: 'Proposed mechanism of force generation in striated muscle',
      authors: ['Huxley AF', 'Simmons RM'],
      source: 'Nature',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-muscle-fiber-types', targetType: 'topic', relationship: 'related', label: 'Muscle Fiber Types' },
    { targetId: 'physiology-nmj', targetType: 'topic', relationship: 'related', label: 'Neuromuscular Junction' },
    { targetId: 'anatomy-skeletal-muscle', targetType: 'structure', relationship: 'see-also', label: 'Skeletal Muscle Anatomy' },
  ],

  tags: {
    systems: ['musculoskeletal', 'nervous'],
    topics: ['physiology', 'muscle', 'contraction'],
    keywords: ['sliding filament', 'sarcomere', 'myosin', 'actin', 'calcium'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'surgery', 'medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export const muscleFiberTypesContent: EducationalContent = {
  id: 'physiology-muscle-fiber-types',
  type: 'concept',
  name: 'Muscle Fiber Types',
  alternateNames: ['Slow-twitch and Fast-twitch Fibers', 'Type I and Type II Fibers'],

  levels: {
    1: {
      level: 1,
      summary: 'Your muscles have different types of fibers: some are good for endurance (slow-twitch) and some are good for power (fast-twitch).',
      explanation: `Your muscles are made of different types of fibers, kind of like how a rope can be made of different types of threads. Each type is good at different things.

**Slow-twitch fibers (Type I):**
- Red in color (like dark meat in chicken)
- Great for activities that last a long time
- Don't get tired easily
- Used for: Walking, standing, marathon running

**Fast-twitch fibers (Type II):**
- Lighter in color (like white meat in chicken)
- Great for quick, powerful movements
- Get tired more quickly
- Used for: Sprinting, jumping, lifting heavy things

**Why this matters:**
- Marathon runners have more slow-twitch fibers
- Sprinters have more fast-twitch fibers
- Everyone has both types, but the mix is different
- Training can change how your fibers work, but not completely change their type

Think about it this way: slow-twitch fibers are like a diesel engine - they're efficient and can go for a long time. Fast-twitch fibers are like a race car engine - very powerful but use up fuel quickly.`,
      keyTerms: [
        { term: 'slow-twitch', definition: 'Muscle fibers that contract slowly but can work for a long time without getting tired' },
        { term: 'fast-twitch', definition: 'Muscle fibers that contract quickly and powerfully but get tired faster' },
        { term: 'endurance', definition: 'The ability to keep doing an activity for a long time' },
      ],
      analogies: [
        'Slow-twitch fibers are like a diesel truck - steady and efficient for long hauls.',
        'Fast-twitch fibers are like a sports car - fast and powerful but needs to refuel often.',
      ],
      examples: [
        'Your postural muscles (back, core) have many slow-twitch fibers to keep you upright all day.',
        'Your calf muscles for jumping have many fast-twitch fibers for explosive power.',
      ],
    },
    2: {
      level: 2,
      summary: 'Skeletal muscle contains Type I (slow oxidative), Type IIa (fast oxidative-glycolytic), and Type IIx (fast glycolytic) fibers, each optimized for different metabolic and contractile demands.',
      explanation: `Muscle fibers are classified based on their contractile speed and metabolic properties:

**Type I (Slow Oxidative):**
- Slow contraction velocity
- High oxidative (aerobic) capacity
- Many mitochondria and capillaries
- High myoglobin content (red color)
- Fatigue resistant
- Small motor units, recruited first

**Type IIa (Fast Oxidative-Glycolytic):**
- Fast contraction velocity
- Both oxidative and glycolytic capacity
- Intermediate fatigue resistance
- Can adapt toward Type I or IIx with training
- Medium motor units

**Type IIx (Fast Glycolytic):**
- Fastest contraction velocity
- Primarily glycolytic (anaerobic) metabolism
- Low oxidative capacity
- Fatigue quickly
- Large motor units, recruited last
- Highest power output

**Fiber Type Properties:**

| Property | Type I | Type IIa | Type IIx |
|----------|--------|----------|----------|
| Speed | Slow | Fast | Fastest |
| Fatigue resistance | High | Medium | Low |
| Mitochondria | Many | Many | Few |
| Myoglobin | High | Medium | Low |
| Glycogen | Low | High | High |
| Color | Red | Red | White |

**Muscle-Specific Distribution:**
- Soleus (postural): ~80% Type I
- Gastrocnemius: ~50% Type I
- Eye muscles: Many specialized fast fibers

**Training Effects:**
- Endurance training increases oxidative capacity of all fibers
- Resistance training causes hypertrophy, especially Type II
- Fiber type conversion: IIx can shift toward IIa with training`,
      keyTerms: [
        { term: 'oxidative', definition: 'Using oxygen to produce energy (aerobic metabolism)' },
        { term: 'glycolytic', definition: 'Breaking down glucose without oxygen (anaerobic metabolism)' },
        { term: 'myoglobin', definition: 'Oxygen-carrying protein in muscle fibers (gives red color)' },
        { term: 'motor unit', definition: 'A motor neuron and all the muscle fibers it controls' },
      ],
    },
    3: {
      level: 3,
      summary: 'Muscle fiber types are determined by myosin heavy chain isoform expression and exhibit distinct contractile kinetics, calcium handling properties, and metabolic enzyme profiles that define their functional characteristics.',
      explanation: `**Myosin Heavy Chain (MHC) Isoforms:**

| Isoform | Fiber Type | ATPase Activity | Contraction Speed |
|---------|-----------|-----------------|-------------------|
| MHC I | Type I | Low | ~110 ms twitch |
| MHC IIa | Type IIa | High | ~50 ms twitch |
| MHC IIx | Type IIx | Highest | ~25 ms twitch |

Note: MHC IIb exists in rodents but not humans.

**Metabolic Enzyme Profiles:**

Oxidative enzymes (high in Type I, IIa):
- Citrate synthase (TCA cycle)
- Succinate dehydrogenase
- Cytochrome c oxidase

Glycolytic enzymes (high in Type IIx):
- Phosphofructokinase
- Lactate dehydrogenase
- Glycogen phosphorylase

**Calcium Handling Differences:**

| Parameter | Type I | Type IIx |
|-----------|--------|----------|
| SERCA isoform | SERCA2a | SERCA1a |
| SR Ca2+ release | Slower | Faster |
| Ca2+ reuptake | Slower | Faster |
| Relaxation time | Longer | Shorter |
| Parvalbumin | Low | High |

**Motor Unit Properties:**

Henneman's Size Principle:
1. Small motor neurons innervate Type I fibers
2. Low activation threshold, recruited first
3. Larger motor neurons innervate Type II fibers
4. Higher threshold, recruited as force demands increase

| Motor Unit Type | Fiber Type | Size | Innervation Ratio |
|-----------------|-----------|------|-------------------|
| Slow (S) | Type I | Small | 10-180 fibers |
| Fast fatigue-resistant (FR) | Type IIa | Medium | 300-800 fibers |
| Fast fatigable (FF) | Type IIx | Large | 300-1800 fibers |

**Clinical Relevance:**
- Sarcopenia: Preferential loss of Type II fibers with aging
- Steroid myopathy: Type II fiber atrophy
- Disuse atrophy: Affects all fibers, shifts toward IIx
- Chronic heart failure: Shift toward Type IIx, reduced oxidative capacity`,
      keyTerms: [
        { term: 'myosin heavy chain', definition: 'The motor protein isoform that determines fiber type classification' },
        { term: 'SERCA', definition: 'Sarco/endoplasmic reticulum Ca2+-ATPase - pumps calcium back into SR' },
        { term: 'parvalbumin', definition: 'Calcium-binding protein that accelerates relaxation in fast fibers' },
        { term: 'sarcopenia', definition: 'Age-related loss of muscle mass and strength' },
      ],
      clinicalNotes: 'Sarcopenia involves preferential Type II fiber atrophy, leading to decreased power and increased fall risk. Resistance training is the most effective intervention to maintain Type II fiber mass in aging.',
    },
    4: {
      level: 4,
      summary: 'Fiber type specification involves transcriptional regulation by calcineurin-NFAT, PGC-1alpha, and myogenic regulatory factors, with plasticity allowing adaptation to training, disuse, and disease states.',
      explanation: `**Transcriptional Regulation of Fiber Type:**

Slow/Oxidative Program:
- **Calcineurin-NFAT pathway**: Activity-dependent
  - Sustained calcium elevations activate calcineurin
  - NFAT translocates to nucleus
  - Activates slow MHC and oxidative genes
- **PGC-1alpha**: Master regulator of mitochondrial biogenesis
  - Induced by exercise
  - Coactivates oxidative gene transcription
  - Increases mitochondrial content and function
- **CaMK pathway**: Calcium-dependent kinase signaling

Fast/Glycolytic Program:
- **HDAC4/5**: Suppress slow fiber genes
- **Six1/Eya1**: Promote fast fiber phenotype
- **MEF2**: Activated in slow fibers, repressed in fast

**Fiber Type Plasticity:**

| Stimulus | Conversion Direction | Mechanism |
|----------|---------------------|-----------|
| Endurance training | IIx -> IIa -> I | PGC-1alpha, calcineurin |
| Resistance training | IIx -> IIa | Hypertrophy signaling |
| Denervation | All -> I | Loss of phasic activity |
| Immobilization | I/IIa -> IIx | Reduced loading |
| Cross-innervation | Adopts new nerve properties | Neural influence |

**Hybrid Fibers:**
- Many fibers express multiple MHC isoforms
- I/IIa and IIa/IIx hybrids common
- Represent transitional states
- Increase during adaptation periods

**Metabolic Plasticity:**
- Mitochondrial biogenesis: 2-4 weeks of training
- Capillary growth: Weeks to months
- Fiber type conversion: Months to years (if at all)

**Aging and Fiber Type:**
- Motor unit remodeling: Denervation and reinnervation
- Loss of fast motor neurons > slow
- Type II fiber atrophy
- Increase in hybrid fibers
- Reduced ability to generate power

**Disease States:**

| Condition | Fiber Type Changes | Mechanism |
|-----------|-------------------|-----------|
| COPD | Shift to IIx | Hypoxia, disuse |
| Heart failure | Shift to IIx, atrophy | Cachexia, deconditioning |
| Diabetes | Reduced Type I | Metabolic dysfunction |
| Spinal cord injury | Shift to IIx | Loss of neural drive |`,
      keyTerms: [
        { term: 'calcineurin', definition: 'Calcium-dependent phosphatase that activates slow fiber gene programs' },
        { term: 'PGC-1alpha', definition: 'Peroxisome proliferator-activated receptor gamma coactivator - master regulator of oxidative metabolism' },
        { term: 'NFAT', definition: 'Nuclear factor of activated T-cells - transcription factor for slow fiber genes' },
        { term: 'motor unit remodeling', definition: 'Process of denervation and reinnervation that changes motor unit composition' },
      ],
      clinicalNotes: 'Understanding fiber type plasticity is crucial for rehabilitation. Immobilization leads to rapid shifts toward fast glycolytic phenotype; exercise can reverse these changes. In spinal cord injury, electrical stimulation protocols aim to maintain muscle mass and may influence fiber type.',
    },
    5: {
      level: 5,
      summary: 'Fiber type determination integrates neural activity patterns, mechanical loading, metabolic demands, and genetic factors, with clinical implications for exercise prescription, rehabilitation, sarcopenia treatment, and understanding athletic performance genetics.',
      explanation: `**Neural Regulation of Fiber Type:**

Firing Pattern Hypothesis:
- Tonic, low-frequency firing (10-20 Hz) -> Type I phenotype
- Phasic, high-frequency firing (30-60 Hz) -> Type II phenotype
- Cross-innervation experiments demonstrate neural influence
- Chronic low-frequency stimulation converts fast to slow

**Epigenetic Regulation:**
- DNA methylation at MHC gene promoters
- Histone modifications (acetylation/deacetylation)
- HDACs (4, 5, 7, 9) repress slow fiber genes
- microRNAs (MyomiRs) regulate fiber type genes
  - miR-208b, miR-499: Promote slow phenotype
  - miR-133: Muscle-specific, affects hypertrophy

**Genetic Determinants of Fiber Type:**

ACTN3 (Alpha-actinin-3) Gene:
- R577X polymorphism affects Type IIx fibers
- R allele: Functional alpha-actinin-3
- X allele: Null allele (no alpha-actinin-3)
- RR genotype: Associated with power/sprint performance
- XX genotype: Higher in endurance athletes
- ~18% of population are XX homozygotes

Other Performance Genes:
- ACE I/D polymorphism: Endurance vs. power
- PPARGC1A variants: Oxidative capacity
- MSTN (myostatin) variants: Muscle mass

**Single Fiber Analysis Techniques:**
- Gel electrophoresis for MHC isoforms
- Immunohistochemistry with MHC antibodies
- In situ hybridization
- Single fiber proteomics

**Advanced Clinical Applications:**

Sarcopenia Treatment:
- Resistance training: Primary intervention
- Protein supplementation: Support hypertrophy
- Vitamin D: Receptor expressed in muscle
- Testosterone: Anabolic effects
- Myostatin inhibitors: Experimental

Exercise Prescription by Fiber Type:
- Type II-dominant individuals: May excel at power sports
- Type I-dominant individuals: May excel at endurance
- Training can optimize whatever fiber type mix exists

Electrical Stimulation Protocols:
- NMES for muscle maintenance in ICU
- FES cycling in spinal cord injury
- Different parameters target different fiber types

**Muscle Biopsy Applications:**
- Diagnosis of myopathies
- Fiber type analysis
- Mitochondrial enzyme histochemistry
- Immunohistochemistry for specific proteins
- Research into exercise adaptations

**Emerging Therapies:**
- Gene therapy for muscular dystrophies
- CRISPR-based approaches
- Exon skipping strategies
- Stem cell therapies`,
      keyTerms: [
        { term: 'ACTN3', definition: 'Alpha-actinin-3 gene; R577X polymorphism associated with sprint/power performance' },
        { term: 'MyomiRs', definition: 'Muscle-specific microRNAs that regulate muscle gene expression' },
        { term: 'FES', definition: 'Functional electrical stimulation - used to activate paralyzed muscles' },
        { term: 'myostatin', definition: 'Negative regulator of muscle mass; inhibitors being developed for sarcopenia' },
      ],
      clinicalNotes: `Genetic testing for athletic performance (e.g., ACTN3) is commercially available but has limited predictive value for individual athletes. Training and dedication far outweigh genetic factors for most individuals.

In the ICU, early mobilization and neuromuscular electrical stimulation may help prevent the muscle wasting that accompanies critical illness (ICU-acquired weakness). Fiber type shifts occur rapidly with immobilization and mechanical ventilation.

For sarcopenia, resistance training remains the most effective intervention. Pharmaceutical approaches (myostatin inhibitors, selective androgen receptor modulators) are under investigation.`,
    },
  },

  media: [
    {
      id: 'fiber-type-histology',
      type: 'histology',
      filename: 'fiber_types_atpase.jpg',
      title: 'ATPase Staining of Fiber Types',
      description: 'Muscle biopsy showing Type I (light) and Type II (dark) fibers',
    },
    {
      id: 'fiber-comparison-diagram',
      type: 'diagram',
      filename: 'fiber_type_comparison.svg',
      title: 'Fiber Type Comparison Chart',
      description: 'Visual comparison of Type I, IIa, and IIx properties',
    },
  ],

  citations: [
    {
      id: 'schiaffino-fiber-types',
      type: 'article',
      title: 'Fiber Types in Mammalian Skeletal Muscles',
      authors: ['Schiaffino S', 'Reggiani C'],
      source: 'Physiological Reviews',
    },
    {
      id: 'pette-plasticity',
      type: 'article',
      title: 'Mammalian Skeletal Muscle Fiber Type Transitions',
      authors: ['Pette D', 'Staron RS'],
      source: 'International Review of Cytology',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-muscle-contraction', targetType: 'topic', relationship: 'related', label: 'Muscle Contraction' },
    { targetId: 'physiology-exercise', targetType: 'topic', relationship: 'related', label: 'Exercise Physiology' },
    { targetId: 'condition-sarcopenia', targetType: 'condition', relationship: 'see-also', label: 'Sarcopenia' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['physiology', 'muscle', 'fiber types'],
    keywords: ['Type I', 'Type II', 'slow-twitch', 'fast-twitch', 'oxidative', 'glycolytic'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export const musclePhysiologyContent = {
  muscleContraction: muscleContractionContent,
  muscleFiberTypes: muscleFiberTypesContent,
};
