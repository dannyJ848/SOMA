import { EducationalContent } from '../types';

export const manejoViaAereaAirway: EducationalContent = {
  id: 'condition-manejo-via-aerea-airway',
  type: 'condition',
  name: 'Airway Management',
  nameEs: 'Manejo de Vía Aérea',
  alternateNames: ['Airway control', 'Control de vía aérea', 'Permeabilidad de vía aérea', 'Airway patency'],

  levels: {
    1: {
      level: 1,
      summary:
        'El manejo de la vía aérea significa asegurarse de que una persona puede respirar. Si algo bloquea el paso del aire, como la lengua, comida o hinchazón, hay que abrir el camino para que el aire llegue a los pulmones. | Airway management means making sure a person can breathe. If something blocks the air passage, like the tongue, food, or swelling, you need to open the path so air reaches the lungs.',
      explanation: `## Explicación Simple

### ¿Qué es la vía aérea?

La vía aérea es el camino que sigue el aire desde tu nariz y boca hasta tus pulmones. Piensa en ella como una tubería: si algo la tapa, el aire no puede pasar y la persona no puede respirar.

### ¿Qué puede bloquear la vía aérea?

- **La lengua**: Cuando una persona se desmaya, la lengua puede caer hacia atrás y tapar la garganta
- **Comida u objetos**: Un pedazo de comida o un objeto pequeño puede atorarse
- **Hinchazón**: Una reacción alérgica grave puede hacer que la garganta se hinche
- **Sangre o vómito**: Después de un golpe fuerte

### ¿Cómo ayudar?

#### Si una persona no respira pero no tiene lesión en el cuello:
1. **Inclinar la cabeza y levantar el mentón**: Pon una mano en la frente y con la otra levanta la barbilla. Esto mueve la lengua hacia adelante.

#### Si una persona puede tener lesión en el cuello (accidente):
1. **Tracción mandibular**: Sin mover el cuello, empuja la mandíbula hacia adelante poniendo los dedos detrás de los ángulos de la mandíbula.

#### Si alguien se atora con comida:
1. **Maniobra de Heimlich**: Abrazar a la persona por detrás y hacer presiones rápidas hacia arriba en el abdomen, justo encima del ombligo.

### ¿Cuándo llamar al 911?
- Si la persona no respira o tiene mucha dificultad
- Si se pone morada o azulada
- Si se desmaya
- Si la maniobra de Heimlich no funciona

---

## Simple Explanation (English)

### What is the airway?

The airway is the path air follows from your nose and mouth to your lungs. Think of it as a pipe: if something blocks it, air cannot pass and the person cannot breathe.

### What can block the airway?

- **The tongue**: When a person faints, the tongue can fall back and block the throat
- **Food or objects**: A piece of food or small object can get stuck
- **Swelling**: A severe allergic reaction can make the throat swell
- **Blood or vomit**: After a hard blow

### How to help?

#### Head tilt-chin lift (no neck injury suspected):
Place one hand on the forehead and lift the chin with the other. This moves the tongue forward.

#### Jaw thrust (possible neck injury):
Without moving the neck, push the jaw forward by placing fingers behind the jaw angles.

#### Heimlich maneuver (choking on food):
Hug the person from behind and make quick upward thrusts on the abdomen, just above the belly button.`,
      keyTerms: [
        { term: 'Vía aérea', definition: 'El camino del aire desde la nariz/boca hasta los pulmones: nariz, boca, faringe, laringe, tráquea. | The air path from the nose/mouth to the lungs: nose, mouth, pharynx, larynx, trachea.', pronunciation: 'VEE-ah ah-EH-reh-ah' },
        { term: 'Maniobra de Heimlich', definition: 'Compresiones abdominales rápidas para expulsar un objeto que bloquea la vía aérea. | Quick abdominal thrusts to expel an object blocking the airway.', pronunciation: 'mah-nee-OH-brah deh HAIM-lik' },
        { term: 'Tracción mandibular', definition: 'Mover la mandíbula hacia adelante sin mover el cuello para abrir la vía aérea. Usado cuando se sospecha lesión de cuello. | Moving the jaw forward without moving the neck to open the airway. Used when neck injury is suspected.', pronunciation: 'trac-see-ON man-dee-BOO-lar' },
        { term: 'Inclinación de cabeza-elevación del mentón', definition: 'Inclinar la cabeza hacia atrás y levantar la barbilla para abrir la vía aérea. No usar si hay sospecha de lesión cervical. | Tilting the head back and lifting the chin to open the airway. Do not use if cervical injury is suspected.', pronunciation: 'in-clee-nah-see-ON / men-TON' }
      ],
      analogies: [
        'La vía aérea es como una manguera de jardín. Si la doblas (como cuando la lengua cae hacia atrás), el agua (aire) no puede pasar. La tracción mandibular es como enderezar la manguera para que el agua fluya de nuevo. | The airway is like a garden hose. If you bend it (like when the tongue falls back), water (air) cannot pass. The jaw thrust is like straightening the hose so water flows again.',
        'La maniobra de Heimlich es como apretar un tubo de pasta de dientes desde abajo. La presión empuja lo que está atorado hacia afuera. | The Heimlich maneuver is like squeezing a toothpaste tube from the bottom. The pressure pushes what is stuck out.'
      ],
      examples: [
        'En una cena familiar, el abuelo empieza a toser y no puede hablar ni respirar. Tiene un pedazo de carne atorado. Su hijo se pone detrás de él, pone sus puños encima del ombligo y empuja fuerte hacia arriba. Después de tres intentos, la comida sale y el abuelo puede respirar. | At a family dinner, grandfather starts coughing and cannot speak or breathe. He has a piece of meat stuck. His son gets behind him, places his fists above the belly button, and pushes hard upward. After three attempts, the food comes out and grandfather can breathe.'
      ],
      patientCounselingPoints: [
        'Si una persona se desmaya, NO le pongas nada en la boca. Solo inclina la cabeza y levanta el mentón (si no hay sospecha de lesión de cuello). | If a person faints, do NOT put anything in their mouth. Just tilt the head and lift the chin (if no neck injury is suspected).',
        'Aprende la maniobra de Heimlich. Puede salvar la vida de un ser querido, especialmente de niños pequeños y ancianos. | Learn the Heimlich maneuver. It can save the life of a loved one, especially small children and the elderly.',
        'Si un bebé se atora, NO uses la maniobra de Heimlich. En lugar de eso, dale 5 golpes en la espalda y 5 compresiones en el pecho. | If a baby chokes, do NOT use the Heimlich maneuver. Instead, give 5 back blows and 5 chest compressions.'
      ]
    },
    2: {
      level: 2,
      summary:
        'El manejo de la vía aérea incluye técnicas básicas (posicionamiento, maniobras manuales, dispositivos orofaríngeos/nasofaríngeos) y avanzadas (intubación endotraqueal, dispositivos supraglóticos). La elección depende del nivel de consciencia, tipo de emergencia y recursos disponibles. | Airway management includes basic techniques (positioning, manual maneuvers, oropharyngeal/nasopharyngeal devices) and advanced techniques (endotracheal intubation, supraglottic devices). The choice depends on consciousness level, emergency type, and available resources.',
      explanation: `## Explicación Intermedia

### Evaluación de la Vía Aérea

Antes de intervenir, evalúa:
- ¿La persona habla? Si habla, la vía aérea está abierta
- ¿Hay ruidos respiratorios anormales? Estridor (sonido agudo), ronquido, gorgoteo
- ¿Hay signos de obstrucción? Uso de músculos accesorios, tiraje intercostal, cianosis

### Técnicas Básicas

#### 1. Maniobras Manuales
- **Extensión de cabeza y elevación del mentón**: Primera línea en pacientes sin trauma. Abre la vía aérea al desplazar la lengua anteriormente.
- **Tracción mandibular (Jaw thrust)**: Usada en trauma. Se colocan los dedos detrás del ángulo de la mandíbula y se empuja hacia adelante sin mover el cuello.
- **Triple maniobra**: Extensión de cabeza + apertura bucal + protrusión mandibular.

#### 2. Dispositivos Básicos
- **Cánula orofaríngea (Guedel)**: Tubo curvo que se inserta en la boca para mantener la lengua adelante. Solo para pacientes inconscientes (sin reflejo nauseoso), porque puede causar vómito.
- **Cánula nasofaríngea**: Tubo flexible que se inserta por la nariz. Mejor tolerada en pacientes semiconscientes. Contraindicada si se sospecha fractura de base de cráneo.

#### 3. Ventilación con Bolsa-Válvula-Mascarilla (BVM)
- Técnica C-E: Los dedos pulgar e índice forman la "C" sobre la mascarilla, los otros tres dedos la "E" en la mandíbula
- Asegurar sello hermético
- Comprimir la bolsa suavemente para dar volumen suficiente (ver elevación del tórax)
- Frecuencia: una ventilación cada 6 segundos en adultos

### Técnicas Avanzadas (Introducción)

- **Dispositivos supraglóticos**: Mascarilla laríngea (LMA), i-gel. Se insertan a ciegas sobre la laringe. Más fáciles que la intubación.
- **Intubación endotraqueal**: Tubo insertado directamente en la tráquea a través de las cuerdas vocales. Es la "vía aérea definitiva."
- **Cricotiroidotomía**: Vía aérea quirúrgica de emergencia a través de la membrana cricotiroidea. Último recurso.

---

## Intermediate Explanation (English)

### Airway Assessment
Evaluate: Can the person speak? Abnormal breath sounds (stridor, snoring, gurgling)? Signs of obstruction (accessory muscle use, intercostal retractions, cyanosis)?

### Basic Techniques
1. **Head tilt-chin lift**: First line in non-trauma patients
2. **Jaw thrust**: Used in trauma, protects cervical spine
3. **Oropharyngeal airway (OPA/Guedel)**: For unconscious patients without gag reflex
4. **Nasopharyngeal airway (NPA)**: Better tolerated in semiconscious patients; contraindicated in basilar skull fracture
5. **Bag-valve-mask (BVM) ventilation**: C-E technique for seal, gentle compressions

### Advanced Techniques (Introduction)
- **Supraglottic devices**: LMA, i-gel - blindly inserted over the larynx
- **Endotracheal intubation**: Tube through vocal cords into trachea - definitive airway
- **Cricothyrotomy**: Surgical emergency airway - last resort`,
      keyTerms: [
        { term: 'Cánula orofaríngea (Guedel)', definition: 'Dispositivo curvo insertado en la boca que mantiene la lengua alejada de la pared posterior de la faringe. Solo para pacientes inconscientes. | Curved device inserted in the mouth that keeps the tongue away from the posterior pharyngeal wall. Only for unconscious patients.', pronunciation: 'CAH-noo-lah oh-roh-fah-RIN-heh-ah' },
        { term: 'Cánula nasofaríngea', definition: 'Tubo flexible de goma insertado por la narina para mantener permeabilidad de la vía aérea. Mejor tolerada que la orofaríngea. | Flexible rubber tube inserted through the nostril to maintain airway patency. Better tolerated than oropharyngeal.', pronunciation: 'CAH-noo-lah nah-soh-fah-RIN-heh-ah' },
        { term: 'Mascarilla laríngea (LMA)', definition: 'Dispositivo supraglótico que se inserta a ciegas y se asienta sobre la entrada de la laringe, formando un sello para ventilación. | Supraglottic device blindly inserted that sits over the laryngeal inlet, forming a seal for ventilation.', pronunciation: 'mas-cah-REE-yah lah-RIN-heh-ah' },
        { term: 'Bolsa-válvula-mascarilla (BVM)', definition: 'Dispositivo de ventilación manual compuesto de bolsa autoinflable, válvula unidireccional y mascarilla facial. Permite ventilación con presión positiva. | Manual ventilation device composed of self-inflating bag, one-way valve, and face mask. Allows positive pressure ventilation.', pronunciation: 'BOL-sah VAL-voo-lah mas-cah-REE-yah' }
      ],
      analogies: [
        'La cánula orofaríngea es como un tope de puerta para la lengua: la mantiene en su lugar para que no bloquee el paso del aire. | The oropharyngeal airway is like a doorstop for the tongue: it keeps it in place so it does not block the air passage.'
      ],
      examples: [
        'Un paciente inconsciente con ronquido (signo de obstrucción por la lengua) recibe: tracción mandibular, se inserta cánula orofaríngea (no tiene reflejo nauseoso) y se ventila con BVM mientras se prepara para intubación. | An unconscious patient with snoring (sign of tongue obstruction) receives: jaw thrust, oropharyngeal airway insertion (no gag reflex), and BVM ventilation while preparing for intubation.'
      ],
      patientCounselingPoints: [
        'Si encuentra a alguien inconsciente pero respirando, colóquelo en posición de recuperación (de lado) para que la lengua no bloquee la vía aérea y para que no aspire si vomita. | If you find someone unconscious but breathing, place them in the recovery position (on their side) so the tongue does not block the airway and so they do not aspirate if they vomit.'
      ]
    },
    3: {
      level: 3,
      summary:
        'El manejo avanzado de la vía aérea incluye intubación endotraqueal con secuencia rápida (ISR), uso de videolaringoscopia, dispositivos supraglóticos de segunda generación, predicción de vía aérea difícil, y la vía aérea quirúrgica como último recurso. La evaluación previa con nemónicos como LEMON ayuda a predecir dificultad. | Advanced airway management includes rapid sequence intubation (RSI), videolaryngoscopy use, second-generation supraglottic devices, difficult airway prediction, and surgical airway as last resort. Pre-assessment with mnemonics like LEMON helps predict difficulty.',
      explanation: `## Explicación Avanzada

### Intubación Endotraqueal

#### Indicaciones
- GCS ≤ 8 (incapacidad de proteger vía aérea)
- Insuficiencia respiratoria refractaria
- Anticipación de deterioro (quemaduras faciales, anafilaxia, hematoma cervical expansivo)
- Necesidad de ventilación mecánica prolongada

#### Secuencia Rápida de Intubación (ISR/RSI)

**Preparación (7 Ps)**:
1. **Preparación**: Equipo, succión, monitorización, plan alternativo
2. **Preoxigenación**: O2 al 100% por 3-5 minutos (desnitrogenización para crear reserva de O2)
3. **Pretratamiento**: Fentanilo (para prevenir respuesta simpática), lidocaína (en PIC elevada) - controversial
4. **Parálisis con inducción**: Agente inductor + bloqueador neuromuscular simultáneamente
5. **Posicionamiento**: Posición de olfateo (sniffing position) - cuello flexionado, cabeza extendida
6. **Paso del tubo**: Laringoscopia directa o videolaringoscopia, inserción del tubo
7. **Post-intubación**: Confirmar posición (capnografía con forma de onda, auscultación bilateral), fijar tubo, ventilador

#### Agentes Farmacológicos

**Inductores:**
- **Etomidato**: 0.3 mg/kg IV - estable hemodinámicamente, ideal para la mayoría de situaciones
- **Ketamina**: 1-2 mg/kg IV - broncodilatador, mantiene PA, ideal en asma/hipotensión
- **Propofol**: 1-2 mg/kg IV - rápido, pero causa hipotensión significativa

**Bloqueadores neuromusculares:**
- **Succinilcolina**: 1.5 mg/kg IV - inicio rápido (45-60 seg), duración corta (6-10 min). Contraindicada en hiperpotasemia, quemaduras >24h, lesiones por denervación
- **Rocuronio**: 1.2 mg/kg IV - inicio 60-90 seg, duración 45-60 min. Reversible con sugammadex

### Predicción de Vía Aérea Difícil (LEMON)

- **L**ook externally: obesidad, cuello corto, macroglosia, trauma facial
- **E**valuate 3-3-2: 3 dedos apertura bucal, 3 dedos mentón-hioides, 2 dedos hioides-tiroides
- **M**allampati: Clase I-IV (visualización orofaríngea)
- **O**bstruction: masas, epiglotitis, hematoma, angioedema
- **N**eck mobility: limitada en trauma cervical, artritis reumatoide, espondilitis

### Vía Aérea Quirúrgica: Cricotiroidotomía

- **Indicación**: "No puedo intubar, no puedo ventilar" (CICV / CICO)
- **Técnica**: Incisión vertical en piel, horizontal en membrana cricotiroidea, inserción de tubo 6.0
- **Contraindicación relativa**: Niños < 10-12 años (usar cricotiroidotomía con aguja)
- La membrana cricotiroidea se localiza entre el cartílago tiroides y el cricoides

---

## Advanced Explanation (English)

### Endotracheal Intubation

#### RSI (Rapid Sequence Intubation) - The 7 Ps
1. **Preparation**: Equipment, suction, monitoring, backup plan
2. **Preoxygenation**: 100% O2 for 3-5 minutes
3. **Pretreatment**: Fentanyl, lidocaine (controversial)
4. **Paralysis with induction**: Induction agent + neuromuscular blocker simultaneously
5. **Positioning**: Sniffing position
6. **Placement**: Laryngoscopy and tube insertion
7. **Post-intubation**: Confirm with waveform capnography, secure tube

#### Pharmacological Agents
- **Etomidate** 0.3 mg/kg: hemodynamically stable
- **Ketamine** 1-2 mg/kg: bronchodilator, maintains BP
- **Succinylcholine** 1.5 mg/kg: rapid onset, short duration; contraindicated in hyperkalemia
- **Rocuronium** 1.2 mg/kg: reversible with sugammadex

### Difficult Airway Prediction (LEMON)
- Look, Evaluate 3-3-2, Mallampati, Obstruction, Neck mobility

### Surgical Airway: Cricothyrotomy
- Indication: Cannot intubate, cannot oxygenate (CICO)
- Vertical skin incision, horizontal membrane incision, tube insertion`,
      keyTerms: [
        { term: 'Secuencia rápida de intubación (ISR/RSI)', definition: 'Protocolo de intubación que administra simultáneamente un inductor y un bloqueador neuromuscular para lograr condiciones óptimas de intubación minimizando el riesgo de aspiración. | Protocol administering an inductor and neuromuscular blocker simultaneously for optimal intubation conditions while minimizing aspiration risk.', pronunciation: 'seh-CWEN-see-ah RAH-pee-dah' },
        { term: 'Etomidato', definition: 'Inductor anestésico de elección en ISR por su estabilidad hemodinámica. Dosis: 0.3 mg/kg IV. Precaución: supresión adrenal transitoria. | Anesthetic induction agent of choice in RSI for hemodynamic stability. Dose: 0.3 mg/kg IV. Caution: transient adrenal suppression.', pronunciation: 'eh-toh-mee-DAH-toh' },
        { term: 'Succinilcolina', definition: 'Bloqueador neuromuscular despolarizante de acción ultracorta (6-10 min). Inicio en 45-60 seg. Contraindicaciones: hiperpotasemia, quemaduras crónicas, miopatías. | Ultra-short-acting depolarizing neuromuscular blocker (6-10 min). Onset 45-60 sec. Contraindications: hyperkalemia, chronic burns, myopathies.', pronunciation: 'soo-see-nil-COH-lee-nah' },
        { term: 'Cricotiroidotomía', definition: 'Vía aérea quirúrgica de emergencia mediante incisión en la membrana cricotiroidea. Indicación: situación CICO (no puedo intubar, no puedo oxigenar). | Emergency surgical airway via incision in the cricothyroid membrane. Indication: CICO situation (cannot intubate, cannot oxygenate).', pronunciation: 'cree-coh-tee-roy-doh-toh-MEE-ah' },
        { term: 'Mallampati', definition: 'Clasificación de I-IV según estructuras orofaríngeas visibles con la boca abierta. Clase III-IV predice mayor dificultad para intubación. | Classification I-IV based on visible oropharyngeal structures with mouth open. Class III-IV predicts greater intubation difficulty.', pronunciation: 'mah-lam-PAH-tee' }
      ],
      clinicalNotes: `### Notas Clínicas / Clinical Notes

- La videolaringoscopia ha demostrado mejorar la tasa de éxito al primer intento comparada con laringoscopia directa, especialmente en vía aérea difícil.
- Videolaryngoscopy has been shown to improve first-pass success rate compared to direct laryngoscopy, especially in difficult airways.
- La capnografía con forma de onda es el estándar de oro para confirmar la posición del tubo endotraqueal. La auscultación sola no es suficiente.
- Waveform capnography is the gold standard for confirming endotracheal tube position. Auscultation alone is insufficient.
- La preoxigenación adecuada puede proporcionar 3-8 minutos de apnea segura en adultos sanos, pero mucho menos en obesos, embarazadas y niños.
- Adequate preoxygenation can provide 3-8 minutes of safe apnea in healthy adults, but much less in obese patients, pregnant women, and children.
- El sugammadex (16 mg/kg) puede revertir completamente el rocuronio en 2-3 minutos, proporcionando una red de seguridad en situaciones CICO.
- Sugammadex (16 mg/kg) can completely reverse rocuronium in 2-3 minutes, providing a safety net in CICO situations.`
    },
    4: {
      level: 4,
      summary:
        'El manejo avanzado de la vía aérea en emergencias integra evaluación sistemática de dificultad, selección farmacológica optimizada para el contexto clínico, videolaringoscopia como primera línea, algoritmos de vía aérea difícil con planes alternativos escalonados, y técnicas de rescate incluyendo dispositivos supraglóticos de segunda generación, bujías y cricotiroidotomía. La oxigenación apneica y el posicionamiento con rampa optimizan las condiciones. | Advanced emergency airway management integrates systematic difficulty assessment, context-optimized pharmacological selection, videolaryngoscopy as first line, difficult airway algorithms with escalating backup plans, and rescue techniques including second-generation supraglottic devices, bougies, and cricothyrotomy. Apneic oxygenation and ramped positioning optimize conditions.',
      explanation: `## Explicación de Nivel Profesional

### Optimización de la Intubación

#### Posicionamiento Avanzado
- **Posición en rampa** para pacientes obesos: Elevar cabeza, cuello y hombros hasta alinear el meato auditivo externo con la escotadura esternal
- **Trendelenburg inverso** a 25°: Reduce riesgo de aspiración y mejora mecánica respiratoria
- **Elevación de la cabeza del paciente**: Mejora la visualización laringoscópica

#### Oxigenación Apneica
- Cánula nasal a 15 L/min de O2 durante todo el intento de intubación
- Extiende el tiempo de apnea segura al proporcionar flujo pasivo de O2 a los alvéolos
- Estudios muestran extensión de 2-6 minutos adicionales de SpO2 >90%

#### Videolaringoscopia
- Actualmente recomendada como primera línea por múltiples sociedades
- Tipos: **hiperangulados** (GlideScope, McGrath) vs **geometría estándar** (C-MAC)
- Los hiperangulados mejoran la visualización glótica (Cormack-Lehane) pero pueden dificultar el paso del tubo; usar estilete pre-curvado
- La C-MAC permite técnica directa e indirecta

### Algoritmo de Vía Aérea Difícil

#### Plan A: Intubación con laringoscopia (máximo 3 intentos)
- Optimizar posición, succión, estilete/bujía, cambiar hoja/operador
- **Bujía (bougie)**: Guía elástica que se introduce a ciegas bajo la epiglotis; se confirma posición por "clics" traqueales
- Si falla: Plan B

#### Plan B: Dispositivo supraglótico (máximo 2 intentos)
- **Dispositivos de segunda generación**: i-gel, LMA ProSeal, LMA Supreme
- Permiten ventilación y pueden servir como conducto para intubación a ciegas o con fibrobroncoscopio
- Si falla: Plan C

#### Plan C: Ventilación con mascarilla facial
- Técnica bimanual con dos operadores
- Cánulas oro y nasofaríngeas
- Si falla: Plan D

#### Plan D: Vía aérea quirúrgica (CICO)
- **Cricotiroidotomía abierta**: Bisturí, dilatador, tubo 6.0
- **Técnica estándar**: Incisión vertical cutánea, incisión horizontal membranosa, bougie, tubo sobre bougie
- Alternativa: cricotiroidotomía con aguja + ventilación jet transtraqueal (solo temporal)

### Situaciones Especiales

#### Vía Aérea en Trauma
- Inmovilización cervical en línea (retirar parte anterior del collarín)
- Alta sospecha de columna cervical: videolaringoscopia preferida
- Lesión laringotraqueal: cricotiroidotomía puede estar contraindicada; considerar traqueostomía

#### Vía Aérea en Embarazo
- Mayor riesgo de vía aérea difícil (edema de mucosas, aumento de peso)
- Desaturación más rápida (menor CRF, mayor consumo de O2)
- Preoxigenación extendida, tubo de menor calibre (6.0-6.5), posición en rampa lateral izquierda

#### Vía Aérea en Pediatría
- Anatomía diferente: laringe anterior y cefálica, epiglotis más larga
- Hoja recta (Miller) preferida en lactantes
- Tubos sin globo en menores de 8 años (controversial, tendencia a usar con globo)
- Tamaño del tubo: (edad/4) + 3.5 con globo, (edad/4) + 4 sin globo

---

## Professional-Level Explanation (English)

### Intubation Optimization

#### Advanced Positioning
- **Ramped position** for obese patients: align external auditory meatus with sternal notch
- **Reverse Trendelenburg** at 25°: reduces aspiration risk
- **Apneic oxygenation**: Nasal cannula at 15 L/min O2 throughout intubation attempt

#### Videolaryngoscopy
- Recommended as first line by multiple societies
- Hyperangulated (GlideScope, McGrath) vs standard geometry (C-MAC)
- Use pre-curved stylet with hyperangulated blades

### Difficult Airway Algorithm: Plans A through D
- Plan A: Laryngoscopic intubation (max 3 attempts) with optimization
- Plan B: Supraglottic device (max 2 attempts, second-generation preferred)
- Plan C: Face mask ventilation (two-person technique)
- Plan D: Surgical airway (CICO) - open cricothyrotomy

### Special Situations
- **Trauma**: In-line stabilization, videolaryngoscopy preferred
- **Pregnancy**: Faster desaturation, smaller tube, ramped left lateral position
- **Pediatrics**: Anterior larynx, Miller blade preferred in infants, tube size (age/4)+3.5`,
      keyTerms: [
        { term: 'Oxigenación apneica', definition: 'Administración de O2 a alto flujo (15 L/min) por cánula nasal durante la laringoscopia para extender el tiempo de apnea segura mediante flujo pasivo de oxígeno a los alvéolos. | High-flow O2 delivery (15 L/min) via nasal cannula during laryngoscopy to extend safe apnea time through passive oxygen flow to alveoli.', pronunciation: 'ox-ee-heh-nah-see-ON ap-NEH-ee-cah' },
        { term: 'Bujía (bougie)', definition: 'Guía elástica semicurva insertada bajo la epiglotis para facilitar la intubación cuando la visualización de cuerdas vocales es subóptima. Se confirma posición por clics traqueales. | Semi-curved elastic guide inserted under the epiglottis to facilitate intubation when vocal cord visualization is suboptimal. Position confirmed by tracheal clicks.', pronunciation: 'boo-HEE-ah' },
        { term: 'Cormack-Lehane', definition: 'Clasificación de visualización laringoscópica: Grado I (glotis completa), II (glotis parcial), III (solo epiglotis), IV (nada). Grados III-IV = vía aérea difícil. | Laryngoscopic view classification: Grade I (full glottis), II (partial glottis), III (epiglottis only), IV (nothing). Grades III-IV = difficult airway.', pronunciation: 'COR-mac LEH-hayn' },
        { term: 'Sugammadex', definition: 'Ciclodextrina modificada que encapsula al rocuronio, revirtiendo completamente el bloqueo neuromuscular en 2-3 minutos a dosis de 16 mg/kg. Red de seguridad en CICO. | Modified cyclodextrin that encapsulates rocuronium, completely reversing neuromuscular blockade in 2-3 minutes at 16 mg/kg dose. Safety net in CICO.', pronunciation: 'soo-GAH-mah-dex' }
      ],
      clinicalNotes: `### Notas Clínicas Avanzadas / Advanced Clinical Notes

- El uso de bujía como primer intento (no solo rescate) ha demostrado mejorar la tasa de éxito al primer intento en estudios recientes (ensayo BEAM, Annals of Emergency Medicine 2018).
- Bougie use as first attempt (not just rescue) has been shown to improve first-pass success in recent studies (BEAM trial, Annals of Emergency Medicine 2018).
- La regla de los 3 intentos + 1: máximo 3 intentos de laringoscopia con cambios entre intentos + 1 intento por el más experto. Cada intento adicional aumenta significativamente las complicaciones.
- The 3+1 attempt rule: maximum 3 laryngoscopy attempts with changes between attempts + 1 attempt by most experienced provider. Each additional attempt significantly increases complications.
- La ketamina como agente inductor ha ganado popularidad por su perfil hemodinámico favorable (mantiene PA y FC) y propiedades broncodilatadoras. Es el inductor preferido en pacientes hipotensos o con broncoespasmo.
- Ketamine as induction agent has gained popularity for its favorable hemodynamic profile (maintains BP and HR) and bronchodilatory properties. It is the preferred inductor in hypotensive or bronchospastic patients.
- DSI (Delayed Sequence Intubation): Uso de ketamina a dosis disociativa para preoxigenar a pacientes agitados/delirantes que no toleran mascarilla facial, seguida luego de parálisis.
- DSI (Delayed Sequence Intubation): Use of dissociative-dose ketamine to preoxygenate agitated/delirious patients who cannot tolerate face mask, followed later by paralysis.`
    },
    5: {
      level: 5,
      summary:
        'El manejo de la vía aérea basado en evidencia actual integra videolaringoscopia de primera línea, uso rutinario de bujía, oxigenación apneica con alto flujo, selección farmacológica individualizada (con predominio de ketamina y rocuronio), algoritmos escalonados de vía aérea difícil, intubación de secuencia retardada para pacientes que no cooperan, y cricotiroidotomía con técnica estandarizada como última línea. La evidencia de ensayos como BEAM, FELLOW, y múltiples registros informa la práctica contemporánea. | Current evidence-based airway management integrates first-line videolaryngoscopy, routine bougie use, high-flow apneic oxygenation, individualized pharmacological selection (with ketamine and rocuronium predominance), escalating difficult airway algorithms, delayed sequence intubation for uncooperative patients, and standardized technique cricothyrotomy as last resort. Evidence from trials like BEAM, FELLOW, and multiple registries informs contemporary practice.',
      explanation: `## Explicación de Nivel Clínico Experto

### Evidencia Contemporánea en Manejo de Vía Aérea

#### Videolaringoscopia vs Laringoscopia Directa
- **Ensayo DEVICE (Prekker et al., NEJM 2023)**: Videolaringoscopia con C-MAC vs laringoscopia directa en intubación traqueal de emergencia. VL mejoró el éxito al primer intento (85.1% vs 70.8%; diferencia absoluta 14.3%, IC 95% 9.9-18.7).
- La videolaringoscopia es ahora recomendada como técnica de primera línea por la Difficult Airway Society (DAS 2015), NAEMSP y múltiples organizaciones.
- Sin embargo, mantener competencia en laringoscopia directa es esencial como respaldo.

#### Uso de Bujía
- **Ensayo BEAM (Driver et al., Annals Emerg Med 2018)**: Bujía como primer intento vs estilete endotraqueal. Éxito al primer intento: 98% vs 87% (p=0.008), especialmente beneficioso en Cormack-Lehane ≥ grado 3.
- La bujía debe considerarse de primera línea, no solo como técnica de rescate.
- El uso combinado de videolaringoscopia + bujía maximiza el éxito al primer intento.

#### Selección Farmacológica: Evidencia Actual

**Ketamina vs Etomidato:**
- Históricamente, el etomidato dominó la ISR por estabilidad hemodinámica.
- La supresión adrenal por etomidato (incluso dosis única) ha generado controversia, especialmente en sepsis.
- Múltiples estudios observacionales y un ensayo (EvK trial) no han mostrado diferencia clínica significativa en mortalidad entre ketamina y etomidato.
- Tendencia actual: ketamina como inductor preferido por perfil hemodinámico, broncodilatación y ausencia de supresión adrenal.

**Rocuronio vs Succinilcolina:**
- Ambos proporcionan condiciones de intubación adecuadas.
- **Succinilcolina**: Inicio más rápido (45-60s vs 60-90s), duración corta. Pero: contraindicaciones significativas (hiperpotasemia) y riesgo de hipertermia maligna.
- **Rocuronio a dosis de 1.2 mg/kg**: Con sugammadex disponible como reversión completa, el perfil de seguridad favorece al rocuronio.
- Tendencia actual: Rocuronio preferido cuando hay sugammadex disponible.

#### Intubación de Secuencia Retardada (DSI)
- Concepto: Usar ketamina a dosis disociativa (1-2 mg/kg IV) como "preoxigenación farmacológica" en pacientes agitados/delirantes que no cooperan con la mascarilla de preoxigenación.
- Después de la disociación: preoxigenar durante 3 minutos con O2 al 100%, luego proceder con parálisis.
- Registro NEAR (Weingart et al.): Técnica factible y segura con alta tasa de éxito.

#### Oxigenación con Alto Flujo Nasal (HFNO)
- Cánula nasal de alto flujo a 40-70 L/min con FiO2 1.0 durante preoxigenación y laringoscopia
- Genera PEEP fisiológico (2-5 cmH2O), mejora reclutamiento alveolar
- Ensayo FELLOW: HFNO durante intubación en UCI no demostró prevención significativa de desaturación vs oxígeno estándar; sin embargo, la evidencia en emergencias sigue en evolución

#### Cricotiroidotomía: Técnica Estandarizada
- La técnica de "bisturí-bougie-tubo" (scalpel-bougie-tube) es la más rápida y tiene mayor tasa de éxito en estudios con cadáveres y modelos.
- Pasos: incisión vertical cutánea 4 cm, palpación de membrana cricotiroidea, incisión horizontal membranosa, inserción de bujía, avanzar tubo 6.0 sobre bujía.
- Tasa de éxito reportada: >90% en primeros intentos cuando se practica regularmente.

#### Extubación de Alto Riesgo
- Evaluación antes de extubación: prueba de fuga del globo, capacidad de proteger vía aérea, intercambio gaseoso adecuado
- Considerar catéter de intercambio de vía aérea (AEC) como puente en pacientes de alto riesgo
- Plan de reintubación antes de extubar

---

## Expert Clinical-Level Explanation (English)

### Contemporary Evidence in Airway Management

#### Videolaryngoscopy vs Direct Laryngoscopy
- **DEVICE Trial (NEJM 2023)**: VL improved first-pass success (85.1% vs 70.8%)
- Now recommended as first-line by DAS, NAEMSP, and multiple organizations

#### Bougie Use
- **BEAM Trial**: Bougie as first attempt improved success (98% vs 87%), especially in Cormack-Lehane ≥ grade 3
- Combined VL + bougie maximizes first-pass success

#### Pharmacological Selection
- Ketamine trending as preferred inductor (hemodynamic stability, bronchodilation, no adrenal suppression)
- Rocuronium preferred when sugammadex available (safety profile)

#### Delayed Sequence Intubation (DSI)
- Dissociative ketamine for "pharmacological preoxygenation" in uncooperative patients

#### High-Flow Nasal Oxygen (HFNO)
- 40-70 L/min with FiO2 1.0 during preoxygenation and laryngoscopy
- Generates physiological PEEP, improves alveolar recruitment

#### Standardized Cricothyrotomy
- Scalpel-bougie-tube technique: fastest, highest success rate
- >90% first-attempt success when practiced regularly`,
      keyTerms: [
        { term: 'Intubación de secuencia retardada (DSI)', definition: 'Técnica que usa ketamina a dosis disociativa para permitir preoxigenación en pacientes agitados que no toleran mascarilla, seguida de parálisis convencional y laringoscopia. | Technique using dissociative-dose ketamine to allow preoxygenation in agitated patients who cannot tolerate a mask, followed by conventional paralysis and laryngoscopy.', pronunciation: 'seh-CWEN-see-ah reh-tar-DAH-dah' },
        { term: 'HFNO (High-Flow Nasal Oxygen)', definition: 'Oxígeno nasal a alto flujo (40-70 L/min) que genera PEEP fisiológico, mejora reclutamiento alveolar y puede extender el tiempo de apnea segura durante la intubación. | High-flow nasal oxygen (40-70 L/min) generating physiological PEEP, improving alveolar recruitment, and potentially extending safe apnea time during intubation.', pronunciation: 'HFNO (acrónimo inglés)' },
        { term: 'Técnica bisturí-bujía-tubo', definition: 'Técnica estandarizada de cricotiroidotomía: incisión vertical cutánea, incisión horizontal membranosa, inserción de bujía, avance del tubo sobre la bujía. Mayor tasa de éxito que técnicas con kit. | Standardized cricothyrotomy technique: vertical skin incision, horizontal membrane incision, bougie insertion, tube advancement over bougie. Higher success rate than kit-based techniques.', pronunciation: 'bis-too-REE boo-HEE-ah TOO-boh' },
        { term: 'Catéter de intercambio de vía aérea (AEC)', definition: 'Catéter hueco largo que se deja a través del tubo endotraqueal antes de la extubación para permitir reintubación rápida o insuflación de oxígeno si la extubación falla. | Long hollow catheter left through the endotracheal tube before extubation to allow rapid reintubation or oxygen insufflation if extubation fails.', pronunciation: 'cah-TEH-ter deh in-ter-CAM-bee-oh' }
      ],
      clinicalNotes: `### Notas Clínicas de Nivel Experto / Expert Clinical Notes

- El ensayo DEVICE (NEJM 2023) establece la videolaringoscopia como estándar de cuidado para intubación de emergencia. Sin embargo, la competencia en laringoscopia directa debe mantenerse para situaciones donde VL no esté disponible o falle.
- The DEVICE trial (NEJM 2023) establishes videolaryngoscopy as standard of care for emergency intubation. However, direct laryngoscopy competency must be maintained for situations where VL is unavailable or fails.
- La combinación de VL + bujía + oxigenación apneica + posición en rampa representa la optimización máxima actual del primer intento de intubación.
- The combination of VL + bougie + apneic oxygenation + ramped positioning represents the current maximum optimization of first intubation attempt.
- El concepto de "primera laringoscopia es la mejor laringoscopia" refleja la evidencia de que cada intento adicional aumenta exponencialmente las complicaciones (hipoxia, aspiración, edema, bradicardia, paro).
- The concept of "first laryngoscopy is the best laryngoscopy" reflects evidence that each additional attempt exponentially increases complications (hypoxia, aspiration, edema, bradycardia, arrest).
- La práctica regular de cricotiroidotomía en simulación (cadáveres, modelos) es esencial, ya que la frecuencia real del procedimiento es baja (<1% de manejos de vía aérea) pero las consecuencias de fallar son catastróficas.
- Regular cricothyrotomy practice in simulation (cadavers, models) is essential, as actual procedure frequency is low (<1% of airway managements) but failure consequences are catastrophic.
- La tendencia hacia "ketamina + rocuronio + sugammadex" como tripleta estándar de ISR refleja la evolución de la evidencia hacia menor supresión adrenal, reversibilidad del bloqueo neuromuscular y estabilidad hemodinámica.
- The trend toward "ketamine + rocuronium + sugammadex" as the standard RSI triad reflects evolving evidence toward less adrenal suppression, neuromuscular blockade reversibility, and hemodynamic stability.`
    }
  },

  media: [],
  citations: [
    { id: 'ref-va-1', type: 'journal', title: 'Effect of Video Laryngoscopy vs Direct Laryngoscopy on First-Pass Tracheal Intubation (DEVICE)', authors: ['Prekker ME', 'Driver BE', 'Ginde AA', 'et al.'], source: 'N Engl J Med. 2023;389(22):2035-2046', license: 'CC BY 4.0' },
    { id: 'ref-va-2', type: 'journal', title: 'Effect of Use of a Bougie vs Endotracheal Tube and Stylet on First-Attempt Intubation Success (BEAM)', authors: ['Driver BE', 'Prekker ME', 'Klein LR', 'et al.'], source: 'Ann Emerg Med. 2018;72(5):579-585', license: 'CC BY 4.0' },
    { id: 'ref-va-3', type: 'guideline', title: 'Difficult Airway Society 2015 Guidelines for Management of Unanticipated Difficult Intubation in Adults', authors: ['Frerk C', 'Mitchell VS', 'McNarry AF', 'et al.'], source: 'Br J Anaesth. 2015;115(6):827-848', license: 'CC BY 4.0' },
    { id: 'ref-va-4', type: 'journal', title: 'Delayed Sequence Intubation: A Prospective Observational Study', authors: ['Weingart SD', 'Trueger NS', 'Wong N', 'et al.'], source: 'Ann Emerg Med. 2015;65(4):349-355', license: 'CC BY 4.0' },
    { id: 'ref-va-5', type: 'textbook', title: 'The Walls Manual of Emergency Airway Management, 5th Edition', authors: ['Brown CA', 'Sakles JC', 'Mick NW'], source: 'Wolters Kluwer, 2018', license: 'CC BY 4.0' }
  ],
  crossReferences: [
    { targetId: 'condition-paro-cardiaco-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Paro Cardíaco / Cardiac Arrest' },
    { targetId: 'condition-trauma-assessment-evaluacion', targetType: 'condition', relationship: 'related', label: 'Evaluación de Trauma / Trauma Assessment' },
  ],
  tags: {
    systems: ['respiratory', 'emergency'],
    topics: ['airway management', 'intubation', 'RSI', 'cricothyrotomy', 'ventilation'],
    keywords: ['vía aérea', 'intubación', 'ISR', 'cricotiroidotomía', 'laringoscopia', 'BVM', 'CICO', 'tracción mandibular'],
    clinicalRelevance: 'critical' as const
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team']
};
