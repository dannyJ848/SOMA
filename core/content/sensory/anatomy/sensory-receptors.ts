/**
 * Sensory Receptors - Educational Content
 *
 * Overview of sensory receptor types across all sensory systems.
 */

import { EducationalContent } from '../../types';

export const sensoryReceptorsAnatomy: EducationalContent = {
  id: 'structure-sensory-receptors',
  type: 'structure',
  name: 'Sensory Receptors',
  nameEs: 'Receptores Sensoriales',
  alternateNames: ['Sensory End Organs', 'Receptor Types', 'Sensory Transducers'],
  fmaId: 'FMA:78499',

  levels: {
    1: {
      level: 1,
      summary: 'Sensory receptors are special cells in your body that detect things like light, sound, touch, heat, and smells, then send messages to your brain.',
      explanation: `## Sensory Receptors - Introduction

Sensory receptors are like tiny sensors in your body that detect different things from the world around you. They help you see, hear, touch, taste, and smell!

### Types of Sensory Receptors

**Receptors for Sight:**
- Located in your eyes (retina)
- Detect light and colors

**Receptors for Hearing:**
- Located in your ears (cochlea)
- Detect sound vibrations

**Receptors for Touch:**
- Located in your skin
- Detect pressure, texture, and movement

**Receptors for Temperature:**
- Located in your skin
- Detect hot and cold

**Receptors for Smell:**
- Located in your nose
- Detect odor particles

**Receptors for Taste:**
- Located on your tongue
- Detect sweet, sour, salty, bitter, and umami

**Receptors for Balance:**
- Located in your inner ear
- Help you stay upright

### How They Work

1. A receptor detects something (like light or pressure)
2. It changes the signal into an electrical message
3. The message travels through nerves to your brain
4. Your brain understands what the message means

### Fun Fact

You have millions of sensory receptors all over your body working all the time!`,
      keyTerms: [
        { term: 'receptors', definition: 'Special cells that detect sensory information and send signals to the brain' },
        { term: 'transduction', definition: 'The process of converting sensory stimuli into electrical signals' }
      ],
      analogies: [
        'Sensory receptors are like sensors in a smartphone - they detect touch, light, and motion.'
      ]
    },
    2: {
      level: 2,
      summary: 'Sensory receptors are specialized structures that transduce physical or chemical stimuli into neural signals, classified by modality (photoreceptors, mechanoreceptors, chemoreceptors, thermoreceptors, nociceptors) and adaptation rate.',
      explanation: `## Sensory Receptors Overview

### Classification by Modality

**Photoreceptors:**
- Rods: dim light, black/white vision
- Cones: color vision, high acuity
- Location: retina
- Transduction: photon -> G-protein cascade -> electrical signal

**Mechanoreceptors:**
- Touch: Merkel discs, Meissner corpuscles, Pacinian corpuscles, Ruffini endings
- Hearing: hair cells in cochlea
- Balance: hair cells in vestibular system
- Proprioception: muscle spindles, Golgi tendon organs
- Transduction: mechanical deformation -> ion channel opening

**Chemoreceptors:**
- Taste: taste buds (sweet, sour, salty, bitter, umami)
- Smell: olfactory receptor neurons (400+ types)
- Internal: carotid body (O2, CO2), hypothalamus (osmolarity)
- Transduction: chemical binding -> G-protein cascade

**Thermoreceptors:**
- Cold receptors: 10-35C
- Warm receptors: 30-45C
- Location: skin, hypothalamus
- Transduction: temperature-sensitive ion channels (TRP family)

**Nociceptors (Pain):**
- A-delta: fast, sharp, myelinated
- C fibers: slow, dull, unmyelinated
- Types: thermal, mechanical, chemical
- Transduction: high-threshold ion channels

### Classification by Adaptation

**Rapidly Adapting:**
- Detect change, not steady state
- Examples: Meissner, Pacinian, hair cells
- Function: detect motion, vibration

**Slowly Adapting:**
- Continue firing during constant stimulus
- Examples: Merkel, Ruffini, muscle spindles
- Function: detect position, sustained pressure

### Receptive Field

- Area where stimulus produces response
- Size varies: small (fingertip) to large (back)
- Overlap provides sensory acuity`,
      keyTerms: [
        { term: 'photoreceptors', definition: 'Sensory cells that detect light (rods and cones)' },
        { term: 'mechanoreceptors', definition: 'Sensory receptors that respond to mechanical pressure or distortion' },
        { term: 'chemoreceptors', definition: 'Sensory receptors that detect chemical stimuli' },
        { term: 'nociceptors', definition: 'Sensory receptors that detect painful stimuli' },
        { term: 'receptive field', definition: 'Area of sensory space that produces response in a sensory neuron' }
      ],
      examples: [
        'The high density of mechanoreceptors in fingertips allows for fine tactile discrimination.',
        'Nociceptors activate inflammatory responses through axon reflex when tissue is damaged.'
      ]
    },
    3: {
      level: 3,
      summary: 'Los receptores sensoriales son estructuras especializadas que transducen estimulos fisicos o quimicos en senales neuronales, clasificados por modalidad (fotorreceptores, mecanorreceptores, quimiorreceptores, termorreceptores, nociceptores) y tasa de adaptacion.',
      explanation: `## Panorama de Receptores Sensoriales

### Clasificacion por Modalidad

**Fotorreceptores:**
- Bastones: luz tenue, vision blanco/negro
- Conos: vision de color, alta agudeza
- Localizacion: retina
- Transduccion: foton -> cascada de proteina G -> senal electrica

**Mecanorreceptores:**
- Tacto: discos de Merkel, corpusculos de Meissner, corpusculos de Pacini, terminaciones de Ruffini
- Audicion: celulas ciliadas en caracol
- Equilibrio: celulas ciliadas en sistema vestibular
- Propiocepcion: husos musculares, organos tendinosos de Golgi
- Transduccion: deformacion mecanica -> apertura de canal ionico

**Quimiorreceptores:**
- Gusto: cuerpos gustativos (dulce, acido, salado, amargo, umami)
- Olfato: neuronas receptoras olfatorias (400+ tipos)
- Internos: cuerpo carotideo (O2, CO2), hipotalamo (osmolaridad)
- Transduccion: union quimica -> cascada de proteina G

**Termorreceptores:**
- Receptores de frio: 10-35C
- Receptores de calor: 30-45C
- Localizacion: piel, hipotalamo
- Transduccion: canales ionicos sensibles a temperatura (familia TRP)

**Nociceptores (Dolor):**
- A-delta: rapido, agudo, mielinizado
- Fibras C: lento, sordo, amielinico
- Tipos: termico, mecanico, quimico
- Transduccion: canales ionicos de alto umbral

### Clasificacion por Adaptacion

**Adaptacion Rapida:**
- Detectan cambio, no estado estable
- Ejemplos: Meissner, Pacini, celulas ciliadas
- Funcion: detectar movimiento, vibracion

**Adaptacion Lenta:**
- Continuan disparando durante estimulo constante
- Ejemplos: Merkel, Ruffini, husos musculares
- Funcion: detectar posicion, presion sostenida

### Campo Receptivo

- Area donde el estimulo produce respuesta
- Tamano variable: pequeno (punta de dedo) a grande (espalda)
- La superposicion proporciona agudeza sensorial`,
      keyTerms: [
        { term: 'fotorreceptores', definition: 'Celulas sensoriales que detectan luz (bastones y conos)' },
        { term: 'mecanorreceptores', definition: 'Receptores sensoriales que responden a presion mecanica o distorsion' },
        { term: 'quimiorreceptores', definition: 'Receptores sensoriales que detectan estimulos quimicos' },
        { term: 'nociceptores', definition: 'Receptores sensoriales que detectan estimulos dolorosos' },
        { term: 'campo receptivo', definition: 'Area del espacio sensorial que produce respuesta en una neurona sensorial' }
      ],
      examples: [
        'La alta densidad de mecanorreceptores en las yemas de los dedos permite discriminacion tactil fina.',
        'Los nociceptores activan respuestas inflamatorias a traves del reflejo axonico cuando el tejido esta danado.'
      ]
    },
    4: {
      level: 4,
      summary: 'Sensory receptors demonstrate specialized molecular mechanisms for transduction, receptor potentials, adaptation mechanisms, and coding of stimulus intensity and quality for transmission to the central nervous system.',
      explanation: `## Advanced Sensory Receptor Physiology

**Transduction Mechanisms:**

**Phototransduction:**
- Rhodopsin/opsins: GPCRs, activate transducin
- Phosphodiesterase: reduces cGMP
- cGMP-gated channels close
- Hyperpolarization (unusual for receptors)

**Mechanotransduction:**
- Stretch-activated ion channels
- Tip-link gating in hair cells
- Piezo channels in touch receptors
- Depolarization leads to transmitter release

**Chemotransduction:**
- GPCR activation
- Second messenger cascades (cAMP, IP3, DAG)
- TRP channel opening
- Depolarization

**Thermotransduction:**
- TRP channels (thermo-TRPs)
- TRPV1: heat, capsaicin (>43C)
- TRPM8: cold, menthol (<25C)
- Temperature-dependent channel gating

**Receptor Potential:**
- Graded response (not all-or-none)
- Amplitude proportional to stimulus intensity
- Summation possible
- Threshold for action potential generation

**Coding:**
- Frequency coding: firing rate proportional to intensity
- Population coding: number of active receptors
- Labeled lines: specific pathways for specific modalities
- Temporal coding: timing of action potentials

**Adaptation Mechanisms:**
- Channel inactivation
- Calcium-dependent feedback
- Receptor phosphorylation
- Mechanical adaptation (hair cells)`,
      keyTerms: [
        { term: 'receptor potential', definition: 'Graded change in membrane potential of a sensory receptor in response to stimulus' },
        { term: 'frequency coding', definition: 'Encoding stimulus intensity by action potential firing rate' },
        { term: 'labeled line', definition: 'Dedicated neural pathway for specific sensory modality' },
        { term: 'TRP channels', definition: 'Transient receptor potential channels involved in thermosensation' }
      ],
      clinicalNotes: `Clinical applications:

1. **Chronic pain:** Sensitized nociceptors lower threshold, show spontaneous activity. Targeting TRP channels for analgesia.

2. **Hearing loss:** Hair cell damage most common cause. Genetic mutations in transduction machinery (MYO7A, PCDH15, CDH23).

3. **Age-related sensory loss:** Loss of receptors (taste buds, hair cells), reduced transduction efficiency.`
    },
    5: {
      level: 5,
      summary: 'Los receptores sensoriales demuestran mecanismos moleculares especializados para transduccion, potenciales receptores, mecanismos de adaptacion, y codificacion de intensidad y calidad del estimulo para transmision al sistema nervioso central.',
      explanation: `## Fisiologia Avanzada de Receptores Sensoriales

**Mecanismos de Transduccion:**

**Fototransduccion:**
- RODOPSINAS/opsinas: GPCR, activan transducina
- Fosfodiesterasa: reduce cGMP
- Canales regulados por cGMP se cierran
- Hiperpolarizacion (inusual para receptores)

**Mecanotransduccion:**
- Canales ionicos activados por estiramiento
- Compuertas de tip-link en celulas ciliadas
- Canales Piezo en receptores tactiles
- Despolarizacion conduce a liberacion de neurotransmisor

**Quimiotransduccion:**
- Activacion de GPCR
- Cascadas de segundos mensajeros (cAMP, IP3, DAG)
- Apertura de canales TRP
- Despolarizacion

**Termotransduccion:**
- Canales TRP (termo-TRPs)
- TRPV1: calor, capsaicina (>43C)
- TRPM8: frio, mentol (<25C)
- Compuerta dependiente de temperatura

**Potencial Receptor:**
- Respuesta gradual (no todo-o-nada)
- Amplitud proporcional a intensidad del estimulo
- Sumacion posible
- Umbral para generacion de potencial de accion

**Codificacion:**
- Codificacion de frecuencia: tasa de disparo proporcional a intensidad
- Codificacion poblacional: numero de receptores activos
- Lineas etiquetadas: vias especificas para modalidades especificas
- Codificacion temporal: temporalizacion de potenciales de accion

**Mecanismos de Adaptacion:**
- Inactivacion de canales
- Retroalimentacion dependiente de calcio
- Fosforilacion de receptores
- Adaptacion mecanica (celulas ciliadas)`,
      keyTerms: [
        { term: 'potencial receptor', definition: 'Cambio gradual en el potencial de membrana de un receptor sensorial en respuesta a estimulo' },
        { term: 'codificacion de frecuencia', definition: 'Codificacion de la intensidad del estimulo por la tasa de disparo de potenciales de accion' },
        { term: 'linea etiquetada', definition: 'Via neural dedicada para modalidad sensorial especifica' },
        { term: 'canales TRP', definition: 'Canales del potencial de receptor transitorio involucrados en termosensacion' }
      ],
      clinicalNotes: `Aplicaciones clinicas:

1. **Dolor cronico:** Nociceptores sensibilizados tienen umbral mas bajo, muestran actividad espontanea. Canales TRP como dianas para analgesia.

2. **Hipoacusia:** Dano de celulas ciliadas causa mas comun. Mutaciones geneticas en maquinaria de transduccion (MYO7A, PCDH15, CDH23).

3. **Perdida sensorial relacionada con edad:** Perdida de receptores (cuerpos gustativos, celulas ciliadas), reduccion de la eficiencia de transduccion.`
    },
  },

  media: [],

  citations: [
    {
      id: 'kandel-principles',
      type: 'textbook',
      title: 'Principles of Neural Science',
      authors: ['Kandel ER', 'Schwartz JH', 'Jessell TM', 'et al.'],
      source: 'McGraw-Hill',
      chapter: 'Sensory Coding',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-sensory-system-overview', targetType: 'system', relationship: 'parent', label: 'Sensory Systems Overview' },
    { targetId: 'anatomy-visual-system', targetType: 'system', relationship: 'related', label: 'Visual System' },
    { targetId: 'anatomy-auditory-system', targetType: 'system', relationship: 'related', label: 'Auditory System' },
    { targetId: 'anatomy-somatosensory-system', targetType: 'system', relationship: 'related', label: 'Somatosensory System' },
  ],

  tags: {
    systems: ['sensory', 'nervous'],
    topics: ['anatomy', 'physiology', 'neuroscience'],
    keywords: ['sensory receptors', 'transduction', 'photoreceptors', 'mechanoreceptors', 'chemoreceptors', 'nociceptors'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-30T12:00:00.000Z',
  updatedAt: '2026-01-30T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sensoryReceptorsAnatomy;
