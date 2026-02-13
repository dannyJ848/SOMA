/**
 * Domestic Violence Resources - Contenido Educativo Bilingue
 *
 * Understanding domestic violence, safety planning, and resources
 * for Latino communities. Addressing cultural barriers to seeking help.
 *
 * Spanish-first with English translations separated by " | "
 * Culturally sensitive content for Spanish-speaking populations.
 */

import { EducationalContent } from '../types';

export const domesticViolenceResourcesContent: EducationalContent = {
  id: 'topic-domestic-violence-resources',
  type: 'topic',
  name: 'Domestic Violence Resources',
  nameEs: 'Recursos para Violencia Domestica',
  alternateNames: [
    'Violencia Intrafamiliar | Domestic Violence',
    'Abuso Domestico | Domestic Abuse',
    'Violencia de Pareja | Intimate Partner Violence',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'La violencia domestica es cuando alguien te hace dano fisico, emocional o psicologico en tu hogar o relacion. No es tu culpa y hay ayuda disponible, incluyendo recursos en espanol que protegen tu privacidad y tu estatus migratorio. | Domestic violence is when someone hurts you physically, emotionally, or psychologically in your home or relationship. It is not your fault and help is available, including resources in Spanish that protect your privacy and immigration status.',
      explanation: `**Que es la violencia domestica? | What is domestic violence?**

La violencia domestica es un patron de comportamiento donde una persona usa el poder y el control para lastimar a su pareja o familiar. Puede incluir: | Domestic violence is a pattern of behavior where a person uses power and control to harm their partner or family member. It can include:

**Tipos de abuso | Types of abuse:**

- **Fisico**: Golpes, empujones, jalones de pelo, estrangulamiento | **Physical**: Hitting, pushing, hair pulling, strangulation
- **Emocional**: Insultos, humillaciones, amenazas, hacerte sentir que no vales | **Emotional**: Insults, humiliation, threats, making you feel worthless
- **Control**: Controlar tu dinero, donde vas, con quien hablas, revisar tu telefono | **Control**: Controlling your money, where you go, who you talk to, checking your phone
- **Sexual**: Forzarte a tener relaciones sexuales o actos sexuales que no quieres | **Sexual**: Forcing you to have sex or sexual acts you do not want
- **Migratorio**: Amenazar con reportarte a inmigracion o no arreglar tus papeles | **Immigration**: Threatening to report you to immigration or not fixing your papers
- **Aislamiento**: No dejarte hablar con tu familia o amigos | **Isolation**: Not letting you talk to your family or friends

**Senales de alerta | Warning signs:**

- Tu pareja te critica constantemente | Your partner constantly criticizes you
- Te sientes con miedo en tu propia casa | You feel afraid in your own home
- Tu pareja controla el dinero y no te deja trabajar | Your partner controls the money and does not let you work
- Tu pareja te amenaza con quitarte a tus hijos | Your partner threatens to take your children
- Tus familiares o amigos estan preocupados por ti | Your family or friends are worried about you
- Tu pareja usa tu estatus migratorio como amenaza | Your partner uses your immigration status as a threat

**No es tu culpa | It is not your fault:**

- No importa que hayas "hecho" -- nadie merece ser maltratado/a | No matter what you may have "done" -- no one deserves to be mistreated
- El abusador es responsable de su comportamiento | The abuser is responsible for their behavior
- Los hijos tambien son afectados por la violencia | Children are also affected by violence
- Salir no es facil, pero hay ayuda | Leaving is not easy, but there is help

**Derechos importantes | Important rights:**

- Tienes derecho a estar seguro/a sin importar tu estatus migratorio | You have the right to be safe regardless of your immigration status
- La Visa U y VAWA protegen a victimas de violencia domestica inmigrantes | The U Visa and VAWA protect immigrant domestic violence victims
- Los refugios no preguntan por estatus migratorio | Shelters do not ask about immigration status
- Puedes obtener una orden de proteccion | You can get a protection order

**AYUDA INMEDIATA | IMMEDIATE HELP:**
- **Linea Nacional de Violencia Domestica**: 1-800-799-7233 (espanol 24/7) | National DV Hotline
- **Texto**: Envia "EMPEZAR" al 88788 | Text "START" to 88788
- **Chat**: thehotline.org (espanol disponible)
- **911**: Si estas en peligro inmediato | If you are in immediate danger
- **988**: Si tienes pensamientos suicidas | If you have suicidal thoughts`,
      keyTerms: [
        {
          term: 'violencia domestica | domestic violence',
          definition:
            'Un patron de comportamiento donde alguien usa el poder y el control para lastimar a su pareja o familiar | A pattern of behavior where someone uses power and control to harm their partner or family member',
        },
        {
          term: 'orden de proteccion | protection order',
          definition:
            'Un documento legal del tribunal que ordena al abusador mantenerse alejado de ti | A legal court document ordering the abuser to stay away from you',
        },
        {
          term: 'Visa U',
          definition:
            'Una visa para victimas de ciertos crimenes, incluyendo violencia domestica, que cooperan con la policia | A visa for victims of certain crimes, including domestic violence, who cooperate with police',
        },
        {
          term: 'VAWA',
          definition:
            'Ley de Violencia contra la Mujer -- permite a ciertos inmigrantes maltratados solicitar residencia sin depender de su abusador | Violence Against Women Act -- allows certain abused immigrants to apply for residency without depending on their abuser',
        },
      ],
      analogies: [
        'La violencia domestica es como una telarana -- al principio no la ves, pero poco a poco te va atrapando. | Domestic violence is like a spider web -- at first you do not see it, but little by little it traps you.',
        'Salir de una relacion de abuso es como nadar contra la corriente -- es dificil pero no imposible, y hay personas listas para ayudarte a llegar a la orilla. | Leaving an abusive relationship is like swimming against the current -- it is difficult but not impossible, and there are people ready to help you reach the shore.',
      ],
      examples: [
        'Lucia tiene miedo de llamar a la policia porque su esposo le dice que la van a deportar. Ella no sabe que como victima de violencia domestica, puede calificar para una Visa U. | Lucia is afraid to call the police because her husband tells her they will deport her. She does not know that as a domestic violence victim, she may qualify for a U Visa.',
        'Roberto sufre abuso emocional de su pareja. Ella lo humilla frente a sus hijos y controla todo su dinero. El piensa que no es violencia domestica porque no hay golpes, pero el abuso emocional tambien es violencia domestica. | Roberto suffers emotional abuse from his partner. She humiliates him in front of their children and controls all his money. He thinks it is not domestic violence because there are no hits, but emotional abuse is also domestic violence.',
      ],
      patientCounselingPoints: [
        'La violencia domestica no es su culpa y usted no la merece. | Domestic violence is not your fault and you do not deserve it.',
        'Su estatus migratorio NO impide que reciba ayuda. Hay protecciones legales para usted. | Your immigration status does NOT prevent you from receiving help. There are legal protections for you.',
        'Los refugios son seguros, confidenciales y no preguntan por estatus migratorio. | Shelters are safe, confidential, and do not ask about immigration status.',
        'Si no puede salir ahora, tenga un plan de seguridad listo. | If you cannot leave now, have a safety plan ready.',
      ],
    },
    2: {
      level: 2,
      summary:
        'La violencia de pareja intima (VPI) afecta desproporcionadamente a las comunidades latinas debido a barreras culturales y estructurales para buscar ayuda. El ciclo de la violencia, la planificacion de seguridad y los recursos legales especificos como VAWA y la Visa U son herramientas criticas. El impacto en la salud mental incluye depresion, ansiedad, TEPT y mayor riesgo suicida. | Intimate partner violence (IPV) disproportionately affects Latino communities due to cultural and structural barriers to seeking help. The cycle of violence, safety planning, and specific legal resources like VAWA and the U Visa are critical tools. Mental health impact includes depression, anxiety, PTSD, and increased suicide risk.',
      explanation: `**Violencia de pareja intima: Datos y contexto | Intimate partner violence: Data and context:**

- 1 de cada 3 mujeres latinas experimentara VPI en su vida | 1 in 3 Latina women will experience IPV in their lifetime
- Las latinas reportan a una tasa menor que otros grupos | Latinas report at a lower rate than other groups
- Barreras para reportar: Idioma, miedo migratorio, dependencia economica, presion familiar | Barriers to reporting: Language, immigration fear, economic dependence, family pressure
- Los hombres tambien pueden ser victimas | Men can also be victims

**Ciclo de la violencia (Walker, 1979) | Cycle of violence (Walker, 1979):**

1. **Fase de acumulacion de tension | Tension building phase:**
   - Aumento gradual de irritabilidad y conflicto | Gradual increase in irritability and conflict
   - La victima trata de "calmar" al abusador | Victim tries to "calm" the abuser
   - Sensacion de "caminar sobre cascaras de huevo" | Feeling of "walking on eggshells"

2. **Fase de explosion | Explosion phase:**
   - Episodio agudo de violencia (fisica, sexual, emocional severa) | Acute violence episode (physical, sexual, severe emotional)
   - Puede involucrar armas o estrangulamiento | May involve weapons or strangulation
   - Mayor peligro de lesion grave o muerte | Greatest danger of serious injury or death

3. **Fase de luna de miel | Honeymoon phase:**
   - El abusador pide perdon y promete cambiar | Abuser apologizes and promises to change
   - Muestra cariño y atencion | Shows affection and attention
   - La victima tiene esperanza de que cambiara | Victim hopes they will change
   - El ciclo se repite y generalmente empeora | The cycle repeats and generally worsens

**Impacto en la salud mental | Mental health impact:**

- Depresion (3-5 veces mayor riesgo) | Depression (3-5 times higher risk)
- TEPT (prevalencia hasta 64% en victimas) | PTSD (prevalence up to 64% in victims)
- Ansiedad generalizada y trastorno de panico | Generalized anxiety and panic disorder
- Abuso de sustancias | Substance abuse
- Ideacion suicida (riesgo significativamente elevado) | Suicidal ideation (significantly elevated risk)
- Problemas somaticos cronicos | Chronic somatic problems
- Impacto en los ninos: Problemas de conducta, ansiedad, depresion | Impact on children: Behavioral problems, anxiety, depression

**Barreras culturales en la comunidad latina | Cultural barriers in the Latino community:**

- Machismo: Normalizacion del control masculino | Machismo: Normalization of male control
- Marianismo: Expectativa de que la mujer aguante | Marianismo: Expectation that women endure
- Familismo: "Los problemas de la casa se quedan en la casa" | Familismo: "Family problems stay at home"
- Presion de la familia extendida para quedarse | Extended family pressure to stay
- Vergüenza y culpa | Shame and guilt
- Dependencia economica y migratoria del abusador | Economic and immigration dependence on abuser

**Plan de seguridad | Safety plan:**

- Identificar una persona de confianza | Identify a trusted person
- Tener documentos importantes en un lugar seguro | Keep important documents in a safe place
- Memorizar numeros de emergencia | Memorize emergency numbers
- Tener una bolsa de emergencia preparada | Have an emergency bag ready
- Identificar refugios y recursos locales | Identify local shelters and resources
- Si tiene hijos, incluirlos en el plan | If you have children, include them in the plan

**Recursos legales | Legal resources:**

- VAWA (Violence Against Women Act): Permite auto-peticion de residencia | Allows self-petition for residency
- Visa U: Para victimas de crimenes que cooperan con la policia | For crime victims who cooperate with police
- Visa T: Para victimas de trata de personas | For victims of human trafficking
- Ordenes de proteccion: Disponibles sin importar estatus migratorio | Protection orders: Available regardless of immigration status`,
      keyTerms: [
        {
          term: 'VPI (Violencia de Pareja Intima) | IPV (Intimate Partner Violence)',
          definition:
            'Violencia fisica, sexual, emocional o psicologica por parte de una pareja actual o anterior | Physical, sexual, emotional, or psychological violence by a current or former partner',
        },
        {
          term: 'ciclo de la violencia | cycle of violence',
          definition:
            'Patron repetitivo de tres fases: acumulacion de tension, explosion, y luna de miel | Repetitive pattern of three phases: tension building, explosion, and honeymoon',
        },
        {
          term: 'plan de seguridad | safety plan',
          definition:
            'Estrategia personalizada para protegerse y proteger a los hijos en caso de un episodio de violencia | Personalized strategy to protect oneself and children in case of a violence episode',
        },
        {
          term: 'control coercitivo | coercive control',
          definition:
            'Patron de comportamiento que busca dominar a la pareja a traves del miedo, aislamiento y control | Behavior pattern seeking to dominate a partner through fear, isolation, and control',
        },
        {
          term: 'trauma complejo | complex trauma',
          definition:
            'Trauma resultante de exposicion prolongada y repetida a violencia interpersonal | Trauma resulting from prolonged, repeated exposure to interpersonal violence',
        },
      ],
      analogies: [
        'El ciclo de la violencia es como un huracán que da vueltas -- cada vez que pasa se hace mas fuerte y mas destructivo. | The cycle of violence is like a hurricane that goes around -- each time it passes it becomes stronger and more destructive.',
        'El control coercitivo es como una jaula invisible -- no puedes verla pero controla cada movimiento. | Coercive control is like an invisible cage -- you cannot see it but it controls every movement.',
      ],
      examples: [
        'Ana es ciudadana mexicana casada con un residente permanente. El la golpea y le dice que si lo deja nunca podra arreglar sus papeles. Ana no sabe que VAWA le permite solicitar residencia independientemente de su esposo. | Ana is a Mexican citizen married to a permanent resident. He hits her and tells her if she leaves she will never be able to fix her papers. Ana does not know that VAWA allows her to apply for residency independently from her husband.',
        'Los hijos de Carmen muestran problemas de conducta en la escuela. El consejero escolar sospecha violencia domestica en el hogar. Al conectar a Carmen con recursos bilingues, ella y sus hijos reciben ayuda. | Carmen children show behavioral problems at school. The school counselor suspects domestic violence at home. By connecting Carmen with bilingual resources, she and her children receive help.',
      ],
      patientCounselingPoints: [
        'El abuso emocional y el control son tan daninos como el abuso fisico. | Emotional abuse and control are as harmful as physical abuse.',
        'Existen protecciones legales migratorias especificas para victimas de violencia domestica. | There are specific immigration legal protections for domestic violence victims.',
        'Si no esta lista para salir, un plan de seguridad puede protegerla mientras tanto. | If you are not ready to leave, a safety plan can protect you in the meantime.',
        'Sus hijos tambien estan siendo afectados. Buscar ayuda los protege a todos. | Your children are also being affected. Seeking help protects everyone.',
      ],
    },
    3: {
      level: 3,
      summary:
        'La VPI en comunidades latinas presenta patrones epidemiologicos, clinicos y legales especificos que requieren un enfoque interseccional. La interaccion entre factores culturales (machismo, marianismo, familismo), estructurales (estatus migratorio, pobreza, barreras linguisticas) y psicologicos (trauma complejo, vinculo traumatico) crea vulnerabilidades unicas. La intervencion efectiva requiere integracion de servicios de salud mental, legales y sociales culturalmente competentes. | IPV in Latino communities presents specific epidemiological, clinical, and legal patterns requiring an intersectional approach. The interaction between cultural (machismo, marianismo, familismo), structural (immigration status, poverty, language barriers), and psychological (complex trauma, traumatic bonding) factors creates unique vulnerabilities. Effective intervention requires integration of culturally competent mental health, legal, and social services.',
      explanation: `**Epidemiologia avanzada | Advanced epidemiology:**

- Prevalencia de VPI en latinas: 34-37% de por vida | IPV prevalence in Latinas: 34-37% lifetime
- Subdeteccion significativa (se estima que solo 10-20% reportan) | Significant underdetection (estimated only 10-20% report)
- Mayor riesgo de feminicidio en mujeres latinas (estrangulamiento como marcador) | Higher femicide risk in Latina women (strangulation as marker)
- Hombres latinos tambien son victimas (estimado 10-15%) pero reportan aun menos | Latino men are also victims (estimated 10-15%) but report even less
- Comunidad LGBTQ+ latina: Tasa comparable pero con menos recursos culturalmente relevantes | LGBTQ+ Latino community: Comparable rate but fewer culturally relevant resources

**Modelo ecologico de la VPI en latinos | Ecological model of IPV in Latinos:**

*Nivel individual | Individual level:*
- Exposicion a violencia en la infancia (ACEs) | Childhood violence exposure (ACEs)
- Uso de sustancias (especialmente alcohol) | Substance use (especially alcohol)
- Trastornos de salud mental no tratados | Untreated mental health disorders
- Creencias sobre roles de genero rigidos | Beliefs about rigid gender roles

*Nivel relacional | Relational level:*
- Desequilibrio de poder en la relacion | Power imbalance in the relationship
- Aislamiento de la pareja | Partner isolation
- Conflicto sobre roles de genero cambiantes en nuevo pais | Conflict about changing gender roles in new country
- Estres economico como precipitante | Economic stress as precipitant

*Nivel comunitario | Community level:*
- Normas culturales que toleran la violencia | Cultural norms tolerating violence
- Falta de recursos en espanol | Lack of resources in Spanish
- Presion comunitaria para mantener la familia unida | Community pressure to keep the family together
- Iglesias que pueden reforzar o desafiar normas | Churches that may reinforce or challenge norms

*Nivel estructural | Structural level:*
- Politicas migratorias que crean dependencia | Immigration policies creating dependence
- Falta de acceso a servicios legales | Lack of access to legal services
- Discriminacion en el sistema judicial | Discrimination in the judicial system
- Vivienda y empleo precarios | Precarious housing and employment

**Impacto clinico detallado | Detailed clinical impact:**

*TEPT complejo | Complex PTSD:*
- Alteraciones en regulacion afectiva (desregulacion emocional cronica) | Alterations in affective regulation (chronic emotional dysregulation)
- Alteraciones en conciencia y atencion (disociacion) | Alterations in consciousness and attention (dissociation)
- Alteraciones en autopercepcion (vergüenza cronica, culpa) | Alterations in self-perception (chronic shame, guilt)
- Alteraciones en relaciones (dificultad de confianza) | Alterations in relationships (trust difficulty)
- Somatizacion cronica | Chronic somatization

*Vinculo traumatico | Traumatic bonding:*
- Ciclos intermitentes de abuso y refuerzo positivo | Intermittent cycles of abuse and positive reinforcement
- Desequilibrio de poder + intermitencia -> apego | Power imbalance + intermittency -> attachment
- Neurobiologicamente: Secuestro del sistema de apego | Neurobiologically: Hijacking of attachment system
- Explica por que las victimas vuelven (no es "debilidad") | Explains why victims return (it is not "weakness")

**Evaluacion clinica | Clinical assessment:**

- Tamizaje universal recomendado (HITS, WAST, AAS en espanol) | Universal screening recommended (HITS, WAST, AAS in Spanish)
- Evaluar letalidad (Danger Assessment de Campbell) | Assess lethality (Campbell Danger Assessment)
- Preguntar en privado, sin la pareja presente | Ask in private, without the partner present
- Preguntar sobre estrangulamiento (predictor de feminicidio) | Ask about strangulation (femicide predictor)
- Evaluar impacto en ninos | Assess impact on children
- Conectar con recursos legales y sociales | Connect with legal and social resources

**Intervencion basada en evidencia | Evidence-based intervention:**

*Para victimas/sobrevivientes | For victims/survivors:*
- Terapia de procesamiento cognitivo (CPT) adaptada | Adapted Cognitive Processing Therapy
- EMDR para trauma | EMDR for trauma
- Terapia enfocada en seguridad primero | Safety-first focused therapy
- Grupos de apoyo en espanol | Support groups in Spanish
- Intervencion para ninos expuestos (CPP - Child-Parent Psychotherapy) | Intervention for exposed children

*Para perpetradores | For perpetrators:*
- Programas de intervencion para agresores (BIP) | Batterer intervention programs (BIP)
- Evidencia mixta sobre efectividad | Mixed evidence on effectiveness
- Adaptaciones culturales muestran mejores resultados | Cultural adaptations show better results`,
      keyTerms: [
        {
          term: 'vinculo traumatico | traumatic bonding',
          definition:
            'Apego emocional fuerte que se desarrolla entre la victima y el abusador como resultado de ciclos intermitentes de abuso y refuerzo positivo | Strong emotional attachment developing between victim and abuser as a result of intermittent cycles of abuse and positive reinforcement',
        },
        {
          term: 'TEPT complejo | complex PTSD',
          definition:
            'Trauma resultante de exposicion prolongada y repetida a violencia interpersonal, que incluye alteraciones en regulacion emocional, identidad y relaciones | Trauma from prolonged, repeated exposure to interpersonal violence, including alterations in emotional regulation, identity, and relationships',
        },
        {
          term: 'feminicidio | femicide',
          definition:
            'Asesinato de una mujer por su pareja o ex-pareja; el estrangulamiento es un predictor importante | Murder of a woman by her partner or ex-partner; strangulation is an important predictor',
        },
        {
          term: 'control coercitivo | coercive control',
          definition:
            'Patron de comportamiento que restringe la libertad de la pareja a traves del miedo, vigilancia, aislamiento y control de recursos | Behavior pattern restricting a partner freedom through fear, surveillance, isolation, and resource control',
        },
      ],
      clinicalNotes:
        'El tamizaje universal de VPI es recomendado por la USPSTF para todas las mujeres en edad reproductiva. En pacientes latinas, el tamizaje debe hacerse en espanol, en privado, con conciencia de las barreras culturales e inmigratorias. El estrangulamiento no fatal es el predictor mas fuerte de feminicidio posterior y debe evaluarse siempre. El vinculo traumatico explica neurobiologicamente por que las victimas regresan al abusador y no debe confundirse con consentimiento. Las protecciones legales (VAWA, Visa U) deben ser parte de la orientacion clinica. El TEPT complejo es el diagnostico mas apropiado para victimas de VPI cronica. La terapia debe ser "safety first" -- la seguridad fisica siempre es la prioridad antes de procesamiento del trauma. | Universal IPV screening is recommended by USPSTF for all women of reproductive age. In Latina patients, screening should be done in Spanish, privately, with awareness of cultural and immigration barriers. Non-fatal strangulation is the strongest predictor of subsequent femicide and must always be assessed. Traumatic bonding neurobiologically explains why victims return to the abuser and should not be confused with consent. Legal protections (VAWA, U Visa) should be part of clinical guidance. Complex PTSD is the most appropriate diagnosis for chronic IPV victims. Therapy must be "safety first" -- physical safety is always the priority before trauma processing.',
    },
    4: {
      level: 4,
      summary:
        'La VPI en comunidades latinas requiere un marco clinico que integre neurobiologia del trauma complejo, modelos interseccionales de riesgo, formulacion cultural del impacto, y marcos legales especificos. La investigacion muestra que las intervenciones multinivel que abordan simultaneamente seguridad, trauma, barreras estructurales y empoderamiento cultural tienen los mejores resultados. La practica basada en evidencia requiere adaptacion cultural sistematica y comprension profunda de las dinamicas de poder interseccionales. | IPV in Latino communities requires a clinical framework integrating complex trauma neurobiology, intersectional risk models, cultural formulation of impact, and specific legal frameworks. Research shows multi-level interventions simultaneously addressing safety, trauma, structural barriers, and cultural empowerment have the best outcomes. Evidence-based practice requires systematic cultural adaptation and deep understanding of intersectional power dynamics.',
      explanation: `**Neurobiologia avanzada del trauma por VPI | Advanced neurobiology of IPV trauma:**

*Circuitos neuronales afectados | Affected neural circuits:*
- Amigdala hiperreactiva: Hipervigilancia cronica, sobresaltos | Hyperreactive amygdala: Chronic hypervigilance, startle
- CPFvm hipoactiva: Deficit de regulacion emocional y extincion del miedo | Hypoactive vmPFC: Emotional regulation and fear extinction deficit
- Hipocampo atrofiado: Deficit de memoria contextual | Atrophied hippocampus: Contextual memory deficit
- Insula anterior hiperactiva: Sensibilidad interoceptiva y somatizacion | Hyperactive anterior insula: Interoceptive sensitivity and somatization
- Circuito de recompensa secuestrado: Base neurobiologica del vinculo traumatico | Hijacked reward circuit: Neurobiological basis of traumatic bonding

*Vinculo traumatico -- neurobiologia | Traumatic bonding -- neurobiology:*
- Intermitencia de abuso y cariño activa sistema dopaminergico (similar a refuerzo intermitente) | Intermittency of abuse and affection activates dopaminergic system (similar to intermittent reinforcement)
- Oxitocina liberada durante reconciliacion fortalece el vinculo | Oxytocin released during reconciliation strengthens the bond
- Cortisol cronico deteriora la toma de decisiones (CPFdl) | Chronic cortisol impairs decision-making (dlPFC)
- Resultado: La victima esta biologicamente vinculada al abusador | Result: Victim is biologically bonded to the abuser

*Epigenetica y transmision intergeneracional | Epigenetics and intergenerational transmission:*
- Exposicion a VPI altera la metilacion en genes de respuesta al estres | IPV exposure alters methylation in stress response genes
- Hijos expuestos a VPI muestran cambios epigeneticos medibles | Children exposed to IPV show measurable epigenetic changes
- NR3C1 metilacion alterada en hijos de madres con VPI | Altered NR3C1 methylation in children of mothers with IPV
- Implicaciones para intervencion temprana | Implications for early intervention

**Marco interseccional avanzado | Advanced intersectional framework:**

- Genero x raza/etnicidad x estatus migratorio x clase social x orientacion sexual | Gender x race/ethnicity x immigration status x social class x sexual orientation
- Cada interseccion crea vulnerabilidades y barreras unicas | Each intersection creates unique vulnerabilities and barriers
- Mujeres latinas indocumentadas: Triple jeopardy (genero + raza + estatus) | Undocumented Latina women: Triple jeopardy (gender + race + status)
- Hombres latinos victimas: Estigma adicional por machismo | Latino men victims: Additional stigma due to machismo
- Comunidad LGBTQ+ latina: Recursos escasos y culturalmente irrelevantes | LGBTQ+ Latino community: Scarce and culturally irrelevant resources

**Intervenciones basadas en evidencia avanzadas | Advanced evidence-based interventions:**

*Terapia de trauma informada | Trauma-informed therapy:*
- Fase 1: Estabilizacion y seguridad (siempre primero) | Phase 1: Stabilization and safety (always first)
- Fase 2: Procesamiento del trauma (CPT, EMDR, PE adaptada) | Phase 2: Trauma processing (CPT, EMDR, adapted PE)
- Fase 3: Reconexion e integracion | Phase 3: Reconnection and integration
- Adaptacion cultural: Incorporar narrativas de fortaleza cultural, espiritualidad | Cultural adaptation: Incorporate narratives of cultural strength, spirituality

*Child-Parent Psychotherapy (CPP) para ninos expuestos | For exposed children:*
- Basada en teoria del apego | Based on attachment theory
- Involucra al cuidador no abusivo | Involves non-abusive caregiver
- Adaptada culturalmente para familias latinas | Culturally adapted for Latino families
- Evidencia fuerte para reducir sintomas en ninos y madres | Strong evidence for reducing symptoms in children and mothers

**Marco legal detallado | Detailed legal framework:**

*VAWA (Violence Against Women Act):*
- Auto-peticion para conyuges maltratados de ciudadanos o residentes | Self-petition for battered spouses of citizens or residents
- No requiere la cooperacion del abusador | Does not require abuser cooperation
- Incluye autorizacion de trabajo | Includes work authorization
- Confidencialidad migratoria | Immigration confidentiality

*Visa U:*
- Para victimas de crimenes calificados (incluye VPI) | For victims of qualifying crimes (includes IPV)
- Requiere certificacion de agencia de ley (Form I-918B) | Requires law enforcement certification (Form I-918B)
- Limite anual de 10,000 visas | Annual cap of 10,000 visas
- Puede llevar a residencia permanente | Can lead to permanent residency`,
      keyTerms: [
        {
          term: 'refuerzo intermitente | intermittent reinforcement',
          definition:
            'Patron en el que las recompensas (afecto) se entregan de forma impredecible, creando el vinculo mas fuerte y resistente a la extincion | Pattern where rewards (affection) are delivered unpredictably, creating the strongest and most extinction-resistant bond',
        },
        {
          term: 'triple jeopardy | triple vulnerabilidad',
          definition:
            'Situacion donde multiples formas de opresion se superponen (genero + raza + estatus migratorio) creando vulnerabilidad extrema | Situation where multiple forms of oppression overlap (gender + race + immigration status) creating extreme vulnerability',
        },
        {
          term: 'CPP (Child-Parent Psychotherapy)',
          definition:
            'Terapia basada en la teoria del apego para ninos expuestos a violencia, que involucra al cuidador no abusivo en el proceso terapeutico | Attachment theory-based therapy for children exposed to violence, involving the non-abusive caregiver in the therapeutic process',
        },
        {
          term: 'auto-peticion VAWA | VAWA self-petition',
          definition:
            'Proceso legal que permite a conyuges maltratados de ciudadanos o residentes solicitar residencia sin depender del abusador | Legal process allowing battered spouses of citizens or residents to apply for residency without depending on the abuser',
        },
      ],
      clinicalNotes:
        'La practica clinica avanzada en VPI con pacientes latinas requiere: (1) Comprension neurobiologica del vinculo traumatico para evitar culpabilizar a la victima; (2) Evaluacion de letalidad en cada encuentro (Danger Assessment); (3) Conocimiento de recursos legales migratorios (VAWA, Visa U); (4) Enfoque de tres fases del trauma (seguridad -> procesamiento -> integracion); (5) Evaluacion y intervencion para ninos expuestos (CPP); (6) Abordaje interseccional que considere todas las identidades y vulnerabilidades del paciente. Nunca hacer terapia de pareja cuando hay VPI activa. El estrangulamiento no fatal requiere evaluacion medica urgente (lesion cerebral anoxica, diseccion carotidea) y es el predictor mas fuerte de feminicidio. La epigenetica del trauma por VPI muestra que la intervencion temprana en hijos expuestos puede modificar las marcas epigeneticas adversas. | Advanced clinical practice in IPV with Latina patients requires: (1) Neurobiological understanding of traumatic bonding to avoid victim-blaming; (2) Lethality assessment at every encounter (Danger Assessment); (3) Knowledge of immigration legal resources (VAWA, U Visa); (4) Three-phase trauma approach (safety -> processing -> integration); (5) Assessment and intervention for exposed children (CPP); (6) Intersectional approach considering all patient identities and vulnerabilities. Never do couples therapy when there is active IPV. Non-fatal strangulation requires urgent medical evaluation (anoxic brain injury, carotid dissection) and is the strongest femicide predictor. IPV trauma epigenetics show that early intervention in exposed children can modify adverse epigenetic marks.',
    },
    5: {
      level: 5,
      summary:
        'La investigacion de frontera en VPI y comunidades latinas integra neurociencia del trauma interpersonal cronico, modelos de prediccion de letalidad, ciencia de implementacion para intervenciones multinivel, y marcos de justicia social. Los avances incluyen biomarcadores de riesgo, terapeutica digital adaptada, modelos de prevencion primaria basados en normas sociales, e intervenciones de nivel politico que abordan las raices estructurales de la violencia. | Frontier research in IPV and Latino communities integrates chronic interpersonal trauma neuroscience, lethality prediction models, implementation science for multi-level interventions, and social justice frameworks. Advances include risk biomarkers, adapted digital therapeutics, primary prevention models based on social norms, and policy-level interventions addressing structural roots of violence.',
      explanation: `**Neurociencia avanzada del trauma interpersonal cronico | Advanced neuroscience of chronic interpersonal trauma:**

*Conectomica del TEPT complejo | Complex PTSD connectomics:*
- Desconexion funcional CPFvm-amigdala | Functional vmPFC-amygdala disconnection
- Hiperconectividad red de saliencia (insula, CCA) | Salience network hyperconnectivity (insula, ACC)
- Red de modo predeterminado: Hiperactividad asociada a vergüenza y rumiacion | DMN: Hyperactivity associated with shame and rumination
- Circuito de recompensa: Adaptaciones que mantienen vinculo traumatico | Reward circuit: Adaptations maintaining traumatic bond
- Implicaciones para neuromodulacion (EMT, neurofeedback) | Implications for neuromodulation (TMS, neurofeedback)

*Biomarcadores emergentes | Emerging biomarkers:*
- Cortisol/DHEA ratio como indicador de carga allostatica | Cortisol/DHEA ratio as allostatic load indicator
- PCR y citoquinas proinflamatorias elevadas en victimas cronicas | Elevated CRP and pro-inflammatory cytokines in chronic victims
- Longitud telomerica reducida (envejecimiento acelerado) | Reduced telomere length (accelerated aging)
- Metilacion de NR3C1 como biomarcador epigenetico | NR3C1 methylation as epigenetic biomarker
- Potencial uso en evaluacion forense y clinica | Potential use in forensic and clinical evaluation

**Modelos predictivos de letalidad | Lethality prediction models:**

- Danger Assessment (Campbell): 5 factores de mayor riesgo | 5 highest risk factors
  1. Amenazas de muerte | Death threats
  2. Acceso a armas de fuego | Access to firearms
  3. Estrangulamiento previo | Prior strangulation
  4. Separacion reciente | Recent separation
  5. Escalamiento de violencia | Violence escalation
- Modelos de machine learning para prediccion de riesgo | Machine learning models for risk prediction
- Integracion de factores culturales en modelos predictivos | Integration of cultural factors in predictive models

**Ciencia de implementacion | Implementation science:**

*Modelos multinivel | Multi-level models:*
- Individual: Terapia de trauma culturalmente adaptada | Individual: Culturally adapted trauma therapy
- Relacional: Intervencion temprana para parejas en riesgo | Relational: Early intervention for at-risk couples
- Comunitario: Programas de prevencion basados en normas (SASA!, Stepping Stones adaptados) | Community: Norms-based prevention programs (adapted SASA!, Stepping Stones)
- Estructural: Politica publica (VAWA reautorizacion, acceso a servicios) | Structural: Public policy (VAWA reauthorization, service access)

*Terapeutica digital | Digital therapeutics:*
- Apps de planificacion de seguridad en espanol (myPlan adaptada) | Safety planning apps in Spanish (adapted myPlan)
- Intervenciones de texto/chat para victimas que no pueden hablar | Text/chat interventions for victims who cannot speak
- Realidad virtual para procesamiento de trauma | VR for trauma processing
- IA para deteccion de riesgo en comunicaciones | AI for risk detection in communications

**Prevencion primaria | Primary prevention:**

- Programas escolares de relaciones saludables adaptados para latinos | Healthy relationships school programs adapted for Latinos
- Intervencion con hombres y ninos sobre masculinidad positiva | Intervention with men and boys about positive masculinity
- Programas de empoderamiento economico para mujeres | Economic empowerment programs for women
- Campanas comunitarias que desafian normas de genero | Community campaigns challenging gender norms

**Direcciones de investigacion | Research directions:**

- Ensayos clinicos con representacion latina adecuada | Clinical trials with adequate Latino representation
- Estudios longitudinales de transmision intergeneracional | Longitudinal studies of intergenerational transmission
- Evaluacion de politicas migratorias como determinantes de VPI | Evaluation of immigration policies as IPV determinants
- Intervenciones culturalmente adaptadas basadas en neurociencia | Culturally adapted interventions based on neuroscience`,
      keyTerms: [
        {
          term: 'conectomica del trauma | trauma connectomics',
          definition:
            'Mapeo de las redes cerebrales alteradas por trauma cronico interpersonal usando neuroimagen funcional | Mapping of brain networks altered by chronic interpersonal trauma using functional neuroimaging',
        },
        {
          term: 'Danger Assessment',
          definition:
            'Instrumento validado de Campbell para evaluar el riesgo de feminicidio basado en factores conocidos de riesgo | Campbell validated instrument for assessing femicide risk based on known risk factors',
        },
        {
          term: 'SASA!',
          definition:
            'Intervencion comunitaria de prevencion de violencia basada en cambio de normas sociales; adaptable culturalmente | Community violence prevention intervention based on social norms change; culturally adaptable',
        },
        {
          term: 'masculinidad positiva | positive masculinity',
          definition:
            'Enfoque de prevencion que promueve expresiones saludables de masculinidad como alternativa al machismo | Prevention approach promoting healthy expressions of masculinity as alternative to machismo',
        },
      ],
      clinicalNotes:
        'La practica de frontera en VPI con comunidades latinas requiere integracion de multiples disciplinas: neurociencia del trauma (para entender y explicar vinculo traumatico), medicina forense (evaluacion de estrangulamiento y lesiones), derecho migratorio (VAWA, Visa U, T), ciencia de implementacion (para escalar intervenciones efectivas), y salud publica (prevencion primaria). Los biomarcadores emergentes (cortisol/DHEA, PCR, telomeros, metilacion epigenetica) tienen potencial tanto clinico como forense. Los modelos predictivos de letalidad deben incluir factores culturales especificos (dependencia migratoria, aislamiento linguistico). La terapeutica digital adaptada en espanol puede ampliar drasticamente el alcance pero debe complementar, no reemplazar, el apoyo humano. La prevencion primaria a traves de programas de masculinidad positiva en comunidades latinas muestra resultados prometedores. La investigacion debe ser conducida con marcos de CBPR y justicia social para asegurar relevancia y validez cultural. | Frontier practice in IPV with Latino communities requires integration of multiple disciplines: trauma neuroscience (to understand and explain traumatic bonding), forensic medicine (strangulation and injury assessment), immigration law (VAWA, U Visa, T), implementation science (to scale effective interventions), and public health (primary prevention). Emerging biomarkers (cortisol/DHEA, CRP, telomeres, epigenetic methylation) have both clinical and forensic potential. Lethality prediction models must include specific cultural factors (immigration dependence, linguistic isolation). Adapted digital therapeutics in Spanish can drastically expand reach but must complement, not replace, human support. Primary prevention through positive masculinity programs in Latino communities shows promising results. Research must be conducted with CBPR and social justice frameworks to ensure cultural relevance and validity.',
    },
  },

  media: [],

  citations: [
    {
      id: 'walker-1979-cycle',
      type: 'textbook',
      title: 'The Battered Woman',
      authors: ['Walker, L.E.'],
      source: 'Harper & Row',
    },
    {
      id: 'campbell-2009-danger-assessment',
      type: 'journal',
      title: 'The Danger Assessment: Validation of a Lethality Risk Assessment Instrument for Intimate Partner Femicide',
      authors: ['Campbell, J.C.', 'Webster, D.W.', 'Glass, N.'],
      source: 'Journal of Interpersonal Violence',
    },
    {
      id: 'national-dv-hotline',
      type: 'website',
      title: 'National Domestic Violence Hotline',
      source: 'thehotline.org',
      url: 'https://www.thehotline.org/es/',
      accessedDate: '2026-01-15',
    },
  ],

  crossReferences: [
    {
      targetId: 'mental-health-tept-ptsd',
      targetType: 'condition',
      relationship: 'related',
      label: 'TEPT | PTSD',
    },
    {
      targetId: 'mental-health-depresion-depression',
      targetType: 'condition',
      relationship: 'related',
      label: 'Depresion | Depression',
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
    topics: ['mental-health', 'domestic-violence', 'trauma', 'bilingual-content', 'legal-resources'],
    keywords: [
      'violencia domestica',
      'domestic violence',
      'violencia de pareja',
      'intimate partner violence',
      'VAWA',
      'Visa U',
      'plan de seguridad',
      'safety plan',
      'abuso',
      'abuse',
      'trauma',
      'salud mental',
      'latino',
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

export default domesticViolenceResourcesContent;
