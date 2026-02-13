/**
 * Psoriasis - Contenido Educativo Bilingüe (Español / English)
 *
 * Enfermedad autoinmune crónica de la piel que causa parches escamosos y rojos.
 * Chronic autoimmune skin disease causing scaly, red patches.
 *
 * Covers: types, pathophysiology, treatment, biologics
 */

import { EducationalContent } from '../../types';

export const psoriasisEsContent: EducationalContent = {
  id: 'condition-psoriasis',
  type: 'condition',
  name: 'Psoriasis',
  nameEs: 'Psoriasis',
  alternateNames: ['Psoriasis en Placas', 'Plaque Psoriasis', 'PsO', 'Soriasis'],

  levels: {
    1: {
      level: 1,
      summary: 'La psoriasis es una enfermedad de la piel que causa parches rojos y escamosos. Ocurre cuando el sistema inmunitario ataca por error las células sanas de la piel, haciendo que crezcan demasiado rápido. | Psoriasis is a skin disease that causes red, scaly patches. It happens when the immune system mistakenly attacks healthy skin cells, causing them to grow too fast.',
      explanation: `## Explicación

### ¿Qué es la psoriasis?

La psoriasis es una enfermedad crónica (de larga duración) que causa parches con picazón y escamas en la piel. Estos parches pueden aparecer en cualquier parte, pero son más comunes en los codos, las rodillas, el cuero cabelludo y la espalda baja.

### ¿Cómo se ve?

- Parches rojos de piel cubiertos con escamas gruesas y plateadas
- Piel seca y agrietada que puede sangrar
- Picazón o sensación de ardor
- Uñas engrosadas o con hoyuelos
- A veces, articulaciones hinchadas y rígidas

### Tipos de psoriasis

**Psoriasis en placas (la más común):**
- Parches elevados y rojos con escamas plateadas
- Generalmente en codos, rodillas, cuero cabelludo y espalda

**Psoriasis guttata (en gotas):**
- Lesiones pequeñas en forma de gota
- A menudo aparece después de una infección de garganta por estreptococo
- Común en niños y adultos jóvenes

**Psoriasis inversa:**
- Parches lisos y rojos en los pliegues de la piel
- Debajo de los senos, en la ingle, en las axilas

**Psoriasis pustulosa:**
- Ampollas blancas llenas de pus
- Rodeadas de piel roja

**Psoriasis eritrodérmica (rara y grave):**
- Enrojecimiento intenso en la mayor parte del cuerpo
- Puede ser potencialmente mortal

### ¿Qué la causa?

- Problema del sistema inmunitario (autoinmune)
- Genética (es hereditaria, se da en familias)
- Desencadenantes: estrés, lesiones en la piel, infecciones, ciertos medicamentos
- NO es contagiosa (no se puede transmitir de persona a persona)

### Tratamiento

- Cremas y ungüentos medicados
- Terapia con luz (fototerapia)
- Medicamentos que afectan el sistema inmunitario
- Evitar los factores desencadenantes

---
## Explanation

### What is psoriasis?

Psoriasis is a chronic (long-lasting) disease that causes itchy, scaly patches on the skin. These patches can appear anywhere but are most common on the elbows, knees, scalp, and lower back.

### What does it look like?

- Red patches of skin covered with thick, silvery scales
- Dry, cracked skin that may bleed
- Itching or burning sensation
- Thickened or pitted nails
- Sometimes swollen and stiff joints

### Types of psoriasis

**Plaque psoriasis (most common):**
- Raised, red patches with silvery scales
- Usually on elbows, knees, scalp, and back

**Guttate psoriasis:**
- Small, drop-shaped lesions
- Often triggered by strep throat
- Common in children and young adults

**Inverse psoriasis:**
- Smooth, red patches in skin folds
- Under breasts, groin, armpits

**Pustular psoriasis:**
- White pus-filled blisters
- Surrounded by red skin

**Erythrodermic psoriasis (rare, serious):**
- Fiery redness over most of body
- Can be life-threatening

### What causes it?

- Immune system problem (autoimmune)
- Genetics (runs in families)
- Triggers: stress, skin injury, infections, certain medications
- NOT contagious (you cannot catch it)

### Treatment

- Medicated creams and ointments
- Light therapy (phototherapy)
- Medications that affect the immune system
- Avoiding triggers`,
      keyTerms: [
        { term: 'Autoinmune / Autoimmune', definition: 'Cuando el sistema inmunitario ataca las propias células sanas del cuerpo. | When the immune system attacks the body\'s own healthy cells.' },
        { term: 'Placa / Plaque', definition: 'Parche elevado y rojo de piel con escamas. | Raised, red patch of skin with scales.' },
        { term: 'Escamas / Scales', definition: 'Células muertas de la piel que se forman en la superficie. | Dead skin cells that form on the skin surface.' },
        { term: 'Contagioso / Contagious', definition: 'Que puede transmitirse de persona a persona (la psoriasis NO lo es). | Can spread from person to person (psoriasis is NOT).' },
        { term: 'Crónico / Chronic', definition: 'Enfermedad de larga duración que no desaparece por completo. | Long-lasting disease that does not go away completely.' },
      ],
      analogies: [
        'Las placas de psoriasis son como costras que siguen formándose y no sanan. | Psoriasis plaques are like scabs that keep forming and do not heal.',
        'La autoinmunidad es como si el sistema de defensa de tu cuerpo te atacara por error. | Autoimmunity is like your body\'s defense system attacking you by mistake.',
        'La piel con psoriasis se renueva en 3-4 días en lugar de 28-30 días, como una fábrica acelerada. | Psoriatic skin renews in 3-4 days instead of 28-30 days, like a factory in overdrive.',
      ],
      examples: [
        'Persona con parches rojos y escamosos en codos y rodillas. | Person with red, scaly patches on elbows and knees.',
        'Niño con psoriasis guttata después de una faringitis estreptocócica. | Child with guttate psoriasis after strep throat.',
        'Alguien con psoriasis debajo de los senos y en la zona inguinal. | Someone with psoriasis under breasts and in the groin area.',
      ],
      patientCounselingPoints: [
        'La psoriasis NO es contagiosa; nadie puede contagiarse de ti. | Psoriasis is NOT contagious; no one can catch it from you.',
        'Es una enfermedad crónica, pero se puede controlar con el tratamiento adecuado. | It is a chronic disease, but it can be managed with proper treatment.',
        'Evita rascarte, ya que puede empeorar las lesiones (fenómeno de Koebner). | Avoid scratching, as it can worsen lesions (Koebner phenomenon).',
        'Usa cremas hidratantes sin fragancia a diario para mantener la piel suave. | Use fragrance-free moisturizers daily to keep skin soft.',
      ],
    },

    2: {
      level: 2,
      summary: 'La psoriasis es una enfermedad crónica inmunomediada que afecta al 2-3% de la población. El tratamiento se basa en la gravedad y el porcentaje de superficie corporal afectada (BSA). | Psoriasis is a chronic immune-mediated disease affecting 2-3% of the population. Treatment is based on severity and body surface area (BSA) involvement.',
      explanation: `## Explicación

### Características clínicas

**Distribución típica:**
- Superficies extensoras (codos, rodillas)
- Cuero cabelludo
- Espalda baja (sacro)
- Ombligo (umbilico)
- Pliegue interglúteo

**Cambios en las uñas:**
- Hoyuelos (pitting) — pequeñas depresiones
- Onicolisis — desprendimiento de la uña del lecho ungueal
- Manchas de aceite — decoloración amarillenta
- Hiperqueratosis subungueal

**Fenómeno de Koebner:**
- Aparición de lesiones nuevas en zonas de trauma
- Rascado, cortes o quemaduras solares pueden desencadenarlo

### Evaluación de gravedad

**Superficie corporal afectada (BSA):**
- Leve: <3% BSA
- Moderada: 3-10% BSA
- Grave: >10% BSA

**Índice PASI (Psoriasis Area and Severity Index):**
- Combina eritema, descamación y grosor
- Escala de 0 a 72

**DLQI (Dermatology Life Quality Index):**
- Mide el impacto en la calidad de vida diaria
- Puntuación >10 indica impacto significativo

### Tratamiento según gravedad

**Leve (<3% BSA):**
- Corticosteroides tópicos
- Análogos de vitamina D (calcipotriol)
- Retinoides tópicos (tazaroteno)
- Queratolíticos (ácido salicílico)

**Moderada (3-10% BSA):**
- Fototerapia (UVB, PUVA)
- Retinoides sistémicos (acitretina)
- Metotrexato
- Apremilast

**Grave (>10% BSA):**
- Agentes biológicos (anti-TNF, anti-IL-17, anti-IL-23)
- Agentes sistémicos avanzados

---
## Explanation

### Clinical Features

**Typical distribution:**
- Extensor surfaces (elbows, knees)
- Scalp
- Lower back (sacrum)
- Umbilicus
- Intergluteal cleft

**Nail changes:**
- Pitting — small depressions
- Onycholysis — lifting of nail from nail bed
- Oil spots — yellow discoloration
- Subungual hyperkeratosis

**Koebner phenomenon:**
- New lesions at sites of trauma
- Scratching, cuts, sunburn can trigger it

### Severity Assessment

**Body Surface Area (BSA):**
- Mild: <3% BSA
- Moderate: 3-10% BSA
- Severe: >10% BSA

**PASI Score (Psoriasis Area and Severity Index):**
- Combines erythema, scaling, and thickness
- Scale of 0 to 72

**DLQI (Dermatology Life Quality Index):**
- Measures impact on daily quality of life
- Score >10 indicates significant impact

### Treatment by Severity

**Mild (<3% BSA):**
- Topical corticosteroids
- Vitamin D analogs (calcipotriene)
- Topical retinoids (tazarotene)
- Keratolytics (salicylic acid)

**Moderate (3-10% BSA):**
- Phototherapy (UVB, PUVA)
- Systemic retinoids (acitretin)
- Methotrexate
- Apremilast

**Severe (>10% BSA):**
- Biologic agents (anti-TNF, anti-IL-17, anti-IL-23)
- Advanced systemic agents`,
      keyTerms: [
        { term: 'Fenómeno de Koebner / Koebner phenomenon', definition: 'Aparición de lesiones de psoriasis nuevas en sitios de lesión cutánea. | New psoriasis lesions forming at sites of skin injury.' },
        { term: 'Onicolisis / Onycholysis', definition: 'Separación de la placa ungueal del lecho de la uña. | Separation of nail plate from nail bed.' },
        { term: 'PASI', definition: 'Índice de Área y Gravedad de Psoriasis — medida estándar de la gravedad de la enfermedad. | Psoriasis Area and Severity Index — standard measure of disease severity.' },
        { term: 'Fototerapia / Phototherapy', definition: 'Tratamiento que utiliza luz ultravioleta para reducir la inflamación. | Treatment using ultraviolet light to reduce inflammation.' },
        { term: 'Calcipotriol / Calcipotriene', definition: 'Análogo de vitamina D tópico que ralentiza el crecimiento celular de la piel. | Topical vitamin D analog that slows skin cell growth.' },
      ],
      analogies: [
        'El fenómeno de Koebner es como plantar semillas en suelo perturbado: donde hay daño, crece psoriasis. | The Koebner phenomenon is like planting seeds in disturbed soil: where there is damage, psoriasis grows.',
        'El BSA es como medir qué porcentaje de tu cuerpo está afectado, usando la palma de la mano como referencia (~1%). | BSA is like measuring what percentage of your body is affected, using your palm as a reference (~1%).',
      ],
      examples: [
        'Paciente con placas que cubren el 8% del cuerpo inicia fototerapia. | Patient with plaques covering 8% of the body starts phototherapy.',
        'Persona con hoyuelos en las uñas y onicolisis tiene enfermedad ungueal psoriásica. | Person with nail pitting and onycholysis has psoriatic nail disease.',
        'Alguien que desarrolla placas nuevas en el sitio de un tatuaje (Koebner). | Someone who develops new plaques at the site of a tattoo (Koebner).',
      ],
      patientCounselingPoints: [
        'Se debe evaluar a todos los pacientes con psoriasis para detectar artritis psoriásica (preguntar sobre dolor articular, rigidez). | All psoriasis patients should be screened for psoriatic arthritis (ask about joint pain, stiffness).',
        'El riesgo cardiovascular está aumentado — se recomienda dejar de fumar, controlar el peso y la presión arterial. | Cardiovascular risk is increased — smoking cessation, weight management, and blood pressure control are recommended.',
        'Evitar los corticosteroides sistémicos — pueden causar un brote de rebote. | Avoid systemic steroids — they can cause rebound flare.',
      ],
    },

    3: {
      level: 3,
      summary: 'El tratamiento de la psoriasis ha sido revolucionado por los agentes biológicos dirigidos contra TNF, IL-17 e IL-23. La terapia agresiva temprana puede prevenir el daño articular en la artritis psoriásica. | Psoriasis treatment has been revolutionized by biologic agents targeting TNF, IL-17, and IL-23. Early aggressive therapy may prevent joint damage in psoriatic arthritis.',
      explanation: `## Explicación

### Terapias biológicas

**Agentes anti-TNF:**
- Adalimumab (Humira): 40 mg cada 2 semanas
- Etanercept (Enbrel): 50 mg semanal
- Infliximab (Remicade): 5 mg/kg cada 8 semanas
- Certolizumab (Cimzia): 400 mg cada 2-4 semanas

**Agentes anti-IL-17:**
- Secukinumab (Cosentyx): 300 mg cada 4 semanas
- Ixekizumab (Taltz): 80 mg cada 4 semanas
- Brodalumab (Siliq): 210 mg cada 2 semanas
- Bimekizumab (Bimzelx): 320 mg cada 4-8 semanas (anti-IL-17A/F)

**Agentes anti-IL-23:**
- Guselkumab (Tremfya): 100 mg cada 8 semanas
- Risankizumab (Skyrizi): 150 mg cada 12 semanas
- Tildrakizumab (Ilumya): 100 mg cada 12 semanas

**Anti-IL-12/23:**
- Ustekinumab (Stelara): 45-90 mg cada 12 semanas

### Sistémicos convencionales

**Metotrexato:**
- 10-25 mg semanal (oral o subcutáneo)
- Suplementación con ácido fólico obligatoria
- Monitoreo: hemograma, pruebas hepáticas, función renal
- Contraindicado en embarazo y enfermedad hepática significativa

**Acitretina:**
- 25-50 mg diario
- Teratogénico — anticoncepción durante 3 años después de suspender
- Efectos secundarios: hiperlipidemia, sequedad mucocutánea

**Apremilast (Otezla):**
- Inhibidor de PDE4
- 30 mg dos veces al día (titulación inicial)
- No requiere monitoreo de laboratorio
- Efectos secundarios comunes: diarrea, náuseas, cefalea

### Fototerapia

**UVB de banda estrecha (NB-UVB):**
- 2-3 veces por semana
- Primera línea para enfermedad moderada
- Sin inmunosupresión sistémica
- Puede combinarse con tópicos

**PUVA (Psoraleno + UVA):**
- Más eficaz pero mayor riesgo de cáncer de piel
- Requiere protección ocular post-tratamiento
- Uso limitado por efectos adversos a largo plazo

---
## Explanation

### Biologic Therapies

**Anti-TNF agents:**
- Adalimumab (Humira): 40 mg every 2 weeks
- Etanercept (Enbrel): 50 mg weekly
- Infliximab (Remicade): 5 mg/kg every 8 weeks
- Certolizumab (Cimzia): 400 mg every 2-4 weeks

**Anti-IL-17 agents:**
- Secukinumab (Cosentyx): 300 mg every 4 weeks
- Ixekizumab (Taltz): 80 mg every 4 weeks
- Brodalumab (Siliq): 210 mg every 2 weeks
- Bimekizumab (Bimzelx): 320 mg every 4-8 weeks (anti-IL-17A/F)

**Anti-IL-23 agents:**
- Guselkumab (Tremfya): 100 mg every 8 weeks
- Risankizumab (Skyrizi): 150 mg every 12 weeks
- Tildrakizumab (Ilumya): 100 mg every 12 weeks

**Anti-IL-12/23:**
- Ustekinumab (Stelara): 45-90 mg every 12 weeks

### Conventional Systemics

**Methotrexate:**
- 10-25 mg weekly (oral or subcutaneous)
- Mandatory folic acid supplementation
- Monitoring: CBC, LFTs, renal function
- Contraindicated in pregnancy and significant liver disease

**Acitretin:**
- 25-50 mg daily
- Teratogenic — contraception for 3 years after stopping
- Side effects: hyperlipidemia, mucocutaneous dryness

**Apremilast (Otezla):**
- PDE4 inhibitor
- 30 mg twice daily (initial titration)
- No laboratory monitoring required
- Common side effects: diarrhea, nausea, headache

### Phototherapy

**Narrowband UVB (NB-UVB):**
- 2-3 times per week
- First-line for moderate disease
- No systemic immunosuppression
- Can be combined with topicals

**PUVA (Psoralen + UVA):**
- More effective but higher skin cancer risk
- Requires post-treatment eye protection
- Limited use due to long-term adverse effects`,
      keyTerms: [
        { term: 'Inhibidor de PDE4 / PDE4 inhibitor', definition: 'Medicamento que bloquea la inflamación a través de la vía de la fosfodiesterasa 4. | Medication that blocks inflammation through the phosphodiesterase 4 pathway.' },
        { term: 'Teratogénico / Teratogenic', definition: 'Sustancia que causa defectos de nacimiento si se toma durante el embarazo. | Substance that causes birth defects if taken during pregnancy.' },
        { term: 'UVB de banda estrecha / Narrowband UVB', definition: 'Longitud de onda específica de luz ultravioleta B utilizada para tratar la psoriasis (311-313 nm). | Specific wavelength of ultraviolet B light used to treat psoriasis (311-313 nm).' },
        { term: 'Biológico / Biologic', definition: 'Medicamento derivado de células vivas que actúa sobre blancos específicos del sistema inmunitario. | Medication derived from living cells that targets specific immune system components.' },
        { term: 'Bimekizumab / Bimekizumab', definition: 'Biológico dual que bloquea IL-17A e IL-17F simultáneamente. | Dual biologic that blocks IL-17A and IL-17F simultaneously.' },
      ],
      analogies: [
        'Los biológicos son como misiles inteligentes que atacan proteínas inflamatorias específicas. | Biologics are like smart missiles targeting specific inflammatory proteins.',
        'El PUVA es como darle a la piel un fármaco que la hace sensible al tratamiento con luz. | PUVA is like giving the skin a drug that makes it sensitive to light treatment.',
        'El metotrexato es como un freno general del sistema inmunitario, mientras que los biológicos son llaves que apagan interruptores específicos. | Methotrexate is like a general brake on the immune system, while biologics are keys that turn off specific switches.',
      ],
      examples: [
        'Paciente inicia adalimumab por psoriasis en placas grave. | Patient starts adalimumab for severe plaque psoriasis.',
        'Mujer en edad fértil no puede tomar acitretina por su teratogenicidad prolongada. | Woman of childbearing age cannot take acitretin due to prolonged teratogenicity.',
        'Se elige fototerapia para un paciente que desea evitar medicamentos sistémicos. | Phototherapy chosen for a patient who wants to avoid systemic medications.',
      ],
      clinicalNotes: 'Antes de iniciar biológicos, hacer pruebas de tuberculosis latente (QuantiFERON/PPD) y hepatitis B. Las vacunaciones deben estar al día antes de comenzar. Las vacunas vivas están contraindicadas con biológicos. Monitorear infecciones. Eficacia: los inhibidores de IL-17/IL-23 son generalmente más efectivos que los inhibidores de TNF para el aclaramiento cutáneo. | Before starting biologics, screen for latent TB (QuantiFERON/PPD) and hepatitis B. Vaccinations should be up to date before starting. Live vaccines are contraindicated on biologics. Monitor for infections. Efficacy: IL-17/IL-23 inhibitors are generally more effective than TNF inhibitors for skin clearance.',
    },

    4: {
      level: 4,
      summary: 'La psoriasis está asociada con múltiples comorbilidades, incluyendo artritis psoriásica, enfermedad cardiovascular, síndrome metabólico y depresión. El manejo integral aborda todos los aspectos de la salud. | Psoriasis is associated with multiple comorbidities including psoriatic arthritis, cardiovascular disease, metabolic syndrome, and depression. Comprehensive management addresses all aspects of health.',
      explanation: `## Explicación

### Comorbilidades

**Artritis psoriásica (30% de pacientes):**
- Enfermedad articular inflamatoria
- Puede preceder, coincidir o seguir a la enfermedad cutánea
- Entesitis (inflamación en inserciones tendinosas)
- Dactilitis (dedos en salchicha)
- Afectación axial (columna vertebral)
- El tratamiento temprano previene el daño articular irreversible

**Síndrome metabólico:**
- Obesidad (riesgo 2 veces mayor)
- Diabetes mellitus tipo 2
- Hipertensión arterial
- Dislipidemia
- Enfermedad del hígado graso no alcohólico (EHGNA/NAFLD)

**Enfermedad cardiovascular:**
- Riesgo aumentado de infarto agudo de miocardio independiente de factores tradicionales
- La inflamación sistémica crónica promueve la aterosclerosis
- Necesidad de modificación agresiva de factores de riesgo
- La psoriasis grave es un factor de riesgo cardiovascular independiente

**Trastornos psiquiátricos:**
- Depresión (riesgo 1.5-2x aumentado)
- Ansiedad generalizada
- Ideación suicida (especialmente en enfermedad grave)
- Alteración de la imagen corporal
- Aislamiento social

**Otras comorbilidades:**
- Uveítis (inflamación ocular)
- Enfermedad inflamatoria intestinal (especialmente enfermedad de Crohn)
- Enfermedad renal crónica
- Ciertos cánceres (linfoma, cáncer de piel)

### Artritis psoriásica en detalle

**Patrones clínicos:**
- Oligoarticular (≤4 articulaciones)
- Poliarticular (≥5 articulaciones)
- Interfalángica distal predominante
- Artritis mutilante (forma grave y destructiva)
- Axial/espondilitis

**Diagnóstico:**
- Criterios CASPAR
- Psoriasis típica + artritis inflamatoria
- No existe una prueba de laboratorio específica
- Factor reumatoide negativo
- HLA-B27 frecuentemente positivo (especialmente en forma axial)

**Tratamiento:**
- AINEs para enfermedad leve
- Metotrexato como primera línea sistémica (periférica)
- Biológicos preferidos para enfermedad moderada-grave
- Los inhibidores de IL-17 son especialmente efectivos para piel y articulaciones
- Los inhibidores de IL-23 también tienen indicación en artritis psoriásica

### Manejo integral del paciente con psoriasis

- Evaluación cardiovascular periódica
- Tamizaje de diabetes y dislipidemia
- Detección de depresión y ansiedad
- Evaluación articular en cada visita
- Asesoría sobre estilo de vida (dieta, ejercicio, cesación tabáquica)

---
## Explanation

### Comorbidities

**Psoriatic arthritis (30% of patients):**
- Inflammatory joint disease
- Can precede, coincide with, or follow skin disease
- Enthesitis (inflammation at tendon insertion points)
- Dactylitis (sausage-like digits)
- Axial involvement (spine)
- Early treatment prevents irreversible joint damage

**Metabolic syndrome:**
- Obesity (2x increased risk)
- Type 2 diabetes mellitus
- Hypertension
- Dyslipidemia
- Non-alcoholic fatty liver disease (NAFLD)

**Cardiovascular disease:**
- Increased MI risk independent of traditional factors
- Chronic systemic inflammation drives atherosclerosis
- Aggressive risk factor modification needed
- Severe psoriasis is an independent cardiovascular risk factor

**Psychiatric disorders:**
- Depression (1.5-2x increased risk)
- Generalized anxiety
- Suicidal ideation (especially in severe disease)
- Body image disturbance
- Social isolation

**Other comorbidities:**
- Uveitis (eye inflammation)
- Inflammatory bowel disease (especially Crohn's disease)
- Chronic kidney disease
- Certain cancers (lymphoma, skin cancer)

### Psoriatic Arthritis in Detail

**Clinical patterns:**
- Oligoarticular (≤4 joints)
- Polyarticular (≥5 joints)
- Distal interphalangeal predominant
- Arthritis mutilans (severe destructive form)
- Axial/spondylitis

**Diagnosis:**
- CASPAR criteria
- Typical psoriasis + inflammatory arthritis
- No specific laboratory test
- Rheumatoid factor negative
- HLA-B27 often positive (especially axial form)

**Treatment:**
- NSAIDs for mild disease
- Methotrexate as first-line systemic (peripheral)
- Biologics preferred for moderate-severe
- IL-17 inhibitors especially effective for skin and joints
- IL-23 inhibitors also indicated for psoriatic arthritis

### Comprehensive Patient Management

- Periodic cardiovascular assessment
- Diabetes and dyslipidemia screening
- Depression and anxiety screening
- Joint evaluation at every visit
- Lifestyle counseling (diet, exercise, smoking cessation)`,
      keyTerms: [
        { term: 'Entesitis / Enthesitis', definition: 'Inflamación donde los tendones y ligamentos se insertan en el hueso. | Inflammation where tendons and ligaments attach to bone.' },
        { term: 'Dactilitis / Dactylitis', definition: 'Hinchazón en forma de salchicha de un dedo completo de la mano o del pie. | Sausage-like swelling of an entire finger or toe.' },
        { term: 'Artritis mutilante / Arthritis mutilans', definition: 'Artritis destructiva grave que causa resorción ósea y deformidad. | Severe destructive arthritis causing bone resorption and deformity.' },
        { term: 'HLA-B27', definition: 'Marcador genético asociado con artritis psoriásica y espondilitis anquilosante. | Genetic marker associated with psoriatic arthritis and ankylosing spondylitis.' },
        { term: 'Criterios CASPAR / CASPAR criteria', definition: 'Criterios de clasificación para artritis psoriásica que incluyen psoriasis, distrofia ungueal, dactilitis, FR negativo y cambios radiológicos. | Classification criteria for psoriatic arthritis including psoriasis, nail dystrophy, dactylitis, negative RF, and radiologic changes.' },
      ],
      analogies: [
        'La dactilitis es como un dedo que se hincha hasta parecer una salchicha. | Dactylitis is like a finger swelling up to look like a sausage.',
        'La entesitis es como tener puntos calientes dolorosos donde los músculos se insertan en el hueso. | Enthesitis is like having painful hotspots where muscles attach to bone.',
        'La psoriasis es una enfermedad sistémica disfrazada de enfermedad de la piel — el iceberg debajo de la superficie es la inflamación cardiovascular y metabólica. | Psoriasis is a systemic disease disguised as a skin disease — the iceberg beneath the surface is cardiovascular and metabolic inflammation.',
      ],
      examples: [
        'Paciente con psoriasis cutánea desarrolla dedos hinchados y dolorosos (artritis psoriásica). | Patient with skin psoriasis develops swollen, painful fingers (psoriatic arthritis).',
        'Persona con psoriasis tiene enzimas hepáticas elevadas por EHGNA. | Person with psoriasis has elevated liver enzymes from NAFLD.',
        'Alguien con psoriasis sufre un infarto de miocardio a edad temprana. | Someone with psoriasis has a myocardial infarction at a young age.',
      ],
      clinicalNotes: 'Tamizar a todos los pacientes con psoriasis para artritis psoriásica en cada consulta: preguntar sobre dolor, rigidez e hinchazón articular. El diagnóstico temprano es crítico para prevenir daño articular. Tratar al objetivo: actividad mínima de enfermedad (MDA) o remisión. La colaboración entre dermatología y reumatología es esencial. Considerar el impacto psicológico y ofrecer apoyo. | Screen all psoriasis patients for PsA at every visit: ask about joint pain, stiffness, and swelling. Early diagnosis is critical to prevent joint damage. Treat to target: minimal disease activity (MDA) or remission. Dermatology and rheumatology collaboration essential. Consider psychological impact and offer support.',
    },

    5: {
      level: 5,
      summary: 'La patogénesis de la psoriasis involucra predisposición genética (HLA-C*06:02), desregulación inmunitaria (eje Th17) y desencadenantes ambientales. La terapia biológica dirigida ha transformado los resultados clínicos. | Psoriasis pathogenesis involves genetic predisposition (HLA-C*06:02), immune dysregulation (Th17 axis), and environmental triggers. Targeted biologic therapy has transformed clinical outcomes.',
      explanation: `## Explicación

### Patogénesis molecular

**Factores genéticos:**
- HLA-C*06:02 (locus PSORS1) — factor de riesgo genético más fuerte
- Herencia poligénica con más de 80 loci identificados
- 10% de riesgo si un padre está afectado; 50% si ambos padres
- Concordancia en gemelos monocigóticos: ~70%
- Genes asociados: IL12B, IL23R, TNFAIP3, CARD14, NF-kB pathway genes

**Cascada inmunológica:**
1. Células dendríticas plasmacitoides activadas producen interferón alfa
2. Células dendríticas mieloides producen IL-23 e IL-12
3. IL-23 estimula la diferenciación y expansión de células Th17
4. Células Th17 liberan IL-17A, IL-17F, IL-22, TNF-alfa
5. IL-17 activa queratinocitos → hiperproliferación epidérmica
6. IL-22 promueve acantosis (engrosamiento epidérmico)
7. TNF amplifica la cascada inflamatoria
8. Angiogénesis y reclutamiento de células inflamatorias
9. Neutrófilos forman microabscesos de Munro

**Ciclo de retroalimentación:**
- Los queratinocitos activados producen más quimiocinas (CCL20, CXCL1)
- Reclutan más células Th17 y neutrófilos
- Perpetuando el ciclo inflamatorio
- Las células de memoria residentes en tejido mantienen la enfermedad incluso después de resolución clínica

**Desencadenantes ambientales:**
- Estrés psicológico (vía eje hipotálamo-pituitaria-adrenal)
- Trauma cutáneo (Koebner) — activación de células dendríticas dérmicas
- Infecciones (estreptococo del grupo A → psoriasis guttata vía mimetismo molecular)
- Fármacos: betabloqueadores, litio, antipalúdicos, interferón, inhibidores de checkpoint
- Alcohol y tabaquismo (proinflamatorios)
- Obesidad (tejido adiposo como fuente de citocinas proinflamatorias)

### Evolución del tratamiento

**Era pre-biológicos:**
- Alquitrán de hulla, ácido salicílico
- Ditranol (antralina)
- Fototerapia como pilar del tratamiento
- Metotrexato para enfermedad grave
- Ciclosporina (uso limitado a corto plazo)
- Eficacia limitada, toxicidad significativa

**Era de biológicos:**
- Anti-TNF (década de 2000): primera revolución
- Anti-IL-12/23 — ustekinumab (2009)
- Anti-IL-17 (2015+): secukinumab, ixekizumab, brodalumab
- Anti-IL-23 (2018+): guselkumab, risankizumab, tildrakizumab
- Anti-IL-17A/F: bimekizumab (2023) — mayor eficacia en PASI 100
- Respuesta PASI 75: 50-80% con anti-TNF; 80-90% con anti-IL-17/23
- PASI 90/100 cada vez más alcanzable como objetivo terapéutico

### Direcciones futuras e investigación

**Terapias orales avanzadas:**
- Deucravacitinib (inhibidor de TYK2) — aprobado 2022
- Selectividad por TYK2 vs. otros JAK → mejor perfil de seguridad
- Inhibidores de JAK (tofacitinib, upadacitinib) — usados off-label, preocupaciones de seguridad

**Medicina personalizada:**
- Farmacogenómica para predecir respuesta al tratamiento
- HLA-C*06:02 predice mejor respuesta a ustekinumab
- Biomarcadores séricos (IL-17, S100A8/A9) para monitoreo
- Selección de terapia guiada por biomarcadores
- Transcriptómica cutánea para fenotipificación molecular

**Estrategias emergentes:**
- Terapia combinada biológico + tópico
- Intervalos de dosificación extendidos con anti-IL-23
- Posibilidad de remisión libre de fármacos con anti-IL-23
- Nanomedicina para administración tópica
- Terapias dirigidas a células T de memoria residentes en tejido
- Modulación del microbioma cutáneo

### Psoriasis como enfermedad sistémica: evidencia fisiopatológica

- La psoriasis comparte vías inflamatorias con la aterosclerosis (TNF, IL-17, Th1/Th17)
- Inflamación vascular medida por FDG-PET correlaciona con gravedad de psoriasis
- Los biológicos pueden reducir la inflamación aórtica y mejorar el riesgo CV
- Estudios de Mendelian randomization sugieren relación causal psoriasis → enfermedad CV

---
## Explanation

### Molecular Pathogenesis

**Genetic factors:**
- HLA-C*06:02 (PSORS1 locus) — strongest genetic risk factor
- Polygenic inheritance with >80 identified loci
- 10% risk if one parent affected; 50% if both parents
- Monozygotic twin concordance: ~70%
- Associated genes: IL12B, IL23R, TNFAIP3, CARD14, NF-kB pathway genes

**Immunological cascade:**
1. Activated plasmacytoid dendritic cells produce interferon alpha
2. Myeloid dendritic cells produce IL-23 and IL-12
3. IL-23 stimulates Th17 cell differentiation and expansion
4. Th17 cells release IL-17A, IL-17F, IL-22, TNF-alpha
5. IL-17 activates keratinocytes → epidermal hyperproliferation
6. IL-22 promotes acanthosis (epidermal thickening)
7. TNF amplifies the inflammatory cascade
8. Angiogenesis and inflammatory cell recruitment
9. Neutrophils form Munro microabscesses

**Feedback loop:**
- Activated keratinocytes produce more chemokines (CCL20, CXCL1)
- Recruit more Th17 cells and neutrophils
- Perpetuating the inflammatory cycle
- Tissue-resident memory T cells maintain disease even after clinical resolution

**Environmental triggers:**
- Psychological stress (via hypothalamic-pituitary-adrenal axis)
- Skin trauma (Koebner) — activation of dermal dendritic cells
- Infections (group A streptococcus → guttate psoriasis via molecular mimicry)
- Drugs: beta-blockers, lithium, antimalarials, interferon, checkpoint inhibitors
- Alcohol and smoking (pro-inflammatory)
- Obesity (adipose tissue as a source of pro-inflammatory cytokines)

### Treatment Evolution

**Pre-biologic era:**
- Coal tar, salicylic acid
- Dithranol (anthralin)
- Phototherapy as mainstay
- Methotrexate for severe disease
- Cyclosporine (limited short-term use)
- Limited efficacy, significant toxicity

**Biologic era:**
- Anti-TNF (2000s): first revolution
- Anti-IL-12/23 — ustekinumab (2009)
- Anti-IL-17 (2015+): secukinumab, ixekizumab, brodalumab
- Anti-IL-23 (2018+): guselkumab, risankizumab, tildrakizumab
- Anti-IL-17A/F: bimekizumab (2023) — highest PASI 100 efficacy
- PASI 75 response: 50-80% with anti-TNF; 80-90% with anti-IL-17/23
- PASI 90/100 increasingly achievable as therapeutic goals

### Future Directions and Research

**Advanced oral therapies:**
- Deucravacitinib (TYK2 inhibitor) — approved 2022
- TYK2 selectivity vs. other JAKs → improved safety profile
- JAK inhibitors (tofacitinib, upadacitinib) — used off-label, safety concerns

**Personalized medicine:**
- Pharmacogenomics to predict treatment response
- HLA-C*06:02 predicts better response to ustekinumab
- Serum biomarkers (IL-17, S100A8/A9) for monitoring
- Biomarker-driven therapy selection
- Skin transcriptomics for molecular phenotyping

**Emerging strategies:**
- Biologic + topical combination therapy
- Extended dosing intervals with anti-IL-23
- Possibility of drug-free remission with anti-IL-23
- Nanomedicine for topical delivery
- Therapies targeting tissue-resident memory T cells
- Cutaneous microbiome modulation

### Psoriasis as a Systemic Disease: Pathophysiologic Evidence

- Psoriasis shares inflammatory pathways with atherosclerosis (TNF, IL-17, Th1/Th17)
- Vascular inflammation measured by FDG-PET correlates with psoriasis severity
- Biologics may reduce aortic inflammation and improve CV risk
- Mendelian randomization studies suggest causal relationship psoriasis → CV disease`,
      keyTerms: [
        { term: 'Eje Th17 / Th17 axis', definition: 'Vía inmunológica que involucra células T helper 17 y sus citocinas (IL-17A, IL-17F, IL-22). | Immune pathway involving T-helper 17 cells and their cytokines (IL-17A, IL-17F, IL-22).' },
        { term: 'Queratinocito / Keratinocyte', definition: 'Tipo celular principal de la epidermis; en la psoriasis prolifera excesivamente (ciclo de 3-4 días vs. 28-30 normal). | Main cell type of the epidermis; in psoriasis it overproliferates (3-4 day cycle vs. normal 28-30).' },
        { term: 'PASI 90 / PASI 90', definition: '90% de mejoría en el índice de gravedad de psoriasis — considerado un objetivo terapéutico óptimo. | 90% improvement in psoriasis severity index — considered an optimal therapeutic goal.' },
        { term: 'Farmacogenómica / Pharmacogenomics', definition: 'Uso de información genética para predecir la respuesta a fármacos y personalizar el tratamiento. | Using genetic information to predict drug response and personalize treatment.' },
        { term: 'Deucravacitinib', definition: 'Inhibidor selectivo de TYK2, primera terapia oral de pequeña molécula avanzada para psoriasis. | Selective TYK2 inhibitor, first advanced small-molecule oral therapy for psoriasis.' },
        { term: 'Microabscesos de Munro / Munro microabscesses', definition: 'Colecciones de neutrófilos en el estrato córneo, hallazgo histopatológico clásico de la psoriasis. | Collections of neutrophils in the stratum corneum, classic histopathologic finding of psoriasis.' },
      ],
      analogies: [
        'El eje Th17 es como una autopista que conduce directamente a la inflamación — los biológicos bloquean diferentes rampas de entrada. | The Th17 axis is like a highway leading directly to inflammation — biologics block different on-ramps.',
        'PASI 90 es como lograr un aclaramiento casi completo de la piel — el nuevo estándar de éxito. | PASI 90 is like achieving near-complete clearing of skin — the new standard of success.',
        'Las células T de memoria residentes en tejido son como centinelas dormidos en la piel que pueden reactivar la enfermedad. | Tissue-resident memory T cells are like sleeping sentinels in the skin that can reactivate disease.',
      ],
      examples: [
        'Paciente con HLA-C*06:02 tiene excelente respuesta a ustekinumab. | Patient with HLA-C*06:02 has excellent response to ustekinumab.',
        'Investigación que muestra que la inhibición de IL-23 puede inducir remisión prolongada libre de fármacos. | Research showing IL-23 inhibition may induce prolonged drug-free remission.',
        'Inhibidor de TYK2 (deucravacitinib) ofrece opción oral para pacientes que evitan inyecciones. | TYK2 inhibitor (deucravacitinib) offers oral option for patients avoiding injections.',
      ],
      clinicalNotes: 'La supervivencia del fármaco varía: los inhibidores de IL-23 tienen la mayor persistencia (~2+ años). La pérdida de respuesta puede requerir cambio de mecanismo. La dosificación basada en peso es importante (especialmente para inhibidores de TNF). Considerar comorbilidades al seleccionar el biológico (ej., evitar inhibidores de TNF en insuficiencia cardíaca). El bimekizumab muestra las tasas más altas de PASI 100 pero mayor riesgo de candidiasis oral. La remisión libre de fármacos es un concepto emergente con anti-IL-23 que podría cambiar el paradigma de tratamiento. | Drug survival varies: IL-23 inhibitors have longest persistence (~2+ years). Loss of response may require mechanism switch. Weight-based dosing important (especially for TNF inhibitors). Consider comorbidities when selecting biologic (e.g., avoid TNF inhibitors with heart failure). Bimekizumab shows highest PASI 100 rates but increased oral candidiasis risk. Drug-free remission is an emerging concept with anti-IL-23 that could change the treatment paradigm.',
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
      title: 'Joint AAD-NPF guidelines of care for the management and treatment of psoriasis with biologics',
      authors: ['Menter, A.', 'Strober, B.E.', 'Kaplan, D.H.'],
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
      'psoriasis', 'psoriasis en placas', 'plaque psoriasis',
      'autoinmune', 'autoimmune', 'biológicos', 'biologics',
      'IL-17', 'IL-23', 'TNF', 'artritis psoriásica',
      'psoriatic arthritis', 'metotrexato', 'methotrexate',
      'fototerapia', 'phototherapy', 'Koebner',
    ],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
