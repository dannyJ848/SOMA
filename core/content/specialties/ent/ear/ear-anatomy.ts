/**
 * Ear Anatomy - Comprehensive Educational Content
 *
 * Covers the anatomical structure of the external, middle, and inner ear,
 * including the auditory and vestibular systems.
 */

import { EducationalContent } from '../../../types';

export const earAnatomy: EducationalContent = {
  id: 'ent-ear-anatomy',
  type: 'structure',
  name: 'Ear Anatomy',
  alternateNames: ['Auditory System Anatomy', 'Aural Anatomy', 'Auris'],
  fmaId: 'FMA:52780',

  levels: {
    1: {
      level: 1,
      summary: 'Your ear has three parts that work together to help you hear sounds and keep your balance.',
      explanation: `Your ear is an amazing organ that does two important jobs: it helps you hear sounds and keeps you balanced so you don't fall over!

**The Three Parts of Your Ear:**

1. **Outer Ear** - This is the part you can see on the side of your head! It includes:
   - The curved part on the outside (called the pinna or auricle) that catches sounds like a funnel
   - The ear canal - a tunnel that leads inside your head
   - At the end of the canal is the eardrum, a thin skin that vibrates when sound hits it

2. **Middle Ear** - Behind your eardrum is a small air-filled space with three tiny bones:
   - The hammer (malleus)
   - The anvil (incus)
   - The stirrup (stapes) - the smallest bone in your body!
   - These bones pass vibrations from the eardrum to the inner ear

3. **Inner Ear** - The deepest part, shaped like a snail shell:
   - The cochlea (the snail-shell part) turns vibrations into signals your brain understands as sound
   - The semicircular canals help you keep your balance

Sound travels from the outer ear, through the middle ear, to the inner ear, and then to your brain!`,
      keyTerms: [
        { term: 'eardrum', definition: 'A thin piece of skin that vibrates when sound waves hit it' },
        { term: 'ear canal', definition: 'The tunnel from outside your ear to your eardrum' },
        { term: 'cochlea', definition: 'The snail-shaped part of your inner ear that helps you hear' },
        { term: 'pinna', definition: 'The curved outer part of your ear that you can see' },
        { term: 'balance', definition: 'Being able to stand and move without falling over' },
      ],
      analogies: [
        'Your outer ear works like a satellite dish, catching sound waves and directing them into your ear canal.',
        'The three tiny bones in your middle ear are like a chain of dominoes, passing vibrations from one to the next.',
        'Your cochlea is like a piano keyboard rolled up into a snail shell, with different parts responding to different sounds.',
      ],
      examples: [
        'When you cup your hand behind your ear, you hear better because you are making your outer ear bigger to catch more sound.',
        'Your ears pop on an airplane because the pressure changes in your middle ear.',
      ],
    },
    2: {
      level: 2,
      summary: 'The ear consists of external, middle, and inner divisions that convert sound waves to neural signals while also maintaining balance through the vestibular system.',
      explanation: `The ear is a complex sensory organ divided into three anatomical regions, each with specific functions in hearing and balance.

## External Ear (Outer Ear)

**Auricle (Pinna):**
- Made of elastic cartilage covered by skin
- Key parts: helix (outer rim), antihelix, tragus, antitragus, lobule (earlobe)
- Collects and directs sound waves into the ear canal
- The shape helps you determine where sounds come from

**External Acoustic Meatus (Ear Canal):**
- About 2.5 cm long in adults
- Outer 1/3 is cartilage with hair follicles and cerumen (earwax) glands
- Inner 2/3 is bony
- Ends at the tympanic membrane (eardrum)

**Tympanic Membrane (Eardrum):**
- Thin, cone-shaped membrane about 9-10mm in diameter
- Separates external and middle ear
- Vibrates in response to sound waves
- Contains the umbo (attachment point of the malleus)

## Middle Ear (Tympanic Cavity)

**Location:** Air-filled space within the temporal bone

**Ossicles (Three Bones):**
1. Malleus (hammer) - attached to eardrum
2. Incus (anvil) - connects malleus to stapes
3. Stapes (stirrup) - attaches to oval window of inner ear

**Other Structures:**
- Eustachian tube: connects to throat, equalizes pressure
- Tensor tympani and stapedius muscles: protect from loud sounds
- Oval window and round window: interfaces with inner ear

## Inner Ear (Labyrinth)

**Bony Labyrinth:** Fluid-filled (perilymph) cavities in temporal bone

**Membranous Labyrinth:** Fluid-filled (endolymph) tubes inside bony labyrinth

**Two Main Systems:**
1. **Cochlea (Hearing):**
   - Spiral-shaped, 2.5 turns
   - Contains organ of Corti with hair cells
   - Converts mechanical vibrations to electrical signals

2. **Vestibular System (Balance):**
   - Three semicircular canals (detect rotation)
   - Utricle and saccule (detect linear movement and gravity)`,
      keyTerms: [
        { term: 'auricle', definition: 'The visible outer ear, made of cartilage, that collects sound waves', pronunciation: 'OR-ih-kul' },
        { term: 'tympanic membrane', definition: 'The eardrum; a thin membrane that vibrates in response to sound waves', pronunciation: 'tim-PAN-ik' },
        { term: 'ossicles', definition: 'The three small bones of the middle ear (malleus, incus, stapes) that transmit vibrations', pronunciation: 'OSS-ih-kulz' },
        { term: 'cochlea', definition: 'The spiral-shaped structure of the inner ear responsible for hearing', pronunciation: 'KOK-lee-uh' },
        { term: 'Eustachian tube', definition: 'A tube connecting the middle ear to the throat that equalizes air pressure', pronunciation: 'yoo-STAY-shun' },
        { term: 'vestibular system', definition: 'The part of the inner ear that controls balance and spatial orientation' },
      ],
      analogies: [
        'The ossicles work like a lever system, amplifying sound vibrations about 20 times before they reach the inner ear.',
        'The Eustachian tube works like a pressure valve, opening when you yawn or swallow to equalize ear pressure.',
      ],
    },
    3: {
      level: 3,
      summary: 'The ear comprises a sophisticated system of cartilaginous, bony, and membranous structures that transform acoustic energy into neural impulses while simultaneously providing vestibular input for equilibrium.',
      explanation: `## External Ear Detailed Anatomy

### Auricle Cartilage Framework
- **Auricular cartilage**: Elastic cartilage (type II collagen) providing shape
- **Anatomical landmarks**:
  - Helix and antihelix (with superior and inferior crura)
  - Scaphoid fossa (between helix and antihelix)
  - Triangular fossa
  - Concha (divided by crus of helix into cymba and cavum)
  - Tragus and antitragus separated by intertragic notch
  - Lobule (no cartilage, contains fat and connective tissue)

### External Acoustic Meatus
- **Dimensions**: ~2.5cm length, S-shaped curve
- **Lateral cartilaginous portion** (1/3):
  - Continuous with auricular cartilage
  - Contains ceruminous glands (modified apocrine) and sebaceous glands
  - Has hair follicles for protection
- **Medial bony portion** (2/3):
  - Formed by temporal bone
  - Thinner skin, no glands or hair
  - Sensitive to pain (CN V, VII, X innervation)

### Tympanic Membrane Layers
1. **Outer layer**: Stratified squamous epithelium (continuous with ear canal)
2. **Middle layer**: Fibrous tissue (radial and circular fibers)
3. **Inner layer**: Simple cuboidal epithelium (continuous with middle ear)

**Anatomical Parts:**
- Pars tensa: Larger, taut portion
- Pars flaccida (Shrapnell's membrane): Superior, less rigid portion
- Umbo: Central depression where malleus attaches
- Cone of light: Triangular reflection in anteroinferior quadrant

## Middle Ear Anatomy

### Tympanic Cavity
- **Volume**: ~2mL air space
- **Walls**:
  - Lateral: Tympanic membrane
  - Medial: Contains oval window, round window, promontory (cochlear bulge)
  - Superior: Tegmen tympani (thin bone separating from middle cranial fossa)
  - Inferior: Jugular bulb
  - Anterior: Eustachian tube opening, carotid canal
  - Posterior: Aditus to mastoid antrum

### Ossicular Chain
**Malleus:**
- Head (in epitympanum), neck, manubrium (attached to TM)
- Lateral and anterior processes

**Incus:**
- Body (articulates with malleus head)
- Short process (to posterior wall)
- Long process with lenticular process (to stapes)

**Stapes:**
- Head, neck, anterior and posterior crura, footplate
- Footplate occupies oval window
- Annular ligament seals footplate in oval window

### Sound Transmission Mechanics
1. **Area ratio**: TM area (~55mm²) vs stapes footplate (~3.2mm²) = 17:1
2. **Lever action**: Ossicular chain provides 1.3:1 mechanical advantage
3. **Combined amplification**: ~22x (approximately 25-30 dB gain)

## Inner Ear: Cochlear Anatomy

### Cochlear Structure
- **Turns**: 2.5-2.75 turns around bony modiolus
- **Three chambers (scalae)**:
  - Scala vestibuli (perilymph, connects to oval window)
  - Scala media/cochlear duct (endolymph)
  - Scala tympani (perilymph, connects to round window)
- Scala vestibuli and tympani connect at helicotrema (apex)

### Organ of Corti
- Located on basilar membrane in scala media
- **Hair cells**:
  - Inner hair cells (~3,500): Primary sensory receptors
  - Outer hair cells (~12,000): Amplifiers and frequency tuners
- **Tectorial membrane**: Overlies stereocilia of hair cells
- **Supporting cells**: Deiters cells, pillar cells, Hensen cells

### Tonotopic Organization
- Base: High frequencies (up to 20,000 Hz)
- Apex: Low frequencies (down to 20 Hz)
- Basilar membrane is narrow and stiff at base, wide and flexible at apex

## Inner Ear: Vestibular Anatomy

### Semicircular Canals
- Three canals oriented perpendicular to each other:
  - Lateral (horizontal): 30° from horizontal plane
  - Anterior (superior): Vertical, oriented anterolaterally
  - Posterior: Vertical, oriented posterolaterally
- Each has an ampulla containing the crista ampullaris with hair cells
- Cupula (gelatinous structure) deflects with head rotation

### Otolith Organs
- **Utricle**: Horizontal acceleration and head tilt
- **Saccule**: Vertical acceleration
- Both contain maculae with otoconia (calcium carbonate crystals) over hair cells`,
      keyTerms: [
        { term: 'organ of Corti', definition: 'The sensory epithelium of the cochlea containing hair cells that transduce mechanical energy to neural signals' },
        { term: 'tonotopic organization', definition: 'The spatial arrangement where different frequencies are processed at different locations along the basilar membrane' },
        { term: 'tegmen tympani', definition: 'The thin bony roof of the middle ear separating it from the middle cranial fossa' },
        { term: 'scala media', definition: 'The endolymph-filled cochlear duct containing the organ of Corti' },
        { term: 'otoconia', definition: 'Calcium carbonate crystals in the utricle and saccule that sense gravity and linear acceleration' },
        { term: 'crista ampullaris', definition: 'The sensory structure in the ampulla of each semicircular canal that detects angular rotation' },
      ],
      clinicalNotes: 'The tegmen tympani is clinically important as it represents a potential route for spread of middle ear infections to the meninges. The pars flaccida is a common site for cholesteatoma formation.',
    },
    4: {
      level: 4,
      summary: 'The auditory-vestibular apparatus demonstrates sophisticated mechanoelectrical transduction mechanisms, with the cochlea employing active amplification via outer hair cell motility and the vestibular system providing continuous spatial orientation through complementary semicircular canal and otolith organ inputs.',
      explanation: `## Molecular Basis of Hair Cell Function

### Stereocilia Structure
- Arranged in graded rows (staircase pattern)
- Connected by tip links (primarily cadherin-23 and protocadherin-15)
- Tip links gate mechanically-sensitive transduction (MET) channels
- MET channels: TMC1/TMC2 proteins at tips of shorter stereocilia

### Mechanoelectrical Transduction
1. **Deflection toward tallest stereocilia**: Opens MET channels
2. **K⁺ influx** from endolymph (high K⁺: ~150mM)
3. **Depolarization** of hair cell
4. **Voltage-gated Ca²⁺ channel** activation
5. **Neurotransmitter release** (glutamate at ribbon synapses)
6. **Action potential** generation in spiral ganglion neurons

### Endolymph-Perilymph System
- **Endolymph composition**: High K⁺ (~150mM), low Na⁺ (~1mM)
- **Perilymph composition**: Low K⁺ (~5mM), high Na⁺ (~140mM)
- **Endocochlear potential**: +80mV in scala media (generated by stria vascularis)
- **Total driving force on hair cells**: ~140mV gradient

### Cochlear Amplifier (OHC Function)

**Outer Hair Cell Electromotility:**
- Prestin (SLC26A5): Motor protein in OHC lateral membrane
- Contracts and elongates with membrane potential changes
- Cycle-by-cycle amplification at stimulus frequency
- Provides ~40dB gain to basilar membrane motion
- Enables exquisite frequency selectivity (Q10dB of 100+)

**Active Feedback Mechanism:**
- OHCs amplify soft sounds selectively
- Saturation with loud sounds provides compression
- Loss of OHCs → ~40dB hearing loss + poor frequency resolution

## Afferent Innervation

### Type I Spiral Ganglion Neurons (95%)
- Bipolar neurons, myelinated
- Each innervates single inner hair cell
- 10-30 neurons per IHC (divergence)
- Responsible for conscious sound perception
- Frequency-specific due to tonotopic origin

### Type II Spiral Ganglion Neurons (5%)
- Unmyelinated
- Each innervates ~10 outer hair cells
- Function unclear, possibly pain/damage sensing

## Efferent Innervation

### Medial Olivocochlear (MOC) Bundle
- Originates from medial superior olive
- Synapses directly on OHCs (cholinergic)
- Activation reduces cochlear amplifier gain
- Protective function against noise damage
- Improves signal detection in noise

### Lateral Olivocochlear (LOC) Bundle
- Originates from lateral superior olive
- Synapses on Type I afferent dendrites (beneath IHCs)
- Uses dopamine, GABA, acetylcholine
- Modulates afferent firing rates
- May protect against excitotoxicity

## Central Auditory Pathway

### Brainstem Nuclei
1. **Cochlear nuclei** (dorsal and ventral)
   - First synapse, tonotopic organization
   - Initial spectral and temporal processing
2. **Superior olivary complex**
   - Binaural processing begins
   - Interaural time and level differences (sound localization)
3. **Lateral lemniscus nuclei**
   - GABAergic inhibition, temporal processing
4. **Inferior colliculus**
   - Integration station, multimodal inputs
5. **Medial geniculate body** (thalamus)
   - Relay to auditory cortex

### Auditory Cortex
- Primary auditory cortex (A1): Heschl's gyrus, BA41
- Belt and parabelt areas: Higher-order processing
- Tonotopic organization maintained throughout pathway

## Vestibular Physiology

### Push-Pull Organization
- Paired canals work in opposite directions
- E.g., Right lateral canal + Left lateral canal
- When one is excited, partner is inhibited
- Provides sensitive, linear response to rotation

### Vestibulo-Ocular Reflex (VOR)
- 3-neuron arc: Vestibular afferent → vestibular nucleus → oculomotor nuclei
- Latency: 7-15ms (fastest sensorimotor reflex)
- Gain: ~1.0 (equal and opposite eye movement)
- VOR cancellation: Requires cerebellar input

### Velocity Storage Mechanism
- Extends VOR response beyond canal time constant
- Involves vestibular nuclei and cerebellum
- Can be maladaptive (prolonged vertigo in pathology)`,
      keyTerms: [
        { term: 'prestin', definition: 'The motor protein (SLC26A5) in outer hair cells that enables electromotility and cochlear amplification' },
        { term: 'endocochlear potential', definition: 'The +80mV potential in endolymph generated by stria vascularis, essential for hair cell function' },
        { term: 'ribbon synapse', definition: 'Specialized synapses of hair cells with continuous vesicle release, enabling sustained, graded neurotransmitter release' },
        { term: 'tip link', definition: 'Protein filaments connecting adjacent stereocilia that directly gate mechanotransduction channels' },
        { term: 'medial olivocochlear bundle', definition: 'Efferent pathway that modulates outer hair cell function, providing noise protection' },
        { term: 'velocity storage', definition: 'Brainstem mechanism that extends vestibular responses beyond the peripheral time constant' },
      ],
      clinicalNotes: 'Prestin mutations cause autosomal recessive hearing loss (DFNB61). Connexin 26 mutations (GJB2) are the most common cause of congenital genetic hearing loss, affecting endolymph potassium recycling. Aminoglycoside antibiotics selectively damage hair cells through MET channel entry.',
    },
    5: {
      level: 5,
      summary: 'Advanced understanding of ear anatomy integrates developmental biology, molecular mechanisms of mechanotransduction, cochlear implant electrode-neural interfaces, and contemporary surgical approaches for otologic conditions.',
      explanation: `## Developmental Anatomy and Molecular Embryology

### Otic Placode Development
- **Week 4**: Otic placode invaginates from surface ectoderm
- **Signaling gradients**: FGF, Wnt, SHH pattern the otic vesicle
- **Pax2, Pax8, Dlx5, Dlx6**: Critical transcription factors
- **Notch signaling**: Determines hair cell vs. supporting cell fate

### Inner Ear Patterning
- **Anterior-posterior axis**: Establishes cochlea vs. vestibular organs
- **Lateral-medial axis**: Determines sensory vs. non-sensory regions
- **Prosensory domain**: Marked by Sox2, Atoh1 drives hair cell differentiation

### Hair Cell Regeneration Research
- **Atoh1 overexpression**: Can induce new hair cells (non-mammalian models)
- **Lgr5+ supporting cells**: Potential hair cell progenitors in mammals
- **Notch inhibition**: Allows supporting cell transdifferentiation
- **Current clinical trials**: Gene therapy approaches for Atoh1 delivery

## Advanced Cochlear Physiology

### Two-Tone Suppression
- Second tone can reduce response to first (probe) tone
- Reflects OHC saturation and nonlinearity
- More pronounced at low sound levels
- Clinically assessed with distortion product OAEs

### Distortion Products
- Nonlinear cochlear mechanics generate new frequencies
- 2f1-f2 most commonly measured (DPOAE)
- Reflects OHC function at specific frequency
- Clinical tool for detecting early hearing loss

### Otoacoustic Emissions Classification
| Type | Origin | Clinical Use |
|------|--------|--------------|
| Spontaneous (SOAE) | Spontaneous OHC oscillation | Limited |
| Transient-evoked (TEOAE) | Broadband response | Newborn screening |
| Distortion product (DPOAE) | Intermodulation | Frequency-specific assessment |
| Stimulus frequency (SFOAE) | Reflection of stimulus | Research |

## Temporal Bone Anatomy for Surgery

### Surgical Landmarks

**Mastoidectomy:**
- Henle's spine: Anterosuperior landmark for mastoid antrum
- MacEwen's triangle (suprameatal triangle): Deep to this is the antrum
- Tegmen: Superior limit (dura)
- Sigmoid sinus: Posterior limit
- Facial nerve: Courses inferiorly, lateral to oval window
- Horizontal semicircular canal: Identified by dome in antrum
- Digastric ridge: Inferior landmark, points to stylomastoid foramen

**Facial Nerve Course:**
1. Labyrinthine segment (shortest, most vulnerable)
2. Geniculate ganglion (greater petrosal nerve exit)
3. Tympanic (horizontal) segment
4. Mastoid (vertical) segment → stylomastoid foramen

### Cochlear Implant Anatomy

**Electrode Array Insertion:**
- Round window or cochleostomy approach
- Electrode array in scala tympani
- Full insertion: ~20-31.5mm depending on electrode type
- Tonotopic placement: Apical = low frequency, basal = high frequency

**Neural Interface:**
- Electrodes stimulate spiral ganglion neurons directly
- Bypasses hair cells entirely
- Current spread limits frequency resolution (~8 effective channels)
- Preservation of residual hearing: Soft surgery techniques

**Anatomical Considerations:**
- Cochlear length varies (32-36mm, 2.25-2.75 turns)
- Scala tympani cross-section decreases toward apex
- Ossification (otosclerosis, meningitis) can prevent insertion

## Vestibular Testing Correlations

### Video Head Impulse Test (vHIT)
- Tests individual semicircular canals
- Low-amplitude, high-velocity head impulses
- Measures VOR gain and catch-up saccades
- Indicates peripheral vestibular hypofunction

### Caloric Testing
- Warm and cool water irrigation
- Tests lateral SCC primarily
- Slow phase velocity (SPV) quantified
- Unilateral weakness indicates peripheral lesion

### Vestibular Evoked Myogenic Potentials (VEMPs)
- **Cervical VEMP (cVEMP)**: Saccular function (inhibitory)
- **Ocular VEMP (oVEMP)**: Utricular function (excitatory)
- Absent in superior canal dehiscence syndrome (supranormal thresholds)

## Imaging Anatomy

### High-Resolution CT Temporal Bone
- 0.5-0.625mm axial images with multiplanar reconstruction
- Evaluates ossicular chain integrity
- Identifies cholesteatoma, otosclerosis
- Cochlear patency assessment (pre-implant)
- Facial nerve canal dehiscence

### MRI Inner Ear
- 3D CISS/FIESTA sequences: CSF/fluid bright
- T2-weighted for endolymphatic hydrops (Meniere's)
- Vestibular schwannoma detection (CE T1)
- Cochlear nerve integrity (pre-implant evaluation)
- Iron sequences for hemorrhage (superficial siderosis)

## Skull Base Relationships

### Jugular Foramen
- Contains CN IX, X, XI and jugular vein
- May be dehiscent into middle ear (pulsatile tinnitus)
- Glomus jugulare tumors arise here

### Internal Auditory Canal
- Contains CN VII, VIII, labyrinthine artery
- Vestibular schwannomas expand this canal
- Surgical approach via translabyrinthine, retrosigmoid, or middle fossa`,
      keyTerms: [
        { term: 'Atoh1', definition: 'Transcription factor essential for hair cell development; target for regenerative therapy' },
        { term: 'otoacoustic emissions', definition: 'Sounds produced by the cochlea (OHC motility) that can be measured in ear canal; assess cochlear function' },
        { term: 'MacEwen\'s triangle', definition: 'Surgical landmark (suprameatal triangle) overlying the mastoid antrum' },
        { term: 'cochleostomy', definition: 'Surgical creation of an opening in the cochlea for electrode insertion in cochlear implantation' },
        { term: 'superior canal dehiscence', definition: 'Absent bone over superior semicircular canal causing third mobile window and vestibular/auditory symptoms' },
        { term: 'translabyrinthine approach', definition: 'Surgical approach through mastoid and labyrinth, sacrificing hearing, for vestibular schwannoma removal' },
      ],
      clinicalNotes: `Key clinical pearls:
1. The labyrinthine segment of the facial nerve is the most common site of Bell's palsy lesion due to narrow fallopian canal
2. Cochlear implant candidates require patent scala tympani; post-meningitic ossification may require drill-out
3. VEMP testing with air conduction thresholds >95dB in superior canal dehiscence (third window lowers air conduction threshold)
4. Bilateral vestibular loss patients rely heavily on visual and proprioceptive input; oscillopsia is characteristic
5. MRI with delayed IV gadolinium shows endolymphatic hydrops (dark on FLAIR) in definite Meniere's disease`,
    },
  },

  media: [
    {
      id: 'ear-anatomy-diagram',
      type: 'diagram',
      filename: 'ear-anatomy-overview.svg',
      title: 'Ear Anatomy Overview',
      description: 'Cross-sectional view showing external, middle, and inner ear structures',
    },
    {
      id: 'cochlea-cross-section',
      type: 'diagram',
      filename: 'cochlea-cross-section.svg',
      title: 'Cochlear Cross-Section',
      description: 'Three scalae with organ of Corti detailed view',
    },
    {
      id: 'vestibular-system',
      type: 'diagram',
      filename: 'vestibular-anatomy.svg',
      title: 'Vestibular System',
      description: 'Semicircular canals and otolith organs',
    },
  ],

  citations: [
    {
      id: 'cummings-otology',
      type: 'textbook',
      title: 'Otology and Neurotology',
      source: 'Cummings Otolaryngology: Head and Neck Surgery',
      chapter: 'Section III',
    },
    {
      id: 'grays-ear',
      type: 'textbook',
      title: 'External and Middle Ear',
      authors: ['Standring, S.'],
      source: 'Gray\'s Anatomy: The Anatomical Basis of Clinical Practice',
      chapter: '37',
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
    { targetId: 'ent-hearing-physiology', targetType: 'topic', relationship: 'related', label: 'Hearing Physiology' },
    { targetId: 'ent-hearing-loss', targetType: 'condition', relationship: 'related', label: 'Hearing Loss' },
    { targetId: 'ent-vertigo', targetType: 'condition', relationship: 'related', label: 'Vertigo and Balance Disorders' },
    { targetId: 'system-nervous', targetType: 'system', relationship: 'parent', label: 'Nervous System' },
  ],

  tags: {
    systems: ['auditory', 'vestibular', 'nervous'],
    structures: ['FMA:52780', 'FMA:60909', 'FMA:60908'],
    topics: ['anatomy', 'physiology', 'otology', 'neurotology'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'neurology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default earAnatomy;
