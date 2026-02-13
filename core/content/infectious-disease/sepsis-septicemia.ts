import { EducationalContent } from '../types';

export const sepsisSepticemia: EducationalContent = {
  id: 'condition-sepsis-septicemia',
  type: 'condition',
  name: 'Sepsis / Septicemia',
  nameEs: 'Sepsis / Septicemia',
  alternateNames: ['Envenenamiento de la sangre', 'Blood poisoning', 'Bacteremia con disfuncion organica', 'Systemic inflammatory response syndrome'],
  levels: {
    1: {
      level: 1,
      summary: 'La sepsis ocurre cuando una infeccion se esparce por todo el cuerpo y hace que los organos dejen de funcionar correctamente. Es una emergencia medica que requiere tratamiento inmediato. | Sepsis happens when an infection spreads throughout the body and causes organs to stop working properly. It is a medical emergency requiring immediate treatment.',
      explanation: `## Explicacion

La sepsis es una condicion muy seria que ocurre cuando tu cuerpo tiene una reaccion extrema a una infeccion. Normalmente, cuando tienes una infeccion, como un resfriado o una cortada infectada, tu cuerpo la combate en un solo lugar. Pero a veces, los germenes entran a la sangre y viajan por todo el cuerpo.

**Que sucede en la sepsis:**
Imagina que tu cuerpo es una ciudad y tu sistema inmunologico es el departamento de bomberos. Si hay un pequeno incendio (infeccion), los bomberos llegan y lo apagan con la cantidad justa de agua. Pero en la sepsis, es como si el departamento de bomberos entrara en panico e inundara toda la ciudad con agua, causando danos en todas partes, no solo donde estaba el fuego.

**Senales de advertencia:**
- Fiebre muy alta o escalofrios intensos
- Corazon latiendo muy rapido
- Respiracion muy rapida
- Confusion o sentirse muy somnoliento
- Dolor severo o sentirse "lo peor que se ha sentido"
- Piel con manchas, palida o azulada

**Por que es tan seria:**
Sin tratamiento rapido, organos como los rinones, pulmones y el corazon pueden dejar de funcionar. La buena noticia es que si se detecta y se trata rapidamente con antibioticos y liquidos intravenosos, la mayoria de las personas se recuperan.

**Como prevenir la sepsis:**
- Mantener las cortadas y heridas limpias
- Recibir las vacunas recomendadas
- Lavarse las manos frecuentemente
- Ir al medico si una infeccion parece empeorar

---
## Explanation

Sepsis is a very serious condition that happens when your body has an extreme reaction to an infection. Normally when you have an infection, like a cold or an infected cut, your body fights it in one spot. But sometimes germs enter the blood and travel throughout the entire body.

**What happens in sepsis:**
Imagine your body is a city and your immune system is the fire department. If there is a small fire (infection), the firefighters come and put it out with just the right amount of water. But in sepsis, it is like the fire department panics and floods the entire city with water, causing damage everywhere — not just where the fire was.

**Warning signs:**
- Very high fever or intense chills
- Heart beating very fast
- Breathing very quickly
- Confusion or feeling very sleepy
- Severe pain or feeling "the worst you have ever felt"
- Mottled, pale, or bluish skin

**Why it is so serious:**
Without fast treatment, organs like the kidneys, lungs, and heart can stop working. The good news is that if detected and treated quickly with antibiotics and IV fluids, most people recover.

**How to prevent sepsis:**
- Keep cuts and wounds clean
- Get recommended vaccines
- Wash hands frequently
- See a doctor if an infection seems to be getting worse`,
      keyTerms: [
        { term: 'Sepsis', definition: 'Condicion potencialmente mortal donde la respuesta del cuerpo a una infeccion dana sus propios organos. | A life-threatening condition where the body\'s response to infection damages its own organs.' },
        { term: 'Torrente sanguineo / Bloodstream', definition: 'La sangre que fluye por tu cuerpo llevando oxigeno y nutrientes a todas partes. | The blood flowing through your body carrying oxygen and nutrients everywhere.' },
        { term: 'Organos / Organs', definition: 'Partes importantes del cuerpo como el corazon, pulmones y rinones que te mantienen vivo. | Important body parts like the heart, lungs, and kidneys that keep you alive.' },
        { term: 'Infeccion / Infection', definition: 'Cuando los germenes entran al cuerpo y se multiplican, causando enfermedad. | When germs get into your body and multiply, making you sick.' },
        { term: 'Sistema inmunologico / Immune system', definition: 'Las defensas naturales de tu cuerpo contra los germenes. | Your body\'s natural defenses against germs.' }
      ],
      analogies: [
        'La sepsis es como una alarma de incendio que no se apaga: el cuerpo reacciona tanto que termina danandose a si mismo. | Sepsis is like a fire alarm that will not turn off: the body reacts so much that it ends up damaging itself.',
        'Imagina que tu cuerpo es un ejercito peleando contra invasores, pero en la sepsis, el ejercito empieza a destruir su propia ciudad. | Imagine your body is an army fighting invaders, but in sepsis, the army starts destroying its own city.'
      ],
      examples: [
        'Una persona con una infeccion urinaria que de repente tiene fiebre alta, confusion y la presion baja podria tener sepsis. | A person with a urinary tract infection who suddenly has high fever, confusion, and low blood pressure could have sepsis.',
        'Un paciente diabetico con una herida infectada en el pie que empieza a sentirse muy mal y tiene escalofrios necesita atencion medica urgente. | A diabetic patient with an infected foot wound who starts feeling very ill and has chills needs urgent medical attention.'
      ],
      patientCounselingPoints: [
        'Si usted o un ser querido tiene una infeccion y empieza a sentirse mucho peor de repente, vaya a la sala de emergencias inmediatamente. | If you or a loved one has an infection and suddenly starts feeling much worse, go to the emergency room immediately.',
        'La sepsis se trata mejor cuando se detecta temprano. No espere a ver si mejora por si sola. | Sepsis is best treated when caught early. Do not wait to see if it gets better on its own.',
        'Diga a los doctores si recientemente tuvo una cirugia, una infeccion, o si tiene un sistema inmunologico debilitado. | Tell the doctors if you recently had surgery, an infection, or if you have a weakened immune system.',
        'Mantener las heridas limpias y tomar los antibioticos como se le recetaron puede ayudar a prevenir la sepsis. | Keeping wounds clean and taking antibiotics as prescribed can help prevent sepsis.'
      ]
    },
    2: {
      level: 2,
      summary: 'La sepsis es una disfuncion organica potencialmente mortal causada por una respuesta inmune desregulada a la infeccion. El reconocimiento rapido mediante criterios como qSOFA y el tratamiento oportuno son cruciales para la supervivencia. | Sepsis is life-threatening organ dysfunction caused by a dysregulated immune response to infection. Rapid recognition using criteria like qSOFA and timely treatment are crucial for survival.',
      explanation: `## Explicacion

La sepsis ocurre cuando la respuesta inmune del cuerpo a una infeccion se descontrola, causando inflamacion generalizada que dana tejidos y organos lejos del sitio original de infeccion.

**La progresion de la sepsis:**
1. **Infeccion** - Bacterias, virus u hongos entran al cuerpo
2. **Respuesta inmune** - El cuerpo libera sustancias quimicas para combatir la infeccion
3. **Desregulacion** - La respuesta inmune se vuelve excesiva y danina
4. **Disfuncion organica** - La presion arterial baja, los organos no reciben suficiente oxigeno
5. **Choque septico** - Presion arterial severamente baja a pesar de liquidos IV, mortalidad muy alta

**Fuentes comunes de infeccion que causan sepsis:**
- Pulmones (neumonia) — la mas comun
- Infecciones del tracto urinario
- Infecciones abdominales
- Infecciones de piel y tejidos blandos
- Infecciones del torrente sanguineo por lineas IV

**Reconocimiento de la sepsis (Criterios qSOFA):**
Senales de advertencia que sugieren sepsis:
- Frecuencia respiratoria >= 22 respiraciones por minuto
- Estado mental alterado (confusion)
- Presion arterial sistolica <= 100 mmHg

Dos o mas de estos en un paciente con sospecha de infeccion sugiere sepsis.

**Criterios SIRS (historicos pero aun utiles):**
- Temperatura > 38°C o < 36°C
- Frecuencia cardiaca > 90 latidos/min
- Frecuencia respiratoria > 20 respiraciones/min
- Leucocitos > 12,000 o < 4,000 celulas/mm3

**Tratamiento - El "Paquete de Sepsis" (Hour-1 Bundle):**
El tiempo es critico:
- Medir nivel de lactato (indica privacion de oxigeno en tejidos)
- Obtener hemocultivos antes de los antibioticos
- Administrar antibioticos de amplio espectro
- Dar liquidos IV rapidamente si la presion esta baja (30 mL/kg cristaloides)
- Iniciar vasopresores si la presion permanece baja a pesar de liquidos

**Quien tiene mayor riesgo:**
- Pacientes muy jovenes y muy ancianos
- Personas con sistema inmune debilitado
- Pacientes con enfermedades cronicas (diabetes, enfermedad renal)
- Aquellos con dispositivos invasivos (lineas IV, cateteres urinarios)

---
## Explanation

Sepsis occurs when the body's immune response to infection becomes uncontrolled, causing widespread inflammation that damages tissues and organs far from the original infection site.

**The progression of sepsis:**
1. **Infection** - Bacteria, viruses, or fungi enter the body
2. **Immune response** - The body releases chemicals to fight infection
3. **Dysregulation** - The immune response becomes excessive and harmful
4. **Organ dysfunction** - Blood pressure drops, organs do not get enough oxygen
5. **Septic shock** - Severely low blood pressure despite IV fluids, very high mortality

**Common infection sources causing sepsis:**
- Lungs (pneumonia) — most common
- Urinary tract infections
- Abdominal infections
- Skin and soft tissue infections
- Bloodstream infections from IV lines

**Recognizing sepsis (qSOFA Criteria):**
Warning signs suggesting sepsis:
- Respiratory rate >= 22 breaths per minute
- Altered mental status (confusion)
- Systolic blood pressure <= 100 mmHg

Two or more of these in a patient with suspected infection suggests sepsis.

**SIRS Criteria (historic but still useful):**
- Temperature > 38°C or < 36°C
- Heart rate > 90 bpm
- Respiratory rate > 20 breaths/min
- WBC > 12,000 or < 4,000 cells/mm3

**Treatment - The "Sepsis Bundle" (Hour-1 Bundle):**
Time is critical:
- Measure lactate level (indicates tissue oxygen deprivation)
- Obtain blood cultures before antibiotics
- Administer broad-spectrum antibiotics
- Give IV fluids rapidly if blood pressure is low (30 mL/kg crystalloids)
- Start vasopressors if blood pressure remains low despite fluids

**Who is at higher risk:**
- Very young and very old patients
- People with weakened immune systems
- Patients with chronic diseases (diabetes, kidney disease)
- Those with invasive devices (IV lines, urinary catheters)`,
      keyTerms: [
        { term: 'Disfuncion organica / Organ dysfunction', definition: 'Cuando un organo no funciona correctamente debido a enfermedad o lesion. | When an organ is not working properly due to disease or injury.' },
        { term: 'Respuesta desregulada / Dysregulated response', definition: 'Respuesta inmune que no esta correctamente controlada; en la sepsis, es excesiva. | Immune response that is not properly controlled; in sepsis, it is excessive.' },
        { term: 'Choque septico / Septic shock', definition: 'La forma mas severa de sepsis con presion arterial peligrosamente baja a pesar del tratamiento. | The most severe form of sepsis with dangerously low blood pressure despite treatment.' },
        { term: 'Vasopresor / Vasopressor', definition: 'Medicamento que eleva la presion arterial al estrechar los vasos sanguineos. | Medication that raises blood pressure by constricting blood vessels.' },
        { term: 'Lactato / Lactate', definition: 'Sustancia quimica producida cuando los tejidos no reciben suficiente oxigeno; elevada en sepsis. | Chemical produced when tissues do not get enough oxygen; elevated in sepsis.' },
        { term: 'qSOFA', definition: 'Evaluacion rapida junto a la cama del paciente para identificar sepsis: presion baja, respiracion rapida, estado mental alterado. | Quick bedside assessment to identify sepsis: low blood pressure, fast breathing, altered mental status.' },
        { term: 'SIRS', definition: 'Sindrome de Respuesta Inflamatoria Sistemica: criterios historicos que incluyen cambios en temperatura, frecuencia cardiaca, respiracion y leucocitos. | Systemic Inflammatory Response Syndrome: historic criteria including changes in temperature, heart rate, breathing, and white blood cells.' }
      ],
      analogies: [
        'La sepsis es como un efecto domino: la infeccion en un lugar desencadena una cascada de problemas que afectan todo el cuerpo. | Sepsis is like a domino effect: infection in one place triggers a cascade of problems affecting the whole body.',
        'Los criterios qSOFA son como un semaforo rapido para la sepsis: verde (0 puntos), amarillo (1 punto), rojo (2+ puntos). | The qSOFA criteria are like a quick traffic light for sepsis: green (0 points), yellow (1 point), red (2+ points).'
      ],
      examples: [
        'Un paciente de 70 anos con neumonia llega con confusion, frecuencia respiratoria de 24 y presion de 95/60. Su qSOFA es 3 — se debe iniciar el paquete de sepsis inmediatamente. | A 70-year-old patient with pneumonia arrives with confusion, respiratory rate of 24, and BP 95/60. Their qSOFA is 3 — the sepsis bundle should be started immediately.',
        'Una mujer de 45 anos con una infeccion urinaria complicada tiene lactato de 4.2 mmol/L, lo cual indica hipoperfusion tisular y necesidad de reanimacion agresiva con liquidos. | A 45-year-old woman with a complicated UTI has a lactate of 4.2 mmol/L, indicating tissue hypoperfusion and the need for aggressive fluid resuscitation.'
      ],
      patientCounselingPoints: [
        'Si usted o un familiar tiene infeccion y nota confusion, respiracion rapida o presion baja, busque atencion de emergencia de inmediato. | If you or a family member has an infection and notices confusion, rapid breathing, or low blood pressure, seek emergency care immediately.',
        'La sepsis no discrimina: puede afectar a cualquier persona de cualquier edad, pero los mas vulnerables son los ancianos, los bebes, y las personas con enfermedades cronicas. | Sepsis does not discriminate: it can affect anyone of any age, but the most vulnerable are the elderly, babies, and people with chronic diseases.'
      ]
    },
    3: {
      level: 3,
      summary: 'La sepsis representa un sindrome de disfuncion organica potencialmente mortal resultante de respuestas inmunes desreguladas a la infeccion, caracterizada por alteraciones inmunologicas, metabolicas y cardiovasculares complejas que requieren intervencion sensible al tiempo. | Sepsis represents a syndrome of life-threatening organ dysfunction resulting from dysregulated host responses to infection, characterized by complex immunological, metabolic, and cardiovascular derangements requiring time-sensitive intervention.',
      explanation: `## Explicacion

Las definiciones de Sepsis-3 (2016) establecieron la sepsis como "disfuncion organica potencialmente mortal causada por una respuesta desregulada del huesped a la infeccion", alejandose de los criterios previos basados en SIRS que carecian de especificidad.

**Fisiopatologia:**

*Desregulacion inmune:*
- Fase hiperinflamatoria inicial con liberacion de citoquinas (TNF-alfa, IL-1, IL-6)
- Receptores de reconocimiento de patrones (TLRs) activados por patrones moleculares asociados a patogenos (PAMPs)
- Patrones moleculares asociados a dano (DAMPs) del tejido lesionado amplifican la respuesta
- Fase subsiguiente de inmunosupresion con apoptosis y agotamiento de linfocitos

*Alteracion de la coagulacion:*
- Activacion de la cascada de coagulacion
- Coagulacion intravascular diseminada (CID) en casos severos
- Microtrombos que causan dano isquemico de organos
- Consumo de factores de coagulacion llevando a sangrado

*Disfuncion cardiovascular:*
- Vasodilatacion sistemica mediada por oxido nitrico (NO)
- Depresion miocardica por citoquinas cardiotoxicas
- Aumento de permeabilidad capilar con fuga de liquido al tercer espacio
- Distribucion anormal del flujo sanguineo

**Criterios diagnosticos:**

*Definiciones de Sepsis-3:*
- Sepsis: Sospecha de infeccion + aumento de >= 2 puntos en SOFA
- Choque septico: Sepsis + necesidad de vasopresores para mantener PAM >= 65 mmHg Y lactato > 2 mmol/L a pesar de reanimacion adecuada con liquidos

*Puntuacion SOFA (Sequential Organ Failure Assessment):*
Evalua 6 sistemas organicos:
- Respiratorio: Relacion PaO2/FiO2
- Coagulacion: Conteo de plaquetas
- Hepatico: Bilirrubina
- Cardiovascular: PAM y necesidad de vasopresores
- Neurologico: Escala de Glasgow
- Renal: Creatinina o gasto urinario

*qSOFA (Quick SOFA) - para cribado fuera de UCI:*
- Frecuencia respiratoria >= 22
- Estado mental alterado (Glasgow < 15)
- Presion arterial sistolica <= 100 mmHg
(>= 2 puntos sugiere sepsis; sensibilidad moderada pero alta especificidad)

**Manejo inicial (Hour-1 Bundle de Surviving Sepsis Campaign):**

1. **Medir lactato** - relactar si lactato inicial > 2 mmol/L
2. **Obtener hemocultivos** antes de antibioticos (al menos 2 sets, aerobicos y anaerobicos)
3. **Antibioticos de amplio espectro** - dentro de 1 hora del reconocimiento
4. **Reanimacion con cristaloides** - 30 mL/kg para hipotension o lactato >= 4 mmol/L
5. **Vasopresores** - si la PAM permanece < 65 mmHg despues de la reanimacion con liquidos

**Eleccion de antibioticos empiricos:**
- NAC severa: Ceftriaxona + azitromicina o fluoroquinolona respiratoria
- Infeccion intraabdominal: Piperacilina-tazobactam o meropenem
- Infeccion urinaria complicada: Ceftriaxona o fluoroquinolona
- Infeccion de piel: Vancomicina + piperacilina-tazobactam
- Fuente desconocida: Vancomicina + piperacilina-tazobactam o meropenem

**Manejo de vasopresores:**
- Primera linea: Norepinefrina (objetivo PAM >= 65 mmHg)
- Segunda linea: Vasopresina (hasta 0.03 U/min) como ahorrador de norepinefrina
- Tercera linea: Epinefrina si se necesita inotrópico adicional

---
## Explanation

The Sepsis-3 definitions (2016) established sepsis as "life-threatening organ dysfunction caused by a dysregulated host response to infection," moving away from previous SIRS-based criteria that lacked specificity.

**Pathophysiology:**

*Immune dysregulation:*
- Initial hyperinflammatory phase with cytokine release (TNF-alpha, IL-1, IL-6)
- Pattern recognition receptors (TLRs) activated by pathogen-associated molecular patterns (PAMPs)
- Damage-associated molecular patterns (DAMPs) from tissue injury amplify response
- Subsequent immunosuppression phase with lymphocyte apoptosis and exhaustion

*Coagulation derangement:*
- Activation of the coagulation cascade
- Disseminated intravascular coagulation (DIC) in severe cases
- Microthrombi causing ischemic organ damage
- Consumption of clotting factors leading to bleeding

*Cardiovascular dysfunction:*
- Systemic vasodilation mediated by nitric oxide (NO)
- Myocardial depression from cardiotoxic cytokines
- Increased capillary permeability with third-spacing of fluid
- Abnormal blood flow distribution

**Diagnostic criteria:**

*Sepsis-3 definitions:*
- Sepsis: Suspected infection + increase of >= 2 points in SOFA score
- Septic shock: Sepsis + need for vasopressors to maintain MAP >= 65 mmHg AND lactate > 2 mmol/L despite adequate fluid resuscitation

*SOFA Score (Sequential Organ Failure Assessment):*
Evaluates 6 organ systems:
- Respiratory: PaO2/FiO2 ratio
- Coagulation: Platelet count
- Hepatic: Bilirubin
- Cardiovascular: MAP and vasopressor requirement
- Neurological: Glasgow Coma Scale
- Renal: Creatinine or urine output

*qSOFA (Quick SOFA) - for screening outside ICU:*
- Respiratory rate >= 22
- Altered mental status (GCS < 15)
- Systolic blood pressure <= 100 mmHg
(>= 2 points suggests sepsis; moderate sensitivity but high specificity)

**Initial management (Surviving Sepsis Campaign Hour-1 Bundle):**

1. **Measure lactate** - remeasure if initial lactate > 2 mmol/L
2. **Obtain blood cultures** before antibiotics (at least 2 sets, aerobic and anaerobic)
3. **Broad-spectrum antibiotics** - within 1 hour of recognition
4. **Crystalloid resuscitation** - 30 mL/kg for hypotension or lactate >= 4 mmol/L
5. **Vasopressors** - if MAP remains < 65 mmHg after fluid resuscitation

**Empiric antibiotic selection:**
- Severe CAP: Ceftriaxone + azithromycin or respiratory fluoroquinolone
- Intra-abdominal infection: Piperacillin-tazobactam or meropenem
- Complicated UTI: Ceftriaxone or fluoroquinolone
- Skin infection: Vancomycin + piperacillin-tazobactam
- Unknown source: Vancomycin + piperacillin-tazobactam or meropenem

**Vasopressor management:**
- First line: Norepinephrine (target MAP >= 65 mmHg)
- Second line: Vasopressin (up to 0.03 U/min) as norepinephrine-sparing
- Third line: Epinephrine if additional inotropic support needed`,
      keyTerms: [
        { term: 'Sepsis-3', definition: 'Definicion actual (2016): disfuncion organica potencialmente mortal por respuesta desregulada del huesped a la infeccion. Reemplaza la definicion basada en SIRS. | Current definition (2016): life-threatening organ dysfunction from dysregulated host response to infection. Replaces the SIRS-based definition.' },
        { term: 'SOFA / Evaluacion Secuencial de Falla Organica', definition: 'Puntuacion que evalua 6 sistemas organicos para cuantificar la gravedad de la disfuncion organica. | Score evaluating 6 organ systems to quantify the severity of organ dysfunction.' },
        { term: 'PAMPs / Patrones Moleculares Asociados a Patogenos', definition: 'Moleculas de los microorganismos que activan el sistema inmune innato a traves de receptores como los TLRs. | Molecules from microorganisms that activate the innate immune system through receptors like TLRs.' },
        { term: 'DAMPs / Patrones Moleculares Asociados a Dano', definition: 'Moleculas liberadas por celulas danadas que amplifican la respuesta inflamatoria. | Molecules released by damaged cells that amplify the inflammatory response.' },
        { term: 'CID / Coagulacion Intravascular Diseminada', definition: 'Activacion descontrolada de la coagulacion que causa microtrombos y consumo de factores, llevando a trombosis y sangrado simultaneos. | Uncontrolled activation of coagulation causing microthrombi and factor consumption, leading to simultaneous thrombosis and bleeding.' },
        { term: 'Norepinefrina / Norepinephrine', definition: 'Vasopresor de primera linea en choque septico; agonista alfa-1 que causa vasoconstriccion. | First-line vasopressor in septic shock; alpha-1 agonist causing vasoconstriction.' },
        { term: 'Lactato / Lactate', definition: 'Marcador de hipoperfusion tisular; nivel > 2 mmol/L es criterio para choque septico junto con hipotension. | Marker of tissue hypoperfusion; level > 2 mmol/L is a criterion for septic shock along with hypotension.' }
      ],
      clinicalNotes: `**Notas clinicas:**
- La mortalidad de la sepsis aumenta aproximadamente 7% por cada hora de retraso en la administracion de antibioticos
- El lactato serico es un marcador pronostico clave: > 4 mmol/L se asocia con mortalidad > 30%
- La reanimacion guiada por objetivos tempranos (EGDT) ya no se recomienda como protocolo rigido, pero los principios de reanimacion temprana agresiva permanecen
- El aclaramiento de lactato (>= 10% en 6 horas) se asocia con mejor pronostico
- Los corticosteroides (hidrocortisona 200 mg/dia) se consideran en choque septico refractario a vasopresores

**Clinical notes:**
- Sepsis mortality increases approximately 7% for each hour of delay in antibiotic administration
- Serum lactate is a key prognostic marker: > 4 mmol/L is associated with > 30% mortality
- Early goal-directed therapy (EGDT) is no longer recommended as a rigid protocol, but principles of early aggressive resuscitation remain
- Lactate clearance (>= 10% in 6 hours) is associated with better outcomes
- Corticosteroids (hydrocortisone 200 mg/day) are considered in vasopressor-refractory septic shock`
    },
    4: {
      level: 4,
      summary: 'La sepsis es un sindrome clinico complejo definido por la interaccion entre respuestas inmunes innatas/adaptativas desreguladas, disfuncion endotelial, alteraciones microvasculares y reprogramacion metabolica, que culmina en disfuncion organica multiple. Su manejo requiere intervencion multimodal basada en evidencia de las guias Surviving Sepsis Campaign. | Sepsis is a complex clinical syndrome defined by the interplay of dysregulated innate/adaptive immune responses, endothelial dysfunction, microvascular derangements, and metabolic reprogramming, culminating in multiple organ dysfunction. Its management requires evidence-based multimodal intervention per the Surviving Sepsis Campaign guidelines.',
      explanation: `## Explicacion

**Inmunopatogenesis detallada:**

*Fase hiperinflamatoria (precoz):*
- Reconocimiento de PAMPs por PRRs (TLR-2 para lipoproteinas, TLR-4 para LPS, TLR-9 para CpG DNA)
- Activacion del inflamasoma NLRP3 con liberacion de IL-1beta e IL-18
- Tormenta de citoquinas: TNF-alfa (pico a 1-2 horas), IL-1, IL-6 (marcador pronostico), IL-8
- Activacion del complemento (C3a, C5a) causando quimiotaxis de neutrofilos y activacion endotelial
- NETs (Trampas Extracelulares de Neutrofilos) contribuyen a inmunotrombosis
- Activacion de monocitos/macrofagos con produccion de especies reactivas de oxigeno (ROS)

*Fase inmunosupresora (tardia):*
- Apoptosis masiva de linfocitos T CD4+, CD8+ y celulas B
- Expansion de celulas T reguladoras (Treg) y celulas supresoras derivadas de mieloides (MDSCs)
- Agotamiento de linfocitos T con expresion aumentada de PD-1/PD-L1
- Reprogramacion de monocitos a fenotipo antiinflamatorio (tolerancia a endotoxina)
- Disminucion de expresion de HLA-DR en monocitos (predictor de infecciones secundarias)
- Esta fase explica la susceptibilidad a infecciones nosocomiales y reactivaciones virales

*Disfuncion endotelial:*
- Degradacion del glucocalix endotelial
- Expresion de moleculas de adhesion (ICAM-1, VCAM-1, E-selectina)
- Disrupcion de uniones estrechas con aumento de permeabilidad
- Conversion a fenotipo procoagulante: expresion de factor tisular, disminucion de trombomodulina
- Produccion excesiva de oxido nitrico (iNOS) causando vasoplegia

*Alteraciones microvasculares:*
- Heterogeneidad del flujo microvascular
- Shunting arteriovenoso con mala extraccion de oxigeno tisular
- Edema intersticial por fuga capilar
- Microtrombosis diseminada

**Disfuncion organica especifica por sistema:**

*Pulmon - SDRA (Sindrome de Dificultad Respiratoria Aguda):*
- Dano alveolar difuso con formacion de membranas hialinas
- Edema pulmonar no cardiogenico
- Relacion PaO2/FiO2: Leve (200-300), Moderado (100-200), Severo (< 100)
- Manejo: Ventilacion protectora con bajo volumen corriente (6 mL/kg peso predicho), presion meseta < 30 cmH2O

*Rinon - Lesion Renal Aguda (LRA):*
- Multifactorial: hipoperfusion, nefrotoxicidad, inflamacion directa
- Criterios KDIGO para estadificacion
- Considerar terapia de reemplazo renal continua (CRRT) en casos refractarios

*Corazon - Cardiomiopatia septica:*
- Depresion sistolica y diastolica biventricular
- Mediada por citoquinas (TNF-alfa, IL-1) y oxido nitrico
- Generalmente reversible en sobrevivientes (resolucion en 7-10 dias)
- Ecocardiografia para guiar manejo hemodinamico

*Higado:*
- Colestasis septica (elevacion de bilirrubina)
- Hipoxia hepatica con elevacion de transaminasas
- Alteracion de la funcion de sintesis (coagulopatia)

*Cerebro - Encefalopatia asociada a sepsis:*
- Alteracion de la barrera hematoencefalica
- Neuroinflamacion con activacion microglial
- Manifestaciones: delirium, confusion, coma

**Manejo avanzado (Surviving Sepsis Campaign 2021):**

*Reanimacion hemodinamica:*
- Cristaloides balanceados (Ringer lactato) preferidos sobre solucion salina normal
- Meta de PAM >= 65 mmHg (considerar 80 mmHg en pacientes con hipertension cronica)
- Norepinefrina como vasopresor de primera linea
- Agregar vasopresina (0.03 U/min) si norepinefrina > 0.25-0.5 mcg/kg/min
- Considerar dobutamina si evidencia de gasto cardiaco bajo a pesar de reanimacion adecuada

*Antibioticoterapia:*
- Antibioticos de amplio espectro dentro de 1 hora (idealmente 30 minutos en choque septico)
- Desescalamiento guiado por cultivos y antibiograma a las 48-72 horas
- Duracion tipica: 7-10 dias (puede ser mas corta con procalcitonina guiada)
- Procalcitonina < 0.5 ng/mL o disminucion >= 80% sugiere suspension segura

*Corticosteroides:*
- Hidrocortisona 200 mg/dia (50 mg IV c/6h) en choque septico refractario
- Beneficio en tiempo de resolucion de choque, no claramente en mortalidad
- No se requiere prueba de estimulacion con ACTH

*Control glucemico:*
- Meta: glucosa < 180 mg/dL
- Evitar hipoglucemia (< 70 mg/dL)

*Profilaxis:*
- Tromboprofilaxis con HBPM (enoxaparina 40 mg SC diario) o HNF
- Profilaxis de ulcera de estres con IBP en pacientes de alto riesgo
- Elevacion de cabecera 30-45 grados

---
## Explanation

**Detailed immunopathogenesis:**

*Hyperinflammatory phase (early):*
- Recognition of PAMPs by PRRs (TLR-2 for lipoproteins, TLR-4 for LPS, TLR-9 for CpG DNA)
- NLRP3 inflammasome activation with release of IL-1beta and IL-18
- Cytokine storm: TNF-alpha (peak at 1-2 hours), IL-1, IL-6 (prognostic marker), IL-8
- Complement activation (C3a, C5a) causing neutrophil chemotaxis and endothelial activation
- NETs (Neutrophil Extracellular Traps) contributing to immunothrombosis
- Monocyte/macrophage activation with reactive oxygen species (ROS) production

*Immunosuppressive phase (late):*
- Massive apoptosis of CD4+ T cells, CD8+ T cells, and B cells
- Expansion of regulatory T cells (Treg) and myeloid-derived suppressor cells (MDSCs)
- T cell exhaustion with increased PD-1/PD-L1 expression
- Monocyte reprogramming to anti-inflammatory phenotype (endotoxin tolerance)
- Decreased HLA-DR expression on monocytes (predictor of secondary infections)
- This phase explains susceptibility to nosocomial infections and viral reactivations

*Endothelial dysfunction:*
- Degradation of the endothelial glycocalyx
- Expression of adhesion molecules (ICAM-1, VCAM-1, E-selectin)
- Disruption of tight junctions with increased permeability
- Conversion to procoagulant phenotype: tissue factor expression, decreased thrombomodulin
- Excessive nitric oxide production (iNOS) causing vasoplegia

*Microvascular derangements:*
- Microvascular flow heterogeneity
- Arteriovenous shunting with impaired tissue oxygen extraction
- Interstitial edema from capillary leak
- Disseminated microthrombosis

**Organ-specific dysfunction by system:**

*Lung - ARDS (Acute Respiratory Distress Syndrome):*
- Diffuse alveolar damage with hyaline membrane formation
- Noncardiogenic pulmonary edema
- PaO2/FiO2 ratio: Mild (200-300), Moderate (100-200), Severe (< 100)
- Management: Protective ventilation with low tidal volume (6 mL/kg predicted body weight), plateau pressure < 30 cmH2O

*Kidney - Acute Kidney Injury (AKI):*
- Multifactorial: hypoperfusion, nephrotoxicity, direct inflammation
- KDIGO criteria for staging
- Consider continuous renal replacement therapy (CRRT) in refractory cases

*Heart - Septic cardiomyopathy:*
- Biventricular systolic and diastolic depression
- Mediated by cytokines (TNF-alpha, IL-1) and nitric oxide
- Generally reversible in survivors (resolution in 7-10 days)
- Echocardiography to guide hemodynamic management

*Liver:*
- Septic cholestasis (bilirubin elevation)
- Hepatic hypoxia with transaminase elevation
- Impaired synthetic function (coagulopathy)

*Brain - Sepsis-associated encephalopathy:*
- Blood-brain barrier disruption
- Neuroinflammation with microglial activation
- Manifestations: delirium, confusion, coma

**Advanced management (Surviving Sepsis Campaign 2021):**

*Hemodynamic resuscitation:*
- Balanced crystalloids (Lactated Ringer's) preferred over normal saline
- MAP target >= 65 mmHg (consider 80 mmHg in chronically hypertensive patients)
- Norepinephrine as first-line vasopressor
- Add vasopressin (0.03 U/min) if norepinephrine > 0.25-0.5 mcg/kg/min
- Consider dobutamine if evidence of low cardiac output despite adequate resuscitation

*Antibiotic therapy:*
- Broad-spectrum antibiotics within 1 hour (ideally 30 minutes in septic shock)
- De-escalation guided by cultures and sensitivity at 48-72 hours
- Typical duration: 7-10 days (can be shorter with procalcitonin guidance)
- Procalcitonin < 0.5 ng/mL or >= 80% decrease suggests safe discontinuation

*Corticosteroids:*
- Hydrocortisone 200 mg/day (50 mg IV q6h) in refractory septic shock
- Benefit in time to shock resolution, not clearly in mortality
- ACTH stimulation test not required

*Glycemic control:*
- Target: glucose < 180 mg/dL
- Avoid hypoglycemia (< 70 mg/dL)

*Prophylaxis:*
- Thromboprophylaxis with LMWH (enoxaparin 40 mg SC daily) or UFH
- Stress ulcer prophylaxis with PPI in high-risk patients
- Head-of-bed elevation 30-45 degrees`,
      keyTerms: [
        { term: 'Inflamasoma NLRP3 / NLRP3 Inflammasome', definition: 'Complejo multiproteico intracelular que detecta senales de peligro y activa la produccion de IL-1beta e IL-18, contribuyendo a la cascada inflamatoria en sepsis. | Intracellular multiprotein complex that detects danger signals and activates IL-1beta and IL-18 production, contributing to the inflammatory cascade in sepsis.' },
        { term: 'NETs / Trampas Extracelulares de Neutrofilos', definition: 'Redes de cromatina y proteinas liberadas por neutrofilos activados que atrapan patogenos pero tambien contribuyen a la trombosis y dano tisular. | Networks of chromatin and proteins released by activated neutrophils that trap pathogens but also contribute to thrombosis and tissue damage.' },
        { term: 'Glucocalix endotelial / Endothelial glycocalyx', definition: 'Capa de glicoproteinas y proteoglicanos que recubre el endotelio vascular; su degradacion en sepsis contribuye a fuga capilar y edema. | Layer of glycoproteins and proteoglycans covering the vascular endothelium; its degradation in sepsis contributes to capillary leak and edema.' },
        { term: 'Vasoplegia / Vasoplegia', definition: 'Perdida del tono vascular con vasodilatacion profunda refractaria a vasopresores, mediada por produccion excesiva de oxido nitrico (iNOS). | Loss of vascular tone with profound vasodilation refractory to vasopressors, mediated by excessive nitric oxide production (iNOS).' },
        { term: 'Tolerancia a endotoxina / Endotoxin tolerance', definition: 'Estado de hiporrespuesta del sistema inmune innato tras exposicion prolongada a LPS, caracterizado por disminucion de la produccion de citoquinas proinflamatorias. | State of innate immune hyporesponsiveness after prolonged LPS exposure, characterized by decreased proinflammatory cytokine production.' },
        { term: 'Procalcitonina / Procalcitonin', definition: 'Biomarcador que se eleva en infecciones bacterianas; su tendencia a la baja guia la duracion de la antibioticoterapia en sepsis. | Biomarker elevated in bacterial infections; its downward trend guides antibiotic duration in sepsis.' },
        { term: 'SDRA / ARDS', definition: 'Sindrome de Dificultad Respiratoria Aguda: dano pulmonar difuso con edema no cardiogenico, clasificado por relacion PaO2/FiO2. | Acute Respiratory Distress Syndrome: diffuse lung injury with noncardiogenic edema, classified by PaO2/FiO2 ratio.' }
      ],
      clinicalNotes: `**Notas clinicas avanzadas:**
- Los cristaloides balanceados (Ringer lactato, PlasmaLyte) se asocian con menor incidencia de LRA e hiperquloremia comparados con solucion salina 0.9% (ensayos SMART y SALT-ED)
- La albumina puede considerarse como adyuvante a cristaloides cuando se requieren grandes volumenes de reanimacion
- La meta de presion de perfusion debe individualizarse: PAM 65-70 para la mayoria, considerar PAM 80 en hipertensos cronicos (estudio SEPSISPAM)
- Monitorizacion hemodinamica avanzada (variacion de presion de pulso, ecocardiografia point-of-care) guia la decision de continuar fluidos vs. iniciar vasopresores
- La vitamina C (acido ascorbico), tiamina e hidrocortisona (protocolo "HAT") mostro resultados mixtos; no se recomienda de rutina
- El manejo del ventilador en SDRA asociado a sepsis sigue las guias ARDS Network: Vt 6 mL/kg PBW, presion meseta < 30, PEEP por tabla FiO2/PEEP
- La posicion prona mejora la supervivencia en SDRA moderado-severo (PaO2/FiO2 < 150) por >= 16 horas/dia

**Advanced clinical notes:**
- Balanced crystalloids (Lactated Ringer's, PlasmaLyte) are associated with lower AKI and hyperchloremia compared with 0.9% saline (SMART and SALT-ED trials)
- Albumin may be considered as adjunct to crystalloids when large resuscitation volumes are required
- Perfusion pressure targets should be individualized: MAP 65-70 for most, consider MAP 80 in chronically hypertensive (SEPSISPAM study)
- Advanced hemodynamic monitoring (pulse pressure variation, point-of-care echocardiography) guides the decision to continue fluids vs. start vasopressors
- Vitamin C (ascorbic acid), thiamine, and hydrocortisone ("HAT" protocol) showed mixed results; not routinely recommended
- Ventilator management in sepsis-associated ARDS follows ARDS Network guidelines: Vt 6 mL/kg PBW, plateau pressure < 30, PEEP by FiO2/PEEP table
- Prone positioning improves survival in moderate-severe ARDS (PaO2/FiO2 < 150) for >= 16 hours/day`
    },
    5: {
      level: 5,
      summary: 'La sepsis es una emergencia medica compleja definida por la desregulacion de las respuestas inmunes innata y adaptativa, disfuncion endotelial, reprogramacion metabolica mitocondrial y alteraciones epigeneticas, que requiere un enfoque de medicina de precision con terapias dirigidas a fenotipos especificos, biomarcadores emergentes y estrategias inmunomoduladoras basadas en la evidencia mas reciente. | Sepsis is a complex medical emergency defined by dysregulation of innate and adaptive immune responses, endothelial dysfunction, mitochondrial metabolic reprogramming, and epigenetic alterations, requiring a precision medicine approach with phenotype-specific therapies, emerging biomarkers, and immunomodulatory strategies based on the latest evidence.',
      explanation: `## Explicacion

**Mecanismos moleculares avanzados:**

*Reprogramacion metabolica en sepsis:*
- Cambio de fosforilacion oxidativa a glucolisis aerobica (efecto Warburg) en celulas inmunes activadas
- Disfuncion mitocondrial: disminucion de actividad del complejo I y IV de la cadena de transporte de electrones
- Acumulacion de succinato estabiliza HIF-1alfa, promoviendo produccion de IL-1beta
- Itaconato como metabolito antiinflamatorio endogeno derivado del ciclo de Krebs
- La resolucion de la sepsis requiere biogenesis mitocondrial mediada por PGC-1alfa

*Regulacion epigenetica:*
- Remodelacion de cromatina en macrofagos: histonas acetiladas en promotores de genes proinflamatorios durante fase temprana
- Metilacion de histonas (H3K27me3) en promotores de genes de tolerancia durante fase tardia
- miRNAs circulantes (miR-150, miR-223) como biomarcadores y reguladores de la respuesta inmune
- DNA metiltransferasas alteran patron de expresion genica a largo plazo (inmunoparesis post-sepsis)

*Inmunotrombosis y coagulopatia:*
- Concepto de inmunotrombosis: la coagulacion como mecanismo de defensa innata
- Factor tisular expresado por monocitos activados y microparticulas
- Trombina activa protease-activated receptors (PARs) en celulas endoteliales e inmunes
- Via de la proteina C activada: anticoagulante y citoprotectora
- Tromboelastografia (TEG/ROTEM) para guiar manejo de coagulopatia

*Disfuncion de la barrera epitelial:*
- Translocacion bacteriana intestinal por disrupcion de uniones estrechas
- Disbiosis del microbioma intestinal contribuye a la respuesta inflamatoria
- El eje intestino-pulmon: la permeabilidad intestinal se correlaciona con desarrollo de SDRA

**Biomarcadores emergentes y estratificacion:**

*Biomarcadores diagnosticos:*
- Procalcitonina (PCT): sensibilidad 77%, especificidad 79% para sepsis bacteriana
- Presepsina (sCD14-ST): prometedor para diagnostico precoz, punto de corte > 600 pg/mL
- MR-proAdrenomedulina: predictor de gravedad y mortalidad
- Suplemento a biomarcadores clasicos: PCR, lactato, leucocitos

*Biomarcadores pronosticos:*
- HLA-DR monocitario < 8,000 moleculas/celula: predictor de inmunoparesis y infecciones secundarias
- IL-6 > 1,000 pg/mL: asociado con mortalidad elevada
- Relacion neutrofilo/linfocito (NLR) > 10: predictor independiente de mortalidad
- Troponina I elevada: indicador de disfuncion miocardica y peor pronostico

*Fenotipos de sepsis:*
- Fenotipo alfa: baja mortalidad, minima disfuncion organica
- Fenotipo beta: edad avanzada, comorbilidades cronicas
- Fenotipo gamma: alta inflamacion, elevacion marcada de biomarcadores
- Fenotipo delta: alta mortalidad, disfuncion hepatica y coagulopatia
(Estos fenotipos responden de manera diferente a intervenciones como liquidos y vasopresores)

**Terapias dirigidas y medicina de precision:**

*Inmunomodulacion:*
- Anti-PD-1/PD-L1 (nivolumab, pembrolizumab): ensayos en fase temprana para revertir inmunoparesis
- IL-7 recombinante: restaura linfocitos T en pacientes con linfopenia septica
- GM-CSF: restaura expresion de HLA-DR y funcion monocitaria
- Interferon-gamma: activa macrofagos inmunosuprimidos
- IFN-beta: ensayo en fase III no mostro beneficio en mortalidad

*Terapias anticoagulantes:*
- Trombomodulina recombinante (ART-123): aprobada en Japon, ensayo global SCARLET no alcanzo objetivo primario
- Antitrombina III: sin beneficio demostrado en mortalidad a pesar de base teorica solida
- Heparina: posibles efectos antiinflamatorios ademas del anticoagulante

*Depuracion extracorporea:*
- Hemoperfusion con polimixina B (PMX-HP): remocion de endotoxina, resultados mixtos (EUPHRATES trial: beneficio en subgrupo con endotoxina elevada)
- CytoSorb: adsorcion de citoquinas, evidencia en expansion
- CRRT con membranas de alto corte: remocion de mediadores inflamatorios de tamano medio

*Terapias metabolicas en investigacion:*
- Activadores de AMPK: restauracion de la biogenesis mitocondrial
- NAD+ precursores (nicotinamida): soporte metabolico celular
- Beta-hidroxibutirato: efecto antiinflamatorio via inhibicion de NLRP3

**Secuelas a largo plazo (Sindrome post-cuidados intensivos):**
- Deterioro cognitivo en 30-50% de sobrevivientes a 1 ano
- Debilidad neuromuscular adquirida en UCI (miopatia/neuropatia del paciente critico)
- TEPT, depresion y ansiedad en 20-30% de sobrevivientes
- Reingresos hospitalarios frecuentes en los primeros 90 dias
- Mortalidad aumentada hasta 5 anos post-sepsis
- Inmunoparesis persistente con riesgo de infecciones oportunistas

---
## Explanation

**Advanced molecular mechanisms:**

*Metabolic reprogramming in sepsis:*
- Shift from oxidative phosphorylation to aerobic glycolysis (Warburg effect) in activated immune cells
- Mitochondrial dysfunction: decreased complex I and IV activity in the electron transport chain
- Succinate accumulation stabilizes HIF-1alpha, promoting IL-1beta production
- Itaconate as an endogenous anti-inflammatory metabolite derived from the Krebs cycle
- Sepsis resolution requires PGC-1alpha-mediated mitochondrial biogenesis

*Epigenetic regulation:*
- Chromatin remodeling in macrophages: acetylated histones at proinflammatory gene promoters during early phase
- Histone methylation (H3K27me3) at tolerance gene promoters during late phase
- Circulating miRNAs (miR-150, miR-223) as biomarkers and immune response regulators
- DNA methyltransferases alter long-term gene expression patterns (post-sepsis immunoparesis)

*Immunothrombosis and coagulopathy:*
- Concept of immunothrombosis: coagulation as an innate defense mechanism
- Tissue factor expressed by activated monocytes and microparticles
- Thrombin activates protease-activated receptors (PARs) on endothelial and immune cells
- Activated protein C pathway: anticoagulant and cytoprotective
- Thromboelastography (TEG/ROTEM) to guide coagulopathy management

*Epithelial barrier dysfunction:*
- Intestinal bacterial translocation from tight junction disruption
- Gut microbiome dysbiosis contributes to the inflammatory response
- The gut-lung axis: intestinal permeability correlates with ARDS development

**Emerging biomarkers and stratification:**

*Diagnostic biomarkers:*
- Procalcitonin (PCT): sensitivity 77%, specificity 79% for bacterial sepsis
- Presepsin (sCD14-ST): promising for early diagnosis, cutoff > 600 pg/mL
- MR-proAdrenomedullin: predictor of severity and mortality
- Supplementary to classic biomarkers: CRP, lactate, WBC

*Prognostic biomarkers:*
- Monocytic HLA-DR < 8,000 molecules/cell: predictor of immunoparesis and secondary infections
- IL-6 > 1,000 pg/mL: associated with elevated mortality
- Neutrophil-to-lymphocyte ratio (NLR) > 10: independent mortality predictor
- Elevated troponin I: indicator of myocardial dysfunction and worse prognosis

*Sepsis phenotypes:*
- Alpha phenotype: low mortality, minimal organ dysfunction
- Beta phenotype: advanced age, chronic comorbidities
- Gamma phenotype: high inflammation, marked biomarker elevation
- Delta phenotype: high mortality, hepatic dysfunction and coagulopathy
(These phenotypes respond differently to interventions like fluids and vasopressors)

**Targeted therapies and precision medicine:**

*Immunomodulation:*
- Anti-PD-1/PD-L1 (nivolumab, pembrolizumab): early-phase trials to reverse immunoparesis
- Recombinant IL-7: restores T lymphocytes in patients with septic lymphopenia
- GM-CSF: restores HLA-DR expression and monocyte function
- Interferon-gamma: activates immunosuppressed macrophages
- IFN-beta: phase III trial did not show mortality benefit

*Anticoagulant therapies:*
- Recombinant thrombomodulin (ART-123): approved in Japan, global SCARLET trial did not meet primary endpoint
- Antithrombin III: no demonstrated mortality benefit despite strong theoretical basis
- Heparin: possible anti-inflammatory effects beyond anticoagulant

*Extracorporeal purification:*
- Polymyxin B hemoperfusion (PMX-HP): endotoxin removal, mixed results (EUPHRATES trial: benefit in subgroup with elevated endotoxin)
- CytoSorb: cytokine adsorption, expanding evidence
- CRRT with high-cutoff membranes: removal of mid-size inflammatory mediators

*Metabolic therapies under investigation:*
- AMPK activators: restoration of mitochondrial biogenesis
- NAD+ precursors (nicotinamide): cellular metabolic support
- Beta-hydroxybutyrate: anti-inflammatory effect via NLRP3 inhibition

**Long-term sequelae (Post-intensive care syndrome):**
- Cognitive impairment in 30-50% of survivors at 1 year
- ICU-acquired neuromuscular weakness (critical illness myopathy/neuropathy)
- PTSD, depression, and anxiety in 20-30% of survivors
- Frequent hospital readmissions in the first 90 days
- Increased mortality up to 5 years post-sepsis
- Persistent immunoparesis with risk of opportunistic infections`,
      keyTerms: [
        { term: 'Efecto Warburg / Warburg effect', definition: 'Cambio metabolico de fosforilacion oxidativa a glucolisis aerobica en celulas inmunes activadas durante sepsis, similar al metabolismo tumoral. | Metabolic shift from oxidative phosphorylation to aerobic glycolysis in activated immune cells during sepsis, similar to tumor metabolism.' },
        { term: 'PGC-1alfa / PGC-1alpha', definition: 'Coactivador transcripcional maestro que regula la biogenesis mitocondrial; su activacion es esencial para la recuperacion metabolica en sepsis. | Master transcriptional coactivator that regulates mitochondrial biogenesis; its activation is essential for metabolic recovery in sepsis.' },
        { term: 'Inmunoparesis / Immunoparesis', definition: 'Estado de inmunosupresion adquirida post-sepsis con disminucion de HLA-DR monocitario, linfopenia y susceptibilidad a infecciones secundarias. | Acquired post-sepsis immunosuppression state with decreased monocytic HLA-DR, lymphopenia, and susceptibility to secondary infections.' },
        { term: 'Presepsina (sCD14-ST) / Presepsin', definition: 'Fragmento soluble del receptor CD14 de monocitos/macrofagos; biomarcador emergente para diagnostico precoz de sepsis. | Soluble fragment of the monocyte/macrophage CD14 receptor; emerging biomarker for early sepsis diagnosis.' },
        { term: 'Fenotipos de sepsis / Sepsis phenotypes', definition: 'Subgrupos clinicos (alfa, beta, gamma, delta) identificados mediante analisis de conglomerados que predicen respuesta diferencial al tratamiento. | Clinical subgroups (alpha, beta, gamma, delta) identified through cluster analysis that predict differential treatment response.' },
        { term: 'Inmunotrombosis / Immunothrombosis', definition: 'Concepto que describe la activacion de la coagulacion como mecanismo de defensa innata, con contribucion de NETs, factor tisular y plaquetas activadas. | Concept describing coagulation activation as an innate defense mechanism, with contribution from NETs, tissue factor, and activated platelets.' },
        { term: 'CytoSorb', definition: 'Dispositivo de adsorcion extracorporea de citoquinas utilizado como terapia adyuvante en choque septico con niveles excesivos de citoquinas. | Extracorporeal cytokine adsorption device used as adjunctive therapy in septic shock with excessive cytokine levels.' },
        { term: 'Itaconato / Itaconate', definition: 'Metabolito del ciclo de Krebs con propiedades antiinflamatorias; inhibe la succinato deshidrogenasa y activa Nrf2, modulando la respuesta inmune en sepsis. | Krebs cycle metabolite with anti-inflammatory properties; inhibits succinate dehydrogenase and activates Nrf2, modulating the immune response in sepsis.' }
      ],
      clinicalNotes: `**Notas clinicas de nivel experto:**

*Controversias actuales y evidencia reciente:*
- El ensayo ARISE, ProCESS y ProMISe demostraron que EGDT protocolizada no es superior al manejo habitual de buena calidad
- Cristaloides balanceados vs. salina normal: ensayos SMART/BaSICS muestran tendencia a beneficio con cristaloides balanceados, especialmente en pacientes con sepsis
- Albumina al 4%: estudio SAFE no mostro diferencia vs. salina; ALBIOS mostro posible beneficio en choque septico (analisis de subgrupo)
- Hidroxietilalmidon (HES) esta CONTRAINDICADO en sepsis (mayor mortalidad e insuficiencia renal - ensayos 6S y CHEST)
- Mega-dosis de vitamina C: ensayo VITAMINS y LOVIT no demostraron beneficio, posible dano

*Antibioticos en poblaciones especiales:*
- Pacientes neutropenicos febriles: monoterapia con cefepime, meropenem o piperacilina-tazobactam
- Sospecha de MRSA: agregar vancomicina (valle 15-20 mcg/mL) o linezolid
- Sospecha de organismos productores de BLEE: carbapenems como primera linea
- Infeccion fungica invasiva: equinocandinas (caspofungina, micafungina) empiricas en pacientes de alto riesgo

*Monitorizacion avanzada:*
- Ecocardiografia point-of-care: evaluar funcion ventricular, responsividad a liquidos (variacion de IVC, Doppler aortico)
- Monitorizacion hemodinamica minimamente invasiva (PiCCO, FloTrac): indice cardiaco, EVLW, SVRI
- Espectroscopia de infrarrojo cercano (NIRS): perfusion tisular regional
- Tonometria gastrica: monitorizacion de perfusion esplacnica (uso limitado)

*Inteligencia artificial en sepsis:*
- Algoritmos de deteccion temprana de sepsis (EPIC Sepsis Model, InSight) integrados en registros electronicos
- Modelos de aprendizaje por refuerzo para optimizar dosis de fluidos y vasopresores
- Fenotipificacion computacional para identificar subgrupos que se benefician de terapias especificas

**Expert-level clinical notes:**

*Current controversies and recent evidence:*
- ARISE, ProCESS, and ProMISe trials demonstrated that protocolized EGDT is not superior to usual good-quality care
- Balanced crystalloids vs. normal saline: SMART/BaSICS trials show trend toward benefit with balanced crystalloids, especially in sepsis patients
- 4% albumin: SAFE study showed no difference vs. saline; ALBIOS showed possible benefit in septic shock (subgroup analysis)
- Hydroxyethyl starch (HES) is CONTRAINDICATED in sepsis (increased mortality and renal failure - 6S and CHEST trials)
- Mega-dose vitamin C: VITAMINS and LOVIT trials showed no benefit, possible harm

*Antibiotics in special populations:*
- Febrile neutropenic patients: monotherapy with cefepime, meropenem, or piperacillin-tazobactam
- MRSA suspicion: add vancomycin (trough 15-20 mcg/mL) or linezolid
- Suspected ESBL-producing organisms: carbapenems as first line
- Invasive fungal infection: empiric echinocandins (caspofungin, micafungin) in high-risk patients

*Advanced monitoring:*
- Point-of-care echocardiography: assess ventricular function, fluid responsiveness (IVC variation, aortic Doppler)
- Minimally invasive hemodynamic monitoring (PiCCO, FloTrac): cardiac index, EVLW, SVRI
- Near-infrared spectroscopy (NIRS): regional tissue perfusion
- Gastric tonometry: splanchnic perfusion monitoring (limited use)

*Artificial intelligence in sepsis:*
- Early sepsis detection algorithms (EPIC Sepsis Model, InSight) integrated into electronic health records
- Reinforcement learning models to optimize fluid and vasopressor dosing
- Computational phenotyping to identify subgroups benefiting from specific therapies`
    }
  },
  media: [],
  citations: [
    { id: 'ref-1', type: 'article', title: 'The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3)', authors: ['Singer M', 'Deutschman CS', 'Seymour CW', 'et al.'], source: 'JAMA. 2016;315(8):801-810', license: 'CC BY 4.0' },
    { id: 'ref-2', type: 'article', title: 'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021', authors: ['Evans L', 'Rhodes A', 'Alhazzani W', 'et al.'], source: 'Intensive Care Medicine. 2021;47(11):1181-1247', license: 'CC BY 4.0' },
    { id: 'ref-3', type: 'textbook', title: 'Harrison\'s Principles of Internal Medicine, 21st Edition', authors: ['Loscalzo J', 'Fauci AS', 'Kasper DL', 'et al.'], source: 'McGraw-Hill Education', chapter: 'Sepsis and Septic Shock', license: 'CC BY 4.0' },
    { id: 'ref-4', type: 'article', title: 'Assessment of Clinical Criteria for Sepsis (Sepsis-3)', authors: ['Seymour CW', 'Liu VX', 'Iwashyna TJ', 'et al.'], source: 'JAMA. 2016;315(8):762-774', license: 'CC BY 4.0' },
    { id: 'ref-5', type: 'article', title: 'Immunosuppression in Sepsis: Biomarkers and Specialized Pro-resolving Mediators', authors: ['Venet F', 'Monneret G'], source: 'Frontiers in Immunology. 2018;9:2237', license: 'CC BY 4.0' }
  ],
  crossReferences: [
    { targetId: 'infectious-disease-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis (Serious Infections module)' },
    { targetId: 'condition-neumonia-pneumonia', targetType: 'condition', relationship: 'related', label: 'Pneumonia - Common sepsis source' },
    { targetId: 'condition-infeccion-urinaria-uti', targetType: 'condition', relationship: 'related', label: 'UTI - Common sepsis source' }
  ],
  tags: {
    systems: ['immune', 'cardiovascular', 'respiratory', 'renal', 'hepatic', 'neurological'],
    topics: ['infectious-disease', 'critical-care', 'emergency-medicine'],
    keywords: ['sepsis', 'septicemia', 'choque septico', 'septic shock', 'SIRS', 'qSOFA', 'SOFA', 'disfuncion organica', 'organ dysfunction', 'surviving sepsis campaign', 'hour-1 bundle'],
    clinicalRelevance: 'critical'
  },
  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team']
};
