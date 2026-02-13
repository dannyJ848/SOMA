/**
 * Pruebas Hepaticas (Liver Function Tests) - ALT, AST, Bilirubin, Albumin
 * Contenido educativo para interpretacion de pruebas de funcion hepatica
 *
 * Spanish-first bilingual educational content covering:
 * - ALT (TGP) / AST (TGO) - Transaminasas
 * - Bilirrubina total, directa e indirecta
 * - Albumina y proteinas totales
 * - Fosfatasa alcalina (FA)
 * - GGT (gamma-glutamil transferasa)
 * - Tiempo de protrombina / INR
 * - Valores de referencia en unidades convencionales y SI
 * - Valores criticos que requieren accion inmediata
 */

import { EducationalContent } from '../types';

export const pruebasHepaticasLiverFunction: EducationalContent = {
  id: 'lab-pruebas-hepaticas-liver-function',
  type: 'topic',
  name: 'Pruebas de Funcion Hepatica | Liver Function Tests (LFTs)',
  nameEs: 'Pruebas de Funcion Hepatica',
  alternateNames: [
    'LFTs',
    'Pruebas Hepaticas',
    'Hepatograma',
    'Liver Function Tests',
    'Liver Panel',
    'Perfil Hepatico',
    'Hepatic Function Panel',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Las pruebas hepaticas son analisis de sangre que miden si tu higado esta sano. El higado es como la fabrica de limpieza de tu cuerpo: filtra toxinas, produce proteinas y ayuda a la digestion. | Liver function tests are blood tests that measure if your liver is healthy. The liver is like your body cleaning factory: it filters toxins, makes proteins, and helps digestion.',
      explanation: `# Pruebas de Funcion Hepatica | Liver Function Tests

## Para que sirve el higado? | What does the liver do?

Tu higado es el **organo mas grande dentro de tu cuerpo** y trabaja como una fabrica con muchas funciones:

- **Limpieza**: Filtra toxinas de la sangre (como un filtro de agua)
- **Produccion**: Fabrica proteinas, como la albumina (que mantiene liquido en la sangre)
- **Digestion**: Produce bilis para digerir grasas (como jabon para la grasa de los platos)
- **Almacen**: Guarda energia (glucosa), vitaminas y hierro

## Que miden las pruebas hepaticas? | What do liver tests measure?

### Enzimas del higado (muestran dano) | Liver enzymes (show damage)
- **ALT (TGP)**: Esta dentro de las celulas del higado. Si sube, significa que las celulas estan danadas (como si rompieras un huevo y sale lo de adentro).
  - Normal: 7-56 U/L
- **AST (TGO)**: Similar al ALT, pero tambien esta en el corazon y musculos.
  - Normal: 10-40 U/L
- **Fosfatasa Alcalina (FA)**: Se eleva cuando los conductos de la bilis estan bloqueados (como una tuberia tapada).
  - Normal: 44-147 U/L

### Bilirrubina (el color amarillo) | Bilirubin (the yellow color)
- Es un pigmento amarillo que viene de la destruccion normal de globulos rojos
- Si el higado no la procesa bien, se acumula y te pones amarillo (**ictericia**)
- Normal total: 0.1-1.2 mg/dL

### Albumina (proteina del higado) | Albumin
- Proteina principal que el higado fabrica
- Si esta baja, el higado no esta trabajando bien (enfermedad cronica)
- Normal: 3.5-5.0 g/dL

## Valores criticos - Cuando preocuparse | Critical values

| Prueba | Valor critico | Significado |
|--------|--------------|------------|
| ALT/AST | Mayor de 1,000 U/L | Dano hepatico severo (hepatitis, medicamentos) |
| Bilirrubina total | Mayor de 15 mg/dL | Ictericia severa; evaluar urgente |
| Albumina | Menor de 2.0 g/dL | Enfermedad hepatica avanzada |
| INR | Mayor de 4.0 (sin anticoagulante) | Riesgo de sangrado; falla hepatica |

## Cuando debes ver al doctor? | When to see a doctor?
- Ojos o piel amarillos (ictericia) | Yellow eyes or skin (jaundice)
- Orina muy oscura (como Coca-Cola) | Very dark urine
- Dolor en la parte derecha del abdomen | Pain in right upper abdomen
- Heces palidas o de color arcilla | Pale or clay-colored stools`,
      keyTerms: [
        {
          term: 'higado | liver',
          definition:
            'El organo mas grande dentro de tu cuerpo; limpia la sangre, produce proteinas y ayuda a digerir grasas | The largest organ inside your body; cleans blood, makes proteins, and helps digest fats',
        },
        {
          term: 'ictericia | jaundice',
          definition:
            'Color amarillo de la piel y los ojos cuando se acumula bilirrubina en la sangre | Yellow color of skin and eyes when bilirubin builds up in the blood',
          pronunciation: 'ik-te-RI-sia',
        },
        {
          term: 'transaminasas (ALT, AST) | transaminases',
          definition:
            'Enzimas que estan dentro de las celulas del higado; cuando las celulas se danan, estas enzimas salen a la sangre y suben | Enzymes inside liver cells; when cells are damaged, these enzymes leak into blood and rise',
        },
        {
          term: 'bilis | bile',
          definition:
            'Liquido verde-amarillo que produce el higado para ayudar a digerir las grasas | Green-yellow fluid made by the liver to help digest fats',
        },
      ],
      analogies: [
        'El higado es como la planta de tratamiento de agua de tu ciudad: limpia todas las toxinas antes de que el agua (sangre) vuelva a circular. Si la planta se dana, el agua sale sucia (bilirrubina alta, enzimas altas). | The liver is like your city water treatment plant: it cleans all toxins before water (blood) circulates again. If the plant is damaged, water comes out dirty.',
        'Las transaminasas (ALT, AST) son como alarmas de humo: cuando las celulas del higado se danan, estas enzimas "suenan" saliendo a la sangre. Mientras mas alto el nivel, mas dano hay. | Transaminases are like smoke alarms: when liver cells are damaged, these enzymes "sound" by leaking into blood. The higher the level, the more damage.',
      ],
      examples: [
        'Si tomas demasiado acetaminofen (Tylenol), puedes danar el higado y tus ALT y AST suben mucho. | If you take too much acetaminophen (Tylenol), you can damage the liver and your ALT and AST rise greatly.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Las pruebas hepaticas se dividen en marcadores de dano hepatocelular (ALT, AST), marcadores de colestasis (FA, GGT, bilirrubina), y pruebas de funcion sintetica (albumina, PT/INR). El patron de elevacion guia el diagnostico diferencial. | Liver tests divide into hepatocellular damage markers (ALT, AST), cholestasis markers (ALP, GGT, bilirubin), and synthetic function tests (albumin, PT/INR). The elevation pattern guides differential diagnosis.',
      explanation: `# Pruebas Hepaticas - Nivel Intermedio | Liver Tests - Intermediate Level

## Clasificacion de las pruebas | Test classification

### 1. Marcadores de dano hepatocelular | Hepatocellular injury markers
| Prueba | Rango normal | Ubicacion | Especificidad |
|--------|-------------|-----------|---------------|
| ALT (TGP) | 7-56 U/L | Hepatocito (citoplasma) | **Mas especifica** para higado |
| AST (TGO) | 10-40 U/L | Hepatocito + corazon + musculo + rinon | Menos especifica |

### 2. Marcadores de colestasis | Cholestasis markers
| Prueba | Rango normal | Elevacion indica |
|--------|-------------|-----------------|
| Fosfatasa alcalina (FA) | 44-147 U/L | Obstruccion biliar, enfermedad osea |
| GGT | H: 0-65 U/L, M: 0-45 U/L | Confirma origen hepatico de FA; sensible a alcohol |
| Bilirrubina directa | 0-0.3 mg/dL | Colestasis (obstruccion biliar) |
| Bilirrubina indirecta | 0.1-0.8 mg/dL | Hemolisis, sindrome de Gilbert |
| Bilirrubina total | 0.1-1.2 mg/dL (2-21 umol/L) | Ictericia clinica visible >2.5 mg/dL |

### 3. Pruebas de funcion sintetica | Synthetic function tests
| Prueba | Rango normal | Lo que indica |
|--------|-------------|---------------|
| Albumina | 3.5-5.0 g/dL (35-50 g/L) | Capacidad sintetica del higado (vida media 20 dias) |
| PT/INR | PT: 11-13.5 seg; INR: 0.8-1.1 | Factores de coagulacion (vida media corta: horas-dias) |
| Proteinas totales | 6.0-8.3 g/dL | Albumina + globulinas |

## Patrones de lesion hepatica | Liver injury patterns

### Patron hepatocelular | Hepatocellular pattern
- ALT y AST **muy elevadas** (a menudo >10x normal)
- FA normal o levemente elevada
- Causas: hepatitis viral, toxica (acetaminofen), isquemica, autoinmune

### Patron colestasico | Cholestatic pattern
- FA **muy elevada** (>3x normal), GGT elevada
- ALT y AST normal o levemente elevadas
- Bilirrubina directa elevada
- Causas: litiasis biliar, tumores pancreaticos/biliares, cirrosis biliar primaria, farmacos

### Patron mixto | Mixed pattern
- Elevacion proporcional de transaminasas y FA
- Causas: hepatitis granulomatosa, hepatitis por drogas, infiltracion tumoral

## Cociente R (relacion ALT/FA) | R ratio
- R = (ALT / LSN ALT) / (FA / LSN FA)
- **R >5**: hepatocelular
- **R <2**: colestasico
- **R 2-5**: mixto

## Valores criticos | Critical values

| Prueba | Valor critico | Accion inmediata |
|--------|--------------|-----------------|
| AST/ALT | >1,000 U/L | Hepatitis aguda severa; descartar isquemia, toxicidad |
| Bilirrubina total | >15 mg/dL (257 umol/L) | Evaluar urgente: ictericia neonatal, falla hepatica |
| Albumina | <2.0 g/dL | Enfermedad hepatica avanzada, riesgo de edema/ascitis |
| INR | >1.5 (sin warfarina) | Coagulopatia hepatica; evaluar falla hepatica aguda |
| INR | >4.0 (en warfarina) | Riesgo de sangrado critico |

## Cociente AST/ALT (De Ritis) | AST/ALT ratio
- **AST/ALT >2**: sugestivo de hepatitis alcoholica
- **AST/ALT <1**: hepatitis viral, EHGNA (esteatosis no alcoholica)
- **AST y ALT ambas >1000**: hepatitis viral aguda, isquemia hepatica, toxicidad por acetaminofen
- Nota: En cirrosis, el cociente AST/ALT suele invertirse (AST>ALT) independiente de la causa`,
      keyTerms: [
        {
          term: 'colestasis | cholestasis',
          definition:
            'Obstruccion o disminucion del flujo de bilis; se manifiesta con FA elevada, bilirrubina directa alta, ictericia, y heces palidas | Obstruction or decreased bile flow; manifests with elevated ALP, high direct bilirubin, jaundice, and pale stools',
          pronunciation: 'ko-les-TA-sis',
        },
        {
          term: 'ALT / TGP (alanina aminotransferasa)',
          definition:
            'Enzima hepatica mas especifica; presente principalmente en citoplasma del hepatocito; su elevacion es el mejor indicador de dano hepatocelular | Most liver-specific enzyme; mainly in hepatocyte cytoplasm; its elevation is the best indicator of hepatocellular damage',
        },
        {
          term: 'bilirrubina directa (conjugada) | direct (conjugated) bilirubin',
          definition:
            'Bilirrubina procesada por el higado y lista para excrecion en bilis; se eleva en colestasis (obstruccion biliar) | Bilirubin processed by liver and ready for bile excretion; elevates in cholestasis',
        },
        {
          term: 'bilirrubina indirecta (no conjugada) | indirect (unconjugated) bilirubin',
          definition:
            'Bilirrubina aun no procesada por el higado; se eleva en hemolisis y sindrome de Gilbert | Bilirubin not yet processed by liver; elevates in hemolysis and Gilbert syndrome',
        },
        {
          term: 'cociente R | R ratio',
          definition:
            'Formula (ALT/LSN)/(FA/LSN) que clasifica el patron de dano hepatico: >5 hepatocelular, <2 colestasico, 2-5 mixto | Formula classifying liver injury pattern: >5 hepatocellular, <2 cholestatic, 2-5 mixed',
        },
      ],
      analogies: [
        'Piensa en el higado como un edificio de apartamentos: las transaminasas (ALT, AST) son los muebles dentro de los apartamentos (celulas). Si se danan los apartamentos, los muebles salen al pasillo (sangre). La FA es como la pintura de los pasillos (conductos biliares): si se danan los pasillos, la pintura sube. | Think of the liver like an apartment building: transaminases are furniture inside apartments (cells). If apartments are damaged, furniture goes into the hallway (blood). ALP is like hallway paint (bile ducts): if hallways are damaged, paint rises.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La interpretacion sistematica de pruebas hepaticas requiere: 1) clasificar el patron (hepatocelular vs. colestasico vs. mixto usando cociente R), 2) evaluar la severidad (grado de elevacion de transaminasas), 3) determinar la cronicidad (albumina, plaquetas, INR), y 4) integrar el contexto clinico para guiar el estudio etiologico dirigido. | Systematic liver test interpretation requires pattern classification, severity assessment, chronicity determination, and clinical context integration.',
      explanation: `# Pruebas Hepaticas - Interpretacion Clinica | Liver Tests - Clinical Interpretation

## Algoritmo diagnostico sistematico | Systematic diagnostic algorithm

### Paso 1: Clasificar el patron por cociente R | Classify pattern by R ratio
- R = (ALT / LSN ALT) / (FA / LSN FA)
- Hepatocelular (R >5) → Paso 2A
- Colestasico (R <2) → Paso 2B
- Mixto (R 2-5) → Paso 2C

### Paso 2A: Dano hepatocelular - Severidad | Hepatocellular injury - Severity

| Grado de elevacion ALT/AST | Diagnostico diferencial |
|----------------------------|----------------------|
| Leve (<5x LSN, <200 U/L) | EHGNA, hepatitis C cronica, hepatitis B cronica, alcohol, medicamentos, celiaca |
| Moderada (5-20x LSN) | Hepatitis viral aguda, hepatitis autoinmune, medicamentos, Wilson, Budd-Chiari |
| Severa (>20x LSN, >1000 U/L) | Hepatitis viral aguda, isquemia hepatica, acetaminofen, hepatitis autoinmune fulminante |

**Transaminasas >1000 U/L - "Los tres grandes":**
1. **Hepatitis isquemica** ("shock liver"): AST>ALT, LDH muy elevada, contexto de hipotension
2. **Toxicidad por acetaminofen**: historia + nivel serico + nomograma Rumack-Matthew
3. **Hepatitis viral aguda**: serologia (IgM anti-HAV, HBsAg, IgM anti-HBc, HCV RNA)

### Paso 2B: Patron colestasico - Intrahepatic vs. Extrahepatic | Cholestatic pattern

**Primer paso**: Ecografia hepatobiliar (dilatacion de vias biliares?)
- **Vias dilatadas** (obstruccion extrahepática): coledocolitiasis, tumor pancreatico/biliar, colangiocarcinoma, estenosis
  - Siguiente: CPRM o CPRE
- **Vias NO dilatadas** (intrahepática): farmacos, CBP, CEP, hepatitis granulomatosa
  - Siguiente: AMA (cirrosis biliar primaria), ANCA (colangitis esclerosante)

### Paso 2C: Patron mixto | Mixed pattern
- Hepatitis por drogas (DILI): temporalidad con farmaco, escala RUCAM
- Hepatitis granulomatosa
- Infiltracion tumoral hepatica

### Paso 3: Evaluar cronicidad y funcion sintetica | Assess chronicity

| Marcador | Agudo | Cronico/Cirrosis |
|----------|-------|-----------------|
| Albumina | Normal (vida media 20 dias) | Baja (<3.5 g/dL) |
| INR | Elevado si falla aguda | Elevado en cirrosis |
| Plaquetas | Normales | Bajas (hiperesplenismo) |
| Bilirrubina | Variable | Elevada (cirrosis descompensada) |

## Valores de referencia completos con unidades SI | Complete reference ranges

| Prueba | Convencional | SI | Factor conversion |
|--------|-------------|-----|-------------------|
| ALT | 7-56 U/L | 7-56 U/L | x1 |
| AST | 10-40 U/L | 10-40 U/L | x1 |
| FA | 44-147 U/L | 44-147 U/L | x1 |
| GGT (H) | 0-65 U/L | 0-65 U/L | x1 |
| GGT (M) | 0-45 U/L | 0-45 U/L | x1 |
| Bilirrubina total | 0.1-1.2 mg/dL | 2-21 umol/L | x17.1 |
| Bilirrubina directa | 0-0.3 mg/dL | 0-5 umol/L | x17.1 |
| Albumina | 3.5-5.0 g/dL | 35-50 g/L | x10 |
| Proteinas totales | 6.0-8.3 g/dL | 60-83 g/L | x10 |
| PT | 11-13.5 seg | 11-13.5 seg | x1 |
| INR | 0.8-1.1 | 0.8-1.1 | x1 |

## Valores criticos que requieren accion inmediata | Critical values

| Prueba | Critico | Accion |
|--------|---------|--------|
| AST o ALT | >1,000 U/L | Hepatitis aguda severa: panel viral urgente, acetaminofen, eco hepatica |
| Bilirrubina total | >15 mg/dL (257 umol/L) | Ictericia severa: evaluar obstruccion, falla hepatica |
| INR | >1.5 sin anticoagulante | Coagulopatia hepatica: evaluar falla hepatica aguda (criterios King's College) |
| INR | >4.0 | Riesgo sangrado critico: vitamina K IV, considerar PFC/CCP |
| Albumina | <2.0 g/dL | Desnutricion severa / falla hepatica avanzada |

## Estudio etiologico inicial de hepatopatia | Initial liver disease workup

### Panel basico de hepatitis | Basic hepatitis panel
- Hepatitis A: IgM anti-HAV (aguda)
- Hepatitis B: HBsAg, anti-HBs, anti-HBc (IgM si aguda)
- Hepatitis C: anti-HCV, si positivo → HCV RNA

### Causas metabolicas y autoinmunes | Metabolic and autoimmune
- Ferritina y saturacion de transferrina (hemocromatosis)
- Ceruloplasmina (Wilson, si <40 anos)
- ANA, ASMA, anti-LKM, IgG (hepatitis autoinmune)
- AMA (cirrosis biliar primaria)
- Alfa-1 antitripsina (deficit de A1AT)

### Evaluacion de higado graso | Fatty liver evaluation
- FIB-4 = (edad x AST) / (plaquetas x sqrt(ALT)); >3.25 sugiere fibrosis avanzada
- NAFLD Fibrosis Score
- Ecografia hepatica (esteatosis)
- FibroScan/elastografia (fibrosis)`,
      keyTerms: [
        {
          term: 'EHGNA / NAFLD (enfermedad de higado graso no alcoholico)',
          definition:
            'Acumulacion de grasa en el higado sin consumo significativo de alcohol; causa mas comun de transaminasas elevadas leves en paises occidentales; espectro desde esteatosis simple hasta esteatohepatitis (NASH) y cirrosis | Fat accumulation in liver without significant alcohol use; most common cause of mild transaminase elevation in Western countries',
        },
        {
          term: 'criterios de King\'s College | King\'s College criteria',
          definition:
            'Criterios para indicar trasplante hepatico en falla hepatica aguda: en acetaminofen (pH <7.3 o INR >6.5 + creatinina >3.4 + encefalopatia III-IV) y no acetaminofen (INR >6.5 o 3 de 5 criterios) | Criteria for liver transplant indication in acute liver failure',
        },
        {
          term: 'FIB-4',
          definition:
            'Indice de fibrosis hepatica calculado con edad, AST, ALT y plaquetas; <1.3 descarta fibrosis avanzada, >3.25 sugiere fibrosis avanzada | Liver fibrosis index using age, AST, ALT, and platelets; <1.3 rules out advanced fibrosis, >3.25 suggests it',
        },
        {
          term: 'escala RUCAM | RUCAM score',
          definition:
            'Metodo estandarizado para evaluar causalidad de dano hepatico por farmacos (DILI); puntaje >8 = altamente probable | Standardized method to assess drug-induced liver injury causality; score >8 = highly probable',
        },
        {
          term: 'CPRE (colangiopancreatografia retrograda endoscopica)',
          definition:
            'Procedimiento endoscopico para diagnosticar y tratar obstrucciones de conductos biliares y pancreaticos | Endoscopic procedure to diagnose and treat bile and pancreatic duct obstructions',
        },
      ],
      clinicalNotes:
        'Nunca asumir que una ALT levemente elevada es "normal" o benigna. EHGNA es ahora la causa mas comun de hepatopatia cronica globalmente y puede progresar a cirrosis. FIB-4 es un excelente screening inicial no invasivo. En transaminasas >1000, considerar siempre isquemia hepatica (especialmente si LDH muy elevada y contexto de hipotension) antes de hepatitis viral. | Never assume a mildly elevated ALT is benign. NAFLD is now the most common cause of chronic liver disease globally. For transaminases >1000, always consider hepatic ischemia.',
    },

    4: {
      level: 4,
      summary:
        'La interpretacion avanzada de pruebas hepaticas integra scores pronosticos (MELD, Child-Pugh, MELD-Na), biomarcadores de fibrosis (FibroScan, ELF, Pro-C3), abordaje sistematico del DILI, criterios de falla hepatica aguda (ALF) para trasplante, y patrones especificos de enfermedad hepatica rara. | Advanced liver test interpretation integrates prognostic scores, fibrosis biomarkers, systematic DILI approach, acute liver failure transplant criteria, and specific rare liver disease patterns.',
      explanation: `# Pruebas Hepaticas - Analisis Avanzado | Liver Tests - Advanced Analysis

## Scores pronosticos en enfermedad hepatica cronica | Prognostic scores

### Score MELD-Na (Model for End-Stage Liver Disease)
MELD-Na = MELD + 1.32 x (137 - Na) - [0.033 x MELD x (137 - Na)]
- Componentes MELD: bilirrubina, INR, creatinina
- Rango: 6-40
- Uso principal: priorizar trasplante hepatico
- MELD >=15: considerar listar para trasplante
- MELD >=30: mortalidad a 3 meses ~50-75%

### Clasificacion de Child-Pugh | Child-Pugh classification
| Parametro | 1 punto | 2 puntos | 3 puntos |
|-----------|---------|----------|----------|
| Bilirrubina (mg/dL) | <2 | 2-3 | >3 |
| Albumina (g/dL) | >3.5 | 2.8-3.5 | <2.8 |
| INR | <1.7 | 1.7-2.3 | >2.3 |
| Ascitis | Ninguna | Leve/controlada | Moderada-severa |
| Encefalopatia | Ninguna | Grado I-II | Grado III-IV |

| Clase | Puntos | Supervivencia 1 ano | Supervivencia 2 anos |
|-------|--------|--------------------|--------------------|
| A | 5-6 | 100% | 85% |
| B | 7-9 | 80% | 60% |
| C | 10-15 | 45% | 35% |

## Falla hepatica aguda (FHA) - Criterios y manejo | Acute liver failure (ALF)

### Definicion | Definition
- Coagulopatia (INR >=1.5) + encefalopatia hepatica en paciente SIN enfermedad hepatica cronica previa
- Hiperaguda (<7 dias), aguda (7-21 dias), subaguda (21 dias-26 semanas)

### Criterios de King's College para trasplante | King's College criteria

**Por acetaminofen:**
- pH arterial <7.3 (tras resucitacion) O
- INR >6.5 + creatinina >3.4 mg/dL + encefalopatia grado III-IV

**No acetaminofen:**
- INR >6.5 O
- Tres de los siguientes cinco: edad <10 o >40; causa desfavorable (Wilson, drogas, seronegativa); ictericia >7 dias antes de encefalopatia; INR >3.5; bilirrubina >17.5 mg/dL

### N-acetilcisteina (NAC) en FHA | NAC in ALF
- **Acetaminofen**: tratamiento especifico; mas efectiva si se inicia <8h post-ingestion
- **No acetaminofen**: NAC mejora supervivencia libre de trasplante en encefalopatia grados I-II (ensayo de Lee, AASLD)

## Biomarcadores avanzados de fibrosis | Advanced fibrosis biomarkers

| Biomarcador | Metodo | Que mide | Utilidad |
|-------------|--------|----------|---------|
| FibroScan (TE) | Elastografia transitoria | Rigidez hepatica (kPa) | Gold standard no invasivo para fibrosis |
| APRI | AST/plaquetas | Fibrosis indirecta | <0.5 descarta fibrosis significativa |
| FIB-4 | Edad, AST, ALT, plaquetas | Fibrosis indirecta | <1.3 descarta, >3.25 confirma fibrosis avanzada |
| ELF (Enhanced Liver Fibrosis) | TIMP-1, HA, PIIINP | Componentes de matriz | Excelente para fibrosis intermedia |
| Pro-C3 | Propeptido colágeno III | Sintesis de colageno activa | Marcador de fibrogénesis activa |

### Interpretacion de FibroScan | FibroScan interpretation
| Rigidez (kPa) | Estadio Metavir | Interpretacion |
|----------------|----------------|---------------|
| <7 | F0-F1 | Sin fibrosis significativa |
| 7-9.5 | F2 | Fibrosis significativa |
| 9.5-12.5 | F3 | Fibrosis avanzada |
| >12.5 | F4 | Cirrosis |

## DILI (Dano hepatico inducido por drogas) | Drug-induced liver injury

### Escala RUCAM detallada | Detailed RUCAM scale
Evalua 7 criterios: temporalidad, curso, factores de riesgo, medicamentos concomitantes, exclusion de otras causas, informacion previa del farmaco, re-exposicion
- >=9: Altamente probable | 6-8: Probable | 3-5: Posible | 1-2: Improbable

### Farmacos hepatotoxicos comunes | Common hepatotoxic drugs
| Farmaco | Patron | Mecanismo | Especial |
|---------|--------|-----------|---------|
| Acetaminofen | Hepatocelular (dosis-dependiente) | NAPQI (metabolito toxico) | Nomograma Rumack-Matthew |
| Amoxicilina-clavulanico | Colestasico/mixto | Idiosincrasico | Causa mas comun de DILI |
| Isoniazida | Hepatocelular | Metabolico/inmune | Monitoreo mensual ALT |
| Metotrexato | Hepatocelular → fibrosis | Acumulativo | Fibrosis con dosis acumulada |
| Anticonceptivos orales | Colestasico | Hormonal | Adenoma hepatico (raro) |
| Estatinas | Hepatocelular leve | Usualmente autolimitado | ALT <3x LSN no requiere suspension |

## Patrones especificos de enfermedades hepaticas | Disease-specific patterns

### Hepatitis autoinmune (HAI) | Autoimmune hepatitis
- Tipo 1: ANA+ y/o ASMA+ (la mas comun en adultos)
- Tipo 2: anti-LKM1+ (mas comun en ninos)
- IgG elevada (policlonal)
- Score simplificado HAI: >=7 = diagnostico definitivo
- Biopsia: hepatitis de interfase con infiltrado linfoplasmocitario

### Enfermedad de Wilson | Wilson disease
- Pensar en TODO paciente <40 anos con hepatopatia inexplicada
- Ceruloplasmina baja (<20 mg/dL) + cobre libre serico elevado
- Anillo de Kayser-Fleischer (lampara de hendidura)
- Biopsia: cobre hepatico >250 ug/g peso seco
- Puede presentarse como FHA con anemia hemolitica Coombs-negativa + FA muy baja + relacion FA/bilirrubina <4

### Hemocromatosis hereditaria | Hereditary hemochromatosis
- Saturacion de transferrina >45% + ferritina elevada
- Genotipificacion HFE: C282Y/C282Y (homocigoto) mas comun
- Biopsia si ferritina >1000 o transaminasas elevadas
- Tratamiento: flebotomias periodicas`,
      keyTerms: [
        {
          term: 'MELD-Na | Model for End-Stage Liver Disease with Sodium',
          definition:
            'Score pronostico usando bilirrubina, INR, creatinina y sodio para predecir mortalidad en cirrosis; utilizado para priorizar trasplante hepatico | Prognostic score using bilirubin, INR, creatinine, and sodium to predict mortality in cirrhosis; used to prioritize liver transplant',
        },
        {
          term: 'FibroScan / elastografia transitoria | transient elastography',
          definition:
            'Metodo no invasivo que mide la rigidez hepatica en kilopascales (kPa) como sustituto de biopsia para estadificar fibrosis; >12.5 kPa sugiere cirrosis | Non-invasive method measuring liver stiffness as biopsy surrogate for fibrosis staging; >12.5 kPa suggests cirrhosis',
        },
        {
          term: 'DILI (dano hepatico inducido por drogas) | drug-induced liver injury',
          definition:
            'Lesion hepatica causada por medicamentos o suplementos; diagnostico de exclusion evaluado con escala RUCAM; amoxicilina-clavulanico es la causa mas comun | Liver injury caused by drugs or supplements; diagnosis of exclusion assessed with RUCAM scale',
        },
        {
          term: 'falla hepatica aguda (FHA) | acute liver failure (ALF)',
          definition:
            'Coagulopatia (INR >=1.5) + encefalopatia hepatica en paciente sin hepatopatia cronica previa; emergencia que puede requerir trasplante hepatico urgente | Coagulopathy + hepatic encephalopathy in patient without prior chronic liver disease; emergency potentially requiring urgent liver transplant',
        },
        {
          term: 'encefalopatia hepatica | hepatic encephalopathy',
          definition:
            'Disfuncion cerebral por acumulacion de toxinas (amonio) que el higado enfermo no puede eliminar; va desde confusion leve (grado I) hasta coma (grado IV) | Brain dysfunction from toxin accumulation (ammonia) the diseased liver cannot clear; ranges from mild confusion to coma',
        },
      ],
      clinicalNotes:
        'En sospecha de falla hepatica aguda, transferir tempranamente a centro con capacidad de trasplante. No esperar deterioro clinico. La NAC tiene beneficio incluso en FHA no causada por acetaminofen (encefalopatia I-II). Para DILI, el patron colestasico tiene mejor pronostico que el hepatocelular (Hy\'s Law: DILI hepatocelular con bilirrubina >2x LSN = mortalidad ~10%). En Wilson fulminante, la FA paradojicamente baja y la relacion FA/bilirrubina <4 son claves diagnosticas. | In suspected ALF, transfer early to transplant center. NAC benefits even non-acetaminophen ALF. In DILI, Hy\'s Law predicts 10% mortality with hepatocellular pattern + bilirubin >2x ULN.',
    },

    5: {
      level: 5,
      summary:
        'La interpretacion experta de pruebas hepaticas incorpora diagnosticos moleculares de hepatopatias geneticas, biomarcadores de fibrogenesis activa vs. estable, estratificacion de riesgo de carcinoma hepatocelular, abordaje de enfermedad hepatica en el trasplantado, y patrones clinico-patologicos avanzados incluyendo enfermedades de deposito, vasculares hepaticas y trastornos del metabolismo de la bilirrubina. | Expert liver test interpretation incorporates molecular diagnostics for genetic liver diseases, active vs. stable fibrogenesis biomarkers, HCC risk stratification, post-transplant liver disease approach, and advanced clinicopathologic patterns.',
      explanation: `# Pruebas Hepaticas - Nivel Experto | Liver Tests - Expert Level

## Diagnosticos moleculares en hepatopatia | Molecular diagnostics in liver disease

### Esteatohepatitis metabolica (MASH/NASH) - Nuevos paradigmas | Metabolic steatohepatitis

**Nomenclatura actualizada (2023):**
- NAFLD → MASLD (metabolic dysfunction-associated steatotic liver disease)
- NASH → MASH (metabolic dysfunction-associated steatohepatitis)
- Incluye criterios cardiometabolicos para el diagnostico

**Biomarcadores emergentes para MASH:**
| Biomarcador | Que detecta | Ventaja |
|-------------|-----------|---------|
| NIS4 (miR-34a, alfa-2M, YKL-40, HbA1c) | NASH activa con fibrosis >=2 | Evita biopsia innecesaria |
| OWLiver (panel lipidico por RMN) | Esteatohepatitis | No invasivo, alta sensibilidad |
| Pro-C3 | Fibrogénesis activa | Diferencia fibrosis activa vs estable |
| Mac-2BP | Fibrosis avanzada | Util en seguimiento longitudinal |
| FibroScan + CAP | Fibrosis + esteatosis simultanea | Gold standard no invasivo combinado |

**Terapias aprobadas y en desarrollo:**
- **Resmetirom** (Rezdiffra): agonista THR-beta, primer farmaco aprobado por FDA para MASH con fibrosis (2024)
- Semaglutide (GLP-1 RA): NASH resolution en ~60% (ensayo STEP-NASH/ESSENCE)
- Obeticholic acid (OCA): fibrosis mejora pero efectos secundarios (prurito, aumento LDL)

### Enfermedades hepaticas geneticas - Panel molecular | Genetic liver disease panel

| Enfermedad | Gen(es) | Prueba diagnostica clave |
|-----------|---------|------------------------|
| Wilson | ATP7B | Secuenciacion ATP7B; Cu hepatico >250 ug/g |
| Hemocromatosis | HFE (C282Y, H63D) | Genotipificacion HFE |
| Deficit de alfa-1-AT | SERPINA1 (Pi*ZZ, Pi*SZ) | Fenotipificacion + nivel serico |
| Colestasis intrahepática familiar (PFIC) | ATP8B1, ABCB11, ABCB4 | Panel genetico; GGT distingue tipos |
| Sindrome de Alagille | JAG1, NOTCH2 | Clinico + genetico |
| Glucogenosis hepaticas | GYS2, G6PC, SLC37A4 | Biopsia + genetica |

## Estratificacion de riesgo de carcinoma hepatocelular (CHC) | HCC risk stratification

### Vigilancia en cirrosis | Surveillance in cirrhosis
- Ecografia hepatica + alfa-fetoproteina (AFP) cada 6 meses
- Poblaciones de mayor riesgo: cirrosis por HBV, HCV, alcohol, MASH
- HBV sin cirrosis: vigilancia si hombre asiatico >40, mujer asiatica >50, africano >20, historia familiar

### Biomarcadores de CHC | HCC biomarkers
| Biomarcador | Sensibilidad | Especificidad | Utilidad |
|-------------|-------------|---------------|---------|
| AFP | 60% | 90% (>200 ng/mL) | Screening combinado con eco |
| AFP-L3% | 35-60% | 90-95% | Especificidad para CHC vs hepatopatia |
| DCP (PIVKA-II) | 50-70% | 85-95% | Complementario a AFP |
| GALAD score | 85-95% | 80-90% | Combina sexo, edad, AFP-L3, AFP, DCP |

### Clasificacion BCLC y tratamiento | BCLC staging

| Estadio | Caracteristicas | Tratamiento |
|---------|----------------|-------------|
| 0 (muy temprano) | Nodulo <2 cm, Child A | Reseccion o ablacion |
| A (temprano) | 1-3 nodulos <3 cm, Child A-B | Reseccion, ablacion, o trasplante |
| B (intermedio) | Multinodular, Child A-B | TACE (quimioembolizacion) |
| C (avanzado) | Invasion vascular/metastasis | Atezolizumab + bevacizumab (1a linea) |
| D (terminal) | Child C, PS >2 | Soporte paliativo |

## Higado post-trasplante - Interpretacion de pruebas | Post-transplant liver tests

### Diagnostico diferencial de transaminasas elevadas post-trasplante | DDx elevated LFTs post-transplant
| Temporalidad | Causa | Patron | Evaluacion |
|-------------|-------|--------|-----------|
| <30 dias | Rechazo agudo celular | Mixto | Biopsia (portal inflamacion, endotelialitis, dano ductal) |
| <7 dias | Lesion de preservacion | Hepatocelular | AST/ALT pico en 48-72h, mejora gradual |
| Cualquier tiempo | Estenosis de arteria hepatica | Variable | Doppler hepatico urgente |
| >3 meses | Rechazo cronico (ductopénico) | Colestasico progresivo | Biopsia: perdida de conductos biliares |
| >6 meses | Recurrencia de enfermedad original | Similar a enfermedad original | Segun etiologia |
| Cualquier tiempo | Toxicidad por inmunosupresores | Colestasico leve | Niveles de tacrolimus/ciclosporina |

## Trastornos del metabolismo de la bilirrubina | Bilirubin metabolism disorders

### Hiperbilirrubinemias hereditarias | Hereditary hyperbilirubinemias
| Sindrome | Tipo de bilirrubina | Gen | Gravedad | Tratamiento |
|----------|-------------------|-----|----------|-------------|
| Gilbert | Indirecta (no conjugada) | UGT1A1 (promotor) | Benigno (5-8% poblacion) | Ninguno |
| Crigler-Najjar I | Indirecta | UGT1A1 (ausencia completa) | Severo (kernicterus) | Fototerapia, trasplante |
| Crigler-Najjar II | Indirecta | UGT1A1 (actividad parcial) | Moderado | Fenobarbital |
| Dubin-Johnson | Directa (conjugada) | ABCC2/MRP2 | Benigno | Ninguno |
| Rotor | Directa | SLCO1B1/SLCO1B3 | Benigno | Ninguno |

### Distinguir Gilbert de hemolisis | Distinguishing Gilbert from hemolysis
- Ambos: bilirrubina indirecta elevada
- **Gilbert**: reticulocitos normales, LDH normal, haptoglobina normal; bilirrubina usualmente <4 mg/dL; aumenta con ayuno/estres
- **Hemolisis**: reticulocitos elevados, LDH elevada, haptoglobina baja

## Enfermedades vasculares hepaticas | Hepatic vascular diseases

### Sindrome de Budd-Chiari | Budd-Chiari syndrome
- Trombosis de venas hepaticas (dolor abdominal + hepatomegalia + ascitis)
- Patron: hepatocelular agudo (AST>ALT) con ascitis de rapida aparicion
- Buscar trombofilia: JAK2, Factor V Leiden, proteina C/S, anticoagulante lupico
- Diagnostico: eco Doppler hepatico (ausencia de flujo en venas hepaticas)

### Enfermedad veno-oclusiva / SOS | Sinusoidal obstruction syndrome
- Post-trasplante de medula osea: hepatomegalia dolorosa, ictericia, ascitis, aumento de peso
- Bilirrubina >2 mg/dL + hepatomegalia + ganancia peso >5% = criterios de Baltimore
- Tratamiento: defibrotide

## Perlas clinicas de nivel experto | Expert clinical pearls

1. **ALT "normal" no siempre es normal**: Poblaciones con MASLD pueden tener ALT <LSN pero fibrosis avanzada; considerar bajar umbral de investigacion a ALT >19 (M) y >30 (H)
2. **FA elevada aislada**: Si GGT normal, el origen es oseo (embarazo, Paget, metastasis oseas); si GGT elevada, confirma origen hepatobiliar
3. **Bilirrubina aislada elevada indirecta + hemolisis negativa en joven**: Gilbert (prueba de ayuno de 48h confirma aumento >100%)
4. **Transaminasas >10,000**: virtualmente solo 3 causas: isquemia, acetaminofen, reactivacion de HBV
5. **ALT que mejora espontaneamente en cirrosis avanzada**: NO es buena senal; puede indicar perdida de masa hepatocitaria ("burnout")`,
      keyTerms: [
        {
          term: 'resmetirom (Rezdiffra) | resmetirom',
          definition:
            'Agonista selectivo del receptor beta de hormona tiroidea hepatica; primer farmaco aprobado por FDA para MASH con fibrosis moderada-avanzada (2024); reduce esteatosis y mejora marcadores de fibrosis | Selective hepatic THR-beta agonist; first FDA-approved drug for MASH with moderate-advanced fibrosis; reduces steatosis and improves fibrosis markers',
        },
        {
          term: 'MASLD / MASH (nueva nomenclatura)',
          definition:
            'Nomenclatura actualizada (2023) reemplazando NAFLD/NASH; MASLD requiere esteatosis hepatica + al menos un criterio cardiometabolico; elimina terminos "alcoholico/no-alcoholico" y reduce estigma | Updated nomenclature replacing NAFLD/NASH; requires hepatic steatosis + at least one cardiometabolic criterion',
        },
        {
          term: 'score GALAD | GALAD score',
          definition:
            'Algoritmo que combina sexo (Gender), edad (Age), AFP-L3, AFP, y DCP para deteccion temprana de CHC; sensibilidad 85-95%; superior a AFP sola | Algorithm combining gender, age, AFP-L3, AFP, and DCP for early HCC detection; 85-95% sensitivity; superior to AFP alone',
        },
        {
          term: 'rechazo agudo celular (RAC) | acute cellular rejection',
          definition:
            'Respuesta inmune mediada por celulas T contra el injerto hepatico; triada histologica: inflamacion portal mixta, endotelialitis, dano ductal; tratado con bolos de esteroides | T-cell mediated immune response against liver graft; histologic triad: mixed portal inflammation, endothelialitis, duct damage; treated with steroid boluses',
        },
        {
          term: 'sindrome de obstruccion sinusoidal (SOS) | sinusoidal obstruction syndrome',
          definition:
            'Anteriormente llamado enfermedad veno-oclusiva; dano endotelial de sinusoides hepaticos tipicamente post-trasplante de medula osea; diagnostico clinico (criterios de Baltimore/Seattle); tratamiento: defibrotide | Previously called veno-occlusive disease; sinusoidal endothelial damage typically post-bone marrow transplant; treated with defibrotide',
        },
      ],
      clinicalNotes:
        'El paradigma de la hepatologia esta cambiando: 1) MASLD/MASH reemplaza NAFLD/NASH con criterios diagnosticos positivos. 2) Resmetirom es el primer farmaco aprobado para MASH con fibrosis. 3) La vigilancia de CHC con GALAD score mejora la deteccion temprana. 4) En el higado post-trasplante, Doppler hepatico urgente es obligatorio ante ALT elevada aguda (estenosis de arteria hepatica = perdida del injerto si no se actua). 5) La ALT que "mejora" en cirrosis avanzada puede ser un signo ominoso de perdida hepatocitaria, no de mejoria. | The hepatology paradigm is shifting with MASLD nomenclature, resmetirom approval for MASH, and GALAD-based HCC surveillance. In post-transplant, urgent hepatic Doppler is mandatory for acute ALT elevation. ALT improvement in advanced cirrhosis may be ominous.',
    },
  },

  media: [],

  citations: [
    {
      id: 'aasld-alf-guidelines-2023',
      type: 'guideline',
      title: 'AASLD Position Paper: Management of Acute Liver Failure',
      source: 'Hepatology',
      url: 'https://doi.org/10.1002/hep.32768',
    },
    {
      id: 'easl-dili-guideline-2019',
      type: 'guideline',
      title: 'EASL Clinical Practice Guidelines: Drug-Induced Liver Injury',
      source: 'Journal of Hepatology',
      url: 'https://doi.org/10.1016/j.jhep.2019.02.014',
    },
    {
      id: 'masld-nomenclature-2023',
      type: 'journal',
      title: 'A Multisociety Delphi Consensus Statement on New Fatty Liver Disease Nomenclature',
      authors: ['Rinella, M.E.', 'Lazarus, J.V.', 'Ratziu, V.'],
      source: 'Hepatology, 2023; 78(6):1966-1986',
    },
    {
      id: 'schiff-diseases-liver-12e',
      type: 'textbook',
      title: "Schiff's Diseases of the Liver",
      authors: ['Schiff, E.R.', 'Maddrey, W.C.', 'Reddy, K.R.'],
      source: 'Wiley-Blackwell, 12th Edition',
    },
    {
      id: 'bclc-guidelines-2022',
      type: 'guideline',
      title: 'BCLC Strategy for Prognosis Prediction and Treatment Recommendation: The 2022 Update',
      source: 'Journal of Hepatology, 2022; 76(3):681-693',
    },
  ],

  crossReferences: [
    {
      targetId: 'lab-alt',
      targetType: 'concept',
      relationship: 'child',
      label: 'ALT / TGP | Alanine Aminotransferase',
    },
    {
      targetId: 'lab-ast',
      targetType: 'concept',
      relationship: 'child',
      label: 'AST / TGO | Aspartate Aminotransferase',
    },
    {
      targetId: 'lab-bilirubin',
      targetType: 'concept',
      relationship: 'child',
      label: 'Bilirrubina | Bilirubin',
    },
    {
      targetId: 'lab-albumin',
      targetType: 'concept',
      relationship: 'child',
      label: 'Albumina | Albumin',
    },
    {
      targetId: 'lab-alkaline-phosphatase',
      targetType: 'concept',
      relationship: 'child',
      label: 'Fosfatasa alcalina | Alkaline Phosphatase',
    },
    {
      targetId: 'lab-ggt',
      targetType: 'concept',
      relationship: 'child',
      label: 'GGT | Gamma-Glutamyl Transferase',
    },
    {
      targetId: 'lab-pt-inr',
      targetType: 'concept',
      relationship: 'related',
      label: 'PT/INR | Prothrombin Time',
    },
    {
      targetId: 'lab-panel-metabolico-completo-cmp',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Panel metabolico completo | CMP',
    },
    {
      targetId: 'condition-cirrhosis',
      targetType: 'condition',
      relationship: 'see-also',
      label: 'Cirrosis | Cirrhosis',
    },
    {
      targetId: 'condition-hepatitis',
      targetType: 'condition',
      relationship: 'see-also',
      label: 'Hepatitis',
    },
    {
      targetId: 'system-hepatobiliary',
      targetType: 'system',
      relationship: 'parent',
      label: 'Sistema hepatobiliar | Hepatobiliary System',
    },
  ],

  tags: {
    systems: ['hepatico', 'gastrointestinal', 'metabolico'],
    topics: [
      'laboratorio',
      'hepatologia',
      'funcion hepatica',
      'bilirrubina',
      'transaminasas',
      'cirrosis',
      'hepatitis',
    ],
    keywords: [
      'pruebas hepaticas',
      'LFTs',
      'ALT',
      'AST',
      'bilirrubina',
      'albumina',
      'fosfatasa alcalina',
      'GGT',
      'cirrosis',
      'hepatitis',
      'MELD',
      'Child-Pugh',
      'DILI',
      'MASLD',
      'falla hepatica',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'pediatrics', 'family-medicine'],
    },
  },

  createdAt: '2025-06-01T00:00:00.000Z',
  updatedAt: '2025-06-01T00:00:00.000Z',
  version: 1,
  status: 'published',
};
