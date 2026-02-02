/**
 * Visual System Anatomy - Comprehensive Educational Content
 *
 * Detailed anatomical coverage of the eye and visual pathways including
 * ocular structures, orbital anatomy, extraocular muscles, and visual
 * pathway connections to the brain.
 */

import { EducationalContent } from '../../types';

export const visualSystemAnatomy: EducationalContent = {
  id: 'anatomy-visual-system',
  type: 'system',
  name: 'Visual System Anatomy',
  nameEs: 'Anatomia del Sistema Visual',
  alternateNames: ['Eye Anatomy', 'Ocular Anatomy', 'Vision System', 'Anatomia Ocular'],
  fmaId: 'FMA:58301',

  levels: {
    1: {
      level: 1,
      summary: 'The visual system includes your eyes and the pathways to your brain that let you see the world around you.',
      explanation: `## Your Eyes: Windows to the World

Your eyes are like tiny cameras that capture light and send pictures to your brain. Each eye is about the size of a ping-pong ball and works together with your brain to create the images you see.

### Parts of Your Eye

**The Clear Front Window:**
- **Cornea (KOR-nee-uh):** The clear dome at the front of your eye
  - Like the glass on a watch face
  - Helps focus light coming into your eye
  - Has no blood vessels - gets oxygen from tears

**The Colored Part:**
- **Iris:** The colored part of your eye (blue, brown, green, hazel)
  - Has a hole in the middle called the pupil
  - Gets bigger or smaller to control how much light enters
  - Like the aperture on a camera

**The Black Center:**
- **Pupil:** The black circle in the middle of your iris
  - Gets smaller in bright light (to protect your eye)
  - Gets bigger in dim light (to let in more light)
  - Works automatically - you cannot control it!

**The Lens:**
- **Lens:** Clear structure behind the iris
  - Like the lens in glasses or a camera
  - Changes shape to help you see things up close or far away
  - Held in place by tiny threads called zonules

**The Gelatinous Filling:**
- **Vitreous Humor:** Clear jelly filling the back of your eye
  - Helps your eye keep its round shape
  - 99% water with special proteins
  - Gives support to the retina

**The Light-Sensing Layer:**
- **Retina:** The back wall of your eye where images form
  - Like the film in a camera or sensor in a digital camera
  - Contains millions of tiny cells called photoreceptors
  - Converts light into electrical signals

**Two Types of Photoreceptors:**
1. **Rods:** Work in dim light, help you see in black and white
2. **Cones:** Work in bright light, help you see colors (red, green, blue)

**The Optic Nerve:**
- **Optic Nerve:** The "cable" that carries messages to your brain
  - About 1 million tiny fibers bundled together
  - Exits the back of your eye
  - Carries information to the vision center in your brain

**Protective Structures:**
- **Sclera:** The tough white outer coat of your eye
  - Like the white of a hard-boiled egg
  - Protects the delicate parts inside
- **Conjunctiva:** Clear membrane covering the sclera and inside of eyelids
  - Keeps your eye moist and protected

### How Your Eyes Work Together

**Both Eyes Team Up:**
- Each eye sees a slightly different view
- Your brain combines both views into one 3D image
- This helps you judge distances (depth perception)

**Eye Movements:**
- Six small muscles move each eye
- They work together so both eyes point in the same direction
- When you look left, both eyes move left together

### Fun Facts About Your Eyes

- Your eyes focus on 50+ different objects every second
- You blink about 15-20 times per minute
- Your eyes can distinguish about 10 million different colors
- Each eyelash lasts about 5 months before falling out
- Your eyes are always the same size from birth (unlike your nose and ears!)

### Spanish Words (Palabras en Espanol)
- Eye = Ojo
- Cornea = Cornea
- Iris = Iris
- Pupil = Pupila
- Lens = Cristalino
- Retina = Retina
- Optic Nerve = Nervio Optico
- Eyelid = Parpado`,
      keyTerms: [
        {
          term: 'cornea',
          definition: 'The clear dome-shaped surface at the front of the eye that helps focus light',
          pronunciation: 'KOR-nee-uh'
        },
        {
          term: 'iris',
          definition: 'The colored part of the eye that controls the size of the pupil',
          pronunciation: 'EYE-ris'
        },
        {
          term: 'pupil',
          definition: 'The black opening in the center of the iris that lets light into the eye'
        },
        {
          term: 'retina',
          definition: 'The light-sensitive layer at the back of the eye that converts light into signals',
          pronunciation: 'RET-in-uh'
        },
        {
          term: 'optic nerve',
          definition: 'The nerve that carries visual information from the eye to the brain'
        }
      ],
      analogies: [
        'Your eye is like a camera - the cornea and lens focus light, and the retina captures the image like film.',
        'The iris works like the aperture on a camera, opening and closing to control light.',
        'The optic nerve is like an HDMI cable, carrying picture signals from your eye to your brain.',
        'Your eyelids are like windshield wipers, keeping your eyes clean and moist.'
      ],
      examples: [
        'When you go from bright sunlight into a dark room, your pupils get bigger to let in more light.',
        'Reading a book uses your lens to focus on close objects, while looking at distant mountains relaxes the lens.',
        'Colorblindness happens when some of your cone cells do not work properly.'
      ],
      patientCounselingPoints: [
        'Never look directly at the sun - it can damage your retina permanently.',
        'Eating carrots and leafy greens helps keep your eyes healthy.',
        'If you get something in your eye, blink several times or rinse with clean water - do not rub.',
        'Regular eye checkups help catch problems early, even if you think you see fine.'
      ]
    },
    2: {
      level: 2,
      summary: 'The visual system consists of the eyeball with its refractive components, intraocular structures, photoreceptor layer, and the optic pathway connecting to the visual cortex.',
      explanation: `## Visual System Anatomy

### The Eyeball (Bulbus Oculi)

**General Structure:**
- Approximate spherical shape, 24mm diameter
- Three concentric layers (tunics): fibrous, vascular, neural
- Two main segments: anterior and posterior
- Volume: approximately 6.5 mL

### Fibrous Tunic (Outer Layer)

**Sclera:**
- Tough, opaque white covering (5/6 of outer coat)
- Thickness: 1mm at muscle attachments, 0.3mm at insertions
- Composed of collagen and elastic fibers
- Protects intraocular contents and maintains shape
- Site of extraocular muscle attachment

**Cornea:**
- Transparent, avascular, 1/6 of outer coat
- Diameter: 11-12mm horizontal, 10-11mm vertical
- Thickness: 0.5mm center, 0.7mm periphery
- Five layers: epithelium, Bowman layer, stroma, Descemet membrane, endothelium
- Refractive power: +43 diopters (2/3 of eye's focusing power)
- Transparency maintained by precise collagen arrangement and dehydration

### Vascular Tunic (Uvea - Middle Layer)

**Choroid:**
- Highly vascular layer between sclera and retina
- Thickness: 0.1-0.22mm
- Functions: blood supply to outer retina, thermoregulation, light absorption
- Contains melanocytes (dark pigment to prevent light scatter)

**Ciliary Body:**
- Anterior continuation of choroid
- Two parts: pars plicata (corona ciliaris) and pars plana
- Functions: aqueous humor production and accommodation
- Contains ciliary muscle (smooth muscle for lens focusing)
- Zonular fibers attach here to suspend lens

**Iris:**
- Most anterior part of uvea
- Central opening: pupil (2-8mm diameter, varies with light)
- Two muscles: sphincter pupillae (constrictor) and dilator pupillae
- Color determined by melanin density and distribution
- Stroma contains blood vessels, nerves, and pigment cells

### Neural Tunic (Retina - Inner Layer)

**Layers (from outside in):**
1. Retinal pigment epithelium (RPE)
2. Photoreceptor layer (rods and cones)
3. External limiting membrane
4. Outer nuclear layer
5. Outer plexiform layer
6. Inner nuclear layer
7. Inner plexiform layer
8. Ganglion cell layer
9. Nerve fiber layer
10. Internal limiting membrane

**Photoreceptors:**
- **Rods:** 120 million, high sensitivity, scotopic (dim light) vision, no color
- **Cones:** 6-7 million, three types (S, M, L for blue, green, red), photopic (bright light) vision
- Fovea centralis: highest cone density (200,000/mm), no rods

**Macula Lutea:**
- 5.5mm diameter area centered on fovea
- Responsible for central, high-resolution vision
- Appears yellow due to lutein and zeaxanthin pigments
- Critical for reading, facial recognition, driving

**Optic Disc:**
- Where optic nerve exits eye (blind spot)
- 1.5mm diameter, 3-4mm nasal to fovea
- Central retinal artery and vein enter/exit here
- No photoreceptors present

### Refractive Media

**Aqueous Humor:**
- Clear fluid filling anterior and posterior chambers
- Volume: 0.25mL (produced at 2.5 microliters/minute)
- Functions: nourish avascular structures (cornea, lens, trabecular meshwork), maintain intraocular pressure
- Flow: ciliary body -> posterior chamber -> pupil -> anterior chamber -> trabecular meshwork -> Schlemm canal

**Lens:**
- Biconvex, avascular, transparent structure
- Dimensions: 9-10mm diameter, 4-5mm thick (varies with accommodation)
- Composed of lens fibers enclosed in lens capsule
- Refractive power: +15 to +29 diopters (varies with accommodation)
- Suspended by zonular fibers from ciliary body
- Becomes less flexible with age (presbyopia)

**Vitreous Humor:**
- Gelatinous substance filling posterior segment (4.0mL)
- 99% water, 1% collagen and hyaluronic acid
- Functions: maintain eye shape, support retina, optical pathway
- Attached to optic disc, ora serrata, and along vessels

### Anterior Segment Structures

**Corneoscleral Junction (Limbus):**
- 1-2mm transition zone between cornea and sclera
- Contains trabecular meshwork and Schlemm canal
- Surgical access point for intraocular procedures

**Anterior Chamber:**
- Space between cornea and iris
- Depth: 3.0-3.5mm (central)
- Volume: 0.25mL
- Angle: where cornea meets iris (drainage pathway)

**Posterior Chamber:**
- Space between iris and lens/zonules
- Volume: 0.06mL

**Trabecular Meshwork:**
- Spongy tissue at iridocorneal angle
- Site of aqueous humor drainage
- Resistance here determines intraocular pressure

### Accessory Visual Structures

**Extraocular Muscles:**
- Six muscles per eye: four rectus (superior, inferior, medial, lateral), two oblique (superior, inferior)
- Innervation: CN III (oculomotor), CN IV (trochlear), CN VI (abducens)
- Move eyes in coordinated patterns (versions and vergences)

**Eyelids (Palpebrae):**
- Upper and lower lids with tarsal plates
- Orbicularis oculi muscle (closes lid)
- Levator palpebrae superioris (opens upper lid)
- Meibomian glands (secrete oil for tear film)
- Protect eye and spread tears

**Conjunctiva:**
- Mucous membrane lining inner eyelids and sclera
- Bulbar conjunctiva: covers sclera
- Palpebral conjunctiva: lines eyelids
- Fornix: junction between bulbar and palpebral portions
- Goblet cells produce mucin for tear film

**Lacrimal Apparatus:**
- Lacrimal gland: produces aqueous portion of tears (superolateral orbit)
- Canaliculi: drain tears from puncta to lacrimal sac
- Nasolacrimal duct: drains to inferior meatus of nasal cavity
- Blinking spreads tears and pumps them through drainage system`,
      keyTerms: [
        {
          term: 'uvea',
          definition: 'The middle vascular layer of the eye including iris, ciliary body, and choroid',
          pronunciation: 'YOU-vee-uh',
          etymology: 'From Latin uva (grape), due to resemblance when peeled from sclera'
        },
        {
          term: 'trabecular meshwork',
          definition: 'Spongy tissue at the iridocorneal angle responsible for aqueous humor drainage'
        },
        {
          term: 'ora serrata',
          definition: 'The jagged anterior margin of the retina where it ends and ciliary body begins',
          etymology: 'Latin for serrated mouth'
        },
        {
          term: 'fovea centralis',
          definition: 'Central pit in the macula with highest cone density for sharpest vision',
          etymology: 'Latin for central pit'
        },
        {
          term: 'accommodation',
          definition: 'Process of changing lens shape to focus on near objects'
        }
      ],
      analogies: [
        'The retina is like the sensor in a digital camera, converting light into electrical signals.',
        'The ciliary muscle and zonules work like the autofocus mechanism on a camera.',
        'The aqueous humor drainage system is like a sink drain - blockage causes pressure buildup (glaucoma).',
        'The cornea is like a watch crystal - clear, protective, and provides initial focusing power.'
      ],
      examples: [
        'Cataracts occur when the normally clear lens becomes cloudy, like looking through a frosted window.',
        'Glaucoma results from increased pressure due to impaired aqueous humor drainage through the trabecular meshwork.',
        'Macular degeneration affects the fovea, causing loss of central vision while peripheral vision remains.',
        'The blind spot (optic disc) can be demonstrated where the optic nerve exits without photoreceptors.'
      ]
    },
    3: {
      level: 3,
      summary: 'El sistema visual comprende el globo ocular de tres capas (tunicas), medios refractivos, musculos extraoculares, aparato lagrimal, y vias opticas que transmiten informacion visual al cortex estriado.',
      explanation: `## Anatomia del Sistema Visual

### El Globo Ocular

**Dimensiones y Estructura:**
- Forma esferica aproximada: 24mm de diametro anteroposterior
- Volumen: aproximadamente 6.5 mL
- Segmentos: anterior (estructuras delante del cristalino) y posterior (detras del cristalino)
- Tres tunicas concentricas: fibrosa, vascular y neural

### Tunica Fibrosa (Externa)

**Esclerotica:**
- Cubierta opaca, dura, blanca (5/6 de la capa externa)
- Espesor variable: 1mm en inserciones musculares, 0.3mm cerca del nervio optico
- Composicion: fibras de colageno tipo I y elastica
- Funciones: proteccion, mantenimiento de la forma, punto de insercion muscular
- Lamin cribrosa: region perforada donde pasan fibras del nervio optico

**Cornea:**
- Diametro horizontal: 11-12mm; vertical: 10-11mm
- Radio de curvatura: 7.8mm (central)
- Potencia refractiva: +43 dioptrias (dos tercios del poder total del ojo)
- Cinco capas histologicas:
  1. Epitelio estratificado no queratinizado (5-6 capas)
  2. Membrana de Bowman (8-12 micrometros, colageno tipo I)
  3. Estroma (90% del grosor, colageno organizado regularmente)
  4. Membrana de Descemet (5-10 micrometros, colageno tipo IV)
  5. Endotelio (monocapa, bomba metabolica activa)
- Transparencia mantenida por: organizacion regular del colageno, deshidratacion activa, avascularidad

### Tunica Vascular (Uvea)

**Coroides:**
- Grosor: 0.1-0.22mm
- Capas: supracoroidea, vasculosa (arterias y venas), capa de los vasos capilares (nutre retina externa)
- Contiene melanocitos (pigmento absorbente de luz)
- Irrigacion: arterias ciliares posteriores cortas y largas

**Cuerpo Ciliar:**
- Region entre ora serrata y base del iris
- Pars plicata: 70 procesos ciliares (produccion de humor acuoso)
- Pars plana: 4mm de ancho, zona plana
- Musculo ciliar: musculo liso con fibras meridionales, radiales y circulares
- Zonulas (fibrosas de Zinn): suspenden el cristalino
- Potencia de acomodacion: 15 dioptrias (joven) -> 1 dioptria (50+ anos)

**Iris:**
- Diametro: 12mm
- Grosor: 0.5mm (periferia) a 0.1mm (pupila)
- Musculos: esfinter pupilar (parasimpatico) y dilatador pupilar (simpatico)
- Estroma: tejido conectivo laxo con melanocitos, vasos, nervios
- Color ocular: determinado por densidad y profundidad del melanina en epitelio pigmentario y estroma

### Retina (Tunica Neural)

**Arquitectura de Capas:**
1. Epitelio pigmentario retiniano (EPR)
2. Segmentos externos de fotorreceptores
3. Segmentos internos de fotorreceptores
4. Membrana limitante externa
5. Capa nuclear externa (conos y bastones)
6. Capa plexiforme externa
7. Capa nuclear interna (bipolares, horizontales, amacrinas)
8. Capa plexiforme interna
9. Capa de celulas ganglionares
10. Capa de fibras nerviosas
11. Membrana limitante interna

**Fotorreceptores:**
- Bastones: 120 millones, vision escotopica (luz tenue), alta sensibilidad, sin color
- Conos: 6-7 millones, vision fotopica (luz brillante), tres tipos espectrales
- Fovea: solo conos, 200,000/mm, vision de alta resolucion
- Distribucion: mayor densidad de bastones en periferia (20 grados)

**Vias Retinianas:**
- Fotorreceptores -> celulas bipolares -> celulas ganglionares
- Celulas horizontales: modulacion lateral
- Celulas amacrinas: circuitos complejos
- Fibras ganglionares: forman capa de fibras nerviosas -> nervio optico

### Medios Refractivos

**Humor Acuoso:**
- Producido por procesos ciliares (2.5 microlitros/minuto)
- Flujo: camara posterior -> pupila -> camara anterior -> malla trabecular -> canal de Schlemm -> venas esclerales
- Presion intraocular normal: 10-21 mmHg (media 15.5 mmHg)
- Composicion: similar a plasma sin proteinas grandes

**Cristalino:**
- Diametro: 9-10mm; grosor: 3.6mm (relajado), 4.0mm (acomodado)
- Capsula: 14-21 micrometros (anterior), 2-4 micrometros (posterior)
- Corteza: fibras mas nuevas
- Nucleo: fibras mas viejas
- Indice de refraccion: 1.386 (corteza), 1.406 (nucleo)

**Humor Vitreo:**
- Volumen: 4.0 mL
- Composicion: 99% agua, 1% colageno tipo II y acido hialuronico
- Estructura: cortex vitreo, tracciones vitreo-retinianas
- Zonas de adherencia: disco optico, ora serrata, vasos retinianos, fovea
- Desprendimiento vitreo posterior: separacion de la retina con la edad

### Anatomia de la Orbita

**Dimensiones:**
- Volumen: 30 mL
- Forma: piramide cuadrangular con apex posterior
- Paredes: superior (techo craneal), inferior (seno maxilar), medial (etmoides), lateral (malar/temporal)
- Huesos: frontal, maxilar, zigomatico, esfenoides, etmoides, palatino, lagrimal

**Contenido:**
- Globo ocular (6.5 mL)
- Musculos extraoculares (6)
- Nervio optico
- Nervios motores (III, IV, VI)
- Nervio oftalmico (V1)
- Ganglio ciliar
- Arteria oftalmica
- Vena oftalmica superior e inferior
- Grasa orbitaria
- Aparato lagrimal

### Musculos Extraoculares

**Musculos Rectos:**
- Origen: anillo tendinoso comun (Zinn)
- Recto superior: CN III (rama superior), elevacion, aduccion, intorsion
- Recto inferior: CN III (rama inferior), depresion, aduccion, extorsion
- Recto medial: CN III, aduccion
- Recto lateral: CN VI, abduccion

**Musculos Oblicuos:**
- Oblicuo superior: CN IV, depresion, abduccion, intorsion
  - Pasa por troclea (polea cartilaginosa en orbita medial)
- Oblicuo inferior: CN III, elevacion, abduccion, extorsion

**Inervacion:**
- CN III (oculomotor): recto superior, inferior, medial, oblicuo inferior
- CN IV (troclear): oblicuo superior
- CN VI (abducens): recto lateral

### Aparato Lagrimal

**Glandula Lagrimal:**
- Ubicacion: fosa glandular en techo orbitario lateral
- Secrecion: 1.2 mL lagrimas/dia
- Porciones: orbitaria (grande) y palpebral (pequena)
- Inervacion: secrecion parasimpatica (nervio petroso mayor)

**Drenaje Lagrimal:**
- Puntos lagrimales: 0.3mm de diametro, en papilas lagrimales
- Canaliculos: 10mm de longitud, 0.5-1.0mm de diametro
- Saco lagrimal: 12-15mm vertical, 4-8mm anteroposterior
- Conducto nasolagrimal: 18mm, desemboca en meato inferior nasal`,
      keyTerms: [
        {
          term: 'lamina cribrosa',
          definition: 'Region perforada de la esclera donde las fibras del nervio optico salen del ojo',
          etymology: 'Del latin cribrum (cedazo)'
        },
        {
          term: 'malla trabecular',
          definition: 'Tejido esponjoso en el angulo iridocorneal drenaje del humor acuoso',
          relatedTerms: ['canal de Schlemm', 'presion intraocular']
        },
        {
          term: 'ora serrata',
          definition: 'Margen anterior dentado de la retina',
          relatedTerms: ['cuerpo ciliar', 'pars plana']
        },
        {
          term: 'troclea',
          definition: 'Polea fibrocartilaginosa a traves de la cual pasa el tendon del oblicuo superior',
          etymology: 'Del griego trokhilia (polea)'
        },
        {
          term: 'epitelio pigmentario retiniano',
          definition: 'Capa unicelular entre coroides y fotorreceptores, funcion fotoreceptiva y de barrera',
          relatedTerms: ['EPR', 'fotorreceptores']
        }
      ],
      analogies: [
        'El EPR funciona como el sistema de mantenimiento de un edificio - recicla desechos y nutre a los residentes (fotorreceptores).',
        'La coroides es como el sistema HVAC del ojo - regula temperatura y suministra nutrientes.',
        'El anillo de Zinn es como una cincha que sujeta los musculos oculares en su origen.',
        'El troclea funciona como una polea simple que cambia la direccion de la fuerza muscular.'
      ],
      examples: [
        'La presion intraocular elevada en glaucoma dania las fibras nerviosas en la lamina cribrosa.',
        'Las celdillas en la malla trabecular se obstruyen con la edad, aumentando la presion ocular.',
        'El desprendimiento vitreo posterior comun en ancianos puede causar flotadores y destellos.',
        'La isquemia de la arteria central de la retina produce perdida visual repentina e indolora.'
      ]
    },
    4: {
      level: 4,
      summary: 'The visual system integrates ocular anatomy with neurophysiology, featuring specialized cellular architecture, vascular supply patterns, and complex visual pathway processing through the lateral geniculate nucleus to primary visual cortex.',
      explanation: `## Advanced Visual System Anatomy

### Cellular and Molecular Architecture

**Corneal Epithelium:**
- Stratified squamous non-keratinized epithelium, 5-6 cell layers
- Basal cells: columnar, mitotically active, anchored to basement membrane
- Wing cells: polyhedral, connected by desmosomes
- Superficial cells: squamous, shed every 7 days
- Turnover: complete in 7-14 days
- Barrier function: tight junctions between superficial cells
- Limbal stem cells: located in palisades of Vogt, regenerate entire epithelium

**Corneal Stroma:**
- 200-250 lamellae of collagen type I (diameter 25-35nm)
- Regular spacing (55-60nm) maintains transparency (destructive interference)
- Keratocytes: flattened cells between lamellae, produce collagen
- Glycosaminoglycans: keratan sulfate, chondroitin sulfate (maintain hydration)
- Avascularity maintained by: antiangiogenic factors (endostatin, thrombospondin), tight junctions in endothelium

**Retinal Pigment Epithelium (RPE):**
- Single layer of hexagonal cells (14 micrometers height, 10-14 micrometers width)
- Microvilli: envelop photoreceptor outer segments
- Tight junctions: blood-retina outer barrier
- Functions: phagocytosis of shed photoreceptor discs (100-200 daily per cell), regeneration of visual pigments, transport of nutrients/waste, absorption of scattered light
- Melanin granules: apical location, absorb stray light
- Lipofuscin: accumulates with age (aging pigment from incomplete phagocytosis)

**Photoreceptor Structure:**
- **Rods:** Outer segment (30-40 micrometers), 1000 discs, rhodopsin (500 million molecules)
- **Cones:** Outer segment (10-15 micrometers), 1000-2000 invaginations, opsins (photopsins)
- Connecting cilium: links inner and outer segments (IFT transport)
- Synaptic terminal: ribbons (sustained release), flat contacts (cones), invaginating contacts (rods)

**Retinal Circuitry:**
- Midget pathway: 1 cone -> 1 bipolar -> 1 ganglion cell (P-cells, high acuity)
- Parasol pathway: multiple photoreceptors -> diffuse bipolar -> ganglion cell (M-cells, motion)
- Bistratified pathway: blue-yellow color opponency (K-cells)
- Horizontal cells: H1 (feedback to cones), H2, H3 (rod-cone coupling)
- Amacrine cells: 30+ types, AII (rod pathway), starburst (direction selectivity)

### Vascular Anatomy

**Ophthalmic Artery (Branch of Internal Carotid):**
- Enters orbit through optic canal, inferolateral to optic nerve
- Branches:
  - Central retinal artery: enters optic nerve 10-12mm posterior to globe
  - Posterior ciliary arteries: short (choroid), long (ciliary body/iris)
  - Lacrimal artery: supplies lacrimal gland, lateral rectus, lateral eyelids
  - Muscular branches: supply extraocular muscles
  - Supraorbital and ethmoidal arteries
  - Terminal branches: supratrochlear, dorsal nasal

**Central Retinal Artery:**
- First branch of ophthalmic artery in 40% of cases
- Enters dural sheath of optic nerve inferomedially
- Runs within optic nerve substance to optic disc
- Divides into four branches: superior temporal, inferior temporal, superior nasal, inferior nasal
- Supplies inner retina (nerve fiber layer to inner nuclear layer)
- End arteries (no anastomoses) - occlusion causes ischemic damage

**Retinal Vasculature Pattern:**
- Arteries: brighter red, thinner walls, lighter reflex
- Veins: darker, larger, more tortuous
- Arteriovenous ratio: 2:3 normally
- Capillary-free zones: foveal avascular zone (500 micrometers diameter), peripapillary
- Blood-retina barrier: tight junctions in retinal capillary endothelium

**Choroidal Circulation:**
- High flow (highest in body per gram tissue), low oxygen extraction
- Posterior ciliary arteries: 2-5 short posterior (choroid), 2 long posterior (ciliary body)
- Choriocapillaris: fenestrated capillary layer beneath RPE
- Vortex veins: 4-6 veins draining choroid, exit sclera posterior to equator
- Blood-retina outer barrier: tight junctions in RPE

**Optic Nerve Blood Supply:**
- Intraorbital: pial network from ophthalmic artery branches
- Intracanalicular: branches from ophthalmic and internal carotid
- Intracranial: branches from internal carotid, anterior cerebral, ophthalmic
- Central retinal artery contributes little to nerve head
- Prelaminar region: supplied by choroidal circulation (short posterior ciliary arteries)

### Visual Pathway Anatomy

**Optic Nerve (Cranial Nerve II):**
- Length: 50mm (intraocular 1mm, intraorbital 25mm, intracanalicular 10mm, intracranial 15mm)
- Diameter: 3-4mm
- 1.2 million axons (ganglion cell axons)
- Myelinated by oligodendrocytes (after lamina cribrosa)
- Surrounded by meningeal sheaths (dura, arachnoid, pia)
- Subarachnoid space continuous with brain

**Optic Chiasm:**
- Located superior to sella turcica
- Width: 12mm, anteroposterior: 8mm, height: 4mm
- Temporal retinal fibers (67%) remain ipsilateral
- Nasal retinal fibers (33%) decussate to contralateral side
- Superior retinal fibers (superior visual field) course medially in chiasm
- Inferior retinal fibers (inferior visual field) course laterally
- Macular fibers: posterior chiasm, superior

**Optic Tract:**
- Extends from chiasm to lateral geniculate nucleus (LGN)
- Contains fibers from contralateral temporal retina and ipsilateral nasal retina
- Corresponds to contralateral hemifield of both eyes
- Passes around cerebral peduncle
- Contains pupillary fibers (to pretectal nucleus)

**Lateral Geniculate Nucleus (LGN):**
- Six-layered structure in thalamus
- Layers 2, 3, 5: ipsilateral eye input
- Layers 1, 4, 6: contralateral eye input
- Parvocellular layers (3-6): color, fine detail, sustained responses
- Magnocellular layers (1-2): motion, low contrast, transient responses
- Konio layers (interlaminar): blue-yellow pathway
- Retinotopic organization: fovea posterior, peripheral anterior; superior inferior, inferior superior

**Optic Radiation (Geniculocalcarine Tract):**
- Axons from LGN to primary visual cortex
- Pass through retrolenticular internal capsule and temporal/parietal white matter
- **Meyer's loop:** inferior fibers loop anteriorly into temporal lobe (superior visual field)
- Superior fibers course through parietal lobe (inferior visual field)
- Macular fibers: central bundle
- Retinotopic organization maintained

**Primary Visual Cortex (V1, Area 17, Striate Cortex):**
- Located in banks of calcarine fissure
- Extends from parieto-occipital sulcus to posterior occipital pole
- Lateral to medial: lower to upper visual field representation
- Layer IV: stria of Gennari (myelinated fibers), site of thalamic input
- Input: 90% from LGN, 10% from other sources
- Six layers: input in IV, output from II/III (cortico-cortical), V/VI (subcortical)
- Cytochrome oxidase blobs: color processing in layers II/III

**Extrastriate Visual Areas:**
- V2 (area 18): stripes (thick, thin, pale), processes form/color/motion
- V3: dorsal (dynamic form), ventral (form)
- V4: color processing, object recognition
- V5/MT: motion processing, direction selectivity
- Ventral stream (what pathway): V1 -> V2 -> V4 -> inferior temporal cortex
- Dorsal stream (where pathway): V1 -> V2 -> MT -> posterior parietal cortex

### Orbital Anatomy Deep Dive

**Orbital Walls:**
- **Roof:** orbital plate of frontal bone, lesser wing of sphenoid
  - Separates orbit from anterior cranial fossa
  - Lacrimal fossa for gland
- **Floor:** orbital plate of maxilla, zygomatic bone, palatine bone
  - Separates orbit from maxillary sinus
  - Infraorbital groove and canal
- **Medial wall:** frontal process of maxilla, lacrimal bone, orbital plate of ethmoid, lesser wing of sphenoid
  - Thinnest wall (0.2-0.4mm ethmoid)
  - Separates orbit from ethmoid air cells
  - Lacrimal sac fossa (maxilla + lacrimal bone)
- **Lateral wall:** zygomatic bone, greater wing of sphenoid
  - Separates orbit from temporal fossa
  - Thickest wall, protects globe

**Orbital Apex:**
- Optic canal: transmits optic nerve, ophthalmic artery, meninges
- Superior orbital fissure: transmits CN III, IV, V1, VI, superior ophthalmic vein
- Inferior orbital fissure: transmits maxillary nerve (V2), infraorbital vessels

**Orbital Fascial System:**
- Tenon's capsule (fascia bulbi): surrounds globe from optic nerve to limbus
- Muscle pulleys: condensations of fascia that redirect muscle forces
- Suspensory ligament of Lockwood: supports globe inferiorly
- Check ligaments: limit muscle action
- Fat pads: cushion orbital contents

### Microvascular Anatomy

**Blood-Ocular Barriers:**
- **Blood-aqueous barrier:** tight junctions in iris and ciliary body capillaries, non-pigmented ciliary epithelium
- **Blood-retina barrier:** tight junctions in retinal capillary endothelium (inner barrier), tight junctions in RPE (outer barrier)
- Functions: maintain microenvironment for neural tissue, prevent entry of toxins/cells
- Clinical relevance: breakdown causes macular edema, uveitis, retinal vascular disease

**Anterior Segment Vasculature:**
- Major arterial circle of iris: formed by long posterior ciliary arteries and anterior ciliary arteries
- Minor arterial circle: at pupillary margin
- Aqueous veins: collect aqueous humor from Schlemm canal

**Posterior Segment Vasculature:**
- Choriocapillaris: lobular pattern, each lobule supplied by terminal arteriole
- Retinal circulation: centripetal pattern from optic disc, watershed zones in periphery`,
      keyTerms: [
        {
          term: 'lamina cribrosa',
          definition: 'Perforated region of sclera where optic nerve fibers exit; site of axonal damage in glaucoma',
          relatedTerms: ['esclera', 'nervio optico']
        },
        {
          term: 'palisades of Vogt',
          definition: 'Radial fibrovascular ridges at limbus containing epithelial stem cells',
          relatedTerms: ['limbo', 'celulas madre', 'epitelio corneal']
        },
        {
          term: 'Meyers loop',
          definition: 'Anterior extension of inferior optic radiation into temporal lobe; damage causes contralateral superior quadrantanopia',
          etymology: 'Named after Adolf Meyer, Swiss anatomist',
          relatedTerms: ['radiacion optica', 'via visual', 'corteza visual']
        },
        {
          term: 'choriocapillaris',
          definition: 'Fenestrated capillary layer of choroid directly beneath RPE',
          relatedTerms: ['coroides', 'EPR', 'barrera hematoretinal']
        },
        {
          term: 'blood-retinal barrier',
          definition: 'Tight junctions in retinal capillaries (inner) and RPE (outer) that regulate substance exchange',
          relatedTerms: ['barrera interna', 'barrera externa', 'endotelio capilar']
        }
      ],
      analogies: [
        'The RPE is like the maintenance crew of a high-rise building - removing waste, delivering supplies, and protecting residents.',
        'Meyers loop is like a detour in a highway system - it takes the long way around but reaches the same destination.',
        'The choriocapillaris is like a dense sprinkler system - one terminal arteriole per lobule provides precise coverage.',
        'The blood-retinal barrier is like airport security - selectively allowing passage while preventing unwanted entry.'
      ],
      examples: [
        'Central retinal artery occlusion causes cherry-red spot because underlying choroid remains perfused.',
        'Pituitary adenoma compressing chiasm from below affects superior temporal fibers first (superior bitemporal hemianopia).',
        'Temporal lobe lesion affecting Meyers loop causes contralateral superior quadrantanopia (pie in the sky).',
        'Branch retinal vein occlusion shows blood-aqueous barrier breakdown with cystoid macular edema.'
      ],
      clinicalNotes: `Clinical correlations:

1. **Glaucoma pathophysiology:** Lamina cribrosa deformity under elevated IOP causes axonal compression, ischemia, and ganglion cell death. Understanding cribriform plate biomechanics informs surgical approaches.

2. **Retinal artery occlusion:** End-artery nature means no collateral circulation. Emergency intervention window is 90-100 minutes before irreversible damage.

3. **Chiasmal syndromes:** Compression pattern correlates with lesion location. Inferior compression (pituitary) spares inferior nasal fibers; superior compression (craniopharyngioma) affects inferior fibers first.

4. **Optic neuritis:** Inflammation of optic nerve with breakdown of blood-brain barrier. Enhancement pattern on MRI indicates active inflammation.

5. **Retinal detachment:** Separation of neurosensory retina from RPE. Photoreceptor nutrition compromised, requiring surgical reattachment within days to preserve vision.

6. **Age-related macular degeneration:** RPE dysfunction leads to drusen formation, geographic atrophy, or choroidal neovascularization. Outer blood-retina barrier breakdown is central to pathogenesis.`
    },
    5: {
      level: 5,
      summary: 'El sistema visual presenta arquitectura molecular especializada, conexiones neuronales complejas mediante vias paralelas, y correlaciones clinicas quirurgicas que requieren comprension profunda para intervenciones de vanguardia.',
      explanation: `## Anatomia Visual Avanzada y Aplicaciones Clinicas

### Arquitectura Molecular y Celular Especializada

**Biologia del Epitelio Corneal:**
- Celulas madre limbicas: expresan p63, ABCG2, integrinas alfa-6 y beta-1
- Nicho de celulas madre: palisadas de Vogt con melanocitos y fibroblastos asociados
- Diferenciacion: transito amplificante -> celulas diferenciadas
- Ciclo de vida: 10-14 dias desde basal hasta desprendimiento
- Deficiencia de celulas madre: conjuntivalizacion, opacidad, neovascularizacion

**Estroma Corneal y Transparencia:**
- Lamellae: 200-250, 0.2-2.0 micrometros grosor, 9-260 micrometros ancho
- Fibras de colageno: diametro uniforme (25-35nm), espaciado regular (55-60nm)
- Fuerzas de mantenimiento: presion de exclusion esterica, fuerzas electricas
- Proteoglicanos: decorina, lumican, keratocan (regulan espaciado fibrilar)
- Hidratacion: 78% agua, mantenida por endotelio (bomba metabolica)

**Fotorreceptores a Nivel Molecular:**
- **Cascada fototransduccion:** rodopsina -> transducina -> fosfodiesterasa 6 -> cGMP -> canales de sodio/calcio
- **Discos membranosos:** 1000 en bastones, formados por invaginaciones de membrana plasmatica
- **Transporte intraflagelar (IFT):** movimiento de proteinas a traves del cilio conectante
- **Reciclaje visual:** RPE regenera 11-cis-retinal a partir de all-trans-retinal
- **Shedding de discos:** 10% diario de segmentos externos, fagocitosis por EPR

**Plasticidad de Circuitos Retinianos:**
- Sinapsis ribbon: placa electron-densa, vesiculas en base, liberacion tonica sostenida
- Sinapsis convencional: liberacion fasica, conos contactan bipolares
- Conexiones gap junction: acoplamiento electrico entre fotorreceptores, celulas horizontales, amacrinas
- Remodelacion en degeneracion retiniana: migracion de celulas, reprogramacion sinaptica

### Anatomia Quirurgica Detallada

**Acceso Quirurgico a Camara Anterior:**
- **Paracentesis:** 1-1.5mm, limbo claro, bevel hacia arriba
- **Incision tunelizada:** 1.5-3.0mm, limbo o escleral, tunel 1.5-2.0mm
- **Posicion incisiones:** superior evita astigmatismo, temporal mejor acceso
- **Estructuras criticas:** endotelio corneal (no tocar), capsula anterior (mantener intacta)

**Anatomia de Cirugia de Catarata:**
- **Capsulorrexis continua curvilinea (CCC):**
  - Diametro: 5.0-5.5mm centrado en eje visual
  - Superposicion 360 grados sobre optica de LIO
  - Evita capsulotomia can-opener (bordes irregulares)
  - Resistencia a traccion radial

- **Facoemulsificacion:**
  - Posicion: capsulorrexis -> corteza -> nucleo -> epinucleo
  - Tecnica divide y conquista, barrido, chop
  - Proteccion endotelio: viscoelastico dispersivo

- **Implante LIO:**
  - En bolsa capsular: mejor centracion, menor PCO
  - Angulacion: en sulcus requiere LIO especifico
  - Calculo potencia: formulas SRK-T, Holladay, Hoffer Q, Haigis

**Anatomia de Cirugia de Glaucoma:**
- **Trabeculectomia:**
  - Colgajo escleral: 1/2 a 2/3 grosor, 4x4mm
  - Esclerotomia interna: 1.5x2.0mm, bajo colgajo
  - Iridectomia periferica: evita obstruccion pupila
  - Colgajo ajustable: control flujo, prevencion hipotonia

- **Tubo de drenaje (implante):**
  - Placa: 13-25mm, colocada entre rectos
  - Tubo: insercion en camara anterior o vitrea
  - Colgajo donante/patch: cubre tubo para erosion
  - Camara de equilibrio de presion (valvula restrictiva)

- **Cirugia MIGS (Minimally Invasive Glaucoma Surgery):**
  - iStent: implante en malla trabecular, bypass a Schlemm
  - Hydrus: implante escleral, aumento conductividad
  - Cypass: insercion supracoroidea, drenaje uveoescleral

**Anatomia de Cirugia Vitreorretiniana:**
- **Pars plana vitrectomia:**
  - Puertos: 3.5-4.0mm detras del limbo (20-23 gauge)
  - Localizacion: entre horologo 3 y 9 (evitar rectos)
  - Anatomia del vitreo base: firme adherencia a ora serrata
  - Induccion de desprendimiento de hialoides posterior

- **Cirugia de desprendimiento de retina:**
  - Indentacion escleral: explante segmentario o circunferencial
  - Vitrectomia con aceite de silicona: tamponada endotamponade
  - Gas expansible (C3F8, SF6): tamponada temporal
  - Laser barrera: alrededor de desgarros

### Anatomia Funcional de las Vias Visuales

**Procesamiento Magno y Parvo:**
- **Via magnocelular (M):**
  - Retina: celulas ganglionares parasoles (M-cells)
  - LGN: capas magnocelulares 1-2
  - Corteza: V1 -> V2 grueso -> MT/V5
  - Funciones: movimiento, forma dinamica, atencion espacial
  - Deficit: defectos de movimiento, simultanagnosia

- **Via parvocelular (P):**
  - Retina: celulas ganglionares midget (P-cells)
  - LGN: capas parvocelulares 3-6
  - Corteza: V1 -> V2 fino/palido -> V4
  - Funciones: color, forma estatica, detalle fino
  - Deficit: acromatopsia cerebral, agnosia visual

**Mapas Retinotopicos:**
- **Corteza V1:** fovea 50% de area, periferia comprimida
- **Magnificacion cortical:** proporcional a densidad de receptores
- **Representacion:** hemisferio derecho -> hemicampo visual izquierdo ambos ojos
- **Inversion:** superior retina -> inferior corteza (y viceversa)

**Proyecciones Extrastriadas:**
- **Coliculo superior:** reflejos visuales, movimientos sacadicos
- **Nucleo pretectal:** reflejo pupilar a la luz (via aferente CN II, eferente CN III)
- **Hipotalamo:** ritmo circadiano (fotoreceptores intrinsecos ganglionares, melanopsina)
- **Nucleo accesorio optico de Bechterew:** optocinetico

**Plasticidad y Recuperacion:**
- Periodo critico: alteracion por ambliopia, privacion visual
- Neuroplasticidad adulta: limitada en V1, mas prominente en areas extrastriadas
- Rehabilitacion: estimulacion visual, realidad virtual

### Anatomia Variacional y Embriologica

**Variantes Anatomicas Comunes:**
- Disco optico con cazoleta (myelinated nerve fibers): 1%, pseudoedema
- Disco optico inclinado: astigmatismo, miopia
- Vaso persistente hialoide: remanente embriologico
- Cistoides macular: 5-30% poblacion, quistes microscópicos
- Agujero macular: traccion vitreo-foveal

**Desarrollo Embrionario:**
- **Vesicula optica:** evaginacion del prosencefalo (semana 4)
- **Cupo optico:** invaginacion forma retina y epitelio pigmentario
- **Cristalino:** derivado de ectodermo superficial
- **Cornea:** ectodermo + mesodermo neural + cresta neural
- **Vasos hialoides:** regresion en tercer trimestre
- **Mielinizacion:** inicia en chiasma hacia retina (termina al nacimiento)

**Anomalias Congenitas:**
- Anoftalmos/microftalmos: desarrollo arrestado
- Coloboma: cierre incompleto de la hendidura coroidea
- Aniridia: mutacion PAX6, ausencia parcial de iris
- Malformaciones de nervio optico: aplasia, hipoplasia
- Persistencia de vasculatura fetal: PHPV, ROP

### Correlaciones Clinicas Avanzadas

**Neuro-Oftalmologia Quirurgica:**
- Decompresion orbitaria: descompresion pared medial/fondo
- Tumores del nervio optico: escision vs observacion
- Fistulas carotido-cavernosas: embolizacion vs cirugia

**Cirugia Oculoplastica:**
- Reconstruccion de via lagrimal: dacriocistorrinostomia (DCR)
- Cirugia de ptosis: reseccion/aponeurotica vs suspension frontalis
- Reconstruccion de socket: implantes orbitarios, injertos mucosos

**Cirugia Refractiva:**
- LASIK: cortejo lamellar corneal, ablacion estromal
- PRK: ablacion epitelial + estromal
- Implante fáquico: LIO en camara posterior (ICL)
- Lente refractiva intercambiable (RLE)

**Transplante de Progenitores:**
- Trasplante de celulas madre limbicas: reconstruccion superficie ocular
- Trasplante de EPR: terapia celular para degeneracion macular
- Optogenetica: expresion de opsinas en celulas retinianas residuales
- Protesis de retina: estimulacion electrica de celulas ganglionares`,
      keyTerms: [
        {
          term: 'capsulorrexis continua curvilinea',
          definition: 'Tecnica quirurgica de capsulotomia circular utilizada en cirugia de catarata para remover capsula anterior',
          relatedTerms: ['catarata', 'LIO', 'capsula anterior']
        },
        {
          term: 'trabeculectomia',
          definition: 'Procedimiento quirurgico para crear fistula de drenaje subescleral reduciendo presion intraocular',
          relatedTerms: ['glaucoma', 'colgajo escleral', 'iridectomia']
        },
        {
          term: 'vitrectomia pars plana',
          definition: 'Cirugia de remocion del vitreo atraves de incisiones en la pars plana del cuerpo ciliar',
          relatedTerms: ['desprendimiento de retina', 'membrana epiretiniana', 'hemorragia vitrea']
        },
        {
          term: 'dacriocistorrinostomia',
          definition: 'Creacion de anastomosis entre saco lagrimal y mucosa nasal para drenaje',
          etymology: 'Dacrio: lagrima, cisto: saco, rhino: nariz, stoma: boca',
          relatedTerms: ['epifora', 'via lagrimal', 'conducto nasolagrimal']
        },
        {
          term: 'fotoreceptores intrinsecos ganglionares',
          definition: 'Celulas ganglionares expresando melanopsina, regulan ritmos circadianos no visuales',
          relatedTerms: ['melanopsina', 'nucleo supraquiasmatico', 'ritmo circadiano']
        }
      ],
      analogies: [
        'La capsulorrexis es como crear una abertura perfectamente circular en una envoltura de regalo - debe ser suficientemente grande para el contenido pero mantener integridad estructural.',
        'La trabeculectomia es como crear un desague alternativo en un fregadero tapado - el agua encuentra nueva salida.',
        'La DCR es como construir un puente entre dos rios - conectando sistema lagrimal con cavidad nasal.',
        'Los fotoreceptores intrinsecos son como sensores de luz ambiental separados de las camaras de seguridad - detectan presencia sin capturar imagen detallada.'
      ],
      examples: [
        'La rotura de CCC durante facoemulsificacion requiere conversion a tecnica can-opener o sutura de capsula.',
        'La sobre-filtracion post-trabeculectomia causa hipotonia, corioide effusiones, y maculopatia hipotonica.',
        'La DCR endoscopica evita incision cutanea pero requiere habilidad endoscopica nasal.',
        'La degeneracion retiniana remodela circuitos, creando sinapsis ectopicas que generan actividad espontanea.'
      ],
      clinicalNotes: `Correlaciones clinicas avanzadas:

1. **Biomecanica de la lamina cribrosa:** El analisis de elementos finitos muestra que las regiones superior e inferior son mas deformables bajo presion, explicando patrones de dano glaucomatoso. Tecnologias de ingenieria de tejidos buscan crear laminas de refuerzo.

2. **Cirugia de implantes retinianos:** El posicionamiento de electrodos requiere comprension precisa de arquitectura retiniana. El espacio subretinal vs epiretiniano determina proximidad a celulas blanco y curvas de estimulacion.

3. **Farmacogenetica oftalmica:** Variantes geneticas afectan respuesta a timolol (metabolismo CYP2D6), latanoprost (FP receptor), y corticoides ( elevacion de PIO). Medicina personalizada guiada por genotipo.

4. **Biologia de sistemas en retina:** Redes reguladoras de transcriptoma identifican nuevas dianas terapeuticas. Analisis de RNA-seq en degeneracion retiniana revela cambios metabolicos tempranos antes de muerte celular.

5. **Microbioma ocular:** El conjuntival alberga microbioma especifico alterado en enfermedad. Terapias probioticas y modificacion microbiomica emergen como nuevas modalidades.

6. **Inteligencia artificial en diagnostico:** Deep learning detecta DR, glaucoma, AMD con precision experto. Interpretabilidad (mapas de atencion) correlaciona con anatomia conocida, validando hallazgos.

7. **Terapia genica:** Luxturna (voretigene neparvovec) para mutaciones RPE65. Vias de administracion subretinal requieren comprension de anatomia vitreo-retiniana. Expansion a otras enfermedades monogenicas.

8. **Organoides retinianos:** Derivados de iPSCs recapitulan desarrollo retiniano in vitro. Usados para modelar enfermedad, screen farmacologico, y potencialmente trasplante. Desafio: integracion vascular y conexion sinaptica.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'kanski-clinical',
      type: 'textbook',
      title: 'Clinical Ophthalmology: A Systematic Approach',
      authors: ['Kanski JJ', 'Bowling B'],
      source: 'Elsevier',
      chapter: 'Ocular Anatomy and Embryology',
    },
    {
      id: 'snell-neuro',
      type: 'textbook',
      title: 'Clinical Neuroanatomy',
      authors: ['Snell RS'],
      source: 'Lippincott Williams & Wilkins',
      chapter: 'Visual System',
    },
    {
      id: 'forrester-physiology',
      type: 'textbook',
      title: 'The Eye: Basic Sciences in Practice',
      authors: ['Forrester JV', 'Dick AD', 'McMenamin PG', 'Roberts F', 'Pearlman E'],
      source: 'Elsevier',
    },
    {
      id: 'squire-fundamentals',
      type: 'textbook',
      title: 'Fundamental Neuroscience',
      authors: ['Squire LR', 'Berg D', 'Bloom FE', 'du Lac S', 'Ghosh A', 'Spitzer NC'],
      source: 'Academic Press',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-sensory-system-overview', targetType: 'system', relationship: 'parent', label: 'Sensory Systems Overview' },
    { targetId: 'anatomy-auditory-system', targetType: 'system', relationship: 'sibling', label: 'Auditory System' },
    { targetId: 'physiology-vision-processing', targetType: 'process', relationship: 'related', label: 'Visual Processing' },
    { targetId: 'clinical-ophthalmology-exam', targetType: 'concept', relationship: 'related', label: 'Ophthalmic Examination' },
    { targetId: 'histology-retina', targetType: 'structure', relationship: 'child', label: 'Retinal Histology' },
  ],

  tags: {
    systems: ['sensory', 'nervous'],
    topics: ['anatomy', 'ophthalmology', 'neuroanatomy'],
    keywords: [
      'eye anatomy',
      'visual system',
      'retina',
      'cornea',
      'lens',
      'optic nerve',
      'visual pathway',
      'ocular anatomy',
      'ophthalmology',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'ophthalmology'],
    },
  },

  createdAt: '2026-01-30T12:00:00.000Z',
  updatedAt: '2026-01-30T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default visualSystemAnatomy;
