/**
 * Dermatitis Atópica / Eczema - Contenido Educativo Bilingüe (Español / English)
 *
 * Enfermedad inflamatoria crónica de la piel caracterizada por piel seca y pruriginosa.
 * Chronic inflammatory skin disease characterized by dry, itchy skin.
 *
 * Covers: triggers, management, skincare, biologics, JAK inhibitors
 */

import { EducationalContent } from '../../types';

export const dermatitisAtopicaEczemaContent: EducationalContent = {
  id: 'condition-dermatitis-atopica-eczema',
  type: 'condition',
  name: 'Atopic Dermatitis / Eczema',
  nameEs: 'Dermatitis Atópica / Eccema',
  alternateNames: ['Eczema Atópico', 'Atopic Eczema', 'AD', 'DA', 'Eccema', 'Neurodermatitis'],

  levels: {
    1: {
      level: 1,
      summary: 'La dermatitis atópica (eccema) es una enfermedad de la piel que causa sequedad, enrojecimiento y mucha picazón. Es muy común en bebés y niños, pero también puede afectar a adultos. No es contagiosa. | Atopic dermatitis (eczema) is a skin condition that causes dryness, redness, and intense itching. It is very common in babies and children, but it can also affect adults. It is not contagious.',
      explanation: `## Explicación

### ¿Qué es la dermatitis atópica (eccema)?

La dermatitis atópica es una enfermedad de la piel que causa sequedad, picazón intensa y enrojecimiento. Es muy común en los bebés y niños, pero los adultos también pueden tenerla. No se puede contagiar de una persona a otra.

### ¿Cómo se ve y se siente?

- Piel seca, sensible y con picazón constante
- Piel roja e inflamada
- Sarpullido con picazón que puede aparecer y desaparecer
- Piel oscurecida, engrosada o escamosa (por rascarse mucho)
- Pequeñas ampollas que pueden liberar líquido al rascarse

### ¿Dónde aparece?

**En bebés:**
- Cara y mejillas
- Cuero cabelludo
- Parte frontal de brazos y piernas

**En niños mayores y adultos:**
- Interior de los codos (pliegues)
- Detrás de las rodillas
- Manos y pies
- Cuello y cara
- Párpados

### ¿Por qué ocurre?

- Genética (se hereda en familias)
- La piel tiene una "barrera" debilitada que no protege bien
- El sistema inmunitario reacciona de forma exagerada
- Factores ambientales (clima, contaminación)
- Alergias (alimentos, polvo, mascotas)
- Piel seca por falta de hidratación
- Estrés emocional

### ¿Cómo se cuida?

- Hidratar la piel TODOS los días con cremas espesas sin fragancia
- Evitar jabones fuertes y perfumes
- Usar productos suaves y sin fragancia
- ¡NO rascarse! (aunque sea difícil)
- Baños cortos con agua tibia (no caliente)
- Aplicar crema hidratante inmediatamente después del baño
- Consultar al médico para tratamiento adecuado

---
## Explanation

### What is atopic dermatitis (eczema)?

Atopic dermatitis is a skin condition that causes dryness, intense itching, and redness. It is very common in babies and children, but adults can have it too. It cannot be spread from person to person.

### What does it look and feel like?

- Dry, sensitive skin with constant itching
- Red and inflamed skin
- Itchy rash that can come and go
- Darkened, thickened, or scaly skin (from excessive scratching)
- Small blisters that may weep fluid when scratched

### Where does it appear?

**In babies:**
- Face and cheeks
- Scalp
- Front of arms and legs

**In older children and adults:**
- Inside of elbows (creases)
- Behind the knees
- Hands and feet
- Neck and face
- Eyelids

### Why does it happen?

- Genetics (runs in families)
- The skin has a weakened "barrier" that does not protect well
- The immune system overreacts
- Environmental factors (climate, pollution)
- Allergies (food, dust, pets)
- Dry skin from lack of hydration
- Emotional stress

### How is it managed?

- Moisturize the skin EVERY day with thick, fragrance-free creams
- Avoid harsh soaps and perfumes
- Use gentle, fragrance-free products
- Do NOT scratch! (even though it is difficult)
- Short baths with lukewarm (not hot) water
- Apply moisturizer immediately after bathing
- See a doctor for proper treatment`,
      keyTerms: [
        { term: 'Barrera cutánea / Skin barrier', definition: 'La capa exterior de la piel que protege al cuerpo de irritantes y gérmenes; en el eccema está debilitada. | The outer layer of skin that protects the body from irritants and germs; in eczema it is weakened.' },
        { term: 'Inflamación / Inflammation', definition: 'Enrojecimiento, hinchazón e irritación de la piel como respuesta del sistema inmunitario. | Redness, swelling, and irritation of the skin as an immune system response.' },
        { term: 'Desencadenantes / Triggers', definition: 'Cosas que provocan o empeoran los brotes de eccema (jabones, estrés, alérgenos). | Things that cause or worsen eczema flares (soaps, stress, allergens).' },
        { term: 'Prurito / Pruritus', definition: 'Picazón intensa — el síntoma principal del eccema. | Intense itching — the main symptom of eczema.' },
        { term: 'Hidratante / Moisturizer', definition: 'Crema o ungüento que ayuda a retener la humedad en la piel. | Cream or ointment that helps retain moisture in the skin.' },
      ],
      analogies: [
        'La barrera cutánea es como una pared de ladrillos que protege una casa — en el eccema, la pared tiene grietas y las cosas entran y la humedad se escapa. | The skin barrier is like a brick wall protecting a house — in eczema, the wall has cracks, things get in, and moisture escapes.',
        'Hidratar después del baño es como sellar un recipiente para que el agua no se evapore — "remojar y sellar". | Moisturizing after bathing is like sealing a container so water does not evaporate — "soak and seal."',
        'El ciclo de picazón-rascado es como un círculo vicioso: rascarse empeora la inflamación, que causa más picazón. | The itch-scratch cycle is like a vicious circle: scratching worsens inflammation, which causes more itching.',
      ],
      examples: [
        'Bebé con parches secos y rojos en las mejillas que llora por la picazón. | Baby with dry, red patches on cheeks who cries from itching.',
        'Niño que se rasca detrás de las rodillas hasta sangrar durante la noche. | Child who scratches behind knees until bleeding during the night.',
        'Adulto con eccema crónico en las manos por lavarse frecuentemente. | Adult with chronic hand eczema from frequent hand washing.',
      ],
      patientCounselingPoints: [
        'El eccema NO es contagioso — no se puede transmitir a otros. | Eczema is NOT contagious — it cannot be spread to others.',
        'Hidratar la piel es el paso MÁS importante del tratamiento diario. | Moisturizing the skin is the MOST important step in daily treatment.',
        'Use cremas espesas (en tarro) en vez de lociones delgadas — las cremas retienen mejor la humedad. | Use thick creams (in a jar) instead of thin lotions — creams retain moisture better.',
        'Mantenga las uñas cortas para reducir el daño al rascarse, especialmente en niños. | Keep fingernails short to reduce scratching damage, especially in children.',
      ],
    },

    2: {
      level: 2,
      summary: 'La dermatitis atópica es una enfermedad inflamatoria crónica recurrente de la piel. El tratamiento se centra en la reparación de la barrera cutánea, el control de la inflamación y la evitación de desencadenantes. Se asocia con la "marcha atópica" (eccema → rinitis alérgica → asma). | Atopic dermatitis is a chronic relapsing inflammatory skin disease. Treatment focuses on barrier repair, inflammation control, and trigger avoidance. It is associated with the "atopic march" (eczema → allergic rhinitis → asthma).',
      explanation: `## Explicación

### La marcha atópica

El eccema es frecuentemente la primera manifestación de la enfermedad atópica:
1. Dermatitis atópica (generalmente inicia en la infancia)
2. Alergia alimentaria (primeros años)
3. Rinitis alérgica (fiebre del heno)
4. Asma bronquial

**Condiciones asociadas:**
- Alergias alimentarias (huevo, leche, maní/cacahuate, soya, trigo)
- Rinitis alérgica
- Asma
- Conjuntivitis alérgica
- Esofagitis eosinofílica

### Diagnóstico clínico

**Criterios mayores (de Hanifin y Rajka):**
- Prurito (picazón) — criterio indispensable
- Morfología y distribución típica para la edad
- Curso crónico o recurrente
- Historia personal o familiar de atopia

**Criterios menores (seleccionados):**
- Inicio a edad temprana
- Xerosis (piel seca)
- Reactividad a IgE elevada
- Dermatitis de manos y pies
- Pliegues infraorbitarios (líneas de Dennie-Morgan)
- Queratosis pilaris (piel de gallina)
- Palidez facial

### Principios de tratamiento

**1. Reparación de la barrera cutánea:**
- Baño diario con limpiador suave (sin jabón)
- Aplicación inmediata de hidratante después del baño (técnica "remojar y sellar")
- Preferir cremas y ungüentos espesos (con ceramidas si es posible)
- Evitar agua caliente — usar agua tibia

**2. Control de la inflamación:**
- Corticosteroides tópicos (primera línea para brotes)
- Inhibidores tópicos de calcineurina (TCIs): tacrolimus, pimecrolimus
- Crisaborole (inhibidor de PDE4 tópico)
- Ruxolitinib (inhibidor de JAK tópico)

**3. Evitación de desencadenantes:**
- Identificar y evitar alérgenos específicos
- Evitar irritantes (fragancias, jabones fuertes, detergentes)
- Controlar factores ambientales (humedad, temperatura)
- Usar ropa de algodón suave

**4. Control del prurito (picazón):**
- Antihistamínicos (ayudan con el sueño, no directamente con el prurito atópico)
- Compresas frías
- Terapia de vendajes húmedos (wet wraps)
- Evitar factores que empeoran la picazón (calor, sudoración, estrés)

---
## Explanation

### The Atopic March

Eczema is often the first manifestation of atopic disease:
1. Atopic dermatitis (usually starts in infancy)
2. Food allergy (early years)
3. Allergic rhinitis (hay fever)
4. Bronchial asthma

**Associated conditions:**
- Food allergies (egg, milk, peanut, soy, wheat)
- Allergic rhinitis
- Asthma
- Allergic conjunctivitis
- Eosinophilic esophagitis

### Clinical Diagnosis

**Major criteria (Hanifin and Rajka):**
- Pruritus (itching) — essential criterion
- Typical morphology and distribution for age
- Chronic or relapsing course
- Personal or family history of atopy

**Minor criteria (selected):**
- Early age of onset
- Xerosis (dry skin)
- Elevated IgE reactivity
- Hand and foot dermatitis
- Infraorbital folds (Dennie-Morgan lines)
- Keratosis pilaris (rough, bumpy skin)
- Facial pallor

### Treatment Principles

**1. Skin barrier repair:**
- Daily bathing with gentle cleanser (soap-free)
- Immediate moisturizer application after bathing ("soak and seal" technique)
- Prefer thick creams and ointments (with ceramides if possible)
- Avoid hot water — use lukewarm

**2. Inflammation control:**
- Topical corticosteroids (first-line for flares)
- Topical calcineurin inhibitors (TCIs): tacrolimus, pimecrolimus
- Crisaborole (topical PDE4 inhibitor)
- Ruxolitinib (topical JAK inhibitor)

**3. Trigger avoidance:**
- Identify and avoid specific allergens
- Avoid irritants (fragrances, harsh soaps, detergents)
- Control environmental factors (humidity, temperature)
- Wear soft cotton clothing

**4. Itch control:**
- Antihistamines (help with sleep, not directly with atopic itch)
- Cool compresses
- Wet wrap therapy
- Avoid factors that worsen itching (heat, sweating, stress)`,
      keyTerms: [
        { term: 'Marcha atópica / Atopic march', definition: 'Progresión de eccema a alergias alimentarias, rinitis alérgica y asma a lo largo de la infancia. | Progression from eczema to food allergies, allergic rhinitis, and asthma throughout childhood.' },
        { term: 'Xerosis', definition: 'Piel anormalmente seca, característica fundamental de la dermatitis atópica. | Abnormally dry skin, a fundamental feature of atopic dermatitis.' },
        { term: 'TCIs / Inhibidores de calcineurina tópicos', definition: 'Cremas antiinflamatorias no esteroideas (tacrolimus, pimecrolimus) para áreas sensibles. | Non-steroidal anti-inflammatory creams (tacrolimus, pimecrolimus) for sensitive areas.' },
        { term: 'Crisaborole', definition: 'Inhibidor tópico de PDE4 aprobado para dermatitis atópica leve a moderada. | Topical PDE4 inhibitor approved for mild-to-moderate atopic dermatitis.' },
        { term: 'Ceramidas / Ceramides', definition: 'Lípidos naturales de la piel que forman la barrera protectora; están reducidos en el eccema. | Natural skin lipids that form the protective barrier; reduced in eczema.' },
      ],
      analogies: [
        'La marcha atópica es como una procesión — una condición lleva a la siguiente a lo largo del tiempo. | The atopic march is like a procession — one condition leads to the next over time.',
        'La técnica "remojar y sellar" es como atrapar el agua dentro de la piel con el hidratante como tapa. | The "soak and seal" technique is like trapping water inside the skin with moisturizer as a lid.',
        'Las ceramidas son como el cemento entre los ladrillos de la piel — sin ellas, la barrera se desmorona. | Ceramides are like the cement between the bricks of the skin — without them, the barrier crumbles.',
      ],
      examples: [
        'Niño con eccema que después desarrolla asma a los 5 años (marcha atópica). | Child with eczema who later develops asthma at age 5 (atopic march).',
        'Paciente al que se le prescribe hidrocortisona para brotes agudos en los pliegues de los codos. | Patient prescribed hydrocortisone for acute flares in the elbow creases.',
        'Padre enseñado a aplicar hidratante inmediatamente después del baño para "sellar" la humedad. | Parent taught to apply moisturizer immediately after bath to "seal" in moisture.',
      ],
      patientCounselingPoints: [
        'Los baños de lejía diluida (media taza en tina llena) pueden reducir las bacterias en la piel y prevenir infecciones. | Dilute bleach baths (half cup in full tub) can reduce bacteria on skin and prevent infections.',
        'Los corticosteroides tópicos son seguros cuando se usan correctamente — aplicar en capas delgadas solo en áreas afectadas. | Topical corticosteroids are safe when used correctly — apply thin layers only to affected areas.',
        'Si el eccema no mejora con el tratamiento, consulte al médico — puede necesitar un cambio de terapia. | If eczema does not improve with treatment, see your doctor — a change in therapy may be needed.',
      ],
    },

    3: {
      level: 3,
      summary: 'El manejo de la dermatitis atópica requiere un enfoque escalonado basado en la gravedad. La enfermedad moderada a grave puede requerir terapias sistémicas incluyendo dupilumab, tralokinumab o inhibidores de JAK. | Atopic dermatitis management requires a stepwise approach based on severity. Moderate-to-severe disease may require systemic therapies including dupilumab, tralokinumab, or JAK inhibitors.',
      explanation: `## Explicación

### Tratamiento escalonado por gravedad

**DA leve:**
- Hidratante diario (aplicar generosamente, múltiples veces al día)
- Corticosteroides tópicos de baja potencia según necesidad
- Evitar desencadenantes conocidos
- Baño con limpiador suave

**DA moderada:**
- Corticosteroides tópicos de potencia media
- TCIs (tacrolimus 0.03%/0.1%, pimecrolimus 1%) para áreas sensibles (cara, pliegues)
- Crisaborole 2% ungüento
- Considerar baños de lejía diluida (hipoclorito de sodio)
- Tratar infecciones secundarias si están presentes
- Terapia de vendajes húmedos para brotes agudos

**DA grave/refractaria:**
- Terapias sistémicas:
  - Dupilumab (anti-IL-4Rα) — primera línea biológica
  - Tralokinumab (anti-IL-13)
  - Abrocitinib (inhibidor de JAK1 oral)
  - Upadacitinib (inhibidor de JAK1 oral)
  - Metotrexato (en casos seleccionados)
  - Ciclosporina (uso a corto plazo, máx. 1-2 años)
  - Micofenolato mofetilo
  - Fototerapia (UVB, UVA1)

### Guía de potencia de corticosteroides tópicos

**Baja potencia (cara, genitales, bebés):**
- Hidrocortisona 1-2.5%
- Desonida 0.05%
- Fluocinolona 0.01%

**Potencia media (cuerpo, niños):**
- Triamcinolona 0.1%
- Mometasona 0.1%
- Fluocinolona 0.025%
- Valerato de betametasona 0.1%

**Alta potencia (lesiones gruesas, adultos, corto plazo):**
- Clobetasol 0.05%
- Halobetasol 0.05%
- Dipropionato de betametasona 0.05%

**Regla práctica de dosificación:**
- Unidad de la punta del dedo (FTU): 1 FTU = 0.5 g (cubre 2 palmas)
- Aplicar en capa delgada 1-2 veces al día durante brotes
- Mantenimiento: aplicar 2 días por semana ("terapia de fin de semana")

### Complicaciones infecciosas

**Infecciones bacterianas:**
- Colonización por Staphylococcus aureus (90% de pacientes con DA)
- Impetiginización (costras melicéricas)
- Tratamiento: antibióticos tópicos u orales según extensión

**Eczema herpético (emergencia):**
- Infección diseminada por virus del herpes simple (VHS)
- Vesículas agrupadas, dolorosas, con erosiones en sacabocados
- Fiebre, malestar general
- Requiere aciclovir intravenoso urgente
- Puede ser potencialmente mortal

**Molusco contagioso:**
- Más extenso y persistente en pacientes con DA
- Eczema molluscatum

---
## Explanation

### Stepwise Treatment by Severity

**Mild AD:**
- Daily moisturizer (apply generously, multiple times daily)
- Low-potency topical corticosteroids as needed
- Avoid known triggers
- Bathing with gentle cleanser

**Moderate AD:**
- Medium-potency topical corticosteroids
- TCIs (tacrolimus 0.03%/0.1%, pimecrolimus 1%) for sensitive areas (face, folds)
- Crisaborole 2% ointment
- Consider dilute bleach baths (sodium hypochlorite)
- Treat secondary infections if present
- Wet wrap therapy for acute flares

**Severe/Refractory AD:**
- Systemic therapies:
  - Dupilumab (anti-IL-4Rα) — first-line biologic
  - Tralokinumab (anti-IL-13)
  - Abrocitinib (oral JAK1 inhibitor)
  - Upadacitinib (oral JAK1 inhibitor)
  - Methotrexate (in selected cases)
  - Cyclosporine (short-term use, max 1-2 years)
  - Mycophenolate mofetil
  - Phototherapy (UVB, UVA1)

### Topical Corticosteroid Potency Guide

**Low potency (face, genitals, infants):**
- Hydrocortisone 1-2.5%
- Desonide 0.05%
- Fluocinolone 0.01%

**Medium potency (body, children):**
- Triamcinolone 0.1%
- Mometasone 0.1%
- Fluocinolone 0.025%
- Betamethasone valerate 0.1%

**High potency (thick lesions, adults, short-term):**
- Clobetasol 0.05%
- Halobetasol 0.05%
- Betamethasone dipropionate 0.05%

**Practical dosing rule:**
- Fingertip unit (FTU): 1 FTU = 0.5 g (covers 2 palms)
- Apply thin layer 1-2 times daily during flares
- Maintenance: apply 2 days per week ("weekend therapy")

### Infectious Complications

**Bacterial infections:**
- Staphylococcus aureus colonization (90% of AD patients)
- Impetiginization (honey-crusted lesions)
- Treatment: topical or oral antibiotics depending on extent

**Eczema herpeticum (emergency):**
- Disseminated herpes simplex virus (HSV) infection
- Grouped vesicles, painful, with punched-out erosions
- Fever, malaise
- Requires urgent IV acyclovir
- Can be life-threatening

**Molluscum contagiosum:**
- More extensive and persistent in AD patients
- Eczema molluscatum`,
      keyTerms: [
        { term: 'Dupilumab', definition: 'Biológico que bloquea el receptor alfa de IL-4, inhibiendo las vías de IL-4 e IL-13 — primera línea para DA grave. | Biologic that blocks the IL-4 receptor alpha, inhibiting IL-4 and IL-13 pathways — first-line for severe AD.' },
        { term: 'Eczema herpético / Eczema herpeticum', definition: 'Infección diseminada por VHS en pacientes con eccema — emergencia médica que requiere antiviral IV. | Disseminated HSV infection in eczema patients — medical emergency requiring IV antiviral.' },
        { term: 'Fototerapia / Phototherapy', definition: 'Tratamiento con luz ultravioleta para reducir la inflamación cutánea en DA moderada. | Treatment with ultraviolet light to reduce skin inflammation in moderate AD.' },
        { term: 'Atrofia cutánea / Skin atrophy', definition: 'Adelgazamiento de la piel por uso prolongado o inapropiado de corticosteroides tópicos de alta potencia. | Thinning of skin from prolonged or inappropriate use of high-potency topical corticosteroids.' },
        { term: 'Vendajes húmedos / Wet wraps', definition: 'Técnica donde se aplica hidratante o esteroide diluido bajo vendajes húmedos para brotes graves. | Technique where moisturizer or dilute steroid is applied under damp wraps for severe flares.' },
      ],
      analogies: [
        'El eczema herpético es como un incendio forestal que se extiende en pasto seco — la piel con eccema es terreno fértil para el virus. | Eczema herpeticum is like wildfire spreading on dry grass — eczema skin is fertile ground for the virus.',
        'La atrofia por esteroides es como si la piel se volviera tan fina como papel — por eso se usan con precaución. | Steroid atrophy is like skin becoming paper-thin — that is why they are used with caution.',
        'La terapia de vendajes húmedos es como una compresa curativa intensiva que enfría la piel y permite que la medicina penetre mejor. | Wet wrap therapy is like an intensive healing compress that cools the skin and lets medication penetrate better.',
      ],
      examples: [
        'Niño con eczema herpético necesita aciclovir intravenoso de urgencia. | Child with eczema herpeticum needs urgent IV acyclovir.',
        'Adulto con DA grave inicia dupilumab después de fallo con tratamientos tópicos. | Adult with severe AD starts dupilumab after failure of topical treatments.',
        'Paciente con atrofia cutánea por uso prolongado de clobetasol en la cara. | Patient with skin atrophy from long-term clobetasol use on the face.',
      ],
      clinicalNotes: 'Los corticosteroides tópicos deben aplicarse 2 veces al día durante brotes, luego reducir a fines de semana para mantenimiento ("terapia proactiva"). Usar la unidad de punta de dedo (FTU) para medir: 1 FTU = 0.5 g (cubre 2 palmas de adulto). Monitorear crecimiento en niños con uso prolongado de esteroides. El tacrolimus 0.03% está aprobado desde los 2 años; pimecrolimus desde los 3 meses. | Topical corticosteroids should be applied twice daily during flares, then tapered to weekends for maintenance ("proactive therapy"). Use fingertip unit (FTU) to measure: 1 FTU = 0.5 g (covers 2 adult palms). Monitor growth in children with long-term steroid use. Tacrolimus 0.03% approved from age 2; pimecrolimus from 3 months.',
    },

    4: {
      level: 4,
      summary: 'La dermatitis atópica es un trastorno inflamatorio sistémico con impacto significativo en la calidad de vida. Las terapias biológicas y los inhibidores de JAK han transformado el manejo de la enfermedad grave. | Atopic dermatitis is a systemic inflammatory disorder with significant quality-of-life impact. Biologic therapies and JAK inhibitors have transformed management of severe disease.',
      explanation: `## Explicación

### Terapias sistémicas avanzadas

**Dupilumab (primera línea biológica):**
- Anticuerpo monoclonal anti-receptor alfa de IL-4
- Bloquea señalización de IL-4 e IL-13
- Dosis: 600 mg carga, luego 300 mg cada 2 semanas (adultos)
- Pediátrico: aprobado desde los 6 meses
- Efectos secundarios: conjuntivitis (10-25%), reacciones en sitio de inyección
- Sin necesidad de monitoreo de laboratorio de rutina

**Tralokinumab (anti-IL-13):**
- Anticuerpo monoclonal que bloquea específicamente IL-13
- Dosis: 600 mg carga, luego 300 mg cada 2 semanas
- Eficacia similar a dupilumab
- Menor incidencia de conjuntivitis

**Inhibidores de JAK orales:**
- Abrocitinib (JAK1): 100-200 mg diario
- Upadacitinib (JAK1): 15-30 mg diario
- Baricitinib (JAK1/2): 2-4 mg diario (aprobado en Europa)
- Inicio de acción rápido (días vs. semanas con biológicos)
- Monitoreo requerido: hemograma, lípidos, función hepática, renal
- Advertencia de caja negra: riesgo de trombosis, infecciones graves, malignidad

**Sistémicos convencionales (segunda línea):**
- Metotrexato: 10-25 mg semanal
- Ciclosporina: 3-5 mg/kg/día (máximo 1-2 años por nefrotoxicidad)
- Micofenolato: 1-3 g diario
- Azatioprina: 2.5-3 mg/kg/día (verificar TPMT antes)

### Impacto en la calidad de vida

**Sueño:**
- El prurito crónico interrumpe el sueño profundo
- Efectos secundarios: alteración del ánimo, cognición, rendimiento escolar/laboral
- Perturbación del sueño familiar (padres de niños con DA)

**Impacto psicológico:**
- Ansiedad y depresión son comunes (prevalencia 2-3x mayor)
- Estigma social por lesiones visibles
- Alteración de la imagen corporal
- Acoso escolar (bullying) en niños
- Aislamiento social
- Ideación suicida en casos graves

**Impacto económico:**
- Costos directos: medicamentos, consultas, hospitalizaciones
- Costos indirectos: días perdidos de trabajo/escuela
- Carga del cuidador (especialmente padres)

### Poblaciones especiales

**Embarazo:**
- Preferir corticosteroides tópicos de baja-media potencia
- Evitar metotrexato y micofenolato (teratogénicos)
- Ciclosporina puede usarse si es necesario
- Dupilumab: datos limitados pero parece seguro
- Tacrolimus: categoría C, usar con precaución

**Lactantes (< 2 años):**
- Cuidado suave de la piel es esencial
- Evaluar alergias alimentarias si los síntomas lo sugieren
- Hidrocortisona 1% es el esteroide tópico más seguro
- Monitorear crecimiento con uso prolongado de esteroides

**Adultos mayores:**
- Piel más delgada — mayor riesgo de atrofia
- Más comorbilidades
- Interacciones medicamentosas más probables
- Considerar diagnóstico diferencial amplio (linfoma cutáneo de células T)

### Herramientas de evaluación de gravedad

- EASI (Eczema Area and Severity Index): estándar para ensayos clínicos
- SCORAD (SCORing Atopic Dermatitis): incluye síntomas subjetivos
- IGA (Investigator Global Assessment): evaluación global 0-4
- POEM (Patient-Oriented Eczema Measure): autoevaluación del paciente
- DLQI (Dermatology Life Quality Index): impacto en calidad de vida
- Objetivo terapéutico: EASI-75 (75% de mejoría)

---
## Explanation

### Advanced Systemic Therapies

**Dupilumab (first-line biologic):**
- Anti-IL-4 receptor alpha monoclonal antibody
- Blocks IL-4 and IL-13 signaling
- Dosing: 600 mg loading, then 300 mg every 2 weeks (adults)
- Pediatric: approved from 6 months of age
- Side effects: conjunctivitis (10-25%), injection site reactions
- No routine laboratory monitoring required

**Tralokinumab (anti-IL-13):**
- Monoclonal antibody specifically blocking IL-13
- Dosing: 600 mg loading, then 300 mg every 2 weeks
- Efficacy similar to dupilumab
- Lower conjunctivitis incidence

**Oral JAK inhibitors:**
- Abrocitinib (JAK1): 100-200 mg daily
- Upadacitinib (JAK1): 15-30 mg daily
- Baricitinib (JAK1/2): 2-4 mg daily (approved in Europe)
- Rapid onset of action (days vs. weeks with biologics)
- Monitoring required: CBC, lipids, hepatic/renal function
- Black box warning: thrombosis risk, serious infections, malignancy

**Conventional systemics (second-line):**
- Methotrexate: 10-25 mg weekly
- Cyclosporine: 3-5 mg/kg/day (max 1-2 years due to nephrotoxicity)
- Mycophenolate: 1-3 g daily
- Azathioprine: 2.5-3 mg/kg/day (check TPMT first)

### Quality-of-Life Impact

**Sleep:**
- Chronic pruritus disrupts deep sleep
- Secondary effects on mood, cognition, school/work performance
- Family sleep disturbance (parents of children with AD)

**Psychological impact:**
- Anxiety and depression are common (2-3x higher prevalence)
- Social stigma from visible lesions
- Body image disturbance
- School bullying in children
- Social isolation
- Suicidal ideation in severe cases

**Economic impact:**
- Direct costs: medications, visits, hospitalizations
- Indirect costs: missed work/school days
- Caregiver burden (especially parents)

### Special Populations

**Pregnancy:**
- Prefer low-to-medium potency topical corticosteroids
- Avoid methotrexate and mycophenolate (teratogenic)
- Cyclosporine may be used if needed
- Dupilumab: limited data but appears safe
- Tacrolimus: category C, use with caution

**Infants (< 2 years):**
- Gentle skin care is essential
- Evaluate for food allergies if symptoms suggest
- Hydrocortisone 1% is safest topical steroid
- Monitor growth with long-term steroid use

**Elderly:**
- Thinner skin — higher atrophy risk
- More comorbidities
- Drug interactions more likely
- Consider broad differential diagnosis (cutaneous T-cell lymphoma)

### Severity Assessment Tools

- EASI (Eczema Area and Severity Index): clinical trial standard
- SCORAD (SCORing Atopic Dermatitis): includes subjective symptoms
- IGA (Investigator Global Assessment): global 0-4 scale
- POEM (Patient-Oriented Eczema Measure): patient self-assessment
- DLQI (Dermatology Life Quality Index): quality-of-life impact
- Treatment target: EASI-75 (75% improvement)`,
      keyTerms: [
        { term: 'Conjuntivitis / Conjunctivitis', definition: 'Inflamación ocular — efecto secundario frecuente de dupilumab (10-25%). | Eye inflammation — common side effect of dupilumab (10-25%).' },
        { term: 'Inhibidor de JAK / JAK inhibitor', definition: 'Medicamento oral que bloquea las enzimas Janus quinasa implicadas en la señalización inflamatoria. | Oral medication that blocks Janus kinase enzymes involved in inflammatory signaling.' },
        { term: 'Carga del cuidador / Caregiver burden', definition: 'Impacto físico, emocional y financiero en quienes cuidan a pacientes con DA, especialmente padres. | Physical, emotional, and financial impact on those caring for AD patients, especially parents.' },
        { term: 'EASI', definition: 'Índice de Área y Gravedad del Eccema — herramienta estándar para medir la gravedad de la DA. | Eczema Area and Severity Index — standard tool for measuring AD severity.' },
        { term: 'TPMT', definition: 'Tiopurina metiltransferasa — enzima que debe medirse antes de iniciar azatioprina para evitar toxicidad. | Thiopurine methyltransferase — enzyme that must be measured before starting azathioprine to avoid toxicity.' },
      ],
      analogies: [
        'Los biológicos son como misiles inteligentes que atacan partes específicas del sistema inmunitario sin afectar todo el cuerpo. | Biologics are like smart bombs that target specific parts of the immune system without affecting the whole body.',
        'Los inhibidores de JAK son como apagar un interruptor dentro de las células inflamatorias — actúan rápido pero requieren más vigilancia. | JAK inhibitors are like turning off a switch inside inflammatory cells — they act fast but require more monitoring.',
        'La carga del cuidador es como cargar un peso pesado mientras intentas ayudar a otra persona — los padres también necesitan apoyo. | Caregiver burden is like carrying a heavy load while trying to help someone else — parents also need support.',
      ],
      examples: [
        'Paciente con dupilumab desarrolla conjuntivitis — manejada con lágrimas artificiales y gotas oftálmicas. | Patient on dupilumab develops conjunctivitis — managed with artificial tears and eye drops.',
        'Embarazada con DA grave manejada con corticosteroides tópicos de potencia media. | Pregnant woman with severe AD managed with medium-potency topical corticosteroids.',
        'Adolescente con eccema sufre acoso escolar — se inicia apoyo psicológico junto con el tratamiento dermatológico. | Teenager with eczema experiences bullying — psychological support initiated alongside dermatologic treatment.',
      ],
      clinicalNotes: 'Para evaluar gravedad se usan EASI, SCORAD e IGA. El objetivo terapéutico es EASI-75 (75% de mejoría). Establecer expectativas realistas: control, no curación. Tamizar para dermatitis de contacto alérgica si empeora a pesar del tratamiento (prueba del parche). Los inhibidores de JAK orales tienen inicio de acción más rápido que los biológicos pero requieren monitoreo de laboratorio regular y tienen advertencia de caja negra. | EASI, SCORAD, and IGA are used to assess severity. Treatment target is EASI-75 (75% improvement). Set realistic expectations: control, not cure. Screen for allergic contact dermatitis if worsening despite therapy (patch testing). Oral JAK inhibitors have faster onset than biologics but require regular lab monitoring and carry a black box warning.',
    },

    5: {
      level: 5,
      summary: 'La patogénesis de la dermatitis atópica involucra defectos en la barrera cutánea (mutaciones de filagrina), desregulación inmunológica (sesgo Th2) y factores microbianos. Las terapias biológicas dirigidas y los inhibidores de JAK han revolucionado el manejo de la enfermedad grave. | Atopic dermatitis pathogenesis involves skin barrier defects (filaggrin mutations), immune dysregulation (Th2 skewing), and microbial factors. Targeted biologic therapies and JAK inhibitors have revolutionized severe disease management.',
      explanation: `## Explicación

### Patogénesis molecular

**Defectos en la barrera cutánea:**
- Mutaciones de filagrina (FLG) — factor de riesgo genético más estudiado
  - Filagrina es esencial para la formación del estrato córneo
  - Mutaciones de pérdida de función en el 10-50% de pacientes con DA
  - Asociadas con DA más temprana, más grave y más persistente
  - También predicen riesgo de asma y alergias alimentarias
- Reducción de ceramidas (especialmente ceramida 1 y 3)
- Aumento de pérdida de agua transepidérmica (TEWL)
- Penetración aumentada de alérgenos, irritantes y microorganismos
- Reducción de péptidos antimicrobianos (LL-37, beta-defensinas)

**Desregulación inmunológica:**
- Fase aguda: predominio Th2 (IL-4, IL-5, IL-13, IL-31)
  - IL-4/IL-13: inducen cambio de isotipo a IgE, reducen FLG y proteínas de barrera
  - IL-31: principal mediador del prurito (picazón)
  - IL-5: reclutamiento de eosinófilos
- Fase crónica: adición de Th1 (IFN-gamma), Th22 (IL-22), Th17 (IL-17)
  - IL-22: promueve hiperplasia epidérmica y liquenificación
- IgE sérica elevada (no específica, no se usa para diagnóstico)
- TSLP (linfopoyetina estromal tímica): citocina epitelial clave que inicia la cascada Th2

**Alteraciones del microbioma cutáneo:**
- Dominancia de Staphylococcus aureus durante brotes (>90%)
- Reducción de diversidad microbiana (pérdida de comensales protectores)
- S. aureus produce superantígenos → activación masiva de células T
- Formación de biopelícula (biofilm) → resistencia a tratamiento
- Colonización por S. aureus precede y predice brotes

### Vía del prurito en la DA

- IL-31 actúa sobre receptores IL-31RA en neuronas sensoriales (circuito pruritogénico no histaminérgico)
- IL-4/IL-13 sensibilizan las neuronas pruriceptivas
- TSLP activa directamente las neuronas sensoriales
- Esto explica por qué los antihistamínicos son inefectivos para el prurito atópico
- Nemolizumab (anti-IL-31RA) específicamente aborda esta vía

### Terapias emergentes y en desarrollo

**Biológicos dirigidos:**
- Nemolizumab (anti-IL-31RA): específico para prurito, en ensayos avanzados
- Lebrikizumab (anti-IL-13): aprobado 2024
- Amlitelimab (anti-OX40L): modula la activación de células T
- Rocatinlimab (anti-OX40): en desarrollo
- Anti-TSLP (tezepelumab): aprobado para asma, en estudio para DA

**Inhibidores de JAK tópicos y orales:**
- Ruxolitinib crema (JAK1/2): aprobado para DA leve-moderada
- Delgocitinib (pan-JAK tópico): aprobado en Japón
- Futuras moléculas con mayor selectividad y mejor perfil de seguridad

**Enfoques del microbioma:**
- Trasplante de microbioma cutáneo (Roseomonas mucosa)
- Lisados bacterianos tópicos
- Terapia fágica dirigida contra S. aureus

### Estrategias de prevención

**Prevención primaria (en neonatos de alto riesgo):**
- Aplicación temprana de emolientes desde el nacimiento (reducción de DA 30-50%)
- Estudio BEEP, estudio PreventADALL
- Introducción temprana de alimentos alergénicos (prevención de alergia alimentaria)

**Prevención secundaria:**
- Manejo agresivo de brotes ("terapia proactiva")
- Descolonización de S. aureus (baños de lejía, mupirocina nasal)
- Evitación de alérgenos si hay sensibilización documentada

### DA como enfermedad sistémica

- Asociada con riesgo cardiovascular aumentado (independiente de factores tradicionales)
- La inflamación crónica de tipo 2 contribuye a aterosclerosis
- Comorbilidades neuropsiquiátricas: depresión, ansiedad, TDAH
- Osteoporosis (por inflamación crónica y uso de esteroides)
- Linfoma (aumento modesto de riesgo, especialmente en DA grave)

---
## Explanation

### Molecular Pathogenesis

**Skin barrier defects:**
- Filaggrin (FLG) mutations — most studied genetic risk factor
  - Filaggrin is essential for stratum corneum formation
  - Loss-of-function mutations in 10-50% of AD patients
  - Associated with earlier, more severe, and more persistent AD
  - Also predict risk of asthma and food allergies
- Reduced ceramides (especially ceramide 1 and 3)
- Increased transepidermal water loss (TEWL)
- Enhanced penetration of allergens, irritants, and microorganisms
- Reduced antimicrobial peptides (LL-37, beta-defensins)

**Immune dysregulation:**
- Acute phase: Th2 predominance (IL-4, IL-5, IL-13, IL-31)
  - IL-4/IL-13: induce IgE class switching, reduce FLG and barrier proteins
  - IL-31: primary pruritus mediator (itching)
  - IL-5: eosinophil recruitment
- Chronic phase: addition of Th1 (IFN-gamma), Th22 (IL-22), Th17 (IL-17)
  - IL-22: promotes epidermal hyperplasia and lichenification
- Elevated serum IgE (non-specific, not used for diagnosis)
- TSLP (thymic stromal lymphopoietin): key epithelial cytokine initiating Th2 cascade

**Cutaneous microbiome alterations:**
- Staphylococcus aureus dominance during flares (>90%)
- Reduced microbial diversity (loss of protective commensals)
- S. aureus produces superantigens → massive T cell activation
- Biofilm formation → treatment resistance
- S. aureus colonization precedes and predicts flares

### Itch Pathway in AD

- IL-31 acts on IL-31RA receptors on sensory neurons (non-histaminergic pruritogenic circuit)
- IL-4/IL-13 sensitize pruriceptive neurons
- TSLP directly activates sensory neurons
- This explains why antihistamines are ineffective for atopic itch
- Nemolizumab (anti-IL-31RA) specifically targets this pathway

### Emerging and Investigational Therapies

**Targeted biologics:**
- Nemolizumab (anti-IL-31RA): specific for pruritus, in advanced trials
- Lebrikizumab (anti-IL-13): approved 2024
- Amlitelimab (anti-OX40L): modulates T cell activation
- Rocatinlimab (anti-OX40): in development
- Anti-TSLP (tezepelumab): approved for asthma, under study for AD

**Topical and oral JAK inhibitors:**
- Ruxolitinib cream (JAK1/2): approved for mild-moderate AD
- Delgocitinib (topical pan-JAK): approved in Japan
- Future molecules with greater selectivity and improved safety profiles

**Microbiome approaches:**
- Cutaneous microbiome transplant (Roseomonas mucosa)
- Topical bacterial lysates
- Phage therapy targeting S. aureus

### Prevention Strategies

**Primary prevention (in high-risk neonates):**
- Early emollient application from birth (30-50% AD reduction)
- BEEP study, PreventADALL study
- Early introduction of allergenic foods (food allergy prevention)

**Secondary prevention:**
- Aggressive flare management ("proactive therapy")
- S. aureus decolonization (bleach baths, nasal mupirocin)
- Allergen avoidance if documented sensitization

### AD as a Systemic Disease

- Associated with increased cardiovascular risk (independent of traditional factors)
- Chronic type 2 inflammation contributes to atherosclerosis
- Neuropsychiatric comorbidities: depression, anxiety, ADHD
- Osteoporosis (from chronic inflammation and steroid use)
- Lymphoma (modest risk increase, especially in severe AD)`,
      keyTerms: [
        { term: 'Filagrina / Filaggrin', definition: 'Proteína esencial para la estructura de la barrera cutánea — las mutaciones de pérdida de función son el factor genético más importante en la DA. | Protein essential for skin barrier structure — loss-of-function mutations are the most important genetic factor in AD.' },
        { term: 'Sesgo Th2 / Th2 skewing', definition: 'Preferencia del sistema inmunitario hacia respuesta Th2 que causa inflamación alérgica (IL-4, IL-13, IL-31, IgE). | Immune system preference for Th2 response causing allergic inflammation (IL-4, IL-13, IL-31, IgE).' },
        { term: 'IL-31', definition: 'Interleucina 31 — citocina principal responsable del prurito en la DA; actúa por vía no histaminérgica. | Interleukin 31 — main cytokine responsible for pruritus in AD; acts via non-histaminergic pathway.' },
        { term: 'Biopelícula / Biofilm', definition: 'Capa protectora formada por S. aureus que resiste la respuesta inmune y los antibióticos. | Protective layer formed by S. aureus that resists immune response and antibiotics.' },
        { term: 'TSLP', definition: 'Linfopoyetina estromal tímica — citocina epitelial que inicia la respuesta inflamatoria Th2 en la DA. | Thymic stromal lymphopoietin — epithelial cytokine that initiates the Th2 inflammatory response in AD.' },
        { term: 'Nemolizumab', definition: 'Anticuerpo monoclonal anti-IL-31RA que específicamente reduce el prurito en DA. | Anti-IL-31RA monoclonal antibody that specifically reduces pruritus in AD.' },
      ],
      analogies: [
        'La filagrina es como el mortero entre los ladrillos de una pared — sin ella, la pared (barrera cutánea) se desmorona y todo pasa a través. | Filaggrin is like the mortar between bricks in a wall — without it, the wall (skin barrier) crumbles and everything passes through.',
        'El sesgo Th2 es como un sistema de alarma hiperactivo que reacciona ante todo, incluso ante cosas inofensivas. | Th2 skewing is like an overactive alarm system that reacts to everything, even harmless things.',
        'Los antihistamínicos no funcionan bien para el prurito del eccema porque la picazón viaja por una "carretera" diferente (IL-31) que la de las alergias (histamina). | Antihistamines do not work well for eczema itch because the itching travels along a different "highway" (IL-31) than allergies (histamine).',
      ],
      examples: [
        'Paciente con mutación de filagrina tiene DA grave y persistente desde la infancia. | Patient with filaggrin mutation has severe, persistent AD since infancy.',
        'Inhibidor de JAK usado en paciente que fracasó con dupilumab — mejoría rápida en 2 semanas. | JAK inhibitor used in patient who failed dupilumab — rapid improvement in 2 weeks.',
        'Lactante de alto riesgo inicia emolientes desde el nacimiento como prevención primaria. | High-risk infant starts emollients from birth as primary prevention.',
      ],
      clinicalNotes: 'La DA se asocia con riesgo cardiovascular aumentado independiente de factores tradicionales. La inflamación crónica tipo 2 contribuye a la aterosclerosis. El tamizaje de salud mental es esencial — la DA tiene un impacto psicológico comparable al de la diabetes y la enfermedad cardíaca. Considerar manejo multidisciplinario: dermatología, alergología, psicología. Los emolientes desde el nacimiento pueden prevenir hasta 50% de DA en neonatos de alto riesgo — evidencia prometedora pero aún en consolidación. | AD is associated with increased cardiovascular risk independent of traditional factors. Chronic type 2 inflammation contributes to atherosclerosis. Mental health screening is essential — AD has a psychological impact comparable to diabetes and heart disease. Consider multidisciplinary management: dermatology, allergy, psychology. Emollients from birth may prevent up to 50% of AD in high-risk neonates — promising evidence but still being consolidated.',
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
      title: 'Guidelines of care for the management of atopic dermatitis in adults with topical therapies',
      authors: ['Sidbury, R.', 'Davis, D.M.', 'Cohen, D.E.'],
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
      'dermatitis atópica', 'atopic dermatitis', 'eccema', 'eczema',
      'prurito', 'pruritus', 'filagrina', 'filaggrin',
      'dupilumab', 'JAK inhibitor', 'inhibidor de JAK',
      'barrera cutánea', 'skin barrier', 'marcha atópica', 'atopic march',
      'IL-4', 'IL-13', 'IL-31', 'Th2',
    ],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
