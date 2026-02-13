/**
 * Cancer de Piel / Skin Cancer - Contenido Educativo Completo Bilingue
 *
 * Melanoma, carcinoma basocelular (CBC) y carcinoma espinocelular (CEC).
 * Melanoma, basal cell carcinoma (BCC), and squamous cell carcinoma (SCC).
 *
 * Regla ABCDE, factores de riesgo, estadificacion, inmunoterapia, cirugia de Mohs.
 * ABCDE rule, risk factors, staging, immunotherapy, Mohs surgery.
 */

import { EducationalContent } from '../types';

export const cancerPielSkinCancer: EducationalContent = {
  id: 'derm-cancer-piel-skin-cancer',
  type: 'condition',
  name: 'Skin Cancer | Cancer de Piel',
  nameEs: 'Cancer de Piel',
  alternateNames: [
    'Neoplasia Cutanea Maligna',
    'Cutaneous Malignancy',
    'Melanoma',
    'Carcinoma Basocelular',
    'Basal Cell Carcinoma',
    'Carcinoma Espinocelular',
    'Squamous Cell Carcinoma',
    'CBC',
    'BCC',
    'CEC',
    'SCC',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'El cancer de piel ocurre cuando las celulas de la piel crecen de forma anormal. Los tres tipos principales son: carcinoma basocelular, carcinoma espinocelular y melanoma. La regla ABCDE ayuda a detectar lunares peligrosos. La deteccion temprana salva vidas. | Skin cancer occurs when skin cells grow abnormally. The three main types are: basal cell carcinoma, squamous cell carcinoma, and melanoma. The ABCDE rule helps detect dangerous moles. Early detection saves lives.',
      explanation: `## Que es el cancer de piel | What is skin cancer

El cancer de piel es el tipo de cancer mas comun en el mundo. Ocurre cuando las celulas de la piel se danan (generalmente por el sol) y empiezan a crecer sin control.
Skin cancer is the most common type of cancer in the world. It occurs when skin cells are damaged (usually by the sun) and begin to grow out of control.

### Tres tipos principales | Three main types

**1. Carcinoma basocelular (CBC) | Basal cell carcinoma (BCC):**
- El MAS COMUN de todos | The MOST COMMON of all
- Crece lentamente, rara vez se extiende | Grows slowly, rarely spreads
- Aparece en cara, nariz, orejas, cuello | Appears on face, nose, ears, neck
- Se ve como un bulto perlado o brillante | Looks like a pearly or shiny bump

**2. Carcinoma espinocelular (CEC) | Squamous cell carcinoma (SCC):**
- Segundo mas comun | Second most common
- PUEDE extenderse si no se trata | CAN spread if not treated
- Parche rojo, escamoso, costroso que no sana | Red, scaly, crusty patch that does not heal

**3. Melanoma:**
- El MAS PELIGROSO | The MOST DANGEROUS
- Puede extenderse a otros organos (metastasis) | Can spread to other organs (metastasis)
- Empieza en las celulas que dan color a la piel (melanocitos) | Starts in cells that give skin its color (melanocytes)
- Un lunar que cambia de forma, color o tamano | A mole that changes shape, color, or size

### Regla ABCDE para detectar melanoma | ABCDE Rule for detecting melanoma

- **A - Asimetria | Asymmetry:** Una mitad no coincide con la otra | One half does not match the other
- **B - Bordes | Borders:** Irregulares, desiguales o borrosos | Irregular, uneven, or blurred
- **C - Color:** Varios colores (negro, marron, rojo, blanco, azul) | Multiple colors (black, brown, red, white, blue)
- **D - Diametro | Diameter:** Mayor de 6 mm (como un borrador de lapiz) | Larger than 6 mm (like a pencil eraser)
- **E - Evolucion | Evolving:** Cambia con el tiempo | Changes over time

### Signo del "patito feo" | "Ugly Duckling" sign
Un lunar que se ve diferente a todos los demas en tu cuerpo debe ser revisado. | A mole that looks different from all others on your body should be checked.

### Prevencion | Prevention
- Protector solar SPF 30+ todos los dias | SPF 30+ sunscreen every day
- Sombra entre 10 am y 4 pm | Shade between 10 am and 4 pm
- Ropa protectora, sombrero, lentes de sol | Protective clothing, hat, sunglasses
- NUNCA camas de bronceado | NEVER tanning beds
- Revisarse la piel cada mes | Check your skin every month
- Consultar al medico si un lunar cambia | See the doctor if a mole changes`,
      keyTerms: [
        { term: 'Radiacion UV | UV radiation', definition: 'Rayos invisibles del sol que danan la piel y causan cancer. | Invisible rays from the sun that damage skin and cause cancer.' },
        { term: 'Melanocitos | Melanocytes', definition: 'Celulas que producen el color de la piel; el melanoma nace de ellas. | Cells that produce skin color; melanoma arises from them.' },
        { term: 'Metastasis', definition: 'Cuando el cancer se extiende a otras partes del cuerpo. | When cancer spreads to other body parts.' },
        { term: 'Biopsia | Biopsy', definition: 'Se retira un pedazo de piel para examinar bajo el microscopio. | A piece of skin is removed to examine under the microscope.' },
        { term: 'SPF | FPS', definition: 'Factor de Proteccion Solar, mide cuanta proteccion ofrece el protector. | Sun Protection Factor, measures how much protection sunscreen offers.' },
      ],
      analogies: [
        'Los melanocitos son como fabricas de pintura en la piel; cuando se vuelven cancerosos producen melanoma. | Melanocytes are like paint factories in the skin; when they become cancerous they produce melanoma.',
        'La regla ABCDE es como una lista de verificacion para saber si un lunar es sospechoso. | The ABCDE rule is like a checklist to know if a mole is suspicious.',
        'El "patito feo" es el lunar que no se parece a ningun otro: ese es el que mas preocupa. | The "ugly duckling" is the mole that looks unlike any other: that is the most worrisome one.',
      ],
      examples: [
        'Un senor con un bulto brillante en la nariz que sangra facilmente — probable CBC. | A man with a shiny bump on his nose that bleeds easily — likely BCC.',
        'Una mujer hispana con una mancha oscura en la planta del pie que ha crecido — posible melanoma acral. | A Hispanic woman with a dark spot on the sole of her foot that has grown — possible acral melanoma.',
        'Una persona con un parche rojo y costroso en la oreja que no sana en meses — posible CEC. | A person with a red, crusty patch on the ear that does not heal for months — possible SCC.',
      ],
    },

    2: {
      level: 2,
      summary:
        'El cancer de piel es la neoplasia mas frecuente. El CBC y CEC son carcinomas de queratinocitos con excelente pronostico si se detectan temprano. El melanoma requiere deteccion precoz para optimos resultados. Los factores de riesgo incluyen exposicion UV, piel clara y antecedentes familiares. | Skin cancer is the most frequent neoplasm. BCC and SCC are keratinocyte carcinomas with excellent prognosis if caught early. Melanoma requires early detection for optimal outcomes. Risk factors include UV exposure, fair skin, and family history.',
      explanation: `## Carcinoma basocelular (CBC) | Basal cell carcinoma (BCC)

**Tipos clinicos | Clinical types:**
- Nodular: papula perlada con telangiectasias | Nodular: pearly papule with telangiectasias
- Superficial: placa roja y escamosa, puede confundirse con eccema | Superficial: red scaly plaque, can be confused with eczema
- Morfeiforme (esclerosante): tipo cicatriz, bordes mal definidos | Morpheaform (sclerosing): scar-like, ill-defined borders
- Pigmentado: oscuro, puede confundirse con melanoma | Pigmented: dark, can be confused with melanoma

**Localizacion | Location:**
- Cabeza y cuello (80%) | Head and neck (80%)
- Nariz: sitio mas frecuente | Nose: most frequent site
- Metastasis extremadamente rara (<0.1%) | Metastasis extremely rare (<0.1%)

## Carcinoma espinocelular (CEC) | Squamous cell carcinoma (SCC)

**Aspecto clinico | Clinical appearance:**
- Placa hiperqueratosica (costrosa, escamosa) | Hyperkeratotic plaque (crusty, scaly)
- Puede surgir de queratosis actinica (lesion precancerosa) | May arise from actinic keratosis (precancerous lesion)

**Caracteristicas de alto riesgo | High-risk features:**
- Profundidad >2 mm | Depth >2 mm
- Invasion perineural | Perineural invasion
- Diferenciacion pobre | Poor differentiation
- Localizacion en oreja o labio | Location on ear or lip
- Paciente inmunosuprimido | Immunosuppressed patient
- Tamano >2 cm | Size >2 cm

**Riesgo de metastasis | Metastasis risk:** 2-5% general, hasta 15% en alto riesgo | 2-5% general, up to 15% in high-risk

## Melanoma

**Factores de riesgo | Risk factors:**
- Piel clara, cabello rojo/rubio (fototipos I-II) | Fair skin, red/blonde hair (phototypes I-II)
- Multiples nevos (>50 lunares) | Multiple nevi (>50 moles)
- Nevos atipicos (displasicos) | Atypical nevi (dysplastic)
- Historia familiar de melanoma | Family history of melanoma
- Quemaduras solares en la infancia | Childhood sunburns
- Camas de bronceado | Tanning beds
- Inmunosupresion | Immunosuppression

**Tipos clinico-patologicos | Clinicopathologic types:**
- Melanoma de extension superficial (70%): el mas comun | Superficial spreading melanoma (70%): most common
- Melanoma nodular (15-30%): crecimiento vertical rapido | Nodular melanoma (15-30%): rapid vertical growth
- Lentigo maligno melanoma (5-15%): en piel fotodanada de ancianos | Lentigo maligna melanoma (5-15%): on photodamaged skin of elderly
- Melanoma acral lentiginoso: palmas, plantas, unas | Acral lentiginous melanoma: palms, soles, nails
  - MAS COMUN en personas de piel oscura (hispanos, afrodescendientes, asiaticos) | MOST COMMON in darker-skinned individuals

**Pronostico | Prognosis:**
- In situ: 100% supervivencia | In situ: 100% survival
- Delgado (<1 mm): >95% a 5 anos | Thin (<1 mm): >95% at 5 years
- Grueso (>4 mm): <50% a 5 anos | Thick (>4 mm): <50% at 5 years`,
      keyTerms: [
        { term: 'Queratosis actinica | Actinic keratosis', definition: 'Lesion precancerosa aspera y escamosa por dano solar cronico; puede evolucionar a CEC. | Rough, scaly precancerous lesion from chronic sun damage; can evolve into SCC.' },
        { term: 'Invasion perineural | Perineural invasion', definition: 'Extension del cancer a lo largo de los nervios; indicador de alto riesgo en CEC. | Cancer spreading along nerves; high-risk indicator in SCC.' },
        { term: 'Nevos | Nevi', definition: 'Lunares; tener >50 es factor de riesgo para melanoma. | Moles; having >50 is a risk factor for melanoma.' },
        { term: 'Melanoma amelanotico | Amelanotic melanoma', definition: 'Melanoma sin pigmento; se ve rosa o del color de la piel, facil de pasar por alto. | Melanoma without pigment; looks pink or skin-colored, easy to miss.' },
        { term: 'Melanoma acral lentiginoso | Acral lentiginous melanoma', definition: 'Subtipo en palmas, plantas y unas; el mas frecuente en personas de piel oscura. | Subtype on palms, soles, and nails; most frequent in dark-skinned individuals.' },
      ],
      analogies: [
        'La queratosis actinica es como una senal de advertencia en el tablero del auto: precancerosa y debe atenderse. | Actinic keratosis is like a dashboard warning light: precancerous and needs attention.',
        'El melanoma amelanotico es como un camaleon: se camufla y es dificil de detectar. | Amelanotic melanoma is like a chameleon: it blends in and is hard to detect.',
        'El melanoma nodular es como un iceberg: crece rapidamente hacia adentro y puede ser mas peligroso de lo que parece. | Nodular melanoma is like an iceberg: it grows rapidly downward and can be more dangerous than it looks.',
      ],
      examples: [
        'Senor mayor con papula perlada en la nariz con vasos visibles — CBC nodular. | Elderly man with pearly papule on nose with visible vessels — nodular BCC.',
        'Paciente con parche escamoso en la oreja que no sana — CEC de alto riesgo. | Patient with scaly patch on ear that does not heal — high-risk SCC.',
        'Mujer hispana con mancha oscura en la planta del pie que ha crecido — melanoma acral lentiginoso. | Hispanic woman with dark spot on sole of foot that has grown — acral lentiginous melanoma.',
      ],
    },

    3: {
      level: 3,
      summary:
        'El tratamiento del cancer de piel depende del tipo y estadio. La cirugia de Mohs ofrece las tasas de curacion mas altas (99%) para CBC y CEC de alto riesgo. La escision local amplia con margenes adecuados y la biopsia de ganglio centinela son estandar para melanoma. | Skin cancer treatment depends on type and stage. Mohs surgery offers highest cure rates (99%) for high-risk BCC and SCC. Wide local excision with adequate margins and sentinel lymph node biopsy are standard for melanoma.',
      explanation: `## Modalidades de tratamiento | Treatment Modalities

### Carcinoma basocelular | Basal cell carcinoma

**Cirugia de Mohs | Mohs micrographic surgery:**
- Tasa de curacion del 99% | 99% cure rate
- Extirpacion capa por capa con examen microscopico en tiempo real | Layer-by-layer removal with real-time microscopic examination
- Indicaciones | Indications:
  - Cara, orejas, nariz, parpados, labios, genitales | Face, ears, nose, eyelids, lips, genitalia
  - Tumores >2 cm | Tumors >2 cm
  - Histologia agresiva (morfeiforme, infiltrativo) | Aggressive histology (morpheaform, infiltrative)
  - Tumores recurrentes | Recurrent tumors

**Escision quirurgica convencional | Conventional surgical excision:**
- Margenes de 4 mm para tumores bien definidos | 4 mm margins for well-defined tumors
- Margenes de 4-6 mm para subtipos agresivos | 4-6 mm margins for aggressive subtypes

**Otras opciones | Other options:**
- Electrodesecacion y curetaje (ED&C): solo bajo riesgo | Electrodessication and curettage (ED&C): low-risk only
- Imiquimod topico 5%: CBC superficial | Topical imiquimod 5%: superficial BCC
- 5-Fluorouracilo topico: campo de cancerizacion | Topical 5-FU: field cancerization
- Radioterapia: pacientes no candidatos a cirugia | Radiation: non-surgical candidates

### Carcinoma espinocelular | Squamous cell carcinoma

**Escision quirurgica | Surgical excision:**
- Margenes 4-6 mm bajo riesgo; 6-10 mm alto riesgo | 4-6 mm low-risk; 6-10 mm high-risk margins
- Cirugia de Mohs para tumores de alto riesgo | Mohs for high-risk tumors
- Considerar biopsia de ganglio centinela en muy alto riesgo | Consider SLNB in very high-risk

### Melanoma

**Escision local amplia (margenes segun grosor) | Wide local excision (margins by thickness):**

| Espesor | Margen | Thickness | Margin |
|---------|--------|-----------|--------|
| In situ | 0.5-1 cm | In situ | 0.5-1 cm |
| <1 mm | 1 cm | <1 mm | 1 cm |
| 1-2 mm | 1-2 cm | 1-2 mm | 1-2 cm |
| >2 mm | 2 cm | >2 mm | 2 cm |

**Biopsia de ganglio centinela (BGC) | Sentinel lymph node biopsy (SLNB):**
- Indicada para melanomas >0.8 mm o con ulceracion | Indicated for melanomas >0.8 mm or with ulceration
- Proporciona informacion de estadificacion crucial | Provides crucial staging information
- Ensayo MSLT-2: la observacion con ultrasonido es aceptable para enfermedad microscopica | MSLT-2 trial: observation with ultrasound acceptable for microscopic disease

### Tratamiento de queratosis actinica (precancer) | Actinic keratosis treatment (precancer)
- 5-Fluorouracilo topico | Topical 5-FU
- Imiquimod 5% | Imiquimod 5%
- Crioterapia con nitrogeno liquido | Cryotherapy with liquid nitrogen
- Terapia fotodinamica | Photodynamic therapy
- Diclofenaco 3% gel | Diclofenac 3% gel`,
      keyTerms: [
        { term: 'Cirugia de Mohs | Mohs surgery', definition: 'Extirpacion capa por capa con examen de margenes en tiempo real; tasa de curacion del 99%. | Layer-by-layer removal with real-time margin examination; 99% cure rate.', pronunciation: 'MOHS' },
        { term: 'Escision local amplia | Wide local excision', definition: 'Cirugia que extirpa el tumor con margen de tejido normal; estandar para melanoma. | Surgery removing tumor with normal tissue margin; standard for melanoma.' },
        { term: 'Biopsia de ganglio centinela | Sentinel lymph node biopsy', definition: 'Identifica el primer ganglio al que drena el tumor para buscar metastasis. | Identifies the first lymph node to which tumor drains to check for metastasis.' },
        { term: 'ED&C', definition: 'Electrodesecacion y curetaje: raspado y cauterizacion; solo para lesiones de bajo riesgo. | Electrodessication and curettage: scraping and cauterization; only for low-risk lesions.' },
        { term: 'Cancerizacion de campo | Field cancerization', definition: 'Dano solar generalizado con cambios precancerosos en un area amplia de piel. | Widespread sun damage with precancerous changes over a large skin area.' },
      ],
      analogies: [
        'La cirugia de Mohs es como pelar las capas de una cebolla, revisando cada capa bajo el microscopio hasta que no quede cancer. | Mohs surgery is like peeling an onion layer by layer, checking each under the microscope until no cancer remains.',
        'Los margenes quirurgicos son una zona de seguridad alrededor del tumor; entre mas agresivo, mayor la zona. | Surgical margins are a safety zone around the tumor; the more aggressive it is, the larger the zone.',
        'La BGC es como ir a la primera estacion del tren donde viaja el cancer para ver si ya llego ahi. | SLNB is like going to the first train station where cancer travels to see if it has arrived there.',
      ],
      examples: [
        'CBC en la nariz tratado con cirugia de Mohs para preservar tejido. | BCC on nose treated with Mohs surgery to preserve tissue.',
        'CEC en la oreja con invasion perineural: escision amplia + radioterapia adyuvante. | SCC on ear with perineural invasion: wide excision + adjuvant radiation.',
        'Melanoma de 1.5 mm: margenes de 1-2 cm + biopsia de ganglio centinela. | Melanoma 1.5 mm: 1-2 cm margins + sentinel lymph node biopsy.',
      ],
      clinicalNotes: 'Solicitar prueba de BRAF para melanoma estadio III+. La inmunoterapia (anti-PD1) es primera linea para melanoma irresecable o metastasico. Nivolumab y pembrolizumab han revolucionado el tratamiento del melanoma avanzado. | Order BRAF testing for stage III+ melanoma. Immunotherapy (anti-PD1) is first-line for unresectable or metastatic melanoma. Nivolumab and pembrolizumab have revolutionized advanced melanoma treatment.',
    },

    4: {
      level: 4,
      summary:
        'El pronostico del melanoma depende del espesor de Breslow, ulceracion y estado del ganglio centinela (AJCC 8a edicion). La inmunoterapia (anti-PD1, anti-CTLA4) y la terapia dirigida (BRAF+MEK) han transformado los resultados en enfermedad avanzada. Los inhibidores de Hedgehog son estandar para CBC avanzado. | Melanoma prognosis depends on Breslow thickness, ulceration, and sentinel node status (AJCC 8th edition). Immunotherapy (anti-PD1, anti-CTLA4) and targeted therapy (BRAF+MEK) have transformed outcomes in advanced disease. Hedgehog inhibitors are standard for advanced BCC.',
      explanation: `## Estadificacion del melanoma (AJCC 8a Edicion) | Melanoma Staging (AJCC 8th Edition)

**Categoria T | T Category:**
| Estadio | Descripcion | Stage | Description |
|---------|-------------|-------|-------------|
| Tis | In situ | Tis | In situ |
| T1a | <=0.8 mm, sin ulceracion | T1a | <=0.8 mm, no ulceration |
| T1b | 0.8-1.0 mm O con ulceracion | T1b | 0.8-1.0 mm OR with ulceration |
| T2a/b | 1.0-2.0 mm (a=sin, b=con ulceracion) | T2a/b | 1.0-2.0 mm (a=without, b=with ulceration) |
| T3a/b | 2.0-4.0 mm | T3a/b | 2.0-4.0 mm |
| T4a/b | >4.0 mm | T4a/b | >4.0 mm |

**Factores pronosticos principales | Main prognostic factors:**
- Espesor de Breslow (mas importante) | Breslow thickness (most important)
- Ulceracion | Ulceration
- Estado del ganglio centinela | Sentinel node status
- Tasa mitotica | Mitotic rate
- Microsatelitosis | Microsatellitosis

## Inmunoterapia | Immunotherapy

**Anti-PD1:** Nivolumab, Pembrolizumab
- Primera linea para melanoma irresecable/metastasico | First-line for unresectable/metastatic melanoma
- Tasa de respuesta: 40-45% | Response rate: 40-45%
- Respuestas duraderas | Durable responses

**Anti-CTLA4:** Ipilimumab
- Menor eficacia como monoterapia vs anti-PD1 | Lower monotherapy efficacy vs anti-PD1

**Combinacion Nivolumab + Ipilimumab | Combination:**
- Mayor tasa de respuesta (58%) y supervivencia | Higher response rate (58%) and survival
- Mayor toxicidad (eventos adversos grado 3-4 en 55%) | Higher toxicity (grade 3-4 adverse events in 55%)

**Anti-LAG3:** Relatlimab + nivolumab (Opdualag)

## Terapia dirigida (melanomas con mutacion BRAF) | Targeted Therapy (BRAF-mutant melanomas)

- ~50% de melanomas cutaneos tienen mutacion BRAF V600E/K | ~50% of cutaneous melanomas harbor BRAF V600E/K
- Inhibidores de BRAF: vemurafenib, dabrafenib, encorafenib | BRAF inhibitors
- Inhibidores de MEK: cobimetinib, trametinib, binimetinib | MEK inhibitors
- SIEMPRE en combinacion BRAF + MEK | ALWAYS in combination
- Inicio rapido (semanas) pero resistencia eventual | Rapid onset (weeks) but eventual resistance

## Terapia adyuvante y neoadyuvante | Adjuvant and Neoadjuvant Therapy

**Adyuvante (post-quirurgica) | Adjuvant (post-surgical):**
- Nivolumab o Pembrolizumab: estadio IIB-IV resecado | Resected stage IIB-IV
- Dabrafenib + Trametinib: BRAF+, estadio III resecado | BRAF+, resected stage III
- Reduccion de recurrencia del 40-50% | 40-50% recurrence reduction

**Neoadyuvante | Neoadjuvant:**
- Evidencia creciente para estadio III resecable | Growing evidence for resectable stage III
- SWOG S1801: supervivencia superior con enfoque peri-operatorio | Superior survival with perioperative approach

## CBC y CEC avanzados | Advanced BCC and SCC

**CBC avanzado | Advanced BCC:**
- Inhibidores de Hedgehog: vismodegib, sonidegib | Hedgehog inhibitors
- Cemiplimab: tras fallo de hedgehog | After hedgehog failure

**CEC avanzado | Advanced SCC:**
- Cemiplimab (anti-PD1): primera linea sistemica | First-line systemic
- Pembrolizumab: aprobado para CEC avanzado | Approved for advanced SCC`,
      keyTerms: [
        { term: 'Espesor de Breslow | Breslow thickness', definition: 'Profundidad del melanoma en mm desde la capa granulosa; factor pronostico mas importante. | Melanoma depth in mm from granular layer; most important prognostic factor.' },
        { term: 'Anti-PD1', definition: 'Farmaco que bloquea PD-1, liberando al sistema inmune para atacar el cancer. | Drug blocking PD-1, unleashing immune system to attack cancer.' },
        { term: 'BRAF V600E/K', definition: 'Mutacion presente en ~50% de melanomas cutaneos; permite terapia dirigida. | Mutation present in ~50% of cutaneous melanomas; allows targeted therapy.' },
        { term: 'Terapia adyuvante | Adjuvant therapy', definition: 'Tratamiento despues de cirugia para reducir riesgo de recurrencia. | Treatment after surgery to reduce recurrence risk.' },
        { term: 'Inhibidores de Hedgehog | Hedgehog inhibitors', definition: 'Farmacos que bloquean la via de senalizacion Hedgehog; estandar para CBC avanzado. | Drugs blocking Hedgehog signaling pathway; standard for advanced BCC.' },
        { term: 'Terapia neoadyuvante | Neoadjuvant therapy', definition: 'Tratamiento sistemico dado ANTES de la cirugia. | Systemic treatment given BEFORE surgery.' },
      ],
      analogies: [
        'El espesor de Breslow es como medir que tan profundas son las raices de una mala hierba: entre mas profundas, mas dificil de erradicar. | Breslow thickness is like measuring how deep a weed\'s roots go: the deeper, the harder to eradicate.',
        'Anti-PD1 es como soltar los frenos del sistema inmune para que pueda atacar el cancer con toda su fuerza. | Anti-PD1 is like releasing the brakes on the immune system so it can attack cancer at full force.',
        'La combinacion BRAF + MEK es como bloquear dos puntos de la misma carretera del cancer para asegurar que no avance. | BRAF + MEK combination is like blocking two points on the same cancer highway to ensure it cannot advance.',
      ],
      examples: [
        'Paciente con melanoma BRAF+ metastasico recibe dabrafenib + trametinib con respuesta rapida. | Patient with BRAF+ metastatic melanoma receives dabrafenib + trametinib with rapid response.',
        'Melanoma estadio III resecado tratado con pembrolizumab adyuvante por 1 ano. | Resected stage III melanoma treated with adjuvant pembrolizumab for 1 year.',
        'CEC avanzado con invasion perineural tratado con cemiplimab como primera linea. | Advanced SCC with perineural invasion treated with cemiplimab as first-line.',
      ],
      clinicalNotes: 'Monitorear eventos adversos inmunomediados: colitis, hepatitis, neumonitis, tiroiditis, hipofisitis. Para inhibidores BRAF: vigilar fiebre, artralgias, fotosensibilidad, queratoacantomas. La terapia neoadyuvante es un enfoque emergente prometedor (SWOG S1801, NADINA). | Monitor immune-related adverse events: colitis, hepatitis, pneumonitis, thyroiditis, hypophysitis. For BRAF inhibitors: watch for fever, arthralgias, photosensitivity, keratoacanthomas. Neoadjuvant therapy is a promising emerging approach (SWOG S1801, NADINA).',
    },

    5: {
      level: 5,
      summary:
        'La biologia molecular del cancer de piel guia las terapias modernas. Las mutaciones conductoras (BRAF, NRAS, NF1, KIT, PTCH1, TP53) determinan las opciones terapeuticas. Las terapias emergentes incluyen vacunas de neoantigenicos personalizadas (mRNA-4157/V940), terapia celular adoptiva (TIL/lifileucel), e inhibidores de checkpoints de nueva generacion (LAG3, TIGIT, TIM-3). La dermatopatologia es esencial para la estadificacion precisa. | Skin cancer molecular biology guides modern therapies. Driver mutations (BRAF, NRAS, NF1, KIT, PTCH1, TP53) determine therapeutic options. Emerging therapies include personalized neoantigen vaccines (mRNA-4157/V940), adoptive cell therapy (TIL/lifileucel), and next-generation checkpoint inhibitors (LAG3, TIGIT, TIM-3). Dermatopathology is essential for accurate staging.',
      explanation: `## Biologia molecular | Molecular Biology

### Melanoma — Mutaciones conductoras | Driver mutations

| Mutacion | Frecuencia | Implicacion terapeutica | Mutation | Frequency | Therapeutic implication |
|----------|-----------|-------------------------|----------|-----------|------------------------|
| BRAF V600E | 40-50% | Terapia dirigida BRAF+MEK | BRAF V600E | 40-50% | BRAF+MEK targeted therapy |
| NRAS | 15-25% | Peor pronostico, ensayos MEKi | NRAS | 15-25% | Worse prognosis, MEKi trials |
| NF1 | 10-15% | Alta carga mutacional, responde a ICI | NF1 | 10-15% | High TMB, responds to ICI |
| KIT | 10-15% (acral/mucoso) | Imatinib | KIT | 10-15% (acral/mucosal) | Imatinib |
| Triple wild-type | Variable | Desafio terapeutico | Triple wild-type | Variable | Therapeutic challenge |

- Carga mutacional tumoral (TMB) alta en melanomas UV-inducidos correlaciona con mejor respuesta a inmunoterapia | High TMB in UV-induced melanomas correlates with better immunotherapy response

### CBC — Via Hedgehog | BCC — Hedgehog pathway
- Mutaciones en PTCH1 (perdida de funcion) o SMO (ganancia de funcion) en >90% | PTCH1 LOF or SMO GOF mutations in >90%
- Sindrome de Gorlin: mutacion germinal en PTCH1 | Gorlin syndrome: germline PTCH1 mutation

### CEC — Mutaciones clave | SCC — Key mutations
- TP53 (>90%): inducida por UV | TP53 (>90%): UV-induced
- NOTCH1/2 (75%): supresion tumoral | NOTCH1/2 (75%): tumor suppression
- Carga mutacional muy alta | Very high mutational burden
- Inmunosupresion (trasplante) → 65-250x mayor riesgo | Immunosuppression (transplant) → 65-250x higher risk

## Dermatopatologia | Dermatopathology

### Melanoma — Caracteristicas histopatologicas | Histopathologic features
- Proliferacion de melanocitos atipicos en la union dermoepidermica | Atypical melanocyte proliferation at dermal-epidermal junction
- Migracion pagetoide en la epidermis | Pagetoid spread in epidermis
- Invasion dermica con patron de crecimiento vertical | Dermal invasion with vertical growth pattern
- Figuras mitoticas | Mitotic figures
- Infiltrado linfocitario peritumoral (TILs) | Peritumoral lymphocytic infiltrate (TILs)
- Inmunohistoquimica: S100, SOX10, Melan-A/MART-1, HMB-45 | Immunohistochemistry

### Informacion de la BGC | SLNB pathology reporting
- Ensayo MSLT-I: la BGC proporciona estadificacion precisa | MSLT-I: SLNB provides accurate staging
- Carga tumoral ganglionar predice supervivencia | Nodal tumor burden predicts survival
- MSLT-2 y DeCOG-SLT: observacion aceptable para enfermedad microscopica | Observation acceptable for microscopic disease

## Terapias emergentes | Emerging Therapies

### Vacunas personalizadas de neoantigenicos | Personalized neoantigen vaccines
- mRNA-4157/V940 + pembrolizumab | mRNA-4157/V940 + pembrolizumab
- KEYNOTE-942: reduccion del 44% en recurrencia vs anti-PD1 solo | 44% recurrence reduction vs anti-PD1 alone
- Podria cambiar el paradigma del tratamiento adyuvante | Could change adjuvant treatment paradigm

### Terapia celular adoptiva (TIL) | Adoptive cell therapy (TIL)
- Lifileucel (Amtagvi): primera TIL aprobada por FDA (2024) | First FDA-approved TIL (2024)
- Linfocitos infiltrantes del tumor extraidos, expandidos ex vivo y reinfundidos | Tumor-infiltrating lymphocytes extracted, expanded ex vivo, and reinfused

### Virus oncolitico | Oncolytic virus
- T-VEC (talimogene laherparepvec): inyeccion intratumoral | Intratumoral injection
- Estimula respuesta inmune local y sistemica | Stimulates local and systemic immune response

### Inhibidores de checkpoints de nueva generacion | Next-generation checkpoint inhibitors
- LAG3, TIGIT, TIM-3: en desarrollo y ensayos clinicos | In development and clinical trials

## Melanoma en poblaciones hispanas y de piel oscura | Melanoma in Hispanic and Dark-Skinned Populations

- Diagnosticado frecuentemente en estadios avanzados | Frequently diagnosed at advanced stages
- Melanoma acral lentiginoso es el subtipo predominante | Acral lentiginous melanoma is predominant subtype
- Signo de Hutchinson: pigmentacion del pliegue ungueal proximal sugiere melanoma subungueal | Hutchinson sign: proximal nail fold pigmentation suggests subungual melanoma
- Menor conciencia sobre riesgo en comunidades hispanas; necesidad de educacion culturalmente apropiada | Lower risk awareness in Hispanic communities; need for culturally appropriate education

## Controversias actuales | Current Controversies

- Tamizaje poblacional: no hay evidencia nivel 1 para tamizaje universal | Population screening: no level 1 evidence for universal screening
- BGC en melanoma delgado (0.5-0.8 mm): controversial, tasa de positividad ~5% | SLNB for thin melanoma: controversial, ~5% positivity rate
- Manejo de enfermedad ganglionar subclinica: vigilancia vs diseccion | Subclinical nodal disease: surveillance vs dissection`,
      keyTerms: [
        { term: 'TMB | Carga mutacional tumoral', definition: 'Numero de mutaciones somaticas por megabase; alta TMB predice respuesta a inmunoterapia. | Number of somatic mutations per megabase; high TMB predicts immunotherapy response.' },
        { term: 'TIL | Linfocitos infiltrantes de tumor', definition: 'Celulas inmunes del paciente extraidas del tumor, expandidas y reinfundidas como tratamiento. | Patient immune cells extracted from tumor, expanded, and reinfused as treatment.' },
        { term: 'Vacuna de neoantigenicos | Neoantigen vaccine', definition: 'Vacuna personalizada basada en las mutaciones especificas del tumor de cada paciente (mRNA-4157/V940). | Personalized vaccine based on patient-specific tumor mutations (mRNA-4157/V940).' },
        { term: 'Signo de Hutchinson | Hutchinson sign', definition: 'Pigmentacion del pliegue ungueal proximal que sugiere melanoma subungueal. | Proximal nail fold pigmentation suggesting subungual melanoma.' },
        { term: 'Lifileucel (Amtagvi)', definition: 'Primera terapia TIL aprobada por FDA (2024) para melanoma refractario a inmunoterapia. | First FDA-approved TIL therapy (2024) for immunotherapy-refractory melanoma.' },
        { term: 'Sindrome de Gorlin | Gorlin syndrome', definition: 'Mutacion germinal en PTCH1 que causa multiples CBC desde la juventud. | Germline PTCH1 mutation causing multiple BCCs from youth.' },
      ],
      analogies: [
        'La cancerizacion de campo es como un terreno lleno de maleza: no basta con arrancar una, hay que tratar todo el terreno. | Field cancerization is like a field full of weeds: pulling one is not enough, the entire terrain needs treatment.',
        'Las vacunas de neoantigenicos son como darle al sistema inmune un retrato exacto del criminal para que lo reconozca y destruya. | Neoantigen vaccines are like giving the immune system an exact portrait of the criminal so it can recognize and destroy it.',
        'La terapia neoadyuvante es como ablandar el objetivo antes del ataque principal: debilita el cancer antes de la cirugia. | Neoadjuvant therapy is like softening a target before the main attack: it weakens cancer before surgery.',
      ],
      examples: [
        'Paciente trasplantado que desarrolla multiples CEC: dermatologia regular cada 3-6 meses. | Transplant patient developing multiple SCCs: regular dermatology every 3-6 months.',
        'Paciente con sindrome de Gorlin recibe vismodegib para multiples CBC. | Gorlin syndrome patient receives vismodegib for multiple BCCs.',
        'Melanoma estadio III resecable recibe inmunoterapia neoadyuvante antes de cirugia. | Resectable stage III melanoma receives neoadjuvant immunotherapy before surgery.',
        'Paciente hispano con melanoma acral diagnosticado tardiamente en la planta del pie. | Hispanic patient with late-diagnosed acral melanoma on sole of foot.',
      ],
      clinicalNotes: 'El melanoma acral lentiginoso tiene peor pronostico por diagnostico tardio, no por biologia intrinsecamente mas agresiva. La vacuna mRNA-4157/V940 + pembrolizumab mostro reduccion del 44% en recurrencia (KEYNOTE-942). Lifileucel ofrece nueva esperanza para melanoma refractario. Los biomarcadores predictivos (TMB, PD-L1, firma genica de interferon) ayudan a seleccionar terapia. Confocal reflectancia y dermatoscopia digital con IA estan transformando la deteccion temprana. | Acral lentiginous melanoma has worse prognosis due to late diagnosis, not intrinsically more aggressive biology. mRNA-4157/V940 vaccine + pembrolizumab showed 44% recurrence reduction (KEYNOTE-942). Lifileucel offers new hope for refractory melanoma. Predictive biomarkers (TMB, PD-L1, interferon gene signature) help select therapy. Reflectance confocal and AI-powered digital dermoscopy are transforming early detection.',
    },
  },

  media: [],

  citations: [
    {
      id: 'fitzpatrick-skin-cancer',
      type: 'textbook',
      title: 'Fitzpatrick\'s Dermatology, 9th Edition',
      authors: ['Kang, S.', 'Amagai, M.', 'Bruckner, A.L.'],
      source: 'McGraw-Hill Education',
    },
    {
      id: 'nccn-melanoma-guidelines',
      type: 'guideline',
      title: 'NCCN Clinical Practice Guidelines: Melanoma: Cutaneous',
      authors: ['National Comprehensive Cancer Network'],
      source: 'NCCN Guidelines',
    },
    {
      id: 'arenas-dermatologia',
      type: 'textbook',
      title: 'Dermatologia: Atlas, diagnostico y tratamiento, 7a edicion',
      authors: ['Arenas, R.'],
      source: 'McGraw-Hill Interamericana',
    },
    {
      id: 'keynote-942-lancet',
      type: 'article',
      title: 'Pembrolizumab plus individualized neoantigen vaccine (mRNA-4157/V940) in melanoma (KEYNOTE-942)',
      authors: ['Khattak, A.', 'Weber, J.S.'],
      source: 'The Lancet',
    },
    {
      id: 'ajcc-8th-edition',
      type: 'textbook',
      title: 'AJCC Cancer Staging Manual, 8th Edition',
      authors: ['Amin, M.B.'],
      source: 'Springer',
    },
  ],

  crossReferences: [
    { targetId: 'derm-cicatrizacion-heridas-wound-healing', targetType: 'process', relationship: 'related', label: 'Cicatrizacion de heridas | Wound healing' },
    { targetId: 'derm-infecciones-cutaneas-skin-infections', targetType: 'condition', relationship: 'see-also', label: 'Infecciones cutaneas | Skin infections' },
    { targetId: 'dermatology-skin-anatomy', targetType: 'structure', relationship: 'parent', label: 'Anatomia de la piel | Skin anatomy' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['dermatology', 'oncology', 'immunotherapy', 'surgery'],
    keywords: [
      'cancer de piel', 'skin cancer', 'melanoma',
      'carcinoma basocelular', 'basal cell carcinoma', 'CBC', 'BCC',
      'carcinoma espinocelular', 'squamous cell carcinoma', 'CEC', 'SCC',
      'ABCDE', 'inmunoterapia', 'immunotherapy', 'anti-PD1', 'BRAF',
      'cirugia de Mohs', 'Mohs surgery', 'Breslow',
      'melanoma acral', 'Hutchinson',
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

export default cancerPielSkinCancer;
