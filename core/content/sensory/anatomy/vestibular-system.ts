/**
 * Vestibular System Anatomy - Educational Content
 *
 * Anatomical structures responsible for balance and spatial orientation.
 */

import { EducationalContent } from '../../types';

export const vestibularSystemAnatomy: EducationalContent = {
  id: 'anatomy-vestibular-system',
  type: 'system',
  name: 'Vestibular System Anatomy',
  nameEs: 'Anatomia del Sistema Vestibular',
  alternateNames: ['Balance System', 'Equilibrium System', 'Anatomia del Equilibrio'],
  fmaId: 'FMA:52785',

  levels: {
    1: {
      level: 1,
      summary: 'Your vestibular system helps you keep your balance and know which way is up. It includes three loops in your inner ear and two small sacs that sense movement and gravity.',
      explanation: `## Your Balance System

Have you ever spun around and felt dizzy? That is your vestibular system at work! This amazing system helps you stay balanced and know where your body is in space.

### Parts of Your Balance System

**Three Semicircular Canals:**
- These look like three half-circles filled with fluid
- They are positioned at right angles to each other (like the corner of a box)
- Each one senses a different type of head movement:
  - One senses when you nod your head (yes)
  - One senses when you shake your head (no)
  - One senses when you tilt your head (ear to shoulder)

**Two Small Sacs:**
- **Utricle:** Senses when you move forward, backward, or sideways
- **Saccule:** Senses when you move up and down (like in an elevator)
- Both also sense gravity - they tell you which way is up or down

### How It Works

Inside these canals and sacs are tiny hair cells with even tinier hairs sticking up into the fluid. When you move your head:

1. The fluid in the canals moves (inertia keeps it still while your head moves)
2. The moving fluid bends the tiny hairs on the hair cells
3. The hair cells send messages to your brain
4. Your brain combines this information with what your eyes see and what your feet feel
5. This helps you stay balanced!

### Working Together

Your vestibular system works as a team with:
- **Your eyes:** They see where you are going
- **Your feet and legs:** They feel the ground beneath you
- **Your brain:** It puts all the information together

When these systems disagree (like when you are on a boat), you might feel dizzy or sick.

### Fun Facts

- Astronauts feel dizzy when they first get to space because there is no gravity for the vestibular system to sense
- Your vestibular system starts working before you are born
- Ice skaters and gymnasts have very well-trained vestibular systems`,
      keyTerms: [
        { term: 'semicircular canals', definition: 'Three fluid-filled loops in the inner ear that sense head rotation' },
        { term: 'utricle', definition: 'A small sac that senses horizontal movement and gravity' },
        { term: 'saccule', definition: 'A small sac that senses vertical movement and gravity' },
        { term: 'vestibular system', definition: 'The sensory system in the inner ear that provides balance and spatial orientation' }
      ],
      analogies: [
        'The semicircular canals are like a level that carpenters use - they tell you when things are tilted.',
        'The hair cells are like seaweed waving in ocean currents - they move with the fluid to sense motion.'
      ],
      examples: [
        'When you spin around and then stop, the fluid keeps moving for a while, making you feel dizzy.',
        'Riding in a car or boat can make some people feel sick because their vestibular system feels motion that their eyes do not see.'
      ],
      patientCounselingPoints: [
        'If you feel dizzy, sit down right away to prevent falling.',
        'Some exercises can help train your vestibular system to work better.',
        'If dizziness does not go away, you should see a doctor.'
      ]
    },
    2: {
      level: 2,
      summary: 'The vestibular system comprises the semicircular canals (angular acceleration), utricle and saccule (linear acceleration), and vestibular nerve transmitting balance information to the brainstem and cerebellum.',
      explanation: `## Vestibular System Anatomy

### Peripheral Vestibular Apparatus

**Semicircular Canals:**
- Three orthogonally oriented canals: anterior (superior), posterior, lateral (horizontal)
- Each canal detects rotation in one plane
- Ampulla: dilated region containing crista ampullaris (sensory epithelium)
- Cupula: gelatinous structure projecting into ampulla, deflects with endolymph flow
- Kinocilium orientation determines excitatory/inhibitory direction

**Otolith Organs:**

**Utricle:**
- Horizontal macula (sensory epithelium)
- Detects horizontal linear acceleration and head tilt
- Statoconial membrane: gelatinous layer with calcium carbonate crystals (otoconia)

**Saccule:**
- Vertical macula
- Detects vertical linear acceleration
- Also sensitive to low-frequency vibrations (80-500 Hz)

**Hair Cells:**
- Type I: flask-shaped, calyx afferent innervation, phasic-tonic response
- Type II: cylindrical, bouton innervation, tonic response
- Stereocilia: graded height, deflection toward kinocilium depolarizes
- Mechanotransduction: tip-link gated channels

### Vestibular Nerve (CN VIII)
- Superior division: innervates anterior/superior canals, utricle, part of saccule
- Inferior division: innervates posterior canal, main saccule innervation
- Cell bodies: Scarpa's ganglion (internal auditory canal)
- Central processes: cochlear nuclei, vestibular nuclei

### Central Vestibular Pathways

**Vestibular Nuclei (Brainstem):**
- Superior (Bechterew): ocular reflexes, integration
- Medial (Schwalbe): ascending pathways, ocular reflexes
- Lateral (Deiters): spinal reflexes, descending pathways
- Inferior (spinal/descending): cerebellar connections, autonomic

**Projections:**
- Medial longitudinal fasciculus (MLF): VOR (vestibulo-ocular reflex)
- Vestibulospinal tracts: postural control
- Cerebellum: flocculonodular lobe, fastigial nucleus
- Thalamus: VPL, posterolateral
- Cortex: parietoinsular vestibular cortex (PIVC), area 2v, 3av

**Vestibulo-Ocular Reflex (VOR):**
- Compensatory eye movements during head motion
- Maintains visual stability
- Three-neuron arc: vestibular nerve -> vestibular nuclei -> ocular motor nuclei`,
      keyTerms: [
        { term: 'ampulla', definition: 'Dilated region of semicircular canal containing sensory crista' },
        { term: 'cupula', definition: 'Gelatinous structure in ampulla that deflects with endolymph movement' },
        { term: 'otoconia', definition: 'Calcium carbonate crystals in otolith organs that provide inertia' },
        { term: 'Scarpa ganglion', definition: 'Vestibular ganglion containing bipolar neuron cell bodies' },
        { term: 'VOR', definition: 'Vestibulo-ocular reflex that stabilizes images during head movement' }
      ],
      examples: [
        'Benign paroxysmal positional vertigo (BPPV) occurs when otoconia dislodge into semicircular canals.',
        'Vestibular neuritis causes acute vertigo due to inflammation of vestibular nerve.'
      ]
    },
    3: {
      level: 3,
      summary: 'El sistema vestibular periferico incluye canales semicirculares con crestas ampulares y cupulas para aceleracion angular, y organos otoliticos (utriculo y saculo) con maculas y estatoconios para aceleracion lineal y gravedad.',
      explanation: `## Anatomia del Sistema Vestibular

### Aparato Vestibular Periferico

**Canal Semicircular:**
- Tres canales perpendiculares entre si (sistema de coordenadas ortogonal)
- Canales correspondientes en ambos oidos paralelos (excitacion copulares)
- Dimensiones: diametro 0.3mm, longitud 13-19mm
- Ampolla: dilatacion bulbosa (2mm diametro)
- Conexion utriculo: cinco aberturas (utriculo comun, dos ampollares individuales)

**Cresta Ampullar:**
- Epitelio sensorial tipo neuroepitelio
- Celulas ciliadas: tipo I (caliciformes) y tipo II (cilindricas)
- Estereocilios: 50-100 por celula, graduados en altura
- Cinelio: un cilio verdadero, posicionado lateralmente
- Politicacion direccional: todas las celulas en una cresta tienen cinelio del mismo lado

**Cupula:**
- Estructura gelatinosa (proteoglicanos, fibras de colageno)
- Extiende desde crista hasta techo de ampolla
- Sellada hermeticamente (sin otoconios)
- Deflexion por movimiento de endolinfa
- Deflexion hacia cinelio: excitacion

**Organos Otoliticos:**

**Utriculo:**
- Macula: placa sensorial 3x2mm
- Orientacion: horizontal (aproximadamente)
- Estriola: linea divisoria con curvatura hacia atras
- Politicacion: cinelio hacia estriola en ambos lados
- Funcion: aceleracion lineal horizontal, inclinacion de cabeza

**Saculo:**
- Macula: placa sensorial 2x1mm
- Orientacion: vertical (aproximadamente)
- Estriola: linea divisoria con curvatura hacia abajo
- Politicacion: cinelio hacia estriola (varia por region)
- Funcion: aceleracion lineal vertical, vibracion de alta frecuencia

**Membrana Estatoconial:**
- Capa gelatinosa (otolin) sobre macula
- Estatoconios (otoconios): cristales de carbonato de calcio (0.5-30 micrometros)
- Densidad: proporciona inercia ante aceleracion
- Anclaje a estereocilios por fibras de gel

**Celulas Ciliadas Vestibulares:**
- Tipo I: forma de botella, base estrecha, sinapsis caliciforme (un solo terminal)
- Tipo II: forma cilindrica, sinapsis bouton (multiples terminales)
- Fibras aferentes: calices (tipo I), boutons (tipo II)
- Fibras eferentes: sinapsis en cuello de tipo I y base de tipo II

### Via Vestibular

**Nervio Vestibular (CN VIII):**
- Division superior: conductos anterior/superior, utriculo
- Division inferior: conducto posterior, saculo (principalmente)
- Ganglio de Scarpa: 10,000 neuronas bipolares
- Conducto auditivo interno: 8-10mm

**Nucleos Vestibulares:**
- Superior (Bechterew): reflejos oculares, integracion
- Medial (Schwalbe): vias ascendentes, reflejos oculares
- Lateral (Deiters): reflejos espinales, vias descendentes
- Inferior: conexiones cerebelosas, autonomicas

**Proyecciones Centrales:**
- Fasciculo longitudinal medial: reflejo vestibulo-oculomotor (VOR)
- Tractos vestibuloespinales: control postural
- Cerebelo: lobulo floculonodular, nucleo fastigial
- Talamo: VPL, posterolateral
- Corteza: corteza vestibular parietoinsular (PIVC), area 2v`,
      keyTerms: [
        { term: 'estriola', definition: 'Linea curva divisoria en la macula donde cambia la orientacion de los cinelios' },
        { term: 'otoconios', definition: 'Cristales de carbonato de calcio sobre la membrana estatoconial que proporcionan inercia' },
        { term: 'fasciculo longitudinal medial', definition: 'Via de conexion entre nucleos vestibulares y nucleos oculomotores para el VOR' },
        { term: 'polarizacion direccional', definition: 'Orientacion uniforme de los cinelios en una region sensorial que determina la direccion de respuesta' }
      ],
      examples: [
        'El VPPB (vertigo posicional paroxistico benigno) ocurre cuando otoconios se desprenden y entran en los conductos semicirculares.',
        'La neuritis vestibular causa vertigo agudo por inflamacion del nervio vestibular, a menudo post-viral.'
      ]
    },
    4: {
      level: 4,
      summary: 'The vestibular system demonstrates sophisticated biomechanics with semicircular canal dynamics, otolith physics, and neural processing for balance maintenance, gaze stabilization, and spatial orientation.',
      explanation: `## Advanced Vestibular Anatomy

### Biomechanics of Vestibular Function

**Semicircular Canal Dynamics:**
- Cupula-endolymph system: second-order mechanical system
- Time constant: approximately 5-7 seconds
- Cupula deflection proportional to angular acceleration
- Long-term stimulation: cupula adapts to constant velocity
- Canal-otolith interaction: resolves tilt vs translation ambiguity

**Otolith Physics:**
- Shear forces between otoconial membrane and macula
- Static tilt: constant gravitational shear force
- Linear acceleration: transient inertial force
- Frequency response: sensitive to <10Hz, filters high frequency noise
- Otolith mass: provides inertia for acceleration detection

**Hair Cell Transduction:**
- Tip-link gated mechanotransduction channels (similar to cochlea)
- Adaptation mechanisms: fast (Ca-dependent) and slow (motor protein)
- Resting potential: -50mV to -70mV
- Deflection sensitivity: <0.5 degrees angular deflection
- Directional polarity: organized across maculae and cristae

**Neural Coding:**
- Resting discharge: 50-100 spikes/second
- Bidirectional modulation: increase or decrease from spontaneous rate
- Regular afferents: low variability, tonic response, calyx endings (Type I)
- Irregular afferents: high variability, phasic-tonic, bouton endings
- Efferent modulation: cholinergic inhibition/excitation

### Central Processing

**Vestibular Nuclei Functional Organization:**

**Superior Vestibular Nucleus (SVN):**
- Input: anterior/superior canals, utricle
- Output: MLF, cerebellum (flocculus)
- Function: VOR vertical and torsional components

**Medial Vestibular Nucleus (MVN):**
- Input: all vestibular organs
- Output: MLF, contralateral MVN, cerebellum
- Function: VOR horizontal, integration

**Lateral Vestibular Nucleus (LVN):**
- Input: cerebellum (fastigial), otoliths
- Output: vestibulospinal tracts (ipsilateral)
- Function: postural control, anti-gravity muscle activation

**Inferior Vestibular Nucleus:**
- Input: posterior canal, saccule, cerebellum
- Output: vestibulospinal, cerebellar, autonomic
- Function: spinal reflexes, vestibulo-cerebellar loops

**Vestibulo-Ocular Reflex (VOR):**
- Three-neuron arc: 8ms latency
- Compensatory eye velocity matches head velocity (gain ~1.0)
- Canal-specific: horizontal canal -> horizontal eye movement
- Suppression during pursuit and gaze shifts
- Plasticity: cerebellar adaptation (gain adjustments)

**Vestibular Autonomic Projections:**
- Solitary nucleus connections
- Nausea/vomiting responses to vestibular stimulation
- Vasovagal responses
- Motion sickness pathways

### Clinical Anatomy

**Peripheral Vestibular Disorders:**

**Benign Paroxysmal Positional Vertigo (BPPV):**
- Pathophysiology: otoconial debris in semicircular canals
- Posterior canal: 90% (canalithiasis or cupulolithiasis)
- Horizontal canal: 5-10%
- Diagnosis: positional testing (Dix-Hallpike, supine roll)
- Treatment: canalith repositioning maneuvers (Epley, barbecue roll)

**Meniere Disease:**
- Endolymphatic hydrops: distension of membranous labyrinth
- Affects cochlea and vestibule
- Clinical triad: vertigo, tinnitus, fluctuating hearing loss
- Pathology: rupture and healing of Reissner membrane

**Vestibular Neuritis:**
- Inflammation of vestibular nerve (often post-viral)
- Superior division most commonly affected
- Acute severe vertigo with spontaneous nystagmus
- Central compensation over weeks to months

**Superior Semicircular Canal Dehiscence:**
- Bony dehiscence of canal roof
- Third mobile window syndrome
- Symptoms: vertigo with sound (Tullio), autophony, conductive hyperacusis
- Mechanism: pressure transmission between intracranial space and inner ear

**Central Vestibular Disorders:**
- Brainstem stroke: often with other neurologic signs
- Cerebellar ataxia: flocculonodular lobe involvement
- Vestibular migraine: central processing abnormalities
- Spatial disorientation: parietal cortex lesions`,
      keyTerms: [
        { term: 'canalithiasis', definition: 'Free-floating otoconia in semicircular canal causing BPPV' },
        { term: 'cupulolithiasis', definition: 'Otoconia adherent to cupula causing BPPV' },
        { term: 'endolymphatic hydrops', definition: 'Distension of endolymphatic space in Meniere disease' },
        { term: 'gain VOR', definition: 'Ratio of eye velocity to head velocity during head rotation' },
        { term: 'third mobile window', definition: 'Abnormal bony dehiscence allowing pressure shunting (SSCD)' }
      ],
      examples: [
        'Superior canal dehiscence causes vertigo with loud sounds (Tullio phenomenon) due to pressure shunting.',
        'Bilateral vestibular loss eliminates VOR, causing oscillopsia (bouncing vision) with head movement.'
      ],
      clinicalNotes: `Clinical correlations:

1. **VOR gain assessment:** Video head impulse test (vHIT) measures VOR gain for each canal. Reduced gain indicates peripheral vestibular deficit. Corrective saccades indicate canal-specific involvement.

2. **Central vs peripheral vertigo:** Direction-changing nystagmus, vertical nystagmus, or severe ataxia suggests central pathology requiring urgent neuroimaging.

3. **Vestibular compensation:** After unilateral loss, central compensation reduces symptoms over weeks. Rehabilitation exercises accelerate this process by promoting error-based learning.

4. **Canal plugging:** Surgical occlusion of semicircular canal for refractory BPPV or SSCD. Risks include hearing loss and persistent vestibular symptoms.`
    },
    5: {
      level: 5,
      summary: 'El sistema vestibular integra mecanica de fluidos, neurofisiologia compleja, y plasticidad central para mantener equilibrio, estabilizar la mirada, y proporcionar orientacion espacial con aplicaciones clinicas quirurgicas especificas.',
      explanation: `## Anatomia Vestibular Avanzada y Clinica

### Anatomia Quirurgica

**Cirugia de SCCD (Canal Semicircular Superior Dehiscente):**
- **Abordajes:**
  - Via media fossa: exposicion craneal del techo del canal, cierre con hueso/fascia
  - Via transmastoides: oclusion del canal con fascia/hueso
  - Riesgos: perdida auditiva, vertigo persistente

- **Tecnica de oclusion:**
  - Plugging del canal con fascia, hueso, o hueso recubierto
  - Fenomeno de tercera ventana: eliminacion del shunt de presion
  - Resultados: resolucion de sintomas en 80-90%

**Cirugia del Saculo Endolinfatico:**
- Indicacion: enfermedad de Meniere refractaria
- Anatomia: saco endolinfatico en duramadre posterior al conducto auditivo interno
- Tecnica: mastoidectomia, identificacion del conducto endolinfatico, decompresion/marsupializacion
- Riesgos: perdida auditiva (15-20%), paralisis facial, liquido cefalorraquideo

**Neurectomia Vestibular:**
- Indicacion: vertigo refractario con audicion util preservada
- Abordajes:
  - Via media fossa: exposicion del IAM, seccion nervio vestibular
  - Via retrolaberintica: posterior al laberinto oseo
  - Via retrosigmoidea: angulo pontocerebeloso
- Riesgo: perdida de audicion, paralisis facial

### Investigacion Avanzada

**Prostetica Vestibular:**
- Implante vestibular: estimulacion electrica de ampollas o nervio
- Indicaciones: perdida vestibular bilateral, Meniere refractario
- Multicanal: estimulacion independiente de cada canal
- Resultados: mejora del VOR, reduccion de oscilopsia

**Regeneracion:**
- Crecimiento de celulas ciliadas vestibulares: inhibicion de Notch, Atoh1
- Reconexion sinaptica: neurotrofinas (BDNF, NT-3)
- Desafios: integracion funcional, conexion aferente/eferente

**Conexiones Multisensoriales:**
- Corteza vestibular parietoinsular (PIVC): integracion visual-vestibular
- Corteza cingulada: procesamiento autonomico, nauseas
- Hipocampo: memoria espacial, celulas de lugar
- Cerebelo: aprendizaje motor, adaptacion del VOR`,
      keyTerms: [
        { term: 'plugging de canal', definition: 'Oclusion quirurgica de un canal semicircular con fascia u otro material' },
        { term: 'implante vestibular', definition: 'Dispositivo de estimulacion electrica del sistema vestibular para restaurar funcion' },
        { term: 'PIVC', definition: 'Corteza vestibular parietoinsular, area de integracion multisensorial' }
      ],
      clinicalNotes: `Correlaciones avanzadas:

1. **Adaptacion del VOR:** El cerebelo modula la ganancia del VOR mediante aprendizaje de error. Lentes minus/plus requieren ajuste de ganancia (movimientos oculares mayores/menores que movimientos de cabeza).

2. **Plasticidad vestibular:** La lesion unilateral induce cambios centrales incluyendo reorganizacion tonotopica y nuevas conexiones sinapticas. El ejercicio acelera esta compensacion.

3. **Biomecanica del hidrops:** La distension endolinfatica altera la mecanica del otolito y la funcion de la cresta ampullar, contribuyendo a los episodios de vertigo en la enfermedad de Meniere.`
    },
  },

  media: [],

  citations: [
    {
      id: 'goldberg-vestibular',
      type: 'textbook',
      title: 'The Vestibular System',
      authors: ['Goldberg JM', 'Wilson VJ', 'Cullen KE', 'et al.'],
      source: 'Oxford University Press',
    },
    {
      id: 'baloh-vertigo',
      type: 'textbook',
      title: 'Clinical Neurophysiology of the Vestibular System',
      authors: ['Baloh RW', 'Honrubia V', 'Kerber KA'],
      source: 'Oxford University Press',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-auditory-system', targetType: 'system', relationship: 'sibling', label: 'Auditory System' },
    { targetId: 'anatomy-sensory-system-overview', targetType: 'system', relationship: 'parent', label: 'Sensory Systems Overview' },
    { targetId: 'physiology-balance', targetType: 'process', relationship: 'related', label: 'Balance Physiology' },
  ],

  tags: {
    systems: ['sensory', 'nervous'],
    topics: ['anatomy', 'vestibular', 'neuroanatomy'],
    keywords: [
      'vestibular system',
      'balance',
      'semicircular canals',
      'otolith organs',
      'vertigo',
    ],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-30T12:00:00.000Z',
  updatedAt: '2026-01-30T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default vestibularSystemAnatomy;
