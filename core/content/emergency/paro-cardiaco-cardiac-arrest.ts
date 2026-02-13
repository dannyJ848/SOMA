import { EducationalContent } from '../types';

export const paroCardiacoCardiacArrest: EducationalContent = {
  id: 'condition-paro-cardiaco-cardiac-arrest',
  type: 'condition',
  name: 'Cardiac Arrest',
  nameEs: 'Paro Cardíaco',
  alternateNames: ['Paro cardiorrespiratorio', 'Cardiopulmonary arrest', 'Asistolia', 'Code Blue'],

  levels: {
    1: {
      level: 1,
      summary:
        'Un paro cardíaco ocurre cuando el corazón deja de latir repentinamente y la persona no puede respirar ni moverse. Es una emergencia que requiere actuar de inmediato. | A cardiac arrest happens when the heart suddenly stops beating and the person cannot breathe or move. It is an emergency that requires immediate action.',
      explanation: `## Explicación Simple

El corazón es como una bomba que envía sangre a todo el cuerpo. Cuando esta bomba se detiene de repente, se llama **paro cardíaco**. Sin sangre fluyendo, el cerebro y los órganos dejan de recibir oxígeno, y la persona se desmaya en segundos.

### ¿Qué hacer?

1. **Llamar al 911** (o número de emergencia local) inmediatamente.
2. **Empezar RCP (Reanimación Cardiopulmonar)**: Presionar fuerte y rápido en el centro del pecho, al ritmo de la canción "Stayin' Alive".
3. **Usar un DEA (Desfibrilador Externo Automático)** si hay uno disponible: la máquina te dice exactamente qué hacer.

### La Cadena de Supervivencia

Piensa en una cadena con eslabones. Si uno se rompe, la cadena falla. Los eslabones son:
- Reconocer que algo está mal y llamar al 911
- Empezar RCP de inmediato
- Usar el DEA lo antes posible
- Llegada de paramédicos con cuidados avanzados
- Cuidados en el hospital después

---

## Simple Explanation (English)

The heart is like a pump that sends blood throughout the body. When this pump suddenly stops, it is called **cardiac arrest**. Without blood flowing, the brain and organs stop receiving oxygen, and the person collapses within seconds.

### What to do?

1. **Call 911** (or local emergency number) immediately.
2. **Start CPR (Cardiopulmonary Resuscitation)**: Push hard and fast in the center of the chest, to the beat of "Stayin' Alive."
3. **Use an AED (Automated External Defibrillator)** if one is available: the machine tells you exactly what to do.

### The Chain of Survival

Think of it as a chain with links. If one breaks, the chain fails:
- Recognize something is wrong and call 911
- Start CPR immediately
- Use the AED as soon as possible
- Arrival of paramedics with advanced care
- Hospital care afterward`,
      keyTerms: [
        { term: 'Paro cardíaco', definition: 'Cuando el corazón deja de latir y la sangre deja de fluir. | When the heart stops beating and blood stops flowing.', pronunciation: 'PAH-roh car-DEE-ah-coh' },
        { term: 'RCP / CPR', definition: 'Presionar el pecho para hacer que la sangre siga moviéndose cuando el corazón se detiene. | Pressing on the chest to keep blood moving when the heart stops.', pronunciation: 'air-reh-seh-PEH' },
        { term: 'DEA / AED', definition: 'Una máquina que puede dar una descarga eléctrica al corazón para que vuelva a latir. | A machine that can give an electric shock to the heart to restart it.', pronunciation: 'DEH-ah' },
        { term: 'Cadena de supervivencia', definition: 'Los pasos conectados necesarios para salvar una vida en paro cardíaco. | The connected steps needed to save a life in cardiac arrest.', pronunciation: 'cah-DEH-nah deh soo-per-vee-VEN-see-ah' }
      ],
      analogies: [
        'El corazón es como la bomba de agua de una casa. Si la bomba se apaga, no hay agua en las tuberías. La RCP es como bombear agua a mano hasta que un técnico repare la bomba. | The heart is like a house water pump. If the pump shuts off, there is no water in the pipes. CPR is like pumping water by hand until a technician fixes the pump.',
        'El DEA es como reiniciar una computadora que se congeló. A veces, el corazón necesita un "reinicio" eléctrico para volver a funcionar. | The AED is like restarting a frozen computer. Sometimes the heart needs an electrical "reboot" to start working again.'
      ],
      examples: [
        'Un abuelo se desmaya en el parque. No respira y no se mueve. Su nieta llama al 911, empieza a presionar el pecho y alguien trae un DEA del centro comunitario. Los paramédicos llegan y lo llevan al hospital. | A grandfather collapses in the park. He is not breathing and not moving. His granddaughter calls 911, starts pushing on his chest, and someone brings an AED from the community center. Paramedics arrive and take him to the hospital.',
        'En un gimnasio, un jugador joven cae al suelo. El entrenador reconoce un paro cardíaco, empieza RCP y usa el DEA del gimnasio. El jugador sobrevive gracias a la acción rápida. | In a gym, a young player falls to the ground. The coach recognizes cardiac arrest, starts CPR, and uses the gym AED. The player survives thanks to quick action.'
      ],
      patientCounselingPoints: [
        'Cualquier persona puede aprender RCP. No necesitas ser médico para salvar una vida. | Anyone can learn CPR. You do not need to be a doctor to save a life.',
        'No tengas miedo de presionar demasiado fuerte. Es mejor presionar fuerte que no presionar. | Do not be afraid of pressing too hard. It is better to press hard than not to press.',
        'Si ves a alguien que se desmaya y no respira, actúa inmediatamente. Cada minuto sin RCP reduce las posibilidades de sobrevivir. | If you see someone collapse and stop breathing, act immediately. Every minute without CPR reduces survival chances.'
      ]
    },
    2: {
      level: 2,
      summary:
        'El paro cardíaco es la cesación abrupta de la función mecánica del corazón. Se distingue del infarto por ser la ausencia total de actividad cardíaca efectiva. El manejo inmediato incluye RCP de alta calidad y desfibrilación temprana. | Cardiac arrest is the abrupt cessation of the heart\'s mechanical function. It is distinguished from a heart attack by the total absence of effective cardiac activity. Immediate management includes high-quality CPR and early defibrillation.',
      explanation: `## Explicación Intermedia

### ¿Qué es el paro cardíaco?

El paro cardíaco ocurre cuando el corazón deja de bombear sangre de manera efectiva. Esto es diferente de un infarto (ataque al corazón), donde una arteria está bloqueada pero el corazón aún late. En el paro cardíaco, el corazón se detiene por completo o late de forma tan desorganizada que no puede bombear sangre.

### Ritmos cardíacos en paro

Existen cuatro ritmos que causan paro cardíaco:
- **Fibrilación ventricular (FV)**: El corazón tiembla en vez de latir. Es *desfibrilable*.
- **Taquicardia ventricular sin pulso (TVSP)**: El corazón late demasiado rápido para bombear. Es *desfibrilable*.
- **Asistolia**: No hay actividad eléctrica. *No es desfibrilable*.
- **Actividad eléctrica sin pulso (AESP)**: Hay señales eléctricas pero el corazón no bombea. *No es desfibrilable*.

### RCP de Alta Calidad

- **Profundidad**: Comprimir al menos 5 cm (2 pulgadas) en adultos
- **Frecuencia**: 100-120 compresiones por minuto
- **Retroceso completo**: Permitir que el pecho suba completamente entre compresiones
- **Minimizar interrupciones**: No parar las compresiones por más de 10 segundos
- **Ventilaciones**: Relación 30 compresiones por cada 2 ventilaciones (con vía aérea no avanzada)

### Uso del DEA

El DEA analiza el ritmo cardíaco y solo permite una descarga si detecta FV o TVSP. Sigue las instrucciones de voz del aparato.

---

## Intermediate Explanation (English)

### What is cardiac arrest?

Cardiac arrest occurs when the heart stops pumping blood effectively. This is different from a heart attack, where an artery is blocked but the heart still beats. In cardiac arrest, the heart stops completely or beats so disorganized that it cannot pump blood.

### Cardiac arrest rhythms

There are four rhythms that cause cardiac arrest:
- **Ventricular fibrillation (VF)**: The heart quivers instead of beating. *Shockable*.
- **Pulseless ventricular tachycardia (pVT)**: The heart beats too fast to pump. *Shockable*.
- **Asystole**: No electrical activity. *Not shockable*.
- **Pulseless electrical activity (PEA)**: Electrical signals exist but the heart does not pump. *Not shockable*.

### High-Quality CPR

- **Depth**: Compress at least 5 cm (2 inches) in adults
- **Rate**: 100-120 compressions per minute
- **Full recoil**: Allow the chest to rise completely between compressions
- **Minimize interruptions**: Do not stop compressions for more than 10 seconds
- **Ventilations**: 30:2 ratio (with non-advanced airway)

### AED Use

The AED analyzes the heart rhythm and only allows a shock if it detects VF or pVT. Follow the device's voice instructions.`,
      keyTerms: [
        { term: 'Fibrilación ventricular', definition: 'Ritmo caótico donde el corazón tiembla sin bombear sangre. Es desfibrilable. | Chaotic rhythm where the heart quivers without pumping blood. It is shockable.', pronunciation: 'fee-bree-lah-see-ON ven-tree-coo-LAR' },
        { term: 'Asistolia', definition: 'Ausencia total de actividad eléctrica cardíaca. No es desfibrilable. | Total absence of cardiac electrical activity. Not shockable.', pronunciation: 'ah-sees-TOH-lee-ah' },
        { term: 'AESP / PEA', definition: 'Actividad eléctrica presente pero sin contracción cardíaca efectiva. | Electrical activity present but without effective cardiac contraction.', pronunciation: 'ah-EH-ess-PEH' },
        { term: 'Desfibrilación', definition: 'Descarga eléctrica aplicada al corazón para restaurar un ritmo normal. | Electrical shock applied to the heart to restore a normal rhythm.', pronunciation: 'des-fee-bree-lah-see-ON' },
        { term: 'Compresiones torácicas', definition: 'Presiones rítmicas sobre el esternón para forzar la circulación de sangre. | Rhythmic presses on the sternum to force blood circulation.', pronunciation: 'com-preh-see-OH-nes toh-RAH-see-cas' }
      ],
      analogies: [
        'La fibrilación ventricular es como un grupo de músicos tocando cada uno su propia canción al mismo tiempo: no producen música, solo ruido. La desfibrilación es como el director que detiene a todos y les dice "empecemos de nuevo juntos." | Ventricular fibrillation is like a group of musicians each playing their own song at the same time: they produce noise, not music. Defibrillation is like the conductor stopping everyone and saying "let\'s start again together."'
      ],
      examples: [
        'Un hombre de 55 años colapsa en un restaurante. Los testigos llaman al 911, inician compresiones torácicas a 100-120/min con profundidad de 5 cm. Otro testigo trae un DEA, que analiza el ritmo y recomienda una descarga. Tras la descarga, continúan RCP hasta la llegada de paramédicos. | A 55-year-old man collapses in a restaurant. Bystanders call 911, start chest compressions at 100-120/min with 5 cm depth. Another bystander brings an AED, which analyzes the rhythm and recommends a shock. After the shock, they continue CPR until paramedics arrive.'
      ],
      patientCounselingPoints: [
        'Un paro cardíaco NO es lo mismo que un infarto. El infarto puede causar paro cardíaco, pero son condiciones diferentes. | Cardiac arrest is NOT the same as a heart attack. A heart attack can cause cardiac arrest, but they are different conditions.',
        'El tiempo es crucial: por cada minuto sin RCP, las probabilidades de supervivencia disminuyen un 7-10%. | Time is critical: for every minute without CPR, survival chances decrease by 7-10%.'
      ]
    },
    3: {
      level: 3,
      summary:
        'El paro cardíaco requiere reconocimiento inmediato, activación del sistema de emergencias, RCP de alta calidad con énfasis en compresiones, desfibrilación temprana y manejo avanzado de la vía aérea y farmacoterapia según los algoritmos de ACLS. | Cardiac arrest requires immediate recognition, EMS activation, high-quality CPR emphasizing compressions, early defibrillation, and advanced airway management and pharmacotherapy per ACLS algorithms.',
      explanation: `## Explicación Avanzada

### Algoritmo de Paro Cardíaco (ACLS)

#### Ritmos Desfibrilables (FV/TVSP)
1. Identificar ritmo desfibrilable
2. Desfibrilar con dosis bifásica (120-200 J según fabricante) o monofásica (360 J)
3. Reanudar RCP inmediatamente por 2 minutos
4. Verificar ritmo - si persiste FV/TVSP, segunda descarga
5. Reanudar RCP + **Epinefrina 1 mg IV/IO cada 3-5 minutos**
6. Tercera descarga si persiste
7. Reanudar RCP + **Amiodarona 300 mg IV/IO** (primera dosis), luego 150 mg (segunda dosis)
8. Continuar ciclos de 2 minutos de RCP, verificación de ritmo y descarga

#### Ritmos No Desfibrilables (Asistolia/AESP)
1. Identificar ritmo no desfibrilable
2. RCP inmediata por 2 minutos
3. **Epinefrina 1 mg IV/IO lo antes posible**, luego cada 3-5 minutos
4. Verificar ritmo cada 2 minutos
5. Buscar y tratar causas reversibles (Hs y Ts)

### Las Hs y Ts (Causas Reversibles)

**Hs:**
- Hipoxia
- Hipovolemia
- Hidrogenión (acidosis)
- Hipo/hiperpotasemia
- Hipotermia

**Ts:**
- Tensión neumotórax
- Taponamiento cardíaco
- Toxinas
- Trombosis pulmonar (TEP)
- Trombosis coronaria (IAM)

### Manejo de Vía Aérea durante el Paro

- Vía aérea avanzada (tubo endotraqueal o dispositivo supraglótico) cuando sea posible
- Con vía aérea avanzada: compresiones continuas a 100-120/min + ventilación cada 6 segundos (10/min)
- Capnografía con forma de onda para confirmar posición del tubo y calidad de RCP (ETCO2 > 10 mmHg objetivo)

---

## Advanced Explanation (English)

### Cardiac Arrest Algorithm (ACLS)

#### Shockable Rhythms (VF/pVT)
1. Identify shockable rhythm
2. Defibrillate with biphasic dose (120-200 J per manufacturer) or monophasic (360 J)
3. Resume CPR immediately for 2 minutes
4. Check rhythm - if VF/pVT persists, second shock
5. Resume CPR + **Epinephrine 1 mg IV/IO every 3-5 minutes**
6. Third shock if persistent
7. Resume CPR + **Amiodarone 300 mg IV/IO** (first dose), then 150 mg (second dose)
8. Continue 2-minute CPR cycles, rhythm checks, and shocks

#### Non-Shockable Rhythms (Asystole/PEA)
1. Identify non-shockable rhythm
2. Immediate CPR for 2 minutes
3. **Epinephrine 1 mg IV/IO as soon as possible**, then every 3-5 minutes
4. Check rhythm every 2 minutes
5. Search for and treat reversible causes (Hs and Ts)

### The Hs and Ts (Reversible Causes)

**Hs:** Hypoxia, Hypovolemia, Hydrogen ion (acidosis), Hypo/hyperkalemia, Hypothermia

**Ts:** Tension pneumothorax, Tamponade (cardiac), Toxins, Thrombosis (pulmonary), Thrombosis (coronary)

### Airway Management during Arrest

- Advanced airway (endotracheal tube or supraglottic device) when feasible
- With advanced airway: continuous compressions at 100-120/min + ventilation every 6 seconds (10/min)
- Waveform capnography to confirm tube placement and CPR quality (target ETCO2 > 10 mmHg)`,
      keyTerms: [
        { term: 'Epinefrina', definition: 'Vasopressor primario en paro cardíaco; 1 mg IV/IO cada 3-5 min. Produce vasoconstricción periférica para mejorar perfusión coronaria y cerebral. | Primary vasopressor in cardiac arrest; 1 mg IV/IO every 3-5 min. Produces peripheral vasoconstriction to improve coronary and cerebral perfusion.', pronunciation: 'eh-pee-neh-FREE-nah' },
        { term: 'Amiodarona', definition: 'Antiarrítmico clase III usado en FV/TVSP refractaria. Dosis: 300 mg IV primera, 150 mg segunda. | Class III antiarrhythmic used in refractory VF/pVT. Dose: 300 mg IV first, 150 mg second.', pronunciation: 'ah-mee-oh-dah-ROH-nah' },
        { term: 'Capnografía (ETCO2)', definition: 'Monitorización del CO2 al final de la espiración. Valores > 10 mmHg indican RCP adecuada; aumento súbito puede indicar retorno de circulación. | End-tidal CO2 monitoring. Values > 10 mmHg indicate adequate CPR; sudden increase may indicate return of circulation.', pronunciation: 'cap-noh-grah-FEE-ah' },
        { term: 'Retorno de circulación espontánea (RCE)', definition: 'Restauración de un ritmo cardíaco que produce pulso palpable y perfusión tisular. | Restoration of a cardiac rhythm producing a palpable pulse and tissue perfusion.', pronunciation: 'reh-TOR-noh deh seer-coo-lah-see-ON' }
      ],
      clinicalNotes: `### Notas Clínicas / Clinical Notes

- La RCP de alta calidad es el predictor más importante de supervivencia. Minimizar interrupciones es esencial.
- High-quality CPR is the most important predictor of survival. Minimizing interruptions is essential.
- ETCO2 < 10 mmHg después de 20 minutos de RCP se asocia con muy baja probabilidad de RCE.
- ETCO2 < 10 mmHg after 20 minutes of CPR is associated with very low probability of ROSC.
- En ritmos no desfibrilables, la administración temprana de epinefrina mejora los resultados.
- In non-shockable rhythms, early epinephrine administration improves outcomes.
- Considerar ecografía point-of-care para identificar causas reversibles (taponamiento, TEP, hipovolemia).
- Consider point-of-care ultrasound to identify reversible causes (tamponade, PE, hypovolemia).`
    },
    4: {
      level: 4,
      summary:
        'El manejo avanzado del paro cardíaco integra algoritmos de ACLS, identificación sistemática de causas reversibles, uso estratégico de vasopresores y antiarrítmicos, cuidados post-paro incluyendo manejo dirigido de temperatura, e indicadores pronósticos como ETCO2 y ecografía point-of-care. | Advanced cardiac arrest management integrates ACLS algorithms, systematic identification of reversible causes, strategic use of vasopressors and antiarrhythmics, post-arrest care including targeted temperature management, and prognostic indicators such as ETCO2 and point-of-care ultrasound.',
      explanation: `## Explicación de Nivel Profesional

### Cuidados Post-Paro Cardíaco

Tras lograr RCE, el manejo se centra en:

#### 1. Optimización Hemodinámica
- **Objetivo de PA sistólica ≥ 90 mmHg** o PAM ≥ 65 mmHg
- Infusión de cristaloides, vasopresores (norepinefrina o epinefrina en infusión) según necesidad
- Ecocardiografía para evaluar función ventricular y causas mecánicas

#### 2. Manejo Dirigido de Temperatura (MDT)
- Temperatura objetivo: **32-36°C durante al menos 24 horas** para pacientes comatosos post-paro
- Prevenir hipertermia (>37.5°C) activamente
- Métodos: dispositivos de enfriamiento de superficie, catéteres intravasculares, infusión de líquidos fríos

#### 3. Evaluación Neurológica
- Evitar pronóstico prematuro; esperar al menos 72 horas post-normotermia
- Herramientas: examen neurológico seriado, EEG, potenciales evocados somatosensoriales (PESS), neuroimagen, enolasa neuronal específica (NSE)

#### 4. Intervención Coronaria
- **Cateterismo cardíaco emergente** si hay sospecha de IAM con elevación del ST (IAMCEST)
- Considerar angiografía coronaria en otros pacientes sin causa extra-cardíaca clara

#### 5. Manejo Ventilatorio
- Evitar hiperoxia: titular FiO2 para SpO2 92-98%
- Evitar hiperventilación: mantener PaCO2 35-45 mmHg
- Ventilación protectora pulmonar

### Situaciones Especiales de Paro Cardíaco

- **Embarazo**: Desplazamiento uterino izquierdo manual, cesárea perimortem si no hay RCE en 4-5 minutos
- **Hipotermia**: "No está muerto hasta que esté caliente y muerto" - continuar reanimación hasta normotermia
- **Sobredosis de opioides**: Naloxona 2 mg IN/IM/IV además de RCP estándar
- **Electrocución**: Seguridad de la escena primero; tratar arritmias estándar

---

## Professional-Level Explanation (English)

### Post-Cardiac Arrest Care

After achieving ROSC, management focuses on:

#### 1. Hemodynamic Optimization
- **Target SBP ≥ 90 mmHg** or MAP ≥ 65 mmHg
- Crystalloid infusion, vasopressors (norepinephrine or epinephrine infusion) as needed
- Echocardiography to evaluate ventricular function and mechanical causes

#### 2. Targeted Temperature Management (TTM)
- Target temperature: **32-36°C for at least 24 hours** for comatose post-arrest patients
- Actively prevent hyperthermia (>37.5°C)
- Methods: surface cooling devices, intravascular catheters, cold fluid infusion

#### 3. Neurological Assessment
- Avoid premature prognostication; wait at least 72 hours post-normothermia
- Tools: serial neurological exam, EEG, somatosensory evoked potentials (SSEPs), neuroimaging, neuron-specific enolase (NSE)

#### 4. Coronary Intervention
- **Emergent cardiac catheterization** if STEMI suspected
- Consider coronary angiography in others without clear extra-cardiac cause

#### 5. Ventilatory Management
- Avoid hyperoxia: titrate FiO2 for SpO2 92-98%
- Avoid hyperventilation: maintain PaCO2 35-45 mmHg
- Lung-protective ventilation`,
      keyTerms: [
        { term: 'Manejo dirigido de temperatura (MDT)', definition: 'Enfriamiento controlado del paciente comatoso post-paro a 32-36°C por al menos 24 horas para protección neurológica. | Controlled cooling of comatose post-arrest patient to 32-36°C for at least 24 hours for neuroprotection.', pronunciation: 'mah-NEH-hoh dee-ree-HEE-doh deh tem-peh-rah-TOO-rah' },
        { term: 'Cesárea perimortem', definition: 'Cesárea de emergencia realizada durante el paro cardíaco materno para mejorar la reanimación de la madre y salvar al feto. | Emergency cesarean performed during maternal cardiac arrest to improve maternal resuscitation and save the fetus.', pronunciation: 'seh-SAH-reh-ah peh-ree-MOR-tem' },
        { term: 'Retorno de circulación espontánea (RCE/ROSC)', definition: 'Restauración sostenida de pulso palpable tras reanimación. Indicado por aumento súbito de ETCO2, onda arterial o pulso palpable. | Sustained restoration of palpable pulse after resuscitation. Indicated by sudden ETCO2 increase, arterial waveform, or palpable pulse.', pronunciation: 'reh-TOR-noh / ROSC' },
        { term: 'Enolasa neuronal específica (NSE)', definition: 'Biomarcador sérico de daño neuronal; niveles elevados post-paro se asocian con mal pronóstico neurológico. | Serum biomarker of neuronal injury; elevated post-arrest levels are associated with poor neurological prognosis.', pronunciation: 'eh-noh-LAH-sah' }
      ],
      clinicalNotes: `### Notas Clínicas Avanzadas / Advanced Clinical Notes

- Las guías AHA 2020 recomiendan MDT a 32-36°C sin preferencia por una temperatura específica dentro del rango.
- AHA 2020 guidelines recommend TTM at 32-36°C without preference for a specific temperature within the range.
- La ecografía point-of-care durante RCP (sin interrumpir compresiones) puede identificar taponamiento, TEP masivo, hipovolemia severa y disfunción ventricular.
- Point-of-care ultrasound during CPR (without interrupting compressions) can identify tamponade, massive PE, severe hypovolemia, and ventricular dysfunction.
- ECMO-RCP (Reanimación cardiopulmonar con oxigenación por membrana extracorpórea) debe considerarse en centros con experiencia para pacientes seleccionados con causas reversibles.
- ECPR (Extracorporeal CPR) should be considered at experienced centers for selected patients with reversible causes.
- La vasopresina ya no se recomienda como alternativa a la epinefrina en las guías actuales.
- Vasopressin is no longer recommended as an alternative to epinephrine in current guidelines.`
    },
    5: {
      level: 5,
      summary:
        'El manejo del paro cardíaco basado en evidencia integra los algoritmos de SVCA/ACLS con énfasis en RCP de alta calidad, desfibrilación temprana, farmacoterapia guiada por ritmo, identificación sistemática de causas reversibles, cuidados post-reanimación incluyendo MDT y evaluación neurológica multimodal, y estrategias emergentes como ECMO-RCP. Las guías AHA/ERC 2020-2025 constituyen la base de la práctica clínica actual. | Evidence-based cardiac arrest management integrates ACLS algorithms emphasizing high-quality CPR, early defibrillation, rhythm-guided pharmacotherapy, systematic reversible cause identification, post-resuscitation care including TTM and multimodal neurological assessment, and emerging strategies such as ECPR. AHA/ERC 2020-2025 guidelines form the basis of current clinical practice.',
      explanation: `## Explicación de Nivel Clínico Experto

### Evidencia Actual en Reanimación Cardiopulmonar

#### RCP de Alta Calidad: Base de la Evidencia
La fracción de compresiones torácicas (FCT) debe ser >80% del tiempo total de reanimación. Estudios observacionales (Christenson et al., Circulation 2009) demuestran asociación directa entre FCT y supervivencia con buen estado neurológico. La profundidad de compresión de 5-6 cm y la frecuencia de 100-120/min se basan en datos de múltiples registros.

#### Farmacoterapia Basada en Evidencia
- **Epinefrina**: El ensayo PARAMEDIC2 (Perkins et al., NEJM 2018) demostró que la epinefrina aumenta la supervivencia a 30 días (3.2% vs 2.4%; RR 1.39) pero sin diferencia significativa en supervivencia con buen estado neurológico.
- **Amiodarona vs Lidocaína**: El ensayo ALPS (Kudenchuk et al., NEJM 2016) no mostró diferencia significativa entre amiodarona, lidocaína y placebo en supervivencia al alta con buen estado neurológico en FV/TVSP refractaria.
- **Doble desfibrilación secuencial**: Evidencia limitada; no recomendada rutinariamente pero considerada en FV refractaria.

#### Manejo Dirigido de Temperatura: Evolución de la Evidencia
- Ensayos originales (HACA 2002, Bernard 2002): 32-34°C vs no enfriamiento mostró beneficio neurológico.
- TTM Trial (Nielsen et al., NEJM 2013): 33°C vs 36°C sin diferencia en mortalidad o resultado neurológico.
- TTM2 (Dankiewicz et al., NEJM 2021): Hipotermia a 33°C vs normotermia (≤37.5°C) sin diferencia significativa.
- Recomendación actual: prevenir fiebre activamente; la hipotermia inducida es razonable pero no mandatoria.

#### ECMO-RCP (Reanimación Cardiopulmonar Extracorpórea)
- El ensayo ARREST (Yannopoulos et al., Lancet 2020) mostró beneficio en supervivencia con ECMO-RCP vs ACLS estándar en paro cardíaco extrahospitalario refractario con FV/TVSP (43% vs 7%).
- El ensayo INCEPTION (Suverein et al., NEJM 2023) no replicó estos resultados.
- Selección cuidadosa de pacientes es fundamental: edad, tiempo de isquemia, causa presumible reversible.

#### Pronóstico Neurológico Multimodal
Evaluación a ≥72 horas post-normotermia usando:
- Examen neurológico (ausencia bilateral de reflejo pupilar a la luz, estado mioclónico)
- PESS (ausencia bilateral de onda N20)
- EEG (patrones altamente malignos: supresión, burst-suppression sin reactividad)
- NSE sérica (valores >60 μg/L a 48-72h asociados con mal pronóstico)
- RM cerebral (restricción difusa en difusión)
- Ningún predictor aislado tiene 100% de especificidad; se requiere enfoque multimodal.

---

## Expert Clinical-Level Explanation (English)

### Current Evidence in Cardiopulmonary Resuscitation

#### High-Quality CPR: Evidence Base
Chest compression fraction (CCF) should be >80% of total resuscitation time. Observational studies demonstrate direct association between CCF and survival with good neurological status. Compression depth of 5-6 cm and rate of 100-120/min are based on multi-registry data.

#### Evidence-Based Pharmacotherapy
- **Epinephrine**: The PARAMEDIC2 trial demonstrated increased 30-day survival (3.2% vs 2.4%) but no significant difference in neurologically favorable survival.
- **Amiodarone vs Lidocaine**: The ALPS trial showed no significant difference among amiodarone, lidocaine, and placebo in survival to discharge with good neurological outcome in refractory VF/pVT.
- **Double sequential defibrillation**: Limited evidence; not routinely recommended but considered in refractory VF.

#### Targeted Temperature Management: Evolving Evidence
- TTM2 trial: hypothermia at 33°C vs normothermia (≤37.5°C) showed no significant difference.
- Current recommendation: actively prevent fever; induced hypothermia is reasonable but not mandatory.

#### ECPR (Extracorporeal CPR)
- ARREST trial showed benefit; INCEPTION trial did not replicate results.
- Careful patient selection is fundamental.

#### Multimodal Neurological Prognostication
Assessment at ≥72 hours post-normothermia using neurological examination, SSEPs, EEG, serum NSE, brain MRI. No single predictor has 100% specificity; multimodal approach required.`,
      keyTerms: [
        { term: 'Fracción de compresiones torácicas (FCT)', definition: 'Porcentaje del tiempo total de reanimación durante el cual se realizan compresiones. Objetivo >80%. | Percentage of total resuscitation time during which compressions are performed. Target >80%.', pronunciation: 'frac-see-ON deh com-preh-see-OH-nes' },
        { term: 'ECMO-RCP / ECPR', definition: 'Uso de oxigenación por membrana extracorpórea durante paro cardíaco refractario como puente a tratamiento definitivo. | Use of extracorporeal membrane oxygenation during refractory cardiac arrest as a bridge to definitive treatment.', pronunciation: 'EC-moh air-reh-seh-PEH' },
        { term: 'Potenciales evocados somatosensoriales (PESS)', definition: 'Prueba neurofisiológica que mide la conducción nerviosa del nervio mediano a la corteza. Ausencia bilateral de N20 a ≥72h post-paro se asocia con mal pronóstico. | Neurophysiological test measuring nerve conduction from median nerve to cortex. Bilateral absence of N20 at ≥72h post-arrest is associated with poor prognosis.', pronunciation: 'poh-ten-see-AH-les eh-voh-CAH-dos' },
        { term: 'Enolasa neuronal específica (NSE)', definition: 'Enzima liberada por neuronas dañadas. Niveles >60 μg/L a 48-72h post-paro altamente específicos de mal pronóstico neurológico, pero con falsos positivos por hemólisis. | Enzyme released by damaged neurons. Levels >60 μg/L at 48-72h post-arrest highly specific for poor neurological prognosis, but with false positives from hemolysis.', pronunciation: 'eh-noh-LAH-sah' }
      ],
      clinicalNotes: `### Notas Clínicas de Nivel Experto / Expert Clinical Notes

- La evidencia actual (TTM2, 2021) sugiere que la prevención activa de fiebre puede ser tan efectiva como la hipotermia inducida, pero muchos centros continúan con enfriamiento activo.
- Current evidence (TTM2, 2021) suggests active fever prevention may be as effective as induced hypothermia, but many centers continue with active cooling.
- La ECMO-RCP debe considerarse en centros con experiencia para pacientes jóvenes (<65 años) con ritmo desfibrilable refractario, tiempo de no-flujo breve y causa presumiblemente reversible.
- ECPR should be considered at experienced centers for young patients (<65 years) with refractory shockable rhythm, short no-flow time, and presumably reversible cause.
- La lidocaína es una alternativa aceptable a la amiodarona según las guías AHA 2020, especialmente si la amiodarona no está disponible.
- Lidocaine is an acceptable alternative to amiodarone per AHA 2020 guidelines, especially if amiodarone is unavailable.
- Los sistemas de atención al paro cardíaco (Cardiac Arrest Centers) con capacidad de ECMO, cateterismo 24/7 y MDT han mostrado mejores resultados en registros observacionales.
- Cardiac arrest care systems (Cardiac Arrest Centers) with ECMO capability, 24/7 catheterization, and TTM have shown better outcomes in observational registries.`
    }
  },

  media: [],
  citations: [
    { id: 'ref-pca-1', type: 'guideline', title: 'AHA Guidelines for CPR and Emergency Cardiovascular Care', authors: ['American Heart Association'], source: 'Circulation, 2020', license: 'Public Domain' },
    { id: 'ref-pca-2', type: 'journal', title: 'A Randomized Trial of Epinephrine in Out-of-Hospital Cardiac Arrest (PARAMEDIC2)', authors: ['Perkins GD', 'Ji C', 'Deakin CD', 'et al.'], source: 'N Engl J Med. 2018;379(8):711-721', license: 'CC BY 4.0' },
    { id: 'ref-pca-3', type: 'journal', title: 'Hypothermia versus Normothermia after Out-of-Hospital Cardiac Arrest (TTM2)', authors: ['Dankiewicz J', 'Cronberg T', 'Lilja G', 'et al.'], source: 'N Engl J Med. 2021;384(24):2283-2294', license: 'CC BY 4.0' },
    { id: 'ref-pca-4', type: 'journal', title: 'Advanced reperfusion strategies for patients with out-of-hospital cardiac arrest (ARREST)', authors: ['Yannopoulos D', 'Bartos J', 'Raveendran G', 'et al.'], source: 'Lancet. 2020;396(10265):1807-1816', license: 'CC BY 4.0' },
    { id: 'ref-pca-5', type: 'textbook', title: 'Tintinalli\'s Emergency Medicine: A Comprehensive Study Guide, 9th Edition', authors: ['Tintinalli JE', 'Ma OJ', 'Yealy DM', 'et al.'], source: 'McGraw-Hill Education, 2020', license: 'CC BY 4.0' }
  ],
  crossReferences: [
    { targetId: 'condition-manejo-via-aerea-airway', targetType: 'condition', relationship: 'related', label: 'Manejo de Vía Aérea / Airway Management' },
    { targetId: 'condition-choque-shock-states', targetType: 'condition', relationship: 'related', label: 'Choque / Shock States' },
  ],
  tags: {
    systems: ['cardiovascular', 'emergency'],
    topics: ['cardiac arrest', 'CPR', 'ACLS', 'defibrillation', 'post-resuscitation care'],
    keywords: ['paro cardíaco', 'RCP', 'reanimación', 'desfibrilación', 'SVCA', 'cadena de supervivencia', 'ROSC', 'ECPR'],
    clinicalRelevance: 'critical' as const
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team']
};
