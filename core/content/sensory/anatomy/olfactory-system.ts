/**
 * Olfactory System Anatomy - Educational Content
 *
 * Anatomical structures of the sense of smell.
 */

import { EducationalContent } from '../../types';

export const olfactorySystemAnatomy: EducationalContent = {
  id: 'anatomy-olfactory-system',
  type: 'system',
  name: 'Olfactory System Anatomy',
  nameEs: 'Anatomia del Sistema Olfatorio',
  alternateNames: ['Smell System', 'Nasal Anatomy', 'Anatomia del Olfato'],
  fmaId: 'FMA:7194',

  levels: {
    1: {
      level: 1,
      summary: 'Your sense of smell comes from special cells high up in your nose that detect odors and send messages to your brain.',
      explanation: `## Your Sense of Smell

Your nose does more than just breathe! It also helps you smell things like flowers, cookies baking, or smoke from a fire.

### How Smelling Works

**Special Smell Cells:**
- Located high up in your nose, near the bridge
- About 10 million smell cells in each nostril
- These cells have tiny hairs that detect odor particles in the air

**The Smell Pathway:**
1. Odor molecules enter your nose when you breathe or sniff
2. They dissolve in the mucus lining your nose
3. Special smell cells detect the molecules
4. These cells send signals through tiny holes in your skull bone
5. The signals go directly to the smell center in your brain
6. Your brain recognizes the smell!

### Cool Facts About Smell

- Your sense of smell is connected to your memory - that's why smells can bring back strong memories
- Dogs have about 300 million smell cells (compared to your 20 million)
- You can smell over 1 trillion different odors
- Taste and smell work together - that's why food tastes bland when you have a cold

### Taking Care of Your Nose

- Avoid putting things in your nose
- See a doctor if you cannot smell things (it could indicate other problems)
- Some people lose their sense of smell temporarily with colds or COVID-19`,
      keyTerms: [
        { term: 'olfactory cells', definition: 'Special nerve cells in the nose that detect smells' },
        { term: 'olfactory bulb', definition: 'Structure in the brain that receives smell signals' }
      ],
      patientCounselingPoints: [
        'Tell a doctor if you notice a change in your sense of smell.',
        'Smoking can damage your sense of smell over time.',
        'Some medications can affect your ability to smell.'
      ]
    },
    2: {
      level: 2,
      summary: 'The olfactory system includes olfactory epithelium, bipolar olfactory receptor neurons, cribriform plate, olfactory bulbs and tracts, with direct projection to olfactory cortex without thalamic relay.',
      explanation: `## Olfactory System Anatomy

### Peripheral Olfactory Structures

**Nasal Cavity:**
- Superior meatus and olfactory region
- Nasal septum: perpendicular plate of ethmoid, vomer
- Turbinates (conchae): superior, middle, inferior
- Airflow patterns: eddy currents bring odorants to olfactory region

**Olfactory Epithelium:**
- Location: superior nasal cavity, cribriform plate region, superior turbinate
- Area: approximately 5-10 cm
- Yellowish-brown color
- Pseudostratified columnar epithelium

**Cell Types:**
- Olfactory receptor neurons (bipolar): 10-20 million
- Supporting (sustentacular) cells: metabolic support, secretion
- Basal cells: stem cells for regeneration (every 30-60 days)
- Bowman glands: serous secretion, odorant dissolution

**Olfactory Receptor Neurons:**
- Bipolar neurons (unique: directly exposed to environment)
- Dendrite: extends into olfactory mucosa, cilia (10-20 per cell)
- Axon: projects through cribriform plate to olfactory bulb
- Life span: 30-60 days, replaced from basal cells
- 400+ different receptor types (G-protein coupled)

**Olfactory Nerve (Cranial Nerve I):**
- Approximately 20 bundles (fila olfactoria)
- Pass through cribriform plate of ethmoid bone
- Small foramina in cribriform plate
- No neuronal cell bodies outside CNS (unique)

### Central Olfactory Pathway

**Olfactory Bulb:**
- Location: anterior cranial fossa, above cribriform plate
- Structure: glomeruli, mitral cells, tufted cells, granule cells
- Glomeruli: synaptic convergence (25,000 receptor axons -> 25 mitral cells)
- Processing: odorant coding, contrast enhancement

**Olfactory Tract:**
- Extends posteriorly from bulb
- Divides into lateral and medial striae
- Projects to primary olfactory cortex

**Primary Olfactory Cortex (Piriform Cortex):**
- Area 51 (paleocortex)
- Direct projection without thalamic relay (unique sensory modality)
- Identification and discrimination of odors

**Other Olfactory Projections:**
- Amygdala: emotional responses to odors
- Entorhinal cortex: memory formation
- Hippocampus: odor memory
- Orbitofrontal cortex: conscious odor perception, integration with taste
- Thalamus (mediodorsal nucleus): indirect pathway to orbitofrontal cortex
- Hypothalamus: autonomic responses, reproductive behavior

**Accessory Olfactory System (Vomeronasal):**
- Vomeronasal organ (vestigial in humans)
- Detects pheromones (limited function in humans)
- Projects to accessory olfactory bulb and amygdala`,
      keyTerms: [
        { term: 'cribriform plate', definition: 'Perforated portion of ethmoid bone through which olfactory nerve bundles pass' },
        { term: 'glomerulus', definition: 'Spherical synaptic structure in olfactory bulb where receptor axons synapse with mitral cells' },
        { term: 'piriform cortex', definition: 'Primary olfactory cortex receiving direct input from olfactory bulb without thalamic relay' },
        { term: 'fila olfactoria', definition: 'Bundles of unmyelinated olfactory nerve fibers passing through cribriform plate' }
      ],
      examples: [
        'Head trauma with cribriform plate fracture can cause anosmia by shearing olfactory nerves.',
        'Alzheimer disease often affects olfactory pathways early, causing reduced smell discrimination.'
      ]
    },
    3: {
      level: 3,
      summary: 'El sistema olfatorio periferico incluye epitelio olfatorio con neuronas receptoras bipolares y cilios olfatorios. Las vias centrales proyeccionan al bulbo olfatorio, tracto olfatorio, corteza piriforme, amigdala, hipocampo y corteza orbitofrontal sin relevo talamico.',
      explanation: `## Anatomia del Sistema Olfatorio

### Olfato Periferico

**Epitelio Olfatorio:**
- Localizacion: porcion superior de la cavidad nasal, lamina cribosa, cornete superior
- Area: 5-10 cm2 (variable interindividual)
- Coloracion: amarillenta-parda
- Tipo histologico: pseudoestratificado columnar ciliado

**Tipos Celulares:**
- Neuronas receptoras olfatorias: 10-20 millones, bipolares
- Celulas de sosten (sustentaculares): soporte metabolico, secrecion
- Celulas basales: celulas madre para regeneracion (ciclo 30-60 dias)
- Glandulas de Bowman: secrecion serosa, disolucion de odorantes

**Neuronas Receptoras Olfatorias:**
- Unicas: neuronos expuestos directamente al medio ambiente
- Dendrito: se extiende a mucosa, termina en mazo de cilios olfatorios (10-20)
- Cilios: no motiles, contienen receptores olfatorios (proteinas G)
- Axon: no mielinizado, atraviesa lamina cribosa
- Regeneracion: capacidad unica entre neuronos del adulto
- Familias de receptores: 400+ tipos diferentes (1% del genoma)

**Nervio Olfatorio (CI):**
- Aproximadamente 20 haces (fila olfactoria)
- Fibras amielinicas atraviesan forames de la lamina cribosa del etmoides
- Cuerpos celulares ganglionares: bulbo olfatorio (unico entre nervios craneales)

### Vias Olfatorias Centrales

**Bulbo Olfatorio:**
- Localizacion: fosa craneal anterior, sobre lamina cribosa
- Estructura: 6 capas celulares
- Glomerulos: esferas sinapticas, convergencia 25,000 axones -> 25 celulas mitrales
- Tipos celulares: celulas mitrales, celulas tutoreadas, celulas granulosas, periglomerulares
- Procesamiento: codificacion de odorantes, inhibicion lateral

**Tracto Olfatorio:**
- Extiende posteriormente desde el bulbo
- Se divide en estria lateral y medial
- Proyeccion a corteza olfatoria primaria

**Corteza Olfatoria Primaria (Piriforme):**
- Area 51 (paleocorteza)
- Proyeccion directa sin relevo talamico (unico entre sentidos)
- Funcion: identificacion y discriminacion de olores

**Otras Proyecciones:**
- Amigdala: respuestas emocionales a olores
- Corteza entorrinal: formacion de memoria
- Hipocampo: memoria olfatoria
- Corteza orbitofrontal: percepcion consciente de olores, integracion con gusto
- Talamo (nucleo mediodorsal): via indirecta a corteza orbitofrontal
- Hipotalamo: respuestas autonomicas, comportamiento reproductivo

**Sistema Olfatorio Accesorio (Vomeronasal):**
- Organo vomeronasal: vestigial en humanos
- Detecta feromonas (funcion limitada en humanos)
- Proyecta a bulbo olfatorio accesorio y amigdala`,
      keyTerms: [
        { term: 'lamina cribosa', definition: 'Porcion perforada del hueso etmoides por donde pasan los haces del nervio olfatorio' },
        { term: 'glomerulo olfatorio', definition: 'Estructura sinaptica esferica en bulbo donde los axones de receptores sinapsan con celulas mitrales' },
        { term: 'corteza piriforme', definition: 'Corteza olfatoria primaria que recibe proyeccion directa del bulbo sin relevo talamico' }
      ],
      examples: [
        'El traumatismo craneoencefalico con fractura de lamina cribosa puede causar anosmia por seccion de los nervios olfatorios.',
        'La enfermedad de Alzheimer afecta las vias olfatorias tempranamente, causando reduccion en la discriminacion de olores.'
      ]
    },
    4: {
      level: 4,
      summary: 'The olfactory system demonstrates unique neurobiological features including direct CNS exposure, continuous neurogenesis, combinatorial receptor coding, and parallel processing through limbic structures for emotional and memory associations.',
      explanation: `## Advanced Olfactory Anatomy

**Olfactory Transduction:**
- Odorant binding to GPCR (Golf/ACIII/cAMP cascade)
- cAMP opens cyclic nucleotide-gated (CNG) channels
- Na+ and Ca2+ influx, depolarization
- Ca2+-activated Cl- channels amplify signal
- Action potentials in axon

**Olfactory Coding:**
- Combinatorial code: each odorant activates multiple receptor types
- Each receptor type responds to multiple odorants
- Spatial maps in glomeruli
- Temporal coding: sniff-phase dependent responses

**Neurogenesis:**
- Basal cells (globose and horizontal) regenerate receptor neurons
- Unique among sensory neurons
- Declines with age

**Clinical Correlations:**
- Anosmia: traumatic, infectious, neurodegenerative, congenital
- Parosmia: distorted smell (often post-infectious)
- Phantosmia: olfactory hallucinations
- Hyposmia: reduced smell sensitivity`,
      keyTerms: [
        { term: 'combinatorial coding', definition: 'Principle where each odorant is coded by unique combination of activated receptors' },
        { term: 'neurogenesis olfatoria', definition: 'Continuous regeneration of olfactory receptor neurons from basal stem cells' }
      ],
      clinicalNotes: `Clinical applications:

1. **Traumatic anosmia:** Shearing of fila olfactoria at cribriform plate. Often permanent if >48 hours duration.

2. **Neurodegenerative disease:** Early involvement of olfactory pathways in Parkinson disease, Alzheimer disease, Lewy body dementia. Olfactory testing aids diagnosis.

3. **COVID-19 anosmia:** Reversible (usually) olfactory dysfunction due to sustentacular cell infection rather than neuronal damage.`
    },
    5: {
      level: 5,
      summary: 'El sistema olfatorio presenta caracteristicas neurobiologicas unicas incluyendo exposicion directa al SNC, neurogenesis continua, codificacion combinatoria de receptores, y procesamiento paralelo a traves de estructuras limbicas para asociaciones emocionales y de memoria.',
      explanation: `## Anatomia Olfatoria Avanzada

**Transduccion Olfatoria:**
- Union de odorante a GPCR (cascada Golf/ACIII/cAMP)
- cAMP abre canales CNG (regulados por nucleotidos ciclicos)
- Influx de Na+ y Ca2+, despolarizacion
- Canales de Cl- activados por Ca2+ amplifican la senal
- Potenciales de accion en axon

**Codificacion Olfatoria:**
- Codigo combinatorio: cada odorante activa multiples tipos de receptores
- Cada tipo de receptor responde a multiples odorantes
- Mapas espaciales en glomerulos
- Codificacion temporal: respuestas dependientes de la fase de la inhalacion

**Neurogenesis:**
- Celulas basales (globosas y horizontales) regeneran neuronas receptoras
- Unica entre neuronos sensoriales
- Disminuye con la edad

**Correlaciones Clinicas:**
- Anosmia: traumatica, infecciosa, neurodegenerativa, congenita
- Parosmia: olor distorsionado (frecuentemente pos-infecciosa)
- Fantosmia: alucinaciones olfatorias
- Hiposmia: sensibilidad olfatoria reducida`,
      keyTerms: [
        { term: 'codificacion combinatoria', definition: 'Principio donde cada odorante es codificado por combinacion unica de receptores activados' },
        { term: 'neurogenesis olfatoria', definition: 'Regeneracion continua de neuronas receptoras olfatorias desde celulas madre basales' }
      ],
      clinicalNotes: `Aplicaciones clinicas:

1. **Anosmia traumatica:** Seccion de fila olfactoria en lamina cribosa. Frecuentemente permanente si dura mas de 48 horas.

2. **Enfermedad neurodegenerativa:** Involucramiento temprano de vias olfatorias en Parkinson, Alzheimer, demencia con cuerpos de Lewy. Pruebas olfatorias ayudan al diagnostico.

3. **Anosmia COVID-19:** Disfuncion olfatoria reversible (usualmente) debida a infeccion de celulas sustentaculares en lugar de dano neuronal.`
    },
  },

  media: [],

  citations: [
    {
      id: 'sullivan-olfaction',
      type: 'textbook',
      title: 'Clinical Anatomy of the Nose, Nasal Cavity and Paranasal Sinuses',
      authors: ['Lang J'],
      source: 'Thieme',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-sensory-system-overview', targetType: 'system', relationship: 'parent', label: 'Sensory Systems Overview' },
    { targetId: 'anatomy-gustatory-system', targetType: 'system', relationship: 'sibling', label: 'Gustatory System' },
  ],

  tags: {
    systems: ['sensory', 'nervous'],
    topics: ['anatomy', 'olfaction', 'neuroanatomy'],
    keywords: ['olfactory system', 'smell', 'nasal cavity', 'olfactory bulb', 'piriform cortex'],
    clinicalRelevance: 'medium',
  },

  createdAt: '2026-01-30T12:00:00.000Z',
  updatedAt: '2026-01-30T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default olfactorySystemAnatomy;
