/**
 * Glaucoma - Oftalmología / Ophthalmology
 *
 * Contenido educativo bilingue (Espanol primero) sobre el glaucoma:
 * tipos, fisiopatologia, diagnostico y tratamiento.
 *
 * Bilingual educational content (Spanish-first) on glaucoma:
 * types, pathophysiology, diagnosis, and treatment.
 *
 * Five complexity levels from 8th-grade through MD/Professional.
 */

import { EducationalContent } from '../types';

export const glaucomaEs: EducationalContent = {
  id: 'condition-glaucoma',
  type: 'condition',
  name: 'Glaucoma',
  nameEs: 'Glaucoma',
  alternateNames: [
    'Open-Angle Glaucoma',
    'Angle-Closure Glaucoma',
    'Glaucoma de angulo abierto',
    'Glaucoma de angulo cerrado',
    'Glaucoma de tension normal',
    'Normal-Tension Glaucoma',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'El glaucoma es una enfermedad que dana el nervio que conecta el ojo con el cerebro, lo que puede causar perdida de la vision. | Glaucoma is a disease that damages the nerve connecting the eye to the brain, which can cause vision loss.',
      explanation: `## Explicacion

El glaucoma es una enfermedad de los ojos que dana el **nervio optico**, que es como un cable que lleva las imagenes desde el ojo hasta el cerebro. Cuando este nervio se dana, se pierde la vision poco a poco.

Dentro del ojo hay un liquido transparente llamado **humor acuoso** que mantiene el ojo sano y con su forma. Este liquido se produce constantemente y tambien se drena para mantener un equilibrio. Cuando el drenaje no funciona bien, la presion dentro del ojo sube, y esa presion alta puede danar el nervio optico.

**Tipos principales:**

- **Glaucoma de angulo abierto:** Es el mas comun. El drenaje se tapa lentamente, como un desague que se va obstruyendo poco a poco. No duele y la persona pierde la vision lateral (de los lados) sin darse cuenta.
- **Glaucoma de angulo cerrado:** Es menos comun pero mas peligroso. El drenaje se bloquea de repente, causando dolor fuerte en el ojo, vision borrosa, nauseas y halos alrededor de las luces. Es una emergencia medica.
- **Glaucoma de tension normal:** El nervio se dana aunque la presion del ojo este normal. Los medicos todavia estan investigando por que ocurre.

**Puntos importantes:**
- El glaucoma generalmente no causa dolor ni sintomas al principio
- Se pierde primero la vision de los lados (periferica)
- No se puede recuperar la vision perdida
- Los examenes regulares del ojo pueden detectarlo temprano
- El tratamiento con gotas, laser o cirugia puede detener el dano

---
## Explanation

Glaucoma is an eye disease that damages the **optic nerve**, which is like a cable that carries images from the eye to the brain. When this nerve is damaged, vision is gradually lost.

Inside the eye there is a clear fluid called **aqueous humor** that keeps the eye healthy and maintains its shape. This fluid is constantly produced and also drained to maintain balance. When drainage does not work properly, pressure inside the eye rises, and that high pressure can damage the optic nerve.

**Main types:**

- **Open-angle glaucoma:** The most common type. Drainage clogs slowly, like a drain gradually becoming blocked. It does not hurt and the person loses side vision without noticing.
- **Angle-closure glaucoma:** Less common but more dangerous. The drainage is suddenly blocked, causing severe eye pain, blurred vision, nausea, and halos around lights. It is a medical emergency.
- **Normal-tension glaucoma:** The nerve is damaged even though eye pressure is normal. Doctors are still researching why this happens.

**Key points:**
- Glaucoma usually causes no pain or symptoms early on
- Side (peripheral) vision is lost first
- Lost vision cannot be recovered
- Regular eye exams can detect it early
- Treatment with drops, laser, or surgery can stop the damage`,
      keyTerms: [
        {
          term: 'glaucoma',
          definition:
            'Enfermedad del ojo que dana el nervio optico y causa perdida de vision. | Eye disease that damages the optic nerve and causes vision loss.',
        },
        {
          term: 'nervio optico / optic nerve',
          definition:
            'El cable que lleva las imagenes del ojo al cerebro. | The cable that carries images from the eye to the brain.',
        },
        {
          term: 'humor acuoso / aqueous humor',
          definition:
            'Liquido transparente dentro del ojo que lo mantiene sano y con forma. | Clear fluid inside the eye that keeps it healthy and maintains its shape.',
        },
        {
          term: 'presion intraocular / intraocular pressure',
          definition:
            'La presion del liquido dentro del ojo; cuando es muy alta puede danar el nervio optico. | The pressure of fluid inside the eye; when too high it can damage the optic nerve.',
        },
        {
          term: 'vision periferica / peripheral vision',
          definition:
            'La vision de los lados, que es lo primero que se pierde con el glaucoma. | Side vision, which is the first thing lost with glaucoma.',
        },
      ],
      analogies: [
        'El glaucoma de angulo abierto es como un desague de banera que se tapa poco a poco con cabello -- el agua sube lentamente y no te das cuenta hasta que se desborda. | Open-angle glaucoma is like a bathtub drain slowly clogging with hair -- the water rises gradually and you do not notice until it overflows.',
        'El nervio optico es como un cable de electricidad con muchos hilos; el glaucoma va cortando los hilos uno por uno hasta que la conexion falla. | The optic nerve is like an electrical cable with many wires; glaucoma cuts the wires one by one until the connection fails.',
        'El glaucoma de angulo cerrado es como cerrar una llave de paso de golpe -- la presion sube rapidamente y causa una emergencia. | Angle-closure glaucoma is like suddenly shutting off a water valve -- pressure rises rapidly and causes an emergency.',
      ],
      examples: [
        'Un abuelo que empieza a tropezar con muebles o no ve los carros por los lados podria tener glaucoma sin saberlo. | A grandfather who starts bumping into furniture or does not see cars from the sides might have glaucoma without knowing it.',
        'Una mujer que va al oculista y le dicen que tiene la presion del ojo alta necesita seguimiento para prevenir el glaucoma. | A woman who goes to the eye doctor and is told she has high eye pressure needs follow-up to prevent glaucoma.',
        'Una persona que de repente siente dolor fuerte en un ojo con vision borrosa y nauseas podria tener glaucoma de angulo cerrado y debe ir al hospital de inmediato. | A person who suddenly feels severe pain in one eye with blurred vision and nausea may have angle-closure glaucoma and should go to the hospital immediately.',
      ],
      patientCounselingPoints: [
        'El glaucoma es silencioso -- no causa dolor ni sintomas al principio. Los examenes regulares del ojo son la unica manera de detectarlo temprano. | Glaucoma is silent -- it causes no pain or symptoms early on. Regular eye exams are the only way to detect it early.',
        'Si le recetan gotas para los ojos, uselas todos los dias aunque se sienta bien. Las gotas previenen mas dano pero no curan lo que ya se perdio. | If you are prescribed eye drops, use them every day even if you feel fine. Drops prevent further damage but do not cure what has already been lost.',
        'Si tiene familiares con glaucoma, usted tiene mas riesgo. Hagase examenes de los ojos desde los 40 anos. | If you have family members with glaucoma, you are at higher risk. Get eye exams starting at age 40.',
        'Si siente dolor fuerte y repentino en el ojo con vision borrosa, vaya a urgencias de inmediato -- podria ser glaucoma agudo. | If you feel sudden severe eye pain with blurred vision, go to the emergency room immediately -- it could be acute glaucoma.',
      ],
    },

    2: {
      level: 2,
      summary:
        'El glaucoma es un grupo de neuropatias opticas progresivas caracterizadas por la muerte de celulas ganglionares retinianas y excavacion del disco optico, generalmente asociadas con presion intraocular elevada. | Glaucoma is a group of progressive optic neuropathies characterized by retinal ganglion cell death and optic disc cupping, usually associated with elevated intraocular pressure.',
      explanation: `## Explicacion

El glaucoma no es una sola enfermedad sino un **grupo de enfermedades** que tienen en comun el dano progresivo del nervio optico. La presion intraocular (PIO) elevada es el principal factor de riesgo modificable, aunque no es el unico.

### Anatomia relevante

El ojo produce constantemente un liquido llamado **humor acuoso** en el cuerpo ciliar. Este liquido:
1. Se produce en la camara posterior (detras del iris)
2. Fluye a traves de la pupila hacia la camara anterior
3. Se drena por dos vias:
   - **Via trabecular (convencional):** A traves de la malla trabecular hacia el canal de Schlemm (90% del drenaje)
   - **Via uveoescleral:** A traves del musculo ciliar (10% del drenaje)

### Tipos de glaucoma

**Glaucoma primario de angulo abierto (GPAA):**
- Forma mas comun (90% de los casos)
- El angulo de drenaje esta abierto pero la malla trabecular no funciona bien
- Perdida lenta e indolora de la vision periferica
- PIO generalmente entre 21-30 mmHg (normal: 10-21 mmHg)
- Factores de riesgo: edad >60, raza afroamericana, antecedentes familiares, miopia alta, cornea delgada

**Glaucoma de angulo cerrado:**
- El iris bloquea fisicamente el acceso al angulo de drenaje
- **Agudo:** Dolor ocular severo, ojo rojo, vision borrosa, halos, nausea, PIO >40 mmHg -- emergencia
- **Cronico:** Cierre gradual del angulo, puede ser asintomatico
- Factores de riesgo: hipermetropia, ojo pequeno, edad avanzada, sexo femenino, ascendencia asiatica

**Glaucoma de tension normal:**
- Dano del nervio optico con PIO dentro del rango normal (<21 mmHg)
- Posibles mecanismos: vasoespasmo, presion arterial baja nocturna, susceptibilidad del nervio
- Mas comun en pacientes de ascendencia japonesa

### Diagnostico

- **Tonometria:** Mide la PIO (Goldmann de aplanacion es el estandar de oro)
- **Gonioscopia:** Examina el angulo de drenaje con un lente especial
- **Oftalmoscopia:** Evalua el disco optico (relacion copa/disco aumentada)
- **Campimetria (campo visual):** Detecta perdida de vision periferica
- **OCT:** Mide el grosor de la capa de fibras nerviosas retinianas

### Tratamiento

**Escalera terapeutica:**
1. **Gotas oftalmicas** (primera linea):
   - Analogos de prostaglandinas (latanoprost, travoprost) -- aumentan el drenaje uveoescleral
   - Betabloqueantes (timolol) -- reducen la produccion de humor acuoso
   - Alfa-agonistas (brimonidina) -- reducen produccion y aumentan drenaje
   - Inhibidores de la anhidrasa carbonica (dorzolamida) -- reducen produccion
2. **Laser:**
   - Trabeculoplastia selectiva (SLT) para angulo abierto
   - Iridotomia periferica para angulo cerrado
3. **Cirugia:**
   - Trabeculectomia, implantes de drenaje, MIGS

---
## Explanation

Glaucoma is not a single disease but a **group of diseases** that share progressive optic nerve damage. Elevated intraocular pressure (IOP) is the main modifiable risk factor, though not the only one.

### Relevant anatomy

The eye constantly produces a fluid called **aqueous humor** in the ciliary body. This fluid:
1. Is produced in the posterior chamber (behind the iris)
2. Flows through the pupil into the anterior chamber
3. Drains via two routes:
   - **Trabecular (conventional):** Through the trabecular meshwork into Schlemm canal (90% of drainage)
   - **Uveoscleral:** Through ciliary muscle interstitial spaces (10% of drainage)

### Types of glaucoma

**Primary open-angle glaucoma (POAG):**
- Most common form (90% of cases)
- The drainage angle is open but the trabecular meshwork does not function properly
- Slow, painless loss of peripheral vision
- IOP generally 21-30 mmHg (normal: 10-21 mmHg)
- Risk factors: age >60, African American descent, family history, high myopia, thin cornea

**Angle-closure glaucoma:**
- The iris physically blocks access to the drainage angle
- **Acute:** Severe eye pain, red eye, blurred vision, halos, nausea, IOP >40 mmHg -- emergency
- **Chronic:** Gradual angle closure, may be asymptomatic
- Risk factors: hyperopia, small eye, advanced age, female sex, Asian descent

**Normal-tension glaucoma:**
- Optic nerve damage with IOP within normal range (<21 mmHg)
- Possible mechanisms: vasospasm, nocturnal hypotension, nerve susceptibility
- More common in patients of Japanese descent

### Diagnosis

- **Tonometry:** Measures IOP (Goldmann applanation is the gold standard)
- **Gonioscopy:** Examines the drainage angle with a special lens
- **Ophthalmoscopy:** Evaluates the optic disc (increased cup-to-disc ratio)
- **Perimetry (visual field testing):** Detects peripheral vision loss
- **OCT:** Measures retinal nerve fiber layer thickness

### Treatment

**Treatment ladder:**
1. **Eye drops** (first-line):
   - Prostaglandin analogs (latanoprost, travoprost) -- increase uveoscleral outflow
   - Beta-blockers (timolol) -- decrease aqueous production
   - Alpha-agonists (brimonidine) -- decrease production and increase outflow
   - Carbonic anhydrase inhibitors (dorzolamide) -- decrease production
2. **Laser:**
   - Selective laser trabeculoplasty (SLT) for open-angle
   - Peripheral iridotomy for angle-closure
3. **Surgery:**
   - Trabeculectomy, drainage implants, MIGS`,
      keyTerms: [
        {
          term: 'presion intraocular (PIO) / intraocular pressure (IOP)',
          definition:
            'La presion del liquido dentro del ojo; el principal factor de riesgo modificable del glaucoma. Rango normal: 10-21 mmHg. | The pressure of fluid inside the eye; the main modifiable risk factor for glaucoma. Normal range: 10-21 mmHg.',
        },
        {
          term: 'malla trabecular / trabecular meshwork',
          definition:
            'Tejido esponjoso en el angulo de drenaje del ojo responsable del 90% del drenaje del humor acuoso; su disfuncion es central en el glaucoma de angulo abierto. | Sponge-like tissue at the drainage angle of the eye responsible for 90% of aqueous humor drainage; its dysfunction is central to open-angle glaucoma.',
        },
        {
          term: 'canal de Schlemm / Schlemm canal',
          definition:
            'Canal circular que recibe el humor acuoso de la malla trabecular y lo dirige hacia las venas episclerales. | Circular canal that receives aqueous humor from the trabecular meshwork and directs it to episcleral veins.',
        },
        {
          term: 'celulas ganglionares retinianas / retinal ganglion cells',
          definition:
            'Neuronas de la retina cuyos axones forman el nervio optico; su muerte progresiva causa la perdida de vision en el glaucoma. | Retinal neurons whose axons form the optic nerve; their progressive death causes vision loss in glaucoma.',
        },
        {
          term: 'relacion copa/disco / cup-to-disc ratio',
          definition:
            'Proporcion entre la excavacion central (copa) y el tamano total del disco optico; un aumento indica dano glaucomatoso. | Ratio between the central excavation (cup) and total optic disc size; an increase indicates glaucomatous damage.',
        },
        {
          term: 'tonometria de aplanacion / applanation tonometry',
          definition:
            'Metodo estandar de oro para medir la presion intraocular, basado en la fuerza necesaria para aplanar una area fija de la cornea. | Gold standard method for measuring intraocular pressure, based on the force needed to flatten a fixed area of the cornea.',
          pronunciation: 'toh-noh-MEH-tree-ah',
        },
        {
          term: 'iridotomia / iridotomy',
          definition:
            'Procedimiento laser que crea un orificio en el iris para permitir el flujo de humor acuoso y prevenir el cierre angular. | Laser procedure creating a hole in the iris to allow aqueous humor flow and prevent angle closure.',
        },
      ],
      analogies: [
        'La malla trabecular es como un colador de cocina -- con el tiempo se tapa con residuos y el liquido drena mas lento, aumentando la presion. | The trabecular meshwork is like a kitchen strainer -- over time it clogs with debris and fluid drains more slowly, increasing pressure.',
        'El glaucoma de angulo cerrado agudo es como una puerta que se cierra de golpe bloqueando la salida de un edificio -- la gente (liquido) se acumula adentro y la presion sube rapidamente. | Acute angle-closure glaucoma is like a door slamming shut blocking the exit of a building -- people (fluid) accumulate inside and pressure rises rapidly.',
        'Medir la PIO es como medir la presion de una llanta -- si esta muy alta, se dana la estructura interna. | Measuring IOP is like checking tire pressure -- if it is too high, the internal structure gets damaged.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La fisiopatologia del glaucoma involucra disfuncion de la malla trabecular con deposito de matriz extracelular, compresion mecanica e isquemia a nivel de la lamina cribosa, y apoptosis de celulas ganglionares retinianas. | Glaucoma pathophysiology involves trabecular meshwork dysfunction with extracellular matrix deposition, mechanical compression and ischemia at the lamina cribrosa, and retinal ganglion cell apoptosis.',
      explanation: `## Explicacion

### Dinamica del humor acuoso y fisiopatologia

El humor acuoso es producido por el epitelio ciliar a un ritmo de aproximadamente 2.0-2.5 microlitros/minuto. Su composicion incluye agua, electrolitos, proteinas, aminoacidos y acido ascorbico. La PIO se determina por la ecuacion de Goldmann:

**PIO = (Tasa de produccion / Facilidad de salida) + Presion venosa epiescleral**

En el GPAA, la resistencia al flujo de salida aumenta en el tejido yuxtacanalicular de la malla trabecular:
- **TGF-beta2** esta elevado 2-3 veces en el humor acuoso glaucomatoso
- Incremento de deposito de fibronectina, colageno tipo IV e inhibidor del activador del plasminogeno-1 (PAI-1)
- Entrecruzamiento de proteinas de la matriz extracelular (MEC) reduce la permeabilidad
- Perdida celular de la malla trabecular (0.58% por ano normalmente; acelerada en glaucoma)
- Activacion de la via Rho/ROCK aumenta la contractilidad del citoesqueleto

### Mecanismo de dano del nervio optico

**En la lamina cribosa:**
- La lamina cribosa es una estructura de colageno perforada por donde pasan los axones de las celulas ganglionares
- La PIO elevada causa:
  1. Compresion mecanica directa de los axones
  2. Deformacion posterior de la lamina cribosa
  3. Alteracion del transporte axoplasmico (anterogrado y retrogrado)
  4. Isquemia por compresion de capilares de la cabeza del nervio optico

**Muerte de celulas ganglionares retinianas (CGR):**
- Apoptosis mediada por glutamato excitotoxico
- Deprivacion de factores neurotroficos (BDNF)
- Disfuncion mitocondrial y estres oxidativo
- Activacion de la via intrinseca de apoptosis (citocromo c, caspasas)
- Las CGR magnocelulares (fibras grandes) se danan primero -- explica la perdida de sensibilidad al contraste y movimiento

### Patrones de campo visual

| Patron | Descripcion | Significado |
|--------|-------------|-------------|
| Escotoma arciforme / Arcuate scotoma | Defecto en arco siguiendo la distribucion de fibras nerviosas | Dano clasico glaucomatoso |
| Escalon nasal / Nasal step | Defecto que respeta la linea media horizontal del lado nasal | Temprano en glaucoma |
| Defecto paracentral / Paracentral defect | Perdida cerca de la fijacion central | Comun en glaucoma de tension normal |
| Constriccion concentrica / Concentric constriction | Vision en tunel | Glaucoma avanzado |

### Campimetria automatizada (Humphrey 24-2)

- **Desviacion media (DM/MD):** Cuantifica la perdida global del campo visual en dB; valores mas negativos = peor
- **Desviacion estandar del patron (DEP/PSD):** Identifica defectos localizados; valores altos = mas defectos focales
- **Indice de campo visual (VFI):** Porcentaje de funcion visual restante (0-100%)
- **Criterios de progresion:** Analisis de tendencia (trend) y analisis de eventos (event-based)

### Farmacologia detallada

| Clase | Mecanismo | Ejemplo | Reduccion de PIO | Efectos adversos |
|-------|-----------|---------|-----------------|------------------|
| Analogos de prostaglandinas | Aumentan flujo uveoescleral via remodelacion de MEC | Latanoprost, travoprost, tafluprost | 25-35% | Hiperpigmentacion del iris, crecimiento de pestanas, hiperemia |
| Betabloqueantes | Reducen produccion acuosa via receptor beta-2 | Timolol, betaxolol | 20-25% | Bradicardia, broncoespasmo, fatiga |
| Alfa-agonistas | Reducen produccion + aumentan flujo uveoescleral | Brimonidina | 20-25% | Reaccion alergica local, somnolencia |
| IAC topicos | Inhiben anhidrasa carbonica en epitelio ciliar | Dorzolamida, brinzolamida | 15-20% | Ardor, sabor metalico |
| Inhibidores de Rho-quinasa | Aumentan flujo trabecular via relajacion del citoesqueleto | Netarsudil | 15-20% | Hiperemia conjuntival, depositos corneales |
| Combinaciones fijas | Doble mecanismo en un frasco | Dorzolamida/timolol, brimonidina/timolol | 30-35% | Combinacion de los anteriores |

### Procedimientos laser

**Trabeculoplastia laser selectiva (SLT):**
- Laser Nd:YAG de 532 nm aplicado a la malla trabecular
- No destruye tejido (a diferencia de la ALT); puede repetirse
- Eficacia: Reduccion de PIO de 20-30%; puede ser tratamiento inicial (estudio LiGHT)
- Mecanismo: Estimula remodelacion de la malla trabecular via citoquinas

**Iridotomia periferica con laser (IPL):**
- Laser Nd:YAG crea un orificio completo en el iris periferico
- Indicacion: Angulo cerrado agudo (despues de bajar PIO), angulo estrecho en riesgo
- Permite flujo directo de la camara posterior a la anterior, rompiendo el bloqueo pupilar

---
## Explanation

### Aqueous humor dynamics and pathophysiology

Aqueous humor is produced by the ciliary epithelium at a rate of approximately 2.0-2.5 microliters/minute. Its composition includes water, electrolytes, proteins, amino acids, and ascorbic acid. IOP is determined by the Goldmann equation:

**IOP = (Production rate / Outflow facility) + Episcleral venous pressure**

In POAG, outflow resistance increases in the juxtacanalicular tissue of the trabecular meshwork:
- **TGF-beta2** is elevated 2-3 fold in glaucomatous aqueous humor
- Increased deposition of fibronectin, collagen type IV, and plasminogen activator inhibitor-1 (PAI-1)
- Cross-linking of extracellular matrix (ECM) proteins reduces permeability
- Trabecular meshwork cell loss (0.58% per year normally; accelerated in glaucoma)
- Rho/ROCK pathway activation increases cytoskeletal contractility

### Optic nerve damage mechanism

**At the lamina cribrosa:**
- The lamina cribrosa is a perforated collagen structure through which ganglion cell axons pass
- Elevated IOP causes:
  1. Direct mechanical compression of axons
  2. Posterior deformation of the lamina cribrosa
  3. Disruption of axoplasmic transport (anterograde and retrograde)
  4. Ischemia from compression of optic nerve head capillaries

**Retinal ganglion cell (RGC) death:**
- Excitotoxic glutamate-mediated apoptosis
- Neurotrophic factor deprivation (BDNF)
- Mitochondrial dysfunction and oxidative stress
- Activation of intrinsic apoptotic pathway (cytochrome c, caspases)
- Magnocellular RGCs (large fibers) are damaged first -- explains early loss of contrast sensitivity and motion detection

### Visual field patterns

| Pattern | Description | Significance |
|---------|-------------|-------------|
| Arcuate scotoma | Arc-shaped defect following nerve fiber distribution | Classic glaucomatous damage |
| Nasal step | Defect respecting the horizontal midline nasally | Early glaucoma |
| Paracentral defect | Loss near central fixation | Common in normal-tension glaucoma |
| Concentric constriction | Tunnel vision | Advanced glaucoma |

### Automated perimetry (Humphrey 24-2)

- **Mean deviation (MD):** Quantifies overall visual field loss in dB; more negative values = worse
- **Pattern standard deviation (PSD):** Identifies localized defects; higher values = more focal defects
- **Visual field index (VFI):** Percentage of remaining visual function (0-100%)
- **Progression criteria:** Trend analysis and event-based analysis`,
      keyTerms: [
        {
          term: 'lamina cribosa / lamina cribrosa',
          definition:
            'Estructura de colageno perforada en la esclera posterior a traves de la cual pasan los axones de las celulas ganglionares retinianas; sitio principal de dano glaucomatoso. | Perforated collagen structure in the posterior sclera through which retinal ganglion cell axons pass; primary site of glaucomatous damage.',
        },
        {
          term: 'TGF-beta2',
          definition:
            'Citoquina elevada en el humor acuoso glaucomatoso que promueve el deposito de matriz extracelular en la malla trabecular, aumentando la resistencia al flujo. | Cytokine elevated in glaucomatous aqueous humor that promotes extracellular matrix deposition in the trabecular meshwork, increasing outflow resistance.',
        },
        {
          term: 'via Rho/ROCK / Rho/ROCK pathway',
          definition:
            'Via de senalizacion intracelular que regula la contractilidad del citoesqueleto en la malla trabecular; su inhibicion es el mecanismo de accion del netarsudil. | Intracellular signaling pathway regulating cytoskeletal contractility in the trabecular meshwork; its inhibition is the mechanism of action of netarsudil.',
        },
        {
          term: 'escotoma arciforme / arcuate scotoma',
          definition:
            'Defecto del campo visual en forma de arco que sigue la distribucion de las fibras nerviosas retinianas; hallazgo clasico de dano glaucomatoso. | Arc-shaped visual field defect following retinal nerve fiber distribution; classic finding of glaucomatous damage.',
        },
        {
          term: 'ecuacion de Goldmann / Goldmann equation',
          definition:
            'Formula que describe la PIO como funcion de la tasa de produccion de humor acuoso, facilidad de salida y presion venosa epiescleral. | Formula describing IOP as a function of aqueous humor production rate, outflow facility, and episcleral venous pressure.',
        },
        {
          term: 'capa de fibras nerviosas retinianas (CFNR) / retinal nerve fiber layer (RNFL)',
          definition:
            'Capa de la retina formada por los axones de las celulas ganglionares; su adelgazamiento en OCT es un biomarcador de dano glaucomatoso. | Retinal layer formed by ganglion cell axons; its thinning on OCT is a biomarker of glaucomatous damage.',
        },
        {
          term: 'trabeculoplastia selectiva (SLT) / selective laser trabeculoplasty',
          definition:
            'Procedimiento laser de 532 nm que estimula la remodelacion de la malla trabecular sin destruirla; puede usarse como tratamiento inicial para GPAA. | 532 nm laser procedure that stimulates trabecular meshwork remodeling without destroying it; can be used as initial treatment for POAG.',
        },
      ],
      clinicalNotes:
        'La SLT como tratamiento inicial para GPAA ha demostrado ser tan efectiva como las gotas de prostaglandinas en el estudio LiGHT, con mejor adherencia y menor costo a largo plazo. Para el glaucoma de angulo cerrado agudo, el tratamiento de emergencia incluye gotas multiples (timolol, brimonidina, pilocarpina), acetazolamida IV/oral y manitol IV si es necesario, seguido de iridotomia laser una vez que la cornea se aclare. | SLT as initial treatment for POAG has been shown to be as effective as prostaglandin drops in the LiGHT study, with better adherence and lower long-term cost. For acute angle-closure, emergency treatment includes multiple drops (timolol, brimonidine, pilocarpine), IV/oral acetazolamide, and IV mannitol if needed, followed by laser iridotomy once the cornea clears.',
    },

    4: {
      level: 4,
      summary:
        'El manejo avanzado del glaucoma integra la patologia molecular de la malla trabecular, determinacion de PIO objetivo individualizada, biomarcadores de OCT para progresion, MIGS y cirugia filtrante, y terapias emergentes de neuroproteccion. | Advanced glaucoma management integrates trabecular meshwork molecular pathology, individualized target IOP determination, OCT biomarkers for progression, MIGS and filtration surgery, and emerging neuroprotection therapies.',
      explanation: `## Explicacion

### Patologia molecular de la malla trabecular en GPAA

La resistencia al flujo de salida en el GPAA se localiza principalmente en el tejido yuxtacanalicular (TYC), la region inmediatamente adyacente a la pared interna del canal de Schlemm.

**Cambios moleculares:**
- TGF-beta2 esta elevado 2-3x en humor acuoso glaucomatoso
- Efectos downstream: aumento de fibronectina, colageno IV, elastina, PAI-1
- Entrecruzamiento de colageno por transglutaminasa tisular
- Via Wnt antagonizada por proteinas sFRP y DKK -- reduce regeneracion de celulas TM
- Senescencia celular: Aumento de beta-galactosidasa, p21, p16 en celulas TM glaucomatosas
- Estres del reticulo endoplasmico: Mutaciones MYOC causan acumulacion de miocilina mal plegada en el RE, induciendo muerte celular TM

**Via Rho/ROCK en detalle:**
- RhoA-GTPasa activa ROCK1/ROCK2
- ROCK fosforila la cadena ligera de miosina (MLC) -> contraccion del citoesqueleto actomiosina
- Contraccion de celulas TM y del canal de Schlemm -> reduccion del area de la luz canalicular
- Netarsudil (inhibidor de ROCK): Relaja citoesqueleto TM, aumenta flujo trabecular, tambien reduce produccion acuosa y presion venosa epiescleral

### Determinacion de PIO objetivo

La PIO objetivo es individualizada basandose en:
- **Severidad del dano:** PIO basal, estadio del campo visual, grosor CFNR
- **Tasa de progresion:** Cambio de DM por ano en campimetria; perdida de CFNR por ano en OCT
- **Factores del paciente:** Edad, expectativa de vida, ojo unico, calidad de vida

| Severidad | Objetivo general | Reduccion desde basal |
|-----------|-----------------|----------------------|
| Leve | <18 mmHg | 20-30% |
| Moderado | <15 mmHg | 30-40% |
| Avanzado | <12 mmHg | 40-50% |
| Tension normal | <12 mmHg | >30% (estudio CNTGS) |

### Biomarcadores de OCT para progresion

- **Grosor CFNR:** Envejecimiento normal ~0.5 micrometros/ano; >1 micrometro/ano sugiere progresion glaucomatosa
- **Capa de celulas ganglionares-plexiforme interna (GCPI/GCIPL):** Deteccion mas temprana de dano macular
- **Ancho minimo del borde en apertura de Bruch (BMO-MRW):** Mejor correlacion estructura-funcion que la relacion C/D tradicional
- **OCTA:** Reduccion de la densidad vascular peripapilar y macular en glaucoma

### Cirugia de glaucoma: MIGS y filtrante

**MIGS (Cirugia de Glaucoma Minimamente Invasiva):**

| Procedimiento | Diana | Mecanismo | Reduccion PIO | Candidato ideal |
|--------------|-------|-----------|--------------|-----------------|
| iStent inject W | Canal de Schlemm | Stents de bypass trabecular | 20-30% | GPAA leve-moderado + catarata |
| Hydrus Microstent | Canal de Schlemm | Andamio de 8 mm en 90 grados del canal | 25-35% | GPAA leve-moderado + catarata |
| Goniotomia Kahook (KDB) | Malla trabecular | Excision de MT | 20-30% | GPAA; solo o combinado |
| XEN gel stent | Espacio subconjuntival | Microstent ab interno de gelatina | 30-40% | GPAA moderado; formador de ampolla |
| Sistema OMNI | Canal de Schlemm + MT | Canaloplastia + trabeculotomia | 25-35% | GPAA; solo o combinado |

**Cirugia filtrante tradicional:**

**Trabeculectomia:**
- Crea una fistula controlada del ojo al espacio subconjuntival (ampolla filtrante)
- Reduccion de PIO: 40-60%; puede alcanzar PIO <10 mmHg
- Antimetabolitos (mitomicina C, 5-fluorouracilo) previenen cicatrizacion excesiva
- Complicaciones: hipotonia, maculopatia hipotonica, ampolla con fugas, endoftalmitis relacionada con ampolla, catarata acelerada

**Implantes de drenaje (tubos):**
- Valvula de Ahmed: Valvulada, PIO minima ~8 mmHg
- Implante Baerveldt: No valvulado, mayor reduccion de PIO pero mayor riesgo de hipotonia temprana
- Estudio TVT: Tubo no inferior a trabeculectomia a 5 anos; menor tasa de reintervencion

### Glaucoma secundario

| Tipo | Mecanismo | Manejo especifico |
|------|-----------|------------------|
| Pseudoexfoliativo | Material fibrilar en MT; gen LOXL1 | Mayor fluctuacion de PIO; buena respuesta a SLT |
| Pigmentario | Liberacion de pigmento del iris a MT | Mas comun en hombres miopes jovenes; ejercicio puede precipitar crisis |
| Neovascular | Neovascularizacion del angulo por isquemia retiniana | Anti-VEGF + PRP + cirugia de glaucoma |
| Uveitico | Inflamacion obstruye MT; sinequias | Controlar inflamacion primero; evitar mioticos |
| Inducido por esteroides | Aumento de MEC en MT; polimorfismo MYOC | Suspender esteroide si es posible; respuesta en 2-6 semanas |

---
## Explanation

### Molecular pathology of the trabecular meshwork in POAG

Outflow resistance in POAG is primarily localized to the juxtacanalicular tissue (JCT), the region immediately adjacent to the inner wall of Schlemm canal.

**Molecular changes:**
- TGF-beta2 is elevated 2-3x in glaucomatous aqueous humor
- Downstream effects: increased fibronectin, collagen IV, elastin, PAI-1
- Collagen cross-linking by tissue transglutaminase
- Wnt pathway antagonized by sFRP and DKK proteins -- reduces TM cell regeneration
- Cellular senescence: Increased beta-galactosidase, p21, p16 in glaucomatous TM cells
- ER stress: MYOC mutations cause accumulation of misfolded myocilin in the ER, inducing TM cell death

**Rho/ROCK pathway in detail:**
- RhoA-GTPase activates ROCK1/ROCK2
- ROCK phosphorylates myosin light chain (MLC) -> actomyosin cytoskeletal contraction
- TM and Schlemm canal cell contraction -> reduced canal lumen area
- Netarsudil (ROCK inhibitor): Relaxes TM cytoskeleton, increases trabecular outflow, also reduces aqueous production and episcleral venous pressure

### Target IOP determination

Target IOP is individualized based on:
- **Damage severity:** Baseline IOP, visual field stage, RNFL thickness
- **Rate of progression:** MD change per year on perimetry; RNFL loss per year on OCT
- **Patient factors:** Age, life expectancy, only eye, quality of life

| Severity | General target | Reduction from baseline |
|----------|---------------|------------------------|
| Mild | <18 mmHg | 20-30% |
| Moderate | <15 mmHg | 30-40% |
| Advanced | <12 mmHg | 40-50% |
| Normal-tension | <12 mmHg | >30% (CNTGS trial) |

### OCT biomarkers for progression

- **RNFL thickness:** Normal aging ~0.5 micrometers/year; >1 micrometer/year suggests glaucomatous progression
- **Ganglion cell-inner plexiform layer (GCIPL):** Earlier detection of macular damage
- **Bruch membrane opening minimum rim width (BMO-MRW):** Better structure-function correlation than traditional C/D ratio
- **OCTA:** Reduced peripapillary and macular vessel density in glaucoma

### Glaucoma surgery: MIGS and filtration

**MIGS (Minimally Invasive Glaucoma Surgery):**

| Procedure | Target | Mechanism | IOP Reduction | Ideal Candidate |
|-----------|--------|-----------|--------------|-----------------|
| iStent inject W | Schlemm canal | Trabecular bypass stents | 20-30% | Mild-moderate OAG + cataract |
| Hydrus Microstent | Schlemm canal | 8 mm scaffold spanning 90 degrees of canal | 25-35% | Mild-moderate OAG + cataract |
| Kahook Dual Blade (KDB) | Trabecular meshwork | TM excision | 20-30% | OAG; stand-alone or combined |
| XEN gel stent | Subconjunctival space | Ab interno gel microstent | 30-40% | Moderate OAG; bleb-forming |
| OMNI system | Schlemm canal + TM | Canaloplasty + trabeculotomy | 25-35% | OAG; stand-alone |

**Traditional filtration surgery:**

**Trabeculectomy:**
- Creates a controlled fistula from the eye to the subconjunctival space (filtering bleb)
- IOP reduction: 40-60%; can achieve IOP <10 mmHg
- Antimetabolites (mitomycin C, 5-fluorouracil) prevent excessive scarring
- Complications: hypotony, hypotony maculopathy, leaking bleb, bleb-related endophthalmitis, accelerated cataract

**Drainage implants (tubes):**
- Ahmed valve: Valved, minimum IOP ~8 mmHg
- Baerveldt implant: Non-valved, greater IOP reduction but higher early hypotony risk
- TVT study: Tube non-inferior to trabeculectomy at 5 years; lower reoperation rate`,
      keyTerms: [
        {
          term: 'tejido yuxtacanalicular (TYC) / juxtacanalicular tissue (JCT)',
          definition:
            'Region de la malla trabecular inmediatamente adyacente al canal de Schlemm donde se localiza la mayor resistencia al flujo de salida en GPAA. | Region of the trabecular meshwork immediately adjacent to Schlemm canal where the greatest outflow resistance is located in POAG.',
        },
        {
          term: 'MYOC (miocilina) / myocilin',
          definition:
            'Gen cuyas mutaciones causan acumulacion de proteina mal plegada en el reticulo endoplasmico de las celulas de la malla trabecular, causando GPAA juvenil/adulto (3-5% de los casos de GPAA). | Gene whose mutations cause accumulation of misfolded protein in the endoplasmic reticulum of trabecular meshwork cells, causing juvenile/adult POAG (3-5% of POAG cases).',
        },
        {
          term: 'mitomicina C / mitomycin C',
          definition:
            'Antimetabolito alquilante aplicado durante trabeculectomia para inhibir la proliferacion de fibroblastos y prevenir la cicatrizacion de la ampolla filtrante. | Alkylating antimetabolite applied during trabeculectomy to inhibit fibroblast proliferation and prevent filtering bleb scarring.',
        },
        {
          term: 'BMO-MRW (ancho minimo del borde en apertura de Bruch)',
          definition:
            'Parametro de OCT que mide la distancia minima desde la apertura de la membrana de Bruch hasta la superficie interna del tejido neurorretiniano; mejor correlacion estructura-funcion que la relacion C/D. | OCT parameter measuring minimum distance from Bruch membrane opening to the inner retinal surface; better structure-function correlation than C/D ratio.',
        },
        {
          term: 'glaucoma pseudoexfoliativo / pseudoexfoliation glaucoma',
          definition:
            'Glaucoma secundario causado por deposito de material fibrilar (pseudoexfoliacion) en la malla trabecular, asociado con el gen LOXL1; mayor riesgo de complicaciones quirurgicas. | Secondary glaucoma caused by fibrillar material deposition (pseudoexfoliation) in the trabecular meshwork, associated with the LOXL1 gene; higher risk of surgical complications.',
        },
        {
          term: 'estudio TVT / TVT study',
          definition:
            'Ensayo clinico (Tube Versus Trabeculectomy) que demostro que los implantes de drenaje son no inferiores a la trabeculectomia a 5 anos con menor tasa de reintervencion. | Clinical trial (Tube Versus Trabeculectomy) demonstrating drainage implants are non-inferior to trabeculectomy at 5 years with lower reoperation rate.',
        },
      ],
      clinicalNotes:
        'Perlas clinicas avanzadas: (1) La SLT puede repetirse -- a diferencia de la ALT que destruye tejido trabecular, la SLT es no destructiva y puede reaplicarse cuando su efecto disminuye. (2) En glaucoma pseudoexfoliativo, la PIO fluctua significativamente -- obtener multiples lecturas incluyendo diferentes horas del dia. (3) Las mutaciones de MYOC representan el 3-5% de GPAA y son autosomicas dominantes; ofrecer consejeria genetica. (4) El estudio LiGHT demostro que la SLT como primera linea es costo-efectiva comparada con gotas a 3 anos; considerar como tratamiento inicial en GPAA de nuevo diagnostico. | Advanced clinical pearls: (1) SLT can be repeated -- unlike ALT which destroys TM tissue, SLT is non-destructive and can be reapplied when its effect wanes. (2) In pseudoexfoliation glaucoma, IOP fluctuates significantly -- obtain multiple readings at different times of day. (3) MYOC mutations represent 3-5% of POAG and are autosomal dominant; offer genetic counseling. (4) The LiGHT study demonstrated SLT as first-line is cost-effective compared to drops at 3 years; consider as initial treatment in newly diagnosed POAG.',
    },

    5: {
      level: 5,
      summary:
        'El manejo experto del glaucoma abarca MIGS de nueva generacion, terapia genica para neuroproteccion, sistemas de liberacion sostenida de farmacos, monitoreo continuo de PIO con sensores implantables, e inteligencia artificial para deteccion y pronostico. | Expert-level glaucoma management encompasses next-generation MIGS, gene therapy for neuroprotection, sustained drug delivery systems, continuous IOP monitoring with implantable sensors, and artificial intelligence for detection and prognosis.',
      explanation: `## Explicacion

### MIGS de nueva generacion y alternativas a la trabeculectomia

**PreserFlo MicroShunt:**
- Microtubo de PTFE (poli-tetrafluoroetileno) de 8.5 mm, diametro luminal de 70 micrometros
- Implantacion ab externo creando ampolla subconjuntival
- Ensayo IMP2: Reduccion de PIO comparable a trabeculectomia con perfil de seguridad favorable
- Ventaja: Procedimiento estandarizado, menor dependencia de la habilidad quirurgica vs trabeculectomia

**iDose TR (travoprost intracameral):**
- Reservorio de titanio que libera travoprost continuamente por 12+ meses
- Elimina el problema de adherencia a gotas
- Fase III: Reduccion de PIO sostenida comparable a timolol topico

**Bimatoprost intracameral (Durysta):**
- Implante biodegradable de 10 microgramos de bimatoprost
- Primera terapia intracameral de liberacion sostenida aprobada para glaucoma
- Duracion: 4-6 meses de control de PIO
- Limitacion: Aprobado solo para uso unico (riesgo teorico de edema macular cistoide)

### Monitoreo continuo de PIO

**Sensores implantables:**
- Eyemate-IO (Implandata): Sensor de presion en anillo de silicona implantado en el surco ciliar
- Permite al paciente medir PIO en casa y transmitir datos al medico
- Detecta picos nocturnos de PIO que se pierden en la consulta
- Aprobado CE; estudios en curso para FDA

**Lentes de contacto con sensores:**
- Triggerfish (Sensimed): Lente de contacto con sensor piezoresistivo (mide cambio de curvatura corneal como proxy de PIO)
- Detecta patrones de 24 horas; util para evaluar fluctuaciones

### Neuroproteccion: mas alla de la PIO

| Agente | Mecanismo | Evidencia |
|--------|-----------|----------|
| Brimonidina | Agonista alfa-2; regula al alza BDNF; inhibe apoptosis de CGR | Estudio LPGTS: Preservo campo visual vs timolol a pesar de PIO similar |
| Nicotinamida (vitamina B3) | Precursor de NAD+; mejora funcion mitocondrial | Fase II: Mejoria en electrorretinografia de patron en glaucoma |
| Citicolina | Soporte mitocondrial; precursor de fosfolipidos de membrana | Ensayos europeos: Posible beneficio en campo visual |
| Memantina | Antagonista NMDA; reduce excitotoxicidad glutamatergica | Ensayo Phase III fallido; posible beneficio en subgrupo |
| Coenzima Q10 | Antioxidante mitocondrial | Datos preclínicos prometedores; ensayos clinicos limitados |

**Terapia genica para neuroproteccion:**
- Vectores AAV entregando BDNF, CNTF, o proteinas anti-apoptoticas directamente a CGR
- Estudios preclínicos muestran proteccion significativa de CGR en modelos animales
- Retos: Duracion del efecto, immunogenicidad, acceso al tejido diana

### Genetica del glaucoma: implicaciones para medicina de precision

| Gen | Proteina | Mecanismo | Tipo de glaucoma | Prevalencia |
|-----|----------|-----------|-----------------|-------------|
| MYOC | Miocilina | Estres RE en celulas TM | GPAA juvenil/adulto | 3-5% de GPAA |
| OPTN | Optineurina | Disregulacion de autofagia | Tension normal | <1% de GTN |
| TBK1 | Quinasa TBK1 | Via de autofagia (duplicacion genica) | Tension normal | <1% de GTN |
| LOXL1 | Lisil oxidasa-like 1 | Metabolismo de elastina | Pseudoexfoliativo | Presente en >99% de PXG |
| CYP1B1 | Citocromo P450 1B1 | Desarrollo del segmento anterior | Congenito primario | 15-20% de GCP |
| FOXC1 | Factor transcripcion | Desarrollo segmento anterior | Anomalia de Axenfeld-Rieger | Raro |

**Implicaciones farmacogenomicas:**
- Polimorfismos de ADRB2 afectan respuesta a timolol
- Variantes de PGF2alpha-receptor pueden predecir respuesta a latanoprost
- GWA estudios identifican >100 loci de riesgo para GPAA; puntuaciones de riesgo poligenico en desarrollo

### Inteligencia artificial en glaucoma

**Deteccion automatizada:**
- Redes neuronales convolucionales (CNN) analizan fotografias de fondo de ojo para detectar excavacion glaucomatosa
- Sensibilidad/especificidad >90% en multiples estudios de validacion
- Potencial para cribado masivo en poblaciones sin acceso a oftalmologos

**Prediccion de progresion:**
- Modelos de aprendizaje profundo integran datos de OCT, campimetria y PIO
- Prediccion del campo visual futuro basada en tendencias historicas
- Algoritmos de optimizacion de intervalos de tratamiento

**OCT aumentada con IA:**
- Segmentacion automatica de capas retinianas con mayor precision
- Deteccion de progresion antes de que sea estadisticamente significativa en analisis convencional
- Modelos de red generativa adversaria (GAN) para estimar campos visuales a partir de OCT

### Temas transversales de experto

**Glaucoma refractario:**
- Definicion: PIO no controlada a pesar de tratamiento medico maximo y cirugia(s) previa(s)
- Opciones: Implante de Baerveldt 350 mm2, ciclofotocoagulacion transescleral (CPC-TS), CPC micropulsada
- CPC micropulsada: Menor riesgo de phtisis bulbi vs CPC continua; mecanismo: reduccion de produccion acuosa via dano subletal al epitelio ciliar

**Glaucoma pediatrico:**
- Glaucoma congenito primario: Buftalmos, edema corneal, roturas de Descemet (estrias de Haab)
- Tratamiento quirurgico primario: Goniotomia o trabeculotomia (gotas poco eficaces en ninos)
- Gen CYP1B1 responsable del 15-20% de casos

---
## Explanation

### Next-generation MIGS and trabeculectomy alternatives

**PreserFlo MicroShunt:**
- PTFE (polytetrafluoroethylene) microtube 8.5 mm long, 70 micrometer lumen diameter
- Ab externo implantation creating subconjunctival bleb
- IMP2 trial: IOP reduction comparable to trabeculectomy with favorable safety profile
- Advantage: Standardized procedure, less skill-dependent than trabeculectomy

**iDose TR (intracameral travoprost):**
- Titanium reservoir continuously releasing travoprost for 12+ months
- Eliminates drop adherence issues
- Phase III: Sustained IOP reduction comparable to topical timolol

**Bimatoprost intracameral (Durysta):**
- Biodegradable 10 microgram bimatoprost implant
- First approved intracameral sustained-release glaucoma therapy
- Duration: 4-6 months of IOP control
- Limitation: Approved for single use only (theoretical cystoid macular edema risk)

### Continuous IOP monitoring

**Implantable sensors:**
- Eyemate-IO (Implandata): Pressure sensor in silicone ring implanted in ciliary sulcus
- Allows patient to measure IOP at home and transmit data to physician
- Detects nocturnal IOP spikes missed during office visits
- CE approved; FDA studies ongoing

**Sensor contact lenses:**
- Triggerfish (Sensimed): Contact lens with piezoresistive sensor (measures corneal curvature change as IOP proxy)
- Detects 24-hour patterns; useful for evaluating fluctuations

### Neuroprotection: beyond IOP

| Agent | Mechanism | Evidence |
|-------|-----------|----------|
| Brimonidine | Alpha-2 agonist; upregulates BDNF; inhibits RGC apoptosis | LPGTS study: Preserved visual field vs timolol despite similar IOP |
| Nicotinamide (vitamin B3) | NAD+ precursor; improves mitochondrial function | Phase II: Improvement in pattern electroretinography in glaucoma |
| Citicoline | Mitochondrial support; membrane phospholipid precursor | European trials: Possible visual field benefit |
| Memantine | NMDA antagonist; reduces glutamatergic excitotoxicity | Phase III trial failed; possible subgroup benefit |
| Coenzyme Q10 | Mitochondrial antioxidant | Promising preclinical data; limited clinical trials |

**Gene therapy for neuroprotection:**
- AAV vectors delivering BDNF, CNTF, or anti-apoptotic proteins directly to RGCs
- Preclinical studies show significant RGC protection in animal models
- Challenges: Duration of effect, immunogenicity, target tissue access

### Glaucoma genetics: implications for precision medicine

| Gene | Protein | Mechanism | Glaucoma Type | Prevalence |
|------|---------|-----------|---------------|------------|
| MYOC | Myocilin | ER stress in TM cells | Juvenile/adult POAG | 3-5% of POAG |
| OPTN | Optineurin | Autophagy dysregulation | Normal-tension | <1% of NTG |
| TBK1 | TBK1 kinase | Autophagy pathway (gene duplication) | Normal-tension | <1% of NTG |
| LOXL1 | Lysyl oxidase-like 1 | Elastin metabolism | Pseudoexfoliation | Present in >99% of PXG |
| CYP1B1 | Cytochrome P450 1B1 | Anterior segment development | Primary congenital | 15-20% of PCG |
| FOXC1 | Transcription factor | Anterior segment development | Axenfeld-Rieger anomaly | Rare |

**Pharmacogenomic implications:**
- ADRB2 polymorphisms affect timolol response
- PGF2alpha-receptor variants may predict latanoprost response
- GWAS studies identify >100 risk loci for POAG; polygenic risk scores in development

### Artificial intelligence in glaucoma

**Automated detection:**
- Convolutional neural networks (CNNs) analyze fundus photographs to detect glaucomatous cupping
- Sensitivity/specificity >90% in multiple validation studies
- Potential for mass screening in populations without ophthalmologist access

**Progression prediction:**
- Deep learning models integrate OCT, perimetry, and IOP data
- Future visual field prediction based on historical trends
- Treatment interval optimization algorithms

**AI-augmented OCT:**
- Automated retinal layer segmentation with greater accuracy
- Progression detection before conventional analysis reaches statistical significance
- Generative adversarial network (GAN) models to estimate visual fields from OCT`,
      keyTerms: [
        {
          term: 'PreserFlo MicroShunt',
          definition:
            'Microtubo de PTFE de 8.5 mm implantado ab externo creando una ampolla filtrante subconjuntival; alternativa estandarizada a la trabeculectomia para GPAA moderado-avanzado. | 8.5 mm PTFE microtube implanted ab externo creating a subconjunctival filtering bleb; standardized alternative to trabeculectomy for moderate-advanced POAG.',
        },
        {
          term: 'iDose TR',
          definition:
            'Reservorio intracameral de titanio que libera travoprost de forma sostenida por mas de 12 meses, eliminando la necesidad de adherencia a gotas. | Intracameral titanium reservoir that sustainably releases travoprost for over 12 months, eliminating the need for drop adherence.',
        },
        {
          term: 'Eyemate-IO',
          definition:
            'Sensor de presion implantable en el surco ciliar que permite monitoreo continuo de PIO en casa, detectando fluctuaciones nocturnas perdidas en la consulta. | Implantable pressure sensor in the ciliary sulcus allowing continuous home IOP monitoring, detecting nocturnal fluctuations missed during office visits.',
        },
        {
          term: 'nicotinamida (vitamina B3) / nicotinamide',
          definition:
            'Precursor de NAD+ investigado como agente neuroprotector en glaucoma; datos de Fase II muestran mejoria en electrorretinografia de patron. | NAD+ precursor investigated as a neuroprotective agent in glaucoma; Phase II data show improvement in pattern electroretinography.',
        },
        {
          term: 'ciclofotocoagulacion micropulsada / micropulse cyclophotocoagulation',
          definition:
            'Tecnica laser que aplica energia en pulsos al cuerpo ciliar para reducir produccion acuosa con menor riesgo de phtisis que la CPC continua; util en glaucoma refractario. | Laser technique applying pulsed energy to the ciliary body to reduce aqueous production with lower phthisis risk than continuous CPC; useful in refractory glaucoma.',
        },
        {
          term: 'puntuacion de riesgo poligenico / polygenic risk score',
          definition:
            'Puntuacion basada en multiples variantes geneticas de riesgo (>100 loci identificados por GWAS) que puede estratificar el riesgo individual de desarrollar GPAA. | Score based on multiple genetic risk variants (>100 GWAS-identified loci) that can stratify individual risk of developing POAG.',
        },
        {
          term: 'buftalmos / buphthalmos',
          definition:
            'Agrandamiento del globo ocular en lactantes/ninos pequenos causado por PIO elevada en glaucoma congenito; signo clasico junto con edema corneal y estrias de Haab. | Enlargement of the eyeball in infants/young children caused by elevated IOP in congenital glaucoma; classic sign along with corneal edema and Haab striae.',
        },
      ],
      clinicalNotes:
        'Perlas de nivel experto: (1) Los inhibidores del complemento (pegcetacoplan, avacincaptad pegol) aprobados para atrofia geografica de DMAE tambien podrian tener implicaciones para la neurodegeneracion glaucomatosa via la misma cascada inflamatoria. (2) La CPC micropulsada esta emergiendo como alternativa mas segura a la CPC continua en glaucoma refractario; tecnica: 2000 mW, ciclo de trabajo 31.3%, 100 ms encendido/100 ms apagado, barrido de 270 grados evitando las 3 y las 9. (3) Los sensores implantables de PIO representan un cambio de paradigma al pasar de mediciones unicas en consulta a datos continuos; los picos nocturnos de PIO pueden ser un factor de progresion no reconocido. (4) La terapia genica con vectores AAV entregando BDNF a CGR podria ser la primera terapia neuroprotectora verdadera si los ensayos clinicos en curso son exitosos. (5) En glaucoma pediatrico, la cirugia es primera linea -- la goniotomia tiene tasas de exito del 70-90% en glaucoma congenito primario. | Expert-level pearls: (1) Complement inhibitors (pegcetacoplan, avacincaptad pegol) approved for AMD geographic atrophy may also have implications for glaucomatous neurodegeneration via the same inflammatory cascade. (2) Micropulse CPC is emerging as a safer alternative to continuous CPC in refractory glaucoma; technique: 2000 mW, 31.3% duty cycle, 100 ms on/100 ms off, 270-degree sweep avoiding 3 and 9 o\'clock. (3) Implantable IOP sensors represent a paradigm shift from single office measurements to continuous data; nocturnal IOP spikes may be an unrecognized progression factor. (4) AAV gene therapy delivering BDNF to RGCs could be the first true neuroprotective therapy if ongoing clinical trials succeed. (5) In pediatric glaucoma, surgery is first-line -- goniotomy has 70-90% success rates in primary congenital glaucoma.',
    },
  },

  media: [
    {
      id: 'glaucoma-aqueous-flow-diagram',
      type: 'diagram',
      filename: 'glaucoma-aqueous-flow.svg',
      title: 'Flujo del Humor Acuoso / Aqueous Humor Flow',
      description:
        'Diagrama del flujo del humor acuoso desde el cuerpo ciliar a traves de las vias trabecular y uveoescleral / Diagram of aqueous humor flow from ciliary body through trabecular and uveoscleral pathways',
    },
    {
      id: 'glaucoma-angle-open-vs-closed',
      type: 'diagram',
      filename: 'glaucoma-angle-comparison.svg',
      title: 'Angulo Abierto vs Cerrado / Open vs Closed Angle',
      description:
        'Comparacion del angulo de drenaje en glaucoma de angulo abierto y cerrado / Comparison of the drainage angle in open-angle and angle-closure glaucoma',
    },
    {
      id: 'glaucoma-optic-disc-progression',
      type: 'image',
      filename: 'glaucoma-optic-disc-progression.svg',
      title: 'Progresion de la Excavacion del Disco Optico / Optic Disc Cupping Progression',
      description:
        'Secuencia de cambios en el disco optico desde normal hasta glaucoma avanzado / Sequence of optic disc changes from normal to advanced glaucoma',
    },
    {
      id: 'glaucoma-visual-field-patterns',
      type: 'diagram',
      filename: 'glaucoma-visual-field-patterns.svg',
      title: 'Patrones de Campo Visual en Glaucoma / Visual Field Patterns in Glaucoma',
      description:
        'Representaciones de escotoma arciforme, escalon nasal y constriccion concentrica / Representations of arcuate scotoma, nasal step, and concentric constriction',
    },
  ],

  citations: [
    {
      id: 'ref-1',
      type: 'textbook',
      title: 'Kanski Clinical Ophthalmology: A Systematic Approach',
      authors: ['Kanski, J.J.', 'Bowling, B.'],
      source: 'Elsevier, 9th Edition',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'Primary Open-Angle Glaucoma Preferred Practice Pattern',
      authors: ['American Academy of Ophthalmology'],
      source: 'Ophthalmology',
      url: 'https://doi.org/10.1016/j.ophtha.2020.10.024',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-3',
      type: 'article',
      title: 'Laser in Glaucoma and Ocular Hypertension (LiGHT) Trial',
      authors: ['Gazzard, G.', 'Konstantakopoulou, E.', 'Garway-Heath, D.'],
      source: 'The Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(19)32444-X',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-4',
      type: 'article',
      title: 'Tube Versus Trabeculectomy (TVT) Study',
      authors: ['Gedde, S.J.', 'Schiffman, J.C.', 'Feuer, W.J.'],
      source: 'American Journal of Ophthalmology',
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
      targetId: 'condition-cataracts',
      targetType: 'condition',
      relationship: 'related',
      label: 'Cataratas / Cataracts (MIGS combinado con cirugia de catarata)',
    },
    {
      targetId: 'condition-diabetic-retinopathy',
      targetType: 'condition',
      relationship: 'related',
      label: 'Retinopatia Diabetica / Diabetic Retinopathy (glaucoma neovascular)',
    },
  ],

  tags: {
    systems: ['visual'],
    topics: ['ophthalmology', 'pathology', 'pharmacology', 'surgery'],
    keywords: [
      'glaucoma',
      'presion intraocular',
      'intraocular pressure',
      'nervio optico',
      'optic nerve',
      'malla trabecular',
      'trabecular meshwork',
      'MIGS',
      'trabeculectomia',
      'SLT',
      'campo visual',
      'visual field',
      'OCT',
      'neuroproteccion',
    ],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
