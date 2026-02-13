/**
 * Vacunación Pediátrica / Pediatric Immunization
 *
 * Contenido educativo bilingüe (español primero) sobre el esquema de vacunación
 * pediátrica, tipos de vacunas, preocupaciones comunes, y educación para
 * padres hispanohablantes.
 *
 * Bilingual educational content (Spanish-first) on pediatric immunization
 * schedule, vaccine types, common concerns, and Spanish-speaking parent education.
 */

import { EducationalContent } from '../types';

export const VACUNACION_IMMUNIZATION: EducationalContent = {
  id: 'condition-vacunacion-immunization',
  type: 'condition',
  name: 'Pediatric Immunization',
  nameEs: 'Vacunación Pediátrica',
  alternateNames: [
    'Childhood vaccines',
    'Vacunas infantiles',
    'Esquema de vacunación',
    'Immunization schedule',
    'Calendario de vacunación',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Las vacunas protegen a los niños de enfermedades graves. Funcionan enseñándole al cuerpo a defenderse sin causar la enfermedad. Seguir el calendario de vacunación recomendado es muy importante para la salud de su hijo. | Vaccines protect children from serious diseases. They work by teaching the body to defend itself without causing the disease. Following the recommended vaccination schedule is very important for your child\'s health.',
      explanation: `## Explicación Simple

Las **vacunas** son como un entrenamiento para el sistema de defensa de su hijo. Le enseñan al cuerpo a reconocer y combatir enfermedades peligrosas antes de que las contraiga.

### ¿Cómo funcionan las vacunas?

Imagine que las vacunas son como una foto de un "enemigo" que le muestran a los soldados de su cuerpo. Así, cuando el verdadero enemigo aparezca, los soldados ya saben cómo pelear.

### ¿Qué vacunas necesita mi hijo?

**Al nacer:**
- Hepatitis B (primera dosis)

**A los 2 meses:**
- DTaP (difteria, tétanos, tos ferina)
- IPV (polio)
- Hib (Haemophilus influenzae tipo b)
- PCV13 (neumococo)
- Rotavirus (oral)
- Hepatitis B (segunda dosis)

**A los 4 meses:**
- Las mismas vacunas de los 2 meses (segunda dosis)

**A los 6 meses:**
- Tercera dosis de varias vacunas
- Influenza (gripe) — cada año a partir de los 6 meses

**A los 12-15 meses:**
- MMR (sarampión, paperas, rubéola)
- Varicela
- Hepatitis A
- PCV13 (cuarta dosis)

**A los 4-6 años:**
- Refuerzos de DTaP, IPV, MMR y varicela

### ¿Son seguras las vacunas?

- **Sí.** Las vacunas son de los medicamentos más estudiados del mundo
- Efectos secundarios comunes: dolor en el brazo, fiebre leve, irritabilidad
- Estos efectos duran 1-2 días y son señal de que el cuerpo está aprendiendo
- Efectos graves son extremadamente raros

### Mitos comunes sobre las vacunas

- **MITO:** "Las vacunas causan autismo" → **FALSO.** Muchos estudios han probado que esto no es cierto
- **MITO:** "Es mejor que le dé la enfermedad natural" → **FALSO.** Las enfermedades pueden ser mortales
- **MITO:** "Muchas vacunas juntas son peligrosas" → **FALSO.** El cuerpo puede manejar múltiples vacunas a la vez

### ¿Qué hacer después de la vacuna?

- Puede darle acetaminofén (Tylenol) si tiene fiebre o dolor
- Ponga un paño fresco en el lugar de la inyección
- Es normal que esté irritable por 1-2 días
- Llame al doctor si la fiebre pasa de 104°F (40°C) o si se ve muy enfermo

---
## Simple Explanation

**Vaccines** are like training for your child's defense system. They teach the body to recognize and fight dangerous diseases before they catch them.

Think of vaccines as showing a photo of an "enemy" to your body's soldiers. That way, when the real enemy shows up, the soldiers already know how to fight.

[The schedule, safety information, common myths, and post-vaccine care are covered in the Spanish section above with the same structure and content.]`,
      keyTerms: [
        {
          term: 'vacuna',
          definition:
            'Preparación que enseña al cuerpo a defenderse contra una enfermedad específica sin causar la enfermedad. | Preparation that teaches the body to defend against a specific disease without causing the disease.',
          pronunciation: 'bah-KOO-nah',
        },
        {
          term: 'calendario de vacunación',
          definition:
            'Lista de vacunas recomendadas organizadas por la edad en que deben aplicarse. | List of recommended vaccines organized by the age at which they should be given.',
          pronunciation: 'kah-len-DAH-ree-oh deh bah-koo-nah-see-OHN',
        },
        {
          term: 'refuerzo',
          definition:
            'Dosis adicional de una vacuna para "recordarle" al cuerpo cómo pelear contra la enfermedad. | Additional dose of a vaccine to "remind" the body how to fight the disease.',
          pronunciation: 'reh-FWER-soh',
        },
        {
          term: 'efecto secundario',
          definition:
            'Reacción temporal del cuerpo a la vacuna, como fiebre leve o dolor en el brazo. | Temporary body reaction to the vaccine, such as mild fever or arm pain.',
          pronunciation: 'eh-FEK-toh seh-koon-DAH-ree-oh',
        },
      ],
      analogies: [
        'Las vacunas son como un simulacro de incendio para el cuerpo — practican la respuesta para que cuando llegue la verdadera emergencia, todos sepan qué hacer. | Vaccines are like a fire drill for the body — they practice the response so when the real emergency comes, everyone knows what to do.',
        'El calendario de vacunación es como un horario de clases — cada vacuna se da en el momento justo para que el cuerpo aprenda mejor. | The vaccination schedule is like a class schedule — each vaccine is given at just the right time for the body to learn best.',
      ],
      examples: [
        'Un bebé de 2 meses recibe varias vacunas en la misma visita. Esto es seguro porque su sistema inmune puede manejar miles de "enemigos" a la vez. | A 2-month-old receives several vaccines at the same visit. This is safe because their immune system can handle thousands of "enemies" at once.',
        'Después de la vacuna de los 12 meses, es normal que su hijo tenga un poco de fiebre. Esto significa que su cuerpo está aprendiendo. | After the 12-month vaccine, it is normal for your child to have a slight fever. This means their body is learning.',
      ],
      patientCounselingPoints: [
        'Traiga la cartilla de vacunación a cada cita médica. | Bring the vaccination card to every medical appointment.',
        'Si su hijo perdió una vacuna, no se preocupe — se puede poner al día. Hable con su doctor. | If your child missed a vaccine, do not worry — they can catch up. Talk to your doctor.',
        'Las vacunas son gratis para niños a través del programa Vaccines for Children (VFC) incluso si no tiene seguro médico. | Vaccines are free for children through the Vaccines for Children (VFC) program even if you do not have health insurance.',
        'Amamantar a su bebé NO es razón para retrasar las vacunas. Las vacunas y la lactancia son compatibles. | Breastfeeding your baby is NOT a reason to delay vaccines. Vaccines and breastfeeding are compatible.',
        'Es seguro darle acetaminofén (Tylenol) después de la vacuna si tiene fiebre o dolor, pero NO lo dé antes. | It is safe to give acetaminophen (Tylenol) after the vaccine if there is fever or pain, but do NOT give it before.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Las vacunas se clasifican en vivas atenuadas, inactivadas, de subunidades, toxoides, y de ARNm. El calendario de vacunación del CDC está diseñado según la madurez del sistema inmune del niño y la epidemiología de cada enfermedad. Los esquemas de recuperación permiten a niños retrasados ponerse al día. | Vaccines are classified as live attenuated, inactivated, subunit, toxoid, and mRNA. The CDC immunization schedule is designed according to the maturity of the child\'s immune system and the epidemiology of each disease. Catch-up schedules allow delayed children to get back on track.',
      explanation: `## Explicación Intermedia / Intermediate Explanation

### Tipos de Vacunas

| Tipo | Descripción | Ejemplos |
|------|-------------|----------|
| Viva atenuada | Virus o bacteria debilitados que no causan enfermedad | MMR, varicela, rotavirus, BCG |
| Inactivada | Microorganismo muerto que no puede replicarse | IPV (polio), hepatitis A, influenza (inyectada) |
| Subunidad/conjugada | Solo una parte del microorganismo | PCV13, Hib, hepatitis B, HPV |
| Toxoide | Toxina inactivada del microorganismo | Difteria, tétanos (componentes de DTaP) |
| ARNm | Instrucciones genéticas para producir una proteína del virus | COVID-19 (Pfizer, Moderna) |

### Calendario de Vacunación Detallado (CDC 2025-2026)

**Nacimiento:**
- HepB (dosis 1) — dentro de las primeras 24 horas

**2 meses:**
- DTaP (dosis 1), IPV (dosis 1), Hib (dosis 1), PCV15/20 (dosis 1), RV (dosis 1), HepB (dosis 2)

**4 meses:**
- DTaP (dosis 2), IPV (dosis 2), Hib (dosis 2), PCV15/20 (dosis 2), RV (dosis 2)

**6 meses:**
- DTaP (dosis 3), IPV (dosis 3 si necesario), Hib (dosis 3 dependiendo de marca), PCV15/20 (dosis 3), RV (dosis 3 si Pentavalent), HepB (dosis 3), Influenza (anual desde los 6 meses)

**12-15 meses:**
- MMR (dosis 1), Varicela (dosis 1), HepA (dosis 1, segunda a los 6+ meses después), PCV15/20 (dosis 4), Hib (refuerzo)

**15-18 meses:**
- DTaP (dosis 4)

**4-6 años:**
- DTaP (dosis 5), IPV (dosis 4), MMR (dosis 2), Varicela (dosis 2)

**11-12 años:**
- Tdap (refuerzo), HPV (serie de 2 dosis), MenACWY (dosis 1, refuerzo a los 16)

### Intervalos Mínimos y Esquemas de Recuperación

- Si se retrasa una vacuna, NO se necesita reiniciar la serie — se continúa donde se quedó
- Existen intervalos mínimos entre dosis que deben respetarse
- Vacunas vivas (MMR, varicela) deben darse el mismo día o con 28+ días de separación
- El CDC proporciona esquemas de catch-up para cada edad

### Contraindicaciones y Precauciones

**Contraindicaciones verdaderas (NO dar la vacuna):**
- Reacción alérgica grave (anafilaxia) a dosis previa o componente
- Inmunosupresión severa para vacunas vivas
- Embarazo para vacunas vivas

**NO son contraindicaciones (SÍ vacunar):**
- Enfermedad leve con o sin fiebre
- Uso actual de antibióticos
- Exposición reciente a enfermedad
- Prematurez (vacunar según edad cronológica, excepto HepB)
- Lactancia materna
- Historia familiar de reacciones adversas
- Alergia al huevo (excepto para fiebre amarilla) — MMR e influenza son seguras

### Efectos Adversos y su Manejo

| Vacuna | Efecto Común | Efecto Raro |
|--------|-------------|-------------|
| DTaP | Dolor local, fiebre, irritabilidad | Llanto inconsolable (1/100), convulsión febril (1/14,000) |
| MMR | Fiebre, sarpullido leve día 7-12 | Trombocitopenia (1/25,000), convulsión febril (1/3,000) |
| Varicela | Dolor local, sarpullido leve | Herpes zóster (muy raro en niños) |
| Rotavirus | Irritabilidad, diarrea leve | Intususcepción (1-5/100,000) |
| PCV | Dolor local, fiebre | Muy raro |

---
## Intermediate Explanation

[The above provides comprehensive vaccine type classification, the detailed CDC 2025-2026 immunization schedule with Spanish translations, catch-up schedule principles, true contraindications vs. false contraindications, and adverse effect profiles for major pediatric vaccines.]`,
      keyTerms: [
        {
          term: 'vacuna viva atenuada',
          definition:
            'Vacuna que contiene microorganismos vivos debilitados que estimulan una respuesta inmune fuerte sin causar enfermedad; contraindicada en pacientes inmunosuprimidos. | Vaccine containing weakened live microorganisms that stimulate a strong immune response without causing disease; contraindicated in immunosuppressed patients.',
          pronunciation: 'bah-KOO-nah BEE-bah ah-teh-noo-AH-dah',
        },
        {
          term: 'vacuna conjugada',
          definition:
            'Vacuna donde un polisacárido bacteriano se une a una proteína portadora para generar una respuesta inmune más fuerte, especialmente en menores de 2 años. | Vaccine where a bacterial polysaccharide is linked to a carrier protein to generate a stronger immune response, especially in children under 2.',
          pronunciation: 'bah-KOO-nah kon-hoo-GAH-dah',
        },
        {
          term: 'esquema de recuperación',
          definition:
            'Plan para poner al día a niños que no recibieron sus vacunas a tiempo, respetando intervalos mínimos entre dosis. | Plan to catch up children who did not receive their vaccines on time, respecting minimum intervals between doses.',
          pronunciation: 'es-KEH-mah deh reh-koo-peh-rah-see-OHN',
        },
        {
          term: 'contraindicación',
          definition:
            'Condición que hace que una vacuna NO deba administrarse por riesgo de evento adverso grave, como anafilaxia previa al mismo componente. | Condition that means a vaccine should NOT be given due to risk of serious adverse event, such as previous anaphylaxis to the same component.',
          pronunciation: 'kon-trah-een-dee-kah-see-OHN',
        },
        {
          term: 'intususcepción',
          definition:
            'Complicación rara de la vacuna contra rotavirus donde una parte del intestino se invagina dentro de otra, causando obstrucción. Riesgo: 1-5/100,000. | Rare complication of rotavirus vaccine where one part of the intestine telescopes into another, causing obstruction. Risk: 1-5/100,000.',
          pronunciation: 'een-too-soo-SEP-see-OHN',
        },
      ],
      analogies: [
        'Las vacunas conjugadas son como poner una etiqueta de nombre en alguien que el sistema inmune no reconocería solo — la proteína portadora le dice al sistema inmune "¡presta atención a esto!". | Conjugate vaccines are like putting a name tag on someone the immune system would not recognize alone — the carrier protein tells the immune system "pay attention to this!".',
        'Los intervalos mínimos entre dosis son como el tiempo de descanso entre entrenamientos — el cuerpo necesita tiempo para procesar y recordar la lección anterior. | Minimum intervals between doses are like rest time between workouts — the body needs time to process and remember the previous lesson.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La inmunología de la vacunación involucra la presentación de antígenos, activación de células T helper, formación de centros germinales, y generación de memoria inmunológica. La respuesta inmune neonatal tiene características únicas que explican el diseño del calendario de vacunación. | Vaccine immunology involves antigen presentation, T helper cell activation, germinal center formation, and immunological memory generation. The neonatal immune response has unique characteristics that explain the vaccination schedule design.',
      explanation: `## Explicación para Nivel Universitario Avanzado / Advanced College-Level

### Inmunología de la Vacunación

**Respuesta inmune a las vacunas — secuencia temporal:**

\`\`\`
Inyección de antígeno vacunal
        ↓
Captación por células dendríticas (CPA)
        ↓
Migración a ganglio linfático regional
        ↓
Presentación vía MHC-II a células T CD4+ (Th)
        ↓ (señal 1 + señal 2 + citoquinas)
Diferenciación Th1/Th2/Tfh
        ↓
Tfh + célula B → Centro germinal
        ↓
Hipermutación somática + selección de afinidad
        ↓
Células B de memoria + Células plasmáticas de larga vida
        ↓
Anticuerpos de alta afinidad (IgG) + Memoria inmunológica
\`\`\`

**Tipos de respuesta según tipo de vacuna:**

| Tipo de Vacuna | Respuesta Inmune | Duración | Refuerzos |
|----------------|-----------------|----------|-----------|
| Viva atenuada | T + B; robusta; simula infección | Décadas-vida | Generalmente 1-2 dosis |
| Inactivada | Principalmente B; requiere adyuvante | Años | Múltiples dosis + refuerzos |
| Conjugada | T-dependiente (clave en <2 años) | Años | Serie primaria + refuerzo |
| Polisacárida pura | T-independiente; pobre en <2 años | Corta | No genera memoria verdadera |
| Toxoide | Anti-toxina; no previene colonización | Años | Refuerzos periódicos |
| ARNm | B + T (incluyendo CD8+) | Meses-años | En estudio |

### Inmunidad Neonatal e Infantil

**Características únicas del sistema inmune neonatal:**

| Característica | Implicación para la Vacunación |
|---------------|-------------------------------|
| Sesgo Th2 (anti-inflamatorio) | Respuesta disminuida a vacunas inactivadas |
| Anticuerpos maternos (IgG transplacentaria) | Interferencia con vacunas vivas (por eso MMR a los 12 meses) |
| Centros germinales inmaduros | Menor producción de anticuerpos de alta afinidad |
| Deficiencia relativa de células B de zona marginal | Mala respuesta a polisacáridos (→ necesidad de vacunas conjugadas) |
| Mayor proporción de células T naive | Respuesta más lenta pero ampliamente diversa |
| Producción deficiente de IgG2 | Susceptibilidad a bacterias encapsuladas |

**¿Por qué múltiples dosis?**
- Los centros germinales neonatales producen menos células de memoria por dosis
- Cada dosis de refuerzo "amplifica" la respuesta: más células de memoria, mayor afinidad
- La serie primaria establece el repertorio; los refuerzos lo expanden
- Intervalo entre dosis permite la maduración del centro germinal

### Adyuvantes: Mecanismo de Acción

| Adyuvante | Mecanismo | Usado en |
|-----------|-----------|----------|
| Sales de aluminio (alum) | Depot effect + activación del inflamasoma NLRP3 | DTaP, HepB, PCV |
| MF59 (escualeno) | Reclutamiento de APCs, enhancing uptake | Influenza (Fluad) |
| AS01B | MPL + QS-21; activa TLR4 | Shingrix |
| AS04 | MPL + alum; activa TLR4 | Cervarix (HPV) |
| CpG 1018 | Agonista TLR9; estimula Th1 | Heplisav-B (HepB adultos) |

### Inmunidad de Rebaño (Inmunidad Colectiva)

- **Definición:** Protección indirecta cuando suficientes personas en la comunidad son inmunes
- **Umbral:** Varía por enfermedad (sarampión: ~95%, polio: ~80%, difteria: ~85%)
- **Fórmula:** Umbral = 1 - (1/R₀), donde R₀ = número básico de reproducción
- **Importancia:** Protege a quienes NO pueden vacunarse (bebés <6m, inmunosuprimidos, embarazadas para ciertas vacunas)

### Vacunas Especiales y Poblaciones Específicas

**Prematuros:**
- Vacunar según edad cronológica (NO edad corregida), excepto HepB si <2 kg al nacer
- HepB al nacer si madre HBsAg+ (más HBIG dentro de 12h)
- Palivizumab/nirsevimab para RSV en prematuros de alto riesgo
- Mayor riesgo de apnea post-vacunación en prematuros extremos

**Niños inmunosuprimidos:**
- Contraindicadas: todas las vacunas vivas (MMR, varicela, rotavirus, LAIV, BCG)
- Puede recibir: vacunas inactivadas, subunidades, conjugadas
- Evaluar estado inmune antes de vacunas vivas si historia de inmunosupresión
- Vacunar contactos del hogar para protección indirecta

**Niños con asplenia (funcional o anatómica):**
- Riesgo elevado de infección por bacterias encapsuladas
- Esquema acelerado de PCV + PPSV23
- MenACWY + MenB
- Hib completo
- Influenza anual

---
## Advanced College-Level Explanation

[The above covers vaccine immunology cascade, immune response types by vaccine class, neonatal immune system characteristics and their impact on schedule design, adjuvant mechanisms, herd immunity calculations, and special population considerations including premature infants and immunocompromised children.]`,
      keyTerms: [
        {
          term: 'centro germinal',
          definition:
            'Estructura dentro de los ganglios linfáticos donde las células B experimentan hipermutación somática y selección de afinidad para producir anticuerpos de alta calidad y células de memoria de larga vida. | Structure within lymph nodes where B cells undergo somatic hypermutation and affinity selection to produce high-quality antibodies and long-lived memory cells.',
          pronunciation: 'SEN-troh her-mee-NAHL',
        },
        {
          term: 'inmunidad de rebaño',
          definition:
            'Protección indirecta que ocurre cuando un porcentaje suficiente de la población es inmune, reduciendo la transmisión y protegiendo a los no vacunados. Umbral = 1 - (1/R₀). | Indirect protection occurring when a sufficient percentage of the population is immune, reducing transmission and protecting the unvaccinated. Threshold = 1 - (1/R₀).',
          pronunciation: 'een-moo-nee-DAHD deh reh-BAH-nyoh',
        },
        {
          term: 'adyuvante',
          definition:
            'Sustancia añadida a la vacuna para potenciar la respuesta inmune, como las sales de aluminio que activan el inflamasoma NLRP3 o los agonistas de TLR. | Substance added to the vaccine to enhance the immune response, such as aluminum salts that activate the NLRP3 inflammasome or TLR agonists.',
          pronunciation: 'ad-yoo-BAHN-teh',
        },
        {
          term: 'hipermutación somática',
          definition:
            'Proceso en el centro germinal donde los genes de inmunoglobulinas acumulan mutaciones aleatorias, seguido de selección de las células B con mayor afinidad por el antígeno. | Process in the germinal center where immunoglobulin genes accumulate random mutations, followed by selection of B cells with highest antigen affinity.',
          pronunciation: 'ee-per-moo-tah-see-OHN soh-MAH-tee-kah',
        },
        {
          term: 'vacuna T-dependiente vs T-independiente',
          definition:
            'Las vacunas conjugadas generan respuesta T-dependiente (memoria robusta, efectiva en <2 años). Las polisacáridas puras son T-independientes (sin memoria, inefectivas en <2 años). | Conjugate vaccines generate T-dependent response (robust memory, effective in <2 years). Pure polysaccharide vaccines are T-independent (no memory, ineffective in <2 years).',
          pronunciation: 'teh-deh-pen-dee-EN-teh',
        },
      ],
      clinicalNotes:
        'La comprensión de la inmadurez del sistema inmune neonatal es fundamental para explicar a las familias por qué se necesitan múltiples dosis. La deficiencia de células B de zona marginal en menores de 2 años explica directamente por qué las vacunas polisacáridas puras (como PPSV23) son ineficaces en este grupo y por qué se desarrollaron las vacunas conjugadas. En prematuros, vacunar por edad cronológica es la regla (los anticuerpos maternos son transferidos en el tercer trimestre, por lo que los prematuros tienen MENOS protección y necesitan vacunación temprana). Siempre verificar el estado de HBsAg materno antes del alta de todo recién nacido. | Understanding neonatal immune system immaturity is fundamental for explaining to families why multiple doses are needed. Marginal zone B cell deficiency in children under 2 directly explains why pure polysaccharide vaccines (like PPSV23) are ineffective in this group and why conjugate vaccines were developed. In premature infants, vaccinate by chronological age as the rule (maternal antibodies are transferred in the third trimester, so premature infants have LESS protection and need early vaccination). Always verify maternal HBsAg status before discharge of every newborn.',
    },

    4: {
      level: 4,
      summary:
        'El diseño avanzado de vacunas pediátricas integra plataformas de nueva generación (ARNm, vectores virales, nanopartículas), correlatos de protección, farmacovigilancia post-licenciamiento, el manejo de hesitación vacunal con estrategias basadas en evidencia, y consideraciones culturales para familias hispanas. | Advanced pediatric vaccine design integrates next-generation platforms (mRNA, viral vectors, nanoparticles), correlates of protection, post-licensure pharmacovigilance, evidence-based management of vaccine hesitancy, and cultural considerations for Hispanic families.',
      explanation: `## Explicación Avanzada (Nivel de Posgrado) / Graduate-Level Explanation

### Plataformas Vacunales de Nueva Generación

| Plataforma | Mecanismo | Ventajas | Limitaciones |
|------------|-----------|----------|-------------|
| ARNm (lipid nanopartículas) | mRNA codifica antígeno; traducción en célula huésped | Desarrollo rápido, respuesta celular + humoral | Cadena de frío, reactogenicidad |
| Vector viral replicante | Virus atenuado porta gen del antígeno | Respuesta robusta, una dosis | Anti-vector inmunidad |
| Vector viral no replicante | Adenovirus deficiente porta gen | Buena respuesta T, estable | Anti-vector inmunidad preexistente |
| Nanopartículas proteicas | Proteínas ensambladas en partículas similares a virus | Estable, respuesta strong | Producción compleja |
| DNA (electoporación) | Plásmido con gen del antígeno | Estable, barato | Baja inmunogenicidad |
| Outer membrane vesicles | Vesículas de membrana externa bacteriana | Múltiples antígenos nativos | Variabilidad de composición |

### Correlatos de Protección

| Vacuna | Correlato Establecido | Nivel Protector |
|--------|----------------------|-----------------|
| HepB | Anti-HBs | ≥10 mIU/mL |
| Tétanos | Anti-toxina tetánica | ≥0.01 IU/mL (ELISA) |
| Hib | Anti-PRP | ≥0.15 μg/mL (corto plazo), ≥1.0 μg/mL (largo plazo) |
| Sarampión | Anti-sarampión IgG | ≥120 mIU/mL (plaque reduction neutralization) |
| Neumococo (PCV) | Anti-capsular IgG | ≥0.35 μg/mL (OPA preferido) |
| Influenza | Anti-HA (HAI) | ≥1:40 (adultos; menos claro en niños) |
| Varicela | Anti-VZV | ≥5 gpELISA units/mL |

**Importancia de los correlatos:**
- Permiten aprobar vacunas sin ensayos clínicos de eficacia enormes
- Facilitan la evaluación de vacunas en nuevas poblaciones
- Permiten determinar necesidad de refuerzos
- Limitación: muchas vacunas carecen de correlatos claros (pertussis, rotavirus)

### Farmacovigilancia Post-Licenciamiento

**Sistemas de vigilancia activa y pasiva:**

| Sistema | Tipo | Función |
|---------|------|---------|
| VAERS | Pasivo | Reportes espontáneos de eventos adversos |
| VSD (Vaccine Safety Datalink) | Activo | Estudios de cohorte en 12 millones de personas |
| CISA (Clinical Immunization Safety Assessment) | Consulta | Evaluación de casos individuales complejos |
| BEST (CMS) | Activo | Vigilancia en poblaciones de Medicare/Medicaid |
| Global Vaccine Safety Initiative (OMS) | Internacional | Coordinación global |

**Señales detectadas por farmacovigilancia:**
| Señal | Vacuna | Riesgo Absoluto | Resultado |
|-------|--------|-----------------|-----------|
| Intususcepción | RotaShield (retirada 1999) | 1/10,000 | Retiro del mercado |
| Intususcepción | RotaTeq/Rotarix | 1-5/100,000 | Aceptado (beneficio >> riesgo) |
| Trombocitopenia con trombosis | Ad26.COV2.S | 3.8/1,000,000 | Restricción de uso |
| Miocarditis | mRNA COVID | 12.6/1,000,000 (varones 12-17) | Monitoreo activo |
| Narcolepsia | Pandemrix (H1N1) | 1/55,000 | Retirada en Europa |

### Hesitación Vacunal: Estrategias Basadas en Evidencia

**Modelo del continuo de hesitación vacunal (OMS SAGE):**
\`\`\`
Aceptación total → Aceptación pasiva → Hesitación → Rechazo selectivo → Rechazo total
\`\`\`

**Factores que contribuyen a la hesitación (modelo 3C de la OMS):**
1. **Confianza (Confidence):** Confianza en la seguridad, el sistema de salud, los tomadores de decisiones
2. **Complacencia (Complacency):** Percepción de bajo riesgo de enfermedad
3. **Conveniencia (Convenience):** Acceso, costo, horarios de clínica

**Estrategias de comunicación con evidencia:**

| Estrategia | Evidencia | Cuándo Usar |
|-----------|-----------|-------------|
| Entrevista motivacional | Fuerte | Padres hesitantes |
| Presumptive language ("Hoy toca las vacunas de los 2 meses") | Fuerte | Todos los padres |
| Escuchar y validar preocupaciones | Fuerte | Padres con dudas específicas |
| Corrección de mitos | Moderada (riesgo de backfire) | Con cuidado, solo si el padre lo trae |
| Narrativas de padres afectados | Emergente | Comunidades con baja cobertura |
| Proveedores de confianza | Fuerte | Comunidades hispanas/latinas |

### Consideraciones Culturales para Familias Hispanas/Latinas

**Factores que influyen en la aceptación vacunal:**
- **Familismo:** Las decisiones de salud se toman en familia (incluir abuelos, comadres)
- **Respeto:** Comunicación respetuosa con autoridad médica; puede inhibir expresión de dudas
- **Personalismo:** Relación cálida y personal con el proveedor aumenta confianza
- **Status migratorio:** Miedo a que datos médicos se compartan con inmigración (clarificar HIPAA)
- **Fatalismo parcial:** "Si Dios quiere" — abordar integrando fe y ciencia
- **Confianza en remedios tradicionales:** No desestimar; integrar en la conversación

**Estrategias específicas:**
1. Materiales en español a nivel de lectura apropiado (4to-6to grado)
2. Promotoras de salud como puente entre la comunidad y el sistema de salud
3. Clínicas de vacunación en iglesias, escuelas y mercados comunitarios
4. Inclusión de la familia extendida en las conversaciones
5. Evitar jerga médica; usar el idioma preferido de la familia
6. Programas VFC: enfatizar que las vacunas son gratuitas independientemente del status migratorio

---
## Graduate-Level Explanation

[The above covers next-generation vaccine platforms, correlates of protection for major pediatric vaccines, post-licensure pharmacovigilance systems and detected safety signals, evidence-based vaccine hesitancy strategies including motivational interviewing and presumptive language, and culturally specific considerations for Hispanic/Latino families.]`,
      keyTerms: [
        {
          term: 'correlato de protección',
          definition:
            'Marcador inmunológico medible (generalmente nivel de anticuerpos) que se correlaciona con protección contra la enfermedad; permite evaluar eficacia vacunal sin ensayos clínicos masivos. | Measurable immunological marker (usually antibody level) correlating with disease protection; allows evaluating vaccine efficacy without massive clinical trials.',
          pronunciation: 'koh-reh-LAH-toh deh proh-tek-see-OHN',
        },
        {
          term: 'farmacovigilancia',
          definition:
            'Ciencia de detección, evaluación y prevención de efectos adversos de medicamentos post-comercialización; incluye sistemas pasivos (VAERS) y activos (VSD) para vacunas. | Science of detection, evaluation, and prevention of adverse drug effects post-marketing; includes passive (VAERS) and active (VSD) systems for vaccines.',
          pronunciation: 'far-mah-koh-bee-hee-LAHN-see-ah',
        },
        {
          term: 'hesitación vacunal',
          definition:
            'Retraso o rechazo de vacunas a pesar de su disponibilidad; fenómeno complejo influenciado por confianza, complacencia y conveniencia (modelo 3C de la OMS). | Delay or refusal of vaccines despite their availability; complex phenomenon influenced by confidence, complacency, and convenience (WHO 3C model).',
          pronunciation: 'eh-see-tah-see-OHN bah-koo-NAHL',
        },
        {
          term: 'familismo',
          definition:
            'Valor cultural latino/hispano de priorizar la familia extendida en las decisiones de salud; implica que la educación vacunal debe incluir a abuelos y otros familiares cercanos. | Latino/Hispanic cultural value of prioritizing the extended family in health decisions; implies vaccine education should include grandparents and other close relatives.',
          pronunciation: 'fah-mee-LEES-moh',
        },
        {
          term: 'lenguaje presuntivo',
          definition:
            'Estrategia de comunicación donde el proveedor presenta la vacunación como el siguiente paso esperado ("Hoy toca sus vacunas") en lugar de preguntar si quieren vacunar; aumenta la aceptación significativamente. | Communication strategy where the provider presents vaccination as the expected next step ("Today it is time for their vaccines") instead of asking if they want to vaccinate; significantly increases acceptance.',
          pronunciation: 'len-GWAH-heh preh-soon-TEE-voh',
        },
      ],
      clinicalNotes:
        'En la práctica clínica con familias hispanas/latinas, el "lenguaje presuntivo" ha demostrado ser la estrategia más efectiva para mantener la cobertura vacunal. Decir "Hoy le tocan las vacunas de los 2 meses a su bebé" es significativamente más efectivo que "¿Le gustaría vacunar a su bebé hoy?". Cuando surge la hesitación, la entrevista motivacional es preferible a la corrección directa de mitos (que puede producir efecto paradójico de backfire). El familismo implica que debemos estar preparados para responder preguntas de la abuela o la comadre, quienes pueden tener influencia significativa en la decisión. El programa VFC es un recurso fundamental — muchas familias desconocen que las vacunas son gratuitas para niños sin seguro o con Medicaid. | In clinical practice with Hispanic/Latino families, "presumptive language" has proven to be the most effective strategy for maintaining vaccine coverage. Saying "Today your baby is due for their 2-month vaccines" is significantly more effective than "Would you like to vaccinate your baby today?". When hesitancy arises, motivational interviewing is preferable to direct myth correction (which can produce a paradoxical backfire effect). Familismo means we should be prepared to answer questions from the grandmother or comadre, who may have significant influence on the decision. The VFC program is a fundamental resource — many families are unaware that vaccines are free for uninsured children or those on Medicaid.',
    },

    5: {
      level: 5,
      summary:
        'La frontera de la vacunología pediátrica incluye vacunas universales contra influenza y coronavirus, inmunosenescencia inversa y vacunación maternal, la revolución de anticuerpos monoclonales como puente a la inmunización activa (nirsevimab), y el impacto global de las inequidades vacunales en poblaciones hispanas y del mundo en desarrollo. | The frontier of pediatric vaccinology includes universal influenza and coronavirus vaccines, reverse immunosenescence and maternal vaccination, the monoclonal antibody revolution as a bridge to active immunization (nirsevimab), and the global impact of vaccine inequities in Hispanic and developing world populations.',
      explanation: `## Explicación Profesional (Nivel MD) / MD/Professional-Level Explanation

### Nuevas Vacunas y Pipeline Pediátrico

**Vacunas recientemente aprobadas o en desarrollo avanzado:**

| Vacuna | Target | Fase | Relevancia Pediátrica |
|--------|--------|------|----------------------|
| Nirsevimab (Beyfortus) | RSV (anticuerpo monoclonal) | Aprobada 2023 | Dosis única para todos los lactantes en temporada de RSV |
| Abrysvo (RSV maternal) | RSV (proteína F prefusión) | Aprobada 2023 | Inmunización pasiva vía anticuerpos transplacentarios |
| Vacuna pentavalente sin preservante | DTaP-IPV-Hib | Disponible | Simplifica esquema |
| Vacuna hexavalente (Vaxelis) | DTaP-IPV-Hib-HepB | Aprobada | Reduce número de inyecciones |
| CMV vacuna (mRNA-1647) | CMV (mRNA) | Fase 3 | Prevención de CMV congénito |
| Vacuna GBS maternal | Streptococcus grupo B | Fase 2/3 | Prevención de sepsis neonatal |
| Vacuna universal influenza | Tallo de hemaglutinina | Fase 1/2 | Eliminaría necesidad de vacunación anual |
| Vacuna norovirus | Norovirus VLP | Fase 2 | Principal causa de gastroenteritis pediátrica |

### Nirsevimab: Paradigma del Anticuerpo Monoclonal Preventivo

**Comparación con palivizumab:**
| Característica | Palivizumab | Nirsevimab |
|---------------|-------------|------------|
| Tipo | Anticuerpo monoclonal | Anticuerpo monoclonal de vida media extendida (YTE) |
| Dosis | Mensual x 5 meses | Dosis única |
| Población | Alto riesgo solamente | Todos los lactantes <8 meses entrando a temporada de RSV |
| Costo por temporada | ~$5,000-10,000 | ~$500 |
| Eficacia contra hospitalización | 45-55% | 77-83% |
| Mecanismo de vida media extendida | N/A | Mutaciones YTE en Fc → unión aumentada a FcRn |

**Impacto en salud pública:**
- Primera inmunización pasiva UNIVERSAL contra un patógeno respiratorio en lactantes
- Modelo para futuros anticuerpos monoclonales preventivos
- Temporada 2023-2024: reducción del 90% en hospitalizaciones por RSV donde se implementó
- Desafío: acceso y costo en países de ingreso bajo y medio

### Vacunación Maternal como Estrategia Pediátrica

| Vacuna Maternal | Antígeno | Mecanismo de Protección Neonatal |
|----------------|----------|-------------------------------|
| Tdap (27-36 semanas) | Pertussis | IgG anti-pertussis transplacentaria; protege al RN 0-3 meses |
| Influenza (cualquier trimestre) | HA/NA | Anti-HA IgG transplacentaria + protección directa materna |
| RSV (Abrysvo, 32-36 semanas) | Proteína F prefusión | Anti-F IgG transplacentaria; protege 0-6 meses |
| COVID-19 | Spike protein | Anti-spike IgG transplacentaria |
| GBS (en desarrollo) | Polisacárido capsular conjugado | Anti-capsular IgG transplacentaria |

**Ventana óptima para vacunación maternal:**
- IgG transplacentaria aumenta exponencialmente en el tercer trimestre
- Vacunación entre semanas 27-36 optimiza la transferencia
- Prematuros reciben menos anticuerpos maternos → mayor vulnerabilidad
- Nirsevimab complementa en prematuros que pierden ventana de transferencia

### Equidad Global en Vacunación

**Cobertura vacunal global — datos alarmantes:**

| Indicador | Dato |
|-----------|------|
| Niños con "cero dosis" (sin ninguna vacuna) | 14.5 millones (2023) |
| Cobertura DTP3 global | 84% (era 86% pre-pandemia) |
| Brecha entre países de alto y bajo ingreso | 20-30 puntos porcentuales |
| Muertes prevenibles por vacunación | 1.5 millones/año |

**Disparidades en la población hispana/latina global:**
- América Latina: cobertura promedio de 80% pero alta variabilidad intrarregional
- Comunidades indígenas: coberturas tan bajas como 40-60%
- Migrantes y desplazados: mayor riesgo de esquemas incompletos
- Niños hispanos en EE.UU.: cobertura comparable al promedio, pero retrasos en inicio

**Iniciativas para cerrar brechas:**
| Iniciativa | Enfoque |
|-----------|---------|
| GAVI (Alianza para Vacunas) | Financiamiento para países de bajo ingreso |
| Immunization Agenda 2030 (IA2030) | Marco estratégico OMS para equidad vacunal |
| Pan American Health Organization (OPS) | Fondo Rotatorio para vacunas en América Latina |
| Programa VFC (EE.UU.) | Vacunas gratuitas para niños elegibles |
| mRNA hubs (OMS) | Transferencia de tecnología a países de ingreso medio |

### Controversias Actuales en Vacunología Pediátrica

**1. ¿Cuántas vacunas son demasiadas?**
- El sistema inmune neonatal puede responder a ~10,000 antígenos simultáneamente
- Las vacunas modernas contienen ~150 antígenos totales (vs. ~3,000 en 1980)
- No hay evidencia de "sobrecarga inmune"
- Pero: la percepción parental de "demasiadas inyecciones" es real y debe abordarse

**2. Esquemas alternativos ("delayed schedule"):**
- No hay evidencia que respalde esquemas alternativos
- Aumentan ventanas de vulnerabilidad
- Asociados con menor cobertura final
- Pero: ¿es ético rechazar cualquier vacunación vs. un esquema parcial?

**3. Mandatos vacunales vs. elección personal:**
- Leyes de mandato escolar varían por estado/país
- Exenciones: médicas (todas las jurisdicciones), religiosas (la mayoría), filosóficas (algunas)
- Evidencia: la eliminación de exenciones no médicas aumenta cobertura
- Tensión: salud pública vs. autonomía parental

**4. Vacunas COVID-19 en pediatría:**
- Eficacia comprobada pero menor que en adultos
- Miocarditis como señal de seguridad (mayormente leve, autolimitada)
- Baja captación en niños hispanos/latinos
- Debate sobre número óptimo de refuerzos en la era endémica

---
## MD/Professional-Level Explanation

[The above covers the pediatric vaccine pipeline including nirsevimab as a paradigm shift, maternal vaccination strategy, global vaccine equity with data on Hispanic/Latino population disparities, and current controversies in pediatric vaccinology including schedules, mandates, and COVID-19 vaccines in children.]`,
      keyTerms: [
        {
          term: 'nirsevimab',
          definition:
            'Anticuerpo monoclonal de vida media extendida (mutaciones YTE en Fc) contra la proteína F de RSV; primera inmunización pasiva universal para lactantes con eficacia del 77-83% contra hospitalización en una sola dosis. | Extended half-life monoclonal antibody (YTE mutations in Fc) against RSV F protein; first universal passive immunization for infants with 77-83% efficacy against hospitalization in a single dose.',
          pronunciation: 'neer-SEH-vee-mab',
        },
        {
          term: 'vacunación maternal',
          definition:
            'Estrategia de vacunar a la madre durante el embarazo (generalmente tercer trimestre) para transferir anticuerpos IgG protectores al feto vía transplacentaria; modelo establecido para pertussis, influenza y RSV. | Strategy of vaccinating the mother during pregnancy (usually third trimester) to transfer protective IgG antibodies to the fetus transplacentally; established model for pertussis, influenza, and RSV.',
          pronunciation: 'bah-koo-nah-see-OHN mah-TER-nahl',
        },
        {
          term: 'Fondo Rotatorio OPS',
          definition:
            'Mecanismo de compra grupal de vacunas de la Organización Panamericana de la Salud que permite a países de América Latina acceder a vacunas a precios reducidos mediante economías de escala. | Pan American Health Organization pooled vaccine procurement mechanism that allows Latin American countries to access vaccines at reduced prices through economies of scale.',
          pronunciation: 'FOHN-doh roh-tah-TOH-ree-oh',
        },
        {
          term: 'correlato no establecido',
          definition:
            'Vacuna para la cual no existe un marcador inmunológico medible que prediga confiablemente la protección; pertussis y rotavirus son ejemplos donde la eficacia solo puede evaluarse con ensayos clínicos. | Vaccine for which no measurable immunological marker reliably predicts protection; pertussis and rotavirus are examples where efficacy can only be assessed through clinical trials.',
          pronunciation: 'koh-reh-LAH-toh noh es-tah-bleh-SEE-doh',
        },
        {
          term: 'zero-dose children',
          definition:
            'Niños que no han recibido ninguna dosis de ninguna vacuna; representan 14.5 millones a nivel global y reflejan las inequidades más profundas en el acceso a servicios de salud. | Children who have not received any dose of any vaccine; represent 14.5 million globally and reflect the deepest inequities in access to health services.',
          pronunciation: 'SEH-roh-dohs CHIL-dren',
        },
      ],
      clinicalNotes:
        'Nirsevimab ha transformado la prevención de RSV en lactantes — la temporada 2023-2024 mostró reducción del 90% en hospitalizaciones por RSV donde se implementó universalmente. La decisión entre nirsevimab y vacunación maternal con Abrysvo no es excluyente para prematuros que perdieron la ventana de transferencia de anticuerpos. Para el pediatra en práctica, el VFC es el recurso más subutilizado para familias hispanas sin seguro — debe mencionarse proactivamente en cada visita. Los esquemas alternativos ("delayed schedules") carecen de evidencia y aumentan ventanas de vulnerabilidad; sin embargo, la comunicación con familias hesitantes debe priorizar mantener la relación terapéutica sobre "ganar" el argumento. Un padre que acepta un esquema parcial es preferible a uno que abandona completamente el cuidado pediátrico. | Nirsevimab has transformed RSV prevention in infants — the 2023-2024 season showed a 90% reduction in RSV hospitalizations where universally implemented. The choice between nirsevimab and maternal Abrysvo vaccination is not mutually exclusive for premature infants who missed the antibody transfer window. For the practicing pediatrician, VFC is the most underutilized resource for uninsured Hispanic families — it should be proactively mentioned at every visit. Alternative schedules ("delayed schedules") lack evidence and increase vulnerability windows; however, communication with hesitant families should prioritize maintaining the therapeutic relationship over "winning" the argument. A parent who accepts a partial schedule is preferable to one who completely abandons pediatric care.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ref-cdc-immunization-schedule',
      type: 'website',
      title: 'Recommended Child and Adolescent Immunization Schedule',
      authors: ['Centers for Disease Control and Prevention'],
      source: 'CDC',
      url: 'https://www.cdc.gov/vaccines/schedules/',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-aap-redbook',
      type: 'textbook',
      title: 'Red Book: 2024-2027 Report of the Committee on Infectious Diseases',
      authors: ['American Academy of Pediatrics'],
      source: 'AAP',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-plotkin-vaccines',
      type: 'textbook',
      title: 'Plotkin\'s Vaccines, 8th Edition',
      authors: ['Plotkin, S.A.', 'Orenstein, W.A.', 'Offit, P.A.', 'Edwards, K.M.'],
      source: 'Elsevier',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-who-sage-hesitancy',
      type: 'article',
      title: 'Strategies to Address Vaccine Hesitancy',
      authors: ['WHO SAGE Working Group'],
      source: 'World Health Organization',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    {
      targetId: 'condition-desarrollo-infantil-milestones',
      targetType: 'condition',
      relationship: 'sibling',
      label: 'Hitos del Desarrollo Infantil / Developmental Milestones',
    },
    {
      targetId: 'condition-fiebre-infantil-fever',
      targetType: 'condition',
      relationship: 'related',
      label: 'Fiebre en Niños / Childhood Fever',
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
    ],
    keywords: [
      'vacunación',
      'immunization',
      'calendario de vacunación',
      'vaccine schedule',
      'hesitación vacunal',
      'vaccine hesitancy',
      'nirsevimab',
      'RSV',
      'VFC',
      'inmunidad de rebaño',
      'herd immunity',
      'vacunas conjugadas',
      'familismo',
      'promotora de salud',
    ],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'preventive medicine'],
    },
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
