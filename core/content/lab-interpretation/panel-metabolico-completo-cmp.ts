/**
 * Panel Metabolico Completo (CMP) - Comprehensive Metabolic Panel
 * Contenido educativo para interpretacion del panel metabolico completo
 *
 * Spanish-first bilingual educational content covering:
 * - Glucosa | Glucose
 * - BUN y creatinina | BUN and creatinine
 * - Sodio, potasio, cloro, CO2 | Sodium, potassium, chloride, CO2
 * - Calcio | Calcium
 * - Proteinas totales y albumina | Total protein and albumin
 * - Bilirrubina total | Total bilirubin
 * - Fosfatasa alcalina, AST, ALT | Alkaline phosphatase, AST, ALT
 * - Valores de referencia en unidades convencionales y SI
 * - Valores criticos que requieren accion inmediata
 */

import { EducationalContent } from '../types';

export const panelMetabolicoCompletoCMP: EducationalContent = {
  id: 'lab-panel-metabolico-completo-cmp',
  type: 'topic',
  name: 'Panel Metabolico Completo | Comprehensive Metabolic Panel (CMP)',
  nameEs: 'Panel Metabolico Completo',
  alternateNames: [
    'CMP',
    'Quimica Sanguinea de 14 elementos',
    'Comprehensive Metabolic Panel',
    'Chem-14',
    'SMA-14',
    'Panel Quimico Completo',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'El panel metabolico completo es un analisis de sangre que mide 14 sustancias para ver como estan funcionando tus rinones, higado, y el equilibrio de tu cuerpo. | The comprehensive metabolic panel is a blood test measuring 14 substances to check how your kidneys, liver, and body balance are working.',
      explanation: `# Panel Metabolico Completo | Comprehensive Metabolic Panel

## Que mide este examen? | What does this test measure?

Imagina que tu cuerpo es como una fabrica con muchas maquinas. El panel metabolico revisa 14 cosas en tu sangre para asegurarse de que todo funciona bien:

### Azucar en la sangre | Blood sugar
- **Glucosa**: Es el combustible principal de tu cuerpo. Si esta muy alta, puede indicar diabetes. Si esta muy baja, puedes sentirte mareado o tembloroso.
- Normal en ayunas: 70-100 mg/dL

### Como estan tus rinones | Kidney function
- **BUN** y **Creatinina**: Son "basura" que tus rinones deben limpiar de la sangre. Si estan altos, tus rinones pueden no estar funcionando bien.
- BUN normal: 7-20 mg/dL
- Creatinina normal: 0.7-1.3 mg/dL (hombres), 0.6-1.1 mg/dL (mujeres)

### Minerales y electrolitos | Minerals and electrolytes
- **Sodio**: Controla el agua en tu cuerpo (como una esponja)
- **Potasio**: Muy importante para el corazon
- **Calcio**: Para huesos fuertes y musculos que funcionan bien

### Como esta tu higado | Liver function
- **ALT y AST**: Son enzimas del higado. Si estan altas, el higado puede estar danado.
- **Albumina**: Proteina que tu higado fabrica. Si esta baja, tu higado puede estar enfermo.

## Valores criticos - Ir al doctor inmediatamente | Critical values

| Sustancia | Valor critico bajo | Valor critico alto |
|-----------|-------------------|-------------------|
| Glucosa | Menor de 40 mg/dL (desmayo) | Mayor de 500 mg/dL (coma) |
| Potasio | Menor de 2.5 mEq/L (corazon) | Mayor de 6.5 mEq/L (corazon) |
| Sodio | Menor de 120 mEq/L (convulsiones) | Mayor de 160 mEq/L (confusion) |
| Calcio | Menor de 6.5 mg/dL (calambres) | Mayor de 13 mg/dL (arritmias) |`,
      keyTerms: [
        {
          term: 'glucosa | glucose',
          definition:
            'Azucar en la sangre que le da energia a tu cuerpo | Blood sugar that gives your body energy',
        },
        {
          term: 'creatinina | creatinine',
          definition:
            'Desperdicio de los musculos que los rinones deben filtrar | Muscle waste product that kidneys must filter out',
        },
        {
          term: 'electrolitos | electrolytes',
          definition:
            'Minerales en la sangre (sodio, potasio, cloro) que controlan el agua y los nervios | Blood minerals (sodium, potassium, chloride) that control water balance and nerves',
        },
        {
          term: 'albumina | albumin',
          definition:
            'Proteina importante fabricada por el higado que mantiene liquido en la sangre | Important protein made by the liver that keeps fluid in the blood',
        },
      ],
      analogies: [
        'El panel metabolico es como el tablero de tu carro: muestra la gasolina (glucosa), temperatura del motor (funcion hepatica), nivel de aceite (funcion renal) y presion de llantas (electrolitos). | The CMP is like your car dashboard: showing fuel (glucose), engine temperature (liver function), oil level (kidney function), and tire pressure (electrolytes).',
        'Los electrolitos son como las pilas de tu cuerpo: si no estan en el nivel correcto, las cosas no funcionan bien, especialmente el corazon. | Electrolytes are like your body batteries: if they are not at the right level, things do not work properly, especially the heart.',
      ],
      examples: [
        'Si vas al hospital con vomito y diarrea, el doctor pide un panel metabolico para ver si tus rinones y electrolitos estan bien. | If you go to the hospital with vomiting and diarrhea, the doctor orders a CMP to check your kidneys and electrolytes.',
        'Una persona con diabetes se hace este examen regularmente para vigilar la glucosa y los rinones. | A person with diabetes gets this test regularly to monitor glucose and kidneys.',
      ],
    },

    2: {
      level: 2,
      summary:
        'El CMP mide 14 analitos que evaluan metabolismo de glucosa, funcion renal (BUN, creatinina), electrolitos (Na, K, Cl, CO2), calcio, proteinas (albumina, proteinas totales), y funcion hepatica (bilirrubina, FA, AST, ALT). | The CMP measures 14 analytes evaluating glucose metabolism, renal function, electrolytes, calcium, proteins, and liver function.',
      explanation: `# Panel Metabolico Completo - Nivel Intermedio | CMP - Intermediate Level

## Los 14 componentes del CMP | The 14 CMP components

### Metabolismo de glucosa | Glucose metabolism
| Analito | Rango normal (ayunas) | Unidades SI |
|---------|----------------------|-------------|
| Glucosa | 70-100 mg/dL | 3.9-5.6 mmol/L |

- **Prediabetes**: 100-125 mg/dL (5.6-6.9 mmol/L)
- **Diabetes**: >=126 mg/dL (>=7.0 mmol/L) en dos ocasiones

### Funcion renal | Kidney function
| Analito | Rango normal | Unidades SI |
|---------|-------------|-------------|
| BUN (nitrogeno ureico) | 7-20 mg/dL | 2.5-7.1 mmol/L |
| Creatinina (H) | 0.7-1.3 mg/dL | 62-115 umol/L |
| Creatinina (M) | 0.6-1.1 mg/dL | 53-97 umol/L |

- El cociente **BUN/Creatinina** ayuda a diferenciar causas: >20:1 sugiere causa prerrenal (deshidratacion)
- La **TFGe (eGFR)** calculada es mas precisa que la creatinina sola

### Electrolitos | Electrolytes
| Analito | Rango normal | Unidades SI | Funcion principal |
|---------|-------------|-------------|------------------|
| Sodio (Na) | 136-145 mEq/L | 136-145 mmol/L | Balance de agua |
| Potasio (K) | 3.5-5.0 mEq/L | 3.5-5.0 mmol/L | Funcion cardiaca y muscular |
| Cloro (Cl) | 98-106 mEq/L | 98-106 mmol/L | Balance acido-base |
| CO2 (bicarbonato) | 23-29 mEq/L | 23-29 mmol/L | Buffer acido-base |

### Calcio | Calcium
| Analito | Rango normal | Unidades SI |
|---------|-------------|-------------|
| Calcio total | 8.5-10.5 mg/dL | 2.12-2.62 mmol/L |

- Siempre corregir por albumina: Ca corregido = Ca medido + 0.8 x (4.0 - albumina)

### Proteinas | Proteins
| Analito | Rango normal | Unidades SI |
|---------|-------------|-------------|
| Proteinas totales | 6.0-8.3 g/dL | 60-83 g/L |
| Albumina | 3.5-5.0 g/dL | 35-50 g/L |

### Funcion hepatica | Liver function
| Analito | Rango normal | Unidades SI |
|---------|-------------|-------------|
| Bilirrubina total | 0.1-1.2 mg/dL | 2-21 umol/L |
| Fosfatasa alcalina (FA) | 44-147 U/L | 44-147 U/L |
| AST (TGO) | 10-40 U/L | 10-40 U/L |
| ALT (TGP) | 7-56 U/L | 7-56 U/L |

## Valores criticos que requieren accion inmediata | Critical values

| Analito | Critico bajo | Critico alto |
|---------|-------------|-------------|
| Glucosa | <40 mg/dL (<2.2 mmol/L) | >500 mg/dL (>27.8 mmol/L) |
| Sodio | <120 mEq/L | >160 mEq/L |
| Potasio | <2.5 mEq/L | >6.5 mEq/L |
| Calcio | <6.5 mg/dL (<1.6 mmol/L) | >13.0 mg/dL (>3.25 mmol/L) |
| Creatinina | - | >10 mg/dL (>884 umol/L) |
| CO2 | <10 mEq/L | >40 mEq/L |

## Cuando se pide? | When is it ordered?
- Examenes de rutina | Routine checkups
- Evaluacion preoperatoria | Preoperative assessment
- Monitoreo de medicamentos (diureticos, IECA, metformina) | Medication monitoring
- Urgencias (deshidratacion, diabetes descompensada) | Emergencies`,
      keyTerms: [
        {
          term: 'BUN (nitrogeno ureico en sangre) | blood urea nitrogen',
          definition:
            'Producto del metabolismo de proteinas filtrado por los rinones; se eleva en insuficiencia renal y deshidratacion | Protein metabolism product filtered by kidneys; rises in renal failure and dehydration',
          pronunciation: 'bi-u-en',
        },
        {
          term: 'TFGe / eGFR (tasa de filtracion glomerular estimada)',
          definition:
            'Calculo que estima que tan bien filtran tus rinones usando creatinina, edad, sexo y raza | Calculation estimating how well your kidneys filter using creatinine, age, sex, and race',
        },
        {
          term: 'brecha anionica | anion gap',
          definition:
            'Calculo (Na - Cl - CO2) que ayuda a clasificar acidosis metabolica; normal 8-12 mEq/L | Calculation (Na - Cl - CO2) that helps classify metabolic acidosis; normal 8-12 mEq/L',
        },
        {
          term: 'hipercalcemia | hypercalcemia',
          definition:
            'Calcio en sangre por encima de 10.5 mg/dL; puede causar dolor abdominal, confusion y arritmias | Blood calcium above 10.5 mg/dL; can cause abdominal pain, confusion, and arrhythmias',
        },
      ],
      analogies: [
        'El cociente BUN/Creatinina es como revisar si el problema es de la tuberia (rinon) o de la presion del agua (deshidratacion): si BUN sube mucho mas que creatinina (>20:1), el problema es falta de agua. | The BUN/Creatinine ratio is like checking if the problem is the pipe (kidney) or water pressure (dehydration): if BUN rises much more than creatinine (>20:1), the problem is lack of water.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La interpretacion sistematica del CMP utiliza patrones de analitos agrupados: perfil renal (BUN, creatinina, TFGe), perfil hepatico (AST, ALT, FA, bilirrubina, albumina), perfil electrolitico (Na, K, Cl, CO2, brecha anionica), y metabolismo de calcio (calcio corregido). Los patrones combinados guian el diagnostico diferencial. | Systematic CMP interpretation uses grouped analyte patterns: renal profile, hepatic profile, electrolyte profile, and calcium metabolism. Combined patterns guide differential diagnosis.',
      explanation: `# Panel Metabolico Completo - Interpretacion Clinica | CMP - Clinical Interpretation

## Perfil renal - Interpretacion sistematica | Renal profile

### Clasificacion de lesion renal por creatinina y TFGe | Kidney injury classification

| Estadio ERC | TFGe (mL/min/1.73m2) | Descripcion |
|-------------|----------------------|-------------|
| G1 | >=90 | Normal o alta (puede haber dano con TFGe normal) |
| G2 | 60-89 | Levemente disminuida |
| G3a | 45-59 | Leve a moderadamente disminuida |
| G3b | 30-44 | Moderada a severamente disminuida |
| G4 | 15-29 | Severamente disminuida |
| G5 | <15 | Falla renal (considerar dialisis) |

### Patron prerrenal vs. renal intrinseco vs. postrenal | Pre/intra/post-renal patterns

| Parametro | Prerrenal | Renal intrinseco | Postrenal |
|-----------|-----------|-----------------|-----------|
| BUN/Cr | >20:1 | 10-15:1 | Variable |
| FENa | <1% | >2% (NTA) | Variable |
| Osmolaridad urinaria | >500 mOsm | <350 mOsm | Variable |
| Sedimento urinario | Cilindros hialinos | Cilindros granulosos/celulares | Normal/hematurico |

## Perfil electrolitico - Patrones diagnosticos | Electrolyte patterns

### Trastornos del sodio | Sodium disorders
**Hiponatremia (Na <136 mEq/L):**
- Hipovolemica: deshidratacion, vomito, diarrea, diureticos
- Euvolemica: SIADH (la mas comun hospitalaria), hipotiroidismo, insuficiencia suprarrenal
- Hipervolemica: ICC, cirrosis, sindrome nefrotico

**Hipernatremia (Na >145 mEq/L):**
- Perdida de agua libre: diabetes insipida, fiebre, quemaduras
- Ingesta de sodio: solucion salina hipertonica, bicarbonato IV

### Trastornos del potasio | Potassium disorders
**Hipopotasemia (K <3.5 mEq/L):**
- Perdidas GI: vomito, diarrea
- Perdidas renales: diureticos, hiperaldosteronismo
- Redistribucion: insulina, beta-agonistas, alcalosis

**Hiperpotasemia (K >5.0 mEq/L):**
- Pseudohiperpotasemia: hemolisis de muestra, torniquete prolongado
- Excrecion disminuida: ERC, IECA/ARA2, ahorradores de potasio, hipoaldosteronismo
- Redistribucion: acidosis, destruccion celular (rabdomiolisis, lisis tumoral)

### Brecha anionica (AG) | Anion gap
AG = Na - (Cl + HCO3); Normal: 8-12 mEq/L (sin corregir por albumina)
AG corregida = AG calculada + 2.5 x (4.0 - albumina)

**Acidosis metabolica con AG elevada (MUDPILES):**
M - Metanol | U - Uremia | D - Cetoacidosis Diabetica | P - Propilenglicol
I - Isoniazida/hierro | L - Lactato | E - Etilenglicol | S - Salicilatos

**Acidosis metabolica con AG normal (hiperclorémica):**
- Diarrea, acidosis tubular renal, solucion salina excesiva, acetazolamida

## Perfil hepatico dentro del CMP | Hepatic profile in CMP

### Patrones de dano hepatico | Liver injury patterns
| Patron | ALT/AST | FA/GGT | Bilirrubina | Causas |
|--------|---------|--------|-------------|--------|
| Hepatocelular | >>>> | N o leve aumento | Variable | Hepatitis viral, toxica, isquemica |
| Colestasico | N o leve aumento | >>>> | Aumentada | Obstruccion biliar, farmacos, CBP |
| Infiltrativo | N o leve aumento | >> | N o leve aumento | Metastasis, amiloidosis, sarcoidosis |

### Cociente AST/ALT (cociente de De Ritis) | AST/ALT ratio
- **AST/ALT >2**: sugestivo de hepatopatia alcoholica
- **AST/ALT <1**: hepatitis viral, esteatosis no alcoholica
- **AST y ALT >1000 U/L**: hepatitis viral aguda, isquemia hepatica, toxicidad por acetaminofen

## Calcio - Interpretacion | Calcium interpretation
- **Siempre calcular calcio corregido**: Ca corr = Ca + 0.8 x (4.0 - Alb)
- Hipercalcemia: hiperparatiroidismo primario (ambulatorio) vs. malignidad (hospitalizado)
- Hipocalcemia: hipoparatiroidismo, deficiencia de vitamina D, hipomagnesemia

## Valores de referencia completos | Complete reference ranges

| Analito | Convencional | SI | Factor |
|---------|-------------|-----|--------|
| Glucosa | 70-100 mg/dL | 3.9-5.6 mmol/L | x0.0555 |
| BUN | 7-20 mg/dL | 2.5-7.1 mmol/L | x0.357 |
| Creatinina | 0.7-1.3 mg/dL | 62-115 umol/L | x88.4 |
| Sodio | 136-145 mEq/L | 136-145 mmol/L | x1 |
| Potasio | 3.5-5.0 mEq/L | 3.5-5.0 mmol/L | x1 |
| Cloro | 98-106 mEq/L | 98-106 mmol/L | x1 |
| CO2 | 23-29 mEq/L | 23-29 mmol/L | x1 |
| Calcio | 8.5-10.5 mg/dL | 2.12-2.62 mmol/L | x0.25 |
| Proteinas totales | 6.0-8.3 g/dL | 60-83 g/L | x10 |
| Albumina | 3.5-5.0 g/dL | 35-50 g/L | x10 |
| Bilirrubina total | 0.1-1.2 mg/dL | 2-21 umol/L | x17.1 |
| FA | 44-147 U/L | 44-147 U/L | x1 |
| AST | 10-40 U/L | 10-40 U/L | x1 |
| ALT | 7-56 U/L | 7-56 U/L | x1 |`,
      keyTerms: [
        {
          term: 'brecha anionica | anion gap',
          definition:
            'Na - (Cl + HCO3); aniones no medidos en suero; elevada en acidosis por acidos organicos (lactato, cetonas, toxinas) | Na - (Cl + HCO3); unmeasured serum anions; elevated in acidosis from organic acids (lactate, ketones, toxins)',
        },
        {
          term: 'FENa (fraccion de excrecion de sodio) | fractional excretion of sodium',
          definition:
            'Calculo que ayuda a diferenciar lesion prerrenal (<1%) de necrosis tubular aguda (>2%) | Calculation differentiating prerenal injury (<1%) from acute tubular necrosis (>2%)',
        },
        {
          term: 'cociente de De Ritis | De Ritis ratio',
          definition:
            'AST/ALT; cociente >2 sugiere hepatopatia alcoholica, <1 sugiere hepatitis viral o esteatosis no alcoholica | AST/ALT ratio; >2 suggests alcoholic liver disease, <1 suggests viral hepatitis or NAFLD',
        },
        {
          term: 'SIADH (sindrome de secrecion inadecuada de ADH)',
          definition:
            'Causa comun de hiponatremia euvolemica; exceso de hormona antidiuretica provoca retencion de agua y dilucion del sodio | Common cause of euvolemic hyponatremia; excess antidiuretic hormone causes water retention and sodium dilution',
        },
        {
          term: 'calcio corregido | corrected calcium',
          definition:
            'Calcio ajustado por nivel de albumina: Ca + 0.8 x (4.0 - Alb); necesario porque ~40% del calcio circula unido a albumina | Calcium adjusted for albumin level; necessary because ~40% of circulating calcium is albumin-bound',
        },
      ],
      clinicalNotes:
        'La brecha anionica siempre debe corregirse por albumina en pacientes con hipoalbuminemia (comun en hospitalizados). Una AG "normal" no calculada puede enmascarar una acidosis con AG elevada. Tambien calcular la brecha delta-delta: (AG - 12) / (24 - HCO3); si >2 hay alcalosis metabolica concomitante, si <1 hay acidosis hiperclorémica concomitante. | Always correct anion gap for albumin in hypoalbuminemic patients. A "normal" uncorrected AG may mask a high AG acidosis. Also calculate delta-delta gap to detect mixed acid-base disorders.',
    },

    4: {
      level: 4,
      summary:
        'La interpretacion avanzada del CMP integra ecuaciones de estimacion renal (CKD-EPI 2021), analisis complejo acido-base (triple y cuadruple trastornos), abordaje sistematico de disnatremias usando osmolaridad y volumen, y reconocimiento de patrones hepaticos con correlaciones clinicas especificas. | Advanced CMP interpretation integrates renal estimation equations (CKD-EPI 2021), complex acid-base analysis (triple and quadruple disorders), systematic approach to dysnatremias using osmolality and volume, and hepatic pattern recognition with specific clinical correlations.',
      explanation: `# Panel Metabolico Completo - Analisis Avanzado | CMP - Advanced Analysis

## Evaluacion renal avanzada | Advanced renal assessment

### Ecuaciones de TFGe | eGFR equations
- **CKD-EPI 2021 (sin raza)**: Ecuacion recomendada actualmente; elimina variable de raza
- **Cistatina C**: Mas precisa cuando la creatinina no es confiable (sarcopenia, amputaciones, masa muscular extrema)
- **CKD-EPI creatinina-cistatina C combinada**: Mayor precision en TFGe 45-90

### Biomarcadores emergentes de lesion renal aguda | Emerging AKI biomarkers
| Biomarcador | Deteccion | Ventaja sobre creatinina |
|-------------|-----------|------------------------|
| NGAL (lipocalina) | 2-4 horas post-lesion | Deteccion temprana (creatinina tarda 24-72h) |
| KIM-1 | 6-12 horas | Especifico de dano tubular proximal |
| TIMP-2 x IGFBP7 | 4-6 horas | Aprobado (NephroCheck); predice AKI en UCI |
| Cistatina C serica | Variable | No afectada por masa muscular |

### Criterios KDIGO de lesion renal aguda | KDIGO AKI criteria
| Estadio | Creatinina | Gasto urinario |
|---------|-----------|----------------|
| 1 | Aumento >=0.3 mg/dL en 48h o 1.5-1.9x basal en 7d | <0.5 mL/kg/h por 6-12h |
| 2 | 2.0-2.9x basal | <0.5 mL/kg/h por >=12h |
| 3 | >=3x basal o >=4.0 mg/dL o inicio dialisis | <0.3 mL/kg/h por >=24h o anuria >=12h |

## Analisis acido-base complejo | Complex acid-base analysis

### Algoritmo sistematico | Systematic algorithm
1. **Identificar trastorno primario**: pH, PCO2, HCO3
2. **Verificar compensacion esperada** (formulas de Winter, etc.)
3. **Calcular brecha anionica** (corregida por albumina)
4. **Calcular delta-delta**: (AG - 12) / (24 - HCO3)
   - Si >2: alcalosis metabolica concomitante
   - Si 1-2: acidosis AG pura
   - Si <1: acidosis hiperclorémica concomitante

### Formulas de compensacion | Compensation formulas
| Trastorno primario | Compensacion esperada |
|-------------------|----------------------|
| Acidosis metabolica | PCO2 esperada = 1.5 x HCO3 + 8 (+/-2) [Winter] |
| Alcalosis metabolica | PCO2 esperada = 0.7 x HCO3 + 21 (+/-2) |
| Acidosis respiratoria aguda | HCO3 sube 1 por cada 10 de PCO2 |
| Acidosis respiratoria cronica | HCO3 sube 3.5 por cada 10 de PCO2 |
| Alcalosis respiratoria aguda | HCO3 baja 2 por cada 10 de PCO2 |
| Alcalosis respiratoria cronica | HCO3 baja 5 por cada 10 de PCO2 |

### Brecha osmotica | Osmolar gap
- Osmolaridad calculada = 2(Na) + Glucosa/18 + BUN/2.8
- Brecha osmotica = Osm medida - Osm calculada
- Normal: <10 mOsm/kg
- Elevada: ingestion de alcoholes toxicos (metanol, etilenglicol), manitol, contraste

## Abordaje sistematico de disnatremias | Systematic dysnatremia approach

### Hiponatremia - Algoritmo | Hyponatremia algorithm
1. Confirmar osmolaridad serica baja (<280 mOsm/kg) = hiponatremia verdadera
2. Si osm normal/alta: pseudohiponatremia (hiperlipidemia) o hiponatremia translocacional (hiperglucemia)
3. Evaluar estado de volumen:
   - **Hipovolemica**: Na urinario <20 (extrarrenal) o >20 (renal: diureticos)
   - **Euvolemica**: Na urinario >20, osm urinaria >100 = SIADH; evaluar hipotiroidismo, insuficiencia suprarrenal
   - **Hipervolemica**: ICC, cirrosis, sindrome nefrotico

### Velocidad de correccion del sodio | Rate of sodium correction
- **Hiponatremia cronica**: Maximo 8 mEq/L en 24 horas (riesgo de mielinolisis pontina/sindrome de desmielinizacion osmotica)
- **Hiponatremia aguda sintomatica**: 1-2 mEq/L/hora hasta resolver sintomas, luego lentificar

## Trastornos del potasio - Evaluacion avanzada | Potassium disorders - Advanced

### ECG en hiperpotasemia progresiva | ECG in progressive hyperkalemia
| K+ (mEq/L) | Hallazgo ECG |
|-------------|-------------|
| 5.5-6.5 | Ondas T picudas, acortamiento QT |
| 6.5-7.5 | Prolongacion PR, aplanamiento P |
| 7.0-8.0 | Ensanchamiento QRS |
| >8.0 | Patron sinusoidal, FV, asistolia |

**Tratamiento de emergencia de hiperpotasemia:**
1. Gluconato de calcio IV (estabiliza membrana, NO baja K+)
2. Insulina + glucosa IV (redistribucion)
3. Bicarbonato de sodio IV (si acidosis)
4. Salbutamol nebulizado (redistribucion)
5. Kayexalate/patiromer (eliminacion, efecto tardio)
6. Dialisis (definitivo si refractario)

## Patrones hepaticos complejos dentro del CMP | Complex hepatic patterns

### Elevacion masiva de transaminasas (>1000 U/L) | Massive transaminase elevation
- **Hepatitis isquemica** ("shock liver"): AST>ALT, LDH muy elevada, resolucion rapida
- **Acetaminofen**: Historia, nivel serico, nomograma de Rumack-Matthew
- **Hepatitis viral aguda**: Serologia (HBsAg, IgM anti-HAV, IgM anti-HBc)
- **Hepatitis autoinmune**: ANA, ASMA, IgG elevada

### Discordancia albumina/globulina | Albumin/globulin discordance
- Proteinas totales altas + albumina baja = **brecha de globulinas elevada**
- Pensar en: mieloma multiple, enfermedades autoinmunes, infecciones cronicas
- Brecha de globulinas = proteinas totales - albumina; normal 2-4 g/dL`,
      keyTerms: [
        {
          term: 'mielinolisis pontina / sindrome de desmielinizacion osmotica | osmotic demyelination syndrome',
          definition:
            'Dano neurologico grave por correccion excesivamente rapida de hiponatremia cronica (>8 mEq/L/24h); causa cuadriparesia, disfagia, alteraciones de conciencia | Severe neurologic damage from overly rapid correction of chronic hyponatremia; causes quadriparesis, dysphagia, consciousness alterations',
        },
        {
          term: 'NGAL (lipocalina asociada a gelatinasa de neutrofilos) | neutrophil gelatinase-associated lipocalin',
          definition:
            'Biomarcador de lesion renal aguda detectable 2-4 horas despues del insulto, mucho antes que la creatinina (24-72h) | AKI biomarker detectable 2-4 hours after insult, much earlier than creatinine',
        },
        {
          term: 'CKD-EPI 2021',
          definition:
            'Ecuacion actualizada para estimar TFG sin variable de raza, usando creatinina serica, edad y sexo; recomendada por KDIGO y NKF | Updated eGFR equation without race variable, using serum creatinine, age, and sex; recommended by KDIGO and NKF',
        },
        {
          term: 'brecha delta-delta | delta-delta gap',
          definition:
            'Cociente (AG-12)/(24-HCO3) que detecta trastornos acido-base mixtos ocultos; >2 indica alcalosis metabolica concomitante | Ratio detecting hidden mixed acid-base disorders; >2 indicates concomitant metabolic alkalosis',
        },
        {
          term: 'brecha de globulinas | globulin gap',
          definition:
            'Proteinas totales - albumina; elevada (>4 g/dL) sugiere gammopatia monoclonal o policlonal | Total protein minus albumin; elevated (>4 g/dL) suggests monoclonal or polyclonal gammopathy',
        },
      ],
      clinicalNotes:
        'En UCI, la combinacion de TIMP-2 x IGFBP7 (NephroCheck) puede predecir AKI 12-24 horas antes de los cambios en creatinina, permitiendo intervencion temprana. Para el abordaje de hiponatremia, nunca corregir mas de 8 mEq/L en 24 horas en hiponatremia cronica; tener desmopresina disponible para relentificar si se corrige demasiado rapido. | In ICU, TIMP-2 x IGFBP7 can predict AKI 12-24 hours before creatinine changes. For hyponatremia, never correct more than 8 mEq/L in 24 hours in chronic cases; have desmopressin available to slow correction if overcorrecting.',
    },

    5: {
      level: 5,
      summary:
        'La interpretacion experta del CMP aplica medicina de precision con ecuaciones de TFGe basadas en cistatina C, biomarcadores renales de nueva generacion, analisis acido-base cuadruple con compensacion calculada, fisiopatologia integrativa de los trastornos electroliticos, y correlaciones clinico-patologicas avanzadas para diagnosticos complejos. | Expert CMP interpretation applies precision medicine with cystatin C-based eGFR equations, next-generation renal biomarkers, quadruple acid-base analysis with calculated compensation, integrative electrolyte disorder pathophysiology, and advanced clinicopathologic correlations for complex diagnoses.',
      explanation: `# Panel Metabolico Completo - Nivel Experto | CMP - Expert Level

## Medicina de precision en funcion renal | Precision medicine in renal function

### Limitaciones de la creatinina y soluciones | Creatinine limitations and solutions
**Poblaciones con creatinina no confiable:**
- Sarcopenia severa, amputaciones: sobreestima TFGe
- Pacientes musculosos, suplementos de creatina: subestima TFGe
- Embarazo: aumento de TFG fisiologico, creatinina baja
- Lesion renal aguda: creatinina es indicador tardio (24-72h post-insulto)

**Ecuacion CKD-EPI 2021 creatinina-cistatina C:**
- Superior en areas de incertidumbre (TFGe 45-90)
- Cistatina C no afectada por masa muscular, dieta, o sexo
- Limitacion: afectada por corticosteroides, disfuncion tiroidea, inflamacion

### Tubuloglomerular feedback y aplicaciones farmacologicas | Tubuloglomerular feedback
- Los inhibidores SGLT2 (dapagliflozina, empagliflozina) causan descenso inicial de TFGe por restaurar feedback TG
- Este "dip" de TFGe (hasta 30%) es esperado y NO debe causar suspension del farmaco
- Beneficio nefroprotector a largo plazo demostrado en CREDENCE, DAPA-CKD
- Patron similar al inicio de IECA/ARA2 en nefropatia diabetica

## Analisis acido-base cuadruple | Quadruple acid-base analysis

### Abordaje Stewart (fisicoquimico) | Stewart approach
Complementa el abordaje tradicional de Henderson-Hasselbalch:
- **SID (diferencia de iones fuertes)**: Na + K + Ca + Mg - Cl - lactato; normal ~40 mEq/L
- **Atot (acidos debiles no volatiles)**: albumina + fosfato
- **PCO2**: variable respiratoria independiente

Ventajas del abordaje Stewart:
- Explica acidosis hiperclorémica por exceso de cloro (no por "perdida de bicarbonato")
- Explica alcalosis por hipoalbuminemia (reduccion de Atot)
- Superior en UCI para analizar causas multiples de acidosis

### Acidosis lactica - Clasificacion y mecanismos | Lactic acidosis
**Tipo A (hipoxia tisular):**
- Shock (septico, cardiogenico, hipovolemico)
- Hipoxemia severa, anemia severa
- Intoxicacion por CO, cianuro

**Tipo B (sin hipoxia global):**
- B1 (enfermedad subyacente): fallo hepatico, neoplasia, convulsiones
- B2 (farmacos/toxinas): metformina, linezolid, analogos nucleosidos, propofol
- B3 (errores innatos): deficiencias enzimaticas mitocondriales
- D-lactato: sindrome de intestino corto, bypass yeyunoileal

### Acidosis tubular renal - Diagnostico preciso | Renal tubular acidosis

| Tipo | Defecto | pH urinario | K+ serico | AG urinario | Causa tipica |
|------|---------|-------------|-----------|-------------|-------------|
| 1 (distal) | Secrecion H+ | >5.5 | Bajo | Positivo | Sjogren, anfotericina |
| 2 (proximal) | Reabsorcion HCO3 | <5.5* | Bajo | Negativo | Mieloma, ifosfamida |
| 4 (hipoaldo) | Secrecion K+ y H+ | <5.5 | Alto | Positivo | Diabetes, IECA, ARA2 |

*El pH urinario en ATR tipo 2 puede ser >5.5 cuando el HCO3 plasmatico esta por encima del umbral renal reducido

## Trastornos complejos del calcio | Complex calcium disorders

### Hipercalcemia - Algoritmo diagnostico avanzado | Hypercalcemia advanced algorithm
1. Confirmar hipercalcemia real (corregir por albumina o medir Ca ionizado)
2. Medir PTH:
   - **PTH elevada**: hiperparatiroidismo primario (adenoma 85%, hiperplasia 15%, carcinoma <1%)
   - **PTH suprimida**: malignidad (PTHrP, metastasis liticas, 1,25-OH vit D por linfoma)
3. Si PTH normal-baja y no hay malignidad:
   - Medir 25-OH y 1,25-OH vitamina D
   - Considerar: granulomatosis (sarcoidosis), farmacologicas (tiazidas, litio, vitamina A/D)
4. Hipercalcemia hipocalciurica familiar: Ca/Cr urinario <0.01, mutacion CaSR

### Sindrome de huesos hambrientos | Hungry bone syndrome
- Post-paratiroidectomia: hipocalcemia severa por deposicion rapida de calcio en hueso
- Puede necesitar infusion continua de calcio IV por dias
- Monitorizar calcio cada 6 horas post-quirurgico

## Disnatremias complejas y terapia dirigida | Complex dysnatremias

### Sodio con osmolaridad discordante | Sodium-osmolality discordance
| Osm serica | Sodio | Interpretacion |
|-----------|-------|---------------|
| Baja (<280) | Bajo | Hiponatremia verdadera hipotonica |
| Normal (280-295) | Bajo | Pseudohiponatremia (paraproteinas, lipidos) |
| Alta (>295) | Bajo | Translocacional (hiperglucemia: Na baja 1.6 por cada 100 de glucosa >100) |

### Vaptanes y terapia dirigida | Vaptans and targeted therapy
- **Tolvaptan**: antagonista selectivo V2, aprobado para SIADH y PKD
- **Conivaptan**: antagonista V1a/V2, uso IV hospitalario
- Indicacion: hiponatremia euvolemica (SIADH) refractaria a restriccion hidrica
- Contraindicaciones: hiponatremia hipovolemica, hepatopatia severa

## Patrones integrativos complejos del CMP | Complex integrative CMP patterns

### Patron de sindrome hepatorrenal (SHR) | Hepatorenal syndrome pattern
- Creatinina progresivamente elevada + Na <130 + albumina baja + bilirrubina alta
- FENa <1% pero diferente de prerrenal: no responde a volumen
- Diagnostico de exclusion: descartar NTA, nefrotoxicidad, obstruccion
- SHR-AKI (tipo 1): rapida progresion; terlipresina + albumina
- SHR-CKD (tipo 2): progresion lenta; trasplante hepatico definitivo

### Patron de crisis addisoniana | Addisonian crisis pattern
- Na bajo + K alto + glucosa baja + Ca alto + acidosis
- BUN/Cr puede estar elevado (componente prerrenal)
- Cortisol basal bajo + estimulacion con ACTH confirma
- Emergencia: hidrocortisona 100 mg IV inmediato + solucion salina

### Patron de sindrome de lisis tumoral | Tumor lysis syndrome pattern
- K alto + fosfato alto + calcio bajo + acido urico alto + creatinina elevada + LDH elevada
- Alto riesgo: leucemias agudas con WBC muy alto, linfomas agresivos post-quimioterapia
- Profilaxis: hidratacion agresiva + rasburicasa o alopurinol`,
      keyTerms: [
        {
          term: 'abordaje de Stewart | Stewart approach',
          definition:
            'Modelo fisicoquimico de equilibrio acido-base basado en diferencia de iones fuertes (SID), acidos debiles (Atot) y PCO2 como variables independientes; superior al modelo tradicional para trastornos mixtos complejos | Physicochemical acid-base model based on strong ion difference (SID), weak acids (Atot), and PCO2; superior to traditional model for complex mixed disorders',
        },
        {
          term: 'feedback tubuloglomerular | tubuloglomerular feedback',
          definition:
            'Mecanismo regulatorio renal por el cual la macula densa ajusta la TFG en respuesta a la concentracion de NaCl en el tubulo distal; mecanismo clave del efecto nefroprotector de inhibidores SGLT2 | Renal regulatory mechanism where the macula densa adjusts GFR based on distal tubular NaCl concentration; key mechanism of SGLT2 inhibitor nephroprotection',
        },
        {
          term: 'sindrome hepatorrenal (SHR) | hepatorenal syndrome',
          definition:
            'Fallo renal funcional en cirrosis avanzada por vasoconstriccion renal extrema; diagnostico de exclusion, tratado con terlipresina + albumina o trasplante hepatico | Functional renal failure in advanced cirrhosis from extreme renal vasoconstriction; diagnosis of exclusion, treated with terlipressin + albumin or liver transplant',
        },
        {
          term: 'brecha de iones fuertes (SID) | strong ion difference',
          definition:
            'Diferencia entre cationes fuertes y aniones fuertes en plasma (~40 mEq/L); determinante independiente del pH segun modelo de Stewart | Difference between strong cations and anions in plasma (~40 mEq/L); independent pH determinant per Stewart model',
        },
        {
          term: 'receptor sensor de calcio (CaSR) | calcium-sensing receptor',
          definition:
            'Receptor en paratiroides y rinon que detecta calcio serico; mutaciones causan hipercalcemia hipocalciurica familiar (inactivante) o hipoparatiroidismo (activante) | Receptor on parathyroid and kidney detecting serum calcium; mutations cause familial hypocalciuric hypercalcemia (inactivating) or hypoparathyroidism (activating)',
        },
      ],
      clinicalNotes:
        'En pacientes con cirrosis y creatinina "normal", considerar que la sarcopenia severa enmascara TFGe reducida; cistatina C es superior en esta poblacion. El "dip" de TFGe al iniciar SGLT2i es protector y no debe causar suspension. En lisis tumoral, la rasburicasa es superior al alopurinol pero contraindicada en deficiencia de G6PD (provoca hemolisis severa). | In cirrhosis patients with "normal" creatinine, consider that severe sarcopenia masks reduced eGFR; cystatin C is superior. The eGFR dip when starting SGLT2i is protective and should not cause discontinuation. In tumor lysis, rasburicase is superior to allopurinol but contraindicated in G6PD deficiency.',
    },
  },

  media: [],

  citations: [
    {
      id: 'tietz-clinical-chemistry-7e',
      type: 'textbook',
      title: 'Tietz Textbook of Clinical Chemistry and Molecular Diagnostics',
      authors: ['Rifai, N.', 'Horvath, A.R.', 'Wittwer, C.T.'],
      source: 'Elsevier, 7th Edition',
    },
    {
      id: 'kdigo-ckd-2024',
      type: 'guideline',
      title: 'KDIGO 2024 Clinical Practice Guideline for CKD Evaluation and Management',
      source: 'Kidney International Supplements',
      url: 'https://kdigo.org/guidelines/ckd-evaluation-and-management/',
    },
    {
      id: 'rose-clinical-physiology-acid-base',
      type: 'textbook',
      title: 'Clinical Physiology of Acid-Base and Electrolyte Disorders',
      authors: ['Rose, B.D.', 'Post, T.W.'],
      source: 'McGraw-Hill, 5th Edition',
    },
    {
      id: 'henry-clinical-diagnosis-24e',
      type: 'textbook',
      title: "Henry's Clinical Diagnosis and Management by Laboratory Methods",
      authors: ['McPherson, R.A.', 'Pincus, M.R.'],
      source: 'Elsevier, 24th Edition',
    },
  ],

  crossReferences: [
    {
      targetId: 'lab-bmp',
      targetType: 'topic',
      relationship: 'child',
      label: 'Panel metabolico basico | Basic Metabolic Panel (BMP)',
    },
    {
      targetId: 'lab-hepatic-function',
      targetType: 'concept',
      relationship: 'related',
      label: 'Pruebas hepaticas | Liver Function Tests',
    },
    {
      targetId: 'lab-glucose',
      targetType: 'concept',
      relationship: 'child',
      label: 'Glucosa | Glucose',
    },
    {
      targetId: 'lab-creatinine',
      targetType: 'concept',
      relationship: 'child',
      label: 'Creatinina | Creatinine',
    },
    {
      targetId: 'lab-abg',
      targetType: 'topic',
      relationship: 'related',
      label: 'Gasometria arterial | Arterial Blood Gas',
    },
    {
      targetId: 'condition-ckd',
      targetType: 'condition',
      relationship: 'see-also',
      label: 'Enfermedad renal cronica | Chronic Kidney Disease',
    },
    {
      targetId: 'condition-diabetes',
      targetType: 'condition',
      relationship: 'see-also',
      label: 'Diabetes mellitus',
    },
    {
      targetId: 'system-renal',
      targetType: 'system',
      relationship: 'parent',
      label: 'Sistema renal | Renal System',
    },
  ],

  tags: {
    systems: ['renal', 'hepatico', 'metabolico', 'endocrino'],
    topics: [
      'laboratorio',
      'quimica sanguinea',
      'electrolitos',
      'funcion renal',
      'funcion hepatica',
      'acido-base',
    ],
    keywords: [
      'CMP',
      'panel metabolico',
      'quimica sanguinea',
      'electrolitos',
      'creatinina',
      'glucosa',
      'brecha anionica',
      'acidosis',
      'hiponatremia',
      'hiperpotasemia',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'pediatrics', 'emergency-medicine'],
    },
  },

  createdAt: '2025-06-01T00:00:00.000Z',
  updatedAt: '2025-06-01T00:00:00.000Z',
  version: 1,
  status: 'published',
};
