/**
 * Destigmatizing Mental Health in Latino Communities - Contenido Educativo Bilingue
 *
 * Reducing stigma around mental health in Latino/Hispanic communities.
 * Addressing cultural barriers, machismo, familismo, and pathways to care.
 *
 * Spanish-first with English translations separated by " | "
 * Culturally sensitive content for Spanish-speaking populations.
 */

import { EducationalContent } from '../types';

export const destigmatizingLatinoCommunitiesContent: EducationalContent = {
  id: 'topic-destigmatizing-latino-communities',
  type: 'topic',
  name: 'Destigmatizing Mental Health in Latino Communities',
  nameEs: 'Desestigmatizando la Salud Mental en Comunidades Latinas',
  alternateNames: [
    'Estigma de Salud Mental | Mental Health Stigma',
    'Salud Mental y Cultura Latina | Mental Health and Latino Culture',
    'Rompiendo Barreras | Breaking Barriers',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'La salud mental es tan importante como la salud fisica. En nuestras comunidades latinas, a veces se habla poco de estos temas, pero pedir ayuda es una senal de fortaleza, no de debilidad. | Mental health is just as important as physical health. In our Latino communities, these topics are sometimes not discussed, but asking for help is a sign of strength, not weakness.',
      explanation: `**Por que es importante hablar de salud mental? | Why is it important to talk about mental health?**

Asi como cuidamos nuestro cuerpo cuando nos enfermamos, tambien debemos cuidar nuestra mente. Muchos de nosotros crecimos escuchando que debemos ser fuertes y no quejarnos. Pero guardar todo adentro puede hacernos dano. | Just as we take care of our bodies when we get sick, we must also take care of our minds. Many of us grew up hearing that we should be strong and not complain. But keeping everything inside can hurt us.

**Que es el estigma? | What is stigma?**

El estigma es cuando las personas piensan mal de alguien por tener un problema de salud mental. Es como una etiqueta negativa que hace que las personas sientan verguenza y no busquen ayuda. | Stigma is when people think badly of someone for having a mental health problem. It is like a negative label that makes people feel ashamed and not seek help.

**Mitos comunes en nuestra comunidad | Common myths in our community:**

- "Los problemas de salud mental son por falta de fe" -- FALSO. Son condiciones medicas reales | "Mental health problems are due to lack of faith" -- FALSE. They are real medical conditions
- "Solo los locos van al psicologo" -- FALSO. Ir al psicologo es como ir al doctor para tu mente | "Only crazy people go to a psychologist" -- FALSE. Going to a psychologist is like going to a doctor for your mind
- "Hay que echarle ganas" -- No es suficiente. La depresion y la ansiedad necesitan tratamiento profesional | "You just need to try harder" -- It is not enough. Depression and anxiety need professional treatment
- "Eso no les pasa a los hombres" -- FALSO. La salud mental afecta a todos, hombres y mujeres | "That does not happen to men" -- FALSE. Mental health affects everyone, men and women
- "Es mejor no hablar de eso" -- Hablar es el primer paso para mejorar | "It is better not to talk about it" -- Talking is the first step to getting better

**Por que en nuestra comunidad es dificil hablar de esto? | Why is it hard to talk about this in our community?**

- El machismo hace que los hombres sientan que no deben mostrar emociones | Machismo makes men feel they should not show emotions
- La familia a veces no entiende y dice "tu estas bien" | Family sometimes does not understand and says "you are fine"
- El miedo a que piensen que estamos "locos" | Fear of being thought of as "crazy"
- No saber que hay ayuda disponible en espanol | Not knowing that help is available in Spanish
- Miedo a que afecte su situacion migratoria | Fear that it may affect immigration status

**La verdad es que: | The truth is:**

- Pedir ayuda es la decision mas valiente que puedes tomar | Asking for help is the bravest decision you can make
- Hay terapeutas que hablan espanol y entienden nuestra cultura | There are therapists who speak Spanish and understand our culture
- El tratamiento funciona y la mayoria de las personas mejoran | Treatment works and most people get better
- Cuidar tu salud mental tambien es cuidar a tu familia | Taking care of your mental health is also taking care of your family

**RECURSOS | RESOURCES:**
- **988 Linea de Suicidio y Crisis**: Llama o envia texto al 988 (espanol disponible) | Call or text 988 (Spanish available)
- **SAMHSA**: 1-800-662-4357 (espanol disponible)
- **NAMI en Espanol**: nami.org/Your-Journey/Identity-and-Cultural-Dimensions/Hispanic-Latinx`,
      keyTerms: [
        {
          term: 'estigma | stigma',
          definition:
            'Cuando las personas juzgan o rechazan a alguien por tener un problema de salud mental | When people judge or reject someone for having a mental health problem',
        },
        {
          term: 'machismo',
          definition:
            'Creencia cultural de que los hombres deben ser fuertes y no mostrar emociones, lo cual puede impedir que busquen ayuda | Cultural belief that men must be strong and not show emotions, which can prevent them from seeking help',
        },
        {
          term: 'salud mental | mental health',
          definition:
            'El bienestar emocional, psicologico y social de una persona | A person emotional, psychological, and social well-being',
        },
        {
          term: 'terapia | therapy',
          definition:
            'Tratamiento con un profesional capacitado que te ayuda a entender y manejar tus emociones | Treatment with a trained professional who helps you understand and manage your emotions',
        },
      ],
      analogies: [
        'El estigma de salud mental es como una pared invisible que impide que las personas busquen ayuda -- hay que derribar esa pared juntos. | Mental health stigma is like an invisible wall that prevents people from seeking help -- we need to tear down that wall together.',
        'Ir al psicologo es como ir al mecanico para tu carro -- no esperas a que se descomponga completamente, lo llevas a revision. | Going to a psychologist is like taking your car to the mechanic -- you do not wait until it breaks down completely, you take it for a check-up.',
        'Guardar las emociones adentro es como tapar una olla de presion -- eventualmente va a explotar. Hablar es como abrir la valvula de seguridad. | Keeping emotions inside is like covering a pressure cooker -- eventually it will explode. Talking is like opening the safety valve.',
      ],
      examples: [
        'Don Carlos tenia dolores de cabeza constantes y no podia dormir. Cuando finalmente hablo con un doctor, descubrio que tenia ansiedad. Con tratamiento, mejoro mucho. | Don Carlos had constant headaches and could not sleep. When he finally spoke with a doctor, he discovered he had anxiety. With treatment, he improved greatly.',
        'Maria no queria ir al psicologo porque su mama le decia que solo necesitaba rezar mas. Pero cuando fue, descubrio que tener fe Y buscar ayuda profesional no son cosas opuestas. | Maria did not want to go to a psychologist because her mom told her she just needed to pray more. But when she went, she discovered that having faith AND seeking professional help are not opposites.',
      ],
      patientCounselingPoints: [
        'La salud mental es tan real e importante como la salud fisica. | Mental health is as real and important as physical health.',
        'Buscar ayuda no es debilidad -- es valentia. | Seeking help is not weakness -- it is courage.',
        'Existen profesionales de salud mental que hablan espanol y entienden nuestra cultura. | There are mental health professionals who speak Spanish and understand our culture.',
        'Cuidar tu salud mental es una de las mejores cosas que puedes hacer por tu familia. | Taking care of your mental health is one of the best things you can do for your family.',
      ],
    },
    2: {
      level: 2,
      summary:
        'El estigma de salud mental en comunidades latinas tiene raices culturales profundas que incluyen machismo, marianismo, familismo y barreras estructurales de acceso. Entender estas barreras es clave para reducir el estigma y aumentar el acceso a servicios. | Mental health stigma in Latino communities has deep cultural roots including machismo, marianismo, familismo, and structural access barriers. Understanding these barriers is key to reducing stigma and increasing service access.',
      explanation: `**Entendiendo el estigma en contexto cultural | Understanding stigma in cultural context:**

El estigma de salud mental no es exclusivo de las comunidades latinas, pero tiene caracteristicas culturales especificas que debemos entender para poder abordarlo. | Mental health stigma is not exclusive to Latino communities, but it has specific cultural characteristics we must understand to address it.

**Factores culturales que contribuyen al estigma | Cultural factors contributing to stigma:**

**Machismo | Machismo:**
- Los hombres sienten presion de ser fuertes y proveedores | Men feel pressure to be strong and providers
- Mostrar emociones se ve como debilidad | Showing emotions is seen as weakness
- Los hombres latinos tienen tasas mas bajas de busqueda de ayuda | Latino men have lower help-seeking rates
- El alcoholismo a veces se ve como mas aceptable que buscar terapia | Alcoholism is sometimes seen as more acceptable than seeking therapy

**Marianismo | Marianismo:**
- Las mujeres sienten presion de ser auto-sacrificadas como la Virgen Maria | Women feel pressure to be self-sacrificing like the Virgin Mary
- Poner las necesidades de la familia antes que las propias | Putting family needs before one's own
- Soportar el sufrimiento en silencio | Enduring suffering in silence
- Pedir ayuda puede verse como falla en el rol de madre o esposa | Asking for help can be seen as failure in the role of mother or wife

**Familismo | Familism:**
- La familia es la fuente principal de apoyo | Family is the main source of support
- "Los problemas de la casa se quedan en la casa" | "Family problems stay at home"
- Puede ser protector pero tambien barrera cuando se usa para evitar ayuda profesional | Can be protective but also a barrier when used to avoid professional help
- El miedo a la verguenza familiar | Fear of family shame

**Barreras estructurales | Structural barriers:**
- Falta de proveedores bilingues y biculturales | Lack of bilingual and bicultural providers
- Falta de seguro medico | Lack of health insurance
- Miedo por estatus migratorio | Fear due to immigration status
- Horarios de trabajo que dificultan las citas | Work schedules that make appointments difficult
- Desconfianza en el sistema de salud | Distrust of the healthcare system
- Comunidades rurales con pocos recursos | Rural communities with few resources

**Impacto del estigma | Impact of stigma:**
- Retraso en buscar tratamiento (promedio 11 anos desde sintomas hasta tratamiento) | Delay in seeking treatment (average 11 years from symptoms to treatment)
- Mayor severidad cuando finalmente buscan ayuda | Greater severity when they finally seek help
- Abandono temprano del tratamiento | Early treatment dropout
- Somatizacion (expresar problemas emocionales como dolores fisicos) | Somatization (expressing emotional problems as physical pain)
- Mayor riesgo de complicaciones como abuso de sustancias | Higher risk of complications such as substance abuse

**Estrategias para reducir el estigma | Strategies to reduce stigma:**

- Educacion comunitaria en iglesias, escuelas y centros comunitarios | Community education in churches, schools, and community centers
- Testimonios de personas que han buscado ayuda exitosamente | Testimonies from people who have successfully sought help
- Involucrar a lideres comunitarios y religiosos | Involve community and religious leaders
- Campanas de salud mental en medios en espanol | Mental health campaigns in Spanish-language media
- Promotores de salud como puente cultural | Promotores de salud as cultural bridge
- Normalizar la salud mental como parte de la salud general | Normalize mental health as part of overall health`,
      keyTerms: [
        {
          term: 'marianismo',
          definition:
            'Ideal cultural de feminidad en culturas latinas que enfatiza el auto-sacrificio y la devocion a la familia | Cultural ideal of femininity in Latino cultures emphasizing self-sacrifice and devotion to family',
        },
        {
          term: 'familismo | familism',
          definition:
            'Valor cultural que prioriza la lealtad, reciprocidad y solidaridad familiar sobre las necesidades individuales | Cultural value that prioritizes family loyalty, reciprocity, and solidarity over individual needs',
        },
        {
          term: 'somatizacion | somatization',
          definition:
            'Expresar el malestar emocional como sintomas fisicos, comun en culturas donde la salud mental es estigmatizada | Expressing emotional distress as physical symptoms, common in cultures where mental health is stigmatized',
        },
        {
          term: 'promotor/a de salud',
          definition:
            'Trabajador comunitario de salud que conecta a la comunidad con servicios y educacion de salud | Community health worker who connects the community with health services and education',
        },
        {
          term: 'barrera estructural | structural barrier',
          definition:
            'Obstaculos en el sistema que dificultan el acceso a servicios, como falta de seguro o proveedores bilingues | System obstacles that hinder service access, such as lack of insurance or bilingual providers',
        },
      ],
      analogies: [
        'El estigma es como una maleza que crece en nuestra comunidad -- si no la arrancamos de raiz con educacion, sigue creciendo. | Stigma is like a weed growing in our community -- if we do not pull it out by the root with education, it keeps growing.',
        'Pedirle a alguien con depresion que "le eche ganas" es como pedirle a alguien con una pierna rota que corra -- necesita tratamiento primero. | Telling someone with depression to "try harder" is like telling someone with a broken leg to run -- they need treatment first.',
      ],
      examples: [
        'En una iglesia latina en Los Angeles, el pastor invito a un psicologo a hablar sobre depresion. Muchas personas se acercaron a pedir informacion porque se sintieron seguras en un espacio familiar. | In a Latino church in Los Angeles, the pastor invited a psychologist to speak about depression. Many people approached to ask for information because they felt safe in a familiar space.',
        'Un programa de promotores de salud en Texas redujo las visitas a urgencias por ataques de panico en un 40% al educar a la comunidad sobre ansiedad. | A promotores de salud program in Texas reduced ER visits for panic attacks by 40% by educating the community about anxiety.',
      ],
      patientCounselingPoints: [
        'Hablar de salud mental con su familia puede ser dificil, pero el primer paso es informarse. | Talking about mental health with your family can be difficult, but the first step is getting informed.',
        'Buscar ayuda profesional y mantener sus valores culturales y espirituales no son cosas opuestas. | Seeking professional help and maintaining your cultural and spiritual values are not opposing things.',
        'Usted puede ser el ejemplo para que otros en su familia tambien busquen ayuda. | You can be the example for others in your family to also seek help.',
        'Cuidar su salud mental le permite cuidar mejor a su familia. | Taking care of your mental health allows you to better care for your family.',
      ],
    },
    3: {
      level: 3,
      summary:
        'El estigma de salud mental en comunidades latinas opera en niveles publico, estructural e internalizado. La investigacion muestra que las intervenciones culturalmente adaptadas, incluyendo programas comunitarios basados en contacto social y educacion, pueden reducir significativamente el estigma y mejorar las tasas de busqueda de ayuda. | Mental health stigma in Latino communities operates at public, structural, and internalized levels. Research shows that culturally adapted interventions, including community-based social contact and education programs, can significantly reduce stigma and improve help-seeking rates.',
      explanation: `**Marco teorico del estigma | Theoretical framework of stigma:**

*Tipos de estigma | Types of stigma:*
- Estigma publico: Actitudes negativas de la sociedad hacia personas con enfermedades mentales | Public stigma: Negative societal attitudes toward people with mental illness
- Estigma estructural: Politicas y practicas institucionales que discriminan | Structural stigma: Institutional policies and practices that discriminate
- Auto-estigma: Internalizacion de actitudes negativas por las propias personas afectadas | Self-stigma: Internalization of negative attitudes by affected individuals themselves
- Estigma de cortesia: Afecta a familiares y seres queridos | Courtesy stigma: Affects family members and loved ones
- Estigma de etiqueta: Asociado con el diagnostico formal | Label stigma: Associated with formal diagnosis

*Modelo de estigma modificado (Corrigan) | Modified stigma model (Corrigan):*
- Senales (cues) -> Estereotipos -> Prejuicio -> Discriminacion | Cues -> Stereotypes -> Prejudice -> Discrimination
- En comunidades latinas, las senales culturales se amplifican | In Latino communities, cultural cues are amplified

**Factores culturales especificos | Specific cultural factors:**

*Valores culturales y su impacto | Cultural values and their impact:*

Personalismo:
- Preferencia por relaciones personales y de confianza | Preference for personal, trusting relationships
- Los pacientes latinos prefieren proveedores que establezcan una relacion personal | Latino patients prefer providers who establish a personal relationship
- Puede facilitar el tratamiento cuando el terapeuta es culturalmente competente | Can facilitate treatment when the therapist is culturally competent

Respeto:
- Deferencia hacia figuras de autoridad (medicos, lideres religiosos) | Deference toward authority figures (doctors, religious leaders)
- Los proveedores pueden usar esto positivamente para normalizar la busqueda de ayuda | Providers can use this positively to normalize help-seeking

Fatalismo:
- Creencia de que los eventos estan predeterminados por Dios o el destino | Belief that events are predetermined by God or fate
- Puede reducir la motivacion para buscar tratamiento | May reduce motivation to seek treatment
- Integracion de espiritualidad en el tratamiento puede ser beneficiosa | Integration of spirituality in treatment can be beneficial

Simpatia:
- Valoracion de interacciones sociales armoniosas | Valuing harmonious social interactions
- Puede dificultar la expresion de emociones negativas | May make it difficult to express negative emotions
- Puede llevar a minimizar sintomas ante el profesional | May lead to minimizing symptoms before the professional

**Datos epidemiologicos | Epidemiological data:**

- Los latinos tienen tasas similares de enfermedad mental pero menor uso de servicios (33% vs 48% en blancos no hispanos) | Latinos have similar rates of mental illness but lower service use (33% vs 48% in non-Hispanic whites)
- Solo 1 de cada 11 latinos con trastorno mental de ansiedad contacta a un profesional de salud mental | Only 1 in 11 Latinos with an anxiety mental disorder contacts a mental health professional
- Los latinos nacidos en EE.UU. tienen mayores tasas de trastornos mentales que los inmigrantes (paradoja del inmigrante) | U.S.-born Latinos have higher rates of mental disorders than immigrants (immigrant paradox)
- El tiempo promedio entre inicio de sintomas y tratamiento es de 11 anos para latinos | Average time between symptom onset and treatment is 11 years for Latinos

**Intervenciones basadas en evidencia | Evidence-based interventions:**

*Programas comunitarios | Community programs:*
- Programas de contacto social (testimonios de personas con experiencia vivida) | Social contact programs (testimonials from people with lived experience)
- Educacion psicoeducativa culturalmente adaptada | Culturally adapted psychoeducation
- Programas de Mental Health First Aid en espanol | Mental Health First Aid programs in Spanish
- Campanas de medios en espanol | Spanish-language media campaigns

*Integracion de servicios | Service integration:*
- Atencion primaria como puerta de entrada a servicios de salud mental | Primary care as gateway to mental health services
- Modelo de cuidado colaborativo | Collaborative care model
- Tamizaje de rutina en atencion primaria | Routine screening in primary care
- Promotores de salud como navegadores de sistemas | Promotores de salud as system navigators

*Adaptaciones culturales de terapia | Cultural adaptations of therapy:*
- TCC culturalmente adaptada (incorporacion de valores culturales) | Culturally adapted CBT (incorporation of cultural values)
- Terapia narrativa con enfasis en historias culturales | Narrative therapy emphasizing cultural stories
- Terapia familiar que respeta la estructura familiar latina | Family therapy that respects Latino family structure`,
      keyTerms: [
        {
          term: 'auto-estigma | self-stigma',
          definition:
            'Internalizacion de actitudes negativas de la sociedad, resultando en vergüenza y baja autoestima | Internalization of negative societal attitudes, resulting in shame and low self-esteem',
        },
        {
          term: 'paradoja del inmigrante | immigrant paradox',
          definition:
            'Fenomeno donde los inmigrantes recientes tienen mejor salud mental que las generaciones posteriores nacidas en EE.UU. | Phenomenon where recent immigrants have better mental health than later U.S.-born generations',
        },
        {
          term: 'personalismo',
          definition:
            'Valor cultural latino que enfatiza las relaciones interpersonales calidas y personales | Latino cultural value emphasizing warm, personal interpersonal relationships',
        },
        {
          term: 'modelo de cuidado colaborativo | collaborative care model',
          definition:
            'Integracion de salud mental en atencion primaria con un equipo multidisciplinario | Integration of mental health in primary care with a multidisciplinary team',
        },
        {
          term: 'fatalismo | fatalism',
          definition:
            'Creencia de que los eventos de la vida estan predeterminados; puede influir en las actitudes hacia el tratamiento | Belief that life events are predetermined; can influence attitudes toward treatment',
        },
      ],
      clinicalNotes:
        'En la practica clinica, evaluar siempre los modelos explicativos culturales del paciente antes de proponer tratamiento. La alianza terapeutica con pacientes latinos mejora significativamente cuando el proveedor demuestra familiaridad con valores culturales (personalismo, respeto, familismo). El tamizaje universal en atencion primaria es especialmente importante en esta poblacion por la tendencia a presentar sintomas somaticos. La integracion de la fe y la espiritualidad no debe descartarse sino incorporarse al plan de tratamiento. | In clinical practice, always assess the patient cultural explanatory models before proposing treatment. The therapeutic alliance with Latino patients improves significantly when the provider demonstrates familiarity with cultural values (personalismo, respeto, familismo). Universal screening in primary care is especially important in this population due to the tendency to present somatic symptoms. Faith and spirituality integration should not be dismissed but incorporated into the treatment plan.',
    },
    4: {
      level: 4,
      summary:
        'Los marcos teoricos avanzados del estigma en comunidades latinas integran teoria de la interseccionalidad, modelos socio-ecologicos y la psicologia de la liberacion. Las intervenciones multinivel que abordan estigma publico, estructural e internalizado simultaneamente muestran mayor efectividad. La investigacion enfatiza la necesidad de desmantelar barreras sistemicas junto con intervenciones individuales. | Advanced theoretical frameworks of stigma in Latino communities integrate intersectionality theory, socio-ecological models, and liberation psychology. Multi-level interventions addressing public, structural, and internalized stigma simultaneously show greater effectiveness. Research emphasizes the need to dismantle systemic barriers alongside individual interventions.',
      explanation: `**Marcos teoricos avanzados | Advanced theoretical frameworks:**

*Interseccionalidad y estigma multiple | Intersectionality and multiple stigma:*
- Raza/etnicidad + estatus migratorio + salud mental = capas de estigma | Race/ethnicity + immigration status + mental health = layers of stigma
- Genero: Hombres latinos enfrentan estigma doble (machismo + estigma de salud mental) | Gender: Latino men face double stigma (machismo + mental health stigma)
- Orientacion sexual: LGBTQ+ latinos enfrentan triple estigma | Sexual orientation: LGBTQ+ Latinos face triple stigma
- Estatus socioeconomico amplifica todas las barreras | Socioeconomic status amplifies all barriers
- Documentacion migratoria agrega otra capa de miedo y evitacion | Immigration documentation adds another layer of fear and avoidance

*Modelo socio-ecologico del estigma | Socio-ecological model of stigma:*
- Nivel individual: Conocimiento, actitudes, auto-estigma | Individual level: Knowledge, attitudes, self-stigma
- Nivel interpersonal: Familia, amigos, redes sociales | Interpersonal level: Family, friends, social networks
- Nivel comunitario: Normas culturales, organizaciones religiosas, medios | Community level: Cultural norms, religious organizations, media
- Nivel estructural: Politicas de salud, cobertura de seguro, sistema migratorio | Structural level: Health policies, insurance coverage, immigration system
- Las intervenciones mas efectivas operan en multiples niveles | The most effective interventions operate at multiple levels

*Psicologia de la liberacion (Martin-Baro) | Liberation psychology (Martin-Baro):*
- Concientizacion: Proceso de toma de conciencia sobre las fuerzas sociales que mantienen el estigma | Concientizacion: Process of becoming aware of social forces maintaining stigma
- Desideologizacion: Cuestionar las narrativas dominantes que patologizan | De-ideologization: Questioning dominant narratives that pathologize
- Empoderamiento comunitario como herramienta anti-estigma | Community empowerment as anti-stigma tool

**Investigacion avanzada sobre intervenciones | Advanced intervention research:**

*Meta-analisis de intervenciones anti-estigma | Meta-analyses of anti-stigma interventions:*
- El contacto social es la estrategia mas efectiva para reducir estigma publico | Social contact is the most effective strategy for reducing public stigma
- La educacion es mas efectiva para prevenir el estigma | Education is more effective for preventing stigma
- La terapia de aceptacion y compromiso (ACT) es prometedora para auto-estigma | Acceptance and commitment therapy (ACT) is promising for self-stigma
- Las intervenciones culturalmente adaptadas son 2-4 veces mas efectivas que las genericas | Culturally adapted interventions are 2-4 times more effective than generic ones

*Modelos de implementacion | Implementation models:*
- Comunidades religiosas como plataforma (Fe y Salud Mental) | Religious communities as platform (Faith and Mental Health)
- Escuelas como punto de acceso para familias | Schools as access point for families
- Medios sociales en espanol para alcanzar a jovenes | Spanish-language social media to reach youth
- Integracion de salud mental en ferias de salud comunitarias | Mental health integration in community health fairs

*Evaluacion de programas | Program evaluation:*
- Escalas culturalmente validadas: Estigma Internalizado de Enfermedad Mental (ISMI) adaptada | Culturally validated scales: Internalized Stigma of Mental Illness (ISMI) adapted
- Attribution Questionnaire adaptado para latinos | Attribution Questionnaire adapted for Latinos
- Medidas de alfabetizacion en salud mental en espanol | Mental health literacy measures in Spanish
- Outcomes de busqueda de ayuda como medida proximal | Help-seeking outcomes as proximal measure

**Disparidades en acceso y calidad | Access and quality disparities:**

- 5.6% de terapeutas en EE.UU. son hispanos/latinos (vs 19% de poblacion) | 5.6% of therapists in the U.S. are Hispanic/Latino (vs 19% of population)
- Solo 1 de cada 20 latinos con depresion ve a un especialista de salud mental | Only 1 in 20 Latinos with depression sees a mental health specialist
- Latinos tienen 50% menos probabilidades de recibir tratamiento de salud mental adecuado | Latinos are 50% less likely to receive adequate mental health treatment
- La teleterapia ha mejorado el acceso pero persisten barreras digitales | Teletherapy has improved access but digital barriers persist

**Formacion de proveedores | Provider training:**

- Competencia cultural vs humildad cultural | Cultural competence vs cultural humility
- Capacitacion en sindromes culturales (nervios, susto, mal de ojo, empacho) | Training in cultural syndromes (nervios, susto, mal de ojo, empacho)
- Habilidades de comunicacion con interpretes | Communication skills with interpreters
- Reconocimiento de microagresiones en el entorno clinico | Recognition of microaggressions in the clinical setting`,
      keyTerms: [
        {
          term: 'interseccionalidad | intersectionality',
          definition:
            'Marco que analiza como multiples identidades sociales (raza, genero, clase, estatus migratorio) se superponen para crear experiencias unicas de discriminacion | Framework analyzing how multiple social identities (race, gender, class, immigration status) overlap to create unique experiences of discrimination',
        },
        {
          term: 'concientizacion | conscientization',
          definition:
            'Concepto de Paulo Freire y Martin-Baro sobre el proceso de toma de conciencia critica de las fuerzas sociales que mantienen la opresion | Concept from Paulo Freire and Martin-Baro about the process of critical awareness of social forces maintaining oppression',
        },
        {
          term: 'humildad cultural | cultural humility',
          definition:
            'Enfoque de aprendizaje continuo y autorreflexion sobre los propios sesgos culturales, preferido sobre "competencia cultural" | Approach of continuous learning and self-reflection about one own cultural biases, preferred over "cultural competence"',
        },
        {
          term: 'ISMI (Estigma Internalizado de Enfermedad Mental)',
          definition:
            'Escala validada que mide el grado en que las personas con enfermedad mental internalizan el estigma publico | Validated scale measuring the degree to which people with mental illness internalize public stigma',
        },
        {
          term: 'microagresion | microaggression',
          definition:
            'Insultos o desaires breves, comunes y cotidianos que comunican mensajes hostiles o despectivos hacia grupos marginados | Brief, common, everyday slights or insults that communicate hostile or derogatory messages toward marginalized groups',
        },
      ],
      clinicalNotes:
        'La investigacion muestra que los proveedores que practican humildad cultural (vs competencia cultural como destino final) tienen mejores resultados terapeuticos con pacientes latinos. Es critico evaluar el impacto del estigma internalizado en la adherencia al tratamiento. Los instrumentos de evaluacion deben ser validados culturalmente, no solo traducidos. La incorporacion de promotores de salud en equipos clinicos mejora significativamente la retencion en tratamiento. El abordaje de barreras estructurales (cobertura de seguro, acceso linguistico) es tan importante como las intervenciones individuales. | Research shows that providers practicing cultural humility (vs cultural competence as a final destination) have better therapeutic outcomes with Latino patients. It is critical to assess the impact of internalized stigma on treatment adherence. Assessment instruments must be culturally validated, not just translated. Incorporating promotores de salud in clinical teams significantly improves treatment retention. Addressing structural barriers (insurance coverage, language access) is as important as individual interventions.',
    },
    5: {
      level: 5,
      summary:
        'La ciencia contemporanea del estigma de salud mental en comunidades latinas integra marcos de determinantes sociales, neurociencia del estigma, y modelos de ciencia de implementacion para disenar intervenciones multinivel sostenibles. La investigacion participativa basada en la comunidad (CBPR) y los modelos de equidad en salud informan las practicas de vanguardia para eliminar disparidades. | Contemporary science of mental health stigma in Latino communities integrates social determinants frameworks, stigma neuroscience, and implementation science models to design sustainable multi-level interventions. Community-based participatory research (CBPR) and health equity models inform cutting-edge practices to eliminate disparities.',
      explanation: `**Neurociencia del estigma | Neuroscience of stigma:**

*Procesamiento neural del estigma | Neural processing of stigma:*
- La exclusion social activa las mismas regiones cerebrales que el dolor fisico (CCA dorsal, insula anterior) | Social exclusion activates the same brain regions as physical pain (dorsal ACC, anterior insula)
- El auto-estigma reduce la actividad del sistema de recompensa (estriado ventral) | Self-stigma reduces reward system activity (ventral striatum)
- El estigma cronico activa el eje HPA de manera sostenida | Chronic stigma activates the HPA axis in a sustained manner
- La amenaza del estereotipo reduce el rendimiento cognitivo (CPFdl) | Stereotype threat reduces cognitive performance (dlPFC)

*Epigenetica del estres por estigma | Epigenetics of stigma stress:*
- Metilacion de genes de respuesta al estres (NR3C1, FKBP5) | Methylation of stress response genes (NR3C1, FKBP5)
- Transmision intergeneracional de la respuesta al estres | Intergenerational transmission of stress response
- Implicaciones para la salud fisica y mental a largo plazo | Implications for long-term physical and mental health

**Ciencia de implementacion aplicada | Applied implementation science:**

*Marcos de implementacion | Implementation frameworks:*
- RE-AIM (Reach, Effectiveness, Adoption, Implementation, Maintenance) para programas anti-estigma | RE-AIM for anti-stigma programs
- CFIR (Consolidated Framework for Implementation Research) para intervenciones culturales | CFIR for cultural interventions
- Adaptacion cultural usando el modelo ADAPT-ITT o el Marco de Adaptacion Cultural de Bernal | Cultural adaptation using ADAPT-ITT or Bernal Cultural Adaptation Framework

*Investigacion participativa (CBPR) | Participatory research (CBPR):*
- Co-diseno de intervenciones con miembros de la comunidad | Co-design of interventions with community members
- Junta asesora comunitaria (Community Advisory Board) | Community Advisory Board
- Promotores de salud como co-investigadores | Promotores de salud as co-researchers
- Diseminacion de resultados a la comunidad | Dissemination of results to the community

**Politicas y sistemas | Policy and systems:**

*Politicas basadas en evidencia | Evidence-based policies:*
- Paridad en cobertura de salud mental (Mental Health Parity Act) | Mental health coverage parity (Mental Health Parity Act)
- Requisitos de acceso linguistico (Section 1557 ACA) | Language access requirements (Section 1557 ACA)
- Diversificacion de la fuerza laboral de salud mental | Diversification of the mental health workforce
- Proteccion de datos de salud mental para pacientes indocumentados | Mental health data protection for undocumented patients

*Modelos de atencion integrada | Integrated care models:*
- Behavioral Health Integration (BHI) en FQHCs | BHI in FQHCs (Federally Qualified Health Centers)
- Modelo IMPACT para depresion en atencion primaria | IMPACT model for depression in primary care
- Telebehavioral health con adaptaciones culturales | Telebehavioral health with cultural adaptations
- School-based mental health con componente familiar | School-based mental health with family component

**Investigacion de frontera | Frontier research:**

- Digital stigma reduction: Intervenciones basadas en realidad virtual para empatia | VR-based interventions for empathy
- Inteligencia artificial para deteccion temprana de necesidades de salud mental | AI for early detection of mental health needs
- Genomica social: Interaccion entre genetica y ambiente social | Social genomics: Interaction between genetics and social environment
- Modelos predictivos de busqueda de ayuda basados en datos comunitarios | Predictive models of help-seeking based on community data
- Intervenciones de salud mental adaptativas que se personalizan segun valores culturales | Adaptive mental health interventions personalized to cultural values

**Formacion profesional avanzada | Advanced professional training:**

- Supervision culturalmente informada | Culturally informed supervision
- Frameworks de anti-racismo en la practica clinica | Anti-racism frameworks in clinical practice
- Formacion en trauma historico y colectivo | Training in historical and collective trauma
- Brokers culturales en equipos de investigacion | Cultural brokers in research teams`,
      keyTerms: [
        {
          term: 'CBPR (Investigacion Participativa Basada en la Comunidad)',
          definition:
            'Enfoque de investigacion que involucra equitativamente a los miembros de la comunidad en todas las fases del proceso investigativo | Research approach that equitably involves community members in all phases of the research process',
        },
        {
          term: 'RE-AIM',
          definition:
            'Marco de evaluacion de salud publica: Alcance, Efectividad, Adopcion, Implementacion, Mantenimiento | Public health evaluation framework: Reach, Effectiveness, Adoption, Implementation, Maintenance',
        },
        {
          term: 'amenaza del estereotipo | stereotype threat',
          definition:
            'Fenomeno por el cual el riesgo de confirmar un estereotipo negativo sobre el propio grupo reduce el rendimiento | Phenomenon whereby the risk of confirming a negative stereotype about one own group reduces performance',
        },
        {
          term: 'ADAPT-ITT',
          definition:
            'Modelo sistematico de 8 pasos para adaptar intervenciones basadas en evidencia para nuevas poblaciones | Systematic 8-step model for adapting evidence-based interventions for new populations',
        },
        {
          term: 'paridad en salud mental | mental health parity',
          definition:
            'Requisito legal de que la cobertura de seguro para salud mental sea equivalente a la cobertura de salud fisica | Legal requirement that insurance coverage for mental health be equivalent to physical health coverage',
        },
      ],
      clinicalNotes:
        'Las mejores practicas actuales requieren un enfoque multinivel: intervenciones individuales (ACT para auto-estigma, psicoeducacion culturalmente adaptada), comunitarias (programas de contacto social, promotores de salud, colaboracion con lideres religiosos), y estructurales (politicas de paridad, diversificacion de la fuerza laboral, proteccion de datos para poblaciones indocumentadas). La investigacion muestra que las intervenciones anti-estigma genericas tienen menor efectividad en comunidades latinas; la adaptacion cultural es esencial. El CBPR no es solo un metodo de investigacion sino una herramienta de empoderamiento comunitario. Los proveedores deben reconocer que el estigma estructural (racismo institucional, xenofobia) tiene un impacto medible en la salud mental y que su abordaje requiere accion a nivel de politicas ademas de practicas clinicas individuales. | Current best practices require a multi-level approach: individual interventions (ACT for self-stigma, culturally adapted psychoeducation), community-level (social contact programs, promotores de salud, collaboration with religious leaders), and structural (parity policies, workforce diversification, data protection for undocumented populations). Research shows generic anti-stigma interventions have lower effectiveness in Latino communities; cultural adaptation is essential. CBPR is not just a research method but a community empowerment tool. Providers must recognize that structural stigma (institutional racism, xenophobia) has a measurable impact on mental health and that addressing it requires policy-level action in addition to individual clinical practices.',
    },
  },

  media: [],

  citations: [
    {
      id: 'corrigan-2012-stigma-model',
      type: 'journal',
      title: 'A Toolkit for Evaluating Programs Meant to Erase the Stigma of Mental Illness',
      authors: ['Corrigan, P.W.', 'Vega, E.', 'Larson, J.'],
      source: 'Illinois Institute of Technology',
    },
    {
      id: 'alegria-2008-disparities',
      type: 'journal',
      title: 'Prevalence of Mental Illness in Immigrant and Non-Immigrant U.S. Latino Groups',
      authors: ['Alegria, M.', 'Canino, G.', 'Shrout, P.E.'],
      source: 'American Journal of Psychiatry',
    },
    {
      id: 'samhsa-latino-mh',
      type: 'website',
      title: 'Behavioral Health Among Latinos',
      source: 'Substance Abuse and Mental Health Services Administration (SAMHSA)',
      url: 'https://www.samhsa.gov/behavioral-health-equity/latino',
      accessedDate: '2026-01-15',
    },
  ],

  crossReferences: [
    {
      targetId: 'mental-health-depresion-depression',
      targetType: 'condition',
      relationship: 'related',
      label: 'Depresion | Depression',
    },
    {
      targetId: 'mental-health-ansiedad-anxiety',
      targetType: 'condition',
      relationship: 'related',
      label: 'Trastornos de Ansiedad | Anxiety Disorders',
    },
    {
      targetId: 'mental-health-crisis-resources',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Recursos de Crisis | Crisis Resources',
    },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'cultural-competence', 'health-disparities', 'bilingual-content'],
    keywords: [
      'estigma',
      'stigma',
      'salud mental',
      'mental health',
      'comunidad latina',
      'Latino community',
      'machismo',
      'familismo',
      'marianismo',
      'barreras culturales',
      'cultural barriers',
      'desestigmatizacion',
      'destigmatization',
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

export default destigmatizingLatinoCommunitiesContent;
