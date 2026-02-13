/**
 * Tejido Epitelial | Epithelial Tissue - Comprehensive Histology Content
 *
 * Covers all epithelial tissue classifications, morphology, and clinical correlations.
 * Spanish-first bilingual content for the SOMA medical education platform.
 */

import { EducationalContent } from '../types';

export const tejidoEpitelialContent: EducationalContent = {
  id: 'histology-tejido-epitelial',
  type: 'topic',
  name: 'Tejido Epitelial | Epithelial Tissue',
  nameEs: 'Tejido Epitelial',
  alternateNames: ['Epitelio', 'Epithelium', 'Tejidos de revestimiento', 'Lining tissues'],
  fmaId: 'FMA:9639',

  levels: {
    1: {
      level: 1,
      summary: 'El tejido epitelial es como la "piel" que cubre todas las superficies de tu cuerpo, por dentro y por fuera. | Epithelial tissue is like the "skin" covering all your body surfaces, inside and out.',
      explanation: `## La Cubierta Protectora de Tu Cuerpo | Your Body's Protective Covering

Imagina que tu cuerpo es una casa. El tejido epitelial es como el papel tapiz, la pintura y los azulejos que cubren todas las superficies: las paredes exteriores (tu piel), las paredes interiores (el interior de tu boca, estómago e intestinos) y hasta las tuberías (tus vasos sanguíneos). | Imagine your body is a house. Epithelial tissue is like the wallpaper, paint, and tiles covering every surface: outer walls (your skin), inner walls (inside your mouth, stomach, and intestines), and even the plumbing (your blood vessels).

**¿Por qué es importante? | Why does it matter?**

Sin tejido epitelial, tu cuerpo no tendría protección contra los gérmenes, no podría absorber los nutrientes de la comida y no podría producir sustancias importantes como el sudor o la saliva. | Without epithelial tissue, your body couldn't protect against germs, absorb nutrients from food, or produce important substances like sweat or saliva.

**Tipos principales | Main types:**

1. **Plano (como azulejos)** - Células aplanadas que cubren superficies lisas | Flat cells (like floor tiles) covering smooth surfaces
2. **Cúbico (como dados)** - Células en forma de cubo que ayudan a absorber y secretar | Cube-shaped cells that help absorb and secrete
3. **Cilíndrico (como columnas)** - Células altas que protegen y absorben | Tall column-shaped cells that protect and absorb

**Capas | Layers:**
- **Simple (una capa)** - Como una fila de azulejos | Like a single row of tiles
- **Estratificado (varias capas)** - Como varias capas de pintura, más fuerte | Like many coats of paint, stronger

**Funciones principales | Main functions:**
- Protección contra daño y gérmenes | Protection against damage and germs
- Absorción de nutrientes | Absorption of nutrients
- Secreción de sustancias útiles | Secretion of useful substances
- Filtración de líquidos | Filtration of fluids`,
      keyTerms: [
        { term: 'epitelio | epithelium', definition: 'Tejido que cubre las superficies del cuerpo por dentro y por fuera | Tissue covering body surfaces inside and out' },
        { term: 'membrana basal | basement membrane', definition: 'La "base" sobre la que se sienta el epitelio, como el piso debajo de los azulejos | The "base" the epithelium sits on, like the floor under tiles' },
        { term: 'glándula | gland', definition: 'Grupo de células epiteliales que producen sustancias como sudor o saliva | Group of epithelial cells that produce substances like sweat or saliva' },
        { term: 'célula | cell', definition: 'La unidad más pequeña de vida en tu cuerpo | The smallest unit of life in your body' },
      ],
      analogies: [
        'El tejido epitelial es como el papel de regalo que cubre un paquete: protege lo que hay dentro y le da forma al exterior. | Epithelial tissue is like gift wrapping: it protects what is inside and shapes the outside.',
        'Las células epiteliales están pegadas como los azulejos de un baño: forman una barrera que no deja pasar el agua. | Epithelial cells stick together like bathroom tiles: they form a barrier that keeps water from passing through.',
        'Las glándulas son como pequeñas fábricas dentro de tu cuerpo que producen sustancias útiles. | Glands are like tiny factories inside your body producing useful substances.',
      ],
      examples: [
        'Tu piel es el ejemplo más grande de tejido epitelial: cubre todo tu cuerpo por fuera. | Your skin is the biggest example of epithelial tissue: it covers your entire body on the outside.',
        'El interior de tu boca está cubierto de epitelio que se regenera rápidamente cuando te muerdes la lengua. | The inside of your mouth is covered in epithelium that regenerates quickly when you bite your tongue.',
      ],
    },
    2: {
      level: 2,
      summary: 'El tejido epitelial se clasifica por forma celular (plano, cúbico, cilíndrico) y capas (simple, estratificado, pseudoestratificado), con funciones de protección, secreción, absorción y filtración. | Epithelial tissue is classified by cell shape (squamous, cuboidal, columnar) and layers (simple, stratified, pseudostratified), with functions of protection, secretion, absorption, and filtration.',
      explanation: `## Clasificación del Tejido Epitelial | Epithelial Tissue Classification

### Por forma celular | By cell shape

| Tipo | Forma | Ubicación ejemplo | Example location |
|------|-------|-------------------|------------------|
| Plano (escamoso) | Aplanada como un huevo frito | Alvéolos pulmonares | Lung alveoli |
| Cúbico | Cubo, tan alto como ancho | Túbulos renales | Kidney tubules |
| Cilíndrico (columnar) | Columna, más alto que ancho | Intestino | Intestine |

### Por número de capas | By number of layers

- **Simple** - Una sola capa de células sobre la membrana basal | Single layer of cells on the basement membrane
- **Estratificado** - Múltiples capas; se nombra por la forma de la capa superior | Multiple layers; named by shape of the top layer
- **Pseudoestratificado** - Parece tener varias capas pero todas las células tocan la membrana basal | Appears to have multiple layers but all cells touch the basement membrane

### Tipos principales y ubicaciones | Main types and locations

**1. Epitelio plano simple | Simple squamous epithelium**
- Ubicación: Alvéolos, endotelio vascular, mesotelio | Location: Alveoli, vascular endothelium, mesothelium
- Función: Difusión, filtración, reducción de fricción | Function: Diffusion, filtration, friction reduction

**2. Epitelio cúbico simple | Simple cuboidal epithelium**
- Ubicación: Túbulos renales, conductos glandulares, superficie del ovario | Location: Kidney tubules, gland ducts, ovary surface
- Función: Secreción, absorción | Function: Secretion, absorption

**3. Epitelio cilíndrico simple | Simple columnar epithelium**
- Ubicación: Intestino delgado, estómago, vesícula biliar | Location: Small intestine, stomach, gallbladder
- Función: Absorción, secreción de moco | Function: Absorption, mucus secretion

**4. Epitelio pseudoestratificado cilíndrico ciliado | Pseudostratified ciliated columnar epithelium**
- Ubicación: Tráquea, bronquios | Location: Trachea, bronchi
- Función: Secreción de moco, movimiento de partículas atrapadas | Function: Mucus secretion, movement of trapped particles

**5. Epitelio plano estratificado | Stratified squamous epithelium**
- Queratinizado: Piel (epidermis) | Keratinized: Skin (epidermis)
- No queratinizado: Boca, esófago, vagina | Non-keratinized: Mouth, esophagus, vagina
- Función: Protección contra abrasión | Function: Protection against abrasion

**6. Epitelio de transición (urotelio) | Transitional epithelium (urothelium)**
- Ubicación: Vejiga, uréteres | Location: Bladder, ureters
- Función: Se estira sin romperse | Function: Stretches without breaking

### Características clave | Key characteristics
- **Avascular**: No tiene vasos sanguíneos propios; se nutre por difusión | No blood vessels; nourished by diffusion
- **Membrana basal**: Separa el epitelio del tejido conectivo | Separates epithelium from connective tissue
- **Alta capacidad de regeneración**: Se renueva constantemente | High regeneration capacity; constantly renews
- **Polaridad**: Superficie apical (libre) y basal (adherida) | Polarity: Apical (free) and basal (attached) surfaces`,
      keyTerms: [
        { term: 'epitelio plano simple | simple squamous epithelium', definition: 'Una capa de células aplanadas; permite difusión rápida (alvéolos, endotelio) | Single layer of flat cells; allows rapid diffusion (alveoli, endothelium)', pronunciation: 'eh-pee-TEH-lee-oh PLAH-noh SEEM-pleh' },
        { term: 'epitelio estratificado | stratified epithelium', definition: 'Múltiples capas celulares para protección contra abrasión mecánica | Multiple cell layers for protection against mechanical abrasion' },
        { term: 'pseudoestratificado | pseudostratified', definition: 'Parece tener capas pero todas las células tocan la membrana basal; típico de vías respiratorias | Appears layered but all cells touch basement membrane; typical of airways' },
        { term: 'epitelio de transición | transitional epithelium', definition: 'Tipo especial que se estira; reviste las vías urinarias | Special type that stretches; lines urinary tract' },
        { term: 'queratinizado | keratinized', definition: 'Con capa de queratina (proteína protectora) en la superficie, como la piel | With keratin (protective protein) layer on surface, like skin' },
        { term: 'cilios | cilia', definition: 'Proyecciones móviles de la superficie celular que mueven moco y partículas | Mobile cell surface projections that move mucus and particles' },
      ],
      analogies: [
        'El epitelio pseudoestratificado es como un grupo de personas de diferente estatura paradas en fila: todas tocan el piso (membrana basal) pero no todas llegan al techo (superficie). | Pseudostratified epithelium is like people of different heights standing in a row: all touch the floor (basement membrane) but not all reach the ceiling (surface).',
        'El urotelio es como un globo que puede inflarse y desinflarse sin romperse. | Urothelium is like a balloon that can inflate and deflate without breaking.',
      ],
      examples: [
        'Los alvéolos pulmonares usan epitelio plano simple porque necesitan que el oxígeno pase rápidamente a la sangre. | Lung alveoli use simple squamous epithelium because they need oxygen to pass quickly into the blood.',
        'La piel usa epitelio estratificado queratinizado porque necesita resistir la fricción y el contacto constante. | Skin uses keratinized stratified epithelium because it needs to resist friction and constant contact.',
      ],
    },
    3: {
      level: 3,
      summary: 'El tejido epitelial presenta especializaciones apicales (cilios, microvellosidades, estereocilios), uniones celulares (estrechas, adherentes, desmosomas, hendidura), y una membrana basal con lámina basal y lámina reticular, fundamentales para su función de barrera y transporte. | Epithelial tissue features apical specializations (cilia, microvilli, stereocilia), cell junctions (tight, adherens, desmosomes, gap), and a basement membrane with basal lamina and reticular lamina, fundamental for barrier and transport functions.',
      explanation: `## Histología Epitelial Detallada | Detailed Epithelial Histology

### Especializaciones de Superficie | Surface Specializations

**Superficie Apical | Apical Surface:**

1. **Microvellosidades | Microvilli**
   - Proyecciones digitiformes de 1-2 μm con centro de actina | Finger-like projections of 1-2 μm with actin core
   - Aumentan la superficie de absorción hasta 20 veces | Increase absorptive surface area up to 20-fold
   - "Borde en cepillo" visible en microscopía óptica | "Brush border" visible by light microscopy
   - Abundantes en intestino delgado y túbulo proximal renal | Abundant in small intestine and renal proximal tubule

2. **Cilios | Cilia**
   - Proyecciones móviles de 5-10 μm con axonema 9+2 | Motile projections of 5-10 μm with 9+2 axoneme
   - Pares de microtúbulos periféricos + par central | Peripheral microtubule doublets + central pair
   - Proteína motora: dineína | Motor protein: dynein
   - Movimiento coordinado metacrónico para transporte de moco | Coordinated metachronal motion for mucus transport

3. **Estereocilios | Stereocilia**
   - Microvellosidades largas e inmóviles (no son verdaderos cilios) | Long, immotile microvilli (not true cilia)
   - Ubicación: Epidídimo, conducto deferente, células ciliadas del oído interno | Location: Epididymis, ductus deferens, inner ear hair cells

### Uniones Celulares | Cell Junctions

**Complejo de Unión | Junctional Complex** (de apical a basal):

1. **Uniones estrechas (zonula occludens) | Tight junctions**
   - Proteínas: claudinas, ocludina, JAM | Proteins: claudins, occludin, JAM
   - Función: Barrera paracelular, polaridad celular | Function: Paracellular barrier, cell polarity
   - Permeabilidad variable según el tejido | Variable permeability depending on tissue

2. **Uniones adherentes (zonula adherens) | Adherens junctions**
   - Proteína transmembrana: cadherina-E | Transmembrane protein: E-cadherin
   - Unión a actina del citoesqueleto mediante cateninas | Links to actin cytoskeleton via catenins
   - Función: Adhesión célula-célula, señalización | Function: Cell-cell adhesion, signaling

3. **Desmosomas (macula adherens) | Desmosomes**
   - Proteínas: desmogleína, desmocolina | Proteins: desmoglein, desmocollin
   - Unión a filamentos intermedios (queratina en epitelios) | Links to intermediate filaments (keratin in epithelia)
   - Función: Resistencia mecánica | Function: Mechanical strength

4. **Uniones de hendidura (nexos) | Gap junctions**
   - Proteínas: conexinas forman conexones | Proteins: connexins form connexons
   - Canales intercelulares para iones y moléculas pequeñas | Intercellular channels for ions and small molecules
   - Función: Comunicación eléctrica y metabólica | Function: Electrical and metabolic communication

### Membrana Basal | Basement Membrane

**Lámina basal | Basal lamina** (producida por el epitelio):
- Lámina lúcida: Laminina, integrinas | Lamina lucida: Laminin, integrins
- Lámina densa: Colágeno tipo IV, proteoglucanos | Lamina densa: Type IV collagen, proteoglycans

**Lámina reticular | Reticular lamina** (producida por tejido conectivo):
- Fibras reticulares (colágeno tipo III) | Reticular fibers (type III collagen)

### Glándulas Epiteliales | Epithelial Glands

**Clasificación | Classification:**

| Criterio | Tipos | Types |
|----------|-------|-------|
| Destino de secreción | Exocrina / Endocrina | Exocrine / Endocrine |
| Número de células | Unicelular / Multicelular | Unicellular / Multicellular |
| Forma del conducto | Simple / Compuesta | Simple / Compound |
| Forma de la porción secretora | Tubular / Acinar / Tubuloácinar | Tubular / Acinar / Tubuloacinar |
| Mecanismo de secreción | Merocrina / Apocrina / Holocrina | Merocrine / Apocrine / Holocrine |

**Mecanismos de secreción | Secretion mechanisms:**
- **Merocrina (ecrina)**: Exocitosis; no se pierde citoplasma (ej. glándulas salivales) | Exocytosis; no cytoplasm lost (e.g., salivary glands)
- **Apocrina**: Se libera la porción apical con el producto (ej. glándula mamaria lipídica) | Apical portion released with product (e.g., lipid in mammary gland)
- **Holocrina**: Toda la célula se desintegra (ej. glándula sebácea) | Entire cell disintegrates (e.g., sebaceous gland)`,
      keyTerms: [
        { term: 'axonema 9+2 | 9+2 axoneme', definition: 'Estructura del cilio: 9 dobletes de microtúbulos periféricos + 2 microtúbulos centrales | Cilium structure: 9 peripheral microtubule doublets + 2 central microtubules', pronunciation: 'ak-soh-NEH-mah' },
        { term: 'zonula occludens | tight junction', definition: 'Unión intercelular más apical que forma barrera impermeable; usa claudinas y ocludina | Most apical cell junction forming impermeable barrier; uses claudins and occludin' },
        { term: 'desmosoma | desmosome', definition: 'Unión celular tipo "botón" que resiste fuerzas de tracción mediante filamentos intermedios | Button-like cell junction resisting tensile forces via intermediate filaments' },
        { term: 'laminina | laminin', definition: 'Glucoproteína principal de la lámina basal que ancla las células epiteliales | Main glycoprotein of the basal lamina anchoring epithelial cells' },
        { term: 'colágeno tipo IV | type IV collagen', definition: 'Colágeno formador de redes en la lámina densa de la membrana basal | Network-forming collagen in the lamina densa of the basement membrane' },
        { term: 'secreción merocrina | merocrine secretion', definition: 'Secreción por exocitosis sin pérdida de citoplasma; mecanismo más común | Secretion by exocytosis without cytoplasm loss; most common mechanism' },
        { term: 'secreción holocrina | holocrine secretion', definition: 'La célula se destruye completamente al liberar su producto; glándulas sebáceas | Cell completely destroyed upon product release; sebaceous glands' },
      ],
      clinicalNotes: 'Las mutaciones en conexina 26 (GJB2) causan la forma más común de sordera hereditaria no sindrómica. Los defectos en la dineína ciliar causan discinesia ciliar primaria (síndrome de Kartagener con situs inversus). Las mutaciones en desmogleína causan pénfigo vulgar, una enfermedad ampollosa autoinmune. | Connexin 26 (GJB2) mutations cause the most common form of nonsyndromic hereditary deafness. Ciliary dynein defects cause primary ciliary dyskinesia (Kartagener syndrome with situs inversus). Desmoglein mutations cause pemphigus vulgaris, an autoimmune blistering disease.',
    },
    4: {
      level: 4,
      summary: 'La biología epitelial integra mecanismos moleculares de polaridad (Crumbs, PAR, Scribble), señalización mediada por uniones, recambio celular por células madre, y transición epitelio-mesenquimal (EMT) relevante en desarrollo embrionario y metástasis tumoral. | Epithelial biology integrates molecular polarity mechanisms (Crumbs, PAR, Scribble), junction-mediated signaling, stem cell-driven turnover, and epithelial-mesenchymal transition (EMT) relevant in embryonic development and tumor metastasis.',
      explanation: `## Biología Molecular del Epitelio | Molecular Epithelial Biology

### Polaridad Epitelial | Epithelial Polarity

La polaridad apicobasal es fundamental para la función epitelial y está regulada por tres complejos proteicos conservados: | Apicobasal polarity is fundamental to epithelial function and regulated by three conserved protein complexes:

**Complejos de polaridad | Polarity complexes:**

1. **Complejo Crumbs** (dominio apical | apical domain)
   - Crumbs3, PALS1, PATJ
   - Define la identidad de la membrana apical | Defines apical membrane identity
   - Interactúa con las uniones estrechas | Interacts with tight junctions

2. **Complejo PAR** (uniones estrechas | tight junctions)
   - PAR3, PAR6, aPKC
   - Establece la frontera apical-lateral | Establishes apical-lateral boundary
   - aPKC fosforila y excluye proteínas basolaterales | aPKC phosphorylates and excludes basolateral proteins

3. **Complejo Scribble** (dominio basolateral | basolateral domain)
   - Scribble, Dlg, Lgl
   - Define la identidad basolateral | Defines basolateral identity
   - Función supresora tumoral | Tumor suppressor function

### Señalización en Uniones | Junction Signaling

**Uniones estrechas como plataformas de señalización | Tight junctions as signaling platforms:**
- ZO-1, ZO-2, ZO-3: Proteínas adaptadoras que conectan con el citoesqueleto y factores transcripcionales | Adaptor proteins linking cytoskeleton and transcription factors
- Regulación de la proliferación por contacto celular | Contact-dependent proliferation regulation
- Translocación nuclear de ZO-1 en células proliferativas | Nuclear translocation of ZO-1 in proliferative cells

**E-cadherina y señalización Wnt | E-cadherin and Wnt signaling:**
- E-cadherina secuestra β-catenina en la membrana | E-cadherin sequesters β-catenin at the membrane
- Pérdida de E-cadherina → β-catenina libre → activación de Wnt/β-catenina → proliferación | Loss of E-cadherin → free β-catenin → Wnt/β-catenin activation → proliferation
- Relevancia oncológica: La pérdida de E-cadherina (gen CDH1) es un evento central en carcinomas invasivos | Oncologic relevance: E-cadherin loss (CDH1 gene) is a central event in invasive carcinomas

### Recambio Celular y Células Madre | Cell Turnover and Stem Cells

**Epitelio intestinal como modelo | Intestinal epithelium as model:**
- Recambio completo cada 3-5 días | Complete turnover every 3-5 days
- Células madre Lgr5+ en la base de las criptas | Lgr5+ stem cells at crypt base
- Gradiente de diferenciación: cripta → vellosidad | Differentiation gradient: crypt → villus
- Señalización Wnt (base de cripta), BMP (vellosidad), Notch (destino celular) | Wnt signaling (crypt base), BMP (villus), Notch (cell fate)

**Células madre epidérmicas | Epidermal stem cells:**
- Células madre de la protuberancia del folículo piloso | Bulge stem cells of hair follicle
- Células madre basales interfoliculares | Interfollicular basal stem cells
- Vía de señalización Hedgehog, Wnt, Notch | Hedgehog, Wnt, Notch signaling pathways

### Transición Epitelio-Mesenquimal (EMT) | Epithelial-Mesenchymal Transition

**Proceso | Process:**
1. Pérdida de polaridad apicobasal | Loss of apicobasal polarity
2. Desensamblaje de uniones celulares | Disassembly of cell junctions
3. Regulación negativa de E-cadherina | Downregulation of E-cadherin
4. Expresión de N-cadherina ("switch de cadherinas") | N-cadherin expression ("cadherin switch")
5. Reorganización del citoesqueleto (actina → vimentina) | Cytoskeletal reorganization (actin → vimentin)
6. Adquisición de capacidad migratoria e invasiva | Acquisition of migratory and invasive capacity

**Factores de transcripción EMT | EMT transcription factors:**
- Snail (SNAI1), Slug (SNAI2)
- Twist1, Twist2
- ZEB1, ZEB2
- Reprimen E-cadherina, activan genes mesenquimales | Repress E-cadherin, activate mesenchymal genes

**Contextos de EMT | EMT contexts:**
- **Tipo 1**: Embriogénesis (gastrulación, cresta neural) | Embryogenesis (gastrulation, neural crest)
- **Tipo 2**: Reparación de heridas, fibrosis | Wound healing, fibrosis
- **Tipo 3**: Invasión y metástasis tumoral | Tumor invasion and metastasis

### Transporte Epitelial | Epithelial Transport

**Transporte transcelular vs. paracelular | Transcellular vs. paracellular transport:**

- **Transcelular**: A través de la célula; regulado por transportadores/canales apicales y basolaterales | Through the cell; regulated by apical and basolateral transporters/channels
  - Na+/K+-ATPasa basolateral: Crea gradiente electroquímico | Creates electrochemical gradient
  - Canales/cotransportadores apicales: ENaC (riñón), SGLT1 (intestino) | Apical channels/cotransporters

- **Paracelular**: Entre las células; regulado por selectividad de uniones estrechas | Between cells; regulated by tight junction selectivity
  - Claudinas "poro" vs. claudinas "barrera" | "Pore" claudins vs. "barrier" claudins
  - Claudina-2: Permeable a cationes (intestino proximal) | Cation permeable (proximal intestine)
  - Claudina-4: Barrera a cationes (colon distal) | Cation barrier (distal colon)`,
      keyTerms: [
        { term: 'complejo PAR | PAR complex', definition: 'Complejo de polaridad apical (PAR3/PAR6/aPKC) que establece la frontera apicolateral en epitelios | Apical polarity complex (PAR3/PAR6/aPKC) establishing the apicolateral boundary in epithelia' },
        { term: 'EMT | epithelial-mesenchymal transition', definition: 'Proceso por el cual células epiteliales adquieren fenotipo mesenquimal migratorio; clave en embriogénesis y metástasis | Process by which epithelial cells acquire migratory mesenchymal phenotype; key in embryogenesis and metastasis' },
        { term: 'Lgr5', definition: 'Marcador de células madre intestinales en la base de las criptas; receptor de R-espondina que amplifica señalización Wnt | Intestinal stem cell marker at crypt base; R-spondin receptor amplifying Wnt signaling' },
        { term: 'switch de cadherinas | cadherin switch', definition: 'Cambio de E-cadherina a N-cadherina durante EMT que permite migración celular | Switch from E-cadherin to N-cadherin during EMT enabling cell migration' },
        { term: 'β-catenina | β-catenin', definition: 'Proteína dual: componente estructural de uniones adherentes y efector de la vía Wnt; su acumulación nuclear promueve proliferación | Dual protein: structural component of adherens junctions and Wnt pathway effector; nuclear accumulation promotes proliferation' },
        { term: 'Na+/K+-ATPasa', definition: 'Bomba basolateral que establece el gradiente electroquímico fundamental para el transporte epitelial | Basolateral pump establishing the fundamental electrochemical gradient for epithelial transport' },
      ],
      clinicalNotes: 'La pérdida de CDH1 (E-cadherina) por mutación germinal causa el síndrome de cáncer gástrico difuso hereditario (síndrome de CDH1). La activación aberrante de la vía Wnt/β-catenina por mutaciones en APC es el evento iniciador en la poliposis adenomatosa familiar y la mayoría de los cánceres colorrectales esporádicos. Los inhibidores de EMT son blancos terapéuticos emergentes contra la metástasis. | Germline CDH1 (E-cadherin) loss causes hereditary diffuse gastric cancer syndrome. Aberrant Wnt/β-catenin pathway activation by APC mutations is the initiating event in familial adenomatous polyposis and most sporadic colorectal cancers. EMT inhibitors are emerging therapeutic targets against metastasis.',
    },
    5: {
      level: 5,
      summary: 'La histopatología epitelial avanzada abarca la clasificación molecular de carcinomas, biomarcadores pronósticos, displasia como precursor neoplásico, e innovaciones en patología digital y organoides epiteliales para medicina de precisión. | Advanced epithelial histopathology encompasses molecular carcinoma classification, prognostic biomarkers, dysplasia as neoplastic precursor, and innovations in digital pathology and epithelial organoids for precision medicine.',
      explanation: `## Histopatología y Correlaciones Clínicas Avanzadas | Advanced Histopathology and Clinical Correlations

### Neoplasias Epiteliales: Clasificación Histopatológica | Epithelial Neoplasms: Histopathological Classification

**Progresión neoplásica epitelial | Epithelial neoplastic progression:**
Normal → Hiperplasia → Metaplasia → Displasia (NIC/NIM) → Carcinoma in situ → Carcinoma invasor

**Displasia y neoplasia intraepitelial | Dysplasia and intraepithelial neoplasia:**
- Displasia cervical (NIC 1-3): Infección por VPH de alto riesgo (16, 18) | Cervical dysplasia (CIN 1-3): High-risk HPV infection (16, 18)
- p16INK4a: Biomarcador sustituto de infección por VPH oncogénico | Surrogate biomarker for oncogenic HPV infection
- Ki-67: Índice proliferativo; patrón de expresión distingue grados de displasia | Proliferative index; expression pattern distinguishes dysplasia grades
- Esófago de Barrett: Metaplasia intestinal → displasia → adenocarcinoma esofágico | Barrett esophagus: Intestinal metaplasia → dysplasia → esophageal adenocarcinoma

**Carcinomas: Clasificación principal | Carcinomas: Main classification:**

| Tipo | Origen | Características | Marcadores IHQ |
|------|--------|----------------|----------------|
| Carcinoma escamoso | Epitelio plano estratificado | Perlas córneas, puentes intercelulares | p63, p40, CK5/6 |
| Adenocarcinoma | Epitelio glandular | Formación de glándulas, mucina | CK7, CK20, CDX2, TTF-1 |
| Carcinoma de células transicionales | Urotelio | Papilar, infiltrante | CK7, CK20, GATA3, uroplakin |
| Carcinoma de células pequeñas | Neuroendocrino | Células pequeñas, alta mitosis | Sinaptofisina, cromogranina |

### Inmunohistoquímica Epitelial Diagnóstica | Diagnostic Epithelial Immunohistochemistry

**Panel de citoqueratinas | Cytokeratin panel:**
- CK7+/CK20−: Pulmón, mama, ovario, endometrio, tiroides | Lung, breast, ovary, endometrium, thyroid
- CK7−/CK20+: Colon (también CDX2+) | Colon (also CDX2+)
- CK7+/CK20+: Urotelio, páncreas, estómago | Urothelium, pancreas, stomach
- CK7−/CK20−: Hepatocelular, renal, próstata | Hepatocellular, renal, prostate

**Marcadores de origen tumoral específicos | Site-specific tumor markers:**
- TTF-1: Pulmón (adenocarcinoma), tiroides | Lung (adenocarcinoma), thyroid
- CDX2: Colorrectal | Colorectal
- PAX8: Renal, tiroides, ovario (seroso), endometrio | Renal, thyroid, ovary (serous), endometrium
- GATA3: Mama, urotelio | Breast, urothelium
- NKX3.1/PSA: Próstata | Prostate

### Patología Molecular de Carcinomas Seleccionados | Molecular Pathology of Selected Carcinomas

**Cáncer de pulmón (NSCLC) | Lung cancer (NSCLC):**
- EGFR mutado: Sensible a TKIs (erlotinib, osimertinib) | EGFR mutated: Sensitive to TKIs
- ALK/ROS1 reordenado: Sensible a crizotinib, alectinib | ALK/ROS1 rearranged: Sensitive to crizotinib, alectinib
- PD-L1 (IHQ): Predictor de respuesta a inmunoterapia (pembrolizumab) | PD-L1 (IHC): Predictor of immunotherapy response

**Cáncer colorrectal | Colorectal cancer:**
- Inestabilidad microsatelital (MSI-H/dMMR): Responde a anti-PD-1 | Microsatellite instability: Responds to anti-PD-1
- Mutaciones KRAS/NRAS: Resistencia a anti-EGFR (cetuximab) | KRAS/NRAS mutations: Resistance to anti-EGFR
- Secuenciación del panel molecular es estándar de cuidado | Molecular panel sequencing is standard of care

### Tecnologías Emergentes en Histología Epitelial | Emerging Technologies in Epithelial Histology

**Organoides epiteliales | Epithelial organoids:**
- Cultivos 3D derivados de células madre Lgr5+ | 3D cultures derived from Lgr5+ stem cells
- Recapitulan arquitectura y funciones epiteliales in vitro | Recapitulate epithelial architecture and functions in vitro
- Aplicaciones: Pruebas de fármacos personalizadas, modelado de enfermedades, medicina regenerativa | Applications: Personalized drug testing, disease modeling, regenerative medicine
- Organoides tumorales: "Avatares del tumor" para selección terapéutica | Tumor organoids: "Tumor avatars" for therapeutic selection

**Patología digital e inteligencia artificial | Digital pathology and artificial intelligence:**
- Whole slide imaging (WSI) para teleconsulta y cuantificación | For teleconsultation and quantification
- Algoritmos de deep learning para detección de metástasis (sensibilidad >99%) | Deep learning algorithms for metastasis detection (sensitivity >99%)
- Cuantificación automatizada de PD-L1, Ki-67 | Automated PD-L1, Ki-67 quantification
- Predicción molecular a partir de H&E (mutaciones, MSI) | Molecular prediction from H&E (mutations, MSI)

**Transcriptómica espacial | Spatial transcriptomics:**
- Visium, MERFISH, CosMx: Análisis de expresión génica in situ | In situ gene expression analysis
- Caracterización del microambiente tumoral a resolución celular | Tumor microenvironment characterization at cellular resolution
- Integración con datos de single-cell RNA-seq | Integration with single-cell RNA-seq data`,
      keyTerms: [
        { term: 'citoqueratinas | cytokeratins', definition: 'Filamentos intermedios epiteliales (>20 subtipos); su patrón de expresión CK7/CK20 es clave para determinar el origen de carcinomas metastásicos | Epithelial intermediate filaments (>20 subtypes); CK7/CK20 expression pattern is key for determining origin of metastatic carcinomas' },
        { term: 'p16INK4a', definition: 'Inhibidor de CDK que se sobreexpresa paradójicamente en displasia cervical asociada a VPH oncogénico; biomarcador diagnóstico esencial | CDK inhibitor paradoxically overexpressed in HPV-associated cervical dysplasia; essential diagnostic biomarker' },
        { term: 'organoides | organoids', definition: 'Cultivos tridimensionales autoorganizados derivados de células madre que recapitulan la arquitectura tisular; revolución en medicina de precisión | Self-organizing 3D cultures from stem cells recapitulating tissue architecture; revolution in precision medicine' },
        { term: 'PD-L1', definition: 'Ligando de muerte programada 1; su expresión en la superficie tumoral predice respuesta a inmunoterapia con anti-PD-1/PD-L1 | Programmed death-ligand 1; tumor surface expression predicts response to anti-PD-1/PD-L1 immunotherapy' },
        { term: 'inestabilidad microsatelital | microsatellite instability', definition: 'MSI-H/dMMR indica defectos en la reparación del ADN; predictor de respuesta a inmunoterapia anti-PD-1 en múltiples tipos tumorales | MSI-H/dMMR indicates DNA repair defects; predictor of anti-PD-1 immunotherapy response across tumor types' },
        { term: 'transcriptómica espacial | spatial transcriptomics', definition: 'Tecnologías que mapean la expresión génica manteniendo la información posicional del tejido; integran histología con genómica | Technologies mapping gene expression while preserving tissue positional information; integrate histology with genomics' },
      ],
      clinicalNotes: `Correlaciones histopatológicas clínicas avanzadas | Advanced clinical histopathological correlations:

1. **Diagnóstico de carcinoma de origen desconocido**: El panel IHQ de citoqueratinas (CK7/CK20) combinado con marcadores específicos de órgano (TTF-1, CDX2, PAX8, GATA3) identifica el sitio primario en >80% de los casos. | CUP diagnosis: CK7/CK20 panel + organ-specific markers identifies primary site in >80% of cases.

2. **Selección terapéutica molecular**: La determinación de EGFR, ALK, ROS1, KRAS, BRAF, MSI y PD-L1 es estándar de cuidado antes de iniciar tratamiento en NSCLC y CCR. | Molecular therapeutic selection: EGFR, ALK, ROS1, KRAS, BRAF, MSI, PD-L1 testing is standard of care before treatment in NSCLC and CRC.

3. **Biopsia líquida**: ctDNA complementa la histopatología para monitoreo de resistencia y recurrencia tumoral sin necesidad de rebiopsia tisular. | Liquid biopsy: ctDNA complements histopathology for resistance and recurrence monitoring without tissue rebiopsy.

4. **Patología computacional**: Los algoritmos de IA aplicados a laminillas digitalizadas alcanzan rendimiento diagnóstico comparable al de patólogos expertos y pueden predecir mutaciones genéticas a partir de morfología en H&E. | Computational pathology: AI algorithms on digital slides achieve diagnostic performance comparable to expert pathologists and can predict genetic mutations from H&E morphology.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'ross-histology',
      type: 'textbook',
      title: 'Ross Histología: Texto y Atlas',
      authors: ['Pawlina W', 'Ross MH'],
      source: 'Wolters Kluwer',
      chapter: 'Tejido Epitelial',
    },
    {
      id: 'junqueira-histologia',
      type: 'textbook',
      title: 'Histología Básica: Texto y Atlas',
      authors: ['Junqueira LC', 'Carneiro J', 'Abrahamsohn P'],
      source: 'McGraw-Hill',
      chapter: 'Epitelio de Revestimiento',
    },
    {
      id: 'robbins-pathology',
      type: 'textbook',
      title: 'Robbins & Cotran Patología Estructural y Funcional',
      authors: ['Kumar V', 'Abbas AK', 'Aster JC'],
      source: 'Elsevier',
      chapter: 'Neoplasia',
    },
    {
      id: 'who-classification-tumours',
      type: 'guideline',
      title: 'WHO Classification of Tumours, 5th Edition',
      source: 'World Health Organization / IARC',
    },
  ],

  crossReferences: [
    { targetId: 'histology-tejido-conectivo', targetType: 'topic', relationship: 'sibling', label: 'Tejido Conectivo | Connective Tissue' },
    { targetId: 'histology-tejido-muscular', targetType: 'topic', relationship: 'sibling', label: 'Tejido Muscular | Muscle Tissue' },
    { targetId: 'histology-tejido-nervioso', targetType: 'topic', relationship: 'sibling', label: 'Tejido Nervioso | Nervous Tissue' },
    { targetId: 'system-integumentary', targetType: 'system', relationship: 'related', label: 'Sistema Tegumentario | Integumentary System' },
    { targetId: 'system-digestive', targetType: 'system', relationship: 'related', label: 'Sistema Digestivo | Digestive System' },
    { targetId: 'condition-carcinoma', targetType: 'condition', relationship: 'see-also', label: 'Carcinomas' },
  ],

  tags: {
    systems: ['integumentary', 'digestive', 'respiratory', 'urinary'],
    topics: ['histology', 'epithelial tissue', 'cell biology', 'pathology'],
    keywords: ['epitelio', 'epithelium', 'uniones celulares', 'cell junctions', 'membrana basal', 'basement membrane', 'glándulas', 'glands', 'queratina', 'keratin', 'carcinoma', 'displasia', 'EMT'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pathology', 'medicine'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default tejidoEpitelialContent;
