/**
 * Esquema de Vacunacion Pediatrica / Childhood Immunization Schedule
 *
 * Contenido educativo bilingue (espanol primero) sobre el calendario de
 * vacunacion infantil, tipos de vacunas, educacion para padres, inmunologia
 * de la vacunacion, y estrategias para abordar la hesitacion vacunal.
 *
 * Bilingual educational content (Spanish-first) on childhood immunization
 * schedule, vaccine types, parent education, vaccine immunology, and
 * strategies for addressing vaccine hesitancy.
 */

import { EducationalContent } from '../types';

export const VACUNACION_IMMUNIZATION_SCHEDULE: EducationalContent = {
  id: 'pediatrics-vacunacion-immunization-schedule',
  type: 'topic',
  name: 'Childhood Immunization Schedule | Esquema de Vacunacion Pediatrica',
  nameEs: 'Esquema de Vacunacion Pediatrica',
  alternateNames: [
    'Vacunas infantiles',
    'Childhood vaccines',
    'Calendario de vacunacion',
    'Immunization schedule',
    'Cartilla de vacunacion',
    'Vaccination card',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Las vacunas protegen a su hijo de enfermedades graves y peligrosas. Funcionan ensenandole al cuerpo a defenderse. Es importante seguir el calendario de vacunacion que recomienda el doctor para mantener a su hijo protegido. | Vaccines protect your child from serious and dangerous diseases. They work by teaching the body to defend itself. It is important to follow the vaccination schedule recommended by the doctor to keep your child protected.',
      explanation: `## Explicacion Simple para Padres

Las **vacunas** son como un entrenamiento para el cuerpo de su hijo. Le ensenan a reconocer y combatir enfermedades peligrosas ANTES de que las contraiga.

### Como funcionan las vacunas

Imagine que las vacunas son como una foto de un "enemigo" que le muestran a los soldados del cuerpo de su hijo. Asi, cuando el verdadero enemigo aparezca, los soldados ya saben como pelear y lo derrotan rapidamente.

### Que vacunas necesita mi hijo

**Al nacer:**
- Hepatitis B (primera dosis)

**A los 2 meses:**
- DTaP (difteria, tetanos, tos ferina/whooping cough)
- Polio (IPV)
- Hib (meningitis por Haemophilus)
- Neumococo (PCV - previene meningitis y neumonia)
- Rotavirus (oral, previene diarrea grave)
- Hepatitis B (segunda dosis)

**A los 4 meses:**
- Las mismas vacunas de los 2 meses (segunda dosis)

**A los 6 meses:**
- Tercera dosis de varias vacunas
- Influenza (gripe): cada ano a partir de los 6 meses

**A los 12-15 meses:**
- MMR (sarampion, paperas, rubeola)
- Varicela (chickenpox)
- Hepatitis A
- Neumococo (cuarta dosis)

**A los 4-6 anos (antes de entrar a la escuela):**
- Refuerzos de DTaP, polio, MMR y varicela

**A los 11-12 anos:**
- Tdap (refuerzo de tetanos y tos ferina)
- HPV (previene cancer cervical y otros)
- Meningococo (previene meningitis)

### Son seguras las vacunas?

- **SI.** Son de los medicamentos mas estudiados del mundo
- Efectos comunes: dolor en el brazo, fiebre leve por 1-2 dias, irritabilidad
- Estos efectos son senal de que el cuerpo esta aprendiendo
- Efectos graves son extremadamente raros (menos de 1 en un millon)

### Mitos comunes

- **FALSO:** "Las vacunas causan autismo" - Muchos estudios grandes han demostrado que esto NO es cierto
- **FALSO:** "Es mejor que le de la enfermedad natural" - Las enfermedades pueden causar dano permanente o la muerte
- **FALSO:** "Muchas vacunas juntas son peligrosas" - El cuerpo puede manejar miles de antigenos a la vez

### Que hacer despues de la vacuna

- Puede darle acetaminofen (Tylenol) si tiene fiebre o dolor
- Ponga un pano fresco en el lugar de la inyeccion
- Es normal que este irritable por 1-2 dias
- Llame al doctor si: fiebre >104F (40C), llanto por >3 horas, o se ve muy enfermo

### Informacion importante para familias

- Las vacunas son **GRATIS** para ninos a traves del programa VFC (Vaccines for Children) incluso sin seguro medico
- Traiga la cartilla de vacunacion a CADA cita
- Si se retraso en las vacunas, puede ponerse al dia: hable con su doctor
- Amamantar NO es razon para retrasar vacunas

---
## Simple Explanation for Parents

**Vaccines** are like training for your child's body. They teach it to recognize and fight dangerous diseases BEFORE they catch them. The schedule, safety information, myths debunked, post-vaccine care, and VFC program information are covered in the Spanish section above.`,
      keyTerms: [
        {
          term: 'vacuna | vaccine',
          definition:
            'Preparacion que ensena al cuerpo a defenderse contra una enfermedad especifica sin causar la enfermedad. | Preparation that teaches the body to defend against a specific disease without causing the disease.',
          pronunciation: 'bah-KOO-nah',
        },
        {
          term: 'calendario de vacunacion | vaccination schedule',
          definition:
            'Lista de vacunas recomendadas organizadas por la edad en que deben aplicarse para la mejor proteccion. | List of recommended vaccines organized by the age at which they should be given for best protection.',
          pronunciation: 'kah-len-DAH-ree-oh deh bah-koo-nah-see-OHN',
        },
        {
          term: 'refuerzo | booster',
          definition:
            'Dosis adicional de una vacuna para "recordarle" al cuerpo como pelear contra la enfermedad y mantener la proteccion. | Additional dose of a vaccine to "remind" the body how to fight the disease and maintain protection.',
          pronunciation: 'reh-FWER-soh',
        },
        {
          term: 'efecto secundario | side effect',
          definition:
            'Reaccion temporal del cuerpo a la vacuna, como fiebre leve o dolor en el brazo, que generalmente dura 1-2 dias. | Temporary body reaction to the vaccine, such as mild fever or arm pain, usually lasting 1-2 days.',
          pronunciation: 'eh-FEK-toh seh-koon-DAH-ree-oh',
        },
      ],
      analogies: [
        'Las vacunas son como un simulacro de incendio para el cuerpo: practican la respuesta para que cuando llegue la verdadera emergencia, todos sepan que hacer. | Vaccines are like a fire drill for the body: they practice the response so when the real emergency comes, everyone knows what to do.',
        'El calendario de vacunacion es como un horario de clases: cada vacuna se da en el momento justo para que el cuerpo aprenda mejor. | The vaccination schedule is like a class schedule: each vaccine is given at just the right time for the body to learn best.',
      ],
      examples: [
        'Un bebe de 2 meses recibe varias vacunas en la misma visita. Esto es seguro porque su sistema de defensa puede manejar miles de "enemigos" a la vez. | A 2-month-old receives several vaccines at the same visit. This is safe because their defense system can handle thousands of "enemies" at once.',
        'Si su hijo de 3 anos nunca fue vacunado, todavia puede ponerse al dia. El doctor hara un plan especial para que reciba todas las vacunas que necesita. | If your 3-year-old was never vaccinated, they can still catch up. The doctor will make a special plan for them to receive all needed vaccines.',
      ],
      patientCounselingPoints: [
        'Traiga la cartilla de vacunacion a cada cita medica. Si la perdio, su doctor puede reconstruirla. | Bring the vaccination card to every medical appointment. If you lost it, your doctor can reconstruct it.',
        'Las vacunas son gratis para ninos a traves del programa VFC incluso si no tiene seguro medico o es indocumentado. | Vaccines are free for children through the VFC program even without health insurance or documentation.',
        'Si su hijo perdio una vacuna, no se preocupe: se puede poner al dia. No necesita empezar de cero. | If your child missed a vaccine, do not worry: they can catch up. No need to start over.',
        'Es seguro darle Tylenol despues de la vacuna si tiene fiebre, pero NO lo de antes de la vacuna. | It is safe to give Tylenol after the vaccine for fever, but do NOT give it before the vaccine.',
        'Amamantar a su bebe es compatible con todas las vacunas. No retrase las vacunas por la lactancia. | Breastfeeding your baby is compatible with all vaccines. Do not delay vaccines due to breastfeeding.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Las vacunas se clasifican en vivas atenuadas, inactivadas, de subunidades/conjugadas, toxoides, y de ARNm. El calendario del CDC sigue la maduracion del sistema inmune infantil. Los esquemas de recuperacion permiten a ninos retrasados ponerse al dia respetando intervalos minimos entre dosis. | Vaccines are classified as live attenuated, inactivated, subunit/conjugate, toxoid, and mRNA. The CDC schedule follows maturation of the child immune system. Catch-up schedules allow delayed children to get back on track while respecting minimum dose intervals.',
      explanation: `## Explicacion Intermedia | Intermediate Explanation

### Tipos de Vacunas | Vaccine Types

| Tipo | Descripcion | Ejemplos | Consideraciones |
|------|-------------|----------|-----------------|
| Viva atenuada | Virus/bacteria debilitados | MMR, varicela, rotavirus, BCG | Contraindicada en inmunosuprimidos |
| Inactivada | Microorganismo muerto | IPV (polio), hepatitis A, influenza inyectada | Requiere multiples dosis |
| Subunidad/conjugada | Solo una parte del microorganismo | PCV13/15/20, Hib, hepatitis B, HPV | Segura en inmunosuprimidos |
| Toxoide | Toxina inactivada | Difteria, tetanos (componentes de DTaP) | Requiere refuerzos periodicos |
| ARNm | Instrucciones geneticas para producir una proteina | COVID-19 (Pfizer, Moderna) | Requiere cadena de frio estricta |

### Calendario Detallado CDC 2025-2026 | Detailed Schedule

**Nacimiento:**
- HepB dosis 1 (dentro de 24 horas)

**2 meses:**
- DTaP-1, IPV-1, Hib-1, PCV15/20-1, RV-1, HepB-2

**4 meses:**
- DTaP-2, IPV-2, Hib-2, PCV15/20-2, RV-2

**6 meses:**
- DTaP-3, Hib-3 (segun marca), PCV15/20-3, RV-3 (si pentavalente), HepB-3
- Influenza anual (primera vez: 2 dosis separadas por 4 semanas)

**12-15 meses:**
- MMR-1, Varicela-1, HepA-1 (segunda 6+ meses despues), PCV15/20-4, Hib refuerzo

**15-18 meses:**
- DTaP-4

**4-6 anos:**
- DTaP-5, IPV-4, MMR-2, Varicela-2

**11-12 anos:**
- Tdap, HPV (2 dosis si inicia <15 anos; 3 dosis si >=15), MenACWY-1 (refuerzo a los 16)

**16-18 anos:**
- MenACWY refuerzo, MenB (decision clinica compartida)

### Intervalos Minimos y Esquemas de Recuperacion | Minimum Intervals

**Principios clave:**
- Si se retrasa una vacuna, NO se reinicia la serie: se continua donde se quedo
- Cada par de dosis tiene un intervalo minimo que debe respetarse
- Dosis dadas antes del intervalo minimo NO cuentan y deben repetirse
- Vacunas vivas (MMR, varicela) deben darse el mismo dia O separadas por >=28 dias

**Intervalos minimos comunes:**
| Vacuna | Intervalo Minimo entre Dosis |
|--------|------------------------------|
| DTaP dosis 1-2 | 4 semanas |
| DTaP dosis 2-3 | 4 semanas |
| DTaP dosis 3-4 | 6 meses |
| IPV dosis 1-2 | 4 semanas |
| MMR dosis 1-2 | 4 semanas |
| HepB dosis 1-2 | 4 semanas |
| HepB dosis 2-3 | 8 semanas Y >= 16 semanas despues de dosis 1 |

### Contraindicaciones Verdaderas vs. Falsas | True vs. False Contraindications

**Contraindicaciones verdaderas (NO vacunar):**
- Anafilaxia a dosis previa o componente de la vacuna
- Inmunosupresion severa para vacunas VIVAS
- Embarazo para vacunas VIVAS
- Intususcepcion previa para rotavirus
- Encefalopatia dentro de 7 dias de DTaP previa

**NO son contraindicaciones (SI vacunar):**
- Enfermedad leve con o sin fiebre
- Antibioticos actuales
- Exposicion reciente a enfermedad
- Prematurez (vacunar por edad cronologica, excepto HepB si <2 kg)
- Lactancia materna
- Historia familiar de reacciones adversas
- Alergia al huevo para MMR e influenza (ambas son seguras)

### Efectos Adversos | Adverse Effects

| Vacuna | Efectos Comunes | Efectos Raros pero Serios |
|--------|----------------|--------------------------|
| DTaP | Dolor local 50%, fiebre 25%, irritabilidad | Llanto inconsolable 1/100, convulsion febril 1/14,000 |
| MMR | Fiebre/sarpullido dia 7-12 en 5-15% | Trombocitopenia 1/25,000, convulsion febril 1/3,000 |
| Varicela | Dolor local 20%, sarpullido leve 4% | Herpes zoster (muy raro en ninos) |
| Rotavirus | Irritabilidad, diarrea leve | Intususcepcion 1-5/100,000 |
| PCV | Dolor local 50%, fiebre 10% | Muy raros |
| Influenza | Dolor local 30%, mialgias | Sindrome de Guillain-Barre 1-2/1,000,000 |

---
## Intermediate Explanation

[The above covers vaccine classification by type, the detailed CDC 2025-2026 immunization schedule, minimum intervals and catch-up principles, true vs. false contraindications, and adverse effect profiles for major pediatric vaccines.]`,
      keyTerms: [
        {
          term: 'vacuna viva atenuada | live attenuated vaccine',
          definition:
            'Vacuna con microorganismos vivos debilitados que generan respuesta inmune fuerte sin causar enfermedad. Contraindicada en inmunosuprimidos y embarazadas. Ejemplos: MMR, varicela, rotavirus. | Vaccine with weakened live organisms that generate strong immune response without causing disease. Contraindicated in immunosuppressed and pregnant. Examples: MMR, varicella, rotavirus.',
          pronunciation: 'bah-KOO-nah BEE-bah ah-teh-noo-AH-dah',
        },
        {
          term: 'vacuna conjugada | conjugate vaccine',
          definition:
            'Vacuna donde un polisacarido bacteriano se une a una proteina portadora para generar respuesta inmune T-dependiente, efectiva en menores de 2 anos. Ejemplos: PCV, Hib. | Vaccine where a bacterial polysaccharide is linked to a carrier protein to generate T-dependent immune response, effective in children under 2. Examples: PCV, Hib.',
          pronunciation: 'bah-KOO-nah kon-hoo-GAH-dah',
        },
        {
          term: 'esquema de recuperacion | catch-up schedule',
          definition:
            'Plan para poner al dia a ninos que no recibieron sus vacunas a tiempo, respetando intervalos minimos entre dosis. No se necesita reiniciar series. | Plan to catch up children who did not receive vaccines on time, respecting minimum intervals. No need to restart series.',
          pronunciation: 'es-KEH-mah deh reh-koo-peh-rah-see-OHN',
        },
        {
          term: 'contraindicacion | contraindication',
          definition:
            'Condicion que hace que una vacuna NO deba administrarse por riesgo de evento adverso grave. Ejemplo: anafilaxia previa a un componente. Las enfermedades leves NO son contraindicacion. | Condition meaning a vaccine should NOT be given due to serious adverse event risk. Example: previous anaphylaxis to a component. Mild illness is NOT a contraindication.',
          pronunciation: 'kon-trah-een-dee-kah-see-OHN',
        },
        {
          term: 'intususcepcion | intussusception',
          definition:
            'Complicacion rara de la vacuna contra rotavirus donde una parte del intestino se invagina dentro de otra, causando obstruccion. Riesgo: 1-5/100,000 (aceptable dado el beneficio). | Rare complication of rotavirus vaccine where one part of intestine telescopes into another, causing obstruction. Risk: 1-5/100,000 (acceptable given the benefit).',
          pronunciation: 'een-too-soo-SEP-see-OHN',
        },
      ],
      analogies: [
        'Las vacunas conjugadas son como ponerle una etiqueta de nombre a alguien que el sistema inmune no reconoceria solo: la proteina portadora le dice "presta atencion a esto!". | Conjugate vaccines are like putting a name tag on someone the immune system would not recognize alone: the carrier protein says "pay attention to this!".',
        'Los intervalos minimos entre dosis son como el tiempo de descanso entre entrenamientos: el cuerpo necesita tiempo para procesar y recordar la leccion anterior antes de la siguiente. | Minimum intervals between doses are like rest time between workouts: the body needs time to process and remember the previous lesson before the next one.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La inmunologia de la vacunacion involucra presentacion de antigenos por celulas dendriticas, activacion de celulas T helper, formacion de centros germinales con hipermutacion somatica y seleccion de afinidad, y generacion de celulas B de memoria y plasmaticas de larga vida. La inmadurez inmune neonatal explica el diseno del calendario vacunal. | Vaccine immunology involves antigen presentation by dendritic cells, T helper cell activation, germinal center formation with somatic hypermutation and affinity selection, and generation of long-lived memory B and plasma cells. Neonatal immune immaturity explains the vaccination schedule design.',
      explanation: `## Explicacion Avanzada de la Inmunologia | Advanced Immunology Explanation

### Cascada Inmunologica de la Vacunacion | Vaccine Immune Cascade

\`\`\`
Inyeccion de antigeno vacunal + adyuvante
        |
Captacion por celulas dendriticas (CPA) en el sitio de inyeccion
        |
Migracion via linfaticos aferentes al ganglio linfatico regional
        |
Procesamiento y presentacion via MHC-II a celulas T CD4+ naive
        |
Senal 1 (TCR-MHC/peptido) + Senal 2 (CD28-B7) + Senal 3 (citoquinas)
        |
Diferenciacion: Th1 (IFN-gamma) / Th2 (IL-4) / Tfh (IL-21)
        |
Celulas Tfh migran a foliculos B -> Centro germinal
        |
Hipermutacion somatica (AID) + Seleccion de afinidad por FDCs
        |
Cambio de clase de isotipo (IgM -> IgG, IgA)
        |
Celulas B de memoria (recirculan) + Celulas plasmaticas de larga vida (medula osea)
        |
Anticuerpos de alta afinidad (IgG) circulantes + Memoria inmunologica duradera
\`\`\`

### Tipos de Respuesta segun Clase de Vacuna | Response by Vaccine Class

| Tipo de Vacuna | Respuesta Predominante | Duracion | Refuerzos Necesarios |
|----------------|----------------------|----------|---------------------|
| Viva atenuada | T + B robusta; simula infeccion | Decadas a toda la vida | 1-2 dosis generalmente |
| Inactivada | Principalmente humoral; requiere adyuvante | Anos | Multiples dosis + refuerzos |
| Conjugada | T-dependiente (eficaz en <2 anos) | Anos | Serie primaria + refuerzo |
| Polisacarida pura | T-independiente; POBRE en <2 anos | Meses-anos | No genera memoria verdadera |
| Toxoide | Anti-toxina neutralizante | Anos | Refuerzos periodicos (cada 10a) |
| ARNm | Humoral + celular (incluyendo CD8+) | Meses a anos | En estudio |

### Inmunidad Neonatal: Por que el Calendario es como es | Neonatal Immunity

**Caracteristicas unicas del sistema inmune del recien nacido:**

| Caracteristica | Implicacion para Vacunacion |
|---------------|----------------------------|
| Sesgo Th2 (anti-inflamatorio) | Respuesta reducida a vacunas inactivadas en primeras semanas |
| Anticuerpos maternos IgG (transplacentarios) | Interfieren con vacunas vivas (por eso MMR a los 12 meses, no antes) |
| Centros germinales inmaduros | Menor produccion de anticuerpos de alta afinidad por dosis |
| Deficit de celulas B de zona marginal | Mala respuesta a polisacaridos puros -> necesidad de vacunas conjugadas |
| Mayor proporcion de T naive | Respuesta inicial mas lenta pero diversa |
| Deficit de produccion de IgG2 | Susceptibilidad a bacterias encapsuladas (neumococo, Hib, meningococo) |

**Por que multiples dosis?**
- Centros germinales neonatales producen menos celulas de memoria por dosis individual
- Cada refuerzo "amplifica" la respuesta: mas celulas de memoria con mayor afinidad
- La serie primaria establece el repertorio; los refuerzos lo expanden y consolidan
- El intervalo entre dosis permite maduracion completa del centro germinal antes del proximo estimulo

### Adyuvantes: Mecanismo de Accion | Adjuvant Mechanisms

| Adyuvante | Mecanismo | Usado en |
|-----------|-----------|----------|
| Sales de aluminio (alum) | Depot + activacion del inflamasoma NLRP3 + reclutamiento de APCs | DTaP, HepB, PCV, HepA |
| MF59 (emulsion de escualeno) | Reclutamiento masivo de APCs, mejora captacion de antigeno | Fluad (influenza) |
| AS01B (MPL + QS-21) | Activa TLR4, estimula Th1 | Shingrix (herpes zoster) |
| AS04 (MPL + alum) | Activa TLR4, sesgo Th1 | Cervarix (HPV) |
| CpG 1018 | Agonista TLR9, estimula Th1 e IFN tipo I | Heplisav-B (HepB adultos) |
| Matrix-M (saponina) | Nanoparticulas, activa APCs | Novavax (COVID) |

### Inmunidad de Rebano (Colectiva) | Herd Immunity

**Formula:** Umbral critico de inmunizacion = 1 - (1/R0)

| Enfermedad | R0 | Umbral de Inmunidad de Rebano |
|------------|-----|-------------------------------|
| Sarampion | 12-18 | 92-95% |
| Tos ferina | 12-17 | 92-94% |
| Difteria | 6-7 | 83-86% |
| Poliomielitis | 5-7 | 80-86% |
| Rubeola | 5-7 | 80-86% |
| Paperas | 4-7 | 75-86% |
| Influenza | 1.5-2 | 33-50% |

**Importancia clinica:** Protege a quienes NO pueden vacunarse: recien nacidos <6 meses, inmunosuprimidos, embarazadas (para ciertas vacunas), y personas con contraindicaciones medicas.

### Poblaciones Especiales | Special Populations

**Prematuros:**
- Vacunar por EDAD CRONOLOGICA (no corregida), excepto HepB si <2 kg al nacer
- Si madre HBsAg+: HepB + HBIG dentro de 12 horas del nacimiento
- Nirsevimab/palivizumab para RSV en prematuros de alto riesgo
- Mayor riesgo de apnea post-vacunacion en prematuros extremos (<28 semanas): monitorizar

**Ninos inmunosuprimidos:**
- CONTRAINDICADAS: todas las vacunas vivas (MMR, varicela, rotavirus, LAIV, BCG, fiebre amarilla)
- SI puede recibir: inactivadas, subunidades, conjugadas, toxoides
- Vacunar contactos del hogar completamente para proteccion indirecta
- Tras inmunosupresion: esperar 3-6 meses antes de vacunas vivas segun el agente

**Ninos con asplenia (funcional o anatomica):**
- Riesgo elevado de sepsis fulminante por bacterias encapsuladas
- Esquema acelerado: PCV + PPSV23, MenACWY + MenB, Hib completo
- Influenza anual obligatoria
- Profilaxis con penicilina diaria hasta los 5 anos (o de por vida para drepanocitosis)

---
## Advanced Immunology Explanation

[The above covers the vaccine immune cascade from injection to memory cell generation, response profiles by vaccine class, neonatal immune immaturity and its implications for schedule design, adjuvant mechanisms of action, herd immunity thresholds with R0 values, and special population considerations including premature infants, immunosuppressed children, and asplenic patients.]`,
      keyTerms: [
        {
          term: 'centro germinal | germinal center',
          definition:
            'Estructura dentro de los ganglios linfaticos donde las celulas B experimentan hipermutacion somatica y seleccion de afinidad, produciendo anticuerpos de alta calidad y celulas de memoria de larga vida. | Structure within lymph nodes where B cells undergo somatic hypermutation and affinity selection, producing high-quality antibodies and long-lived memory cells.',
          pronunciation: 'SEN-troh her-mee-NAHL',
        },
        {
          term: 'inmunidad de rebano | herd immunity',
          definition:
            'Proteccion indirecta cuando un porcentaje suficiente de la poblacion es inmune, reduciendo transmision. Umbral = 1-(1/R0). Para sarampion: ~95%. | Indirect protection when sufficient population percentage is immune, reducing transmission. Threshold = 1-(1/R0). For measles: ~95%.',
          pronunciation: 'een-moo-nee-DAHD deh reh-BAH-nyoh',
        },
        {
          term: 'adyuvante | adjuvant',
          definition:
            'Sustancia anadida a la vacuna para potenciar la respuesta inmune. Las sales de aluminio activan el inflamasoma NLRP3; los agonistas de TLR estimulan inmunidad innata. | Substance added to vaccines to enhance immune response. Aluminum salts activate NLRP3 inflammasome; TLR agonists stimulate innate immunity.',
          pronunciation: 'ad-yoo-BAHN-teh',
        },
        {
          term: 'hipermutacion somatica | somatic hypermutation',
          definition:
            'Proceso mediado por AID en el centro germinal donde los genes de inmunoglobulinas acumulan mutaciones puntuales aleatorias, seguido de seleccion de las celulas B con mayor afinidad por el antigeno. | AID-mediated process in germinal centers where immunoglobulin genes accumulate random point mutations, followed by selection of B cells with highest antigen affinity.',
          pronunciation: 'ee-per-moo-tah-see-OHN soh-MAH-tee-kah',
        },
        {
          term: 'respuesta T-dependiente vs T-independiente | T-dependent vs T-independent',
          definition:
            'Las vacunas conjugadas generan respuesta T-dependiente (memoria robusta, eficaz en <2 anos). Las polisacaridas puras son T-independientes (sin memoria verdadera, ineficaces en <2 anos por inmadurez de celulas B de zona marginal). | Conjugate vaccines generate T-dependent response (robust memory, effective in <2 years). Pure polysaccharide vaccines are T-independent (no true memory, ineffective in <2 years due to marginal zone B cell immaturity).',
          pronunciation: 'teh-deh-pen-dee-EN-teh',
        },
      ],
      clinicalNotes:
        'La inmadurez de las celulas B de zona marginal en menores de 2 anos explica directamente por que las vacunas polisacaridas puras (PPSV23) son ineficaces en este grupo y por que se desarrollaron las conjugadas. En prematuros, vacunar por edad cronologica es la regla porque reciben MENOS anticuerpos maternos (la transferencia de IgG es exponencial en el tercer trimestre). Siempre verificar HBsAg materno antes del alta de todo recien nacido: si es positivo, dar HepB + HBIG en <12 horas. Para ninos asplenicos, la profilaxis con penicilina es tan importante como las vacunas, ya que la respuesta vacunal puede ser suboptima. | Marginal zone B cell immaturity in children under 2 directly explains why pure polysaccharide vaccines (PPSV23) are ineffective and why conjugate vaccines were developed. In premature infants, vaccinate by chronological age because they receive LESS maternal antibody (IgG transfer is exponential in the third trimester). Always verify maternal HBsAg before discharge: if positive, give HepB + HBIG within 12 hours. For asplenic children, penicillin prophylaxis is as important as vaccines since vaccine response may be suboptimal.',
    },

    4: {
      level: 4,
      summary:
        'La vacunologia pediatrica avanzada integra plataformas de nueva generacion (ARNm, vectores virales, nanoparticulas), correlatos de proteccion para guiar desarrollo y aprobacion de vacunas, sistemas de farmacovigilancia post-licenciamiento (VAERS, VSD), el manejo de la hesitacion vacunal con estrategias basadas en evidencia como la entrevista motivacional y el lenguaje presuntivo, y consideraciones culturales especificas para familias hispanas/latinas. | Advanced pediatric vaccinology integrates next-generation platforms (mRNA, viral vectors, nanoparticles), correlates of protection to guide development and approval, post-licensure pharmacovigilance systems (VAERS, VSD), evidence-based vaccine hesitancy management including motivational interviewing and presumptive language, and specific cultural considerations for Hispanic/Latino families.',
      explanation: `## Explicacion de Posgrado | Graduate-Level Explanation

### Plataformas Vacunales de Nueva Generacion | Next-Gen Platforms

| Plataforma | Mecanismo | Ventajas | Limitaciones |
|------------|-----------|----------|-------------|
| ARNm (LNP) | mRNA codifica antigeno; traduccion en ribosomas del huesped | Desarrollo rapido (<100 dias), respuesta T + B | Cadena de frio -20 a -70C, reactogenicidad |
| Vector viral replicante | Virus atenuado porta gen del antigeno | Respuesta robusta con una dosis | Inmunidad anti-vector preexistente |
| Vector viral no replicante | Adenovirus deficiente porta gen | Buena respuesta T, estable a 2-8C | Inmunidad anti-vector |
| Nanoparticulas proteicas | Proteinas auto-ensambladas, VLPs | Estable, respuesta strong | Produccion compleja y costosa |
| Outer membrane vesicles | Vesiculas de membrana externa bacteriana | Multiples antigenos nativos | Variabilidad de composicion entre lotes |
| Self-amplifying RNA (saRNA) | ARN con replicasa; dosis menores | Menor dosis que mRNA convencional | En desarrollo temprano |

### Correlatos de Proteccion | Correlates of Protection

| Vacuna | Correlato Establecido | Nivel Protector |
|--------|----------------------|-----------------|
| Hepatitis B | Anti-HBs | >= 10 mIU/mL |
| Tetanos | Anti-toxina tetanica | >= 0.01 IU/mL (ELISA) |
| Hib | Anti-PRP IgG | >= 0.15 mcg/mL (corto plazo), >= 1.0 mcg/mL (largo plazo) |
| Sarampion | Anti-sarampion IgG | >= 120 mIU/mL (PRNT) |
| Neumococo | Anti-capsular IgG | >= 0.35 mcg/mL (OPA preferido) |
| Influenza | Anti-HA (HAI) | >= 1:40 (adultos; menos claro en ninos) |
| Varicela | Anti-VZV IgG | >= 5 gpELISA units/mL |
| Pertussis | Sin correlato establecido | - (solo eficacia clinica) |
| Rotavirus | Sin correlato establecido | - (solo eficacia clinica) |

### Farmacovigilancia Post-Licenciamiento | Post-Licensure Surveillance

| Sistema | Tipo | Funcion | Poblacion |
|---------|------|---------|-----------|
| VAERS | Pasivo (reportes espontaneos) | Deteccion de senales | Nacional EE.UU. |
| VSD (Vaccine Safety Datalink) | Activo (cohorte) | Estudios epidemiologicos | 12 millones personas |
| CISA | Consulta clinica | Evaluacion de casos individuales complejos | Referencia |
| BEST (CMS) | Activo | Vigilancia Medicare/Medicaid | Poblacion asegurada |
| V-safe | Activo (smartphone) | Auto-reporte de eventos | COVID-19 inicialmente |

**Senales de seguridad historicas detectadas:**
| Senal | Vacuna | Riesgo | Resultado |
|-------|--------|--------|-----------|
| Intususcepcion | RotaShield | 1/10,000 | Retiro del mercado (1999) |
| Intususcepcion | RotaTeq/Rotarix | 1-5/100,000 | Aceptado (beneficio >> riesgo) |
| Trombosis con trombocitopenia (TTS) | Ad26.COV2.S (J&J) | 3.8/1,000,000 | Restriccion de uso |
| Miocarditis | mRNA COVID-19 | 12.6/1,000,000 (varones 12-17) | Monitoreo, mayormente leve |
| Narcolepsia | Pandemrix (H1N1) | 1/55,000 | Retirada en Europa |

### Hesitacion Vacunal: Marco Teorico y Estrategias | Vaccine Hesitancy

**Continuo de hesitacion (OMS SAGE):**
\`\`\`
Aceptacion total -> Aceptacion pasiva -> Hesitacion -> Rechazo selectivo -> Rechazo total
\`\`\`

**Modelo 3C de la OMS:**
1. **Confianza (Confidence):** Seguridad de la vacuna, competencia del sistema de salud, motivaciones de los fabricantes
2. **Complacencia (Complacency):** Percepcion de bajo riesgo de enfermedad; "las enfermedades ya no existen"
3. **Conveniencia (Convenience):** Acceso, costo, horarios de clinica, distancia

**Estrategias basadas en evidencia:**
| Estrategia | Nivel de Evidencia | Cuando Usar |
|-----------|-------------------|-------------|
| Lenguaje presuntivo ("Hoy toca las vacunas") | Fuerte (RCTs) | Todos los padres, primera linea |
| Entrevista motivacional | Fuerte | Padres hesitantes con dudas especificas |
| Escuchar y validar preocupaciones | Fuerte | Siempre, como base de la comunicacion |
| Narrativas/testimonios de padres | Moderada-emergente | Comunidades con baja cobertura |
| Correccion directa de mitos | Moderada (riesgo de backfire) | Solo si el padre trae el mito |
| Proveedores de confianza | Fuerte | Especialmente en comunidades hispanas |

### Consideraciones Culturales para Familias Hispanas/Latinas | Cultural Considerations

**Valores culturales que influyen en decisiones vacunales:**
- **Familismo:** Decisiones de salud se toman en familia extendida (incluir abuelos, comadres, padrinos)
- **Respeto:** Relacion respetuosa con autoridad medica puede inhibir expresion de dudas; crear espacio seguro
- **Personalismo:** Relacion calida y personal con el proveedor aumenta confianza mas que datos frios
- **Fatalismo parcial:** "Si Dios quiere"; abordar integrando fe y ciencia, no confrontando
- **Confianza en remedios tradicionales:** No desestimar; reconocer y luego complementar con vacunas
- **Status migratorio:** Miedo a que datos medicos se compartan con inmigracion; clarificar proteccion HIPAA

**Estrategias especificas:**
1. Materiales en espanol a nivel de lectura 4to-6to grado (no traduccion literal de ingles)
2. Promotoras de salud como puente cultural entre familias y sistema de salud
3. Clinicas de vacunacion en iglesias, escuelas, mercados comunitarios, consulados
4. Inclusion activa de la familia extendida en conversaciones sobre vacunas
5. Programa VFC: enfatizar proactivamente que las vacunas son GRATUITAS sin importar status migratorio
6. Evitar jerga medica; usar metaforas culturalmente relevantes

---
## Graduate-Level Explanation

[The above covers next-generation vaccine platforms, correlates of protection, post-licensure pharmacovigilance systems and safety signals, evidence-based vaccine hesitancy strategies (presumptive language, motivational interviewing), and culturally specific communication strategies for Hispanic/Latino families.]`,
      keyTerms: [
        {
          term: 'correlato de proteccion | correlate of protection',
          definition:
            'Marcador inmunologico medible (generalmente nivel de anticuerpos) que se correlaciona con proteccion contra enfermedad. Permite evaluar eficacia vacunal sin ensayos clinicos masivos. No todas las vacunas tienen correlatos establecidos (pertussis, rotavirus). | Measurable immunological marker (usually antibody level) correlating with disease protection. Allows evaluating efficacy without massive trials. Not all vaccines have established correlates (pertussis, rotavirus).',
          pronunciation: 'koh-reh-LAH-toh deh proh-tek-see-OHN',
        },
        {
          term: 'farmacovigilancia | pharmacovigilance',
          definition:
            'Ciencia de deteccion, evaluacion y prevencion de efectos adversos post-comercializacion. Incluye sistemas pasivos (VAERS: reportes espontaneos) y activos (VSD: estudios de cohorte en 12 millones de personas). | Science of detecting, evaluating, and preventing adverse effects post-marketing. Includes passive (VAERS: spontaneous reports) and active (VSD: cohort studies in 12 million people) systems.',
          pronunciation: 'far-mah-koh-bee-hee-LAHN-see-ah',
        },
        {
          term: 'hesitacion vacunal | vaccine hesitancy',
          definition:
            'Retraso o rechazo de vacunas a pesar de su disponibilidad. Fenomeno complejo explicado por el modelo 3C de la OMS: Confianza, Complacencia y Conveniencia. | Delay or refusal of vaccines despite availability. Complex phenomenon explained by the WHO 3C model: Confidence, Complacency, and Convenience.',
          pronunciation: 'eh-see-tah-see-OHN bah-koo-NAHL',
        },
        {
          term: 'lenguaje presuntivo | presumptive language',
          definition:
            'Estrategia de comunicacion donde el proveedor presenta la vacunacion como el siguiente paso esperado ("Hoy toca las vacunas de su bebe") en lugar de preguntar si quiere vacunar. Significativamente mas efectivo para aumentar aceptacion. | Communication strategy where the provider presents vaccination as the expected next step ("Today it is time for your baby\'s vaccines") instead of asking. Significantly more effective for increasing acceptance.',
          pronunciation: 'len-GWAH-heh preh-soon-TEE-voh',
        },
        {
          term: 'familismo | familism',
          definition:
            'Valor cultural latino/hispano de priorizar la familia extendida en decisiones de salud. Implica que la educacion vacunal debe incluir a abuelos, comadres y padrinos quienes pueden tener influencia significativa en la decision. | Latino/Hispanic cultural value of prioritizing extended family in health decisions. Implies vaccine education should include grandparents and godparents who may have significant decision influence.',
          pronunciation: 'fah-mee-LEES-moh',
        },
      ],
      clinicalNotes:
        'En la practica con familias hispanas/latinas, el lenguaje presuntivo ("Hoy le tocan las vacunas de los 2 meses") es significativamente mas efectivo que el lenguaje participativo ("Le gustaria vacunar hoy?"). Cuando surge hesitacion, la entrevista motivacional es preferible a la correccion directa de mitos (riesgo de efecto backfire). El familismo implica prepararse para responder preguntas de la abuela o comadre, quienes frecuentemente tienen influencia decisiva. El programa VFC es el recurso mas subutilizado: muchas familias no saben que las vacunas son gratuitas independientemente del status migratorio. Un padre que acepta un esquema parcial es preferible a uno que abandona completamente el cuidado pediatrico por sentirse juzgado. | In practice with Hispanic/Latino families, presumptive language ("Today your baby is due for 2-month vaccines") is significantly more effective than participatory language ("Would you like to vaccinate today?"). When hesitancy arises, motivational interviewing is preferable to direct myth correction (backfire effect risk). Familismo means being prepared to answer questions from the grandmother or comadre who often have decisive influence. The VFC program is the most underutilized resource: many families do not know vaccines are free regardless of immigration status. A parent who accepts a partial schedule is preferable to one who completely abandons pediatric care from feeling judged.',
    },

    5: {
      level: 5,
      summary:
        'La frontera de la vacunologia pediatrica incluye el paradigma nirsevimab para inmunizacion pasiva universal contra RSV, la vacunacion maternal como estrategia pediatrica (Tdap, influenza, RSV-Abrysvo), vacunas en pipeline (CMV-mRNA, GBS maternal, universal influenza), equidad vacunal global con datos alarmantes de ninos "zero-dose", y controversias activas sobre mandatos, esquemas alternativos, y vacunacion COVID pediatrica. | The frontier of pediatric vaccinology includes the nirsevimab paradigm for universal passive RSV immunization, maternal vaccination as a pediatric strategy (Tdap, influenza, RSV-Abrysvo), pipeline vaccines (CMV-mRNA, maternal GBS, universal influenza), global vaccine equity with alarming zero-dose children data, and active controversies on mandates, alternative schedules, and pediatric COVID vaccination.',
      explanation: `## Explicacion Profesional (Nivel MD) | MD/Professional-Level Explanation

### Pipeline de Vacunas Pediatricas | Pediatric Vaccine Pipeline

| Vacuna | Target | Estado | Relevancia Pediatrica |
|--------|--------|--------|----------------------|
| Nirsevimab (Beyfortus) | RSV (mAb anti-F) | Aprobada 2023 | Dosis unica para todos los lactantes en temporada RSV |
| Abrysvo (RSV maternal) | RSV (proteina F prefusion) | Aprobada 2023 | Proteccion pasiva neonatal via IgG transplacentaria |
| Vaxelis (hexavalente) | DTaP-IPV-Hib-HepB | Aprobada | Reduce numero de inyecciones |
| mRNA-1647 (CMV) | Citomegalovirus | Fase 3 | Prevencion de CMV congenito (principal causa infecciosa de sordera) |
| Vacuna GBS maternal | Streptococcus grupo B | Fase 2/3 | Prevencion de sepsis neonatal precoz |
| Vacuna universal influenza | Tallo de hemaglutinina | Fase 1/2 | Eliminaria vacunacion anual |
| Vacuna norovirus | Norovirus VLP | Fase 2 | Principal causa de gastroenteritis aguda pediatrica |
| Vacuna EBV (mRNA) | Epstein-Barr virus | Fase 1 | Prevencion de mononucleosis y potencialmente esclerosis multiple |

### Nirsevimab: Cambio de Paradigma | Nirsevimab Paradigm Shift

| Caracteristica | Palivizumab (antiguo) | Nirsevimab (nuevo) |
|---------------|----------------------|-------------------|
| Tipo | mAb convencional | mAb de vida media extendida (mutaciones YTE en Fc) |
| Dosificacion | Mensual x 5 meses | Dosis UNICA |
| Poblacion elegible | Solo alto riesgo (prematuros, cardiopatia, DBP) | TODOS los lactantes <8 meses entrando a temporada RSV |
| Costo por temporada | $5,000-10,000 | ~$500 |
| Eficacia vs. hospitalizacion | 45-55% | 77-83% |
| Mecanismo de extension de vida media | N/A | Mutaciones YTE en dominio Fc: M252Y/S254T/T256E -> mayor union a FcRn -> reciclaje aumentado |
| Impacto primera temporada (2023-2024) | Referencia | Reduccion del 90% en hospitalizaciones RSV donde se implemento |

**Decision clinica: Nirsevimab vs. Abrysvo maternal**
- No son mutuamente excluyentes para prematuros que perdieron ventana de transferencia
- Para embarazadas vacunadas con Abrysvo entre semanas 32-36: el recien nacido NO necesita nirsevimab
- Si NO se vacuno la madre: el lactante recibe nirsevimab al inicio de la temporada RSV
- Prematuros extremos: considerar AMBOS (transferencia de anticuerpos puede ser insuficiente)

### Vacunacion Maternal como Estrategia Pediatrica | Maternal Vaccination

| Vacuna Maternal | Antigeno | Ventana Optima | Mecanismo de Proteccion Neonatal |
|----------------|----------|----------------|-------------------------------|
| Tdap | Pertussis | 27-36 semanas | Anti-PT IgG transplacentaria; protege RN 0-3 meses |
| Influenza | HA/NA | Cualquier trimestre | Anti-HA IgG transplacentaria + proteccion directa materna |
| RSV (Abrysvo) | Proteina F prefusion | 32-36 semanas | Anti-F IgG transplacentaria; protege 0-6 meses |
| COVID-19 | Spike protein | Cualquier trimestre | Anti-spike IgG transplacentaria; neutralizante en RN |
| GBS (en desarrollo) | Capsular conjugado | 3er trimestre | Anti-capsular IgG transplacentaria |

**Fisiologia de la transferencia de IgG:**
- Receptor FcRn en sincitiotrofoblasto media transporte activo de IgG materna
- Transferencia exponencial en el tercer trimestre (semana 28-40)
- IgG1 > IgG3 > IgG4 > IgG2 en eficiencia de transferencia
- Prematuros <32 semanas: niveles significativamente menores -> vulnerabilidad

### Equidad Vacunal Global | Global Vaccine Equity

| Indicador | Dato 2023 |
|-----------|-----------|
| Ninos "zero-dose" globales | 14.5 millones (sin ninguna vacuna) |
| Cobertura DTP3 global | 84% (vs. 86% pre-pandemia) |
| Brecha alto vs. bajo ingreso | 20-30 puntos porcentuales |
| Muertes prevenibles por vacunacion | 1.5 millones/ano |
| Brotes de sarampion en 2023-2024 | 283,000 casos reportados (aumento 79% vs. 2022) |

**Poblacion hispana/latina:**
- America Latina: cobertura promedio 80% pero con variabilidad intrarregional (40-95%)
- Comunidades indigenas: coberturas tan bajas como 40-60%
- Ninos hispanos en EE.UU.: cobertura global comparable pero retrasos en inicio de serie
- Migrantes y desplazados: mayor riesgo de esquemas incompletos

**Iniciativas para cerrar brechas:**
| Iniciativa | Enfoque |
|-----------|---------|
| GAVI | Financiamiento y acceso para paises de bajo ingreso |
| IA2030 (OMS) | Marco estrategico para equidad vacunal global |
| OPS Fondo Rotatorio | Compra grupal de vacunas para America Latina |
| VFC (EE.UU.) | Vacunas gratuitas para ninos elegibles |
| mRNA technology transfer hubs | Capacidad de produccion local en paises de ingreso medio |
| Big Catch-Up (OMS/UNICEF) | Recuperacion de cobertura post-COVID |

### Controversias Actuales | Current Controversies

**1. Demasiadas vacunas?**
- Sistema inmune neonatal responde a ~10,000 antigenos simultaneamente
- Vacunas modernas: ~150 antigenos totales (vs. ~3,000 en 1980 con menos vacunas)
- No hay evidencia de "sobrecarga inmune" en ningun estudio
- Pero: la percepcion parental es real y debe abordarse con empatia, no con datos frios

**2. Esquemas alternativos ("delayed schedule" de Dr. Sears, etc.):**
- Cero evidencia de beneficio; aumentan ventanas de vulnerabilidad
- Asociados con menor cobertura final (6x mas probable de no completar)
- Pero dilema etico: rechazar cualquier vacunacion vs. aceptar esquema parcial

**3. Mandatos vacunales:**
- Leyes de mandato escolar varian por estado/pais
- Evidencia: eliminacion de exenciones no medicas (California SB 277) aumento cobertura
- Tension irresoluble: salud publica vs. autonomia parental

**4. COVID-19 en pediatria:**
- Eficacia comprobada pero uptake extremadamente bajo (10-30% en <5 anos en EE.UU.)
- Miocarditis: 12.6/1,000,000 en varones 12-17 (mayormente leve, autolimitada, resolucion completa)
- En comunidades hispanas: baja captacion por combinacion de barreras idiomaticas, desinformacion en redes sociales en espanol, y desconfianza institucional
- Debate: refuerzos periodicos vs. transicion a endemicidad

---
## MD/Professional-Level Explanation

[The above covers the pediatric vaccine pipeline including nirsevimab paradigm shift, maternal vaccination immunology with FcRn-mediated transfer, global vaccine equity crisis, and current controversies on schedule overload perception, alternative schedules, mandates, and pediatric COVID vaccination.]`,
      keyTerms: [
        {
          term: 'nirsevimab (Beyfortus) | nirsevimab',
          definition:
            'Anticuerpo monoclonal anti-F de RSV de vida media extendida (mutaciones YTE en Fc: M252Y/S254T/T256E que aumentan union a FcRn). Primera inmunizacion pasiva UNIVERSAL para lactantes; dosis unica con 77-83% eficacia contra hospitalizacion. Temporada 2023-2024: reduccion del 90% en hospitalizaciones RSV. | Extended half-life anti-RSV F monoclonal antibody (YTE mutations in Fc: M252Y/S254T/T256E increasing FcRn binding). First UNIVERSAL passive immunization for infants; single dose with 77-83% efficacy against hospitalization. 2023-2024 season: 90% reduction in RSV hospitalizations.',
          pronunciation: 'neer-SEH-vee-mab',
        },
        {
          term: 'vacunacion maternal | maternal vaccination',
          definition:
            'Estrategia de vacunar a la madre durante el embarazo (generalmente 3er trimestre) para transferir IgG protectora al feto via receptor FcRn en sincitiotrofoblasto. Modelo establecido para pertussis (Tdap), influenza, y RSV (Abrysvo). | Strategy of vaccinating the mother during pregnancy (usually 3rd trimester) to transfer protective IgG to the fetus via FcRn receptor in syncytiotrophoblast. Established model for pertussis (Tdap), influenza, and RSV (Abrysvo).',
          pronunciation: 'bah-koo-nah-see-OHN mah-TER-nahl',
        },
        {
          term: 'Fondo Rotatorio OPS | PAHO Revolving Fund',
          definition:
            'Mecanismo de compra grupal de vacunas de la Organizacion Panamericana de la Salud que permite a paises de America Latina acceder a vacunas a precios reducidos mediante economia de escala y poder de negociacion colectivo. | Pan American Health Organization pooled vaccine procurement mechanism enabling Latin American countries to access vaccines at reduced prices through economies of scale and collective negotiating power.',
          pronunciation: 'FOHN-doh roh-tah-TOH-ree-oh',
        },
        {
          term: 'zero-dose children | ninos zero-dose',
          definition:
            'Ninos que no han recibido ninguna dosis de ninguna vacuna. Representan 14.5 millones a nivel global (2023) y son indicadores de las inequidades mas profundas en acceso a servicios de salud basicos. | Children who have not received any dose of any vaccine. Represent 14.5 million globally (2023) and indicate the deepest inequities in access to basic health services.',
          pronunciation: 'SEH-roh-dohs',
        },
        {
          term: 'FcRn | neonatal Fc receptor',
          definition:
            'Receptor en sincitiotrofoblasto placentario que media el transporte activo de IgG materna al feto. La transferencia es exponencial en el 3er trimestre. Las mutaciones YTE en anticuerpos terapeuticos aumentan su union a FcRn, extendiendo la vida media serica. | Placental syncytiotrophoblast receptor mediating active transport of maternal IgG to the fetus. Transfer is exponential in the 3rd trimester. YTE mutations in therapeutic antibodies increase FcRn binding, extending serum half-life.',
          pronunciation: 'efe-seh-ene',
        },
      ],
      clinicalNotes:
        'Nirsevimab ha transformado la prevencion de RSV. La decision clinica entre nirsevimab y Abrysvo maternal no es excluyente en prematuros extremos. Para el pediatra en practica, el VFC es el recurso mas subutilizado para familias hispanas sin seguro: debe mencionarse proactivamente en cada visita. Los esquemas alternativos carecen de toda evidencia y aumentan ventanas de vulnerabilidad; sin embargo, un padre que acepta un esquema parcial es preferible a uno que abandona completamente el cuidado por sentirse juzgado. La miocarditis post-mRNA COVID-19 en adolescentes varones es real pero mayormente leve (resolucion completa en >95% a 90 dias) y el riesgo de miocarditis por COVID-19 natural es mayor. Los brotes de sarampion de 2023-2024 demuestran que el retroceso en cobertura tiene consecuencias reales e inmediatas. | Nirsevimab has transformed RSV prevention. The clinical decision between nirsevimab and maternal Abrysvo is not mutually exclusive in extreme premature infants. For the practicing pediatrician, VFC is the most underutilized resource for uninsured Hispanic families: it should be proactively mentioned at every visit. Alternative schedules lack all evidence and increase vulnerability windows; however, a parent accepting a partial schedule is preferable to one completely abandoning care from feeling judged. Post-mRNA COVID-19 myocarditis in adolescent males is real but mostly mild (complete resolution in >95% at 90 days) and the risk of myocarditis from natural COVID-19 infection is higher. The 2023-2024 measles outbreaks demonstrate that coverage decline has real, immediate consequences.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ref-cdc-schedule-2025',
      type: 'guideline',
      title: 'Recommended Child and Adolescent Immunization Schedule, United States, 2025-2026',
      authors: ['Centers for Disease Control and Prevention', 'Advisory Committee on Immunization Practices'],
      source: 'CDC',
      url: 'https://www.cdc.gov/vaccines/schedules/',
    },
    {
      id: 'ref-aap-redbook-2024',
      type: 'textbook',
      title: 'Red Book: 2024-2027 Report of the Committee on Infectious Diseases',
      authors: ['American Academy of Pediatrics'],
      source: 'AAP, 33rd Edition',
    },
    {
      id: 'ref-plotkin-vaccines-8e',
      type: 'textbook',
      title: 'Plotkin\'s Vaccines, 8th Edition',
      authors: ['Plotkin, S.A.', 'Orenstein, W.A.', 'Offit, P.A.', 'Edwards, K.M.'],
      source: 'Elsevier',
    },
    {
      id: 'ref-who-sage-hesitancy',
      type: 'guideline',
      title: 'Report of the SAGE Working Group on Vaccine Hesitancy',
      authors: ['WHO SAGE Working Group'],
      source: 'World Health Organization',
      url: 'https://www.who.int/immunization/sage/meetings/2014/october/SAGE_working_group_revised_report_vaccine_hesitancy.pdf',
    },
    {
      id: 'ref-nirsevimab-nejm',
      type: 'journal',
      title: 'Nirsevimab for Prevention of RSV in Healthy Late-Preterm and Term Infants',
      authors: ['Hammitt, L.L.', 'Dagan, R.', 'Yuan, Y.'],
      source: 'New England Journal of Medicine, 2022',
    },
  ],

  crossReferences: [
    {
      targetId: 'pediatrics-desarrollo-infantil-child-development',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Desarrollo Infantil | Child Development',
    },
    {
      targetId: 'pediatrics-enfermedades-exantematicas-exanthems',
      targetType: 'topic',
      relationship: 'related',
      label: 'Enfermedades Exantematicas | Childhood Exanthems',
    },
    {
      targetId: 'pediatrics-neonatologia-basica-neonatology',
      targetType: 'topic',
      relationship: 'related',
      label: 'Neonatologia Basica | Basic Neonatology',
    },
  ],

  tags: {
    systems: ['immune'],
    topics: [
      'pediatrics',
      'immunization',
      'vaccines',
      'preventive medicine',
      'public health',
      'health equity',
      'immunology',
    ],
    keywords: [
      'vacunacion',
      'immunization',
      'calendario de vacunacion',
      'vaccine schedule',
      'hesitacion vacunal',
      'vaccine hesitancy',
      'nirsevimab',
      'RSV',
      'VFC',
      'inmunidad de rebano',
      'herd immunity',
      'vacunas conjugadas',
      'familismo',
      'promotora de salud',
      'correlatos de proteccion',
      'farmacovigilancia',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'preventive medicine', 'family medicine'],
    },
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
