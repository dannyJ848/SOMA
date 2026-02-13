/**
 * Ear Anatomy - Detailed Educational Content
 *
 * Focused coverage of ear anatomy including external, middle, and inner ear structures.
 */

import { EducationalContent } from '../../types';

export const earAnatomy: EducationalContent = {
  id: 'structure-ear',
  type: 'structure',
  name: 'Ear Anatomy',
  nameEs: 'Anatomia del Oido',
  alternateNames: ['Otic Anatomy', 'Aural Anatomy', 'Otologic Anatomy'],
  fmaId: 'FMA:52780',

  levels: {
    1: {
      level: 1,
      summary: 'The ear has three main parts that work together to help you hear and keep your balance: the outer ear collects sound, the middle ear amplifies it, and the inner ear converts it to signals for your brain.',
      explanation: `## Ear Anatomy - Simple Overview

Your ears do two amazing jobs: they help you hear sounds and help you keep your balance!

### The Three Parts of Your Ear

**Outer Ear:**
- **Pinna:** The visible part on the side of your head shaped like a funnel
- **Ear canal:** The tube that carries sound to your eardrum

**Middle Ear:**
- **Eardrum:** A thin skin that vibrates when sound hits it
- **Three tiny bones:** The hammer, anvil, and stirrup (smallest bones in your body!)
- **Eustachian tube:** A small tube that connects to your throat

**Inner Ear:**
- **Cochlea:** Looks like a snail shell, turns vibrations into electrical signals
- **Semicircular canals:** Three loops that help with balance

### How Hearing Works

1. Sound enters your outer ear
2. Travels down the ear canal
3. Hits the eardrum and makes it vibrate
4. The three tiny bones make the vibration bigger
5. The stirrup passes vibration to the cochlea
6. The cochlea turns it into signals
7. The hearing nerve sends signals to your brain

### Spanish Words
- Ear = Oido / Oreja
- Eardrum = Timpano
- Hammer = Martillo
- Anvil = Yunque
- Stirrup = Estribo
- Cochlea = Caracol`,
      keyTerms: [
        { term: 'pinna', definition: 'The visible outer part of the ear' },
        { term: 'eardrum', definition: 'The thin membrane that vibrates with sound' },
        { term: 'cochlea', definition: 'The spiral-shaped organ that converts sound to signals' }
      ],
      analogies: [
        'The pinna is like a satellite dish - it collects sound waves.',
        'The ear bones are like a lever system - they make vibrations stronger.'
      ],
      patientCounselingPoints: [
        'Never put objects in your ear canal.',
        'Use earplugs around loud noises to protect your hearing.',
        'See a doctor if you have ear pain or cannot hear well.'
      ]
    },
    2: {
      level: 2,
      summary: 'The ear consists of external ear (auricle, external canal, tympanic membrane), middle ear (tympanic cavity, ossicles, Eustachian tube), and inner ear (cochlea for hearing, vestibular apparatus for balance).',
      explanation: `## Ear Anatomy

### External Ear

**Auricle (Pinna):**
- Cartilage framework covered by skin
- Helix, antihelix, concha, tragus, antitragus, lobule
- Funnel-shaped for sound collection

**External Acoustic Meatus:**
- Length: 2.5-3cm
- Outer 1/3 cartilaginous, inner 2/3 bony
- Slightly S-shaped
- Ceruminous glands produce earwax

**Tympanic Membrane:**
- Diameter: 8-10mm
- Cone-shaped, light reflex
- Pars tensa and pars flaccida
- Attaches to malleus

### Middle Ear (Tympanic Cavity)

**Boundaries:**
- Roof: tegmen tympani (separates from brain)
- Floor: jugular wall
- Medial: cochlear promontory, oval window, round window
- Lateral: tympanic membrane
- Anterior: carotid wall
- Posterior: mastoid wall, aditus to antrum

**Ossicles:**
- **Malleus:** Hammer, 8-9mm, attaches to eardrum
- **Incus:** Anvil, 7mm, connects malleus to stapes
- **Stapes:** Stirrup, 3-4mm, smallest bone, footplate in oval window

**Muscles:**
- Tensor tympani: CN V, tenses eardrum
- Stapedius: CN VII, dampens ossicular chain

**Eustachian Tube:**
- Connects middle ear to nasopharynx
- Length: 36mm
- Equalizes pressure
- Opened by swallowing/yawning

### Inner Ear

**Bony Labyrinth:**
- Cochlea (hearing)
- Vestibule (balance)
- Semicircular canals (balance)
- Filled with perilymph

**Cochlea:**
- Spiral, 2.5 turns
- Scala vestibuli, scala media, scala tympani
- Organ of Corti (sensory)
- Basilar membrane

**Vestibular System:**
- Semicircular canals: three loops, detect rotation
- Utricle and saccule: detect linear acceleration and gravity
- Ampullae: dilated portions with sensory cells

**Innervation:**
- Cochlear nerve (hearing)
- Vestibular nerve (balance)
- Together form CN VIII
- Pass through internal auditory meatus`,
      keyTerms: [
        { term: 'oval window', definition: 'Membrane-covered opening where stapes footplate transmits vibrations to inner ear' },
        { term: 'perilymph', definition: 'Fluid similar to extracellular fluid filling the bony labyrinth' },
        { term: 'organ of Corti', definition: 'Sensory organ in cochlea containing hair cells for hearing' },
        { term: 'Eustachian tube', definition: 'Tube connecting middle ear to nasopharynx for pressure equalization' }
      ],
      examples: [
        'Otitis media is infection of the middle ear, common in children.',
        'Otosclerosis causes fixation of the stapes in the oval window, conductive hearing loss.',
        'Meniere disease affects the inner ear causing vertigo, tinnitus, and hearing loss.'
      ]
    },
    3: {
      level: 3,
      summary: 'El oido consiste en oido externo (pabellon, conducto externo, membrana timpanica), oido medio (cavidad timpanica, huesecillos, trompa de Eustaquio), y oido interno (caracol para audicion, aparato vestibular para equilibrio).',
      explanation: `## Anatomia del Oido

### Oido Externo

**Pabellon (Oreja):**
- Armazon cartilaginoso cubierto por piel
- Helix, antihelix, concha, trago, antitrago, lobulo
- Forma embudo para recoleccion de sonido

**Conducto Auditivo Externo:**
- Longitud: 2.5-3cm
- Tercio externo cartilaginoso, dos tercios internos oseos
- Ligeramente en forma de S
- Glandulas ceruminosas producen cerumen

**Membrana Timpanica:**
- Diametro: 8-10mm
- Forma conica, reflejo de luz
- Pars tensa y pars flaccida
- Se adhiere al martillo

### Oido Medio (Cavidad Timpanica)

**Paredes:**
- Techo: tegmen timpanico (separa del cerebro)
- Piso: pared yugular
- Medial: promontorio coclear, ventana oval, ventana redonda
- Lateral: membrana timpanica
- Anterior: pared carotidea
- Posterior: pared mastoidea, aditus al antro

**Huesecillos:**
- **Martillo:** 8-9mm, se adhiere al timpano
- **Yunque:** 7mm, conecta martillo con estribo
- **Estribo:** 3-4mm, hueso mas pequeno, platillo en ventana oval

**Musculos:**
- Tensor del timpano: CN V, tensa timpano
- Estapedio: CN VII, amortigua cadena osicular

**Trompa de Eustaquio:**
- Conecta oido medio con nasofaringe
- Longitud: 36mm
- Iguala presion
- Se abre al tragar/bostezar

### Oido Interno

**Laberinto Oseo:**
- Caracol (audicion)
- Vestibulo (equilibrio)
- Conductos semicirculares (equilibrio)
- Lleno de perilinfa

**Caracol:**
- Espiral, 2.5 vueltas
- Escala vestibular, escala media, escala timpanica
- Organo de Corti (sensorial)
- Membrana basilar

**Sistema Vestibular:**
- Conductos semicirculares: tres bucles, detectan rotacion
- Utriculo y saculo: detectan aceleracion lineal y gravedad
- Ampollas: porciones dilatadas con celulas sensoriales

**Inervacion:**
- Nervio coclear (audicion)
- Nervio vestibular (equilibrio)
- Juntos forman el CN VIII
- Pasan a traves del conducto auditivo interno`,
      keyTerms: [
        { term: 'ventana oval', definition: 'Abertura cubierta por membrana donde el platillo del estribo transmite vibraciones al oido interno' },
        { term: 'perilinfa', definition: 'Fluido similar al liquido extracelular que llena el laberinto oseo' },
        { term: 'organo de Corti', definition: 'Organo sensorial en la caracol que contiene celulas ciliadas para la audicion' },
        { term: 'trompa de Eustaquio', definition: 'Tubo que conecta el oido medio con la nasofaringe para igualar la presion' }
      ],
      examples: [
        'La otitis media es una infeccion del oido medio, comun en ninos.',
        'La otoesclerosis causa fijacion del estribo en la ventana oval, hipoacusia conductiva.',
        'La enfermedad de Meniere afecta el oido interno causando vertigo, tinnitus y hipoacusia.'
      ]
    },
    4: {
      level: 4,
      summary: 'Detailed ear anatomy including cochlear mechanics, ossicular chain biomechanics, temporal bone relationships, and surgical landmarks for otologic procedures.',
      explanation: `## Advanced Ear Anatomy

**Temporal Bone Anatomy:**
- Squamous portion: lateral, temporal fossa
- Petrous portion: dense bone, houses inner ear
- Mastoid portion: air cells, antrum
- Tympanic portion: bony ear canal
- Styloid process: muscle attachments

**Cochlear Mechanics:**
- Traveling wave: von Bekesy mechanics
- Basilar membrane stiffness gradient
- Hair cell transduction: tip-link gated channels
- Cochlear amplification: outer hair cell electromotility
- Frequency mapping: base (high), apex (low)

**Ossicular Chain Biomechanics:**
- Area ratio: 17:1 (tympanic membrane to stapes footplate)
- Lever ratio: 1.3:1
- Total gain: approximately 22x (27dB)
- Acoustic reflex: stapedius and tensor tympani contraction

**Surgical Landmarks:**
- Tympanomeatal flap: vascular strip, incisions
- Facial recess: posterior tympanotomy
- Round window niche: cochlear implant insertion
- Facial nerve: second genu, chorda tympani
- Mastoidectomy: tegmen, sigmoid sinus, facial nerve`,
      keyTerms: [
        { term: 'facial recess', definition: 'Surgical triangle between facial nerve, chorda tympani, and incus for posterior tympanum access' },
        { term: 'tegmen tympani', definition: 'Bony roof of middle ear separating it from middle cranial fossa' },
        { term: 'cochlear amplification', definition: 'Active amplification of sound by outer hair cell motility' }
      ],
      clinicalNotes: `Clinical anatomy:

1. **Mastoidectomy:** Boundaries - tegmen (superior), sigmoid sinus (posterior), facial nerve (inferior), ear canal (anterior). Knowledge of these prevents complications.

2. **Stapedectomy:** Oval window anatomy critical. Footplate 3x1.4mm. Posterior footplate mobility determines prosthesis type.

3. **Cochlear implant:** Facial recess approach. Cochleostomy anterior-inferior to round window. Scala tympani insertion.

4. **Acoustic neuroma:** Typically arises from superior vestibular nerve at internal auditory meatus. Size classification: intracanalicular, small, medium, large.`
    },
    5: {
      level: 5,
      summary: 'Anatomia detallada del oido incluyendo mecanica coclear, biomecanica de la cadena osicular, relaciones del hueso temporal, y landmarks quirurgicos para procedimientos otologicos.',
      explanation: `## Anatomia Oido Avanzada

**Anatomia del Hueso Temporal:**
- Porcion escamosa: lateral, fosa temporal
- Porcion petrosa: hueso denso, alberga oido interno
- Porcion mastoidea: celulas aereas, antro
- Porcion timpanica: conducto auditivo oseo
- Apofisis estiloides: inserciones musculares

**Mecanica Coclear:**
- Onda viajante: mecanica de von Bekesy
- Gradiente de rigidez de la membrana basilar
- Transduccion de celulas ciliadas: canales regulados por tip-link
- Amplificacion coclear: electromotilidad de celulas ciliadas externas
- Mapeo de frecuencias: base (alta), apice (baja)

**Biomecanica de la Cadena Osicular:**
- Relacion de areas: 17:1 (timpanico a platillo del estribo)
- Relacion de palanca: 1.3:1
- Ganancia total: aproximadamente 22x (27dB)
- Reflejo acustico: contraccion del estapedio y tensor del timpano

**Landmarks Quirurgicos:**
- Colgajo timpanomeatal: franja vascular, incisiones
- Receso facial: timpanotomia posterior
- Ventana redonda: insercion de implante coclear
- Nervio facial: segunda rodilla, cuerda del timpano
- Mastoidectomia: tegmen, seno sigmoide, nervio facial`,
      keyTerms: [
        { term: 'receso facial', definition: 'Triangulo quirurgico entre nervio facial, cuerda del timpano y yunque para acceso a timpano posterior' },
        { term: 'tegmen timpanico', definition: 'Techo oseo del oido medio que lo separa de la fosa craneal media' },
        { term: 'amplificacion coclear', definition: 'Amplificacion activa del sonido por motilidad de las celulas ciliadas externas' }
      ],
      clinicalNotes: `Anatomia clinica:

1. **Mastoidectomia:** Limites - tegmen (superior), seno sigmoide (posterior), nervio facial (inferior), conducto auditivo (anterior). Conocimiento de estos previene complicaciones.

2. **Estapedectomia:** Anatomia de la ventana oval critica. Platillo 3x1.4mm. Movilidad del platillo posterior determina tipo de protesis.

3. **Implante coclear:** Abordaje del receso facial. Cocleostomia anterior-inferior a la ventana redonda. Insercion en escala timpanica.

4. **Neuroma del acustico:** Tipicamente surge del nervio vestibular superior en el conducto auditivo interno. Clasificacion por tamano: intrameatal, pequeno, mediano, grande.`
    },
  },

  media: [],

  citations: [
    {
      id: 'schuknecht-ear',
      type: 'textbook',
      title: 'Anatomy of the Temporal Bone with Surgical Implications',
      authors: ['Schuknecht HF'],
      source: 'Lea & Febiger',
    },
    {
      id: 'fisch-ear',
      type: 'textbook',
      title: 'Tympanoplasty, Mastoidectomy, and Stapes Surgery',
      authors: ['Fisch U', 'Colletti V', 'Lanser MJ'],
      source: 'Thieme',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-auditory-system', targetType: 'system', relationship: 'parent', label: 'Auditory System' },
    { targetId: 'anatomy-vestibular-system', targetType: 'system', relationship: 'related', label: 'Vestibular System' },
    { targetId: 'clinical-otoscopy', targetType: 'concept', relationship: 'related', label: 'Otoscopic Examination' },
  ],

  tags: {
    systems: ['sensory', 'nervous'],
    topics: ['anatomy', 'otology', 'ear'],
    keywords: ['ear', 'cochlea', 'tympanic membrane', 'ossicles', 'hearing', 'balance', 'otology'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['otolaryngology', 'neurology'],
    },
  },

  createdAt: '2026-01-30T12:00:00.000Z',
  updatedAt: '2026-01-30T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default earAnatomy;
