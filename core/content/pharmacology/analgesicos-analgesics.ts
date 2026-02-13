/**
 * Analgesicos / Analgesics - Comprehensive Educational Content
 *
 * Covers pain management pharmacology: NSAIDs, acetaminophen/paracetamol,
 * and opioid analgesics. Spanish-first with English translations.
 */

import { EducationalContent } from '../types';

export const analgesicosAnalgesics: EducationalContent = {
  id: 'pharmacology-analgesicos-analgesics',
  type: 'topic',
  name: 'Analgesicos | Analgesics',
  nameEs: 'Analgesicos',
  alternateNames: [
    'Medicamentos para el dolor | Pain medications',
    'Analgesia | Analgesia',
    'Manejo del dolor | Pain management',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Los analgesicos son medicamentos que ayudan a aliviar el dolor. Hay diferentes tipos para diferentes niveles de dolor, desde el ibuprofeno hasta medicamentos mas fuertes como la morfina. | Analgesics are medications that help relieve pain. There are different types for different pain levels, from ibuprofen to stronger medications like morphine.',
      explanation: `## Que son los analgesicos? | What are analgesics?

Los analgesicos son medicamentos que alivian el dolor. Su doctor escoge el tipo segun que tan fuerte es su dolor y que lo esta causando. | Analgesics are medications that relieve pain. Your doctor chooses the type based on how strong your pain is and what is causing it.

### Tipos principales | Main types

**1. Antiinflamatorios (AINEs) | Anti-inflammatories (NSAIDs)**
- Ibuprofeno (Advil, Motrin) y naproxeno (Aleve)
- Reducen el dolor Y la inflamacion (hinchazon) | Reduce pain AND inflammation (swelling)
- Buenos para dolor de cabeza, dolor muscular, artritis, dolor menstrual | Good for headaches, muscle pain, arthritis, menstrual pain
- **Importante:** Tomelos con comida para proteger su estomago | **Important:** Take with food to protect your stomach
- No tome mas de lo indicado en la etiqueta | Do not take more than the label indicates

**2. Acetaminofen (Tylenol) | Acetaminophen (Tylenol)**
- Alivia el dolor y baja la fiebre | Relieves pain and reduces fever
- NO reduce la inflamacion | Does NOT reduce inflammation
- Mas suave para el estomago que los AINEs | Gentler on the stomach than NSAIDs
- **Peligro:** Tomar demasiado puede danar el higado | **Danger:** Taking too much can damage the liver
- No tome mas de 3,000 mg al dia (revise todos sus medicamentos, muchos contienen acetaminofen) | Do not take more than 3,000 mg per day (check all your medications, many contain acetaminophen)

**3. Opioides (medicamentos fuertes para el dolor) | Opioids (strong pain medications)**
- Morfina, oxicodona, hidrocodona, tramadol
- Se usan para dolor severo (despues de cirugia, cancer) | Used for severe pain (after surgery, cancer)
- Pueden causar adiccion si se usan mucho tiempo | Can cause addiction if used for a long time
- **Efectos secundarios:** estrenimiento, nauseas, somnolencia | **Side effects:** constipation, nausea, drowsiness
- **Nunca** comparta estos medicamentos con nadie | **Never** share these medications with anyone

### La escalera del dolor | The pain ladder

Piense en el dolor como una escalera: | Think of pain like a ladder:
1. **Dolor leve:** Acetaminofen o ibuprofeno | **Mild pain:** Acetaminophen or ibuprofen
2. **Dolor moderado:** AINEs mas fuertes o tramadol | **Moderate pain:** Stronger NSAIDs or tramadol
3. **Dolor severo:** Opioides (con supervision medica) | **Severe pain:** Opioids (with medical supervision)

### Cuando llamar al doctor | When to call the doctor
- El dolor no mejora con el medicamento | Pain does not improve with medication
- Tiene efectos secundarios graves | You have serious side effects
- Necesita tomar el medicamento por mas de unos dias | You need to take the medication for more than a few days
- Siente que necesita cada vez mas medicamento | You feel you need more and more medication`,
      keyTerms: [
        {
          term: 'analgesico | analgesic',
          definition:
            'Medicamento que alivia el dolor | Medication that relieves pain',
        },
        {
          term: 'AINE | NSAID',
          definition:
            'Antiinflamatorio no esteroideo - reduce dolor e inflamacion | Non-steroidal anti-inflammatory drug - reduces pain and inflammation',
        },
        {
          term: 'opioide | opioid',
          definition:
            'Medicamento fuerte para el dolor que puede causar adiccion | Strong pain medication that can cause addiction',
        },
        {
          term: 'inflamacion | inflammation',
          definition:
            'Hinchazon, enrojecimiento y dolor en una parte del cuerpo | Swelling, redness, and pain in a body part',
        },
      ],
      analogies: [
        'Los analgesicos son como diferentes herramientas en una caja - usa un martillo pequeno para un clavo pequeno, y uno grande para uno grande. | Analgesics are like different tools in a toolbox - use a small hammer for a small nail, and a big one for a big one.',
        'El acetaminofen es como bajar el volumen de la alarma del dolor. Los AINEs no solo bajan la alarma, tambien apagan el fuego (inflamacion). | Acetaminophen is like turning down the pain alarm volume. NSAIDs not only turn down the alarm, they also put out the fire (inflammation).',
      ],
      examples: [
        'Para un dolor de cabeza comun, puede tomar ibuprofeno o acetaminofen. | For a common headache, you can take ibuprofen or acetaminophen.',
        'Despues de una cirugia de rodilla, su doctor puede recetarle oxicodona por unos dias y luego cambiar a ibuprofeno. | After knee surgery, your doctor may prescribe oxycodone for a few days then switch to ibuprofen.',
      ],
      patientCounselingPoints: [
        'Revise TODOS sus medicamentos para ver si contienen acetaminofen antes de tomar Tylenol | Check ALL your medications to see if they contain acetaminophen before taking Tylenol',
        'Nunca mezcle alcohol con acetaminofen o con opioides | Never mix alcohol with acetaminophen or opioids',
        'Los opioides causan estrenimiento - pregunte a su doctor sobre un laxante | Opioids cause constipation - ask your doctor about a laxative',
      ],
    },

    2: {
      level: 2,
      summary:
        'Los analgesicos incluyen AINEs (inhibidores de COX-1/COX-2), acetaminofen (mecanismo central), y opioides (agonistas de receptores mu/kappa/delta), cada uno con indicaciones, contraindicaciones, y perfiles de seguridad distintos dentro de la escalera analgesica de la OMS. | Analgesics include NSAIDs (COX-1/COX-2 inhibitors), acetaminophen (central mechanism), and opioids (mu/kappa/delta receptor agonists), each with distinct indications, contraindications, and safety profiles within the WHO analgesic ladder.',
      explanation: `## Clasificacion de analgesicos | Analgesic Classification

### AINEs (Antiinflamatorios No Esteroideos) | NSAIDs

**Mecanismo | Mechanism:**
Inhiben las enzimas ciclooxigenasa (COX), reduciendo la produccion de prostaglandinas que causan dolor, inflamacion y fiebre. | Inhibit cyclooxygenase (COX) enzymes, reducing production of prostaglandins that cause pain, inflammation, and fever.

| AINE | Tipo | Vida media | Uso principal |
|------|------|------------|---------------|
| Ibuprofeno | COX no-selectivo | 2-4h | Dolor leve-moderado, fiebre |
| Naproxeno | COX no-selectivo | 12-17h | Artritis, dolor musculoesqueletico |
| Diclofenaco | COX no-selectivo | 1-2h | Dolor musculoesqueletico, topico |
| Ketorolaco | COX no-selectivo | 5-6h | Dolor agudo severo (solo corto plazo) |
| Celecoxib | COX-2 selectivo | 11h | Artritis (menor riesgo GI) |
| Meloxicam | COX-2 preferencial | 20h | Artritis |

**Efectos adversos principales | Main Adverse Effects:**
- **Gastrointestinales:** Gastritis, ulcera peptica, sangrado GI | Gastritis, peptic ulcer, GI bleeding
- **Renales:** Nefropatia por AINEs (reducen flujo sanguineo renal) | NSAID nephropathy (reduce renal blood flow)
- **Cardiovasculares:** Riesgo aumentado de eventos CV (especialmente COX-2) | Increased CV event risk (especially COX-2)
- **Plaquetarios:** Inhiben la agregacion plaquetaria (aspirina es irreversible) | Inhibit platelet aggregation (aspirin is irreversible)

**Contraindicaciones principales | Major Contraindications:**
- Ulcera peptica activa | Active peptic ulcer
- Enfermedad renal cronica avanzada | Advanced chronic kidney disease
- Insuficiencia cardiaca descompensada | Decompensated heart failure
- Tercer trimestre de embarazo | Third trimester of pregnancy
- Uso concomitante de anticoagulantes (precaucion) | Concurrent anticoagulant use (caution)

### Acetaminofen (Paracetamol) | Acetaminophen (Paracetamol)

**Mecanismo | Mechanism:**
- Inhibe COX centralmente (en el cerebro), no en tejidos perifericos | Inhibits COX centrally (in the brain), not in peripheral tissues
- Puede activar el sistema canabinoide endogeno y vias serotoninergicas | May activate the endocannabinoid system and serotonergic pathways
- **NO tiene efecto antiinflamatorio significativo** | **Does NOT have significant anti-inflammatory effect**

**Dosificacion | Dosing:**
- Dosis maxima: 4,000 mg/dia (3,000 mg en hepatopatia o alcohol) | Maximum dose: 4,000 mg/day (3,000 mg in liver disease or alcohol)
- Intervalo: cada 4-6 horas | Interval: every 4-6 hours
- Presente en > 600 productos combinados (vigilar dosis total) | Present in > 600 combination products (monitor total dose)

**Hepatotoxicidad | Hepatotoxicity:**
- Principal riesgo de sobredosis | Main overdose risk
- Metabolito toxico: NAPQI (N-acetil-p-benzoquinoneimina) | Toxic metabolite: NAPQI (N-acetyl-p-benzoquinoneimine)
- Antidoto: N-acetilcisteina (NAC) | Antidote: N-acetylcysteine (NAC)
- Dosis toxica: > 150 mg/kg en dosis unica o > 4g/dia cronica | Toxic dose: > 150 mg/kg single dose or > 4g/day chronic

### Opioides | Opioids

**Mecanismo | Mechanism:**
Se unen a receptores opioides (mu, kappa, delta) en el cerebro y medula espinal, bloqueando las senales de dolor. | Bind to opioid receptors (mu, kappa, delta) in the brain and spinal cord, blocking pain signals.

| Opioide | Potencia relativa | Via | Uso comun |
|---------|-------------------|-----|-----------|
| Tramadol | 0.1x morfina | Oral | Dolor moderado |
| Codeina | 0.15x morfina | Oral | Dolor leve-moderado, tos |
| Morfina | 1x (referencia) | IV/oral | Dolor severo, cancer |
| Oxicodona | 1.5x morfina oral | Oral | Dolor severo |
| Hidrocodona | 1x morfina oral | Oral | Dolor moderado-severo |
| Fentanilo | 80-100x morfina | IV/parche | Dolor severo, anestesia |
| Metadona | Variable | Oral | Dolor cronico, adiccion |

**Efectos adversos | Adverse Effects:**
- Estrenimiento (mas comun, no desarrolla tolerancia) | Constipation (most common, no tolerance develops)
- Nauseas y vomitos | Nausea and vomiting
- Sedacion y somnolencia | Sedation and drowsiness
- Depresion respiratoria (riesgo principal) | Respiratory depression (main risk)
- Prurito | Pruritus
- Retencion urinaria | Urinary retention
- Tolerancia, dependencia fisica, adiccion | Tolerance, physical dependence, addiction

### Escalera analgesica de la OMS | WHO Analgesic Ladder

| Paso | Dolor | Tratamiento |
|------|-------|-------------|
| 1 | Leve (1-3/10) | AINEs o acetaminofen |
| 2 | Moderado (4-6/10) | Opioide debil + no-opioide |
| 3 | Severo (7-10/10) | Opioide fuerte + no-opioide |

En cada paso se pueden agregar adyuvantes (gabapentina, antidepresivos, etc.) | At each step, adjuvants can be added (gabapentin, antidepressants, etc.)`,
      keyTerms: [
        {
          term: 'ciclooxigenasa (COX) | cyclooxygenase (COX)',
          definition:
            'Enzima que convierte acido araquidonico en prostaglandinas; COX-1 es constitutiva, COX-2 es inducible por inflamacion | Enzyme converting arachidonic acid to prostaglandins; COX-1 is constitutive, COX-2 is inducible by inflammation',
        },
        {
          term: 'prostaglandinas | prostaglandins',
          definition:
            'Sustancias quimicas que promueven inflamacion, dolor, y fiebre | Chemical substances that promote inflammation, pain, and fever',
        },
        {
          term: 'NAPQI',
          definition:
            'Metabolito hepatotoxico del acetaminofen; neutralizado por glutation | Hepatotoxic metabolite of acetaminophen; neutralized by glutathione',
        },
        {
          term: 'receptor opioide mu | mu opioid receptor',
          definition:
            'Receptor principal responsable de la analgesia, euforia, y depresion respiratoria de los opioides | Main receptor responsible for opioid analgesia, euphoria, and respiratory depression',
          pronunciation: 'moo',
        },
        {
          term: 'tolerancia | tolerance',
          definition:
            'Necesidad de dosis cada vez mayores para obtener el mismo efecto | Need for increasingly higher doses to achieve the same effect',
        },
      ],
      analogies: [
        'COX-1 es como un trabajador que siempre esta en la fabrica (constitutivo), mientras que COX-2 solo aparece cuando hay emergencia (inflamacion). Los AINEs no-selectivos despiden a ambos trabajadores. | COX-1 is like a worker always at the factory (constitutive), while COX-2 only shows up during emergencies (inflammation). Non-selective NSAIDs fire both workers.',
        'Los receptores opioides son como cerraduras en las puertas del dolor. Los opioides son las llaves que las cierran. | Opioid receptors are like locks on pain doors. Opioids are the keys that lock them shut.',
      ],
    },

    3: {
      level: 3,
      summary:
        'El manejo farmacologico del dolor integra la comprension de la cascada del acido araquidonico (AINEs), el metabolismo hepatico del acetaminofen y su estrecho margen terapeutico, y la farmacologia compleja de los opioides incluyendo equianalgesia, rotacion, y manejo de efectos adversos, con enfasis en analgesia multimodal. | Pharmacological pain management integrates understanding of the arachidonic acid cascade (NSAIDs), acetaminophen hepatic metabolism and narrow therapeutic margin, and complex opioid pharmacology including equianalgesia, rotation, and adverse effect management, with emphasis on multimodal analgesia.',
      explanation: `## Farmacologia detallada de AINEs | Detailed NSAID Pharmacology

### Cascada del acido araquidonico | Arachidonic Acid Cascade

Fosfolipidos de membrana → (fosfolipasa A2) → Acido araquidonico → | Membrane phospholipids → (phospholipase A2) → Arachidonic acid →

**Via de la ciclooxigenasa (COX):**
- COX-1 → tromboxano A2 (TXA2: agregacion plaquetaria), prostaglandinas gastroprotectoras (PGE2, PGI2) | COX-1 → thromboxane A2 (TXA2: platelet aggregation), gastroprotective prostaglandins
- COX-2 → prostaglandinas inflamatorias (PGE2, PGI2 en inflamacion) | COX-2 → inflammatory prostaglandins
- COX-2 tambien produce prostaciclina (PGI2) que es cardioprotectora → razon del riesgo CV de COX-2 selectivos | COX-2 also produces prostacyclin (PGI2) which is cardioprotective → reason for CV risk of selective COX-2

**Efectos de la inhibicion de prostaglandinas | Effects of Prostaglandin Inhibition:**

| Prostaglandina | Funcion normal | Efecto de inhibicion |
|----------------|----------------|----------------------|
| PGE2 (estomago) | Moco protector, bicarbonato | Ulcera, sangrado GI |
| PGE2 (rinon) | Vasodilatacion arteriola aferente | Vasoconstriccion → reduccion de TFG |
| PGI2 (vascular) | Vasodilatacion, anti-agregante | Vasoconstriccion, riesgo trombosis |
| TXA2 (plaquetas) | Agregacion plaquetaria | Anti-agregante (aspirina) |

### Aspirina: caso especial | Aspirin: Special Case
- Inhibicion irreversible de COX-1 (acetilacion de serina 529) | Irreversible COX-1 inhibition (acetylation of serine 529)
- Efecto antiplaquetario dura toda la vida de la plaqueta (7-10 dias) | Antiplatelet effect lasts entire platelet lifespan (7-10 days)
- Dosis baja (75-100 mg): efecto predominantemente antiplaquetario | Low dose: predominantly antiplatelet effect
- Dosis alta (650-1000 mg): efecto analgesico/antiinflamatorio | High dose: analgesic/anti-inflammatory effect
- Sindrome de Reye en ninos con enfermedades virales | Reye syndrome in children with viral illnesses

## Farmacologia del acetaminofen | Acetaminophen Pharmacology

### Metabolismo hepatico | Hepatic Metabolism

- **90% conjugacion:** Glucuronidacion (UGT) y sulfatacion → metabolitos inactivos excretados renalmente | Glucuronidation and sulfation → inactive metabolites excreted renally
- **5% CYP2E1:** Oxidacion → NAPQI (metabolito altamente reactivo) | Oxidation → NAPQI (highly reactive metabolite)
- **NAPQI + glutation → mercapturato inactivo** (via de detoxificacion normal) | NAPQI + glutathione → inactive mercapturate (normal detoxification)
- **Sobredosis:** Saturacion de conjugacion → mas NAPQI → agotamiento de glutation → necrosis hepatocelular centrolobulillar | Overdose: Conjugation saturation → more NAPQI → glutathione depletion → centrilobular hepatocellular necrosis

### Manejo de intoxicacion | Overdose Management

**Nomograma de Rumack-Matthew:**
- Grafica nivel serico de acetaminofen vs. tiempo post-ingestion | Plots serum acetaminophen level vs. time post-ingestion
- Linea de tratamiento: 150 mcg/mL a las 4h, 37.5 mcg/mL a las 12h | Treatment line: 150 mcg/mL at 4h, 37.5 mcg/mL at 12h
- N-acetilcisteina (NAC): repone glutation, mas efectiva en primeras 8h | NAC: replenishes glutathione, most effective within first 8h
- Protocolo IV de 21h o protocolo oral de 72h | 21h IV protocol or 72h oral protocol

## Farmacologia avanzada de opioides | Advanced Opioid Pharmacology

### Receptores opioides | Opioid Receptors

| Receptor | Localizacion | Efecto de activacion |
|----------|-------------|----------------------|
| Mu (MOR) | Cerebro (PAG, cortex), medula | Analgesia, euforia, depresion respiratoria, miosis, estrenimiento |
| Kappa (KOR) | Cerebro, medula | Analgesia espinal, disforia, sedacion |
| Delta (DOR) | Cerebro, periferia | Modulacion analgesica, efectos emocionales |

### Clasificacion farmacologica | Pharmacological Classification

- **Agonistas puros:** Morfina, fentanilo, oxicodona, metadona | Full agonists
- **Agonistas parciales:** Buprenorfina (techo analgesico, menor depresion respiratoria) | Partial agonists: Buprenorphine (analgesic ceiling, less respiratory depression)
- **Agonistas-antagonistas mixtos:** Butorfanol (agonista kappa, antagonista mu) | Mixed agonist-antagonists
- **Antagonistas:** Naloxona (IV, revierte sobredosis), naltrexona (oral, tratamiento de adiccion) | Antagonists: Naloxone (IV, reverses overdose), naltrexone (oral, addiction treatment)

### Equianalgesia y conversion | Equianalgesia and Conversion

**Tabla de conversion equianalgesica | Equianalgesic Conversion Table:**

| Opioide | Dosis oral | Dosis IV |
|---------|-----------|----------|
| Morfina | 30 mg | 10 mg |
| Oxicodona | 20 mg | N/A (tipicamente) |
| Hidrocodona | 30 mg | N/A |
| Hidromorfona | 6 mg | 1.5 mg |
| Fentanilo | N/A | 100 mcg |

**Principios de rotacion de opioides | Opioid Rotation Principles:**
1. Calcular dosis equianalgesica del nuevo opioide | Calculate equianalgesic dose of new opioid
2. Reducir 25-50% por tolerancia cruzada incompleta | Reduce 25-50% for incomplete cross-tolerance
3. Titular segun respuesta clinica | Titrate based on clinical response
4. Metadona requiere tablas de conversion especiales (ratio variable) | Methadone requires special conversion tables (variable ratio)

### Analgesia multimodal | Multimodal Analgesia

Combina multiples mecanismos para reducir opioides: | Combines multiple mechanisms to reduce opioids:
- AINEs/acetaminofen + opioide a dosis reducida | NSAIDs/acetaminophen + reduced opioid dose
- Gabapentinoides (gabapentina, pregabalina) para componente neuropatico | Gabapentinoids for neuropathic component
- Anestesicos locales (bloqueos nerviosos, infiltracion de herida) | Local anesthetics (nerve blocks, wound infiltration)
- Ketamina IV en dosis subanestesica para dolor refractario | Subanesthetic IV ketamine for refractory pain
- Relajantes musculares (ciclobenzaprina, tizanidina) | Muscle relaxants (cyclobenzaprine, tizanidine)

### Interacciones medicamentosas clave | Key Drug Interactions

| Opioide | Interaccion | Riesgo |
|---------|-------------|--------|
| Todos los opioides | Benzodiazepinas | Depresion respiratoria sinergica |
| Todos los opioides | Alcohol | Depresion SNC sinergica |
| Tramadol | ISRS/IRSN | Sindrome serotoninergico |
| Tramadol/codeina | Inhibidores CYP2D6 | Reduccion de eficacia analgesica |
| Metadona | Prolongadores de QT | Torsades de pointes |
| Fentanilo | Inhibidores CYP3A4 | Sobredosis |`,
      keyTerms: [
        {
          term: 'cascada del acido araquidonico | arachidonic acid cascade',
          definition:
            'Via metabolica donde los fosfolipidos de membrana se convierten en prostaglandinas, tromboxanos y leucotrienos | Metabolic pathway where membrane phospholipids are converted to prostaglandins, thromboxanes, and leukotrienes',
        },
        {
          term: 'NAPQI (N-acetil-p-benzoquinoneimina)',
          definition:
            'Metabolito hepatotoxico del acetaminofen generado por CYP2E1; neutralizado por conjugacion con glutation | Hepatotoxic acetaminophen metabolite generated by CYP2E1; neutralized by glutathione conjugation',
        },
        {
          term: 'equianalgesia | equianalgesia',
          definition:
            'Dosis de diferentes opioides que producen el mismo grado de analgesia | Doses of different opioids that produce the same degree of analgesia',
        },
        {
          term: 'analgesia multimodal | multimodal analgesia',
          definition:
            'Uso combinado de multiples clases de analgesicos con diferentes mecanismos para optimizar el alivio del dolor y reducir efectos adversos | Combined use of multiple analgesic classes with different mechanisms to optimize pain relief and reduce adverse effects',
        },
        {
          term: 'nomograma de Rumack-Matthew',
          definition:
            'Herramienta clinica que grafica el nivel serico de acetaminofen vs. tiempo para determinar riesgo de hepatotoxicidad y necesidad de NAC | Clinical tool plotting serum acetaminophen level vs. time to determine hepatotoxicity risk and need for NAC',
        },
        {
          term: 'tolerancia cruzada incompleta | incomplete cross-tolerance',
          definition:
            'Razon por la cual la conversion directa entre opioides puede causar sobredosis; se debe reducir 25-50% | Reason why direct conversion between opioids can cause overdose; must reduce 25-50%',
        },
      ],
      clinicalNotes:
        'La analgesia multimodal es el estandar actual de manejo del dolor perioperatorio. Combine AINEs + acetaminofen + tecnicas regionales para minimizar opioides. Siempre calcule la dosis total diaria de acetaminofen de todas las fuentes. En rotacion de opioides, SIEMPRE reduzca la dosis equianalgesica calculada por tolerancia cruzada incompleta. La metadona tiene farmacocinetica unica y requiere experiencia especial. | Multimodal analgesia is the current standard for perioperative pain management. Combine NSAIDs + acetaminophen + regional techniques to minimize opioids. Always calculate the total daily acetaminophen dose from all sources. In opioid rotation, ALWAYS reduce the calculated equianalgesic dose for incomplete cross-tolerance. Methadone has unique pharmacokinetics and requires special expertise.',
    },

    4: {
      level: 4,
      summary:
        'El manejo avanzado del dolor requiere comprension de la fisiopatologia de la nocicepcion, farmacogenetica del metabolismo de opioides (CYP2D6), optimizacion PK/PD de analgesicos, manejo de dolor cronico no-oncologico con estrategias opioid-sparing, y reconocimiento/tratamiento del trastorno por uso de opioides. | Advanced pain management requires understanding of nociception pathophysiology, opioid metabolism pharmacogenetics (CYP2D6), analgesic PK/PD optimization, chronic non-cancer pain management with opioid-sparing strategies, and recognition/treatment of opioid use disorder.',
      explanation: `## Neurofisiologia del dolor | Pain Neurophysiology

### Vias nociceptivas | Nociceptive Pathways

**Transduccion → Transmision → Modulacion → Percepcion | Transduction → Transmission → Modulation → Perception**

1. **Transduccion:** Estimulos nocivos activan nociceptores (fibras A-delta y C) | Noxious stimuli activate nociceptors (A-delta and C fibers)
2. **Transmision:** Senales viajan por tracto espinotalamico al talamo y corteza | Signals travel via spinothalamic tract to thalamus and cortex
3. **Modulacion:** Sistema descendente inhibitorio (sustancia gris periacueductal, LC, NRM) | Descending inhibitory system (periaqueductal gray, LC, NRM)
4. **Percepcion:** Procesamiento cortical e integracion emocional | Cortical processing and emotional integration

**Sensibilizacion periferica | Peripheral Sensitization:**
- Mediadores inflamatorios (PGE2, bradicinina, histamina, NGF) sensibilizan nociceptores | Inflammatory mediators sensitize nociceptors
- Reducen el umbral de activacion | Lower activation threshold
- Sitio de accion de los AINEs | Site of action of NSAIDs

**Sensibilizacion central | Central Sensitization:**
- Potenciacion de respuestas en asta dorsal (receptor NMDA, sustancia P, CGRP) | Potentiation of dorsal horn responses
- Wind-up phenomenon: aumento progresivo de respuesta a estimulos repetidos | Progressive increase in response to repeated stimuli
- Alodinia e hiperalgesia | Allodynia and hyperalgesia
- Sitio de accion de ketamina (antagonista NMDA), gabapentinoides | Site of action of ketamine (NMDA antagonist), gabapentinoids

### Mecanismos de accion de opioides | Opioid Mechanisms of Action

**Nivel molecular:**
- Receptor mu (MOR): acoplado a proteina Gi/o | Mu receptor (MOR): Gi/o protein-coupled
- Activacion → inhibicion de adenilato ciclasa → reduccion de cAMP | Activation → adenylate cyclase inhibition → cAMP reduction
- Apertura de canales de K+ (hiperpolarizacion) | K+ channel opening (hyperpolarization)
- Cierre de canales de Ca2+ voltaje-dependientes (reduccion de liberacion de neurotransmisores) | Voltage-gated Ca2+ channel closure (reduced neurotransmitter release)
- Beta-arrestina: via de senalizacion alternativa asociada con efectos adversos (depresion respiratoria, estrenimiento) | Beta-arrestin: alternative signaling pathway associated with adverse effects

## Farmacogenetica de analgesicos | Analgesic Pharmacogenetics

### CYP2D6 y metabolismo de opioides | CYP2D6 and Opioid Metabolism

**Codeina → (CYP2D6) → Morfina (metabolito activo) | Codeine → (CYP2D6) → Morphine (active metabolite)**

| Fenotipo CYP2D6 | Prevalencia | Efecto clinico |
|------------------|-------------|----------------|
| Metabolizador ultra-rapido | 1-10% (variable etnica) | Conversion excesiva → toxicidad |
| Metabolizador extensivo | 70-80% | Respuesta normal |
| Metabolizador intermedio | 10-15% | Respuesta reducida |
| Metabolizador pobre | 5-10% | Sin efecto analgesico |

**Implicaciones clinicas | Clinical Implications:**
- Codeina: CONTRAINDICADA en metabolizadores ultra-rapidos (muertes pediatricas reportadas) | Codeine: CONTRAINDICATED in ultra-rapid metabolizers (pediatric deaths reported)
- Tramadol: tambien depende de CYP2D6 para metabolito activo (O-desmetiltramadol) | Tramadol: also depends on CYP2D6 for active metabolite
- Oxicodona: CYP2D6 produce oximorfona (contribucion menor) y CYP3A4 produce noroxicodona | Oxycodone: CYP2D6 produces oxymorphone (minor contribution) and CYP3A4 produces noroxycodone
- Hidromorfona, morfina: no dependen de CYP2D6 | Hydromorphone, morphine: do not depend on CYP2D6

### Farmacogenetica de AINEs | NSAID Pharmacogenetics
- CYP2C9: metabolismo de ibuprofeno, diclofenaco, celecoxib | CYP2C9: metabolism of ibuprofen, diclofenac, celecoxib
- Metabolizadores lentos CYP2C9: mayor exposicion, mayor riesgo de sangrado GI | CYP2C9 poor metabolizers: higher exposure, higher GI bleeding risk

## Manejo del dolor cronico | Chronic Pain Management

### Estrategias opioid-sparing | Opioid-Sparing Strategies

**Farmacologicas | Pharmacological:**
- Gabapentinoides (gabapentina 300-3600 mg/dia, pregabalina 150-600 mg/dia) para dolor neuropatico | Gabapentinoids for neuropathic pain
- Duloxetina (IRSN) 60-120 mg/dia: neuropatia diabetica, fibromialgia, dolor musculoesqueletico | Duloxetine (SNRI): diabetic neuropathy, fibromyalgia, musculoskeletal pain
- Antidepresivos triciclicos (amitriptilina, nortriptilina): dolor neuropatico a dosis bajas | TCAs: neuropathic pain at low doses
- AINEs topicos (diclofenaco gel): osteoartritis localizada con menor riesgo sistemico | Topical NSAIDs (diclofenac gel): localized osteoarthritis with lower systemic risk
- Capsaicina topica (parche 8%): dolor neuropatico localizado | Topical capsaicin (8% patch): localized neuropathic pain

**Intervencionistas | Interventional:**
- Bloqueos nerviosos | Nerve blocks
- Inyecciones epidurales de esteroides | Epidural steroid injections
- Ablacion por radiofrecuencia | Radiofrequency ablation
- Estimulacion de medula espinal | Spinal cord stimulation
- Bombas de infusion intratecal | Intrathecal infusion pumps

### Trastorno por uso de opioides (TUO) | Opioid Use Disorder (OUD)

**Criterios DSM-5:** ≥ 2 de 11 criterios en 12 meses (uso mayor al pretendido, deseo persistente, craving, tolerancia, abstinencia, etc.) | DSM-5 criteria: ≥ 2 of 11 criteria in 12 months

**Tratamiento con medicamentos (MAT) | Medication-Assisted Treatment:**

| Medicamento | Mecanismo | Via | Notas |
|-------------|-----------|-----|-------|
| Metadona | Agonista mu completo | Oral | Clinicas autorizadas, riesgo QT |
| Buprenorfina | Agonista parcial mu | Sublingual/IM | Techo de depresion respiratoria |
| Naltrexona | Antagonista mu | Oral/IM mensual | Requiere desintoxicacion previa |

**Naloxona (Narcan) para sobredosis | Naloxone for Overdose:**
- Antagonista mu competitivo de accion rapida | Rapid-acting competitive mu antagonist
- Via nasal (4 mg) o IM (0.4 mg); repetir cada 2-3 min | Nasal (4 mg) or IM (0.4 mg); repeat every 2-3 min
- Vida media corta (30-90 min) - puede requerirse readministracion | Short half-life (30-90 min) - re-administration may be required
- Disponible sin receta en muchos estados | Available over the counter in many states

### Guias CDC para prescripcion de opioides | CDC Opioid Prescribing Guidelines (2022 Update)

1. **Dolor agudo:** Preferir no-opioides; si opioides, ≤ 3 dias tipicamente | **Acute pain:** Prefer non-opioids; if opioids, ≤ 3 days typically
2. **Dolor cronico:** Terapia no-opioide como primera linea; discusion riesgo-beneficio | **Chronic pain:** Non-opioid therapy as first line; risk-benefit discussion
3. **Si se usan opioides:** Liberacion inmediata, dosis mas baja efectiva | **If opioids used:** Immediate release, lowest effective dose
4. **Monitoreo:** Programas de monitoreo de prescripcion (PDMP), tamizaje de sustancias | **Monitoring:** Prescription drug monitoring programs, substance screening
5. **Naloxona:** Co-prescribir con ≥ 50 MME/dia o uso concomitante de benzodiazepinas | **Naloxone:** Co-prescribe with ≥ 50 MME/day or concurrent benzodiazepine use`,
      keyTerms: [
        {
          term: 'sensibilizacion central | central sensitization',
          definition:
            'Aumento de la excitabilidad neuronal en el sistema nervioso central que amplifica las senales de dolor; mediada por receptores NMDA y neuropeptidos | Increased neuronal excitability in CNS amplifying pain signals; mediated by NMDA receptors and neuropeptides',
        },
        {
          term: 'CYP2D6',
          definition:
            'Enzima hepatica con polimorfismo genetico significativo que metaboliza codeina, tramadol y otros opioides; su actividad determina eficacia y toxicidad | Hepatic enzyme with significant genetic polymorphism metabolizing codeine, tramadol and other opioids; its activity determines efficacy and toxicity',
        },
        {
          term: 'MME (equivalente de miligramos de morfina) | MME (morphine milligram equivalents)',
          definition:
            'Unidad estandarizada para comparar dosis entre diferentes opioides; ≥ 50 MME/dia asociado con riesgo significativamente mayor de sobredosis | Standardized unit for comparing doses across opioids; ≥ 50 MME/day associated with significantly higher overdose risk',
        },
        {
          term: 'buprenorfina | buprenorphine',
          definition:
            'Agonista parcial del receptor mu opioide; techo de depresion respiratoria, usado para dolor y trastorno por uso de opioides | Partial mu opioid receptor agonist; ceiling on respiratory depression, used for pain and opioid use disorder',
        },
        {
          term: 'trastorno por uso de opioides (TUO) | opioid use disorder (OUD)',
          definition:
            'Patron problematico de uso de opioides con criterios DSM-5 que incluyen craving, tolerancia, abstinencia, y uso a pesar de consecuencias | Problematic pattern of opioid use with DSM-5 criteria including craving, tolerance, withdrawal, and use despite consequences',
        },
        {
          term: 'beta-arrestina | beta-arrestin',
          definition:
            'Via de senalizacion alternativa del receptor mu asociada con efectos adversos de opioides; objetivo de investigacion para agonistas "sesgados" | Alternative mu receptor signaling pathway associated with opioid adverse effects; research target for "biased" agonists',
        },
      ],
      clinicalNotes:
        'La prescripcion de opioides debe ser individualizada con atencion a riesgo-beneficio. Use la calculadora de MME, consulte el PDMP, y considere co-prescribir naloxona. La farmacogenetica de CYP2D6 es clinicamente relevante para codeina y tramadol - considere alternativas en metabolizadores ultra-rapidos o pobres. La buprenorfina es una herramienta subutilizada tanto para dolor cronico como para TUO, con mejor perfil de seguridad que los agonistas completos. | Opioid prescribing should be individualized with attention to risk-benefit. Use the MME calculator, consult the PDMP, and consider co-prescribing naloxone. CYP2D6 pharmacogenetics is clinically relevant for codeine and tramadol - consider alternatives in ultra-rapid or poor metabolizers. Buprenorphine is an underutilized tool for both chronic pain and OUD, with a better safety profile than full agonists.',
    },

    5: {
      level: 5,
      summary:
        'La prescripcion basada en evidencia de analgesicos integra neurobiologia molecular de la nocicepcion, farmacogenetica y farmacodinamica de precision, enfoques multimodales basados en ensayos clinicos, estrategias de reduccion de opioides a nivel poblacional, y terapias emergentes incluyendo agonistas mu sesgados, anticuerpos anti-CGRP, y neuromodulacion avanzada. | Evidence-based analgesic prescribing integrates molecular nociception neurobiology, precision pharmacogenetics and pharmacodynamics, trial-based multimodal approaches, population-level opioid reduction strategies, and emerging therapies including biased mu agonists, anti-CGRP antibodies, and advanced neuromodulation.',
      explanation: `## Neurobiologia molecular del dolor | Molecular Pain Neurobiology

### Canales ionicos y senalizacion nociceptiva | Ion Channels and Nociceptive Signaling

**Canales TRP (Transient Receptor Potential):**
- TRPV1: activado por capsaicina, calor > 43C, pH acido; objetivo terapeutico (parche de capsaicina 8%) | TRPV1: activated by capsaicin, heat > 43C, acidic pH; therapeutic target
- TRPA1: activado por irritantes quimicos (isotiocianatos, formaldehido) | TRPA1: activated by chemical irritants
- TRPM8: activado por frio y mentol | TRPM8: activated by cold and menthol

**Canales de sodio voltaje-dependientes | Voltage-gated Sodium Channels:**
- Nav1.7: esencial para nocicepcion; mutaciones de ganancia de funcion → eritromelalgia; perdida de funcion → insensibilidad congenita al dolor | Nav1.7: essential for nociception; gain-of-function mutations → erythromelalgia; loss-of-function → congenital pain insensitivity
- Nav1.8 y Nav1.9: expresados selectivamente en nociceptores | Selectively expressed in nociceptors
- Objetivo de nuevos analgesicos selectivos Nav1.7 en desarrollo | Target of new selective Nav1.7 analgesics in development

### Sistema opioide endogeno | Endogenous Opioid System

| Peptido | Receptor preferido | Origen |
|---------|-------------------|--------|
| Beta-endorfina | Mu | Hipotalamo, hipofisis |
| Encefalinas (met, leu) | Delta > mu | SNC y periferia |
| Dinorfinas | Kappa | SNC |
| Nociceptina/orfanina FQ | NOP | SNC |

### Mecanismos de tolerancia y dependencia | Tolerance and Dependence Mechanisms

**Tolerancia:**
- Desensibilizacion del receptor (fosforilacion por GRK, internalizacion via beta-arrestina) | Receptor desensitization (GRK phosphorylation, beta-arrestin-mediated internalization)
- Desacoplamiento de proteina G | G-protein uncoupling
- Activacion de sistemas pro-nociceptivos (dinorfinas, NMDA, glia) | Activation of pro-nociceptive systems
- Hiperalgesia inducida por opioides (OIH) | Opioid-induced hyperalgesia (OIH)

**Dependencia fisica y abstinencia:**
- Upregulation de adenilato ciclasa (superactivacion al retirar opioide) | Adenylate cyclase upregulation (superactivation upon opioid withdrawal)
- Hiperactividad noradrenergica (locus coeruleus) → taquicardia, diaforesis, piloerreccion | Noradrenergic hyperactivity → tachycardia, diaphoresis, piloerection
- Clonidina/lofexidina: agonistas alfa-2 para manejo de abstinencia | Clonidine/lofexidine: alpha-2 agonists for withdrawal management

## Farmacologia de precision y terapias emergentes | Precision Pharmacology and Emerging Therapies

### Agonistas mu sesgados (biased agonists) | Biased Mu Agonists

**Concepto:** Agonistas que activan selectivamente la via de proteina G (analgesia) sin activar significativamente la via de beta-arrestina (efectos adversos) | Agonists selectively activating G-protein pathway (analgesia) without significantly activating beta-arrestin pathway (adverse effects)

- **Oliceridina (TRV130/OLINVYK):** Aprobado por FDA 2020 para dolor agudo IV | FDA approved 2020 for acute IV pain
  - Menor incidencia de nauseas y depresion respiratoria vs. morfina (APOLLO trials) | Lower incidence of nausea and respiratory depression vs. morphine
  - Controversia: magnitud del "sesgo" funcional in vivo debatida | Controversy: magnitude of functional "bias" in vivo debated

### Anticuerpos anti-CGRP y nuevas terapias para migrana | Anti-CGRP Antibodies and New Migraine Therapies

- **Anticuerpos monoclonales anti-CGRP:** Erenumab, fremanezumab, galcanezumab | Anti-CGRP monoclonal antibodies
- **Gepantes (antagonistas CGRP de molecula pequena):** Ubrogepant, rimegepant, atogepant | Gepants (small molecule CGRP antagonists)
- **Ditanes (agonistas 5-HT1F):** Lasmiditan | Ditans (5-HT1F agonists)
- Representan cambio de paradigma de terapia aguda/preventiva en migrana | Represent paradigm shift in acute/preventive migraine therapy

### Nuevos objetivos analgesicos en investigacion | Novel Analgesic Targets Under Investigation

| Objetivo | Mecanismo | Estado |
|----------|-----------|--------|
| Bloqueadores Nav1.7 selectivos | Bloqueo especifico de nociceptores | Fase II-III |
| Inhibidores de FAAH/MAGL | Elevacion de endocannabinoides | Fase I-II |
| Anticuerpos anti-NGF (tanezumab) | Bloqueo de factor de crecimiento nervioso | Aprobacion limitada (riesgo articular) |
| Agonistas NOP | Receptor de nociceptina | Preclínico/Fase I |
| Resiniferatoxina | Ablacion selectiva TRPV1 | Fase I-II (dolor oncologico) |

## Evidencia clinica y guias actuales | Clinical Evidence and Current Guidelines

### Ensayos clinicos clave | Key Clinical Trials

| Estudio | Hallazgo | Impacto |
|---------|----------|---------|
| PRECISION (NEJM 2016) | Celecoxib no inferior a naproxeno o ibuprofeno en riesgo CV | Rehabilitacion parcial de COX-2 selectivos |
| VIGOR | Rofecoxib: 4x riesgo de IM vs. naproxeno | Retiro de rofecoxib del mercado |
| APOLLO-1/2 | Oliceridina: menos nauseas/vomitos vs. morfina | Aprobacion de agonista mu sesgado |
| SPACE | Opioides no superiores a no-opioides para dolor musculoesqueletico cronico a 12 meses | Argumento contra opioides cronicos |
| IMMPACT | Estandarizacion de outcomes en ensayos de dolor | Marco para investigacion |

### Epidemia de opioides y respuesta de salud publica | Opioid Epidemic and Public Health Response

**Olas de la epidemia | Waves of the Epidemic:**
1. 1990s-2010: Prescripcion excesiva de opioides | Excessive opioid prescribing
2. 2010+: Transicion a heroina | Transition to heroin
3. 2013+: Fentanilo sintetico ilicito | Illicit synthetic fentanyl
4. Actual: Poli-sustancia (fentanilo + estimulantes + xilazina) | Current: Polysubstance

**Estrategias basadas en evidencia | Evidence-Based Strategies:**
- Programas de distribucion de naloxona | Naloxone distribution programs
- Sitios de consumo supervisado (evidencia de Canada, Europa) | Supervised consumption sites
- Expansion de acceso a buprenorfina (eliminacion de X-waiver en EE.UU. 2023) | Buprenorphine access expansion (X-waiver elimination in US 2023)
- Tiras de deteccion de fentanilo como herramienta de reduccion de danos | Fentanyl test strips as harm reduction tool

### Inteligencia artificial en manejo del dolor | AI in Pain Management

- Modelos predictivos de riesgo de adiccion (herramientas PDMP mejoradas) | Addiction risk prediction models
- Optimizacion de dosis personalizada usando aprendizaje automatico | Personalized dose optimization using machine learning
- Biomarcadores de neuroimagen para subtipos de dolor | Neuroimaging biomarkers for pain subtypes
- Algoritmos de decision clinica para seleccion de terapia multimodal | Clinical decision algorithms for multimodal therapy selection

## Neuromodulacion avanzada | Advanced Neuromodulation

### Estimulacion de medula espinal (SCS) | Spinal Cord Stimulation

- **Convencional:** Estimulacion tonica de columnas dorsales | Conventional: tonic dorsal column stimulation
- **Alta frecuencia (HF10):** 10 kHz sin parestesia; SENZA trial superior a convencional | High frequency: 10 kHz without paresthesia
- **Estimulacion de ganglios de raiz dorsal (DRG):** Para dolor regional complejo (ACCURATE trial) | DRG stimulation: for complex regional pain
- **Closed-loop (Evoke):** Ajuste automatico basado en potenciales evocados | Automatic adjustment based on evoked potentials

### Neuromodulacion no-invasiva | Non-invasive Neuromodulation
- Estimulacion magnetica transcraneal repetitiva (rTMS) | Repetitive transcranial magnetic stimulation
- Estimulacion transcraneal de corriente directa (tDCS) | Transcranial direct current stimulation
- Neuromodulacion del nervio vago | Vagus nerve neuromodulation`,
      keyTerms: [
        {
          term: 'agonista mu sesgado | biased mu agonist',
          definition:
            'Opioide que activa selectivamente la via de proteina G (analgesia) con minima activacion de beta-arrestina (efectos adversos), como oliceridina | Opioid selectively activating G-protein pathway (analgesia) with minimal beta-arrestin activation (adverse effects), such as oliceridine',
        },
        {
          term: 'CGRP (peptido relacionado con el gen de la calcitonina) | CGRP (calcitonin gene-related peptide)',
          definition:
            'Neuropeptido clave en la patogenesis de la migrana; objetivo de anticuerpos monoclonales (erenumab) y gepantes (ubrogepant) | Key neuropeptide in migraine pathogenesis; target of monoclonal antibodies and gepants',
        },
        {
          term: 'Nav1.7',
          definition:
            'Canal de sodio voltaje-dependiente expresado selectivamente en nociceptores; mutaciones humanas validan su rol esencial en la percepcion del dolor | Voltage-gated sodium channel selectively expressed in nociceptors; human mutations validate its essential role in pain perception',
        },
        {
          term: 'hiperalgesia inducida por opioides (OIH) | opioid-induced hyperalgesia',
          definition:
            'Paradoja donde el uso cronico de opioides aumenta la sensibilidad al dolor via activacion de sistemas pro-nociceptivos (dinorfinas, NMDA, glia) | Paradox where chronic opioid use increases pain sensitivity via activation of pro-nociceptive systems',
        },
        {
          term: 'oliceridina (OLINVYK)',
          definition:
            'Primer agonista mu sesgado aprobado por FDA; IV para dolor agudo; menor incidencia de nauseas y depresion respiratoria que morfina | First FDA-approved biased mu agonist; IV for acute pain; lower incidence of nausea and respiratory depression than morphine',
        },
        {
          term: 'xilazina | xylazine',
          definition:
            'Agonista alfa-2 veterinario mezclado con fentanilo ilicito; causa necrosis tisular severa, no responde a naloxona | Veterinary alpha-2 agonist mixed with illicit fentanyl; causes severe tissue necrosis, not reversed by naloxone',
        },
      ],
      clinicalNotes:
        'La prescripcion analgesica basada en evidencia requiere un enfoque personalizado que integre el fenotipo de dolor (nociceptivo, neuropatico, nociplastico, mixto), farmacogenetica, comorbilidades, y riesgo de adiccion. Los agonistas sesgados como oliceridina representan un avance prometedor pero su ventaja clinica real sigue siendo debatida. El manejo del dolor cronico debe priorizar estrategias multimodales con objetivos funcionales sobre la eliminacion completa del dolor. En la era de la crisis de opioides, la prescripcion responsable incluye evaluacion de riesgo, PDMP, co-prescripcion de naloxona, y acceso a tratamiento para TUO. | Evidence-based analgesic prescribing requires a personalized approach integrating pain phenotype (nociceptive, neuropathic, nociplastic, mixed), pharmacogenetics, comorbidities, and addiction risk. Biased agonists like oliceridine represent a promising advance but their real clinical advantage remains debated. Chronic pain management should prioritize multimodal strategies with functional goals over complete pain elimination. In the opioid crisis era, responsible prescribing includes risk assessment, PDMP, naloxone co-prescribing, and access to OUD treatment.',
    },
  },

  media: [],

  citations: [
    {
      id: 'cdc-opioid-guidelines-2022',
      type: 'guideline',
      title: 'CDC Clinical Practice Guideline for Prescribing Opioids for Pain - United States, 2022',
      authors: ['Dowell D', 'Ragan KR', 'Jones CM', 'et al.'],
      source: 'MMWR Recommendations and Reports',
      url: 'https://doi.org/10.15585/mmwr.rr7103a1',
    },
    {
      id: 'goodman-gilman-analgesics',
      type: 'textbook',
      title: 'Goodman & Gilman\'s The Pharmacological Basis of Therapeutics',
      source: 'McGraw-Hill Education',
      chapter: 'Opioid Analgesics and Antagonists; Anti-inflammatory Agents',
    },
    {
      id: 'space-trial',
      type: 'journal',
      title: 'Effect of Opioid vs Nonopioid Medications on Pain-Related Function in Patients With Chronic Back Pain or Hip or Knee Osteoarthritis Pain',
      authors: ['Krebs EE', 'Gravely A', 'Goldsmith ES', 'et al.'],
      source: 'JAMA',
      url: 'https://doi.org/10.1001/jama.2018.3963',
    },
    {
      id: 'precision-trial',
      type: 'journal',
      title: 'Cardiovascular Safety of Celecoxib, Naproxen, or Ibuprofen for Arthritis (PRECISION)',
      authors: ['Nissen SE', 'Yeomans ND', 'Solomon DH', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'who-analgesic-ladder',
      type: 'guideline',
      title: 'WHO Guidelines for the Pharmacological and Radiotherapeutic Management of Cancer Pain',
      authors: ['World Health Organization'],
      source: 'WHO',
    },
  ],

  crossReferences: [
    {
      targetId: 'pharmacology-antibioticos-antibiotics',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Antibioticos | Antibiotics',
    },
    {
      targetId: 'pharmacology-anticoagulantes-anticoagulants',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Anticoagulantes | Anticoagulants',
    },
    {
      targetId: 'pharmacology-psicofarmacologia-psychopharmacology',
      targetType: 'topic',
      relationship: 'related',
      label: 'Psicofarmacologia | Psychopharmacology',
    },
    {
      targetId: 'condition-osteoarthritis',
      targetType: 'condition',
      relationship: 'related',
      label: 'Osteoartritis | Osteoarthritis',
    },
    {
      targetId: 'condition-fibromyalgia',
      targetType: 'condition',
      relationship: 'related',
      label: 'Fibromialgia | Fibromyalgia',
    },
  ],

  tags: {
    systems: ['nervous', 'musculoskeletal', 'pharmacology'],
    topics: ['pharmacology', 'pain-management', 'opioids', 'NSAIDs', 'addiction-medicine'],
    keywords: [
      'analgesicos',
      'AINEs',
      'opioides',
      'acetaminofen',
      'dolor',
      'morfina',
      'ibuprofeno',
      'naloxona',
      'buprenorfina',
      'multimodal',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency medicine', 'psychiatry'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default analgesicosAnalgesics;
