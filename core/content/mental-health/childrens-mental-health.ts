/**
 * Children's Mental Health - Contenido Educativo Bilingue
 *
 * Mental health in Latino children and adolescents.
 * Impact of immigration, acculturation, and family dynamics.
 *
 * Spanish-first with English translations separated by " | "
 * Culturally sensitive content for Spanish-speaking populations.
 */

import { EducationalContent } from '../types';

export const childrensMentalHealthContent: EducationalContent = {
  id: 'topic-childrens-mental-health',
  type: 'topic',
  name: 'Children\'s Mental Health in Latino Communities',
  nameEs: 'Salud Mental de los Ninos',
  alternateNames: [
    'Salud Mental Infantil | Child Mental Health',
    'Salud Mental de Adolescentes | Adolescent Mental Health',
    'Ninos y Emociones | Children and Emotions',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Los ninos tambien pueden tener problemas de salud mental. A veces los muestran de forma diferente a los adultos -- con berrinches, problemas en la escuela, dolores de barriga o cambios de comportamiento. Como padres latinos, entender estas senales nos ayuda a ayudarlos a tiempo. | Children can also have mental health problems. Sometimes they show them differently than adults -- with tantrums, school problems, stomach aches, or behavior changes. As Latino parents, understanding these signs helps us help them in time.',
      explanation: `**Los ninos y la salud mental | Children and mental health:**

Los ninos no siempre pueden decir como se sienten con palabras. En lugar de decir "estoy triste" o "tengo miedo," muchas veces lo muestran con su comportamiento. | Children cannot always say how they feel with words. Instead of saying "I am sad" or "I am scared," they often show it with their behavior.

**Senales de que un nino puede necesitar ayuda | Signs a child may need help:**

- Cambios repentinos en el comportamiento | Sudden changes in behavior
- Berrinches o enojo fuera de lo normal | Tantrums or anger out of the ordinary
- No querer ir a la escuela | Not wanting to go to school
- Dolores de barriga o de cabeza frecuentes sin causa medica | Frequent stomachaches or headaches without medical cause
- Problemas para dormir o pesadillas | Trouble sleeping or nightmares
- Mojar la cama cuando ya no lo hacia | Bedwetting when they had stopped
- Bajas calificaciones repentinas | Sudden low grades
- Aislarse de amigos y familia | Withdrawing from friends and family
- Hablar de la muerte o hacerse dano | Talking about death or harming themselves
- Miedo excesivo | Excessive fear

**Situaciones que afectan a los ninos latinos | Situations affecting Latino children:**

- Separacion de padres o familiares por migracion | Separation from parents or relatives due to migration
- Ver a los padres estresados y preocupados | Seeing parents stressed and worried
- Experiencias de discriminacion o bullying | Experiences of discrimination or bullying
- No hablar bien el idioma en la escuela | Not speaking the language well at school
- Ser "el traductor" de la familia (parentificacion) | Being the family "translator" (parentification)
- Conflicto entre la cultura de casa y la cultura de la escuela | Conflict between home culture and school culture
- Mudanzas frecuentes | Frequent moves
- Pobreza y falta de recursos | Poverty and lack of resources

**Que pueden hacer los padres | What parents can do:**

- Hablar con sus hijos sobre sus sentimientos en su idioma | Talk to your children about their feelings in their language
- Escuchar sin juzgar | Listen without judging
- Mantener rutinas y estructura | Keep routines and structure
- Pasar tiempo de calidad juntos | Spend quality time together
- Hablar con el maestro o consejero de la escuela | Talk to the teacher or school counselor
- Buscar ayuda profesional si es necesario | Seek professional help if needed
- Mantener tradiciones culturales (les da sentido de identidad) | Keep cultural traditions (gives them sense of identity)

**Importante para padres | Important for parents:**
- No es su culpa si su hijo tiene problemas emocionales | It is not your fault if your child has emotional problems
- Buscar ayuda no significa que son malos padres | Seeking help does not mean you are bad parents
- Los ninos son fuertes, pero tambien necesitan apoyo | Children are strong, but they also need support

**RECURSOS | RESOURCES:**
- **988 Linea de Crisis**: Para jovenes tambien | For youth as well
- **Linea de Crisis por texto**: Envia "HOLA" al 741741
- **NAMI**: nami.org (informacion en espanol)`,
      keyTerms: [
        {
          term: 'salud mental infantil | child mental health',
          definition:
            'El bienestar emocional, social y psicologico de los ninos, que afecta como piensan, sienten y actuan | The emotional, social, and psychological well-being of children, affecting how they think, feel, and act',
        },
        {
          term: 'parentificacion | parentification',
          definition:
            'Cuando un nino asume roles de adulto, como ser el traductor de la familia, lo cual puede ser estresante | When a child assumes adult roles, like being the family translator, which can be stressful',
        },
        {
          term: 'bullying | acoso escolar',
          definition:
            'Cuando otros ninos molestan, intimidan o excluyen a un nino de forma repetida | When other children repeatedly bother, intimidate, or exclude a child',
        },
        {
          term: 'berrinche | tantrum',
          definition:
            'Explosion emocional en ninos que puede ser senal de frustracion normal o de un problema mas profundo | Emotional outburst in children that can be a sign of normal frustration or a deeper problem',
        },
      ],
      analogies: [
        'Los ninos son como esponjas -- absorben el estres y las emociones de su entorno, incluso cuando los padres tratan de protegerlos. | Children are like sponges -- they absorb the stress and emotions of their environment, even when parents try to protect them.',
        'El comportamiento de un nino es como la punta de un iceberg -- lo que vemos (berrinches, malas notas) es solo una parte; debajo hay emociones mas grandes. | A child behavior is like the tip of an iceberg -- what we see (tantrums, bad grades) is only a part; underneath there are bigger emotions.',
        'Mantener las tradiciones culturales es como dar raices a un arbol -- los ninos con raices fuertes en su cultura crecen mas seguros. | Keeping cultural traditions is like giving roots to a tree -- children with strong roots in their culture grow more secure.',
      ],
      examples: [
        'Pedrito de 7 anos empezo a mojar la cama y no quiere ir a la escuela desde que su papa fue deportado. No es que sea "malcriado" -- esta sufriendo por la separacion. | 7-year-old Pedrito started bedwetting and does not want to go to school since his dad was deported. He is not being "spoiled" -- he is suffering from the separation.',
        'Sofia de 13 anos es la traductora de su familia en todas las citas medicas y legales. Esta estresada, tiene dolores de cabeza, y sus calificaciones bajaron. Necesita que la liberen de esa responsabilidad de adulto. | 13-year-old Sofia is her family translator at all medical and legal appointments. She is stressed, has headaches, and her grades dropped. She needs to be freed from that adult responsibility.',
      ],
      patientCounselingPoints: [
        'Los cambios de comportamiento en su hijo pueden ser senales de que necesita ayuda emocional. | Behavior changes in your child can be signs they need emotional help.',
        'Hablar con sus hijos en espanol sobre emociones les da seguridad y confianza. | Talking to your children in Spanish about emotions gives them security and trust.',
        'Buscar ayuda para su hijo no es ser mal padre/madre -- es ser responsable. | Seeking help for your child is not being a bad parent -- it is being responsible.',
        'Las tradiciones y la cultura son una fuente de fortaleza para los ninos. | Traditions and culture are a source of strength for children.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Los ninos y adolescentes latinos enfrentan factores de riesgo unicos para la salud mental, incluyendo estres de aculturacion, parentificacion, separacion familiar migratoria, discriminacion y conflicto bicultural. Los trastornos mas comunes incluyen ansiedad, depresion, TDAH y TEPT. Las intervenciones basadas en evidencia que integran a la familia y respetan los valores culturales muestran mejores resultados. | Latino children and adolescents face unique mental health risk factors, including acculturation stress, parentification, migratory family separation, discrimination, and bicultural conflict. The most common disorders include anxiety, depression, ADHD, and PTSD. Evidence-based interventions integrating family and respecting cultural values show better outcomes.',
      explanation: `**Factores de riesgo especificos para ninos latinos | Specific risk factors for Latino children:**

*Estresores migratorios | Migratory stressors:*
- Separacion familiar (padres, hermanos, abuelos) | Family separation (parents, siblings, grandparents)
- Trauma del viaje migratorio (en ninos que migraron) | Migration journey trauma (in children who migrated)
- Miedo a la deportacion de padres | Fear of parental deportation
- Estatus migratorio incierto (DACAmentados, TPS) | Uncertain immigration status (DACAmented, TPS)
- Reunificacion dificil despues de separacion prolongada | Difficult reunification after prolonged separation

*Estresores de aculturacion | Acculturation stressors:*
- Conflicto bicultural: Expectativas de casa vs escuela | Bicultural conflict: Home vs school expectations
- Language brokering: Ninos como interpretes y mediadores | Language brokering: Children as interpreters and mediators
- Brecha de aculturacion: Ninos se adaptan mas rapido que padres | Acculturation gap: Children adapt faster than parents
- Perdida de conexion con la cultura de origen | Loss of connection with culture of origin
- Discriminacion y racismo en la escuela | Discrimination and racism at school

**Trastornos mas comunes | Most common disorders:**

*Ansiedad:*
- Ansiedad de separacion (especialmente si hubo separacion migratoria) | Separation anxiety (especially if there was migratory separation)
- Ansiedad social (barreras linguisticas, discriminacion) | Social anxiety (language barriers, discrimination)
- Trastorno de estres postraumatico | Post-traumatic stress disorder
- Fobias especificas | Specific phobias

*Depresion:*
- Prevalencia aumenta significativamente en adolescentes latinos | Prevalence increases significantly in Latino adolescents
- Latinas adolescentes: Mayor tasa de intentos de suicidio (CDC) | Adolescent Latinas: Highest rate of suicide attempts (CDC)
- Presentacion frecuente como irritabilidad en adolescentes | Frequent presentation as irritability in adolescents
- Somatizacion (dolores de barriga, cabeza) | Somatization (stomachaches, headaches)

*TDAH:*
- Subdiagnosticado en ninos latinos (barreras de acceso y linguisticas) | Underdiagnosed in Latino children (access and language barriers)
- Puede confundirse con estres de aculturacion | Can be confused with acculturation stress
- Necesita evaluacion culturalmente competente | Needs culturally competent evaluation

**Intervenciones basadas en evidencia | Evidence-based interventions:**

*Para ninos:*
- Terapia de juego culturalmente adaptada | Culturally adapted play therapy
- TCC infantil con componente familiar | Child CBT with family component
- Child-Parent Psychotherapy (CPP) para trauma | For trauma
- CBITS (Cognitive Behavioral Intervention for Trauma in Schools) | School-based intervention

*Para la familia:*
- Parent-Child Interaction Therapy (PCIT) adaptada | Adapted PCIT
- Triple P (Positive Parenting Program) en espanol | In Spanish
- Psicoeducacion familiar sobre salud mental | Family psychoeducation about mental health
- Grupos de padres en espanol | Parent groups in Spanish

*Intervencion escolar:*
- Programas de salud mental escolar bilingues | Bilingual school mental health programs
- Entrenamiento de maestros en salud mental infantil | Teacher training in child mental health
- Grupos de apoyo para ninos inmigrantes | Support groups for immigrant children`,
      keyTerms: [
        {
          term: 'language brokering',
          definition:
            'Practica en la que ninos bilingues sirven como interpretes y mediadores culturales para sus padres; puede causar estres y parentificacion | Practice where bilingual children serve as interpreters and cultural mediators for their parents; can cause stress and parentification',
        },
        {
          term: 'brecha de aculturacion | acculturation gap',
          definition:
            'Diferencia en el nivel de adaptacion cultural entre padres e hijos inmigrantes que puede causar conflicto familiar | Difference in cultural adaptation level between immigrant parents and children that can cause family conflict',
        },
        {
          term: 'CBITS',
          definition:
            'Intervencion Cognitivo-Conductual para Trauma en Escuelas -- programa grupal escolar basado en evidencia para ninos con sintomas de trauma | Cognitive Behavioral Intervention for Trauma in Schools -- evidence-based school group program for children with trauma symptoms',
        },
        {
          term: 'ansiedad de separacion | separation anxiety',
          definition:
            'Miedo excesivo a separarse de los cuidadores, especialmente comun en ninos que han experimentado separacion migratoria | Excessive fear of separating from caregivers, especially common in children who have experienced migratory separation',
        },
      ],
      analogies: [
        'La brecha de aculturacion es como dos personas caminando a diferente velocidad -- los ninos corren hacia la nueva cultura mientras los padres caminan, y se van separando. | The acculturation gap is like two people walking at different speeds -- children run toward the new culture while parents walk, and they drift apart.',
        'Un nino que actua como traductor familiar es como un puente entre dos mundos -- es una responsabilidad enorme para alguien tan joven. | A child acting as family translator is like a bridge between two worlds -- it is an enormous responsibility for someone so young.',
      ],
      examples: [
        'Una adolescente latina tiene intentos de suicidio repetidos. La evaluacion revela conflicto severo entre las expectativas culturales de su familia (conservadoras) y las de sus amigos (liberales). La terapia familiar bicultural ayuda a encontrar un equilibrio. | A Latina adolescent has repeated suicide attempts. Assessment reveals severe conflict between her family cultural expectations (conservative) and her friends (liberal). Bicultural family therapy helps find a balance.',
        'Un nino de 9 anos que llego de Guatemala hace 6 meses tiene pesadillas y no puede concentrarse en la escuela. CBITS en su escuela le ayuda a procesar su trauma migratorio en un grupo con otros ninos con experiencias similares. | A 9-year-old who arrived from Guatemala 6 months ago has nightmares and cannot concentrate at school. CBITS at his school helps him process his migratory trauma in a group with other children with similar experiences.',
      ],
      patientCounselingPoints: [
        'Los ninos expresan su malestar emocional con comportamiento, no siempre con palabras. | Children express emotional distress through behavior, not always with words.',
        'La separacion familiar por migracion tiene un impacto medible en la salud mental de los ninos. | Family separation due to migration has a measurable impact on children mental health.',
        'Las adolescentes latinas tienen el mayor riesgo de intentos de suicidio -- preste atencion a las senales. | Latina adolescents have the highest risk of suicide attempts -- pay attention to the signs.',
        'Hay programas de ayuda en las escuelas que pueden ayudar a su hijo sin costo. | There are programs at schools that can help your child at no cost.',
      ],
    },
    3: {
      level: 3,
      summary:
        'La salud mental infantil en contextos latinos involucra la interseccion de desarrollo neurobiologico, estres de aculturacion, trauma migratorio y dinamicas familiares culturalmente especificas. La neurociencia del desarrollo muestra que el estres cronico en la infancia altera la arquitectura cerebral. Las intervenciones basadas en evidencia requieren adaptacion cultural sistematica y enfoque familiar para ser efectivas en esta poblacion. | Child mental health in Latino contexts involves the intersection of neurobiological development, acculturation stress, migratory trauma, and culturally specific family dynamics. Developmental neuroscience shows that chronic childhood stress alters brain architecture. Evidence-based interventions require systematic cultural adaptation and family focus to be effective in this population.',
      explanation: `**Neurociencia del desarrollo bajo estres cronico | Developmental neuroscience under chronic stress:**

*Estres toxico en la infancia | Toxic stress in childhood:*
- Definicion: Activacion prolongada del sistema de estres sin amortiguacion relacional | Definition: Prolonged stress system activation without relational buffering
- Efecto en la arquitectura cerebral: Poda sinaptica excesiva en CPF, hipertrofia amigdalar | Effect on brain architecture: Excessive synaptic pruning in PFC, amygdala hypertrophy
- Impacto en funcion ejecutiva, regulacion emocional y aprendizaje | Impact on executive function, emotional regulation, and learning
- ACEs en ninos latinos: Separacion migratoria, violencia comunitaria, pobreza | ACEs in Latino children: Migratory separation, community violence, poverty
- El cuidado parental sensible amortigua los efectos del estres | Sensitive parental care buffers stress effects

*Periodos sensibles del desarrollo | Sensitive developmental periods:*
- 0-3 anos: Formacion del apego; separacion migratoria tiene maximo impacto | 0-3 years: Attachment formation; migratory separation has maximum impact
- 6-12 anos: Desarrollo de habilidades sociales; impacto de discriminacion y bullying | 6-12 years: Social skills development; impact of discrimination and bullying
- Adolescencia: Formacion de identidad; conflicto bicultural y presion social | Adolescence: Identity formation; bicultural conflict and social pressure

**Evaluacion clinica | Clinical assessment:**

*Instrumentos culturalmente validados | Culturally validated instruments:*
- CBCL (Child Behavior Checklist) version espanola | Spanish version
- Strengths and Difficulties Questionnaire en espanol | In Spanish
- UCLA PTSD Reaction Index en espanol | In Spanish
- PHQ-A (adolescentes) en espanol | PHQ-A (adolescents) in Spanish
- Cultural Formulation Interview adaptada para ninos | Cultural Formulation Interview adapted for children

*Evaluacion del contexto | Context assessment:*
- Historia migratoria completa (del nino y la familia) | Complete migratory history (child and family)
- Evaluacion de estresores de aculturacion | Acculturation stressor assessment
- Evaluacion de parentificacion y roles familiares | Parentification and family role assessment
- Discriminacion y bullying | Discrimination and bullying
- Red de apoyo familiar y comunitario | Family and community support network

**Intervenciones basadas en evidencia -- detalle | Evidence-based interventions -- detail:**

*CBITS adaptado culturalmente | Culturally adapted CBITS:*
- 10 sesiones grupales en la escuela | 10 group sessions at school
- Psicoeducacion sobre trauma | Trauma psychoeducation
- Relajacion y habilidades de afrontamiento | Relaxation and coping skills
- Procesamiento cognitivo del trauma | Cognitive trauma processing
- Exposicion gradual | Gradual exposure
- Sesiones individuales complementarias | Complementary individual sessions
- Adaptacion: Inclusion of migratory trauma, bilingual delivery | Inclusion of migratory trauma, bilingual delivery

*CPP (Child-Parent Psychotherapy) | Child-Parent Psychotherapy:*
- Para ninos 0-5 anos con trauma | For children 0-5 years with trauma
- Fortalece la relacion nino-cuidador | Strengthens child-caregiver relationship
- Adaptada para familias latinas (familismo, respeto) | Adapted for Latino families (familismo, respeto)
- Fuerte base de evidencia en poblaciones diversas | Strong evidence base in diverse populations

*Prevencion selectiva | Selective prevention:*
- Programas escolares de competencia socio-emocional | School social-emotional competence programs
- Programas de crianza positiva en espanol | Positive parenting programs in Spanish
- Mentoria para ninos inmigrantes | Mentoring for immigrant children`,
      keyTerms: [
        {
          term: 'estres toxico | toxic stress',
          definition:
            'Activacion prolongada y excesiva del sistema de respuesta al estres en la infancia, sin amortiguacion relacional adecuada, que altera la arquitectura cerebral | Prolonged, excessive activation of the stress response system in childhood, without adequate relational buffering, which alters brain architecture',
        },
        {
          term: 'poda sinaptica | synaptic pruning',
          definition:
            'Proceso de eliminacion de sinapsis durante el desarrollo; excesiva bajo estres cronico, afectando la CPF | Process of synapse elimination during development; excessive under chronic stress, affecting the PFC',
        },
        {
          term: 'CPP (Child-Parent Psychotherapy)',
          definition:
            'Terapia basada en el apego para ninos 0-5 anos expuestos a trauma, que fortalece la relacion nino-cuidador | Attachment-based therapy for children 0-5 exposed to trauma, strengthening the child-caregiver relationship',
        },
        {
          term: 'formacion de identidad | identity formation',
          definition:
            'Proceso adolescente de desarrollar un sentido de quien eres; complicado por el conflicto bicultural en jovenes latinos | Adolescent process of developing a sense of who you are; complicated by bicultural conflict in Latino youth',
        },
      ],
      clinicalNotes:
        'La separacion migratoria en ninos menores de 3 anos tiene el mayor impacto en el desarrollo del apego y la arquitectura cerebral. La evaluacion debe incluir siempre la historia migratoria completa del nino y la familia. Las latinas adolescentes tienen la tasa mas alta de intentos de suicidio en EE.UU. (CDC) y deben ser evaluadas de forma rutinaria. El language brokering y la parentificacion deben evaluarse como factores de riesgo. Las intervenciones escolares (CBITS) son especialmente importantes porque la escuela es el punto de contacto mas accesible para familias inmigrantes. Las intervenciones familiares que respetan la estructura familiar latina (jerarquia, respeto, familismo) son mas efectivas que las que imponen modelos familiares occidentales igualitarios. | Migratory separation in children under 3 years has the greatest impact on attachment development and brain architecture. Assessment should always include complete migratory history of child and family. Adolescent Latinas have the highest rate of suicide attempts in the U.S. (CDC) and should be routinely screened. Language brokering and parentification should be assessed as risk factors. School interventions (CBITS) are especially important because school is the most accessible contact point for immigrant families. Family interventions respecting Latino family structure (hierarchy, respeto, familismo) are more effective than those imposing Western egalitarian family models.',
    },
    4: {
      level: 4,
      summary:
        'Los marcos avanzados de salud mental infantil en poblaciones latinas integran neurociencia del desarrollo, epigenetica del estres temprano, teoria del apego transcultural, y modelos ecologicos de riesgo y proteccion. La investigacion muestra que las intervenciones que fortalecen el sistema de cuidado relacional (la relacion nino-cuidador) pueden revertir los efectos del estres toxico en la arquitectura cerebral. La precision clinica requiere evaluacion multinivel y planificacion de tratamiento culturalmente adaptada. | Advanced frameworks of child mental health in Latino populations integrate developmental neuroscience, early stress epigenetics, cross-cultural attachment theory, and ecological models of risk and protection. Research shows interventions strengthening the relational caregiving system (child-caregiver relationship) can reverse toxic stress effects on brain architecture. Clinical precision requires multi-level assessment and culturally adapted treatment planning.',
      explanation: `**Neurociencia del desarrollo avanzada | Advanced developmental neuroscience:**

*Impacto del estres cronico en el cerebro en desarrollo | Impact of chronic stress on the developing brain:*
- CPF: Poda sinaptica excesiva, mielinizacion retrasada -> deficit en funcion ejecutiva | PFC: Excessive synaptic pruning, delayed myelination -> executive function deficit
- Amigdala: Hipertrofia dendritica, mayor reactividad al estres | Amygdala: Dendritic hypertrophy, greater stress reactivity
- Hipocampo: Reduccion de volumen, deficit de memoria contextual | Hippocampus: Volume reduction, contextual memory deficit
- Cuerpo calloso: Reduccion de volumen (comunicacion interhemisferica) | Corpus callosum: Volume reduction (interhemispheric communication)
- El cuidado parental sensible restaura la trayectoria de desarrollo | Sensitive parental care restores developmental trajectory

*Epigenetica del estres temprano | Early stress epigenetics:*
- Separacion materna: Metilacion de NR3C1 (receptor de glucocorticoides) | Maternal separation: NR3C1 methylation (glucocorticoid receptor)
- Maltrato infantil: Metilacion de BDNF, FKBP5, SLC6A4 | Child maltreatment: BDNF, FKBP5, SLC6A4 methylation
- Estos cambios son potencialmente reversibles con intervencion temprana | These changes are potentially reversible with early intervention
- La intervencion relacional (CPP, PCIT) puede modificar marcas epigeneticas | Relational intervention (CPP, PCIT) can modify epigenetic marks

**Modelo ecologico de riesgo y proteccion | Ecological model of risk and protection:**

*Factores de riesgo multinivel | Multi-level risk factors:*
- Individual: ACEs, temperamento, vulnerabilidad genetica | Individual: ACEs, temperament, genetic vulnerability
- Familiar: Separacion, conflicto, parentificacion, depresion parental | Family: Separation, conflict, parentification, parental depression
- Escolar: Discriminacion, barreras linguisticas, falta de recursos | School: Discrimination, language barriers, lack of resources
- Comunitario: Pobreza, violencia, falta de servicios en espanol | Community: Poverty, violence, lack of Spanish-language services
- Estructural: Politicas migratorias, racismo institucional | Structural: Immigration policies, institutional racism

*Factores protectores | Protective factors:*
- Familismo: Red familiar fuerte como amortiguador | Familismo: Strong family network as buffer
- Orgullo cultural: Identidad etnica positiva | Cultural pride: Positive ethnic identity
- Biculturalismo saludable: Integracion de ambas culturas | Healthy biculturalism: Integration of both cultures
- Fe y espiritualidad | Faith and spirituality
- Comunidad cohesiva | Cohesive community
- Relacion de apego seguro con al menos un cuidador | Secure attachment relationship with at least one caregiver

**Intervenciones avanzadas | Advanced interventions:**

*Modelo de fases para trauma infantil | Phased model for child trauma:*
- Fase 1: Seguridad y estabilizacion (regulacion, rutinas, relacion) | Phase 1: Safety and stabilization (regulation, routines, relationship)
- Fase 2: Procesamiento del trauma (narrativa, exposicion, CPT adaptada) | Phase 2: Trauma processing (narrative, exposure, adapted CPT)
- Fase 3: Consolidacion y prevencion de recaida | Phase 3: Consolidation and relapse prevention
- Adaptacion cultural: Ritmo familiar, lenguaje accesible, inclusion de cuidadores | Cultural adaptation: Family pace, accessible language, caregiver inclusion

*Intervencion temprana relacional | Early relational intervention:*
- CPP para menores de 5 anos | CPP for under 5 years
- ABC (Attachment and Biobehavioral Catch-up): Intervencion breve para cuidadores | Brief caregiver intervention
- Video-feedback para fortalecer sensibilidad parental | Video-feedback to strengthen parental sensitivity
- Visitas domiciliarias por promotores de salud capacitados | Home visits by trained promotores de salud`,
      keyTerms: [
        {
          term: 'estres toxico vs tolerable vs positivo | toxic vs tolerable vs positive stress',
          definition:
            'Espectro de respuestas al estres: positivo (normal, breve), tolerable (severo pero amortiguado por relacion), toxico (severo, prolongado, sin amortiguacion) | Stress response spectrum: positive (normal, brief), tolerable (severe but buffered by relationship), toxic (severe, prolonged, without buffering)',
        },
        {
          term: 'ABC (Attachment and Biobehavioral Catch-up)',
          definition:
            'Intervencion breve basada en el apego que entrena a cuidadores para responder sensiblemente a las senales del nino | Brief attachment-based intervention training caregivers to respond sensitively to child signals',
        },
        {
          term: 'biculturalismo saludable | healthy biculturalism',
          definition:
            'Integracion exitosa de ambas culturas (origen y destino) asociada con mejores resultados de salud mental en ninos y adolescentes | Successful integration of both cultures (origin and destination) associated with better mental health outcomes in children and adolescents',
        },
        {
          term: 'identidad etnica positiva | positive ethnic identity',
          definition:
            'Sentido de orgullo y pertenencia a la propia cultura etnica, que es un factor protector significativo para la salud mental infantil | Sense of pride and belonging in one own ethnic culture, a significant protective factor for child mental health',
        },
      ],
      clinicalNotes:
        'La neurociencia del desarrollo muestra que el estres toxico en ninos menores de 5 anos tiene efectos estructurales medibles en el cerebro. La intervencion relacional (CPP, ABC) puede revertir estos efectos al fortalecer la relacion de apego nino-cuidador. En ninos latinos, los factores protectores culturales (familismo, orgullo etnico, biculturalismo) deben fortalecerse activamente como parte del tratamiento. Las latinas adolescentes tienen la tasa mas alta de intentos de suicidio y deben evaluarse de forma rutinaria. La parentificacion (language brokering excesivo) es un factor de riesgo especifico que debe abordarse clinicamente. Las intervenciones escolares son cruciales porque muchas familias inmigrantes no acceden a servicios de salud mental especializados. La salud mental parental (especialmente depresion materna) debe evaluarse siempre como parte de la evaluacion del nino. | Developmental neuroscience shows toxic stress in children under 5 has measurable structural effects on the brain. Relational intervention (CPP, ABC) can reverse these effects by strengthening the child-caregiver attachment relationship. In Latino children, cultural protective factors (familismo, ethnic pride, biculturalism) should be actively strengthened as part of treatment. Adolescent Latinas have the highest suicide attempt rate and must be routinely evaluated. Parentification (excessive language brokering) is a specific risk factor that must be addressed clinically. School interventions are crucial because many immigrant families do not access specialized mental health services. Parental mental health (especially maternal depression) should always be assessed as part of child evaluation.',
    },
    5: {
      level: 5,
      summary:
        'La investigacion de frontera en salud mental infantil en poblaciones latinas integra neurociencia del desarrollo de precision, epigenetica de la adversidad temprana, modelos computacionales del desarrollo del apego, y ciencia de implementacion para intervenciones escolares y comunitarias. Los biomarcadores del estres infantil, las intervenciones preventivas basadas en neurociencia, y las politicas publicas que protegen a los ninos de la adversidad migratoria son direcciones criticas de investigacion y practica. | Frontier research in child mental health in Latino populations integrates precision developmental neuroscience, early adversity epigenetics, computational models of attachment development, and implementation science for school and community interventions. Child stress biomarkers, neuroscience-based preventive interventions, and public policies protecting children from migratory adversity are critical research and practice directions.',
      explanation: `**Neurociencia del desarrollo de precision | Precision developmental neuroscience:**

*Biomarcadores del estres infantil | Child stress biomarkers:*
- Cortisol capilar: Medida de cortisol cronico (meses) | Hair cortisol: Chronic cortisol measure (months)
- Longitud telomerica: Indicador de envejecimiento biologico acelerado | Telomere length: Accelerated biological aging indicator
- Metilacion de NR3C1 en celulas bucales: No invasivo, informativo | NR3C1 methylation in buccal cells: Non-invasive, informative
- Citoquinas proinflamatorias: Inflamacion cronica | Pro-inflammatory cytokines: Chronic inflammation
- Potencial para deteccion temprana y monitoreo de intervencion | Potential for early detection and intervention monitoring

*Neuroimagen del desarrollo bajo estres | Developmental neuroimaging under stress:*
- Mielinizacion de CPF retrasada en ninos con estres toxico | Delayed PFC myelination in children with toxic stress
- Conectividad amigdala-CPF alterada: Base de desregulacion emocional | Altered amygdala-PFC connectivity: Basis of emotional dysregulation
- Volumen hipocampal reducido: Correlaciona con deficit de memoria | Reduced hippocampal volume: Correlates with memory deficit
- Los cambios son parcialmente reversibles con intervencion temprana | Changes are partially reversible with early intervention

**Modelos computacionales | Computational models:**

*Modelo computacional del desarrollo del apego | Computational model of attachment development:*
- El nino desarrolla "modelos internos de trabajo" basados en experiencias de cuidado | Child develops "internal working models" based on caregiving experiences
- La separacion migratoria crea un "error de prediccion" masivo en el modelo | Migratory separation creates a massive "prediction error" in the model
- La reunificacion puede ser dificil porque los modelos internos se recalibraron | Reunification can be difficult because internal models recalibrated
- Implicaciones para terapia de reunificacion familiar | Implications for family reunification therapy

**Intervenciones de frontera | Frontier interventions:**

- Video-feedback en el hogar por promotores capacitados | Home video-feedback by trained promotores
- Realidad virtual para exposicion en ninos con TEPT | VR for exposure in children with PTSD
- Apps de crianza positiva en espanol basadas en neurociencia | Neuroscience-based positive parenting apps in Spanish
- Intervencion escolar universal para resiliencia | Universal school resilience intervention
- Programas de mentoria cultural para adolescentes | Cultural mentoring programs for adolescents
- Telebehavioral health para familias rurales | Telebehavioral health for rural families

**Politica publica basada en evidencia | Evidence-based public policy:**

- Proteccion de ninos contra separacion migratoria forzada | Protection of children against forced migratory separation
- Financiamiento de servicios de salud mental escolar bilingues | Funding for bilingual school mental health services
- Formacion de una fuerza laboral de salud mental bilingue | Training a bilingual mental health workforce
- Inclusion de salud mental infantil en programas de Head Start | Inclusion of child mental health in Head Start programs
- Investigacion financiada con cohortes longitudinales de ninos latinos | Funded research with longitudinal cohorts of Latino children`,
      keyTerms: [
        {
          term: 'cortisol capilar | hair cortisol',
          definition:
            'Biomarcador no invasivo que mide la exposicion a cortisol durante meses, util para evaluar estres cronico en ninos | Non-invasive biomarker measuring cortisol exposure over months, useful for evaluating chronic stress in children',
        },
        {
          term: 'conectividad amigdala-CPF | amygdala-PFC connectivity',
          definition:
            'Conexion funcional entre el centro del miedo (amigdala) y el centro de regulacion (CPF); inmadura en ninos y alterada por estres toxico | Functional connection between the fear center (amygdala) and regulation center (PFC); immature in children and altered by toxic stress',
        },
        {
          term: 'modelo interno de trabajo | internal working model',
          definition:
            'Representacion mental de las relaciones de apego formada en la infancia que guia las expectativas de relaciones futuras | Mental representation of attachment relationships formed in childhood guiding future relationship expectations',
        },
        {
          term: 'intervencion relacional | relational intervention',
          definition:
            'Tratamiento que opera a traves del fortalecimiento de la relacion nino-cuidador, con potencial de revertir efectos neurobiologicos del estres toxico | Treatment operating through strengthening the child-caregiver relationship, with potential to reverse neurobiological effects of toxic stress',
        },
      ],
      clinicalNotes:
        'La practica de frontera requiere: (1) Comprension de que el cerebro infantil es exquisitamente sensible al entorno relacional y que las intervenciones relacionales pueden revertir efectos neurobiologicos del estres; (2) Biomarcadores de estres infantil (cortisol capilar, longitud telomerica) son herramientas emergentes para deteccion temprana y monitoreo de intervencion; (3) La separacion forzada de ninos en la frontera tiene consecuencias neurobiologicas y epigeneticas documentadas que constituyen evidencia para politicas de no separacion; (4) Las intervenciones escolares bilingues son el punto de acceso mas critico para ninos latinos y deben ser financiadas como prioridad de salud publica; (5) Los modelos computacionales del apego explican por que la reunificacion familiar puede ser dificil y guian la terapia de reunificacion. La investigacion futura debe incluir cohortes longitudinales de ninos latinos con neuroimagen y biomarcadores para entender trayectorias de desarrollo bajo estres y respuesta a intervencion. | Frontier practice requires: (1) Understanding that the child brain is exquisitely sensitive to the relational environment and relational interventions can reverse neurobiological stress effects; (2) Child stress biomarkers (hair cortisol, telomere length) are emerging tools for early detection and intervention monitoring; (3) Forced separation of children at the border has documented neurobiological and epigenetic consequences constituting evidence for non-separation policies; (4) Bilingual school interventions are the most critical access point for Latino children and should be funded as a public health priority; (5) Computational attachment models explain why family reunification can be difficult and guide reunification therapy. Future research should include longitudinal cohorts of Latino children with neuroimaging and biomarkers to understand developmental trajectories under stress and intervention response.',
    },
  },

  media: [],

  citations: [
    {
      id: 'shonkoff-2012-toxic-stress',
      type: 'journal',
      title: 'The Lifelong Effects of Early Childhood Adversity and Toxic Stress',
      authors: ['Shonkoff, J.P.', 'Garner, A.S.'],
      source: 'Pediatrics',
    },
    {
      id: 'cdc-2023-youth-risk',
      type: 'website',
      title: 'Youth Risk Behavior Survey (YRBS)',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/yrbs/',
      accessedDate: '2026-01-15',
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
      targetId: 'topic-grief-loss-immigration',
      targetType: 'topic',
      relationship: 'related',
      label: 'Duelo y Migracion | Grief and Immigration',
    },
    {
      targetId: 'topic-suicide-crisis-resources',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Recursos de Crisis y Suicidio | Suicide and Crisis Resources',
    },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'child-mental-health', 'adolescent-health', 'bilingual-content'],
    keywords: [
      'salud mental infantil',
      'child mental health',
      'adolescentes',
      'adolescents',
      'ninos latinos',
      'Latino children',
      'parentificacion',
      'parentification',
      'aculturacion',
      'estres toxico',
      'toxic stress',
      'salud mental',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'pediatrics'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default childrensMentalHealthContent;
