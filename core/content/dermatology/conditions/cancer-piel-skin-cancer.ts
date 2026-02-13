/**
 * Cáncer de Piel / Skin Cancer - Contenido Educativo Bilingüe (Español / English)
 *
 * Tumores malignos de la piel: melanoma, carcinoma basocelular y carcinoma espinocelular.
 * Malignant skin tumors: melanoma, basal cell carcinoma, and squamous cell carcinoma.
 *
 * Covers: melanoma, BCC, SCC, screening, staging, immunotherapy, prevention
 */

import { EducationalContent } from '../../types';

export const cancerPielSkinCancerContent: EducationalContent = {
  id: 'condition-cancer-piel-skin-cancer',
  type: 'condition',
  name: 'Skin Cancer',
  nameEs: 'Cáncer de Piel',
  alternateNames: [
    'Neoplasia Cutánea Maligna', 'Cutaneous Malignancy',
    'Melanoma', 'Carcinoma Basocelular', 'Basal Cell Carcinoma',
    'Carcinoma Espinocelular', 'Squamous Cell Carcinoma',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'El cáncer de piel ocurre cuando las células de la piel crecen de manera anormal, generalmente por exposición excesiva al sol. Los tres tipos principales son: carcinoma basocelular, carcinoma espinocelular y melanoma. La detección temprana salva vidas. | Skin cancer occurs when skin cells grow abnormally, usually from excessive sun exposure. The three main types are: basal cell carcinoma, squamous cell carcinoma, and melanoma. Early detection saves lives.',
      explanation: `## Explicación

### ¿Qué es el cáncer de piel?

El cáncer de piel ocurre cuando las células de la piel crecen de forma anormal y sin control. La causa más común es la exposición excesiva a la radiación ultravioleta (UV) del sol o de las camas de bronceado.

### Tipos de cáncer de piel

**Carcinoma basocelular (CBC):**
- Es el tipo MÁS común de cáncer de piel
- Crece lentamente
- Rara vez se extiende a otras partes del cuerpo
- Generalmente aparece en áreas expuestas al sol (cara, nariz, orejas)
- Aspecto: bulto perlado, brillante, a veces con pequeños vasos sanguíneos visibles

**Carcinoma espinocelular (CEC):**
- Es el segundo tipo más común
- PUEDE extenderse si no se trata a tiempo
- También aparece en áreas expuestas al sol
- Aspecto: parche rojo, escamoso, costroso que no sana

**Melanoma:**
- Es el tipo MÁS peligroso
- Puede extenderse a otros órganos (metástasis)
- Comienza en las células que dan color a la piel (melanocitos)
- Puede aparecer en cualquier parte, incluso donde no da el sol
- Aspecto: lunar que cambia de forma, color o tamaño

### Regla ABCDE para detectar melanoma

**A - Asimetría:**
Una mitad no coincide con la otra

**B - Bordes:**
Los bordes son irregulares, desiguales o borrosos

**C - Color:**
Diferentes colores dentro de la misma mancha (negro, marrón, rojo, blanco, azul)

**D - Diámetro:**
Más grande que el borrador de un lápiz (6 mm), aunque puede ser más pequeño

**E - Evolución:**
Cambios en tamaño, forma, color o síntomas con el tiempo

### Otra señal importante: "El patito feo"
- Un lunar que se ve diferente a todos los demás lunares de tu cuerpo
- Cualquier lesión que no sana en 3-4 semanas

### Prevención

- Usar protector solar SPF 30+ todos los días (reaplicar cada 2 horas)
- Buscar sombra, especialmente entre las 10 am y 4 pm
- Usar ropa protectora, sombrero y lentes de sol
- NUNCA usar camas de bronceado
- Revisarse la piel regularmente
- Consultar al médico por cualquier lunar que cambie

---
## Explanation

### What is skin cancer?

Skin cancer occurs when skin cells grow abnormally and without control. The most common cause is excessive exposure to ultraviolet (UV) radiation from the sun or tanning beds.

### Types of skin cancer

**Basal cell carcinoma (BCC):**
- The MOST common type of skin cancer
- Grows slowly
- Rarely spreads to other body parts
- Usually appears on sun-exposed areas (face, nose, ears)
- Appearance: pearly, shiny bump, sometimes with small visible blood vessels

**Squamous cell carcinoma (SCC):**
- The second most common type
- CAN spread if not treated in time
- Also appears on sun-exposed areas
- Appearance: red, scaly, crusty patch that does not heal

**Melanoma:**
- The MOST dangerous type
- Can spread to other organs (metastasis)
- Starts in the cells that give skin its color (melanocytes)
- Can appear anywhere, even where sun does not reach
- Appearance: mole that changes shape, color, or size

### ABCDE Rule for detecting melanoma

**A - Asymmetry:**
One half does not match the other

**B - Borders:**
Edges are irregular, uneven, or blurred

**C - Color:**
Different colors within the same spot (black, brown, red, white, blue)

**D - Diameter:**
Larger than a pencil eraser (6 mm), though it can be smaller

**E - Evolving:**
Changes in size, shape, color, or symptoms over time

### Another important sign: "The Ugly Duckling"
- A mole that looks different from all other moles on your body
- Any lesion that does not heal in 3-4 weeks

### Prevention

- Use SPF 30+ sunscreen every day (reapply every 2 hours)
- Seek shade, especially between 10 am and 4 pm
- Wear protective clothing, hat, and sunglasses
- NEVER use tanning beds
- Check your skin regularly
- See a doctor about any mole that changes`,
      keyTerms: [
        { term: 'Radiación UV / UV radiation', definition: 'Rayos invisibles del sol que dañan la piel y pueden causar cáncer. | Invisible rays from the sun that damage skin and can cause cancer.' },
        { term: 'Melanocitos / Melanocytes', definition: 'Células que producen el pigmento (color) de la piel; el melanoma se origina en ellas. | Cells that produce the pigment (color) of skin; melanoma originates from them.' },
        { term: 'Metástasis / Metastasis', definition: 'Cuando el cáncer se extiende a otras partes del cuerpo lejos del sitio original. | When cancer spreads to other body parts far from the original site.' },
        { term: 'Biopsia / Biopsy', definition: 'Procedimiento donde se retira un pedazo de tejido para examinarlo bajo el microscopio y buscar cáncer. | Procedure where a piece of tissue is removed to examine it under the microscope for cancer.' },
        { term: 'SPF / FPS', definition: 'Factor de Protección Solar — medida de cuánta protección ofrece un protector solar contra los rayos UVB. | Sun Protection Factor — measure of how much protection a sunscreen offers against UVB rays.' },
      ],
      analogies: [
        'Los melanocitos son como pequeñas fábricas de pintura que le dan color a la piel — cuando se vuelven cancerosos, producen melanoma. | Melanocytes are like tiny paint factories that give skin its color — when they become cancerous, they produce melanoma.',
        'La regla ABCDE es como una lista de verificación para saber si un lunar puede ser peligroso. | The ABCDE rule is like a checklist to know if a mole might be dangerous.',
        'El "patito feo" es el lunar que no se parece a ningún otro en tu cuerpo — es el que más preocupa. | The "ugly duckling" is the mole that does not look like any other on your body — it is the most worrisome.',
      ],
      examples: [
        'Persona con un bulto perlado y brillante en la nariz que sangra fácilmente (CBC). | Person with a pearly, shiny bump on the nose that bleeds easily (BCC).',
        'Alguien con un parche rojo y escamoso en la oreja que no sana después de meses (CEC). | Someone with a red, scaly patch on the ear that does not heal after months (SCC).',
        'Paciente con un lunar oscuro en la espalda que ha cambiado de forma y color (posible melanoma). | Patient with a dark mole on the back that has changed shape and color (possible melanoma).',
      ],
      patientCounselingPoints: [
        'Revise toda su piel una vez al mes, incluyendo plantas de los pies, entre los dedos y el cuero cabelludo. | Check all of your skin once a month, including soles of feet, between toes, and scalp.',
        'El protector solar debe aplicarse 15-30 minutos antes de salir y reaplicarse cada 2 horas. | Sunscreen should be applied 15-30 minutes before going out and reapplied every 2 hours.',
        'Las camas de bronceado aumentan significativamente el riesgo de melanoma — evítelas por completo. | Tanning beds significantly increase melanoma risk — avoid them completely.',
        'Si un lunar cambia, pica, sangra o se ve diferente a los demás, consulte al médico de inmediato. | If a mole changes, itches, bleeds, or looks different from others, see your doctor immediately.',
      ],
    },

    2: {
      level: 2,
      summary: 'El cáncer de piel es el cáncer más común en el mundo. El CBC y el CEC son carcinomas de queratinocitos con excelente pronóstico cuando se detectan temprano. El melanoma requiere detección temprana para resultados óptimos. | Skin cancer is the most common cancer worldwide. BCC and SCC are keratinocyte carcinomas with excellent prognosis when caught early. Melanoma requires early detection for optimal outcomes.',
      explanation: `## Explicación

### Carcinoma basocelular (CBC)

**Tipos clínicos:**
- Nodular: pápula perlada con telangiectasias (vasos visibles)
- Superficial: placa roja y escamosa (confundible con eccema)
- Morfeiforme (esclerosante): tipo cicatriz, bordes mal definidos (más agresivo)
- Pigmentado: oscuro, puede confundirse con melanoma

**Localización más común:**
- Cabeza y cuello (80% de los casos)
- Nariz: sitio más frecuente
- Áreas crónicamente expuestas al sol

**Comportamiento:**
- Invasión local destructiva
- Metástasis extremadamente rara (<0.1%)
- Puede causar destrucción tisular significativa si no se trata

### Carcinoma espinocelular (CEC)

**Aspecto clínico:**
- Placa hiperqueratósica (costrosa, escamosa)
- Nódulo ulcerado
- Puede surgir de queratosis actínica (lesión precancerosa)
- Crecimiento más rápido que el CBC

**Características de alto riesgo:**
- Profundidad >2 mm (o nivel de Clark IV+)
- Invasión perineural (a lo largo de nervios)
- Diferenciación pobre
- Localización en oreja o labio
- Paciente inmunosuprimido (trasplante de órgano)
- Tamaño >2 cm

**Riesgo de metástasis:**
- General: 2-5%
- Alto riesgo: hasta 15%
- Ganglios regionales, luego pulmón

### Melanoma

**Factores de riesgo:**
- Piel clara, cabello rojo/rubio, ojos claros (fototipos I-II)
- Múltiples nevos (>50 lunares)
- Nevos atípicos (displásicos)
- Historia familiar de melanoma
- Exposición solar intermitente intensa (quemaduras en la infancia)
- Uso de camas de bronceado
- Inmunosupresión
- Melanoma previo (riesgo de segundo primario)

**Tipos clínico-patológicos:**
- Melanoma de extensión superficial (70%): el más común
- Melanoma nodular (15-30%): crecimiento vertical rápido, peor pronóstico
- Lentigo maligno melanoma (5-15%): en piel fotodañada de ancianos
- Melanoma acral lentiginoso: palmas, plantas, bajo las uñas
  - MÁS COMÚN en personas de piel oscura (hispanos, afrodescendientes, asiáticos)
  - Frecuentemente diagnosticado tarde
- Melanoma amelanótico: sin pigmento, puede pasar desapercibido

**Pronóstico por estadio:**
- In situ (estadio 0): 100% supervivencia
- Delgado (<1 mm): >95% supervivencia a 5 años
- Grueso (>4 mm): <50% supervivencia a 5 años

---
## Explanation

### Basal Cell Carcinoma (BCC)

**Clinical types:**
- Nodular: pearly papule with telangiectasias (visible vessels)
- Superficial: red, scaly plaque (confusable with eczema)
- Morpheaform (sclerosing): scar-like, ill-defined borders (more aggressive)
- Pigmented: dark, can be confused with melanoma

**Most common location:**
- Head and neck (80% of cases)
- Nose: most frequent site
- Chronically sun-exposed areas

**Behavior:**
- Locally destructive invasion
- Metastasis extremely rare (<0.1%)
- Can cause significant tissue destruction if left untreated

### Squamous Cell Carcinoma (SCC)

**Clinical appearance:**
- Hyperkeratotic plaque (crusty, scaly)
- Ulcerated nodule
- May arise from actinic keratosis (precancerous lesion)
- Faster growth than BCC

**High-risk features:**
- Depth >2 mm (or Clark level IV+)
- Perineural invasion (along nerves)
- Poor differentiation
- Location on ear or lip
- Immunosuppressed patient (organ transplant)
- Size >2 cm

**Metastasis risk:**
- General: 2-5%
- High-risk: up to 15%
- Regional lymph nodes, then lungs

### Melanoma

**Risk factors:**
- Fair skin, red/blonde hair, light eyes (phototypes I-II)
- Multiple nevi (>50 moles)
- Atypical nevi (dysplastic)
- Family history of melanoma
- Intense intermittent sun exposure (childhood sunburns)
- Tanning bed use
- Immunosuppression
- Prior melanoma (risk of second primary)

**Clinicopathologic types:**
- Superficial spreading melanoma (70%): most common
- Nodular melanoma (15-30%): rapid vertical growth, worse prognosis
- Lentigo maligna melanoma (5-15%): in photodamaged skin of elderly
- Acral lentiginous melanoma: palms, soles, under nails
  - MOST COMMON in darker-skinned individuals (Hispanic, African descent, Asian)
  - Frequently diagnosed late
- Amelanotic melanoma: no pigment, can be missed

**Prognosis by stage:**
- In situ (stage 0): 100% survival
- Thin (<1 mm): >95% 5-year survival
- Thick (>4 mm): <50% 5-year survival`,
      keyTerms: [
        { term: 'Queratosis actínica / Actinic keratosis', definition: 'Lesión precancerosa áspera y escamosa causada por daño solar crónico; puede evolucionar a CEC. | Rough, scaly precancerous lesion caused by chronic sun damage; can evolve into SCC.' },
        { term: 'Invasión perineural / Perineural invasion', definition: 'Extensión del cáncer a lo largo de los nervios, indicador de alto riesgo en CEC. | Cancer spreading along nerves, a high-risk indicator in SCC.' },
        { term: 'Nevos / Nevi', definition: 'Lunares — crecimientos benignos de melanocitos; tener muchos (>50) es un factor de riesgo para melanoma. | Moles — benign growths of melanocytes; having many (>50) is a risk factor for melanoma.' },
        { term: 'Melanoma amelanótico / Amelanotic melanoma', definition: 'Melanoma sin pigmento que se ve rosa o del color de la piel — fácil de pasar por alto. | Melanoma without pigment that looks pink or skin-colored — easy to miss.' },
        { term: 'Melanoma acral lentiginoso / Acral lentiginous melanoma', definition: 'Subtipo de melanoma en palmas, plantas y uñas — el más frecuente en personas de piel oscura. | Melanoma subtype on palms, soles, and nails — most frequent in dark-skinned individuals.' },
      ],
      analogies: [
        'La queratosis actínica es como una señal de advertencia en el tablero del auto — precancerosa y debe atenderse. | Actinic keratosis is like a warning light on a car dashboard — precancerous and needs attention.',
        'El melanoma amelanótico es como un camaleón — se camufla y es difícil de detectar. | Amelanotic melanoma is like a chameleon — it blends in and is hard to detect.',
        'El melanoma nodular es como un iceberg — crece rápidamente hacia adentro (verticalmente) y puede ser más peligroso de lo que parece en la superficie. | Nodular melanoma is like an iceberg — it grows rapidly downward (vertically) and can be more dangerous than it looks on the surface.',
      ],
      examples: [
        'Señor mayor con pápula perlada en la nariz con vasos visibles (CBC nodular). | Elderly man with pearly papule on nose with visible vessels (nodular BCC).',
        'Paciente con parche escamoso en la oreja que no sana (CEC de alto riesgo). | Patient with scaly patch on ear that does not heal (high-risk SCC).',
        'Mujer hispana con mancha oscura en la planta del pie que ha crecido (melanoma acral lentiginoso). | Hispanic woman with dark spot on sole of foot that has grown (acral lentiginous melanoma).',
      ],
      patientCounselingPoints: [
        'La cirugía es el tratamiento principal para todos los cánceres de piel; la detección temprana mejora enormemente el pronóstico. | Surgery is the primary treatment for all skin cancers; early detection greatly improves prognosis.',
        'Si tiene piel oscura, revise especialmente las palmas, plantas de los pies y uñas — el melanoma acral es más común en estos fototipos. | If you have dark skin, especially check palms, soles of feet, and nails — acral melanoma is more common in these phototypes.',
        'Después de un cáncer de piel, las revisiones regulares con el dermatólogo son esenciales para detectar recurrencias o nuevos tumores. | After skin cancer, regular check-ups with the dermatologist are essential to detect recurrences or new tumors.',
      ],
    },

    3: {
      level: 3,
      summary: 'La escisión quirúrgica es el tratamiento de primera línea para la mayoría de los cánceres de piel. La cirugía de Mohs ofrece las tasas de curación más altas para CBC y CEC de alto riesgo en áreas cosmeticamente sensibles. | Surgical excision is first-line treatment for most skin cancers. Mohs micrographic surgery offers highest cure rates for high-risk BCC and SCC in cosmetically sensitive areas.',
      explanation: `## Explicación

### Modalidades de tratamiento

**Carcinoma basocelular:**

*Escisión quirúrgica convencional:*
- Márgenes de 4 mm para tumores bien definidos
- Márgenes de 4-6 mm para subtipos agresivos (morfeiforme)
- Cierre primario, colgajo o injerto según defecto

*Cirugía micrográfica de Mohs:*
- Tasa de curación del 99% (la más alta disponible)
- Preserva tejido sano al máximo
- Indicaciones:
  - Cara, orejas, nariz, párpados, labios, genitales
  - Tumores grandes (>2 cm)
  - Histología agresiva (morfeiforme, infiltrativo)
  - Tumores recurrentes
  - Bordes mal definidos clínicamente
- Evaluación de márgenes en tiempo real durante la cirugía

*Otras opciones:*
- Electrodesecación y curetaje (ED&C): solo para CBC de bajo riesgo, superficiales
- Imiquimod tópico 5%: CBC superficial
- 5-Fluorouracilo tópico: campo de cancerización
- Radioterapia: pacientes no candidatos a cirugía, ancianos
- Terapia fotodinámica: CBC superficial

**Carcinoma espinocelular:**

*Escisión quirúrgica:*
- Márgenes de 4-6 mm para bajo riesgo
- Márgenes de 6-10 mm para alto riesgo
- Considerar biopsia de ganglio centinela en CEC de muy alto riesgo

*Cirugía de Mohs:*
- Indicaciones similares al CBC
- Especialmente para tumores de alto riesgo
- Importancia de evaluación perineural

*Radioterapia:*
- Alternativa a cirugía en pacientes seleccionados
- Adyuvante tras excisión con invasión perineural

**Melanoma:**

*Escisión local amplia:*
- In situ: margen de 0.5-1 cm
- <1 mm: margen de 1 cm
- 1-2 mm: margen de 1-2 cm
- >2 mm: margen de 2 cm

*Biopsia de ganglio centinela (BGC):*
- Indicada para melanomas >0.8 mm de espesor
- O cualquier melanoma con ulceración
- Proporciona información de estadificación crucial
- Identifica enfermedad ganglionar subclínica

*Disección ganglionar completa:*
- Si ganglio centinela positivo (debate actual)
- Ensayo MSLT-2: la observación con ultrasonido es aceptable para enfermedad microscópica
- DeCOG-SLT: resultados similares

*Queratosis actínica (precáncer) — tratamiento de campo:*
- 5-Fluorouracilo tópico (Efudex)
- Imiquimod 5%
- Ingenol mebutato (retirado en muchos mercados)
- Diclofenaco 3% gel
- Crioterapia con nitrógeno líquido
- Terapia fotodinámica

---
## Explanation

### Treatment Modalities

**Basal cell carcinoma:**

*Conventional surgical excision:*
- 4 mm margins for well-defined tumors
- 4-6 mm margins for aggressive subtypes (morpheaform)
- Primary closure, flap, or graft depending on defect

*Mohs micrographic surgery:*
- 99% cure rate (highest available)
- Maximum tissue sparing
- Indications:
  - Face, ears, nose, eyelids, lips, genitalia
  - Large tumors (>2 cm)
  - Aggressive histology (morpheaform, infiltrative)
  - Recurrent tumors
  - Clinically ill-defined borders
- Real-time margin assessment during surgery

*Other options:*
- Electrodessication and curettage (ED&C): only for low-risk, superficial BCC
- Topical imiquimod 5%: superficial BCC
- Topical 5-Fluorouracil: field cancerization
- Radiation therapy: non-surgical candidates, elderly
- Photodynamic therapy: superficial BCC

**Squamous cell carcinoma:**

*Surgical excision:*
- 4-6 mm margins for low-risk
- 6-10 mm margins for high-risk
- Consider sentinel lymph node biopsy for very high-risk SCC

*Mohs surgery:*
- Similar indications to BCC
- Especially for high-risk tumors
- Importance of perineural assessment

*Radiation therapy:*
- Alternative to surgery in selected patients
- Adjuvant after excision with perineural invasion

**Melanoma:**

*Wide local excision:*
- In situ: 0.5-1 cm margin
- <1 mm: 1 cm margin
- 1-2 mm: 1-2 cm margin
- >2 mm: 2 cm margin

*Sentinel lymph node biopsy (SLNB):*
- Indicated for melanomas >0.8 mm thick
- Or any melanoma with ulceration
- Provides crucial staging information
- Identifies subclinical nodal disease

*Complete lymph node dissection:*
- If positive sentinel node (current debate)
- MSLT-2 trial: observation with ultrasound is acceptable for microscopic disease
- DeCOG-SLT: similar outcomes

*Actinic keratosis (precancer) — field treatment:*
- Topical 5-Fluorouracil (Efudex)
- Imiquimod 5%
- Ingenol mebutate (withdrawn in many markets)
- Diclofenac 3% gel
- Cryotherapy with liquid nitrogen
- Photodynamic therapy`,
      keyTerms: [
        { term: 'Cirugía de Mohs / Mohs surgery', definition: 'Extirpación capa por capa con examen microscópico de márgenes en tiempo real — tasa de curación del 99%. | Layer-by-layer removal with real-time microscopic margin examination — 99% cure rate.' },
        { term: 'Márgenes / Margins', definition: 'Tejido normal alrededor del tumor que se retira para asegurar la extirpación completa del cáncer. | Normal tissue around tumor removed to ensure complete cancer excision.' },
        { term: 'Escisión local amplia / Wide local excision', definition: 'Cirugía que extirpa el tumor con un margen amplio de tejido normal (el estándar para melanoma). | Surgery removing tumor with wide margin of normal tissue (standard for melanoma).' },
        { term: 'Biopsia de ganglio centinela / Sentinel lymph node biopsy', definition: 'Procedimiento que identifica y extirpa el primer ganglio al que drena el tumor para buscar metástasis. | Procedure identifying and removing the first lymph node to which the tumor drains to check for metastasis.' },
        { term: 'ED&C', definition: 'Electrodesecación y curetaje — raspado y cauterización del tumor; solo para lesiones de bajo riesgo. | Electrodessication and curettage — scraping and cauterization; only for low-risk lesions.' },
      ],
      analogies: [
        'La cirugía de Mohs es como pelar las capas de una cebolla, verificando cada capa bajo el microscopio hasta que no quede cáncer. | Mohs surgery is like peeling layers of an onion, checking each layer under the microscope until no cancer remains.',
        'Los márgenes quirúrgicos son como una zona de seguridad alrededor del tumor — entre más agresivo el cáncer, mayor la zona de seguridad. | Surgical margins are like a safety zone around the tumor — the more aggressive the cancer, the larger the safety zone.',
        'La biopsia de ganglio centinela es como ir a la primera estación del tren donde viaja el cáncer para ver si ya llegó ahí. | Sentinel lymph node biopsy is like going to the first train station where cancer travels to see if it has arrived there.',
      ],
      examples: [
        'CBC en la nariz tratado con cirugía de Mohs para preservar tejido y minimizar la cicatriz. | BCC on nose treated with Mohs surgery to preserve tissue and minimize scarring.',
        'CEC en la oreja con invasión perineural necesita escisión amplia más radioterapia adyuvante. | SCC on ear with perineural invasion needs wide excision plus adjuvant radiation.',
        'Melanoma de 1.5 mm de espesor recibe márgenes de 1-2 cm más biopsia de ganglio centinela. | Melanoma 1.5 mm thick receives 1-2 cm margins plus sentinel lymph node biopsy.',
      ],
      clinicalNotes: 'Para melanoma, la radiografía de tórax y LDH son estudios basales de estadificación. TC o PET para riesgo mayor. Solicitar prueba de BRAF para estadio III+ (hay terapia dirigida disponible). La inmunoterapia (anti-PD1) ha revolucionado el tratamiento del melanoma avanzado. Nivolumab y pembrolizumab son primera línea para melanoma irresecable o metastásico. | For melanoma, chest X-ray and LDH are baseline staging studies. CT or PET for higher risk. Order BRAF testing for stage III+ (targeted therapy available). Immunotherapy (anti-PD1) has revolutionized advanced melanoma treatment. Nivolumab and pembrolizumab are first-line for unresectable or metastatic melanoma.',
    },

    4: {
      level: 4,
      summary: 'El pronóstico del melanoma depende del espesor de Breslow, la ulceración y el estado del ganglio centinela. La inmunoterapia y la terapia dirigida han mejorado dramáticamente los resultados en enfermedad avanzada. | Melanoma prognosis depends on Breslow thickness, ulceration, and sentinel node status. Immunotherapy and targeted therapy have dramatically improved outcomes in advanced disease.',
      explanation: `## Explicación

### Estadificación del melanoma (AJCC 8a Edición)

**Categoría T (Tumor primario):**
- Tis: In situ (limitado a epidermis)
- T1a: ≤0.8 mm, sin ulceración
- T1b: 0.8-1.0 mm O con ulceración
- T2a: 1.0-2.0 mm, sin ulceración
- T2b: 1.0-2.0 mm, con ulceración
- T3a: 2.0-4.0 mm, sin ulceración
- T3b: 2.0-4.0 mm, con ulceración
- T4a: >4.0 mm, sin ulceración
- T4b: >4.0 mm, con ulceración

**Factores pronósticos principales:**
- Espesor de Breslow (factor más importante): profundidad en mm
- Ulceración (adverso): indica tumor biológicamente agresivo
- Tasa mitótica ≥1/mm² (ya no en estadificación AJCC 8a pero sigue siendo pronóstico)
- Estado del ganglio centinela (crítico para estadificación)
- Microsatelitosis

**Supervivencia por estadio:**
- Estadio 0/I: 98% supervivencia a 5 años
- Estadio II: 85-95%
- Estadio III: 40-80% (depende de carga ganglionar)
- Estadio IV: 20-35% (mejorando con inmunoterapia)

### Tratamiento del melanoma avanzado

**Inmunoterapia:**
- Anti-PD1: Nivolumab (Opdivo), Pembrolizumab (Keytruda)
  - Primera línea para melanoma irresecable/metastásico
  - Tasa de respuesta: 40-45%
  - Respuestas duraderas en muchos pacientes
- Anti-CTLA4: Ipilimumab (Yervoy)
  - Primer inmunoterapéutico aprobado para melanoma
  - Menor eficacia como monoterapia vs. anti-PD1
- Combinación Nivolumab + Ipilimumab:
  - Mayor tasa de respuesta (58%) y supervivencia
  - Mayor toxicidad (eventos adversos inmunomediados grado 3-4 en 55%)
- Anti-LAG3: Relatlimab + nivolumab (Opdualag)
  - Combinación más nueva aprobada

**Terapia dirigida (para melanomas con mutación BRAF):**
- ~50% de melanomas cutáneos tienen mutación BRAF V600E/K
- Inhibidores de BRAF: Vemurafenib, Dabrafenib, Encorafenib
- Inhibidores de MEK: Cobimetinib, Trametinib, Binimetinib
- Se usan SIEMPRE en combinación BRAF + MEK
- Inicio de acción rápido (semanas)
- Problema: desarrollo de resistencia con el tiempo

**Terapia adyuvante (post-quirúrgica para alto riesgo):**
- Nivolumab o Pembrolizumab: estadio IIB-IV resecado
- Dabrafenib + Trametinib: si BRAF+, estadio III resecado
- Reducen riesgo de recurrencia en 40-50%

**Terapia neoadyuvante (antes de cirugía):**
- Evidencia creciente para melanoma estadio III resecable
- Combinación anti-PD1 + anti-CTLA4 prequirúrgica
- Ensayo SWOG S1801: supervivencia superior con enfoque peri-operatorio
- Respuesta patológica completa predice excelente pronóstico

**Radioterapia:**
- Metástasis cerebrales (radiocirugía estereotáctica)
- Metástasis óseas sintomáticas
- Adyuvante a cuenca ganglionar (seleccionado)

### CEC y CBC de alto riesgo — Manejo avanzado

**Indicaciones de derivación a especialista:**
- Tumores recurrentes después de tratamiento
- Invasión perineural
- Invasión profunda (>6 mm o hasta grasa subcutánea)
- Diferenciación pobre
- Paciente inmunosuprimido
- CEC metastásico

**Terapias sistémicas para CEC avanzado:**
- Cemiplimab (anti-PD1): primera línea para CEC localmente avanzado o metastásico
- Pembrolizumab: aprobado para CEC avanzado
- Tasa de respuesta: 40-50%

**Terapias sistémicas para CBC avanzado:**
- Inhibidores de Hedgehog: Vismodegib, Sonidegib
- Para CBC localmente avanzado o metastásico
- Efectos secundarios: calambres musculares, disgeusia, alopecia
- Cemiplimab: aprobado para CBC avanzado post-hedgehog

---
## Explanation

### Melanoma Staging (AJCC 8th Edition)

**T Category (Primary Tumor):**
- Tis: In situ (limited to epidermis)
- T1a: ≤0.8 mm, no ulceration
- T1b: 0.8-1.0 mm OR with ulceration
- T2a: 1.0-2.0 mm, no ulceration
- T2b: 1.0-2.0 mm, with ulceration
- T3a: 2.0-4.0 mm, no ulceration
- T3b: 2.0-4.0 mm, with ulceration
- T4a: >4.0 mm, no ulceration
- T4b: >4.0 mm, with ulceration

**Main prognostic factors:**
- Breslow thickness (most important): depth in mm
- Ulceration (adverse): indicates biologically aggressive tumor
- Mitotic rate ≥1/mm² (no longer in AJCC 8th staging but still prognostic)
- Sentinel node status (critical for staging)
- Microsatellitosis

**Survival by stage:**
- Stage 0/I: 98% 5-year survival
- Stage II: 85-95%
- Stage III: 40-80% (depends on nodal burden)
- Stage IV: 20-35% (improving with immunotherapy)

### Advanced Melanoma Treatment

**Immunotherapy:**
- Anti-PD1: Nivolumab (Opdivo), Pembrolizumab (Keytruda)
  - First-line for unresectable/metastatic melanoma
  - Response rate: 40-45%
  - Durable responses in many patients
- Anti-CTLA4: Ipilimumab (Yervoy)
  - First immunotherapy approved for melanoma
  - Lower monotherapy efficacy vs. anti-PD1
- Combination Nivolumab + Ipilimumab:
  - Higher response rate (58%) and survival
  - Higher toxicity (grade 3-4 immune-related adverse events in 55%)
- Anti-LAG3: Relatlimab + nivolumab (Opdualag)
  - Newest approved combination

**Targeted therapy (for BRAF-mutant melanomas):**
- ~50% of cutaneous melanomas harbor BRAF V600E/K mutation
- BRAF inhibitors: Vemurafenib, Dabrafenib, Encorafenib
- MEK inhibitors: Cobimetinib, Trametinib, Binimetinib
- ALWAYS used in combination BRAF + MEK
- Rapid onset of action (weeks)
- Challenge: resistance development over time

**Adjuvant therapy (post-surgical for high-risk):**
- Nivolumab or Pembrolizumab: resected stage IIB-IV
- Dabrafenib + Trametinib: if BRAF+, resected stage III
- Reduce recurrence risk by 40-50%

**Neoadjuvant therapy (before surgery):**
- Growing evidence for resectable stage III melanoma
- Pre-surgical anti-PD1 + anti-CTLA4 combination
- SWOG S1801 trial: superior survival with perioperative approach
- Complete pathologic response predicts excellent prognosis

**Radiation therapy:**
- Brain metastases (stereotactic radiosurgery)
- Symptomatic bone metastases
- Adjuvant to nodal basin (selected)

### High-Risk SCC and BCC — Advanced Management

**Referral indications:**
- Recurrent tumors after treatment
- Perineural invasion
- Deep invasion (>6 mm or into subcutaneous fat)
- Poor differentiation
- Immunosuppressed patient
- Metastatic SCC

**Systemic therapies for advanced SCC:**
- Cemiplimab (anti-PD1): first-line for locally advanced or metastatic SCC
- Pembrolizumab: approved for advanced SCC
- Response rate: 40-50%

**Systemic therapies for advanced BCC:**
- Hedgehog inhibitors: Vismodegib, Sonidegib
- For locally advanced or metastatic BCC
- Side effects: muscle cramps, dysgeusia, alopecia
- Cemiplimab: approved for advanced BCC post-hedgehog`,
      keyTerms: [
        { term: 'Espesor de Breslow / Breslow thickness', definition: 'Profundidad del melanoma medida desde la capa granulosa hasta el punto más profundo — el factor pronóstico más importante. | Depth of melanoma measured from the granular layer to the deepest point — the most important prognostic factor.' },
        { term: 'Anti-PD1', definition: 'Fármaco que bloquea la proteína PD-1, liberando al sistema inmunitario para atacar el cáncer (nivolumab, pembrolizumab). | Drug that blocks PD-1 protein, unleashing the immune system to attack cancer (nivolumab, pembrolizumab).' },
        { term: 'BRAF', definition: 'Gen cuya mutación (V600E/K) se encuentra en ~50% de los melanomas y permite terapia dirigida. | Gene whose mutation (V600E/K) is found in ~50% of melanomas and allows targeted therapy.' },
        { term: 'Terapia adyuvante / Adjuvant therapy', definition: 'Tratamiento adicional dado después de la cirugía para reducir el riesgo de recurrencia. | Additional treatment given after surgery to reduce recurrence risk.' },
        { term: 'Inhibidores de Hedgehog / Hedgehog inhibitors', definition: 'Fármacos que bloquean la vía de señalización Hedgehog, esencial para el CBC avanzado (vismodegib, sonidegib). | Drugs blocking the Hedgehog signaling pathway, essential for advanced BCC (vismodegib, sonidegib).' },
        { term: 'Terapia neoadyuvante / Neoadjuvant therapy', definition: 'Tratamiento sistémico dado ANTES de la cirugía para reducir el tumor y mejorar resultados. | Systemic treatment given BEFORE surgery to shrink the tumor and improve outcomes.' },
      ],
      analogies: [
        'El espesor de Breslow es como medir qué tan profundas son las raíces de una mala hierba — entre más profundas, más difícil de erradicar. | Breslow thickness is like measuring how deep a weed\'s roots go — the deeper they are, the harder to eradicate.',
        'Anti-PD1 es como soltar los frenos del sistema inmunitario para que pueda atacar el cáncer con toda su fuerza. | Anti-PD1 is like releasing the brakes on the immune system so it can attack cancer at full force.',
        'La combinación BRAF + MEK es como bloquear dos puntos de una misma carretera del cáncer para asegurar que no pueda avanzar. | BRAF + MEK combination is like blocking two points on the same cancer highway to ensure it cannot advance.',
      ],
      examples: [
        'Paciente con melanoma BRAF+ metastásico recibe dabrafenib + trametinib con respuesta rápida. | Patient with BRAF+ metastatic melanoma receives dabrafenib + trametinib with rapid response.',
        'Melanoma estadio III resecado tratado con pembrolizumab adyuvante por 1 año. | Resected stage III melanoma treated with adjuvant pembrolizumab for 1 year.',
        'CEC avanzado con invasión perineural tratado con cemiplimab como primera línea sistémica. | Advanced SCC with perineural invasion treated with cemiplimab as first-line systemic therapy.',
      ],
      clinicalNotes: 'Para inmunoterapia, monitorear eventos adversos inmunomediados: colitis, hepatitis, neumonitis, tiroiditis, hipofisitis, dermatitis. Pueden ocurrir en cualquier momento, incluso después de suspender el tratamiento. Para inhibidores de BRAF, vigilar fiebre, artralgias, fotosensibilidad, queratoacantomas/CEC cutáneo. La terapia neoadyuvante con combinación anti-PD1 + anti-CTLA4 es un enfoque emergente prometedor para melanoma estadio III resecable (SWOG S1801). | For immunotherapy, monitor immune-related adverse events: colitis, hepatitis, pneumonitis, thyroiditis, hypophysitis, dermatitis. These can occur at any time, even after treatment discontinuation. For BRAF inhibitors, watch for fever, arthralgias, photosensitivity, keratoacanthomas/cutaneous SCC. Neoadjuvant combination anti-PD1 + anti-CTLA4 is a promising emerging approach for resectable stage III melanoma (SWOG S1801).',
    },

    5: {
      level: 5,
      summary: 'La incidencia del cáncer de piel sigue aumentando globalmente. La prevención mediante protección UV y la detección temprana siguen siendo fundamentales. Las terapias emergentes, incluyendo vacunas personalizadas y terapia celular adoptiva, continúan mejorando los resultados en enfermedad avanzada. | Skin cancer incidence continues to rise globally. UV protection and early detection remain paramount. Emerging therapies, including personalized vaccines and adoptive cell therapy, continue to improve outcomes in advanced disease.',
      explanation: `## Explicación

### Biología molecular del cáncer de piel

**Melanoma — Mutaciones conductoras:**
- BRAF V600E (40-50%): mutación más frecuente, activación constitutiva de MAPK
- NRAS (15-25%): segunda más frecuente, peor pronóstico
- NF1 (10-15%): tipo con alta carga mutacional
- KIT (10-15% de acral y mucoso): diana terapéutica con imatinib
- Triple wild-type: sin mutación conductora conocida, desafío terapéutico
- Carga mutacional tumoral (TMB) alta en melanomas UV-inducidos → mejor respuesta a inmunoterapia

**CBC — Vía Hedgehog:**
- Mutaciones en PTCH1 (pérdida de función) o SMO (ganancia de función) en >90%
- Activación constitutiva de la vía Hedgehog-Gli
- Base para terapia con vismodegib/sonidegib
- Síndrome de Gorlin: mutación germinal en PTCH1 → múltiples CBC desde la juventud

**CEC — Mutaciones clave:**
- TP53 (>90%): inducida por UV, marca de daño solar
- NOTCH1/2 (75%): supresión tumoral
- CDKN2A: regulación del ciclo celular
- Vía RAS-MAPK
- Carga mutacional muy alta (una de las más altas entre todos los cánceres)
- Inmunosupresión (trasplante) → 65-250x mayor riesgo de CEC

### Estrategias de prevención basadas en evidencia

**Prevención primaria:**
- Protector solar diario SPF 30+ (reduce melanoma en 50% — estudio australiano a largo plazo)
- Ropa con protección UV (UPF 50+)
- Evitar horas pico de UV (10 am - 4 pm)
- Prohibición absoluta de bronceado artificial (la OMS lo clasifica como carcinógeno Grupo 1)
- Búsqueda de sombra
- Políticas de salud pública (educación escolar, regulación de camas bronceadoras)

**Prevención secundaria — Detección temprana:**
- Autoexamen cutáneo regular (mensual)
- Examen profesional anual para grupos de alto riesgo
- Fotografía corporal total para pacientes con síndrome de nevos atípicos
- Dermatoscopia digital secuencial: monitoreo de lesiones individuales
- Inteligencia artificial en dermatoscopia: algoritmos de detección (DermNet, SkinVision)
- Confocal reflectancia: evaluación in vivo no invasiva

**Grupos de alto riesgo que requieren vigilancia intensiva:**
- Receptores de trasplante de órgano sólido (65-250x riesgo de CEC)
- Síndromes genéticos: xeroderma pigmentosum, síndrome de Gorlin, síndrome de nevos displásicos
- Inmunosuprimidos (VIH, leucemia linfocítica crónica)
- Historia familiar de melanoma (especialmente con mutación CDKN2A/p16)
- Melanoma previo (riesgo de 5-8% de segundo primario)

### Terapias emergentes e investigación

**Melanoma:**
- Terapia neoadyuvante con combinación inmunoterapéutica
  - SWOG S1801: pembrolizumab neoadyuvante + adyuvante superior a solo adyuvante
  - NADINA: nivolumab + ipilimumab neoadyuvante — resultados prometedores
- Terapia adoptiva con células T (TIL)
  - Lifileucel (Amtagvi): primera TIL aprobada por FDA (2024) para melanoma
  - Se extraen linfocitos infiltrantes del tumor, se expanden ex vivo y se reinfunden
- Virus oncolítico: T-VEC (talimogene laherparepvec)
  - Inyección intratumoral
  - Estimula respuesta inmune local y sistémica
- Vacunas personalizadas de neoantígenos
  - Identificación de neoantígenos tumorales específicos del paciente
  - Vacunas de ARNm personalizadas (estudio KEYNOTE-942 con mRNA-4157/V940)
  - Combinación con anti-PD1: reducción de 44% en recurrencia vs. anti-PD1 solo
- Inhibidores de LAG3, TIGIT, TIM-3: nueva generación de checkpoints inmunes

**CEC avanzado:**
- Cemiplimab (anti-PD1) como estándar
- Combinaciones de inmunoterapia en estudio
- Inhibidores de EGFR (cetuximab) como alternativa

**CBC avanzado:**
- Inhibidores de Hedgehog (vismodegib, sonidegib) como primera línea
- Cemiplimab tras fallo de hedgehog
- Patidegib tópico en desarrollo

### Controversias actuales en oncología cutánea

**Tamizaje poblacional:**
- No hay evidencia de nivel 1 para tamizaje universal
- Tamizaje dirigido a grupos de alto riesgo es más costo-efectivo
- Programas de educación sobre autoexamen cutáneo

**BGC en melanoma delgado (0.5-0.8 mm):**
- Controversial — tasa de positividad baja (~5%)
- Considerar si hay otros factores de alto riesgo (ulceración, alta tasa mitótica, linfovascular invasion)
- Decisión compartida con el paciente

**Manejo de enfermedad ganglionar subclínica:**
- MSLT-2: observación con ultrasonido es aceptable para enfermedad microscópica ganglionar
- DeCOG-SLT: resultados similares sin disección completa
- Vigilancia estrecha con ultrasonido ganglionar cada 4-6 meses

### Melanoma en poblaciones hispanas y de piel oscura

- Frecuentemente diagnosticado en estadios más avanzados
- Melanoma acral lentiginoso es el subtipo predominante
- Menor conciencia sobre riesgo de cáncer de piel en comunidades hispanas
- Necesidad de educación culturalmente apropiada
- Signo de Hutchinson: pigmentación del pliegue ungueal proximal — sugestivo de melanoma subungueal
- Banda longitudinal melanótica en la uña debe evaluarse en adultos

---
## Explanation

### Molecular Biology of Skin Cancer

**Melanoma — Driver mutations:**
- BRAF V600E (40-50%): most frequent mutation, constitutive MAPK activation
- NRAS (15-25%): second most frequent, worse prognosis
- NF1 (10-15%): type with high tumor mutational burden
- KIT (10-15% of acral and mucosal): therapeutic target with imatinib
- Triple wild-type: no known driver mutation, therapeutic challenge
- High tumor mutational burden (TMB) in UV-induced melanomas → better immunotherapy response

**BCC — Hedgehog pathway:**
- Mutations in PTCH1 (loss-of-function) or SMO (gain-of-function) in >90%
- Constitutive activation of Hedgehog-Gli pathway
- Basis for vismodegib/sonidegib therapy
- Gorlin syndrome: germline PTCH1 mutation → multiple BCCs from youth

**SCC — Key mutations:**
- TP53 (>90%): UV-induced, hallmark of solar damage
- NOTCH1/2 (75%): tumor suppression
- CDKN2A: cell cycle regulation
- RAS-MAPK pathway
- Very high mutational burden (one of highest among all cancers)
- Immunosuppression (transplant) → 65-250x higher SCC risk

### Evidence-Based Prevention Strategies

**Primary prevention:**
- Daily SPF 30+ sunscreen (reduces melanoma by 50% — Australian long-term study)
- UV-protective clothing (UPF 50+)
- Avoid peak UV hours (10 am - 4 pm)
- Absolute ban on artificial tanning (WHO classifies as Group 1 carcinogen)
- Shade seeking
- Public health policies (school education, tanning bed regulation)

**Secondary prevention — Early detection:**
- Regular skin self-examination (monthly)
- Annual professional exam for high-risk groups
- Total body photography for patients with atypical mole syndrome
- Sequential digital dermoscopy: individual lesion monitoring
- Artificial intelligence in dermoscopy: detection algorithms (DermNet, SkinVision)
- Reflectance confocal: non-invasive in vivo assessment

**High-risk groups requiring intensive surveillance:**
- Solid organ transplant recipients (65-250x SCC risk)
- Genetic syndromes: xeroderma pigmentosum, Gorlin syndrome, dysplastic nevus syndrome
- Immunosuppressed (HIV, chronic lymphocytic leukemia)
- Family history of melanoma (especially with CDKN2A/p16 mutation)
- Prior melanoma (5-8% risk of second primary)

### Emerging Therapies and Research

**Melanoma:**
- Neoadjuvant immunotherapy combination
  - SWOG S1801: neoadjuvant + adjuvant pembrolizumab superior to adjuvant alone
  - NADINA: neoadjuvant nivolumab + ipilimumab — promising results
- Adoptive T-cell therapy (TIL)
  - Lifileucel (Amtagvi): first FDA-approved TIL (2024) for melanoma
  - Tumor-infiltrating lymphocytes extracted, expanded ex vivo, and reinfused
- Oncolytic virus: T-VEC (talimogene laherparepvec)
  - Intratumoral injection
  - Stimulates local and systemic immune response
- Personalized neoantigen vaccines
  - Identification of patient-specific tumor neoantigens
  - Personalized mRNA vaccines (KEYNOTE-942 study with mRNA-4157/V940)
  - Combination with anti-PD1: 44% recurrence reduction vs. anti-PD1 alone
- LAG3, TIGIT, TIM-3 inhibitors: next generation immune checkpoints

**Advanced SCC:**
- Cemiplimab (anti-PD1) as standard
- Immunotherapy combinations under study
- EGFR inhibitors (cetuximab) as alternative

**Advanced BCC:**
- Hedgehog inhibitors (vismodegib, sonidegib) as first-line
- Cemiplimab after hedgehog failure
- Topical patidegib in development

### Current Controversies in Cutaneous Oncology

**Population screening:**
- No level 1 evidence for universal screening
- Targeted screening for high-risk groups is more cost-effective
- Skin self-examination education programs

**SLNB for thin melanoma (0.5-0.8 mm):**
- Controversial — low positivity rate (~5%)
- Consider if other high-risk features (ulceration, high mitotic rate, lymphovascular invasion)
- Shared decision-making with patient

**Management of subclinical nodal disease:**
- MSLT-2: observation with ultrasound acceptable for microscopic nodal disease
- DeCOG-SLT: similar outcomes without complete dissection
- Close surveillance with nodal ultrasound every 4-6 months

### Melanoma in Hispanic and Dark-Skinned Populations

- Frequently diagnosed at more advanced stages
- Acral lentiginous melanoma is the predominant subtype
- Lower skin cancer risk awareness in Hispanic communities
- Need for culturally appropriate education
- Hutchinson sign: pigmentation of proximal nail fold — suggestive of subungual melanoma
- Longitudinal melanonychia in the nail should be evaluated in adults`,
      keyTerms: [
        { term: 'Cancerización de campo / Field cancerization', definition: 'Daño solar generalizado con cambios precancerosos en un área amplia de piel — requiere tratamiento de campo. | Widespread sun damage with precancerous changes over a large skin area — requires field treatment.' },
        { term: 'Inhibidor de Hedgehog / Hedgehog inhibitor', definition: 'Fármaco que bloquea la vía Hedgehog, esencial para CBC avanzado con mutaciones PTCH1/SMO. | Drug blocking the Hedgehog pathway, essential for advanced BCC with PTCH1/SMO mutations.' },
        { term: 'Terapia neoadyuvante / Neoadjuvant therapy', definition: 'Tratamiento sistémico (inmunoterapia) dado ANTES de la cirugía para melanoma avanzado resecable. | Systemic treatment (immunotherapy) given BEFORE surgery for resectable advanced melanoma.' },
        { term: 'TIL / Linfocitos infiltrantes de tumor', definition: 'Células inmunitarias del paciente extraídas del tumor, expandidas en laboratorio y reinfundidas como tratamiento. | Patient immune cells extracted from tumor, expanded in lab, and reinfused as treatment.' },
        { term: 'Vacuna de neoantígenos / Neoantigen vaccine', definition: 'Vacuna personalizada basada en las mutaciones específicas del tumor de cada paciente (mRNA-4157/V940). | Personalized vaccine based on each patient\'s specific tumor mutations (mRNA-4157/V940).' },
        { term: 'Signo de Hutchinson / Hutchinson sign', definition: 'Pigmentación del pliegue ungueal proximal que sugiere melanoma subungueal — señal de alarma importante. | Pigmentation of proximal nail fold suggesting subungual melanoma — important warning sign.' },
      ],
      analogies: [
        'La cancerización de campo es como un campo lleno de maleza en todas partes — no basta con arrancar una, hay que tratar todo el terreno. | Field cancerization is like a field full of weeds everywhere — it is not enough to pull one, the entire terrain needs treatment.',
        'La terapia neoadyuvante es como ablandar un objetivo antes del ataque principal — debilita el cáncer antes de la cirugía. | Neoadjuvant therapy is like softening a target before the main attack — it weakens cancer before surgery.',
        'Las vacunas de neoantígenos son como darle al sistema inmunitario un retrato exacto del criminal para que lo reconozca y lo destruya. | Neoantigen vaccines are like giving the immune system an exact portrait of the criminal so it can recognize and destroy it.',
      ],
      examples: [
        'Paciente trasplantado que desarrolla múltiples CEC y requiere dermatología regular cada 3-6 meses. | Transplant patient who develops multiple SCCs and requires regular dermatology every 3-6 months.',
        'Paciente con síndrome de Gorlin recibe vismodegib para múltiples CBC. | Patient with Gorlin syndrome receives vismodegib for multiple BCCs.',
        'Melanoma estadio III resecable recibe inmunoterapia neoadyuvante antes de la cirugía. | Resectable stage III melanoma receives neoadjuvant immunotherapy before surgery.',
        'Paciente hispano con melanoma acral diagnosticado tardíamente en la planta del pie. | Hispanic patient with late-diagnosed acral melanoma on sole of foot.',
      ],
      clinicalNotes: 'El melanoma acral lentiginoso tiene peor pronóstico debido al diagnóstico tardío, no a biología intrínsecamente más agresiva. Buscar bandas longitudinales oscuras en las uñas (signo de Hutchinson). El melanoma subungueal frecuentemente se diagnostica erróneamente como infección micótica. El melanoma acral es el subtipo más común en personas de piel oscura (hispanos, afrodescendientes, asiáticos). La vacuna personalizada de ARNm (mRNA-4157/V940 + pembrolizumab) mostró reducción del 44% en recurrencia en el estudio KEYNOTE-942 — podría cambiar el paradigma del tratamiento adyuvante. Lifileucel (primera TIL aprobada) ofrece nueva esperanza para melanoma refractario a inmunoterapia. | Acral lentiginous melanoma has worse prognosis due to late diagnosis, not intrinsically more aggressive biology. Look for dark longitudinal bands on nails (Hutchinson sign). Subungual melanoma is frequently misdiagnosed as fungal infection. Acral melanoma is the most common subtype in dark-skinned individuals (Hispanic, African descent, Asian). Personalized mRNA vaccine (mRNA-4157/V940 + pembrolizumab) showed 44% recurrence reduction in KEYNOTE-942 — could change adjuvant treatment paradigm. Lifileucel (first approved TIL) offers new hope for immunotherapy-refractory melanoma.',
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
      title: 'NCCN Clinical Practice Guidelines in Oncology: Melanoma: Cutaneous',
      authors: ['National Comprehensive Cancer Network'],
      source: 'NCCN Guidelines',
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
    {
      id: 'ref-4',
      type: 'article',
      title: 'Pembrolizumab plus individualized neoantigen vaccine (mRNA-4157/V940) in melanoma (KEYNOTE-942)',
      authors: ['Khattak, A.', 'Weber, J.S.'],
      source: 'The Lancet',
      license: 'CC BY 4.0',
    },
  ],
  crossReferences: [],
  tags: {
    systems: ['integumentary'],
    topics: ['dermatology'],
    keywords: [
      'cáncer de piel', 'skin cancer', 'melanoma',
      'carcinoma basocelular', 'basal cell carcinoma', 'BCC', 'CBC',
      'carcinoma espinocelular', 'squamous cell carcinoma', 'SCC', 'CEC',
      'inmunoterapia', 'immunotherapy', 'anti-PD1', 'BRAF',
      'cirugía de Mohs', 'Mohs surgery', 'detección temprana',
      'protector solar', 'melanoma acral', 'Hutchinson',
    ],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
