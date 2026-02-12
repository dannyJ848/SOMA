/**
 * Ear Anatomy - Comprehensive Educational Content
 *
 * Detailed content covering the anatomy of the external, middle, and inner ear.
 */

import { EducationalContent } from '../../../types';

export const earAnatomy: EducationalContent = {
  id: 'ent-ear-anatomy',
  type: 'condition',
  name: 'Ear Anatomy',
  alternateNames: ['Aural Anatomy', 'Otologic Anatomy'],
  hpoId: 'HP:0000359',

  levels: {
    1: {
      level: 1,
      summary: 'The ear has three main parts: the outer ear that you can see, the middle ear with tiny bones, and the inner ear that helps you hear and keep your balance.',
      explanation: `Your ear is an amazing organ that helps you hear sounds and keep your balance. It has three main sections.

**Outer Ear:**
- The part you can see (pinna or auricle)
- The ear canal - a tube that leads inside
- The eardrum (tympanic membrane) at the end

**Middle Ear:**
- Contains three tiny bones (the smallest in your body):
  - Malleus (hammer)
  - Incus (anvil)
  - Stapes (stirrup)
- Connected to the back of your throat by the Eustachian tube
- This tube helps equalize pressure (like when your ears "pop")

**Inner Ear:**
- Cochlea - shaped like a snail shell, helps you hear
- Semicircular canals - three loops that help with balance
- Vestibular nerve - sends balance signals to the brain
- Cochlear nerve - sends hearing signals to the brain

**How Sound Travels:**
1. Sound waves enter the ear canal
2. They hit the eardrum and make it vibrate
3. The vibrations move through the three tiny bones
4. The stapes pushes on fluid in the cochlea
5. Tiny hair cells in the cochlea turn the vibrations into electrical signals
6. These signals go to the brain, which interprets them as sound`,
      keyTerms: [
        { term: 'eardrum', definition: 'A thin membrane that vibrates when sound hits it' },
        { term: 'cochlea', definition: 'The spiral-shaped part of the inner ear that helps you hear' },
        { term: 'Eustachian tube', definition: 'A tube connecting the middle ear to the back of the throat' },
      ],
      analogies: [
        'The three tiny bones in the middle ear work like a lever system, amplifying sound vibrations the way a crowbar helps lift heavy objects.',
      ],
      examples: [
        'When you go up in an airplane, your ears might feel full because the pressure outside changes faster than your Eustachian tube can adjust.',
        'If you damage the hair cells in your cochlea from loud noise, you might develop hearing loss.',
      ],
    },
    2: {
      level: 2,
      summary: 'The ear consists of the external, middle, and inner ear compartments; the middle ear contains the ossicular chain for sound transmission, while the inner ear houses the cochlea and vestibular apparatus.',
      explanation: `The ear is a complex sensory organ divided into three anatomical regions, each with specific functions.

**External Ear:**
- Auricle/Pinna: Cartilaginous structure for sound collection
- External auditory canal: 2.5 cm S-shaped canal
  - Lateral 1/3: Cartilage, with ceruminous and sebaceous glands
  - Medial 2/3: Bone
- Tympanic membrane: Trilaminar structure
  - Pars tensa (larger, tense portion)
  - Pars flaccida (Shrapnell's membrane, superior)

**Middle Ear:**
- Tympanic cavity: Air-filled space in temporal bone
- Ossicles: Malleus, incus, stapes (smallest bone in body)
- Ossicular chain conducts sound from tympanic membrane to oval window
- Eustachian tube: Ventilates middle ear, equalizes pressure
- Muscles: Tensor tympani (V3), stapedius (VII) - acoustic reflex

**Inner Ear (Labyrinth):**
- Bony labyrinth: Filled with perilymph
  - Cochlea: Hearing organ
  - Vestibule: Utricle and saccule
  - Semicircular canals: Three canals at right angles
- Membranous labyrinth: Filled with endolymph
  - Cochlear duct (scala media)
  - Utricle, saccule, semicircular ducts

**Sound Conduction:**
- Air conduction: External canal → TM → ossicles → oval window → perilymph
- Bone conduction: Direct vibration of skull to cochlea`,
      keyTerms: [
        { term: 'perilymph', definition: 'Fluid in the bony labyrinth, similar to extracellular fluid' },
        { term: 'endolymph', definition: 'Fluid in the membranous labyrinth, high in potassium' },
        { term: 'ossicular chain', definition: 'The three connected bones that transmit sound' },
      ],
    },
    3: {
      level: 3,
      summary: 'The ear comprises the external canal, tympanic cavity with ossicular chain, and bony/membranous labyrinth; precise anatomical knowledge is essential for understanding conduction pathways and surgical approaches.',
      explanation: `The temporal bone houses the intricate structures of the ear, requiring detailed anatomical knowledge for clinical practice.

**External Auditory Canal:**
- Length: ~2.5 cm in adults
- Diameter: ~6 mm (widest at lateral 1/3)
- Relations:
  - Anterior: TMJ, parotid gland
  - Posterior: Mastoid air cells
  - Inferior: Facial nerve (vertical segment), parotid
  - Superior: Middle cranial fossa (tegmen tympani)

**Middle Ear Anatomy:**
- Epitympanum (attic): Above TM level, contains head of malleus, body of incus
- Mesotympanum: Main cavity, at TM level
- Hypotympanum: Below TM level
- Important structures:
  - Oval window: Footplate of stapes
  - Round window: Secondary tympanic membrane
  - Promontory: Basal turn of cochlea
  - Facial nerve (tympanic segment): Runs above oval window
  - Chorda tympani: Crosses TM medially, taste to anterior 2/3 tongue

**Inner Ear Structures:**
- Cochlea: 2.5 turns, organ of Corti on basilar membrane
  - Scala vestibuli, scala media, scala tympani
  - Inner hair cells: Sensory (3,500)
  - Outer hair cells: Amplification (12,000)
- Vestibular apparatus:
  - Utricle: Horizontal linear acceleration
  - Saccule: Vertical linear acceleration
  - Semicircular canals: Rotational acceleration
    - Lateral (horizontal)
    - Superior (anterior)
    - Posterior

**Vascular Supply:**
- External ear: Posterior auricular artery, superficial temporal artery
- Middle ear: Anterior tympanic (from maxillary), stylomastoid (from posterior auricular)
- Inner ear: Labyrinthine artery (from AICA)`,
      keyTerms: [
        { term: 'tegmen tympani', definition: 'Thin bone separating middle ear from middle cranial fossa' },
        { term: 'AICA', definition: 'Anterior inferior cerebellar artery; supplies inner ear' },
        { term: 'organ of Corti', definition: 'Sensory organ for hearing on the basilar membrane' },
      ],
    },
    4: {
      level: 4,
      summary: 'Comprehensive ear anatomy includes understanding temporal bone relationships, facial nerve course, cochlear tonotopy, and vestibular end-organ ultrastructure for surgical planning and pathology interpretation.',
      explanation: `Advanced understanding of ear anatomy is critical for otologic surgery and interpretation of pathology.

**Temporal Bone Landmarks:**
- Mastoid antrum: Posterior to epitympanum, opens to mastoid air cells
- Sinodural angle: Junction of sigmoid sinus and middle fossa dura
- Facial recess: Between chorda tympani and facial nerve; access to middle ear
- Koerner's septum: Petrosquamous suture remnant in mastoid

**Facial Nerve Course:**
- Intracranial: Meatal segment (IAC)
- Intratemporal:
  - Labyrinthine segment: IAC to geniculate ganglion
  - Tympanic segment: Above oval window
  - Mastoid segment: Vertical descent to stylomastoid foramen
- Extratemporal: Pes anserinus (goose's foot) at parotid

**Cochlear Anatomy:**
- Length: ~35 mm uncoiled
- Tonotopy: Base (high frequency) to apex (low frequency)
- Basilar membrane: Narrow/stiff at base, wide/flexible at apex
- Stria vascularis: Produces endolymph, generates endocochlear potential (+80 mV)
- Hair cell transduction: Stereocilia deflection → K⁺ influx → depolarization

**Vestibular End Organs:**
- Maculae (utricle, saccule):
  - Otoconia (calcium carbonate crystals) on otolithic membrane
  - Hair cells respond to linear acceleration and gravity
- Crista ampullaris (semicircular canals):
  - Cupula: Gelatinous structure over hair cells
  - Respond to angular acceleration
  - Hair cell polarity toward utriculus (horizontal) or away from utriculus (vertical)

**Surgical Anatomy:**
- Canal wall up vs. canal wall down mastoidectomy
- Cochlear implant electrode insertion via round window or cochleostomy
- Endolymphatic sac decompression: Between sigmoid sinus and posterior fossa dura`,
      keyTerms: [
        { term: 'endocochlear potential', definition: '+80 mV potential essential for hair cell transduction' },
        { term: 'otoconia', definition: 'Calcium carbonate crystals in utricle and saccule' },
        { term: 'geniculate ganglion', definition: 'Sensory ganglion of facial nerve; herpes zoster oticus' },
      ],
    },
    5: {
      level: 5,
      summary: 'Mastery of ear anatomy requires integration of embryology (1st and 2nd branchial arch derivatives), three-dimensional temporal bone relationships, and ultrastructural knowledge of cochlear and vestibular transduction mechanisms.',
      explanation: `Expert-level understanding of ear anatomy encompasses embryologic development, microanatomy, and surgical relevance.

**Embryology:**
- External ear: 1st (mandibular) and 2nd (hyoid) branchial arch hillocks
  - 1st arch: Hillocks 1-3 (tragus, helix, cymba)
  - 2nd arch: Hillocks 4-6 (concha, antihelix, antitragus, lobule)
- Middle ear: 1st pharyngeal pouch (Eustachian tube, middle ear cavity)
  - Ossicles: 1st arch (malleus head, incus body), 2nd arch (malleus handle, incus long process, stapes superstructure)
- Inner ear: Otic placode (otic vesicle) at 3 weeks
  - Cochlear duct complete by 20 weeks
  - Semicircular canals by 23 weeks

**Microanatomy:**
- Organ of Corti:
  - Inner hair cells: Single row, afferent innervation (95% of cochlear nerve fibers)
  - Outer hair cells: Three rows, efferent innervation, electromotility (prestin)
  - Pillar cells: Form tunnel of Corti
  - Tectorial membrane: Overlies hair cells
- Stria vascularis: Marginal cells, intermediate cells, basal cells
- Vestibular hair cells: Type I (flask-shaped, calyx innervation) and Type II (cylindrical, bouton innervation)

**Temporal Bone Surgery Anatomy:**
- Translabyrinthine approach: Hearing sacrifice for CPA tumor access
- Retrolabyrinthine approach: Preserves hearing, limited access
- Middle cranial fossa approach: Superior access to IAC, preserves hearing
- Transcochlear approach: Maximal access, facial nerve mobilization

**Congenital Anomalies:**
- Microtia: 1st/2nd arch syndrome, associated with atresia
- Aural atresia: May require canaloplasty or bone-anchored hearing device
- Mondini dysplasia: Incomplete cochlear turns (1.5 instead of 2.5)
- Large vestibular aqueduct: Associated with enlarged endolymphatic sac, progressive hearing loss`,
      keyTerms: [
        { term: 'prestin', definition: 'Motor protein in outer hair cells enabling electromotility' },
        { term: 'Mondini dysplasia', definition: 'Incomplete cochlear development with 1.5 turns' },
        { term: 'large vestibular aqueduct', definition: '>1.5mm at midpoint; common cause of progressive pediatric SNHL' },
      ],
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['ENT', 'auditory'],
    topics: ['anatomy', 'ear', 'hearing'],
    keywords: ['ear anatomy', 'cochlea', 'ossicles', 'vestibular'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default earAnatomy;
