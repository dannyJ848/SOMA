/**
 * Tejido Nervioso | Nervous Tissue - Comprehensive Histology Content
 *
 * Covers neurons, glial cells, myelination, synapses, and neuropathology.
 * Spanish-first bilingual content for the SOMA medical education platform.
 */

import { EducationalContent } from '../types';

export const tejidoNerviosoContent: EducationalContent = {
  id: 'histology-tejido-nervioso',
  type: 'topic',
  name: 'Tejido Nervioso | Nervous Tissue',
  nameEs: 'Tejido Nervioso',
  alternateNames: ['Neurohistología', 'Neurohistology', 'Neural tissue', 'Tejido neural'],
  fmaId: 'FMA:9642',

  levels: {
    1: {
      level: 1,
      summary: 'El tejido nervioso es el "sistema eléctrico" de tu cuerpo: lleva mensajes del cerebro a todo el cuerpo y de vuelta, permitiéndote pensar, sentir y moverte. | Nervous tissue is your body\'s "electrical system": it carries messages from the brain to the whole body and back, letting you think, feel, and move.',
      explanation: `## El Sistema de Comunicaciones de Tu Cuerpo | Your Body's Communication System

Imagina que tu cuerpo es una ciudad enorme y el cerebro es el centro de control. El tejido nervioso es como toda la red de cables y antenas que conecta el centro de control con cada rincón de la ciudad. | Imagine your body is a huge city and the brain is the control center. Nervous tissue is like the entire network of wires and antennas connecting the control center with every corner of the city.

**Las dos "piezas" principales | The two main "pieces":**

1. **Neuronas (las mensajeras)** - Células especiales que envían y reciben mensajes eléctricos, como los cables de teléfono. | Neurons (the messengers) - Special cells that send and receive electrical messages, like telephone wires.
   - Tienen un cuerpo (donde está el "cerebro" de la célula) | They have a body (where the cell's "brain" is)
   - Ramas cortas llamadas **dendritas** que reciben mensajes | Short branches called dendrites that receive messages
   - Un cable largo llamado **axón** que envía mensajes | A long cable called an axon that sends messages

2. **Células gliales (las ayudantes)** - Células que cuidan, protegen y alimentan a las neuronas. Son como los trabajadores de mantenimiento. | Glial cells (the helpers) - Cells that care for, protect, and feed neurons. They are like maintenance workers.

**¿Cómo viaja un mensaje? | How does a message travel?**

1. Tu dedo toca algo caliente | Your finger touches something hot
2. Las neuronas de tu dedo envían una señal eléctrica rapidísima al cerebro | Neurons in your finger send a super-fast electrical signal to the brain
3. Tu cerebro recibe el mensaje: "¡Quema!" | Your brain receives the message: "It burns!"
4. Tu cerebro envía otro mensaje de vuelta: "¡Quita la mano!" | Your brain sends another message back: "Pull your hand away!"
5. Los músculos obedecen y mueves la mano | The muscles obey and you move your hand

¡Todo esto pasa en menos de un segundo! | All of this happens in less than a second!

**La mielina: El aislante mágico | Myelin: The magic insulator**

Algunos axones están envueltos en una capa grasosa llamada mielina, como el plástico que cubre los cables eléctricos de tu casa. La mielina hace que los mensajes viajen mucho más rápido: hasta 120 metros por segundo. | Some axons are wrapped in a fatty layer called myelin, like the plastic covering your house's electrical wires. Myelin makes messages travel much faster: up to 120 meters per second.`,
      keyTerms: [
        { term: 'neurona | neuron', definition: 'La célula que envía y recibe mensajes eléctricos en tu cuerpo, como los cables de un teléfono | The cell that sends and receives electrical messages in your body, like telephone wires' },
        { term: 'axón | axon', definition: 'El "cable" largo de la neurona que envía mensajes a otras células | The long "cable" of the neuron that sends messages to other cells' },
        { term: 'dendritas | dendrites', definition: 'Las "ramas" de la neurona que reciben mensajes de otras neuronas | The "branches" of the neuron that receive messages from other neurons' },
        { term: 'mielina | myelin', definition: 'La capa grasosa que cubre los axones para que los mensajes viajen más rápido, como el aislante de un cable | The fatty layer covering axons so messages travel faster, like wire insulation' },
      ],
      analogies: [
        'Las neuronas son como los cables de Internet de tu casa: llevan información de un lugar a otro a gran velocidad. | Neurons are like your home Internet cables: they carry information from one place to another at high speed.',
        'Las células gliales son como el equipo de mantenimiento de una autopista: reparan, limpian y protegen las carreteras (neuronas) para que el tráfico (mensajes) fluya sin problemas. | Glial cells are like a highway maintenance crew: they repair, clean, and protect the roads (neurons) so traffic (messages) flows smoothly.',
        'La mielina es como el aislante de un cable eléctrico: sin ella, la señal se pierde y el mensaje llega lento o no llega. | Myelin is like electrical cable insulation: without it, the signal is lost and the message arrives slowly or not at all.',
      ],
      examples: [
        'Cuando alguien te hace cosquillas, las neuronas de tu piel envían un mensaje al cerebro y tú sientes la sensación de cosquilleo. | When someone tickles you, neurons in your skin send a message to the brain and you feel the tickling sensation.',
        'Cuando memorizas algo para un examen, las conexiones entre neuronas se hacen más fuertes, por eso practicar ayuda a recordar. | When you memorize something for a test, connections between neurons get stronger, which is why practice helps you remember.',
      ],
    },
    2: {
      level: 2,
      summary: 'El tejido nervioso se compone de neuronas (células excitables que transmiten impulsos eléctricos) y células gliales (astrocitos, oligodendrocitos, células de Schwann, microglia, células ependimarias), con transmisión sináptica química y conducción saltatoria en axones mielinizados. | Nervous tissue is composed of neurons (excitable cells transmitting electrical impulses) and glial cells (astrocytes, oligodendrocytes, Schwann cells, microglia, ependymal cells), with chemical synaptic transmission and saltatory conduction in myelinated axons.',
      explanation: `## Componentes del Tejido Nervioso | Nervous Tissue Components

### La Neurona | The Neuron

**Partes de la neurona | Neuron parts:**

1. **Soma (cuerpo celular)** - Contiene el núcleo, RE rugoso (sustancia de Nissl) y organelos | Contains nucleus, rough ER (Nissl substance), and organelles
2. **Dendritas** - Múltiples prolongaciones receptoras cortas y ramificadas | Multiple short, branched receptor processes
3. **Axón** - Una sola prolongación larga que conduce impulsos; termina en **botones sinápticos** | Single long process conducting impulses; ends in synaptic boutons
4. **Cono axónico (segmento inicial)** - Zona de inicio del potencial de acción | Axon hillock (initial segment) - Action potential initiation zone

**Clasificación morfológica | Morphological classification:**
| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| Multipolar | Muchas dendritas + 1 axón | Neuronas motoras, interneuronas | Motor neurons, interneurons |
| Bipolar | 1 dendrita + 1 axón | Retina, ganglio vestibular | Retina, vestibular ganglion |
| Pseudounipolar | Un proceso que se bifurca | Ganglio de la raíz dorsal (sensorial) | Dorsal root ganglion (sensory) |
| Unipolar (raro en humanos) | Solo axón | Neuronas del SNC en invertebrados | CNS neurons in invertebrates |

**Clasificación funcional | Functional classification:**
- **Sensitivas (aferentes)**: Llevan información al SNC | Carry information to CNS
- **Motoras (eferentes)**: Llevan órdenes del SNC a músculos/glándulas | Carry commands from CNS to muscles/glands
- **Interneuronas**: Conectan neuronas entre sí dentro del SNC | Connect neurons within CNS

### Células Gliales | Glial Cells

**SNC (Sistema Nervioso Central) | CNS:**

| Célula | Función | Marcador |
|--------|---------|----------|
| Astrocitos | Soporte, barrera hematoencefálica, homeostasis iónica, reciclaje de neurotransmisores | GFAP |
| Oligodendrocitos | Producen mielina en el SNC (un oligodendrocito mieliniza múltiples axones) | MBP, MOG |
| Microglia | Macrófagos residentes del SNC; defensa inmune | Iba1, CD68 |
| Células ependimarias | Revisten los ventrículos; producen LCR (en el plexo coroideo) | S100 |

**SNP (Sistema Nervioso Periférico) | PNS:**

| Célula | Función |
|--------|---------|
| Células de Schwann | Producen mielina en el SNP (una célula mieliniza UN segmento de UN axón) |
| Células satélite | Rodean los somas neuronales en los ganglios periféricos |

### Mielinización | Myelination

**En el SNC (oligodendrocitos) | In CNS:**
- Un oligodendrocito extiende procesos a múltiples axones | One oligodendrocyte extends processes to multiple axons
- Envuelve segmentos de axón con capas de membrana plasmática | Wraps axon segments with plasma membrane layers

**En el SNP (células de Schwann) | In PNS:**
- Una célula de Schwann envuelve un segmento de un solo axón | One Schwann cell wraps one segment of a single axon
- La célula se enrolla múltiples veces alrededor del axón | The cell wraps multiple times around the axon

**Nodos de Ranvier | Nodes of Ranvier:**
- Espacios entre segmentos de mielina | Gaps between myelin segments
- Contienen canales de Na⁺ concentrados | Contain concentrated Na⁺ channels
- Permiten la **conducción saltatoria**: El impulso "salta" de nodo a nodo | Allow saltatory conduction: Impulse "jumps" from node to node
- Velocidad: 120 m/s (mielinizado) vs. 0.5-2 m/s (no mielinizado) | Speed: 120 m/s (myelinated) vs. 0.5-2 m/s (unmyelinated)

### La Sinapsis | The Synapse

**Transmisión sináptica química | Chemical synaptic transmission:**
1. Potencial de acción llega al botón sináptico | Action potential reaches synaptic bouton
2. Canales de Ca²⁺ dependientes de voltaje se abren | Voltage-gated Ca²⁺ channels open
3. Ca²⁺ causa fusión de vesículas sinápticas con la membrana | Ca²⁺ causes synaptic vesicle fusion with membrane
4. Neurotransmisores se liberan al espacio sináptico (exocitosis) | Neurotransmitters released into synaptic cleft (exocytosis)
5. Se unen a receptores en la neurona postsináptica | Bind receptors on postsynaptic neuron
6. Potencial postsináptico excitatorio (PPSE) o inhibitorio (PPSI) | Excitatory (EPSP) or inhibitory (IPSP) postsynaptic potential

**Neurotransmisores principales | Main neurotransmitters:**
- Acetilcolina, glutamato, GABA, dopamina, serotonina, norepinefrina | Acetylcholine, glutamate, GABA, dopamine, serotonin, norepinephrine`,
      keyTerms: [
        { term: 'sustancia de Nissl | Nissl substance', definition: 'Retículo endoplásmico rugoso abundante en el soma neuronal; responsable de la intensa basofilia del cuerpo celular | Abundant rough ER in neuronal soma; responsible for intense basophilia of the cell body', pronunciation: 'NISS-ul' },
        { term: 'astrocito | astrocyte', definition: 'Célula glial estrellada que forma la barrera hematoencefálica, regula iones y recicla neurotransmisores; marcador GFAP | Star-shaped glial cell forming blood-brain barrier, regulating ions, recycling neurotransmitters; marker GFAP' },
        { term: 'oligodendrocito | oligodendrocyte', definition: 'Célula glial que produce mielina en el SNC; un oligodendrocito puede mielinizar hasta 50 segmentos de axones diferentes | Glial cell producing myelin in the CNS; can myelinate up to 50 segments of different axons' },
        { term: 'células de Schwann | Schwann cells', definition: 'Células que producen mielina en el SNP; cada una mieliniza un solo segmento de un solo axón | Cells producing myelin in the PNS; each myelinates one segment of one axon' },
        { term: 'nodos de Ranvier | Nodes of Ranvier', definition: 'Espacios entre segmentos de mielina donde se concentran los canales de Na⁺; permiten la conducción saltatoria | Gaps between myelin segments where Na⁺ channels concentrate; allow saltatory conduction', pronunciation: 'rahn-vee-EH' },
        { term: 'conducción saltatoria | saltatory conduction', definition: 'Propagación rápida del impulso nervioso que "salta" de nodo de Ranvier a nodo, gracias a la mielina | Rapid nerve impulse propagation "jumping" from node to node, thanks to myelin' },
        { term: 'microglia | microglia', definition: 'Macrófagos residentes del SNC de origen mesodérmico; primera línea de defensa inmune del cerebro | CNS resident macrophages of mesodermal origin; brain\'s first line of immune defense' },
      ],
      analogies: [
        'Los oligodendrocitos son como un pulpo que extiende sus tentáculos para envolver varios cables (axones) a la vez; las células de Schwann son como un guante que cubre solo un dedo (un segmento de un axón). | Oligodendrocytes are like an octopus extending tentacles to wrap several cables (axons) at once; Schwann cells are like a glove covering just one finger (one segment of one axon).',
        'La conducción saltatoria es como una piedra que salta sobre el agua: el impulso no viaja por toda la mielina sino que brinca de un nodo al siguiente. | Saltatory conduction is like a stone skipping on water: the impulse doesn\'t travel through all the myelin but jumps from one node to the next.',
      ],
      examples: [
        'En la esclerosis múltiple, el sistema inmune destruye la mielina del SNC, lo que hace que los mensajes viajen más lento y se pierdan, causando debilidad y problemas de coordinación. | In multiple sclerosis, the immune system destroys CNS myelin, making messages travel slower and get lost, causing weakness and coordination problems.',
        'Cuando el dentista te pone anestesia, bloquea los canales de Na⁺ de las neuronas sensoriales para que no sientas dolor. | When the dentist gives you anesthesia, it blocks Na⁺ channels of sensory neurons so you don\'t feel pain.',
      ],
    },
    3: {
      level: 3,
      summary: 'La neurohistología detallada integra la ultraestructura neuronal (citoesqueleto, transporte axonal), la base iónica del potencial de acción, la diversidad de sinapsis y neurotransmisores, los mecanismos moleculares de mielinización, y la organización histológica del SNC (corteza cerebral, cerebelo) y SNP (nervios periféricos). | Detailed neurohistology integrates neuronal ultrastructure (cytoskeleton, axonal transport), the ionic basis of the action potential, synapse and neurotransmitter diversity, molecular myelination mechanisms, and histological organization of the CNS (cerebral cortex, cerebellum) and PNS (peripheral nerves).',
      explanation: `## Neurohistología Detallada | Detailed Neurohistology

### Ultraestructura Neuronal | Neuronal Ultrastructure

**Citoesqueleto neuronal | Neuronal cytoskeleton:**
- **Neurofilamentos**: Filamentos intermedios específicos neuronales (NF-L, NF-M, NF-H); determinan el calibre axonal | Neuron-specific intermediate filaments; determine axonal caliber
- **Microtúbulos**: Dímeros de α/β-tubulina; raíles para transporte axonal; estabilizados por proteínas tau | α/β-tubulin dimers; rails for axonal transport; stabilized by tau proteins
- **Microfilamentos de actina**: Conos de crecimiento, espinas dendríticas | Growth cones, dendritic spines

**Transporte axonal | Axonal transport:**
| Tipo | Dirección | Motor | Cargo | Velocidad |
|------|-----------|-------|-------|-----------|
| Anterógrado rápido | Soma → terminal | Cinesina | Vesículas, mitocondrias, receptores | 200-400 mm/día |
| Anterógrado lento | Soma → terminal | Cinesina | Citoesqueleto, enzimas citosólicas | 0.2-8 mm/día |
| Retrógrado | Terminal → soma | Dineína | Endosomas, factores de crecimiento, virus | 200-300 mm/día |

### Potencial de Acción | Action Potential

**Fases | Phases:**
1. **Reposo** (-70 mV): K⁺ alto intracelular, Na⁺ alto extracelular (Na⁺/K⁺-ATPasa) | K⁺ high intracellular, Na⁺ high extracellular
2. **Despolarización**: Estímulo alcanza umbral (-55 mV) → canales de Na⁺ voltaje-dependientes se abren → entrada masiva de Na⁺ → potencial sube a +30 mV | Stimulus reaches threshold → Na⁺ channels open → Na⁺ influx → potential rises to +30 mV
3. **Repolarización**: Canales de Na⁺ se inactivan + canales de K⁺ se abren → salida de K⁺ | Na⁺ channels inactivate + K⁺ channels open → K⁺ efflux
4. **Hiperpolarización**: Exceso temporal de salida de K⁺; potencial < -70 mV | Temporary excess K⁺ efflux; potential < -70 mV
5. **Periodo refractario absoluto**: No se puede generar otro potencial de acción (canales de Na⁺ inactivados) | Cannot generate another action potential
6. **Periodo refractario relativo**: Se necesita estímulo mayor que el normal | Requires larger than normal stimulus

**Ley del todo o nada**: El potencial de acción siempre tiene la misma amplitud; la intensidad se codifica por frecuencia. | All-or-none law: Action potential always has same amplitude; intensity is coded by frequency.

### Sinapsis: Diversidad Molecular | Synapses: Molecular Diversity

**Sinapsis glutamatérgica (excitatoria) | Glutamatergic synapse (excitatory):**
- Receptores ionotrópicos: AMPA (Na⁺, despolarización rápida), NMDA (Ca²⁺, plasticidad sináptica) | Ionotropic receptors: AMPA, NMDA
- Receptores metabotrópicos: mGluR (acoplados a proteínas G) | Metabotropic receptors: mGluR (G-protein coupled)
- NMDA requiere despolarización previa (eliminar bloqueo de Mg²⁺) + glutamato = **detector de coincidencia** | NMDA requires prior depolarization + glutamate = coincidence detector

**Sinapsis GABAérgica (inhibitoria) | GABAergic synapse (inhibitory):**
- GABA-A: Receptor ionotrópico (Cl⁻); blanco de benzodiacepinas, barbitúricos, anestésicos | GABA-A: Ionotropic receptor; target of benzodiazepines, barbiturates, anesthetics
- GABA-B: Receptor metabotrópico; blanco de baclofeno | GABA-B: Metabotropic receptor; baclofen target

**Plasticidad sináptica | Synaptic plasticity:**
- **LTP (potenciación a largo plazo)**: Base molecular del aprendizaje y la memoria | LTP: Molecular basis of learning and memory
  - Estimulación de alta frecuencia → entrada de Ca²⁺ por NMDA → CaMKII → inserción de más AMPA | High-frequency stimulation → Ca²⁺ via NMDA → CaMKII → more AMPA insertion
- **LTD (depresión a largo plazo)**: Debilitamiento sináptico | LTD: Synaptic weakening

### Mielinización: Mecanismos Moleculares | Myelination: Molecular Mechanisms

**Composición de la mielina | Myelin composition:**
- 70% lípidos (colesterol, galactocerebrósidos, esfingomielina) | 70% lipids
- 30% proteínas | 30% proteins
  - PLP (proteína proteolipídica): Principal proteína de mielina del SNC | Main CNS myelin protein
  - MBP (proteína básica de mielina): Compactación; blanco autoinmune en EM | Compaction; autoimmune target in MS
  - P0 (MPZ): Principal proteína de mielina del SNP | Main PNS myelin protein
  - PMP22: Proteína transmembrana del SNP; duplicación → CMT1A | PNS transmembrane protein; duplication → CMT1A

**Señalización para mielinización | Myelination signaling:**
- SNC: Neurregulina-1 tipo III (axonal) → ErbB en oligodendrocitos | CNS: Neuregulin-1 type III → ErbB in oligodendrocytes
- SNP: Neurregulina-1 → ErbB2/3 en células de Schwann → control del grosor de mielina | PNS: Neuregulin-1 → ErbB2/3 in Schwann cells → myelin thickness control

### Organización Histológica | Histological Organization

**Corteza cerebral (6 capas) | Cerebral cortex (6 layers):**
I. Molecular: Axones horizontales, pocas células | Molecular: Horizontal axons, few cells
II. Granular externa: Neuronas pequeñas piramidales/estrelladas | External granular: Small pyramidal/stellate neurons
III. Piramidal externa: Neuronas piramidales medianas → asociación corticocortical | External pyramidal: Medium pyramidal → corticocortical association
IV. Granular interna: Neuronas estrelladas; recibe aferencias talámicas (capa IV muy desarrollada en corteza visual) | Internal granular: Receives thalamic input
V. Piramidal interna (gigante): Neuronas de Betz en corteza motora; eferencias corticoespinales | Internal pyramidal: Betz cells; corticospinal efferents
VI. Multiforme (polimórfica): Eferencias corticotalámicas | Multiform: Corticothalamic efferents

**Cerebelo (3 capas) | Cerebellum (3 layers):**
1. Capa molecular: Dendritas de Purkinje, interneuronas (células estrelladas, en canasta) | Molecular: Purkinje dendrites, interneurons
2. Capa de Purkinje: Células de Purkinje (las neuronas más grandes; GABAérgicas; ÚNICA salida de la corteza cerebelosa) | Purkinje layer: Purkinje cells (largest neurons; GABAergic; ONLY cortical output)
3. Capa granular: Células granulares (las neuronas más numerosas del cerebro); fibras musgosas | Granular: Granule cells (most numerous neurons); mossy fibers

**Nervio periférico | Peripheral nerve:**
- Endoneuro: Rodea cada fibra nerviosa | Endoneurium: Surrounds each nerve fiber
- Perineuro: Rodea fascículos; barrera hematoneural | Perineurium: Surrounds fascicles; blood-nerve barrier
- Epineuro: Rodea todo el nervio | Epineurium: Surrounds entire nerve`,
      keyTerms: [
        { term: 'proteína tau | tau protein', definition: 'Proteína asociada a microtúbulos que los estabiliza en axones; su hiperfosforilación forma ovillos neurofibrilares en Alzheimer | Microtubule-associated protein stabilizing axonal microtubules; hyperphosphorylation forms neurofibrillary tangles in Alzheimer\'s' },
        { term: 'receptor NMDA | NMDA receptor', definition: 'Receptor de glutamato permeable a Ca²⁺ que funciona como detector de coincidencia (requiere despolarización + glutamato); esencial para LTP y memoria | Ca²⁺-permeable glutamate receptor functioning as coincidence detector; essential for LTP and memory' },
        { term: 'LTP | potenciación a largo plazo | long-term potentiation', definition: 'Fortalecimiento duradero de la transmisión sináptica por estimulación repetida; base celular del aprendizaje y la memoria | Lasting strengthening of synaptic transmission by repeated stimulation; cellular basis of learning and memory' },
        { term: 'células de Purkinje | Purkinje cells', definition: 'Las neuronas más grandes del cerebelo; GABAérgicas; constituyen la única salida de la corteza cerebelosa hacia los núcleos profundos | Largest cerebellar neurons; GABAergic; constitute the only output from cerebellar cortex to deep nuclei' },
        { term: 'PLP | proteína proteolipídica | proteolipid protein', definition: 'Principal proteína de la mielina del SNC; mutaciones causan enfermedad de Pelizaeus-Merzbacher (leucodistrofia ligada a X) | Main CNS myelin protein; mutations cause Pelizaeus-Merzbacher disease (X-linked leukodystrophy)' },
        { term: 'neurregulina-1 | neuregulin-1', definition: 'Factor de crecimiento axonal que señaliza a las células de Schwann y oligodendrocitos para iniciar y regular el grosor de mielinización | Axonal growth factor signaling Schwann cells and oligodendrocytes to initiate and regulate myelination thickness' },
        { term: 'transporte axonal retrógrado | retrograde axonal transport', definition: 'Transporte mediado por dineína desde la terminal axónica al soma; usado por factores de crecimiento (NGF), pero también por virus (rabia, herpes) y toxinas (tétanos) | Dynein-mediated transport from axon terminal to soma; used by growth factors but also by viruses and toxins' },
      ],
      clinicalNotes: 'La enfermedad de Charcot-Marie-Tooth tipo 1A (CMT1A) es la neuropatía hereditaria más común, causada por duplicación del gen PMP22 → hipermielinización aberrante y desmielinización progresiva. La excitotoxicidad por glutamato (liberación excesiva → activación sostenida de NMDA → entrada de Ca²⁺ → muerte neuronal) es un mecanismo central en el ictus isquémico y enfermedades neurodegenerativas. El virus de la rabia y la toxina tetánica usan el transporte axonal retrógrado para alcanzar el SNC. El bloqueo de canales de Na⁺ es el mecanismo de los anestésicos locales (lidocaína). | CMT1A is the most common hereditary neuropathy from PMP22 duplication. Glutamate excitotoxicity is central in ischemic stroke and neurodegeneration. Rabies virus and tetanus toxin use retrograde axonal transport to reach CNS. Na⁺ channel blockade is the mechanism of local anesthetics.',
    },
    4: {
      level: 4,
      summary: 'La neurobiología avanzada integra la diversidad molecular de canales iónicos y receptores, neuroplasticidad estructural (sinaptogénesis, poda sináptica, neurogénesis adulta), gliobiología (estados reactivos, microglía en neuroinflamación), barrera hematoencefálica como unidad neurovascular, y mecanismos moleculares de neurodegeneración (tauopatías, sinucleinopatías, prionopatías). | Advanced neurobiology integrates molecular ion channel and receptor diversity, structural neuroplasticity (synaptogenesis, synaptic pruning, adult neurogenesis), gliobiology (reactive states, microglia in neuroinflammation), blood-brain barrier as a neurovascular unit, and molecular neurodegeneration mechanisms (tauopathies, synucleinopathies, prionopathies).',
      explanation: `## Neurobiología Avanzada | Advanced Neurobiology

### Diversidad de Canales Iónicos | Ion Channel Diversity

**Canales de Na⁺ voltaje-dependientes | Voltage-gated Na⁺ channels:**
- Nav1.1 (SCN1A): Interneuronas GABAérgicas; mutaciones → epilepsia de Dravet | GABAergic interneurons; mutations → Dravet epilepsy
- Nav1.7 (SCN9A): Nociceptores; ganancia de función → eritromelalgia; pérdida de función → insensibilidad congénita al dolor | Nociceptors; gain → erythromelalgia; loss → congenital pain insensitivity
- Nav1.5 (SCN5A): Cardiomiocitos; mutaciones → síndrome de Brugada, QT largo tipo 3 | Cardiomyocytes; mutations → Brugada, LQT3

**Canales de K⁺ | K⁺ channels:**
- >80 genes; determinan el potencial de reposo y la duración del potencial de acción | >80 genes; determine resting potential and action potential duration
- KCNQ2/3: Corriente M; mutaciones → epilepsia neonatal benigna; blanco de retigabina | M-current; mutations → benign neonatal epilepsy; retigabine target
- Kir (inward rectifier): Kir6.2 + SUR1 = canal K-ATP en células β pancreáticas | K-ATP channel in pancreatic β cells

### Neuroplasticidad | Neuroplasticity

**Sinaptogénesis y poda sináptica | Synaptogenesis and synaptic pruning:**
- Sinaptogénesis explosiva en los primeros 2 años de vida | Explosive synaptogenesis in first 2 years
- Poda sináptica adolescente: Eliminación de ~50% de sinapsis por microglia + complemento (C1q/C3) | Adolescent synaptic pruning: ~50% synapse elimination by microglia + complement
- Señalización semafórica y Wnt en guía axonal | Semaphorin and Wnt signaling in axon guidance

**Neurogénesis adulta | Adult neurogenesis:**
- Zona subventricular (SVZ): Neuroblastos migran al bulbo olfatorio | SVZ: Neuroblasts migrate to olfactory bulb
- Zona subgranular (SGZ) del hipocampo: Nuevas neuronas granulares → integración en circuitos de memoria | Hippocampal SGZ: New granule neurons → memory circuit integration
- Regulación: Ejercicio, enriquecimiento ambiental (↑); estrés, envejecimiento (↓) | Regulation: Exercise, enrichment (↑); stress, aging (↓)
- Controversia: Extensión de la neurogénesis adulta en humanos aún debatida | Controversy: Extent in adult humans still debated

### Gliobiología Avanzada | Advanced Gliobiology

**Astrocitos: Más allá del soporte | Astrocytes: Beyond support:**
- **Tripartite synapse**: Astrocitos modulan la transmisión sináptica liberando gliotransmisores (glutamato, D-serina, ATP) | Astrocytes modulate synaptic transmission releasing gliotransmitters
- Ondas de Ca²⁺ astrocitarias: Comunicación a larga distancia | Long-distance communication
- Astrogliosis reactiva: A1 (neurotóxico, inducido por microglia activada) vs. A2 (neuroprotector, isquemia) | Reactive astrogliosis: A1 (neurotoxic) vs. A2 (neuroprotective)
- Acuaporina-4 (AQP4): Canal de agua en pies astrocitarios perivasculares; sistema glinfático para clearance de desechos | Water channel in perivascular astrocytic endfeet; glymphatic system for waste clearance

**Microglia: El sistema inmune del cerebro | Microglia: Brain's immune system:**
- Origen mesodérmico (saco vitelino); llegan al SNC antes de la BHE | Mesodermal origin (yolk sac); reach CNS before BBB
- Estado homeostático: Vigilancia, poda sináptica, reciclaje | Homeostatic: Surveillance, synaptic pruning, recycling
- Estado activado: Fagocitosis, presentación de antígenos, citoquinas | Activated: Phagocytosis, antigen presentation, cytokines
- Modelo M1/M2 → espectro continuo de estados de activación | M1/M2 model → continuous activation spectrum
- TREM2: Receptor clave; variantes de riesgo para Alzheimer (R47H) | Key receptor; Alzheimer risk variants

### Barrera Hematoencefálica (BHE) | Blood-Brain Barrier (BBB)

**Unidad neurovascular | Neurovascular unit:**
- Endotelio con uniones estrechas (claudina-5, ocludina) → permeabilidad muy baja | Endothelium with tight junctions → very low permeability
- Pies astrocitarios perivasculares (AQP4) | Perivascular astrocytic endfeet
- Pericitos: Regulan permeabilidad y angiogénesis | Pericytes: Regulate permeability and angiogenesis
- Membrana basal | Basement membrane
- Transportadores de eflujo: P-glucoproteína (MDR1/ABCB1) → expulsa fármacos | Efflux transporters: P-glycoprotein → expels drugs

### Mecanismos Moleculares de Neurodegeneración | Molecular Neurodegeneration Mechanisms

**Proteinopatías | Proteinopathies:**

| Proteína | Agregado | Enfermedades |
|----------|----------|-------------|
| Tau (hiperfosforilada) | Ovillos neurofibrilares | Alzheimer, PSP, DFT-tau |
| β-amiloide (Aβ42) | Placas amiloides | Alzheimer |
| α-sinucleína | Cuerpos de Lewy | Parkinson, demencia con cuerpos de Lewy, atrofia multisistémica |
| TDP-43 | Inclusiones citoplasmáticas | ELA, DFT-TDP |
| Prión (PrPSc) | Placas espongiformes | Creutzfeldt-Jakob, kuru |
| Huntingtina (polyQ) | Inclusiones nucleares | Enfermedad de Huntington |

**Mecanismo prionoide (propagación tipo prión) | Prion-like propagation:**
- Las proteínas mal plegadas actúan como "semillas" que inducen el mal plegamiento de proteínas normales | Misfolded proteins act as "seeds" inducing normal protein misfolding
- Propagación célula a célula mediante exosomas, nanotúbulos, sinapsis | Cell-to-cell propagation via exosomes, nanotubes, synapses
- Explica la progresión anatómica predecible (estadios de Braak en Alzheimer y Parkinson) | Explains predictable anatomical progression (Braak staging)
- Base de los ensayos de anti-tau y anti-α-sinucleína (inmunoterapia) | Basis of anti-tau and anti-α-synuclein trials (immunotherapy)`,
      keyTerms: [
        { term: 'sistema glinfático | glymphatic system', definition: 'Sistema de limpieza del SNC dependiente de AQP4 en pies astrocitarios; drena desechos (incluido Aβ) durante el sueño a través del espacio perivascular | AQP4-dependent CNS clearance system in astrocytic endfeet; drains waste (including Aβ) during sleep through perivascular space' },
        { term: 'TREM2', definition: 'Receptor de microglia implicado en fagocitosis de mielina dañada y placas amiloides; variante R47H es factor de riesgo genético para Alzheimer esporádico | Microglial receptor involved in damaged myelin and amyloid plaque phagocytosis; R47H variant is genetic risk factor for sporadic Alzheimer\'s' },
        { term: 'sinapsis tripartita | tripartite synapse', definition: 'Modelo en el que los astrocitos participan activamente en la transmisión sináptica liberando gliotransmisores, además de las neuronas pre y postsinápticas | Model in which astrocytes actively participate in synaptic transmission releasing gliotransmitters, besides pre and postsynaptic neurons' },
        { term: 'propagación prionoide | prion-like propagation', definition: 'Mecanismo de propagación de proteínas mal plegadas de célula a célula; explica la progresión espaciotemporal de enfermedades neurodegenerativas | Cell-to-cell misfolded protein propagation mechanism; explains spatiotemporal progression of neurodegenerative diseases' },
        { term: 'estadios de Braak | Braak staging', definition: 'Sistema de clasificación neuropatológica de la progresión anatómica de ovillos de tau en Alzheimer (estadios I-VI) y cuerpos de Lewy en Parkinson (estadios 1-6) | Neuropathological classification of anatomical tau tangle progression in Alzheimer (stages I-VI) and Lewy body progression in Parkinson (stages 1-6)' },
        { term: 'P-glucoproteína (MDR1) | P-glycoprotein', definition: 'Transportador de eflujo en la BHE que expulsa activamente fármacos y xenobióticos del SNC; principal obstáculo para la farmacoterapia cerebral | BBB efflux transporter actively expelling drugs and xenobiotics from CNS; main obstacle to cerebral pharmacotherapy' },
      ],
      clinicalNotes: 'Las canalopatías de Na⁺ ilustran la relación genotipo-fenotipo: mutaciones de ganancia de función en SCN9A causan dolor, mientras que la pérdida de función causa insensibilidad al dolor. La comprensión de la microglia y TREM2 ha generado nuevos blancos terapéuticos en Alzheimer. Las terapias anti-amiloide (lecanemab, donanemab) son los primeros tratamientos modificadores de enfermedad en Alzheimer, aunque con efecto modesto y riesgos de ARIA (amiloid-related imaging abnormalities). El sistema glinfático explica por qué el sueño es neuroprotector: el clearance de Aβ aumenta 60% durante el sueño profundo. | Na⁺ channelopathies illustrate genotype-phenotype: SCN9A gain-of-function causes pain, loss-of-function causes insensitivity. Understanding microglia and TREM2 has generated new Alzheimer therapeutic targets. Anti-amyloid therapies (lecanemab, donanemab) are first disease-modifying treatments, though with modest effect and ARIA risks. The glymphatic system explains why sleep is neuroprotective.',
    },
    5: {
      level: 5,
      summary: 'La neurohistopatología clínica avanzada abarca la clasificación molecular de gliomas (WHO 2021), biomarcadores de neurodegeneración en LCR y sangre, patología de enfermedades desmielinizantes, neuropatología forense, y tecnologías emergentes (connectómica, optogenética, interfaces cerebro-computadora) con sus implicaciones clínicas. | Advanced clinical neurohistopathology encompasses the molecular glioma classification (WHO 2021), CSF and blood neurodegeneration biomarkers, demyelinating disease pathology, forensic neuropathology, and emerging technologies (connectomics, optogenetics, brain-computer interfaces) with clinical implications.',
      explanation: `## Neurohistopatología Clínica Avanzada | Advanced Clinical Neurohistopathology

### Clasificación Molecular de Gliomas (WHO 2021) | Molecular Glioma Classification

**Cambio de paradigma: La clasificación molecular supera a la histopatología | Molecular classification supersedes histopathology:**

**Gliomas difusos del adulto | Adult-type diffuse gliomas:**

| Tipo | Marcadores moleculares | Grado | Pronóstico |
|------|----------------------|-------|------------|
| Astrocitoma, IDH-mutante | IDH1/2 mut, ATRX loss, TP53 mut, sin codelección 1p/19q | 2, 3, 4 | Intermedio |
| Oligodendroglioma, IDH-mutante y codelecionado 1p/19q | IDH1/2 mut + codelección 1p/19q | 2, 3 | Favorable |
| Glioblastoma, IDH-wildtype | IDH1/2 wt + al menos uno: TERT promoter mut, EGFR amp, +7/−10 | 4 | Pobre (~15 meses) |

**Marcadores moleculares esenciales | Essential molecular markers:**
- **IDH1/2**: IHQ para IDH1 R132H (90% de mutaciones); si negativo, secuenciar | IHC for R132H; if negative, sequence
- **1p/19q**: FISH o NGS; codelección → oligodendroglioma | FISH or NGS; codeletion → oligodendroglioma
- **ATRX**: Pérdida → astrocitoma; preservado → oligodendroglioma | Loss → astrocitoma; preserved → oligodendroglioma
- **MGMT promoter**: Metilación → mejor respuesta a temozolomida | Methylation → better temozolomide response
- **Metiloma (perfil de metilación del ADN)**: Classifier molecular definitivo | Definitive molecular classifier

### Biomarcadores de LCR y Sangre en Neurodegeneración | CSF and Blood Biomarkers in Neurodegeneration

**Alzheimer | Alzheimer's disease:**
- **Core CSF biomarkers**: Aβ42↓, p-tau181↑, t-tau↑ (perfil ATN) | Core biomarkers: Aβ42↓, p-tau181↑, t-tau↑
- **Blood biomarkers**: p-tau217 (mejor discriminador de Alzheimer vs. otras demencias); Aβ42/40 ratio | p-tau217 best discriminator
- **PET amiloide y tau**: Visualización in vivo de placas (PiB, florbetapir) y ovillos (flortaucipir) | Amyloid and tau PET imaging
- NfL (neurofilament light chain) en sangre: Marcador inespecífico de neurodegeneración activa | Blood NfL: Nonspecific active neurodegeneration marker

**Parkinson | Parkinson's disease:**
- α-sinucleína en LCR: Investigación activa como biomarcador | CSF α-synuclein: Active research as biomarker
- SAA (Seed Amplification Assay) para α-sinucleína en LCR y piel: Alta sensibilidad/especificidad | SAA for α-synuclein in CSF and skin: High sensitivity/specificity
- DAT-SPECT: Pérdida de terminales dopaminérgicas estriatales | Striatal dopaminergic terminal loss

### Patología de Enfermedades Desmielinizantes | Demyelinating Disease Pathology

**Esclerosis múltiple (EM) | Multiple sclerosis (MS):**
- Placas de desmielinización perivenulares (venas centrales en RM: "central vein sign") | Perivenular demyelination plaques
- Lesiones activas: Macrófagos con mielina fagocitada (Luxol fast blue+, PAS+) | Active lesions: Macrophages with phagocytosed myelin
- Lesiones crónicas activas: Borde de microglia activada ("smoldering plaques") → daño progresivo | Chronic active: Activated microglia rim → progressive damage
- Patrones de Lucchinetti (I-IV): Heterogeneidad patológica | Lucchinetti patterns: Pathological heterogeneity
  - I: Mediado por macrófagos | Macrophage-mediated
  - II: Mediado por anticuerpos + complemento (similar a NMO) | Antibody + complement-mediated
  - III: Oligodendropatía distal ("dying-back") | Distal oligodendropathy
  - IV: Degeneración primaria de oligodendrocitos | Primary oligodendrocyte degeneration

**Neuromielitis óptica (NMO/NMOSD) | Neuromyelitis optica:**
- Anti-AQP4 (acuaporina-4): IgG contra los pies astrocitarios perivasculares | Anti-AQP4: IgG against perivascular astrocytic endfeet
- Patología: Destrucción astrocitaria → desmielinización secundaria → necrosis | Astrocyte destruction → secondary demyelination → necrosis
- Localización: Nervio óptico, médula espinal (lesiones extensas ≥3 segmentos) | Location: Optic nerve, spinal cord (extensive lesions ≥3 segments)

### Tecnologías Emergentes en Neurociencia | Emerging Neuroscience Technologies

**Connectómica | Connectomics:**
- Mapeo completo de las conexiones sinápticas a escala del cerebro entero | Complete mapping of synaptic connections at whole-brain scale
- Microscopía electrónica serial + IA para reconstrucción 3D | Serial EM + AI for 3D reconstruction
- Proyecto Human Connectome: Tractografía por dMRI del conectoma humano | Human Connectome Project: dMRI tractography
- Aplicación clínica: Mapeo preoperatorio de tractos de sustancia blanca en neurocirugía | Clinical: Preoperative white matter tract mapping

**Transcriptómica de célula única del SNC | CNS single-cell transcriptomics:**
- snRNA-seq: Ha revelado >100 subtipos neuronales y gliales en corteza humana | Revealed >100 neuronal and glial subtypes in human cortex
- MERFISH/Visium: Transcriptómica espacial del tejido cerebral | Spatial transcriptomics of brain tissue
- Aplicaciones: Atlas celulares de enfermedades, identificación de poblaciones vulnerables | Disease cell atlases, vulnerable population identification

**Interfaces cerebro-computadora (BCI) | Brain-computer interfaces:**
- Electrodos intracorticales (Utah array): Decodificación de intención motora en parálisis | Intracortical electrodes: Motor intention decoding in paralysis
- Neuralink y electrodos flexibles de alta densidad: Registro y estimulación de miles de neuronas | High-density flexible electrodes: Recording and stimulation of thousands of neurons
- BCI no invasiva (EEG de alta densidad): Comunicación para pacientes con ELA | Non-invasive BCI: Communication for ALS patients
- Neuroprótesis: Restauración de movimiento, habla y visión | Neuroprosthetics: Restoration of movement, speech, and vision`,
      keyTerms: [
        { term: 'IDH1/2 mutado | IDH1/2 mutant', definition: 'Biomarcador diagnóstico y pronóstico central en gliomas difusos; confiere mejor pronóstico; la mutación más común (R132H) se detecta por IHQ; produce el oncometabolito 2-hidroxiglutarato | Central diagnostic and prognostic biomarker in diffuse gliomas; confers better prognosis; produces the oncometabolite 2-hydroxyglutarate' },
        { term: 'metilación del promotor MGMT | MGMT promoter methylation', definition: 'Silenciamiento epigenético de la enzima de reparación del ADN MGMT; predice respuesta a temozolomida en glioblastoma; marcador predictivo esencial | Epigenetic silencing of DNA repair enzyme; predicts temozolomide response in glioblastoma; essential predictive marker' },
        { term: 'p-tau217', definition: 'Tau fosforilada en treonina 217 en sangre; biomarcador emergente con mejor rendimiento diagnóstico para Alzheimer que p-tau181; potencial para screening poblacional | Blood phosphorylated tau at threonine 217; emerging biomarker with better diagnostic performance for Alzheimer than p-tau181; potential for population screening' },
        { term: 'SAA (Seed Amplification Assay)', definition: 'Ensayo de amplificación de semillas que detecta α-sinucleína mal plegada en LCR y piel; sensibilidad >95% para sinucleinopatías; potencial diagnóstico preclínico | Seed amplification assay detecting misfolded α-synuclein in CSF and skin; sensitivity >95% for synucleinopathies; preclinical diagnostic potential' },
        { term: 'smoldering plaques', definition: 'Lesiones crónicas activas de EM con borde de microglia activada que causa daño lento y progresivo; asociadas a discapacidad acumulada independiente de brotes (PIRA) | Chronic active MS lesions with activated microglia rim causing slow progressive damage; associated with progression independent of relapse activity' },
        { term: 'central vein sign', definition: 'Signo de RM donde las lesiones de EM muestran una vénula central; alta especificidad para EM vs. otras causas de lesiones de sustancia blanca; propuesto como criterio diagnóstico | MRI sign where MS lesions show a central venule; high specificity for MS vs. other white matter lesion causes; proposed as diagnostic criterion' },
      ],
      clinicalNotes: `Correlaciones neurohistopatológicas clínicas avanzadas | Advanced clinical neurohistopathological correlations:

1. **Gliomas**: La clasificación WHO 2021 integra obligatoriamente marcadores moleculares. Un "glioblastoma" IDH-mutante ya NO existe: es un astrocitoma IDH-mutante grado 4. El metiloma (Heidelberg classifier) resuelve casos diagnósticos difíciles. | WHO 2021 mandatorily integrates molecular markers. An IDH-mutant "glioblastoma" no longer exists.

2. **Biomarcadores de Alzheimer en sangre**: p-tau217 tiene un AUC >0.95 para distinguir Alzheimer de otras demencias; está revolucionando el diagnóstico al evitar la necesidad de punción lumbar o PET en muchos casos. | Blood p-tau217 has AUC >0.95 distinguishing Alzheimer from other dementias; revolutionizing diagnosis.

3. **EM progresiva**: Las smoldering plaques y la activación crónica de microglia son el sustrato patológico de PIRA; nuevos tratamientos dirigidos a microglia (tolebrutinib, BTK inhibitor) están en ensayos fase III. | Smoldering plaques are the pathological substrate of PIRA; new microglia-targeted treatments in phase III trials.

4. **NMO vs. EM**: La distinción es crítica porque los tratamientos de EM (interferón, fingolimod) empeoran la NMO. Anti-AQP4 y anti-MOG definen espectros clínicos distintos con tratamientos específicos (eculizumab, inebilizumab, satralizumab para NMO anti-AQP4+). | NMO vs. MS distinction is critical because MS treatments worsen NMO. Anti-AQP4 and anti-MOG define distinct clinical spectra.

5. **BCI clínicas**: Los ensayos de interfaces intracorticales han demostrado restauración de comunicación en ELA y control de cursores/brazos robóticos en tetraplejía; la decodificación del habla a partir de señales corticales ha alcanzado tasas de error <5%. | Clinical BCI trials have demonstrated communication restoration in ALS and cursor/robotic arm control in tetraplegia; cortical speech decoding has reached <5% error rates.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ross-histology-nerve',
      type: 'textbook',
      title: 'Ross Histología: Texto y Atlas',
      authors: ['Pawlina W', 'Ross MH'],
      source: 'Wolters Kluwer',
      chapter: 'Tejido Nervioso',
    },
    {
      id: 'kandel-neuroscience',
      type: 'textbook',
      title: 'Principles of Neural Science',
      authors: ['Kandel ER', 'Schwartz JH', 'Jessell TM', 'Siegelbaum SA', 'Hudspeth AJ'],
      source: 'McGraw-Hill',
    },
    {
      id: 'who-cns-tumours-2021',
      type: 'guideline',
      title: 'WHO Classification of Tumours of the Central Nervous System, 5th Edition (2021)',
      source: 'World Health Organization / IARC',
    },
    {
      id: 'robbins-cns',
      type: 'textbook',
      title: 'Robbins & Cotran Patología Estructural y Funcional',
      authors: ['Kumar V', 'Abbas AK', 'Aster JC'],
      source: 'Elsevier',
      chapter: 'The Central Nervous System',
    },
    {
      id: 'love-greenfield-neuropathology',
      type: 'textbook',
      title: 'Greenfield\'s Neuropathology',
      authors: ['Love S', 'Perry A', 'Ironside J', 'Budka H'],
      source: 'CRC Press',
    },
  ],

  crossReferences: [
    { targetId: 'histology-tejido-epitelial', targetType: 'topic', relationship: 'sibling', label: 'Tejido Epitelial | Epithelial Tissue' },
    { targetId: 'histology-tejido-conectivo', targetType: 'topic', relationship: 'sibling', label: 'Tejido Conectivo | Connective Tissue' },
    { targetId: 'histology-tejido-muscular', targetType: 'topic', relationship: 'sibling', label: 'Tejido Muscular | Muscle Tissue' },
    { targetId: 'system-nervous', targetType: 'system', relationship: 'related', label: 'Sistema Nervioso | Nervous System' },
    { targetId: 'condition-alzheimer', targetType: 'condition', relationship: 'see-also', label: 'Enfermedad de Alzheimer | Alzheimer\'s Disease' },
    { targetId: 'condition-multiple-sclerosis', targetType: 'condition', relationship: 'see-also', label: 'Esclerosis Múltiple | Multiple Sclerosis' },
    { targetId: 'condition-glioma', targetType: 'condition', relationship: 'see-also', label: 'Gliomas' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['histology', 'nervous tissue', 'neuroscience', 'neuropathology', 'gliobiology'],
    keywords: ['neurona', 'neuron', 'glía', 'glia', 'mielina', 'myelin', 'sinapsis', 'synapse', 'neurodegeneración', 'neurodegeneration', 'glioma', 'barrera hematoencefálica', 'blood-brain barrier', 'LTP', 'tau', 'amiloide'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'pathology', 'psychiatry'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default tejidoNerviosoContent;
