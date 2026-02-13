import { EducationalContent } from '../../types';

/**
 * Ear Anatomy Educational Content
 *
 * Covers the structural anatomy of the external, middle, and inner ear
 * with 5 complexity levels from 8th grade through MD/Professional.
 *
 * Companion to the ear-anatomy.json data file in this directory.
 */
export const earAnatomyContent: EducationalContent = {
  id: 'ent-ear-anatomy',
  type: 'structure',
  name: 'Ear Anatomy',
  alternateNames: ['Auditory System Anatomy', 'Structure of the Ear', 'Anatomy of the Ear'],
  fmaId: 'FMA:52780',

  levels: {
    1: {
      level: 1,
      summary:
        'Your ear has three main parts that work together so you can hear sounds and keep your balance.',
      explanation: `Your ear does two big jobs: it lets you hear sounds and helps you stay balanced when you walk, run, or spin around.

**The Three Parts of Your Ear:**

1. **Outer Ear** - This is the part you can see on the side of your head. It is shaped like a cup to catch sounds from the air. Sound travels down a short tunnel called the ear canal to reach the eardrum.

2. **Middle Ear** - Behind the eardrum is a small room filled with air. Inside are the three tiniest bones in your whole body. They have fun nicknames: the hammer, the anvil, and the stirrup. When sound makes the eardrum vibrate, these little bones pass the vibration along.

3. **Inner Ear** - This is the deepest part. It looks like a tiny snail shell and is filled with liquid. When the vibrations reach the liquid, tiny hair-like sensors turn them into electrical signals. Those signals travel along a nerve to your brain, and that is when you actually "hear" the sound. A different part of the inner ear helps you keep your balance.

**Why Ear Care Matters:**
- Never stick objects like cotton swabs deep into your ear canal.
- Loud sounds can damage the tiny sensors in the inner ear, so protect your ears around loud music or machinery.`,
      keyTerms: [
        { term: 'outer ear', definition: 'The part of the ear you can see that catches sound from the air' },
        { term: 'ear canal', definition: 'The short tunnel from the outside of your ear to the eardrum' },
        { term: 'eardrum', definition: 'A thin piece of skin that vibrates when sound waves hit it' },
        { term: 'middle ear', definition: 'The air-filled space behind the eardrum with three tiny bones' },
        { term: 'inner ear', definition: 'The deepest part of the ear that turns vibrations into signals for the brain' },
      ],
      analogies: [
        'The outer ear works like a satellite dish that catches signals from the air and funnels them inward.',
        'The three middle ear bones act like a chain of dominos, passing vibrations from one to the next.',
        'The inner ear is like a microphone that turns physical vibrations into electrical signals your brain can understand.',
      ],
      examples: [
        'Cup your hand behind your ear and sounds get louder -- that is basically what the outer ear shape does all the time.',
        'When you pop your ears on an airplane, you are opening a small tube that lets air into the middle ear space.',
      ],
      patientCounselingPoints: [
        'Never push cotton swabs or other objects into the ear canal; they can damage the eardrum.',
        'If your ears feel blocked or sounds seem muffled, ask a parent or doctor for help.',
        'Wear ear protection like earplugs or earmuffs around very loud sounds.',
      ],
    },

    2: {
      level: 2,
      summary:
        'The ear is divided into the external ear, middle ear, and inner ear, each containing specialized structures for collecting, amplifying, and converting sound into nerve signals.',
      explanation: `The human ear converts sound waves in the air into electrical nerve impulses the brain interprets as hearing. It also houses the vestibular system for balance.

## External (Outer) Ear

- **Pinna (auricle):** The visible cartilage-and-skin flap that funnels sound waves into the ear canal.
- **External auditory canal:** A tube approximately 2.5 cm long lined with skin, hair, and cerumen (earwax) glands. It channels sound to the tympanic membrane.
- **Tympanic membrane (eardrum):** A thin, cone-shaped membrane that vibrates in response to sound pressure waves.

## Middle Ear

- **Ossicular chain:** Three tiny bones -- the malleus (hammer), incus (anvil), and stapes (stirrup) -- that mechanically amplify vibrations from the eardrum and transmit them to the inner ear.
- **Eustachian tube:** Connects the middle ear to the nasopharynx and equalizes air pressure on both sides of the eardrum.
- **Middle ear cavity:** An air-filled space within the temporal bone of the skull.

## Inner Ear

- **Cochlea:** A snail-shaped, fluid-filled structure that contains hair cells responsible for converting mechanical vibrations into electrical signals sent along the auditory nerve.
- **Vestibular system:** Includes three semicircular canals (detecting rotational movement) and two otolith organs -- the utricle and saccule (detecting linear acceleration and gravity).
- **Auditory nerve (cranial nerve VIII):** Carries hearing and balance information to the brain.

## How Hearing Works

Sound waves are collected by the pinna, travel through the ear canal, vibrate the eardrum, amplified by the ossicles, and finally converted into nerve signals by the cochlea.`,
      keyTerms: [
        { term: 'pinna', definition: 'The visible outer ear that collects and directs sound waves', pronunciation: 'PIN-ah' },
        { term: 'tympanic membrane', definition: 'The eardrum; a thin membrane separating the outer and middle ear', pronunciation: 'tim-PAN-ik' },
        { term: 'ossicular chain', definition: 'The three small bones (malleus, incus, stapes) in the middle ear that transmit sound', pronunciation: 'aw-SIK-yoo-lar' },
        { term: 'cochlea', definition: 'The snail-shaped inner ear structure responsible for hearing', pronunciation: 'COCK-lee-ah' },
        { term: 'Eustachian tube', definition: 'A tube that connects the middle ear to the throat to equalize pressure', pronunciation: 'yoo-STAY-shun' },
        { term: 'semicircular canals', definition: 'Three fluid-filled loops in the inner ear that detect rotational head movements' },
      ],
      analogies: [
        'The ossicular chain amplifies sound like a lever system, increasing the force of vibrations roughly 22 times before they reach the inner ear.',
        'The cochlea is coiled like a snail shell; if you could unroll it, it would be about 3 cm long.',
        'The Eustachian tube works like a pressure-relief valve -- yawning or swallowing opens it to equalize pressure, which is why those actions help during airplane takeoff.',
      ],
      examples: [
        'Earwax (cerumen) is produced in the outer third of the ear canal and normally works its way outward, protecting the canal from debris and infection.',
        'When you spin around and then stop, the fluid in your semicircular canals keeps moving for a moment, which is why you feel dizzy.',
      ],
      patientCounselingPoints: [
        'The ear canal is self-cleaning; earwax naturally migrates outward, so routine cleaning beyond the outer opening is unnecessary.',
        'Prolonged exposure to sounds above 85 decibels (roughly the level of heavy traffic) can damage inner ear hair cells permanently.',
        'If you experience sudden hearing loss or persistent ringing, seek medical evaluation promptly.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Ear anatomy comprises the external ear for sound collection, the middle ear ossicular chain for impedance matching, and the inner ear cochlear and vestibular labyrinth for mechanoelectrical transduction and spatial orientation.',
      explanation: `## External Ear

The **pinna** is composed of elastic cartilage covered by skin with specific landmarks: helix, antihelix, tragus, antitragus, concha, and lobule. The concha directs sound into the external auditory canal.

The **external auditory canal** has a lateral cartilaginous portion (outer third) containing ceruminous and sebaceous glands, and a medial bony portion (inner two-thirds) lined by thin skin adherent to periosteum. The canal follows an S-shaped curve, requiring gentle posterior-superior traction on the pinna for otoscopic examination in adults.

The **tympanic membrane** is a three-layered structure:
- Outer: keratinized squamous epithelium
- Middle: fibrous layer (radial and circular fibers)
- Inner: mucosal epithelium continuous with the middle ear

Landmarks include the pars tensa (taut portion), pars flaccida (superior, less taut), umbo (point of maximal concavity at malleus attachment), and the light reflex (cone of light in the anteroinferior quadrant).

## Middle Ear (Tympanic Cavity)

The middle ear is divided into the epitympanum (attic), mesotympanum, and hypotympanum. Key boundaries:
- Lateral wall: tympanic membrane
- Medial wall: promontory (basal turn of cochlea), oval window, round window
- Roof (tegmen tympani): separates from middle cranial fossa
- Floor: separates from jugular bulb
- Posterior wall: aditus to mastoid antrum
- Anterior wall: Eustachian tube orifice, carotid canal

The **ossicular chain** articulates via synovial joints: malleus handle attached to tympanic membrane, malleus head articulates with incus body, incus long process connects to stapes head via the lenticular process, and the stapes footplate fits into the oval window. This system provides impedance matching between air and cochlear fluid, amplifying sound pressure approximately 22-fold through the area ratio (tympanic membrane to oval window ~17:1) and lever ratio (~1.3:1).

Two muscles modulate transmission:
- **Tensor tympani** (CN V3): tenses tympanic membrane
- **Stapedius** (CN VII): dampens stapes movement (acoustic reflex)

## Inner Ear (Labyrinth)

The bony (osseous) labyrinth contains perilymph (similar to extracellular fluid; high Na+, low K+). Within it, the membranous labyrinth contains endolymph (high K+, low Na+), maintained by the stria vascularis.

**Cochlea:**
- 2.5 turns around a bony core (modiolus) containing spiral ganglion neurons
- Three compartments: scala vestibuli (perilymph), scala media / cochlear duct (endolymph), scala tympani (perilymph)
- Scala vestibuli and tympani communicate at the helicotrema (apex)
- **Organ of Corti** sits on the basilar membrane within scala media
  - Inner hair cells (~3,500): primary sensory transducers, receive ~95% of afferent innervation
  - Outer hair cells (~12,000): arranged in three rows, provide active cochlear amplification
  - Tectorial membrane overlies hair cell stereocilia
- **Tonotopic organization:** base responds to high frequencies, apex to low frequencies

**Vestibular Labyrinth:**
- Three semicircular canals (anterior, posterior, lateral) oriented in perpendicular planes detect angular acceleration via crista ampullaris and cupula
- Utricle and saccule detect linear acceleration and gravity via macula and otolithic membrane with otoconia (calcium carbonate crystals)

## Neurovascular Supply

- Arterial supply: labyrinthine artery (branch of AICA or basilar artery)
- Venous drainage: labyrinthine vein to inferior petrosal sinus
- Cranial nerve VIII: cochlear division (hearing) and vestibular division (balance)
- Facial nerve (CN VII) traverses the middle ear in the fallopian canal -- a critical surgical landmark`,
      keyTerms: [
        { term: 'organ of Corti', definition: 'The sensory epithelium on the basilar membrane containing inner and outer hair cells for sound transduction' },
        { term: 'tonotopic organization', definition: 'Frequency-specific spatial mapping in the cochlea: high frequencies at the base, low at the apex' },
        { term: 'impedance matching', definition: 'The ossicular chain function of converting low-pressure air vibrations to higher-pressure fluid vibrations' },
        { term: 'endolymph', definition: 'High-potassium fluid in the membranous labyrinth essential for hair cell transduction', pronunciation: 'EN-doh-limf' },
        { term: 'perilymph', definition: 'Fluid surrounding the membranous labyrinth, similar in composition to extracellular fluid', pronunciation: 'PAIR-ih-limf' },
        { term: 'stria vascularis', definition: 'Epithelium on the lateral wall of scala media that produces endolymph and maintains the endocochlear potential' },
        { term: 'acoustic reflex', definition: 'Contraction of the stapedius muscle in response to loud sounds to protect the inner ear' },
      ],
      clinicalNotes: `The facial nerve (CN VII) runs through the middle ear in the fallopian canal; surgical injury here can cause facial paralysis. The tegmen tympani is a thin bony plate separating the middle ear from the middle cranial fossa -- erosion (e.g., by cholesteatoma) can lead to intracranial complications. The round window membrane provides pressure relief during cochlear fluid displacement and is a potential route for intratympanic drug delivery (e.g., steroids, gentamicin).`,
    },

    4: {
      level: 4,
      summary:
        'The ear integrates precise biomechanical sound transmission with cochlear mechanotransduction at the molecular level, involving tip-link gating of MET channels, prestin-driven outer hair cell electromotility, and tonotopic frequency decomposition, alongside vestibular otolith and semicircular canal transduction for spatial orientation.',
      explanation: `## Cochlear Mechanotransduction

Sound-induced basilar membrane displacement causes shearing between the tectorial membrane and stereocilia bundles. Deflection of stereocilia toward the tallest row places tension on **tip links** (composed of cadherin-23 and protocadherin-15), opening mechanically-gated transduction (MET) channels at stereocilia tips. The primary permeant ion is K+ due to the +80 mV endocochlear potential (EP) generated by the stria vascularis, combined with the negative resting potential of hair cells (~-60 mV), creating a driving force of approximately 140 mV.

K+ entry depolarizes the hair cell, opening voltage-gated Ca2+ channels at the basolateral membrane, triggering glutamate release onto afferent terminals of spiral ganglion type I neurons. K+ exits basolaterally through KCNQ4 channels and is recycled through supporting cells and the lateral wall back to the stria vascularis (the potassium recycling pathway involving gap junctions, including connexin 26 encoded by GJB2).

## Outer Hair Cell Electromotility

Outer hair cells (OHCs) express **prestin** (SLC26A5) in their lateral membrane, a motor protein that changes cell length in response to voltage changes. Depolarization causes shortening; hyperpolarization causes elongation. This cycle-by-cycle electromotility provides active cochlear amplification of 40-60 dB, sharpening frequency selectivity beyond passive basilar membrane tuning. OHC loss eliminates this active process, broadening tuning curves and raising thresholds -- the basis of most sensorineural hearing loss.

**Otoacoustic emissions (OAEs):** Byproducts of OHC motility; their presence confirms intact OHC function. Used clinically in newborn hearing screening (transient-evoked OAEs) and monitoring ototoxicity (distortion-product OAEs).

## Basilar Membrane Mechanics

The basilar membrane varies systematically:
- **Base:** Narrow (0.1 mm), thick, stiff -- resonates at high frequencies (~20,000 Hz)
- **Apex:** Wide (0.5 mm), thin, compliant -- resonates at low frequencies (~20 Hz)

Georg von Bekesy described the passive traveling wave; the active process (OHC amplification) creates a sharply tuned peak at the characteristic frequency location. This nonlinear amplification is compressive, enabling the ear to encode sounds over a 120 dB dynamic range.

## Central Auditory Pathway

1. Spiral ganglion neurons (CN VIII cochlear division)
2. Cochlear nucleus (dorsal and ventral divisions)
3. Superior olivary complex -- first site of binaural processing; interaural time differences (medial superior olive) and interaural level differences (lateral superior olive) for sound localization
4. Lateral lemniscus
5. Inferior colliculus -- integration hub, multimodal processing
6. Medial geniculate body (thalamus)
7. Primary auditory cortex (Heschl gyrus, Brodmann areas 41/42)

Tonotopic organization is maintained throughout the pathway. Descending (efferent) pathways include the medial olivocochlear bundle terminating on OHCs and lateral olivocochlear bundle terminating on type I afferent dendrites beneath IHCs.

## Vestibular Transduction

**Semicircular canals:** Endolymph inertia during angular acceleration displaces the cupula, deflecting hair cell stereocilia embedded within it. Each canal is maximally sensitive to rotation in its own plane. Canal pairs work in push-pull: when one is excited, its coplanar partner is inhibited. The horizontal canals are coplanar; the anterior canal of one side is coplanar with the posterior canal of the other.

**Otolith organs:**
- Utricle: macula oriented roughly horizontally; detects horizontal linear acceleration and head tilt
- Saccule: macula oriented roughly vertically; detects vertical linear acceleration
- Otoconia (calcium carbonate crystals) on the otolithic membrane create inertial displacement during acceleration

The striola divides each macula; hair cell polarization reverses across it, providing bidirectional sensitivity. Vestibular afferents in Scarpa ganglion project to the vestibular nuclei, which integrate with:
- Vestibulo-ocular reflex (VOR): Three-neuron arc stabilizing gaze
- Vestibulospinal pathways: Lateral and medial vestibulospinal tracts for postural control
- Vestibulo-cortical projections: Parieto-insular vestibular cortex for conscious spatial perception

## Blood Supply Vulnerability

The labyrinthine artery (from AICA or directly from basilar) is an end artery with no collateral circulation. This makes the inner ear highly vulnerable to ischemic events, which is relevant to sudden sensorineural hearing loss pathogenesis and vertebrobasilar insufficiency symptoms.`,
      keyTerms: [
        { term: 'tip links', definition: 'Extracellular filaments (cadherin-23/protocadherin-15) connecting adjacent stereocilia that gate mechanotransduction channels' },
        { term: 'prestin', definition: 'Motor protein (SLC26A5) in OHC lateral membranes driving electromotility and cochlear amplification' },
        { term: 'endocochlear potential', definition: '+80 mV potential in endolymph generated by stria vascularis, essential for the driving force of hair cell transduction' },
        { term: 'potassium recycling', definition: 'Pathway returning K+ from hair cells through supporting cells, spiral ligament, and stria vascularis back to endolymph' },
        { term: 'otoacoustic emissions', definition: 'Sounds generated by OHC motility, measurable in the ear canal as an objective test of cochlear function' },
        { term: 'medial olivocochlear bundle', definition: 'Efferent pathway from superior olive to OHCs that modulates cochlear amplification' },
        { term: 'vestibulo-ocular reflex', definition: 'Three-neuron arc from semicircular canals to extraocular muscles that stabilizes gaze during head movement' },
      ],
      clinicalNotes: `GJB2 (connexin 26) mutations disrupt the potassium recycling pathway and are the most common cause of autosomal recessive nonsyndromic hearing loss. KCNQ4 mutations cause autosomal dominant progressive high-frequency loss (DFNA2). Aminoglycoside ototoxicity preferentially damages OHCs through mitochondrial ROS generation, and genetic susceptibility involves mitochondrial 12S rRNA mutations (m.1555A>G). The endocochlear potential depends on intact stria vascularis function; metabolic conditions (e.g., diabetes, renal failure) or loop diuretics can compromise it.`,
    },

    5: {
      level: 5,
      summary:
        'Contemporary otologic science integrates molecular genetics of hearing, advanced cochlear and vestibular diagnostics, regenerative medicine strategies, and precision surgical approaches to manage the full spectrum of auditory and vestibular pathology.',
      explanation: `## Molecular Genetics of Hearing

Over 120 genes have been implicated in nonsyndromic hearing loss. Key loci and clinical relevance:

- **GJB2 (DFNB1):** Connexin 26 mutations account for ~50% of autosomal recessive cases; carrier frequency ~3% in many populations; 35delG most common in Caucasians, 235delC in East Asians
- **SLC26A4 (DFNB4/Pendred):** Enlarged vestibular aqueduct on imaging; variable hearing loss; may present with goiter
- **OTOF (DFNB9):** Otoferlin; auditory neuropathy spectrum disorder phenotype; target for gene therapy (AAV-mediated otoferlin delivery)
- **TMC1 (DFNB7/11, DFNA36):** Transmembrane channel-like protein; likely the MET channel component; both recessive and dominant forms
- **MYO7A (Usher syndrome type 1B):** Myosin VIIa; combined hearing loss and retinitis pigmentosa
- **Mitochondrial:** m.1555A>G and m.3243A>G mutations increase aminoglycoside susceptibility

Genetic testing panels (e.g., OtoSCOPE) are increasingly integrated into clinical evaluation of congenital and early-onset hearing loss to guide counseling and management.

## Regenerative Medicine Approaches

Hair cell regeneration in mammals is limited by supporting cell quiescence. Current strategies:
- **Atoh1 (Math1) overexpression:** Transcription factor driving hair cell differentiation; adenoviral delivery has produced ectopic hair cells in animal models
- **Wnt/Notch pathway modulation:** Wnt activation promotes proliferation; Notch inhibition (gamma-secretase inhibitors) drives transdifferentiation of supporting cells to hair cells
- **Small molecule cocktails:** Combinations targeting multiple pathways (e.g., CHIR99021 + valproic acid + 616452) showing promise in organoid models
- **Gene therapy:** AAV vectors delivering functional genes (OTOF, TMC1, VGLUT3) in preclinical and early clinical trials; dual AAV strategies for large genes exceeding single-vector capacity
- **CRISPR-Cas9:** Allele-specific editing for dominant mutations (e.g., TMC1 Beethoven model)

Clinical translation challenges include vector delivery to intact cochlea, achieving correct cellular targeting, maintaining long-term expression, and avoiding immune responses.

## Advanced Cochlear Diagnostics

- **Electrocochleography (ECochG):** Summating potential / action potential ratio; elevated in endolymphatic hydrops; intraoperative monitoring during cochlear implant insertion
- **Auditory steady-state response (ASSR):** Frequency-specific threshold estimation in infants; complements ABR
- **Extended high-frequency audiometry (9-16 kHz):** Early detection of ototoxicity and noise damage before conventional frequencies affected
- **Cochlear synaptopathy testing:** Emerging protocols combining speech-in-noise testing, ABR wave I amplitude analysis, and middle ear muscle reflex thresholds to identify "hidden hearing loss" from inner hair cell synapse damage not captured by standard audiometry
- **Intraoperative monitoring:** Real-time electrocochleography during CI insertion to preserve residual hearing; impedance telemetry and neural response telemetry for electrode function assessment

## Vestibular Assessment Advances

- **Video head impulse test (vHIT):** Quantifies VOR gain for each semicircular canal individually; identifies covert and overt saccades indicating peripheral hypofunction
- **Vestibular evoked myogenic potentials (VEMPs):** Cervical VEMP (saccular function via sternocleidomastoid); ocular VEMP (utricular function via inferior oblique); critical for superior canal dehiscence diagnosis (lowered thresholds, increased amplitudes)
- **Rotary chair testing:** Sinusoidal harmonic acceleration for symmetric vestibular function assessment; step velocity for time constant and asymmetry analysis
- **Subjective visual vertical (SVV):** Otolith function assessment; acute tilt indicates peripheral vestibular lesion
- **3T MRI with intratympanic gadolinium:** Direct visualization of endolymphatic hydrops (HYDROPS protocol); differentiating Meniere disease from vestibular migraine

## Precision Surgical Approaches

**Cochlear Implantation:**
- Electrode arrays: Perimodiolar (closer to spiral ganglion) vs lateral wall (atraumatic insertion); hybrid short electrodes for electric-acoustic stimulation
- Round window vs cochleostomy insertion; soft surgery techniques
- Robotic-assisted insertion for consistent, slow advancement
- Intraoperative imaging (cone beam CT) for electrode position verification
- Programming: Current steering, virtual channels, and sequential bilateral strategies

**Endoscopic Ear Surgery:**
- Transcanal endoscopic approaches to cholesteatoma, ossiculoplasty, and stapes surgery
- Superior visualization of hidden recesses (sinus tympani, facial recess, epitympanum)
- Reduced morbidity compared to postauricular microscopic approaches
- Dual-hand techniques with endoscope holders advancing the field

**Superior Canal Dehiscence Repair:**
- Middle fossa craniotomy with plugging or resurfacing
- Transmastoid approach: Less morbidity but limited access for complete repair
- Round window reinforcement as adjunct in some patients
- Preoperative CT temporal bone with 0.5 mm slices in Stenvers and Poschl planes essential for surgical planning

## Emerging Frontiers

- **Optogenetics:** Light-activated ion channels in spiral ganglion neurons for improved cochlear implant frequency resolution
- **Focused ultrasound:** Noninvasive vestibular stimulation; potential therapeutic application
- **Bioprinting:** Tympanic membrane scaffolds with embedded growth factors for perforation repair
- **Pharmacogenomics:** Screening for aminoglycoside susceptibility (mitochondrial mutations) before treatment; cisplatin otoprotection with sodium thiosulfate
- **Machine learning in audiology:** Automated audiogram classification, hearing aid fitting optimization, tinnitus phenotyping for targeted therapy selection`,
      keyTerms: [
        { term: 'Atoh1', definition: 'Basic helix-loop-helix transcription factor critical for hair cell differentiation; primary target for regenerative strategies', pronunciation: 'AY-toh-one' },
        { term: 'GJB2', definition: 'Gene encoding connexin 26; mutations are the most common cause of autosomal recessive nonsyndromic hearing loss' },
        { term: 'cochlear synaptopathy', definition: 'Loss of inner hair cell ribbon synapses causing "hidden hearing loss" not detected by standard pure-tone audiometry' },
        { term: 'electrocochleography', definition: 'Recording of cochlear electrical potentials for hydrops diagnosis and intraoperative monitoring', pronunciation: 'eh-LEK-troh-cock-lee-OG-rah-fee' },
        { term: 'vHIT', definition: 'Video head impulse test; quantifies VOR gain for individual semicircular canals' },
        { term: 'HYDROPS protocol', definition: 'MRI technique using intratympanic gadolinium to directly visualize endolymphatic hydrops' },
        { term: 'optogenetics', definition: 'Use of light-activated ion channels for precise neural stimulation; under investigation for next-generation cochlear implants' },
      ],
      clinicalNotes: `Gene therapy for OTOF (otoferlin) mutations has shown hearing restoration in early clinical trials, representing a paradigm shift for auditory neuropathy spectrum disorder. Pharmacogenomic screening for mitochondrial m.1555A>G before aminoglycoside administration is increasingly recommended in neonatal ICU settings. Intratympanic steroid injection within 2 weeks of sudden sensorineural hearing loss onset remains the evidence-based standard, with salvage intratympanic therapy for oral steroid failures. Superior canal dehiscence syndrome is likely underdiagnosed; maintain high clinical suspicion for patients presenting with autophony, sound-induced vertigo (Tullio phenomenon), or conductive hyperacusis with normal tympanometry.`,
    },
  },

  media: [
    {
      id: 'ear-anatomy-cross-section',
      type: 'diagram',
      filename: 'ear_anatomy_cross_section.svg',
      title: 'Ear Anatomy Cross Section',
      description: 'Cross-sectional diagram showing external, middle, and inner ear structures with labeled landmarks',
    },
    {
      id: 'tympanic-membrane-landmarks',
      type: 'diagram',
      filename: 'tympanic_membrane_landmarks.svg',
      title: 'Tympanic Membrane Landmarks',
      description: 'Otoscopic view of the tympanic membrane with key landmarks: umbo, light reflex, pars tensa, pars flaccida',
    },
    {
      id: 'cochlea-cross-section',
      type: 'diagram',
      filename: 'cochlea_cross_section.svg',
      title: 'Cochlea Cross Section',
      description: 'Cross section through one turn of the cochlea showing scala vestibuli, scala media, scala tympani, and organ of Corti',
    },
    {
      id: 'ossicular-chain-diagram',
      type: 'diagram',
      filename: 'ossicular_chain.svg',
      title: 'Ossicular Chain',
      description: 'The malleus, incus, and stapes with articular relationships and muscle attachments',
    },
  ],

  citations: [
    {
      id: 'openstax-ap-ch15',
      type: 'textbook',
      title: 'The Special Senses',
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: '15',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/15-introduction',
      license: 'CC BY 4.0',
    },
    {
      id: 'netter-head-neck',
      type: 'textbook',
      title: 'Head and Neck',
      source: 'Atlas of Human Anatomy, 7th Edition',
      authors: ['Netter, F.H.'],
      chapter: '1',
    },
    {
      id: 'cummings-otology-anatomy',
      type: 'textbook',
      title: 'Anatomy of the Auditory and Vestibular Systems',
      source: 'Cummings Otolaryngology: Head and Neck Surgery, 7th Edition',
      chapter: 'Section III',
    },
    {
      id: 'moore-dalley-ear',
      type: 'textbook',
      title: 'Ear',
      source: 'Clinically Oriented Anatomy, 8th Edition',
      authors: ['Moore, K.L.', 'Dalley, A.F.', 'Agur, A.M.R.'],
      chapter: '7',
    },
  ],

  crossReferences: [
    { targetId: 'ent-ear', targetType: 'topic', relationship: 'parent', label: 'Ear Disorders and Hearing' },
    { targetId: 'ent-hearing-loss', targetType: 'condition', relationship: 'related', label: 'Hearing Loss Types' },
    { targetId: 'ent-ear-infections', targetType: 'condition', relationship: 'related', label: 'Ear Infections' },
    { targetId: 'ent-tinnitus', targetType: 'condition', relationship: 'related', label: 'Tinnitus' },
    { targetId: 'ent-vertigo-dizziness', targetType: 'condition', relationship: 'related', label: 'Vertigo and Dizziness' },
  ],

  tags: {
    systems: ['auditory', 'vestibular'],
    structures: ['FMA:52780', 'FMA:56513', 'FMA:60909', 'FMA:60908', 'FMA:60107'],
    topics: ['anatomy', 'physiology', 'otology'],
    keywords: [
      'ear anatomy',
      'cochlea',
      'ossicles',
      'tympanic membrane',
      'vestibular system',
      'organ of Corti',
      'hair cells',
      'auditory pathway',
    ],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'neurology', 'pediatrics'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default earAnatomyContent;
