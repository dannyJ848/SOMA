/**
 * Retinopatia Diabetica / Diabetic Retinopathy - Oftalmologia / Ophthalmology
 *
 * Contenido educativo bilingue (Espanol primero) sobre retinopatia diabetica:
 * tamizaje, estadificacion, tratamiento y avances terapeuticos.
 *
 * Bilingual educational content (Spanish-first) on diabetic retinopathy:
 * screening, staging, treatment, and therapeutic advances.
 *
 * Five complexity levels from 8th-grade through MD/Professional.
 */

import { EducationalContent } from '../types';

export const retinopatiadiabeticaDiabeticRetinopathy: EducationalContent = {
  id: 'condition-diabetic-retinopathy',
  type: 'condition',
  name: 'Diabetic Retinopathy',
  nameEs: 'Retinopatia Diabetica',
  alternateNames: [
    'Retinopatia por diabetes',
    'DR',
    'RD',
    'Retinopatia diabetica proliferativa',
    'Proliferative diabetic retinopathy',
    'Edema macular diabetico',
    'Diabetic macular edema',
    'DME',
    'EMD',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'La retinopatia diabetica ocurre cuando el azucar alta en la sangre dana los vasos sanguineos diminutos en la parte de atras del ojo (retina), lo que puede causar perdida de la vision. | Diabetic retinopathy occurs when high blood sugar damages the tiny blood vessels at the back of the eye (retina), which can cause vision loss.',
      explanation: `## Explicacion

La **retina** es como la pantalla de una camara en la parte de atras del ojo. Esta llena de vasos sanguineos muy pequenos que le llevan oxigeno y nutrientes. Cuando una persona tiene **diabetes**, tiene demasiada azucar en la sangre, y con el tiempo esa azucar dana estos vasos sanguineos.

### Como la diabetes dana los ojos

1. **Primero:** Los vasos sanguineos pequenos se debilitan y empiezan a gotear sangre y liquido
2. **Despues:** Algunos vasos se tapan y partes de la retina dejan de recibir sangre
3. **Al final:** El ojo intenta crear vasos nuevos para compensar, pero estos vasos nuevos son fragiles y se rompen facilmente, causando sangrado grave

### Etapas de la enfermedad

- **Etapa temprana (leve):** Pequenas bolsitas de sangre (microaneurismas) en los vasos de la retina. Generalmente sin sintomas.
- **Etapa media (moderada):** Mas sangrado y liquido en la retina. Puede empezar a haber vision borrosa.
- **Etapa avanzada (severa):** Muchos vasos tapados. La retina "pide ayuda" y el cuerpo crea vasos nuevos fragiles.
- **Etapa proliferativa:** Los vasos nuevos sangran dentro del ojo. Riesgo de ceguera.

### Edema macular diabetico

La **macula** es el centro de la retina, donde vemos los detalles finos (leer, reconocer caras). Cuando los vasos gotean liquido en la macula, se hincha y la vision central se vuelve borrosa. Esto puede ocurrir en cualquier etapa.

### Que puede hacer usted

- **Controlar el azucar en la sangre** es lo mas importante
- **Controlar la presion arterial** tambien protege los ojos
- **Hacerse un examen de los ojos cada ano** -- el doctor dilata (agranda) las pupilas para ver la retina
- **No esperar a tener sintomas** -- el dano puede ocurrir antes de que note cambios en su vision
- **Tratamiento disponible:** Inyecciones en el ojo y laser pueden salvar la vision si se detecta a tiempo

---
## Explanation

The **retina** is like a camera screen at the back of the eye. It is full of tiny blood vessels that carry oxygen and nutrients. When a person has **diabetes**, they have too much sugar in the blood, and over time that sugar damages these blood vessels.

### How diabetes damages the eyes

1. **First:** Small blood vessels weaken and start to leak blood and fluid
2. **Then:** Some vessels become blocked and parts of the retina stop receiving blood
3. **Finally:** The eye tries to create new vessels to compensate, but these new vessels are fragile and break easily, causing severe bleeding

### Stages of the disease

- **Early (mild):** Small blood pockets (microaneurysms) in retinal vessels. Usually no symptoms.
- **Middle (moderate):** More bleeding and fluid in the retina. Blurred vision may start.
- **Advanced (severe):** Many blocked vessels. The retina "calls for help" and the body creates fragile new vessels.
- **Proliferative:** The new vessels bleed inside the eye. Risk of blindness.

### Diabetic macular edema

The **macula** is the center of the retina where we see fine details (reading, recognizing faces). When vessels leak fluid into the macula, it swells and central vision becomes blurry. This can happen at any stage.

### What you can do

- **Control blood sugar** is the most important thing
- **Control blood pressure** also protects the eyes
- **Get an eye exam every year** -- the doctor dilates (enlarges) the pupils to see the retina
- **Do not wait for symptoms** -- damage can occur before you notice vision changes
- **Treatment is available:** Injections in the eye and laser can save vision if caught early`,
      keyTerms: [
        {
          term: 'retinopatia diabetica / diabetic retinopathy',
          definition:
            'Enfermedad de los ojos causada por la diabetes que dana los vasos sanguineos de la retina y puede causar ceguera. | Eye disease caused by diabetes that damages retinal blood vessels and can cause blindness.',
        },
        {
          term: 'retina',
          definition:
            'La capa en la parte de atras del ojo que detecta la luz y envia imagenes al cerebro, como la pantalla de una camara. | The layer at the back of the eye that detects light and sends images to the brain, like a camera screen.',
        },
        {
          term: 'macula',
          definition:
            'El centro de la retina donde vemos los detalles finos; su hinchamiento (edema macular) causa vision borrosa central. | The center of the retina where we see fine details; its swelling (macular edema) causes central blurred vision.',
        },
        {
          term: 'microaneurisma / microaneurysm',
          definition:
            'Pequena bolsita de sangre en un vaso sanguineo debilitado de la retina; es la primera senal de retinopatia diabetica. | Small blood pocket in a weakened retinal blood vessel; it is the first sign of diabetic retinopathy.',
        },
        {
          term: 'examen de fondo de ojo / dilated eye exam',
          definition:
            'Examen donde el doctor agranda la pupila con gotas para poder ver la retina y detectar dano temprano. | Exam where the doctor enlarges the pupil with drops to see the retina and detect early damage.',
        },
      ],
      analogies: [
        'Los vasos sanguineos de la retina con diabetes son como tuberias viejas oxidadas -- el azucar los corroe por dentro hasta que empiezan a gotear y a taparse. | Retinal blood vessels with diabetes are like old rusty pipes -- sugar corrodes them from inside until they start leaking and clogging.',
        'La macula hinchada por liquido es como una esponja que absorbe demasiada agua -- se deforma y ya no funciona bien. | The macula swollen with fluid is like a sponge that absorbs too much water -- it deforms and no longer works properly.',
        'Hacerse un examen de ojos cada ano con diabetes es como revisar los frenos del carro regularmente -- es mejor encontrar un problema pequeno antes de que cause un accidente. | Getting an annual eye exam with diabetes is like checking car brakes regularly -- it is better to find a small problem before it causes an accident.',
      ],
      examples: [
        'Una persona con diabetes tipo 2 que no se ha revisado los ojos en 5 anos podria tener dano significativo en la retina sin saberlo. | A person with type 2 diabetes who has not had an eye exam in 5 years could have significant retinal damage without knowing it.',
        'Una mujer embarazada con diabetes debe revisarse los ojos al inicio del embarazo porque la retinopatia puede empeorar rapidamente durante el embarazo. | A pregnant woman with diabetes should get her eyes checked early in pregnancy because retinopathy can worsen rapidly during pregnancy.',
        'Un hombre de 55 anos con diabetes y vision borrosa nueva podria tener edema macular diabetico que mejoraria con inyecciones a tiempo. | A 55-year-old man with diabetes and new blurred vision may have diabetic macular edema that would improve with timely injections.',
      ],
      patientCounselingPoints: [
        'Si tiene diabetes, hagase un examen de los ojos con dilatacion cada ano, aunque vea bien. El dano empieza antes de los sintomas. | If you have diabetes, get a dilated eye exam every year, even if you see well. Damage starts before symptoms.',
        'Controlar su azucar (hemoglobina A1c cerca de 7%) es lo mas importante que puede hacer para proteger sus ojos. | Controlling your sugar (hemoglobin A1c near 7%) is the most important thing you can do to protect your eyes.',
        'Si de repente ve manchas oscuras flotando, destellos de luz o una cortina oscura en su vision, vaya a urgencias -- podria ser una hemorragia en el ojo. | If you suddenly see floating dark spots, flashes of light, or a dark curtain in your vision, go to the ER -- it could be a hemorrhage in the eye.',
        'El tratamiento con inyecciones en el ojo suena aterrador, pero es muy rapido, casi indoloro con anestesia local, y puede salvar su vision. | Treatment with injections in the eye sounds scary, but it is very quick, nearly painless with local anesthesia, and can save your vision.',
      ],
    },

    2: {
      level: 2,
      summary:
        'La retinopatia diabetica es una microangiopatia retiniana progresiva clasificada en no proliferativa (RDNP) y proliferativa (RDP), con el edema macular diabetico (EMD) como la causa principal de perdida visual en pacientes diabeticos. | Diabetic retinopathy is a progressive retinal microangiopathy classified into nonproliferative (NPDR) and proliferative (PDR), with diabetic macular edema (DME) as the leading cause of visual loss in diabetic patients.',
      explanation: `## Explicacion

### Epidemiologia y factores de riesgo

La retinopatia diabetica es la **principal causa de ceguera** en adultos en edad productiva (20-74 anos) a nivel mundial. Afecta a aproximadamente un tercio de todos los pacientes con diabetes.

**Factores de riesgo:**

| Factor | Impacto |
|--------|---------|
| Duracion de la diabetes | Mas importante; a 20 anos de DM tipo 1, ~99% tienen alguna RD |
| Control glucemico (HbA1c) | Cada 1% de reduccion = ~35% menos riesgo de progresion (DCCT/UKPDS) |
| Hipertension arterial | Factor de riesgo independiente; su control reduce progresion |
| Dislipidemia | Exudados duros asociados con lipidos elevados |
| Embarazo | Puede acelerar progresion de RD preexistente |
| Nefropatia diabetica | Marcador de enfermedad microvascular avanzada |
| Tabaquismo | Factor de riesgo adicional |

### Clasificacion y estadificacion (ETDRS)

**Retinopatia diabetica no proliferativa (RDNP):**

| Estadio | Hallazgos en fondo de ojo | Riesgo de progresion |
|---------|--------------------------|---------------------|
| Leve | Solo microaneurismas | Bajo |
| Moderada | Microaneurismas + hemorragias puntiformes, exudados duros, manchas algodonosas | Moderado |
| Severa | Regla 4-2-1 (ver abajo) | Alto (~50% a RDP en 1 ano) |

**Regla 4-2-1 para RDNP severa** (cualquier UNO de estos hallazgos califica):
- Hemorragias/microaneurismas difusos en los **4** cuadrantes
- Arrosariamiento venoso en **2** o mas cuadrantes
- Anomalias microvasculares intrarretinianas (AMIR/IRMA) prominentes en **1** o mas cuadrantes

**Retinopatia diabetica proliferativa (RDP):**
- Neovascularizacion del disco (NVD) o de otra localizacion (NVE)
- Riesgo de hemorragia vitrea y desprendimiento de retina traccional
- Sin tratamiento, riesgo de ceguera en 5 anos: >50%

### Edema macular diabetico (EMD)

- Acumulacion de liquido en la macula por aumento de permeabilidad vascular
- Puede ocurrir en cualquier estadio de RD
- **Causa principal de perdida de agudeza visual** en pacientes diabeticos
- Clasificacion:
  - **Con involucro central (CI-EMD):** Edema afecta subfovea; requiere tratamiento con anti-VEGF
  - **Sin involucro central:** Edema perifoveal; puede observarse o tratarse con laser focal

### Diagnostico

- **Examen de fondo de ojo con dilatacion:** Estandar de tamizaje; detecta microaneurismas, hemorragias, exudados
- **Fotografia de fondo de ojo:** Documentacion y comparacion en seguimiento
- **Tomografia de coherencia optica (OCT):** Identifica edema macular, liquido subretiniano, quistes intrarretinianos
- **Angiografia con fluoresceina (AGF):** Muestra fugas vasculares, areas de no perfusion, neovascularizacion

### Tratamiento

**Control sistemico (base fundamental):**
- HbA1c <7% (estudio DCCT/EDIC: reduccion del 76% en riesgo de RD en DM tipo 1)
- Presion arterial <130/80 mmHg (UKPDS: cada 10 mmHg de reduccion en PA sistolica = 13% reduccion en complicaciones microvasculares)
- Manejo de dislipidemia (fenofibrato: ACCORD-Eye, FIELD)

**Anti-VEGF intravítreo (primera linea para EMD y RDP):**
- Ranibizumab (Lucentis), aflibercept (Eylea), bevacizumab (Avastin, off-label), faricimab (Vabysmo)
- Inyeccion cada 4-8 semanas inicialmente, luego extension de intervalos
- Eficacia demostrada en multiples ensayos DRCR.net

**Fotocoagulacion laser:**
- **Panretiniana (PRP):** Para RDP; 1200-1600 quemaduras en retina periferica; destruye retina isquemica para reducir produccion de VEGF
- **Focal/rejilla:** Para EMD sin involucro central

**Cirugia (vitrectomia):**
- Hemorragia vitrea que no se aclara en 1-3 meses
- Desprendimiento de retina traccional que amenaza la macula
- Membranas epirretinianas con traccion

---
## Explanation

### Epidemiology and risk factors

Diabetic retinopathy is the **leading cause of blindness** in working-age adults (20-74 years) worldwide. It affects approximately one-third of all patients with diabetes.

### Classification and staging (ETDRS)

**Nonproliferative diabetic retinopathy (NPDR):**
- Mild: Microaneurysms only
- Moderate: Microaneurysms + dot-blot hemorrhages, hard exudates, cotton-wool spots
- Severe: 4-2-1 rule -- hemorrhages in all 4 quadrants, venous beading in 2+ quadrants, or IRMA in 1+ quadrant. Any ONE qualifies. ~50% risk of progression to PDR in 1 year.

**Proliferative diabetic retinopathy (PDR):**
- Neovascularization of disc (NVD) or elsewhere (NVE)
- Risk of vitreous hemorrhage and tractional retinal detachment

### Diabetic macular edema (DME)

- Fluid accumulation in the macula from increased vascular permeability
- Can occur at any DR stage
- **Leading cause of visual acuity loss** in diabetic patients
- Center-involving DME requires anti-VEGF treatment
- Non-center-involving DME may be observed or treated with focal laser

### Treatment

- Systemic control: HbA1c <7%, BP <130/80, lipid management
- Anti-VEGF intravitreal injections (first-line for DME and PDR)
- Panretinal photocoagulation (PRP) for PDR
- Vitrectomy for non-clearing vitreous hemorrhage or tractional detachment`,
      keyTerms: [
        {
          term: 'regla 4-2-1 / 4-2-1 rule',
          definition:
            'Criterio para diagnosticar RDNP severa: hemorragias en 4 cuadrantes, arrosariamiento venoso en 2+ cuadrantes, o IRMA en 1+ cuadrante. Cualquier UNO califica. | Criterion for diagnosing severe NPDR: hemorrhages in 4 quadrants, venous beading in 2+ quadrants, or IRMA in 1+ quadrant. Any ONE qualifies.',
        },
        {
          term: 'neovascularizacion / neovascularization',
          definition:
            'Crecimiento de vasos sanguineos nuevos y anormales; en RDP crecen sobre la retina y el disco optico; son fragiles y pueden sangrar. | Growth of new, abnormal blood vessels; in PDR they grow on the retina and optic disc; they are fragile and can bleed.',
        },
        {
          term: 'edema macular diabetico (EMD) / diabetic macular edema (DME)',
          definition:
            'Acumulacion de liquido en la macula por goteo de vasos sanguineos danados; causa principal de perdida de vision en pacientes diabeticos; se trata con inyecciones anti-VEGF. | Fluid accumulation in the macula from leaking damaged blood vessels; leading cause of vision loss in diabetic patients; treated with anti-VEGF injections.',
        },
        {
          term: 'fotocoagulacion panretiniana (PRP) / panretinal photocoagulation',
          definition:
            'Tratamiento laser que aplica 1200-1600 quemaduras en la retina periferica para destruir tejido isquemico y reducir la produccion de VEGF; tratamiento estandar para RDP. | Laser treatment applying 1200-1600 burns to the peripheral retina to destroy ischemic tissue and reduce VEGF production; standard treatment for PDR.',
        },
        {
          term: 'VEGF (factor de crecimiento endotelial vascular)',
          definition:
            'Proteina que estimula el crecimiento de vasos sanguineos y aumenta la permeabilidad vascular; esta elevada en RD y es el blanco de los tratamientos con inyecciones intravitreas. | Protein that stimulates blood vessel growth and increases vascular permeability; elevated in DR and is the target of intravitreal injection treatments.',
        },
        {
          term: 'angiografia con fluoresceina (AGF) / fluorescein angiography',
          definition:
            'Estudio de imagen donde se inyecta un colorante fluorescente en la vena del brazo y se fotografian los vasos de la retina para detectar fugas, isquemia y neovascularizacion. | Imaging study where a fluorescent dye is injected into the arm vein and retinal vessels are photographed to detect leaks, ischemia, and neovascularization.',
        },
      ],
      analogies: [
        'La progresion de RD es como un dique con grietas: primero aparecen pequenas fugas (microaneurismas), luego grietas mas grandes (hemorragias), y finalmente el dique necesita reparacion de emergencia (neovascularizacion/sangrado). | DR progression is like a dam with cracks: first small leaks appear (microaneurysms), then larger cracks (hemorrhages), and finally the dam needs emergency repair (neovascularization/bleeding).',
        'La PRP es como hacer una fogata controlada en un bosque -- se quema parte del bosque (retina periferica) para evitar que el incendio (isquemia y VEGF) se extienda a la ciudad (macula). | PRP is like a controlled burn in a forest -- part of the forest (peripheral retina) is burned to prevent the fire (ischemia and VEGF) from spreading to the city (macula).',
      ],
    },

    3: {
      level: 3,
      summary:
        'La fisiopatologia de la RD involucra perdida de pericitos, disfuncion de la barrera hematorretiniana, activacion de vias metabolicas daninas (poliol, AGE, PKC, hexosamina) y progresion a traves de cascadas mediadas por VEGF e HIF-1-alfa. | DR pathophysiology involves pericyte loss, blood-retinal barrier dysfunction, activation of damaging metabolic pathways (polyol, AGE, PKC, hexosamine), and progression through VEGF and HIF-1-alpha mediated cascades.',
      explanation: `## Explicacion

### Fisiopatologia: cascada de dano microvascular

**Vias metabolicas activadas por hiperglucemia:**

1. **Via del poliol (sorbitol):**
   - Glucosa -> sorbitol (aldosa reductasa) -> fructosa (sorbitol deshidrogenasa)
   - Sorbitol acumulado causa estres osmotico en pericitos
   - Deplecion de NADPH reduce glutatión -> estres oxidativo

2. **Via de productos de glicacion avanzada (AGE):**
   - Glucosa reacciona no enzimaticamente con proteinas (reaccion de Maillard)
   - AGEs activan receptores RAGE -> NF-kappaB -> inflamacion cronica
   - Entrecruzamiento de colageno en membrana basal capilar

3. **Via de proteina quinasa C (PKC):**
   - Hiperglucemia -> diacilglicerol (DAG) -> activacion de PKC-beta
   - PKC aumenta permeabilidad vascular, contractilidad y produccion de VEGF
   - Aumenta expresion de endotelina-1 (vasoconstrictor)

4. **Via de hexosamina:**
   - Fructosa-6-fosfato -> glucosamina-6-fosfato (GFAT)
   - Modificacion O-GlcNAc de factores de transcripcion
   - Aumenta expresion de TGF-beta1 y PAI-1

### Progresion microvascular

**Cambios tempranos:**
- **Perdida de pericitos:** Primer cambio histologico; los pericitos estabilizan capilares
  - Relacion pericito:endotelio baja de 1:1 a <1:3
  - Mecanismo: Apoptosis por estres osmotico (sorbitol), AGE, angiopoyetina-2
- **Engrosamiento de membrana basal:** Deposito de colageno IV, fibronectina, laminina
- **Formacion de microaneurismas:** Dilataciones focales en capilares debilitados

**Cambios intermedios:**
- Disfuncion endotelial -> perdida de uniones estrechas (claudina-5, ocludina)
- Leucostasis: Leucocitos activados se adhieren al endotelio (ICAM-1, VCAM-1)
- Obstruccion capilar -> areas de no perfusion retiniana
- Exudados duros: Depositos de lipidos y lipoproteinas en capas retinianas
- Manchas algodonosas: Infartos focales de la capa de fibras nerviosas

**Cambios avanzados (proliferativos):**
- Isquemia retiniana extensa -> estabilizacion de HIF-1-alfa
- HIF-1-alfa activa transcripcion de:
  - VEGF-A (factor mas importante para neovascularizacion y permeabilidad)
  - Eritropoyetina (EPO)
  - Factor de crecimiento derivado de plaquetas (PDGF)
- VEGF impulsa neovascularizacion (NVD, NVE) y ruptura de barrera hematorretiniana (EMD)
- Vasos nuevos son inmaduros, sin pericitos, propensos a sangrado

### VEGF en detalle

| Isoforma VEGF | Funcion principal | Relevancia clinica |
|---------------|-------------------|-------------------|
| VEGF-A165 | Angiogenesis y permeabilidad vascular | Diana principal de anti-VEGF |
| VEGF-A121 | Difusible; permeabilidad | Contribuye a EMD |
| VEGF-B | Supervivencia neuronal | Neuroproteccion retiniana |
| PlGF | Amplifica senalizacion de VEGF-A | Diana de aflibercept |

**Receptores:**
- VEGFR-1 (Flt-1): Afinidad alta por VEGF-A; senalizacion modulada
- VEGFR-2 (KDR/Flk-1): Principal mediador de angiogenesis y permeabilidad
- Neuropilina-1 (NRP1): Co-receptor que potencia senalizacion VEGF

### Interpretacion de OCT en EMD

| Hallazgo OCT | Descripcion | Significado |
|-------------|-------------|-------------|
| Liquido subretiniano | Espacio oscuro entre retina neurosensorial y EPR | Indica ruptura de barrera hematorretiniana externa |
| Espacios quísticos intrarretinianos | Espacios oscuros dentro de la retina | EMD cistoide; indica ruptura de barrera interna |
| Engrosamiento retiniano difuso | Aumento de grosor macular sin quistes claros | EMD esponjoso |
| Focos hiperreflectivos | Puntos brillantes dentro de la retina | Macrófagos cargados de lípidos; marcador inflamatorio |
| Desprendimiento seroso del neuroepitelio | Liquido bajo la fóvea | Puede predecir peor respuesta a tratamiento |
| Disrupcion de zona elipsoide | Perdida de la banda de segmentos internos/externos de fotorreceptores | Predictor de peor pronostico visual |

### Farmacologia anti-VEGF para RD

| Agente | Diana | Tipo molecular | Intervalo estandar | Ensayo clave |
|--------|-------|---------------|-------------------|-------------|
| Ranibizumab (Lucentis) | VEGF-A | Fragmento Fab | Mensual o c/8 sem | DRCR Protocol I |
| Aflibercept 2 mg (Eylea) | VEGF-A, VEGF-B, PlGF | Proteina de fusion | c/8 sem tras carga | DRCR Protocol T |
| Bevacizumab (Avastin) | VEGF-A | Anticuerpo completo (off-label) | Mensual | DRCR Protocol T |
| Faricimab (Vabysmo) | VEGF-A + Ang-2 | Anticuerpo biespecifico | Hasta c/16 sem | YOSEMITE/RHINE |
| Aflibercept 8 mg (Eylea HD) | VEGF-A, VEGF-B, PlGF | Fusion proteica alta dosis | c/12-16 sem | PHOTON |

---
## Explanation

### Pathophysiology: microvascular damage cascade

**Metabolic pathways activated by hyperglycemia:**
1. **Polyol pathway:** Glucose -> sorbitol -> fructose; osmotic stress, NADPH depletion
2. **Advanced glycation end-products (AGE):** Non-enzymatic protein glycation -> RAGE activation -> NF-kappaB inflammation
3. **Protein kinase C (PKC):** DAG -> PKC-beta activation -> increased permeability, VEGF
4. **Hexosamine pathway:** O-GlcNAc modification -> TGF-beta1, PAI-1 upregulation

**Microvascular progression:**
- Pericyte loss (earliest histologic change) -> basement membrane thickening -> microaneurysms
- Endothelial dysfunction -> tight junction loss -> capillary non-perfusion
- Extensive ischemia -> HIF-1-alpha stabilization -> VEGF upregulation
- VEGF drives neovascularization (PDR) and blood-retinal barrier breakdown (DME)

### OCT interpretation in DME

Key findings: subretinal fluid, intraretinal cystoid spaces, diffuse retinal thickening, hyperreflective foci (lipid-laden macrophages), ellipsoid zone disruption (predictor of poor visual prognosis).

### Anti-VEGF pharmacology for DR

Ranibizumab, aflibercept, bevacizumab, faricimab, and aflibercept 8 mg with their respective mechanisms, dosing intervals, and landmark trials.`,
      keyTerms: [
        {
          term: 'pericitos / pericytes',
          definition:
            'Celulas contráctiles que envuelven los capilares retinianos y los estabilizan; su perdida es el primer cambio histologico en la RD y precede a la formacion de microaneurismas. | Contractile cells wrapping retinal capillaries and stabilizing them; their loss is the first histologic change in DR and precedes microaneurysm formation.',
        },
        {
          term: 'HIF-1-alfa / HIF-1-alpha',
          definition:
            'Factor inducible por hipoxia 1-alfa; regulador transcripcional maestro que bajo condiciones hipoxicas activa la produccion de VEGF, eritropoyetina y PDGF, impulsando la neovascularizacion. | Hypoxia-inducible factor 1-alpha; master transcriptional regulator that under hypoxic conditions activates VEGF, erythropoietin, and PDGF production, driving neovascularization.',
        },
        {
          term: 'barrera hematorretiniana / blood-retinal barrier',
          definition:
            'Barrera formada por uniones estrechas entre celulas endoteliales retinianas (barrera interna) y celulas del EPR (barrera externa); su ruptura causa edema macular diabetico. | Barrier formed by tight junctions between retinal endothelial cells (inner barrier) and RPE cells (outer barrier); its breakdown causes diabetic macular edema.',
        },
        {
          term: 'via del poliol / polyol pathway',
          definition:
            'Via metabolica que convierte glucosa en sorbitol via aldosa reductasa; la acumulacion de sorbitol causa estres osmotico en pericitos y celulas de Schwann, contribuyendo a neuropatia y retinopatia diabetica. | Metabolic pathway converting glucose to sorbitol via aldose reductase; sorbitol accumulation causes osmotic stress in pericytes and Schwann cells, contributing to diabetic neuropathy and retinopathy.',
        },
        {
          term: 'focos hiperreflectivos / hyperreflective foci',
          definition:
            'Puntos brillantes visibles en OCT dentro de la retina edematosa; representan macrofagos cargados de lipidos y son un marcador de actividad inflamatoria en EMD. | Bright dots visible on OCT within edematous retina; represent lipid-laden macrophages and are an inflammatory activity marker in DME.',
        },
        {
          term: 'zona elipsoide / ellipsoid zone',
          definition:
            'Banda hiperreflectiva en OCT correspondiente a los segmentos internos de los fotorreceptores; su integridad predice el potencial de recuperacion visual con tratamiento. | Hyperreflective band on OCT corresponding to photoreceptor inner segments; its integrity predicts visual recovery potential with treatment.',
        },
        {
          term: 'DRCR Retina Network',
          definition:
            'Red de investigacion colaborativa que ha realizado los ensayos clinicos mas importantes en retinopatia diabetica y edema macular, incluyendo los Protocolos I, T, S, V y W. | Collaborative research network that has conducted the most important clinical trials in diabetic retinopathy and macular edema, including Protocols I, T, S, V, and W.',
        },
      ],
      clinicalNotes:
        'La regla 4-2-1 para RDNP severa es un hito clinico critico: hemorragias/microaneurismas en los 4 cuadrantes, arrosariamiento venoso en 2+ cuadrantes, o IRMA en 1+ cuadrante. Cualquier UNO califica, y el riesgo de progresion a RDP en 1 ano es ~50%. Estos pacientes necesitan seguimiento estrecho o considerar terapia anti-VEGF. La evaluacion de biomarcadores OCT (focos hiperreflectivos, integridad de zona elipsoide, patron de liquido) es esencial para predecir respuesta terapeutica y personalizar el manejo. | The 4-2-1 rule for severe NPDR is a critical clinical milestone: hemorrhages in 4 quadrants, venous beading in 2+ quadrants, or IRMA in 1+ quadrant. Any ONE qualifies, and risk of progression to PDR within 1 year is ~50%. These patients need close follow-up or consideration of anti-VEGF therapy. OCT biomarker evaluation (hyperreflective foci, ellipsoid zone integrity, fluid pattern) is essential for predicting therapeutic response and personalizing management.',
    },

    4: {
      level: 4,
      summary:
        'El manejo avanzado de la RD integra los ensayos DRCR.net (Protocolos I, T, S, V, W, AC), estrategias de tratamiento guiadas por OCT, farmacologia anti-VEGF biespecifica, el rol del fenofibrato, y vitrectomia con indicaciones precisas. | Advanced DR management integrates DRCR.net trials (Protocols I, T, S, V, W, AC), OCT-guided treatment strategies, bispecific anti-VEGF pharmacology, the role of fenofibrate, and vitrectomy with precise indications.',
      explanation: `## Explicacion

### Ensayos clinicos DRCR Retina Network

| Protocolo | Comparacion | Hallazgo clave |
|-----------|-------------|----------------|
| Protocolo I | Ranibizumab +/- laser vs laser solo para EMD | Ranibizumab superior para agudeza visual |
| Protocolo T | Aflibercept vs bevacizumab vs ranibizumab para EMD | Aflibercept mejor cuando AV basal <=20/50; todos equivalentes si AV >=20/40 |
| Protocolo S | Anti-VEGF vs PRP para RDP | No inferior; menos efectos adversos con anti-VEGF |
| Protocolo V | Observacion vs aflibercept vs laser para CI-EMD con buena AV (>=20/25) | Observacion inicial razonable; muchos necesitan tratamiento en 2 anos |
| Protocolo W | Aflibercept para RDNP moderada-severa sin EMD | Redujo desarrollo de RDP y CI-EMD; resultados visuales similares a 2 anos |
| Protocolo AA | Aflibercept c/4 vs c/8 sem durante el primer ano para CI-EMD | Intervalo de 4 semanas no superior a 8 semanas para la mayoria |
| Protocolo AC | Aflibercept 8 mg vs 2 mg para EMD | 8 mg no inferior con dosificacion extendida |

### Estrategias de dosificacion anti-VEGF

**Tratar y extender (T&E) -- preferida actualmente:**
1. Inyecciones mensuales hasta macula seca en OCT (fase de carga)
2. Extender intervalo 2 semanas a la vez si macula permanece seca
3. Si liquido recurre: Acortar intervalo 2 semanas
4. Intervalo maximo individualizado (algunos pacientes hasta 16 sem con faricimab)
5. Ventaja: Reduce visitas manteniendo eficacia

**Pro re nata (PRN):**
- Inyectar solo cuando se detecta liquido en OCT
- Menor numero de inyecciones pero requiere visitas mensuales de monitoreo
- Riesgo de sub-tratamiento si el paciente falta a visitas

**Dosificacion fija:**
- Inyecciones mensuales o bimensuales independientemente del OCT
- Maximo eficacia pero mayor carga de tratamiento

### Faricimab: mecanismo biespecifico

**Doble diana:**
1. **Anti-VEGF-A:** Bloquea angiogenesis y permeabilidad vascular (como otros anti-VEGF)
2. **Anti-angiopoyetina-2 (Ang-2):**
   - Ang-2 desestabiliza vasos sanguineos antagonizando Tie2
   - Bloqueo de Ang-2 restaura senalizacion Tie2 -> uniones endoteliales mas estrechas
   - Efecto complementario al bloqueo de VEGF

**Evidencia clinica (YOSEMITE/RHINE):**
- Intervalos de hasta 16 semanas con eficacia comparable a aflibercept c/8 sem
- Reduccion significativa de carga de tratamiento
- Datos a 2 anos confirman durabilidad

### Rol del fenofibrato en RD

**ACCORD-Eye:**
- Fenofibrato + simvastatina vs simvastatina sola en DM tipo 2
- ~40% de reduccion en progresion de RD
- Efecto independiente de niveles lipidicos

**FIELD:**
- Fenofibrato vs placebo
- Reduccion en necesidad de tratamiento laser para RD
- Menor progresion a RDP

**Mecanismo propuesto:**
- Activacion de PPAR-alfa -> efectos antiinflamatorios
- Reduccion de ICAM-1, VCAM-1, MCP-1
- Mejoria de funcion endotelial
- Posible efecto anti-apoptotico en pericitos

### Vitrectomia: indicaciones y tecnica

**Indicaciones:**

| Indicacion | Urgencia | Consideraciones |
|-----------|----------|-----------------|
| Hemorragia vitrea densa | Semi-urgente (1-3 meses) | En DM tipo 1 y pacientes con un solo ojo funcional: mas temprano |
| Desprendimiento de retina traccional con involucro macular | Urgente | Cirugia dentro de dias |
| Desprendimiento traccional sin involucro macular | Electiva | Monitoreo cercano; operar si progresa |
| EMD traccional | Urgente | Membranas epirretinianas con traccion vitreomacular |
| Hemorragia premacular densa | Semi-urgente | Considerar si afecta vision central |

**Tecnica moderna:**
- Sistemas de calibre 25G o 27G (minimamente invasivos)
- Iluminacion endoscopica + sistema de visualizacion gran angular
- Diseccion de membranas fibrovasculares con pinzas y tijeras vitreoretinianas
- Endolaser intraoperatorio (PRP si no se ha realizado)
- Tamponamiento con aire, SF6 o C3F8 si hay desgarros retinianos
- Aceite de silicona en casos complejos (desprendimiento traccional extenso)

### Neurodegeneracion retiniana diabetica

Concepto emergente: La RD tiene un **componente neurodegenerativo** que puede preceder a los cambios vasculares detectables.

**Evidencia:**
- Adelgazamiento de CFNR y capa de celulas ganglionares en OCT antes de microaneurismas
- Alteraciones en ERG multifocal antes de cambios vasculares visibles
- Apoptosis de celulas ganglionares retinianas mediada por glutamato
- Disfuncion de celulas de Muller (las principales celulas gliales retinianas)

**Implicaciones:**
- El tamizaje basado solo en cambios vasculares puede perder la fase neurodegenerativa temprana
- Potenciales dianas neuroprotectoras: Brimonidina, citicolina, semaglutida (efectos neuroprotectores independientes de control glucemico?)

---
## Explanation

### DRCR Retina Network landmark trials

Detailed summary of Protocols I, T, S, V, W, AA, and AC with comparisons, key findings, and clinical implications.

### Anti-VEGF dosing strategies

- Treat-and-extend (preferred): Monthly loading until dry macula, then extend interval by 2 weeks
- PRN: Inject only when fluid detected; fewer injections but monthly monitoring needed
- Fixed dosing: Monthly/bimonthly regardless of OCT; maximum efficacy but highest burden

### Faricimab bispecific mechanism

Dual targeting of VEGF-A and angiopoietin-2; Ang-2 blockade restores Tie2 signaling, tightening endothelial junctions. YOSEMITE/RHINE trials: intervals up to 16 weeks with comparable efficacy.

### Fenofibrate in DR

ACCORD-Eye and FIELD trials showed ~40% reduction in DR progression independent of lipid levels; PPAR-alpha-mediated anti-inflammatory mechanism proposed.

### Vitrectomy indications and technique

Modern 25G/27G vitrectomy for vitreous hemorrhage, tractional detachment, and tractional DME with specific urgency criteria.

### Diabetic retinal neurodegeneration

Emerging concept: DR has a neurodegenerative component (RNFL/GCL thinning, multifocal ERG changes) that may precede detectable vascular changes, with implications for early screening and neuroprotective targets.`,
      keyTerms: [
        {
          term: 'Protocolo T (DRCR.net) / Protocol T',
          definition:
            'Ensayo clinico comparando aflibercept, bevacizumab y ranibizumab para EMD: aflibercept superior cuando AV basal <=20/50; todos equivalentes si AV >=20/40. Estudio fundamental para guiar la seleccion de anti-VEGF. | Clinical trial comparing aflibercept, bevacizumab, and ranibizumab for DME: aflibercept superior when baseline VA <=20/50; all equivalent at VA >=20/40. Fundamental study guiding anti-VEGF selection.',
        },
        {
          term: 'faricimab (Vabysmo)',
          definition:
            'Primer anticuerpo biespecifico aprobado para enfermedad retiniana, que bloquea simultaneamente VEGF-A y angiopoyetina-2; permite intervalos de dosificacion de hasta 16 semanas en EMD y DMAE humeda. | First bispecific antibody approved for retinal disease, simultaneously blocking VEGF-A and angiopoietin-2; allows dosing intervals up to 16 weeks in DME and wet AMD.',
          pronunciation: 'far-ih-SIM-ab',
        },
        {
          term: 'tratar y extender (T&E) / treat-and-extend',
          definition:
            'Estrategia de dosificacion anti-VEGF que extiende gradualmente los intervalos de inyeccion cuando la macula esta seca en OCT; equilibra eficacia con reduccion de carga de tratamiento. Actualmente la estrategia preferida. | Anti-VEGF dosing strategy gradually extending injection intervals when macula is dry on OCT; balances efficacy with reduced treatment burden. Currently the preferred strategy.',
        },
        {
          term: 'fenofibrato en RD / fenofibrate in DR',
          definition:
            'Fibrato lipidico que en los estudios ACCORD-Eye y FIELD redujo la progresion de RD en ~40%, probablemente por mecanismos antiinflamatorios mediados por PPAR-alfa independientes del efecto lipidico. | Lipid fibrate that in ACCORD-Eye and FIELD studies reduced DR progression by ~40%, likely through PPAR-alpha-mediated anti-inflammatory mechanisms independent of lipid effects.',
        },
        {
          term: 'neurodegeneracion retiniana diabetica / diabetic retinal neurodegeneration',
          definition:
            'Componente neurodegenerativo de la RD que puede preceder a cambios vasculares, evidenciado por adelgazamiento de CFNR/CCG en OCT y alteraciones en ERG multifocal. | Neurodegenerative component of DR that may precede vascular changes, evidenced by RNFL/GCL thinning on OCT and multifocal ERG alterations.',
        },
        {
          term: 'angiopoyetina-2 (Ang-2) / angiopoietin-2',
          definition:
            'Proteina desestabilizadora vascular que antagoniza el receptor Tie2; su bloqueo por faricimab restaura las uniones endoteliales y complementa el efecto anti-VEGF. | Vascular destabilizing protein that antagonizes the Tie2 receptor; its blockade by faricimab restores endothelial junctions and complements the anti-VEGF effect.',
        },
      ],
      clinicalNotes:
        'Perlas clinicas avanzadas: (1) El Protocolo S de DRCR.net establecio que anti-VEGF es no inferior a PRP para RDP, con menos efectos adversos. Sin embargo, PRP sigue siendo preferida para pacientes con mala adherencia al seguimiento porque una sola sesion proporciona regresion durable de neovascularizacion. (2) El Protocolo T demostro que aflibercept es superior a bevacizumab y ranibizumab cuando AV basal <=20/50, pero los tres son equivalentes a >=20/40 -- esto permite usar bevacizumab (mucho mas economico) en pacientes con buena vision. (3) Fenofibrato debe considerarse como adyuvante en pacientes con RDNP moderada dado su beneficio independiente de lipidos, especialmente en paises donde el acceso a anti-VEGF es limitado. (4) Protocolo V demostro que la observacion es razonable inicialmente para CI-EMD con buena AV (>=20/25), pero ~50% necesitan tratamiento en 2 anos -- seguimiento OCT mensual es critico. | Advanced clinical pearls: (1) DRCR Protocol S established anti-VEGF as non-inferior to PRP for PDR with fewer adverse effects. However, PRP remains preferred for patients with poor follow-up compliance. (2) Protocol T showed aflibercept superior when baseline VA <=20/50 but all three equivalent at >=20/40 -- allowing bevacizumab (much cheaper) in patients with good vision. (3) Fenofibrate should be considered as adjunct in patients with moderate NPDR given its lipid-independent benefit. (4) Protocol V showed observation is reasonable initially for CI-DME with good VA (>=20/25) but ~50% need treatment within 2 years.',
    },

    5: {
      level: 5,
      summary:
        'El horizonte terapeutico de la RD incluye tamizaje autonomo con IA, terapia genica para liberacion sostenida de anti-VEGF, nuevas dianas terapeuticas mas alla de VEGF (calicreina plasmatica, integrinas, neuroproteccion), plataformas de liberacion sostenida, y medicina de precision basada en biomarcadores de OCT y farmacogenomica. | The therapeutic horizon of DR includes autonomous AI screening, gene therapy for sustained anti-VEGF delivery, novel therapeutic targets beyond VEGF (plasma kallikrein, integrins, neuroprotection), sustained-release platforms, and precision medicine based on OCT biomarkers and pharmacogenomics.',
      explanation: `## Explicacion

### Tamizaje autonomo con inteligencia artificial

**IDx-DR (LumineticsCore):**
- Primer sistema de IA autonomo aprobado por FDA para deteccion de RD (2018)
- Sensibilidad >87%, especificidad >90% para RD mas que leve
- Despliegue en punto de atencion primaria con camara de fondo no midriatica
- No requiere especialista para interpretar -- la IA da decision de referir/no referir
- Aprobado para uso sin supervision oftalmica

**EyeArt (Eyenuk):**
- Aprobado por FDA; sensibilidad 91% para RD referible
- Procesamiento en la nube; compatible con multiples camaras

**Google/Verily deep learning:**
- Validado en India y Tailandia; comparable a especialistas retinianos
- Modelos de aprendizaje profundo entrenados con >100,000 imagenes de fondo de ojo

**Impacto en salud publica:**
- Permite tamizaje de RD en poblaciones sin acceso a oftalmologos
- La OMS estima que solo el 50% de pacientes diabeticos reciben tamizaje anual
- IA en farmacias, clinicas de atencion primaria y unidades moviles
- Potencial para reducir ceguera evitable en paises de ingresos bajos y medios

### Terapia genica para liberacion sostenida de anti-VEGF

**Concepto:** Convertir la carga cronica de inyecciones en una terapia genica unica que produce proteina anti-VEGF endogena continuamente.

| Terapia genica | Vector | Proteina producida | Via de entrega | Ensayo | Estado |
|----------------|--------|-------------------|----------------|--------|--------|
| ADVM-022 (Adverum) | AAV2.7m8 | Aflibercept | Intravitrea | INFINITY | Fase II (pausado por inflamacion) |
| RGX-314 (REGENXBIO) | AAV8 | Anti-VEGF Fab | Subretiniana o supracoroidal | AAVIATE, ALTITUDE | Fase III |
| 4D-150 (4D Molecular) | AAV intravítreo optimizado | Aflibercept + anti-VEGF | Intravitrea | Fase I/II | En curso |
| ABBV-RGX-314 | AAV8 | Ranibizumab-like Fab | Supracoroidal | Fase III | En curso |

**Desafios:**
- Respuesta inflamatoria al vector AAV (la mas preocupante)
- Durabilidad de la expresion proteica (anos?)
- Inmunidad preexistente contra AAV
- Dosis-respuesta: Dosis mas altas = mas proteina pero mas inflamacion

### Nuevas dianas terapeuticas mas alla de VEGF

**Inhibidores de calicreina plasmatica:**
- El sistema calicreina-cinina contribuye a permeabilidad vascular independientemente de VEGF
- KVD001 (KalVista): Inhibidor de calicreina plasmatica intravítreo; potencialmente aditivo a anti-VEGF
- Especialmente relevante para EMD refractario a anti-VEGF

**Antagonistas de integrinas:**
- THR-687: Antagonista pan-RGD de integrinas; Fase II para EMD
- Risuteganib: Modulador de integrinas; datos mixtos
- Las integrinas participan en adhesion leucocitaria, permeabilidad y angiogenesis

**Via Tie2/angiopoyetina:**
- Faricimab (ya aprobado): Anti-VEGF + anti-Ang-2
- AXT107: Peptido activador de Tie2; Fase I
- Razucaptad pegol: Inhibidor de VE-PTP (activa Tie2 indirectamente)

**Neuroproteccion retiniana:**
- Semaglutida (agonista GLP-1): Posibles efectos neuroprotectores retinianos independientes de control glucemico; investigacion activa
- Brimonidina intravitrea: Implante de liberacion sostenida para RD temprana
- Citicolina: Soporte mitocondrial para celulas ganglionares

### Plataformas de liberacion sostenida

| Plataforma | Farmaco | Duracion | Mecanismo | Indicacion |
|-----------|---------|----------|-----------|-----------|
| Ozurdex (implante) | Dexametasona | 4-6 meses | PLGA biodegradable | EMD, OVR, uveitis |
| Iluvien (implante) | Acetonida de fluocinolona | Hasta 36 meses | No biodegradable | EMD cronico |
| Port Delivery System | Ranibizumab | 6 meses | Reservorio escleral | DMAE humeda (potencial RD) |
| Susvimo (PDS) | Ranibizumab | 6 meses | Recargable en consultorio | En desarrollo para EMD |

**Esteroides intravítreos vs anti-VEGF:**
- Esteroides: Eficaces para EMD, especialmente pseudofaquicos y refractarios a anti-VEGF
- Riesgos: Elevacion de PIO (30-40%), catarata acelerada
- Ventaja: Menor frecuencia de inyecciones con implantes de larga duracion

### Medicina de precision en RD

**Biomarcadores predictivos de OCT:**
- Focos hiperreflectivos: Marcador inflamatorio; puede predecir mejor respuesta a esteroides
- Liquido subretiniano en EMD: Puede responder mejor a esteroides que a anti-VEGF
- Integridad de zona elipsoide: Predictor de pronostico visual final
- Grosor coroideo: Ojos con coroide gruesa pueden necesitar estrategia diferente

**Farmacogenomica:**
- Polimorfismos de VEGF-A (rs699947, rs1570360): Pueden predecir respuesta a anti-VEGF
- Variantes de CFH: Posible influencia en respuesta terapeutica
- Scores de riesgo poligenico para progresion de RD en desarrollo

**IA para optimizacion de tratamiento:**
- Modelos de aprendizaje profundo que predicen respuesta a anti-VEGF basados en OCT basal
- Algoritmos de seleccion de tratamiento personalizado
- Prediccion del intervalo optimo de inyeccion

### Prevencion y manejo sistemico: evidencia actualizada

| Ensayo | Hallazgo clave |
|--------|----------------|
| DCCT/EDIC | Control intensivo en DM1 -> 76% reduccion en riesgo de desarrollar RD; beneficio persiste >20 anos ("memoria metabolica") |
| UKPDS | Control intensivo en DM2 -> 25% reduccion de riesgo microvascular |
| ACCORD-Eye | Fenofibrato + estatina -> 40% reduccion en progresion de RD |
| FIELD | Fenofibrato monoterapia -> reduccion en necesidad de laser |
| SUSTAIN-6 / PIONEER 6 | Semaglutida asociada con empeoramiento transitorio de RD al inicio (efecto de "control glucemico rapido") |

**Efecto paradojico de GLP-1 agonistas:**
- SUSTAIN-6 demostro aumento transitorio en complicaciones de RD con semaglutida
- Mecanismo probable: Reduccion rapida de HbA1c causa "normalizacion temprana" -- similar al efecto observado en DCCT
- No es toxicidad directa del farmaco; el beneficio a largo plazo es favorable
- Recomendacion: Tamizaje oftalmologico antes de iniciar GLP-1 agonistas en pacientes con RD preexistente

---
## Explanation

### Autonomous AI screening

IDx-DR, EyeArt, and Google/Verily deep learning systems enabling DR screening in populations without ophthalmologist access. Sensitivity >87-91% for referable DR.

### Gene therapy for sustained anti-VEGF delivery

ADVM-022, RGX-314, 4D-150 delivering continuous anti-VEGF protein from a single injection via AAV vectors. Challenges include inflammatory response and durability.

### Novel therapeutic targets beyond VEGF

Plasma kallikrein inhibitors, integrin antagonists, Tie2/angiopoietin pathway modulators, and retinal neuroprotection strategies.

### Sustained-release platforms

Ozurdex, Iluvien, and Port Delivery System for extended drug delivery reducing injection burden.

### Precision medicine in DR

OCT biomarkers (hyperreflective foci, ellipsoid zone integrity), pharmacogenomic variants, and AI treatment optimization models.

### GLP-1 agonist paradox

SUSTAIN-6 showed transient DR worsening with semaglutide due to rapid glycemic normalization, not direct drug toxicity; ophthalmologic screening recommended before initiation in patients with pre-existing DR.`,
      keyTerms: [
        {
          term: 'IDx-DR (LumineticsCore)',
          definition:
            'Primer sistema de IA autonomo aprobado por FDA para deteccion de RD mas que leve en punto de atencion primaria sin necesidad de interpretacion por especialista; sensibilidad >87%, especificidad >90%. | First FDA-cleared autonomous AI system for detecting more-than-mild DR at primary care point of care without specialist interpretation; sensitivity >87%, specificity >90%.',
        },
        {
          term: 'RGX-314 (terapia genica)',
          definition:
            'Terapia genica basada en AAV8 que produce endogenamente un fragmento Fab anti-VEGF; administrada por via subretiniana o supracoroidal; en ensayos Fase III para eliminar la carga de inyecciones cronicas. | AAV8-based gene therapy endogenously producing an anti-VEGF Fab fragment; delivered subretinally or suprachoroidally; in Phase III trials to eliminate chronic injection burden.',
        },
        {
          term: 'calicreina plasmatica / plasma kallikrein',
          definition:
            'Serina proteasa del sistema calicreina-cinina que contribuye a permeabilidad vascular retiniana independientemente de VEGF; diana terapeutica emergente para EMD refractario a anti-VEGF. | Serine protease of the kallikrein-kinin system contributing to retinal vascular permeability independently of VEGF; emerging therapeutic target for anti-VEGF-refractory DME.',
        },
        {
          term: 'memoria metabolica / metabolic memory',
          definition:
            'Fenomeno del estudio DCCT/EDIC donde el beneficio del control glucemico intensivo persiste >20 anos despues de la igualacion de HbA1c entre grupos; mediado por modificaciones epigeneticas y AGE acumulados. | DCCT/EDIC study phenomenon where intensive glycemic control benefit persists >20 years after HbA1c equalization between groups; mediated by epigenetic modifications and accumulated AGEs.',
        },
        {
          term: 'efecto paradojico de GLP-1 / GLP-1 paradox effect',
          definition:
            'Empeoramiento transitorio de RD observado con semaglutida en SUSTAIN-6 debido a normalizacion glucemica rapida (similar al efecto DCCT); no toxicidad directa; requiere tamizaje oftalmologico previo. | Transient DR worsening observed with semaglutide in SUSTAIN-6 due to rapid glycemic normalization (similar to DCCT effect); not direct toxicity; requires prior ophthalmologic screening.',
        },
        {
          term: 'Iluvien (acetonida de fluocinolona)',
          definition:
            'Implante intravítreo no biodegradable que libera acetonida de fluocinolona por hasta 36 meses; indicado para EMD cronico, especialmente en pseudofaquicos; riesgo de elevacion de PIO. | Non-biodegradable intravitreal implant releasing fluocinolone acetonide for up to 36 months; indicated for chronic DME, especially in pseudophakics; risk of IOP elevation.',
        },
      ],
      clinicalNotes:
        'Perlas de nivel experto: (1) El tamizaje con IA (IDx-DR) es transformador para comunidades latinas/hispanohablantes con diabetes donde el acceso a oftalmologos es limitado; puede implementarse en clinicas de atencion primaria con camaras no midriaticas portatiles. (2) La terapia genica con RGX-314 administrada por via supracoroidal es particularmente prometedora porque evita la vitrectomia necesaria para la via subretiniana y tiene menos inflamacion que la intravitrea. (3) El efecto paradojico de GLP-1 agonistas en RD es clinicamente importante: antes de iniciar semaglutida/tirzepatida en pacientes con DM2 y RDNP moderada-severa, referir a oftalmologia para evaluacion basal y considerar tratamiento profilactico anti-VEGF si hay alto riesgo de progresion. (4) En EMD refractario a anti-VEGF (sin respuesta despues de 6 inyecciones), considerar cambio a faricimab (mecanismo biespecifico) o implante de dexametasona (Ozurdex), especialmente si hay focos hiperreflectivos abundantes en OCT (marcador inflamatorio que predice respuesta a esteroides). (5) La "memoria metabolica" del DCCT/EDIC enfatiza que el control glucemico temprano es critico -- cada ano de buen control cuenta, y el beneficio persiste decadas. | Expert-level pearls: (1) AI screening (IDx-DR) is transformative for Latino/Spanish-speaking communities with diabetes where ophthalmologist access is limited. (2) Gene therapy with suprachoroidal RGX-314 is particularly promising as it avoids vitrectomy and has less inflammation. (3) The GLP-1 paradox is clinically important: refer to ophthalmology before starting semaglutide/tirzepatide in patients with moderate-severe NPDR. (4) For anti-VEGF-refractory DME (no response after 6 injections), consider switching to faricimab or dexamethasone implant, especially with abundant hyperreflective foci on OCT. (5) "Metabolic memory" from DCCT/EDIC emphasizes early glycemic control is critical -- benefits persist for decades.',
    },
  },

  media: [
    {
      id: 'dr-stages-fundus',
      type: 'image',
      filename: 'diabetic-retinopathy-stages-fundus-es.svg',
      title: 'Estadios de la Retinopatia Diabetica / Diabetic Retinopathy Stages',
      description:
        'Fotografias de fondo mostrando progresion desde microaneurismas hasta neovascularizacion / Fundus photographs showing progression from microaneurysms to neovascularization',
    },
    {
      id: 'dr-oct-dme-patterns',
      type: 'diagram',
      filename: 'dme-oct-patterns-es.svg',
      title: 'Patrones de OCT en Edema Macular Diabetico / OCT Patterns in DME',
      description:
        'Cortes de OCT mostrando liquido subretiniano, quistes intrarretinianos, focos hiperreflectivos y disrupcion de zona elipsoide / OCT sections showing subretinal fluid, intraretinal cysts, hyperreflective foci, and ellipsoid zone disruption',
    },
    {
      id: 'dr-vegf-pathway-diagram',
      type: 'diagram',
      filename: 'vegf-pathway-dr-es.svg',
      title: 'Cascada de VEGF en Retinopatia Diabetica / VEGF Cascade in DR',
      description:
        'Diagrama de la cascada desde hiperglucemia hasta VEGF y neovascularizacion / Diagram of the cascade from hyperglycemia to VEGF and neovascularization',
    },
    {
      id: 'dr-4-2-1-rule-diagram',
      type: 'diagram',
      filename: 'dr-4-2-1-rule-es.svg',
      title: 'Regla 4-2-1 para RDNP Severa / 4-2-1 Rule for Severe NPDR',
      description:
        'Representacion visual de los criterios 4-2-1 en los cuadrantes retinianos / Visual representation of the 4-2-1 criteria in retinal quadrants',
    },
  ],

  citations: [
    {
      id: 'ref-1',
      type: 'textbook',
      title: 'Retina and Vitreous - Basic and Clinical Science Course (BCSC), Section 12',
      authors: ['American Academy of Ophthalmology'],
      source: 'American Academy of Ophthalmology',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'Aflibercept, Bevacizumab, or Ranibizumab for Diabetic Macular Edema (DRCR Protocol T)',
      authors: ['DRCR.net'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1414264',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-3',
      type: 'article',
      title: 'Panretinal Photocoagulation vs Intravitreous Ranibizumab for Proliferative Diabetic Retinopathy (DRCR Protocol S)',
      authors: ['DRCR.net'],
      source: 'JAMA',
      url: 'https://doi.org/10.1001/jama.2015.15217',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-4',
      type: 'article',
      title: 'Effects of Medical Therapies on Retinopathy Progression in Type 2 Diabetes (ACCORD-Eye)',
      authors: ['ACCORD Study Group'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1001288',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-5',
      type: 'article',
      title: 'The Diabetes Control and Complications Trial/Epidemiology of Diabetes Interventions and Complications (DCCT/EDIC)',
      authors: ['DCCT/EDIC Research Group'],
      source: 'New England Journal of Medicine',
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
      label: 'Glaucoma (glaucoma neovascular por isquemia retiniana)',
    },
    {
      targetId: 'condition-amd',
      targetType: 'condition',
      relationship: 'related',
      label: 'Degeneracion Macular / AMD (comparten terapia anti-VEGF)',
    },
    {
      targetId: 'endocrinology-diabetes',
      targetType: 'condition',
      relationship: 'related',
      label: 'Diabetes Mellitus (enfermedad sistemica subyacente)',
    },
    {
      targetId: 'condition-cataracts',
      targetType: 'condition',
      relationship: 'related',
      label: 'Cataratas (catarata diabetica por via del poliol)',
    },
  ],

  tags: {
    systems: ['visual'],
    topics: ['ophthalmology', 'pathology', 'pharmacology', 'screening', 'endocrinology'],
    keywords: [
      'retinopatia diabetica',
      'diabetic retinopathy',
      'edema macular diabetico',
      'diabetic macular edema',
      'anti-VEGF',
      'fotocoagulacion',
      'photocoagulation',
      'tamizaje',
      'screening',
      'inteligencia artificial',
      'terapia genica',
      'gene therapy',
      'faricimab',
      'DRCR',
      'fenofibrato',
    ],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
