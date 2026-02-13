/**
 * Cataratas / Cataracts - Oftalmologia / Ophthalmology
 *
 * Contenido educativo bilingue (Espanol primero) sobre cataratas:
 * desarrollo, tipos, cirugia y recuperacion.
 *
 * Bilingual educational content (Spanish-first) on cataracts:
 * development, types, surgery, and recovery.
 *
 * Five complexity levels from 8th-grade through MD/Professional.
 */

import { EducationalContent } from '../types';

export const cataratasCataracts: EducationalContent = {
  id: 'condition-cataracts',
  type: 'condition',
  name: 'Cataracts',
  nameEs: 'Cataratas',
  alternateNames: [
    'Opacidad del cristalino',
    'Lens opacity',
    'Catarata senil',
    'Age-related cataract',
    'Catarata nuclear',
    'Nuclear sclerotic cataract',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Las cataratas ocurren cuando el lente natural del ojo se vuelve opaco, haciendo que la vision se vea borrosa y nublada. | Cataracts occur when the natural lens of the eye becomes cloudy, making vision blurry and hazy.',
      explanation: `## Explicacion

Dentro de cada ojo hay un **lente** (cristalino) que es normalmente transparente, como el vidrio de una ventana limpia. Este lente ayuda a enfocar la luz para que puedas ver con claridad. Con el tiempo, el lente puede volverse opaco y nublado -- esto es una **catarata**.

### Como se ve el mundo con cataratas

- Todo se ve **borroso**, como mirar a traves de un vidrio empanado
- Los **colores** se ven apagados o amarillentos
- Las **luces** brillan demasiado y causan halos (circulos de luz)
- Es mas dificil ver de **noche**, especialmente al manejar
- Puede haber **vision doble** en un solo ojo

### Por que se forman las cataratas

Las cataratas se desarrollan lentamente, generalmente despues de los 60 anos. Las proteinas del lente se van aglomerando y haciendose opacas. Algunos factores que aumentan el riesgo:

- **Edad** -- es la causa mas comun
- **Diabetes** -- el azucar alta dana las proteinas del lente
- **Fumar** -- el tabaco acelera el proceso
- **Sol excesivo** -- la luz ultravioleta dana el lente
- **Medicamentos** -- los esteroides (corticoides) pueden causarlas
- **Golpes en el ojo** -- las cataratas traumaticas

### Tratamiento: cirugia de cataratas

La unica forma de curar una catarata es con cirugia. Es una de las cirugias mas comunes y seguras:

1. El doctor adormece el ojo con gotas
2. Se hace una pequena abertura en el ojo
3. Se rompe y se saca el lente opaco
4. Se coloca un **lente artificial** (lente intraocular) nuevo y transparente
5. La abertura se cierra sola, sin puntos

La cirugia dura unos 15-20 minutos y la persona se va a casa el mismo dia.

### Recuperacion

- La vision mejora en dias a semanas
- Se usan gotas antibioticas y antiinflamatorias por algunas semanas
- Hay que evitar frotarse los ojos y levantar cosas pesadas por unas semanas
- La mayoria de las personas ven mucho mejor despues de la cirugia

---
## Explanation

Inside each eye there is a **lens** (crystalline lens) that is normally transparent, like the glass of a clean window. This lens helps focus light so you can see clearly. Over time, the lens can become opaque and cloudy -- this is a **cataract**.

### How the world looks with cataracts

- Everything looks **blurry**, like looking through a foggy window
- **Colors** appear faded or yellowish
- **Lights** are too bright and cause halos (circles of light)
- It is harder to see at **night**, especially when driving
- There may be **double vision** in one eye

### Why cataracts form

Cataracts develop slowly, usually after age 60. The proteins in the lens gradually clump together and become opaque. Some factors that increase risk:

- **Age** -- the most common cause
- **Diabetes** -- high sugar damages lens proteins
- **Smoking** -- tobacco accelerates the process
- **Excessive sun** -- ultraviolet light damages the lens
- **Medications** -- steroids (corticosteroids) can cause them
- **Eye injuries** -- traumatic cataracts

### Treatment: cataract surgery

The only way to cure a cataract is with surgery. It is one of the most common and safest surgeries:

1. The doctor numbs the eye with drops
2. A small opening is made in the eye
3. The cloudy lens is broken up and removed
4. A new, clear **artificial lens** (intraocular lens) is placed
5. The opening closes on its own, without stitches

The surgery takes about 15-20 minutes and the person goes home the same day.

### Recovery

- Vision improves within days to weeks
- Antibiotic and anti-inflammatory drops are used for a few weeks
- Rubbing the eyes and lifting heavy things should be avoided for a few weeks
- Most people see much better after surgery`,
      keyTerms: [
        {
          term: 'catarata / cataract',
          definition:
            'Opacidad del lente natural del ojo que hace que la vision se vuelva borrosa y nublada. | Clouding of the natural lens of the eye that makes vision blurry and hazy.',
        },
        {
          term: 'cristalino / crystalline lens',
          definition:
            'El lente natural dentro del ojo que enfoca la luz; cuando se opaca se llama catarata. | The natural lens inside the eye that focuses light; when it becomes opaque it is called a cataract.',
        },
        {
          term: 'lente intraocular (LIO) / intraocular lens (IOL)',
          definition:
            'Lente artificial que se coloca dentro del ojo durante la cirugia de cataratas para reemplazar el lente natural opaco. | Artificial lens placed inside the eye during cataract surgery to replace the cloudy natural lens.',
        },
        {
          term: 'halos',
          definition:
            'Circulos de luz que se ven alrededor de las luces, especialmente de noche; un sintoma comun de cataratas. | Circles of light seen around lights, especially at night; a common symptom of cataracts.',
        },
      ],
      analogies: [
        'Una catarata es como una ventana que se empaña por dentro -- no puedes limpiarla desde afuera, tienes que cambiar el vidrio. | A cataract is like a window that fogs up on the inside -- you cannot clean it from the outside, you have to replace the glass.',
        'El lente del ojo con catarata es como un lente de camara viejo y rayado -- las fotos salen borrosas y sin color. | The lens of the eye with a cataract is like an old scratched camera lens -- the photos come out blurry and faded.',
        'La cirugia de cataratas es como cambiar un foco quemado -- se saca el viejo y se pone uno nuevo que deja pasar la luz. | Cataract surgery is like changing a burned-out light bulb -- the old one is taken out and a new one that lets light through is put in.',
      ],
      examples: [
        'Una abuela que dice que los colores de la ropa ya no se ven tan brillantes como antes probablemente esta desarrollando cataratas. | A grandmother who says the colors of her clothes no longer look as bright as before is probably developing cataracts.',
        'Un abuelo que ya no quiere manejar de noche porque las luces de los carros le molestan mucho podria tener cataratas. | A grandfather who no longer wants to drive at night because car headlights bother him a lot may have cataracts.',
        'Despues de la cirugia, muchas personas dicen que los colores se ven mas brillantes y vivos -- como si les hubieran limpiado los ojos. | After surgery, many people say colors look brighter and more vivid -- as if their eyes had been cleaned.',
      ],
      patientCounselingPoints: [
        'Las cataratas no son peligrosas por si solas -- usted y su doctor pueden decidir juntos cuando es el mejor momento para la cirugia. | Cataracts are not dangerous by themselves -- you and your doctor can decide together when the best time for surgery is.',
        'La cirugia de cataratas es muy segura y se hace millones de veces al ano en todo el mundo. No necesita quedarse en el hospital. | Cataract surgery is very safe and is performed millions of times a year worldwide. You do not need to stay in the hospital.',
        'Use lentes de sol cuando salga para proteger sus ojos de los rayos ultravioleta y retrasar el avance de las cataratas. | Wear sunglasses when going outside to protect your eyes from ultraviolet rays and slow cataract progression.',
        'Si tiene diabetes, controlar su azucar ayuda a prevenir o retrasar las cataratas. | If you have diabetes, controlling your blood sugar helps prevent or delay cataracts.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Las cataratas son opacificaciones del cristalino causadas por la aglomeracion de proteinas cristalinas, con tres tipos principales (nuclear, cortical, subcapsular posterior) que difieren en factores de riesgo, sintomas y progresion. | Cataracts are opacifications of the crystalline lens caused by aggregation of crystallin proteins, with three main types (nuclear, cortical, posterior subcapsular) differing in risk factors, symptoms, and progression.',
      explanation: `## Explicacion

### Anatomia del cristalino

El cristalino es una estructura biconvexa, avascular y transparente ubicada detras del iris y la pupila. Esta compuesto por:
- **Capsula:** Membrana basal mas gruesa del cuerpo; sostiene el lente
- **Epitelio anterior:** Capa unica de celulas que se diferencian en fibras del cristalino
- **Corteza:** Fibras mas jovenes en la periferia
- **Nucleo:** Fibras mas viejas y compactas en el centro

El cristalino esta compuesto en un 35% por proteinas (la mayor concentracion de cualquier tejido) y 65% agua. Las **proteinas cristalinas** (alfa, beta, gamma) mantienen la transparencia.

### Tipos de cataratas

**Catarata nuclear esclerosa:**
- Tipo mas comun relacionado con la edad
- El nucleo del cristalino se vuelve amarillo y luego marron (catarata brunescente)
- Cambio miopico temporal -- la "segunda vista" (mejoria temporal de la vision de cerca)
- Progresion lenta a lo largo de anos

**Catarata cortical:**
- Opacidades en forma de radios (cuneiforms) en la corteza del cristalino
- Asociada con exposicion UV y diabetes
- Causa deslumbramiento significativo
- Puede no afectar la agudeza visual central hasta etapas avanzadas

**Catarata subcapsular posterior (CSP):**
- Opacidad en la superficie posterior del cristalino, justo frente a la capsula
- Asociada con uso de esteroides, diabetes, uveitis, radiacion
- Afecta desproporcionadamente la vision de cerca y causa deslumbramiento
- Tiende a presentarse en pacientes mas jovenes
- Progresion mas rapida que las otras formas

### Factores de riesgo

| Factor | Mecanismo |
|--------|-----------|
| Edad (>60 anos) | Acumulacion de modificaciones oxidativas en cristalinas |
| Diabetes mellitus | Sorbitol acumulado por la via del poliol causa inflamacion osmotica |
| Tabaquismo | Estres oxidativo directo; reduce antioxidantes en humor acuoso |
| Radiacion UV | Fotoxidacion de proteinas cristalinas |
| Corticosteroides | Alteran metabolismo del cristalino; inducen CSP |
| Trauma | Ruptura capsular, inflamacion |
| Alcoholismo | Estres oxidativo, deficiencias nutricionales |
| Miopia alta | Mayor riesgo de catarata nuclear |

### Evaluacion clinica

- **Agudeza visual:** Snellen o ETDRS; mejor corregida
- **Examen con lampara de hendidura:** Clasifica el tipo y severidad
- **Prueba de deslumbramiento (glare test):** Evalua funcion visual real
- **Retinoscopia / refraccion:** Documenta el cambio miopico
- **Dilatacion pupilar:** Permite evaluar la catarata completa y el fondo de ojo

### Cirugia de cataratas: facoemulsificacion

**Tecnica estandar:**
1. Anestesia topica (gotas de proparacaina/tetracaina) o periocular
2. Incision corneal clara de 2.2-2.8 mm (temporal)
3. **Capsulorrexis curvilinea continua (CCC):** Abertura circular en la capsula anterior
4. **Hidrodiseccion:** Inyeccion de liquido para separar el nucleo de la corteza
5. **Facoemulsificacion:** Sonda ultrasonica fragmenta y aspira el nucleo
6. Aspiracion de corteza residual
7. Implantacion de LIO plegable en el saco capsular
8. Hidratacion de la incision (auto-sellante, sin suturas generalmente)

**Recuperacion postoperatoria:**
- Regimen de gotas: Antibiotico (moxifloxacino) + antiinflamatorio (prednisolona o AINE) por 4 semanas
- Protector ocular al dormir por 1 semana
- Restricciones: No frotar ojo, evitar piscinas, no levantar peso >5 kg por 2-4 semanas
- Refraccion final a las 4-6 semanas (para prescripcion de anteojos si es necesario)

---
## Explanation

### Lens anatomy

The crystalline lens is a biconvex, avascular, and transparent structure located behind the iris and pupil. It is composed of:
- **Capsule:** The thickest basement membrane in the body; holds the lens
- **Anterior epithelium:** Single layer of cells that differentiate into lens fibers
- **Cortex:** Younger fibers at the periphery
- **Nucleus:** Older, more compact fibers at the center

The lens is 35% protein (the highest concentration of any tissue) and 65% water. **Crystallin proteins** (alpha, beta, gamma) maintain transparency.

### Types of cataracts

**Nuclear sclerotic cataract:**
- Most common age-related type
- Lens nucleus turns yellow then brown (brunescent cataract)
- Temporary myopic shift -- "second sight" (temporary improvement in near vision)
- Slow progression over years

**Cortical cataract:**
- Spoke-like (cuneiform) opacities in the lens cortex
- Associated with UV exposure and diabetes
- Causes significant glare
- May not affect central visual acuity until advanced stages

**Posterior subcapsular cataract (PSC):**
- Opacity on the posterior surface of the lens, just in front of the capsule
- Associated with steroid use, diabetes, uveitis, radiation
- Disproportionately affects near vision and causes glare
- Tends to occur in younger patients
- More rapid progression than other forms

### Risk factors

| Factor | Mechanism |
|--------|-----------|
| Age (>60 years) | Accumulation of oxidative modifications to crystallins |
| Diabetes mellitus | Sorbitol accumulated via polyol pathway causes osmotic swelling |
| Smoking | Direct oxidative stress; reduces aqueous humor antioxidants |
| UV radiation | Photo-oxidation of crystallin proteins |
| Corticosteroids | Alter lens metabolism; induce PSC |
| Trauma | Capsular rupture, inflammation |
| Alcoholism | Oxidative stress, nutritional deficiencies |
| High myopia | Increased risk of nuclear cataract |

### Clinical evaluation

- **Visual acuity:** Snellen or ETDRS; best corrected
- **Slit-lamp examination:** Classifies type and severity
- **Glare test:** Evaluates real-world visual function
- **Retinoscopy / refraction:** Documents myopic shift
- **Pupil dilation:** Allows complete cataract and fundus evaluation

### Cataract surgery: phacoemulsification

**Standard technique:**
1. Topical anesthesia (proparacaine/tetracaine drops) or peribulbar
2. Clear corneal incision 2.2-2.8 mm (temporal)
3. **Continuous curvilinear capsulorhexis (CCC):** Circular opening in the anterior capsule
4. **Hydrodissection:** Fluid injection to separate nucleus from cortex
5. **Phacoemulsification:** Ultrasonic probe fragments and aspirates the nucleus
6. Aspiration of residual cortex
7. Foldable IOL implantation into the capsular bag
8. Wound hydration (self-sealing, usually no sutures)

**Postoperative recovery:**
- Drop regimen: Antibiotic (moxifloxacin) + anti-inflammatory (prednisolone or NSAID) for 4 weeks
- Eye shield at bedtime for 1 week
- Restrictions: No rubbing eye, avoid pools, no lifting >5 kg for 2-4 weeks
- Final refraction at 4-6 weeks (for glasses prescription if needed)`,
      keyTerms: [
        {
          term: 'proteinas cristalinas / crystallin proteins',
          definition:
            'Proteinas estructurales del cristalino (familias alfa, beta, gamma) que mantienen la transparencia; su aglomeracion causa opacidad. | Structural proteins of the lens (alpha, beta, gamma families) that maintain transparency; their aggregation causes opacity.',
        },
        {
          term: 'facoemulsificacion / phacoemulsification',
          definition:
            'Tecnica quirurgica estandar para cataratas que utiliza ultrasonido para fragmentar el nucleo del cristalino a traves de una incision pequena. | Standard cataract surgery technique using ultrasound to fragment the lens nucleus through a small incision.',
          pronunciation: 'fah-koh-eh-mul-see-fee-kah-SYON / FAK-oh-ee-mul-sih-fih-KAY-shun',
        },
        {
          term: 'capsulorrexis curvilinea continua (CCC)',
          definition:
            'Abertura circular realizada en la capsula anterior del cristalino durante la cirugia de cataratas; paso critico que permite la extraccion segura del nucleo. | Circular opening made in the anterior lens capsule during cataract surgery; critical step allowing safe nucleus extraction.',
        },
        {
          term: 'catarata subcapsular posterior (CSP) / posterior subcapsular cataract (PSC)',
          definition:
            'Tipo de catarata en la superficie posterior del cristalino; asociada con esteroides y diabetes; afecta vision de cerca y causa deslumbramiento. | Type of cataract on the posterior surface of the lens; associated with steroids and diabetes; affects near vision and causes glare.',
        },
        {
          term: 'via del poliol / polyol pathway',
          definition:
            'Via metabolica que convierte glucosa en sorbitol via aldosa reductasa; la acumulacion de sorbitol en el cristalino diabetico causa inflamacion osmotica y catarata. | Metabolic pathway converting glucose to sorbitol via aldose reductase; sorbitol accumulation in the diabetic lens causes osmotic swelling and cataract.',
        },
        {
          term: 'segunda vista / second sight',
          definition:
            'Mejoria temporal de la vision de cerca en cataratas nucleares debido al cambio miopico; no representa mejoria real de la enfermedad. | Temporary improvement in near vision in nuclear cataracts due to myopic shift; does not represent real disease improvement.',
        },
      ],
      analogies: [
        'Los tres tipos de catarata son como diferentes formas en que una ventana se empaña: la nuclear es como un empanamiento general amarillento, la cortical es como escarcha en los bordes, y la subcapsular posterior es como una mancha justo en el centro. | The three cataract types are like different ways a window fogs: nuclear is like general yellowish fogging, cortical is like frost at the edges, and posterior subcapsular is like a smudge right in the center.',
        'La facoemulsificacion es como usar un pequeno martillo vibrador dentro de una bolsa para romper una piedra en pedacitos y aspirarlos -- todo a traves de un agujero diminuto. | Phacoemulsification is like using a small vibrating hammer inside a bag to break a stone into tiny pieces and suction them out -- all through a tiny hole.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La cataractogenesis involucra modificaciones postraduccionales de proteinas cristalinas, saturacion de la capacidad chaperona de alfa-cristalina, y formacion de agregados que dispersan la luz; la tecnica quirurgica requiere comprension de biometria ocular y calculo del poder del LIO. | Cataractogenesis involves post-translational modifications of crystallin proteins, saturation of alpha-crystallin chaperone capacity, and formation of light-scattering aggregates; surgical technique requires understanding of ocular biometry and IOL power calculation.',
      explanation: `## Explicacion

### Bioquimica del cristalino y cataractogenesis

**Composicion del cristalino:**
El cristalino tiene la mayor concentracion de proteinas de cualquier tejido (~35%). Tres familias de cristalinas:

| Cristalina | Peso molecular | Funcion |
|-----------|----------------|---------|
| Alfa (alfa-A, alfa-B) | 800 kDa oligomero | Chaperona molecular; previene agregacion proteica |
| Beta | 50-200 kDa | Estructural; indice refractivo intermedio |
| Gamma | 20 kDa monomero | Mayor indice refractivo; concentrada en nucleo |

**Via de la cataractogenesis:**
1. Edad, UV, estres oxidativo causan modificaciones postraduccionales (oxidacion, deamidacion, truncamiento, glicacion)
2. Las proteinas modificadas se pliegan incorrectamente
3. La capacidad chaperona de la alfa-cristalina se satura
4. Los agregados exceden la longitud de onda de la luz visible (~400-700 nm)
5. La dispersion de luz produce opacidad del cristalino

**Vias metabolicas en catarata diabetica:**
- **Via del poliol:** Glucosa -> sorbitol (aldosa reductasa) -> fructosa (sorbitol deshidrogenasa)
  - Sorbitol no puede salir de las celulas del cristalino
  - Acumulacion osmotica -> entrada de agua -> inflamacion y rotura de fibras
- **Via de glicacion avanzada (AGE):** Glucosa reacciona no enzimaticamente con proteinas cristalinas
  - Entrecruzamiento proteico -> agregados insolubles
  - Generacion de radicales libres

### Biometria ocular y calculo de LIO

**Medicion biometrica:**
- **Interferometria de coherencia optica parcial** (IOLMaster 700, Lenstar):
  - Longitud axial (LA): Parametro mas critico; 0.1 mm de error = ~0.27 D de error refractivo
  - Queratometria (K): Radio de curvatura corneal anterior
  - Profundidad de camara anterior (PCA)
  - Grosor del cristalino (GC)
  - Distancia blanco a blanco (WTW)

**Formulas de calculo de LIO:**

| Formula | Tipo | Ventaja |
|---------|------|---------|
| SRK/T | Teorica 3ra generacion | Historicamente confiable |
| Holladay 1 | Teorica | Buena para ojos normales |
| Haigis | Teorica con 3 constantes | Mejor para ojos cortos y largos |
| Barrett Universal II | Teorica avanzada (trazado de rayos) | Mas precisa en rango amplio de LA y K |
| Hill-RBF | Inteligencia artificial | Basada en datos de miles de ojos |
| Kane | Teorica + IA | Excelente precision general |

**Problemas especiales:**
- Ojos post-LASIK/PRK miopico: La queratometria estandar sobreestima el poder corneal -> hipometropia postoperatoria
- Formulas especiales: Barrett True-K, Haigis-L, Shammas-PHL

### Tecnica de facoemulsificacion en detalle

**Nucleofractis: tecnicas principales**
- **Dividir y conquistar (divide and conquer):** Surcos cruzados dividen nucleo en 4 cuadrantes
- **Phaco chop:** Instrumento auxiliar fractura el nucleo directamente -- menos energia ultrasonica
- **Stop and chop:** Combinacion de las dos anteriores

**Parametros criticos:**
- Frecuencia ultrasonica: 28-40 kHz; modos longitudinal o torsional (Ozil)
- Tiempo efectivo de phaco (EPT): Metrica de energia ultrasonica total; menor EPT = menos dano endotelial
- Potencia de aspiracion, vacio, y flujo de irrigacion se ajustan segun la densidad del nucleo

**Sindrome de iris flacido intraoperatorio (IFIS):**
- Asociado con tamsulosina (bloqueador alfa-1A para hiperplasia prostatica)
- Triada: iris flacido que ondula, prolapso iridiano, miosis intraoperatoria progresiva
- Manejo: Anillos de expansion (Malyugin ring), ganchos de iris, viscoelastico dispersivo

### Complicaciones quirurgicas

| Complicacion | Frecuencia | Manejo |
|-------------|-----------|--------|
| Ruptura de capsula posterior | 1-2% | Vitrectomia anterior; LIO en sulcus o fijado a esclera |
| Endoftalmitis | 1:3000-1:6000 | Inyeccion intravitrea de antibioticos (vancomicina + ceftazidima); vitrectomia |
| Edema macular cistoide (EMC) | 1-2% | AINE topicos; esteroides topicos; inyeccion periocular |
| Opacificacion de capsula posterior (OCP) | 20-40% a 5 anos | Capsulotomia YAG laser |
| Desprendimiento de retina | 0.5-1% a largo plazo | Cirugia vitreoretiniana |
| Endoftalmitis toxica (TASS) | Rara | Esteroides intensivos; no antibioticos |
| Dislocacion de LIO | <1% | Reposicion o intercambio de LIO |

---
## Explanation

### Lens biochemistry and cataractogenesis

**Lens composition:**
The lens has the highest protein concentration of any tissue (~35%). Three crystallin families:

| Crystallin | Molecular Weight | Function |
|-----------|-----------------|----------|
| Alpha (alpha-A, alpha-B) | 800 kDa oligomer | Molecular chaperone; prevents protein aggregation |
| Beta | 50-200 kDa | Structural; intermediate refractive index |
| Gamma | 20 kDa monomer | Highest refractive index; concentrated in nucleus |

**Cataractogenesis pathway:**
1. Age, UV, oxidative stress cause post-translational modifications (oxidation, deamidation, truncation, glycation)
2. Modified proteins misfold
3. Alpha-crystallin chaperone capacity becomes saturated
4. Aggregates exceed the wavelength of visible light (~400-700 nm)
5. Light scattering produces lens opacity

**Metabolic pathways in diabetic cataract:**
- **Polyol pathway:** Glucose -> sorbitol (aldose reductase) -> fructose (sorbitol dehydrogenase)
  - Sorbitol cannot exit lens cells
  - Osmotic accumulation -> water influx -> fiber swelling and rupture
- **Advanced glycation end-product (AGE) pathway:** Glucose reacts non-enzymatically with crystallin proteins
  - Protein cross-linking -> insoluble aggregates
  - Free radical generation

### Ocular biometry and IOL calculation

**Biometric measurement:**
- **Partial coherence interferometry** (IOLMaster 700, Lenstar):
  - Axial length (AL): Most critical parameter; 0.1 mm error = ~0.27 D refractive error
  - Keratometry (K): Anterior corneal curvature radius
  - Anterior chamber depth (ACD)
  - Lens thickness (LT)
  - White-to-white distance (WTW)

**IOL calculation formulas:**

| Formula | Type | Advantage |
|---------|------|-----------|
| SRK/T | 3rd generation theoretical | Historically reliable |
| Holladay 1 | Theoretical | Good for normal eyes |
| Haigis | Theoretical with 3 constants | Better for short and long eyes |
| Barrett Universal II | Advanced theoretical (ray tracing) | Most accurate across wide AL and K range |
| Hill-RBF | Artificial intelligence | Based on data from thousands of eyes |
| Kane | Theoretical + AI | Excellent overall accuracy |

**Special problems:**
- Post-myopic LASIK/PRK eyes: Standard keratometry overestimates corneal power -> postoperative hyperopia
- Special formulas: Barrett True-K, Haigis-L, Shammas-PHL`,
      keyTerms: [
        {
          term: 'alfa-cristalina / alpha-crystallin',
          definition:
            'Chaperona molecular del cristalino que previene la agregacion de proteinas mal plegadas; su saturacion es un paso clave en la cataractogenesis. | Lens molecular chaperone that prevents misfolded protein aggregation; its saturation is a key step in cataractogenesis.',
        },
        {
          term: 'longitud axial (LA) / axial length (AL)',
          definition:
            'Distancia desde la superficie corneal anterior hasta la retina; parametro mas critico para el calculo de LIO; un error de 0.1 mm equivale a ~0.27 D de error refractivo. | Distance from the anterior corneal surface to the retina; most critical parameter for IOL calculation; a 0.1 mm error equals ~0.27 D refractive error.',
        },
        {
          term: 'Barrett Universal II',
          definition:
            'Formula moderna de calculo de LIO basada en trazado de rayos teorico; considerada la mas precisa en un rango amplio de longitudes axiales y queratometrias. | Modern IOL calculation formula based on theoretical ray tracing; considered the most accurate across a wide range of axial lengths and keratometries.',
        },
        {
          term: 'IFIS (sindrome de iris flacido intraoperatorio)',
          definition:
            'Complicacion intraoperatoria asociada con tamsulosina que causa iris flacido, prolapso iridiano y miosis progresiva; se maneja con anillos de expansion y viscoelastico. | Intraoperative complication associated with tamsulosin causing floppy iris, iris prolapse, and progressive miosis; managed with expansion rings and viscoelastic.',
          pronunciation: 'AI-fis',
        },
        {
          term: 'opacificacion de capsula posterior (OCP) / posterior capsule opacification (PCO)',
          definition:
            'Opacificacion de la capsula posterior por migracion y proliferacion de celulas epiteliales residuales; ocurre en 20-40% de pacientes; se trata con capsulotomia YAG laser. | Opacification of the posterior capsule by migration and proliferation of residual epithelial cells; occurs in 20-40% of patients; treated with YAG laser capsulotomy.',
        },
        {
          term: 'tiempo efectivo de phaco (EPT) / effective phaco time',
          definition:
            'Metrica de la energia ultrasonica total entregada durante la facoemulsificacion; un EPT menor indica menos estres al endotelio corneal. | Metric of total ultrasonic energy delivered during phacoemulsification; lower EPT indicates less corneal endothelial stress.',
        },
      ],
      clinicalNotes:
        'Nota clinica: (1) Siempre preguntar por uso de tamsulosina u otros bloqueadores alfa antes de cirugia de cataratas -- el IFIS puede complicar significativamente el procedimiento incluso anos despues de suspender el medicamento. (2) En pacientes con catarata densa brunescente, el phaco chop es preferible al divide-and-conquer ya que requiere menos energia ultrasonica. (3) Los ojos post-LASIK miopico son la situacion mas desafiante para el calculo de LIO -- usar al menos 2-3 formulas especiales y promediar. (4) La endoftalmitis postoperatoria es la complicacion mas temida; el uso de cefuroxima intracameral al final de la cirugia ha reducido la incidencia 5-6 veces (estudio ESCRS). | Clinical note: (1) Always ask about tamsulosin or other alpha-blocker use before cataract surgery -- IFIS can significantly complicate the procedure even years after stopping the medication. (2) In patients with dense brunescent cataract, phaco chop is preferable to divide-and-conquer as it requires less ultrasonic energy. (3) Post-myopic LASIK eyes are the most challenging situation for IOL calculation -- use at least 2-3 special formulas and average results. (4) Postoperative endophthalmitis is the most feared complication; intracameral cefuroxime at the end of surgery has reduced incidence 5-6 fold (ESCRS study).',
    },

    4: {
      level: 4,
      summary:
        'El manejo avanzado de cataratas integra cirugia asistida por laser de femtosegundo, seleccion de LIO premium (multifocal, EDOF, torico, ajustable por luz), calculo de LIO en ojos complejos y manejo de complicaciones intra y postoperatorias. | Advanced cataract management integrates femtosecond laser-assisted surgery, premium IOL selection (multifocal, EDOF, toric, light-adjustable), IOL calculation in complex eyes, and intra- and postoperative complication management.',
      explanation: `## Explicacion

### Cirugia de cataratas asistida por laser de femtosegundo (FLACS)

**Componentes realizados por el laser:**
1. **Incisiones corneales:** Precision micrometrica; geometria personalizable
2. **Capsulotomia:** Mas circular, centrada y reproducible que la CCC manual
3. **Pre-fragmentacion del nucleo:** Reduce energia ultrasonica necesaria para facoemulsificacion
4. **Queratotomias arcuatas:** Correccion de astigmatismo corneal durante la cirugia

**Evidencia clinica:**
- Ensayos controlados (FEMCAT, FACT): Resultados visuales comparables a phaco estandar
- Capsulotomia laser tiene menor tasa de desgarros que CCC manual
- Costo mayor limita adopcion generalizada
- Beneficio potencial en casos complejos: Cataratas densas, distrofia de Fuchs, subluxacion del cristalino

### LIO premium: opciones y seleccion

| Tipo de LIO | Principio optico | Candidato ideal | Limitacion |
|-------------|-----------------|-----------------|-----------|
| Monofocal | Punto focal unico | Estandar; predecible | Dependencia de anteojos para cerca o lejos |
| Monofocal plus (Vivity) | Optica no difractiva de rango extendido | Tolerante a imperfecciones | Halo/glare minimo; vision cercana limitada |
| Multifocal | Anillos difractivos o refractivos | Motivado, bajo astigmatismo, sin patologia macular | Halos, reduccion de sensibilidad al contraste |
| Profundidad de foco extendida (EDOF) | Rango focal elongado | Tareas intermedias + distancia | Cerca puede requerir lectores |
| Torico | Correccion cilindrica | Astigmatismo corneal >1.0 D | Desalineacion rotacional degrada correccion |
| Ajustable por luz (RxSight LAL) | Polimero UV-ajustable | Post-refractiva, expectativas exigentes | Requiere proteccion UV hasta tratamientos de fijacion |

**Seleccion del paciente para LIO premium:**
- OCT macular normal obligatoria (la patologia macular compromete LIO multifocal)
- Astigmatismo corneal: Si >1.0 D, considerar torico o combinar con queratotomias arcuatas
- Ojo seco: Tratar antes de cirugia (afecta queratometria y resultado refractivo)
- Expectativas del paciente: Discusion detallada sobre compromisos opticos

### Calculo de LIO en ojos complejos

**Post-LASIK/PRK miopico:**
- Problema: K estandar sobreestima poder corneal -> LIO subdimensionado -> hipemetropia
- Soluciones:
  - Barrett True-K (si datos pre-LASIK disponibles)
  - Shammas-PHL (sin necesidad de datos pre-LASIK)
  - Haigis-L
  - Usar topografia total corneal (Pentacam) para potencia corneal real

**Ojos extremos:**
- LA < 22 mm (ojo corto): Holladay 2, Barrett, Kane -- la posicion efectiva del lente es critica
- LA > 26 mm (ojo largo): Barrett, Holladay 1 optimizada, SRK/T -- ajustar para errores sistematicos

**Post-queratoplastia:**
- Astigmatismo irregular y potencia corneal impredecible
- Usar queratometria central de Pentacam
- Considerar LIO ajustable por luz (RxSight)

### Manejo de complicaciones intraoperatorias

**Ruptura de capsula posterior (RCP):**
Complicacion mas temida de la facoemulsificacion (1-2% de casos)
1. Detener la facoemulsificacion inmediatamente
2. Inyectar viscoelastico para tamponar la ruptura
3. Vitrectomia anterior (remover cualquier vitreo que haya prolapso)
4. Opciones para LIO:
   - Si la CCC esta intacta y la RCP es pequena: LIO en saco capsular
   - Si la CCC esta intacta pero RCP grande: LIO en sulcus ciliar
   - Si sin soporte capsular: LIO fijado a esclera (Yamane sutureless) o LIO de camara anterior

**Complicaciones de la anestesia:**
- Perforacion del globo (anestesia retrobulbar/peribulbar): 1:10,000; emergencia quirurgica
- Toxicidad anestesica sistemica (rara con anestesia topica)
- Reaccion vasovagal

### Endoftalmitis postoperatoria

**Presentacion:** Dolor, vision reducida, hipopion, vitritis a los 2-7 dias postoperatorios

**Protocolo basado en el Endophthalmitis Vitrectomy Study (EVS):**
- Si agudeza visual = percepcion de luz: Vitrectomia + inyeccion intravitrea (vancomicina + ceftazidima)
- Si agudeza visual > percepcion de luz: Inyeccion intravitrea (tap + inject); vitrectomia si no mejora en 24-48h

**Prevencion:**
- Povidona yodada periocular 5% preoperatoria (medida mas efectiva)
- Cefuroxima intracameral al final de cirugia (estudio ESCRS: reduccion 5-6x)
- Moxifloxacino topico perioperatorio

---
## Explanation

### Femtosecond laser-assisted cataract surgery (FLACS)

**Components performed by laser:**
1. **Corneal incisions:** Micrometer precision; customizable geometry
2. **Capsulotomy:** More circular, centered, and reproducible than manual CCC
3. **Nucleus pre-fragmentation:** Reduces ultrasonic energy needed for phacoemulsification
4. **Arcuate keratotomies:** Astigmatism correction during surgery

**Clinical evidence:**
- Controlled trials (FEMCAT, FACT): Visual outcomes comparable to standard phaco
- Laser capsulotomy has lower tear rate than manual CCC
- Higher cost limits widespread adoption
- Potential benefit in complex cases: Dense cataracts, Fuchs dystrophy, lens subluxation

### Premium IOL selection

| IOL Type | Optical Principle | Ideal Candidate | Limitation |
|---------|------------------|-----------------|-----------|
| Monofocal | Single focal point | Standard; predictable | Spectacle-dependent for near or distance |
| Monofocal plus (Vivity) | Non-diffractive extended range | Tolerant of imperfections | Minimal halo/glare; limited near vision |
| Multifocal | Diffractive or refractive rings | Motivated, low astigmatism, no macular pathology | Halos, reduced contrast sensitivity |
| Extended depth of focus (EDOF) | Elongated focal range | Intermediate + distance tasks | Near may require readers |
| Toric | Cylindrical correction | Corneal astigmatism >1.0 D | Rotational misalignment degrades correction |
| Light-adjustable (RxSight LAL) | UV-adjustable polymer | Post-refractive, demanding expectations | Requires UV protection until lock-in treatments |

### IOL calculation in complex eyes

**Post-myopic LASIK/PRK:**
- Problem: Standard K overestimates corneal power -> underpowered IOL -> hyperopia
- Solutions: Barrett True-K, Shammas-PHL, Haigis-L, total corneal topography (Pentacam)

**Extreme eyes:**
- AL < 22 mm (short eye): Holladay 2, Barrett, Kane -- effective lens position is critical
- AL > 26 mm (long eye): Barrett, optimized Holladay 1, SRK/T -- adjust for systematic errors

### Posterior capsule rupture management

Most feared phacoemulsification complication (1-2% of cases):
1. Stop phacoemulsification immediately
2. Inject viscoelastic to tamponade the rupture
3. Anterior vitrectomy (remove any prolapsed vitreous)
4. IOL options based on capsular support remaining`,
      keyTerms: [
        {
          term: 'FLACS (cirugia de cataratas asistida por femtosegundo)',
          definition:
            'Tecnica que utiliza laser de femtosegundo para incisiones corneales, capsulotomia y pre-fragmentacion del nucleo con precision micrometrica; capsulotomia mas reproducible que la manual. | Technique using femtosecond laser for corneal incisions, capsulotomy, and nucleus pre-fragmentation with micrometer precision; capsulotomy more reproducible than manual.',
        },
        {
          term: 'LIO ajustable por luz (RxSight LAL) / light-adjustable lens',
          definition:
            'LIO de polimero fotosensible cuyo poder refractivo puede ajustarse postoperatoriamente con tratamientos UV; permite personalizacion refractiva despues de la cirugia. | Photosensitive polymer IOL whose refractive power can be adjusted postoperatively with UV treatments; allows refractive customization after surgery.',
        },
        {
          term: 'endoftalmitis / endophthalmitis',
          definition:
            'Infeccion intraocular devastadora; complicacion mas temida de la cirugia de cataratas; se presenta con dolor, vision reducida e hipopion; tratada con inyeccion intravitrea de antibioticos y posible vitrectomia. | Devastating intraocular infection; most feared complication of cataract surgery; presents with pain, reduced vision, and hypopyon; treated with intravitreal antibiotic injection and possible vitrectomy.',
        },
        {
          term: 'fijacion escleral de Yamane / Yamane sutureless scleral fixation',
          definition:
            'Tecnica moderna de fijacion de LIO a la esclera sin suturas usando cauterizacion de los hapticos; util cuando no hay soporte capsular. | Modern sutureless IOL fixation technique to the sclera using haptic cauterization; useful when no capsular support exists.',
        },
        {
          term: 'estudio ESCRS / ESCRS study',
          definition:
            'Ensayo clinico europeo que demostro que la cefuroxima intracameral al final de la cirugia de cataratas reduce la incidencia de endoftalmitis 5-6 veces. | European clinical trial demonstrating intracameral cefuroxime at the end of cataract surgery reduces endophthalmitis incidence 5-6 fold.',
        },
        {
          term: 'TASS (sindrome toxico del segmento anterior)',
          definition:
            'Inflamacion esteril aguda del segmento anterior dentro de 24 horas de cirugia, causada por sustancias toxicas (detergentes, viscoelastico desnaturalizado); se trata con esteroides intensivos. | Acute sterile anterior segment inflammation within 24 hours of surgery caused by toxic substances (detergents, denatured viscoelastic); treated with intensive steroids.',
        },
      ],
      clinicalNotes:
        'Perlas clinicas avanzadas: (1) La tecnica de Yamane para fijacion escleral de LIO sin suturas se ha convertido en el estandar para manejo de ojos sin soporte capsular -- los hapticos se externalizan a traves de tuneles esclerales de calibre 30 y se cauterizan para crear flanges de retencion. (2) Diferenciar TASS de endoftalmitis es critico: TASS aparece en 12-24h con inflamacion difusa limbo-a-limbo pero sin vitritis; endoftalmitis tipicamente a los 3-7 dias con dolor progresivo e hipopion. TASS se trata con esteroides; endoftalmitis con antibioticos intravítreos. (3) En FLACS, la capsulotomia laser puede causar adherencia de la capsula al cortex ("capsular block"), dificultando la hidrodiseccion -- anticipar esto. (4) Para LIO multifocal, la superficie ocular debe optimizarse antes de biometria y cirugia; DM2 significativo puede invalidar mediciones queratometricas. | Advanced clinical pearls: (1) Yamane sutureless scleral IOL fixation has become the standard for eyes without capsular support -- haptics are externalized through 30-gauge scleral tunnels and cauterized to create retention flanges. (2) Differentiating TASS from endophthalmitis is critical: TASS appears in 12-24h with diffuse limbus-to-limbus inflammation but no vitritis; endophthalmitis typically at 3-7 days with progressive pain and hypopyon. TASS is treated with steroids; endophthalmitis with intravitreal antibiotics. (3) In FLACS, the laser capsulotomy may cause capsule-cortex adhesion ("capsular block"), making hydrodissection difficult -- anticipate this. (4) For multifocal IOLs, ocular surface must be optimized before biometry and surgery; significant DED can invalidate keratometric measurements.',
    },

    5: {
      level: 5,
      summary:
        'El horizonte de la cirugia de cataratas incluye prevencion farmacologica (lanosterol, oxysteroles), LIO acomodativos de nueva generacion, cirugia robotica asistida, biosensores integrados en LIO, y terapias genicas para restaurar la transparencia del cristalino. | The horizon of cataract surgery includes pharmacological prevention (lanosterol, oxysterols), next-generation accommodating IOLs, robot-assisted surgery, IOL-integrated biosensors, and gene therapies to restore lens transparency.',
      explanation: `## Explicacion

### Prevencion farmacologica de cataratas

**Lanosterol y oxysteroles:**
- Lanosterol es un intermediario en la sintesis de colesterol presente normalmente en el cristalino
- Estudios en animales (Zhao et al., Nature 2015): Gotas de lanosterol disolvieron cataratas in vitro e in vivo en modelos caninos
- Mecanismo propuesto: Lanosterol se intercala entre agregados de cristalinas y restaura la solubilidad proteica
- 25-hydroxycholesterol: Otro oxysterol con actividad anti-agregacion
- Estado actual: Ensayos clinicos Fase I/II en humanos; resultados preliminares prometedores pero eficacia limitada en cataratas densas

**Inhibidores de aldosa reductasa:**
- Objetivo: Prevenir catarata diabetica bloqueando la conversion de glucosa a sorbitol
- Resultados clinicos decepcionantes (tolrestat, sorbinil); efectos adversos
- Epalrestat: Unico inhibidor comercializado (Japon); evidencia de retraso en catarata diabetica

**Antioxidantes:**
- N-acetilcarnosina (NAC): Comercializada como gotas "anti-catarata"; estudios pequenos en Rusia; sin validacion en ensayos grandes
- Pirenoxina: Quinoide que inhibe la glicacion de cristalinas; disponible en Asia; evidencia debil

### LIO acomodativos de nueva generacion

**El desafio de la acomodacion:**
- La presbicia resulta de la perdida de elasticidad del cristalino y cambios en el musculo ciliar
- Restaurar la acomodacion verdadera requiere que el LIO cambie de forma o posicion en respuesta a la contraccion ciliar

| LIO acomodativo | Mecanismo | Estado |
|-----------------|-----------|--------|
| Crystalens (Bausch & Lomb) | Movimiento anteroposterior de optica monofocal | Aprobado FDA; acomodacion limitada (~1 D) |
| IC-8 Apthera (AcuFocus) | Optica de apertura pequena (pinhole) | Aprobado; extiende profundidad de foco, no verdadera acomodacion |
| FluidVision (Alcon) | Fluido de silicona se redistribuye con contraccion ciliar | Fase III; prometedor (~3 D de acomodacion) |
| Juvene (LensGen) | Lente modular de 2 elementos con fluido | Fase II; diseno de cambio de curvatura |
| Atia Vision | Optica activa basada en fluidos + zona de respuesta haptica | Preclínico avanzado |

### Cirugia de cataratas robotica y asistida por IA

**Sistemas roboticos:**
- PRECEYES (Sistema de Cirugia Ocular Robotica): Robot telemanipulado para cirugia vitreoretiniana y potencialmente cataratas
- Componentes: Sensor de posicion, control de movimiento con supresion de temblor, retroalimentacion de fuerza
- Ventajas potenciales: Precision subhumana, eliminacion del temblor fisiologico, estandarizacion

**IA en cirugia de cataratas:**
- Reconocimiento de fases quirurgicas en tiempo real (CNN analizando video intraoperatorio)
- Prediccion de complicaciones basada en parametros instrumentales
- Asistencia al cirujano en formacion: Alertas de desviacion del plan quirurgico
- DeepMind/Moorfields: Modelo de IA para prediccion de resultados post-cataratas basado en biometria y variables clinicas

### Biosensores integrados en LIO

**Concepto:** LIO inteligentes con sensores miniaturizados para monitoreo continuo

**Tecnologias en desarrollo:**
- **Sensores de PIO:** Sensor capacitivo o piezoresistivo integrado en el LIO; monitoreo continuo de presion intraocular para pacientes con glaucoma
- **Sensor de glucosa:** Medicion de glucosa en humor acuoso como proxy de glucemia; potencial para monitoreo no invasivo en diabeticos
- **Comunicacion inalambrica:** NFC o Bluetooth de ultra baja energia para transmision de datos a dispositivo externo
- Estado: Mayormente preclínico/prototipos; desafios de biocompatibilidad, alimentacion energetica y miniaturizacion

### Terapia genica y regeneracion del cristalino

**Regeneracion a partir de celulas madre del cristalino:**
- Lin et al. (Nature 2016): CCC minimizada preservando celulas madre epiteliales del cristalino
- En ninos con catarata congenita, las celulas regeneraron un cristalino funcional en 3 meses
- Limitaciones: Solo demostrado en pediatricos; transparencia y poder refractivo suboptimos
- Investigacion activa en reprogramacion de celulas epiteliales adultas

**Terapia genica:**
- Vectores AAV para entregar alfa-cristalina funcional a celulas del cristalino
- Objetivo: Restaurar capacidad chaperona para prevenir agregacion
- CRISPR-Cas9: Correccion de mutaciones en cristalinas asociadas con cataratas congenitas hereditarias
- Estado: Preclínico; demostrado en modelos murinos

### Epidemiologia global y acceso a cirugia

**Carga global:**
- Las cataratas son la **primera causa de ceguera reversible** a nivel mundial
- 20 millones de personas ciegas por cataratas; 65 millones con discapacidad visual
- Mayor carga en paises de ingresos bajos y medios (Africa subsahariana, sur de Asia)

**Tasa de cirugia de cataratas (CSR):**
- Paises de altos ingresos: >5,000-10,000 cirugias por millon por ano
- Africa subsahariana: 200-500 cirugias por millon por ano
- Meta de la OMS Vision 2020: Eliminar la ceguera evitable por cataratas

**Innovaciones para acceso:**
- Tecnica de incision pequena manual (MSICS): Alternativa de bajo costo a facoemulsificacion; no requiere equipo de ultrasonido
- LIO acrylicos plegables de bajo costo (Aurolab, India): <$3 USD por LIO
- Clinicas quirurgicas moviles: Aravind Eye Care System como modelo

---
## Explanation

### Pharmacological cataract prevention

**Lanosterol and oxysterols:**
- Lanosterol is a cholesterol synthesis intermediate normally present in the lens
- Animal studies (Zhao et al., Nature 2015): Lanosterol drops dissolved cataracts in vitro and in vivo in canine models
- Proposed mechanism: Lanosterol intercalates between crystallin aggregates and restores protein solubility
- 25-hydroxycholesterol: Another oxysterol with anti-aggregation activity
- Current status: Phase I/II human trials; preliminary results promising but limited efficacy in dense cataracts

### Next-generation accommodating IOLs

The challenge of accommodation: Presbyopia results from loss of lens elasticity and ciliary muscle changes. Restoring true accommodation requires the IOL to change shape or position in response to ciliary contraction.

| Accommodating IOL | Mechanism | Status |
|-------------------|-----------|--------|
| Crystalens | Anteroposterior movement of monofocal optic | FDA approved; limited accommodation (~1 D) |
| IC-8 Apthera | Small-aperture (pinhole) optic | Approved; extends depth of focus, not true accommodation |
| FluidVision | Silicone fluid redistributes with ciliary contraction | Phase III; promising (~3 D accommodation) |
| Juvene (LensGen) | Modular 2-element lens with fluid | Phase II; shape-changing design |

### Robotic and AI-assisted cataract surgery

- PRECEYES robotic system: Telemanipulated robot for ocular surgery with tremor suppression
- AI surgical phase recognition analyzing intraoperative video in real-time
- Complication prediction based on instrument parameters
- DeepMind/Moorfields: AI model for post-cataract outcome prediction

### IOL-integrated biosensors

Smart IOLs with miniaturized sensors for continuous monitoring:
- IOP sensors for glaucoma patients
- Glucose sensors measuring aqueous humor glucose as glycemia proxy
- Wireless communication (NFC/BLE) for data transmission
- Status: Mostly preclinical; biocompatibility and power challenges

### Gene therapy and lens regeneration

- Minimized CCC preserving lens epithelial stem cells regenerated functional lens in children with congenital cataract (Lin et al., Nature 2016)
- AAV vectors delivering functional alpha-crystallin to lens cells
- CRISPR-Cas9 correction of crystallin mutations in hereditary congenital cataracts
- Status: Preclinical; demonstrated in murine models`,
      keyTerms: [
        {
          term: 'lanosterol',
          definition:
            'Intermediario de la sintesis de colesterol que en modelos animales ha demostrado disolver agregados de cristalinas y restaurar la transparencia del cristalino; en ensayos clinicos tempranos como gotas anticatarata. | Cholesterol synthesis intermediate that in animal models has demonstrated dissolution of crystallin aggregates and restoration of lens transparency; in early clinical trials as anti-cataract drops.',
        },
        {
          term: 'FluidVision (LIO acomodativo)',
          definition:
            'LIO de nueva generacion con fluido de silicona que se redistribuye con la contraccion del musculo ciliar, logrando ~3 dioptrias de acomodacion verdadera en ensayos Fase III. | Next-generation IOL with silicone fluid that redistributes with ciliary muscle contraction, achieving ~3 diopters of true accommodation in Phase III trials.',
        },
        {
          term: 'MSICS (cirugia de catarata de incision pequena manual)',
          definition:
            'Tecnica quirurgica alternativa a la facoemulsificacion que no requiere equipo de ultrasonido; fundamental para cirugia de alto volumen en paises de bajos recursos. | Surgical technique alternative to phacoemulsification that does not require ultrasound equipment; fundamental for high-volume surgery in low-resource countries.',
          pronunciation: 'EM-siks',
        },
        {
          term: 'regeneracion del cristalino / lens regeneration',
          definition:
            'Tecnica experimental donde una capsulorrexis minimizada preserva celulas madre epiteliales del cristalino que regeneran un lente funcional; demostrada exitosamente en ninos con catarata congenita. | Experimental technique where a minimized capsulorhexis preserves lens epithelial stem cells that regenerate a functional lens; successfully demonstrated in children with congenital cataract.',
        },
        {
          term: 'PRECEYES (sistema de cirugia ocular robotica)',
          definition:
            'Robot telemanipulado para cirugia ocular con supresion de temblor y precision subhumana; potencial para estandarizar y mejorar la seguridad quirurgica. | Telemanipulated robot for ocular surgery with tremor suppression and sub-human precision; potential to standardize and improve surgical safety.',
        },
        {
          term: 'tasa de cirugia de cataratas (CSR)',
          definition:
            'Numero de cirugias de cataratas realizadas por millon de habitantes por ano; indicador clave de acceso a servicios de salud visual. Paises de altos ingresos: >5000; Africa subsahariana: 200-500. | Number of cataract surgeries performed per million population per year; key indicator of visual health service access. High-income countries: >5000; sub-Saharan Africa: 200-500.',
        },
      ],
      clinicalNotes:
        'Perlas de nivel experto: (1) La regeneracion del cristalino a partir de celulas madre endogenas (Lin et al., Nature 2016) fue demostrada solo en pacientes pediatricos con cataratas congenitas; la translacion a adultos enfrenta el desafio de la menor capacidad regenerativa de las celulas madre envejecidas. (2) El LIO FluidVision representa el avance mas prometedor en acomodacion verdadera -- a diferencia del Crystalens que solo proporciona ~1 D de pseudoacomodacion, el FluidVision ha demostrado ~3 D en ensayos clinicos. (3) MSICS produce resultados comparables a facoemulsificacion en cataratas duras (3-4+ nucleares) y es la tecnica preferida en programas de alto volumen en paises en desarrollo -- el Aravind Eye Care System realiza >600,000 cirugias/ano con MSICS a <$30 USD por caso. (4) Los sensores de PIO integrados en LIO podrian revolucionar el manejo de pacientes con glaucoma y cataratas, proporcionando datos de presion de 24 horas -- pero la miniaturizacion y alimentacion energetica siguen siendo desafios tecnologicos. (5) Las gotas de lanosterol son un concepto revolucionario pero la eficacia en cataratas maduras humanas permanece sin demostrar; la penetracion del farmaco al nucleo del cristalino es un obstaculo farmacocinetico significativo. | Expert-level pearls: (1) Lens regeneration from endogenous stem cells (Lin et al., Nature 2016) was demonstrated only in pediatric patients with congenital cataracts; translation to adults faces the challenge of reduced regenerative capacity of aged stem cells. (2) FluidVision IOL represents the most promising advance in true accommodation -- unlike Crystalens providing only ~1 D pseudoaccommodation, FluidVision has demonstrated ~3 D in clinical trials. (3) MSICS produces outcomes comparable to phacoemulsification in hard cataracts (3-4+ nuclear) and is the preferred technique in high-volume programs in developing countries -- Aravind Eye Care System performs >600,000 surgeries/year with MSICS at <$30 USD per case. (4) IOP sensors integrated into IOLs could revolutionize management of patients with both glaucoma and cataracts. (5) Lanosterol drops are a revolutionary concept but efficacy in mature human cataracts remains unproven.',
    },
  },

  media: [
    {
      id: 'cataract-types-diagram',
      type: 'diagram',
      filename: 'cataract-types-es.svg',
      title: 'Tipos de Cataratas / Types of Cataracts',
      description:
        'Diagrama mostrando cataratas nuclear esclerosa, cortical y subcapsular posterior / Diagram showing nuclear sclerotic, cortical, and posterior subcapsular cataracts',
    },
    {
      id: 'phacoemulsification-steps',
      type: 'diagram',
      filename: 'phacoemulsification-steps-es.svg',
      title: 'Pasos de la Facoemulsificacion / Phacoemulsification Steps',
      description:
        'Secuencia paso a paso del procedimiento de facoemulsificacion / Step-by-step sequence of the phacoemulsification procedure',
    },
    {
      id: 'iol-types-comparison',
      type: 'diagram',
      filename: 'iol-types-comparison-es.svg',
      title: 'Comparacion de Tipos de LIO / IOL Types Comparison',
      description:
        'Comparacion de principios opticos de LIO monofocal, multifocal, EDOF, torico y ajustable / Comparison of optical principles of monofocal, multifocal, EDOF, toric, and adjustable IOLs',
    },
  ],

  citations: [
    {
      id: 'ref-1',
      type: 'textbook',
      title: 'Lens and Cataract - Basic and Clinical Science Course (BCSC), Section 11',
      authors: ['American Academy of Ophthalmology'],
      source: 'American Academy of Ophthalmology',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'Cataract in the Adult Eye Preferred Practice Pattern',
      authors: ['American Academy of Ophthalmology'],
      source: 'Ophthalmology',
      url: 'https://doi.org/10.1016/j.ophtha.2021.12.006',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-3',
      type: 'article',
      title: 'Lanosterol reverses protein aggregation in cataracts',
      authors: ['Zhao, L.', 'Chen, X.J.', 'Zhu, J.'],
      source: 'Nature',
      url: 'https://doi.org/10.1038/nature14650',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-4',
      type: 'article',
      title: 'Prophylaxis of postoperative endophthalmitis following cataract surgery (ESCRS study)',
      authors: ['Barry, P.', 'Seal, D.V.', 'Gettinby, G.'],
      source: 'Journal of Cataract and Refractive Surgery',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    {
      targetId: 'ophthalmology-eye-anatomy',
      targetType: 'structure',
      relationship: 'related',
      label: 'Anatomia Ocular / Eye Anatomy',
    },
    {
      targetId: 'condition-glaucoma',
      targetType: 'condition',
      relationship: 'related',
      label: 'Glaucoma (MIGS combinado con cirugia de catarata)',
    },
    {
      targetId: 'condition-diabetic-retinopathy',
      targetType: 'condition',
      relationship: 'related',
      label: 'Retinopatia Diabetica / Diabetic Retinopathy (catarata diabetica)',
    },
    {
      targetId: 'endocrinology-diabetes',
      targetType: 'condition',
      relationship: 'related',
      label: 'Diabetes Mellitus (catarata por via del poliol)',
    },
  ],

  tags: {
    systems: ['visual'],
    topics: ['ophthalmology', 'surgery', 'pathology', 'pharmacology'],
    keywords: [
      'cataratas',
      'cataracts',
      'cristalino',
      'lens',
      'facoemulsificacion',
      'phacoemulsification',
      'LIO',
      'IOL',
      'cirugia de cataratas',
      'cataract surgery',
      'FLACS',
      'cristalinas',
      'crystallins',
      'endoftalmitis',
      'biometria ocular',
    ],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
