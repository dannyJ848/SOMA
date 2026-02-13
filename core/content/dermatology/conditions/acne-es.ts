/**
 * Acné / Acne - Contenido Educativo Bilingüe (Español / English)
 *
 * Enfermedad inflamatoria crónica de las unidades pilosebáceas.
 * Chronic inflammatory disease of pilosebaceous units.
 *
 * Covers: pathogenesis, grades, treatment ladder, isotretinoin, scarring, hormonal therapy
 */

import { EducationalContent } from '../../types';

export const acneEsContent: EducationalContent = {
  id: 'condition-acne',
  type: 'condition',
  name: 'Acne',
  nameEs: 'Acné',
  alternateNames: ['Acné Vulgar', 'Acne Vulgaris', 'Granos', 'Pimples', 'Espinillas', 'Barros'],

  levels: {
    1: {
      level: 1,
      summary: 'El acné es una enfermedad muy común de la piel que ocurre cuando los poros (folículos pilosos) se tapan con grasa y células muertas. Causa granos, puntos negros, puntos blancos y a veces bultos dolorosos debajo de la piel. | Acne is a very common skin condition that occurs when pores (hair follicles) get clogged with oil and dead skin cells. It causes pimples, blackheads, whiteheads, and sometimes painful lumps under the skin.',
      explanation: `## Explicación

### ¿Qué es el acné?

El acné es una enfermedad de la piel que ocurre cuando los pequeños poros (folículos pilosos) se tapan con grasa (sebo) y células muertas de la piel. Esto causa puntos blancos, puntos negros y granos.

### ¿A quién le da acné?

- Adolescentes durante la pubertad (MUY común — hasta el 85%)
- Adultos jóvenes en sus 20s y 30s
- Mujeres antes de su período menstrual
- Mujeres embarazadas
- Personas bajo mucho estrés
- Puede ocurrir a CUALQUIER edad

### Tipos de lesiones de acné

**Puntos blancos (comedones cerrados):**
Pequeñas protuberancias redondas blancas debajo de la piel

**Puntos negros (comedones abiertos):**
Puntos oscuros en la superficie de la piel (NO es suciedad — es oxidación)

**Granos (pápulas y pústulas):**
Protuberancias rojas inflamadas, con o sin punta blanca de pus

**Nódulos:**
Bultos grandes, sólidos y dolorosos debajo de la piel

**Quistes:**
Bultos grandes llenos de pus debajo de la piel — los más dolorosos

### ¿Qué causa el acné?

- Producción excesiva de grasa (sebo) en la piel
- Células muertas de la piel que tapan los poros
- Bacterias que crecen dentro de los poros tapados
- Hormonas (especialmente durante la pubertad, el período menstrual, el embarazo)
- Estrés (empeora el acné existente)
- Genética (si tus padres tuvieron acné, es más probable que tú también)

### ¿Qué NO causa el acné?

- La suciedad NO causa acné (lavarse demasiado puede empeorar)
- El chocolate NO está claramente demostrado como causa
- El maquillaje por sí solo no causa acné (pero usar productos comedogénicos sí puede)

### Tratamiento básico

- Lavar la cara suavemente 2 veces al día (no frotar fuerte)
- Usar limpiador suave sin jabón
- Cremas de venta libre con peróxido de benzoílo o ácido salicílico
- NO exprimir ni reventar los granos (puede causar cicatrices e infecciones)
- Usar hidratante no comedogénico y protector solar
- Consultar al médico si el acné es moderado o grave

---
## Explanation

### What is acne?

Acne is a skin condition that occurs when small pores (hair follicles) get clogged with oil (sebum) and dead skin cells. This causes whiteheads, blackheads, and pimples.

### Who gets acne?

- Teenagers during puberty (VERY common — up to 85%)
- Young adults in their 20s and 30s
- Women before their menstrual period
- Pregnant women
- People under a lot of stress
- Can occur at ANY age

### Types of acne lesions

**Whiteheads (closed comedones):**
Small, round, white bumps under the skin

**Blackheads (open comedones):**
Dark spots on the skin surface (NOT dirt — it is oxidation)

**Pimples (papules and pustules):**
Red, inflamed bumps, with or without a white pus tip

**Nodules:**
Large, solid, painful lumps under the skin

**Cysts:**
Large, pus-filled lumps under the skin — the most painful

### What causes acne?

- Excess oil (sebum) production in the skin
- Dead skin cells clogging pores
- Bacteria growing inside clogged pores
- Hormones (especially during puberty, menstrual period, pregnancy)
- Stress (worsens existing acne)
- Genetics (if your parents had acne, you are more likely to as well)

### What does NOT cause acne?

- Dirt does NOT cause acne (over-washing can make it worse)
- Chocolate is NOT clearly proven as a cause
- Makeup alone does not cause acne (but using comedogenic products can)

### Basic treatment

- Wash face gently 2 times a day (do not scrub hard)
- Use a gentle, soap-free cleanser
- Over-the-counter creams with benzoyl peroxide or salicylic acid
- Do NOT squeeze or pop pimples (can cause scarring and infection)
- Use non-comedogenic moisturizer and sunscreen
- See a doctor if acne is moderate or severe`,
      keyTerms: [
        { term: 'Folículo piloso / Hair follicle', definition: 'Pequeño poro en la piel de donde crece el pelo — cuando se tapa, se forma acné. | Small pore in the skin from which hair grows — when clogged, acne forms.' },
        { term: 'Sebo / Sebum', definition: 'Grasa natural producida por las glándulas sebáceas de la piel para mantenerla hidratada. | Natural oil produced by the skin\'s sebaceous glands to keep it moisturized.' },
        { term: 'Comedón / Comedone', definition: 'Poro tapado — puede ser abierto (punto negro) o cerrado (punto blanco). | Clogged pore — can be open (blackhead) or closed (whitehead).' },
        { term: 'Hormonas / Hormones', definition: 'Sustancias químicas del cuerpo que controlan el crecimiento y los cambios; los andrógenos estimulan la producción de sebo. | Chemical substances in the body that control growth and changes; androgens stimulate sebum production.' },
        { term: 'No comedogénico / Non-comedogenic', definition: 'Producto que no tapa los poros y no causa acné. | Product that does not clog pores and does not cause acne.' },
      ],
      analogies: [
        'Un grano es como un globo inflado con pus debajo de la piel — exprimirlo puede empujar la infección más profundo. | A pimple is like a balloon inflated with pus under the skin — squeezing it can push infection deeper.',
        'Los poros son como pequeños túneles que se pueden atascar con desechos, como una tubería tapada. | Pores are like tiny tunnels that can get clogged with debris, like a blocked pipe.',
        'Los puntos negros no son suciedad — el color oscuro viene de la oxidación del sebo al contacto con el aire, como una manzana cortada que se oscurece. | Blackheads are not dirt — the dark color comes from sebum oxidation on contact with air, like a cut apple turning dark.',
      ],
      examples: [
        'Adolescente con granos en la frente y barbilla que empeoran durante los exámenes (estrés). | Teenager with pimples on forehead and chin that worsen during exams (stress).',
        'Mujer que nota más granos días antes de su período menstrual (acné hormonal). | Woman who notices more pimples days before her menstrual period (hormonal acne).',
        'Persona con nódulos y quistes dolorosos en la espalda (acné quístico/nodular severo). | Person with painful nodules and cysts on the back (severe nodular/cystic acne).',
      ],
      patientCounselingPoints: [
        'NO exprima los granos — puede causar cicatrices permanentes e infecciones. | Do NOT pop pimples — it can cause permanent scarring and infection.',
        'Los tratamientos para el acné tardan 6-8 semanas en mostrar resultados — sea paciente y consistente. | Acne treatments take 6-8 weeks to show results — be patient and consistent.',
        'Use protector solar diario, ya que muchos tratamientos para el acné hacen la piel más sensible al sol. | Use daily sunscreen, as many acne treatments make skin more sun-sensitive.',
        'Lavar la cara más de 2 veces al día puede irritar la piel y empeorar el acné. | Washing face more than 2 times daily can irritate skin and worsen acne.',
      ],
    },

    2: {
      level: 2,
      summary: 'El acné vulgar es una enfermedad inflamatoria crónica de las unidades pilosebáceas. El tratamiento depende de la gravedad e incluye retinoides tópicos, antibióticos y agentes sistémicos. Cuatro factores clave: hipersecreción sebácea, hiperqueratinización folicular, C. acnes y respuesta inflamatoria. | Acne vulgaris is a chronic inflammatory disease of pilosebaceous units. Treatment depends on severity and includes topical retinoids, antibiotics, and systemic agents. Four key factors: sebaceous hypersecretion, follicular hyperkeratinization, C. acnes, and inflammatory response.',
      explanation: `## Explicación

### Fisiopatología — Los 4 factores clave

1. **Aumento de la producción de sebo**
   - Estimulada por andrógenos (testosterona → DHT por 5-alfa reductasa)
   - Las glándulas sebáceas se hipertrofian durante la pubertad
   - El sebo alimenta a Cutibacterium acnes

2. **Hiperqueratinización folicular**
   - Acumulación excesiva de queratina en el infundíbulo folicular
   - Forma el microcomedón (la lesión inicial invisible)
   - Los retinoides tópicos corrigen este paso

3. **Colonización por Cutibacterium acnes (C. acnes)**
   - Bacteria anaerobia que coloniza los folículos ricos en sebo
   - Produce lipasas que descomponen los triglicéridos en ácidos grasos libres irritantes
   - Activa la inmunidad innata a través de receptores TLR-2

4. **Respuesta inflamatoria**
   - Activación de mediadores inflamatorios (IL-1, TNF-alfa, IL-8)
   - Reclutamiento de neutrófilos
   - Formación de pápulas, pústulas, nódulos y quistes

### Clasificación clínica del acné

**Acné comedónico (no inflamatorio):**
- Comedones abiertos (puntos negros) y cerrados (puntos blancos)
- Sin inflamación significativa

**Acné inflamatorio leve:**
- Pápulas y pústulas escasas (<20)
- Pocos comedones

**Acné inflamatorio moderado:**
- Pápulas y pústulas numerosas (20-50)
- Comedones abundantes
- Puede haber nódulos ocasionales

**Acné inflamatorio grave (noduloquístico):**
- Nódulos y quistes profundos (>5 nódulos)
- Múltiples pápulas y pústulas
- Riesgo alto de cicatrización
- Requiere tratamiento sistémico agresivo

### Tratamiento escalonado

**Paso 1: Acné leve (comedónico/inflamatorio leve):**
- Retinoide tópico por la noche (primera línea)
  - Tretinoína 0.025-0.05% crema
  - Adapaleno 0.1% gel (disponible sin receta)
  - Tazaroteno 0.1% crema
- Peróxido de benzoílo por la mañana (2.5-5%)
- Ácido salicílico 2% (alternativa más suave)
- Ácido azelaico 15-20% (seguro en embarazo)

**Paso 2: Acné moderado:**
- Continuar retinoide tópico + peróxido de benzoílo
- Agregar antibiótico oral (curso de 3-6 meses máximo)
  - Doxiciclina 100 mg 2 veces/día (primera opción)
  - Minociclina 100 mg 2 veces/día
  - SIEMPRE combinar con peróxido de benzoílo para prevenir resistencia
- Considerar terapia hormonal en mujeres

**Paso 3: Acné grave/refractario:**
- Isotretinoína oral (Accutane/Roaccutane)
  - 0.5-1.0 mg/kg/día
  - Curso de 15-20 semanas
  - Dosis acumulativa: 120-150 mg/kg
  - El ÚNICO tratamiento que modifica el curso natural de la enfermedad
- Terapia hormonal en mujeres:
  - Anticonceptivos orales combinados
  - Espironolactona (antiandrogénico)

### Contraindicaciones importantes

**Isotretinoína:**
- Embarazo (ABSOLUTAMENTE contraindicada — altamente teratogénica)
- Lactancia
- Enfermedad hepática significativa
- Hiperlipidemia grave no controlada

**Tetraciclinas (doxiciclina, minociclina):**
- Embarazo
- Niños <8 años (decoloración dental permanente)
- Uso concomitante con isotretinoína (riesgo de pseudotumor cerebri)

---
## Explanation

### Pathophysiology — The 4 Key Factors

1. **Increased sebum production**
   - Stimulated by androgens (testosterone → DHT by 5-alpha reductase)
   - Sebaceous glands hypertrophy during puberty
   - Sebum feeds Cutibacterium acnes

2. **Follicular hyperkeratinization**
   - Excessive keratin accumulation in the follicular infundibulum
   - Forms the microcomedone (the invisible initial lesion)
   - Topical retinoids correct this step

3. **Cutibacterium acnes (C. acnes) colonization**
   - Anaerobic bacteria colonizing sebum-rich follicles
   - Produces lipases that break down triglycerides into irritating free fatty acids
   - Activates innate immunity through TLR-2 receptors

4. **Inflammatory response**
   - Activation of inflammatory mediators (IL-1, TNF-alpha, IL-8)
   - Neutrophil recruitment
   - Formation of papules, pustules, nodules, and cysts

### Clinical Classification of Acne

**Comedonal acne (non-inflammatory):**
- Open comedones (blackheads) and closed comedones (whiteheads)
- No significant inflammation

**Mild inflammatory acne:**
- Few papules and pustules (<20)
- Few comedones

**Moderate inflammatory acne:**
- Numerous papules and pustules (20-50)
- Abundant comedones
- Occasional nodules may be present

**Severe inflammatory acne (nodulocystic):**
- Deep nodules and cysts (>5 nodules)
- Multiple papules and pustules
- High scarring risk
- Requires aggressive systemic treatment

### Stepwise Treatment

**Step 1: Mild acne (comedonal/mild inflammatory):**
- Topical retinoid at night (first-line)
  - Tretinoin 0.025-0.05% cream
  - Adapalene 0.1% gel (available over-the-counter)
  - Tazarotene 0.1% cream
- Benzoyl peroxide in the morning (2.5-5%)
- Salicylic acid 2% (gentler alternative)
- Azelaic acid 15-20% (safe in pregnancy)

**Step 2: Moderate acne:**
- Continue topical retinoid + benzoyl peroxide
- Add oral antibiotic (3-6 month course maximum)
  - Doxycycline 100 mg twice daily (first choice)
  - Minocycline 100 mg twice daily
  - ALWAYS combine with benzoyl peroxide to prevent resistance
- Consider hormonal therapy in women

**Step 3: Severe/refractory acne:**
- Oral isotretinoin (Accutane/Roaccutane)
  - 0.5-1.0 mg/kg/day
  - 15-20 week course
  - Cumulative dose: 120-150 mg/kg
  - The ONLY treatment that modifies the natural disease course
- Hormonal therapy in women:
  - Combined oral contraceptives
  - Spironolactone (antiandrogen)

### Important Contraindications

**Isotretinoin:**
- Pregnancy (ABSOLUTELY contraindicated — highly teratogenic)
- Breastfeeding
- Significant liver disease
- Severe uncontrolled hyperlipidemia

**Tetracyclines (doxycycline, minocycline):**
- Pregnancy
- Children <8 years (permanent tooth discoloration)
- Concomitant use with isotretinoin (pseudotumor cerebri risk)`,
      keyTerms: [
        { term: 'Sebo / Sebum', definition: 'Sustancia oleosa producida por las glándulas sebáceas; alimenta a C. acnes y contribuye a la obstrucción folicular. | Oily substance produced by sebaceous glands; feeds C. acnes and contributes to follicular obstruction.' },
        { term: 'Comedón / Comedone', definition: 'Lesión básica del acné — poro tapado, ya sea abierto (punto negro) o cerrado (punto blanco). | Basic acne lesion — clogged pore, either open (blackhead) or closed (whitehead).' },
        { term: 'Hiperqueratinización / Hyperkeratinization', definition: 'Producción excesiva de queratina que bloquea los folículos — el retinoide tópico corrige este paso. | Excessive keratin production blocking follicles — topical retinoid corrects this step.' },
        { term: 'Teratogénico / Teratogenic', definition: 'Que causa defectos de nacimiento graves si se toma durante el embarazo (isotretinoína). | Causing severe birth defects if taken during pregnancy (isotretinoin).' },
        { term: 'Retinoide / Retinoid', definition: 'Derivado de vitamina A que normaliza el recambio celular del folículo — pilar del tratamiento del acné. | Vitamin A derivative that normalizes follicular cell turnover — cornerstone of acne treatment.' },
      ],
      analogies: [
        'El sebo es como el aceite que mantiene la piel hidratada, pero en exceso tapa las tuberías (poros). | Sebum is like the oil that keeps skin moisturized, but in excess it clogs the pipes (pores).',
        'La isotretinoína es como resetear las glándulas sebáceas — las encoge y reduce permanentemente la producción de sebo. | Isotretinoin is like resetting the sebaceous glands — it shrinks them and permanently reduces sebum production.',
        'Los retinoides tópicos son como destapadores de poros — evitan que las células muertas se acumulen y formen comedones. | Topical retinoids are like pore uncloggers — they prevent dead cells from accumulating and forming comedones.',
      ],
      examples: [
        'Adolescente con acné comedónico leve inicia adapaleno tópico por las noches. | Teenager with mild comedonal acne starts topical adapalene at night.',
        'Mujer con acné hormonal en la mandíbula recibe anticonceptivos orales combinados. | Woman with hormonal acne on jawline receives combined oral contraceptives.',
        'Paciente con acné quístico grave que no responde a antibióticos — inicia isotretinoína. | Patient with severe cystic acne not responding to antibiotics — starts isotretinoin.',
      ],
      patientCounselingPoints: [
        'Los retinoides tópicos deben aplicarse en TODA el área afectada, no solo en los granos individuales. | Topical retinoids should be applied to the ENTIRE affected area, not just individual pimples.',
        'El peróxido de benzoílo puede decolorar la ropa y las toallas — use ropa vieja al aplicar. | Benzoyl peroxide can bleach clothing and towels — use old clothes when applying.',
        'Los antibióticos orales deben limitarse a 3-6 meses y siempre combinarse con peróxido de benzoílo para prevenir resistencia bacteriana. | Oral antibiotics should be limited to 3-6 months and always combined with benzoyl peroxide to prevent bacterial resistance.',
      ],
    },

    3: {
      level: 3,
      summary: 'La isotretinoína es el único tratamiento que altera el curso natural del acné. Requiere monitoreo estricto y programa de prevención de embarazo (iPLEDGE). El tratamiento escalonado progresa de tópicos a sistémicos basado en gravedad y respuesta. | Isotretinoin is the only treatment that alters the natural course of acne. It requires strict monitoring and pregnancy prevention program (iPLEDGE). Stepwise treatment progresses from topicals to systemics based on severity and response.',
      explanation: `## Explicación

### Algoritmo de tratamiento detallado

**Paso 1: Primera línea para acné leve**
1. Retinoide tópico por la noche
   - Tretinoína 0.025% crema (iniciar con baja concentración)
   - Adapaleno 0.1% gel (mejor tolerado, menos irritante)
   - Trifaroteno 0.005% crema (nuevo retinoide, para cara Y tronco)
2. Peróxido de benzoílo por la mañana
   - 2.5-5% lavado o gel (concentraciones mayores no son más efectivas pero irritan más)
3. Agregar antibiótico tópico si hay componente inflamatorio
   - Clindamicina 1% (SIEMPRE con peróxido de benzoílo)
   - Combinación fija: adapaleno/peróxido de benzoílo (Epiduo)

**Paso 2: Acné moderado**
1. Continuar retinoide tópico + peróxido de benzoílo
2. Agregar antibiótico oral (3-6 meses MÁXIMO)
   - Doxiciclina 100 mg 2 veces/día × 3 meses (primera opción)
   - Minociclina 100 mg 2 veces/día (más efectos secundarios)
   - Sareciclina: tetraciclina de espectro estrecho para acné
3. En mujeres, considerar terapia hormonal
4. Dapsona tópica 5-7.5% gel (especialmente en mujeres adultas)

**Paso 3: Acné grave/refractario**
1. Isotretinoína oral
   - Dosis: 0.5-1.0 mg/kg/día
   - Curso: 15-20 semanas (o hasta dosis acumulativa de 120-150 mg/kg)
   - Inicio bajo en acné muy inflamatorio (0.25 mg/kg) para evitar brote inicial

### Isotretinoína — Monitoreo y manejo

**Requisitos obligatorios:**
- Programa iPLEDGE (en EE.UU.) para prevención de embarazo
- Prueba de embarazo negativa antes de iniciar (mujeres)
- Dos métodos anticonceptivos simultáneos
- Prueba de embarazo mensual
- Anticoncepción 1 mes antes, durante y 1 mes después

**Monitoreo de laboratorio:**
- Perfil de lípidos: basal y a las 4-8 semanas
- Pruebas hepáticas: basal y periódicamente
- Hemograma completo: basal

**Efectos secundarios comunes:**
- Queilitis/xerosis labial (90%): vaselina constante
- Sequedad de piel y mucosas: hidratantes y lágrimas artificiales
- Mialgia y artralgia (especialmente en atletas)
- Hipertrigliceridemia (frecuente, usualmente leve)

**Efectos secundarios raros pero importantes:**
- Pseudotumor cerebri — NO combinar con tetraciclinas
- Depresión/cambios de humor: evidencia causal debatida pero monitorear
- Reacciones cutáneas graves: extremadamente raro

### Período de "purga" con retinoides

- Empeoramiento transitorio en las primeras 2-6 semanas
- Normal y esperado — los microcomedones preexistentes se aceleran
- Puede durar hasta 8-12 semanas antes de ver mejoría
- Educar al paciente para evitar abandono del tratamiento

### Terapia hormonal en mujeres

**Anticonceptivos orales combinados:**
- Reducen andrógenos circulantes y producción sebácea
- Etinilestradiol + drospirenona (Yasmin)
- Tarda 2-3 meses en mostrar efecto

**Espironolactona:**
- Bloqueador del receptor de andrógenos
- Dosis: 50-200 mg/día, solo en mujeres
- Monitoreo: potasio sérico

**Clascoterone tópico (Winlevi):**
- Inhibidor tópico del receptor de andrógenos (primero aprobado)
- 1% crema, 2 veces/día
- Puede usarse en hombres y mujeres (≥12 años)

---
## Explanation

### Detailed Treatment Algorithm

**Step 1: First-line for mild acne**
1. Topical retinoid at night
   - Tretinoin 0.025% cream (start low concentration)
   - Adapalene 0.1% gel (better tolerated, less irritating)
   - Trifarotene 0.005% cream (new retinoid, for face AND trunk)
2. Benzoyl peroxide in the morning
   - 2.5-5% wash or gel (higher concentrations not more effective but more irritating)
3. Add topical antibiotic if inflammatory component present
   - Clindamycin 1% (ALWAYS with benzoyl peroxide)
   - Fixed combination: adapalene/benzoyl peroxide (Epiduo)

**Step 2: Moderate acne**
1. Continue topical retinoid + benzoyl peroxide
2. Add oral antibiotic (3-6 months MAXIMUM)
   - Doxycycline 100 mg twice daily x 3 months (first choice)
   - Minocycline 100 mg twice daily (more side effects)
   - Sarecycline: narrow-spectrum tetracycline for acne
3. In women, consider hormonal therapy
4. Topical dapsone 5-7.5% gel (especially in adult women)

**Step 3: Severe/refractory acne**
1. Oral isotretinoin
   - Dose: 0.5-1.0 mg/kg/day
   - Course: 15-20 weeks (or until cumulative dose of 120-150 mg/kg)
   - Start low in highly inflammatory acne (0.25 mg/kg) to avoid initial flare

### Isotretinoin — Monitoring and Management

**Mandatory requirements:**
- iPLEDGE program (in USA) for pregnancy prevention
- Negative pregnancy test before starting (women)
- Two simultaneous contraceptive methods
- Monthly pregnancy test
- Contraception 1 month before, during, and 1 month after

**Laboratory monitoring:**
- Lipid panel: baseline and at 4-8 weeks
- Liver function tests: baseline and periodically
- Complete blood count: baseline

**Common side effects:**
- Cheilitis/lip xerosis (90%): constant vaseline
- Skin and mucosal dryness: moisturizers and artificial tears
- Myalgia and arthralgia (especially in athletes)
- Hypertriglyceridemia (frequent, usually mild)

**Rare but important side effects:**
- Pseudotumor cerebri — do NOT combine with tetracyclines
- Depression/mood changes: causal evidence debated but monitor
- Severe skin reactions: extremely rare

### Retinoid "Purge" Period

- Transient worsening in the first 2-6 weeks
- Normal and expected — preexisting microcomedones are accelerated
- Can last up to 8-12 weeks before seeing improvement
- Educate patient to prevent treatment abandonment

### Hormonal Therapy in Women

**Combined oral contraceptives:**
- Reduce circulating androgens and sebaceous production
- Ethinyl estradiol + drospirenone (Yasmin)
- Takes 2-3 months to show effect

**Spironolactone:**
- Androgen receptor blocker
- Dose: 50-200 mg/day, only in women
- Monitoring: serum potassium

**Topical clascoterone (Winlevi):**
- Topical androgen receptor inhibitor (first approved)
- 1% cream, twice daily
- Can be used in men and women (≥12 years)`,
      keyTerms: [
        { term: 'Queilitis / Cheilitis', definition: 'Inflamación y agrietamiento severo de los labios — efecto secundario más común de isotretinoína (90%). | Severe inflammation and cracking of lips — most common isotretinoin side effect (90%).' },
        { term: 'Pseudotumor cerebri', definition: 'Aumento de la presión intracraneal que causa cefalea y cambios visuales — no combinar isotretinoína con tetraciclinas. | Increased intracranial pressure causing headache and visual changes — do not combine isotretinoin with tetracyclines.' },
        { term: 'iPLEDGE', definition: 'Programa de prevención de riesgos de isotretinoína para prevenir embarazos durante el tratamiento. | Isotretinoin risk management program to prevent pregnancies during treatment.' },
        { term: 'Dosis acumulativa / Cumulative dose', definition: 'Cantidad total de isotretinoína tomada durante todo el tratamiento (objetivo: 120-150 mg/kg). | Total isotretinoin taken over entire treatment course (target: 120-150 mg/kg).' },
        { term: 'Espironolactona / Spironolactone', definition: 'Antiandrógeno oral para acné hormonal en mujeres; bloquea el receptor de andrógenos. | Oral antiandrogen for hormonal acne in women; blocks the androgen receptor.' },
      ],
      analogies: [
        'La queilitis por isotretinoína es cuando los labios se resecan tanto que se agrietan — la vaselina es esencial. | Isotretinoin cheilitis is when lips become so dry they crack — vaseline is essential.',
        'La "purga" con retinoides es como una limpieza profunda — parece peor antes de mejorar. | The retinoid "purge" is like a deep cleaning — it looks worse before it gets better.',
        'La espironolactona actúa bloqueando los efectos de las hormonas masculinas en la piel — reduce la producción de grasa. | Spironolactone works by blocking male hormone effects on skin — it reduces oil production.',
      ],
      examples: [
        'Paciente con isotretinoína desarrolla triglicéridos elevados — se reduce la dosis. | Patient on isotretinoin develops elevated triglycerides — dose reduced.',
        'Mujer tomando isotretinoína debe usar dos métodos anticonceptivos. | Woman taking isotretinoin must use two contraceptive methods.',
        'Adolescente que falla múltiples antibióticos — se inicia isotretinoína. | Teenager who fails multiple antibiotics — isotretinoin started.',
      ],
      clinicalNotes: 'Los retinoides tópicos pueden causar un período de "purga" (empeoramiento antes de mejoría). Puede tomar 8-12 semanas ver resultados. Continuar terapia tópica mientras se usan antibióticos orales. Considerar anticonceptivos orales para mujeres con brotes premenstruales. Las guías actualizadas permiten monitoreo menos frecuente de laboratorios con isotretinoína si los valores basales son normales. | Topical retinoids may cause a "purge" period (worsening before improvement). It can take 8-12 weeks to see results. Continue topical therapy while on oral antibiotics. Consider oral contraceptives for women with premenstrual flares. Updated guidelines allow less frequent lab monitoring with isotretinoin if baseline values are normal.',
    },

    4: {
      level: 4,
      summary: 'Las cicatrices de acné y la hiperpigmentación postinflamatoria son secuelas comunes. El tratamiento agresivo temprano previene secuelas cosméticas permanentes. Las poblaciones especiales (embarazo, pieles oscuras, adultos) requieren consideraciones específicas. | Acne scarring and post-inflammatory hyperpigmentation are common sequelae. Early aggressive treatment prevents permanent cosmetic sequelae. Special populations (pregnancy, dark skin, adults) require specific considerations.',
      explanation: `## Explicación

### Secuelas del acné

**Eritema postinflamatorio (EPI):**
- Marcas rojas después de que las lesiones sanan
- Dilatación vascular persistente
- Más visible en pieles claras
- Tratamiento: láseres vasculares, brimonidina, protección solar

**Hiperpigmentación postinflamatoria (HPI):**
- Manchas oscuras después de que las lesiones sanan
- MÁS común en pieles oscuras (Fitzpatrick IV-VI)
- Puede tardar meses a años en desvanecerse
- Tratamiento: hidroquinona, retinoides, ácido azelaico, vitamina C, peelings, protección solar estricta

**Tipos de cicatrices:**
- **Icepick:** profundas, estrechas, en V — las más difíciles de tratar
- **Boxcar:** depresiones con bordes afilados — como cráteres
- **Rolling:** superficie ondulada por fibrosis subdérmica
- **Hipertróficas:** elevadas, dentro de los bordes de la lesión original
- **Queloides:** crecen más allá de la lesión original, más comunes en piel oscura

### Tratamiento de cicatrices

**Atróficas:** láser CO2 fraccionado, microneedling, subcisión, rellenos dérmicos, TCA CROSS
**Hipertróficas/queloides:** corticosteroides intralesionales, silicona, láser, 5-FU intralesional

### Poblaciones especiales

**Embarazo:**
- PROHIBIDOS: retinoides, tetraciclinas, espironolactona
- SEGUROS: ácido azelaico, ácido glicólico, peróxido de benzoílo (limitado)

**Pieles oscuras:**
- Mayor riesgo de HPI y queloides
- Iniciar retinoides a concentraciones más bajas
- Ácido azelaico es especialmente útil

**Acné del adulto en mujeres (>25 años):**
- Distribución en zona U (mandíbula, mentón, cuello)
- Componente hormonal frecuente
- Evaluar SOP si hay hiperandrogenismo
- Espironolactona: excelente opción

### Impacto psicosocial

- Ansiedad y depresión significativamente más comunes
- Baja autoestima y alteración de la imagen corporal
- Asociación con ideación suicida en adolescentes
- Tamizaje de salud mental obligatorio antes de isotretinoína

---
## Explanation

### Acne Sequelae

**Post-inflammatory erythema (PIE):**
- Red marks after lesions heal
- Persistent vascular dilation
- More visible in fair skin
- Treatment: vascular lasers, brimonidine, sun protection

**Post-inflammatory hyperpigmentation (PIH):**
- Dark marks after lesions heal
- MORE common in dark skin (Fitzpatrick IV-VI)
- Can take months to years to fade
- Treatment: hydroquinone, retinoids, azelaic acid, vitamin C, peels, strict sun protection

**Types of scars:**
- **Icepick:** deep, narrow, V-shaped — hardest to treat
- **Boxcar:** depressions with sharp edges — like craters
- **Rolling:** undulating surface from subdermal fibrosis
- **Hypertrophic:** raised, within original lesion borders
- **Keloid:** grow beyond original lesion, more common in dark skin

### Scar Treatment

**Atrophic:** fractional CO2 laser, microneedling, subcision, dermal fillers, TCA CROSS
**Hypertrophic/keloid:** intralesional corticosteroids, silicone, laser, intralesional 5-FU

### Special Populations

**Pregnancy:**
- PROHIBITED: retinoids, tetracyclines, spironolactone
- SAFE: azelaic acid, glycolic acid, benzoyl peroxide (limited)

**Dark skin:**
- Higher PIH and keloid risk
- Start retinoids at lower concentrations
- Azelaic acid is especially useful

**Adult acne in women (>25 years):**
- U-zone distribution (jawline, chin, neck)
- Frequent hormonal component
- Evaluate for PCOS if hyperandrogenism present
- Spironolactone: excellent option

### Psychosocial Impact

- Anxiety and depression significantly more common
- Low self-esteem and body image disturbance
- Association with suicidal ideation in adolescents
- Mandatory mental health screening before isotretinoin`,
      keyTerms: [
        { term: 'EPI / PIE', definition: 'Eritema Postinflamatorio — marcas rojas después del acné por vasos dilatados. | Post-Inflammatory Erythema — red marks after acne from dilated vessels.' },
        { term: 'HPI / PIH', definition: 'Hiperpigmentación Postinflamatoria — manchas oscuras después del acné; más pronunciada en piel oscura. | Post-Inflammatory Hyperpigmentation — dark marks after acne; more pronounced in dark skin.' },
        { term: 'Subcisión / Subcision', definition: 'Ruptura de bandas fibrosas debajo de las cicatrices con aguja para liberar la piel deprimida. | Breaking fibrous bands under scars with needle to release depressed skin.' },
        { term: 'Microneedling / Microagujas', definition: 'Microlesiones controladas con agujas finas para estimular colágeno y mejorar cicatrices. | Controlled micro-injuries with fine needles to stimulate collagen and improve scars.' },
        { term: 'TCA CROSS', definition: 'Ácido tricloroacético a alta concentración (70-100%) aplicado focalmente en cicatrices icepick individuales. | High-concentration trichloroacetic acid (70-100%) applied focally to individual icepick scars.' },
      ],
      analogies: [
        'La HPI es como una mancha en la piel que tarda mucho en desvanecerse — la protección solar es clave. | PIH is like a stain on the skin that takes a long time to fade — sun protection is key.',
        'Las cicatrices icepick son como pequeños agujeros profundos hechos con un alfiler. | Icepick scars are like small deep holes made with a pin.',
        'El microneedling es como despertar la producción de colágeno para rellenar cicatrices desde adentro. | Microneedling is like awakening collagen production to fill scars from within.',
      ],
      examples: [
        'Paciente de piel oscura con HPI intensa — se inicia ácido azelaico + protector solar estricto. | Dark-skinned patient with intense PIH — azelaic acid + strict sunscreen started.',
        'Adolescente con cicatrices boxcar tratadas con láser CO2 fraccionado. | Teenager with boxcar scars treated with fractional CO2 laser.',
        'Embarazada con brote de acné — cambiada a ácido azelaico. | Pregnant woman with acne flare — switched to azelaic acid.',
      ],
      clinicalNotes: 'La dieta puede influir en el acné: alimentos de alto índice glucémico y lácteos (especialmente leche descremada) pueden empeorarlo. La protección solar es esencial para prevenir la HPI. El acné del adulto en mujeres frecuentemente tiene componente hormonal — evaluar SOP. El impacto psicológico del acné es comparable al de enfermedades crónicas graves — el tamizaje de depresión es esencial. | Diet may influence acne: high glycemic index foods and dairy (especially skim milk) may worsen it. Sun protection is essential to prevent PIH. Adult acne in women frequently has a hormonal component — evaluate for PCOS. Psychological impact of acne is comparable to severe chronic diseases — depression screening is essential.',
    },

    5: {
      level: 5,
      summary: 'El acné es una enfermedad multifactorial con predisposición genética, interacción entre el eje hormonal, el microbioma cutáneo y la inmunidad innata. Las terapias emergentes incluyen modulación del microbioma, nuevos retinoides y terapias antiandrogénicas selectivas. | Acne is a multifactorial disease with genetic predisposition, interplay between hormonal axis, cutaneous microbiome, and innate immunity. Emerging therapies include microbiome modulation, novel retinoids, and selective antiandrogenic therapies.',
      explanation: `## Explicación

### Patogénesis molecular avanzada

**Genética del acné:**
- Concordancia en gemelos monocigóticos: ~80%
- Variantes en genes de vías androgénicas, inflamatorias y de queratinización
- Polimorfismos en TNF-alfa, IL-1alfa, CYP1A1, receptor de andrógenos
- Herencia poligénica compleja

**Eje hormonal-sebáceo:**
- Andrógenos estimulan glándulas sebáceas vía receptor de andrógenos
- 5-alfa reductasa tipo 1 convierte testosterona → DHT en la piel
- Insulina e IGF-1 amplifican la señalización androgénica
- mTORC1 integra señales nutricionales y hormonales → lipogénesis sebácea
- Dietas de alto índice glucémico → hiperinsulinemia → aumento de IGF-1 → acné
- Leche descremada contiene péptidos bioactivos que estimulan IGF-1

**Microbioma cutáneo y acné:**
- C. acnes: comensal que se vuelve patógena en ciertos filotipos
  - Filotipo IA1: más asociado con acné inflamatorio
  - Filotipos IB y II: asociados con piel sana
- Biofilm de C. acnes → resistencia a antibióticos
- Activa TLR-2/TLR-4 → NF-kB → citocinas proinflamatorias
- NLRP3 inflamasoma → IL-1beta → inflamación
- Pérdida de diversidad microbiana

**Inmunidad innata y adquirida:**
- IL-1alfa de queratinocitos → hiperqueratinización folicular
- Activación de Th1 y Th17 en lesiones inflamatorias
- Metaloproteinasas de matriz (MMP-1, MMP-9) → destrucción tisular → cicatrices

### Terapias emergentes

**Nuevos retinoides:**
- Trifaroteno (RAR-gamma selectivo): primero aprobado para cara Y tronco
- Talarozole: inhibidor de CYP26 que aumenta ácido retinoico endógeno

**Terapias antiandrogénicas:**
- Clascoterone tópico 1%: inhibidor de AR tópico, aprobado 2020
- Cortexolone 17-alfa-propionato: en investigación

**Modulación del microbioma:**
- Probióticos tópicos (Nitrosomonas, S. epidermidis modificado)
- Terapia fágica dirigida contra filotipos patógenos de C. acnes
- Vacuna anti-C. acnes: en desarrollo preclínico
- C. acnes no es "el enemigo" — es un desequilibrio de filotipos

**Nuevas dianas terapéuticas:**
- Inhibidores de SCD1: reducen lipogénesis sebácea
- Anti-sustancia P: neuropéptido que promueve inflamación
- Inhibidores de NLRP3 inflamasoma

### Controversias actuales

**Dieta y acné:**
- Índice glucémico alto: evidencia FUERTE
- Productos lácteos: evidencia MODERADA
- Chocolate: evidencia INCONSISTENTE
- Proteína de suero (whey): evidencia emergente como desencadenante

**Antibióticos y resistencia:**
- Resistencia de C. acnes a eritromicina: >50%
- Limitar duración a 3-6 meses
- SIEMPRE combinar con peróxido de benzoílo
- Considerar isotretinoína más temprano

**Isotretinoína y depresión:**
- Estudios grandes NO demuestran aumento de riesgo
- Algunos sugieren MEJORÍA de depresión al mejorar el acné
- El acné en sí es un factor de riesgo mayor para depresión que la isotretinoína

**Acné resistente — Abordaje sistemático:**
- Causa más común: falta de adherencia
- Diagnóstico erróneo (rosácea, foliculitis, dermatitis perioral)
- Factores hormonales no tratados (SOP)
- Resistencia antibiótica
- Tamizar para síndrome SAPHO si acné grave con dolor articular

---
## Explanation

### Advanced Molecular Pathogenesis

**Acne genetics:**
- Monozygotic twin concordance: ~80%
- Variants in androgenic, inflammatory, and keratinization pathway genes
- Polymorphisms in TNF-alpha, IL-1alpha, CYP1A1, androgen receptor
- Complex polygenic inheritance

**Hormonal-sebaceous axis:**
- Androgens stimulate sebaceous glands via androgen receptor
- 5-alpha reductase type 1 converts testosterone → DHT in skin
- Insulin and IGF-1 amplify androgenic signaling
- mTORC1 integrates nutritional and hormonal signals → sebaceous lipogenesis
- High glycemic index diets → hyperinsulinemia → increased IGF-1 → acne
- Skim milk contains bioactive peptides that stimulate IGF-1

**Cutaneous microbiome and acne:**
- C. acnes: commensal that becomes pathogenic in certain phylotypes
  - Phylotype IA1: most associated with inflammatory acne
  - Phylotypes IB and II: associated with healthy skin
- C. acnes biofilm → antibiotic resistance
- Activates TLR-2/TLR-4 → NF-kB → pro-inflammatory cytokines
- NLRP3 inflammasome → IL-1beta → inflammation
- Loss of microbial diversity

**Innate and adaptive immunity:**
- IL-1alpha from keratinocytes → follicular hyperkeratinization
- Th1 and Th17 activation in inflammatory lesions
- Matrix metalloproteinases (MMP-1, MMP-9) → tissue destruction → scarring

### Emerging Therapies

**Novel retinoids:**
- Trifarotene (RAR-gamma selective): first approved for face AND trunk
- Talarozole: CYP26 inhibitor increasing endogenous retinoic acid

**Antiandrogenic therapies:**
- Topical clascoterone 1%: topical AR inhibitor, approved 2020
- Cortexolone 17-alpha-propionate: investigational

**Microbiome modulation:**
- Topical probiotics (Nitrosomonas, modified S. epidermidis)
- Phage therapy targeting pathogenic C. acnes phylotypes
- Anti-C. acnes vaccine: in preclinical development
- C. acnes is not "the enemy" — it is a phylotype imbalance

**Novel therapeutic targets:**
- SCD1 inhibitors: reduce sebaceous lipogenesis
- Anti-substance P: neuropeptide promoting inflammation
- NLRP3 inflammasome inhibitors

### Current Controversies

**Diet and acne:**
- High glycemic index: STRONG evidence
- Dairy products: MODERATE evidence
- Chocolate: INCONSISTENT evidence
- Whey protein: emerging evidence as trigger

**Antibiotics and resistance:**
- C. acnes resistance to erythromycin: >50%
- Limit duration to 3-6 months
- ALWAYS combine with benzoyl peroxide
- Consider isotretinoin earlier

**Isotretinoin and depression:**
- Large studies do NOT demonstrate increased risk
- Some suggest IMPROVEMENT of depression when acne improves
- Acne itself is a greater risk factor for depression than isotretinoin

**Treatment-resistant acne — Systematic approach:**
- Most common cause: non-adherence
- Misdiagnosis (rosacea, folliculitis, perioral dermatitis)
- Untreated hormonal factors (PCOS)
- Antibiotic resistance
- Screen for SAPHO syndrome if severe acne with joint pain`,
      keyTerms: [
        { term: 'Disbiosis / Dysbiosis', definition: 'Desequilibrio en filotipos de C. acnes — no eliminar la bacteria sino restaurar el equilibrio. | Imbalance in C. acnes phylotypes — not eliminating bacteria but restoring balance.' },
        { term: 'Síndrome SAPHO / SAPHO syndrome', definition: 'Síndrome raro con sinovitis, acné, pustulosis, hiperostosis y osteítis. | Rare syndrome with synovitis, acne, pustulosis, hyperostosis, and osteitis.' },
        { term: 'Clascoterone / Clascoterone', definition: 'Primer inhibidor tópico del receptor de andrógenos aprobado para acné — actúa localmente. | First topical androgen receptor inhibitor approved for acne — acts locally.' },
        { term: 'mTORC1', definition: 'Vía de señalización que integra señales nutricionales y hormonales; su activación promueve la lipogénesis sebácea. | Signaling pathway integrating nutritional and hormonal signals; its activation promotes sebaceous lipogenesis.' },
        { term: 'Trifaroteno / Trifarotene', definition: 'Retinoide selectivo para RAR-gamma, primer retinoide aprobado para cara Y tronco. | RAR-gamma selective retinoid, first retinoid approved for face AND trunk.' },
        { term: 'Terapia fágica / Phage therapy', definition: 'Uso de bacteriófagos para atacar selectivamente filotipos patogénicos de C. acnes. | Use of bacteriophages to selectively target pathogenic C. acnes phylotypes.' },
      ],
      analogies: [
        'La disbiosis en el acné es como un ecosistema desequilibrado: no se trata de matar a todas las bacterias, sino de restaurar la diversidad. | Dysbiosis in acne is like an unbalanced ecosystem: it is not about killing all bacteria, but restoring diversity.',
        'La vía mTORC1 es como un centro de control que recibe señales de la dieta y las hormonas y decide si producir más grasa. | The mTORC1 pathway is like a control center receiving signals from diet and hormones and deciding whether to produce more oil.',
        'El stewardship antibiótico es usar antibióticos con moderación para evitar que se vuelvan inútiles. | Antibiotic stewardship is using antibiotics in moderation to prevent them from becoming useless.',
      ],
      examples: [
        'Paciente con antibióticos por 12 meses sin mejoría — se cambia a isotretinoína. | Patient on antibiotics for 12 months without improvement — switched to isotretinoin.',
        'Mujer con acné resistente diagnosticada con SOP — espironolactona + anticonceptivos. | Woman with resistant acne diagnosed with PCOS — spironolactone + oral contraceptives.',
        'Adolescente con acné grave y dolor articular diagnosticado con SAPHO. | Teenager with severe acne and joint pain diagnosed with SAPHO.',
      ],
      clinicalNotes: 'El acné impacta significativamente la calidad de vida y la salud mental. El tratamiento efectivo temprano previene cicatrices permanentes. La resistencia antibiótica es una crisis creciente — el peróxido de benzoílo debe acompañar siempre a los antibióticos. Los nuevos paradigmas reconocen al microbioma como ecosistema complejo. Las dietas de bajo IG pueden complementar el tratamiento. La evidencia sobre isotretinoína y depresión es tranquilizadora pero no exime de monitoreo adecuado. | Acne significantly impacts quality of life and mental health. Early effective treatment prevents permanent scarring. Antibiotic resistance is a growing crisis — benzoyl peroxide should always accompany antibiotics. New paradigms recognize the microbiome as a complex ecosystem. Low GI diets may complement treatment. Evidence on isotretinoin and depression is reassuring but does not exempt from proper monitoring.',
    },
  },

  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'textbook',
      title: 'Fitzpatrick\'s Dermatology, 9th Edition',
      authors: ['Kang, S.', 'Amagai, M.', 'Bruckner, A.L.'],
      source: 'McGraw-Hill Education',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'Guidelines of care for the management of acne vulgaris',
      authors: ['Zaenglein, A.L.', 'Pathy, A.L.', 'Schlosser, B.J.'],
      source: 'Journal of the American Academy of Dermatology',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-3',
      type: 'textbook',
      title: 'Dermatología: Atlas, diagnóstico y tratamiento, 7a edición',
      authors: ['Arenas, R.'],
      source: 'McGraw-Hill Interamericana',
      license: 'CC BY 4.0',
    },
  ],
  crossReferences: [],
  tags: {
    systems: ['integumentary'],
    topics: ['dermatology'],
    keywords: [
      'acné', 'acne', 'acné vulgar', 'acne vulgaris',
      'isotretinoína', 'isotretinoin', 'retinoides', 'retinoids',
      'Cutibacterium acnes', 'comedón', 'comedone',
      'espironolactona', 'spironolactone', 'hormonal',
      'cicatrices', 'scarring', 'peróxido de benzoílo',
      'benzoyl peroxide', 'antibióticos', 'antibiotics',
    ],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
