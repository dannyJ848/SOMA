/**
 * Dermatitis y Eccema / Dermatitis and Eczema - Contenido Educativo Completo Bilingue
 *
 * Dermatitis atopica, dermatitis de contacto, dermatitis seborreica.
 * Atopic dermatitis, contact dermatitis, seborrheic dermatitis.
 *
 * Covers: pathophysiology, triggers, skincare, topical therapy, biologics, JAK inhibitors
 */

import { EducationalContent } from '../types';

export const dermatitisEczema: EducationalContent = {
  id: 'derm-dermatitis-eczema',
  type: 'condition',
  name: 'Dermatitis and Eczema | Dermatitis y Eccema',
  nameEs: 'Dermatitis y Eccema',
  alternateNames: [
    'Eccema Atopico', 'Atopic Eczema',
    'Dermatitis Atopica', 'Atopic Dermatitis',
    'Dermatitis de Contacto', 'Contact Dermatitis',
    'Dermatitis Seborreica', 'Seborrheic Dermatitis',
    'AD', 'DA',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'La dermatitis (eccema) es un grupo de enfermedades que causan piel roja, seca y con mucha picazon. Los tres tipos mas comunes son: la dermatitis atopica (la mas frecuente en ninos), la dermatitis de contacto (por tocar algo que irrita o produce alergia) y la dermatitis seborreica (escamas en el cuero cabelludo y cara). No son contagiosas. | Dermatitis (eczema) is a group of conditions that cause red, dry, itchy skin. The three most common types are: atopic dermatitis (most common in children), contact dermatitis (from touching something irritating or allergenic), and seborrheic dermatitis (scales on scalp and face). They are not contagious.',
      explanation: `## Tipos de dermatitis | Types of dermatitis

### 1. Dermatitis atopica (eccema atopico) | Atopic dermatitis (atopic eczema)

La dermatitis atopica es la forma mas comun de eccema. Causa piel muy seca, roja y con picazon intensa. Es especialmente comun en bebes y ninos, pero puede continuar en adultos.
Atopic dermatitis is the most common form of eczema. It causes very dry, red skin with intense itching. It is especially common in babies and children but can continue into adulthood.

**Donde aparece | Where it appears:**
- Bebes: cara, mejillas, cuero cabelludo | Babies: face, cheeks, scalp
- Ninos y adultos: interior de codos, detras de las rodillas, manos, cuello | Children and adults: inner elbows, behind knees, hands, neck

**Que lo empeora (desencadenantes) | What makes it worse (triggers):**
- Piel seca | Dry skin
- Jabon fuerte, detergentes | Harsh soap, detergents
- Estres | Stress
- Sudor, calor | Sweat, heat
- Ciertos alimentos (en algunos ninos) | Certain foods (in some children)
- Alergenos como polvo, mascotas | Allergens like dust, pets

### 2. Dermatitis de contacto | Contact dermatitis

Ocurre cuando algo toca la piel y causa irritacion o reaccion alergica. | Occurs when something touches the skin and causes irritation or allergic reaction.

**Dos tipos | Two types:**
- **Irritativa:** por jabon, quimicos, agua frecuente | **Irritant:** from soap, chemicals, frequent water contact
- **Alergica:** reaccion inmune a una sustancia (niquel, latex, hiedra venenosa) | **Allergic:** immune reaction to a substance (nickel, latex, poison ivy)

### 3. Dermatitis seborreica | Seborrheic dermatitis

Causa escamas amarillentas y grasosas en el cuero cabelludo, cejas, lados de la nariz y orejas. En los bebes se llama "costra lactea". | Causes yellowish, greasy scales on the scalp, eyebrows, sides of the nose, and ears. In babies it is called "cradle cap."

### Cuidado basico de la piel | Basic skin care

- Banar con agua tibia (no caliente), maximo 10-15 minutos | Bathe with lukewarm water (not hot), maximum 10-15 minutes
- Usar jabon suave sin fragancia | Use mild fragrance-free soap
- Aplicar crema hidratante inmediatamente despues del bano (en los primeros 3 minutos) | Apply moisturizer immediately after bathing (within 3 minutes)
- Usar cremas espesas o unguentos, no lociones ligeras | Use thick creams or ointments, not light lotions
- Evitar rascarse (mantener las unas cortas) | Avoid scratching (keep nails short)
- Consultar al medico si la picazon no mejora o empeora | See doctor if itching does not improve or worsens`,
      keyTerms: [
        { term: 'Dermatitis atopica | Atopic dermatitis', definition: 'Enfermedad cronica de la piel que causa sequedad, enrojecimiento y picazon intensa; la forma mas comun de eccema. | Chronic skin disease causing dryness, redness, and intense itching; the most common form of eczema.' },
        { term: 'Dermatitis de contacto | Contact dermatitis', definition: 'Reaccion de la piel al tocar algo que irrita o causa alergia. | Skin reaction from touching something irritating or allergenic.' },
        { term: 'Dermatitis seborreica | Seborrheic dermatitis', definition: 'Escamas amarillentas y grasosas en el cuero cabelludo, cara y orejas. | Yellowish, greasy scales on scalp, face, and ears.' },
        { term: 'Hidratante | Moisturizer', definition: 'Crema o unguento que ayuda a mantener la piel humeda y protege la barrera de la piel. | Cream or ointment that helps keep skin moist and protects the skin barrier.' },
        { term: 'Desencadenante | Trigger', definition: 'Algo que hace que la dermatitis empeore o se active. | Something that makes dermatitis worsen or flare up.' },
      ],
      analogies: [
        'La piel con eccema es como una pared de ladrillos con huecos: pierde humedad y deja entrar irritantes. La crema hidratante es como el cemento que rellena esos huecos. | Eczema skin is like a brick wall with gaps: it loses moisture and lets irritants in. Moisturizer is like the cement that fills those gaps.',
        'La dermatitis de contacto alergica es como una alarma que se activa cada vez que tocas cierto material. | Allergic contact dermatitis is like an alarm that goes off every time you touch a certain material.',
        'La dermatitis seborreica es como caspa en esteroides: escamas grasosas que aparecen no solo en el cuero cabelludo sino en la cara. | Seborrheic dermatitis is like dandruff on steroids: greasy scales appearing not just on the scalp but on the face.',
      ],
      examples: [
        'Un bebe con mejillas rojas y secas que se rasca constantemente — dermatitis atopica. | A baby with red, dry cheeks who scratches constantly — atopic dermatitis.',
        'Una persona con sarpullido rojo y con ampollas debajo de un reloj de metal — dermatitis de contacto alergica al niquel. | A person with red, blistered rash under a metal watch — allergic contact dermatitis to nickel.',
        'Un adulto con escamas grasosas en las cejas y lados de la nariz — dermatitis seborreica. | An adult with greasy scales on eyebrows and sides of nose — seborrheic dermatitis.',
      ],
    },

    2: {
      level: 2,
      summary:
        'La dermatitis atopica es una enfermedad inflamatoria cronica mediada por disfuncion de la barrera cutanea (mutaciones en filagrina) y desregulacion inmune (sesgo Th2). La dermatitis de contacto puede ser irritativa o alergica (hipersensibilidad tipo IV). La dermatitis seborreica se asocia con Malassezia. El tratamiento incluye emolientes, corticosteroides topicos, inhibidores de calcineurina e inhibidores de PDE4. | Atopic dermatitis is a chronic inflammatory disease mediated by skin barrier dysfunction (filaggrin mutations) and immune dysregulation (Th2 skewing). Contact dermatitis can be irritant or allergic (type IV hypersensitivity). Seborrheic dermatitis is associated with Malassezia. Treatment includes emollients, topical corticosteroids, calcineurin inhibitors, and PDE4 inhibitors.',
      explanation: `## Dermatitis atopica | Atopic dermatitis

**Epidemiologia | Epidemiology:**
- Afecta 15-20% de ninos, 1-3% de adultos | Affects 15-20% of children, 1-3% of adults
- Inicio antes de los 5 anos en 90% de los casos | Onset before age 5 in 90% of cases
- Asociada con la "triada atopica": eccema, asma, rinitis alergica | Associated with the "atopic triad": eczema, asthma, allergic rhinitis

**Patogenia (dos pilares) | Pathogenesis (two pillars):**

1. **Disfuncion de la barrera cutanea | Skin barrier dysfunction:**
   - Mutaciones en el gen de la filagrina (FLG): proteina esencial para la barrera | Filaggrin gene (FLG) mutations: essential barrier protein
   - Deficiencia de ceramidas | Ceramide deficiency
   - Aumento de la perdida transepidermica de agua (TEWL) | Increased transepidermal water loss (TEWL)
   - Penetracion de alergenos y microbios | Allergen and microbe penetration

2. **Desregulacion inmune | Immune dysregulation:**
   - Respuesta Th2 predominante (IL-4, IL-13, IL-31) | Predominant Th2 response (IL-4, IL-13, IL-31)
   - IL-31: la "citocina de la picazon" | IL-31: the "itch cytokine"
   - IgE elevada | Elevated IgE
   - Susceptibilidad a infecciones (S. aureus coloniza 90%) | Susceptibility to infections (S. aureus colonizes 90%)

**Distribucion por edad | Distribution by age:**

| Edad | Localizacion | Age | Location |
|------|-------------|-----|----------|
| Bebes | Cara, cuero cabelludo, extensores | Infants | Face, scalp, extensors |
| Ninos | Pliegues (flexural) | Children | Flexural creases |
| Adultos | Manos, parpados, flexural | Adults | Hands, eyelids, flexural |

## Dermatitis de contacto | Contact dermatitis

**Irritativa (80%) | Irritant (80%):**
- Dano directo a la piel sin mecanismo inmune | Direct skin damage without immune mechanism
- Causas comunes: jabon, detergentes, solventes, agua frecuente | Common causes: soap, detergents, solvents, frequent water
- Aparece rapidamente | Appears quickly

**Alergica (20%) | Allergic (20%):**
- Hipersensibilidad tipo IV (mediada por celulas T) | Type IV hypersensitivity (T-cell mediated)
- Requiere sensibilizacion previa (24-72 horas para reaccion) | Requires prior sensitization (24-72 hours for reaction)
- Diagnostico: prueba del parche (patch test) | Diagnosis: patch test
- Alergenos comunes: niquel, fragancias, conservadores, latex, hiedra venenosa (urushiol) | Common allergens: nickel, fragrances, preservatives, latex, poison ivy (urushiol)

## Dermatitis seborreica | Seborrheic dermatitis

- Prevalencia 1-3% de la poblacion general; mas comun en VIH (34-83%) | Prevalence 1-3% general; more common in HIV (34-83%)
- Asociada con levadura Malassezia (lipofilica) | Associated with Malassezia yeast (lipophilic)
- Localizaciones: cuero cabelludo, cejas, pliegues nasolabiales, detras de orejas | Locations: scalp, eyebrows, nasolabial folds, behind ears
- Costra lactea en bebes | Cradle cap in infants

## Tratamiento general | General treatment

**Emolientes (base del tratamiento) | Emollients (foundation of treatment):**
- Aplicar 2-3 veces al dia y despues del bano | Apply 2-3 times daily and after bathing
- Unguentos > cremas > lociones (por contenido de agua/aceite) | Ointments > creams > lotions (by water/oil content)

**Corticosteroides topicos | Topical corticosteroids:**
- Baja potencia: cara, pliegues (hidrocortisona) | Low potency: face, folds (hydrocortisone)
- Media potencia: tronco, extremidades (triamcinolona) | Medium potency: trunk, extremities (triamcinolone)
- Alta potencia: placas gruesas, palmas, plantas (betametasona) | High potency: thick plaques, palms, soles (betamethasone)

**Inhibidores de calcineurina topicos | Topical calcineurin inhibitors:**
- Tacrolimus, pimecrolimus | Tacrolimus, pimecrolimus
- Sin atrofia cutanea (ventaja sobre esteroides) | No skin atrophy (advantage over steroids)
- Para cara, parpados, pliegues | For face, eyelids, folds

**Dermatitis seborreica — tratamiento especifico | Seborrheic dermatitis — specific treatment:**
- Champu con ketoconazol, sulfuro de selenio o piritionato de zinc | Ketoconazole, selenium sulfide, or zinc pyrithione shampoo
- Corticosteroides topicos de baja potencia para inflamacion | Low-potency topical corticosteroids for inflammation`,
      keyTerms: [
        { term: 'Filagrina | Filaggrin', definition: 'Proteina esencial de la barrera cutanea; sus mutaciones son el factor de riesgo genetico mas fuerte para dermatitis atopica. | Essential skin barrier protein; its mutations are the strongest genetic risk factor for atopic dermatitis.' },
        { term: 'TEWL (Perdida transepidermica de agua)', definition: 'Perdida de agua a traves de la epidermis; aumentada en piel con eccema. | Water loss through epidermis; increased in eczema skin.' },
        { term: 'Hipersensibilidad tipo IV | Type IV hypersensitivity', definition: 'Reaccion inmune mediada por celulas T; mecanismo de la dermatitis de contacto alergica. | T-cell mediated immune reaction; mechanism of allergic contact dermatitis.' },
        { term: 'Prueba del parche | Patch test', definition: 'Prueba diagnostica donde se aplican alergenos en la espalda para identificar la causa de dermatitis de contacto alergica. | Diagnostic test where allergens are applied to the back to identify the cause of allergic contact dermatitis.' },
        { term: 'Malassezia', definition: 'Levadura lipofilica normal de la piel asociada con la dermatitis seborreica. | Lipophilic normal skin yeast associated with seborrheic dermatitis.', pronunciation: 'mal-ah-SEZ-ee-ah' },
        { term: 'Inhibidores de calcineurina | Calcineurin inhibitors', definition: 'Tacrolimus y pimecrolimus; antiinflamatorios topicos sin riesgo de atrofia cutanea. | Tacrolimus and pimecrolimus; topical anti-inflammatories without skin atrophy risk.' },
      ],
      analogies: [
        'La filagrina defectuosa es como ladrillos sin cemento: la barrera de la piel no puede retener agua ni bloquear irritantes. | Defective filaggrin is like bricks without mortar: the skin barrier cannot retain water or block irritants.',
        'La dermatitis de contacto alergica es como un detector de metales: despues de la primera exposicion, el sistema inmune "recuerda" y reacciona cada vez. | Allergic contact dermatitis is like a metal detector: after first exposure, the immune system "remembers" and reacts every time.',
      ],
      examples: [
        'Nino de 3 anos con eccema en pliegues de codos y detras de las rodillas, mejora con crema hidratante y corticosteroides topicos — dermatitis atopica. | 3-year-old with eczema in elbow creases and behind knees, improves with moisturizer and topical corticosteroids — atopic dermatitis.',
        'Enfermera con manos secas, agrietadas y rojas por lavarse constantemente — dermatitis de contacto irritativa. | Nurse with dry, cracked, red hands from constant washing — irritant contact dermatitis.',
        'Paciente con VIH con escamas grasosas extensas en cara y cuero cabelludo — dermatitis seborreica severa. | HIV patient with extensive greasy scales on face and scalp — severe seborrheic dermatitis.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La dermatitis atopica se caracteriza por disfuncion de barrera (filagrina, ceramidas, TEWL) e inflamacion Th2 (IL-4, IL-13, IL-31). El tratamiento escalonado incluye emolientes, corticosteroides topicos, inhibidores de calcineurina, crisaborole (PDE4i), ruxolitinib topico (JAKi), fototerapia y terapias sistemicas. Dupilumab (anti-IL-4R) revoluciono el tratamiento de DA moderada-severa. La dermatitis de contacto alergica se diagnostica con prueba del parche estandarizada. | Atopic dermatitis features barrier dysfunction (filaggrin, ceramides, TEWL) and Th2 inflammation (IL-4, IL-13, IL-31). Step-wise treatment includes emollients, topical corticosteroids, calcineurin inhibitors, crisaborole (PDE4i), topical ruxolitinib (JAKi), phototherapy, and systemic therapies. Dupilumab (anti-IL-4R) revolutionized moderate-severe AD treatment. Allergic contact dermatitis is diagnosed with standardized patch testing.',
      explanation: `## Inmunopatogenia detallada de DA | Detailed AD Immunopathogenesis

### Fase aguda | Acute phase
- Activacion de celulas dendriticas e ILC2 | Dendritic cell and ILC2 activation
- Produccion de TSLP, IL-25, IL-33 por queratinocitos | Keratinocyte production of TSLP, IL-25, IL-33
- Diferenciacion Th2: IL-4, IL-13, IL-31 | Th2 differentiation: IL-4, IL-13, IL-31
- IL-4/IL-13: inhiben proteinas de barrera (filagrina, loricrina, involucrina) | IL-4/IL-13: inhibit barrier proteins (filaggrin, loricrin, involucrin)
- IL-13: promueve fibrosis dermica | IL-13: promotes dermal fibrosis
- IL-31: principal mediador del prurito | IL-31: main pruritus mediator

### Fase cronica | Chronic phase
- Engrosamiento epidermico (acantosis, liquenificacion) | Epidermal thickening (acanthosis, lichenification)
- Remodelacion dermica | Dermal remodeling
- Componente Th22 (IL-22) y Th1 | Th22 (IL-22) and Th1 component
- S. aureus: coloniza 90% de piel atopica | S. aureus: colonizes 90% of atopic skin
  - Biofilm y superantigenos exacerban inflamacion | Biofilm and superantigens exacerbate inflammation

### Genetica | Genetics
- FLG (filagrina): mutaciones de perdida de funcion en 20-50% (europeos) | FLG (filaggrin): loss-of-function mutations in 20-50% (Europeans)
- IL4R, IL13, TSLP: polimorfismos de susceptibilidad | Susceptibility polymorphisms
- SPINK5: inhibidor de serin-proteasa | Serine protease inhibitor

## Escalera terapeutica | Treatment Ladder

### Paso 1: Todos los pacientes | Step 1: All patients
- Emolientes 2-3x/dia (pilar del tratamiento) | Emollients 2-3x/day (treatment foundation)
- Identificar y evitar desencadenantes | Identify and avoid triggers
- Educacion del paciente | Patient education

### Paso 2: Leve | Step 2: Mild
- Corticosteroides topicos de baja-media potencia | Low-medium potency topical corticosteroids
- Inhibidores de calcineurina (tacrolimus 0.03%/0.1%, pimecrolimus) | Calcineurin inhibitors
- Crisaborole 2% (inhibidor de PDE4 topico) | Crisaborole 2% (topical PDE4 inhibitor)

### Paso 3: Moderada | Step 3: Moderate
- Corticosteroides topicos de media-alta potencia | Medium-high potency topical corticosteroids
- Ruxolitinib 1.5% crema (inhibidor de JAK topico) | Ruxolitinib 1.5% cream (topical JAK inhibitor)
- Terapia wet wrap | Wet wrap therapy
- Fototerapia NB-UVB | NB-UVB phototherapy

### Paso 4: Moderada-severa | Step 4: Moderate-severe
**Biologicos | Biologics:**
- Dupilumab (anti-IL-4Ralpha): bloquea IL-4 e IL-13 | Blocks IL-4 and IL-13
  - Aprobado para adultos y ninos >=6 meses | Approved for adults and children >=6 months
  - Reduccion de EASI-75 en ~70% | EASI-75 reduction in ~70%
  - Efectos secundarios: conjuntivitis (mas comun), reacciones en sitio de inyeccion | Side effects: conjunctivitis (most common), injection site reactions
- Tralokinumab (anti-IL-13) | Tralokinumab (anti-IL-13)

**Inhibidores de JAK orales | Oral JAK inhibitors:**
- Abrocitinib (JAK1 selectivo) | Abrocitinib (JAK1 selective)
- Upadacitinib (JAK1 selectivo) | Upadacitinib (JAK1 selective)
- Baricitinib (JAK1/2) | Baricitinib (JAK1/2)
- Inicio de accion rapido (2 semanas) | Rapid onset (2 weeks)
- Monitoreo: CBC, lipidos, funcion hepatica, herpes zoster | Monitoring: CBC, lipids, liver function, herpes zoster

### Paso 5: Severa/refractaria | Step 5: Severe/refractory
- Combinacion biologico + JAKi topico | Biologic + topical JAKi combination
- Ciclosporina (puente a biologico) | Cyclosporine (bridge to biologic)
- Metotrexato | Methotrexate

## Dermatitis de contacto — Evaluacion avanzada | Contact Dermatitis — Advanced Evaluation

**Prueba del parche (patch test) | Patch test:**
- Serie estandar TRUE Test o serie expandida | Standard TRUE Test series or expanded series
- Lectura a 48 y 96 horas | Reading at 48 and 96 hours
- Interpretacion: -, ?+, +, ++, +++ | Interpretation: -, ?+, +, ++, +++
- Alergenos mas comunes: niquel, fragancias (mezcla de fragancias), formaldehido, parafenilendiamina, tiomersal | Most common allergens: nickel, fragrances, formaldehyde, paraphenylenediamine, thimerosal

## Dermatitis seborreica — Patogenia | Seborrheic Dermatitis — Pathogenesis

- Malassezia metaboliza trigliceridos → acidos grasos insaturados → inflamacion | Malassezia metabolizes triglycerides → unsaturated fatty acids → inflammation
- Activacion de complemento e IL-1, IL-6 | Complement and IL-1, IL-6 activation
- Tratamiento: antifungicos topicos (ketoconazol), corticosteroides de baja potencia, inhibidores de calcineurina | Treatment: topical antifungals (ketoconazole), low-potency corticosteroids, calcineurin inhibitors`,
      keyTerms: [
        { term: 'TSLP', definition: 'Linfopoyetina estromal timica; citocina de alarma producida por queratinocitos que inicia la cascada Th2. | Thymic stromal lymphopoietin; alarm cytokine produced by keratinocytes that initiates the Th2 cascade.' },
        { term: 'Dupilumab', definition: 'Anticuerpo monoclonal anti-IL-4Ralpha; bloquea IL-4 e IL-13; revoluciono el tratamiento de DA moderada-severa. | Anti-IL-4Ralpha monoclonal antibody; blocks IL-4 and IL-13; revolutionized moderate-severe AD treatment.', pronunciation: 'doo-PIL-oo-mab' },
        { term: 'EASI', definition: 'Eczema Area and Severity Index: escala estandar para medir severidad de DA. | Standard scale for measuring AD severity.' },
        { term: 'Inhibidores de JAK | JAK inhibitors', definition: 'Farmacos que bloquean las quinasas Janus; disponibles orales (abrocitinib, upadacitinib) y topicos (ruxolitinib). | Drugs blocking Janus kinases; available oral (abrocitinib, upadacitinib) and topical (ruxolitinib).' },
        { term: 'Liquenificacion | Lichenification', definition: 'Engrosamiento de la piel con marcas exageradas por rascado cronico. | Skin thickening with exaggerated markings from chronic scratching.' },
        { term: 'Crisaborole', definition: 'Inhibidor de PDE4 topico; antiinflamatorio no esteroideo para DA leve-moderada. | Topical PDE4 inhibitor; non-steroidal anti-inflammatory for mild-moderate AD.', pronunciation: 'kris-AB-oh-role' },
      ],
      clinicalNotes: 'La DA moderada-severa debe evaluarse para terapia sistemica si los topicos son insuficientes. Dupilumab es primera linea por su perfil de seguridad. Los JAK inhibidores orales ofrecen inicio rapido pero requieren monitoreo. Siempre preguntar sobre conjuntivitis con dupilumab. Ruxolitinib topico es una opcion para areas sensibles sin riesgo de atrofia. | Moderate-severe AD should be evaluated for systemic therapy if topicals are insufficient. Dupilumab is first-line due to its safety profile. Oral JAK inhibitors offer rapid onset but require monitoring. Always ask about conjunctivitis with dupilumab. Topical ruxolitinib is an option for sensitive areas without atrophy risk.',
    },

    4: {
      level: 4,
      summary:
        'La DA es una enfermedad heterogenea con endotipos definidos por perfil de citocinas (Th2-dominante, Th2/Th22, Th2/Th17 en asiaticos), mutaciones de barrera y edad de inicio. La seleccion terapeutica avanzada considera estas variaciones. Los JAK inhibidores actuan sobre multiples vias de senalizacion simultaneamente. La dermatitis de contacto sistemica y la fotodermatitis de contacto representan entidades clinicas avanzadas. | AD is a heterogeneous disease with endotypes defined by cytokine profile (Th2-dominant, Th2/Th22, Th2/Th17 in Asians), barrier mutations, and age of onset. Advanced therapeutic selection considers these variations. JAK inhibitors act on multiple signaling pathways simultaneously. Systemic contact dermatitis and photocontact dermatitis represent advanced clinical entities.',
      explanation: `## Endotipos de dermatitis atopica | Atopic Dermatitis Endotypes

### Variacion por edad | Age variation
| Fase | Perfil inmune | Phase | Immune profile |
|------|-------------|-------|----------------|
| Pediatrica | Th2 predominante, Th17/Th22 | Pediatric | Th2 predominant, Th17/Th22 |
| Adulto | Th2 + Th22 + Th1 | Adult | Th2 + Th22 + Th1 |
| Anciano | Th2 + Th1 prominente | Elderly | Th2 + prominent Th1 |

### Variacion etnica | Ethnic variation
- Europeos: Th2 + Th22, mutaciones FLG comunes | Europeans: Th2 + Th22, FLG mutations common
- Asiaticos: Th2 + Th17 prominente, niveles altos de IL-17 | Asians: Th2 + prominent Th17, high IL-17 levels
- Afrodescendientes: Th2 + Th22, mayor liquenificacion y folicular | African descent: Th2 + Th22, more lichenification and follicular

### Implicaciones terapeuticas | Therapeutic implications
- Th2 dominante → excelente respuesta a dupilumab | Th2 dominant → excellent dupilumab response
- Th17 prominente → considerar upadacitinib (amplio espectro JAK) | Prominent Th17 → consider upadacitinib (broad JAK spectrum)
- Componente Th1 → JAK inhibidores pueden ser mas efectivos | Th1 component → JAK inhibitors may be more effective

## Mecanismos de accion detallados | Detailed Mechanisms of Action

### Dupilumab (anti-IL-4Ralpha)
- Bloquea la subunidad alpha del receptor de IL-4 | Blocks IL-4 receptor alpha subunit
- Inhibe senalizacion de IL-4 e IL-13 simultaneamente | Inhibits IL-4 and IL-13 signaling simultaneously
- Reduce biomarcadores: IgE total, TARC/CCL17 | Reduces biomarkers: total IgE, TARC/CCL17
- No inmunosupresor general | Not broadly immunosuppressive
- Conjuntivitis: mecanismo propuesto — reduccion de celulas caliciformes conjuntivales | Conjunctivitis: proposed mechanism — reduced conjunctival goblet cells

### JAK inhibidores — Vias bloqueadas | JAK inhibitors — Blocked pathways
| Farmaco | JAK | Citocinas bloqueadas | Drug | JAK | Blocked cytokines |
|---------|-----|---------------------|------|-----|-------------------|
| Abrocitinib | JAK1 | IL-4, IL-13, IL-31, TSLP | Abrocitinib | JAK1 | IL-4, IL-13, IL-31, TSLP |
| Upadacitinib | JAK1 | IL-4, IL-13, IL-31, IFN-gamma | Upadacitinib | JAK1 | IL-4, IL-13, IL-31, IFN-gamma |
| Baricitinib | JAK1/2 | Espectro mas amplio | Baricitinib | JAK1/2 | Broader spectrum |

### Monitoreo de JAK inhibidores | JAK inhibitor monitoring
- Hemograma completo | Complete blood count
- Perfil lipidico | Lipid panel
- Funcion hepatica | Liver function
- Herpes zoster: considerar vacunacion previa | Herpes zoster: consider prior vaccination
- Eventos tromboembolicos: riesgo bajo pero presente | Thromboembolic events: low but present risk

## Dermatitis de contacto avanzada | Advanced Contact Dermatitis

### Dermatitis de contacto sistemica | Systemic contact dermatitis
- Ingesta oral de un alergeno previamente sensibilizado por via cutanea | Oral ingestion of allergen previously sensitized via skin
- Ejemplo: niquel en alimentos en paciente sensibilizado al niquel | Example: nickel in food in nickel-sensitized patient
- Puede causar eccema generalizado, "baboon syndrome" | Can cause generalized eczema, "baboon syndrome"

### Fotodermatitis de contacto | Photocontact dermatitis
- Requiere alergeno + luz UV para generar reaccion | Requires allergen + UV light to generate reaction
- Causas comunes: protector solar (oxibenzona), ketoprofeno topico, fragancias | Common causes: sunscreen (oxybenzone), topical ketoprofen, fragrances
- Diagnostico: fotopatch test | Diagnosis: photopatch test

### Dermatitis de contacto ocupacional | Occupational contact dermatitis
- Principal dermatosis ocupacional | Main occupational dermatosis
- Industrias de alto riesgo: salud, alimentos, manufactura, peluqueria | High-risk industries: healthcare, food, manufacturing, hairdressing
- Irrigantes mas comunes: detergentes, solventes, agua | Most common irritants: detergents, solvents, water
- Impacto significativo en calidad de vida y productividad | Significant impact on quality of life and productivity

## Dermatitis seborreica — Manejo avanzado | Seborrheic Dermatitis — Advanced Management

- Resistente a tratamiento convencional: considerar VIH | Treatment-resistant: consider HIV
- Itraconazol oral para casos severos | Oral itraconazole for severe cases
- Roflumilast topico (PDE4i): aprobado para DS | Topical roflumilast (PDE4i): approved for SD
- Diagnostico diferencial con psoriasis del cuero cabelludo ("sebopsoriasis") | Differential diagnosis with scalp psoriasis ("sebopsoriasis")`,
      keyTerms: [
        { term: 'Endotipo | Endotype', definition: 'Subtipo de enfermedad definido por mecanismo biologico subyacente (perfil de citocinas, genetica). | Disease subtype defined by underlying biological mechanism (cytokine profile, genetics).' },
        { term: 'TARC/CCL17', definition: 'Biomarcador serico de actividad de DA; correlaciona con severidad de la enfermedad. | Serum biomarker of AD activity; correlates with disease severity.' },
        { term: 'Dermatitis de contacto sistemica | Systemic contact dermatitis', definition: 'Reaccion generalizada al ingerir un alergeno de contacto previamente sensibilizado. | Generalized reaction from ingesting a previously sensitized contact allergen.' },
        { term: 'Fotodermatitis de contacto | Photocontact dermatitis', definition: 'Dermatitis que requiere alergeno + luz UV para producir la reaccion. | Dermatitis requiring allergen + UV light to produce the reaction.' },
        { term: 'IL-4Ralpha', definition: 'Subunidad del receptor compartida por IL-4 e IL-13; blanco de dupilumab. | Receptor subunit shared by IL-4 and IL-13; target of dupilumab.' },
        { term: 'Abrocitinib', definition: 'Inhibidor selectivo de JAK1 oral para DA moderada-severa; inicio de accion en ~2 semanas. | Selective oral JAK1 inhibitor for moderate-severe AD; onset in ~2 weeks.', pronunciation: 'ab-ROH-sit-in-ib' },
      ],
      clinicalNotes: 'Los endotipos de DA estan guiando la medicina de precision. La DA del anciano tiene un componente Th1 prominente y puede beneficiarse mas de JAK inhibidores. La dermatitis seborreica resistente al tratamiento debe generar sospecha de VIH. Dupilumab no requiere monitoreo de laboratorio de rutina, ventaja sobre JAK inhibidores. La combinacion de dupilumab con JAKi topico (ruxolitinib) es una estrategia emergente para control optimo. | AD endotypes are guiding precision medicine. Elderly AD has a prominent Th1 component and may benefit more from JAK inhibitors. Treatment-resistant seborrheic dermatitis should raise suspicion for HIV. Dupilumab requires no routine lab monitoring, an advantage over JAK inhibitors. Combining dupilumab with topical JAKi (ruxolitinib) is an emerging strategy for optimal control.',
    },

    5: {
      level: 5,
      summary:
        'La investigacion en DA se centra en nuevos blancos terapeuticos (IL-31, IL-33, TSLP, OX40, IL-22), terapias de restauracion de barrera, microbioma cutaneo y medicina de precision basada en endotipos. La dermatopatologia de la DA muestra espongiosis, exocitosis e infiltrado perivascular. Nemolizumab (anti-IL-31R) aborda directamente el prurito. Los ensayos de trasplante de microbioma (Roseomonas) representan un paradigma innovador. | AD research focuses on new therapeutic targets (IL-31, IL-33, TSLP, OX40, IL-22), barrier restoration therapies, skin microbiome, and endotype-based precision medicine. AD dermatopathology shows spongiosis, exocytosis, and perivascular infiltrate. Nemolizumab (anti-IL-31R) directly addresses pruritus. Microbiome transplant trials (Roseomonas) represent an innovative paradigm.',
      explanation: `## Dermatopatologia de la DA | AD Dermatopathology

### Fase aguda | Acute phase
- Espongiosis (edema intercelular epidermico) | Spongiosis (intercellular epidermal edema)
- Exocitosis de linfocitos | Lymphocyte exocytosis
- Infiltrado perivascular de linfocitos y eosinofilos en dermis | Perivascular lymphocyte and eosinophil infiltrate in dermis
- Paraqueratosis focal | Focal parakeratosis

### Fase cronica | Chronic phase
- Acantosis marcada (hiperplasia epidermica) | Marked acanthosis (epidermal hyperplasia)
- Hiperqueratosis compacta | Compact hyperkeratosis
- Fibrosis dermica | Dermal fibrosis
- Engrosamiento de fibras nerviosas (correlaciona con prurito) | Nerve fiber thickening (correlates with pruritus)

## Terapias emergentes y en investigacion | Emerging and Investigational Therapies

### Nuevos biologicos | New biologics

**Nemolizumab (anti-IL-31RA) | Nemolizumab (anti-IL-31RA):**
- Bloquea el receptor de IL-31 (la citocina del prurito) | Blocks IL-31 receptor (the itch cytokine)
- Reduccion dramatica del prurito desde la semana 1 | Dramatic pruritus reduction from week 1
- Aprobado en Japon; aprobacion FDA 2024 | Approved in Japan; FDA approval 2024
- Aborda directamente el componente neuro-inmune del prurito | Directly addresses neuro-immune pruritus component

**Tezepelumab (anti-TSLP) | Tezepelumab (anti-TSLP):**
- Bloquea la citocina de alarma TSLP upstream | Blocks upstream alarm cytokine TSLP
- Actua antes de la activacion Th2 | Acts before Th2 activation
- En ensayos para DA | In AD trials

**Lebrikizumab (anti-IL-13) | Lebrikizumab (anti-IL-13):**
- Similar a tralokinumab pero diferente epitopo | Similar to tralokinumab but different epitope
- Dosificacion cada 4 semanas (conveniente) | Every 4-week dosing (convenient)

**Amlitelimab (anti-OX40L) | Amlitelimab (anti-OX40L):**
- Bloquea la co-estimulacion de celulas T | Blocks T-cell co-stimulation
- No inmunosupresor; potencial para modificacion de enfermedad | Not immunosuppressive; potential for disease modification

### Microbioma y barrera | Microbiome and Barrier

**Terapia con microbioma | Microbiome therapy:**
- Disbiosis en DA: predominio de S. aureus, reduccion de diversidad | Dysbiosis in AD: S. aureus predominance, reduced diversity
- Roseomonas mucosa (bacteria comensal): aplicacion topica en ensayos NIAID | Roseomonas mucosa (commensal): topical application in NIAID trials
- Resultados prometedores: mejoria clinica y reduccion de S. aureus | Promising results: clinical improvement and S. aureus reduction
- Trasplante de microbioma cutaneo: paradigma innovador | Skin microbiome transplant: innovative paradigm

**Restauracion de barrera | Barrier restoration:**
- Ceramidas topicas en formulaciones lipidicas | Topical ceramides in lipid formulations
- Palmitoyletanolamida (PEA): endocannabinoide antiinflamatorio | Palmitoylethanolamide (PEA): anti-inflammatory endocannabinoid
- Tapinarof (agonista AhR): en desarrollo para DA | Tapinarof (AhR agonist): in development for AD

## Eje neuro-inmune del prurito | Neuro-Immune Itch Axis

### Via del prurito en DA | Pruritus pathway in AD
- IL-31 → receptor IL-31RA en fibras C sensoriales | IL-31 → IL-31RA receptor on sensory C fibers
- TSLP → fibras sensoriales directamente | TSLP → sensory fibers directly
- IL-4/IL-13 → sensibilizacion de neuronas pruriceptoras | IL-4/IL-13 → pruriceptor neuron sensitization
- Histamina: papel menor (explica pobre respuesta a antihistaminicos) | Histamine: minor role (explains poor antihistamine response)
- Blancos terapeuticos emergentes: TRPV1, TRPA1, NK1R | Emerging therapeutic targets: TRPV1, TRPA1, NK1R

### Ciclo prurito-rascado | Itch-scratch cycle
- Rascado → dano mecanico → liberacion de alarminas (TSLP, IL-33) → amplificacion inflamatoria | Scratching → mechanical damage → alarmin release (TSLP, IL-33) → inflammatory amplification
- Intervencion a nivel neural: nemolizumab, serlopitant (anti-NK1R) | Neural intervention: nemolizumab, serlopitant (anti-NK1R)

## Medicina de precision en DA | Precision Medicine in AD

### Biomarcadores emergentes | Emerging biomarkers
| Biomarcador | Utilidad | Biomarker | Utility |
|-------------|---------|-----------|---------|
| TARC/CCL17 | Actividad de enfermedad | TARC/CCL17 | Disease activity |
| Periostin | Inflamacion Th2 | Periostin | Th2 inflammation |
| IgE total y especificas | Sensibilizacion | Total and specific IgE | Sensitization |
| TEWL | Funcion de barrera | TEWL | Barrier function |
| IL-22 serica | Remodelacion cronica | Serum IL-22 | Chronic remodeling |

### Seleccion terapeutica basada en endotipo | Endotype-based therapeutic selection
- Th2 alto, IgE elevada → dupilumab | High Th2, elevated IgE → dupilumab
- Prurito predominante → nemolizumab | Predominant pruritus → nemolizumab
- Componente Th17/Th1 → JAK inhibidores (amplio espectro) | Th17/Th1 component → JAK inhibitors (broad spectrum)
- Inicio rapido necesario → JAK inhibidores orales | Rapid onset needed → oral JAK inhibitors

## Dermatitis de contacto — Perspectiva avanzada | Contact Dermatitis — Advanced Perspective

### Dermatitis de contacto proteica | Protein contact dermatitis
- Reaccion a proteinas (alimentos, latex) en contacto con piel | Reaction to proteins (food, latex) in skin contact
- Mecanismo: IgE mediada (tipo I) + tipo IV | Mechanism: IgE-mediated (type I) + type IV
- Comun en manipuladores de alimentos | Common in food handlers
- Diagnostico: prick test + patch test | Diagnosis: prick test + patch test

### Nuevos alergenos emergentes | New emerging allergens
- Methylisothiazolinone (MI): conservador en cosmeticos y productos de limpieza | Preservative in cosmetics and cleaning products
- Alergeno de contacto del ano en multiples paises | Contact allergen of the year in multiple countries
- Galactosa-alpha-1,3-galactosa (alpha-gal): alergia a carne por picadura de garrapata | Alpha-gal: meat allergy from tick bite`,
      keyTerms: [
        { term: 'Nemolizumab', definition: 'Anticuerpo anti-IL-31RA que bloquea directamente la via del prurito; aprobado en Japon, FDA 2024. | Anti-IL-31RA antibody directly blocking the pruritus pathway; approved in Japan, FDA 2024.', pronunciation: 'neh-MOL-iz-oo-mab' },
        { term: 'TSLP', definition: 'Linfopoyetina estromal timica; citocina de alarma epitelial que inicia la cascada Th2 y activa fibras sensoriales directamente. | Thymic stromal lymphopoietin; epithelial alarm cytokine initiating Th2 cascade and directly activating sensory fibers.' },
        { term: 'Espongiosis | Spongiosis', definition: 'Edema intercelular en la epidermis; hallazgo histopatologico clasico de la fase aguda de DA. | Intercellular edema in the epidermis; classic histopathologic finding of acute AD.' },
        { term: 'Roseomonas mucosa', definition: 'Bacteria comensal cutanea estudiada como terapia de trasplante de microbioma para DA. | Skin commensal bacterium studied as microbiome transplant therapy for AD.', pronunciation: 'roh-ZEE-oh-moh-nas moo-KOH-sah' },
        { term: 'Amlitelimab', definition: 'Anticuerpo anti-OX40L que bloquea co-estimulacion de celulas T; potencial para modificacion de enfermedad en DA. | Anti-OX40L antibody blocking T-cell co-stimulation; potential for disease modification in AD.', pronunciation: 'am-LIT-el-im-ab' },
        { term: 'Eje neuro-inmune | Neuro-immune axis', definition: 'Interaccion entre el sistema nervioso y el sistema inmune que impulsa el prurito en DA. | Interaction between nervous and immune systems driving pruritus in AD.' },
      ],
      clinicalNotes: 'Nemolizumab aborda el prurito refractario directamente a nivel del receptor IL-31. La histamina juega un papel menor en el prurito de DA, lo que explica la pobre respuesta a antihistaminicos. La terapia con microbioma cutaneo (Roseomonas) representa un paradigma completamente nuevo. Los biomarcadores (TARC, periostin, TEWL) estan guiando la seleccion terapeutica personalizada. Amlitelimab (anti-OX40L) tiene potencial para modificacion de enfermedad (no solo supresion). Los JAK inhibidores requieren monitoreo cuidadoso por riesgo de herpes zoster y eventos tromboembolicos. | Nemolizumab addresses refractory pruritus directly at IL-31 receptor level. Histamine plays a minor role in AD pruritus, explaining poor antihistamine response. Skin microbiome therapy (Roseomonas) represents an entirely new paradigm. Biomarkers (TARC, periostin, TEWL) are guiding personalized therapeutic selection. Amlitelimab (anti-OX40L) has potential for disease modification (not just suppression). JAK inhibitors require careful monitoring for herpes zoster and thromboembolic events.',
    },
  },

  media: [],

  citations: [
    {
      id: 'aad-ad-guidelines',
      type: 'guideline',
      title: 'Guidelines of Care for the Management of Atopic Dermatitis',
      authors: ['Sidbury, R.', 'et al.'],
      source: 'Journal of the American Academy of Dermatology',
    },
    {
      id: 'fitzpatrick-eczema',
      type: 'textbook',
      title: 'Fitzpatrick\'s Dermatology, 9th Edition — Eczematous Dermatitis',
      authors: ['Kang, S.', 'Amagai, M.'],
      source: 'McGraw-Hill Education',
    },
    {
      id: 'dupilumab-nejm',
      type: 'article',
      title: 'Two Phase 3 Trials of Dupilumab versus Placebo in Atopic Dermatitis',
      authors: ['Simpson, E.L.', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'arenas-dermatitis',
      type: 'textbook',
      title: 'Dermatologia: Atlas, diagnostico y tratamiento, 7a edicion — Dermatitis',
      authors: ['Arenas, R.'],
      source: 'McGraw-Hill Interamericana',
    },
  ],

  crossReferences: [
    { targetId: 'derm-psoriasis', targetType: 'condition', relationship: 'related', label: 'Psoriasis' },
    { targetId: 'derm-infecciones-cutaneas-skin-infections', targetType: 'condition', relationship: 'see-also', label: 'Infecciones cutaneas | Skin infections' },
    { targetId: 'dermatology-skin-anatomy', targetType: 'structure', relationship: 'parent', label: 'Anatomia de la piel | Skin anatomy' },
    { targetId: 'derm-cicatrizacion-heridas-wound-healing', targetType: 'process', relationship: 'related', label: 'Cicatrizacion de heridas | Wound healing' },
  ],

  tags: {
    systems: ['integumentary', 'immune'],
    topics: ['dermatology', 'immunology', 'allergy'],
    keywords: [
      'dermatitis atopica', 'atopic dermatitis', 'eccema', 'eczema',
      'dermatitis de contacto', 'contact dermatitis',
      'dermatitis seborreica', 'seborrheic dermatitis',
      'dupilumab', 'JAK inhibidores', 'filagrina', 'filaggrin',
      'barrera cutanea', 'skin barrier', 'prurito', 'pruritus',
    ],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};

export default dermatitisEczema;
