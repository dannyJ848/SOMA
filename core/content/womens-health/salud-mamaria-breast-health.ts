/**
 * Salud Mamaria | Breast Health - Comprehensive Educational Content
 *
 * Covers breast self-exam, mammography, benign vs. malignant conditions,
 * and clinical management from basic literacy through evidence-based
 * protocols. Spanish-first with English translations.
 */

import { EducationalContent } from '../types';

export const saludMamariaBreastHealth: EducationalContent = {
  id: 'womens-health-salud-mamaria-breast-health',
  type: 'topic',
  name: 'Salud Mamaria | Breast Health',
  nameEs: 'Salud Mamaria',
  alternateNames: [
    'Salud del seno | Breast health',
    'Tamizaje mamario | Breast screening',
    'Autoexamen de mama | Breast self-exam',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Conocer tus senos es importante para detectar cambios temprano; la mamograf\u00eda es el examen principal para buscar c\u00e1ncer de mama, y la mayor\u00eda de los cambios en los senos NO son c\u00e1ncer. | Knowing your breasts is important for detecting changes early; mammography is the main test for looking for breast cancer, and most breast changes are NOT cancer.',
      explanation: `## Conoce tus senos | Know Your Breasts

Es importante que conozcas c\u00f3mo se ven y se sienten tus senos normalmente. As\u00ed podr\u00e1s notar cualquier cambio. | It is important to know how your breasts normally look and feel. This way you can notice any changes.

### Autoconocimiento mamario | Breast Self-Awareness

- **Observa** tus senos frente al espejo con los brazos a los lados, arriba y en la cintura | **Look at** your breasts in the mirror with arms at sides, raised, and on hips
- **Palpa** tus senos acostada y de pie (ej. en la ducha) | **Feel** your breasts lying down and standing (e.g., in the shower)
- Usa las yemas de los tres dedos del medio | Use the pads of your three middle fingers
- Mueve en c\u00edrculos peque\u00f1os, cubriendo todo el seno y la axila | Move in small circles, covering the entire breast and armpit
- Haz esto con presi\u00f3n ligera, media y firme | Do this with light, medium, and firm pressure

### Qu\u00e9 es normal | What is Normal

- Los senos pueden sentirse con bultos o irregulares \u2013 esto es normal | Breasts can feel lumpy or irregular \u2013 this is normal
- Los senos pueden cambiar con tu ciclo menstrual | Breasts can change with your menstrual cycle
- Es com\u00fan que un seno sea un poco m\u00e1s grande que el otro | It\u2019s common for one breast to be slightly larger than the other
- Dolor en los senos antes de la regla es normal | Breast pain before your period is normal

### Cu\u00e1ndo ir al doctor | When to See Your Doctor

- Un bulto nuevo o diferente | A new or different lump
- Cambio en el tama\u00f1o o forma del seno | Change in breast size or shape
- Hundimiento o arruga en la piel | Dimpling or puckering of the skin
- Secreci\u00f3n del pez\u00f3n (especialmente si es con sangre) | Nipple discharge (especially if bloody)
- Pez\u00f3n invertido (que se hunde hacia adentro) | Inverted nipple (pulling inward)
- Enrojecimiento, hinchaz\u00f3n o calor en el seno | Redness, swelling, or warmth in the breast
- Dolor que no se va | Pain that won\u2019t go away

### La mamograf\u00eda | Mammography

- Es una radiograf\u00eda especial del seno | It is a special X-ray of the breast
- Puede encontrar c\u00e1ncer muy peque\u00f1o que no se puede sentir | Can find very small cancer that cannot be felt
- Se recomienda empezar entre los 40-50 a\u00f1os | Recommended to start between ages 40-50
- Se repite cada 1-2 a\u00f1os seg\u00fan tu doctor | Repeated every 1-2 years per your doctor
- Dura unos 20 minutos | Takes about 20 minutes
- Puede ser un poco inc\u00f3moda pero no deber\u00eda ser muy dolorosa | Can be a little uncomfortable but should not be very painful

### Buenas noticias | Good News

- **La mayor\u00eda de los bultos en los senos NO son c\u00e1ncer** | **Most breast lumps are NOT cancer**
- 80% de las biopsias de seno resultan benignas (no cancer\u00edgenas) | 80% of breast biopsies turn out benign (not cancerous)
- Cuando se detecta temprano, el c\u00e1ncer de mama se cura en m\u00e1s del 90% de los casos | When caught early, breast cancer is cured in over 90% of cases`,
      keyTerms: [
        {
          term: 'Mamograf\u00eda | Mammography',
          definition:
            'Radiograf\u00eda especial del seno que busca c\u00e1ncer u otros problemas. | Special breast X-ray that looks for cancer or other problems.',
        },
        {
          term: 'Autoexamen / Autoconocimiento mamario | Breast self-awareness',
          definition:
            'Conocer c\u00f3mo se ven y sienten tus senos normalmente para detectar cambios. | Knowing how your breasts normally look and feel to detect changes.',
        },
        {
          term: 'Benigno | Benign',
          definition:
            'No es c\u00e1ncer. | Not cancer.',
        },
        {
          term: 'Maligno | Malignant',
          definition:
            'Es c\u00e1ncer. | Is cancer.',
        },
        {
          term: 'Biopsia | Biopsy',
          definition:
            'Tomar una peque\u00f1a muestra de tejido para examinar bajo el microscopio. | Taking a small tissue sample to examine under a microscope.',
        },
      ],
      analogies: [
        'Conocer tus senos es como conocer tu vecindario: cuando conoces bien lo que es normal, puedes notar r\u00e1pido cuando algo cambia. | Knowing your breasts is like knowing your neighborhood: when you know what\u2019s normal well, you can quickly notice when something changes.',
        'La mamograf\u00eda es como una c\u00e1mara de seguridad para tus senos \u2013 puede ver cosas que tus manos no pueden sentir. | A mammogram is like a security camera for your breasts \u2013 it can see things your hands cannot feel.',
      ],
      examples: [
        'Laura encontr\u00f3 un bulto en su seno durante la ducha. Fue al doctor y result\u00f3 ser un quiste lleno de l\u00edquido \u2013 completamente benigno. | Laura found a lump in her breast during a shower. She went to the doctor and it turned out to be a fluid-filled cyst \u2013 completely benign.',
        'Do\u00f1a Rosa fue a su primera mamograf\u00eda a los 40 a\u00f1os. Sali\u00f3 normal. Ahora va cada a\u00f1o. | Doña Rosa went for her first mammogram at age 40. It came back normal. Now she goes every year.',
      ],
      patientCounselingPoints: [
        'No tengas miedo de tocarte los senos \u2013 conocerlos es protegerte. | Don\u2019t be afraid to touch your breasts \u2013 knowing them is protecting yourself.',
        'La mayor\u00eda de los bultos son benignos, pero siempre dile a tu doctor si encuentras algo nuevo. | Most lumps are benign, but always tell your doctor if you find something new.',
        'La mamograf\u00eda salva vidas. No la pospongas. | Mammography saves lives. Don\u2019t postpone it.',
      ],
    },

    2: {
      level: 2,
      summary:
        'La anatomia mamaria incluye tejido glandular, fibroso y adiposo; las condiciones benignas comunes incluyen quistes, fibroadenomas y cambios fibroquísticos; la mamografía de tamizaje sigue guías específicas por edad y riesgo. | Breast anatomy includes glandular, fibrous, and adipose tissue; common benign conditions include cysts, fibroadenomas, and fibrocystic changes; screening mammography follows age and risk-specific guidelines.',
      explanation: `## Anatomía mamaria básica | Basic Breast Anatomy

El seno está compuesto de: | The breast is composed of:
- **Tejido glandular**: Lobulillos (producen leche) y conductos (transportan leche) | **Glandular tissue**: Lobules (produce milk) and ducts (transport milk)
- **Tejido fibroso**: Ligamentos de Cooper que dan soporte | **Fibrous tissue**: Cooper\u2019s ligaments that provide support
- **Tejido adiposo (grasa)**: Da forma y tamaño | **Adipose tissue (fat)**: Gives shape and size
- **Ganglios linfáticos axilares**: Filtran líquido linfático | **Axillary lymph nodes**: Filter lymphatic fluid

### Densidad mamaria | Breast Density
- **Senos densos**: Más tejido glandular y fibroso, menos grasa | **Dense breasts**: More glandular and fibrous tissue, less fat
- Aproximadamente 50% de las mujeres tienen senos densos | Approximately 50% of women have dense breasts
- Los senos densos hacen la mamografía más difícil de interpretar | Dense breasts make mammography harder to interpret
- Los senos densos tienen un ligero aumento de riesgo de cáncer | Dense breasts have a slightly increased cancer risk

## Condiciones benignas comunes | Common Benign Conditions

### Cambios fibroquísticos | Fibrocystic Changes
- La condición mamaria más común | The most common breast condition
- Afecta al 50-60% de las mujeres | Affects 50-60% of women
- Bultos que cambian con el ciclo menstrual | Lumps that change with the menstrual cycle
- Más dolorosos antes de la regla | More painful before the period
- **No aumentan el riesgo de cáncer** | **Do not increase cancer risk**

### Quistes mamarios | Breast Cysts
- Sacos llenos de líquido | Fluid-filled sacs
- Comunes entre los 35-50 años | Common between ages 35-50
- Pueden aparecer y desaparecer | Can come and go
- Se confirman con ecografía | Confirmed with ultrasound
- **Quiste simple = benigno** (no necesita biopsia) | **Simple cyst = benign** (no biopsy needed)
- Quiste complejo: puede necesitar más evaluación | Complex cyst: may need further evaluation

### Fibroadenomas | Fibroadenomas
- Tumor benigno más común en mujeres jóvenes (15-35 años) | Most common benign tumor in young women (15-35 years)
- Se sienten redondos, firmes y movibles ("ratón de mama") | Feel round, firm, and movable (\u201cbreast mouse\u201d)
- **No se vuelven cáncer** (riesgo extremadamente bajo) | **Don\u2019t become cancer** (extremely low risk)
- Se pueden vigilar o remover según preferencia | Can be monitored or removed per preference

### Mastalgia (dolor mamario) | Mastalgia (Breast Pain)
- **Cíclica**: Relacionada con el ciclo menstrual (más común) | **Cyclic**: Related to menstrual cycle (most common)
- **No cíclica**: No relacionada con el ciclo | **Non-cyclic**: Not related to cycle
- Raramente es señal de cáncer | Rarely a sign of cancer
- Tratamiento: buen brassiere de soporte, AINEs, reducir cafeína | Treatment: good support bra, NSAIDs, reduce caffeine

## Guías de tamizaje mamográfico | Mammographic Screening Guidelines

| Organización | Organization | Inicio | Start | Frecuencia | Frequency |
|-------------|-------------|--------|-------|-----------|-----------|
| ACS | ACS | 40 (opción), 45 (recomendado) | 40 (option), 45 (recommended) | Anual hasta 54, luego anual o bienal | Annual until 54, then annual or biennial |
| USPSTF | USPSTF | 40 | 40 | Cada 2 años hasta 74 | Every 2 years until 74 |
| ACOG | ACOG | 40 (ofrecer) | 40 (offer) | Cada 1-2 años | Every 1-2 years |
| ACR | ACR | 40 | 40 | Anual | Annual |

### Cuándo considerar tamizaje adicional | When to Consider Additional Screening
- Riesgo de por vida >20%: Agregar resonancia magnética anual | Lifetime risk >20%: Add annual MRI
- Mutación BRCA1/2: Mamografía + RM anual desde los 25-30 años | BRCA1/2 mutation: Mammography + MRI annually from age 25-30
- Senos muy densos (categoría D): Considerar ecografía complementaria | Very dense breasts (category D): Consider supplemental ultrasound`,
      keyTerms: [
        {
          term: 'Fibroadenoma | Fibroadenoma',
          definition:
            'Tumor benigno más común del seno en mujeres jóvenes; firme, móvil y generalmente indoloro. | Most common benign breast tumor in young women; firm, mobile, and usually painless.',
        },
        {
          term: 'Quiste mamario | Breast Cyst',
          definition:
            'Saco lleno de líquido en el seno; los quistes simples son siempre benignos. | Fluid-filled sac in the breast; simple cysts are always benign.',
        },
        {
          term: 'Cambios fibroquísticos | Fibrocystic Changes',
          definition:
            'Cambios benignos en el tejido mamario que causan bultos y dolor, especialmente antes de la menstruación. | Benign breast tissue changes causing lumps and pain, especially before menstruation.',
        },
        {
          term: 'Densidad mamaria | Breast Density',
          definition:
            'Proporción de tejido glandular/fibroso vs. grasa en el seno; afecta la precisión de la mamografía. | Proportion of glandular/fibrous tissue vs. fat in the breast; affects mammography accuracy.',
        },
        {
          term: 'Ligamentos de Cooper | Cooper\u2019s Ligaments',
          definition:
            'Tejido fibroso que da soporte estructural al seno; la retracción por tumor causa hundimiento de la piel. | Fibrous tissue providing structural support to the breast; retraction by tumor causes skin dimpling.',
        },
        {
          term: 'Mastalgia | Mastalgia',
          definition:
            'Dolor mamario; generalmente benigno y puede ser cíclico o no cíclico. | Breast pain; generally benign and can be cyclic or non-cyclic.',
        },
      ],
      analogies: [
        'Un quiste simple es como una burbuja de agua en una esponja \u2013 completamente inofensivo. | A simple cyst is like a water bubble in a sponge \u2013 completely harmless.',
        'Un fibroadenoma es como una canica suave dentro del tejido del seno \u2013 se mueve fácilmente y no es peligroso. | A fibroadenoma is like a smooth marble inside the breast tissue \u2013 it moves easily and is not dangerous.',
      ],
      examples: [
        'Andrea, de 28 años, encontró un bulto redondo y movible. La ecografía mostró un fibroadenoma de 1.5 cm. Su doctor le explicó que es benigno y se puede vigilar. | Andrea, 28, found a round, movable lump. Ultrasound showed a 1.5 cm fibroadenoma. Her doctor explained it is benign and can be monitored.',
        'María, de 42 años, tiene senos densos (categoría C). Su mamografía fue normal pero su doctor le recomendó una ecografía complementaria por su densidad mamaria. | Maria, 42, has dense breasts (category C). Her mammogram was normal but her doctor recommended a supplemental ultrasound due to her breast density.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La evaluación mamaria incluye el triple assessment (clínico, imagen, patología); el BI-RADS estandariza la interpretación mamográfica; las lesiones de alto riesgo (hiperplasia atípica, LCIS) requieren manejo específico; y el diagnóstico diferencial entre condiciones benignas y malignas se basa en características imagenológicas y patológicas específicas. | Breast evaluation includes the triple assessment (clinical, imaging, pathology); BI-RADS standardizes mammographic interpretation; high-risk lesions (atypical hyperplasia, LCIS) require specific management; and differential diagnosis between benign and malignant conditions is based on specific imaging and pathologic characteristics.',
      explanation: `## Triple Assessment | Triple Assessment

El estándar para evaluación de masas mamarias: | The standard for breast mass evaluation:

1. **Examen clínico**: Inspección + palpación | **Clinical exam**: Inspection + palpation
2. **Imagen**: Mamografía \u00b1 ecografía \u00b1 RM | **Imaging**: Mammography \u00b1 ultrasound \u00b1 MRI
3. **Patología**: Citología por aspiración (FNA) o biopsia con aguja gruesa (core biopsy) | **Pathology**: Fine needle aspiration (FNA) or core needle biopsy

Los tres componentes deben ser concordantes. Discordancia = más evaluación. | All three components must be concordant. Discordance = further evaluation.

## Sistema BI-RADS | BI-RADS System

| Categoría | Category | Significado | Meaning | Riesgo de cáncer | Cancer Risk | Acción | Action |
|-----------|---------|-------------|---------|-----------------|-------------|--------|--------|
| 0 | 0 | Incompleto | Incomplete | N/A | N/A | Más imágenes | More imaging |
| 1 | 1 | Negativo | Negative | ~0% | ~0% | Rutina | Routine |
| 2 | 2 | Benigno | Benign | ~0% | ~0% | Rutina | Routine |
| 3 | 3 | Probablemente benigno | Probably benign | <2% | <2% | Control en 6 meses | 6-month follow-up |
| 4A | 4A | Baja sospecha | Low suspicion | 2-10% | 2-10% | Biopsia | Biopsy |
| 4B | 4B | Sospecha intermedia | Intermediate | 10-50% | 10-50% | Biopsia | Biopsy |
| 4C | 4C | Sospecha moderada | Moderate | 50-95% | 50-95% | Biopsia | Biopsy |
| 5 | 5 | Altamente sospechoso | Highly suspicious | >95% | >95% | Biopsia | Biopsy |
| 6 | 6 | Cáncer conocido | Known cancer | 100% | 100% | Tratamiento | Treatment |

## Características imagenológicas: Benigno vs. Maligno | Imaging Characteristics: Benign vs. Malignant

### Masas en mamografía/ecografía | Masses on Mammography/Ultrasound

| Característica | Feature | Benigno | Benign | Maligno | Malignant |
|---------------|---------|---------|--------|---------|-----------|
| Forma | Shape | Redonda/oval | Round/oval | Irregular/espiculada | Irregular/spiculated |
| Márgenes | Margins | Bien definidos | Well-defined | Mal definidos, espiculados | Ill-defined, spiculated |
| Ecogenicidad | Echogenicity | Anecoico (quiste) o isoec | Anechoic (cyst) or isoec | Hipoecogénico, sombra posterior | Hypoechoic, posterior shadowing |
| Calcificaciones | Calcifications | Gruesas, redondeadas ("palomitas") | Coarse, round (\u201cpopcorn\u201d) | Finas, pleomórficas, lineales | Fine, pleomorphic, linear |
| Orientación (eco) | Orientation (US) | Paralela a la piel | Parallel to skin | Antiparalela (más alta que ancha) | Antiparallel (taller than wide) |

## Lesiones de alto riesgo | High-Risk Lesions

### Hiperplasia ductal atípica (HDA) | Atypical Ductal Hyperplasia (ADH)
- Riesgo de cáncer: 4-5x aumentado | Cancer risk: 4-5x increased
- Si se encuentra en biopsia con aguja: escisión quirúrgica (upgrade a DCIS/cáncer invasor en 15-30%) | If found on core biopsy: surgical excision (upgrade to DCIS/invasive cancer in 15-30%)
- Considerar quimioprevención (tamoxifeno o inhibidor de aromatasa) | Consider chemoprevention (tamoxifen or aromatase inhibitor)

### Carcinoma lobulillar in situ (LCIS) | Lobular Carcinoma In Situ (LCIS)
- Marcador de riesgo, no un precursor directo | Risk marker, not a direct precursor
- Riesgo de 7-12x de cáncer en CUALQUIER seno (no solo el afectado) | 7-12x cancer risk in EITHER breast (not just the affected one)
- Manejo: vigilancia intensiva + quimioprevención | Management: intensive surveillance + chemoprevention
- LCIS clásico: no requiere escisión si diagnóstico concordante | Classic LCIS: does not require excision if concordant diagnosis
- LCIS pleomórfico: escisión (comportamiento más agresivo) | Pleomorphic LCIS: excision (more aggressive behavior)

### Carcinoma ductal in situ (DCIS) | Ductal Carcinoma In Situ (DCIS)
- Células cancerosas dentro de los conductos, sin invasión | Cancer cells within ducts, no invasion
- 20-25% de cánceres detectados por tamizaje | 20-25% of screen-detected cancers
- Tratamiento estándar: Lumpectomía + radioterapia \u00b1 tamoxifeno (si RE+) | Standard treatment: Lumpectomy + radiation \u00b1 tamoxifen (if ER+)
- Investigación activa: vigilancia activa para DCIS de bajo grado (ensayos LORD, COMET, LORIS) | Active research: active surveillance for low-grade DCIS (LORD, COMET, LORIS trials)

## Evaluación de secreción por el pezón | Nipple Discharge Evaluation

| Tipo | Type | Causa más probable | Most likely cause | Evaluación | Evaluation |
|------|------|--------------------|-------------------|-----------|------------|
| Bilateral, múltiples conductos, lechosa | Bilateral, multiple ducts, milky | Galactorrea (prolactina) | Galactorrhea (prolactin) | Prolactina, TSH | Prolactin, TSH |
| Unilateral, un conducto, serosa/sanguinolenta | Unilateral, single duct, serous/bloody | Papiloma intraductal (más común) o carcinoma | Intraductal papilloma (most common) or carcinoma | Mamografía + ecografía + citología \u00b1 ductografía | Mammography + ultrasound + cytology \u00b1 ductography |
| Verde/marrón, bilateral | Green/brown, bilateral | Ectasia ductal | Duct ectasia | Observación | Observation |`,
      keyTerms: [
        {
          term: 'BI-RADS (Breast Imaging Reporting and Data System)',
          definition:
            'Sistema estandarizado de clasificación de resultados mamográficos que asigna categorías 0-6 con riesgos y acciones específicas. | Standardized mammographic result classification system assigning categories 0-6 with specific risks and actions.',
        },
        {
          term: 'Triple Assessment | Triple Assessment',
          definition:
            'Estándar de evaluación mamaria combinando examen clínico, imagen y patología. | Standard breast evaluation combining clinical exam, imaging, and pathology.',
        },
        {
          term: 'Hiperplasia ductal atípica (HDA) | Atypical Ductal Hyperplasia (ADH)',
          definition:
            'Lesión de alto riesgo con 4-5x aumento de riesgo de cáncer; requiere escisión si se encuentra en biopsia con aguja. | High-risk lesion with 4-5x increased cancer risk; requires excision if found on core biopsy.',
        },
        {
          term: 'DCIS (Carcinoma ductal in situ) | Ductal Carcinoma In Situ',
          definition:
            'Células cancerosas confinadas a los conductos mamarios sin invasión; se debate si todas necesitan tratamiento. | Cancer cells confined to breast ducts without invasion; debate whether all need treatment.',
        },
        {
          term: 'Papiloma intraductal | Intraductal Papilloma',
          definition:
            'Crecimiento benigno dentro de un conducto mamario; causa más común de secreción sanguinolenta unilateral. | Benign growth within a breast duct; most common cause of unilateral bloody discharge.',
        },
      ],
      analogies: [
        'Las calcificaciones mamográficas son como huellas: las benignas son grandes y uniformes (como huellas de zapato), mientras que las malignas son pequeñas, irregulares y agrupadas (como pisadas de pájaros). | Mammographic calcifications are like footprints: benign ones are large and uniform (like shoe prints), while malignant ones are small, irregular, and clustered (like bird tracks).',
      ],
      examples: [
        'Una masa BI-RADS 4B con forma irregular, márgenes espiculados e hipoecogenicidad en ecografía: concordante con sospecha de malignidad, se realiza biopsia con aguja gruesa. | A BI-RADS 4B mass with irregular shape, spiculated margins, and hypoechogenicity on ultrasound: concordant with suspicion of malignancy, core needle biopsy performed.',
      ],
    },

    4: {
      level: 4,
      summary:
        'El manejo clínico avanzado incluye la evaluación de riesgo con modelos Gail/Tyrer-Cuzick, indicaciones para RM mamaria, protocolo de biopsia guiada por imagen, abordaje multidisciplinario del cáncer de mama, y la clasificación molecular intrínseca (Luminal A/B, HER2+, Triple negativo) que guía la terapia sistémica. | Advanced clinical management includes risk assessment with Gail/Tyrer-Cuzick models, indications for breast MRI, image-guided biopsy protocol, multidisciplinary approach to breast cancer, and intrinsic molecular classification (Luminal A/B, HER2+, Triple negative) guiding systemic therapy.',
      explanation: `## Modelos de evaluación de riesgo | Risk Assessment Models

### Modelo de Gail | Gail Model
- Factores: edad, menarquia, edad primer parto, biopsias previas, hiperplasia atípica, familiares de primer grado, raza | Factors: age, menarche, age at first birth, prior biopsies, atypical hyperplasia, first-degree relatives, race
- Resultado: riesgo a 5 años y de por vida | Output: 5-year and lifetime risk
- Riesgo \u22651.67% a 5 años: candidata a quimioprevención | \u22651.67% 5-year risk: candidate for chemoprevention
- Limitación: No incluye historia paterna ni familiares de segundo grado | Limitation: Does not include paternal history or second-degree relatives

### Modelo de Tyrer-Cuzick (IBIS) | Tyrer-Cuzick Model (IBIS)
- Más completo: incluye densidad mamaria, historia familiar extendida, IMC, THM | More comprehensive: includes breast density, extended family history, BMI, MHT
- Riesgo de por vida >20%: indicación para RM mamaria de tamizaje | Lifetime risk >20%: indication for screening breast MRI
- Riesgo de por vida >30%: considerar consejería genética | Lifetime risk >30%: consider genetic counseling

## Indicaciones de RM mamaria | Breast MRI Indications

### Tamizaje | Screening
- Riesgo de por vida \u226520% (Tyrer-Cuzick o modelos similares) | Lifetime risk \u226520%
- Portadoras de BRCA1/2 | BRCA1/2 carriers
- Radiación torácica entre los 10-30 años (ej. linfoma de Hodgkin) | Chest radiation between ages 10-30 (e.g., Hodgkin lymphoma)
- S\u00edndrome de Li-Fraumeni (TP53) | Li-Fraumeni syndrome (TP53)

### Diagnóstico | Diagnostic
- Evaluación de extensión de enfermedad en cáncer conocido | Extent of disease evaluation in known cancer
- Búsqueda de primario oculto (metástasis axilar sin primario mamográfico) | Occult primary search (axillary metastasis without mammographic primary)
- Evaluación de respuesta a quimioterapia neoadyuvante | Neoadjuvant chemotherapy response evaluation
- Evaluación de implantes (ruptura) | Implant evaluation (rupture)

## Clasificación molecular intrínseca del cáncer de mama | Intrinsic Molecular Classification of Breast Cancer

| Subtipo | Subtype | RE | ER | RP | PR | HER2 | Ki-67 | Frecuencia | Frequency | Pronóstico | Prognosis |
|---------|---------|----|----|----|----|------|-------|-----------|-----------|-----------|-----------|
| Luminal A | Luminal A | + | + | + | + | - | Bajo | 40% | 40% | Mejor | Best |
| Luminal B | Luminal B | + | + | \u00b1 | \u00b1 | \u00b1 | Alto | 20% | 20% | Intermedio | Intermediate |
| HER2+ | HER2+ | - | - | - | - | + | Alto | 15% | 15% | Agresivo (con terapia dirigida: bueno) | Aggressive (with targeted therapy: good) |
| Triple negativo (basal) | Triple negative (basal) | - | - | - | - | - | Alto | 15% | 15% | Más agresivo | Most aggressive |

### Implicaciones terapéuticas | Therapeutic Implications

**Luminal A:** | **Luminal A:**
- Terapia endocrina sola generalmente suficiente | Endocrine therapy alone generally sufficient
- Tamoxifeno (premenopáusica) o inhibidor de aromatasa (postmenopáusica) x 5-10 años | Tamoxifen (premenopausal) or aromatase inhibitor (postmenopausal) x 5-10 years
- Oncotype DX score <26: puede omitir quimioterapia (TAILORx, RxPONDER) | Oncotype DX score <26: may omit chemotherapy (TAILORx, RxPONDER)

**Luminal B:** | **Luminal B:**
- Terapia endocrina + quimioterapia generalmente indicada | Endocrine therapy + chemotherapy generally indicated
- Si HER2+: añadir trastuzumab + pertuzumab | If HER2+: add trastuzumab + pertuzumab

**HER2+ (no luminal):** | **HER2+ (non-luminal):**
- Quimioterapia + trastuzumab + pertuzumab (neoadyuvante y adyuvante) | Chemotherapy + trastuzumab + pertuzumab (neoadjuvant and adjuvant)
- Si enfermedad residual post-neoadyuvante: T-DM1 (ado-trastuzumab emtansine) | If residual disease post-neoadjuvant: T-DM1 (ado-trastuzumab emtansine)

**Triple negativo:** | **Triple negative:**
- Quimioterapia basada en antraciclinas y taxanos | Anthracycline and taxane-based chemotherapy
- Si PD-L1+: pembrolizumab + quimioterapia neoadyuvante (KEYNOTE-522) | If PD-L1+: pembrolizumab + neoadjuvant chemotherapy (KEYNOTE-522)
- Si BRCA mutado: olaparib adyuvante x 1 año (OlympiA) | If BRCA mutated: adjuvant olaparib x 1 year (OlympiA)

## Protocolo de biopsia mamaria | Breast Biopsy Protocol

### Tipos de biopsia | Biopsy Types
- **Biopsia con aguja gruesa (core)**: 14G con guía ecográfica; mínimo 4-6 muestras | **Core needle biopsy**: 14G with ultrasound guidance; minimum 4-6 samples
- **Biopsia asistida por vacío**: 9-11G para calcificaciones; guía estereotáctica o RM | **Vacuum-assisted biopsy**: 9-11G for calcifications; stereotactic or MRI guidance
- **Biopsia excisional**: Reservada si biopsia percutánea no posible | **Excisional biopsy**: Reserved if percutaneous biopsy not possible
- **Colocar clip/marcador** después de toda biopsia percutánea | **Place clip/marker** after all percutaneous biopsies`,
      keyTerms: [
        {
          term: 'Oncotype DX',
          definition:
            'Prueba genómica de 21 genes que predice el beneficio de quimioterapia en cáncer de mama RE+/HER2-; score <26 puede omitir quimioterapia. | 21-gene genomic test predicting chemotherapy benefit in ER+/HER2- breast cancer; score <26 may omit chemotherapy.',
        },
        {
          term: 'Clasificación molecular intrínseca | Intrinsic Molecular Classification',
          definition:
            'Subtipos de cáncer de mama (Luminal A/B, HER2+, Triple negativo) que determinan pronóstico y tratamiento. | Breast cancer subtypes (Luminal A/B, HER2+, Triple negative) that determine prognosis and treatment.',
        },
        {
          term: 'Quimioprevención | Chemoprevention',
          definition:
            'Uso de tamoxifeno, raloxifeno o inhibidores de aromatasa para reducir riesgo de cáncer en mujeres de alto riesgo. | Use of tamoxifen, raloxifene, or aromatase inhibitors to reduce cancer risk in high-risk women.',
        },
        {
          term: 'T-DM1 (Ado-trastuzumab emtansine)',
          definition:
            'Conjugado anticuerpo-droga usado en cáncer de mama HER2+ con enfermedad residual después de neoadyuvancia. | Antibody-drug conjugate used in HER2+ breast cancer with residual disease after neoadjuvant therapy.',
        },
        {
          term: 'Terapia endocrina | Endocrine Therapy',
          definition:
            'Tratamiento que bloquea o reduce estrógeno para tratar cáncer de mama RE+; incluye tamoxifeno e inhibidores de aromatasa. | Treatment that blocks or reduces estrogen to treat ER+ breast cancer; includes tamoxifen and aromatase inhibitors.',
        },
      ],
      clinicalNotes:
        'Toda biopsia percutánea debe incluir colocación de clip metálico. La concordancia radio-patológica es obligatoria: si la patología no explica el hallazgo imagenológico, repetir biopsia o escisión. El Oncotype DX ha cambiado la práctica al permitir omitir quimioterapia en RE+/HER2- con score bajo (TAILORx, RxPONDER). | Every percutaneous biopsy must include metallic clip placement. Radio-pathologic concordance is mandatory: if pathology does not explain the imaging finding, repeat biopsy or excision. Oncotype DX has changed practice by allowing chemotherapy omission in ER+/HER2- with low score (TAILORx, RxPONDER).',
    },

    5: {
      level: 5,
      summary:
        'Protocolos avanzados incluyen algoritmos de desescalada quirúrgica (omisión de disección axilar post-Z0011, cirugía radioguiada), neoadyuvancia adaptada a respuesta patológica completa, terapias de precisión emergentes (T-DXd, sacituzumab govitecan, alpelisib), y controversias actuales sobre vigilancia activa en DCIS de bajo riesgo y el papel de la inteligencia artificial en mamografía. | Advanced protocols include surgical de-escalation algorithms (axillary dissection omission post-Z0011, radioguided surgery), neoadjuvant therapy adapted to pathological complete response, emerging precision therapies (T-DXd, sacituzumab govitecan, alpelisib), and current controversies about active surveillance in low-risk DCIS and the role of artificial intelligence in mammography.',
      explanation: `## Desescalada quirúrgica axilar | Axillary Surgical De-escalation

### Evolución del manejo axilar | Axillary Management Evolution
- **Pre-2010**: Disección axilar completa (niveles I-III) en todo ganglio positivo | **Pre-2010**: Complete axillary dissection (levels I-III) in any positive node
- **Post-Z0011 (2011)**: Omisión de disección axilar si \u22642 ganglios centinela positivos + lumpectomía + radioterapia tangencial + terapia sistémica | **Post-Z0011**: Omission of axillary dissection if \u22642 positive sentinel nodes + lumpectomy + tangential radiation + systemic therapy
- **AMAROS (2014)**: Radioterapia axilar vs. disección axilar: no diferencia en recurrencia axilar, menos linfedema | **AMAROS (2014)**: Axillary radiation vs. dissection: no difference in axillary recurrence, less lymphedema
- **RxPONDER + SOUND**: Evaluación continua de omisión de ganglio centinela en T1-T2 cN0 RE+ con Oncotype bajo | Ongoing evaluation of sentinel node omission in T1-T2 cN0 ER+ with low Oncotype

### Manejo post-neoadyuvancia | Post-Neoadjuvant Management
- **Ganglio centinela post-neoadyuvante en cN+ inicial**: Técnica de ganglio diana clipped (TAD) + mínimo 3 ganglios centinela | **Post-neoadjuvant sentinel node in initial cN+**: Targeted axillary dissection (TAD) + minimum 3 sentinel nodes
- Si ypN0 (conversión patológica completa axilar): puede omitir disección | If ypN0 (axillary pathological complete response): may omit dissection
- Si ganglio positivo persistente: disección axilar completa | If persistent positive node: complete axillary dissection

## Terapias de precisión emergentes | Emerging Precision Therapies

### Conjugados anticuerpo-droga (ADC) | Antibody-Drug Conjugates (ADC)

| Fármaco | Drug | Diana | Target | Indicación | Indication | Ensayo clave | Key Trial |
|---------|------|-------|--------|------------|------------|-------------|-----------|
| T-DXd (trastuzumab deruxtecan) | T-DXd | HER2 (incluso bajo) | HER2 (even low) | HER2+ y HER2-low metastásico | HER2+ and HER2-low metastatic | DESTINY-Breast03, 04 |
| Sacituzumab govitecan | Sacituzumab | Trop-2 | Trop-2 | Triple negativo metastásico | Metastatic triple negative | ASCENT |
| T-DM1 | T-DM1 | HER2 | HER2 | Enfermedad residual post-neoadyuvante | Residual disease post-neoadjuvant | KATHERINE |

### Paradigma HER2-low | HER2-low Paradigm
- HER2 IHC 1+ o IHC 2+/ISH negativo | HER2 IHC 1+ or IHC 2+/ISH negative
- ~55% de todos los cánceres de mama son HER2-low | ~55% of all breast cancers are HER2-low
- T-DXd mostró beneficio significativo vs. quimioterapia en DESTINY-Breast04 (PFS 10.1 vs. 5.4 meses) | T-DXd showed significant benefit vs. chemotherapy in DESTINY-Breast04 (PFS 10.1 vs. 5.4 months)
- Cambia el paradigma binario HER2+/HER2- | Changes the binary HER2+/HER2- paradigm

### Terapias dirigidas por mutación | Mutation-Directed Therapies
- **Alpelisib** (inhibidor PI3K\u03b1): RE+/HER2- con mutación PIK3CA (SOLAR-1) | **Alpelisib** (PI3K\u03b1 inhibitor): ER+/HER2- with PIK3CA mutation (SOLAR-1)
- **Capivasertib** (inhibidor AKT): RE+ con alteraciones AKT/PI3K/PTEN (CAPItello-291) | **Capivasertib** (AKT inhibitor): ER+ with AKT/PI3K/PTEN alterations (CAPItello-291)
- **Elacestrant** (SERD oral): RE+ con mutación ESR1 resistente a IA | **Elacestrant** (oral SERD): ER+ with ESR1 mutation resistant to AI
- **Olaparib adyuvante**: BRCA+ alto riesgo (OlympiA: 3.4% beneficio absoluto en OS a 4 años) | **Adjuvant olaparib**: BRCA+ high risk (OlympiA: 3.4% absolute OS benefit at 4 years)

## Controversias actuales | Current Controversies

### Vigilancia activa en DCIS de bajo riesgo | Active Surveillance in Low-Risk DCIS
**Ensayos en curso:** | **Ongoing Trials:**
- **LORD** (Europa): DCIS grado bajo vs. cirugía estándar | DCIS low grade vs. standard surgery
- **COMET** (EE.UU.): DCIS bajo riesgo + vigilancia activa vs. cirugía | Low-risk DCIS + active surveillance vs. surgery
- **LORIS** (Reino Unido): DCIS grado bajo sin invasión | Low-grade DCIS without invasion
- Objetivo: Determinar si DCIS de bajo grado puede monitorizarse sin cirugía | Goal: Determine if low-grade DCIS can be monitored without surgery

### Inteligencia artificial en mamografía | Artificial Intelligence in Mammography
- **Capacidades demostradas**: Sensibilidad comparable o superior a un radiólogo individual | **Demonstrated capabilities**: Sensitivity comparable or superior to a single radiologist
- **Estudios clave**: MASAI (Suecia), ScreenTrustCAD (Noruega) | **Key studies**: MASAI (Sweden), ScreenTrustCAD (Norway)
- **Aplicaciones**: Triaje de mamografías normales, doble lectura, medición de densidad, predicción de riesgo | **Applications**: Normal mammography triage, double reading, density measurement, risk prediction
- **Limitaciones**: Validación externa limitada, sesgos de entrenamiento, consideraciones regulatorias, integración en flujo de trabajo | **Limitations**: Limited external validation, training biases, regulatory considerations, workflow integration

## Evaluación genética en cáncer de mama | Genetic Evaluation in Breast Cancer

### Criterios para testeo germinal (NCCN) | Criteria for Germline Testing (NCCN)
- Todo cáncer de mama \u226450 años | All breast cancer \u226450 years
- Triple negativo \u226460 años | Triple negative \u226460 years
- Múltiples cánceres primarios | Multiple primary cancers
- Historia familiar significativa | Significant family history
- Ascendencia judía asquenazí | Ashkenazi Jewish ancestry
- Todo cáncer de mama masculino | All male breast cancer
- Todo cáncer de ovario epitelial | All epithelial ovarian cancer

### Panel multigénico mínimo recomendado | Minimum Recommended Multigene Panel
BRCA1, BRCA2, PALB2, ATM, CHEK2, TP53, PTEN, CDH1, STK11, NF1 | Same genes`,
      keyTerms: [
        {
          term: 'T-DXd (Trastuzumab deruxtecan)',
          definition:
            'ADC de nueva generación dirigido a HER2 que ha cambiado el paradigma al ser efectivo incluso en HER2-low. | Next-generation HER2-targeting ADC that has changed the paradigm by being effective even in HER2-low.',
        },
        {
          term: 'HER2-low',
          definition:
            'Nueva categoría (IHC 1+ o 2+/ISH-) que abarca ~55% de cánceres de mama y responde a T-DXd; elimina el concepto binario HER2+/HER2-. | New category (IHC 1+ or 2+/ISH-) encompassing ~55% of breast cancers responsive to T-DXd; eliminates the binary HER2+/HER2- concept.',
        },
        {
          term: 'TAD (Disección axilar dirigida) | Targeted Axillary Dissection',
          definition:
            'Técnica que combina ganglio centinela con resección del ganglio marcado con clip pre-neoadyuvancia para evaluación axilar precisa. | Technique combining sentinel node with resection of the pre-neoadjuvant clipped node for precise axillary evaluation.',
        },
        {
          term: 'Ensayo Z0011',
          definition:
            'Ensayo que demostró seguridad de omitir disección axilar en \u22642 ganglios centinela positivos con lumpectomía + radioterapia. | Trial demonstrating safety of omitting axillary dissection in \u22642 positive sentinel nodes with lumpectomy + radiation.',
        },
        {
          term: 'Respuesta patológica completa (pCR) | Pathological Complete Response',
          definition:
            'Ausencia de cáncer invasor residual en mama y ganglios después de quimioterapia neoadyuvante; predictor de supervivencia. | Absence of residual invasive cancer in breast and nodes after neoadjuvant chemotherapy; survival predictor.',
        },
      ],
      clinicalNotes:
        'El paradigma HER2-low con T-DXd ha expandido las opciones terapéuticas para >50% de pacientes con cáncer de mama avanzado. La desescalada axilar post-Z0011/AMAROS reduce morbilidad significativamente. Todo cáncer de mama debe tener testeo de RE, RP, HER2, Ki-67, y considerar testeo germinal según criterios NCCN. En DCIS, la decisión compartida sobre vigilancia vs. cirugía se volverá más relevante conforme maduren los ensayos LORD/COMET/LORIS. | The HER2-low paradigm with T-DXd has expanded therapeutic options for >50% of advanced breast cancer patients. Post-Z0011/AMAROS axillary de-escalation significantly reduces morbidity. All breast cancer must have ER, PR, HER2, Ki-67 testing, and consider germline testing per NCCN criteria. In DCIS, shared decision-making about surveillance vs. surgery will become more relevant as LORD/COMET/LORIS trials mature.',
    },
  },

  media: [],

  citations: [
    {
      id: 'cit-mama-nccn-breast',
      type: 'guideline',
      title: 'NCCN Clinical Practice Guidelines in Oncology: Breast Cancer',
      source: 'National Comprehensive Cancer Network',
      url: 'https://www.nccn.org/professionals/physician_gls/default.aspx',
    },
    {
      id: 'cit-mama-z0011',
      type: 'journal',
      title: 'Sentinel Lymph Node Surgery After Neoadjuvant Chemotherapy in Patients with Node-Positive Breast Cancer (ACOSOG Z0011)',
      authors: ['Giuliano, A.E.'],
      source: 'JAMA',
      page: '305(6):569-575',
    },
    {
      id: 'cit-mama-destiny04',
      type: 'journal',
      title: 'Trastuzumab Deruxtecan in Previously Treated HER2-Low Advanced Breast Cancer (DESTINY-Breast04)',
      authors: ['Modi, S.'],
      source: 'New England Journal of Medicine',
      page: '387:9-20',
    },
    {
      id: 'cit-mama-tailorx',
      type: 'journal',
      title: 'Adjuvant Chemotherapy Guided by a 21-Gene Expression Assay in Breast Cancer (TAILORx)',
      authors: ['Sparano, J.A.'],
      source: 'New England Journal of Medicine',
      page: '379:111-121',
    },
    {
      id: 'cit-mama-keynote522',
      type: 'journal',
      title: 'Pembrolizumab for Early Triple-Negative Breast Cancer (KEYNOTE-522)',
      authors: ['Schmid, P.'],
      source: 'New England Journal of Medicine',
      page: '382:810-821',
    },
    {
      id: 'cit-mama-olympia',
      type: 'journal',
      title: 'Adjuvant Olaparib for Patients with BRCA1- or BRCA2-Mutated Breast Cancer (OlympiA)',
      authors: ['Tutt, A.N.J.'],
      source: 'New England Journal of Medicine',
      page: '384:2394-2405',
    },
    {
      id: 'cit-mama-acr-birads',
      type: 'guideline',
      title: 'ACR BI-RADS Atlas, 5th Edition',
      source: 'American College of Radiology',
      url: 'https://www.acr.org/Clinical-Resources/Reporting-and-Data-Systems/Bi-Rads',
    },
  ],

  crossReferences: [
    {
      targetId: 'womens-health-cancer-ginecologico',
      targetType: 'condition',
      relationship: 'sibling',
      label: 'Cáncer ginecológico | Gynecologic Cancer',
    },
    {
      targetId: 'womens-health-menopausia-menopause',
      targetType: 'process',
      relationship: 'related',
      label: 'Menopausia | Menopause',
    },
    {
      targetId: 'womens-health-ciclo-menstrual-menstrual-cycle',
      targetType: 'process',
      relationship: 'related',
      label: 'Ciclo menstrual | Menstrual Cycle',
    },
    {
      targetId: 'womens-health-embarazo-pregnancy',
      targetType: 'process',
      relationship: 'see-also',
      label: 'Embarazo | Pregnancy',
    },
  ],

  tags: {
    systems: ['reproductive', 'lymphatic'],
    topics: ['breast-health', 'oncology', 'screening', 'radiology', 'womens-health'],
    keywords: [
      'salud mamaria',
      'breast health',
      'mamografía',
      'mammography',
      'cáncer de mama',
      'breast cancer',
      'autoexamen',
      'self-exam',
      'BI-RADS',
      'fibroadenoma',
      'quiste mamario',
      'breast cyst',
      'DCIS',
      'HER2',
      'triple negativo',
      'triple negative',
      'tamizaje',
      'screening',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'obstetrics-gynecology'],
    },
  },

  createdAt: '2025-06-01',
  updatedAt: '2025-06-01',
  version: 1,
  status: 'published',
  contributors: ['SOMA Medical Education Team'],
};
