/**
 * Asma Pediatrico / Pediatric Asthma
 *
 * Contenido educativo bilingue (espanol primero) sobre el manejo del asma
 * en ninos incluyendo fisiopatologia, clasificacion por severidad, manejo
 * escalonado, educacion para padres, y protocolos de exacerbacion.
 *
 * Bilingual educational content (Spanish-first) on pediatric asthma
 * management including pathophysiology, severity classification, stepwise
 * management, parent education, and exacerbation protocols.
 */

import { EducationalContent } from '../types';

export const ASMA_PEDIATRICO_PEDIATRIC_ASTHMA: EducationalContent = {
  id: 'pediatrics-asma-pediatrico-pediatric-asthma',
  type: 'condition',
  name: 'Pediatric Asthma | Asma Pediatrico',
  nameEs: 'Asma Pediatrico',
  alternateNames: [
    'Asma infantil',
    'Childhood asthma',
    'Asma bronquial pediatrica',
    'Pediatric bronchial asthma',
    'Sibilancias recurrentes',
    'Recurrent wheezing',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'El asma es una enfermedad en la que los tubos que llevan aire a los pulmones se inflaman y se estrechan, causando dificultad para respirar, tos y un silbido en el pecho. Con tratamiento adecuado, los ninos con asma pueden hacer una vida completamente normal. | Asthma is a condition where the tubes that carry air to the lungs become inflamed and narrow, causing difficulty breathing, coughing, and a whistling sound in the chest. With proper treatment, children with asthma can live a completely normal life.',
      explanation: `## Explicacion Simple para Padres

El **asma** es cuando los tubos que llevan aire a los pulmones de su hijo se inflaman (se hinchan por dentro) y se estrechan (se hacen mas angostos). Esto hace dificil que el aire entre y salga.

### Que se siente tener asma?

Imaginese que intenta respirar a traves de un popote/pajita (straw). Asi se siente un nino durante una crisis de asma.

### Sintomas del asma en ninos

- **Tos** que no se quita, especialmente de noche o temprano en la manana
- **Silbido en el pecho** ("sibilancia" o "wheeze"): un sonido como un silbido al respirar
- **Falta de aire** al jugar, correr o subir escaleras
- **Pecho apretado**: el nino dice que "le aprieta el pecho" o se toca el pecho
- **Se cansa rapido** al hacer ejercicio comparado con otros ninos

### Que causa las crisis de asma? (Disparadores / Triggers)

- **Gripe y resfriados** (la causa #1 en ninos pequenos)
- **Humo de cigarro** (incluso en la ropa de alguien que fumo)
- **Polvo, moho, y cucarachas** en la casa
- **Pelo de animales** (gatos y perros)
- **Aire frio**
- **Ejercicio** (correr, jugar afuera)
- **Contaminacion del aire**
- **Emociones fuertes** (llorar, reir mucho)

### Los dos tipos de medicinas para el asma

**1. Medicina de RESCATE (alivio rapido) - "la azul"**
- Albuterol (Ventolin, ProAir)
- Funciona EN MINUTOS cuando el nino tiene dificultad para respirar
- Es como un "extintor de incendios": la usa cuando hay emergencia
- Si la necesita mas de 2 veces por semana, hable con el doctor

**2. Medicina de CONTROL (preventiva) - "la de todos los dias"**
- Corticosteroide inhalado (Flovent, Qvar, Pulmicort)
- Se usa TODOS LOS DIAS aunque el nino se sienta bien
- Previene las crisis, reduce la inflamacion
- Es como "cepillarse los dientes": se hace todos los dias para prevenir problemas
- Tarda 2-4 semanas en hacer efecto completo
- ENJUAGAR la boca despues de usarla para evitar hongos

### Cuando ir a urgencias / emergencias

Lleve a su hijo al hospital SI:
- Las costillas se le marcan al respirar (tiraje/retraccion)
- No puede hablar frases completas por falta de aire
- Los labios o las unas se ponen azulados o morados
- El albuterol no funciona o el alivio dura menos de 4 horas
- El nino se ve asustado o muy agitado
- No puede dormir por la tos o dificultad para respirar

### Plan de Accion para el Asma

Pida a su doctor un **Plan de Accion del Asma** por escrito. Este plan usa colores de semaforo:
- **VERDE (todo bien):** Sin sintomas, puede hacer actividades normales
- **AMARILLO (precaucion):** Sintomas presentes, siga las instrucciones del plan
- **ROJO (emergencia):** Sintomas graves, use el rescate y vaya al hospital

### Consejos importantes

- Use un **espaciador** (tubo de plastico) con el inhalador: ayuda a que la medicina llegue mejor a los pulmones
- Las medicinas inhaladas son SEGURAS para uso a largo plazo en ninos
- Su hijo PUEDE hacer ejercicio: use albuterol 15 minutos antes si es necesario
- Mantenga la casa limpia de polvo, no permita fumar dentro, y use fundas anti-alergicas en las almohadas

---
## Simple Explanation for Parents

[The Spanish section above covers what asthma is, symptoms, common triggers, the two types of medications (rescue vs. controller), emergency warning signs, the traffic-light Asthma Action Plan, and practical tips for parents.]`,
      keyTerms: [
        {
          term: 'asma | asthma',
          definition:
            'Enfermedad cronica en la que los tubos del aire (bronquios) se inflaman y se estrechan, causando tos, silbido y dificultad para respirar. Se controla con medicinas pero no se cura. | Chronic disease where the air tubes (bronchi) become inflamed and narrow, causing cough, wheezing, and difficulty breathing. It is controlled with medication but not cured.',
          pronunciation: 'AHS-mah',
        },
        {
          term: 'sibilancia | wheezing',
          definition:
            'Sonido como silbido que se oye cuando el nino respira, causado por el aire pasando por los tubos estrechos. Es un signo clasico del asma. | Whistling sound heard when the child breathes, caused by air passing through narrow tubes. It is a classic sign of asthma.',
          pronunciation: 'see-bee-LAHN-see-ah',
        },
        {
          term: 'inhalador de rescate | rescue inhaler',
          definition:
            'Medicina (albuterol) que abre los tubos del aire rapidamente durante una crisis de asma. Se usa solo cuando hay sintomas, no todos los dias. | Medicine (albuterol) that quickly opens the air tubes during an asthma attack. Used only when there are symptoms, not every day.',
          pronunciation: 'een-ah-lah-DOR deh res-KAH-teh',
        },
        {
          term: 'espaciador | spacer',
          definition:
            'Tubo de plastico que se conecta al inhalador para ayudar a que la medicina llegue mejor a los pulmones. Es MUY importante usarlo, especialmente en ninos pequenos. | Plastic tube that connects to the inhaler to help the medicine reach the lungs better. It is VERY important to use it, especially in young children.',
          pronunciation: 'es-pah-see-ah-DOR',
        },
        {
          term: 'disparador / trigger',
          definition:
            'Cosa que causa o empeora una crisis de asma, como gripe, humo, polvo, o aire frio. Cada nino tiene diferentes disparadores. | Thing that causes or worsens an asthma attack, such as cold, smoke, dust, or cold air. Each child has different triggers.',
          pronunciation: 'dees-pah-rah-DOR',
        },
      ],
      analogies: [
        'Los bronquios de un nino con asma son como una manguera de jardin que alguien aprieta: el aire pasa pero con dificultad y hace un sonido de silbido. | The bronchi of a child with asthma are like a garden hose that someone squeezes: air passes but with difficulty and makes a whistling sound.',
        'La medicina de control es como un chaleco salvavidas: no espera a estar ahogandose para ponerselo, se lo pone ANTES de entrar al agua. | Controller medicine is like a life jacket: you do not wait until you are drowning to put it on, you put it on BEFORE entering the water.',
        'El Plan de Accion del Asma es como un semaforo: verde = todo bien, amarillo = precaucion, rojo = emergencia. | The Asthma Action Plan is like a traffic light: green = all good, yellow = caution, red = emergency.',
      ],
      examples: [
        'Un nino de 5 anos tose mucho de noche y se cansa rapido al jugar futbol. Su doctor le diagnostico asma y le dio un inhalador de rescate y uno de control. Ahora puede jugar sin problemas. | A 5-year-old coughs a lot at night and gets tired quickly playing soccer. His doctor diagnosed asthma and gave him a rescue and controller inhaler. Now he can play without problems.',
      ],
      patientCounselingPoints: [
        'Use el espaciador SIEMPRE con el inhalador. Sin espaciador, la mayoria de la medicina se queda en la boca y no llega a los pulmones. | ALWAYS use the spacer with the inhaler. Without a spacer, most medicine stays in the mouth and does not reach the lungs.',
        'La medicina de control se usa TODOS LOS DIAS aunque su hijo se sienta bien. No la deje cuando mejore. | Controller medicine is used EVERY DAY even if your child feels well. Do not stop it when they improve.',
        'Enjuague la boca de su hijo despues del corticosteroide inhalado para prevenir hongos en la boca (candidiasis oral). | Rinse your child\'s mouth after inhaled corticosteroid to prevent mouth fungus (oral thrush).',
        'No fume dentro de la casa ni en el carro. El humo de tercera mano (en la ropa) tambien afecta. | Do not smoke inside the house or car. Third-hand smoke (on clothes) also affects.',
        'Su hijo PUEDE hacer ejercicio. Use albuterol 15 minutos antes del ejercicio si el doctor lo indica. | Your child CAN exercise. Use albuterol 15 minutes before exercise if the doctor indicates it.',
      ],
    },

    2: {
      level: 2,
      summary:
        'El asma pediatrica se clasifica por severidad (intermitente, persistente leve/moderada/severa) y por nivel de control. El manejo escalonado (stepwise approach) del NAEPP/GINA guia la seleccion de terapia. El tratamiento incluye corticosteroides inhalados como piedra angular, broncodilatadores de accion corta para rescate, y terapias complementarias (LABA, LTRA, biologicos) para asma no controlada. | Pediatric asthma is classified by severity (intermittent, mild/moderate/severe persistent) and by control level. The NAEPP/GINA stepwise approach guides therapy selection. Treatment includes inhaled corticosteroids as the cornerstone, short-acting bronchodilators for rescue, and add-on therapies (LABA, LTRA, biologics) for uncontrolled asthma.',
      explanation: `## Explicacion Intermedia | Intermediate Explanation

### Clasificacion por Severidad (antes de iniciar tratamiento) | Severity Classification

| Componente | Intermitente | Persistente Leve | Persistente Moderada | Persistente Severa |
|-----------|-------------|-----------------|--------------------|--------------------|
| Sintomas diurnos | <= 2 dias/semana | >2 dias/semana | Diarios | Todo el dia |
| Despertares nocturnos (0-4a) | 0 | 1-2x/mes | 3-4x/mes | >1x/semana |
| Despertares nocturnos (5-11a) | <= 2x/mes | 3-4x/mes | >1x/semana | Frecuentes (>=7x/semana) |
| Uso de SABA rescate | <= 2 dias/semana | >2 dias/semana | Diario | Varias veces/dia |
| Limitacion de actividad | Ninguna | Leve | Alguna | Extrema |
| FEV1 (% predicho) | >80% | >80% | 60-80% | <60% |
| Exacerbaciones/ano | 0-1 | >=2 | >=2 | >=2 |

### Evaluacion del Control (una vez en tratamiento) | Control Assessment

| Componente | Bien Controlada | No Bien Controlada | Muy Mal Controlada |
|-----------|-----------------|-------------------|-------------------|
| Sintomas | <= 2 dias/semana | >2 dias/semana | Todo el dia |
| Despertares nocturnos | <= 1x/mes (0-4a), <= 2x/mes (>=5a) | >1x/mes (0-4a), 1-3x/sem (>=5a) | >1x/semana (0-4a), >=4x/sem (>=5a) |
| Uso de SABA | <= 2 dias/semana | >2 dias/semana | Varias veces/dia |
| Limitacion de actividad | Ninguna | Alguna | Extrema |
| FEV1 | >80% | 60-80% | <60% |
| Exacerbaciones | 0-1/ano | >=2/ano | >=2/ano |

### Manejo Escalonado (Stepwise Approach) | Stepwise Management

**Ninos 0-4 anos:**
| Paso | Terapia Preferida | Alternativa |
|------|-------------------|-------------|
| 1 | SABA PRN (rescate solo) | - |
| 2 | ICS dosis baja | Montelukast |
| 3 | ICS dosis media | ICS dosis baja + montelukast |
| 4 | ICS dosis media + montelukast o referencia a especialista | - |
| 5 | ICS dosis alta + referencia a especialista | - |
| 6 | ICS dosis alta + corticosteroide oral + referencia | - |

**Ninos 5-11 anos:**
| Paso | Terapia Preferida | Alternativa |
|------|-------------------|-------------|
| 1 | SABA PRN | - |
| 2 | ICS dosis baja | Montelukast o cromoglicato |
| 3 | ICS dosis media O ICS dosis baja + LABA | ICS dosis baja + montelukast |
| 4 | ICS dosis media + LABA | ICS dosis media + montelukast |
| 5 | ICS dosis alta + LABA | ICS dosis alta + montelukast |
| 6 | ICS dosis alta + LABA + corticosteroide oral | Referencia, considerar biologicos |

**Ninos >=12 anos (adolescentes):**
| Paso | Terapia Preferida |
|------|-------------------|
| 1 | SABA PRN o ICS-formoterol PRN (GINA 2024) |
| 2 | ICS dosis baja diario o ICS-formoterol PRN |
| 3 | ICS dosis baja + LABA (o ICS dosis media) |
| 4 | ICS dosis media + LABA |
| 5 | ICS dosis alta + LABA; referencia para biologicos, tiotropio |
| 6 | Corticosteroide oral + lo anterior |

### Medicamentos Clave | Key Medications

**Corticosteroides inhalados (ICS) - Dosis equivalentes en ninos:**
| ICS | Dosis Baja | Dosis Media | Dosis Alta |
|-----|-----------|-------------|------------|
| Fluticasona propionato (Flovent) | 88 mcg/dia | 176 mcg/dia | >=352 mcg/dia |
| Budesonida nebulizada (Pulmicort) | 250 mcg/dia | 500 mcg/dia | 1000 mcg/dia |
| Beclometasona (Qvar) | 80 mcg/dia | 160 mcg/dia | >=320 mcg/dia |
| Mometasona (Asmanex) | 110 mcg/dia | 220 mcg/dia | >=440 mcg/dia |

**Otros medicamentos:**
| Medicamento | Clase | Uso |
|-------------|-------|-----|
| Albuterol (Ventolin, ProAir) | SABA (beta-2 agonista de accion corta) | Rescate |
| Salmeterol / Formoterol | LABA (beta-2 agonista de accion larga) | Siempre con ICS, nunca solo |
| Montelukast (Singulair) | LTRA (antagonista de receptores de leucotrienos) | Alternativa a ICS o add-on |
| Ipratropio (Atrovent) | Anticolinergico | Exacerbacion severa en urgencias |
| Prednisona/Prednisolona | Corticosteroide oral | Exacerbaciones (3-5 dias) |

### Manejo de Exacerbacion en Casa | Home Exacerbation Management

**Zona AMARILLA del Plan de Accion:**
1. Dar albuterol 2-4 puffs via MDI + espaciador (o nebulizacion 2.5 mg)
2. Repetir cada 20 minutos hasta 3 veces en 1 hora si es necesario
3. Si mejora: continuar albuterol cada 4-6 horas por 24-48 horas
4. Si NO mejora despues de 3 tratamientos -> Zona ROJA

**Zona ROJA (ir a urgencias):**
- Albuterol no funciona o dura <4 horas
- Dificultad para hablar o caminar por falta de aire
- Tiraje intercostal/subcostal (se marcan las costillas)
- Cianosis (labios/unas morados/azulados)

### Asma y Ejercicio | Exercise-Induced Bronchoconstriction

- Comun en ninos con asma (60-80% tienen broncoespasmo por ejercicio)
- Prevencion: albuterol 2 puffs 15 min antes del ejercicio
- Calentamiento gradual de 10-15 min reduce el riesgo
- Deportes mas asociados: carreras de larga distancia, hockey sobre hielo (aire frio y seco)
- Deportes mejor tolerados: natacion (aire humedo y calido), deportes con descansos

---
## Intermediate Explanation

[The above covers severity classification, control assessment, stepwise management for all age groups (0-4, 5-11, >=12), key medications with dosing, home exacerbation management protocol, and exercise-induced bronchoconstriction.]`,
      keyTerms: [
        {
          term: 'corticosteroide inhalado (ICS) | inhaled corticosteroid',
          definition:
            'Medicina antiinflamatoria que se inhala diariamente para reducir la inflamacion cronica de las vias aereas. Es la piedra angular del tratamiento del asma persistente. Ejemplos: fluticasona, budesonida, beclometasona. | Anti-inflammatory medicine inhaled daily to reduce chronic airway inflammation. Cornerstone of persistent asthma treatment. Examples: fluticasone, budesonide, beclomethasone.',
          pronunciation: 'kor-tee-koh-es-teh-ROI-deh een-ah-LAH-doh',
        },
        {
          term: 'SABA (beta-2 agonista de accion corta) | short-acting beta-2 agonist',
          definition:
            'Broncodilatador de rescate (albuterol) que relaja el musculo liso bronquial en minutos. Se usa para alivio rapido de sintomas. Si se necesita >2 veces/semana, indica necesidad de terapia de control. | Rescue bronchodilator (albuterol) that relaxes bronchial smooth muscle in minutes. Used for rapid symptom relief. If needed >2 times/week, indicates need for controller therapy.',
          pronunciation: 'SAH-bah',
        },
        {
          term: 'manejo escalonado | stepwise management',
          definition:
            'Enfoque sistematico del NAEPP/GINA donde la terapia se intensifica (step-up) o reduce (step-down) segun el nivel de control del asma. El objetivo es encontrar la dosis minima efectiva. | Systematic NAEPP/GINA approach where therapy is intensified (step-up) or reduced (step-down) based on asthma control level. The goal is to find the minimum effective dose.',
          pronunciation: 'mah-NEH-hoh es-kah-loh-NAH-doh',
        },
        {
          term: 'plan de accion del asma | asthma action plan',
          definition:
            'Documento escrito personalizado que usa el sistema de semaforo (verde/amarillo/rojo) para guiar al paciente y la familia en el manejo diario y durante exacerbaciones. Reduce hospitalizaciones significativamente. | Personalized written document using the traffic light system (green/yellow/red) to guide the patient and family in daily management and during exacerbations. Significantly reduces hospitalizations.',
          pronunciation: 'plahn deh ak-see-OHN',
        },
      ],
      analogies: [
        'El manejo escalonado del asma es como subir y bajar una escalera: si los sintomas empeoran, sube un escalon (mas medicina); si mejora, puede bajar un escalon (menos medicina). El objetivo es estar en el escalon mas bajo posible donde el nino este bien. | Stepwise asthma management is like going up and down stairs: if symptoms worsen, go up a step (more medicine); if improving, go down a step (less medicine). The goal is to be on the lowest possible step where the child is well.',
        'Los ICS son como el riego diario de un jardin: no puedes regar solo cuando las plantas se marchitan; necesitas regar constantemente para mantener el jardin sano. | ICS are like daily garden watering: you cannot water only when plants wilt; you need constant watering to keep the garden healthy.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La fisiopatologia del asma pediatrica involucra inflamacion cronica de las vias aereas (predominantemente Th2/eosinofilica en la mayoria), remodelacion de las vias aereas, hiperreactividad bronquial, y obstruccion reversible del flujo aereo. Los fenotipos de sibilancias en ninos pequenos (transitoria, persistente, de inicio tardio) tienen implicaciones pronosticas. Las pruebas de funcion pulmonar (espirometria), la fraccion de oxido nitrico exhalado (FeNO), y los indices predictivos de asma (API/mAPI) guian el diagnostico y manejo. | Pediatric asthma pathophysiology involves chronic airway inflammation (predominantly Th2/eosinophilic in most), airway remodeling, bronchial hyperreactivity, and reversible airflow obstruction. Wheezing phenotypes in young children (transient, persistent, late-onset) have prognostic implications. Pulmonary function tests (spirometry), fractional exhaled nitric oxide (FeNO), and asthma predictive indices (API/mAPI) guide diagnosis and management.',
      explanation: `## Explicacion Nivel Universitario | College-Level Explanation

### Fisiopatologia del Asma | Asthma Pathophysiology

**La triada fisiopatologica:**
1. **Inflamacion cronica de las vias aereas** (predominantemente Th2/eosinofilica)
2. **Hiperreactividad bronquial** (respuesta exagerada a estimulos)
3. **Obstruccion reversible del flujo aereo** (broncoespasmo + edema + moco)

**Cascada inflamatoria Th2:**
\`\`\`
Alergeno/irritante inhalado
        |
Captacion por celulas dendriticas epiteliales
        |
Presentacion a celulas T CD4+ naive -> diferenciacion Th2
        |
Produccion de IL-4, IL-5, IL-13
        |
IL-4/IL-13: cambio de isotipo a IgE en celulas B
IL-5: reclutamiento y supervivencia de eosinofilos
IL-13: hipersecrecion de moco, hiperplasia de celulas caliciformes
        |
IgE se une a mastocitos via FcepsilonRI
        |
Re-exposicion al alergeno -> degranulacion de mastocitos
        |
Histamina, leucotrienos (LTC4, LTD4), prostaglandinas
        |
Broncoespasmo (agudo) + edema de mucosa + hipersecrecion de moco
\`\`\`

**Remodelacion de las vias aereas (cronica):**
| Cambio Estructural | Consecuencia |
|-------------------|-------------|
| Engrosamiento de la membrana basal (deposito de colageno subepitelial) | Obstruccion fija irreversible |
| Hipertrofia del musculo liso bronquial | Mayor contractilidad, broncoespasmo exagerado |
| Hiperplasia de celulas caliciformes | Hipersecrecion cronica de moco |
| Angiogenesis submucosa | Edema, contribuye a obstruccion |
| Fibrosis subepitelial | Rigidez de la via aerea |

### Fenotipos de Sibilancias en la Infancia Temprana | Early Childhood Wheezing Phenotypes

| Fenotipo | Inicio | Evolucion | Factores Asociados |
|---------|--------|-----------|-------------------|
| Sibilancias transitorias tempranas | <3 anos | Resuelven para los 6 anos | Funcion pulmonar baja al nacer, tabaquismo materno, prematurez |
| Sibilancias persistentes | <3 anos | Continuan despues de los 6 anos | Atopia, eosinofilia, sensibilizacion alergica temprana |
| Sibilancias de inicio tardio | >3 anos | Persisten | Atopia, hiperreactividad bronquial, sexo masculino |

**Indice Predictivo de Asma (API / modified API):**

Util en ninos <3 anos con sibilancias recurrentes para predecir asma persistente:

**Criterios mayores (1 de estos):**
- Padre/madre con asma diagnosticado por medico
- Dermatitis atopica diagnosticada por medico
- Sensibilizacion a aeroalergenos

**Criterios menores (2 de estos):**
- Sensibilizacion a alimentos (leche, huevo, cacahuate)
- Sibilancias NO relacionadas con resfriados
- Eosinofilia en sangre >= 4%
- Rinitis alergica diagnosticada por medico

**Interpretacion:** API positivo = 1 criterio mayor O 2 menores en un nino con >= 3 episodios de sibilancias/ano -> VPP ~77% para asma a los 6-13 anos

### Diagnostico | Diagnosis

**Espirometria (ninos >= 5-6 anos):**
- **FEV1/FVC < limite inferior normal (LIN)** o <80% del predicho: obstruccion
- **Reversibilidad:** aumento de FEV1 >= 12% Y >= 200 mL post-broncodilatador
- **Variabilidad del PEF:** variacion diurna >13% en ninos

**Fraccion de Oxido Nitrico Exhalado (FeNO):**
| Nivel de FeNO | Interpretacion | Implicacion |
|---------------|---------------|-------------|
| <20 ppb (<25 en adultos) | Normal/bajo | Inflamacion eosinofilica improbable |
| 20-35 ppb | Intermedio | Interpretar en contexto clinico |
| >35 ppb (>50 en adultos) | Elevado | Inflamacion eosinofilica probable; probable respuesta a ICS |

**Utilidad del FeNO:**
- Predice respuesta a ICS (FeNO alto -> buena respuesta)
- Monitoriza adherencia (FeNO sube si deja de tomar ICS)
- Ayuda en el diagnostico diferencial de tos cronica
- Limitacion: se eleva por atopia en general, no solo por asma

### Diagnostico Diferencial en Ninos | Differential Diagnosis in Children

| Condicion | Pista Clinica |
|-----------|-------------|
| Aspiracion de cuerpo extrano | Inicio subito, unilateral, historia de atragantamiento |
| Fibrosis quistica | Tos cronica productiva, falla de medro, esteatorrea |
| Bronquiolitis (lactantes) | <2 anos, primer episodio, contexto de epidemia de RSV |
| Displasia broncopulmonar | Prematuro, dependencia de oxigeno neonatal |
| Reflujo gastroesofagico | Tos nocturna, regurgitacion, mejora con antireflujo |
| Disfuncion de cuerdas vocales | Estridor inspiratorio, adolescentes, no responde a broncodilatadores |
| Anillo vascular | Estridor, disfagia, compresion en radiografia/CT |
| Inmunodeficiencia | Infecciones pulmonares recurrentes, bronquiectasias |

### Manejo de la Exacerbacion en Urgencias | ED Exacerbation Management

**Evaluacion inicial:**
- Frecuencia respiratoria, SaO2, uso de musculos accesorios, sibilancias, habla
- PEF o FEV1 si coopera (leve >70%, moderada 40-69%, severa <40%)

**Protocolo de tratamiento:**
| Severidad | Tratamiento Inicial | Si No Mejora |
|-----------|--------------------|--------------|
| Leve-moderada | Albuterol nebulizado 2.5-5 mg cada 20 min x 3 + ipratropio 250-500 mcg x 3 + prednisona 1-2 mg/kg | Continuar albuterol, considerar magnesio IV |
| Severa | Albuterol continuo 10-15 mg/h + ipratropio + metilprednisolona IV 2 mg/kg + magnesio sulfato IV 50 mg/kg | UCI: terbutalina IV, ketamina, ventilacion no invasiva |
| Paro respiratorio inminente | Intubacion + ventilacion mecanica (CUIDADO: Auto-PEEP) | UCI, considerar ECMO en casos refractarios |

---
## College-Level Explanation

[The above covers the Th2 inflammatory cascade, airway remodeling, early childhood wheezing phenotypes, the Asthma Predictive Index, spirometry interpretation, FeNO utility, differential diagnosis in children, and ED exacerbation management protocols.]`,
      keyTerms: [
        {
          term: 'inflamacion Th2 | Th2 inflammation',
          definition:
            'Patron inflamatorio predominante en asma alergica, mediado por celulas T helper tipo 2 que producen IL-4 (cambio a IgE), IL-5 (eosinofilia), e IL-13 (hipersecrecion de moco). Es el target de terapias biologicas modernas. | Predominant inflammatory pattern in allergic asthma, mediated by type 2 helper T cells producing IL-4 (IgE switching), IL-5 (eosinophilia), and IL-13 (mucus hypersecretion). Target of modern biologic therapies.',
          pronunciation: 'teh-dos',
        },
        {
          term: 'remodelacion de las vias aereas | airway remodeling',
          definition:
            'Cambios estructurales cronicos e irreversibles en las vias aereas asmaticas: engrosamiento de membrana basal, hipertrofia del musculo liso, hiperplasia de celulas caliciformes, y fibrosis subepitelial. Causa obstruccion fija. | Chronic, irreversible structural changes in asthmatic airways: basement membrane thickening, smooth muscle hypertrophy, goblet cell hyperplasia, and subepithelial fibrosis. Causes fixed obstruction.',
          pronunciation: 'reh-moh-deh-lah-see-OHN',
        },
        {
          term: 'API (Asthma Predictive Index) | Indice Predictivo de Asma',
          definition:
            'Herramienta clinica para predecir asma persistente en ninos <3 anos con sibilancias recurrentes. API positivo (1 criterio mayor o 2 menores) tiene VPP ~77% para asma a los 6-13 anos. | Clinical tool to predict persistent asthma in children <3 years with recurrent wheezing. Positive API (1 major or 2 minor criteria) has ~77% PPV for asthma at 6-13 years.',
          pronunciation: 'ah-peh-ee',
        },
        {
          term: 'FeNO (fraccion de oxido nitrico exhalado) | fractional exhaled nitric oxide',
          definition:
            'Biomarcador no invasivo de inflamacion eosinofilica de las vias aereas. >35 ppb en ninos sugiere inflamacion Th2 y probable respuesta a ICS. Util para diagnostico, monitoreo de adherencia, y titulacion de tratamiento. | Non-invasive biomarker of eosinophilic airway inflammation. >35 ppb in children suggests Th2 inflammation and likely ICS response. Useful for diagnosis, adherence monitoring, and treatment titration.',
          pronunciation: 'feh-noh',
        },
        {
          term: 'hiperreactividad bronquial | bronchial hyperresponsiveness',
          definition:
            'Respuesta exagerada del musculo liso bronquial a estimulos como aire frio, ejercicio, metacolina, o alergenos. Es un hallazgo cardinal del asma. Se mide con prueba de metacolina (PC20). | Exaggerated bronchial smooth muscle response to stimuli such as cold air, exercise, methacholine, or allergens. Cardinal finding of asthma. Measured by methacholine challenge test (PC20).',
          pronunciation: 'ee-per-reh-ak-tee-bee-DAHD',
        },
      ],
      clinicalNotes:
        'El API es una herramienta invaluable para decidir iniciar ICS en ninos pequenos con sibilancias recurrentes. Un API positivo justifica un ensayo terapeutico con ICS dosis baja por 3 meses. El FeNO es util pero tiene limitaciones: se eleva con cualquier inflamacion Th2 (rinitis alergica) y disminuye con infecciones virales. En ninos <5 anos sin capacidad para espirometria, el diagnostico es clinico basado en patron de sintomas + respuesta a tratamiento. El diagnostico diferencial mas importante que no se debe olvidar: aspiracion de cuerpo extrano en ninos 1-3 anos con inicio subito de sibilancias unilaterales. | The API is invaluable for deciding to start ICS in young children with recurrent wheezing. A positive API justifies a therapeutic trial of low-dose ICS for 3 months. FeNO is useful but has limitations: elevated with any Th2 inflammation (allergic rhinitis) and decreased with viral infections. In children <5 years unable to perform spirometry, diagnosis is clinical based on symptom pattern + treatment response. The most important differential not to miss: foreign body aspiration in children 1-3 years with sudden onset of unilateral wheezing.',
    },

    4: {
      level: 4,
      summary:
        'El asma pediatrica avanzada integra endotipos moleculares (T2-high vs. T2-low), la revolucion de terapias biologicas (omalizumab, mepolizumab, dupilumab, tezepelumab), biomarcadores para fenotipificacion y guia de tratamiento, la interaccion gen-ambiente en la epigenetica del asma, y protocolos de manejo critico del status asmaticus. | Advanced pediatric asthma integrates molecular endotypes (T2-high vs. T2-low), the biologics revolution (omalizumab, mepolizumab, dupilumab, tezepelumab), biomarkers for phenotyping and treatment guidance, gene-environment interaction in asthma epigenetics, and critical management protocols for status asthmaticus.',
      explanation: `## Explicacion de Posgrado | Graduate-Level Explanation

### Endotipos Moleculares del Asma | Asthma Molecular Endotypes

| Endotipo | Mecanismo | Biomarcadores | Tratamiento Dirigido |
|---------|-----------|--------------|---------------------|
| T2-high alergico | Alergeno -> DC -> Th2 -> IL-4/5/13 -> IgE + eosinofilos | IgE alta, eosinofilos altos, FeNO alto | ICS, omalizumab (anti-IgE) |
| T2-high eosinofilico no alergico | Alarminas epiteliales (TSLP, IL-25, IL-33) -> ILC2 -> IL-5/13 | Eosinofilos altos, FeNO alto, IgE normal | ICS, mepolizumab/benralizumab (anti-IL-5/5R) |
| T2-low neutrofilico | IL-17, infeccion, obesidad, humo de tabaco | Neutrofilos en esputo, FeNO normal/bajo | Macrolidos, anti-IL-17 (investigacion) |
| T2-low paucigranulocitario | Disfuncion del musculo liso? Mecanismos neuronales? | Esputo con pocas celulas inflamatorias | Broncotermodermoplastia, tiotropio |

### Terapias Biologicas en Asma Pediatrica | Biologic Therapies

| Biologico | Target | Aprobacion Pediatrica | Indicacion | Administracion |
|-----------|--------|----------------------|-----------|---------------|
| Omalizumab (Xolair) | IgE | >= 6 anos | Asma alergica severa, IgE 30-1500 UI/mL | SC cada 2-4 semanas (segun peso/IgE) |
| Mepolizumab (Nucala) | IL-5 | >= 6 anos | Asma eosinofilica severa, eosinofilos >= 150/uL | SC cada 4 semanas |
| Benralizumab (Fasenra) | IL-5R alpha | >= 12 anos | Asma eosinofilica severa | SC cada 4 semanas x 3, luego cada 8 |
| Dupilumab (Dupixent) | IL-4R alpha (bloquea IL-4 e IL-13) | >= 6 anos | Asma T2, dermatitis atopica comorbida | SC cada 2 semanas |
| Tezepelumab (Tezspire) | TSLP | >= 12 anos | Asma severa (T2-high Y T2-low) | SC cada 4 semanas |

**Seleccion del biologico:**
\`\`\`
Asma severa no controlada (Paso 4-5 con adherencia confirmada)
        |
Biomarcadores: eosinofilos, FeNO, IgE total, IgE especifica
        |
T2-high alergico (IgE alto + alergenos)?
    SI -> Omalizumab o Dupilumab
    |
T2-high eosinofilico (eosinofilos >= 300, FeNO >= 25)?
    SI -> Mepolizumab, Benralizumab, o Dupilumab
    |
T2-high con dermatitis atopica comorbida?
    SI -> Dupilumab (cubre asma + dermatitis)
    |
Asma severa sin biomarcadores T2 claros?
    -> Tezepelumab (anti-TSLP: upstream de toda la cascada T2)
\`\`\`

### Epigenetica y Gen-Ambiente en el Asma | Epigenetics

**Factores epigeneticos demostrados:**
| Factor | Mecanismo Epigenetico | Efecto |
|--------|----------------------|--------|
| Tabaquismo materno | Metilacion de DNA en genes de inmunidad innata | Aumento de riesgo de asma en hijo |
| Exposicion microbiana temprana (hipotesis de higiene) | Modulacion de metilacion en genes Th1/Th2 | Proteccion contra asma |
| Contaminacion del aire (PM2.5) | Modificaciones de histonas, miRNAs alterados | Aumento de inflamacion Th2 |
| Estres materno prenatal | Metilacion del receptor de glucocorticoides | Hiperreactividad del eje HPA en nino |
| Dieta (Vit D, omega-3) | Modulacion de metilacion en genes reguladores de T cells | Efecto protector potencial |

**Interaccion gen-ambiente en poblacion hispana/latina:**
- Variantes en ORMDL3/GSDMB (17q21): mayor riesgo en ninos hispanos/puertorriquenos
- Ascendencia africana/puertorriquena: mayor prevalencia y severidad de asma
- Ascendencia mexicana: menor prevalencia (paradoja hispana del asma)
- Exposicion a cucarachas + sensibilizacion: mayor impacto en familias de bajos recursos en vivienda inadecuada
- Contaminacion interior (humo de lena, cocina con gas) en hogares hispanos: factor de riesgo modificable

### Status Asmaticus: Manejo Critico | Critical Management

**Definicion:** Exacerbacion severa que no responde a tratamiento broncodilatador y corticosteroide agresivo en urgencias.

**Protocolo de UCI:**
| Nivel | Intervencion | Mecanismo |
|-------|-------------|-----------|
| 1 | Albuterol continuo 10-20 mg/h nebulizado | Beta-2 agonismo maximo |
| 2 | Ipratropio c/20 min x 3 dosis | Anticolinergico sinergico |
| 3 | Metilprednisolona IV 2 mg/kg carga, luego 1 mg/kg c/6h | Antiinflamatorio |
| 4 | Sulfato de magnesio IV 50 mg/kg (max 2g) en 20 min | Relajacion de musculo liso, inhibicion de acetilcolina |
| 5 | Terbutalina IV: bolo 10 mcg/kg, luego infusion 0.1-10 mcg/kg/min | Beta-2 IV cuando inhalado no llega |
| 6 | Ketamina IV: 1-2 mg/kg bolo, luego 0.5-2 mg/kg/h | Broncodilatador + sedante + analgesico |
| 7 | Heliox (70% He / 30% O2) | Reduce turbulencia, mejora entrega de broncodilatadores |
| 8 | VNIPP (BiPAP) | Reduce trabajo respiratorio, mejora ventilacion |
| 9 | Intubacion (ULTIMO recurso) | PELIGRO: auto-PEEP, colapso cardiovascular |

**Peligros de la intubacion en asma:**
- Auto-PEEP (atrapamiento de aire): usar I:E de 1:3 a 1:5
- Hipotension post-intubacion: por auto-PEEP + sedacion + ventilacion a presion positiva
- Barotrauma: neumotorax, neumomediastino
- Estrategia: hipercapnia permisiva (tolerar pH >7.20, PCO2 <90)

---
## Graduate-Level Explanation

[The above covers molecular endotypes, biologic therapy selection algorithm, epigenetic factors and gene-environment interactions including Hispanic/Latino-specific data, and status asthmaticus critical management protocols including ventilator strategies.]`,
      keyTerms: [
        {
          term: 'endotipo T2-high | T2-high endotype',
          definition:
            'Subtipo molecular de asma caracterizado por inflamacion mediada por citoquinas tipo 2 (IL-4, IL-5, IL-13), con biomarcadores elevados (eosinofilos, FeNO, IgE). Comprende ~50-70% del asma. Target de terapias biologicas. | Molecular asthma subtype characterized by type 2 cytokine-mediated inflammation (IL-4, IL-5, IL-13), with elevated biomarkers (eosinophils, FeNO, IgE). Comprises ~50-70% of asthma. Target of biologic therapies.',
          pronunciation: 'en-doh-TEE-poh teh-dos',
        },
        {
          term: 'tezepelumab | tezepelumab',
          definition:
            'Anticuerpo monoclonal anti-TSLP (linfopoyetina estromal timica), la alarmina mas "upstream" de la cascada T2. Unico biologico eficaz tanto en asma T2-high como T2-low. Aprobado >= 12 anos. | Anti-TSLP (thymic stromal lymphopoietin) monoclonal antibody, the most "upstream" alarmin in the T2 cascade. Only biologic effective in both T2-high and T2-low asthma. Approved >= 12 years.',
          pronunciation: 'teh-seh-PEH-loo-mab',
        },
        {
          term: 'auto-PEEP | auto-PEEP',
          definition:
            'Presion positiva al final de la espiracion generada por atrapamiento de aire ("air trapping") en asma severa. En ventilacion mecanica, causa hipotension, barotrauma, e inestabilidad hemodinamica. Manejo: I:E prolongado (1:3-1:5), hipercapnia permisiva. | Positive end-expiratory pressure generated by air trapping in severe asthma. In mechanical ventilation, causes hypotension, barotrauma, and hemodynamic instability. Management: prolonged I:E (1:3-1:5), permissive hypercapnia.',
          pronunciation: 'AW-toh peep',
        },
        {
          term: 'paradoja hispana del asma | Hispanic asthma paradox',
          definition:
            'Fenomeno epidemiologico donde ninos de ascendencia mexicana tienen MENOR prevalencia de asma que ninos no hispanos blancos, mientras que ninos puertorriquenos tienen la prevalencia MAS ALTA de cualquier grupo etnico en EE.UU. Refleja heterogeneidad genetica dentro de la poblacion "hispana". | Epidemiological phenomenon where children of Mexican descent have LOWER asthma prevalence than non-Hispanic white children, while Puerto Rican children have the HIGHEST prevalence of any ethnic group in the US. Reflects genetic heterogeneity within the "Hispanic" population.',
          pronunciation: 'pah-rah-DOH-hah',
        },
      ],
      clinicalNotes:
        'La seleccion del biologico debe basarse en el perfil de biomarcadores, no solo en la severidad. Dupilumab tiene la ventaja unica de cubrir asma + dermatitis atopica, comun en ninos. Tezepelumab (anti-TSLP) es el unico eficaz en ambos endotipos (T2-high y T2-low) porque actua upstream de toda la cascada. La paradoja hispana del asma tiene implicaciones clinicas reales: no asumir que todo nino "hispano" tiene el mismo riesgo. La ascendencia puertorriquena confiere el mayor riesgo (prevalencia ~17%), mientras que la mexicana confiere menor riesgo (~8%). En status asmaticus, la intubacion es el ULTIMO recurso porque el auto-PEEP puede causar colapso cardiovascular. Antes de intubar: maximalizar broncodilatadores, magnesio, ketamina, BiPAP. Si se intuba: I:E de 1:4-1:5, frecuencia baja, tolerar hipercapnia (pH >7.20). | Biologic selection should be based on biomarker profile, not just severity. Dupilumab has the unique advantage of covering asthma + atopic dermatitis, common in children. Tezepelumab (anti-TSLP) is the only one effective in both endotypes (T2-high and T2-low) because it acts upstream of the entire cascade. The Hispanic asthma paradox has real clinical implications: do not assume every "Hispanic" child has the same risk. Puerto Rican ancestry confers the highest risk (prevalence ~17%), while Mexican ancestry confers lower risk (~8%). In status asthmaticus, intubation is the LAST resort because auto-PEEP can cause cardiovascular collapse. Before intubating: maximize bronchodilators, magnesium, ketamine, BiPAP. If intubating: I:E of 1:4-1:5, low rate, tolerate hypercapnia (pH >7.20).',
    },

    5: {
      level: 5,
      summary:
        'La frontera del asma pediatrica incluye la prevencion primaria con biologicos en lactantes de alto riesgo (ensayos en curso), la medicina de precision basada en multiomica (genomica, transcriptomica, metabolomica, microbioma), la hipotesis del microbioma y ventana de oportunidad, nuevas dianas terapeuticas (anti-alarminas, anti-IL-33, inhibidores JAK), y las disparidades masivas en el manejo del asma en comunidades hispanas con datos de mortalidad desproporcionada. | The frontier of pediatric asthma includes primary prevention with biologics in high-risk infants (ongoing trials), precision medicine based on multi-omics (genomics, transcriptomics, metabolomics, microbiome), the microbiome hypothesis and window of opportunity, novel therapeutic targets (anti-alarmins, anti-IL-33, JAK inhibitors), and massive disparities in asthma management in Hispanic communities with disproportionate mortality data.',
      explanation: `## Explicacion Profesional (Nivel MD) | MD/Professional-Level Explanation

### Prevencion Primaria del Asma: El Nuevo Paradigma | Primary Prevention

**Ensayos clinicos en curso de prevencion primaria:**
| Ensayo | Intervencion | Poblacion | Estado |
|--------|-------------|-----------|--------|
| PARK (Prevention of Asthma in at-Risk Kids) | Dupilumab en embarazadas de alto riesgo | Recien nacidos de alto riesgo | Fase 2/3 |
| Ensayos de ICS temprano en lactantes API+ | Budesonida inhalada diaria en lactantes con sibilancias y API positivo | 12-36 meses, API+ | Completados (PEAK, INFANT) |
| Probioticos perinatales | Lactobacillus rhamnosus prenatal + postnatal | Lactantes de alto riesgo | Mixtos |
| Introduccion temprana de alergenos | Exposicion oral temprana a alergenos alimentarios | 4-6 meses | LEAP-style para asma |

**Resultados del estudio PEAK:**
- ICS tempranos en lactantes con API+ reducen sintomas DURANTE el tratamiento
- Pero: NO modifican la historia natural del asma (no previenen asma persistente al suspender)
- Implicacion: el tratamiento temprano trata pero no cura; la prevencion primaria real sigue siendo elusiva

### Medicina de Precision y Multiomica | Precision Medicine

**Biomarcadores multiomica emergentes:**
| Nivel Omico | Biomarcadores | Aplicacion Clinica |
|-------------|--------------|-------------------|
| Genomica | Variantes 17q21 (ORMDL3), TSLP, IL33, HLA | Susceptibilidad, prediccion de respuesta a biologicos |
| Transcriptomica | Firmas genicas Th2 en sangre/esputo | Endotipificacion en tiempo real |
| Proteometrica | Periostina serica, quitinasa-3 (YKL-40) | Biomarcadores de remodelacion |
| Metabolomica | Perfiles de eicosanoides, metabolitos del estres oxidativo | Fenotipos metabolicos del asma |
| Microbioma respiratorio | Predominancia de Moraxella/Haemophilus vs. Corynebacterium/Staphylococcus | Prediccion de exacerbaciones, riesgo de asma |
| Epigenomica | Patrones de metilacion de DNA (FOXP3, IL-4, IFN-gamma) | Biomarcadores de exposicion ambiental y riesgo |

### La Hipotesis del Microbioma y la Ventana de Oportunidad | Microbiome Hypothesis

**El microbioma de las vias aereas superiores en los primeros 6 meses predice el desarrollo de asma:**
- Predominancia temprana de Moraxella catarrhalis: riesgo AUMENTADO de asma
- Predominancia temprana de Corynebacterium + Staphylococcus (flora nasal normal): riesgo DISMINUIDO
- La diversidad microbiana intestinal baja en los primeros 3 meses predice asma a los 5 anos

**Factores que influyen en el microbioma temprano:**
| Factor | Efecto en Microbioma | Efecto en Riesgo de Asma |
|--------|---------------------|-------------------------|
| Parto vaginal (vs. cesarea) | Mayor diversidad, mas Lactobacillus | Protector |
| Lactancia materna (vs. formula) | Mayor Bifidobacterium, mas diverso | Protector |
| Hermanos mayores | Transferencia microbiana | Protector (confirma hipotesis de higiene) |
| Antibioticos en primer ano | Disminuye diversidad drasticamente | Riesgo aumentado (dosis-dependiente) |
| Mascotas (perros) | Aumenta diversidad interior | Protector (evidencia creciente) |
| Entorno rural/granjas | Exposicion a endotoxinas, diversidad microbiana | Fuertemente protector |

### Dianas Terapeuticas Emergentes | Emerging Targets

| Diana | Mecanismo | Molecula | Estado |
|-------|-----------|---------|--------|
| IL-33 | Alarmina epitelial -> activa ILC2 y Th2 | Itepekimab, astegolimab | Fase 2/3 |
| IL-33R (ST2) | Receptor de IL-33 | Tozorakimab | Fase 2 |
| TSLP | Alarmina epitelial upstream | Tezepelumab (aprobado) | Aprobado >=12a |
| JAK1/JAK2 | Via de senalizacion de multiples citoquinas | Tofacitinib (oral), ruxolitinib | Investigacion |
| CRTH2 | Receptor de PGD2 en Th2/ILC2/eosinofilos | Fevipiprant | Fase 3 (resultados mixtos) |
| GATA3 | Factor de transcripcion maestro Th2 | SB010 (DNAzyme inhalado) | Fase 2a |
| Tiotropio | Anticolinergico M3 de accion larga | Spiriva Respimat (aprobado >=6a) | Add-on paso 4-5 |

### Disparidades en Asma en Comunidades Hispanas/Latinas | Health Disparities

**Datos epidemiologicos:**
| Indicador | Ninos Puertorriquenos | Ninos Mexicano-Americanos | Ninos No-Hispanos Blancos |
|-----------|----------------------|--------------------------|--------------------------|
| Prevalencia de asma | 16.5% | 7.8% | 10.6% |
| Visitas a urgencias por asma | 3x mas | Similar | Referencia |
| Hospitalizaciones por asma | 2.5x mas | Similar | Referencia |
| Mortalidad por asma | 2-3x mas | Menor | Referencia |
| Uso de ICS (controller) | Menor | Menor | Referencia |
| Posesion de plan de accion escrito | 30% | 25% | 45% |

**Factores contribuyentes a las disparidades:**
1. **Ambientales:** Vivienda en areas con alta contaminacion, exposicion a cucarachas/moho, hacinamiento
2. **Acceso:** Falta de seguro, no tener medico de cabecera, barreras idiomaticas
3. **Farmaceuticos:** Menor prescripcion de ICS, mayor dependencia de SABA (rescate), no tener espaciador
4. **Educativos:** No tener plan de accion escrito, no entender diferencia entre rescate y control
5. **Culturales:** "El asma es verguenza", "los inhaladores causan adiccion", "las medicinas a diario son malas"
6. **Sistemicos:** Menor acceso a especialistas, formularios restrictivos en Medicaid

**Estrategias basadas en evidencia:**
- Programas de promotoras de salud para educacion de asma en comunidades hispanas
- Community health workers para visitas domiciliarias (identificar y remediar triggers ambientales)
- Planes de accion en espanol con nivel de lectura 4to-6to grado
- Programas escolares de manejo de asma (school-based asthma programs)
- Integracion de educacion de asma en WIC y Head Start
- Telemedicina para acceso a especialistas en areas desatendidas

---
## MD/Professional-Level Explanation

[The above covers primary prevention trials, multi-omics precision medicine, the microbiome hypothesis with modifiable risk factors, emerging therapeutic targets, and comprehensive data on asthma disparities in Hispanic/Latino communities with evidence-based strategies to address them.]`,
      keyTerms: [
        {
          term: 'alarminas epiteliales | epithelial alarmins',
          definition:
            'Citoquinas liberadas por el epitelio de las vias aereas en respuesta a dano (virus, alergenos, contaminantes): TSLP, IL-25, e IL-33. Activan ILC2 y Th2, iniciando la cascada inflamatoria tipo 2. Targets de terapias de nueva generacion (tezepelumab, itepekimab). | Cytokines released by airway epithelium in response to damage (viruses, allergens, pollutants): TSLP, IL-25, and IL-33. Activate ILC2 and Th2, initiating the type 2 inflammatory cascade. Targets of next-generation therapies (tezepelumab, itepekimab).',
          pronunciation: 'ah-lar-MEE-nahs eh-pee-teh-lee-AH-les',
        },
        {
          term: 'ventana del microbioma | microbiome window',
          definition:
            'Periodo critico en los primeros 3-6 meses de vida donde la composicion del microbioma respiratorio e intestinal puede determinar la trayectoria inmunologica hacia asma o proteccion. Factores modificables: modo de parto, lactancia, antibioticos tempranos, exposicion a mascotas/granjas. | Critical period in the first 3-6 months of life where respiratory and gut microbiome composition may determine the immunological trajectory toward asthma or protection. Modifiable factors: delivery mode, breastfeeding, early antibiotics, pet/farm exposure.',
          pronunciation: 'ben-TAH-nah del mee-kroh-bee-OH-mah',
        },
        {
          term: 'hipercapnia permisiva | permissive hypercapnia',
          definition:
            'Estrategia de ventilacion mecanica en status asmaticus donde se tolera una PCO2 elevada (hasta 90 mmHg) y pH >7.20 para evitar barotrauma por auto-PEEP. Se priorizan volumenes tidales bajos y tiempo espiratorio largo (I:E 1:4-1:5). | Mechanical ventilation strategy in status asthmaticus where elevated PCO2 (up to 90 mmHg) and pH >7.20 are tolerated to avoid barotrauma from auto-PEEP. Low tidal volumes and prolonged expiratory time (I:E 1:4-1:5) are prioritized.',
          pronunciation: 'ee-per-KAP-nee-ah per-mee-SEE-bah',
        },
        {
          term: 'ORMDL3/17q21 | ORMDL3/17q21 locus',
          definition:
            'Locus genetico de susceptibilidad al asma mas robustamente replicado en GWAS. El gen ORMDL3 regula la sintesis de ceramidas y el estres del reticulo endoplasmatico en celulas epiteliales. Las variantes de riesgo estan particularmente asociadas con asma de inicio temprano y en poblacion puertorriquena. | Most robustly replicated asthma susceptibility locus in GWAS. ORMDL3 gene regulates ceramide synthesis and endoplasmic reticulum stress in epithelial cells. Risk variants are particularly associated with early-onset asthma and in Puerto Rican populations.',
          pronunciation: 'or-em-de-ele-tres',
        },
      ],
      clinicalNotes:
        'La heterogeneidad del asma dentro de la poblacion "hispana" es clinicamente significativa y debe reconocerse: los ninos puertorriquenos tienen la mayor prevalencia y mortalidad de cualquier grupo etnico en EE.UU. (16.5% prevalencia, 2-3x mortalidad), mientras que los mexicano-americanos tienen prevalencia menor que los blancos no hispanos. Esto refleja diferencias geneticas reales (variantes 17q21, mezcla africana) ademas de factores ambientales. Las promotoras de salud entrenadas en educacion de asma han demostrado en RCTs reducir las visitas a urgencias y mejorar el uso de medicamentos de control en comunidades hispanas. Todo nino con asma debe tener un Plan de Accion ESCRITO en su idioma preferido. La mayor barrera farmaceutica en familias hispanas de bajos recursos es el costo de los ICS y la percepcion de que "las medicinas a diario son malas": abordar ambas proactivamente. Tezepelumab representa un avance porque es el unico biologico eficaz en T2-low, pero su costo (~$30,000/ano) es una barrera de acceso masiva. | The heterogeneity of asthma within the "Hispanic" population is clinically significant and must be recognized: Puerto Rican children have the highest prevalence and mortality of any ethnic group in the US (16.5% prevalence, 2-3x mortality), while Mexican-Americans have lower prevalence than non-Hispanic whites. This reflects real genetic differences (17q21 variants, African admixture) in addition to environmental factors. Community health workers trained in asthma education have shown in RCTs to reduce ED visits and improve controller medication use in Hispanic communities. Every child with asthma must have a WRITTEN Action Plan in their preferred language. The greatest pharmaceutical barrier in low-resource Hispanic families is ICS cost and the perception that "daily medications are bad": address both proactively. Tezepelumab represents an advance as the only biologic effective in T2-low, but its cost (~$30,000/year) is a massive access barrier.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ref-gina-2024',
      type: 'guideline',
      title: 'Global Strategy for Asthma Management and Prevention (GINA 2024)',
      authors: ['Global Initiative for Asthma'],
      source: 'GINA',
      url: 'https://ginasthma.org',
    },
    {
      id: 'ref-naepp-epr4',
      type: 'guideline',
      title: 'Expert Panel Report 4: Guidelines for the Diagnosis and Management of Asthma',
      authors: ['National Asthma Education and Prevention Program'],
      source: 'NHLBI/NIH',
    },
    {
      id: 'ref-nelson-pulmonology',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics - The Respiratory System',
      authors: ['Kliegman, R.M.', 'St. Geme, J.W.'],
      source: 'Elsevier, 22nd Edition',
    },
    {
      id: 'ref-asthma-disparities-hispanic',
      type: 'journal',
      title: 'Asthma Disparities in Hispanic/Latino Populations',
      authors: ['Thakur, N.', 'Oh, S.S.', 'Nguyen, E.A.'],
      source: 'Journal of Allergy and Clinical Immunology, 2020',
    },
    {
      id: 'ref-biologics-pediatric-asthma',
      type: 'journal',
      title: 'Biologic Therapies for Severe Asthma in Children',
      authors: ['Papi, A.', 'Brightling, C.', 'Pedersen, S.E.'],
      source: 'New England Journal of Medicine, 2024',
    },
  ],

  crossReferences: [
    {
      targetId: 'pediatrics-desarrollo-infantil-child-development',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Desarrollo Infantil | Child Development',
    },
    {
      targetId: 'pediatrics-vacunacion-immunization-schedule',
      targetType: 'topic',
      relationship: 'related',
      label: 'Vacunacion Pediatrica | Pediatric Immunization',
    },
    {
      targetId: 'pediatrics-neonatologia-basica-neonatology',
      targetType: 'topic',
      relationship: 'related',
      label: 'Neonatologia Basica | Basic Neonatology',
    },
  ],

  tags: {
    systems: ['respiratory', 'immune'],
    topics: [
      'pediatrics',
      'pulmonology',
      'allergy',
      'immunology',
      'emergency medicine',
      'health equity',
    ],
    keywords: [
      'asma',
      'asthma',
      'sibilancias',
      'wheezing',
      'corticosteroide inhalado',
      'ICS',
      'albuterol',
      'biologicos',
      'omalizumab',
      'dupilumab',
      'tezepelumab',
      'status asmaticus',
      'plan de accion',
      'disparidades',
      'hispano',
      'microbioma',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'family medicine', 'emergency medicine', 'internal medicine'],
    },
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
