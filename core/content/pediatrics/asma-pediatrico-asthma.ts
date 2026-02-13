/**
 * Asma Pediátrico / Pediatric Asthma
 *
 * Contenido educativo bilingüe (español primero) sobre asma en niños
 * incluyendo reconocimiento, clasificación, manejo, técnica de inhalador,
 * y planes de acción para familias hispanohablantes.
 *
 * Bilingual educational content (Spanish-first) on childhood asthma
 * including recognition, classification, management, inhaler technique,
 * and action plans for Spanish-speaking families.
 */

import { EducationalContent } from '../types';

export const ASMA_PEDIATRICO_ASTHMA: EducationalContent = {
  id: 'condition-asma-pediatrico-asthma',
  type: 'condition',
  name: 'Pediatric Asthma',
  nameEs: 'Asma Pediátrico',
  alternateNames: [
    'Childhood asthma',
    'Asma infantil',
    'Asma bronquial en niños',
    'Reactive airway disease',
    'Enfermedad reactiva de las vías aéreas',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'El asma es una enfermedad que hace que los tubos que llevan aire a los pulmones se estrechen, causando dificultad para respirar, tos y silbidos en el pecho. Con el tratamiento correcto, los niños con asma pueden llevar una vida normal y activa. | Asthma is a disease that makes the tubes carrying air to the lungs narrow, causing difficulty breathing, coughing, and wheezing. With proper treatment, children with asthma can lead a normal and active life.',
      explanation: `## Explicación Simple

El **asma** es una enfermedad de los pulmones que es muy común en los niños. Cuando un niño tiene asma, los tubos que llevan el aire a los pulmones (las vías aéreas) se irritan fácilmente y se estrechan, haciendo difícil respirar.

### ¿Cómo se siente un ataque de asma?

- **Tos** — especialmente de noche o temprano en la mañana
- **Silbido en el pecho** (sibilancias) — un sonido como un silbido al respirar
- **Dificultad para respirar** — sensación de que "no entra suficiente aire"
- **Pecho apretado** — como si alguien estuviera apretando el pecho
- **Cansancio fácil** con el ejercicio o el juego

### ¿Qué causa los ataques de asma?

Los "disparadores" o "triggers" son cosas que empeoran el asma:
- **Resfriados y gripe** (la causa más común en niños)
- **Humo de cigarro** — incluso si alguien fuma afuera
- **Polvo, ácaros y moho** en la casa
- **Pelo de mascotas** (perros, gatos)
- **Ejercicio** (especialmente en aire frío)
- **Aire frío o cambios de clima**
- **Emociones fuertes** (llorar, reír mucho)
- **Cucarachas y ratones** (muy común en viviendas urbanas)

### Medicinas para el asma

Hay dos tipos principales:

**1. Medicina de RESCATE (alivio rápido):**
- Albuterol (Ventolin, ProAir) — el inhalador azul
- Se usa SOLO cuando tiene síntomas
- Abre las vías aéreas en minutos
- Siempre debe tenerlo consigo

**2. Medicina de CONTROL (prevención diaria):**
- Corticoesteroides inhalados (Flovent, QVAR, Pulmicort)
- Se usa TODOS LOS DÍAS, incluso cuando se siente bien
- Previene los ataques reduciendo la inflamación
- No funciona si solo se usa cuando hay síntomas

### ¿Cómo usar el inhalador correctamente?

1. Agite el inhalador 5-10 veces
2. Ponga el espaciador (tubo de plástico) en el inhalador
3. Saque todo el aire de los pulmones
4. Ponga el espaciador en la boca y oprima el inhalador
5. Respire lento y profundo por 3-5 segundos
6. Contenga la respiración por 10 segundos
7. Espere 1 minuto antes de la segunda dosis (si se necesita)

**Muy importante:** SIEMPRE use el espaciador con el inhalador. Sin espaciador, la medicina se queda en la boca y no llega a los pulmones.

### Plan de Acción para el Asma

Su doctor le dará un plan con colores como un semáforo:
- **VERDE (todo bien):** Sin síntomas. Siga con su medicina de control.
- **AMARILLO (precaución):** Tiene tos, silbido o dificultad. Use el inhalador de rescate.
- **ROJO (emergencia):** No puede hablar, labios morados, el rescate no ayuda. LLAME AL 911.

---
## Simple Explanation

**Asthma** is a lung disease that is very common in children. When a child has asthma, the tubes carrying air to the lungs (airways) get irritated easily and narrow, making it hard to breathe.

[The symptoms, triggers, two types of medications, correct inhaler technique, and traffic-light action plan are covered in the Spanish section above with identical structure and content.]`,
      keyTerms: [
        {
          term: 'asma',
          definition:
            'Enfermedad de los pulmones donde los tubos que llevan aire se estrechan, causando tos, silbido y dificultad para respirar. | Lung disease where the air-carrying tubes narrow, causing cough, wheezing, and difficulty breathing.',
          pronunciation: 'AHS-mah',
        },
        {
          term: 'sibilancia',
          definition:
            'Sonido como un silbido que se escucha cuando el niño respira; es causado por el aire pasando por vías aéreas estrechas. | Whistling sound heard when the child breathes; caused by air passing through narrow airways.',
          pronunciation: 'see-bee-LAHN-see-ah',
        },
        {
          term: 'inhalador de rescate',
          definition:
            'Medicina (albuterol) que abre las vías aéreas rápidamente cuando hay un ataque de asma. Se usa solo cuando hay síntomas. | Medicine (albuterol) that opens airways quickly during an asthma attack. Used only when there are symptoms.',
          pronunciation: 'een-ah-lah-DOR deh reh-SKAH-teh',
        },
        {
          term: 'espaciador',
          definition:
            'Tubo de plástico que se conecta al inhalador para que la medicina llegue mejor a los pulmones en vez de quedarse en la boca. | Plastic tube that connects to the inhaler so the medicine reaches the lungs better instead of staying in the mouth.',
          pronunciation: 'es-pah-see-ah-DOR',
        },
        {
          term: 'disparador / trigger',
          definition:
            'Algo que empeora el asma o causa un ataque, como el humo, el polvo, los resfriados o el ejercicio. | Something that worsens asthma or causes an attack, like smoke, dust, colds, or exercise.',
          pronunciation: 'dees-pah-rah-DOR / TRIH-ger',
        },
      ],
      analogies: [
        'Las vías aéreas con asma son como una manguera de jardín que se aprieta — el agua (aire) pasa con dificultad y hace un sonido de silbido. La medicina de rescate "suelta" la manguera. | Airways with asthma are like a garden hose being squeezed — water (air) passes through with difficulty and makes a whistling sound. Rescue medicine "releases" the hose.',
        'La medicina de control es como poner protector solar todos los días — no puede esperar a que ya le dé el sol (un ataque) para ponérsela. Funciona solo si la usa diariamente. | Controller medicine is like putting on sunscreen every day — you cannot wait until you are already sunburned (an attack) to apply it. It only works if used daily.',
      ],
      examples: [
        'María, de 5 años, siempre tose mucho de noche. Su mamá pensaba que era alergia, pero el doctor descubrió que tiene asma. Con un inhalador de control diario, ya no tose de noche. | Maria, 5 years old, always coughs a lot at night. Her mom thought it was allergies, but the doctor discovered she has asthma. With a daily controller inhaler, she no longer coughs at night.',
        'Carlos, de 8 años, no podía jugar fútbol sin quedarse sin aire. Con su inhalador de rescate antes del ejercicio y su medicina de control diaria, ahora juega sin problemas. | Carlos, 8 years old, could not play soccer without running out of breath. With his rescue inhaler before exercise and daily controller medicine, he now plays without problems.',
      ],
      patientCounselingPoints: [
        'La medicina de control debe usarse TODOS LOS DÍAS, incluso cuando su hijo se siente bien. No la suspenda sin hablar con el doctor. | Controller medicine must be used EVERY DAY, even when your child feels well. Do not stop it without talking to the doctor.',
        'Si su hijo usa el inhalador de rescate más de 2 veces por semana (sin contar antes del ejercicio), necesita hablar con el doctor — probablemente necesita más medicina de control. | If your child uses the rescue inhaler more than 2 times per week (not counting before exercise), you need to talk to the doctor — they probably need more controller medicine.',
        'Nadie debe fumar dentro de la casa ni en el carro. El humo de segunda mano es uno de los peores disparadores del asma. | Nobody should smoke inside the house or car. Secondhand smoke is one of the worst asthma triggers.',
        'Cubra las almohadas y colchones con fundas especiales para ácaros. Lave la ropa de cama con agua caliente cada semana. | Cover pillows and mattresses with special dust mite covers. Wash bedding in hot water every week.',
        'Su hijo con asma PUEDE y DEBE hacer ejercicio. Use el inhalador de rescate 15-20 minutos antes de la actividad física. | Your child with asthma CAN and SHOULD exercise. Use the rescue inhaler 15-20 minutes before physical activity.',
      ],
    },

    2: {
      level: 2,
      summary:
        'El asma pediátrico es una enfermedad inflamatoria crónica de las vías aéreas caracterizada por hiperreactividad bronquial, broncoconstricción reversible y remodelación. Se clasifica por gravedad (intermitente, persistente leve/moderada/severa) y se trata con un enfoque escalonado (stepwise). | Pediatric asthma is a chronic inflammatory airway disease characterized by bronchial hyperreactivity, reversible bronchoconstriction, and remodeling. It is classified by severity (intermittent, mild/moderate/severe persistent) and treated with a stepwise approach.',
      explanation: `## Explicación Intermedia / Intermediate Explanation

### Fisiopatología Básica del Asma

El asma involucra tres procesos principales en las vías aéreas:

1. **Inflamación crónica:**
   - Infiltración de eosinófilos, mastocitos, linfocitos T y células dendríticas
   - Liberación de mediadores inflamatorios (histamina, leucotrienos, prostaglandinas)
   - Edema de la mucosa

2. **Broncoconstricción:**
   - Contracción del músculo liso bronquial
   - Desencadenada por alérgenos, irritantes, ejercicio, infecciones
   - Reversible con broncodilatadores (albuterol)

3. **Remodelación de vías aéreas (crónico):**
   - Engrosamiento de la membrana basal
   - Hipertrofia del músculo liso
   - Hiperplasia de células caliciformes (producen más moco)
   - Puede ser parcialmente irreversible

### Clasificación por Gravedad (NAEPP/EPR-3)

| Categoría | Síntomas diurnos | Síntomas nocturnos | Uso de rescate | FEV₁ |
|-----------|-----------------|--------------------|--------------------|------|
| Intermitente | ≤2 días/semana | ≤2 noches/mes | ≤2 días/semana | ≥80% |
| Persistente leve | >2 días/semana | 3-4 noches/mes | >2 días/semana | ≥80% |
| Persistente moderada | Diarios | >1 noche/semana | Diario | 60-80% |
| Persistente severa | Continuos | Frecuente (7/semana) | Varias veces/día | <60% |

### Tratamiento Escalonado (Stepwise Therapy)

**Paso 1 (Intermitente):**
- SABA (albuterol) PRN solamente

**Paso 2 (Persistente leve):**
- ICS dosis baja diario (fluticasona 88 μg, budesonida 180 μg)
- Alternativa: antagonista de leucotrienos (montelukast)

**Paso 3 (Persistente moderada):**
- ICS dosis media O ICS dosis baja + LABA (salmeterol, formoterol)
- En <5 años: ICS dosis media preferido (LABA no aprobado <4 años)

**Paso 4:**
- ICS dosis media + LABA
- Considerar referencia a especialista

**Paso 5:**
- ICS dosis alta + LABA
- Considerar omalizumab (anti-IgE) si asma alérgica
- Referencia a neumología pediátrica

**Paso 6:**
- Paso 5 + corticoesteroides orales
- Biológicos (omalizumab, mepolizumab, dupilumab)

### Medicamentos del Asma: Resumen

| Medicamento | Clase | Mecanismo | Uso |
|-------------|-------|-----------|-----|
| Albuterol | SABA | Agonista β2 → relajación músculo liso | Rescate |
| Fluticasona (Flovent) | ICS | Antiinflamatorio → ↓ eosinófilos, mediadores | Control |
| Budesonida (Pulmicort) | ICS | Antiinflamatorio (nebulización para <5 años) | Control |
| Montelukast (Singulair) | LTRA | Bloquea leucotrienos → ↓ inflamación, broncoespasmo | Control |
| Salmeterol/Formoterol | LABA | Agonista β2 prolongado → broncodilatación 12h | Control (siempre + ICS) |
| Prednisona/Prednisolona | Corticoesteroide oral | Antiinflamatorio sistémico potente | Exacerbaciones |

### Evaluación de Control del Asma

**Preguntas clave (Childhood Asthma Control Test — C-ACT para 4-11 años):**
- ¿Cuántos días a la semana tiene síntomas?
- ¿Se despierta de noche por asma?
- ¿Cuántas veces usa el inhalador de rescate?
- ¿Limita sus actividades?

**Bien controlado:** Síntomas ≤2 días/semana, sin despertar nocturno, sin limitación de actividad, rescate ≤2 días/semana

### Técnica del Inhalador de Dosis Medida (MDI) con Espaciador

**Para niños <4 años (con mascarilla):**
1. Agitar MDI → insertar en espaciador → colocar mascarilla sobre nariz y boca
2. Oprimir canister → 6 respiraciones tranquilas con mascarilla sellada
3. Repetir si se necesita segunda dosis

**Para niños 4-12 años (sin mascarilla, con boquilla):**
1. Agitar MDI → insertar en espaciador
2. Exhalar completamente → sellar labios alrededor de la boquilla
3. Oprimir canister → inhalar lenta y profundamente (3-5 segundos)
4. Contener respiración 10 segundos → exhalar lentamente
5. Esperar 1 minuto para segunda dosis

**Errores comunes:**
- No agitar el inhalador
- No usar espaciador (reduce depósito pulmonar >50%)
- Inhalar demasiado rápido
- No contener la respiración
- No enjuagar la boca después del ICS (riesgo de candidiasis oral)

---
## Intermediate Explanation

[The above covers basic asthma pathophysiology (inflammation, bronchoconstriction, remodeling), NAEPP severity classification, stepwise therapy from Steps 1-6, medication summary table, asthma control assessment, and correct MDI with spacer technique for different age groups.]`,
      keyTerms: [
        {
          term: 'hiperreactividad bronquial',
          definition:
            'Respuesta exagerada de las vías aéreas a estímulos como alérgenos, ejercicio o aire frío, produciendo broncoconstricción; característica definitoria del asma. | Exaggerated airway response to stimuli like allergens, exercise, or cold air, producing bronchoconstriction; defining characteristic of asthma.',
          pronunciation: 'ee-per-reh-ak-tee-bee-DAHD bron-kee-AHL',
        },
        {
          term: 'ICS (corticoesteroide inhalado)',
          definition:
            'Medicamento antiinflamatorio que se inhala directamente a los pulmones; piedra angular del tratamiento de control del asma persistente. Ejemplos: fluticasona, budesonida, beclometasona. | Anti-inflammatory medication inhaled directly into the lungs; cornerstone of persistent asthma controller treatment. Examples: fluticasone, budesonide, beclomethasone.',
          pronunciation: 'ee-seh-EH-seh',
        },
        {
          term: 'SABA (agonista β2 de acción corta)',
          definition:
            'Broncodilatador de acción rápida (albuterol) que relaja el músculo liso de las vías aéreas en minutos; usado como medicina de rescate para síntomas agudos de asma. | Short-acting bronchodilator (albuterol) that relaxes airway smooth muscle within minutes; used as rescue medicine for acute asthma symptoms.',
          pronunciation: 'SAH-bah',
        },
        {
          term: 'tratamiento escalonado (stepwise)',
          definition:
            'Enfoque de manejo del asma donde la intensidad del tratamiento se ajusta hacia arriba o abajo según el nivel de control; el objetivo es usar la menor cantidad de medicamento necesaria para mantener el control. | Asthma management approach where treatment intensity is adjusted up or down based on control level; the goal is to use the least amount of medication needed to maintain control.',
          pronunciation: 'trah-tah-mee-EN-toh es-kah-loh-NAH-doh',
        },
        {
          term: 'remodelación de vías aéreas',
          definition:
            'Cambios estructurales crónicos en las vías aéreas del asma incluyendo engrosamiento de membrana basal, hipertrofia del músculo liso e hiperplasia de células caliciformes; puede ser parcialmente irreversible. | Chronic structural changes in asthmatic airways including basement membrane thickening, smooth muscle hypertrophy, and goblet cell hyperplasia; may be partially irreversible.',
          pronunciation: 'reh-moh-deh-lah-see-OHN',
        },
      ],
      analogies: [
        'El tratamiento escalonado es como subir y bajar una escalera — empiezas con poco medicamento (escalón 1) y subes si no funciona, o bajas cuando el asma está bien controlada. | Stepwise treatment is like going up and down a staircase — you start with little medication (step 1) and go up if it does not work, or come down when asthma is well controlled.',
        'El espaciador funciona como una "sala de espera" para las partículas del medicamento — les da tiempo para ralentizarse y ser inhaladas más profundamente a los pulmones, en vez de chocar contra la garganta. | The spacer works like a "waiting room" for medication particles — it gives them time to slow down and be inhaled deeper into the lungs, instead of hitting the throat.',
      ],
    },

    3: {
      level: 3,
      summary:
        'El asma pediátrico involucra una cascada inmunológica tipo 2 (Th2) con activación de eosinófilos mediada por IL-5, producción de IgE mediada por IL-4/IL-13, y múltiples fenotipos (alérgico, viral-inducido, obeso, neutrofílico). La espirometría con prueba de broncodilatación es la herramienta diagnóstica clave en mayores de 5 años. | Pediatric asthma involves a type 2 (Th2) immune cascade with IL-5-mediated eosinophil activation, IL-4/IL-13-mediated IgE production, and multiple phenotypes (allergic, viral-induced, obese, neutrophilic). Spirometry with bronchodilator testing is the key diagnostic tool in children over 5.',
      explanation: `## Explicación para Nivel Universitario Avanzado / Advanced College-Level

### Inmunología del Asma: Cascada Tipo 2

\`\`\`
Alérgeno inhalado
        ↓
Células epiteliales → Alarminas (TSLP, IL-25, IL-33)
        ↓
Activación de células dendríticas + ILC2
        ↓
Presentación a células T naive → diferenciación Th2
        ↓
├── IL-4 → Cambio de isotipo en células B → IgE
├── IL-5 → Reclutamiento y activación de eosinófilos
├── IL-13 → Hiperplasia de células caliciformes + hiperreactividad
└── IL-9 → Activación de mastocitos
        ↓
IgE se une a FcεRI en mastocitos
        ↓
Re-exposición al alérgeno → Entrecruzamiento de IgE
        ↓
Degranulación de mastocitos → Histamina, leucotrienos, PGD2
        ↓
Broncoconstricción aguda + inflamación
\`\`\`

**Fase temprana (minutos):**
- Mediada por mastocitos: histamina, LTC4, PGD2
- Broncoconstricción aguda, edema, secreciones

**Fase tardía (4-8 horas):**
- Mediada por eosinófilos: MBP, ECP, EPO
- Inflamación sostenida, daño epitelial
- Hiperreactividad bronquial prolongada

### Fenotipos y Endotipos del Asma Pediátrico

| Fenotipo | Edad Típica | Mecanismo | Inflamación | Respuesta a ICS |
|----------|-------------|-----------|-------------|----------------|
| Sibilancias virales episódicas | <3 años | Virus → edema | Neutrofílica | Pobre |
| Sibilancias por múltiples triggers | <5 años | Alergia + virus | Mixta | Moderada |
| Asma alérgica (T2-high) | >5 años | IgE-mediado, eosinofílico | Eosinofílica | Buena |
| Asma no alérgica | Adolescentes | No IgE-mediado | Variable | Variable |
| Asma inducida por obesidad | Adolescentes | Mecánico + inflamatorio | Neutrofílica | Pobre |
| Asma grave T2-high | Cualquiera | Eosinofílico refractario | Eosinófilos altos | Requiere biológicos |

**Predictores de asma persistente (Índice Predictivo de Asma — API Modificado):**
- Criterio mayor: ≥3 episodios de sibilancias/año + ≥1 criterio mayor O ≥2 menores
- Criterios mayores: dermatitis atópica, alergia a aeroalérgenos, padre con asma
- Criterios menores: alergia alimentaria, sibilancias sin resfriado, eosinofilia ≥4%
- API positivo: 77% tendrán asma a los 6-13 años
- API negativo: 95% NO tendrán asma a los 6-13 años

### Diagnóstico: Espirometría y Pruebas de Función Pulmonar

**Espirometría (>5-6 años):**
- FEV₁ basal: normal no excluye asma
- FEV₁/FVC <0.85 en niños sugiere obstrucción
- Prueba de broncodilatación: ↑ FEV₁ ≥12% post-albuterol = reversibilidad positiva
- Variabilidad del PEF >13% apoya diagnóstico

**Para menores de 5 años (espirometría no confiable):**
- Diagnóstico es CLÍNICO
- Basado en historia, examen físico, respuesta a tratamiento
- Oscilometría por impulso (IOS) es una alternativa prometedora
- Trial terapéutico con ICS: mejora en 2-3 meses apoya diagnóstico

**Pruebas adicionales:**
| Prueba | Utilidad | Interpretación |
|--------|---------|---------------|
| FeNO (óxido nítrico exhalado) | Marcador de inflamación T2 | >20 ppb (niños) sugiere inflamación eosinofílica |
| IgE total y específicas | Identificar sensibilización alérgica | Apoya fenotipo alérgico |
| Pruebas cutáneas (prick test) | Identificar alérgenos específicos | Guía evitación ambiental |
| Eosinófilos en sangre | Marcador T2 | >300/μL sugiere inflamación eosinofílica |
| Radiografía de tórax | Excluir diagnósticos alternativos | Generalmente normal en asma |

### Manejo de la Exacerbación Aguda

**Evaluación de severidad de la crisis:**
| Parámetro | Leve | Moderada | Severa | Inminente paro resp. |
|-----------|------|----------|--------|---------------------|
| Habla | Oraciones | Frases | Palabras | No puede hablar |
| FR | Levemente ↑ | Aumentada | Muy aumentada | Irregular |
| Uso de músculos accesorios | No | Sí | Sí (retracción severa) | Mov. paradójico |
| Sibilancias | Espiratorias | Inspiratorias + espiratorias | Pueden disminuir | Silencio torácico |
| SpO₂ | >95% | 91-95% | <91% | <90% |
| PEF (si posible) | >70% | 40-69% | <40% | No medible |

**Protocolo de manejo en urgencias:**
1. O₂ para mantener SpO₂ >94%
2. Albuterol nebulizado: 2.5 mg (o MDI 4-8 puffs) cada 20 min x 3 dosis
3. Ipratropio nebulizado: 0.5 mg con las primeras 3 dosis de albuterol (severo)
4. Corticoesteroides sistémicos TEMPRANO: prednisona/prednisolona 1-2 mg/kg (máx 60 mg)
5. Si no responde: albuterol continuo, MgSO₄ IV 25-75 mg/kg, considerar UCIP

### Control Ambiental: Especificidades para la Comunidad Hispana/Latina

**Disparadores comunes en hogares hispanos/latinos urbanos:**
- Cucarachas (Bla g 1, Bla g 2): prevalencia >80% en viviendas urbanas de bajo ingreso
- Ratones (Mus m 1): prevalente en viviendas antiguas
- Hacinamiento: dificulta el control de ácaros y alérgenos
- Uso de productos de limpieza con cloro y amoniaco (irritantes)
- Cocina con gas sin ventilación adecuada (NO₂, partículas)
- Incienso, veladoras, sahumerios

**Recomendaciones prácticas:**
1. Ácido bórico para cucarachas (más seguro que sprays)
2. Sellar grietas en paredes y pisos
3. Fundas para colchones y almohadas (anti-ácaros)
4. Ventilación al cocinar
5. Evitar productos de limpieza con aromatizantes fuertes
6. Control de humedad (deshumidificador si posible)

---
## Advanced College-Level Explanation

[The above covers type 2 immune cascade in asthma, phenotypes and endotypes, the Asthma Predictive Index, spirometry with bronchodilator testing for diagnosis, FeNO interpretation, acute exacerbation severity assessment and emergency management protocol, and culturally specific environmental control for Hispanic/Latino communities.]`,
      keyTerms: [
        {
          term: 'alarminas (TSLP, IL-25, IL-33)',
          definition:
            'Citoquinas liberadas por las células epiteliales de las vías aéreas en respuesta a daño o alérgenos; inician la cascada inmune tipo 2 activando células dendríticas e ILC2, siendo blancos terapéuticos emergentes (tezepelumab anti-TSLP). | Cytokines released by airway epithelial cells in response to damage or allergens; initiate the type 2 immune cascade by activating dendritic cells and ILC2, being emerging therapeutic targets (tezepelumab anti-TSLP).',
          pronunciation: 'ah-lar-MEE-nahs',
        },
        {
          term: 'FeNO (óxido nítrico exhalado fraccionado)',
          definition:
            'Biomarcador no invasivo de inflamación eosinofílica de las vías aéreas; niveles >20 ppb en niños sugieren inflamación tipo 2 y predicen buena respuesta a ICS. | Non-invasive biomarker of eosinophilic airway inflammation; levels >20 ppb in children suggest type 2 inflammation and predict good ICS response.',
          pronunciation: 'feh-NOH',
        },
        {
          term: 'Índice Predictivo de Asma (API)',
          definition:
            'Herramienta clínica que usa criterios mayores y menores para predecir qué niños menores de 3 años con sibilancias recurrentes desarrollarán asma persistente; API positivo = 77% probabilidad de asma a los 6-13 años. | Clinical tool using major and minor criteria to predict which children under 3 with recurrent wheezing will develop persistent asthma; positive API = 77% probability of asthma at 6-13 years.',
          pronunciation: 'AH-pee-EE',
        },
        {
          term: 'Bla g 1',
          definition:
            'Alérgeno principal de la cucaracha alemana (Blattella germanica); proteasa digestiva presente en heces, saliva y cuerpos; prevalente en >80% de viviendas urbanas de bajo ingreso y fuertemente asociado con asma pediátrica. | Major allergen of the German cockroach (Blattella germanica); digestive protease present in feces, saliva, and bodies; prevalent in >80% of low-income urban dwellings and strongly associated with pediatric asthma.',
          pronunciation: 'blah-heh-OO-noh',
        },
        {
          term: 'endotipo',
          definition:
            'Clasificación del asma basada en el mecanismo molecular subyacente (T2-alto eosinofílico vs. T2-bajo neutrofílico); más precisa que el fenotipo para guiar terapias biológicas dirigidas. | Asthma classification based on the underlying molecular mechanism (T2-high eosinophilic vs. T2-low neutrophilic); more precise than phenotype for guiding targeted biologic therapies.',
          pronunciation: 'en-doh-TEE-poh',
        },
      ],
      clinicalNotes:
        'En niños menores de 5 años, el diagnóstico de asma es clínico — la espirometría no es confiable en este grupo. El Índice Predictivo de Asma modificado es la mejor herramienta para predecir persistencia en preescolares con sibilancias recurrentes. Un trial terapéutico con ICS dosis baja por 2-3 meses es tanto diagnóstico como terapéutico. El FeNO >20 ppb en niños apoya el diagnóstico de asma eosinofílica y predice respuesta a ICS, pero puede estar falsamente elevado por rinitis alérgica y falsamente bajo por ICS o tabaco. En comunidades hispanas/latinas urbanas, los alérgenos de cucaracha y ratón son frecuentemente los disparadores más importantes y menos reconocidos — preguntar específicamente sobre estas exposiciones durante la historia clínica. La educación sobre el uso correcto del espaciador debe ser una prioridad en cada visita, ya que los estudios muestran que solo el 10% de los pacientes usa correctamente su inhalador. | In children under 5, asthma diagnosis is clinical — spirometry is unreliable in this group. The modified Asthma Predictive Index is the best tool for predicting persistence in preschoolers with recurrent wheezing. A therapeutic trial with low-dose ICS for 2-3 months is both diagnostic and therapeutic. FeNO >20 ppb in children supports eosinophilic asthma diagnosis and predicts ICS response, but may be falsely elevated by allergic rhinitis and falsely low by ICS or tobacco. In urban Hispanic/Latino communities, cockroach and mouse allergens are frequently the most important and least recognized triggers — ask specifically about these exposures during history taking. Education on correct spacer use should be a priority at every visit, as studies show only 10% of patients correctly use their inhaler.',
    },

    4: {
      level: 4,
      summary:
        'El manejo avanzado del asma pediátrico integra la terapia con biológicos basada en biomarcadores, la farmacogenómica de la respuesta a broncodilatadores, el concepto de asma severa-difícil vs. difícil de tratar, las actualizaciones de GINA 2025 incluyendo MART/SMART en pediatría, y las disparidades en morbimortalidad del asma en la población hispana/latina. | Advanced pediatric asthma management integrates biomarker-based biologic therapy, pharmacogenomics of bronchodilator response, the severe-difficult vs. difficult-to-treat asthma concept, GINA 2025 updates including MART/SMART in pediatrics, and asthma morbidity/mortality disparities in the Hispanic/Latino population.',
      explanation: `## Explicación Avanzada (Nivel de Posgrado) / Graduate-Level Explanation

### Terapias Biológicas en Asma Pediátrica

| Biológico | Blanco | Indicación | Edad Aprobada | Biomarcador Predictor |
|-----------|--------|------------|---------------|----------------------|
| Omalizumab (Xolair) | IgE | Asma alérgica moderada-severa | ≥6 años | IgE 30-1500, sensibilización |
| Mepolizumab (Nucala) | IL-5 | Asma eosinofílica severa | ≥6 años | Eos ≥150/μL |
| Benralizumab (Fasenra) | IL-5Rα | Asma eosinofílica severa | ≥12 años | Eos ≥300/μL |
| Dupilumab (Dupixent) | IL-4Rα (IL-4/IL-13) | Asma T2 moderada-severa | ≥6 años | Eos ≥150 o FeNO ≥25 |
| Tezepelumab (Tezspire) | TSLP | Asma severa (incluyendo T2-low) | ≥12 años | Cualquier biomarcador |

**Selección del biológico según biomarcadores:**
\`\`\`
¿IgE total elevada + sensibilización a aeroalérgeno?
  → Sí → Omalizumab O Dupilumab
  → No ↓
¿Eosinófilos ≥300/μL O FeNO ≥25 ppb?
  → Sí → Dupilumab (más amplio) O Mepolizumab/Benralizumab
  → No ↓
¿Asma severa T2-low?
  → Sí → Tezepelumab (único que funciona en T2-low)
  → No → Reevaluar diagnóstico y adherencia
\`\`\`

### Asma Severa: Evaluación Sistemática

**Definición (ERS/ATS):** Asma que requiere tratamiento escalonado 4-5 (ICS dosis alta + LABA ± otros controladores) O corticoesteroides sistémicos frecuentes para mantener control, O que permanece no controlada a pesar de este tratamiento.

**¿Es realmente asma severa o difícil de tratar?**

| Factor Modificable | Prevalencia | Impacto |
|-------------------|------------|---------|
| Mala técnica inhalatoria | 50-80% | Falso "no respondedor" |
| No adherencia a ICS | 30-70% | Causa más común de control pobre |
| Exposición ambiental continua | 40-60% | Cucarachas, humo, moho |
| Comorbilidades no tratadas | 30-40% | Rinitis, ERGE, obesidad, apnea |
| Diagnóstico incorrecto | 12-30% | Disfunción cuerdas vocales, anillo vascular |

**Evaluación del asma difícil antes de escalar a biológicos:**
1. Verificar diagnóstico (espirometría, considerar TC, broncoscopia)
2. Evaluar técnica inhalatoria (en cada visita, en vivo)
3. Monitorear adherencia (contador de dosis, farmacia, FeNO)
4. Controlar ambiente (visita domiciliaria si posible)
5. Tratar comorbilidades (rinitis, ERGE, obesidad, ansiedad)
6. Optimizar dosis de ICS antes de cambiar a biológico

### Farmacogenómica del Asma

**Respuesta a broncodilatadores β2:**
| Gen | Variante | Efecto Clínico |
|-----|----------|---------------|
| ADRB2 | Arg16Gly | Gly16 → respuesta disminuida a SABA con uso regular |
| ADRB2 | Gln27Glu | Modula down-regulation del receptor |
| CRHR1 | SNPs múltiples | Predicen respuesta a ICS |
| FCER2 | rs28364072 | Predicen exacerbaciones a pesar de ICS |
| GLCCI1 | rs37972 | Respuesta disminuida a ICS |

**Farmacogenómica de montelukast:**
- ALOX5: variante del promotor (sp1 binding site) → variable respuesta a LTRA
- LTC4S: -444A>C → respuesta diferencial
- Polimorfismos en CYP2C8 afectan metabolismo

**Black box warning de montelukast (FDA 2020):**
- Eventos neuropsiquiátricos: agitación, agresión, alucinaciones, depresión, ideación suicida
- Prevalencia: rara pero clínicamente significativa
- Recomendación: reservar para pacientes que no responden o no toleran ICS
- Monitoreo: preguntar sobre cambios conductuales en cada visita

### Actualizaciones GINA 2025 Relevantes para Pediatría

**Cambios clave:**
1. **MART/SMART en ≥12 años:** ICS-formoterol como mantenimiento Y rescate (elimina necesidad de SABA separado)
2. **Track 1 (preferido) vs Track 2:**
   - Track 1: ICS-formoterol PRN desde paso 1 (≥12 años)
   - Track 2: ICS-SABA PRN en paso 1 (si formoterol no disponible)
3. **Anti-TSLP (tezepelumab):** Primera opción para asma severa fenotipo-independiente
4. **Remodelación temprana:** Evidencia de que ICS temprano puede prevenir remodelación

**Asma y ejercicio — actualización:**
- El broncoespasmo inducido por ejercicio (BIE) afecta al 40-90% de los asmáticos
- SABA pre-ejercicio sigue siendo primera línea
- ICS de mantenimiento reduce severidad del BIE
- Warm-up gradual de 15 min reduce severidad
- Deportes de resistencia en aire frío y seco son los peores disparadores
- Natación generalmente bien tolerada (aire cálido y húmedo)

### Disparidades en Asma: Población Hispana/Latina

**Datos epidemiológicos:**
| Subgrupo Hispano | Prevalencia de Asma | Mortalidad (relativa) |
|-----------------|--------------------|-----------------------|
| Puertorriqueños | 16.1% (la más alta de todas las etnias en EE.UU.) | 3x vs. mexicano-americanos |
| Mexicano-americanos | 5.4% (la más baja) | Referencia |
| Cubano-americanos | Intermedia | Variable |
| Centroamericanos | Variable | Datos limitados |

**Factores que explican las disparidades:**
- Genéticos: ancestría africana en puertorriqueños → variantes ADRB2, ORMDL3
- Ambientales: vivienda urbana precaria, cucarachas, contaminación
- Socioeconómicos: acceso limitado a especialistas, ICS, seguimiento
- Culturales: "normalización" de síntomas, dependencia excesiva del rescate
- Sistémicos: prescripción insuficiente de ICS, falta de planes de acción escritos

**Intervenciones efectivas:**
1. Community Health Worker (promotoras) → ↓ visitas a urgencias 30-50%
2. Planes de acción escritos en español con semáforo
3. Educación sobre uso de espaciador con demostración en vivo
4. Visitas domiciliarias para control ambiental
5. Integración con programas de vivienda para remediación de alérgenos

---
## Graduate-Level Explanation

[The above covers biologic therapies with biomarker selection algorithm, systematic evaluation of severe vs. difficult-to-treat asthma, pharmacogenomics of beta-agonist and ICS response, GINA 2025 updates including MART/SMART, exercise-induced bronchospasm, and Hispanic/Latino asthma disparities with specific interventions.]`,
      keyTerms: [
        {
          term: 'MART/SMART',
          definition:
            'Maintenance And Reliever Therapy / Single Maintenance And Reliever Therapy; estrategia donde ICS-formoterol se usa tanto como mantenimiento diario como para rescate, eliminando la necesidad de SABA separado; Track 1 preferido de GINA para ≥12 años. | Maintenance And Reliever Therapy / Single Maintenance And Reliever Therapy; strategy where ICS-formoterol is used both as daily maintenance and for rescue, eliminating the need for separate SABA; GINA preferred Track 1 for ages ≥12.',
          pronunciation: 'mart / smart',
        },
        {
          term: 'asma severa vs. difícil de tratar',
          definition:
            'Distinción crítica: asma severa es la que permanece no controlada a pesar de tratamiento optimizado; asma difícil de tratar tiene factores modificables (mala técnica, no adherencia, exposiciones ambientales, comorbilidades) que deben abordarse antes de escalar a biológicos. | Critical distinction: severe asthma remains uncontrolled despite optimized treatment; difficult-to-treat asthma has modifiable factors (poor technique, non-adherence, environmental exposures, comorbidities) that must be addressed before escalating to biologics.',
          pronunciation: 'AHS-mah seh-BEH-rah',
        },
        {
          term: 'tezepelumab',
          definition:
            'Anticuerpo monoclonal anti-TSLP; primer biológico para asma severa que funciona independientemente del fenotipo (tanto T2-alto como T2-bajo); bloquea la señal epitelial más proximal de la cascada inflamatoria. | Anti-TSLP monoclonal antibody; first biologic for severe asthma that works regardless of phenotype (both T2-high and T2-low); blocks the most proximal epithelial signal of the inflammatory cascade.',
          pronunciation: 'teh-seh-PEHH-loo-mab',
        },
        {
          term: 'ADRB2 Arg16Gly',
          definition:
            'Polimorfismo del receptor β2-adrenérgico donde la variante Gly16 se asocia con downregulation acelerada del receptor y menor respuesta a albuterol con uso regular; más prevalente en poblaciones de ancestría africana. | Beta-2 adrenergic receptor polymorphism where the Gly16 variant is associated with accelerated receptor downregulation and decreased albuterol response with regular use; more prevalent in populations of African ancestry.',
          pronunciation: 'ah-deh-erre-beh-DOS',
        },
        {
          term: 'promotora de salud (asma)',
          definition:
            'Trabajadora de salud comunitaria entrenada en educación sobre asma que realiza visitas domiciliarias, verifica técnica de inhalador, evalúa disparadores ambientales y conecta familias con recursos; demostrado reducir visitas a urgencias 30-50% en comunidades hispanas. | Community health worker trained in asthma education who conducts home visits, verifies inhaler technique, assesses environmental triggers, and connects families with resources; shown to reduce ER visits 30-50% in Hispanic communities.',
          pronunciation: 'proh-moh-TOH-rah deh sah-LOOD',
        },
      ],
      clinicalNotes:
        'Antes de iniciar biológicos en un niño con "asma severa", es mandatorio descartar factores modificables — la mala técnica inhalatoria y la no adherencia explican hasta el 80% de los casos de asma "no controlada". Pedir al paciente que demuestre su técnica con el inhalador en CADA visita. En la población puertorriqueña, la prevalencia de asma es la más alta de cualquier grupo étnico en EE.UU. (16.1%), mientras que en mexicano-americanos es paradójicamente baja (5.4%) — esta disparidad intrahispana sugiere que los factores genéticos (ancestría africana, variantes ADRB2) interactúan con exposiciones ambientales. El black box warning de montelukast requiere documentar una conversación informada con los padres sobre riesgos neuropsiquiátricos antes de prescribirlo, y preguntar sobre cambios conductuales en cada seguimiento. La estrategia MART con ICS-formoterol es una revolución en el manejo del asma ≥12 años al eliminar el uso de SABA solo, reduciendo exacerbaciones — sin embargo, aún no está aprobada para menores de 12 años. | Before starting biologics in a child with "severe asthma," it is mandatory to rule out modifiable factors — poor inhaler technique and non-adherence explain up to 80% of "uncontrolled" asthma cases. Ask the patient to demonstrate inhaler technique at EVERY visit. In the Puerto Rican population, asthma prevalence is the highest of any ethnic group in the U.S. (16.1%), while in Mexican Americans it is paradoxically low (5.4%) — this intra-Hispanic disparity suggests genetic factors (African ancestry, ADRB2 variants) interact with environmental exposures. The montelukast black box warning requires documenting an informed conversation with parents about neuropsychiatric risks before prescribing, and asking about behavioral changes at every follow-up. MART strategy with ICS-formoterol is a revolution in asthma management for ages ≥12 by eliminating standalone SABA use and reducing exacerbations — however, it is not yet approved for children under 12.',
    },

    5: {
      level: 5,
      summary:
        'La frontera del asma pediátrico incluye la medicina de precisión basada en transcriptómica y proteómica, las terapias dirigidas a la remodelación de vías aéreas, la prevención primaria del asma mediante modulación del microbioma, la controversia de la termoplastia bronquial en adolescentes, y los determinantes sociales del asma como factores estructurales de inequidad. | The frontier of pediatric asthma includes transcriptomics and proteomics-based precision medicine, therapies targeting airway remodeling, primary asthma prevention through microbiome modulation, bronchial thermoplasty controversy in adolescents, and social determinants of asthma as structural inequity factors.',
      explanation: `## Explicación Profesional (Nivel MD) / MD/Professional-Level Explanation

### Medicina de Precisión en Asma Pediátrica

**Más allá de "T2-alto vs T2-bajo":**

La clasificación binaria T2/no-T2 es insuficiente. La transcriptómica y la proteómica están revelando subgrupos más precisos:

| Cluster (SARP/CAMP/U-BIOPRED) | Biomarcadores | Terapia Óptima |
|-------------------------------|--------------|----------------|
| T2-alérgico-eosinofílico | IgE↑, Eos↑, FeNO↑, periostin↑ | ICS + anti-IgE/IL-5/IL-4Rα |
| T2-eosinofílico-no alérgico | Eos↑, FeNO↑, IgE normal | Anti-IL-5 o dupilumab |
| T2-neutrofílico-mixto | Eos + Neut↑, IL-17↑ | ICS + macrólidos? |
| T2-bajo-neutrofílico | Neut↑, Eos normal, IL-8↑ | Macrólidos, anti-TSLP? |
| T2-bajo-paucigranulocítico | Celularidad normal | Control de comorbilidades, mecánico |
| T2-alto-eosinofílico-refractario | Eos↑↑ a pesar de ICS altos | Biológicos combinados? |

**Firmas transcriptómicas emergentes:**
- Gene Expression Classifier (GEC): distingue asma eosinofílica con 85% precisión sin broncoscopia
- Perfiles de esputo: IL-13 inducido (POSTN, CLCA1, SERPINB2) → predicen respuesta a dupilumab
- Single-cell RNA-seq de esputo: revela subpoblaciones de macrófagos M2 que impulsan la remodelación

### Remodelación de Vías Aéreas: Nuevos Blancos Terapéuticos

**La remodelación como proceso independiente de la inflamación:**
- Evidencia: la remodelación comienza ANTES del diagnóstico clínico (biopsias en preescolares)
- Los ICS reducen la inflamación pero tienen efecto limitado sobre la remodelación establecida
- El tratamiento temprano (ICS desde los primeros síntomas) puede prevenir parcialmente la remodelación

**Blancos terapéuticos en desarrollo:**
| Blanco | Mecanismo | Droga/Estrategia | Fase |
|--------|-----------|-------------------|------|
| TGF-β | Promueve fibrosis subepitelial | Anti-TGF-β (fresolimumab) | Preclínico en asma |
| MMP-9 | Degrada matriz extracelular → remodelación | Inhibidores de MMP | Investigación |
| Wnt/β-catenina | Señalización de remodelación del músculo liso | Antagonistas Wnt | Preclínico |
| YAP/TAZ | Mecanotransducción → proliferación músculo liso | Inhibidores | Preclínico |
| IL-33/ST2 | Alarmina que promueve fibrosis y remodelación | Itepekimab (anti-IL-33) | Fase 3 |

### Prevención Primaria del Asma: La Hipótesis del Microbioma

**Evidencia del microbioma en el desarrollo del asma:**

| Hallazgo | Implicación |
|----------|-----------|
| Nacimiento por cesárea ↑ riesgo de asma 20% | Flora bacteriana alterada al nacer |
| Lactancia materna >4m protege | Oligosacáridos + bacterias maternas |
| Antibióticos en primer año ↑ riesgo | Disbiosis → respuesta inmune alterada |
| Exposición a granjas/animales protege | Diversidad microbiana = tolerancia |
| Diversidad bacteriana intestinal baja a 3 meses → asma a 5 años | "Ventana de vulnerabilidad" microbiana |

**Géneros bacterianos protectores ("FLVR"):**
- **F**aecalibacterium
- **L**achnospira
- **V**eillonella
- **R**othia
- Ausencia en los primeros 3 meses predice desarrollo de asma con 80% sensibilidad

**Estrategias de modulación del microbioma:**
| Estrategia | Evidencia | Estado |
|-----------|-----------|--------|
| Lactobacillus prenatal + postnatal | Reduce sensibilización pero no asma clínica | RCTs mixtos |
| Exposición a granjas/animales | Estudios observacionales consistentes | No traducido a intervención |
| Trasplante de microbiota fecal | Prometedor en modelos murinos | Preclínico |
| Metabolitos bacterianos (butirato) | Modulan Tregs → tolerancia | Investigación |
| Prevención de cesárea innecesaria | Evidencia epidemiológica fuerte | Implementación |

### El Exposoma del Asma Pediátrica

**Más allá de los genes y alérgenos — factores estructurales:**

| Factor del Exposoma | Mecanismo | Magnitud del Efecto |
|--------------------|-----------|---------------------|
| Contaminación por PM2.5 | Estrés oxidativo + inflamación | ↑ riesgo 15-30% por cada 10 μg/m³ |
| Vivienda deteriorada | Cucarachas, moho, humedad | OR 2.5-4.0 para asma |
| Proximidad a autopistas | NO₂, partículas ultrafinas | ↑ riesgo 30-50% <500m |
| Estrés psicosocial | Cortisol → sesgo Th2 | ↑ riesgo 2x |
| Inseguridad alimentaria | Dieta inflamatoria + obesidad | ↑ riesgo 1.5-2x |
| Racismo estructural | Segregación → exposición combinada | Factor multiplicativo |

**Concepto de "weathering" en asma pediátrica:**
- La exposición crónica a múltiples estresores ambientales y sociales produce "desgaste alostático" que afecta la regulación inmune
- Explica por qué los niños hispanos/latinos en comunidades marginadas tienen peores outcomes que los de comunidades afluentes con el mismo tratamiento
- Implicación: el tratamiento farmacológico sin abordar los determinantes sociales es insuficiente

### Controversias y Fronteras

**1. ¿ICS desde la primera sibilancia?**
- INFANT trial: ICS temprano en lactantes con sibilancias recurrentes → menos días con síntomas
- PEAK trial: ICS temprano NO previene desarrollo de asma persistente
- Controversia: ¿tratar para síntomas actuales o para prevenir enfermedad futura?

**2. Biológicos combinados:**
- Pacientes que no responden a un biológico solo
- Dupilumab + mepolizumab: datos emergentes
- Costo prohibitivo; sin guías de combinación
- ¿Es el futuro o señal de que necesitamos nuevos enfoques?

**3. Termoplastia bronquial en adolescentes:**
- Aprobada en adultos ≥18 años con asma severa
- Destruye músculo liso bronquial con energía térmica
- No hay estudios en menores de 18 años
- Preocupación: efecto sobre crecimiento pulmonar

**4. Asma y cambio climático:**
- Mayor concentración de CO₂ → mayor producción de polen
- Temporadas de polen más largas
- Aumento de PM2.5 por incendios forestales
- Eventos climáticos extremos → exposición a moho
- Los niños hispanos/latinos desproporcionadamente afectados

---
## MD/Professional-Level Explanation

[The above covers precision medicine with transcriptomic clusters, airway remodeling therapeutic targets, microbiome-based primary prevention strategies, the asthma exposome concept including structural determinants, and current controversies including early ICS treatment, combination biologics, and climate change impacts.]`,
      keyTerms: [
        {
          term: 'exposoma del asma',
          definition:
            'Totalidad de exposiciones ambientales (contaminación, alérgenos, estrés psicosocial, dieta, vivienda, racismo estructural) que interactúan con la predisposición genética para determinar el riesgo y la severidad del asma; marco que va más allá del paradigma gen-alérgeno. | Totality of environmental exposures (pollution, allergens, psychosocial stress, diet, housing, structural racism) interacting with genetic predisposition to determine asthma risk and severity; framework going beyond the gene-allergen paradigm.',
          pronunciation: 'eks-poh-SOH-mah',
        },
        {
          term: 'FLVR (Faecalibacterium, Lachnospira, Veillonella, Rothia)',
          definition:
            'Cuatro géneros bacterianos intestinales cuya ausencia en los primeros 3 meses de vida predice el desarrollo de asma con alta sensibilidad; sugiere una ventana de vulnerabilidad microbiana para intervención preventiva. | Four intestinal bacterial genera whose absence in the first 3 months of life predicts asthma development with high sensitivity; suggests a microbial vulnerability window for preventive intervention.',
          pronunciation: 'efe-ele-beh-erre',
        },
        {
          term: 'itepekimab',
          definition:
            'Anticuerpo monoclonal anti-IL-33 en desarrollo para asma; bloquea la alarmina epitelial IL-33 que promueve tanto la inflamación tipo 2 como la remodelación de vías aéreas; particularmente prometedor para asma con componente de remodelación. | Anti-IL-33 monoclonal antibody in development for asthma; blocks epithelial alarmin IL-33 that promotes both type 2 inflammation and airway remodeling; particularly promising for asthma with a remodeling component.',
          pronunciation: 'ee-teh-PEH-kee-mab',
        },
        {
          term: 'desgaste alostático (allostatic load)',
          definition:
            'Acumulación del desgaste fisiológico causado por exposición crónica a múltiples estresores (pobreza, racismo, contaminación, vivienda precaria); en asma pediátrica, explica las peores outcomes en comunidades marginadas más allá de la genética y el acceso a medicamentos. | Accumulation of physiological wear caused by chronic exposure to multiple stressors (poverty, racism, pollution, poor housing); in pediatric asthma, explains worse outcomes in marginalized communities beyond genetics and medication access.',
          pronunciation: 'des-GAHS-teh ah-lohs-TAH-tee-koh',
        },
        {
          term: 'Gene Expression Classifier (GEC)',
          definition:
            'Panel transcriptómico que analiza patrones de expresión génica en muestras de sangre o esputo para clasificar el endotipo inflamatorio del asma sin necesidad de broncoscopia; logra ~85% de precisión para identificar asma eosinofílica. | Transcriptomic panel analyzing gene expression patterns in blood or sputum samples to classify asthma inflammatory endotype without bronchoscopy; achieves ~85% accuracy for identifying eosinophilic asthma.',
          pronunciation: 'jee-ee-SEE',
        },
      ],
      clinicalNotes:
        'Integración clínica avanzada: El concepto del "exposoma" del asma es fundamental para entender por qué el tratamiento farmacológico solo es insuficiente en muchos niños hispanos/latinos — un niño que vive en vivienda deteriorada con cucarachas, cerca de una autopista, con estrés psicosocial, no mejorará solo con ICS y biológicos. El modelo de promotoras de salud con visitas domiciliarias ha demostrado reducir exacerbaciones 30-50% abordando estos factores. La ausencia de bacterias FLVR en los primeros 3 meses de vida abre una ventana potencial para intervención preventiva, pero aún no hay un probiótico validado para prevenir asma. Los ensayos de biológicos tienen representación hispana/latina de <10%, lo que limita la generalización de los resultados. La variabilidad genética intrahispana (puertorriqueño vs. mexicano-americano) tiene implicaciones farmacogenómicas reales — las variantes ADRB2 que afectan la respuesta a albuterol son más prevalentes en puertorriqueños, lo que puede explicar parcialmente la mayor morbimortalidad en esta subpoblación. El cambio climático es una amenaza emergente para el asma pediátrica que afectará desproporcionadamente a comunidades de bajos recursos. | Advanced clinical integration: The asthma "exposome" concept is fundamental for understanding why pharmacological treatment alone is insufficient in many Hispanic/Latino children — a child living in deteriorated housing with cockroaches, near a highway, with psychosocial stress, will not improve with ICS and biologics alone. The promotoras model with home visits has been shown to reduce exacerbations 30-50% by addressing these factors. The absence of FLVR bacteria in the first 3 months of life opens a potential preventive intervention window, but no validated probiotic for asthma prevention exists yet. Biologic trials have <10% Hispanic/Latino representation, limiting generalizability. Intra-Hispanic genetic variability (Puerto Rican vs. Mexican American) has real pharmacogenomic implications — ADRB2 variants affecting albuterol response are more prevalent in Puerto Ricans, which may partially explain the higher morbidity/mortality in this subpopulation. Climate change is an emerging threat to pediatric asthma that will disproportionately affect low-resource communities.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ref-gina-2025',
      type: 'website',
      title: 'Global Initiative for Asthma (GINA) 2025 Report',
      authors: ['GINA Science Committee'],
      source: 'GINA',
      url: 'https://ginasthma.org',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-naepp-epr3',
      type: 'article',
      title: 'Expert Panel Report 3: Guidelines for the Diagnosis and Management of Asthma',
      authors: ['National Asthma Education and Prevention Program'],
      source: 'NHLBI/NIH',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-nelson-asthma',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics - Asthma in Children',
      authors: ['Kliegman, R.M.', 'St. Geme, J.W.'],
      source: 'Elsevier, 22nd Edition',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-disparities-asthma-hispanic',
      type: 'article',
      title: 'Asthma Disparities in the Hispanic Population',
      authors: ['Forno, E.', 'Celedón, J.C.'],
      source: 'Journal of Allergy and Clinical Immunology',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-microbiome-asthma',
      type: 'article',
      title: 'Early Infancy Microbial and Metabolic Alterations Affect Risk of Childhood Asthma',
      authors: ['Arrieta, M.C.', 'Stiemsma, L.T.', 'Dimitriu, P.A.'],
      source: 'Science Translational Medicine',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    {
      targetId: 'condition-fiebre-infantil-fever',
      targetType: 'condition',
      relationship: 'sibling',
      label: 'Fiebre en Niños / Childhood Fever',
    },
    {
      targetId: 'condition-vacunacion-immunization',
      targetType: 'condition',
      relationship: 'related',
      label: 'Vacunación Pediátrica / Pediatric Immunization',
    },
    {
      targetId: 'pediatrics-bronchiolitis',
      targetType: 'condition',
      relationship: 'related',
      label: 'Bronquiolitis / Bronchiolitis',
    },
  ],

  tags: {
    systems: ['respiratory', 'immune'],
    topics: [
      'pediatrics',
      'asthma',
      'pulmonology',
      'allergy',
      'pharmacology',
      'health equity',
    ],
    keywords: [
      'asma',
      'asthma',
      'sibilancias',
      'wheezing',
      'inhalador',
      'inhaler',
      'espaciador',
      'spacer',
      'ICS',
      'albuterol',
      'biológicos',
      'biologics',
      'exacerbación',
      'plan de acción',
      'action plan',
      'disparidades',
      'microbioma',
      'FeNO',
      'espirometría',
    ],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'pulmonology', 'family medicine', 'emergency medicine'],
    },
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
