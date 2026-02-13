/**
 * Depression in Cultural Context - Contenido Educativo Bilingue
 *
 * How depression manifests and is understood in Latino communities.
 * Cultural idioms of distress, somatization, and culturally adapted treatment.
 *
 * Spanish-first with English translations separated by " | "
 * Culturally sensitive content for Spanish-speaking populations.
 */

import { EducationalContent } from '../types';

export const depressionCulturalContextContent: EducationalContent = {
  id: 'topic-depression-cultural-context',
  type: 'topic',
  name: 'Depression in Cultural Context',
  nameEs: 'Depresion en Contexto Cultural',
  alternateNames: [
    'Depresion y Cultura Latina | Depression and Latino Culture',
    'Tristeza Cronica | Chronic Sadness',
    'Nervios y Depresion | Nervios and Depression',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'La depresion es una enfermedad real que afecta a muchas personas en nuestra comunidad latina. A veces la sentimos como dolores en el cuerpo, cansancio extremo o "nervios." No es falta de fe ni de ganas -- es una condicion medica con tratamiento. | Depression is a real illness that affects many people in our Latino community. Sometimes we feel it as body aches, extreme tiredness, or "nervios." It is not a lack of faith or willpower -- it is a medical condition with treatment.',
      explanation: `**Como se siente la depresion en nuestra comunidad? | How does depression feel in our community?**

En nuestra cultura, la depresion a veces no se ve como tristeza. Muchas personas la sienten como: | In our culture, depression sometimes does not look like sadness. Many people feel it as:

- Dolores de cabeza que no se quitan | Headaches that will not go away
- Dolor de espalda o de cuerpo constante | Constant back or body pain
- Cansancio extremo, como si cargaras una bolsa de cemento | Extreme tiredness, as if carrying a bag of cement
- Problemas del estomago | Stomach problems
- "Nervios" -- sentirse nervioso/a todo el tiempo | "Nervios" -- feeling nervous all the time
- No poder dormir o dormir demasiado | Not being able to sleep or sleeping too much
- No tener ganas de comer o comer demasiado | Not wanting to eat or eating too much
- Enojo o irritabilidad (especialmente en hombres) | Anger or irritability (especially in men)
- Sentirse solo/a aunque estes rodeado/a de familia | Feeling alone even when surrounded by family

**Frases que escuchamos pero que pueden esconder depresion | Phrases we hear that may hide depression:**

- "Es que estoy cansado/a nada mas" | "I am just tired"
- "Son los nervios" | "It is just nerves"
- "Es que tengo mucho estres" | "I just have a lot of stress"
- "No es nada, ya se me va a pasar" | "It is nothing, it will pass"
- "Los hombres no lloran" | "Men do not cry"

**Que causa la depresion en nuestra comunidad? | What causes depression in our community?**

- La separacion de la familia por la migracion | Separation from family due to migration
- La soledad de estar en un pais nuevo | The loneliness of being in a new country
- El estres de trabajar mucho y ganar poco | The stress of working a lot and earning little
- La discriminacion y el racismo | Discrimination and racism
- Extranar la tierra, la comida, las costumbres | Missing the homeland, food, customs
- Problemas con documentos migratorios | Immigration document problems
- Barreras del idioma | Language barriers

**La depresion tiene tratamiento | Depression has treatment:**

- Hablar con un profesional que entienda tu cultura | Talk to a professional who understands your culture
- Medicamentos que ayudan a tu cerebro a funcionar mejor | Medications that help your brain work better
- Grupos de apoyo en espanol | Support groups in Spanish
- Ejercicio, como caminar 30 minutos al dia | Exercise, like walking 30 minutes a day
- Mantenerse conectado con la comunidad y la familia | Staying connected with community and family

**RECURSOS | RESOURCES:**
- **988 Linea de Crisis**: Llama o envia texto al 988 (espanol disponible) | Call or text 988 (Spanish available)
- **SAMHSA**: 1-800-662-4357 (espanol disponible)`,
      keyTerms: [
        {
          term: 'depresion | depression',
          definition:
            'Una enfermedad del cerebro que causa tristeza profunda, cansancio y dolor, y que necesita tratamiento profesional | A brain illness that causes deep sadness, tiredness, and pain, and that needs professional treatment',
        },
        {
          term: 'nervios',
          definition:
            'Palabra que usamos en nuestra comunidad para describir ansiedad, estres o malestar emocional que a veces es depresion | Word we use in our community to describe anxiety, stress, or emotional distress that is sometimes depression',
        },
        {
          term: 'somatizacion | somatization',
          definition:
            'Cuando los problemas emocionales se sienten como dolores fisicos en el cuerpo | When emotional problems are felt as physical pains in the body',
        },
        {
          term: 'tratamiento | treatment',
          definition:
            'Las diferentes formas de ayudar a una persona con depresion, como terapia y medicamentos | The different ways to help a person with depression, like therapy and medications',
        },
      ],
      analogies: [
        'La depresion es como una nube gris que te sigue a todas partes y no te deja ver el sol, pero con ayuda puedes hacer que esa nube se vaya. | Depression is like a gray cloud that follows you everywhere and does not let you see the sun, but with help you can make that cloud go away.',
        'Decirle a alguien con depresion que "le eche ganas" es como decirle a alguien con la pierna rota que camine -- no puede sin ayuda medica. | Telling someone with depression to "try harder" is like telling someone with a broken leg to walk -- they cannot without medical help.',
        'La depresion que se siente en el cuerpo es como una alarma de fuego -- el dolor no esta donde parece. El cuerpo esta avisando que la mente necesita ayuda. | Depression felt in the body is like a fire alarm -- the pain is not where it seems. The body is signaling that the mind needs help.',
      ],
      examples: [
        'Dona Rosa ha tenido dolores de cabeza por meses. El doctor no encuentra nada malo. Cuando finalmente habla con un profesional de salud mental, descubre que tiene depresion. Con tratamiento, los dolores disminuyen. | Dona Rosa has had headaches for months. The doctor cannot find anything wrong. When she finally talks to a mental health professional, she discovers she has depression. With treatment, the headaches decrease.',
        'Juan trabaja dos empleos y se siente enojado todo el tiempo. Su esposa le dice que vaya al doctor. Descubren que el enojo es depresion. "No sabia que la depresion se podia sentir como enojo," dice Juan. | Juan works two jobs and feels angry all the time. His wife tells him to go to the doctor. They discover the anger is depression. "I did not know depression could feel like anger," Juan says.',
      ],
      patientCounselingPoints: [
        'Si siente dolores que el doctor no puede explicar, puede ser depresion. | If you have pains that the doctor cannot explain, it may be depression.',
        'Los "nervios" y el cansancio constante merecen atencion medica. | "Nervios" and constant tiredness deserve medical attention.',
        'El tratamiento para la depresion funciona y hay opciones en espanol. | Treatment for depression works and there are options in Spanish.',
        'Buscar ayuda es lo mas fuerte que puede hacer por usted y su familia. | Seeking help is the strongest thing you can do for yourself and your family.',
      ],
    },
    2: {
      level: 2,
      summary:
        'La depresion en comunidades latinas se manifiesta frecuentemente con sintomas somaticos y se describe con terminos culturales como "nervios" o "ataque de nervios." Factores como el estres migratorio, la aculturacion, la discriminacion y las barreras de acceso contribuyen a mayores tasas de depresion no diagnosticada. El tratamiento culturalmente adaptado mejora significativamente los resultados. | Depression in Latino communities frequently manifests with somatic symptoms and is described with cultural terms like "nervios" or "ataque de nervios." Factors such as migratory stress, acculturation, discrimination, and access barriers contribute to higher rates of undiagnosed depression. Culturally adapted treatment significantly improves outcomes.',
      explanation: `**Presentacion cultural de la depresion | Cultural presentation of depression:**

**Sindromes culturales asociados | Associated cultural syndromes:**

*Nervios:*
- Termino amplio que abarca ansiedad, depresion y malestar somatico | Broad term encompassing anxiety, depression, and somatic distress
- Sintomas: Cefaleas, mareos, palpitaciones, malestar gastrointestinal, inquietud | Symptoms: Headaches, dizziness, palpitations, GI distress, restlessness
- Reconocido en el DSM-5-TR como sindrome cultural | Recognized in DSM-5-TR as a cultural syndrome
- Puede ser una puerta de entrada para discutir depresion | Can be a gateway to discuss depression

*Ataque de nervios:*
- Episodio agudo de malestar emocional intenso | Acute episode of intense emotional distress
- Gritos, llanto incontrolable, temblores, calor | Screaming, uncontrollable crying, trembling, heat
- Frecuentemente precipitado por un evento estresante familiar | Frequently precipitated by a stressful family event
- Se superpone con ataques de panico y episodios disociativos | Overlaps with panic attacks and dissociative episodes

*Susto:*
- "Espanto" o "enfermedad de susto" | "Fright" or "fright illness"
- Creencia de que un evento aterrador causo la "perdida del alma" | Belief that a frightening event caused "soul loss"
- Sintomas: Tristeza, falta de motivacion, alteraciones del sueno | Symptoms: Sadness, lack of motivation, sleep disturbances
- Se superpone significativamente con depresion y TEPT | Overlaps significantly with depression and PTSD

**Factores de riesgo especificos | Specific risk factors:**

*Estres migratorio | Migratory stress:*
- Separacion familiar (a veces por anos) | Family separation (sometimes for years)
- Trauma durante el proceso migratorio | Trauma during the migration process
- Duelo por la perdida del pais de origen | Grief for the loss of homeland
- Miedo constante a la deportacion | Constant fear of deportation
- Explotacion laboral | Labor exploitation

*Estres de aculturacion | Acculturation stress:*
- Conflicto entre valores de la cultura de origen y la cultura nueva | Conflict between values of origin culture and new culture
- Conflicto intergeneracional (padres vs hijos) | Intergenerational conflict (parents vs children)
- Perdida de redes sociales y apoyo comunitario | Loss of social networks and community support
- Discriminacion linguistica | Linguistic discrimination

*Paradoja del inmigrante | Immigrant paradox:*
- Inmigrantes recientes tienen mejores indicadores de salud mental | Recent immigrants have better mental health indicators
- Con el tiempo y la aculturacion, la salud mental empeora | Over time and with acculturation, mental health worsens
- La segunda generacion tiene tasas mas altas de depresion | Second generation has higher rates of depression
- Erosion de factores protectores culturales | Erosion of cultural protective factors

**Tratamiento culturalmente adaptado | Culturally adapted treatment:**

- TCC adaptada con incorporacion de dichos y refranes | Adapted CBT incorporating dichos and refranes (proverbs)
- Terapia interpersonal con enfasis en roles familiares | Interpersonal therapy emphasizing family roles
- Incorporacion de la espiritualidad y fe | Integration of spirituality and faith
- Grupos de apoyo en espanol | Support groups in Spanish
- Promotores de salud como facilitadores | Promotores de salud as facilitators
- Psicoeducacion familiar | Family psychoeducation`,
      keyTerms: [
        {
          term: 'aculturacion | acculturation',
          definition:
            'Proceso de adaptacion a una nueva cultura que puede causar estres psicologico significativo | Process of adapting to a new culture that can cause significant psychological stress',
        },
        {
          term: 'susto',
          definition:
            'Sindrome cultural caracterizado por miedo, tristeza y malestar somatico atribuido a un evento aterrador; se superpone con depresion y TEPT | Cultural syndrome characterized by fear, sadness, and somatic distress attributed to a frightening event; overlaps with depression and PTSD',
        },
        {
          term: 'ataque de nervios',
          definition:
            'Episodio agudo de malestar emocional intenso con gritos, llanto y sintomas somaticos; comun en poblaciones latinas | Acute episode of intense emotional distress with screaming, crying, and somatic symptoms; common in Latino populations',
        },
        {
          term: 'paradoja del inmigrante | immigrant paradox',
          definition:
            'Fenomeno donde los inmigrantes recientes tienen mejor salud que los nativos, pero esto se deteriora con el tiempo | Phenomenon where recent immigrants have better health than natives, but this deteriorates over time',
        },
        {
          term: 'dichos y refranes | proverbs and sayings',
          definition:
            'Sabiduria popular expresada en frases cortas usada como herramienta terapeutica en terapia culturalmente adaptada | Folk wisdom expressed in short phrases used as therapeutic tool in culturally adapted therapy',
        },
      ],
      analogies: [
        'La aculturacion es como tratar de caminar con un pie en dos botes -- mantener el equilibrio entre dos culturas puede causar mucho estres. | Acculturation is like trying to walk with one foot in two boats -- keeping balance between two cultures can cause a lot of stress.',
        'Los sindromes culturales como "nervios" son como un mapa diferente del mismo territorio -- la depresion es la misma enfermedad, pero cada cultura la describe diferente. | Cultural syndromes like "nervios" are like a different map of the same territory -- depression is the same illness, but each culture describes it differently.',
      ],
      examples: [
        'Una mujer que migro hace 5 anos describe "nervios" constantes y dolor de estomago. Su PHQ-9 muestra depresion moderada. El tratamiento culturalmente adaptado le ayudo a mejorar. | A woman who migrated 5 years ago describes constant "nervios" and stomach pain. Her PHQ-9 shows moderate depression. Culturally adapted treatment helped her improve.',
        'Un padre que fue separado de sus hijos en la frontera reporta "susto" y no puede trabajar. Lo que el describe como susto cumple criterios de depresion mayor con TEPT comorbido. | A father who was separated from his children at the border reports "susto" and cannot work. What he describes as susto meets criteria for major depression with comorbid PTSD.',
      ],
      patientCounselingPoints: [
        'Los "nervios" y dolores fisicos persistentes merecen evaluacion de salud mental. | Persistent "nervios" and physical pains deserve mental health evaluation.',
        'La separacion familiar y el estres migratorio son causas reconocidas de depresion. | Family separation and migratory stress are recognized causes of depression.',
        'Hay tratamientos que respetan su cultura y estan disponibles en espanol. | There are treatments that respect your culture and are available in Spanish.',
        'La fe y el tratamiento profesional pueden trabajar juntos, no estan peleados. | Faith and professional treatment can work together, they are not at odds.',
      ],
    },
    3: {
      level: 3,
      summary:
        'La depresion en poblaciones latinas presenta patrones epidemiologicos, de presentacion clinica y de respuesta al tratamiento que reflejan la interaccion entre vulnerabilidad biologica, factores culturales y determinantes sociales. La somatizacion, los sindromes culturales y el estres de aculturacion son centrales para el diagnostico y tratamiento efectivo. Las adaptaciones culturales de intervenciones basadas en evidencia muestran tamanos de efecto significativamente mayores. | Depression in Latino populations presents epidemiological, clinical presentation, and treatment response patterns reflecting the interaction between biological vulnerability, cultural factors, and social determinants. Somatization, cultural syndromes, and acculturation stress are central to effective diagnosis and treatment. Cultural adaptations of evidence-based interventions show significantly larger effect sizes.',
      explanation: `**Epidemiologia detallada | Detailed epidemiology:**

- Prevalencia de por vida de depresion mayor en latinos: ~16% (similar a blancos no hispanos) | Lifetime prevalence of major depression in Latinos: ~16% (similar to non-Hispanic whites)
- Pero persistencia de depresion es mayor (cronificacion) | But depression persistence is higher (chronification)
- Inmigrantes recientes: menor prevalencia | Recent immigrants: lower prevalence
- Latinos nacidos en EE.UU.: prevalencia similar o mayor que blancos | U.S.-born Latinos: similar or higher prevalence than whites
- Variabilidad significativa por subgrupo (mexicanos, puertorriquenos, cubanos, centroamericanos) | Significant variability by subgroup (Mexican, Puerto Rican, Cuban, Central American)
- Puertorriquenos: Mayor prevalencia de depresion y uso de servicios | Puerto Ricans: Higher prevalence and service use
- Mexicanos: Menor uso de servicios pese a necesidad | Mexicans: Lower service use despite need

**Neurobiologia y cultura | Neurobiology and culture:**

*Somatizacion como mecanismo | Somatization as mechanism:*
- Activacion diferencial de vias de dolor y emocion | Differential activation of pain and emotion pathways
- La insula anterior integra informacion interoceptiva y emocional | Anterior insula integrates interoceptive and emotional information
- Culturas colectivistas tienen mayor tendencia a expresar malestar somaticamente | Collectivist cultures have greater tendency to express distress somatically
- No es "inventar" sintomas -- los dolores son reales | Not "making up" symptoms -- the pains are real
- El DSM-5-TR reconoce la somatizacion como presentacion valida | DSM-5-TR recognizes somatization as valid presentation

*Estres cronico y depresion | Chronic stress and depression:*
- Discriminacion percibida -> activacion cronica del eje HPA | Perceived discrimination -> chronic HPA axis activation
- Estres migratorio -> cortisol elevado -> neuroplasticidad reducida | Migratory stress -> elevated cortisol -> reduced neuroplasticity
- Pobreza cronica -> inflamacion sistemica -> depresion | Chronic poverty -> systemic inflammation -> depression
- Carga allostatica aumentada en comunidades marginadas | Increased allostatic load in marginalized communities

**Evaluacion clinica culturalmente informada | Culturally informed clinical assessment:**

*Entrevista de formulacion cultural (DSM-5-TR) | Cultural Formulation Interview (DSM-5-TR):*
- Definicion cultural del problema | Cultural definition of the problem
- Percepciones culturales de la causa | Cultural perceptions of cause
- Factores culturales en el ambiente psicosocial | Cultural factors in psychosocial environment
- Factores culturales en la relacion clinico-paciente | Cultural factors in clinician-patient relationship
- Evaluacion cultural global | Overall cultural assessment

*Instrumentos validados para latinos | Validated instruments for Latinos:*
- PHQ-9 en espanol (validado) | PHQ-9 in Spanish (validated)
- CES-D (Center for Epidemiological Studies Depression Scale) version espanola | CES-D Spanish version
- BDI-II en espanol | BDI-II in Spanish
- CIDI (Composite International Diagnostic Interview) version espanola | CIDI Spanish version
- Consideracion de normas culturales en la interpretacion de puntuaciones | Consideration of cultural norms in score interpretation

**Tratamiento basado en evidencia culturalmente adaptado | Evidence-based culturally adapted treatment:**

*Adaptaciones de TCC | CBT adaptations:*
- Modelo de Interian y Diaz-Martinez para latinos | Interian and Diaz-Martinez model for Latinos
- Incorporacion de valores culturales (familismo, personalismo, respeto) | Incorporation of cultural values (familismo, personalismo, respeto)
- Uso de dichos/refranes como herramientas cognitivas | Use of dichos/refranes as cognitive tools
- Sesiones familiares complementarias | Complementary family sessions
- Tamano de efecto d = 0.46 mayor que TCC no adaptada | Effect size d = 0.46 higher than unadapted CBT

*Modelo BRIGHT (Bringing Resources to Improve Group Health and Thinking):*
- Intervencion grupal para latinos con depresion en atencion primaria | Group intervention for Latinos with depression in primary care
- 8 sesiones semanales en espanol | 8 weekly sessions in Spanish
- Componentes: Psicoeducacion, activacion conductual, reestructuracion cognitiva | Components: Psychoeducation, behavioral activation, cognitive restructuring

*Farmacoterapia | Pharmacotherapy:*
- Los latinos pueden tener mayor sensibilidad a ISRS (iniciar dosis mas bajas) | Latinos may have greater sensitivity to SSRIs (start lower doses)
- Variaciones farmacogeneticas en CYP2D6 y CYP2C19 | Pharmacogenetic variations in CYP2D6 and CYP2C19
- Mayor prevalencia de metabolizadores lentos CYP2D6 en algunas poblaciones | Higher prevalence of CYP2D6 poor metabolizers in some populations
- Adherencia mejora con psicoeducacion culturalmente apropiada sobre medicamentos | Adherence improves with culturally appropriate psychoeducation about medications`,
      keyTerms: [
        {
          term: 'Entrevista de Formulacion Cultural | Cultural Formulation Interview',
          definition:
            'Herramienta del DSM-5-TR que guia la evaluacion sistematica de factores culturales en la presentacion clinica | DSM-5-TR tool guiding systematic assessment of cultural factors in clinical presentation',
        },
        {
          term: 'carga allostatica | allostatic load',
          definition:
            'Desgaste acumulativo del cuerpo debido a estres cronico; elevada en poblaciones marginadas | Cumulative bodily wear-and-tear due to chronic stress; elevated in marginalized populations',
        },
        {
          term: 'metabolizador lento | poor metabolizer',
          definition:
            'Persona que metaboliza medicamentos mas lentamente de lo normal, lo que puede causar mayores efectos secundarios a dosis estandar | Person who metabolizes medications more slowly than normal, which may cause greater side effects at standard doses',
        },
        {
          term: 'BRIGHT',
          definition:
            'Intervencion grupal basada en evidencia para depresion en latinos en atencion primaria | Evidence-based group intervention for depression in Latinos in primary care',
        },
        {
          term: 'familismo cultural | cultural familism',
          definition:
            'Valor que puede ser protector (apoyo social) o barrera (presion para no buscar ayuda externa) segun el contexto | Value that can be protective (social support) or barrier (pressure not to seek external help) depending on context',
        },
      ],
      clinicalNotes:
        'La Entrevista de Formulacion Cultural del DSM-5-TR debe usarse rutinariamente con pacientes latinos. La somatizacion no es un "falso positivo" -- refleja una integracion soma-psique que debe validarse. Iniciar ISRS a dosis menores en algunos pacientes latinos debido a variaciones farmacogeneticas. La adherencia mejora dramaticamente cuando se proporciona psicoeducacion en espanol que incorpora modelos explicativos culturales. Evaluar estresores migratorios y de aculturacion como parte de la formulacion clinica. Los instrumentos de tamizaje validados en espanol deben usarse con conciencia de que las normas de corte pueden no ser identicas a las de poblaciones anglohablantes. | The DSM-5-TR Cultural Formulation Interview should be routinely used with Latino patients. Somatization is not a "false positive" -- it reflects soma-psyche integration that must be validated. Start SSRIs at lower doses in some Latino patients due to pharmacogenetic variations. Adherence improves dramatically when psychoeducation in Spanish incorporating cultural explanatory models is provided. Assess migratory and acculturation stressors as part of clinical formulation. Validated screening instruments in Spanish should be used with awareness that cutoff norms may not be identical to English-speaking populations.',
    },
    4: {
      level: 4,
      summary:
        'La depresion en contexto cultural latino requiere un modelo integrado que incorpore la neurobiologia del estres social (carga allostatica, neuroinflamacion), psicologia cultural (modelos explicativos, sindromes culturales), y determinantes sociales (pobreza, racismo, estatus migratorio). Los marcos de adaptacion cultural sistematica (Ecological Validity Model de Bernal, Cultural Adaptation Process de Domenech Rodriguez) guian intervenciones con mayor efectividad. | Depression in the Latino cultural context requires an integrated model incorporating the neurobiology of social stress (allostatic load, neuroinflammation), cultural psychology (explanatory models, cultural syndromes), and social determinants (poverty, racism, immigration status). Systematic cultural adaptation frameworks (Bernal Ecological Validity Model, Domenech Rodriguez Cultural Adaptation Process) guide interventions with greater effectiveness.',
      explanation: `**Neurobiologia del estres social y cultural | Neurobiology of social and cultural stress:**

*Modelo de carga allostatica en contexto migratorio | Allostatic load model in migratory context:*
- Estresores cronicos multiples: Pobreza, discriminacion, miedo, separacion familiar | Multiple chronic stressors: Poverty, discrimination, fear, family separation
- Desgaste del sistema de respuesta al estres | Wear-and-tear on stress response system
- Biomarcadores: Cortisol, PCR, IL-6, presion arterial, HbA1c elevados | Biomarkers: Elevated cortisol, CRP, IL-6, blood pressure, HbA1c
- Aceleracion del envejecimiento biologico (telomeros mas cortos) | Accelerated biological aging (shorter telomeres)
- Convergencia con depresion inflamatoria | Convergence with inflammatory depression

*Neuroinflamacion y discriminacion | Neuroinflammation and discrimination:*
- La discriminacion percibida activa la respuesta inflamatoria (via NF-kB) | Perceived discrimination activates inflammatory response (via NF-kB)
- Citoquinas proinflamatorias cruzan la barrera hematoencefalica | Pro-inflammatory cytokines cross the blood-brain barrier
- Activacion microglial en amigdala e hipocampo | Microglial activation in amygdala and hippocampus
- Via de la kinurenina: Triptofano -> quinolinato (neurotoxica) vs serotonina | Kynurenine pathway: Tryptophan -> quinolinate (neurotoxic) vs serotonin
- Modelo de depresion inflamatoria con mayor aplicabilidad en poblaciones marginadas | Inflammatory depression model with greater applicability in marginalized populations

*Epigenetica del estres migratorio | Epigenetics of migratory stress:*
- Metilacion de NR3C1 (receptor de glucocorticoides) alterada | Altered NR3C1 (glucocorticoid receptor) methylation
- FKBP5 metilacion en respuesta a trauma | FKBP5 methylation in response to trauma
- Potencial transmision intergeneracional (padres inmigrantes -> hijos) | Potential intergenerational transmission (immigrant parents -> children)
- Implicaciones para la paradoja del inmigrante a nivel molecular | Implications for the immigrant paradox at molecular level

**Marcos de adaptacion cultural basada en evidencia | Evidence-based cultural adaptation frameworks:**

*Modelo de Validez Ecologica de Bernal (8 dimensiones) | Bernal Ecological Validity Model (8 dimensions):*
1. Idioma: Mas alla de la traduccion; matices linguisticos y pragmaticos | Language: Beyond translation; linguistic and pragmatic nuances
2. Personas: Rol del terapeuta; personalismo, simpatia | Persons: Therapist role; personalismo, simpatia
3. Metaforas: Dichos, refranes, simbolos culturales | Metaphors: Dichos, refranes, cultural symbols
4. Contenido: Valores culturales (familismo, respeto, marianismo) | Content: Cultural values (familismo, respeto, marianismo)
5. Conceptos: Modelos explicativos culturales (nervios, susto) | Concepts: Cultural explanatory models (nervios, susto)
6. Objetivos: Concordantes con valores culturales del paciente | Goals: Concordant with patient cultural values
7. Metodos: Adaptacion de tecnicas terapeuticas | Methods: Adaptation of therapeutic techniques
8. Contexto: Determinantes sociales, estatus migratorio | Context: Social determinants, immigration status

*Cultural Adaptation Process (CAP) de Domenech Rodriguez:*
- Fase 1: Estudio de la poblacion meta | Phase 1: Study of target population
- Fase 2: Diseno de la adaptacion | Phase 2: Adaptation design
- Fase 3: Implementacion piloto | Phase 3: Pilot implementation
- Fase 4: Revision y refinamiento | Phase 4: Review and refinement
- Fase 5: Prueba de efectividad | Phase 5: Effectiveness testing

**Tratamiento farmacologico de precision | Precision pharmacological treatment:**

*Farmacogenomica en latinos | Pharmacogenomics in Latinos:*
- CYP2D6: Mayor frecuencia de alelos *3, *4, *10 en algunos subgrupos | Higher frequency of *3, *4, *10 alleles in some subgroups
- CYP2C19: Variabilidad significativa entre subgrupos latinos | Significant variability between Latino subgroups
- Implicaciones para dosificacion de ISRS y triciclicos | Implications for SSRI and tricyclic dosing
- El genotipado puede mejorar resultados y reducir efectos secundarios | Genotyping may improve outcomes and reduce side effects

*Modelos de cuidado integrado | Integrated care models:*
- DIAMOND (Depression Improvement Across Minnesota): Adaptable para latinos | Adaptable for Latinos
- Modelo de cuidado colaborativo (Katon): Efectivo en latinos con adaptaciones | Collaborative care model (Katon): Effective in Latinos with adaptations
- Programa DECIDE (Depression Education, Counseling, and Integrated care): Diseñado para latinos | Designed for Latinos`,
      keyTerms: [
        {
          term: 'Modelo de Validez Ecologica de Bernal',
          definition:
            'Marco de 8 dimensiones para la adaptacion sistematica de intervenciones psicologicas a diferentes culturas | 8-dimension framework for systematic adaptation of psychological interventions to different cultures',
        },
        {
          term: 'via NF-kB | NF-kB pathway',
          definition:
            'Via de senalizacion celular que regula la respuesta inflamatoria; activada por estres psicosocial cronico como la discriminacion | Cell signaling pathway regulating inflammatory response; activated by chronic psychosocial stress such as discrimination',
        },
        {
          term: 'quinolinato | quinolinate',
          definition:
            'Metabolito neurotoxica de la via de la kinurenina, elevado en estados inflamatorios; reduce la serotonina disponible | Neurotoxic metabolite of the kynurenine pathway, elevated in inflammatory states; reduces available serotonin',
        },
        {
          term: 'paradoja del inmigrante a nivel molecular | immigrant paradox at molecular level',
          definition:
            'La proteccion epigenetica de factores culturales que se erosiona con la aculturacion y exposicion a estresores del pais receptor | Epigenetic protection from cultural factors that erodes with acculturation and exposure to host country stressors',
        },
        {
          term: 'cuidado integrado | integrated care',
          definition:
            'Modelo de atencion que incorpora salud mental en atencion primaria, reduciendo barreras de acceso | Care model incorporating mental health into primary care, reducing access barriers',
        },
      ],
      clinicalNotes:
        'La formulacion clinica de la depresion en pacientes latinos debe integrar: (1) modelo explicativo cultural del paciente, (2) estresores migratorios y de aculturacion, (3) carga allostatica acumulada, (4) posibles variaciones farmacogeneticas, y (5) factores protectores culturales. La adaptacion cultural no es simplemente traducir materiales sino reestructurar la intervencion segun las 8 dimensiones del modelo de Bernal. El modelo inflamatorio de la depresion tiene especial relevancia clinica en esta poblacion por la alta exposicion a estresores cronicos. El cuidado integrado en atencion primaria es el modelo de acceso mas efectivo dado que los latinos prefieren buscar ayuda en atencion primaria (no en salud mental especializada). | Clinical formulation of depression in Latino patients must integrate: (1) patient cultural explanatory model, (2) migratory and acculturation stressors, (3) accumulated allostatic load, (4) possible pharmacogenetic variations, and (5) cultural protective factors. Cultural adaptation is not simply translating materials but restructuring the intervention according to the 8 dimensions of the Bernal model. The inflammatory model of depression has special clinical relevance in this population due to high exposure to chronic stressors. Integrated care in primary care is the most effective access model given that Latinos prefer to seek help in primary care (not specialized mental health).',
    },
    5: {
      level: 5,
      summary:
        'La investigacion de frontera integra modelos de neuroinflamacion con determinantes sociales, epigenetica del estres migratorio intergeneracional, y ciencia de implementacion para abordar la depresion en comunidades latinas. Los enfoques de psiquiatria de precision culturalmente informada, biomarcadores de carga allostatica, y modelos adaptativos de intervencion basados en valores culturales representan el futuro del campo. La investigacion participativa (CBPR) y los marcos de equidad en salud son fundamentales para la validez y aplicabilidad de estos avances. | Frontier research integrates neuroinflammation models with social determinants, epigenetics of intergenerational migratory stress, and implementation science to address depression in Latino communities. Culturally informed precision psychiatry approaches, allostatic load biomarkers, and adaptive intervention models based on cultural values represent the future of the field. Participatory research (CBPR) and health equity frameworks are fundamental for the validity and applicability of these advances.',
      explanation: `**Modelos integradores de frontera | Frontier integrative models:**

*Modelo neuro-socio-cultural de la depresion en latinos | Neuro-socio-cultural model of depression in Latinos:*
- Nivel 1 (Molecular): Metilacion epigenetica, variantes geneticas, vias inflamatorias | Level 1 (Molecular): Epigenetic methylation, genetic variants, inflammatory pathways
- Nivel 2 (Neural): Circuitos amigdala-CPF, sistema de recompensa, red de modo predeterminado | Level 2 (Neural): Amygdala-PFC circuits, reward system, default mode network
- Nivel 3 (Psicologico): Modelos explicativos, afrontamiento cultural, somatizacion | Level 3 (Psychological): Explanatory models, cultural coping, somatization
- Nivel 4 (Social): Redes familiares, comunidad, estatus migratorio | Level 4 (Social): Family networks, community, immigration status
- Nivel 5 (Estructural): Racismo institucional, politicas migratorias, acceso a servicios | Level 5 (Structural): Institutional racism, immigration policies, service access
- Las interacciones entre niveles crean fenotipos unicos de depresion | Interactions between levels create unique depression phenotypes

*Epigenetica intergeneracional | Intergenerational epigenetics:*
- Estres parental migratorio -> cambios epigeneticos en descendencia | Parental migratory stress -> epigenetic changes in offspring
- Metilacion de NR3C1 en hijos de inmigrantes traumatizados | NR3C1 methylation in children of traumatized immigrants
- FKBP5 como mediador de la transmision intergeneracional del riesgo | FKBP5 as mediator of intergenerational risk transmission
- Investigacion emergente con cohortes longitudinales latinas | Emerging research with longitudinal Latino cohorts

**Psiquiatria de precision culturalmente informada | Culturally informed precision psychiatry:**

*Subtipado fenotipico cultural | Cultural phenotypic subtyping:*
- Depresion somatica: Mayor presentacion fisica, insula hiperactiva | Somatic depression: Greater physical presentation, hyperactive insula
- Depresion por duelo migratorio: Componente de perdida, similitudes con duelo complicado | Migratory grief depression: Loss component, similarities with complicated grief
- Depresion inflamatoria social: Biomarcadores inflamatorios elevados por estres cronico | Social inflammatory depression: Elevated inflammatory biomarkers from chronic stress
- Depresion de aculturacion: Conflicto identitario, anhedonia cultural | Acculturation depression: Identity conflict, cultural anhedonia

*Biomarcadores potenciales | Potential biomarkers:*
- PCR como predictor de respuesta a intervenciones antiinflamatorias | CRP as predictor of response to anti-inflammatory interventions
- Ratio cortisol/DHEA como indicador de carga allostatica | Cortisol/DHEA ratio as allostatic load indicator
- Longitud telomerica como marcador de envejecimiento acelerado | Telomere length as accelerated aging marker
- Panel de citoquinas para subtipado de depresion inflamatoria | Cytokine panel for inflammatory depression subtyping

**Ciencia de implementacion avanzada | Advanced implementation science:**

- Modelos de implementacion escalonada (stepped care) adaptados | Adapted stepped care models
- Intervenciones adaptativas culturalmente (SMART designs) | Culturally adaptive interventions (SMART designs)
- Uso de tecnologia: Apps de salud mental en espanol con IA cultural | Technology use: Spanish mental health apps with cultural AI
- Modelos de sostenibilidad para programas comunitarios | Sustainability models for community programs
- Evaluacion de costo-efectividad de adaptaciones culturales | Cost-effectiveness evaluation of cultural adaptations

**Direcciones futuras | Future directions:**

- Neuroimagen funcional comparativa entre subgrupos culturales | Comparative functional neuroimaging between cultural subgroups
- Ensayos clinicos con representacion latina adecuada | Clinical trials with adequate Latino representation
- Intervenciones de nivel politico (immigration policy and mental health) | Policy-level interventions
- Modelos predictivos de aprendizaje automatico para identificar latinos en riesgo | Machine learning predictive models to identify at-risk Latinos
- Integracion de sabiduria cultural (curanderismo, herbalismo) con medicina basada en evidencia | Integration of cultural wisdom (curanderismo, herbalism) with evidence-based medicine`,
      keyTerms: [
        {
          term: 'anhedonia cultural | cultural anhedonia',
          definition:
            'Perdida de placer especificamente asociada con la desconexion de practicas y valores culturales de origen | Loss of pleasure specifically associated with disconnection from origin cultural practices and values',
        },
        {
          term: 'diseno SMART | SMART design',
          definition:
            'Sequential Multiple Assignment Randomized Trial -- diseno experimental que permite adaptar el tratamiento segun la respuesta del paciente | Experimental design allowing treatment adaptation based on patient response',
        },
        {
          term: 'ratio cortisol/DHEA',
          definition:
            'Biomarcador de la carga allostatica que refleja el desequilibrio entre hormonas catabolicas y anabolicas del estres | Allostatic load biomarker reflecting imbalance between catabolic and anabolic stress hormones',
        },
        {
          term: 'fenotipo de depresion somatica | somatic depression phenotype',
          definition:
            'Subtipo de depresion con predominio de sintomas fisicos, mayor activacion de la insula, y frecuente en culturas colectivistas | Depression subtype with predominant physical symptoms, greater insula activation, frequent in collectivist cultures',
        },
        {
          term: 'implementacion escalonada | stepped care',
          definition:
            'Modelo de atencion donde la intensidad del tratamiento se ajusta segun la respuesta, comenzando con intervenciones menos intensivas | Care model where treatment intensity adjusts based on response, starting with less intensive interventions',
        },
      ],
      clinicalNotes:
        'La investigacion de vanguardia requiere integrar neurobiologia de precision con contexto social y cultural. El subtipado fenotipico cultural (depresion somatica, de duelo migratorio, inflamatoria social, de aculturacion) puede guiar la seleccion de tratamiento. Los biomarcadores de carga allostatica (cortisol/DHEA, PCR, longitud telomerica) son herramientas emergentes para cuantificar el impacto biologico del estres social cronico. La ciencia de implementacion debe usar marcos como RE-AIM y CFIR adaptados para contextos latinos. Los ensayos clinicos deben incluir representacion adecuada de subgrupos latinos (mexicanos, puertorriquenos, centroamericanos, sudamericanos) dado las diferencias significativas entre estos grupos. La integracion de promotores de salud en equipos de investigacion mejora la validez ecologica y la diseminacion de resultados. | Cutting-edge research requires integrating precision neurobiology with social and cultural context. Cultural phenotypic subtyping (somatic depression, migratory grief, social inflammatory, acculturation) can guide treatment selection. Allostatic load biomarkers (cortisol/DHEA, CRP, telomere length) are emerging tools to quantify biological impact of chronic social stress. Implementation science should use frameworks like RE-AIM and CFIR adapted for Latino contexts. Clinical trials must include adequate representation of Latino subgroups (Mexican, Puerto Rican, Central American, South American) given significant differences between these groups. Integration of promotores de salud in research teams improves ecological validity and results dissemination.',
    },
  },

  media: [],

  citations: [
    {
      id: 'bernal-2009-ecological-validity',
      type: 'journal',
      title: 'Cultural Adaptation of Treatments: A Resource for Considering Culture in Evidence-Based Practice',
      authors: ['Bernal, G.', 'Jimenez-Chafey, M.I.', 'Domenech Rodriguez, M.M.'],
      source: 'Professional Psychology: Research and Practice',
    },
    {
      id: 'lewis-fernandez-2014-cultural-concepts',
      type: 'journal',
      title: 'Culture and Psychiatric Evaluation: Operationalizing Cultural Formulation for DSM-5',
      authors: ['Lewis-Fernandez, R.', 'Aggarwal, N.K.'],
      source: 'Psychiatry',
    },
    {
      id: 'alegria-2007-disparities',
      type: 'journal',
      title: 'Disparity in Depression Treatment Among Racial and Ethnic Minority Populations in the United States',
      authors: ['Alegria, M.', 'Chatterji, P.', 'Wells, K.'],
      source: 'Psychiatric Services',
    },
  ],

  crossReferences: [
    {
      targetId: 'mental-health-depresion-depression',
      targetType: 'condition',
      relationship: 'related',
      label: 'Depresion Mayor | Major Depression',
    },
    {
      targetId: 'topic-destigmatizing-latino-communities',
      targetType: 'topic',
      relationship: 'related',
      label: 'Desestigmatizacion en Comunidades Latinas | Destigmatizing in Latino Communities',
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
    topics: ['mental-health', 'cultural-context', 'mood-disorders', 'bilingual-content'],
    keywords: [
      'depresion',
      'depression',
      'contexto cultural',
      'cultural context',
      'nervios',
      'susto',
      'ataque de nervios',
      'somatizacion',
      'somatization',
      'aculturacion',
      'acculturation',
      'latino',
      'salud mental',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default depressionCulturalContextContent;
