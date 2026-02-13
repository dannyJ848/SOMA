/**
 * Uso de Sustancias - Alcohol | Substance Use - Alcohol
 *
 * Contenido educativo bilingue sobre el uso de alcohol, trastorno por uso de
 * alcohol, efectos en la salud y opciones de tratamiento.
 * Bilingual educational content on alcohol use, alcohol use disorder,
 * health effects, and treatment options.
 *
 * Spanish-first with English translations separated by " | "
 * Culturally sensitive content addressing alcohol use patterns and barriers
 * to treatment in Latino communities.
 */

import { EducationalContent } from '../types';

export const substanceUseAlcoholContent: EducationalContent = {
  id: 'topic-substance-use-alcohol',
  type: 'topic',
  name: 'Substance Use - Alcohol | Uso de Sustancias - Alcohol',
  nameEs: 'Uso de Sustancias - Alcohol',
  alternateNames: [
    'Alcoholismo | Alcoholism',
    'Trastorno por Uso de Alcohol | Alcohol Use Disorder',
    'AUD | TUA',
    'Abuso de Alcohol | Alcohol Abuse',
    'Dependencia al Alcohol | Alcohol Dependence',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'El alcohol puede afectar tu salud de muchas maneras. Beber demasiado puede danar tu cuerpo, tu mente y tus relaciones. Si sientes que no puedes controlar cuanto bebes, hay ayuda disponible y no estas solo/a. | Alcohol can affect your health in many ways. Drinking too much can harm your body, your mind, and your relationships. If you feel you cannot control how much you drink, help is available and you are not alone.',
      explanation: `**Que es el uso problematico de alcohol? | What is problematic alcohol use?**

El alcohol es una sustancia legal que muchas personas consumen socialmente. Pero cuando alguien bebe demasiado o con demasiada frecuencia, puede convertirse en un problema serio de salud. El trastorno por uso de alcohol (TUA) es una condicion medica -- no es falta de voluntad ni debilidad de caracter. | Alcohol is a legal substance that many people consume socially. But when someone drinks too much or too frequently, it can become a serious health problem. Alcohol use disorder (AUD) is a medical condition -- it is not a lack of willpower or weakness of character.

**Senales de que el alcohol puede ser un problema | Signs that alcohol may be a problem:**

- Beber mas de lo que planeabas | Drinking more than you planned
- Intentar dejar de beber pero no poder | Trying to stop drinking but being unable to
- Pasar mucho tiempo bebiendo o recuperandote de beber | Spending a lot of time drinking or recovering from drinking
- Sentir deseos fuertes de beber | Feeling strong cravings to drink
- El alcohol causa problemas en tu trabajo, escuela o hogar | Alcohol causing problems at work, school, or home
- Seguir bebiendo aunque cause problemas con tu familia o amigos | Continuing to drink even though it causes problems with family or friends
- Necesitar beber mas para sentir el mismo efecto | Needing to drink more to feel the same effect
- Sentirte mal cuando dejas de beber (temblores, sudor, nauseas) | Feeling sick when you stop drinking (shaking, sweating, nausea)

**Cuanto es "demasiado"? | How much is "too much"?**

- Para mujeres: Mas de 1 bebida al dia o 7 por semana | For women: More than 1 drink per day or 7 per week
- Para hombres: Mas de 2 bebidas al dia o 14 por semana | For men: More than 2 drinks per day or 14 per week
- Una "bebida estandar" es: una cerveza de 12 oz, una copa de vino de 5 oz, o un trago de licor de 1.5 oz | A "standard drink" is: one 12 oz beer, one 5 oz glass of wine, or one 1.5 oz shot of liquor

**Un mensaje para nuestra comunidad | A message for our community:**

En muchas familias latinas, el alcohol es parte de celebraciones y reuniones. Esto puede hacer dificil reconocer cuando alguien tiene un problema. No se trata de juzgar nuestras tradiciones, sino de cuidar nuestra salud. En nuestra cultura, a veces se acepta que los hombres beban mucho, pero esto puede causar serios problemas de salud. Tambien, las mujeres latinas pueden esconder su consumo de alcohol por verguenza, lo cual retrasa buscar ayuda. | In many Latino families, alcohol is part of celebrations and gatherings. This can make it difficult to recognize when someone has a problem. It is not about judging our traditions, but about taking care of our health. In our culture, heavy drinking by men is sometimes accepted, but this can cause serious health problems. Also, Latina women may hide their alcohol use out of shame, which delays seeking help.

**Efectos del alcohol en tu cuerpo | Effects of alcohol on your body:**

- **Higado | Liver**: Puede causar enfermedad del higado y cirrosis | Can cause liver disease and cirrhosis
- **Corazon | Heart**: Puede subir la presion arterial y danar el corazon | Can raise blood pressure and damage the heart
- **Cerebro | Brain**: Afecta la memoria, el juicio y la capacidad de pensar claramente | Affects memory, judgment, and the ability to think clearly
- **Sistema inmunologico | Immune system**: Te hace mas vulnerable a enfermedades | Makes you more vulnerable to illness
- **Salud mental | Mental health**: Puede empeorar la depresion y la ansiedad | Can worsen depression and anxiety

**Donde conseguir ayuda | Where to get help:**

- **SAMHSA Linea Nacional de Ayuda | SAMHSA National Helpline**: 1-800-662-4357 (espanol disponible | Spanish available) -- Gratis, confidencial, 24/7
- **Alcoholicos Anonimos en espanol | AA in Spanish**: Busca reuniones en espanol en tu area | Look for Spanish-language meetings in your area
- **988 Linea de Crisis | 988 Crisis Line**: Llama o envia texto al 988 | Call or text 988
- Habla con tu doctor -- hay medicamentos que pueden ayudar | Talk to your doctor -- there are medications that can help

Pedir ayuda es un acto de valentia y amor hacia tu familia. | Asking for help is an act of courage and love for your family.`,
      keyTerms: [
        {
          term: 'trastorno por uso de alcohol | alcohol use disorder',
          definition:
            'Una condicion medica en la que una persona no puede controlar su consumo de alcohol a pesar de las consecuencias negativas | A medical condition where a person cannot control their alcohol use despite negative consequences',
        },
        {
          term: 'tolerancia | tolerance',
          definition:
            'Cuando necesitas beber mas alcohol para sentir el mismo efecto | When you need to drink more alcohol to feel the same effect',
        },
        {
          term: 'abstinencia | withdrawal',
          definition:
            'Sintomas fisicos y emocionales que ocurren cuando dejas de beber despues de beber mucho | Physical and emotional symptoms that occur when you stop drinking after heavy use',
        },
        {
          term: 'bebida estandar | standard drink',
          definition:
            'Una medida de alcohol: una cerveza de 12 oz, una copa de vino de 5 oz, o un trago de 1.5 oz de licor | A measure of alcohol: one 12 oz beer, one 5 oz glass of wine, or one 1.5 oz shot of liquor',
        },
        {
          term: 'cirrosis | cirrhosis',
          definition:
            'Dano permanente al higado causado por el uso excesivo de alcohol u otras causas | Permanent liver damage caused by excessive alcohol use or other causes',
        },
      ],
      analogies: [
        'El alcohol afecta tu cerebro como un control de volumen que baja todas tus funciones -- reacciones, juicio, coordinacion. Entre mas bebes, mas baja el volumen. | Alcohol affects your brain like a volume control that turns down all your functions -- reactions, judgment, coordination. The more you drink, the lower the volume goes.',
        'Pensar que puedes "manejar" el alcohol cuando ya es un problema es como pensar que puedes manejar la diabetes sin medicamento. Es una enfermedad que necesita tratamiento profesional. | Thinking you can "handle" alcohol when it is already a problem is like thinking you can manage diabetes without medication. It is a disease that needs professional treatment.',
        'La dependencia al alcohol es como un camino cuesta abajo -- al principio es facil parar, pero entre mas avanzas, mas dificil es detenerse. Por eso es importante buscar ayuda temprano. | Alcohol dependence is like a downhill road -- at first it is easy to stop, but the further you go, the harder it is to slow down. That is why it is important to seek help early.',
      ],
      examples: [
        'Un padre de familia que bebe varias cervezas cada noche despues del trabajo puede pensar que es normal porque "todos lo hacen." Pero si nota que necesita mas cervezas para relajarse, puede ser una senal de tolerancia. | A father who drinks several beers every night after work may think it is normal because "everyone does it." But if he notices he needs more beers to relax, it could be a sign of tolerance.',
        'Una abuela que toma medicamentos para la presion y tambien bebe alcohol puede estar en riesgo de interacciones peligrosas. Es importante decirle al doctor todo lo que tomas. | A grandmother who takes blood pressure medication and also drinks alcohol may be at risk for dangerous interactions. It is important to tell your doctor everything you take.',
        'En reuniones familiares, un joven puede sentir presion para beber. Es importante saber que decir "no" esta bien y no te hace menos. | At family gatherings, a young person may feel pressure to drink. It is important to know that saying "no" is okay and does not make you less.',
      ],
      patientCounselingPoints: [
        'El alcoholismo es una enfermedad medica, no una falla moral. | Alcoholism is a medical disease, not a moral failing.',
        'Hay medicamentos aprobados que pueden ayudar a reducir los deseos de beber. | There are approved medications that can help reduce cravings to drink.',
        'Nunca dejes de beber de golpe si bebes mucho -- la abstinencia puede ser peligrosa. Habla con un doctor primero. | Never stop drinking suddenly if you drink heavily -- withdrawal can be dangerous. Talk to a doctor first.',
        'Buscar ayuda es la decision mas fuerte que puedes tomar por ti y tu familia. | Seeking help is the strongest decision you can make for yourself and your family.',
      ],
    },
    2: {
      level: 2,
      summary:
        'El trastorno por uso de alcohol (TUA) es una condicion medica caracterizada por un patron problematico de consumo de alcohol que causa malestar clinicamente significativo. Involucra cambios en la quimica del cerebro y tiene tratamientos efectivos incluyendo terapia, medicamentos y grupos de apoyo. | Alcohol use disorder (AUD) is a medical condition characterized by a problematic pattern of alcohol use causing clinically significant distress. It involves changes in brain chemistry and has effective treatments including therapy, medications, and support groups.',
      explanation: `**Entendiendo el trastorno por uso de alcohol | Understanding alcohol use disorder:**

El alcohol es un depresor del sistema nervioso central. Esto significa que hace mas lento el funcionamiento del cerebro. Cuando alguien bebe regularmente, el cerebro se adapta a la presencia del alcohol, lo que lleva a la tolerancia y eventualmente a la dependencia. | Alcohol is a central nervous system depressant. This means it slows down brain function. When someone drinks regularly, the brain adapts to the presence of alcohol, leading to tolerance and eventually dependence.

**Como el alcohol afecta el cerebro | How alcohol affects the brain:**

- Aumenta el efecto del GABA (un quimico que calma el cerebro) | Increases the effect of GABA (a chemical that calms the brain)
- Bloquea el glutamato (un quimico que excita el cerebro) | Blocks glutamate (a chemical that excites the brain)
- Libera dopamina en el sistema de recompensa (causa placer temporal) | Releases dopamine in the reward system (causes temporary pleasure)
- Con el uso cronico, el cerebro se adapta y necesita alcohol para funcionar "normalmente" | With chronic use, the brain adapts and needs alcohol to function "normally"

**Espectro del trastorno por uso de alcohol | Spectrum of alcohol use disorder:**

- **Leve | Mild**: 2-3 sintomas del DSM-5 | 2-3 DSM-5 symptoms
- **Moderado | Moderate**: 4-5 sintomas | 4-5 symptoms
- **Severo | Severe**: 6 o mas sintomas | 6 or more symptoms

**Efectos en la salud por sistema | Health effects by system:**

*Higado | Liver:*
- Higado graso (esteatosis) -- reversible | Fatty liver (steatosis) -- reversible
- Hepatitis alcoholica -- inflamacion del higado | Alcoholic hepatitis -- liver inflammation
- Cirrosis -- cicatrizacion permanente del higado | Cirrhosis -- permanent scarring of the liver

*Sistema cardiovascular | Cardiovascular system:*
- Hipertension | Hypertension
- Cardiomiopatia | Cardiomyopathy
- Arritmias | Arrhythmias
- Mayor riesgo de accidente cerebrovascular | Increased stroke risk

*Sistema nervioso | Nervous system:*
- Neuropatia periferica | Peripheral neuropathy
- Deterioro cognitivo | Cognitive impairment
- Encefalopatia de Wernicke-Korsakoff (por deficiencia de tiamina) | Wernicke-Korsakoff encephalopathy (from thiamine deficiency)

*Sistema digestivo | Digestive system:*
- Gastritis y ulceras | Gastritis and ulcers
- Pancreatitis | Pancreatitis
- Mayor riesgo de canceres digestivos | Increased risk of digestive cancers

*Salud mental | Mental health:*
- Empeora la depresion y ansiedad | Worsens depression and anxiety
- Aumenta el riesgo de suicidio | Increases suicide risk
- Insomnio y trastornos del sueno | Insomnia and sleep disorders

**Opciones de tratamiento | Treatment options:**

*Desintoxicacion medica | Medical detox:*
- Supervision medica para manejar la abstinencia | Medical supervision to manage withdrawal
- Puede incluir benzodiacepinas para prevenir convulsiones | May include benzodiazepines to prevent seizures
- Generalmente dura 3-7 dias | Usually lasts 3-7 days

*Medicamentos | Medications:*
- Naltrexona: Reduce los deseos de beber | Naltrexone: Reduces cravings to drink
- Acamprosato: Ayuda a mantener la abstinencia | Acamprosate: Helps maintain abstinence
- Disulfiram: Causa malestar si bebes alcohol | Disulfiram: Causes discomfort if you drink alcohol

*Terapia | Therapy:*
- Terapia cognitivo-conductual (TCC) | Cognitive behavioral therapy (CBT)
- Entrevista motivacional | Motivational interviewing
- Terapia familiar | Family therapy
- Grupos de apoyo (AA, SMART Recovery) | Support groups (AA, SMART Recovery)

**Factores culturales en la comunidad latina | Cultural factors in the Latino community:**

- El machismo puede normalizar el consumo excesivo de alcohol en hombres | Machismo can normalize excessive alcohol consumption in men
- El estigma puede ser mayor en mujeres que buscan tratamiento | Stigma may be greater for women seeking treatment
- El familismo puede ser tanto barrera (secreto familiar) como proteccion (apoyo) | Familismo can be both a barrier (family secrecy) and protection (support)
- Las reuniones de AA en espanol ofrecen un espacio culturalmente familiar | Spanish-language AA meetings offer a culturally familiar space
- Los curanderos y la fe pueden complementar, no reemplazar, el tratamiento medico | Curanderos and faith can complement, not replace, medical treatment`,
      keyTerms: [
        {
          term: 'GABA (acido gamma-aminobutirico) | GABA (gamma-aminobutyric acid)',
          definition:
            'El principal neurotransmisor inhibitorio del cerebro que el alcohol aumenta, causando sedacion y relajacion | The brain main inhibitory neurotransmitter that alcohol enhances, causing sedation and relaxation',
        },
        {
          term: 'sindrome de abstinencia alcoholica | alcohol withdrawal syndrome',
          definition:
            'Conjunto de sintomas que ocurren cuando alguien que bebe mucho deja de beber, que puede incluir temblores, ansiedad, convulsiones y delirium tremens | Set of symptoms when a heavy drinker stops drinking, which can include tremors, anxiety, seizures, and delirium tremens',
        },
        {
          term: 'naltrexona | naltrexone',
          definition:
            'Un medicamento que bloquea los efectos placenteros del alcohol y reduce los deseos de beber | A medication that blocks the pleasurable effects of alcohol and reduces cravings',
        },
        {
          term: 'esteatosis hepatica | hepatic steatosis',
          definition:
            'Acumulacion de grasa en el higado causada por el consumo excesivo de alcohol, la primera etapa de la enfermedad hepatica alcoholica | Fat buildup in the liver caused by excessive alcohol use, the first stage of alcoholic liver disease',
        },
        {
          term: 'delirium tremens',
          definition:
            'Una forma severa y potencialmente mortal de abstinencia alcoholica con confusion, alucinaciones y convulsiones | A severe and potentially fatal form of alcohol withdrawal with confusion, hallucinations, and seizures',
          pronunciation: 'de-LI-rium TRE-mens',
        },
      ],
      analogies: [
        'El cerebro con uso cronico de alcohol es como un termostato que se ha recalibrado. Cuando quitas el alcohol, el "termostato" cerebral esta desajustado y necesita tiempo para volver a su configuracion normal. | The brain with chronic alcohol use is like a thermostat that has been recalibrated. When you remove the alcohol, the brain "thermostat" is off-balance and needs time to return to its normal setting.',
        'La progresion de la enfermedad hepatica es como un semaforo: higado graso (verde/advertencia), hepatitis (amarillo/precaucion), cirrosis (rojo/peligro). Las primeras etapas son reversibles, pero la cirrosis es permanente. | The progression of liver disease is like a traffic light: fatty liver (green/warning), hepatitis (yellow/caution), cirrhosis (red/danger). The early stages are reversible, but cirrhosis is permanent.',
      ],
      examples: [
        'Un trabajador de construccion que bebe para manejar el dolor cronico puede estar desarrollando una dependencia cruzada. Un medico puede ayudar a encontrar alternativas mas seguras para el manejo del dolor. | A construction worker who drinks to manage chronic pain may be developing cross-dependence. A doctor can help find safer alternatives for pain management.',
        'Una mujer que empezo a beber mas durante la pandemia y ahora no puede reducir su consumo podria beneficiarse de naltrexona y consejeria para manejar la ansiedad subyacente. | A woman who started drinking more during the pandemic and now cannot cut back could benefit from naltrexone and counseling to manage underlying anxiety.',
      ],
      patientCounselingPoints: [
        'La abstinencia alcoholica puede ser peligrosa -- siempre busca supervision medica para dejar de beber de forma segura. | Alcohol withdrawal can be dangerous -- always seek medical supervision to stop drinking safely.',
        'El tratamiento del TUA a menudo funciona mejor cuando combina medicamentos con terapia. | AUD treatment often works best when combining medications with therapy.',
        'La recaida no significa fracaso -- es parte comun del proceso de recuperacion. | Relapse does not mean failure -- it is a common part of the recovery process.',
        'Involucrar a la familia en el tratamiento puede mejorar los resultados, especialmente en la comunidad latina. | Involving family in treatment can improve outcomes, especially in the Latino community.',
      ],
    },
    3: {
      level: 3,
      summary:
        'El trastorno por uso de alcohol involucra neuroadaptaciones en los sistemas GABAergico, glutamatergico y dopaminergico, llevando a tolerancia, dependencia y consumo compulsivo. El manejo clinico incluye desintoxicacion protocolizada, farmacoterapia (naltrexona, acamprosato, disulfiram) e intervenciones psicosociales basadas en evidencia. | Alcohol use disorder involves neuroadaptations in GABAergic, glutamatergic, and dopaminergic systems, leading to tolerance, dependence, and compulsive use. Clinical management includes protocolized detoxification, pharmacotherapy (naltrexone, acamprosate, disulfiram), and evidence-based psychosocial interventions.',
      explanation: `**Criterios diagnosticos (DSM-5-TR) | Diagnostic criteria (DSM-5-TR):**

Un patron problematico de uso de alcohol que lleva a malestar o deterioro clinicamente significativo, manifestado por al menos 2 de los siguientes en un periodo de 12 meses: | A problematic pattern of alcohol use leading to clinically significant impairment or distress, manifested by at least 2 of the following within a 12-month period:

1. Consumo en cantidades mayores o por mas tiempo del previsto | Consumption in larger amounts or over longer periods than intended
2. Deseo persistente o esfuerzos infructuosos de reducir | Persistent desire or unsuccessful efforts to cut down
3. Gran cantidad de tiempo dedicado a obtener, usar o recuperarse | Great deal of time spent obtaining, using, or recovering
4. Craving o deseo intenso de consumir | Craving or strong desire to use
5. Uso recurrente que resulta en incumplimiento de obligaciones | Recurrent use resulting in failure to fulfill obligations
6. Uso continuado a pesar de problemas sociales/interpersonales | Continued use despite social/interpersonal problems
7. Actividades importantes reducidas o abandonadas | Important activities given up or reduced
8. Uso recurrente en situaciones fisicamente peligrosas | Recurrent use in physically hazardous situations
9. Uso continuado a pesar de problemas fisicos/psicologicos | Continued use despite physical/psychological problems
10. Tolerancia | Tolerance
11. Abstinencia | Withdrawal

**Neurobiologia del TUA | Neurobiology of AUD:**

*Sistema GABAergico | GABAergic system:*
- El alcohol potencia la transmision de GABA-A | Alcohol enhances GABA-A transmission
- El uso cronico causa regulacion a la baja de receptores GABA | Chronic use causes downregulation of GABA receptors
- La abstinencia produce hiperexcitabilidad por GABA insuficiente | Withdrawal produces hyperexcitability from insufficient GABA

*Sistema glutamatergico | Glutamatergic system:*
- El alcohol inhibe los receptores NMDA | Alcohol inhibits NMDA receptors
- El uso cronico causa regulacion al alza compensatoria de NMDA | Chronic use causes compensatory NMDA upregulation
- La abstinencia produce excitotoxicidad glutamatergica | Withdrawal produces glutamatergic excitotoxicity

*Sistema dopaminergico | Dopaminergic system:*
- Liberacion aguda de dopamina en el nucleo accumbens | Acute dopamine release in nucleus accumbens
- El uso cronico disminuye la senalizacion de dopamina basal | Chronic use decreases baseline dopamine signaling
- Contribuye a anhedonia y busqueda compulsiva | Contributes to anhedonia and compulsive seeking

*Eje HPA | HPA Axis:*
- El alcohol agudo suprime CRH; el uso cronico lo aumenta | Acute alcohol suppresses CRH; chronic use increases it
- Desregulacion del cortisol contribuye al estres de la abstinencia | Cortisol dysregulation contributes to withdrawal stress
- Papel en la recaida inducida por estres | Role in stress-induced relapse

**Manejo de la abstinencia alcoholica | Alcohol withdrawal management:**

*Escala CIWA-Ar (Clinical Institute Withdrawal Assessment for Alcohol):*
- Herramienta estandarizada para evaluar severidad | Standardized tool to assess severity
- Puntajes guian el tratamiento farmacologico | Scores guide pharmacological treatment
- Monitoreo cada 1-4 horas segun severidad | Monitoring every 1-4 hours based on severity

*Protocolo de tratamiento | Treatment protocol:*
- Benzodiacepinas de accion prolongada (diazepam, clordiazepoxido) | Long-acting benzodiazepines (diazepam, chlordiazepoxide)
- Protocolo de dosis fija vs. tratamiento activado por sintomas | Fixed-dose schedule vs. symptom-triggered treatment
- Tiamina IV antes de glucosa (prevenir Wernicke) | IV thiamine before glucose (prevent Wernicke)
- Suplementacion de folato y magnesio | Folate and magnesium supplementation
- Monitoreo de convulsiones (pico 24-48h) | Seizure monitoring (peak 24-48h)
- Delirium tremens: emergencia medica (pico 48-72h) | Delirium tremens: medical emergency (peak 48-72h)

**Farmacoterapia para TUA | Pharmacotherapy for AUD:**

*Naltrexona | Naltrexone:*
- Mecanismo: Antagonista opioide mu | Mechanism: Mu opioid antagonist
- Reduce refuerzo positivo del alcohol | Reduces positive reinforcement of alcohol
- Oral 50mg/dia o inyeccion mensual (Vivitrol 380mg) | Oral 50mg/day or monthly injection (Vivitrol 380mg)
- Contraindicada con uso de opioides | Contraindicated with opioid use

*Acamprosato | Acamprosate:*
- Mecanismo: Modula glutamato (probablemente mGluR5) | Mechanism: Modulates glutamate (likely mGluR5)
- Restaura el equilibrio GABA/glutamato | Restores GABA/glutamate balance
- 666mg tres veces al dia | 666mg three times daily
- Mas efectivo para mantener abstinencia | Most effective for maintaining abstinence

*Disulfiram | Disulfiram:*
- Mecanismo: Inhibe aldehido deshidrogenasa | Mechanism: Inhibits aldehyde dehydrogenase
- Causa acumulacion de acetaldehido con alcohol -> reaccion aversiva | Causes acetaldehyde accumulation with alcohol -> aversive reaction
- Requiere alta motivacion y adherencia | Requires high motivation and adherence

**Consideraciones para la poblacion latina | Considerations for the Latino population:**

- Tasas mas altas de consumo excesivo episodico ("binge drinking") en hombres latinos comparado con otros grupos | Higher rates of binge drinking in Latino men compared to other groups
- La "paradoja hispana" no aplica al TUA: los latinos tienen tasas similares o mayores de problemas relacionados al alcohol | The "Hispanic paradox" does not apply to AUD: Latinos have similar or higher rates of alcohol-related problems
- Acceso limitado a tratamiento culturalmente competente y en espanol | Limited access to culturally competent and Spanish-language treatment
- Modelos de "promotores de salud" han mostrado efectividad en intervenciones de alcohol | "Promotores de salud" models have shown effectiveness in alcohol interventions`,
      keyTerms: [
        {
          term: 'CIWA-Ar',
          definition:
            'Clinical Institute Withdrawal Assessment for Alcohol -- escala estandarizada para medir la severidad de la abstinencia alcoholica y guiar el tratamiento | Standardized scale to measure alcohol withdrawal severity and guide treatment',
        },
        {
          term: 'excitotoxicidad | excitotoxicity',
          definition:
            'Dano neuronal causado por activacion excesiva de receptores de glutamato, especialmente durante la abstinencia alcoholica | Neuronal damage caused by excessive activation of glutamate receptors, especially during alcohol withdrawal',
        },
        {
          term: 'acetaldehido | acetaldehyde',
          definition:
            'Metabolito toxico del alcohol que normalmente es convertido por aldehido deshidrogenasa; se acumula con disulfiram | Toxic metabolite of alcohol normally converted by aldehyde dehydrogenase; accumulates with disulfiram',
        },
        {
          term: 'nucleo accumbens | nucleus accumbens',
          definition:
            'Region cerebral clave en el sistema de recompensa que media los efectos reforzantes del alcohol | Key brain region in the reward system that mediates the reinforcing effects of alcohol',
        },
        {
          term: 'encefalopatia de Wernicke | Wernicke encephalopathy',
          definition:
            'Emergencia neurologica causada por deficiencia de tiamina (vitamina B1), comun en TUA severo, con la triada de confusion, ataxia y oftalmoplejia | Neurological emergency caused by thiamine (vitamin B1) deficiency, common in severe AUD, with the triad of confusion, ataxia, and ophthalmoplegia',
        },
      ],
      analogies: [
        'La neuroadaptacion al alcohol es como un sube y baja: el alcohol empuja un lado hacia abajo (inhibicion), y el cerebro compensa empujando el otro lado hacia arriba (excitacion). Cuando quitas el alcohol, el lado excitatorio queda desbalanceado -- esto es la abstinencia. | Neuroadaptation to alcohol is like a seesaw: alcohol pushes one side down (inhibition), and the brain compensates by pushing the other side up (excitation). When you remove alcohol, the excitatory side is unbalanced -- this is withdrawal.',
      ],
      examples: [
        'Un paciente con TUA severo que deja de beber abruptamente puede desarrollar convulsiones en las primeras 24-48 horas. Por esto, la desintoxicacion siempre debe ser medicamente supervisada con protocolo CIWA-Ar. | A patient with severe AUD who stops drinking abruptly can develop seizures within the first 24-48 hours. This is why detoxification must always be medically supervised with CIWA-Ar protocol.',
        'La combinacion de naltrexona con entrevista motivacional ha demostrado ser efectiva en pacientes latinos, especialmente cuando se integra con valores culturales como el familismo. | The combination of naltrexone with motivational interviewing has been shown to be effective in Latino patients, especially when integrated with cultural values like familismo.',
      ],
    },
    4: {
      level: 4,
      summary:
        'La fisiopatologia del TUA involucra neuroplasticidad maladaptativa en circuitos cortico-estriatales, desregulacion del sistema de estres extendido (amigdala, BNST), y alostasis en los sistemas de recompensa y antirecompensa. El manejo avanzado incorpora farmacogenomica, biomarcadores de recaida y modelos integrados de atencion que consideran determinantes sociales y culturales. | AUD pathophysiology involves maladaptive neuroplasticity in cortico-striatal circuits, extended stress system dysregulation (amygdala, BNST), and allostasis in reward and anti-reward systems. Advanced management incorporates pharmacogenomics, relapse biomarkers, and integrated care models addressing social and cultural determinants.',
      explanation: `**Modelo neurobiologico de tres etapas del TUA | Three-stage neurobiological model of AUD:**

*Etapa 1: Intoxicacion/Atracones (Binge/Intoxication) | Stage 1: Binge/Intoxication:*
- Circuito de recompensa del estriado ventral | Ventral striatal reward circuitry
- Liberacion de dopamina en NAc via VTA | Dopamine release in NAc via VTA
- Activacion del sistema opioide endogeno | Endogenous opioid system activation
- Refuerzo positivo impulsa el uso inicial | Positive reinforcement drives initial use

*Etapa 2: Abstinencia/Afecto Negativo (Withdrawal/Negative Affect) | Stage 2: Withdrawal/Negative Affect:*
- Amigdala extendida (CeA, BNST) | Extended amygdala (CeA, BNST)
- CRF elevado, norepinefrina, dinorfina | Elevated CRF, norepinephrine, dynorphin
- Disminucion de serotonina, NPY, endocannabinoides | Decreased serotonin, NPY, endocannabinoids
- Refuerzo negativo perpetua el uso | Negative reinforcement perpetuates use
- Alostasis: Punto de ajuste hedonico desplazado | Allostasis: Hedonic set point shifted

*Etapa 3: Preocupacion/Anticipacion (Preoccupation/Anticipation) | Stage 3: Preoccupation/Anticipation:*
- Corteza prefrontal (CPF) y cingulado anterior | Prefrontal cortex (PFC) and anterior cingulate
- Funcion ejecutiva deteriorada | Impaired executive function
- Craving condicionado por senales | Cue-conditioned craving
- Hipofrontalidad -> deficit de control inhibitorio | Hypofrontality -> inhibitory control deficit

**Farmacologia avanzada | Advanced pharmacology:**

*Metabolismo del alcohol | Alcohol metabolism:*
- Alcohol deshidrogenasa (ADH) -> acetaldehido | Alcohol dehydrogenase (ADH) -> acetaldehyde
- Aldehido deshidrogenasa (ALDH2) -> acetato | Aldehyde dehydrogenase (ALDH2) -> acetate
- Sistema microsomal de oxidacion del etanol (CYP2E1) | Microsomal ethanol oxidizing system (CYP2E1)
- Variantes geneticas de ADH/ALDH2 afectan la susceptibilidad | ADH/ALDH2 genetic variants affect susceptibility

*Farmacogenomica en tratamiento | Pharmacogenomics in treatment:*
- Polimorfismo del receptor opioide mu (OPRM1 Asn40Asp) | Mu opioid receptor polymorphism (OPRM1 Asn40Asp)
  - Alelo Asp40 asociado a mejor respuesta a naltrexona | Asp40 allele associated with better naltrexone response
- CYP2E1: Induccion por alcohol cronico aumenta metabolismo | CYP2E1: Induction by chronic alcohol increases metabolism
- Variantes de GABA-A (GABRA2) como factores de riesgo | GABA-A variants (GABRA2) as risk factors

*Agentes emergentes | Emerging agents:*
- Topiramato: Antagonista AMPA/kainato, facilita GABA | Topiramate: AMPA/kainate antagonist, facilitates GABA
- Gabapentina: Modula canales de calcio dependientes de voltaje | Gabapentin: Modulates voltage-gated calcium channels
- Nalmefeno: Antagonista opioide con actividad parcial kappa | Nalmefene: Opioid antagonist with partial kappa activity
- Ondansetron: Antagonista 5-HT3, prometedor en TUA de inicio temprano | Ondansetron: 5-HT3 antagonist, promising in early-onset AUD
- Baclofeno: Agonista GABA-B, evidencia creciente | Baclofen: GABA-B agonist, growing evidence

**Hepatologia del alcohol | Alcohol hepatology:**

*Progresion patologica | Pathological progression:*
- Esteatosis (>90% de bebedores excesivos) -> esteatohepatitis -> fibrosis -> cirrosis | Steatosis (>90% of heavy drinkers) -> steatohepatitis -> fibrosis -> cirrhosis
- Clasificacion de Child-Pugh para severidad cirrosis | Child-Pugh classification for cirrhosis severity
- Puntuacion MELD para pronostico y priorizacion de trasplante | MELD score for prognosis and transplant prioritization
- Hepatitis alcoholica severa: Funcion discriminante de Maddrey >=32 | Severe alcoholic hepatitis: Maddrey discriminant function >=32

**Disparidades y determinantes sociales en TUA latino | Disparities and social determinants in Latino AUD:**

- Estres de aculturacion correlacionado con mayor consumo de alcohol | Acculturation stress correlated with higher alcohol use
- Status migratorio como barrera para buscar tratamiento | Immigration status as barrier to seeking treatment
- Inseguridad laboral en sectores informales aumenta consumo | Job insecurity in informal sectors increases consumption
- Falta de cobertura de seguro limita acceso a farmacoterapia | Lack of insurance coverage limits access to pharmacotherapy
- Necesidad de integrar tratamiento de TUA con servicios de salud primaria | Need to integrate AUD treatment with primary care services`,
      keyTerms: [
        {
          term: 'alostasis | allostasis',
          definition:
            'El proceso por el cual el cuerpo logra estabilidad a traves del cambio; en la adiccion, el punto de ajuste hedonico se desplaza, requiriendo la sustancia para evitar estados negativos | The process by which the body achieves stability through change; in addiction, the hedonic set point shifts, requiring the substance to avoid negative states',
        },
        {
          term: 'hipofrontalidad | hypofrontality',
          definition:
            'Actividad reducida en la corteza prefrontal observada en TUA cronico, asociada con control inhibitorio deficiente y toma de decisiones deteriorada | Reduced prefrontal cortex activity observed in chronic AUD, associated with poor inhibitory control and impaired decision-making',
        },
        {
          term: 'BNST (nucleo del lecho de la estria terminal) | BNST (bed nucleus of the stria terminalis)',
          definition:
            'Parte de la amigdala extendida que media la ansiedad sostenida y el afecto negativo en la abstinencia | Part of the extended amygdala mediating sustained anxiety and negative affect in withdrawal',
        },
        {
          term: 'puntuacion MELD | MELD score',
          definition:
            'Model for End-Stage Liver Disease -- sistema de puntuacion que predice mortalidad en enfermedad hepatica y prioriza trasplante | Scoring system predicting mortality in liver disease and prioritizing transplant',
        },
        {
          term: 'nalmefeno | nalmefene',
          definition:
            'Antagonista opioide con actividad parcial agonista kappa, usado para reduccion del consumo de alcohol | Opioid antagonist with partial kappa agonist activity, used for alcohol consumption reduction',
        },
      ],
      clinicalNotes:
        'La evaluacion de TUA debe incluir: Historia completa de consumo (AUDIT, CAGE), funcion hepatica, hemograma completo (VCM elevado, GGT), nivel de tiamina, deteccion de comorbilidades psiquiatricas (depresion, ansiedad, TEPT frecuentes en poblacion latina). La abstinencia alcoholica puede ser fatal -- siempre evaluar riesgo con CIWA-Ar. En pacientes latinos, considerar barreras culturales (machismo, estigma, roles de genero), determinantes sociales (status migratorio, idioma, acceso a servicios), y fortalezas culturales (familismo, fe, redes comunitarias) al disenar planes de tratamiento. La naltrexona inyectable puede mejorar adherencia en pacientes con barreras de acceso. | AUD assessment should include: Complete consumption history (AUDIT, CAGE), liver function, complete blood count (elevated MCV, GGT), thiamine level, screening for psychiatric comorbidities (depression, anxiety, PTSD frequent in Latino population). Alcohol withdrawal can be fatal -- always assess risk with CIWA-Ar. In Latino patients, consider cultural barriers (machismo, stigma, gender roles), social determinants (immigration status, language, access to services), and cultural strengths (familismo, faith, community networks) when designing treatment plans. Injectable naltrexone may improve adherence in patients with access barriers.',
    },
    5: {
      level: 5,
      summary:
        'La investigacion contemporanea en TUA explora mecanismos epigeneticos, el eje intestino-cerebro, inmunosenalizacion neuroinflamatoria, y fenotipos dimensionales para tratamiento de precision. La integracion de neuromodulacion, psicodelicos y terapias digitales representa la frontera de la investigacion, mientras que los modelos de implementacion culturalmente adaptados buscan cerrar las brechas de disparidad en el acceso al tratamiento para poblaciones latinas. | Contemporary AUD research explores epigenetic mechanisms, the gut-brain axis, neuroinflammatory immune signaling, and dimensional phenotypes for precision treatment. Integration of neuromodulation, psychedelics, and digital therapeutics represents the research frontier, while culturally adapted implementation models seek to close disparity gaps in treatment access for Latino populations.',
      explanation: `**Mecanismos avanzados de la adiccion al alcohol | Advanced mechanisms of alcohol addiction:**

*Epigenetica | Epigenetics:*
- Cambios en la acetilacion de histonas mediados por HDAC | HDAC-mediated histone acetylation changes
- Metilacion del DNA en genes de receptores de dopamina y GABA | DNA methylation in dopamine and GABA receptor genes
- miRNAs como reguladores de la expresion genica en el TUA | miRNAs as regulators of gene expression in AUD
- Efectos epigeneticos transgeneracionales del consumo parental | Transgenerational epigenetic effects of parental consumption

*Eje intestino-cerebro-higado | Gut-brain-liver axis:*
- Disbiosis intestinal inducida por alcohol | Alcohol-induced gut dysbiosis
- Aumento de permeabilidad intestinal ("intestino permeable") | Increased intestinal permeability ("leaky gut")
- Endotoxemia (LPS) -> activacion de celulas de Kupffer -> neuroinflamacion | Endotoxemia (LPS) -> Kupffer cell activation -> neuroinflammation
- Metabolitos microbianos (SCFA, triptofano) alterados | Altered microbial metabolites (SCFA, tryptophan)
- Intervenciones probioticas en investigacion | Probiotic interventions under investigation

*Neuroinflamacion | Neuroinflammation:*
- TLR4 y senalizacion NF-kB en microglia | TLR4 and NF-kB signaling in microglia
- HMGB1 como molecula de alarma ("alarmin") | HMGB1 as alarmin molecule
- Activacion del inflamasoma NLRP3 | NLRP3 inflammasome activation
- Citoquinas proinflamatorias (IL-1beta, IL-6, TNF-alfa) alteran neurotransmision | Proinflammatory cytokines (IL-1beta, IL-6, TNF-alpha) alter neurotransmission
- Dianas terapeuticas antiinflamatorias | Anti-inflammatory therapeutic targets

**Fronteras terapeuticas | Therapeutic frontiers:**

*Neuromodulacion | Neuromodulation:*
- EMT repetitiva de CPFDL: Reduce craving y mejora control ejecutivo | Repetitive DLPFC TMS: Reduces craving and improves executive control
- Estimulacion transcraneal por corriente directa (tDCS) | Transcranial direct current stimulation (tDCS)
- Estimulacion cerebral profunda del NAc (experimental) | Deep brain stimulation of NAc (experimental)

*Psicodelicos | Psychedelics:*
- Psilocibina para TUA: Ensayos clinicos fase II prometedores | Psilocybin for AUD: Promising phase II clinical trials
- Mecanismo: Neuroplasticidad via 5-HT2A + experiencia mistica | Mechanism: Neuroplasticity via 5-HT2A + mystical experience
- Integracion con psicoterapia motivacional | Integration with motivational psychotherapy

*Terapias digitales | Digital therapeutics:*
- Aplicaciones de salud movil (mHealth) culturalmente adaptadas | Culturally adapted mobile health (mHealth) applications
- Intervenciones breves por mensajes de texto en espanol | Brief text message interventions in Spanish
- Tele-salud para comunidades rurales y con barreras de acceso | Telehealth for rural communities and those with access barriers

**Medicina de precision en TUA | Precision medicine in AUD:**

- Subtipos neurobiologicos: TUA de inicio temprano vs. tardio (Tipo II/I de Cloninger; Tipo A/B de Babor) | Neurobiological subtypes: Early vs. late onset AUD (Cloninger Type II/I; Babor Type A/B)
- Panel farmacogenetico expandido: OPRM1, ADH1B, ALDH2, GABRA2, DRD4, SLC6A4 | Expanded pharmacogenetic panel
- Biomarcadores de recaida: Fosfatidiletanol (PEth), EtG urinario | Relapse biomarkers: Phosphatidylethanol (PEth), urinary EtG
- Fenotipificacion digital: Patrones de uso de telefono como indicadores de recaida | Digital phenotyping: Phone use patterns as relapse indicators

**Modelos de implementacion para comunidades latinas | Implementation models for Latino communities:**

- Modelo SBIRT (Screening, Brief Intervention, Referral to Treatment) adaptado culturalmente | Culturally adapted SBIRT model
- Integracion de promotores de salud en programas de prevencion y tratamiento | Integration of promotores de salud in prevention and treatment programs
- Terapias cognitivo-conductuales culturalmente adaptadas (TCC-CA) | Culturally adapted cognitive-behavioral therapies (CA-CBT)
- Modelos de atencion colaborativa en clinicas comunitarias (FQHCs) | Collaborative care models in community health centers (FQHCs)
- Investigacion participativa basada en la comunidad (CBPR) | Community-based participatory research (CBPR)`,
      keyTerms: [
        {
          term: 'fosfatidiletanol (PEth) | phosphatidylethanol (PEth)',
          definition:
            'Biomarcador directo del consumo de alcohol formado en membranas celulares, con vida media de ~28 dias, util para monitoreo de abstinencia y deteccion de recaida | Direct alcohol consumption biomarker formed in cell membranes, with half-life of ~28 days, useful for abstinence monitoring and relapse detection',
        },
        {
          term: 'inflamasoma NLRP3 | NLRP3 inflammasome',
          definition:
            'Complejo proteico inmune innato activado por alcohol que procesa IL-1beta e IL-18, contribuyendo a neuroinflamacion y dano hepatico | Innate immune protein complex activated by alcohol that processes IL-1beta and IL-18, contributing to neuroinflammation and liver damage',
        },
        {
          term: 'SBIRT',
          definition:
            'Screening, Brief Intervention, and Referral to Treatment -- modelo basado en evidencia para deteccion temprana e intervencion de uso problematico de sustancias | Evidence-based model for early detection and intervention of problematic substance use',
        },
        {
          term: 'disbiosis intestinal | gut dysbiosis',
          definition:
            'Desequilibrio en la composicion de la microbiota intestinal inducido por alcohol cronico, que contribuye a inflamacion sistemica y neuroinflamacion | Imbalance in gut microbiota composition induced by chronic alcohol, contributing to systemic and neuroinflammation',
        },
        {
          term: 'fenotipificacion digital | digital phenotyping',
          definition:
            'Uso de datos de dispositivos moviles (patrones de uso, movimiento, sueno) para detectar cambios conductuales que predicen recaida | Use of mobile device data (usage patterns, movement, sleep) to detect behavioral changes predicting relapse',
        },
      ],
      clinicalNotes:
        'La atencion de vanguardia en TUA integra farmacogenomica para seleccion de medicamentos, biomarcadores para monitoreo objetivo (PEth, EtG), y modelos de atencion escalonada. La comorbilidad con trastornos del animo y TEPT es la regla en poblaciones latinas, no la excepcion, y requiere tratamiento integrado. La investigacion muestra que los modelos culturalmente adaptados que incorporan familismo, respeto, personalismo y espanol como idioma primario mejoran la retencion en tratamiento y los resultados clinicos. Los ensayos clinicos actuales con psilocibina para TUA requieren seguimiento, y la neuromodulacion de CPFDL muestra promesa en reduccion de craving. La implementacion de SBIRT en espanol en clinicas comunitarias es una estrategia costo-efectiva para deteccion temprana. Monitorear hepatotoxicidad con todos los farmacos en pacientes con enfermedad hepatica coexistente. | State-of-the-art AUD care integrates pharmacogenomics for medication selection, biomarkers for objective monitoring (PEth, EtG), and stepped care models. Comorbidity with mood disorders and PTSD is the rule in Latino populations, not the exception, requiring integrated treatment. Research shows culturally adapted models incorporating familismo, respeto, personalismo, and Spanish as primary language improve treatment retention and clinical outcomes. Current psilocybin clinical trials for AUD require follow-up, and DLPFC neuromodulation shows promise in craving reduction. Implementing Spanish-language SBIRT in community clinics is a cost-effective strategy for early detection. Monitor hepatotoxicity with all drugs in patients with coexisting liver disease.',
    },
  },

  media: [],

  citations: [
    {
      id: 'nimh-alcohol-use-disorder',
      type: 'website',
      title: 'NIMH: Substance Use and Co-Occurring Mental Disorders',
      source: 'National Institute of Mental Health',
      url: 'https://www.nimh.nih.gov/health/topics/substance-use-and-mental-health',
      accessedDate: '2026-02-01',
    },
    {
      id: 'samhsa-alcohol-treatment',
      type: 'website',
      title: 'SAMHSA: Alcohol Use Disorder',
      source: 'Substance Abuse and Mental Health Services Administration',
      url: 'https://www.samhsa.gov/find-help/national-helpline',
      accessedDate: '2026-02-01',
    },
    {
      id: 'medlineplus-alcohol-use-disorder',
      type: 'website',
      title: 'MedlinePlus: Alcohol Use Disorder (AUD)',
      source: 'U.S. National Library of Medicine',
      url: 'https://medlineplus.gov/alcoholusedisorderaud.html',
      accessedDate: '2026-02-01',
    },
    {
      id: 'niaaa-aud-treatment',
      type: 'guideline',
      title: 'NIAAA Clinician Guide: Helping Patients Who Drink Too Much',
      authors: ['National Institute on Alcohol Abuse and Alcoholism'],
      source: 'NIAAA',
      url: 'https://www.niaaa.nih.gov/health-professionals-communities/core-resource-on-alcohol',
    },
    {
      id: 'who-alcohol-global-status',
      type: 'guideline',
      title: 'Global Status Report on Alcohol and Health 2024',
      authors: ['World Health Organization'],
      source: 'WHO',
      url: 'https://www.who.int/publications/i/item/9789240089129',
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
      label: 'Ansiedad | Anxiety',
    },
    {
      targetId: 'topic-when-to-seek-mental-help',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Cuando Buscar Ayuda para Salud Mental | When to Seek Mental Help',
    },
  ],

  tags: {
    systems: ['mental-health'],
    topics: ['mental-health', 'behavioral-health', 'substance-use', 'addiction'],
    keywords: [
      'alcohol',
      'alcoholismo',
      'alcoholism',
      'trastorno por uso de alcohol',
      'alcohol use disorder',
      'AUD',
      'TUA',
      'adiccion',
      'addiction',
      'abstinencia',
      'withdrawal',
      'cirrosis',
      'cirrhosis',
      'naltrexona',
      'naltrexone',
      'salud mental',
      'mental health',
    ],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default substanceUseAlcoholContent;
