import { EducationalContent } from '../types';

export const choqueShockStates: EducationalContent = {
  id: 'condition-choque-shock-states',
  type: 'condition',
  name: 'Shock States',
  nameEs: 'Estados de Choque',
  alternateNames: ['Choque', 'Shock', 'Estado de choque', 'Insuficiencia circulatoria aguda', 'Hipoperfusión tisular'],

  levels: {
    1: {
      level: 1,
      summary:
        'El choque (shock) ocurre cuando el cuerpo no recibe suficiente sangre y oxígeno. Esto puede pasar por sangrado, problemas del corazón, infecciones graves o reacciones alérgicas. Es una emergencia que necesita tratamiento inmediato. | Shock occurs when the body does not receive enough blood and oxygen. This can happen due to bleeding, heart problems, severe infections, or allergic reactions. It is an emergency that needs immediate treatment.',
      explanation: `## Explicación Simple

### ¿Qué es el choque?

Imagina que tu cuerpo es una ciudad y la sangre es el sistema de agua. El choque ocurre cuando no llega suficiente "agua" (sangre) a todas las partes de la "ciudad" (cuerpo). Sin sangre, los órganos no reciben oxígeno y empiezan a fallar.

### Tipos de choque (explicados de forma simple)

#### 1. Choque por sangrado (Hipovolémico)
La causa más fácil de entender: la persona pierde mucha sangre (por un accidente, herida o sangrado interno). Es como si la tubería de agua de la ciudad tuviera una fuga grande y no hubiera suficiente agua para todos.

#### 2. Choque del corazón (Cardiogénico)
El corazón está dañado y no puede bombear bien. Es como si la bomba de agua de la ciudad se descompusiera: hay suficiente agua, pero la bomba no puede moverla.

#### 3. Choque por infección (Séptico) y alergia (Anafiláctico)
Estos son tipos de "choque distributivo." Los vasos sanguíneos se abren demasiado y la sangre se estanca. Es como si las tuberías de la ciudad se hicieran muy anchas: hay agua, pero la presión cae y no llega a todos los pisos de los edificios.

#### 4. Choque por obstrucción (Obstructivo)
Algo bloquea el flujo de sangre al corazón o desde el corazón. Es como si alguien pusiera un tapón en la tubería principal de la ciudad.

### ¿Cómo se ve una persona en choque?

- Piel pálida, fría y sudorosa
- Pulso rápido y débil
- Respiración rápida
- Confusión o mareo
- Poca o ninguna orina
- En casos graves: pérdida de consciencia

### ¿Qué hacer?

1. Llamar al 911 inmediatamente
2. Acostar a la persona y elevar las piernas (si no hay lesión en la cabeza, cuello o piernas)
3. Cubrir con una manta para mantener caliente
4. Si hay sangrado visible, presionar fuerte con una tela limpia
5. NO dar comida ni bebida

---

## Simple Explanation (English)

### What is shock?

Imagine your body is a city and blood is the water system. Shock happens when not enough "water" (blood) reaches all parts of the "city" (body). Without blood, organs do not receive oxygen and begin to fail.

### Types of shock (simply explained)

1. **Bleeding shock (Hypovolemic)**: Too much blood lost - like a large leak in the city water pipes
2. **Heart shock (Cardiogenic)**: Heart cannot pump well - like a broken water pump
3. **Infection/allergy shock (Distributive)**: Blood vessels open too wide - like pipes becoming too wide, losing pressure
4. **Blockage shock (Obstructive)**: Something blocks blood flow - like a plug in the main pipe

### What does a person in shock look like?
Pale, cold, sweaty skin; rapid weak pulse; rapid breathing; confusion; little or no urine

### What to do?
Call 911, lay the person down, elevate legs, cover with blanket, control visible bleeding, do NOT give food or drink.`,
      keyTerms: [
        { term: 'Choque / Shock', definition: 'Cuando los órganos del cuerpo no reciben suficiente sangre y oxígeno para funcionar. Es una emergencia que puede causar la muerte si no se trata. | When the body\'s organs do not receive enough blood and oxygen to function. It is an emergency that can cause death if untreated.', pronunciation: 'CHOH-keh' },
        { term: 'Hipovolemia', definition: 'No tener suficiente líquido (sangre) en el cuerpo, generalmente por sangrado. | Not having enough fluid (blood) in the body, usually from bleeding.', pronunciation: 'ee-poh-voh-LEH-mee-ah' },
        { term: 'Hipotensión', definition: 'Presión arterial muy baja. Es una señal de que algo está mal con la circulación de la sangre. | Very low blood pressure. It is a sign that something is wrong with blood circulation.', pronunciation: 'ee-poh-ten-see-ON' },
        { term: 'Perfusión', definition: 'El flujo de sangre a través de los órganos y tejidos. Buena perfusión = los órganos reciben oxígeno. | Blood flow through organs and tissues. Good perfusion = organs receive oxygen.', pronunciation: 'per-foo-see-ON' }
      ],
      analogies: [
        'El choque hipovolémico es como un tanque de gasolina con una fuga: el carro se queda sin gasolina y no puede funcionar. El tratamiento es reparar la fuga y rellenar el tanque. | Hypovolemic shock is like a gas tank with a leak: the car runs out of gas and cannot function. Treatment is to fix the leak and refill the tank.',
        'El choque cardiogénico es como un motor descompuesto: hay gasolina en el tanque, pero el motor no puede usarla. Necesitas reparar el motor. | Cardiogenic shock is like a broken engine: there is gas in the tank, but the engine cannot use it. You need to fix the engine.',
        'El choque séptico es como un sistema de riego donde todas las válvulas se abren al mismo tiempo: hay suficiente agua, pero la presión cae y ninguna planta recibe suficiente. | Septic shock is like an irrigation system where all valves open at once: there is enough water, but pressure drops and no plant gets enough.'
      ],
      examples: [
        'Una mujer en un accidente de auto tiene una herida grande en la pierna que sangra mucho. Su piel está pálida, su corazón late muy rápido y se siente mareada. Esto es choque hipovolémico. Los paramédicos presionan la herida, le ponen suero por las venas y la llevan rápido al hospital. | A woman in a car accident has a large wound on her leg that bleeds a lot. Her skin is pale, her heart beats very fast, and she feels dizzy. This is hypovolemic shock. Paramedics press on the wound, give her IV fluids, and rush her to the hospital.',
        'Un niño come un cacahuate y le empieza a hinchar la cara, le cuesta respirar y su presión baja mucho. Esto es choque anafiláctico. Le ponen una inyección de epinefrina (EpiPen) y mejora rápidamente. | A child eats a peanut and his face starts swelling, he has trouble breathing, and his blood pressure drops a lot. This is anaphylactic shock. They give him an epinephrine injection (EpiPen) and he improves quickly.'
      ],
      patientCounselingPoints: [
        'Si alguien tiene alergia severa conocida, debe llevar siempre su autoinyector de epinefrina (EpiPen) y saber usarlo. | If someone has a known severe allergy, they should always carry their epinephrine auto-injector (EpiPen) and know how to use it.',
        'Reconocer los signos de choque temprano (piel pálida, pulso rápido, confusión) puede salvar una vida. No esperes a que la persona se desmaye para llamar al 911. | Recognizing early shock signs (pale skin, rapid pulse, confusion) can save a life. Do not wait until the person faints to call 911.'
      ]
    },
    2: {
      level: 2,
      summary:
        'El choque es un estado de hipoperfusión tisular donde los órganos no reciben suficiente oxígeno. Se clasifica en cuatro categorías principales: hipovolémico (pérdida de volumen), cardiogénico (falla de bomba), distributivo (vasodilatación) y obstructivo (bloqueo del flujo). Cada tipo tiene causas, signos y tratamientos diferentes. | Shock is a state of tissue hypoperfusion where organs do not receive enough oxygen. It is classified into four main categories: hypovolemic (volume loss), cardiogenic (pump failure), distributive (vasodilation), and obstructive (flow obstruction). Each type has different causes, signs, and treatments.',
      explanation: `## Explicación Intermedia

### Clasificación del Choque

#### 1. Choque Hipovolémico
**Causa**: Pérdida de volumen intravascular
- **Hemorrágico**: Trauma, sangrado GI, ruptura de aneurisma, sangrado obstétrico
- **No hemorrágico**: Deshidratación severa, quemaduras extensas, tercer espacio

**Signos**: Taquicardia, hipotensión, piel fría y pálida, venas del cuello planas, oliguria
**Tratamiento**: Control de la fuente de sangrado + reposición de volumen (cristaloides, hemoderivados)

#### 2. Choque Cardiogénico
**Causa**: Falla del corazón como bomba
- Infarto agudo de miocardio extenso, miocarditis, valvulopatía aguda, arritmias
- El ventrículo izquierdo no puede eyectar suficiente sangre

**Signos**: Taquicardia, hipotensión, piel fría, venas del cuello distendidas, edema pulmonar (crépitos), galope S3
**Tratamiento**: Tratar la causa (cateterismo, antiarrítmicos), vasopresores/inotrópicos, soporte mecánico

#### 3. Choque Distributivo
**Causa**: Vasodilatación inapropiada con mala distribución del flujo sanguíneo

**Subtipos:**
- **Séptico**: Infección sistémica descontrolada. Es el tipo más común de choque en UCI.
  - Signos: Fiebre/hipotermia, taquicardia, piel caliente (inicialmente), leucocitosis/leucopenia
  - Tratamiento: Antibióticos tempranos + líquidos + vasopresores (norepinefrina)

- **Anafiláctico**: Reacción alérgica severa (IgE mediada)
  - Signos: Urticaria, angioedema, broncoespasmo, hipotensión
  - Tratamiento: **Epinefrina IM** (primera línea), líquidos, antihistamínicos, corticoides

- **Neurogénico**: Lesión medular alta (por encima de T6)
  - Signos: Bradicardia (único choque con bradicardia), hipotensión, piel caliente
  - Tratamiento: Líquidos + vasopresores (fenilefrina o norepinefrina)

#### 4. Choque Obstructivo
**Causa**: Obstrucción mecánica al flujo sanguíneo

**Subtipos:**
- **Neumotórax a tensión**: Aire comprime el corazón y grandes vasos
- **Taponamiento cardíaco**: Líquido en el pericardio comprime el corazón
- **Embolismo pulmonar masivo**: Coágulo bloquea la arteria pulmonar

**Signos**: Hipotensión, venas del cuello distendidas, signos específicos de la causa
**Tratamiento**: Resolver la obstrucción (descompresión, pericardiocentesis, trombolisis)

---

## Intermediate Explanation (English)

### Shock Classification

1. **Hypovolemic**: Volume loss (hemorrhagic: trauma, GI bleed; non-hemorrhagic: dehydration, burns)
   - Signs: Tachycardia, hypotension, cold/pale skin, flat neck veins
   - Treatment: Stop bleeding + volume replacement

2. **Cardiogenic**: Pump failure (MI, myocarditis, arrhythmias)
   - Signs: Tachycardia, hypotension, cold skin, distended neck veins, pulmonary edema
   - Treatment: Treat cause, vasopressors/inotropes, mechanical support

3. **Distributive**: Inappropriate vasodilation
   - Septic (most common in ICU): Early antibiotics + fluids + norepinephrine
   - Anaphylactic: **IM Epinephrine** first line
   - Neurogenic: Bradycardia + hypotension; fluids + vasopressors

4. **Obstructive**: Mechanical flow obstruction
   - Tension pneumothorax, cardiac tamponade, massive PE
   - Treatment: Relieve the obstruction`,
      keyTerms: [
        { term: 'Choque hipovolémico', definition: 'Choque causado por pérdida de volumen intravascular (sangre, plasma, líquidos). El corazón no tiene suficiente volumen para bombear. | Shock caused by intravascular volume loss (blood, plasma, fluids). The heart does not have enough volume to pump.', pronunciation: 'CHOH-keh ee-poh-voh-LEH-mee-coh' },
        { term: 'Choque cardiogénico', definition: 'Choque causado por falla del corazón como bomba. Hay suficiente volumen pero el corazón no puede eyectarlo eficientemente. | Shock caused by heart failure as a pump. There is enough volume but the heart cannot eject it efficiently.', pronunciation: 'CHOH-keh car-dee-oh-HEH-nee-coh' },
        { term: 'Choque séptico', definition: 'Subtipo de choque distributivo causado por respuesta sistémica desregulada a una infección, con vasodilatación e hipoperfusión que persiste pese a reanimación con líquidos. | Subtype of distributive shock caused by dysregulated systemic response to infection, with vasodilation and hypoperfusion persisting despite fluid resuscitation.', pronunciation: 'CHOH-keh SEP-tee-coh' },
        { term: 'Choque anafiláctico', definition: 'Reacción alérgica severa mediada por IgE que causa vasodilatación masiva, broncoespasmo y angioedema. Tratamiento: epinefrina IM inmediata. | Severe IgE-mediated allergic reaction causing massive vasodilation, bronchospasm, and angioedema. Treatment: immediate IM epinephrine.', pronunciation: 'CHOH-keh ah-nah-fee-LAC-tee-coh' },
        { term: 'Choque obstructivo', definition: 'Choque causado por obstrucción mecánica extracardíaca al flujo sanguíneo: neumotórax a tensión, taponamiento cardíaco o embolismo pulmonar masivo. | Shock caused by extracardiac mechanical obstruction to blood flow: tension pneumothorax, cardiac tamponade, or massive pulmonary embolism.', pronunciation: 'CHOH-keh obs-truc-TEE-voh' }
      ],
      analogies: [
        'Para distinguir los tipos de choque, piensa en un sistema de calefacción por agua caliente: Hipovolémico = no hay suficiente agua en el sistema; Cardiogénico = la bomba está rota; Distributivo = todas las válvulas están abiertas y se pierde la presión; Obstructivo = hay un bloqueo en las tuberías que impide que el agua fluya. | To distinguish shock types, think of a hot water heating system: Hypovolemic = not enough water; Cardiogenic = broken pump; Distributive = all valves open, pressure lost; Obstructive = blockage in pipes preventing flow.'
      ],
      examples: [
        'Un paciente llega a urgencias con dolor en el pecho, presión muy baja, piel fría, venas del cuello hinchadas y crépitos en los pulmones. Este cuadro sugiere choque cardiogénico: el corazón no puede bombear bien, la sangre se acumula en los pulmones y no llega suficiente al cuerpo. | A patient arrives at the ER with chest pain, very low blood pressure, cold skin, distended neck veins, and crackles in the lungs. This picture suggests cardiogenic shock: the heart cannot pump well, blood backs up into the lungs, and not enough reaches the body.'
      ],
      patientCounselingPoints: [
        'Si tienes alergia severa, siempre lleva dos autoinyectores de epinefrina. El primero puede no ser suficiente y necesitas un segundo disponible. | If you have a severe allergy, always carry two epinephrine auto-injectors. The first may not be enough and you need a second available.',
        'Si alguien en tu familia ha tenido un infarto, es importante reconocer los signos: dolor en el pecho, dificultad para respirar, sudoración. Actuar rápido puede prevenir el choque cardiogénico. | If someone in your family has had a heart attack, it is important to recognize the signs: chest pain, difficulty breathing, sweating. Acting quickly can prevent cardiogenic shock.'
      ]
    },
    3: {
      level: 3,
      summary:
        'El manejo del choque requiere identificación rápida del tipo, reanimación agresiva dirigida por objetivos, tratamiento de la causa subyacente y monitorización continua. El enfoque varía según la fisiopatología: reposición de volumen en hipovolémico, soporte inotrópico en cardiogénico, antibióticos y vasopresores en séptico, y resolución de la obstrucción en obstructivo. La ecografía point-of-care es fundamental para el diagnóstico diferencial. | Shock management requires rapid type identification, aggressive goal-directed resuscitation, underlying cause treatment, and continuous monitoring. The approach varies by pathophysiology: volume replacement in hypovolemic, inotropic support in cardiogenic, antibiotics and vasopressors in septic, and obstruction resolution in obstructive. Point-of-care ultrasound is fundamental for differential diagnosis.',
      explanation: `## Explicación Avanzada

### Fisiopatología Unificada del Choque

El gasto cardíaco (GC) se determina por: **GC = Frecuencia Cardíaca × Volumen Sistólico**

El volumen sistólico depende de:
- **Precarga**: Volumen que llena el corazón (reducido en hipovolémico y obstructivo)
- **Contractilidad**: Fuerza del corazón (reducida en cardiogénico)
- **Postcarga**: Resistencia contra la que bombea el corazón (reducida en distributivo)

La presión arterial se determina por: **PA = GC × Resistencia Vascular Sistémica (RVS)**

### Evaluación por Ecografía Point-of-Care (POCUS)

El protocolo **RUSH (Rapid Ultrasound in Shock and Hypotension)** evalúa:

#### "La Bomba" (Corazón)
- Contractilidad global del ventrículo izquierdo
- Dilatación del ventrículo derecho (sugestivo de TEP, hipertensión pulmonar)
- Derrame pericárdico/taponamiento
- Fracción de eyección visual estimada

#### "El Tanque" (Volumen)
- Vena cava inferior (VCI): diámetro y colapsabilidad con respiración
  - VCI colapsada (<1 cm): hipovolemia probable
  - VCI distendida (>2.5 cm) sin variación: sobrecarga/obstrucción
- FAST: líquido libre abdominal
- Pulmones: Líneas B (edema), deslizamiento pleural (neumotórax)

#### "Las Tuberías" (Vasos)
- Aorta abdominal: aneurisma
- Venas femorales: TVP (asociado a TEP)

### Manejo por Tipo de Choque

#### Choque Hipovolémico Hemorrágico
1. Control de la hemorragia (presión directa, torniquete, cirugía)
2. Reanimación hemostática: protocolo de transfusión masiva 1:1:1
3. Ácido tranexámico 1g IV en < 3 horas
4. Hipotensión permisiva (PAS 80-90) hasta control quirúrgico (excepto en TCE)
5. Evitar cristaloides en exceso (empeora coagulopatía dilucional)

#### Choque Cardiogénico
1. Identificar causa: ECG (IAM), ecocardiograma (valvulopatía, miocarditis)
2. **Vasopresores/inotrópicos**: Norepinefrina (primera línea), dobutamina si necesita inotrópico
3. Cateterismo cardíaco urgente si IAM
4. Soporte mecánico: balón de contrapulsación, Impella, ECMO-VA
5. Evitar sobrecarga de volumen

#### Choque Séptico
1. **Hora dorada de sepsis**:
   - Lactato sérico
   - Hemocultivos antes de antibióticos
   - Antibióticos de amplio espectro en < 1 hora
   - Cristaloides 30 mL/kg en las primeras 3 horas si hipotensión o lactato ≥ 4
2. **Vasopresores**: Norepinefrina primera línea (objetivo PAM ≥ 65 mmHg)
3. Si refractario: agregar vasopresina 0.03 U/min, luego considerar epinefrina
4. Hidrocortisona 200 mg/día si choque refractario a vasopresores

#### Choque Obstructivo
- **Neumotórax a tensión**: Descompresión con aguja → tubo de tórax
- **Taponamiento cardíaco**: Pericardiocentesis guiada por ecografía
- **TEP masivo**: Trombolisis sistémica (alteplasa 100 mg IV), embolectomía quirúrgica o por catéter

---

## Advanced Explanation (English)

### Unified Shock Pathophysiology

CO = HR × SV; SV depends on preload, contractility, afterload; BP = CO × SVR

### POCUS Assessment (RUSH Protocol)
- "The Pump": LV contractility, RV dilation, pericardial effusion
- "The Tank": IVC diameter/collapsibility, FAST, lung ultrasound
- "The Pipes": Aorta, femoral veins

### Management by Shock Type
- **Hypovolemic hemorrhagic**: Hemorrhage control, massive transfusion 1:1:1, TXA, permissive hypotension
- **Cardiogenic**: Norepinephrine first line, cateterization for MI, mechanical support
- **Septic**: Golden hour (lactate, cultures, antibiotics <1hr, 30 mL/kg crystalloid), norepinephrine for MAP ≥65
- **Obstructive**: Relieve obstruction (needle decompression, pericardiocentesis, thrombolysis)`,
      keyTerms: [
        { term: 'Gasto cardíaco (GC)', definition: 'Volumen de sangre bombeado por el corazón por minuto (GC = FC × Volumen Sistólico). Normal: 4-8 L/min. Reducido en choque cardiogénico, puede estar aumentado en distributivo temprano. | Volume of blood pumped by the heart per minute (CO = HR × SV). Normal: 4-8 L/min.', pronunciation: 'GAS-toh car-DEE-ah-coh' },
        { term: 'RUSH (Rapid Ultrasound in Shock)', definition: 'Protocolo ecográfico point-of-care para evaluar "la bomba" (corazón), "el tanque" (volumen/VCI) y "las tuberías" (vasos) en el paciente con hipotensión indiferenciada. | Point-of-care ultrasound protocol evaluating "the pump" (heart), "the tank" (volume/IVC), and "the pipes" (vessels) in undifferentiated hypotension.', pronunciation: 'RUSH (acrónimo inglés)' },
        { term: 'Norepinefrina', definition: 'Vasopressor de primera línea en choque séptico y cardiogénico. Agonista alfa-1 predominante con efecto beta-1 leve. Aumenta PA por vasoconstricción con efecto inotrópico leve. | First-line vasopressor in septic and cardiogenic shock. Predominant alpha-1 agonist with mild beta-1 effect. Increases BP through vasoconstriction with mild inotropic effect.', pronunciation: 'noh-reh-pee-neh-FREE-nah' },
        { term: 'Vena cava inferior (VCI)', definition: 'Gran vena que devuelve sangre al corazón. Su diámetro y colapsabilidad ecográfica ayudan a evaluar el estado de volumen: colapsada = hipovolemia, distendida = sobrecarga/obstrucción. | Large vein returning blood to the heart. Its diameter and ultrasound collapsibility help assess volume status: collapsed = hypovolemia, distended = overload/obstruction.', pronunciation: 'VEH-nah CAH-vah in-feh-ree-OR' }
      ],
      clinicalNotes: `### Notas Clínicas / Clinical Notes

- La ecografía point-of-care (POCUS) debe ser parte integral de la evaluación del paciente en choque. El protocolo RUSH puede diferenciar los tipos de choque en minutos.
- Point-of-care ultrasound (POCUS) should be an integral part of shock patient evaluation. The RUSH protocol can differentiate shock types in minutes.
- En choque séptico, cada hora de retraso en antibióticos se asocia con 4-7% de aumento en mortalidad.
- In septic shock, each hour of antibiotic delay is associated with 4-7% increased mortality.
- La norepinefrina es el vasopressor de primera línea en choque séptico (Surviving Sepsis Campaign 2021). La dopamina ya NO se recomienda por mayor riesgo de arritmias.
- Norepinephrine is the first-line vasopressor in septic shock (Surviving Sepsis Campaign 2021). Dopamine is NO longer recommended due to higher arrhythmia risk.
- El choque es un diagnóstico clínico, no solo un número de presión arterial. Un paciente puede estar en choque con presión arterial "normal" (choque compensado).
- Shock is a clinical diagnosis, not just a blood pressure number. A patient can be in shock with "normal" blood pressure (compensated shock).`
    },
    4: {
      level: 4,
      summary:
        'El manejo avanzado del choque integra hemodinamia guiada por objetivos, POCUS como herramienta diagnóstica y de monitorización, vasopresores e inotrópicos seleccionados por fisiopatología, reanimación con líquidos individualizada, soporte mecánico circulatorio en cardiogénico refractario, y protocolos estandarizados de sepsis. La evaluación de la responsividad a fluidos y la monitorización multiparamétrica guían las decisiones terapéuticas. | Advanced shock management integrates goal-directed hemodynamics, POCUS as diagnostic and monitoring tool, pathophysiology-selected vasopressors and inotropes, individualized fluid resuscitation, mechanical circulatory support in refractory cardiogenic shock, and standardized sepsis protocols. Fluid responsiveness assessment and multiparametric monitoring guide therapeutic decisions.',
      explanation: `## Explicación de Nivel Profesional

### Hemodinamia Avanzada

#### Evaluación de Responsividad a Fluidos
No todos los pacientes en choque se benefician de más líquidos. Solo ~50% de los pacientes en UCI son "respondedores a volumen."

**Métodos de evaluación:**
- **Elevación pasiva de piernas (PLR)**: Eleva piernas 45° y mide cambio en GC. Aumento >10% = respondedor. Confiable en ventilación espontánea y mecánica.
- **Variación de pulso (PPV) / Variación de volumen sistólico (SVV)**: >13% en paciente en VM con volumen tidal ≥8 mL/kg y ritmo sinusal = respondedor
- **Distensibilidad de VCI**: Variación >18% en VM = probablemente respondedor (menos confiable)
- **Mini-fluid challenge**: 100 mL en 1 minuto, medir cambio en VTI aórtico

#### Monitorización Hemodinámica
- **Presión venosa central (PVC)**: Ya NO se recomienda como guía de reposición de volumen (valores estáticos no predicen responsividad)
- **Catéter de arteria pulmonar (Swan-Ganz)**: Mide PCP, GC, RVS, RVP. Uso en declive pero útil en choque complejo
- **Ecocardiografía avanzada**: VTI del TSVI, strain, dP/dt como marcadores de función cardíaca

### Vasopresores e Inotrópicos: Selección Basada en Fisiopatología

#### Vasopresores (aumentan PA por vasoconstricción)
- **Norepinefrina**: Alfa-1 >> Beta-1. Primera línea en séptico y cardiogénico
- **Vasopresina**: V1 receptor. Agrega a norepinefrina como segunda línea en séptico (0.03 U/min, NO titular)
- **Fenilefrina**: Alfa-1 puro. Útil en neurogénico, taquicardia refleja indeseable
- **Epinefrina**: Alfa-1 + Beta-1 + Beta-2. Segunda/tercera línea en séptico, primera en anafiláctico

#### Inotrópicos (aumentan contractilidad)
- **Dobutamina**: Beta-1 predominante. Aumenta GC pero puede causar hipotensión y taquicardia
- **Milrinona**: Inhibidor de fosfodiesterasa III. Inotrópico + vasodilatador (inodilator). Útil en falla cardíaca derecha y postcardiotomía

### Soporte Mecánico Circulatorio

- **Balón de contrapulsación intraaórtico (BCIA)**: Reduce postcarga del VI e incrementa perfusión coronaria diastólica. Uso en declive.
- **Impella**: Bomba axial transaórtica que descarga el VI directamente. Impella CP: 3-4 L/min de soporte.
- **ECMO-VA**: Oxigenación por membrana extracorpórea venoarterial. Soporte circulatorio y respiratorio completo. Para choque cardiogénico refractario, puente a recuperación/trasplante/DAVI.

### Choque Séptico: Manejo Avanzado

#### Paquete de la Hora 1 (Surviving Sepsis Campaign 2021)
1. Medir lactato (repetir si > 2 mmol/L)
2. Obtener hemocultivos antes de antibióticos
3. Administrar antibióticos de amplio espectro
4. Iniciar cristaloides 30 mL/kg si hipotensión o lactato ≥ 4 mmol/L
5. Vasopresores si PAM < 65 mmHg después de reanimación con líquidos

#### Esteroides en Choque Séptico
- **Hidrocortisona 200 mg/día** (50 mg IV cada 6h) si choque refractario a norepinefrina ≥ 0.25 mcg/kg/min
- Ensayo ADRENAL: sin reducción de mortalidad a 90 días, pero aceleró resolución del choque
- Ensayo APROCCHSS: hidrocortisona + fludrocortisona redujo mortalidad a 90 días

---

## Professional-Level Explanation (English)

### Advanced Hemodynamics

#### Fluid Responsiveness Assessment
- **Passive leg raise (PLR)**: >10% CO increase = responder. Reliable in spontaneous and mechanical ventilation.
- **PPV/SVV**: >13% on MV with VT ≥8 mL/kg and sinus rhythm = responder
- **Mini-fluid challenge**: 100 mL in 1 minute, measure aortic VTI change

#### Hemodynamic Monitoring
- CVP no longer recommended as volume guide
- PA catheter useful in complex shock
- Advanced echocardiography: LVOT VTI, strain, dP/dt

### Vasopressors and Inotropes
- **Norepinephrine**: First line in septic and cardiogenic
- **Vasopressin**: Add to norepinephrine as second line in septic
- **Dobutamine**: When inotropic support needed (low CO despite adequate filling)
- **Milrinone**: Inodilator, useful in RV failure

### Mechanical Circulatory Support
- IABP (declining use), Impella, VA-ECMO for refractory cardiogenic shock

### Septic Shock: Hour-1 Bundle (SSC 2021)
Lactate, cultures, antibiotics, crystalloid 30 mL/kg, vasopressors for MAP <65`,
      keyTerms: [
        { term: 'Elevación pasiva de piernas (PLR)', definition: 'Maniobra que moviliza ~300 mL de sangre de las piernas al corazón al elevarlas a 45°. Un aumento >10% en GC indica que el paciente responderá a líquidos IV. | Maneuver mobilizing ~300 mL of blood from legs to heart by elevating them to 45°. A >10% increase in CO indicates the patient will respond to IV fluids.', pronunciation: 'eh-leh-vah-see-ON pah-SEE-vah' },
        { term: 'ECMO-VA', definition: 'Oxigenación por membrana extracorpórea venoarterial que proporciona soporte circulatorio y respiratorio completo extrayendo sangre venosa, oxigenándola y devolviéndola a la circulación arterial. | Venoarterial extracorporeal membrane oxygenation providing complete circulatory and respiratory support by extracting venous blood, oxygenating it, and returning it to arterial circulation.', pronunciation: 'EC-moh veh-noh-ar-teh-ree-AL' },
        { term: 'Impella', definition: 'Dispositivo de soporte mecánico circulatorio percutáneo que consiste en una bomba axial microaxial colocada a través de la válvula aórtica para descargar el ventrículo izquierdo. Proporciona hasta 5.5 L/min de soporte. | Percutaneous mechanical circulatory support device consisting of a microaxial pump placed across the aortic valve to unload the left ventricle. Provides up to 5.5 L/min support.', pronunciation: 'im-PEH-lah' },
        { term: 'Variación de presión de pulso (PPV)', definition: 'Diferencia entre la presión de pulso máxima y mínima durante un ciclo respiratorio mecánico. PPV >13% predice responsividad a líquidos en pacientes en VM con ritmo sinusal. | Difference between maximum and minimum pulse pressure during a mechanical respiratory cycle. PPV >13% predicts fluid responsiveness in MV patients with sinus rhythm.', pronunciation: 'vah-ree-ah-see-ON deh preh-see-ON deh POOL-soh' }
      ],
      clinicalNotes: `### Notas Clínicas Avanzadas / Advanced Clinical Notes

- La PVC como guía de reanimación ha sido abandonada; los valores estáticos no predicen responsividad a fluidos. Las mediciones dinámicas (PLR, PPV, SVV) son superiores.
- CVP as a resuscitation guide has been abandoned; static values do not predict fluid responsiveness. Dynamic measurements (PLR, PPV, SVV) are superior.
- En choque cardiogénico, el uso precoz de soporte mecánico (Impella, ECMO-VA) antes del desarrollo de falla multiorgánica puede mejorar resultados. El concepto de "shock team" multidisciplinario mejora la coordinación.
- In cardiogenic shock, early use of mechanical support (Impella, VA-ECMO) before multiorgan failure development may improve outcomes. The multidisciplinary "shock team" concept improves coordination.
- La combinación de norepinefrina + vasopresina en choque séptico puede reducir la dosis de norepinefrina necesaria y potencialmente disminuir arritmias.
- The combination of norepinephrine + vasopressin in septic shock may reduce the norepinephrine dose needed and potentially decrease arrhythmias.
- El lactato sérico es un marcador de hipoperfusión tisular y guía de reanimación. Un aclaramiento de lactato >20% en 2 horas se asocia con mejor pronóstico.
- Serum lactate is a marker of tissue hypoperfusion and resuscitation guide. Lactate clearance >20% in 2 hours is associated with better prognosis.`
    },
    5: {
      level: 5,
      summary:
        'El manejo del choque basado en evidencia contemporánea integra fenotipificación hemodinámica guiada por POCUS, reanimación con líquidos individualizada basada en responsividad dinámica, selección de vasopresores/inotrópicos por fisiopatología y evidencia de ensayos (SOAP II, VASST, ATHOS-3), soporte mecánico escalonado en cardiogénico refractario, y los paquetes de la Surviving Sepsis Campaign 2021. La investigación actual se centra en angiotensina II, biomarcadores de perfusión tisular, inteligencia artificial para predicción de deterioro, y medicina personalizada en choque. | Contemporary evidence-based shock management integrates POCUS-guided hemodynamic phenotyping, individualized fluid resuscitation based on dynamic responsiveness, pathophysiology- and trial-evidence-based vasopressor/inotrope selection (SOAP II, VASST, ATHOS-3), escalating mechanical support in refractory cardiogenic shock, and Surviving Sepsis Campaign 2021 bundles. Current research focuses on angiotensin II, tissue perfusion biomarkers, AI for deterioration prediction, and personalized medicine in shock.',
      explanation: `## Explicación de Nivel Clínico Experto

### Evidencia Contemporánea en el Manejo del Choque

#### Reanimación con Líquidos: Paradigma Cambiante

**Tipo de cristaloide:**
- **Ensayo SMART (Semler et al., NEJM 2018)**: Soluciones balanceadas (Ringer Lactato) vs salino normal 0.9% en UCI. Soluciones balanceadas redujeron el compuesto de muerte, diálisis o disfunción renal persistente (14.3% vs 15.4%, p=0.04).
- **Ensayo PLUS (Finfer et al., NEJM 2022)**: No encontró diferencia significativa entre Plasma-Lyte vs NaCl 0.9% en mortalidad a 90 días en pacientes de UCI.
- Práctica actual: Tendencia hacia soluciones balanceadas, pero la evidencia no es contundente.

**Volumen de cristaloide en sepsis:**
- **Ensayo CLOVERS (NEJM 2023)**: Estrategia restrictiva de líquidos vs liberal en choque séptico temprano. Sin diferencia significativa en mortalidad a 90 días. Desafía el "30 mL/kg obligatorio."
- **Ensayo CLASSIC (Meyhoff et al., NEJM 2022)**: Reanimación restrictiva vs estándar en choque séptico en UCI. Sin diferencia en mortalidad a 90 días.
- Interpretación: La individualización basada en responsividad a fluidos es más importante que un volumen fijo.

**Albúmina:**
- Ensayo SAFE: Albúmina 4% vs salino normal equivalentes en UCI general. Tendencia a beneficio en sepsis, daño en TCE.
- Ensayo ALBIOS: Albúmina 20% para mantener albúmina sérica ≥30 g/L en sepsis severa: sin diferencia en mortalidad a 28 o 90 días.

#### Vasopresores: Evidencia de Ensayos Clave

**Norepinefrina vs Dopamina:**
- **Ensayo SOAP II (De Backer et al., NEJM 2010)**: Norepinefrina vs dopamina en choque. Sin diferencia en mortalidad global, pero dopamina se asoció con más arritmias (24.1% vs 12.4%) y mayor mortalidad en choque cardiogénico.
- Conclusión: Norepinefrina primera línea; dopamina solo en bradicardia relativa seleccionada.

**Vasopresina:**
- **Ensayo VASST (Russell et al., NEJM 2008)**: Vasopresina vs norepinefrina como primera línea en choque séptico. Sin diferencia en mortalidad a 28 días. Beneficio potencial en subgrupo de choque "menos severo."
- Uso actual: Adyuvante a norepinefrina (0.03 U/min fija) para reducir dosis de catecolaminas.

**Angiotensina II:**
- **Ensayo ATHOS-3 (Khanna et al., NEJM 2017)**: Angiotensina II vs placebo en choque vasodilatador refractario. Mejoró la PA significativamente (respuesta en 69.9% vs 23.4%).
- Uso: Tercera línea en choque vasodilatador refractario a norepinefrina + vasopresina.

#### Choque Cardiogénico: Evidencia para Soporte Mecánico

- **IABP-SHOCK II (Thiele et al., NEJM 2012)**: BCIA vs no BCIA en choque cardiogénico por IAM. Sin beneficio en mortalidad a 30 días. El BCIA ya no se recomienda rutinariamente.
- **DanGer Shock (Moller et al., NEJM 2024)**: Impella CP vs tratamiento estándar en choque cardiogénico por IAM. Impella redujo mortalidad a 180 días (45.8% vs 58.5%), pero con mayor tasa de complicaciones (sangrado, hemólisis). Primer ensayo aleatorizado que muestra beneficio de soporte mecánico.
- **ECMO-VA**: Sin ensayo aleatorizado definitivo en choque cardiogénico. Series de casos y registros muestran supervivencia de 40-50% como puente.

#### Choque Séptico: Más Allá de los Paquetes

**Biomarcadores:**
- **Procalcitonina**: Guía desescalación antibiótica (no tanto inicio). Ensayos PRORATA y SAPS muestran reducción de duración sin aumento de mortalidad.
- **Lactato**: Aclaramiento de lactato como objetivo terapéutico. El ensayo de Jansen et al. (JAMA 2010) mostró reducción de mortalidad con reanimación guiada por lactato.
- **MR-proADM**: Biomarcador emergente de disfunción endotelial y severidad de sepsis.

**Inmunomodulación:**
- La sepsis tiene fases inflamatoria e inmunosupresora. La investigación actual explora biomarcadores para identificar el fenotipo inmunológico y dirigir terapias (anti-IL-6, IFN-gamma, anti-PD-1).
- El concepto de "medicina personalizada en sepsis" busca superar el paradigma de "one size fits all."

---

## Expert Clinical-Level Explanation (English)

### Contemporary Evidence in Shock Management

#### Fluid Resuscitation: Shifting Paradigm
- **SMART trial**: Balanced crystalloids trended toward better renal outcomes vs normal saline
- **CLOVERS/CLASSIC trials**: Restrictive vs liberal fluids in septic shock - no mortality difference; challenges mandatory 30 mL/kg
- Individualized fluid responsiveness assessment more important than fixed volumes

#### Vasopressors: Key Trial Evidence
- **SOAP II**: Norepinephrine > dopamine (fewer arrhythmias)
- **VASST**: Vasopressin as adjunct to norepinephrine in sepsis
- **ATHOS-3**: Angiotensin II for refractory vasodilatory shock

#### Cardiogenic Shock: Mechanical Support Evidence
- **IABP-SHOCK II**: No benefit of IABP - no longer routine
- **DanGer Shock**: First RCT showing Impella CP mortality benefit in AMI cardiogenic shock (but more complications)
- VA-ECMO: No definitive RCT; registry data show 40-50% survival as bridge

#### Septic Shock: Beyond Bundles
- Procalcitonin guides antibiotic de-escalation
- Lactate clearance as therapeutic target
- Personalized sepsis medicine exploring immune phenotyping`,
      keyTerms: [
        { term: 'Angiotensina II', definition: 'Vasopresor que actúa sobre receptores AT1 causando vasoconstricción directa. Aprobado para choque vasodilatador refractario. Ensayo ATHOS-3 demostró eficacia en pacientes no respondedores a norepinefrina + vasopresina. | Vasopressor acting on AT1 receptors causing direct vasoconstriction. Approved for refractory vasodilatory shock. ATHOS-3 trial demonstrated efficacy in norepinephrine + vasopressin non-responders.', pronunciation: 'an-hee-oh-ten-SEE-nah DOS' },
        { term: 'Ensayo DanGer Shock', definition: 'Primer ensayo aleatorizado que demostró beneficio en mortalidad con soporte mecánico (Impella CP) vs tratamiento estándar en choque cardiogénico por IAM (mortalidad 45.8% vs 58.5% a 180 días). | First randomized trial demonstrating mortality benefit with mechanical support (Impella CP) vs standard care in AMI cardiogenic shock (mortality 45.8% vs 58.5% at 180 days).', pronunciation: 'DAN-ger SHOCK' },
        { term: 'Aclaramiento de lactato', definition: 'Tasa de disminución del lactato sérico durante la reanimación. Una reducción >20% en 2 horas se asocia con mejor pronóstico. Refleja mejora en perfusión tisular y metabolismo aeróbico. | Rate of serum lactate decrease during resuscitation. A >20% reduction in 2 hours is associated with better prognosis. Reflects improved tissue perfusion and aerobic metabolism.', pronunciation: 'ah-clah-rah-mee-EN-toh deh lac-TAH-toh' },
        { term: 'Fenotipificación inmunológica en sepsis', definition: 'Concepto emergente de clasificar pacientes sépticos según su respuesta inmune (hiperinflamatoria vs inmunosuprimida) mediante biomarcadores para dirigir terapias individualizadas. | Emerging concept of classifying septic patients by immune response (hyperinflammatory vs immunosuppressed) via biomarkers to direct individualized therapies.', pronunciation: 'feh-noh-tee-pee-fee-cah-see-ON' }
      ],
      clinicalNotes: `### Notas Clínicas de Nivel Experto / Expert Clinical Notes

- Los ensayos CLOVERS y CLASSIC han desafiado la recomendación de 30 mL/kg obligatorio en sepsis. La individualización basada en responsividad a fluidos (PLR, PPV) es el paradigma actual.
- The CLOVERS and CLASSIC trials have challenged the mandatory 30 mL/kg recommendation in sepsis. Individualization based on fluid responsiveness (PLR, PPV) is the current paradigm.
- El ensayo DanGer Shock es el primer RCT que demuestra beneficio de mortalidad con soporte mecánico en choque cardiogénico, pero con tasas significativas de complicaciones. La selección cuidadosa del paciente es esencial.
- The DanGer Shock trial is the first RCT demonstrating mechanical support mortality benefit in cardiogenic shock, but with significant complication rates. Careful patient selection is essential.
- La angiotensina II representa una nueva clase de vasopressor con mecanismo no catecolaminérgico, potencialmente útil en vasoplejia postcardiotomía y choque vasodilatador refractario.
- Angiotensin II represents a new vasopressor class with non-catecholaminergic mechanism, potentially useful in post-cardiotomy vasoplegia and refractory vasodilatory shock.
- El concepto de "shock team" multidisciplinario (cardiología intervencionista, cirugía cardíaca, UCI, perfusionistas) mejora los resultados en choque cardiogénico al facilitar la escalación temprana de soporte mecánico.
- The multidisciplinary "shock team" concept (interventional cardiology, cardiac surgery, ICU, perfusionists) improves cardiogenic shock outcomes by facilitating early escalation of mechanical support.
- La investigación en sepsis está moviendo hacia medicina personalizada: identificar fenotipos inmunes (MARS classification), biomarcadores de perfusión tisular (sublingual microcirculation), y terapias dirigidas (anti-IL-6, checkpoint inhibitors en inmunoparálisis).
- Sepsis research is moving toward personalized medicine: identifying immune phenotypes (MARS classification), tissue perfusion biomarkers (sublingual microcirculation), and targeted therapies (anti-IL-6, checkpoint inhibitors in immunoparalysis).`
    }
  },

  media: [],
  citations: [
    { id: 'ref-ch-1', type: 'guideline', title: 'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021', authors: ['Evans L', 'Rhodes A', 'Alhazzani W', 'et al.'], source: 'Intensive Care Med. 2021;47(11):1181-1247', license: 'CC BY 4.0' },
    { id: 'ref-ch-2', type: 'journal', title: 'Comparison of Dopamine and Norepinephrine in the Treatment of Shock (SOAP II)', authors: ['De Backer D', 'Biston P', 'Devriendt J', 'et al.'], source: 'N Engl J Med. 2010;362(9):779-789', license: 'CC BY 4.0' },
    { id: 'ref-ch-3', type: 'journal', title: 'Angiotensin II for the Treatment of Vasodilatory Shock (ATHOS-3)', authors: ['Khanna A', 'English SW', 'Wang XS', 'et al.'], source: 'N Engl J Med. 2017;377(5):419-430', license: 'CC BY 4.0' },
    { id: 'ref-ch-4', type: 'journal', title: 'Balanced Crystalloids versus Saline in Critically Ill Adults (SMART)', authors: ['Semler MW', 'Self WH', 'Wanderer JP', 'et al.'], source: 'N Engl J Med. 2018;378(9):829-839', license: 'CC BY 4.0' },
    { id: 'ref-ch-5', type: 'journal', title: 'Microaxial Flow Pump or Standard Care in Infarct-Related Cardiogenic Shock (DanGer Shock)', authors: ['Moller JE', 'Engstrom T', 'Jensen LO', 'et al.'], source: 'N Engl J Med. 2024;390(15):1382-1393', license: 'CC BY 4.0' },
    { id: 'ref-ch-6', type: 'textbook', title: 'Tintinalli\'s Emergency Medicine: A Comprehensive Study Guide, 9th Edition', authors: ['Tintinalli JE', 'Ma OJ', 'Yealy DM'], source: 'McGraw-Hill, 2020', license: 'CC BY 4.0' }
  ],
  crossReferences: [
    { targetId: 'condition-paro-cardiaco-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Paro Cardíaco / Cardiac Arrest' },
    { targetId: 'condition-trauma-assessment-evaluacion', targetType: 'condition', relationship: 'related', label: 'Evaluación de Trauma / Trauma Assessment' },
    { targetId: 'condition-manejo-via-aerea-airway', targetType: 'condition', relationship: 'related', label: 'Manejo de Vía Aérea / Airway Management' },
  ],
  tags: {
    systems: ['cardiovascular', 'emergency', 'immunological'],
    topics: ['shock', 'sepsis', 'hemodynamics', 'vasopressors', 'resuscitation', 'mechanical circulatory support'],
    keywords: ['choque', 'shock', 'hipovolémico', 'cardiogénico', 'séptico', 'distributivo', 'obstructivo', 'vasopresores', 'POCUS', 'RUSH', 'norepinefrina'],
    clinicalRelevance: 'critical' as const
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team']
};
