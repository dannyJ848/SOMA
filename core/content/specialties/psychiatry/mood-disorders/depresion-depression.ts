/**
 * Depresión Mayor / Major Depression
 *
 * Contenido educativo integral sobre la depresión mayor con enfoque
 * en la comunidad hispanohablante. Incluye síntomas, diagnóstico,
 * tratamiento y recursos de crisis.
 *
 * Comprehensive educational content on major depression with focus
 * on Spanish-speaking communities. Includes symptoms, diagnosis,
 * treatment, and crisis resources.
 */

import { EducationalContent } from '../../../types';

export const depresionDepressionContent: EducationalContent = {
  id: 'condition-depresion-depression',
  type: 'condition',
  name: 'Major Depression',
  nameEs: 'Depresión Mayor',
  alternateNames: [
    'Trastorno Depresivo Mayor',
    'Major Depressive Disorder',
    'MDD',
    'TDM',
    'Depresión Clínica',
    'Clinical Depression',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'La depresión mayor es una enfermedad médica real que causa tristeza profunda, pérdida de interés y cansancio persistente. No es debilidad ni falta de voluntad. Se puede tratar. | Major depression is a real medical illness that causes deep sadness, loss of interest, and persistent fatigue. It is not weakness or a lack of willpower. It can be treated.',
      explanation: `## Explicación

La depresión mayor es una enfermedad del cerebro, no un defecto de carácter. Cualquier persona puede desarrollar depresión, sin importar su edad, género, cultura o situación económica.

**¿Qué se siente con depresión?**

- Tristeza profunda casi todos los días
- Perder el interés en cosas que antes disfrutabas
- Sentirse muy cansado/a, incluso después de dormir
- Dormir demasiado o tener insomnio
- Cambios en el apetito (comer mucho más o mucho menos)
- Sentirse inútil o con culpa sin razón clara
- Dificultad para concentrarse o tomar decisiones
- Pensamientos de muerte o de hacerse daño

**¿Es diferente a la tristeza normal?**

Todos nos sentimos tristes a veces. Eso es normal. Pero la depresión es diferente: dura semanas o meses, afecta tu trabajo, tus relaciones y tu salud. No se puede "superar con fuerza de voluntad."

**Mensaje importante para la comunidad latina:**

En muchas familias hispanas, la depresión puede confundirse con "flojera," "debilidad" o "falta de fe." Esto NO es cierto. La depresión es una condición médica causada por cambios en la química del cerebro. Buscar ayuda es un acto de valentía, no de debilidad.

**¿Qué puedo hacer?**

- Hablar con un médico o profesional de salud mental
- La depresión se trata con medicamentos, terapia, o ambos
- El tratamiento funciona: la mayoría de las personas mejoran significativamente
- No estás solo/a

**Recursos de crisis:**
- Línea 988 de Prevención del Suicidio y Crisis (disponible en español): llama o envía un mensaje de texto al 988
- Línea de Crisis por Texto: envía HOLA al 741741

---
## Explanation

Major depression is a brain illness, not a character flaw. Anyone can develop depression, regardless of age, gender, culture, or economic situation.

**What does depression feel like?**

- Deep sadness nearly every day
- Losing interest in things you used to enjoy
- Feeling very tired, even after sleeping
- Sleeping too much or having insomnia
- Changes in appetite (eating much more or much less)
- Feeling worthless or guilty for no clear reason
- Difficulty concentrating or making decisions
- Thoughts of death or self-harm

**Is it different from normal sadness?**

We all feel sad sometimes. That is normal. But depression is different: it lasts weeks or months, it affects your work, relationships, and health. You cannot just "snap out of it."

**Important message for the Latino community:**

In many Hispanic families, depression may be mistaken for "laziness," "weakness," or "lack of faith." This is NOT true. Depression is a medical condition caused by changes in brain chemistry. Seeking help is an act of courage, not weakness.

**What can I do?**

- Talk to a doctor or mental health professional
- Depression is treated with medications, therapy, or both
- Treatment works: most people improve significantly
- You are not alone

**Crisis resources:**
- 988 Suicide & Crisis Lifeline (available in Spanish): call or text 988
- Crisis Text Line: text HELLO to 741741`,
      keyTerms: [
        {
          term: 'depresión',
          definition:
            'Enfermedad del cerebro que causa tristeza profunda y persistente que interfiere con la vida diaria. | Brain illness causing deep and persistent sadness that interferes with daily life.',
        },
        {
          term: 'neurotransmisor',
          definition:
            'Sustancia química del cerebro que transmite señales entre las neuronas. En la depresión, estos químicos están desequilibrados. | Brain chemical that transmits signals between neurons. In depression, these chemicals are imbalanced.',
        },
        {
          term: 'terapia',
          definition:
            'Tratamiento donde un profesional te ayuda a entender y manejar tus pensamientos y emociones. | Treatment where a professional helps you understand and manage your thoughts and emotions.',
        },
      ],
      analogies: [
        'La depresión es como caminar con un peso invisible en los hombros: los demás no lo ven, pero tú lo sientes en cada paso. | Depression is like walking with an invisible weight on your shoulders: others cannot see it, but you feel it with every step.',
        'Así como la diabetes afecta el páncreas, la depresión afecta el cerebro. Ambas son enfermedades médicas que requieren tratamiento. | Just as diabetes affects the pancreas, depression affects the brain. Both are medical illnesses that require treatment.',
      ],
      examples: [
        'Una madre que siempre fue activa ahora no puede levantarse de la cama ni cuidar a sus hijos, no por falta de amor, sino por la depresión. | A mother who was always active now cannot get out of bed or care for her children, not from lack of love, but because of depression.',
        'Un joven estudiante deja de salir con amigos, sus notas bajan, y pierde interés en el fútbol que tanto amaba. Esto no es pereza, es depresión. | A young student stops going out with friends, grades drop, and loses interest in the soccer they loved. This is not laziness, it is depression.',
      ],
      patientCounselingPoints: [
        'La depresión NO es su culpa. Es una enfermedad médica como la diabetes o la presión alta. | Depression is NOT your fault. It is a medical illness like diabetes or high blood pressure.',
        'Buscar ayuda profesional es un acto de fortaleza. Pedir ayuda significa que usted se valora. | Seeking professional help is an act of strength. Asking for help means you value yourself.',
        'El tratamiento funciona. Con medicamentos, terapia o ambos, la mayoría de las personas mejoran significativamente. | Treatment works. With medications, therapy, or both, most people improve significantly.',
        'Si tiene pensamientos de hacerse daño, llame al 988 ahora. Hay ayuda disponible en español, las 24 horas. | If you have thoughts of harming yourself, call 988 now. Help is available in Spanish, 24 hours a day.',
      ],
    },
    2: {
      level: 2,
      summary:
        'El Trastorno Depresivo Mayor (TDM) se diagnostica cuando una persona presenta estado de ánimo deprimido o pérdida de interés durante al menos 2 semanas, junto con otros síntomas que afectan su funcionamiento. Involucra cambios en neurotransmisores como la serotonina. | Major Depressive Disorder (MDD) is diagnosed when a person has depressed mood or loss of interest for at least 2 weeks, along with other symptoms that affect functioning. It involves changes in neurotransmitters like serotonin.',
      explanation: `## Explicación

**Criterios diagnósticos simplificados:**

Para diagnosticar depresión mayor, se necesitan al menos 5 de los siguientes síntomas durante 2 semanas o más, y al menos uno debe ser (1) o (2):

1. Estado de ánimo deprimido la mayor parte del día
2. Pérdida de interés o placer (anhedonia)
3. Cambio significativo de peso o apetito
4. Insomnio o hipersomnia
5. Agitación o retardo psicomotor
6. Fatiga o pérdida de energía
7. Sentimientos de inutilidad o culpa excesiva
8. Dificultad para concentrarse o tomar decisiones
9. Pensamientos recurrentes de muerte o suicidio

**¿Qué causa la depresión?**

La depresión resulta de una combinación de factores:
- **Biológicos:** Desequilibrio de neurotransmisores (serotonina, norepinefrina, dopamina), genética
- **Psicológicos:** Patrones de pensamiento negativo, baja autoestima, trauma
- **Sociales:** Estrés, pérdida de un ser querido, aislamiento, pobreza, discriminación

**Tipos de depresión:**
- **Depresión leve:** Pocos síntomas, funcionamiento reducido pero posible
- **Depresión moderada:** Más síntomas, afecta significativamente la vida diaria
- **Depresión grave:** Muchos síntomas, puede incluir psicosis o ideas suicidas
- **Depresión con patrón estacional:** Empeora en invierno por falta de luz solar
- **Depresión periparto:** Ocurre durante el embarazo o después del parto

**Tratamiento:**

*Medicamentos antidepresivos:*
- ISRS (Inhibidores Selectivos de la Recaptación de Serotonina): fluoxetina, sertralina
- Tardan 2-4 semanas en hacer efecto completo
- No causan adicción
- El médico supervisa los efectos secundarios

*Psicoterapia:*
- Terapia Cognitivo-Conductual (TCC): ayuda a cambiar patrones de pensamiento negativo
- Terapia Interpersonal: mejora las relaciones y la comunicación
- Terapia de activación conductual: aumenta gradualmente las actividades placenteras

*Cambios en el estilo de vida:*
- Ejercicio regular (30 minutos, 3-5 veces por semana)
- Rutinas de sueño saludables
- Alimentación balanceada
- Conexión social
- Reducir el consumo de alcohol

**Consideraciones culturales para la comunidad hispana:**

- El concepto de "nervios" en muchas culturas latinas puede describir síntomas depresivos
- La depresión puede manifestarse más como síntomas físicos (dolor de cabeza, dolor de estómago) en personas hispanas
- Las barreras de idioma pueden dificultar el acceso a atención en salud mental
- La fe y la espiritualidad pueden ser recursos importantes, pero no reemplazan el tratamiento profesional
- El familismo (importancia de la familia) puede ser una fortaleza en la recuperación

---
## Explanation

**Simplified diagnostic criteria:**

To diagnose major depression, at least 5 of the following symptoms for 2 weeks or more are needed, and at least one must be (1) or (2):

1. Depressed mood most of the day
2. Loss of interest or pleasure (anhedonia)
3. Significant weight or appetite change
4. Insomnia or hypersomnia
5. Psychomotor agitation or retardation
6. Fatigue or loss of energy
7. Feelings of worthlessness or excessive guilt
8. Difficulty concentrating or making decisions
9. Recurrent thoughts of death or suicide

**What causes depression?**

Depression results from a combination of factors:
- **Biological:** Neurotransmitter imbalance (serotonin, norepinephrine, dopamine), genetics
- **Psychological:** Negative thought patterns, low self-esteem, trauma
- **Social:** Stress, loss of a loved one, isolation, poverty, discrimination

**Types of depression:**
- **Mild depression:** Few symptoms, reduced but possible functioning
- **Moderate depression:** More symptoms, significantly affects daily life
- **Severe depression:** Many symptoms, may include psychosis or suicidal thoughts
- **Seasonal pattern:** Worsens in winter due to lack of sunlight
- **Peripartum depression:** Occurs during pregnancy or after delivery

**Treatment:**

*Antidepressant medications:*
- SSRIs (Selective Serotonin Reuptake Inhibitors): fluoxetine, sertraline
- Take 2-4 weeks for full effect
- Not addictive
- Doctor monitors side effects

*Psychotherapy:*
- Cognitive Behavioral Therapy (CBT): helps change negative thought patterns
- Interpersonal Therapy: improves relationships and communication
- Behavioral activation: gradually increases pleasurable activities

*Lifestyle changes:*
- Regular exercise (30 minutes, 3-5 times per week)
- Healthy sleep routines
- Balanced nutrition
- Social connection
- Reduce alcohol consumption

**Cultural considerations for the Hispanic community:**

- The concept of "nervios" in many Latino cultures may describe depressive symptoms
- Depression may manifest more as physical symptoms (headache, stomachache) in Hispanic individuals
- Language barriers can make accessing mental health care difficult
- Faith and spirituality can be important resources but do not replace professional treatment
- Familismo (importance of family) can be a strength in recovery`,
      keyTerms: [
        {
          term: 'anhedonia',
          definition:
            'Incapacidad de sentir placer o interés en actividades que antes eran disfrutables. Síntoma central de la depresión. | Inability to feel pleasure or interest in previously enjoyable activities. Core symptom of depression.',
          pronunciation: 'an-eh-DOH-nee-ah',
        },
        {
          term: 'ISRS / SSRI',
          definition:
            'Inhibidores Selectivos de la Recaptación de Serotonina. Medicamentos antidepresivos de primera línea que aumentan la serotonina disponible en el cerebro. | Selective Serotonin Reuptake Inhibitors. First-line antidepressant medications that increase available serotonin in the brain.',
        },
        {
          term: 'terapia cognitivo-conductual (TCC)',
          definition:
            'Tipo de psicoterapia que ayuda a identificar y cambiar pensamientos y comportamientos negativos que contribuyen a la depresión. | Type of psychotherapy that helps identify and change negative thoughts and behaviors contributing to depression.',
        },
        {
          term: 'nervios',
          definition:
            'Término cultural latino que describe malestar emocional y físico, a menudo relacionado con ansiedad o depresión. | Latino cultural term describing emotional and physical distress, often related to anxiety or depression.',
        },
      ],
      analogies: [
        'Los neurotransmisores son como mensajeros del cerebro. En la depresión, hay pocos mensajeros trabajando, así que los mensajes de bienestar no llegan. Los antidepresivos ayudan a que haya más mensajeros disponibles. | Neurotransmitters are like brain messengers. In depression, too few messengers are working, so wellness messages do not arrive. Antidepressants help make more messengers available.',
      ],
      examples: [
        'El concepto de "nervios" que la abuela describe puede en realidad ser depresión que necesita tratamiento médico, no solo descanso o té de manzanilla. | The concept of "nervios" that grandmother describes may actually be depression that needs medical treatment, not just rest or chamomile tea.',
        'Una persona con depresión periparto no es "mala madre." Su cerebro necesita ayuda médica para funcionar correctamente después del parto. | A person with peripartum depression is not a "bad mother." Their brain needs medical help to function properly after delivery.',
      ],
      patientCounselingPoints: [
        'Los antidepresivos no causan adicción. Son medicamentos seguros que su cerebro necesita, como un diabético necesita insulina. | Antidepressants are not addictive. They are safe medications your brain needs, like a diabetic needs insulin.',
        'Es normal que los antidepresivos tarden 2-4 semanas en funcionar completamente. No se desanime si no se siente mejor inmediatamente. | It is normal for antidepressants to take 2-4 weeks to work fully. Do not be discouraged if you do not feel better immediately.',
        'Hablar con un terapeuta no significa que usted esté "loco/a." Significa que usted está tomando control de su salud. | Talking to a therapist does not mean you are "crazy." It means you are taking control of your health.',
      ],
    },
    3: {
      level: 3,
      summary:
        'El TDM involucra disfunción de los sistemas serotoninérgico, noradrenérgico y dopaminérgico, con alteraciones del eje HPA y neuroinflamación. El diagnóstico requiere evaluación basada en DSM-5-TR con exclusión de condiciones médicas y abuso de sustancias. El tratamiento es multimodal. | MDD involves dysfunction of serotonergic, noradrenergic, and dopaminergic systems, with HPA axis alterations and neuroinflammation. Diagnosis requires DSM-5-TR based evaluation with exclusion of medical conditions and substance abuse. Treatment is multimodal.',
      explanation: `## Explicación

**Criterios diagnósticos DSM-5-TR para Trastorno Depresivo Mayor:**

A. Cinco o más síntomas durante un período de 2 semanas, representando un cambio respecto al funcionamiento anterior. Al menos uno debe ser (1) o (2):
   1. Estado de ánimo deprimido la mayor parte del día, casi todos los días
   2. Disminución marcada del interés o placer (anhedonia)
   3. Pérdida o ganancia significativa de peso (>5% en un mes) o cambio de apetito
   4. Insomnio o hipersomnia casi todos los días
   5. Agitación o retardo psicomotor observable
   6. Fatiga o pérdida de energía
   7. Sentimientos de inutilidad o culpa excesiva/inapropiada
   8. Disminución de la capacidad para pensar, concentrarse o tomar decisiones
   9. Pensamientos recurrentes de muerte, ideación suicida, intento o plan

B. Los síntomas causan malestar clínicamente significativo o deterioro funcional
C. El episodio no es atribuible a efectos de sustancias o condición médica
D. No se explica mejor por otro trastorno psicótico
E. Nunca ha habido un episodio maníaco o hipomaníaco (excluye trastorno bipolar)

**Especificadores DSM-5-TR:**
- Con ansiedad
- Con características mixtas (síntomas maníacos/hipomaníacos simultáneos)
- Con características melancólicas (anhedonia profunda, despertar temprano, pérdida de peso)
- Con características atípicas (hipersomnia, hiperfagia, parálisis de plomo, sensibilidad al rechazo)
- Con características psicóticas (congruentes o incongruentes con el estado de ánimo)
- Con patrón estacional
- Con inicio periparto
- Con catatonía

**Neurobiología de la depresión:**

*Hipótesis monoaminérgica:*
- Déficit de serotonina (5-HT), norepinefrina (NE) y dopamina (DA)
- Los ISRS bloquean el transportador de serotonina (SERT)
- Los IRSN bloquean transportadores de 5-HT y NE
- Limitación: no explica el retraso terapéutico de 2-4 semanas

*Eje Hipotálamo-Hipófisis-Adrenal (HPA):*
- Hiperactividad del eje HPA en depresión
- Cortisol elevado crónicamente
- Supresión inadecuada en prueba de dexametasona
- El cortisol crónico daña el hipocampo (reducción de volumen)

*Neuroinflamación:*
- Citoquinas proinflamatorias elevadas (IL-6, TNF-alfa, IL-1beta)
- Activación microglial
- Disrupción de la vía de la quinurenina (desviación del triptófano)
- Las enfermedades inflamatorias crónicas aumentan el riesgo de depresión

*Neuroplasticidad:*
- Reducción del BDNF (Factor Neurotrófico Derivado del Cerebro)
- Atrofia dendrítica en corteza prefrontal e hipocampo
- Los antidepresivos restauran la neuroplasticidad a largo plazo
- La ketamina actúa rápidamente a través de vías glutamatérgicas/BDNF

*Neuroimagen:*
- Hipoactividad de la corteza prefrontal dorsolateral
- Hiperactividad de la amígdala
- Alteraciones en la red de modo por defecto (DMN)
- Reducción del volumen hipocampal

**Farmacoterapia:**

*Primera línea:*
- ISRS: escitalopram, sertralina (mejor tolerados)
- IRSN: venlafaxina, duloxetina
- Bupropión (inhibidor de recaptación de NE/DA)
- Mirtazapina (antagonista alfa-2, 5-HT2/3)

*Segunda línea:*
- Tricíclicos (TCA): amitriptilina, nortriptilina
- IMAO: fenelzina, tranilcipromina (restricciones dietéticas)
- Antipsicóticos atípicos como augmentación (aripiprazol, quetiapina)

*Depresión resistente al tratamiento:*
- Augmentación con litio o tiroxina (T3)
- Esketamina intranasal (Spravato)
- Ketamina IV
- Terapia electroconvulsiva (TEC)
- Estimulación magnética transcraneal (EMT)

**Psicoterapias basadas en evidencia:**
- TCC (Terapia Cognitivo-Conductual): triada cognitiva de Beck
- Terapia Interpersonal (TIP)
- Activación conductual
- MBCT (Terapia Cognitiva Basada en Mindfulness): prevención de recaídas
- Psicoterapia psicodinámica breve

**Evaluación del riesgo suicida:**
- Herramientas: PHQ-9, Columbia-Suicide Severity Rating Scale (C-SSRS)
- Factores de riesgo: intentos previos, acceso a medios letales, aislamiento, desesperanza
- Factores protectores: apoyo social, hijos, razones para vivir, espiritualidad
- Plan de seguridad: identificar señales de alerta, estrategias de afrontamiento, contactos de emergencia

**Disparidades en salud mental en la comunidad hispana/latina:**
- Solo ~35% de adultos latinos con depresión reciben tratamiento (vs. 50% en población general)
- Barreras: idioma, estigma, falta de seguros, escasez de proveedores bilingües
- Los síntomas somáticos (dolor, fatiga) son una presentación frecuente
- Los modelos culturales de "machismo" pueden dificultar que hombres latinos busquen ayuda
- La aculturación puede ser tanto factor de riesgo como protector

---
## Explanation

**DSM-5-TR Diagnostic Criteria for Major Depressive Disorder:**

A. Five or more symptoms during a 2-week period, representing a change from previous functioning. At least one must be (1) or (2):
   1. Depressed mood most of the day, nearly every day
   2. Markedly diminished interest or pleasure (anhedonia)
   3. Significant weight loss/gain (>5% in a month) or appetite change
   4. Insomnia or hypersomnia nearly every day
   5. Observable psychomotor agitation or retardation
   6. Fatigue or loss of energy
   7. Feelings of worthlessness or excessive/inappropriate guilt
   8. Diminished ability to think, concentrate, or make decisions
   9. Recurrent thoughts of death, suicidal ideation, attempt, or plan

B. Symptoms cause clinically significant distress or functional impairment
C. Episode not attributable to substance effects or medical condition
D. Not better explained by another psychotic disorder
E. Never had a manic or hypomanic episode (excludes bipolar disorder)

**DSM-5-TR Specifiers:**
- With anxious distress
- With mixed features
- With melancholic features (profound anhedonia, early awakening, weight loss)
- With atypical features (hypersomnia, hyperphagia, leaden paralysis, rejection sensitivity)
- With psychotic features (mood-congruent or mood-incongruent)
- With seasonal pattern
- With peripartum onset
- With catatonia

**Neurobiology of depression:**

*Monoamine hypothesis:*
- Serotonin (5-HT), norepinephrine (NE), and dopamine (DA) deficits
- SSRIs block the serotonin transporter (SERT)
- SNRIs block 5-HT and NE transporters
- Limitation: does not explain the 2-4 week therapeutic delay

*Hypothalamic-Pituitary-Adrenal (HPA) axis:*
- HPA axis hyperactivity in depression
- Chronically elevated cortisol
- Inadequate suppression on dexamethasone test
- Chronic cortisol damages hippocampus (volume reduction)

*Neuroinflammation:*
- Elevated proinflammatory cytokines (IL-6, TNF-alpha, IL-1beta)
- Microglial activation
- Kynurenine pathway disruption (tryptophan diversion)
- Chronic inflammatory diseases increase depression risk

*Neuroplasticity:*
- Reduced BDNF (Brain-Derived Neurotrophic Factor)
- Dendritic atrophy in prefrontal cortex and hippocampus
- Antidepressants restore neuroplasticity long-term
- Ketamine acts rapidly through glutamatergic/BDNF pathways

*Neuroimaging:*
- Dorsolateral prefrontal cortex hypoactivity
- Amygdala hyperactivity
- Default mode network (DMN) alterations
- Hippocampal volume reduction

**Pharmacotherapy:**

*First-line:*
- SSRIs: escitalopram, sertraline (best tolerated)
- SNRIs: venlafaxine, duloxetine
- Bupropion (NE/DA reuptake inhibitor)
- Mirtazapine (alpha-2, 5-HT2/3 antagonist)

*Second-line:*
- Tricyclics (TCAs): amitriptyline, nortriptyline
- MAOIs: phenelzine, tranylcypromine (dietary restrictions)
- Atypical antipsychotic augmentation (aripiprazole, quetiapine)

*Treatment-resistant depression:*
- Lithium or thyroid (T3) augmentation
- Intranasal esketamine (Spravato)
- IV ketamine
- Electroconvulsive therapy (ECT)
- Transcranial magnetic stimulation (TMS)

**Evidence-based psychotherapies:**
- CBT: Beck's cognitive triad
- Interpersonal Therapy (IPT)
- Behavioral activation
- MBCT (Mindfulness-Based Cognitive Therapy): relapse prevention
- Brief psychodynamic psychotherapy

**Suicide risk assessment:**
- Tools: PHQ-9, Columbia-Suicide Severity Rating Scale (C-SSRS)
- Risk factors: prior attempts, lethal means access, isolation, hopelessness
- Protective factors: social support, children, reasons for living, spirituality
- Safety plan: identify warning signs, coping strategies, emergency contacts

**Mental health disparities in the Hispanic/Latino community:**
- Only ~35% of Latino adults with depression receive treatment (vs. 50% general population)
- Barriers: language, stigma, lack of insurance, shortage of bilingual providers
- Somatic symptoms (pain, fatigue) are a common presentation
- Cultural "machismo" models may make it harder for Latino men to seek help
- Acculturation can be both a risk and protective factor`,
      keyTerms: [
        {
          term: 'eje HPA / HPA axis',
          definition:
            'Sistema Hipotálamo-Hipófisis-Adrenal que regula la respuesta al estrés. Está hiperactivo en la depresión, produciendo cortisol excesivo. | Hypothalamic-Pituitary-Adrenal system that regulates stress response. Hyperactive in depression, producing excessive cortisol.',
          pronunciation: 'EH-heh ah-cheh-PEH-ah',
        },
        {
          term: 'BDNF',
          definition:
            'Factor Neurotrófico Derivado del Cerebro. Proteína esencial para la supervivencia neuronal y la plasticidad sináptica. Reducido en la depresión. | Brain-Derived Neurotrophic Factor. Protein essential for neuronal survival and synaptic plasticity. Reduced in depression.',
        },
        {
          term: 'anhedonia',
          definition:
            'Incapacidad para experimentar placer. Síntoma central del TDM relacionado con disfunción dopaminérgica del circuito de recompensa. | Inability to experience pleasure. Core MDD symptom related to dopaminergic dysfunction of the reward circuit.',
          pronunciation: 'an-eh-DOH-nee-ah',
        },
        {
          term: 'depresión resistente al tratamiento',
          definition:
            'Depresión que no responde a al menos dos ensayos adecuados de antidepresivos diferentes. Requiere estrategias alternativas. | Depression that does not respond to at least two adequate trials of different antidepressants. Requires alternative strategies.',
        },
        {
          term: 'neuroplasticidad',
          definition:
            'Capacidad del cerebro para reorganizarse formando nuevas conexiones neuronales. La depresión la reduce; los antidepresivos la restauran. | The brain\'s ability to reorganize by forming new neural connections. Depression reduces it; antidepressants restore it.',
        },
      ],
      clinicalNotes:
        'Evaluar siempre riesgo suicida con PHQ-9 (pregunta 9) y C-SSRS. En pacientes hispanos, prestar atención a presentaciones somáticas de depresión (cefalea, dolor abdominal, fatiga). Considerar barreras culturales y lingüísticas al planificar el tratamiento. Involucrar a la familia cuando sea apropiado (con consentimiento del paciente). Los ISRS son primera línea; escitalopram y sertralina tienen mejor perfil de tolerabilidad. Monitorizar ideación suicida en las primeras semanas de tratamiento, especialmente en pacientes jóvenes. | Always assess suicide risk with PHQ-9 (question 9) and C-SSRS. In Hispanic patients, pay attention to somatic presentations of depression (headache, abdominal pain, fatigue). Consider cultural and linguistic barriers when planning treatment. Involve family when appropriate (with patient consent). SSRIs are first-line; escitalopram and sertraline have better tolerability profiles. Monitor suicidal ideation in the first weeks of treatment, especially in young patients.',
    },
    4: {
      level: 4,
      summary:
        'La fisiopatología del TDM integra disfunción monoaminérgica, desregulación del eje HPA, neuroinflamación, déficit de neuroplasticidad y alteraciones del microbioma intestinal-cerebral. Los enfoques farmacogenómicos y de biomarcadores están transformando la selección terapéutica personalizada. | MDD pathophysiology integrates monoaminergic dysfunction, HPA axis dysregulation, neuroinflammation, neuroplasticity deficits, and gut-brain microbiome alterations. Pharmacogenomic and biomarker approaches are transforming personalized therapeutic selection.',
      explanation: `## Explicación

**Modelos neurobiológicos integrados de la depresión:**

*Modelo de red neural:*
- Desconexión funcional entre la corteza prefrontal y las regiones límbicas
- Hiperconectividad de la red de modo por defecto (DMN): rumiación excesiva
- Red de saliencia disfuncional: procesamiento emocional alterado
- Red de control ejecutivo hipoactiva: déficits cognitivos

*Señalización glutamatérgica:*
- Alteración de la neurotransmisión glutamatérgica en el TDM
- Receptores NMDA y AMPA como dianas terapéuticas
- Mecanismo de acción de la ketamina: bloqueo NMDA en interneuronas GABAérgicas → desinhibición glutamatérgica → aumento de BDNF → sinaptogénesis rápida
- Vía mTOR activada por ketamina para plasticidad sináptica rápida

*Eje microbioma-intestino-cerebro:*
- Disbiosis intestinal asociada con depresión
- Producción microbiana de neurotransmisores (>90% de la serotonina es entérica)
- Permeabilidad intestinal aumentada → translocación bacteriana → inflamación sistémica
- Eje vagal como vía de comunicación bidireccional
- Probióticos ("psicobióticos") como terapia emergente

*Epigenética:*
- Metilación del ADN alterada en genes del eje HPA (NR3C1, FKBP5)
- Modificación de histonas por estrés temprano
- MicroARNs como biomarcadores potenciales
- El estrés infantil programa cambios epigenéticos duraderos
- Transmisión intergeneracional del riesgo

**Genética y farmacogenómica:**

*Arquitectura genética:*
- Heredabilidad ~37% (moderada, menor que bipolar)
- GWAS: >100 loci de riesgo identificados
- Genes clave: SLC6A4 (transportador de serotonina), BDNF, FKBP5, HTR2A
- Puntuación de riesgo poligénico (PRS) en desarrollo

*Farmacogenómica clínica:*
- CYP2D6: metabolismo de muchos antidepresivos (fluoxetina, paroxetina, venlafaxina)
- CYP2C19: metabolismo de escitalopram, citalopram, sertralina
- Metabolizadores ultrarrápidos: dosis insuficiente con dosis estándar
- Metabolizadores lentos: riesgo de toxicidad con dosis estándar
- Paneles farmacogenómicos (GeneSight, Genomind) para guiar selección
- Polimorfismo 5-HTTLPR: relevancia clínica debatida

**Tratamientos avanzados:**

*Esketamina intranasal (Spravato):*
- Aprobada por FDA para depresión resistente al tratamiento
- Administración en consultorio con monitoreo de 2 horas
- Efectos disociativos transitorios
- Eficacia rápida (horas a días vs. semanas)
- Programa REMS obligatorio

*Psilocibina (investigacional):*
- Ensayos fase II/III prometedores
- Mecanismo: agonismo 5-HT2A → neuroplasticidad
- Requiere sesiones de psicoterapia acompañante
- Potencial terapéutico sin los problemas de administración crónica

*Terapia electroconvulsiva (TEC):*
- Estándar de oro para depresión grave/resistente
- Eficacia: 50-70% en depresión resistente al tratamiento
- Mecanismo: neuroplasticidad, normalización del eje HPA
- Efectos adversos: déficits cognitivos transitorios (principalmente memoria autobiográfica)
- Colocación unilateral derecha y pulso breve/ultrabreve reducen efectos cognitivos

*Estimulación magnética transcraneal (EMT):*
- EMT repetitiva sobre corteza prefrontal dorsolateral izquierda
- Protocolos theta burst intermitente (iTBS): sesiones de 3 minutos vs. 37 minutos
- Aprobada por FDA para TDM y depresión resistente
- No requiere anestesia, ambulatoria

*Estimulación cerebral profunda (ECP):*
- Investigacional para depresión refractaria severa
- Dianas: cíngulo subcallosal (Cg25), cápsula ventral/estriado ventral
- Resultados variables, requiere más investigación

**Comorbilidades:**
- Trastornos de ansiedad (>50% comorbilidad)
- Trastorno por uso de sustancias (especialmente alcohol)
- Dolor crónico (depresión y dolor comparten vías de serotonina/norepinefrina)
- Enfermedades cardiovasculares (la depresión es factor de riesgo independiente)
- Diabetes tipo 2 (relación bidireccional)
- Deterioro cognitivo y demencia (la depresión puede ser pródromo)

**Poblaciones especiales:**

*Adultos mayores:*
- Presentación atípica: más síntomas cognitivos ("pseudodemencia depresiva")
- Mayor sensibilidad a efectos secundarios
- Riesgo aumentado de suicidio completado
- Considerar interacciones medicamentosas
- La EMT puede ser opción si hay contraindicaciones farmacológicas

*Depresión periparto:*
- Prevalencia: 10-20% de mujeres gestantes/posparto
- Brexanolona IV (neuroesteroide alopregnanolona) aprobada para postparto
- Zuranolona oral aprobada para depresión postparto
- Riesgos de antidepresivos vs. riesgos de depresión no tratada
- La depresión no tratada afecta el desarrollo fetal y del lactante

*Adolescentes:*
- Fluoxetina es ISRS con mejor evidencia en adolescentes
- TCC + medicación superior a monoterapia
- Advertencia de caja negra FDA sobre ideación suicida
- La irritabilidad puede ser síntoma predominante

---
## Explanation

**Integrated neurobiological models of depression:**

*Neural network model:*
- Functional disconnection between prefrontal cortex and limbic regions
- Default mode network (DMN) hyperconnectivity: excessive rumination
- Dysfunctional salience network: altered emotional processing
- Hypoactive executive control network: cognitive deficits

*Glutamatergic signaling:*
- Altered glutamatergic neurotransmission in MDD
- NMDA and AMPA receptors as therapeutic targets
- Ketamine mechanism: NMDA blockade on GABAergic interneurons → glutamatergic disinhibition → BDNF increase → rapid synaptogenesis
- mTOR pathway activated by ketamine for rapid synaptic plasticity

*Microbiome-gut-brain axis:*
- Gut dysbiosis associated with depression
- Microbial production of neurotransmitters (>90% of serotonin is enteric)
- Increased intestinal permeability → bacterial translocation → systemic inflammation
- Vagal axis as bidirectional communication pathway
- Probiotics ("psychobiotics") as emerging therapy

*Epigenetics:*
- Altered DNA methylation in HPA axis genes (NR3C1, FKBP5)
- Histone modification by early stress
- MicroRNAs as potential biomarkers
- Childhood stress programs lasting epigenetic changes
- Intergenerational transmission of risk

**Genetics and pharmacogenomics:**

*Genetic architecture:*
- Heritability ~37% (moderate, lower than bipolar)
- GWAS: >100 risk loci identified
- Key genes: SLC6A4 (serotonin transporter), BDNF, FKBP5, HTR2A
- Polygenic risk score (PRS) under development

*Clinical pharmacogenomics:*
- CYP2D6: metabolism of many antidepressants (fluoxetine, paroxetine, venlafaxine)
- CYP2C19: metabolism of escitalopram, citalopram, sertraline
- Ultrarapid metabolizers: insufficient dosing at standard doses
- Poor metabolizers: toxicity risk at standard doses
- Pharmacogenomic panels (GeneSight, Genomind) to guide selection
- 5-HTTLPR polymorphism: clinical relevance debated

**Advanced treatments:**

*Intranasal esketamine (Spravato):*
- FDA-approved for treatment-resistant depression
- In-office administration with 2-hour monitoring
- Transient dissociative effects
- Rapid efficacy (hours to days vs. weeks)
- Mandatory REMS program

*Psilocybin (investigational):*
- Promising phase II/III trials
- Mechanism: 5-HT2A agonism → neuroplasticity
- Requires accompanying psychotherapy sessions
- Therapeutic potential without chronic administration issues

*Electroconvulsive therapy (ECT):*
- Gold standard for severe/resistant depression
- Efficacy: 50-70% in treatment-resistant depression
- Mechanism: neuroplasticity, HPA axis normalization
- Adverse effects: transient cognitive deficits (mainly autobiographical memory)
- Right unilateral placement and brief/ultrabrief pulse reduce cognitive effects

*Transcranial magnetic stimulation (TMS):*
- Repetitive TMS over left dorsolateral prefrontal cortex
- Intermittent theta burst stimulation (iTBS): 3-minute vs. 37-minute sessions
- FDA-approved for MDD and treatment-resistant depression
- No anesthesia required, outpatient

*Deep brain stimulation (DBS):*
- Investigational for severe refractory depression
- Targets: subcallosal cingulate (Cg25), ventral capsule/ventral striatum
- Variable results, requires more research

**Comorbidities:**
- Anxiety disorders (>50% comorbidity)
- Substance use disorder (especially alcohol)
- Chronic pain (depression and pain share serotonin/norepinephrine pathways)
- Cardiovascular disease (depression is an independent risk factor)
- Type 2 diabetes (bidirectional relationship)
- Cognitive impairment and dementia (depression may be prodrome)

**Special populations:**

*Older adults:*
- Atypical presentation: more cognitive symptoms ("depressive pseudodementia")
- Greater sensitivity to side effects
- Increased risk of completed suicide
- Consider drug interactions
- TMS may be an option if pharmacological contraindications exist

*Peripartum depression:*
- Prevalence: 10-20% of pregnant/postpartum women
- IV brexanolone (neurosteroid allopregnanolone) approved for postpartum
- Oral zuranolone approved for postpartum depression
- Antidepressant risks vs. risks of untreated depression
- Untreated depression affects fetal and infant development

*Adolescents:*
- Fluoxetine is SSRI with best evidence in adolescents
- CBT + medication superior to monotherapy
- FDA black box warning on suicidal ideation
- Irritability may be the predominant symptom`,
      keyTerms: [
        {
          term: 'farmacogenómica / pharmacogenomics',
          definition:
            'Estudio de cómo las variaciones genéticas individuales afectan la respuesta a los medicamentos. Permite personalizar la selección de antidepresivos. | Study of how individual genetic variations affect drug response. Enables personalization of antidepressant selection.',
        },
        {
          term: 'red de modo por defecto (DMN)',
          definition:
            'Red cerebral activa durante el reposo y la autorreflexión. Su hiperconectividad en la depresión se asocia con rumiación excesiva. | Brain network active during rest and self-reflection. Its hyperconnectivity in depression is associated with excessive rumination.',
        },
        {
          term: 'sinaptogénesis',
          definition:
            'Formación de nuevas sinapsis neuronales. La ketamina y los psicodélicos promueven sinaptogénesis rápida como mecanismo antidepresivo. | Formation of new neuronal synapses. Ketamine and psychedelics promote rapid synaptogenesis as an antidepressant mechanism.',
        },
        {
          term: 'eje microbioma-intestino-cerebro',
          definition:
            'Sistema de comunicación bidireccional entre la microbiota intestinal y el cerebro que influye en el estado de ánimo y la cognición. | Bidirectional communication system between gut microbiota and the brain that influences mood and cognition.',
        },
        {
          term: 'epigenética',
          definition:
            'Cambios heredables en la expresión génica que no alteran la secuencia de ADN. El estrés temprano puede programar cambios epigenéticos que aumentan la vulnerabilidad a la depresión. | Heritable changes in gene expression that do not alter DNA sequence. Early stress can program epigenetic changes that increase vulnerability to depression.',
        },
      ],
      clinicalNotes:
        'En la práctica clínica avanzada: considerar paneles farmacogenómicos para pacientes que no responden a 2+ antidepresivos. La esketamina intranasal requiere programa REMS y monitoreo en consultorio. Para depresión severa con ideación suicida activa, la TEC sigue siendo el tratamiento más eficaz y rápido. La brexanolona y zuranolona representan un nuevo paradigma para la depresión periparto. En pacientes latinos, considerar los efectos de la aculturación, el estrés migratorio, y las experiencias de discriminación como factores contribuyentes. La investigación muestra que la terapia culturalmente adaptada (ej., TCC adaptada culturalmente) es más efectiva que los protocolos estándar en poblaciones hispanas. | In advanced clinical practice: consider pharmacogenomic panels for patients not responding to 2+ antidepressants. Intranasal esketamine requires REMS program and in-office monitoring. For severe depression with active suicidal ideation, ECT remains the most effective and rapid treatment. Brexanolone and zuranolone represent a new paradigm for peripartum depression. In Latino patients, consider the effects of acculturation, migration stress, and discrimination experiences as contributing factors. Research shows that culturally adapted therapy (e.g., culturally adapted CBT) is more effective than standard protocols in Hispanic populations.',
    },
    5: {
      level: 5,
      summary:
        'La investigación contemporánea del TDM avanza hacia una nosología basada en mecanismos, biomarcadores de selección terapéutica, tratamientos rápidos (ketaminérgicos, psicodélicos, neuroesteroides), y medicina de precisión psiquiátrica. Las disparidades en salud mental para poblaciones hispanas requieren abordajes sistémicos de equidad. | Contemporary MDD research advances toward mechanism-based nosology, treatment selection biomarkers, rapid-acting treatments (ketaminergics, psychedelics, neurosteroids), and precision psychiatric medicine. Mental health disparities for Hispanic populations require systemic equity approaches.',
      explanation: `## Explicación

**Nosología dimensional y biotipos de depresión:**

*Limitaciones del modelo categórico:*
- El TDM definido por DSM-5 es un síndrome heterogéneo
- 227 combinaciones posibles de síntomas satisfacen los criterios diagnósticos
- Dos pacientes con "depresión mayor" pueden no compartir ningún síntoma
- La categorización binaria (deprimido/no deprimido) no refleja la realidad clínica

*Biotipos basados en neuroimagen (Drysdale et al., Williams):*
- Biotipo 1 "Rumiación": hiperconectividad DMN-corteza prefrontal medial
- Biotipo 2 "Ansiedad-excitación": hiperreactividad amígdala-circuitos del miedo
- Biotipo 3 "Anhédonia": hipoactividad del circuito de recompensa (estriado ventral)
- Biotipo 4 "Tensión ansioso-cognitiva": disfunción del cíngulo anterior
- Predicción diferencial de respuesta a TCC vs. EMT según biotipo

*Research Domain Criteria (RDoC):*
- Marco del NIMH para investigación dimensional
- Dominios: valencia negativa, valencia positiva, sistemas cognitivos, procesos sociales, excitación/regulación, sistemas sensoriomotores
- La depresión involucra múltiples dominios RDoC
- Integración de genómica, circuitos neurales, y comportamiento

**Biomarcadores emergentes para selección terapéutica:**

*Biomarcadores de neuroimagen:*
- Actividad del cíngulo anterior rostral predice respuesta a antidepresivos
- Conectividad funcional predice respuesta a TCC vs. medicación
- EEG cuantitativo: la asimetría frontal como predictor de respuesta
- Biomarcador QEEG ATR (Antidepressant Treatment Response) para guiar cambios tempranos

*Biomarcadores moleculares:*
- CRP (Proteína C Reactiva): CRP >3 mg/L predice mejor respuesta a infliximab vs. placebo
- Relación quinurenina/triptófano como indicador de neuroinflamación
- BDNF sérico como marcador de estado
- Metabolómica: perfiles de aminoácidos y lípidos como predictores
- Panel combinado de biomarcadores en investigación (ninguno validado para uso clínico rutinario aún)

*Biomarcadores digitales:*
- Análisis de voz para detección y monitoreo
- Patrones de uso de teléfono (reducción de actividad, aislamiento)
- Actigrafía para monitoreo de sueño/actividad
- Machine learning para predicción de recaída

**Terapéuticas de próxima generación:**

*Psilocibina:*
- Estudios COMPASS Pathways y Usona Institute
- Comparación con escitalopram en ensayos aleatorizados
- Mecanismo: agonismo 5-HT2A → aumento de entropía neural → reorganización de redes
- Neuroplasticidad mediada por BDNF y mTOR
- Sesiones de preparación, dosificación (25mg), e integración
- Durabilidad de respuesta (semanas a meses con dosis únicas)

*DMT y ayahuasca:*
- Ensayos clínicos en Brasil y Europa
- Tradición de uso en comunidades indígenas latinoamericanas
- Consideraciones culturales para comunidades hispanas/latinas
- Potencial para depresión resistente al tratamiento

*Psicodélicos serotoninérgicos - mecanismos compartidos:*
- Plasticidad neural a través de señalización TrkB/mTOR
- Teoría REBUS (Relaxed Beliefs Under Psychedelics): flexibilización de modelos predictivos
- Neuroplasticidad "ventana" para psicoterapia intensiva
- No-psicodélicos con perfil similar (ej., tabernanthalog) en desarrollo

*Neuroesteroides y moduladores GABA:*
- Brexanolona (ganaxolona): modulador alostérico positivo GABA-A
- Zuranolona oral: primer tratamiento oral de acción rápida para depresión postparto
- Mecanismo: restauración de niveles de alopregnanolona
- Potencial expansión a TDM general

*Antiinflamatorios como antidepresivos:*
- Infliximab (anti-TNF): eficaz en subgrupo con inflamación elevada
- Minociclina: meta-análisis positivos como augmentación
- Celecoxib: augmentación antiinflamatoria
- Estratificación por biomarcadores inflamatorios para selección de pacientes

*Moduladores opioides:*
- ALKS 5461 (buprenorfina/samidorfan): modulación del sistema opioide endógeno
- Dextrometorfano/bupropión (Auvelity): primer antagonista NMDA oral aprobado para TDM
- Mecanismos: antagonismo NMDA + agonismo sigma-1

**Inequidades en salud mental y enfoques de equidad:**

*Datos epidemiológicos en la población hispana/latina:*
- La prevalencia de depresión es comparable a la población general (~8-10%)
- Pero las tasas de tratamiento son significativamente menores (35% vs. 50%)
- Los inmigrantes recientes pueden tener menor prevalencia ("paradoja del inmigrante") que disminuye con la aculturación
- Las experiencias de discriminación se asocian con mayor riesgo de depresión
- La separación familiar, el estrés migratorio y el estatus indocumentado son factores de riesgo únicos

*Intervenciones culturalmente adaptadas:*
- TCC adaptada culturalmente (ej., protocolo de Bernal y Sáez-Santiago)
- Integración de valores culturales: familismo, personalismo, respeto
- Modelos de atención colaborativa con promotoras de salud
- Telepsiquiatría en español para comunidades rurales
- Integración de salud mental en atención primaria (modelo IMPACT adaptado)

*Investigación de disparidades:*
- Subrepresentación hispana/latina en ensayos clínicos de antidepresivos
- Necesidad de normas farmacogenómicas específicas para poblaciones latinas
- Variabilidad genética CYP2D6 y CYP2C19 por origen étnico
- Proyectos como All of Us del NIH buscan mayor inclusión

**Inteligencia artificial y salud mental:**

*Modelos predictivos:*
- Deep learning para predicción de respuesta al tratamiento
- NLP (Procesamiento de Lenguaje Natural) para detección de depresión en texto/habla
- Modelos multimodales: neuroimagen + genómica + datos clínicos
- Chatbots terapéuticos como herramientas de apoyo (no reemplazo)

*Terapias digitales:*
- Apps de TCC validadas clínicamente
- Monitoreo ecológico momentáneo (EMA)
- Intervenciones just-in-time adaptativas
- Realidad virtual para activación conductual

**Direcciones futuras:**
- Nosología basada en circuitos neurales en lugar de síntomas
- Terapia personalizada guiada por biomarcadores combinados
- Tratamientos rápidos accesibles para todos
- Abordaje de determinantes sociales de la salud mental
- Equidad en investigación y acceso a tratamiento
- Integración de perspectivas culturales en las guías de práctica clínica

---
## Explanation

**Dimensional nosology and depression biotypes:**

*Categorical model limitations:*
- DSM-5 defined MDD is a heterogeneous syndrome
- 227 possible symptom combinations satisfy diagnostic criteria
- Two patients with "major depression" may share no symptoms
- Binary categorization (depressed/not depressed) does not reflect clinical reality

*Neuroimaging-based biotypes (Drysdale et al., Williams):*
- Biotype 1 "Rumination": DMN-medial prefrontal cortex hyperconnectivity
- Biotype 2 "Anxious arousal": amygdala-fear circuit hyperreactivity
- Biotype 3 "Anhedonia": reward circuit hypoactivity (ventral striatum)
- Biotype 4 "Anxious-cognitive tension": anterior cingulate dysfunction
- Differential prediction of CBT vs. TMS response by biotype

*Research Domain Criteria (RDoC):*
- NIMH framework for dimensional research
- Domains: negative valence, positive valence, cognitive systems, social processes, arousal/regulation, sensorimotor systems
- Depression involves multiple RDoC domains
- Integration of genomics, neural circuits, and behavior

**Emerging biomarkers for treatment selection:**

*Neuroimaging biomarkers:*
- Rostral anterior cingulate activity predicts antidepressant response
- Functional connectivity predicts CBT vs. medication response
- Quantitative EEG: frontal asymmetry as response predictor
- QEEG ATR (Antidepressant Treatment Response) biomarker to guide early changes

*Molecular biomarkers:*
- CRP (C-Reactive Protein): CRP >3 mg/L predicts better infliximab vs. placebo response
- Kynurenine/tryptophan ratio as neuroinflammation indicator
- Serum BDNF as state marker
- Metabolomics: amino acid and lipid profiles as predictors
- Combined biomarker panel under research (none validated for routine clinical use yet)

*Digital biomarkers:*
- Voice analysis for detection and monitoring
- Phone usage patterns (activity reduction, isolation)
- Actigraphy for sleep/activity monitoring
- Machine learning for relapse prediction

**Next-generation therapeutics:**

*Psilocybin:*
- COMPASS Pathways and Usona Institute studies
- Comparison with escitalopram in randomized trials
- Mechanism: 5-HT2A agonism → neural entropy increase → network reorganization
- Neuroplasticity mediated by BDNF and mTOR
- Preparation, dosing (25mg), and integration sessions
- Response durability (weeks to months with single doses)

*DMT and ayahuasca:*
- Clinical trials in Brazil and Europe
- Traditional use in indigenous Latin American communities
- Cultural considerations for Hispanic/Latino communities
- Potential for treatment-resistant depression

*Serotonergic psychedelics - shared mechanisms:*
- Neural plasticity through TrkB/mTOR signaling
- REBUS theory (Relaxed Beliefs Under Psychedelics): predictive model flexibilization
- Neuroplasticity "window" for intensive psychotherapy
- Non-psychedelic analogs (e.g., tabernanthalog) in development

*Neurosteroids and GABA modulators:*
- Brexanolone (ganaxolone): GABA-A positive allosteric modulator
- Oral zuranolone: first oral rapid-acting treatment for postpartum depression
- Mechanism: restoration of allopregnanolone levels
- Potential expansion to general MDD

*Anti-inflammatory agents as antidepressants:*
- Infliximab (anti-TNF): effective in subset with elevated inflammation
- Minocycline: positive meta-analyses as augmentation
- Celecoxib: anti-inflammatory augmentation
- Stratification by inflammatory biomarkers for patient selection

*Opioid modulators:*
- ALKS 5461 (buprenorphine/samidorphan): endogenous opioid system modulation
- Dextromethorphan/bupropion (Auvelity): first oral NMDA antagonist approved for MDD
- Mechanisms: NMDA antagonism + sigma-1 agonism

**Mental health inequities and equity approaches:**

*Epidemiological data in the Hispanic/Latino population:*
- Depression prevalence is comparable to the general population (~8-10%)
- But treatment rates are significantly lower (35% vs. 50%)
- Recent immigrants may have lower prevalence ("immigrant paradox") that decreases with acculturation
- Discrimination experiences are associated with increased depression risk
- Family separation, migration stress, and undocumented status are unique risk factors

*Culturally adapted interventions:*
- Culturally adapted CBT (e.g., Bernal and Sáez-Santiago protocol)
- Integration of cultural values: familismo, personalismo, respeto
- Collaborative care models with community health workers (promotoras)
- Telepsychiatry in Spanish for rural communities
- Mental health integration in primary care (adapted IMPACT model)

*Disparities research:*
- Hispanic/Latino underrepresentation in antidepressant clinical trials
- Need for population-specific pharmacogenomic norms for Latino populations
- CYP2D6 and CYP2C19 genetic variability by ethnic origin
- Projects like NIH's All of Us seek greater inclusion

**Artificial intelligence and mental health:**

*Predictive models:*
- Deep learning for treatment response prediction
- NLP (Natural Language Processing) for depression detection in text/speech
- Multimodal models: neuroimaging + genomics + clinical data
- Therapeutic chatbots as support tools (not replacements)

*Digital therapeutics:*
- Clinically validated CBT apps
- Ecological momentary assessment (EMA)
- Just-in-time adaptive interventions
- Virtual reality for behavioral activation

**Future directions:**
- Neural circuit-based nosology instead of symptom-based
- Personalized therapy guided by combined biomarkers
- Accessible rapid-acting treatments for all
- Addressing social determinants of mental health
- Equity in research and treatment access
- Integration of cultural perspectives in clinical practice guidelines`,
      keyTerms: [
        {
          term: 'biotipos de depresión / depression biotypes',
          definition:
            'Subtipos de depresión definidos biológicamente por patrones de conectividad cerebral, que predicen respuestas diferenciales al tratamiento. | Biologically defined depression subtypes based on brain connectivity patterns that predict differential treatment responses.',
        },
        {
          term: 'RDoC',
          definition:
            'Research Domain Criteria. Marco dimensional del NIMH para investigar trastornos mentales basado en sistemas biológicos en lugar de categorías diagnósticas. | NIMH dimensional framework for investigating mental disorders based on biological systems rather than diagnostic categories.',
        },
        {
          term: 'psicobióticos / psychobiotics',
          definition:
            'Probióticos que confieren beneficios para la salud mental a través del eje microbioma-intestino-cerebro. Área emergente de investigación. | Probiotics that confer mental health benefits through the microbiome-gut-brain axis. Emerging area of research.',
        },
        {
          term: 'paradoja del inmigrante / immigrant paradox',
          definition:
            'Observación de que los inmigrantes recientes tienen menor prevalencia de trastornos mentales que la población nativa, a pesar de mayor exposición a adversidad. | Observation that recent immigrants have lower mental disorder prevalence than the native population, despite greater adversity exposure.',
        },
        {
          term: 'REBUS',
          definition:
            'Relaxed Beliefs Under Psychedelics. Teoría de que los psicodélicos flexibilizan los modelos predictivos del cerebro, permitiendo nuevas perspectivas terapéuticas. | Theory that psychedelics flexibilize the brain\'s predictive models, enabling new therapeutic perspectives.',
        },
      ],
      clinicalNotes:
        'Estado del arte en la práctica clínica: La selección de antidepresivos se mueve hacia la personalización con farmacogenómica (CYP2D6, CYP2C19) y biomarcadores inflamatorios. La esketamina y la ketamina IV son opciones para depresión con ideación suicida aguda. Dextrometorfano/bupropión (Auvelity) es la primera opción oral con mecanismo glutamatérgico para TDM general. La psilocibina está en ensayos clínicos avanzados pero no aprobada para uso clínico. Para pacientes hispanos/latinos: implementar modelos de atención colaborativa con promotoras de salud, telepsiquiatría en español, y TCC culturalmente adaptada. La investigación futura debe priorizar la inclusión de poblaciones latinas en ensayos clínicos y el desarrollo de algoritmos de tratamiento culturalmente sensibles. Línea 988 disponible en español 24/7 para crisis. | State of the art in clinical practice: Antidepressant selection moves toward personalization with pharmacogenomics (CYP2D6, CYP2C19) and inflammatory biomarkers. Esketamine and IV ketamine are options for depression with acute suicidal ideation. Dextromethorphan/bupropion (Auvelity) is the first oral glutamatergic mechanism option for general MDD. Psilocybin is in advanced clinical trials but not approved for clinical use. For Hispanic/Latino patients: implement collaborative care models with community health workers (promotoras), telepsychiatry in Spanish, and culturally adapted CBT. Future research must prioritize inclusion of Latino populations in clinical trials and development of culturally sensitive treatment algorithms. 988 Lifeline available in Spanish 24/7 for crisis.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ref-dsm5-tr-mdd',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR)',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing, 2022',
      chapter: 'Depressive Disorders',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-stahls-depression',
      type: 'textbook',
      title: "Stahl's Essential Psychopharmacology: Neuroscientific Basis and Practical Applications",
      authors: ['Stahl SM'],
      source: 'Cambridge University Press, 5th Edition',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-latino-mental-health',
      type: 'textbook',
      title: 'Handbook of Latino Psychiatry',
      authors: ['Ruiz P', 'Primm A'],
      source: 'American Psychiatric Publishing',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-canmat-guidelines',
      type: 'article',
      title: 'Canadian Network for Mood and Anxiety Treatments (CANMAT) 2023 Clinical Guidelines for MDD',
      authors: ['Kennedy SH', 'Lam RW', 'McIntyre RS'],
      source: 'Canadian Journal of Psychiatry',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-major-depressive-disorder', targetType: 'condition', relationship: 'related', label: 'Major Depressive Disorder (English primary)' },
    { targetId: 'psychiatry-bipolar-disorder', targetType: 'condition', relationship: 'related', label: 'Bipolar Disorder / Trastorno Bipolar' },
    { targetId: 'condition-ansiedad-generalizada-gad', targetType: 'condition', relationship: 'related', label: 'GAD / Trastorno de Ansiedad Generalizada' },
    { targetId: 'psychiatry-ssris', targetType: 'topic', relationship: 'see-also', label: 'SSRIs / ISRS' },
    { targetId: 'psychiatry-snris', targetType: 'topic', relationship: 'see-also', label: 'SNRIs / IRSN' },
    { targetId: 'psychiatry-brain-chemistry-mental-health', targetType: 'topic', relationship: 'related', label: 'Brain Chemistry / Química Cerebral' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'mental-health', 'pharmacology', 'cultural-competency'],
    keywords: [
      'depresión',
      'depression',
      'TDM',
      'MDD',
      'antidepresivos',
      'antidepressants',
      'ISRS',
      'SSRI',
      'serotonina',
      'suicidio',
      'crisis',
      'salud mental latina',
      'Latino mental health',
      'nervios',
      'estigma',
      'stigma',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'medicine'],
    },
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};

export default depresionDepressionContent;
