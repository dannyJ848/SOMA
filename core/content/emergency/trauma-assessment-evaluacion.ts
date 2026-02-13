import { EducationalContent } from '../types';

export const traumaAssessmentEvaluacion: EducationalContent = {
  id: 'condition-trauma-assessment-evaluacion',
  type: 'condition',
  name: 'Trauma Assessment',
  nameEs: 'Evaluación de Trauma',
  alternateNames: ['Primary survey', 'Evaluación primaria', 'ABCDE assessment', 'Trauma survey', 'Evaluación traumatológica'],

  levels: {
    1: {
      level: 1,
      summary:
        'La evaluación de trauma es un sistema paso a paso para revisar a una persona herida. Los médicos siguen las letras A-B-C-D-E para no olvidar nada importante y salvar vidas. | Trauma assessment is a step-by-step system for checking an injured person. Doctors follow the letters A-B-C-D-E so they do not miss anything important and can save lives.',
      explanation: `## Explicación Simple

Cuando una persona tiene un accidente grave, como un choque de auto o una caída fuerte, los médicos y paramédicos necesitan revisarla rápidamente. Para no olvidar nada, usan un sistema con letras: **A-B-C-D-E**.

### Las letras ABCDE

- **A - Airway (Vía aérea)**: ¿Puede la persona respirar? ¿Hay algo que bloquea su garganta?
- **B - Breathing (Respiración)**: ¿Está respirando bien? ¿Se mueve el pecho de los dos lados?
- **C - Circulation (Circulación)**: ¿Está sangrando mucho? ¿Tiene pulso?
- **D - Disability (Discapacidad neurológica)**: ¿Está despierta? ¿Puede mover los brazos y piernas?
- **E - Exposure (Exposición)**: Hay que revisar todo el cuerpo, pero sin dejar que la persona se enfríe.

### ¿Por qué este orden?

El orden importa porque lo más peligroso va primero. Si la persona no puede respirar (A), eso la puede matar en minutos. El sangrado (C) también es urgente pero la persona tiene un poco más de tiempo.

### Triage: ¿Quién va primero?

Cuando hay muchos heridos, los rescatistas deciden quién necesita ayuda más urgente. Esto se llama **triage**. Usan colores:
- **Rojo**: Necesita ayuda inmediata
- **Amarillo**: Puede esperar un poco
- **Verde**: Heridas menores, puede caminar
- **Negro**: Desafortunadamente, no se puede ayudar

---

## Simple Explanation (English)

When a person has a serious accident, like a car crash or a bad fall, doctors and paramedics need to check them quickly. To not forget anything, they use a letter system: **A-B-C-D-E**.

### The ABCDE letters

- **A - Airway**: Can the person breathe? Is anything blocking their throat?
- **B - Breathing**: Are they breathing well? Does the chest move on both sides?
- **C - Circulation**: Are they bleeding a lot? Do they have a pulse?
- **D - Disability**: Are they awake? Can they move their arms and legs?
- **E - Exposure**: Check the whole body, but do not let the person get cold.

### Why this order?

The order matters because the most dangerous things come first. If the person cannot breathe (A), that can kill them in minutes. Bleeding (C) is also urgent but the person has a bit more time.

### Triage: Who goes first?

When many people are hurt, rescuers decide who needs help most urgently. This is called **triage**, using colors: Red (immediate), Yellow (can wait), Green (minor), Black (unfortunately cannot be helped).`,
      keyTerms: [
        { term: 'Vía aérea (Airway)', definition: 'El camino por donde entra el aire a los pulmones: nariz, boca y garganta. | The path air takes to reach the lungs: nose, mouth, and throat.', pronunciation: 'VEE-ah ah-EH-reh-ah' },
        { term: 'Triage', definition: 'Sistema para decidir quién necesita ayuda primero cuando hay muchos heridos. | System for deciding who needs help first when many people are injured.', pronunciation: 'tree-AH-heh' },
        { term: 'Circulación', definition: 'El movimiento de la sangre por todo el cuerpo, impulsada por el corazón. | The movement of blood throughout the body, driven by the heart.', pronunciation: 'seer-coo-lah-see-ON' },
        { term: 'Evaluación primaria', definition: 'La primera revisión rápida siguiendo ABCDE para encontrar problemas que amenazan la vida. | The first quick check following ABCDE to find life-threatening problems.', pronunciation: 'eh-vah-loo-ah-see-ON pree-MAH-ree-ah' }
      ],
      analogies: [
        'Revisar a un paciente de trauma es como revisar una casa después de un terremoto. Primero verificas que no se va a caer el techo (vía aérea), luego que haya aire fresco (respiración), después que no haya fugas de agua/gas (sangrado), y finalmente que la electricidad funcione (cerebro). | Checking a trauma patient is like checking a house after an earthquake. First you verify the roof will not collapse (airway), then that there is fresh air (breathing), then no water/gas leaks (bleeding), and finally that the electricity works (brain).',
        'El triage es como la sala de emergencias de un hospital: no atienden por orden de llegada sino por gravedad. El que tiene un corte pequeño espera, mientras el que no puede respirar pasa primero. | Triage is like a hospital emergency room: they do not attend by arrival order but by severity. Someone with a small cut waits, while someone who cannot breathe goes first.'
      ],
      examples: [
        'Después de un accidente de auto, los paramédicos llegan y primero le hablan al paciente. Si responde, su vía aérea está abierta. Luego revisan su respiración, buscan sangrado, verifican si está consciente y finalmente lo revisan de pies a cabeza mientras lo cubren con una manta. | After a car accident, paramedics arrive and first talk to the patient. If they respond, their airway is open. Then they check breathing, look for bleeding, verify consciousness, and finally check them head to toe while covering them with a blanket.'
      ],
      patientCounselingPoints: [
        'Si ves un accidente, llama al 911 primero. No muevas a la persona herida a menos que esté en peligro inmediato (fuego, agua subiendo). | If you see an accident, call 911 first. Do not move the injured person unless they are in immediate danger (fire, rising water).',
        'Si la persona sangra mucho, presiona fuerte con una tela limpia en la herida y no la sueltes. | If the person is bleeding a lot, press hard with a clean cloth on the wound and do not let go.'
      ]
    },
    2: {
      level: 2,
      summary:
        'La evaluación de trauma sigue un enfoque sistemático ABCDE para identificar y tratar amenazas vitales en orden de prioridad. La evaluación primaria se enfoca en problemas inmediatos, seguida de una evaluación secundaria más detallada. | Trauma assessment follows a systematic ABCDE approach to identify and treat life threats in priority order. The primary survey focuses on immediate problems, followed by a more detailed secondary survey.',
      explanation: `## Explicación Intermedia

### Evaluación Primaria (ABCDE)

#### A - Vía Aérea con Protección Cervical
- Abrir la vía aérea con **tracción mandibular** (jaw thrust) en lugar de extensión de la cabeza para proteger la columna cervical
- Buscar obstrucciones: sangre, vómito, dientes rotos, cuerpos extraños
- Colocar **collarín cervical** si se sospecha lesión de columna

#### B - Respiración y Ventilación
- Inspeccionar, palpar, percutir y auscultar ambos hemitórax
- Buscar: neumotórax a tensión, neumotórax abierto, hemotórax masivo, tórax inestable
- Estas condiciones requieren tratamiento inmediato antes de continuar

#### C - Circulación con Control de Hemorragia
- Evaluar: frecuencia cardíaca, presión arterial, llenado capilar, estado de la piel
- **Control de hemorragia externa**: presión directa, torniquetes en extremidades
- Acceso intravenoso (IV) con dos catéteres de gran calibre (14-16 G)
- Inicio de líquidos IV (cristaloides tibios)

#### D - Déficit Neurológico
- **Escala de Glasgow (GCS)**: evalúa apertura ocular, respuesta verbal y respuesta motora (3-15)
- Tamaño y reactividad pupilar
- Nivel de consciencia: A-V-D-I (Alerta, responde a Voz, responde a Dolor, Inconsciente)

#### E - Exposición con Control Ambiental
- Retirar toda la ropa para examinar completamente
- Prevenir hipotermia con mantas calientes y líquidos tibios
- Revisar espalda con giro en bloque

### Evaluación Secundaria
Se realiza después de estabilizar la evaluación primaria:
- Historia AMPLIA: Alergias, Medicamentos, Patología previa, Última comida, Ambiente/mecanismo de lesión
- Examen físico de cabeza a pies
- Estudios de imagen y laboratorio

---

## Intermediate Explanation (English)

### Primary Survey (ABCDE)

#### A - Airway with Cervical Spine Protection
- Open airway with **jaw thrust** (not head tilt) to protect cervical spine
- Look for obstructions: blood, vomit, broken teeth, foreign bodies
- Apply **cervical collar** if spinal injury suspected

#### B - Breathing and Ventilation
- Inspect, palpate, percuss, and auscultate both hemithoraces
- Look for: tension pneumothorax, open pneumothorax, massive hemothorax, flail chest

#### C - Circulation with Hemorrhage Control
- Assess: heart rate, blood pressure, capillary refill, skin status
- **External hemorrhage control**: direct pressure, extremity tourniquets
- IV access with two large-bore catheters (14-16 G)

#### D - Disability (Neurological Deficit)
- **Glasgow Coma Scale (GCS)**: eye opening, verbal response, motor response (3-15)
- Pupil size and reactivity
- AVPU: Alert, Voice, Pain, Unresponsive

#### E - Exposure with Environmental Control
- Remove all clothing for complete examination
- Prevent hypothermia with warm blankets and warm fluids
- Check back with log roll`,
      keyTerms: [
        { term: 'Escala de Glasgow (GCS)', definition: 'Sistema de puntuación de 3-15 que evalúa nivel de consciencia mediante apertura ocular, respuesta verbal y motora. | Scoring system from 3-15 that assesses level of consciousness via eye opening, verbal, and motor response.', pronunciation: 'es-CAH-lah deh GLAS-gow' },
        { term: 'Neumotórax a tensión', definition: 'Aire atrapado en el espacio pleural que comprime el pulmón y desplaza el corazón. Emergencia que requiere descompresión inmediata. | Trapped air in the pleural space compressing the lung and displacing the heart. Emergency requiring immediate decompression.', pronunciation: 'new-moh-TOH-rax ah ten-see-ON' },
        { term: 'Tracción mandibular (Jaw thrust)', definition: 'Maniobra para abrir la vía aérea sin mover el cuello, empujando la mandíbula hacia adelante. | Maneuver to open the airway without moving the neck by pushing the jaw forward.', pronunciation: 'trac-see-ON man-dee-BOO-lar' },
        { term: 'AMPLIA / AMPLE', definition: 'Acrónimo para historia clínica rápida: Alergias, Medicamentos, Patología previa, Líquidos/última comida, Eventos/ambiente. | Acronym for rapid clinical history: Allergies, Medications, Past history, Last meal, Events/environment.', pronunciation: 'AM-plee-ah' },
        { term: 'Torniquete', definition: 'Dispositivo aplicado a una extremidad para detener hemorragia masiva comprimiendo los vasos sanguíneos. | Device applied to an extremity to stop massive hemorrhage by compressing blood vessels.', pronunciation: 'tor-nee-KEH-teh' }
      ],
      analogies: [
        'La evaluación ABCDE es como una lista de verificación de un piloto antes de despegar. No puedes saltar al punto C sin verificar A y B primero, porque cada paso depende del anterior. | The ABCDE assessment is like a pilot\'s checklist before takeoff. You cannot skip to point C without checking A and B first, because each step depends on the previous one.'
      ],
      examples: [
        'Un motociclista de 30 años choca contra un auto. Los paramédicos: (A) le hablan, responde confuso pero la vía aérea está abierta, colocan collarín; (B) auscultan pulmones, simétricos; (C) tiene sangrado en la pierna, aplican presión directa y torniquete, colocan dos IVs; (D) GCS 13 (O3V5M5); (E) lo desvisten y encuentran un hematoma abdominal. | A 30-year-old motorcyclist crashes into a car. Paramedics: (A) speak to him, confused but airway open, apply collar; (B) auscultate lungs, symmetrical; (C) leg bleeding, apply direct pressure and tourniquet, place two IVs; (D) GCS 13 (E3V5M5); (E) undress him and find abdominal bruising.'
      ],
      patientCounselingPoints: [
        'Si estás en un accidente, trata de no moverte hasta que llegue ayuda. Mover el cuello con una lesión de columna puede causar parálisis. | If you are in an accident, try not to move until help arrives. Moving the neck with a spinal injury can cause paralysis.',
        'Los torniquetes salvan vidas. Si hay sangrado masivo en un brazo o pierna, un torniquete bien aplicado es seguro y efectivo. | Tourniquets save lives. If there is massive bleeding on an arm or leg, a properly applied tourniquet is safe and effective.'
      ]
    },
    3: {
      level: 3,
      summary:
        'La evaluación de trauma requiere un enfoque estructurado con evaluación primaria ABCDE para identificar y tratar amenazas vitales inmediatas, seguida de evaluación secundaria completa, reanimación simultánea y estudios complementarios incluyendo FAST y tomografía. Los sistemas de triage como START permiten clasificación rápida en incidentes con múltiples víctimas. | Trauma assessment requires a structured approach with ABCDE primary survey to identify and treat immediate life threats, followed by complete secondary survey, simultaneous resuscitation, and complementary studies including FAST and CT. Triage systems like START allow rapid classification in multiple casualty incidents.',
      explanation: `## Explicación Avanzada

### Evaluación Primaria Detallada

#### A - Vía Aérea
- **Vía aérea definitiva**: Intubación orotraqueal con secuencia rápida (ISR) si GCS ≤ 8 o incapacidad de proteger la vía aérea
- Indicaciones de vía aérea quirúrgica (cricotiroidotomía): imposibilidad de intubación y ventilación
- Mantener inmovilización en línea durante manipulación de vía aérea

#### B - Respiración: Lesiones que Amenazan la Vida
- **Neumotórax a tensión**: Diagnóstico clínico (hipotensión, ausencia de ruidos, desviación traqueal, distensión yugular). Tratamiento: descompresión con aguja (2do espacio intercostal línea medioclavicular) seguida de tubo de tórax
- **Neumotórax abierto**: Sello de tres lados o válvula unidireccional + tubo de tórax
- **Hemotórax masivo**: >1500 mL de sangre en cavidad pleural. Tubo de tórax + considerar toracotomía
- **Tórax inestable**: ≥3 costillas fracturadas en ≥2 sitios. Analgesia + ventilación según necesidad

#### C - Circulación
- **Clasificación de shock hemorrágico** (ATLS):
  - Clase I: <750 mL (15%), FC normal, PA normal
  - Clase II: 750-1500 mL (15-30%), FC 100-120, PA normal
  - Clase III: 1500-2000 mL (30-40%), FC >120, PA disminuida
  - Clase IV: >2000 mL (>40%), FC >140, PA muy baja, letargia
- **Reanimación hemostática**: Protocolo de transfusión masiva con relación 1:1:1 (GR:PFC:plaquetas)
- **Ácido tranexámico (TXA)**: 1g IV en primeras 3 horas post-trauma (estudio CRASH-2)
- **FAST (Focused Assessment with Sonography for Trauma)**: Evalúa líquido libre en pericardio, Morrison, esplenorrenal y pelvis

#### D - Déficit Neurológico
- GCS detallado con componentes individuales
- Pupilas: tamaño, simetría, reactividad
- Signos de herniación: anisocoria, postura de decorticación/descerebración
- Considerar TC de cráneo urgente si GCS ≤ 14 o déficit focal

#### E - Exposición
- Temperatura central
- Giro en bloque para examinar espalda
- Tacto rectal si se sospecha lesión pélvica/medular
- Prevención de la "tríada letal": hipotermia, acidosis, coagulopatía

### Sistemas de Triage

- **START (Simple Triage and Rapid Treatment)**: Basado en capacidad de caminar, respiración, pulso radial y capacidad de seguir órdenes
- **JumpSTART**: Versión pediátrica
- **SALT**: Sort, Assess, Lifesaving interventions, Treatment/Transport

---

## Advanced Explanation (English)

### Detailed Primary Survey

#### A - Airway
- **Definitive airway**: Orotracheal intubation with rapid sequence (RSI) if GCS ≤ 8 or inability to protect airway
- Surgical airway indications (cricothyrotomy): cannot intubate, cannot ventilate
- Maintain in-line stabilization during airway manipulation

#### B - Breathing: Life-Threatening Injuries
- **Tension pneumothorax**: Clinical diagnosis. Treatment: needle decompression followed by chest tube
- **Open pneumothorax**: Three-sided seal + chest tube
- **Massive hemothorax**: >1500 mL. Chest tube + consider thoracotomy
- **Flail chest**: ≥3 ribs fractured in ≥2 places. Analgesia + ventilation as needed

#### C - Circulation
- **Hemorrhagic shock classification** (ATLS Classes I-IV)
- **Hemostatic resuscitation**: Massive transfusion protocol 1:1:1 (PRBC:FFP:Platelets)
- **Tranexamic acid (TXA)**: 1g IV within first 3 hours (CRASH-2 trial)
- **FAST**: Free fluid assessment in pericardium, Morrison's, splenorenal, pelvis

#### D - Disability
- Detailed GCS, pupils, herniation signs
- Urgent head CT if GCS ≤ 14 or focal deficit

#### E - Exposure
- Core temperature; log roll; prevention of lethal triad (hypothermia, acidosis, coagulopathy)`,
      keyTerms: [
        { term: 'FAST', definition: 'Evaluación ecográfica enfocada en trauma que busca líquido libre en 4 ventanas: pericárdica, hepatorrenal (Morrison), esplenorrenal y pélvica. | Focused Assessment with Sonography for Trauma looking for free fluid in 4 windows: pericardial, hepatorenal (Morrison\'s), splenorenal, and pelvic.', pronunciation: 'FAST (acrónimo inglés)' },
        { term: 'Tríada letal', definition: 'Combinación de hipotermia, acidosis y coagulopatía que aumenta dramáticamente la mortalidad en trauma. | Combination of hypothermia, acidosis, and coagulopathy that dramatically increases mortality in trauma.', pronunciation: 'TREE-ah-dah leh-TAL' },
        { term: 'Ácido tranexámico (TXA)', definition: 'Antifibrinolítico que reduce mortalidad por sangrado cuando se administra en las primeras 3 horas post-trauma. Dosis: 1g IV. | Antifibrinolytic that reduces bleeding mortality when given within the first 3 hours post-trauma. Dose: 1g IV.', pronunciation: 'AH-see-doh trah-nex-AH-mee-coh' },
        { term: 'Protocolo de transfusión masiva', definition: 'Administración de hemoderivados en proporción balanceada (1:1:1 GR:PFC:Plaquetas) para pacientes con hemorragia masiva. | Administration of blood products in balanced ratio (1:1:1 PRBC:FFP:Platelets) for patients with massive hemorrhage.', pronunciation: 'trans-foo-see-ON mah-SEE-vah' }
      ],
      clinicalNotes: `### Notas Clínicas / Clinical Notes

- El neumotórax a tensión es un diagnóstico CLÍNICO que no debe esperar radiografía. Tratar inmediatamente si se sospecha.
- Tension pneumothorax is a CLINICAL diagnosis that should not wait for X-ray. Treat immediately if suspected.
- El TXA pierde efectividad después de 3 horas y puede ser dañino si se administra tarde (CRASH-2).
- TXA loses effectiveness after 3 hours and may be harmful if given late (CRASH-2).
- La hipotensión permisiva (PAS 80-90 mmHg) es aceptable en trauma penetrante sin lesión cerebral mientras se logra control definitivo de la hemorragia.
- Permissive hypotension (SBP 80-90 mmHg) is acceptable in penetrating trauma without brain injury while achieving definitive hemorrhage control.
- El FAST tiene alta especificidad pero sensibilidad limitada; un FAST negativo no descarta lesión intraabdominal.
- FAST has high specificity but limited sensitivity; a negative FAST does not rule out intraabdominal injury.`
    },
    4: {
      level: 4,
      summary:
        'El manejo avanzado del trauma integra evaluación primaria y secundaria con reanimación simultánea, control de daños quirúrgico, reanimación hemostática con productos sanguíneos balanceados, y decisiones basadas en mecanismo de lesión, fisiología del paciente y respuesta a la reanimación. La cirugía de control de daños prioriza hemostasia y contaminación sobre reparación definitiva. | Advanced trauma management integrates primary and secondary surveys with simultaneous resuscitation, damage control surgery, hemostatic resuscitation with balanced blood products, and decisions based on injury mechanism, patient physiology, and resuscitation response. Damage control surgery prioritizes hemostasis and contamination over definitive repair.',
      explanation: `## Explicación de Nivel Profesional

### Reanimación de Control de Daños

La filosofía de control de daños reconoce que la fisiología del paciente, no la anatomía, determina el manejo:

#### Principios Clave
1. **Hipotensión permisiva**: PA sistólica objetivo 80-90 mmHg (sin lesión cerebral) hasta control quirúrgico definitivo
2. **Reanimación hemostática**: Minimizar cristaloides, uso temprano de hemoderivados 1:1:1
3. **Cirugía de control de daños**: Operación abreviada para hemostasia y control de contaminación, seguida de reanimación en UCI, luego reparación definitiva planificada
4. **Prevención de la tríada letal**: Calentamiento activo, corrección de acidosis y coagulopatía

#### Protocolo de Transfusión Masiva
- Activación: pérdida estimada ≥1 volemia o signos de shock hemorrágico clase III-IV
- Productos: paquetes de GR:PFC:Plaquetas en proporción 1:1:1
- Considerar crioprecipitado si fibrinógeno < 150 mg/dL
- Calcio IV para contrarrestar citrato de los hemoderivados
- Monitorizar con tromboelastografía (TEG) o tromboelastometría rotacional (ROTEM)

### Decisiones Quirúrgicas en Trauma

#### Indicaciones de Toracotomía de Emergencia (Toracotomía de Reanimación)
- Paro cardíaco traumático con actividad cardíaca reciente (penetrante: < 15 min sin signos vitales; cerrado: < 10 min)
- Taponamiento cardíaco
- Hemorragia torácica masiva incontrolable
- Embolia aérea masiva

#### Indicaciones de Laparotomía Exploratoria
- FAST positivo con inestabilidad hemodinámica
- Peritonitis
- Evisceración
- Sangrado gastrointestinal masivo
- Neumoperitoneo en radiografía

### Trauma Pediátrico: Consideraciones Especiales
- Los niños compensan mejor la hipovolemia; la hipotensión es un signo tardío
- Volumen de reanimación: 20 mL/kg cristaloide, luego 10 mL/kg GR
- Mayor riesgo de lesión multiorgánica por tamaño corporal menor
- Peso estimado: (edad × 2) + 8 kg para equipamiento

### Manejo del Trauma Pélvico
- Inestabilidad hemodinámica + fractura pélvica = fijación externa o sábana pélvica
- Hemorragia retroperitoneal puede ser exanguinante
- Angioembolización para sangrado arterial pélvico activo

---

## Professional-Level Explanation (English)

### Damage Control Resuscitation

Damage control philosophy recognizes that patient physiology, not anatomy, determines management.

#### Key Principles
1. **Permissive hypotension**: Target SBP 80-90 mmHg (without brain injury) until definitive surgical control
2. **Hemostatic resuscitation**: Minimize crystalloids, early use of blood products 1:1:1
3. **Damage control surgery**: Abbreviated operation for hemostasis and contamination control, followed by ICU resuscitation, then planned definitive repair
4. **Lethal triad prevention**: Active warming, correction of acidosis and coagulopathy

#### Massive Transfusion Protocol
- Activation: estimated loss ≥1 blood volume or class III-IV hemorrhagic shock signs
- Products: PRBC:FFP:Platelets in 1:1:1 ratio
- Consider cryoprecipitate if fibrinogen < 150 mg/dL
- IV calcium to counteract citrate from blood products
- Monitor with TEG or ROTEM

### Surgical Decisions in Trauma

#### Emergency Thoracotomy Indications
- Traumatic cardiac arrest with recent cardiac activity
- Cardiac tamponade
- Uncontrollable massive thoracic hemorrhage

#### Exploratory Laparotomy Indications
- Positive FAST with hemodynamic instability
- Peritonitis, evisceration, massive GI bleeding, pneumoperitoneum`,
      keyTerms: [
        { term: 'Cirugía de control de daños', definition: 'Operación abreviada enfocada solo en detener hemorragia y contaminación, postergando reparación definitiva hasta estabilización fisiológica en UCI. | Abbreviated operation focused only on stopping hemorrhage and contamination, deferring definitive repair until physiological stabilization in ICU.', pronunciation: 'see-roo-HEE-ah deh con-TROL deh DAH-nyos' },
        { term: 'Tromboelastografía (TEG)', definition: 'Prueba viscoelástica point-of-care que evalúa la formación y lisis del coágulo en tiempo real para guiar transfusión. | Point-of-care viscoelastic test that evaluates clot formation and lysis in real time to guide transfusion.', pronunciation: 'trom-boh-eh-las-toh-grah-FEE-ah' },
        { term: 'Hipotensión permisiva', definition: 'Estrategia de mantener presión arterial baja (PAS 80-90 mmHg) para reducir sangrado hasta control quirúrgico definitivo. Contraindicada en lesión cerebral. | Strategy of maintaining low blood pressure (SBP 80-90 mmHg) to reduce bleeding until definitive surgical control. Contraindicated in brain injury.', pronunciation: 'ee-poh-ten-see-ON per-mee-SEE-vah' },
        { term: 'Toracotomía de reanimación', definition: 'Toracotomía de emergencia en sala de reanimación para paro cardíaco traumático, taponamiento o hemorragia torácica masiva. | Emergency thoracotomy in the resuscitation room for traumatic cardiac arrest, tamponade, or massive thoracic hemorrhage.', pronunciation: 'toh-rah-coh-toh-MEE-ah deh reh-ah-nee-mah-see-ON' }
      ],
      clinicalNotes: `### Notas Clínicas Avanzadas / Advanced Clinical Notes

- La reanimación con cristaloides en grandes volúmenes empeora la coagulopatía dilucional y se asocia con peores resultados. Las guías actuales favorecen el uso temprano de hemoderivados.
- Large-volume crystalloid resuscitation worsens dilutional coagulopathy and is associated with worse outcomes. Current guidelines favor early blood product use.
- El ácido tranexámico debe administrarse en las primeras 3 horas; el estudio CRASH-2 mostró aumento de mortalidad si se administra después.
- Tranexamic acid should be given within the first 3 hours; the CRASH-2 study showed increased mortality if given later.
- La toracotomía de reanimación tiene mejor pronóstico en trauma penetrante torácico (supervivencia ~25%) vs trauma cerrado (<5%).
- Resuscitative thoracotomy has better prognosis in penetrating thoracic trauma (~25% survival) vs blunt trauma (<5%).
- El TEG/ROTEM permite transfusión dirigida por objetivos, reduciendo el uso innecesario de hemoderivados.
- TEG/ROTEM allows goal-directed transfusion, reducing unnecessary blood product use.`
    },
    5: {
      level: 5,
      summary:
        'El manejo del trauma basado en evidencia actual integra evaluación sistemática ATLS, reanimación de control de daños con hemoderivados balanceados y guiada por viscoelastometría, cirugía de control de daños, REBOA para control hemorrágico no compresible, y protocolos de transfusión masiva. La investigación actual se centra en sangre completa, REBOA, reanimación en campo con hemoderivados y estratificación pronóstica mediante biomarcadores y scores validados. | Current evidence-based trauma management integrates systematic ATLS assessment, damage control resuscitation with balanced blood products and viscoelastometry guidance, damage control surgery, REBOA for non-compressible hemorrhage control, and massive transfusion protocols. Current research focuses on whole blood, REBOA, prehospital blood product resuscitation, and prognostic stratification via biomarkers and validated scores.',
      explanation: `## Explicación de Nivel Clínico Experto

### Evidencia Actual en Trauma

#### Reanimación Hemostática: Estado del Arte
- **PROPPR Trial (Holcomb et al., JAMA 2015)**: Proporción 1:1:1 (GR:PFC:Plaquetas) vs 1:1:2 no mostró diferencia significativa en mortalidad a 24h o 30 días, pero sí mayor hemostasia y menor muerte por exanguinación a 24h en el grupo 1:1:1.
- **Sangre completa baja en título (LTOWB)**: Evidencia creciente de registro militar y civil sugiere beneficios de la sangre completa sobre componentes separados. Estudios en curso.
- **Reanimación prehospitalaria con plasma**: El ensayo PAMPer (Sperry et al., NEJM 2018) mostró reducción de mortalidad a 30 días con plasma prehospitalario (23.2% vs 33.0%).
- **TXA prehospitalario**: El estudio CRASH-3 (Lancet 2019) sugiere beneficio en TCE leve-moderado si se administra en <3 horas.

#### REBOA (Resuscitative Endovascular Balloon Occlusion of the Aorta)
- Balón endovascular para oclusión aórtica temporal en hemorragia no compresible por debajo del diafragma
- **Zona I**: Aorta descendente (subclavia izquierda al tronco celíaco) - para hemorragia abdominal
- **Zona III**: Aorta infrarrenal (debajo de las renales a la bifurcación) - para hemorragia pélvica
- Evidencia: estudios observacionales sugieren beneficio como puente a cirugía; ensayos controlados limitados
- Riesgo de isquemia distal; tiempo de oclusión debe minimizarse (<60 minutos idealmente)
- El oclusión parcial del REBOA (pREBOA) reduce isquemia distal

#### Viscoelastometría en Trauma
- TEG y ROTEM permiten diagnóstico rápido del tipo de coagulopatía traumática
- **Coagulopatía traumática aguda (CTA)**: Hiperfibrinólisis, consumo de factores, disfunción plaquetaria
- ROTEM guiado: EXTEM (vía extrínseca), FIBTEM (fibrinógeno), APTEM (fibrinólisis)
- La transfusión guiada por viscoelastometría reduce uso de hemoderivados y puede mejorar supervivencia (ITACTIC trial)

#### Scores Pronósticos y de Activación
- **ABC Score**: Mecanismo penetrante, PAS ≤90, FC ≥120, FAST positivo - ≥2 puntos activa protocolo de transfusión masiva
- **ISS (Injury Severity Score)**: Suma de cuadrados de las 3 regiones corporales más afectadas (AIS). ISS ≥16 = politraumatismo
- **TRISS**: Combina RTS (Revised Trauma Score), ISS, edad y mecanismo para predicción de supervivencia
- **Lactato sérico y déficit de base**: Marcadores de hipoperfusión tisular y guías de reanimación

#### Trauma Cerebral: Evidencia Contemporánea
- **PAS objetivo ≥110 mmHg** en TCE severo (BTF Guidelines 2016) - NO hipotensión permisiva
- Solución salina hipertónica o manitol para hipertensión intracraneal
- Craniectomía descompresiva: el ensayo RESCUEicp mostró menor mortalidad pero mayor discapacidad; decisión individualizada
- Monitorización de PIC recomendada en TCE severo con TC anormal

---

## Expert Clinical-Level Explanation (English)

### Current Evidence in Trauma

#### Hemostatic Resuscitation: State of the Art
- **PROPPR Trial**: 1:1:1 ratio achieved more hemostasis and less exsanguination death at 24h
- **Low-titer O whole blood (LTOWB)**: Growing military and civilian evidence suggests benefits over component therapy
- **Prehospital plasma (PAMPer trial)**: Reduced 30-day mortality (23.2% vs 33.0%)
- **Prehospital TXA (CRASH-3)**: Suggests benefit in mild-moderate TBI if given within 3 hours

#### REBOA
- Endovascular balloon for temporary aortic occlusion in non-compressible sub-diaphragmatic hemorrhage
- Zone I (abdominal hemorrhage), Zone III (pelvic hemorrhage)
- Partial REBOA (pREBOA) reduces distal ischemia
- Limited RCT evidence; observational data suggest benefit as bridge to surgery

#### Viscoelastometry in Trauma
- TEG/ROTEM enable rapid diagnosis of acute traumatic coagulopathy
- Goal-directed transfusion reduces blood product use and may improve survival

#### Prognostic Scores
- ABC Score for massive transfusion activation
- ISS ≥16 defines polytrauma
- Lactate and base deficit guide resuscitation adequacy`,
      keyTerms: [
        { term: 'REBOA', definition: 'Oclusión endovascular con balón de la aorta para control temporal de hemorragia no compresible infradiafragmática. Zonas I (abdominal) y III (pélvica). | Resuscitative Endovascular Balloon Occlusion of the Aorta for temporary control of non-compressible sub-diaphragmatic hemorrhage. Zones I (abdominal) and III (pelvic).', pronunciation: 'reh-BOH-ah' },
        { term: 'Coagulopatía traumática aguda (CTA)', definition: 'Coagulopatía endógena inducida por el trauma mismo (no dilucional), mediada por activación de proteína C, hiperfibrinólisis y disfunción plaquetaria. | Endogenous trauma-induced coagulopathy (not dilutional), mediated by protein C activation, hyperfibrinolysis, and platelet dysfunction.', pronunciation: 'coh-ah-goo-loh-pah-TEE-ah traw-MAH-tee-cah' },
        { term: 'ISS (Injury Severity Score)', definition: 'Puntuación anatómica del trauma: suma de cuadrados de los AIS más altos de las 3 regiones corporales más afectadas. Rango 1-75. ISS ≥16 = politraumatismo. | Anatomical trauma score: sum of squares of highest AIS from 3 most injured body regions. Range 1-75. ISS ≥16 = polytrauma.', pronunciation: 'ISS (acrónimo inglés)' },
        { term: 'ROTEM / TEG', definition: 'Pruebas viscoelásticas point-of-care que evalúan cinética de formación del coágulo, fuerza y fibrinólisis para guiar transfusión individualizada en tiempo real. | Point-of-care viscoelastic tests evaluating clot formation kinetics, strength, and fibrinolysis to guide individualized real-time transfusion.', pronunciation: 'ROH-tem / TEG' }
      ],
      clinicalNotes: `### Notas Clínicas de Nivel Experto / Expert Clinical Notes

- La sangre completa baja en título (LTOWB) está siendo adoptada por sistemas de trauma civiles y militares con resultados prometedores; reduce la complejidad logística y puede mejorar hemostasia.
- Low-titer O whole blood (LTOWB) is being adopted by civilian and military trauma systems with promising results; reduces logistic complexity and may improve hemostasis.
- El REBOA es un puente a la cirugía, no un tratamiento definitivo. El tiempo de oclusión debe minimizarse para evitar lesión isquémica-reperfusión.
- REBOA is a bridge to surgery, not definitive treatment. Occlusion time should be minimized to avoid ischemia-reperfusion injury.
- La coagulopatía traumática aguda afecta hasta al 25% de los pacientes traumatizados al ingreso y se asocia con 4x mayor mortalidad.
- Acute traumatic coagulopathy affects up to 25% of trauma patients at admission and is associated with 4x greater mortality.
- En TCE severo, la hipotensión permisiva está CONTRAINDICADA. Mantener PAS ≥110 mmHg para asegurar perfusión cerebral adecuada.
- In severe TBI, permissive hypotension is CONTRAINDICATED. Maintain SBP ≥110 mmHg to ensure adequate cerebral perfusion.`
    }
  },

  media: [],
  citations: [
    { id: 'ref-ta-1', type: 'textbook', title: 'Advanced Trauma Life Support (ATLS), 10th Edition', authors: ['American College of Surgeons Committee on Trauma'], source: 'American College of Surgeons, 2018', license: 'CC BY 4.0' },
    { id: 'ref-ta-2', type: 'journal', title: 'A Randomized Clinical Trial of Transfusion Ratios in Acute Trauma (PROPPR)', authors: ['Holcomb JB', 'Tilley BC', 'Baraniuk S', 'et al.'], source: 'JAMA. 2015;313(5):471-482', license: 'CC BY 4.0' },
    { id: 'ref-ta-3', type: 'journal', title: 'Prehospital Plasma during Air Medical Transport (PAMPer)', authors: ['Sperry JL', 'Guyette FX', 'Brown JB', 'et al.'], source: 'N Engl J Med. 2018;379(4):315-326', license: 'CC BY 4.0' },
    { id: 'ref-ta-4', type: 'journal', title: 'Effects of tranexamic acid on death and other vascular events in patients with TBI (CRASH-3)', authors: ['CRASH-3 trial collaborators'], source: 'Lancet. 2019;394(10210):1713-1723', license: 'CC BY 4.0' },
    { id: 'ref-ta-5', type: 'textbook', title: 'Tintinalli\'s Emergency Medicine, 9th Edition', authors: ['Tintinalli JE', 'Ma OJ', 'Yealy DM'], source: 'McGraw-Hill, 2020', license: 'CC BY 4.0' }
  ],
  crossReferences: [
    { targetId: 'condition-choque-shock-states', targetType: 'condition', relationship: 'related', label: 'Choque / Shock States' },
    { targetId: 'condition-manejo-via-aerea-airway', targetType: 'condition', relationship: 'related', label: 'Manejo de Vía Aérea / Airway Management' },
    { targetId: 'condition-paro-cardiaco-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Paro Cardíaco / Cardiac Arrest' },
  ],
  tags: {
    systems: ['musculoskeletal', 'emergency', 'cardiovascular', 'neurological'],
    topics: ['trauma', 'ATLS', 'primary survey', 'triage', 'hemorrhage control', 'damage control'],
    keywords: ['evaluación de trauma', 'ABCDE', 'triage', 'FAST', 'control de daños', 'transfusión masiva', 'REBOA', 'TXA'],
    clinicalRelevance: 'critical' as const
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team']
};
