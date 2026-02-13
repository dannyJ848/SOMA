/**
 * Degeneracion Macular Relacionada con la Edad / Age-Related Macular Degeneration (AMD)
 * Oftalmologia / Ophthalmology
 *
 * Contenido educativo bilingue (Espanol primero) sobre DMAE:
 * tipos seca vs humeda, tratamiento anti-VEGF e inhibidores del complemento.
 *
 * Bilingual educational content (Spanish-first) on AMD:
 * dry vs wet types, anti-VEGF treatment, and complement inhibitors.
 *
 * Five complexity levels from 8th-grade through MD/Professional.
 */

import { EducationalContent } from '../types';

export const degeneracionMacularAmd: EducationalContent = {
  id: 'condition-amd',
  type: 'condition',
  name: 'Age-Related Macular Degeneration',
  nameEs: 'Degeneracion Macular Relacionada con la Edad',
  alternateNames: [
    'DMAE',
    'AMD',
    'Degeneracion macular senil',
    'Macular degeneration',
    'DMAE seca',
    'Dry AMD',
    'DMAE humeda',
    'Wet AMD',
    'DMAE neovascular',
    'Neovascular AMD',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'La degeneracion macular es una enfermedad de los ojos que afecta la parte central de la vision, haciendo dificil leer, reconocer caras y ver detalles finos. Es la causa principal de perdida de vision en personas mayores de 60 anos. | Macular degeneration is an eye disease that affects the central part of vision, making it difficult to read, recognize faces, and see fine details. It is the leading cause of vision loss in people over 60.',
      explanation: `## Explicacion

La **macula** es un area muy pequena en el centro de la retina (la pantalla del ojo). Es la parte mas importante para ver detalles finos como letras, numeros y caras. Cuando la macula se dana con la edad, se llama **degeneracion macular relacionada con la edad (DMAE)**.

### Dos tipos de DMAE

**DMAE seca (la mas comun -- 90% de los casos):**
- Se forman depositos amarillos llamados **drusas** debajo de la retina
- La macula se adelgaza y se debilita poco a poco
- La perdida de vision es lenta, a lo largo de anos
- En etapas avanzadas, puede causar una zona ciega en el centro de la vision (**atrofia geografica**)
- No tiene cura, pero vitaminas especiales pueden retrasar el avance

**DMAE humeda (menos comun pero mas grave -- 10% de los casos):**
- Vasos sanguineos anormales crecen debajo de la retina
- Estos vasos son fragiles y gotean sangre y liquido
- La perdida de vision puede ser **rapida** -- en dias o semanas
- Se trata con **inyecciones en el ojo** que detienen el crecimiento de los vasos anormales
- Con tratamiento temprano, se puede mantener mucha de la vision

### Sintomas

- Vision borrosa en el centro
- Las lineas rectas se ven onduladas o torcidas
- Un punto oscuro o borroso en el centro de la vision
- Dificultad para leer, coser o reconocer caras
- Necesitar mas luz para actividades de cerca

### Factores de riesgo

- **Edad** (mayor de 60 anos)
- **Fumar** -- es el factor de riesgo modificable mas importante
- Antecedentes familiares
- Raza caucasica
- Obesidad y dieta pobre

### Proteccion y prevencion

- **No fumar** o dejar de fumar
- Comer frutas, verduras de hoja verde (espinacas, kale) y pescado
- Usar **lentes de sol** para proteger del sol
- Examenes de ojos regulares despues de los 50 anos
- **Vitaminas AREDS2** si su doctor las recomienda

---
## Explanation

The **macula** is a very small area in the center of the retina (the eye's screen). It is the most important part for seeing fine details like letters, numbers, and faces. When the macula is damaged with age, it is called **age-related macular degeneration (AMD)**.

### Two types of AMD

**Dry AMD (most common -- 90% of cases):**
- Yellow deposits called **drusen** form under the retina
- The macula thins and weakens gradually
- Vision loss is slow, over years
- In advanced stages, can cause a blind spot in central vision (**geographic atrophy**)
- No cure, but special vitamins can slow progression

**Wet AMD (less common but more serious -- 10% of cases):**
- Abnormal blood vessels grow under the retina
- These vessels are fragile and leak blood and fluid
- Vision loss can be **rapid** -- in days or weeks
- Treated with **injections in the eye** that stop abnormal vessel growth
- With early treatment, much vision can be preserved

### Symptoms

- Blurred central vision
- Straight lines look wavy or crooked
- A dark or blurry spot in the center of vision
- Difficulty reading, sewing, or recognizing faces
- Needing more light for close-up activities

### Protection and prevention

- **Do not smoke** or quit smoking
- Eat fruits, leafy green vegetables (spinach, kale), and fish
- Wear **sunglasses** for sun protection
- Regular eye exams after age 50
- **AREDS2 vitamins** if your doctor recommends them`,
      keyTerms: [
        {
          term: 'macula',
          definition:
            'El area central de la retina donde vemos los detalles finos como letras y caras; su deterioro causa la degeneracion macular. | The central area of the retina where we see fine details like letters and faces; its deterioration causes macular degeneration.',
        },
        {
          term: 'degeneracion macular (DMAE) / macular degeneration (AMD)',
          definition:
            'Enfermedad del ojo relacionada con la edad que dana la macula, causando perdida de la vision central. Hay dos tipos: seca (lenta) y humeda (rapida). | Age-related eye disease that damages the macula, causing central vision loss. There are two types: dry (slow) and wet (rapid).',
        },
        {
          term: 'drusas / drusen',
          definition:
            'Depositos amarillos que se forman debajo de la retina; son la senal temprana de DMAE seca. | Yellow deposits that form under the retina; they are the early sign of dry AMD.',
        },
        {
          term: 'atrofia geografica / geographic atrophy',
          definition:
            'La etapa avanzada de DMAE seca donde la macula se adelgaza tanto que muere, dejando un area ciega permanente. | The advanced stage of dry AMD where the macula thins so much it dies, leaving a permanent blind area.',
        },
        {
          term: 'inyecciones anti-VEGF / anti-VEGF injections',
          definition:
            'Medicamentos que se inyectan en el ojo para detener el crecimiento de vasos sanguineos anormales en la DMAE humeda. | Medications injected into the eye to stop the growth of abnormal blood vessels in wet AMD.',
        },
      ],
      analogies: [
        'La macula es como el centro de una pantalla de television -- si se dana el centro, todavia puedes ver los bordes pero no lo mas importante. | The macula is like the center of a TV screen -- if the center is damaged, you can still see the edges but not the most important part.',
        'La DMAE seca es como un papel viejo que se va amarillando y agrietando con el tiempo. | Dry AMD is like old paper that slowly yellows and cracks over time.',
        'La DMAE humeda es como raices de arbol que crecen a traves de una banqueta -- los vasos anormales rompen la estructura de la retina. | Wet AMD is like tree roots growing through a sidewalk -- the abnormal vessels break through the retinal structure.',
        'Las drusas son como basura que se acumula debajo de una alfombra -- al principio no se nota, pero con el tiempo hace que la alfombra (retina) se deforme. | Drusen are like trash accumulating under a carpet -- at first you do not notice, but over time it makes the carpet (retina) deform.',
      ],
      examples: [
        'Una abuela que nota que las lineas del crucigrama se ven onduladas podria tener el inicio de DMAE humeda y debe ir al oculista de inmediato. | A grandmother who notices crossword puzzle lines look wavy may have the beginning of wet AMD and should see the eye doctor immediately.',
        'Un abuelo que dice que tiene un punto borroso en el centro de la vision cuando trata de leer podria tener DMAE. | A grandfather who says he has a blurry spot in the center of his vision when trying to read may have AMD.',
        'Una persona diagnosticada con DMAE seca intermedia que empieza a tomar vitaminas AREDS2 puede retrasar la progresion de la enfermedad. | A person diagnosed with intermediate dry AMD who starts taking AREDS2 vitamins can slow disease progression.',
      ],
      patientCounselingPoints: [
        'Si le diagnosticaron DMAE, use la rejilla de Amsler en su casa todos los dias -- es una cuadricula que le ayuda a detectar cambios tempranos en su vision. Si las lineas se ven onduladas o hay un punto oscuro, llame al doctor de inmediato. | If diagnosed with AMD, use the Amsler grid at home every day -- it is a grid that helps detect early changes in your vision. If lines look wavy or there is a dark spot, call the doctor immediately.',
        'Dejar de fumar es lo mas importante que puede hacer para proteger sus ojos de la DMAE. Fumar duplica el riesgo. | Quitting smoking is the most important thing you can do to protect your eyes from AMD. Smoking doubles the risk.',
        'Si tiene DMAE humeda y necesita inyecciones, es muy importante no faltar a las citas. Las inyecciones no duelen mucho y pueden salvar su vision. | If you have wet AMD and need injections, it is very important not to miss appointments. Injections do not hurt much and can save your vision.',
        'Comer espinacas, kale, brocoli y pescado regularmente puede ayudar a proteger su macula por las vitaminas y nutrientes que contienen. | Eating spinach, kale, broccoli, and fish regularly can help protect your macula because of the vitamins and nutrients they contain.',
      ],
    },

    2: {
      level: 2,
      summary:
        'La DMAE es una enfermedad degenerativa de la macula con dos formas: seca (drusas, atrofia del EPR, atrofia geografica) y humeda (neovascularizacion coroidea); el tratamiento incluye vitaminas AREDS2, anti-VEGF intravítreo e inhibidores del complemento. | AMD is a degenerative disease of the macula with two forms: dry (drusen, RPE atrophy, geographic atrophy) and wet (choroidal neovascularization); treatment includes AREDS2 vitamins, intravitreal anti-VEGF, and complement inhibitors.',
      explanation: `## Explicacion

### Anatomia de la macula

La macula es la region central de la retina (~5.5 mm de diametro) responsable de la vision de alta resolucion. Contiene la **fovea** (1.5 mm), la zona de mayor concentracion de conos (fotorreceptores para color y detalle).

Capas relevantes para DMAE:
- **Fotorreceptores:** Conos concentrados en la fovea; bastones en la periferia
- **Epitelio pigmentario retiniano (EPR):** Capa unicelular que nutre a los fotorreceptores, fagocita sus segmentos externos, y procesa el ciclo visual (retinoides)
- **Membrana de Bruch:** Barrera entre EPR y coroides; se engrosa y calcifica con la edad
- **Coroides:** Capa vascular que proporciona oxigeno y nutrientes al EPR y retina externa

### DMAE seca

**Drusas:**
- Depositos entre el EPR y la membrana de Bruch
- Compuestas de lipidos, componentes del complemento (C3, C5, CFH), amiloide-beta, apolipoproteina E
- Representan desechos metabolicos del EPR que no pueden cruzar una membrana de Bruch envejecida

| Tamano de drusas | Clasificacion | Significado |
|------------------|--------------|-------------|
| <63 micrometros | Pequenas (drupas) | Envejecimiento normal |
| 63-124 micrometros | Intermedias | DMAE intermedia; riesgo moderado |
| >=125 micrometros | Grandes | Alto riesgo de progresion a DMAE avanzada |

**Progresion de DMAE seca:**
1. DMAE temprana: Drusas intermedias; sin perdida visual
2. DMAE intermedia: Drusas grandes o cambios pigmentarios
3. DMAE avanzada seca (atrofia geografica): Areas bien delimitadas de perdida de EPR y fotorreceptores; vision central destruida

**Vitaminas AREDS2:**
- Indicadas para DMAE intermedia o DMAE avanzada en un ojo
- Formulacion: Vitamina C (500 mg), vitamina E (400 UI), zinc (80 mg), luteina (10 mg), zeaxantina (2 mg)
- Reducen riesgo de progresion a DMAE avanzada en ~25%
- **NO curan** la enfermedad; solo retrasan la progresion
- La formulacion original AREDS1 incluia beta-caroteno, que fue reemplazado por luteina/zeaxantina en AREDS2 (beta-caroteno aumenta riesgo de cancer de pulmon en fumadores)

### DMAE humeda (neovascular)

**Neovascularizacion coroidea (NVC):**
- Vasos sanguineos anormales crecen desde la coroides a traves de la membrana de Bruch hacia el espacio sub-EPR o subretiniano
- Los vasos nuevos son inmaduros, sin pericitos, y gotean liquido y sangre
- Causa perdida rapida de vision central

**Factor impulsor: VEGF**
- La hipoxia y estres del EPR aumentan la produccion de VEGF-A
- VEGF impulsa el crecimiento de vasos anormales y aumenta la permeabilidad vascular

**Tratamiento anti-VEGF intravítreo:**

| Agente | Diana | Intervalo tipico | Ensayo clave |
|--------|-------|-----------------|-------------|
| Ranibizumab (Lucentis) | VEGF-A | Mensual o c/8 sem | MARINA, ANCHOR |
| Aflibercept (Eylea) | VEGF-A, B, PlGF | c/8 sem tras carga | VIEW 1/2 |
| Bevacizumab (Avastin) | VEGF-A | Mensual (off-label) | CATT |
| Faricimab (Vabysmo) | VEGF-A + Ang-2 | Hasta c/16 sem | TENAYA/LUCERNE |
| Aflibercept 8 mg (Eylea HD) | VEGF-A, B, PlGF | c/12-16 sem | PULSAR |

### Inhibidores del complemento para atrofia geografica

Primer tratamiento aprobado para DMAE seca avanzada:
- **Pegcetacoplan (Syfovre):** Inhibidor de C3; reduce crecimiento de AG en ~20-30% (ensayos OAKS/DERBY)
- **Avacincaptad pegol (Izervay):** Inhibidor de C5; reduccion similar de AG (ensayos GATHER1/2)

### Diagnostico

- **Rejilla de Amsler:** Prueba casera de automonitoreo; metamorfopsia = DMAE humeda
- **OCT:** Visualiza drusas, liquido subretiniano, liquido intrarretiniano, DEP, atrofia geografica
- **Angiografia con fluoresceina (AGF):** Identifica NVC, fugas vasculares
- **Autofluorescencia del fondo (FAF):** Mapea areas de disfuncion del EPR; util para seguimiento de AG
- **OCTA:** Visualiza NVC sin inyeccion de colorante

---
## Explanation

### Macula anatomy

The macula is the central retinal region (~5.5 mm diameter) responsible for high-resolution vision, containing the fovea with highest cone concentration.

### Dry AMD

Drusen are deposits between RPE and Bruch membrane composed of lipids, complement components, and metabolic waste. Classification by size determines risk. Progression: early -> intermediate -> advanced (geographic atrophy). AREDS2 vitamins reduce progression risk by ~25%.

### Wet (neovascular) AMD

Choroidal neovascularization driven by VEGF. Anti-VEGF intravitreal injections (ranibizumab, aflibercept, bevacizumab, faricimab) are first-line treatment.

### Complement inhibitors for geographic atrophy

Pegcetacoplan (C3 inhibitor) and avacincaptad pegol (C5 inhibitor) -- first approved treatments for dry AMD, reducing GA growth by ~20-30%.`,
      keyTerms: [
        {
          term: 'epitelio pigmentario retiniano (EPR) / retinal pigment epithelium (RPE)',
          definition:
            'Capa unicelular debajo de los fotorreceptores que los nutre, fagocita segmentos externos y procesa retinoides; su degeneracion es central en la DMAE. | Single-cell layer beneath photoreceptors that nourishes them, phagocytoses outer segments, and processes retinoids; its degeneration is central to AMD.',
        },
        {
          term: 'membrana de Bruch / Bruch membrane',
          definition:
            'Barrera pentalaminar entre el EPR y la coroides que se engrosa y calcifica con la edad, impidiendo el intercambio metabolico y contribuyendo a la formacion de drusas. | Pentalaminar barrier between RPE and choroid that thickens and calcifies with age, impeding metabolic exchange and contributing to drusen formation.',
        },
        {
          term: 'neovascularizacion coroidea (NVC) / choroidal neovascularization (CNV)',
          definition:
            'Crecimiento de vasos sanguineos anormales desde la coroides a traves de la membrana de Bruch; caracteristica definitoria de la DMAE humeda; causa fuga de liquido y sangre. | Growth of abnormal blood vessels from the choroid through Bruch membrane; defining feature of wet AMD; causes fluid and blood leakage.',
        },
        {
          term: 'vitaminas AREDS2',
          definition:
            'Suplemento vitaminico (C, E, zinc, luteina, zeaxantina) que reduce en ~25% el riesgo de progresion a DMAE avanzada en pacientes con DMAE intermedia. | Vitamin supplement (C, E, zinc, lutein, zeaxanthin) reducing by ~25% the risk of progression to advanced AMD in patients with intermediate AMD.',
        },
        {
          term: 'pegcetacoplan (Syfovre)',
          definition:
            'Inhibidor del complemento C3 aprobado para atrofia geografica; primer tratamiento farmacologico para DMAE seca avanzada; reduce crecimiento de AG en ~20-30%. | C3 complement inhibitor approved for geographic atrophy; first pharmacological treatment for advanced dry AMD; reduces GA growth by ~20-30%.',
          pronunciation: 'peg-SET-ah-KOH-plan',
        },
        {
          term: 'rejilla de Amsler / Amsler grid',
          definition:
            'Cuadricula de lineas rectas usada como prueba casera de automonitoreo; lineas onduladas (metamorfopsia) sugieren DMAE humeda y requieren evaluacion urgente. | Grid of straight lines used as home self-monitoring test; wavy lines (metamorphopsia) suggest wet AMD and require urgent evaluation.',
        },
      ],
      analogies: [
        'El EPR es como un servicio de limpieza que trabaja 24/7 para mantener los fotorreceptores sanos; cuando el servicio falla (DMAE), la basura se acumula (drusas) y el piso (retina) se deteriora. | The RPE is like a cleaning service working 24/7 to keep photoreceptors healthy; when the service fails (AMD), trash accumulates (drusen) and the floor (retina) deteriorates.',
        'La membrana de Bruch envejecida es como una tuberia oxidada y calcificada -- los nutrientes ya no pasan bien y los desechos no se eliminan. | The aged Bruch membrane is like a rusted and calcified pipe -- nutrients no longer pass well and waste is not eliminated.',
        'Las inyecciones anti-VEGF son como cortarle el suministro de agua a las raices que estan rompiendo la banqueta -- sin agua, dejan de crecer y causar dano. | Anti-VEGF injections are like cutting the water supply to roots breaking the sidewalk -- without water, they stop growing and causing damage.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La fisiopatologia de la DMAE involucra disregulacion de la cascada del complemento, disfuncion del EPR-membrana de Bruch, estrés oxidativo, y en la forma humeda, sobreexpresion de VEGF-A que impulsa la neovascularizacion coroidea; la interpretacion de OCT y las estrategias de tratamiento guiadas por imagen son fundamentales. | AMD pathophysiology involves complement cascade dysregulation, RPE-Bruch membrane dysfunction, oxidative stress, and in the wet form, VEGF-A overexpression driving choroidal neovascularization; OCT interpretation and image-guided treatment strategies are fundamental.',
      explanation: `## Explicacion

### Fisiopatologia: cascada del complemento y estres oxidativo

**Genetica de la DMAE:**
La DMAE tiene un fuerte componente genetico (~50-70% heredable). Dos loci geneticos principales:

| Locus | Cromosoma | Gen | Efecto |
|-------|-----------|-----|--------|
| 1q32 | 1 | CFH (Factor H del complemento) | Polimorfismo Y402H reduce la funcion reguladora de Factor H en la membrana de Bruch -> activacion descontrolada del complemento |
| 10q26 | 10 | ARMS2/HTRA1 | Disfuncion mitocondrial, estres del EPR, susceptibilidad a inflamacion |

**Otros genes de riesgo:** C3, CFI, CFB, C2, APOE, LIPC, CETP, TIMP3

**Cascada del complemento en DMAE:**
1. Factor H normalmente regula (frena) la via alternativa del complemento en la membrana de Bruch
2. El polimorfismo CFH Y402H reduce esta funcion reguladora
3. Activacion descontrolada del complemento:
   - C3 convertasa -> C3a (inflamacion) + C3b (opsonizacion)
   - C5 convertasa -> C5a (quimiotaxis) + C5b
   - C5b-9 forma el complejo de ataque de membrana (MAC)
4. MAC dana celulas del EPR -> muerte celular, inflamacion cronica
5. Deposito de componentes del complemento en drusas
6. Ciclo perpetuo: Dano EPR -> mas activacion del complemento -> mas dano

**Estres oxidativo:**
- La retina tiene el mayor consumo de oxigeno por peso de cualquier tejido
- Fotorreceptores generan enormes cantidades de radicales libres (ROS) por fotooxidacion
- Lipofuscina (pigmento fluorescente) se acumula en EPR con la edad
  - A2E (componente principal de lipofuscina): Fototoxica, inhibe funcion lisosomal
- Sistema antioxidante: Luteina, zeaxantina (pigmento macular), vitaminas C y E, zinc-SOD
- El desequilibrio oxidativo + complemento = cataclismo para el EPR

### EPR y membrana de Bruch: la interface critica

**Funciones del EPR afectadas en DMAE:**
1. Fagocitosis de segmentos externos de fotorreceptores (10% diario)
2. Transporte de nutrientes (retinol, glucosa, acidos grasos) de coroides a fotorreceptores
3. Absorcion de luz dispersa (melanina)
4. Procesamiento del ciclo visual (retinoides: todo-trans-retinal -> 11-cis-retinal)
5. Secrecion de VEGF (basal, hacia coroides), PEDF (hacia retina -- anti-angiogenico)
6. Transporte ionico y de agua (mantiene adherencia retiniana)

**Cambios en membrana de Bruch con la edad:**
- Engrosamiento: De 2 micrometros en joven a >6 micrometros en anciano
- Calcificacion y deposito de lipidos
- Perdida de permeabilidad: Conductividad hidraulica disminuye exponencialmente
- Resultado: Desechos del EPR no pueden eliminarse -> formacion de drusas

### Interpretacion de OCT en DMAE

| Hallazgo OCT | Descripcion | Significado clinico |
|-------------|-------------|---------------------|
| Drusas | Elevaciones del EPR con reflectividad media | DMAE seca; tamano predice riesgo |
| Desprendimiento del EPR (DEP) | Elevacion del EPR con espacio sub-EPR | Drusenoide, seroso o fibrovascular |
| Drusas reticulares (SDD) | Depositos subretinianos sobre el EPR | Mayor riesgo de atrofia que drusas convencionales |
| Liquido subretiniano (LSR) | Espacio oscuro entre retina neurosensorial y EPR | DMAE humeda activa |
| Liquido intrarretiniano (LIR) | Espacios quisticos dentro de la retina | DMAE humeda activa; peor pronostico vs solo LSR |
| Atrofia geografica | Perdida de EPR, banda elipsoide y capa nuclear externa | DMAE seca avanzada; hiperreflectividad coroidea |
| Membrana neovascular | Tejido hiperreflectivo sub-EPR o subretiniano en OCTA | NVC tipo 1 (sub-EPR) o tipo 2 (subretiniano) |

### Estrategias de dosificacion anti-VEGF

**Tratar y extender (T&E) -- actualmente preferida:**
1. Inyecciones mensuales hasta macula seca (carga)
2. Extender intervalo 2 semanas si permanece seca
3. Acortar 2 semanas si recurrencia de liquido
4. Intervalo maximo individualizado
5. Ventaja: Menos visitas, similar eficacia

**Ensayos clinicos clave:**

| Ensayo | Agente | Comparacion | Hallazgo principal |
|--------|--------|-------------|-------------------|
| MARINA | Ranibizumab | vs simulado | Ganancia de 6.6 letras a 24 meses |
| ANCHOR | Ranibizumab | vs verteporfina PDT | Ranibizumab superior |
| CATT | Bevacizumab vs ranibizumab | Equivalencia | Bevacizumab no inferior mensual; PRN similar |
| VIEW 1/2 | Aflibercept | vs ranibizumab | Aflibercept c/8 sem no inferior a ranibizumab mensual |
| TENAYA/LUCERNE | Faricimab | vs aflibercept | Faricimab hasta c/16 sem no inferior |
| PULSAR | Aflibercept 8 mg | vs aflibercept 2 mg | 8 mg permite intervalos c/12-16 sem |

---
## Explanation

### Pathophysiology: complement cascade and oxidative stress

AMD genetics: ~50-70% heritable. CFH Y402H polymorphism (chromosome 1) impairs complement regulation at Bruch membrane. ARMS2/HTRA1 (chromosome 10) linked to mitochondrial dysfunction.

Complement cascade: Uncontrolled alternative pathway activation -> MAC deposition -> RPE damage -> drusen formation -> chronic inflammation cycle.

Oxidative stress: Highest oxygen consumption tissue, lipofuscin/A2E accumulation, photooxidation overwhelming antioxidant defenses (lutein, zeaxanthin, vitamins C/E).

### RPE and Bruch membrane interface

RPE functions affected in AMD: photoreceptor phagocytosis, nutrient transport, visual cycle processing, VEGF/PEDF balance. Bruch membrane thickening reduces permeability exponentially with age.

### OCT interpretation in AMD

Key findings with clinical significance: drusen, RPE detachment, subretinal drusenoid deposits, subretinal fluid, intraretinal fluid, geographic atrophy, neovascular membranes.

### Anti-VEGF dosing and landmark trials

Treat-and-extend preferred strategy. MARINA, ANCHOR, CATT, VIEW, TENAYA/LUCERNE, and PULSAR trial results summarized.`,
      keyTerms: [
        {
          term: 'factor H del complemento (CFH) / complement factor H',
          definition:
            'Principal regulador negativo de la via alternativa del complemento; el polimorfismo Y402H es el factor de riesgo genetico mas fuerte para DMAE, causando activacion descontrolada del complemento en la membrana de Bruch. | Key negative regulator of the complement alternative pathway; the Y402H polymorphism is the strongest genetic risk factor for AMD, causing uncontrolled complement activation at Bruch membrane.',
        },
        {
          term: 'ARMS2/HTRA1',
          definition:
            'Segundo locus genetico principal de riesgo para DMAE (cromosoma 10); asociado con disfuncion mitocondrial, estres del EPR y susceptibilidad a inflamacion. | Second major AMD genetic risk locus (chromosome 10); associated with mitochondrial dysfunction, RPE stress, and inflammation susceptibility.',
        },
        {
          term: 'lipofuscina / A2E',
          definition:
            'Pigmento fluorescente que se acumula en el EPR con la edad; A2E es su componente fotoxico principal que inhibe la funcion lisosomal y contribuye al dano del EPR. | Fluorescent pigment accumulating in RPE with age; A2E is its main phototoxic component that inhibits lysosomal function and contributes to RPE damage.',
        },
        {
          term: 'drusas reticulares (SDD) / subretinal drusenoid deposits',
          definition:
            'Depositos sobre el EPR (a diferencia de drusas convencionales que estan debajo); asociadas con mayor riesgo de progresion a atrofia geografica y DMAE humeda tipo 3. | Deposits above the RPE (unlike conventional drusen below); associated with higher risk of progression to geographic atrophy and type 3 wet AMD.',
        },
        {
          term: 'complejo de ataque de membrana (MAC) / membrane attack complex',
          definition:
            'Complejo C5b-9 del complemento que forma poros en membranas celulares; su deposito en el EPR causa dano celular y contribuye a la patogenesis de la DMAE. | Complement C5b-9 complex forming pores in cell membranes; its deposition on RPE causes cell damage and contributes to AMD pathogenesis.',
        },
        {
          term: 'PEDF (factor derivado del epitelio pigmentario) / pigment epithelium-derived factor',
          definition:
            'Proteina anti-angiogenica secretada por el EPR hacia la retina; contrarresta el efecto pro-angiogenico de VEGF; su disminucion contribuye a la neovascularizacion en DMAE humeda. | Anti-angiogenic protein secreted by RPE toward the retina; counteracts the pro-angiogenic effect of VEGF; its decrease contributes to neovascularization in wet AMD.',
        },
        {
          term: 'autofluorescencia del fondo (FAF) / fundus autofluorescence',
          definition:
            'Tecnica de imagen que detecta la fluorescencia natural de la lipofuscina en el EPR; areas hiper-AF rodean la AG y predicen progresion; areas hipo-AF indican perdida del EPR. | Imaging technique detecting the natural fluorescence of RPE lipofuscin; hyper-AF areas surround GA and predict progression; hypo-AF areas indicate RPE loss.',
        },
      ],
      clinicalNotes:
        'La diferenciacion OCT entre NVC tipo 1 (sub-EPR, relativamente menos agresiva) y tipo 2 (subretiniana, mas exudativa) tiene implicaciones pronosticas. NVC tipo 3 (proliferacion angiomatosa retiniana/RAP) se origina dentro de la retina y tiene el peor pronostico. Las drusas reticulares (SDD) son un biomarcador emergente de alto riesgo -- confieren mayor riesgo de atrofia geografica que las drusas convencionales y son mejor visualizadas en OCT que en fotografia de fondo. El balance VEGF/PEDF es clave: en condiciones normales el EPR secreta PEDF (anti-angiogenico) apicalmente y VEGF (pro-angiogenico) basalmente; la disfuncion del EPR invierte este balance, favoreciendo NVC. | OCT differentiation between type 1 CNV (sub-RPE, relatively less aggressive) and type 2 (subretinal, more exudative) has prognostic implications. Type 3 CNV (retinal angiomatous proliferation/RAP) originates within the retina and has the worst prognosis. Subretinal drusenoid deposits (SDD) are an emerging high-risk biomarker -- they confer greater GA risk than conventional drusen and are better visualized on OCT than fundus photography.',
    },

    4: {
      level: 4,
      summary:
        'El manejo avanzado de la DMAE integra la farmacologia detallada de agentes anti-VEGF y biespecificos, terapeuticas del complemento para atrofia geografica, clasificacion avanzada de NVC, OCT como biomarcador guia, y estrategias de tratamiento personalizadas basadas en ensayos clinicos. | Advanced AMD management integrates detailed pharmacology of anti-VEGF and bispecific agents, complement therapeutics for geographic atrophy, advanced CNV classification, OCT as a guiding biomarker, and personalized treatment strategies based on clinical trials.',
      explanation: `## Explicacion

### Farmacologia anti-VEGF avanzada

**Mecanismos moleculares detallados:**

| Agente | Diana(s) | Estructura | Peso molecular | Afinidad (Kd) |
|--------|----------|-----------|----------------|--------------|
| Ranibizumab | VEGF-A (todas isoformas) | Fragmento Fab humanizado | 48 kDa | ~46 pM |
| Bevacizumab | VEGF-A (todas isoformas) | Anticuerpo completo humanizado | 149 kDa | ~58 pM |
| Aflibercept | VEGF-A, VEGF-B, PlGF | Proteina de fusion (VEGF trap) | 115 kDa | ~0.5 pM (VEGF-A165) |
| Brolucizumab | VEGF-A | scFv (fragmento variable de cadena unica) | 26 kDa | ~30 pM |
| Faricimab | VEGF-A + Ang-2 | Anticuerpo biespecifico (CrossMAb) | 150 kDa | VEGF: ~1 pM; Ang-2: ~1 pM |
| Aflibercept 8 mg | VEGF-A, VEGF-B, PlGF | Fusion proteica alta dosis | 115 kDa | ~0.5 pM |

**Faricimab -- mecanismo biespecifico en detalle:**
- Un brazo Fab se une a VEGF-A (bloquea angiogenesis y permeabilidad)
- Otro brazo Fab se une a angiopoyetina-2 (Ang-2)
- Ang-2 normalmente antagoniza el receptor Tie2 en celulas endoteliales
- Bloqueo de Ang-2 restaura la senalizacion Tie2 -> activacion de Tie2 -> uniones endoteliales mas estrechas, vasos mas estables
- Efecto dual: Anti-angiogenico + estabilizacion vascular
- Ensayos TENAYA/LUCERNE: ~60% de pacientes alcanzaron intervalos de 16 semanas
- Tecnologia CrossMAb de Roche: Heterodimerización de cadenas pesadas + intercambio de dominios

**Brolucizumab -- advertencia de seguridad:**
- Tamano molecular mas pequeno (26 kDa) permite mayor penetracion tisular y concentracion molar
- Ensayos HAWK/HARRIER demostraron intervalo c/12 sem
- **Alerta de seguridad:** Mayor incidencia de vasculitis retiniana, vasculitis oclusiva y uveitis
- Mecanismo propuesto: Respuesta inmune contra la molecula de scFv
- Uso reservado para pacientes que no responden a otros agentes

### Terapeuticas del complemento para atrofia geografica

| Diana | Farmaco | Estado | Mecanismo | Datos clave |
|-------|---------|--------|-----------|-------------|
| C3 | Pegcetacoplan (Syfovre) | FDA aprobado | Inhibe C3, bloqueando todas las vias del complemento downstream | OAKS/DERBY: ~22% reduccion AG mensual, ~18% bimensual a 24 meses |
| C5 | Avacincaptad pegol (Izervay) | FDA aprobado | Inhibe C5, previene formacion de MAC | GATHER1/2: ~22% reduccion AG a 12 meses |
| Factor D | Lampalizumab | Fase III fallida | Inhibia Factor D de la via alternativa | SPECTRI/CHROMA: Sin senal de eficacia |
| Factor B | Iptacopan | Fase II | Inhibidor oral de Factor B | Via oral; potencial para tratamiento no invasivo |

**Pegcetacoplan vs avacincaptad pegol:**
- Pegcetacoplan inhibe C3 (mas arriba en la cascada) -> bloquea TODAS las vias downstream incluyendo C3a, C5a, MAC y opsonizacion
- Avacincaptad pegol inhibe C5 (mas abajo) -> bloquea C5a y MAC pero no C3a ni opsonizacion
- Ambos son intravítreos; pegcetacoplan mensual o bimensual; avacincaptad mensual
- **Riesgo compartido:** Mayor incidencia de NVC (conversion a DMAE humeda) vs placebo -- requiere monitoreo

### Clasificacion avanzada de NVC

| Tipo NVC | Localizacion | Fuente | OCT | Pronostico |
|----------|-------------|--------|-----|-----------|
| Tipo 1 | Sub-EPR | Coroides | DEP fibrovascular | Relativamente bueno; responde bien a anti-VEGF |
| Tipo 2 | Subretiniana | Coroides (traspasa EPR) | Tejido hiperreflectivo sobre EPR; LSR | Intermedio |
| Tipo 3 (RAP) | Intrarretiniana | Retina (anastomosis retino-coroidea) | Quistes intrarretinianos, DEP | Peor; bilateral frecuentemente |
| Vasculopatia coroidea polipoidea (PCV) | Sub-EPR | Coroides | Dilataciones polipoidales; DEP serosanguinolento | Responde mejor a combinacion PDT + anti-VEGF (estudio EVEREST II) |

### Biomarcadores OCT para guia de tratamiento

**Biomarcadores de actividad (tratamiento necesario):**
- LSR nuevo o aumentado
- LIR nuevo o aumentado
- DEP nuevo o creciente
- Hemorragia subretiniana o sub-EPR nueva

**Biomarcadores pronosticos:**
- Integridad de zona elipsoide: Predictor mas fuerte de agudeza visual final
- Grosor de la capa nuclear externa: Correlaciona con funcion de fotorreceptores
- Atrofia del EPR (hiperreflectividad coroidea): Irreversible; marca limite de recuperacion
- Focos hiperreflectivos: Marcador inflamatorio; puede predecir respuesta a esteroides

**Biomarcadores de riesgo de progresion en DMAE seca:**
- Drusas reticulares (SDD): Mayor riesgo de AG que drusas convencionales
- Hiper-autofluorescencia perilesional en FAF: Predice expansion de AG
- Deposito drusenoide con colapso: Precursor de AG

### Terapia fotodinamica (PDT) con verteporfina

- Mecanismo: Verteporfina IV se acumula en NVC -> laser 689 nm activa verteporfina -> radicales libres -> trombosis de NVC
- Indicacion actual limitada: PCV (combinada con anti-VEGF, estudio EVEREST II), NVC clasica extrafoveal
- Mayormente reemplazada por anti-VEGF como primera linea

---
## Explanation

### Advanced anti-VEGF pharmacology

Detailed molecular mechanisms, binding affinities, and structures of ranibizumab, bevacizumab, aflibercept, brolucizumab, faricimab, and aflibercept 8 mg. Faricimab CrossMAb bispecific mechanism targeting both VEGF-A and Ang-2 for dual anti-angiogenic and vascular stabilization.

### Complement therapeutics for geographic atrophy

Pegcetacoplan (C3 inhibitor) and avacincaptad pegol (C5 inhibitor) approved; lampalizumab (Factor D) failed. Shared risk of CNV conversion requiring monitoring.

### Advanced CNV classification

Types 1-3 and polypoidal choroidal vasculopathy (PCV) with OCT characteristics, prognosis, and treatment implications.

### OCT biomarkers guiding treatment

Activity biomarkers (new/increased fluid), prognostic biomarkers (ellipsoid zone integrity, ONL thickness), and progression risk biomarkers in dry AMD.`,
      keyTerms: [
        {
          term: 'faricimab CrossMAb / faricimab bispecific',
          definition:
            'Primer anticuerpo biespecifico retiniano usando tecnologia CrossMAb de Roche; un brazo une VEGF-A, otro une Ang-2; la estabilizacion vascular via Tie2 permite intervalos hasta 16 semanas. | First retinal bispecific antibody using Roche CrossMAb technology; one arm binds VEGF-A, another binds Ang-2; vascular stabilization via Tie2 enables intervals up to 16 weeks.',
        },
        {
          term: 'brolucizumab (Beovu)',
          definition:
            'Fragmento scFv anti-VEGF de 26 kDa con alta concentracion molar; permite intervalos c/12 sem pero con riesgo aumentado de vasculitis retiniana oclusiva e inflamacion intraocular. | 26 kDa anti-VEGF scFv fragment with high molar concentration; enables q12w intervals but with increased risk of retinal occlusive vasculitis and intraocular inflammation.',
        },
        {
          term: 'NVC tipo 3 (RAP) / type 3 CNV (RAP)',
          definition:
            'Proliferacion angiomatosa retiniana que se origina dentro de la retina y crea anastomosis retino-coroidea; peor pronostico que tipos 1-2; frecuentemente bilateral; responde a anti-VEGF pero con alta tasa de recurrencia. | Retinal angiomatous proliferation originating within the retina creating retino-choroidal anastomosis; worse prognosis than types 1-2; frequently bilateral; responds to anti-VEGF but with high recurrence.',
        },
        {
          term: 'vasculopatia coroidea polipoidea (PCV)',
          definition:
            'Subtipo de NVC con dilataciones vasculares polipoidales; mas comun en asiaticos y afrodescendientes; responde mejor a combinacion de PDT + anti-VEGF que a anti-VEGF solo (EVEREST II). | CNV subtype with polypoidal vascular dilations; more common in Asian and African-descent populations; responds better to PDT + anti-VEGF combination than anti-VEGF alone (EVEREST II).',
        },
        {
          term: 'drusas reticulares (SDD) / subretinal drusenoid deposits',
          definition:
            'Depositos sobre el EPR mejor visualizados por OCT; confieren mayor riesgo de atrofia geografica y NVC tipo 3 que las drusas convencionales sub-EPR; biomarcador emergente de alto riesgo. | Deposits above RPE best visualized by OCT; confer greater risk of geographic atrophy and type 3 CNV than conventional sub-RPE drusen; emerging high-risk biomarker.',
        },
        {
          term: 'receptor Tie2 / Tie2 receptor',
          definition:
            'Receptor tirosina quinasa endotelial cuya activacion por Ang-1 estabiliza vasos sanguineos; Ang-2 lo antagoniza desestabilizando vasos; faricimab bloquea Ang-2 restaurando la senalizacion estabilizadora de Tie2. | Endothelial tyrosine kinase receptor whose activation by Ang-1 stabilizes blood vessels; Ang-2 antagonizes it destabilizing vessels; faricimab blocks Ang-2 restoring Tie2 stabilizing signaling.',
        },
      ],
      clinicalNotes:
        'Perlas clinicas avanzadas: (1) Brolucizumab ofrece intervalos extendidos pero con riesgo real de vasculitis oclusiva -- reservar para no respondedores a otros anti-VEGF y monitorear cuidadosamente signos de inflamacion. (2) En PCV, la combinacion PDT + anti-VEGF (EVEREST II) logra tasas de resolucion polipoidea superiores al anti-VEGF solo; PCV debe sospecharse en pacientes asiaticos, afrodescendientes o cuando hay DEP serosanguinolento grande con hemorragia significativa. (3) Los inhibidores del complemento para AG aumentan el riesgo de conversion a NVC -- obtener OCT mensual durante los primeros 6 meses de tratamiento y tener plan de respuesta rapida con anti-VEGF. (4) Las SDD (drusas reticulares) son mejor visualizadas con OCT de alta resolucion en infrarrojo cercano; su presencia debe elevar la clasificacion de riesgo del paciente y acortar los intervalos de seguimiento. (5) LIR (quistes intrarretinianos) confiere peor pronostico que LSR (liquido subretiniano) solo -- los pacientes con LIR persistente a pesar de anti-VEGF pueden beneficiarse de cambio a faricimab. | Advanced clinical pearls: (1) Brolucizumab offers extended intervals but with real occlusive vasculitis risk -- reserve for non-responders. (2) In PCV, PDT + anti-VEGF combination (EVEREST II) achieves superior polypoidal resolution. (3) Complement inhibitors for GA increase CNV conversion risk -- monthly OCT for first 6 months. (4) SDD are best visualized on near-infrared OCT; their presence should elevate risk classification. (5) Intraretinal fluid confers worse prognosis than subretinal fluid alone.',
    },

    5: {
      level: 5,
      summary:
        'El horizonte de la DMAE abarca terapia genica para liberacion sostenida de anti-VEGF y complemento, protesis retinianas, optogenetica para restauracion visual, IA para prediccion de progresion, medicina de precision basada en genotipos CFH/ARMS2, y nuevas plataformas de entrega farmacologica. | The AMD horizon encompasses gene therapy for sustained anti-VEGF and complement delivery, retinal prosthetics, optogenetics for visual restoration, AI for progression prediction, precision medicine based on CFH/ARMS2 genotypes, and novel drug delivery platforms.',
      explanation: `## Explicacion

### Terapia genica para DMAE

**Concepto:** Convertir la carga cronica de inyecciones en una unica administracion genica que produce continuamente proteina terapeutica.

**Anti-VEGF por terapia genica:**

| Terapia | Vector | Proteina | Via | Ensayo | Estado |
|---------|--------|----------|-----|--------|--------|
| ADVM-022 (Adverum) | AAV2.7m8 | Aflibercept | Intravitrea | OPTIC | Fase II; supresion de VEGF >2 anos; inflamacion dosis-limitante |
| RGX-314 (REGENXBIO) | AAV8 | Anti-VEGF Fab | Subretiniana / supracoroidal | ATMOSPHERE, AAVIATE | Fase III |
| 4D-150 (4D Molecular) | AAV optimizado | Aflibercept + Ang-2 inhibidor | Intravitrea | Fase I/II | En curso |
| ABBV-RGX-314 | AAV8 | Ranibizumab-like Fab | Supracoroidal | Fase III | En curso |

**Complemento por terapia genica:**
- GT005 (AAV2-CFI): Entrega subretiniana de Factor I del complemento para GA
- Fase II en curso
- Concepto: Restaurar regulacion del complemento endogenamente

**Desafios de la terapia genica ocular:**
1. Respuesta inflamatoria al vector AAV (principal preocupacion)
2. Inmunidad preexistente anti-AAV (30-70% de poblacion segun serotipo)
3. Durabilidad de expresion (necesidad de anos de produccion continua)
4. Toxicidad retiniana directa en dosis altas
5. Via de administracion: Intravitrea (menor eficiencia, mas inflamacion) vs subretiniana (vitrectomia requerida, mejor transduccion de EPR) vs supracoroidal (procedimiento ambulatorio, en desarrollo)

### Port Delivery System (PDS) con ranibizumab

**Susvimo (Genentech):**
- Reservorio permanente de silicona implantado quirurgicamente en la pared escleral
- Libera ranibizumab continuamente al vitreo a traves de una membrana semipermeable
- Recarga cada 6 meses en consultorio (aguja especial a traves del septo)
- Ensayo ARCHWAY: No inferior a ranibizumab mensual
- **Retirado temporalmente** por problemas de integridad del septo; version rediseñada en desarrollo
- Paradigma: Puente entre inyecciones convencionales y terapia genica

### Protesis retinianas y restauracion visual

**Implantes retinianos:**

| Dispositivo | Tipo | Electrodos | Estado | Limitacion |
|-------------|------|-----------|--------|-----------|
| Argus II (Second Sight) | Epirretiniano | 60 | FDA aprobado 2013; descontinuado | Resolucion muy limitada; empresa cerro |
| PRIMA (Pixium Vision) | Subretiniano fotovoltaico | 378 pixeles/implante | Fase III | Sin cable; activado por infrarrojo; prometedor para GA |
| Alpha AMS (Retina Implant AG) | Subretiniano | 1600 | CE aprobado; empresa cerro | Requiere cable externo |

**Protesis corticales:**
- Orion (Second Sight -> Cortigent): Electrodos directamente en corteza visual V1
- Bypasa completamente el ojo -> potencial para CUALQUIER causa de ceguera
- 60 electrodos; resolucion limitada pero prueba de concepto

**Optogenetica para restauracion visual:**
- Introduccion de proteinas fotosensibles (canalrodopsinas) en celulas retinianas restantes
- GS030 (GenSight Biologics): AAV-ChrimsonR + gafas amplificadoras de luz
  - Ensayo PIONEER Fase I/II: Paciente con retinitis pigmentosa parcialmente recupero vision funcional
- Mecanismo: Las celulas ganglionares se vuelven directamente fotosensibles, bypasando fotorreceptores danados
- Potencial para GA avanzada donde fotorreceptores se han perdido

### Inteligencia artificial en DMAE

**Prediccion de progresion:**
- DeepMind/Moorfields: Modelo de IA que predice conversion de DMAE seca a humeda con >80% precision a 6 meses
- Basado en OCT volumetrico con segmentacion automatica de capas
- Identifica biomarcadores sutiles invisibles al ojo humano

**Optimizacion de tratamiento:**
- Modelos que predicen respuesta individual a anti-VEGF basados en:
  - Biomarcadores OCT basales (grosor, tipo de liquido, integridad de zona elipsoide)
  - Genotipo CFH/ARMS2
  - Historial de respuesta a inyecciones previas
- Algoritmos de seleccion de agente y intervalo optimo
- Potencial para reducir sub-tratamiento y sobre-tratamiento

**Tamizaje automatizado:**
- Deteccion de drusas, AG y NVC en fotografias de fondo de ojo con IA
- Potencial para cribado masivo de DMAE en poblaciones envejecidas

### Medicina de precision en DMAE

**Farmacogenomica:**
- CFH Y402H: Algunos estudios sugieren que portadores del alelo de riesgo pueden tener menor respuesta a ciertos anti-VEGF; datos controversiales
- ARMS2: Asociado con mayor tasa de progresion; puede requerir tratamiento mas agresivo
- VEGF-A polimorfismos: Pueden predecir produccion basal de VEGF y respuesta a tratamiento
- **Realidad actual:** No hay suficiente evidencia para guiar seleccion de tratamiento basada en genotipo; area de investigacion activa

**Biomarcadores metabolomicos:**
- Perfiles lipidicos de humor acuoso
- Metabolitos urinarios como biomarcadores no invasivos
- Lipidómica de la membrana de Bruch

### Temas de frontera

**Celulas madre para regeneracion del EPR:**
- Transplante de EPR derivado de iPSC (celulas madre pluripotentes inducidas)
- Estudios en Japon (Mandai et al., RIKEN): Parche de EPR autólogo derivado de iPSC transplantado en 1 paciente
- Estudios en UK/US: Parche de EPR derivado de hESC (celulas madre embrionarias humanas)
- Desafios: Supervivencia del transplante, integracion funcional, rechazo inmune, tumorigenicidad

**Terapias combinadas:**
- Anti-VEGF + anti-complemento: Abordaje de multiples vias patogenicas simultaneamente
- Anti-VEGF + neuroproteccion: Proteger fotorreceptores mientras se trata NVC
- Terapia genica dual: Vectores AAV que expresan tanto anti-VEGF como factor regulador del complemento

---
## Explanation

### Gene therapy for AMD

ADVM-022, RGX-314, 4D-150 for sustained anti-VEGF production. GT005 (AAV2-CFI) for complement regulation in GA. Challenges: AAV inflammation, pre-existing immunity, expression durability.

### Port Delivery System

Susvimo: Surgically implanted scleral reservoir for continuous ranibizumab release, refilled every 6 months. Temporarily withdrawn for septum issues; redesigned version in development.

### Retinal prosthetics and optogenetics

PRIMA subretinal photovoltaic implant, cortical prostheses (Orion), and optogenetics (GS030 ChrimsonR) for vision restoration in end-stage retinal disease.

### AI in AMD

DeepMind/Moorfields model predicting dry-to-wet conversion >80% accuracy. Treatment optimization models integrating OCT biomarkers and pharmacogenomics.

### Precision medicine

CFH/ARMS2 genotyping for risk stratification (treatment guidance remains investigational). iPSC-derived RPE transplantation for regeneration. Combination therapies targeting multiple pathogenic pathways.`,
      keyTerms: [
        {
          term: 'ADVM-022 (terapia genica intravitrea)',
          definition:
            'Terapia genica basada en AAV2.7m8 que tras una unica inyeccion intravitrea produce aflibercept endogenamente; demostro supresion de VEGF por >2 anos en el ensayo OPTIC; inflamacion dosis-limitante es el principal desafio. | AAV2.7m8-based gene therapy producing endogenous aflibercept from a single intravitreal injection; demonstrated VEGF suppression >2 years in OPTIC trial; dose-limiting inflammation is the main challenge.',
        },
        {
          term: 'PRIMA (implante subretiniano fotovoltaico)',
          definition:
            'Protesis retiniana subretiniana de 378 pixeles activada por luz infrarroja sin cables; potencial para restauracion visual en atrofia geografica avanzada donde los fotorreceptores se han perdido. | 378-pixel subretinal photovoltaic prosthesis activated by infrared light without cables; potential for visual restoration in advanced geographic atrophy where photoreceptors have been lost.',
        },
        {
          term: 'optogenetica (GS030/ChrimsonR) / optogenetics',
          definition:
            'Terapia genica experimental que introduce proteinas fotosensibles (canalrodopsinas) en celulas ganglionares retinianas, haciendolas directamente sensibles a la luz sin necesidad de fotorreceptores funcionales; demostrada en ensayo PIONEER. | Experimental gene therapy introducing photosensitive proteins (channelrhodopsins) into retinal ganglion cells, making them directly light-sensitive without needing functional photoreceptors; demonstrated in PIONEER trial.',
        },
        {
          term: 'transplante de EPR derivado de iPSC',
          definition:
            'Tecnica experimental de medicina regenerativa donde celulas del EPR generadas a partir de celulas madre pluripotentes inducidas del propio paciente se transplantan a la retina para restaurar funcion del EPR perdida. | Experimental regenerative medicine technique where RPE cells generated from the patient\'s own induced pluripotent stem cells are transplanted to the retina to restore lost RPE function.',
        },
        {
          term: 'GT005 (AAV2-CFI) / complement gene therapy',
          definition:
            'Terapia genica subretiniana que entrega Factor I del complemento para restaurar la regulacion endogena de la cascada del complemento en atrofia geografica; Fase II en curso. | Subretinal gene therapy delivering complement Factor I to restore endogenous complement cascade regulation in geographic atrophy; Phase II ongoing.',
        },
        {
          term: 'Susvimo / Port Delivery System (PDS)',
          definition:
            'Reservorio escleral permanente implantado quirurgicamente que libera ranibizumab continuamente al vitreo; recarga cada 6 meses; puente conceptual entre inyecciones y terapia genica. | Permanently implanted scleral reservoir surgically releasing ranibizumab continuously into the vitreous; refilled every 6 months; conceptual bridge between injections and gene therapy.',
        },
      ],
      clinicalNotes:
        'Perlas de nivel experto: (1) La via supracoroidal para terapia genica (RGX-314, ABBV-RGX-314) es la mas prometedora por ser un procedimiento ambulatorio con microaguja que evita la vitrectomia necesaria para la via subretiniana y tiene menor inflamacion que la intravitrea; los datos de Fase III son esperados con gran anticipacion. (2) La optogenetica (GS030 ChrimsonR) requiere gafas especiales que amplifican la luz y la convierten a longitudes de onda que activan la canalrodopsina -- sin las gafas, la vision restaurada es insuficiente. (3) Los inhibidores del complemento para AG tienen un beneficio modesto (~20-30% reduccion en crecimiento) y NO restauran vision perdida -- la consejería realista del paciente es fundamental para evitar falsas expectativas. (4) En la practica clinica, la conversion de AG a NVC durante tratamiento con inhibidores del complemento ocurre en ~5-10% de pacientes -- tener protocolo de anti-VEGF de rescate. (5) La combinacion futura de terapia genica anti-VEGF + gen regulador del complemento en un solo vector AAV podria ser el "santo grial" del tratamiento de DMAE, abordando tanto la forma humeda como la seca con una unica intervencion. (6) El transplante de EPR derivado de iPSC ha mostrado seguridad pero la integracion funcional sigue siendo un desafio -- las celulas sobreviven pero la restauracion visual es limitada hasta ahora; la zona elipsoide preservada es prerrequisito para beneficio. | Expert pearls: (1) Suprachoroidal gene therapy route (RGX-314) is most promising as an outpatient microneedle procedure avoiding vitrectomy. (2) Optogenetics requires special amplifying goggles. (3) Complement inhibitors for GA have modest benefit (~20-30%) and do NOT restore lost vision -- realistic patient counseling is essential. (4) AG-to-CNV conversion occurs in ~5-10% during complement inhibitor treatment -- have rescue anti-VEGF protocol. (5) Future dual gene therapy (anti-VEGF + complement regulator in single AAV vector) could address both wet and dry AMD in one intervention. (6) iPSC-RPE transplants show safety but functional integration remains limited.',
    },
  },

  media: [
    {
      id: 'amd-dry-wet-comparison',
      type: 'diagram',
      filename: 'amd-dry-wet-comparison-es.svg',
      title: 'DMAE Seca vs Humeda / Dry vs Wet AMD',
      description:
        'Diagramas transversales mostrando drusas en DMAE seca y neovascularizacion coroidea en DMAE humeda / Cross-sectional diagrams showing drusen in dry AMD and choroidal neovascularization in wet AMD',
    },
    {
      id: 'amd-complement-cascade',
      type: 'diagram',
      filename: 'amd-complement-cascade-es.svg',
      title: 'Cascada del Complemento en DMAE / Complement Cascade in AMD',
      description:
        'Diagrama de la via alternativa del complemento y puntos de intervencion terapeutica / Diagram of the alternative complement pathway and therapeutic intervention points',
    },
    {
      id: 'amd-oct-findings',
      type: 'image',
      filename: 'amd-oct-findings-es.svg',
      title: 'Hallazgos de OCT en DMAE / OCT Findings in AMD',
      description:
        'Cortes de OCT mostrando drusas, DEP, liquido subretiniano, atrofia geografica y NVC / OCT sections showing drusen, PED, subretinal fluid, geographic atrophy, and CNV',
    },
    {
      id: 'amd-amsler-grid',
      type: 'diagram',
      filename: 'amd-amsler-grid-es.svg',
      title: 'Rejilla de Amsler: Normal vs DMAE / Amsler Grid: Normal vs AMD',
      description:
        'Comparacion de la rejilla de Amsler normal y con metamorfopsia indicativa de DMAE humeda / Comparison of normal Amsler grid and with metamorphopsia indicative of wet AMD',
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
      title: 'Lutein + Zeaxanthin and Omega-3 Fatty Acids for Age-Related Macular Degeneration (AREDS2)',
      authors: ['Age-Related Eye Disease Study 2 Research Group'],
      source: 'JAMA',
      url: 'https://doi.org/10.1001/jama.2013.4997',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-3',
      type: 'article',
      title: 'Pegcetacoplan for Geographic Atrophy Secondary to Age-Related Macular Degeneration (OAKS and DERBY)',
      authors: ['Liao, D.S.', 'Grossi, F.V.', 'El Mehdi, D.'],
      source: 'Ophthalmology',
      url: 'https://doi.org/10.1016/j.ophtha.2023.02.016',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-4',
      type: 'article',
      title: 'Faricimab for Neovascular Age-Related Macular Degeneration (TENAYA and LUCERNE)',
      authors: ['Heier, J.S.', 'Khanani, A.M.', 'Ruiz, C.Q.'],
      source: 'The Lancet',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-5',
      type: 'article',
      title: 'Complement Factor H Polymorphism in Age-Related Macular Degeneration',
      authors: ['Klein, R.J.', 'Zeiss, C.', 'Chew, E.Y.'],
      source: 'Science',
      url: 'https://doi.org/10.1126/science.1109557',
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
      targetId: 'condition-diabetic-retinopathy',
      targetType: 'condition',
      relationship: 'related',
      label: 'Retinopatia Diabetica / Diabetic Retinopathy (comparten terapia anti-VEGF)',
    },
    {
      targetId: 'condition-glaucoma',
      targetType: 'condition',
      relationship: 'related',
      label: 'Glaucoma (riesgo de PIO elevada con inyecciones intravitreas)',
    },
    {
      targetId: 'condition-cataracts',
      targetType: 'condition',
      relationship: 'related',
      label: 'Cataratas (aceleradas por inyecciones repetidas)',
    },
  ],

  tags: {
    systems: ['visual'],
    topics: ['ophthalmology', 'pathology', 'pharmacology', 'genetics', 'screening'],
    keywords: [
      'degeneracion macular',
      'macular degeneration',
      'DMAE',
      'AMD',
      'drusas',
      'drusen',
      'atrofia geografica',
      'geographic atrophy',
      'neovascularizacion coroidea',
      'anti-VEGF',
      'complemento',
      'complement',
      'pegcetacoplan',
      'faricimab',
      'terapia genica',
      'gene therapy',
      'AREDS2',
    ],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
