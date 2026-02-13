/**
 * Hearing Physiology - Comprehensive Educational Content
 *
 * Covers the physiological mechanisms of sound perception,
 * from acoustic wave transduction to auditory cortex processing.
 */

import { EducationalContent } from '../../../types';

export const hearingPhysiology: EducationalContent = {
  id: 'ent-hearing-physiology',
  type: 'process',
  name: 'Hearing Physiology',
  alternateNames: ['Auditory Physiology', 'Sound Perception', 'Auditory Transduction'],
  fmaId: 'FMA:67889',

  levels: {
    1: {
      level: 1,
      summary: 'Hearing works when sound waves travel through your ear and get changed into signals your brain can understand.',
      explanation: `Have you ever wondered how you can hear your friend talking, music playing, or a dog barking? It all happens through an amazing process called hearing!

**How Sound Gets to Your Ears:**

Sound is actually vibrations in the air, like ripples in a pond when you throw a stone. When something makes a noise (like someone clapping), it pushes the air around it, creating waves that travel to your ears.

**The Journey of Sound Through Your Ear:**

1. **Catching the Sound**: Your outer ear (the part you can see) catches sound waves like a satellite dish and funnels them into your ear canal.

2. **Making the Eardrum Vibrate**: The sound waves hit your eardrum (a thin skin at the end of the ear canal), making it shake back and forth, or "vibrate."

3. **The Tiny Bone Chain**: Behind your eardrum are three tiny bones - the smallest bones in your body! They're called the hammer, anvil, and stirrup. When the eardrum vibrates, it shakes these bones one after another, like dominoes.

4. **The Snail Shell**: The last tiny bone pushes on a special part of your inner ear shaped like a snail shell (called the cochlea). Inside are tiny hair cells floating in liquid.

5. **Hair Cells Do the Magic**: When the liquid moves, the tiny hair cells bend and create electrical signals - like tiny batteries turning on!

6. **Brain Power**: These electrical signals travel through a nerve (like a telephone wire) to your brain. Your brain figures out what the sound is: Is it a friend's voice? Music? A warning signal?

**Fun Facts:**
- Your ears can hear sounds 24 hours a day, even while you're sleeping!
- Your brain can tell which direction sound is coming from because your ears are on opposite sides of your head
- The tiny bones in your ear are fully grown when you're born - they never get bigger!`,
      keyTerms: [
        { term: 'sound waves', definition: 'Vibrations that travel through the air and let us hear sounds' },
        { term: 'vibrate', definition: 'To shake back and forth very quickly' },
        { term: 'eardrum', definition: 'A thin piece of skin that shakes when sound hits it' },
        { term: 'hair cells', definition: 'Tiny cells in your inner ear that turn sound vibrations into signals for your brain' },
        { term: 'cochlea', definition: 'The snail-shaped part of your inner ear filled with liquid and hair cells' },
      ],
      analogies: [
        'Sound waves are like ripples in a pond - they spread out from where the sound is made.',
        'Your eardrum is like a drum in a band - it vibrates when sound hits it.',
        'The tiny ear bones work like dominoes, passing the vibration from one to the next.',
        'Hair cells are like tiny piano keys - different ones respond to different sounds.',
        'The nerve from your ear to your brain is like a telephone wire carrying messages.',
      ],
      examples: [
        'When you cup your hand behind your ear, you hear better because you catch more sound waves.',
        'Standing close to a speaker at a concert makes the sound loud because the sound waves are stronger.',
        'You can hear someone even if you cannot see them because sound waves travel around corners.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hearing involves the mechanical transmission of sound through the outer and middle ear, followed by transduction in the cochlea where hair cells convert vibrations into electrical signals for neural processing.',
      explanation: `## The Physics of Sound

Sound travels as **longitudinal pressure waves** through air (or other media). These waves have two key properties:

- **Frequency** (measured in Hertz, Hz): How many waves per second - determines pitch
  - Low frequency (20-250 Hz) = low/bass sounds
  - High frequency (2,000-20,000 Hz) = high/treble sounds
  - Human hearing range: approximately 20 Hz to 20,000 Hz

- **Amplitude** (measured in decibels, dB): The height of the wave - determines loudness
  - Normal conversation: ~60 dB
  - Rock concert: ~110 dB
  - Pain threshold: ~130 dB

## Sound Transmission Through the Ear

### Outer Ear Function
- The **pinna** (visible ear) collects and directs sound waves
- The **ear canal** channels sound to the eardrum
- The canal's shape naturally amplifies frequencies around 3,000 Hz (important for speech)

### Middle Ear Function
The middle ear solves an important problem: sound travels easily through air but poorly into fluid (inner ear).

**The ossicles (three tiny bones) provide amplification through:**
1. **Area ratio**: The eardrum is about 17 times larger than the oval window (where sound enters the inner ear). This concentrates the force.
2. **Lever action**: The bones act as levers, providing additional mechanical advantage.
3. **Combined effect**: ~20-25 fold amplification (about 25 dB gain)

**Protective reflexes:**
- The **acoustic reflex** contracts small muscles to dampen loud sounds
- This protects the delicate inner ear from damage

### Inner Ear Transduction

**The Cochlea:**
- Fluid-filled, spiral structure (2.5 turns)
- Contains three chambers separated by membranes
- The **basilar membrane** vibrates in response to sound

**Hair Cell Function:**
- **Inner hair cells** (~3,500): The true hearing receptors
  - Convert mechanical motion to electrical signals
  - Release neurotransmitters to stimulate hearing nerve
- **Outer hair cells** (~12,000): The amplifiers
  - Actively contract and expand
  - Boost soft sounds by ~40 dB

**Frequency Mapping (Tonotopy):**
- Different parts of the cochlea respond to different frequencies
- Base (near entrance) = high frequencies
- Apex (tip) = low frequencies

## Neural Processing

1. **Spiral ganglion neurons** carry signals from hair cells
2. **Auditory nerve** (CN VIII) transmits to brainstem
3. **Brainstem nuclei** process timing, location, and basic features
4. **Auditory cortex** interprets complex sounds (speech, music)`,
      keyTerms: [
        { term: 'frequency', definition: 'The number of sound wave cycles per second, measured in Hertz (Hz); determines the pitch we perceive', pronunciation: 'FREE-kwen-see' },
        { term: 'amplitude', definition: 'The height or strength of a sound wave; determines how loud we perceive the sound', pronunciation: 'AM-plih-tood' },
        { term: 'ossicles', definition: 'The three small bones of the middle ear (malleus, incus, stapes) that amplify and transmit sound', pronunciation: 'OSS-ih-kulz' },
        { term: 'transduction', definition: 'The process of converting one form of energy to another; in hearing, mechanical to electrical', pronunciation: 'trans-DUK-shun' },
        { term: 'tonotopy', definition: 'The organized mapping of different sound frequencies to different locations in the cochlea and auditory pathway', pronunciation: 'toh-NAH-toh-pee' },
        { term: 'basilar membrane', definition: 'The membrane in the cochlea that vibrates in response to sound, enabling frequency discrimination' },
      ],
      analogies: [
        'The cochlea is like a piano keyboard rolled into a spiral - different keys (locations) play different notes (frequencies).',
        'Hair cells work like microphones, converting sound vibrations into electrical signals.',
        'The acoustic reflex is like your eye blinking to protect against bright light - automatic protection.',
      ],
    },
    3: {
      level: 3,
      summary: 'Auditory physiology encompasses the acoustic mechanics of the external and middle ear, cochlear hydrodynamics, hair cell mechanoelectrical transduction, and the hierarchical processing in the central auditory pathway.',
      explanation: `## Acoustic Physics and Impedance Matching

### The Impedance Mismatch Problem
- Air has low acoustic impedance (~415 Pa·s/m)
- Cochlear fluid has high impedance (~1.5 × 10⁶ Pa·s/m)
- Without amplification, ~99.9% of sound energy would be reflected at the air-fluid interface (30 dB loss)

### Middle Ear Transformer Mechanism

**Three amplification mechanisms:**

1. **Area Ratio (Hydraulic Ratio)**
   - Tympanic membrane effective area: ~55 mm²
   - Stapes footplate area: ~3.2 mm²
   - Ratio: ~17:1 (produces ~24 dB gain)

2. **Lever Action of Ossicular Chain**
   - Malleus handle length / incus long process length ≈ 1.3:1
   - Provides additional ~2 dB gain

3. **Curved Membrane Effect**
   - Eardrum's conical shape provides ~2 dB gain

**Total middle ear gain: ~25-30 dB** (compensates for impedance mismatch)

### Middle Ear Muscle Reflexes

**Stapedius Reflex:**
- Innervation: Facial nerve (CN VII)
- Action: Stiffens ossicular chain
- Threshold: ~80 dB SPL above hearing threshold
- Latency: 25-150 ms
- Function: Attenuates low-frequency sounds, protects against loud sounds

**Tensor Tympani:**
- Innervation: Trigeminal nerve (CN V)
- Action: Tenses tympanic membrane
- Less consistent activation in humans

## Cochlear Mechanics

### Fluid Wave Mechanics

When the stapes pushes on the oval window:
1. Creates pressure wave in scala vestibuli (perilymph)
2. Wave travels along basilar membrane
3. Membrane displacement peaks at frequency-specific location
4. Energy dissipates at round window

### Traveling Wave Theory (von Békésy)

- Wave amplitude grows as it travels toward its characteristic frequency location
- Maximum displacement occurs at resonant point
- Wave dies rapidly beyond this point
- Base: narrow, stiff membrane → high frequency resonance
- Apex: wide, flexible membrane → low frequency resonance

### Active Cochlear Mechanics

**Outer Hair Cell Motility:**
- OHCs contain prestin (motor protein) in lateral membrane
- Depolarization → cell shortening; Hyperpolarization → elongation
- Operates at acoustic frequencies (up to 20 kHz)
- Cycle-by-cycle amplification of basilar membrane motion

**Nonlinear Compression:**
- Soft sounds: High gain (~40-60 dB amplification)
- Loud sounds: Low gain (compression)
- Enables wide dynamic range (120 dB)
- Loss of OHCs → reduced dynamic range, recruitment

## Mechanoelectrical Transduction

### Hair Cell Biophysics

**Stereocilia Organization:**
- Graded heights forming staircase pattern
- Connected by tip links (cadherin-23 + protocadherin-15)
- Deflection toward tallest row → channel opening
- Deflection away → channel closing

**Transduction Channel Properties:**
- Located at tips of shorter stereocilia
- TMC1/TMC2 proteins form channel pore
- Rapid kinetics (10-100 μs activation)
- ~10% resting open probability (tonic activity)

### Endocochlear Potential

**Electrochemical Driving Force:**
- Endolymph: K⁺ ~150 mM, +80 mV (endocochlear potential)
- Hair cell resting potential: -45 mV
- Total driving force for K⁺: ~125 mV
- Generated by stria vascularis (marginal cells)

**Ion Flow:**
1. K⁺ enters through MET channels (depolarization)
2. K⁺ exits through basolateral K⁺ channels
3. K⁺ recycled through supporting cells and spiral ligament back to stria

## Auditory Neural Coding

### Inner Hair Cell Synapses

**Ribbon Synapses:**
- Specialized for sustained, graded neurotransmitter release
- Contain synaptic ribbon (dense body)
- Release glutamate onto Type I spiral ganglion neurons
- 10-20 synapses per IHC with different thresholds and spontaneous rates

### Spiral Ganglion Neurons

**Type I (95%):**
- Myelinated, bipolar
- Each contacts single IHC
- Tonotopically organized
- Varied spontaneous rates (low, medium, high)
- Encode sound intensity through firing rate and recruitment

**Type II (5%):**
- Unmyelinated
- Contact multiple OHCs
- Function: possibly cochlear damage sensing

### Temporal Coding

**Phase Locking:**
- Neurons fire preferentially at specific phase of sound wave
- Strong below 1-2 kHz
- Declines above 4 kHz
- Important for speech perception, pitch perception, localization`,
      keyTerms: [
        { term: 'acoustic impedance', definition: 'The resistance to sound transmission in a medium; product of density and sound velocity' },
        { term: 'prestin', definition: 'Motor protein (SLC26A5) in outer hair cell membrane enabling electromotility and cochlear amplification' },
        { term: 'tip links', definition: 'Protein filaments connecting stereocilia that gate mechanotransduction channels' },
        { term: 'endocochlear potential', definition: 'The +80 mV potential in endolymph generated by stria vascularis, essential for hair cell transduction' },
        { term: 'ribbon synapse', definition: 'Specialized synapse with continuous vesicle release machinery, found in hair cells and photoreceptors' },
        { term: 'phase locking', definition: 'The tendency of auditory neurons to fire at a particular phase of the stimulus waveform' },
      ],
      clinicalNotes: 'Otoacoustic emissions (OAEs) result from OHC motility and provide a clinical test of cochlear function. Absent OAEs with present auditory brainstem responses (ABR) suggests auditory neuropathy spectrum disorder (ANSD). Aminoglycoside ototoxicity preferentially affects OHCs, causing recruitment and poor speech discrimination.',
    },
    4: {
      level: 4,
      summary: 'Advanced auditory physiology integrates molecular mechanisms of hair cell mechanotransduction, cochlear amplifier nonlinearities, neural coding strategies for spectral and temporal information, and central auditory processing for complex sound analysis.',
      explanation: `## Molecular Mechanotransduction

### Transduction Apparatus

**Tip Link Molecular Structure:**
- Upper portion: Cadherin-23 (CDH23)
- Lower portion: Protocadherin-15 (PCDH15)
- Connected at their N-termini
- Mutations → Usher syndrome (deafness + retinitis pigmentosa)

**MET Channel Complex:**
- Pore: TMC1/TMC2 (transmembrane channel-like proteins)
- Accessory proteins: TMIE, LHFPL5, CIB2
- Located at tips of row 1 and row 2 stereocilia
- Single-channel conductance: ~100 pS in mature hair cells

**Adaptation Mechanisms:**
- **Fast adaptation** (submillisecond): Ca²⁺-dependent channel closure
  - Ca²⁺ enters through MET channel
  - Binds near channel, promotes closure
  - Sets operating point for maximal sensitivity
- **Slow adaptation** (10-100 ms): Motor-based tip link tensioning
  - Involves myosin motors (Myo1c, Myo7a)
  - Adjusts tip link tension
  - Maintains sensitivity across different static displacements

### Hair Cell Voltage Responses

**Inner Hair Cell Properties:**
- Resting potential: ~-45 mV
- AC receptor potential follows sound waveform (low frequencies)
- DC component increases with intensity
- BK channels (large-conductance K⁺) shape voltage response
- KCNQ4 (Kv7.4) sets resting potential

**Synaptic Transmission:**
- Ribbon body tethers ~100-200 vesicles
- CaV1.3 channels clustered at active zones
- Otoferlin: calcium sensor for vesicle fusion
- Multi-vesicular release enables high sustained rates (>400 Hz)
- Glutamate released onto AMPA receptors on afferent dendrites

## Cochlear Amplifier in Detail

### OHC Electromotility

**Prestin Mechanism:**
- Voltage sensor: Cl⁻ and HCO₃⁻ ions as extrinsic charge carriers
- Conformation change with membrane voltage
- Depolarization: prestin contracts, cell shortens
- Hyperpolarization: prestin expands, cell elongates
- Operating frequency: up to 70 kHz (limited by membrane capacitance)

**Somatic vs. Hair Bundle Motility:**
- Somatic (prestin): Main cochlear amplifier in mammals
- Hair bundle motility: Contributes at low frequencies, dominant in non-mammals

### Nonlinear Properties

**Compression:**
- Input-output function: Linear at low levels, compressive at moderate-to-high
- Compression ratio: ~4:1 in mid-frequencies
- Essential for encoding 120 dB range of hearing within ~40 dB neural dynamic range

**Two-Tone Suppression:**
- Second tone reduces response to probe tone
- Reflects OHC saturation
- Basis for cochlear masking patterns

**Distortion Products:**
- Nonlinear interaction generates new frequencies
- f₂-f₁, 2f₁-f₂ (most prominent clinically)
- DPOAE: Distortion product otoacoustic emission (2f₁-f₂)
- Clinical measure of OHC function at specific frequency

### Otoacoustic Emissions

| Type | Mechanism | Clinical Application |
|------|-----------|---------------------|
| SOAE | Spontaneous OHC oscillation | Limited (present in ~70% normal ears) |
| TEOAE | Reflection of transient stimulus | Newborn hearing screening |
| DPOAE | Nonlinear intermodulation | Frequency-specific assessment |
| SFOAE | Stimulus frequency reflection | Research (particularly Menieres) |

## Central Auditory Processing

### Cochlear Nucleus

**Dorsal Cochlear Nucleus (DCN):**
- Complex circuitry with interneurons
- Processes spectral notches (pinna cues)
- Projects to inferior colliculus
- Implicated in tinnitus generation

**Ventral Cochlear Nucleus:**
- Bushy cells: Preserve timing (via calyx of Held synapses)
- Stellate cells: Code spectral information
- Octopus cells: Onset detection

### Superior Olivary Complex

**Medial Superior Olive (MSO):**
- Binaural coincidence detection
- Computes interaural time differences (ITD)
- Low-frequency localization
- Jeffress model with delay lines

**Lateral Superior Olive (LSO):**
- Computes interaural level differences (ILD)
- High-frequency localization
- Receives excitation from ipsilateral ear, inhibition from contralateral

### Inferior Colliculus

- Nearly all ascending pathways converge
- Integration of multiple cues
- Spectrotemporal receptive fields
- Duration tuning, FM sweep detection
- Attentional modulation begins here

### Auditory Cortex Organization

**Primary Auditory Cortex (A1):**
- Tonotopic organization (iso-frequency bands)
- Columns for binaural processing
- Sparse coding of complex sounds
- Rapid plasticity with learning

**Belt and Parabelt Areas:**
- Ventral stream: "What" pathway (sound identification)
- Dorsal stream: "Where" pathway (spatial processing)
- Species-specific vocalizations, speech

## Temporal Processing

### Envelope Following

- Amplitude modulation (AM) encoded by population firing patterns
- Modulation transfer functions: Best ~4-100 Hz
- Important for speech perception (syllable rate)
- Degraded in aging, noise exposure

### Gap Detection

- Minimum detectable gap: 2-3 ms in normal hearing
- Requires neural synchrony
- Impaired in auditory processing disorders
- Degraded in cochlear implant users`,
      keyTerms: [
        { term: 'otoferlin', definition: 'Calcium sensor protein essential for synaptic vesicle exocytosis at the hair cell ribbon synapse; mutations cause profound deafness' },
        { term: 'adaptation', definition: 'The decline in transduction current during sustained stereocilia displacement, maintaining sensitivity and expanding dynamic range' },
        { term: 'interaural time difference', definition: 'The difference in arrival time of sound between the two ears; primary cue for low-frequency sound localization' },
        { term: 'sparse coding', definition: 'Neural representation where only a small fraction of neurons are active at any time, enabling efficient encoding' },
        { term: 'modulation transfer function', definition: 'The neural systems ability to follow amplitude modulation at different rates; critical for speech understanding' },
        { term: 'calyx of Held', definition: 'Giant synaptic terminal in the auditory brainstem enabling extremely fast and reliable synaptic transmission' },
      ],
      clinicalNotes: 'Otoferlin mutations (OTOF gene) cause auditory neuropathy with absent ABR but present OAEs. This is amenable to gene therapy (currently in clinical trials). Connexin 26 (GJB2) mutations disrupt potassium recycling; most common cause of genetic hearing loss. Expanded newborn screening with automated ABR can detect auditory neuropathy missed by OAE-only protocols.',
    },
    5: {
      level: 5,
      summary: 'Expert understanding of auditory physiology encompasses emerging gene therapy targets, cochlear implant neural interfaces, hidden hearing loss mechanisms, precision medicine approaches to hearing disorders, and computational models of central auditory processing.',
      explanation: `## Molecular Genetics and Gene Therapy

### Genetic Architecture of Hearing

**Key Genes and Their Functions:**

| Gene | Protein | Function | Associated Disorder |
|------|---------|----------|---------------------|
| GJB2 | Connexin 26 | Gap junction (K⁺ recycling) | DFNB1 (50% prelingual HL) |
| MYO7A | Myosin VIIa | Stereocilia organization | Usher 1B, DFNA11 |
| TMC1 | TMC1 | MET channel | DFNB7/11, DFNA36 |
| OTOF | Otoferlin | Synaptic vesicle release | ANSD (DFNB9) |
| SLC26A4 | Pendrin | Anion transporter | Pendred syndrome, EVA |
| KCNQ4 | Kv7.4 | Hair cell K⁺ channel | DFNA2 |
| TECTA | Alpha-tectorin | Tectorial membrane | DFNA8/12, DFNB21 |
| STRC | Stereocilin | Stereocilia coupling | DFNB16 (common) |

### Gene Therapy Approaches

**Current Clinical Trials:**
1. **OTOF gene therapy** (AAV-OTOF)
   - Target: Auditory neuropathy due to otoferlin deficiency
   - Vector: AAV (often AAV1 or AAVAnc80)
   - Delivery: Round window or cochleostomy
   - Results: Dramatic hearing restoration in children
   - Challenge: Dual-vector approach needed (gene too large for single AAV)

2. **GJB2 gene therapy**
   - Target: Connexin 26 deficiency
   - Vector: AAV targeting supporting cells
   - Challenge: Supporting cell delivery, timing of intervention

3. **TMC1 gene therapy**
   - Target: Hair cell transduction channel
   - Vector: AAV delivering TMC1/TMC2
   - Preclinical: Hearing restoration in mouse models

**Emerging Approaches:**
- CRISPR-based editing for dominant mutations
- Antisense oligonucleotides for splice variants
- Hair cell regeneration via Atoh1 delivery

## Hidden Hearing Loss and Synaptopathy

### Cochlear Synaptopathy

**Definition:** Loss of ribbon synapses between IHCs and auditory nerve fibers without hair cell loss or threshold shift.

**Pathophysiology:**
- Noise exposure, aging preferentially damage low-spontaneous rate fibers
- These fibers encode sounds in noise, at high levels
- Normal audiogram (thresholds intact)
- Impaired speech-in-noise perception, hyperacusis

**Evidence:**
- Animal models: Synapse loss without threshold change post-noise
- Humans: Reduced wave I ABR amplitude with normal thresholds
- EFR (envelope following response) deficits

**Diagnostic Approaches:**
- High-level wave I ABR amplitude
- Extended high-frequency audiometry
- Speech-in-noise testing (QuickSIN, WIN)
- Envelope following responses

**Implications:**
- Explains "King Kopetzky syndrome" (auditory processing complaints with normal audiogram)
- May represent precursor to later threshold shift
- Noise exposure guidelines may need revision

### Stria Vascularis Pathology

**Endocochlear Potential Decline:**
- Age-related strial atrophy
- Reduced EP → reduced hair cell driving force
- Affects all frequencies uniformly
- Contributes to presbycusis metabolic phenotype

**Marginal Cell Dysfunction:**
- KCNJ10 (Kir4.1) mutations
- Na⁺/K⁺-ATPase deficiency
- Drug toxicity (loop diuretics)

## Cochlear Implant Physiology

### Electrode-Neural Interface

**Current Spread:**
- Each electrode activates broad neural population
- Limits spectral resolution (~8 effective channels)
- Strategies to focus current:
  - Multipolar stimulation
  - Current focusing (triphasic pulses)
  - Optical cochlear implants (emerging)

**Neural Survival and Electrode Position:**
- Closer electrodes to modiolus → lower thresholds, less current spread
- Perimodiolar arrays vs. lateral wall arrays
- Neurotrophic factors may preserve spiral ganglion neurons (BDNF, NT-3)

### Coding Strategies

**Current Clinical Strategies:**
- CIS (Continuous Interleaved Sampling)
- ACE (Advanced Combinational Encoder)
- SPEAK, HiRes, FSP

**Temporal Fine Structure:**
- F0 and fine structure poorly represented
- New strategies: Fine Structure Processing (FSP), FS4
- Improves music perception, tonal languages

### Bimodal and Hybrid Hearing

**Electroacoustic Stimulation (EAS):**
- Acoustic amplification at low frequencies + CI at high frequencies
- Requires hearing preservation surgery
- Soft surgery, minimal insertion depth
- Superior speech-in-noise, music perception

## Computational Auditory Neuroscience

### Peripheral Models

**Auditory Nerve Models:**
- Bruce-Zilany-Carney model: Detailed IHC/AN response
- Verhulst model: Cochlear mechanics + AN
- Applications: CI strategy optimization, hearing aid fitting

### Central Processing Models

**Spectrotemporal Receptive Fields (STRFs):**
- Linear filter approximating neuron's response
- Spectral modulation (ripple) and temporal modulation
- Hierarchical complexity from A1 → belt areas

**Deep Learning Approaches:**
- CNNs for speech processing mirror auditory cortex
- Predict neural responses from stimuli
- May inform CI coding strategies

## Precision Medicine Approaches

### Audiogenomics

**Clinical Application:**
- Genetic testing guides management:
  - OTOF: CI candidate, gene therapy trial eligible
  - SLC26A4: Monitor for progression, EVA precautions
  - MYO7A: Usher syndrome surveillance
  - GJB2/GJB6: Stable loss, good CI outcomes

### Pharmacological Otoprotection

**Emerging Agents:**
- SPI-1005 (ebselen): Glutathione mimetic, completed Phase 2
- OTO-413 (BDNF): Neurotrophic factor gel, synaptic repair
- FX-322: Progenitor activation, hair cell regeneration
- AM-111 (brimapitide): JNK inhibitor for sudden hearing loss

### Personalized Amplification

**Individualized Fitting:**
- Extended audiometry (above 8 kHz)
- Loudness scaling measures
- Cognitive assessment → processing requirements
- Genetic profile → amplification vs. CI decision`,
      keyTerms: [
        { term: 'hidden hearing loss', definition: 'Difficulty understanding speech in noise despite normal audiometric thresholds, attributed to cochlear synaptopathy' },
        { term: 'cochlear synaptopathy', definition: 'Loss of ribbon synapses between inner hair cells and auditory nerve fibers without hair cell death' },
        { term: 'electroacoustic stimulation', definition: 'Hybrid hearing using acoustic amplification for low frequencies and cochlear implant for high frequencies' },
        { term: 'spectrotemporal receptive field', definition: 'A linear filter describing how a neurons firing rate depends on the spectrotemporal pattern of the sound stimulus' },
        { term: 'audiogenomics', definition: 'Application of genomic information to guide diagnosis, prognosis, and treatment of hearing disorders' },
        { term: 'envelope following response', definition: 'Electrophysiologic measure of the auditory systems ability to track amplitude modulation; sensitive to synaptopathy' },
      ],
      clinicalNotes: `Current clinical considerations:

1. **Gene therapy era**: OTOF gene therapy (DB-OTO, AK-OTOF) showing dramatic results; identify candidates through genetic testing

2. **Newborn screening evolution**: Universal genetic screening proposed to complement physiologic testing

3. **CI candidacy expansion**:
   - Single-sided deafness now FDA approved
   - Hybrid devices for ski-slope losses
   - Earlier implantation ages (< 12 months)

4. **Hidden hearing loss**: Consider in patients with speech-in-noise complaints despite normal audiogram; noise exposure history important

5. **Ototoxicity monitoring**: Extended high-frequency audiometry and DPOAEs detect early changes before affecting speech frequencies

6. **Regenerative medicine timeline**: Hair cell regeneration remains preclinical; synaptic repair (BDNF) in trials; realistic timeline 5-10 years`,
    },
  },

  media: [
    {
      id: 'sound-wave-properties',
      type: 'diagram',
      filename: 'sound-wave-frequency-amplitude.svg',
      title: 'Sound Wave Properties',
      description: 'Illustration of frequency and amplitude in sound waves',
    },
    {
      id: 'middle-ear-transformer',
      type: 'diagram',
      filename: 'middle-ear-impedance-matching.svg',
      title: 'Middle Ear Transformer',
      description: 'Diagram showing how the middle ear amplifies sound',
    },
    {
      id: 'cochlear-traveling-wave',
      type: 'animation',
      filename: 'basilar-membrane-traveling-wave.mp4',
      title: 'Cochlear Traveling Wave',
      description: 'Animation of the traveling wave along the basilar membrane',
    },
    {
      id: 'hair-cell-transduction',
      type: 'diagram',
      filename: 'hair-cell-mechanotransduction.svg',
      title: 'Hair Cell Transduction',
      description: 'Molecular mechanism of hair cell mechanotransduction',
    },
    {
      id: 'central-auditory-pathway',
      type: 'diagram',
      filename: 'auditory-pathway-brainstem-cortex.svg',
      title: 'Central Auditory Pathway',
      description: 'Pathway from cochlea to auditory cortex',
    },
  ],

  citations: [
    {
      id: 'fettiplace-2017',
      type: 'article',
      title: 'Hair Cell Transduction, Tuning, and Synaptic Transmission in the Mammalian Cochlea',
      authors: ['Fettiplace, R.', 'Kim, K.X.'],
      source: 'Comprehensive Physiology',
      page: '1197-1227',
    },
    {
      id: 'ashmore-2008',
      type: 'article',
      title: 'Cochlear Outer Hair Cell Motility',
      authors: ['Ashmore, J.'],
      source: 'Physiological Reviews',
      page: '173-210',
    },
    {
      id: 'liberman-2017',
      type: 'article',
      title: 'Noise-Induced and Age-Related Hearing Loss: New Perspectives and Potential Therapies',
      authors: ['Liberman, M.C.', 'Kujawa, S.G.'],
      source: 'F1000Research',
    },
    {
      id: 'moller-hearing',
      type: 'textbook',
      title: 'Hearing: Anatomy, Physiology, and Disorders of the Auditory System',
      authors: ['Moller, A.R.'],
      source: 'Academic Press',
    },
  ],

  crossReferences: [
    { targetId: 'ent-ear-anatomy', targetType: 'structure', relationship: 'related', label: 'Ear Anatomy' },
    { targetId: 'ent-hearing-loss', targetType: 'condition', relationship: 'related', label: 'Hearing Loss' },
    { targetId: 'ent-tinnitus', targetType: 'condition', relationship: 'related', label: 'Tinnitus' },
    { targetId: 'neuro-auditory-cortex', targetType: 'structure', relationship: 'related', label: 'Auditory Cortex' },
  ],

  tags: {
    systems: ['auditory', 'nervous'],
    topics: ['physiology', 'sensory', 'neuroscience'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hearingPhysiology;
