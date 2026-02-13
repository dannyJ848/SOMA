/**
 * Perfil Lipidico (Lipid Panel) - Cholesterol, Triglycerides, HDL/LDL
 * Contenido educativo para interpretacion del perfil lipidico
 *
 * Spanish-first bilingual educational content covering:
 * - Colesterol total | Total cholesterol
 * - Colesterol LDL | LDL cholesterol
 * - Colesterol HDL | HDL cholesterol
 * - Trigliceridos | Triglycerides
 * - Colesterol VLDL | VLDL cholesterol
 * - Colesterol no-HDL | Non-HDL cholesterol
 * - Valores de referencia en unidades convencionales y SI
 * - Valores criticos que requieren accion inmediata
 */

import { EducationalContent } from '../types';

export const perfilLipidicoLipidPanel: EducationalContent = {
  id: 'lab-perfil-lipidico-lipid-panel',
  type: 'topic',
  name: 'Perfil Lipidico | Lipid Panel',
  nameEs: 'Perfil Lipidico',
  alternateNames: [
    'Panel de Lipidos',
    'Lipid Panel',
    'Lipid Profile',
    'Panel de Colesterol',
    'Cholesterol Panel',
    'Perfil de Lipoproteinas',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'El perfil lipidico mide las grasas en tu sangre, incluyendo el colesterol "bueno" (HDL), el colesterol "malo" (LDL), y los trigliceridos. Tener grasas altas puede tapar tus arterias como una tuberia con grasa. | The lipid panel measures fats in your blood, including "good" cholesterol (HDL), "bad" cholesterol (LDL), and triglycerides. High fats can clog your arteries like a greasy pipe.',
      explanation: `# Perfil Lipidico | Lipid Panel

## Que son los lipidos? | What are lipids?

Los lipidos son **grasas** que viajan por tu sangre. Tu cuerpo necesita algo de grasa para funcionar, pero demasiada puede ser peligrosa.

### Los cuatro tipos principales | The four main types

**1. Colesterol LDL (el "malo") | LDL ("bad" cholesterol)**
- Es como basura que se pega en las paredes de tus arterias
- Con el tiempo, forma tapones que bloquean la sangre
- **Meta: menos de 100 mg/dL** (menos de 2.6 mmol/L)

**2. Colesterol HDL (el "bueno") | HDL ("good" cholesterol)**
- Es como un camion de limpieza que recoge la grasa de las arterias y la lleva al higado
- Mientras mas alto, mejor!
- **Meta: mas de 40 mg/dL en hombres, mas de 50 mg/dL en mujeres**

**3. Trigliceridos | Triglycerides**
- Es la grasa que viene de los alimentos que comes, especialmente azucar y carbohidratos
- Si comes mas de lo que tu cuerpo necesita, se guarda como trigliceridos
- **Normal: menos de 150 mg/dL** (menos de 1.7 mmol/L)

**4. Colesterol total | Total cholesterol**
- Es la suma de todo el colesterol en tu sangre
- **Deseable: menos de 200 mg/dL** (menos de 5.2 mmol/L)

## Valores criticos - Peligro! | Critical values - Danger!

| Lipido | Valor critico alto | Riesgo |
|--------|-------------------|--------|
| Colesterol total | Mayor de 300 mg/dL | Alto riesgo de infarto |
| Trigliceridos | Mayor de 500 mg/dL | Riesgo de pancreatitis (inflamacion del pancreas) |
| LDL | Mayor de 190 mg/dL | Puede ser genetico (hipercolesterolemia familiar) |

## Por que importa? | Why does it matter?

Cuando hay mucho colesterol malo en la sangre, se forma **placa** en las arterias. Con el tiempo, la placa endurece y estrecha las arterias. Esto puede causar:
- **Infarto al corazon** (ataque cardiaco) si se tapa una arteria del corazon
- **Derrame cerebral** (embolia) si se tapa una arteria del cerebro
- **Dolor en las piernas** si se tapan arterias de las piernas`,
      keyTerms: [
        {
          term: 'colesterol | cholesterol',
          definition:
            'Tipo de grasa en la sangre. Tu cuerpo lo necesita, pero demasiado puede tapar las arterias. | A type of fat in the blood. Your body needs it, but too much can clog arteries.',
        },
        {
          term: 'LDL (colesterol malo) | LDL (bad cholesterol)',
          definition:
            'Grasa que se pega en las paredes de las arterias y puede formar tapones | Fat that sticks to artery walls and can form blockages',
        },
        {
          term: 'HDL (colesterol bueno) | HDL (good cholesterol)',
          definition:
            'Grasa "limpiadora" que recoge colesterol de las arterias y lo lleva al higado | "Cleaner" fat that collects cholesterol from arteries and takes it to the liver',
        },
        {
          term: 'trigliceridos | triglycerides',
          definition:
            'Grasa que viene de los alimentos, especialmente azucar y carbohidratos; se guarda como reserva de energia | Fat from food, especially sugar and carbs; stored as energy reserve',
        },
        {
          term: 'placa (aterosclerosis) | plaque (atherosclerosis)',
          definition:
            'Depositos de grasa, colesterol y otras sustancias que se acumulan en las arterias | Deposits of fat, cholesterol, and other substances that build up in arteries',
        },
      ],
      analogies: [
        'El LDL es como un camion que tira basura (grasa) en la carretera (arterias), y el HDL es como el camion de la basura que la recoge y la lleva al basurero (higado). | LDL is like a truck dumping trash (fat) on the highway (arteries), and HDL is like the garbage truck that picks it up and takes it to the dump (liver).',
        'Imagina tus arterias como tuberias de agua. El colesterol malo es como la grasa que se pega en las tuberias de la cocina hasta que se tapan. | Imagine your arteries like water pipes. Bad cholesterol is like grease sticking to kitchen pipes until they clog.',
      ],
      examples: [
        'Juan tiene colesterol total de 260 mg/dL y LDL de 180 mg/dL. Su doctor le dice que necesita hacer dieta, ejercicio, y posiblemente tomar medicamento para bajar su riesgo de infarto. | Juan has total cholesterol of 260 mg/dL and LDL of 180 mg/dL. His doctor says he needs diet, exercise, and possibly medication to lower his heart attack risk.',
      ],
    },

    2: {
      level: 2,
      summary:
        'El perfil lipidico cuantifica lipoproteinas circulantes (LDL, HDL, VLDL) y trigliceridos para estratificar riesgo cardiovascular. El LDL es el principal objetivo terapeutico, con metas definidas segun el riesgo del paciente. | The lipid panel quantifies circulating lipoproteins (LDL, HDL, VLDL) and triglycerides to stratify cardiovascular risk. LDL is the primary therapeutic target with goals defined by patient risk.',
      explanation: `# Perfil Lipidico - Nivel Intermedio | Lipid Panel - Intermediate Level

## Valores de referencia y clasificacion | Reference ranges and classification

### Colesterol total | Total cholesterol
| Nivel | mg/dL | mmol/L | Clasificacion |
|-------|-------|--------|---------------|
| Deseable | <200 | <5.2 | Optimo |
| Limite alto | 200-239 | 5.2-6.2 | Riesgo moderado |
| Alto | >=240 | >=6.2 | Riesgo alto |

### LDL colesterol | LDL cholesterol
| Nivel | mg/dL | mmol/L | Clasificacion |
|-------|-------|--------|---------------|
| Optimo | <100 | <2.6 | Ideal |
| Casi optimo | 100-129 | 2.6-3.3 | Aceptable |
| Limite alto | 130-159 | 3.4-4.1 | Vigilar |
| Alto | 160-189 | 4.1-4.9 | Tratar |
| Muy alto | >=190 | >=4.9 | Tratar urgente |

### HDL colesterol | HDL cholesterol
| Nivel | mg/dL | mmol/L | Clasificacion |
|-------|-------|--------|---------------|
| Bajo (riesgo) | <40 (H), <50 (M) | <1.0, <1.3 | Factor de riesgo |
| Normal | 40-59 (H), 50-59 (M) | 1.0-1.5, 1.3-1.5 | Aceptable |
| Alto (protector) | >=60 | >=1.6 | Protector cardiovascular |

### Trigliceridos | Triglycerides
| Nivel | mg/dL | mmol/L | Clasificacion |
|-------|-------|--------|---------------|
| Normal | <150 | <1.7 | Optimo |
| Limite alto | 150-199 | 1.7-2.3 | Modificar estilo de vida |
| Alto | 200-499 | 2.3-5.6 | Tratar |
| Muy alto | >=500 | >=5.6 | **Riesgo de pancreatitis** |

### Colesterol no-HDL | Non-HDL cholesterol
- Calculo: Colesterol total - HDL
- Meta: <130 mg/dL (meta general); LDL meta + 30 mg/dL
- Incluye **todas** las particulas aterogenicas (LDL + VLDL + IDL + Lp(a))

## Valores criticos que requieren accion inmediata | Critical values

| Analito | Valor critico | Accion necesaria |
|---------|--------------|-----------------|
| Trigliceridos | >500 mg/dL (>5.6 mmol/L) | Riesgo de pancreatitis aguda; tratar inmediatamente |
| LDL | >190 mg/dL sin tratamiento | Sospecha de hipercolesterolemia familiar; referir |
| Trigliceridos | >1000 mg/dL (>11.3 mmol/L) | Emergencia: restriccion lipidica estricta, considerar fibrato/omega-3 IV |

## Cuando ordenar? | When to order?
- **Screening**: hombres >=35 anos, mujeres >=45 anos (USPSTF)
- **Screening temprano**: si hay factores de riesgo (diabetes, HTA, tabaquismo, historia familiar)
- **Monitoreo**: 4-12 semanas despues de iniciar estatina, luego cada 3-12 meses
- **Ayuno**: No indispensable para screening; si necesario si TG basales >400 mg/dL

## Factores de riesgo cardiovascular que afectan metas de LDL | CV risk factors
- Diabetes mellitus
- Tabaquismo
- Hipertension arterial
- Historia familiar de enfermedad coronaria prematura
- HDL bajo (<40 mg/dL)
- Edad (hombres >=45, mujeres >=55)`,
      keyTerms: [
        {
          term: 'lipoproteinas | lipoproteins',
          definition:
            'Particulas que transportan grasas (colesterol, trigliceridos) en la sangre; incluyen LDL, HDL, VLDL e IDL | Particles that transport fats in blood; include LDL, HDL, VLDL, and IDL',
          pronunciation: 'li-po-pro-te-I-nas',
        },
        {
          term: 'colesterol no-HDL | non-HDL cholesterol',
          definition:
            'Colesterol total menos HDL; incluye todas las particulas aterogenicas; mejor predictor de riesgo que LDL solo | Total cholesterol minus HDL; includes all atherogenic particles; better risk predictor than LDL alone',
        },
        {
          term: 'aterosclerosis | atherosclerosis',
          definition:
            'Proceso de acumulacion de placa (grasa, colesterol, calcio) en las paredes arteriales que causa estrechamiento y endurecimiento | Process of plaque buildup in arterial walls causing narrowing and hardening',
          pronunciation: 'a-te-ro-es-cle-RO-sis',
        },
        {
          term: 'hipercolesterolemia familiar | familial hypercholesterolemia',
          definition:
            'Enfermedad genetica con LDL muy alto (>190 mg/dL) desde joven; alto riesgo de infarto temprano | Genetic disorder with very high LDL (>190 mg/dL) from young age; high risk of early heart attack',
        },
      ],
      examples: [
        'Maria, 52 anos, diabetica: su LDL meta es <70 mg/dL porque la diabetes la pone en alto riesgo cardiovascular. Su LDL actual de 110 mg/dL necesita estatina de alta intensidad. | Maria, 52, diabetic: her LDL goal is <70 mg/dL because diabetes puts her at high CV risk. Her current LDL of 110 mg/dL needs high-intensity statin.',
        'Pedro, 25 anos, LDL de 220 mg/dL: se sospecha hipercolesterolemia familiar. Necesita tratamiento agresivo desde joven. | Pedro, 25, LDL of 220 mg/dL: familial hypercholesterolemia is suspected. He needs aggressive treatment from a young age.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La interpretacion del perfil lipidico se integra con calculadoras de riesgo cardiovascular (ASCVD Pooled Cohort) para definir metas terapeuticas individualizadas de LDL. El colesterol no-HDL y la apolipoproteina B complementan al LDL como objetivos terapeuticos. Los trigliceridos elevados requieren abordaje independiente por riesgo de pancreatitis. | Lipid panel interpretation integrates with cardiovascular risk calculators to define individualized LDL therapeutic targets. Non-HDL cholesterol and apolipoprotein B complement LDL as treatment targets.',
      explanation: `# Perfil Lipidico - Interpretacion Clinica | Lipid Panel - Clinical Interpretation

## Estratificacion de riesgo cardiovascular | Cardiovascular risk stratification

### Calculadora ASCVD Pooled Cohort (ACC/AHA) | ASCVD risk calculator
Estima riesgo a 10 anos de evento ASCVD (infarto, ACV) usando:
- Edad, sexo, raza
- Colesterol total, HDL
- Presion arterial sistolica (tratada o no)
- Diabetes, tabaquismo

| Riesgo ASCVD a 10 anos | Categoria | Terapia |
|-------------------------|-----------|---------|
| <5% | Bajo | Modificacion de estilo de vida |
| 5-7.4% | Borderline | Considerar estatina si hay factores potenciadores |
| 7.5-19.9% | Intermedio | Estatina moderada; considerar CAC score |
| >=20% | Alto | Estatina de alta intensidad |

### Categorias de riesgo con metas de LDL | Risk categories with LDL targets

| Categoria | Meta LDL | Meta no-HDL | Terapia |
|-----------|---------|-------------|---------|
| ASCVD clinica | <70 mg/dL (<1.8 mmol/L) | <100 mg/dL | Estatina alta intensidad +/- ezetimiba |
| ASCVD muy alto riesgo* | <55 mg/dL (<1.4 mmol/L) | <85 mg/dL | Estatina + ezetimiba +/- iPCSK9 |
| Diabetes (40-75 anos) | <70-100 mg/dL | <100-130 mg/dL | Estatina moderada-alta |
| LDL >=190 mg/dL | <100 mg/dL | <130 mg/dL | Estatina alta sin necesidad de calculadora |
| Riesgo intermedio (7.5-19.9%) | <100 mg/dL | <130 mg/dL | Estatina moderada |

*ASCVD muy alto riesgo: eventos recurrentes, multiples lechos vasculares, o evento reciente + factores de alto riesgo

## Valores de referencia con unidades convencionales y SI | Reference ranges

| Analito | Convencional | SI (mmol/L) | Factor conversion |
|---------|-------------|-------------|-------------------|
| Colesterol total | <200 mg/dL | <5.18 mmol/L | x0.02586 |
| LDL | <100 mg/dL* | <2.59 mmol/L | x0.02586 |
| HDL (H) | >40 mg/dL | >1.04 mmol/L | x0.02586 |
| HDL (M) | >50 mg/dL | >1.30 mmol/L | x0.02586 |
| Trigliceridos | <150 mg/dL | <1.69 mmol/L | x0.01129 |
| No-HDL | <130 mg/dL* | <3.37 mmol/L | x0.02586 |

*Metas varian segun riesgo cardiovascular individual

## Calculo de LDL (ecuacion de Friedewald) | LDL calculation
**LDL = Colesterol total - HDL - (Trigliceridos / 5)**
- Valida solo si TG <400 mg/dL
- Si TG >400: usar LDL directo (medido)
- **Ecuacion de Martin-Hopkins**: mas precisa con TG 150-400 mg/dL (usa factor ajustable en lugar de /5 fijo)

## Factores potenciadores de riesgo | Risk-enhancing factors
- Historia familiar de ASCVD prematura (H <55, M <65 anos)
- LDL >=160 mg/dL persistente
- Sindrome metabolico (cintura, TG, HDL, glucosa, PA)
- Enfermedad renal cronica (TFGe 15-59)
- Condiciones inflamatorias (AR, lupus, psoriasis, VIH)
- Etnicidad de alto riesgo (sur de Asia)
- Marcadores: Lp(a) >=50 mg/dL, hs-CRP >=2 mg/L, ApoB >=130 mg/dL, ITB <0.9

## Causas secundarias de dislipidemia | Secondary causes of dyslipidemia

### Hipercolesterolemia (LDL elevado) | LDL elevation
- Hipotiroidismo (verificar siempre TSH antes de tratar)
- Sindrome nefrotico
- Colestasis / enfermedad hepatica obstructiva
- Farmacos: ciclosporina, tiazidas, retinoides

### Hipertrigliceridemia | Elevated triglycerides
- Diabetes mal controlada (la mas comun)
- Alcohol
- Obesidad / sindrome metabolico
- Hipotiroidismo
- Embarazo (elevacion fisiologica en 3er trimestre)
- Farmacos: esteroides, beta-bloqueadores, estrogenos, isotretinoina, antirretrovirales

## Trigliceridos muy elevados - Manejo urgente | Very high TG - Urgent management

**TG >500 mg/dL**: Riesgo de pancreatitis aguda
1. Restriccion estricta de grasas (<15% calorias de grasa)
2. Fibrato (fenofibrato o gemfibrozil) como primera linea
3. Omega-3 a dosis altas (EPA/DHA 2-4 g/dia)
4. Control de diabetes, alcohol, medicamentos causantes
5. Si TG >1000: considerar hospitalizacion, dieta NPO, insulina IV`,
      keyTerms: [
        {
          term: 'ASCVD (enfermedad cardiovascular aterosclerotica) | atherosclerotic cardiovascular disease',
          definition:
            'Incluye infarto agudo al miocardio, angina, ACV, AIT, y enfermedad arterial periferica causados por aterosclerosis | Includes MI, angina, stroke, TIA, and PAD caused by atherosclerosis',
        },
        {
          term: 'estatinas | statins',
          definition:
            'Medicamentos que bloquean la enzima HMG-CoA reductasa para reducir la produccion hepatica de colesterol; piedra angular del tratamiento de dislipidemia | Drugs blocking HMG-CoA reductase to reduce hepatic cholesterol production; cornerstone of dyslipidemia treatment',
        },
        {
          term: 'apolipoproteina B (ApoB) | apolipoprotein B',
          definition:
            'Proteina presente en cada particula aterogenica (LDL, VLDL, IDL, Lp(a)); mejor indicador del numero total de particulas aterogenicas que el LDL calculado | Protein on each atherogenic particle; better indicator of total atherogenic particle number than calculated LDL',
        },
        {
          term: 'ecuacion de Friedewald | Friedewald equation',
          definition:
            'LDL = CT - HDL - (TG/5); formula clasica para calcular LDL indirecto; no valida si TG >400 mg/dL | Classic formula to calculate LDL; not valid if TG >400 mg/dL',
        },
        {
          term: 'sindrome metabolico | metabolic syndrome',
          definition:
            'Constelacion de factores de riesgo: obesidad central, TG altos, HDL bajo, hiperglucemia, hipertension; aumenta marcadamente el riesgo cardiovascular | Constellation of risk factors: central obesity, high TG, low HDL, hyperglycemia, hypertension; markedly increases CV risk',
        },
      ],
      clinicalNotes:
        'Siempre verificar TSH antes de iniciar estatina por primera vez para descartar hipotiroidismo como causa secundaria tratable de hipercolesterolemia. En pacientes con TG 150-400 mg/dL, preferir la ecuacion de Martin-Hopkins o LDL directo sobre Friedewald. El colesterol no-HDL y ApoB son mejores marcadores de riesgo residual que el LDL en pacientes con trigliceridos elevados o sindrome metabolico. | Always check TSH before starting a statin to rule out hypothyroidism as a treatable secondary cause. For TG 150-400, prefer Martin-Hopkins equation or direct LDL over Friedewald.',
    },

    4: {
      level: 4,
      summary:
        'La interpretacion avanzada del perfil lipidico incorpora analisis de subfracciones de lipoproteinas, lipoproteina(a) como factor de riesgo independiente, scoring de calcio coronario (CAC) para reclasificacion de riesgo, terapias combinadas escalonadas, e indicaciones para inhibidores de PCSK9 y acido bempedoico. | Advanced lipid panel interpretation incorporates lipoprotein subfraction analysis, lipoprotein(a) as independent risk factor, coronary artery calcium scoring for risk reclassification, stepped combination therapies, and indications for PCSK9 inhibitors and bempedoic acid.',
      explanation: `# Perfil Lipidico - Analisis Avanzado | Lipid Panel - Advanced Analysis

## Analisis avanzado de lipoproteinas | Advanced lipoprotein analysis

### Subfracciones de LDL | LDL subfractions
- **Patron A (particulas grandes, flotantes)**: menor riesgo aterogenico
- **Patron B (particulas pequenas, densas)**: mayor riesgo aterogenico por:
  - Mayor penetracion en endotelio
  - Mayor susceptibilidad a oxidacion
  - Menor afinidad por receptor LDL (permanecen mas en circulacion)
- Comun en: sindrome metabolico, diabetes tipo 2, hipertrigliceridemia

### Numero de particulas LDL (LDL-P) | LDL particle number
- Medido por RMN (Resonancia Magnetica Nuclear)
- Mejor predictor de riesgo que LDL-C cuando hay discordancia
- Discordancia LDL-C/LDL-P: TG elevados, diabetes, obesidad
- Meta: <1000 nmol/L (equivalente a LDL <100 mg/dL)

### Lipoproteina(a) [Lp(a)] | Lipoprotein(a)
- Factor de riesgo geneticamente determinado (90% herencia)
- No modificable significativamente por estatinas o dieta
- **Valores elevados**: >50 mg/dL (>125 nmol/L)
- Mecanismo aterogenico: similar a LDL + propiedades protromboticas (homologia con plasminogeno)
- **Cuando medir**: historia familiar de ASCVD prematura, ASCVD recurrente con LDL en meta, hipercolesterolemia familiar, riesgo intermedio para reclasificacion
- Tratamiento: actualmente limitado; iPCSK9 reduce ~25-30%; anticuerpos anti-apoA (olpasiran, pelacarsen) en ensayos clinicos

## Scoring de calcio coronario (CAC) | Coronary artery calcium scoring

### Indicacion: reclasificacion de riesgo intermedio (7.5-19.9%) | Risk reclassification

| Score CAC | Interpretacion | Decision |
|-----------|---------------|----------|
| 0 | Sin calcificacion detectable | Considerar diferir estatina (excepto diabetes, HF, fumador) |
| 1-99 | Calcificacion leve | Estatina razonable, especialmente si >=75 percentil |
| 100-299 | Calcificacion moderada | Estatina indicada |
| >=300 o >=75 percentil | Calcificacion severa | Estatina de alta intensidad |

## Terapia escalonada para reduccion de LDL | Stepped LDL-lowering therapy

### Paso 1: Estatinas | Step 1: Statins
| Intensidad | Reduccion LDL esperada | Ejemplos |
|-----------|----------------------|----------|
| Alta | >=50% | Atorvastatina 40-80 mg, rosuvastatina 20-40 mg |
| Moderada | 30-49% | Atorvastatina 10-20 mg, rosuvastatina 5-10 mg, simvastatina 20-40 mg |
| Baja | <30% | Simvastatina 10 mg, pravastatina 10-20 mg |

### Paso 2: Agregar ezetimiba | Step 2: Add ezetimibe
- Reduccion adicional de LDL: 15-20%
- Evidencia: IMPROVE-IT demostro beneficio en ASCVD (LDL 53 vs 70 mg/dL)

### Paso 3: Inhibidores de PCSK9 | Step 3: PCSK9 inhibitors
- **Evolocumab** (Repatha) y **alirocumab** (Praluent)
- Anticuerpos monoclonales subcutaneos cada 2-4 semanas
- Reduccion adicional de LDL: 50-60%
- Evidencia: FOURIER (evolocumab), ODYSSEY (alirocumab)

### Paso 4: Terapias adicionales | Step 4: Additional therapies
- **Inclisiran**: siRNA contra PCSK9, administracion SC cada 6 meses
- **Acido bempedoico** (Nexletol): inhibidor de ACL; no causa mialgias (no activo en musculo)
- **Evinacumab**: anti-ANGPTL3; para HF homocigota refractaria

## Intolerancia a estatinas - Abordaje basado en evidencia | Statin intolerance

### Definicion real vs. percibida | Real vs. perceived
- Verdadera intolerancia: 5-7% (vs. percibida 20-30%)
- Efecto nocebo demostrado en SAMSON trial
- Miopatia severa (rabdomiolisis) es rara: 1/10,000

### Estrategias ante intolerancia | Management strategies
1. Cambiar a estatina diferente (rosuvastatina o atorvastatina en dosis baja)
2. Dosis baja o intermitente (rosuvastatina 5 mg cada tercer dia)
3. Ezetimiba como monoterapia
4. Acido bempedoico (no causa mialgias musculares)
5. iPCSK9 si se necesita mayor reduccion
6. Colestiramina/colesevelam (resinas de acidos biliares)

## Hipertrigliceridemia severa - Fisiopatologia y manejo | Severe hypertriglyceridemia

### Mecanismo de pancreatitis por TG | Mechanism of TG-induced pancreatitis
- TG >500 mg/dL: lipasa pancreatica hidroliza TG en acidos grasos libres toxicos
- Acidos grasos danan celulas acinares y vasculatura pancreatica
- Riesgo aumenta exponencialmente: >1000 mg/dL = alto riesgo inminente

### Manejo agudo | Acute management
1. NPO y fluidos IV agresivos
2. Infusion de insulina IV (activa lipoproteina lipasa, acelera clearance de TG)
3. Heparina puede activar LPL transitoriamente (uso controversial)
4. Aferesis plasmatica si TG >2000 mg/dL o pancreatitis refractaria

### Prevencion cronica | Chronic prevention
- Fibratos como primera linea (fenofibrato > gemfibrozil con estatinas)
- EPA puro (icosapent etil 2g BID): REDUCE-IT demostro reduccion de eventos CV del 25%
- Restriccion de alcohol, carbohidratos simples, grasas saturadas
- Control glucemico estricto en diabeticos`,
      keyTerms: [
        {
          term: 'inhibidores de PCSK9 | PCSK9 inhibitors',
          definition:
            'Anticuerpos monoclonales (evolocumab, alirocumab) que bloquean la degradacion de receptores LDL hepaticos, aumentando la captacion y reduciendo LDL circulante 50-60%; indicados en ASCVD con LDL no en meta o HF | Monoclonal antibodies blocking hepatic LDL receptor degradation, increasing uptake and reducing circulating LDL 50-60%',
        },
        {
          term: 'lipoproteina(a) [Lp(a)] | lipoprotein(a)',
          definition:
            'Particula similar a LDL con apolipoproteina(a) unida; factor de riesgo CV geneticamente determinado, independiente de LDL-C; niveles >50 mg/dL confieren riesgo aumentado | LDL-like particle with attached apolipoprotein(a); genetically determined CV risk factor, independent of LDL-C; levels >50 mg/dL confer increased risk',
        },
        {
          term: 'scoring de calcio coronario (CAC) | coronary artery calcium score',
          definition:
            'Cuantificacion por TC de calcio en arterias coronarias; CAC=0 indica bajo riesgo a 10 anos; usado para reclasificar riesgo intermedio y guiar decision de estatinas | CT quantification of coronary artery calcium; CAC=0 indicates low 10-year risk; used to reclassify intermediate risk and guide statin decision',
        },
        {
          term: 'acido bempedoico | bempedoic acid',
          definition:
            'Inhibidor de ATP-citrato liasa (ACL) que reduce sintesis hepatica de colesterol; profarmaco no activo en musculo esqueletico, por lo que no causa mialgias; alternativa en intolerancia a estatinas | ACL inhibitor reducing hepatic cholesterol synthesis; prodrug not active in skeletal muscle, avoiding myalgias; alternative for statin intolerance',
        },
        {
          term: 'icosapent etil | icosapent ethyl',
          definition:
            'EPA puro (acido eicosapentaenoico etil ester) a dosis altas (4g/dia); REDUCE-IT demostro 25% reduccion de eventos CV en pacientes con TG elevados en estatina; efecto mas alla de reduccion de TG | Pure EPA at high doses; REDUCE-IT showed 25% CV event reduction in patients with elevated TG on statin; benefit beyond TG reduction',
        },
      ],
      clinicalNotes:
        'La discordancia LDL-C/ApoB es clinicamente relevante: cuando TG estan elevados, el LDL-C subestima el riesgo real porque hay mas particulas aterogenicas pequenas densas. ApoB o LDL-P son mejores marcadores en estos pacientes. El CAC score de 0 permite diferir estatinas con seguridad en riesgo intermedio (excepciones: diabetes, HF, fumadores activos). Icosapent etil tiene beneficio CV independiente de la reduccion de trigliceridos (mecanismos pleiotropicos: antiinflamatorio, antioxidante, estabilizador de placa). | LDL-C/ApoB discordance is clinically relevant: when TG is elevated, LDL-C underestimates true risk. CAC of 0 safely defers statins in intermediate risk. Icosapent ethyl has CV benefit independent of TG reduction.',
    },

    5: {
      level: 5,
      summary:
        'La interpretacion experta del perfil lipidico integra genomica de dislipidemias hereditarias, terapias de RNA (inclisiran, olpasiran), mecanismos moleculares de aterogenesis, biomarcadores emergentes de riesgo residual, y abordaje individualizado basado en imagenologia vascular avanzada y fenotipos metabolicos complejos. | Expert lipid panel interpretation integrates genomics of hereditary dyslipidemias, RNA therapies (inclisiran, olpasiran), molecular mechanisms of atherogenesis, emerging residual risk biomarkers, and individualized approach based on advanced vascular imaging and complex metabolic phenotypes.',
      explanation: `# Perfil Lipidico - Nivel Experto | Lipid Panel - Expert Level

## Genomica de las dislipidemias hereditarias | Genomics of hereditary dyslipidemias

### Hipercolesterolemia familiar (HF) | Familial hypercholesterolemia
**Genetica:**
| Gen | Funcion | Frecuencia | Efecto |
|-----|---------|-----------|--------|
| LDLR | Receptor LDL | 85-90% HF | Perdida de funcion = menor captacion hepatica de LDL |
| APOB | Ligando del receptor | 5-10% HF | Defecto de union al receptor LDL |
| PCSK9 | Degradacion receptor LDL | 1-3% HF | Ganancia de funcion = mayor degradacion de receptores |
| LDLRAP1 | Adaptador del receptor | <1% HF | Forma autosomica recesiva |

- **HF heterocigota**: LDL 190-400 mg/dL, prevalencia 1:250
- **HF homocigota**: LDL 400-1000 mg/dL, prevalencia 1:300,000, ASCVD en infancia
- Diagnostico clinico: Dutch Lipid Network Score o criterios Simon-Broome
- Confirmacion: panel genetico (identifica mutacion en ~60-80%)

### Dislipidemias geneticas raras | Rare genetic dyslipidemias
| Condicion | Genetica | Fenotipo lipidico |
|-----------|---------|------------------|
| Disbetalipoproteinemia (tipo III) | APOE E2/E2 homocigoto | CT y TG igualmente elevados; bandas beta anchas |
| Hipertrigliceridemia familiar | Poligenica/LPL/APOC2 | TG 500-1000+; riesgo pancreatitis |
| Hipoalfalipoproteinemia | ABCA1 (Tangier), LCAT | HDL muy bajo; opacidades corneales (Tangier) |
| Sitosterolemia | ABCG5/G8 | Absorcion excesiva de esteroles vegetales; xantomas |

## Terapias de RNA y moleculares emergentes | Emerging RNA and molecular therapies

### Inclisiran (Leqvio)
- **Mecanismo**: siRNA (small interfering RNA) que degrada mRNA de PCSK9 en hepatocitos
- **Posologia**: SC cada 6 meses (tras dosis de carga)
- **Eficacia**: Reduccion LDL 50% (ORION trials)
- **Ventaja**: adherencia por dosificacion infrecuente

### Olpasiran / Pelacarsen / Lepodisiran (terapias anti-Lp(a))
- **Olpasiran**: siRNA anti-apo(a); reduccion de Lp(a) >95% (OCEAN(a)-DOSE)
- **Pelacarsen**: ASO anti-apo(a); reduccion ~80%; ensayo de outcomes Lp(a)HORIZON en curso
- **Lepodisiran**: siRNA; reduccion >95% con dosis unica cada 6-12 meses
- Primera vez que se puede reducir Lp(a) de forma significativa

### Obicetrapib (inhibidor CETP)
- Inhibe proteina transferidora de esteres de colesterol
- Aumenta HDL 100-150% y reduce LDL 40-50%
- A diferencia de torcetrapib (toxicidad CV), obicetrapib no tiene efectos off-target
- Ensayo PREVAIL en curso para evaluar outcomes CV

## Mecanismos moleculares de aterogenesis | Molecular mechanisms of atherogenesis

### Retencion subendotelial de lipoproteinas (hipotesis response-to-retention) | Response-to-retention hypothesis
1. Particulas ApoB (LDL, VLDL, Lp(a)) penetran endotelio
2. Union a proteoglicanos de matriz extracelular (retencion)
3. Modificacion oxidativa de LDL retenido
4. Captacion por macrofagos via receptores scavenger (CD36, SR-A) → celulas espumosas
5. Inflamacion: citocinas, quimiocinas, reclutamiento de mas monocitos
6. Progresion: nucleo necrotico + capsula fibrosa = placa aterosclerotica
7. Complicacion: rotura de placa → trombosis → evento clinico (IAM, ACV)

### Papel de la inflamacion residual | Role of residual inflammation
- **hs-CRP >2 mg/L** con LDL en meta = riesgo inflamatorio residual
- Ensayo CANTOS: canakinumab (anti-IL-1beta) redujo eventos CV independiente de lipidos
- Ensayo COLCOT: colchicina 0.5 mg/dia redujo eventos post-IAM 23%
- Ensayo LoDoCo2: colchicina redujo eventos en enfermedad coronaria cronica 31%
- Implicacion: tratar inflamacion ademas de lipidos en ASCVD

## Biomarcadores emergentes de riesgo residual | Emerging residual risk biomarkers

| Biomarcador | Que mide | Utilidad clinica |
|-------------|----------|-----------------|
| Lp(a) | Riesgo aterogenico genetico | Identificar pacientes para terapias anti-Lp(a) |
| ApoB | Numero total de particulas aterogenicas | Superior a LDL-C cuando hay discordancia |
| hs-CRP | Riesgo inflamatorio residual | Guiar terapia antiinflamatoria (colchicina) |
| Lp-PLA2 | Inflamacion vascular especifica | Predictor de placa inestable |
| oxLDL | LDL oxidado | Marcador de estres oxidativo aterogenico |
| GlycA | Inflamacion cronica glicosilada | Integra multiples proteinas inflamatorias |

## Imagenologia vascular avanzada para decision terapeutica | Advanced vascular imaging

### Ultrasonido intravascular (IVUS) / Tomografia de coherencia optica (OCT) | IVUS/OCT
- Cuantifican volumen de placa y composicion
- GLAGOV trial: evolocumab demostro regresion de placa por IVUS con LDL promedio 36 mg/dL
- Implicacion: "cuanto mas bajo el LDL, mejor" tiene sustento en regresion de placa

### Angiotomografia coronaria con caracterizacion de placa | CCTA with plaque characterization
- Identifica placa de alto riesgo (baja atenuacion, remodelamiento positivo, calcificacion puntiforme)
- Pacientes con placa de alto riesgo se benefician de terapia agresiva independiente de riesgo calculado

## Perlas clinicas de nivel experto | Expert clinical pearls

1. **LDL paradojicamente bajo con TG elevados**: puede subestimar carga aterogenica; verificar ApoB o LDL-P
2. **HDL muy alto (>90 mg/dL)**: no siempre protector; HDL disfuncional puede ser proinflamatorio (artritis reumatoide, infeccion cronica)
3. **Estatinas en embarazo**: absolutamente contraindicadas (teratogenicas); suspender 3 meses antes de concepcion
4. **HF homocigota**: respuesta limitada a estatinas (pocos receptores LDL funcionales); considerar evinacumab, lomitapide, aferesis de LDL
5. **Post-SCA**: iniciar estatina de alta intensidad en primeras 24 horas (efecto pleiotropico: estabilizacion de placa, antiinflamatorio)`,
      keyTerms: [
        {
          term: 'inclisiran | inclisiran',
          definition:
            'siRNA (RNA interferente pequeno) que degrada el mRNA de PCSK9 en hepatocitos; administracion SC cada 6 meses; reduce LDL ~50%; revoluciona adherencia por dosificacion infrecuente | siRNA degrading PCSK9 mRNA in hepatocytes; SC injection every 6 months; reduces LDL ~50%; revolutionizes adherence through infrequent dosing',
        },
        {
          term: 'hipotesis de respuesta a la retencion | response-to-retention hypothesis',
          definition:
            'Modelo de aterogenesis donde la retencion subendotelial de particulas ApoB en la pared arterial inicia la cascada inflamatoria; explica por que toda particula con ApoB es aterogenica | Atherogenesis model where subendothelial retention of ApoB particles in arterial wall initiates inflammatory cascade',
        },
        {
          term: 'riesgo residual inflamatorio | residual inflammatory risk',
          definition:
            'Riesgo cardiovascular persistente a pesar de LDL en meta, mediado por inflamacion cronica (hs-CRP >2); abordable con colchicina o terapias anti-IL-1beta | Persistent CV risk despite LDL at goal, mediated by chronic inflammation; addressable with colchicine or anti-IL-1beta therapies',
        },
        {
          term: 'olpasiran / pelacarsen',
          definition:
            'Terapias de RNA (siRNA y ASO) dirigidas contra apo(a) que reducen Lp(a) >80-95%; primeras terapias capaces de reducir significativamente este factor de riesgo genetico; ensayos de outcomes en curso | RNA therapies targeting apo(a) reducing Lp(a) >80-95%; first therapies able to significantly reduce this genetic risk factor; outcomes trials underway',
        },
        {
          term: 'evinacumab | evinacumab',
          definition:
            'Anticuerpo monoclonal anti-ANGPTL3 aprobado para HF homocigota; reduce LDL por mecanismo independiente del receptor LDL (via VLDL); util cuando hay pocos receptores LDL funcionales | Anti-ANGPTL3 monoclonal antibody approved for homozygous FH; reduces LDL through LDL receptor-independent mechanism; useful when few functional LDL receptors',
        },
      ],
      clinicalNotes:
        'Estamos entrando en una era de terapia lipidica de precision: 1) Genotipificacion para HF identifica candidatos a terapia temprana agresiva. 2) Lp(a) finalmente tiene terapias dirigidas en fase 3 (pelacarsen Lp(a)HORIZON). 3) La inflamacion residual se aborda con colchicina (COLCOT, LoDoCo2). 4) Inclisiran resuelve el problema de adherencia con dosificacion semestral. 5) La regresion de placa (demostrada por IVUS) ocurre con LDL <40 mg/dL, sugiriendo que no hay umbral inferior para beneficio. El enfoque moderno es tratar LDL, Lp(a), e inflamacion como tres pilares independientes del riesgo aterosclerotico. | We are entering an era of precision lipid therapy. The modern approach treats LDL, Lp(a), and inflammation as three independent pillars of atherosclerotic risk.',
    },
  },

  media: [],

  citations: [
    {
      id: 'acc-aha-cholesterol-2018',
      type: 'guideline',
      title: '2018 ACC/AHA Guideline on the Management of Blood Cholesterol',
      authors: ['Grundy, S.M.', 'Stone, N.J.', 'Bailey, A.L.'],
      source: 'Journal of the American College of Cardiology',
      url: 'https://doi.org/10.1016/j.jacc.2018.11.003',
    },
    {
      id: 'esc-eas-dyslipidaemia-2019',
      type: 'guideline',
      title: '2019 ESC/EAS Guidelines for the Management of Dyslipidaemias',
      source: 'European Heart Journal',
      url: 'https://doi.org/10.1093/eurheartj/ehz455',
    },
    {
      id: 'reduce-it-trial',
      type: 'journal',
      title: 'Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia (REDUCE-IT)',
      authors: ['Bhatt, D.L.', 'Steg, P.G.', 'Miller, M.'],
      source: 'New England Journal of Medicine, 2019; 380:11-22',
    },
    {
      id: 'fourier-trial',
      type: 'journal',
      title: 'Evolocumab and Clinical Outcomes in Patients with Cardiovascular Disease (FOURIER)',
      authors: ['Sabatine, M.S.', 'Giugliano, R.P.', 'Keech, A.C.'],
      source: 'New England Journal of Medicine, 2017; 376:1713-1722',
    },
    {
      id: 'libby-atherosclerosis-2021',
      type: 'article',
      title: 'The Changing Landscape of Atherosclerosis',
      authors: ['Libby, P.'],
      source: 'Nature, 2021; 592:524-533',
    },
  ],

  crossReferences: [
    {
      targetId: 'lab-total-cholesterol',
      targetType: 'concept',
      relationship: 'child',
      label: 'Colesterol total | Total Cholesterol',
    },
    {
      targetId: 'lab-ldl',
      targetType: 'concept',
      relationship: 'child',
      label: 'Colesterol LDL | LDL Cholesterol',
    },
    {
      targetId: 'lab-hdl',
      targetType: 'concept',
      relationship: 'child',
      label: 'Colesterol HDL | HDL Cholesterol',
    },
    {
      targetId: 'lab-triglycerides',
      targetType: 'concept',
      relationship: 'child',
      label: 'Trigliceridos | Triglycerides',
    },
    {
      targetId: 'condition-coronary-artery-disease',
      targetType: 'condition',
      relationship: 'see-also',
      label: 'Enfermedad arterial coronaria | Coronary Artery Disease',
    },
    {
      targetId: 'condition-atherosclerosis',
      targetType: 'condition',
      relationship: 'related',
      label: 'Aterosclerosis | Atherosclerosis',
    },
    {
      targetId: 'lab-panel-metabolico-completo-cmp',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Panel metabolico completo | CMP',
    },
    {
      targetId: 'system-cardiovascular',
      targetType: 'system',
      relationship: 'parent',
      label: 'Sistema cardiovascular | Cardiovascular System',
    },
  ],

  tags: {
    systems: ['cardiovascular', 'metabolico', 'endocrino'],
    topics: [
      'laboratorio',
      'lipidos',
      'colesterol',
      'riesgo cardiovascular',
      'prevencion',
      'aterosclerosis',
    ],
    keywords: [
      'perfil lipidico',
      'lipid panel',
      'colesterol',
      'LDL',
      'HDL',
      'trigliceridos',
      'estatinas',
      'PCSK9',
      'ASCVD',
      'hipercolesterolemia familiar',
      'lipoproteina a',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine', 'pediatrics'],
    },
  },

  createdAt: '2025-06-01T00:00:00.000Z',
  updatedAt: '2025-06-01T00:00:00.000Z',
  version: 1,
  status: 'published',
};
