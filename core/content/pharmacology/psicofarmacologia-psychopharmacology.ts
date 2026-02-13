/**
 * Psicofarmacologia / Psychopharmacology - Comprehensive Educational Content
 *
 * Covers antidepressants (SSRIs, SNRIs, TCAs, MAOIs), anxiolytics (benzodiazepines,
 * buspirone), antipsychotics (typical/atypical), and mood stabilizers (lithium,
 * valproate, lamotrigine). Spanish-first with English translations.
 */

import { EducationalContent } from '../types';

export const psicofarmacologiaPsychopharmacology: EducationalContent = {
  id: 'pharmacology-psicofarmacologia-psychopharmacology',
  type: 'topic',
  name: 'Psicofarmacologia | Psychopharmacology',
  nameEs: 'Psicofarmacologia',
  alternateNames: [
    'Medicamentos psiquiatricos | Psychiatric medications',
    'Farmacoterapia psiquiatrica | Psychiatric pharmacotherapy',
    'Psicofarmacos | Psychotropic drugs',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Los medicamentos psiquiatricos ayudan a tratar condiciones como la depresion, la ansiedad, y otros problemas de salud mental. Funcionan cambiando las sustancias quimicas en el cerebro para ayudarle a sentirse mejor. | Psychiatric medications help treat conditions like depression, anxiety, and other mental health problems. They work by changing chemicals in the brain to help you feel better.',
      explanation: `## Que son los medicamentos psiquiatricos? | What are psychiatric medications?

Los medicamentos psiquiatricos son medicinas que ayudan con problemas de salud mental como la depresion, la ansiedad, y otros trastornos del cerebro. Es importante saber que estas condiciones son enfermedades reales, no debilidad, y los medicamentos son una herramienta importante del tratamiento. | Psychiatric medications help with mental health problems. These conditions are real illnesses, not weakness, and medications are an important treatment tool.

### Tipos principales | Main types

**1. Antidepresivos | Antidepressants**
- Ayudan con la tristeza profunda (depresion) y la ansiedad | Help with deep sadness (depression) and anxiety
- Ejemplos comunes: sertralina (Zoloft), fluoxetina (Prozac), escitalopram (Lexapro)
- **Tardan 2-6 semanas** en hacer efecto completo | Take **2-6 weeks** for full effect
- NO causan adiccion | Do NOT cause addiction
- Efectos secundarios comunes: nauseas, dolor de cabeza, cambios en el apetito | Common side effects: nausea, headache, appetite changes

**2. Medicamentos para la ansiedad (ansioliticos) | Anxiety medications (anxiolytics)**
- Ayudan cuando se siente muy nervioso, asustado, o preocupado | Help when feeling very nervous, scared, or worried
- Benzodiazepinas (lorazepam, alprazolam): funcionan rapido pero pueden causar dependencia | Benzodiazepines: work fast but can cause dependence
- Buspirona: no causa dependencia pero tarda mas en funcionar | Buspirone: no dependence but takes longer to work

**3. Antipsicoticos | Antipsychotics**
- Para problemas como escuchar voces, creencias falsas, o pensamiento desorganizado | For problems like hearing voices, false beliefs, or disorganized thinking
- Tambien se usan para trastorno bipolar y como ayuda para la depresion | Also used for bipolar disorder and as an aid for depression
- Ejemplos: risperidona, quetiapina, aripiprazol

**4. Estabilizadores del animo | Mood stabilizers**
- Para el trastorno bipolar (cambios extremos de animo entre mania y depresion) | For bipolar disorder (extreme mood swings between mania and depression)
- Litio: el medicamento clasico, necesita examenes de sangre | Lithium: the classic medication, needs blood tests
- Acido valproico, lamotrigina | Valproic acid, lamotrigine

### Consejos importantes | Important tips

- **No deje de tomar el medicamento** sin hablar con su doctor | **Do not stop taking medication** without talking to your doctor
- Muchos medicamentos necesitan tiempo para funcionar - tenga paciencia | Many medications need time to work - be patient
- **Hable con su doctor** sobre cualquier efecto secundario | **Talk to your doctor** about any side effect
- La terapia (hablar con un profesional) combinada con medicamento es lo mas efectivo | Therapy combined with medication is most effective
- Tomar medicamentos para la salud mental es tan normal como tomarlos para la diabetes o la presion | Taking mental health medications is as normal as taking them for diabetes or blood pressure

### Cuando buscar ayuda de emergencia | When to seek emergency help
- Pensamientos de hacerse dano o de suicidio | Thoughts of hurting yourself or suicide
- Sintomas nuevos o empeoramiento severo | New symptoms or severe worsening
- **Linea de crisis: 988** (en EE.UU.) | **Crisis line: 988** (in the US)`,
      keyTerms: [
        {
          term: 'antidepresivo | antidepressant',
          definition:
            'Medicamento que ayuda a tratar la depresion y a veces la ansiedad | Medication that helps treat depression and sometimes anxiety',
        },
        {
          term: 'ansiolitico | anxiolytic',
          definition:
            'Medicamento que reduce la ansiedad y los nervios | Medication that reduces anxiety and nervousness',
        },
        {
          term: 'antipsicotico | antipsychotic',
          definition:
            'Medicamento que ayuda con sintomas como escuchar voces o creencias falsas | Medication that helps with symptoms like hearing voices or false beliefs',
        },
        {
          term: 'estabilizador del animo | mood stabilizer',
          definition:
            'Medicamento que ayuda a mantener el animo estable y prevenir cambios extremos | Medication that helps keep mood stable and prevent extreme swings',
        },
      ],
      analogies: [
        'Los antidepresivos son como lentes para el cerebro - ayudan a ver las cosas mas claramente cuando la depresion nubla la vision. | Antidepressants are like glasses for the brain - they help see things more clearly when depression clouds your vision.',
        'El litio es como un termostato para el animo - mantiene la temperatura emocional estable, ni muy alta ni muy baja. | Lithium is like a thermostat for mood - keeping emotional temperature stable, neither too high nor too low.',
        'Los ansioliticos son como un extintor para el fuego de la ansiedad - los de accion rapida (benzodiazepinas) apagan la llama inmediatamente, pero no previenen futuros incendios. | Anxiolytics are like a fire extinguisher for anxiety - fast-acting ones put out the flame immediately but don\'t prevent future fires.',
      ],
      examples: [
        'Su doctor le receta sertralina para su depresion. Es normal no sentir cambios en la primera semana - dele tiempo. | Your doctor prescribes sertraline for depression. It is normal not to feel changes in the first week - give it time.',
        'Si toma benzodiazepinas para la ansiedad, su doctor probablemente planea usarlas solo por poco tiempo mientras otros tratamientos empiezan a funcionar. | If taking benzodiazepines for anxiety, your doctor probably plans to use them only briefly while other treatments start working.',
      ],
      patientCounselingPoints: [
        'Los antidepresivos NO son adictivos - tomar medicamento para la salud mental es valiente, no debil | Antidepressants are NOT addictive - taking medication for mental health is brave, not weak',
        'Nunca deje de tomar su medicamento de repente - puede causar sintomas de descontinuacion | Never stop your medication suddenly - it can cause discontinuation symptoms',
        'Si siente pensamientos suicidas, llame al 988 inmediatamente | If you have suicidal thoughts, call 988 immediately',
      ],
    },

    2: {
      level: 2,
      summary:
        'Los psicofarmacos actuan modulando neurotransmisores cerebrales: los antidepresivos aumentan serotonina/norepinefrina (ISRS, IRSN, triciclicos, IMAO), los ansioliticos potencian GABA (benzodiazepinas) o modulan serotonina (buspirona), los antipsicoticos bloquean dopamina (tipicos/atipicos), y los estabilizadores del animo tienen mecanismos multiples (litio, valproato, lamotrigina). | Psychotropic drugs act by modulating brain neurotransmitters: antidepressants increase serotonin/norepinephrine, anxiolytics potentiate GABA or modulate serotonin, antipsychotics block dopamine, and mood stabilizers have multiple mechanisms.',
      explanation: `## Neurotransmisores clave | Key Neurotransmitters

| Neurotransmisor | Funcion principal | Relacionado con |
|-----------------|-------------------|-----------------|
| Serotonina (5-HT) | Animo, sueno, apetito | Depresion, ansiedad, TOC |
| Norepinefrina (NE) | Alerta, energia, atencion | Depresion, TDAH |
| Dopamina (DA) | Placer, motivacion, movimiento | Psicosis, Parkinson, adiccion |
| GABA | Inhibicion, calma | Ansiedad, epilepsia |
| Glutamato | Excitacion, aprendizaje | Esquizofrenia, depresion |

### Antidepresivos | Antidepressants

**ISRS (Inhibidores Selectivos de Recaptura de Serotonina) | SSRIs:**

| Farmaco | Dosis habitual | Caracteristicas unicas |
|---------|---------------|------------------------|
| Fluoxetina (Prozac) | 20-80 mg | Vida media larga (4-6 dias), activante |
| Sertralina (Zoloft) | 50-200 mg | Buena opcion inicial, flexible |
| Escitalopram (Lexapro) | 10-20 mg | Mas selectivo, pocas interacciones |
| Paroxetina (Paxil) | 20-50 mg | Mas sedante, dificil de descontinuar |
| Citalopram (Celexa) | 20-40 mg | Riesgo de QT con > 40 mg |

**Efectos adversos de ISRS | SSRI Adverse Effects:**
- Nauseas (inicial, mejora) | Nausea (initial, improves)
- Disfuncion sexual (comun, persistente) | Sexual dysfunction (common, persistent)
- Insomnio o somnolencia | Insomnia or drowsiness
- Aumento de peso (especialmente paroxetina) | Weight gain (especially paroxetine)
- Hiponatremia (SIADH, especialmente en ancianos) | Hyponatremia (especially in elderly)
- Sangrado (inhibicion plaquetaria) | Bleeding (platelet inhibition)

**IRSN (Inhibidores de Recaptura de Serotonina y Norepinefrina) | SNRIs:**

| Farmaco | Dosis | Notas |
|---------|-------|-------|
| Venlafaxina (Effexor) | 75-225 mg | NE a dosis altas; hipertension |
| Duloxetina (Cymbalta) | 60-120 mg | Aprobada para dolor neuropatico |
| Desvenlafaxina (Pristiq) | 50 mg | Metabolito activo de venlafaxina |

**Otros antidepresivos | Other Antidepressants:**
- **Bupropion (Wellbutrin):** Inhibe recaptura de DA y NE; no disfuncion sexual; ayuda a dejar de fumar; contraindicado en epilepsia | No sexual dysfunction; smoking cessation aid
- **Mirtazapina (Remeron):** Antagonista alfa-2 + 5-HT2/5-HT3; sedante, aumenta apetito; buena para insomnio + depresion | Sedating, appetite stimulant
- **Trazodona:** Antagonista 5-HT2 + inhibidor de recaptura de 5-HT; mas usado como hipnotico a dosis bajas | Most used as a low-dose hypnotic

### Ansioliticos | Anxiolytics

**Benzodiazepinas:**

| Farmaco | Inicio | Duracion | Uso principal |
|---------|--------|----------|---------------|
| Alprazolam (Xanax) | Rapido | Corta (6h) | Ataques de panico |
| Lorazepam (Ativan) | Intermedio | Intermedia (12h) | Ansiedad aguda, estado epileptico |
| Clonazepam (Klonopin) | Intermedio | Larga (24h+) | TAG, trastorno de panico |
| Diazepam (Valium) | Rapido | Larga (48h+) | Espasmo muscular, abstinencia alcoh. |

- Mecanismo: potencian GABA-A (aumentan frecuencia de apertura del canal de Cl-) | Potentiate GABA-A (increase Cl- channel opening frequency)
- Riesgos: dependencia, sedacion, caidas (ancianos), depresion respiratoria con opioides | Dependence, sedation, falls, respiratory depression with opioids
- Antidoto: flumazenil | Antidote: flumazenil

**Buspirona:**
- Agonista parcial de 5-HT1A | 5-HT1A partial agonist
- No causa dependencia ni sedacion significativa | No dependence or significant sedation
- Tarda 2-4 semanas en hacer efecto | Takes 2-4 weeks for effect
- Solo para ansiedad cronica (no para ansiedad aguda) | Only for chronic anxiety

### Antipsicoticos | Antipsychotics

**Tipicos (1ra generacion) | Typical (1st generation):**

| Farmaco | Potencia | Perfil de efectos secundarios |
|---------|----------|-------------------------------|
| Haloperidol | Alta | Extrapiramidales +++, poca sedacion |
| Clorpromazina | Baja | Sedacion +++, hipotension, menos EPS |

**Atipicos (2da generacion) | Atypical (2nd generation):**

| Farmaco | Caracteristicas unicas |
|---------|------------------------|
| Risperidona | Potente anti-D2; hiperprolactinemia |
| Quetiapina | Sedante; usado off-label para insomnio |
| Olanzapina | Eficaz pero metabolico (peso ++) |
| Aripiprazol | Agonista parcial D2; neutral metabolico |
| Clozapina | Solo para esquizofrenia resistente; agranulocitosis |
| Ziprasidona | Menos metabolico; riesgo QT |
| Lurasidona | Aprobado en depresion bipolar; tomar con comida |

### Estabilizadores del animo | Mood Stabilizers

| Farmaco | Indicacion principal | Monitoreo clave |
|---------|---------------------|-----------------|
| Litio | Mania aguda + prevencion | Nivel serico, tiroides, rinones |
| Valproato | Mania aguda | Nivel serico, hepatico, hemograma |
| Lamotrigina | Prevencion depresion bipolar | Rash (Stevens-Johnson!) |
| Carbamazepina | Mania, alternativa | Nivel serico, hemograma, hepatico |`,
      keyTerms: [
        {
          term: 'ISRS (inhibidor selectivo de recaptura de serotonina) | SSRI',
          definition:
            'Clase de antidepresivos que bloquean selectivamente la recaptura de serotonina; primera linea para depresion y ansiedad | Antidepressant class selectively blocking serotonin reuptake; first line for depression and anxiety',
        },
        {
          term: 'receptor GABA-A | GABA-A receptor',
          definition:
            'Canal de cloro que, al ser activado por GABA, inhibe las neuronas; potenciado por benzodiazepinas | Chloride channel that inhibits neurons when activated by GABA; potentiated by benzodiazepines',
        },
        {
          term: 'sintomas extrapiramidales (EPS) | extrapyramidal symptoms',
          definition:
            'Efectos de movimiento causados por antipsicoticos: distonia, acatisia, parkinsonismo, discinesia tardia | Movement effects from antipsychotics: dystonia, akathisia, parkinsonism, tardive dyskinesia',
        },
        {
          term: 'sindrome neuroleptico maligno (SNM) | neuroleptic malignant syndrome (NMS)',
          definition:
            'Emergencia rara con antipsicoticos: fiebre, rigidez, confusion, CK elevada; tratamiento con dantroleno | Rare emergency: fever, rigidity, confusion, elevated CK; treat with dantrolene',
        },
        {
          term: 'sindrome serotoninergico | serotonin syndrome',
          definition:
            'Exceso de serotonina por combinacion de farmacos: temblor, clonus, hipertermia, agitacion; tratamiento con ciproheptadina | Serotonin excess from drug combination: tremor, clonus, hyperthermia; treat with cyproheptadine',
        },
      ],
      analogies: [
        'Los ISRS son como un guardia que impide que la serotonina regrese a su neurona de origen, dejando mas serotonina disponible en el espacio entre neuronas. | SSRIs are like a guard preventing serotonin from returning to its origin neuron, leaving more serotonin available.',
        'Las benzodiazepinas son como poner un amplificador en el sistema de frenos del cerebro (GABA) - hacen que los frenos funcionen con mas fuerza. | Benzodiazepines are like putting an amplifier on the brain\'s braking system (GABA).',
      ],
    },

    3: {
      level: 3,
      summary:
        'La psicofarmacologia se fundamenta en la modulacion de neurotransmision monoaminergica (serotonina, norepinefrina, dopamina), GABAergica, y glutamatergica, con mecanismos especificos por clase: inhibicion de recaptura (ISRS/IRSN/TCA), bloqueo de receptores (antipsicoticos, ansioliticos), y modulacion de transduccion de senales (litio, lamotrigina), requiriendo comprension de farmacocinetica, interacciones, y manejo de efectos adversos graves. | Psychopharmacology is based on modulation of monoaminergic, GABAergic, and glutamatergic neurotransmission, with class-specific mechanisms requiring understanding of pharmacokinetics, interactions, and serious adverse effect management.',
      explanation: `## Neurobiologia de trastornos psiquiatricos | Neurobiology of Psychiatric Disorders

### Hipotesis monoaminergica de la depresion | Monoamine Hypothesis of Depression

- Teoria clasica: depresion = deficit de serotonina/norepinefrina en sinapsis | Classic theory: depression = serotonin/norepinephrine deficit
- Limitaciones: antidepresivos aumentan monoaminas en horas pero efecto clinico tarda semanas | Limitations: effect takes weeks despite rapid monoamine increase
- Teoria actualizada: neuroplasticidad y neurotrofinas (BDNF) como mecanismo final | Updated theory: neuroplasticity and neurotrophins (BDNF) as final mechanism
- Hipotesis glutamatergica: disfuncion NMDA contribuye a depresion (base de ketamina) | Glutamate hypothesis: NMDA dysfunction contributes to depression

### Hipotesis dopaminergica de la esquizofrenia | Dopamine Hypothesis of Schizophrenia

**Vias dopaminergicas | Dopaminergic Pathways:**

| Via | Funcion normal | En esquizofrenia | Efecto de bloqueo D2 |
|-----|----------------|------------------|----------------------|
| Mesolimbica | Motivacion, recompensa | Hiperactividad → sintomas + | Reduce sintomas positivos |
| Mesocortical | Cognicion, emocion | Hipoactividad → sintomas - | Empeora sintomas negativos |
| Nigroestriatal | Movimiento | Normal | Sintomas extrapiramidales |
| Tuberoinfundibular | Inhibe prolactina | Normal | Hiperprolactinemia |

## Farmacologia detallada por clase | Detailed Class Pharmacology

### Antidepresivos: mecanismos moleculares | Antidepressants: Molecular Mechanisms

**Inhibicion de recaptura | Reuptake Inhibition:**
- ISRS: bloquean SERT (transportador de serotonina) selectivamente | Block SERT selectively
- IRSN: bloquean SERT + NET (transportador de norepinefrina) | Block SERT + NET
- TCA: bloquean SERT + NET + receptores muscarinicos, histaminicos, alfa-1 (efectos adversos) | Block SERT + NET + multiple receptors (adverse effects)

**IMAO (Inhibidores de Monoamino Oxidasa) | MAOIs:**
- MAO-A: metaboliza serotonina, norepinefrina → inhibicion = efecto antidepresivo | MAO-A inhibition = antidepressant effect
- MAO-B: metaboliza dopamina → inhibicion selectiva en Parkinson (selegilina) | Selective inhibition in Parkinson's
- Crisis hipertensiva con tiramina (quesos curados, vino, embutidos) → "reaccion del queso" | Hypertensive crisis with tyramine → "cheese reaction"
- Interacciones letales con ISRS/meperidina (sindrome serotoninergico) | Lethal interactions with SSRIs/meperidine
- Requieren lavado de 2 semanas al cambiar de/a otro antidepresivo (5 semanas para fluoxetina) | Require 2-week washout (5 weeks for fluoxetine)

### Sindrome serotoninergico vs. sindrome neuroleptico maligno | Serotonin Syndrome vs. NMS

| Caracteristica | Sindrome serotoninergico | SNM |
|---------------|--------------------------|-----|
| Causa | Exceso de serotonina (ISRS + IMAO, etc.) | Bloqueo dopaminergico (antipsicoticos) |
| Inicio | Horas | Dias-semanas |
| Musculoesqueletico | Clonus, hiperreflexia | Rigidez "tubo de plomo" |
| Temperatura | Hipertermia | Hipertermia severa |
| CK | Normal-leve elevacion | Muy elevada (> 1,000) |
| Pupilas | Midriasis | Normal |
| GI | Diarrea | Normal |
| Tratamiento | Ciproheptadina | Dantroleno + bromocriptina |

### Antipsicoticos: perfil de union a receptores | Antipsychotics: Receptor Binding Profile

| Receptor | Efecto de bloqueo | Farmaco con mayor afinidad |
|----------|-------------------|---------------------------|
| D2 | Antipsicosis, EPS, prolactina | Haloperidol, risperidona |
| 5-HT2A | Reduce EPS, mejora cognicion | Atipicos (clozapina, quetiapina) |
| H1 | Sedacion, aumento de peso | Olanzapina, quetiapina, clozapina |
| M1 | Anticolinergico (sequedad, constipacion) | Clozapina, olanzapina |
| Alfa-1 | Hipotension ortostatica | Clorpromazina, clozapina, quetiapina |

### Efectos metabolicos de antipsicoticos atipicos | Atypical Antipsychotic Metabolic Effects

**Riesgo de sindrome metabolico (de mayor a menor):**
Clozapina > Olanzapina >> Quetiapina ≈ Risperidona > Aripiprazol ≈ Ziprasidona ≈ Lurasidona

**Monitoreo requerido | Required Monitoring:**
- Peso y circunferencia abdominal: cada visita | Weight and waist: every visit
- Glucosa en ayunas y perfil lipidico: basal, 12 semanas, luego anual | Fasting glucose and lipids
- Hemoglobina A1c si factores de riesgo | HbA1c if risk factors
- Presion arterial | Blood pressure

### Clozapina: farmaco unico | Clozapine: Unique Drug

- Unico antipsicotico con eficacia superior en esquizofrenia resistente al tratamiento | Only antipsychotic with superior efficacy in treatment-resistant schizophrenia
- Reduce suicidalidad (InterSePT study) | Reduces suicidality
- **Agranulocitosis (1-2%):** Requiere monitoreo de hemograma semanal x 6 meses, luego bisemanal x 6 meses, luego mensual | Requires weekly CBC monitoring
- Otros riesgos: miocarditis, convulsiones, sindrome metabolico severo | Myocarditis, seizures, severe metabolic syndrome
- Registro REMS obligatorio | Mandatory REMS registry

### Litio: farmacologia y monitoreo | Lithium: Pharmacology and Monitoring

**Mecanismo (multiples):**
- Inhibe inositol monofosfatasa → reduce senalizacion IP3/DAG | Inhibits inositol monophosphatase
- Inhibe GSK-3beta → neuroproteccion, neurogenesis | Inhibits GSK-3beta → neuroprotection
- Modula transportadores de glutamato | Modulates glutamate transporters

**Rango terapeutico estrecho | Narrow Therapeutic Range:**
- Terapeutico: 0.6-1.2 mEq/L (agudo: 0.8-1.2; mantenimiento: 0.6-0.8) | Therapeutic range
- Toxico: > 1.5 mEq/L | Toxic level
- Factores que aumentan nivel: deshidratacion, AINEs, IECA, diureticos tiazidicos | Factors increasing level

**Toxicidad | Toxicity:**
- Leve (1.5-2.5): temblor grueso, nauseas, diarrea, confusion leve | Mild: coarse tremor, nausea
- Moderada (2.5-3.5): vomitos, ataxia, nistagmo, confusion severa | Moderate: vomiting, ataxia
- Severa (> 3.5): convulsiones, coma, arritmias, muerte | Severe: seizures, coma, death
- Tratamiento: hidratacion IV agresiva; hemodialisis si > 4.0 o sintomas severos | Treatment: aggressive IV hydration; hemodialysis if severe

**Monitoreo cronico | Chronic Monitoring:**
- Nivel serico cada 3-6 meses (y con cambios clinicos) | Serum level every 3-6 months
- Funcion tiroidea (hipotiroidismo comun) | Thyroid function (hypothyroidism common)
- Funcion renal (nefropatia cronica por litio: diabetes insipida nefrogenica) | Renal function
- Calcio (hiperparatiroidismo) | Calcium (hyperparathyroidism)

## Interacciones medicamentosas criticas | Critical Drug Interactions

| Combinacion | Riesgo | Manejo |
|-------------|--------|--------|
| ISRS + IMAO | Sindrome serotoninergico letal | Contraindicado; lavado de 2-5 sem |
| Litio + AINEs | Toxicidad por litio (↓ excrecion) | Evitar; si necesario, monitoreo estrecho |
| Litio + tiazidas | Toxicidad por litio | Evitar; usar diuretico de asa si necesario |
| Carbamazepina + multiples | Inductor potente de CYP3A4 | Reduce niveles de muchos farmacos |
| Fluoxetina + tramadol | Sindrome serotoninergico + convulsiones | Evitar |
| Clozapina + carbamazepina | Agranulocitosis potenciada | Contraindicado |`,
      keyTerms: [
        {
          term: 'hipotesis monoaminergica | monoamine hypothesis',
          definition:
            'Teoria que la depresion resulta de deficit de monoaminas (serotonina, NE, DA) en la sinapsis; base de los antidepresivos actuales pero teoria incompleta | Theory that depression results from monoamine deficit; basis for current antidepressants but incomplete',
        },
        {
          term: 'BDNF (factor neurotrofico derivado del cerebro) | BDNF (brain-derived neurotrophic factor)',
          definition:
            'Neurotrofina esencial para neuroplasticidad; reducida en depresion, aumentada por antidepresivos cronicos y ejercicio; posiblemente el mecanismo final del efecto antidepresivo | Essential neurotrophin for neuroplasticity; reduced in depression, increased by chronic antidepressants',
        },
        {
          term: 'discinesia tardia | tardive dyskinesia',
          definition:
            'Movimientos involuntarios (tipicamente orofaciales) causados por uso cronico de antipsicoticos; dificil de tratar; tratamiento: valbenazina, deutetrabenazina (inhibidores VMAT2) | Involuntary movements from chronic antipsychotic use; treatment: valbenazine, deutetrabenazine',
        },
        {
          term: 'indice terapeutico estrecho (litio) | narrow therapeutic index (lithium)',
          definition:
            'Pequena diferencia entre nivel terapeutico (0.6-1.2 mEq/L) y toxico (> 1.5 mEq/L); requiere monitoreo serico regular y atencion a interacciones | Small difference between therapeutic and toxic levels; requires regular monitoring',
        },
        {
          term: 'reaccion del queso (IMAO) | cheese reaction (MAOI)',
          definition:
            'Crisis hipertensiva causada por consumo de alimentos ricos en tiramina durante tratamiento con IMAO; tiramina no puede ser metabolizada → liberacion masiva de norepinefrina | Hypertensive crisis from tyramine-rich foods during MAOI treatment',
        },
        {
          term: 'sindrome de discontinuacion | discontinuation syndrome',
          definition:
            'Sintomas al suspender abruptamente antidepresivos (especialmente venlafaxina y paroxetina): mareo, nauseas, parestesias, "brain zaps"; prevenido con reduccion gradual | Symptoms from abrupt antidepressant discontinuation; prevented by gradual taper',
        },
      ],
      clinicalNotes:
        'Al iniciar ISRS, eduque al paciente sobre el retraso de 2-6 semanas en el efecto y los efectos secundarios iniciales que generalmente mejoran. Siempre pregunte sobre ideacion suicida, especialmente en las primeras semanas (paradoja de la energia). Evite benzodiazepinas a largo plazo; use buspirona o ISRS para ansiedad cronica. Con litio, monitoree niveles regularmente y eduque sobre senales de toxicidad (temblor, nauseas, confusion). Nunca combine ISRS con IMAO. En antipsicoticos atipicos, monitoree el perfil metabolico rutinariamente. | When starting SSRIs, educate about 2-6 week delay and initial side effects. Always ask about suicidal ideation. Avoid long-term benzodiazepines. With lithium, monitor levels regularly. Never combine SSRI with MAOI.',
    },

    4: {
      level: 4,
      summary:
        'La psicofarmacologia avanzada integra neurocircuitos de trastornos psiquiatricos, farmacogenetica (CYP2D6, CYP2C19, HLA), terapias de aumento y combinacion basadas en evidencia, manejo de poblaciones especiales (embarazo, ancianos, comorbilidades medicas), y estrategias para depresion resistente al tratamiento incluyendo ketamina/esketamina y estimulacion cerebral. | Advanced psychopharmacology integrates psychiatric neurocircuitry, pharmacogenetics, evidence-based augmentation and combination strategies, special population management, and treatment-resistant depression strategies including ketamine/esketamine and brain stimulation.',
      explanation: `## Neurocircuitos y dianas farmacologicas | Neurocircuits and Pharmacological Targets

### Circuitos de la depresion | Depression Circuits

**Circuito prefrontal-limbico:**
- Corteza prefrontal dorsolateral (DLPFC): hipoactividad → disfuncion ejecutiva, anhedonia | Hypoactivity → executive dysfunction, anhedonia
- Amigdala: hiperactividad → sesgo negativo emocional | Hyperactivity → negative emotional bias
- Corteza cingulada anterior subgenual (sgACC/Cg25): hiperactividad (objetivo de DBS y TMS) | Target of DBS and TMS
- Hipocampo: volumen reducido, neurogenesis disminuida | Reduced volume, decreased neurogenesis

**Implicaciones terapeuticas | Therapeutic Implications:**
- TMS repetitiva: estimula DLPFC → modula amigdala y sgACC | Stimulates DLPFC → modulates amygdala and sgACC
- Ketamina: restaura sinaptogenesis via BDNF/mTOR en horas | Restores synaptogenesis via BDNF/mTOR in hours
- Psilocibina: "reset" de circuitos rumiantes (red de modo predeterminado) | "Reset" of ruminative circuits (default mode network)

## Farmacogenetica psiquiatrica | Psychiatric Pharmacogenetics

### CYP2D6 y CYP2C19 | CYP2D6 and CYP2C19

**CYP2D6 (metaboliza: fluoxetina, paroxetina, venlafaxina, aripiprazol, haloperidol, risperidona):**

| Fenotipo | Implicacion clinica |
|----------|---------------------|
| Metabolizador ultra-rapido | Dosis mas altas requeridas; fallo terapeutico |
| Metabolizador pobre | Riesgo de toxicidad a dosis estandar; reducir dosis |

**CYP2C19 (metaboliza: escitalopram, citalopram, sertralina, clomipramina):**

| Fenotipo | Implicacion clinica |
|----------|---------------------|
| Metabolizador ultra-rapido | Citalopram/escitalopram: eficacia reducida |
| Metabolizador pobre | Escitalopram: reducir a 50% de dosis; citalopram max 20 mg |

**HLA-B*1502 y HLA-A*3101:**
- HLA-B*1502 (frecuente en asiaticos): riesgo de SJS/TEN con carbamazepina | Risk of SJS/TEN with carbamazepine
- HLA-A*3101 (frecuente en europeos/japoneses): riesgo de hipersensibilidad a carbamazepina | Hypersensitivity risk
- FDA recomienda genotipado HLA antes de carbamazepina en poblaciones de riesgo | FDA recommends genotyping

### Tests farmacogenomicos comerciales | Commercial Pharmacogenomic Tests
- GeneSight, Genomind, Tempus, etc. | Commercial panels
- Panel tipico: CYP2D6, CYP2C19, CYP1A2, CYP3A4, SLC6A4, HTR2A | Typical panel
- Evidencia: GUIDED trial - mejoria en respuesta pero no en remision | Improved response but not remission
- Utilidad: guia complementaria, no determinante; no reemplaza juicio clinico | Complementary guide, not determinant

## Depresion resistente al tratamiento (DRT) | Treatment-Resistant Depression (TRD)

**Definicion:** Falta de respuesta a ≥ 2 antidepresivos adecuados (dosis y duracion suficientes) | Lack of response to ≥ 2 adequate antidepressant trials

### Estrategias de aumento | Augmentation Strategies

| Estrategia | Evidencia | Mecanismo |
|------------|-----------|-----------|
| Litio (300-900 mg) | Fuerte (STAR*D) | Modulacion de señalizacion intracelular |
| Aripiprazol (2-15 mg) | Fuerte | Agonismo parcial D2/5-HT1A |
| Quetiapina XR (150-300 mg) | Fuerte | Bloqueo 5-HT2/NET por metabolito |
| Hormona tiroidea (T3 25-50 mcg) | Moderada (STAR*D) | Potenciacion de neurotransmision |
| Bupropion (adicion a ISRS) | Moderada | Adicion de mecanismo DA/NE |
| Pramipexol | Emergente | Agonista D3 |

### Ketamina y esketamina | Ketamine and Esketamine

**Ketamina IV:**
- Antagonista NMDA → desbloqueo de AMPA → liberacion de BDNF → sinaptogenesis rapida | NMDA antagonist → AMPA unblocking → BDNF release → rapid synaptogenesis
- Efecto antidepresivo en 2-4 horas (vs. semanas con ISRS) | Antidepressant effect in 2-4 hours
- Dosis: 0.5 mg/kg IV en 40 min, 2-3 veces/semana | 0.5 mg/kg IV over 40 min, 2-3x/week
- Duracion del efecto: 3-7 dias (requiere sesiones repetidas) | Effect duration: 3-7 days

**Esketamina (Spravato) nasal:**
- Enantiomero S de ketamina | S-enantiomer of ketamine
- Aprobado por FDA para DRT (con antidepresivo oral) y depresion con ideacion suicida | FDA approved for TRD and depression with suicidal ideation
- Administracion supervisada en clinica (REMS) | Supervised in-clinic administration
- Ensayos TRANSFORM-1/2/3, SUSTAIN-1/2 | Key trials

### Estimulacion cerebral | Brain Stimulation

| Modalidad | Indicacion | Mecanismo |
|-----------|------------|-----------|
| TMS repetitiva (rTMS) | DRT, FDA aprobada | Estimulacion de DLPFC |
| Theta burst (TBS) | DRT | Protocolo TMS acelerado |
| SAINT protocol | DRT | TMS intensiva (5 dias) → remision 79% |
| Terapia electroconvulsiva (TEC) | DRT severa, catatonia | Actividad convulsiva generalizada controlada |
| Estimulacion del nervio vago (VNS) | DRT cronica | Modulacion via aferentes vagales |
| DBS (estimulacion cerebral profunda) | DRT experimental | Estimulacion de sgACC (Cg25) |

## Poblaciones especiales | Special Populations

### Embarazo | Pregnancy

**Riesgos de los psicofarmacos | Psychotropic Medication Risks:**

| Farmaco | Riesgo en embarazo |
|---------|-------------------|
| ISRS (general) | Bajo riesgo global; sindrome de adaptacion neonatal |
| Paroxetina | Malformaciones cardiacas (1er trimestre) - evitar |
| Litio | Anomalia de Ebstein (riesgo absoluto bajo: 1/1000) |
| Valproato | ALTO riesgo teratogenico: defectos del tubo neural 1-2%, CI reducido → CONTRAINDICADO |
| Carbamazepina | Defectos del tubo neural (menor que valproato) |
| Lamotrigina | Relativamente segura; ajustar dosis (↑ aclaramiento en embarazo) |
| Benzodiazepinas | Sindrome de abstinencia neonatal, hipotonia |
| Antipsicoticos atipicos | Datos limitados; riesgo metabolico |

**Principio:** Riesgo de enfermedad no tratada vs. riesgo del medicamento; discusion compartida | Risk of untreated illness vs. medication risk; shared decision-making

### Ancianos | Elderly
- "Start low, go slow, but go" - pero alcanzar dosis terapeuticas | Reach therapeutic doses
- ISRS: mayor riesgo de hiponatremia (SIADH) y sangrado | Higher hyponatremia and bleeding risk
- Benzodiazepinas: criterios de Beers - alto riesgo de caidas, fractura de cadera, delirium | Beers criteria - high fall risk
- Antipsicoticos en demencia: boxed warning FDA (↑ mortalidad) | FDA boxed warning in dementia`,
      keyTerms: [
        {
          term: 'depresion resistente al tratamiento (DRT) | treatment-resistant depression (TRD)',
          definition:
            'Depresion que no responde a ≥ 2 ensayos adecuados de antidepresivos; afecta ~30% de pacientes con depresion mayor | Depression not responding to ≥ 2 adequate antidepressant trials; affects ~30% of MDD patients',
        },
        {
          term: 'esketamina (Spravato) | esketamine',
          definition:
            'Enantiomero S de ketamina en formulacion nasal; aprobada por FDA para DRT y depresion con ideacion suicida; mecanismo via antagonismo NMDA y restauracion rapida de sinaptogenesis | S-enantiomer of ketamine; FDA approved for TRD; mechanism via NMDA antagonism and rapid synaptogenesis restoration',
        },
        {
          term: 'protocolo SAINT | SAINT protocol',
          definition:
            'Protocolo de TMS intensiva (Stanford Accelerated Intelligent Neuromodulation Therapy): multiples sesiones diarias durante 5 dias; tasa de remision de 79% en DRT | Intensive TMS protocol: multiple daily sessions over 5 days; 79% remission rate in TRD',
        },
        {
          term: 'farmacogenetica psiquiatrica | psychiatric pharmacogenetics',
          definition:
            'Uso de variantes geneticas (CYP2D6, CYP2C19, HLA) para guiar seleccion y dosificacion de psicofarmacos; evidencia creciente pero no definitiva como unico determinante | Use of genetic variants to guide psychotropic selection and dosing',
        },
        {
          term: 'sindrome de adaptacion neonatal | neonatal adaptation syndrome',
          definition:
            'Sintomas transitorios en recien nacidos expuestos a ISRS en el tercer trimestre: irritabilidad, temblor, dificultad para alimentarse; generalmente leve y autolimitado | Transient symptoms in neonates exposed to SSRIs in third trimester; generally mild and self-limited',
        },
        {
          term: 'anomalia de Ebstein | Ebstein anomaly',
          definition:
            'Malformacion de la valvula tricuspide asociada con exposicion a litio en primer trimestre; riesgo absoluto bajo (~1/1000) pero mayor que la poblacion general | Tricuspid valve malformation associated with first-trimester lithium exposure; low absolute risk',
        },
      ],
      clinicalNotes:
        'En DRT, siga un algoritmo sistematico: optimizar dosis → cambiar → combinar → aumentar (litio, aripiprazol, T3) → esketamina/ketamina → TEC. La farmacogenetica de CYP2D6/CYP2C19 es util pero complementaria al juicio clinico. En embarazo, el valproato esta absolutamente contraindicado; los ISRS (excepto paroxetina) son relativamente seguros. En ancianos, evite benzodiazepinas (Beers criteria) y antipsicoticos en demencia (boxed warning). La clozapina sigue siendo el estandar para esquizofrenia resistente pero esta dramáticamente subutilizada. El protocolo SAINT representa un avance significativo en TMS para DRT. | In TRD, follow a systematic algorithm. Pharmacogenetics is useful but complementary. In pregnancy, valproate is absolutely contraindicated. In elderly, avoid benzodiazepines and antipsychotics in dementia. Clozapine remains the standard for treatment-resistant schizophrenia.',
    },

    5: {
      level: 5,
      summary:
        'La prescripcion psicofarmacologica basada en evidencia integra neurobiologia molecular de circuitos (glutamato/GABA, inflamacion, eje HPA, microbioma-intestino-cerebro), farmacogenetica de precision, terapias emergentes (psilocibina, MDMA, agonistas muscarinicos, anticuerpos anti-inflamatorios), enfoques transdiagnosticos basados en RDoC, y el paradigma de la psiquiatria de precision. | Evidence-based psychopharmacological prescribing integrates molecular circuit neurobiology, precision pharmacogenetics, emerging therapies (psilocybin, MDMA, muscarinic agonists), RDoC-based transdiagnostic approaches, and the precision psychiatry paradigm.',
      explanation: `## Neurobiologia molecular avanzada | Advanced Molecular Neurobiology

### Mas alla de las monoaminas | Beyond Monoamines

**Sistema glutamatergico:**
- Glutamato: principal neurotransmisor excitatorio; > 60% de neuronas cerebrales | Main excitatory neurotransmitter
- Receptores NMDA: disfuncion en depresion (hipoactividad de interneuronas GABAergicas en corteza prefrontal) | NMDA dysfunction in depression
- Ketamina: bloqueo NMDA → desinhibicion glutamatergica → ráfaga de AMPA → BDNF → mTOR → sinaptogenesis en horas | NMDA block → glutamatergic disinhibition → AMPA burst → BDNF → synaptogenesis
- Implicaciones: receptores metabotropicos de glutamato (mGluR) como nuevas dianas | mGluR as new targets

**Neuroinflamacion:**
- Citocinas proinflamatorias (IL-6, TNF-alfa, IL-1beta) elevadas en depresion | Elevated proinflammatory cytokines in depression
- Microglía activada: contribuye a neurotoxicidad | Activated microglia: contributes to neurotoxicity
- Metabolismo del triptofano desviado: via quinurenina → quinolinato (neurotóxico) vs. serotonina | Tryptophan metabolism shifted: kynurenine pathway
- Implicaciones: anti-TNF, minociclina, celecoxib como adyuvantes antidepresivos | Anti-inflammatory adjunctive antidepressants

**Eje HPA (hipotalamo-hipofisis-adrenal):**
- Hipercortisolismo en depresion melancolica | Hypercortisolism in melancholic depression
- Resistencia a glucocorticoides en receptores del hipocampo | Glucocorticoid receptor resistance
- Mifepristona: antagonista de glucocorticoides en depresion psicotica (resultados mixtos) | Mifepristone in psychotic depression

**Eje microbioma-intestino-cerebro:**
- Disbiosis intestinal asociada con depresion y ansiedad | Gut dysbiosis associated with depression
- Nervio vago como via de comunicacion bidireccional | Vagus nerve as bidirectional communication pathway
- Probioticos psicofarmacos ("psicobioticos"): Lactobacillus, Bifidobacterium (evidencia preliminar) | Psychobiotics (preliminary evidence)

## Terapias emergentes y en desarrollo | Emerging Therapies

### Psilocibina | Psilocybin

- Agonista 5-HT2A → "reset" de la red de modo predeterminado (DMN) | 5-HT2A agonist → DMN reset
- COMPASS Pathways (Fase III): remision en 29% vs. 8% placebo a 3 semanas en DRT | 29% remission vs. 8% placebo at 3 weeks in TRD
- Duracion del efecto: semanas-meses despues de 1-2 sesiones | Effect duration: weeks-months after 1-2 sessions
- FDA Breakthrough Therapy designation | FDA breakthrough designation
- Requiere sesiones de preparacion y terapia de integracion | Requires preparation and integration therapy
- Reclasificacion regulatoria pendiente; Oregon y Colorado permiten uso supervisado | Regulatory reclassification pending

### MDMA para TEPT | MDMA for PTSD

- MAPS Fase III (MAPP1, MAPP2): 71% ya no cumplen criterios de TEPT vs. 48% placebo | 71% no longer meet PTSD criteria
- Mecanismo: liberacion masiva de serotonina, dopamina, norepinefrina + oxitocina | Massive monoamine + oxytocin release
- Facilita procesamiento de trauma en terapia asistida | Facilitates trauma processing in assisted therapy
- FDA solicitud de aprobacion presentada; decisión pendiente | FDA application submitted
- Preocupaciones: neurotoxicidad serotoninergica con uso repetido, abuso potencial | Concerns: serotonergic neurotoxicity, abuse potential

### Agonistas muscarinicos | Muscarinic Agonists

- **Xanomeline/trospium (KarXT/Cobenfy):** FDA aprobado 2024 para esquizofrenia | FDA approved 2024 for schizophrenia
  - Xanomeline: agonista M1/M4 (antipsicosis sin bloqueo D2) | M1/M4 agonist (antipsychosis without D2 blockade)
  - Trospium: antimuscarinico periferico (reduce efectos GI/colinergicos) | Peripheral antimuscarinic
  - EMERGENT-2, EMERGENT-3 trials: reduccion significativa de sintomas positivos y negativos | Significant positive and negative symptom reduction
  - Primer mecanismo antipsicotico nuevo en decadas (no-D2) | First new antipsychotic mechanism in decades

### Otros enfoques emergentes | Other Emerging Approaches

| Terapia | Mecanismo | Indicacion | Estado |
|---------|-----------|------------|--------|
| Zuranolona (Zurzuvae) | Modulador alosterico GABA-A (neurosteroide) | Depresion posparto, TDM | Aprobado FDA (PPD), en revision (TDM) |
| Brexanolona (Zulresso) | Analogo de alopregnanolona IV | Depresion posparto | Aprobado FDA (infusion 60h) |
| Dextrometorfano/bupropion (Auvelity) | Antagonista NMDA/sigma-1 + inhibidor CYP2D6 | TDM | Aprobado FDA 2022 |
| Anticuerpos anti-IL-6 | Anti-inflamatorio | Depresion con inflamacion | Fase II |
| Terapia genica (AAV-BDNF) | Restaurar BDNF en hipocampo | DRT | Preclínico |
| Psilocibina + ISRS | Combinacion | DRT | Fase II (interaccion debatida) |

## Psiquiatria de precision | Precision Psychiatry

### Research Domain Criteria (RDoC) | RDoC Framework

Enfoque transdiagnostico que reemplaza categorias DSM con dominios dimensionales: | Transdiagnostic approach replacing DSM categories with dimensional domains:

| Dominio | Constructo | Biomarcador potencial | Diana farmacologica |
|---------|-----------|----------------------|---------------------|
| Sistemas de valencia negativa | Amenaza, pérdida | Hiperactividad amigdalar | ISRS, benzodiazepinas |
| Sistemas de valencia positiva | Recompensa, motivacion | Hipoactividad del estriado | Bupropion, pramipexol |
| Cognicion | Atencion, memoria de trabajo | Conectividad prefrontal | Estimulantes, modafinilo |
| Sistemas sociales | Apego, comunicacion | Oxitocina, empatia | Psilocibina, MDMA |
| Arousal | Sueno, arousal | EEG, actigrafia | Orexina, melatonina |

### Biomarcadores para seleccion de tratamiento | Treatment Selection Biomarkers

- **EEG cuantitativo:** PEER (Psychiatric EEG Evaluation Registry) → prediccion de respuesta | Response prediction
- **Neuroimagen funcional:** Conectividad DLPFC-sgACC predice respuesta a TMS | Predicts TMS response
- **Inflamacion:** PCR elevada predice mejor respuesta a bupropion vs. ISRS (GUIDED-like) | Elevated CRP predicts better bupropion response
- **Machine learning:** Modelos integrando clinica + genomica + neuroimagen para prediccion | Integrated models for prediction

### Controversias y debates actuales | Current Controversies

1. **Serotonina y depresion:** Meta-analisis de Moncrieff (2022) cuestionando la hipotesis serotoninergica → debate sobre si ISRS funcionan "por" o "a pesar de" su efecto en serotonina | Debate about whether SSRIs work "because of" or "despite" serotonin effect
2. **Psicodelicos y regulacion:** Como integrar terapias asistidas por psicodelicos en practica clinica convencional | How to integrate psychedelic-assisted therapies
3. **Farmacogenetica:** Costo-efectividad del genotipado rutinario vs. enfoque empirico | Cost-effectiveness of routine genotyping
4. **Duracion de tratamiento:** Cuando y como descontinuar antidepresivos cronicos (REDUCE trial) | When and how to discontinue chronic antidepressants
5. **Acceso y equidad:** Esketamina/psilocibina: costo y acceso para poblaciones marginadas | Cost and access for marginalized populations

## El futuro de la psicofarmacologia | The Future of Psychopharmacology

1. **Terapia personalizada:** Seleccion farmacologica guiada por biomarcadores multimodales (genetica + neuroimagen + clinica + digital phenotyping) | Biomarker-guided personalized therapy
2. **Cronofarmacologia:** Dosificacion sincronizada con ritmos circadianos | Circadian rhythm-synchronized dosing
3. **Terapias de accion rapida:** Ketamina, psilocibina como modelos para antidepresivos de proxima generacion | Rapid-acting therapies as models
4. **Neuromodulacion no-invasiva personalizada:** TMS guiada por conectividad individual | Connectivity-guided TMS
5. **Digital therapeutics:** Apps terapeuticas basadas en evidencia como complemento farmacologico | Evidence-based therapeutic apps`,
      keyTerms: [
        {
          term: 'psilocibina | psilocybin',
          definition:
            'Agonista 5-HT2A que induce "reset" de redes cerebrales; FDA Breakthrough Therapy para DRT; efecto antidepresivo duradero (semanas-meses) despues de 1-2 sesiones con terapia de integracion | 5-HT2A agonist inducing brain network "reset"; durable antidepressant effect after 1-2 sessions',
        },
        {
          term: 'xanomeline/trospium (KarXT/Cobenfy)',
          definition:
            'Primer antipsicotico con mecanismo no-dopaminergico (agonista M1/M4); aprobado FDA 2024 para esquizofrenia; eficaz en sintomas positivos Y negativos sin EPS ni sindrome metabolico significativo | First non-dopaminergic antipsychotic; FDA approved 2024; effective for positive AND negative symptoms without EPS',
        },
        {
          term: 'zuranolona (Zurzuvae)',
          definition:
            'Modulador alosterico positivo de GABA-A derivado de neuroesteroides; aprobado para depresion posparto; administracion oral de 14 dias con efecto rapido (dia 3) | GABA-A positive allosteric modulator; approved for postpartum depression; rapid onset (day 3)',
        },
        {
          term: 'RDoC (Research Domain Criteria)',
          definition:
            'Marco de investigacion del NIMH que clasifica trastornos mentales por dominios dimensionales (valencia negativa, valencia positiva, cognicion, procesos sociales, arousal) en lugar de categorias diagnosticas tradicionales | NIMH framework classifying mental disorders by dimensional domains rather than diagnostic categories',
        },
        {
          term: 'neuroinflamacion | neuroinflammation',
          definition:
            'Activacion de microglia y citocinas proinflamatorias en el cerebro; asociada con depresion refractaria; via quinurenina desvía triptofano de serotonina a metabolitos neurotoxicos | Microglial activation and proinflammatory cytokines in brain; associated with refractory depression',
        },
        {
          term: 'protocolo SAINT (Stanford Accelerated Intelligent Neuromodulation Therapy)',
          definition:
            'TMS acelerada funcional-connectivity-guided: multiples sesiones/dia x 5 dias; tasa de remision de 79% en DRT abierto, 49% en ensayo controlado; aprobado por FDA como protocolo acelerado | Accelerated fMRI-guided TMS: 79% open-label remission in TRD; FDA approved as accelerated protocol',
        },
      ],
      clinicalNotes:
        'La psicofarmacologia esta en una era de transformacion con la introduccion de mecanismos completamente nuevos: xanomeline/trospium (agonismo muscarinico para esquizofrenia sin bloqueo D2), zuranolona (neuroesteroides para depresion), y esketamina/ketamina (glutamato para DRT). La terapia asistida por psicodelicos (psilocibina, MDMA) representa un cambio de paradigma potencial, pero requiere infraestructura de terapia de integracion y regulacion cuidadosa. En la practica clinica actual, la optimizacion de terapias existentes sigue siendo fundamental: algoritmos sistematicos para DRT, clozapina para esquizofrenia resistente (tragicamente subutilizada), y farmacogenetica como herramienta complementaria. La psiquiatria de precision (biomarcadores + genomica + IA) es el horizonte, pero la implementacion practica requiere validacion rigurosa y acceso equitativo. | Psychopharmacology is in a transformative era with novel mechanisms. Psychedelic-assisted therapy represents a paradigm shift. Optimizing existing therapies remains fundamental. Precision psychiatry is the horizon but requires rigorous validation and equitable access.',
    },
  },

  media: [],

  citations: [
    {
      id: 'stahl-psychopharmacology',
      type: 'textbook',
      title: 'Stahl\'s Essential Psychopharmacology: Neuroscientific Basis and Practical Applications',
      authors: ['Stahl SM'],
      source: 'Cambridge University Press',
    },
    {
      id: 'apa-mdd-guidelines',
      type: 'guideline',
      title: 'APA Practice Guideline for the Treatment of Major Depressive Disorder',
      authors: ['American Psychiatric Association'],
      source: 'APA',
      url: 'https://www.psychiatry.org/guidelines',
    },
    {
      id: 'star-d-study',
      type: 'journal',
      title: 'Sequenced Treatment Alternatives to Relieve Depression (STAR*D)',
      authors: ['Rush AJ', 'Trivedi MH', 'et al.'],
      source: 'American Journal of Psychiatry',
    },
    {
      id: 'compass-psilocybin',
      type: 'journal',
      title: 'Single-Dose Psilocybin for a Treatment-Resistant Episode of Major Depression (COMP360)',
      authors: ['Goodwin GM', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'goodman-gilman-cns',
      type: 'textbook',
      title: 'Goodman & Gilman\'s The Pharmacological Basis of Therapeutics',
      source: 'McGraw-Hill Education',
      chapter: 'Pharmacotherapy of Psychosis and Mania; Treatment of Depression and Anxiety Disorders',
    },
    {
      id: 'karxt-emergent-trials',
      type: 'journal',
      title: 'Xanomeline-Trospium for Schizophrenia (EMERGENT-2/3)',
      authors: ['Brannan SK', 'et al.'],
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    {
      targetId: 'pharmacology-analgesicos-analgesics',
      targetType: 'topic',
      relationship: 'related',
      label: 'Analgesicos (interaccion con ISRS, sindrome serotoninergico) | Analgesics (SSRI interactions)',
    },
    {
      targetId: 'condition-bipolar-disorder',
      targetType: 'condition',
      relationship: 'related',
      label: 'Trastorno bipolar | Bipolar Disorder',
    },
    {
      targetId: 'condition-schizophrenia',
      targetType: 'condition',
      relationship: 'related',
      label: 'Esquizofrenia | Schizophrenia',
    },
    {
      targetId: 'pharmacology-antibioticos-antibiotics',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Antibioticos | Antibiotics',
    },
    {
      targetId: 'pharmacology-anticoagulantes-anticoagulants',
      targetType: 'topic',
      relationship: 'see-also',
      label: 'Anticoagulantes (interacciones con ISRS) | Anticoagulants (SSRI interactions)',
    },
  ],

  tags: {
    systems: ['nervous', 'psychiatric', 'pharmacology'],
    topics: ['pharmacology', 'psychiatry', 'neuroscience', 'psychopharmacology'],
    keywords: [
      'psicofarmacologia',
      'antidepresivos',
      'ISRS',
      'ansioliticos',
      'antipsicoticos',
      'estabilizadores del animo',
      'litio',
      'benzodiazepinas',
      'ketamina',
      'psilocibina',
      'esquizofrenia',
      'depresion',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry', 'medicine', 'neurology', 'emergency medicine'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default psicofarmacologiaPsychopharmacology;
