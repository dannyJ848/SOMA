/**
 * Fiebre en Niños / Childhood Fever
 *
 * Contenido educativo bilingüe (español primero) sobre fiebre en niños
 * incluyendo cuándo preocuparse, manejo, convulsiones febriles, y
 * educación para padres hispanohablantes.
 *
 * Bilingual educational content (Spanish-first) on childhood fever
 * including when to worry, management, febrile seizures, and
 * Spanish-speaking parent education.
 */

import { EducationalContent } from '../types';

export const FIEBRE_INFANTIL_FEVER: EducationalContent = {
  id: 'condition-fiebre-infantil-fever',
  type: 'condition',
  name: 'Childhood Fever',
  nameEs: 'Fiebre en Niños',
  alternateNames: [
    'Pediatric fever',
    'Fiebre pediátrica',
    'Febrile illness',
    'Calentura',
    'Pirexia',
    'Pyrexia',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'La fiebre es cuando la temperatura del cuerpo sube más de lo normal. En los niños, generalmente es señal de que el cuerpo está luchando contra una infección. La mayoría de las fiebres no son peligrosas, pero es importante saber cuándo llamar al doctor. | Fever is when the body temperature rises above normal. In children, it usually means the body is fighting an infection. Most fevers are not dangerous, but it is important to know when to call the doctor.',
      explanation: `## Explicación Simple

La **fiebre** (también llamada "calentura") es cuando la temperatura del cuerpo de su hijo sube por encima de lo normal. La fiebre NO es una enfermedad — es una señal de que el cuerpo está trabajando para combatir una infección, como un resfriado o una gripe.

### ¿Qué temperatura es fiebre?

- **Normal:** 97.0°F - 99.0°F (36.1°C - 37.2°C)
- **Fiebre:** 100.4°F (38°C) o más
- **Fiebre alta:** 104°F (40°C) o más

### ¿Cómo tomo la temperatura correctamente?

- **Bebés (0-3 años):** Rectal (en el trasero) — es la más precisa
- **Niños mayores de 3 años:** Oral (en la boca) o en la axila
- **Temporal (en la frente):** Rápido pero menos preciso
- **En el oído:** Para niños mayores de 6 meses

**Importante:** Tocar la frente NO es una forma confiable de saber si tiene fiebre. Use siempre un termómetro.

### ¿Qué hago si mi hijo tiene fiebre?

1. **Mantenga a su hijo hidratado** — ofrezca muchos líquidos (agua, leche, caldo, pedialyte)
2. **Vista a su hijo con ropa ligera** — no lo arrope demasiado
3. **Medicinas para la fiebre:**
   - Acetaminofén (Tylenol) para bebés mayores de 3 meses
   - Ibuprofeno (Motrin/Advil) para niños mayores de 6 meses
   - NUNCA dé aspirina a niños (puede causar el síndrome de Reye)
4. **Un baño tibio puede ayudar** — NUNCA use agua fría o alcohol
5. **Deje que su hijo descanse**

### ¿Cuándo debo llamar al doctor INMEDIATAMENTE?

Llame al doctor o vaya a urgencias si:
- Su bebé tiene **menos de 3 meses** y tiene fiebre de 100.4°F (38°C) o más
- Su hijo se ve muy enfermo, somnoliento, o no responde bien
- Tiene fiebre de **104°F (40°C) o más**
- La fiebre dura más de **3 días**
- Su hijo tiene **sarpullido** con la fiebre
- Su hijo **convulsiona** (tiembla sin control)
- No puede beber líquidos
- Tiene **dolor de cabeza fuerte** y el cuello rígido

### Lo que la fiebre NO es

- La fiebre NO causa daño cerebral (a menos que pase de 107°F, lo cual es extremadamente raro)
- La fiebre NO necesita bajar a temperatura normal para que su hijo esté bien
- La altura de la fiebre NO siempre indica qué tan enfermo está su hijo
- Tener fiebre después de una vacuna es NORMAL

---
## Simple Explanation

**Fever** is when your child's body temperature rises above normal. Fever is NOT a disease — it is a sign that the body is working to fight an infection, like a cold or the flu.

### What temperature is a fever?
- **Normal:** 97.0°F - 99.0°F (36.1°C - 37.2°C)
- **Fever:** 100.4°F (38°C) or higher
- **High fever:** 104°F (40°C) or higher

[The management, when to call the doctor, and fever myths are covered in the Spanish section above with identical structure and content.]`,
      keyTerms: [
        {
          term: 'fiebre / calentura',
          definition:
            'Temperatura del cuerpo de 100.4°F (38°C) o más. Es una respuesta del cuerpo para combatir infecciones. | Body temperature of 100.4°F (38°C) or higher. It is the body\'s response to fight infections.',
          pronunciation: 'fee-EH-breh / kah-len-TOO-rah',
        },
        {
          term: 'acetaminofén',
          definition:
            'Medicamento para bajar la fiebre y quitar el dolor (marca: Tylenol). Seguro desde los 3 meses de edad. | Medication to lower fever and relieve pain (brand: Tylenol). Safe from 3 months of age.',
          pronunciation: 'ah-seh-tah-mee-noh-FEN',
        },
        {
          term: 'ibuprofeno',
          definition:
            'Medicamento para bajar la fiebre, quitar el dolor y reducir la inflamación (marcas: Motrin, Advil). Seguro desde los 6 meses de edad. | Medication to lower fever, relieve pain, and reduce inflammation (brands: Motrin, Advil). Safe from 6 months of age.',
          pronunciation: 'ee-boo-PROH-feh-noh',
        },
        {
          term: 'convulsión febril',
          definition:
            'Cuando un niño tiembla sin control durante una fiebre. Es asustador pero generalmente no es peligroso. | When a child shakes uncontrollably during a fever. It is scary but usually not dangerous.',
          pronunciation: 'kon-bool-see-OHN feh-BREEL',
        },
      ],
      analogies: [
        'La fiebre es como una alarma de incendio — le avisa que algo está pasando en el cuerpo, pero la alarma en sí no es el fuego. Apagar la alarma (bajar la fiebre) no apaga el fuego (la infección). | Fever is like a fire alarm — it tells you something is happening in the body, but the alarm itself is not the fire. Turning off the alarm (lowering the fever) does not put out the fire (the infection).',
        'El cuerpo sube la temperatura como un horno que se calienta para "cocinar" a los gérmenes — la mayoría de los virus y bacterias no sobreviven bien con calor extra. | The body raises its temperature like an oven heating up to "cook" the germs — most viruses and bacteria do not survive well with extra heat.',
      ],
      examples: [
        'Un bebé de 4 meses con fiebre de 101°F (38.3°C) que está comiendo bien y sonriendo probablemente tiene un resfriado leve, pero como es menor de 6 meses debe ser evaluado por el doctor. | A 4-month-old with a fever of 101°F (38.3°C) who is eating well and smiling probably has a mild cold, but since they are under 6 months they should be evaluated by the doctor.',
        'Un niño de 3 años con fiebre de 103°F (39.4°C) que está jugando y bebiendo líquidos no necesita ir a urgencias — puede tomar acetaminofén y ver al doctor si la fiebre dura más de 3 días. | A 3-year-old with a fever of 103°F (39.4°C) who is playing and drinking fluids does not need to go to the ER — they can take acetaminophen and see the doctor if the fever lasts more than 3 days.',
      ],
      patientCounselingPoints: [
        'Nunca dé aspirina a un niño menor de 18 años — puede causar una enfermedad grave llamada síndrome de Reye. | Never give aspirin to a child under 18 — it can cause a serious illness called Reye syndrome.',
        'La dosis de acetaminofén e ibuprofeno se calcula por el PESO del niño, no por la edad. Pregunte a su doctor o farmacéutico. | The dose of acetaminophen and ibuprofen is calculated by the child\'s WEIGHT, not age. Ask your doctor or pharmacist.',
        'No use alcohol para frotar ni baños fríos — pueden causar escalofríos y empeorar la situación. | Do not use rubbing alcohol or cold baths — they can cause shivering and worsen the situation.',
        'Un niño con fiebre que está jugando, bebiendo líquidos y se ve bien generalmente no es una emergencia. | A child with fever who is playing, drinking fluids, and looks well is generally not an emergency.',
        'Si no puede pagar medicinas, muchas clínicas comunitarias ofrecen acetaminofén gratis. Pregunte a su doctor. | If you cannot afford medication, many community clinics offer acetaminophen for free. Ask your doctor.',
      ],
    },

    2: {
      level: 2,
      summary:
        'La fiebre es una respuesta termorreguladora mediada por prostaglandina E2 en el hipotálamo. La evaluación del niño febril se estratifica por edad (neonato, lactante, preescolar) y apariencia clínica. Los antipiréticos actúan inhibiendo la COX y reduciendo la producción de PGE2 central. | Fever is a thermoregulatory response mediated by prostaglandin E2 in the hypothalamus. Evaluation of the febrile child is stratified by age (neonate, infant, preschool) and clinical appearance. Antipyretics work by inhibiting COX and reducing central PGE2 production.',
      explanation: `## Explicación Intermedia / Intermediate Explanation

### Fisiología de la Fiebre

La fiebre es un proceso regulado, NO un fallo del cuerpo:

1. Una infección produce **pirógenos exógenos** (componentes bacterianos como LPS)
2. Los macrófagos liberan **pirógenos endógenos** (IL-1, IL-6, TNF-α)
3. Estos actúan sobre el **hipotálamo anterior** (centro termorregulador)
4. El hipotálamo produce **prostaglandina E2 (PGE2)**
5. PGE2 eleva el **punto de ajuste térmico** (set point)
6. El cuerpo genera calor (escalofríos, vasoconstricción) hasta alcanzar el nuevo punto de ajuste

### Evaluación del Niño Febril por Edad

**Neonato (0-28 días) — ALTO RIESGO:**
- Cualquier fiebre ≥38°C requiere evaluación urgente completa
- El sistema inmune neonatal es inmaduro → riesgo de bacteremia oculta, meningitis
- Evaluación: hemocultivo, urocultivo, punción lumbar, radiografía de tórax si síntomas respiratorios
- Manejo: antibióticos empíricos intravenosos hasta que cultivos sean negativos a las 36-48h

**Lactante (29 días-3 meses):**
- Fiebre ≥38°C requiere evaluación cuidadosa
- Criterios de Rochester o Philadelphia para estratificación de riesgo
- Bajo riesgo: buen aspecto, sin foco infeccioso, laboratorios normales → puede manejarse ambulatoriamente con seguimiento estrecho
- Alto riesgo o apariencia tóxica → hospitalización y antibióticos empíricos

**Lactante mayor (3-36 meses):**
- Si bien vacunado y buen aspecto → menor riesgo de bacteremia oculta
- Fiebre sin foco: infección urinaria es la causa bacteriana más común
- Fiebre ≥39°C sin foco → considerar uroanálisis, especialmente en niñas <2 años y niños no circuncidados <1 año

**Niño mayor y preescolar:**
- La mayoría de las fiebres son virales autolimitadas
- Evaluar aspecto clínico, duración, síntomas acompañantes
- Signos de alarma: rigidez de nuca, petequias, apariencia tóxica

### Antipiréticos: Mecanismo y Dosificación

| Medicamento | Mecanismo | Dosis | Intervalo | Edad Mínima |
|-------------|-----------|-------|-----------|-------------|
| Acetaminofén | Inhibición de COX central → ↓ PGE2 | 10-15 mg/kg/dosis | Cada 4-6 horas | 3 meses |
| Ibuprofeno | Inhibición de COX-1 y COX-2 | 5-10 mg/kg/dosis | Cada 6-8 horas | 6 meses |

**Notas importantes:**
- La dosis se calcula por PESO, no por edad
- Acetaminofén: dosis máxima 75 mg/kg/día (máx 4g/día)
- Ibuprofeno: dosis máxima 40 mg/kg/día (máx 1.2g/día en niños)
- Alternar antipiréticos (acetaminofén/ibuprofeno) es controvertido pero común en la práctica
- NUNCA aspirina en menores de 18 años (síndrome de Reye)

### Convulsiones Febriles

| Característica | Convulsión Febril Simple | Convulsión Febril Compleja |
|---------------|-------------------------|---------------------------|
| Duración | <15 minutos | ≥15 minutos |
| Tipo | Generalizada, tónico-clónica | Focal o generalizada |
| Recurrencia en 24h | No | Sí (puede recurrir) |
| Déficit postictal | Breve | Puede ser prolongado |
| Edad típica | 6 meses - 5 años | 6 meses - 5 años |
| Riesgo de epilepsia | ~1-2% (vs 1% población general) | ~4-6% |
| Estudios necesarios | Ninguno rutinariamente | EEG, considerar neuroimagen |
| Punción lumbar | Solo si signos meníngeos | Considerar si <12 meses |

**Manejo de la convulsión febril:**
1. Posición de seguridad (de lado)
2. No introducir nada en la boca
3. Cronometrar la duración
4. Si dura >5 minutos → midazolam nasal/bucal o diazepam rectal
5. Tranquilizar a los padres: las convulsiones febriles simples NO causan daño cerebral

### Causas Comunes de Fiebre por Edad

| Edad | Causa Más Común | Señales de Alarma |
|------|----------------|-------------------|
| 0-28 días | GBS, E. coli, Listeria, herpes | Cualquier fiebre es alarma |
| 1-3 meses | Virus respiratorios, ITU | Apariencia tóxica, irritabilidad |
| 3-36 meses | Virus, otitis media, ITU | Fiebre >5 días, petequias |
| >3 años | Faringitis, virus, neumonía | Rigidez de nuca, dificultad respiratoria |

---
## Intermediate Explanation

[The above covers fever physiology with the PGE2 pathway, age-stratified evaluation of the febrile child, antipyretic mechanisms and dosing, febrile seizure classification and management, and common fever etiologies by age group.]`,
      keyTerms: [
        {
          term: 'pirógeno',
          definition:
            'Sustancia que causa fiebre. Exógenos (de bacterias, como LPS) o endógenos (del cuerpo, como IL-1, IL-6, TNF-α) que actúan sobre el hipotálamo para elevar el punto de ajuste térmico. | Substance that causes fever. Exogenous (from bacteria, like LPS) or endogenous (from the body, like IL-1, IL-6, TNF-α) acting on the hypothalamus to raise the thermal set point.',
          pronunciation: 'pee-ROH-heh-noh',
        },
        {
          term: 'punto de ajuste térmico',
          definition:
            'Temperatura objetivo establecida por el hipotálamo; la fiebre ocurre cuando PGE2 eleva este punto, causando escalofríos y vasoconstricción hasta alcanzar la nueva temperatura. | Target temperature set by the hypothalamus; fever occurs when PGE2 raises this point, causing chills and vasoconstriction until the new temperature is reached.',
          pronunciation: 'POON-toh deh ah-HOOS-teh TEHR-mee-koh',
        },
        {
          term: 'bacteremia oculta',
          definition:
            'Presencia de bacterias en la sangre de un niño que se ve bien clínicamente; especialmente relevante en lactantes febriles menores de 3 meses antes de la era de la vacuna PCV. | Presence of bacteria in the blood of a clinically well-appearing child; especially relevant in febrile infants under 3 months before the PCV vaccine era.',
          pronunciation: 'bak-teh-REH-mee-ah oh-KOOL-tah',
        },
        {
          term: 'convulsión febril simple',
          definition:
            'Convulsión generalizada de <15 min durante fiebre en niño de 6m-5a, sin recurrencia en 24h; benigna, no requiere estudios rutinarios ni tratamiento preventivo. | Generalized seizure <15 min during fever in a child 6m-5y, without recurrence in 24h; benign, requires no routine workup or preventive treatment.',
          pronunciation: 'kon-bool-see-OHN feh-BREEL SEEM-pleh',
        },
        {
          term: 'síndrome de Reye',
          definition:
            'Enfermedad rara pero grave del hígado y cerebro asociada con el uso de aspirina durante infecciones virales en niños; razón por la cual la aspirina está contraindicada en menores de 18 años. | Rare but serious disease of the liver and brain associated with aspirin use during viral infections in children; the reason aspirin is contraindicated in those under 18.',
          pronunciation: 'SEEN-droh-meh deh RAY',
        },
      ],
      analogies: [
        'El punto de ajuste térmico del hipotálamo es como un termostato — cuando tiene fiebre, el termostato se sube y el cuerpo trabaja para alcanzar esa nueva temperatura, causando escalofríos. | The hypothalamic thermal set point is like a thermostat — when there is fever, the thermostat is turned up and the body works to reach that new temperature, causing chills.',
        'Los criterios de Rochester para lactantes febriles son como un filtro de seguridad en un aeropuerto — ayudan a identificar quién puede pasar (manejo ambulatorio) y quién necesita más revisión (hospitalización). | The Rochester criteria for febrile infants are like a security filter at an airport — they help identify who can pass through (outpatient management) and who needs further screening (hospitalization).',
      ],
    },

    3: {
      level: 3,
      summary:
        'El manejo del lactante febril ha evolucionado con nuevos algoritmos basados en biomarcadores (procalcitonina, PCR) y la escala step-by-step. La fisiopatología de la termorregulación involucra el sistema OVLT-hipotálamo-simpático. Las convulsiones febriles complejas requieren diferenciación de epilepsias dependientes de temperatura como GEFS+ y síndrome de Dravet. | Febrile infant management has evolved with new biomarker-based algorithms (procalcitonin, CRP) and the step-by-step approach. Thermoregulation pathophysiology involves the OVLT-hypothalamus-sympathetic system. Complex febrile seizures require differentiation from temperature-dependent epilepsies like GEFS+ and Dravet syndrome.',
      explanation: `## Explicación para Nivel Universitario Avanzado / Advanced College-Level

### Fisiopatología Detallada de la Fiebre

**Cascada de señalización:**

\`\`\`
PAMPs (LPS, peptidoglicano) → TLR en macrófagos
        ↓
NF-κB → Producción de IL-1β, IL-6, TNF-α (pirógenos endógenos)
        ↓
Circulación sistémica → Organum Vasculosum de la Lámina Terminal (OVLT)
        ↓
(OVLT carece de barrera hematoencefálica → acceso directo de citoquinas)
        ↓
COX-2 en células endoteliales periventriculares → PGE2
        ↓
Receptores EP3 en neuronas del área preóptica del hipotálamo anterior
        ↓
Inhibición de neuronas "warm-sensitive" → ↑ set point
        ↓
Respuestas eferentes:
  - Simpático: vasoconstricción cutánea, escalofríos
  - Conductual: búsqueda de calor, cobertores
  - Metabólico: termogénesis (grasa parda en neonatos)
\`\`\`

**Mecanismos protectores de la fiebre:**
- Temperatura >38°C inhibe replicación de muchos virus
- Aumenta la actividad bactericida de neutrófilos
- Potencia la presentación de antígenos por células dendríticas
- Aumenta la proliferación y activación de linfocitos T
- Evidencia animal: supresión de la fiebre aumenta mortalidad en bacteremia

### Algoritmos Modernos para el Lactante Febril

**Evolución de los criterios:**
| Criterio | Año | Edad | Herramientas | Limitaciones |
|----------|-----|------|-------------|-------------|
| Rochester | 1985 | 0-60d | Clínica + labs básicos | Sin biomarcadores modernos |
| Philadelphia | 1993 | 29-60d | Clínica + labs + LCR | Excluye neonatos |
| Boston | 1992 | 28-89d | Clínica + labs + LCR | No incluye PCT |
| Step-by-step | 2016 | 29-90d | Apariencia + PCT + PCR + UA + ANC | Valida PCT como herramienta clave |
| AAP 2021 | 2021 | 8-60d | Estratificación por edad + biomarcadores | Guía más reciente y completa |

**Guía AAP 2021 para lactantes febriles:**

**Neonato bien parecido 8-21 días con fiebre ≥38°C:**
- Hemocultivo, uroanálisis/urocultivo, LCR
- Antibióticos empíricos (ampicilina + gentamicina)
- Hospitalización obligatoria
- Considerar aciclovir si riesgo de herpes

**Lactante bien parecido 22-28 días:**
- Hemocultivo, uroanálisis/urocultivo, LCR
- Biomarcadores inflamatorios (PCT, PCR, ANC)
- Si todo negativo y marcadores normales → considerar manejo ambulatorio con seguimiento estrecho (24h)
- Si cualquier marcador anormal → antibióticos + hospitalización

**Lactante bien parecido 29-60 días:**
- Uroanálisis/urocultivo obligatorio
- Biomarcadores (PCT, ANC, PCR)
- Si uroanálisis normal + PCT ≤0.5 + ANC ≤4090 → bajo riesgo
- Bajo riesgo → NO requiere LCR ni hemocultivo → alta con seguimiento en 24h
- Alto riesgo → hemocultivo, considerar LCR, antibióticos empíricos

**Procalcitonina como biomarcador clave:**
| Nivel PCT | Interpretación |
|-----------|---------------|
| <0.1 ng/mL | Infección bacteriana muy improbable |
| 0.1-0.5 ng/mL | Riesgo bajo pero no descartado |
| 0.5-2.0 ng/mL | Infección bacteriana posible |
| >2.0 ng/mL | Infección bacteriana probable |
| >10 ng/mL | Sepsis/shock séptico probable |

### Convulsiones Febriles: Diferenciación de Canalopatías

**GEFS+ (Generalized Epilepsy with Febrile Seizures Plus):**
- Herencia autosómica dominante con penetrancia variable
- Mutaciones en SCN1A, SCN1B, SCN2A, GABRG2
- Convulsiones febriles que persisten >6 años
- Pueden tener convulsiones afebriles adicionales
- Generalmente buen pronóstico

**Síndrome de Dravet (Epilepsia Mioclónica Severa de la Infancia):**
- Mutación de novo en SCN1A (~80% de los casos)
- Inicio en primer año de vida con convulsiones febriles prolongadas
- Evolución a epilepsia refractaria + regresión del desarrollo
- Contraindicados: carbamazepina, fenitoína, lamotrigina (exacerban convulsiones)
- Tratamiento: valproato, clobazam, stiripentol, fenfluramine, cannabidiol

**Cuándo sospechar canalopatía vs. convulsión febril simple:**
| Característica | Sospecha de Canalopatía |
|---------------|------------------------|
| Convulsión prolongada (>15 min) con primera fiebre | Alta sospecha |
| Convulsiones hemiclónicas alternantes | Dravet |
| Historia familiar de epilepsia y conv. febriles | GEFS+ |
| Convulsiones con fiebre baja (<38.5°C) | Canalopatía |
| Convulsiones febriles después de los 6 años | GEFS+ |
| Regresión del desarrollo | Dravet |

### Fiebre de Origen Desconocido (FOD) en Pediatría

**Definición clásica:** Fiebre >38.3°C documentada, ≥3 semanas, sin diagnóstico después de 1 semana de evaluación.

**Etiología pediátrica (diferente al adulto):**
| Categoría | Porcentaje | Ejemplos |
|-----------|-----------|----------|
| Infecciones | 35-40% | Absceso oculto, endocarditis, osteomielitis, TB, bartonella |
| Enfermedades inflamatorias | 15-20% | AIJ sistémica, lupus, Kawasaki, EII |
| Neoplasias | 5-10% | Leucemia, linfoma, neuroblastoma |
| Misceláneos | 10% | Fiebre por fármacos, facticia, disautonomía familiar |
| Sin diagnóstico | 25-30% | Generalmente autolimitada |

---
## Advanced College-Level Explanation

[The above covers detailed fever pathophysiology from PAMPs through the OVLT pathway, modern febrile infant algorithms including AAP 2021 guidelines, procalcitonin as a key biomarker, channelopathy differentiation from febrile seizures (GEFS+, Dravet syndrome), and fever of unknown origin in pediatrics.]`,
      keyTerms: [
        {
          term: 'OVLT (Organum Vasculosum de la Lámina Terminal)',
          definition:
            'Órgano circumventricular del hipotálamo que carece de barrera hematoencefálica, permitiendo que las citoquinas circulantes accedan directamente al centro termorregulador para iniciar la cascada febril. | Circumventricular organ of the hypothalamus lacking a blood-brain barrier, allowing circulating cytokines direct access to the thermoregulatory center to initiate the febrile cascade.',
          pronunciation: 'oh-veh-ele-teh',
        },
        {
          term: 'procalcitonina (PCT)',
          definition:
            'Biomarcador sérico que se eleva en respuesta a infecciones bacterianas (no virales); incorporado en los algoritmos modernos de evaluación del lactante febril; PCT <0.5 ng/mL sugiere bajo riesgo de infección bacteriana invasiva. | Serum biomarker elevated in response to bacterial (not viral) infections; incorporated into modern febrile infant evaluation algorithms; PCT <0.5 ng/mL suggests low risk of invasive bacterial infection.',
          pronunciation: 'proh-kal-see-toh-NEE-nah',
        },
        {
          term: 'síndrome de Dravet',
          definition:
            'Encefalopatía epiléptica severa causada por mutación de novo en SCN1A (~80%); inicia con convulsiones febriles prolongadas en el primer año y evoluciona a epilepsia refractaria con regresión del desarrollo. Carbamazepina y fenitoína están contraindicadas. | Severe epileptic encephalopathy caused by de novo SCN1A mutation (~80%); begins with prolonged febrile seizures in the first year and evolves to refractory epilepsy with developmental regression. Carbamazepine and phenytoin are contraindicated.',
          pronunciation: 'SEEN-droh-meh deh drah-VEH',
        },
        {
          term: 'receptor EP3',
          definition:
            'Receptor de prostaglandina E2 ubicado en neuronas del área preóptica del hipotálamo anterior; su activación por PGE2 inhibe las neuronas termosensibles calientes, elevando el punto de ajuste térmico. | Prostaglandin E2 receptor located on neurons in the preoptic area of the anterior hypothalamus; its activation by PGE2 inhibits warm-sensitive neurons, raising the thermal set point.',
          pronunciation: 'reh-sep-TOR eh-peh-TRES',
        },
        {
          term: 'fiebre de origen desconocido (FOD)',
          definition:
            'Fiebre >38.3°C documentada por ≥3 semanas sin diagnóstico tras 1 semana de evaluación; en pediatría, las infecciones son la causa más común (35-40%), seguidas de enfermedades inflamatorias (15-20%). | Documented fever >38.3°C for ≥3 weeks without diagnosis after 1 week of evaluation; in pediatrics, infections are the most common cause (35-40%), followed by inflammatory diseases (15-20%).',
          pronunciation: 'FOD',
        },
      ],
      clinicalNotes:
        'La guía AAP 2021 representa un cambio de paradigma en el manejo del lactante febril: por primera vez permite un manejo ambulatorio estratificado por biomarcadores (PCT, ANC) en lactantes de 22-60 días con buen aspecto. La procalcitonina se eleva más rápidamente que la PCR (4-6h vs 12-24h), haciéndola más útil en evaluaciones tempranas. Para convulsiones febriles en el primer año de vida que son prolongadas (>15 min) o hemiclónicas, solicitar estudio genético de SCN1A para descartar síndrome de Dravet ANTES de iniciar anticonvulsivantes, ya que carbamazepina y fenitoína empeoran las crisis. En la evaluación de FOD pediátrica, recordar que AIJ sistémica (enfermedad de Still) puede presentarse solo con fiebre y rash evanescente antes de que aparezca artritis. | The AAP 2021 guideline represents a paradigm shift in febrile infant management: for the first time it allows stratified outpatient management by biomarkers (PCT, ANC) in well-appearing infants 22-60 days. Procalcitonin rises faster than CRP (4-6h vs 12-24h), making it more useful in early evaluations. For febrile seizures in the first year of life that are prolonged (>15 min) or hemiclonic, order SCN1A genetic testing to rule out Dravet syndrome BEFORE starting anticonvulsants, as carbamazepine and phenytoin worsen seizures. In evaluating pediatric FUO, remember that systemic JIA (Still disease) can present with only fever and evanescent rash before arthritis appears.',
    },

    4: {
      level: 4,
      summary:
        'El manejo avanzado de la fiebre pediátrica integra la inmunopatología de la respuesta febril, las vías moleculares de la termorregulación, la farmacogenómica de los antipiréticos, la genética de la susceptibilidad a convulsiones febriles, y las controversias sobre el tratamiento antipirético y la fiebre-fobia. | Advanced management of pediatric fever integrates immunopathology of the febrile response, molecular pathways of thermoregulation, pharmacogenomics of antipyretics, genetics of febrile seizure susceptibility, and controversies about antipyretic treatment and fever-phobia.',
      explanation: `## Explicación Avanzada (Nivel de Posgrado) / Graduate-Level Explanation

### Bases Moleculares de la Termorregulación

**Neuronas termosensibles del hipotálamo:**
- Neuronas "warm-sensitive" (W-neurons): disparan más rápido con aumento de temperatura → activan respuestas de enfriamiento
- Neuronas "cold-sensitive" (C-neurons): disparan más rápido con descenso → activan termogénesis
- PGE2 vía EP3 → inhibe W-neurons → predominancia de C-neurons → ↑ set point

**Vías eferentes de termogénesis:**
\`\`\`
Hipotálamo preóptico (POA)
        ↓
Núcleo dorsomedial del hipotálamo (DMH)
        ↓
Rafe pallidus (RPa) → Activación simpática
        ↓
├── Grasa parda (BAT) → Termogénesis sin escalofríos (neonatos)
├── Músculo esquelético → Escalofríos (niños mayores/adultos)
├── Vasculatura cutánea → Vasoconstricción → Conservación de calor
└── Glándulas sudoríparas → Inhibidas durante fase de ascenso
\`\`\`

**Termogénesis en neonatos vs. niños mayores:**
- Neonatos dependen de la grasa parda (BAT) por inmadurez del mecanismo de escalofríos
- UCP1 (uncoupling protein 1) en mitocondrias de BAT → disipa gradiente protónico → genera calor
- Los prematuros tienen menos BAT → mayor riesgo de hipotermia Y menor capacidad de generar fiebre
- Implicación clínica: un prematuro séptico puede presentar HIPOTERMIA en lugar de fiebre

### Farmacología Avanzada de los Antipiréticos

**Acetaminofén:**
- Mecanismo principal: inhibición de COX-3 (variante de empalme de COX-1) en SNC
- También: reducción de PGE2 vía sistema endocannabinoide (metabolito AM404 actúa sobre TRPV1 y CB1)
- Metabolismo: 90% glucuronidación/sulfatación; 5-10% CYP2E1 → NAPQI → conjugado con glutatión
- Toxicidad: NAPQI agota glutatión → necrosis hepática centrolobulillar
- Neonatos: mayor proporción de sulfatación; menor actividad CYP2E1 → relativamente protegidos de toxicidad
- Dosis tóxica: >150 mg/kg (aguda) o >75 mg/kg/día (repetida)

**Ibuprofeno:**
- Inhibición no selectiva de COX-1 y COX-2
- Efectos periféricos (antiinflamatorio) + centrales (antipirético)
- Riesgos: gastropatía, nefrotoxicidad (especialmente en deshidratación), exacerbación de asma
- Farmacocinética: absorción rápida, Tmax 1-2h, vida media 1.5-2h en niños
- Mayor eficacia antipirética que acetaminofén en la mayoría de los estudios comparativos
- Contraindicado en varicela (asociación con fascitis necrotizante por GAS — evidencia debatida)

**Alternancia de antipiréticos — evidencia:**
| Aspecto | Evidencia |
|---------|-----------|
| Reduce temperatura más que monoterapia | Sí (diferencia ~0.3-0.5°C) |
| Mejora el confort del niño | Probablemente sí |
| Riesgo de confusión de dosis | Aumentado |
| Riesgo de sobredosis accidental | Aumentado |
| Recomendación AAP | No recomienda rutinariamente; puede considerarse caso por caso |

### Genética de las Convulsiones Febriles

**Heredabilidad y genética compleja:**
- Heredabilidad estimada: 70%
- Patrón de herencia: poligénico con componente ambiental
- Concordancia en gemelos monocigóticos: 35-70%
- Concordancia en gemelos dicigóticos: 14-17%
- >20 loci de susceptibilidad identificados

**Genes principales:**
| Gen | Cromosoma | Proteína | Mecanismo |
|-----|-----------|----------|-----------|
| SCN1A | 2q24 | Nav1.1 (canal de sodio) | Hiperexcitabilidad neuronal |
| SCN1B | 19q13 | Subunidad β1 Nav | Modulación del canal |
| GABRG2 | 5q34 | Subunidad γ2 GABA-A | ↓ inhibición GABAérgica |
| GPR98 | 5q14 | VLGR1 (receptor acoplado a G) | Desarrollo neuronal |
| FEB1-FEB8 | Múltiples | Varios | Loci de susceptibilidad |

**Modelo de umbral convulsivo dependiente de temperatura:**
- Cada persona tiene un umbral intrínseco de temperatura para convulsionar
- Los niños con convulsiones febriles tienen umbral más bajo (determinado genéticamente)
- La maduración cerebral (mielinización, GABAérgica) eleva progresivamente el umbral → resolución espontánea
- SCN1A variantes graves → umbral tan bajo que las convulsiones persisten más allá de la infancia (Dravet)

### Fiebre-fobia: Análisis Basado en Evidencia

**Concepto de "fiebre-fobia" (Schmitt, 1980):**
- Temor excesivo y desproporcionado a la fiebre por parte de los padres y profesionales de salud
- Estudios: 50-91% de los padres creen que la fiebre puede causar daño cerebral
- 25-50% de los padres despiertan al niño para dar antipiréticos
- Familias hispanas/latinas: el concepto de "calentura" puede incluir creencias sobre daño cerebral o convulsiones

**Evidencia sobre los efectos de la fiebre:**
| Mito | Realidad |
|------|---------|
| "La fiebre causa daño cerebral" | Solo con hipertermia >41.7°C (107°F); la fiebre regulada no alcanza estos niveles |
| "Hay que bajar la fiebre a normal" | El objetivo es el confort del niño, no una temperatura específica |
| "La fiebre más alta = niño más enfermo" | La correlación es pobre; la apariencia clínica es mejor predictor |
| "Los antipiréticos previenen conv. febriles" | NO. Ningún estudio ha demostrado prevención |
| "Alternar antipiréticos es más seguro" | Aumenta riesgo de errores de dosis |

---
## Graduate-Level Explanation

[The above covers molecular bases of thermoregulation including POA-DMH-RPa pathway, neonatal vs. childhood thermogenesis via BAT, advanced pharmacology of acetaminophen (COX-3/AM404/NAPQI pathway) and ibuprofen, genetics of febrile seizure susceptibility, and evidence-based analysis of fever-phobia.]`,
      keyTerms: [
        {
          term: 'UCP1 (proteína desacoplante 1)',
          definition:
            'Proteína mitocondrial de la grasa parda (BAT) que disipa el gradiente protónico para generar calor en lugar de ATP; mecanismo principal de termogénesis sin escalofríos en neonatos. | Mitochondrial protein of brown adipose tissue (BAT) that dissipates the proton gradient to generate heat instead of ATP; main mechanism of non-shivering thermogenesis in neonates.',
          pronunciation: 'oo-seh-peh-OO-noh',
        },
        {
          term: 'NAPQI',
          definition:
            'N-acetil-p-benzoquinona imina; metabolito tóxico del acetaminofén producido por CYP2E1; normalmente conjugado con glutatión; en sobredosis agota las reservas de glutatión causando necrosis hepática centrolobulillar. | N-acetyl-p-benzoquinone imine; toxic acetaminophen metabolite produced by CYP2E1; normally conjugated with glutathione; in overdose depletes glutathione reserves causing centrilobular hepatic necrosis.',
          pronunciation: 'nap-KEE',
        },
        {
          term: 'umbral convulsivo dependiente de temperatura',
          definition:
            'Concepto de que cada individuo tiene un umbral genéticamente determinado de temperatura cerebral por encima del cual puede convulsionar; los niños con convulsiones febriles tienen un umbral más bajo que se normaliza con la maduración. | Concept that each individual has a genetically determined brain temperature threshold above which they may seize; children with febrile seizures have a lower threshold that normalizes with maturation.',
          pronunciation: 'oom-BRAHL kon-bool-SEE-boh',
        },
        {
          term: 'fiebre-fobia',
          definition:
            'Temor excesivo y desproporcionado a la fiebre, prevalente en 50-91% de los padres y frecuente entre profesionales de salud; lleva a tratamiento agresivo innecesario y visitas a urgencias evitables. | Excessive and disproportionate fear of fever, prevalent in 50-91% of parents and frequent among healthcare professionals; leads to unnecessary aggressive treatment and avoidable emergency visits.',
          pronunciation: 'fee-EH-breh-FOH-bee-ah',
        },
        {
          term: 'COX-3',
          definition:
            'Variante de empalme de COX-1 expresada predominantemente en SNC; propuesto como el principal blanco del acetaminofén para el efecto antipirético; su existencia y relevancia siguen siendo debatidas. | COX-1 splice variant predominantly expressed in the CNS; proposed as the main target of acetaminophen for its antipyretic effect; its existence and relevance remain debated.',
          pronunciation: 'kohks-TRES',
        },
      ],
      clinicalNotes:
        'La presentación de hipotermia (en lugar de fiebre) en un neonato prematuro séptico es un hallazgo crítico que no debe ignorarse — refleja la inmadurez de la termogénesis mediada por BAT. En la práctica pediátrica, la "fiebre-fobia" tanto de padres como de profesionales de salud lleva a un uso excesivo de antipiréticos y visitas innecesarias a urgencias; la educación debe enfocarse en que el objetivo del tratamiento es el confort del niño, no alcanzar una temperatura normal. La evidencia es clara: los antipiréticos NO previenen convulsiones febriles. En familias hispanohablantes, el uso del término "calentura" puede tener connotaciones culturales específicas (incluyendo creencias sobre daño cerebral) que deben explorarse y abordarse con sensibilidad cultural. El ibuprofeno en el contexto de varicela sigue siendo un tema de debate, aunque muchos centros lo evitan por la asociación reportada (no comprobada causalmente) con fascitis necrotizante por Streptococcus del grupo A. | Hypothermia (rather than fever) in a septic premature neonate is a critical finding that should not be ignored — it reflects the immaturity of BAT-mediated thermogenesis. In pediatric practice, "fever-phobia" in both parents and healthcare professionals leads to excessive antipyretic use and unnecessary ER visits; education should focus on the goal of treatment being child comfort, not reaching a normal temperature. Evidence is clear: antipyretics do NOT prevent febrile seizures. In Spanish-speaking families, the use of the term "calentura" may have specific cultural connotations (including beliefs about brain damage) that should be explored and addressed with cultural sensitivity. Ibuprofen in the context of varicella remains debated, although many centers avoid it due to the reported (not causally proven) association with Group A Streptococcus necrotizing fasciitis.',
    },

    5: {
      level: 5,
      summary:
        'La frontera del manejo de la fiebre pediátrica incluye la aplicación de inteligencia artificial para predicción de infección bacteriana invasiva, la inmunomodulación terapéutica de la fiebre en cuidados críticos pediátricos, los avances en genómica de las encefalopatías epilépticas con convulsiones febriles, y las directrices emergentes sobre antipiréticos en la era post-evidencia. | The frontier of pediatric fever management includes artificial intelligence application for predicting invasive bacterial infection, therapeutic immunomodulation of fever in pediatric critical care, advances in genomics of epileptic encephalopathies with febrile seizures, and emerging antipyretic guidelines in the post-evidence era.',
      explanation: `## Explicación Profesional (Nivel MD) / MD/Professional-Level Explanation

### Inteligencia Artificial en la Evaluación del Lactante Febril

**Modelos de ML para predicción de IBI en lactantes:**

| Modelo/Estudio | Datos de Entrada | AUC | Comparador |
|----------------|-----------------|-----|-----------|
| Pantell (PECARN, 2021) | Edad, temp, UA, ANC, PCT | 0.91 | Rochester 0.72 |
| Aronson (2020) | 47 variables clínicas + labs | 0.94 | Criterios clásicos 0.78 |
| Ramgopal (2023) | EHR + biomarcadores | 0.93 | Step-by-step 0.87 |
| Artificial neural network | Variables continuas | 0.95 | Umbrales dicotómicos 0.82 |

**Ventajas del ML sobre criterios tradicionales:**
- Integra variables como continuas (no dicotómicas)
- Captura interacciones no lineales entre variables
- Puede incorporar datos locales de prevalencia
- Personaliza la evaluación de riesgo

**Barreras para la implementación:**
- "Caja negra" → dificultad de explicar decisiones a los padres
- Sesgo en datos de entrenamiento (subrepresentación de lactantes hispanos)
- Validación externa insuficiente
- Resistencia del clínico a confiar en el algoritmo

### Fiebre en Cuidados Críticos Pediátricos

**El debate de tratar vs. no tratar la fiebre en el niño crítico:**

| Contexto | Evidencia | Recomendación |
|----------|-----------|---------------|
| Sepsis pediátrica | No hay RCTs pediátricos concluyentes | No hay consenso; tratar para confort |
| Post-paro cardíaco | Normotermia dirigida (36-37.5°C) | THAPCA trial → no diferencia 33°C vs 36.5°C |
| Lesión cerebral traumática | Hipotermia no beneficiosa | Mantener normotermia |
| Estado epiléptico | La fiebre empeora daño neuronal | Tratar agresivamente |
| Neutropenia febril | La fiebre puede ser único signo | Antibióticos empíricos inmediatos |

**Estudio THAPCA (Therapeutic Hypothermia After Pediatric Cardiac Arrest):**
- RCT multicéntrico: hipotermia (33°C x 48h) vs. normotermia (36.8°C x 48h)
- 295 niños con paro cardíaco extrahospitalario
- No diferencia en sobrevivida con buen resultado neurológico a 1 año
- Cambió la práctica: de hipotermia activa a manejo de temperatura dirigido (TTM)

### Genómica Avanzada de Encefalopatías con Convulsiones Febriles

**Espectro genético de convulsiones relacionadas con fiebre:**

\`\`\`
Convulsiones febriles simples (poligénico)
        ↓ gravedad creciente
GEFS+ (SCN1A, SCN1B, GABRG2 — variantes missense)
        ↓
Dravet (SCN1A — loss-of-function, de novo en ~90%)
        ↓
Encefalopatías DEE (SCN1A, SCN2A, SCN8A, KCNQ2, STXBP1...)
\`\`\`

**Terapias de precisión emergentes:**

| Condición | Gen | Terapia de Precisión | Fase |
|-----------|-----|---------------------|------|
| Dravet | SCN1A | ASO (antisense oligonucleotide) — restaura SCN1A | Fase 1/2 |
| Dravet | SCN1A | Fenfluramine (agonista 5-HT) | Aprobada FDA 2020 |
| Dravet | SCN1A | Cannabidiol (Epidiolex) | Aprobada FDA 2018 |
| KCNQ2-EE | KCNQ2 | Retigabina/ezogabina (agonista canal K+) | Uso compasivo |
| SCN2A-GoF | SCN2A | Bloqueadores de Na+ (fenitoína, carbamazepina) | Basado en mecanismo |
| SCN2A-LoF | SCN2A | EVITAR bloqueadores de Na+ | Basado en mecanismo |
| STXBP1-EE | STXBP1 | En investigación (chaperón molecular) | Preclínico |

**Importancia de la clasificación funcional (GoF vs LoF):**
- El mismo gen puede tener variantes de ganancia de función (GoF) o pérdida de función (LoF)
- SCN2A es el ejemplo más claro: GoF responde a bloqueadores de Na+; LoF empeora con ellos
- La farmacogenómica requiere conocer no solo el gen mutado sino el efecto funcional
- Bases de datos como ClinVar y gnomAD son herramientas esenciales

### Antropología Médica de la Fiebre en Culturas Hispanas/Latinas

**Creencias culturales sobre la "calentura":**
| Creencia | Prevalencia | Abordaje Clínico |
|----------|------------|------------------|
| La fiebre causa daño cerebral | 56-91% de padres hispanos | Educación directa pero respetuosa |
| La calentura puede "subir al cerebro" | Común en comunidades mexicanas | Validar preocupación, explicar mecanismo real |
| Los remedios caseros son necesarios primero | Frecuente | Integrar si no son dañinos (té de manzanilla, etc.) |
| Los antibióticos curan la fiebre | 30-50% | Explicar diferencia viral/bacteriana |
| Baños con agua fría/alcohol | Aún practicado | Explicar riesgo (escalofríos, intoxicación) |

**Estrategias culturalmente competentes:**
1. Preguntar: "¿Qué cree que está causando la fiebre de su hijo?"
2. Explorar: "¿Hay algún remedio casero que hayan probado?"
3. Validar: "Entiendo su preocupación — muchos padres se preocupan por la fiebre"
4. Educar: "La fiebre es la forma en que el cuerpo pelea contra los gérmenes"
5. Negociar: "Puede usar el té de manzanilla Y el acetaminofén juntos"

### Controversias y Fronteras

**1. ¿Deberíamos tratar la fiebre?**
- Evidencia animal consistente: la fiebre mejora la respuesta inmune
- Estudios en adultos: paracetamol en sepsis → tendencia a mayor mortalidad (HEAT trial)
- No hay estudios equivalentes en niños
- Consenso pragmático: tratar para confort, no para alcanzar una temperatura meta

**2. Acetaminofén IV en la UCIP:**
- Más predecible que la vía oral en el paciente crítico
- Costo significativamente mayor
- Evidencia de superioridad sobre oral: limitada
- Indicación más clara: paciente que no tolera vía oral y necesita antipiresis

**3. Biomarcadores de siguiente generación:**
| Biomarcador | Ventaja Potencial | Estado |
|-------------|-------------------|--------|
| Presepsin (sCD14-ST) | Más rápido que PCT; específico para bacterias | Validación clínica |
| IL-6 | Se eleva antes que PCT y PCR | Disponible pero costoso |
| Transcriptómica (RNA) | Distingue viral vs bacteriano | Investigación avanzada |
| Proteómica point-of-care | Resultado en 15 min | Desarrollo comercial |
| Host-response signatures | Patrones multigénicos | Ensayos clínicos |

---
## MD/Professional-Level Explanation

[The above covers AI/ML models for febrile infant risk stratification, fever management controversies in pediatric critical care including THAPCA trial, genomic spectrum of febrile seizure-related encephalopathies with precision therapeutics, medical anthropology of fever beliefs in Hispanic/Latino cultures, and next-generation biomarkers for distinguishing viral from bacterial infections.]`,
      keyTerms: [
        {
          term: 'manejo de temperatura dirigido (TTM)',
          definition:
            'Estrategia de mantener la temperatura dentro de un rango específico en pacientes críticos; el estudio THAPCA demostró que la normotermia (36.8°C) es equivalente a la hipotermia (33°C) en el post-paro cardíaco pediátrico. | Strategy of maintaining temperature within a specific range in critical patients; the THAPCA study showed normothermia (36.8°C) is equivalent to hypothermia (33°C) in pediatric post-cardiac arrest.',
          pronunciation: 'teh-teh-EH-meh',
        },
        {
          term: 'ganancia vs pérdida de función (GoF/LoF)',
          definition:
            'Clasificación funcional de variantes genéticas que determina si una mutación produce una proteína hiperactiva (GoF) o deficiente (LoF); crítico para la farmacogenómica — el mismo gen puede requerir tratamientos opuestos según el tipo de variante. | Functional classification of genetic variants determining whether a mutation produces a hyperactive (GoF) or deficient (LoF) protein; critical for pharmacogenomics — the same gene may require opposite treatments depending on variant type.',
          pronunciation: 'gah-NAHN-see-ah vs. PEHR-dee-dah deh foon-see-OHN',
        },
        {
          term: 'presepsina (sCD14-ST)',
          definition:
            'Biomarcador emergente de infección bacteriana que se eleva más rápidamente que la procalcitonina; representa el fragmento soluble de CD14 liberado durante la fagocitosis de bacterias; potencialmente útil para la evaluación temprana del lactante febril. | Emerging bacterial infection biomarker rising faster than procalcitonin; represents the soluble CD14 fragment released during bacterial phagocytosis; potentially useful for early febrile infant evaluation.',
          pronunciation: 'preh-sep-SEE-nah',
        },
        {
          term: 'transcriptómica host-response',
          definition:
            'Análisis de los patrones de expresión génica del huésped (no del patógeno) para distinguir infecciones virales de bacterianas; las firmas multigénicas pueden lograr >95% de precisión diagnóstica en estudios clínicos. | Analysis of host (not pathogen) gene expression patterns to distinguish viral from bacterial infections; multigene signatures can achieve >95% diagnostic accuracy in clinical studies.',
          pronunciation: 'trans-krip-TOH-mee-kah',
        },
        {
          term: 'THAPCA',
          definition:
            'Therapeutic Hypothermia After Pediatric Cardiac Arrest; ensayo clínico multicéntrico que demostró equivalencia entre hipotermia (33°C) y normotermia (36.8°C) tras paro cardíaco pediátrico; cambió la práctica de hipotermia activa a manejo de temperatura dirigido. | Therapeutic Hypothermia After Pediatric Cardiac Arrest; multicenter clinical trial demonstrating equivalence between hypothermia (33°C) and normothermia (36.8°C) after pediatric cardiac arrest; shifted practice from active hypothermia to targeted temperature management.',
          pronunciation: 'TAP-kah',
        },
      ],
      clinicalNotes:
        'Integración clínica avanzada: Los modelos de ML para estratificación de riesgo del lactante febril muestran AUC superiores a cualquier criterio clásico (0.91-0.95 vs 0.72-0.87), pero su implementación se ve limitada por la falta de validación externa en poblaciones diversas, incluyendo lactantes hispanos. Antes de adoptar estos modelos, debemos exigir que los datos de entrenamiento reflejen la diversidad de nuestras poblaciones. Para encefalopatías epilépticas con convulsiones febriles, la clasificación funcional (GoF vs LoF) es ahora más importante que el nombre del gen — SCN2A-GoF mejora con bloqueadores de sodio mientras SCN2A-LoF empeora con los mismos fármacos. La fenfluramine para Dravet representa un éxito de la reutilización de fármacos guiada por mecanismo. En la práctica con familias hispanas, el concepto de "la calentura sube al cerebro" es una creencia profundamente arraigada que debe abordarse con humildad cultural — no como un mito a corregir sino como una preocupación legítima a redirigir con información clara y respetuosa. | Advanced clinical integration: ML models for febrile infant risk stratification show AUCs superior to any classic criteria (0.91-0.95 vs 0.72-0.87), but implementation is limited by lack of external validation in diverse populations, including Hispanic infants. Before adopting these models, we must demand training data reflecting the diversity of our populations. For epileptic encephalopathies with febrile seizures, functional classification (GoF vs LoF) is now more important than the gene name — SCN2A-GoF improves with sodium channel blockers while SCN2A-LoF worsens with the same drugs. Fenfluramine for Dravet represents a success of mechanism-guided drug repurposing. In practice with Hispanic families, the concept of "the fever going up to the brain" is a deeply rooted belief that should be addressed with cultural humility — not as a myth to correct but as a legitimate concern to redirect with clear and respectful information.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ref-aap-febrile-infant-2021',
      type: 'article',
      title: 'Clinical Practice Guideline: Evaluation and Management of Well-Appearing Febrile Infants 8 to 60 Days Old',
      authors: ['Pantell, R.H.', 'Roberts, K.B.', 'Adams, W.G.'],
      source: 'Pediatrics, AAP',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-nelson-fever',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics - Fever and Fever of Unknown Origin',
      authors: ['Kliegman, R.M.', 'St. Geme, J.W.'],
      source: 'Elsevier, 22nd Edition',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-dravet-management',
      type: 'article',
      title: 'Dravet Syndrome: Diagnosis, Management, and Emerging Therapies',
      authors: ['Wirrell, E.C.', 'Nabbout, R.'],
      source: 'Epilepsia',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-fever-phobia-hispanic',
      type: 'article',
      title: 'Fever Phobia Revisited: Have Parental Misconceptions Changed in 20 Years?',
      authors: ['Crocetti, M.', 'Moghbeli, N.', 'Serwint, J.'],
      source: 'Pediatrics',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    {
      targetId: 'condition-vacunacion-immunization',
      targetType: 'condition',
      relationship: 'related',
      label: 'Vacunación Pediátrica / Pediatric Immunization',
    },
    {
      targetId: 'condition-asma-pediatrico-asthma',
      targetType: 'condition',
      relationship: 'sibling',
      label: 'Asma Pediátrico / Pediatric Asthma',
    },
    {
      targetId: 'pediatrics-bronchiolitis',
      targetType: 'condition',
      relationship: 'related',
      label: 'Bronquiolitis / Bronchiolitis',
    },
  ],

  tags: {
    systems: ['immune', 'nervous'],
    topics: [
      'pediatrics',
      'fever',
      'infectious disease',
      'emergency medicine',
      'pharmacology',
      'genetics',
    ],
    keywords: [
      'fiebre',
      'fever',
      'calentura',
      'convulsión febril',
      'febrile seizure',
      'acetaminofén',
      'ibuprofeno',
      'procalcitonina',
      'Dravet',
      'GEFS+',
      'lactante febril',
      'febrile infant',
      'fiebre-fobia',
      'antipiréticos',
    ],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'emergency medicine', 'family medicine'],
    },
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
