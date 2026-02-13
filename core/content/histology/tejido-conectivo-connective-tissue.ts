/**
 * Tejido Conectivo | Connective Tissue - Comprehensive Histology Content
 *
 * Covers loose/dense connective tissue, cartilage, bone, blood, and adipose tissue.
 * Spanish-first bilingual content for the SOMA medical education platform.
 */

import { EducationalContent } from '../types';

export const tejidoConectivoContent: EducationalContent = {
  id: 'histology-tejido-conectivo',
  type: 'topic',
  name: 'Tejido Conectivo | Connective Tissue',
  nameEs: 'Tejido Conectivo',
  alternateNames: ['Tejido conjuntivo', 'Connective tissue proper', 'Tejidos de sostén', 'Supporting tissues'],
  fmaId: 'FMA:9640',

  levels: {
    1: {
      level: 1,
      summary: 'El tejido conectivo es como el pegamento, el relleno y el armazón de tu cuerpo: sostiene, une y protege todos los demás tejidos y órganos. | Connective tissue is like your body\'s glue, stuffing, and scaffolding: it supports, connects, and protects all other tissues and organs.',
      explanation: `## El Armazón de Tu Cuerpo | Your Body's Framework

Imagina que estás construyendo una casa con bloques LEGO. El tejido conectivo sería todo lo que mantiene los bloques juntos y en su lugar: el pegamento, los clavos, las vigas y hasta el relleno de los cojines. | Imagine you're building a house with LEGO blocks. Connective tissue would be everything that holds the blocks together and in place: the glue, nails, beams, and even cushion stuffing.

**Tipos principales (piensa en una casa) | Main types (think of a house):**

1. **Tejido conectivo laxo** - Como el relleno suave de un cojín; llena los espacios entre órganos | Like soft cushion stuffing; fills spaces between organs
2. **Tejido conectivo denso** - Como las cuerdas fuertes de una tienda de campaña; forma los tendones y ligamentos | Like strong tent ropes; forms tendons and ligaments
3. **Cartílago** - Como el plástico flexible de tu oreja; firme pero que se dobla | Like the flexible plastic of your ear; firm but bendy
4. **Hueso** - Como el concreto de los cimientos; duro y resistente | Like the concrete in a foundation; hard and strong
5. **Sangre** - Un tipo especial de tejido conectivo líquido que viaja por tu cuerpo | A special type of liquid connective tissue that travels through your body
6. **Grasa (tejido adiposo)** - Como el aislante de las paredes; guarda energía y mantiene el calor | Like wall insulation; stores energy and keeps you warm

**¿Qué tienen en común? | What do they have in common?**

Todos los tejidos conectivos tienen tres componentes: | All connective tissues have three components:
- **Células** - Los trabajadores | The workers
- **Fibras** - Las cuerdas que dan fuerza | The ropes that provide strength
- **Sustancia fundamental** - El "gel" donde viven las células y las fibras | The "gel" where cells and fibers live`,
      keyTerms: [
        { term: 'tejido conectivo | connective tissue', definition: 'El tejido que une, sostiene, protege y rellena los espacios entre otros tejidos | The tissue that connects, supports, protects, and fills spaces between other tissues' },
        { term: 'colágeno | collagen', definition: 'Las "cuerdas" más fuertes del cuerpo; la proteína más abundante de tu cuerpo | The strongest "ropes" in your body; the most abundant protein in your body' },
        { term: 'cartílago | cartilage', definition: 'Tejido firme pero flexible, como el de tu oreja o nariz | Firm but flexible tissue, like in your ear or nose' },
        { term: 'hueso | bone', definition: 'El tejido más duro del cuerpo que forma tu esqueleto | The hardest tissue in your body that forms your skeleton' },
      ],
      analogies: [
        'El colágeno es como las cuerdas de acero en un puente colgante: son las fibras más fuertes de tu cuerpo y mantienen todo unido. | Collagen is like the steel cables in a suspension bridge: they are the strongest fibers in your body and hold everything together.',
        'El cartílago es como una esponja dura: puede absorber golpes sin romperse. | Cartilage is like a hard sponge: it can absorb shocks without breaking.',
        'La sangre es como un río que lleva provisiones a todas las ciudades (órganos) de tu cuerpo. | Blood is like a river carrying supplies to all the cities (organs) in your body.',
      ],
      examples: [
        'Cuando te tuerces el tobillo y se inflama, es porque los ligamentos (tejido conectivo denso) se estiraron demasiado. | When you twist your ankle and it swells, it is because the ligaments (dense connective tissue) stretched too much.',
        'El cartílago de tu rodilla actúa como un cojín entre los huesos para que no se golpeen. | The cartilage in your knee acts like a cushion between bones so they don\'t hit each other.',
      ],
    },
    2: {
      level: 2,
      summary: 'El tejido conectivo se caracteriza por abundante matriz extracelular (fibras + sustancia fundamental) producida por células residentes, y se clasifica en propiamente dicho (laxo, denso), especializado (cartílago, hueso, sangre) y adiposo. | Connective tissue is characterized by abundant extracellular matrix (fibers + ground substance) produced by resident cells, classified into proper (loose, dense), specialized (cartilage, bone, blood), and adipose.',
      explanation: `## Clasificación del Tejido Conectivo | Connective Tissue Classification

### Componentes Generales | General Components

**Células | Cells:**
- **Fibroblastos**: Células principales; producen fibras y sustancia fundamental | Fibroblasts: Main cells; produce fibers and ground substance
- **Macrófagos**: Células defensivas que "comen" bacterias y desechos | Macrophages: Defensive cells that "eat" bacteria and debris
- **Mastocitos (células cebadas)**: Liberan histamina en reacciones alérgicas | Mast cells: Release histamine in allergic reactions
- **Adipocitos**: Almacenan grasa | Adipocytes: Store fat
- **Células plasmáticas**: Producen anticuerpos | Plasma cells: Produce antibodies

**Fibras | Fibers:**
| Tipo | Característica | Ubicación ejemplo |
|------|---------------|-------------------|
| Colágeno | Muy resistente a la tracción | Tendones, piel, hueso | Tendons, skin, bone |
| Elásticas | Se estiran y vuelven a su forma | Arterias, pulmones, piel | Arteries, lungs, skin |
| Reticulares | Red delicada de soporte | Hígado, bazo, ganglios | Liver, spleen, lymph nodes |

**Sustancia fundamental | Ground substance:**
- Gel viscoso de proteoglucanos y glucosaminoglucanos (GAGs) | Viscous gel of proteoglycans and glycosaminoglycans (GAGs)
- Permite difusión de nutrientes y desechos | Allows diffusion of nutrients and waste
- Ácido hialurónico: Principal GAG, retiene agua | Hyaluronic acid: Main GAG, retains water

### Tejido Conectivo Propiamente Dicho | Connective Tissue Proper

**1. Tejido conectivo laxo (areolar) | Loose (areolar) connective tissue**
- Fibras sueltas en abundante sustancia fundamental | Loose fibers in abundant ground substance
- Ubicación: Debajo de epitelios, alrededor de vasos y nervios | Location: Under epithelia, around vessels and nerves
- Función: Relleno, soporte, defensa, nutrición | Function: Filling, support, defense, nutrition

**2. Tejido conectivo denso regular | Dense regular connective tissue**
- Fibras de colágeno paralelas, muy ordenadas | Parallel, highly ordered collagen fibers
- Ubicación: Tendones, ligamentos | Location: Tendons, ligaments
- Función: Resistencia a la tracción en una dirección | Function: Tensile strength in one direction

**3. Tejido conectivo denso irregular | Dense irregular connective tissue**
- Fibras de colágeno en múltiples direcciones | Collagen fibers in multiple directions
- Ubicación: Dermis de la piel, cápsulas de órganos | Location: Dermis of skin, organ capsules
- Función: Resistencia a la tracción en todas direcciones | Function: Tensile strength in all directions

### Cartílago | Cartilage

| Tipo | Matriz | Ubicación |
|------|--------|-----------|
| Hialino | Colágeno II, traslúcido | Articulaciones, tráquea, nariz | Joints, trachea, nose |
| Elástico | Colágeno II + fibras elásticas | Oreja, epiglotis | Ear, epiglottis |
| Fibrocartílago | Colágeno I + II | Discos intervertebrales, meniscos | Intervertebral discs, menisci |

- Avascular: Se nutre por difusión | Avascular: Nourished by diffusion
- Condrocitos en lagunas | Chondrocytes in lacunae
- Pericondrio: Cubierta externa (excepto fibrocartílago y cartílago articular) | Perichondrium: Outer covering (except fibrocartilage and articular cartilage)

### Hueso | Bone

- **Hueso compacto**: Denso, forma la capa externa | Compact bone: Dense, outer layer
  - Sistemas de Havers (osteonas): Unidad funcional | Haversian systems (osteons): Functional unit
  - Laminillas concéntricas alrededor de un canal central | Concentric lamellae around a central canal
- **Hueso esponjoso**: Red de trabéculas, contiene médula ósea | Spongy bone: Trabecular network, contains bone marrow
- Células: Osteoblastos (forman), osteocitos (mantienen), osteoclastos (reabsorben) | Osteoblasts (form), osteocytes (maintain), osteoclasts (resorb)

### Sangre | Blood

- Tejido conectivo líquido | Liquid connective tissue
- Plasma (matriz): Agua, proteínas, electrolitos | Plasma (matrix): Water, proteins, electrolytes
- Elementos formes: Eritrocitos, leucocitos, plaquetas | Formed elements: Erythrocytes, leukocytes, platelets

### Tejido Adiposo | Adipose Tissue

- **Blanco (unilocular)**: Una gota grande de grasa; almacenamiento de energía | White (unilocular): One large fat droplet; energy storage
- **Pardo (multilocular)**: Muchas gotas pequeñas + mitocondrias; produce calor | Brown (multilocular): Many small droplets + mitochondria; produces heat`,
      keyTerms: [
        { term: 'fibroblasto | fibroblast', definition: 'Célula principal del tejido conectivo que produce colágeno, fibras y sustancia fundamental | Main connective tissue cell producing collagen, fibers, and ground substance', pronunciation: 'fee-broh-BLAHS-toh' },
        { term: 'colágeno | collagen', definition: 'Proteína fibrosa más abundante del cuerpo; proporciona resistencia a la tracción | Most abundant fibrous protein; provides tensile strength' },
        { term: 'osteona (sistema de Havers) | osteon (Haversian system)', definition: 'Unidad estructural del hueso compacto: laminillas concéntricas alrededor de un canal con vasos sanguíneos | Structural unit of compact bone: concentric lamellae around a canal with blood vessels' },
        { term: 'condrocito | chondrocyte', definition: 'Célula madura del cartílago que vive en un espacio llamado laguna | Mature cartilage cell living in a space called a lacuna' },
        { term: 'glucosaminoglucanos (GAGs) | glycosaminoglycans', definition: 'Cadenas de azúcares que retienen agua y forman el "gel" de la sustancia fundamental | Sugar chains retaining water forming the "gel" of ground substance' },
        { term: 'mastocito | mast cell', definition: 'Célula del tejido conectivo que libera histamina y heparina en alergias e inflamación | Connective tissue cell releasing histamine and heparin in allergy and inflammation' },
      ],
      analogies: [
        'Los fibroblastos son como las arañas del tejido conectivo: tejen la red de fibras que sostiene todo. | Fibroblasts are like connective tissue spiders: they weave the fiber web that holds everything together.',
        'El hueso compacto es como un edificio de departamentos con muchos pisos circulares (laminillas) alrededor de un elevador central (canal de Havers). | Compact bone is like an apartment building with many circular floors (lamellae) around a central elevator (Haversian canal).',
      ],
      examples: [
        'Cuando te fracturan un hueso, los osteoblastos trabajan para reconstruirlo y los osteoclastos eliminan el hueso dañado. | When you fracture a bone, osteoblasts work to rebuild it and osteoclasts remove damaged bone.',
        'La grasa parda es abundante en los bebés recién nacidos para mantenerlos calientes sin necesidad de temblar. | Brown fat is abundant in newborns to keep them warm without the need to shiver.',
      ],
    },
    3: {
      level: 3,
      summary: 'La matriz extracelular del tejido conectivo es un sistema dinámico regulado por metaloproteinasas e integrinas, con tipos específicos de colágeno (I-V), proteoglucanos complejos y fibras elásticas compuestas por elastina y fibrilina, esenciales para la homeostasis tisular. | The extracellular matrix of connective tissue is a dynamic system regulated by metalloproteinases and integrins, with specific collagen types (I-V), complex proteoglycans, and elastic fibers composed of elastin and fibrillin, essential for tissue homeostasis.',
      explanation: `## Biología de la Matriz Extracelular | Extracellular Matrix Biology

### Tipos de Colágeno | Collagen Types

**Colágenos fibrilares (forman fibras) | Fibrillar collagens:**

| Tipo | Gen | Distribución | Distribution |
|------|-----|-------------|--------------|
| I | COL1A1/A2 | Piel, hueso, tendón, dentina (90% del colágeno total) | Skin, bone, tendon, dentin (90% of total collagen) |
| II | COL2A1 | Cartílago hialino, vítreo | Hyaline cartilage, vitreous humor |
| III | COL3A1 | Fibras reticulares, vasos, piel (con tipo I) | Reticular fibers, vessels, skin (with type I) |
| V | COL5A1/A2 | Superficie celular, junto con tipo I | Cell surface, along with type I |

**Colágenos no fibrilares | Non-fibrillar collagens:**
- **Tipo IV**: Lámina densa de la membrana basal (red hexagonal) | Lamina densa of basement membrane (hexagonal network)
- **Tipo VII**: Fibrillas de anclaje (unión dermoepidérmica) | Anchoring fibrils (dermoepidermal junction)

**Biosíntesis del colágeno | Collagen biosynthesis:**
1. Transcripción → preprocolágeno en RER | Transcription → preprocollagen in RER
2. Hidroxilación de prolina y lisina (requiere vitamina C) | Hydroxylation of proline and lysine (requires vitamin C)
3. Glucosilación y formación de triple hélice (procolágeno) | Glycosylation and triple helix formation (procollagen)
4. Secreción y escisión de propéptidos → tropocolágeno | Secretion and propeptide cleavage → tropocollagen
5. Ensamblaje en fibrillas → entrecruzamientos covalentes (lisil oxidasa, requiere Cu²⁺) | Fibril assembly → covalent cross-links (lysyl oxidase, requires Cu²⁺)

### Fibras Elásticas | Elastic Fibers

**Composición | Composition:**
- **Núcleo**: Elastina (tropoelastina polimerizada con entrecruzamientos de desmosina) | Core: Elastin (polymerized tropoelastin with desmosine cross-links)
- **Envoltorio**: Microfibrillas de fibrilina-1 | Sheath: Fibrillin-1 microfibrils
- Se estiran hasta 150% de su longitud sin romperse | Stretch up to 150% of length without breaking

### Sustancia Fundamental | Ground Substance

**Proteoglucanos | Proteoglycans:**
- Proteína central + cadenas laterales de GAGs | Core protein + GAG side chains
- **Agrecán**: Principal proteoglucano del cartílago; unido a hialuronano | Aggrecan: Main cartilage proteoglycan; bound to hyaluronan
- **Decorina**: Regula ensamblaje de fibrillas de colágeno | Decorin: Regulates collagen fibril assembly
- **Perlecán**: Componente de la membrana basal | Perlecan: Basement membrane component

**Glucoproteínas adhesivas | Adhesive glycoproteins:**
- **Fibronectina**: Conecta células con la matriz (dominio RGD) | Fibronectin: Connects cells to matrix (RGD domain)
- **Laminina**: Principal glucoproteína de la lámina basal | Laminin: Main glycoprotein of the basal lamina

### Receptores de Matriz: Integrinas | Matrix Receptors: Integrins

- Heterodímeros αβ transmembrana | Transmembrane αβ heterodimers
- Señalización bidireccional: Outside-in y Inside-out | Bidirectional signaling: Outside-in and Inside-out
- Activan vías FAK/Src → supervivencia, migración, proliferación | Activate FAK/Src pathways → survival, migration, proliferation
- Pérdida de adhesión a la matriz → anoikis (apoptosis por desprendimiento) | Loss of matrix adhesion → anoikis (detachment-induced apoptosis)

### Remodelación de la Matriz | Matrix Remodeling

**Metaloproteinasas de matriz (MMPs) | Matrix metalloproteinases:**
- Familia de >25 endopeptidasas Zn²⁺-dependientes | Family of >25 Zn²⁺-dependent endopeptidases
- Colagenasas (MMP-1, 8, 13): Degradan colágeno fibrilar | Collagenases: Degrade fibrillar collagen
- Gelatinasas (MMP-2, 9): Degradan colágeno IV y gelatina | Gelatinases: Degrade type IV collagen and gelatin
- Reguladas por TIMPs (inhibidores tisulares de MMPs) | Regulated by TIMPs (tissue inhibitors of MMPs)

### Cartílago: Biología Detallada | Cartilage: Detailed Biology

**Zonas del cartílago articular (de superficie a profundidad) | Articular cartilage zones:**
1. Zona superficial (tangencial): Condrocitos aplanados, colágeno II paralelo | Surface zone: Flattened chondrocytes, parallel collagen II
2. Zona transicional: Condrocitos redondeados, colágeno oblicuo | Transitional zone: Rounded chondrocytes, oblique collagen
3. Zona radial: Columnas de condrocitos, colágeno perpendicular | Radial zone: Chondrocyte columns, perpendicular collagen
4. Zona calcificada: Interfase con hueso subcondral | Calcified zone: Interface with subchondral bone
- **Tidemark**: Línea basófila entre zona radial y calcificada | Basophilic line between radial and calcified zones

### Biología Ósea | Bone Biology

**Remodelación ósea | Bone remodeling:**
- Ciclo: Activación → Resorción (osteoclastos) → Reversión → Formación (osteoblastos) → Mineralización | Cycle: Activation → Resorption (osteoclasts) → Reversal → Formation (osteoblasts) → Mineralization
- Regulado por RANK/RANKL/OPG | Regulated by RANK/RANKL/OPG
  - RANKL (osteoblastos) activa osteoclastos vía RANK | RANKL (osteoblasts) activates osteoclasts via RANK
  - OPG (señuelo de RANKL) inhibe osteoclastogénesis | OPG (RANKL decoy) inhibits osteoclastogenesis

**Mineralización | Mineralization:**
- Hidroxiapatita: Ca₁₀(PO₄)₆(OH)₂ | Hydroxyapatite
- Deposición en matriz de colágeno tipo I | Deposition in type I collagen matrix
- Regulada por fosfatasa alcalina, osteocalcina, osteopontina | Regulated by alkaline phosphatase, osteocalcin, osteopontin`,
      keyTerms: [
        { term: 'colágeno tipo I | type I collagen', definition: 'Colágeno fibrilar más abundante (90%); presente en piel, hueso, tendón, dentina; mutaciones causan osteogénesis imperfecta | Most abundant fibrillar collagen (90%); in skin, bone, tendon, dentin; mutations cause osteogenesis imperfecta' },
        { term: 'colágeno tipo IV | type IV collagen', definition: 'Colágeno no fibrilar que forma la red de la lámina densa de la membrana basal; blanco en síndrome de Goodpasture y Alport | Non-fibrillar collagen forming lamina densa network; target in Goodpasture and Alport syndromes' },
        { term: 'fibrilina-1 | fibrillin-1', definition: 'Glucoproteína de las microfibrillas que rodean la elastina; mutaciones en FBN1 causan síndrome de Marfan | Glycoprotein of microfibrils surrounding elastin; FBN1 mutations cause Marfan syndrome' },
        { term: 'integrinas | integrins', definition: 'Receptores transmembrana αβ que conectan la célula con la matriz extracelular y activan señalización FAK/Src | αβ transmembrane receptors connecting cell to ECM and activating FAK/Src signaling' },
        { term: 'RANK/RANKL/OPG', definition: 'Sistema regulador de la remodelación ósea: RANKL activa osteoclastos, OPG lo inhibe; denosumab es un anticuerpo anti-RANKL | Bone remodeling regulatory system: RANKL activates osteoclasts, OPG inhibits; denosumab is an anti-RANKL antibody' },
        { term: 'metaloproteinasas (MMPs) | matrix metalloproteinases', definition: 'Enzimas Zn²⁺-dependientes que degradan componentes de la matriz; equilibrio MMPs/TIMPs regula remodelación tisular | Zn²⁺-dependent enzymes degrading matrix components; MMPs/TIMPs balance regulates tissue remodeling' },
        { term: 'agrecán | aggrecan', definition: 'Proteoglucano principal del cartílago; retiene agua mediante GAGs de condroitín y queratán sulfato, otorgando resistencia a la compresión | Main cartilage proteoglycan; retains water via chondroitin and keratan sulfate GAGs, providing compression resistance' },
      ],
      clinicalNotes: 'El escorbuto (deficiencia de vitamina C) impide la hidroxilación del colágeno, causando sangrado gingival, fragilidad capilar y mala cicatrización. El síndrome de Ehlers-Danlos incluye múltiples subtipos con defectos en colágeno tipo III (vascular) o enzimas procesadoras. La deficiencia de cobre afecta la lisil oxidasa, alterando el entrecruzamiento del colágeno. La osteoartritis implica desbalance MMPs/TIMPs con degradación del cartílago articular. | Scurvy (vitamin C deficiency) prevents collagen hydroxylation, causing gingival bleeding, capillary fragility, and poor healing. Ehlers-Danlos syndrome includes multiple subtypes with type III collagen (vascular) or processing enzyme defects. Copper deficiency affects lysyl oxidase, disrupting collagen cross-linking. Osteoarthritis involves MMPs/TIMPs imbalance with articular cartilage degradation.',
    },
    4: {
      level: 4,
      summary: 'La biología avanzada del tejido conectivo integra mecanotransducción, señalización TGF-β/BMP en fibrosis y diferenciación, células madre mesenquimales multipotentes, y la patogénesis molecular de conectivopatías hereditarias y enfermedades autoinmunes del colágeno. | Advanced connective tissue biology integrates mechanotransduction, TGF-β/BMP signaling in fibrosis and differentiation, multipotent mesenchymal stem cells, and the molecular pathogenesis of hereditary connective tissue disorders and collagen autoimmune diseases.',
      explanation: `## Biología Avanzada del Tejido Conectivo | Advanced Connective Tissue Biology

### Mecanotransducción y Regulación de la MEC | Mechanotransduction and ECM Regulation

**Rigidez de la matriz y destino celular | Matrix stiffness and cell fate:**
- Las células detectan la rigidez del sustrato a través de integrinas → FAK → Rho/ROCK | Cells sense substrate stiffness via integrins → FAK → Rho/ROCK
- Sustratos blandos (~0.1 kPa): Diferenciación neurogénica | Soft substrates: Neurogenic differentiation
- Intermedios (~10 kPa): Diferenciación miogénica | Intermediate: Myogenic differentiation
- Rígidos (~40 kPa): Diferenciación osteogénica | Stiff: Osteogenic differentiation
- YAP/TAZ: Mecanosensores nucleares que integran señales mecánicas con proliferación/diferenciación | Nuclear mechanosensors integrating mechanical signals with proliferation/differentiation

**Fibrosis: Modelo general | Fibrosis: General model:**
1. Lesión tisular → activación de macrófagos → TGF-β1 | Tissue injury → macrophage activation → TGF-β1
2. TGF-β1 activa fibroblastos → miofibroblastos (α-SMA+) | TGF-β1 activates fibroblasts → myofibroblasts (α-SMA+)
3. Producción excesiva de colágeno I y III | Excessive type I and III collagen production
4. Señalización Smad2/3 downstream de TGF-β | Smad2/3 signaling downstream of TGF-β
5. Retroalimentación positiva: Rigidez de la matriz → más activación de TGF-β1 | Positive feedback: Matrix stiffness → more TGF-β1 activation
6. Resolución fallida → fibrosis progresiva → insuficiencia orgánica | Failed resolution → progressive fibrosis → organ failure

### Señalización TGF-β/BMP | TGF-β/BMP Signaling

**Superfamilia TGF-β | TGF-β superfamily:**

| Ligando | Receptores | Smads | Función en TC |
|---------|-----------|-------|---------------|
| TGF-β1/2/3 | TβRI/TβRII | Smad2/3 | Fibrosis, EMT, inmunosupresión |
| BMP-2/4/7 | BMPR-I/II | Smad1/5/8 | Osteogénesis, condrogénesis |
| GDF-5 | BMPR-IB | Smad1/5/8 | Desarrollo articular |
| Activina | ActR-I/II | Smad2/3 | Remodelación tisular |

**Vía canónica | Canonical pathway:**
Ligando → Receptor tipo II → fosforilación de receptor tipo I → fosforilación de R-Smads → complejo con Smad4 → translocación nuclear → activación transcripcional

**Vías no canónicas | Non-canonical pathways:**
- MAPK (p38, JNK, ERK)
- PI3K/Akt
- Rho GTPasas

### Células Madre Mesenquimales (MSCs) | Mesenchymal Stem Cells

**Características | Characteristics:**
- Multipotentes: Diferenciación a osteoblastos, condrocitos, adipocitos, fibroblastos | Multipotent: Differentiation into osteoblasts, chondrocytes, adipocytes, fibroblasts
- Marcadores: CD73+, CD90+, CD105+, CD34−, CD45− | Markers
- Fuentes: Médula ósea, tejido adiposo, cordón umbilical, pulpa dental | Sources: Bone marrow, adipose tissue, umbilical cord, dental pulp

**Regulación de la diferenciación | Differentiation regulation:**
- **Osteogénica**: Runx2 → Osterix → osteoblasto; BMP-2/Wnt/β-catenina | Osteogenic: Runx2 → Osterix → osteoblast; BMP-2/Wnt/β-catenin
- **Condrogénica**: Sox9 → Sox5/Sox6; TGF-β3, hipoxia | Chondrogenic: Sox9 → Sox5/Sox6; TGF-β3, hypoxia
- **Adipogénica**: PPARγ → C/EBPα; insulina, dexametasona | Adipogenic: PPARγ → C/EBPα; insulin, dexamethasone
- **Competencia entre vías**: Runx2 y PPARγ se antagonizan mutuamente | Pathway competition: Runx2 and PPARγ mutually antagonize

### Patogénesis Molecular de Conectivopatías | Molecular Pathogenesis of Connective Tissue Disorders

**Osteogénesis imperfecta | Osteogenesis imperfecta:**
- Mutaciones en COL1A1/COL1A2 (colágeno tipo I) | COL1A1/COL1A2 mutations (type I collagen)
- Tipos I-IV de Sillence; tipo I más leve (haploinsuficiencia), tipo II letal | Sillence types I-IV; type I mildest (haploinsufficiency), type II lethal
- Fragilidad ósea, escleras azules, dentinogénesis imperfecta | Bone fragility, blue sclerae, dentinogenesis imperfecta

**Síndrome de Marfan | Marfan syndrome:**
- Mutación en FBN1 (fibrilina-1) → activación excesiva de TGF-β | FBN1 mutation (fibrillin-1) → excessive TGF-β activation
- Afecta esquelético (aracnodactilia, talla alta), ocular (luxación de cristalino), cardiovascular (dilatación de raíz aórtica) | Skeletal (arachnodactyly, tall stature), ocular (lens subluxation), cardiovascular (aortic root dilation)
- Losartán (ARB) reduce señalización TGF-β → beneficio en dilatación aórtica | Losartan (ARB) reduces TGF-β signaling → benefit in aortic dilation

**Síndrome de Ehlers-Danlos | Ehlers-Danlos syndrome:**
- >13 subtipos con bases moleculares distintas | >13 subtypes with distinct molecular bases
- Tipo vascular (COL3A1): Riesgo de ruptura arterial y visceral | Vascular type: Risk of arterial and visceral rupture
- Tipo clásico (COL5A1/A2): Hiperextensibilidad, fragilidad cutánea | Classic type: Hyperextensibility, skin fragility
- Tipo hipermóvil (gen desconocido): Hiperlaxitud articular, dolor crónico | Hypermobile type (unknown gene): Joint hypermobility, chronic pain

**Síndrome de Goodpasture | Goodpasture syndrome:**
- Anticuerpos anti-colágeno tipo IV (cadena α3) | Anti-type IV collagen (α3 chain) antibodies
- Afecta membrana basal glomerular y alveolar | Affects glomerular and alveolar basement membrane
- Glomerulonefritis rápidamente progresiva + hemorragia pulmonar | Rapidly progressive glomerulonephritis + pulmonary hemorrhage

### Tejido Adiposo: Más Que Almacén de Energía | Adipose Tissue: More Than Energy Storage

**Tejido adiposo como órgano endocrino | Adipose tissue as endocrine organ:**
- **Leptina**: Señal de saciedad al hipotálamo; regulación del balance energético | Leptin: Satiety signal to hypothalamus; energy balance regulation
- **Adiponectina**: Sensibilización a insulina, antiinflamatoria; disminuida en obesidad | Adiponectin: Insulin sensitization, anti-inflammatory; decreased in obesity
- **Resistina**: Proinflamatoria, resistencia a insulina | Resistin: Proinflammatory, insulin resistance
- **IL-6, TNF-α**: Inflamación crónica de bajo grado en obesidad | Chronic low-grade inflammation in obesity

**Tejido adiposo pardo y beige | Brown and beige adipose tissue:**
- Proteína desacoplante UCP1: Termogénesis sin temblor | Uncoupling protein UCP1: Non-shivering thermogenesis
- Adipocitos beige: Inducidos por frío/ejercicio en tejido adiposo blanco (browning) | Beige adipocytes: Induced by cold/exercise in white adipose (browning)
- Irisina (miocina del ejercicio) promueve browning | Irisin (exercise myokine) promotes browning
- Potencial terapéutico en obesidad y diabetes tipo 2 | Therapeutic potential in obesity and type 2 diabetes`,
      keyTerms: [
        { term: 'mecanotransducción | mechanotransduction', definition: 'Conversión de estímulos mecánicos (rigidez, estiramiento) en señales bioquímicas intracelulares; las integrinas y YAP/TAZ son mecanosensores clave | Conversion of mechanical stimuli into intracellular biochemical signals; integrins and YAP/TAZ are key mechanosensors' },
        { term: 'miofibroblasto | myofibroblast', definition: 'Fibroblasto activado (α-SMA+) que produce colágeno excesivo y genera contracción; célula efectora central en fibrosis | Activated fibroblast (α-SMA+) producing excess collagen and generating contraction; central effector cell in fibrosis' },
        { term: 'Runx2', definition: 'Factor de transcripción maestro de la diferenciación osteoblástica; su expresión es necesaria y suficiente para iniciar la osteogénesis a partir de MSCs | Master transcription factor for osteoblastic differentiation; necessary and sufficient for osteogenesis from MSCs' },
        { term: 'Sox9', definition: 'Factor de transcripción maestro de la condrogénesis; activa colágeno tipo II y agrecán; haploinsuficiencia causa displasia campomélica | Master chondrogenic transcription factor; activates type II collagen and aggrecan; haploinsufficiency causes campomelic dysplasia' },
        { term: 'PPARγ', definition: 'Receptor nuclear maestro de la adipogénesis; blanco de tiazolidinedionas (sensibilizadores de insulina) | Master nuclear receptor for adipogenesis; target of thiazolidinediones (insulin sensitizers)' },
        { term: 'UCP1', definition: 'Proteína desacoplante-1 mitocondrial del tejido adiposo pardo; disipa el gradiente protónico como calor en lugar de ATP | Mitochondrial uncoupling protein-1 in brown adipose; dissipates proton gradient as heat instead of ATP' },
      ],
      clinicalNotes: 'Las terapias antifibróticas (nintedanib, pirfenidona) en fibrosis pulmonar idiopática actúan parcialmente inhibiendo la señalización TGF-β y la activación de miofibroblastos. Denosumab (anti-RANKL) y romosozumab (anti-esclerostina) representan la terapia dirigida a vías moleculares del remodelado óseo. La terapia con MSCs es un campo emergente en medicina regenerativa con resultados prometedores en osteoartritis y reparación ósea, aunque persisten desafíos en estandarización y eficacia a largo plazo. | Antifibrotic therapies (nintedanib, pirfenidone) in IPF partly inhibit TGF-β signaling and myofibroblast activation. Denosumab (anti-RANKL) and romosozumab (anti-sclerostin) represent targeted therapy of bone remodeling pathways. MSC therapy is an emerging field in regenerative medicine with promising results in osteoarthritis and bone repair, though challenges in standardization and long-term efficacy persist.',
    },
    5: {
      level: 5,
      summary: 'La histopatología avanzada del tejido conectivo incluye la clasificación molecular de sarcomas, fibrosis como "enfermedad de la matriz", biomecánica articular en osteoartritis, enfermedades de depósito en la sustancia fundamental, y terapias biológicas dirigidas a componentes específicos de la MEC. | Advanced connective tissue histopathology includes molecular sarcoma classification, fibrosis as a "matrix disease," articular biomechanics in osteoarthritis, storage diseases of ground substance, and targeted biological therapies to specific ECM components.',
      explanation: `## Histopatología Avanzada del Tejido Conectivo | Advanced Connective Tissue Histopathology

### Sarcomas de Tejido Blando: Clasificación Molecular | Soft Tissue Sarcomas: Molecular Classification

**Sarcomas con translocaciones específicas | Sarcomas with specific translocations:**

| Sarcoma | Translocación | Gen de fusión | Marcador IHQ |
|---------|--------------|---------------|-------------|
| Sarcoma de Ewing | t(11;22)(q24;q12) | EWSR1-FLI1 | CD99, NKX2-2 |
| Sarcoma sinovial | t(X;18)(p11;q11) | SS18-SSX1/2 | TLE1, SSX C-terminal |
| Rabdomiosarcoma alveolar | t(2;13)(q35;q14) | PAX3-FOXO1 | Miogenina, MyoD1 |
| Liposarcoma mixoide | t(12;16)(q13;p11) | FUS-DDIT3 | S100 focal |
| Tumor desmoplásico | t(11;22)(p13;q12) | EWSR1-WT1 | Desmina (dot-like) |
| Sarcoma de células claras | t(12;22)(q13;q12) | EWSR1-ATF1 | S100, HMB-45, SOX10 |

**Diagnóstico molecular | Molecular diagnosis:**
- FISH: Detección de reordenamientos recurrentes | FISH: Recurrent rearrangement detection
- RT-PCR: Confirmación de transcritos de fusión | RT-PCR: Fusion transcript confirmation
- NGS panel: Sarcomas sin translocación (perfil mutacional) | NGS panel: Non-translocation sarcomas (mutational profile)
- Metilación del ADN: Clasificación de sarcomas indiferenciados | DNA methylation: Undifferentiated sarcoma classification

### Fibrosis Orgánica: Paradigma Actual | Organ Fibrosis: Current Paradigm

**Fibrosis como enfermedad convergente | Fibrosis as a convergent disease:**
- Fibrosis hepática: Células estrelladas (HSCs) → miofibroblastos; estadificación METAVIR F0-F4 | Hepatic: Stellate cells → myofibroblasts; METAVIR staging F0-F4
- Fibrosis pulmonar: Fibroblastos intersticiales → foco fibroblástico (UIP pattern); FVC como biomarcador funcional | Pulmonary: Interstitial fibroblasts → fibroblastic focus (UIP pattern); FVC as functional biomarker
- Fibrosis renal: Pericitos/fibroblastos corticales → fibrosis tubulointersticial; TFGe como marcador | Renal: Cortical pericytes/fibroblasts → tubulointerstitial fibrosis; eGFR as marker
- Fibrosis cardíaca: Fibroblastos cardíacos → remodelación ventricular → insuficiencia cardíaca; LGE en resonancia | Cardiac: Cardiac fibroblasts → ventricular remodeling → heart failure; LGE on MRI

**Biomarcadores de fibrosis | Fibrosis biomarkers:**
- PIIIINP (propéptido aminoterminal del procolágeno III): Marcador sérico de fibrosis activa | Serum marker of active fibrosis
- ELF score (Enhanced Liver Fibrosis): Panel sérico no invasivo | Non-invasive serum panel
- FibroScan (elastografía transitoria): Rigidez hepática como sustituto de biopsia | Transient elastography: Liver stiffness as biopsy surrogate
- Shear wave elastography: Evaluación de múltiples órganos | Multi-organ assessment

### Osteoartritis: Enfermedad del Órgano Articular | Osteoarthritis: Joint Organ Disease

**Histopatología | Histopathology:**
- Fibrilación superficial → fisuras → erosión del cartílago | Surface fibrillation → fissures → cartilage erosion
- Pérdida de proteoglucanos (disminución de tinción con azul de toluidina/safranina O) | Proteoglycan loss (decreased toluidine blue/safranin O staining)
- Clones de condrocitos en clusters | Chondrocyte cloning in clusters
- Engrosamiento y remodelación del hueso subcondral | Subchondral bone thickening and remodeling
- Sinovitis: Infiltrado inflamatorio crónico | Synovitis: Chronic inflammatory infiltrate

**Patogénesis molecular actualizada | Updated molecular pathogenesis:**
- IL-1β, TNF-α → NF-κB → MMPs (MMP-13: colagenasa principal), ADAMTS-4/5 (agrecanasas) | IL-1β, TNF-α → NF-κB → MMPs (MMP-13: main collagenase), ADAMTS-4/5 (aggrecanases)
- Senescencia condrocitaria: Fenotipo secretor asociado a senescencia (SASP) | Chondrocyte senescence: SASP
- Calcificación patológica: Cristales de pirofosfato cálcico e hidroxiapatita | Pathological calcification: CPP and hydroxyapatite crystals
- Dolor neuropático: Inervación de la zona osteocondral | Neuropathic pain: Osteochondral zone innervation

### Enfermedades de Depósito de la Sustancia Fundamental | Ground Substance Storage Diseases

**Mucopolisacaridosis (MPS) | Mucopolysaccharidoses:**

| Tipo | Enzima deficiente | GAG acumulado | Manifestaciones |
|------|------------------|---------------|-----------------|
| MPS I (Hurler/Scheie) | α-L-iduronidasa | Heparán/dermatán sulfato | Disostosis, opacidad corneal |
| MPS II (Hunter) | Iduronato-2-sulfatasa | Heparán/dermatán sulfato | Ligado a X, sin opacidad corneal |
| MPS IV (Morquio) | Galactosa-6-sulfatasa | Queratán sulfato | Displasia espondiloepiisaria |
| MPS VI (Maroteaux-Lamy) | Arilsulfatasa B | Dermatán sulfato | Disostosis, inteligencia normal |

**Terapia de reemplazo enzimático (TRE) | Enzyme replacement therapy (ERT):**
- Disponible para MPS I, II, IVA, VI, VII | Available for MPS I, II, IVA, VI, VII
- Limitación: No cruza la barrera hematoencefálica | Limitation: Does not cross blood-brain barrier
- Alternativa: Terapia de reducción de sustrato, terapia génica | Alternatives: Substrate reduction therapy, gene therapy

### Terapias Biológicas Dirigidas a la MEC | Targeted Biological Therapies for ECM

**En fibrosis | In fibrosis:**
- Pirfenidona: Anti-TGF-β1, antioxidante; aprobada para FPI | Pirfenidone: Anti-TGF-β1, antioxidant; approved for IPF
- Nintedanib: Triple inhibidor de tirosina quinasa (PDGFR, VEGFR, FGFR); aprobada para FPI | Triple tyrosine kinase inhibitor; approved for IPF
- Pamrevlumab (anti-CTGF): En ensayos clínicos fase III | In phase III clinical trials
- Inhibidores de Galectina-3: TD139 (inhalado) en desarrollo | In development

**En enfermedad ósea | In bone disease:**
- Denosumab (anti-RANKL): Osteoporosis, metástasis óseas | Osteoporosis, bone metastases
- Romosozumab (anti-esclerostina): Formación ósea + antirresortivo | Bone formation + antiresorptive
- BMP-2 recombinante: Fusión espinal, pseudoartrosis | Spinal fusion, non-union fractures
- Terapia génica con AAV-BMP para reparación ósea: En investigación | AAV-BMP gene therapy for bone repair: Under investigation

**En osteoartritis | In osteoarthritis:**
- Anti-NGF (tanezumab): Analgesia por bloqueo del factor de crecimiento nervioso (controversia por osteonecrosis acelerada) | NGF blockade analgesia (controversy due to accelerated osteonecrosis)
- Terapia con MSCs intraarticular: Resultados mixtos en ensayos fase III | Intra-articular MSC therapy: Mixed phase III results
- Inhibidores de Wnt (lorecivivint): Potencial modificador de enfermedad en desarrollo | Wnt inhibitors: Potential disease modifier in development
- Sprifermin (rhFGF-18): Estimula condrogénesis; aumento dosis-dependiente del grosor del cartílago | Stimulates chondrogenesis; dose-dependent cartilage thickness increase`,
      keyTerms: [
        { term: 'EWSR1-FLI1', definition: 'Transcrito de fusión patognomónico del sarcoma de Ewing por t(11;22); presente en ~85% de casos; diana para desarrollo terapéutico | Pathognomonic Ewing sarcoma fusion transcript from t(11;22); present in ~85% of cases; therapeutic target' },
        { term: 'foco fibroblástico | fibroblastic focus', definition: 'Hallazgo histopatológico diagnóstico del patrón UIP (neumonía intersticial usual); agregado de miofibroblastos activos en la interfaz del pulmón fibrótico | Diagnostic histopathological finding of UIP pattern; aggregate of active myofibroblasts at fibrotic lung interface' },
        { term: 'ADAMTS-4/5 | aggrecanases', definition: 'Metaloproteinasas que degradan agrecán; principales enzimas destructivas en osteoartritis; blancos terapéuticos en investigación | Metalloproteinases degrading aggrecan; main destructive enzymes in osteoarthritis; therapeutic targets under investigation' },
        { term: 'mucopolisacaridosis | mucopolysaccharidoses', definition: 'Grupo de enfermedades lisosomales por deficiencia de enzimas que degradan GAGs; acumulación progresiva causa disostosis múltiple y afectación multiorgánica | Group of lysosomal storage diseases from GAG-degrading enzyme deficiency; progressive accumulation causes dysostosis multiplex and multiorgan involvement' },
        { term: 'esclerostina | sclerostin', definition: 'Inhibidor de Wnt producido por osteocitos; su bloqueo con romosozumab estimula la formación ósea; marcador de actividad osteocitaria | Wnt inhibitor produced by osteocytes; blockade with romosozumab stimulates bone formation; osteocyte activity marker' },
        { term: 'elastografía | elastography', definition: 'Técnica de imagen que mide la rigidez tisular como sustituto no invasivo de biopsia para cuantificar fibrosis; utilizada en hígado, riñón y mama | Imaging technique measuring tissue stiffness as non-invasive biopsy surrogate for fibrosis quantification; used in liver, kidney, and breast' },
      ],
      clinicalNotes: `Correlaciones histopatológicas clínicas avanzadas | Advanced clinical histopathological correlations:

1. **Diagnóstico de sarcomas**: La clasificación molecular por translocaciones es imprescindible; >50 subtipos con pronóstico y tratamiento distintos. FISH y/o RT-PCR son obligatorios en el estudio diagnóstico. | Sarcoma diagnosis: Molecular classification by translocations is mandatory; >50 subtypes with distinct prognosis and treatment.

2. **Fibrosis como causa de mortalidad**: La fibrosis orgánica contribuye a ~45% de las muertes en países desarrollados. La elastografía está reemplazando la biopsia hepática para estadificación. | Organ fibrosis contributes to ~45% of deaths in developed countries. Elastography is replacing liver biopsy for staging.

3. **Osteoartritis**: Ya no se considera "desgaste" sino una enfermedad inflamatoria del órgano articular completo. Los nuevos biomarcadores de degradación del cartílago (uCTX-II, sCOMP) permiten monitoreo no invasivo. | No longer considered "wear and tear" but an inflammatory disease of the whole joint organ. New cartilage degradation biomarkers allow non-invasive monitoring.

4. **Medicina regenerativa ósea**: Las proteínas morfogenéticas óseas recombinantes (rhBMP-2) están aprobadas para fusión espinal y pseudoartrosis tibial, pero su uso off-label ha generado complicaciones (formación ectópica, inflamación). | Recombinant BMPs are approved for spinal fusion and tibial non-union, but off-label use has caused complications.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ross-histology-ct',
      type: 'textbook',
      title: 'Ross Histología: Texto y Atlas',
      authors: ['Pawlina W', 'Ross MH'],
      source: 'Wolters Kluwer',
      chapter: 'Tejido Conectivo',
    },
    {
      id: 'junqueira-ct',
      type: 'textbook',
      title: 'Histología Básica: Texto y Atlas',
      authors: ['Junqueira LC', 'Carneiro J', 'Abrahamsohn P'],
      source: 'McGraw-Hill',
      chapter: 'Tejido Conjuntivo',
    },
    {
      id: 'robbins-ct',
      type: 'textbook',
      title: 'Robbins & Cotran Patología Estructural y Funcional',
      authors: ['Kumar V', 'Abbas AK', 'Aster JC'],
      source: 'Elsevier',
      chapter: 'Enfermedades del tejido conectivo',
    },
    {
      id: 'who-soft-tissue-tumours',
      type: 'guideline',
      title: 'WHO Classification of Soft Tissue Tumours, 5th Edition',
      source: 'World Health Organization / IARC',
    },
    {
      id: 'alberts-cell-biology-ecm',
      type: 'textbook',
      title: 'Molecular Biology of the Cell',
      authors: ['Alberts B', 'Johnson A', 'Lewis J', 'Morgan D', 'Raff M', 'Roberts K', 'Walter P'],
      source: 'Garland Science',
      chapter: 'Cell Junctions, Cell Adhesion, and the Extracellular Matrix',
    },
  ],

  crossReferences: [
    { targetId: 'histology-tejido-epitelial', targetType: 'topic', relationship: 'sibling', label: 'Tejido Epitelial | Epithelial Tissue' },
    { targetId: 'histology-tejido-muscular', targetType: 'topic', relationship: 'sibling', label: 'Tejido Muscular | Muscle Tissue' },
    { targetId: 'histology-tejido-nervioso', targetType: 'topic', relationship: 'sibling', label: 'Tejido Nervioso | Nervous Tissue' },
    { targetId: 'system-musculoskeletal', targetType: 'system', relationship: 'related', label: 'Sistema Musculoesquelético | Musculoskeletal System' },
    { targetId: 'condition-osteoarthritis', targetType: 'condition', relationship: 'see-also', label: 'Osteoartritis | Osteoarthritis' },
    { targetId: 'condition-osteogenesis-imperfecta', targetType: 'condition', relationship: 'see-also', label: 'Osteogénesis Imperfecta' },
    { targetId: 'condition-marfan-syndrome', targetType: 'condition', relationship: 'see-also', label: 'Síndrome de Marfan | Marfan Syndrome' },
  ],

  tags: {
    systems: ['musculoskeletal', 'integumentary', 'hematologic'],
    topics: ['histology', 'connective tissue', 'extracellular matrix', 'pathology', 'bone biology'],
    keywords: ['colágeno', 'collagen', 'cartílago', 'cartilage', 'hueso', 'bone', 'fibrosis', 'MEC', 'ECM', 'sarcoma', 'osteoartritis', 'proteoglucanos', 'MSC', 'células madre mesenquimales'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pathology', 'medicine', 'surgery', 'orthopedics'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default tejidoConectivoContent;
