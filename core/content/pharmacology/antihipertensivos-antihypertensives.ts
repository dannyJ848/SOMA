/**
 * Antihipertensivos / Antihypertensives - Comprehensive Educational Content
 *
 * Covers major antihypertensive classes: ACE inhibitors, ARBs, calcium channel
 * blockers, beta-blockers, and diuretics. Spanish-first with English translations.
 */

import { EducationalContent } from '../types';

export const antihipertensivosAntihypertensives: EducationalContent = {
  id: 'pharmacology-antihipertensivos-antihypertensives',
  type: 'topic',
  name: 'Antihipertensivos | Antihypertensives',
  nameEs: 'Antihipertensivos',
  alternateNames: [
    'Medicamentos para la presion alta | Blood pressure medications',
    'Antihipertensores | Antihypertensive agents',
    'Terapia antihipertensiva | Antihypertensive therapy',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Los antihipertensivos son medicamentos que ayudan a bajar la presion arterial alta para proteger su corazon, cerebro y rinones. | Antihypertensives are medications that help lower high blood pressure to protect your heart, brain, and kidneys.',
      explanation: `## Que es la presion arterial alta? | What is high blood pressure?

La presion arterial es la fuerza que la sangre ejerce contra las paredes de sus arterias. Cuando esta fuerza es demasiado alta todo el tiempo, se llama hipertension. | Blood pressure is the force blood exerts against your artery walls. When this force is too high all the time, it is called hypertension.

**Numeros importantes | Important numbers:**
- Normal: menos de 120/80 | Normal: less than 120/80
- Elevada: 120-129/menos de 80 | Elevated: 120-129/less than 80
- Alta (Etapa 1): 130-139/80-89 | High (Stage 1): 130-139/80-89
- Alta (Etapa 2): 140 o mas/90 o mas | High (Stage 2): 140 or more/90 or more

### Tipos de medicamentos | Types of medications

**1. Inhibidores de la ECA | ACE Inhibitors**
- Nombres que terminan en "-pril": lisinopril, enalapril, ramipril
- Relajan los vasos sanguineos para que la sangre fluya mas facil | Relax blood vessels so blood flows more easily
- Efecto secundario comun: tos seca | Common side effect: dry cough
- Muy buenos para personas con diabetes o problemas del corazon | Very good for people with diabetes or heart problems

**2. Bloqueadores de receptores de angiotensina (BRA) | ARBs**
- Nombres que terminan en "-sartan": losartan, valsartan, irbesartan
- Funcionan de manera similar a los inhibidores de ECA | Work similarly to ACE inhibitors
- No causan tos seca (buena alternativa) | Do not cause dry cough (good alternative)

**3. Bloqueadores de canales de calcio | Calcium Channel Blockers**
- Amlodipino, nifedipino, diltiazem
- Relajan los vasos sanguineos al bloquear el calcio | Relax blood vessels by blocking calcium
- Pueden causar hinchazon de los tobillos | Can cause ankle swelling

**4. Betabloqueadores | Beta-blockers**
- Nombres que terminan en "-olol": metoprolol, atenolol, propranolol
- Hacen que el corazon lata mas lento y con menos fuerza | Make the heart beat slower and with less force
- Buenos para personas que tambien tienen problemas del ritmo cardiaco | Good for people who also have heart rhythm problems

**5. Diureticos (pastillas de agua) | Diuretics (water pills)**
- Hidroclorotiazida, clortalidona, furosemida
- Ayudan a sus rinones a eliminar sal y agua extra | Help your kidneys get rid of extra salt and water
- Puede necesitar ir al bano mas seguido | May need to use the bathroom more often

### Consejos importantes | Important tips
- **Tomelos TODOS los dias** aunque se sienta bien | **Take them EVERY day** even if you feel fine
- La presion alta casi nunca causa sintomas hasta que es muy tarde | High blood pressure almost never causes symptoms until it's too late
- **No los deje de tomar** sin hablar con su doctor | **Do not stop taking them** without talking to your doctor
- Mida su presion en casa regularmente | Check your blood pressure at home regularly`,
      keyTerms: [
        {
          term: 'presion arterial | blood pressure',
          definition:
            'La fuerza de la sangre contra las paredes de las arterias | The force of blood against artery walls',
        },
        {
          term: 'hipertension | hypertension',
          definition:
            'Presion arterial alta; cuando los numeros son 130/80 o mas | High blood pressure; when numbers are 130/80 or higher',
        },
        {
          term: 'diuretico | diuretic',
          definition:
            'Medicamento que ayuda al cuerpo a eliminar agua y sal extra | Medication that helps the body get rid of extra water and salt',
        },
        {
          term: 'arterias | arteries',
          definition:
            'Tubos que llevan la sangre del corazon al resto del cuerpo | Tubes that carry blood from the heart to the rest of the body',
        },
      ],
      analogies: [
        'La presion arterial alta es como el agua corriendo por una manguera con demasiada fuerza - con el tiempo, la manguera se puede danar. | High blood pressure is like water running through a hose with too much force - over time, the hose can get damaged.',
        'Los inhibidores de ECA y los BRA son como abrir una llave para que la manguera sea mas ancha y el agua fluya con menos presion. | ACE inhibitors and ARBs are like opening a valve so the hose is wider and water flows with less pressure.',
        'Los diureticos son como drenar parte del agua de la manguera para que haya menos presion. | Diuretics are like draining some water from the hose so there is less pressure.',
      ],
      examples: [
        'Su doctor le receta lisinopril 10 mg al dia para su presion alta. Tomelo cada manana con o sin comida. | Your doctor prescribes lisinopril 10 mg daily for your high blood pressure. Take it every morning with or without food.',
        'Si nota que sus tobillos se hinchan con amlodipino, digale a su doctor - no lo deje de tomar por su cuenta. | If you notice your ankles swelling with amlodipine, tell your doctor - do not stop taking it on your own.',
      ],
      patientCounselingPoints: [
        'La hipertension es una enfermedad silenciosa - tome su medicamento aunque se sienta bien | Hypertension is a silent disease - take your medication even if you feel fine',
        'Reduzca el consumo de sal a menos de una cucharadita al dia | Reduce salt intake to less than one teaspoon per day',
        'Si toma diureticos, tomelos por la manana para no tener que levantarse de noche al bano | If taking diuretics, take them in the morning to avoid nighttime bathroom trips',
      ],
    },

    2: {
      level: 2,
      summary:
        'Los antihipertensivos actuan en diferentes puntos del sistema cardiovascular: los inhibidores de ECA/BRA bloquean el sistema renina-angiotensina, los bloqueadores de calcio relajan el musculo liso vascular, los betabloqueadores reducen el gasto cardiaco, y los diureticos disminuyen el volumen sanguineo, con seleccion guiada por comorbilidades y perfil de efectos adversos. | Antihypertensives act at different points in the cardiovascular system: ACE inhibitors/ARBs block the renin-angiotensin system, calcium channel blockers relax vascular smooth muscle, beta-blockers reduce cardiac output, and diuretics decrease blood volume, with selection guided by comorbidities and adverse effect profiles.',
      explanation: `## Clasificacion y mecanismos | Classification and Mechanisms

### Sistema renina-angiotensina-aldosterona (SRAA) | Renin-Angiotensin-Aldosterone System (RAAS)

El SRAA es un sistema hormonal clave que regula la presion arterial: | The RAAS is a key hormonal system regulating blood pressure:

Renina (del rinon) → convierte angiotensinogeno → **angiotensina I** → (ECA) → **angiotensina II** | Renin (from kidney) → converts angiotensinogen → **angiotensin I** → (ACE) → **angiotensin II**

**Angiotensina II causa:** | Angiotensin II causes:
- Vasoconstriccion potente | Potent vasoconstriction
- Liberacion de aldosterona (retencion de sodio y agua) | Aldosterone release (sodium and water retention)
- Estimulacion simpatica | Sympathetic stimulation
- Remodelacion cardiaca y vascular | Cardiac and vascular remodeling

### Inhibidores de la ECA | ACE Inhibitors

| Farmaco | Dosis habitual | Vida media | Notas |
|---------|---------------|------------|-------|
| Lisinopril | 10-40 mg/dia | 12h | Dosis unica diaria |
| Enalapril | 5-40 mg/dia | 11h | Profarmaco (enalaprilat activo) |
| Ramipril | 2.5-20 mg/dia | 13-17h | Evidencia en post-IM (HOPE) |
| Captopril | 25-150 mg/dia | 2h | Accion rapida, 2-3 veces/dia |

**Efectos adversos | Adverse Effects:**
- Tos seca (10-15%): por acumulacion de bradicinina | Dry cough (10-15%): from bradykinin accumulation
- Angioedema (0.1-0.7%): emergencia, mas comun en afroamericanos | Angioedema: emergency, more common in African Americans
- Hiperkalemia: monitore potasio | Hyperkalemia: monitor potassium
- Insuficiencia renal aguda: en estenosis bilateral de arteria renal | Acute renal failure: in bilateral renal artery stenosis
- **CONTRAINDICADO en embarazo** (teratogenico) | **CONTRAINDICATED in pregnancy** (teratogenic)

### Bloqueadores de receptores de angiotensina (BRA) | ARBs

| Farmaco | Dosis habitual | Notas |
|---------|---------------|-------|
| Losartan | 50-100 mg/dia | Efecto uricosurico |
| Valsartan | 80-320 mg/dia | Evidencia post-IM (VALIANT) |
| Irbesartan | 150-300 mg/dia | Evidencia en nefropatia diabetica |
| Olmesartan | 20-40 mg/dia | Potente reduccion de PA |
| Telmisartan | 40-80 mg/dia | Vida media mas larga (24h) |

- Similar eficacia a inhibidores de ECA | Similar efficacy to ACE inhibitors
- Sin tos (no afectan bradicinina) | No cough (do not affect bradykinin)
- Mismo riesgo de hiperkalemia y angioedema (menor) | Same hyperkalemia risk and angioedema (lower)
- **NO combinar con inhibidores de ECA** (riesgo renal, hiperkalemia - estudio ONTARGET) | **DO NOT combine with ACE inhibitors**

### Bloqueadores de canales de calcio (BCC) | Calcium Channel Blockers (CCBs)

**Dihidropiridinas (vasoselectivas):**

| Farmaco | Dosis | Efecto principal |
|---------|-------|-----------------|
| Amlodipino | 5-10 mg/dia | Vasodilatacion arterial |
| Nifedipino XR | 30-90 mg/dia | Vasodilatacion arterial |
| Felodipino | 5-10 mg/dia | Vasodilatacion arterial |

- Selectivamente vasculares | Selectively vascular
- Edema periferico (tobillo) por vasodilatacion arteriolar precapilar | Peripheral edema from precapillary arteriolar vasodilation
- Taquicardia refleja posible con formulaciones de accion corta | Reflex tachycardia possible with short-acting formulations

**No-dihidropiridinas (cardioselectivas):**

| Farmaco | Dosis | Efecto principal |
|---------|-------|-----------------|
| Diltiazem | 120-360 mg/dia | Frecuencia cardiaca + vasodilatacion |
| Verapamilo | 120-480 mg/dia | Frecuencia cardiaca + vasodilatacion |

- Reducen frecuencia cardiaca y contractilidad | Reduce heart rate and contractility
- Utiles en fibrilacion auricular | Useful in atrial fibrillation
- **NO combinar con betabloqueadores** (riesgo de bloqueo AV) | **DO NOT combine with beta-blockers** (AV block risk)

### Betabloqueadores | Beta-blockers

| Farmaco | Selectividad | Dosis habitual | Notas |
|---------|-------------|---------------|-------|
| Metoprolol succinato | Beta-1 selectivo | 25-200 mg/dia | Insuficiencia cardiaca (MERIT-HF) |
| Atenolol | Beta-1 selectivo | 25-100 mg/dia | Eliminacion renal |
| Propranolol | No selectivo | 40-160 mg/dia | Migrana, temblor, ansiedad |
| Carvedilol | Alfa + beta | 6.25-25 mg BID | IC, vasodilatacion adicional |
| Labetalol | Alfa + beta | 200-800 mg BID | Emergencias hipertensivas, embarazo |
| Nebivolol | Beta-1 selectivo | 5-40 mg/dia | Libera oxido nitrico |

**Efectos adversos comunes | Common Adverse Effects:**
- Bradicardia | Bradycardia
- Fatiga | Fatigue
- Broncoespasmo (no-selectivos en asma) | Bronchospasm (non-selective in asthma)
- Disfuncion erectil | Erectile dysfunction
- Enmascaramiento de hipoglucemia en diabeticos | Masking hypoglycemia in diabetics

### Diureticos | Diuretics

| Tipo | Farmaco | Sitio de accion | Potencia |
|------|---------|-----------------|----------|
| Tiazida | Hidroclorotiazida, clortalidona | Tubulo contorneado distal | Moderada |
| Asa | Furosemida, bumetanida | Asa de Henle ascendente | Alta |
| Ahorrador de K+ | Espironolactona, eplerenona | Tubulo colector | Baja |

**Tiazidas como antihipertensivos:** | Thiazides as antihypertensives:
- Primera linea en muchos pacientes | First-line in many patients
- Clortalidona > hidroclorotiazida (mayor vida media, mejor evidencia) | Chlorthalidone > HCTZ (longer half-life, better evidence)
- Efectos adversos: hipokalemia, hiperuricemia, hiponatremia, hiperglucemia | Adverse effects: hypokalemia, hyperuricemia, hyponatremia, hyperglycemia

## Seleccion segun comorbilidades | Selection by Comorbidities

| Comorbilidad | Preferencia | Razon |
|--------------|-------------|-------|
| Diabetes con proteinuria | IECA o BRA | Nefroproteccion |
| Insuficiencia cardiaca | IECA/BRA + betabloqueador + MRA | Reduccion de mortalidad |
| Post-infarto | Betabloqueador + IECA | Remodelacion, mortalidad |
| Fibrilacion auricular | Betabloqueador o BCC no-DHP | Control de frecuencia |
| Embarazo | Labetalol, nifedipino, metildopa | Seguridad fetal |
| Enfermedad renal cronica | IECA o BRA | Nefroproteccion |
| Afroamericanos | BCC o tiazida (inicial) | Mayor eficacia (ALLHAT) |`,
      keyTerms: [
        {
          term: 'sistema renina-angiotensina-aldosterona (SRAA) | renin-angiotensin-aldosterone system (RAAS)',
          definition:
            'Sistema hormonal que regula presion arterial y balance de sodio/agua; objetivo principal de IECA y BRA | Hormonal system regulating blood pressure and sodium/water balance; primary target of ACEi and ARBs',
        },
        {
          term: 'angiotensina II | angiotensin II',
          definition:
            'Hormona vasoconstrictora potente producida por la ECA; causa retencion de sodio, remodelacion cardiaca, y fibrosis | Potent vasoconstrictor hormone produced by ACE; causes sodium retention, cardiac remodeling, and fibrosis',
        },
        {
          term: 'bradicinina | bradykinin',
          definition:
            'Peptido vasodilatador degradado por la ECA; su acumulacion con IECA causa tos y, raramente, angioedema | Vasodilator peptide degraded by ACE; its accumulation with ACEi causes cough and, rarely, angioedema',
        },
        {
          term: 'dihidropiridina | dihydropyridine',
          definition:
            'Subtipo de BCC que es selectivamente vascular (amlodipino, nifedipino); causa edema perifrerico pero no bradicardia | CCB subtype that is selectively vascular; causes peripheral edema but not bradycardia',
        },
        {
          term: 'selectividad beta-1 | beta-1 selectivity',
          definition:
            'Preferencia por receptores beta-1 (corazon) sobre beta-2 (pulmon, vasos); importante en pacientes con asma | Preference for beta-1 receptors (heart) over beta-2 (lung, vessels); important in asthma patients',
        },
      ],
      analogies: [
        'El SRAA es como un sistema de riego que sube la presion: los IECA/BRA son como cerrar la bomba de riego. | The RAAS is like an irrigation system that raises pressure: ACEi/ARBs are like shutting off the irrigation pump.',
        'Los BCC dihidropiridinicos abren los tubos (vasos) sin tocar el motor (corazon). Los no-DHP tambien ralentizan el motor. | Dihydropyridine CCBs open the pipes (vessels) without touching the motor (heart). Non-DHPs also slow the motor.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La terapia antihipertensiva se basa en la comprension del tono vascular, balance de sodio, y regulacion neurohumoral, con cinco clases principales que actuan en puntos distintos: inhibicion del SRAA (IECA/BRA), bloqueo de canales de calcio tipo L (BCC), antagonismo beta-adrenergico, y reduccion de volumen (diureticos), guiada por fenotipos hemodinamicos, comorbilidades, y evidencia de ensayos clinicos. | Antihypertensive therapy is based on understanding vascular tone, sodium balance, and neurohumoral regulation, with five main classes acting at distinct points: RAAS inhibition (ACEi/ARBs), L-type calcium channel blockade (CCBs), beta-adrenergic antagonism, and volume reduction (diuretics), guided by hemodynamic phenotypes, comorbidities, and clinical trial evidence.',
      explanation: `## Fisiopatologia de la hipertension | Hypertension Pathophysiology

### Determinantes de la presion arterial | Blood Pressure Determinants

**PA = Gasto Cardiaco x Resistencia Vascular Periferica | BP = Cardiac Output x Peripheral Vascular Resistance**

**Gasto Cardiaco (GC) = Frecuencia Cardiaca x Volumen Sistolico | CO = Heart Rate x Stroke Volume**

Antihipertensivos actuan en estos determinantes: | Antihypertensives act on these determinants:
- **Reduccion de GC:** Betabloqueadores (FC y contractilidad), diureticos (precarga) | CO reduction: Beta-blockers, diuretics
- **Reduccion de RVP:** IECA, BRA, BCC dihidropiridinicos, vasodilatadores directos | PVR reduction: ACEi, ARBs, DHP CCBs, direct vasodilators
- **Ambos:** Carvedilol (alfa + beta bloqueo), labetalol | Both: Carvedilol, labetalol

### Hipertension esencial vs. secundaria | Essential vs. Secondary Hypertension

**Esencial (90-95%):** Multifactorial (genetica, dieta, obesidad, edad) | Essential: Multifactorial
**Secundaria (5-10%):** Causa identificable | Secondary: Identifiable cause

| Causa secundaria | Pistas clinicas | Estudio inicial |
|-----------------|-----------------|-----------------|
| Enfermedad renovascular | Soplo abdominal, resistencia a 3+ farmacos | Eco-Doppler renal |
| Aldosteronismo primario | Hipokalemia, resistencia | Relacion aldosterona/renina |
| Feocromocitoma | Episodios de cefalea, sudoracion, palpitaciones | Metanefrinas fraccionadas |
| Coartacion aortica | Pulsos femorales debiles, joven | Ecocardiografia |
| Sindrome de Cushing | Facies lunar, estrias, obesidad central | Cortisol libre urinario 24h |

## Farmacologia detallada por clase | Detailed Class Pharmacology

### IECA: mecanismo molecular | ACEi: Molecular Mechanism
- La ECA (cininasa II) convierte angiotensina I → angiotensina II | ACE converts angiotensin I → angiotensin II
- Tambien degrada bradicinina (vasodilatador) | Also degrades bradykinin (vasodilator)
- Inhibicion → menor Ang II + mayor bradicinina → vasodilatacion, menor aldosterona | Inhibition → less Ang II + more bradykinin → vasodilation, less aldosterone
- Efecto renoprotector: dilatacion de arteriola eferente → menor presion intraglomerular | Renoprotective effect: efferent arteriole dilation → lower intraglomerular pressure
- Creatinina puede subir 30% inicialmente (aceptable y esperado) | Creatinine may rise 30% initially (acceptable and expected)

### BRA: diferencias con IECA | ARBs: Differences from ACEi
- Bloquean el receptor AT1 de angiotensina II (no afectan ECA ni bradicinina) | Block AT1 receptor (do not affect ACE or bradykinin)
- Angiotensina II no bloqueada puede activar receptor AT2 (vasodilatacion, anti-fibrosis) | Unblocked Ang II may activate AT2 receptor (vasodilation, anti-fibrosis)
- Menor incidencia de tos y angioedema | Lower incidence of cough and angioedema
- Escape de aldosterona puede ocurrir con uso cronico (tanto IECA como BRA) | Aldosterone escape can occur with chronic use

### BCC: farmacologia de canales de calcio | CCBs: Calcium Channel Pharmacology

**Canales de calcio tipo L (long-lasting):**
- Abundantes en musculo liso vascular y miocardio | Abundant in vascular smooth muscle and myocardium
- DHP se unen al sitio N (nifedipino) | DHPs bind to N site
- Verapamilo se une al sitio V (poro interno) | Verapamil binds to V site
- Diltiazem se une al sitio D (intermedio) | Diltiazem binds to D site

**Consecuencias farmacologicas | Pharmacological Consequences:**

| Parametro | DHP (amlodipino) | No-DHP (verapamilo) |
|-----------|------------------|---------------------|
| Vasodilatacion | +++ | + |
| Cronotropismo negativo | - | +++ |
| Inotropismo negativo | - | ++ |
| Dromotropismo negativo | - | +++ |
| Edema periferico | +++ | + |

### Betabloqueadores: selectividad y propiedades adicionales | Beta-blockers: Selectivity and Additional Properties

**Generaciones:**
- 1ra: No selectivos (propranolol, timolol) | Non-selective
- 2da: Beta-1 selectivos (metoprolol, atenolol, bisoprolol) | Beta-1 selective
- 3ra: Vasodilatadores (carvedilol: alfa+beta, nebivolol: NO) | Vasodilating

**Mecanismo antihipertensivo (no completamente entendido):**
- Reduccion de gasto cardiaco | CO reduction
- Inhibicion de liberacion de renina (beta-1 yuxtaglomerular) | Renin release inhibition
- Reduccion de tono simpatico central | Central sympathetic tone reduction
- Presynaptic beta-2 blockade (reduces norepinephrine release)

### Diureticos: sitios de accion y efectos | Diuretics: Sites of Action and Effects

**Tiazidas (tubulo distal):**
- Inhiben el cotransportador Na-Cl (NCC) | Inhibit Na-Cl cotransporter (NCC)
- Efecto antihipertensivo: inicialmente por volumen, luego por vasodilatacion (mecanismo no claro) | Antihypertensive effect: initially volume, then vasodilation
- Efectos metabolicos: hipokalemia, hiponatremia, hiperuricemia, hiperglucemia, hipercalcemia | Metabolic effects
- Ineficaces con TFG < 30 mL/min (excepto metolazona) | Ineffective with GFR < 30 mL/min (except metolazone)

**Diureticos de asa (asa de Henle):**
- Inhiben el cotransportador Na-K-2Cl (NKCC2) | Inhibit Na-K-2Cl cotransporter (NKCC2)
- Potentes pero corta duracion (furosemida 6h) | Potent but short duration
- Causan hipocalcemia (opuesto a tiazidas) | Cause hypocalcemia (opposite of thiazides)
- Indicados en IC y ERC con TFG < 30 | Indicated in HF and CKD with GFR < 30

**Ahorradores de potasio:**
- Espironolactona/eplerenona: antagonistas de aldosterona en tubulo colector | Aldosterone antagonists
- Amilorida/triamtereno: bloquean canal de sodio ENaC | Block ENaC sodium channel
- Riesgo de hiperkalemia (especialmente con IECA/BRA) | Hyperkalemia risk

## Terapia combinada y metas | Combination Therapy and Goals

### Combinaciones racionales | Rational Combinations

| Combinacion | Razon |
|-------------|-------|
| IECA/BRA + BCC + tiazida | Triple terapia estandar |
| IECA/BRA + tiazida | Sinergia (SRAA contrarresta activacion por tiazida) |
| IECA/BRA + BCC | Buena tolerabilidad, proteccion renal |
| Betabloqueador + DHP | Si indicacion cardiaca para BB |

**Combinaciones a EVITAR | Combinations to AVOID:**
- IECA + BRA (ONTARGET: mayor riesgo renal sin beneficio) | ACEi + ARB
- BB + verapamilo/diltiazem (bloqueo AV severo) | BB + non-DHP CCB
- IECA/BRA + ahorrador de K+ sin monitoreo estrecho | ACEi/ARB + K-sparing without monitoring

### Metas de presion arterial | Blood Pressure Targets

| Poblacion | Meta (segun ACC/AHA 2017) |
|-----------|---------------------------|
| General | < 130/80 mmHg |
| ≥ 65 anos | < 130 sistolica (si tolera) |
| Diabetes | < 130/80 mmHg |
| ERC | < 130/80 mmHg |
| Alto riesgo CV (SPRINT) | < 120 sistolica (con precaucion) |`,
      keyTerms: [
        {
          term: 'enzima convertidora de angiotensina (ECA) | angiotensin-converting enzyme (ACE)',
          definition:
            'Enzima que convierte angiotensina I en angiotensina II y degrada bradicinina; inhibida por lisinopril, enalapril, etc. | Enzyme converting angiotensin I to angiotensin II and degrading bradykinin; inhibited by lisinopril, enalapril, etc.',
        },
        {
          term: 'receptor AT1 | AT1 receptor',
          definition:
            'Receptor de angiotensina II responsable de vasoconstriccion, retencion de sodio, y remodelacion; bloqueado por los BRA | Angiotensin II receptor responsible for vasoconstriction, sodium retention, and remodeling; blocked by ARBs',
        },
        {
          term: 'canal de calcio tipo L | L-type calcium channel',
          definition:
            'Canal de calcio voltaje-dependiente en musculo liso vascular y miocardio; bloqueado por BCC; media vasoconstriccion y contraccion cardiaca | Voltage-gated calcium channel in vascular smooth muscle and myocardium; blocked by CCBs',
        },
        {
          term: 'cotransportador Na-Cl (NCC) | Na-Cl cotransporter (NCC)',
          definition:
            'Transportador en el tubulo distal del nefron; sitio de accion de diureticos tiazidicos | Transporter in the distal nephron tubule; site of action of thiazide diuretics',
        },
        {
          term: 'hipertension resistente | resistant hypertension',
          definition:
            'PA no controlada a pesar de 3+ antihipertensivos a dosis optimas (incluyendo un diuretico); evaluar causas secundarias | Uncontrolled BP despite 3+ antihypertensives at optimal doses (including a diuretic); evaluate secondary causes',
        },
        {
          term: 'angioedema | angioedema',
          definition:
            'Hinchazon rapida de tejido profundo (labios, lengua, via aerea) potencialmente letal; asociado con IECA por acumulacion de bradicinina | Rapid deep tissue swelling potentially lethal; associated with ACEi due to bradykinin accumulation',
        },
      ],
      clinicalNotes:
        'Al iniciar antihipertensivos, considere: meta de PA < 130/80, comorbilidades guian la seleccion, inicie dos farmacos si PA > 20/10 mmHg sobre la meta. Monitoree creatinina y potasio 1-2 semanas despues de iniciar IECA/BRA. Una elevacion de creatinina de hasta 30% es aceptable y refleja hemodinamica glomerular apropiada. Nunca combine IECA + BRA. Los BCC no-DHP no deben combinarse con betabloqueadores. | When initiating antihypertensives, consider: BP goal < 130/80, comorbidities guide selection, start two drugs if BP > 20/10 mmHg above target. Monitor creatinine and potassium 1-2 weeks after starting ACEi/ARB. A creatinine rise up to 30% is acceptable. Never combine ACEi + ARB. Non-DHP CCBs should not be combined with beta-blockers.',
    },

    4: {
      level: 4,
      summary:
        'El manejo avanzado de la hipertension requiere comprension de fenotipos hemodinamicos, hipertension resistente (incluyendo aldosteronismo como causa frecuente), crisis hipertensivas con lesion de organo blanco, ajuste en poblaciones especiales, y evidencia de ensayos clinicos clave (SPRINT, ALLHAT, ONTARGET) para toma de decisiones clinicas. | Advanced hypertension management requires understanding of hemodynamic phenotypes, resistant hypertension (including aldosteronism as a frequent cause), hypertensive crises with target organ damage, adjustment for special populations, and key clinical trial evidence (SPRINT, ALLHAT, ONTARGET) for clinical decision-making.',
      explanation: `## Fenotipos hemodinamicos | Hemodynamic Phenotypes

### Hipertension por gasto cardiaco elevado vs. resistencia elevada | High CO vs. High Resistance Hypertension

**Hipertension hiperdinamica (joven):**
- GC elevado, RVP normal-baja | High CO, normal-low PVR
- Mediada por tono simpatico | Sympathetically mediated
- Respuesta optima: betabloqueadores | Optimal response: beta-blockers
- Tipico en hipertension juvenil, hipertiroidismo | Typical in juvenile hypertension, hyperthyroidism

**Hipertension por resistencia (mayor edad):**
- GC normal-bajo, RVP elevada | Normal-low CO, high PVR
- Rigidez arterial, disfuncion endotelial | Arterial stiffness, endothelial dysfunction
- Hipertension sistolica aislada | Isolated systolic hypertension
- Respuesta optima: vasodilatadores (BCC, IECA/BRA) + diureticos | Optimal response: vasodilators + diuretics

### Hipertension resistente | Resistant Hypertension

**Definicion:** PA no controlada con ≥ 3 antihipertensivos a dosis optimas (incluyendo diuretico) o PA controlada con ≥ 4 farmacos | Uncontrolled BP on ≥ 3 antihypertensives at optimal doses (including diuretic)

**Evaluacion sistematica | Systematic Evaluation:**
1. Confirmar adherencia (monitoreo ambulatorio de PA, niveles urinarios de farmacos) | Confirm adherence
2. Excluir pseudorresistencia (hipertension de bata blanca) con MAPA 24h | Exclude pseudoresistance with 24h ABPM
3. Evaluar causas secundarias (aldosteronismo primario presente en 15-20%) | Evaluate secondary causes
4. Optimizar diuretico (cambiar a clortalidona, agregar espironolactona) | Optimize diuretic

**Espironolactona como 4to farmaco (PATHWAY-2 trial):**
- Espironolactona 25-50 mg superior a bisoprolol y doxazosina como 4to agente | Spironolactone superior as 4th agent
- Reduccion de PA sistolica: -8.7 mmHg (superior) | SBP reduction: -8.7 mmHg
- Sugiere que el exceso de aldosterona es clave en hipertension resistente | Suggests aldosterone excess is key in resistant hypertension

### Denervacion renal | Renal Denervation

- Ablacion de nervios simpaticos renales via cateter | Catheter-based ablation of renal sympathetic nerves
- SPYRAL HTN-OFF MED, SPYRAL HTN-ON MED: reduccion significativa de PA | Significant BP reduction
- RADIANCE-HTN SOLO: reduccion de PA diurna de 6.3 mmHg | Daytime BP reduction of 6.3 mmHg
- Indicacion emergente para hipertension resistente sin respuesta a farmacos | Emerging indication for drug-resistant hypertension

## Crisis hipertensivas | Hypertensive Crises

### Emergencia vs. urgencia hipertensiva | Emergency vs. Urgency

| Caracteristica | Emergencia | Urgencia |
|---------------|------------|----------|
| PA | Tipicamente > 180/120 | > 180/120 |
| Lesion de organo | Si (activa, aguda) | No |
| Tratamiento | IV, UCI, reduccion gradual | Oral, ajuste ambulatorio |
| Meta inicial | Reducir ≤ 25% en 1h | Reducir en horas-dias |

**Lesiones de organo blanco | Target Organ Damage:**
- Encefalopatia hipertensiva | Hypertensive encephalopathy
- Diseccion aortica (meta PA < 120 sistolica inmediatamente) | Aortic dissection (target SBP < 120 immediately)
- Edema pulmonar agudo | Acute pulmonary edema
- Sindrome coronario agudo | Acute coronary syndrome
- Eclampsia | Eclampsia
- Insuficiencia renal aguda | Acute kidney injury
- ACV isquemico (NO reducir PA agresivamente excepto > 220/120 o si tPA) | Ischemic stroke (do NOT aggressively lower BP)

**Farmacos IV para emergencias | IV Drugs for Emergencies:**

| Farmaco | Mecanismo | Inicio | Indicacion principal |
|---------|-----------|--------|----------------------|
| Nitroprusiato | Vasodilatador directo (NO) | Segundos | Emergencia general (con monitoreo) |
| Nitroglicerina | Venodilatador (NO) | 2-5 min | SCA, edema pulmonar |
| Labetalol IV | Alfa+beta bloqueador | 5-10 min | Eclampsia, general |
| Nicardipino IV | BCC DHP | 5-15 min | ACV, general |
| Esmolol IV | Beta-1 ultra-corto | 1-2 min | Diseccion aortica, perioperatorio |
| Fenoldopam | Agonista dopamina-1 | 5-10 min | IRA con HTA |
| Hidralazina IV | Vasodilatador directo | 10-30 min | Eclampsia |
| Clevidipino | BCC DHP ultra-corto | 1-2 min | Perioperatorio |

## Poblaciones especiales | Special Populations

### Embarazo | Pregnancy

**Farmacos seguros | Safe Drugs:**
- Labetalol (primera linea) | First line
- Nifedipino de liberacion prolongada | Extended-release nifedipine
- Metildopa | Methyldopa

**CONTRAINDICADOS | CONTRAINDICATED:**
- IECA/BRA (teratogenicos: displasia renal, oligohidramnios) | Teratogenic
- Espironolactona (anti-androgenico) | Anti-androgenic
- Atenolol (restriccion de crecimiento) | Growth restriction

### Enfermedad renal cronica | Chronic Kidney Disease
- IECA o BRA como primera linea (renoproteccion) | ACEi or ARB as first line
- Vigilar potasio y creatinina | Monitor potassium and creatinine
- Diureticos de asa si TFG < 30 (tiazidas ineficaces) | Loop diuretics if GFR < 30
- Finerenona (antagonista MR no-esteroideo): FIDELIO-DKD, FIGARO-DKD - beneficio renal y CV en diabetes + ERC | Finerenone: renal and CV benefit in diabetes + CKD

## Evidencia de ensayos clinicos | Clinical Trial Evidence

| Estudio | N | Hallazgo principal |
|---------|---|-------------------|
| SPRINT (2015) | 9,361 | PA < 120 sistolica reduce eventos CV 25% y mortalidad 27% vs < 140 |
| ALLHAT (2002) | 33,357 | Clortalidona no inferior a amlodipino o lisinopril; superior a doxazosina |
| ONTARGET (2008) | 25,620 | Telmisartan no inferior a ramipril; combinacion sin beneficio con mas efectos adversos |
| PATHWAY-2 (2015) | 335 | Espironolactona superior como 4to agente en HTA resistente |
| ACCORD-BP (2010) | 4,733 | PA intensiva < 120 sin beneficio en diabeticos (diferente de SPRINT) |
| HOPE-3 (2016) | 12,705 | Candesartan + HCTZ reduce eventos en riesgo intermedio |`,
      keyTerms: [
        {
          term: 'hipertension resistente | resistant hypertension',
          definition:
            'PA no controlada con 3+ antihipertensivos a dosis optimas incluyendo diuretico, o controlada con 4+ farmacos; aldosteronismo primario presente en 15-20% | Uncontrolled BP on 3+ optimal-dose antihypertensives including diuretic; primary aldosteronism present in 15-20%',
        },
        {
          term: 'SPRINT (Systolic Blood Pressure Intervention Trial)',
          definition:
            'Ensayo clinico que demostro que una meta de PA < 120 sistolica reduce eventos CV 25% y mortalidad 27% en pacientes de alto riesgo no-diabeticos | Trial showing SBP < 120 target reduces CV events 25% and mortality 27% in high-risk non-diabetic patients',
        },
        {
          term: 'emergencia hipertensiva | hypertensive emergency',
          definition:
            'Elevacion severa de PA con evidencia de lesion aguda de organo blanco, requiriendo reduccion IV controlada | Severe BP elevation with evidence of acute target organ damage, requiring controlled IV reduction',
        },
        {
          term: 'denervacion renal | renal denervation',
          definition:
            'Ablacion percutanea de nervios simpaticos renales para tratar hipertension resistente; reduccion de PA de 5-10 mmHg | Percutaneous ablation of renal sympathetic nerves for resistant hypertension; 5-10 mmHg BP reduction',
        },
        {
          term: 'finerenona | finerenone',
          definition:
            'Antagonista no-esteroideo del receptor de mineralocorticoide; beneficio renal y cardiovascular demostrado en diabetes + ERC (FIDELIO, FIGARO) | Non-steroidal MR antagonist; demonstrated renal and CV benefit in diabetes + CKD',
        },
        {
          term: 'MAPA (monitorizacion ambulatoria de presion arterial) | ABPM (ambulatory blood pressure monitoring)',
          definition:
            'Medicion de PA durante 24h en condiciones habituales; gold standard para diagnostico, excluye hipertension de bata blanca | 24h BP measurement under usual conditions; gold standard for diagnosis, excludes white coat hypertension',
        },
      ],
      clinicalNotes:
        'En hipertension resistente, siempre considere aldosteronismo primario (relacion aldosterona/renina como screening). Espironolactona 25-50 mg es el mejor 4to agente (PATHWAY-2). En emergencias hipertensivas, no reduzca la PA mas de 25% en la primera hora (excepto en diseccion aortica). En ACV isquemico, sea conservador con la PA excepto si > 220/120 o candidato a trombolitico. El ensayo SPRINT cambio las metas a < 130/80 para la mayoria de pacientes, pero ACCORD-BP no mostro beneficio en diabeticos, lo cual sigue siendo debatido. | In resistant hypertension, always consider primary aldosteronism. Spironolactone is the best 4th agent. In hypertensive emergencies, do not reduce BP more than 25% in the first hour (except aortic dissection). In ischemic stroke, be conservative with BP. SPRINT changed goals to < 130/80 for most patients.',
    },

    5: {
      level: 5,
      summary:
        'La prescripcion antihipertensiva basada en evidencia integra genomica de la hipertension, fenotipos hemodinamicos individualizados, optimizacion con guias actualizadas (2017 ACC/AHA, 2023 ESH), terapias emergentes (inhibidores de aldosterona sintasa, antagonistas de aminopeptidasa A, ARNI), denervacion renal, y estrategias de salud publica para el control poblacional. | Evidence-based antihypertensive prescribing integrates hypertension genomics, individualized hemodynamic phenotypes, optimization with updated guidelines, emerging therapies (aldosterone synthase inhibitors, aminopeptidase A inhibitors, ARNI), renal denervation, and public health strategies for population-level control.',
      explanation: `## Genomica y mecanismos moleculares | Genomics and Molecular Mechanisms

### Genetica de la hipertension | Hypertension Genetics

**Formas monogenicas | Monogenic Forms:**
- Sindrome de Liddle: mutacion activante de ENaC → hipertension con hipokalemia | Activating ENaC mutation → hypertension with hypokalemia
- Aldosteronismo familiar tipo I (GRA): fusion CYP11B1/CYP11B2 → aldosterona regulada por ACTH | CYP11B1/CYP11B2 fusion → ACTH-regulated aldosterone
- Sindrome de exceso aparente de mineralocorticoides: deficiencia de 11beta-HSD2 | 11beta-HSD2 deficiency
- Tratamiento dirigido segun mecanismo molecular | Targeted treatment based on molecular mechanism

**Variantes comunes (GWAS):**
- > 1,000 loci asociados con PA (meta-analisis de UK Biobank, ICBP) | > 1,000 BP-associated loci
- Genes relevantes: AGT, ACE, ADD1 (aducina), NR3C2 (receptor MR), NPPA (ANP) | Relevant genes
- Scores de riesgo poligenico: prediccion emergente de hipertension y respuesta farmacologica | Polygenic risk scores: emerging prediction
- Farmacogenomica: variantes en ADRB1 (beta-1 receptor) afectan respuesta a betabloqueadores; NEDD4L afecta respuesta a diureticos | Pharmacogenomics: variants affecting drug response

### Senalizacion vascular avanzada | Advanced Vascular Signaling

**Oxido nitrico (NO) y disfuncion endotelial:**
- eNOS produce NO → activacion de guanilato ciclasa soluble (sGC) → cGMP → relajacion | eNOS produces NO → sGC activation → cGMP → relaxation
- Disfuncion endotelial: menor produccion de NO, mayor estres oxidativo | Endothelial dysfunction: reduced NO, increased oxidative stress
- Nebivolol: beta-bloqueador que estimula eNOS | Beta-blocker that stimulates eNOS
- Vericiguat, riociguat: estimuladores de sGC (investigacion en HTA) | sGC stimulators (research in HTN)

**Sistema de endotelina:**
- Endotelina-1 (ET-1): vasoconstrictor mas potente conocido | Most potent known vasoconstrictor
- Receptores ETA (vasoconstriccion) y ETB (vasodilatacion y clearance) | ETA (vasoconstriction) and ETB (vasodilation and clearance)
- Aprocitentan: antagonista dual ET aprobado para HTA resistente (PRECISION trial 2023) | Dual ET antagonist approved for resistant HTN

## Terapias emergentes | Emerging Therapies

### Inhibidores de aldosterona sintasa (CYP11B2) | Aldosterone Synthase Inhibitors

- **Baxdrostat (HALO trial, 2023):** Inhibidor selectivo de CYP11B2 | Selective CYP11B2 inhibitor
  - Reduccion de PA de 20/11 mmHg vs. placebo en HTA resistente | 20/11 mmHg BP reduction vs. placebo in resistant HTN
  - Menos hiperkalemia que espironolactona (no bloquea receptor MR directamente) | Less hyperkalemia than spironolactone
  - Lorundrostat: otro inhibidor de CYP11B2 en Fase III | Another CYP11B2 inhibitor in Phase III
- Ventaja: bloqueo de efectos no-genomicos de aldosterona y reduccion de produccion | Blocks non-genomic aldosterone effects and reduces production

### Inhibidores de aminopeptidasa A cerebral | Brain Aminopeptidase A Inhibitors

- **Firibastat:** Inhibidor de aminopeptidasa A (convierte Ang II → Ang III en el cerebro) | Inhibits brain aminopeptidase A
- Reduce tono simpatico central y liberacion de vasopresina | Reduces central sympathetic tone and vasopressin release
- Ensayos clinicos con resultados modestos; nuevo mecanismo conceptual | Modest clinical trial results; novel conceptual mechanism

### ARNI en hipertension | ARNI in Hypertension

- Sacubitril/valsartan: inhibidor de neprilisina + BRA | Neprilysin inhibitor + ARB
- Eleva peptidos natriureticos (natriuresis, vasodilatacion) | Elevates natriuretic peptides
- PARAMETER trial: superior a olmesartan en PA central en ancianos | Superior to olmesartan for central BP in elderly
- Indicacion actual: insuficiencia cardiaca; potencial en HTA | Current indication: HF; potential in HTN

### Terapia genica y RNA | Gene and RNA Therapy

- **Zilebesiran:** siRNA dirigido contra angiotensinogeno hepatico | siRNA targeting hepatic angiotensinogen
  - KARDIA-1 trial: inyeccion SC unica reduce PA por 6 meses | Single SC injection reduces BP for 6 months
  - Potencial para adherencia perfecta | Potential for perfect adherence
  - Preocupacion: irreversibilidad del efecto | Concern: irreversibility of effect
- CRISPR/Cas9: edicion de PCSK9, angiotensinogeno (precliniico) | Gene editing (preclinical)

## Guias actualizadas y controversias | Updated Guidelines and Controversies

### Comparacion de guias | Guideline Comparison

| Parametro | ACC/AHA 2017 | ESH 2023 | ISH 2020 |
|-----------|-------------|----------|----------|
| Definicion HTN | ≥ 130/80 | ≥ 140/90 | ≥ 140/90 |
| Meta general | < 130/80 | < 130/80 (si tolera) | < 130/80 |
| Meta ancianos | < 130 (si tolera) | 130-139 (> 80 anos) | 130-139 |
| Inicio farmacologico | Etapa 1 con riesgo o Etapa 2 | Grado 1 con riesgo o Grado 2 | Similar ESH |

### Controversias activas | Active Controversies

1. **Cuanto es demasiado bajo?** Curva J: PA diastolica < 60-70 mmHg puede aumentar riesgo coronario | J-curve: diastolic BP too low may increase coronary risk
2. **Hora de dosificacion:** TIME study (2022): no diferencia entre administracion matutina vs. nocturna (contradice Hygia) | No difference between morning vs. evening dosing
3. **Polipildora:** SECURE trial: polipildora (aspirina + ramipril + atorvastatina) reduce eventos CV 24% | Fixed-dose combination reduces CV events
4. **IA y monitorizacion continua:** Dispositivos wearables, cuffless BP monitoring, algoritmos predictivos | Wearables, continuous monitoring, predictive algorithms

### Impacto de SGLT2 inhibidores en PA | SGLT2 Inhibitor Impact on BP
- Reduccion de PA de 3-5/1-2 mmHg (mecanismo: natriuresis, reduccion de volumen plasmatico, rigidez arterial) | 3-5/1-2 mmHg BP reduction
- Beneficio cardiovascular y renal independiente de PA | CV and renal benefit independent of BP
- Dapagliflozin, empagliflozin: indicaciones expandidas mas alla de diabetes | Expanded indications beyond diabetes

## Estrategias de salud publica | Public Health Strategies

### Control poblacional de la hipertension | Population-Level HTN Control

- Solo ~50% de pacientes con hipertension estan controlados globalmente | Only ~50% globally controlled
- Programas comunitarios (barberia, farmacia, tele-salud) mejoran control | Community programs improve control
- Polipildora de dosis fija: mejora adherencia y reduce costos | Fixed-dose polypill: improves adherence and reduces costs
- Restriccion de sodio a nivel poblacional: se estima prevencion de 500,000+ muertes anuales con reduccion de 30% | Population sodium restriction: estimated prevention of 500,000+ annual deaths

### Disparidades en salud | Health Disparities
- Prevalencia mayor en afroamericanos (~56% vs. ~46% en blancos) | Higher prevalence in African Americans
- Menor tasa de control en poblaciones hispanas | Lower control rates in Hispanic populations
- Acceso a medicamentos, adherencia cultural, determinantes sociales de salud | Medication access, cultural adherence, social determinants of health
- Intervencion multilingue y culturalmente competente (como SOMA) es critica | Multilingual culturally competent intervention is critical`,
      keyTerms: [
        {
          term: 'baxdrostat (inhibidor de aldosterona sintasa) | baxdrostat (aldosterone synthase inhibitor)',
          definition:
            'Inhibidor selectivo de CYP11B2 que reduce la produccion de aldosterona; emergente para hipertension resistente con menos hiperkalemia que espironolactona | Selective CYP11B2 inhibitor reducing aldosterone production; emerging for resistant HTN with less hyperkalemia than spironolactone',
        },
        {
          term: 'zilebesiran (siRNA anti-angiotensinogeno) | zilebesiran (anti-angiotensinogen siRNA)',
          definition:
            'ARN de interferencia pequeno dirigido al angiotensinogeno hepatico; inyeccion unica reduce PA por 6 meses; potencial revolucionario para adherencia | Small interfering RNA targeting hepatic angiotensinogen; single injection reduces BP for 6 months',
        },
        {
          term: 'aprocitentan | aprocitentan',
          definition:
            'Antagonista dual de receptores de endotelina (ETA/ETB) aprobado para hipertension resistente; primer antagonista ET para HTA | Dual endothelin receptor antagonist approved for resistant hypertension; first ET antagonist for HTN',
        },
        {
          term: 'curva J | J-curve',
          definition:
            'Concepto donde la reduccion excesiva de PA diastolica (< 60-70 mmHg) puede aumentar el riesgo de eventos coronarios, especialmente en pacientes con enfermedad coronaria | Concept where excessive diastolic BP reduction may increase coronary event risk, especially in coronary disease patients',
        },
        {
          term: 'score de riesgo poligenico para HTA | polygenic risk score for HTN',
          definition:
            'Puntuacion basada en multiples variantes geneticas que predice el riesgo de hipertension y potencialmente la respuesta a diferentes clases farmacologicas | Score based on multiple genetic variants predicting hypertension risk and potentially response to different drug classes',
        },
        {
          term: 'polipildora | polypill',
          definition:
            'Combinacion de dosis fija de multiples farmacos cardiovasculares en una sola pastilla; SECURE trial mostro reduccion de 24% en eventos CV | Fixed-dose combination of multiple cardiovascular drugs in one pill; SECURE trial showed 24% CV event reduction',
        },
      ],
      clinicalNotes:
        'El futuro de la terapia antihipertensiva se dirige hacia la precision: siRNA como zilebesiran ofrece control de PA de 6 meses con una inyeccion; inhibidores de aldosterona sintasa como baxdrostat representan una alternativa mas limpia a la espironolactona; y la denervacion renal ofrece una opcion no-farmacologica. La polipildora y las intervenciones de salud publica son esenciales para cerrar la brecha de control global. En la practica, optimice GDMT con las cuatro clases principales, agregue espironolactona como 4to agente en HTA resistente, y considere causas secundarias en todo paciente resistente. Las disparidades en salud requieren enfoques culturalmente competentes y multilingues. | The future of antihypertensive therapy moves toward precision: siRNA like zilebesiran offers 6-month BP control with one injection; aldosterone synthase inhibitors represent a cleaner alternative to spironolactone; renal denervation offers a non-pharmacological option. The polypill and public health interventions are essential for closing the global control gap.',
    },
  },

  media: [],

  citations: [
    {
      id: 'acc-aha-htn-2017',
      type: 'guideline',
      title: '2017 ACC/AHA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults',
      authors: ['Whelton PK', 'Carey RM', 'et al.'],
      source: 'Journal of the American College of Cardiology',
      url: 'https://doi.org/10.1016/j.jacc.2017.11.006',
    },
    {
      id: 'sprint-trial',
      type: 'journal',
      title: 'A Randomized Trial of Intensive versus Standard Blood-Pressure Control (SPRINT)',
      authors: ['The SPRINT Research Group'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1511939',
    },
    {
      id: 'esh-guidelines-2023',
      type: 'guideline',
      title: '2023 ESH Guidelines for the Management of Arterial Hypertension',
      authors: ['Mancia G', 'Kreutz R', 'et al.'],
      source: 'Journal of Hypertension',
    },
    {
      id: 'goodman-gilman-cardiovascular',
      type: 'textbook',
      title: 'Goodman & Gilman\'s The Pharmacological Basis of Therapeutics',
      source: 'McGraw-Hill Education',
      chapter: 'Therapy of Hypertension',
    },
    {
      id: 'pathway-2-trial',
      type: 'journal',
      title: 'Spironolactone versus placebo, bisoprolol, and doxazosin to determine the optimal treatment for drug-resistant hypertension (PATHWAY-2)',
      authors: ['Williams B', 'MacDonald TM', 'et al.'],
      source: 'The Lancet',
    },
  ],

  crossReferences: [
    {
      targetId: 'pharmacology-anticoagulantes-anticoagulants',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Anticoagulantes | Anticoagulants',
    },
    {
      targetId: 'condition-heart-failure',
      targetType: 'condition',
      relationship: 'related',
      label: 'Insuficiencia cardiaca | Heart Failure',
    },
    {
      targetId: 'condition-coronary-artery-disease',
      targetType: 'condition',
      relationship: 'related',
      label: 'Enfermedad coronaria | Coronary Artery Disease',
    },
    {
      targetId: 'condition-chronic-kidney-disease',
      targetType: 'condition',
      relationship: 'related',
      label: 'Enfermedad renal cronica | Chronic Kidney Disease',
    },
    {
      targetId: 'system-cardiovascular',
      targetType: 'system',
      relationship: 'parent',
      label: 'Sistema cardiovascular | Cardiovascular System',
    },
  ],

  tags: {
    systems: ['cardiovascular', 'renal', 'pharmacology'],
    topics: ['pharmacology', 'cardiology', 'nephrology', 'hypertension'],
    keywords: [
      'antihipertensivos',
      'IECA',
      'BRA',
      'bloqueadores de calcio',
      'betabloqueadores',
      'diureticos',
      'hipertension',
      'presion arterial',
      'SPRINT',
      'SRAA',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency medicine', 'surgery'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default antihipertensivosAntihypertensives;
