/**
 * Infecciones Cutaneas / Skin Infections - Contenido Educativo Completo Bilingue
 *
 * Bacterianas (celulitis, impetigo), fungicas (tinea), virales (herpes, verrugas).
 * Bacterial (cellulitis, impetigo), fungal (tinea), viral (herpes, warts).
 *
 * Covers: pathogens, clinical presentation, diagnosis, treatment, complications
 */

import { EducationalContent } from '../types';

export const infeccionesCutaneasSkinInfections: EducationalContent = {
  id: 'derm-infecciones-cutaneas-skin-infections',
  type: 'condition',
  name: 'Skin Infections | Infecciones Cutaneas',
  nameEs: 'Infecciones Cutaneas',
  alternateNames: [
    'Infecciones de la Piel',
    'Celulitis', 'Cellulitis',
    'Impetigo',
    'Tina', 'Tinea', 'Dermatofitosis',
    'Herpes Simple', 'Herpes Simplex',
    'Verrugas', 'Warts',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Las infecciones de la piel son causadas por bacterias, hongos o virus. Las mas comunes incluyen la celulitis (infeccion bacteriana profunda), el impetigo (costras doradas en ninos), la tina (hongos que causan anillos rojos), el herpes (ampollas dolorosas) y las verrugas (bultos duros por virus). Es importante consultar al medico si una infeccion empeora o no mejora. | Skin infections are caused by bacteria, fungi, or viruses. The most common include cellulitis (deep bacterial infection), impetigo (golden crusts in children), tinea (fungi causing red rings), herpes (painful blisters), and warts (hard bumps from virus). It is important to see the doctor if an infection worsens or does not improve.',
      explanation: `## Tipos de infecciones de la piel | Types of skin infections

### Infecciones bacterianas | Bacterial infections

**Celulitis:**
- Infeccion profunda de la piel que causa area roja, caliente, hinchada y dolorosa | Deep skin infection causing red, warm, swollen, painful area
- Generalmente en piernas | Usually on legs
- Causada por bacterias (estreptococo, estafilococo) | Caused by bacteria (strep, staph)
- REQUIERE ANTIBIOTICOS | REQUIRES ANTIBIOTICS
- Ir al medico si se extiende rapidamente o tiene fiebre | See doctor if spreading rapidly or has fever

**Impetigo:**
- Comun en ninos | Common in children
- Costras amarillas o doradas ("color miel") | Yellow or golden crusts ("honey-colored")
- Muy contagioso | Very contagious
- Se trata con antibioticos en crema o pastillas | Treated with antibiotic cream or pills

### Infecciones fungicas (por hongos) | Fungal infections

**Tina (Tinea):**
- Anillo rojo en la piel que crece hacia afuera con borde elevado | Red ring on skin that grows outward with raised border
- NO es causada por un gusano (a pesar del nombre "ringworm" en ingles) | NOT caused by a worm (despite the name "ringworm")
- Puede afectar: cuerpo (tina corporal), pies (pie de atleta), ingle (tina crural), cuero cabelludo (tina capitis), unas (onicomicosis) | Can affect: body (tinea corporis), feet (athlete's foot), groin (jock itch), scalp (tinea capitis), nails (onychomycosis)
- Se trata con cremas o pastillas antimicoticas | Treated with antifungal creams or pills

### Infecciones virales | Viral infections

**Herpes simple:**
- Ampollas dolorosas agrupadas en labios (herpes oral, VHS-1) o genitales (herpes genital, VHS-2) | Painful grouped blisters on lips (oral herpes, HSV-1) or genitals (genital herpes, HSV-2)
- El virus permanece en el cuerpo de por vida y puede reactivarse | The virus stays in the body for life and can reactivate
- Se controla con medicamentos antivirales | Controlled with antiviral medications

**Verrugas:**
- Bultos duros y asperos causados por el virus del papiloma humano (VPH) | Hard, rough bumps caused by human papillomavirus (HPV)
- Pueden aparecer en manos, pies (verrugas plantares) u otras areas | Can appear on hands, feet (plantar warts), or other areas
- Muchas desaparecen solas con el tiempo | Many go away on their own over time
- Se pueden tratar con acido salicilico, crioterapia (congelamiento) | Can be treated with salicylic acid, cryotherapy (freezing)

### Cuando consultar al medico | When to see the doctor
- Infeccion que se extiende rapidamente | Infection spreading rapidly
- Fiebre con infeccion de la piel | Fever with skin infection
- Pus o secrecion que no mejora | Pus or discharge that does not improve
- Dolor intenso | Severe pain
- Lineas rojas que se extienden desde la infeccion (posible linfangitis) | Red lines extending from infection (possible lymphangitis)`,
      keyTerms: [
        { term: 'Celulitis | Cellulitis', definition: 'Infeccion bacteriana profunda de la piel que causa enrojecimiento, calor, hinchazon y dolor. | Deep bacterial skin infection causing redness, warmth, swelling, and pain.' },
        { term: 'Impetigo', definition: 'Infeccion bacteriana superficial que causa costras amarillas; muy comun y contagiosa en ninos. | Superficial bacterial infection causing yellow crusts; very common and contagious in children.' },
        { term: 'Tina (Tinea)', definition: 'Infeccion por hongos que causa anillos rojos con borde elevado en la piel. | Fungal infection causing red rings with raised border on skin.' },
        { term: 'Herpes simple | Herpes simplex', definition: 'Virus que causa ampollas dolorosas agrupadas en labios o genitales; permanece en el cuerpo de por vida. | Virus causing painful grouped blisters on lips or genitals; stays in the body for life.' },
        { term: 'Verrugas | Warts', definition: 'Bultos duros y asperos causados por el virus del papiloma humano (VPH). | Hard, rough bumps caused by human papillomavirus (HPV).' },
      ],
      analogies: [
        'La celulitis es como un incendio bajo la piel: se extiende rapido y necesita tratamiento urgente. | Cellulitis is like a fire under the skin: it spreads fast and needs urgent treatment.',
        'La tina (ringworm) crece en circulos como una piedra que cae al agua y genera ondas. | Ringworm grows in circles like a stone falling into water creating ripples.',
        'El herpes es como un volcan dormido: el virus se esconde y puede "erupcionar" de nuevo cuando el cuerpo esta estresado. | Herpes is like a dormant volcano: the virus hides and can "erupt" again when the body is stressed.',
      ],
      examples: [
        'Una persona con pierna roja, caliente, hinchada y dolorosa despues de una cortada — celulitis. | A person with a red, warm, swollen, painful leg after a cut — cellulitis.',
        'Un nino con costras amarillas alrededor de la boca — impetigo. | A child with yellow crusts around the mouth — impetigo.',
        'Un anillo rojo con borde elevado en el brazo que crece — tina corporal. | A red ring with raised border on the arm that grows — tinea corporis.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Las infecciones cutaneas bacterianas incluyen celulitis (dermis/hipodermis, S. pyogenes/S. aureus), erisipela (dermis superficial), impetigo (epidermis) y foliculitis. Las infecciones fungicas superficiales (dermatofitosis) se clasifican por localizacion: tinea corporis, capitis, pedis, cruris y unguium. Las infecciones virales incluyen VHS (latencia ganglionar), VVZ (herpes zoster) y VPH (verrugas, condilomas). | Bacterial skin infections include cellulitis (dermis/hypodermis, S. pyogenes/S. aureus), erysipelas (superficial dermis), impetigo (epidermis), and folliculitis. Superficial fungal infections (dermatophytosis) are classified by location: tinea corporis, capitis, pedis, cruris, and unguium. Viral infections include HSV (ganglionic latency), VZV (herpes zoster), and HPV (warts, condylomata).',
      explanation: `## Infecciones bacterianas | Bacterial Infections

### Clasificacion por profundidad | Classification by Depth

| Infeccion | Capa afectada | Patogeno principal | Infection | Layer affected | Main pathogen |
|-----------|--------------|-------------------|-----------|----------------|---------------|
| Impetigo | Epidermis | S. aureus, S. pyogenes | Impetigo | Epidermis | S. aureus, S. pyogenes |
| Erisipela | Dermis superficial | S. pyogenes (GAS) | Erysipelas | Superficial dermis | S. pyogenes (GAS) |
| Celulitis | Dermis/hipodermis | S. pyogenes, S. aureus | Cellulitis | Dermis/hypodermis | S. pyogenes, S. aureus |
| Foliculitis | Foliculo piloso | S. aureus | Folliculitis | Hair follicle | S. aureus |
| Furúnculo | Foliculo profundo | S. aureus | Furuncle | Deep follicle | S. aureus |
| Absceso | Cavidad coleccionada | S. aureus (MRSA comun) | Abscess | Collected cavity | S. aureus (MRSA common) |

### Celulitis vs Erisipela | Cellulitis vs Erysipelas
- **Erisipela:** bordes bien definidos, elevados; dermis superficial; S. pyogenes | Well-defined, raised borders; superficial dermis; S. pyogenes
- **Celulitis:** bordes difusos; dermis profunda/hipodermis; S. pyogenes o S. aureus | Diffuse borders; deep dermis/hypodermis; S. pyogenes or S. aureus

### Impetigo — Dos formas | Two forms
- **No bulloso (70%):** costras color miel; S. aureus o S. pyogenes | Honey-colored crusts
- **Bulloso (30%):** ampollas flacidas; S. aureus (toxina exfoliativa) | Flaccid bullae; S. aureus (exfoliative toxin)

### SARM (MRSA) | MRSA
- Estafilococo aureus resistente a meticilina | Methicillin-resistant Staphylococcus aureus
- CA-MRSA (comunidad): abscesos, celulitis purulenta | CA-MRSA (community): abscesses, purulent cellulitis
- Tratamiento: incision y drenaje (I&D) + trimetoprim-sulfametoxazol o doxiciclina | Treatment: I&D + TMP-SMX or doxycycline

## Infecciones fungicas | Fungal Infections

### Dermatofitosis (Tinea) — por localizacion | by Location

| Tipo | Localizacion | Patogeno | Type | Location | Pathogen |
|------|-------------|---------|------|----------|----------|
| Tinea corporis | Cuerpo | T. rubrum | Tinea corporis | Body | T. rubrum |
| Tinea capitis | Cuero cabelludo | T. tonsurans (Americas), M. canis | Tinea capitis | Scalp | T. tonsurans (Americas), M. canis |
| Tinea pedis | Pies | T. rubrum, T. mentagrophytes | Tinea pedis | Feet | T. rubrum, T. mentagrophytes |
| Tinea cruris | Ingle | T. rubrum, E. floccosum | Tinea cruris | Groin | T. rubrum, E. floccosum |
| Tinea unguium | Unas (onicomicosis) | T. rubrum | Tinea unguium | Nails (onychomycosis) | T. rubrum |

**Diagnostico | Diagnosis:**
- Preparacion con KOH: hifas septadas | KOH prep: septate hyphae
- Lampara de Wood: fluorescencia en M. canis (NO T. tonsurans) | Wood lamp: fluorescence in M. canis (NOT T. tonsurans)
- Cultivo funguico (estandar de oro) | Fungal culture (gold standard)

**Tratamiento | Treatment:**
- Topico para tinea superficial: terbinafina, clotrimazol, miconazol | Topical for superficial tinea
- Oral OBLIGATORIO para tinea capitis y onicomicosis: terbinafina, griseofulvina | Oral REQUIRED for tinea capitis and onychomycosis

### Candidiasis cutanea | Cutaneous Candidiasis
- Candida albicans | Candida albicans
- Pliegues humedos (intertrigo), area del panal | Moist folds (intertrigo), diaper area
- Placas eritematosas con lesiones satelite | Erythematous plaques with satellite lesions

## Infecciones virales | Viral Infections

### Herpes simple (VHS) | Herpes Simplex (HSV)
- VHS-1: predomina orolabial | HSV-1: predominantly orolabial
- VHS-2: predomina genital | HSV-2: predominantly genital
- Vesiculas agrupadas sobre base eritematosa | Grouped vesicles on erythematous base
- Latencia en ganglios sensoriales | Latency in sensory ganglia
- Reactivacion: estres, fiebre, UV, menstruacion, inmunosupresion | Reactivation: stress, fever, UV, menstruation, immunosuppression
- Diagnostico: PCR (estandar), Tzanck (celulas gigantes multinucleadas) | Diagnosis: PCR (standard), Tzanck (multinucleated giant cells)
- Tratamiento: aciclovir, valaciclovir, famciclovir | Treatment: acyclovir, valacyclovir, famciclovir

### Herpes zoster (VVZ) | Herpes Zoster (VZV)
- Reactivacion de varicela en un dermatoma | Reactivation of chickenpox in a dermatome
- Vesiculas sobre base eritematosa en distribucion dermatomal | Vesicles on erythematous base in dermatomal distribution
- No cruza linea media | Does not cross midline
- Complicacion: neuralgia posherpetica | Complication: postherpetic neuralgia
- Tratamiento: valaciclovir 1g TID x 7 dias | Treatment: valacyclovir 1g TID x 7 days

### Verrugas (VPH) | Warts (HPV)
- VPH tipos cutaneos: 1, 2, 4, 7 (comunes), 3, 10 (planas) | HPV cutaneous types
- Verruga comun (vulgar): papula aspera, hiperqueratosica | Common (vulgar) wart: rough, hyperkeratotic papule
- Verruga plantar: en planta del pie, dolorosa al caminar | Plantar wart: on sole of foot, painful when walking
- Verruga plana: papulas lisas, ligeramente elevadas, multiples | Flat wart: smooth, slightly elevated, multiple papules
- Tratamiento: acido salicilico, crioterapia, cantaridina, inmunoterapia topica | Treatment: salicylic acid, cryotherapy, cantharidin, topical immunotherapy`,
      keyTerms: [
        { term: 'Erisipela | Erysipelas', definition: 'Infeccion de la dermis superficial por S. pyogenes con bordes bien definidos y elevados. | Superficial dermis infection by S. pyogenes with well-defined, raised borders.' },
        { term: 'SARM / MRSA', definition: 'Staphylococcus aureus resistente a meticilina; causa comun de infecciones cutaneas en la comunidad. | Methicillin-resistant Staphylococcus aureus; common cause of community skin infections.' },
        { term: 'Preparacion KOH | KOH prep', definition: 'Examen microscopico con hidroxido de potasio para visualizar hongos (hifas septadas). | Microscopic exam with potassium hydroxide to visualize fungi (septate hyphae).' },
        { term: 'Dermatofitos | Dermatophytes', definition: 'Hongos que infectan piel, cabello y unas: Trichophyton, Microsporum, Epidermophyton. | Fungi infecting skin, hair, and nails.' },
        { term: 'Latencia ganglionar | Ganglionic latency', definition: 'Capacidad del VHS de permanecer dormido en ganglios nerviosos sensoriales y reactivarse. | HSV ability to remain dormant in sensory nerve ganglia and reactivate.' },
        { term: 'VPH | HPV', definition: 'Virus del papiloma humano; causa verrugas cutaneas y condilomas genitales. | Human papillomavirus; causes skin warts and genital condylomata.' },
      ],
      analogies: [
        'La erisipela tiene bordes definidos como si alguien hubiera pintado el area roja con un pincel; la celulitis se difumina como acuarela. | Erysipelas has defined borders like someone painted the red area with a brush; cellulitis fades like watercolor.',
        'Los dermatofitos son como carpeneros que comen queratina: invaden la capa externa de piel, cabello y unas. | Dermatophytes are like carpenters eating keratin: they invade the outer layer of skin, hair, and nails.',
        'La latencia del herpes es como un huesped no invitado que se esconde en el sotano: puede salir en cualquier momento de estres. | Herpes latency is like an uninvited guest hiding in the basement: they can come out at any stressful moment.',
      ],
      examples: [
        'Paciente diabetico con pierna roja, caliente, hinchada con bordes difusos — celulitis; necesita antibioticos. | Diabetic patient with red, warm, swollen leg with diffuse borders — cellulitis; needs antibiotics.',
        'Nino con costras color miel alrededor de la boca y nariz — impetigo no bulloso. | Child with honey-colored crusts around mouth and nose — non-bullous impetigo.',
        'Persona con anillo rojo con borde elevado en el brazo que crece y se aclara en el centro — tinea corporis. | Person with red ring with raised border on arm, clearing centrally — tinea corporis.',
      ],
    },

    3: {
      level: 3,
      summary:
        'El manejo de infecciones cutaneas requiere identificar el agente causal, la profundidad de la infeccion y los factores del huesped. La celulitis no purulenta se trata con betalactamicos; la purulenta requiere cobertura para MRSA. Tinea capitis requiere antifungico oral obligatorio. El eccema herpetico (VHS en piel atopica) es una emergencia dermatologica. La fasciitis necrotizante es una emergencia quirurgica. | Skin infection management requires identifying the causative agent, infection depth, and host factors. Non-purulent cellulitis is treated with beta-lactams; purulent requires MRSA coverage. Tinea capitis requires mandatory oral antifungal. Eczema herpeticum (HSV on atopic skin) is a dermatologic emergency. Necrotizing fasciitis is a surgical emergency.',
      explanation: `## Infecciones bacterianas — Manejo avanzado | Bacterial Infections — Advanced Management

### Celulitis — Tratamiento basado en presentacion | Cellulitis — Presentation-Based Treatment

**Celulitis no purulenta (sin pus, sin absceso) | Non-purulent (no pus, no abscess):**
- Patogenos: S. pyogenes >> S. aureus | Pathogens: S. pyogenes >> S. aureus
- Tratamiento: cefalexina 500mg QID o dicloxacilina | Treatment: cephalexin 500mg QID or dicloxacillin
- Alergia a penicilina: clindamicina | Penicillin allergy: clindamycin

**Celulitis purulenta (con pus/absceso) | Purulent (with pus/abscess):**
- Patogeno: S. aureus (incluyendo CA-MRSA) | Pathogen: S. aureus (including CA-MRSA)
- Tratamiento: I&D + TMP-SMX DS BID o doxiciclina 100mg BID | Treatment: I&D + TMP-SMX DS BID or doxycycline 100mg BID
- Severa: vancomicina IV | Severe: IV vancomycin

**Celulitis severa (criterios de hospitalizacion) | Severe cellulitis (hospitalization criteria):**
- Fiebre, taquicardia, hipotension | Fever, tachycardia, hypotension
- Falla de antibioticos orales | Oral antibiotic failure
- Inmunosupresion | Immunosuppression
- Progresion rapida | Rapid progression
- Sospecha de fasciitis necrotizante | Suspicion of necrotizing fasciitis

### Fasciitis necrotizante | Necrotizing Fasciitis
- EMERGENCIA QUIRURGICA — mortalidad 20-40% | SURGICAL EMERGENCY — 20-40% mortality
- Tipo I: polimicrobiana (diabeticos, posquirurgica) | Type I: polymicrobial (diabetics, post-surgical)
- Tipo II: S. pyogenes (estreptococo del grupo A) | Type II: S. pyogenes (Group A Strep)
- Signos de alarma: dolor desproporcionado, crepitacion, bullas hemorragicas, toxicidad sistemica | Alarm signs: disproportionate pain, crepitus, hemorrhagic bullae, systemic toxicity
- Tratamiento: desbridamiento quirurgico URGENTE + antibioticos IV de amplio espectro | Treatment: URGENT surgical debridement + broad-spectrum IV antibiotics

### Impetigo — Complicaciones | Impetigo — Complications
- Glomerulonefritis post-estreptococica (con cepas nefritogenicas) | Post-streptococcal glomerulonephritis (with nephritogenic strains)
- NO se previene con tratamiento antibiotico (a diferencia de fiebre reumatica) | NOT prevented by antibiotic treatment (unlike rheumatic fever)
- Sindrome estafilococico de piel escaldada (SSSS): toxinas exfoliativas de S. aureus | Staphylococcal scalded skin syndrome (SSSS): S. aureus exfoliative toxins

## Infecciones fungicas — Manejo avanzado | Fungal Infections — Advanced Management

### Tinea capitis | Tinea Capitis
- OBLIGATORIO tratamiento oral (topicos no penetran al foliculo) | MANDATORY oral treatment (topicals don't penetrate follicle)
- Griseofulvina: 20-25 mg/kg/dia x 6-8 semanas (estandar pediatrico) | Griseofulvin: 20-25 mg/kg/day x 6-8 weeks (pediatric standard)
- Terbinafina: alternativa mas corta (4 semanas) | Terbinafine: shorter alternative (4 weeks)
- Champu antimicotico adjunto (ketoconazol 2%): reduce contagio | Adjunctive antifungal shampoo: reduces contagion
- Kerion: masa inflamatoria dolorosa; tratar infeccion + corticosteroides para reducir cicatriz | Kerion: painful inflammatory mass; treat infection + corticosteroids to reduce scarring

### Onicomicosis | Onychomycosis
- Diagnostico: KOH, PAS (periodic acid-Schiff), cultivo | Diagnosis: KOH, PAS, culture
- Terbinafina oral: primera linea (250mg/dia x 6 sem manos, 12 sem pies) | Oral terbinafine: first-line
- Itraconazol: alternativa (pulsos mensuales) | Itraconazole: alternative (monthly pulses)
- Efinaconazol y tavaborol topicos: eficacia limitada | Topical efinaconazole and tavaborole: limited efficacy

### Tinea incognita | Tinea Incognito
- Dermatofitosis modificada por corticosteroides topicos | Dermatophytosis modified by topical corticosteroids
- Borde clasico eliminado, puede imitar eccema | Classic border eliminated, can mimic eczema
- Error diagnostico comun | Common diagnostic error

## Infecciones virales — Manejo avanzado | Viral Infections — Advanced Management

### Eccema herpetico (erupcion variceliforme de Kaposi) | Eczema Herpeticum
- VHS diseminado en piel con dermatitis atopica | Disseminated HSV on atopic dermatitis skin
- EMERGENCIA DERMATOLOGICA | DERMATOLOGIC EMERGENCY
- Vesiculopustulas difusas monomortas + erosiones en sacabocados | Diffuse monomorphic vesiculopustules + punched-out erosions
- Puede ser fatal | Can be fatal
- Tratamiento: aciclovir IV urgente | Treatment: urgent IV acyclovir

### Herpes zoster — Complicaciones | Herpes Zoster — Complications
- Neuralgia posherpetica: dolor >90 dias post-erupcion | Postherpetic neuralgia: pain >90 days post-rash
- Zoster ophthalmicus: V1 (rama oftalmica del trigeminal) — riesgo ocular | V1 (ophthalmic branch of trigeminal) — ocular risk
- Signo de Hutchinson: vesiculas en punta de nariz = afectacion del nervio nasociliar | Hutchinson sign: vesicles on nose tip = nasociliary nerve involvement
- Sindrome de Ramsay Hunt: VVZ del ganglio geniculado → paralisis facial + vesiculas en oido | VZV of geniculate ganglion → facial palsy + ear vesicles

### Verrugas — Tratamiento escalonado | Warts — Step-Wise Treatment
1. Acido salicilico topico (primera linea) | Topical salicylic acid (first-line)
2. Crioterapia con nitrogeno liquido | Cryotherapy with liquid nitrogen
3. Cantaridina (vesicante) | Cantharidin (vesicant)
4. Bleomicina intralesional | Intralesional bleomycin
5. Inmunoterapia topica (imiquimod, DPCP) | Topical immunotherapy (imiquimod, DPCP)
6. Laser pulsado de tinte | Pulsed dye laser`,
      keyTerms: [
        { term: 'Fasciitis necrotizante | Necrotizing fasciitis', definition: 'Infeccion bacteriana profunda de fascia y tejidos blandos rapidamente progresiva y potencialmente mortal; requiere cirugia urgente. | Rapidly progressive, potentially fatal deep bacterial infection of fascia and soft tissue; requires urgent surgery.' },
        { term: 'Eccema herpetico | Eczema herpeticum', definition: 'Diseminacion de VHS en piel con dermatitis atopica; emergencia dermatologica. | Dissemination of HSV on atopic dermatitis skin; dermatologic emergency.' },
        { term: 'Tinea incognita | Tinea incognito', definition: 'Infeccion fungica alterada por uso de corticosteroides topicos, enmascarando la presentacion tipica. | Fungal infection altered by topical corticosteroid use, masking typical presentation.' },
        { term: 'Kerion', definition: 'Masa inflamatoria dolorosa y supurativa en cuero cabelludo causada por respuesta inmune intensa a dermatofito. | Painful, suppurative inflammatory mass on scalp from intense immune response to dermatophyte.', pronunciation: 'KEE-ree-on' },
        { term: 'Sindrome de Ramsay Hunt | Ramsay Hunt syndrome', definition: 'Reactivacion de VVZ en ganglio geniculado: paralisis facial + vesiculas en oido. | VZV reactivation in geniculate ganglion: facial palsy + ear vesicles.' },
        { term: 'CA-MRSA', definition: 'MRSA adquirido en la comunidad; causa principal de abscesos cutaneos y celulitis purulenta. | Community-acquired MRSA; main cause of skin abscesses and purulent cellulitis.' },
      ],
      clinicalNotes: 'Celulitis no purulenta → betalactamicos. Purulenta → cobertura MRSA (TMP-SMX, doxiciclina). Fasciitis necrotizante: dolor desproporcionado es la senal clave; cirugía urgente salva vidas. Tinea capitis requiere antifungico oral SIEMPRE. No aplicar esteroides topicos solos en lesiones con sospecha de infeccion fungica (riesgo de tinea incognita). Eccema herpetico es emergencia: aciclovir IV. Signo de Hutchinson en zoster = derivar a oftalmologia urgente. | Non-purulent cellulitis → beta-lactams. Purulent → MRSA coverage. Necrotizing fasciitis: disproportionate pain is the key sign; urgent surgery saves lives. Tinea capitis ALWAYS requires oral antifungal. Do not apply topical steroids alone on lesions suspicious for fungal infection. Eczema herpeticum is emergency: IV acyclovir. Hutchinson sign in zoster = urgent ophthalmology referral.',
    },

    4: {
      level: 4,
      summary:
        'El manejo avanzado de infecciones cutaneas integra microbiologia molecular, patrones de resistencia antimicrobiana, y terapias dirigidas. La biopeliculas (biofilms) de S. aureus son clave en infecciones cronicas. Las pruebas de susceptibilidad guian la terapia para MRSA. La farmacologia de los antimicoticos incluye interacciones CYP450 importantes. La inmunopatogenia viral determina la estrategia de manejo a largo plazo. | Advanced skin infection management integrates molecular microbiology, antimicrobial resistance patterns, and targeted therapies. S. aureus biofilms are key in chronic infections. Susceptibility testing guides MRSA therapy. Antifungal pharmacology includes important CYP450 interactions. Viral immunopathogenesis determines long-term management strategy.',
      explanation: `## Microbiologia avanzada | Advanced Microbiology

### S. aureus — Factores de virulencia | Virulence Factors
- Proteina A: se une a Fc de IgG, evade opsonizacion | Protein A: binds IgG Fc, evades opsonization
- Leucocidina Panton-Valentine (PVL): asociada con CA-MRSA, abscesos necroticos | Panton-Valentine Leukocidin (PVL): associated with CA-MRSA, necrotic abscesses
- Coagulasa: promueve formacion de coagulos protectores | Coagulase: promotes protective clot formation
- Biofilm: comunidad bacteriana adherente, resistente a antibioticos | Biofilm: adherent bacterial community, antibiotic-resistant
- Toxinas exfoliativas (ETA, ETB): causan impetigo bulloso y SSSS | Exfoliative toxins: cause bullous impetigo and SSSS

### Mecanismos de resistencia | Resistance Mechanisms
- MRSA: gen mecA codifica PBP2a (proteina de union a penicilina alterada) | mecA gene encodes PBP2a (altered penicillin-binding protein)
- CA-MRSA vs HA-MRSA: diferencias en susceptibilidad y factores de virulencia | Differences in susceptibility and virulence factors
- CA-MRSA: frecuentemente susceptible a TMP-SMX, doxiciclina, clindamicina | Often susceptible to TMP-SMX, doxycycline, clindamycin
- D-test: detecta resistencia inducible a clindamicina | D-test: detects inducible clindamycin resistance

### S. pyogenes — Consideraciones especiales | S. pyogenes — Special Considerations
- Proteina M: principal factor de virulencia; base de serotipificacion | M protein: main virulence factor; basis of serotyping
- Cepas nefritogenicas (M12, M49): glomerulonefritis post-estreptococica | Nephritogenic strains: post-streptococcal GN
- Toxina pirogena estreptococica: sindrome de shock toxico | Streptococcal pyrogenic toxin: toxic shock syndrome
- Penicilina sigue siendo el tratamiento de eleccion (sin resistencia) | Penicillin remains treatment of choice (no resistance)

## Farmacologia antimicotica | Antifungal Pharmacology

### Terbinafina
- Inhibidor de escualeno epoxidasa | Squalene epoxidase inhibitor
- Fungicida | Fungicidal
- Excelente penetracion en unas | Excellent nail penetration
- Monitoreo: LFTs basal y a las 6 semanas | Monitoring: baseline and 6-week LFTs
- Pocas interacciones CYP450 | Few CYP450 interactions

### Azoles (itraconazol, fluconazol)
- Inhiben 14-alpha-demetilasa (CYP51) | Inhibit 14-alpha-demethylase (CYP51)
- Fungistaticos | Fungistatic
- MULTIPLES interacciones CYP3A4 | MULTIPLE CYP3A4 interactions
- Itraconazol: requiere medio acido para absorcion (cuidado con IBP) | Requires acidic medium for absorption (caution with PPI)

### Griseofulvina
- Inhibe mitosis fungica (union a microtubulos) | Inhibits fungal mitosis (microtubule binding)
- Absorcion aumentada con comida grasa | Absorption increased with fatty food
- Estandar para tinea capitis en ninos | Standard for tinea capitis in children
- Inductor de CYP: reduce efecto de warfarina, anticonceptivos | CYP inducer: reduces warfarin, contraceptive effect

## Virologia avanzada | Advanced Virology

### VHS — Latencia y reactivacion | HSV — Latency and Reactivation
- Latencia en ganglios sensoriales (trigemino para oral, sacro para genital) | Latency in sensory ganglia (trigeminal for oral, sacral for genital)
- Genoma episomal en nucleo neuronal | Episomal genome in neuronal nucleus
- Transcritos asociados a latencia (LAT): regulan mantenimiento de latencia | Latency-associated transcripts (LAT): regulate latency maintenance
- Reactivacion: virus viaja anterogrado por el axon | Reactivation: virus travels anterograde along axon
- Diseminacion viral asintomatica (viral shedding) ocurre incluso sin lesiones visibles | Asymptomatic viral shedding occurs even without visible lesions

### VPH — Oncogenia | HPV — Oncogenesis
- Tipos de bajo riesgo (6, 11): verrugas, condilomas | Low-risk types (6, 11): warts, condylomata
- Tipos de alto riesgo (16, 18): cancer cervical, orofaringeo, anal | High-risk types (16, 18): cervical, oropharyngeal, anal cancer
- Oncoproteinas E6 (degrada p53) y E7 (inactiva Rb) | E6 (degrades p53) and E7 (inactivates Rb) oncoproteins
- Vacunacion: Gardasil 9 (9 tipos VPH) — prevencion primaria | Vaccination: Gardasil 9 — primary prevention

## Infecciones en inmunosuprimidos | Infections in Immunosuppressed

### VIH y piel | HIV and Skin
- Candidiasis oral: marcador de inmunosupresion | Oral candidiasis: immunosuppression marker
- Herpes cronico ulcerativo | Chronic ulcerative herpes
- Molusco contagioso gigante y extenso | Giant, extensive molluscum contagiosum
- Angiomatosis bacilar (Bartonella) | Bacillary angiomatosis (Bartonella)
- Criptococosis cutanea (lesiones tipo molusco) | Cutaneous cryptococcosis (molluscum-like lesions)

### Trasplante de organo | Organ Transplant
- Verrugas extensas y recalcitrantes | Extensive, recalcitrant warts
- CEC cutaneo (65-250x riesgo) | Cutaneous SCC (65-250x risk)
- Infecciones fungicas oportunistas profundas | Deep opportunistic fungal infections`,
      keyTerms: [
        { term: 'PVL (Leucocidina Panton-Valentine)', definition: 'Toxina producida por ciertas cepas de S. aureus (CA-MRSA); asociada con abscesos necroticos y neumonia necrotizante. | Toxin from certain S. aureus strains (CA-MRSA); associated with necrotic abscesses and necrotizing pneumonia.' },
        { term: 'Biofilm | Biopelicula', definition: 'Comunidad bacteriana adherente rodeada de matriz extracelular; altamente resistente a antibioticos y al sistema inmune. | Adherent bacterial community surrounded by extracellular matrix; highly resistant to antibiotics and immune system.' },
        { term: 'D-test', definition: 'Prueba de laboratorio que detecta resistencia inducible a clindamicina en estafilococos. | Laboratory test detecting inducible clindamycin resistance in staphylococci.' },
        { term: 'Escualeno epoxidasa | Squalene epoxidase', definition: 'Enzima fungica inhibida por terbinafina; esencial para sintesis de ergosterol de la membrana. | Fungal enzyme inhibited by terbinafine; essential for membrane ergosterol synthesis.' },
        { term: 'LAT (Transcritos asociados a latencia)', definition: 'ARN viral del VHS expresados durante latencia que regulan el mantenimiento del estado latente. | HSV viral RNA expressed during latency regulating maintenance of latent state.' },
        { term: 'E6/E7 (oncoproteinas VPH)', definition: 'Proteinas virales del VPH que degradan p53 (E6) e inactivan Rb (E7), promoviendo carcinogenesis. | HPV viral proteins degrading p53 (E6) and inactivating Rb (E7), promoting carcinogenesis.' },
      ],
      clinicalNotes: 'Solicitar D-test si clindamicina muestra susceptibilidad con eritromicina-resistente para detectar resistencia inducible. PVL positivo en CA-MRSA asociado con infecciones mas severas. Terbinafina tiene menos interacciones CYP450 que azoles; preferida para onicomicosis. Griseofulvina induce CYP: ajustar warfarina y anticonceptivos. El viral shedding asintomatico del VHS tiene implicaciones para transmision y terapia supresiva. Gardasil 9 previene VPH oncogenico. En inmunosuprimidos, las infecciones cutaneas pueden tener presentaciones atipicas. | Order D-test if clindamycin susceptible with erythromycin-resistant to detect inducible resistance. PVL-positive CA-MRSA associated with more severe infections. Terbinafine has fewer CYP450 interactions than azoles; preferred for onychomycosis. Griseofulvin induces CYP: adjust warfarin and contraceptives. Asymptomatic HSV shedding has implications for transmission and suppressive therapy. Gardasil 9 prevents oncogenic HPV. In immunosuppressed, skin infections may have atypical presentations.',
    },

    5: {
      level: 5,
      summary:
        'La investigacion en infecciones cutaneas se centra en terapia de fagos, peptidos antimicrobianos, modulacion del microbioma, resistencia antimicrobiana emergente y vacunas terapeuticas. La histopatologia de infecciones cutaneas muestra patrones diagnosticos especificos. Los biomarcadores moleculares (procalcitonina, PCR multiplex) mejoran el diagnostico. La inmunoterapia contra VPH y VHS representa un paradigma emergente. El sindrome inflamatorio de reconstitucion inmune (IRIS) es una consideracion critica en pacientes VIH. | Skin infection research focuses on phage therapy, antimicrobial peptides, microbiome modulation, emerging antimicrobial resistance, and therapeutic vaccines. Skin infection histopathology shows specific diagnostic patterns. Molecular biomarkers (procalcitonin, multiplex PCR) improve diagnosis. Immunotherapy against HPV and HSV represents an emerging paradigm. Immune reconstitution inflammatory syndrome (IRIS) is a critical consideration in HIV patients.',
      explanation: `## Investigacion y terapias emergentes | Emerging Research and Therapies

### Terapia de fagos | Phage Therapy
- Bacteriofagos especificos contra S. aureus (incluyendo MRSA) | S. aureus-specific bacteriophages (including MRSA)
- Uso compasivo en infecciones resistentes | Compassionate use in resistant infections
- Ventajas: especificidad, sin resistencia cruzada con antibioticos | Advantages: specificity, no cross-resistance with antibiotics
- Desafios: regulacion, estandarizacion, farmacocinetica | Challenges: regulation, standardization, pharmacokinetics

### Peptidos antimicrobianos (AMP) | Antimicrobial Peptides
- Defensinas, catelicidinas (LL-37): defensa innata de la piel | Defensins, cathelicidins: innate skin defense
- LL-37 disminuido en dermatitis atopica → susceptibilidad a infecciones | LL-37 decreased in AD → infection susceptibility
- LL-37 aumentado en psoriasis → proteccion relativa contra infecciones | LL-37 increased in psoriasis → relative infection protection
- AMP sinteticos en desarrollo para uso topico | Synthetic AMPs in development for topical use

### Modulacion del microbioma | Microbiome Modulation
- Disbiosis: reduccion de diversidad microbiana → dominancia de patogenos | Dysbiosis: reduced microbial diversity → pathogen dominance
- Probioticos topicos: Staphylococcus epidermidis, Staphylococcus hominis | Topical probiotics
- Trasplante de microbioma cutaneo en ensayos clinicos | Skin microbiome transplant in clinical trials
- Prebioticos: sustratos que favorecen comensales beneficiosos | Prebiotics: substrates favoring beneficial commensals

### Vacunas terapeuticas | Therapeutic Vaccines
- Vacuna terapeutica contra VHS: en multiples ensayos fase II/III | Therapeutic HSV vaccine: in multiple phase II/III trials
- Estrategias: proteinas recombinantes, ARNm, vectores virales | Strategies: recombinant proteins, mRNA, viral vectors
- Vacuna contra VPH terapeutica para verrugas recalcitrantes | Therapeutic HPV vaccine for recalcitrant warts

## Histopatologia de infecciones cutaneas | Skin Infection Histopathology

### Patrones histopatologicos | Histopathologic Patterns

| Infeccion | Hallazgo clave | Infection | Key finding |
|-----------|---------------|-----------|-------------|
| Impetigo | Pustula subcornea, neutrofilos | Impetigo | Subcorneal pustule, neutrophils |
| Celulitis | Infiltrado neutrofilico difuso en dermis | Cellulitis | Diffuse neutrophilic dermal infiltrate |
| VHS | Degeneracion balonizante, celulas gigantes multinucleadas, nucleos de vidrio esmerilado | HSV | Ballooning degeneration, multinucleated giant cells, ground-glass nuclei |
| Dermatofitosis | Hifas en estrato corneo (PAS+); espongiosis | Dermatophytosis | Hyphae in stratum corneum (PAS+); spongiosis |
| VPH (verruga) | Hiperqueratosis, papilomatosis, coilocitos | HPV (wart) | Hyperkeratosis, papillomatosis, koilocytes |
| Molusco contagioso | Cuerpos de Henderson-Patterson (inclusiones citoplasmicas eosinofilicas) | Molluscum | Henderson-Patterson bodies (eosinophilic cytoplasmic inclusions) |

## Resistencia antimicrobiana emergente | Emerging Antimicrobial Resistance

### Tendencias globales | Global Trends
- MRSA: prevalencia variable (10-70% de S. aureus segun region) | MRSA: variable prevalence (10-70% of S. aureus by region)
- VRSA (vancomicina-resistente): raro pero emergente | VRSA (vancomycin-resistant): rare but emerging
- Dermatofitos resistentes a terbinafina: emergentes en India (T. indotineae) | Terbinafine-resistant dermatophytes: emerging in India (T. indotineae)
- Aciclovir-resistente: 5% en inmunosuprimidos | Acyclovir-resistant: 5% in immunosuppressed

### T. indotineae (antes T. mentagrophytes genotipo VIII) | T. indotineae
- Nueva especie dermatofito resistente a terbinafina | New terbinafine-resistant dermatophyte species
- Originada en India, diseminacion global | Originated in India, global spread
- Resistencia a terbinafina por mutaciones en gen de escualeno epoxidasa | Terbinafine resistance via squalene epoxidase gene mutations
- Tratamiento: itraconazol; duracion prolongada | Treatment: itraconazole; prolonged duration
- Implicaciones para protocolos de tratamiento de dermatofitosis | Implications for dermatophytosis treatment protocols

## Diagnostico molecular | Molecular Diagnostics
- PCR multiplex: identifica multiples patogenos en una muestra | Identifies multiple pathogens in one sample
- MALDI-TOF: identificacion rapida de patogenos cultivados | Rapid identification of cultured pathogens
- Secuenciacion de nueva generacion (NGS): perfilado del microbioma | Next-generation sequencing: microbiome profiling
- Pruebas de susceptibilidad molecular: deteccion rapida de mecA, vanA | Rapid detection of resistance genes

## IRIS (Sindrome inflamatorio de reconstitucion inmune) | IRIS
- Empeoramiento paradojico de infecciones cutaneas al iniciar HAART en VIH | Paradoxical worsening of skin infections when starting HAART in HIV
- Herpes zoster, molusco contagioso, verrugas pueden empeorar dramáticamente | Herpes zoster, molluscum, warts may worsen dramatically
- Manejo: continuar HAART + tratar la infeccion; corticosteroides si severo | Management: continue HAART + treat infection; corticosteroids if severe`,
      keyTerms: [
        { term: 'Terapia de fagos | Phage therapy', definition: 'Uso de bacteriofagos (virus que infectan bacterias) para tratar infecciones resistentes a antibioticos. | Use of bacteriophages (viruses that infect bacteria) to treat antibiotic-resistant infections.' },
        { term: 'T. indotineae', definition: 'Nueva especie de dermatofito resistente a terbinafina; emergente globalmente desde India. | New terbinafine-resistant dermatophyte species; emerging globally from India.', pronunciation: 'in-doh-tin-EE-ay' },
        { term: 'Coilocitos | Koilocytes', definition: 'Celulas con halo perinuclear y nucleo arrugado; hallazgo histopatologico patognomonico de infeccion por VPH. | Cells with perinuclear halo and wrinkled nucleus; pathognomonic histopathologic finding of HPV infection.' },
        { term: 'IRIS', definition: 'Sindrome inflamatorio de reconstitucion inmune; empeoramiento paradojico de infecciones al restaurar inmunidad en VIH. | Immune reconstitution inflammatory syndrome; paradoxical worsening of infections when restoring immunity in HIV.' },
        { term: 'LL-37 (Catelicidina)', definition: 'Peptido antimicrobiano clave de la inmunidad innata cutanea; disminuido en DA, aumentado en psoriasis. | Key antimicrobial peptide of cutaneous innate immunity; decreased in AD, increased in psoriasis.' },
        { term: 'MALDI-TOF', definition: 'Espectrometria de masas para identificacion rapida de microorganismos cultivados. | Mass spectrometry for rapid identification of cultured microorganisms.' },
      ],
      clinicalNotes: 'T. indotineae resistente a terbinafina es una amenaza emergente global; itraconazol es alternativa. La terapia de fagos es prometedora para MRSA recalcitrante. Los AMP (LL-37) explican diferencias en susceptibilidad a infecciones entre DA (baja LL-37) y psoriasis (alta LL-37). Los coilocitos son patognomonicos de VPH en histopatologia. IRIS debe considerarse en pacientes VIH que empeoran al iniciar HAART. PCR multiplex y NGS estan transformando el diagnostico de infecciones cutaneas complejas. La resistencia al aciclovir en VHS inmunosuprimidos requiere foscarnet o cidofovir. | Terbinafine-resistant T. indotineae is an emerging global threat; itraconazole is alternative. Phage therapy is promising for recalcitrant MRSA. AMPs (LL-37) explain infection susceptibility differences between AD (low LL-37) and psoriasis (high LL-37). Koilocytes are pathognomonic for HPV in histopathology. IRIS must be considered in HIV patients worsening on HAART. Multiplex PCR and NGS are transforming complex skin infection diagnosis. Acyclovir resistance in immunosuppressed HSV requires foscarnet or cidofovir.',
    },
  },

  media: [],

  citations: [
    {
      id: 'idsa-skin-soft-tissue',
      type: 'guideline',
      title: 'Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections',
      authors: ['Stevens, D.L.', 'et al.'],
      source: 'Clinical Infectious Diseases (IDSA)',
    },
    {
      id: 'fitzpatrick-infections',
      type: 'textbook',
      title: 'Fitzpatrick\'s Dermatology, 9th Edition — Cutaneous Infections',
      authors: ['Kang, S.', 'Amagai, M.'],
      source: 'McGraw-Hill Education',
    },
    {
      id: 'arenas-infecciones',
      type: 'textbook',
      title: 'Dermatologia: Atlas, diagnostico y tratamiento, 7a edicion — Infecciones Cutaneas',
      authors: ['Arenas, R.'],
      source: 'McGraw-Hill Interamericana',
    },
    {
      id: 't-indotineae-jama',
      type: 'article',
      title: 'Terbinafine-Resistant Dermatophytosis — Global Emergence of T. indotineae',
      authors: ['Uhrlass, S.', 'et al.'],
      source: 'JAMA Dermatology',
    },
  ],

  crossReferences: [
    { targetId: 'derm-cicatrizacion-heridas-wound-healing', targetType: 'process', relationship: 'related', label: 'Cicatrizacion de heridas | Wound healing' },
    { targetId: 'derm-dermatitis-eczema', targetType: 'condition', relationship: 'see-also', label: 'Dermatitis y eccema | Dermatitis and eczema' },
    { targetId: 'dermatology-skin-anatomy', targetType: 'structure', relationship: 'parent', label: 'Anatomia de la piel | Skin anatomy' },
    { targetId: 'derm-cancer-piel-skin-cancer', targetType: 'condition', relationship: 'see-also', label: 'Cancer de piel | Skin cancer' },
  ],

  tags: {
    systems: ['integumentary', 'immune'],
    topics: ['dermatology', 'infectious-disease', 'microbiology'],
    keywords: [
      'infecciones cutaneas', 'skin infections',
      'celulitis', 'cellulitis', 'impetigo',
      'tina', 'tinea', 'dermatofitosis', 'dermatophytosis',
      'herpes', 'VHS', 'HSV', 'VPH', 'HPV', 'verrugas', 'warts',
      'MRSA', 'SARM', 'fasciitis necrotizante',
      'onicomicosis', 'onychomycosis',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};

export default infeccionesCutaneasSkinInfections;
