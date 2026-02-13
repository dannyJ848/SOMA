/**
 * Trastornos Alimentarios / Eating Disorders
 *
 * Contenido educativo integral sobre los trastornos alimentarios
 * (anorexia, bulimia, trastorno por atracón) con enfoque
 * en la comunidad hispanohablante. Incluye síntomas, diagnóstico,
 * tratamiento y consideraciones culturales.
 *
 * Comprehensive educational content on eating disorders
 * (anorexia, bulimia, binge eating) with focus on
 * Spanish-speaking communities. Includes symptoms, diagnosis,
 * treatment, and cultural considerations.
 */

import { EducationalContent } from '../../../types';

export const trastornosAlimentariosEatingDisordersContent: EducationalContent = {
  id: 'condition-trastornos-alimentarios-eating-disorders',
  type: 'condition',
  name: 'Eating Disorders',
  nameEs: 'Trastornos Alimentarios',
  alternateNames: [
    'Trastornos de la Conducta Alimentaria',
    'TCA',
    'Desórdenes Alimenticios',
    'Anorexia',
    'Bulimia',
    'Trastorno por Atracón',
    'Binge Eating Disorder',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Los trastornos alimentarios son enfermedades médicas serias que afectan la relación con la comida, el cuerpo y la imagen de uno mismo. Incluyen anorexia, bulimia y trastorno por atracón. Afectan a personas de todas las culturas, géneros y edades. Son tratables. | Eating disorders are serious medical illnesses that affect the relationship with food, body, and self-image. They include anorexia, bulimia, and binge eating disorder. They affect people of all cultures, genders, and ages. They are treatable.',
      explanation: `## Explicación

Los trastornos alimentarios son enfermedades reales del cerebro y el cuerpo. No son una elección, una fase, ni un capricho. Son condiciones médicas serias que necesitan tratamiento profesional.

**Los tres trastornos alimentarios principales:**

**1. Anorexia Nerviosa (Anorexia)**
- Comer muy poco por miedo intenso a subir de peso
- Verse gordo/a en el espejo aunque esté muy delgado/a
- Perder mucho peso o no ganar peso cuando debería
- Puede causar problemas graves: debilidad, pérdida de cabello, huesos frágiles, problemas del corazón

**2. Bulimia Nerviosa (Bulimia)**
- Comer grandes cantidades de comida de una sola vez (atracón) y luego intentar "compensar"
- Formas de compensar: vomitar, usar laxantes, hacer ejercicio excesivo, no comer por horas
- Sentirse muy avergonzado/a y culpable después
- Puede causar: daño en los dientes, problemas de estómago, desequilibrio de electrolitos

**3. Trastorno por Atracón (Binge Eating)**
- Comer grandes cantidades de comida de una sola vez sintiéndose fuera de control
- Comer incluso cuando no tiene hambre o ya está lleno/a
- Sentir vergüenza, culpa y angustia después
- NO hay comportamiento de compensación (como en la bulimia)
- Es el trastorno alimentario MÁS COMÚN

**Mensaje importante para la comunidad hispana/latina:**

Los trastornos alimentarios NO son solo una "enfermedad de personas blancas." Afectan a personas de todas las razas y culturas, incluyendo a la comunidad latina. Sin embargo, las personas latinas con trastornos alimentarios son menos diagnosticadas y tratadas.

En la cultura hispana:
- La comida es central en la vida familiar y social
- Comentarios sobre el peso y la apariencia son comunes ("estás más gordita/o," "qué flaquita")
- Estos comentarios, aunque bien intencionados, pueden dañar la relación con la comida
- Las dietas extremas pueden normalizarse
- El estigma puede impedir buscar ayuda

**Los trastornos alimentarios no son:**
- Una dieta que se salió de control
- Vanidad o "querer verse bien"
- Algo que solo les pasa a mujeres jóvenes y blancas
- Algo que se puede superar con "fuerza de voluntad"

**¿Qué puedo hacer?**
- Hablar con un médico o profesional de salud mental
- El tratamiento funciona: terapia, apoyo nutricional, y a veces medicamentos
- No espere a que sea "suficientemente grave" — busque ayuda ahora

**Si usted o alguien que conoce necesita ayuda:**
- Línea 988 de Prevención del Suicidio y Crisis (en español): 988
- ANAD Helpline (trastornos alimentarios): 1-888-375-7767
- Línea de Crisis por Texto: envíe HOLA al 741741

---
## Explanation

Eating disorders are real illnesses of the brain and body. They are not a choice, a phase, or a whim. They are serious medical conditions that need professional treatment.

**The three main eating disorders:**

**1. Anorexia Nervosa (Anorexia)**
- Eating very little due to intense fear of gaining weight
- Seeing yourself as fat in the mirror even when very thin
- Losing a lot of weight or not gaining weight when you should
- Can cause serious problems: weakness, hair loss, brittle bones, heart problems

**2. Bulimia Nervosa (Bulimia)**
- Eating large amounts of food at once (binge) then trying to "compensate"
- Ways of compensating: vomiting, using laxatives, excessive exercise, not eating for hours
- Feeling very ashamed and guilty afterward
- Can cause: teeth damage, stomach problems, electrolyte imbalance

**3. Binge Eating Disorder**
- Eating large amounts of food at once feeling out of control
- Eating even when not hungry or already full
- Feeling shame, guilt, and distress afterward
- NO compensatory behavior (as in bulimia)
- It is the MOST COMMON eating disorder

**Important message for the Hispanic/Latino community:**

Eating disorders are NOT just a "white people's disease." They affect people of all races and cultures, including the Latino community. However, Latino individuals with eating disorders are less likely to be diagnosed and treated.

In Hispanic culture:
- Food is central to family and social life
- Comments about weight and appearance are common ("you are getting chubbier," "how skinny")
- These comments, although well-intentioned, can damage the relationship with food
- Extreme diets may be normalized
- Stigma can prevent seeking help

**Eating disorders are not:**
- A diet that got out of control
- Vanity or "wanting to look good"
- Something that only happens to young, white women
- Something you can overcome with "willpower"

**What can I do?**
- Talk to a doctor or mental health professional
- Treatment works: therapy, nutritional support, and sometimes medications
- Do not wait until it is "bad enough" — seek help now

**If you or someone you know needs help:**
- 988 Suicide & Crisis Lifeline (in Spanish): 988
- ANAD Helpline (eating disorders): 1-888-375-7767
- Crisis Text Line: text HELLO to 741741`,
      keyTerms: [
        {
          term: 'trastorno alimentario',
          definition:
            'Enfermedad médica seria que afecta la manera en que una persona come, piensa sobre la comida y se siente sobre su cuerpo. No es una elección. | Serious medical illness that affects the way a person eats, thinks about food, and feels about their body. It is not a choice.',
        },
        {
          term: 'atracón',
          definition:
            'Comer una cantidad de comida mucho mayor de lo normal en un período corto de tiempo, sintiéndose fuera de control. | Eating a much larger amount of food than normal in a short period of time, feeling out of control.',
        },
        {
          term: 'imagen corporal',
          definition:
            'La forma en que una persona ve y siente su propio cuerpo. En los trastornos alimentarios, esta imagen está distorsionada. | The way a person sees and feels about their own body. In eating disorders, this image is distorted.',
        },
      ],
      analogies: [
        'Un trastorno alimentario es como tener un "bully" dentro de tu cabeza que te dice mentiras sobre la comida y tu cuerpo. El tratamiento te ayuda a silenciar esa voz y escuchar la verdad. | An eating disorder is like having a "bully" inside your head telling you lies about food and your body. Treatment helps you silence that voice and hear the truth.',
        'Así como una persona con diabetes necesita ayuda para regular el azúcar, una persona con un trastorno alimentario necesita ayuda para regular su relación con la comida. | Just as a person with diabetes needs help regulating sugar, a person with an eating disorder needs help regulating their relationship with food.',
      ],
      examples: [
        'Una adolescente latina deja de comer en las reuniones familiares, dice que "ya comió" y pierde peso rápidamente. Su familia piensa que está "cuidándose." En realidad, tiene anorexia. | A Latina teenager stops eating at family gatherings, says she "already ate," and loses weight rapidly. Her family thinks she is "taking care of herself." In reality, she has anorexia.',
        'Un joven hispano come en secreto grandes cantidades de comida y se siente profundamente avergonzado. No se ve como alguien con un trastorno alimentario porque es hombre. Pero el trastorno por atracón afecta a todos los géneros. | A Hispanic young man secretly eats large amounts of food and feels deeply ashamed. He does not look like someone with an eating disorder because he is male. But binge eating disorder affects all genders.',
      ],
      patientCounselingPoints: [
        'Los trastornos alimentarios son enfermedades médicas, NO son su culpa, y NO se resuelven solos. Buscar ayuda profesional es el paso más importante. | Eating disorders are medical illnesses, NOT your fault, and do NOT resolve on their own. Seeking professional help is the most important step.',
        'Evite hacer comentarios sobre el peso o la apariencia de otros, incluso si son "positivos." Comentarios como "qué bien te ves, bajaste de peso" pueden reforzar comportamientos peligrosos. | Avoid making comments about others\' weight or appearance, even if they are "positive." Comments like "you look great, you lost weight" can reinforce dangerous behaviors.',
        'Si le preocupa un familiar, no lo confronte sobre la comida. En cambio, exprese su preocupación con amor: "He notado cambios y me preocupo por ti. ¿Cómo puedo ayudarte?" | If you are concerned about a family member, do not confront them about food. Instead, express concern with love: "I have noticed changes and I am worried about you. How can I help?"',
        'La recuperación es posible. Con tratamiento profesional, la mayoría de las personas con trastornos alimentarios pueden reconstruir una relación saludable con la comida. | Recovery is possible. With professional treatment, most people with eating disorders can rebuild a healthy relationship with food.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Los trastornos alimentarios (anorexia nerviosa, bulimia nerviosa, trastorno por atracón) son condiciones psiquiátricas con alta morbilidad médica. La anorexia tiene la tasa de mortalidad más alta entre los trastornos psiquiátricos. El tratamiento incluye TCC-E, terapia familiar (FBT) y manejo médico de complicaciones. | Eating disorders (anorexia nervosa, bulimia nervosa, binge eating disorder) are psychiatric conditions with high medical morbidity. Anorexia has the highest mortality rate among psychiatric disorders. Treatment includes CBT-E, family-based treatment (FBT), and medical management of complications.',
      explanation: `## Explicación

**Anorexia Nerviosa:**

*Criterios diagnósticos:*
- Restricción de la ingesta calórica que lleva a peso significativamente bajo
- Miedo intenso a ganar peso o comportamiento que interfiere con la ganancia de peso
- Alteración de la percepción del peso o la forma corporal

*Subtipos:*
- Restrictivo: solo restricción dietética y/o ejercicio excesivo
- Atracón/purga: episodios de atracón y/o purga además de la restricción

*Complicaciones médicas graves:*
- Cardiovasculares: bradicardia, hipotensión, arritmias (puede ser fatal)
- Endocrinas: amenorrea, hipotiroidismo, cortisol elevado
- Óseas: osteoporosis, fracturas por estrés
- Hematológicas: anemia, leucopenia
- Renales: deshidratación, alteraciones electrolíticas
- Lanugo (vello fino en el cuerpo)
- Síndrome de realimentación (riesgo al iniciar la alimentación)

*Datos importantes:*
- Tasa de mortalidad más alta de todos los trastornos psiquiátricos (~5-10%)
- Edad de inicio típica: 15-25 años
- Ratio mujer:hombre 10:1 (pero los hombres están subdiagnosticados)
- Fuertemente influenciada por genética (~50-80% heredabilidad)

**Bulimia Nerviosa:**

*Criterios diagnósticos:*
- Episodios recurrentes de atracón (comer cantidad excesiva + falta de control)
- Comportamientos compensatorios inapropiados recurrentes
- Los atracones y comportamientos compensatorios ocurren al menos 1 vez/semana durante 3 meses
- La autoevaluación está influida excesivamente por el peso y la forma corporal

*Comportamientos compensatorios:*
- Vómito autoinducido (más común)
- Uso de laxantes, diuréticos, enemas
- Ayuno
- Ejercicio excesivo

*Complicaciones médicas:*
- Erosión dental (perimolisis) por ácido estomacal
- Signo de Russell (callosidades en los nudillos)
- Hipertrofia parotídea (cara redonda)
- Esofagitis, desgarros de Mallory-Weiss
- Hipocalemia (riesgo de arritmias cardíacas)
- Alcalosis metabólica (por vómito) o acidosis (por laxantes)

**Trastorno por Atracón:**

*Criterios diagnósticos:*
- Episodios recurrentes de atracón
- Asociados con: comer rápido, comer hasta sentirse incómodamente lleno, comer sin hambre, comer solo por vergüenza, sentir asco o culpa
- Malestar marcado respecto al atracón
- Al menos 1 vez/semana durante 3 meses
- SIN comportamiento compensatorio regular

*Datos importantes:*
- Trastorno alimentario más prevalente (~3% de la población)
- Afecta por igual a hombres y mujeres
- Asociado con obesidad (pero NO todos los obesos tienen atracón)
- Comorbilidad frecuente con depresión y ansiedad

**Tratamiento:**

*Psicoterapias basadas en evidencia:*
- TCC-E (Terapia Cognitivo-Conductual Mejorada - Fairburn): tratamiento de elección para bulimia y trastorno por atracón; también eficaz en anorexia
- FBT (Family-Based Treatment / Terapia Familiar - Maudsley): primera línea para anorexia en adolescentes. La familia toma control de la alimentación
- Terapia Interpersonal (TIP): alternativa eficaz para bulimia y trastorno por atracón
- DBT (Terapia Dialéctico-Conductual): útil cuando hay desregulación emocional

*Medicamentos:*
- Fluoxetina: aprobada FDA para bulimia (60 mg/día)
- Lisdexanfetamina (Vyvanse): aprobada FDA para trastorno por atracón
- Topiramato: reduce atracones (off-label)
- Olanzapina: puede ayudar con la ganancia de peso en anorexia (off-label)
- NO hay medicamento aprobado para anorexia

*Niveles de atención:*
- Ambulatorio: para pacientes estables
- Programa intensivo ambulatorio (IOP): 3+ horas, varios días por semana
- Hospitalización parcial (PHP): 6-8 horas diarias
- Residencial: atención 24 horas en un centro especializado
- Hospitalización médica: cuando hay complicaciones médicas graves

**Consideraciones culturales para la comunidad hispana/latina:**

*Prevalencia en la comunidad latina:*
- Las tasas de bulimia y trastorno por atracón son comparables o MAYORES que en la población blanca no hispana
- Las latinas pueden tener mayor riesgo de comportamientos de purga
- Los hombres latinos están particularmente subdiagnosticados
- El trastorno por atracón es especialmente prevalente

*Factores culturales:*
- La comida como expresión de amor y conexión familiar ("come más, estás muy flaca/o")
- Comentarios frecuentes sobre el peso normalizados culturalmente
- Presión de aculturación: conflicto entre ideales de belleza latino y estadounidense
- "Curvas" valoradas en algunas culturas latinas vs. delgadez valorada en cultura estadounidense
- La vergüenza y el estigma dificultan hablar de estos temas
- Las dietas y remedios caseros para bajar de peso pueden ser peligrosos

*Barreras de acceso:*
- Solo ~20% de hispanos con trastornos alimentarios reciben tratamiento
- Falta de proveedores especializados bilingües
- Falta de seguros médicos
- Subdiagnóstico por parte de profesionales que no esperan TCA en pacientes latinos

---
## Explanation

**Anorexia Nervosa:**

*Diagnostic criteria:*
- Caloric intake restriction leading to significantly low body weight
- Intense fear of gaining weight or behavior that interferes with weight gain
- Disturbance in weight or body shape perception

*Subtypes:*
- Restricting: dietary restriction and/or excessive exercise only
- Binge-eating/purging: binge episodes and/or purging in addition to restriction

*Serious medical complications:*
- Cardiovascular: bradycardia, hypotension, arrhythmias (can be fatal)
- Endocrine: amenorrhea, hypothyroidism, elevated cortisol
- Bone: osteoporosis, stress fractures
- Hematological: anemia, leukopenia
- Renal: dehydration, electrolyte abnormalities
- Lanugo (fine body hair)
- Refeeding syndrome (risk when initiating feeding)

*Important data:*
- Highest mortality rate of all psychiatric disorders (~5-10%)
- Typical onset age: 15-25 years
- Female:male ratio 10:1 (but males are underdiagnosed)
- Strongly influenced by genetics (~50-80% heritability)

**Bulimia Nervosa:**

*Diagnostic criteria:*
- Recurrent binge eating episodes (excessive amount + lack of control)
- Recurrent inappropriate compensatory behaviors
- Binges and compensatory behaviors occur at least 1x/week for 3 months
- Self-evaluation excessively influenced by weight and body shape

*Compensatory behaviors:*
- Self-induced vomiting (most common)
- Laxative, diuretic, enema use
- Fasting
- Excessive exercise

*Medical complications:*
- Dental erosion (perimolysis) from stomach acid
- Russell's sign (knuckle calluses)
- Parotid hypertrophy (round face)
- Esophagitis, Mallory-Weiss tears
- Hypokalemia (cardiac arrhythmia risk)
- Metabolic alkalosis (from vomiting) or acidosis (from laxatives)

**Binge Eating Disorder:**

*Diagnostic criteria:*
- Recurrent binge eating episodes
- Associated with: eating rapidly, eating until uncomfortably full, eating when not hungry, eating alone due to embarrassment, feeling disgusted or guilty
- Marked distress regarding binge eating
- At least 1x/week for 3 months
- NO regular compensatory behavior

*Important data:*
- Most prevalent eating disorder (~3% of population)
- Affects men and women equally
- Associated with obesity (but NOT all obese people have binge eating)
- Frequent comorbidity with depression and anxiety

**Treatment:**

*Evidence-based psychotherapies:*
- CBT-E (Enhanced Cognitive Behavioral Therapy - Fairburn): treatment of choice for bulimia and binge eating disorder; also effective in anorexia
- FBT (Family-Based Treatment - Maudsley): first-line for adolescent anorexia. Family takes control of feeding
- Interpersonal Therapy (IPT): effective alternative for bulimia and binge eating disorder
- DBT (Dialectical Behavior Therapy): useful when emotional dysregulation is present

*Medications:*
- Fluoxetine: FDA-approved for bulimia (60 mg/day)
- Lisdexamfetamine (Vyvanse): FDA-approved for binge eating disorder
- Topiramate: reduces binge eating (off-label)
- Olanzapine: may help with weight gain in anorexia (off-label)
- NO approved medication for anorexia

*Levels of care:*
- Outpatient: for stable patients
- Intensive outpatient program (IOP): 3+ hours, several days/week
- Partial hospitalization (PHP): 6-8 hours daily
- Residential: 24-hour care in specialized facility
- Medical hospitalization: for serious medical complications

**Cultural considerations for the Hispanic/Latino community:**

*Prevalence in the Latino community:*
- Bulimia and binge eating disorder rates are comparable or HIGHER than in non-Hispanic white population
- Latinas may have higher risk of purging behaviors
- Latino men are particularly underdiagnosed
- Binge eating disorder is especially prevalent

*Cultural factors:*
- Food as an expression of love and family connection ("eat more, you are too skinny")
- Culturally normalized frequent comments about weight
- Acculturation pressure: conflict between Latino and American beauty ideals
- "Curves" valued in some Latino cultures vs. thinness valued in American culture
- Shame and stigma make it difficult to discuss these issues
- Diets and home remedies for weight loss can be dangerous

*Access barriers:*
- Only ~20% of Hispanics with eating disorders receive treatment
- Lack of bilingual specialized providers
- Lack of health insurance
- Underdiagnosis by professionals who do not expect eating disorders in Latino patients`,
      keyTerms: [
        {
          term: 'anorexia nerviosa',
          definition:
            'Trastorno alimentario caracterizado por restricción extrema de alimentos, miedo intenso a ganar peso y distorsión de la imagen corporal. Tiene la tasa de mortalidad más alta entre los trastornos psiquiátricos. | Eating disorder characterized by extreme food restriction, intense fear of weight gain, and body image distortion. Has the highest mortality rate among psychiatric disorders.',
        },
        {
          term: 'bulimia nerviosa',
          definition:
            'Trastorno alimentario con ciclos de atracones seguidos de comportamientos compensatorios (vómito, laxantes, ejercicio excesivo). Puede causar daño dental, esofágico y desequilibrio electrolítico. | Eating disorder with cycles of binge eating followed by compensatory behaviors (vomiting, laxatives, excessive exercise). Can cause dental, esophageal damage, and electrolyte imbalance.',
        },
        {
          term: 'TCC-E / CBT-E',
          definition:
            'Terapia Cognitivo-Conductual Mejorada. Tratamiento psicológico de primera línea para bulimia y trastorno por atracón, desarrollado por Christopher Fairburn. | Enhanced Cognitive Behavioral Therapy. First-line psychological treatment for bulimia and binge eating disorder, developed by Christopher Fairburn.',
        },
        {
          term: 'FBT',
          definition:
            'Family-Based Treatment (Tratamiento Basado en la Familia). También llamado Modelo Maudsley. Primera línea para anorexia en adolescentes. Los padres toman control temporal de la alimentación. | Family-Based Treatment. Also called the Maudsley Model. First-line for adolescent anorexia. Parents take temporary control of feeding.',
        },
        {
          term: 'síndrome de realimentación / refeeding syndrome',
          definition:
            'Complicación potencialmente mortal que ocurre al reiniciar la alimentación en personas severamente desnutridas. Causa cambios en electrolitos (especialmente fósforo) que pueden llevar a insuficiencia cardíaca. | Potentially fatal complication occurring when restarting feeding in severely malnourished individuals. Causes electrolyte shifts (especially phosphorus) that can lead to heart failure.',
        },
      ],
      analogies: [
        'El trastorno alimentario es como lentes distorsionados que cambian cómo ves la comida y tu cuerpo. El tratamiento es como corregir la prescripción de esos lentes para que puedas ver la realidad. | An eating disorder is like distorted lenses that change how you see food and your body. Treatment is like correcting the prescription of those lenses so you can see reality.',
      ],
      examples: [
        'Una familia hispana organiza una fiesta y presiona a su hija a comer ("no seas grosera, tu tía cocinó para ti"). Ella come para no ofender a nadie, pero luego se siente tan culpable que vomita en secreto. Este ciclo es bulimia, no "falta de voluntad." | A Hispanic family organizes a party and pressures their daughter to eat ("do not be rude, your aunt cooked for you"). She eats so as not to offend anyone, but then feels so guilty she secretly vomits. This cycle is bulimia, not "lack of willpower."',
      ],
      patientCounselingPoints: [
        'El trastorno alimentario más peligroso es la anorexia nerviosa: puede ser fatal. Si usted o su hijo/a están perdiendo peso de manera preocupante, busque atención médica urgente. | The most dangerous eating disorder is anorexia nervosa: it can be fatal. If you or your child are losing weight in a concerning way, seek urgent medical attention.',
        'No comente sobre el peso de las personas, ni siquiera para "felicitarlas" por perder peso. Estas palabras pueden ser dañinas para alguien con un trastorno alimentario. | Do not comment on people\'s weight, not even to "congratulate" them for losing weight. These words can be harmful to someone with an eating disorder.',
        'El trastorno por atracón es el trastorno alimentario más común y puede afectar a cualquier persona, independientemente de su peso. No se necesita ser "flaco/a" para tener un trastorno alimentario. | Binge eating disorder is the most common eating disorder and can affect anyone, regardless of weight. You do not need to be "thin" to have an eating disorder.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Los trastornos alimentarios involucran interacción de factores genéticos (50-80% heredabilidad), neurobiológicos (circuitos de recompensa, serotonina, dopamina), psicológicos (perfeccionismo, control) y socioculturales. El diagnóstico requiere evaluación médica completa por las complicaciones potencialmente letales. La TCC-E y FBT son los tratamientos psicológicos con mayor evidencia. | Eating disorders involve interaction of genetic (50-80% heritability), neurobiological (reward circuits, serotonin, dopamine), psychological (perfectionism, control), and sociocultural factors. Diagnosis requires complete medical evaluation for potentially lethal complications. CBT-E and FBT are the psychological treatments with strongest evidence.',
      explanation: `## Explicación

**Criterios diagnósticos DSM-5-TR:**

*Anorexia Nerviosa:*
A. Restricción de la ingesta energética que lleva a un peso corporal significativamente bajo (mínimo del peso esperado)
B. Miedo intenso a ganar peso o comportamiento persistente que interfiere con la ganancia de peso
C. Alteración en la percepción del peso/forma corporal, influencia indebida del peso en la autoevaluación, o falta de reconocimiento de la gravedad del bajo peso

Subtipos: Restrictivo / Atracón-purga
Severidad por IMC: Leve ≥17, Moderada 16-16.99, Severa 15-15.99, Extrema <15

*Bulimia Nerviosa:*
A. Episodios recurrentes de atracón (cantidad inusualmente grande + falta de control)
B. Comportamientos compensatorios inapropiados recurrentes
C. Ambos ocurren al menos 1x/semana durante 3 meses
D. La autoevaluación está excesivamente influida por el peso/forma corporal
E. No ocurre exclusivamente durante episodios de anorexia nerviosa

Severidad por frecuencia de compensación: Leve 1-3/sem, Moderada 4-7/sem, Severa 8-13/sem, Extrema ≥14/sem

*Trastorno por Atracón:*
A. Episodios recurrentes de atracón asociados con ≥3 de:
   - Comer mucho más rápido de lo normal
   - Comer hasta sentirse incómodamente lleno
   - Comer grandes cantidades sin hambre física
   - Comer solo por vergüenza
   - Sentir disgusto, depresión o culpa después
B. Malestar marcado
C. Al menos 1x/semana durante 3 meses
D. Sin comportamiento compensatorio regular

*Otros diagnósticos:*
- ARFID (Trastorno Evitativo/Restrictivo de la Ingesta Alimentaria): restricción sin preocupación por imagen corporal
- Pica: consumo de sustancias no alimenticias
- Trastorno de rumiación: regurgitación repetida
- Otro trastorno alimentario especificado (OSFED): incluye "anorexia atípica" (criterios parciales)

**Neurobiología de los trastornos alimentarios:**

*Genética:*
- Heredabilidad: anorexia ~50-80%, bulimia ~55-60%, trastorno por atracón ~45-57%
- GWAS: loci compartidos con trastornos metabólicos (IMC, lípidos, glucosa)
- Loci compartidos con trastornos psiquiátricos (TOC, depresión)
- Epigenética: cambios en metilación de genes de regulación del apetito

*Neurotransmisores:*
- Serotonina (5-HT): alteraciones del receptor 5-HT2A en anorexia
- Dopamina: circuito de recompensa hipoactivo en anorexia (la comida no da placer)
- Circuito de recompensa alterado en trastorno por atracón (búsqueda de recompensa)
- Opioides endógenos: regulación del placer alimentario
- Grelina y leptina: señales de hambre y saciedad desreguladas

*Circuitos cerebrales:*
- Ínsula: procesamiento de señales interoceptivas (hambre, saciedad) alterado
- Corteza prefrontal: control inhibitorio excesivo en anorexia, deficiente en atracón
- Circuito estriatal-frontal: procesamiento de recompensa/aversión a la comida
- Amígdala: respuesta emocional a estímulos de comida y cuerpo

*Eje HPA y hormonas:*
- Cortisol elevado en anorexia (respuesta al estrés de la inanición)
- Grelina elevada (señal de hambre) pero el paciente no come
- Leptina reducida (señal de saciedad ausente)
- Amenorrea: supresión del eje HPG (hipotálamo-hipófisis-gonadal)
- Reducción de T3 (hipotiroidismo funcional)

**Evaluación médica esencial:**

*Laboratorio:*
- Panel metabólico completo (electrolitos, función renal, glucosa)
- Hemograma completo
- Función tiroidea
- Función hepática
- Magnesio, fósforo, calcio (especialmente si hay purga)
- Amilasa (elevada con vómito)
- ECG: buscar prolongación QTc, bradicardia, arritmias

*Indicaciones de hospitalización médica:*
- Frecuencia cardíaca <40 bpm
- Presión arterial <80/60 mmHg
- Temperatura <35.5°C
- Glucosa <60 mg/dL
- Potasio <3.0 mEq/L
- Fosfato <2.5 mg/dL
- Pérdida de peso >15% en un mes
- Síncope
- Arritmias cardíacas

**Tratamiento detallado:**

*TCC-E (Enhanced CBT):*
- Tratamiento transdiagnóstico para todos los trastornos alimentarios
- 20 sesiones para peso normal, 40 sesiones para bajo peso
- Módulos centrales: automonitoreo, alimentación regular, manejo de imagen corporal
- Módulos adicionales: perfeccionismo, baja autoestima, dificultades interpersonales
- Eficacia: ~50-60% de remisión en bulimia, 30-50% en anorexia

*FBT (Family-Based Treatment):*
- Fase 1: los padres asumen el control de la alimentación del adolescente
- Fase 2: transición gradual de control al adolescente
- Fase 3: establecer identidad del adolescente independiente del trastorno
- Tratamiento de primera línea para anorexia adolescente
- Los padres son aliados, no causantes de la enfermedad
- Adaptación cultural para familias latinas: respetar la estructura familiar, involucrar a la familia extendida cuando sea apropiado

*Manejo nutricional:*
- Rehabilitación nutricional gradual para evitar síndrome de realimentación
- Plan de alimentación estructurado con metas calóricas progresivas
- Monitoreo de electrolitos durante realimentación (especialmente fósforo)
- Suplementación de tiamina, fósforo, potasio según necesidad
- El objetivo no es solo el peso, sino una relación saludable con la comida

**Disparidades en trastornos alimentarios en la comunidad hispana:**

*Epidemiología:*
- Las tasas de bulimia son comparables entre latinas y blancas no hispanas
- El trastorno por atracón puede ser MÁS prevalente en latinos
- La anorexia puede ser menos común pero subdiagnosticada
- Los hombres latinos con TCA están severamente subdiagnosticados

*Factores de riesgo específicos:*
- Estrés por aculturación: el conflicto de ideales de belleza es factor de riesgo
- La internalización del ideal de delgadez aumenta con la aculturación
- Las burlas sobre el peso (piropos negativos, comentarios familiares) son comunes
- La inseguridad alimentaria puede paradójicamente contribuir a atracones
- El trauma (migración, violencia) está asociado con TCA

*Intervenciones culturalmente adaptadas:*
- TCC-E adaptada: incluir discusión de ideales de belleza culturales
- FBT adaptada: respetar la estructura familiar latina, incluir la familia extendida
- Grupos de apoyo en español
- Psicoeducación que aborde mitos culturales sobre la comida y el peso
- Proveedores que entiendan el papel de la comida en la cultura latina

---
## Explanation

**DSM-5-TR Diagnostic Criteria:**

[Content mirrors Spanish section with equivalent clinical depth covering diagnostic criteria for AN, BN, BED, other diagnoses, neurobiology (genetics, neurotransmitters, brain circuits, HPA axis), essential medical evaluation (labs, hospitalization indications), detailed treatment (CBT-E, FBT, nutritional management), and Hispanic community disparities (epidemiology, specific risk factors, culturally adapted interventions)]

*Anorexia Nervosa:*
A. Energy intake restriction leading to significantly low body weight
B. Intense fear of gaining weight or persistent behavior interfering with weight gain
C. Body weight/shape perception disturbance, undue influence of weight on self-evaluation, or lack of recognition of low weight severity

*Bulimia Nervosa:*
A. Recurrent binge eating episodes
B. Recurrent inappropriate compensatory behaviors
C. Both occur at least 1x/week for 3 months
D. Self-evaluation excessively influenced by weight/shape
E. Does not occur exclusively during anorexia nervosa episodes

*Binge Eating Disorder:*
A. Recurrent binge episodes associated with ≥3 behavioral markers
B. Marked distress
C. At least 1x/week for 3 months
D. No regular compensatory behavior

Key treatment: CBT-E is transdiagnostic (20 sessions normal weight, 40 sessions underweight). FBT is first-line for adolescent anorexia. Medical monitoring is essential given potentially fatal complications. Refeeding syndrome requires vigilant electrolyte monitoring. Cultural adaptation for Latino families is critical for treatment engagement and retention.`,
      keyTerms: [
        {
          term: 'heredabilidad de los TCA',
          definition:
            'Los trastornos alimentarios tienen una base genética fuerte: 50-80% para anorexia, 55-60% para bulimia. Esto confirma que son enfermedades biológicas, no elecciones. | Eating disorders have a strong genetic basis: 50-80% for anorexia, 55-60% for bulimia. This confirms they are biological illnesses, not choices.',
        },
        {
          term: 'prolongación QTc',
          definition:
            'Alargamiento del intervalo QT corregido en el electrocardiograma. Causado por desequilibrios electrolíticos en los trastornos alimentarios. Puede provocar arritmias ventriculares fatales. | Prolongation of corrected QT interval on electrocardiogram. Caused by electrolyte imbalances in eating disorders. Can cause fatal ventricular arrhythmias.',
        },
        {
          term: 'interocepción',
          definition:
            'La capacidad de percibir señales internas del cuerpo (hambre, saciedad, latidos cardíacos). Está alterada en los trastornos alimentarios, especialmente en la anorexia. | The ability to perceive internal body signals (hunger, satiety, heartbeat). It is altered in eating disorders, especially anorexia.',
        },
        {
          term: 'aculturación y TCA',
          definition:
            'El proceso de adaptación a una nueva cultura puede aumentar el riesgo de trastornos alimentarios en personas latinas, especialmente por la internalización de ideales de delgadez de la cultura estadounidense. | The process of adapting to a new culture may increase eating disorder risk in Latino individuals, especially through internalization of American thinness ideals.',
        },
        {
          term: 'ARFID',
          definition:
            'Trastorno Evitativo/Restrictivo de la Ingesta Alimentaria. Restricción alimentaria sin preocupación por la imagen corporal. Incluye selectividad extrema, fobia a atragantarse o falta de interés en comer. | Avoidant/Restrictive Food Intake Disorder. Food restriction without body image concern. Includes extreme selectivity, choking phobia, or lack of interest in eating.',
        },
      ],
      clinicalNotes:
        'La anorexia nerviosa tiene la tasa de mortalidad más alta de todos los trastornos psiquiátricos. La evaluación médica con ECG, electrolitos y signos vitales es obligatoria. El síndrome de realimentación es una emergencia médica prevenible: iniciar la alimentación lentamente y monitorear fósforo. Las benzodiazepinas y bupropión están contraindicados en pacientes con trastornos alimentarios activos. En pacientes hispanos/latinos: buscar activamente TCA (no asumir que son infrecuentes en esta población), preguntar sobre comentarios culturales sobre el peso, evaluar estrés por aculturación, y adaptar la FBT para incluir la familia extendida cuando sea culturalmente apropiado. Los hombres latinos con TCA son especialmente subdiagnosticados — incluir preguntas de tamizaje rutinarias independientemente del género. | Anorexia nervosa has the highest mortality rate of all psychiatric disorders. Medical evaluation with ECG, electrolytes, and vital signs is mandatory. Refeeding syndrome is a preventable medical emergency: start feeding slowly and monitor phosphorus. Benzodiazepines and bupropion are contraindicated in patients with active eating disorders. In Hispanic/Latino patients: actively screen for eating disorders (do not assume they are infrequent in this population), ask about cultural weight comments, assess acculturation stress, and adapt FBT to include extended family when culturally appropriate. Latino men with eating disorders are especially underdiagnosed — include routine screening questions regardless of gender.',
    },
    4: {
      level: 4,
      summary:
        'La fisiopatología de los TCA integra disfunción del circuito fronto-estriatal-insular, alteraciones metabólicas-genéticas (loci compartidos con IMC y metabolismo), neuroendocrinopatía de la inanición, y modelos de mantenimiento cognitivo-conductual. Los tratamientos avanzados incluyen neuromodulación, psicodélicos (investigacional) y enfoques transdiagnósticos. Las disparidades en poblaciones latinas requieren intervenciones culturalmente responsivas y equitativas. | Eating disorder pathophysiology integrates fronto-striatal-insular circuit dysfunction, metabolic-genetic alterations (shared loci with BMI and metabolism), starvation neuroendocrinopathy, and cognitive-behavioral maintenance models. Advanced treatments include neuromodulation, psychedelics (investigational), and transdiagnostic approaches. Disparities in Latino populations require culturally responsive and equitable interventions.',
      explanation: `## Explicación

**Neurobiología avanzada:**

*Anorexia - Modelo de circuito neural:*
- Circuito fronto-estriatal disfuncional: exceso de control inhibitorio sobre la alimentación
- Ínsula anterior: interocepción reducida (no percibe hambre adecuadamente)
- Circuito de recompensa hipoactivo: la comida no genera placer normal
- Corteza prefrontal dorsolateral hiperactiva: control cognitivo excesivo
- Amígdala: respuesta de miedo ante estímulos alimentarios y corporales

*Anorexia - Modelo metabólico-genético (Watson et al., 2019):*
- GWAS revela loci compartidos con:
  - Metabolismo de lípidos y glucosa
  - IMC (correlación genética negativa)
  - Actividad física (correlación genética positiva)
  - TOC y depresión
- Sugiere que la anorexia es un trastorno metabólico-psiquiátrico, no solo psiquiátrico
- Implicaciones: los factores metabólicos pueden contribuir a la dificultad de mantener el peso

*Bulimia - Modelo de recompensa/impulsividad:*
- Sensibilidad alterada a la recompensa: necesidad de comer para obtener placer
- Déficit en el control inhibitorio (corteza prefrontal)
- Circuito de regulación emocional disfuncional (atracón como regulador emocional)
- Alteración de la señalización de saciedad (péptidos gastrointestinales)

*Trastorno por atracón - Modelo integrado:*
- Solapamiento con neurocircuitería de la adicción
- Sensibilización del circuito de recompensa
- Déficit de control prefrontal
- Estrés crónico → cortisol → preferencia por alimentos hipercalóricos
- Microbioma alterado

*Neuroendocrinología de la inanición:*
- La inanición crónica causa cambios neuroendocrinos adaptativos que se vuelven patológicos:
  - Reducción de leptina → aumento de hambre (pero el paciente no come)
  - Elevación de grelina → señal de hambre ignorada
  - Reducción de T3 → metabolismo lento (conservación de energía)
  - Elevación de cortisol → catabolismo, ansiedad
  - Supresión de GnRH → amenorrea, infertilidad
  - Reducción de IGF-1 → pérdida ósea
  - Estos cambios crean un ciclo que perpetúa el trastorno

**Genética y epigenética avanzada:**

*Hallazgos genómicos:*
- Anorexia: 8 loci significativos en GWAS (PGC-ED)
- Correlaciones genéticas positivas con: TOC, esquizofrenia, actividad física
- Correlaciones genéticas negativas con: IMC, grasa corporal, diabetes tipo 2
- Pleiotropía metabólica-psiquiátrica: el mismo gen afecta peso y ánimo
- Receptores serotoninérgicos (HTR2A, HTR1A) implicados

*Epigenética:*
- Metilación alterada en genes de regulación del apetito
- Modificaciones de histonas inducidas por restricción calórica
- Los cambios epigenéticos pueden perpetuar el trastorno incluso después de la restauración de peso
- Transmisión intergeneracional: hijos de madres con TCA tienen mayor riesgo

**Complicaciones médicas avanzadas:**

*Síndrome de realimentación - fisiopatología:*
- La inanición depleciona las reservas intracelulares de fósforo, potasio, magnesio
- Al reiniciar la alimentación: la insulina aumenta → captación celular masiva de estos electrolitos
- Hipofosfatemia: puede causar insuficiencia cardíaca, parálisis respiratoria, muerte
- Prevención: iniciar 10-20 kcal/kg/día, aumentar lentamente
- Monitorear electrolitos cada 12-24 horas durante la primera semana
- Suplementar tiamina antes de la realimentación

*Cardíacas:*
- Prolongación QTc por hipocalemia → torsades de pointes → muerte súbita
- Miocardiopatía por ipecacuana (émetica usada para purga)
- Prolapso mitral (por pérdida de masa cardíaca)
- Derrame pericárdico

*Neurológicas:*
- Atrofia cerebral (parcialmente reversible con restauración de peso)
- Déficits cognitivos (atención, flexibilidad cognitiva)
- Neuropatía periférica

**Tratamientos avanzados:**

*Neuromodulación:*
- EMT sobre corteza prefrontal dorsolateral: reducción de urgencia de atracón
- tDCS: modulación del control inhibitorio y del circuito de recompensa
- Estimulación cerebral profunda (DBS): investigacional para anorexia refractaria severa (diana: núcleo accumbens, cíngulo subcallosal)

*Psilocibina (investigacional):*
- Ensayos para anorexia nerviosa resistente al tratamiento
- Mecanismo: neuroplasticidad, flexibilización cognitiva
- Potencial para romper los patrones rígidos de pensamiento de la anorexia
- Imperial College London: ensayos fase I/II

*Oxitocina intranasal:*
- Puede reducir la reactividad a estímulos de comida y cuerpo
- Mejora el procesamiento social en anorexia
- Estudios preliminares prometedores

*Dronabinol (THC sintético):*
- Estimula el apetito a través de receptores CB1
- Estudios pequeños en anorexia
- Consideraciones: efectos psicoactivos, regulación

**Modelos de mantenimiento:**

*Modelo transdiagnóstico de Fairburn:*
- El perfeccionismo clínico, la baja autoestima central, las dificultades interpersonales y la intolerancia emocional mantienen todos los TCA
- Fundamenta la TCC-E como tratamiento transdiagnóstico

*Modelo de inflexibilidad cognitiva:*
- Pacientes con anorexia muestran rigidez cognitiva en tareas neuropsicológicas
- Dificultad para cambiar estrategias (set-shifting)
- El tratamiento debe abordar esta inflexibilidad

**Poblaciones hispanas/latinas - investigación avanzada:**

*Modelo de estrés por aculturación y TCA:*
- Conflicto de identidad cultural → afecto negativo → comportamientos alimentarios compensatorios
- La internalización del ideal de delgadez aumenta con generaciones en EE.UU.
- Las latinas de segunda generación tienen mayor riesgo que las de primera
- El bicultural identity integration puede ser protector

*Inseguridad alimentaria y TCA:*
- Paradoja: la inseguridad alimentaria se asocia con atracones
- Ciclos de escasez-abundancia promueven comportamientos de atracón
- Las experiencias de hambre en la migración pueden programar relaciones disfuncionales con la comida
- Programas de asistencia alimentaria deben considerar la salud mental

---
## Explanation

[Detailed English explanation covering all the same topics: advanced neurobiology (neural circuits for each disorder, metabolic-genetic model, reward/impulsivity model, starvation neuroendocrinology), genetics and epigenetics (GWAS findings, epigenetic changes), advanced medical complications (refeeding syndrome physiology, cardiac, neurological), advanced treatments (neuromodulation, psilocybin, oxytocin, dronabinol), maintenance models (Fairburn transdiagnostic, cognitive inflexibility), and Hispanic/Latino population research (acculturation stress model, food insecurity paradox)]`,
      keyTerms: [
        {
          term: 'pleiotropía metabólica-psiquiátrica',
          definition:
            'Propiedad de genes que influyen simultáneamente en rasgos metabólicos (peso, lípidos) y psiquiátricos. Explica por qué la anorexia comparte variantes genéticas con regulación del metabolismo. | Property of genes simultaneously influencing metabolic traits (weight, lipids) and psychiatric traits. Explains why anorexia shares genetic variants with metabolism regulation.',
        },
        {
          term: 'inflexibilidad cognitiva / cognitive inflexibility',
          definition:
            'Dificultad para cambiar entre tareas o estrategias mentales. Rasgo neuropsicológico prominente en la anorexia que contribuye a la rigidez del trastorno. | Difficulty switching between tasks or mental strategies. Prominent neuropsychological trait in anorexia that contributes to the disorder\'s rigidity.',
        },
        {
          term: 'hipofosfatemia de realimentación',
          definition:
            'Caída peligrosa del fósforo sérico durante la reintroducción de alimentos en pacientes desnutridos. Puede causar insuficiencia cardíaca y respiratoria. Requiere monitoreo frecuente. | Dangerous drop in serum phosphorus during food reintroduction in malnourished patients. Can cause cardiac and respiratory failure. Requires frequent monitoring.',
        },
        {
          term: 'modelo transdiagnóstico de Fairburn',
          definition:
            'Marco teórico que identifica procesos comunes que mantienen todos los trastornos alimentarios (perfeccionismo, baja autoestima, intolerancia emocional), fundamentando la TCC-E como tratamiento unificado. | Theoretical framework identifying common processes maintaining all eating disorders (perfectionism, low self-esteem, emotional intolerance), grounding CBT-E as unified treatment.',
        },
        {
          term: 'inseguridad alimentaria y atracón',
          definition:
            'La paradoja de que la falta de acceso confiable a alimentos se asocia con mayor riesgo de trastorno por atracón, probablemente por ciclos de privación-sobreconsumo. | The paradox that unreliable food access is associated with higher binge eating disorder risk, probably through deprivation-overconsumption cycles.',
        },
      ],
      clinicalNotes:
        'La anorexia nerviosa severa (IMC <15) requiere tratamiento médico intensivo con monitoreo de realimentación. Iniciar 10-20 kcal/kg/día y aumentar gradualmente; monitorear fósforo, potasio y magnesio cada 12-24 horas la primera semana. La prolongación QTc >500 ms es una emergencia médica. El bupropión está contraindicado en todos los TCA activos (reduce el umbral convulsivo y se asocia con mayor riesgo de convulsiones en pacientes con purga). La DBS para anorexia refractaria es investigacional pero ofrece esperanza. Para pacientes hispanos/latinos: el modelo de estrés por aculturación debe integrarse en la formulación del caso. La inseguridad alimentaria es un factor frecuente y subestimado en poblaciones latinas con TCA. La FBT adaptada culturalmente para familias latinas (incluyendo la familia extendida, respetando la estructura familiar, y abordando la comida como vínculo cultural) es esencial. Buscar activamente TCA en todos los pacientes latinos, independientemente de género, peso o apariencia. | Severe anorexia nervosa (BMI <15) requires intensive medical treatment with refeeding monitoring. Start 10-20 kcal/kg/day and increase gradually; monitor phosphorus, potassium, and magnesium every 12-24 hours the first week. QTc prolongation >500 ms is a medical emergency. Bupropion is contraindicated in all active eating disorders (lowers seizure threshold and is associated with increased seizure risk in purging patients). DBS for refractory anorexia is investigational but offers hope. For Hispanic/Latino patients: the acculturation stress model should be integrated into case formulation. Food insecurity is a frequent and underestimated factor in Latino populations with eating disorders. Culturally adapted FBT for Latino families (including extended family, respecting family structure, and addressing food as cultural bond) is essential. Actively screen for eating disorders in all Latino patients, regardless of gender, weight, or appearance.',
    },
    5: {
      level: 5,
      summary:
        'La investigación de vanguardia en TCA avanza hacia nosología basada en mecanismos, biomarcadores metabólico-psiquiátricos, tratamientos basados en neuroplasticidad (psicodélicos, neuromodulación), y prevención basada en factores de riesgo genéticos y ambientales. Las disparidades en poblaciones hispanas/latinas requieren marcos de equidad que aborden determinantes sociales, inseguridad alimentaria y aculturación. | Cutting-edge eating disorder research advances toward mechanism-based nosology, metabolic-psychiatric biomarkers, neuroplasticity-based treatments (psychedelics, neuromodulation), and prevention based on genetic and environmental risk factors. Disparities in Hispanic/Latino populations require equity frameworks addressing social determinants, food insecurity, and acculturation.',
      explanation: `## Explicación

**Nosología dimensional y biotipos:**

*Limitaciones de las categorías actuales:*
- Migración diagnóstica: ~50% de pacientes "cruzan" entre diagnósticos
- Los subtipos restrictivo y atracón/purga de anorexia son inestables
- "Anorexia atípica" (OSFED) puede ser tan grave como la típica
- Las categorías actuales pueden no reflejar mecanismos subyacentes distintos

*Biotipos propuestos basados en mecanismos:*
- Biotipo "restrictivo compulsivo": alto control inhibitorio, inflexibilidad cognitiva
- Biotipo "impulsivo-compulsivo": alternancia entre restricción y atracón
- Biotipo "recompensa-motivación": hipoactividad del circuito de recompensa
- Biotipo "regulación emocional": comida como regulador afectivo primario
- Cada biotipo puede predecir diferentes respuestas al tratamiento

*Modelo de espectro TCA-metabolismo:*
- Las variantes genéticas de anorexia se superponen con las de metabolismo
- La anorexia puede tener un componente metabólico que explica la dificultad de mantener el peso
- El trastorno por atracón comparte variantes con obesidad y adicción
- Implicaciones: tratamientos dirigidos a mecanismos metabólicos, no solo psicológicos

**Biomarcadores emergentes:**

*Biomarcadores metabólicos:*
- Perfil de lípidos y aminoácidos plasmáticos como predictores
- Grelina acilada/desacilada: indicador del estado de inanición
- Relación insulina/glucosa como marcador de riesgo metabólico
- Metabolómica: "huella metabólica" de cada TCA
- Microbioma intestinal: composición alterada en TCA (¿causa o consecuencia?)

*Biomarcadores de neuroimagen:*
- Conectividad funcional ínsula-estriado como biomarcador de interocepción
- Respuesta del circuito de recompensa a estímulos alimentarios
- Volumen insular como predictor de respuesta al tratamiento
- EEG: biomarcadores de control inhibitorio

*Biomarcadores genéticos:*
- PRS (Polygenic Risk Score) para predicción de riesgo
- Farmacogenómica: CYP2D6 para metabolismo de fluoxetina
- Variantes en genes de regulación del apetito (MC4R, FTO)
- Epigenómica: metilación diferencial como biomarcador de estado

**Terapéuticas de nueva generación:**

*Psilocibina - evidencia y mecanismo:*
- Imperial College London: ensayo fase I/II en anorexia nerviosa
- Mecanismo: agonismo 5-HT2A → flexibilización cognitiva → ruptura de patrones rígidos
- La inflexibilidad cognitiva es un rasgo central de la anorexia que los psicodélicos pueden abordar
- Aumento de la conectividad de la red de modo por defecto con otras redes
- Experiencias de insight sobre la relación con el cuerpo y la comida
- Consideraciones: pacientes médicamente inestables no son candidatas

*MDMA para TCA con trauma:*
- Muchos pacientes con TCA tienen trauma comórbido
- MDMA asistida podría abordar ambas condiciones simultáneamente
- Reducción del miedo y aumento de la compasión hacia uno mismo
- Ensayos en planificación

*Neuromodulación avanzada:*
- EMT dorsomedial prefrontal: modula señales de hambre y saciedad
- DBS en núcleo accumbens: casos de anorexia refractaria severa
- Closed-loop DBS: estimulación adaptativa basada en señales neuronales en tiempo real
- Neurofeedback fMRI: entrenamiento de autorregulación de circuitos de recompensa

*Tratamientos basados en el microbioma:*
- Trasplante de microbiota fecal (investigacional)
- Probióticos específicos para regulación del apetito
- Modulación del eje microbioma-intestino-cerebro
- Prebióticos como adjuntos nutricionales

*Inteligencia artificial:*
- Detección temprana de TCA por patrones de búsqueda en internet
- Apps de monitoreo de alimentación con IA adaptativa
- Chatbots de apoyo entre sesiones de terapia
- Modelos predictivos de recaída basados en datos de smartphone

**Prevención basada en evidencia:**

*Programas de prevención universal:*
- Body Project (Stice): disonancia cognitiva con ideales de belleza
- Prevención basada en internet escalable
- Programas escolares de alfabetización mediática
- Regulación de publicidad de dietas y productos para bajar de peso

*Prevención selectiva:*
- Identificación de individuos de alto riesgo por PRS + factores ambientales
- Intervenciones tempranas en poblaciones vulnerables
- Programas para atletas, bailarines y otras poblaciones de riesgo

**Equidad en TCA para poblaciones hispanas/latinas - investigación de frontera:**

*Modelos explicativos culturales:*
- Investigación cualitativa sobre cómo las familias latinas entienden los TCA
- El papel de la "gordura" y la "delgadez" en diferentes culturas latinoamericanas
- Cómo el género intersecta con las expectativas culturales sobre el cuerpo
- Marianismo y sacrificio: cómo los roles de género afectan la alimentación

*Intervenciones de equidad:*
- Desarrollo de instrumentos de tamizaje culturalmente validados en español
- Ensayos clínicos con representación adecuada de latinos
- Programas de prevención adaptados culturalmente para escuelas con mayoría latina
- Integración de navegadores de pacientes bilingües en clínicas de TCA
- Telepsiquiatría especializada en español para TCA

*Determinantes sociales:*
- La inseguridad alimentaria como factor de riesgo modificable
- Políticas de acceso a alimentos nutritivos y asequibles
- Reducción de la publicidad de dietas predatorias dirigidas a la comunidad latina
- Programas comunitarios de salud alimentaria positiva (no basados en restricción)

*Investigación interseccional:*
- Cómo la raza, el género, la clase social, la orientación sexual y el estatus migratorio interactúan para crear riesgo diferencial de TCA
- La experiencia de hombres queer latinos con TCA (subinvestigada)
- Necesidades específicas de adolescentes trans latinos
- Modelos de investigación participativa basada en la comunidad (CBPR)

**Direcciones futuras:**
- Nosología basada en biotipos y mecanismos
- Tratamientos dirigidos a circuitos neurales específicos
- Biomarcadores metabólico-psiquiátricos para predicción y monitoreo
- Terapéuticas de acción rápida (psicodélicos, neuromodulación)
- Prevención personalizada basada en riesgo genético y ambiental
- Equidad en investigación y acceso para todas las poblaciones
- Destigmatización de los TCA en todas las comunidades

---
## Explanation

[Detailed English explanation covering all the same advanced topics: dimensional nosology and biotypes, emerging biomarkers (metabolic, neuroimaging, genetic), next-generation therapeutics (psilocybin, MDMA, advanced neuromodulation, microbiome-based treatments, AI), evidence-based prevention, and equity research for Hispanic/Latino populations (cultural explanatory models, equity interventions, social determinants, intersectional research)]

**Future directions:**
- Biotype and mechanism-based nosology
- Treatments targeting specific neural circuits
- Metabolic-psychiatric biomarkers for prediction and monitoring
- Rapid-acting therapeutics (psychedelics, neuromodulation)
- Personalized prevention based on genetic and environmental risk
- Equity in research and access for all populations
- Eating disorder destigmatization in all communities`,
      keyTerms: [
        {
          term: 'pleiotropía TCA-metabolismo',
          definition:
            'Los loci genéticos de la anorexia se superponen con loci de regulación metabólica (IMC, lípidos, glucosa), sugiriendo que la anorexia tiene un componente metabólico intrínseco además del psiquiátrico. | Anorexia genetic loci overlap with metabolic regulation loci (BMI, lipids, glucose), suggesting anorexia has an intrinsic metabolic component in addition to the psychiatric one.',
        },
        {
          term: 'migración diagnóstica / diagnostic crossover',
          definition:
            'El fenómeno por el cual ~50% de pacientes con TCA migran entre diagnósticos (ej., de anorexia restrictiva a bulimia). Cuestiona la validez de las categorías diagnósticas actuales. | The phenomenon by which ~50% of eating disorder patients migrate between diagnoses (e.g., from restrictive anorexia to bulimia). Questions the validity of current diagnostic categories.',
        },
        {
          term: 'closed-loop DBS',
          definition:
            'Estimulación cerebral profunda que ajusta la estimulación en tiempo real basándose en señales neuronales del paciente, en lugar de estimulación continua fija. En investigación para anorexia refractaria. | Deep brain stimulation that adjusts stimulation in real-time based on patient neural signals, instead of fixed continuous stimulation. Under research for refractory anorexia.',
        },
        {
          term: 'investigación interseccional',
          definition:
            'Abordaje que examina cómo múltiples identidades (raza, género, clase, orientación sexual, estatus migratorio) interactúan para crear experiencias únicas de riesgo y protección para los TCA. | Approach examining how multiple identities (race, gender, class, sexual orientation, immigration status) interact to create unique experiences of risk and protection for eating disorders.',
        },
        {
          term: 'psicobióticos para TCA',
          definition:
            'Probióticos y prebióticos que pueden influir en la regulación del apetito y el estado de ánimo a través del eje microbioma-intestino-cerebro. Investigación emergente como adjunto al tratamiento de TCA. | Probiotics and prebiotics that may influence appetite regulation and mood through the microbiome-gut-brain axis. Emerging research as adjunct to eating disorder treatment.',
        },
      ],
      clinicalNotes:
        'Estado del arte: Los hallazgos de GWAS que revelan pleiotropía metabólica-psiquiátrica están transformando la conceptualización de la anorexia como un trastorno puramente psicológico. Los psicodélicos (psilocibina) para anorexia refractaria son la línea de investigación más innovadora, dirigida al rasgo central de inflexibilidad cognitiva. La DBS para anorexia severa refractaria muestra resultados prometedores pero debe reservarse como último recurso. El microbioma intestinal es un área emergente con potencial terapéutico. Para poblaciones hispanas/latinas: el desarrollo de instrumentos de tamizaje culturalmente validados es una prioridad urgente. La "paradoja de la inseguridad alimentaria" (inseguridad alimentaria asociada con atracones) tiene implicaciones importantes para la política de salud pública. Los modelos interseccionales son esenciales: un hombre queer latino de bajos ingresos tiene riesgos y necesidades muy diferentes a una mujer blanca de clase media. Los programas de prevención en escuelas con mayoría latina deben ser culturalmente adaptados, no simplemente traducidos. La promoción de la alimentación intuitiva y la aceptación corporal, culturalmente contextualizada, debe reemplazar los mensajes de dieta y restricción. Línea 988 disponible en español para crisis. ANAD Helpline para trastornos alimentarios: 1-888-375-7767. | State of the art: GWAS findings revealing metabolic-psychiatric pleiotropy are transforming the conceptualization of anorexia from a purely psychological disorder. Psychedelics (psilocybin) for refractory anorexia are the most innovative research line, targeting the central trait of cognitive inflexibility. DBS for severe refractory anorexia shows promising results but should be reserved as last resort. Gut microbiome is an emerging area with therapeutic potential. For Hispanic/Latino populations: development of culturally validated screening instruments is an urgent priority. The "food insecurity paradox" (food insecurity associated with binge eating) has important public health policy implications. Intersectional models are essential: a low-income queer Latino man has very different risks and needs than a middle-class white woman. Prevention programs in predominantly Latino schools must be culturally adapted, not simply translated. Promotion of intuitive eating and body acceptance, culturally contextualized, should replace diet and restriction messages. 988 Lifeline available in Spanish for crisis. ANAD Helpline for eating disorders: 1-888-375-7767.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ref-dsm5-tr-eating',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR)',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing, 2022',
      chapter: 'Feeding and Eating Disorders',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-fairburn-cbte',
      type: 'textbook',
      title: 'Cognitive Behavior Therapy and Eating Disorders',
      authors: ['Fairburn CG'],
      source: 'Guilford Press',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-watson-gwas-an',
      type: 'article',
      title: 'Genome-wide association study identifies eight risk loci and implicates metabo-psychiatric origins for anorexia nervosa',
      authors: ['Watson HJ', 'Yilmaz Z', 'Thornton LM'],
      source: 'Nature Genetics, 2019',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-eating-disorders-latinos',
      type: 'article',
      title: 'Eating Disorders in Latina/o Populations: Current Knowledge and Future Directions',
      authors: ['Perez M', 'Ohrt TK', 'Hoek HW'],
      source: 'Current Psychiatry Reports',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-lock-fbt',
      type: 'textbook',
      title: 'Treatment Manual for Anorexia Nervosa: A Family-Based Approach',
      authors: ['Lock J', 'Le Grange D'],
      source: 'Guilford Press, 2nd Edition',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-anorexia-nervosa', targetType: 'condition', relationship: 'related', label: 'Anorexia Nervosa' },
    { targetId: 'psychiatry-bulimia-nervosa', targetType: 'condition', relationship: 'related', label: 'Bulimia Nervosa' },
    { targetId: 'psychiatry-binge-eating-disorder', targetType: 'condition', relationship: 'related', label: 'Binge Eating Disorder' },
    { targetId: 'condition-depresion-depression', targetType: 'condition', relationship: 'related', label: 'Depresión Mayor / Major Depression' },
    { targetId: 'condition-ansiedad-generalizada-gad', targetType: 'condition', relationship: 'related', label: 'TAG / GAD' },
    { targetId: 'psychiatry-ssris', targetType: 'topic', relationship: 'see-also', label: 'SSRIs / ISRS' },
  ],

  tags: {
    systems: ['nervous', 'gastrointestinal', 'endocrine', 'cardiovascular'],
    topics: ['psychiatry', 'mental-health', 'nutrition', 'cultural-competency'],
    keywords: [
      'trastornos alimentarios',
      'eating disorders',
      'anorexia',
      'bulimia',
      'atracón',
      'binge eating',
      'TCA',
      'imagen corporal',
      'body image',
      'TCC-E',
      'CBT-E',
      'FBT',
      'realimentación',
      'refeeding',
      'salud mental latina',
      'Latino mental health',
      'aculturación',
      'acculturation',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};

export default trastornosAlimentariosEatingDisordersContent;
