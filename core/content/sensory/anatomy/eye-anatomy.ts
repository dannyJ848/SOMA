/**
 * Eye Anatomy - Detailed Educational Content
 *
 * Focused coverage of eye anatomy including orbital structures, eyeball anatomy,
 * and ocular adnexa.
 */

import { EducationalContent } from '../../types';

export const eyeAnatomy: EducationalContent = {
  id: 'structure-eye',
  type: 'structure',
  name: 'Eye Anatomy',
  nameEs: 'Anatomia del Ojo',
  alternateNames: ['Ocular Anatomy', 'Ophthalmic Anatomy', 'Globe Anatomy'],
  fmaId: 'FMA:54448',

  levels: {
    1: {
      level: 1,
      summary: 'The eye is like a camera that captures light and sends pictures to your brain. It has three main layers and several important parts that work together to help you see.',
      explanation: `## Eye Anatomy - Simple Overview

Your eye is an amazing organ that lets you see the world! It works like a camera to capture light and turn it into pictures for your brain.

### The Three Layers of Your Eye

**Outer Layer (White Part):**
- **Sclera:** The tough white covering that protects your eye
- **Cornea:** The clear window at the front that lets light in and helps focus it

**Middle Layer:**
- **Iris:** The colored part that controls how much light enters
- **Lens:** The clear structure behind the iris that focuses light onto the back of the eye
- **Ciliary body:** Makes fluid and controls the lens shape

**Inner Layer:**
- **Retina:** The back wall of the eye with millions of light-sensing cells
- **Optic nerve:** Carries pictures from the eye to the brain

### How Light Travels Through Your Eye

1. Light enters through the cornea
2. Passes through the pupil (hole in the iris)
3. Goes through the lens
4. Focuses on the retina at the back
5. Retina converts light to electrical signals
6. Optic nerve sends signals to the brain
7. Brain creates the picture you see!

### Parts That Protect Your Eye

- **Eyelids:** Cover and protect your eye
- **Eyelashes:** Keep dust out
- **Tears:** Keep your eye clean and moist
- **Conjunctiva:** Clear covering over the white part

### Spanish Words
- Eye = Ojo
- Cornea = Cornea
- Iris = Iris
- Retina = Retina
- Lens = Cristalino`,
      keyTerms: [
        { term: 'sclera', definition: 'The tough white outer layer of the eye' },
        { term: 'cornea', definition: 'The clear front window of the eye' },
        { term: 'retina', definition: 'The light-sensing layer at the back of the eye' },
        { term: 'lens', definition: 'The clear structure that focuses light onto the retina' }
      ],
      analogies: [
        'The cornea is like the glass on a watch face - clear and protective.',
        'The lens is like the lens in glasses - it focuses light.',
        'The retina is like film in a camera - it captures the image.'
      ],
      patientCounselingPoints: [
        'Do not rub your eyes - it can scratch the cornea.',
        'Wear sunglasses to protect your eyes from bright sunlight.',
        'Tell an adult if your eye hurts or if you cannot see clearly.'
      ]
    },
    2: {
      level: 2,
      summary: 'The eye is a spherical organ with three concentric layers (fibrous tunic, vascular tunic, neural tunic), optical media, and internal structures including lens, vitreous, and chambers filled with aqueous humor.',
      explanation: `## Eye Anatomy Overview

### General Structure

**Dimensions:**
- Diameter: 24mm (anteroposterior)
- Volume: 6.5mL
- Weight: 7.5 grams
- Shape: spherical with corneal protrusion

**Axes:**
- Visual axis: line from fixation point to fovea
- Optical axis: geometric center line
- Angle between axes: approximately 5 degrees

### Three Layers (Tunics)

**Fibrous Tunic (Outer):**
- **Cornea:** Anterior 1/6, transparent, avascular
  - Layers: epithelium, Bowman layer, stroma, Descemet membrane, endothelium
  - Thickness: 0.5mm central, 0.7mm peripheral
  - Refractive power: +43 diopters
  
- **Sclera:** Posterior 5/6, white, opaque
  - Thickness: 0.3mm (muscle insertion) to 1.0mm (posterior)
  - Lamina cribrosa: perforated region for optic nerve
  - Functions: protection, shape maintenance, muscle attachment

**Vascular Tunic/Uvea (Middle):**
- **Choroid:** Between sclera and retina, highly vascular
  - Thickness: 0.1-0.22mm
  - Functions: blood supply to outer retina, light absorption
  
- **Ciliary body:** Anterior continuation of choroid
  - Pars plicata (corona ciliaris): produces aqueous humor
  - Pars plana: surgical entry site
  - Ciliary muscle: accommodation
  - Zonular fibers: suspend lens
  
- **Iris:** Most anterior part of uvea
  - Pupil: central aperture (2-8mm)
  - Muscles: sphincter (constrictor), dilator
  - Stroma: connective tissue, vessels, pigment cells

**Neural Tunic (Inner):**
- **Retina:** Light-sensitive layer
  - Macula: central 5.5mm, high acuity vision
  - Fovea: center of macula, 200,000 cones/mm
  - Optic disc: nerve exit site (blind spot)
  - Layers: 10 distinct layers from pigment epithelium to nerve fiber layer

### Optical Media

**Aqueous Humor:**
- Location: anterior and posterior chambers
- Production: ciliary body processes (2.5 microliters/min)
- Drainage: trabecular meshwork -> Schlemm canal
- Functions: nutrition, intraocular pressure maintenance

**Lens:**
- Biconvex, avascular, transparent
- Dimensions: 9-10mm diameter, 3.6mm thickness
- Structure: capsule, cortex, nucleus
- Accommodation: changes shape via ciliary muscle

**Vitreous:**
- Gelatinous, fills posterior segment (4.0mL)
- 99% water, 1% collagen/hyaluronic acid
- Functions: support, optical medium
- Attachments: optic disc, ora serrata, vessels

### Ocular Appendages

**Eyelids:**
- Palpebral fissure: opening between lids
- Orbicularis oculi muscle: closure
- Levator palpebrae superioris: elevation
- Tarsal plates: cartilage-like support
- Meibomian glands: secrete oil for tear film

**Conjunctiva:**
- Mucous membrane covering sclera and inner lids
- Palpebral, bulbar, forniceal portions
- Goblet cells produce mucin

**Lacrimal Apparatus:**
- Lacrimal gland: tear production
- Canaliculi: drainage
- Lacrimal sac: reservoir
- Nasolacrimal duct: drains to nasal cavity`,
      keyTerms: [
        { term: 'uvea', definition: 'The middle vascular layer of the eye including iris, ciliary body, and choroid' },
        { term: 'aqueous humor', definition: 'Clear fluid produced by the ciliary body that fills the anterior and posterior chambers' },
        { term: 'macula', definition: 'Central area of the retina responsible for detailed central vision' },
        { term: 'zonular fibers', definition: 'Fibers that suspend the lens from the ciliary body' }
      ],
      examples: [
        'Cataracts cause clouding of the lens, like looking through a foggy window.',
        'Glaucoma damages the optic nerve due to increased intraocular pressure from aqueous humor drainage problems.',
        'Macular degeneration affects the central retina, causing loss of central vision.'
      ]
    },
    3: {
      level: 3,
      summary: 'El ojo es un organo esferico de 24mm de diametro con tres capas concentricas (tunica fibrosa, vascular y neural), medios opticos acuoso y vitreo, y estructuras internas incluyendo cristalino y camaras.',
      explanation: `## Anatomia del Ojo

### Estructura General

**Dimensiones:**
- Diametro: 24mm (anteroposterior)
- Volumen: 6.5mL
- Peso: 7.5 gramos
- Forma: esferica con protrusion corneal

**Ejes:**
- Eje visual: linea desde punto de fijacion a fovea
- Eje optico: linea del centro geometrico
- Angulo entre ejes: aproximadamente 5 grados

### Tres Capas (Tunicas)

**Tunica Fibrosa (Externa):**
- **Cornea:** Anterior 1/6, transparente, avascular
  - Capas: epitelio, membrana de Bowman, estroma, membrana de Descemet, endotelio
  - Grosor: 0.5mm central, 0.7mm periferico
  - Potencia refractiva: +43 dioptrias
  
- **Esclerotica:** Posterior 5/6, blanca, opaca
  - Grosor: 0.3mm (insercion muscular) a 1.0mm (posterior)
  - Lamina cribrosa: region perforada para nervio optico
  - Funciones: proteccion, mantenimiento de forma, insercion muscular

**Tunica Vascular/Uvea (Media):**
- **Coroides:** Entre esclera y retina, altamente vascular
  - Grosor: 0.1-0.22mm
  - Funciones: suministro sanguineo a retina externa, absorcion de luz
  
- **Cuerpo Ciliar:** Continuacion anterior de coroides
  - Pars plicata (corona ciliaris): produce humor acuoso
  - Pars plana: sitio de entrada quirurgica
  - Musculo ciliar: acomodacion
  - Fibras zonulares: suspenden cristalino
  
- **Iris:** Parte mas anterior de la uvea
  - Pupila: abertura central (2-8mm)
  - Musculos: esfinter (constrictor), dilatador
  - Estroma: tejido conectivo, vasos, celulas pigmentarias

**Tunica Neural (Interna):**
- **Retina:** Capa fotosensible
  - Macula: central 5.5mm, vision de alta agudeza
  - Fovea: centro de la macula, 200,000 conos/mm
  - Disco optico: sitio de salida del nervio (punto ciego)
  - Capas: 10 capas distintas desde epitelio pigmentario hasta capa de fibras nerviosas

### Medios Opticos

**Humor Acuoso:**
- Localizacion: camaras anterior y posterior
- Produccion: procesos ciliares (2.5 microlitros/min)
- Drenaje: malla trabecular -> canal de Schlemm
- Funciones: nutricion, mantenimiento de presion intraocular

**Cristalino:**
- Biconvexo, avascular, transparente
- Dimensiones: 9-10mm diametro, 3.6mm grosor
- Estructura: capsula, corteza, nucleo
- Acomodacion: cambia forma via musculo ciliar

**Vitreo:**
- Gelatinoso, llena segmento posterior (4.0mL)
- 99% agua, 1% colageno/acido hialuronico
- Funciones: soporte, medio optico
- Adherencias: disco optico, ora serrata, vasos

### Anexos Oculares

**Parpados:**
- Fisura palpebral: abertura entre parpados
- Musculo orbicular: cierre
- Elevador del parpado superior: elevacion
- Placas tarsales: soporte tipo cartilago
- Glandulas de Meibomio: secretan aceite para pelicula lagrimal

**Conjuntiva:**
- Membrana mucosa cubriendo esclera e interior de parpados
- Porciones palpebral, bulbar y fomiceal
- Celulas caliciformes producen mucina

**Aparato Lagrimal:**
- Glandula lagrimal: produccion de lagrimas
- Canaliculos: drenaje
- Saco lagrimal: reservorio
- Conducto nasolagrimal: drena a cavidad nasal`,
      keyTerms: [
        { term: 'uvea', definition: 'Capa vascular media del ojo incluyendo iris, cuerpo ciliar y coroides' },
        { term: 'humor acuoso', definition: 'Fluido claro producido por el cuerpo ciliar que llena las camaras anterior y posterior' },
        { term: 'macula', definition: 'Area central de la retina responsable de la vision central detallada' },
        { term: 'fibras zonulares', definition: 'Fibras que suspenden el cristalino desde el cuerpo ciliar' }
      ],
      examples: [
        'Las cataratas causan opacidad del cristalino, como mirar a traves de una ventana empanada.',
        'El glaucoma dana el nervio optico debido a presion intraocular aumentada por problemas de drenaje del humor acuoso.',
        'La degeneracion macular afecta la retina central, causando perdida de vision central.'
      ]
    },
    4: {
      level: 4,
      summary: 'Comprehensive eye anatomy including detailed corneal layers, retinal architecture, aqueous humor dynamics, and clinical relevance of anatomical structures for ophthalmic diagnosis and surgery.',
      explanation: `## Detailed Eye Anatomy

**Corneal Layers (Detailed):**
- Epithelium: 5-6 layers, 50 microns, regenerates every 7 days
- Bowman layer: 8-12 microns, acellular, collagen type I
- Stroma: 90% of thickness, 200-250 lamellae, keratocytes, regular collagen spacing
- Descemet membrane: 5-10 microns, collagen type IV, basement membrane of endothelium
- Endothelium: single layer, hexagonal cells, Na+/K+ ATPase pumps, cell loss permanent

**Retinal Layers:**
1. Retinal pigment epithelium (RPE)
2. Photoreceptor layer (rods and cones)
3. External limiting membrane
4. Outer nuclear layer (photoreceptor nuclei)
5. Outer plexiform layer (synapses)
6. Inner nuclear layer (bipolar, horizontal, amacrine cells)
7. Inner plexiform layer (synapses)
8. Ganglion cell layer
9. Nerve fiber layer
10. Internal limiting membrane

**Aqueous Humor Dynamics:**
- Production: active secretion (80%), ultrafiltration (20%)
- Pathway: ciliary processes -> posterior chamber -> pupil -> anterior chamber -> trabecular meshwork -> Schlemm canal -> collector channels -> episcleral veins
- Resistance: mainly at trabecular meshwork and inner wall of Schlemm canal
- IOP: 10-21 mmHg (mean 15.5)

**Iridocorneal Angle:**
- Schwalbe line: anterior limit, termination of Descemet
- Trabecular meshwork: porous tissue, endothelial lined beams
- Schlemm canal: circular, endothelial lined, 36-48 collector channels
- Scleral spur: collagen ridge, ciliary muscle attachment
- Ciliary body band: visible on gonioscopy
- Iris processes: uveal meshwork

**Optic Nerve Head:**
- Prelaminar: nerve fibers before lamina cribrosa, supplied by choroid
- Lamina cribrosa: collagen beams, fenestrated, sieve-like
- Postlaminar: myelinated nerve, dural sheaths
- Blood supply: short posterior ciliary arteries, central retinal artery contributes little

**Lens Anatomy:**
- Capsule: basement membrane, 14-21 microns anterior, 2-4 microns posterior
- Epithelium: anterior subcapsular, cuboidal cells
- Cortex: peripheral, younger fibers
- Nucleus: central, older fibers
- Accommodation: ciliary muscle contraction -> zonular relaxation -> lens thickens -> increased power`,
      keyTerms: [
        { term: 'trabecular meshwork', definition: 'Spongy tissue at the iridocorneal angle responsible for aqueous humor drainage' },
        { term: 'Schlemm canal', definition: 'Circular canal at the limbus that collects aqueous humor from trabecular meshwork' },
        { term: 'lamina cribrosa', definition: 'Perforated portion of sclera through which optic nerve fibers exit the eye' },
        { term: 'zonular fibers', definition: 'Fibrillin-rich fibers connecting ciliary body to lens capsule' }
      ],
      clinicalNotes: `Clinical correlations:

1. **Corneal transparency:** Depends on regular collagen spacing, dehydration, avascularity. Edema disrupts spacing and transparency.

2. **Glaucoma pathophysiology:** Increased resistance at trabecular meshwork/inner wall Schlemm canal elevates IOP, causing lamina cribrosa deformation and axonal damage.

3. **Retinal detachment:** Separation between neurosensory retina and RPE. Photoreceptors rely on RPE for nutrients; detachment causes rapid degeneration.

4. **Presbyopia:** Loss of lens elasticity with age reduces accommodation, requiring reading glasses.`
    },
    5: {
      level: 5,
      summary: 'Anatomia ocular avanzada incluyendo detalles moleculares de la cornea, arquitectura retiniana, dinamica del humor acuoso, y relevancia clinica de estructuras anatomicas para diagnostico y cirugia oftalmica.',
      explanation: `## Anatomia Ocular Detallada

**Capas de la Cornea (Detallado):**
- Epitelio: 5-6 capas, 50 micras, regenera cada 7 dias
- Membrana de Bowman: 8-12 micras, acelular, colageno tipo I
- Estroma: 90% del grosor, 200-250 lamelas, queratocitos, espaciado regular de colageno
- Membrana de Descemet: 5-10 micras, colageno tipo IV, membrana basal del endotelio
- Endotelio: capa unica, celulas hexagonales, bombas Na+/K+ ATPasa, perdida celular permanente

**Capas de la Retina:**
1. Epitelio pigmentario retiniano (EPR)
2. Capa de fotorreceptores (bastones y conos)
3. Membrana limitante externa
4. Capa nuclear externa (nucleos de fotorreceptores)
5. Capa plexiforme externa (sinapsis)
6. Capa nuclear interna (celulas bipolares, horizontales, amacrinas)
7. Capa plexiforme interna (sinapsis)
8. Capa de celulas ganglionares
9. Capa de fibras nerviosas
10. Membrana limitante interna

**Dinamica del Humor Acuoso:**
- Produccion: secrecion activa (80%), ultrafiltracion (20%)
- Via: procesos ciliares -> camara posterior -> pupila -> camara anterior -> malla trabecular -> canal de Schlemm -> canales colectores -> venas epiescleroticales
- Resistencia: principalmente en malla trabecular y pared interna del canal de Schlemm
- PIO: 10-21 mmHg (media 15.5)

**Angulo Iridocorneal:**
- Linea de Schwalbe: limite anterior, terminacion de Descemet
- Malla trabecular: tejido poroso, vigas revestidas de endotelio
- Canal de Schlemm: circular, revestido de endotelio, 36-48 canales colectores
- Espina escleral: cresta de colageno, insercion del musculo ciliar
- Banda del cuerpo ciliar: visible en gonioscopia
- Procesos del iris: malla uveal

**Cabeza del Nervio Optico:**
- Prelaminar: fibras nerviosas antes de lamina cribrosa, irrigado por coroides
- Lamina cribrosa: vigas de colageno, fenestrada, tipo colador
- Postlaminar: nervio mielinizado, vainas durales
- Irrigacion sanguinea: arterias ciliares posteriores cortas, arteria retiniana central aporta poco

**Anatomia del Cristalino:**
- Capsula: membrana basal, 14-21 micras anterior, 2-4 micras posterior
- Epitelio: subcapsular anterior, celulas cuboidales
- Corteza: periferica, fibras mas jovenes
- Nucleo: central, fibras mas viejas
- Acomodacion: contraccion del musculo ciliar -> relajacion zonular -> engrosamiento del cristalino -> aumento de potencia`,
      keyTerms: [
        { term: 'malla trabecular', definition: 'Tejido esponjoso en el angulo iridocorneal responsable del drenaje del humor acuoso' },
        { term: 'canal de Schlemm', definition: 'Canal circular en el limbo que colecta humor acuoso de la malla trabecular' },
        { term: 'lamina cribrosa', definition: 'Porcion perforada de la esclera a traves de la cual las fibras del nervio optico salen del ojo' },
        { term: 'fibras zonulares', definition: 'Fibras ricas en fibrilina que conectan el cuerpo ciliar con la capsula del cristalino' }
      ],
      clinicalNotes: `Correlaciones clinicas:

1. **Transparencia corneal:** Depende del espaciado regular del colageno, deshidratacion, avascularidad. El edema interrumpe el espaciado y la transparencia.

2. **Fisiopatologia del glaucoma:** Aumento de la resistencia en la malla trabecular/pared interna del canal de Schlemm eleva la PIO, causando deformacion de la lamina cribrosa y dano axonal.

3. **Desprendimiento de retina:** Separacion entre retina neurosensorial y EPR. Los fotorreceptores dependen del EPR para nutrientes; el desprendimiento causa degeneracion rapida.

4. **Presbicia:** Perdida de la elasticidad del cristalino con la edad reduce la acomodacion, requiriendo gafas para lectura.`
    },
  },

  media: [],

  citations: [
    {
      id: 'kanski-eye',
      type: 'textbook',
      title: 'Clinical Ophthalmology: A Systematic Approach',
      authors: ['Kanski JJ', 'Bowling B'],
      source: 'Elsevier',
    },
    {
      id: 'forrester-eye',
      type: 'textbook',
      title: 'The Eye: Basic Sciences in Practice',
      authors: ['Forrester JV', 'Dick AD', 'McMenamin PG', 'Roberts F', 'Pearlman E'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-visual-system', targetType: 'system', relationship: 'parent', label: 'Visual System' },
    { targetId: 'anatomy-orbital-anatomy', targetType: 'structure', relationship: 'related', label: 'Orbital Anatomy' },
    { targetId: 'clinical-eye-exam', targetType: 'concept', relationship: 'related', label: 'Eye Examination' },
  ],

  tags: {
    systems: ['sensory', 'nervous'],
    topics: ['anatomy', 'ophthalmology', 'eye'],
    keywords: ['eye', 'cornea', 'retina', 'lens', 'iris', 'aqueous', 'vitreous', 'ophthalmology'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['ophthalmology', 'neurology'],
    },
  },

  createdAt: '2026-01-30T12:00:00.000Z',
  updatedAt: '2026-01-30T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default eyeAnatomy;
