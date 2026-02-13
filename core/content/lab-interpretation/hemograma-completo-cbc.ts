/**
 * Hemograma Completo (CBC) - Complete Blood Count
 * Contenido educativo para interpretacion del hemograma completo
 *
 * Spanish-first bilingual educational content covering:
 * - Conteo de globulos blancos (WBC) y diferencial
 * - Conteo de globulos rojos (RBC) e indices
 * - Hemoglobina (Hgb) y Hematocrito (Hct)
 * - Conteo de plaquetas
 * - VCM, HCM, CHCM, ADE (MCV, MCH, MCHC, RDW)
 * - Valores de referencia en unidades convencionales y SI
 * - Valores criticos que requieren accion inmediata
 */

import { EducationalContent } from '../types';

export const hemogramaCompletoCBC: EducationalContent = {
  id: 'lab-hemograma-completo-cbc',
  type: 'topic',
  name: 'Hemograma Completo | Complete Blood Count (CBC)',
  nameEs: 'Hemograma Completo',
  alternateNames: [
    'CBC',
    'Biometria Hematica',
    'Conteo Sanguineo Completo',
    'Complete Blood Count',
    'Full Blood Count',
    'FBC',
    'BHC',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'El hemograma completo es un analisis de sangre que cuenta las celulas de tu sangre para saber si estas sano. | The complete blood count is a blood test that counts your blood cells to check your health.',
      explanation: `# Hemograma Completo | Complete Blood Count

## Que es el hemograma? | What is a CBC?

El hemograma completo es como un **inventario de tu sangre**. Imagina que tu sangre es un ejercito con tres tipos de soldados, y el doctor quiere contar cuantos de cada tipo tienes:

**1. Globulos rojos (celulas rojas) | Red blood cells**
Son los camiones de reparto que llevan oxigeno desde tus pulmones a todo tu cuerpo. Si tienes pocos, te sientes cansado y palido. Esto se llama **anemia**.
- Rango normal de hemoglobina: Hombres 14-18 g/dL | Mujeres 12-16 g/dL

**2. Globulos blancos (celulas blancas) | White blood cells**
Son los soldados que pelean contra las infecciones. Si tienes muchos, puede ser que tu cuerpo este luchando contra una infeccion. Si tienes muy pocos, es mas facil que te enfermes.
- Rango normal: 4,500-11,000 por microlitro (4.5-11.0 x10^9/L)

**3. Plaquetas | Platelets**
Son como parches que tapan los hoyos cuando te cortas. Si tienes pocas, sangras mas facil. Si tienes muchas, tu sangre se puede poner muy espesa.
- Rango normal: 150,000-400,000 por microlitro (150-400 x10^9/L)

## Valores criticos - Cuando llamar al doctor inmediatamente | Critical values

| Prueba | Valor critico bajo | Valor critico alto |
|--------|-------------------|-------------------|
| Hemoglobina | Menor de 7 g/dL | Mayor de 20 g/dL |
| Globulos blancos | Menor de 2,000/uL | Mayor de 30,000/uL |
| Plaquetas | Menor de 50,000/uL | Mayor de 1,000,000/uL |

El doctor pide este examen cuando quiere saber por que te sientes cansado, si tienes una infeccion, o antes de una cirugia.`,
      keyTerms: [
        {
          term: 'hemograma | blood count',
          definition:
            'Examen de sangre que cuenta tus celulas sanguineas | Blood test that counts your blood cells',
        },
        {
          term: 'globulos rojos | red blood cells',
          definition:
            'Celulas que llevan oxigeno por tu cuerpo | Cells that carry oxygen through your body',
        },
        {
          term: 'globulos blancos | white blood cells',
          definition:
            'Celulas que pelean contra las infecciones | Cells that fight infections',
        },
        {
          term: 'plaquetas | platelets',
          definition:
            'Pedacitos de celulas que ayudan a parar el sangrado | Cell fragments that help stop bleeding',
        },
        {
          term: 'anemia',
          definition:
            'Cuando no tienes suficientes globulos rojos o hemoglobina | When you do not have enough red blood cells or hemoglobin',
        },
      ],
      analogies: [
        'Tu sangre es como una autopista llena de vehiculos: los globulos rojos son los camiones de oxigeno, los blancos son las patrullas de policia, y las plaquetas son el equipo de reparacion de carreteras. | Your blood is like a highway full of vehicles: red blood cells are oxygen trucks, white cells are police patrols, and platelets are the road repair crew.',
        'Un hemograma es como un censo de tu sangre: cuenta a todos los habitantes para ver si la comunidad esta equilibrada. | A CBC is like a census of your blood: it counts all residents to see if the community is balanced.',
      ],
      examples: [
        'Si te sientes muy cansado y palido, el doctor puede pedir un hemograma para ver si tienes anemia. | If you feel very tired and pale, the doctor may order a CBC to check for anemia.',
        'Antes de una operacion, siempre se hace un hemograma para asegurarse de que tu sangre esta bien. | Before surgery, a CBC is always done to make sure your blood is okay.',
      ],
    },

    2: {
      level: 2,
      summary:
        'El hemograma mide tres lineas celulares: serie roja (eritrocitos, hemoglobina, hematocrito), serie blanca (leucocitos y diferencial), y plaquetas. Los resultados ayudan a diagnosticar anemia, infecciones y trastornos de la coagulacion. | The CBC measures three cell lines: red cell series, white cell series, and platelets, helping diagnose anemia, infections, and clotting disorders.',
      explanation: `# Hemograma Completo - Nivel Intermedio | CBC - Intermediate Level

## Componentes del hemograma | CBC Components

### Serie roja (eritrocitaria) | Red cell series
| Prueba | Abreviatura | Rango normal adultos | Unidades SI |
|--------|-------------|---------------------|-------------|
| Hemoglobina | Hgb/Hb | H: 14-18, M: 12-16 | g/dL (= g/L x 0.1) |
| Hematocrito | Hct | H: 40-54%, M: 36-48% | L/L (fraccion) |
| Globulos rojos | RBC/GR | H: 4.5-5.5, M: 4.0-5.0 | x10^12/L |
| VCM (Vol. Corp. Medio) | MCV | 80-100 | fL |
| HCM (Hgb Corp. Media) | MCH | 27-33 | pg |
| CHCM | MCHC | 32-36 | g/dL |
| ADE (Ancho Dist. Eritr.) | RDW | 11.5-14.5 | % |

### Serie blanca (leucocitaria) | White cell series
| Celula | Porcentaje normal | Absoluto (x10^9/L) |
|--------|-------------------|-------------------|
| Neutrofilos | 55-70% | 2.5-7.5 |
| Linfocitos | 20-40% | 1.0-4.0 |
| Monocitos | 2-8% | 0.2-0.8 |
| Eosinofilos | 1-4% | 0.04-0.4 |
| Basofilos | 0-1% | 0-0.1 |

### Plaquetas | Platelets
- Normal: 150,000-400,000/uL (150-400 x10^9/L)
- **Trombocitopenia**: plaquetas bajas (<150 x10^9/L)
- **Trombocitosis**: plaquetas altas (>400 x10^9/L)

## Valores criticos que requieren accion inmediata | Critical values

| Prueba | Critico bajo | Critico alto | Accion |
|--------|-------------|-------------|--------|
| Hemoglobina | <7 g/dL | >20 g/dL | Considerar transfusion / evaluar policitemia |
| Leucocitos | <2.0 x10^9/L | >30 x10^9/L | Precauciones de infeccion / descartar leucemia |
| Plaquetas | <50 x10^9/L | >1,000 x10^9/L | Precauciones de sangrado / evaluar neoplasia |
| Neutrofilos (ANC) | <0.5 x10^9/L | - | Neutropenia severa: aislamiento, antibioticos |

## Causas comunes de alteraciones | Common abnormalities

**Hemoglobina baja (anemia):**
- Deficiencia de hierro (la mas comun) | Iron deficiency (most common)
- Sangrado cronico | Chronic bleeding
- Deficiencia de vitamina B12 o acido folico | B12 or folate deficiency
- Enfermedad cronica | Chronic disease

**Leucocitos altos (leucocitosis):**
- Infeccion bacteriana (mas comun) | Bacterial infection (most common)
- Estres, ejercicio, medicamentos | Stress, exercise, medications
- Enfermedades de la sangre | Blood disorders

**Plaquetas bajas (trombocitopenia):**
- Medicamentos | Medications
- Infecciones virales | Viral infections
- Enfermedades autoinmunes | Autoimmune diseases`,
      keyTerms: [
        {
          term: 'leucocitosis | leukocytosis',
          definition:
            'Elevacion de globulos blancos por encima de 11,000/uL, usualmente indica infeccion o inflamacion | Elevated white blood cells above 11,000/uL, usually indicates infection or inflammation',
          pronunciation: 'leu-ko-si-TO-sis',
        },
        {
          term: 'trombocitopenia | thrombocytopenia',
          definition:
            'Plaquetas por debajo de 150,000/uL; aumenta el riesgo de sangrado | Platelets below 150,000/uL; increases bleeding risk',
          pronunciation: 'trom-bo-si-to-PE-nia',
        },
        {
          term: 'hematocrito | hematocrit',
          definition:
            'Porcentaje del volumen sanguineo ocupado por globulos rojos | Percentage of blood volume occupied by red blood cells',
          pronunciation: 'e-ma-to-KRI-to',
        },
        {
          term: 'VCM / MCV (volumen corpuscular medio)',
          definition:
            'Tamano promedio de los globulos rojos; ayuda a clasificar el tipo de anemia | Average red blood cell size; helps classify anemia type',
        },
      ],
      analogies: [
        'El VCM clasifica tus globulos rojos como tallas de ropa: microciticos (pequenos), normociticos (medianos), macrociticos (grandes). Cada talla apunta a causas diferentes. | MCV classifies your red cells like clothing sizes: microcytic (small), normocytic (medium), macrocytic (large). Each size points to different causes.',
      ],
      examples: [
        'Una mujer con periodos abundantes tiene Hgb 9 g/dL, VCM 72 fL, ferritina baja: anemia microcitica por deficiencia de hierro. | A woman with heavy periods has Hgb 9 g/dL, MCV 72 fL, low ferritin: microcytic anemia from iron deficiency.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La interpretacion sistematica del hemograma integra indices eritrocitarios, diferencial leucocitario y parametros plaquetarios para guiar el diagnostico diferencial. El VCM clasifica las anemias y el ADE discrimina entre etiologias. | Systematic CBC interpretation integrates red cell indices, WBC differential, and platelet parameters to guide differential diagnosis. MCV classifies anemias and RDW discriminates etiologies.',
      explanation: `# Hemograma Completo - Interpretacion Clinica | CBC - Clinical Interpretation

## Algoritmo de interpretacion de la anemia | Anemia Interpretation Algorithm

### Paso 1: Confirmar anemia | Confirm anemia
- Hombres: Hgb <14 g/dL (WHO) o <13.5 g/dL
- Mujeres: Hgb <12 g/dL
- Embarazo: Hgb <11 g/dL

### Paso 2: Clasificar por VCM | Classify by MCV

**Anemia microcitica (VCM <80 fL):**
| Diagnostico | Hierro serico | TIBC | Ferritina | ADE/RDW |
|-------------|--------------|------|-----------|---------|
| Deficiencia de hierro | Bajo | Alto | Bajo (<30) | Alto |
| Talasemia menor | Normal | Normal | Normal | Normal |
| Enfermedad cronica | Bajo | Bajo/N | Normal/Alto | Normal |
| Sideroblastica | Alto | Normal | Alto | Alto |

*Indice de Mentzer (VCM/GR): <13 sugiere talasemia, >13 sugiere deficiencia de hierro*

**Anemia normocitica (VCM 80-100 fL):**
- Sangrado agudo | Acute blood loss
- Hemolisis (verificar LDH, haptoglobina, bilirrubina indirecta, reticulocitos)
- Anemia de enfermedad cronica | Anemia of chronic disease
- Enfermedad renal cronica (EPO disminuida) | CKD (decreased EPO)
- Deficiencia mixta (hierro + B12) | Mixed deficiency

**Anemia macrocitica (VCM >100 fL):**
- *Megaloblastica*: deficiencia de B12 o folato (neutrofilos hipersegmentados)
- *No megaloblastica*: enfermedad hepatica, hipotiroidismo, MDS, alcohol, farmacos

### Paso 3: Evaluar reticulocitos | Evaluate reticulocyte count
- Indice reticulocitario >2%: respuesta medular adecuada (sangrado/hemolisis)
- Indice reticulocitario <2%: produccion inadecuada (deficiencia, supresion medular)

## Diferencial leucocitario - Patrones diagnosticos | WBC Differential Patterns

| Patron | Hallazgo | Causas principales |
|--------|----------|-------------------|
| Neutrofilia con desviacion izquierda | Bandas >6%, mielocitos | Infeccion bacteriana aguda, sepsis |
| Linfocitosis | Linfocitos >40% o >4 x10^9/L | Infeccion viral (EBV, CMV), LLC |
| Eosinofilia | Eosinofilos >0.5 x10^9/L | Parasitos, alergias, farmacos, linfoma |
| Monocitosis | Monocitos >1.0 x10^9/L | TB, endocarditis, LMMC |
| Pancitopenia | Tres lineas bajas | Aplasia medular, MDS, infiltracion, B12 |

## Valores de referencia completos (adultos) | Complete reference ranges

| Parametro | Convencional | SI | Critico bajo | Critico alto |
|-----------|-------------|-----|-------------|-------------|
| Hemoglobina (H) | 14-18 g/dL | 140-180 g/L | <7 g/dL | >20 g/dL |
| Hemoglobina (M) | 12-16 g/dL | 120-160 g/L | <7 g/dL | >20 g/dL |
| Leucocitos | 4,500-11,000/uL | 4.5-11.0 x10^9/L | <2,000/uL | >30,000/uL |
| Plaquetas | 150-400 K/uL | 150-400 x10^9/L | <50 K/uL | >1,000 K/uL |
| Hematocrito (H) | 40-54% | 0.40-0.54 | <21% | >65% |
| Hematocrito (M) | 36-48% | 0.36-0.48 | <21% | >65% |
| VCM | 80-100 fL | 80-100 fL | - | - |
| ADE (RDW) | 11.5-14.5% | 11.5-14.5% | - | - |
| Reticulocitos | 0.5-2.5% | 0.005-0.025 | - | - |

## Evaluacion de plaquetas | Platelet evaluation
- **Pseudotrombocitopenia**: descartar siempre con frotis periferico (aglutinacion por EDTA)
- Repetir con tubo de citrato si se sospecha aglutinacion
- VPM (MPV) alto + plaquetas bajas = destruccion periferica (PTI)
- VPM bajo + plaquetas bajas = fallo de produccion`,
      keyTerms: [
        {
          term: 'desviacion a la izquierda | left shift',
          definition:
            'Aumento de neutrofilos inmaduros (bandas, metamielocitos) en sangre periferica, indicando respuesta aguda a infeccion | Increase of immature neutrophils in peripheral blood, indicating acute infection response',
        },
        {
          term: 'indice reticulocitario | reticulocyte index',
          definition:
            'Reticulocitos corregidos por grado de anemia; >2% indica respuesta medular adecuada | Reticulocyte count corrected for degree of anemia; >2% indicates adequate marrow response',
        },
        {
          term: 'pancitopenia | pancytopenia',
          definition:
            'Disminucion simultanea de las tres lineas celulares: eritrocitos, leucocitos y plaquetas | Simultaneous decrease of all three cell lines: red cells, white cells, and platelets',
        },
        {
          term: 'ADE / RDW (ancho de distribucion eritrocitaria)',
          definition:
            'Medida de la variacion en el tamano de los globulos rojos; alto en deficiencia de hierro, normal en talasemia | Measure of red cell size variation; elevated in iron deficiency, normal in thalassemia trait',
        },
        {
          term: 'pseudotrombocitopenia | pseudothrombocytopenia',
          definition:
            'Conteo de plaquetas falsamente bajo por aglutinacion in vitro (usualmente por EDTA) | Falsely low platelet count due to in vitro clumping (usually from EDTA)',
        },
      ],
      clinicalNotes:
        'Siempre interpretar el hemograma en contexto clinico. Un VCM normal no descarta anemia mixta (deficiencia combinada de hierro y B12). El ADE elevado con VCM normal sugiere deficiencias combinadas. | Always interpret the CBC in clinical context. A normal MCV does not rule out mixed anemia. Elevated RDW with normal MCV suggests combined deficiencies.',
    },

    4: {
      level: 4,
      summary:
        'El analisis avanzado del hemograma integra parametros automatizados de reticulocitos, morfologia del frotis periferico, cinetica de leucocitos y pruebas funcionales plaquetarias para diagnostico preciso. Se distingue entre reacciones reactivas y trastornos clonales hematologicos. | Advanced CBC analysis integrates automated reticulocyte parameters, peripheral smear morphology, leukocyte kinetics, and platelet functional assays for precise diagnosis, distinguishing reactive from clonal hematologic disorders.',
      explanation: `# Hemograma Completo - Analisis Avanzado | CBC - Advanced Analysis

## Parametros avanzados del reticulocito | Advanced reticulocyte parameters

| Parametro | Valor normal | Significado clinico |
|-----------|-------------|-------------------|
| CHr (Hgb reticulocitaria) | >28 pg | <28 pg = eritropoyesis ferropenica |
| IRF (fraccion inmadura) | 2-17% | Elevada en hemolisis, respuesta a EPO |
| %HIPO (celulas hipocromicas) | <5% | >5% = deficiencia funcional de hierro |

## Cinetica leucocitaria | Leukocyte kinetics

**Pools de neutrofilos:**
1. Reserva medular (5-7 dias de neutrofilos maduros)
2. Pool circulante (medido por el hemograma)
3. Pool marginado (adherido a endotelio, no medido)
4. Pool tisular (migrado a tejidos)

**Respuesta temporal:**
- Estres/esteroides: demarginacion en minutos (neutrofilia sin desviacion izquierda)
- Infeccion aguda: liberacion medular en 6-12 horas (con desviacion izquierda)
- Demanda sostenida: aparicion de formas inmaduras (metamielocitos, mielocitos)

## Diferenciacion reactivo vs. maligno | Reactive vs. malignant differentiation

| Caracteristica | Reactivo (leucemoide) | Maligno (leucemia) |
|---------------|----------------------|-------------------|
| Tendencia de leucocitos | Pico y resolucion | Aumento progresivo |
| Cambios toxicos | Presentes | Usualmente ausentes |
| Basofilia | Rara | Comun en LMC |
| Score LAP/NAP | Elevado | Bajo en LMC |
| Blastos | Ninguno o raros | Variables (pueden estar) |
| Hiato leucemico | Ausente | Presente en leucemias agudas |

## Patrones morfologicos del frotis periferico | Peripheral smear morphologic patterns

**Hallazgos eritrocitarios diagnosticos:**
- **Esquistocitos**: microangiopatia (PTT/SHU, CID, valvulas protesicas)
- **Esferocitos**: esferocitosis hereditaria, AHAI
- **Drepanocitos (celulas falciformes)**: anemia falciforme
- **Celulas diana (target cells)**: talasemia, hepatopatia, hemoglobinopatia C
- **Dacriocitos (lagrima)**: mielofibrosis, infiltracion medular
- **Cuerpos de Howell-Jolly**: asplenia funcional/anatomica

**Hallazgos leucocitarios diagnosticos:**
- **Granulaciones toxicas**: infeccion severa
- **Cuerpos de Dohle**: infeccion, quemaduras
- **Anomalia de Pelger-Huet (adquirida)**: MDS
- **Linfocitos atipicos**: EBV/CMV (mononucleosis)
- **Celulas de Sezary**: linfoma cutaneo de celulas T

## Farmacos y cambios en el hemograma | Drug-induced CBC changes

| Farmaco | Efecto | Mecanismo |
|---------|--------|-----------|
| Corticosteroides | Leucocitosis, neutrofilia | Demarginacion, apoptosis retardada |
| G-CSF/filgrastim | Neutrofilia marcada | Estimula produccion |
| Quimioterapia | Pancitopenia | Mielosupresion |
| Heparina | Trombocitopenia (HIT) | Anticuerpos anti-PF4 |
| Clozapina | Agranulocitosis | Reaccion idiosincrasica |
| Metotrexato | Macrocitosis, pancitopenia | Antagonista del folato |

## Indicaciones de citometria de flujo | Flow cytometry indications
- Leucocitos >30 x10^9/L sin causa reactiva clara
- Linfocitosis persistente (>3 meses)
- Blastos identificados en frotis
- Sospecha de leucemia linfocitica cronica
- Citopenias inexplicadas persistentes`,
      keyTerms: [
        {
          term: 'reaccion leucemoide | leukemoid reaction',
          definition:
            'Leucocitosis extrema (>50 x10^9/L) de causa reactiva que simula leucemia; diferenciada por ausencia de blastos y presencia de cambios toxicos | Extreme reactive leukocytosis (>50 x10^9/L) mimicking leukemia; differentiated by absence of blasts and presence of toxic changes',
        },
        {
          term: 'demarginacion | demargination',
          definition:
            'Liberacion de neutrofilos del pool marginado al circulante por estres o esteroides; ocurre en minutos | Release of neutrophils from the marginated pool into circulation due to stress or steroids; occurs within minutes',
        },
        {
          term: 'hiato leucemico | leukemic hiatus',
          definition:
            'Presencia de blastos y celulas maduras sin formas intermedias en la leucemia aguda; no se observa en reacciones reactivas | Presence of blasts and mature cells without intermediate forms in acute leukemia; not seen in reactive conditions',
        },
        {
          term: 'esquistocitos | schistocytes',
          definition:
            'Fragmentos de globulos rojos por dano mecanico; hallazgo clave en microangiopatias tromboticas (PTT, SHU, CID) | Red blood cell fragments from mechanical damage; key finding in thrombotic microangiopathies (TTP, HUS, DIC)',
        },
        {
          term: 'hemoglobina reticulocitaria (CHr) | reticulocyte hemoglobin',
          definition:
            'Contenido de hemoglobina en reticulocitos; marcador temprano de eritropoyesis ferropenica, util cuando la ferritina no es confiable | Hemoglobin content of reticulocytes; early marker of iron-restricted erythropoiesis, useful when ferritin is unreliable',
        },
      ],
      clinicalNotes:
        'En pacientes con estados inflamatorios, la ferritina puede estar falsamente elevada a pesar de deficiencia real de hierro. La CHr (hemoglobina reticulocitaria) y el receptor soluble de transferrina (sTfR) son marcadores superiores en este contexto. El cociente sTfR/log ferritina >2 indica deficiencia de hierro superpuesta a enfermedad cronica. | In inflammatory states, ferritin may be falsely elevated despite true iron deficiency. CHr and soluble transferrin receptor (sTfR) are superior markers in this context. sTfR/log ferritin ratio >2 indicates iron deficiency superimposed on chronic disease.',
    },

    5: {
      level: 5,
      summary:
        'La interpretacion experta del hemograma integra diagnosticos moleculares, estratificacion de riesgo, parametros de enfermedad residual minima y patrones de reconocimiento complejos para neoplasias hematologicas, citopenias clonales y enfermedades hereditarias de celulas sanguineas. | Expert CBC interpretation integrates molecular diagnostics, risk stratification, minimal residual disease parameters, and complex pattern recognition for hematologic malignancies, clonal cytopenias, and inherited blood cell disorders.',
      explanation: `# Hemograma Completo - Nivel Experto | CBC - Expert Level

## Diagnosticos moleculares en alteraciones del hemograma | Molecular diagnostics in CBC abnormalities

### Neoplasias mieloproliferativas (NMP) | Myeloproliferative neoplasms

| Prueba molecular | Enfermedad | Significado |
|-----------------|------------|-------------|
| BCR-ABL1 | LMC | Diagnostico; monitoreo de respuesta a TKI |
| JAK2 V617F | PV, TE, MF | Diagnostico; presente en 95% PV, 50-60% TE/MF |
| CALR (exon 9) | TE, MF | Alternativa a JAK2; mejor pronostico |
| MPL W515L/K | TE, MF | 3-5% de TE/MF JAK2-negativa |
| CSF3R | Leucemia neutrofilica cronica | Diagnostico |

### Leucemias agudas - Estratificacion ELN 2022 (LMA) | AML risk stratification

| Riesgo | Alteraciones | Implicacion terapeutica |
|--------|-------------|----------------------|
| Favorable | t(8;21), inv(16), NPM1 sin FLT3-ITD | Quimioterapia sola puede ser suficiente |
| Intermedio | Cariotipo normal con mutaciones intermedias | Considerar trasplante en RC1 segun MRD |
| Adverso | Cariotipo complejo, TP53, ASXL1, RUNX1 | Trasplante alogénico en RC1, terapia dirigida |

### LLC - Indice pronostico CLL-IPI | CLL prognostic index

Integra: estado mutacional IGHV, TP53, beta-2 microglobulina, estadio clinico, edad
- Bajo riesgo: IGHV mutado, sin del(17p)/TP53
- Alto riesgo: IGHV no mutado, del(17p)/mutacion TP53

## Hematopoyesis clonal de potencial indeterminado (CHIP) | Clonal hematopoiesis of indeterminate potential

- Mutaciones somaticas clonales en sangre sin neoplasia hematologica manifiesta
- Prevalencia aumenta con la edad (10-20% en >65 anos)
- Mutaciones comunes: DNMT3A, TET2, ASXL1, JAK2, TP53
- Riesgo aumentado de: MDS/LMA (0.5-1%/ano), enfermedad cardiovascular (2x), mortalidad total
- Manejo: seguimiento con hemograma semestral, control de factores cardiovasculares

## Enfermedad residual minima (ERM/MRD) | Minimal residual disease

| Metodo | Sensibilidad | Aplicacion |
|--------|-------------|-----------|
| Citometria de flujo multiparametrica | 10^-4 | LMA, LLA, mieloma |
| PCR cuantitativa (qPCR) | 10^-5 a 10^-6 | LMC (BCR-ABL), LPA (PML-RARA) |
| Secuenciacion de nueva generacion (NGS) | 10^-5 a 10^-6 | LLA, LLC, LMA |

## Patrones complejos de reconocimiento | Complex pattern recognition

**1. Reaccion leucoeritroblastica:**
- GR nucleados + formas inmaduras leucocitarias en sangre periferica
- Causas: mielofibrosis, metastasis oseas, hemolisis severa, infeccion grave
- Siempre requiere biopsia de medula osea

**2. Microangiopatia trombotica - Algoritmo diagnostico:**
- Esquistocitos + trombocitopenia + anemia hemolitica (LDH alto, haptoglobina baja)
- ADAMTS13 <10%: PTT (plasmaferesis urgente)
- ADAMTS13 normal + diarrea sanguinolenta: SHU tipico (STEC)
- ADAMTS13 normal + complemento anormal: SHU atipico (eculizumab)
- Coagulacion anormal (PT/PTT prolongados): CID

**3. Bicitopenia/Pancitopenia con blastos circulantes:**
- MDS vs LMA: blastos <20% = MDS, >=20% = LMA (clasificacion OMS/ICC)
- Buscar displasia multilinaje, sideroblastos en anillo
- Cariotipo y panel mutacional obligatorios

**4. Eosinofilia marcada persistente (>1.5 x10^9/L):**
- Evaluar rearreglos PDGFRA/PDGFRB (responden dramaticamente a imatinib)
- Descartar: parasitosis, vasculitis, neoplasia, farmacos
- Sindrome hipereosinofilico si no se encuentra causa

## Valores de referencia completos con unidades SI | Complete reference ranges with SI units

| Parametro | Convencional | SI | Factor conversion |
|-----------|-------------|-----|------------------|
| Hemoglobina | g/dL | g/L | x10 |
| Hematocrito | % | L/L | x0.01 |
| Eritrocitos | millones/uL | x10^12/L | x1 |
| Leucocitos | /uL | x10^9/L | x0.001 |
| Plaquetas | K/uL | x10^9/L | x1 |
| VCM | fL | fL | x1 |
| HCM | pg | pg | x1 |
| CHCM | g/dL | g/L | x10 |

## Perlas clinicas avanzadas | Advanced clinical pearls

1. **Monocitosis aislada persistente** (>1.0 x10^9/L, >3 meses): considerar LMMC; requiere medula osea y citogenetica
2. **Linfocitosis persistente con celulas fragmentadas (smudge cells)**: caracteristico de LLC; confirmar con citometria (CD5+, CD19+, CD23+)
3. **Trombocitosis extrema post-esplenectomia**: tipicamente transitoria; vigilar eventos tromboticos
4. **Macrocitosis aislada sin anemia**: pensar en hipotiroidismo, hepatopatia, alcohol, farmacos (hidroxiurea, metotrexato) antes de buscar MDS
5. **Neutropenia etnica benigna**: prevalente en afrodescendientes (ANC 1.0-1.5 x10^9/L sin infecciones); no requiere tratamiento`,
      keyTerms: [
        {
          term: 'CHIP (hematopoyesis clonal de potencial indeterminado) | clonal hematopoiesis of indeterminate potential',
          definition:
            'Mutaciones somaticas clonales en celulas sanguineas sin criterios de neoplasia hematologica; asociada a mayor riesgo de MDS/LMA y enfermedad cardiovascular | Somatic clonal mutations in blood cells without hematologic malignancy criteria; associated with increased MDS/AML and cardiovascular risk',
        },
        {
          term: 'enfermedad residual minima (ERM/MRD)',
          definition:
            'Deteccion de celulas malignas residuales por debajo del umbral de microscopia convencional; marcador pronostico importante en leucemias y mieloma | Detection of residual malignant cells below conventional microscopy threshold; important prognostic marker in leukemia and myeloma',
        },
        {
          term: 'reaccion leucoeritroblastica | leukoerythroblastic reaction',
          definition:
            'Presencia simultanea de eritrocitos nucleados y celulas mieloides inmaduras en sangre periferica; indica estres medular severo o infiltracion | Simultaneous presence of nucleated RBCs and immature myeloid cells in peripheral blood; indicates severe marrow stress or infiltration',
        },
        {
          term: 'estratificacion ELN | ELN risk stratification',
          definition:
            'Sistema de clasificacion de riesgo de la European LeukemiaNet para LMA basado en alteraciones citogeneticas y moleculares; guia las decisiones terapeuticas | European LeukemiaNet risk classification for AML based on cytogenetic and molecular abnormalities; guides treatment decisions',
        },
        {
          term: 'inmunofenotipificacion | immunophenotyping',
          definition:
            'Analisis por citometria de flujo de marcadores celulares de superficie e intracelulares para diagnostico y clasificacion de neoplasias hematologicas | Flow cytometry analysis of surface and intracellular cell markers for diagnosis and classification of hematologic malignancies',
        },
      ],
      clinicalNotes:
        'En la era de la terapia dirigida, la caracterizacion molecular precisa es esencial. LMC BCR-ABL+, eosinofilia con rearreglo PDGFR, y LMA FLT3+ tienen tratamientos especificos dirigidos. La ERM post-tratamiento predice recaida y guia la intensificacion o desescalamiento terapeutico. Siempre considerar pruebas moleculares ante citopenias o citosis inexplicadas. | In the era of targeted therapy, precise molecular characterization is essential. BCR-ABL+ CML, PDGFR-rearranged eosinophilia, and FLT3+ AML all have specific targeted treatments. Post-treatment MRD predicts relapse and guides therapeutic intensification or de-escalation. Always consider molecular testing in unexplained cytopenias or cytoses.',
    },
  },

  media: [],

  citations: [
    {
      id: 'williams-hematology-10e',
      type: 'textbook',
      title: 'Williams Hematology',
      authors: ['Kaushansky, K.', 'Lichtman, M.A.', 'Prchal, J.T.'],
      source: 'McGraw-Hill Education, 10th Edition',
      chapter: 'Examination of Blood Cells',
    },
    {
      id: 'hoffbrand-essential-haematology-8e',
      type: 'textbook',
      title: "Hoffbrand's Essential Haematology",
      authors: ['Hoffbrand, A.V.', 'Steensma, D.P.'],
      source: 'Wiley-Blackwell, 8th Edition',
    },
    {
      id: 'who-classification-haem-2022',
      type: 'guideline',
      title: 'WHO Classification of Haematolymphoid Tumours, 5th Edition',
      authors: ['WHO Classification of Tumours Editorial Board'],
      source: 'International Agency for Research on Cancer (IARC)',
      url: 'https://tumourclassification.iarc.who.int/',
    },
    {
      id: 'henry-clinical-diagnosis-24e',
      type: 'textbook',
      title: "Henry's Clinical Diagnosis and Management by Laboratory Methods",
      authors: ['McPherson, R.A.', 'Pincus, M.R.'],
      source: 'Elsevier, 24th Edition',
      chapter: 'Basic Examination of Blood and Bone Marrow',
    },
  ],

  crossReferences: [
    {
      targetId: 'lab-wbc',
      targetType: 'concept',
      relationship: 'child',
      label: 'Conteo de leucocitos | White Blood Cell Count',
    },
    {
      targetId: 'lab-hemoglobin',
      targetType: 'concept',
      relationship: 'child',
      label: 'Hemoglobina | Hemoglobin',
    },
    {
      targetId: 'lab-platelet',
      targetType: 'concept',
      relationship: 'child',
      label: 'Conteo de plaquetas | Platelet Count',
    },
    {
      targetId: 'lab-mcv',
      targetType: 'concept',
      relationship: 'child',
      label: 'Volumen corpuscular medio | Mean Corpuscular Volume',
    },
    {
      targetId: 'lab-iron-studies',
      targetType: 'concept',
      relationship: 'related',
      label: 'Estudios de hierro | Iron Studies',
    },
    {
      targetId: 'lab-reticulocyte',
      targetType: 'concept',
      relationship: 'related',
      label: 'Reticulocitos | Reticulocyte Count',
    },
    {
      targetId: 'condition-anemia',
      targetType: 'condition',
      relationship: 'see-also',
      label: 'Anemia',
    },
    {
      targetId: 'system-hematologic',
      targetType: 'system',
      relationship: 'parent',
      label: 'Sistema hematologico | Hematologic System',
    },
  ],

  tags: {
    systems: ['hematologico', 'inmunologico'],
    topics: ['laboratorio', 'hematologia', 'diagnostico', 'anemia', 'leucocitos', 'plaquetas'],
    keywords: [
      'hemograma',
      'CBC',
      'biometria hematica',
      'conteo sanguineo',
      'anemia',
      'leucocitosis',
      'trombocitopenia',
      'frotis periferico',
      'indices eritrocitarios',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics', 'surgery', 'family-medicine'],
    },
  },

  createdAt: '2025-06-01T00:00:00.000Z',
  updatedAt: '2025-06-01T00:00:00.000Z',
  version: 1,
  status: 'published',
};
