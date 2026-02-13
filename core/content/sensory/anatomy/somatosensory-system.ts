/**
 * Somatosensory System Anatomy - Educational Content
 *
 * Anatomical structures responsible for touch, temperature, pain, and proprioception.
 */

import { EducationalContent } from '../../types';

export const somatosensorySystemAnatomy: EducationalContent = {
  id: 'anatomy-somatosensory-system',
  type: 'system',
  name: 'Somatosensory System Anatomy',
  nameEs: 'Anatomia del Sistema Somatosensorial',
  alternateNames: ['Touch System', 'Sensory Receptors', 'Anatomia Sensorial'],
  fmaId: 'FMA:78519',

  levels: {
    1: {
      level: 1,
      summary: 'Your somatosensory system lets you feel touch, temperature, pain, and where your body parts are. Special sensors in your skin send messages to your brain.',
      explanation: `## Your Sense of Touch

Your skin is the largest organ in your body, and it is full of special sensors that let you feel the world around you!

### What You Can Feel

**Touch and Pressure:**
- Light touches like a feather
- Firm pressure like a hug
- Vibrations like a phone buzzing

**Temperature:**
- Hot things like soup
- Cold things like ice cream

**Pain:**
- Protects you from getting hurt
- Tells you when something is wrong

**Body Position:**
- Know where your arms and legs are even with eyes closed
- Helps you walk without looking at your feet

### Sensors in Your Skin

Different parts of your body have different amounts of sensors:
- Your fingertips have the most - that is why you can feel such tiny details
- Your back has fewer sensors
- Your lips and tongue are also very sensitive

### Fun Facts

- Your brain receives touch information constantly, even when you are sleeping
- If you could spread out your skin, it would cover about 20 square feet
- Blind people use their sense of touch to read Braille`,
      keyTerms: [
        { term: 'somatosensory', definition: 'The sensory system that lets you feel touch, temperature, pain, and body position' },
        { term: 'receptors', definition: 'Special cells that detect different sensations and send signals to the brain' }
      ],
      patientCounselingPoints: [
        'Protect your skin from extreme heat and cold.',
        'If you lose feeling in any body part, tell a doctor right away.',
        'Check your skin regularly for cuts or injuries, especially if you have diabetes.'
      ]
    },
    2: {
      level: 2,
      summary: 'The somatosensory system includes various receptor types in skin and deep tissues (mechanoreceptors, thermoreceptors, nociceptors, proprioceptors), with pathways ascending through spinal cord, brainstem, thalamus to somatosensory cortex.',
      explanation: `## Somatosensory System Anatomy

### Receptor Types

**Mechanoreceptors:**
- Merkel discs: light touch, texture, form
- Meissner corpuscles: light touch, vibration (40-50Hz), rapid adapting
- Pacinian corpuscles: deep pressure, vibration (200-300Hz), rapid adapting
- Ruffini endings: skin stretch, sustained pressure
- Hair follicle receptors: light touch

**Thermoreceptors:**
- Cold receptors: free nerve endings (A-delta and C fibers), 10-35C
- Warm receptors: free nerve endings, 30-45C
- Noxious heat/cold: >45C or <5C

**Nociceptors (Pain):**
- A-delta fibers: fast, sharp pain, myelinated
- C fibers: slow, burning/aching pain, unmyelinated
- Types: thermal, mechanical, chemical
- Silent nociceptors: activated by inflammation

**Proprioceptors:**
- Muscle spindles: muscle length and velocity
- Golgi tendon organs: muscle tension
- Joint receptors: joint position
- Cutaneous proprioceptors: skin stretch

### Somatosensory Pathways

**Dorsal Column-Medial Lemniscus (DCML):**
- Carries: fine touch, vibration, proprioception
- First-order neuron: dorsal root ganglion
- Synapse: nucleus gracilis/cuneatus (medulla)
- Decussation: medial lemniscus
- Thalamus: VPL nucleus
- Cortex: primary somatosensory cortex (postcentral gyrus)

**Anterolateral System (Spinothalamic):**
- Carries: pain, temperature, crude touch
- First-order neuron: dorsal root ganglion
- Synapse: dorsal horn (spinal cord)
- Decussation: anterior white commissure (within one level)
- Tracts: lateral spinothalamic (pain/temp), anterior spinothalamic (crude touch)
- Thalamus: VPL nucleus
- Cortex: somatosensory cortex, insula, cingulate

**Trigeminal System:**
- Carries: face sensation
- Nerve: CN V (ophthalmic, maxillary, mandibular divisions)
- Pathway: trigeminal ganglion -> trigeminal nucleus (pons) -> thalamus -> cortex

### Cortical Processing

**Primary Somatosensory Cortex (S1):**
- Postcentral gyrus (Brodmann areas 3a, 3b, 1, 2)
- Homunculus: somatotopic organization
- Processing: intensity, location, quality

**Secondary Somatosensory Cortex (S2):**
- Parietal operculum
- Bilateral representation
- Sensory discrimination

**Other Areas:**
- Insula: interoception, temperature, pain affect
- Cingulate cortex: pain affect, motivation
- Posterior parietal: sensory integration`,
      keyTerms: [
        { term: 'dorsal column-medial lemniscus', definition: 'Ascending pathway carrying fine touch, vibration, and proprioception' },
        { term: 'spinothalamic tract', definition: 'Ascending pathway carrying pain and temperature sensations' },
        { term: 'homunculus', definition: 'Somatotopic map of body surface in somatosensory cortex' },
        { term: 'mechanoreceptors', definition: 'Sensory receptors responding to mechanical pressure or distortion' }
      ],
      examples: [
        'Lesion of dorsal columns causes loss of fine touch and proprioception (sensory ataxia).',
        'Syringomyelia damages decussating spinothalamic fibers, causing bilateral loss of pain/temperature.',
        'Thalamic stroke can cause central post-stroke pain syndrome (thalamic pain).'
      ]
    },
    3: {
      level: 3,
      summary: 'El sistema somatosensorial incluye diversos tipos de receptores en piel y tejidos profundos (mecanorreceptores, termorreceptores, nociceptores, propioceptores), con vias ascendentes a traves de medula espinal, troncoencefalo, talamo hacia corteza somatosensorial.',
      explanation: `## Anatomia del Sistema Somatosensorial

### Tipos de Receptores

**Mecanorreceptores:**
- Discos de Merkel: tacto ligero, textura, forma
- Corpusculos de Meissner: tacto ligero, vibracion (40-50Hz), adaptacion rapida
- Corpusculos de Pacini: presion profunda, vibracion (200-300Hz), adaptacion rapida
- Terminaciones de Ruffini: estiramiento cutaneo, presion sostenida
- Receptores foliculares pilosos: tacto ligero

**Termorreceptores:**
- Receptores de frio: terminaciones nerviosas libres (fibras A-delta y C), 10-35C
- Receptores de calor: terminaciones nerviosas libres, 30-45C
- Calor/frio nocivo: >45C o <5C

**Nociceptores (Dolor):**
- Fibras A-delta: rapido, dolor agudo, mielinicas
- Fibras C: lento, dolor quemante/pulsatil, amielinicas
- Tipos: termico, mecanico, quimico
- Nociceptores silenciosos: activados por inflamacion

**Propioceptores:**
- Husos musculares: longitud y velocidad muscular
- Organos tendinosos de Golgi: tension muscular
- Receptores articulares: posicion articular
- Propioceptores cutaneos: estiramiento cutaneo

### Vias Somatosensoriales

**Columna Dorsal-Lemnisco Medial (CDLM):**
- Transporta: tacto fino, vibracion, propiocepcion
- Primera neurona: ganglio de la raiz dorsal
- Sinapsis: nucleo gracilis/cuneatus (bulbo)
- Decusacion: lemnisco medial
- Talamo: nucleo VPL
- Corteza: corteza somatosensorial primaria (giro postcentral)

**Sistema Anterolateral (Espinotalamico):**
- Transporta: dolor, temperatura, tacto grueso
- Primera neurona: ganglio de la raiz dorsal
- Sinapsis: asta dorsal (medula espinal)
- Decusacion: comisura blanca anterior (dentro de un nivel)
- Tractos: espinotalamico lateral (dolor/temp), espinotalamico anterior (tacto grueso)
- Talamo: nucleo VPL
- Corteza: corteza somatosensorial, insula, cingulado

**Sistema Trigeminal:**
- Transporta: sensacion facial
- Nervio: CN V (divisiones oftalmica, maxilar, mandibular)
- Via: ganglio trigeminal -> nucleo trigeminal (puente) -> talamo -> corteza

### Procesamiento Cortical

**Corteza Somatosensorial Primaria (S1):**
- Giro postcentral (areas de Brodmann 3a, 3b, 1, 2)
- Homunculo: organizacion somatotopica
- Procesamiento: intensidad, localizacion, calidad

**Corteza Somatosensorial Secundaria (S2):**
- Operculo parietal
- Representacion bilateral
- Discriminacion sensorial

**Otras Areas:**
- Insula: interocepcion, temperatura, afecto del dolor
- Corteza cingulada: afecto del dolor, motivacion
- Parietal posterior: integracion sensorial`,
      keyTerms: [
        { term: 'columna dorsal-lemnisco medial', definition: 'Via ascendente que transporta tacto fino, vibracion y propiocepcion' },
        { term: 'tracto espinotalamico', definition: 'Via ascendente que transporta sensaciones de dolor y temperatura' },
        { term: 'homunculo', definition: 'Mapa somatotopico de la superficie corporal en la corteza somatosensorial' },
        { term: 'mecanorreceptores', definition: 'Receptores sensoriales que responden a presion mecanica o distorsion' }
      ],
      examples: [
        'La lesion de las columnas dorsales causa perdida de tacto fino y propiocepcion (ataxia sensorial).',
        'La siringomielia dana fibras espinotalamicas decusadas, causando perdida bilateral de dolor/temperatura.',
        'El accidente vascular talamico puede causar sindrome de dolor central pos-AVC (dolor talamico).'
      ]
    },
    4: {
      level: 4,
      summary: 'The somatosensory system processes tactile, thermal, nociceptive, and proprioceptive information through specialized receptors and distinct ascending pathways, with cortical representation organized somatotopically and integrated for perception and motor control.',
      explanation: `## Advanced Somatosensory Anatomy

**Receptor Physiology:**
- Merkel: slowly adapting type I, Merkel cell-neurite complex, light touch
- Meissner: rapidly adapting, lamellated corpuscle, flutter
- Pacinian: rapidly adapting, onion-like lamellae, vibration
- Ruffini: slowly adapting type II, stretch
- Free nerve endings: polymodal (pain, temperature)

**Spinal Cord Organization:**
- Dorsal horn laminae (Rexed):
  - I: marginal zone, nociception
  - II: substantia gelatinosa, nociception modulation
  - III-IV: nucleus proprius, light touch
  - V: wide dynamic range neurons
  - VI: deep dorsal horn, proprioception
- Interneurons: excitatory, inhibitory, propriospinal

**Sensory Processing:**
- Lateral inhibition: sharpens spatial discrimination
- Convergence: single neurons respond to multiple receptors
- Plasticity: cortical reorganization after injury or training

**Clinical Pathology:**
- Peripheral neuropathy: length-dependent, stocking-glove distribution
- Radiculopathy: dermatomal pattern
- Myelopathy: sensory level, dissociated sensory loss
- Thalamic lesion: hemisensory loss, central pain`,
      keyTerms: [
        { term: 'laminae of Rexed', definition: 'Cytoarchitectonic layers of spinal cord gray matter' },
        { term: 'lateral inhibition', definition: 'Neural mechanism that enhances contrast and spatial discrimination' },
        { term: 'wide dynamic range neurons', definition: 'Spinal cord neurons responding to both innocuous and noxious stimuli' }
      ],
      clinicalNotes: `Clinical correlations:

1. **Peripheral neuropathy:** Diabetes, alcohol, chemotherapy common causes. Stocking-glove distribution. Affects longest fibers first.

2. **Spinal cord injury:** Complete vs incomplete. Brown-Sequard (hemisection): ipsilateral motor/proprioception loss, contralateral pain/temperature loss.

3. **Thalamic syndrome:** Dejerine-Roussy syndrome - delayed onset pain, sensory disturbance after thalamic stroke.`
    },
    5: {
      level: 5,
      summary: 'El sistema somatosensorial procesa informacion tactil, termica, nociceptiva y propioceptiva a traves de receptores especializados y vias ascendentes distintas, con representacion cortical organizada somatotopicamente e integrada para percepcion y control motor.',
      explanation: `## Anatomia Somatosensorial Avanzada

**Fisiologia de Receptores:**
- Merkel: adaptacion lenta tipo I, complejo celula de Merkel-neurita, tacto ligero
- Meissner: adaptacion rapida, corpusculo lamelado, vibracion ligera
- Pacini: adaptacion rapida, laminas tipo cebolla, vibracion
- Ruffini: adaptacion lenta tipo II, estiramiento
- Terminaciones nerviosas libres: polimodales (dolor, temperatura)

**Organizacion de la Medula Espinal:**
- Laminas del asta dorsal (Rexed):
  - I: zona marginal, nocicepcion
  - II: sustancia gelatinosa, modulacion de nocicepcion
  - III-IV: nucleo propio, tacto ligero
  - V: neuronas de rango dinamico amplio
  - VI: asta dorsal profunda, propiocepcion
- Interneuronas: excitatorias, inhibitorias, propioespinales

**Procesamiento Sensorial:**
- Inhibicion lateral: agudiza discriminacion espacial
- Convergencia: neuronas individuales responden a multiples receptores
- Plasticidad: reorganizacion cortical despues de lesion o entrenamiento

**Patologia Clinica:**
- Neuropatia periferica: dependiente de longitud, distribucion en guante-media
- Radiculopatia: patron dermatomal
- Mielopatia: nivel sensorial, perdida sensorial disociada
- Lesion talamica: perdida hemisensorial, dolor central`,
      keyTerms: [
        { term: 'laminas de Rexed', definition: 'Capas citoarquitectonicas de la sustancia gris de la medula espinal' },
        { term: 'inhibicion lateral', definition: 'Mecanismo neural que mejora el contraste y la discriminacion espacial' },
        { term: 'neuronas de rango dinamico amplio', definition: 'Neuronas de la medula espinal que responden tanto a estimulos inocuos como nocivos' }
      ],
      clinicalNotes: `Correlaciones clinicas:

1. **Neuropatia periferica:** Diabetes, alcohol, quimioterapia causas comunes. Distribucion en guante-media. Afecta fibras mas largas primero.

2. **Lesion de medula espinal:** Completa vs incompleta. Brown-Sequard (hemiseccion): perdida motora/propioceptiva ipsilateral, perdida de dolor/temperatura contralateral.

3. **Sindrome talamico:** Sindrome de Dejerine-Roussy - inicio retardado de dolor, alteracion sensorial despues de accidente vascular talamico.`
    },
  },

  media: [],

  citations: [
    {
      id: 'kandel-somatosensory',
      type: 'textbook',
      title: 'Principles of Neural Science',
      authors: ['Kandel ER', 'Schwartz JH', 'Jessell TM', 'et al.'],
      source: 'McGraw-Hill',
      chapter: 'The Somatosensory System',
    },
    {
      id: 'snell-neuro',
      type: 'textbook',
      title: 'Clinical Neuroanatomy',
      authors: ['Snell RS'],
      source: 'Lippincott Williams & Wilkins',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-sensory-system-overview', targetType: 'system', relationship: 'parent', label: 'Sensory Systems Overview' },
    { targetId: 'anatomy-visual-system', targetType: 'system', relationship: 'sibling', label: 'Visual System' },
    { targetId: 'anatomy-auditory-system', targetType: 'system', relationship: 'sibling', label: 'Auditory System' },
    { targetId: 'anatomy-integumentary', targetType: 'system', relationship: 'related', label: 'Integumentary System' },
  ],

  tags: {
    systems: ['sensory', 'nervous', 'integumentary'],
    topics: ['anatomy', 'sensory', 'neuroanatomy'],
    keywords: ['somatosensory', 'touch', 'pain', 'proprioception', 'sensory pathways', 'receptors'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'neurosurgery'],
    },
  },

  createdAt: '2026-01-30T12:00:00.000Z',
  updatedAt: '2026-01-30T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default somatosensorySystemAnatomy;
