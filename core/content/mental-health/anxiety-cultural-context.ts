/**
 * Anxiety in Cultural Context - Contenido Educativo Bilingue
 *
 * How anxiety manifests and is understood in Latino communities.
 * Cultural idioms of distress, immigration-related anxiety, and culturally adapted treatment.
 *
 * Spanish-first with English translations separated by " | "
 * Culturally sensitive content for Spanish-speaking populations.
 */

import { EducationalContent } from '../types';

export const anxietyCulturalContextContent: EducationalContent = {
  id: 'topic-anxiety-cultural-context',
  type: 'topic',
  name: 'Anxiety in Cultural Context',
  nameEs: 'Ansiedad en Contexto Cultural',
  alternateNames: [
    'Ansiedad y Cultura Latina | Anxiety and Latino Culture',
    'Nervios y Ansiedad | Nervios and Anxiety',
    'Ansiedad Migratoria | Immigration Anxiety',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'La ansiedad es una respuesta natural de nuestro cuerpo, pero cuando es excesiva puede convertirse en un problema. En nuestra comunidad latina, la ansiedad muchas veces se expresa como "nervios," dolores fisicos, o miedo constante. Hay tratamiento disponible y funciona. | Anxiety is a natural body response, but when excessive it can become a problem. In our Latino community, anxiety often expresses itself as "nervios," physical pain, or constant fear. Treatment is available and it works.',
      explanation: `**Que es la ansiedad? | What is anxiety?**

Todos sentimos ansiedad a veces -- antes de una entrevista de trabajo, cuando hay problemas de dinero, o cuando un familiar esta enfermo. Eso es normal. Pero cuando la preocupacion es tan fuerte que no te deja vivir, es un problema que necesita atencion. | We all feel anxiety sometimes -- before a job interview, when there are money problems, or when a family member is sick. That is normal. But when the worry is so strong it does not let you live, it is a problem that needs attention.

**Como se siente la ansiedad en nuestra comunidad? | How does anxiety feel in our community?**

- "Nervios" -- sentirse nervioso/a todo el tiempo sin saber por que | "Nervios" -- feeling nervous all the time without knowing why
- El corazon late muy rapido sin razon | Heart beats very fast for no reason
- Dolores de cabeza constantes | Constant headaches
- Problemas del estomago (nauseas, diarrea) | Stomach problems (nausea, diarrhea)
- No poder dormir por las preocupaciones | Not being able to sleep because of worries
- Sentir que algo malo va a pasar | Feeling that something bad is going to happen
- Miedo a salir de la casa | Fear of leaving the house
- Tension en el cuerpo (cuello, espalda, mandibula) | Body tension (neck, back, jaw)

**Que causa ansiedad en nuestra comunidad? | What causes anxiety in our community?**

- Miedo a la deportacion o problemas migratorios | Fear of deportation or immigration problems
- Preocupacion constante por la familia en el pais de origen | Constant worry about family in home country
- Problemas de dinero y estres laboral | Money problems and work stress
- No hablar bien el idioma y sentirse aislado/a | Not speaking the language well and feeling isolated
- Discriminacion y racismo | Discrimination and racism
- Responsabilidad de mantener a la familia aqui y alla | Responsibility of supporting family here and there
- Experiencias traumaticas durante la migracion | Traumatic experiences during migration

**Que NO es la ansiedad | What anxiety is NOT:**

- NO es ser cobarde o debil | It is NOT being a coward or weak
- NO es exagerar o inventar cosas | It is NOT exaggerating or making things up
- NO se cura solo con rezar (aunque la fe puede ayudar junto con el tratamiento) | It is NOT cured just by praying (although faith can help along with treatment)
- NO se arregla con "echarle ganas" | It is NOT fixed by "trying harder"
- NO es solo estar preocupado -- es una condicion medica | It is NOT just being worried -- it is a medical condition

**Como buscar ayuda | How to seek help:**

- Hablar con tu doctor de cabecera | Talk to your primary care doctor
- Buscar un terapeuta que hable espanol | Look for a therapist who speaks Spanish
- Llamar al 988 si sientes que es una crisis | Call 988 if you feel it is a crisis
- Preguntar en tu iglesia o centro comunitario por recursos | Ask at your church or community center for resources

**RECURSOS DE CRISIS | CRISIS RESOURCES:**
- **988 Linea de Crisis**: Llama o envia texto al 988 (espanol disponible) | Call or text 988 (Spanish available)
- **SAMHSA**: 1-800-662-4357 (espanol disponible)`,
      keyTerms: [
        {
          term: 'ansiedad | anxiety',
          definition:
            'Preocupacion excesiva y constante que afecta tu vida diaria y puede causar sintomas fisicos | Excessive and constant worry that affects your daily life and can cause physical symptoms',
        },
        {
          term: 'nervios',
          definition:
            'Palabra comun en nuestra comunidad para describir sentimientos de ansiedad, estres y malestar | Common word in our community to describe feelings of anxiety, stress, and distress',
        },
        {
          term: 'ataque de panico | panic attack',
          definition:
            'Un episodio repentino de miedo intenso con el corazon acelerado, falta de aire y sensacion de que vas a morir -- es aterrador pero NO es peligroso | A sudden episode of intense fear with racing heart, shortness of breath, and feeling like you are going to die -- it is terrifying but NOT dangerous',
        },
        {
          term: 'terapia | therapy',
          definition:
            'Hablar con un profesional capacitado que te ayuda a aprender a manejar la ansiedad | Talking with a trained professional who helps you learn to manage anxiety',
        },
      ],
      analogies: [
        'La ansiedad es como una alarma de carro que se activa sola cuando no hay ladron -- tu cuerpo reacciona como si hubiera peligro aunque no lo haya. | Anxiety is like a car alarm that goes off by itself when there is no thief -- your body reacts as if there is danger even though there is not.',
        'Vivir con ansiedad por la migracion es como caminar sobre hielo -- cada paso te da miedo de caer, y es agotador vivir asi. | Living with immigration anxiety is like walking on ice -- every step makes you afraid of falling, and it is exhausting to live like that.',
        'Los "nervios" son como una olla hirviendo con la tapa puesta -- necesitas soltar el vapor de forma segura o va a explotar. | "Nervios" are like a boiling pot with the lid on -- you need to release the steam safely or it will explode.',
      ],
      examples: [
        'Dona Maria tiene dolor de estomago cada vez que ve una patrulla de policia. No sabe que lo que siente es un ataque de ansiedad. | Dona Maria gets stomach pain every time she sees a police car. She does not know that what she feels is an anxiety attack.',
        'Pedro no puede dormir porque esta preocupado de que lo despidan del trabajo, que su familia en Mexico este mal, y que no tenga suficiente dinero para la renta. Su doctor le dice que tiene ansiedad generalizada y que hay tratamiento. | Pedro cannot sleep because he is worried about being fired, about his family in Mexico being unwell, and about not having enough money for rent. His doctor tells him he has generalized anxiety and there is treatment.',
      ],
      patientCounselingPoints: [
        'La ansiedad es una condicion medica real, no es debilidad ni exageracion. | Anxiety is a real medical condition, not weakness or exaggeration.',
        'Los sintomas fisicos como dolores y "nervios" pueden ser ansiedad. | Physical symptoms like aches and "nervios" can be anxiety.',
        'El miedo por la migracion es comprensible y hay formas de manejarlo. | Fear about immigration is understandable and there are ways to manage it.',
        'Hay ayuda disponible en espanol. No tiene que sufrir solo/a. | Help is available in Spanish. You do not have to suffer alone.',
      ],
    },
    2: {
      level: 2,
      summary:
        'La ansiedad en comunidades latinas esta fuertemente influida por estresores sociales especificos como el miedo migratorio, la discriminacion, la pobreza y la separacion familiar. Se expresa frecuentemente a traves de sindromes culturales como "nervios" y "ataque de nervios." Los tratamientos culturalmente adaptados que integran valores familiares y comunitarios tienen mayor efectividad. | Anxiety in Latino communities is strongly influenced by specific social stressors such as immigration fear, discrimination, poverty, and family separation. It is frequently expressed through cultural syndromes like "nervios" and "ataque de nervios." Culturally adapted treatments integrating family and community values have greater effectiveness.',
      explanation: `**Ansiedad en el contexto de la experiencia latina | Anxiety in the context of the Latino experience:**

**Estresores especificos de la comunidad latina | Specific stressors of the Latino community:**

*Estresores migratorios | Migratory stressors:*
- Ansiedad cronica por estatus migratorio | Chronic anxiety about immigration status
- Hipervigilancia ante autoridades (ICE, policia) | Hypervigilance toward authorities (ICE, police)
- Trauma migratorio (cruce de frontera, separacion familiar) | Migratory trauma (border crossing, family separation)
- Duelo por la vida dejada atras | Grief for the life left behind
- Incertidumbre sobre el futuro | Uncertainty about the future

*Estresores de aculturacion | Acculturation stressors:*
- Conflicto de identidad bicultural | Bicultural identity conflict
- Barreras linguisticas que generan aislamiento | Language barriers generating isolation
- Conflicto intergeneracional | Intergenerational conflict
- Perdida de estatus social (profesionales que trabajan en empleos de menor estatus) | Loss of social status (professionals working lower-status jobs)

*Estresores economicos | Economic stressors:*
- Trabajo precario e inestable | Precarious and unstable work
- Explotacion laboral | Labor exploitation
- Envio de remesas (presion de mantener a la familia en el pais de origen) | Sending remittances (pressure to support family in home country)
- Falta de acceso a servicios de salud | Lack of access to health services

**Sindromes culturales relacionados con ansiedad | Cultural syndromes related to anxiety:**

*Nervios:*
- Concepto amplio que abarca sintomas de ansiedad y depresion | Broad concept encompassing anxiety and depression symptoms
- Reconocido en DSM-5-TR como concepto cultural de malestar | Recognized in DSM-5-TR as cultural concept of distress
- Sintomas: Preocupacion, irritabilidad, cefaleas, dolor, insomnio | Symptoms: Worry, irritability, headaches, pain, insomnia

*Ataque de nervios:*
- Episodio agudo similar a ataque de panico pero con componentes culturales | Acute episode similar to panic attack but with cultural components
- Gritos, llanto, agresion verbal, temblores, calor | Screaming, crying, verbal aggression, trembling, heat
- Frecuentemente precipitado por evento estresante | Frequently precipitated by stressful event
- Puede incluir disociacion | May include dissociation

*Susto:*
- Miedo extremo que "sale del cuerpo" | Extreme fear that "leaves the body"
- Se superpone con TEPT y trastorno de ansiedad generalizada | Overlaps with PTSD and generalized anxiety disorder
- Puede incluir sintomas somaticos prolongados | May include prolonged somatic symptoms

**Tipos de ansiedad comunes en la comunidad | Common types of anxiety in the community:**

- Ansiedad generalizada (preocupacion constante) | Generalized anxiety (constant worry)
- Trastorno de panico (ataques de panico recurrentes) | Panic disorder (recurrent panic attacks)
- Ansiedad social (miedo a situaciones sociales) | Social anxiety (fear of social situations)
- TEPT relacionado con trauma migratorio | PTSD related to migratory trauma
- Ansiedad de separacion (en ninos separados de padres) | Separation anxiety (in children separated from parents)

**Tratamiento culturalmente adaptado | Culturally adapted treatment:**

*Psicoterapia | Psychotherapy:*
- TCC adaptada con valores familiares y culturales | Adapted CBT with family and cultural values
- Terapia narrativa con elementos culturales | Narrative therapy with cultural elements
- Terapia de grupo en espanol | Group therapy in Spanish
- Tecnicas de relajacion y mindfulness adaptadas culturalmente | Culturally adapted relaxation and mindfulness techniques

*Apoyo comunitario | Community support:*
- Promotores de salud | Promotores de salud
- Grupos de apoyo en iglesias | Church support groups
- Lineas de ayuda en espanol | Help lines in Spanish
- Organizaciones comunitarias latinas | Latino community organizations

*Medicamentos | Medications:*
- ISRS como primera linea | SSRIs as first line
- Considerar sensibilidad farmacogenetica | Consider pharmacogenetic sensitivity
- Psicoeducacion sobre medicamentos en espanol | Psychoeducation about medications in Spanish`,
      keyTerms: [
        {
          term: 'hipervigilancia | hypervigilance',
          definition:
            'Estado de alerta constante y excesiva ante posibles amenazas, comun en personas con miedo migratorio | State of constant and excessive alertness to possible threats, common in people with immigration fear',
        },
        {
          term: 'aculturacion | acculturation',
          definition:
            'Proceso de adaptacion a una nueva cultura que puede generar estres significativo | Process of adapting to a new culture that can generate significant stress',
        },
        {
          term: 'ansiedad migratoria | immigration anxiety',
          definition:
            'Ansiedad cronica relacionada con el estatus migratorio, miedo a la deportacion y separacion familiar | Chronic anxiety related to immigration status, fear of deportation, and family separation',
        },
        {
          term: 'remesas | remittances',
          definition:
            'Dinero que los inmigrantes envian a sus familias en el pais de origen, que puede ser fuente de presion y ansiedad | Money immigrants send to their families in their home country, which can be a source of pressure and anxiety',
        },
        {
          term: 'trauma migratorio | migratory trauma',
          definition:
            'Experiencias traumaticas vividas durante el proceso de migracion que pueden causar ansiedad y TEPT | Traumatic experiences during the migration process that can cause anxiety and PTSD',
        },
      ],
      analogies: [
        'La ansiedad migratoria es como vivir en una casa donde la alarma suena todo el tiempo -- tu cuerpo nunca puede relajarse. | Immigration anxiety is like living in a house where the alarm rings all the time -- your body can never relax.',
        'El estres de aculturacion es como aprender a caminar de nuevo en un pais nuevo -- todo lo que sabia hacer automaticamente ahora requiere esfuerzo y genera ansiedad. | Acculturation stress is like learning to walk again in a new country -- everything you used to do automatically now requires effort and generates anxiety.',
      ],
      examples: [
        'Una familia que llego de Honduras describe "nervios" constantes. Toda la familia muestra sintomas de ansiedad: la madre no duerme, el padre tiene dolores de espalda, y los ninos no quieren ir a la escuela. Un enfoque familiar de tratamiento les ayuda a todos. | A family that arrived from Honduras describes constant "nervios." The whole family shows anxiety symptoms: the mother cannot sleep, the father has back pain, and the children do not want to go to school. A family treatment approach helps them all.',
        'Carlos tiene ataques de panico cada vez que ve una patrulla de la policia. Piensa que esta teniendo un ataque al corazon. Cuando le explican que es ansiedad y que el miedo que siente por su estatus migratorio es la causa, comienza a entender y aceptar tratamiento. | Carlos has panic attacks every time he sees a police car. He thinks he is having a heart attack. When they explain it is anxiety and that the fear he feels about his immigration status is the cause, he begins to understand and accept treatment.',
      ],
      patientCounselingPoints: [
        'El miedo constante por la migracion es comprensible, pero cuando no le deja funcionar necesita atencion. | Constant immigration fear is understandable, but when it prevents you from functioning it needs attention.',
        'Los ataques de panico son aterradores pero NO son peligrosos -- su corazon esta bien. | Panic attacks are terrifying but NOT dangerous -- your heart is fine.',
        'Hay formas de manejar la ansiedad que respetan sus valores culturales y espirituales. | There are ways to manage anxiety that respect your cultural and spiritual values.',
        'Toda su familia puede beneficiarse del tratamiento, no solo usted. | Your whole family can benefit from treatment, not just you.',
      ],
    },
    3: {
      level: 3,
      summary:
        'La ansiedad en poblaciones latinas presenta patrones clinicos y epidemiologicos influidos por la interseccion de vulnerabilidad biologica, estresores sociales cronicos (migracion, discriminacion, pobreza) y marcos culturales de comprension del malestar. La formulacion cultural y los instrumentos validados son esenciales para el diagnostico preciso. Las adaptaciones culturales sistematicas de TCC y terapias de exposicion muestran efectividad superior. | Anxiety in Latino populations presents clinical and epidemiological patterns influenced by the intersection of biological vulnerability, chronic social stressors (migration, discrimination, poverty), and cultural frameworks of distress understanding. Cultural formulation and validated instruments are essential for accurate diagnosis. Systematic cultural adaptations of CBT and exposure therapies show superior effectiveness.',
      explanation: `**Epidemiologia diferencial de ansiedad en latinos | Differential epidemiology of anxiety in Latinos:**

- Trastornos de ansiedad: Prevalencia ~30% de por vida en poblacion general | Anxiety disorders: ~30% lifetime prevalence in general population
- En latinos: Prevalencia similar pero menor deteccion y tratamiento | In Latinos: Similar prevalence but lower detection and treatment
- Solo 20% de latinos con trastornos de ansiedad reciben tratamiento minimamente adecuado | Only 20% of Latinos with anxiety disorders receive minimally adequate treatment
- Variabilidad por subgrupo: Puertorriquenos > mexicano-americanos > cubanos | Variability by subgroup: Puerto Ricans > Mexican Americans > Cubans
- Mayor cronicidad cuando no se trata | Greater chronicity when untreated
- Comorbilidad con depresion mas comun en latinos (vs blancos no hispanos) | Comorbidity with depression more common in Latinos (vs non-Hispanic whites)

**Neurobiologia del estres cronico migratorio | Neurobiology of chronic migratory stress:**

*Activacion cronica del sistema de estres | Chronic activation of stress system:*
- Hiperactivacion sostenida del eje HPA | Sustained HPA axis hyperactivation
- Hipervigilancia: Amigdala en estado de alerta permanente | Hypervigilance: Amygdala in permanent alert state
- Condicionamiento contextual del miedo (ICE, policia, uniformes) | Contextual fear conditioning (ICE, police, uniforms)
- Deficit de extincion del miedo por estres cronico | Fear extinction deficit due to chronic stress
- Sensibilizacion del circuito del miedo | Fear circuit sensitization

*Somatizacion como proceso neurobiologico | Somatization as neurobiological process:*
- Insula anterior hiperactiva: Amplificacion de senales interoceptivas | Hyperactive anterior insula: Amplification of interoceptive signals
- Conexion bidireccional entre dolor fisico y sufrimiento emocional | Bidirectional connection between physical pain and emotional suffering
- La CCA procesa dolor fisico y social en redes superpuestas | ACC processes physical and social pain in overlapping networks
- No es "inventar" sintomas -- la neurobiologia los hace reales | Not "making up" symptoms -- neurobiology makes them real

**Evaluacion clinica culturalmente informada | Culturally informed clinical assessment:**

*Formulacion Cultural del DSM-5-TR aplicada a ansiedad | DSM-5-TR Cultural Formulation applied to anxiety:*
- Evaluacion del modelo explicativo del paciente | Assessment of patient explanatory model
- Identificacion de sindromes culturales (nervios, susto, ataque de nervios) | Identification of cultural syndromes
- Evaluacion de estresores culturales especificos | Assessment of specific cultural stressors
- Factores culturales en la relacion terapeutica | Cultural factors in therapeutic relationship
- Evaluacion de redes de apoyo cultural | Assessment of cultural support networks

*Instrumentos especificos | Specific instruments:*
- GAD-7 en espanol (validado) | GAD-7 in Spanish (validated)
- PHQ con modulo de panico en espanol | PHQ with panic module in Spanish
- PCL-5 para TEPT migratorio | PCL-5 for migratory PTSD
- Escala de Estres de Aculturacion | Acculturation Stress Scale
- Encuesta de Discriminacion Percibida | Perceived Discrimination Survey

**Tratamientos culturalmente adaptados basados en evidencia | Evidence-based culturally adapted treatments:**

*TCC adaptada para ansiedad en latinos | Adapted CBT for anxiety in Latinos:*
- Modelo de Interian: Incorporacion de psicoeducacion culturalmente relevante | Interian Model: Incorporation of culturally relevant psychoeducation
- Reestructuracion cognitiva usando dichos y refranes | Cognitive restructuring using dichos and refranes
- Exposicion gradual con consideracion de contexto migratorio | Graded exposure with consideration of migratory context
- Tecnicas de relajacion que incorporan elementos culturales | Relaxation techniques incorporating cultural elements
- Involucrar a la familia como recurso terapeutico | Involving family as therapeutic resource

*Terapia de exposicion adaptada | Adapted exposure therapy:*
- Desafio: Distinguir miedo irracional de miedo racional (por ej., miedo a ICE puede ser racional) | Challenge: Distinguishing irrational fear from rational fear (e.g., fear of ICE may be rational)
- Exposicion interoceptiva para panico en contexto cultural | Interoceptive exposure for panic in cultural context
- Terapia de procesamiento cognitivo para trauma migratorio | Cognitive processing therapy for migratory trauma

*Intervenciones comunitarias | Community interventions:*
- Mental Health First Aid en espanol | Mental Health First Aid in Spanish
- Programas de promotores de salud mental | Mental health promotores de salud programs
- Intervencion en escuelas para ninos inmigrantes | School-based intervention for immigrant children`,
      keyTerms: [
        {
          term: 'condicionamiento contextual del miedo | contextual fear conditioning',
          definition:
            'Aprendizaje donde un contexto completo (no solo un estimulo) se asocia con peligro; explica la hipervigilancia en personas con estatus migratorio precario | Learning where an entire context (not just a stimulus) becomes associated with danger; explains hypervigilance in people with precarious immigration status',
        },
        {
          term: 'sensibilizacion del circuito del miedo | fear circuit sensitization',
          definition:
            'Proceso por el cual el estres cronico hace que el circuito del miedo responda mas facilmente a estimulos menores | Process by which chronic stress makes the fear circuit respond more easily to minor stimuli',
        },
        {
          term: 'extincion del miedo | fear extinction',
          definition:
            'Nuevo aprendizaje que reduce la respuesta de miedo; comprometida por estres cronico y base de la terapia de exposicion | New learning that reduces fear response; compromised by chronic stress and basis of exposure therapy',
        },
        {
          term: 'GAD-7',
          definition:
            'Cuestionario de 7 items para tamizaje y monitoreo de ansiedad generalizada, validado en espanol | 7-item questionnaire for screening and monitoring generalized anxiety, validated in Spanish',
        },
        {
          term: 'Escala de Estres de Aculturacion | Acculturation Stress Scale',
          definition:
            'Instrumento que mide el estres especifico asociado con el proceso de adaptacion a una nueva cultura | Instrument measuring the specific stress associated with the process of adapting to a new culture',
        },
      ],
      clinicalNotes:
        'La evaluacion de ansiedad en pacientes latinos debe distinguir entre miedo racional (por ej., deportacion en personas sin documentos) y ansiedad patologica. La exposicion terapeutica requiere adaptacion cuando el miedo tiene base real -- el enfoque debe ser en manejar la respuesta ansiosa desproporcionada sin invalidar miedos legitimos. La somatizacion es una via neurobiologica valida, no un artefacto cultural. Los instrumentos de tamizaje validados en espanol deben usarse rutinariamente. La comorbilidad ansiedad-depresion es mas comun en latinos y debe guiar la seleccion de tratamiento (ISRS de amplio espectro, protocolos transdiagnosticos). El trauma migratorio debe evaluarse sistematicamente, especialmente en personas que cruzaron la frontera o fueron separados de sus familias. | Anxiety assessment in Latino patients must distinguish between rational fear (e.g., deportation in undocumented people) and pathological anxiety. Therapeutic exposure requires adaptation when fear has a real basis -- the focus should be on managing disproportionate anxious response without invalidating legitimate fears. Somatization is a valid neurobiological pathway, not a cultural artifact. Validated Spanish screening instruments should be routinely used. Anxiety-depression comorbidity is more common in Latinos and should guide treatment selection (broad-spectrum SSRIs, transdiagnostic protocols). Migratory trauma should be systematically assessed, especially in people who crossed the border or were separated from their families.',
    },
    4: {
      level: 4,
      summary:
        'La fisiopatologia avanzada de la ansiedad en contexto latino integra la neurociencia del estres social cronico (sensibilizacion amigdalar, deficit de extincion, neuroinflamacion), los marcos de adaptacion cultural sistematica, y los modelos transdiagnosticos. La distincion entre miedo adaptativo y ansiedad patologica en contextos de amenaza real (migracion) presenta desafios clinicos unicos que requieren formulaciones individualizadas. | Advanced anxiety pathophysiology in the Latino context integrates the neuroscience of chronic social stress (amygdala sensitization, extinction deficit, neuroinflammation), systematic cultural adaptation frameworks, and transdiagnostic models. The distinction between adaptive fear and pathological anxiety in contexts of real threat (migration) presents unique clinical challenges requiring individualized formulations.',
      explanation: `**Neurociencia avanzada del estres migratorio y ansiedad | Advanced neuroscience of migratory stress and anxiety:**

*Sensibilizacion amigdalar por estres cronico | Amygdala sensitization from chronic stress:*
- CRH intra-amigdalar amplifica respuestas de miedo | Intra-amygdala CRH amplifies fear responses
- Plasticidad sináptica aumentada en amigdala basolateral | Increased synaptic plasticity in basolateral amygdala
- Hipertrofia dendritica amigdalar (contraste con atrofia hipocampal) | Amygdala dendritic hypertrophy (contrast with hippocampal atrophy)
- Resultado: Umbral de activacion reducido para estimulos de miedo | Result: Reduced activation threshold for fear stimuli

*Deficit de extincion por estres cronico | Extinction deficit from chronic stress:*
- El cortisol cronico deteriora la plasticidad en CPFvm | Chronic cortisol impairs vmPFC plasticity
- Consolidacion de la extincion comprometida | Extinction consolidation compromised
- Implicaciones para terapia de exposicion: Puede requerir mas sesiones | Implications for exposure therapy: May require more sessions
- Potenciacion farmacologica (DCS, propranolol) puede ser mas necesaria | Pharmacological enhancement (DCS, propranolol) may be more necessary

*Condicionamiento contextual generalizado | Generalized contextual conditioning:*
- Personas con estatus migratorio precario desarrollan condicionamiento contextual amplio | People with precarious immigration status develop broad contextual conditioning
- Uniformes, sirenas, edificios gubernamentales como estimulos condicionados | Uniforms, sirens, government buildings as conditioned stimuli
- Generalizacion del miedo a contextos seguros | Fear generalization to safe contexts
- Dificultad para distinguir contextos amenazantes de seguros | Difficulty distinguishing threatening from safe contexts

**Marcos clinicos avanzados | Advanced clinical frameworks:**

*Modelo transdiagnostico adaptado para latinos | Transdiagnostic model adapted for Latinos:*
- Protocolo Unificado de Barlow con adaptaciones culturales | Barlow Unified Protocol with cultural adaptations
- Factores transdiagnosticos: Sensibilidad a la ansiedad, intolerancia a la incertidumbre, evitacion experiencial | Transdiagnostic factors: Anxiety sensitivity, intolerance of uncertainty, experiential avoidance
- Estos factores pueden estar amplificados por contexto migratorio | These factors may be amplified by migratory context
- Abordaje: Regulacion emocional como habilidad central | Approach: Emotion regulation as core skill

*Formulacion clinica integrativa | Integrative clinical formulation:*
- Factores predisponentes: Genetica, ACEs en pais de origen, historia familiar | Predisposing factors: Genetics, ACEs in home country, family history
- Factores precipitantes: Migracion, separacion, trauma | Precipitating factors: Migration, separation, trauma
- Factores de mantenimiento: Estatus migratorio, pobreza, aislamiento, estigma | Maintaining factors: Immigration status, poverty, isolation, stigma
- Factores protectores: Familismo, fe, comunidad, resiliencia cultural | Protective factors: Familismo, faith, community, cultural resilience
- Factores culturales: Modelo explicativo, sindromes culturales | Cultural factors: Explanatory model, cultural syndromes

**Farmacoterapia de precision en latinos con ansiedad | Precision pharmacotherapy for Latinos with anxiety:**

*Consideraciones farmacogeneticas | Pharmacogenetic considerations:*
- CYP2D6: Variabilidad significativa; algunos subgrupos con mayor frecuencia de metabolizadores lentos | Significant variability; some subgroups with higher frequency of poor metabolizers
- CYP2C19: Afecta metabolismo de citalopram, escitalopram, diazepam | Affects metabolism of citalopram, escitalopram, diazepam
- Implicacion clinica: Iniciar a dosis menores, titular mas lentamente | Clinical implication: Start at lower doses, titrate more slowly
- Monitoreo mas frecuente de efectos secundarios | More frequent side effect monitoring

*Algoritmo de tratamiento adaptado | Adapted treatment algorithm:*
1. Psicoeducacion culturalmente adaptada + tecnicas de manejo | Culturally adapted psychoeducation + management techniques
2. TCC adaptada o farmacoterapia (ISRS dosis baja inicial) | Adapted CBT or pharmacotherapy (low initial SSRI dose)
3. Combinacion si respuesta parcial | Combination if partial response
4. Protocolo transdiagnostico si multiples trastornos de ansiedad | Transdiagnostic protocol if multiple anxiety disorders
5. Abordaje de trauma migratorio si presente (CPT o PE adaptada) | Migratory trauma approach if present (adapted CPT or PE)

**Investigacion sobre efectividad | Effectiveness research:**

- Adaptaciones culturales muestran tamanos de efecto d = 0.32-0.47 superiores | Cultural adaptations show effect sizes d = 0.32-0.47 superior
- El componente de mayor impacto es la integracion de valores culturales (no solo la traduccion) | The highest-impact component is cultural values integration (not just translation)
- Interventions with family component show better retention | Interventions with family component show better retention
- Digital interventions en espanol muestran promesa para alcance | Digital interventions in Spanish show promise for reach`,
      keyTerms: [
        {
          term: 'CRH intra-amigdalar | intra-amygdala CRH',
          definition:
            'Hormona liberadora de corticotropina producida dentro de la amigdala que amplifica las respuestas de miedo bajo estres cronico | Corticotropin-releasing hormone produced within the amygdala that amplifies fear responses under chronic stress',
        },
        {
          term: 'condicionamiento contextual | contextual conditioning',
          definition:
            'Aprendizaje de miedo asociado a un contexto completo en lugar de un estimulo especifico; relevante para ansiedad migratoria | Fear learning associated with an entire context rather than a specific stimulus; relevant for immigration anxiety',
        },
        {
          term: 'ACEs (Experiencias Adversas en la Infancia)',
          definition:
            'Adverse Childhood Experiences -- experiencias traumaticas en la infancia que aumentan el riesgo de trastornos de ansiedad y otros problemas de salud | Adverse Childhood Experiences that increase risk of anxiety disorders and other health problems',
        },
        {
          term: 'CPT (Terapia de Procesamiento Cognitivo)',
          definition:
            'Cognitive Processing Therapy -- terapia basada en evidencia para trauma que puede adaptarse culturalmente para trauma migratorio | Evidence-based trauma therapy that can be culturally adapted for migratory trauma',
        },
        {
          term: 'Protocolo Unificado | Unified Protocol',
          definition:
            'Tratamiento transdiagnostico de Barlow para trastornos emocionales que aborda mecanismos compartidos entre diferentes trastornos de ansiedad | Barlow transdiagnostic treatment for emotional disorders addressing shared mechanisms across different anxiety disorders',
        },
      ],
      clinicalNotes:
        'La formulacion clinica en pacientes latinos con ansiedad debe integrar un analisis multinivel: neurobiologico (sensibilizacion amigdalar, deficit de extincion), psicologico (modelos cognitivos, sensibilidad a la ansiedad), social (estresores migratorios, discriminacion, pobreza) y cultural (modelos explicativos, sindromes culturales). La terapia de exposicion requiere una adaptacion cuidadosa: no se puede hacer exposicion al miedo de deportacion si la amenaza es real; el foco debe ser en la respuesta desproporcionada y la generalizacion del miedo a contextos seguros. Las consideraciones farmacogeneticas son clinicamente relevantes para evitar efectos secundarios tempranos que causan abandono del tratamiento. El Protocolo Unificado adaptado culturalmente es una opcion eficiente para la alta comorbilidad transdiagnostica en esta poblacion. | Clinical formulation in Latino patients with anxiety must integrate a multi-level analysis: neurobiological (amygdala sensitization, extinction deficit), psychological (cognitive models, anxiety sensitivity), social (migratory stressors, discrimination, poverty), and cultural (explanatory models, cultural syndromes). Exposure therapy requires careful adaptation: you cannot do exposure to deportation fear if the threat is real; the focus should be on disproportionate response and fear generalization to safe contexts. Pharmacogenetic considerations are clinically relevant to avoid early side effects causing treatment dropout. The culturally adapted Unified Protocol is an efficient option for high transdiagnostic comorbidity in this population.',
    },
    5: {
      level: 5,
      summary:
        'La investigacion de frontera en ansiedad culturalmente contextualizada integra neurociencia computacional del miedo, epigenetica del estres social, ciencia de implementacion, y marcos de equidad en salud. Los modelos de aprendizaje de seguridad en contextos de amenaza real, la personalizacion de intervenciones basada en perfiles de riesgo culturales, y las intervenciones de nivel politico representan direcciones criticas. La representacion adecuada de subgrupos latinos en ensayos clinicos es un imperativo etico y cientifico. | Frontier research in culturally contextualized anxiety integrates computational fear neuroscience, social stress epigenetics, implementation science, and health equity frameworks. Safety learning models in real-threat contexts, intervention personalization based on cultural risk profiles, and policy-level interventions represent critical directions. Adequate representation of Latino subgroups in clinical trials is an ethical and scientific imperative.',
      explanation: `**Neurociencia computacional del miedo en contexto cultural | Computational fear neuroscience in cultural context:**

*Modelos bayesianos de ansiedad migratoria | Bayesian models of immigration anxiety:*
- El cerebro estima probabilidades de amenaza basandose en priors | Brain estimates threat probabilities based on priors
- En contexto migratorio, los priors de amenaza estan calibrados a alta probabilidad | In migratory context, threat priors are calibrated to high probability
- Actualizacion bayesiana sesgada: Evidencia de seguridad se pondera menos | Biased Bayesian updating: Safety evidence is weighted less
- Implicacion terapeutica: Necesidad de mas evidencia de seguridad para recalibrar | Therapeutic implication: Need for more safety evidence to recalibrate
- Modelo computacional puede predecir respuesta a terapia de exposicion | Computational model may predict exposure therapy response

*Aprendizaje de seguridad vs extincion en contextos de amenaza real | Safety learning vs extinction in real-threat contexts:*
- Modelo clasico de extincion asume que el miedo es irracional | Classical extinction model assumes fear is irrational
- En contexto migratorio, parte del miedo es adaptativo | In migratory context, part of the fear is adaptive
- Enfoque: Aprendizaje discriminativo (distinguir contextos seguros de amenazantes) | Approach: Discriminative learning (distinguishing safe from threatening contexts)
- Entrenamiento en discriminacion de estimulos (no generalizacion del miedo) | Stimulus discrimination training (not fear generalization)
- Regulacion emocional como objetivo vs eliminacion del miedo | Emotion regulation as target vs fear elimination

**Epigenetica social y ansiedad intergeneracional | Social epigenetics and intergenerational anxiety:**

*Transmision intergeneracional del estres migratorio | Intergenerational transmission of migratory stress:*
- Metilacion diferencial en genes de respuesta al estres en hijos de inmigrantes | Differential methylation in stress response genes in children of immigrants
- SLC6A4 (transportador de serotonina): Modificaciones epigeneticas por estres parental | SLC6A4 (serotonin transporter): Epigenetic modifications from parental stress
- FKBP5 desmetilacion en respuesta a trauma: Mayor reactividad al estres | FKBP5 demethylation in response to trauma: Greater stress reactivity
- Cuidado parental como modulador epigenetico (sensibilidad materna) | Parental care as epigenetic modulator (maternal sensitivity)
- Implicaciones para la paradoja del inmigrante a traves de generaciones | Implications for the immigrant paradox across generations

**Ciencia de implementacion y equidad | Implementation science and equity:**

*Modelos de implementacion para intervenciones de ansiedad en latinos | Implementation models for anxiety interventions in Latinos:*
- SMART designs para adaptacion secuencial del tratamiento | SMART designs for sequential treatment adaptation
- Implementacion escalonada culturalmente adaptada | Culturally adapted stepped care
- Teleansiedad: Intervencion digital en espanol con apoyo de promotores | Tele-anxiety: Digital intervention in Spanish with promotores support
- Modelos de sustentabilidad financiera para intervenciones comunitarias | Financial sustainability models for community interventions

*Intervenciones de nivel politico | Policy-level interventions:*
- Impacto de politicas migratorias en ansiedad comunitaria (Chilling Effect documentado) | Impact of immigration policies on community anxiety (documented Chilling Effect)
- Sanctuary policies y su efecto protector en salud mental | Sanctuary policies and their protective effect on mental health
- Advocacy basada en evidencia para acceso a servicios independiente de estatus migratorio | Evidence-based advocacy for service access independent of immigration status

**Tecnologia y precision | Technology and precision:**

- IA para deteccion temprana de ansiedad en texto y voz en espanol | AI for early anxiety detection in Spanish text and voice
- Aplicaciones de entrenamiento de modificacion del sesgo atencional adaptadas culturalmente | Culturally adapted attentional bias modification training apps
- Realidad virtual para exposicion culturalmente contextualizada | Virtual reality for culturally contextualized exposure
- Wearables para monitoreo continuo de ansiedad con normas culturales | Wearables for continuous anxiety monitoring with cultural norms
- Modelos predictivos que incorporan estresores culturales | Predictive models incorporating cultural stressors`,
      keyTerms: [
        {
          term: 'modelo bayesiano de ansiedad | Bayesian anxiety model',
          definition:
            'Marco computacional que explica la ansiedad como una sobrestimacion de probabilidades de amenaza basada en experiencias previas | Computational framework explaining anxiety as overestimation of threat probabilities based on prior experiences',
        },
        {
          term: 'Chilling Effect',
          definition:
            'Fenomeno documentado donde politicas migratorias restrictivas causan que los inmigrantes eviten buscar servicios de salud por miedo | Documented phenomenon where restrictive immigration policies cause immigrants to avoid seeking health services due to fear',
        },
        {
          term: 'aprendizaje discriminativo | discriminative learning',
          definition:
            'Terapeuticamente, aprender a distinguir contextos seguros de amenazantes en lugar de extinguir todo el miedo (relevante cuando parte del miedo es adaptativo) | Therapeutically, learning to distinguish safe from threatening contexts rather than extinguishing all fear (relevant when part of the fear is adaptive)',
        },
        {
          term: 'desmetilacion de FKBP5 | FKBP5 demethylation',
          definition:
            'Cambio epigenetico en respuesta al trauma que aumenta la expresion de FKBP5 y la reactividad al estres; potencialmente transmisible intergeneracionalmente | Epigenetic change in response to trauma increasing FKBP5 expression and stress reactivity; potentially transmissible intergenerationally',
        },
        {
          term: 'sanctuary policies | politicas de santuario',
          definition:
            'Politicas locales que limitan la cooperacion con autoridades migratorias federales y que han mostrado efectos protectores en la salud mental de las comunidades inmigrantes | Local policies limiting cooperation with federal immigration authorities that have shown protective effects on immigrant community mental health',
        },
      ],
      clinicalNotes:
        'La practica clinica de frontera en ansiedad con pacientes latinos requiere: (1) Formulacion computacional que integre priors de amenaza realistas con respuestas desproporcionadas; (2) Terapia de exposicion adaptada que se enfoque en discriminacion de estimulos (seguro vs amenazante) en lugar de extincion del miedo per se; (3) Consideracion de la transmision epigenetica intergeneracional del estres al evaluar la segunda generacion; (4) Abogacia por politicas que reduzcan los estresores estructurales (sanctuary policies, acceso a servicios independiente de estatus migratorio); (5) Uso de tecnologias adaptadas culturalmente (IA, VR, apps) para ampliar el alcance. Los ensayos clinicos deben incluir representacion latina adecuada con desglose por subgrupo (mexicano, puertorriqueno, centroamericano, etc.) y por generacion (inmigrante, primera generacion, segunda generacion). El Chilling Effect es un fenomeno documentado que debe considerarse al interpretar tasas de busqueda de ayuda. | Frontier clinical practice in anxiety with Latino patients requires: (1) Computational formulation integrating realistic threat priors with disproportionate responses; (2) Adapted exposure therapy focusing on stimulus discrimination (safe vs threatening) rather than fear extinction per se; (3) Consideration of intergenerational epigenetic stress transmission when evaluating the second generation; (4) Advocacy for policies reducing structural stressors (sanctuary policies, service access independent of immigration status); (5) Use of culturally adapted technologies (AI, VR, apps) to expand reach. Clinical trials must include adequate Latino representation with subgroup breakdown (Mexican, Puerto Rican, Central American, etc.) and by generation (immigrant, first generation, second generation). The Chilling Effect is a documented phenomenon that must be considered when interpreting help-seeking rates.',
    },
  },

  media: [],

  citations: [
    {
      id: 'dsm5tr-cultural-formulation',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR)',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Cultural Formulation',
    },
    {
      id: 'barlow-2018-unified-protocol',
      type: 'journal',
      title: 'Unified Protocol for Transdiagnostic Treatment of Emotional Disorders',
      authors: ['Barlow, D.H.', 'Farchione, T.J.', 'Bullis, J.R.'],
      source: 'Behavior Therapy',
    },
    {
      id: 'chavez-2012-chilling-effect',
      type: 'journal',
      title: 'The Chilling Effect of Immigration Enforcement on Mental Health Service Utilization',
      authors: ['Chavez, L.R.'],
      source: 'American Journal of Public Health',
    },
  ],

  crossReferences: [
    {
      targetId: 'mental-health-ansiedad-anxiety',
      targetType: 'condition',
      relationship: 'related',
      label: 'Trastornos de Ansiedad | Anxiety Disorders',
    },
    {
      targetId: 'topic-depression-cultural-context',
      targetType: 'topic',
      relationship: 'related',
      label: 'Depresion en Contexto Cultural | Depression in Cultural Context',
    },
    {
      targetId: 'mental-health-tept-ptsd',
      targetType: 'condition',
      relationship: 'see-also',
      label: 'TEPT | PTSD',
    },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'cultural-context', 'anxiety-disorders', 'bilingual-content'],
    keywords: [
      'ansiedad',
      'anxiety',
      'contexto cultural',
      'cultural context',
      'nervios',
      'ataque de nervios',
      'migracion',
      'immigration',
      'aculturacion',
      'acculturation',
      'latino',
      'salud mental',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default anxietyCulturalContextContent;
