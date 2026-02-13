/**
 * Panel Tiroideo (Thyroid Panel) - TSH, T3, T4, Antibodies
 * Contenido educativo para interpretacion del panel tiroideo
 *
 * Spanish-first bilingual educational content covering:
 * - TSH (hormona estimulante de la tiroides)
 * - T4 libre (tiroxina libre)
 * - T3 libre (triyodotironina libre)
 * - T4 total y T3 total
 * - Anticuerpos tiroideos (anti-TPO, anti-tiroglobulina, TRAb/TSI)
 * - Tiroglobulina
 * - Valores de referencia en unidades convencionales y SI
 * - Valores criticos que requieren accion inmediata
 */

import { EducationalContent } from '../types';

export const panelTiroideoThyroidPanel: EducationalContent = {
  id: 'lab-panel-tiroideo-thyroid-panel',
  type: 'topic',
  name: 'Panel Tiroideo | Thyroid Panel',
  nameEs: 'Panel Tiroideo',
  alternateNames: [
    'Thyroid Function Tests',
    'TFTs',
    'Pruebas de Funcion Tiroidea',
    'Perfil Tiroideo',
    'Thyroid Panel',
    'Hormonal Tiroideo',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'El panel tiroideo mide las hormonas de la tiroides, una glandula en forma de mariposa en tu cuello que controla la velocidad a la que funciona tu cuerpo (metabolismo). Si la tiroides trabaja de mas, todo va muy rapido. Si trabaja de menos, todo va muy lento. | The thyroid panel measures thyroid hormones. The thyroid is a butterfly-shaped gland in your neck that controls how fast your body works (metabolism).',
      explanation: `# Panel Tiroideo | Thyroid Panel

## Que es la tiroides? | What is the thyroid?

La tiroides es una glandula en forma de **mariposa** que esta en la parte de adelante de tu cuello. Es como el **termostato** de tu cuerpo: controla la temperatura, la energia, el peso y el ritmo del corazon.

### Hormonas de la tiroides | Thyroid hormones

**TSH (Hormona Estimulante de la Tiroides)**
- Es el "jefe" que le dice a la tiroides cuanto trabajar
- El cerebro produce TSH para controlar la tiroides
- Normal: 0.4-4.0 mUI/L

**T4 libre (Tiroxina)**
- Es la hormona principal que produce la tiroides
- Normal: 0.8-1.8 ng/dL (10-23 pmol/L)

**T3 libre (Triyodotironina)**
- Es la forma mas activa de la hormona tiroidea
- Normal: 2.3-4.2 pg/mL (3.5-6.5 pmol/L)

## Que pasa cuando no funciona bien? | What happens when it doesn't work?

### Tiroides lenta (Hipotiroidismo) = Todo va lento | Hypothyroidism
- TSH **ALTA** (el cerebro le grita a la tiroides que trabaje mas)
- T4 libre **BAJA**
- Sintomas: cansancio, frio, aumento de peso, piel seca, estrenimiento, depresion

### Tiroides acelerada (Hipertiroidismo) = Todo va rapido | Hyperthyroidism
- TSH **BAJA** (el cerebro le dice a la tiroides que pare)
- T4 libre **ALTA**
- Sintomas: nerviosismo, sudoracion, perdida de peso, palpitaciones, temblor, diarrea

### Anticuerpos tiroideos | Thyroid antibodies
- Son "soldados confundidos" del sistema inmune que atacan tu propia tiroides
- **Anti-TPO**: positivo en Hashimoto (tiroides lenta autoinmune)
- **TRAb/TSI**: positivo en Graves (tiroides acelerada autoinmune)

## Valores criticos - Emergencia! | Critical values

| Prueba | Valor critico | Peligro |
|--------|--------------|---------|
| TSH | >50 mUI/L | Hipotiroidismo severo (coma mixedematoso posible) |
| TSH | <0.01 mUI/L con T4 muy alta | Tormenta tiroidea (hipertiroidismo peligroso) |
| T4 libre | >5 ng/dL | Posible tormenta tiroidea; emergencia |
| T4 libre | <0.4 ng/dL | Hipotiroidismo severo |`,
      keyTerms: [
        {
          term: 'tiroides | thyroid',
          definition:
            'Glandula en forma de mariposa en el cuello que controla la velocidad de tu cuerpo (metabolismo) | Butterfly-shaped gland in the neck that controls your body speed (metabolism)',
          pronunciation: 'ti-ROI-des',
        },
        {
          term: 'TSH (hormona estimulante de la tiroides) | thyroid stimulating hormone',
          definition:
            'Hormona del cerebro que le dice a la tiroides cuanto trabajar; sube cuando la tiroides esta lenta y baja cuando esta acelerada | Brain hormone telling the thyroid how much to work; rises when thyroid is slow, drops when it is fast',
        },
        {
          term: 'hipotiroidismo | hypothyroidism',
          definition:
            'Cuando la tiroides trabaja de menos y todo en el cuerpo va lento (cansancio, frio, aumento de peso) | When the thyroid works too little and everything slows down (fatigue, cold, weight gain)',
        },
        {
          term: 'hipertiroidismo | hyperthyroidism',
          definition:
            'Cuando la tiroides trabaja de mas y todo en el cuerpo va rapido (nerviosismo, perdida de peso, palpitaciones) | When the thyroid works too much and everything speeds up (nervousness, weight loss, palpitations)',
        },
        {
          term: 'anticuerpos tiroideos | thyroid antibodies',
          definition:
            'Proteinas del sistema inmune que atacan la tiroides por error, causando que trabaje de mas o de menos | Immune system proteins that mistakenly attack the thyroid',
        },
      ],
      analogies: [
        'La tiroides es como el termostato de tu casa: si esta muy bajo (hipotiroidismo), la casa esta fria y todo es lento. Si esta muy alto (hipertiroidismo), la casa esta caliente y todo va rapido. El TSH es como alguien que ajusta el termostato. | The thyroid is like your home thermostat: too low and the house is cold and slow; too high and it is hot and fast. TSH is like someone adjusting the thermostat.',
        'La relacion TSH-tiroides es como un jefe y un trabajador: si el trabajador (tiroides) no produce suficiente, el jefe (TSH) grita mas fuerte (TSH sube). Si el trabajador produce demasiado, el jefe se calla (TSH baja). | The TSH-thyroid relationship is like a boss and worker: if the worker produces too little, the boss shouts louder (TSH rises). If the worker overproduces, the boss goes quiet (TSH drops).',
      ],
      examples: [
        'Luisa se siente cansada todo el tiempo, le da frio y ha subido de peso. Su doctor le hace un panel tiroideo: TSH alta (15 mUI/L) y T4 libre baja. Tiene hipotiroidismo y necesita pastillas de hormona tiroidea. | Luisa feels tired all the time, is cold, and has gained weight. Her TSH is high (15) and free T4 is low. She has hypothyroidism and needs thyroid hormone pills.',
      ],
    },

    2: {
      level: 2,
      summary:
        'El panel tiroideo evalua el eje hipotalamo-hipofisis-tiroides. La TSH es la prueba mas sensible para detectar disfuncion tiroidea. La interpretacion combina TSH con T4 libre para clasificar hipotiroidismo, hipertiroidismo, y enfermedad subclínica. Los anticuerpos identifican la etiologia autoinmune. | The thyroid panel evaluates the hypothalamic-pituitary-thyroid axis. TSH is the most sensitive test for thyroid dysfunction.',
      explanation: `# Panel Tiroideo - Nivel Intermedio | Thyroid Panel - Intermediate Level

## Eje hipotalamo-hipofisis-tiroides | Hypothalamic-pituitary-thyroid axis

**TRH (hipotalamo)** → estimula → **TSH (hipofisis)** → estimula → **T4 y T3 (tiroides)**
T4/T3 → retroalimentacion negativa → suprime TSH y TRH

## Valores de referencia para adultos | Adult reference ranges

| Prueba | Convencional | SI | Notas |
|--------|-------------|-----|-------|
| TSH | 0.4-4.0 mUI/L | 0.4-4.0 mU/L | Mas sensible; primera prueba |
| T4 libre | 0.8-1.8 ng/dL | 10-23 pmol/L | x12.87 |
| T3 libre | 2.3-4.2 pg/mL | 3.5-6.5 pmol/L | x1.536 |
| T4 total | 5.0-12.0 ug/dL | 64-155 nmol/L | x12.87 |
| T3 total | 80-200 ng/dL | 1.2-3.1 nmol/L | x0.01536 |
| Anti-TPO | <35 IU/mL | - | Positivo en Hashimoto |
| Anti-tiroglobulina | <20 IU/mL | - | Hashimoto, seguimiento ca. tiroides |
| TRAb (anti-receptor TSH) | <1.75 IU/L | - | Positivo en Graves |
| Tiroglobulina | 2-35 ng/mL | 2-35 ug/L | Marcador tumoral post-tiroidectomia |

## Patrones diagnosticos | Diagnostic patterns

| TSH | T4 libre | Diagnostico | Causa comun |
|-----|----------|-------------|-------------|
| Alta | Baja | **Hipotiroidismo primario** | Hashimoto, post-I131, post-cirugia |
| Alta | Normal | **Hipotiroidismo subclinico** | Hashimoto temprano |
| Baja | Alta | **Hipertiroidismo primario** | Graves, nodulo toxico, tiroiditis |
| Baja | Normal | **Hipertiroidismo subclinico** | Graves leve, nodulo autonomo |
| Baja | Baja | **Hipotiroidismo central** (secundario) | Tumor hipofisario, cirugia, radiacion |
| Normal | Baja | **Sindrome del eutiroideo enfermo** | Enfermedad critica, hospitalizacion |

## Valores criticos que requieren accion inmediata | Critical values

| Prueba | Valor critico | Condicion | Accion |
|--------|--------------|-----------|--------|
| TSH | >50-100 mUI/L | Hipotiroidismo severo / coma mixedematoso | Levotiroxina IV + hidrocortisona IV |
| TSH | <0.01 mUI/L + T4L >5 ng/dL | Tormenta tiroidea | PTU/metimazol + betabloqueador + yodo + corticosteroide |
| T4 libre | >5 ng/dL (>64 pmol/L) | Tirotoxicosis severa | Evaluacion urgente de tormenta tiroidea (score de Burch-Wartofsky) |
| T4 libre | <0.4 ng/dL (<5 pmol/L) | Hipotiroidismo severo | Evaluar coma mixedematoso si alteracion mental |

## Anticuerpos tiroideos - Cuando pedir | When to order thyroid antibodies

| Anticuerpo | Cuando pedir | Que confirma |
|-----------|-------------|-------------|
| Anti-TPO | Hipotiroidismo, bocio, riesgo de hipotiroidismo | Hashimoto (tiroiditis autoinmune) |
| Anti-tiroglobulina | Seguimiento ca. tiroides, complemento a anti-TPO | Hashimoto; interferencia con tiroglobulina |
| TRAb/TSI | Hipertiroidismo, oftalmopatia, embarazo con Graves | Enfermedad de Graves |

## Situaciones especiales | Special situations

### Embarazo | Pregnancy
- TSH normal en 1er trimestre: 0.1-2.5 mUI/L (mas bajo por hCG)
- Meta de TSH en embarazo con hipotiroidismo: <2.5 mUI/L
- Anti-TPO positivo aumenta riesgo de aborto y tiroiditis postparto

### Medicamentos que afectan pruebas tiroideas | Medications affecting tests
- **Biotina (vitamina B7)**: interfiere con ensayos; suspender 2 dias antes
- **Amiodarona**: puede causar hipo o hipertiroidismo
- **Litio**: causa hipotiroidismo (5-35% de pacientes)
- **Levotiroxina**: absorcion afectada por calcio, hierro, IPP`,
      keyTerms: [
        {
          term: 'eje hipotalamo-hipofisis-tiroides | hypothalamic-pituitary-thyroid axis',
          definition:
            'Sistema de control hormonal: TRH → TSH → T4/T3, con retroalimentacion negativa; la TSH es el mejor indicador del funcionamiento del eje | Hormonal control system with negative feedback; TSH is the best indicator of axis function',
        },
        {
          term: 'hipotiroidismo subclinico | subclinical hypothyroidism',
          definition:
            'TSH elevada (4-10 mUI/L) con T4 libre normal; puede progresar a hipotiroidismo manifiesto (5%/ano si anti-TPO+) | Elevated TSH with normal free T4; may progress to overt hypothyroidism (5%/year if anti-TPO+)',
        },
        {
          term: 'coma mixedematoso | myxedema coma',
          definition:
            'Emergencia por hipotiroidismo severo: hipotermia, bradicardia, alteracion mental, hiponatremia; mortalidad 30-60%; requiere levotiroxina IV | Emergency from severe hypothyroidism: hypothermia, bradycardia, altered mental status; 30-60% mortality',
        },
        {
          term: 'tormenta tiroidea | thyroid storm',
          definition:
            'Emergencia por hipertiroidismo descompensado: fiebre >40C, taquicardia, delirio, insuficiencia cardiaca; mortalidad 10-30% con tratamiento | Emergency from decompensated hyperthyroidism: high fever, tachycardia, delirium, heart failure',
        },
        {
          term: 'sindrome del eutiroideo enfermo | sick euthyroid syndrome',
          definition:
            'Alteraciones de pruebas tiroideas en enfermedad no tiroidea (hospitalizados, UCI); tipicamente T3 baja, TSH baja o normal; no requiere tratamiento con hormona tiroidea | Thyroid test abnormalities in non-thyroidal illness; typically low T3, low-normal TSH; does not require thyroid hormone treatment',
        },
      ],
      analogies: [
        'El eje tiroideo funciona como un termostato inteligente: el hipotalamo es el sensor de temperatura, la hipofisis es el controlador que envia la senal (TSH), y la tiroides es el calefactor que produce calor (T4/T3). Si hay mucho calor, el controlador apaga el calefactor (TSH baja). | The thyroid axis works like a smart thermostat: hypothalamus is the temperature sensor, pituitary is the controller sending signals (TSH), and thyroid is the heater producing heat (T4/T3).',
      ],
    },

    3: {
      level: 3,
      summary:
        'La interpretacion sistematica del panel tiroideo requiere: 1) TSH como prueba inicial, 2) T4L para confirmar y clasificar, 3) T3L en hipertiroidismo con T4L normal (T3 tirotoxicosis), 4) anticuerpos para etiologia autoinmune, y 5) contexto clinico incluyendo embarazo, medicamentos y enfermedad no tiroidea. El gammagrama tiroideo diferencia Graves de tiroiditis y nodulos autonomos. | Systematic thyroid panel interpretation requires TSH as initial test, free T4 for confirmation, free T3 for T3-thyrotoxicosis, antibodies for autoimmune etiology, and thyroid scan to differentiate Graves from thyroiditis.',
      explanation: `# Panel Tiroideo - Interpretacion Clinica | Thyroid Panel - Clinical Interpretation

## Algoritmo diagnostico del hipertiroidismo | Hyperthyroidism diagnostic algorithm

### Paso 1: TSH suprimida (<0.1 mUI/L) → confirmar con T4L y T3L
### Paso 2: Diferenciar causa

**Gammagrama tiroideo con I-123 o Tc-99m:**
| Patron | Diagnostico | Tratamiento |
|--------|-------------|-------------|
| Captacion difusa aumentada | Enfermedad de Graves | Metimazol*, I-131, o cirugia |
| Captacion focal (nodulo caliente) | Nodulo toxico / BMN toxico | I-131 o cirugia |
| Captacion baja/nula | Tiroiditis, facticia, exogena | Betabloqueadores; autolimitada |

*En 1er trimestre embarazo: PTU (propiltiouracilo) por riesgo teratogenico del metimazol

### T3 tirotoxicosis | T3 thyrotoxicosis
- TSH suprimida + T4L normal + **T3L elevada**
- Causa comun: adenoma toxico, Graves temprano, ingestion de T3
- **Siempre pedir T3L cuando TSH esta suprimida y T4L es normal**

## Algoritmo diagnostico del hipotiroidismo | Hypothyroidism diagnostic algorithm

### TSH elevada → Confirmar con T4L

**Hipotiroidismo primario (TSH alta, T4L baja):**
| Etiologia | Clave diagnostica |
|-----------|------------------|
| Hashimoto (tiroiditis autoinmune) | Anti-TPO+ (>90%), bocio firme |
| Post-ablacion con I-131 | Historia de Graves tratado |
| Post-tiroidectomia | Historia quirurgica |
| Hipotiroidismo por farmacos | Amiodarona, litio, checkpoint inhibitors |
| Deficiencia de yodo | Endemica en regiones sin yodacion de sal |
| Tiroiditis postparto | 2-12 meses postparto, transitorio |

**Hipotiroidismo central (TSH baja o inapropiadamente normal, T4L baja):**
- Lesion hipofisaria: tumor, cirugia, radiacion, Sheehan, infiltrativo
- **No usar TSH sola para diagnostico en sospecha de enfermedad hipofisaria**
- Evaluar todos los ejes hipofisarios (ACTH, LH/FSH, GH, PRL)

### Hipotiroidismo subclinico - Cuando tratar | When to treat

| TSH | Anti-TPO | Embarazo | Decision |
|-----|----------|---------|---------|
| >10 mUI/L | +/- | No | Tratar (alto riesgo de progresion) |
| 4-10 + sintomas | + | No | Considerar tratamiento prueba |
| 4-10 sin sintomas | - | No | Observar, repetir en 6-12 meses |
| >2.5 | +/- | Si | Tratar (meta TSH <2.5) |
| 4-10 | + | Planeando embarazo | Tratar |

## Valores de referencia completos | Complete reference ranges

| Prueba | Convencional | SI | Critico bajo | Critico alto |
|--------|-------------|-----|-------------|-------------|
| TSH | 0.4-4.0 mUI/L | 0.4-4.0 mU/L | <0.01 (tirotoxicosis) | >50 (mixedema) |
| T4 libre | 0.8-1.8 ng/dL | 10-23 pmol/L | <0.4 ng/dL | >5 ng/dL |
| T3 libre | 2.3-4.2 pg/mL | 3.5-6.5 pmol/L | - | >20 pg/mL |
| T4 total | 5.0-12.0 ug/dL | 64-155 nmol/L | - | - |
| T3 total | 80-200 ng/dL | 1.2-3.1 nmol/L | - | - |
| Anti-TPO | <35 IU/mL | - | - | - |
| TRAb | <1.75 IU/L | - | - | - |
| Tiroglobulina | 2-35 ng/mL | - | - | - |
| Calcitonina | <10 pg/mL (H), <5 pg/mL (M) | - | - | >100 pg/mL (ca. medular) |

## Tiroides y embarazo - Manejo | Thyroid in pregnancy

### Cambios fisiologicos | Physiologic changes
- hCG estimula tiroides → TSH baja en 1er trimestre (normal)
- TBG aumenta por estrogenos → T4 total sube (usar T4 libre)
- Rangos de TSH especificos por trimestre:
  - 1er trimestre: 0.1-2.5 mUI/L
  - 2do trimestre: 0.2-3.0 mUI/L
  - 3er trimestre: 0.3-3.0 mUI/L

### Enfermedad de Graves en embarazo | Graves disease in pregnancy
- **1er trimestre**: PTU (menor riesgo teratogenico que metimazol)
- **2do-3er trimestre**: cambiar a metimazol (PTU tiene riesgo de fallo hepatico)
- TRAb en 3er trimestre para evaluar riesgo de hipertiroidismo fetal/neonatal
- Meta: T4L en limite superior normal (evitar hipotiroidismo fetal)

## Tiroiditis - Diagnostico diferencial | Thyroiditis differential

| Tipo | Dolor | TSH inicial | Curso | Gammagrama |
|------|-------|------------|-------|-----------|
| Hashimoto | No | Alta (hipotiroidismo) | Cronico, permanente | No necesario |
| Subaguda (De Quervain) | Si, severo | Baja → alta → normal | Hiper → hipo → eutiroideo (semanas-meses) |  Captacion baja |
| Silente / Postparto | No | Baja → alta → normal | Similar a subaguda, mas leve | Captacion baja |
| Supurativa | Si, con fiebre | Variable | Requiere antibioticos/drenaje | Variable |
| Amiodarona tipo 1 | No | Baja | En tiroides con patologia previa | Puede tener captacion |
| Amiodarona tipo 2 | No | Baja | Tiroiditis destructiva | Sin captacion |`,
      keyTerms: [
        {
          term: 'enfermedad de Graves | Graves disease',
          definition:
            'Causa mas comun de hipertiroidismo en jovenes; anticuerpos estimulantes del receptor de TSH (TRAb/TSI) causan produccion excesiva de T4/T3; se asocia a oftalmopatia, bocio difuso, y dermopatia | Most common cause of hyperthyroidism in young adults; TSH receptor stimulating antibodies cause excess T4/T3 production',
        },
        {
          term: 'tiroiditis de Hashimoto | Hashimoto thyroiditis',
          definition:
            'Causa mas comun de hipotiroidismo en areas con suficiente yodo; destruccion autoinmune de la tiroides (anti-TPO+ en >90%); bocio firme y gradual perdida de funcion | Most common cause of hypothyroidism in iodine-sufficient areas; autoimmune thyroid destruction (anti-TPO+ in >90%)',
        },
        {
          term: 'gammagrama tiroideo | thyroid scan',
          definition:
            'Estudio con I-123 o Tc-99m que muestra captacion de yodo por la tiroides; diferencia Graves (difusa alta) de tiroiditis (baja) y nodulos autonomos (focal) | Study with I-123 or Tc-99m showing thyroid iodine uptake; differentiates Graves from thyroiditis and autonomous nodules',
        },
        {
          term: 'T3 tirotoxicosis | T3 thyrotoxicosis',
          definition:
            'Hipertiroidismo con TSH suprimida y T4L normal pero T3L elevada; diagnostico se pierde si no se mide T3L; comun en adenoma toxico y Graves temprano | Hyperthyroidism with suppressed TSH and normal free T4 but elevated free T3; missed if free T3 is not measured',
        },
        {
          term: 'TBG (globulina fijadora de tiroxina) | thyroxine-binding globulin',
          definition:
            'Proteina que transporta T4 en sangre; aumenta con estrogenos (embarazo, ACO) elevando T4 total pero no T4 libre; por eso se prefiere T4 libre | Protein carrying T4 in blood; increases with estrogens raising total T4 but not free T4; hence free T4 is preferred',
        },
      ],
      clinicalNotes:
        'Siempre pedir T3 libre cuando la TSH esta suprimida y la T4 libre es normal: hasta 5% de hipertiroidismo es por T3 tirotoxicosis aislada. En tiroiditis subaguda (dolorosa), el diagnostico clave es captacion baja en gammagrama (no dar antitiroideos; es destructiva, no hiperproductiva). La biotina (suplementos en dosis >5 mg) interfiere con ensayos inmunoanalíticos y puede simular Graves (TSH baja falsa, T4 alta falsa); suspender 48-72 horas antes de pruebas. | Always order free T3 when TSH is suppressed and free T4 is normal. In painful subacute thyroiditis, the key is low uptake scan. Biotin supplements interfere with thyroid assays.',
    },

    4: {
      level: 4,
      summary:
        'La interpretacion avanzada del panel tiroideo integra patrones discordantes TSH-T4L (enfermedad central, resistencia a hormona tiroidea, interferencia de ensayos), manejo de tirotoxicosis inducida por amiodarona (tipo 1 vs. 2), evaluacion de nodulos tiroideos (Bethesda, molecular), y optimizacion terapeutica de levotiroxina con monitoreo avanzado. | Advanced thyroid panel interpretation integrates discordant TSH-T4L patterns, amiodarone-induced thyrotoxicosis management, thyroid nodule evaluation, and levothyroxine optimization.',
      explanation: `# Panel Tiroideo - Analisis Avanzado | Thyroid Panel - Advanced Analysis

## Patrones discordantes TSH/T4L | Discordant TSH/T4L patterns

### TSH inapropiadamente normal o elevada con T4L alta | Inappropriately normal/high TSH with high free T4

| Diagnostico | TSH | T4L | Clave |
|-------------|-----|-----|-------|
| TSHoma (adenoma productor de TSH) | Normal o alta | Alta | Subunidad alfa elevada; RMN hipofisaria |
| Resistencia a hormona tiroidea (RTH) | Normal o alta | Alta | Mutacion TRbeta; sin sintomas de tirotoxicosis |
| Interferencia de ensayo | Normal discordante | Alta discordante | Anticuerpos heterófilos; repetir con metodo diferente |
| Interferencia por biotina | Baja (falsa) | Alta (falsa) | Suspender biotina 48-72h y repetir |

### TSH baja con T4L baja | Low TSH with low free T4
- **Hipotiroidismo central**: tumor hipofisario, cirugia, radiacion, Sheehan, infiltrativo
- **Sindrome del eutiroideo enfermo**: enfermedad critica; T3 tipicamente mas baja
- **Recuperacion de tirotoxicosis**: TSH se recupera lentamente (semanas-meses)

### Diagnostico de TSHoma | TSH-producing adenoma workup
1. TSH inapropiadamente normal o alta + T4L alta
2. Descartar: RTH (historia familiar), interferencia de ensayo
3. Subunidad alfa: elevada en TSHoma, normal en RTH
4. Cociente alfa/TSH >1.0 sugiere TSHoma
5. RMN de silla turca
6. Respuesta a TRH: plana en TSHoma (perdida de feedback)

## Tirotoxicosis inducida por amiodarona (TIA) | Amiodarone-induced thyrotoxicosis

### Diferenciacion tipo 1 vs. tipo 2 | Type 1 vs. Type 2

| Caracteristica | TIA Tipo 1 | TIA Tipo 2 |
|---------------|-----------|-----------|
| Mecanismo | Exceso de yodo → hiperproduccion (Jod-Basedow) | Tiroiditis destructiva por amiodarona |
| Tiroides previa | Patologia preexistente (BMN, Graves latente) | Tiroides previamente normal |
| Ecografia Doppler | Hipervascularidad | Avascularidad |
| IL-6 | Normal | Elevada |
| Gammagrama | Captacion normal o aumentada | Captacion ausente |
| Tratamiento | Antitiroideos (metimazol) +/- perclorato | Corticosteroides (prednisona) |

- En la practica, formas mixtas son comunes: puede iniciarse terapia combinada
- Amiodarona puede o no suspenderse (discutir con cardiologia)

## Evaluacion de nodulos tiroideos | Thyroid nodule evaluation

### Sistema Bethesda para citologia (BAAF) | Bethesda System

| Bethesda | Diagnostico | Riesgo malignidad | Manejo |
|----------|-------------|-------------------|--------|
| I | No diagnostica | 5-10% | Repetir BAAF |
| II | Benigna | 0-3% | Seguimiento ecografico |
| III | Atipia de significado indeterminado (AUS/FLUS) | 6-18% | Repetir BAAF o prueba molecular |
| IV | Neoplasia folicular / sospecha | 10-40% | Lobectomia o prueba molecular |
| V | Sospechosa de malignidad | 45-60% | Lobectomia o tiroidectomia |
| VI | Maligna | 94-99% | Tiroidectomia total |

### Pruebas moleculares en nodulos indeterminados (Bethesda III-IV) | Molecular testing

| Prueba | Tipo | Sensibilidad | Especificidad | Uso |
|--------|------|-------------|---------------|-----|
| Afirma GSC (Veracyte) | Clasificador genomico (RNA) | 91-100% | 68-82% | "Rule out" (si benigno, observar) |
| ThyroSeq v3 | Panel mutacional (DNA+RNA) | 94-98% | 82-85% | "Rule in/out" dual |
| ThyGeNEXT/ThyraMIR | Mutaciones + miRNA | 89% | 85% | Combinado |

### Indicaciones de BAAF segun tamano y ecografia (TI-RADS) | FNA indications

| ACR TI-RADS | Patron | BAAF si: |
|-------------|--------|----------|
| TR1 (benigno) | Quistico puro | No BAAF |
| TR2 (no sospechoso) | Isoecogenico, espongiforme | >=2.5 cm |
| TR3 (levemente sospechoso) | Hipoecogenico sin rasgos sospechosos | >=2.5 cm |
| TR4 (moderadamente sospechoso) | Hipoecogenico solido | >=1.5 cm |
| TR5 (altamente sospechoso) | Solido hipoecoico + calcificaciones/margenes irregulares | >=1.0 cm |

## Optimizacion de levotiroxina | Levothyroxine optimization

### Factores que afectan absorcion | Factors affecting absorption
| Factor | Efecto | Manejo |
|--------|--------|--------|
| Calcio, hierro | Disminuyen absorcion | Separar 4 horas |
| IPP (omeprazol) | Disminuye absorcion | Separar 4 horas o usar forma liquida |
| Cirugia bariatrica | Disminuye absorcion | Dosis mayores, forma liquida |
| Celiaca, lactosa | Malabsorcion | Tratar enfermedad base; forma libre de lactosa |
| Cafe | Disminuye absorcion transitoriamente | Tomar en ayunas 30-60 min antes |

### Dosis y monitoreo | Dosing and monitoring
- Dosis inicial estimada: 1.6 ug/kg/dia (adultos jovenes sin cardiopatia)
- Inicio cauteloso: 25-50 ug/dia en ancianos o cardiópatas
- Monitoreo TSH: 6-8 semanas despues de cada cambio de dosis
- Meta TSH: 0.5-2.5 mUI/L (general); <2.5 (embarazo)

## Emergencias tiroideas | Thyroid emergencies

### Score de Burch-Wartofsky para tormenta tiroidea | Burch-Wartofsky score
- Evalua: temperatura, FC, disfuncion SNC, ICC, GI, factor precipitante
- >=45: altamente sugestivo de tormenta tiroidea
- 25-44: tormenta inminente
- <25: tormenta improbable

### Tratamiento de tormenta tiroidea (secuencia BATS) | Thyroid storm treatment
1. **B**etabloqueadores: propranolol 60-80 mg cada 4-6h (tambien inhibe T4→T3)
2. **A**ntitiroideos: PTU 200 mg cada 4h (bloquea sintesis Y conversion T4→T3)
3. **T**erapia de soporte: dexametasona 2 mg cada 6h (inhibe conversion T4→T3), enfriamiento, fluidos
4. **S**olucion de yodo (Lugol): 1h DESPUES de antitiroideo (bloquea liberacion; efecto Wolff-Chaikoff)`,
      keyTerms: [
        {
          term: 'tirotoxicosis por amiodarona tipo 2 (TIA-2) | amiodarone-induced thyrotoxicosis type 2',
          definition:
            'Tiroiditis destructiva causada por toxicidad directa de amiodarona en tiroides previamente sana; se caracteriza por avascularidad en Doppler e IL-6 elevada; se trata con corticosteroides | Destructive thyroiditis from amiodarone direct toxicity in previously normal thyroid; treated with corticosteroids',
        },
        {
          term: 'resistencia a hormona tiroidea (RTH) | resistance to thyroid hormone',
          definition:
            'Condicion genetica (mutacion TRbeta) con TSH inapropiadamente normal o alta y T4L alta, pero sin sintomas de tirotoxicosis; la mayoria no requiere tratamiento | Genetic condition with inappropriately normal TSH and high free T4 without thyrotoxicosis symptoms',
        },
        {
          term: 'sistema Bethesda | Bethesda System',
          definition:
            'Clasificacion citologica estandarizada de 6 categorias para aspirados de nodulos tiroideos por BAAF; guia el manejo clinico segun riesgo de malignidad | Standardized 6-category cytologic classification for thyroid nodule FNA; guides management based on malignancy risk',
        },
        {
          term: 'TSHoma (adenoma productor de TSH) | TSH-producing adenoma',
          definition:
            'Tumor hipofisario raro que produce TSH en exceso, causando hipertiroidismo central (TSH inapropiadamente alta con T4L alta); diferenciado de RTH por subunidad alfa elevada | Rare pituitary tumor producing excess TSH causing central hyperthyroidism; differentiated from RTH by elevated alpha subunit',
        },
        {
          term: 'TI-RADS (Thyroid Imaging Reporting and Data System)',
          definition:
            'Sistema ACR de clasificacion ecografica de nodulos tiroideos (TR1-TR5) que estandariza indicaciones de BAAF segun patron ecografico y tamano | ACR ultrasound classification system for thyroid nodules standardizing FNA indications by pattern and size',
        },
      ],
      clinicalNotes:
        'En patrones discordantes TSH/T4L, siempre considerar: 1) interferencia de ensayo (biotina, anticuerpos heterófilos) como causa mas comun, 2) RTH y TSHoma como causas raras. La TIA es uno de los diagnosticos mas desafiantes en endocrinologia; el Doppler tiroideo es la herramienta mas util para diferenciar tipo 1 (hipervascular) de tipo 2 (avascular). En nodulos Bethesda III-IV, las pruebas moleculares evitan cirugias innecesarias en ~50% de los casos. | In discordant TSH/T4L, always consider assay interference first. Thyroid Doppler is the most useful tool for AIT differentiation. Molecular testing avoids unnecessary surgery in ~50% of Bethesda III-IV nodules.',
    },

    5: {
      level: 5,
      summary:
        'La interpretacion experta del panel tiroideo integra diagnostico molecular de cancer tiroideo (mutaciones BRAF, RAS, rearreglos RET/PTC), manejo de enfermedad tiroidea refractaria, inmuno-oncologia y tiroides (tiroiditis por checkpoint inhibitors), medicina de precision en dosificacion de levotiroxina, y aplicacion de inteligencia artificial en clasificacion de nodulos. | Expert thyroid panel interpretation integrates molecular diagnostics of thyroid cancer, refractory thyroid disease management, immuno-oncology thyroid effects, precision levothyroxine dosing, and AI-assisted nodule classification.',
      explanation: `# Panel Tiroideo - Nivel Experto | Thyroid Panel - Expert Level

## Diagnostico molecular del cancer tiroideo | Molecular diagnostics of thyroid cancer

### Mutaciones y rearreglos en cancer tiroideo | Mutations and rearrangements

| Alteracion | Cancer | Frecuencia | Significado clinico |
|-----------|--------|-----------|-------------------|
| BRAF V600E | Papilar clasico | 40-60% | Peor pronostico; guia terapia dirigida (dabrafenib + trametinib) |
| RAS (NRAS, HRAS, KRAS) | Folicular, variante folicular papilar | 40-50% | Menor agresividad que BRAF |
| RET/PTC rearreglos | Papilar (especialmente radiacion-asociado) | 10-20% | Selpercatinib, pralsetinib |
| PAX8-PPARgamma | Folicular | 30-35% | Diagnostico de neoplasia folicular |
| RET punto | Medular (MEN2A: C634R; MEN2B: M918T) | >95% hereditario | Screening familiar; tiroidectomia profilactica |
| TERT promoter | Papilar, folicular | 10-15% | Factor pronostico adverso independiente; especialmente con BRAF |
| TP53 | Anaplasico | 50-80% | Marca la desdiferenciacion |
| EIF1AX | Folicular, poco diferenciado | 5-10% | Generalmente favorable |

### Clasificacion molecular del cancer tiroideo (TCGA) | Molecular classification
- **BRAF-like (señalización MAPK)**: agresividad variable segun marcadores adicionales
- **RAS-like (señalización PI3K)**: generalmente menos agresivo
- **BRAF V600E + TERT promoter**: combinacion de peor pronostico

### Cancer tiroideo diferenciado - Estratificacion ATA 2015 | ATA risk stratification

| Riesgo | Caracteristicas | Recurrencia | Manejo |
|--------|----------------|-------------|--------|
| Bajo | T1-T2, N0, sin invasion, sin variante agresiva | 1-3% | Lobectomia +/- supresion leve TSH |
| Intermedio | N1 microscopico, invasion minima, variante agresiva | 8-22% | Tiroidectomia total + I-131 selectivo |
| Alto | Extension extratiroidea, N1 macroscopico, M1 | >30% | Tiroidectomia total + I-131 + supresion TSH |

### Tiroglobulina como marcador tumoral | Thyroglobulin as tumor marker
- **Post-tiroidectomia total**: debe ser indetectable (<0.2 ng/mL)
- Elevacion sugiere enfermedad residual o recurrente
- Anticuerpos anti-tiroglobulina interfieren (hacer ambos siempre)
- Tiroglobulina estimulada (post-deprivacion o rhTSH) es mas sensible
- Tendencia de tiroglobulina >tiempo: mas importante que valor absoluto aislado

## Tiroiditis por inhibidores de checkpoint inmune (ICI) | Checkpoint inhibitor thyroiditis

### Epidemiologia y patogenia | Epidemiology and pathogenesis
- Prevalencia: 5-10% con anti-PD-1 (nivolumab, pembrolizumab), mayor con combinacion
- Mecanismo: activacion inmune desregulada contra tiroides (similar a tiroiditis)
- Curso tipico: tirotoxicosis transitoria (2-6 semanas) → hipotiroidismo permanente (50-80%)
- Anti-TPO puede hacerse positivo pero no predice consistentemente

### Manejo | Management
| Fase | Pruebas | Tratamiento |
|------|---------|-------------|
| Tirotoxicosis | TSH suprimida, T4L alta | Betabloqueador; no suspender ICI |
| Hipotiroidismo | TSH alta, T4L baja | Levotiroxina; no suspender ICI |
| Mixedema/tormenta | Valores criticos | Tratamiento de emergencia; discutir con oncologia |

- **Perla**: La tiroiditis por ICI puede ser marcador de buena respuesta antitumoral
- Monitoreo: TSH cada ciclo de ICI por los primeros 6 meses, luego cada 3 meses

## Enfermedad de Graves refractaria y oftalmopatia | Refractory Graves and orbitopathy

### Oftalmopatia de Graves - Manejo actual | Graves orbitopathy management
- **Teprotumumab** (Tepezza): anticuerpo anti-IGF-1R
  - Primer farmaco aprobado para oftalmopatia de Graves activa moderada-severa
  - Reduccion significativa de proptosis y diplopia
  - 8 infusiones cada 3 semanas
  - Efectos secundarios: hiperglucemia, perdida auditiva
- Corticosteroides IV (metilprednisolona pulsos): segunda linea
- Radiacion orbital: casos refractarios
- Cirugia descompresiva: amenaza visual, cosmetica

### Hipertiroidismo refractario a antitiroideos | Antithyroid drug-refractory hyperthyroidism
- Agranulocitosis por metimazol/PTU (0.2-0.5%): suspender inmediatamente; G-CSF
- Alternativas: I-131 definitivo o tiroidectomia
- Preparacion prequirurgica: yoduro de potasio (SSKI) 7-10 dias antes para reducir vascularidad

## Medicina de precision en tiroides | Precision thyroid medicine

### Farmacogenomica de levotiroxina | Levothyroxine pharmacogenomics
- Variantes genéticas de deyodinasas (DIO1, DIO2) afectan conversion T4→T3
- **Polimorfismo DIO2 Thr92Ala**: asociado a menor conversion; puede explicar sintomas persistentes con TSH normalizada
- Combinacion T4+T3: sin evidencia solida de superioridad; considerar en casos refractarios con DIO2 polimorfismo
- Formulaciones: comprimidos, liquida, capsulas de gel; diferentes biodisponibilidades

### Inteligencia artificial en tiroides | AI in thyroid medicine
- **Clasificacion ecografica de nodulos**: Redes neuronales convolucionales (CNN) alcanzan sensibilidad >90% para malignidad, comparable a radiologos expertos
- **Citologia digital**: AI asistida para clasificacion Bethesda; reduce variabilidad interobservador
- **Prediccion de respuesta**: Modelos ML para predecir respuesta a I-131 en cancer diferenciado

## Valores de referencia avanzados | Advanced reference ranges

| Prueba | Convencional | SI | Notas avanzadas |
|--------|-------------|-----|----------------|
| TSH | 0.4-4.0 mUI/L | 0.4-4.0 mU/L | Meta en ca. bajo riesgo: 0.5-2.0; alto riesgo: 0.1-0.5 |
| T4 libre | 0.8-1.8 ng/dL | 10-23 pmol/L | Metodo: dialisis de equilibrio es gold standard |
| T3 libre | 2.3-4.2 pg/mL | 3.5-6.5 pmol/L | Mas variable entre ensayos; calcular T3/T4 ratio |
| rT3 (T3 reversa) | 10-24 ng/dL | 0.15-0.37 nmol/L | Elevada en sindrome del eutiroideo enfermo |
| TSI (inmunoglobulina estimulante) | <140% actividad basal | - | Mas especifica que TRAb para Graves activa |
| Calcitonina | <10 (H), <5 (M) pg/mL | - | Screening ca. medular; >100 = altamente sugestivo |

## Perlas clinicas de nivel experto | Expert clinical pearls

1. **BRAF V600E + TERT promoter**: La coexistencia es el factor pronostico adverso mas fuerte en ca. papilar; indica alto riesgo de recurrencia y mortalidad; justifica manejo agresivo
2. **Tiroglobulina con anticuerpos anti-Tg+**: La tiroglobulina no es confiable; monitorear tendencia de los propios anticuerpos (disminucion sugiere remision, aumento sugiere recurrencia)
3. **Hipertiroidismo en enfermedad critica**: No tratar basandose solo en pruebas tiroideas anormales en UCI (sindrome del eutiroideo enfermo es comun); tratar solo si hay evidencia clinica clara
4. **Hipotiroidismo refractario a dosis adecuada**: Verificar adherencia (elevar TSH 2-3 semanas post-dosis supervisada), malabsorcion, interacciones medicamentosas antes de subir dosis
5. **Cancer medular de tiroides**: Calcitonina y CEA son marcadores; screening de feocromocitoma (metanefrinas) ANTES de cirugia en MEN2`,
      keyTerms: [
        {
          term: 'teprotumumab (Tepezza) | teprotumumab',
          definition:
            'Anticuerpo monoclonal anti-IGF-1R aprobado para oftalmopatia de Graves activa; reduce proptosis y diplopia significativamente; primer tratamiento dirigido a la fisiopatologia de la oftalmopatia | Anti-IGF-1R monoclonal antibody approved for active Graves orbitopathy; significantly reduces proptosis and diplopia',
        },
        {
          term: 'BRAF V600E + TERT promoter (coexistencia) | BRAF V600E + TERT promoter coexistence',
          definition:
            'Combinacion mutacional en cancer papilar de tiroides con peor pronostico: mayor tasa de recurrencia, resistencia a I-131, y mortalidad especifica; justifica estratificacion de alto riesgo independiente del estadio | Worst-prognosis mutation combination in papillary thyroid cancer; justifies high-risk stratification regardless of stage',
        },
        {
          term: 'tiroiditis por checkpoint inhibitors | checkpoint inhibitor thyroiditis',
          definition:
            'Efecto secundario inmunomediado de anti-PD-1/PD-L1/CTLA-4; curso tipico de tirotoxicosis transitoria seguida de hipotiroidismo permanente; no requiere suspension del inmunoterapico | Immune-mediated side effect of checkpoint inhibitors; typical course of transient thyrotoxicosis followed by permanent hypothyroidism; does not require immunotherapy discontinuation',
        },
        {
          term: 'polimorfismo DIO2 Thr92Ala | DIO2 Thr92Ala polymorphism',
          definition:
            'Variante genetica de la deyodinasa tipo 2 que puede reducir conversion periferica de T4 a T3; propuesta como explicacion de sintomas persistentes en hipotiroideos con TSH normal bajo levotiroxina | Genetic variant of type 2 deiodinase potentially reducing peripheral T4 to T3 conversion; proposed explanation for persistent symptoms in hypothyroid patients on levothyroxine with normal TSH',
        },
        {
          term: 'selpercatinib / pralsetinib | selpercatinib / pralsetinib',
          definition:
            'Inhibidores selectivos de RET aprobados para cancer medular de tiroides avanzado RET-mutado y cancer tiroideo diferenciado RET-fusionado; tasas de respuesta >60% | Selective RET inhibitors approved for advanced RET-mutant medullary thyroid cancer and RET-fusion differentiated thyroid cancer; >60% response rates',
        },
      ],
      clinicalNotes:
        'El cancer de tiroides esta en una era de medicina molecular: 1) Pruebas moleculares (ThyroSeq, Afirma) reducen cirugias innecesarias en nodulos indeterminados ~50%. 2) Terapias dirigidas (dabrafenib+trametinib para BRAF+, selpercatinib para RET) transforman el cancer avanzado refractario a I-131. 3) La tiroiditis por ICI es comun y no requiere suspension de inmunoterapia. 4) Teprotumumab revoluciona la oftalmopatia de Graves. 5) El polimorfismo DIO2 puede explicar por que ~10-15% de hipotiroideos no se sienten bien con TSH normalizada, aunque la evidencia para T4+T3 combinada sigue siendo debatida. | Thyroid cancer is in a molecular medicine era. Molecular tests reduce unnecessary surgeries. Targeted therapies transform refractory cancer. ICI thyroiditis is common and immunotherapy should continue. DIO2 polymorphism may explain persistent symptoms.',
    },
  },

  media: [],

  citations: [
    {
      id: 'ata-hypothyroidism-2014',
      type: 'guideline',
      title: 'ATA Guidelines for the Treatment of Hypothyroidism',
      authors: ['Jonklaas, J.', 'Bianco, A.C.', 'Bauer, A.J.'],
      source: 'Thyroid, 2014; 24(12):1670-1751',
    },
    {
      id: 'ata-thyroid-nodules-2015',
      type: 'guideline',
      title: 'ATA Management Guidelines for Patients with Thyroid Nodules and Differentiated Thyroid Cancer',
      authors: ['Haugen, B.R.', 'Alexander, E.K.', 'Bible, K.C.'],
      source: 'Thyroid, 2016; 26(1):1-133',
    },
    {
      id: 'ross-hyperthyroidism-2016',
      type: 'guideline',
      title: 'ATA Guidelines for Diagnosis and Management of Hyperthyroidism',
      authors: ['Ross, D.S.', 'Burch, H.B.', 'Cooper, D.S.'],
      source: 'Thyroid, 2016; 26(10):1343-1421',
    },
    {
      id: 'williams-endocrinology-14e',
      type: 'textbook',
      title: 'Williams Textbook of Endocrinology',
      authors: ['Melmed, S.', 'Auchus, R.J.', 'Goldfine, A.B.'],
      source: 'Elsevier, 14th Edition',
      chapter: 'Thyroid',
    },
    {
      id: 'gor-teprotumumab-nejm-2020',
      type: 'journal',
      title: 'Teprotumumab for Thyroid-Associated Ophthalmopathy',
      authors: ['Douglas, R.S.', 'Kahaly, G.J.', 'Patel, A.'],
      source: 'New England Journal of Medicine, 2020; 382:341-352',
    },
  ],

  crossReferences: [
    {
      targetId: 'lab-tsh',
      targetType: 'concept',
      relationship: 'child',
      label: 'TSH | Thyroid Stimulating Hormone',
    },
    {
      targetId: 'lab-free-t4',
      targetType: 'concept',
      relationship: 'child',
      label: 'T4 libre | Free T4',
    },
    {
      targetId: 'lab-free-t3',
      targetType: 'concept',
      relationship: 'child',
      label: 'T3 libre | Free T3',
    },
    {
      targetId: 'lab-anti-tpo',
      targetType: 'concept',
      relationship: 'child',
      label: 'Anti-TPO | Anti-Thyroid Peroxidase Antibodies',
    },
    {
      targetId: 'lab-thyroglobulin',
      targetType: 'concept',
      relationship: 'child',
      label: 'Tiroglobulina | Thyroglobulin',
    },
    {
      targetId: 'condition-hypothyroidism',
      targetType: 'condition',
      relationship: 'see-also',
      label: 'Hipotiroidismo | Hypothyroidism',
    },
    {
      targetId: 'condition-hyperthyroidism',
      targetType: 'condition',
      relationship: 'see-also',
      label: 'Hipertiroidismo | Hyperthyroidism',
    },
    {
      targetId: 'condition-thyroid-cancer',
      targetType: 'condition',
      relationship: 'see-also',
      label: 'Cancer de tiroides | Thyroid Cancer',
    },
    {
      targetId: 'system-endocrine',
      targetType: 'system',
      relationship: 'parent',
      label: 'Sistema endocrino | Endocrine System',
    },
    {
      targetId: 'structure-thyroid-gland',
      targetType: 'structure',
      relationship: 'related',
      label: 'Glandula tiroides | Thyroid Gland',
    },
  ],

  tags: {
    systems: ['endocrino', 'metabolico'],
    topics: [
      'laboratorio',
      'endocrinologia',
      'tiroides',
      'hormonas',
      'autoinmunidad',
      'oncologia',
    ],
    keywords: [
      'panel tiroideo',
      'TSH',
      'T4 libre',
      'T3 libre',
      'hipotiroidismo',
      'hipertiroidismo',
      'Graves',
      'Hashimoto',
      'tiroiditis',
      'nodulo tiroideo',
      'cancer tiroideo',
      'anti-TPO',
      'TRAb',
      'tiroglobulina',
      'levotiroxina',
      'Bethesda',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'pediatrics', 'family-medicine', 'obstetrics-gynecology'],
    },
  },

  createdAt: '2025-06-01T00:00:00.000Z',
  updatedAt: '2025-06-01T00:00:00.000Z',
  version: 1,
  status: 'published',
};
